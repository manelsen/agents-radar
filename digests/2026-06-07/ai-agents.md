# Resumo diário do ecossistema de agentes de IA 2026-06-07

> Issues: 0 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-06-06 20:58 UTC

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

# Relatório Comparativo: Ecossistema de Agentes de IA Open Source

**Data:** 2026-06-07 | **Período:** Últimas 24 horas

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **dois polos distintos de atividade** em 2026-06-07. Hermes Agent e ZeroClaw lideram em volume absoluto (50 PRs cada), enquanto NanoBot demonstra a cadência mais equilibrada entre issues e PRs (6:23), sugerindo foco em qualidade sobre volume. CoPaw enfrenta regressões críticas em funcionalidades de sessão (v1.1.10), indicando que velocidade de release sem stabilização adequada gera attrition de usuários. PicoClaw e IronClaw concentram-se em dívida técnica (goroutine leaks, concurrency bugs), sinalizando maturação arquitetural. O silêncio absoluto do NullClaw levanta questões sobre viabilidade do projeto. As principais tendências convergentes são: segurança multi-tenant, compatibilidade com APIs OpenAI, e extensibilidade via plugins/WASM.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | Releases (24h) | Bugs Críticos | Saúde |
|---------|-------------|-----------|---------------|---------------|-------|
| **Hermes Agent** | 50 | 50 | 1 (v0.16.0) | 3 P1 abertas | 🔴 Alerta |
| **ZeroClaw** | 32 | 50 | 0 | 3 S1 abertas | 🟡 Consolidação |
| **NanoBot** | 6 | 23 | 0 | 2 críticos | ✅ Saudável |
| **PicoClaw** | 12 | 18 | 1 nightly | 1 alta | ✅ Estável |
| **IronClaw** | 5 | 40 | 0 | 3 altas | 🟡 Atenção |
| **CoPaw** | 10 | 3 | 0 | 3 críticas | 🔴 Regressões |
| **NullClaw** | 0 | 0 | 0 | — | ⚫ Inativo |

### Análise por Ratio de Eficiência

| Projeto | Ratio PR/Issue | Interpretação |
|---------|---------------|---------------|
| **NanoBot** | 3.8:1 | Forte pipeline de código, community pull |
| **IronClaw** | 8:1 | Desenvolvimento interno massivo |
| **Hermes Agent** | 1:1 | Equilíbrio issue→PR maduro |
| **ZeroClaw** | 1.6:1 | Volume equilibrado com backlog de bugs |
| **PicoClaw** | 1.5:1 | Bug-fixes dominam (8 PRs de estabilidade) |
| **CoPaw** | 0.3:1 | ⚠️ Demanda supera capacidade de resposta |
| **NullClaw** | N/A | Projeto abandonado |

---

## 3. Posicionamento do NanoBot (Referência Principal)

### Vantagens Competitivas

| Dimensão | NanoBot | Posição |
|----------|---------|---------|
| **Cadência de PRs** | 23 PRs/24h | 2º lugar em volume |
| **Qualidade de PRs** | 10 merged, 13 abertos | Pipeline balanceado |
| **Resposta a bugs críticos** | <24h (ex: #2573, #4167) | ✅ Excelente |
| **Multi-tenant security** | #2968 (per-user memory isolation) | ✅ Enterprise-ready |
| **MCP ACL** | #2533 (granular por server) | ✅ Diferenciação |
| **Suporte a thinking models** | #4228 (#4227) — reasoning_content | ✅ Moderno |

### Diferenças Técnicas vs. Pares

| Característica | NanoBot | Hermes Agent | ZeroClaw | PicoClaw |
|----------------|---------|--------------|----------|----------|
| **Arquitetura principal** | Python SDK | Python/CLI | Rust | Go |
| **Desktop support** | Em desenvolvimento (#4195) | TUI + Desktop | Web + plugins | CLI only |
| **Canal mais forte** | WhatsApp bridge | Multi-gateway | Twitch (WIP) | Slack/WhatsApp |
| **Segurança** | MCP ACL, SSRF guard | Hooks framework | OIDC planned | Workspace guard |
| **Enterprise features** | Per-user memory, GitHub Copilot | Agent profiles | OAuth providers | Multi-agent framework |

### Tamanho da Comunidade

- **NanoBot**: Não especificado explicitamente, mas 170+ contribuidores mencionados no Hermes sugerem magnitude similar
- **Sinal de maturidade**: 9 👍 em issue #2573 (autenticação Copilot) indica base de usuários ativos
- **Volume absoluto**: 6 issues + 23 PRs/24h é modesto comparado a ZeroClaw/Hermes, mas **qualidade superior** (zero releases, mas bugs críticos resolvidos em <24h)

---

## 4. Focos Técnicos Compartilhados

### 4.1 Segurança Multi-Tenant

Todos os projetos com ambição enterprise enfrentam o mesmo problema fundamental: **isolamento de recursos entre usuários**.

| Projeto | Solução Implementada |
|---------|---------------------|
| **NanoBot** | `agents.defaults.per_user_memory` (#2968) + MCP ACL (#2533) |
| **ZeroClaw** | OIDC provider planned (#7141) + per-skill permissions (#5775) |
| **IronClaw** | Hook framework em produção (#3934) |
| **PicoClaw** | Workspace guard + symlink escape blocking (#2965) |

**Implicação**: A segurança não é mais feature diferencial — é tabela stakes. Quem não implementar isolamento robusto perderá mercado enterprise.

### 4.2 Compatibilidade com APIs OpenAI

A fragmentação de provedores força todas as plataformas a soportarem múltiplas APIs.

| Projeto | Status |
|---------|--------|
| **NanoBot** | ✅ Fix #4209 para APIs OpenAI-compatíveis, suporte DeepSeek |
| **Hermes Agent** | 🟡 LiteLLM + Ollama hanging bug (#26489) |
| **ZeroClaw** | ✅ Bedrock Qwen bug (#7312) em aberto |
| **CoPaw** | 🔴 vLLM local regression (#4989) |

**Implicação**: A migração LiteLLM→OpenAI em NanoBot funcionou; outros projetos ainda enfrentam dores de cabeça.

### 4.3 Estabilidade de Bridges/Multi-Canal

```
NanoBot:      WhatsApp duplicate messages ✅, audio transcription ✅
              WeChat session state ❌ (PR #4223)
IronClaw:     WeCom approval loop 🔴
ZeroClaw:     Telegram scratchpad leak ✅ (#7239)
PicoClaw:     QQ Windows timeout 🔴 (#3015)
CoPaw:        企业微信 error handling 🔴 (#4990)
```

**Padrão**: Bridges são fonte constante de bugs; None dos projetos tem estabilidade de 100% em todos os canais.

### 4.4 Contexto e Memória

| Projeto | Problema | Status |
|---------|----------|--------|
| **Hermes Agent** | Compression summaries poluem conversa | 🔴 P1 (#38389) |
| **NanoBot** | max_messages break prompt caching | 🟡 Aberto (#4222) |
| **CoPaw** | /compact ignora max_input_length | 🟡 Aberto (#4937) |

**Tendência**: Gerenciamento de contexto é o problema técnico mais difícil do ecossistema.

---

## 5. Análise de Diferenciação

### 5.1 Por Público-Alvo

| Projeto | Público Primário | Proposta de Valor |
|---------|------------------|-------------------|
| **NanoBot** | Desenvolvedores + SMEs | SDK embeddable, multi-bridge, OpenAI-compatible |
| **Hermes Agent** | Usuários avançados de CLI | Feature-rich, TUI/Desktop maduro |
| **ZeroClaw** | Enterprise + DevOps | Rust-based, WASM plugins, OIDC planned |
| **PicoClaw** | Trading/Finanças (EXM) | Multi-agent framework, Binance connectors |
| **IronClaw** | Desenvolvedores nearai | Hook framework, Reborn architecture |
| **CoPaw** | Mercado chinês (企业微信) | Integração local com vLLM/Qwen |
| **NullClaw** | — | Desconhecido (inativo) |

### 5.2 Por Arquitetura

| Abordagem | Projetos | Trade-offs |
|-----------|----------|------------|
| **Python-first** | NanoBot, Hermes Agent, CoPaw | Produtividade, mas GIL limits |
| **Rust-first** | ZeroClaw | Performance, safety, curva de aprendizado |
| **Go** | PicoClaw | Concurrency nativo, binaries pequenos |
| **Mono-repo** | IronClaw (0.24→0.29.1 breaking) | Compartimentalização, mas migrations custosas |

### 5.3 Diferenciação Visível

| Projeto | Feature Diferenciadora | Evidência |
|---------|------------------------|-----------|
| **NanoBot** | Per-user memory isolation | #2968 merged |
| **Hermes Agent** | 874 commits, 170 contribuidores em 1 release | v0.16.0 |
| **ZeroClaw** | WASM plugin ecosystem | #7288, #7277, #7314 |
| **PicoClaw** | EXM (Exchange Module) para trading | #3024-#3028 |
| **IronClaw** | Hook framework production-ready | #3934 merged |
| **CoPaw** | Coding Mode específico | #4987 (mas quebrado) |

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração

| Tier | Projetos | Releases/Dia | PRs/Dia | Perfil |
|------|----------|--------------|---------|--------|
| **🚀 Veloz** | Hermes Agent, ZeroClaw | 1 (Hermes) | 50+ | Sprint agressivo, alta regressions risk |
| **⚡ Regular** | NanoBot, PicoClaw | 0-1 | 15-25 | Balanceado, foco em estabilidade |
| **🐢 Lento** | IronClaw | 0 | 40 (interno) | Refatoração massiva |
| **🔴 Estagnado** | CoPaw | 0 | 3 | Demanda > capacidade |
| **⚫ Morto** | NullClaw | 0 | 0 | — |

### 6.2 Maturidade Avaliada

| Indicador | NanoBot | Hermes Agent | ZeroClaw | PicoClaw |
|-----------|---------|--------------|----------|----------|
| **Bug response time** | <24h | Variável | <24h (S1) | ~24h |
| **Processo de release** | Informal | Heavy (874 commits) | Milestone tracking | Nightly builds |
| **Breaking changes** | Controladas | v0.15→v0.16 (big) | v0.8.x planned | N/A |
| **Tech debt visible** | Moderada | Alta (P1 bugs) | Moderada | Baixa (chengzhichao-xydt fixing) |
| **Community governance** | Descentralizado | NousResearch | zeroclaw-labs | sipeed |

### 6.3 Qual Projeto Está "Vencendo"?

**Hermes Agent** — pelo volume: 50 issues + 50 PRs + 170 contribuidores + 1 release massivo. Porém, 3 P1 bugs abertos + 12 P2 sugerem dívida técnica acumulada.

**NanoBot** — pela saúde relativa: apesar de menor volume, bugs críticos resolvidos em <24h, comunidade engajada (9 👍 em issue), e features enterprise converging. Melhor ratio de "bug fix / regressão".

**ZeroClaw** — pelo roadmap: v0.8.x → v0.9.x com trackers claros, OIDC planned, WASM ecosystem. Direção estratégica clara.

---

## 7. Sinais de Tendência

### 7.1 Tendências de Mercado Extraídas

| Tendência | Evidência | Implicação |
|-----------|-----------|------------|
| **Enterprise readiness** | Per-user memory, MCP ACL, OIDC | Demanda por deployments multi-tenant crescendo |
| **Desktop como prioridade** | Hermes "Surface Release", NanoBot desktop shell | Usuários finais querem GUI, não só CLI |
| **Multi-agente** | PicoClaw blackboard, NanoBot subagents, IronClaw Reborn | Orquestração de agentes é próximo paradigma |
| **Extensibilidade via WASM** | ZeroClaw plugin system, PicoClaw EXM | Plugins como modelo de negócio/ecosistema |
| **Trading/Finanças** | PicoClaw EXM, Binance connectors | IA agents entrando em vertical finance |
| **Mercado chinês** | CoPaw + 企业微信, NanoBot WeChat | Diferenciação regional necessária |
| **Prompt caching** | #4222, #27339 (Hermes) | Otimização de custos é preocupação real |

### 7.2 Features que Virão (Roadmap Signals)

```
1. OIDC Authentication         → ZeroClaw v0.9.0
2. Desktop UI polished         → Hermes v0.17, NanoBot #4195
3. Exchange/Trading modules    → PicoClaw EXM
4. WASM Plugin ecosystem       → ZeroClaw v0.8.2
5. Agent profiles              → Hermes #9459
6. "Dreaming" memory           → Hermes #25309
```

### 7.3 Sinais de Alerta Sistêmicos

1. **CoPaw não está acompanhando demanda** — 3 PRs vs 10 issues em 24h é ratio crítico. Usuários reportando regressões em v1.1.10 indicam release cycle prematura.

2. **NullClaw abandono** — Projeto reference sem atividade levanta questão: quantos projetos de IA agent serão abandonados em 2026?

3. **Breaking changes em IronClaw** (0.24→0.29.1) — Atualização de 5 versões em uma mudança sinaliza refatoração agressiva; comunidade pode resistir.

---

## Conclusão

O ecossistema de agentes de IA open source está em **fase de maturação acelerada**. Hermes Agent e ZeroClaw lideram em volume, masNanoBot oferece o melhor equilíbrio entre velocidade e qualidade de resposta. As tendências convergentes (enterprise security, desktop, multi-agent, WASM extensibility) indicam que o mercado está amadurecendo de "protótipos experimentais" para "infraestrutura de produção". Projetos que não estabilizarem bridges, gerenciarem contexto, e implementarem isolamento multi-tenant em 2026 perderão espaço para concorrentes mais maduros.

---

*Relatório gerado em 2026-06-07 com base nos resumos de atividade comunitária dos projetos: NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw, e ZeroClaw.*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-06-07

---

## 1. Panorama do Dia

NanoBot demonstra **atividade intensa e saudável** nesta data, com **6 issues e 23 PRs atualizados nas últimas 24h**. O volume de PRs abertos (13) e fechados/merged (10) sinaliza uma cadência de desenvolvimento robusta. Destaque para a resolução de bugs críticos como o problema de imagem com APIs OpenAI-compatíveis (#4167/#4209) e vazamento de stdio MCP no SDK (#4211). A comunidade está ativamente enriquecendo funcionalidades de enterprise (GitHub Copilot Business), acessibilidade (AssemblyAI transcription) e estabilidade de bridges (WhatsApp). Não houve releases formais hoje, indicando que o time está em ciclo de revisão e preparação para o próximo tagged release.

---

## 2. Lançamentos

**Nenhum release formal hoje.**

O projeto mantém a versão mais recente documentada como `nanobot v0.1.4.post6` (conforme Issue #2573). O alto volume de PRs em revisão sugere que um novo release está em preparação, possivelmente abordando os bugs de imagem, streaming reasoning_content e as melhorias de enterprise.

---

## 3. Progresso do Projeto

### PRs Fechados/Merged Hoje

| # | PR | Autor | Destaque |
|---|-----|-------|----------|
| #4209 | [`fix(providers): allow dropping default OpenAI image params via null extraBody`](https://github.com/HKUDS/nanobot/pull/4209) | 04cb | **Correção crítica** — Permite que usuários de APIs OpenAI-compatíveis desabilitem `response_format` passando `{"response_format": null}` no extraBody, fechando #4167 |
| #4228 | [`fix: preserve empty reasoning_content in streaming response parsing`](https://github.com/HKUDS/nanobot/pull/4228) | Yuxin-Lou | Preserva `reasoning_content=""` em vez de converter para `None`, essencial para DeepSeek e APIs de thinking models |
| #4195 | [`feat(desktop): polish desktop shell and shared WebUI surfaces`](https://github.com/HKUDS/nanobot/pull/4195) | Re-bin | Avança superfície desktop do nanobot com gateway APIs para preview de arquivos, skills e automations |
| #2968 | [`feat(memory): per-user memory isolation via agents.defaults.per_user_memory`](https://github.com/HKUDS/nanobot/pull/2968) | franciscomaestre | **Feature de segurança multi-tenant** — Isola `MEMORY.md` e `history.jsonl` por usuário |
| #2555 | [`fix(whatsapp-bridge): close existing clients on new connection`](https://github.com/HKUDS/nanobot/pull/2555) | franciscomaestre | Previne duplicate messages em reconexões ao WhatsApp bridge |
| #2533 | [`feat: per-MCP-server allowFrom access control`](https://github.com/HKUDS/nanobot/pull/2533) | franciscomaestre | ACL granular por servidor MCP, restringindo tools sensíveis a usuários específicos |
| #2532 | [`feat(search): add Serper.dev as Google Search provider`](https://github.com/HKUDS/nanobot/pull/2532) | franciscomaestre | Adiciona Serper.dev como provedor de busca Google alternativo |
| #2529 | [`fix(whatsapp-bridge): download audio messages for transcription`](https://github.com/HKUDS/nanobot/pull/2529) | franciscomaestre | Permite transcrição de voice messages no WhatsApp |
| #2528 | [`fix(whatsapp-bridge): drop messages older than startup`](https://github.com/HKUDS/nanobot/pull/2528) | franciscomaestre | Evita replay de histórico ao restart do WhatsApp bridge |

### Avanços Principais

- **Isolamento de memória multi-tenant** (#2968) é uma melhoria significativa para deployments empresariais
- **Access control por MCP server** (#2533) adiciona segurança para ferramentas privadas (DBs, APIs)
- **Correção de `reasoning_content`** (#4228) garante compatibilidade com DeepSeek e thinking models
- **Desktop surface** (#4195) marca a primeira abertura para experiência desktop nativa

---

## 4. Temas Quentes da Comunidade

### Issues com Mais Engajamento

| # | Título | 👍 | Comentários | Status | Tema Principal |
|---|--------|----|-------------|--------|---------------|
| #2573 | [`Github Copilot登录失败`](https://github.com/HKUDS/nanobot/issues/2573) | 9 | 3 | CLOSED | **Bug crítico de autenticação OAuth** após migração para OpenAI |
| #4167 | [`Image generation fails with OpenAI-compatible APIs`](https://github.com/HKUDS/nanobot/issues/4167) | 0 | 2 | CLOSED | Compatibilidade com APIs que não suportam `response_format` |
| #4211 | [`SDK leaves stdio MCP open → shutdown error`](https://github.com/HKUDS/nanobot/issues/4211) | 0 | 0 | CLOSED | Vazamento de resources no SDK embed mode |
| #4222 | [`max_messages truncation defeats prompt caching`](https://github.com/HKUDS/nanobot/issues/4222) | 0 | 0 | OPEN | **Performance** — contexto drift quebra prefix caching |
| #4220 | [`GitHub Copilot for Business / Enterprise support`](https://github.com/HKUDS/nanobot/issues/4220) | 0 | 0 | OPEN | **Feature request enterprise** |
| #4218 | [`WebUI Cron Job Management`](https://github.com/HKUDS/nanobot/issues/4218) | 0 | 0 | OPEN | **Feature request UX** |

### Análise de Demandas

1. **Autenticação OAuth (#2573)** — 9 reactions é o dobro de qualquer outra issue, indicando dor compartilhada. A migração de LiteLLM para OpenAI quebrou o device flow do Copilot.
2. **Prompt Caching (#4222)** — Recente mas relevante; usuários avançados querem otimizar custos com cache de prefixo.
3. **Enterprise Readiness (#4220)** — Demanda clara por GHE (GitHub Enterprise Server) e Copilot Business.

---

## 5. Bugs e Estabilidade

### Bugs Reportados Hoje

| # | Severidade | Título | Link | Status |
|---|------------|--------|------|--------|
| #2573 | 🔴 Alta | GitHub Copilot OAuth broken after LiteLLM→OpenAI migration | [#2573](https://github.com/HKUDS/nanobot/issues/2573) | CLOSED |
| #4167 | 🔴 Alta | Image generation fails with OpenAI-compatible APIs (response_format) | [#4167](https://github.com/HKUDS/nanobot/issues/4167) | CLOSED (fix #4209) |
| #4211 | 🟡 Média | SDK stdio MCP leaves resource leak → shutdown panic | [#4211](https://github.com/HKUDS/nanobot/issues/4211) | CLOSED |
| #4222 | 🟡 Média | max_messages truncation breaks prompt/prefix caching | [#4222](https://github.com/HKUDS/nanobot/issues/4222) | OPEN |
| #4223 | 🟡 Média | WeChat: session state not reloaded after token expiry | [#4223](https://github.com/HKUDS/nanobot/pull/4223) | OPEN (PR) |
| #4221 | 🟡 Média | ExecTool: relative symlink workspace escapes | [#4221](https://github.com/HKUDS/nanobot/pull/4221) | OPEN (PR) |

### Bugs Críticos Resolvidos

1. **OAuth Copilot (#2573)** — Resolvido após 3 comentários e 9 👍; bug introduzido na v0.1.4.post6
2. **Image API Compatibility (#4167)** — Fix #4209 permite null override do `response_format`
3. **SDK Resource Leak (#4211)** — stdio MCP não fechava corretamente ao usar `Nanobot.from_config()`

### Bugs Em Aberto Requerem Atenção

- **#4222** — Prompt caching quebrado pelo drift de `max_messages` boundary; impacto direto em custos de inference
- **#4223** (PR) — WeChat entra em loop eterno após token expiry sem re-autenticar

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| # | Feature | Link | Prioridade Estimada |
|---|---------|------|---------------------|
| #4220 | GitHub Copilot for Business / Enterprise support | [#4220](https://github.com/HKUDS/nanobot/issues/4220) | Alta (enterprise) |
| #4218 | WebUI Cron Job Management UI | [#4218](https://github.com/HKUDS/nanobot/issues/4218) | Média (UX) |
| #4224 | AssemblyAI como provedor de transcrição | [#4224](https://github.com/HKUDS/nanobot/pull/4224) | Média (provider diversity) |
| #4225 | Cron silent mode e lock_recipient | [#4225](https://github.com/HKUDS/nanobot/pull/4225) | Média (job control) |
| #4226 | WhatsApp forwarded message detection | [#4226](https://github.com/HKUDS/nanobot/pull/4226) | Média (bridge feature) |

### PRs de Feature em Desenvolvimento

1. **#4220** — Suporte a GHE/Copilot Business (diferentes endpoints OAuth)
2. **#4224** — AssemblyAI como alternativa a Groq/OpenAI Whisper
3. **#4225** — Silent mode para cron jobs de background monitoring
4. **#4226** — Forwarded message detection + startup guard + contact handling no WhatsApp
5. **#4033** — Sender identity context para Discord guilds/threads multi-user
6. **#4094** — Channel dispatch durability + WebSocket proactive messages

### Sinais de Roadmap

| Área | Indicação |
|------|-----------|
| **Enterprise** | GitHub Copilot Business, per-user memory isolation (#2968 merged) |
| **Desktop** | Desktop shell polishing (#4195 merged) |
| **Multi-channel** | WhatsApp bridge enhancements, WeChat fix, Discord identity |
| **Observability** | Cron job management UI |
| **Security** | MCP server ACL (#2533), SSRF guard (#4123), symlink escape blocking (#4221) |

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Dor | Issue | Frequência | Impacto |
|-----|-------|------------|---------|
| **Autenticação Copilot quebrada** | #2573 | Alta (9 👍) | Bloqueante para users de Copilot |
| **APIs de imagem incompatíveis** | #4167 | Média | Impede uso com Agnes AI e similares |
| **Sem UI para cron jobs** | #4218 | Média | CLI-only força users técnicos |
| **Prompt caching não funciona** | #4222 | Emergente | Custos elevados de inference |
| **Session leak no SDK** | #4211 | Baixa | Usuários de embed mode |
| **WhatsApp audio não transcreve** | #2529 (fixed) | Média | Voice messages inúteis |
| **WhatsApp duplicate messages** | #2555 (fixed) | Média | Experiência confusa |
| **Replay de mensagens antigas** | #2528 (fixed) | Média | Confusão contextual |

### Cenários de Uso Emergentes

1. **Multi-tenant enterprise deployments** — Requisição de isolamento de memória (#2968) e ACL por MCP
2. **Background monitoring agents** — Necessidade de cron silent mode (#4225)
3. **Desktop-native experience** — Avanço em #4195 indica demanda por客户端 desktop
4. **DeepSeek/thinking models** — Compatibilidade com `reasoning_content` (#4228)

### Satisfação Geral

O projeto demonstra **alta responsividade** — bugs críticos (#2573, #4167) foram fechados rapidamente. A comunidade está ativa em múltiplas frentes (security, UX, enterprise). Não há indications de satisfação negativa generalizada; o volume de engagement (6 issues + 23 PRs em 24h) sugere comunidade engajada.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta há >7 dias

| # | Título | Criado | Status | Ação Recomendada |
|---|--------|--------|--------|------------------|
| #4222 | max_messages truncation defeats prompt caching | 2026-06-06 | OPEN | Priorizar — impacto em custos |
| #4220 | GitHub Copilot for Business / Enterprise | 2026-06-06 | OPEN | Avaliar scope, possivelmente duplicar esforço de #2573 |
| #4218 | WebUI Cron Job Management UI | 2026-06-06 | OPEN | Confirmar viabilidade, vincular a #4225 |
| #4211 | SDK stdio MCP leak | 2026-06-05 | CLOSED | Confirmar que fix foi merged ou precisa de follow-up |

### PRs Abertos Requerendo Review

| # | PR | Autor | Prioridade | Bloqueia |
|---|-----|-------|------------|----------|
| #4227 | [`fix: preserve empty-string reasoning_content`](https://github.com/HKUDS/nanobot/pull/4227) | michaelxer | 🔴 Alta | Compatibilidade DeepSeek |
| #4223 | [`fix(weixin): reload session state after pause expiry`](https://github.com/HKUDS/nanobot/pull/4223) | DreamShepherd2006 | 🟡 Média | Loop eterno no WeChat |
| #4221 | [`fix(exec): block relative symlink workspace escapes`](https://github.com/HKUDS/nanobot/pull/4221) | yu-xin-c | 🔴 Alta | Security: path traversal |
| #4219 | [`fix(session): drop orphan tool results before trimming`](https://github.com/HKUDS/nanobot/pull/4219) | yu-xin-c | 🟡 Média | Consistência de history |
| #4123 | [`fix(mcp): reject unsafe HTTP URLs before probe`](https://github.com/HKUDS/nanobot/pull/4123) | yu-xin-c | 🔴 Alta | SSRF prevention |
| #4033 | [`Add chat sender identity context`](https://github.com/HKUDS/nanobot/pull/4033) | hamb1y | 🟡 Média | Multi-user Discord |

### Debt Técnico Identificado

1. **#4222 / #4219** — Session history trimming precisa de refatoração para não quebrar prompt caching
2. **#4123** — SSRF guard precisa ser integrado ao probing de MCP servers
3. **#2573** — A migração LiteLLM→OpenAI introduziu regressions; auditfull migration path recomendada

---

## Métricas de Saúde do Projeto

| Indicador | Valor | Avaliação |
|-----------|-------|-----------|
| Issues fechadas (24h) | 3 | ✅ Boa |
| PRs merged/fechados (24h) | 10 | ✅ Excelente |
| PRs abertos (24h) | 13 | ✅ Pipeline ativo |
| Releases (24h) | 0 | 🟡 Sem tags, mas many PRs ready |
| Bugs críticos em aberto | 2 | 🟡 Requerem atenção |
| Features enterprise em desarrollo | 3+ | ✅ Roadmap diversificado |
| Tempo médio de resposta (issues hot) | <24h | ✅ Comunidade responsiva |

---

*Relatório gerado em 2026-06-07 com base em dados do GitHub do HKUDS/nan

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent
**Data:** 2026-06-07 | **Versão Atual:** v0.16.0 (The Surface Release)
**Repositório:** [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)

---

## 1. Panorama do Dia

O Hermes Agent vive um momento de altíssima atividade com 50 issues e 50 PRs atualizados nas últimas 24h, evidenciando uma comunidade engajada. O lançamento da **v0.16.0 "The Surface Release"** ontem (2026-06-05) trouxe um volume massivo de mudanças — 874 commits, 542 PRs mergeados e 170 contribuidores — sinalizando uma sprint agressiva de entrega. Três bugs de severidade **P1** estão abertos exigindo atenção imediata: falha no gateway por `NameError`, summaries de compressão poluindo mensagens, e falha no gateway start no macOS. A plataforma Desktop e os gateways multi-canais (Telegram, WeChat, QQ) concentram a maioria das regressões recentes.

---

## 2. Lançamentos

### 🆕 v2026.6.5 — Hermes Agent v0.16.0 "The Surface Release"
**Data:** 5 de junho de 2026 | **Release:** [v2026.6.5](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.6.5)

**Escopo desde v0.15.2:**
| Métrica | Valor |
|----------|-------|
| Commits | 874 |
| PRs mergeados | 542 |
| Arquivos alterados | 1.962 |
| Linhas inseridas | +205.216 |
| Linhas removidas | -46.217 |
| Issues fechadas | 399 (2 P0, 62 P1, 16 security-tagged) |
| Contribuidores | 170 (incluindo co-autores) |

**Destaque:** O nome "The Surface" sugere foco em UX, interface e pontos de contato com o usuário — alinhado com os relatórios de bugs em TUI, Desktop e gateways desta data.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados Hoje (5 total)

| PR | Autor | Descrição | Impacto |
|----|-------|-----------|---------|
| [#40770](https://github.com/NousResearch/hermes-agent/pull/40770) | nittatomonori-star | Adiciona diagnósticos de contrato de atualização Desktop + notas de compressão headroom | Estabilidade Desktop |
| [#40764](https://github.com/NousResearch/hermes-agent/pull/40764) | mrlufepines | Adiciona tool `telegram_group_ops` para operações em grupo (send_poll, pin/unpin) | Funcionalidade Telegram |
| [#40658](https://github.com/NousResearch/hermes-agent/issues/40658) | gitdexgit | Feature LLM-wiki para redução de tokens na sessão | Eficiência de contexto |

### PRs Abertos com Maior Relevância (10 selecionadas)

| PR | Autor | Componente | Descrição |
|----|-------|------------|-----------|
| [#40782](https://github.com/NousResearch/hermes-agent/pull/40782) | r266-tech | Gateway | Move chamadas SQLite do `_handoff_watcher` para fora do event loop — resolve possível deadlock |
| [#40781](https://github.com/NousResearch/hermes-agent/pull/40781) | yoniebans | Desktop | Botões de versão client/backend com overlay de update em thin-client remoto |
| [#40759](https://github.com/NousResearch/hermes-agent/pull/40759) | chrislazar25 | Gateway | Adiciona `/queue` para bypass de interrupção indesejada — bug P2 |
| [#40758](https://github.com/NousResearch/hermes-agent/pull/40758) | chrislazar25 | CLI | Executa post-pull steps em subprocess para evitar skew de bytecode |
| [#40755](https://github.com/NousResearch/hermes-agent/pull/40755) | chrislazar25 | Agent/Gemini | Tracker de cooldown TPM/RPM por minuto para handling de 429 |
| [#40754](https://github.com/NousResearch/hermes-agent/pull/40754) | chrislazar25 | Gateway | Mantém `response.completed` SSE sob 128KB — compatibilidade Open WebUI |
| [#40773](https://github.com/NousResearch/hermes-agent/pull/40773) | rrevenanttt | Security | Fecha bypass crítico no `hardline rm` via paths quoting e `${HOME}` |
| [#40776](https://github.com/NousResearch/hermes-agent/pull/40776) | bpasquini | Desktop | Recupera sessão após sleep/wake do laptop |
| [#22532](https://github.com/NousResearch/hermes-agent/pull/22532) | kamellperry | Gateway/Telegram | Wire de callbacks de clarify para sessões Telegram |
| [#40780](https://github.com/NousResearch/hermes-agent/pull/40780) | HeLLGURD | Skills | Novo skill `explain-error` — decodifica erros e stack traces |

---

## 4. Temas Quentes da Comunidade

### Issues com Mais Engajamento (comentários + reações)

| Issue | Tipo | Comentários | 👍 | Resumo |
|-------|------|-------------|-----|--------|
| [#27339](https://github.com/NousResearch/hermes-agent/issues/27339) | Bug | 7 | 0 | Prompt Cache/KV Cache invalidation com tool shuffling dinâmico — **RESOLVIDA** |
| [#9459](https://github.com/NousResearch/hermes-agent/issues/9459) | Feature | 4 | 14 | Agent profiles para `delegate_task` — mais votada do dia |
| [#26489](https://github.com/NousResearch/hermes-agent/issues/26489) | Bug | 4 | 1 | Hermes hangs com provider=custom + LiteLLM + Ollama |
| [#36658](https://github.com/NousResearch/hermes-agent/issues/36658) | Bug | 4 | 2 | Dashboard chat feature quebrado após update |
| [#38824](https://github.com/NousResearch/hermes-agent/issues/38824) | Feature | 2 | 0 | Proposal: Plugin OpenTelemetry trace emitter |

**Análise:**
- **Contexto e memória** domina as discussões técnicas (caching, compression, delegation).
- A feature de **agent profiles** (#9459, 14 👍) indica demanda por orquestração avançada de subagentes.
- Bugs em **Dashboard** e **LiteLLM/Ollama** mostram áreas defragilidade no ecossistema de provedores.

---

## 5. Bugs e Estabilidade

### 🔴 P1 — Críticos (3 abertas, 1 fechada)

| Issue | Componente | Descrição | Status |
|-------|------------|-----------|--------|
| [#8090](https://github.com/NousResearch/hermes-agent/issues/8090) | Gateway | `NameError: name 'RedactingFormatter' is not defined` crash no startup após #7991 | **ABERTA** |
| [#38389](https://github.com/NousResearch/hermes-agent/issues/38389) | Agent/Memory | Summaries de compressão injetados como mensagens regulares — polui conversa | **ABERTA** |
| [#23387](https://github.com/NousResearch/hermes-agent/issues/23387) | CLI/macOS | `hermes gateway start` falha com error 125 no macOS 26.4.1 | **FECHADA** |

### 🟠 P2 — Altos (12+ abertas)

| Issue | Componente | Descrição | Plataforma |
|-------|------------|-----------|------------|
| [#26489](https://github.com/NousResearch/hermes-agent/issues/26489) | Agent | Hermes hangs com LiteLLM proxy + Ollama (sem chat completion) | Universal |
| [#37361](https://github.com/NousResearch/hermes-agent/issues/37361) | Terminal/Docker | Container Docker isolado por sessão — auth não compartilha | Docker |
| [#40416](https://github.com/NousResearch/hermes-agent/issues/40416) | Gateway | Context compaction deleta visualmente mensagens no Telegram | Telegram |
| [#40655](https://github.com/NousResearch/hermes-agent/issues/40655) | Gateway/QQ | Approval button clicks rejeitados por chat_type mismatch | QQ Bot |
| [#40715](https://github.com/NousResearch/hermes-agent/issues/40715) | Gateway/Email | Blank env vars habilitam email e fazem retry infinito — OOM em VPS | Email |
| [#40696](https://github.com/NousResearch/hermes-agent/issues/40696) | Gateway/Windows | Scheduled task mostra cmd window visível no Windows | Windows |

### 🟡 P3 — Medios (15+ abertas)

| Issue | Componente | Descrição |
|-------|------------|-----------|
| [#36658](https://github.com/NousResearch/hermes-agent/issues/36658) | TUI/Dashboard | React error #301 quebra chat feature |
| [#38015](https://github.com/NousResearch/hermes-agent/issues/38015) | Desktop/Linux | Flickering no chat transcript em Wayland nativo |
| [#23984](https://github.com/NousResearch/hermes-agent/issues/23984) | CLI/TUI | Mensagens constantes "No Image found in Clipboard" |
| [#39981](https://github.com/NousResearch/hermes-agent/issues/39981) | Plugins/Memory | OpenViking não auto-inicia — requer start manual |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Abertas (15+ hoje)

| Issue | Feature | Categoria | 👍 |
|-------|---------|-----------|-----|
| [#9459](https://github.com/NousResearch/hermes-agent/issues/9459) | Agent profiles para `delegate_task` | Orchestration | 14 |
| [#25309](https://github.com/NousResearch/hermes-agent/issues/25309) | "Dreaming" — Memory consolidation automática em background | Memory | 0 |
| [#38824](https://github.com/NousResearch/hermes-agent/issues/38824) | OpenTelemetry (OTEL) trace emitter plugin | Observability | 0 |
| [#40717](https://github.com/NousResearch/hermes-agent/issues/40717) | Adicionar `openrouter/free` ao model picker | Providers | 0 |
| [#40769](https://github.com/NousResearch/hermes-agent/issues/40769) | "Group by" picker no Desktop sidebar | Desktop | 0 |
| [#40768](https://github.com/NousResearch/hermes-agent/issues/40768) | Controles de font size/density no Windows Desktop | Desktop | 0 |
| [#40760](https://github.com/NousResearch/hermes-agent/issues/40760) | Manter tool-call accordions expandidos permanentemente | Desktop | 0 |
| [#40767](https://github.com/NousResearch/hermes-agent/issues/40767) | Adicionar link HVTracker trust badge no README | Docs | 0 |

### Skills Recém-Adicionados (3 novos PRs hoje)

| PR | Skill | Descrição |
|----|-------|-----------|
| [#40780](https://github.com/NousResearch/hermes-agent/pull/40780) | `software-development/explain-error` | Decodifica erros, exceções e stack traces |
| [#40778](https://github.com/NousResearch/hermes-agent/pull/40778) | `software-development/git-workflow` | Assistente E2E para operações Git |
| [#40777](https://github.com/NousResearch/hermes-agent/pull/40777) | `software-development/changelog-generator` | Gera CHANGELOG.md do git history |

**Sinais de roadmap:**
- **Observabilidade:** Demanda clara por OTEL (#38824)
- **Memory inteligente:** "Dreaming" (#25309) sugere inspiração em processos biológicos
- **Desktop como prioridade:** Múltiplas issues de UI/UX indicam foco no release "Surface"

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Categoria | Problema | Severidade | Impacto |
|-----------|----------|------------|---------|
| **Contexto** | Compressão de contexto deleta mensagens visualmente no Telegram | P2 | Experiência do usuário catastrófica |
| **Contexto** | Summaries de compressão aparecem como mensagens normais | P1 | Poluição visual da conversa |
| **Infraestrutura** | Docker cria container isolado por sessão — autenticação não persiste | P2 | Fluxo de trabalho quebrado |
| **Provedores** | Hermes hangs com LiteLLM + Ollama — não recupera | P2 | Produtividade reduzida |
| **Platformas** | Email gateway faz retry infinito com blank env vars — OOM | P2 | Estabilidade do host |
| **UX Desktop** | Flickering em Wayland / problemas de font no Windows | P3 | Experiência degradada |

### Cenários de Uso Reportados

1. **Desenvolvedores com CLI** — Problemas de clipboard, bytecode skew em updates, status bar desatualizado
2. **Usuários de Desktop** — Flickering, acordeões colapsando rápido demais, recuperação de sessão após sleep
3. **Operadores de gateways** — Mensagens perdidas no WeChat, approval buttons quebrados no QQ, cmd window visível no Windows
4. **Ambientes Docker** — Impossibilidade de manter estado de auth entre sessões

---

## 8. Backlog que Merece Atenção

### Issues sem Resposta/Engajamento (Stale)

| Issue | Criado | Tipo | Descrição | Sinal de Alerta |


</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-06-07

---

## 1. Panorama do Dia

O projeto PicoClaw demonstra **alta atividade de desenvolvimento** em 07/06/2026, com 18 PRs atualizados (15 merged/fechados) e 12 issues movimentadas. A atividade concentra-se em **duas frentes principais**: (a) múltiplos fixes defensivos de estabilidade (goroutine leaks, type assertions, error handling) mergeados pelo contribuidor chengzhichao-xydt, e (b) uma nova iniciativa de arquitetura "EXM" (Exchange Module) com 7 issues criadas para implementar conectores Binance e um hub de mensagens. A release nightly v0.2.9-nightly.20260606 está disponível, indicando que a versão 0.2.9 está em fase de estabilização.

---

## 2. Lançamentos

### Release Ativa: `nightly` — v0.2.9-nightly.20260606.89ee8f1b

| Item | Detalhes |
|------|----------|
| **Data** | 06/06/2026 |
| **Tipo** | Automated nightly build |
| **Status** | ⚠️ Estável/Unstable — uso em produção com cautela |
| **Comparativo** | https://github.com/sipeed/picoclaw/compare/v0.2.9...main |

**Nota**: Esta é uma build automática do branch `main`, não uma release tagada. Não há changelog detalhado disponível — apenas o diff contra `v0.2.9`.

---

## 3. Progresso do Projeto

### PRs Merged/Closed Hoje (15 total)

| PR | Autor | Tipo | Impacto |
|----|-------|------|---------|
| [#1112](https://github.com/sipeed/picoclaw/pull/1112) | liugangjian | Provider Enhancement | Adiciona suporte ao protocolo `deepseek-ai/` no modelscope.cn para modelos como DeepSeek-V3.2 |
| [#2711](https://github.com/sipeed/picoclaw/pull/2711) | openapphub | Bug Fix | Corrige botão de copy no frontend em contextos HTTP (non-secure) |
| [#830](https://github.com/sipeed/picoclaw/pull/830) | zilin | Channel Enhancement | Adiciona suporte ao canal **Google Chat** |
| [#423](https://github.com/sipeed/picoclaw/pull/423) | Leeaandrob | Framework (WIP) | Base multi-agent collaboration framework com Blackboard, agent handoff e discovery tools |
| [#2838](https://github.com/sipeed/picoclaw/pull/2838) | bogdanovich | Agent Enhancement | Suporte a filtros `allow/deny` com glob patterns para tools e MCP servers via frontmatter |
| [#3016](https://github.com/sipeed/picoclaw/pull/3016) | chengzhichao-xydt | Bug Fix | **Goroutine leak** em `Manager.Reload()` — cancelamento de context ao recarregar canais |
| [#3021](https://github.com/sipeed/picoclaw/pull/3021) | chengzhichao-xydt | Bug Fix | Previne panic ao acessar `GetStartupInfo()` com agent nil |
| [#3022](https://github.com/sipeed/picoclaw/pull/3022) | chengzhichao-xydt | Bug Fix | Adiciona ok-checks em `sync.Map` para Slack, Windows e Feishu |
| [#3023](https://github.com/sipeed/picoclaw/pull/3023) | chengzhichao-xydt | Bug Fix | Verifica erros de `Close()` na extração de arquivos (self-update path) |
| [#3017](https://github.com/sipeed/picoclaw/pull/3017) | chengzhichao-xydt | Bug Fix | Garante flush do encoder base64 em caso de erro em `encodeMediaFile` |
| [#3019](https://github.com/sipeed/picoclaw/pull/3019) | chengzhichao-xydt | Bug Fix | Corrige type-switch em WhatsApp e verifica erros em `FilterSensitive` |
| [#3020](https://github.com/sipeed/picoclaw/pull/3020) | bogdanovich | Enhancement | Melhora formatação Slack e adiciona filtros de routing por canal |
| [#3014](https://github.com/sipeed/picoclaw/pull/3014) | chengzhichao-xydt | Bug Fix | Mesmo fix de goroutine leak (duplicado/alternativo ao #3016) |
| [#2965](https://github.com/sipeed/picoclaw/pull/2965) | maxmilian | Security/Bug | Corrige misinterpretation de URLs scheme-less pelo workspace guard |
| [#3013](https://github.com/sipeed/picoclaw/pull/3013) | shenjiecode | Docs | Remove referências a scripts não existentes no skill-creator |

**Destaque**: A iniciativa **Multi-Agent Framework** (PR #423) representa um avanço arquitetural significativo, introduzindo um sistema de comunicação entre agentes com context pool compartilhado e ferramentas de descoberta.

---

## 4. Temas Quentes da Comunidade

### Issues/PRs com Maior Engajamento

| Issue/PR | Comentários | Reações | Tema |
|----------|-------------|---------|------|
| [#2625](https://github.com/sipeed/picoclaw/issues/2625) | 8 | 👍 1 | Compiled builds com WhatsApp support |
| [#2929](https://github.com/sipeed/picoclaw/issues/2929) | 3 | 👍 2 | Comunicação agent-to-agent peer-to-peer |
| [#423](https://github.com/sipeed/picoclaw/pull/423) | — | — | Multi-agent collaboration framework |

### Análise das Demandas

**WhatsApp Support (#2625 — Closed)**  
O usuário duckida reportou dificuldade em usar PicoClaw com WhatsApp no Raspberry Pi Zero 2. A build padrão arm64 não inclui suporte a WhatsApp. A issue foi fechada — provavelmente absorvida pelo roadmap. **Sinal de demanda**: Usuários em hardware limitado precisam de builds pré-configuradas por canal.

**Agent-to-Agent Communication (#2929 — Closed)**  
O usuário afjcjsbx identificou uma lacuna: agentes já podem usar `spawn`, `subagent` e `delegate`, mas não existe uma camada de comunicação peer-to-peer de primeira classe. A issue foi fechada, possivelmente relacionada ao PR #423 (multi-agent framework). **Sinal de roadmap**: Comunicação agent-to-agent é uma feature planejada para a arquitetura multi-agente.

**Tradução Chinês Tradicional (#2935 — Open)**  
O PR de maxmilian adiciona locale zh-TW, demonstrando interesse da comunidade asiática.

---

## 5. Bugs e Estabilidade

### Bugs Reportados Hoje

| Issue | Severidade | Canal | Problema | Status |
|-------|------------|-------|----------|--------|
| [#3015](https://github.com/sipeed/picoclaw/issues/3015) | **Alta** | QQ Channel (Windows) | Timeout ao obter access token de bots.qq.com — canal não inicia | **Open** |

#### Detalhe do Bug #3015

- **Ambiente**: Windows (build de release)
- **Sintoma**: `picoclaw gateway` falha ao iniciar QQ channel com "token retrieval timeout"
- **Canal afetado**: Apenas QQ (outros canais funcionais)
- **Ação recomendada**: Investigar configuração de OAuth do QQ no Windows, possivelmente relacionado a proxies ou restrições de rede

### Fixes de Estabilidade Merged

O contribuidor **chengzhichao-xydt** foi responsável pela maioria dos fixes de robustez:

| Tipo de Issue | Arquivos Afetados | Risco se não corrigido |
|---------------|-------------------|------------------------|
| Goroutine leak | `Manager.Reload()` | Vazamento de recursos em reloads frequentes |
| Nil pointer panic | `startupInfo` map access | Crash ao iniciar sem agent configurado |
| Unchecked type assertions | `sync.Map` em Slack/Windows/Feishu/LINE | Panic em race conditions |
| Close() errors ignorados | Extração de zip/tar | Arquivos corrompidos no self-update |
| Base64 encoder flush | `encodeMediaFile` | Mídia corrompida em uploads |

**Métricas de Saúde**: 6 PRs de bug fix em um único dia indica foco em **dívida técnica e estabilidade** antes de novos recursos.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Nova Iniciativa: EXM (Exchange Module)

Um conjunto coordenado de 7 issues foi criado por **jcafeitosa** em 06/06/2026, sugerindo um roadmap para um **módulo de exchange**:

| Issue | Título | Descrição |
|-------|--------|-----------|
| [#3024](https://github.com/sipeed/picoclaw/issues/3024) | EX-001: Exchange interface + tipos Go | Interface `Exchange` em `pkg/exchange/types.go`, TDD obrigatório |
| [#3025](https://github.com/sipeed/picoclaw/issues/3025) | EX-002: Binance WebSocket (TDD) | Conector WS com benchmark < 50μs/update |
| [#3026](https://github.com/sipeed/picoclaw/issues/3026) | EX-003: Binance REST (TDD) | Cliente REST para Binance |
| [#3027](https://github.com/sipeed/picoclaw/issues/3027) | EX-004: Order book ring buffer | Ring buffer lock-free, 1M updates/s, zero alloc |
| [#3028](https://github.com/sipeed/picoclaw/issues/3028) | EX-005: Exchange latency benchmarks | Documentação de resultados do conector Binance |

**Interpretação**: PicoClaw está expandindo para uso em **trading/finanças**, integrando-se com exchanges. As issues referenciam SDD-001 e SDD-002 (System Design Documents internos).

### Outros Pedidos de Feature

| Issue | Feature | Solicitante | Prioridade |
|-------|---------|-------------|------------|
| [#2625](https://github.com/sipeed/picoclaw/issues/2625) | WhatsApp em builds pré-compiladas | duckida | Baixa (mas demanda real) |
| [#2929](https://github.com/sipeed/picoclaw/issues/2929) | Agent-to-agent peer communication | afjcjsbx | Média |

### Sinais de Arquitetura

- **Multi-Agent**: PR #423 (Blackboard, agent handoff) + Issue #2929 indicam foco em sistemas multi-agente
- **ClawHub**: Issue #3030 menciona "tipos de mensagem do ClawHub" — possível hub central de mensagens
- **Risk Management**: Issue #3029 com interface `RiskManager` — extensão para trading

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Dor | Contexto | Evidência |
|-----|----------|-----------|
| **Builds sem WhatsApp** | Raspberry Pi Zero 2 arm64 | Issue #2625 |
| **QQ não funciona no Windows** | Build release Windows | Issue #3015 |
| **Falta comunicação peer-to-peer** | Workflows multi-agente | Issue #2929 |
| **Documentação desatualizada** | skill-creator com scripts faltantes | PR #3013 |

### Cenários de Uso Observados

1. **Desktop/Light**: Raspberry Pi Zero 2 (arm64) — demanda por binários otimizados
2. **Windows Enterprise**: QQ channel em ambientes corporativos Windows
3. **Multi-Agent Trading**: Agentes cooperativos para análise de mercado (nova frente)

### Indicadores de Satisfação

- **Atividade de PRs**: 15 PRs merged em 24h demonstra comunidade ativa
- **Novos contribuidores**: maxmilian, chengzhichao-xydt, bogdanovich contribuindo ativamente
- **Expansão de canais**: Google Chat adicionado recentemente

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Stale

| Issue | Idade | Estado | Prioridade |
|-------|-------|--------|------------|
| [#2935](https://github.com/sipeed/picoclaw/pull/2935) | ~14 dias | Stale (PR Open) | Baixa — localização |
| [#2838](https://github.com/sipeed/picoclaw/pull/2838) | ~28 dias | Merged | — |
| [#2662](https://github.com/sipeed/picoclaw/pull/2662) | ~43 dias | Stale (PR Closed) | Baixa — docs |

### Issues Antigas Fechadas Recentemente

| Issue | Criada | Closed | Ciclos de Vida |
|-------|--------|--------|----------------|
| [#2625](https://github.com/sipeed/picoclaw/issues/2625) | 2026-04-22 (~45 dias) | 2026-06-06 | 45 dias de vida |
| [#2929](https://github.com/sipeed/picoclaw/issues/2929) | 2026-05-22 (~15 dias) | 2026-06-06 | 15 dias de vida |

### Recomendações

1. **Bug #3015 (QQ Windows)**: Necessita triagem e assignment — impacto em usuários Windows
2. **PR #2935 (zh-TW)**: Avaliar merge ou fechar (stale há 14 dias)
3. **Iniciativa EXM**: As 7 issues de exchange não têm assignee — considerar design review

---

## Métricas Consolidada do Dia

```
┌─────────────────────────────────────────────────────────┐
│  ATIVIDADE (24h)                                        │
├─────────────────────────────────────────────────────────┤
│  Issues: 12 atualizadas (10 open, 2 closed)              │
│  PRs:    18 atualizados (3 open, 15 merged/closed)      │
│  Releases: 1 nightly build                              │
│                                                         │
│  SAÚDE                                                  │
├─────────────────────────────────────────────────────────┤
│  Bug fixes merged:     8 PRs                            │
│  Features merged:      4 PRs                           │
│  Docs/Localization:    2 PRs                           │
│  Bugs reportados:      1 (QQ Windows - alta severidade) │
│                                                         │
│  TEMAS ESTRATÉGICOS                                     │
├─────────────────────────────────────────────────────────┤
│  • Multi-agent architecture (blackboard, peer comm)     │
│  • Exchange module (Binance connectors, trading)        │
│  • Estabilidade (goroutine leaks, nil guards)           │
└─────────────────────────────────────────────────────────┘
```

---

*Relatório gerado em 2026-06-07. Dados: GitHub sipeed/picoclaw.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório de Projeto: IronClaw
## Período: 2026-06-07

---

## 1. Panorama do Dia

O projeto IronClaw apresenta **alta atividade** no dia 06/06/2026, com 40 PRs atualizados nas últimas 24h (21 abertos, 19 merged/fechados) e 5 issues (3 abertas, 2 fechadas). Não houve novas releases oficiais, embora o PR #3708 documente a transição de 0.24.0 para 0.29.1 com mudanças significativas em `ironclaw_common` e `ironclaw_skills`. O foco atual está na arquitetura "Reborn", com múltiplos PRs paralelos para WebUI, Slack routing, OpenAI compatibility e extension lifecycle. A estabilidade apresenta sinais de alerta com uma falha de E2E noturno e bugs críticos em WeCom integration e concurrent sandbox.

---

## 2. Lançamentos

**Nenhum novo release detectado nas últimas 24h.**

O PR #3708 documenta a release mais recente:

| Crate | Versão Anterior | Nova Versão | Tipo de Mudança |
|-------|----------------|-------------|-----------------|
| `ironclaw_common` | 0.4.2 | 0.5.0 | ⚠️ **Breaking** |
| `ironclaw_skills` | 0.3.0 | 0.4.0 | ⚠️ **Breaking** |
| `ironclaw_safety` | 0.2.2 | 0.2.3 | ✓ Compatível |
| `ironclaw` | 0.24.0 | 0.29.1 | ⚠️ **Breaking** |

### Breaking Changes em `ironclaw_common`:
```
--- failure en... (detalhes no PR)
```
⚠️ **Nota de migração**: O upgrade para 0.29.1 requer atenção especial aos módulos `common` e `skills` devido às APIs quebradas. Recomenda-se revisão completa de integrações dependentes antes do deploy.

🔗 [Ver PR #3708](https://github.com/nearai/ironclaw/pull/3708)

---

## 3. Progresso do Projeto

### PRs Merged/Closed Hoje (6):

| # | Título | Escopo | Impacto |
|---|--------|--------|---------|
| #4520 | CI: keep Reborn-only PRs out of legacy tests | CI | Otimização de pipeline, redução de tempo de CI para PRs Reborn-only |
| #4486 | Subagent + compaction unified design | Docs | Documentação de arquitetura para background subagents e context compaction |
| #4485 | Subagent + compaction unified design | Multi-escopo | Implementação correlata ao #4486 |
| #4508 | Gate repeated-call stops behind warning | Codex | Transforma stops inmediatos em warning gate de 2 estágios |
| #4509 | Add Slack channel subject routing | Slack | Roteamento de canal com preservação de DMs e fallback de sujeito |
| #3934 | Activate hook framework in production | Hooks | Framework de hooks finalmente em produção (composição com HookDispatcher) |

### Destaque: Arquitetura Reborn

O PR #3934 representa um **marco significativo**: todo o framework de hooks (foundation, WASM execution, event-triggered hooks, predicate counters, durable backends) foi finalmente ativado em produção. Este é o resultado de múltiplas lanes de desenvolvimento convergindo.

🔗 [Ver PR #3934](https://github.com/nearai/ironclaw/issues/3934)

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Atenção

| # | Título | Status | Comentários | Reações |
|---|--------|--------|-------------|---------|
| #4502 | WeCom group chat approval reply does not work | OPEN | 1 | 0 |
| #4108 | Nightly E2E failed | OPEN | 0 | 0 |
| #4512 | Concurrent sandbox job_semaphore never acquired | OPEN | 0 | 0 |

### Análise das Demandas:

**🔴 Crítico - WeCom Integration (#4502)**
- **Problema**: Bot não aceita aprovação via `y`, `yes`, ou `always` em group chats do WeCom
- **Impacto**: Usuários ficam presos em loops de aprovação infinitos
- **Ambiente**: IronClaw v0.29.1, staging
- **Ação requerida**: Prioridade alta para fix

**🟡 Infraestrutura - E2E Nightly (#4108)**
- Workflow falhou na run `27052471094`
- Commit: `26e41dc767bab9bfefe9e80bc092d1d208676354`
- Falha em job E2E (extensions)
- Afeta validação contínua do release

**🔴 Código - Semaphore Bug (#4512)**
- `job_semaphore` definido em `src/tenant.rs:984-999` mas nunca adquire
- Potencial race condition ou código morto
- Requer auditoria de concurrency logic

🔗 [Ver Issue #4502](https://github.com/nearai/ironclaw/issues/4502) | [Ver Issue #4108](https://github.com/nearai/ironclaw/issues/4108) | [Ver Issue #4512](https://github.com/nearai/ironclaw/issues/4512)

---

## 5. Bugs e Estabilidade

### Bugs Reportados (3 issues abertas)

| Severidade | # | Descrição | Impacto |
|------------|---|-----------|---------|
| 🔴 **Alta** | #4502 | WeCom approval reply não funciona | Bloqueia workflow de aprovação em produção |
| 🔴 **Alta** | #4512 | job_semaphore nunca acquired | Potencial resource leak ou deadlock |
| 🟡 **Média** | #4108 | E2E nightly falha | Impede validação automática |

### Status de CI/CD

```
Workflow: Nightly E2E
Status: ❌ FALHOU
Run: https://github.com/nearai/ironclaw/actions/runs/27052471094
Commit: 26e41dc767bab9bfefe9e80bc092d1d208676354
```

**Recomendação**: Investigar failures antes do próximo release. Falhas persistentes em E2E podem indicar regressões não capturadas.

---

## 6. Pedidos de Features e Sinais de Roadmap

### PRs em Desenvolvimento (Features)

| # | Título | Escopo | Complexidade | Prioridade |
|---|--------|--------|--------------|------------|
| #4522 | LLM tool_args.rs shared parsing primitives (RC3/M9) | LLM | S | Fase A - scaffolding |
| #4511 | Outbound preference facade contracts | Product Workflow | XL | Core feature |
| #4519 | WebUI session capabilities endpoint | WebUI | L | UX improvement |
| #4186 | Local-dev approval gates | Codex | XL | Developer experience |
| #4510 | Slack channel route admin wiring | Slack | XL | Admin feature |
| #4516 | WebChat v2 thread deletion | WebUI | L | CRUD operation |
| #4489 | OpenAI-compatible product refs | API | XL | Compatibility |
| #4495 | Route chat completions through ProductWorkflow | API | XL | Architecture |
| #4517 | Seed Reborn config.toml on first start | Config | L | DX improvement |
| #4521 | Add JSON cleaner for formatting | Utils | S | New contributor |

### Sinais de Roadmap Observados:

1. **OpenAI Compatibility**: Trabalhos ativos em refs e routing (#4489, #4495) indicam prioridade em API compatibility
2. **Reborn Architecture**: Múltiplos PRs documentam a nova arquitetura (subagent, compaction, extension lifecycle)
3. **Slack Integration**: Expansão de routing e admin capabilities
4. **MCP Capability**: Lane 5 do Notion MCP (#3805 closed) - primeiro MCP tool package

🔗 [Ver PR #4522](https://github.com/nearai/ironclaw/pull/4522) | [Ver PR #4186](https://github.com/nearai/ironclaw/pull/4186)

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Dor | Frequência | Contexto |
|-----|------------|----------|
| Loop infinito de aprovação | 1 report | WeCom group chat, v0.29.1 |
| Falha em testes E2E noturnos | Sistema | CI/CD quebrado |

### Feedback Implícito via Issues

**WeCom User Pain (#4502)**:
> "In WeCom group chat, when the bot asks for tool approval, replying with `y`, `yes`, or `always` does not approve the request. The bot keeps asking for approval again."

Este é um **bloqueador de usabilidade** crítico que afeta fluxos de trabalho em produção com integrações WeCom.

### Satisfação Indicada

O alto volume de PRs (40) e a convergência da arquitetura Reborn sugerem:
- ✅ Equipe ativa e produtiva
- ✅ Progresso tangível em múltiplas frentes
- ⚠️ Necessidade de estabilização (E2E failures, bugs críticos)

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Abandonadas

| # | Título | Criado | Atualizado | Status | Prioridade |
|---|--------|--------|------------|--------|------------|
| #3805 | [Reborn] Lane 5: implement Notion MCP capability path | 2026-05-19 | 2026-06-06 | **CLOSED** | ✅ Resolvido |
| #4108 | Nightly E2E failed | 2026-05-27 | 2026-06-06 | OPEN | 🔴 Alta |
| #4502 | WeCom group chat approval reply bug | 2026-06-05 | 2026-06-05 | OPEN | 🔴 Alta |
| #4512 | Concurrent sandbox job_semaphore never acquired | 2026-06-06 | 2026-06-06 | OPEN | 🔴 Alta |

### Análise de Aging

```
Issue #4108: 10 dias sem resolução (E2E failure)
Issue #4502: 2 dias, 1 comentário (WeCom bug)
Issue #4512: 1 dia, sem comentários (semaphore bug)
```

### Recomendações

1. **🔴 Prioridade Imediata**: Alocar recursos para os 3 bugs críticos (WeCom, semaphore, E2E)
2. **🟡 Monitorar**: PRs de dependências (#4002) - atualiza 16 packages
3. **✅ Parabenizar**: Lane 5 do Notion MCP foi completada (#3805 closed)

---

## Métricas de Saúde do Projeto

| Métrica | Valor | Status |
|---------|-------|--------|
| PRs nas últimas 24h | 40 | ✅ Alta atividade |
| Issues nas últimas 24h | 5 | 🟡 Moderada |
| Releases nas últimas 24h | 0 | ⚠️ Nenhuma |
| Bugs críticos abertos | 3 | 🔴 Alerta |
| PRs abertos | 21 | 🟡 Normal |
| PRs merged/closed | 19 | ✅ Bom |

---

## Links Rápidos

- **Repo**: https://github.com/nearai/ironclaw
- **Issues**: https://github.com/nearai/ironclaw/issues
- **PRs**: https://github.com/nearai/ironclaw/pulls
- **Actions**: https://github.com/nearai/ironclaw/actions

---

*Relatório gerado automaticamente em 2026-06-07 com base em dados do GitHub.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>


# Relatório de Projeto CoPaw — 2026-06-07

---

## 1. Panorama do Dia

O projeto **CoPaw (QwenPaw)** apresenta alta atividade comunitária em 07/06/2026, com **10 issues e 3 PRs atualizados nas últimas 24 horas**. Não houve lançamento de novas versões, e todas as issues recentes permanecem em análise. Observa-se um **padrão de regressões em funcionalidades de sessão e compressão de contexto** nas versões 1.1.9 e 1.1.10, sugerindo necessidade de atenção à estabilidade antes do próximo release. A equipe parece focada em correções de bugs relacionados a canais (企业微信, etc.) e estabilidade de sessões.

---

## 2. Lançamentos

### 🚫 Nenhuma release nas últimas 24h

O projeto não publicou novas versões desde o último período. A versão mais recente em discussão é **v1.1.10**, que apresenta múltiplos bugs reportados pela comunidade (ver seção 5).

---

## 3. Progresso do Projeto

### PRs Abertos (3)

| # | Título | Descrição | Impacto |
|---|--------|-----------|---------|
| [#4822](https://github.com/agentscope-ai/QwenPaw/pull/4822) | fix(crons): fix share_session cron agent tasks producing empty traces | Adiciona `_is_session_busy()` para detectar tarefas ativas via TaskTracker; fallback automático para sessão isolada | Melhoria na confiabilidade de tarefas cron |
| [#4884](https://github.com/agentscope-ai/QwenPaw/pull/4884) | fix(channel): stop old channel before starting new in replace_channel | Garante que o canal antigo seja parado antes de iniciar o novo em `replace_channel` | Correção de race condition em canais |
| [#4983](https://github.com/agentscope-ai/QwenPaw/pull/4983) | fix(channels): store connectId from AuthBindRsp for connection tracking | Armazena `connectId` da resposta de autenticação para rastreamento de conexão | Melhoria no tracking de conexões |

**Análise:** Todos os PRs abertos são de **manutenção e estabilidade**, nenhum introduzindo funcionalidades novas. O PR #4822 parece resolver um problema significativo de traces vazios em tarefas cron.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| # | Título | Comentários | Tipo |
|---|--------|-------------|------|
| [#4661](https://github.com/agentscope-ai/QwenPaw/issues/4661) | v1.1.8post1模型上下文长度配置，记忆压缩未生效 | 6 | Bug (CLOSED) |
| [#4937](https://github.com/agentscope-ai/QwenPaw/issues/4937) | /compact command ignores model's max_input_length | 5 | Bug |
| [#4971](https://github.com/agentscope-ai/QwenPaw/issues/4971) | 目前的会话管理太麻烦了 | 2 | Enhancement |

### Análise das Demandas

**Context Compression (2 issues):** 
- A configuração de `max_input_length` parece não funcionar corretamente nas versões recentes
- Usuários reportam que o sistema usa 128K como fallback mesmo com configurações customizadas
- **Sinal de roadmap:** Necessidade de padronizar a derivação automática de `compact_threshold_ratio`

**Gerenciamento de Sessões (#4971):**
- Usuário solicita barra lateral de sessões para troca rápida sem clicks múltiplos
- Reforça demanda por UX mais fluida na navegação entre conversas

---

## 5. Bugs e Estabilidade

### 🐛 Bugs Críticos (3)

| Severidade | # | Título | Versão Afetada |
|------------|---|--------|----------------|
| **Alta** | [#4989](https://github.com/agentscope-ai/QwenPaw/issues/4989) | 本地部署千问3.6-27B模型对话无响应 | v1.1.9, v1.1.10 |
| **Alta** | [#4988](https://github.com/agentscope-ai/QwenPaw/issues/4988) | Session文件名重复拼接导致Windows MAX_PATH overflow | v1.1.10 |
| **Alta** | [#4987](https://github.com/agentscope-ai/QwenPaw/issues/4987) | Session switch sempre falha em Coding Mode | v1.1.10 |

### 🐛 Bugs Médios (4)

| # | Título | Canal/Componente |
|---|--------|------------------|
| [#4990](https://github.com/agentscope-ai/QwenPaw/issues/4990) | 企业微信返回信息调用工具信息关闭会返回 erro | 企业微信 Channel |
| [#4937](https://github.com/agentscope-ai/QwenPaw/issues/4937) | /compact command ignora max_input_length do modelo | Console/Backend |
| [#4985](https://github.com/agentscope-ai/QwenPaw/issues/4985) | 删除文件的请求命令显示不换行 | Console UI |

### Análise de Regressões

**Padrão preocupante:** 3 bugs críticos envolvem **funcionalidades de sessão** que funcionavam em v1.1.9 e quebraram em v1.1.10. Sugere-se:
1. Revisão dos PRs merged entre v1.1.9 → v1.1.10 relacionados a sessão
2. Priorizar PRs #4822 (cron agent) e #4884 (channel lifecycle) como bloqueantes

---

## 6. Pedidos de Features e Sinais de Roadmap

### ✨ Novas Features (2)

| # | Título | Descrição | Complexidade Estimada |
|---|--------|-----------|------------------------|
| [#4971](https://github.com/agentscope-ai/QwenPaw/issues/4971) | Adicionar barra lateral de sessões | Switch rápido de conversas, evitar clicks múltiplos | Média |
| [#4986](https://github.com/agentscope-ai/QwenPaw/issues/4986) | Feedback em tempo real em operações shell/arquivo | Inspirado em Cursor/Workbuddy - mostrar progresso de comandos longos | Média-Alta |

### Sinais de Roadmap

- **UX de Sessões:** Múltiplas queixas sobre gerenciamento de sessões (UI + funcionalidade)
- **Feedback Visual:** Usuários aguardam indicadores de progresso para operações demoradas
- **Compatibilidade Local:** Suporte a modelos vLLM locais parece ter regressões

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Dor | Frequência | Impacto |
|-----|------------|---------|
| Configuração de contexto não persiste entre versões | 2 issues | Alto - afeta produtividade |
| Sessões falham em Coding Mode | 1 issue | Médio - bloqueia fluxo de trabalho |
| Erro vago em 企业微信 ("无法回答你的问题") | 1 issue | Médio - UX ruim |
| Overflow de路径 no Windows | 1 issue | Alto - bloqueia Windows |
| Shell sem feedback visual | 1 issue | Médio - incerteza do usuário |

### Cenários de Uso Reportados

1. **Deploy local com vLLM:** Usuários experientes fazendo deploy on-premise com 千问3.6-27B
2. **Ambiente Windows:** Ainda relevante para parte da base de usuários
3. **Coding Mode:** Padrão de uso específico para desenvolvimento
4. **企业微信 Integration:** Usuários corporativos no ecossistema chinês

### Satisfação Geral

**Mista a negativa** para usuários nas versões 1.1.9/1.1.10, especialmente quem:
- Usa modelos locais
- Trabalha no Coding Mode
- Está no Windows

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta > 24h

| # | Título | Dias Aberto | Prioridade |
|---|--------|-------------|------------|
| [#4937](https://github.com/agentscope-ai/QwenPaw/issues/4937) | /compact command ignores model's max_input_length | ~4 dias | Alta |
| [#4971](https://github.com/agentscope-ai/QwenPaw/issues/4971) | 目前的会话管理太麻烦了 | ~2 dias | Média |
| [#4989](https://github.com/agentscope-ai/QwenPaw/issues/4989) | 本地部署千问3.6-27B无响应 | 1 dia | Crítica |

### Recomendações

1. **#4989 e #4988** devem ser priorizados — afetam usuários em produção
2. **#4937** tem 5 comentários e indica problema sistemático com configuração de contexto
3. **Issue #4661** foi fechada mas a issue #4937 relacionada permanece aberta — verificar se foi realmente resolvida

---

## Métricas Resumidas (24h)

| Métrica | Valor |
|---------|-------|
| Issues abertas/ativas | 8 |
| Issues fechadas | 2 |
| PRs abertos | 3 |
| PRs merged | 0 |
| Novas releases | 0 |
| Bugs críticos novos | 3 |
| Features solicitadas | 2 |

---

*Relatório gerado automaticamente com base nos dados do GitHub de [CoPaw/QwenPaw](https://github.com/agentscope-ai/QwenPaw) em 2026-06-07.*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>


# Relatório do Projeto ZeroClaw — 2026-06-07

---

## 1. Panorama do dia

O projeto ZeroClaw apresenta **alta atividade** em 07 de junho de 2026, com 32 issues e 50 PRs atualizados nas últimas 24 horas — um volume significativo que reflete desenvolvimento intenso. Não houve releases novas, mas o progresso em branches está consolidado. A comunidade demonstra foco em **segurança, autenticação e extensibilidade** (WASM plugins, OAuth providers), enquanto bugs críticos de estabilidade (crashes, teleometria vazada, subagents) estão sendo tratados ativamente. O release **v0.8.0** está em fase final de bloqueio, com trackers dedicados para as versões v0.8.1, v0.8.2 (WASM) e v0.8.3 (MCP dashboard).

---

## 2. Lançamentos

**Nenhum release detectado nas últimas 24h.**

- O último milestone ativo é **v0.8.0**, atualmente em status de "Stable-tier blockers" ([#7112](https://github.com/zeroclaw-labs/zeroclaw/issues/7112)).
- Releases futuros mapeados:
  - **v0.8.1**: Foco em integration/channel/provider/tool PRs ([#6970](https://github.com/zeroclaw-labs/zeroclaw/issues/6970))
  - **v0.8.2**: Plugin program WASM — FND-001, WIT interfaces, host functions ([#7314](https://github.com/zeroclaw-labs/zeroclaw/issues/7314))
  - **v0.8.3**: MCP dashboard e superfícies web/plugin-management ([#7320](https://github.com/zeroclaw-labs/zeroclaw/issues/7320))

> **Nota:** Ausência de release não indica estagnação — o time está em ciclo de consolidação pré-release.

---

## 3. Progresso do Projeto

### PRs merged/fechadas hoje (7 total)

| PR | Tipo | Impacto |
|----|------|---------|
| [#7239](https://github.com/zeroclaw-labs/zeroclaw/pull/7239) | `fix(runtime)` | **Crítico**: Impede entrega de turnos intermediários de tool-call como resposta final ao usuário. Elimina "scratchpad/tool-transcript" vazado no Telegram. |
| [#7193](https://github.com/zeroclaw-labs/zeroclaw/pull/7193) | `fix(config)` | Corrige `WebhookConfig.port` sem valor default, padronizando com outros canais (8090). |
| [#7220](https://github.com/zeroclaw-labs/zeroclaw/pull/7220) | `fix(gateway)` | Corrige `mark_dirty("gateway.paired-tokens")` kebab-case vs. snake_case, resolvendo false-positive no drift banner. |

### Avanços estratégicos em aberto

| PR | Tipo | Destaque |
|----|------|----------|
| [#7288](https://github.com/zeroclaw-labs/zeroclaw/pull/7288) | `feat(plugins)` | **Suporte a binários base64** para WASM HTTP host fn — habilita upload de arquivos em plugins. |
| [#7277](https://github.com/zeroclaw-labs/zeroclaw/pull/7277) | `feat(plugins)` | **Plugin Shazam** como referência piloto WASM (pós `image-gen-fal`). |
| [#7275](https://github.com/zeroclaw-labs/zeroclaw/pull/7275) | `feat(channel:twitch)` | **Canal Twitch** via adapter IRC sobre TLS. |
| [#7298](https://github.com/zeroclaw-labs/zeroclaw/pull/7298) | `feat(zerocode)` | **UX improvements** — split-pane parity com zerocode no Config tab. |
| [#7284](https://github.com/zeroclaw-labs/zeroclaw/pull/7284) | `fix(security)` | **Workspace por agente** em `for_agent()` + suporte shell Android. |

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários + reações)

#### 🔥 #5601 — OAuth Native para 4 Providers (7 comentários, 1 upvote)
**Link**: [Issue #5601](https://github.com/zeroclaw-labs/zeroclaw/issues/5601)

> Adicionar autenticação via OAuth/login nativo para Ollama Cloud, Zhipu (z.ai), Kimi (Moonshot) e MiniMax.

**Análise**: A comunidade busca eliminar gerenciamento manual de API keys para provedores que oferecem planos free/paid. Isso reduz fricção de onboarding e alinha ZeroClaw com o padrão moderno de "login via provider". Status: `blocked` + `accepted` — aguardando desbloqueio.

---

#### 🔥 #6715 — Limpeza de Branches (4 comentários)
**Link**: [Issue #6715](https://github.com/zeroclaw-labs/zeroclaw/issues/6715)

> Deletar branches irrelevantes do repositório principal — há mais de 200 branches, a maioria já mergeada.

**Análise**: Dívida técnica de manutenção. A organização do repo impacta clareza para contribuidores. Status: `blocked` + `accepted`.

---

#### 🔥 #7141 — OIDC Authentication Provider (4 comentários)
**Link**: [Issue #7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141)

> Suporte a provider de autenticação OIDC para o ZeroClaw v0.9.0.

**Análise**: Funcionalidade de segurança de alta prioridade (`risk: high`). Alinhada com tendência enterprise de federar autenticação via OIDC. Rastreado como umbrella issue com PRs escopados.

---

#### 💬 #6914 + #6915 — Enforcement de allowed_tools e Skill-Scoped Tools (3 comentários cada)
**Links**: [#6914](https://github.com/zeroclaw-labs/zeroclaw/issues/6914), [#6915](https://github.com/zeroclaw-labs/zeroclaw/issues/6915)

> #6914: `allowed_tools`/`denied_tools` não é aplicado no loop principal do agente.
> #6915: Ferramentas declaradas em skills (`composio`/`builtin`) devem ser temporariamente ativadas durante execução.

**Análise**:这两个issues são complementares — segurança de tools no runtime e scoped activation para skills. Juntos, representam um redesign do modelo de permissões. Ambos `priority:p1`/`high risk`.

---

## 5. Bugs e Estabilidade

### Por Severidade (S1-S3)

#### **S1 — Workflow Bloqueado (Crítico)**

| Issue | Título | Status |
|-------|--------|--------|
| [#7312](https://github.com/zeroclaw-labs/zeroclaw/issues/7312) | Bedrock Qwen integração falha na segunda pergunta | OPEN |
| [#7263](https://github.com/zeroclaw-labs/zeroclaw/issues/7263) | Subagents não herdam "cwd" em sessões ACP | OPEN |
| [#7271](https://github.com/zeroclaw-labs/zeroclaw/issues/7271) | Config writer deixa `schema_version` stale → crash com "missing field provider" | OPEN |
| [#7227](https://github.com/zeroclaw-labs/zeroclaw/issues/7227) | Quickstart hardcodeia alias `default` — colide com providers existentes | CLOSED (fix merged) |

---

#### **S2 — Comportamento Degradado**

| Issue | Título | Link |
|-------|--------|------|
| #7156 | Banner de reload mostra `gateway.paired_tokens` drift persistente | [#7156](https://github.com/zeroclaw-labs/zeroclaw/issues/7156) |
| #7197 | Toolbar web carrega lentamente + spawna cmd windows no Windows | [#7197](https://github.com/zeroclaw-labs/zeroclaw/issues/7197) |
| #7151 | Cards de tool "unknown" permanentes no WebSocket de chat | [#7151](https://github.com/zeroclaw-labs/zeroclaw/issues/7151) |
| #7304 | Quickstart oculta erros de validação e overflow em input secret | [#7304](https://github.com/zeroclaw-labs/zeroclaw/issues/7304) |

---

#### **S3 — Minor Issues**

| Issue | Título | Link |
|-------|--------|------|
| #7253 | Web console: "Couldn't load sections" JSON parse error | [#7253](https://github.com/zeroclaw-labs/zeroclaw/issues/7253) |
| #7110 | PO catalogs contêm traduções geradas por assistente | [#7110](https://github.com/zeroclaw-labs/zeroclaw/issues/7110) |
| #7269 | Docs build emite warning noise (rustdoc + mdBook) | [#7269](https://github.com/zeroclaw-labs/zeroclaw/issues/7269) |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features em destaque

| Feature | Issue | Prioridade | Observação |
|---------|-------|------------|------------|
| OAuth nativo para Ollama Cloud, Zhipu, Kimi, MiniMax | [#5601](https://github.com/zeroclaw-labs/zeroclaw/issues/5601) | p2 | Reduz fricção de API key management |
| OIDC Authentication Provider | [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) | p1 | Alinhado com ZeroClaw v0.9.0 |
| Per-skill security permissions | [#5775](https://github.com/zeroclaw-labs/zeroclaw/issues/5775) | p2 | Escopo granular de `allow_scripts`/`allowed_commands` |
| Pre-hook skip gates para cron jobs | [#5607](https://github.com/zeroclaw-labs/zeroclaw/issues/5607) | p2 | Gating antes de execuções agendadas |
| GitHub Actions CI/CD para imagem Debian container | [#5908](https://github.com/zeroclaw-labs/zeroclaw/issues/5908) | p2 | Automação de build/release container |
| Canal Twitch via IRC adapter | [#7275](https://github.com/zeroclaw-labs/zeroclaw/pull/7275) (PR) | p2 | Expansão de canais |
| Plugin Shazam WASM piloto | [#7277](https://github.com/zeroclaw-labs/zeroclaw/pull/7277) (PR) | - | Referência para ecossistema WASM |
| ESP32 sim + web frontend | [#7048](https://github.com/zeroclaw-labs/zeroclaw/pull/7048) (PR) | - | Hardware/demo bundling |

### Sinais de roadmap implícitos

1. **v0.8.x (curto prazo)**: Foco em estabilidade, config correctness, release promotion.
2. **v0.9.0**: OIDC auth provider — indica direção enterprise/auth federation.
3. **WASM plugin ecosystem**: Multiple PRs (#7288, #7277) e tracker #7314 sinalizam investimento estratégico em extensibilidade via plugins.

---

## 7. Resumo de Feedback dos Usuários

### Dores reais identificadas

| Dor | Evidência | Severidade |
|-----|-----------|------------|
| **Quebra de workflow na segunda chamada** (Bedrock Qwen) | Issue #7312 — "You invoked an unsupported model" após primeira query | S1 |
| **Configuração de providers conflita com alias default** | Issue #7227 — Quickstart hardcodeia `default`, colide com providers existentes | S1 |
| **UI web lenta + cmd windows no Windows** | Issue #7197 — toolbar carrega lentamente e spawna consoles | S2 |
| **Telemetry vazada como "unknown" tool cards** | Issue #7151 — broadcast channel compartilhado causa leak | S2 |
| **Fricção no Nix flake** | Issue #6906 — outputs não expõem package/zeroclaw adequadamente | p2 |

### Cenários de uso reportados

- **Subagent-driven development**: Usuários tentam usar ZeroClaw com padrão de subagentes, mas encontram limitação de `cwd` ([#7263](https://github.com/zeroclaw-labs/zeroclaw/issues/7263)).
- **Onboarding via Quickstart**: Wizard expõe UX defects em campos de provider — erros ocultos, overflow em secrets ([#7304](https://github.com/zeroclaw-labs/zeroclaw/issues/7304)).
- **Enterprise auth**: Demanda por OIDC para integração com IdPs corporativos ([#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141)).

### Tendência de satisfação

O volume de PRs de bug fix e a atividade em issues sugerem **comunidade ativa reportando problemas detalhadamente**. A presença de múltiplos trackers de milestone indica maturidade no processo de release. No entanto, issues S1 abertas (especialmente Bedrock Qwen e subagent `cwd`) indicam pontos de atrito para workflows específicos.

---

## 8. Backlog que Merece Atenção

### Issues sem resposta ou com estagnação relativa

| Issue | Título | Idade | Status | Ação Recomendada |
|-------|--------|-------|--------|------------------|
| [#5601](https://github.com/zeroclaw-labs/zeroclaw/issues/5601) | OAuth para 4 providers | ~2 meses | `blocked` | Desbloquear dependências ou repriorizar |
| [#5908](https://github.com/zeroclaw-labs/zeroclaw/issues/5908) | CI/CD container Debian | ~1.5 meses | `blocked` | Avaliar se ainda é prioridade para v0.8.x |
| [#6906](https://github.com/zeroclaw-labs/zeroclaw/issues/6906) | Improve Nix flake | ~2 semanas | `blocked` | Contribuidor disponível, falta review |
| [#6715](https://github.com/zeroclaw-labs/zeroclaw/issues/6715) | Delete branches | ~3 semanas | `blocked` | housekeeping simples que reduz confusão |

### PRs aguardando review

| PR | Tipo | Idade | Bloqueio |
|----|------|-------|----------|
| [#7275](https://github.com/zeroclaw-labs/zeroclaw/pull/7275) | feat(channel:twitch) | ~2 dias | Review pendente |
| [#7298](https://github.com/zeroclaw-labs/zeroclaw/pull/7298) | feat(zerocode) UX | ~1 dia | Review pendente |
| [#7284](https://github.com/zeroclaw-labs/zeroclaw/pull/7284) | fix(security) workspace | ~1 dia | Review pendente |

---

## Indicadores de Saúde do Projeto

| Métrica | Valor | Avaliação |
|---------|-------|-----------|
| Issues ativas (24h) | 32 | ✅ Alta |
| PRs abertos (24h) | 43 | ✅ Forte pipeline |
| Releases (24h) | 0 | ⚠️ Em consolidação |
| Issues S1 abertas | 3 | 🔴 Atenção imediata |
| Issues blocked/accepted | 9 | 🟡 Pipeline bem categorizado |
| Trackers de milestone | 4 (v0.8.0–v0.8.3) | ✅ Planejamento visível |

**Veredicto geral**: ZeroClaw está em **fase de amadurecimento pré-release** com alto volume de contribuições, foco em segurança e extensibilidade, e bugs críticos sendo tratados ativamente. A ausência de release é saudável — indica disciplina de consolidação. Priorizar resolução dos 3 issues S1 e desbloqueio de features blocked.

---

*Relatório gerado em 2026-06-07. Dados extraídos de github.com/zeroclaw-labs/zeroclaw.*

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*