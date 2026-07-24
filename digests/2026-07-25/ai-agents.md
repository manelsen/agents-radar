# Resumo diário do ecossistema de agentes de IA 2026-07-25

> Issues: 0 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-07-24 20:57 UTC

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

# Relatório Comparativo do Ecossistema Open Source de Agentes de IA

**Data de referência:** 2026-07-25  
**Projetos analisados:** 7 (1 inativo, 6 ativos)

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **saúde robusta** em 6 dos 7 projetos analisados, com intensidade de desenvolvimento variando de moderada a intensa. Observa-se uma tendência clara de convergência técnica: todos os projetos ativos investem em **multi-canal (Telegram, Discord, Slack, WeChat)**, **segurança de sandbox** e **performance de runtime**. A categoria mais madura (ZeroClaw, Hermes Agent) prioriza hardening de segurança e estabilidade, enquanto projetos mais novos (NanoBot, CoPaw) focam em features de UX e extensibilidade. Não há sinais de estagnação em nenhum projeto ativo — pelo contrário, múltiplos projetos preparam releases major (v1.0.0, v0.9.0, v0.3.0) nas próximas semanas.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | Releases | Saúde | Prioridade Técnica |
|---------|--------------|-----------|---------|-------|-------------------|
| **NullClaw** | 0 | 0 | 0 | ⚫ Inativo | — |
| **NanoBot** | 5 | 26 | 0 (v0.3.0 iminente) | 🟢 Alta | UX/WebUI, Subagentes inline |
| **Hermes Agent** | 50 | 50 | 0 | 🟢 Alta | Estabilidade, Windows, Security |
| **PicoClaw** | 3 | 7 | 0 | 🟢 Boa | i18n, MQTT TLS, Performance |
| **IronClaw** | 31 | 50 | 0 (v1.0.0-rc.8) | 🟡 Média-Alta | Canais (Telegram/Slack), WebUI |
| **CoPaw** | 47 | 36 | 2 (v2.0.1 stable) | 🟢 Alta | PawApp, RAG, MCP, Performance |
| **ZeroClaw** | 44 | 50 | 0 (v0.8.3 stable) | 🟢 Alta | Landlock sandbox, SSRF, PostgreSQL |

**Observação:** IronClaw apresenta 3 bugs P1 críticos em canais, indicando risco pré-release.

---

## 3. Posicionamento do Projeto Principal

*Nota: "Projeto principal" não claramente identificado — tratando NullClaw como referência inativa.*

### NanoBot (HKUDS) — Destaque em UX e Arquitetura de Subagentes

| Dimensão | NanoBot | vs. Média do Ecossistema |
|----------|---------|--------------------------|
| **Ritmo de features** | 21 PRs merged/24h | ▲ Superior |
| **Foco arquitetural** | Subagentes inline, multimodalidade | ▲ Diferenciado |
| **UX/WebUI** | Onboarding desktop, presets no composer | ▲ Liderança |
| **Comunidade** | 23 comentários em issue de Ollama | ▲ Engajamento |
| **Maturidade** | v0.2.2 (pre-v0.3.0) | 🟡 Em crescimento |

**Vantagens técnicas:**
- Arquitetura de subagentes inline com `wait=true` para delegação síncrona
- Preservação de outputs multimodais (texto, imagem, arquivo)
- WebUI-first onboarding elimina dependência de terminal

**Dívida técnica:**
- Bug de contexto em mensagens pendentes (#4064) — 2 meses aberto
- Performance com provedores locais (Ollama) — 60s overhead por turno

---

## 4. Focos Técnicos Compartilhados

### 4.1 Segurança e Sandboxing
| Projeto | Foco | Severidade |
|---------|------|------------|
| **ZeroClaw** | Landlock sandbox, SSRF gate | S0-S1 |
| **Hermes Agent** | auth.json em write_denied_paths | Crítico |
| **PicoClaw** | MQTT TLS (InsecureSkipVerify fixado) | Crítico |
| **IronClaw** | OAuth redirect URI, signing/attestation | Alto |

**Síntese:** O ecossistema está convergindo para **defesa em profundidade** — sandboxing de filesystem, proteção de credenciais e validação de inputs como requisitos table-stakes.

### 4.2 Multi-Canal e Confiabilidade de Mensagens
| Projeto | Problema | Severidade |
|---------|----------|------------|
| **IronClaw** | Telegram replies entregue ao usuário errado | P1 |
| **IronClaw** | Slack DM não entregue despite sucesso reportado | P1 |
| **ZeroClaw** | Discord typing stuck, Telegram aliases descartados | P2 |
| **NanoBot** | Pending messages perdem contexto runtime | Bug aberto |

**Síntese:** Mensageria confiável é o **desafio mais prevalente** — afeta 4 de 6 projetos ativos.

### 4.3 Performance de Runtime
| Projeto | Problema | Impacto |
|---------|----------|---------|
| **CoPaw** | Overhead de 2s por reply na v2.0 | Todos os usuários |
| **NanoBot** | 60s delay com Ollama | Usuários GPU local |
| **PicoClaw** | CPU elevado ao focar input | Web UI |
| **IronClaw** | WebUI bundle size >100MB | Loading time |

**Síntese:** Performance é crítico para **adoção em produção**, especialmente com modelos locais.

### 4.4 Internacionalização e Localização
| Projeto | Progresso |
|---------|-----------|
| **PicoClaw** | Tcheco (merged), Chinês Tradicional zh-TW (PR #3261) |
| **NanoBot** | Branding SVG migration |
| **ZeroClaw** | DingTalk streaming (RFC accepted) |

**Síntese:** Expansão para mercados não-anglofônicos (China, Vietnã, Europa Oriental) é prioridade secundária.

---

## 5. Análise de Diferenciação

### 5.1 Por Arquitetura

| Projeto | Arquitetura | Escolhas Técnicas |
|---------|-------------|-------------------|
| **ZeroClaw** | Rust-first, OCI containers | Landlock sandbox, PostgreSQL backend, ACP protocol |
| **IronClaw** | Rust backend, extensões plugáveis | Manifest V3, design system tokens, signing runtime |
| **Hermes Agent** | Python, TUI-first | CLI tools, cron jobs, compression/summarization |
| **CoPaw** | Python/agentscope 2.0, PawApp SDK | RAG, MCP first-class, desktop automation |
| **NanoBot** | Modular, providers abstraction | Subagentes inline, multimodal providers |
| **PicoClaw** | Go, lightweight | MQTT TLS, XML assembly, i18n |

### 5.2 Por Público-Alvo

| Projeto | Público Primário | Público Secundário |
|---------|------------------|-------------------|
| **ZeroClaw** | DevOps/infra, equipes de segurança | Desenvolvedores que necessitam agents locais |
| **IronClaw** | Teams corporativas, multi-profile | Desenvolvedores de skills |
| **Hermes Agent** | Power users, self-hosters | Usuários Windows (chinês) |
| **CoPaw** | Usuários Qwen/Alibaba, pesquisadores | Desenvolvedores de mini-apps |
| **NanoBot** | Usuários desktop, multimodais | Usuários Telegram |
| **PicoClaw** | Embarcados, IoT, Discord | Desenvolvedores Go |

### 5.3 Por Estágio de Maturidade

```
ZeroClaw v0.8.3 ────────────────── Estável, hardening de segurança
Hermes Agent ────────────────────── Estável, dívida técnica em Windows
IronClaw ───────────────────────── RC, preparação v1.0.0
CoPaw v2.0.1 ────────────────────── Feature-rich, regressões em correção
NanoBot v0.2.2 ─────────────────── Crescimento acelerado, v0.3.0 iminente
PicoClaw v0.3.x ─────────────────── Estável, foco em i18n/performance
```

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Projetos em Iteração Rápida

| Projeto | Sinais de Iteração Rápida |
|---------|--------------------------|
| **CoPaw** | 11 features shipped pelo mesmo contribuidor em 1 dia; 2 releases em 24h |
| **NanoBot** | 26 PRs processados, 21 merged; preparação ativa de v0.3.0 |
| **ZeroClaw** | 4 PRs merged + 3 RFCs em progresso; v0.9.0 tracker ativo |
| **Hermes Agent** | teknium1 fechou 17 PRs em 24h |

### 6.2 Projetos em Consolidação de Qualidade

| Projeto | Sinais de Consolidação |
|---------|------------------------|
| **IronClaw** | v1.0.0 blocked por bugs P1 em canais; 3+ PRs size XL em review |
| **PicoClaw** | Foco em security hardening (MQTT TLS) e performance (allocations) |
| **Hermes Agent** | 5+ issues Windows GBK; tech debt acumulada |

### 6.3 Saúde de Comunidade

| Projeto | Métricas Positivas | Métricas Negativas |
|---------|-------------------|-------------------|
| **NanoBot** | Issue #4867 com 23 comentários | Bug #4064 sem resposta há 2 meses |
| **CoPaw** | 4+ contribuidores externos | Issue #2999 há 110 dias sem resolução |
| **ZeroClaw** | RFC com 14 comentários | 4+ PRs size XL bloqueados por author action |
| **IronClaw** | Design docs publicados | 4 PRs de signing aguardando ~2 meses |

**Veredicto:** CoPaw e NanoBot demonstram **velocidade de iteração superior**; ZeroClaw e IronClaw estão em modo de **estabilização pré-release**.

---

## 7. Sinais de Tendência

### 7.1 Tendências de Mercado Extraídas

| Tendência | Evidência | Implicação |
|-----------|-----------|------------|
| **Agents local-first** | NanoBot: Ollama overhead (#4867); ZeroClaw: PowerShell + Hailo-Ollama | Demanda por inferência privada/offline cresce |
| **MCP como padrão** | CoPaw: MCP tools (#6405, #2999); IronClaw: persistent MCP connections (#66473) | Model Context Protocol se consolida |
| **UX multi-canal** | Todos os projetos com issues de Telegram/Discord/Slack | Usuários esperam experiência consistente cross-platform |
| **Extensibilidade via plugins** | CoPaw: PawApp SDK; IronClaw: Manifest V3; NanoBot: WebUI apps | Mercado converge para plataforma, não produto monolith |
| **RAG/Knowledge Base** | CoPaw: #6432 (feature mais pedida); CoPaw: reranker PR #5692 | Agentes precisam de memória persistente e retrieval |
| **Segurança como feature** | ZeroClaw: landlock/SSRF; Hermes: auth.json fix; PicoClaw: MQTT TLS | Clientes enterprise exigem sandboxing nativo |
| **Voice/TTS** | Hermes: #70974 (suporte a interrupção); comparação com 豆包 | Competição em voice interaction aquecida |
| **Desktop automation** | CoPaw: #6424 (Windows/macOS GUI automation) | Agentes evoluem para computer-use |

### 7.2 Sinais de Decisão para Desenvolvedores

**Escolha NanoBot se:**
- Prioridade é UX/WebUI e onboarding rápido
- Necessidade de subagentes inline para delegação de tarefas
- Foco em provedores multimodais (OpenAI Responses, xAI)

**Escolha CoPaw se:**
- Ecossistema Qwen/Alibaba é preferencial
- Necessidade de PawApp para mini-apps customizados
- RAG e knowledge base são requisitos

**Escolha ZeroClaw se:**
- Requisitos de segurança (landlock sandbox, SSRF protection) são mandatórios
- PostgreSQL como backend de sessão é necessário
- ACP protocol para multi-agent orchestration

**Escolha IronClaw se:**
- Multi-profile/team usage é o caso de uso primário
- Skills self-creation e extensibilidade são prioridade
- Waiting for v1.0.0 stability (bloqueado por P1 channels)

**Escolha Hermes Agent se:**
- Preferência por CLI/TUI com cron jobs integrados
- Comunidade ativa (NousResearch) é valor
- Windows compatibility (GBK) é requirement

---

## 8. Síntese Executiva

| Dimensão | Líder | Seguidor Próximo |
|----------|-------|------------------|
| **Velocidade de features** | CoPaw (11 features/dia) | NanoBot (21 PRs merged) |
| **Maturidade de segurança** | ZeroClaw (landlock, SSRF) | PicoClaw (MQTT TLS) |
| **Multi-canal confiável** | Nenhum (todos com bugs) | — |
| **UX/WebUI** | NanoBot (onboarding, presets) | IronClaw (v2 epic) |
| **Extensibilidade** | CoPaw (PawApp SDK) | IronClaw (Manifest V3) |
| **Comunidade engajada** | Hermes Agent (17 PRs by teknium1) | NanoBot (23 comentários/issue) |

**Recomenda-se monitorar:** (1) IronClaw v1.0.0 release blockers, (2) CoPaw v2.0 regression fixes, (3) ZeroClaw PostgreSQL backend merge, (4) NanoBot v0.3.0 release.

---

*Relatório gerado em 2026-07-25 com base em dados de 7 repositórios do ecossistema open source de agentes de IA.*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-07-25

---

## 1. Panorama do Dia

O projeto NanoBot apresenta **alta atividade de desenvolvimento** em 25 de julho de 2026. Foram 26 PRs atualizadas nas últimas 24h (21 merged/fechadas, 5 abertas) e 5 issues movimentadas (3 fechadas, 2 abertas), indicando um ritmo de entrega intenso. A comunidade está focada na preparação da release **v0.3.0**, com avanços significativos em experiência do usuário (WebUI, mobile), refinamento de provedores multimodais e consultação de subagentes inline. O volume de PRs fechadas e a qualidade das descrições sugerem um projeto saudável e bem mantido pelo time HKUDS.

---

## 2. Lançamentos

**Nenhuma release nova publicada hoje.**

- A PR [#5081](https://github.com/HKUDS/nanobot/pull/5081) (*chore(release): prepare v0.3.0*) está **aberta e em preparação**, com bump de versão de `0.2.2` para `0.3.0`.
- A versão atual em uso aparenta ser a `0.2.2`, com a `0.3.0` prevista iminentemente.

> ⚠️ **Nota de migração potencial:** A PR [#5053](https://github.com/HKUDS/nanobot/pull/5053) (*chore: pin migration TODOs to v0.2.4*) documenta que v0.2.3 é a janela final de migração para avisos de deprecação (`maxMessages` e channel entry-point). Usuários em versões anteriores a 0.2.3 devem atualizar antes da remoção dos warnings.

---

## 3. Progresso do Projeto

### PRs importantes merged/fechadas hoje (21 total):

| PR | Título | Prioridade | Impacto |
|---|---|---|---|
| [#5074](https://github.com/HKUDS/nanobot/pull/5074) | `feat(agent): support inline subagent consultation` | p1 | Permite consultar subagentes inline com argumento `wait`, contando contra limite de concorrência. |
| [#5078](https://github.com/HKUDS/nanobot/pull/5078) | `feat: launch first-time setup in webui` | p1 | Instaladores desktop agora lançam WebUI diretamente; fluxo TTY/headless preservado. |
| [#5073](https://github.com/HKUDS/nanobot/pull/5073) | `fix(providers): preserve multimodal tool outputs` | p1 | Preserva blocos de texto, imagem e arquivo em outputs de ferramentas OpenAI Responses. |
| [#5076](https://github.com/HKUDS/nanobot/pull/5076) | `fix(webui): honor custom gateway port with Vite` | p1 | Corrige proxy Vite para respeitar porta customizada do gateway. |
| [#5075](https://github.com/HKUDS/nanobot/pull/5075) | `feat(agent): carry authorized tasks through verification` | p2 | Requisição clara do usuário autoriza execução; reserva confirmação para ações irreversíveis. |
| [#5050](https://github.com/HKUDS/nanobot/pull/5050) | `feat(xai): surface hosted X Search activity` | p2 | Exibe eventos `x_search` do provedor xAI como atividade estruturada do agente. |
| [#4963](https://github.com/HKUDS/nanobot/pull/4963) | `feat(webui): polish agent output and app discovery` | — | Substitui logs aninhados por linguagem unificada de atividade em reasoning, web, shell, files, memory, apps, MCP, imagens, subagentes, automations e goals. |
| [#5077](https://github.com/HKUDS/nanobot/pull/5077) | `feat(webui): switch model presets from the composer` | — | Usuários podem trocar presets via long-press e drag no composer; label do preset visível. |
| [#5071](https://github.com/HKUDS/nanobot/pull/5071) | `fix(webui): show quoted context after follow-up send` | — | Inclui texto selecionado do assistente como quoted-context marker no outbound payload. |
| [#5080](https://github.com/HKUDS/nanobot/pull/5080) | `feat(brand): migrate README and WebUI assets to SVG` | — | PNGs substituídos por SVGs alinhados; marca usada no sidebar e favicon. |
| [#5079](https://github.com/HKUDS/nanobot/pull/5079) | `feat(brand): Add nanobot logo (SVG)` | p2 | Logo vetorial adicionado em `images/nanobot_logo.svg`. |
| [#5049](https://github.com/HKUDS/nanobot/pull/5049) | `fix(agent): deliver non-streamed finalization responses` | p1 | Corrige entrega de respostas finalizadas em canais não-streaming. |
| [#4567](https://github.com/HKUDS/nanobot/pull/4567) | `fix(weixin): stream LLM calls + buffer reply delivery` | — | Corrige bug de relay não-streaming no WeChat; preserva `tool_use` id/name/input. |
| [#5060](https://github.com/HKUDS/nanobot/pull/5060) | `fix(webui): polish responsive layouts and settings search` | — | Selector compacto mobile; compressão container-aware em narrow layouts. |
| [#5031](https://github.com/HKUDS/nanobot/pull/5031) | `fix(webui): avoid mobile welcome composer overlap` | — | Greeting e composer em rows separadas no mobile; gap consistente 2rem. |
| [#5072](https://github.com/HKUDS/nanobot/pull/5072) | `Revert "fix: preserve pending message runtime context"` | — | Reverte #4665 por estar desatualizado contra arquitetura `RuntimeContextProvider`. |

### Avanços-chave do dia:
- **Subagentes inline** adicionam arquitetura flexível para delegação de tarefas em tempo real.
- **Onboarding WebUI** elimina dependência de terminal para novos usuários desktop.
- **Atividade X Search** do provedor xAI agora visível como evento estruturado.
- **Branding SVG** moderniza identidade visual do projeto.

---

## 4. Temas Quentes da Comunidade

### Issues/PRs com maior engajamento:

| Item | Tipo | Comentários | 👍 | Tema |
|---|---|---|---|---|
| [#4867](https://github.com/HKUDS/nanobot/issues/4867) | Issue | **23** | 0 | **Cache de prompts em provedores locais (Ollama)** — Problema crítico: Nanobot adiciona ~60s por turno mesmo em operações simples com Ollama local. |
| [#4637](https://github.com/HKUDS/nanobot/issues/4637) | Issue | 4 | 0 | **Telegram: mensagens longas truncadas** — Trunking de markdown fragmenta renderização. |
| [#4858](https://github.com/HKUDS/nanobot/issues/4858) | Issue | 2 | 0 | **Refatorar lifecycle de provedores de ferramentas (MCP)** — Leaking de estado MCP no `AgentLoop` precisa ser extraído. |
| [#4064](https://github.com/HKUDS/nanobot/issues/4064) | Issue | 1 | 1 | **Mensagens pendentes perdem contexto runtime** — Mensagens mid-turn injetadas como plain user messages sem metadata de canal/chat. |
| [#4383](https://github.com/HKUDS/nanobot/pull/4383) | PR | — | 0 | **Globalping MCP preset** — Preset para plataforma de measurement distribuída (ping, traceroute, DNS). |

### Análise das demandas:

- **Issue #4867** é o tema mais debatido (23 comentários). O problema com Ollama é crítico para usuários com GPUs limitadas (32 GB VRAM) que precisam de inferência local. A comunidade aguarda solução.
- **Refatoração MCP (#4858)** indica reconhecimento interno de debt técnico — o time está ciente da necessidade de extrair lógica de provedores do core do `AgentLoop`.
- **Globalping MCP (#4383)** demonstra interesse da comunidade em expandir integrações de ferramentas externas.

---

## 5. Bugs e Estabilidade

### Bugs reportados/observados hoje:

| Severidade | Item | Descrição | Status |
|---|---|---|---|
| **p1** | [#4867](https://github.com/HKUDS/nanobot/issues/4867) | 60s de delay por turno em Ollama; completamente inviável com modelos locais | **CLOSED** (enhancement — precisa de implementação) |
| **p2** | [#4637](https://github.com/HKUDS/nanobot/issues/4637) | Telegram: mensagens longas em markdown são truncadas; trunks anteriores não renderizam | **CLOSED** (resolvido?) |
| **p2** | [#5062](https://github.com/HKUDS/nanobot/issues/5062) | Testes usam `python -c` indisponível em Ubuntu/Debian (só `python3`) | **CLOSED** (fix mergeado em outra PR?) |
| **p1** | [#4064](https://github.com/HKUDS/nanobot/issues/4064) | Mensagens pendentes mid-turn perdem `sender/channel/chat` runtime context | **OPEN** — bug crítico para multi-canal |
| **—** | [#5072](https://github.com/HKUDS/nanobot/pull/5072) | Regressão: revertida PR #4665 que tentou preservar contexto de runtime — arquitetura mudou | **CLOSED** (revertido) |

### Regressões corrigidas hoje:

- [#5049](https://github.com/HKUDS/nanobot/pull/5049): Entrega de respostas finalizadas em canais não-streaming.
- [#5076](https://github.com/HKUDS/nanobot/pull/5076): Porta customizada do gateway respeitada pelo Vite.
- [#4567](https://github.com/HKUDS/nanobot/pull/4567): WeChat streaming corrigido; `tool_use` id/name/input preservados.

> **Média de estabilidade:** 3/5 — Bugs p1 em aberto (Ollama latency, pending message context) requerem atenção prioritária antes da v0.3.0.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas demandas identificadas:

| Feature | Item | Descrição | Sinais de Roadmap |
|---|---|---|---|
| **Subagentes inline** | [#5074](https://github.com/HKUDS/nanobot/pull/5074) ✅ | Suporte a `wait=true` no spawn tool para consultação síncrona | ✅ Merged — confirmado para v0.3.0 |
| **Globalping MCP** | [#4383](https://github.com/HKUDS/nanobot/pull/4383) ⏳ | Preset para Globalping (measurement network global) | Em revisão — possível v0.3.x |
| **X Search activity** | [#5050](https://github.com/HKUDS/nanobot/pull/5050) ✅ | Surface de eventos xAI hosted `x_search` | ✅ Merged — confirmado para v0.3.0 |
| **Refatorar MCP lifecycle** | [#4858](https://github.com/HKUDS/nanobot/issues/4858) ⏳ | Extrair estado/lifecycle MCP do `AgentLoop` | Discussão técnica em andamento |
| **Streaming Markdown** | [#4696](https://github.com/HKUDS/nanobot/pull/4696) ⏳ | Reveal animado left-to-right; pacing com reading speed natural | Em revisão |
| **Preserve prompt prefix** | [#4867](https://github.com/HKUDS/nanobot/issues/4867) ⏳ | Manter prefixo exato para enable caching em Ollama/outros | Enhacement em discussão |

### Sinais de direção estratégica:
- **Multi-modalidade**: Preservação de outputs multimodais (#5073) indica foco em agentes que consomem e produzem conteúdo variado.
- **UX/WebUI-first**: Onboarding via WebUI (#5078), responsividade mobile (#5031, #5060), e troca de presets no composer (#5077) mostram priorização de experiência do usuário final.
- **Preservação de contexto**: Issue #4064 (pending messages perdem contexto) e refatoração MCP (#4858) sugerem trabalho arquitetural em contexto e lifecycle management.

---

## 7. Resumo de Feedback dos Usuários

### Dores reais reportadas:

1. **Latenia inaceitável com Ollama (#4867)** — Usuários com GPUs de 32 GB relatam 60s extras por turno, tornando o uso local inviável. Este é o **problema mais comentado do dia** (23 comentários), indicando impacto significativo na base de usuários com constraints de hardware.

2. **Fragmentação de mensagens longas no Telegram (#4637)** — Usuários queenviam mensagens markdown extensas sofrem trunking e renderização incorreta, prejudicando legibilidade.

3. **Contexto perdido em multi-canal (#4064)** — Mensagens pendentes perdem metadata de canal/chat, quebrando experiência em setups com múltiplas plataformas.

### Cenários de uso inferidos:
- **Desenvolvedores com GPUs locais**: Usam Ollama/GGUF quantized models para inferênciaprivada e offline.
- **Usuários de Telegram**: Interagem com o agente via mensagens markdown longas.
- **Multi-plataforma**: Integram múltiplos canais (WeChat, Telegram, WebUI) simultaneamente.
- **Power users**: Utilizam presets de modelos e shortucts de composer.

### Satisfação geral:
- **Alta** — O volume de PRs fechadas, a preparação ativa da v0.3.0, e as features de UX indicam releases continuas de valor.
- **Preocupação** — Issues de performance (Ollama) e contexto (pending messages) aguardam resolução.

---

## 8. Backlog que Merece Atenção

### Issues sem resposta ou aguardando ação prolongada:

| Item | Criado | Atualizado | Comentários | Status | Prioridade |
|---|---|---|---|---|---|
| [#4064](https://github.com/HKUDS/nanobot/issues/4064) | 2026-05-29 | 2026-07-24 | 1 | **OPEN** | Bug — aguardando implementação |
| [#4858](https://github.com/HKUDS/nanobot/issues/4858) | 2026-07-09 | 2026-07-24 | 2 | **OPEN** | Refactor — discussão técnica |
| [#4383](https://github.com/HKUDS/nanobot/pull/4383) | 2026-06-17 | 2026-07-24 | — | **OPEN** | Feature request — em review |
| [#4696](https://github.com/HKUDS/nanobot/pull/4696) | 2026-07-04 | 2026-07-24 | — | **OPEN** | Feature — streaming Markdown |

### Recomendações de atenção:

1. **[#4064](https://github.com/HKUDS/nanobot/issues/4064) — Pending message context**: Aberto desde 29/05 (quase 2 meses). Perda de contexto runtime em mensagens pendentes é bug crítico para ambientes multi-canal. **Recomendação**: Priorizar antes da v0.3.0 ou documentar workaround.

2. **[#4867](https://github.com/HKUDS/nanobot/issues/4867) — Ollama

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-07-25

---

## 1. Panorama do Dia

O projeto apresenta alta atividade comunitária com 50 issues e 50 PRs atualizados nas últimas 24h, indicando um ritmo intenso de desenvolvimento. **Nenhum novo release** foi publicado, sugerindo que a equipe está em ciclo de estabilização ou preparação para próxima versão. A base de issues abertas permanece em 40, com 10 fechadas, demonstrando um volume significativo de trabalho em andamento. Observa-se concentração de bugs relacionados ao platform/windows (5+ issues de encoding GBK e Smart App Control), além de múltiplos problemas de estabilidade no Desktop e cron jobs. O principal mantenedor (`teknium1`) fechou 17 PRs hoje, demonstrando ritmo acelerado de merges.

---

## 2. Lançamentos

**Nenhum release publicado nas últimas 24h.**

O projeto não registrou novas versões hoje. Recomenda-se monitorar o repositório para announcements de release, especialmente considerando o alto volume de PRs merged que podem indicar preparação para release imminent.

---

## 3. Progresso do Projeto

### PRs Abertos de Alto Impacto (46 abertas / 4 fechadas)

| PR | Autor | Componente | Descrição |
|----|-------|------------|-----------|
| [#70981](https://github.com/NousResearch/hermes-agent/pull/70981) | webtecnica | agent | **preserve api_mode em fallback_providers routing** — corrige roteamento para `/v1/messages` vs `/chat/completions` |
| [#70982](https://github.com/NousResearch/hermes-agent/pull/70982) | webtecnica | agent/skills | **previne falsos positivos de threat scan** — contexto de operadores não é mais striparado por match único |
| [#70984](https://github.com/NousResearch/hermes-agent/pull/70984) | webtecnica | desktop | **previne lock permanente de input** em loops de falha de tool calls |
| [#71010](https://github.com/NousResearch/hermes-agent/pull/71010) | teknium1 | ssl | **detecta e repara cacert.pem ausente** via venv-repair |
| [#71009](https://github.com/NousResearch/hermes-agent/pull/71009) | teknium1 | cron | **preserva ownership de jobs.json** ao rodar como root + surface ticker errors |
| [#71008](https://github.com/NousResearch/hermes-agent/pull/71008) | teknium1 | terminal | **para reader de background bloqueando** em orphan-held stdout pipes |
| [#71007](https://github.com/NousResearch/hermes-agent/pull/71007) | teknium1 | web | **resolve per-profile gateway state** para ?profile= em /api/status |
| [#71006](https://github.com/NousResearch/hermes-agent/pull/71006) | teknium1 | tui | **spawn slash workers on demand** — resolve ~120-process/50GB OOM |
| [#71005](https://github.com/NousResearch/hermes-agent/pull/71005) | teknium1 | config | **preserva valores opacos do .env** |
| [#71004](https://github.com/NousResearch/hermes-agent/pull/71004) | teknium1 | memory | **não wipe MEMORY.md** em read failure transitório |
| [#71003](https://github.com/NousResearch/hermes-agent/pull/71003) | teknium1 | compression | **recuperação de anti-thrashing protection** em vez de disable permanente |
| [#71002](https://github.com/NousResearch/hermes-agent/pull/71002) | teknium1 | compression | **strip proactive headers** do summary template |
| [#71001](https://github.com/NousResearch/hermes-agent/pull/71001) | teknium1 | compression | **recupera rotated session lineage** |
| [#71000](https://github.com/NousResearch/hermes-agent/pull/71000) | teknium1 | checkpoints | **nunca auto-delete orphans** em startup sweep desatendido |
| [#70999](https://github.com/NousResearch/hermes-agent/pull/70999) | teknium1 | agent | **recupera de provider-dropped tool calls** |
| [#70998](https://github.com/NousResearch/hermes-agent/pull/70998) | teknium1 | agent | **touch activity entre tool completion e API call** — previne inactivity-kill hang |
| [#70997](https://github.com/NousResearch/hermes-agent/pull/70997) | teknium1 | macos | **usa launchctl submit** para plist reload (deprecated load/unload) |
| [#70996](https://github.com/NousResearch/hermes-agent/pull/70996) | teknium1 | runtime | **repara SQLite builds vulneráveis** |
| [#70995](https://github.com/NousResearch/hermes-agent/pull/70995) | teknium1 | update | **pre-flight state.db integrity guard** |
| [#70994](https://github.com/NousResearch/hermes-agent/pull/70994) | teknium1 | auth | **break unbounded 401 retry loop** |

**Destaque:** 17 PRs de `teknium1` com foco em estabilidade (compression, agent lifecycle, security, platform reliability) indicam investimento em robustez da codebase.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários + reações)

| # | Título | Comentários | 👍 | Categoria |
|---|--------|-------------|----|-----------|
| [#26326](https://github.com/NousResearch/hermes-agent/issues/26326) | Skill curator deleta skills sem atualizar cron jobs | 6 | 0 | Bug/Critical Path |
| [#53428](https://github.com/NousResearch/hermes-agent/issues/53428) | subprocess.run GBK crash em Windows Chinês (21 localizações) | 5 | 0 | Bug/Platform |
| [#43935](https://github.com/NousResearch/hermes-agent/issues/43935) | kanban-orchestrator deve ler profile descriptions | 4 | 0 | Feature/Core |
| [#50210](https://github.com/NousResearch/hermes-agent/issues/50210) | Hermes.exe unsigned bloqueado por Smart App Control | 4 | 1 | Bug/Windows |
| [#29421](https://github.com/NousResearch/hermes-agent/issues/29421) | Gateway restart hang — D-Bus race com systemd | 4 | 0 | Bug/Linux |
| [#66473](https://github.com/NousResearch/hermes-agent/issues/66473) | Gateway-attached persistent MCP connections | 3 | 0 | Feature/MCP |
| [#70942](https://github.com/NousResearch/hermes-agent/issues/70942) | **security: auth.json não está em build_write_denied_paths** | 3 | 0 | Security |

### Análise de Demandas

1. **Segurança em Foco:** Issue [#70942](https://github.com/NousResearch/hermes-agent/issues/70942) raised today destaca vulnerabilidade onde `auth.json` não está protegido em `build_write_denied_paths()`, permitindo que o agente destrua seu próprio credential store — risco crítico que precisa de atenção imediata.

2. **Windows é Prioridade:** 3 das top 6 issues mais comentadas são Windows-related (GBK encoding, Smart App Control, auto-update com gateway running), indicandotech debt significativa na plataforma Windows.

3. **Multi-profile Complexity:** Múltiplas issues ([#70944](https://github.com/NousResearch/hermes-agent/issues/70944), [#51520](https://github.com/NousResearch/hermes-agent/issues/51520), [#42467](https://github.com/NousResearch/hermes-agent/issues/42467)) apontam para problemas com a arquitetura multi-profile, especialmente no Desktop app.

---

## 5. Bugs e Estabilidade

### Por Severidade (P1-P3)

#### P1 — Críticos (Bloqueantes)
| # | Título | Status | Link |
|---|--------|--------|------|
| #50210 | Hermes.exe unsigned → Smart App Control block | OPEN | [Link](https://github.com/NousResearch/hermes-agent/issues/50210) |
| #70942 | auth.json missing from write_denied_paths (security) | OPEN | [Link](https://github.com/NousResearch/hermes-agent/issues/70942) |

#### P2 — Altos (Impacto Significativo)
| # | Título | Componentes | Status | Link |
|---|--------|-------------|--------|------|
| #26326 | Skill curator deleta sem atualizar cron jobs | cron, skills | OPEN | [Link](https://github.com/NousResearch/hermes-agent/issues/26326) |
| #53428 | GBK encoding crash (21 localizações) | agent, gateway, tui | CLOSED | [Link](https://github.com/NousResearch/hermes-agent/issues/53428) |
| #29421 | Gateway restart hang — D-Bus race | cli, gateway | OPEN | [Link](https://github.com/NousResearch/hermes-agent/issues/29421) |
| #35979 | Iteration-exhaustion summary sem output budget | agent | OPEN | [Link](https://github.com/NousResearch/hermes-agent/issues/35979) |
| #70944 | Multi-profile sidebar empty após update | desktop, dashboard | OPEN | [Link](https://github.com/NousResearch/hermes-agent/issues/70944) |
| #70949 | Oversized tool-result descarta output mais novo | tools, mcp | OPEN | [Link](https://github.com/NousResearch/hermes-agent/issues/70949) |
| #70961 | fallback_providers routing para /chat/completions | agent | OPEN | [Link](https://github.com/NousResearch/hermes-agent/issues/70961) |
| #58672 | pre-update snapshot com keep=1 — prune todos os snapshots | cli | OPEN | [Link](https://github.com/NousResearch/hermes-agent/issues/58672) |

#### P3 — Médios (Degradação)
| # | Título | Componentes | Status | Link |
|---|--------|-------------|--------|------|
| #39856 | Email IMAP ID() falha em servidores sem RFC 2971 | plugins | OPEN | [Link](https://github.com/NousResearch/hermes-agent/issues/39856) |
| #54984 | Nix-On-Droid 'double free' error | nix | OPEN | [Link](https://github.com/NousResearch/hermes-agent/issues/54984) |
| #70337 | Windows auto-update falha com gateway running | desktop | OPEN | [Link](https://github.com/NousResearch/hermes-agent/issues/70337) |
| #59850 | hermes update: uv pip install no diretório errado | cli | OPEN | [Link](https://github.com/NousResearch/hermes-agent/issues/59850) |

**Padrões Identificados:**
- **Windows Encoding:** 5+ issues relacionados a GBK/UTF-8 em subprocess (já parcialmente addressado via PRs)
- **Desktop Multi-Profile:** 3+ issues de sidebar/session list quebrados após update
- **Cron Integration:** Skill deletion não atualiza scheduled jobs

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Propostas (últimas 24h)

| # | Título | Componentes | Votes | Link |
|---|--------|-------------|-------|------|
| #66473 | Gateway-attached persistent MCP connections | agent, tools, mcp | 0 | [Link](https://github.com/NousResearch/hermes-agent/issues/66473) |
| #43935 | kanban-orchestrator deve ler profile descriptions | cron, skills | 0 | [Link](https://github.com/NousResearch/hermes-agent/issues/43935) |
| #41152 | HTTP message append (POST /api/sessions/{id}/messages) | gateway | 0 | [Link](https://github.com/NousResearch/hermes-agent/issues/41152) |
| #49806 | Suporte background para Telegram live location | gateway, telegram | 1 | [Link](https://github.com/NousResearch/hermes-agent/issues/49806) |
| #64790 | Font selector no Desktop Appearance | desktop | 0 | [Link](https://github.com/NousResearch/hermes-agent/issues/64790) |
| #68482 | Cron job metadata (tags, description, workflow) | cron | 0 | [Link](https://github.com/NousResearch/hermes-agent/issues/68482) |
| #60900 | Memory tool: soft warning 90% + auto-consolidation | agent, memory | 0 | [Link](https://github.com/NousResearch/hermes-agent/issues/60900) |
| #70974 | Voice interaction: suporte a interrupção | tool/tts | 0 | [Link](https://github.com/NousResearch/hermes-agent/issues/70974) |

### Sinais de Roadmap

1. **MCP Evolution:** Issue [#66473](https://github.com/NousResearch/hermes-agent/issues/66473) é umbrella issue referencing lazy MCP, tool schema deferral, e per-session tool scoping — indica planejamento de arquitetura MCP mais sofisticada.

2. **Voice/TTS:** [#70974](https://github.com/NousResearch/hermes-agent/issues/70974) menciona "comparação com 豆包" (ByteDance), sugerindo competitividade de mercado em voice interaction.

3. **HTTP API Expansion:** [#41152](https://github.com/NousResearch/hermes-agent/issues/41152) enable integração com Microsoft Teams para feedback loops — caso de uso enterprise.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Categoria | Feedback | Issues |
|-----------|----------|--------|
| **Windows Broken** | "Não consigo usar no Windows Chinês — crash em qualquer comando com output" | [#53428](https://github.com/NousResearch/hermes-agent/issues/53428), [#60760](https://github.com/NousResearch/hermes-agent/issues/60760) |
| **Desktop Data Loss** | "Depois do update, perdi todas as sessões de um perfil — pareceu perda total de dados" | [#70944](https://github.com/NousResearch/hermes-agent/issues/70944), [#42467](https://github.com/NousResearch/hermes-agent/issues/42467) |
| **Windows Update** | "Auto-update nunca funciona — gateway fica segurando lock" | [#70337](https://github.com/NousResearch/hermes-agent/issues/70337) |
| **Security** | "O agente pode apagar suas próprias credenciais sem proteção" | [#70942](https://github.com/NousResearch/hermes-agent/issues/70942) |
| **Voice/TTS** | "Não posso interromper quando o AI está falando — isso é básico" | [#70974](https://github.com/NousResearch/hermes-agent/issues/70974) |
| **Linux Gateway** | "Restart do gateway hangs infinitamente — única saída é matar processo" | [#29421](https://github.com/NousResearch/hermes-agent/issues/29421) |
| **Enterprise Integration** | "Preciso enviar feedback do Teams pro Hermes pra treinar nightly" | [#41152](https://github.com/NousResearch/hermes-agent/issues/41152) |

### Padrões de Satisfação/Insatisfação

- **Frustração com Windows:** 5+ issues Windows em 24h indica dor aguda
- **Desktop App Maturity:** Multi-profile experience ainda não está polido (sidebar vazia, schema lag)
- **Core Stability:** Issues P1/P2 mostram que funcionalidades core (cron, gateway, agent loop) ainda têm bugs de race condition

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta / Longa Duração

| # | Título | Criado | Atualizado | Dias Dormindo | Prioridade | Link |
|---|--------|--------|------------|---------------|------------|------|
| #26326 | Skill curator não atualiza cron jobs | 2026-05-15 | 2026-07-24 | 70 | P2 | [Link](https://github.com/NousResearch/hermes-agent/issues/26326) |
| #29421 | Gateway restart hang — D-Bus race | 2026-05-20 | 2026-07-24 | 65 | P2 | [Link](https://github.com/NousResearch/hermes-agent/issues/29421) |
| #35979 | Iteration-exhaustion sem max_tokens | 2026-05-31 | 2026-07-24 | 54 | P2 | [Link](https://github.com/NousResearch/hermes-agent/issues/35979) |
| #39856 | Email IMAP ID() crash | 2026-06-05 | 2026-07-24 | 49 | P3 | [Link](https://github.com/NousResearch/hermes-agent/issues/39856) |
| #43935 | kanban-orchestrator profile descriptions | 2026-06-11 | 2026-07-24 | 44 | P3 | [Link](https://github.com/NousResearch/hermes-agent/issues/

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-07-25

---

## 1. Panorama do Dia

O projeto PicoClaw apresenta **alta atividade de manutenção** nesta data, com 7 PRs processados e 3 issues atualizadas. A comunidade demonstra foco em **segurança, internacionalização (i18n) e otimização de performance**, com PRs de refactoring sendo merged e issues de bugs sendo fechadas. Não há lançamentos novos, indicando um período de estabilização. A saúde geral do projeto é positiva, com engajamento contínuo de contribuidores externos.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24h.**

O projeto encontra-se em período pré-release, possivelmente preparando a versão 0.3.2 com as melhorias de segurança e i18n em discussão.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados (6 total)

| # | PR | Autor | Tipo | Impacto |
|---|-----|-------|------|---------|
| [#3247](https://github.com/sipeed/picoclaw/pull/3247) | feat(i18n): add Czech translations | KrtCZ | Feature | Completude de locale |
| [#3246](https://github.com/sipeed/picoclaw/pull/3246) | fix: security hardening (MQTT TLS, OAuth, bounded reads) | corporatepiyush | **Bug Fix/Security** | **Crítico: corrige TLS inseguro por padrão** |
| [#3245](https://github.com/sipeed/picoclaw/pull/3245) | refactor(skills): single-pass escapeXML | corporatepiyush | Refactoring | Performance: -3 alocações |
| [#3244](https://github.com/sipeed/picoclaw/pull/3244) | refactor(seahorse): cut allocations in XML assembly | corporatepiyush | Refactoring | Performance: reduz alocações |
| [#3243](https://github.com/sipeed/picoclaw/pull/3243) | refactor(seahorse): use strings.Builder | corporatepiyush | Refactoring | Performance: O(n²) → O(n) |
| [#323](https://github.com/sipeed/picoclaw/pull/323) | fix(discord): handle character limits | Andyi955 | Bug Fix | Estabilidade Discord |

**Destaque:** O PR [#3246](https://github.com/sipeed/picoclaw/pull/3246) corrige uma **falha crítica de segurança** no MQTT que desabilitava a verificação de certificados TLS (`InsecureSkipVerify: true`). Este é um improvement essencial para ambientes de produção.

### PR Aberto
- [#3261](https://github.com/sipeed/picoclaw/pull/3261) — Add zh-TW locale (Traditional Chinese) por PeterDaveHello — Aguardando review

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| # | Título | Autor | Comentários | Tipo | Status |
|---|--------|-------|-------------|------|--------|
| [#2796](https://github.com/sipeed/picoclaw/issues/2796) | Histórico de chat mostra apenas última mensagem do usuário | EverestSnow | 7 | Bug | CLOSED |
| [#3201](https://github.com/sipeed/picoclaw/issues/3201) | Support streaming output for QQ channel | YsLtr | 4 | Feature | CLOSED |

### Análise

- **Issue #2796 (7 comentários):** Bug significativo de UX — ao navegar no histórico de conversas, apenas a última mensagem do usuário é exibida. A comunidade sinalizou que a compressão de contexto não deveria afetar a visualização do usuário. **Impacto:** Usabilidade em conversas longas.

- **Issue #3201 (4 comentários):** Demanda por streaming em canais QQ (equivalente ao Telegram/WhatsApp na China). Currently only Telegram e WebSocket suportam streaming token-by-token. **Indicador de roadmap:** Expansão de canais com suporte nativo a streaming.

---

## 5. Bugs e Estabilidade

### Issue Aberta (1)

**[#3292](https://github.com/sipeed/picoclaw/issues/3292)** — CPU usage too high when focus on input box
- **Severidade:** Média-Alta
- **Ambiente:** PicoClaw 0.3.1, Go 1.26, Firefox, Debian x64
- **Canal:** Web
- **Sintoma:** CPU elevado ao focar na caixa de input do chat
- **Status:** Reportada em 2026-07-24, aguardando triagem

### Issues Fechadas como Stale (2)

- [#2796](https://github.com/sipeed/picoclaw/issues/2796) — **Bug de histórico** — resolvida (comentários indicam necessidade de validação adicional)
- [#3201](https://github.com/sipeed/picoclaw/issues/3201) — **Feature QQ streaming** — closed as stale (provavelmenteadragendada para future release)

### Tendência

Stale labels indicam acumulo técnico. Recomenda-se triagem de issues antigas para evitar perda de feedback válido.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Feature Request Aberta
**[#3292](https://github.com/sipeed/picoclaw/issues/3292)** — Embora seja bug, revela necessidade de:
- Otimização de rendering no frontend Web

### Features em Demanda (baseado em issues fechadas)

| Feature | Prioridade | Canal | Status |
|---------|------------|-------|--------|
| Streaming output | Alta | QQ | Aguardando implementação |
| zh-TW localization | Média | WebUI | PR #3261 em review |
| Czech translations | Baixa | i18n | Merged |

### Sinais de Roadmap

1. **Suporte a streaming em múltiplos canais** — Telegram e WebSocket já têm; QQ é o próximo
2. **Segurança MQTT** — hardening已完成
3. **Performance frontend** — issue #3292 pode indicar necessidade de audit no renderer

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Dor | Severidade | Frequência | Issue |
|-----|------------|------------|-------|
| Histórico de chat incompleto | Alta | Múltiplos | #2796 |
| CPU elevado na interface web | Alta | 1 report | #3292 |
| Ausência de streaming no QQ | Média | 1 request | #3201 |

### Cenários de Uso Identificados

- **Uso em produção com broker MQTT** — vulnerabilidade de segurança descoberta e corrigida (PR #3246)
- **Usuários internacionais** — demanda por locales adicionais (zh-TW, Czech)
- **Integração com Discord** — stable após fix de character limits (PR #323)

### Indicadores de Satisfação

- **Contribuições ativas:** 3+ contribuidores externos (KrtCZ, corporatepiyush, PeterDaveHello)
- **Resposta da equipe:** Issues respondidas em até 24h (baseado em timestamps)
- **Qualidade de PRs:** Refactorings focados em performance demonstram maturidade técnica

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta/Review Prolongado

| # | Título | Criado | Atualizado | Days Idle | Prioridade |
|---|--------|--------|------------|-----------|------------|
| [#3261](https://github.com/sipeed/picoclaw/pull/3261) | Add zh-TW locale | 2026-07-16 | 2026-07-24 | 8 dias | Média |
| [#3292](https://github.com/sipeed/picoclaw/issues/3292) | CPU high on focus | 2026-07-24 | 2026-07-24 | 0 dias | **Alta** |

### Recomendações

1. **Revisar PR #3261** — Contribuidor externo aguardando feedback há 8 dias
2. **Triangular issue #3292** — Bug de performance reportado há <24h, needs reproducible steps
3. **Stale management** — Limpar issues marcadas como stale para melhorar sinal/ruído

---

## Métricas Resumidas

| Métrica | Valor | Tendência |
|---------|-------|----------|
| PRs processados (24h) | 7 | ▲ Alta |
| Issues fechadas | 2 | ▲ Positiva |
| Issues abertas | 1 | — Neutra |
| Releases | 0 | — Sem mudança |
| Contribuidores ativos | 4+ | ▲ Saúde boa |

---

*Relatório gerado em 2026-07-25 com base em dados do GitHub do projeto sipeed/picoclaw.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-07-25

---

## 1. Panorama do Dia

O projeto IronClaw apresenta **alta atividade** em 25 de julho de 2026, com 31 issues e 50 PRs atualizados nas últimas 24h. A equipe demonstra foco intenso na estabilização para o lançamento v1.0.0, evidenciando-se pela quantidade de issues com label `v1-launch-checklist` e pela execução de múltiplos PRs de refatoração e otimização. O backend (Rust) mantém fluxo contínuo de merges e dependências atualizadas, enquanto o frontend WebUI enfrenta uma fila relevante de bugs de usabilidade e performance. O ecossistema de canais (Telegram/Slack) concentra os bugs mais críticos (P1), demandando atenção imediata antes da release.

---

## 2. Lançamentos

**Nenhum novo release registrado nas últimas 24h.**

O projeto encontra-se em fase de pré-lançamento (v1.0.0-rc.8 conforme reportado em [#6651](https://github.com/nearai/ironclaw/issues/6651)). O último release formal (#5598) foi registrado em 2026-07-03, com updates nos crates `ironclaw_common` (0.4.2 → 0.5.0, com breaking changes), `ironclaw_safety` (0.2.2 → 0.2.3) e `ironclaw_skills` (0.3.0 → 0.4.0, com breaking changes).

**Nota de migração pendente:** O upgrade de versões pré-Reborn para v1.0.0 está explicitamente bloqueado até que migrations estejam disponíveis ([#6656](https://github.com/nearai/ironclaw/issues/6656)).

---

## 3. Progresso do Projeto

### PRs Fechados/Merged Hoje

| PR | Título | Impacto |
|----|--------|---------|
| [#6662](https://github.com/nearai/ironclaw/pull/6662) | Fix durable install CI stack overflow | **Crítico** — Resolve stack overflow na CI após #6615 |
| [#6619](https://github.com/nearai/ironclaw/pull/6619) | Move product auth out of composition | **Arquitetural** — Separa responsabilidades, move auth para `ironclaw_auth` |
| [#6637](https://github.com/nearai/ironclaw/pull/6637) | Document Reborn storage landscape and target relational model | **Documentação** — Define modelo híbrido de armazenamento (filesystem + relacional) |

### PRs Abertos de Alto Impacto

| PR | Título | Tamanho | Risco | Status |
|----|--------|---------|-------|--------|
| [#6655](https://github.com/nearai/ironclaw/pull/6655) | Normalize filesystem-backed extension state records | XL | Low | Em revisão |
| [#6616](https://github.com/nearai/ironclaw/pull/6616) | Shrink composition extension host | XL | Low | Em revisão |
| [#6531](https://github.com/nearai/ironclaw/pull/6531) | fix(extensions): apply admin OAuth config at runtime | XL | Medium | Em revisão |
| [#6659](https://github.com/nearai/ironclaw/pull/6659) | test(trace): canonicalize versioned replay contract | XL | Low | Em revisão |
| [#6364](https://github.com/nearai/ironclaw/pull/6364) | feat(channels): Telegram/Slack channel attachments | XL | Low | Em revisão |

**Destaque:** A normalização de state records de extensões ([#6655](https://github.com/nearai/ironclaw/pull/6655)) é foundational para a estabilidade da v1, tipificando persistência de manifests, instalações e credenciais.

---

## 4. Temas Quentes da Comunidade

### Issues com Mais Comentários

| # | Título | Comentários | Tensão |
|---|--------|-------------|--------|
| [#6544](https://github.com/nearai/ironclaw/issues/6544) | No UI/CLI para configurar redirect URI OAuth | 4 | **Resolvido** — Blocker para Slack auth em produção |
| [#6524](https://github.com/nearai/ironclaw/issues/6524) | Epic: Hermetic capability and journey testing platform | 3 | **Estratégico** — Frage central: coverage determinístico |
| [#6614](https://github.com/nearai/ironclaw/issues/6614) | Slack OAuth binding permanece BindingRequired | 1 | **Resolvido** — Inconsistência entre UI e storage |
| [#6521](https://github.com/nearai/ironclaw/issues/6521) | ironclaw CLI não disponível no agent staging | 2 | **Resolvido** — SSH acesso quebrado |

### Análise de Demandas

1. **OAuth/Auth Flow (#6544, #6614):** Comunidade reporta múltiplos pontos de dor com configuração de OAuth (Slack, Telegram). Os problemas foram resolvidos, mas indicam necessidade de UX mais robusto para configuração de credenciais.

2. **Testing Platform (#6524):** Epic abrangente que questiona se o projeto possui coverage determinístico para todas as capacidades e jornadas críticas. Gerará debate sobre estratégia de QA.

3. **Skill Self-Creation (#6641):** Design doc para habilidade de auto-criação de skills pelo agente. Demanda por autonomia operacional crescente.

---

## 5. Bugs e Estabilidade

### Bugs P1 (Críticos — Prioridade Immediate)

| # | Título | Canal | Severidade |
|---|--------|-------|------------|
| [#6645](https://github.com/nearai/ironclaw/issues/6645) | Slack send_message reporta sucesso mas DM não é entregue | Slack | P1 |
| [#6644](https://github.com/nearai/ironclaw/issues/6644) | Telegram replies entregues ao usuário errado | Telegram | P1 |
| [#6643](https://github.com/nearai/ironclaw/issues/6643) | Telegram mensagens aceitas mas nunca processadas após pairing | Telegram | P1 |

**Análise:** 3 bugs P1 concentrados em canais de mensagens. Isso representa risco significativo para用户体验 e deve ser priorizado antes do v1.0.0.

### Bugs P2 (Altos)

| # | Título | Área |
|---|--------|------|
| [#6649](https://github.com/nearai/ironclaw/issues/6649) | Tool activity panel aparece após resposta (não durante execução) | WebUI |
| [#6648](https://github.com/nearai/ironclaw/issues/6648) | Mensagens de erro de tool duplicadas e inconsistentes | WebUI |
| [#6646](https://github.com/nearai/ironclaw/issues/6646) | Agent ignora ação Google Sheets, reporta apenas email | Ferramentas |
| [#6642](https://github.com/nearai/ironclaw/issues/6642) | models list mostra provider/model desatualizado após switch | CLI |

### Bugs de Usabilidade (UI/UX)

| # | Título | Impacto |
|---|--------|---------|
| [#6651](https://github.com/nearai/ironclaw/issues/6651) | Agent repete texto da pergunta após responder | Confusão visual |
| [#6650](https://github.com/nearai/ironclaw/issues/6650) | Agentfabrica dados AQI de fontes mistas/cache | Acurácia |
| [#6620](https://github.com/nearai/ironclaw/issues/6620) | Cancelamento de run falha deixa chat em estado incorreto | Consistência |
| [#6621](https://github.com/nearai/ironclaw/issues/6621) | Modal de configuração de extensões não gerencia foco de teclado | Acessibilidade |
| [#6622](https://github.com/nearai/ironclaw/issues/6622) | Filtro de automações completas causa flash de skeleton loading | UX |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Identificadas

| # | Título | Área | Sinais de Prioridade |
|---|--------|------|---------------------|
| [#6641](https://github.com/nearai/ironclaw/issues/6641) | Skill Self-Creation Design Doc | Core/Reborn | Epic draft, alta ambição |
| [#6635](https://github.com/nearai/ironclaw/issues/6635) | Restaurar Docker image build na CI | DevOps | Bloqueador de release |
| [#6631](https://github.com/nearai/ironclaw/issues/6631) | Otimizar Chat Markdown e Streaming Render | WebUI | Performance crítica |
| [#6630](https://github.com/nearai/ironclaw/issues/6630) | Add Static Asset Compression, Caching, Image Optimization | WebUI | Epic #6628 |
| [#6629](https://github.com/nearai/ironclaw/issues/6629) | Route-Level Code Splitting | WebUI | Epic #6628 |
| [#6628](https://github.com/nearai/ironclaw/issues/6628) | **Epic: Improve WebUI Bundle Size and Loading Performance** | WebUI | Meta-v2 release |

### Sinais de Roadmap

1. **WebUI v2:** Epic [#6628](https://github.com/nearai/ironclaw/issues/6628) consolida múltiplas otimizações de performance. Design system tokens ([#5563](https://github.com/nearai/ironclaw/pull/5563)) em andamento.

2. **Signing/Attested Runtime:** Workstream maduro com 4+ PRs open ([#4015](https://github.com/nearai/ironclaw/pull/4015), [#4104](https://github.com/nearai/ironclaw/pull/4104), [#4055](https://github.com/nearai/ironclaw/pull/4055), [#4054](https://github.com/nearai/ironclaw/pull/4054)) — indica feature planejada para v1 ou v1.x.

3. **Manifest V3:** Contrato definido ([#6490](https://github.com/nearai/ironclaw/issues/6490) closed) — base para extensões plugáveis.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Categoria | Descrição | Frequência |
|-----------|-----------|------------|
| **Canais** | Telegram/Slack intermitentes, mensagens não entregue ou entregue errada | Alta |
| **Confiabilidade** | Agentfabrica dados, repete inputs, falha em ações | Média |
| **CLI/TUI** | Comandos desatualizados após mudança de provider | Baixa |
| **Configuração** | OAuth complexo de configurar, sem UI adequada | Média |

### Cenários de Uso Problemáticos

1. **Webhook staging bloqueado:** Autenticação preview em staging bloqueia webhooks externos ([#6548](https://github.com/nearai/ironclaw/issues/6548)).

2. **Telegram após reinstall:** Reinstall de extensão sem full setup resulta em webhook secret ausente ([#6605](https://github.com/nearai/ironclaw/issues/6605)).

3. **Google Sheets ignorado:** Agent realiza 26 chamadas mas nunca escreve na planilha ([#6646](https://github.com/nearai/ironclaw/issues/6646)).

### Feedback Positivo Implícito

- Estrutura de extensões plugáveis (Memory Providers [#6482](https://github.com/nearai/ironclaw/issues/6482), Manifest V3 [#6490](https://github.com/nearai/ironclaw/issues/6490)) recebida como arquitetura sólida.
- Community contributing ativamente com design docs e taxonomy de failures ([#6633](https://github.com/nearai/ironclaw/issues/6633)).

---

## 8. Backlog que Merece Atenção

### Issues Sem Atividade Recente (Potencial Stale)

| # | Título | Criado | Comentários | Observação |
|---|--------|--------|-------------|------------|
| [#4015](https://github.com/nearai/ironclaw/pull/4015) | feat(signing): request_signature tool | 2026-05-24 | — | 2 meses open, aguardando review |
| [#4055](https://github.com/nearai/ironclaw/pull/4055) | feat(signing): TrustEnrollment ceremony | 2026-05-25 | — | 2 meses open |
| [#4104](https://github.com/nearai/ironclaw/pull/4104) | feat(signing): grant expiry + binding tenant-key | 2026-05-27 | — | 2 meses open |
| [#4054](https://github.com/nearai/ironclaw/pull/4054) | test(signing): multi-tenant isolation | 2026-05-25 | — | 2 meses open |

### Riscos de Acúmulo

1. **Signing Feature Set:** 4 PRs relacionados a signing aguardando merge há ~2 meses. Se não priorizados, podem gerar conflicts com work recente (ex: [#6619](https://github.com/nearai/ironclaw/pull/6619) moveu auth).

2. **Design System (#5563):** PR de Fever/2026 em "feedback being resolved" — decisão de produto pendente sobre escopo.

3. **CI Docker Build (#6635):** Requer decisão sobre estratégia de release (当前 apenas cargo-dist artifacts).

---

## Métricas Resumidas do Dia

| Métrica | Valor | Tendência |
|---------|-------|-----------|
| Issues ativas | 25 | Neutra |
| Issues fechadas | 6 | Positiva |
| PRs abertos

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório de Projeto — CoPaw (QwenPaw)

**Data:** 2026-07-25  
**Período analisado:** Últimas 24h  
**Repositório:** [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw)

---

## 1. Panorama do dia

O projeto CoPaw apresenta **alta atividade** nas últimas 24h, com 47 issues e 36 PRs atualizados. A comunidade demonstra forte engajamento com a nova plataforma PawApp introduzida na v2.0.1, enquanto a versão 2.0 continua enfrentando problemas de regressão — particularmente overhead de ~2 segundos por resposta e quebras de funcionalidades existentes como SSH Offline e MCP Tools. O time de desenvolvimento mantém pipeline saudável com 13 PRs merged/fechados e 23 ainda em review, indicando ciclo de release ativo. A distribuição entre bugs (3+ reports), enhancements (8+ solicitações) e features (RAG, multi-model) reflete uma base em maturação pós-migração para agentscope 2.0.

---

## 2. Lançamentos

### v2.0.1 (Stable)
**Link:** [Release v2.0.1](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.0.1)

| Componente | Mudança |
|------------|---------|
| **PawApp Platform** | Nova SDK + Kanban App para plugins construirem UIs interativas |
| **Kanban App** | Quadro de tarefas integrado para gestão de projetos dentro do QwenPaw |

**Nota:** Release focado em extensibilidade via plataforma de mini-apps.

---

### v2.0.1-beta.3 (Patch)
**Link:** [Release v2.0.1-beta.3](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.0.1-beta.3)

| Componente | Mudança |
|------------|---------|
| `console` | Estabilização do memo de opções de chat e redução de re-parsing de SSE |
| Version bump | Preparação para release stable v2.0.1 |

**Breaking changes:** Nenhum registrado nesta versão.  
**Notas de migração:** Usuários em versões beta anteriores devem atualizar para evitar instabilidade no console.

---

## 3. Progresso do Projeto

### PRs Merged/Closed (13 total)

| PR | Autor | Título | Impacto |
|----|-------|--------|---------|
| [#6118](https://github.com/agentscope-ai/QwenPaw/pull/6118) | lamnguyen3119 | `feat(channels): add Zalo Bot channel` | Novo canal de integração (Zalo — Vietnã) |
| [#5698](https://github.com/agentscope-ai/QwenPaw/pull/5698) | x1n95c | `feat(tools): adapt buildin tool run_tool_batch to agentscope 2.0` | Migração de ferramenta para compatibilidade com agentscope 2.0 |
| [#6396](https://github.com/agentscope-ai/QwenPaw/pull/6396) | lalaliat | `feat(inbox): wobble sidebar inbox on new approvals` | UX — animações de notificação no inbox |
| [#6401](https://github.com/agentscope-ai/QwenPaw/issues/6401) | tppioneer | Bug: scheduled tasks sobrescrevendo histórico | **Bug fix** — histórico de sessão preservado |
| [#6341](https://github.com/agentscope-ai/QwenPaw/issues/6341) | SnowTQ | Bug: canal deletado ainda selecionado por padrão | **Bug fix** — seleção de canal corrigida |
| [#6451](https://github.com/agentscope-ai/QwenPaw/issues/6451) | Hazemaan | Switch Brains Mid-Conversation | **Feature shipped** — seletor de agentes no chat |
| [#6450](https://github.com/agentscope-ai/QwenPaw/issues/6450) | Hazemaan | Web-Search Toggle | **Feature shipped** — toggle de busca web |
| [#6449](https://github.com/agentscope-ai/QwenPaw/issues/6449) | Hazemaan | Per-Chat Sampling Overrides | **Feature shipped** — parâmetros por chat |
| [#6448](https://github.com/agentscope-ai/QwenPaw/issues/6448) | Hazemaan | Embedded Mini-Apps | **Feature shipped** — mini-apps na sidebar |
| [#6447](https://github.com/agentscope-ai/QwenPaw/issues/6447) | Hazemaan | Built-in Notes | **Feature shipped** — notas com IA |
| [#6446](https://github.com/agentscope-ai/QwenPaw/issues/6446) | Hazemaan | One-Click OCR | **Feature shipped** — OCR para imagens/PDFs |
| [#6445](https://github.com/agentscope-ai/QwenPaw/issues/6445) | Hazemaan | Built-in Image Generation | **Feature shipped** — geração de imagens |
| [#6444–#6440](https://github.com/agentscope-ai/QwenPaw/issues/6444) | Hazemaan | Translation Panel, Lazy Loading, Sub-Agents, MCP Bundled, Backup/Sync, Multi-User, Embed Widget | **Feature pack shipped** — 7 features de UX/core |

**Destaque:** 11 features fechadas pelo mesmo contribuidor (Hazemaan) em um único dia indicam batch review ativo ou contribuição coordenada.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários)

| Issue | Tipo | Comentários | Resumo |
|-------|------|-------------|--------|
| [#5980](https://github.com/agentscope-ai/QwenPaw/issues/5980) | Bug | 7 | v2.0.0: SSH Offline e Profiles retornando 404 após upgrade |
| [#6307](https://github.com/agentscope-ai/QwenPaw/issues/6307) | Performance | 7 | Overhead de ~2s por resposta vs v1.x |
| [#2999](https://github.com/agentscope-ai/QwenPaw/issues/2999) | Bug | 3 | MCP repeated registration causando task cancellation |
| [#6405](https://github.com/agentscope-ai/QwenPaw/issues/6405) | Bug | 3 | MCP tools reportando "Tool not found" após upgrade |
| [#6401](https://github.com/agentscope-ai/QwenPaw/issues/6401) | Bug | 3 | Scheduled tasks sobrescrevendo histórico (CLOSED ✓) |
| [#6408](https://github.com/agentscope-ai/QwenPaw/issues/6408) | Feature | 2 | Solicitar undo/redo para conversas (estilo Cherry Studio) |
| [#6432](https://github.com/agentscope-ai/QwenPaw/issues/6432) | Feature | 1 | Knowledge Base integrada (RAG) — altamente demandada |

### Análise de Demandas

**Problemas de Migração v1.x → v2.0:**
- Perda de features (SSH Offline, Profiles)
- Incompatibilidades de API causando crashes
- Usuários reticentes em atualizar

**Performance:**
- Regressão de 2s por reply na v2.0 é crítica para UX
- Impacta todos os usuários, não apenas edge cases

**MCP (Model Context Protocol):**
- 2 issues ativas sobre problemas de MCP (#2999, #6405)
- Indica adoption growing do protocolo

**Features Mais Solicitadas:**
1. **RAG/Knowledge Base** (#6432) — capacidade mais pedida em apps AI locais
2. **Multi-model por agente** (#6455) — rodar múltiplos modelos em paralelo
3. **Undo para conversas** (#6408) — qualidade de vida essencial

---

## 5. Bugs e Estabilidade

### Bugs Abertos (por severidade estimada)

| Severidade | Issue | Título | Status |
|------------|-------|--------|--------|
| 🔴 **Crítica** | [#6307](https://github.com/agentscope-ai/QwenPaw/issues/6307) | Overhead de 2s por reply (regressão v2.0) | OPEN — 7 comments |
| 🔴 **Crítica** | [#5980](https://github.com/agentscope-ai/QwenPaw/issues/5980) | SSH Offline e Profiles 404 após upgrade | OPEN — 7 comments |
| 🟠 **Alta** | [#6407](https://github.com/agentscope-ai/QwenPaw/issues/6407) | ReAct Agent: tool_result混入 assistant causa erro 400 | OPEN — 2 comments |
| 🟠 **Alta** | [#6258](https://github.com/agentscope-ai/QwenPaw/issues/6258) | OpenAI max_tokens não funciona | OPEN — 2 comments |
| 🟠 **Alta** | [#2999](https://github.com/agentscope-ai/QwenPaw/issues/2999) | MCP registration repetido → CancelledError | OPEN — 3 comments |
| 🟡 **Média** | [#6405](https://github.com/agentscope-ai/QwenPaw/issues/6405) | MCP tool_name com [mcp-key]__ prefixo não reconhecido | OPEN — 3 comments |
| 🟡 **Média** | [#6457](https://github.com/agentscope-ai/QwenPaw/issues/6457) | Modo tarefa gera histórico duplicado | OPEN — 1 comment |

### Bugs Corrigidos Hoje

| Issue | Título | Link |
|-------|--------|------|
| #6401 | Scheduled tasks sobrescrevendo histórico | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/6401) |
| #6341 | Canal deletado ainda selecionado | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/6341) |

**Métricas de estabilidade:** 2 bugs fechados vs 7 bugs abertos representa taxa de resolução de ~22% no período — adequada para projeto ativo, mas 2 bugs críticos pendentes exigem atenção prioritária.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features (últimas 24h)

| Feature | Issue | Descrição | Potencial Impact |
|---------|-------|-----------|------------------|
| **Knowledge Base RAG** | [#6432](https://github.com/agentscope-ai/QwenPaw/issues/6432) | Upload de PDFs/DOCX/TXT/MD/CSV para retrieval automático | 🔥 Muito alto — feature mais pedida |
| **Multi-model por Agent** | [#6455](https://github.com/agentscope-ai/QwenPaw/issues/6455) | Rodar múltiplos modelos em paralelo e agregar resultados | 🔥 Alto — caso de uso avançado |
| **Undo/Redo Chat** | [#6408](https://github.com/agentscope-ai/QwenPaw/issues/6408) | Reverter última pergunta+resposta | 🔥 Alto — qualidade de vida |
| **Copy menu on selection** | [#6454](https://github.com/agentscope-ai/QwenPaw/issues/6454) | Menu contextual de copiar texto selecionado | 🟡 Médio |
| **Preserve Chinese filenames** | [#6453](https://github.com/agentscope-ai/QwenPaw/issues/6453) | Exibir nomes de arquivo originais em vez de encoded | 🟡 Médio |
| **Token stats por agent** | [#6392](https://github.com/agentscope-ai/QwenPaw/issues/6392) | Estatísticas de consumo de tokens por agente | 🟡 Médio |

### PRs de Feature em Desenvolvimento

| PR | Título | Estágio |
|----|--------|---------|
| [#6284](https://github.com/agentscope-ai/QwenPaw/pull/6284) | PawApp Creator (script → storyboard → video) | Under Review |
| [#6323](https://github.com/agentscope-ai/QwenPaw/pull/6323) | Staged compaction + durable task continuity | Under Review |
| [#5692](https://github.com/agentscope-ai/QwenPaw/pull/5692) | Reranker para memory search (ReMe) | Under Review |
| [#6384](https://github.com/agentscope-ai/QwenPaw/pull/6384) | AskUserQuestion tool com UI estruturada | Open |
| [#6397](https://github.com/agentscope-ai/QwenPaw/pull/6397) | Integração Codex, Qoder, Skills, MCP | Under Review |
| [#6424](https://github.com/agentscope-ai/QwenPaw/pull/6424) | Desktop GUI automation (Windows/macOS) | Open |
| [#6269](https://github.com/agentscope-ai/QwenPaw/pull/6269) | Workspace checkpoint management | Open |

### Sinais de Roadmap

1. **PawApp Ecosystem:** Plataforma de mini-apps é prioritária (v2.0.1 shipped, mais apps em PR)
2. **MCP First-Class:** Múltiplos PRs focados em melhorar experiência MCP
3. **Desktop Automation:** Investimento em computer-use nativo
4. **Memory/RAG:** Reranker e knowledge base indicam direção de IA agents mais autônomos

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais

**1. Migração Quebrada (v1.x → v2.0)**
> *"After upgrading from v1.1.12 (QwenPaw.app) to v2.0.0 (QwenPaw Desktop.app), I noticed several features that were present in v1.1.12 are completely inaccessible in v2.0.0"*
> — [#5980](https://github.com/agentscope-ai/QwenPaw/issues/5980)

**2. Performance Regressão**
> *"Upgrading from v1.1.12.post2 to v2.0.0.post3 introduces approximately 2 seconds of fixed overhead on every simple conversational reply"*
> — [#6307](https://github.com/agentscope-ai/QwenPaw/issues/6307)

**3. Incompatibilidade de MCP**
> *"升级2.0以后，mcp工具总是提示Tool notfound... 不知道什么原因？"* (Após upgrade para 2.0, ferramentas MCP sempre mostram "Tool not found")
> — [#6405](https://github.com/agentscope-ai/QwenPaw/issues/6405)

### Cenários de Uso Identificados

| Cenário | Evidence |
|---------|----------|
| **Uso corporativo com scheduled tasks** | Bug de sobrescrita de sessão (#6401) |
| **Desenvolvimento de agentes com MCP** | 2+ issues sobre MCP, PR de integração (#6397) |
| **Multi-canal (Zalo)** | PR shipped de Zalo Bot (#6118) |
| **Automação desktop** | PR de computer-use nativo (#6424) |
| **Pesquisa com RAG** | Feature request #6432 + reranker PR #5692 |

### Satisfação vs Insatisfação

| Aspecto | Status | Base |
|---------|--------|------|
| **Novas features v2.0** | ✅ Positivo | 11 features shipped hoje |
| **Performance v2.0** | ⚠️ Negativo | Regressão de 2s documentada |
| **Migração de versão** | ❌ Negativo | Features quebradas reportadas |
| **MCP compatibility** | ⚠️ Parcial | Funciona, mas com issues |
| **UX geral** | ✅ Positivo | Enhancements de UX bem recebidos |

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta > 3 dias

| Issue | Criado | Days | Título |
|-------|--------|------|--------|
| [#2999](https://github.com/agentscope-ai/QwenPaw/issues/2999) | 2026-04-06 | ~110 dias | MCP repeated registration causing task cancellation |
| [#5980](https://github.com/agentscope-ai/QwenPaw/issues/5980) | 2026-07-12 | 13 dias | SSH Offline / Profiles 404 |
| [#6307](https://github.com/agentscope-ai/QwenPaw/issues/6307) | 2026-07-21 | 4 dias | Performance overhead 2s |

### PRs Entedidos em Review

| PR | Criado | Days | Título | Status |
|----|--------|------|--------|--------|
| [#5692](https://github.com/agentscope-ai/QwenPaw/pull/5692) | 2026-07-01 | ~24 dias | Reranker para memory search | Under Review |
| [#6269](https://github.com/agentscope-ai/QwenPaw/pull/6269) | 2026-07-20 | ~5 dias | Workspace checkpoint management | Under Review |
| [#6284](https://github.com/agentscope-ai/QwenPaw/pull/6284) | 2026-07-20 | ~5 dias | PawApp Creator | Under Review |
| [#6276](https://github.com/agentscope-ai/QwenPaw/pull/6276) | 2026-07-20 | ~5 dias | Unified browser SDK | Under Review |

### Recomendações Prioritárias

1. **[Crítico]** Responder #6307 — regressão de performance afeta todos os usuários
2. **[Crítico

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-07-25

---

## 1. Panorama do Dia

O projeto ZeroClaw mantém um **nível de atividade intenso** com 44 issues e 50 PRs atualizados nas últimas 24h, evidenciando uma rotina de desenvolvimento acelerada. Não houve novas releases no período, sugerindo que a equipe aguarda consolidação de PRs críticos antes de um próximotag. Observa-se uma **concentração significativa de esforços em segurança** (landlock sandbox, SSRF, verifiable intent) e **estabilidade de runtime**, com múltiplos bugs de severidade P1 em andamento. A comunidade demonstra engajamento substancial, com 14+ comentários no RFC de Work Lanes e Board Automation, indicando maturidade no processo de governança.

---

## 2. Lançamentos

**Nenhum novo release** foi publicado nas últimas 24h. O últimotag estável permanece **v0.8.3** (referenciado em múltiplos issues e PRs). Issues como [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) indicam que o roadmap para **v0.9.0** está em progresso, com tracker dedicado para auth, security hardening e gateway boundaries ([#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)).

---

## 3. Progresso do Projeto

Três PRs foram fechados/merged nas últimas 24h com impacto relevante:

| PR | Título | Impacto |
|----|--------|---------|
| [#9233](https://github.com/zeroclaw-labs/zeroclaw/pull/9233) | fix(runtime/security): Prevent landlock locks zeroclaw itself | **Crítico** — Corrigia auto-bloqueio do daemon no sandbox Landlock (S1, risco alto) |
| [#9243](https://github.com/zeroclaw-labs/zeroclaw/pull/9243) | fix(config): create map aliases in config init | Melhorava materialização de aliases dinâmicos em `config init` |
| [#8571](https://github.com/zeroclaw-labs/zeroclaw/pull/8571) | fix(delegate): skip global credential fallback for OAuth | Prevenia vazamento de credenciais em delegates OAuth |
| [#9301](https://github.com/zeroclaw-labs/zeroclaw/pull/9301) | chore(deps): bump stagex/core-filesystem | Atualização de dependência OCI |

O PR [#9233](https://github.com/zeroclaw-labs/zeroclaw/pull/9233) fechou o issue [#9204](https://github.com/zeroclaw-labs/zeroclaw/issues/9204), resolvendo um bug onde o Landlock sandbox restringia o próprio daemon ZeroClaw.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários/reações)

1. **[#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)** — RFC: Work Lanes, Board Automation, and Label Cleanup
   - **14 comentários** | Status: Accepted, rollout in progress
   - Proposta governança para automatizar roteamento de trabalho e limpar labels manuais
   - Relevância: Define processos de manutenção para contributors

2. **[#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074)** — audit: track 153 commits lost in bulk revert c3ff635
   - **4 comentários** | Closed
   - Rastreamento de recovery após reversão massiva de commits
   - Indica maturidade em gestão de incidentes

3. **[#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)** — v0.9.0 auth, security, gateway tracker
   - **2 comentários** | High risk, accepted
   - Coordena breaking changes e hardening para próxima versão major

### PRs em destaque pelo tamanho e risco

- **[#9251](https://github.com/zeroclaw-labs/zeroclaw/pull/9251)** (Size: XL, Risk: High): PostgreSQL como primeiro session backend suportado
- **[#9182](https://github.com/zeroclaw-labs/zeroclaw/pull/9182)** (Size: XL, Risk: High): Suporte a PowerShell nativo no Windows
- **[#9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109)** (Size: XL, Risk: High): Native Hailo-Ollama support
- **[#8713](https://github.com/zeroclaw-labs/zeroclaw/pull/8713)** (Size: XL, Risk: High): SSRF gate em file_download

---

## 5. Bugs e Estabilidade

### Bugs P1 (Críticos — workflow bloqueado)

| Issue | Título | Severidade | Status |
|-------|--------|------------|--------|
| [#6434](https://github.com/zeroclaw-labs/zeroclaw/issues/6434) | Shell tool calls refusadas em `autonomy level = "full"` | S1 | Accepted |
| [#9204](https://github.com/zeroclaw-labs/zeroclaw/issues/9204) | Landlock sandbox restringe o daemon ZeroClaw | S1 | Closed (via #9233) |
| [#9192](https://github.com/zeroclaw-labs/zeroclaw/issues/9192) | shared_budget TOCTOU pode wrap AtomicUsize; panic | S1 | In Progress |
| [#9191](https://github.com/zeroclaw-labs/zeroclaw/issues/9191) | Cron jobs sem wall-clock timeout | S1 | In Progress |
| [#9247](https://github.com/zeroclaw-labs/zeroclaw/issues/9247) | Shell Tool Workspace Boundary Bypass | S0 | Accepted |
| [#9290](https://github.com/zeroclaw-labs/zeroclaw/issues/9290) | Windows installer falha com TaskDialogIndirect | S1 | Open |
| [#9340](https://github.com/zeroclaw-labs/zeroclaw/issues/9340) | CLI cron jobs não entregam output | S1 | Open |

### Bugs P2 (Significativos)

- **[#8834](https://github.com/zeroclaw-labs/zeroclaw/issues/8834)** — config set não cria aliases fora de providers.*
- **[#9285](https://github.com/zeroclaw-labs/zeroclaw/issues/9285)** — nested set_prop mascara valores inválidos
- **[#9236](https://github.com/zeroclaw-labs/zeroclaw/issues/9236)** — Telegram aliases são descartados após reload
- **[#9240](https://github.com/zeroclaw-labs/zeroclaw/issues/9240)** — save_dirty dropa writes com dot em map key

**Nota de segurança**: O bug [#9247](https://github.com/zeroclaw-labs/zeroclaw/issues/9247) é classificado como S0 (data loss/security risk) — symlinks podem绕过 workspace boundaries no shell tool.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features com alto risco/impacto

| Issue/PR | Título | Risk | Status |
|----------|--------|------|--------|
| [#9338](https://github.com/zeroclaw-labs/zeroclaw/pull/9338) | Crusoe Managed Inference como provider first-class | Medium | Open |
| [#9335](https://github.com/zeroclaw-labs/zeroclaw/issues/9335) | Suporte a data-wrapped OpenAI responses | Medium | Accepted |
| [#8228](https://github.com/zeroclaw-labs/zeroclaw/issues/8228) | DingTalk streaming messages | High | Accepted |
| [#9158](https://github.com/zeroclaw-labs/zeroclaw/issues/9158) | Signal: processar "Note to Self" | Medium | In Progress |
| [#9288](https://github.com/zeroclaw-labs/zeroclaw/issues/9288) | RFC: Define execution-tree iteration budget | High | Accepted |
| [#9330](https://github.com/zeroclaw-labs/zeroclaw/issues/9330) | RFC: AI-assisted PR pre-review | High | No-stale |

### RFCs em progresso

- **[#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)** — Work Lanes, Board Automation, Label Cleanup (revisão 22)
- **[#9246](https://github.com/zeroclaw-labs/zeroclaw/issues/9246)** — Preserve Todo tracker durante ZeroCode ownership migration
- **[#9323](https://github.com/zeroclaw-labs/zeroclaw/issues/9323)** — Execution-tree iteration budget ownership

**Sinal de roadmap**: A convergência de PostgreSQL ([#9251](https://github.com/zeroclaw-labs/zeroclaw/pull/9251)), v0.9.0 tracker ([#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)) e múltiplas RFCs sugere que **v0.9.0 será uma release focada em infraestrutura e escalabilidade**.

---

## 7. Resumo de Feedback dos Usuários

### Dores relatadas explicitamente

1. **Latência em DingTalk**: Usuários aguardam resposta completa antes de receber mensagens ([#8228](https://github.com/zeroclaw-labs/zeroclaw/issues/8228))

2. **Configuração confusa**: Usuários não entendem que Code (ACP) não compartilha memória com Chat ([#9047](https://github.com/zeroclaw-labs/zeroclaw/issues/9047), sendo corrigido por [#9341](https://github.com/zeroclaw-labs/zeroclaw/pull/9341))

3. **Discord typing stuck**: Após reload via dashboard, indicador de digitação fica preso indefinidamente ([#9198](https://github.com/zeroclaw-labs/zeroclaw/issues/9198))

4. **Windows installer quebrado**: Usuários Windows não conseguem iniciar após instalar v0.8.3 ([#9290](https://github.com/zeroclaw-labs/zeroclaw/issues/9290))

5. **Skill frontmatter quebrado**: `always: true` em SKILL.md não funciona mais em compact prompt mode ([#7904](https://github.com/zeroclaw-labs/zeroclaw/issues/7904))

### Padrões de insatisfação

- **Config system**: Multiplos bugs interrelated (aliases, dot keys, map writes) indicam tech debt em `config.toml` handling
- **Security hardening**: landlock e SSRF representam surface area que usuários avançados已经开始 confiar
- **Channel reliability**: Telegram, Discord, Signal, QQ — todos com issues ativas sugere pressão em multi-channel support

---

## 8. Backlog que Merece Atenção

### Issues sem resposta significativa (muito tempo sem interação)

| Issue | Título | Criado | Última Atualização | Riscos |
|-------|--------|--------|-------------------|--------|
| [#7904](https://github.com/zeroclaw-labs/zeroclaw/issues/7904) | SKILL.md frontmatter `always: true` quebrado | 2026-06-17 | 2026-07-24 (1 comentário) | Medium, afeta produtividade |
| [#7872](https://github.com/zeroclaw-labs/zeroclaw/issues/7872) | QQ group replies precisam msg_id | 2026-06-17 | 2026-07-24 (1 comentário) | Medium, tracker |
| [#9198](https://github.com/zeroclaw-labs/zeroclaw/issues/9198) | Discord typing stuck | 2026-07-20 | 2026-07-24 (1 comentário) | High, UX degradado |

### PRs bloqueados por author action

- **[#8713](https://github.com/zeroclaw-labs/zeroclaw/pull/8713)** — SSRF fix (4+ semanas, needs-author-action)
- **[#9194](https://github.com/zeroclaw-labs/zeroclaw/pull/9194)** — KeySource trait extraction (needs-author-action)
- **[#8966](https://github.com/zeroclaw-labs/zeroclaw/pull/8966)** — Provider identity on usage events (needs-author-action)
- **[#9251](https://github.com/zeroclaw-labs/zeroclaw/pull/9251)** — PostgreSQL backend (needs-author-action, size: XL)

### Items técnicos sem movimento recente

- **[#9162](https://github.com/zeroclaw-labs/zeroclaw/issues/9162)** — OAuth retry loop refactor para oauth_common (P3, low priority mas tech debt)
- **[#9116](https://github.com/zeroclaw-labs/zeroclaw/issues/9116)** — ACP console splits thinking (S3, closed mas pode indicar regressão)

---

## Métricas Resumidas do Período

| Dimensão | Valor |
|----------|-------|
| Issues ativas | 36 |
| PRs abertos | 40 |
| Bugs P1 em aberto | 7 |
| RFCs em progresso | 3 |
| PRs merged/closed | 4 |
| Releases | 0 |

**Veredicto geral**: ZeroClaw demonstra **saúde de desenvolvimento robusta**, com atividade intensa e resolução ativa de security bugs críticos. O principal risco é o **acúmulo de tech debt em config system** e a **dependência de author action** em PRs de tamanho XL que bloqueiam features importantes como PostgreSQL backend e PowerShell support. A ausência de releases recentes sugere cautela em quality gates.

---

*Relatório gerado em 2026-07-25 com dados das últimas 24h do repositório [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw).*

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*