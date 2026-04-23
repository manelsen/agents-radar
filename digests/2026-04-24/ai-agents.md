# Resumo diário do ecossistema de agentes de IA 2026-04-24

> Issues: 9 | PRs: 1 | Projetos cobertos: 7 | Gerado em: 2026-04-23 20:46 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório do Projeto NullClaw — 2026-04-24

---

## 1. Panorama do Dia

O projeto NullClaw mantém atividade moderada com **9 issues atualizadas** nas últimas 24h, das quais 3 foram fechadas. A comunidade demonstra engajamento contínuo, especialmente em problemas de configuração de canais (Matrix/Telegram). Foi aberta **1 pull request** para melhoria de interface, mas nenhuma release foi publicada hoje. A taxa de fechamento de issues (33%) indica resolução ativa de problemas, embora issues antigas sobre Matrix (#39, #606) continuem gerando reincidência de reports.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

O projeto encontra-se em período sem выпуска de versões estáveis, o que pode impactar usuários aguardando correções pendentes.

---

## 3. Progresso do Projeto

### PR em Andamento

| # | Título | Autor | Status | Impacto |
|---|--------|-------|--------|---------|
| [#863](https://github.com/nullclaw/nullclaw/pull/863) | feat(capabilities): add colored table format for channels with TTY detection | manelsen | ABERTA | Melhora a experiência do usuário no CLI com formatação visual de capacidades |

**Análise:** O PR #863 adiciona formatação tabular colorida para o comando `nullclaw capabilities`, com detecção de TTY e codificação semântica de cores (verde=habilitado, amarelo=não configurado, vermelho=desabilitado). Representa uma melhoria de usabilidade significativa para configuração de canais.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| # | Título | Comentários | Status | Tema Principal |
|---|--------|-------------|--------|----------------|
| [#638](https://github.com/nullclaw/nullclaw/issues/638) | otel diagnostics issue | 10 | FECHADA | Integração OpenTelemetry |
| [#864](https://github.com/nullclaw/nullclaw/issues/864) | Matrix channel configuration fail | 3 | ABERTA | Configuração de canais |
| [#39](https://github.com/nullclaw/nullclaw/issues/39) | Matrix configuration not recognized? | 3 | FECHADA | Configuração de canais |
| [#339](https://github.com/nullclaw/nullclaw/issues/339) | Android install issues | 3 | ABERTA | Instalação mobile |
| [#606](https://github.com/nullclaw/nullclaw/issues/606) | Matrix has many issues | 3 | FECHADA | Funcionalidade Matrix |

**Análise:** A **integração OpenTelemetry** (#638) gerou maior discussão (10 comentários), indicando demanda por observabilidade. Configuração de Matrix emerge como problema recorrente — a issue #864 foi aberta ontem e já acumula 3 comentários, demonstrando urgência. A reabertura de #39 confirma que a solução anterior pode ter sido incompleta.

---

## 5. Bugs e Estabilidade

### Issues Críticas Abertas

| # | Título | Severidade | Cenário |
|---|--------|------------|---------|
| [#339](https://github.com/nullclaw/nullclaw/issues/339) | Android install issues | **ALTA** | Build falha em Termux/Android |
| [#427](https://github.com/nullclaw/nullclaw/issues/427) | Cannot use a custom skill | **ALTA** | Skills customizados não funcionam como ferramentas |
| [#864](https://github.com/nullclaw/nullclaw/issues/864) | Matrix channel misconfiguration | **ALTA** | Respostas Telegram em vez de Matrix |
| [#865](https://github.com/nullclaw/nullclaw/issues/865) | CLI ctrl characters | **MÉDIA** | Caracteres de controle no terminal |
| [#866](https://github.com/nullclaw/nullclaw/issues/866) | curl post fails | **MÉDIA** | Requisições HTTP bloqueadas mesmo na allowlist |

**Priorização sugerida:** A issue #339 no Android representa barreira de entrada para usuários mobile. A #427 afeta diretamente a extensibilidade do projeto via skills customizados.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Demandas

| # | Título | Tipo | Relevância |
|---|--------|------|------------|
| [#867](https://github.com/nullclaw/nullclaw/issues/867) | Provide a fully working example config.json file | **ENHANCEMENT** | Documentação |
| [#863](https://github.com/nullclaw/nullclaw/pull/863) | Colored table format for capabilities | **FEATURE** | UX/CLI |

**Análise:** A issue #867 destaca falha crítica na DX (Developer Experience) — a ausência de config.json funcional exemplar. Isso sugere necessidade de melhorar onboarding. A feature de tabela colorida (#863) sinaliza interesse em CLI mais amigável.

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais Identificadas

1. **Configuração de Canais Inviável** — Usuários reportam impossibilidade de configurar Matrix (#864, #39) e respostas enviadas ao canal errado. A documentação insuficiente é citação direta.

2. **Onboarding Quebrado** — O config.json padrão é descrito como "crippled so badly" (issue #867), indicando barreira significativa para novos usuários.

3. **Instalação Android Não Funcional** — Termux+Android gera erro em build.zig.zon (#339), bloqueando uso mobile.

4. **CLI Imprecisa** — Caracteres de controle exibidos em vez de navegação funcional no terminal (#865).

### Cenários de Uso Reportados
- Agente rodando em containers Podman separados com coleta de telemetria
- Configuração de homeserver Matrix para comunicação em rooms
- Execução via Termux em dispositivos Android

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Em Espera

| # | Título | Criado | Atualizado | Dias Inativo | Prioridade |
|---|--------|--------|------------|--------------|------------|
| [#339](https://github.com/nullclaw/nullclaw/issues/339) | Android install issues | 2026-03-06 | 2026-04-23 | ~49 dias | ALTA |
| [#427](https://github.com/nullclaw/nullclaw/issues/427) | Cannot use a custom skill | 2026-03-11 | 2026-04-23 | ~44 dias | ALTA |

**Recomendação:** As issues #339 e #427 ultrapassaram 40 dias sem resolução, sugerindo necessidade de triagem. Ambas afetam funcionalidades core (build mobile e extensibilidade). Sugere-se classificação de dificuldade técnica para alocação de recursos apropriados.

---

## Métricas Resumidas

| Indicador | Valor |
|-----------|-------|
| Issues ativas abertas | 6 |
| Issues fechadas (24h) | 3 |
| Taxa de fechamento | 33% |
| PRs abertas | 1 |
| PRs merged | 0 |
| Releases | 0 |
| Comments em issues quentes | 19 |
| Issues críticas em aberto | 2 |

---

*Relatório gerado em 2026-04-24 com base em dados do GitHub de [nullclaw/nullclaw](https://github.com/nullclaw/nullclaw).*

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo — Ecossistema Open Source de Agentes de IA

**Data de Referência:** 2026-04-24 | **Projetos Analisados:** 8

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source demonstra maturidade crescente com dois polos distintos de desenvolvimento: **Hermes Agent, CoPaw, e ZeroClaw** lideram em volume de atividade (50 issues + 50 PRs/24h), enquanto **NullClaw** permanece em ritmo mais contido. A tendência técnica mais evidente é a convergência para problemas similares — gerenciamento de memória em sessões longas, integrações multi-canal (Matrix, WhatsApp, Telegram), e estabilidade de providers de IA — porém com abordagens arquiteturais divergentes. A maioria dos projetos está em fase de estabilização após expansões rápidas, evidenciada pelos múltiplos releases pendentes e bloqueadores identificados. O mercado sinaliza demanda por observabilidade (OpenTelemetry), resiliência enterprise (account stacking, multi-provider), e experiência de desenvolvedor aprimorada (onboarding, CLI, MCP).

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | Releases | Bugs Críticos | Saúde |
|---------|--------------|-----------|----------|--------------|-------|
| **Hermes Agent** | 50 | 50 | 0 | 4 P1 abertas | 🟢 Alta |
| **CoPaw** | 50 | 50 | 2 | 3 críticos | 🟢 Alta |
| **ZeroClaw** | 50 | 39 | 0 | 5 S0-S1 | 🟡 Estabilização |
| **IronClaw** | 35 | 50 | 0 | 7 P1-P2 | 🟢 Alta |
| **PicoClaw** | 34 | 44 | 1 nightly | 3 críticos | 🟢 Alta |
| **NanoBot** | 12 | 22 | 0 | 2 altos | 🟢 Alta |
| **NullClaw** | 9 | 1 | 0 | 2 altos | 🟡 Moderada |

**Observações:**
- **Volume não equivale a maturidade**: Hermes Agent e CoPaw lideram em volume mas carregam mais bugs críticos proporcionalmente
- **ZeroClaw** demonstra padrão de "feature freeze" com 5 bugs S0-S1 bloqueando v0.7.4
- **NullClaw** é claramente menor em escala, porém com comunidade engajada em problemas específicos (CLI, Matrix)

---

## 3. Posicionamento do Projeto Principal

*Considerando Hermes Agent como "principal" por volume de atividade:*

| Dimensão | Hermes Agent | Pares |
|----------|--------------|-------|
| **Provedores suportados** | 12+ (OpenRouter, Anthropic, Bedrock, Ollama, DashScope) | PicoClaw (similar); CoPaw (foco local) |
| **Multi-agente** | Paralelismo limitado (não há arch formal) | IronClaw (missions orchestrator) |
| **CLI maturity** | Avançada — /usage, /skills, /clarify hooks | PicoClaw (CLI mais jovem) |
| **Governança de skills** | Skill graph manifest + linting (#14706) | ZeroClaw (registry-based); IronClaw (WASM tools) |
| **Comunidade** | 15+ 👍 em issue de auth (evidência de adoção) | — |

**Vantagens Competitivas:**
1. **Provider routing flexível** — maior diversidade de backends testados
2. **Hooks system expandido** — `on_clarify`, `on_clarify_response`, `gateway:message_received`
3. **Model discovery dinâmico** — GPT-5.5 adicionado via OAuth live discovery (#14720)

**Dívida Técnica Identificada:**
- 3 PRs concorrentes (#14718, #14719, #14676) para mesmo problema de "bare custom provider" indica falta de ownership
- Issues P1 abertas sem workaround claro (Matrix sync, Windows/Git Bash)

---

## 4. Focos Técnicos Compartilhados

Os 8 projetos convergem em **cinco áreas técnicas críticas** que representam os verdadeiros desafios do domínio:

### 4.1 Gerenciamento de Memória e Histórico

| Projeto | Abordagem |
|---------|-----------|
| **NanoBot** | Limita "Recent History" a 32K chars; remove `_cap_consolidation_boundary` |
| **ZeroClaw** | SQLite FTS index stale em streaming; `cancel_tokens` HashMap leak (#5835) |
| **PicoClaw** | Memory system integration request (mem0, Supermemory) |
| **IronClaw** | Gateway state convergence epic — frontend como função pura do backend |

**Conclusão:** O problema de "prompt bloat" em sessões longas é universal. NanoBot resolveu hoje com bound de 32K; ZeroClaw ainda combate vazamentos.

### 4.2 Estabilidade de Canais (Matrix/WhatsApp/Telegram)

| Projeto | Problema Dominante |
|---------|-------------------|
| **NullClaw** | Matrix configuration não reconhecida (#864) |
| **Hermes Agent** | Matrix bot sem inbound events (#12614); WhatsApp markdown hint errado (#12224) |
| **PicoClaw** | WhatsApp LID-migrated accounts drop messages (#2540); Telegram silent failures (#2903) |
| **IronClaw** | Telegram response too long fails silently (#2903) |
| **ZeroClaw** | Canal napcat/OneBot confuso (#2503) |

**Padrão:** Problemas de channel specificity indicam que adapters são frágil e precisam de test coverage mais robusto.

### 4.3 Provider Routing e Multi-Provider

| Projeto | Feature | Status |
|---------|---------|--------|
| **PicoClaw** | Ollama cloud credentials (#2225); Account stacking (API key rotation) (#2408) | Solicitado |
| **Hermes Agent** | Bare "custom" provider routing broken (#14676) | Bug P1 |
| **ZeroClaw** | Live model discovery + tier-based switching (#6044) | Merged |
| **CoPaw** | Context length em Ollama/LMStudio corrigido (#1427) | Resolvido |

### 4.4 Observabilidade

| Projeto | Feature | Progresso |
|---------|---------|-----------|
| **NanoBot** | OpenTelemetry tracing (Langfuse/LangSmith) | PR #3173 em review |
| **Hermes Agent** | Model exposure via /v1/models (#5261) | PR aberto |
| **NullClaw** | Integração OpenTelemetry diagnostics (#638) | 10 comentários |
| **ZeroClaw** | Log de input/output completo do LLM (#5504) | Solicitado |

### 4.5 MCP (Model Context Protocol) e Extensibilidade

| Projeto | Status |
|---------|--------|
| **PicoClaw** | Suite CLI MCP completa merged (#2641) |
| **CoPaw** | MCP causa freezes/crashes — prioridade crítica |
| **IronClaw** | WASM tool dispatch quebrado — corrigido (#2883) |
| **ZeroClaw** | Bridge Extism (Microkernel RFC #5574) em progresso |

---

## 5. Análise de Diferenciação

| Projeto | Foco Primário | Público-Alvo | Arquitetura Distintiva |
|---------|---------------|--------------|------------------------|
| **Hermes Agent** | Provider diversity, model discovery | Devs avançados, multi-cloud | Hooks system, skill graph |
| **IronClaw** | Multi-tenant, missions orchestration | Enterprise, hosted setups | Engine v2, typed content |
| **PicoClaw** | Streaming em tempo real, Bedrock | AWS-native, produção | `StreamingProvider` interface |
| **ZeroClaw** | WASM plugins, segurança runtime | Devs de plugins, SOC2 | Microkernel + Extism bridge |
| **NanoBot** | Memória session, history pollution | Usuários de sessões longas | History.jsonl bounded |
| **CoPaw** | Desktop app, Windows compatibility | Desktop-first, corporativas | pywebview, tray icon |
| **NullClaw** | CLI experience, channel config | Ops/DevOps | TTY-aware colored output |

### Divergência Arquitetural

**Abordagem "Monolith Modular" vs "Microkernel":**
- **ZeroClaw** (microkernel) — plugins WASM isolados via Extism, schema-driven config
- **IronClaw** (modular monolith) — engine v2 como feature flag, WASM como tool runtime
- **CoPaw** (monolith) — desktop app com canais integrados

**Abordagem de Providers:**
- **Hermes Agent** — roteamento por fallback chain, discovery dinâmico
- **PicoClaw** — interface `StreamingProvider` canônica, tier-based switching
- **NanoBot** — modelo único por sessão, history como estado

---

## 6. Tração e Maturidade da Comunidade

### Ranking por Velocidade de Iteração

| Posição | Projeto | Métrica | Interpretação |
|---------|---------|---------|---------------|
| 🥇 | **NanoBot** | 22 PRs merged/24h | Foco estreito permite velocidade máxima |
| 🥈 | **PicoClaw** | 6 merges + nightly | Entrega contínua, CI/CD maduro |
| 🥉 | **IronClaw** | 4 merges + promoções staging | Pipeline automatizado funcionando |
| 4 | **ZeroClaw** | 3 merges | Freeze inteligente para estabilização |
| 5 | **CoPaw** | 2 releases + merges | Ciclo de release formalizado |
| 6 | **Hermes Agent** | 2 merges | Volume alto, mas PRs menores/fragmentados |
| 7 | **NullClaw** | 0 merges | Baixa cadência, mas issues fechadas (33%) |

### Indicadores de Maturidade

| Indicador | Líder | Rezagado |
|-----------|-------|----------|
| **Documentação funcional** | CoPaw (onboarding PRs) | NullClaw (#867: "crippled config.json") |
| **Test coverage implícito** | PicoClaw (CI parallel builds) | Hermes Agent (3 PRs concorrentes = baixa ownership) |
| **Release discipline** | CoPaw (v1.1.3.post1 + v1.1.4-beta.1) | ZeroClaw (freeze p/ v0.7.4) |
| **Onboarding de contribuidores** | CoPaw (3 first-time contributors) | — |
| **Comunidade auto-gerenciada** | Hermes Agent (#6475 com 15 👍) | NullClaw (pouca Votes/Reações) |

### Issues Stale como Proxy de Technical Debt

| Projeto | Issues >40 dias | Prioridade |
|---------|-----------------|------------|
| **NullClaw** | 2 (#339 Android, #427 custom skills) | ALTA |
| **NanoBot** | 2 (#162 session mgmt, #173 API key cache) | ⚠️ Stale |
| **ZeroClaw** | 3 (#2503, #2973, #2998) | Sem triagem |
| **Hermes Agent** | 1 (#3777, 26 dias) | P3, baixa |

**Conclusão:** NullClaw tem menor volume mas maior proporção de dívida antiga; ZeroClaw demonstra acumulação em features enterprise.

---

## 7. Sinais de Tendência

### 7.1 Enterprise Readiness como Diferenciador

**Evidência:**
- **Account stacking** (PicoClaw #2408): 9 comentários — rotação automática de API keys para evitar rate limits
- **Backup automático** (Hermes Agent #12238): 4 👍 — versionamento de dados do agente
- **OAuth lifecycle** (IronClaw): múltiplos bugs de re-autenticação indicam que enterprise authentication é subestimada
- **Hosted vs self-hosted** (IronClaw #2920): persistência de dados em SQLite dentro de Docker

**Implicação:** A próxima fronteira não é "agente funciona", mas "agente escala em produção com compliance".

### 7.2 Multimodalidade como Feature Table Stakes

**Evidência:**
- PicoClaw: áudio nativo para LLMs multimodais (#2626)
- PicoClaw: LaTeX rendering via CodeCogs (#3411)
- CoPaw: multimodal messages PR (#3509)
- Hermes Agent: MCP suite para code/doc/data retrieval (#10409)

**Implicação:** Agentes monomodais (texto-only) perderão competitividade em 12-18 meses.

### 7.3 CLI como Interface Primária (vs WebUI)

**Evidência:**
- PicoClaw: suite CLI MCP completa (`picoclaw mcp`)
- NullClaw: TTY-aware colored table format (#863)
- IronClaw: standalone gateway lifecycle commands (#2899)
- ZeroClaw: `zeroclaw memory reindex` CLI

**Implicação:** A "CLI-native" positioning (sem Electron/desktop) é vantagem de simplicidade.

### 7.4 Schema/Config como Fonte de DX Debt

**Evidência:**
- **NullClaw**: config.json "crippled so badly" (#867)
- **NanoBot**: JSON → TOML migration request (#3402) com 7 comentários
- **ZeroClaw**: Schema v3 como bloqueador de release (#5947)
- **CoPaw**: SQLite database errors em memory_search

**Implicação:** Config management é technical debt invisível que impacta onboarding mais que features avançadas.

### 7.5 WASM como Futuro da Extensibilidade

**Evidência:**
- **IronClaw**: WASM tool dispatch (corrigido #2883); user-authored WASM tools (#2897)
- **ZeroClaw**: Extism bridge como última peça do microkernel (#5912)
- **NanoBot**: MCP como alternativa (não WASM-native)

**Implicação:** WASM emerge como sandboxing padrão para tools não-trusted, mas MCP ainda domina para integração server-to-server.

### 7.6 China Cloud Providers Entrando no Radar

**Evidência:**
- Hermes Agent: DashScope/Bailian endpoints (#12220, #12272)
- IronClaw: Aliyun BaiLian Coding Plan support (#1446)

**Implicação:** Diversificação geopolítica de providers é tendência, especialmente para mercados APAC.

---

## Síntese Executiva

| Dimensão | Tendência | Confiança |
|----------|-----------|-----------|
| Gerenciamento de memória | Todos resolvendo "prompt bloat" independentemente | Alta |
| Multi-channel stability | Problema não resolvido em nenhum projeto | Alta |
| Enterprise features | Account stacking, OAuth, backup emergindo | Média |
| Config/DX | Schema migrations e TOML adoption como próximo passo | Média |
| Extensibilidade | WASM (IronClaw, ZeroClaw) vs MCP (NanoBot, CoPaw) —两大路线 | Alta |
| Mercado | China cloud providers + multimodal como diferenciadores emergentes | Média |

**Recomendação para Desenvolvedores:**
- Se necessidade de **velocidade de iteração** → NanoBot (menor escopo, maior cadência)
- Se necessidade de **provider diversity** → Hermes Agent ou PicoClaw
- Se necessidade de **enterprise/hosted** → IronClaw
- Se necessidade de **plugins extensíveis** → ZeroClaw

**Recomendação para Decisores Técnicos:**
- Evitar projetos com >3 bugs críticos S0-S1 simultâneos sem timeline de resolução visível
- Priorizar projetos com CI/CD automatizado e releases nightlies para adoção early-stage
- Monitorar ZeroClaw (schema v3) e NanoBot (TOML migration) como indicadores de maturidade de DX

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-04-24

---

## 1. Panorama do Dia

O projeto NanoBot apresenta **alta atividade** nesta data, com 22 PRs e 12 issues atualizados nas últimas 24 horas. Não houve lançamentos de novas versões, mas uma quantidade significativa de PRs foi mesclada, focando principalmente em **correções críticas de estabilidade** — especialmente related to memory management e history pollution. A comunidade demonstra engajamento ativo com issues de bugs e requests de features, sugerindo um ciclo de desenvolvimento saudável. O foco principal do dia foi a correção de problemas que causavam crescimento descontrolado do arquivo `history.jsonl` e consumo excessivo de memória.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24 horas.**

O projeto não publicou novas versões desde a última atualização. Isso indica que as correções recentes (PRs #3412, #3414, #3415) provavelmente serão incluídas na próxima release, possivelmente uma versão `nightly` ou `post3` para a série v0.1.5.

---

## 3. Progresso do Projeto

### PRs Críticas Mescladas/Fechadas Hoje

| PR | Descrição | Impacto |
|---|---|---|
| [#3412](https://github.com/HKUDS/nanobot/pull/3412) | **fix(agent): prevent history.jsonl bloat** | **Alto** — Remove `_cap_consolidation_boundary` que causava travamento em sessões longas (200+ iterações) |
| [#3415](https://github.com/HKUDS/nanobot/pull/3415) | **fix(agent): bound remaining memory/history pollution paths** | **Alto** — Corrige 4 vazamentos adjacentes na cadeia de poluição do history.jsonl |
| [#3414](https://github.com/HKUDS/nanobot/pull/3414) | **fix(agent): cap recent history section in system prompt** | **Alto** — Limita seção "Recent History" a 32K chars para evitar prompt bloat |
| [#3413](https://github.com/HKUDS/nanobot/pull/3413) | **Cherry-pick de #3412 para branch nightly** | Mantém consistência entre versões |
| [#3234](https://github.com/HKUDS/nanobot/pull/3234) | **fix(email): guard against self-reply loop** | **Médio** — Previne loop infinito quando bot envia email para si mesmo (#3215) |
| [#3398](https://github.com/HKUDS/nanobot/pull/3398) | **feat(telegram): add inline keyboard buttons** | **Médio** — Suporte a botões inline no Telegram via CallbackQuery |
| [#2059](https://github.com/HKUDS/nanobot/pull/2059) | **feat(api): add lean unix-socket json-rpc channel** | **Médio** — Canal JSON-RPC via Unix socket para clientes externos |
| [#3264](https://github.com/HKUDS/nanobot/pull/3264) | **[duplicate] feat(config): add custom provider support** | Fecha issue #3264 com implementação duplicada já existente |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| Issue | Título | Comentários | Reações | Status |
|---|---|---|---|---|
| [#2892](https://github.com/HKUDS/nanobot/issues/2892) | Cron task mechanism — tarefas agendadas não executam após criação | 15 | 0 | Closed |
| [#2049](https://github.com/HKUDS/nanobot/issues/2049) | Missing ability to create skills | 13 | 0 | Closed |
| [#3402](https://github.com/HKUDS/nanobot/issues/3402) | Replace JSON with TOML for configuration | 7 | 0 | Closed |
| [#3407](https://github.com/HKUDS/nanobot/issues/3407) | Feature Request: Add file upload support in webUI | 4 | 0 | Closed |
| [#173](https://github.com/HKUDS/nanobot/issues/173) | Nanobot reusing old API key despite .config update | 4 | 0 | Closed (stale) |

### Análise dos Temas

**1. Mecanismo de Tarefas Cron (#2892)** — Usuários reportam que tarefas agendadas só executam após reiniciar o gateway, criando experiência inconsistente. Este é um **padrão de design** que deveria ser corrigido ou documentado.

**2. Capacidade de Criar Skills (#2049)** — Usuários dependem da habilidade de criar skills dinamicamente; a perda dessa funcionalidade após upgrade é regressão significativa.

**3. Migração JSON → TOML (#3402)** — Demanda recorrente da comunidade para arquivos de configuração mais legíveis. **Sinal forte de roadmap** para próxima versão major.

**4. Upload de Arquivos na WebUI (#3407)** — Feature request direto e útil para expandir casos de uso da interface web.

---

## 5. Bugs e Estabilidade

### Bugs Reportados Hoje

| Severidade | Issue | Descrição | Status |
|---|---|---|---|
| **🔴 Alta** | [#3410](https://github.com/HKUDS/nanobot/issues/3410) | **Large RAM consumption in v0.1.5.post2** — Uso memória subiu de ~200MB para ~600MB após upgrade | **OPEN** |
| **🔴 Alta** | [#3377](https://github.com/HKUDS/nanobot/issues/3377) | **Multi subagent repeated reply** — Agent pai envia múltiplas respostas quando subagents finalizam | Closed |
| **🟡 Média** | [#3406](https://github.com/HKUDS/nanobot/issues/3406) | **WhatsApp login fails after upgrade** — "Invalid token" após upgrade para v0.1.5.post2 | Closed |
| **🟡 Média** | [#3390](https://github.com/HKUDS/nanobot/issues/3390) | **Tool Call error "Sorry, I encountered an error"** — Erro ao limpar workspace no Telegram | **OPEN** |
| **🟢 Baixa** | [#3215](https://github.com/HKUDS/nanobot/issues/3215) | **Email loop (SMTP self-reply)** — Bot responde emails infinitamente | Closed (fix em #3234) |

### Avaliação de Estabilidade

**Regressões identificadas em v0.1.5.post2:**
- Consumo de memória tripled — diretamente relacionado ao novo "dream feature"
- Autenticação WhatsApp quebrada

**Problemas persistentes:**
- Tool call errors no Telegram ainda sem resolução clara
- Session management precário (#162) ainda não totalmente abordado

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Abertas com Alto Potencial

| PR | Feature | Escopo | Observações |
|---|---|---|---|
| [#3173](https://github.com/HKUDS/nanobot/pull/3173) | **OpenTelemetry tracing para LLM e tools** | Observabilidade | Suporte a Langfuse e LangSmith |
| [#3358](https://github.com/HKUDS/nanobot/pull/3358) | **Model presets para quick switching** | Configuração | Permite bundles de modelo + parâmetros |
| [#3408](https://github.com/HKUDS/nanobot/pull/3408) | **MGP sidecar para cross-session memory** | Memória | Integração com Memory Governance Protocol |
| [#3401](https://github.com/HKUDS/nanobot/pull/3401) | **Embeddings support para OpenAI-compatible APIs** | API | Adiciona endpoint `/v1/embeddings` |
| [#3403](https://github.com/HKUDS/nanobot/pull/3403) | **Project-manager skill** | Skills | Isolamento de contexto por projeto |
| [#3400](https://github.com/HKUDS/nanobot/pull/3400) | **Dream feature: controle de edição em USER.md/SOUL.md** | Dream | Controvérsia sobre auto-modificação |
| [#3411](https://github.com/HKUDS/nanobot/pull/3411) | **LaTeX rendering no Feishu via CodeCogs** | Canais | Sem dependências externas de API |
| [#2152](https://github.com/HKUDS/nanobot/issues/2152) | **WhatsApp voice message (STT + TTS)** | Canais | 2 👍 — Demanda orgânica da comunidade |

### Sinais de Roadmap Identificados

1. **Configuração**: Migração JSON → TOML (#3402) parece tendência clara
2. **Observabilidade**: Tracing via OpenTelemetry é prioridade de sistema
3. **Canais**: Foco em Feishu (LaTeX, emoji dinâmico) e WhatsApp (voice)
4. **Memória**: Governança de memória cross-session via MGP
5. **Skills**: Sistema de skills em evolução (#2049, #3403)

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Categoria | Problema | Frequência |
|---|---|---|
| **Estabilidade** | Upgrade causa regressions (RAM, WhatsApp, API key) | 🔴 Alta |
| **Configuração** | JSON é inadequado para config humana; necessidade de presets | 🟡 Média |
| **UX** | Tarefas cron não funcionam intuitivamente | 🟡 Média |
| **Skills** | Habilidade de criar skills foi removida/acidentalmente desabilitada | 🟡 Média |
| **Memory** | Session management muito primitivo (#162) | 🟢 Contínua |
| **Performance** | Memory bloat em sessões longas (history.jsonl) | 🔴 Resolvida hoje |

### Cenários de Uso Reportados

- **Multi-agent orchestration**: Usuários tentando coordenar múltiplos subagentes para tarefas paralelas → feedback de respostas duplicadas
- **Email automation**: Configuração SMTP/IMAP para automação de email → loops de auto-resposta
- **Feishu enterprise**: Demanda por rendering LaTeX e controles de emoji
- **WhatsApp pessoal**: Voice messages sendo pedido recorrente

### Satisfação Geral

**Pontos positivos:**
- WebUI considerada limpa e user-friendly (#3407)
- Projeto mantido ativamente com respostas rápidas da equipe
- Correções críticas sendo merged rapidamente (mesmo dia)

**Pontos de fricção:**
- Breaking changes em upgrades menores
- Documentação de config e features não acompanhar releases
- Configuração de provedores customizados ainda instável

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta/Ação Prolongada

| Issue | Criado | Dias | Prioridade | Problema |
|---|---|---|---|---|
| [#173](https://github.com/HKUDS/nanobot/issues/173) | 2026-02-05 | ~77 | ⚠️ Stale | API key cache não atualiza mesmo após config update |
| [#162](https://github.com/HKUDS/nanobot/issues/162) | 2026-02-05 | ~77 | 🟡 Aberta | Session management melhoras (multiple conversations, auto-expiration) |
| [#2049](https://github.com/HKUDS/nanobot/issues/2049) | 2026-03-15 | ~40 | 🔴 Closed | Skill-creator tool indisponível — **verificar se regressão foi corrigida** |
| [#2152](https://github.com/HKUDS/nanobot/issues/2152) | 2026-03-17 | ~38 | 🟡 Open | WhatsApp voice support — **não há PR ainda, precisa de owner** |

### Recomendações para Maintainers

1. **Revitalizar #162** — Session management é的技术 debt acumulando; comunidade espera solução
2. **Verificar #2049** — Confirmar se skill-creator foi realmente corrigido ou se regressão persiste
3. **Triage #173** — Issue stale com 77 dias; usuários ainda reportando problema similar
4. **Avaliar #2152** — Demanda orgânica com 2 👍; pode ser bom candidato para feature oficial

---

## Métricas Resumidas do Dia

| Métrica | Valor | Tendência |
|---|---|---|
| Issues ativas | 3 | Neutra |
| Issues fechadas | 9 | ↑ Alta |
| PRs abertas | 11 | Neutra |
| PRs mescladas/fechadas | 11 | ↑ Alta |
| Releases | 0 | — |
| Bugs críticos abertos | 2 (#3410, #3390) | Atenção |
| Features em desenvolvimento | 11 | ↑ Alta |

---

*Relatório gerado automaticamente com base em dados GitHub de 2026-04-24. Última sincronização: 24h.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-04-24

---

## 1. Panorama do Dia

O Hermes Agent registrou **alta atividade** em 24 de abril de 2026, com 50 issues e 50 PRs atualizados — indicando intensa movimentação tanto de relatórios quanto de contribuições. Dois bugs de alta severidade foram fechados (#6475, #14488), mas **nenhuma release foi publicada**, mantendo a base em v0.10.0. Os temas dominantes são **provider routing** (OpenRouter vs. custom), **estabilidade de integrações** (Matrix, WhatsApp, Discord) e **QUALIDADE DE UX** no CLI. A relação issue/PR está equilibrada (~1:1), sugerindo que a comunidade está ativamente reportando e corrigindo problemas em paralelo.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

A versão mais recente permanece **v0.10.0 (2026-04-16)**. O projeto está em ritmo de desenvolvimento ativo sem ciclo de release formalizado para o período analisado.

---

## 3. Progresso do Projeto

### PRs Fechados/Merged (2)

| # | Título | Impacto |
|---|--------|---------|
| [#14720](https://github.com/NousResearch/hermes-agent/pull/14720) | `feat(codex): add gpt-5.5 and wire live model discovery` | Adiciona GPT-5.5 ao catálogo e integra descoberta dinâmica de modelos via OAuth. **Fecha gap de model discovery.** |
| [#14706](https://github.com/NousResearch/hermes-agent/pull/14706) | `feat(skills): add boring skill graph v0` | Introduce skill graph manifest + linting, integrado ao prompt assembly e busca de skills. **Melhora governança de skills.** |

### PRs Abertos Relevantes (prioridade)

| # | Título | Área | Prioridade |
|---|--------|------|------------|
| [#14718](https://github.com/NousResearch/hermes-agent/pull/14718) | `fix(agent): map bare "custom" provider to named providers` | Agent | P2 |
| [#14719](https://github.com/NousResearch/hermes-agent/pull/14719) | `fix(runtime): resolve bare custom provider to loopback (#14676)` | Runtime | P2 |
| [#14721](https://github.com/NousResearch/hermes-agent/pull/14721) | `fix(bedrock): resolve context length via static table` | Bedrock | P2 |
| [#14723](https://github.com/NousResearch/hermes-agent/pull/14723) | `fix(cli): /usage with missing context_compressor` | CLI | P2 |
| [#14396](https://github.com/NousResearch/hermes-agent/pull/14396) | `add stateless claude cli inference transport` | Claude | P2 |

> **Observação**: Há **3 PRs concorrentes** atacando a mesma raiz — "bare custom provider routing" (#14718, #14719, #14676). Coordenação necessária para evitar merge conflicts.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| # | Título | Comentários | 👍 | Categoria |
|---|--------|-------------|----|-----------|
| [#6475](https://github.com/NousResearch/hermes-agent/issues/6475) | Anthropic Claude subscription auth returns 'You're out of extra usage' | 17 | 15 | **P1 Bug** (CLOSED) |
| [#12614](https://github.com/NousResearch/hermes-agent/issues/12614) | Bot does not receive messages on fresh Matrix setup | 16 | 0 | **P1 Bug** |
| [#11692](https://github.com/NousResearch/hermes-agent/issues/11692) | Receipts for self-improving agents: proving skill version → output | 8 | 0 | Feature/Governança |
| [#12238](https://github.com/NousResearch/hermes-agent/issues/12238) | Built-in Automatic Backup & Version Control for Agent Data | 3 | **4** | Feature |

### Análise de Demandas

1. **Autenticação e Billing (🔥🔥🔥)**: Issue #6475 (15 👍) evidencia frustração recorrente com auth Claude — indica que o workaround de restart/re-login não resolve. **Problema de resiliência de sessão.**

2. **Provider Routing (🔥🔥)**: Tema dominante — múltiplas issues sobre "custom provider" caindo para OpenRouter (#14676), fallback_model ignorando api_key (#12239), e problemas com DashScope/Alibaba (#12220, #12272). **Padrão de issues coordenadas** sugere que o resolver de providers precisa de refatoração.

3. **Skills e Self-Modification (#11692)**: Discussão conceitual sobre **provenance** em agentes auto-moficantes — demanda de governança, não funcionalidade imediata. Interessante sinal de usuários avançados.

4. **Backup/Versioning (#12238)**: Feature request com 4 👍 — evidência de **dores reais com perda de estado** do agente entre sessões. Boa candidada para roadmap.

---

## 5. Bugs e Estabilidade

### P1 — Críticos (2 abertos)

| # | Título | Severidade | Link |
|---|--------|------------|------|
| #12614 | Matrix bot: no inbound events, sync stalls | **P1** | [Issue](https://github.com/NousResearch/hermes-agent/issues/12614) |
| #14676 | bare 'custom' provider falls through to OpenRouter | **P1** | [Issue](https://github.com/NousResearch/hermes-agent/issues/14676) |
| #14665 | Context compaction leaks MEDIA directives + wrong intent | **P1** | [Issue](https://github.com/NousResearch/hermes-agent/issues/14665) |
| #12224 | WhatsApp platform hint says "do not use markdown" — factually wrong | **P1** | [Issue](https://github.com/NousResearch/hermes-agent/issues/12224) |

### P2 — Impacto Médio-Alto (12 abertas)

| # | Área | Título |
|---|------|--------|
| #14638 | Windows/Terminal | Git Bash backend exits 126 with empty output |
| #12239 | Config | fallback_model ignores api_key from config.yaml |
| #12243 | Docker | Dashboard fails in official Docker image (overlayfs) |
| #14713 | CLI/Skills | Slash-skill load failures queued as input instead of error |
| #14714 | CLI/Config | save_config_value writes to repo cli-config.yaml |
| #14715 | CLI | /usage crashes when context_compressor is None |

### P3 — Bugs Menores (destaque)

| # | Título | Link |
|---|--------|------|
| #3777 | RFC 2544 benchmark range (198.18.0.0/15) misclassified as private | [Issue](https://github.com/NousResearch/hermes-agent/issues/3777) |
| #14712 | CLI alias collision: /q resolves to quit, not queue | [Issue](https://github.com/NousResearch/hermes-agent/issues/14712) |

> **Padrão detectado**: Bug de estabilidade em **Windows** (Git Bash), **Docker**, e **CLI** dominam P2. Provider routing é a categoria com mais issues P1+P2 combinadas.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features com Engajamento ou P2+

| # | Título | Prioridade | Sinais de Roadmap |
|---|--------|------------|-------------------|
| [#12238](https://github.com/NousResearch/hermes-agent/issues/12238) | Built-in Automatic Backup & Version Control | **P3** | Demanda de backup nativo do ~/.hermes/ |
| [#11243](https://github.com/NousResearch/hermes-agent/issues/11243) | Native reasoning_effort support for Mistral AI | **P3** | Integração com capacidades de reasoning |
| [#11692](https://github.com/NousResearch/hermes-agent/issues/11692) | Receipts for self-improving agents (provenance) | **P3** | Governança de agentes auto-modificantes |
| [#10409](https://github.com/NousResearch/hermes-agent/issues/10409) | jMunch MCP suite — token-efficient code/doc/data retrieval | **P3** | Integração MCP |
| [#12220](https://github.com/NousResearch/hermes-agent/issues/12220) | Support Bailian/DashScope endpoints without /v1/models | **P2** | China cloud providers |

### PRs de Feature em Review

| # | Título | Impacto |
|---|--------|---------|
| [#14297](https://github.com/NousResearch/hermes-agent/pull/14297) | Delegation readiness doctor | Verificação de saúde pré-delegation |
| [#14396](https://github.com/NousResearch/hermes-agent/pull/14396) | Stateless Claude CLI inference transport + persisted model overrides | Persistência de overrides entre sessões |
| [#14602](https://github.com/NousResearch/hermes-agent/pull/14602) | New hooks: on_clarify, on_clarify_response, gateway:message_received | Sistema de hooks expandido |
| [#5261](https://github.com/NousResearch/hermes-agent/pull/5261) | Expose active configured models via /v1/models | API server model exposure |

> **Sinal de roadmap**: Foco em **persistence** (overrides, backups, version control), **provider diversity** (China cloud, Mistral reasoning), e **extensibility** (MCP, hooks).

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Categoria | Descrição | Evidência |
|-----------|-----------|-----------|
| **Auth/Sessão** | Autenticação Claude falha sem reason clara; restart não resolve | #6475 (15 👍) |
| **Provider Routing** | Usuários de Ollama/LM Studio/vLLM são direcionados para OpenRouter | #14676, #14718, #14719 |
| **Windows** | Hermes quebrado no ambiente Windows mais comum (Git Bash) | #14638 |
| **Docker** | Dashboard não funciona no container oficial | #12243 |
| **Perda de Estado** | Skills, memória e configuração se perdem; sem backup | #12238 (4 👍) |
| **UX/CLI** | Sequências de terminal vazam para input; comandosambíguos (/q) | #14692, #14712 |

### Cenários de Uso em Evidência

- **Agentes auto-modificantes**: Usuários avançados discutindo provenance e receipts (#11692)
- **Multi-plataforma**: Discord, WhatsApp, Matrix — todos com bugs de platform-specificity
- **Dev/Local**: Preferência forte por providers locais (custom, Ollama, LM Studio) sobre cloud

### Satisfação/Insatisfação

- **Frustração** com auth (P1) e provider routing (P1+P2) — 4+ issues do mesmo tema
- **Interesse** em features de governança (skills, provenance, backup)
- **CRÍTICO**: Nenhum workaround claro para issues P1 abertos (Matrix, custom provider)

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Stale

| # | Idade | Prioridade | Título |
|---|-------|------------|--------|
| [#3777](https://github.com/NousResearch/hermes-agent/issues/3777) | ~26 dias | **P3** | RFC 2544 benchmark range misclassified (SSRF protection) |
| [#7344](https://github.com/NousResearch/hermes-agent/issues/7344) | ~14 dias | **P3** | Expose live agent context to plugin tool handlers |
| [#9896](https://github.com/NousResearch/hermes-agent/pull/9896) | ~10 dias | — | fix(insights): count mixed tool usage (PR aberto, sem review) |
| [#10466](https://github.com/NousResearch/hermes-agent/pull/10466) | ~9 dias | — | fix(model): prefer direct providers over OpenRouter (PR, sem merge) |

### PRs Aguardando Review

| # | Idade | Título | Bloqueio |
|---|-------|--------|----------|
| [#9896](https://github.com/NousResearch/hermes-agent/pull/989

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório de Projeto: PicoClaw — 24 de abril de 2026

---

## 1. Panorama do Dia

O projeto PicoClaw apresenta **alta atividade de desenvolvimento** no período analisado. Foram registradas 34 issues atualizadas e 44 PRs, com 6 merge/fechamentos, demonstrando um ritmo intenso de contribuição. A comunidade aguarda a versão nightly `v0.2.7-nightly.20260423`, que consolida recentes avanços em provedores Bedrock, feedback de ferramentas e gerenciamento MCP. A base de issues permanece inteiramente aberta (34/34), sinalizando uma fila de demanda ativa mas sem acúmulo de pendências antigas. O ecossistema mantém forte foco em estabilidade de canais (WhatsApp, Telegram, QQ, Feishu) e expansão de provedores de IA.

---

## 2. Lançamentos

### Release Available
| Versão | Tipo | Data |
|--------|------|------|
| **v0.2.7-nightly.20260423.68ceb54b** | Nightly Build | 23/04/2026 |

**Changelog:** https://github.com/sipeed/picoclaw/compare/v0.2.7...main

**Nota:** Este é um build automatizado e pode ser instável. A build inclui as seguintes contribuições merged recentemente:
- Implementação de `StreamingProvider` para AWS Bedrock via ConverseStream API
- Correção de regressão no `tool-feedback` que afetava canais como Telegram
- Refatoração de CI para builds paralelos de macOS CGO launcher
- Fix de PID file para containers Docker
- Suite completa de gerenciamento MCP via CLI (`picoclaw mcp`)
- Suporte a áudio nativo para LLMs multimodais
- Suporte a Intel OpenVINO Model Server

**Breaking Changes:** Não identificados nesta versão nightly.

---

## 3. Progresso do Projeto

### PRs Fechados/Merged nas Últimas 24h

| # | PR | Tipo | Contribuidor | Impacto |
|---|-----|------|--------------|---------|
| #2640 | Dep: `aws-sdk-go-v2/service/bedrockruntime` v1.50.4 → v1.50.5 | dependencies | dependabot | Patch de segurança AWS SDK |
| #2642 | fix: PID=1 stale em PID file, govet shadow, .gitattributes | bugfix | BeaconCat | Estabilidade Docker |
| #2643 | ci: parallel macOS CGO launcher build, lowercase Docker tags | ci/build | BeaconCat | Infraestrutura de release |
| #2644 | feat(tool-feedback): separate message mode for chat feedback | bugfix | afjcjsbx | Correção de regressão em canais |
| #2645 | feat(bedrock): implement StreamingProvider | enhancement | loafoe | Streaming de tokens em tempo real |

### Destaques de Desenvolvimento

**#2645 — StreamingProvider para AWS Bedrock**
- Implementa interface `StreamingProvider` usando AWS ConverseStream API
- Adiciona `ChatStream` method com callback `onChunk` para entrega de tokens em tempo real
- https://github.com/sipeed/picoclaw/pull/2645

**#2641 — Suite CLI MCP Completa**
- Comandos CRUD: `show`, `add`, `list`, `remove`, `test`, `edit`
- Gerenciamento de servidores MCP sem edição manual de JSON
- https://github.com/sipeed/picoclaw/pull/2641

**#2626 — Áudio Nativo para LLMs Multimodais**
- Adiciona campo `Audio` a `protocoltypes.Message`
- Suporte a Multimodal LLMs como Gemini 1.5
- https://github.com/sipeed/picoclaw/pull/2626

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários)

| # | Título | Comentários | Tipo | Link |
|---|--------|-------------|------|------|
| #2408 | [Feature] LLM Account Stacking (Cartridge-Belt) | 9 | enhancement | [Issue](https://github.com/sipeed/picoclaw/issues/2408) |
| #2225 | [Feature] Ollama cloud credentials | 8 | enhancement | [Issue](https://github.com/sipeed/picoclaw/issues/2225) |
| #2468 | [BUG] Scheduled Task Fails to Execute | 6 | bug | [Issue](https://github.com/sipeed/picoclaw/issues/2468) |
| #1757 | [BUG] Cron task causes channel error | 5 | bug | [Issue](https://github.com/sipeed/picoclaw/issues/1757) |
| #2377 | [BUG] exec and logs emit unsafe terminal characters | 5 | bug | [Issue](https://github.com/sipeed/picoclaw/issues/2377) |
| #2465 | [Feature] SMTP email channel for scheduled tasks | 5 | enhancement | [Issue](https://github.com/sipeed/picoclaw/issues/2465) |

### Análise das Demandas Principais

**1. LLM Account Stacking (#2408)** — Demanda por rotação automática de chaves API em caso de rate limits/quotas. Este é um pedido de resiliência para uso em produção, indicando adoção corporativa. A comunidade busca evitar interrupções de serviço quando um provedor atinge limites.

**2. Ollama Cloud Credentials (#2225)** — Suporte nativo para Ollama em nuvem (ollama.com/cloud), diferenciando do Ollama local. Indica expansão do caso de uso para provedores gerenciados.

**3. Problemas de Cron (#2468, #1757)** — Erro "scheduling command execution is restricted to internal channels" indica uma regressão ou mudança de segurança que impacta automações. Alta prioridade operacional.

**4. Segurança de Terminal (#2377)** — ANSI control characters e Unicode bidi em output podem ser usados para spoofing visual. Preocupação legítima de segurança para operadores.

---

## 5. Bugs e Estabilidade

### Bugs Reportados nas Últimas 24h (por severidade)

#### 🔴 Críticos (impacto em produção)

| # | Título | Domínio | Link |
|---|--------|---------|------|
| #2468 | Scheduled Task Fails to Execute | cron | [Issue](https://github.com/sipeed/picoclaw/issues/2468) |
| #2280 | SiliconFlow API prevents service startup | provider | [Issue](https://github.com/sipeed/picoclaw/issues/2280) |
| #2602 | OAuth Authentication Errors (OpenAI/Antigravity) | provider | [Issue](https://github.com/sipeed/picoclaw/issues/2602) |

#### 🟠 Altos (impacto significativo)

| # | Título | Domínio | Link |
|---|--------|---------|------|
| #2478 | Skill override bug in /use command | agent, skill | [Issue](https://github.com/sipeed/picoclaw/issues/2478) |
| #2447 | Only latest message processed (multi-task) | channel | [Issue](https://github.com/sipeed/picoclaw/issues/2447) |
| #2446 | Message echo in multi-channel setup | channel | [Issue](https://github.com/sipeed/picoclaw/issues/2446) |
| #2540 | WhatsApp LID-migrated accounts silently drop messages | channel | [Issue](https://github.com/sipeed/picoclaw/issues/2540) |
| #2482 | Open weights models tool calls fail | provider | [Issue](https://github.com/sipeed/picoclaw/issues/2482) |

#### 🟡 Médios (degradação de UX)

| # | Título | Domínio | Link |
|---|--------|---------|------|
| #2377 | Unsafe terminal control characters | tool | [Issue](https://github.com/sipeed/picoclaw/issues/2377) |
| #2472 | list_dir fails on Windows | tool | [Issue](https://github.com/sipeed/picoclaw/issues/2472) |
| #1042 | exec guardCommand false positive | tool | [Issue](https://github.com/sipeed/picoclaw/issues/1042) |

### Correções Recentes de Bugs

- **#2644** — tool-feedback regression (Telegram): mensagens de feedback de ferramentas sobrescreviam mensagens anteriores
- **#2642** — Docker PID file: processos órfãos com PID=1 bloqueavam reinicialização
- **#2504** — Opus decoder: corrupção de frames em voice do Discord

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em Alta Prioridade (segundo comunidade)

| # | Feature | Domínio | Comentários | Link |
|---|---------|---------|-------------|------|
| #2408 | LLM Account Stacking (API key rotation) | provider, config | 9 | [Issue](https://github.com/sipeed/picoclaw/issues/2408) |
| #2225 | Ollama cloud credentials | provider | 8 | [Issue](https://github.com/sipeed/picoclaw/issues/2225) |
| #2169 | Dual HEAD authentication support | provider | 3 | [Issue](https://github.com/sipeed/picoclaw/issues/2169) |
| #2546 | OAuth 2.1 + PKCE for MCP servers | channel, config | 1 | [Issue](https://github.com/sipeed/picoclaw/issues/2546) |
| #2527 | Configurable fresh_tail_size | agent, config | 1 | [Issue](https://github.com/sipeed/picoclaw/issues/2527) |
| #2515 | Memory system integration (mem0, Supermemory) | provider | 1 | [Issue](https://github.com/sipeed/picoclaw/issues/2515) |
| #2444 | MCP secrets in .security.yml | tool, config | 1 | [Issue](https://github.com/sipeed/picoclaw/issues/2444) |

### Sinais de Roadmap Observados

**1. Expansão de Provedores:** Demanda por Ollama Cloud, SiliconFlow, dual-HEAD auth, e Intel OpenVINO indica estratégia de diversificação de backends de IA.

**2. Resiliência Enterprise:** LLM Account Stacking (#2408) representa necessidade de alta disponibilidade em ambientes de produção.

**3. Gerenciamento CLI:** A PR #2641 responde à demanda por ferramentas de linha de comando para gestão de MCP.

**4. Canais Avançados:** SMTP (#2465), WhatsApp LID (#2540), OAuth para MCP (#2546) sugerem expansão de canais de comunicação.

**5. Multimodalidade:** Suporte a áudio nativo (#2626) indica direção para agentes multimodais.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

**1. Estabilidade de Cron/Agentes** ⭐⭐⭐⭐⭐
> "when I ask my agent to perform a task every hour, I now get channel error"
> — dhensen (#1757)
> Problema afeta automações críticas e indica regressão de segurança.

**2. Configuração de Workspace** ⭐⭐⭐⭐
> "sistema不停地向 workspace 目录以外的目录进行读写" (Sistema continua lendo/escrevendo fora do workspace)
> — axwfae (#2519)
> Usuários enfrentam centenas de erros ao executar operações básicas.

**3. Credentials em Provedores** ⭐⭐⭐⭐
> "trying using picoclaw and I'm using Ollama cloud right now, but unfortunately there is no credential option"
> — Suisei110 (#2225)
> Barreira de entrada para novos usuários de provedores cloud.

**4. Experiência Multi-Canal** ⭐⭐⭐
> "only the latest message is processed" / "messages may be echoed back"
> — zuozhehao (#2447, #2446)
> Usuários multi-canal enfrentam perda de mensagens e comportamento inesperado.

**5. Docker em ReadonlyRootfs** ⭐⭐⭐
> "PicoClaw writes to multiple locations within its home directory at runtime"
> — bamnenim-permissionlabs (#2440)
> Incompatibilidade com containers Docker restritivos impede adoção em ambientes hardening.

### Cenários de Uso Emergentes

| Cenário | Evidência |
|---------|-----------|
| Agentes de monitoramento automatizado | #1757, #2468 (cron tasks) |
| Multi-provedores com failover | #2408 (account stacking) |
| Relatórios periódicos via email | #2465 (SMTP channel) |
| Integração com memória persistente | #2515 (mem0/Supermemory) |
| Agentes multimodais com áudio | #2626 (merged) |

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta há >7 dias (selecionadas)

| # | Título | Criado | Atualizado | Link |
|---|--------|--------|------------|------|
| #1042 | exec guardCommand false positive | 04/03 | 23/04 | [Issue](https://github.com/sipeed/picoclaw/issues/1042) |
| #2169 | Dual HEAD authentication | 30/03 | 23/04 | [Issue](https://github.com/sipeed/picoclaw/issues/2169) |
| #2225 | Ollama cloud credentials | 31/03 | 23/04 | [Issue](https://github.com/sipeed/picoclaw/issues/2225) |
| #2280 | SiliconFlow API startup failure | 02/04 | 23/04 | [Issue](https://github.com/sipeed/picoclaw/issues/2280) |
| #2438 | PICOCLAW_GATEWAY_TOKEN undocumented | 09/04 | 23/04 | [Issue](https://github.com/sipeed/picoclaw/issues/2438) |
| #2440 | Docker ReadonlyRootfs incompatibility | 09/04 | 23/04 | [Issue](https://github.com/sipeed/picoclaw/issues/2440) |
| #2480 | Proactive compact model_name bug | 11/04 | 23/04 | [Issue](https://github.com/sipeed/picoclaw/issues/2480) |

### Issues Antigas com Alto Impacto

| # | Título | Criado | Link |
|---|--------|--------|------|
| #1042 | exec guardCommand false positive (curl/wttr.in) | 04/03 | [Issue](https://github.com/sipeed/picoclaw/issues/1042) |

**Análise:** A issue #1042 está aberta há ~20 dias e afeta o uso de ferramentas externas comuns (curl para APIs). O guardCommand está rejeindo comandos válidos, indicando um false positive no safety mechanism. Recomenda-se triagem e possível ajuste do regex pattern.

---

## Indicadores de Saúde do Projeto

| Métrica | Valor | Status |
|---------|-------|--------|
| Issues abertas/ativas | 34 | ⚠️ Elevado, mas sem acúmulo antigo |
| PRs abertos | 38 | ✅ Ativo |
| PRs mergeados (24h) | 6 | ✅ Boa cadência |
| Release nightly | 1 | ✅ Entrega contínua |
| Taxa de resposta em issues | ~100% (todas atualizadas em 24h) | ✅ Atento |
| Bugs críticos pendentes | 3 | ⚠️ Requer atenção |

---

*Relatório gerado em 2026-04-24 com base em dados do GitHub. Todas as métricas referem-se ao período das últimas 24 horas.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-04-24

## 1. Panorama do dia

O IronClaw mantém atividade intensa com **35 issues e 50 PRs atualizados nas últimas 24h**, sinalizando alta cadência de desenvolvimento. Nenhum release foi publicado hoje, mas o pipeline de staging promotion segue ativo (última promoção às 19:18 UTC). O foco dominante continua na arch一座tectura do **engine v2** e na reformulação do pipeline de CI para GitHub-native merge queue. A base de código está em plena evolução, com múltiplos épicos em paralelo e regressões sendo corrigidas rapidamente — a saúde geral do projeto permanece robusta apesar da complexidade.

---

## 2. Lançamentos

**Nenhum release publicado nas últimas 24h.**

O projeto opera atualmente em branch `staging` com promoções automatizadas via bot `ironclaw-ci[bot]`. O último batch promotion (#2916) ocorreu em 2026-04-23 19:18 UTC, cobrindo commits de `7fb41555a9e55677d1aaea29ca567a5b369c2b05..49f3e8d56606e26f99c9fc64e531cd35af4262bc`. Não há evidências de release iminente para `main`.

---

## 3. Progresso do Projeto

### PRs fechados/merged nas últimas 24h

| # | PR | Tamanho | Escopo | Contribuidor |
|---|-----|---------|--------|--------------|
| [#2168](https://github.com/nearai/ironclaw/pull/2168) | `feat(credentials): path-based credential matching for per-endpoint auth` | XL (high risk) | channel/cli, channel/wasm, secrets | pranavraja99 (regular) |
| [#2883](https://github.com/nearai/ironclaw/issues/2883) | Bugfix: WASM tool dispatch broken after capability surface policy centralization | — | channel/wasm, tool/wasm | serrrfirat |
| [#2884](https://github.com/nearai/ironclaw/issues/2884) | Bugfix: new users with no conversations get no writable thread | — | channel/web | serrrfirat |
| [#1998](https://github.com/nearai/ironclaw/issues/1998) | Bugfix: Slack connect flow broken | — | channel/wasm | sergeiest |
| [#1503](https://github.com/nearai/ironclaw/issues/1503) | Bugfix: Google slides integration failed | — | tool/mcp, extensions | sergeiest |

**Destaque:** O PR [#2168](https://github.com/nearai/ironclaw/pull/2168) adiciona `path_patterns` a `CredentialMapping`, permitindo que diferentes secrets sejam escopados para diferentes prefixos de URL no mesmo host — solução elegante para arquiteturas de credenciais por endpoint. Este é um avanço significativo em segurança e flexibilidade.

### PRs em aberto mais relevantes (com review em progresso)

| # | PR | Tamanho/Risco | Status |
|---|-----|---------------|--------|
| [#2877](https://github.com/nearai/ironclaw/pull/2877) | ci: phase 1 merge-queue CI redesign | XL, medium | Aberto — implementação Phase 1 de #2719 |
| [#2876](https://github.com/nearai/ironclaw/pull/2876) | Add engine v2 action discovery metadata | XL, medium | Aberto — adiciona metadados canônicos a `ActionDef` |
| [#2846](https://github.com/nearai/ironclaw/pull/2846) | feat(engine): typed assistant content rollout | XL, medium | Aberto — consolida rollout de conteúdo tipado |
| [#2783](https://github.com/nearai/ironclaw/pull/2783) | ci: remove staging promotion pipeline | XL, medium | Aberto — exclui workflows de promoção staging |
| [#2854](https://github.com/nearai/ironclaw/pull/2854) | feat(engine-v2): add CodeAct host shims | XL, medium | Aberto — Pythonic shims para CodeAct |
| [#2899](https://github.com/nearai/ironclaw/pull/2899) | feat(cli): add standalone gateway lifecycle commands | XL, medium | Aberto — substitui implementação obsoleta de #2143 |

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários + reações)

**#2767 — Epic: Separate engine v2 capability background from callable tool schemas** (6 comentários, aberta)
- Autor: henrypark133 | Criado: 2026-04-21
- Link: https://github.com/nearai/ironclaw/issues/2767
- **Análise:** Este épico é central para o engine v2. Atualmente, o engine mistura três conceitos distintos (capability background, tool schemas callable, e comportamento de bridge). A separação é scoped para `engine_v2 = true` only — não impacta legado/v1. O épico está alinhado com os PRs #2876 e #2889, formando um stack de trabalho bem definido.

**#2792 — Epic: Gateway state convergence** (5 comentários, aberta)
- Autor: ilblackdragon | Criado: 2026-04-21
- Link: https://github.com/nearai/ironclaw/issues/2792
- **Análise:** Meta-épico arquitetural com objetivo ambiciosos: "frontend é função pura do backend, state drift estruturalmente impossível." Isso resolve a questão de UI/backend state drift que tem preocupado usuários. A abordagem via entidades versionadas com API canônica é robusta.

**#2231 — Bug: Multiple chats cannot run in parallel** (4 comentários, aberta)
- Autor: joe-rlo | Criado: 2026-04-10 (idade: ~14 dias)
- Link: https://github.com/nearai/ironclaw/issues/2231
- **Análise:** Este bug afeta usabilidade crítica — respostas bloqueadas em fila quando múltiplos chats rodam simultaneamente. A idade (14 dias) e engajamento (4 comentários) indicam que é um problema complexo ou com dependências. Prioridade **bug_bash_P2** no QA. Merece atenção para não escalar.

**#2719 — Migrate from staging promotion bot to GitHub-native merge queue** (1 comentário, aberta)
- Link: https://github.com/nearai/ironclaw/issues/2719
- **Análise:** Problema crônico identificado: 135k-LOC batch promotion PRs impossíveis de revisar. Este issue está sendo abordado pelos PRs #2783 (remove pipeline) e #2877 (phase 1 redesign). É uma melhoria de DX significativa para maintainers.

---

## 5. Bugs e Estabilidade

### Regressões críticas abertas (bug_bash_P1)

| # | Bug | Escopo | Reportado por | Estado |
|---|-----|--------|---------------|--------|
| [#2903](https://github.com/nearai/ironclaw/issues/2903) | Telegram response too long fails silently | Telegram Integration | joe-rlo | Aberto |
| [#2905](https://github.com/nearai/ironclaw/issues/2905) | Agent saves files in /home/agent (inaccessible in hosted setup) | File system | joe-rlo | Aberto |
| [#2887](https://github.com/nearai/ironclaw/issues/2887) | Auth Browser Consent fails — Google bot detection on CI | Auth/OAuth | serrrfirat | Aberto |

**Análise:** Os bugs P1s hoje focam em estabilidade de integrações (Telegram, Auth) e problemas de path em ambiente hosted. O bug de Telegram silencioso (#2903) é particularmente perigoso — o usuário não recebe feedback quando a resposta falha, degradando confiança.

### Bugs de alta priorização QA (bug_bash_P2)

| # | Bug | Escopo | Reportado por | Estado |
|---|-----|--------|---------------|--------|
| [#2907](https://github.com/nearai/ironclaw/issues/2907) | Duplicate missions created for same request | Missions | joe-rlo | Aberto |
| [#2908](https://github.com/nearai/ironclaw/issues/2908) | Mission notification to Telegram delayed ~5min + raw formatting | Missions/Telegram | joe-rlo | Aberto |
| [#2911](https://github.com/nearai/ironclaw/issues/2911) | Asana integration shows inconsistent state | Integrations/MCP | joe-rlo | Aberto |
| [#2912](https://github.com/nearai/ironclaw/issues/2912) | Google Sheets requires re-authentication after successful sheet creation | Google Sheets/OAuth | joe-rlo | Aberto |
| [#2913](https://github.com/nearai/ironclaw/issues/2913) | Duplicate Google Sheets created during single workflow | Google Sheets | joe-rlo | Aberto |
| [#2914](https://github.com/nearai/ironclaw/issues/2914) | Skill installation fails with SKILL.md YAML frontmatter parse error | Skills/Installation | joe-rlo | Aberto |
| [#2915](https://github.com/nearai/ironclaw/issues/2915) | Mission "terminal or budget exhausted" error blocks manual Fire | Missions | joe-rlo | Aberto |

**Análise:** Há um **padrão de instabilidade em integrações OAuth e MCP** — Google Sheets, Asana, Linear mostram estados conflitantes ou re-autenticações. Isso pode indicar problema sistêmico na gestão de tokens OAuth ou no lifecycle de credenciais. Também nota-se **problemas recorrentes em Missions** — duplicação, delays, erros de budget. Recomenda-se investigação unificada.

### Bugs de UI/logs reportados hoje

| # | Bug | Escopo |
|---|-----|--------|
| [#2917](https://github.com/nearai/ironclaw/issues/2917) | Logs: target column too narrow truncates module paths | UI/logs |
| [#2918](https://github.com/nearai/ironclaw/issues/2918) | Browser find (Cmd/Ctrl+F) collapses expanded log rows | UI/logs |

**Correção já em PR:** #2919 (`ui(logs): widen target column`) criado por Copilot em 2026-04-23.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features e requests abertos

**#2920 — Feature Request: Better data persistence & upgrade safety for hosted platform** (0 comentários)
- Autor: Kampouse | Criado: 2026-04-23
- Link: https://github.com/nearai/ironclaw/issues/2920
- **Resumo:** Usuários avançados armazenam dados em SQLite (ironclaw.db) dentro do Docker. A solicitação pede caminho transparente para persistência externa e segurança de upgrades.
- **Sinal de roadmap:** Indica que a experiência self-hosted precisa evoluir para usuários menos técnicos.

**#2900 — Decouple unified webhook listener bind address from named HTTP channel enablement** (0 comentários)
- Autor: theredspoon | Criado: 2026-04-23
- Link: https://github.com/nearai/ironclaw/issues/2900
- **Resumo:** Current design conflui dois concerns (bind address + HTTP channel enablement) no mesmo par de variáveis. Request para separação limpa de responsabilidades.

**#2897 — feat: add phase-1 user-authored wasm tool flow** (PR aberto, XL)
- Link: https://github.com/nearai/ironclaw/pull/2897
- **Resumo:** Suporte fase-1 para instalar artefatos WASM authored pelo usuário via `tool_install` com `wasm_path` + `manifest`. Bloqueado em multi-tenant até isolamento per-user ToolRegistry.
- **Sinal de roadmap:** User-authored WASM tools é direção estratégica.

**#2894 — feat(missions): redesign missions overview surface** (PR aberto, XL)
- Link: https://github.com/nearai/ironclaw/pull/2894
- **Resumo:** Redesenho da tab Missions em dossier-style surface com renderização estruturada de prompts, métricas de status enriched, e timeline de approach history.
- **Sinal de roadmap:** Missions é área de investimento UX prioritária.

### Features em progresso (indicação de roadmap)

- **Engine v2 completion:** Epics #2767, #2792 + PRs associados (#2876, #2889, #2854, #2868, #2869) indicam que a arch一座tectura engine v2 está em estágio avançado.
- **CI modernization:** Migração para GitHub-native merge queue (#2719, #2877, #2783) é prioridade de infraestrutura.
- **Typed content rollout:** PR #2846 consolida interface tipada de conteúdo entre engine ↔ bridge ↔ web gateway.
- **Aliyun support:** PR #1446 adiciona suporte a Aliyun BaiLian Coding Plan — expansão de mercado.

---

## 7. Resumo de Feedback dos Usuários

### Dores reportadas (via issues e bugs)

| Categoria | Problema | Freq. |
|-----------|----------|-------|
| **Missions** | Duplicação, delays de notificação, erros de budget bloqueantes | Alta |
| **Integrações OAuth** | Estados inconsistentes, re-autenticações após sucesso | Alta |
| **Telegram** | Falhas silenciosas em respostas longas | Média |
| **File system (hosted)** | Agent salva em /home/agent inacessível | Média |
| **UI/UX** | Logs truncados, find quebra rows expandidos | Baixa |

### Padrões de insatisfação identificados

1. **Instabilidade em integrações de terceiros:** Usuários experimentam problemas com Google Sheets, Asana, Linear — estados conflitantes, re-autenticação, criação duplicada. Isso sugere que a camada de lifecycle OAuth/creds precisa de hardening.

2. **Missions com problemas recorrentes:** O sistema de missões scheduled parece ter problemas de idempotência (duplicação) e monitoramento (delays de 5min+). Users esperam reliability em background jobs.

3. **Feedback silencioso em erros:** O bug de Telegram (#2903) exemplifica problema recorrente — falhas não são comunicadas ao usuário, deixando-o sem contexto.

### Sinais positivos

- Issues com engagement alto (2767, 2792, 2231) indicam comunidade ativa reportando problemas com profundidade.
- Bugfixes sendo merged rapidamente (2883, 2884, 1998, 1503) mostra responsiveness da equipe.
- Contributions externas (pranavraja99 #2168, quchenyuan #1446) indicam ecossistema saudável.

---

## 8. Backlog que Merece Atenção

### Issues abertas há > 7 dias sem triagem/resposta

| # | Issue | Criado | Escopo | Prioridade aparente |
|---|-------|--------|--------|---------------------|
| [#2231](https://github.com/nearai/ironclaw/issues/2231) | Multiple chats cannot run in parallel | 2026-04-10 | bug_bash_P2 | Alta (14 dias sem resolution) |
| [#1998](https://github.com/nearai/ironclaw/issues/1998

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# 📊 Relatório de Projeto — CoPaw (QwenPaw)
**Data:** 2026-04-23 (dados das últimas 24h)

---

## 1. Panorama do Dia

O projeto demonstra **alta atividade comunitária** com 50 issues e 50 PRs atualizados no período. Duas releases foram publicadas (v1.1.3.post1 e v1.1.4-beta.1), indicando ritmo de desenvolvimento acelerado. A equipe focou em correções de estabilidade (defender, Discord regex, WeChat channel ID) e há forte demandade contributions externos — 3 PRs de first-time contributors aguardam revisão. O console web e integrações com canais (DingTalk, WeChat) são as áreas com maior volume de issues abertas, sugerindo necessidade de hardening在这些功能上。

---

## 2. Lançamentos

### ✅ v1.1.3.post1
**Resumo:** Correção de bugs críticos para estabilidade em produção.

| Mudança | Autor | PR |
|---------|-------|-----|
| Revert para evitar blocking pelo Windows Defender | @rayrayraykk | [#3717](https://github.com/agentscope-ai/QwenPaw/pull/3717) |
| Uso de dialog nativo para downloads no pywebview (Desktop) | @jinglinpeng | [#3719](https://github.com/agentscope-ai/QwenPaw/pull/3719) |

**Nota:** Não há breaking changes. Usuários da v1.1.3 devem atualizar para corrigir problemas de execução no Windows.

### 🧪 v1.1.4-beta.1
**Resumo:** Preparação para próxima versão com ajustes de documentação e versionamento.

| Mudança | Autor | PR |
|---------|-------|-----|
| Bump de versão para 1.1.4b1 | @qbc2016 | [#3674](https://github.com/agentscope-ai/QwenPaw/pull/3674) |
| Correção de problemas de idioma em figuras da documentação | @jinglinpeng | [#3678](https://github.com/agentscope-ai/QwenPaw/pull/3678) |
| Adição de `.prettierignore` e atualização de formatação | — | — |

---

## 3. Progresso do Projeto

### PRs Merged/Closed (principais)

| PR | Título | Impacto |
|----|--------|---------|
| [#3739](https://github.com/agentscope-ai/QwenPaw/pull/3739) | `allow_no_auth_hosts` whitelist para autenticação API | **Segurança** — Substitui hardcoded localhost por configuração flexível |
| [#3730](https://github.com/agentscope-ai/QwenPaw/pull/3730) | Adiciona discord.py ao conda-unpack | **Estabilidade** — Corrige `re.error: nothing to repeat` no Windows |
| [#1427](https://github.com/agentscope-ai/QwenPaw/pull/1427) | Corrige context length em Ollama/LMStudio | **UX** — Agentes não mais cortados prematuramente |
| [#3605](https://github.com/agentscope-ai/QwenPaw/pull/3605) | Normaliza `WeixinChannel` identifier | **Bug fix** — Corrige `KeyError('channel not found: weixin')` em cron jobs |
| [#3652](https://github.com/agentscope-ai/QwenPaw/pull/3652) + [#3257](https://github.com/agentscope-ai/QwenPaw/pull/3257) | Botões de aprovação visual para tool guard | **UX** — Elimina necessidade de digitar `/approve` |

### PRs em revisão (high priority)

| PR | Título | Status |
|----|--------|--------|
| [#3758](https://github.com/agentscope-ai/QwenPaw/pull/3758) | Normaliza ícones de tools ausentes na API | Ready for merge |
| [#3698](https://github.com/agentscope-ai/QwenPaw/pull/3698) | Otimiza pip installation no Dockerfile (uv) | Under Review |
| [#3729](https://github.com/agentscope-ai/QwenPaw/pull/3729) | Usa Win32 API para ícone correto na taskbar | WIP |

---

## 4. Temas Quentes da Comunidade

### 🔥 Maior engajamento

| Issue | Tipo | Comentários | Link |
|-------|------|-------------|------|
| **#2291 — Help Wanted: Open Tasks** | enhancement | 60 | [#2291](https://github.com/agentscope-ai/QwenPaw/issues/2291) |
| **#2831 — write_file failed many times, cannot stop** | bug | 9 | [#2831](https://github.com/agentscope-ai/QwenPaw/issues/2831) |
| **#3709 — Security rule ainda bloqueia mesmo desabilitada** | bug | 7 | [#3709](https://github.com/agentscope-ai/QwenPaw/issues/3709) |

### Análise de demandas

**Contribuição aberta (#2291):** A issue com maior volume de comentários demonstra que a comunidade está engajada em contribuir. A equipe oferece lista priorizada (P0→P2) com 60 interações — indicador saudável de onboarding.

**Segurança (#3709):** Usuário reporta que desabilitar a regra `TOOL_CMD_IFS_INJECTION` não surte efeito. Isso é prioridade P0 por envolver segurança de comandos shell em cron jobs. A equipe deve priorizar análise do fluxo de desabilitação de regras.

---

## 5. Bugs e Estabilidade

### 🔴 Críticos (afetam produção)

| Bug | Descrição | Impacto | Link |
|-----|-----------|---------|------|
| MCP TaskGroup exception | Agent假死 (freeze sem erro) após uso de MCP | Agentes ficam não responsivos sem feedback | [#3640](https://github.com/agentscope-ai/QwenPaw/issues/3640) |
| Console freezes com MCP | Entrada sem resposta ao habilitar MCP | Plataforma inutilizável com MCP | [#3642](https://github.com/agentscope-ai/QwenPaw/issues/3642) |
| Database error em memory_search | SQLite não abre em certos caminhos | Funcionalidade de memória falha | [#3047](https://github.com/agentscope-ai/QwenPaw/issues/3047) |

### 🟡 Moderados

| Bug | Descrição | Link |
|-----|-----------|------|
| Unicode surrogate crash no SSE | Console web crasha com caracteres especiais | [#3552](https://github.com/agentscope-ai/QwenPaw/issues/3552) |
| Localhost auth bypass quebrado | 401 em 127.0.0.1 apesar da documentação afirmar bypass | [#3582](https://github.com/agentscope-ai/QwenPaw/issues/3582) |
| Docker build git not found | Imagem falha ao fazer `git` no Dockerfile | [#3695](https://github.com/agentscope-ai/QwenPaw/issues/3695) |
| Desktop hangs em "Waiting for HTTP ready..." | Processo no Windows não inicia servidor HTTP | [#3555](https://github.com/agentscope-ai/QwenPaw/issues/3555) |

### 🟢 Menores (UI/cosméticos)

| Bug | Link |
|-----|------|
| Dark mode sidebar text overlap | [#3546](https://github.com/agentscope-ai/QwenPaw/issues/3546) |
| Task interrompida frequentemente | [#3564](https://github.com/agentscope-ai/QwenPaw/issues/3564) |
| Regen adiciona mensagem em vez de substituir | [#3308](https://github.com/agentscope-ai/QwenPaw/issues/3308) |

---

## 6. Pedidos de Features e Sinais de Roadmap

### 📋 Novas features (últimas 24h)

| Feature | Descrição | Potencial | Link |
|---------|-----------|-----------|------|
| **Multimodal messages** | Suporte a imagens/arquivos em mensagens | Alto — alinha com tendencias de LLMs | [#3509](https://github.com/agentscope-ai/QwenPaw/pull/3509) |
| **Shell timeout configurável** | Permite ajustar timeout de comandos shell por agent | Médio — demanda recorrente | [#3593](https://github.com/agentscope-ai/QwenPaw/issues/3593) |
| **Apple Silicon browser** | Playwright ARM64 nativo no macOS | Médio — usuários Apple afetados | [#2655](https://github.com/agentscope-ai/QwenPaw/issues/2655) |
| **Context menu (right-click)** | Menus de contexto no console para ações comuns | Baixo — conveniência | [#3752](https://github.com/agentscope-ai/QwenPaw/issues/3752) |
| **DingTalk markdown分段** | Suporte a mensagens longas (>3500 chars) | Médio — integrações corporativas | [#3742](https://github.com/agentscope-ai/QwenPaw/issues/3742) |
| **Agent audit workflow** | Skill built-in para auditoria de agentes | Alto — governance | [#3740](https://github.com/agentscope-ai/QwenPaw/pull/3740) |
| **OpenAI Responses API** | Suporte para novo formato de API | Alto — compatibilidade futura | [#3531](https://github.com/agentscope-ai/QwenPaw/issues/3531) |
| **Self-evolving docs** | Documentação para features proativas | Baixo — documentação | [#3755](https://github.com/agentscope-ai/QwenPaw/pull/3755) |

### Indicadores de roadmap

1. **MCP é prioridade** — múltiplos bugs e atenção da equipe (PRs [#3640](https://github.com/agentscope-ai/QwenPaw/issues/3640), [#3642](https://github.com/agentscope-ai/QwenPaw/issues/3642), timeout e session collision)
2. **Experiência Desktop** — issues sobre hangs, taskbar icon, native dialogs sugerem foco em polish da aplicação desktop
3. **Governance/Audit** — PR built-in agent audit indica movimento para uso empresarial

---

## 7. Resumo de Feedback dos Usuários

### Dores recorrentes

| Categoria | Descrição | Frequência |
|-----------|-----------|------------|
| **Deploy fails** | Usuários não conseguem fazer o app funcionar após deploy (especialmente .exe/desktop) | Alta — múltiplas issues (#2317, #2536) |
| **MCP instável** | Integração MCP causa freezes e crashes | Alta — 3+ issues |
| **Canais falham** | WeChat cron não funciona, DingTalk tem collisions | Moderada |
| **Segurança confusa** | Regras de tool guard ainda bloqueiam mesmo desabilitadas | Moderada |
| **Memory search bugado** | Busca em memória falha com erros de database | Moderada |

### Cenários de uso reportados

- **Agentes em produção com cron jobs** —钉钉/微信 notifications, requer estabilidade
- **Desktop users no Windows** — maior superfície de bugs (hangs, icon, git)
- **MCP para ferramentas externas** — adotantes pioneiros enfrentando problemas

### Satisfação inferida

- **Alta volumetria de contribuições** — 3 first-time contributors no período indica comunidade ativa
- **Issues resolvidas rapidamente** — várias issues fechadas em 1 dia (ex: #3695, #3677)
- **Preocupação com segurança** — múltiplas issues sobre auth e guards

---

## 8. Backlog que Merece Atenção

### Issues sem resposta há >7 dias

| Issue | Criado | Status | Prioridade |
|-------|--------|--------|------------|
| [#3047](https://github.com/agentscope-ai/QwenPaw/issues/3047) MemorySearch database error | 2026-04-07 | **OPEN** | 🔴 Alta |
| [#2655](https://github.com/agentscope-ai/QwenPaw/issues/2655) Apple Silicon browser support | 2026-03-31 | **OPEN** | 🟡 Média |
| [#2536](https://github.com/agentscope-ai/QwenPaw/issues/2536) Install failure 127.0.0.1 | 2026-03-30 | **CLOSED** | ✅ Resolvido |

### PRs aguardando review há >3 dias

| PR | Autor | Contribuidor | Link |
|----|-------|--------------|------|
| #3509 multimodal messages | @xueshanlongyin | first-time | [#3509](https://github.com/agentscope-ai/QwenPaw/pull/3509) |
| #3698 Dockerfile pip optimization | @twz915 | first-time | [#3698](https://github.com/agentscope-ai/QwenPaw/pull/3698) |

---

## 📌 Recomendações para a Equipe

1. **🔴 Priorizar MCP stability** — issues [#3640](https://github.com/agentscope-ai/QwenPaw/issues/3640), [#3642](https://github.com/agentscope-ai/QwenPaw/issues/3642) são críticas
2. **🟡 Review PRs de first-time contributors** — momentum comunitário está alto, não desperdiçar engajamento
3. **🟡 Investigar auth bypass quebrado** — [#3582](https://github.com/agentscope-ai/QwenPaw/issues/3582) contradiz documentação
4. **🟢 Documentar deployment pitfalls** — volume de issues sobre deploy indica necessidade de docs mais claros

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw — Relatório do Projeto
**Data:** 2026-04-24 | **Horizonte:** Últimas 24h

---

## 1. Panorama do Dia

O projeto ZeroClaw apresenta **alta atividade** com 50 issues e 39 PRs atualizados nas últimas 24h, indicando um sprint intenso. Nenhum release foi publicado no período — a equipe está focada em estabilizar a versão v0.7.4 com bloqueadores críticos, como a migração de schema v3 (#5947). O onboard recebeu atenção significativa com um rewrite completo (#5951, #5960) e o ecossistema de plugins WASM avança para sua fase final (Extism bridge, #5912). A base de contribuidores continua ativa com novos PRs de membros externos addressing bugs críticos nos providers (Anthropic, Gemini, Ollama) e canais (ACP, Nextcloud, Discord).

---

## 2. Lançamentos

**Nenhum release publicado nas últimas 24h.**

O milestone tracking da v0.7.4 (#5877) permanece aberto, sinalizando que a equipe está em freeze até que os itens blockers sejam resolvidos — notavelmente:
- #5910 — `feat(skills): land review-session skill`
- #5947 — Schema v3 migration (bloqueador de merge)

> **Tracker:** https://github.com/zeroclaw-labs/zeroclaw/issues/5877

---

## 3. Progresso do Projeto

### PRs Merged/Fechados

| PR | Título | Impacto |
|---|---|---|
| [#4350](https://github.com/zeroclaw-labs/zeroclaw/pull/4350) | Stream tool call events over WebSocket | Funcionalidade aguardada — permite UIs de dashboard exibirem execução de tools em tempo real via WebSocket frames |
| [#6044](https://github.com/zeroclaw-labs/zeroclaw/pull/6044) | Live model discovery + tier-based switching | Substitui lista hardcoded de modelos por `/v1/models` dinâmico; adiciona ações `list_tiers`/`set_tier` por capacidade |
| [#4352](https://github.com/zeroclaw-labs/zeroclaw/issues/4352) | Add GitHub integration tool (CLOSED) | Closed — aguardando implementação formal |

### PRs Abertos Relevantes

- [#5960](https://github.com/zeroclaw-labs/zeroclaw/pull/5960) — **feat(onboard):** rewrite completo, schema-driven (XL, múltiplos componentes)
- [#6035](https://github.com/zeroclaw-labs/zeroclaw/pull/6035) — **fix(channels/acp):** correção de formatting de output de tools (risk: high)
- [#6049](https://github.com/zeroclaw-labs/zeroclaw/pull/6049) — Gemini CLI OAuth refresh + rate-limit errors
- [#6038](https://github.com/zeroclaw-labs/zeroclaw/pull/6038) — **fix(cron):** lock claim/release para evitar execução duplicada
- [#6046](https://github.com/zeroclaw-labs/zeroclaw/pull/6046) — `zeroclaw memory reindex` CLI (fecha #5646)
- [#6045](https://github.com/zeroclaw-labs/zeroclaw/pull/6045) — Registry-based bare-name skill install
- [#6008](https://github.com/zeroclaw-labs/zeroclaw/pull/6008) — Prompt caching para OpenRouter
- [#6041](https://github.com/zeroclaw-labs/zeroclaw/pull/6041) — Refatora wizard UI para crate `zeroclaw_hardware`

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários + reações)

| Issue | Título | Comentários | 👍 | Tópicos |
|---|---|---|---|---|
| [#5719](https://github.com/zeroclaw-labs/zeroclaw/issues/5719) | runtime.kind="native" não ignora Docker para shell | **12** | 0 | security, runtime, risk: high |
| [#2503](https://github.com/zeroclaw-labs/zeroclaw/issues/2503) | Canal napcat/OneBot não encontrado | 8 | 0 | enhancement, channel |
| [#5847](https://github.com/zeroclaw-labs/zeroclaw/issues/5847) | Documentar gateway.web_dist_dir | 6 | 1 | bug, S0 data loss |
| [#3361](https://github.com/zeroclaw-labs/zeroclaw/issues/3361) | Adicionar Matrix como canal de delivery | 4 | 1 | enhancement, closed |
| [#5947](https://github.com/zeroclaw-labs/zeroclaw/issues/5947) | Schema v3 — batch breaking migrations | 5 | 0 | enhancement, **bloqueador** |
| [#5951](https://github.com/zeroclaw-labs/zeroclaw/issues/5951) | Rewrite completo do onboard | 3 | 0 | enhancement, in-progress |
| [#5895](https://github.com/zeroclaw-labs/zeroclaw/issues/5895) | Detectar falta de memcg no startup | 2 | 0 | security, in-progress |
| [#5956](https://github.com/zeroclaw-labs/zeroclaw/issues/5956) | Doc: skill audit scope (structural only) | 2 | 0 | enhancement, in-progress |

### Análise das Demandas

- **Segurança em runtime:** #5719 (critical, closed) evidenciou que `runtime.kind = "native"` permite bypass de Docker para execução de shell — risco real para ambientes containerizados.
- **Onboarding DX:** A comunidade espera uma experiência de setup mais limpa. O rewrite em curso (#5951/#5960) substituirá um monolith de 8.534+ linhas.
- **Canais de comunicação:** #2503 evidencia confusão sobre configuração de napcat/OneBot; #3361 (Matrix) foi fechado como duplicate/resolvido.
- **Documentação:** #5847 destaca lacuna crítica na documentação de variáveis de ambiente para web dashboard.

---

## 5. Bugs e Estabilidade

### Por Severidade

| Severidade | Count | Issues de Destaque |
|---|---|---|
| **S0** (data loss / security) | 2 | #5719 (closed), #5991 |
| **S1** (workflow blocked) | 3 | #6007, #5962, #6002 |
| **S2** (degraded behavior) | 1 | #5844 |
| **S3** (minor) | 2 | #5847, #5959 |

### Bugs Críticos em Aberto

| Issue | Descrição | Risk | Link |
|---|---|---|---|
| **#6007** | Anthropic provider envia `temperature` obrigatório, quebrando Claude 4.7 | high | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/6007) |
| **#5991** | Cron job falha com dados sensíveis em prompt (S0) | high | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5991) |
| **#5962** | Ollama provider falha quando tools são necessárias | medium | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5962) |
| **#6001** | gateway-chat `/api/cost` retorna zero + sem traces | medium | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/6001) |
| **#5646** | Embeddings não persistidos no SQLite (Ollama provider) | medium | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5646) — PR #6046 em resolução |
| **#5834** | SQLite FTS index stale em streaming persist (in-progress) | medium | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5834) |
| **#5835** | `cancel_tokens` HashMap vazando entries (memory leak) | high | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5835) |

### Bugs em Progresso

| Issue | Descrição | Link |
|---|---|---|
| #5984 | zeroclaw-desktop crash "No provider set" | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5984) |
| #5836 | CancellationToken não propagado para tool execution | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5836) |
| #5833 | Session ownership model não existe (destructive ops) | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5833) |
| #5412 | Discord thread_ts hardcoded None (histórico vazando entre threads) | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5412) |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| Issue | Título | Impacto | Link |
|---|---|---|---|
| #5912 | WASM execution bridge com Extism (Microkernel RFC #5574) | **Arquitetura** | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5912) |
| #5919 | `zc_env_read` allowlist para plugins | **Segurança** | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5919) |
| #2998 | Suporte a múltiplos model providers simultâneos | **Enhancement** | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/2998) |
| #5504 | Log de input/output completo do LLM | **Observability** | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5504) |
| #5837 | Cancellation support para ACP sessions | **UX** | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5837) |

### Sinais de Roadmap

1. **Microkernel Architecture Phase 2D2** (#5912): Bridge WASM via Extism é a última peça estrutural do subsistema de plugins.
2. **Schema v3** (#5947): Coordenará todas as mudanças breaking fields de config em uma única migration.
3. **Onboard Rewrite** (#5951/#5960): DRY, schema-driven, idempotent — reduzirá significativamente a dívida técnica.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Tema | Evidência | Impacto |
|---|---|---|
| **DX de configuração de canais** | #2503: confusão com napcat/OneBot; #3361: Matrix não entrega cron output | Medium |
| **Documentação insuficiente** | #5847: `web_dist_dir` undocumented; #5956: scope de audit不清 | High |
| **Estabilidade de Providers** | #6007: Claude 4.7 quebrado; #5962: Ollama tools falham; #5646: embeddings não geram | High |
| **Cron reliability** | #5991: prompt complexo causa failure; #6038 (PR): duplicate execution sem lock | High |
| **Memory priority excessiva** | #5844: system prompt prioriza memórias demais, especialmente em cron jobs | Medium |

### Cenários de Uso Reportados

- **Portfolio analysis skill** (InvestorClaw): perlowja usando ZeroClaw para análise FINOS CDM 5.x compliant — extensão de portfólio pessoal.
- **Docker deployments**: usuários rodando em containers com runtime nativo e esperando isolamento real.
- **Multi-provider setups**: usuários com modelos locais em servidores distintos (#2998).

### Sentimento Geral

**Neutro-positivo com notas de frustração** em torno de documentação, estabilidade de providers específicos (Ollama, Claude 4.7) e edge cases de cron jobs. A atividade de PRs indica resolução ativa dos problemas reportados.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Stale

| Issue | Título | Days Open | Status | Link |
|---|---|---|---|---|
| #2503 | Canal napcat/OneBot não encontrado | ~53d | no-stale | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/2503) |
| #2973 | Otimizar print performance em loop results | ~47d | no-stale | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/2973) |
| #2998 | Múltiplos model providers | ~47d | no-stale | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/2998) |
| #5412 | Discord thread isolation | ~18d | open | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5412) |

### PRs Aguardando Ação

| PR | Título | Status | Link |
|---|---|---|---|
| #5985 | SQLite FTS UPDATE trigger | needs-author-action | [Link](https://github.com/zeroclaw-labs/zeroclaw/pull/5985) |
| #5838 | Webhook retry com backoff | open | [Link](https://github.com/zeroclaw-labs/zeroclaw/pull/5838) |

### Priorização Recomendada

1. **Crítico:** #6007 (Anthropic temperature), #5991 (cron S0), #5835 (memory leak)
2. **High:** #5959 (web dashboard Docker), #5960 (onboard rewrite)
3. **Medium:** #2503, #5412 (Discord thread), #5837 (ACP cancellation)

---

**Resumo Executivo — Saúde do Projeto:**

| Métrica | Valor | Avaliação |
|---|---|---|
| Issues ativas (24h) | 46 | ✅ Alta |
| PRs abertos (24h) | 33 | ✅ Ativo |
| Releases (24h) | 0 | ⚠️ Freeze p/ v0.7.4 |
| Bugs S0-S1 abertos | 5 | 🔴 Requer atenção |
| PRs em revisão | 33 | ✅ Pipeline saudável |
| Issues stale | 3 | ⚠️ Manter monitoramento |

**Veredicto:** O projeto está em **modo de estabilização intensivo** com foco em segurança, confiabilidade de cron e preparação do onboard para a próxima geração. A comunidade contribuidora está ativa, mas bugs de providers (Anthropic/Ollama) e gaps de documentação requerem ação prioritária.

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*