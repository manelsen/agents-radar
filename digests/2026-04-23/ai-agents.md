# Resumo diário do ecossistema de agentes de IA 2026-04-23

> Issues: 7 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-04-22 20:49 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório do Projeto NullClaw — 2026-04-23

---

## 1. Panorama do dia

NullClaw apresenta **atividade moderada** em 23 de abril de 2026, com 7 issues atualizadas nas últimas 24h (5 abertas, 2 fechadas). Não houve PRs ou releases. A atividade concentra-se em **documentação, suporte a plataformas** (WhatsApp Web, WeChat) e **debugging de estabilidade** no componente gateway. O projeto mantém engajamento contínuo da comunidade, com issues gerando até 13 comentários.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto encontra-se em período sem novas versões. Último release estável permanece como referência.

---

## 3. Progresso do projeto

| Tipo | Count |
|------|-------|
| PRs merged/fechadas | 0 |
| Issues fechadas | 2 |

### Issues fechadas hoje (2)

- **[#826]** `[documentation]` How to use nullclaw gateway with Tailscale? — Resolvida com 13 comentários. Demonstra demanda por documentação mais clara sobre integração com VPNs.
- **[#827]** `[bug]` nullclaw channel status contradicts doctor info — Corrigida inconsistência entre outputs de comandos.

**Nota:** Ausência de PRs sugere que a atividade atual é de suporte e triagem, não de desenvolvimento ativo de features.

---

## 4. Temas quentes da comunidade

### Por volume de comentários

| Issue | Comentários | Tipo |
|-------|-------------|------|
| [#826] Tailscale + Gateway | 13 | Documentation |
| [#183] WhatsApp Web via Baileys | 4 | Feature Request |
| [#851] Busy-loop CPU | 3 | Bug |
| [#817] WeChat QR Code | 1 | Question |

### Análise das demandas

**[#826] Tailscale + Gateway** (RESOLVIDA)
- Usuário enfrentava `NotImplemented` ao iniciar tunnel no Debian VPS
- Alta interação (13 comentários) indica complexidade na configuração de gateway em ambientes remotos
- **Sinal:** Documentação de deployment precisa de seção dedicada a VPNs/túneis

**[#183] WhatsApp Web via Baileys** 🔥
- Feature request com 2 👍 e 4 comentários
- Atualmente NullClaw só suporta Meta Business Cloud API (complexa)
- Demanda por alternativa mais simples via Baileys (QR code local)
- **Sinal forte de roadmap:** Suporte a WhatsApp Web é esperado pela comunidade

---

## 5. Bugs e estabilidade

### Bugs abertos

| Issue | Severidade | Descrição | Comentários |
|-------|------------|-----------|-------------|
| **[#851]** | **Alta** | Busy-loop em `accept4()` causando 100% CPU em Raspberry Pi 5 (Debian aarch64) | 3 |

### Detalhamento — #851: Busy-loop CPU

```
Comportamento: accept4() retorna EAGAIN repetidamente
Ambiente: Raspberry Pi 5 (8GB), Debian 13 (trixie) aarch64
Impacto: 100% de 1 core CPU em idle
```

- Bug **reproduzível e isolado** (ambiente específico ARM64)
- Requer atenção prioritária para estabilidade em edge devices
- **Severidade Alta:** Afeta usabilidade em hardware popular

### Outros problemas

| Issue | Severidade | Descrição |
|-------|------------|-----------|
| [#827] | Média | Conflito output `channel status` vs `doctor` — **RESOLVIDA** |
| [#860] | Baixa | Output do comando `capabilities` hard to read — **Aberto** |

---

## 6. Pedidos de features e sinais de roadmap

### Novas solicitações abertas

| Issue | Feature | 👍 | Complexidade |
|-------|---------|----|--------------|
| **[#183]** | WhatsApp Web via Baileys (QR Code) | 2 | Alta |
| **[#860]** | Melhorar formatação output `capabilities` | 0 | Baixa |

### Análise de roadmap

**[#183] WhatsApp Web via Baileys — PRIORIDADE MÉDIA**
```
Situação atual: Apenas Meta Business Cloud API
- Requer conta business
- Requer tokens de acesso
- Requer Phone Number ID
- Requer configuração webhook

Solicitado: Suporte via Baileys (alternativa peer-to-peer)
- Login via QR Code local
- Sem dependência de infraestrutura Meta
```

- 4 comentários indicam discussão ativa sobre viabilidade
- **Sinal:** Comunidade busca autonomia e simplificação de integração WhatsApp

**[#860] Melhoria no output `capabilities`**
- Suggestão de formatação colorida/tabular
- Baixa complexidade, alto valor de UX

**[#861] Web UI em VPS headless**
- Pergunta de configuração sem resposta ainda
- **Sinal:** Usuários avançados querem CLI-only servers

---

## 7. Resumo de feedback dos usuários

### Dores relatadas

| Categoria | Issue | Sentimento |
|-----------|-------|------------|
| Documentação insuficiente | #826, #861, #817 | Frustração |
| Estabilidade gateway | #851 | Preocupação |
| Complexidade de setup | #183 | Desejo de simplificação |
| UX/output | #860 | Oportunidade de melhoria |

### Análise de sentimentos

**Positivo:**
- Comunidade ativa reportando bugs detalhadamente (strace, ambiente)
- Issue #826 resolvida rapidamente indica resposta eficiente

**Negativo:**
- Usuários perdidos com documentação técnica (#861: "não entendo 70%")
- Bugs em plataformas edge (Raspberry Pi) afetam popular use-case
- Integração WhatsApp considerada complexa demais

### Cenários de uso observados

1. **VPS headless + Tailscale** — acesso remoto via VPN
2. **Raspberry Pi edge** — deployment local/IoT
3. **Multi-plataforma messaging** — WhatsApp, WeChat, browser relay

---

## 8. Backlog que merece atenção

### Issues sem resposta há tempo

| Issue | Criado | Atualizado | Status | Prioridade |
|-------|--------|------------|--------|------------|
| **[#183]** | 2026-03-01 | 2026-04-22 | Aberta | **Alta** (feature request popular) |
| **[#851]** | 2026-04-19 | 2026-04-22 | Aberta | **Urgente** (bug estável) |
| **[#861]** | 2026-04-22 | 2026-04-22 | Aberta | **Média** (suporte) |

### Issues pendentes de triagem (sem comentários)

| Issue | Criado | Tipo |
|-------|--------|------|
| [#861] Web UI headless | 2026-04-22 | Suporte |
| [#860] Capabilities format | 2026-04-22 | Enhancement |

### Recomendação de ações

1. **#851** — Priorizar fix do busy-loop antes de próxima release
2. **#183** — Avaliar viabilidade e responder à comunidade sobre WhatsApp Baileys
3. **#861** — Fornecer guia simplificado para Web UI headless
4. **Documentação** — Criar seção de deployment para Tailscale/VPNs

---

## Métricas de saúde do projeto

| Indicador | Valor | Status |
|-----------|-------|--------|
| Issues ativas (24h) | 5 | 🟡 Moderado |
| PRs merged (24h) | 0 | 🔴 Baixo |
| Bugs críticos abertos | 1 | 🔴 Requer atenção |
| Feature requests | 1+ | 🟡 Em demanda |
| Tempo médio resposta | <24h (observado) | 🟢 Bom |

---

*Relatório gerado em 2026-04-23. Dados: GitHub nullclaw/nullclaw.*

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo do Ecossistema de Agentes de IA Open Source

**Data de Referência:** 2026-04-23
**Projetos Analisados:** NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw (QwenPaw), ZeroClaw

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **atividade intensa e maturação acelerada** em abril de 2026. Projetos como NanoBot (37 PRs), Hermes Agent (50 PRs) e ZeroClaw (35 PRs) demonstram ciclos de desenvolvimento rápidos, enquanto PicoClaw e CoPaw consolida qualidade com releases estruturadas. O mercado converge para necessidades comuns: resiliência de provedores (failover automático), multi-agente orchestration, interoperabilidade via protocolos como A2A/MCP, e experiência em edge devices (Raspberry Pi, Docker). A segurança emerge como preocupação crítica — ZeroClaw, Hermes Agent e PicoClaw possuem vulnerabilidades ou hardenings em tratamento. O rebranding de CoPaw para QwenPaw ilustra tensões entre branding corporativo e continuidade comunitária.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | Releases (24h) | Bugs Críticos | Métricas de Saúde |
|---------|--------------|-----------|----------------|--------------|-------------------|
| **NullClaw** | 7 (5 open) | 0 merged | 0 | 1 alta (busy-loop CPU) | 🟡 Moderado |
| **NanoBot** | 27 | 37 (22 merged) | 0 | 3 abertas | 🟢 Alta atividade, forte ritmo de merge |
| **Hermes Agent** | 50 (47 open) | 50 (6 merged) | 0 | **8 P1/P0** (inclui 1 P0 security) | 🟡 Ativo, mas regressões pesadas |
| **PicoClaw** | 9 (8 open) | 19 (11 merged) | **v0.2.7** | 2 altas | 🟢 Saudável, release produtiva |
| **IronClaw** | 27 | 50 (13 merged) | 0 | 4 canary failures + P1 | 🔴 Sinais de alerta em staging |
| **CoPaw/QwenPaw** | 41 | 48 (27 merged) | **v1.1.3** | 2 críticas | 🟡 Ativo, confusão de rebranding |
| **ZeroClaw** | 36 | 35 | 0 | **7 S1** (workflow bloqueado) | 🔴 Estabilidade comprometida |

**Observações:**
- PicoClaw e CoPaw/Ze­roClaw são únicos com releases recentes; demais projetos estão em ciclo de estabilização
- Hermes Agent e IronClaw lideram volume de PRs, mas carregam dívida de bugs críticos
- NullClaw apresenta menor atividade (7 issues, 0 PRs), indicando foco em suporte/triagem

---

## 3. Posicionamento do Projeto Principal

Analisando os projetos em conjunto, **Hermes Agent** emerge como referência em termos de ecossistema成熟度 (50 PRs/issue activity), enquanto **NanoBot** demonstra melhor equilíbrio entre atividade e estabilidade (37 PRs com 22 merges). **PicoClaw** se destaca pela disciplina de releases e arquitetura modular (Sogou search, provider explícito).

### Vantagens Comparativas

| Projeto | Diferencial Técnico | Tamanho Comunidade | Maturidade |
|---------|---------------------|--------------------|------------|
| **Hermes Agent** | A2A protocol, holographic memory, auto-steward | Maior (NousResearch) | 🟡 Regressões v0.10.0 |
| **NanoBot** | Multi-agente estável, provider fallback, OpenTelemetry | Grande (HKUDS) | 🟢 Bem equilibrado |
| **PicoClaw** | Multimodal (áudio nativo), CI/CD refatorado, provider explícito | Médio (Sipeed) | 🟢 Release disciplinada |
| **IronClaw** | Engine v2, cost-based budgeting, CodeAct | Grande (NearAI) | 🔴 4 canary failures |
| **CoPaw/QwenPaw** | Memory plugável (mem0/Zep), semantic routing, Backup/Restore | Médio (AgentScope) | 🟡 Rebranding confuso |
| **ZeroClaw** | Rust-based, voice duplex, multi-tenant RBAC | Médio (ZeroClaw Labs) | 🔴 S1 workflow bloqueado |
| **NullClaw** | Simplicidade, gateway modular | Pequeno | 🟡 Suporte/documentation |

**Posicionamento estratégico:** Hermes Agent lidera em features avançadas (A2A, multi-agent nativo), masNanoBot oferece caminho mais pragmático para produção. PicoClaw é referência em DX e releases disciplinadas.

---

## 4. Focos Técnicos Compartilhados

Os sete projetos convergem para **cinco necessidades técnicas comuns**:

### 4.1 Resiliência de Provedores (Falha de Provider)
| Projeto | Status | Solução em Progresso |
|---------|--------|---------------------|
| NanoBot | Alta demanda (#3376) | PR #3388 (fallbacks OpenRouter) |
| Hermes Agent | P1: api_key drift (#14134) | Em investigação |
| IronClaw | Provider matrix canary failures | Refatoração de providers (#5937 em ZeroClaw) |
| NullClaw | Baileys como fallback WhatsApp (#183) | Feature request aberto |

**Conclusão:** Failover automático de providers é necessidade universal para uso em produção.

### 4.2 Multi-Agent Orchestration
- **Hermes Agent:** Native Multi-Agent Support (#7517, 5 👍)
- **NanoBot:** Spawn status/cancel tools (#3303), duplicate response fix (#3385)
- **ZeroClaw:** RFC Multi-agent UX flow (#5890)
- **NullClaw:** Suporte multi-canal (WhatsApp, WeChat, Tailscale)

**Conclusão:** Arquiteturas multi-agente estão em evolução em todos os projetos, com desafios comuns de isolamento, comunicação e deduplicação.

### 4.3 Segurança de Arquivos e Sandboxing
- **Hermes Agent:** P0 security — write_file/patch pode modificar arquivos ~/.hermes (#14072)
- **PicoClaw:** WebSocket CSWSH hardening (#2256, 22 dias em aberto)
- **CoPaw/QwenPaw:** Shell invasion guard (#3694) — configurável por check
- **ZeroClaw:** Sandboxing memory_limit ignorado (#5895)

**Conclusão:** Agentes com acesso a filesystem são inerentemente arriscados; cada projeto implementa controles de forma independente.

### 4.4 Edge Devices e Cross-Platform
- **NullClaw:** Busy-loop CPU em Raspberry Pi 5 (#851) — ARM64 aarch64
- **PicoClaw:** WhatsApp em builds ARM64 (#2625), Raspberry Pi Zero 2
- **Hermes Agent:** SQLite FTS5 não disponível em Python 3.11 macOS (#13029)

**Conclusão:** Deployment em edge devices (Raspberry Pi, ARM64) é caso de uso comum que requiere validação específica de plataforma.

### 4.5 Observabilidade e Tracing
- **NanoBot:** OpenTelemetry tracing (#3173), latency_ms em hooks (#3367)
- **Hermes Agent:** Latência exposta em AgentHookContext
- **ZeroClaw:** /api/cost retorna zero sem trace (#6001)

**Conclusão:** Demanda por observabilidade enterprise (Prometheus, Langfuse, LangSmith) é transversal.

---

## 5. Análise de Diferenciação

### 5.1 Foco de Público-Alvo

| Projeto | Público Primário | Caso de Uso Central |
|---------|------------------|---------------------|
| **NullClaw** | Desenvolvedores individuais | Gateway VPN + messaging (Tailscale, WhatsApp) |
| **NanoBot** | Equipes técnicas | Multi-agente análise paralela, pipelines de production |
| **Hermes Agent** | Usuários avançados, pesquisadores | Interoperabilidade (A2A), holographic memory |
| **PicoClaw** | Comunidade Sino-global, IoT | Multimodal (áudio), Raspberry Pi, edge deployment |
| **IronClaw** | Empresas, integradores | Orquestração enterprise (Notion, Matrix), cost budgeting |
| **CoPaw/QwenPaw** | Desenvolvedores神州 | Memory plugável, semantic routing, Windows-focused |
| **ZeroClaw** | Self-hosted, segurança | Rust-based, voice duplex, multi-tenant RBAC |

### 5.2 Diferenças Arquiteturais

| Aspecto | Abordagem |
|---------|-----------|
| **Linguagem** | Rust (ZeroClaw) vs Python-majority (demais) |
| **Modelo de agentes** | Single-agent (NullClaw), multi-agent nativo (Hermes, IronClaw, ZeroClaw), sub-agent spawning (NanoBot) |
| **Canais** | Meta Business API (NullClaw) vs Baileys (solicitado) vs multi-canal completo (NanoBot: Discord, Telegram, DingTalk, Feishu) |
| **Memória** | Hindsight (Hermes), Dream (CoPaw), holographic (Hermes PR), plugável (CoPaw PR #3500) |
| **Provider abstraction** | Explícito com campo `provider` (PicoClaw), routing providers (NanoBot), unified reqwest (ZeroClaw) |

### 5.3 Filosofia de Desenvolvimento

- **PicoClaw:** Releases frequentes e disciplinadas; refatoração CI/CD; community-driven
- **Hermes Agent:** Features ambitious (A2A, multi-agent), mas com regressões frequentes
- **NanoBot:** Pragmático; strong bug-fixing culture; métricas de latência/observabilidade
- **IronClaw:** Epic-driven; engenharia pesada (engine v2, capabilities projection)
- **CoPaw/QwenPaw:** Feature-rich (Backup/Restore, semantic routing), mas confusão de branding

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração

| Projeto | PRs Merged (24h) | Razão Aberto/Fechado | Avaliação |
|---------|------------------|----------------------|-----------|
| **NanoBot** | 22 | 15/22 (0.68) | 🟢 Muito saudável — fecho rápido |
| **CoPaw/QwenPaw** | 27 | 21/27 (0.78) | 🟢 Sadio — releases + merges |
| **PicoClaw** | 11 | 8/11 (0.73) | 🟢 Moderado mas disciplinado |
| **Hermes Agent** | 6 | 44/50 (0.88) | 🟡 Alto volume, mas acúmulo de PRs |
| **IronClaw** | 13 | 37/50 (0.74) | 🟡 Ativo, mas canary failures indicam instabilidade |
| **ZeroClaw** | ~5 (estimado) | 30+/35 (0.86) | 🔴 S1s acumuladas, baixa taxa de resolução |
| **NullClaw** | 0 | 5/7 (0.71) | 🟡 Suporte, não desenvolvimento ativo |

**Ranking de maturidade operacional:**
1. **NanoBot** — melhor equilíbrio velocidade/qualidade
2. **PicoClaw** — releases disciplinadas, bugs corrigidos rapidamente
3. **CoPaw/QwenPaw** — alto volume com releases formais
4. **Hermes Agent** —ambição técnica, mas dívida de bugs
5. **IronClaw** — engenharia robusta, mas staging instável
6. **ZeroClaw** — múltiplos S1s bloqueando workflow
7. **NullClaw** — comunidade pequena, suporte reativo

### 6.2 Qualidade de Bug Reports

| Projeto | Qualidade Observada |
|---------|---------------------|
| **NullClaw** | Alta — strace, ambiente detalhado (#851: accept4() EAGAIN, Raspberry Pi 5) |
| **NanoBot** | Alta — reprodução clara, contexto de multi-agente |
| **Hermes Agent** | Mista — bugs críticos P0/P1 bem documentados, mas regressões indicam gaps de QA |
| **PicoClaw** | Alta — issues com repro steps e stack traces |
| **IronClaw** | Alta — Bug Bash formal (#2583), epic tracking |
| **CoPaw/QwenPaw** | Variada — issues técnicos detalhados, mas confusão de versão |

---

## 7. Sinais de Tendência

### 7.1 Tendências de Mercado Extraídas

**1. Interoperabilidade como Diferencial**
O suporte ao protocolo A2A (Agent-to-Agent) da Google/Linux Foundation emerge como feature estratégica (#514 em Hermes Agent). A comunidade busca comunicação entre agentes heterogêneos — sinal forte de adoção em ecossistemas multi-vendor.

**2. Multimodalidade Além de Imagens**
PicoClaw (#2626) adiciona áudio nativo para LLMs multimodais (Gemini 1.5). Hermes Agent avança com holographic memory. NanoBot melhora suporte a image_url blocks. A fronteira multimodal agora inclui áudio, vídeo e memória persistente.

**3. Provider Abstraction e Failover**
NanoBot (PR #3388), Hermes Agent (fallback_providers), e IronClaw (provider-matrix) demonstram convergência para resiliência de providers. A abstração permite switching entre OpenAI, Anthropic, open-source (llama.cpp), e provedores regionais (Z.AI, Dashscope) sem refatoração.

**4. Edge e Self-Hosted como Prioridade**
NullClaw (Tailscale gateway), PicoClaw (Raspberry Pi), Hermes Agent (CLI/TUI) e ZeroClaw (Rust-based, Docker slim mode) indicam demanda por:
- Deployments em hardware limitado
- Alternativas a cloud providers
- Privacidade e controle de dados

**5. Observabilidade Enterprise**
OpenTelemetry (NanoBot #3173), LangSmith (Hermes Agent), Prometheus hooks (NanoBot #3367) signalizam adoção em ambientes corporativos onde tracing e custo tracking são requisitos.

**6. Memory e Context Management**
Três abordagens emergem:
- **Holographic** (Hermes Agent, PR #14150) — retrieval híbrido FTS + embeddings
- **Dream system** (CoPaw/QwenPaw) — otimização de memória com compaction
- **Pluggable backends** (CoPaw PR #3500) — mem0, Zep, LangMem como plugins

**7. Security Hardening**
Vulnerabilidades em write_file/patch (Hermes Agent P0), WebSocket CSWSH (PicoClaw), e shell invasion (CoPaw) indicam que agentes com acesso a filesystem requerem:
- Sandboxing robusto
- Policy de permissions granular
- Audit trails

### 7.2 Recomendações para Decisores

| Stakeholder | Recomendação |
|-------------|--------------|
| **Desenvolvedores individuais** | NullClaw para simplicidade; PicoClaw para edge/Raspberry Pi |
| **Equipes de produção** | NanoBot pela estabilidade e provider fallback; IronClaw para integrações enterprise (Notion, Matrix) |
| **Pesquisadores** | Hermes Agent para A2A/interoperabilidade e holographic memory |
| **Empresas chinesas** | PicoClaw e CoPaw/QwenPaw com suporte nativo a provedores regionais |
| **Segurança-first** | ZeroClaw (Rust-based) para deployments críticos; monitorar security PRs em todos |

---

*Relatório gerado em 2026-04-23. Fontes: GitHub Issues e PRs dos repositórios analisados. Dados refletem atividade das últimas 24h.*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-04-23

## 1. Panorama do Dia

O NanoBot apresenta **alta atividade comunitária** em 23 de abril de 2026, com 27 issues e 37 PRs atualizados nas últimas 24 horas. Não houve lançamentos de novas versões, indicando que o time está em ciclo de integração. A atividade concentra-se em **melhorias de estabilidade em multi-agente e canais de mensagens**, além de expansão de provedores e observabilidade. A proporção de PRs fechados (22) versus abertos (15) sugere forte ritmo de merge, possivelmente preparando uma release. A comunidade demonstra interesse ativo em recursos de resiliência e failover de providers.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto não publicou novas versões em 2026-04-23. O último ciclo de atividade indica preparação para uma futura release com foco em correções de estabilidade multi-agente, melhorias em canais (Discord, Telegram, DingTalk) e expansão de provedores (Z.AI).

---

## 3. Progresso do Projeto

### PRs Importantes Merged/Fechados

| # | Título | Impacto | Link |
|---|--------|---------|------|
| #3385 | Prevent duplicate responses when sub-agents complete concurrently | **Crítico** — Resolve duplicação de respostas em tarefas multi-subagente simultâneas | [PR #3385](https://github.com/HKUDS/nanobot/pull/3385) |
| #3367 | Expose latency_ms on AgentHookContext | Observabilidade — Permite medição de latência em hooks para Prometheus/tracing | [PR #3367](https://github.com/HKUDS/nanobot/pull/3367) |
| #3383 | Preserve excluded fields in resolve_config_env_vars | Configuração — Corrige drop silencioso de campos excluídos (ex: DreamConfig.cron) | [PR #3383](https://github.com/HKUDS/nanobot/pull/3383) |
| #3387 | Convert image_url blocks inside tool_result content | **Anthropic API** — Corrige rejeição de blocos image_url em tool results | [PR #3387](https://github.com/HKUDS/nanobot/pull/3387) |
| #2037 | Fix builtin skills inaccessible when restrictToWorkspace is enabled | **Regressão** — Restaura acessibilidade de skills built-in em workspaces restritos | [PR #2037](https://github.com/HKUDS/nanobot/pull/2037) |
| #3393 | WebUI image attachments — composer + signed media pipeline | UX — Suporte a imagens no composer (file picker, clipboard, drag-and-drop) | [PR #3393](https://github.com/HKUDS/nanobot/pull/3393) |
| #3171 | Add channel-based filtering for Discord | Discord — Allowlist de canais para resposta do bot | [PR #3171](https://github.com/HKUDS/nanobot/pull/3171) |
| #3388 | Add fallbacks for openrouter | Provedor — Resiliência adicional para OpenRouter | [PR #3388](https://github.com/HKUDS/nanobot/pull/3388) |

### PRs Abertos em Andamento

| # | Título | Relevância | Link |
|---|--------|------------|------|
| #3173 | OpenTelemetry tracing for LLM calls and tools | Observabilidade (Langfuse, LangSmith) | [PR #3173](https://github.com/HKUDS/nanobot/pull/3173) |
| #3207 | Split Zhipu into Z.AI CN/Global/Coding Plan providers | Provedor — Rebranding e especialização | [PR #3207](https://github.com/HKUDS/nanobot/pull/3207) |
| #3303 | Spawn status/cancel tools, domain loop detection | Multi-agente — Gerenciamento de tarefas | [PR #3303](https://github.com/HKUDS/nanobot/pull/3303) |
| #3373 | Gateway lifecycle notification hooks | Infra — on_start/on_stop hooks | [PR #3373](https://github.com/HKUDS/nanobot/pull/3373) |
| #3358 | Model presets for quick model switching | Configuração — Bundles de parâmetros de modelo | [PR #3358](https://github.com/HKUDS/nanobot/pull/3358) |
| #3397 | Discord thread support with session isolation | Discord — Correção deallowlists em threads | [PR #3397](https://github.com/HKUDS/nanobot/pull/3397) |
| #3391 | Heartbeat message delivery fix | Telegram — Reply continuity em heartbeats | [PR #3391](https://github.com/HKUDS/nanobot/pull/3391) |
| #3389 | Heartbeat: prevent reasoning leaks | Estabilidade — Evita vazamento de instruções internas | [PR #3389](https://github.com/HKUDS/nanobot/pull/3389) |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| # | Título | Comentários | 👍 | Status | Link |
|---|--------|-------------|-----|--------|------|
| #2892 | Cron mechanism (tarefas agendadas não executam) | 10 | 0 | OPEN | [Issue #2892](https://github.com/HKUDS/nanobot/issues/2892) |
| #2049 | Missing ability to create skills (regressão) | 8 | 0 | CLOSED | [Issue #2049](https://github.com/HKUDS/nanobot/issues/2049) |
| #2493 | LANGSMITH não funciona após última atualização | 6 | 1 | OPEN | [Issue #2493](https://github.com/HKUDS/nanobot/issues/2493) |
| #2469 | Erro ao chamar Qwen-3.5 (Dashscope) | 6 | 0 | CLOSED | [Issue #2469](https://github.com/HKUDS/nanobot/issues/2469) |
| #2235 | Telegram responses show twice | 6 | 6 | CLOSED | [Issue #2235](https://github.com/HKUDS/nanobot/issues/2235) |
| #3270 | Feature: configurable compaction ratio | 4 | 0 | OPEN | [Issue #3270](https://github.com/HKUDS/nanobot/issues/3270) |
| #3377 | Multi subagent duplicate replies | 3 | 0 | CLOSED | [Issue #3377](https://github.com/HKUDS/nanobot/issues/3377) |
| #3376 | Provider/Model failover automático | 2 | 0 | OPEN | [Issue #3376](https://github.com/HKUDS/nanobot/issues/3376) |
| #3344 | DingTalk file upload issue | 3 | 0 | OPEN | [Issue #3344](https://github.com/HKUDS/nanobot/issues/3344) |
| #3292 | Session-Level Focus Tool | 0 | 0 | OPEN | [Issue #3292](https://github.com/HKUDS/nanobot/issues/3292) |

### Análise de Demandas

**1. Cron mechanism (#2892)** — Usuários esperam que tarefas agendadas criadas via agent funcionem sem restart do gateway. Demanda indica necessidade de **hot-reload de schedules**.

**2. Skill creation regression (#2049)** — Ferramenta skill-creator indisponível após upgrade. Impacta fluxo de trabalho de extensibilidade. **Regressão confirmada** — PR #2037 aborda problema relacionado.

**3. LANGSMITH integration (#2493)** — Remoção de `litellm_provider.py` quebrou integração LangChain. **Breaking change** não documentado que precisa de solução alternativa ou restauração.

**4. Provider failover (#3376)** — Alta demanda por resiliência: quando um provider/model falha (timeout, 429, 5xx), auto-switch para provider alternativo já configurado. **Feature estratégica** alinhada com produção readiness.

**5. Configurable compaction (#3270)** — Comunidade solicita controle sobre trigger point de compaction além de métricas existentes.

---

## 5. Bugs e Estabilidade

### Bugs Abertos (Prioridade)

| # | Severidade | Título | Canais Afetados | Link |
|---|------------|--------|-----------------|------|
| #3390 | 🔴 Alta | Tool Call: "Sorry, I encountered an error" | Telegram | [Issue #3390](https://github.com/HKUDS/nanobot/issues/3390) |
| #3344 | 🟡 Média | DingTalk: file upload + @mention como mensagens separadas | DingTalk | [Issue #3344](https://github.com/HKUDS/nanobot/issues/3344) |
| #3328 | 🟡 Média | DeepSeek "failed to deserialize" error | Telegram | [Issue #3328](https://github.com/HKUDS/nanobot/issues/3328) |
| #970 | 🟡 Média | Subagent max_iterations hardcoded a 15 | Multi-agente | [Issue #970](https://github.com/HKUDS/nanobot/issues/970) |
| #173 | 🟠 Baixa | API key reuse despite .config update | Configuração | [Issue #173](https://github.com/HKUDS/nanobot/issues/173) |

### Bugs Recentemente Fechados

| # | Título | Link |
|---|--------|------|
| #3385 | Duplicate responses when sub-agents complete concurrently | [PR #3385](https://github.com/HKUDS/nanobot/pull/3385) |
| #3387 | Anthropic image_url blocks rejection | [PR #3387](https://github.com/HKUDS/nanobot/pull/3387) |
| #2037 | Builtin skills inaccessíveis com restrictToWorkspace | [PR #2037](https://github.com/HKUDS/nanobot/pull/2037) |
| #2235 | Telegram responses duplicadas | [Issue #2235](https://github.com/HKUDS/nanobot/issues/2235) |
| #3377 | Multi subagent repeated reply | [Issue #3377](https://github.com/HKUDS/nanobot/issues/3377) |
| #2465 | RoutingProvider quebrando OAuth providers (OpenAI Codex) | [Issue #2465](https://github.com/HKUDS/nanobot/issues/2465) |
| #3360 | Suporte a gpt-5.x via github_copilot quebrado | [Issue #3360](https://github.com/HKUDS/nanobot/issues/3360) |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Solicitadas Recentemente

| # | Categoria | Título | Demanda | Link |
|---|-----------|--------|---------|------|
| #3376 | Resiliência | Provider/Model Failover automático | **Alta** — Prod readiness | [Issue #3376](https://github.com/HKUDS/nanobot/issues/3376) |
| #3292 | UX/Agent | Session-Level Focus Tool para tarefa persistente | **Média** — Workflow interrompa-e-retoma | [Issue #3292](https://github.com/HKUDS/nanobot/issues/3292) |
| #3270 | Config | Compaction ratio configurável | **Média** — Controle de trigger point | [Issue #3270](https://github.com/HKUDS/nanobot/issues/3270) |
| #2112 | Busca | Web search com fallback automático | **Média** — Resiliência de ferramentas | [Issue #2112](https://github.com/HKUDS/nanobot/issues/2112) |
| #2257 | Canal | Mudança de modelo via comando Telegram | **Baixa** — UX Telegram | [Issue #2257](https://github.com/HKUDS/nanobot/issues/2257) |
| #3397 | Canal | Discord full thread support | **Média** — Correção de allowlist | [PR #3397](https://github.com/HKUDS/nanobot/pull/3397) |

### Sinais de Roadmap Identificados

1. **Observabilidade completa** — OpenTelemetry tracing (#3173) + latência em hooks (#3367) indicam foco em monitoração enterprise
2. **Resiliência de provedores** — Demanda clara por failover automático (#3376) e fallbacks (#3388, #2112)
3. **Multi-agente robusto** — Ferramentas de spawn (#3303), deduplicação (#3385), loop detection
4. **Provedores Z.AI** — Rebranding de Zhipu com variantes CN/Global/Coding (#3207)
5. **Presets de modelo** — Quick switching sem reconfigure manual (#3358)

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais Reportadas

| Dor | Cenário | Impacto |
|-----|---------|---------|
| **Regressões após update** | Usuários enfrentam skill-creator indisponível (#2049) e LangSmith quebrado (#2493) após upgrade | ⬆️ Alta frustração — quebra expectativas de compatibilidade |
| **Instabilidade multi-agente** | Tarefas com subagentes simultâneos geram respostas duplicadas (#3377) | ⬆️ Crítico — impacto direto em productivity |
| **Resiliência de provider insuficiente** | Timeout/429 em único provider não faz failover automático (#3376) | ⬆️ Alta — barreia uso em produção |
| **Telegram UX problemática** | Respostas duplas (#2235), tool call errors (#3390), heartbeat non-actionable (#2582) | ⬆️ Média — degrada experiência de chat |
| **Cron não funciona dinamicamente** | Tarefas agendadas requerem restart do gateway (#2892) | ⬆️ Média — workflow anticlimático |
| **Config persistente** | API key antiga persiste apesar de update (#173) | ⬇️ Baixa masannoying |

### Cenários de Uso Destacados

- **Agentes de análise simultânea**: Usuários querem criar 3+ subagentes para análise paralela com resumo final (#3377)
- **Operações críticas**: Necessidade de provider failover para pipelines que não podem falhar (#3376)
- **Integração enterprise**: LangSmith e OpenTelemetry para observabilidade (#2493, #3173)
- **Web scraping resiliente**: Suporte a Cloudflare bypass (#3382)

### Satisfação Geral

**Mista com tendência positiva**: A comunidade demonstra engajamento ativo (30+ issues/PRs/dia). Correções recentes (#3385, #2037) endereçam dores crônicas. No entanto, regressões (skill-creator, LangSmith) e a falta de provider failover geram frustração em用例 de produção.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Abandonadas

| # | Idade | Título | Prioridade | Motivo da Atenção |
|---|-------|--------|------------|-------------------|
| #173 | ~78 dias | API key reuse despite .config update | 🟠 Baixa | Persistência de problema de configuração |
| #970 | ~61 dias | Subagent max_iterations hardcoded a 15 | 🟡 Média | Causa timeout silencioso em tarefas longas |
| #2892 | ~16 dias | Cron mechanism design issue | 🟡 Média | Design question

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-04-23

---

## 1. Panorama do Dia

O Hermes Agent registrou alta atividade nas últimas 24 horas, com **50 issues e 50 PRs atualizados**. A atividade concentra-se em correções de bugs de estabilidade (P1) — incluindo falhas críticas no WhatsApp streaming, problemas de API key drift e vulnerabilidades de segurança no sistema de arquivos — além de progressos significativos em melhorias de UX no TUI e correções de streaming. Não houve novos lançamentos, indicando que a equipe está em ciclo de estabilização antes de uma próxima release.

---

## 2. Lançamentos

**Nenhum novo release nas últimas 24h.**

O projeto encontra-se em período pré-release, com foco em correções de bugs críticos para a versão v0.10.x.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados Hoje

| PR | Título | Impacto |
|----|--------|---------|
| [#14151](https://github.com/NousResearch/hermes-agent/pull/14151) | fix(streaming): silent retry when stream dies mid tool-call | **Alto** — Elimina warnings "⚠ Stream stalled" para usuários em streams SSE instáveis |
| [#14138](https://github.com/NousResearch/hermes-agent/pull/14138) | fix(tui): blitz closeout pack 2 — background startup + Alacritty clean boot | **Médio** — Corrige inicialização em background e compatibilidade com Alacritty |
| [#14103](https://github.com/NousResearch/hermes-agent/pull/14103) | fix(tui): blitz closeout pack 1 — input wrap, shift-tab yolo, bottom statusline | **Médio** — Resolve flickers de word-wrap e problemas de navegação no TUI |
| [#1866](https://github.com/NousResearch/hermes-agent/pull/1866) | fix: make CLI status bar skin-aware | **Médio** — Adiciona suporte a temas de cor para a barra de status |

**Resumo do avanço:** As correções de streaming (#14151) e TUI (#14138, #14103) representam concretização de melhorias pendentes do "TUI v2 blitz test", indicando maturidade do componente. O PR #1866 demonstra evolução do sistema de skins do CLI.

---

## 4. Temas Quentes da Comunidade

### Issues/PRs com Maior Engajamento

| Issue/PR | Título | Comentários | 👍 | Análise |
|----------|--------|-------------|-----|---------|
| [#514](https://github.com/NousResearch/hermes-agent/issues/514) | A2A (Agent-to-Agent) Protocol Support | 7 | 0 | **Destaque máximo** — Suporte ao protocolo A2A da Google/Linux Foundation para comunicação inter-agentes, complementar ao MCP. Demanda de interoperabilidade crescente na comunidade. |
| [#7517](https://github.com/NousResearch/hermes-agent/issues/7517) | Native Multi-Agent Support | 6 | 5 | **Feature mais desejada** — Arquitetura multi-agente isolados com sessões, personas e ferramentas separadas. Similar ao OpenClaw. |
| [#3505](https://github.com/NousResearch/hermes-agent/issues/3505) | Queue inbound messages per session | 5 | 3 | Problema de reliability: mensagens consecutivas sobrescrevem estado, causando interrupções. |
| [#4256](https://github.com/NousResearch/hermes-agent/issues/4256) | Support configurable keybindings via config.yaml | 2 | 3 | Demanda de acessibilidade: teclas hardcoded conflitam com tmux/screen. |

**Análise:** A comunidade sinaliza forte interesse em **interoperabilidade (A2A)** e **multi-tenancy (multi-agent)**, indicando que o projeto está sendo adotado em cenários mais complexos de produção. A demanda por keybindings configuráveis reflete uso em ambientes especializados.

---

## 5. Bugs e Estabilidade

### Bugs P1 (Críticos — 7 reportados)

| Issue | Título | Severidade | Link |
|-------|--------|------------|------|
| #12925 | WhatsApp streaming broken: edit_message() rejects 'finalize' kwarg | P1 | [Issue #12925](https://github.com/NousResearch/hermes-agent/issues/12925) |
| #14134 | api_key drift on provider switch — real Hermes bug | P1 | [Issue #14134](https://github.com/NousResearch/hermes-agent/issues/14134) |
| #14105 | fallback_providers ignores key_env — only reads api_key field | P1 | [Issue #14105](https://github.com/NousResearch/hermes-agent/issues/14105) |
| #14036 | gateway exits 0 mid-turn with memory.provider: byterover (SIGPIPE flood) | P1 | [Issue #14036](https://github.com/NousResearch/hermes-agent/issues/14036) |
| #13029 | Session store fails when SQLite lacks FTS5 module (Python 3.11 macOS) | P1 | [Issue #13029](https://github.com/NousResearch/hermes-agent/issues/13029) |
| #14072 | **Security**: write_file/patch can modify ~/.hermes control-plane files | **P0** | [Issue #14072](https://github.com/NousResearch/hermes-agent/issues/14072) |
| #12922 | post_tool_call hook not invoked for built-in tools | P1 | [Issue #12922](https://github.com/NousResearch/hermes-agent/issues/12922) |

### Bugs P2 (Altos — 13 reportados)

Destaques:
- **Memory leak**: Hindsight ainda vaza `aiohttp ClientSession` após fix #4762 ([#11923](https://github.com/NousResearch/hermes-agent/issues/11923))
- **SSH environment variables** não são passadas para sessões ([#14091](https://github.com/NousResearch/hermes-agent/issues/14091))
- **TUI JavaScript heap out of memory** com modelos de contexto grande 200k tokens ([#13039](https://github.com/NousResearch/hermes-agent/issues/13039))
- **WeCom platform issues**: timeout causa mensagens duplicadas ([#14061](https://github.com/NousResearch/hermes-agent/issues/14061)), imagens silenciosamente descartadas ([#14062](https://github.com/NousResearch/hermes-agent/issues/14062))

**Análise de estabilidade:** O release v0.10.0 apresenta regressões significativas (WhatsApp streaming, api_key drift). A vulnerabilidade P0 no sistema de arquivos requer atenção imediata. O memory leak no Hindsight e o crash do TUI com contextos grandes indicam debt técnico em componentes de longa execução.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| Issue | Título | Prioridade | Link |
|-------|--------|------------|------|
| #514 | A2A Protocol Support (Remote Agent Discovery & Interoperability) | Alta | [Issue #514](https://github.com/NousResearch/hermes-agent/issues/514) |
| #7517 | Native Multi-Agent Support | Alta | [Issue #7517](https://github.com/NousResearch/hermes-agent/issues/7517) |
| #12961 | Chinese (Simplified/Traditional) Localization Support | P3 | [Issue #12961](https://github.com/NousResearch/hermes-agent/issues/12961) |
| #14102 | Add Venice.ai as first-class provider | P3 | [Issue #14102](https://github.com/NousResearch/hermes-agent/issues/14102) |
| #14148 | feat(auto-steward): add bounded followthrough engine | P2 | [PR #14148](https://github.com/NousResearch/hermes-agent/pull/14148) |
| #14150 | Holographic memory understanding (SQLite-backed) | Em progresso | [PR #14150](https://github.com/NousResearch/hermes-agent/pull/14150) |

### PRs em Desenvolvimento

- **#14148** (auto-steward): Sistema de followthrough com suporte a diretivas `/as` e `/asN`
- **#14150** (holographic memory): Retrieval híbrido FTS + HRR + embeddings com fallback gracioso
- **#14152**: Propagação de context_length para custom providers em verificações de compressão

**Sinais de roadmap:** A direção estratégica aponta para:
1. **Interoperabilidade** (A2A protocol)
2. **Multi-tenancy** (multi-agent nativo)
3. **Armazenamento advanced** (holographic memory)
4. **Automação** (auto-steward)

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Reportadas

| Categoria | Problema | Frequência |
|-----------|----------|------------|
| **Confiabilidade de streaming** | Streams SSE falham intermitentemente, gerando mensagens de erro "⚠ Stream stalled" | Alta |
| **Compatibilidade de plataforma** | Python 3.11 no macOS (Homebrew/pyenv) não suporta SQLite FTS5, impedindo uso | Média |
| **Integração WhatsApp** | Streaming quebrado na v0.10.0 afeta canal de produção | Crítica |
| **Segurança de arquivos** | Ferramentas write_file/patch podem sobrescrever arquivos de configuração Hermes | Crítica |
| **Contextos grandes** | TUI crasha com `heap out of memory` em modelos 200k tokens | Média |
| **WeCom** | Mensagens duplicadas e perda de mídia | Baixa (mercado específico) |

### Cenários de Uso Emergentes

- **Multi-agente**: Usuários buscam rodar múltiplos agentes isolados em um único gateway
- **Interoperabilidade**: Necessidade de comunicação entre agentes Hermes e sistemas externos via A2A
- **Mercado Chinês**: Demanda por localização completa (docs, CLI, erros) para 104k+ stars

### Satisfação/Insatisfação

- **Positivo**: TUI v2 blitz test indicando amadurecimento da interface
- **Negativo**: Release v0.10.0 com regressões afeta confiança em atualizações

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta/Interação Prolongada

| Issue | Título | Criado | Status | Link |
|-------|--------|--------|--------|------|
| #514 | A2A Protocol Support | 2026-03-06 | Aberta, 7 comentários | [Issue #514](https://github.com/NousResearch/hermes-agent/issues/514) |
| #7517 | Native Multi-Agent Support | 2026-04-11 | Aberta, 6 comentários | [Issue #7517](https://github.com/NousResearch/hermes-agent/issues/7517) |
| #3505 | Queue inbound messages per session | 2026-03-28 | Aberta, 5 comentários | [Issue #3505](https://github.com/NousResearch/hermes-agent/issues/3505) |
| #4256 | Configurable keybindings | 2026-03-31 | Aberta, 2 comentários | [Issue #4256](https://github.com/NousResearch/hermes-agent/issues/4256) |
| #11923 | Hindsight memory leak (aiohttp) | 2026-04-18 | Aberta, 3 comentários | [Issue #11923](https://github.com/NousResearch/hermes-agent/issues/11923) |

### PRs Abertos Pendentes de Review

| PR | Título | Prioridade | Link |
|----|--------|------------|------|
| #14148 | feat(auto-steward): bounded followthrough engine | P2 | [PR #14148](https://github.com/NousResearch/hermes-agent/pull/14148) |
| #14150 | Holographic memory understanding | Em progresso | [PR #14150](https://github.com/NousResearch/hermes-agent/pull/14150) |
| #12924 | Fix Codex CLI sync clobbering manual pool entries | P1 | [PR #12924](https://github.com/NousResearch/hermes-agent/pull/12924) |
| #12946 | fix(gateway): prevent /restart zombie | P1 | [PR #12946](https://github.com/NousResearch/hermes-agent/pull/12946) |

---

## Métricas Resumidas do Dia

| Métrica | Valor |
|---------|-------|
| Issues ativas | 47 abertas / 3 fechadas |
| PRs abertos | 44 |
| PRs merged/fechados | 6 |
| Novas releases | 0 |
| Bugs P1/P0 | 8 (incluindo 1 P0 security) |
| Features em destaque | 2 (A2A, Multi-Agent) |
| PRs em progresso | 5+ |

**Recomendação geral:** Priorizar correção da vulnerabilidade de segurança (#14072), regressões do WhatsApp (#12925), e api_key drift (#14134) antes do próximo release. As features A2A (#514) e Multi-Agent (#7517) merecem alinhamento estratégico com a equipe de produto.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório de Projeto: PicoClaw
**Data de Referência:** 2026-04-23  
**Repositório:** [sipeed/picoclaw](https://github.com/sipeed/picoclaw)

---

## 1. Panorama do Dia

O projeto PicoClaw demonstra **alta atividade** em 23 de abril de 2026, com 9 issues e 19 PRs atualizados nas últimas 24h. O lançamento da versão **v0.2.7** marca um progresso significativo com a adição de pesquisa web configurável (Sogou) e melhorias na experiência visual de ferramentas em canais. A comunidade está ativamente engajada em melhorias de segurança (hardening WebSocket), suporte a Multimodal LLMs com áudio nativo, e refinamentos na configuração explícita de provedores. O ritmo de merges (11 PRs fechados) evidencia um fluxo de desenvolvimento saudável e responsivo.

---

## 2. Lançamentos

### v0.2.7
**Commit:** `93977bf348b6d8b9760a38215e425aeef785f40e`

| Mudança | Descrição |
|---------|-----------|
| **feat**: Pesquisa web configurável com backend Sogou | Adiciona opção alternativa ao DuckDuckGo para pesquisa web internacional |
| **feat**: Animação de feedback de ferramentas em canais (#2569) | Unifica experiência visual entre Discord, Telegram e Feishu |
| **fix**: Formatação de User-Agent Sogou para linter | Correção de validação de código |

**Notas:** Não foram reportadas breaking changes nesta versão. Usuários da versão anterior podem migrar diretamente.

### nightly.20260422
Build noturno baseado em `v0.2.6-nightly.20260422.279c496b` — **uso em produção não recomendado**.

---

## 3. Progresso do Projeto

### PRs Fechados/Mergidos (11 total)

| PR | Autor | Impacto |
|----|-------|---------|
| [#2609](https://github.com/sipeed/picoclaw/pull/2609) | lxowalle | Suporte a campo `provider` explícito em `model_list` — resolve ambiguidade de configuração |
| [#2569](https://github.com/sipeed/picoclaw/pull/2569) | lxowalle | Feedback visual animado de ferramentas em canais — DX melhorado |
| [#2535](https://github.com/sipeed/picoclaw/pull/2535) | afjcjsbx | Comandos MCP slash (`/list mcp`, `/show mcp`) — integração com Model Context Protocol |
| [#2532](https://github.com/sipeed/picoclaw/pull/2532) | lxowalle | Comando `/btw` para perguntas paralelas sem alterar histórico de sessão |
| [#2618](https://github.com/sipeed/picoclaw/pull/2618) | wj-xiao | Correção de proxy de mídia Pico e UI de anexos no chat |
| [#2563](https://github.com/sipeed/picoclaw/pull/2563) | afjcjsbx | Download de arquivos no canal web Pico — feature-request frequentemente solicitada |
| [#2614](https://github.com/sipeed/picoclaw/pull/2614) | imguoguo | Refatoração de workflows CI — separação de criação de tags e releases |
| [#2567](https://github.com/sipeed/picoclaw/pull/2567) | wj-xiao | Reorganização de documentação e guidelines de layout para contribuidores |

**Destaque:** A refatoração do campo `provider` explícito (#2609) é uma melhoria arquitetural que elimina a necessidade de workarounds como `openai/openai/model-name` para servidores locais.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| Issue | Tipo | Comentários | Reações | Tema |
|-------|------|-------------|---------|------|
| [#2513](https://github.com/sipeed/picoclaw/issues/2513) | Bug | 5 | 0 | Gateway start abnormal com provedor glm4.7 |
| [#2548](https://github.com/sipeed/picoclaw/issues/2548) | Bug | 4 | 0 | Múltiplas credenciais de autenticação (Gemini) |
| [#1883](https://github.com/sipeed/picoclaw/issues/1883) | Enhancement | 2 | 0 | Proposta de campo provider explícito — **AGORA RESOLVIDO via #2609** |

### Análise de Demandas

1. **Autenticação e Configuração de Providers** — A issue #2548 evidencia que usuários avançados enfrentam fricção ao configurar múltiplos provedores e modelos customizados. A solução implementada em #2609 deve reduzir significativamente esses tickets.

2. **Segurança para Clientes Terceiros** — A issue #2499 ([link](https://github.com/sipeed/picoclaw/issues/2499)) solicita caminhos seguros para integrações via browser extensions e clientes externos. O PR de segurança #2256 já aborda hardening WebSocket CheckOrigin.

3. **Web Search para Usuários Internacionais** — Issue #2616 ([link](https://github.com/sipeed/picoclaw/issues/2616)) reporta que usuários não-Chineses ficam sem acesso à busca web quando DuckDuckGo está desabilitado, pois o fallback Sogou não funciona adequadamente. **1 reação de :+1:**

---

## 5. Bugs e Estabilidade

### Bugs Reportados Hoje

| Severidade | Issue | Descrição | Impacto |
|------------|-------|-----------|---------|
| **🔴 Alta** | [#2513](https://github.com/sipeed/picoclaw/issues/2513) | Gateway start abnormal com glm4.7 | Afeta inicialização do serviço |
| **🔴 Alta** | [#2621](https://github.com/sipeed/picoclaw/issues/2621) | Contexto de sessão perdido após timeout de API — cria sessão duplicada | Perda de continuidade de conversa |
| **🟡 Média** | [#2548](https://github.com/sipeed/picoclaw/issues/2548) | Múltiplas credenciais de autenticação (Gemini) | Configuração falha silenciosamente |
| **🟡 Média** | [#2615](https://github.com/sipeed/picoclaw/issues/2615) | Mensagens inconsistentes no Web Chat após refresh | UI bug, regressão de #2449 |
| **🟢 Baixa** | [#2616](https://github.com/sipeed/picoclaw/issues/2616) | web_search não registrado sem DuckDuckGo habilitado | Feature quebrada para usuários internacionais |

**Regressão Identificada:** Issue #2615 é uma **regressão** do fix #2449 — o summary de tool calls desaparece após refresh da página.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Propostas

| Feature | Issue | Autor | Alinhamento Estratégico |
|---------|-------|-------|-------------------------|
| **Áudio nativo para LLMs Multimodais** | [#2626](https://github.com/sipeed/picoclaw/pull/2626) | webhtb | PR ABERTO — Suporte a input de áudio (Gemini 1.5) |
| **Embeddings OpenAI-compatíveis** | [#2624](https://github.com/sipeed/picoclaw/pull/2624) | badgerbees | PR ABERTO — Suporte a vLLM endpoints |
| **Webhook Endpoint Backend** | [#2620](https://github.com/sipeed/picoclaw/pull/2620) | gerrystev-intent | PR ABERTO — Integração AWS/webhooks |
| **WS Seguro para Clientes Terceiros** | [#2499](https://github.com/sipeed/picoclaw/issues/2499) | SiYue-ZO | Security + extensibilidade |
| **WhatsApp em Builds Compilados** | [#2625](https://github.com/sipeed/picoclaw/issues/2625) | duckida | Usabilidade Raspberry Pi Zero 2 |
| **Suporte a .env para Skills** | [#2623](https://github.com/sipeed/picoclaw/issues/2623) | zphiliam | DX para desenvolvedores de skills customizadas |

### Sinais de Roadmap

1. **Multimodalidade** — PR #2626 indica direção clara para suporte a áudio, alinhado com evolução de LLMs (Gemini 1.5, GPT-4o).
2. **Embeddings** — Suporte a vLLM via API OpenAI-compatible (#2624) amplia casos de uso enterprise.
3. **Infraestrutura de Canais** — Webhooks (#2620) e segurança WS (#2256) indicam foco em integração e enterprise.

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Dor | Frequência | Contexto |
|-----|------------|----------|
| **Configuração de providers confusa** | Alta | Usuários precisam usar workarounds como `openai/openai/model-name` |
| **Perda de sessão após erros de API** | Média | Containers Docker especialmente afetados (#2621) |
| **Pesquisa web inacessível para não-Chineses** | Média | DuckDuckGo fails, Sogou não funciona como fallback |
| **Builds sem WhatsApp no ARM64** | Baixa (mas específica) | Raspberry Pi Zero 2 não consegue atualizar facilmente |

### Cenários de Uso Reportados

- **Linux/Docker com glm4.7**: Gateway trava na inicialização (#2513)
- **Raspberry Pi Zero 2**: Usuários constrained por builds pré-compilados sem WhatsApp
- **Integração WhatsApp via extensões de browser**: Falta de path seguro para WebSocket de terceiros

### Tendência de Satisfação

**Positiva:** A rápida resolução de issues estruturais (provider explícito) e o lançamento de features aguardadas (pesquisa Sogou, feedback animado) indicam **saúde crescente do projeto**.

**Ponto de Atenção:** A regressão de #2615 e bugs de timeout (#2621) podem impactar retenção de usuários em produção.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta/Progresso

| Issue | Idade | Status | Prioridade |
|-------|-------|--------|------------|
| [#2192](https://github.com/sipeed/picoclaw/pull/2192) PR | ~23 dias | ABERTO | 🔴 Correção de provider Anthropic com cache_control |
| [#2256](https://github.com/sipeed/picoclaw/pull/2256) PR | ~22 dias | ABERTO | 🔴 Security hardening - CSWSH vulnerability |
| [#2586](https://github.com/sipeed/picoclaw/pull/2586) PR | ~4 dias | ABERTO | 🟡 Refatoração deduplicação |
| [#2499](https://github.com/sipeed/picoclaw/issues/2499) | ~10 dias | ABERTO | 🔴 Segurança para clientes terceiros |
| [#2616](https://github.com/sipeed/picoclaw/issues/2616) | Hoje | ABERTO | 🟡 web_search quebrado para internacionais |

### Análise

**CRÍTICO para triagem:**
- **PR #2256** (Security): Aberto há 22 dias com vulnerability de CSWSH — deve ser priorizado.
- **PR #2192** (Anthropic fix): Provider com bug de cache 影响 usuários do Anthropic.

**Ação Recomendada:** RevisarPRs de segurança e/provider block issues com mais de 2 semanas em aberto para evitar acúmulo de dívida técnica.

---

## Métricas Resumidas (24h)

| Métrica | Valor |
|---------|-------|
| Issues abertas/ativas | 8 |
| Issues fechadas | 1 |
| PRs abertos | 8 |
| PRs merged/fechados | 11 |
| Releases | 2 (v0.2.7 + nightly) |
| Bugs de alta severidade | 2 |
| PRs de segurança | 1 |

**Saúde Geral: 🟢 Saudável com áreas de atenção em estabilidade (regressões) e segurança (CSWSH).**

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-04-23

---

## 1. Panorama do Dia

O projeto IronClaw manteve um **ritmo de atividade intenso** nas últimas 24 horas, com 27 issues e 50 PRs atualizados. A atividade está concentrada no **desenvolvimento do engine v2** (epic #2767), com múltiplos PRs empilhados e várias issues relacionadas a tool-use, CodeAct e capabilities. A estabilidade operacional apresenta sinais de alerta, com **4 falhas de live canary** reportadas e bugs de QA críticos no ambiente de staging. Não houve lançamentos de novas versões, indicando foco em estabilização e preparação para a próxima release.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24 horas.**

O projeto está em ciclo de preparação de release conforme evidenciado pelas auto-promotions de staging (#2864, #2860) e pela quantidade de PRs de infraestrutura em revisão. A versão 0.26.0 foi publicada ontem (2026-04-21), e a equipe está consolidando changes antes do próximo tag.

---

## 3. Progresso do Projeto

### PRs Merged/Closed Hoje (13 total)

| PR | Título | Escopo | Impacto |
|----|--------|--------|---------|
| [#1594](https://github.com/nearai/ironclaw/pull/1594) | feat(skills): add CLAWHUB_ENABLED flag | setup, config | Adiciona flag para desabilitar registro público de skills |
| [#2794](https://github.com/nearai/ironclaw/pull/2794) | fix(tools): show v2 capabilities in tool registry | tool | Corrige `tool_info()` retornando erro para ferramentas V2 nativas |
| [#2827](https://github.com/nearai/ironclaw/pull/2827) | engine-v2: centralize action vs capability surface policy | agent | Centraliza política de ações vs capabilities com `CapabilityStatus` |
| [#2826](https://github.com/nearai/ironclaw/pull/2826) | engine-v2: add capability projection and two-surface prompt baseline | agent, llm | Adiciona projeção de capabilities e baseline para modelo de duas superfícies |
| [#2844](https://github.com/nearai/ironclaw/pull/2844) | feat(bridge): project 7 more engine events to AppEvents | agent | Projeta 7 eventos adicionais do engine para AppEvents |
| [#2866](https://github.com/nearai/ironclaw/pull/2866) | feat(tools): curated discovery summaries for core tools | tool/builtin | Adiciona resumos curados para ferramentas core (read_file, write_file, shell, etc.) |

### Destaque: Engine v2 Stack

A equipe está executando agressivamente o plano da epic #2767 com **3 PRs merged hoje** construindo camadas sequenciais sobre a arquitetura do engine v2. O trabalho de centralização de políticas (#2827) e projeção de capabilities (#2826) estabelece a base para a separação de background vs callable tools.

---

## 4. Temas Quentes da Comunidade

### Issues/PRs com Maior Engajamento

| # | Título | Comentários | Tipo | Análise |
|---|--------|-------------|------|---------|
| [#2767](https://github.com/nearai/ironclaw/issues/2767) | Epic: Separate engine v2 capability background from callable tool schemas | 6 | Epic | Trabajo arquitetural central do engine v2 |
| [#2087](https://github.com/nearai/ironclaw/issues/2087) | IronClaw stopped responding after Notion setup | 5 | Bug (CLOSED) | Problema de responsividade durante setup de integrações |
| [#2813](https://github.com/nearai/ironclaw/issues/2813) | add typed assistant content model for final vs internal tool-use | 5 | Enhancement | Separação de content para tool-use interno vs visível |
| [#2792](https://github.com/nearai/ironclaw/issues/2792) | Epic: Gateway state convergence | 3 | Epic | Eliminar desincronização UI/backend no gateway web |
| [#2583](https://github.com/nearai/ironclaw/issues/2583) | Routine creation fails with "5 consecutive code errors" | 2 | Bug | Falha em criação de rotinas automatizadas |
| [#2818](https://github.com/nearai/ironclaw/issues/2818) | Installer fails on x86_64-linux | 1 | Bug | Problema no instalador da v0.26.0 |
| [#2835](https://github.com/nearai/ironclaw/issues/2835) | Tool discovery summaries for core built-ins | 2 | Enhancement | Suporte a tool discovery para prompting do engine v2 |

### Análise de Demandas

**Predominância de trabalho em engine v2:** A comunidade (especialmente contributors core como `serrfirat` e `henrypark133`) está focada em evoluir a arquitetura do engine v2 com emphasis em:
- Separação de capabilities callable vs background
- Melhoria no prompt rendering para CodeAct
- Type safety para mensagens do assistente

**Integrações e UX:** Issues de Notion (#2087, #2856, #2858) e UI web (#2792, #2857) indicam demanda por experiência de integração mais robusta.

---

## 5. Bugs e Estabilidade

### Bugs Abertos por Severidade

#### P1 (Críticos)
| # | Título | Escopo | Status |
|---|--------|--------|--------|
| [#2583](https://github.com/nearai/ironclaw/issues/2583) | Routine creation fails with "5 consecutive code errors" | agent, orchestrator | Aberto - Bug Bash |
| [#2514](https://github.com/nearai/ironclaw/issues/2514) | Incomplete provider config causes instance startup failure | llm, config | CLOSED |

#### P2 (Altos)
| # | Título | Escopo | Status |
|---|--------|--------|--------|
| [#2857](https://github.com/nearai/ironclaw/issues/2857) | Chat history disappears from sidebar | web UI | Aberto - QA |
| [#2858](https://github.com/nearai/ironclaw/issues/2858) | Notion OAuth shows success but chat reports error | Notion integration | Aberto - QA |
| [#2856](https://github.com/nearai/ironclaw/issues/2856) | Notion integration requires excessive user guidance | Notion integration | Aberto - QA |
| [#2855](https://github.com/nearai/ironclaw/issues/2855) | Portfolio tool installation fails | tool marketplace | Aberto - QA |
| [#2818](https://github.com/nearai/ironclaw/issues/2818) | Installer fails on x86_64-linux | setup | Aberto |

### Falhas de CI/CD

| # | Lane | Provider | Commit |
|---|------|----------|--------|
| [#2832](https://github.com/nearai/ironclaw/issues/2832) | public-smoke | anthropic | bfca5e9 |
| [#2829](https://github.com/nearai/ironclaw/issues/2829) | provider-matrix | openai-compatible | bfca5e9 |
| [#2824](https://github.com/nearai/ironclaw/issues/2824) | provider-matrix | openai-compatible | bfca5e9 |
| [#2823](https://github.com/nearai/ironclaw/issues/2823) | provider-matrix | anthropic | bfca5e9 |

**Alerta:** 4 live canary lanes falhando no mesmo commit (`bfca5e9`) indica possível regressão no ambiente de staging que pode bloquear promoções.

### Bugs de UX Críticos

| # | Título | Severidade |
|---|--------|------------|
| [#2833](https://github.com/nearai/ironclaw/issues/2833) | Cross-Conversation Response Contamination | Alta - Dados vazando entre conversas |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Enhancements Identificadas

| # | Título | Risco | Escopo | Sinais de Roadmap |
|---|--------|-------|--------|-------------------|
| [#2843](https://github.com/nearai/ironclaw/issues/2843) | Cost-based budgeting: USD budgets cascading user → project → mission → thread | High | agent, db, config | Sistema de budgets baseado em custo取代 iteration/time caps |
| [#2828](https://github.com/nearai/ironclaw/issues/2828) | Harness testing epic — unify replay, E2E, live canary, eval | Medium | agent, evaluation, ci | Unificação de sistemas de teste e canary |
| [#2813](https://github.com/nearai/ironclaw/issues/2813) | Typed assistant content model for final vs internal tool-use | Medium | agent, llm | Separação de mensagens internas e visíveis |
| [#2834](https://github.com/nearai/ironclaw/issues/2834) | Engine v2: compact tool-use action cards + discovery-guided prompting | Medium | agent, tool | Melhoria no prompting de tools |
| [#2792](https://github.com/nearai/ironclaw/issues/2792) | Gateway state convergence epic | Medium | agent, channel/web | Eliminar UI/backend state drift |

### PRs de Features em Progresso

| # | Título | Escopo | Impacto |
|---|--------|--------|---------|
| [#2854](https://github.com/nearai/ironclaw/pull/2854) | feat(engine-v2): add CodeAct host shims | agent | Pythonic shims para CodeAct + rollout controls |
| [#2865](https://github.com/nearai/ironclaw/pull/2865) | feat(tools): add Nostr tool + WebSocket host | tool/wasm | Nova integração Nostr |
| [#2863](https://github.com/nearai/ironclaw/pull/2863) | feat(llm): add Manifest as built-in LLM provider | llm | Novo provider LLM |
| [#2019](https://github.com/nearai/ironclaw/pull/2019) | feat: native Matrix channel | agent, channel | Canal nativo Matrix com E2EE opcional |
| [#2418](https://github.com/nearai/ironclaw/pull/2418) | feat: slim mode runtime, Dockerfiles, /health route | config, sandbox | Modo slim para multi-tenant deployments |
| [#2168](https://github.com/nearai/ironclaw/pull/2168) | feat(credentials): path-based credential matching | secrets, sandbox | Credentials por path pattern |

### Sinais de Direção Técnica

1. **Orquestração baseada em custo (#2843):** Migração de limites fixed (50 iterações, 5min timeout) para budgets USD em cascata
2. **Unificação de testing (#2828):** Consolidação de replay, E2E, live canary e eval em harness único
3. **Matrix channel (#2019):** Expansão de canais suportados com suporte E2EE

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Categoria | Problema | Evidence |
|-----------|----------|----------|
| **Setup de Integrações** | IronClaw para de responder durante setup de Notion | [#2087](https://github.com/nearai/ironclaw/issues/2087) - CLOSED |
| **OAuth Notion** | Fluxo OAuth completa mas agente não reconhece | [#2858](https://github.com/nearai/ironclaw/issues/2858) |
| **Autonomia de Agente** | Notion requer orientação excessiva do usuário | [#2856](https://github.com/nearai/ironclaw/issues/2856) |
| **Marketplace** | Instalação de tools falha por build artifact ausente | [#2855](https://github.com/nearai/ironclaw/issues/2855) |
| **UI Web** | Sidebar de chat lose histórico de conversas | [#2857](https://github.com/nearai/ironclaw/issues/2857) |
| **Cross-conversation leak** | Respostas aparecem na conversa errada | [#2833](https://github.com/nearai/ironclaw/issues/2833) |
| **Installer** | Instalador falha em Linux x86_64 | [#2818](https://github.com/nearai/ironclaw/issues/2818) |

### Padrões de Insatisfação

1. **Setup de Integrações:** Usuários enfrentam problemas em setups multi-step (Notion OAuth, tool installation)
2. **Estabilidade de Staging:** Bugs de QA em ambiente de staging indicam necessidade de validação mais rigorosa antes de promotion
3. **UI/State Management:** Desincronização entre frontend e backend causando perda de dados de UX

---

## 8. Backlog que Merece Atenção

### Issues Sem Atividade Recente (>3 dias sem atualização)

| # | Título | Criado | Comentários | Prioridade |
|---|--------|--------|-------------|------------|
| [#2138](https://github.com/nearai/ironclaw/issues/2138) | Missing Github fork action | 2026-04-08 | 0 | Medium |
| [#2168](https://github.com/nearai/ironclaw/pull/2168) | feat(credentials): path-based credential matching | 2026-04-08 | N/A | High (PR) |
| [#2019](https://github.com/nearai/ironclaw/pull/2019) | feat: native Matrix channel | 2026-04-04 | N/A | Medium (PR) |
| [#2418](https://github.com/nearai/ironclaw/pull/2418) | feat: slim mode runtime | 2026-04-13 | N/A | Medium (PR) |

### PRs Bloqueados ou Aguardando Revisão

| # | Título | Idade | Status |
|---|--------|-------|--------|
| [#2868](https://github.com/nearai/ironclaw/pull/2868) | engine-v2: make available_actions callable-only | Novo | Aberto |
| [#2865](https://github.com/nearai/ironclaw/pull/2865) | feat(tools): add Nostr tool | Novo | Aberto

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do Projeto CoPaw (QwenPaw) — 2026-04-23

## 1. Panorama do dia

O projeto CoPaw (rebrandeado como QwenPaw) apresenta **alta atividade** em 23 de abril de 2026, com 41 issues e 48 PRs atualizados nas últimas 24h. A equipe lançou a versão **v1.1.3**, introduzindo o sistema de Backup & Restore, enquanto 27 PRs foram merged/fechados e 21 permanecem abertos. A comunidade demonstra engajamento significativo em questões de estabilidade (crashes com protocolos Anthropic e WebView2), experiência do usuário (UI/UX e internacionalização) e expansão de funcionalidades (roteamento semântico, backends de memória extensíveis). O rebranding de CoPaw para QwenPaw ainda gera confusão entre usuários, evidenciado por issues sobre migração e versionamento.

---

## 2. Lançamentos

### v1.1.3 (23 de abril de 2026)

| Componente | Mudança |
|------------|---------|
| **Agent System** | Adicionado **Backup & Restore**: snapshots protegidos de agentes, skills, memória e sessões com seleção por agente, importação/exportação em arquivos ZIP |

**Nota de migração:** Usuários que atualizaram de versões anteriores (ex: v1.0.2) relatam inconsistência na detecção automática da versão pela UI (Issue [#3675](https://github.com/agentscope-ai/QwenPaw/issues/3675)). Recomenda-se verificar `qwenpaw --version` via linha de comando para confirmar a atualização.

---

## 3. Progresso do Projeto

### PRs merged/fechados recentemente

| PR | Título | Impacto |
|----|--------|---------|
| [#3694](https://github.com/agentscope-ai/QwenPaw/pull/3694) | `feat(security): add shell invasion guard configuration` | Permite desabilitar individualmente cada uma das 7 verificações de evasão de shell via config |
| [#3685](https://github.com/agentscope-ai/QwenPaw/pull/3685) | `fix(channels/weixin): accept empty sendmessage response as success` | Corrige falha silenciosa no envio de mensagens WeChat |
| [#3696](https://github.com/agentscope-ai/QwenPaw/pull/3696) | `refactor(plugins): switch to dynamic module registration` | Melhora arquitetura de plugins |
| [#3683](https://github.com/agentscope-ai/QwenPaw/pull/3683) | `Console/icon` | Substitui logos CDN por assets locais e ícones customizados para Canais/Provedores |
| [#3388](https://github.com/agentscope-ai/QwenPaw/pull/3388) | `fix(console): bundle icons locally to support offline/LAN deployment` | Resolve ícones quebrados em deployments offline/LAN |

### PRs em revisão com alto potencial

| PR | Título | Destaque |
|----|--------|----------|
| [#3500](https://github.com/agentscope-ai/QwenPaw/pull/3500) | `feat(memory): add extensible memory backend system` | Refatoração para suportar mem0, Zep, LangMem via plugin system — compatível com ReMeLight existente |
| [#3452](https://github.com/agentscope-ai/QwenPaw/pull/3452) | `feat(console): add LLM routing UI` | Nova UI para roteamento de modelos em Settings > Models |
| [#3656](https://github.com/agentscope-ai/QwenPaw/pull/3656) | `perf: Tool Guard Approval System Refactor` | Sistema de aprovação de ferramentas com i18n e timeout dinâmico |
| [#3117](https://github.com/agentscope-ai/QwenPaw/pull/3117) | `Feat/semantic skill routing` | Routing baseado em embeddings para filtrar skills relevantes por query |

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários)

| Issue | Tipo | Comentários | Tema Central |
|-------|------|-------------|--------------|
| [#3693](https://github.com/agentscope-ai/QwenPaw/issues/3693) | Bug | 13 | Erro de tipo com protocolo Anthropic (火山codingplan) — async for em Message não-streaming |
| [#3663](https://github.com/agentscope-ai/QwenPaw/issues/3663) | Feature | 6 | "Dream Log Output" — registrar logs de consolidação de memória |
| [#3687](https://github.com/agentscope-ai/QwenPaw/issues/3687) | Bug | 6 | Ferramenta `write_file` trunca conteúdo em ~6000 bytes |
| [#3338](https://github.com/agentscope-ai/QwenPaw/issues/3338) | Bug | 6 | Erro ao alcançar limite de turns de conversation |
| [#3637](https://github.com/agentscope-ai/QwenPaw/issues/3637) | Question | 6 | Confusão de versioning CoPaw vs QwenPaw e path de upgrade |

### Análise das demandas

**Protocolos e provedores:** Problemas com provedores não-Python (Anthropic, Ollama cloud) indicam gaps de compatibilidade com fluxos async e tratamento de erros em edge cases.

**Rebranding e migração:** Múltiplas issues (#3637, #3659, #3598) evidenciam que a transição de CoPaw para QwenPaw não foi comunicada claramente, gerando:
- Duas pastas de sistema (`.copaw` e `.qwenpaw`)
- Inconsistência entre release notes e PyPI
- Dúvidas sobre como migrar configurações e memória

**Memória e sonhos (Dream):** O sistema de otimização de memória "Dream" atrai interesse (#3663) mas ainda apresenta bugs em Windows (Issue [#3597](https://github.com/agentscope-ai/QwenPaw/issues/3597)).

---

## 5. Bugs e Estabilidade

### Por severidade

| Severidade | Issues | Exemplos |
|------------|--------|----------|
| **🔴 Crítica** | 2 | [#3693](https://github.com/agentscope-ai/QwenPaw/issues/3693) — Crash com protocolo Anthropic; [#3701](https://github.com/agentscope-ai/QwenPaw/issues/3701) — Falso positivo em antivirus Win11 |
| **🟠 Alta** | 3 | [#3695](https://github.com/agentscope-ai/QwenPaw/issues/3695) — Git não encontrado no Docker build v1.1.3; [#3640](https://github.com/agentscope-ai/QwenPaw/issues/3640) / [#3642](https://github.com/agentscope-ai/QwenPaw/issues/3642) — Agente假死 (freeze) com MCP |
| **🟡 Média** | 4 | [#3687](https://github.com/agentscope-ai/QwenPaw/issues/3687) — Truncamento de `write_file`; [#3601](https://github.com/agentscope-ai/QwenPaw/issues/3601) — WebView2 initialization; [#3658](https://github.com/agentscope-ai/QwenPaw/issues/3658) — WEBP images falham silenciosamente |
| **🟢 Baixa** | 3 | [#3541](https://github.com/agentscope-ai/QwenPaw/issues/3541) — Frontend bugs (skill search, dark mode); [#3651](https://github.com/agentscope-ai/QwenPaw/issues/3651) — Paginação não selecionável |

### Bugs recurrentes ou de raiz comum

- **MCP Client instability:** Issues [#3640](https://github.com/agentscope-ai/QwenPaw/issues/3640) e [#3642](https://github.com/agentscope-ai/QwenPaw/issues/3642) ambas citam `TaskGroup` interno causando freeze — possivelmente同一个 problema de concorrência.
- **Deployments offline/LAN:** Ícones quebrados em air-gapped environments (#3323, resolvido em [#3388](https://github.com/agentscope-ai/QwenPaw/pull/3388)).
- **Platform-specific (Windows):** Falhas com WebView2, caminhos não-ASCII (#3625), e Dream system (#3597).

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features solicitadas

| Feature | Issue | Motivação |
|---------|-------|-----------|
| **Timeout configurável para `execute_shell_command`** | [#3593](https://github.com/agentscope-ai/QwenPaw/issues/3593) | Necessidade de controlar timeout por agente via `agent.json` |
| **OpenAI Responses API support** | [#3531](https://github.com/agentscope-ai/QwenPaw/issues/3531) | Adicionar à lista de provedores customizados |
| **Suporte stdout em `sessions_spawn`** | [#3680](https://github.com/agentscope-ai/QwenPaw/issues/3680) | Integração com engines de evolução externas (ex: Evolver) |
| **Slash command auto-complete completo** | [#3671](https://github.com/agentscope-ai/QwenPaw/issues/3671) | UI não exibe todos os comandos disponíveis |
| **Link direto de sessão para chat** | [#3378](https://github.com/agentscope-ai/QwenPaw/issues/3378) | UX: navegar entre lista de sessões e conversa específica |
| **Voice input via Whisper** | [#3574](https://github.com/agentscope-ai/QwenPaw/pull/3574) (PR) | Substituir Web Speech API por Whisper para cross-browser |

### Sinais de evolução de arquitetura

- **Sistema de memória plugável:** PR [#3500](https://github.com/agentscope-ai/QwenPaw/pull/3500) indica direção para suportar backends como mem0, Zep, LangMem.
- **Routing inteligente de skills:** PR [#3117](https://github.com/agentscope-ai/QwenPaw/pull/3117) com embeddings para filtrar skills por relevância.
- **Plan mode:** PR [#3686](https://github.com/agentscope-ai/QwenPaw/pull/3686) sugere expansão de modos de operação do agente.

---

## 7. Resumo de Feedback dos Usuários

### Dores principais

1. **Confusão de versionamento e upgrade path**
   > *"Release notes shows v1.1.2 but PyPI only has v1.0.2"* ([#3637](https://github.com/agentscope-ai/QwenPaw/issues/3637))
   - Impacto: Usuários não conseguem atualizar via pip; incerteza se devem instalar da fonte.

2. **Migração de CoPaw para QwenPaw**
   > *"copaw更名为qwenpaw 如何迁移原本的copaw环境和memory呢"* ([#3659](https://github.com/agentscope-ai/QwenPaw/issues/3659))
   - Impacto: Dados duplicados, configuração fragmentada.

3. **Segurança e antivirus**
   > *"新版1.1.3安装包在win11报毒"* ([#3701](https://github.com/agentscope-ai/QwenPaw/issues/3701))
   - Impacto: Impede adoção em ambientes Windows corporativos.

4. **Tamanho e performance de build**
   > *"打包exe后文件体积为506.9M打包时间太长"* ([#3682](https://github.com/agentscope-ai/QwenPaw/issues/3682))
   - Impacto: Desenvolvedores buscam alternativas mais leves.

### Cenários de uso emergentes

- **Multi-channel deployment:** Usuários configurando DingTalk, WeChat, Feishu simultaneamente — necessidade de wizards interativos (#3699).
- **Evolução de agentes externos:** Integração com engines como Evolver (#3680).
- **Ambientes restricted:** Offline/LAN deployments e air-gapped scenarios.

### Satisfação parcial

- Funcionalidades novas (Backup & Restore, routing UI, semantic skill routing) são bem recebidas.
- Regressões em funcionalidades core (protocolos, MCP) causam frustração.

---

## 8. Backlog que Merece Atenção

### Issues sem resposta > 7 dias

| Issue | Criado | Status | Prioridade |
|-------|--------|--------|------------|
| [#2716](https://github.com/agentscope-ai/QwenPaw/issues/2716) — Não consegue adicionar Ollama qwen3.5:cloud | 2026-04-01 | Aberta | Alta |
| [#3314](https://github.com/agentscope-ai/QwenPaw/issues/3314) — Windows install warning (code signing) | 2026-04-13 | Aberta | Média |
| [#3323](https://github.com/agentscope-ai/QwenPaw/issues/3323) — Ícone não encontrado em LAN | 2026-04-13 | Aberta | Média |
| [#3338](https://github.com/agentscope-ai/QwenPaw/issues/3338) — Erro em limite de turns | 2026-04-13 | Aberta | Alta |
| [#3378](https://github.com/agentscope-ai/QwenPaw/issues/3378) — Link direto sessão→chat | 2026-04-14 | Aberta | Baixa |

### PRs parados em revisão

| PR | Status | Bloqueio |
|----|--------|----------|
| [#3452](https://github.com/agentscope-ai/QwenPaw/pull/3452) | Aguardando | `#3550` (dependência de backend) |
| [#3117](https://github.com/agentscope-ai/QwenPaw/pull/3117) | Need discussions | Design de routing semântico |

### Ações recomendadas

1. **Responder Issue [#2716](https://github.com/agentscope-ai/QwenPaw/issues/2716):** Problema com Ollama cloud persiste há 22 dias.
2. **Documentar path de migração:** Criar guia oficial para transição CoPaw → QwenPaw (#3659, #3598).
3. **Fix v1.1.3 Docker build:** Issue [#3695](https://github.com/agentscope-ai/QwenPaw/issues/3695) já tem PR [#3697](https://github.com/agentscope-ai/QwenPaw/pull/3697) — priorizar merge.
4. **Avaliar assinatura de código:** Windows install warnings (#3314) impactam adoção empresarial.

---

*Relatório gerado automaticamente com base em dados do GitHub de 2026-04-23. Métricas: 41 issues, 48 PRs, 1 release.*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-04-23

## 1. Panorama do dia

ZeroClaw demonstra **alta atividade comunitária** em 23 de abril de 2026, com 36 issues e 35 PRs atualizados nas últimas 24h — um fluxo intenso de trabalho que reflete o momento de maturação do projeto. O destaque negativo fica por conta da **web dashboard持续的 indisponibilidade** (que finalmente foi fechada como #4866) e uma quantidade significativa de bugs S1 (workflow bloqueado) relacionados a provedores, configuração de migrate e compactação de canais. Simultaneamente, a equipe avança em PRs estruturantes como a **reescrita completa do onboarding** (#5960) e a **refatoração da arquitetura de providers** (#5937), sinalizando foco em estabilidade e simplificação técnica. O projeto não выпустил novas releases neste ciclo.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

O跟踪 de releases está ativo com duas milestones abertas:
- **[#5877](https://github.com/zeroclaw-labs/zeroclaw/issues/5877)** — v0.7.4 milestone tracking (WareWolf-MoonWall, atualizado 2026-04-22)
- **[#5878](https://github.com/zeroclaw-labs/zeroclaw/issues/5878)** — v0.7.5 milestone tracking com tema "Release Automation" (WareWolf-MoonWall, atualizado 2026-04-22)

> A v0.7.5 propõe automatizar integralmente o pipeline de releases, extinguindo version bumps manuais e workflows ad hoc — um passo importante para a maturidade operacional do projeto.

---

## 3. Progresso do Projeto

Os seguintes PRs foram **merged/fechados** nas últimas 24h, representando avanços concretos:

| PR | Autor | Cambio | Impacto |
|---|---|---|---|
| **[#5926](https://github.com/zeroclaw-labs/zeroclaw/pull/5926)** (CLOSED) | WareWolf-MoonWall | Consolidação de `ci-run.yml` + reescrita da documentação de CI | **Alta** — Corrige triggers ausentes em commits master e adiciona cancel-in-progress. Resolveu confusão direta na emergency v0.7.3 |
| **[#5971](https://github.com/zeroclaw-labs/zeroclaw/pull/5971)** (CLOSED) | singlerider | Patches de segurança: `rand 0.9.4`, `rand 0.8.6`, `picomatch 4.0.4` | **Média** — Resolve alerts Dependabot 31–32 (unsoundness via custom logger) e ReDoS em picomatch |
| **[#5950](https://github.com/zeroclaw-labs/zeroclaw/pull/5950)** (CLOSED) | singlerider | Expõe campos `Vec<String>` via `zeroclaw config get/set/list` | **Alta** — Permite configurar `allowed_users`, `allowed_commands`, `forbidden_*` via CLI |
| **[#5940](https://github.com/zeroclaw-labs/zeroclaw/pull/5940)** (CLOSED) | jokemanfire | Centraliza metadados de canais de onboarding e usa IDs estáveis | **Baixa** — Melhoria de consistência interna no TUI |
| **[#5917](https://github.com/zeroclaw-labs/zeroclaw/issues/5917)** (CLOSED) | WareWolf-MoonWall | Rewrites de `ci-map.md` e `master-branch-flow.md` | **Média** — Documentação agora reflete workflows reais |

**PRs abertos de maior porte em revisão:**

- **[#5960](https://github.com/zeroclaw-labs/zeroclaw/pull/5960)** — `feat(onboard)`: reescrita completa do onboarding (8.534+3.898 linhas → orquestrador schema-driven, idempotente e DRY)
- **[#5942](https://github.com/zeroclaw-labs/zeroclaw/pull/5942)** — `feat(voice)`: adiciona trait `Vad`, protocolo `VoiceEvent` e feature flag `gateway-voice-duplex`
- **[#5993](https://github.com/zeroclaw-labs/zeroclaw/pull/5993)** — `fix(config)`: espelha entrada do provider sob chave canônica de fallback (corrige #5989)
- **[#5997](https://github.com/zeroclaw-labs/zeroclaw/pull/5997)** — `fix(tauri)`: instala `rustls` crypto provider para evitar crash do desktop
- **[#5996](https://github.com/zeroclaw-labs/zeroclaw/pull/5996)** — `fix(docker)`: inclui web dashboard na imagem Docker (resolve #4866)

---

## 4. Temas Quentes da Comunidade

**Issues com maior engajamento (comentários + reações):**

1. **[#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866)** — 🔴 **Web dashboard não disponível** (21 comentários, fechada) — Bug crítico que persistia por versões; afetava tanto web UI quanto app desktop Tauri. Finalmente resolvido com a fusão de #5996.

2. **[#5815](https://github.com/zeroclaw-labs/zeroclaw/issues/5815)** — 🟠 **Provider ignora llamacpp object** (8 comentários, 👍 2) — Regressão introduzida após schema v2; o provider `llamacpp` é ignorado e valores default são aplicados. **S1 - workflow bloqueado.**

3. **[#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982)** — 🟢 **Per-sender RBAC para multi-tenant** (5 comentários) — Feature request para isolar workspaces, tool sets, rate limits e system prompts por classe de usuário (customers, operators, developers) em uma única instância. Sinaliza roadmap de multi-tenant enterprise.

4. **[#5937](https://github.com/zeroclaw-labs/zeroclaw/issues/5937)** — 🟡 **Refatorar arquitetura de providers e reqwest** (6 comentários) — Unificação de construção de clients reqwest e redução de duplicação de código. Este é o trabalho preparatório para estabilizar a próxima geração de providers.

5. **[#5890](https://github.com/zeroclaw-labs/zeroclaw/issues/5890)** — RFC de **Multi-agent UX flow** em período de discussão (3 comentários). Tracker em **[#5891](https://github.com/zeroclaw-labs/zeroclaw/issues/5891)**.

**Tendência comunitária**: Crescente interesse em **isolamento multi-tenant**, **automação de releases** e **melhoria de UX de voz/web**. A comunidade também demonstra frustração com a documentação desatualizada de CI (endereçada em #5926).

---

## 5. Bugs e Estabilidade

### 🔴 S1 — Workflow Bloqueado (Crítico)

| # | Bug | Canal | Status |
|---|---|---|---|
| **[#5815](https://github.com/zeroclaw-labs/zeroclaw/issues/5815)** | Provider `llamacpp` ignorado após schema v2 | provider | OPEN |
| **[#5989](https://github.com/zeroclaw-labs/zeroclaw/issues/5989)** | Rewrite de fallback orfã entrada do provider → 401s silenciosos | provider | OPEN |
| **[#5990](https://github.com/zeroclaw-labs/zeroclaw/issues/5990)** | `zeroclaw config migrate` remove toda config de provider | tooling | OPEN |
| **[#5813](https://github.com/zeroclaw-labs/zeroclaw/issues/5813)** | Compaction orfã `tool_result` → Anthropic API 400 | channel | OPEN |
| **[#5550](https://github.com/zeroclaw-labs/zeroclaw/issues/5550)** | Memories autosaved invisíveis por `session_id` mismatch | memory | OPEN |
| **[#5984](https://github.com/zeroclaw-labs/zeroclaw/issues/5984)** | `zeroclaw-desktop` crash com "No provider set" | unknown | OPEN |
| **[#6000](https://github.com/zeroclaw-labs/zeroclaw/issues/6000)** | Impossível configurar LLM local (llama.cpp) | runtime | OPEN |
| **[#6002](https://github.com/zeroclaw-labs/zeroclaw/issues/6002)** | Mensagens não chegam ao assistant (Telegram + llama.cpp) | runtime | OPEN |

### 🟠 S2 — Comportamento Degradado

| # | Bug | Canal | Status |
|---|---|---|---|
| **[#5809](https://github.com/zeroclaw-labs/zeroclaw/issues/5809)** | `git -C <path>` bloqueado pelo shell policy (conflito com `-c`) | security | OPEN |
| **[#5313](https://github.com/zeroclaw-labs/zeroclaw/issues/5313)** | Memory leak: daemon grows 28MB → 460MB+ em 2h (Slack Socket Mode) | daemon | OPEN |
| **[#4846](https://github.com/zeroclaw-labs/zeroclaw/issues/4846)** | WhatsApp-Web channel quebrado (feature flag ausente) | channel | OPEN |
| **[#3361](https://github.com/zeroclaw-labs/zeroclaw/issues/3361)** | Cron output não entregue ao Matrix channel | channel | CLOSED |
| **[#5412](https://github.com/zeroclaw-labs/zeroclaw/issues/5412)** | Discord: `thread_ts` hardcoded como `None` → conversas sangrando entre threads | channel | OPEN |

### 🟡 Segurança e Infraestrutura

| # | Bug | Severidade | Status |
|---|---|---|---|
| **[#5847](https://github.com/zeroclaw-labs/zeroclaw/issues/5847)** | Documentação ausente para `gateway.web_dist_dir` | S0 | OPEN |
| **[#5895](https://github.com/zeroclaw-labs/zeroclaw/issues/5895)** | `security.sandbox.memory_limit_mb` ignorado sem warning se memcg ausente | security | OPEN |
| **[#6001](https://github.com/zeroclaw-labs/zeroclaw/issues/6001)** | `/api/cost` retorna zero após gateway-chat; sem trace files | gateway | OPEN |

**Análise de estabilidade**: Padrão recorrente de **regressões pós-schema-v2** em provedores e configuração. O problema de memory leak em Slack Socket Mode (#5313) é particularmente preocupante para deployments de longa duração.

---

## 6. Pedidos de Features e Sinais de Roadmap

| # | Feature | Tags | Tipo de Demanda |
|---|---|---|---|
| **[#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982)** | Per-sender RBAC para multi-tenant | `security`, `enhancement` | Enterprise / multi-usuário |
| **[#5937](https://github.com/zeroclaw-labs/zeroclaw/issues/5937)** | Unificar arquitetura de providers + reqwest | `enhancement`, `refactor` | Technical debt / DX |
| **[#5890](https://github.com/zeroclaw-labs/zeroclaw/issues/5890)** | RFC: Multi-agent UX flow | `enhancement`, `rfc` | Arquitetura de agentes |
| **[#5891](https://github.com/zeroclaw-labs/zeroclaw/issues/5891)** | Multi-agent v1 tracker | `enhancement` | Roadmap |
| **[#5942](https://github.com/zeroclaw-labs/zeroclaw/pull/5942)** | Vad trait + VoiceEvent protocol (PR aberto) | `feat(voice)` | Voz / duplex |
| **[#5998](https://github.com/zeroclaw-labs/zeroclaw/pull/5998)** | Opção mention-only para canais IRC (PR aberto) | `feat(config)`, `channel:irc` | UX de canal |
| **[#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287)** | Local-First Mode para small models | `enhancement` | Offline / local |
| **[#5956](https://github.com/zeroclaw-labs/zeroclaw/issues/5956)** | Documentar scope de audit de skills | `enhancement` | Documentação |
| **[#5742](https://github.com/zeroclaw-labs/zeroclaw/pull/5742)** | Adicionar MiniMax-AI/cli como skill tap padrão | `feat(skills)` | Community / ecossistema |

**Sinais de roadmap**:
- **Voz duplex** (#5942) está em revisão ativa — indica prioridade em interação em tempo real
- **Multi-agent** (#5890/#5891) avança com RFC formal e processo de votação
- **Multi-tenant RBAC** (#5982) reflete demanda de deployments corporativos
- **Release automation** (#5878) demonstra maturidade organizacional

---

## 7. Resumo de Feedback dos Usuários

### Dores reais identificadas

| Cenário | Issue | Impacto |
|---|---|---|
| **Web dashboard indisponível** após instalação padrão | [#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) | Usuários novos não conseguem usar a UI — barreira de entrada alta |
| **Configuração de LLM local** (llama.cpp) falha silenciosamente | [#6000](https://github.com/zeroclaw-labs/zeroclaw/issues/6000), [#5815](https://github.com/zeroclaw-labs/zeroclaw/issues/5815) | Usuários self-hosted ficam bloqueados; workflow completamente interrompido |
| **Memórias de Conversation** não são recuperadas pelo recall | [#5550](https://github.com/zeroclaw-labs/zeroclaw/issues/5550) | Funcionalidade de memória inútil em prática; perda de contexto de sessão |
| **Session de Discord sangrando** entre threads | [#5412](https://github.com/zeroclaw-labs/zeroclaw/issues/5412) | Vazamento de contexto entre conversas

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*