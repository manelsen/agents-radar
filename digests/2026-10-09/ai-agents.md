# Resumo diário do ecossistema de agentes de IA 2026-10-09

> Issues: 0 | PRs: 4 | Projetos cobertos: 7 | Gerado em: 2026-10-09 00:05 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório de Projeto NullClaw
## Data: 2026-10-09

---

## 1. Panorama do Dia

NullClaw apresenta hoje um perfil de atividade concentrado exclusivamente em pull requests. Nas últimas 24 horas, 4 PRs foram atualizados, todos em estado aberto, sem nenhuma mesclagem ou fechamento. Não há issues reportadas no período e tampouco releases publicadas. A atividade subdivide-se entre três features candidatas à próxima versão (HTTP CA override, streaming de tool calls nativos e modo de reasoning) e uma correção de estabilidade no módulo Discord. O estado geral sugere uma fase de maturação de funcionalidades antes de um próximo release tag.

---

## 2. Lançamentos

**Nenhum release publicado nas últimas 24 horas.**

O projeto nãoemitiu versões novas no período analisado. O último ciclo de release não aparece nos dados fornecidos, o que implica que a base de código principal ainda não recebeu um tag formal que incorpore as features em tramitação.

---

## 3. Progresso do Projeto

Nenhuma PR foi merged ou fechada nas últimas 24 horas. O estado atual das 4 PRs abertas indica que o código está em fase de revisão ou aguardando aprovação:

| PR | Tema | Status |
|----|------|--------|
| [#1049](https://github.com/nullclaw/nullclaw/pull/1049) | Correção de heartbeat Discord | Aberta |
| [#1050](https://github.com/nullclaw/nullclaw/pull/1050) | Modo reasoning em responses | Aberta |
| [#1051](https://github.com/nullclaw/nullclaw/pull/1051) | Override CA bundle via env var | Aberta |
| [#971](https://github.com/nullclaw/nullclaw/pull/971) | Tool calls nativos em streaming SSE | Aberta |

O Pull Request [#971](https://github.com/nullclaw/nullclaw/pull/971) é o mais antigo em tramitação (criado em 2026-06-29) e representa um desbloqueio significativo de funcionalidade: a separação do suporte a tool calls nativos do caminho de streaming, permitindo que provedores com suporte nativo emitam tool calls durante streams SSE sem forçar format via prompt injection.

---

## 4. Temas Quentes da Comunidade

Todas as 4 PRs abertas carecem de dados de engajamento quantificáveis (comentários e reactions não informados), impossibilitando hierarquização por popularidade. A análise recai, portanto, sobre a relevância técnica inferred dos resumos:

**Demanda técnica mais abrangente:** [#971](https://github.com/nullclaw/nullclaw/pull/971) — Ferramentas nativas em streaming SSE  
A problemática de dissociar tool calls do streaming callback resolve uma limitação de design que forçava trade-offs entre performance e funcionalidade. O impacto potencial é transversal a múltiplos provedores.

**Demanda de compatibilidade operacional:** [#1051](https://github.com/nullclaw/nullclaw/pull/1051) — CA bundle em rootfs mínimos  
A necessidade de um escape hatch via `NULLCLAW_CA_BUNDLE` surge de limitações práticas em ambientes isolados (Android sandboxes, distroless, scratch containers) onde o rescaneamento lazy de CAs do sistema falha. A feature atende um caso de uso real em produção.

**Demanda de suporte a modelos emergentes:** [#1050](https://github.com/nullclaw/nullclaw/pull/1050) — Reasoning mode  
O suporte a modelos de reasoning (Qwen3, GLM, R1) que retornam `reasoning_content` em vez de `content` é relevante para manter compatibilidade com uma geração crescente de modelos. A mudança ocorre em `providers/compatible.zig`, sugerindo extensão de abstração de provider.

---

## 5. Bugs e Estabilidade

**1 bug em correção — severidade potencialmente alta:**

**[#1049](https://github.com/nullclaw/nullclaw/pull/1049)** — `fix(discord): schedule heartbeats from the wall clock`  
- **Severidade:** Técnica — regressão de timing  
- **Resumo:** O thread de heartbeat do Discord avançava seu deadline contando iterações de `sleep(100ms)` em vez de medir tempo transcorrido real. O coalescing de timers do SO (mais agressivo em daemons background) fazia cada sleep durar mais que o nominal, resultando em heartbeat intervals efetiva > 100ms.  
- **Risco:** Desconexão por timeout no gateway Discord em cenários de carga.  
- **Estado:** PR aberta — aguardando review.

**Não há issues abertas** reportando crashes ou regressões no período de 24 horas.

---

## 6. Pedidos de Features e Sinais de Roadmap

Três features em tramitação sinalizam direções do roadmap:

**1. Suporte a CAs customizados em ambientes isolados** ([#1051](https://github.com/nullclaw/nullclaw/pull/1051))  
Injeção de `NULLCLAW_CA_BUNDLE` como variável de ambiente para sobrescrever a cadeia de CAs em rootfs mínimos. Resolve gaps de compatibilidade com `std.http` em Android e containers distroless.

**2. Tool calls nativos durante streaming SSE** ([#971](https://github.com/nullclaw/nullclaw/pull/971))  
Desacoplamento do suporte a native tool calls do callback de streaming. Permite que provedores que suportam tool calls during streaming os emitam sem injeção via prompt.

**3. Modo reasoning para respostas de modelos de reasoning** ([#1050](https://github.com/nullclaw/nullclaw/pull/1050))  
Introdução de `reasoning_mode` na configuração para expor reasoning-only responses de modelos como Qwen3, GLM e R1 que consomem todo o budget de completion sem retornar `content` tradicional.

---

## 7. Resumo de Feedback dos Usuários

Não há issues abertas no período, o que impede coleta de feedback direto de usuários via GitHub Issues. A inferência de dores reais provém exclusivamente das motivações declaradas nas PRs:

| Ddor inferida | Fonte |
|---------------|-------|
| Falha TLS silenciosa em containers sem CAs | [#1051](https://github.com/nullclaw/nullclaw/pull/1051) |
| Desconexões inexplicadas em bots Discord com carga | [#1049](https://github.com/nullclaw/nullclaw/pull/1049) |
| Impossibilidade de usar tool calls com LLMs via streaming | [#971](https://github.com/nullclaw/nullclaw/pull/971) |
| Modelos de reasoning retornam respostas vazias sem warning | [#1050](https://github.com/nullclaw/nullclaw/pull/1050) |

A ausência de issues e a concentração de atividade em PRs sugerem uma base de contribuidores ativa, mas com fluxo de comunicação mais orientado a código do que a discussões abertas.

---

## 8. Backlog que Merece Atenção

**PR antiga sem resolução — atenção prioritária:**

[#971](https://github.com/nullclaw/nullclaw/pull/971) — `feat(streaming): native tool calls during SSE streaming`  
- **Idade:** ~3 meses (criada em 2026-06-29)  
- **Atualizada em:** 2026-10-08 (houve interação recente)  
- **Bloqueio aparente:** Nenhum detalhe de blockers visível nos dados; a interação recente indica que não está abandonada, mas o período transcorrido justifica review prioritária para evitar technical debt em cascata.  
- **Impacto se merged:** Desbloqueia caso de uso significativo para agentes que consomem streams SSE de provedores com tool call nativo.

**Recomendação:** Priorizar review da PR #971. É a feature mais antiga em aberto e a de maior impacto arquitetural, pois remove uma limitação estrutural no agente loop que afeta qualquer integração via streaming.

---

**Dados compilados em:** 2026-10-09 | **Fonte:** github.com/nullclaw/nullclaw

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo do Ecossistema de Agentes de IA Open Source

**Data de referência:** 2026-10-09
**Projetos analisados:** 7 repositórios (NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw, ZeroClaw)

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **duas velocidades distintas** neste período. De um lado, **Hermes Agent, NanoBot, CoPaw e ZeroClaw** operam em regime de alta intensidade — cada um registrando 30 a 61 eventos diários, com dezenas de PRs merged e ciclos de correção acelerados. Do outro, **NullClaw, PicoClaw e IronClaw** mantêm ritmo moderado, focados em feature development sem a pressão de incidentes críticos. A dominante tendência técnica é a **maturidade do componente provider**: múltiplos projetos investem simultaneamente em separação de Responses API vs Chat Completions, suporte a modelos de reasoning (Qwen3, GLM, R1) e expansão de canais de comunicação (iMessage/SMS). Nenhum projeto publicou releases formais nas últimas 24h, sugerindo cautela coletiva em publicar antes de estabilizar correções pendentes.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs Atualizados | PRs Merged/Closed | Releases | Avaliação de Saúde |
|---------|--------------|-----------------|--------------------|----------|--------------------|
| **NullClaw** | 0 | 4 | 0 | 0 | 🟡 Maturação — 4 features em revisão |
| **NanoBot** | 4 processadas | 30 | 16 | 0 | 🟢 Muito ativo — ritmo saudável |
| **Hermes Agent** | 50 | 50 | ~10 estimados | v0.21.6 | 🟢 Maduro — regressão P0 aberta |
| **PicoClaw** | 0 | 2 | 0 | 0 | 🟡 Moderada — 1 PR stale requer atenção |
| **IronClaw** | 2 | 2 | 0 | 0 | 🟢 Estável — foco em features |
| **CoPaw** | 31 | 30 | 7 | 0 | 🟡 Ativa com críticos — memory leaks |
| **ZeroClaw** | 20 | 50 | 1 | 0 | 🟡 Estável — 3 bugs P1 abertos |

**Observação:** Hermes Agent destaca-se pelo volume absoluto (100 eventos combinados), enquanto NanoBot apresenta a melhor **taxa de fechamento** (16 PRs merged em 24h). CoPaw e ZeroClaw registram os bugs mais críticos em termos de impacto a produção (memory exhaustion, sandbox failures).

---

## 3. Posicionamento do Projeto Principal

### Hermes Agent (NousResearch) — Projeto de Maior Maturidade

**Vantagens frente aos pares:**
- **Volume de código integrado:** ~2.100 PRs consolidados em um único release patch (v0.21.6), indicando disciplina de agregação.
- **Extensão de canais mais madura:** Relay funcional para Discord, Matrix, Slack — competindo diretamente com a expansão de iMessage/SMS que IronClaw e NanoBot estão desenvolvendo.
- **Maturidade operacional:** Sistema de taxonomy de falhas automatizado (daily reports), circuit breakers para prune de 24h, snapshot pendente.

**Diferenças técnicas:**
- Arquitetura baseada em **gateway standalone** com multiplex, diferenciando-se de NullClaw (streaming nativo) e CoPaw (Tauri/Electron desktop).
- Sistema de **plugins com hooks** (`turn_route`, `pre_cron_delivery`) para extensibilidade declarativa.

**Tamanho da comunidade:** ~50 eventos/dia, maior volume absoluto de issues e PRs entre os analisados. Enterprise-ready com deployments Docker e Hermes Cloud.

---

## 4. Focos Técnicos Compartilhados

A análise revela **cinco áreas de convergência técnica** entre projetos não relacionados:

| Foco Técnico | Projetos Afetados | Natureza da Demanda |
|--------------|-------------------|---------------------|
| **Separação Responses API / Chat Completions** | NanoBot, NullClaw, Hermes Agent | Modelos GPT-6, muse-spark retornam 500 em Chat Completions; Responses API é o caminho correto |
| **Tool calls durante streaming SSE** | NullClaw (#971), NanoBot (#6105) | Provedores nativos emitem tool calls no stream; bypassing prompt injection é necessário |
| **Suporte a modelos de reasoning** | NullClaw (#1050), Hermes Agent | Modelos Qwen3, GLM, R1 emitem `reasoning_content` sem `content`; handlers divergem |
| **Expansão de canais SMS/iMessage** | IronClaw, NanoBot (#6081), CoPaw | Três projetos simultaneamente adicionando Sendblue ou equivalente |
| **Circuit breakers para loops infinitos** | NanoBot (#6106, #5781), CoPaw (#7722) | Compaction em loop, Dream ignorando `maxIterations`, memory exhaustion por doom-loops |

**Interpretação:** A fragmentação atual de providers (OpenAI, Anthropic, xAI, OpenCode, Codex, Bedrock) força cada projeto a implementar soluções proprietárias de roteamento e error handling, indicando oportunidade de padronização no ecossistema.

---

## 5. Análise de Diferenciação

| Dimensão | NullClaw | NanoBot | Hermes Agent | CoPaw | ZeroClaw |
|----------|----------|---------|--------------|-------|----------|
| **Público-alvo primário** | Desenvolvedores Zig, embedded/CLI | Equipes de dev, Copilot users | Operações enterprise, self-hosted | Usuários individuais e equipes (multi-tenant) | Segurança-conscious, air-gapped |
| **Arquitetura de provider** | Nativa Zig, streaming SSE | Responses API + LiteLLM | Native SDK + plugin system | Modular (provider abstrato) | RPC core + plugin egress |
| **Stack primário** | Zig | Python | Python + Docker | Python + Tauri2/Electron | Rust |
| **Maturidade de features** | Early (features candidatas) | Estável (beta 2.2.x) | Maduro (v0.21.6) | Beta (2.2.2 beta4) | Pre-v1.0 (v0.9.0) |
| **Foco de estabilidade** | — | Compaction loops | API server regression | Memory leaks, session persistence | Sandbox firejail, security |
| **Diferenciador técnico** | Tool calls nativos em SSE | Routing declarativo de providers | Gateway mode + Kanban | Desktop cross-platform | A2A protocol RFC, filesystem hardening |

**PicoClaw e IronClaw** ocupam nichos mais restritos: PicoClaw é especializado em integração com hardware (Sipeed) e interface web; IronClaw foca em quality benchmarking e taxonomy automatizada.

---

## 6. Tração e Maturidade da Comunidade

| Categoria | Projetos Líderes | Projetos Consolidando |
|-----------|------------------|----------------------|
| **Velocidade de iteração** | NanoBot (16 PRs/24h), Hermes Agent (50 eventos/24h) | NullClaw, IronClaw (<5 eventos/24h) |
| **Resolução de bugs** | NanoBot (75% issues fechadas em 24h), CoPaw (42%) | ZeroClaw (baixa taxa de fechamento) |
| **Manutenção de regressões** | Hermes Agent (regressão P0 v0.21.6 ativa) | CoPaw (memory exhaustion 60 dias) |
| **Engajamento de contribuidores** | Hermes Agent (múltiplos autores por PR), NanoBot (9 autores diferentes) | PicoClaw (baixo engagement) |
| **Maturidade de releases** | Hermes Agent (tagged releases regulares) | CoPaw, NullClaw (sem tags formais recentes) |

**Veredicto por estágio:**

- 🟢 **Maduro e迭代ando:** Hermes Agent, NanoBot
- 🟡 **Ativo com áreas de atenção:** CoPaw, ZeroClaw, NullClaw
- 🟡 **Consolidação técnica:** PicoClaw, IronClaw

---

## 7. Sinais de Tendência

Extrapolando do feedback coletivo das comunidades, cinco tendências de mercado emergem:

### 7.1 Padronização de Responses API
**Sinal:** NanoBot (#5204, 69 dias open), NullClaw (#971), Hermes Agent (routing GPT-6).  
**Interpretação:** A Responses API (OpenAI/xAI) está se tornando o contrato primário para modelos de próxima geração. Chat Completions será deprecado para determinados provedores.

### 7.2 Multi-canal como Expectativa
**Sinal:** IronClaw, NanoBot, CoPaw investindo simultaneamente em SMS/iMessage.  
**Interpretação:** Agentes de IA estão evoluindo de interfaces web para presença ubíqua (Slack, Discord, SMS, Matrix). A fragmentation de adapters de canal é um custo operacional crescente.

### 7.3 Enterprise Readiness
**Sinal:** CoPaw Hub multi-tenant (#7318), self-hosted marketplaces (#8015), air-gapped deployment; Hermes Agent Docker/Hermes Cloud tags.  
**Interpretação:** O mercado B2B está adotando agentes open source, demandando isolamento de tenancy, observabilidade (LangSmith, Langfuse) e deployment controlável.

### 7.4 Circuit Breakers e Safety
**Sinal:** NanoBot (compaction loops), CoPaw (memory exhaustion, doom-loops), Hermes Agent (prune data loss).  
**Interpretação:** Agentes autônomos de longa execução exigem proteções contra consumo descontrolado de recursos. Loop detection, iteration limits e timeout policies são requisitos de produção.

### 7.5 Agent-to-Agent Communication
**Sinal:** ZeroClaw RFC A2A protocol (#11254), Hermes Agent `turn_route` plugin hook (#98703).  
**Interpretação:** O ecossistema caminha para interoperabilidade entre agentes. Protocolos de comunicação (A2A, MCP) indicam maturação além do paradigma "humano + agente".

---

## Recomendações por Perfil

| Perfil | Recomendação |
|--------|--------------|
| **Desenvolvedor Zig / Embedded** | NullClaw — early stage para influenciar arquitetura de tool calls nativos |
| **DevOps / Self-hosted** | Hermes Agent — maturidade operacional,mas monitorar regressão v0.21.6 |
| **Equipes de desenvolvimento** | NanoBot — melhor ritmo de entrega, excelente taxa de resolução |
| **Usuários enterprise** | CoPaw — multi-tenant em desenvolvimento, atentção a memory leaks antes de produção |
| **Foco em segurança** | ZeroClaw — arquitetura sandbox-first, A2A RFC em curso |
| **Hardware/IoT** | PicoClaw — integração Sipeed, niche mas estável |

---

*Relatório compilado em 2026-10-09. Dados agregados dos resumos de atividade de NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw e ZeroClaw.*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-10-09

## 1. Panorama do Dia

O projeto NanoBot apresenta **alta atividade de desenvolvimento** em 9 de outubro de 2026, com 30 PRs atualizados nas últimas 24h e 4 issues processadas. O foco principal do dia foram **correções de estabilidade em provedores** (especialmente Responses API e ferramentas de raciocínio), além de melhorias incrementais no WebUI e performance. A comunidade demonstra engajamento significativo com 16 PRs merged/fechados hoje, indicando um ritmo saudável de entrega. Não houve lançamentos de novas versões, mas o backlog técnico revela demandas consolidadas por melhor arquitetura de providers e experiência do usuário.

---

## 2. Lançamentos

**Nenhuma release nas últimas 24h.** O último release marcado não foi detectado nos dados de atividade. O projeto continua em ritmo de desenvolvimento ativo sem versão formal publicada neste período.

---

## 3. Progresso do Projeto

### PRs Merged/Fechadas (16 total)

| # | Título | Área | Impacto |
|---|--------|------|---------|
| [#6107](https://github.com/HKUDS/nanobot/pull/6107) | fix(providers): prepare inline image batches and recover Codex transport | Providers | **Crítico** — Corrige timeouts com imagens inline em Responses, Chat Completions, Anthropic e Bedrock. Recupera transporte do Codex. |
| [#5863](https://github.com/HKUDS/nanobot/pull/5863) | fix(providers): handle raw reasoning_text events in SSE Responses | Providers | Corrige consumo de eventos `response.reasoning_text.delta` e `.done` no SSE Responses consumer (xAI Grok, OpenAI Codex). |
| [#5834](https://github.com/HKUDS/nanobot/pull/5834) | fix(providers): handle `response.reasoning_text.*` events | Providers | Complementar a #5863 — garante que `reasoning_content` seja acumulado corretamente. |
| [#6051](https://github.com/HKUDS/nanobot/pull/6051) | fix(providers): route Responses tool argument events by item ID | Providers | Corrige roteamento de `response.function_call_arguments.delta` usando `item_id` ao invés de `call_id`. |
| [#6020](https://github.com/HKUDS/nanobot/pull/6020) | fix(responses): serialize SDK models using API aliases | Providers | Compatibiliza com OpenAI SDK 3.8.0 e seu campo `async_` vs alias `async`. |
| [#5935](https://github.com/HKUDS/nanobot/pull/5935) | fix(copilot): route GPT-6 through Responses | Providers | Modelos GPT-6 agora usam Responses API ao invés de Chat Completions (onde falhavam). |
| [#6105](https://github.com/HKUDS/nanobot/pull/6105) | fix(providers): use Responses API for OpenCode Go muse-spark | Providers | Corrige roteamento de modelos muse-spark para Responses API (Chat Completions retorna 500). |
| [#5906](https://github.com/HKUDS/nanobot/pull/5906) | feat(providers): route OpenCode Go muse-spark through Responses | Providers | Adiciona suporte a `muse-spark-1.2-contributor` e `muse-spark-1.3-contributor` via Responses API. |
| [#6102](https://github.com/HKUDS/nanobot/pull/6102) | fix(webui): correct SkillHub skill detail links | WebUI | Corrige URLs quebradas nas páginas de detalhes de skills (faltava `/skills/` no path). |
| [#6089](https://github.com/HKUDS/nanobot/pull/6089) | feat(webui): add column directory picker and streamline composer | WebUI | Novo seletor de diretório in-app para o host do gateway; corrige alinhamento e remove outlines cinzas. |
| [#6101](https://github.com/HKUDS/nanobot/pull/6101) | ci: reduce test runtime while preserving coverage | CI/CD | Reduz tempo do job Windows de ~422s para ~200s otimizando fixtures e installs. |

**Resumo:** O dia foi marcado por **correções de stability em providers** (8 PRs), com foco em Responses API, reasoning tools e modelos Copilot/OpenCode Go. Melhorias de UX/WebUI (2 PRs) e otimização de CI (1 PR) completam o quadro.

---

## 4. Temas Quentes da Comunidade

### Issues com Mais Comentários (4 issues)

| # | Título | Comentários | Reações | Status |
|---|--------|-------------|---------|--------|
| [#6106](https://github.com/HKUDS/nanobot/issues/6106) | [bug] Compaction firing even on completely empty session + on itself without stopping | 4 | 0 | ✅ Closed |
| [#5781](https://github.com/HKUDS/nanobot/issues/5781) | [enhancement] Dream runs looping on read_file calls; dream.maxIterations deprecated/ignored | 4 | 0 | ✅ Closed |
| [#6084](https://github.com/HKUDS/nanobot/issues/6084) | Slack: compaction notices post as two permanent messages | 1 | 0 | 🔴 Open |

### Análise de Demandas

**Compaction loops (#6106, #5781)** — Ambos os issues revelam um problema recorrente com o mecanismo de compactação de contexto:
- **#6106:** Compaction dispara em loop durante a noite em sessões vazias, consumindo API desnecessariamente.
- **#5781:** "Dream" agent fica em loops de 1-2 horas re-lendo os mesmos arquivos, com `dream.maxIterations` sendo ignorado.

**Demanda implícita:** A comunidade precisa de **controle mais granular sobre o comportamento de auto-compaction** e limites de iteração que sejam respeitados.

**Slack UX (#6084)** — Usuários do Slack reportam mensagens duplicadas de compaction como "barulho" que polui conversas. A demanda por `showCompactionNotices` ou edição in-place indica preferência por **notificações não-intrusivas**.

---

## 5. Bugs e Estabilidade

### Bugs Reportados/Resolvidos Hoje

| # | Severidade | Descrição | Status |
|---|------------|-----------|--------|
| [#6106](https://github.com/HKUDS/nanobot/issues/6106) | **P1** 🔴 | Compaction dispara em loop em sessões vazias — alto consumo de API | Closed |
| [#5781](https://github.com/HKUDS/nanobot/issues/5781) | **P2** 🟡 | Dream agent ignora `dream.maxIterations` — loops de horas | Closed |
| [#6088](https://github.com/HKUDS/nanobot/issues/6088) | **P3** 🟢 | Botões Delete com contraste baixo em dark mode (WebUI) | Closed |
| [#6084](https://github.com/HKUDS/nanobot/issues/6084) | **P2** 🟡 | Slack: mensagens duplas de compaction | Open |

### Análise de Regressões

Os PRs merged hoje indicam **3 regressões potenciais prevenidos**:
- **Transporte Codex (#6107):** Imagens inline causando timeouts — recuperação crítica.
- **SDK Compatibility (#6020):** OpenAI SDK 3.8.0 introduziu incompatibilidade de serialização.
- **Tool Routing (#6051):** Mudanças na Responses API (item_id vs call_id) quebraram tool calls.

**Veredicto de estabilidade:** O projeto demonstra **saúde razoável** — bugs P1/P2 estão sendo corrigidos rapidamente, mas a taxa de issues de "loop infinito" sugere necessidade de circuit breakers mais robustos no agente.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Propostas (Open PRs)

| # | Título | Área | Prioridade | Sinal de Roadmap |
|---|--------|------|------------|------------------|
| [#6109](https://github.com/HKUDS/nanobot/pull/6109) | feat(agent): optional compactModelPreset for dedicated context-compaction provider | Agent | P2 | **Modularização de providers** — permite usar modelo mais barato para compaction |
| [#6032](https://github.com/HKUDS/nanobot/pull/6032) | feat(webui): add configurable local trusted extension surface | WebUI | P2 | **Extensibilidade** — modelo de plugins locais para trusted add-ons |
| [#5826](https://github.com/HKUDS/nanobot/pull/5826) | perf(session): accelerate canonical history search with FTS5 | Performance | P2 | **Escalabilidade** — busca em sessões longas com SQLite FTS5 cache |
| [#5204](https://github.com/HKUDS/nanobot/pull/5204) | feat(models): declare request APIs per preset | Providers | P1 | **Arquitetura de providers** — separação declarativa Chat vs Responses API |
| [#6081](https://github.com/HKUDS/nanobot/pull/6081) | feat(channels): add Sendblue iMessage and SMS transport | Channels | P2 | **Canais de comunicação** — expansão para iMessage/SMS |
| [#6103](https://github.com/HKUDS/nanobot/pull/6103) | docs: add CoreWeave Inference custom provider example | Documentation | P2 | **Ecosystem** — mais provedores documentados |
| [#5485](https://github.com/HKUDS/nanobot/pull/5485) | fix: restore LangSmith tracing for native providers | Observability | P2 | **Observabilidade** — restaura tracing após migração LiteLLM→native SDK |

### Tendências de Roadmap Detectadas

1. **Separação Responses API vs Chat Completions** — Decisões de roteamento ficam declarativas (#5204).
2. **Performance em escala** — FTS5 para sessões (#5826), otimização de CI (#6101).
3. **Expansão de canais** — Sendblue (#6081) adiciona presença em messaging tradicional.
4. **Observabilidade** — LangSmith tracing (#5485) indica foco em debuggability em produção.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Dor | Evidência | Severidade |
|-----|-----------|------------|
| **Gasto excessivo de API por loops** | #6106: compactação em loop a noite toda | 🔴 Alta |
| **Configuração ignorada** | #5781: `dream.maxIterations` não funciona | 🟡 Média |
| **Poluição visual no Slack** | #6084: mensagens duplas de system | 🟡 Média |
| **UX dark mode** | #6088: botões Delete ilegíveis | 🟢 Baixa |
| **Barriers de configuração de providers** | #6103: documentação CoreWeave necessária | 🟢 Baixa |

### Cenários de Uso em Evidência

1. **Uso noturno/autônomo:** Usuários deixam o agent rodando (ex: sessão clara antes de dormir), retornando com consumo explode de API.
2. **Dream consolidation:** Agentes Scheduled Dream executam tarefas de consolidação de longo prazo, demandando limites configuráveis.
3. **Multi-canal:** Usuários começam a esperar parity entre Slack, WebUI e canais tradicionais (iMessage/SMS).

### Indicadores de Satisfação

- **Taxa de resolução:** 3/4 issues fechadas em 24h — comunidade sente que reports são addressed.
- **Engajamento de contribuidores:** 9 autores diferentes em PRs fechados hoje — ecossistema saudável.
- **Zero releases:** Possível indicador de cautela em publicar antes de estabilizar correções P1.

---

## 8. Backlog que Merece Atenção

### Issues/PRs sem Resposta há >7 dias

| # | Tipo | Título | Criado | Sinais de Alerta |
|---|------|--------|--------|------------------|
| [#5485](https://github.com/HKUDS/nanobot/pull/5485) | PR | fix: restore LangSmith tracing for native providers | 2026-08-22 | **67+ dias** — regressão crítica de observabilidade ainda open |
| [#5204](https://github.com/HKUDS/nanobot/pull/5204) | PR | feat(models): declare request APIs per preset | 2026-08-01 | **69+ dias** — feature architectural pendente |
| [#5781](https://github.com/HKUDS/nanobot/issues/5781) | Issue | Dream runs looping on read_file calls | 2026-09-15 | Closed hoje — OK |
| [#5826](https://github.com/HKUDS/nanobot/pull/5826) | PR | perf(session): accelerate canonical history search with FTS5 | 2026-09-20 | **19 dias** — performance crítica |

### Priorização Recomendada

1. **🔴 Crítico:** #5485 — LangSmith tracing regressão (67 dias open). Afeta debugging em produção.
2. **🟡 Importante:** #5204 — Declarative API routing (69 dias). Bloqueia arquitetura limpa de providers.
3. **🟡 Importante:** #5826 — FTS5 search (19 dias). Performance em escala real.
4. **🟢 Observação:** #6084 — Slack UX (3 dias, 1 comment). Baixa priorização mas rápida win.

---

## Indicadores de Saúde do Projeto

| Métrica | Valor | Avaliação |
|---------|-------|-----------|
| Issues fechadas/abertas (24h) | 3/1 | 🟢 Positivo |
| PRs merged/closed (24h) | 16/14 | 🟢 Muito ativo |
| Média de comentários por issue | 2.25 | 🟡 Normal |
| Issues P1/P2 ainda open | 1 (#6084) | 🟡 Aceitável |
| PRs em aberto >30 dias | 2 (#5485, #5204) | 🔴 Requer atenção |

---

*Relatório gerado automaticamente com base em dados do GitHub de HKUDS/nanobot em 2026-10-09.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-10-09

## 1. Panorama do Dia

O Hermes Agent manteve alta atividade nas últimas 24 horas, com 50 issues e 50 PRs atualizados. A versão **v0.21.6** foi released ontem (08/10/2026) como patch estável consolidando aproximadamente 2.100 PRs mesclados desde a v0.21.5, voltada para Docker e Hermes Cloud. O estado geral do projeto reflete maturidade com volume massivo de código integrado, porém a release trouxe ao menos uma regressão reportada (#135298) que afeta o servidor de API em deploys sem plataformas de mensageria configuradas. A comunidade está ativamente reportando bugs e propondo features, com discussões intensas em issues de integração, manipulação de arquivos temporários e problemas de plataforma.

---

## 2. Lançamentos

### v0.21.6 — Hermes Agent v0.21.6
**Data de release:** 08/10/2026  
**Tipo:** Patch release  
**Tags:** Docker, Hermes Cloud

> Patch release. This tag rolls up the ~2,100 PRs merged since v0.21.5 into a stable tagged release for Docker and Hermes Cloud. Full curated notes for this window ship with v0.22.0.

- **Mudanças incluídas:** Consolidação de ~2.100 PRs mesclados no intervalo entre v0.21.5 e v0.21.6
- **Breaking changes:** Nenhuma documentada explicitamente
- **Notas de migração:** As notas completas e curadas para esta janela serão shipadas com a v0.22.0
- **Regressão conhecida:** Issue #135298 reportada em 08/10 indica que o `api_server` nunca conecta no startup quando zero plataformas de mensageria estão configuradas — regression introduzida nesta versão

📌 Link: [Release v0.21.6](https://github.com/NousResearch/hermes-agent/releases/tag/v0.21.6)

---

## 3. Progresso do Projeto

PRs merged/fechados nas últimas 24 horas que representam avanço concreto:

| # | Título | Impacto |
|---|--------|---------|
| **#135361** | fix(agent): keep env overlay for the process's own home under multiplex | Corrige regressão na v0.21.6 onde deployments API/dashboard-only perdem silenciosamente a plataforma `api_server` a cada restart do gateway |
| **#135340** | A scratch or test home can no longer rewrite the real gateway service unit | Salvage do #133476 — permite que um gateway started from different HERMES_HOME não sobrescreva o systemd unit real |
| **#128305** | fix(release): identify channel archive requests to WAFs | Endurecimento contra bloqueios de WAFs (Cloudflare), relacionado a #128295 |
| **#134586** | fix(relay): a relayed Discord interaction carries the text lane's chat and user labels | Corrige Discord relay para interações (slash commands, component presses) mantendo labels de chat e usuário |
| **#130791** | fix(gateway): preserve Matrix context in pending snapshots | Preserva contexto Matrix em snapshots pendentes |
| **#134991** | fix(tui): retain traceback for deferred agent build failures | Melhora diagnósticos no TUI/Desktop preservando tracebacks em falhas de build |
| **#134173** | prune(scratch): rescue entries touched mid-prune | Corrige bug crítico do prune de 24h que deletava trabalho ativo em TMPDIR |
| **#128669** | fix(gateway): no busy ack for messages deferred by startup restore | Evita acknowledgement prematura de mensagens durante restore de startup |
| **#117122** | fix(desktop): scope composer model selection and cold resume to active session | Corrige vazamento de modelo global em sessões Desktop |
| **#135334** | fix(docker): retain shipped extras in the first pm generation | Preserva extras no Docker image na primeira geração de PM |
| **#129863** | fix(tools): stop the persisted-output pointer claiming spill files are durable | Corrige指针 que dizia que spill files eram duráveis quando não são |
| **#129844** | fix(config): one terminal env map for every bridge | Unifica maps de configuração terminal entre CLI, gateway e bridges |

**Análise:** O volume de PRs focados em estabilidade (scratch prune, gateway, Matrix, Discord relay) indica maturidade operacional. A correção do #134173 é particularmente crítica por resolver perda potencial de dados.

---

## 4. Temas Quentes da Comunidade

Issues e PRs com maior engajamento (comentários + reações):

| # | Título | Comentários | 👍 | Categoria | Análise da Demanda |
|---|--------|-------------|-----|-----------|-------------------|
| **#125727** | Automated Nous integration is blocked | 34 | 0 | comp/agent, P3 | **Mais comentada.** Conflitos de merge no scheduled Nous-to-Enterkey afetam múltiplos arquivos críticos do agent core. Comunidade aguarda resolução para unificação de branches |
| **#132401** | scratch prune: 24h idle delete silently destroys multi-day agent work | 20 | 0 | P0, bug | **Bug crítico** — agente perde trabalho multi-dia em TMPDIR sem log/quarentena. Ativo há 6 dias, alta prioridade. PR #134173 endereça |
| **#124583** | terminal tool: background hint references non-existent tool name process(action=...) | 15 | 0 | P2, bug | Documentação incorreta que causa dead-end para operadores seguindo hints literalmente |
| **#127621** | Desktop app: assistant response occasionally renders duplicated | 6 | **6** | P2, bug | **Mais реакций.** Bug de renderização no desktop app com engajamento positivo — afeta UX de forma visível |
| **#118326** | macOS sleep/wake drifts psutil create_time fingerprints | 10 | 0 | P2, bug | Kanban worker claim release em workers vivos após wake de macOS — bug dePlatform específico |
| **#79357** | idle_compact_after_seconds never fires in gateway mode | 5 | 2 | P2, bug | Compressão de contexto nunca dispara em modo gateway — watchdog reset clobbers timestamp |
| **#526** | Feature: Anthropic Context Editing API Integration | 5 | 0 | P3, feature | Feature request antigo (Mar/2026) para integração com Context Editing API da Anthropic — ainda em discussão |
| **#70547** | Kanban: configurable dispatcher spawn for non-profile assignees | 3 | 2 | P3, feature | Interesse em dispatcher configurável para workers externos (Claude Code, Codex CLI) |
| **#95933** | Remote isolated-serve: reconnect spawns duplicate clientless default scope | 3 | 1 | P2, bug | Desktop trava em 'Waking up default…' em setups remotos multi-profile |

**Tendência:** Preocupação dominante da comunidade gira em torno de **estabilidade de sessões** (compression, scratch, kanban claims) e **problemas dePlatform** (macOS, Docker, Windows). Integração Nous (#125727) é tema quente mas de escopo interno.

---

## 5. Bugs e Estabilidade

### P0 — Críticos (impacto em produção, perda de dados ou broken pipe)

| # | Título | Status | Detalhes |
|---|--------|--------|----------|
| **#132401** | scratch prune destroys multi-day work in TMPDIR | OPEN | Bug de perda de dados: prune de 24h deleta trabalho ativo sem log |
| **#128817** | Follow-up turns re-prefill because tool schemas change between turns | OPEN | Sessions perdem prompt cache em cada turn — custos elevados de inference |
| **#133999** | Outbound image eviction rewrites cached prefixes even when no provider limit is near | OPEN | Caching behavior incorreto que reescreve prefixes desnecessariamente |
| **#128295** | hermes-assets.nousresearch.com returns 403 for all non-browser clients | OPEN | Updates e install completamente bloqueados — infraestrutura |
| **#135298** | api_server never connects on startup when zero messaging platforms configured | OPEN | **Regressão na v0.21.6** — afeta deploys API-only |
| **#135361** | (PR) Fix for 0.21.6 API/dashboard regression | OPEN | Hotfix em andamento |

### P1 — Altos (impacto significativo, workarounds possíveis)

| # | Título | Status | Detalhes |
|---|--------|--------|----------|
| **#134239** | Fresh-turn dispatch skips compression-in-flight guard, double compression (5.5 min stall) | OPEN | Bloqueio de sessão + double compression (352→48→64 tokens) |
| **#135316** | Docker image gateway invisible to live_gateway_pid_for_home | OPEN | Bootstrap environment issue no Docker image |
| **#135210** | macOS Desktop Installer Fails — Solstice Missing httpx | OPEN | Instalação macOS falha em "Install Command and Apps + Desktop" |
| **#135302** | Bundled provider plugin solstice imports httpx at module load | OPEN | Hermes doctor print burst de erros 'No module named httpx' |

### P2 — Medios (impacto em UX ou funcionalidades específicas)

| # | Título | Status | Detalhes |
|---|--------|--------|----------|
| **#127621** | Desktop app renders duplicated assistant responses | OPEN | Bug visível de UX — 6 👍 indica impacto percebido |
| **#124583** | Terminal tool hint references non-existent tool name | OPEN | Documentação incorreta |
| **#118326** | macOS kanban stale-claim reaper releases live worker's claim | OPEN | Bug de platform específico |
| **#79357** | idle_compact never fires in gateway mode | OPEN | Compressão de contexto inoperante |
| **#86204** | orphan CLI python.exe children not reaped on Windows | OPEN | Status frames persistem após crash |
| **#134844** | Claude Haiku 5.5 routed to /v1/chat/completions (HTTP 400) | OPEN | Rota incorreta para modelo específico |

### P0 Regressões de v0.21.6
- **#135298:** api_server não conecta sem plataformas de mensageria — PR #135361 em andamento
- **#135361:** Fix confirma regressão introduzida em commit `1ac24fa209` onde gateway marca multiplex-active before inicialização completa

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em Desenvolvimento / Proposta

| # | Título | Prioridade | Tipo | Sinais de Roadmap |
|---|--------|-----------|------|-------------------|
| **#135338** | feat: add provider-aware opusplan model selection | P3 | Feature | **Indica direção:** modelo de planner + exec workers com seleção aware de provider. Preset de orquestração diferente de Claude Code literal Plan-mode |
| **#98703** | feat: add safe pre-agent turn routing middleware | P3 | Feature | **Plugin hook `turn_route`** — plugins poderão selecionar modelo/provider por turn antes do agent build. Veto usa para automatic routing |
| **#526** | Anthropic Context Editing API Integration | P3 | Feature | Integração com beta Context Management API da Anthropic — cache-friendly tool/thinking cleanup |
| **#70547** | Kanban: configurable dispatcher spawn for non-profile assignees | P3 | Feature | Suporte para workers externos (Claude Code, Codex CLI) como assignees não-Hermes |
| **#74546** | Add pre_cron_delivery plugin hook | P3 | Feature | Hook pre-delivery para cron jobs (allow/block/redirect) |
| **#65931** | feat(discord): searchable /model autocomplete | P3 | Feature | Autocomplete para /model com catalog read offloaded async |
| **#103311** | feat(email): task-context subjects for outbound mail | P3 | Feature | Subjects configuráveis + context-aware para emails de cron/relay |
| **#56787** | Revive non-agentic scheduled auto-update support | P3 | Feature | Restaura updates agendados opt-in non-agentic |
| **#134833** | RFC: experimental Tern/TSP native surface for Hermes TUI | P3 | RFC | **Sinais de inovação:** TUI Surface Protocol adapter — não é mais greenfield, já tem experiments |

### Sinais de Direção Técnica
- **Provider-aware orchestration:** Opusplan (#135338) sugere tendência de modelos especialistas por task type
- **Plugin extensibility:** Turn routing middleware (#98703) e pre-cron hooks indicam maturidade do sistema de plugins
- **Tern/TSP integration:** Evolução do TUI para surfaces alternativos — experimental mas ativo
- **Platform parity:** Issues como #134844 (Claude Haiku routing) indicam necessidade de melhor abstraction de provider APIs

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Reportadas

**Instalação e Updates — Bloqueio Total**
- #128295: `hermes-assets.nousresearch.com` retorna 403 Cloudflare WAF para todos os clientes non-browser desde ~2026-09-27
  - Impacto: Updates e package manager install completamente bloqueados
  - Workaround: Nenhum funcional — busca por soluções na issue
- #135210: macOS Desktop Installer falha em "Install Command and Apps + Desktop" com missing `httpx` no Solstice
  - Usuário: MacBook Air Apple Silicon + Hermes Setup 0.0.1
- #135302: Hermes doctor burst

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-10-09

---

## 1. Panorama do Dia

O projeto PicoClaw apresenta **atividade moderada** nesta data. Não foram registradas novas issues ou releases nas últimas 24 horas, porém **dois pull requests permanecem abertos**, indicando desenvolvimento ativo em funcionalidades de providers e correção de interface. O projeto demonstra saúde operacional básica, sem indicadores de regressões ou problemas críticos reportados. A manutenção continua focada em melhorias incrementais.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24 horas.**

O projeto não publicou novas versões desde o último período reportado. Usuários devem consultar o histórico de releases para verificações de atualizações anteriores.

🔗 [Repositório PicoClaw](https://github.com/sipeed/picoclaw)

---

## 3. Progresso do Projeto

Nenhum pull request foi merged ou fechado nas últimas 24 horas. Os seguintes PRs encontram-se em revisão ativa:

| PR | Título | Status | Autor | Atualizado |
|----|--------|--------|-------|------------|
| [#3371](https://github.com/sipeed/picoclaw/pull/3371) | feat(providers): add opencode-go provider with session header support | OPEN | EMTumariscal | 2026-10-08 |
| [#3347](https://github.com/sipeed/picoclaw/pull/3347) | [stale] fix laggy interface | OPEN | iMilnb | 2026-10-08 |

**Análise:**
- O PR #3371 representa uma contribuição significativa para expansão de provedores de IA, adicionando suporte ao provedor `opencode-go` com headers de sessão customizados.
- O PR #3347 aborda uma questão de usabilidade (interface lenta) e já está marcado como stale, necessitando atenção da equipe de manutenção.

🔗 [Todos os Pull Requests](https://github.com/sipeed/picoclaw/pulls)

---

## 4. Temas Quentes da Comunidade

Com base nos dados disponíveis, **não há issues ou PRs com alto volume de comentários ou reações** registrado nas últimas 24 horas.

**Observações sobre os PRs em destaque:**

| PR | Comentários | Reações | Engagement |
|----|-------------|---------|------------|
| #3371 | undefined | 0 👍 | Baixo |
| #3347 | undefined | 0 👍 | Baixo |

**Análise:** O baixo engagement pode indicar que a comunidade está em período de monitoramento ou que os PRs ainda não foram amplamente revisados pela comunidade.

🔗 [Issues em aberto](https://github.com/sipeed/picoclaw/issues)

---

## 5. Bugs e Estabilidade

**Nenhum bug foi reportado nas últimas 24 horas.**

O projeto mantém **0 issues abertas/ativas** e **0 issues fechadas** no período. Não há indicadores de crashes, regressões ou problemas de estabilidade reportados.

**Indicadores de saúde:**
- ✅ Sem issues abertas de bugs
- ✅ Sem regressões reportadas
- ✅ Estabilidade mantida

🔗 [Issue Tracker](https://github.com/sipeed/picoclaw/issues)

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features em Progresso

**PR #3371 — Adição de provedor opencode-go** ([link](https://github.com/sipeed/picoclaw/pull/3371))
- **Autor:** EMTumariscal
- **Descrição:** Adiciona provedor dedicado `opencode-go` (`https://opencode.ai/zen/go/v1`)
- **Impacto:** Permite ao PicoClaw continuar utilizando o OpenCode Go com roteamento automático de modelos baseado no ID do modelo
- **Feature key:** Suporte ao header `x-opencode-session` para conversas ativas
- **Status:** Aguardando revisão

### Potencial Roadmap

O PR #3347 (fix laggy interface) indica que **performance da interface web** é uma área de foco, sugerindo que otimizações de UI podem ser prioritárias brevemente.

---

## 7. Resumo de Feedback dos Usuários

**Sem feedback explícito registrado nas últimas 24 horas.**

**Inferências baseadas nos PRs em aberto:**

| Área | Sinal | Confiança |
|------|-------|-----------|
| Integração com provedores de IA | Usuários desejam suporte a mais provedores (opencode-go) | Média |
| Usabilidade da interface | Relatos de lag em chats com muito texto | Confirmada via PR #3347 |
| Compatibilidade | Necessidade de manter suporte a provedores existentes | Alta |

**Dores identificadas:**
1. Interface web com lentidão ao manipular grandes volumes de texto
2. Necessidade de manter compatibilidade com provedores de IA específicos

---

## 8. Backlog que Merece Atenção

### PRs Sem Resposta há Tempo

| PR | Título | Criado | Atualizado | Dias Inativo |
|----|--------|--------|------------|--------------|
| [#3347](https://github.com/sipeed/picoclaw/pull/3347) | [stale] fix laggy interface | 2026-08-27 | 2026-10-08 | ~42 dias |

**Análise:** O PR #3347 foi marcado como stale, indicando falta de activity. Este PR resolve um problema real de usabilidade (lag na interface) e merece atenção da equipe de mantenedores para evitar impacto negativo na experiência do usuário.

### Recomendações de Prioridade

1. **Alta Prioridade:** Revisar PR #3347 — Fix para interface laggy (impacta UX diretamente)
2. **Média Prioridade:** Revisar PR #3371 — Adição de provedor opencode-go (expansão de funcionalidades)
3. **Monitoramento:** Verificar necessidade de refresh do stale marker em PRs antigos

🔗 [Backlog de PRs](https://github.com/sipeed/picoclaw/pulls?q=is%3Apr+is%3Aopen)

---

## Métricas Resumidas do Dia

| Métrica | Valor |
|---------|-------|
| Issues abertas/ativas | 0 |
| Issues fechadas | 0 |
| PRs abertos | 2 |
| PRs merged/fechados | 0 |
| Novas releases | 0 |
| Engajamento (reações) | 0 👍 total |

**Classificação de Saúde Geral:** 🟡 **Moderada** — Atividade baixa mas estável, sem problemas críticos reportados. Atenção necessária ao backlog de PRs stale.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-10-09

---

## 1. Panorama do Dia

O projeto IronClaw apresenta **atividade moderada** em 09/10/2026, com 2 issues e 2 PRs atualizados nas últimas 24 horas, todos ainda em estado aberto. Não houveram releases ou PRs mergeadas no período, indicando que a equipe está em fase de revisão e desenvolvimento ativo. A atividade recente concentra-se em duas vertentes principais: (1) **monitoramento de qualidade** através do sistema de taxonomy de falhas e (2) **expansão de canais de comunicação** via integração Sendblue para iMessage/SMS. O projeto não registra bugs críticos ou regressões reportadas nas últimas 24h, sugerindo estabilidade operacional no estado atual da base de código.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24 horas.**

O projeto não publicou novas versões, tags ou changelogs desde a última atualização. Recomenda-se verificar o histórico de releases em [nearai/ironclaw/releases](https://github.com/nearai/ironclaw/releases) para contexto sobre o último versionamento estável.

---

## 3. Progresso do Projeto

Dois PRs entraram em estado de revisão/atualização nas últimas 24h, sinalizando progresso contínuo em funcionalidades importantes:

### PR #8119 — Opt-in Turn-Start Tool Selection with Jev Classifier
- **Autor:** CjS77 | **Escopo:** docs, dependencies | **Risco:** medium | **Tamanho:** XL
- **Atualizado:** 2026-10-08
- **Resumo:** Introduz seleção opcional de ferramentas no início de cada turno de conversa. Um classificador identifica quais ferramentas diferidas o usuário provavelmente necessitará antes da primeira chamada ao modelo, permitindo que o host as anuncie junto às ferramentas core e evitando round trips desnecessários de `tool_search`.
- **Significância:** Este PR representa uma otimização de performance e latência para o fluxo de conversas, potencialmente reduzindo chamadas de API e melhorando a responsividade do assistente.
- **Link:** [nearai/ironclaw PR #8119](https://github.com/nearai/ironclaw/pull/8119)

### PR #8127 — Sendblue iMessage and SMS Extension
- **Autor:** lookevink | **Status:** OPEN
- **Atualizado:** 2026-10-08
- **Resumo:** Adiciona uma extensão nativa para conversas via iMessage/SMS através da API Sendblue, incluindo pareamento de telefone, webhooks autenticados para recebimento, replies terminais e armazenamento de alvos de DM através do ciclo de vida existente do host.
- **Significância:** Alinha-se diretamente com a issue #8130 (proposta da comunidade), demonstrando rápida iteração sobre demandas solicitadas.
- **Link:** [nearai/ironclaw PR #8127](https://github.com/nearai/ironclaw/pull/8127)

**Nenhum PR foi mergeado ou fechado no período.**

---

## 4. Temas Quentes da Comunidade

### Issue #8130 — Proposal: Optional Sendblue iMessage/SMS Extension
- **Autor:** lookevink | **Criada/Atualizada:** 2026-10-08 | **Comentários:** 0 | **Reações:** 0
- **Demanda:** Estende a capacidade de comunicação do IronClaw para incluir iMessage e SMS, mantendo credenciais sob custódia do host e adicionando verificação de telefone via whitelist.
- **Análise:** Proposta bem delimitada com escopo claro: autenticação, pareamento e ciclo de reply. A ausência de comentários pode indicar que está em avaliação inicial pela equipe, mas a existência simultânea do PR #8127 sugere alta prioridade e possível alinhamento com roadmap.
- **Link:** [nearai/ironclaw Issue #8130](https://github.com/nearai/ironclaw/issues/8130)

### Issue #8129 — Daily IronClaw Failure Taxonomy (2026-10-08)
- **Autor:** pranavraja99 | **Criada/Atualizada:** 2026-10-08 | **Comentários:** 0 | **Reações:** 0
- **Demanda:** Relatório automatizado diário de taxonomy de falhas, analisando runs de benchmarks (ex: officeqa com 25 non-pass tasks).
- **Análise:** Esta issue faz parte de um processo recorrente de monitoramento de qualidade, não uma demanda de feature. A análise indica erros genuínos de qualidade de modelo (ex: DeepSeek-V4-Flash), não problemas de infraestrutura.
- **Link:** [nearai/ironclaw Issue #8129](https://github.com/nearai/ironclaw/issues/8129)

**Nenhum item apresenta comentários ou reações significativas no período.**

---

## 5. Bugs e Estabilidade

**Nenhum bug, crash ou regressão reportado nas últimas 24 horas.**

O sistema de taxonomy de falhas (#8129) não indica falhas sistêmicas ou crashes, mas sim erros de qualidade inerentes ao modelo utilizado nos benchmarks. A saúde geral do codebase não demonstra sinais de instabilidade no período analisado.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Feature Proposta: Suporte a iMessage/SMS via Sendblue (Issue #8130 / PR #8127)
- **Maturidade:** Proposta aberta com implementação em andamento
- **Valor:** Amplia reach do produto para canais de comunicação ubíquos (SMS/iMessage)
- **Potencial impacto:** Baixo risco (extensão opcional), alta utilidade para usuários que desejam integração com telefonia nativa

### Feature em Desenvolvimento: Turn-Start Tool Selection (PR #8119)
- **Maturidade:** PR em revisão
- **Valor:** Otimização de latência e redução de chamadas de API desnecessárias
- **Potencial impacto:** Melhoria de performance transparente ao usuário

**Sinais de roadmap inferidos:**
- Expansão de canais de comunicação (iMessage/SMS)
- Otimização de performance do loop de conversação
- Monitoramento contínuo de qualidade via taxonomy automatizada

---

## 7. Resumo de Feedback dos Usuários

Com base nas interações do período, o feedback explícito dos usuários permanece limitado (0 comentários em ambas as issues). No entanto, inferimos as seguintes demandas implícitas:

| Demanda | Sinal | Canal |
|---------|-------|-------|
| Integração com canais mobile (SMS/iMessage) | Issue #8130 + PR #8127 | Proposta + Implementação |
| Melhorias de performance em tool selection | PR #8119 | PR com escopo de otimização |
| Monitoramento de qualidade de modelo | Issue #8129 | taxonomy automatizada |

**Dores identificadas:**
- Necessidade de suportar canais de comunicação além dos já existentes (web/API)
- Oportunidade de otimizar latência no início de conversas (turn-start)

**Cenários de uso sugeridos:**
- Assistentes pessoais integrados a fluxos de trabalho que requerem comunicação via telefone
- Agentes que necessitam de resposta rápida sem overhead de tool_search

---

## 8. Backlog que Merece Atenção

### PR #8119 — Turn-Start Tool Selection (Jev Classifier)
- **idade:** ~10 dias desde criação (2026-09-29)
- **Status:** Aberto, última atualização 2026-10-08
- **Recomendação:** Este PR está em revisão há aproximadamente 10 dias. Pelo escopo XL e impacto em performance, recomenda-se priorização de code review para eventual merge na próxima release.
- **Link:** [nearai/ironclaw PR #8119](https://github.com/nearai/ironclaw/pull/8119)

### Issue #8130 — Sendblue Proposal
- **idade:** 1 dia
- **Status:** Proposta sem resposta da equipe mantenedora
- **Recomendação:** Avaliar alinhamento com roadmap e fornecer feedback ao autor, considerando que o PR #8127 já implementa parte significativa da demanda.
- **Link:** [nearai/ironclaw Issue #8130](https://github.com/nearai/ironclaw/issues/8130)

---

## Métricas Resumidas (2026-10-09)

| Indicador | Valor |
|-----------|-------|
| Issues abertas/ativas (24h) | 2 |
| Issues fechadas (24h) | 0 |
| PRs abertos (24h) | 2 |
| PRs merged/fechados (24h) | 0 |
| Releases | 0 |
| Bugs críticos | 0 |
| Comentários em issues | 0 |
| Reações | 0 |

**Saúde geral:** 🟢 Estável — Atividade moderada sem incidentes reportados. A equipe demonstra foco em feature development (extensão Sendblue) e otimização de performance (tool selection). Recomenda-se acompanhamento dos PRs #8119 e #8127 para possível merge na próxima release.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório de Projeto CoPaw — 2026-10-09

## 1. Panorama do Dia

O projeto CoPaw (QwenPaw) manteve **atividade intensa** nas últimas 24h com 61 eventos totais (31 issues, 30 PRs), indicando uma comunidade ativa. A taxa de resolução de issues está equilibrada (~42% fechadas), e 7 PRs foram merged/fechados, demonstrando progresso concreto no codebase. O repositório não publicou releases formais recentemente, operando em ritmo de desenvolvimento contínuo. Os esforços concentram-se na estabilização da versão 2.2.x, com destaque para correções de bugs críticos de sessão, memory leaks e problemas de UI do console desktop. A comunidade demonstra interesse crescente em features de enterprise (multi-tenant Hub) e qualidade de produção (observabilidade, avaliação de modelos).

---

## 2. Lançamentos

**Nenhuma release formal publicada nas últimas 24h.**

O projeto está em ciclo de desenvolvimento ativo da versão 2.2.2 (beta). Issues como [#8134](https://github.com/agentscope-ai/QwenPaw/issues/8134) e [#8122](https://github.com/agentscope-ai/QwenPaw/issues/8122) referenciam "2.2.2 beta4", sugerindo que uma versão estável está próxima. Recomenda-se monitorar o repositório para announcements oficiais.

---

## 3. Progresso do Projeto

### PRs Importantes Merged/Fechados

| PR | Título | Impacto |
|----|--------|---------|
| [#7089](https://github.com/agentscope-ai/QwenPaw/pull/7089) | ci(datapaw): add standalone version-driven release pipeline | Infraestrutura de release independente para plugin datapaw |
| [#7870](https://github.com/agentscope-ai/QwenPaw/pull/7870) | fix: stabilize Windows unit tests | Estabilidade em ambiente Windows (afeta CI/CD) |
| [#8050](https://github.com/agentscope-ai/QwenPaw/pull/8050) | fix(chats): resolve DST-aware process timezone | Correção de timestamps incorretos em transcrições (timezone) |
| [#8127](https://github.com/agentscope-ai/QwenPaw/pull/8127) | fix(console): refine desktop settings UI | Padronização visual da UI de configurações desktop |

### PRs Abertos com Alto Impacto

| PR | Título | Destaque |
|----|--------|----------|
| [#8132](https://github.com/agentscope-ai/QwenPaw/pull/8132) | feat: add release evaluation workflows and QwenPaw Index | Sistema de benchmarks público (GAIA, SpreadsheetBench, SWE-bench) |
| [#7865](https://github.com/agentscope-ai/QwenPaw/pull/7865) | fix(console): recover when chat stream dies mid-run | Auto-recuperação de streams interrompidos |
| [#8055](https://github.com/agentscope-ai/QwenPaw/pull/8055) | fix(skills): offload pool download copy | Download assíncrono de skills (evita timeout) |
| [#8083](https://github.com/agentscope-ai/QwenPaw/pull/8083) | feat(tools): add view_audio tool | Suporte a áudio como modality nativa |

---

## 4. Temas Quentes da Comunidade

### Issue com Maior Engajamento

**[#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318)** — *QwenPaw Hub Multi-tenant (34 comentários)*  
**Status:** Aberta | **Labels:** question, discussion  
**Resumo:** QwenPaw Hub foi lançado em 2.2.0 para atender demanda de uso em equipe. A issue solicita input da comunidade sobre próximo passo: escalabilidade, permissões granulares, ou integração com identity providers.  
**Análise:** Este é o tema estratégico mais importante do momento. A comunidade claramente empurra o projeto para além do uso individual, sinalizando maturidade e necessidades de enterprise.

### Issues Relevantes com Alta Participação

| Issue | Comentários | Tema |
|-------|-------------|------|
| [#7884](https://github.com/agentscope-ai/QwenPaw/issues/7884) | 9 | Chat history não persiste após compressão |
| [#7722](https://github.com/agentscope-ai/QwenPaw/issues/7722) | 7 | Memory exhaustion (3 paths de bug compounding) |
| [#8022](https://github.com/agentscope-ai/QwenPaw/issues/8022) | 5 | send_file_to_user polui contexto de sessão |
| [#7883](https://github.com/agentscope-ai/QwenPaw/issues/7883) | 5 | PDF serialization falha com DeepSeek |

---

## 5. Bugs e Estabilidade

### Por Severidade (baseado em impacto e escopo)

**🔴 Críticos (afetam produção/sessões)**

| Issue | Descrição | Impacto |
|-------|-----------|---------|
| [#7722](https://github.com/agentscope-ai/QwenPaw/issues/7722) | Memory exhaustion via 3 paths: stream buffers unbounded, keep-alive stacking, doom-loop gate evasion | Container OOM em ~1MB/s |
| [#8109](https://github.com/agentscope-ai/QwenPaw/issues/8109) | Stream errors causam perda total de sessão | Dados de conversa perdidos |
| [#8116](https://github.com/agentscope-ai/QwenPaw/issues/8116) | Message queue duplicate delivery + cross-session misrouting | Dados processados incorretamente |

**🟠 Altos (quebram funcionalidades core)**

| Issue | Descrição |
|-------|-----------|
| [#7883](https://github.com/agentscope-ai/QwenPaw/issues/7883) | PDF tool output causa 400 permanente em DeepSeek |
| [#8064](https://github.com/agentscope-ai/QwenPaw/issues/8064) | send_file_to_user quebra sessão DeepSeek permanentemente |
| [#8125](https://github.com/agentscope-ai/QwenPaw/issues/8125) | llama.cpp has_update() reverte runtimes instalados pelo usuário (3ª ocorrência) |

**🟡 Médios (degradação de UX)**

| Issue | Descrição |
|-------|-----------|
| [#8120](https://github.com/agentscope-ai/QwenPaw/issues/8120) | Página de chat falha carregamento frequentemente |
| [#8115](https://github.com/agentscope-ai/QwenPaw/issues/8115) | Console desktop congela 11s no cold start |
| [#8135](https://github.com/agentscope-ai/QwenPaw/issues/8135) | GPU overutilization por backdrop-filter (iGPU impactado) |

### Bugs com PRs de Correção Em Andamento

| PR | Correção |
|----|----------|
| [#8136](https://github.com/agentscope-ai/QwenPaw/pull/8136) | Preserva EXIF orientation em resize de imagens |
| [#8133](https://github.com/agentscope-ai/QwenPaw/pull/8133) | Corrige CJK emphasis boundaries no Markdown do chat |
| [#8010](https://github.com/agentscope-ai/QwenPaw/pull/8010) | Recupera de rejeições de payload de mídia |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features com Alta Demanda ou Estratégicas

| Issue/PR | Feature | Sinal de Roadmap |
|----------|---------|------------------|
| [#8015](https://github.com/agentscope-ai/QwenPaw/issues/8015) | Custom Skill/Plugin marketplace source (self-hosted, air-gapped) | Enterprise/air-gapped deployment |
| [#8139](https://github.com/agentscope-ai/QwenPaw/issues/8139) | You.com como provider de web_search (keyless) | Expansão de provedores de busca |
| [#8142](https://github.com/agentscope-ai/QwenPaw/issues/8142) | Migrar de Tauri2 para Electron (compatibilidade Kylin Linux) | Suporte desktop Linux expandido |
| [#8112](https://github.com/agentscope-ai/QwenPaw/issues/8112) | Schedule hourly para Dream memory consolidation | Automação mais granular |
| [#8126](https://github.com/agentscope-ai/QwenPaw/issues/8126) | Skill-pool download cancellable com progress | UX de gerenciamento de skills |
| [#8083](https://github.com/agentscope-ai/QwenPaw/pull/8083) | view_audio tool para compreensão de áudio | Completude multimídia |
| [#8128](https://github.com/agentscope-ai/QwenPaw/pull/8128) | Move hub para plugins system | Extensibilidade de marketplaces |

### Análise de Tendências

1. **Enterprise Readiness**: Multi-tenant Hub, self-hosted marketplaces, air-gapped deployment — sinais claros de foco em clientes B2B.
2. **Qualidade de Produção**: Observabilidade (Langfuse fix em [#7964](https://github.com/agentscope-ai/QwenPaw/pull/7964)), benchmarks públicos (QwenPaw Index), recovery paths.
3. **Completude de Multimodal**: view_audio complementa view_image e view_video existentes.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas com Maior Frequência

| Categoria | Descrição | Frequência |
|-----------|-----------|------------|
| **Persistência de dados** | Chat history some, contexto não carrega, compressão perde informações | 🔴 Alta |
| **Estabilidade de sessão** | Erros de stream destroem conversas, message queue duplica/erra | 🔴 Crítica |
| **Performance desktop** | Cold start lento, GPU overutilization, UI freezes | 🟠 Média |
| **Integração com modelos** | DeepSeek rejeita arquivos, context window overflow | 🟠 Média |
| **UX mobile/web** | Layout quebrado, clipboard não funciona em HTTP, CJK rendering | 🟡 Baixa |

### Cenários de Uso Mencionados

- **Teams/Enterprise**: Multi-usuário, admin de skills, self-hosted
- **Desenvolvedores**: Local models (llama.cpp), provider customizado, plugins
- **Produtividade pessoal**: Memory consolidation (Dream), Daily Paper, schedule automation
- **Linux/Kylin**: Desktop cross-platform (sinal de adoção em mercados não-occidentais)

### Satisfação Geral

**Mista com viés negativo** — usuários estão ativamente reportando bugs (31 issues em 24h), indicando engajamento, mas as issues apontam para problemas de estabilidade na versão 2.2.x. A versão beta está sendo bem utilizada para feedback, e a equipe responde rapidamente (múltiplas issues fechadas hoje com PRs correspondentes).

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou with Long-Standing Status

| Issue | Idade | Situação | Prioridade |
|-------|-------|----------|------------|
| [#2865](https://github.com/agentscope-ai/QwenPaw/issues/2865) | ~6 meses | Closed (feat shipped?) | Baixa |
| [#7633](https://github.com/agentscope-ai/QwenPaw/issues/7633) | ~60 dias | Assigned, sem PR em 25 dias | 🟠 Alta — llama.cpp rollback bug |
| [#8009](https://github.com/agentscope-ai/QwenPaw/issues/8009) | ~10 dias | Fix merged em [#8010](https://github.com/agentscope-ai/QwenPaw/pull/8010) | Resolvido |
| [#8117](https://github.com/agentscope-ai/QwenPaw/issues/8117) | ~2 dias | Aberta, sem comentários | 🟠 Média — context overflow |

### PRs Estagnados

| PR | Status | blockers |
|----|--------|----------|
| [#7865](https://github.com/agentscope-ai/QwenPaw/pull/7865) | Open (first-time-contributor) | Needs review |
| [#8055](https://github.com/agentscope-ai/QwenPaw/pull/8055) | Under Review | Needs final approval |
| [#7964](https://github.com/agentscope-ai/QwenPaw/pull/7964) | Open | Needs review (Langfuse observability) |

---

## Métricas de Saúde do Projeto

| Indicador | Valor | Avaliação |
|-----------|-------|----------|
| Issues ativas (24h) | 18 | 🟢 Normal |
| Issues fechadas (24h) | 13 | 🟢 Boa resolução |
| PRs abertos | 23 | 🟡 Moderado |
| PRs merged/fechados (24h) | 7 | 🟢 Ativo |
| Releases (7 dias) | 0 | 🟡 Sem tag formal |
| Média de comentários por issue | ~2.5 | 🟢 Engajamento adequado |

---

## Conclusão

O projeto CoPaw demonstra **saúde ativa mas com áreas de atenção críticas**. A comunidade está fortemente engajada em reportar bugs de estabilidade (memória, sessões, message queue), enquanto a equipe responde com PRs de correção. O roadmap estratégico aponta para enterprise readiness (multi-tenant, air-gapped) e qualidade de produção (benchmarks, observabilidade). **Recomenda-se atenção imediata** aos bugs de memory exhaustion ([#7722](https://github.com/agentscope-ai/QwenPaw/issues/7722)) e message queue ([#8116](https://github.com/agentscope-ai/QwenPaw/issues/8116)) antes da próxima release estável.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório de Projeto ZeroClaw — 2026-10-09

## 1. Panorama do dia

O ecossistema ZeroClaw demonstra **alta atividade de desenvolvimento** neste dia, com 50 PRs e 20 issues atualizados nas últimas 24h, apesar de nenhum release estar agendado. A atenção principal concentra-se em **segurança e estabilidade**: três bugs P1 (prioridade máxima) continuam abertos, incluindo falhas críticas no sandbox do firejail e no roteamento de providers. O componente ZeroCode recebe investimento significativo com 8 issues/PRs relacionados, sinalizando uma fase de refinamento da interface. A comunidade também demonstra interesse em funcionalidades futuras através de RFCs ativas, particularmente o protocolo A2A. O projeto mantém um pipeline robusto de PRs, com 49 abertas e 1 merged nas últimas 24h.

---

## 2. Lançamentos

**Nenhum novo release registrado nas últimas 24h.**

O projeto não publicou versões hoje. Os últimos milestones permanecem em `v0.9.0` (em preparação via PR #11165) e `v0.8.6` (PR #11309). A ausência de releases pode indicar foco em consolidação de mudanças pendentes antes do próximo tagged version.

---

## 3. Progresso do projeto

### PR merged/fechada nas últimas 24h

| # | Título | Impacto |
|---|--------|---------|
| [#11469](https://github.com/zeroclaw-labs/zeroclaw/pull/11469) | `fix(security): recognize the null device on every host` | **Alto** — Corrige vulnerabilidade de path traversal em `/dev/null` que não era corretamente isento no Unix |

### PRs em destaque em revisão ativa

| # | Título | Tamanho | Status |
|---|--------|---------|--------|
| [#11165](https://github.com/zeroclaw-labs/zeroclaw/pull/11165) | `refactor(rpc): extract wire contract into zeroclaw-rpc-proto` | XL | `needs-author-action` |
| [#11320](https://github.com/zeroclaw-labs/zeroclaw/pull/11320) | `feat(rpc): dispatch plugin webhooks over the core RPC` | XL | `needs-author-action` |
| [#11309](https://github.com/zeroclaw-labs/zeroclaw/pull/11309) | `feat(quickstart): install and activate tool plugins` | XL | `needs-author-action` |
| [#11265](https://github.com/zeroclaw-labs/zeroclaw/pull/11265) | `feat(cli): zeroclaw user commands for roster password lifecycle` | XL | Em progresso |
| [#11530](https://github.com/zeroclaw-labs/zeroclaw/pull/11530) | `fix(tunnel): publish WSS and enrollment via tailscale serve` | XL | `needs-maintainer-review` |

---

## 4. Temas quentes da comunidade

### Issues com maior engajamento (comentários)

1. **[#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)** — Tracker: Maintainer decision queue for RFCs e design issues
   - **15 comentários** — Questão de governança mostrando processo estruturado de decisões de arquitetura
   - Tags: `domain:architecture`, `type:tracker`

2. **[#9887](https://github.com/zeroclaw-labs/zeroclaw/issues/9887)** — Downscale oversized images vs. drop + disable limits with 0
   - **5 comentários** — Proposta de UX para multimodalidade com aceitação da comunidade
   - Tags: `domain:architecture`, `domain:security`, `risk:high`

3. **[#9549](https://github.com/zeroclaw-labs/zeroclaw/issues/9549)** — Feature: Guide local model selection with llmfit
   - **4 comentários** — Melhoria de onboarding para modelos locais (Ollama, llama.cpp)
   - Tags: `topic:operator-ux`, `priority:p2`

4. **[#11254](https://github.com/zeroclaw-labs/zeroclaw/issues/11254)** — RFC: A2A protocol crate (zeroclaw-a2a)
   - **2 comentários** — Proposta de arquitetura para protocolo Agent-to-Agent
   - Tags: `type:rfc`, `domain:architecture`, `risk:high`

### Análise de demandas

A comunidade demonstra interesse em:
- **Infraestrutura de plugins** — 3+ PRs relacionados a webhooks e egress
- **Onboarding e UX** — Guias de modelos locais e configurações
- **Comunicação entre agentes** — RFC do protocolo A2A gaining traction

---

## 5. Bugs e estabilidade

### Bugs P1 (Críticos — requeem atenção imediata)

| # | Título | Severidade | Status | Link |
|---|--------|------------|--------|------|
| #11594 | `firejail_args` nunca aplicado à invocação do firejail | S2 (degraded) | `accepted` | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/11594) |
| #9592 | Probe de alias de provider após updates de model-routing | S2 (degraded) | `in-progress` | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/9592) |
| #10863 | Telegram: retries de voice updates rejeitados infinitamente | S1 (blocked) | `accepted` | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/10863) |

### Bugs P2/P3 e Issues de Interface (ZeroCode)

| # | Título | Severidade | Área | Link |
|---|--------|------------|------|------|
| #11623 | ZeroCode: `ask_user` prompt dropado sem reply, timeout em 600s | S2 | zerocode | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/11623) |
| #11618 | ZeroCode: mensagem enfileirada dropada quando SESSION_BUSY | Medium | zerocode | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/11618) |
| #11615 | Telegram ignora `retry_after` em 429, compounding flood | S1 | channel | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/11615) |
| #11614 | `map_key_sections` vaza schema paths — memory leak | S1 | config | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/11614) |
| #11613 | Cost ledger ignora `total_tokens` de providers OpenAI-compatible | S2 | provider | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/11613) |
| #11612 | Re-executar shell aprovado aborta agent loop | — | shell | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/11612) |

### Testes Instáveis

| # | Título | Impacto | Link |
|---|--------|---------|------|
| #11180 | Teste `payload_capture_tests` lê dados de outro teste sob paralelismo | S1 | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/11180) |

---

## 6. Pedidos de features e sinais de roadmap

### Novas features (criadas hoje)

| # | Título | Área | Link |
|---|--------|------|------|
| #11626 | Suprimir logs repetidos de plugin egress refusal por instância/host | observability | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/11626) |
| #11620 | Mostrar timestamps no transcript do ZeroCode | zerocode | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/11620) |

### Features em desenvolvimento ativo (via PRs)

| # | Título | Escopo | Link |
|---|--------|--------|------|
| #11505 | Expor ações de settings e filtrar keybindings no ZeroCode | zerocode | [PR](https://github.com/zeroclaw-labs/zeroclaw/pull/11505) |
| #11624 | Responder elicitations dropadas e registrar no transcript | zerocode | [PR](https://github.com/zeroclaw-labs/zeroclaw/pull/11624) |
| #11265 | Comandos CLI para ciclo de vida de senhas de roster | cli/security | [PR](https://github.com/zeroclaw-labs/zeroclaw/pull/11265) |
| #11254 | RFC: A2A protocol crate (zeroclaw-a2a) | architecture | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/11254) |

### Sinais de roadmap

- **v0.9.0**: RPC proto extraído em crate separado (#11165), webhooks via RPC core (#11320)
- **v0.8.6**: Suporte a plugins via quickstart (#11309)
- **Arquitetura**: Protocolo A2A em fase de RFC (#11254)
- **Segurança**: Filesystem channel hardening multi-plataforma (#11413, #11406, #11394)

---

## 7. Resumo de feedback dos usuários

### Dores reportadas

1. **ZeroCode — visibilidade de estado**
   - Sidebar mostra sessões falhadas como "prontas" após restart ([#11586](https://github.com/zeroclaw-labs/zeroclaw/issues/11586))
   - Transcript sem timestamps impossibilita debugging de eventos sobrepostos ([#11620](https://github.com/zeroclaw-labs/zeroclaw/issues/11620))
   - Prompts `ask_user` podem ser silenciados sem resposta — timeout de 10min sem feedback ([#11623](https://github.com/zeroclaw-labs/zeroclaw/issues/11623))

2. **Telegram — confiabilidade de mensagens**
   - Voice updates rejeitados bloqueiam novas mensagens ([#10863](https://github.com/zeroclaw-labs/zeroclaw/issues/10863))
   - Rate limits 429 ignoram `retry_after`, causando flood de retries ([#11615](https://github.com/zeroclaw-labs/zeroclaw/issues/11615))

3. **Segurança e sandbox**
   - `firejail_args` configurado mas não aplicado — risco de configuração falsa de segurança ([#11594](https://github.com/zeroclaw-labs/zeroclaw/issues/11594))
   - Memory leak em `map_key_sections` growing daemon ao longo do tempo ([#11614](https://github.com/zeroclaw-labs/zeroclaw/issues/11614))

### Cenários de uso destacados

- **Behavioral safety testing**: Relatado por DefuzeX/KUMA sobre abort de loop em shell commands re-executados ([#11612](https://github.com/zeroclaw-labs/zeroclaw/issues/11612))
- **Integração xAI**: Provider retornando pricing como array ao invés de objeto — necessidade de tolerância ([#11627](https://github.com/zeroclaw-labs/zeroclaw/pull/11627))

---

## 8. Backlog que merece atenção

### Issues sem resposta / stale-candidates

| # | Título | Criado | Estado | Prioridade | Link |
|---|--------|--------|--------|------------|------|
| #8692 | Maintainer decision queue tracker | 2026-07-04 | `accepted` | p2 | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) |
| #8691 | ADR inventory tracker | 2026-07-04 | `in-progress` | p2 | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8691) |
| #9447 | Incomplete Anthropic responses classification | 2026-07-27 | `in-progress` | — | [PR](https://github.com/zeroclaw-labs/zeroclaw/pull/9447) |

### Issues antigas sem movimento recente

| # | Título | Criado | Atualizado | Riscos |
|---|--------|--------|------------|--------|
| #9549 | Guide local model selection | 2026-07-29 | 2026-10-08 | `risk:medium` |
| #9887 | Image downscaling vs dropping | 2026-08-10 | 2026-10-08 | `risk:high` |
| #10769 | Plugin payload hardening (CLOSED hoje) | 2026-09-11 | 2026-10-08 | `risk:high` — **agora closed** ✅ |

### Métricas de saúde do backlog

| Métrica | Valor | Observação |
|---------|-------|------------|
| Issues abertas/ativas | 19 | Alta atividade |
| PRs abertas | 49 | Pipeline robusto |
| PRs com `needs-maintainer-review` | 2 | Garrafas de pescoço potenciais |
| PRs com `needs-author-action` | 9 | Requer atenção de contribuidores |
| PRs do-not-merge | 2 | Espera dependências (#11413, #11265) |

---

## Conclusão

**Saúde geral: 🟡 Estável

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*