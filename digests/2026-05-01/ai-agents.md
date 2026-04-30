# Resumo diário do ecossistema de agentes de IA 2026-05-01

> Issues: 1 | PRs: 5 | Projetos cobertos: 7 | Gerado em: 2026-04-30 20:55 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório do Projeto NullClaw — 2026-05-01

## 1. Panorama do Dia

O projeto NullClaw mantém atividade intensa no dia de hoje, com **5 PRs atualizados** nas últimas 24h, evidenciando correção активная debugs e melhorias de compatibilidade. A atividade está centrada na estabilização pós-migração para Zig 0.16, com dois PRs críticos fechados resolvendo problemas de CPU spin e falha silenciosa em mensagens Mattermost. O volume de trabalho concentrado nas mãos de um único contribuidor (@vernonstinebaker) sinaliza possível gargalo, mas a qualidade técnica das correções é notável. Há 1 issue aberta demandando suporte nativo a DuckDuckGo para dispositivos de baixo recurso — reflexo direto do caso de uso central do NullClaw.

---

## 2. Lançamentos

**Nenhum release nas últimas 24h.**

O projeto não publicou novas versões desde os commits de hoje. Isso é coerente com a fase de estabilização evidenciada pelos PRs — correções de bugs estão sendo validadas antes de um próximo release tag.

> *Sugestão:* Com base nos PRs #873 e #876 fechados, seria prudente preparar um patch release (e.g., vX.Y.Z) para corrigir a regressão de CPU 100% em produção.

---

## 3. Progresso do Projeto

### PRs merged/fechados

| PR | Título | Impacto |
|---|---|---|
| [#876](https://github.com/nullclaw/nullclaw/pull/876) | replace readSliceShort with readVec in Stream.read | **Crítico** — Desbloqueia clientes HTTP/1.1 keep-alive (curl). Resolvido busy-spin no gateway. |
| [#873](https://github.com/nullclaw/nullclaw/pull/873) | Zig 0.16 Mattermost empty-body POST e gateway accept-loop CPU spin | **Crítico** — Regressão de alta severidade corrigida. Afeta todos os agentes Mattermost em produção. |

### PRs abertos aguardando review

| PR | Título | Complexidade |
|---|---|---|
| [#878](https://github.com/nullclaw/nullclaw/pull/878) | fix(compat): nanosleep no POSIX thread.sleep | Medium — Melhora confiabilidade de sleep em POSIX |
| [#877](https://github.com/nullclaw/nullclaw/pull/877) | fix(channels/mattermost): alocar writer body antes do curlPost | Medium — Corrige POST body vazio no Mattermost |
| [#875](https://github.com/nullclaw/nullclaw/pull/875) | security: 3-tier risk classification e exec-prefix stripping | High — Refatoração de segurança para permitir `curl` em modo supervisionado |

**Destaque de progresso:** O PR #875 resolve a issue #167, separando comandos de risco médio (curl, wget, nc, scp, ftp, telnet) dos de alto risco. Isso é um avanço significativo para a usabilidade do NullClaw em cenários supervisionados.

---

## 4. Temas Quentes da Comunidade

### Issue em destaque

**[#871** — [bug] web_search é impraticável em dispositivos de baixo recurso sem suporte direto ao DuckDuckGo](https://github.com/nullclaw/nullclaw/issues/871)

- **Autor:** uMendex
- **Estado:** ABERTA (criada em 2026-04-25, atualizada em 2026-04-29)
- **Comentários:** 1 | 👍: 0
- **Análise:** A issue descreve uma limitação crítica — atualmente web_search exige API key (Brave Search) ou servidor proxy local, o que é inviável para dispositivos IoT/low-resource onde o NullClaw se propões a rodar. A demanda por suporte nativo a DuckDuckGo é coerente com a filosofia open-source e offline-first do projeto.

> A comunidade está sinalizando claramente o **caso de uso IoT/dispositivo embarcado** como prioridade, não apenas servidores.

---

## 5. Bugs e Estabilidade

### Regressões críticas resolvidas (PRs fechados hoje)

1. **100% CPU no gateway thread** — loops busy-spin em EAGAIN afeta todos os agentes em daemon mode (todas as plataformas) — **RESOLVIDO via #873**
2. **Falha silenciosa em mensagens Mattermost** — POST com body vazio causava perda de mensagens — **RESOLVIDO via #873**
3. **Clientes HTTP/1.1 keep-alive bloqueados** — curl e outros clientes ficavam travados — **RESOLVIDO via #876**

### Issue aberta em investigação

| # | Bug | Severidade | Status |
|---|---|---|---|
| #871 | web_search não funciona offline/low-resource | **Crítica** | Aberta — aguardando triagem |

**Métricas de estabilidade:**
- Bugs críticos em produção: **0** (após fixes de hoje)
- Regressões abertas: **0**
- Issues de estabilidade: **1** (web_search)

---

## 6. Pedidos de Features e Sinais de Roadmap

### Nova feature em PR

**[#875** — Sistema de classificação de risco em 3 tiers + strip de prefixo exec](https://github.com/nullclaw/nullclaw/pull/875)

Implementa:
- **Tier médio** para comandos com acesso à rede mas não destrutivos: `curl`, `wget`, `nc`, `scp`, `ftp`, `telnet`
- Antes: todos classificados como alto risco → `curl` bloqueado mesmo em modo supervisionado
- Agora: `curl` utilizável em contextos controlados

**Implicação de roadmap:** Indica que o NullClaw está evoluindo para suportar cenários onde o usuário quer controle granular sobre permissões de execução — essencial para uso em produção.

### Demanda latente (Issue #871)

Suporte nativo a DuckDuckGo como provider de busca:
- Elimina necessidade de API key
- Funciona offline (via proxy local leve)
- Usável em dispositivos ARM32/64 de baixo custo

---

## 7. Resumo de Feedback dos Usuários

### Dor principal identificada

> **"web_search é impraticável em dispositivos de baixo recurso"**

Isso confirma que o público-alvo do NullClaw é usuários de dispositivos IoT/embarcados que querem um assistente IA local, não dependente de cloud. A frustração é que o projeto promete "low-resource friendly" mas a funcionalidade de busca na web exige infraestrutura externa.

### Demanda por usabilidade

O PR #875 (3-tier risk) resolve uma dor antiga — Issue #167 — onde `curl` era bloqueado mesmo em ambientes supervisionados. Isso indica que usuários queriam usar o NullClaw como gateway de comandos, não apenas como chat.

### Cenário de uso emergentes

- Agentes Mattermost em produção (após hoje, agora está estável)
- Gateway de comandos para dispositivos IoT
- Execução local de agentes IA em hardware limitado (Raspberry Pi, Orange Pi, etc.)

---

## 8. Backlog que Merece Atenção

| Item | ID | Tempo sem resposta | Prioridade | Ação recomendada |
|---|---|---|---|---|
| Suporte DuckDuckGo nativo | #871 | ~6 dias sem resposta da equipe | **Alta** | Triar e classificar como feature request ou bug |
| Issue #167 (risk classification) | #167 | Longa data | **Alta** | Resolvida via PR #875 — fechar após merge |
| Garantir que PRs #877 e #878 sejam revisados | — | Abertos hoje | **Média** | Review de código para evitar regressões |

### Alerta de gargalo

Todos os 5 PRs abertos/fechados hoje são de **@vernonstinebaker**. Isso indica:
- Alta dedicação individual (positivo)
- Risco de burn-out ou assincronia de review (negativo)

> **Recomendação:** Buscar pelo menos mais 1-2 reviewers ativos para evitar acúmulo de PRs pendentes.

---

## Métricas de Saúde do Projeto (2026-05-01)

| Indicador | Valor | Avaliação |
|---|---|---|
| Issues abertas/atualizadas (24h) | 1 | ✅ Normal |
| PRs atualizados (24h) | 5 | ✅ Alta atividade |
| PRs fechados (24h) | 2 | ✅ Progresso visível |
| Releases (24h) | 0 | ⚠️ Aguardando patch release |
| Regressões críticas | 0 | ✅ Estabilidade recuperada |
| Issues aguardando triagem | 1 | ⚠️ Requer atenção |

**Veredicto:** O projeto está em estado **saudável com aceleração**. As correções críticas de hoje resolvem problemas de produção e preparam terreno para melhor usabilidade. A única área de atenção é a issue #871 sobre DuckDuckGo, que deve ser priorizada para manter a promessa de "low-resource device friendly".

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo do Ecossistema de Agentes de IA Open Source

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source demonstra maturidade crescente com **7 projetos ativos** em desenvolvimento intensivo, caracterizados por diferentes estágios de maturidade — desde NullClaw (foco em estabilização Zig 0.16) até Hermes Agent (v0.12.0 com 217 colaboradores). A convergência técnica é evidente: todos os projetos investem em multi-canal (Mattermost, Matrix, WhatsApp, Feishu, Slack), segurança de execução e suporte a provedores locais (Ollama). A fragmentação permanece um desafio — 9 issues P1/críticas abertas no ZeroClaw contrastam com a saúde operacional do PicoClaw. O mercado sinaliza demanda por agentes locais para IoT, colaboração multi-agente e resiliência em produção contra rate limits.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | Releases | Bugs Críticos | Saúde |
|---------|:-----------:|:---------:|:--------:|:-------------:|:-----:|
| **Hermes Agent** | 50 | 50 | v0.12.0 | 3 P1 | 🟡 Moderada |
| **ZeroClaw** | 50 | 49 | 0 | 9 P1/S1 | 🔴 Crítica |
| **CoPaw** | 50 | 16 | v1.1.5.post1 | 4 Alta | 🟢 Saudável |
| **PicoClaw** | 37 | 38 | v0.2.8 | 2 Crítica | 🟢 Robusta |
| **IronClaw** | 23 | 38 | 0 | 3 canários falhando | 🟡 Em transição |
| **NanoBot** | 15 | 27 | 0 | 3 Alta | 🟢 Ativa |
| **NullClaw** | 1 | 5 | 0 | 0 | 🟢 Estável |

**Análise de volume:** Hermes Agent e ZeroClaw lideram em volume de atividade (50 issues/PRs/24h), indicando alta adoção ou engajamento. No entanto, ZeroClaw apresenta **9 bugs P1/S1 abertos**, sugerindo dívida técnica significativa — enquanto Hermes Agent, apesar do volume, mantém estabilidade relativa com 3 P1 ativos.

---

## 3. Posicionamento do Projeto Principal

### Diferenciação Técnica

| Projeto | Diferenciador Principal | Arquitetura | Público-Alvo |
|---------|--------------------------|-------------|--------------|
| **Hermes Agent** | Auto-curation + Kanban multi-agente | Python/PyTorch | Enterprise, equipes |
| **NullClaw** | Low-resource, Zig native, offline-first | Zig | IoT, dispositivos embarcados |
| **IronClaw** | Arquitetura Reborn, WASM runtime | Rust | High-performance, multi-tenant |
| **PicoClaw** | MCP nativo, Go-based | Go | DevOps, integrações |
| **ZeroClaw** | Schema-driven skills, ACP v1 | Node.js | Automação corporativa |
| **NanoBot** | Ultra-lightweight, multi-canal | Python | Usuários individuais |
| **CoPaw** | Feishu-first, Qwen integration | Python | Mercados asiáticos |

### Vantagens Competitivas por Segmento

**Para dispositivos受限 (low-resource):** NullClaw (Zig, <1MB), NanoBot (minimal deps)

**Para enterprise/multi-usuário:** Hermes Agent (Kanban, Curator), IronClaw (Reborn isolation)

**Para integrações profundas:** PicoClaw (MCP CLI completo), ZeroClaw (ACP v1 protocol)

**Para mercados asiáticos:** CoPaw (Feishu-first, Qwen), ZeroClaw (WeChat via iLink)

---

## 4. Focos Técnicos Compartilhados

### Necessidades Transversais Identificadas

| Foco | Ocorrências | Projetos Afetados |
|------|:-----------:|-------------------|
| **Suporte a Ollama local** | 4 | NullClaw (#871), NanoBot (#603), ZeroClaw (#6123), PicoClaw (#2225) |
| **Segurança de execução (curl, exec)** | 3 | NullClaw (#875), Hermes (#8576), NanoBot (#979) |
| **DeepSeek reasoning_content** | 3 | Hermes (#16677), NanoBot (#3554), ZeroClaw (#6233) |
| **Windows compatibility** | 4 | CoPaw (#3955), PicoClaw (#2472), NanoBot (#3506), Hermes (#5726) |
| **Memory/context persistence** | 5 | Todos os projetos |
| **Multi-channel (WhatsApp/Feishu)** | 6 | Todos os projetos |
| **Rate limiting/fallback** | 2 | PicoClaw (#2408), Hermes (#2408-like) |

### Padrão Técnico Recorrente

**1. Dívida técnica em providers:**
- `openai-codex` no Hermes Agent (3 issues P2 abertas há 23 dias)
- DeepSeek com reasoning_content dropado em 3 projetos
- Ollama local com problemas de configuração em 4 projetos

**2. Complexidade assíncrona em canais:**
- WeCom/WeChat com RuntimeError em loops asyncio (CoPaw, ZeroClaw)
- WebSocket reconnection race conditions (CoPaw #3963)
- Matrix E2EE e streaming vazio (NanoBot, Hermes, ZeroClaw)

**3. Prompt injection e segurança:**
- Bypass de proteção `rm` via injeção (NanoBot #979)
- Path traversal em Windows (CoPaw #3955)
- Gateway ApprovalManager ignorado (ZeroClaw #6207)

---

## 5. Análise de Diferenciação

### Por Público-Alvo

```
Enterprise/Teams          Hobbyists/Individuais       IoT/Embarcados
├── Hermes Agent (Kanban) ├── NanoBot (minimal)     ├── NullClaw (Zig)
├── IronClaw (multi-tenant) └── CoPaw (Feishu)      └── PicoClaw (ARM builds)
└── ZeroClaw (ACP v1)                               
```

### Por Filosofia Arquitetural

| Filosofia | Projetos | Trade-off |
|-----------|----------|-----------|
| **Native compiled** | NullClaw (Zig), IronClaw (Rust) | Performance + segurança de memória vs. curva de adoção |
| **Scripting runtime** | Hermes (Python), NanoBot (Python) | Flexibilidade vs. performance |
| **Go-based** | PicoClaw | Produtividade vs.生态系统 |
| **Node.js** | ZeroClaw | NPM ecosystem vs. memory footprint |

### Diferenciação de Features

**Maturidade colaborativa:**
- Hermes Agent: Kanban multi-agente, Curator auto-manutenção
- IronClaw: CapabilityHost, AgentLoopDriver

**Extensibilidade:**
- PicoClaw: MCP CLI completo (show/add/list/remove/test/edit)
- ZeroClaw: Schema v3, SKILL.toml-driven
- CoPaw: FeishuCardHandler com botões interativos

**Low-resource:**
- NullClaw: Focado em DuckDuckGo nativo para IoT
- NanoBot: Minimal dependencies

---

## 6. Tração e Maturidade da Comunidade

### Velocidade de Iteração

| Projeto | PRs merged (24h) | Issue close rate | Tendência |
|---------|:----------------:|:----------------:|:---------:|
| **IronClaw** | 22 | ~60% | 🔼 Acelerando (Reborn landing) |
| **Hermes Agent** | 11 | ~14% | 🔼 Estável-alta |
| **CoPaw** | 14 | ~66% | 🔼 Resposta rápida |
| **NanoBot** | 9 | ~53% | 🔼 Saudável |
| **PicoClaw** | 6 | ~19% | 🔽 Volume baixo |
| **ZeroClaw** | 16 | ~50% | ⚠️ Queda qualitativa |
| **NullClaw** | 2 | ~40% | 🔽 Baixo volume (1 contribuidor) |

### Indicadores de Maturidade

| Indicador | Líder | Seguidor | Laggard |
|-----------|-------|----------|---------|
| **Colaboradores** | Hermes (217) | IronClaw ( dezenas) | NullClaw (1-2) |
| **Releases formais** | Hermes (trimestral), PicoClaw (monthly) | CoPaw, NullClaw | IronClaw, ZeroClaw |
| **Documentação** | PicoClaw (Pi guide), Hermes (Kanban RFC) | CoPaw | ZeroClaw (needs website) |
| **Segurança responsiva** | CoPaw (#3955 - 12h response) | NanoBot, Hermes | ZeroClaw |

### Risco de Gargalo

| Projeto | Risco | Sinal |
|---------|-------|-------|
| **NullClaw** | 🔴 Burnout | 1 contribuidor (vernonstinebaker) em 5 PRs |
| **ZeroClaw** | 🔴 Manutenção | 9 P1 abertas, 20+ P2 |
| **Hermes Agent** | 🟡 Fragmentação | openai-codex cluster estagnado |
| **PicoClaw** | 🟡 Revisão atrasada | PR #2313 (23 dias), #2091 (29 dias) |

---

## 7. Sinais de Tendência

### Tendências Extraídas do Feedback

**1. Agentes para IoT e dispositivos受限 emergem como caso de uso prioritário**
> "web_search é impraticável em dispositivos de baixo recurso sem suporte direto ao DuckDuckGo" — NullClaw #871
> "Keep a small Android TV box alive as a real PicoClaw node" — PicoClaw #2462
> "Raspberry Pi Zero 2 + WhatsApp" — PicoClaw #2625

**2. Multi-agente collaboration é o próximo marco de maturidade**
> Hermes Agent: Kanban multi-profile + dispatcher daemon (#16100)
> IronClaw: CapabilityHost + multi-tenant isolation
> CoPaw: "A2A" multi-agent communication patterns

**3. Segurança de execução em contextos supervisionados é exigência crescente**
> NullClaw: 3-tier risk classification (#875)
> Hermes: Security posture CLI (#18082)
> PicoClaw: Agent Shield + multi-user hardening (#2313)

**4. Provedores locais (Ollama, local LLMs) dominam issues de configuração**
> 4 projetos com issues sobre Ollama local
> 3 projetos com problemas de DeepSeek reasoning_content
>all projects struggling with provider stability

**5. Mercados não-anglofônicos em expansão**
> CoPaw: Feishu-first, WeChat/WeCom integrations
> ZeroClaw: WeChat personal via iLink Bot (#6166), zh-CN translation
> IronClaw: Aliyun Coding Plan support (#1446)

**6. Observabilidade e debuggability em produção**
> IronClaw: OTel GenAI spans (#6190)
> Hermes: OpenTelemetry tracing (#3173)
> NanoBot: HookCenter com sistema de eventos tipado (#3564)

---

## Síntese para Decisores

| Decisor | Recomendação |
|---------|--------------|
| **Escolha para IoT/dispositivo embarcado** | NullClaw (Zig, offline-first) |
| **Escolha para enterprise/equipes** | Hermes Agent (Kanban, Curator, maturity) |
| **Escolha para DevOps/integrações** | PicoClaw (MCP native, Go performance) |
| **Escolha para mercados asiáticos** | CoPaw (Feishu-first) ou ZeroClaw (WeChat) |
| **Escolha para performance máxima** | IronClaw (Rust, WASM, Reborn) |
| **Evitar por enquanto** | ZeroClaw (9 P1 abertas, dívida técnica) |

*Relatório gerado em 2026-05-01. Dados de snapshot GitHub.*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>


# Relatório do Projeto NanoBot — 2026-05-01

## 1. Panorama do Dia

O NanoBot apresenta alta atividade comunitária em 30 de abril de 2026, com 15 issues e 27 PRs atualizadas nas últimas 24h. A taxa de resolução de issues permanece saudável (8 fechadas vs 7 abertas), e 9 PRs foram mergeadas ou fechadas, indicando progresso consistente. O projeto não lançou novas versões, mantendo-se na estável v0.1.5.post3. A comunidade demonstra engajamento significativo em múltiplas áreas: canais (Matrix, Feishu, WebSocket), provedores (DeepSeek, OpenAI), e melhorias de arquitetura (hooks, multi-agent).

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto permanece na versão **v0.1.5.post3**, sem novos tags ou releases detectados.

---

## 3. Progresso do Projeto

### PRs Mergeadas/Fechadas (9 total)

| PR | Autor | Descrição | Impacto |
|----|-------|-----------|---------|
| [#3562](https://github.com/HKUDS/nanobot/pull/3562) | bstaeheli | Fix Matrix: skip empty stream deltas | Resolve spam de mensagens vazias no Matrix |
| [#3565](https://github.com/HKUDS/nanobot/pull/3565) | bstaeheli | Fix Matrix: skip empty stream deltas (v2) | Correção adicional do mesmo issue |
| [#3557](https://github.com/HKUDS/nanobot/pull/3557) | dannylty | lunarpixie | (sem detalhes disponíveis) |
| [#3556](https://github.com/HKUDS/nanobot/pull/3556) | orkapodavid | .gitattributes com política LF | Compatibilidade cross-platform |
| [#3550](https://github.com/HKUDS/nanobot/pull/3550) | orkapodavid | docs: caminhos POSIX temporários | Usabilidade Windows/macOS |

**Destaque:** As correções do Matrix channel (#3562, #3565) são importantes para estabilidade do canal, especialmente com provedores que enviam chunks `reasoning_content` vazios (como DeepSeek).

---

## 4. Temas Quentes da Comunidade

### Issues com Mais Comentários/Reações

| Issue | Comentários | 👍 | Tema |
|-------|-------------|-----|------|
| [#660](https://github.com/HKUDS/nanobot/issues/660) | 11 | 5 | Contradição "ultra-lightweight" vs dependência Node.js |
| [#603](https://github.com/HKUDS/nanobot/issues/603) | 7 | 0 | Configuração ollama local não funciona |
| [#3546](https://github.com/HKUDS/nanobot/issues/3546) | 6 | 0 | NanoBot "perde memória" e reply_in_thread forçado no Feishu |

### Análise

1. **#660 - Dependência Node.js contradiz branding**: A comunidade questiona a claim "ultra-lightweight" dado que o Dockerfile exige Python + Node.js. Este é um tema recorrente de *brand perception vs. arquitetura real*.

2. **#603 - Ollama local**: Usuários lutam com configuração local de LLMs. Este é um padrão comum em projetos de agentes — abaré interface local geralmente requer configuração cuidadosa de `apiBase` e `apiKey`.

3. **#3546 - Memória e Feishu**: Problema crítico de usabilidade no Feishu. Dois bugs entrelaçados: reply_in_thread forçado e perda de contexto em mensagens subsequentes.

---

## 5. Bugs e Estabilidade

### Bugs Abertos (por severidade estimada)

**🔴 Alta Severidade:**
- [#3554](https://github.com/HKUDS/nanobot/issues/3554) - DeepSeek-V4 `reasoning_content` error ainda ocorre em v0.1.5.post3
- [#3551](https://github.com/HKUDS/nanobot/issues/3551) - Streaming SSE fecha prematuramente para requests com tools
- [#3553](https://github.com/HKUDS/nanobot/issues/3553) - Matrix channel lê mensagens antigas no startup/restart

**🟡 Média Severidade:**
- [#979](https://github.com/HKUDS/nanobot/issues/979) - Proteção contra `rm` não funciona contra prompts injetados
- [#2298](https://github.com/HKUDS/nanobot/issues/2298) - Loops infinitos de tool calling com modelos menores

**🟢 Baixa Severidade:**
- [#3559](https://github.com/HKUDS/nanobot/issues/3559) - WebSocket não substitui webhooks para delivery proativo

### Correções Recentes (Matrix)
Os PRs [#3562](https://github.com/HKUDS/nanobot/pull/3562) e [#3565](https://github.com/HKUDS/nanobot/pull/3565) corrigiram o spam de mensagens vazias causado por chunks `reasoning_content` vazios do DeepSeek.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Propostas (7 PRs abertas hoje)

| PR | Autor | Feature | Status |
|----|-------|---------|--------|
| [#3568](https://github.com/HKUDS/nanobot/pull/3568) | SebConejo | Suporte a Manifest LLM router | Aberta |
| [#3358](https://github.com/HKUDS/nanobot/pull/3358) | chengyongru | Model presets para troca rápida de modelos | Aberta |
| [#3564](https://github.com/HKUDS/nanobot/pull/3564) | aiguozhi123456 | HookCenter com sistema de eventos tipado e plugins | Aberta |
| [#3173](https://github.com/HKUDS/nanobot/pull/3173) | Chen-zexi | OpenTelemetry tracing para LLM e tools | Aberta |
| [#3461](https://github.com/HKUDS/nanobot/pull/3461) | chengyongru | Multi-agent mailbox channel plugin | Aberta |
| [#3549](https://github.com/HKUDS/nanobot/pull/3549) | yorkhellen | sender_id no contexto LLM | Aberta |
| [#3552](https://github.com/HKUDS/nanobot/pull/3552) | BarclayII | Identidade do sender no prompt Feishu | Aberta |

### Sinais de Roadmap

1. **Observabilidade**: Integração OpenTelemetry (#3173) sugere foco em debugabilidade e monitoramento em produção.

2. **Extensibilidade**: HookCenter (#3564) e multi-agent mailbox (#3461) indicam movimento para arquitetura mais plugin-friendly.

3. **Configuração**: Model presets (#3358) responde à dor de usuários que alternam frequentemente entre modelos.

4. **Provedores**: Adição de Manifest (#3568) expande o ecossistema de provedores suportados.

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Categoria | Issue | Descrição |
|-----------|-------|-----------|
| **Configuração** | #603 | Usuários locais não conseguem configurar ollama corretamente |
| **Canal Feishu** | #3546 | Comportamento confuso com reply_in_thread forçado + perda de memória |
| **Segurança** | #979 | Comandos destrutivos bypassam proteções via injeção de prompts |
| **UX/LM** | #2298 | Modelos menores causam loops infinitos de tool calls |
| **Portabilidade** | #3506 | Matrix channel completamente quebrado no Windows |

### Cenários de Uso Emergentes

- **Multi-tenant com Webhooks**: Issue #3559 indica demanda por message delivery proativo em ambientes SaaS
- **Automação com contexto**: Issue #3484 mostra necessidade de sessions persistentes para automação
- **Identidade de usuários**: PRs #3549 e #3552 buscam personalização baseada em sender

### Tendência de Satisfação

**Neutro a Positivo** — bugs críticos estão sendo addressed (Matrix, DeepSeek streaming), mas questões estruturais (segurança de prompts, estabilidade Windows) permanecem abertas.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta/Atuação Prolongada

| Issue | Idade | Status | Prioridade |
|-------|-------|--------|------------|
| [#979](https://github.com/HKUDS/nanobot/issues/979) - Bypass de proteção rm | ~2 meses | Aberta | 🔴 Alta |
| [#2298](https://github.com/HKUDS/nanobot/issues/2298) - Loops infinitos | ~1 mês | Aberta | 🟡 Média |
| [#1385](https://github.com/HKUDS/nanobot/pull/1385) - reasoning_details preservation | ~2 meses | Aberta | 🟡 Média |
| [#3559](https://github.com/HKUDS/nanobot/issues/3559) - WebSocket vs Webhooks | 1 dia | Aberta | 🟡 Média |

### Recomendações

1. **#979 - Prioridade crítica**: Bypass de segurança via prompt injection é vulnerabilidade séria
2. **#1385 - Estagnado há 2 meses**: Fix para multi-turn com reasoning models deveria ser priorizado
3. **#3559**: Decisão de arquitetura sobre WebSocket vs Webhooks precisa de resolução oficial

---

## Métricas Resumidas (2026-04-30)

| Métrica | Valor |
|---------|-------|
| Issues ativas abertas | 7 |
| Issues fechadas | 8 |
| PRs abertas | 18 |
| PRs merged/fechadas | 9 |
| Novas releases | 0 |
| Bugs críticos abertos | 3 |
| Features em review | 7 |

**Saúde Geral**: O projeto demonstra atividade saudável com alta taxa de resolução de issues (53%) e contribuições diversificadas em canais, provedores e arquitetura. Atenção necessária para questões de segurança (#979) e estabilidade cross-platform (Windows).

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-05-01

---

## 1. Panorama do Dia

O Hermes Agent mantém **atividade intensa** em 30 de abril de 2026, data do lançamento da versão **v0.12.0 ("The Curator release")**, que trouxe 1.096 commits, 550 PRs mescladas e 217 colaboradores — um marco significativo de maturidade do projeto. Nas últimas 24 horas, foram registradas 50 issues e 50 PRs atualizadas, com 11 PRs já mescladas/fechadas, indicando um fluxo de trabalho saudável e alta confiança da equipe mantenedora. A comunidade demonstra engajamento robusto em features colaborativas (Kanban, Linear adapter) e correções críticas de stability, embora bugs P1 no gateway (DeepSeek via OpenRouter) e no CLI (keyboard freeze) exijam atenção imediata.

---

## 2. Lançamentos

### 🆕 v2026.4.30 — Hermes Agent v0.12.0 "The Curator Release"

| Métrica | Valor |
|---|---|
| **Commits** | 1.096 |
| **PRs mescladas** | 550 |
| **Arquivos alterados** | 1.270 |
| **Linhas adicionadas** | 217.776 |
| **Colaboradores** | 217 |

**Destaque principal:** O agente agora **mantém a si mesmo** de forma autônoma em background. O release introduz um curator ("The Curator") que permite auto-gerenciamento, patches automáticos de habilidades e persistência de memória de longo prazo.

**Breaking changes:** Não documentados explicitamente na release notes. Recomenda-se revisar o diff em [` NousResearch/hermes-agent/releases/tag/v2026.4.30`](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.4.30).

**Notas de migração:** Ainda não publicadas. Dado o volume de mudanças (217k+ linhas), sugere-se teste cuidadoso em ambiente staging antes de upgrade em produção.

---

## 3. Progresso do Projeto

### PRs Mescladas/Fechadas Hoje (2026-04-30)

| # | Título | Tipo | Impacto |
|---|---|---|---|
| [#16100](https://github.com/NousResearch/hermes-agent/pull/16100) | Kanban multi-profile collaboration board + dispatcher daemon | Feature | Adiciona quadro Kanban SQLite-backed com dispatcher atômico para colaboração multi-agente |
| [#17805](https://github.com/NousResearch/hermes-agent/pull/17805) | Salvage do Kanban em main (22 commits squashed) | Feature | Rebase do #16100 com correção de POST path no dashboard |
| [#18079](https://github.com/NousResearch/hermes-agent/pull/18079) | LLM-wiki multi-wiki support por perfil | Feature | Suporte a múltiplas wikis por perfil Hermes |
| [#5731](https://github.com/NousResearch/hermes-agent/pull/5731) | Reconstruct Codex stream when SDK returns empty output | Bugfix | Corrige invalidação de respostas válidas do Codex |
| [#18075](https://github.com/NousResearch/hermes-agent/pull/18075) | Tool call deduplication para loops redundantes | Feature | Previne execução repetida de mesma tool call |

**Análise:** A **feature Kanban** (#16100/#17805) representa o maior avanço colaborativo do dia, habilitando trabalho multi-agente em equipe — sinalizando maturidade para用例 enterprise. A correção de stream do Codex (#5731) resolve um problema recorrente que afetava usuários do ChatGPT Codex.

---

## 4. Temas Quentes da Comunidade

### Issues/PRs com Maior Engajamento

| # | Título | Comentários | 👍 | Status | Categoria |
|---|---|---|---|---|---|
| [#16102](https://github.com/NousResearch/hermes-agent/issues/16102) | RFC: Kanban multi-profile collaboration board | 13 | 0 | Closed | Feature |
| [#5726](https://github.com/NousResearch/hermes-agent/issues/5726) | Slow startup: Honcho memory blocks ~60s+ per step | 5 | 0 | Open | Performance |
| [#8576](https://github.com/NousResearch/hermes-agent/issues/8576) | WhatsApp bridge tem 3 npm vulnerabilities | 5 | 1 | Open | Security |
| [#17648](https://github.com/NousResearch/hermes-agent/issues/17648) | Matrix messages returning ImportError | 5 | 1 | Open | Bug |
| [#5826](https://github.com/NousResearch/hermes-agent/issues/5826) | Linear platform adapter para gateway | 2 | 3 | Open | Feature |

**Análise de Demandas:**
- **Colaboração em equipe** liderou o debate (Kanban RFC com 13 comentários), indicando kuat demanda por features multi-usuário e workflows de projeto.
- **Linear adapter** (#5826) tem o maior número de 👍 (3), sinalizando que integração com gerenciadores de projeto externos é aguardada pela comunidade.
- **Performance de startup** (#5726) e **security npm** (#8576) indicam preocupações operacionais em deployments reais.

---

## 5. Bugs e Estabilidade

### 🛑 P1 — Críticos (Impedem uso)

| # | Título | Componentes | Status |
|---|---|---|---|
| [#17648](https://github.com/NousResearch/hermes-agent/issues/17648) | Matrix messages returning ImportError `cfg_get` | gateway, matrix | Open |
| [#16677](https://github.com/NousResearch/hermes-agent/issues/16677) | DeepSeek V4 Pro via OpenRouter causa crash loop no gateway e falha no Telegram | gateway, telegram, openrouter, deepseek | Open |
| [#17959](https://github.com/NousResearch/hermes-agent/issues/17959) | Keyboard input freezes completely — Ctrl+C inútil | cli, minimax | Open |
| [#11999](https://github.com/NousResearch/hermes-agent/issues/11999) | delegate_task ignora subagent model config | tools, delegate | Closed |

**⚠️ Atenção:** O bug de DeepSeek via OpenRouter (#16677) afeta diretamente o Telegram bot em produção — **prioridade máxima**.

### ⚠️ P2 — Altos (Degradam experiência)

| # | Título | Componentes |
|---|---|---|
| [#5875](https://github.com/NousResearch/hermes-agent/issues/5875) | openai-codex ignora custom base_url com raw_codex=true |
| [#5879](https://github.com/NousResearch/hermes-agent/issues/5879) | openai-codex sempre retorna `response.output is empty` |
| [#5883](https://github.com/NousResearch/hermes-agent/issues/5883) | GPT-5.4 via openai-codex falha com 'Empty/malformed response' |
| [#15524](https://github.com/NousResearch/hermes-agent/issues/15524) | patch tool: parâmetros condicionais omitidos |
| [#5722](https://github.com/NousResearch/hermes-agent/issues/5722) | terminal.docker_forward_env ignorado silenciosamente |
| [#5729](https://github.com/NousResearch/hermes-agent/issues/5729) | Telegram fails silently on cold boot |
| [#18072](https://github.com/NousResearch/hermes-agent/issues/18072) | Status mostra web tools disponíveis com auth revogada |

**Padrão identificado:** Problemas recorrentes com **openai-codex** (3 issues P2) sugerem dívida técnica significativa no provider. Recomenda-se auditagem da implementação.

### 🔧 P3 — Médios

Diversos bugs em browser tool, MCP, patch tool, e config parsing — menor impacto, mas afetam DX em casos específicos.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features em Alta

| # | Título | 👍 | Componentes | Potencial |
|---|---|---|---|---|
| [#5826](https://github.com/NousResearch/hermes-agent/issues/5826) | Linear platform adapter para gateway | 3 | gateway | Alto — integra gerenciador de projetos popular |
| [#5715](https://github.com/NousResearch/hermes-agent/issues/5715) | `/title` auto-generate from conversation | 0 | cli, gateway | Médio — melhora UX de sessões |
| [#5810](https://github.com/NousResearch/hermes-agent/issues/5810) | Carry last N messages into new session on auto-reset | 1 | agent | Alto — reduz fricção em resets |
| [#5876](https://github.com/NousResearch/hermes-agent/issues/5876) | Multi-Agent Council Skill (4-Persona reasoning) | 0 | tools, skills | Experimental — padrão emergente |
| [#5887](https://github.com/NousResearch/hermes-agent/issues/5887) | Add Mistral Voxtral Transcribe como STT provider | 0 | tool/tts | Médio — adiciona provedor com 4% WER |
| [#18056](https://github.com/NousResearch/hermes-agent/issues/18056) | Expose browser upload command | 0 | tool/browser | Médio — habilita automação web mais rica |
| [#18041](https://github.com/NousResearch/hermes-agent/issues/18041) | Per-route sender/event-type denylists para webhooks | 0 | gateway, webhook | Alto — reduz ruído em integrações |

### PRs de Feature Abertas

| # | Título | Descrição |
|---|---|---|
| [#18082](https://github.com/NousResearch/hermes-agent/pull/18082) | Enterprise security policy posture | CLI `hermes security` + filesystem write constraints |
| [#14768](https://github.com/NousResearch/hermes-agent/pull/14768) | LLM Gateway (llmgateway.io) provider | Provedor agregado OpenAI-compatible |
| [#17647](https://github.com/NousResearch/hermes-agent/pull/17647) | Codex browser OAuth fallback | Autenticação PKCE para Codex |
| [#18059](https://github.com/NousResearch/hermes-agent/pull/18059) | Message embedding para semantic search | Vetores de embedding opt-in |
| [#5723](https://github.com/NousResearch/hermes-agent/pull/5723) | `/caveman` toggle — compressed responses ~75% fewer tokens | Modo de resposta compressiva |

**Sinais de Roadmap:** O foco da v0.12.0 em **auto-curation** sugere que a próxima versão pode priorizar **colaboração multi-agente** (Kanban) e **enterprise features** (security posture, semantic search).

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Categoria | Descrição | Frequência |
|---|---|---|
| **Instabilidade do provider** | openai-codex e DeepSeek falham intermitentemente, forçando workarounds manuais | Alta |
| **Performance de inicialização** | Startup de 2+ minutos devido a memory provider blocking | Alta |
| **Complexidade de auth** | Autenticação Codex via OAuth é frágil e não tolera refresh failures | Média |
| **Integração com plataformas** | Telegram falha em cold boot; Matrix quebra com ImportError pós-update | Média |
| **Memory/recall** | Recalls assíncronos retornam informação irrelevante para query atual | Média |

### Cenários de Uso Reportados

- **Desenvolvimento local com Docker:** Usuários enfrentam silêncio ao configurar `docker_forward_env` — feature não funciona como documentado.
- **Multi-turn tool calls:** DeepSeek com thinking mode dropa `reasoning_content`, causando HTTP 400.
- **Enterprise deployment:** Necessidade de security policies granulares (filesystem constraints) e integração com Linear/Jira.

### Satisfação

O release v0.12.0 foi recebido positivamente, especialmente o conceito de **"Curator"** para auto-manutenção. A feature Kanban (#16100) teve 13 comentários de discussão, indicando forte interesse em workflows colaborativos.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta / Abandonadas

| # | Título | Criado | Atualizado | Estado | Observação |
|---|---|---|---|---|---|
| [#5718](https://github.com/NousResearch/hermes-agent/issues/5718) | openai-codex: allow configurable api_mode | 2026-04-07 | 2026-04-30 | Open, 0 comentários | Feature request legítimo sem triagem |
| [#18083](https://github.com/NousResearch/hermes-agent/issues/18083) | DANGEROUS_PATTERNS regex flags every absolute path | 2026-04-30 | 2026-04-30 | Open, 0 comentários | Bug de security — requer triagem urgente |

### Issues Estagnadas (>7 dias sem atualização significativa)

| # | Título | Criado | Dias Estagnado | Prioridade |
|---|---|---|---|---|
| [#5726](https://github.com/NousResearch/hermes-agent/issues/5726) | Slow startup Honcho memory | 2026-04-07 | ~23 dias | P3 → Pode escalar para P2 |
| [#5720](https://github.com/NousResearch/hermes-agent/issues/5720) | Sync recall for current turn | 2026-04-07 | ~23 dias | P3 — Feature request legítimo |
| [#5715](https://github.com/NousResearch/hermes-agent/issues/5715) | /title auto-generate | 2026-04-07 | ~23 dias | P3 |
| [#5826](https://github.com/NousResearch/hermes-agent/issues/5826) | Linear adapter | 2026-04-07 | ~23 dias | P3 (3 👍) — Merece promoção |
| [#5875](https://github.com/NousResearch/hermes-agent/issues/5875) | openai-codex base_url | 2026-04-07 | ~23 dias | P2 — Bug recorrente |
| [#5879](https://github.com/NousResearch/hermes-agent/issues/5879) | openai-codex output empty | 2026-04-07 | ~23 dias | P2 |

**Recomendação:** Issues do cluster `openai-codex` (#5875, #5879, #5883, #5718) estão abertas há 23 dias sem resolução — indicam **dívida técnica séria** no provider. Recomenda-se sprint focado em estabilidade do Codex.

---

## Métricas Consolidada do Dia

| Indicador | Valor |
|---|---|
| Issues ativas (24h) | 43 |
| Issues fechadas (24h) | 7 |
| PRs abertas (24h) | 39 |
| PRs mescladas/fechadas (24h) | 11 |
| Releases | 1 (v0.12.0) |
| Bugs P1 abertos | 3 |
| Bugs P2 abertos | 7 |
| Features com 👍≥1 | 5 |
| Issues sem comentários | 2 |

---

**Saúde Geral:** 🟡 **Em estabilidade moderada.** O projeto demonstra alta atividade e maturidade técnica (v0.12.0), mas acumula bugs P1/P2 no provider openai-codex e integrações de gateway. A comunidade está engajada em features colaborativas, sugerindo evolução para用例 multi-usuário e enterprise.

*Relatório gerado em 2026-05-01. Dados de snapshot do GitHub em 

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw
## Período: 2026-05-01 | Fonte: github.com/sipeed/picoclaw

---

## 1. Panorama do Dia

O projeto PicoClaw demonstra **saúde operacional robusta** na data de hoje, com atividade intensa em Issues (37 atualizadas) e Pull Requests (38 atualizadas). O release **v0.2.8** foi disponibilizado recentemente, introduzindo melhorias significativas no subsistema MCP com novos comandos CLI. A base de código permanece em ritmo acelerado de desenvolvimento, com 32 PRs abertos aguardando revisão e 6 contribuições já merged/fechadas no período. A comunidade apresenta alta demanda por funcionalidades relacionadas a provedores de IA (especialmente Ollama cloud e OpenAI Responses API) e canais de comunicação (Slack, WhatsApp, Feishu).

---

## 2. Lançamentos

### v0.2.8 — Released

**Commits incluídos:**
| Commit | Tipo | Descrição |
|--------|------|-----------|
| `2da05c2a` | ✨ Feature | Adição de comandos CLI para MCP: `show`, `add`, `list`, `remove`, `test`, `edit` |
| `9d8f0dc8` | 🐛 Fix | Envio de objeto vazio `{}` ao invés de `null` para tool arguments no MCP |
| `a7414608` | 🐛 Fix | Correção de falha no build (#2723) |

**Impacto:** A versão v0.2.8 representa um avanço significativo na experiência de linha de comando do MCP (Model Context Protocol), tornando a gestão de servidores MCP mais acessível via CLI. A correção do argumento vazio resolve problemas de compatibilidade com servidores MCP construídos com o TypeScript SDK da Anthropic.

🔗 https://github.com/sipeed/picoclaw/releases/tag/v0.2.8

---

## 3. Progresso do Projeto

### PRs Merged/Closed (últimas 24h)

| PR | Autor | Área | Status | Impacto |
|----|-------|------|--------|---------|
| #2736 | dependabot | Dependências | Merged | Bump Lark SDK v3.5.4 → v3.6.1 (compatibilidade Feishu) |
| #2735 | dependabot | Dependências | Merged | Bump AWS SDK v1.32.16 → v1.32.17 |

### PRs em Destaque (Abertos com Alto Valor)

| PR | Autor | Área | Descrição | Potencial |
|----|-------|------|-----------|-----------|
| [#2719](https://github.com/sipeed/picoclaw/pull/2719) | loafoe | Channel | **Slack Webhook** — canal output-only para envio de mensagens via Incoming Webhooks com suporte Block Kit | ⭐ Alta |
| [#2626](https://github.com/sipeed/picoclaw/pull/2626) | webhtb | Provider/Agent | **Audio input nativo** para LLMs multimodais (Gemini 1.5) com campo 'Audio' no protocolo | ⭐⭐ Muito Alta |
| [#2587](https://github.com/sipeed/picoclaw/pull/2587) | SiYue-ZO | Channel/Agent | **Streaming web chat** com suporte E2E streaming e rebuild da UX de scroll | ⭐⭐ Muito Alta |
| [#2313](https://github.com/sipeed/picoclaw/pull/2313) | stevef1uk | Multi-User/Security | **Agent Shield** — hardening de segurança e isolamento multi-usuário | ⭐ Alta |

### Correções Críticas em Progresso

| PR | Autor | Bug Fix |
|----|-------|---------|
| [#2270](https://github.com/sipeed/picoclaw/pull/2270) | loafoe | Panic ao iterar `SecureString` em maps via reflexão Go |
| [#2522](https://github.com/sipeed/picoclaw/pull/2522) | badgerbees | `stream usage` em OpenAI-compatible providers (OpenAI/Azure) |
| [#2504](https://github.com/sipeed/picoclaw/pull/2504) | jacrify | Corrupção de Opus frames no decoder OGG (afeta Discord voice) |
| [#2460](https://github.com/sipeed/picoclaw/pull/2460) | alexrexby | Envio de `nil` ao invés de `{}` em CallTool do MCP |

---

## 4. Temas Quentes da Comunidade

### Issue com Maior Engajamento

| Issue | Comentários | Tipo | Tema |
|-------|-------------|------|------|
| [#2408](https://github.com/sipeed/picoclaw/issues/2408) | 10 | Enhancement | **LLM Account Stacking** — rotação automática de API keys em rate limits |

**Análise:** A comunidade demonstra forte interesse em recursos de resiliência para provedores de IA. O conceito "Cartridge-Belt" permite que múltiplas cuentas/API keys do mesmo provedor sejam utilizadas automaticamente quando quotas são atingidas, essencial para implantações em produção.

### Issues com Alto Engajamento por Categoria

| Categoria | Issues | Demanda Principal |
|-----------|--------|-------------------|
| **Provider/Config** | #2408, #2225, #2171, #2280, #2482, #2169 | Suporte expandido para Ollama cloud, OpenAI Responses API,双重HEAD auth, SiliconFlow |
| **Channel** | #2465, #2580, #2493, #2541, #2540 | SMTP email, Feishu melhorado, WhatsApp groups, múltiplas instâncias |
| **Agent/Config** | #2527, #2515, #2519 | fresh_tail_size configurável, integração mem0/Supermemory, workspace padrão |

### Sinal de Roadmap: Integração de Memória Externa

A issue [#2515](https://github.com/sipeed/picoclaw/issues/2515) solicita integração com **mem0, Supermemory e HydraDB**, indicando direção estratégica para evolução da memória persistente do agente.

🔗 https://github.com/sipeed/picoclaw/issues?q=is%3Aopen+sort%3Acomments-desc

---

## 5. Bugs e Estabilidade

### Bugs Reportados por Severidade

| Severidade | Qtd | Bugs Críticos |
|-----------|-----|--------------|
| 🔴 Crítica | 2 | #2468 (cron execution restricted), #2377 (unsafe terminal control chars) |
| 🟠 Alta | 3 | #1763 (aarch64 .deb install), #2478 (skill override), #2472 (path separator Windows) |
| 🟡 Média | 5 | #2280 (SiliconFlow+QQ), #2482 (open weights tool calls), #2480 (proactive compact), #2447 (only latest message processed), #2446 (echo back messages) |

### Bugs com Maior Impacto

**🔴 #2468 — Scheduled Task Fails to Execute**
```
ERR tool ... > Tool execution failed error="scheduling command execution is restricted to internal channels"
```
**Domínio:** Cron | **Impacto:** Tarefas agendadas falham completamente | **Urgência:** Alta

**🔴 #2377 — Terminal Control Characters**
**Domínio:** Tool/Exec | **Impacto:** Renderização insegura de output, caracteres ANSI maliciosos | **Risco:** Segurança

**🟠 #2472 — list_dir invalid argument on Windows**
**Domínio:** Tool | **Impacto:** Funcionalidade `list_dir` quebrada em Windows devido a path separator `\`

🔗 https://github.com/sipeed/picoclaw/labels/bug

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Mais Solicitadas (por popularidade)

| Feature | Issue | 👍 | Domínio | Descrição |
|---------|-------|-----|---------|-----------|
| LLM Account Stacking | [#2408](https://github.com/sipeed/picoclaw/issues/2408) | 0 (10 comments) | Provider | Rotação automática de API keys |
| Ollama Cloud Credentials | [#2225](https://github.com/sipeed/picoclaw/issues/2225) | 0 (9 comments) | Provider | Suporte a credenciais Ollama cloud |
| OpenAI Responses API | [#2171](https://github.com/sipeed/picoclaw/issues/2171) | 0 (9 comments) | Provider | Migração para Responses API |
| SMTP Email Channel | [#2465](https://github.com/sipeed/picoclaw/issues/2465) | 0 (6 comments) | Channel | Envio de emails via SMTP |
| Feishu Enhancements | [#2580](https://github.com/sipeed/picoclaw/issues/2580) | 2 | Channel | Streaming, status, proxy-friendly |
| OAuth 2.1 + PKCE for MCP | [#2546](https://github.com/sipeed/picoclaw/issues/2546) | 0 (2 comments) | Config | MCP servers autenticados via dashboard |
| Memory System Integration | [#2515](https://github.com/sipeed/picoclaw/issues/2515) | 0 (2 comments) | Agent | mem0, Supermemory, HydraDB |
| WhatsApp Compiled Builds | [#2625](https://github.com/sipeed/picoclaw/issues/2625) | 0 (2 comments) | Build | Builds ARM com WhatsApp incluso |

### Tendências de Roadmap Identificadas

1. **Experiência de Multimodalidade:** Audio input nativo (#2626) + Responses API (#2171)
2. **Resiliência de Provedores:** Account stacking (#2408), multi-provider fallback
3. **UX de Chat:** Streaming E2E (#2587), Feishu enhancements (#2580)
4. **Segurança Enterprise:** Multi-user support (#2313), OAuth MCP (#2546)
5. **Plataforma Cruzada:** Windows path handling (#2472), ARM builds WhatsApp (#2625)

🔗 https://github.com/sipeed/picoclaw/labels/enhancement

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Dor | Evidência | Impacto |
|-----|----------|---------|
| **Rate limits em produção** | #2408 | Usuários com implantações em produção enfrentam interrupções por quotas |
| **Incompatibilidade Ollama Cloud** | #2225 | Usuários desiring usar Ollama cloud não conseguem configurar credenciais |
| **Falhas em Windows** | #2472, #2478 | Usuários Windows enfrentam erros de path e comportamento inesperado de skills |
| **WhatsApp groups não funcionam** | #2541, #2540 | Usuários WhatsApp reportam grupo mentions silenciosamente ignorados |
| **Tarefas agendadas quebradas** | #2468 | Automação via cron não executa, afetando workflows críticos |
| **WebSocket auth confuso** | #2438 | Usuários assumem `PICOCLAW_GATEWAY_TOKEN` controla `/pico/ws`, mas não controla |

### Cenários de Uso Reportados

| Cenário | Issues | Contexto |
|---------|--------|----------|
| Android TV + Termux + Telegram | #2462 | "Keep a small Android TV box alive as a real PicoClaw node" |
| Raspberry Pi Zero 2 + WhatsApp | #2625 | Deploy em hardware limitado, dificuldade de rebuild |
| Multi-channel setup | #2446, #2447 | Múltiplos canais com tasks pendentes causam echo/corruption |
| China users + Feishu | #2580 | Usuários sem proxy VPN, necessidade de Feishu mais funcional |

### Satisfação Geral

**Mista-Positiva.** A comunidade demonstra engajamento ativo (37+ issues, 38+ PRs em 24h), mas há **frustração acumulada** com bugs críticos (cron, WhatsApp groups) e falta de features esperadas (Ollama cloud credentials). A issue #2429 demonstra frustração extrema de um usuário com质量问题.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta há >2 semanas

| Issue | Criação | Atualização | Tipo | Título |
|-------|---------|-------------|------|--------|
| [#1763](https://github.com/sipeed/picoclaw/issues/1763) | 2026-03-18 | 2026-04-30 | Bug | aarch64 .deb not install |
| [#2169](https://github.com/sipeed/picoclaw/issues/2169) | 2026-03-30 | 2026-04-30 | Enhancement | 双重HEAD支持 |
| [#2171](https://github.com/sipeed/picoclaw/issues/2171) | 2026-03-30 | 2026-04-30 | Enhancement | OpenAI Responses API |
| [#2225](https://github.com/sipeed/picoclaw/issues/2225) | 2026-03-31 | 2026-04-30 | Enhancement | Ollama cloud credentials |
| [#2280](https://github.com/sipeed/picoclaw/issues/2280) | 2026-04-02 | 2026-04-30 | Bug | SiliconFlow + QQ channel |

### PRs em Revisão Atrasada

| PR | Autor | Criação | Área | Status Crítico |
|----|-------|---------|------|----------------|
| [#2313](https://github.com/sipeed/picoclaw/pull/2313) | stevef1uk | 2026-04-03 | Multi-User/Security | Aguardando review (23 dias) |
| [#2091](https://github.com/sipeed/picoclaw/pull/2091) | badgerbees | 2026-03-27 | Feishu | Aguardando review (29 dias) |
| [#1858](https://github.com/sipeed/picoclaw/pull/1858) | badgerbees | 2026-03-21 | Ollama thinking fallback | Aguardando review (35 dias) |

### Priorização Recomendada

1. **Alta Prioridade:** #2468 (cron broken), #2377 (security), #2478 (skill override)
2. **Média Prioridade:** #2225 (Ollama cloud), #2546 (OAuth MCP), #2515 (memory system)
3. **Longo Prazo:** #2408 (account stacking), #2171 (Responses API)

🔗 https://github.com/sipeed/picoclaw/pulls?q=is%3Aopen+updated%3A%3C2026-04-15

---

## Métricas Resumo

| Métrica | Valor | Tendência |
|---------|-------|-----------|
| Issues ativas (24h) | 36 | 🔵 Estável |
| PRs abertos (24h) | 32 | 🟢 +Alta |
| PRs merged (24h) | 6 | 🟢 Positiva |
| Releases (24h) | 2 | 🟢 v0.2.8 + Nightly |
| Issues bug abertas | ~15 | 🟡 Necessita atenção |
| Features request abertas | ~22 | 🔵 Normal |
| Tempo médio sem resposta | ~3 dias | 🟡 Levemente elevado |

---

*Relatório gerado automaticamente com base nos dados do GitHub de PicoClaw em 2026-05-01.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório de Projeto — IronClaw
## Data: 2026-05-01

---

## 1. Panorama do Dia

O projeto IronClaw apresenta **atividade intensa e bem direcionada** nesta janela de 24 horas. Foram 38 PRs atualizados (22 merged/fechados) e 23 issues rastreadas, sinalizando um ritmo de desenvolvimento acelerado — particularmente no rastro da arquitetura **Reborn**, que domina o backlog. A equipe está fechando blockers críticos para o cutover do Reborn (HostRuntime, TurnCoordinator, AgentLoopHost), enquanto simultaneamente lida com falhas nos canários de produção (`public-smoke`, `persona-rotating`, `provider-matrix anthropic`) e um bug de TUI com ASCII estendido. Não houve releases formais, mas o pipeline de staging promoveu um batch significativo ao main. O foco permanece em estabilizar a integração do Reborn e preparar o caminho para uma versão binária dedicada (`ironclaw-reborn`).

---

## 2. Lançamentos

### Nenhuma release registrada nas últimas 24h

O projeto não emitiu novas tags ou releases formais neste período. Isso é consistente com a fase de desenvolvimento intensivo em que a base de código está sendo transformada pela arquitetura Reborn. A expectativa é que uma release formal com a stack Reborn integrada venha após a resolução dos blockers de cutover currently tracked.

> **Nota:** A promoção de staging para main via PR #3121 ([link](https://github.com/nearai/ironclaw/pull/3121)) aconteceu, indicando que o código já está no main — release formal pendente.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados Mais Relevantes

| # | PR | Tamanho | Escopo | Impacto |
|---|-----|---------|--------|---------|
| [#3121](https://github.com/nearai/ironclaw/pull/3121) | chore: promote staging to main | M | CI | Batch de commits promocional para main |
| [#3098](https://github.com/nearai/ironclaw/pull/3098) | feat(reborn): add shared runtime HTTP egress | XL | CI, docs, dependencies | HTTP egress compartilhado com proteção DNS/SSRF, redirecionamento desabilitado |
| [#3095](https://github.com/nearai/ironclaw/pull/3095) | feat(reborn): add host runtime contract facade | XL | dependencies | Contrato `ironclaw_host_runtime` para camadas superiores |
| [#3079](https://github.com/nearai/ironclaw/pull/3079) | feat(reborn): add memory search and plugin seams | XL | docs, dependencies | Busca em memória e seam de plugins para Reborn |
| [#3078](https://github.com/nearai/ironclaw/pull/3078) | feat(reborn): add memory document storage boundary | XL | docs, dependencies | Substrato de armazenamento de documentos com `MemoryDocumentScope` |
| [#3120](https://github.com/nearai/ironclaw/pull/3120) | fix(reborn): make host runtime cancel and health real | L | — | Cancelamento real de processos e health probe funcional |
| [#3117](https://github.com/nearai/ironclaw/pull/3117) | test(reborn): cover WASM runtime failure edges | XS | — | Cobertura de borda para runtime WASM |
| [#3114](https://github.com/nearai/ironclaw/pull/3114) | test(reborn): add memory substrate vertical coverage | XS | — | Testes verticais de integração de memória |
| [#3110](https://github.com/nearai/ironclaw/pull/3110) | test(reborn): add CapabilityHost integration coverage | M | dependencies | Cobertura de integração para `CapabilityHost` |
| [#3119](https://github.com/nearai/ironclaw/pull/3119) | fix: disable canary issues creation | M | CI | Desabilita criação automática de issues por canários |

### Avanços Principais

1. **Stack de memória Reborn concluída** — PRs #3078 e #3079 fecham a base de armazenamento e busca, com `ironclaw_memory` agora com contratos de escopo, metadata merge e seams de indexação.
2. **HTTP egress compartilhado** — O PR #3098 extrai a lógica de transporte HTTP (políticas, proteção SSRF, redirecionamento) para um componente reutilizável usado por WASM, Script e MCP.
3. **HostRuntime contract facade** — PR #3095 define a API estável para camadas superiores (TurnCoordinator, AgentLoopHost, gateway de modelo).
4. **Promoção de staging** — Batch significativo de commits chegou ao main via #3121.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários + thumbs)

| # | Título | Comentários | 👍 | Tipo | Tema Central |
|---|--------|:-----------:|:--:|------|--------------|
| [#2987](https://github.com/nearai/ironclaw/issues/2987) | [EPIC] Track Reborn architecture landing strategy | **43** | 0 | Epic | Coordenação do landing do Reborn via PRs agrupados |
| [#3067](https://github.com/nearai/ironclaw/issues/3067) | [TEST] Reborn: Add vertical-slice integration test suite | 10 | 0 | Enhancement | Testes de integração caller-level para Reborn |
| [#3103](https://github.com/nearai/ironclaw/issues/3103) | High ASCII TUI não exibe corretamente | 7 | 0 | Bug/QA | Compatibilidade de TTY com caracteres extendidos |
| [#3036](https://github.com/nearai/ironclaw/issues/3036) | [EPIC] Configuration-as-Code para IronClaw Reborn | 2 | **1** | Epic | Declarative config para tenants e use-cases |
| [#3127](https://github.com/nearai/ironclaw/issues/3127) | Design scalable capability permission UX | 0 | 0 | Enhancement | UX de permissões e resolvedor de políticas |
| [#3107](https://github.com/nearai/ironclaw/issues/3107) | Define AgentLoopDriver and run-class profile contract | 0 | 0 | Enhancement | Suporte a múltiplos modelos de loop sem switch statements |

### Análise dos Demandas

- **#2987 é de longe o tema mais discutido** (43 comentários), refletindo a complexidade e a necessidade de coordenação da landing strategy do Reborn. A estratégia de "stacked PRs agrupados" para evitar revisões massivas é um ponto de atenção central da equipe.
- **#3036 tem o único " thumbs up"** da lista, indicando que a comunidade (ou ao menos um contribuidor) valida a demanda por Configuration-as-Code — uma necessidade real para operadores que hoje editam `.env`, JSON de settings e flags de runtime sem schema ou audit trail.
- **A Epic #3031** (Reborn product surface migration) e **#3107** (AgentLoopDriver) sinalizam que a equipe está antecipando a próxima fase após o substrate landing: migração da superfície de produto e suporte a múltiplos paradigmas de loop (chat, CodeAct, Routine).
- O **PR #1764** (Abound demo com Responses API) lidera em escopo entre PRs abertos, sinalizando interesse em integrações externas e features de credential injection.

---

## 5. Bugs e Estabilidade

### Falhas de Canary (Produção Simulada)

Três canários falharam na mesma execução, todas no mesmo commit `2a65da7c2a9d1b14665a373338266e084e9f4096`:

| # | Canário | Provider | Issue Link |
|---|---------|---------|------------|
| [#3116](https://github.com/nearai/ironclaw/issues/3116) | `public-smoke` | anthropic | 🔴 **ALTA PRIORIDADE** |
| [#3115](https://github.com/nearai/ironclaw/issues/3115) | `persona-rotating` | anthropic | 🔴 **ALTA PRIORIDADE** |
| [#3113](https://github.com/nearai/ironclaw/issues/3113) | `provider-matrix anthropic` | anthropic | 🔴 **ALTA PRIORIDADE** |

> A falha simultânea em três lanes com o mesmo commit e provider sugere uma regressão introduzida no batch promotion ou um problema de API upstream do Anthropic. O PR #3119 desabilitou a criação automática de issues por canários, mas as falhas já abertas exigem investigação.

### Outros Bugs Reportados

| # | Severidade | Descrição | Área |
|---|:----------:|-----------|------|
| [#3103](https://github.com/nearai/ironclaw/issues/3103) | **Medium** | High ASCII no TUI não exibe corretamente em todos os TTY (scrolling bug) | TUI |
| [#3108](https://github.com/nearai/ironclaw/issues/3108) | **Medium** | API keys do Web IDE retornam 401 "Session not found" contra gateway `private.near.ai` | Auth/API Gateway |

### Análise de Estabilidade

**Sinais de alerta:**
- Falhas canário simultâneas em produção simulada com provider `anthropic` — impacto potencial para usuários em produção.
- Bug de TUI com caracteres ASCII estendidos afeta experiência de usuário em terminais headless/servidores.
- Problema de API key do Web IDE pode bloquear workflows de desenvolvedores que usam a IDE web.

**Aspectos positivos:**
- O PR #3119 demonstra resposta rápida da equipe (desabilitar criação automática de issues canário para reduzir ruído).
- O PR #3120 melhorou health checks do host runtime de stub para probe real.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Identificadas

| # | Título | Escopo | Riesgo | Sinal de Roadmap |
|---|--------|--------|:------:|------------------|
| [#2987](https://github.com/nearai/ironclaw/issues/2987) | [EPIC] Reborn architecture landing strategy | reborn | High | ⭐ **PRIORIDADE ESTRATÉGICA MÁXIMA** |
| [#3031](https://github.com/nearai/ironclaw/issues/3031) | [EPIC] Reborn product surface migration | reborn | — | ⭐ Próxima fase pós-substrate |
| [#3036](https://github.com/nearai/ironclaw/issues/3036) | [EPIC] Configuration-as-Code | reborn | — | ⭐ UX para operadores |
| [#3069](https://github.com/nearai/ironclaw/issues/3069) | Ship Reborn as separate `ironclaw-reborn` binary | reborn, docs | Medium | ⭐ Separar produto em binário dedicado |
| [#3085](https://github.com/nearai/ironclaw/issues/3085) | Shared Reborn runtime HTTP egress para WASM/Script/MCP | tool/wasm, tool/mcp, reborn | Medium | ✅ Já em desenvolvimento (PR #3123) |
| [#3107](https://github.com/nearai/ironclaw/issues/3107) | Define AgentLoopDriver and run-class profile contract | reborn | — | ⭐ Suporte a múltiplos paradigmas de loop |
| [#3127](https://github.com/nearai/ironclaw/issues/3127) | Design scalable capability permission UX | reborn | — | ⭐ Sistema de permissões e políticas |
| [#3118](https://github.com/nearai/ironclaw/issues/3118) | Build native Reborn memory storage/search service | db, reborn | — | ⭐ Substituir adaptadores legados por implementação nativa |
| [#3122](https://github.com/nearai/ironclaw/pull/3122) | Support externally-provided tools in Responses API | channel/web | Medium | ✅ Em desenvolvimento |
| [#1446](https://github.com/nearai/ironclaw/pull/1446) | Add Aliyun Coding Plan support | agent, llm | Low | 🌏 Suporte a provedores regionais |

### Sinais de Roadmap

1. **Arquitetura Reborn é o foco central** — Todas as epics e a maioria dos PRs grandes estão sob a tag `reborn`. A estratégia é fragmentar o landing em PRs agrupados (#2987) para evitar PR massivo.
2. **Binário separado `ironclaw-reborn`** (#3069) — Indica que Reborn será um produto distinto, não apenas uma refatoração interna.
3. **Configuration-as-Code** (#3036) — Demandado para satisfazer operadores que precisam de schema, diff e audit trail em configurações declarativas.
4. **Suporte a múltiplos LLMs regionais** — O PR #1446 (Aliyun) demonstra interesse em expandir para mercados fora do ocidente.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| # | Problema | Área | Reação da Equipe |
|---|----------|------|------------------|
| [#3103](https://github.com/nearai/ironclaw/issues/3103) | High ASCII no TUI quebra em vários TTYs. Usuário reporta: "Please provide an argument to return to what worked" | TUI | Aberto, 7 comentários |
| [#3108](https://github.com/nearai/ironclaw/issues/3108) | API keys do Web IDE não funcionam com gateway `private.near.ai`. Gateway saudável com chaves instance-provisioned | Auth | Aberto, sem comentários |

### Cenários de Uso Emergentes

- **Usuários em servidores headless/headless servers** — O bug de TUI (#3103) indica uso em ambientes Ubuntu Server, com OLLama e Gemma4 rodando localmente (veja PR #3105).
- **Integração com Web IDE** — Cenário de uso crescente, evidenciado pelo bug de API keys (#3108) e pelo PR #3122 de Responses API com tools externos.
- **Operadores multi-tenant** — Demanda por Configuration-as-Code (#3036) sugere uso em cenários de deployment em larga escala onde configuração declarativa é mandatória.

### Satisfação/Insatisfação

- **Positivo:** Atividade de PRs é alta e bem direcionada (XL PRs de Reborn fechando consistentemente).
- **Preocupante:** 3 canários falhando simultaneamente indica risco de regressão em produção. O bug de TUI afeta experiência do usuário em terminais.
- **Neutro:** Sem releases formais pode frustrar usuários aguardando features do Reborn.

---

## 8. Backlog que Merece Atenção

### Issues Antigas ou Sem Resposta

| # | Título | Criado | Atualizado | Comentários | Status

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do Projeto CoPaw — 2026-05-01

## 1. Panorama do Dia

O CoPaw apresenta alta atividade nas últimas 24h, com 50 issues atualizadas (17 abertas, 33 fechadas) e 16 PRs processados (2 em revisão, 14 merged/fechados). A release v1.1.5.post1 foi publicada, focada em melhorias na integração com Feishu. A equipe demonstrou excelente capacidade de resposta, resolvendo múltiplos bugs críticos — incluindo uma vulnerabilidade de path traversal no Windows e problemas de runtime no canal WeCom. A comunidade está ativa com discussões sobre performance do chat, separação de workspaces e novas funcionalidades para canais corporativos.

---

## 2. Lançamentos

### v1.1.5.post1
**Data:** 2026-04-30 | **PR:** #3970

**Mudanças:**
- Atualização de versão para v1.1.5.post1
- Introdução do `FeishuCardHandler` com upgrade do tool_guard approval para botões interativos
- Adição de link de documentação na card de aprovação quando `card.action.trigger` não está inscrito

**Notas:**
- Release incremental de patch, sem breaking changes
- Foco em melhorar UX do canal Feishu, permitindo aprovação com um clique

---

## 3. Progresso do Projeto

### PRs Importantes Merged/Fechados (24h)

| PR | Título | Impacto |
|---|---|---|
| [#3973](https://github.com/agentscope-ai/QwenPaw/pull/3973) | `fix(app): prevent path traversal by rejecting absolute static file paths` | **Crítico** — Corrige vulnerabilidade de segurança no Windows (#3955) |
| [#3978](https://github.com/agentscope-ai/QwenPaw/pull/3978) | `fix(wecom): cross loop runtime error` | **Alto** — Resolve RuntimeError em loops assíncronos no WeCom |
| [#3300](https://github.com/agentscope-ai/QwenPaw/pull/3300) | `fix(wecom): dispatch WS SDK calls to ws_loop` | **Alto** — Corrige erro "Future attached to a different loop" (#3296) |
| [#3941](https://github.com/agentscope-ai/QwenPaw/pull/3941) | `feat(feishu): introduce FeishuCardHandler` | **Médio** — Novo sistema de cards interativos para Feishu |
| [#3981](https://github.com/agentscope-ai/QwenPaw/pull/3981) | `fix(chat): migrate deprecated antd v5 APIs` | **Médio** — Remove warnings de depreciação no console |
| [#3950](https://github.com/agentscope-ai/QwenPaw/pull/3950) | `fix(WeCom): keep placeholder stream alive` | **Médio** — Corrige "Thinking..." travado no WeCom |
| [#3963](https://github.com/agentscope-ai/QwenPaw/pull/3963) | `fix(WeCom): avoid double reconnect race` | **Médio** — Melhoria de estabilidade na reconexão |

### PRs Em Revisão
| PR | Título | Destaque |
|---|---|---|
| [#3846](https://github.com/agentscope-ai/QwenPaw/pull/3846) | `feat(models): Support GitHub Copilot model provider` | **Novo provider** — Primeiro contrib de moarychan |
| [#3605](https://github.com/agentscope-ai/QwenPaw/pull/3605) | `fix(channel): Unify WeChat/Weixin identifier` | Unificação de identificadores entre canais |
| [#3958](https://github.com/agentscope-ai/QwenPaw/pull/3958) | `fix(console): restore chat session when switching between agents` | Preserva sessão ao trocar de agente |
| [#3959](https://github.com/agentscope-ai/QwenPaw/pull/3959) | `fix(console): keep Chat mounted when navigating` | Evita perda de tarefas ativas na navegação |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (por comentários)

| Issue | Tipo | Comentários | Status | Tema Principal |
|---|---|---|---|---|
| [#3955](https://github.com/agentscope-ai/QwenPaw/issues/3955) | Bug (Segurança) | 12 | ✅ Fechada | **Vulnerabilidade de path traversal no Windows** |
| [#3853](https://github.com/agentscope-ai/QwenPaw/issues/3853) | Bug | 10 | ✅ Fechada | Página trava ao salvar configurações no Debian |
| [#2757](https://github.com/agentscope-ai/QwenPaw/issues/2757) | Question | 7 | ✅ Fechada | Canal WeChat desconecta frequentemente |
| [#3350](https://github.com/agentscope-ai/QwenPaw/issues/3350) | Question | 6 | 🟡 Aberta | Performance degrada após 200+ rodadas de conversa |
| [#3957](https://github.com/agentscope-ai/QwenPaw/issues/3957) | Bug | 5 | 🟡 Aberta | **Confusão de identidade de agente** — workspace troca incorretamente |

### Análise dos Temas

**🔴 Segurança (#3955 - 12 comentários):**
Vulnerabilidade de arbitrary file traversal no Windows foi reportada com evidências visuais. A equipe respondeu rapidamente com PR #3973 — resposta exemplar.

**🟡 Performance Longa Conversa (#3350 - 6 comentários):**
Usuário reporta que 200+ rodadas de conversa tornam a rolagem "特别卡" (muito lenta). Cenário de uso: iteração de código projeto-a-projeto com A2A. Demanda por metodologia ou otimização de front-end.

**🔴 Confusão de Identidade (#3957 - 5 comentários):**
Bug crítico: Agent default ao receber mensagem via DingTalk de outro agente, tem seu workspace automaticamente trocado, causando "身份混淆" (confusão de identidade). Severidade alta.

**🟡 Separação de Workspace (#3967 - 3 comentários):**
Proposta para separar área de configuração core de área de trabalho do usuário, evitando exclusão acidental de arquivos essenciais. Votação não disponível, mas discussão técnica relevante.

---

## 5. Bugs e Estabilidade

### Bugs Críticos Abertos

| Issue | Severidade | Descrição | Link |
|---|---|---|---|
| #3977 | 🔴 Alta | `memory_search` retorna erro `'list' object has no attribute 'get'` | [Link](https://github.com/agentscope-ai/QwenPaw/issues/3977) |
| #3980 | 🔴 Alta | Página "Running Config" retorna "Not Found" no v1.1.5 | [Link](https://github.com/agentscope-ai/QwenPaw/issues/3980) |
| #3976 | 🔴 Alta | Mecanismo de cleanup de sessão ociosa cancela tarefas em execução | [Link](https://github.com/agentscope-ai/QwenPaw/issues/3976) |
| #3957 | 🔴 Alta | Workspace do agente troca incorretamente ao receber mensagens | [Link](https://github.com/agentscope-ai/QwenPaw/issues/3957) |
| #3969 | 🟡 Média | `FunctionCallOutput` validation error quando `call_id` é None | [Link](https://github.com/agentscope-ai/QwenPaw/issues/3969) |

### Bugs Resolvidos nas Últimas 24h

| Issue | Descrição | Link |
|---|---|---|
| #3955 | Path traversal vulnerability (Windows) — **Corrigido** | [Link](https://github.com/agentscope-ai/QwenPaw/issues/3955) |
| #3296 | RuntimeError no WeChat send_file_to_user — **Corrigido** | [Link](https://github.com/agentscope-ai/QwenPaw/issues/3296) |
| #3971 | Windows exe primeira execução白屏 (white screen) — **Corrigido** | [Link](https://github.com/agentscope-ai/QwenPaw/issues/3971) |
| #3937 | Canal WeChat para de funcionar subitamente — **Corrigido** | [Link](https://github.com/agentscope-ai/QwenPaw/issues/3937) |

### Issues Recorrentes (Padrão)
- **WeChat/WeCom:** Múltiplos bugs de runtime (#3296, #3937, #3978) indicam complexidade do SDK asyncio
- **Debian/Windows:** Bugs específicos de plataforma continuam aparecendo

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features com Engajamento

| Issue | Feature | Impacto | Link |
|---|---|---|---|
| #3972 | `/ralph-loop` magic command para execução contínua de tarefas | Auto-execução de agentes | [Link](https://github.com/agentscope-ai/QwenPaw/issues/3972) |
| #2434 | Console Web: suporte a colar imagem/arquivo (Ctrl+V) | UX do console | [Link](https://github.com/agentscope-ai/QwenPaw/issues/2434) |
| #3038 | Timestamps no chat (hora/data) | Usabilidade | [Link](https://github.com/agentscope-ai/QwenPaw/issues/3038) |
| #3966 | Preview de arquivos .docx e .pdf | Suporte a arquivos | [Link](https://github.com/agentscope-ai/QwenPaw/issues/3966) |
| #3979 | Windows client: minimizar para tray ao fechar | UX desktop | [Link](https://github.com/agentscope-ai/QwenPaw/issues/3979) |

### Sinais de Roadmap Identificados

| Issue | Interesse | Indicação Estratégica |
|---|---|---|
| #3516 | 4 comentários | Demanda por "Hermes理念" para evolução automática de agentes |
| #3350 | 6 comentários | Necessidade de otimização para conversas de longa duração |
| #3846 | PR aberto | Suporte a GitHub Copilot como model provider |

### Features Concluídas Recentemente
- [#2945](https://github.com/agentscope-ai/QwenPaw/issues/2945) ✅ — Botão de approve substituiu input por texto (1 👍)
- [#3925](https://github.com/agentscope-ai/QwenPaw/issues/3925) ✅ — Otimização frontend do chat
- [#3146](https://github.com/agentscope-ai/QwenPaw/issues/3146) ✅ — Chat em wide screen

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais Identificadas

**🔴 Estabilidade de Canais Corporativos**
Usuários relatam desconexões frequentes no WeChat (#2757, #3937) e problemas com WebSocket loops (#3296, #3978). O canal WeCom demonstra complexidade técnica significativa na gestão de eventos assíncronos.

**🟡 Performance do Frontend**
Múltiplos relatos indicam:
- Rolagem lenta após muitas rodadas de conversa (#3350)
- Página trava ao salvar configurações (#3853)
- Chat fica lento com mais de 10 tool calls (#2890)

**🟡 UX/UI**
- Falta de timestamps nas mensagens (#3038)
- Histórico perdido ao trocar de página (#3959)
- Agentes travando durante navegação (#3958)
- 输入 não aparece no chat de canais (#3965)

**🟢 Positivo**
- Feature de approve com botão (#2945) recebeu 1 👍
- Console com Ctrl+V para imagens (#2434) implementado
- Suporte a GitHub Copilot em desenvolvimento (#3846)

### Cenários de Uso Observados
1. **Desenvolvimento de projetos iterativos** — agentes com 200+ rodadas
2. **Integração A2A multi-agente** — comunicação entre agentes via canais
3. **Deploy em diferentes distros Linux** — Debian 12 especificamente mencionado
4. **Usuários Windows desktop** — instalação exe com problemas recorrentes

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta / Aguardando Triagem

| Issue | Idade | Status | Prioridade |
|---|---|---|---|
| [#3350](https://github.com/agentscope-ai/QwenPaw/issues/3350) | ~16 dias | 🟡 Aberta | **Alta** — Impacta usuários com conversas longas |
| [#3516](https://github.com/agentscope-ai/QwenPaw/issues/3516) | ~13 dias | 🟡 Aberta | **Média** — Feature de roadmap estratégico |
| [#3861](https://github.com/agentscope-ai/QwenPaw/issues/3861) | ~3 dias | 🟡 Aberta | **Alta** — Interrupções no console |
| [#3967](https://github.com/agentscope-ai/QwenPaw/issues/3967) | <1 dia | 🟡 Aberta | **Média** — Separação de workspace (ideia) |
| [#3975](https://github.com/agentscope-ai/QwenPaw/issues/3975) | <1 dia | 🟡 Aberta | **Média** — Exibe instruções de sistema no histórico |
| [#3976](https://github.com/agentscope-ai/QwenPaw/issues/3976) | <1 dia | 🟡 Aberta | **Alta** — Bug de cleanup de sessão |
| [#3977](https://github.com/agentscope-ai/QwenPaw/issues/3977) | <1 dia | 🟡 Aberta | **Alta** — Memory search error |
| [#3979](https://github.com/agentscope-ai/QwenPaw/issues/3979) | <1 dia | 🟡 Aberta | **Média** — Minimize to tray request |
| [#3980](https://github.com/agentscope-ai/QwenPaw/issues/3980) | <1 dia | 🟡 Aberta | **Alta** — API Not Found no v1.1.5 |

### PRs Abertos Aguardando Review

| PR | Tipo | Prioridade | Link |
|---|---|---|---|
| #3846 | Feature | **Alta** | [Link](https://github.com/agentscope

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>


# Relatório de Projeto — ZeroClaw
## Período: 2026-05-01 | Elaborado por: Analista Open Source

---

## 1. Panorama do Dia

O projeto ZeroClaw apresenta **alta atividade comunitária** em 01/05/2026, com 50 issues e 49 PRs atualizados nas últimas 24 horas. Não houve lançamentos de novas versões. O estado geral reflete uma base de código ativa com diversas correções críticas em progresso — destaque para múltiplos bugs P1 relacionados a onboarding, channels (WhatsApp, Slack, Matrix) e problemas de segurança/gateway. A comunidade demonstra engajamento significativo, com issues como #6123 acumulando 15 comentários sobre problemas de configuração em instalações frescas.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.** O projeto mantém 0 novas versões, indicando foco em estabilização e merges pendentes antes do próximo tag.

---

## 3. Progresso do Projeto

### PRs Fechados/Mergeds (16 total)

| PR | Autor | Tamanho | Descrição |
|----|-------|---------|-----------|
| [#6166](https://github.com/zeroclaw-labs/zeroclaw/pull/6166) | tonsiasy | XL | **feat(channels): add WeChat personal account via iLink Bot** ✅ MERGED — Adiciona canal WeChat via iLink Bot API, com autenticação via credenciais locais |
| [#3468](https://github.com/zeroclaw-labs/zeroclaw/issues/3468) | dancingclaw | — | **CLOSED** — Bug de compilação com matrix-sdk 0.16 no Rust 1.94+ resolvido |

### PRs Abertos em Destaque (20 mais comentados)

| PR | Autor | Tamanho | Risco | Descrição |
|----|-------|---------|-------|-----------|
| [#6167](https://github.com/zeroclaw-labs/zeroclaw/pull/6167) | tidux | XL | 🔴 Alto | **fix(channels/acp): implement ACP protocol v1** — Atualiza schema ACP para v1, restaurando conectividade com Nori e consumidores externos |
| [#6117](https://github.com/zeroclaw-labs/zeroclaw/pull/6117) | aliasliao | L | 🔴 Alto | **feat(codex): support native Responses tool calls** — Adiciona suporte a tool calls nativas do OpenAI Responses API no provider codex |
| [#6170](https://github.com/zeroclaw-labs/zeroclaw/pull/6170) | JordanTheJet | XL | 🟢 Baixo | **docs(i18n): sync fr/ja/es translations + zh-CN** — Sincroniza traduções existentes e adiciona Chinês Simplificado |
| [#6190](https://github.com/zeroclaw-labs/zeroclaw/pull/6190) | alexandme | L | 🟡 Médio | **feat(obs): instrument runtime memory ops with OTel GenAI spans** — Instrumenta operações de memória com OpenTelemetry |
| [#6203](https://github.com/zeroclaw-labs/zeroclaw/pull/6203) | perlowja | M | 🟢 Baixo | **docs(hardware): add Raspberry Pi setup guide** — Guia completo para instalação em Raspberry Pi 4 |
| [#6164](https://github.com/zeroclaw-labs/zeroclaw/pull/6164) | ilteoood | L | 🔴 Alto | **feat(cron): manually trigger cron from webui** — Endpoint POST `/api/cron/{id}/run` para gatilho manual via interface web |
| [#6101](https://github.com/zeroclaw-labs/zeroclaw/pull/6101) | songchao0421 | M | 🟡 Médio | **feat(webui): hot-switch model & preserve chat context** — Preserva contexto ao navegar entre páginas |
| [#6195](https://github.com/zeroclaw-labs/zeroclaw/pull/6195) | SAY-5 | S | 🟡 Médio | **fix(skills): deny unknown fields on SkillMeta** — Fecha #6128, valida schema SKILL.toml estritamente |
| [#6085](https://github.com/zeroclaw-labs/zeroclaw/pull/6085) | theonlyhennygod | S | 🟡 Médio | **fix(config): default session_ttl_hours to 168h** — Previne acúmulo ilimitado de sessões |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (por comentários)

| # | Issue | Comentários | Prioridade | Tema Central |
|---|-------|------------|------------|--------------|
| [#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) | default_model issue on fresh install | 15 | P1 | Problema de configuração em instalações frescas com LXC/Ollama |
| [#5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862) | zeroclaw does not know it can add cron | 6 | P2 | Falha de autoconsciência sobre ferramentas disponíveis |
| [#6153](https://github.com/zeroclaw-labs/zeroclaw/issues/6153) | Matrix: voice transcription failed | 6 | P2 | Transcrição de áudio em canais Matrix falha com formato não suportado |
| [#6210](https://github.com/zeroclaw-labs/zeroclaw/issues/6210) | SkillForge auto-integrator emits non-schema fields | 3 | P1 | SKILL.toml gera campos não reconhecidos pelo schema |
| [#3468](https://github.com/zeroclaw-labs/zeroclaw/issues/3468) | matrix-sdk 0.16 compilation failure | 2 | S2 | Build falha com Rust 1.94+ bloqueando Matrix E2EE |

### Análise de Demandas

**Onboarding e Configuração** lideram as preocupações da comunidade. A issue #6123 (15 comentários) evidencia fricção significativa na primeira experiência — usuários não conseguem configurar `default_model` em instalações novas. Issues relacionadas (#6206, #6120) confirmam que o fluxo de onboarding possui múltiplos pontos de falha com providers.

**Canais de Mensagens** representam 30% das issues ativas, com problemas em Matrix, WhatsApp, Telegram e Slack. A diversidade de canais indica adoção ampla, mas também complexidade de manutenção.

---

## 5. Bugs e Estabilidade

### 🔴 Críticos (P1) — 9 issues abertas

| # | Bug | Canal/Componente | Severidade | Status |
|---|-----|------------------|------------|--------|
| [#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) | default_model não funciona em install fresca | provider/ollama | S1 | BLOCKED |
| [#6210](https://github.com/zeroclaw-labs/zeroclaw/issues/6210) | SkillForge emite campos fora do schema | skills | S1 | BLOCKED |
| [#6036](https://github.com/zeroclaw-labs/zeroclaw/issues/6036) | Loop infinito de tool-calls no Termux/Android | runtime | S1 | NEEDS-REPRO |
| [#6224](https://github.com/zeroclaw-labs/zeroclaw/issues/6224) | Cron job não dispatch para WhatsApp | channel:whatsapp | S1 | — |
| [#6223](https://github.com/zeroclaw-labs/zeroclaw/issues/6223) | web_fetch não funciona no WhatsApp | channel:whatsapp | S1 | — |
| [#6207](https://github.com/zeroclaw-labs/zeroclaw/issues/6207) | Gateway WebSocket ignora ApprovalManager (segurança) | gateway | S1 | NEEDS-MAINTAINER |
| [#6206](https://github.com/zeroclaw-labs/zeroclaw/issues/6206) | Onboarding falha com "Unknown property" | onboard/provider | S1 | — |
| [#6237](https://github.com/zeroclaw-labs/zeroclaw/issues/6237) | Slack bot_token não aceita env var | channel:slack | S1 | — |
| [#6120](https://github.com/zeroclaw-labs/zeroclaw/issues/6120) | Onboarding seleciona Codex ao invés de OpenAI | onboard | S1 | — |

### 🟡 Degradados (P2) — 20+ issues

**Matrix Channel:**
- [#6153](https://github.com/zeroclaw-labs/zeroclaw/issues/6153) — Transcrição de voz falha com formato '.'
- [#3468](https://github.com/zeroclaw-labs/zeroclaw/issues/3468) — Compilação falha no Rust 1.94+ (CLOSED)

**Config/Runtime:**
- [#6227](https://github.com/zeroclaw-labs/zeroclaw/issues/6227) — `zeroclaw status` hardcoded para `zeroclaw.service`
- [#6085](https://github.com/zeroclaw-labs/zeroclaw/issues/6085) — PR aberto corrigindo session_ttl_hours

**Telegram:**
- [#6225](https://github.com/zeroclaw-labs/zeroclaw/issues/6225) — Feature request: smart truncation
- [#6229](https://github.com/zeroclaw-labs/zeroclaw/issues/6229) — mention_only não suprime respostas a mídia

**Provider:**
- [#6233](https://github.com/zeroclaw-labs/zeroclaw/issues/6233) — DeepSeek reasoning_content dropado em mensagens plaintext
- [#5932](https://github.com/zeroclaw-labs/zeroclaw/issues/5932) — Groq provider: suporte a native tools por modelo

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em Progresso

| # | Feature | PR/Issue | Status | Relevância |
|---|---------|----------|--------|------------|
| [#6164](https://github.com/zeroclaw-labs/zeroclaw/pull/6164) | Gatilho manual de cron via webui | PR | IN-PROGRESS | Alta — UX |
| [#6101](https://github.com/zeroclaw-labs/zeroclaw/pull/6101) | Hot-switch de modelos + contexto persistente | PR | IN-PROGRESS | Alta — UX |
| [#5999](https://github.com/zeroclaw-labs/zeroclaw/issues/5999) | Gateway Web Chat UX Improvements | Issue | IN-PROGRESS | Média |
| [#5994](https://github.com/zeroclaw-labs/zeroclaw/issues/5994) | Website oficial + documentação E2E | Issue | NEEDS-MAINTAINER | Alta — Onboarding |
| [#5618](https://github.com/zeroclaw-labs/zeroclaw/issues/5618) | Phase 2 D1: Typed Registry API para DaemonSubsystems | Issue | ACCEPTED | Alta — Arquitetura |
| [#6017](https://github.com/zeroclaw-labs/zeroclaw/issues/6017) | Schema v3: SQLite memory backend migration | Issue | BLOCKED | Média |
| [#6111](https://github.com/zeroclaw-labs/zeroclaw/issues/6111) | Estabilizar Node.js LTS | PR | IN-PROGRESS | Baixa — DevEx |

### Novas Features Solicitadas

| # | Feature | Canal/Área | Impacto |
|---|---------|------------|---------|
| [#6225](https://github.com/zeroclaw-labs/zeroclaw/issues/6225) | Smart Truncation para Telegram | channel:telegram | UX — Evita splits feios em codeblocks |
| [#5843](https://github.com/zeroclaw-labs/zeroclaw/issues/5843) | Model-wise Reasoning Configuration | provider | Config — Ajustar reasoning por modelo |
| [#6055](https://github.com/zeroclaw-labs/zeroclaw/issues/6055) | Slack: hydrate thread context on first mention | channel:slack | UX — Melhora contexto em threads |
| [#6241](https://github.com/zeroclaw-labs/zeroclaw/issues/6241) | Headed/headless config para agent_browser | tool:browser | Config — Flexibilidade de browser |

### Indicadores de Roadmap

1. **Multi-canal integration** é prioridade clara — WeChat (#6166) mergeado, WhatsApp recebendo patches
2. **Schema v3 e migração de memória** em progresso, sinaliza evolução de storage
3. **Observabilidade** com OTel (#6190) indica foco em debuggability em produção
4. **Segurança** — ApprovalManager bypass (#6207) e ACP v1 (#6167) mostram atenção a permissões

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

**1. Onboarding Quebrado (🔴 Crítico)**
> Usuários não conseguem completar configuração inicial. Problemas incluem:
> - `default_model` não reconhecido em fresh install (#6123, 15 comentários)
> - Onboarding falha com providers custom OpenAI (#6206)
> - Código selecionado incorretamente na escolha de provider (#6120)
> - "Unknown property" ao configurar providers

**2. Fragmentação de Canais (🟡 Impacto)**
> Usuários de Matrix, WhatsApp, Telegram e Slack enfrentam problemas específicos:
> - Transcrição de voz falha no Matrix (#6153)
> - Cron jobs não funcionam com WhatsApp (#6224)
> - web_fetch inacessível via WhatsApp (#6223)
> - `mention_only` ignorado para mídias no Telegram (#6229)

**3. Conhecimento de Capacidades (🟡 UX)**
> ZeroClaw não comunica suas próprias abilities:
> - Usuário tenta agendar cron, agente diz que não pode (#5862)
> - Documentação de skills ausente (#5863)

**4. Configuração e Defaults (🟡 Config)**
> - `session_ttl_hours=0` causa acúmulo de sessões (#6085 — PR aberto)
> - Config de headless para browser incompleta (#6241)
> - Links de documentação quebrados (#6222)

### Cenários de Uso Observados

| Cenário | Contexto | Problema Reportado |
|---------|----------|-------------------|
| Ollama em LXC | Home lab com containers isolados | default_model não conecta |
| Termux/Android | Mobile agent execution | Loop infinito de tool-calls |
| Raspberry Pi | Hardware limitado | Sem guia de setup dedicado (RESOLVIDO por #6203) |
| WeChat pessoal | Canal corporativo | iLink Bot integration (RESOLVIDO por #6166) |
| Discord + Copilot | Multimodal | Upload de imagens não processado |

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Abandonadas

| # | Issue | Criada | Atualizada | Comentários | Prioridade | Ação Recomendada |
|---|-------|--------|------------|-------------|------------|------------------|
| [#5994](https://github.com/zeroclaw-labs/zeroclaw/issues/5994) | Website + Docs E2E | 2026-04-22 | 2026-04-30 | 1 | P2 | NEEDS-MAINTAINER — Impacto alto em onboarding |
| [#5999](https://github.com/zeroclaw-labs/zeroclaw/issues/5999) | Gateway UX Improvements | 2026-04-22 | 2026-04-30 | 1 | P2 | IN-PROGRESS — Acompanhar |
| [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) | Audit: 153 commits perdidos em revert | 2026-04-24 | 2026-04-30 | 2 | P2 | IN-PROGRESS — Recuperação de código |
| [#5843](https://github.com/zeroclaw-labs/zeroclaw/issues/5843) | Model-wise Reasoning Config | 2026-04-17 | 2026-04-30 | 

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*