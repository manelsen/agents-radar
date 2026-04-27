# Resumo diário do ecossistema de agentes de IA 2026-04-28

> Issues: 0 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-04-27 20:57 UTC

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

**Data de Referência:** 2026-04-28

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source demonstra **saúde metabólica robusta** nesta data, com cinco dos sete projetos em estado de alta atividade. NanoBot, PicoClaw, Hermes Agent, CoPaw e ZeroClaw lideram em volume de contribuições, enquanto IronClaw navega uma transição arquitetural complexa (v1→v2) com canaries de produção falhando. Os projetos convergem em três necessidades técnicas prioritárias: **resiliência de providers com failover automático**, **gestão de contexto em sessões longas** e **expansão de canais de comunicação**. A ausência de releases formais em seis dos sete projetos indica um período de intenso desenvolvimento de features, com estabilização aguardando resolução de bugs críticos — especialmente timeouts de inference local, vazamento de credenciais em providers OpenAI-compat, e crashes em dependências nativas (chromadb).

---

## 2. Comparação de Atividade

| Projeto | Issues (Abertas/Fechadas 24h) | PRs (Abertos/Merged 24h) | Releases | Avaliação de Saúde |
|---------|:-----------------------------:|:------------------------:|:--------:|:------------------:|
| **NullClaw** | 0 / 0 | 0 / 0 | 0 | 🔴 Inativo |
| **NanoBot** | 5 / 12 | 16 / 21 | 0 | 🟢 Saudável — alta vazão de merge |
| **Hermes Agent** | 44 / 6 | 50 / 3 | 0 | 🟡 Alerta — backlog crescente, 3 P1 abertos |
| **PicoClaw** | 31 / 69 | 63 / 57 | 1 nightly | 🟢 Muito ativo — melhor taxa de resolução |
| **IronClaw** | 9 / 1 | 25 / 5 | 0 | 🟡 Transição — 3 canaries falhando |
| **CoPaw** | 25 / 25 | 43 / 25 | 0 (bump pendente) | 🟢 Equilibrado — contributors ativos |
| **ZeroClaw** | 0 / 0 | 37 / 13 | 0 | 🟡 Ativo em PRs, sem issues |

**Observações:**
- PicoClaw apresenta a **melhor taxa de resolução** (69 issues fechadas vs. 31 abertas) e o único release formal (nightly v0.2.7)
- Hermes Agent possui o **maior backlog** (44 issues abertas, apenas 6 fechadas) com 3 bugs P1 críticos
- ZeroClaw demonstra **atividade exclusivamente em PRs**, sugerindo foco em contribuições externas sem triagem de issues

---

## 3. Posicionamento do Projeto Principal

### NanoBot (Referência Implicitamente Principal)

**Vantagens Técnicas:**

| Aspecto | NanoBot | Média do Ecossistema |
|---------|---------|---------------------|
| Vazão de PRs merged (24h) | 21 | 12 |
| Taxa de resolução de bugs | ~50% | 30% |
| Providers suportados | OpenAI-compat + Codex + DeepSeek | 5-10 providers |
| Canais implementados | Discord, SimpleX (PR), Telegram | 3-5 canais |

**Diferenciais Identificados:**
- Correção rápida de regressões (Codex streaming em <7 dias)
- Features de produção: timeout bounds explícitos, session replay invariants
- Parceria externa ativa (Hugging Face, SimpleX) indicando atratividade do framework

**Tamanho da Comunidade:**
- 37 PRs e 17 issues atualizados em 24h indicam base de contribuidores ativa
- 9 👍 em proposal arquitetural (#1181) revela engajamento em decisões técnicas

---

## 4. Focos Técnicos Compartilhados

### Necessidades que Surgem em Múltiplos Projetos

| Necessidade | Projetos Afetados | Severidade | Evidência |
|-------------|-------------------|------------|-----------|
| **Failover automático de providers** | NanoBot, Hermes Agent, PicoClaw | 🔴 Alta | #3376 (NanoBot), #629 (PicoClaw), custom endpoints instáveis (Hermes) |
| **Timeout bounds para inference local** | NanoBot, Hermes Agent | 🟠 Alta | #3478 (NanoBot), vLLM/TGI hangs em ambos |
| **Gestão de contexto em sessões longas** | Hermes Agent, CoPaw, PicoClaw | 🟠 Alta | Compressão com perda (#9096 Hermes), chromadb crash (#3854 CoPaw) |
| **Expansão de canais** | Todos (exceto NullClaw) | 🟡 Média | SimpleX (NanoBot), WeChat personal (ZeroClaw), WhatsApp proxy (PicoClaw) |
| **Observabilidade enterprise** | PicoClaw, Hermes Agent | 🟡 Média | LangSmith (PicoClaw #2173), OTel GenAI (PicoClaw #1731) |
| **Segurança e auth** | IronClaw, PicoClaw, ZeroClaw | 🟡 Média | Security shield (PicoClaw #2327), Rust dependency audit (ZeroClaw) |

**Padrão de Convergência:** A necessidade de **resiliência multi-provider** aparece como demanda #1 em pelo menos três projetos, indicando maturidade do ecossistema em direção a deployments de produção.

---

## 5. Análise de Diferenciação

| Projeto | Foco Principal | Público-Alvo | Arquitetura Distintiva |
|---------|---------------|--------------|------------------------|
| **NanoBot** | Estabilidade de providers + UX de streaming | Desenvolvedores com inference local (vLLM, LM Studio, TGI) | ReAct single-loop (dual-layer em discussão) |
| **Hermes Agent** | Multi-plataforma (Windows/Linux/Mac) + ProviderProfile ABC | Usuários enterprise cross-platform | 30+ ProviderProfiles centralizados, ACP commands |
| **PicoClaw** | Desacoplamento canal-agente + memória biologicamente inspirada | Operadores multi-agente, enterprise orchestration | Seahorse memory system, capability discovery |
| **IronClaw** | Transição v1→v2, arquitetura Reborn modular | Usuários avançados com custom actions | Rust + crates modulares (auth, filesystem, events) |
| **CoPaw** | Multi-canal chinês (WeChat, QQ, Feishu, DingTalk) | Mercado asiático, devs Qwen/Alibaba | ACP orchestration, fallback agent profiles |
| **ZeroClaw** | WebUI + Rust backend, segurança | Produtividade individual, self-hosted | Rust axum, SQLite FTS, security hardening |

**Diferenciação Técnica por Severidade de Bugs:**

| Categoria | Projetos | Implicação |
|-----------|----------|------------|
| Bugs silenciosos críticos | PicoClaw (#2578 auth header drop), Hermes Agent (#9096 context loss) | Maturidade de observabilidade insuficiente |
| Bugs de integração de plataforma | Hermes Agent (Feishu, WhatsApp, Telegram), CoPaw (WeChat truncation) | Sobrecarga de adapters fragmentados |
| Bugs de inference local | NanoBot, Hermes Agent | Drivers de providers precisam amadurecer |

---

## 6. Tração e Maturidade da Comunidade

### Velocidade de Iteração

| Indicador | Líder | Seguidores |
|-----------|-------|------------|
| **Mais PRs merged em 24h** | PicoClaw (57) | NanoBot (21), ZeroClaw (13) |
| **Melhor taxa close/aberto** | PicoClaw (69/31 = 2.2x) | CoPaw (1:1), ZeroClaw (apenas PRs) |
| **Menos bugs P1 pendentes** | PicoClaw (2-3 críticos, fix em curso) | Hermes Agent (3 P1 + 12 P2) |
| **Demanda por features** | PicoClaw (TTS/ASR com 23 comentários) | NanoBot (failover com 11 comentários) |

### Projetos em Fase de Consolidação vs. Iteração Rápida

| Modo | Projetos | Características |
|------|----------|-----------------|
| **Consolidação de qualidade** | Hermes Agent, IronClaw | Backlog alto, poucos merges, foco em estabilidade |
| **Iteração rápida** | PicoClaw, NanoBot, CoPaw | Alta vazão, releases frequentes, features em produção |
| **Estagnação** | NullClaw | Sem atividade — referência inativa |

**Sinal de Maturidade:** PicoClaw demonstra características de projeto maduro com sistema de memória biologicamente inspirado (Seahorse), desacoplamento de canais, e noite de segurança consolidada. NanoBot e CoPaw estão em trajetória similar.

---

## 7. Sinais de Tendência

### Tendências de Mercado Extraídas do Feedback

| Tendência | Evidência | Implicação |
|-----------|-----------|------------|
| **Inference local como padrão** | NanoBot timeout fixes, LM Studio Easy Connect (#28 PicoClaw), `extra_body` config (NanoBot) | Demanda por privacidade e custo-benefício impulsiona self-hosted |
| **Multi-provider failover** | #3376 (NanoBot), #629 (PicoClaw), custom endpoints (Hermes) | Produtização exige resiliência — single-provider é risco |
| **Voz (TTS/ASR) como próxima fronteira** | PicoClaw #1648 (23 comentários), CoPaw #3887 (QQ voice mapping) | Interfaces texto saturadas; áudio é diferencial competitivo |
| **Enterprise observabilidade** | LangSmith (PicoClaw), OTel GenAI, capability discovery (PicoClaw #1474) | Demanda por debugging em agentes multi-step em produção |
| **Extensibilidade via plugins/forks** | IronClaw ExternalToolRegistrar (#2871), CoPaw ACP config inheritance | Mercados verticais precisam customização profunda |
| **Marketplace de providers** | HF Inference Provider (NanoBot #3490), OpenRouter catalog (Hermes #16033) | Abstração de provedores como commodity |

### Prioridades de Roadmap Inferidas

```
1. Resiliência (failover, timeout bounds) ──────────► Produção readiness
2. Voice (TTS/ASR) ───────────────────────────────► Além de texto
3. Observabilidade (tracing, custos, tokens) ───────► Debugging enterprise
4. Multi-canal maduro ──────────────────────────────► Cobertura de plataformas
5. Desacoplamento arquitetural ─────────────────────► Manutenibilidade futura
```

---

**Conclusão:** O ecossistema está em **fase de transição de protótipos para produção**. Projetos como PicoClaw e NanoBot demonstram maturidade técnica suficiente para deployments enterprise, enquanto Hermes Agent e IronClaw navegam dividas técnicas que limitam adoção em massa. A convergência em failover de providers, timeout management e voice capabilities indica que o mercado está amadurecendo para expectativas de infraestrutura de produção.

---

*Relatório gerado com base em dados públicos do GitHub — 2026-04-28*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-04-28

## 1. Panorama do Dia

O ecossistema NanoBot apresenta **alta atividade metabólica** nesta data: 37 PRs e 17 issues atualizadas em 24h, com 21 PRs já merged/fechadas. A equipe demonstra foco intenso em **estabilidade de providers** (timeouts, streaming de progresso) e **extensibilidade de canais** (SimpleX, controles por canal). Não há releases formais pendentes, indicando trabalho em branches de feature. A comunidade levantou demandas recorrentes sobre failover de providers, interação durante loops de agentes e gestão de sessões — sinais claros de amadurecimento para cenários de produção.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

O projeto encontra-se em período de intenso desenvolvimento de features, com múltiplos PRs abertos aguardando merge. Não há announcements de versioning no período analisado.

---

## 3. Progresso do Projeto

### PRs Merged/Closed (20 mais relevantes)

| # | Título | Tipo | Destaque |
|---|--------|------|----------|
| [#3480](https://github.com/HKUDS/nanobot/pull/3480) | Stream progress deltas to channels | fix | RestauraUpdates intermediárias `_progress=True` para Codex — **regressão corrigida** |
| [#3479](https://github.com/HKUDS/nanobot/pull/3479) | Stream progress deltas to channels | fix | Duplicate fix para #3426, również closed |
| [#3478](https://github.com/HKUDS/nanobot/pull/3478) | Bound OpenAI-compatible request timeouts | fix | Timeout explícito em `OpenAICompatProvider` — evita hangs de 10 min |
| [#3459](https://github.com/HKUDS/nanobot/pull/3459) | Session replay/file-cap invariants | feat | Hardening de lifecycle de sessões; previne context drift |
| [#3458](https://github.com/HKUDS/nanobot/pull/3458) | Normalize DeepSeek non-string message content | fix | Robustez em payloads DeepSeek/OpenAI-compat |
| [#3466](https://github.com/HKUDS/nanobot/pull/3466) | /history command | feat | Novo comando slash para revisar mensagens da sessão |
| [#3389](https://github.com/HKUDS/nanobot/pull/3389) | Prevent heartbeat internal reasoning leaks | fix | Evita vazamento de instruções internas ao usuário |
| [#3397](https://github.com/HKUDS/nanobot/pull/3397) | Discord full thread support | fix | Threads herdam allowlist do canal pai |
| [#3483](https://github.com/HKUDS/nanobot/pull/3483) | OpenCode Go provider docs | docs | Documentação adicionada ao configuration docs |

**Avanços notáveis:**
- **Provider reliability**: timeout bounds e normalização de mensagens melhoram robustez para inference servers locais (vLLM, LM Studio, TGI)
- **UX de streaming**: progress deltas restaurados para Codex provider
- **Sessões**: novos invariantes e comando `/history` melhoram debugabilidade

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários + reações)

| # | Título | Comentários | 👍 | Status | Categoria |
|---|--------|:-----------:|:--:|--------|-----------|
| [#2133](https://github.com/HKUDS/nanobot/issues/2133) | User message queuing during task execution | 19 | 0 | CLOSED | enhancement |
| [#3376](https://github.com/HKUDS/nanobot/issues/3376) | Provider/Model Failover | 11 | 1 | OPEN | enhancement |
| [#3270](https://github.com/HKUDS/nanobot/issues/3270) | Configurable compaction ratio | 5 | 0 | CLOSED | feature |
| [#3292](https://github.com/HKUDS/nanobot/issues/3292) | Session-Level Focus Tool | 3 | 0 | OPEN | feature |
| [#2915](https://github.com/HKUDS/nanobot/issues/2915) | Directing nanobot while in loop | 3 | 1 | CLOSED | question/bug |
| [#1181](https://github.com/HKUDS/nanobot/issues/1181) | Dual-layer architecture (Steering Loop) | 3 | **9** | CLOSED | architecture |

### Análise de Demandas

**🔴 Arquitetura e Agent Loop (#1181, #2133, #2915)**
- A issue #1181 (9👍) propõe uma **arquitetura dual-layer** com Steering Loop + AgentMessage para superar limitações de autonomia do ReAct single-loop atual
- #2133 (19 comentários) solicita **enqueue de mensagens durante execução** — hoje o agent loop precisa finalizar para receber input do usuário
- #2915 reporta dificuldade em **redirecionar o nanobot enquanto está em loop** — fluxo não-ideal via `/stop`
- **Sinal**: a comunidade quer agentes mais responsivos e controláveis em tempo real

**🟡 Provider Flexibility (#3376)**
- Demanda por **failover automático entre providers/models** (timeout, 429, 5xx, connection errors)
- Hoje há apenas retry dentro do mesmo provider
- **Sinal**: operadores querem resiliência multi-provider para produção

**🟢 Novos Providers (#3490, #3491)**
- Hugging Face Inference Providers (PR por Céline/HF)
- `extra_body` config para endpoints OpenAI-compat
- **Sinal**: diversificação de backends LLM é prioridade

---

## 5. Bugs e Estabilidade

### Bugs Reportados (por severidade)

#### 🔴 Alta Severidade / Bloqueantes

| # | Título | Status | Canal | Detalhes |
|---|--------|:------:|-------|----------|
| [#3473](https://github.com/HKUDS/nanobot/issues/3473) | WebSocket connection failed (0.0.0.0) | OPEN | WebUI | Acesso remoto ao WebUI falha com bind em 0.0.0.0 |
| [#3474](https://github.com/HKUDS/nanobot/issues/3474) | DeepSeek v4 API blank response | CLOSED | API | Modelos deepseek-v4-pro/v4-flash retornam resposta vazia |
| [#3469](https://github.com/HKUDS/nanobot/issues/3469) | DeepSeek reasoning_content error | CLOSED | API | `reasoning_content must be passed back` em multi-round thinking |

#### 🟡 Média Severidade / Funcionalidade

| # | Título | Status | Canal | Detalhes |
|---|--------|:------:|-------|----------|
| [#3488](https://github.com/HKUDS/nanobot/issues/3488) | Telegram attachments octet-stream | OPEN | Telegram | MIME type incorreto impede abertura em visualizadores |
| [#3489](https://github.com/HKUDS/nanobot/pull/3489) | **Fix:** Telegram attachments with named file path | OPEN | Telegram | PR aberto como fix — aguardando merge |
| [#3435](https://github.com/HKUDS/nanobot/issues/3435) | WeChat media upload failure | CLOSED | WeChat | `[file upload failed: xxxxxx]` em recursos com anexos |
| [#3464](https://github.com/HKUDS/nanobot/issues/3464) | Subagent thread routing | CLOSED | Slack | Announcements de subagent em thread vão para sessão de canal |

#### 🟢 Correções Recentes Merged

| # | Título | Impacto |
|---|--------|--------|
| [#3480](https://github.com/HKUDS/nanobot/pull/3480) | Codex progress streaming | **Regressão corrigida** (v0.1.4.post6 → v0.1.5.post2) |
| [#3478](https://github.com/HKUDS/nanobot/pull/3478) | OpenAI-compat timeout bounds | Elimina hangs de 600s em requisições |
| [#3455](https://github.com/HKUDS/nanobot/pull/3455) | AsyncOpenAI client timeout | Mitigação similar em provider genérico |
| [#3458](https://github.com/HKUDS/nanobot/pull/3458) | DeepSeek message normalization | Robustez para payloads não-string |

**Resumo**: 2 bugs abertos (WebSocket, Telegram MIME), 1 regressão corrigida, múltiplas correções de timeout/provider merged.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Abertas com Maior Potencial

| # | Título | Categoria | Prioridade Indicada |
|---|--------|-----------|---------------------|
| [#3376](https://github.com/HKUDS/nanobot/issues/3376) | Provider/Model Failover | reliability | 11 comentários |
| [#3292](https://github.com/HKUDS/nanobot/issues/3292) | Session-Level Focus Tool | UX/productivity | 3 comentários |
| [#3484](https://github.com/HKUDS/nanobot/issues/3484) | Automation with context | workflow | nova |
| [#3481](https://github.com/HKUDS/nanobot/pull/3481) | Session scoped history | session management | PR aberto |
| [#3460](https://github.com/HKUDS/nanobot/pull/3460) | LongTaskTool (multi-step agent) | agent capabilities | PR aberto |
| [#3373](https://github.com/HKUDS/nanobot/pull/3373) | Gateway lifecycle hooks (on_start/on_stop) | extensibility | PR aberto |
| [#3482](https://github.com/HKUDS/nanobot/pull/3482) | Wire max_messages into session replay | configuration | PR aberto |

### Novos Canais e Providers (PRs abertos)

- **[#3490](https://github.com/HKUDS/nanobot/pull/3490)**: Hugging Face Inference Provider — colaboração oficial com HF
- **[#3486](https://github.com/HKUDS/nanobot/pull/3486)**: SimpleX channel integration
- **[#3405](https://github.com/HKUDS/nanobot/pull/3405)**: Olostep web search backend

**Sinais de roadmap**:
1. **Resiliência**: failover multi-provider, timeout bounds
2. **Extensibilidade**: novos canais (SimpleX), novos providers (HF)
3. **Agent autonomy**: LongTaskTool, Focus Tool, dual-layer architecture
4. **Configuration maturity**: `extra_body`, `max_messages` wired through

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Dor | Frequência | Exemplos |
|-----|:----------:|----------|
| **Agent não responde durante loops** | Alta | #2133, #2915 — usuário preso sem controle até `/stop` |
| **Multi-provider sem failover** | Alta | #3376 — tasks falham por single-point em provider configurado |
| **Timeout em inference local** | Média | #3455, #3478 — hangs de 10 min com vLLM/LM Studio |
| **Streaming parcial no Codex** | Média | #3426 — progress intermediário não chegava ao canal |
| **MIME type em Telegram** | Baixa | #3488 — arquivos não abrem em viewers |
| **Histórico misturado entre sessões** | Baixa | #3481 — sessões diferentes interleaving no history.jsonl |

### Cenários de Uso Reportados

- **Slack DMs + multi-channel**: agent confirmado em #2558 working (após fix)
- **Discord threads**: agora suportadas com herança de allowlist (#3397)
- **Async messaging (Telegram/SimpleX)**: padrões de uso crescente
- **Local inference (vLLM, TGI, Ollama)**: driver para `extra_body` e timeout fixes

### Indicadores de Satisfação

- **9👍** em proposta arquitetural (#1181) indica interesse em evoluir além de ReAct single-loop
- Atividade alta de PRs externos (SimpleX, HF, Olostep) sugere atratividade do framework
- Correção rápida de regressões (Codex streaming em <7 dias)

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Estagnadas

| # | Título | Criado | Atualizado | Status | Prioridade |
|---|--------|--------|------------|:------:|------------|
| [#3292](https://github.com/HKUDS/nanobot/issues/3292) | Session-Level Focus Tool | 2026-04-19 | 2026-04-27 | OPEN | Feature request ativa |
| [#3484](https://github.com/HKUDS/nanobot/issues/3484) | Automation with context | 2026-04-27 | 2026-04-27 | OPEN | Nova, sem comentários |
| [#3473](https://github.com/HKUDS/nanobot/issues/3473) | WebSocket remote access | 2026-04-27 | 2026-04-27 | OPEN | Bug sem assignee |

### PRs Abertos Aguardando Review

| # | Título | Criado | Idade | Bloco |
|---|--------|--------|------:|-------|
| [#3490](https://github.com/HKUDS/nanobot/pull/3490) | Hugging Face provider | 2026-04-27 | <1d | Parceria HF — alta visibilidade |
| [#3486](https://github.com/HKUDS/nanobot/pull/3486) | SimpleX channel | 2026-04-27 | <1d | Novo canal |
| [#3460](https://github.com/HKUDS/nanobot/pull/3460) | LongTaskTool | 2026-04-26 | 2d | Feature significativa |
| [#3373](https://github.com/HKUDS/nanobot/pull/3373) | Gateway lifecycle hooks | 2026-04-22 | 6d | Enhancement esperado |

---

## Métricas Consolidada do Dia

| Indicador | Valor |
|-----------|------:|
| Issues ativas (abertas) | 5 |
| Issues fechadas (últimas 24h) | 12 |
| PRs abertos | 16 |
| PRs merged/fechados | 21 |
| Releases | 0 |
| Bugs abertos | 2 |
| Bugs críticos resolvidos | 1 |
| Features em PR | 7+ |
| Providers

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-04-28

## 1. Panorama do dia

O Hermes Agent apresenta **alta atividade comunitária** em 28 de abril de 2026, com 50 issues e 50 PRs atualizados nas últimas 24 horas, sem novas releases. O projeto atravessa um período de **estabilização de bugs críticos**, com três issues P1 abertas (compressão de contexto, Telegram flooding, WhatsApp voice) e três PRs P1 aguardando revisão (resume de ferramentas, auth token, Nix Python). A base de código demonstra maturidade, porém revela **débito técnico em integrações de plataforma** (Feishu, WhatsApp, Telegram) e **questões arquiteturais de overflow de contexto**. A proporção de 44 issues abertas para apenas 6 fechadas indica um backlog crescente que merece atenção.

---

## 2. Lançamentos

**Nenhuma release nas últimas 24 horas.**

O projeto não registrou novas versões, sugerindo que a equipe de desenvolvimento está focada em revisão de PRs e preparação para um próximo release com as correções P1 e P2 em andamento.

---

## 3. Progresso do Projeto

Três PRs foram merged/fechados recentemente, representando avanços concretos:

| PR | Tipo | Componente | Impacto |
|----|------|------------|---------|
| [#16033](https://github.com/NousResearch/hermes-agent/pull/16033) | Feature | CLI, OpenRouter, Nous | Catálogo remoto de modelos para OpenRouter e Nous Portal via JSON manifest, permitindo atualizações sem release |
| [#16690](https://github.com/NousResearch/hermes-agent/pull/16690) | Bug Fix | TUI, Docker | Materialização do pacote TUI Ink no Docker, resolvendo dependências de build |
| [#16701](https://github.com/NousResearch/hermes-agent/pull/16701) | Bug Fix | CLI, Gateway, Auth | Propagação correta de `credential_pool` através de overrides de sessão `/model` |

**Destaque arquitetural:** O PR [#14424](https://github.com/NousResearch/hermes-agent/pull/14424) introduz `ProviderProfile ABC` com 30 perfis de provedores centralizados, transformando a adição de novos provedores em um processo de **um único arquivo**. Este é um marco de refatoração que simplifica significativamente a manutenibilidade do código.

---

## 4. Temas Quentes da Comunidade

As discussões com maior engajamento revelam demandas prioritárias:

### Issues com mais reações/comentários

| Issue | Tipo | Comentários | 👍 | Tema Central |
|-------|------|-------------|----|--------------|
| [#9196](https://github.com/NousResearch/hermes-agent/issues/9196) | Question | 1 | 6 | Status oficial de suporte Windows nativo |
| [#9127](https://github.com/NousResearch/hermes-agent/issues/9127) | Feature | 2 | 4 | Suporte MiniMax para `vision_analyze` |
| [#15551](https://github.com/NousResearch/hermes-agent/issues/15551) | Bug | 6 | 0 | Custom endpoints não executam ferramentas |
| [#15876](https://github.com/NousResearch/hermes-agent/issues/15876) | Proposal | 6 | 0 | Módulo desktop computer-use via noVNC |

**Análise:** A questão sobre Windows nativo (#9196) com 6 reações indica **demanda reprimida por instalação nativa**, contradizendo a documentação atual que recomenda WSL2. O suporte MiniMax para visão (#9127) mostra interesse em provedores alternativos. A proposal de desktop computer-use (#15876) sugere ambição de expandir casos de uso além de terminal/chat.

### PRs em destaque com alta atividade

| PR | Tipo | Componente | Estado | Relevância |
|----|------|------------|--------|------------|
| [#9050](https://github.com/NousResearch/hermes-agent/pull/9050) | Bug | Agent | Open (P1) | Resume de execução após compactação de contexto |
| [#9054](https://github.com/NousResearch/hermes-agent/pull/9054) | Bug | CLI | Open (P2) | Preservação de switch de modelo entre turns |

---

## 5. Bugs e Estabilidade

### P1 — Críticos (3 issues abertas)

| Issue | Componente | Descrição | Link |
|-------|------------|-----------|------|
| #9096 | Agent | Compressão de contexto insere conversas históricas duplicadas no contexto atual | [Issue #9096](https://github.com/NousResearch/hermes-agent/issues/9096) |
| #9236 | Gateway, WhatsApp | WhatsApp adapter sem `send_voice()` — áudios enviados como texto | [Issue #9236](https://github.com/NousResearch/hermes-agent/issues/9236) |
| #16668 | Gateway, Telegram | Flood control no streaming deixa mensagem parcial + duplica resposta final | [Issue #16668](https://github.com/NousResearch/hermes-agent/issues/16668) |

### P2 — High (12 issues abertas)

**Bugs de plataforma:**
- [#9090](https://github.com/NousResearch/hermes-agent/issues/9090) — Sessões Feishu WebSocket não fechadas, acumulando zumbis no DB
- [#16582](https://github.com/NousResearch/hermes-agent/issues/16582) — WebUI salva sessão no diretório errado ao trocar agentes

**Bugs de ferramentas:**
- [#15551](https://github.com/NousResearch/hermes-agent/issues/15551) — Custom endpoints funcionam apenas como chat (6 comentários)
- [#16520](https://github.com/NousResearch/hermes-agent/issues/16520) — Terminal tools truncam linhas longas com `...` (5 comentários)
- [#9075](https://github.com/NousResearch/hermes-agent/issues/9075) — MCP falha em validação de `structuredContent`

**Bugs de agent/gateway:**
- [#9712](https://github.com/NousResearch/hermes-agent/issues/9712) — `delegate_task(acp_command=...)` ignorado sob Anthropic parent
- [#15975](https://github.com/NousResearch/hermes-agent/issues/15975) — Kimi-k2.6 gera respostas corrompidas de 1 caractere
- [#16650](https://github.com/NousResearch/hermes-agent/issues/16650) — Usuários não notificados quando compressão falha silenciosamente

### Issues P2 fechadas recentemente

| Issue | Descrição | Link |
|-------|-----------|------|
| #15500 | `session_search` retorna resultados zerados mesmo com conteúdo existente | [Issue #15500](https://github.com/NousResearch/hermes-agent/issues/15500) |
| #5719 | Bloco Honcho Context vazando em mensagens via análise automática de visão | [Issue #5719](https://github.com/NousResearch/hermes-agent/issues/5719) |
| #16630 | Terminal pede senha sudo mesmo com NOPASSWD configurado | [Issue #16630](https://github.com/NousResearch/hermes-agent/issues/16630) |

**Observação:** A taxa de fechamento de bugs P2 é positiva, indicando responsividade da equipe.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features P3 em discussão ativa

| Issue | Componente | Descrição | 👍 | Link |
|-------|------------|-----------|----|------|
| #15876 | Tools, Docker | Módulo desktop computer-use (noVNC + screenshot + mouse/keyboard) | 0 | [Issue #15876](https://github.com/NousResearch/hermes-agent/issues/15876) |
| #9127 | Tool/Vision | Suporte MiniMax para `vision_analyze` | 4 | [Issue #9127](https://github.com/NousResearch/hermes-agent/issues/9127) |
| #9127 | Gateway | Auto-start dashboard com gateway systemd | 0 | [Issue #16702](https://github.com/NousResearch/hermes-agent/issues/16702) |
| #12568 | Tool/Memory | Ação `read` no memory tool + mensagens de erro melhoradas | 1 | [Issue #12568](https://github.com/NousResearch/hermes-agent/issues/12568) |

### Propostas arquiteturais

- **[#9181](https://github.com/NousResearch/hermes-agent/issues/9181)** — Separar base vs effective context em overflow recovery (refatoração P2)
- **[#14424](https://github.com/NousResearch/hermes-agent/pull/14424)** — ProviderProfile ABC com 29+ provedores (PR merged parcial)
- **[#16661](https://github.com/NousResearch/hermes-agent/issues/16661)** — Plugin `context-resume` para auto-injetar contexto após restart

### Sinais de roadmap

1. **Desktop automation:** A proposal de computer-use (#15876) sugere direção para automação de desktop
2. **Multi-plataforma:** Issues de Feishu, WhatsApp, Telegram indicam necessidade de consolidação de adapters
3. **Nix packaging:** Issues [#16537](https://github.com/NousResearch/hermes-agent/issues/16537) e [#14453](https://github.com/NousResearch/hermes-agent/issues/14453) mostram investimento em Nix/NixOS

---

## 7. Resumo de Feedback dos Usuários

### Dores reais identificadas

**1. Limitações de custom endpoints (#15551)**
> "When using a custom endpoint (e.g. Direct Mistral AI API with codestral-latest), Hermes does not enable command/tool execution by default."

**Impacto:** Usuários tentando usar modelos não-nativos perdem funcionalidade core de ferramentas, frustrando expectativas de paridade.

**2. Experiência de compressão de contexto (#16650, #9096)**
> "When auxiliary compression's summary LLM call fails, the compressor still drops the selected turns and inserts a static fallback placeholder. The dropped context is unrecoverable."

**Impacto:** Perda silenciosa de contexto valioso sem notificação ao usuário — debugging extremadamente difícil.

**3. Integração Discord/WhatsApp imatura (#9053, #9236)**
> "allow Discord bot messages through when they mention Hermes or reply to a Hermes message"

**Impacto:** Usuários esperam comportamento "bot-to-bot" similar a outros platforms, mas suporte é experimental.

**4. Instabilidade em provedores alternativos (#15975, #9181)**
> "Kimi-k2.6 via kimi-coding produces corrupted tiny outputs such as &, If, or other 1-character fragments."

**Impacto:** Integração com provedores não-oficiais é instável, criando experiência inconsistente.

### Cenários de uso destacados

- **Agentes delegation** com ACP commands (delegate_task) — uso avançado ainda problemático
- **Cron jobs** com skills preservados em replies — gaps de contexto identificados
- **Desktop use** via noVNC — interesse comunitário em expandir além de terminal

---

## 8. Backlog que Merece Atenção

### Issues sem resposta há mais de 10 dias (requer triagem)

| Issue | Criado | Dias | Tipo | Descrição | Link |
|-------|--------|------|------|-----------|------|
| #9127 | 2026-04-13 | 15 | Feature | Suporte MiniMax para vision_analyze | [Issue #9127](https://github.com/NousResearch/hermes-agent/issues/9127) |
| #9236 | 2026-04-13 | 15 | Bug (P1) | WhatsApp send_voice() missing | [Issue #9236](https://github.com/NousResearch/hermes-agent/issues/9236) |
| #9090 | 2026-04-13 | 15 | Bug (P2) | Feishu WebSocket zombie sessions | [Issue #9090](https://github.com/NousResearch/hermes-agent/issues/9090) |
| #9050 | 2026-04-13 | 15 | PR (P1) | Resume mid-task after compaction | [PR #9050](https://github.com/NousResearch/hermes-agent/pull/9050) |
| #9054 | 2026-04-13 | 15 | PR (P2) | Preserve model switch across turns | [PR #9054](https://github.com/NousResearch/hermes-agent/pull/9054) |

### PRs aguardando review há >10 dias

| PR | Tipo | Componente | Link |
|----|------|------------|------|
| #9053 | Feature | Gateway, Discord | [PR #9053](https://github.com/NousResearch/hermes-agent/pull/9053) |
| #9060 | Bug Fix | Gateway, BlueBubbles | [PR #9060](https://github.com/NousResearch/hermes-agent/pull/9060) |
| #9066 | Bug Fix | Gateway, TTS | [PR #9066](https://github.com/NousResearch/hermes-agent/pull/9066) |
| #9067 | Bug Fix | Nix (Python 3.11→3.12) | [PR #9067](https://github.com/NousResearch/hermes-agent/pull/9067) |

### Recomendações de priorização

1. **Reviews P1:** Os PRs [#9050](https://github.com/NousResearch/hermes-agent/pull/9050) e [#9050](https://github.com/NousResearch/hermes-agent/pull/9050) tratam bugs críticos de compactação de contexto e auth — bloquear para próxima release
2. **Triagem Discord bot-to-bot:** O PR [#9053](https://github.com/NousResearch/hermes-agent/pull/9053) representa feature prometida há 15 dias
3. **Nix Python bump:** PR [#9067](https://github.com/NousResearch/hermes-agent/pull/9067) simples mas desbloqueia build
4. **Clarificar Windows roadmap:** Issue [#9196](https://github.com/NousResearch/hermes-agent/issues/9196) com 6 👍 precisa de resposta oficial

---

## Métricas de Saúde do Projeto (2026-04-28)

| Indicador | Valor | Status |
|-----------|-------|--------|
| Issues ativas (24h) | 44 open / 6 closed | ⚠️ Backlog crescente |
| PRs abertos (24h) | 47 | 🔴 Alto volume pendente |
| PRs merged (24h) | 3 | 🟡 Baixa vazão de merge |
| Releases (24h) | 0 | 🟡 Nenhuma este período |
| Issues P1 abertas | 3 | 🔴 Críticos sem resolução |
| PRs P1 awaiting review | 2 | 🔴 Bloqueantes |
| Taxa de fechamento P2 | 3/12 (~25%) | 🟡 Necessita aumento |

**Veredicto:** O projeto está **ativo mas com gargalos de review**. A base de código demonstra profundidade técnica (ProviderProfile, multi-provider), porém bugs de estabilidade em integrações de plataforma e compressão de contexto representam risco para experiência do usuário. Recomenda-se priorizar review de PRs P1 e aumentar comunicação sobre roadmap de Windows/nix.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-04-28

---

## 1. Panorama do Dia

O projeto PicoClaw mantém um nível de atividade intenso e saudável. Nas últimas 24 horas, foram atualizadas **100 issues** (31 abertas, 69 fechadas) e **120 PRs** (63 abertos, 57 merged/fechados), evidenciando uma cadência de desenvolvimento robusta com alta taxa de resolução. A atividade recente concentra-se em **estabilidade do provider** (especialmente o bug de Authorization header no `openai_compat`), **melhorias na experiência web** (streaming chat) e **features para operadores multi-agente** (capability discovery, hooks). A comunidade demonstra particular interesse em **voz (TTS/ASR)**, **auto-update** e **integrações de observabilidade**. O release nightly `v0.2.7-nightly.20260427` foi publicado, sinalizando que a versão 0.2.7 está em fase final de estabilização.

---

## 2. Lançamentos

### Release Mais Recente

**Nightly Build — `v0.2.7-nightly.20260427.39dec354`**

| Artefato | Detalhe |
|---|---|
| Tag | `nightly` |
| Commit | `39dec354` |
| Changelog | https://github.com/sipeed/picoclaw/compare/v0.2.7...main |

- **Tipo:** Automated nightly build — pode conter funcionalidades ainda não estabilizadas
- **Recomendação:** Usar com cautela em produção; ideal para testes de funcionalidades em desenvolvimento
- **Breaking Changes:** Não identificados nesta release nightly, mas a proximidade com a tag `v0.2.7` sugere que mudanças relevantes estão em estágio de feature freeze

> ⚠️ Não há changelog detalhado para esta nightly. Recomenda-se monitorar a comparação com `v0.2.7` no GitHub para rastrear mudanças específicas.

---

## 3. Progresso do Projeto

### PRs Relevantes Recentemente Merged/Fechados

| # | Título | Área | Impacto |
|---|---|---|---|
| #2233 | Standardize inbound context and decouple routing from session allocation | agent/channel | **Alto** — reduz acoplamento entre canais, roteamento e sessões; facilita adição de novos canais |
| #1919 | Seahorse - Biologically-inspired Memory System | agent | **Alto** — sistema de memória de curta e longa duração inspirado no hipocampo; melhora compactação contextual |
| #1474 | Capability discovery and profile enumeration endpoint | agent | **Alto** — habilita orquestração externa; essencial para integrações enterprise e multi-node |
| #2173 | LangSmith observability for agent tracing | agent | **Médio** — camada de observabilidade para debugging de agentes multi-step |
| #2371/#2372 | Resolve api_key, model lookup, and fallback bugs | provider | **Crítico** — corrige silêncio no drop de API key causing 401 errors |
| #2137 | Live Task List in Chat via Message Edit & Reaction Tools | channel/tool | **Médio** — transparência do progresso do agente durante tarefas longas |
| #2136 | Fix flawed tool call extraction | provider | **Alto** — resolve parsing de tool calls que causava falhas intermitentes |
| #2284 | WhatsApp proxy support for native and bridge modes | channel | **Médio** — habilita uso em redes com restrições (OpenClash, etc.) |
| #2329 | Block WhatsApp group messages with GroupTrigger support | channel | **Médio** — segurança e privacidade em grupos |
| #2327 | Final Security Shield & Hardening Tidy-up | security | **Alto** — consolidação de 100% da arquitetura de segurança no main |

### Destaque de Avanço Técnico

- **Desacoplamento de roteamento (#2233):** Issue criticada há muito tempo que agora permite que canais como Discord, Telegram e Feishu tenham inbound semantics independentes do sistema de roteamento e alocação de sessões. Isso abre caminho para channels mais modulares e reduz a barreira de entrada para novos integrations.
- **Seahorse Memory (#1919):** Implementação de um sistema de memória biologicamente inspirado (nomeado em referência ao hipocampo) para agentes de IA, com suporte a compactação contextual de curta duração e consolidação de memória de longa duração.

---

## 4. Temas Quentes da Comunidade

### Issues/PRs com Maior Engajamento (comentários + reações)

| # | Título | Comentários | 👍 | Status | Dominância |
|---|---|---|---|---|---|
| #1648 | Adding TTS and ASR Support to PicoClaw | 23 | 0 | 🟢 OPEN | **provider/channel** |
| #28 | LM Studio Easy Connect | 16 | 1 | 🟢 OPEN | provider |
| #2578 | openai_compat never sends Authorization header in v0.2.6 | 12 | 0 | 🟢 OPEN | **provider (bug)** |
| #618 | self-upgrade support | 10 | 2 | 🟢 OPEN | build |
| #629 | LLM call retry failure | 10 | 0 | 🟢 OPEN | provider |
| #2603 | FreeRide tool for OpenRouter rotation/fallback | — | 0 | 🟢 OPEN | provider |
| #2587 | Web chat streaming and scroll UX | — | 0 | 🟢 OPEN | channel |
| #2681 | Sanitize MCP tool schemas for Gemini | — | 0 | 🟢 OPEN | provider |
| #2327 | Security Shield & Hardening | — | 0 | 🟢 OPEN | security |

### Análise das Demandas Principais

**1. TTS/ASR (#1648) — 23 comentários**
A demanda por capacidades de Text-to-Speech e Automatic Speech Recognition é a **mais comentada**, indicando forte interesse da comunidade em expandir o PicoClaw além de interfaces texto. Já existe um PRdraft (#1642) com funcionalidade similar que ainda não foi integrado ao gateway. A proposta de design arch/arquitetura já está em discussão madura. **Sinal de roadmap claro para v0.3.x.**

**2. LM Studio Easy Connect (#28) — 16 comentários**
Interesse significativo em conectar com LM Studio localmente. O autor reconhece que está fora do seu alcance técnico e solicita contribuições. Este é um caso clássico de **demanda de community-driven development** — a necessidade existe mas precisa de mantenedores com habilidades específicas.

**3. OpenAI Compat Auth Bug (#2578) — 12 comentários**
Bug crítico reportado em 2026-04-17,一直没有解决. O `openai_compat` provider está **silent-failing** ao descartar o header `Authorization`, causando 401 errors em todos os modelos HTTP que dependem de credenciais. **Impacto severo em produção.** Um PR relacionado (#2372) foi aberto para corrigir api_key lookup e fallback bugs relacionados.

**4. Self-Upgrade (#618) — 10 comentários, 2 👍**
Demanda recorrente para auto-update do programa, essencial para distribuição contínua de patches de segurança e features. O escopo inclui suporte para múltiplas plataformas (deb, winget, opkg). **Ausência de auto-update é uma dor real para operadores em produção.**

---

## 5. Bugs e Estabilidade

### Bugs Abertos por Severidade

| Severidade | Count | Exemplos Notáveis |
|---|---|---|
| 🔴 Crítica | 2-3 | #2578 (auth header drop), #2368 (Android model config) |
| 🟠 Alta | 3-4 | #629 (retry failure), #1708 (REST API endpoints) |
| 🟡 Média | 4-5 | #2046 (LongCat tool call), #2364 (stale sessions) |
| 🟢 Baixa | 2-3 | #1587 (Mattermost request) |

### Detalhamento de Bugs Críticos

**#2578 — openai_compat Authorization Header Drop**  
- **Severidade:** 🔴 Crítica  
- **Versão afetada:** v0.2.6 (`git: 51eecde`)  
- **Sintoma:** Provider envia requests HTTP sem header `Authorization`, independente da fonte de configuração da API key  
- **Impacto:** Qualquer modelo HTTP com credenciais falha silenciosamente  
- **Status:** 🟢 OPEN — aguardando merge do fix em #2372  
- **Link:** https://github.com/sipeed/picoclaw/issues/2578

**#2368 — Android App "Model not configured"**  
- **Severidade:** 🔴 Crítica (para mobile)  
- **Sintoma:** Após configurar modelo com API key via interface web, mensagem "not configured" persiste  
- **Impacto:** Usuários Android não conseguem selecionar modelos  
- **Status:** 🟢 OPEN  
- **Link:** https://github.com/sipeed/picoclaw/issues/2368

**#629 — LLM Call Retry Failure**  
- **Severidade:** 🟠 Alta  
- **Sintoma:** Tarefas longas travam quando servidor retorna HTTP 500; não há retry  
- **Ambiente:** Ubuntu 22.04, OpenRouter, Discord channel  
- **Status:** 🟢 OPEN  
- **Link:** https://github.com/sipeed/picoclaw/issues/629

**#1708 — REST API Endpoints Não Disponíveis**  
- **Severidade:** 🟠 Alta  
- **Versão:** v0.2.3 (Docker)  
- **Sintoma:** Endpoints `/chat` e `/a2a` não expostos no Gateway; apenas health funciona  
- **Status:** 🟢 OPEN  
- **Link:** https://github.com/sipeed/picoclaw/issues/1708

### Observação sobre "Stale" Issues

Várias issues abertas estão marcadas como `stale`, indicando que não tiveram atualização por >30 dias. Isso não significa que são bugs resolvidos — são issues que **precisam de triagem** pelos mantenedores. Issues stale com bugs críticos (#2578, #629) representam risco de acúmulo de dívida técnica.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em Desenvolvimento Ativo (PRs Abertos)

| # | Feature | Domínio | Relevância |
|---|---|---|---|
| #2681 | Sanitização de schemas MCP para Gemini | provider | Correção de crash com MCP tools |
| #2603 | FreeRide tool — rotação automática de modelos free OpenRouter | provider | **Destacado** — gestão inteligente de fallback |
| #2587 | Web chat streaming + scroll UX | channel | **Destaque** — experiência web moderna |
| #2491 | Session management commands: /status, /compact, /new | agent | Controle granular de sessões |
| #2333 | Context compression (6-phase algorithm) | agent | Eficiência de contexto |
| #2332 | Dynamic SkillManager | skill | Auto-geração de skills pelo agente |
| #2329 | WhatsApp group blocking + GroupTrigger | channel | Privacidade em grupos |
| #2284 | WhatsApp proxy support | channel | Rede restrita |
| #2258 | Local image handling para modelos | provider | Multimodal |

### Features Solicitadas pela Comunidade

| # | Feature | Dominância | Status |
|---|---|---|---|
| #1648 | **TTS/ASR Support** | provider/channel | 🟢 OPEN — alto interesse |
| #618 | **Self-upgrade support** | build | 🟢 OPEN — stale mas demanda real |
| #28 | LM Studio Easy Connect | provider | 🟢 OPEN |
| #2171 | Migrar para OpenAI Responses API | provider | 🟢 OPEN |
| #1731 | OTel GenAI observability | config | 🟢 OPEN |
| #1587 | Mattermost channel | channel | 🟢 OPEN |
| #2009 | /stop command para cancelar tasks | agent | 🟢 CLOSED — em progresso via #2491 |
| #1067 | Authula Authentication/Authorization | config | 🟢 OPEN |

### Sinais de Roadmap para v0.2.7/v0.3

1. **Voz:** TTS/ASR é a feature mais demandada da comunidade — provável inclusão em v0.3
2. **Observabilidade Enterprise:** OTel GenAI e LangSmith indicam direção para mercado B2B
3. **Streaming:** A PR #2587 está em desenvolvimento ativo para experiência web moderna
4. **Provider diversification:** FreeRide tool, LM Studio, Silicon Flow — expansão contínua de provedores
5. **Segurança:** Consolidada em #2327; auto-update (#618) é próximo passo lógico

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Dor | Evidência | Severidade |
|---|---|---|
| **Auth silencioso falhando** | #2578 — API key descartada sem warning; usuário não sabe por que modelo não funciona | 🔴 Crítica |
| **Ausência de auto-update** | #618 — dificulta manutenção em produção, especialmente embedded devices | 🟠 Alta |
| **Falha em retry de LLM** | #629 — tarefas travam, usuário precisa reiniciar | 🟠 Alta |
| **Debugging opaco** | #2173 (LangSmith) — quando agente falha em multi-step, não há como trace | 🟡 Média |
| **Contexto longo não gerenciável** | #2333 — agentes "silenciam" durante tasks longas sem feedback | 🟡 Média |
| **Canais incompletos no Windows/Android** | #2080 (QQ no Windows), #2368 (Android config) | 🟠 Alta |
| **Barreira para LM Studio local** | #28 — usuário quer mas não consegue configurar sozinho | 🟡 Média |

### Cenários de Uso Emergentes

1. **Multi-agente enterprise:** Issues como #1474 (capability discovery) e #1796 (event-driven hooks) sugerem adoção em cenários de orquestração de múltiplos agentes
2. **Agents em produção com restrições de rede:** #2284 (WhatsApp proxy) indica necessidade de ambientes corporativos com firewalls
3. **Desenvolvedores querendo extensibilidade:** #2332 (SkillManager dinâmico) responde à demanda de usuarios avançados

### Satisfação/Insatisfação

| Indicador | Leitura |
|---|---|
| Alta taxa de close (69/100 issues em 24h) | Mantenedores responsivos; dívida técnica sendo gerenciada |
| Issues com

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-04-28

## 1. Panorama do Dia

O projeto IronClaw apresenta **alta atividade** no dia de hoje, com 10 issues e 30 PRs atualizados nas últimas 24 horas. A atividade concentrou-se majoritariamente no **lançamento da arquitetura "Reborn"**, com múltiplos PRs de infraestrutura foundational sendo mergeados e novos slices sendo preparados para integração. Simultaneamente, múltiplos **canaries de produção falharam**, indicando possível instabilidade no ambiente de staging que está sendo promovido para main. O time está navegando uma transição complexa entre engines (v1 → v2), com pelo menos 3 bugs críticos relacionados a essa migração.

---

## 2. Lançamentos

**Nenhuma release oficial publicada nas últimas 24h.**

No entanto, o pipeline de staging está ativo com 3 promoções pendentes para main:
- [PR #2995](https://github.com/nearai/ironclaw/pull/2995) (batch: 4b6d52e5, 2026-04-27 18:18 UTC)
- [PR #2990](https://github.com/nearai/ironclaw/pull/2990) (batch: 4b6d52e5, 2026-04-27 16:38 UTC)

**Nota:** Estas promoções incluem DB migrations e afetam todos os scopes do projeto, indicando uma release interna significativa iminente.

---

## 3. Progresso do Projeto

### PRs Fechados/Mergeds Hoje

| PR | Descrição | Tamanho | Risk | Impacto |
|----|-----------|---------|------|---------|
| [#2989](https://github.com/nearai/ironclaw/pull/2989) | **fix(engine): mission threads_today timezone-aware reset** | L | Low | ✅ Corrige bug crítico onde missões ficavam "exauridas" por até 17h após meia-noite local |
| [#2994](https://github.com/nearai/ironclaw/pull/2994) | **Fix v2 tool_info action inventory lookup** | L | Low | ✅ Permite actions nativas como `mission_create` retornarem schema details |
| [#2988](https://github.com/nearai/ironclaw/pull/2988) | **feat(reborn): add host foundation crates** | XL | Medium | 🚀 Adiciona `ironclaw_host_api`, `ironclaw_resources`, `ironclaw_architecture` |
| [#2983](https://github.com/nearai/ironclaw/pull/2983) | **docs(reborn): contract freeze review packet** | XS | Low | 📄 Documentação de freeze de contrato para Reborn |

### PRs Abertos em Andamento

| PR | Descrição | Tamanho | Risk | Status |
|----|-----------|---------|------|--------|
| [#2999](https://github.com/nearai/ironclaw/pull/2999) | feat(reborn): add auth control substrate | XL | Medium | 🔍 Em revisão — adiciona `ironclaw_authorization` e `ironclaw_run_state` |
| [#2996](https://github.com/nearai/ironclaw/pull/2996) | feat(reborn): add filesystem substrate | XL | Medium | 🔍 Em revisão — `RootFilesystem`, `ScopedFilesystem` |
| [#2993](https://github.com/nearai/ironclaw/pull/2993) | feat(reborn): durable event/audit substrate | XL | Medium | 🔍 Em revisão — `ironclaw_events` |
| [#2997](https://github.com/nearai/ironclaw/pull/2997) | fix(reborn): close foundation fail-closed gaps | M | Low | 🔍 Corrige profundidade JSON e validação USD negativa |
| [#2783](https://github.com/nearai/ironclaw/pull/2783) | ci: remove staging promotion pipeline | XL | Medium | 🔍 Remove workflows de promoção staging (mudança de processo) |

---

## 4. Temas Quentes da Comunidade

### Issue com Maior Engajamento

| Issue | Título | Comentários | Reações | Link |
|-------|--------|-------------|---------|------|
| **#2987** | Track Reborn architecture landing strategy | **7** | 0 | [Issue #2987](https://github.com/nearai/ironclaw/issues/2987) |
| **#2887** | Auth Browser Consent canary fails — Google bot | 1 | 0 | [Issue #2887](https://github.com/nearai/ironclaw/issues/2887) |
| **#1697** | How to use codex as base model? | 1 | 0 | [Issue #1697](https://github.com/nearai/ironclaw/issues/1697) |

### Análise de Demandas

**#2987 — Estratégia de Landing da Reborn Architecture** (🔴 Alta Prioridade)
> Esta issue estabelece um **plano de integração** para evitar PRs massivos e garantir reviewabilidade. O autor propõe:
> - PR0: Contract freeze → staging
> - Criar branch `reborn-integration` 
> - Agrupar PRs por domínio (filesystem, events, auth, etc.)
> - **Implicação:** O time está consciously quebrando a arquitetura em slices menores para qualidade de review

**#1697 — Uso de Codex como Base Model**
> Usuário reporta dificuldade em configurar `codex` como modelo base. Ambos `Plus` e `GPT-5.4 mini` não funcionam. **Demanda de documentação** clara sobre configuração de modelos customizados.

---

## 5. Bugs e Estabilidade

### Falhas de Canary (⚠️ Instabilidade de Produção)

| Issue | Severity | Descrição | Link |
|-------|----------|-----------|------|
| #2977 | 🔴 Alta | `provider-matrix` — openai-compatible | [Issue #2977](https://github.com/nearai/ironclaw/issues/2977) |
| #2976 | 🔴 Alta | `public-smoke` lane failed | [Issue #2976](https://github.com/nearai/ironclaw/issues/2976) |
| #2975 | 🔴 Alta | `private-oauth` lane failed | [Issue #2975](https://github.com/nearai/ironclaw/issues/2975) |

> ⚠️ **Todas as falhas ocorrem no mesmo commit** `7404e7d64796009671d42e789240865dcabb4d60` — possível regression no batch atual.

### Bugs Reportados

| Issue | Severity | Escopo | Título | Link |
|-------|----------|--------|--------|------|
| **#2991** | 🔴 Alta | agent | **V2 approval flow broken: prompts confusos, routing errado** | [Issue #2991](https://github.com/nearai/ironclaw/issues/2991) |
| **#2887** | 🟡 Média | auth | Auth Browser Consent — Google bot detection em CI | [Issue #2887](https://github.com/nearai/ironclaw/issues/2887) |
| **#2982** | 🟡 Média | migration | Routine/Mission misclassification após upgrade 0.26.0 | [Issue #2982](https://github.com/nearai/ironclaw/issues/2982) |
| **#2833** | 🟡 Média | agent | Cross-Conversation Response Contamination | [Issue #2833](https://github.com/nearai/ironclaw/issues/2833) |

### Correções em Andamento

| PR | Escopo | Descrição | Link |
|----|--------|-----------|------|
| #2992 | web | **Keep Routines tab após engine v1→v2 upgrade** | [PR #2992](https://github.com/nearai/ironclaw/pull/2992) |
| #2986 | web | Drop SSE events sem thread_id (previne leak entre conversas) | [PR #2986](https://github.com/nearai/ironclaw/pull/2986) |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features em Desenvolvimento

| PR | Escopo | Feature | Link |
|----|--------|---------|------|
| **#2871** | tool | **ExternalToolRegistrar plugin seam** para downstream forks | [PR #2871](https://github.com/nearai/ironclaw/pull/2871) |
| **#2925** | deploy | **Downstream deploy infra**: AGENTS_SEED_PATH, INTEGRATION_CREDENTIALS_DIR, MissionSlot | [PR #2925](https://github.com/nearai/ironclaw/pull/2925) |
| **#2948** | docs | **Database e Configuration pages** para navegação | [PR #2948](https://github.com/nearai/ironclaw/pull/2948) |
| **#2874** | ci | **Canary report** (relatórios estruturados de canary) | [PR #2874](https://github.com/nearai/ironclaw/pull/2874) |

### Sinais de Roadmap

1. **Suporte a Forking:** Issues [#2871](https://github.com/nearai/ironclaw/pull/2871) e [#2925](https://github.com/nearai/ironclaw/pull/2925) indicam foco em **extensibilidade para forks downstream** — pattern para `nearai/ironclaw-abound` sendo formalizado.

2. **Arquitetura Reborn:** Progresso consistente com 3 substrate crates em review:
   - Auth control (#2999)
   - Filesystem substrate (#2996)
   - Durable events (#2993)

3. **Documentação de Infra:** Issue [#2948](https://github.com/nearai/ironclaw/pull/2948) revela que **banco de dados não está documentado** apesar de 24 migrations e suporte a PostgreSQL+libSQL.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Dor | Issue | Severidade | Link |
|-----|-------|------------|------|
| **Configuração de modelos** confusa | #1697 | 🟡 | [Issue #1697](https://github.com/nearai/ironclaw/issues/1697) |
| **Upgrade quebra rotinas existentes** | #2982 | 🔴 | [Issue #2982](https://github.com/nearai/ironclaw/issues/2982) |
| **Respostas vazam entre conversas** | #2833 | 🟡 | [Issue #2833](https://github.com/nearai/ironclaw/issues/2833) |

### Cenários de Uso Identificados

1. **Usuários migrando de v1 para v2** — experimentam perda de acesso a rotinas e comportamento inconsistente de tabs
2. **Downstream forks** — precisam de patterns documentados para инструменты externos
3. **Configuração de modelos** — falta clareza sobre como usar modelos customizados (Codex)

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta/Attendimento Prolongado

| Issue | Idade | Escopo | Título | Prioridade | Link |
|-------|-------|--------|--------|------------|------|
| #1697 | ~32 dias | llm | How to use codex as base model? | 🟡 | [Issue #1697](https://github.com/nearai/ironclaw/issues/1697) |
| #2887 | ~5 dias | auth | Google bot detection on CI runner | 🟡 | [Issue #2887](https://github.com/nearai/ironclaw/issues/2887) |
| #2833 | ~6 dias | agent | Cross-Conversation Response Contamination | 🟡 | [Issue #2833](https://github.com/nearai/ironclaw/issues/2833) |

### Observações Críticas

- **#1697** está aberta há ~32 dias sem resolução clara — documentação de modelos está aquém das necessidades dos usuários
- **3 canary failures simultâneas** no mesmo commit requerem investigação urgente antes da promoção para main
- **Issue #2987** (Reborn integration plan) com 7 comentários indica diskusi internal intensa sobre processo de release

---

## Métricas Resumidas (24h)

| Métrica | Valor | Tendência |
|---------|-------|-----------|
| Issues abertas/ativas | 9 | ➡️ Estável |
| Issues fechadas | 1 | ⬇️ Baixa |
| PRs abertos | 25 | 🔺 Alta |
| PRs merged/fechados | 5 | 🔺 Alta |
| Releases | 0 | ➡️ Nenhuma |
| Falhas de canary | 3 | ⚠️ Alerta |
| Bugs críticos | 3 | ⚠️ Atenção |

---

*Relatório gerado automaticamente com base nos dados do GitHub de [nearai/ironclaw](https://github.com/nearai/ironclaw) em 2026-04-28.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório de Projeto — CoPaw
## Data: 2026-04-28

---

## 1. Panorama do dia

O CoPaw demonstra **atividade intensa e saudável** nas últimas 24h, com 50 issues e 43 PRs atualizados — números que revelam uma comunidade engajada e um ritmo de desenvolvimento acelerado. Não houve lançamento de nova versão, embora o PR #3879 tenha preparado o bump para `1.1.4.post3`, sinalizando que uma patch correcional está em estágio final de consolidação. O balanceamento entre issues abertas (25) e fechadas (25) sugere uma capacidade sólida de triagem e resolução, enquanto a alta proporção de PRs fechados/merged (25 de 43) evidencia maturidade no processo de revisão. Não há sinais de estagnação ou crises críticas; a atividade predominantemente ocorre em bugs, melhorias de canais e refinamentos de UI.

---

## 2. Lançamentos

**Nenhuma release nova** registrada nas últimas 24h.

> O projeto não publicou versões formais no período. O PR [#3879](https://github.com/agentscope-ai/QwenPaw/pull/3879) (`chore(version): bumping version to 1.1.4.post3`) indica que uma correção de patch está em preparação, provavelmente para endereçar bugs reportados nos dias anteriores. Recomenda-se monitorar a aba Releases em breve.

---

## 3. Progresso do Projeto

### PRs relevantes merged/fechados nas últimas 24h:

| PR | Autor | Tema | Impacto |
|----|-------|------|---------|
| [#3887](https://github.com/agentscope-ai/QwenPaw/pull/3887) | bxy3045134656 | **QQ voice message type mapping** | Corrige distinção entre mensagens de voz (.amr/.silk/.slk) e áudios regulares (.mp3/.wav) no canal QQ, garantindo que mensagens de voz sejam renderizadas como bolhas de áudio e não cards de arquivo |
| [#3874](https://github.com/agentscope-ai/QwenPaw/pull/3874) | qbc2016 | **Model retry logic refinement** | Aprimora robustez nas chamadas de modelo com lógica de retry melhorada — impacto direto na estabilidade de agentes |
| [#3885](https://github.com/agentscope-ai/QwenPaw/pull/3885) | jinglinpeng | **Backup error logging** | Melhora logs de exceção no módulo de backup/restore com stack traces, facilitando diagnóstico de falhas |
| [#3880](https://github.com/agentscope-ai/QwenPaw/pull/3880) | hongxicheng | **WeChat CLI display name rename** | Correção cosmetic de nomenclatura no CLI |
| [#3877](https://github.com/agentscope-ai/QwenPaw/pull/3877) | hongxicheng | **CI test directory path fix** | Corrige caminho de diretório de testes de integração no `tests.yml` |
| [#3834](https://github.com/agentscope-ai/QwenPaw/pull/3834) | shadowabi | **ACP config inheritance in fallback agent** | Corrige bug onde `acp` field era omitido em `build_fallback_agent_profile_config()`, causando fallback para `command="opencode"` sem extensão — impacta configurações de agentes externos |
| [#3638](https://github.com/agentscope-ai/QwenPaw/pull/3638) | ideal | **Docker build directory cleanup** | Remove diretório build da imagem Docker após `pip install`, reduzindo tamanho da imagem |

### PRs abertos aguardando revisão (prioridade):

| PR | Autor | Tema | Estágio |
|----|-------|------|---------|
| [#3829](https://github.com/agentscope-ai/QwenPaw/pull/3829) | ekzhu | Geração assíncrona de títulos de sessão via LLM | Under Review |
| [#3848](https://github.com/agentscope-ai/QwenPaw/pull/3848) | suntp | Hardened context compaction fallback | Under Review |
| [#3876](https://github.com/agentscope-ai/QwenPaw/pull/3876) | bowenliang123 | Refatoração do seletor de modelos em lista pesquisável | Open |
| [#3889](https://github.com/agentscope-ai/QwenPaw/pull/3889) | sun905 | Progress observing hook + inter-agent task progress | Open |
| [#3793](https://github.com/agentscope-ai/QwenPaw/pull/3793) | wangyong00 | Fix de indentação em `rebuild_sys_prompt` | Under Review |

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários + reações):

1. **[#3709](https://github.com/agentscope-ai/QwenPaw/issues/3709)** — 9 comentários · `[Bug]` Safe guard rule desabilitada ainda bloqueia comandos  
   *Destaque: Usuário reporta que desabilitar `TOOL_CMD_IFS_INJECTION` não previne bloqueios em comandos com subshell (ex: `git commit -m "Auto commit at $(date)"`). Afeta cron jobs e automações. Closed.*

2. **[#3753](https://github.com/agentscope-ai/QwenPaw/issues/3753)** — 7 comentários · `[Question]` Quando o "火山 coding plan" será suportado nativamente?  
   *Usuários aguardam integração com o modelo Volcano (ByteDance). Closed — sem resolução visível.*

3. **[#3430](https://github.com/agentscope-ai/QwenPaw/issues/3430)** — 7 comentários · `[Question]` Qual a relação entre QwenPaw e CoPaw? Serão mantidos juntos?  
   *Destaque: Issue indica confusão na identidade do projeto. A brand "QwenPaw" domina nos issues, mas o repo oficial é CoPaw. **Pergunta estratégica** que o projeto deveria esclarecer publicamente.*

4. **[#3705](https://github.com/agentscope-ai/QwenPaw/issues/3705)** — 6 comentários · `[Bug]` ACP coding agent operations randomly cancelled  
   *Reprodução: QwenPaw como orquestrador + Qwen Code como agente externo; operações são canceladas aleatoriamente. Closed.*

5. **[#3869](https://github.com/agentscope-ai/QwenPaw/issues/3869)** — 6 comentários · `[Feature]` Channel-side high-risk command approval  
   *Demanda forte: usuários querem aprovar comandos perigosos via canal (não apenas via Web Console). Impacta UX em cenários mobile/headless.*

### Análise de tendências:

- **Canais de comunicação** dominam discussions: WeChat (#3837, #2875), Feishu (#3862), QQ (#3845/3887), DingTalk (#3804) — evidência de ecossistema multi-canal robusto sendo priorizado pela comunidade.
- **Questões de estabilidade** aparecem em múltiplas frentes: WebView2 (#3601), ChromeDB segfault (#3854), MCP deadlocks (#3822), SSE stream (#3871).
- A **questão de identidade** (#3430) merece atenção: a coexistência de "CoPaw" como repo e "QwenPaw" como produto gera confusão.

---

## 5. Bugs e Estabilidade

### Bugs críticos/alta severidade:

| Issue | Descrição | Canal | Status |
|-------|-----------|-------|--------|
| [#3854](https://github.com/agentscope-ai/QwenPaw/issues/3854) | **chromadb SIGSEGV** — segmentation fault no Rust binding mata todo o processo Python. 45+ ocorrências em uma única sessão (Ubuntu 25.10, Python 3.13) | Core | **OPEN** |
| [#3822](https://github.com/agentscope-ai/QwenPaw/issues/3822) | **MCP deadlocks** — Bing Search MCP causa freeze infinito do chat, não UI freeze | Core/MCP | **OPEN** |
| [#3871](https://github.com/agentscope-ai/QwenPaw/issues/3871) | **SSE stream não fecha** — Agent entra em "Thinking" infinito após resposta completa | Core | **OPEN** |
| [#3850](https://github.com/agentscope-ai/QwenPaw/issues/3850) | **Botão pausar inoperante** — frontend para de renderizar mas backend continua executando | Console | **OPEN** (👍 1) |

### Bugs de média severidade:

| Issue | Descrição | Canal | Status |
|-------|-----------|-------|--------|
| [#3843](https://github.com/agentscope-ai/QwenPaw/issues/3843) | Session history desaparece e mensagens vão para sessão diferente | Console | **OPEN** |
| [#3853](https://github.com/agentscope-ai/QwenPaw/issues/3853) | Página congela ao salvar model settings no Debian 12 (WebUI freeze) | Console | **OPEN** |
| [#3824](https://github.com/agentscope-ai/QwenPaw/issues/3824) | Configurações de agent (plan mode, LLM config) perdidas após refresh/restart | Console | **CLOSED** |
| [#3817](https://github.com/agentscope-ai/QwenPaw/issues/3817) | Config de vetor model em long-term memory resetada após container restart | Config | **CLOSED** |
| [#3795](https://github.com/agentscope-ai/QwenPaw/issues/3795) | Erros 422 `MODEL_EXECUTION_FAILED` frequentes após operações complexas | Core | **CLOSED** |
| [#3749](https://github.com/agentscope-ai/QwenPaw/issues/3749) | Install script falha no upgrade | CLI | **CLOSED** |

### Bugs de baixa severidade/resolvidos:
- [#3837] Mensagens no WeChat truncadas após ~10 mensagens sequenciais
- [#3862] Feishu exibe resposta "palavra por palavra" após update 1.1.4
- [#3601] WebView2 initialization failed no Windows
- [#3709] Safe guard rule não respeita desativação
- [#3705] ACP coding agent operations cancelled aleatoriamente

> **Sinal de alerta**: O crash do chromadb (#3854) com 45+ ocorrências é o bug mais sério do período — não há exception handling Python-level para capturar SIGSEGV. Recomenda-se priorização urgente.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features com maior demanda:

| Issue | Feature | Impacto | Status |
|-------|---------|---------|--------|
| [#3366](https://github.com/agentscope-ai/QwenPaw/issues/3366) | **Token consumption display em tempo real** | Dash de uso de tokens com barra de progresso e alertas de budget | **OPEN** (👍 1) |
| [#406](https://github.com/agentscope-ai/QwenPaw/issues/406) | **Suporte a GitHub Copilot models** | Integração com modelos Copilot (OpenClaw já suporta) | **OPEN** |
| [#3869](https://github.com/agentscope-ai/QwenPaw/issues/3869) | **High-risk command approval via channel** | Aprovação de comandos perigosos por canais (não apenas Web Console) | **OPEN** |
| [#3804](https://github.com/agentscope-ai/QwenPaw/issues/3804) | **Proactive messages para canais customizados** (Feishu, DingTalk) | Enviar mensagens proativas para canais além do Console | **OPEN** |
| [#2655](https://github.com/agentscope-ai/QwenPaw/issues/2655) | **browser_use para Apple Silicon (ARM64)** | Suporte nativo ARM no macOS M1/M2/M3/M4 | **OPEN** |
| [#2875](https://github.com/agentscope-ai/QwenPaw/issues/2875) | **WeChat channel enhancement** (paridade com openclaw-weixin v2.1.3) | Paridade de features com plugin oficial Tencent | **CLOSED** (revisitado) |

### Sinais de roadmap emergentes:
- **UX de sessão**: geração de títulos via LLM (#3829), history persistence (#3843) — indica foco em qualidade de conversação
- **Inter-agent progress tracking**: PR #3889 implementa `ProgressObservingHook` + `check_agent_task(detail=True)` — habilidade avançada de orchestration
- **Context management**: PR #3882 e #3848 hardening de compaction fallback — evidência de foco em memory/scalability
- **UI refinements**: refatoração de model selector (#3876) — sinal de amadurecimento da interface

> **Nota estratégica**: A demanda por GitHub Copilot model support (#406) e Token display (#3366) sinaliza profissionalização do usuário — o projeto está se movendo além de hobbyists para workflows de desenvolvimento corporativo.

---

## 7. Resumo de Feedback dos Usuários

### Dores recorrentes:

1. **Instabilidade de sessão** — usuários experimentam perda de histórico (#3843), config reset (#3824, #3817), e freeze de UI (#3853). Isso mina a confiança em workflows de longa duração.

2. **Fragmentação de canais** — WeChat truncation (#3837), Feishu word-by-word output (#3862), lack de approval em canais (#3869) revelam que multi-channel é desejado mas incompletamente implementado.

3. **Dependência do Web Console** — restrições a approvals via Web UI limitam usage em ambientes headless/cloud. Canal-side approval é demanda genuína.

4. **Crashes de alta severidade** — chromadb SIGSEGV (#3854) e MCP deadlocks (#3822) são blockers para produção. Stack trace do 3795 (MODEL_EXECUTION_FAILED) indica problemas estruturais em execução de ferramentas.

### Cenários de uso evidenciados:
- **DevOps/Cron**: Comando `git commit -m "Auto commit at $(date)"` em cron jobs (#3709) — automação de CI/CD com agents
- **Orchestration multi-agent**: QwenPaw orquestrando Qwen Code (#3705) — padrões de agent composition
- **Enterprise deployment**: Ubuntu 25.10, Debian 12, Docker self-hosted — indicam adoção em produção
- **Mobile/channel-first**: usuários interagem via WeChat, Feishu, DingTalk — não apenas Console

### Satisfação:
- Atividade de contributors é alta: múltiplos first-time contributors (PRs #3845, #3890, #3887, #3881, #3638, #3872)
- Bugs de baixa severidade estão sendo fechados rapidamente (turnaround de 1-2 dias)
- Feature requests técnicos (#3829, #3876) demonstram usuários power-user investindo no projeto

---

## 8. Backlog que Merece Atenção

### Issues antigas (>7 dias) sem resolução ou sem resposta de mantenedor:

| Issue | Idade | Tipo | Status | Prioridade |
|-------|-------|------|--------|------------|
| [#3430](https://github.com/agentscope-ai/QwenPaw/issues/3430) | 13 dias | Question | **OPEN** | **Alta** — pergunta estratégica sobre relação CoPaw/QwenPaw sem resposta |
| [#3499](https://github.com/agentscope-ai/QwenPaw/issues/3499) | 12 dias | Bug | **OPEN** | **Alta** — page access slow (API models endpoint) |
| [#2655](https://github.com/agentscope-ai/QwenPaw/issues/2655) | 28 dias | Feature | **OPEN** | **Média** — Apple Silicon browser_use |
| [#406](https://github.com/agentscope-ai/QwenPaw/issues/406) | 56 dias | Feature | **OPEN** | **Média** — GitHub Copilot models |
| [#2252](https://github.com/agentscope-ai/QwenPaw/issues/2252) | 34 dias | Bug | **CLOSED** | Resolvido |

### PRs em limbo (abertos >3 dias sem ação):

| PR | Idade | Tema | Status |
|----|-------|------|--------|
| [#3829](https://github.com/agentscope-ai/QwenPaw/pull/3829) | 3 dias | Session title via LLM | Under Review |
| [#3845](https://github.com/agentscope-ai/QwenPaw/pull/3845) | 2 dias | QQ audio/SILK

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-04-28

## 1. Panorama do Dia

O projeto ZeroClaw apresenta **atividade intensa de PRs** nesta data, com 50 pull requests atualizados nas últimas 24h (37 abertos, 13 merged/fechados). Não foram registradas novas issues ou releases no período. A atividade concentra-se majoritariamente em contribuições de código, com destaque para correções de bugs críticos no gateway e web dashboard, além de adições de novos canais de comunicação. O ecossistema demonstra maturidade operacional com manutenções regulares de segurança e infraestrutura.

---

## 2. Lançamentos

**Nenhum novo release** foi publicado nas últimas 24 horas. O projeto não registrou tags ou versões novas no período analisado.

---

## 3. Progresso do Projeto

**PRs merged/fechadas hoje (4):**

| # | PR | Autor | Mudança |
|---|-----|-------|---------|
| [#5096](https://github.com/zeroclaw-labs/zeroclaw/pull/5096) | `fix(web): guard against undefined in dashboard .slice() calls` | rareba | Correção de crash no dashboard quando API retornava null/undefined no lugar de arrays |
| [#1347](https://github.com/zeroclaw-labs/zeroclaw/pull/1347) | `fix(provider): preserve reasoning_content in tool-call conversation history` | vernonstinebaker | Manutenção de campos `reasoning_content` para modelos de reasoning (Kimi K2.5, GLM-4.7, DeepSeek-R1) com tool calls |
| [#6069](https://github.com/zeroclaw-labs/zeroclaw/pull/6069) | `fix(gateway): add missing /api/channels route` | tonsiasy | Registro da rota GET `/api/channels` que estava retornando `index.html` por engano |
| [#6083](https://github.com/zeroclaw-labs/zeroclaw/pull/6083) | `feat(web): add chat message deletion, clear-all, and compact mode` | theonlyhennygod | Funcionalidades de exclusão de mensagens individuais, limpar tudo e modo compacto no chat |

**Avanços significativos:**
- **#1347** resolve problema crítico de perda de dados de raciocínio em modelos de IA que utilizam tool-calling com campos de reasoning, melhorando a qualidade de conversas que dependem desses modelos.
- **#6083** traz melhorias de UX importantes para a interface de chat do usuário.

---

## 4. Temas Quentes da Comunidade

**PRs em destaque por impacto:**

| # | Título | Comentários | Área | Impacto |
|---|--------|-------------|------|---------|
| [#6159](https://github.com/zeroclaw-labs/zeroclaw/pull/6159) | `fix(gateway): record cost and token usage on every gateway turn` | — | Gateway | **P1** — Resolve problema onde clientes precisavam de round-trip adicional para obter dados de custo/tokens |
| [#6101](https://github.com/zeroclaw-labs/zeroclaw/pull/6101) | `feat(webui): hot-switch model & preserve chat context across page navigation` | — | WebUI | Permite trocar modelo sem perder contexto da conversa durante navegação |
| [#6056](https://github.com/zeroclaw-labs/zeroclaw/pull/6056) | `feat(onboard): generic OpenAI-compat /v1/models fallback for unknown providers` | — | Onboarding | Suporte a provedores OpenAI-compatíveis fora da allowlist de ~27 provedores |
| [#6033](https://github.com/zeroclaw-labs/zeroclaw/pull/6033) | `feat(tools): SessionsCurrentTool — expose active session identity` | — | Tools | Expõe identidade da sessão ativa para agentes, resolvendo problema de identificação confiável |

**Análise:** As demandas concentram-se em três eixos:
1. **Melhoria de observabilidade** (tokens, custos, métricas)
2. **Flexibilização de providers** (novos provedores de IA)
3. **Experiência de uso** (troca dinâmica de modelos, preservação de contexto)

---

## 5. Bugs e Estabilidade

**Bugs críticos (P1) — Abertos:**

| # | Título | Severidade | Área |
|---|--------|------------|------|
| [#6159](https://github.com/zeroclaw-labs/zeroclaw/pull/6159) | `fix(gateway): record cost and token usage on every gateway turn` | **risk: medium, P1** | Gateway |
| [#6161](https://github.com/zeroclaw-labs/zeroclaw/pull/6161) | `fix(web): dashboard bugfix bundle (Overview crash, model save, editor caret, chat CPU)` | **risk: low, P1** | Web |

**Bug de gateway (#6159):** O WebSocket done frame não carregava usage de tokens. Clientes precisavam de round-trip adicional para `/api/cost` — que por sua vez retornava zero. **Impacto:** Falha na medição de custos e consumo de tokens em tempo real.

**Bundle de bugs web (#6161):**
- Crash no render da Overview quando `/api/health` omitia o mapa de componentes
- Problemas com salvamento de modelo
- Bugs de cursor no editor
- Alto uso de CPU no chat

**Bug de segurança (P2):**

| # | Título | Severidade |
|---|--------|------------|
| [#6152](https://github.com/zeroclaw-labs/zeroclaw/pull/6152) | `fix(security): cargo update + deny.toml audit (2026-04-27)` | dependencies, security |

**Manutenção de segurança em andamento:** Atualização de 78 packages incluindo `hyper-rustls`, `aws-lc-rs`, `axum`, entre outros.

---

## 6. Pedidos de Features e Sinais de Roadmap

**Novas funcionalidades em desenvolvimento (10 PRs abertos):**

| # | Feature | Área | Tamanho | Risco |
|---|---------|------|---------|-------|
| [#6166](https://github.com/zeroclaw-labs/zeroclaw/pull/6166) | `feat(channels): add WeChat personal account via iLink Bot` | Channels | — | — |
| [#6164](https://github.com/zeroclaw-labs/zeroclaw/pull/6164) | `feat(cron): manually trigger cron from webui` | Cron | — | — |
| [#6130](https://github.com/zeroclaw-labs/zeroclaw/pull/6130) | `feat(channel): recover WeChat iLink Bot channel` | Channels | — | medium |
| [#6101](https://github.com/zeroclaw-labs/zeroclaw/pull/6101) | `feat(webui): hot-switch model & preserve chat context` | WebUI | M | medium |
| [#6056](https://github.com/zeroclaw-labs/zeroclaw/pull/6056) | `feat(onboard): generic OpenAI-compat fallback for unknown providers` | Onboard | S | risk: manual |
| [#6033](https://github.com/zeroclaw-labs/zeroclaw/pull/6033) | `feat(tools): SessionsCurrentTool — expose active session identity` | Tools | L | high |

**Sinal de roadmap claro:**
- **Expansão de canais:** WeChat personal via iLink Bot indica estratégia de diversificação de plataformas de mensagem
- **Flexibilização de providers:** Suporte genérico a provedores OpenAI-compatíveis sugere preparação para adoção mais ampla
- **Controle de execução:** Trigger manual de cron via UI adiciona flexibilidade operacional

---

## 7. Resumo de Feedback dos Usuários

**Dores identificadas a partir dos PRs:**

1. **Instabilidade do dashboard web** — Crashes na Overview e problemas de renderização causam frustração (PRs #5096, #6161, #6162)
2. **Falta de visibilidade de custos** — Ausência de métricas de tokens e custos em tempo real (PR #6159)
3. **Incompatibilidade com novos providers** — Sistema atual bane provedores fora de allowlist (PR #6056)
4. **Perda de contexto na UI** — Navegação entre páginas perdia conversa ativa (PR #6101)
5. **Identificação de sessão** — Agentes não conseguiam identificar em qual sessão estavam operando (PR #6033)

**Destaque positivo:**
- Funcionalidades de **exclusão de mensagens e Clear All** (#6083) indicam demanda por controle de privacidade por parte dos usuários

---

## 8. Backlog que Merece Atenção

| # | Título | Estado | Tempo aberto | Prioridade |
|---|--------|--------|--------------|------------|
| [#1347](https://github.com/zeroclaw-labs/zeroclaw/pull/1347) | `fix(provider): preserve reasoning_content in tool-call conversation history` | **CLOSED** (agora) | ~2 meses | High |
| [#5096](https://github.com/zeroclaw-labs/zeroclaw/pull/5096) | `fix(web): guard against undefined in dashboard .slice() calls` | **CLOSED** (agora) | ~1 mês | Medium |
| [#5985](https://github.com/zeroclaw-labs/zeroclaw/pull/5985) | `fix(infra): add SQLite FTS UPDATE trigger for sessions_fts` | OPEN | ~6 dias | — |

**Análise:** Os PRs #1347 e #5096 estavam em aberto por período significativo antes de serem fechados hoje, indicando possível gargalo na revisão de PRs. A comunidade respondeu bem, com 4 PRs closed today incluindo pelo menos 1 de longa duração.

---

## Indicadores de Saúde do Projeto

| Indicador | Status | Observação |
|-----------|--------|------------|
| Atividade de PRs | 🟢 Alta | 50 PRs atualizados em 24h |
| Releases | 🟡 Nenhuma | Sem novos releases no período |
| Issues | 🔴 Nenhuma | 0 issues atualizadas |
| Bugs críticos | 🟡 Em correção | 2 bugs P1 em revisão |
| Manutenção de segurança | 🟢 Em dia | Audit realizado em 27/04 |
| Dívida técnica | 🟡 Moderada | FTS triggers, web crashes |

---

*Relatório gerado em 2026-04-28 com base nos dados de atividade do GitHub.*

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*