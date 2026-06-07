# Resumo diário do ecossistema de agentes de IA 2026-06-08

> Issues: 0 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-06-07 21:06 UTC

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

# Relatório Comparativo — Ecossistema Open Source de Agentes de IA

**Data de Análise:** 2026-06-08

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **saúde dinâmica com concentração de atividade** em seis projetos operacionais — IronClaw, Hermes Agent e ZeroClaw lideram em volume (50 issues/PRs cada), enquanto NanoBot e PicoClaw demonstram ciclos de desenvolvimento acelerados com múltiplos merges diários. A comunidade está polarizada entre duas abordagens: (a) **estabilização defensiva** — IronClaw e Hermes focam em segurança, hardening e blockers de produção; (b) **expansão agressiva** — PicoClaw, ZeroClaw e NanoBot adicionam providers, canais e plugins em ritmo intenso. NullClaw permanece inerte, sinalizando potencial abandono ou necessidade de reativação. O cenário indica maturidade crescente do ecossistema, com demand pull explícito por multi-agência, interoperabilidade (A2A Protocol) e otimização de custos operacionais.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | Merges | Releases | Saúde | Observação |
|--------|-------------|-----------|--------|----------|-------|------------|
| **NullClaw** | 0 | 0 | 0 | 0 | 🔴 Inativo | Sem sinal de vida |
| **NanoBot** | 7 | 19 | 4 | 0 | 🟢 Robusta | Foco em estabilidade (bwrap, sandbox) |
| **Hermes Agent** | 50 | 50 | 3 | 0 | 🟡 Estável c/ incidentes | P1 Docker crítico, 12 P2s |
| **PicoClaw** | 20 | 19 | 10 | 1 nightly | 🟢 Robusta | Ciclo acelerado (17 issues fechadas) |
| **IronClaw** | 35 | 37 | 12 | 0 | 🟡 Reborn v2 em progresso | ~8 P0 blockers documentados |
| **CoPaw** | 6 | 2 | 0 | 0 | 🟡 Moderada | Regressão confirmada v1.1.9+ |
| **ZeroClaw** | 50 | 50 | 7 | 0 | 🟢 Robusta | Extensibilidade via plugins WASM |

**Síntese:** 5 de 7 projetos estão ativos com saúde positiva. Hermes Agent e IronClaw carregam dívida técnica significativa (incidentes P1/P2 e P0 blockers). CoPaw enfrenta regressão que precisa ser endereçada.

---

## 3. Posicionamento do Projeto Principal (ZeroClaw)

### Vantagens Competitivas

| Dimensão | ZeroClaw | NanoBot | Hermes Agent | PicoClaw |
|----------|----------|---------|--------------|----------|
| **Volume de providers** | 7 novos + schema v3 | Custom providers (DeepSeek, Kimi) | Google/Vertex nativo (RFC) | Kagi nativo |
| **Extensibilidade** | Plugin ecosystem WASM (Extism) | MCP connector | Skill drafter + allowlist | Kagi, exchange connectors |
| **Segurança documentada** | S0 file_write em progresso | 3 PRs de segurança pendentes | CVSS 8.0 Slack (dup fechado) | Matrix ID colon fix |
| **Multi-agência** | #2767 (9 👍), A2A Protocol | Spawn tool c/ override de modelo | — | — |
| **Comunidade** | 50 issues/PRs, 7 merges | 4 merges, alta atividade | 50 issues/PRs, 3 merges | 10 merges, 17 issues fechadas |

### Diferenças Técnicas Arquiteturais

| Aspecto | ZeroClaw | NanoBot | Hermes Agent | PicoClaw |
|---------|----------|---------|--------------|----------|
| **Sandbox** | Bubblewrap configurável | bwrap (com bugs Ubuntu 24.04) | Docker (P1 broken) | — |
| **Storage** | SQLite, PostgreSQL, MariaDB RFC | Sessões com orphan handling | SQLite (hot-update death spiral) | — |
| **Protocolo** | A2A (Linux Foundation) | ACP | Proprietary | ACP |
| **Interoperabilidade** | A2A + multi-agent routing | Channel-level | Multi-gateway | Exchange connectors |

**Posicionamento:** ZeroClaw ocupa posição de **extensibilidade máxima** com plugin ecosystem maduro (6 plugins novos: ACE-Step, n8n, Nominatim, Stable Diffusion, LanguageTool, etc.). Seu foco em schema v3 providers e A2A Protocol sugere estratégia de hub de interoperabilidade. NanoBot compete em usabilidade (WebUI, ANSI rendering), enquanto Hermes Agent compete em profundidade de features (Kanban, TUI, Desktop).

---

## 4. Focos Técnicos Compartilhados

### Prioridades Transversais (Ordenadas por Frequência)

| Foco | Projetos Afetados | Natureza |
|------|-------------------|----------|
| **Segurança de sandbox** | NanoBot (bwrap), ZeroClaw (bwrap), Hermes (Docker) | Sandbox isolation, symlink escapes |
| **Provider reliability** | NanoBot (reasoning_content), Hermes (OpenRouter 402), ZeroClaw (Gemini CLI OAuth) | Fallback, native providers |
| **Storage/DB stability** | Hermes (SQLite corruption), ZeroClaw (MariaDB RFC), IronClaw (composition root) | Production-grade persistence |
| **Multi-platform** | Hermes (Windows crash, macOS flicker, Linux), PicoClaw (Termux, ARM64) | Cross-OS compatibility |
| **Config UX** | IronClaw (blueprints), PicoClaw (mcp add parsing), CoPaw (model fallback) | Developer experience |

### Gaps Comuns Identificados

1. **Memory backend production-ready:** SQLite é insuficiente para deployments em escala. RFCs em Hermes (#23717) e ZeroClaw (#4668) indicam demanda por PostgreSQL/MySQL/MariaDB.

2. **Sandbox hardening:** Todos os projetos com sandbox (NanoBot, ZeroClaw, Hermes) enfrentam issues de isolation, symlink escapes e config-driven composition.

3. **Multi-agent routing:** ZeroClaw (#2767, 9 👍) e NanoBot (#4231) demonstram demanda por arquiteturas onde subagentes usam modelos diferentes do agente principal.

4. **Provider fragmentation:** Cada projeto implementa providers de forma independente. Nenhum padrão cross-project emerge ainda.

---

## 5. Análise de Diferenciação

### Por Público-Alvo

| Projeto | Público Primário | Diferenciação |
|---------|------------------|---------------|
| **ZeroClaw** | DevOps, power users, self-hosters | Plugin ecosystem, A2A Protocol, security hardening |
| **NanoBot** | Usuários de WebUI, canais asiáticos (Feishu) | UX polish, ANSI rendering, session stability |
| **Hermes Agent** | Enterprise, multi-platform | Kanban workspace, TUI, Desktop app, multi-gateway |
| **PicoClaw** | Traders, pesquisadores | Exchange connectors (Binance), ClawTrade module |
| **IronClaw** | Enterprise nearai | Reborn v2 architecture, product workflow, WASM components |
| **CoPaw** | Usuários Qwen/local models | vLLM compatibility, visual model fallback |

### Por Arquitetura

| Arquitetura | Projetos | Implicação |
|-------------|----------|------------|
| **Plugin-based (WASM)** | ZeroClaw, IronClaw | Extensibilidade runtime, segurança via sandbox |
| **Channel-based** | NanoBot, CoPaw, Hermes | Multi-integração (Slack, Telegram, Feishu) |
| **Multi-gateway** | Hermes, IronClaw | Deploy distribuído, auth isolation |
| **Exchange/Trading** | PicoClaw | Nicho especializado (Binance WS <50μs) |
| **ACP Protocol** | NanoBot, PicoClaw | Interoperabilidade entre projetos siblings |

### Matriz de Funcionalidades

| Feature | ZeroClaw | NanoBot | Hermes | PicoClaw | IronClaw | CoPaw |
|---------|----------|---------|--------|----------|----------|-------|
| Multi-agent | ✅ A2A | ✅ Spawn | ❌ | ❌ | ✅ Reborn | ❌ |
| Plugin ecosystem | ✅ WASM | ❌ | ❌ | ❌ | ✅ WASM | ❌ |
| WebUI | ❌ | ✅ | ✅ Desktop | ❌ | ✅ WebChat v2 | ✅ Console |
| Exchange trading | ❌ | ❌ | ❌ | ✅ Binance | ❌ | ❌ |
| Memory backend | SQLite | Session | SQLite | ❌ | ❌ | ❌ |
| Security hardening | TOTP, LeakDetector | 3 PRs pendentes | Slack CVSS 8.0 | Matrix fix | P0 safeguards | ❌ |
| Mobile support | ❌ | ❌ | ❌ | ✅ Termux | ❌ | ❌ |

---

## 6. Tração e Maturidade da Comunidade

### Velocidade de Iteração

| Projeto | PRs merged/24h | Issues fechadas/24h | Velocidade |
|---------|----------------|---------------------|------------|
| **PicoClaw** | 10 | 17 | 🚀 Muito alta |
| **IronClaw** | 12 | 15 | 🚀 Muito alta |
| **NanoBot** | 4 | 2 | 🟡 Moderada |
| **ZeroClaw** | 7 | 19 | 🟢 Alta |
| **Hermes Agent** | 3 | ~5 | 🟡 Moderada |
| **CoPaw** | 0 | 0 | 🔴 Estagnada |

### Indicadores de Maturidade

| Indicador | Positivo | Negativo |
|-----------|----------|----------|
| **PRs de segurança mergeados** | ZeroClaw (em progresso), NanoBot (pendentes) | Hermes (Slack CVSS 8.0 fechada como dup) |
| **Backlog stale** | PicoClaw (#2904, 18 dias), Hermes (múltiplas) | — |
| **Resposta a bugs críticos** | NanoBot (3 PRs competindo #4203), PicoClaw (Matrix fix PR) | Hermes (Docker P1 sem workaround) |
| **Contribution external** | PicoClaw (chengzhichao-xydt, SutraHsing), ZeroClaw (multiplos) | CoPaw (0 merges) |
| **Governança documentada** | ZeroClaw (#7011 - issue ownership) | — |

### Ranking de Engajamento

1. 🥇 **PicoClaw** — 10 merges, 17 issues fechadas, cycle time rápido
2. 🥈 **IronClaw** — 12 merges, CI maturation, Reborn v2 blocks bem documentados
3. 🥉 **ZeroClaw** — 7 merges, plugin ecosystem em crescimento, A2A momentum
4. **NanoBot** — Estável, focado em qualidade (4 merges, 2 critical PRs abertas)
5. **Hermes Agent** — Volume alto mas baixa conversão (50 issues/PRs → 3 merges)
6. **CoPaw** — Estagnada (0 merges, regressão não resolvida)

---

## 7. Sinais de Tendência

### Tendências Fortes (Múltiplos projetos, alta validação)

**1. Multi-agência como direção inevitável**
- ZeroClaw: #2767 (9 👍), #3566 A2A Protocol (7 👍)
- NanoBot: #4231 spawn tool com override de modelo
- IronClaw: Reborn v2 com active task anchoring

**2. Extensibilidade via plugins/self-hosted**
- ZeroClaw: 6 plugins novos (music, n8n, geocoding, image gen, grammar)
- IronClaw: WASM components para ProductAdapters
- PicoClaw: exchange connectors modulares

**3. Provider diversification**
- ZeroClaw: 7 novos providers via schema v3
- Hermes: RFC Google/Vertex nativo (7 👍, 8 comentários)
- NanoBot: custom providers (DeepSeek, Kimi K2.5/K2.6)

**4. Sandbox hardening como requisito de produção**
- NanoBot: 3 PRs de segurança pendentes
- ZeroClaw: TOTP gate, symlink escape blocking
- IronClaw: P0 safeguards para cutover

### Tendências Emergentes (Sinalização inicial)

**5. Storage production-ready**
- Hermes: SessionDB pluggable (PostgreSQL, MySQL)
- ZeroClaw: MariaDB backend RFC

**6. Cross-platform como barreira**
- Hermes: Windows 11 crash, macOS flicker, Docker broken
- PicoClaw: Termux/Android como extensão de mercado

**7. Otimização de custo operacional**
- ZeroClaw: #5146 skill compilation para minimizar tokens
- NanoBot: ContextGovernor para microcompaction

**8. Interoperabilidade via protocolos open**
- A2A Protocol (Linux Foundation) gaining traction em ZeroClaw
- ACP Protocol compartilhado entre NanoBot e PicoClaw

### Tendências em Declínio ou Estagnação

- **Mono-provider:** Usuários buscando摆脱 OpenRouter markup (Hermes #12639)
- **SQLite-only:** Insuficiente para produção em escala
- **Hand-edited config:** ZeroClaw (#3036) e IronClaw (#3036) documentam demanda por config-as-code

---

## Recomendações Estratégicas

| Audiência | Recomendação |
|-----------|--------------|
| **Desenvolvedores** | Priorizem Multi-agent (A2A) e Plugin ecosystems — demanda validada por 9+ 👍 |
| **DevOps/Infra** | Foco em sandbox hardening e storage production-ready antes de production deploy |
| **Enterprises** | Hermes e IronClaw oferecem features profundas mas carregam dívida técnica — avaliar custo de migração v1→v2 |
| **Pesquisadores** | PicoClaw para trading use cases, ZeroClaw para extensibilidade experimental |

---

*Relatório gerado com base em dados de atividade comunitária de 2026-06-08.*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# 📊 Relatório do Projeto NanoBot — 2026-06-08

---

## 1. Panorama do Dia

O NanoBot apresenta **alta atividade de desenvolvimento** em 08/06/2026, com 19 PRs e 7 issues atualizadas nas últimas 24h. A equipe está focada em **estabilidade e segurança**: dois bugs críticos no sandbox bwrap (Ubuntu 24.04, HOME variable) foram reportados e já possuem PRs abertas para correção. A WebUI recebeu melhorias de usabilidade (exibição de versão, renderização ANSI), enquanto o sistema de sessão recebe refinamentos importantes para tratamento de mensagens órfãs. Não houve releases, indicando que o foco está em estabilizar a base antes de um próximo lançamento.

---

## 2. Lançamentos

**Nenhum novo release detectado nas últimas 24h.**

O projeto não publicou versões desde o último período analisado. Isso sugere que a equipe está em fase de consolidação de PRs abertas antes de um próximo tag.

> 🔗 [Histórico de Releases](https://github.com/HKUDS/nanobot/releases)

---

## 3. Progresso do Projeto

### PRs Merged/Fechadas (4 total)

| # | Título | Impacto |
|---|--------|---------|
| [#4240](https://github.com/HKUDS/nanobot/pull/4240) | **feat(webui): render ANSI output in code blocks** | Melhoria visual na WebUI com parser ANSI para cores e estilos |
| [#4227](https://github.com/HKUDS/nanobot/pull/4227) | **fix: preserve empty-string reasoning_content** | Corrige regressão com custom providers (DeepSeek, Kimi) que retornam `reasoning_content=""` |
| [#2885](https://github.com/HKUDS/nanobot/pull/2885) | **fix(feishu): resolve mentions and access token** | Melhora resolução de menções e inicialização de token no canal Feishu |
| [#2663](https://github.com/HKUDS/nanobot/pull/2663) | **fix(whatsapp): handle LID group mentions** | Corrige detecção de menções em grupos WhatsApp com JIDs LID |

### Destaque: Correção de Custom Providers

A PR [#4227](https://github.com/HKUDS/nanobot/pull/4227) resolve um problema crítico onde `reasoning_content=""` era tratado como falsy e convertido para `None`, causando falhas em ferramentas com custom providers como DeepSeek e Kimi K2.5/K2.6.

---

## 4. Temas Quentes da Comunidade

### Issues com Mais Atividade

| # | Título | Comentários | Tipo | Link |
|---|--------|-------------|------|------|
| [#2256](https://github.com/HKUDS/nanobot/issues/2256) | Bug no bot de resposta do Feishu em tópicos de grupo | 4 | Bug | [🔗](https://github.com/HKUDS/nanobot/issues/2256) |
| [#4203](https://github.com/HKUDS/nanobot/issues/4203) | `find_legal_message_start` descarta mensagens com tool results órfãos | 2 | Bug Crítico | [🔗](https://github.com/HKUDS/nanobot/issues/4203) |
| [#4231](https://github.com/HKUDS/nanobot/issues/4231) | Adicionar parâmetro de modelo ao spawn tool para subagentes | 0 | Enhancement | [🔗](https://github.com/HKUDS/nanobot/issues/4231) |

### Análise das Demandas

**🔴 Bug #4203** é crítico: quando uma mensagem de usuário é seguida por "tool results órfãos" (sem chamada de assistant correspondente), `find_legal_message_start` retorna o tamanho da lista, causando perda de **todas as mensagens** do histórico. Já possui 3 PRs concorrentes para correção ([#4219](https://github.com/HKUDS/nanobot/pull/4219), [#4229](https://github.com/HKUDS/nanobot/pull/4229)).

**💡 Enhancement #4231** (spawn tool com override de modelo): demanda recorrente para permitir subagentes com modelos diferentes do agente principal. Usuários precisam executar tarefas especializadas com modelos otimizados.

---

## 5. Bugs e Estabilidade

### Bugs Abertos por Severidade

#### 🔴 Críticos (2)
| # | Descrição | Link |
|---|-----------|------|
| #4203 | `find_legal_message_start` descarta TODAS as mensagens quando há tool result órfão | [🔗](https://github.com/HKUDS/nanobot/issues/4203) |
| #4236 | bwrap sandbox falha no Ubuntu 24.04 por user namespaces restritos | [🔗](https://github.com/HKUDS/nanobot/issues/4236) |

#### 🟡 Médios (3)
| # | Descrição | Link |
|---|-----------|------|
| #4237 | bwrap sandbox não reseta HOME, quebrando tool writes | [🔗](https://github.com/HKUDS/nanobot/issues/4237) |
| #4234 | API handler duplica user turns no retry de resposta vazia | [🔗](https://github.com/HKUDS/nanobot/pull/4234) |
| #4230 | MCP streamableHttp transport sem timeout pode travar | [🔗](https://github.com/HKUDS/nanobot/pull/4230) |

#### 🟢 Menores (2)
| # | Descrição | Link |
|---|-----------|------|
| #4233 | Solicitar exibição de versão no webui | [🔗](https://github.com/HKUDS/nanobot/issues/4233) |
| #4105 | Custom provider drop reasoning content se vazio | **✅ Closed** |

### PRs de Segurança em Aberto

| # | Título | Link |
|---|--------|------|
| #4123 | Rejeitar URLs HTTP inseguras antes de probe no MCP | [🔗](https://github.com/HKUDS/nanobot/pull/4123) |
| #4119 | Bloquear escapes de symlink relativo no workspace | [🔗](https://github.com/HKUDS/nanobot/pull/4119) |
| #4053 | Manter roots read-only fora de paths de escrita | [🔗](https://github.com/HKUDS/nanobot/pull/4053) |

**⚠️ Alerta**: 3 PRs de segurança pendentes de merge. Recomenda-se priorização.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| # | Feature | Complexidade | Link |
|---|---------|--------------|------|
| #4231 | **Parâmetro de modelo no spawn tool** para subagentes | Alta | [🔗](https://github.com/HKUDS/nanobot/issues/4231) |
| #4233 | **Exibir versão do nanobot na WebUI** | Baixa | [🔗](https://github.com/HKUDS/nanobot/issues/4233) |
| #4232 | **Transcription compartilhado** entre canais | Média | [🔗](https://github.com/HKUDS/nanobot/pull/4232) |

### Features Em Desenvolvimento

| # | Feature | Status | Link |
|---|---------|--------|------|
| #4235 | Mostrar versão nanobot na Settings Overview | **OPEN** | [🔗](https://github.com/HKUDS/nanobot/pull/4235) |
| #4238 | Microcompaction gateada por pressão de contexto | **OPEN** | [🔗](https://github.com/HKUDS/nanobot/pull/4238) |
| #4190 | Validação mais rigorosa de tool calls | **OPEN** | [🔗](https://github.com/HKUDS/nanobot/pull/4190) |

### Tendências de Roadmap

1. **Modularização**: Transcription como capacidade compartilhada (#4232)
2. **Performance**: ContextGovernor para microcompaction (#4238)
3. **Usabilidade**: UI enhancements (versão, ANSI rendering)
4. **Multi-modelo**: Suporte a subagentes com modelos diferentes

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Dor | Frequência | Impacto | Link |
|-----|------------|---------|------|
| Falha do sandbox bwrap no Ubuntu 24.04 | Recente | Alto | [#4236](https://github.com/HKUDS/nanobot/issues/4236) |
| Mensagens descartadas inesperadamente | Recorrente | Crítico | [#4203](https://github.com/HKUDS/nanobot/issues/4203) |
| Custom providers perdem reasoning content | Relatado | Médio | [#4105](https://github.com/HKUDS/nanobot/issues/4105) |
| Falta de visibilidade da versão rodando | Usuários | Baixo | [#4233](https://github.com/HKUDS/nanobot/issues/4233) |

### Cenários de Uso Mencionados

- **Integração Feishu**: Bot em grupos/tópicos com menções — [Issue #2256](https://github.com/HKUDS/nanobot/issues/2256)
- **Subagentes especializados**: Spawn tool com modelos otimizados para tarefas específicas
- **Sandbox seguro**: Execução isolada de ferramentas em ambientes restritivos

### Satisfação Geral

A comunidade está **ativamente reportando bugs** e contributing patches, indicando engajamento saudável. A quantidade de PRs de segurança abertas (3) sugere necessidade de atenção da equipe de manutenção.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta / sem Activity Recente

| # | Título | Criado | Status | Link |
|---|--------|--------|--------|------|
| — | Nenhuma issue significativa sem resposta recente | — | — | — |

> ✅ **Bom sinal**: Todas as issues recentes possuem atividade ou PRs associadas.

### PRs Antigas Pendentes

| # | Título | Criado | Dias | Link |
|---|--------|--------|------|------|
| #3982 | test: add scripted agent runner harness | 2026-05-24 | ~15 | [🔗](https://github.com/HKUDS/nanobot/pull/3982) |
| #3983 | test: cover runner blocked tool-call finish reasons | 2026-05-24 | ~15 | [🔗](https://github.com/HKUDS/nanobot/pull/3983) |
| #4053 | fix(tools): keep read-only roots out of write paths | 2026-05-29 | ~10 | [🔗](https://github.com/HKUDS/nanobot/pull/4053) |
| #4119 | fix(exec): block relative symlink workspace escapes | 2026-05-31 | ~8 | [🔗](https://github.com/HKUDS/nanobot/pull/4119) |

### Recomendações de Priorização

1. **🔴 Crítico**: Revisar e mergear PRs de segurança [#4123](https://github.com/HKUDS/nanobot/pull/4123), [#4119](https://github.com/HKUDS/nanobot/pull/4119), [#4053](https://github.com/HKUDS/nanobot/pull/4053)
2. **🟡 Importante**: Resolver bug [#4203](https://github.com/HKUDS/nanobot/issues/4203) — 3 PRs competindo, need consolidate
3. **🟢 UX**: Mergear enhancement de versão na WebUI [#4235](https://github.com/HKUDS/nanobot/pull/4235) (baixo esforço, alto valor)

---

## 📈 Métricas do Período

| Métrica | Valor |
|---------|-------|
| Issues atualizadas | 7 |
| Issues abertas/ativas | 5 |
| Issues fechadas | 2 |
| PRs atualizadas | 19 |
| PRs abertas | 15 |
| PRs merged/fechadas | 4 |
| Novas releases | 0 |
| Bugs críticos abertos | 2 |
| PRs de segurança pendentes | 3 |

---

**Relatório gerado em**: 2026-06-08  
**Repositório**: [HKUDS/nanobot](https://github.com/HKUDS/nanobot)

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent
## NousResearch/hermes-agent — 2026-06-08

---

## 1. Panorama do Dia

O projeto apresenta **alta atividade operacional** com 50 issues e 50 PRs atualizados nas últimas 24h. A saúde geral é **estável com incidentes críticos em investigação**: um bug P1 (Docker container não inicia desde 2026-05-28) permanece sem correção, e um crash P2 no Hermes Desktop para Windows 11 (exceção 0x80000003) foi reportado hoje. A comunidade demonstra engajamento significativo em funcionalidades de extensibilidade (SessionDB plugável, provider nativo Google/Vertex AI) e em correções de estabilidade para Kanban e TUI. Nenhuma release foi publicada hoje, e o backlog de PRs abertos (47) sugere um pipeline saudável de contribuições aguardando review.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

O projeto não emitiu novas versões desde o último ciclo. Usuários em produção devem monitorar issues críticas pendentes (especialmente #36208 — Docker) antes de atualizar a partir de imagens datadas de 2026-05-28.

---

## 3. Progresso do Projeto

### PRs Recentemente Fechados/Merged (3)

| PR | Descrição | Impacto |
|---|---|---|
| [#41360](https://github.com/NousResearch/hermes-agent/issues/41360) | Cross-platform crash-cause diagnostics — parse why the agent died | Diagnóstico aprimorado de crashes, útil para debugging em produção |
| [#41416](https://github.com/NousResearch/hermes-agent/issues/41416) | Discord thread context lost (duplicado acidental) | Reportado como erro de filing, não representa progresso real |

### PRs Abertos com Maior Relevância Técnica (20 PRs novos hoje)

| PR | Escopo | Prioridade | Contribuidor |
|---|---|---|---|
| [#41514](https://github.com/NousResearch/hermes-agent/pull/41514) | Anchor corrections to active task | — | deacon-botdoctor |
| [#41477](https://github.com/NousResearch/hermes-agent/pull/41477) | Stall detector para tool calls repetitivos | P3 | liuhao1024 |
| [#41486](https://github.com/NousResearch/hermes-agent/pull/41486) | IMAP BODY.PEEK[] para email (fix #41340) | P2 | kyssta-exe |
| [#41498](https://github.com/NousResearch/hermes-agent/pull/41498) | Partial stream recovery + bounded restart (codex) | P2 | 0-CYBERDYNE-SYSTEMS-0 |
| [#41500](https://github.com/NousResearch/hermes-agent/pull/41500) | Ollama output truncation + GGUF context | P2-P3 | yayster |
| [#41494](https://github.com/NousResearch/hermes-agent/pull/41494) | Bloquear SVG na media relay (security) | P2 | zapabob |
| [#41484](https://github.com/NousResearch/hermes-agent/pull/41484) | Reduzir flicker da status bar TUI (fix #41480) | P3 | liuhao1024 |
| [#41481](https://github.com/NousResearch/hermes-agent/pull/41481) | Cron job profile para delivery | P2 | andriusem |
| [#41485](https://github.com/NousResearch/hermes-agent/pull/41485) | Skill drafter com provenance metadata | P3 | iamlukethedev |

**Análise:** A contribuição de liuhao1024 se destaca com 3 PRs de alta qualidade (stall detector, TUI flicker, WhatsApp allowlist). O PR #41477 introduz um StallDetector que representa uma melhoria significativa na robustez do loop de agentes, interrompendo chamadas repetitivas antes de esgotar o budget de iterações.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (por comentários + reações)

| Issue | Título | Comentários | 👍 | Tipo |
|---|---|---|---|---|
| [#23717](https://github.com/NousResearch/hermes-agent/issues/23717) | RFC: Pluggable SessionDB Provider — PostgreSQL, MySQL | **9** | 0 | Feature |
| [#12639](https://github.com/NousResearch/hermes-agent/issues/12639) | Native Google/Vertex AI Provider (bypass OpenRouter 402) | **8** | **7** | Feature |
| [#33774](https://github.com/NousResearch/hermes-agent/issues/33774) | Kanban scratch workspace GC destrói artefatos antes do child ler | **5** | 1 | Bug |
| [#30445](https://github.com/NousResearch/hermes-agent/issues/30445) | Kanban DB corruption risk (multi-gateway SQLite) | **4** | 2 | Bug |
| [#36046](https://github.com/NousResearch/hermes-agent/issues/36046) | Kanban artifact issue (not created or deleted) | **4** | 0 | Bug |

### Análise das Demandas Principais

**1. SessionDB Pluggable (#23717)** — 9 comentários
A RFC propõe migrar do SQLite `state.db` para um sistema de storage plugável (PostgreSQL, MySQL) para resolver o problema de "hot-update death spiral" — quando `git pull` durante execução corrompe o arquivo SQLite compartilhado. A discussão indica consenso técnico sobre a necessidade, com debate sobre a interface de abstração ideal. Este é um **tema de arquitetura de longo prazo** com implicações significativas para deployments de produção.

**2. Google/Vertex AI Native Provider (#12639)** — 8 comentários, 7 👍
Usuários enfrentando `HTTP 402` e rate limits do OpenRouter estão solicitando suporte nativo ao Google AI / Vertex AI. A receptividade (7 👍) indica que esta é uma **demanda prioritária da comunidade**. O impacto seria reduzir dependência de intermediários e custos para usuários do modelo `gemini-3.1-pro-preview`.

**3. Kanban Issues (#33774, #30445, #36046, #41312, #41448)**
Cinco issues relacionadas ao subsistema Kanban demonstram uma **área de fragilidade recorrente**: workspace GC, DB corruption em multi-gateway, artefatos não criados/deletados, e path resolution incorreto. A issue #30445 (DB corruption com 7+ gateways) é particularmente crítica para setups de produção em escala.

---

## 5. Bugs e Estabilidade

### Por Severidade

#### P1 — Incidente Crítico (1)

| Issue | Título | Status | Atualização |
|---|---|---|---|
| [#36208](https://github.com/NousResearch/hermes-agent/issues/36208) | Docker container não inicia desde 2026-05-28 | **ABERTA** | 2026-06-07 |

> **Impacto:** Usuários que fizeram `docker pull` após 2026-05-28 não conseguem iniciar o container. O cont-init script completa mas o serviço principal falha silenciosamente. **Nenhum workaround conhecido publicly.**

#### P2 — Bugs de Alta Prioridade (12)

| Issue | Título | Componentes | Atualização |
|---|---|---|---|
| [#38216](https://github.com/NousResearch/hermes-agent/issues/38216) | Hermes Desktop v40.9.3 crash no Windows 11 (0x80000003) | Desktop, Electron | 2026-06-07 |
| [#41385](https://github.com/NousResearch/hermes-agent/issues/41385) | /codex-runtime falha no macOS (PATH sem ~/.hermes/node/bin) | CLI, Codex | 2026-06-07 |
| [#38068](https://github.com/NousResearch/hermes-agent/issues/38068) | **Slack auth bypass** (CVSS 8.0 High) | Slack, Auth | **FECHADA** (duplicate) |
| [#41340](https://github.com/NousResearch/hermes-agent/issues/41340) | Email IMAP crash em iCloud (bytes decode error) | Email, IMAP | 2026-06-07 |
| [#41441](https://github.com/NousResearch/hermes-agent/issues/41441) | Vision setup não pede model name | CLI, Vision | 2026-06-07 |
| [#37361](https://github.com/NousResearch/hermes-agent/issues/37361) | Docker backend cria container por sessão (auth isolation) | Terminal, Docker | 2026-06-07 |
| [#41312](https://github.com/NousResearch/hermes-agent/issues/41312) | Kanban worker resolve paths contra gateway home | Kanban, File | 2026-06-07 |
| [#37970](https://github.com/NousResearch/hermes-agent/issues/37970) | Telegram replies não anexam mídia | Telegram | 2026-06-07 |
| [#38387](https://github.com/NousResearch/hermes-agent/issues/38387) | Windows gateway deixa console window fantasma | Gateway, Windows | 2026-06-07 |
| [#30445](https://github.com/NousResearch/hermes-agent/issues/30445) | Kanban DB corruption multi-gateway SQLite | Kanban, DB | 2026-06-07 |
| [#34067](https://github.com/NousResearch/hermes-agent/issues/34067) | hermes config set aceita keys desconhecidas silenciosamente | CLI, Config | 2026-06-07 |

> ⚠️ **Nota de Segurança:** #38068 foi fechada como duplicado — verificar se a correção original (<linked issue>) foi merged. O CVSS 8.0 indica vulnerabilidade significativa em autenticação Slack.

#### P3 — Bugs de Prioridade Média (17+)

| Issue | Título | Componentes | Observação |
|---|---|---|---|
| [#41480](https://github.com/NousResearch/hermes-agent/issues/41480) | TUI status bar flicker durante streaming | TUI | iTerm2 específico |
| [#37893](https://github.com/NousResearch/hermes-agent/issues/37893) | Screen flickering macOS + CPU 60%+ | Desktop, Renderer | --disable-gpu não ajuda |
| [#33774](https://github.com/NousResearch/hermes-agent/issues/33774) | Kanban scratch GC destrói artefatos | Kanban, Workspace | Race condition |
| [#36046](https://github.com/NousResearch/hermes-agent/issues/36046) | Kanban artifact não criado/deletado | Kanban | Reports mistos |
| [#41445](https://github.com/NousResearch/hermes-agent/issues/41445) | hermes prompt-size over-counts tools | CLI, Tools | Des REPORT |
| [#41467](https://github.com/NousResearch/hermes-agent/issues/41467) | Agent fica "retarded" intermitentemente | Agent | Frustração visível do usuário |
| [#41339](https://github.com/NousResearch/hermes-agent/issues/41339) | Token mangling/corruption | Agent | Usuário indignado |

**Padrões Identificados:**
- **Kanban:** 5+ issues relacionadas — subsystem precisa de audit completo
- **Docker/macOS/Windows:** Multiplaform issues indicam necessidade de CI/CD mais robusto
- **TUI flicker:** 2 issues (#41480, #37893) — pode ser root cause comum

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features com Maior Potencial de Implementação

| Issue | Título | Comentários | 👍 | Viabilidade |
|---|---|---|---|---|
| [#12639](https://github.com/NousResearch/hermes-agent/issues/12639) | Native Google/Vertex AI Provider | 8 | 7 | Alta — PR #41500 já aborda Ollama |
| [#23717](https://github.com/NousResearch/hermes-agent/issues/23717) | Pluggable SessionDB Provider | 9 | 0 | Média — RFC em discussão |
| [#10356](https://github.com/NousResearch/hermes-agent/issues/10356) | Feishu (Lark) Ecosystem Deep Integration | 2 | 0 | Baixa — apenas desejo |
| [#41190](https://github.com/NousResearch/hermes-agent/issues/41190) | Unified plugin route selector | 2 | 0 | Alta — dor real de developers |
| [#25335](https://github.com/NousResearch/hermes-agent/issues/25335) | Custom Slash Commands para messaging | 1 | 1 | Média — feature comum em bots |
| [#41075](https://github.com/NousResearch/hermes-agent/issues/41075) | hermes sessions archive/compress | 1 | 0 | Alta — necessidade real de DB management |
| [#41431](https://github.com/NousResearch/hermes-agent/pull/41487) | Custom model names no Desktop | — | — | **PR aberto** (alta probabilidade) |

### Sinais de Roadmap Inferidos dos PRs

| PR | Feature | Implicação |
|---|---|---|
| [#41514](https://github.com/NousResearch/hermes-agent/pull/41514) | Active task anchoring | Evolução do sistema de correção de agentes |
| [#41476](https://github.com/NousResearch/hermes-agent/pull/41476) | Per-platform show_credits toggle | Configuração granular de UX por platform |
| [#41485](https://github.com/NousResearch/hermes-agent/pull/41485) | Skill drafter com provenance | Sistema de skills mais robusto com human-in-the-loop |
| [#41491](https://github.com/NousResearch/hermes-agent/pull/41491) | WhatsApp sender allowlist | Segurança em group chats |

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Categoria | Sintomas | Frequência | Severidade |
|---|---|---|---|
| **Stabilidade Docker** | Container não inicia post-2026-05-28 | Crítica | P1 |
| **Kanban workspace** | Arquivos desaparecem, artefatos não criados | Frequente | P2-P3 |
| **Provider reliability** | 402/rate limits do OpenRouter | Frequente | Feature Request |
| **Multi-platform bugs** | Windows crash, macOS flicker, Docker isolation | Múltiplos reports | P2 |
| **Config UX** | Keys aceitas silenciosamente, wizard incompleto | Moderada | P2 |
| **Auth sharing** | Docker/container-per-session quebra auth state | Infrequente mas crítico | P2 |

### Cenários de Uso Emergentes

1. **Deploy em escala com múltiplos gateways** — users enfrentando DB corruption e concurrent access issues
2. **Uso empresarial com múltiplas plataformas** — integração Feishu, Telegram, Slack, WhatsApp simultaneamente
3. **Produção headless** — gateway como daemon em Windows Scheduled Tasks (console window issue)
4. **Desktop + remote gateway** — Tailscale/VPN setups com path resolution quebrado

### Indicadores de Satisfação/Frustração

| Indicador | Observação |
|---|---|
| 👍 em #12639 (7) | Usuários querem desesperadamente摆脱 OpenRouter markup |
| Linguagem em #41467 | "retarded", "dumb" — frustração com comportamento errático do agent |
| Linguagem em #41339 | "DAMM STUPID" — token mangling é experiência muito negativa |
| Issue #41339 tem 1 comentário | Usuário está "cambaleando entre agentes" — risco de churn |

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Sem Atribuição

| Issue | Título | Criado | Atualização | Comentários | Prioridade |
|---|---|---|---|---|---|
| [#36208](https://github.com/NousResearch/hermes-agent/issues/36208) | Docker container não inicia | 2026-06-01 | 2026-06-07 | 2 | **P1 — CRÍTICO** |
| [#38216](https://github.com/NousResearch/hermes-agent/issues/38216) | Windows 11 Desktop crash | 2026-06-03 | 2026-06-07 | 3 | **P2** |
| [#38068](https://github.com/NousResearch/hermes-agent/issues/38068) | Slack auth bypass | 2026-06-03 | 2026-06-07 | 3 | **P2 — SECURITY** (fechada como dup) |
| [#37361](https://github.com/

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-06-08

---

## 1. Panorama do Dia

O projeto PicoClaw demonstra **alta atividade de desenvolvimento** em 08/06/2026, com 20 issues e 19 PRs atualizados nas últimas 24 horas. A equipe fechou 17 issues e mergeou 10 PRs, evidenciando um ciclo de release acelerado. As principais contribuições incluem: (a) novos conectores de exchange para Binance e infrastructure de trading (ClawTrade), (b) integração nativa do provedor Kagi Search, e (c) múltiplos patches de estabilidade para обработка de erros e type assertions. O build nightly v0.2.9-nightly.20260607 está disponível para testes. A saúde geral do projeto é **robusta**, com foco em consolidação de estabilidade e expansão de funcionalidades de exchange.

---

## 2. Lançamentos

### Release Disponíveis

| Versão | Tipo | Data | Commit |
|--------|------|------|--------|
| **v0.2.9-nightly.20260607.7d2b0c2a** | Nightly Build | 2026-06-07 | `7d2b0c2a` |

**Nota:** Este é um build automatizado noturno para `v0.2.9`. Pode conter alterações instáveis. Recomenda-se uso em ambiente de teste antes de deploy em produção.

🔗 [Full Changelog: v0.2.9...main](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)

---

## 3. Progresso do Projeto

### PRs Mergeds/Closed Hoje (10 total)

#### Integrações e Features Principais

| PR | Título | Impacto |
|----|--------|---------|
| [#3037](https://github.com/sipeed/picoclaw/pull/3037) | Add native Kagi web search provider | Adiciona Kagi Search como provedor nativo de busca, integrando via OpenAPI Go client |
| [#2902](https://github.com/sipeed/picoclaw/pull/2902) | docs: add Android Termux guide | Guia documentação para rodar PicoClaw em Android ARM64 via Termux |

#### Melhorias de Estabilidade e Performance

| PR | Título | Impacto |
|----|--------|---------|
| [#2936](https://github.com/sipeed/picoclaw/pull/2936) | feat(skills): skip skills whose required binaries are missing | Filtra skills que não podem executar devido a dependências faltantes no PATH |
| [#2906](https://github.com/sipeed/picoclaw/pull/2906) | Fix message bus backpressure handling and health visibility | Implementa bounded waiting no bus para evitar blocking e adiciona métricas de drop |

#### Módulos de Exchange/Trading (ClawTrade)

| PR | Título | Impacto |
|----|--------|---------|
| [#3024](https://github.com/sipeed/picoclaw/pull/3024) | EX-001: Exchange interface + tipos Go | Interface base para conectores de exchange |
| [#3025](https://github.com/sipeed/picoclaw/pull/3025) | EX-002: Binance WebSocket (TDD) | Conector WS com benchmark < 50μs por update |
| [#3026](https://github.com/sipeed/picoclaw/pull/3026) | EX-003: Binance REST (TDD) | Cliente REST para Binance com testes |
| [#3027](https://github.com/sipeed/picoclaw/pull/3027) | EX-004: Order book ring buffer lock-free | Ring buffer 1M updates/s, zero alloc |
| [#3028](https://github.com/sipeed/picoclaw/pull/3028) | EX-005: Exchange latency benchmarks | Documentação de benchmarks Binance |

#### Patches de Robustez (chengzhichao-xydt)

| PR | Título | Impacto |
|----|--------|---------|
| [#3040](https://github.com/sipeed/picoclaw/pull/3040) | add ok check for singleflight type assertion | Previne panic em cache de model probe |
| [#3036](https://github.com/sipeed/picoclaw/pull/3036) | use canonical Anthropic default model ID | Corrige ID `claude-sonnet-4-6` (hífens) ao invés de `claude-sonnet-4.6` |
| [#3035](https://github.com/sipeed/picoclaw/pull/3035) | check Close() error after io.Copy | Previne truncamento silencioso de arquivos |
| [#3034](https://github.com/sipeed/picoclaw/pull/3034) | check Close() error on Feishu download | Idem para downloads de recursos Feishu |
| [#3033](https://github.com/sipeed/picoclaw/pull/3033) | check Close() error after downloading media | Idem para mídia |
| [#3016](https://github.com/sipeed/picoclaw/pull/3016) | cancel old dispatchTask on reload | Previne goroutine leak em reload |

---

## 4. Temas Quentes da Comunidade

### Issues/PRs com Maior Engajamento

| Issue/PR | Título | Comentários | 👍 | Categoria |
|----------|--------|-------------|-----|-----------|
| [#2674](https://github.com/sipeed/picoclaw/issues/2674) | Codex OAuth: empty assistant response | 8 | 4 | Bug (Provider) |
| [#286](https://github.com/sipeed/picoclaw/issues/286) | Docs: Android Termux guide | 8 | 2 | Documentação |
| [#2952](https://github.com/sipeed/picoclaw/issues/2952) | Feature requests (QQ channel, exec command) | 4 | 0 | Feature |
| [#2834](https://github.com/sipeed/picoclaw/issues/2834) | Tutorial: upgrade from source | 4 | 0 | Documentação |
| [#652](https://github.com/sipeed/picoclaw/issues/652) | Check skill-creator workspace | 4 | 0 | Bug (Skill) |
| [#2978](https://github.com/sipeed/picoclaw/issues/2978) | Add omniroute as provider | 1 | 0 | Feature Request |

### Análise de Demandas

**Bug #2674 — Codex OAuth Empty Response (4 👍):** Usuários reportam que respostas do ChatGPT via Codex OAuth voltam vazias. Este é o issue com maior validação da comunidade hoje, indicando um problema significativo com integrações OAuth do Codex. **Status: CLOSED** — requer acompanhamento para verificar se foi resolvido no nightly.

**Docs #286 — Android Termux Guide (2 👍, 8 comments):** Forte interesse da comunidade em documentação de execução mobile. **Status: CLOSED** — PR #2902 implementou a solução.

---

## 5. Bugs e Estabilidade

### Bugs Reportados Hoje

| Bug | Severidade | Status | Descrição |
|-----|------------|--------|-----------|
| [#3044](https://github.com/sipeed/picoclaw/issues/3044) | **Alta** | OPEN | `allow_from` falha para Matrix user IDs com `:` (ex: `@alice:example.com`) |
| [#3041](https://github.com/sipeed/picoclaw/issues/3041) | **Alta** | OPEN | `mcp add` mal-parseia flags globais como positionais, quebrando http/sse adds |
| [#2941](https://github.com/sipeed/picoclaw/issues/2941) | **Média** | CLOSED | Default config usa `claude-sonnet-4.6` (inválido) ao invés de `claude-sonnet-4-6` |
| [#3039](https://github.com/sipeed/picoclaw/issues/3039) | **Baixa** | CLOSED (duplicate) | Bug duplicado de Matrix ID com colon |

### Análise de Bugs Abertos

**#3044 — Matrix allow_from com colons:**
- **Causa raiz:** `ParseCanonicalID` divide no primeiro `:`, resultando em `platform="@alice"`, `id="example.com"`
- **Impacto:** Usuários Matrix não conseguem se autenticar corretamente
- **Fix disponível:** PR [#3045](https://github.com/sipeed/picoclaw/pull/3045) em revisão

**#3041 — mcp add flag parsing:**
- **Causa raiz:** `DisableFlagParsing: true` permite que flags herdadas vazem para o parser customizado
- **Impacto:** Servidores MCP podem ser mal-nomeados ou rejeitados silenciosamente
- **Fix disponível:** PR [#3048](https://github.com/sipeed/picoclaw/pull/3048) em revisão

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Solicitadas

| Issue | Título | Descrição | Prioridade |
|-------|--------|-----------|------------|
| [#2978](https://github.com/sipeed/picoclaw/issues/2978) | Add omniroute as provider | Solicita integração com OmniRoute como provedor de modelos |
| [#2952](https://github.com/sipeed/picoclaw/issues/2952) | Feature requests (QQ, exec, model UI) | Múltiplas melhorias: reposição de key por provedor, teste de conexão, lista de modelos via API |

### Sinais de Roadmap

**Módulo ClawTrade (Exchange/Trading):** A quantidade de issues EXM-*/RG-*/EX-* (8 issues fechadas em um dia) indica desenvolvimento ativo de um subsistema de trading:
- Interface de exchange genérica
- Conectores Binance REST + WebSocket
- RiskManager
- CLI para trade/backtest/agent
- Pipeline CI/CD

**Novos Providers:** Demanda clara por expandir provedores de busca (#3037 — Kagi) e potencialmente Omniroute (#2978).

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Dor | Frequência | Contexto |
|-----|------------|----------|
| **Configuração de providers complexa** | Múltiplos | Usuários solicitam teste de conexão, lista automática de modelos, UI para gerenciamento de chaves |
| **Atualização manual difícil** | 1+ | Tutorial de upgrade solicitado explicitamente |
| **Compatibilidade mobile limitada** | 1+ | Interesse em Android via Termux |
| **Matrix integration fragilidade** | 2+ | Problemas recorrentes com formato de user ID |

### Cenários de Uso Identificados

1. **Trading automatizado:** Forte sinal de desenvolvimento para bots de trading (ClawTrade)
2. **Multi-provider:** Usuários querem flexibilidade entre OpenAI, Anthropic, Codex, Kagi, OmniRoute
3. **Deploy em dispositivos limitados:** Android ARM64, sistemas embarcados

### Satisfação Geral

**Positiva:** Comunidade ativa com 8+ PRs de contributors externos (chengzhichao-xydt, SutraHsing, jp39, etc). Issues de documentação (#286, #2834) foram rapidamente endereçados.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta há Tempo

| Issue | Título | Idade | Status | Ação Recomendada |
|-------|--------|-------|--------|------------------|
| [#2904](https://github.com/sipeed/picoclaw/pull/2904) | Fix agent loop reload and panic cleanup stability | ~18 dias | OPEN, stale | Revisar e merge ou fechar |
| [#2975](https://github.com/sipeed/picoclaw/pull/2975) | feat(telegram): treat reply as mention | ~8 dias | OPEN, stale | Revisar para merge |
| [#2978](https://github.com/sipeed/picoclaw/issues/2978) | Add omniroute as provider | ~8 dias | OPEN, stale | Responder ao solicitante |

### PRs Abertos com Estale

| PR | Título | Dias em Aberto | Recomendação |
|----|--------|----------------|--------------|
| [#2904](https://github.com/sipeed/picoclaw/pull/2904) | Fix agent loop reload | ~18 | Priorizar revisão — impacto em estabilidade |
| [#2975](https://github.com/sipeed/picoclaw/pull/2975) | Telegram reply-as-mention | ~8 | Revisar e testar |

### Ações Recomendadas para Maintainers

1. **Alta Prioridade:** Revisar e merge dos PRs [#3045](https://github.com/sipeed/picoclaw/pull/3045) e [#3048](https://github.com/sipeed/picoclaw/pull/3048) para fixar bugs críticos de Matrix e MCP
2. **Média Prioridade:** Responder a [#2978](https://github.com/sipeed/picoclaw/issues/2978) sobre OmniRoute
3. **Documentação:** Consolidar guias de upgrade e gerenciamento de providers

---

*Relatório gerado em 2026-06-08 com base em dados do GitHub de PicoClaw.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório de Projeto: IronClaw
**Data:** 2026-06-08  
**Repositório:** [nearai/ironclaw](https://github.com/nearai/ironclaw)  
**Analista:** Open Source AI Project Analyst

---

## 1. Panorama do Dia

O projeto IronClaw apresenta **alta atividade** nas últimas 24h, com 50 issues e 37 PRs atualizados. O foco predominante é a evolução da arquitetura **Reborn** (v2), com vários PRs de tamanho XL em revisão e issues P0/P1 sobre segurança e composição em destaque. Não houve releases novas publicadas no período, embora o PR #3708 documente a transição de `ironclaw 0.24.0 → 0.29.1`. A comunidade está ativamente discutindo workflows de product workflow, configuração como código, e hardening de segurança para o WebUI beta.

---

## 2. Lançamentos

**Nenhuma release nova publicada nas últimas 24h.**

O último release significativo está documentado no PR [#3708](https://github.com/nearai/ironclaw/pull/3708), que inclui:

| Crate | Versão Anterior | Nova Versão | Tipo de Mudança |
|-------|-----------------|-------------|-----------------|
| `ironclaw` | 0.24.0 | **0.29.1** | — |
| `ironclaw_common` | 0.4.2 | **0.5.0** | ⚠️ Breaking |
| `ironclaw_skills` | 0.3.0 | **0.4.0** | ⚠️ Breaking |
| `ironclaw_safety` | 0.2.2 | **0.2.3** | ✓ Compatível |

**Breaking Changes em `ironclaw_common` 0.5.0:** Requerem revisão de migração. Desenvolvedores que usam essa crate diretamente devem consultar o diff completo no PR antes de atualizar.

---

## 3. Progresso do Projeto

### PRs Closed/Merged nas Últimas 24h

| PR | Título | Tamanho | Impacto |
|----|--------|---------|---------|
| [#4516](https://github.com/nearai/ironclaw/pull/4516) | WebChat v2 thread deletion | L | ✅ Funcionalidade DELETE para threads via Reborn product workflow |
| [#3298](https://github.com/nearai/ironclaw/pull/3298) | Hermetic local gate (ci) | L | ✅ Infraestrutura: wrapper hermético para fmt, clippy, safety checks |
| [#3565](https://github.com/nearai/ironclaw/pull/3565) | Extend nightly e2e timeout | XS | ✅ CI: timeout expandido para 90min + documentação AGENTS.md |
| [#4515](https://github.com/nearai/ironclaw/pull/4515) | Scope Code Style clippy for Reborn-only | L | ✅ CI: clippy segmentado para PRs Reborn-only |
| [#4460](https://github.com/nearai/ironclaw/pull/4460) | Fix tool call preview projection | L | ✅ Correção de estados ready/pending/not-applicable em previews |
| [#3829](https://github.com/nearai/ironclaw/issues/3829) | Google Calendar/Gmail extension-v2 | CLOSED | ✅ Planejado para após catalog/runtime baseline |

**Avanços Notáveis:**
- Infraestrutura CI maturando com gates herméticos e timeout adequado
- WebChat v2 ganhando funcionalidade DELETE para threads
- Clippy segmentado melhora tempo de review para PRs Reborn-only

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (Comentários)

| Issue | Título | Comentários | Prioridade | Tema |
|-------|--------|-------------|------------|------|
| [#3280](https://github.com/nearai/ironclaw/issues/3280) | Add ProductWorkflow and InboundTurnService facade | 7 | P0 | Arquitetura Reborn |
| [#3036](https://github.com/nearai/ironclaw/issues/3036) | Configuration-as-Code: tenant blueprints | 5 | P2 | DevEx / Infra |
| [#3702](https://github.com/nearai/ironclaw/issues/3702) | Binary-E2E test framework plan | 4 | — | Testes |
| [#3044](https://github.com/nearai/ironclaw/issues/3044) | Local developer runtime profiles | 3 | P1 | DevEx |
| [#3333](https://github.com/nearai/ironclaw/issues/3333) | Production wiring and missing crates | 3 | P0 | Arquitetura |
| [#3283](https://github.com/nearai/ironclaw/issues/3283) | Migrate OpenAI-compatible APIs | 3 | P2 | Compatibilidade |
| [#4116](https://github.com/nearai/ironclaw/issues/4116) | Carry v1 Google/GitHub/NEAR SSO | 2 | High Risk | Auth/SSO |
| [#3607](https://github.com/nearai/ironclaw/issues/3607) | WebUI Beta tracker | 2 | P1 | WebUI |

### Análise dos Temas

**1. Arquitetura ProductWorkflow (#3280)** — A questão com maior engagement (7 comentários) busca adicionar a fachada ProductWorkflow entre ProductAdapters e serviços Reborn. Este é um bloco fundamental para a integração v2.

**2. Configuration-as-Code (#3036)** — Epic para permitir configuração declarativa via blueprints de tenant e use-case harnesses, eliminando hand-editing de `.env` e configurações dispersas.

**3. Testes E2E (#3702)** — Plano para framework de testes binários E2E, com classificação de 88 arquivos de teste e 29 core agent-loop.

---

## 5. Bugs e Estabilidade

### Issues de Segurança/P0 (Críticos)

| Issue | Título | Severidade | Status |
|-------|--------|------------|--------|
| [#3032](https://github.com/nearai/ironclaw/issues/3032) | Reborn cutover blocker: no-exposure safeguards | P0 | Aberto |
| [#3026](https://github.com/nearai/ironclaw/issues/3026) | Config-driven production composition root | P0 | Aberto |
| [#3609](https://github.com/nearai/ironclaw/issues/3609) | Re-attenuate approval leases | P0 | Aberto |
| [#3608](https://github.com/nearai/ironclaw/issues/3608) | Seal dispatch authority | P0 | Aberto |
| [#3423](https://github.com/nearai/ironclaw/issues/3423) | Loop input resume/cancellation semantics | P0 | Aberto |

### Issues de Hooks/Segurança

| Issue | Título | Escopo |
|-------|--------|--------|
| [#3959](https://github.com/nearai/ironclaw/issues/3959) | SecurityAuditSink adoption at boundary call sites | Hooks |
| [#3957](https://github.com/nearai/ironclaw/issues/3957) | Third-party activation hardening | Hooks |
| [#3956](https://github.com/nearai/ironclaw/issues/3956) | FS-hardening: RESOLVE_NO_XDEV | Filesystem |
| [#3615](https://github.com/nearai/ironclaw/issues/3615) | WebUI auth/security parity audit | WebUI |

**Observação:** Não há issues de crash ou regressão explícitas reportadas nas últimas 24h. O foco está em hardening preventivo e blockers para cutover para produção.

---

## 6. Pedidos de Features e Sinais de Roadmap

### PRs Abertos com Alto Impacto

| PR | Título | Tamanho | Prioridade |
|----|--------|---------|------------|
| [#4530](https://github.com/nearai/ironclaw/pull/4530) | Structured model-visible tool observations | XL | Alta |
| [#4531](https://github.com/nearai/ironclaw/pull/4531) | Improve skill progressive disclosure | XL | Alta |
| [#4511](https://github.com/nearai/ironclaw/pull/4511) | Add outbound preference facade contracts | XL | Alta |
| [#4532](https://github.com/nearai/ironclaw/pull/4532) | Add Slack allowed-channel picker | XL | Média |
| [#4525](https://github.com/nearai/ironclaw/pull/4525) | Add onboarding bootstrap command | L | Alta |
| [#4522](https://github.com/nearai/ironclaw/pull/4522) | Scaffold tool_args.rs shared parsing | L | Média |
| [#4493](https://github.com/nearai/ironclaw/pull/4493) | WebUI v2 UI improvements | L | Média |

### Features em Destaque

**1. Structured Model Observations (#4530):** Adiciona `ModelVisibleToolObservation` e DTOs de recovery, separando `LoopSafeSummary` como metadata portátil. Melhora a visibilidade de observações de tools para modelos.

**2. Onboarding Bootstrap (#4525):** Comando `ironclaw-reborn onboard` para inicializar Reborn home, config e marker de first-run sem impactar setup v1.

**3. Outbound Preference Facade (#4511):** Contratos de preferência de entrega para `ironclaw_product_workflow` com `OutboundPreferencesProductFacade`.

### Roadmap Signals

- **WASM Components (#3572):** ProductAdapters como componentes WASM em runtime separado
- **OpenAI Compatible APIs (#3283):** Migração das APIs `/v1/chat` e Responses para Reborn
- **CLI Provider Parity (#4118):** Paridade de `provider add/login` no Reborn CLI

---

## 7. Resumo de Feedback dos Usuários

**Nota:** Os dados disponíveis são primariamente issues técnicas internas e PRs. Feedback explícito de usuários finais não está presente neste snapshot.

### Insights de Issues Comunitárias

**Dores Identificadas:**

1. **Fragmentação de Configuração (#3036):** Usuários precisam editar manualmente `.env`, workspace docs, settings JSON, e runtime flags sem schema ou audit trail.

2. **Developer Experience Local (#3044):** Falta de profiles de runtime locais para desenvolvimento sem wiring manual de grants, mounts, e aprovações.

3. **Migração v1→v2 (#3283, #3290):** Necessidade de preservar APIs compatíveis com OpenAI durante transição para Reborn.

4. **SSO Parity (#4116):** Usuários esperam continuidade de login Google/GitHub/NEAR no WebChat v2.

**Sinais Positivos:**
- Issues com labels `[scope: docs]` indicam investimento em documentação
- Múltiplos PRs de UI improvements (#4493) sugerem foco em experiência visual
- Command de onboarding (#4525) evidencia atenção à DX de novos usuários

---

## 8. Backlog que Merece Atenção

### Issues Sem Atividade Recente (Old Backlog)

| Issue | Título | Criado | Comentários | Prioridade |
|-------|--------|--------|-------------|------------|
| [#3029](https://github.com/nearai/ironclaw/issues/3029) | Migration and compatibility bridges | 2026-04-28 | 1 | P1 |
| [#3169](https://github.com/nearai/ironclaw/issues/3169) | Runtime handoff ids for concurrent fan-out | 2026-05-01 | 1 | P2 |
| [#3231](https://github.com/nearai/ironclaw/issues/3231) | Architecture deepening follow-up | 2026-05-03 | 1 | P2 |
| [#3288](https://github.com/nearai/ironclaw/issues/3288) | Migrate extension/skill/MCP/WASM lifecycle | 2026-05-06 | 1 | P2 |
| [#3290](https://github.com/nearai/ironclaw/issues/3290) | Migrate missions/jobs/routine surfaces | 2026-05-06 | 1 | P2 |

### Issues Críticas com Baixo Engajamento

| Issue | Título | Comentários | Notas |
|-------|--------|-------------|-------|
| [#3032](https://github.com/nearai/ironclaw/issues/3032) | No-exposure safeguards | 2 | Blocker P0 para cutover |
| [#3026](https://github.com/nearai/ironclaw/issues/3026) | Config-driven composition root | 2 | Blocker P0 |
| [#3608](https://github.com/nearai/ironclaw/issues/3608) | Seal dispatch authority | 1 | P0 WebUI Beta |
| [#3423](https://github.com/nearai/ironclaw/issues/3423) | Loop resume/cancellation | 1 | P0 |

**⚠️ Alerta:** Issues P0 com apenas 1-2 comentários indicam necessidade de priorização e review. Estes são blockers documentados para o cutover do Reborn para produção.

---

## Métricas Resumidas

| Métrica | Valor |
|---------|-------|
| Issues ativas (24h) | 35 |
| Issues fechadas (24h) | 15 |
| PRs abertos (24h) | 25 |
| PRs merged/fechados (24h) | 12 |
| Releases novas | 0 |
| Issues P0 em aberto | ~8 |
| PRs XL em revisão | 5 |
| Comunidade engagement (comentários) | ~45 |

---

**Relatório gerado automaticamente com base em dados do GitHub em 2026-06-08.**  
**Próxima atualização recomendada:** 2026-06-09

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>


# Relatório do Projeto CoPaw — 2026-06-08

---

## 1. Panorama do Dia

O projeto CoPaw (QwenPaw) mantém atividade moderada em 8 de junho de 2026, com 6 issues e 2 pull requests atualizados nas últimas 24 horas. Não houve lançamentos de novas versões. A atividade recente concentra-se em feedback de usuários sobre bugs no frontend (versões 1.1.9/1.1.10) e solicitações de novos recursos, como suporte a modelos visuais independentes e integração com plataformas de mensagens russas. O projeto demonstra saúde operacional, mas enfrenta regressões que afetam casos de uso com modelos locais.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24 horas.**

O projeto está nas versões 1.1.9/1.1.10 conforme mencionado nos issues. A ausência de novos releases pode indicar que a equipe está em ciclo de estabilização ou preparando uma correção para os bugs reportados.

---

## 3. Progresso do Projeto

Dois pull requests estão em revisão ativa:

| PR | Autor | Status | Descrição |
|----|-------|--------|-----------|
| [#4995](https://github.com/agentscope-ai/QwenPaw/pull/4995) | AbbyJL | Aberto (first-time-contributor) | Preserva output de ferramentas e metadados de anexos no renderer quando `show_tool_details` está desabilitado |
| [#4949](https://github.com/agentscope-ai/QwenPaw/pull/4949) | ekzhu | Em revisão | Estende o servidor ACP com metadados de comandos, erros, parâmetros, agente/modelo e links de arquivos |

**PR #4995** é particularmente relevante: corrige perda de dados quando ferramentas são executadas sem exibir detalhes, impactando a experiência do usuário em canais que dependem de renderização customizada.

**PR #4949** adiciona capacidades significativas ao protocolo ACP, melhorando a experiência de clientes terminal (como o `qwenpaw-tui`), sendo uma melhoria aditiva sem breaking changes.

Nenhum PR foi merged nas últimas 24h.

---

## 4. Temas Quentes da Comunidade

As issues mais recentes não acumularam reações significativas (0 👍 em todas). Porém, pela natureza das solicitações, destacam-se:

**Issue #4992** — *Suporte a modelo visual independente (Visual Model Fallback)*  
Autor: lecheng2018 | 2 comentários

Propõe configuração separada de `visual_model` para processar imagens/vídeos quando o modelo principal não suporta multimodalidade. Usuários com modelos de texto puro (ex: deepseek-v4-flash) precisam dessa capacidade para processar mídia ocasionalmente sem trocar de modelo.

**Issue #4886** — *Adicionar MAX Messenger como canal*  
Autor: pavelvladimirovich258614-sys | 2 comentários

Solicitação da comunidade russófona para integrar a plataforma MAX Messenger, alinhando-se com a filosofia "Every channel" do QwenPaw.

**Issue #4994** — *Sistema de memória fraco, sem evolução automática*  
Autor: rescodexa | 1 comentário

Crítica ao sistema de memória atual, pedindo implementação de frameworks de memória hierárquico comum em agents modernos.

---

## 5. Bugs e Estabilidade

Dois bugs significativos foram reportados:

### Bug Crítico — Incompatibilidade com Modelos Locais (vLLM)

**Issue [#4989](https://github.com/agentscope-ai/QwenPaw/issues/4989)**  
Severidade: **Alta** (regressão confirmada)

- **Problema**: Versões 1.1.9 e 1.1.10 não respondem ao enviar mensagens com modelos Qwen3.6-27B via vLLM local
- **Sintoma**: UI fica em loading eterno ("três pontos")
- **Escopo**: Apenas versões >= 1.1.9; 1.1.5.post2 funciona normalmente
- **Conexão**: Teste de conexão e multimodal funcionam, mas chat não

### Bug Moderado — Tremulação de Imagem no Frontend

**Issue [#4993](https://github.com/agentscope-ai/QwenPaw/issues/4993)**  
Severidade: Moderada

- **Problema**: Ao expandir e arrastar imagens no console web, ocorre抖动 anormal (tremulação)
- **Ambiente**: macOS 26.5, versão 1.1.10
- **Impacto**: Usabilidade do frontend afetada

**Recomendação**: Priorizar correção do bug #4989, pois afeta funcionalmente o produto para usuários de modelos locais (cenário comum).

---

## 6. Pedidos de Features e Sinais de Roadmap

Quatro solicitações de feature foram abertas:

| Issue | Feature | Autor | Relevância |
|-------|---------|-------|------------|
| [#4992](https://github.com/agentscope-ai/QwenPaw/issues/4992) | Modelo visual independente (fallback) | lecheng2018 | Alta — atende demanda de flexibilidade de modelos |
| [#4886](https://github.com/agentscope-ai/QwenPaw/issues/4886) | Canal MAX Messenger | pavelvladimirovich258614-sys | Média — expansão geográfica |
| [#4994](https://github.com/agentscope-ai/QwenPaw/issues/4994) | Sistema de memória hierárquico | rescodexa | Alta — alinhamento com trends de agentes |

**Sinais de tendência**:
1. Demanda por **separação de concerns** (modelo principal vs. modelo visual)
2. Necessidade de **evolução de memória** em direção a frameworks mais sofisticados
3. **Expansão de canais** para mercados não-anglofonos

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

1. **Regressão em modelos locais** (crítico)  
   Usuários que atualizaram para 1.1.9/1.1.10 perderam funcionalidade com vLLM local. Há frustração por não haver logs de erro para diagnóstico.

2. **Experiência visual imperfeita**  
   Problema de usabilidade no frontend (tremulação de imagens) indica necessidade de QA mais rigoroso em interações de drag-and-drop.

3. **Limitações de multimídia**  
   Usuários com modelos de texto puro não conseguem processar imagens sem trocar de modelo, indicando gap de arquitetura.

### Cenários de Uso Emergentais

- **Usuário híbrido**: Modelo principal para texto, modelo visual dedicado para mídia
- **Usuário de mercado russo**: Necessita plataforma de mensagens local (MAX)
- **Usuário power-user**: Busca memória agent com evolução automática

---

## 8. Backlog que Merece Atenção

| Issue | Idade | Status | Prioridade |
|-------|-------|--------|------------|
| [#4886](https://github.com/agentscope-ai/QwenPaw/issues/4886) | 6 dias | Aberta | Atender demanda de mercado russófono |
| [#4949](https://github.com/agentscope-ai/QwenPaw/pull/4949) | 5 dias | Em revisão | PR aguardando merge — melhorias no ACP |
| [#4989](https://github.com/agentscope-ai/QwenPaw/issues/4989) | 2 dias | Aberta | **Crítico** — regressão com modelos locais |

**Nenhuma issue com resposta pendente há mais de 1 semana.** O tempo médio de resposta parece adequado, com atenção necessária ao bug #4989 que impacta usuários de deployment local.

---

## Métricas Resumidas (24h)

| Métrica | Valor |
|---------|-------|
| Issues abertas/ativas | 6 |
| Issues fechadas | 0 |
| PRs abertas | 2 |
| PRs merged | 0 |
| Releases | 0 |
| Issues com ≥2 👍 | 0 |

**Saúde Geral**: Projeto ativo com volume moderado de Issues. Atenção necessária para regressão em modelos locais (versões 1.1.9+). Community engagement presente, mas sem issues viralizadas.

---

*Relatório gerado em 2026-06-08 com base em dados do GitHub do projeto CoPaw/QwenPaw.*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>


# Relatório do Projeto ZeroClaw — 2026-06-08

## 1. Panorama do dia

O ecossistema ZeroClaw demonstra **alta atividade comunitária** nesta data, com 50 issues e 50 PRs atualizados nas últimas 24 horas. A taxa de resolução de issues está equilibrada (19 fechadas vs. 31 abertas), sinalizando fluxo saudável de trabalho. Não houve lançamentos de novas versões, indicando que a equipe provavelmente está em fase de consolidação antes de um próximo release. O volume de PRs abertos (43) sugere pipeline robusto de contribuições, enquanto 7 merges indicam integração contínua de funcionalidades. A comunidade demonstra foco em extensibilidade (plugins WASM, novos providers) e estabilidade operacional (fixes de bugs e configurações).

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24 horas.**

O projeto encontra-se em período de pré-release, acumulando contribuições que provavelmente serão empacotadas em versão futura. Recomenda-se monitorar o repositório para anúncios de release.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados (7 total)

| # | PR | Descrição | Impacto |
|---|-----|-----------|---------|
| [#7357](https://github.com/zeroclaw-labs/zeroclaw/pull/7357) | fix(channels): update image history fixture | Atualiza fixture de teste para usar `ChannelRuntimeContext::model_provider_ref`; remove campos obsoletos após refatoração de provider | **Manutenção** — corrige regressão em testes |
| [#7262](https://github.com/zeroclaw-labs/zeroclaw/pull/7262) | docs(providers): worked-example para 7 novos providers | Documentação de uso para Morph, GitHub Models, Upstage, Featherless, Arcee, Lambda AI e Inception | **Docs** — melhora DX |
| [#7011](https://github.com/zeroclaw-labs/zeroclaw/pull/7011) | docs(maintainers): define issue ownership path | Define fluxo de propriedade de issues para mantenedores | **Governança** — clareza de responsabilidades |
| [#7315](https://github.com/zeroclaw-labs/zeroclaw/pull/7315) | fix(bedrock): skip prompt caching para modelos incompatíveis | Resolve erro 400 em modelos Bedrock não-Claude/Nova | **Estabilidade** — reduz falhas em produção |
| [#7358](https://github.com/zeroclaw-labs/zeroclaw/pull/7358) | docs: quickstart → onboard | Renomeamento terminológico | **Docs** — consistência de nomenclatura |

### Destaque: Novos Providers e Plugins

- **#7260** — Adição de 7 providers OpenAI-compatíveis via schema v3, expandindo opções de modelos para usuários.
- **#7331** — Plugin ACE-Step para geração de música via modelo self-hosted.
- **#7328** — Plugin n8n para trigger de workflows.
- **#7327** — Plugin Nominatim para geocodificação via OpenStreetMap.
- **#7325** — Plugin Stable Diffusion WebUI para geração local de imagens.
- **#7326** — Plugin LanguageTool para verificação gramatical.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários + reações)

| # | Título | Comentários | 👍 | Tema Central |
|---|--------|-------------|----|--------------|
| [#4710](https://github.com/zeroclaw-labs/zeroclaw/issues/4710) | Better LOGO of Zeroclaw | 11 | 2 | **Branding/Design** |
| [#5146](https://github.com/zeroclaw-labs/zeroclaw/issues/5146) | Token consumption minimization via skill compilation | 9 | 1 | **Otimização de custos** |
| [#3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642) | Full docker image | 9 | 3 | **DevOps/Usabilidade** |
| [#2503](https://github.com/zeroclaw-labs/zeroclaw/issues/2503) | Where is napcat channel | 9 | 0 | **Canais de comunicação** |
| [#2767](https://github.com/zeroclaw-labs/zeroclaw/issues/2767) | Multi-Agent Routing | 6 | **9** | **Arquitetura multi-agente** |
| [#3566](https://github.com/zeroclaw-labs/zeroclaw/issues/3566) | A2A Protocol Support | 6 | **7** | **Interoperabilidade** |

### Análise dos Temas

**Arquitetura e Interoperabilidade (maior interesse):** As issues #2767 (Multi-Agent Routing) e #3566 (A2A Protocol) lideram em 👍, indicando que a comunidade prioriza capacidades multi-agente e comunicação entre agentes. O suporte ao protocolo A2A da Linux Foundation permitiria integração comNanoClaw, OpenClaw e outros agentes compatíveis.

**Custo e Eficiência:** A issue #5146 sobre minimização de consumo de tokens via skill compilation reflete preocupação crescente com custos operacionais em ambientes de produção.

**Barreira de Entrada:** A solicitação de imagem Docker "full" (#3642) e a confusão sobre canais (#2503) indicam necessidade de melhorar onboarding para usuários não-técnicos.

---

## 5. Bugs e Estabilidade

### Bugs Reportados por Severidade

| Severidade | Count | Issues Críticas |
|------------|-------|-----------------|
| **S0** (data loss/security) | 1 | [#4627](https://github.com/zeroclaw-labs/zeroclaw/issues/4627) — file_write silenciosamente falha; arquivos invisíveis no filesystem |
| **S1** (workflow blocked) | 2 | [#4879](https://github.com/zeroclaw-labs/zeroclaw/issues/4879) — Gemini CLI OAuth quebrado; [#5155](https://github.com/zeroclaw-labs/zeroclaw/issues/5155) — Delegate agents ignoram prompt_injection_mode |
| **S2** (degraded) | 3 | [#4880](https://github.com/zeroclaw-labs/zeroclaw/issues/4880) — context_compression não triggered em daemon; [#5122](https://github.com/zeroclaw-labs/zeroclaw/issues/5122) — web_fetch com Private IPs; [#4848](https://github.com/zeroclaw-labs/zeroclaw/issues/4848) — MCP não funciona |
| **S3** (minor) | 1 | [#4873](https://github.com/zeroclaw-labs/zeroclaw/issues/4873) — Feishu chama LLM ao invés de Agent |

### Bugs Já Resolvidos (Closed)

- **#4827** — Enable auto_compact_history em channel mode ✅
- **#4703** — Uso de QWEN_OAUTH_REFRESH_TOKEN ✅
- **#5122** — web_fetch allowed_private_hosts list (agora in-progress) 🔄

### Alerta Prioritário

> **[#4627](https://github.com/zeroclaw-labs/zeroclaw/issues/4627) — file_write tool silently fails:** Severidade S0. Arquivos escritos reportam sucesso mas permanecem invisíveis no host. Risco de perda de dados e implicações de segurança em ambiente sandbox.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features de Alta Prioridade (p1/p2, risco alto)

| # | Feature | Tags | Interesse |
|---|---------|------|-----------|
| [#3767](https://github.com/zeroclaw-labs/zeroclaw/issues/3767) | Cross-channel TOTP gate para comandos críticos | `security:policy`, `tool:shell` | Admin 2FA |
| [#4627](https://github.com/zeroclaw-labs/zeroclaw/issues/4627) | (Bug S0) file_write invisível | `security:docker` | **Crítico** |
| [#4879](https://github.com/zeroclaw-labs/zeroclaw/issues/4879) | Gemini CLI OAuth | `provider:gemini` | **S1** |
| [#3566](https://github.com/zeroclaw-labs/zeroclaw/issues/3566) | A2A Protocol Support | `agent`, `gateway`, `interop` | 7 👍 |
| [#2767](https://github.com/zeroclaw-labs/zeroclaw/issues/2767) | Multi-Agent Routing | `agent`, `runtime`, `memory` | 9 👍 |
| [#5146](https://github.com/zeroclaw-labs/zeroclaw/issues/5146) | Token minimization via skill compilation | `agent`, `runtime`, `skills` | 1 👍 |
| [#5145](https://github.com/zeroclaw-labs/zeroclaw/issues/5145) | send_channel_message tool | `channel`, `tool` | Direto outbound |
| [#5127](https://github.com/zeroclaw-labs/zeroclaw/issues/5127) | bubblewrap: writable paths + network | `security:bubblewrap` | Sandbox flexibility |
| [#4668](https://github.com/zeroclaw-labs/zeroclaw/issues/4668) | MariaDB memory backend | `memory:backend` | Produção-ready |
| [#3672](https://github.com/zeroclaw-labs/zeroclaw/issues/3672) | Workspace file/memory change history | `tool:file`, `tool:memory` | Auditoria |

### Sinais de Roadmap

1. **Extensibilidade via plugins WASM:** Diversos PRs (#7331, #7328, #7327, #7325, #7326) demonstram estratégia de plugin ecosystem via Extism.
2. **Schema v3 Providers:** Adição de 7 providers indica evolução da arquitetura de providers.
3. **Multi-agência:** A combinação de #2767 + #3566 sugere direção para arquiteturas distribuídas.
4. **Segurança avançada:** TOTP gating, LeakDetector configurável, secrets em http_request (#7354).

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Categoria | Descrição | Impacto |
|-----------|-----------|---------|
| **Onboarding complexo** | Imagem Docker não inclui features habilitadas por padrão; usuários não-técnicos enfrentam barreira |用户体验 |
| **Confusão de canais** | Usuários não encontram opção napcat/OneBot (#2503) | Configuração |
| **Custo operacional** | Skill compilation gera prompts massivos, aumentando custos com LLMs cloud | **Financeiro** |
| **Integração limitada** | MCP expõe apenas tools; resources e prompts não suportados (#4467) | Ecossistema |
| **Logs poluem output** | zeroclaw loga em stdout, quebrando piping de comandos (#4721) | CLI usability |
| **Memória production-ready** | SQLite insuficiente; PostgreSQL nem sempre opção; MariaDB desejado (#4668) | Deploy |

### Cenários de Uso Emergentes

- **Self-hosted music generation** (ACE-Step plugin)
- **Local image generation** (Stable Diffusion WebUI)
- **Workflow automation** (n8n integration)
- **Geocoding privado** (Nominatim self-hosted)
- **Grammar checking offline** (LanguageTool self-hosted)

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Estagnadas

| # | Título | Status | Tempo desde Update | Prioridade |
|---|--------|--------|-------------------|------------|
| [#4710](https://github.com/zeroclaw-labs/zeroclaw/issues/4710) | Better LOGO | OPEN | 2026-06-07 (comentários ativos) | p2 |
| [#2503](https://github.com/zeroclaw-labs/zeroclaw/issues/2503) | napcat channel | OPEN | 2026-06-07 | p2 |
| [#3696](https://github.com/zeroclaw-labs/zeroclaw/issues/3696) | Pre/post message hooks | OPEN | 2026-06-07 | p2 |
| [#3672](https://github.com/zeroclaw-labs/zeroclaw/issues/3672) | Workspace change history | OPEN | 2026-06-07 | p2 |
| [#4627](https://github.com/zeroclaw-labs/zeroclaw/issues/4627) | file_write silently fails | **IN-PROGRESS** | 2026-06-07 | **p1/S0** |
| [#3767](https://github.com/zeroclaw-labs/zeroclaw/issues/3767) | TOTP gate | IN-PROGRESS | 2026-06-07 | p1 |

### Issues com Etiqueta "help wanted" (solicitando contribuição)

| # | Título | Ajuda Solicitada |
|---|--------|-------------------|
| [#4721](https://github.com/zeroclaw-labs/zeroclaw/issues/4721) | Log to stderr | Implementação |
| [#4853](https://github.com/zeroclaw-labs/zeroclaw/issues/4853) | Installing skills from .well-known URI | Padrão/Implementação |
| [#4467](https://github.com/zeroclaw-labs/zeroclaw/issues/4467) | Add MCP resource/prompt support | Implementação |

---

## Métricas Resumidas (2026-06-08)

| Indicador | Valor | Tendência |
|-----------|-------|-----------|
| Issues ativas (24h) | 31 | Neutra |
| Issues fechadas (24h) | 19 | Positiva |
| PRs abertos | 43 | Alta atividade |
| PRs merged/fechados | 7 | Fluxo constante |
| Novas releases | 0 | Em preparação |
| Bugs S0-S1 | 3 | **Atenção** |
| Features p1/p2 abertas | ~15 | Pipeline robusto |

---

*Relatório gerado automaticamente com base em dados do GitHub de 2026-06-08. Para atualizações em tempo real, consulte [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw).*

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*