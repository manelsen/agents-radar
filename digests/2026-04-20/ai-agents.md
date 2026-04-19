# Resumo diário do ecossistema de agentes de IA 2026-04-20

> Issues: 6 | PRs: 10 | Projetos cobertos: 7 | Gerado em: 2026-04-19 20:32 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório de Projeto: NullClaw
**Data de Referência:** 2026-04-20
**Fonte:** github.com/nullclaw/nullclaw

---

## 1. Panorama do Dia

O projeto NullClaw apresenta alta atividade de desenvolvimento em 20 de abril de 2026, com 10 novos pull requests abertos nas últimas 24 horas — nenhum ainda mergeado. Seis issues permanecem abertas e ativas, todas atualizadas recentemente. A comunidade demonstra interesse significativo em funcionalidades de roteamento de mensagens (infraestrutura `inbound_router`) e integração com Tailscale, evidenciando foco em arquiteturas de túnel seguro e interatividade não-bloqueante. A ausência de releases recentes contrasta com o volume de código sendo preparado, sugerindo que uma nova versão está em fase final de revisão.

---

## 2. Lançamentos

**Nenhum release detectado nas últimas 24 horas.**

O projeto não publicou novas versões desde o período analisado. O último release referenciado em issues é a versão `2026.3.5` (Homebrew Cellar), que possui uma issue aberta relacionada a caminhos hardcoded que quebram após upgrades (#354).

---

## 3. Progresso do Projeto

### PRs Abertos de Destaque

| # | Título | Área | Complexidade |
|---|--------|------|--------------|
| [#845](https://github.com/nullclaw/nullclaw/pull/845) | feat(core): inbound router and mid-turn injection infrastructure | Core | Alta |
| [#847](https://github.com/nullclaw/nullclaw/pull/847) | feat(gateway): route inbound via inbound_router | Gateway | Média |
| [#848](https://github.com/nullclaw/nullclaw/pull/848) | feat(daemon): route inbound bus messages via inbound_router | Daemon | Média |
| [#770](https://github.com/nullclaw/nullclaw/pull/770) | feat(api): REST Admin API | API | Alta |
| [#850](https://github.com/nullclaw/nullclaw/pull/850) | feat(tunnel): add encrypted tailscale auth_key support | Tunnel | Média |

**Análise:** O PR [#845](https://github.com/nullclaw/nullclaw/pull/845) (parcela 1 de #832) introduz a infraestrutura central de roteamento de entrada e injeção mid-turn, um refactoring arquitetural significativo. Os PRs subsequentes [#846](https://github.com/nullclaw/nullclaw/pull/846), [#847](https://github.com/nullclaw/nullclaw/pull/847) e [#848](https://github.com/nullclaw/nullclaw/pull/848) demonstram uma estratégia de branching coordinated, onde a lógica central é puxada primeiro e subsequentemente integrada em cada shell. Isso sugere maturidade no processo de revisão de código.

O PR [#770](https://github.com/nullclaw/nullclaw/pull/770) adiciona REST Admin API sem novas dependências, com impacto estimado < 30 KB no binário Zig — priorizando eficiência.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| # | Título | Comentários | Data |
|---|--------|-------------|------|
| [#826](https://github.com/nullclaw/nullclaw/issues/826) | How to use nullclaw gateway with Tailscale? | 8 | 2026-04-15 |
| [#354](https://github.com/nullclaw/nullclaw/issues/354) | Service stops working after Homebrew upgrade | 3 | 2026-03-07 |
| [#408](https://github.com/nullclaw/nullclaw/issues/408) | Tool call parsing breaks valid JSON | 2 | 2026-03-10 |
| [#665](https://github.com/nullclaw/nullclaw/issues/665) | Error: error.NoResponseContent | 2 | 2026-03-21 |

### Análise

**Issue #826** dominating discussions com 8 comentários. O usuário eabase reporta problema ao usar nullclaw gateway com Tailscale, recebendo `NotImplemented` ao iniciar tunnel. O PR [#850](https://github.com/nullclaw/nullclaw/pull/850) adiciona suporte a `tunnel.tailscale.auth_key` encryptado, potencialmente endereçando parte do problema — porém a issue continua aberta, sugerindo que pode haver desconhecimento mútuo entre reporter e mantenedores.

**Padrão identificado:** Integração com Tailscale é tema recorrente (issue + PR simultâneos), indicando demanda real por deployment em redes distribuídas.

---

## 5. Bugs e Estabilidade

### Bugs Reportados (6 issues abertas)

| Severidade | # | Descrição |
|------------|---|-----------|
| **Alta** | [#851](https://github.com/nullclaw/nullclaw/issues/851) | Busy-loop em accept4() consumindo 100% CPU (Raspberry Pi 5) |
| **Alta** | [#354](https://github.com/nullclaw/nullclaw/issues/354) | Serviço para de funcionar após upgrade via Homebrew |
| **Média** | [#408](https://github.com/nullclaw/nullclaw/issues/408) | JSON parsing extrai ":" como nome de tool ao invés de "memory_recall" |
| **Média** | [#665](https://github.com/nullclaw/nullclaw/issues/665) | Erro `error.NoResponseContent` em assembly Windows |
| **Baixa** | [#849](https://github.com/nullclaw/nullclaw/issues/849) | Subagent não consegue retornar resultado ao chamador |
| **N/A** | [#763](https://github.com/nullclaw/nullclaw/issues/763) | Relacionado: crash silencioso em onboard (fix em [#843](https://github.com/nullclaw/nullclaw/pull/843)) |

### Crítica

**#851** é novo (criado 2026-04-19) e crítico: gateway entra em busy-loop em `accept4()` com `EAGAIN`, consumindo CPU integralmente mesmo em idle. Afeta Debian 13 (trixie) em ARM64. Requer atenção imediata.

**#354** é recorrente (desde 2026-03-07) e indica quebra de compatibilidade com gerenciadores de pacote — path hardcoded para Cellar versionado. Sem resposta dos mantenedores nos últimos 14 dias.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em Desenvolvimento (PRs abertos)

| Feature | PR | Status | Sinal de Prioridade |
|---------|----|--------|---------------------|
| REST Admin API | [#770](https://github.com/nullclaw/nullclaw/pull/770) | Em revisão | Alta — zero dependências, <30KB |
| Tailscale auth_key encryptado | [#850](https://github.com/nullclaw/nullclaw/pull/850) | Em revisão | Alta — endereço issue #826 |
| Inbound router + mid-turn injection | [#845](https://github.com/nullclaw/nullclaw/pull/845) | Em revisão | Crítica — arquitetura |
| Workspace flag override | [#842](https://github.com/nullclaw/nullclaw/pull/842) | Em revisão | Média — DX |
| Progress hints para A2A stream | [#844](https://github.com/nullclaw/nullclaw/pull/844) | Em revisão | Média — observabilidade |

### Demanda Identificada

- **Zero-touch deployment em VPS**: Issue #826 + PR #850 indicam interesse em setups headless com Tailscale
- **Melhoria de memória**: PR #852 corrige provenance e recall quality em archiving
- **Observabilidade**: Progress hints em tool calls (#844) e Admin API (#770)

**Sinais de roadmap:** O trabalho coordenado em `inbound_router` (múltiplos PRs) sugere que "interatividade não-bloqueante" (#832) é prioridade técnica para a próxima release.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Dor | Frequência | Issue |
|-----|------------|-------|
| Integração Tailscale não funciona | Alta | #826 |
| Upgrade via Homebrew quebra serviço | Média | #354 |
| Parsing JSON falha em tool calls | Média | #408 |
| Assembly Windows retorna erro vazio | Baixa | #665 |
| Subagent não retorna resultado | Baixa | #849 |

### Cenários de Uso Identificados

1. **VPS Debian headless com Tailscale** — deployment remoto via túnel seguro
2. **macOS com Homebrew** — upgrade in-place do CLI tool
3. **Windows standalone** — uso de assembly pré-configurada
4. **Raspberry Pi ARM64** — edge computing com gateway

### Satisfação/Insatisfação

**Pontos negativos:**
- Confusão sobre como configurar gateway com Tailscale (documentação insuficiente)
- Quebras silenciosas em upgrades (experiência degradada)
- Erros genéricos sem contexto (e.g., `error.NoResponseContent`)

**Pontos positivos sugeridos:**
- Arquitetura modular atrai contribuições (9 PRs de um único autor `manelsen` em 24h)
- Zero dependências externas em novas features é valor reconhecido

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta há >7 dias

| # | Título | Criado | Dias Aberto | Prioridade |
|---|--------|--------|-------------|------------|
| [#354](https://github.com/nullclaw/nullclaw/issues/354) | Homebrew upgrade breaks service | 2026-03-07 | **44 dias** | Alta |
| [#408](https://github.com/nullclaw/nullclaw/issues/408) | JSON parsing bug | 2026-03-10 | **41 dias** | Alta |
| [#665](https://github.com/nullclaw/nullclaw/issues/665) | NoResponseContent error | 2026-03-21 | **30 dias** | Média |
| [#826](https://github.com/nullclaw/nullclaw/issues/826) | Tailscale documentation | 2026-04-15 | **5 dias** | Alta |

### Análise

**#354** está aberta há 44 dias sem resolução ou resposta da equipe. Este é o issue mais antigo e representa regressão funcional para usuários macOS via Homebrew. A falta de resposta pode impactar retenção de usuários em ecossistema Apple.

**#408** (bug de parsing JSON) aberta há 41 dias. Afeta a capacidade do agent de executar tools corretamente — severidade funcional alta.

### Recomendações

1. **Triagem imediata:** #354 e #408 precisam de acknowledgement da equipe
2. **Verificação de duplicatas:** #826 e #850 parecem relacionados — consolidar?
3. **Priorização #851:** Bug de CPU loop é novo e crítico — avaliar se hotfix é necessário antes de próxima release

---

**Fim do Relatório**  
*Gerado em 2026-04-20 | Dados de github.com/nullclaw/nullclaw*

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo do Ecossistema de Agentes de IA — 2026-04-20

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **saúde heterogênea** em 20 de abril de 2026. Sete projetos ativos demonstram cadências de desenvolvimento distintas: ZeroClaw acaba de consolidar a release v0.7.3 com migração para Cargo workspace, enquanto NanoBot e Hermes Agent lideram em volume de atividade comunitária (158 e 50 PRs atualizados, respectivamente). O tema transversal mais evidente é a **estabilidade de providers e autenticação** — todos os projetos reportam bugs críticos relacionados a falhas silenciosas de API keys, rate-limiting e integrações frágeis com provedores (Tailscale, DeepSeek, Ollama). Outro vetor compartilhado é a demanda por **observabilidade e UX não-bloqueante**, indicando maturidade do ecossistema em direção a implantações em produção.

---

## 2. Comparação de Atividade

| Projeto | Issues Ativas (24h) | PRs Abertos | PRs Merged (24h) | Releases (24h) | Bugs Críticos Abertos | Saúde |
|---------|---------------------|-------------|-------------------|----------------|----------------------|----|
| **NullClaw** | 6 | 10 | 0 | 0 | 2 (alta) | 🟡 Estável mas backlogged |
| **NanoBot** | 8 | 133 | 25 | 0 | 1 | 🟢 Alta atividade, bom throughput |
| **Hermes Agent** | 10 | 26 | 24 | 0 | 3 | 🟢 Desenvolvimento intenso |
| **PicoClaw** | 11 | 8 | 1 | 1 (nightly) | 3 | 🟡 Bug ratio alto, release contínuo |
| **IronClaw** | 10 | 31 | 19 | 0 | 1 (HIGH) | 🟢 Bom ciclo de bug-fixing |
| **CoPaw** | 21 | 14 | 0 | 0 | 2 (críticos) | 🔴 Debt de estabilidade |
| **ZeroClaw** | 31 | 20 | 9 | 3 | 5 (S0-S1) | 🟡 Maturando, vigilâncias críticas |

**Observações:**
- **Volume:** ZeroClaw e CoPaw lideram em issues ativas, sugerindo alta pressão comunitária. NanoBot tem o maior backlog de PRs (133), indicando capacidade de absorver contribuições.
- **Throughput:** Hermes Agent e NanoBot apresentam as melhores taxas de merge, sinalizando maintainers responsivos. CoPaw e NullClaw têm 0 PRs merged em 24h — indicativo de bottleneck no code review.
- **Release cadence:** Apenas PicoClaw e ZeroClaw publicaram releases no período; ZeroClaw se destaca com 3 releases incluindo a stable v0.7.3.

---

## 3. Posicionamento do Projeto Principal

> **Contexto:** Considerando o conjunto analisado, **NullClaw** (referência principal do relatório) ocupa uma posição singular no ecossistema.

### Vantagens Competitivas

| Dimensão | NullClaw | Posição no Ecossistema |
|----------|----------|------------------------|
| **Arquitetura** | Zig (binário <30KB), zero-dependency philosophy | ⭐ Diferenciação técnica — único projeto em Zig |
| **Roteamento** | Infraestrutura `inbound_router` com mid-turn injection | ⭐ Avançado — nenhum outro projeto demonstra capacidade análoga |
| **Segurança** | Enfoque em túnel seguro (Tailscale) e sandboxing | ✅ Alinhado com demanda de mercado |
| **Comunidade** | 9 PRs de autor único (`manelsen`) em 24h | 🟡 Volume baixo, mas alta intensidade individual |

### Lacunas Identificadas

| Problema | Severidade | Competidores que resolvem melhor |
|----------|------------|----------------------------------|
| Backlog de 44 dias sem resposta em #354 (Homebrew) | Alta | PicoClaw, Hermes Agent com melhor SLA de triagem |
| Bug #851 (busy-loop 100% CPU) sem hotfix | Crítica | Hermes Agent demonstra ciclo de bug-fixing mais ágil |
| Documentação de integração Tailscale insuficiente | Alta | — |

**Tamanho da comunidade:** NullClaw apresenta a menor base de issues/PRs entre os pares, sugerindo projeto em estágio anterior à adoção massiva. A arquitetura em Zig pode ser barreira de entrada para contributors, mas confere diferenciador de performance e footprint.

---

## 4. Focos Técnicos Compartilhados

### 4.1 Estabilidade de Providers e Autenticação

Problemas com falhas de autenticação aparecem em **todos os projetos**:

| Projeto | Issue | Descrição |
|---------|-------|-----------|
| NullClaw | #850 | Tailscale auth_key encryptado (em desenvolvimento) |
| NanoBot | #3300 | Deepseek API não suportada — **resolvida** |
| PicoClaw | #2578 | openai_compat ignora Authorization header — **crítica** |
| PicoClaw | #2584 | DeepSeek retorna 401 mesmo com API key válida |
| Hermes Agent | #6475 | Claude subscription auth instável após uso prolongado |
| Hermes Agent | #4983 | Gemini via OpenAI compat frágil — **resolvida via PR #12656** |
| ZeroClaw | #5606 | Rejeição 400 em provedores Kimi por streamed reasoning |

**Síntese:** A dependência de múltiplos provedores LLM gera surface area grande para falhas de autenticação e compatibilidade. A tendência emergente é a implementação de **fallback automático entre providers** (FreeRide em PicoClaw, `fallback_models` em NanoBot).

### 4.2 Observabilidade e Observação de Agent Loop

| Projeto | Feature | PR/Issue |
|---------|---------|----------|
| Hermes Agent | Profiling infrastructure para timing do agent loop | #3184 (NanoBot) |
| NanoBot | Progress hints para A2A stream | #844 |
| Hermes Agent | `RunResult.tools_used` e `RunResult.messages` populados | #3254 |
| PicoClaw | Dashboard de consumo de tokens | #2217 |
| NanoBot | Métricas de latência voice (STT→LLM→TTS) | #3257 |
| IronClaw | Brain state operator APIs | #12348 (Hermes) |

**Síntese:** O ecossistema avança para **transparência operacional** — métricas de token usage, latência por estágio e profiling do agent loop são demandas consolidadas.

### 4.3 Multi-Provider e Failover

| Projeto | Implementação | Status |
|---------|--------------|--------|
| PicoClaw | FreeRide model failover via OpenRouter | ✅ Merged (#2588) |
| NanoBot | `fallback_models` support cross-provider | 🟡 PR #3083 |
| Hermes Agent | Gemini via native AI Studio API | ✅ Resolvido (#12656) |
| Hermes Agent | Tier profiles + heuristic routing | 🟡 PR #11155 |
| ZeroClaw | Multi-Agent Routing RFC | 🔴 ~46 dias em discussão |

**Síntese:** Failover inteligente é consenso do ecossistema. A variação está na implementação: algunos priorizam failover stateless (PicoClaw), outros routing baseado em heurísticas (Hermes).

### 4.4 UX Não-Bloqueante e Feedback Visual

| Projeto | Feature | PR/Issue |
|---------|---------|----------|
| CoPaw | Telegram typing indicator durante tool execution | #3585 |
| NanoBot | Silent/quiet retry mode | #3246 |
| IronClaw | `mission_get` action para retrieving results | #2549 |
| Hermes Agent | Dashboard conversations browser | #12631 |
| PicoClaw | Web chat streaming + scroll UX | #2587 |

---

## 5. Análise de Diferenciação

| Projeto | Foco Principal | Público-Alvo | Arquitetura Distintiva |
|---------|---------------|--------------|----------------------|
| **NullClaw** | Roteamento de mensagens + túnel seguro | Edge computing, VPS headless | Zig, zero-dependency, inbound_router |
| **NanoBot** | Agente de team com cron jobs e voice | Equipes, automação recorrente | Python-centric, alta extensibilidade |
| **Hermes Agent** | Provider diversity + skills como ferramentas | Usuários avançados, multi-model | Modular providers, skill system |
| **PicoClaw** | Failover inteligente + mobile | Usuários com instabilidade de provedores | Go, FreeRide system |
| **IronClaw** | Engine v2, sandboxing, browser tool | Edge computing, WASM | Engine-centric, Slack-first |
| **CoPaw** | Interface visual + multi-canal | Usuários non-coders | UI-centric, Web-first |
| **ZeroClaw** | Execução nativa, multi-agent, CI/CD | DevOps, Raspberry Pi, corporações | Rust, Cargo workspace, Aethernet (BLE mesh) |

### Vetores de Diferenciação

**1. Linguagem e Performance:**
- **Zig (NullClaw):** Binários <30KB, controle de memória manual
- **Rust (ZeroClaw):** Memory safety, performance, Cargo workspace
- **Go (PicoClaw):** Simplicidade, binários estáticos
- **Python (NanoBot):** Produtividade, ecossistema de libraries

**2. Modelo de Negócio/Deploy:**
- **Edge-first:** NullClaw (Raspberry Pi), IronClaw (WASM), ZeroClaw (native runtime)
- **Cloud-first:** Hermes Agent (Docker images, multi-provider)
- **UI-first:** CoPaw (WebUI/Tauri), PicoClaw (Web chat)

**3. Especialização Vertical:**
- **Tailscale/VPN:** NullClaw
- **Voice interactions:** NanoBot
- **Team automation:** NanoBot, Hermes Agent (ACP delegate)
- **Mobile automation:** PicoClaw (Android), IronClaw (Slack)
- **Offline mesh:** ZeroClaw (BitChat BLE)

---

## 6. Tração e Maturidade da Comunidade

### Velocidade de Iteração

| Projeto | Cadência | Caracterização |
|---------|----------|----------------|
| **NanoBot** | Muito alta | 158 PRs atualizados, 25 merges/24h — ecossistema mais ativo |
| **Hermes Agent** | Alta | 50 issues + 50 PRs, 24 merges — maturidade de throughput |
| **IronClaw** | Alta | 50 PRs, 19 merges — pipeline saudável de staging |
| **ZeroClaw** | Moderada-alta | 3 releases, 9 merges — foco em consolidação pós-v0.7.3 |
| **PicoClaw** | Moderada | Nightly releases, 1 merge — projeto mais jovem |
| **CoPaw** | Baixa | 0 merges, 21 issues — bottleneck de review |
| **NullClaw** | Baixa | 0 merges, 10 PRs — sem releases recentes |

### Consolidando Qualidade vs. Iterando Rápido

| Perfil | Projetos | Estratégia |
|--------|----------|------------|
| **Consolidando qualidade** | NullClaw, CoPaw, ZeroClaw | Volume baixo de activity, mas releases significativas (v0.7.3). CoPaw tem debt técnico (bugs críticos). |
| **Iterando rápido** | NanoBot, Hermes Agent, IronClaw | Alta cadência de merges, muitos PRs simultâneos. Risco de technical debt se não houver triagem. |
| **Em transição** | PicoClaw | nightly builds indicam iteração rápida; 3 bugs críticos em aberto sugerem necessidade de stabilization sprint |

### Maintainer Responsiveness

| Projeto | Issue mais antiga sem resposta | Dias |
|---------|-------------------------------|------|
| **ZeroClaw** | #2767 (Multi-Agent Routing) | ~46 |
| **NullClaw** | #354 (Homebrew upgrade) | 44 |
| **NanoBot** | #2231 (Plugin system) | ~33 |
| **Hermes Agent** | #160 (Telegram voice) | ~60 |
| **CoPaw** | #1874 (Telegram typing) | ~32 |
| **IronClaw** | #1446 (Aliyun support) | ~30 |
| **PicoClaw** | #2321 (Provider config) | 16 |

**Alerta:** NullClaw (#354) e ZeroClaw (#2767) possuem issues estratégicas abertas há >44 dias sem resposta — risco de percepção negativa da comunidade.

---

## 7. Sinais de Tendência

### 7.1 Tendências Técnicas Extraídas

| Tendência | Evidência | Implicação |
|-----------|-----------|------------|
| **Failover automático multi-provider** | PicoClaw FreeRide, NanoBot fallback_models, Hermes tier routing | Commoditização de LLM providers; resiliência como feature padrão |
| **Observabilidade do agent loop** | Profiling (NanoBot), progress hints, RunResult SDK | Maturidade para produção; debugging contextual |
| **Execução nativa vs. container** | NullClaw inbound_router, ZeroClaw runtime.kind=native, IronClaw WASM | Trade-off entre portabilidade (Docker) e performance (native/sandbox) |
| **BLE/offline mesh** | ZeroClaw BitChat (#5901) | Expansão para cenários edge sem conectividade |
| **Browser automation nativo** | IronClaw built-in browser tool (#2360) | Agentes capaz de interagir com páginas JS-rendered |

### 7.2 Tendências de Mercado Extraídas do Feedback

| Tendência | Usuários | Demanda |
|-----------|----------|---------|
| **Voice-first interactions** | NanoBot, Hermes Agent | STT→LLM→TTS com latência <10s |
| **Zero-touch VPS deployment** | NullClaw #826, Hermes Docker issues | Configuração via túnel (Tailscale) sem UI |
| **Multi-tenant/corporativo** | PicoClaw #2313, ZeroClaw skills whitelisting | Isolamento, permissions, audit trail |
| **Provider diversity** | Todos | Redução de vendor lock-in, cross-provider fallback |
| **UX silencioso** | NanoBot #3246, CoPaw typing indicator | Preferência por retries não-intrusivos |

### 7.3 Feature Requests com Maior Consenso

| Feature | Projetos que solicitam | 👍 Estimado |
|---------|------------------------|-------------|
| Plugin/extensibility system | NanoBot, Hermes Agent, CoPaw | >15 |
| Cross-session persistent memory | Hermes (#12326), NanoBot (#3292), IronClaw | >12 |
| Multi-agent orchestration | ZeroClaw (#2767), Hermes (ACP delegate) | >10 |
| Observabilidade/token metrics | PicoClaw, NanoBot, Hermes Agent | >8 |
| Lightweight/slim Docker images | Hermes (#12572), ZeroClaw (slim profile) | >5 |

---

## Síntese Executiva

O ecossistema de agentes de IA open source demonstra **fragmentação saudável** — múltiplos projetos com arquiteturas e focos distintos competem e complementam-se. **NanoBot e Hermes Agent** lideram em tração comunitária e velocidade de iteração; **ZeroClaw** evidencia maturidade técnica com a release v0.7.3; **NullClaw** se diferencia por arquitetura em Zig e capacidades de roteamento, mas sofre com backlog de triagem.

**Para decisores técnicos:** A tendência clara é que **failover multi-provider, observabilidade granular e execução nativa** serão features commodities nos próximos 6 meses. Projetos que resolverem bugs de autenticação e estabilidade de providers primeiro capturarão adoção corporativa.

**Para desenvolvedores:** Contribuições com maior probabilidade de merge estão em projetos com alto throughput (NanoBot, Hermes) ou em features de diferenciação clara (ZeroClaw multi-agent, NullClaw inbound_router). CoPaw e NullClaw apresentam bottleneck de review que pode frustrar contributors.

---

*Relatório gerado em 2026-04-20 com base nos dados de github.com para NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw e ZeroClaw.*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-04-20

## 1. Panorama do Dia

O NanoBot apresenta **alta atividade comunitária** em 20 de abril de 2026, com 11 issues e 158 PRs atualizados nas últimas 24 horas. A taxa de engajamento em PRs é particularmente expressiva — 25 merges/fechadas contra 133 abertas — sinalizando um fluxo de contribuições robusto. Não houve lançamentos formais no período, mas o repositório demonstra uma maturidade em desenvolvimento ativo, com foco em melhorias de estabilidade (bug fixes), performance (profiling e caching) e extensibilidade (plugins, providers customizados). A ausência de releases novas sugere que a equipe pode estar em fase de consolidação de changes antes de um próximo versionamento.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24 horas.**

O repositório não publicou novas versões neste período. Isso é consistente com o padrão de desenvolvimento observado: a comunidade mantém alto volume de PRs individuais (158), mas a consolidação em releases formais ocorre em ciclos distintos.

> **Nota:** Para acompanhar versões anteriores, consulte a [página de releases do NanoBot](https://github.com/HKUDS/nanobot/releases).

---

## 3. Progresso do Projeto

As seguintes PRs foram **merged/fechadas** ou mantêm atividade significativa, representando avanços concretos:

| PR | Título | Autor | Destaque |
|---|---|---|---|
| [#3300](https://github.com/HKUDS/nanobot/issues/3300) | Bug: Deepseek API not supported | Frame-lix | **Fechado** — Problema com API Deepseek resolvido |
| [#3274](https://github.com/HKUDS/nanobot/issues/3274) | maybe_consolidate_by_tokens summary injection | Lier007 | **Fechado** — Clareza sobre estratégia de consolidação |
| [#3265](https://github.com/HKUDS/nanobot/issues/3265) | UI dumps a lot of crap | javierspn | **Fechado** — Problema de output excessivo no terminal |

**PRs em destaque com alto volume de atividade (20 items com mais comments):**

- [#2255](https://github.com/HKUDS/nanobot/pull/2255) — Suporte a topics específicas do Telegram via `chat_id` formatado
- [#2217](https://github.com/HKUDS/nanobot/pull/2217) — Adição de ação `edit` no cron tool + exibição completa de mensagens
- [#3158](https://github.com/HKUDS/nanobot/pull/3158) — Mega-PR de performance e responsividade (66.500 linhas analisadas)
- [#3181](https://github.com/HKUDS/nanobot/pull/3181) — Otimizações de I/O em memória e histórico (write batching)
- [#3182](https://github.com/HKUDS/nanobot/pull/3182) — Cache de arquivos bootstrap, schemas de tools e Dream skills
- [#3180](https://github.com/HKUDS/nanobot/pull/3180) — Filas bounded no MessageBus + segurança de contexto de roteamento
- [#3179](https://github.com/HKUDS/nanobot/pull/3179) — WebSocket tooling, lifecycle de sessão e reasoning content
- [#3184](https://github.com/HKUDS/nanobot/pull/3184) — Infraestrutura de profiling para timing do agent loop
- [#3254](https://github.com/HKUDS/nanobot/pull/3254) — Popula `RunResult.tools_used` e `RunResult.messages` no SDK
- [#3253](https://github.com/HKUDS/nanobot/pull/3253) — Retry em falhas transitórias do Whisper (backoff exponencial)

---

## 4. Temas Quentes da Comunidade

As discussions com maior engajamento (comments/reações) revelam as prioridades da comunidade:

### Issues com mais atividade

1. **[#3107](https://github.com/HKUDS/nanobot/issues/3107) — "一些建议" (6 comments)**
   - **Autor:** aiguozhi123456
   - **Resumo:** Sugestões práticas: exibir count de tasks no status, referenciar session history no system prompt, retry终止提示, parâmetros de startup para modelo, timeout configurável, fallback de providers, múltiplas custom providers
   - **Análise:** Usuário avançando a proposta de item #6 (fallback) que aparece também em PR [#3083](https://github.com/HKUDS/nanobot/pull/3083). Sinergia entre issue e PR indica demanda consolidada.

2. **[#3300](https://github.com/HKUDS/nanobot/issues/3300) — Bug: Deepseek API (6 comments, fechado)**
   - **Autor:** Frame-lix
   - **Resumo:** Nanobot não suportava API do Deepseek. Problema agora resolvido.
   - **Análise:** Demonstra atenção da equipe a provedores emergentes.

3. **[#2220](https://github.com/HKUDS/nanobot/issues/2220) — ContextVar proposal (5 comments)**
   - **Autor:** jr551
   - **Resumo:** Proposta de usar `ContextVar` para contexto de roteamento task-local em message, spawn e cron.
   - **Análise:** Correlaciona-se com PR [#2224](https://github.com/HKUDS/nanobot/pull/2224) em desenvolvimento ativo. Discussão técnica aprofundada.

4. **[#3257](https://github.com/HKUDS/nanobot/issues/3257) — Voice latency metrics (3 comments)**
   - **Autor:** gregoryschlepper
   - **Resumo:** Necessidade de métricas por estágio (STT→LLM→TTS) para entender latência de 35-60s em interações de voz.
   - **Análise:** Casos de uso em produção com voice interaction geram demanda por observabilidade granular.

5. **[#2231](https://github.com/HKUDS/nanobot/issues/2231) — Plugin system (3 comments)**
   - **Autor:** andrader
   - **Resumo:** Solicitação de sistema de plugins extensível (tipo Copilot CLI/Claude Code).
   - **Análise:** Demanda de longo prazo que pode moldar arquitetura futura.

---

## 5. Bugs e Estabilidade

### Bugs reportados hoje

| Severidade | Issue | Título | Status |
|---|---|---|---|
| **Alta** | [#3315](https://github.com/HKUDS/nanobot/issues/3315) | Message too long no Telegram | 🟡 Aberta |
| **Média** | [#3300](https://github.com/HKUDS/nanobot/issues/3300) | Deepseek API não suportada | ✅ Fechada |
| **Média** | [#3265](https://github.com/HKUDS/nanobot/issues/3265) | UI dumps excessive output | ✅ Fechada |
| **Baixa** | [#3243](https://github.com/HKUDS/nanobot/pull/3243) | Email SPF/DKIM log spam (PR) | 🟡 Aberta |

**Destaque — Bug Crítico de Telegram:**

> **[#3315](https://github.com/HKUDS/nanobot/issues/3315)** — Quando o modelo gera muitas mensagens em stream, o bot tenta enviar como mensagem única no Telegram, causando erro. O limite de 4096 caracteres do Telegram está sendo violado. **Sem comments ainda — requer atenção imediata da equipe.**

**Bug Resolvido:**
> **[#3300](https://github.com/HKUDS/nanobot/issues/3300)** — Suporte à API do Deepseek foi implementado, resolvendo o problema relatado por Frame-lix em Ubuntu 24LTS.

---

## 6. Pedidos de Features e Sinais de Roadmap

A análise das issues abertas revela as direções desejadas pela comunidade:

### Features solicitadas com alta demanda

1. **[#3292](https://github.com/HKUDS/nanobot/issues/3292) — Session-Level Focus Tool**
   - **Autor:** piliplaker
   - **Proposta:** Tool persistente de awareness de task que sobrevive interrupções e compactação.
   - **Alinhamento estratégico:** Mimica o "mental task board" humano — avançaria autonomia de agentes.

2. **[#3246](https://github.com/HKUDS/nanobot/issues/3246) — Silent/quiet retry mode**
   - **Autor:** iwandepe
   - **Proposta:** Eliminar mensagens ruidosas de retry para o usuário final.
   - **UX:** Melhoria direta na experiência de uso em produção.

3. **[#3309](https://github.com/HKUDS/nanobot/issues/3309) — Per-chat group policy para Telegram**
   - **Autor:** splanes
   - **Proposta:** Políticas `open`/`mention` por grupo, não global.
   - **Use case:** Bots em múltiplos grupos com necessidades diferentes.

4. **[#3105](https://github.com/HKUDS/nanobot/pull/3105) — CronTool update tool (PR)**
   - **Autor:** MilesTin
   - **Funcionalidade:** Atualizar descrição de cron tasks sem deletar/re-criar.

5. **[#3083](https://github.com/HKUDS/nanobot/pull/3083) — fallback_models support (PR)**
   - **Autor:** xzq-xu
   - **Funcionalidade:** Failover automático entre modelos, incluindo cross-provider (ex: OpenAI → Anthropic).

### Sinais de arquitetura futura

- **Plugin System** ([#2231](https://github.com/HKUDS/nanobot/issues/2231)) — Demanda de extensibilidade de longo prazo
- **Custom Provider Support** ([#3264](https://github.com/HKUDS/nanobot/pull/3264)) — PR duplicado indica alta demanda
- **LongCat Provider** ([#3114](https://github.com/HKUDS/nanobot/pull/3114)) — Expansão do registry de providers

---

## 7. Resumo de Feedback dos Usuários

### Dores reportadas

| Dor | Impacto | Evidence |
|---|---|---|
| **Black box do nanobot** | Alta | Issue [#3107](https://github.com/HKUDS/nanobot/issues/3107) — usuários não sabem count de tasks, status de retries |
| **Latência em voice interactions** | Alta | Issue [#3257](https://github.com/HKUDS/nanobot/issues/3257) — 35-60s sem visibilidade de gargalos |
| **UI verbosa no terminal** | Média | Issue [#3265](https://github.com/HKUDS/nanobot/issues/3265) — "⠋ nanobot is thinking..." spamma tela |
| **Lidar com múltiplos grupos Telegram** | Média | Issue [#3309](https://github.com/HKUDS/nanobot/issues/3309) — política única insufficient |
| **Fallback entre modelos** | Alta | PR [#3083](https://github.com/HKUDS/nanobot/pull/3083) — provedores por prompt pricing instáveis |

### Cenários de uso identificados

1. **Voice assistant pessoal** — STT local (faster-whisper) + TTS via API (Cartesia)
2. **Agente de equipe** — Claw team compartilhando nanobot com parâmetros customizados
3. **Email processing** — Polling com dedup, SPF/DKIM handling
4. **Automação de cron** — Tasks recorrentes com edição inline

### Satisfação/Insatisfação

**Positivo:**
- Suporte a Deepseek ([#3300](https://github.com/HKUDS/nanobot/issues/3300)) foi bem接受的 como "good first issue"
- Community contribuidores ativos (flobo3, mohamed-elkholy95) demonstram saúde do ecossistema

**Negativo:**
- Falta de métricas/observabilidade em produção (voice latency, profiling)
- UX de retry agressiva sem opção silenciosa
- Flexibilidade limitada de providers e políticas por contexto

---

## 8. Backlog que Merece Atenção

### Issues sem resposta há mais tempo

| Issue | Título | Criado | Days Idle | Prioridade |
|---|---|---|---|---|
| [#2231](https://github.com/HKUDS/nanobot/issues/2231) | Plugin system request | 2026-03-18 | ~33 dias | Estratégica |
| [#2220](https://github.com/HKUDS/nanobot/issues/2220) | ContextVar proposal | 2026-03-18 | ~33 dias | Técnica |
| [#2224](https://github.com/HKUDS/nanobot/pull/2224) | ContextVar PR | 2026-03-18 | ~33 dias | Técnica |

### PRs bloqueados ou pendentes de review

| PR | Título | Criado | Status | Bottleneck |
|---|---|---|---|---|
| [#2224](https://github.com/HKUDS/nanobot/pull/2224) | ContextVar for tool routing | 2026-03-18 | Aberta | Waiting review |
| [#2231](https://github.com/HKUDS/nanobot/issues/2231) | Plugin system request | 2026-03-18 | Aberta | Sem resposta |
| [#2255](https://github.com/HKUDS/nanobot/pull/2255) | Telegram topic support | 2026-03-19 | Aberta | Aprovação pendente |

### Recomendações para a equipe

1. **Priorizar [#3315](https://github.com/HKUDS/nanobot/issues/3315)** — Bug de message length no Telegram afeta usuários em produção
2. **Revisar [#2224](https://github.com/HKUDS/nanobot/pull/2224)** — PR em espera há 33 dias com proposta de async-safety
3. **Responder a [#2231](https://github.com/HKUDS/nanobot/issues/2231)** — Feature request estratégico sem feedback da equipe
4. **Consolidar PRs do [#3158](https://github.com/HKUDS/nanobot/pull/3158)** — Meta-PR de performance está fragmentado em 8 sub-PRs; garantir alinhamento antes de merge

---

## Métricas de Saúde do Projeto

| Indicador | Valor | Avaliação |
|---|---|---|
| Issues ativas (24h) | 8 | ✅ Saudável |
| PRs abertas | 133 | ⚠️ Alto volume, requer triagem |
| PRs merged (24h) | 25 | ✅ Bom throughput |
| Releases (24h) | 0 | ⚠️ Nenhuma versão tagged |
| Tempo médio de resposta (issues) | <24h | ✅ Comunidade ativa |
| Bugs críticos abertos | 1 | ⚠️ Requer atenção |

---

*Relatório gerado em 2026-04-20 com base em dados do GitHub HKUDS/nanobot.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-04-20

## 1. Panorama do Dia

O Hermes Agent atravessa um período de **alta atividade construtiva**: 50 issues e 50 PRs atualizados nas últimas 24h, com 24 PRs já merged/fechados — indicando um ritmo de desenvolvimento intenso e saudável. A ausência de releases formais neste intervalo contrasta com a efervescência de contribuições internas: 26 PRs permanecem abertos e devem avançar brevemente. A comunidade demonstra maturidade ao resolver problemas críticos (autenticação Claude, Docker delays) enquanto simultaneamente expande funcionalidades em áreas como providers nativos, tooling de memória e UX multi-plataforma. O projeto segue em trajetória de crescimento funcional sem sinais de estagnação ou regressões estruturais.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

Não foram geradas novas versões taggeadas. Isso sugere foco em estabilização interna de PRs pendentes em vez de corte de release. Usuários em produção devem monitorar branches `main` diretamente ou imagens Docker mais recentes (observação: a imagem `latest` atualizava com delay de ~3h conforme issue #12386).

---

## 3. Progresso do Projeto

### PRs Merged/Closed (seleção de maior impacto)

| # | PR | Impacto | Link |
|---|---|---------|------|
| **#12656** | feat(providers): route gemini through native AI Studio API | Migração do provider Gemini para API nativa, eliminando dependência da camada OpenAI-compatível e potencialmente resolvendo instabilidade de tool calling | [PR #12656](https://github.com/NousResearch/hermes-agent/pull/12656) |
| **#12676** | feat: add Zep memory provider | Integração de provider de memória Zep via arquitetura plugin existente, expandindo opções de memória persistente | [PR #12676](https://github.com/NousResearch/hermes-agent/pull/12676) |
| **#12319** | fix(hermes_cli): dedup providers across user_providers and custom_providers | Correção de duplicação de providers na listagem `/model` em user_providers | [PR #12319](https://github.com/NousResearch/hermes-agent/pull/12319) |
| **#12671** | fix(tui): /model picker surfaces curated list, matching classic CLI | Alinhamento do picker TUI com a lista curada de modelos, removendo ~380 IDs não-agenticos da listagem Nous | [PR #12671](https://github.com/NousResearch/hermes-agent/pull/12671) |
| **#10243** | fix(models): use curated list for Nous in provider_model_ids() | Correção no backend para não expor catálogo completo da API Nous no picker de modelos | [PR #10243](https://github.com/NousResearch/hermes-agent/pull/10243) |
| **#158** | feat: add docker_volumes config for custom volume mounts | Feature antiga (#158) finalmente merged, permitindo montagem de volumes host no Docker sandbox | [PR #158](https://github.com/NousResearch/hermes-agent/pull/158) |
| **#12677** | fix(gateway): leave pending in adapter queue when run generation is stale | Correção de race condition onde `/new` durante unwind do agent consumia mensagens pendentes com generation stale | [PR #12677](https://github.com/NousResearch/hermes-agent/pull/12677) |

**Nota**: Os PRs #12680 (fix kimi temperature), #12675 (stale timeout config), #12678 (Val Town skill), e #12679 (docs cleanup) também fechados no período, indicando consolidação de dívida técnica.

---

## 4. Temas Quentes da Comunidade

### Issues/PRs com maior engajamento

#### 🔥 #6475 — Autenticação Claude Subscription (CLOSED, 12 comentários, 14 👍)
**Problema**: Após período inicial funcional, autenticação de subscription Anthropic/Claude passa a retornar `HTTP 400: You're out of extra usage` mesmo após restart/re-login.

**Demanda subjacente**: Estabilidade de autenticação em setups com créditos limitados. Usuários querem可靠性 consistente para uso em produção.

**Relevância**: Alta — afeta experiência em produção.

🔗 [Issue #6475](https://github.com/NousResearch/hermes-agent/issues/6475)

---

#### 🔥 #4983 — Native Google GenAI Provider para Gemini (CLOSED, 11 comentários, 2 👍)
**Problema**: Usuários forçados a usar camada OpenAI-compatível para Gemini, causando tool calling frágil e perda de funcionalidades nativas.

**Demanda subjacente**: Provider nativo robusto para modelos Gemini, especialmente para tool calling e funcionalidades específicas do Google.

**Relevância**: **Resolvida via PR #12656** — marca vitória significativa para comunidade.

🔗 [Issue #4983](https://github.com/NousResearch/hermes-agent/issues/4983)

---

#### 🔥 #11016 — Telegram stale adapter busy lock (OPEN, 5 comentários)
**Problema**: Split-brain entre platform adapter (Telegram) e gateway runner causando loops de "Interrupting current task..." com "No active task to stop".

**Demanda subjacente**: Estabilidade em integrações de mensageria, especialmente em cenários de multi-tarefa.

🔗 [Issue #11016](https://github.com/NousResearch/hermes-agent/issues/11016)

---

#### 🔥 #12386 — Docker latest image sem Gemini fix (OPEN, 3 comentários)
**Problema**: Imagem Docker `latest` foi buildada 3h antes do fix ca32a2a6 para bearer auth regression do Gemini.

**Demanda subjacente**: Pipeline de CI/CD mais rápido e confiável para imagens Docker. Usuários em container estão desprotegidos.

🔗 [Issue #12386](https://github.com/NousResearch/hermes-agent/issues/12386)

---

### PRs em Destaque (a serem revisados pela comunidade)

| # | PR | Descrição | Link |
|---|---|-----------|------|
| **#12633** | feat(skill): darwinian-evolver | Evolutionary optimizer para prompts, regex, SQL e código via mutação LLM-driven | [PR #12633](https://github.com/NousResearch/hermes-agent/pull/12633) |
| **#12642** | feat(skills): NOX multi-layer reasoning | Protocolo de raciocínio com 80% redução de tokens e 3-layer validation | [PR #12642](https://github.com/NousResearch/hermes-agent/pull/12642) |
| **#12631** | feat(dashboard): conversations browser | API e UI para browser de conversas históricas | [PR #12631](https://github.com/NousResearch/hermes-agent/pull/12631) |
| **#11155** | feat(delegate): tier profiles e heuristic routing | Roteamento automático de tarefas por tiers com reasoning floor guardrails | [PR #11155](https://github.com/NousResearch/hermes-agent/pull/11155) |
| **#11796** | feat(workspace): FTS5 foundation + pluggable indexer | Base para busca full-text no workspace com indexadores plugáveis | [PR #11796](https://github.com/NousResearch/hermes-agent/pull/11796) |
| **#11223** | feat: configurable skills prompt filter | Opção para filtrar skills no system prompt, reduzindo context bloat | [PR #11223](https://github.com/NousResearch/hermes-agent/pull/11223) |

---

## 5. Bugs e Estabilidade

### Bugs Reportados por Severidade

#### 🔴 Críticos (afetam funcionalidade core)

| # | Bug | Descrição | Link |
|---|---|-----------|------|
| **#12395** | QQBot loop infinito de chamadas | Após falha de push de mensagem, Hermes entra em loop chamando LLM repetidamente, consumindo tokens excessivamente | [Issue #12395](https://github.com/NousResearch/hermes-agent/issues/12395) |
| **#12422** | SSE reporta stop normal após crash | `APIServerAdapter` mascara exceções do agent e termina stream com `finish_reason: "stop"`, confundindo clientes | [Issue #12422](https://github.com/NousResearch/hermes-agent/issues/12422) |
| **#11016** | Telegram stale busy lock | Split-brain adapter/gateway causa interrupções repetidas e mensagens contraditórias | [Issue #11016](https://github.com/NousResearch/hermes-agent/issues/11016) |

#### 🟡 Moderados (impactam UX/funcionalidade específica)

| # | Bug | Descrição | Link |
|---|---|-----------|------|
| **#9125** | kimi-coding temperature inválido | Chamadas auxiliares falham com `invalid temperature: only 1 is allowed` quando provider=auto | [Issue #9125](https://github.com/NousResearch/hermes-agent/issues/9125) |
| **#12386** | Docker latest sem fix Gemini | Imagem Docker 3h desatualizada deixa usuários sem correção de bearer auth | [Issue #12386](https://github.com/NousResearch/hermes-agent/issues/12386) |
| **#12534** | docker_forward_env ignorado | Variáveis de ambiente configuradas não chegam ao container sandbox | [Issue #12534](https://github.com/NousResearch/hermes-agent/issues/12534) |
| **#12290** | Mattermost edit_message signature desatualizada | Falta parâmetro `finalize` após merge de DingTalk AI Cards | [Issue #12290](https://github.com/NousResearch/hermes-agent/issues/12290) |
| **#12408** | Vision tool envia campo 'tags' para providers não-Nous | Causa 400 error em Gemini quando provider principal é Nous | [Issue #12408](https://github.com/NousResearch/hermes-agent/issues/12408) |

#### 🟢 Menores (cosméticos ou baixa frequência)

| # | Bug | Descrição | Link |
|---|---|-----------|------|
| **#12641** | Status bar duplicada como newlines quando idle | Caixas de diálogo vazias aparecem automaticamente no TUI após inatividade | [Issue #12641](https://github.com/NousResearch/hermes-agent/issues/12641) |
| **#12330** | Texto ilegível em terminal branco | Cores do TUI não se adaptam a backgrounds claros | [Issue #12330](https://github.com/NousResearch/hermes-agent/issues/12330) |
| **#12485** | TUI mostra "docker" mesmo com backend "local" | Indicador de backend incorreto na interface | [Issue #12485](https://github.com/NousResearch/hermes-agent/issues/12485) |
| **#12372** | Skill number duplica no dashboard | Contador de skills mostra valores duplicados | [Issue #12372](https://github.com/NousResearch/hermes-agent/issues/12372) |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features com maior potencial de inclusão

#### 🎯 #12213 — compress_context como Tool nativa
**Problema**: `/compress` existe apenas como slash command, não como Tool que o agent pode chamar autonomamente em SKILL.md.

**Casos de uso**: Permite uso em procedimentos自动izados, reduções de contexto via instruções em skills.

🔗 [Issue #12213](https://github.com/NousResearch/hermes-agent/issues/12213)

---

#### 🎯 #12655 — picker_providers config
**Problema**: Usuários com apenas endpoints customizam precisam ver providers built-in (Anthropic, OpenRouter) no picker.

**Solução proposta**: Nova config `model.picker_providers` para filtrar список de providers visíveis.

🔗 [Issue #12655](https://github.com/NousResearch/hermes-agent/issues/12655)

---

#### 🎯 #11425 — Skills lifecycle management
**Problema**: Lista de skills cresce indefinidamente, sem tracking de uso ou detecção de skills órfãs.

**Casos de uso**: Usuários com 89+ skills instaladas precisam de gestão (usage tracking, stale detection, auto-cleanup).

🔗 [Issue #11425](https://github.com/NousResearch/hermes-agent/issues/11425)

---

#### 🎯 #12326 — Persistent cross-session todo system
**Problema**: Ferramenta `todo` atual é in-session apenas; não há integração persistente com stack-ranked priority.

**Proposta**: Todo integration cross-session, cross-platform, com visibilidade e gerenciamento pelo agent.

🔗 [Issue #12326](https://github.com/NousResearch/hermes-agent/issues/12326)

---

#### 🎯 #12572 — Lightweight Docker image sem Playwright/Chromium
**Problema**: Imagem oficial é ~2.4GB; usuários CLI-only não precisam de Playwright, Node.js, ou WhatsApp bridge.

**Proposta**: Imagem slim para casos de uso minimalistas.

🔗 [Issue #12572](https://github.com/NousResearch/hermes-agent/issues/12572)

---

#### 🎯 #12348 — Operator APIs para Brain state
**Proposta**: APIs de leitura/controlo para events, patterns, candidates e rollout state do Brain.

**Relevância**: Facilita operabilidade e debugging em produção.

🔗 [Issue #12348](https://github.com/NousResearch/hermes-agent/issues/12348)

---

#### 🎯 #12484 — Imprint para profile portable
**Problema**: USER.md/MEMORY.md não são portáveis entre agentes (Hermes, Claude Code, Cursor, Codex).

**Proposta**: Formato estruturado e editável que captura como o usuário trabalha.

🔗 [Issue #12484](https://github.com/NousResearch/hermes-agent/issues/12484)

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais Identificadas

| Categoria | Dor | Evidência |
|-----------|-----|-----------|
| **Autenticação** | Instabilidade de auth em providers de subscription (Claude) após uso prolongado | #6475 (14 👍, 12 comments) |
| **Estabilidade Telegram** | Mensagens de voz duplicadas, loops de interrupção, split-brain adapter | #160, #11016 |
| **Tokens/Custos** | Consumo excessivo por loops (#12395) e lack de config para timeouts | #12395, #12535 |
| **Context Bloat** | Skills não filtradas, compress não automatizável, prompts hardcoded | #11425, #12213, #12340 |
| **Docker/Deploy** | Imagens desatualizadas, env vars não forwardadas, imagens pesadas | #12386, #12534, #12572 |
| **UX Multi-plataforma** | Cores de terminal fixas, indicator de backend errado, markdown em WhatsApp | #12330, #12485, #12224 |
| **Providers** | Gemini via OpenAI compat frágil, kimi temperature, Nous catalog poluído | #4983, #9125, #10243 |

### Cenários de Uso Emergentes

1. **Multi-agent orchestration**: Skill `acp-delegate` (#12396) e tier routing (#11155) indicam interesse em arquiteturas distribuídas.
2. **On-chain AI**: Web3 (#159) e Solana (#164) tools sugerem perfil de usuário进来了ndo para agentes com acesso a blockchain.
3. **Workspace intelligence**: FTS5 + indexers (#11796) aponta para uso como Coding Agent com busca semântica.

---

## 8. Backlog que Merece Atenção

### Issues sem resposta ou estagnadas

| # | Issue | Idade | Status | Prioridade | Link |
|---|---|---|---|-----------|------|
| **#160** | Telegram voice messages duplicadas | ~2 meses | CLOSED | 🟡 Moderada | [Issue #160](https://github.com/NousResearch/hermes-agent/issues/160) |
| **#8340** | Terminal hangs com setsid+disown | ~8 dias | CLOSED | 🟡 Moderada | [Issue #8340](https://github.com/NousResearch/her

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório de Projeto: PicoClaw
**Data:** 2026-04-20 | **Versão Analisada:** v0.2.6-nightly.20260419

---

## 1. Panorama do Dia

O projeto PicoClaw apresenta alta atividade comunitária em 20 de abril de 2026, com 13 issues e 9 PRs atualizados nas últimas 24h. A release nightly v0.2.6-nightly.20260419 foi publicada, indicando desenvolvimento contínuo. Os destaques do dia incluem a mesclagem do PR #2588 com o sistema FreeRide de failover inteligente de modelos, correções de bugs críticos relacionados a provedores (Ollama, DeepSeek, OpenAI compat), e várias contribuições focadas em segurança e estabilidade. A comunidade demonstra particular interesse em funcionalidades de automação mobile e melhorias na interface web.

---

## 2. Lançamentos

### 🌙 Release Mais Recente

| Artefato | Detalhes |
|----------|----------|
| **Versão** | `v0.2.6-nightly.20260419.6126ede9` |
| **Tipo** | Nightly Build |
| **Data** | 2026-04-19 |

**Changelog:** https://github.com/sipeed/picoclaw/compare/v0.2.6...main

> ⚠️ **Aviso:** Este é um build automatizado e pode ser instável. Use com cautela em produção.

**Observação:** Esta release noturna prepara o terreno para a v0.2.6 estável, incorporando o sistema FreeRide e refatorações de arquitetura de provedores mescladas recentemente.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados Hoje

#### ✅ PR #2588 — FreeRide Model Failover & Provider Architecture Refactoring
- **Status:** FECHADO/MERGED
- **Autor:** stevef1uk
- **Domínios:** provider, tool, build
- **Impacto:** Alto — Introduz o sistema FreeRide de rotação inteligente de modelos LLM via OpenRouter quando provedores primários estão indisponíveis ou com rate-limiting. Inclui refatoração major da arquitetura de provedores e ferramentas.

🔗 https://github.com/sipeed/picoclaw/pull/2588

---

### PRs Abertos em Andamento

| PR | Título | Autor | Domínio | Progresso |
|----|--------|-------|---------|-----------|
| #2591 | FreeRide model failover (modernizado) | stevef1uk | provider | Novo |
| #2587 | Web chat streaming + scroll UX | SiYue-ZO | provider, channel, agent | Novo |
| #2586 | Deduplicação de funções em pkg/providers | kunalk16 | provider, go | Novo |
| #2585 | Refatoração Agent Looper phase2 | sky5454 | agent, go | Novo |
| #2313 | Multi-User Support & Security Hardening | stevef1uk | multi-domain | Em progresso |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

#### 🔥 Issue #292 — Android Device Automation & Remote Operations
- **Prioridade:** High | **Tipo:** Roadmap
- **Autor:** Zepan | **Comentários:** 8 | **Reações:** 👍 1
- **Criada:** 2026-02-16 | **Atualizada:** 2026-04-19
- **Resumo:** Proposta para capacitar o PicoClaw a controlar e automatizar dispositivos Android, servindo como ponte entre LLMs e interfaces mobile — similar ao "Botdrop". Esta é uma visão de longo prazo para expandir o alcance do projeto além de chatbots tradicionais.

🔗 https://github.com/sipeed/picoclaw/issues/292

#### 💬 Issue #2171 — Migrar para OpenAI Responses API
- **Tipo:** Enhancement | **Domínio:** provider
- **Autor:** kunalk16 | **Comentários:** 7
- **Atualizada:** 2026-04-19
- **Resumo:** Proposta de refatoração para migrar todos os endpoints baseados em OpenAI do Chat Completions API para o Responses API, conforme recomendação oficial da OpenAI.

🔗 https://github.com/sipeed/picoclaw/issues/2171

---

### PRs com Maior Potencial de Impacto

#### 🔗 PR #2313 — Multi-User Support, Security Hardening & Skills Whitelisting
- **Autor:** stevef1uk
- **Domínios:** agent, tool, config, build, docker
- **Status:** Em progresso (desde 2026-04-03)
- **Resumo:** Integra o "Agent Shield" para hardening de segurança e adiciona suporte multi-usuário com whitelisting de skills — recurso crítico para implantações corporativas.

🔗 https://github.com/sipeed/picoclaw/pull/2313

---

## 5. Bugs e Estabilidade

### 🔴 Bugs Críticos (Alta Severidade)

#### Issue #2578 — openai_compat provider ignora Authorization header
- **Tipo:** Bug | **Domínio:** provider
- **Autor:** dev-equilibrium | **Criada:** 2026-04-17 | **Atualizada:** 2026-04-19
- **Impacto:** **Crítico** — Na v0.2.6, o provider `openai_compat` envia requisições sem o header `Authorization`, independentemente de onde a API key está configurada. Isso quebra todos os modelos HTTP que dependem de credenciais.
- **Comportamento:** API key é silenciosamente descartada de todas as fontes de configuração.

🔗 https://github.com/sipeed/picoclaw/issues/2578

#### Issue #2584 — DeepSeek retorna 401 Authentication Fails
- **Tipo:** Bug | **Domínio:** provider
- **Autor:** ldmonkey | **Criada:** 2026-04-18 | **Atualizada:** 2026-04-19
- **Ambiente:** Ubuntu 24.04, v0.2.6 (git: 51eecde)
- **Impacto:** deepseek-chat retorna erro 401 mesmo com API key válida (confirmado via curl direto).
- **Comportamento:** Autenticação falha apesar de credenciais corretas.

🔗 https://github.com/sipeed/picoclaw/issues/2584

#### Issue #2590 — Android app não inicia serviço
- **Tipo:** Bug | **Domínio:** build
- **Autor:** thalissoncontadiscord-code | **Criada:** 2026-04-19 | **Atualizada:** 2026-04-19
- **Impacto:** Service não executa ao clicar em "Launch" no app Android.
- **Erro:** `Cannot execute picoclaw binary at /data/user/0/com.sipeed.picoclaw/files/libpicoclaw.so`

🔗 https://github.com/sipeed/picoclaw/issues/2590

### 🟡 Bugs de Severidade Média

#### Issue #2583 — qwen3.5 e gemma4 não funcionam com Ollama ✅ RESOLVIDA
- **Tipo:** Bug | **Domínio:** provider
- **Status:** FECHADA
- **Autor:** muhlba91 | **Criada:** 2026-04-18 | **Resolvida:** 2026-04-19
- **Comportamento:** Modelos retornam `{}` (gemma4) ou "empty response" (qwen3.5) via Ollama, apesar de outputs válidos no litellm.

🔗 https://github.com/sipeed/picoclaw/issues/2583

#### Issue #2237 — Problemas com newapi provider (飞书问答)
- **Tipo:** Bug | **Domínios:** provider, channel
- **Autor:** jimboo7339 | **Criada:** 2026-04-01 | **Atualizada:** 2026-04-19

🔗 https://github.com/sipeed/picoclaw/issues/2237

#### Issue #2310 — Histórico de conversa não persiste corretamente
- **Tipo:** Bug | **Domínio:** channel
- **Autor:** liuxiaobo007 | **Criada:** 2026-04-03 | **Atualizada:** 2026-04-19
- **Sintomas:** Após fechar/abrir página, apenas 1-2 mensagens são exibidas. Problema também visível nos arquivos de sessão em `~/.picoclaw/workspace/session/`.

🔗 https://github.com/sipeed/picoclaw/issues/2310

---

### Resumo de Bugs por Domínio

| Domínio | Bugs Abertos | Bugs Fechados (24h) |
|---------|--------------|---------------------|
| provider | 4 | 1 |
| build | 1 | 0 |
| channel | 2 | 0 |
| **Total** | **7** | **1** |

---

## 6. Pedidos de Features e Sinais de Roadmap

### ✨ Enhancements Prioritários

#### Feature #2217 — Dashboard de consumo de tokens (WebUI)
- **Autor:** MaoJianwei | **Domínio:** channel
- **Comentários:** 2 | **Atualizada:** 2026-04-19
- **Proposta:** Adicionar painel de estatísticas de consumo de tokens na interface web.

🔗 https://github.com/sipeed/picoclaw/issues/2217

#### Feature #2216 — Exibir thinking content na WebUI
- **Autor:** MaoJianwei | **Domínio:** channel
- **Comentários:** 2 | **Atualizada:** 2026-04-19
- **Proposta:** Suporte para exibir o conteúdo de "thinking" quando modelos emitem essa saída.

🔗 https://github.com/sipeed/picoclaw/issues/2216

#### Feature #2321 — Provider-Level Model Configuration
- **Autor:** redfox1999 | **Domínios:** provider, config
- **Comentários:** 2 | **Atualizada:** 2026-04-19
- **Proposta:** Refatorar estrutura de configuração para gerenciamento em nível de provider, eliminando redundância quando usuários têm múltiplos modelos do mesmo provedor.

🔗 https://github.com/sipeed/picoclaw/issues/2321

#### Feature #2261 — Zalo Chat Channel Provider
- **Autor:** kreazyme | **Domínio:** channel
- **Comentários:** 2 | **Atualizada:** 2026-04-19
- **Proposta:** Adicionar integração com Zalo, mensageiro popular no Vietnã.

🔗 https://github.com/sipeed/picoclaw/issues/2261

---

### 📊 Distribuição de Issues por Tipo

```
enhancement (channel):     ████████████ 3
enhancement (provider):    ████         2
bug (provider):            ████████     4
bug (channel):             ████         2
bug (build):               ██           1
roadmap:                   ██           1
```

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Categoria | Descrição | Severidade |
|-----------|-----------|------------|
| **Credenciais** | Providers falham silenciosamente ao ignorar API keys (openai_compat) | 🔴 Crítica |
| **Persistência** | Histórico de conversas não persiste entre sessões | 🟡 Média |
| **Mobile** | App Android não inicia o serviço corretamente | 🟡 Média |
| **Chat History** | Usuários não conseguem consultar conversas passadas para demonstração | 🟡 Média |
| **Fornecedores** | Autenticação com DeepSeek e Ollama apresenta problemas recorrentes | 🟡 Média |

### Cenários de Uso Reportados

1. **Uso Corporativo:** Usuários solicitam multi-usuário e whitelisting de skills (#2313)
2. **Mobile-first:** Demanda por automação Android (#292) e app funcional (#2590)
3. **Custo Otimização:** Interesse em failover automático para provedores gratuitos (#2591)
4. **Análise de Uso:** Necessidade de dashboards de consumo (#2217)

### Tendência de Satisfação

| Aspecto | Status |
|---------|--------|
| Funcionalidade Core | ✅ Estável |
| Provedores Alternativos | ⚠️ Problemas recorrentes |
| Interface Web | 🟡 Em melhoria contínua |
| Mobile | ⚠️ Problemas críticos |
| Documentação | ℹ️ CLA issue levantada (#2506) |

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Esperando Feedback

| # | Título | Criada | Atualizada | Dias Inativa | Prioridade |
|---|--------|--------|------------|--------------|------------|
| #2321 | Provider-Level Model Config | 2026-04-04 | 2026-04-19 | 16 dias | Medium |
| #2237 | newapi provider issues | 2026-04-01 | 2026-04-19 | 19 dias | Medium |
| #2261 | Zalo Chat Channel | 2026-04-02 | 2026-04-19 | 18 dias | Low |
| #2310 | Chat history persistence | 2026-04-03 | 2026-04-19 | 17 dias | Medium |

### Items Críticos Pendentes

1. **#2578** — openai_compat Authorization header (crítico, aguardando triagem)
2. **#2584** — DeepSeek 401 (crítico, aguardando investigação)
3. **#2590** — Android service launch (crítico, reportado hoje)

### PRs em Review Há >7 dias

| PR | Título | Criado | Status |
|----|--------|--------|--------|
| #2313 | Multi-User & Security | 2026-04-03 | Em review |

---

## Métricas Resumidas (24h)

| Métrica | Valor |
|---------|-------|
| Issues abertas | 11 |
| Issues fechadas | 2 |
| PRs abertos | 8 |
| PRs merged/fechados | 1 |
| Releases | 1 (nightly) |
| Bugs críticos | 3 |
| Features propostas | 5 |

---

**Relatório gerado em:** 2026-04-20  
**Fonte:** github.com/sipeed/picoclaw

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-04-20

---

## 1. Panorama do Dia

O projeto IronClaw mantém um **nível de atividade intenso** com 50 PRs e 10 issues atualizadas nas últimas 24h. A atividade de PRs é particularmente robusta (31 abertas, 19 merged/fechadas), indicando uma cadência de desenvolvimento acelerada. Não houve lançamentos hoje, mas múltiplos PRs de staging promotion indicam que changesets significativos estão sendo preparados para promotion. A saúde geral é positiva, com destaque para avanços em Engine v2 e design system do gateway, aunque um bug de alta severidade (#2676) sobre vazamento de URLs em WASM requer atenção imediata.

---

## 2. Lançamentos

**Nenhum lançamento hoje (2026-04-20).**

O projeto não publicou novas releases nas últimas 24h. Isso é consistente com o padrão observado de promoção de changesets via staging branches (`staging-promote/*`) antes de releases formais.

---

## 3. Progresso do Projeto

### PRs Merged/Closed Hoje (Destaques)

| PR | Título | Escopo | Contribuidor |
|----|--------|--------|--------------|
| [#2549](https://github.com/nearai/ironclaw/pull/2549) | `mission_get` action para retrieving mission results | engine | serrrfirat (core) |
| [#2694](https://github.com/nearai/ironclaw/pull/2694) | Clarify ENGINE_V2 opt-in startup | docs | serrrfirat (core) |
| [#1019](https://github.com/nearai/ironclaw/pull/1019) | Add Cognitive Guardian for proactive memory discipline | agent | joe-rlo (new) |
| [#936](https://github.com/nearai/ironclaw/pull/936) | Add local `open_file` workflow com persistent approvals | tool/builtin | G7CNF (experienced) |
| [#2576](https://github.com/nearai/ironclaw/pull/2576) | Fix CI target promotion PR for Claude review | ci | serrrfirat (core) |
| [#1540](https://github.com/nearai/ironclaw/pull/1540) | Fix Slack thread participation across replies | channel/wasm | G7CNF (core) |

**Avanços-chave:**
- **Engine v2**: A adição do `mission_get` action (#2549) permite ao LLM recuperar resultados de missions, status e histórico — melhoria significativa de UX.
- **Docs**: Documentação clara sobre ENGINE_V2 opt-in (#2694) melhora onboarding.
- **Cognitive Guardian** (#1019): Nova camada comportamental de 706 linhas para checkpointing proativo e disciplina de memória.
- **Slack integration** (#1540): Fix #1404 — bot agora aceita replies em threads após join inicial, eliminando necessidade de @mention em cada follow-up.
- **Tool improvements** (#936): `open_file` workflow local com persistent approvals.

---

## 4. Temas Quentes da Comunidade

### Issues/PRs com Mais Engajamento

| Issue/PR | Título | Tipo | 👍 | Comentários |
|----------|--------|------|----|-------------|
| [#1350](https://github.com/nearai/ironclaw/issues/1350) | Support hot-reload of LLM provider without restart | enhancement | 2 | ✅ Closed |
| [#2599](https://github.com/nearai/ironclaw/issues/2599) | Epic: Enforce gateway feature boundaries | Epic | 1 | 2 |
| [#2668](https://github.com/nearai/ironclaw/pull/2668) | fix(llm): classify negative max_tokens overflow as context error | fix | 0 | Open |

**Análise de Demandas:**

1. **Hot-reload de LLM (#1350) — CLOSED**: Usuários esperam que mudanças de provider/model via UI sejam imediatas, mas requieren restart. Demanda validada com 2 👍. Solução em progresso.

2. **Epic de Gateway Boundaries (#2599)**: Refatoração do web gateway em feature slices com CI guardrails. Epic staged demonstra priorização de arch tectural improvements.

3. **Secrets Management (#2600) — CLOSED**: Issue raised pelo usuário ek775 destaca documentação insuficiente sobre gerenciamento de secrets. Concern válido que reflete curva de aprendizado para novos contributors.

---

## 5. Bugs e Estabilidade

### Bugs Reportados (Por Severidade)

| Severidade | Issue | Título | Status |
|------------|-------|--------|--------|
| **HIGH** | [#2676](https://github.com/nearai/ironclaw/issues/2676) | WASM URL leak scan runs on post-injection URL | OPEN |
| MEDIUM | [#2624](https://github.com/nearai/ironclaw/issues/2624) | Telegram E2E test fails with 401 bot token validation | CLOSED |
| MEDIUM | [#1947](https://github.com/nearai/ironclaw/issues/1947) | MCP UTF-8 truncation panic (multi-byte characters) | CLOSED |
| MEDIUM | [#1840](https://github.com/nearai/ironclaw/issues/1840) | `--cli-only` starts webhook server, ignores HTTP_HOST/HTTP_PORT | CLOSED |

**Análise:**

- **#2676 (HIGH)**: Bug crítico de security — URL leak scan está rodando em URL pós-injeção ao invés da URL raw do WASM. Afeta tanto channel quanto tool paths. Follow-up de #1377. Requer correção urgente.

- **#2624 (CLOSED)**: Telegram E2E ainda falhava com 401. Regressão já foi identificada em conjunto com browser/bootstrap fixes.

- **#1947 (CLOSED)**: Crash ao usar `ironclaw mcp test` com UTF-8 multi-byte em tool descriptions. Bug de panic por char boundary.

- **#1840 (CLOSED)**: `--cli-only` paradoxalmente inicia webhook server. Implicação security (exposição de porta 0.0.0.0:8080).

**Tendencia**: 3 de 4 bugs estão fechados, indicando ciclo de bug-fixing ativo. Bug #2676 é o mais crítico em aberto.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features em Progresso

| Issue/PR | Título | Escopo | Status |
|----------|--------|--------|--------|
| [#2360](https://github.com/nearai/ironclaw/issues/2360) | Add built-in browser tool with chromiumoxide CDP | tool/builtin | OPEN |
| [#2599](https://github.com/nearai/ironclaw/issues/2599) | Epic: Enforce gateway feature boundaries | gateway | OPEN |
| [#1446](https://github.com/nearai/ironclaw/pull/1446) | feat: add Aliyun Coding Plan support | llm | OPEN |
| [#1549](https://github.com/nearai/ironclaw/pull/1549) | feat: Slack Socket Mode for NAT-friendly connectivity | channel/wasm | OPEN |
| [#2343](https://github.com/nearai/ironclaw/pull/2343) | feat(tui): dashboard panels, plan mode checklist, theme improvements | tui | OPEN |
| [#2385](https://github.com/nearai/ironclaw/pull/2385) | feat(gateway): attachment flows, v2 skill install, e2e stabilization | gateway | OPEN |
| [#2693](https://github.com/nearai/ironclaw/pull/2693) | build: slim default local feature profile | cargo | OPEN |
| [#2695](https://github.com/nearai/ironclaw/pull/2695) | feat(gateway): design system visual language | gateway | OPEN |

**Sinais de Roadmap:**

1. **Browser Tool (#2360)**: Parent de epic #2355. Planejado suporte a páginas JavaScript-rendered, formulários e clicks. Depende de browser service (#2357), profile store (#2358), e identity model (#2359).

2. **Gateway Redesign (#2599, #2689, #2695)**: Investimento significativo em design system e visual language. Design tokens baseados em OmniSwap palette. Evolução do frontend em bounded feature slices.

3. **Provider Expansion (#1446)**: Adição de suporte a Aliyun (BaiLian Coding Plan) com DashScope endpoint compatibility.

4. **Slack Socket Mode (#1549)**: Conectividade NAT-friendly via WebSocket, eliminando necessidade de tunnel/public URL.

5. **TUI Improvements (#2343)**: Dashboard com panels para token usage, tools, workspace, jobs, missions — expansão da interface local.

6. **Sandboxing (#2693)**: Slim default feature profile com TUI opt-in via `--features local-tui`. Engine v2 full sandboxing (#2667) em tracking.

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Tema | Fonte | Descrição |
|------|-------|-----------|
| **Secrets Management** | [#2600](https://github.com/nearai/ironclaw/issues/2600) @ek775 | Usuários novos enfrentam dificuldades com autenticação. Documentação insuficiente sobre patterns de secrets. |
| **Hot-reload LLM** | [#1350](https://github.com/nearai/ironclaw/issues/1350) | Mudanças de provider/model via UI não tomam efeito sem restart — expectativa de imediatidade não atendida. |
| **CLI-only Mode** | [#1840](https://github.com/nearai/ironclaw/issues/1840) | Comportamento inesperado (`--cli-only` iniciando webhook server) surpreende usuários e tem impact security. |

### Feedback Positivo (Implícito)

- Ativa comunidade de contributors (14 PRs abertas de contributors externos/new)
- Ciclo de bug-fixing responsivo (3 bugs closed em 24h)
- Evolução constante de features (TUI, browser tool, design system)

---

## 8. Backlog que Merece Atenção

### Issues/PRs Sem Resposta ou Estagnadas

| Item | Título | Criado | Atualizado | Estado | Atenção |
|------|--------|--------|-----------|--------|---------|
| [#2676](https://github.com/nearai/ironclaw/issues/2676) | WASM URL leak scan (HIGH risk) | 2026-04-19 | 2026-04-19 | OPEN | ⚠️ URGENT |
| [#2360](https://github.com/nearai/ironclaw/issues/2360) | Browser tool | 2026-04-12 | 2026-04-19 | OPEN | Dependencies (#2357-2359) pendentes |
| [#1446](https://github.com/nearai/ironclaw/pull/1446) | Aliyun support | 2026-03-20 | 2026-04-19 | OPEN | Size XL, 30+ dias em review |
| [#1549](https://github.com/nearai/ironclaw/pull/1549) | Slack Socket Mode | 2026-03-21 | 2026-04-19 | OPEN | Size XL, 29+ dias em review |

**Recomendação Prioritária:**

1. **#2676**: Bug de security requiere review e merge prioritário. Affecta leak scan em paths WASM.
2. **#2360**: Dependências (#2357, #2358, #2359) devem ser adressadas para desbloquear browser tool feature.
3. **#1446** e **#1549**: Ambos size XL com ~30 dias sem merge. Avaliar se blockers existem ou se podem ser priorizados.

---

## Métricas de Saúde do Projeto (2026-04-20)

| Métrica | Valor | Tendência |
|---------|-------|-----------|
| Issues ativas (24h) | 10 | Neutra |
| PRs ativas (24h) | 50 | ✅ Alta |
| Taxa de closure (issues) | 50% | ✅ Boa |
| Taxa de closure (PRs) | 38% | ✅ Boa |
| Bugs em aberto | 1 (HIGH) | ⚠️ Requer atenção |
| Releases (24h) | 0 | — |
| Contributors ativos (PRs) | 14+ | ✅ Diversificado |

---

*Relatório gerado automaticamente com base em dados GitHub de 2026-04-20.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do Projeto CoPaw — 2026-04-20

---

## 1. Panorama do Dia

O projeto apresenta **alta atividade comunitária** com 21 issues e 14 PRs atualizados nas últimas 24h, sem novas releases. O estado é de desenvolvimento ativo com 17 issues abertas, 4 fechadas, e nenhum PR merged — indicando que a pipeline de code review está backlogged. A base de usuários reporta bugs críticos de estabilidade (crashes, erros de serialização) simultaneamente a demandas por melhorias de UX. A distribuição de issues revela que bugs representan ~45% das preocupações activas, enquanto enhancements~35%.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.** O projeto permanece na versão 1.1.2 conforme indicado nas issues dos usuários ([#3581](https://github.com/agentscope-ai/QwenPaw/issues/3581), [#3578](https://github.com/agentscope-ai/QwenPaw/issues/3578), [#3562](https://github.com/agentscope-ai/QwenPaw/issues/3562)).

---

## 3. Progresso do Projeto

**PRs abertos noteworthy (14 total, nenhum merged):**

| PR | Autor | Tema | Impacto |
|---|---|---|---|
| [#3585](https://github.com/agentscope-ai/QwenPaw/pull/3585) | pxdawn | Telegram typing indicator durante tool execution | UX canais (first-time-contributor) |
| [#3583](https://github.com/agentscope-ai/QwenPaw/pull/3583) | Leirunlin | Fix `require_bins` error handling para SKILL.md | Bug fix — correlaciona com [#3568](https://github.com/agentscope-ai/QwenPaw/issues/3568) |
| [#3579](https://github.com/agentscope-ai/QwenPaw/pull/3579) | seoeaa | Per-agent LLM model assignment no Settings UI | Feature — UI de configuração avançada |
| [#3558](https://github.com/agentscope-ai/QwenPaw/pull/3558) | Leirunlin | Suporte bilíngue (EN/ZH) para builtin skills | i18n — refatoração de estrutura de diretórios |
| [#3553](https://github.com/agentscope-ai/QwenPaw/pull/3553) | Prince-liu | Fix SSE crash em surrogate text malformed | Bug fix — correlaciona com [#3552](https://github.com/agentscope-ai/QwenPaw/issues/3552) |
| [#3565](https://github.com/agentscope-ai/QwenPaw/pull/3565) | zhenai1314521 | AgentMemory como memory_manager_backend | Feature — sistema de memória aprimorado |

**Observação:** A ausência de PRs merged indica possível bottleneck no review. Os PRs [#3583](https://github.com/agentscope-ai/QwenPaw/pull/3583) e [#3553](https://github.com/agentscope-ai/QwenPaw/pull/3553) resolvem bugs críticos reportados e merecem atenção prioritária.

---

## 4. Temas Quentes da Comunidade

**Issues com maior engajamento (comentários):**

1. **[#3568](https://github.com/agentscope-ai/QwenPaw/issues/3568)** — BUG: Skill com YAML inválido crasha QwenPaw completamente — **3 comentários**
   - *Análise:* Bug severo que torna o bot non-responsivo para TODAS as mensagens quando uma skill malformada é carregada. Usuário reportou impacto sistêmico.

2. **[#3573](https://github.com/agentscope-ai/QwenPaw/issues/3573)** — BUG: cron task com `channel=weixin` gera KeyError — **3 comentários**
   - *Análise:* Problema de integração de canal WeChat em tarefas agendadas. Affecta usuários de automação.

3. **[#3560](https://github.com/agentscope-ai/QwenPaw/issues/3560)** — BUG: custom llama.cpp backend com parsing error em tool calls — **3 comentários** (CLOSED)
   - *Análise:* Resolvido, indica suporte ativo a modelos locais customizados.

4. **[#3552](https://github.com/agentscope-ai/QwenPaw/issues/3552)** — BUG: Console crasha com Unicode surrogate malformed — **3 comentários**
   - *Análise:* Bug de serialização SSE no frontend. PR [#3553](https://github.com/agentscope-ai/QwenPaw/pull/3553) já em aberto como fix.

5. **[#1874](https://github.com/agentscope-ai/QwenPaw/issues/1874)** — ENHANCEMENT: Telegram typing status durante tool execution — **2 comentários**
   - *Análise:* Issue antiga (criada em 2026-03-19) sendo endereçada pelo PR [#3585](https://github.com/agentscope-ai/QwenPaw/pull/3585).

---

## 5. Bugs e Estabilidade

### Críticos (sistema non-funcional)
| Issue | Descrição | Severidade | Links |
|---|---|---|---|
| [#3568](https://github.com/agentscope-ai/QwenPaw/issues/3568) | YAML inválido em skill crasha QwenPaw completamente | 🔴 Crítica | PR fix: [#3583](https://github.com/agentscope-ai/QwenPaw/pull/3583) |
| [#3578](https://github.com/agentscope-ai/QwenPaw/issues/3578) | WebUI mostra apenas tela branca | 🔴 Crítica | Recentemente criada |

### Altos (funcionalidade quebrada)
| Issue | Descrição | Severidade |
|---|---|---|
| [#3581](https://github.com/agentscope-ai/QwenPaw/issues/3581) | `send_file_to_user` falha com full-width punctuation no Windows | 🟠 Alta |
| [#3573](https://github.com/agentscope-ai/QwenPaw/issues/3573) | Cron task com `channel=weixin` KeyError | 🟠 Alta |
| [#3552](https://github.com/agentscope-ai/QwenPaw/issues/3552) | Console crasha com Unicode surrogates | 🟠 Alta |

### Médios (UX/UI)
| Issue | Descrição | Severidade |
|---|---|---|
| [#3546](https://github.com/agentscope-ai/QwenPaw/issues/3546) | Dark mode:文字重叠 na sidebar | 🟡 Média |
| [#3582](https://github.com/agentscope-ai/QwenPaw/issues/3582) | Localhost auth bypass não funciona (401 em 127.0.0.1) | 🟡 Média |
| [#3566](https://github.com/agentscope-ai/QwenPaw/issues/3566) | `view_image` tool habilitado mas não registrado | 🟡 Média |

**Síntese:** 7 bugs reportados nas últimas 24h, 2 críticos. Padrão identificável: problemas de serialização/encoding (Unicode, full-width chars) indicam fragilidade no tratamento de caracteres não-ASCII.

---

## 6. Pedidos de Features e Sinais de Roadmap

**Features mais solicitadas:**

1. **UI/UX Enhancements:**
   - [#3572](https://github.com/agentscope-ai/QwenPaw/issues/3572) — Code blocks com collapse functionality
   - [#3571](https://github.com/agentscope-ai/QwenPaw/issues/3571) — Opção para hide top bar
   - [#3570](https://github.com/agentscope-ai/QwenPaw/issues/3570) — Pagination na lista "All Chats"
   - [#3378](https://github.com/agentscope-ai/QwenPaw/issues/3378) — Deep link de session list para chat (criada em 2026-04-14, ainda open)

2. **Funcionalidade Core:**
   - [#3563](https://github.com/agentscope-ai/QwenPaw/issues/3563) — Visualização de usage context para decisão de compact
   - [#3569](https://github.com/agentscope-ai/QwenPaw/issues/3569) — Cron task: histórico de execuções + edição de parâmetros
   - [#3565](https://github.com/agentscope-ai/QwenPaw/pull/3565) — AgentMemory como memory backend (PR open)

3. **Infraestrutura:**
   - [#3576](https://github.com/agentscope-ai/QwenPaw/issues/3576) — Remover fonts.googleapis.com (acesso difícil na China)
   - [#3579](https://github.com/agentscope-ai/QwenPaw/pull/3579) — Per-agent model assignment (PR open)

**Sinais de roadmap:** A direção parece ser (1) resiliência de stability/crashes, (2) granular control UI (per-agent models, routing), (3) experiência de chat melhorada (code collapse, timestamps).

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais

**1. Estabilidade em Produção**
> "When a skill with invalid YAML format in SKILL.md is loaded, QwenPaw crashes completely and becomes unresponsive to ALL messages"

Usuários experimentam crashes completos que impedem uso. Impacto: confiança no deploy.

**2. Problemas de Encoding/Plataforma Windows**
> "send_file_to_user fails with ValueError when file name contains full-width punctuation on Windows"
> "UnicodeEncodeError: 'utf-8' codec can't encode character '\ud83d' ... surrogates not allowed"

Padrão recorrente de problemas com caracteres não-ASCII, especialmente no Windows. Usuários de mercado chinês são impactados desproporcionalmente.

**3. UX de Canais**
> "Telegram 频道在 bot 执行工具调用期间，'正在输入...'状态会消失"

Usuários de Telegram reportam lack de feedback visual durante execuções longas.

### Cenários de Uso Observados
- **Automação de cron jobs** com múltiplos canais (WeChat, Telegram)
- **Uso de modelos locais** (ollama, llama.cpp) como fallback
- **Skills de automação de browser** (browser_visible skill)
- **Deploy como desktop app** (QwenPaw Desktop)

### Satisfação/Insatisfação
- **Alta demanda** por controls granulares (per-agent routing)
- **Frustração** com bugs de encoding e auth bypass não funcional
- **Interesse** em features de i18n (built-in skills bilíngues via PR [#3558](https://github.com/agentscope-ai/QwenPaw/pull/3558))

---

## 8. Backlog que Merece Atenção

### Issues sem resposta há >7 dias
| Issue | Criada | Atualizada | Status | Prioridade |
|---|---|---|---|---|
| [#3378](https://github.com/agentscope-ai/QwenPaw/issues/3378) — Deep link session→chat | 2026-04-14 | 2026-04-19 | OPEN | 🟡 Média |
| [#1874](https://github.com/agentscope-ai/QwenPaw/issues/1874) — Telegram typing status | 2026-03-19 | 2026-04-19 | OPEN | 🟡 Média (PR #3585 addressing) |
| [#2432](https://github.com/agentscope-ai/QwenPaw/pull/2432) — Display sender identity + timestamps | 2026-03-27 | 2026-04-19 | OPEN (PR) | 🟡 Média |
| [#3452](https://github.com/agentscope-ai/QwenPaw/pull/3452) — LLM routing UI | 2026-04-15 | 2026-04-19 | OPEN (PR) | 🟠 Alta |

### PRs com potential stale risk
- [#2432](https://github.com/agentscope-ai/QwenPaw/pull/2432) — 23 dias open, focado em UX de chat history
- [#3452](https://github.com/agentscope-ai/QwenPaw/pull/3452) — 5 dias open, routing UI crítico
- [#3559](https://github.com/agentscope-ai/QwenPaw/pull/3559) — Setup de testes Vitest (infraestrutura técnica)

### Recomendação de Prioridade
1. **Review + merge** dos PRs de bug fix ([#3583](https://github.com/agentscope-ai/QwenPaw/pull/3583), [#3553](https://github.com/agentscope-ai/QwenPaw/pull/3553)) — resolvem crashes
2. **Triagem** do issue [#3568](https://github.com/agentscope-ai/QwenPaw/issues/3568) e validação do PR fix [#3583](https://github.com/agentscope-ai/QwenPaw/pull/3583)
3. **Resolução** de problemas de encoding Windows (issues [#3581](https://github.com/agentscope-ai/QwenPaw/issues/3581), [#3552](https://github.com/agentscope-ai/QwenPaw/issues/3552))
4. **Feedback** nos PRs de routing ([#3452](https://github.com/agentscope-ai/QwenPaw/pull/3452), [#3550](https://github.com/agentscope-ai/QwenPaw/pull/3550)) — feature prometida aos usuários

---

## Métricas de Saúde do Projeto

| Indicador | Valor | Observação |
|---|---|---|
| Issues ativas (24h) | 21 | Alta atividade |
| PRs abertos | 14 | Nenhum merged |
| Releases (7d) | 0 | Nenhuma versão nova |
| Bug ratio | ~45% das issues | Alto — foco em estabilidade necessário |
| Enhancement ratio | ~35% das issues | Boa evolução de features |
| PRs first-time contributors | 3 | Comunidade ativa |
| Issues críticas abertas | 2 | Requerem atenção imediata |

**Veredicto:** Projeto em estado de **desenvolvimento ativo com debt técnico de estabilidade**. O volume de bugs críticos (crashes) contrasta com a ausência de releases, sugerindo que a versão atual (1.1.2) possui regressões não endereçadas em produção. A comunidade está engaged, mas o pipeline de review/PR merge precisa de acceleration.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-04-20

---

## 1. Panorama do Dia

O projeto ZeroClaw demonstra atividade intensa e saudável na data de hoje, com 36 issues e 29 PRs atualizados nas últimas 24h. A release **v0.7.3** marca a maior reformulação estrutural da história do projeto — a migração completa para um workspace Cargo com múltiplas crates — sinalizando um marco de maturidade técnica. O destaque comunitário vai para o contribuidor **perlowja**, responsável por 5+ PRs e issues relacionados à execução nativa, sandboxing e detecção de memcg, indicando foco em robustez para ambientes Raspberry Pi e edge computing. A taxa de merge de 9 PRs em 24h evidencia um time de maintainers ativo.

---

## 2. Lançamentos

### 🏷️ v0.7.3 (Stable)
**Status:** Released em 2026-04-19

Esta release representa a **maior reformulação estrutural** da história do ZeroClaw:
- ✅ Migração completa para **Cargo workspace** com múltiplas crates focadas
- ✅ Novo schema de configuração com **migration live**
- ✅ Breaking changes esperados para quem utiliza configurações customizadas

**⚠️ Nota de Migração:** Usuários que possuem configurações customizadas em `zeroclaw.toml` devem consultar o guia de migração do schema antes de atualizar. A estrutura do workspace agora modulariza componentes que antes viviam em `src/`.

**Links:** [Release v0.7.3](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.7.3) | [Changelog](https://github.com/zeroclaw-labs/zeroclaw/blob/master/CHANGELOG-next.md)

### 🏷️ v0.7.3-beta.1051 & v0.7.1-beta.1049
Releases beta contínuas para validação pré-stable.

---

## 3. Progresso do Projeto

Os seguintes PRs foram **merged/fechados** nas últimas 24h, representando avanços concretos:

| PR | Título | Impacto |
|---|---|---|
| [#5893](https://github.com/zeroclaw-labs/zeroclaw/pull/5893) | chore: bump version to 0.7.3 and update release changelog | Finalização da release v0.7.3 |
| [#5894](https://github.com/zeroclaw-labs/zeroclaw/pull/5894) | fix(ci): replace RELEASE_TOKEN with GITHUB_TOKEN | **Segurança CI** — elimina uso de PAT desnecessário |
| [#5898](https://github.com/zeroclaw-labs/zeroclaw/pull/5898) | docs(skills): add Python skills quickstart | **DX** — cobre padrões native e custom-image |
| [#5879](https://github.com/zeroclaw-labs/zeroclaw/pull/5879) | fix(docker): copy all workspace crate manifests | **Build fix** — resolve falha no Dockerfile após workspace split |
| [#5606](https://github.com/zeroclaw-labs/zeroclaw/pull/5606) | fix(agent): preserve streamed reasoning content for tool replay | **Estabilidade** — corrige rejeição 400 em provedores Kimi |
| [#5901](https://github.com/zeroclaw-labs/zeroclaw/pull/5901) | feat(aethernet): BitChat BLE mesh + WiFi Direct | **Experimental** — comunicação offline agente-a-agente |
| [#5795](https://github.com/zeroclaw-labs/zeroclaw/pull/5795) | fix(channel): XML tool_result tags leak into channel responses | **UX** — limpa raw tags de responses |

**Destaque de infraestrutura:** O PR [#5894](https://github.com/zeroclaw-labs/zeroclaw/pull/5894) elimina o uso de Personal Access Token em workflows de release, reforçando práticas de segurança.

---

## 4. Temas Quentes da Comunidade

### 🔥 Issues com maior engajamento (comentários + reações)

| Issue | Título | Comentários | 👍 | Categoria |
|---|---|---|---|---|
| [#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) | Web dashboard not available | 17 | 0 | **Bug (S1)** |
| [#5719](https://github.com/zeroclaw-labs/zeroclaw/issues/5719) | runtime.kind="native" não bypass Docker | 10 | 0 | **Bug (High)** |
| [#5720](https://github.com/zeroclaw-labs/zeroclaw/issues/5720) | PYTHONPATH inline env var syntax broken | 6 | 0 | Bug |
| [#5509](https://github.com/zeroclaw-labs/zeroclaw/issues/5509) | Voice message transcription (Telegram) | 6 | 0 | Feature |
| [#5722](https://github.com/zeroclaw-labs/zeroclaw/issues/5722) | Default shell sandbox blocks Python skills | 5 | 0 | Bug (High) |
| [#2767](https://github.com/zeroclaw-labs/zeroclaw/issues/2767) | Multi-Agent Routing | 4 | **7** | **Feature (Long-standing)** |
| [#5890](https://github.com/zeroclaw-labs/zeroclaw/issues/5890) | RFC: Multi-agent UX flow | 2 | 0 | RFC/D Design |

### Análise de Demandas

**Tema central #1: Execução Nativa & Sandboxing (perlowja)**
O contribuidor **perlowja** está liderando uma linha de issues sobre execução nativa (`runtime.kind = "native"`) que não respeita configurações de sandbox Docker. Seus PRs ([#5906](https://github.com/zeroclaw-labs/zeroclaw/pull/5906), [#5905](https://github.com/zeroclaw-labs/zeroclaw/pull/5905), [#5904](https://github.com/zeroclaw-labs/zeroclaw/pull/5904)) indicam que:
- A detecção automática de sandbox ignora configurações explícitas
- O Docker sandbox não monta workspaces, quebrando scripts com paths absolutos
- Usuários de Raspberry Pi com kernels sem memcg não recebem warnings

**Tema central #2: Multi-Agent Routing (#2767)**
Feature request de **março de 2026** com 7 👍 — indica demanda madura da comunidade por isolamento multi-agente. O RFC [#5890](https://github.com/zeroclaw-labs/zeroclaw/issues/5890) publicado hoje inicia formalmente o processo de design com período de discussão de 7 dias.

**Tema central #3: Web Dashboard Inoperante (#4866)**
Com 17 comentários, este é o bug de maior atenção. Usuários reportam que tanto a web UI quanto o app desktop Tauri exibem "Web dashboard not available", sugerindo problema no build pipeline ou assets não incluídos na release.

---

## 5. Bugs e Estabilidade

### 🛑 Severidade S0 (Data loss / Security)

| Issue | Título | Status | Channels Afetados |
|---|---|---|---|
| [#5672](https://github.com/zeroclaw-labs/zeroclaw/issues/5672) | Feishu responds even when mention_only enabled | OPEN | Feishu |
| [#5415](https://github.com/zeroclaw-labs/zeroclaw/issues/5415) | Context spillage from chat to schedule | OPEN | Discord |

**⚠️ Alerta:** O issue [#5415](https://github.com/zeroclaw-labs/zeroclaw/issues/5415) descreve vazamento de contexto entre canais — memória de chat interfere em scheduled tasks. Impacto potencial: segurança e privacidade de dados.

### 🔴 Severidade S1 (Workflow Blocked)

| Issue | Título | Status | Detalhes |
|---|---|---|---|
| [#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) | Web dashboard not available | CLOSED | Tauri + Web UI |
| [#5719](https://github.com/zeroclaw-labs/zeroclaw/issues/5719) | runtime.kind="native" não bypass Docker | OPEN | Runtime sandbox |
| [#5813](https://github.com/zeroclaw-labs/zeroclaw/issues/5813) | Compaction orphans tool_result (Signal) | OPEN | Signal |

### 🟡 Severidade S2 (Degraded Behavior)

| Issue | Título | Status |
|---|---|---|
| [#5844](https://github.com/zeroclaw-labs/zeroclaw/issues/5844) | Too much emphasis on memory in cron jobs | OPEN |
| [#5818](https://github.com/zeroclaw-labs/zeroclaw/issues/5818) | Telegram photo flow sends image markers to non-vision provider | OPEN |

### 🔒 Security Advisories

**RUSTSEC-0049/0098/0099/0134:** O issue [#5869](https://github.com/zeroclaw-labs/zeroclaw/issues/5869) reporta que `rumqttc v0.25.1` puxa versões vulneráveis do `rustls-webpki`. Maintainers devem monitorar atualização do crate MQTT.

---

## 6. Pedidos de Features e Sinais de Roadmap

### ✨ Novas Features (últimas 24h)

| Issue | Título | Proponente | Sinal Estratégico |
|---|---|---|---|
| [#5908](https://github.com/zeroclaw-labs/zeroclaw/issues/5908) | GitHub Actions CI/CD Container Builds | HauptJ | **CI/CD Automation** |
| [#5907](https://github.com/zeroclaw-labs/zeroclaw/issues/5907) | LSP support | tidux | **Developer Experience** |
| [#5601](https://github.com/zeroclaw-labs/zeroclaw/issues/5601) | OAuth for Ollama Cloud, z.ai, Kimi, MiniMax | dolsol3 | **Provider Expansion** |
| [#4352](https://github.com/zeroclaw-labs/zeroclaw/issues/4352) | GitHub integration tool | vasanth53 | **Ecosystem Integration** |

### 📋 Sinais de Roadmap

**FND-004 Phase 1 Completos (v0.7.2):**
- [#5875](https://github.com/zeroclaw-labs/zeroclaw/issues/5875) — Daily advisory scan workflow (A ser implementado)
- [#5876](https://github.com/zeroclaw-labs/zeroclaw/issues/5876) — CI action-pinning enforcement check
- [#5871](https://github.com/zeroclaw-labs/zeroclaw/issues/5871) — Structured Release Pipeline (v0.7.3)

**Fase 3 roadmap (#5579)**: Automação de release com workflow reutilizável, alinhado ao modelo de distribuição. Prioridade: **alta** para maturity do projeto.

---

## 7. Resumo de Feedback dos Usuários

### 😤 Dores Real Reported

**1. Execução nativa em Raspberry Pi/OS:**
> *"I am developing InvestorClaw — a FINOS CDM 5.x-compliant portfolio analysis skill"*
> — perlowja destaca que ambientes edge (Raspberry Pi) com Docker instalado não conseguem bypassar sandbox mesmo com `runtime.kind = "native"`.

**2. Python Skills em sandbox:**
> *"Default shell sandbox configuration blocks all realistic Python skill patterns"*
> — O sandbox default é muito restritivo para padrões reais de skill Python (pandas, requests, etc.).

**3. Build docs não encontrados:**
> *"Build it with: cd web && npm ci && npm run build'"*
> — Usuários esperam que o dashboard web "funcione out-of-the-box" sem build manual.

### 😊 Cenários Positivos

- **Integração Mattermost (#5902):** Nova implementação WebSocket multi-channel demonstrando expansão de canais
- **BitChat BLE (#5901):** Funcionalidade offline mesh representa inovação em comunicação agente-a-agente
- **Python Skills Quickstart (#5898):** Documentação cobre padrões native e custom-image — DX melhorado

### 📊 Indicadores de Satisfação

- 3 releases em 24h indica pipeline de release saudável
- 7 👍 na issue Multi-Agent Routing sugere demanda madura
- Atividade comunitária intensa (36 issues, 29 PRs em 24h)

---

## 8. Backlog que Merece Atenção

### 🔴 Issues Sem Resposta / Stale

| Issue | Título | Idade | Prioridade |
|---|---|---|---|
| [#2767](https://github.com/zeroclaw-labs/zeroclaw/issues/2767) | Multi-Agent Routing | **~46 dias** | ⭐ Alta |
| [#3359](https://github.com/zeroclaw-labs/zeroclaw/issues/3359) | Official Docker container does not contain a shell | ~38 dias | 🟡 Média |
| [#4352](https://github.com/zeroclaw-labs/zeroclaw/issues/4352) | GitHub integration tool | ~28 dias | 🟡 Média |
| [#4704](https://github.com/zeroclaw-labs/zeroclaw/issues/4704) | Raspberry Pi deployment guide | ~26 dias | 🟡 Média |

### 🟡 Issues em Progress com Maintainer Attention

| Issue | Título | Status | Próximos Passos |
|---|---|---|---|
| [#5632](https://github.com/zeroclaw-labs/zeroclaw/issues/5632) | skip user autosave keys in memory context | Needs-maintainer-review | Bloqueia memory bloat |
| [#5606](https://github.com/zeroclaw-labs/zeroclaw/pull/5606) | preserve streamed reasoning for tool replay | Needs-maintainer-review | Compatibilidade Kimi |
| [#5853](https://github.com/zeroclaw-labs/zeroclaw/pull/5853) | self-heal orphaned tool_result on load | Needs-maintainer-review | Estabilidade Signal |

### ⭐ Recomendação de Priorização

1. **Segurança:** RUSTSEC advisories ([#5869](https://github.com/zeroclaw-labs/zeroclaw/issues/5869)) — atualização de `rumqttc`
2. **UX Crítico:** Web dashboard ([#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866)) — fechar loop de build assets
3. **DX:** Python skills sandboxing — seguir PRs de perlowja ([#5904](https://github.com/zeroclaw-labs/zeroclaw/pull/5904), [#5905](https://github.com/zeroclaw-labs/zeroclaw/pull/5905), [#5906](https://github.com/zeroclaw-labs/zeroclaw/pull/5906))
4. **Comunitário:** Multi-agent RFC ([#5890](https://github.com/zeroclaw-labs/zeroclaw/issues/5890)) — participar da discussão

---

## Métricas Consolidada — 2026-04-20

| Indicador | Valor | Tendência |
|---|---|---|
| Issues ativas (24h) | 31 | 🔵 Estável |
| PRs abertos (24h) | 20 | 🟢 +5 vs média semanal |
| Releases (24h) | 3 | 🟢 Marco v0.7.3 |
| Taxa de merge | ~31% | 🟡 Dentro do esperado |
| Bugs S0-S1 abertos | 5 | 🟡 Requer atenção |
| RUSTSEC advisories | 4 | 🔴 Pendente fix |

**Saúde Geral:** ✅ Projeto em fase de maturação ativa. A release v0.7.3 demonstra amadurecimento estrutural. Maintainers demonstram responsiveness em issues críticas. Área de atenção: segurança (RUSTSEC) e UX (web dashboard).

---

*Relatório gerado automaticamente com base nos dados GitHub de zeroclaw-labs/zeroclaw em 2026-04-20.*

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*