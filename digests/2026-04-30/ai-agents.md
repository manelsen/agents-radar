# Resumo diário do ecossistema de agentes de IA 2026-04-30

> Issues: 1 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-04-29 20:58 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório do Projeto NullClaw — 2026-04-30

---

## 1. 🌅 Panorama do Dia

O projeto NullClaw apresenta **atividade mínima** nesta data, com apenas **1 issue fechada** e nenhuma atividade de PRs ou releases. O cenário atual reflete um período de baixa movimentação, possivelmente indicando fase de estabilização após um ciclo de desenvolvimento anterior ou preparação para próxima release. A única interação registrada foi o fechamento de uma issue de documentação, demonstrando atenção contínua à qualidade do conteúdo do projeto, mesmo em períodos de menor atividade código.

---

## 2. 🚀 Lançamentos

**Nenhum novo release nas últimas 24h.**

O projeto não registrou versões recentes. Recomenda-se monitorar o repositório para próximos anúncios de release que possam conter atualizações de funcionalidades ou correções acumuladas.

---

## 3. 📈 Progresso do Projeto

| Tipo | Quantidade | Detalhamento |
|------|------------|--------------|
| PRs merged | 0 | — |
| PRs fechados | 0 | — |
| Issues fechadas | 1 | [#874](https://github.com/nullclaw/nullclaw/issues/874) |

**Fechamento registrado:**
- [Issue #874](https://github.com/nullclaw/nullclaw/issues/874) — Documentação de política de segurança: documentação ausente para `default_allowed_commands`. Resolvida em 2026-04-29.

O fechamento desta issue indica evolução na cobertura documental do sistema de segurança do NullClaw.

---

## 4. 💬 Temas Quentes da Comunidade

**Nenhuma issue ou PR com comentários ou reações registradas nas últimas 24h.**

A issue #874 foi fechada sem comentários, sugerindo resolução direta ou discussão realizada fora do GitHub.

---

## 5. 🐛 Bugs e Estabilidade

**Nenhum bug ou regressão reportado nas últimas 24h.**

A ausência de reports de problemas é um indicador positivo de estabilidade. O sistema de segurança (`security/policy.zig`) não apresentou incidentes reportados.

---

## 6. ✨ Pedidos de Features e Sinais de Roadmap

**Nenhum novo feature request registrado nas últimas 24h.**

A issue #874, embora focada em documentação, indica que a funcionalidade `default_allowed_commands` no módulo de segurança está ativa e em uso, sugerindo que políticas de segurança configuráveis fazem parte do design atual do projeto.

---

## 7. 📋 Resumo de Feedback dos Usuários

**Sem feedback explícito registrado nas últimas 24h.**

A natureza da issue #874 (documentação) pode indicar que:
- A funcionalidade de segurança está operacional
- Usuários podem ter dificuldade em descobrir/configurar `default_allowed_commands` sem documentação adequada
- A curva de aprendizado pode ser impacted pela falta de documentação técnica

---

## 8. 📚 Backlog que Merece Atenção

| Issue | Título | Status | Idade | Prioridade |
|-------|--------|--------|-------|------------|
| [#874](https://github.com/nullclaw/nullclaw/issues/874) | Docs: missing documentation for security policy "default_allowed_commands" | ✅ Closed | 2 dias | Documentação |

**Observação:** Com apenas 1 issue no período analisado e todas já fechadas, o backlog imediato está limpo. Não há items pendentes de resposta ou atendimento.

---

## 📊 Métricas Consolidada — 2026-04-30

| Métrica | Valor |
|---------|-------|
| Issues abertas/ativas | 0 |
| Issues fechadas | 1 |
| PRs abertos | 0 |
| PRs merged/fechados | 0 |
| Releases | 0 |
| Engajamento (comentários + reações) | 0 |

---

## 🎯 Veredicto de Saúde do Projeto

**🟡 MODERADO — Baixa atividade, sem pendências**

O NullClaw apresenta um dia de baixa atividade, porém **sem issues em aberto** e **sem débitos técnicos reportados**. A saúde geral permanece estável. A resolução proativa da issue de documentação demonstra maturidade na manutenção do projeto.

---

*Relatório gerado automaticamente com base em dados do GitHub de 2026-04-30.*

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo do Ecossistema de Agentes de IA Open Source

**Data de referência:** 2026-04-30

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta um **cenário polarizado** em 30 de abril de 2026. Quatro projetos (IronClaw, Hermes Agent, ZeroClaw e CoPaw) operam em cadência acelerada, acumulando mais de 100 issues e PRs combinados por dia, enquanto NullClaw permanece em modo de manutenção mínimas. A tendência dominante é a **maturidade em infraestrutura de canais** (Feishu, WeChat, Telegram, Matrix) e **otimização de tokens/contexto**, com três projetos investindo ativamente em sistemas de hooks, workflows estruturados e gerenciamento de memória. Os bugs mais críticos concentram-se em segurança (context spillage, approval gates violados) e regressões de provedores, indicando que a fronteira de desenvolvimento está se movendo de features para estabilidade e confiança em produção.

---

## 2. Comparação de Atividade

| Projeto | Issues (abertas/fechadas) | PRs (abertos/merged) | Releases (24h) | Avaliação de Saúde |
|---------|---------------------------|----------------------|----------------|-------------------|
| **IronClaw** | 28 abertas | 50 atualizados / 37 merged | 1 (v0.27.0) | 🟢 Excelente — sprint de integração Reborn |
| **Hermes Agent** | 50 atualizadas / 8 fechadas | 50 atualizados / 0 merged | 0 | 🔴 Preocupante — 2 P1 bugs + backlog crescente |
| **ZeroClaw** | 50 atualizadas / 21 fechadas | 50 abertos / 0 merged | 0 | 🟡 Estável — 6 bugs S0/S1 em aberto |
| **CoPaw** | 29 atualizadas | 22 atualizados / 7 merged | 1 (v1.1.5) | 🟡 Estável — 4 bugs críticos abertos |
| **PicoClaw** | 11 atualizadas | 20 atualizados / 5 merged | 1 nightly | 🟢 Bom — migração TUI→CLI em curso |
| **NanoBot** | 12 issues | 39 PRs / 26 merged | 1 (v0.1.5.post3) | 🟢 Bom — 2 bugs críticos requieren atención |
| **NullClaw** | 1 fechada | 0 | 0 | 🟡 Baixa — modo estabilização |

**Observação:** IronClaw e Hermes Agent lideram em volume absoluto, mas Hermes Agent apresenta gargalo crítico de merge (0 PRs fechados vs. 50 abertos). NanoBot e PicoClaw demonstram a melhor relação PRs merged/activity.

---

## 3. Posicionamento do Projeto Principal

### IronClaw — Líder em Velocidade e Arquitetura

| Dimensão | Posição | Análise |
|----------|---------|---------|
| **Atividade** | #1 | 37 PRs merged em 24h — cadência 3x superior à média |
| **Arquitetura** | Diferencial | Reborn stack com WIT-compatible WASM, secrets/network scoped, dispatcher registry |
| **Comunidade** | Em crescimento | Epic #2987 com 27 issues filhas — governança estruturada |
| **Maturidade** | Pré-produção | 4 canary lanes falhando no mesmo commit — risco de regressão |

**Vantagens frente aos pares:**
- **Contrato canônico v2:** Centralização de política ação-vs-capability em todas as camadas (prompt, runtime, bridge, tools) — elimina inconsistências que outros projetos ainda tratam como issues separadas.
- **WASM-first:** IronClaw é o único projeto com runtime tool baseado em WIT (`crates/ironclaw_wasm`), posicionando-se para ecossistema de plugins cross-language.
- **Sprint orquestrado:** A landing strategy do Reborn (#2987) demonstra maturidade de engineering com decomposição em PRs incrementais e gates de staging.

**Diferenças técnicas:**
- Abordagem de capabilities/obligations kontrast com tool-calling tradicional dos demais.
- Trust-aware authorization (`TrustAwareCapabilityDispatchAuthorization`) — nenhum outro projeto implementa trust modeling.
- Multi-runtime dispatcher (ScriptRuntime, MCPRuntime, WASMRuntime) — arquitetura plugável não vista nos pares.

---

## 4. Focos Técnicos Compartilhados

Os projetos convergem em quatro necessidades técnicas independentemente:

| Foco Técnico | Projetos Afetados | Evidência |
|--------------|-------------------|-----------|
| **Gerenciamento de contexto/memória** | Hermes Agent, CoPaw, ZeroClaw, NanoBot | Lazy Tool Schema Loading (#6839, 7 👍); Memory session_id mismatch (#5550); CJK-Aware Memory Search (v1.1.5); Context Compaction Fallback |
| **Segurança e isolamento** | IronClaw, Hermes Agent, ZeroClaw, CoPaw | Context spillage S0 (#5415); Approval gate 87-92% violação (#17619); Security policy default_allowed_commands (#874); Arbitrary File Traversal (#3955) |
| **Multicanal (WeChat, Feishu, Telegram, Matrix)** | Todos exceto NullClaw | 12+ issues de canais abertas combinadas; regression do MiniMax provider (#2590); Feishu reply_in_thread ignorado (#3533) |
| **Provedores alternativos (DeepSeek, Ollama, Copilot)** | NanoBot, Hermes Agent, ZeroClaw, PicoClaw, CoPaw | DeepSeek thinking mode (#2706); Ollama tool_count=0 (#5459); Copilot routing bug (#6242); Provider MiniMax quebrado (#2590) |
| **Voice/STT** | ZeroClaw, Hermes Agent, PicoClaw | Voice capture buffer (#5978); Telegram voice transcription (#5509); Matrix voice transcription (#6153); /talk sessions (#6728) |

**Padrão identificado:** A fragmentação de integrações de canais e provedores sugere que o ecossistema está em fase de "gold rush" — adicionando suporte a tudo antes de consolidar estabilidade em qualquer um.

---

## 5. Análise de Diferenciação

| Projeto | Foco Principal | Público-Alvo | Arquitetura-Chave |
|---------|----------------|--------------|-------------------|
| **IronClaw** | Capability/action modeling, WASM runtime | Operadores enterprise, desenvolvedores de plugins | Reborn stack com contracts canônicos, trust-aware auth |
| **Hermes Agent** | CLI/TUI interativo, observabilidade | Desenvolvedores individuais, usuários de modelos locais | Pipeline de tools com parser V4A, ACP protocol |
| **ZeroClaw** | Performance Rust, web gateway, segurança | Self-hosted, usuários com constraints de privacidade | Rust async runtime, DockerSandbox, OTel spans |
| **CoPaw (QwenPaw)** | Console multi-agente, CJK-first | Usuários asiáticos, equipes com múltiplos agentes | Console com workspace isolation, Tauri desktop |
| **PicoClaw** | Simplicidade, CLI-first, multi-provedor | Usuários seeking minimalism, IoT/automação | MQTT, OpenVINO, Bedrock streaming |
| **NanoBot** | Workflows estruturados, hooks centralizados | Power users, integrações complexas | HookCenter, 6-stage workflow, session isolation |
| **NullClaw** | Documentação de segurança, minimalismo | Nicho específico de segurança | Sistema de política de segurança configurável |

**Diferenciação por público:**
- **Enterprise/production:** IronClaw (capabilities), ZeroClaw (segurança Rust)
- **Desenvolvedor individual:** Hermes Agent (CLI rico), PicoClaw (simplicidade)
- **Times multi-agente:** CoPaw (Console), NanoBot (workflows)
- **Mercado asiático:** CoPaw (CJK-first), NanoBot (Feishu sessions)

---

## 6. Tração e Maturidade da Comunidade

### Ranking por Tração Relativa

| Rank | Projeto | Indicadores Positivos | Indicadores Negativos |
|------|---------|------------------------|------------------------|
| 🥇 1 | **IronClaw** | 37 PRs merged/24h; 12 contribuidores novos; Epic estruturado | 4 canary lanes falhando; pré-produção |
| 🥈 2 | **NanoBot** | 12 novos contribuidores; 57 PRs em release; HookCenter aceito | 2 bugs críticos (MiniMax, Feishu thread) |
| 🥉 3 | **CoPaw** | v1.1.5 com CJK search; 7 PRs merged; desktop Tauri em revisão | 4 bugs críticos simultâneos; 52 dias sem resposta em #981 |
| 4 | **PicoClaw** | RFC TUI→CLI aprovado (8 👍); MQTT/OpenVINO PRs em revisão | 2 bugs críticos (DingTalk crash, DeepSeek image); stale issues |
| 5 | **ZeroClaw** | 21 issues fechadas/24h; 8 bugs resolvidos; 50 PRs backlog | 6 bugs S0/S1; 0 PRs merged; context spillage S0 aberto |
| 6 | **Hermes Agent** | 50 PRs atualizados; 7 👍 em Lazy Tool Schema | 0 PRs merged; 2 P1 simultâneos; approval gate 87-92% violado |
| 7 | **NullClaw** | Issue de docs resolvida proativamente | 0 atividade código; sem roadmap visível |

### Sinais de Maturidade

| Sinal | Projetos | Interpretação |
|-------|----------|----------------|
| **Governança estruturada** | IronClaw (#2987), NanoBot (RFC process) | Projetos crescendo além de feature factories |
| **Feature freeze + bug bash** | Hermes Agent, ZeroClaw | Consciência de dívida técnica; preparação para release |
| **Decomposição de PRs** | IronClaw (6 PRs do Reborn), PicoClaw (refactors split) | Maturidade de code review; redução de risk |
| **Stale issues acumuladas** | CoPaw (53 dias), PicoClaw (31 dias), Hermes (sem triagem) | Dívida de community management |

---

## 7. Sinais de Tendência

### Tendências Fortes (evidência em múltiplos projetos)

| Tendência | Evidência | Implicação |
|-----------|-----------|------------|
| **Otimização de token/context como prioridade #1** | Lazy Tool Schema Loading (7 👍); Skill compilation (#5146); Context Compaction; Memory DAG store (PR #6464) | Custo de LLM é dor primária; ferramentas de redução de overhead terão adoção massiva |
| **Workflows estruturados multi-estágio** | NanoBot 6-stage workflow; IronClaw Reborn services (PromptContext → Memory → Skill → InstructionBundle); CoPaw inter-agent tasks | Execução de agentes está evoluindo de loop simples para pipeline com stages explícitos |
| **Sistema de plugins/hooks centralizado** | NanoBot HookCenter; IronClaw capability catalog; Hermes Agent tool pipeline | Ecossistema de extensibilidade está se tornando requirement, não feature |
| **Multi-canal como commodity** | 12+ issues de canais; 5+ providers; 4+ plataformas de chat | Diferenciação por canais não é mais suficiente; estabilidade cross-channel é o diferenciador |
| **Desktop apps native (Tauri vs Electron)** | CoPaw migrando para Tauri 2.x; PicoClaw CLI-first post-TUI | Electron está perdendo espaço para Tauri em projetos que priorizam performance |
| **Voice/STT incipiente** | 4 projetos com PRs/features de voz; 3 issues de transcrição | Voice é a próxima fronteira de input, mas integração ainda é immature |

### Tendências Emergentes (sinais fracos mas consistentes)

| Tendência | Sinais | Risco/Oportunidade |
|-----------|-------|-------------------|
| **Isolamento de workspace multi-agente** | CoPaw #3936; PicoClaw #2715; ZeroClaw context spillage | Oportunidade: demanda clara não atendida; risco: complexidade arquitetural alta |
| **LLM local com inferência otimizada** | PicoClaw OpenVINO; ZeroClaw Ollama; Hermes MiniMax | Oportunidade: hardware Intel/NVIDIA local; risco: suporte fragmentado |
| **Segurança como feature de produto** | IronClaw trust-aware auth; ZeroClaw secrets scoped; NullClaw security policy | Oportunidade: enterprise adoption; risco: false sense of security se mal implementado |
| **MQTT para automação IoT** | PicoClaw #2705 | Nicho específico; baixa tração atual mas caso de uso cresce |

### Tendências em Declínio

| O que está sendo superado | Evidência |
|---------------------------|-----------|
| **TUI como interface primária** | PicoClaw deprecando TUI; Hermes Agent investindo em CLI + display rendering |
| **Hardcoded timeouts/providers** | NanoBot fix em #3532; ZeroClaw Ollama fix; Hermes Copilot token precedence |
| **Singleton de sessão por canal** | NanoBot Feishu isolated sessions; CoPaw multi-instance channels; PicoClaw per-sender history |

---

## Nota Metodológica

Este relatório consolida dados de sete repositórios GitHub em janela de 24h (2026-04-29–30). Limitações:

- **NullClaw** apresenta dados esparsos que podem não refletir atividade real.
- **Atividade GitHub** não captura comunicação em Discord/Slack/discusões privadas.
- **PRs "abertos"** em IronClaw/Hermes Agent/ZeroClaw indicam backlog de merge, não necessariamente abandono.
- **Releases** nightly/não-tagueadas (PicoClaw) são sub-representadas em métricas.

**Recomendação para decisores:** Priorizar IronClaw para partnerships técnicas (arquitetura mais madura); NanoBot para adoção de comunidade (tração crescente + features líderes); ZeroClaw para casos de uso Rust/performance-sensitive; evitar Hermes Agent até estabilização do approval gate.

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-04-30

---

## 1. Panorama do Dia

O projeto NanoBot apresenta **atividade intensa e saudável** em 30 de abril de 2026. Foram registradas 12 issues e 39 PRs atualizadas nas últimas 24h, evidenciando uma cadência de desenvolvimento acelerada. O lançamento da versão **v0.1.5.post3** trouxe 57 PRs merged e 12 novos contribuidores, com foco em tornar conversas cidadãs de primeira classe na plataforma — especialmente sessões isoladas para tópicos de grupos Feishu. A comunidade demonstra engajamento significativo em múltiplas frentes: integraciones de canais (WeChat, Telegram, Teams), melhorias de estabilidade (writes atômicos, timeouts configuráveis) e expansões de funcionalidades (workflows em 6 estágios, sistema de hooks centralizado).

---

## 2. Lançamentos

### 🎉 v0.1.5.post3 Released

| Item | Detalhe |
|------|---------|
| **Versão** | `v0.1.5.post3` |
| **PRs Merged** | 57 |
| **Novos Contribuidores** | 12 |
| **Data** | 2026-04-29 |

**Destaques do Release:**

O release marca uma evolução significativa na experiência de conversação multi-threaded:

- **📌 Sessões Isoladas para Grupos Feishu**: Tópicos de grupo agora recebem sessões isoladas, melhorando significativamente o contexto e a qualidade das interações em ambientes colaborativos.

- **🔧 Melhorias de Alcance e Polimento**: Consolidação de funcionalidades introduzidas no post2, com refinamentos de estabilidade.

**Sem Breaking Changes reportados** neste release.

> **Referência**: [Release v0.1.5.post3](https://github.com/HKUDS/nanobot/releases/tag/v0.1.5.post3)

---

## 3. Progresso do Projeto

### PRs Importantes Merged/Fechadas Hoje

| PR | Título | Impacto | Autor |
|----|--------|---------|-------|
| [#3541](https://github.com/HKUDS/nanobot/pull/3541) | HookCenter para hook points nomeados e descoberta de plugins | ⭐ **Arquitetura** — Sistema centralizado de hooks com suporte a interceptores (observar, mutar, short-circuit, cancelar) | aiguozhi123456 |
| [#3487](https://github.com/HKUDS/nanobot/pull/3487) | Suporte a controles de progresso por canal | ✅ **UX** — `sendProgress` e `sendToolHints` configuráveis por canal | boogieLing |
| [#3508](https://github.com/HKUDS/nanobot/pull/3508) | Write atômico para history.jsonl | 🛡️ **Estabilidade** — Evita corrupção em crashes/power loss | yorkhellen |
| [#3532](https://github.com/HKUDS/nanobot/pull/3532) | Respeitar max iterations configurado para subagentes | 🐛 **Bug Fix** — Remove hardcoded `15`, usa configuração do agente pai | boogieLing |
| [#3505](https://github.com/HKUDS/nanobot/pull/3505) | Provider Olostep para web search | 🔍 **Nova Feature** — Backport do nightly, SDK oficial integrado | chengyongru |
| [#3457](https://github.com/HKUDS/nanobot/pull/3457) | Skill built-in `create-instance` | 🚀 **Usabilidade** — Criação de instâncias via conversa | chengyongru |
| [#3510](https://github.com/HKUDS/nanobot/pull/3510) | Sanitização de user_id Matrix para Windows | 🪟 **Compatibilidade** — Corrige WinError 123 por `:` em paths | JiajunBernoulli |

**PRs com Trabalhos Estruturados (6 estágios)**:
Múltiplos PRs de x804907 implementam workflow em 6 estágios (classificação → planejamento → execução → compressão → validação → relatório) com fallback automático e testes completos. ([#3535](https://github.com/HKUDS/nanobot/pull/3535), [#3531](https://github.com/HKUDS/nanobot/pull/3531), [#3530](https://github.com/HKUDS/nanobot/pull/3530))

---

## 4. Temas Quentes da Comunidade

### Issues/PRs com Maior Engajamento

| Issue/PR | Título | Comentários | Reações | Status |
|----------|--------|-------------|---------|--------|
| [#3095](https://github.com/HKUDS/nanobot/issues/3095) | Custom provider com Anthropic API | 6 | 0 | ✅ Closed |
| [#2590](https://github.com/HKUDS/nanobot/issues/2590) | Provider MiniMax quebrado no post6 | 5 | 0 | 🔴 Open |
| [#1099](https://github.com/HKUDS/nanobot/issues/1099) | Config para cron request param | 3 | 2 | ✅ Closed |
| [#1783](https://github.com/HKUDS/nanobot/issues/1783) | Codex provider: timeout 60s hardcoded | 2 | 0 | ✅ Closed |
| [#3518](https://github.com/HKUDS/nanobot/issues/3518) | Suporte a modelos Xiaomi | 2 | 0 | ✅ Closed |

**Análise das Demandas Principais:**

1. **🔧 Provedores Custom e Timeout Configurável**: A comunidade demonstra forte interesse em flexibilidade de provedores. A issue #1783 (timeout hardcoded) foi fechada, sugerindo que o problema foi endereçado — verificar se o PR [#3532](https://github.com/HKUDS/nanobot/pull/3532) contempla isso.

2. **⚠️ Regressão do MiniMax Provider (#2590)**: 5 comentários indicam problema real de regressão. Usuário reporta que após upgrade para `v0.1.4.post6`, o provider MiniMax integrado parou de funcionar mesmo com configurações válidas. **Requer atenção imediata**.

3. **🔄 Feature Xiaomi Models (#3518)**: Pedido fechado rapidamente — verificar se foi implementado ou marcado como `wontfix`.

---

## 5. Bugs e Estabilidade

### Problemas Reportados Hoje

| Severidade | Issue | Descrição | Status |
|------------|-------|-----------|--------|
| 🔴 **Alta** | [#2590](https://github.com/HKUDS/nanobot/issues/2590) | Provider MiniMax não funciona após upgrade para post6 | 🟡 Open |
| 🔴 **Alta** | [#3533](https://github.com/HKUDS/nanobot/issues/3533) | `reply_in_thread` forçado em grupos Feishu ignorando config | 🟢 Open |
| 🟡 **Média** | [#1068](https://github.com/HKUDS/nanobot/issues/1068) | Modelos locais com alucinação | 🟡 Open |
| 🟡 **Média** | [#2341](https://github.com/HKUDS/nanobot/issues/2341) | WebFetchTool sempre faz proxy via Jina Reader (privacidade) | ✅ Closed |
| 🟢 **Baixa** | [#3431](https://github.com/HKUDS/nanobot/issues/3431) | MS Teams threaded replies usavam endpoint errado | ✅ Closed |

**Bugs Abertos Críticos:**

1. **#2590 — MiniMax Provider Quebrado**: Regression testada pelo usuário. Configuração válida parou de funcionar. Potencial impacto em produção.

2. **#3533 — reply_in_thread Ignorado**: Bug em `nanobot/channels/feishu.py:1543-1545` onde `reply_in_thread=True` é forçado independente da configuração `replyToMessage`. Afeta experiência em grupos Feishu.

**PRs de Fixes Merged:**
- [#3508](https://github.com/HKUDS/nanobot/pull/3508) — Write atômico resolve corrupção de history.jsonl
- [#3510](https://github.com/HKUDS/nanobot/pull/3510) — Sanitização de user_id Matrix
- [#3517](https://github.com/HKUDS/nanobot/pull/3517) — Fix context_token para cron jobs WeChat

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| Feature | Issue/PR | Solicitante | Complexidade Estimada |
|---------|----------|-------------|----------------------|
| 🎯 Gateway start/stop/restart/status | [#3538](https://github.com/HKUDS/nanobot/pull/3538) | choiking | Média |
| 👥 Multi-conta WeChat pessoal | [#3542](https://github.com/HKUDS/nanobot/pull/3542) | gracece | Alta |
| 🧩 Wizard de upgrade do nanobot | [#3539](https://github.com/HKUDS/nanobot/pull/3539) | chengyongru | Média |
| 🤖 CLAUDE.md para contribuidores IA | [#3534](https://github.com/HKUDS/nanobot/pull/3534) | chengyongru | Baixa |
| 📺 Allowlist de grupos Telegram | [#2867](https://github.com/HKUDS/nanobot/pull/2867) | tycoi2005 | Média |
| 🔗 SwarmScore (reputação portátil) | [#3512](https://github.com/HKUDS/nanobot/issues/3512) | bkauto3 | Ideia |

**Features em Desenvolvimento Ativo:**

1. **#3542 — Multi-conta WeChat**: Refatoração significativa do canal WeChat para suportar múltiplas contas pessoais sob uma instância. Mantém backward compatibility.

2. **#3538 — Gateway CLI Commands**: Comandos start/stop/restart/status para nanobot gateway, com metadata de runtime local e documentação.

3. **#2867 — Telegram Group Allowlist**: Permite configurar IDs de grupos Telegram permitidos, com fallback para checagem legacy por usuário.

**Sinais de Roadmap Identificados:**
- Sistema de hooks centralizado (HookCenter) sugere preparação para ecossistema de plugins
- Workflow em 6 estágios indica evolução do agente para execução mais estruturada
- Suporte a mais provedores (Xiaomi, Olostep) mostra tendência de diversificação

---

## 7. Resumo de Feedback dos Usuários

### Dores e Cenários Reportados

| Feedback | Issue | Sentimento |
|----------|-------|------------|
| **Frustração com regressão MiniMax** | [#2590](https://github.com/HKUDS/nanobot/issues/2590) | 😡 Insatisfeito |
| **Modelos locais alucinando** | [#1068](https://github.com/HKUDS/nanobot/issues/1068) | 😓 Insatisfeito |
| **Version unreleased muito verbosa** | [#877](https://github.com/HKUDS/nanobot/issues/877) | 😐 Neutro |
| **Elogio geral + potencial** | [#877](https://github.com/HKUDS/nanobot/issues/877) | 😊 Satisfeito |
| **Privacidade com Jina Reader** | [#2341](https://github.com/HKUDS/nanobot/issues/2341) | ⚠️ Preocupado |

**Análise de Sentimentos:**

**Positivo:**
- Issue #877 menciona: *"thank you for this project, it has been a lot of fun playing around with it and i can only imagine how incredible it will be after some maturation"* — demonstração de confiança no potencial do projeto.

**Negativo:**
- **Regressão MiniMax (#2590)**: Usuáriosreportam quebra de funcionalidade após update, um dos problemas mais comentados.
- **Privacidade (#2341)**: Preocupação com proxy obrigatório via Jina Reader mesmo sem API key configurada. Foi fechada, mas merece verificação de implementação.

**Neutro/Técnico:**
- Issues de configuração de timeout, cron params e providers demonstram usuários avançados customizando a plataforma.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Abertas há Tempo

| Issue | Idade | Comentários | Prioridade |
|-------|-------|-------------|------------|
| [#1068](https://github.com/HKUDS/nanobot/issues/1068) Local hallucinating | ~65 dias | 2 | ⚠️ Alta |
| [#877](https://github.com/HKUDS/nanobot/issues/877) Feedback unreleased | ~69 dias | 1 | 🟡 Média |
| [#2867](https://github.com/HKUDS/nanobot/pull/2867) Telegram allowlist | ~24 dias | 0 | 🟢 Em Progress |

**Issues Críticas Sem Resposta:**

1. **#1068 — Local Hallucinating** (desde ~2026-02-23)
   - Usuário reportando alucinação consistente com todos os modelos locais
   - Apenas 2 comentários, nenhum resposta da equipe
   - Potencial bug de configuração ou código que afeta vários modelos
   - **Ação recomendada**: Triagem e reprodução do problema

2. **#877 — Feedback Versão Unreleased** (desde ~2026-02-20)
   - Feedback detalhado do usuário sobre comportamento do agente
   - Menciona respostas excessivas e incapacidade
   - Apenas 1 comentário, sem resposta oficial
   - **Ação recomendada**: Avaliar feedback e possivelmente fechar com explicação

3. **#2867 — Telegram Group Allowlist** (desde ~2026-04-06)
   - PR aberto há 24 dias sem merge ou feedback
   - Implementação parece completa
   - **Ação recomendada**: Code review e merge ou feedback ao autor

---

## Métricas Resumidas do Dia

| Métrica | Valor |
|---------|-------|
| 📊 Issues Ativas | 4 |
| ✅ Issues Fechadas | 8 |
| 🔀 PRs Abertos | 13 |
| 🎉 PRs Merged/Closed | 26 |
| 🆕 Novos Contribuidores | 12 |
| 🏷️ Releases | 1 (v0.1.5.post3) |
| ⚠️ Bugs Abertos Críticos | 2 |
| 🔧 Features em Desenvolvimento | 5+ |

---

**Saúde Geral do Projeto**: ✅ **BOM** — Alta atividade de desenvolvimento, release recente significativo, mas com 2 bugs críticos em aberto (MiniMax e Feishu thread) que requerem atenção imediata.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent
## NousResearch/hermes-agent — 2026-04-30

---

## 1. Panorama do Dia

O projeto mantém atividade intensa com **50 issues e 50 PRs atualizados nas últimas 24h**, indicando alta carga de trabalho da comunidade. O pipeline de bugs continua como tema central, com pelo menos **2 bugs classificados como P1** (críticos) envolvendo corrupção de tool calls e múltiplos bugs no parser V4A. A plataforma apresenta regressões significativas no approval gate (87-92% de violação em sessões reais) e problemas de estabilidade no TUI, especialmente com texto multilíngue. Não houve releases hoje, e o release mais recente permanece não especificado. A proporção de 42 issues abertas versus 8 fechadas sugere backlog crescente.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto não publicou novas versões hoje. Para referência, a última versão conhecida é a v0.6.0 (contexto do issue #6931). Usuários em macOS/Python 3.11 reportam problemas de resolução de dependências com o extra `matrix`.

---

## 3. Progresso do Projeto

### PRs Importantes Recentes

| PR | Título | Componente | Status | Impacto |
|----|--------|------------|--------|---------|
| [#15653](https://github.com/NousResearch/hermes-agent/pull/15653) | fix(acp): thread-safe interactive approval via contextvars | ACP, Security | **ABERTO** (P1) | Corrige race condition no approval gate — GHSA-96vc-wcxf-jjff |
| [#17246](https://github.com/NousResearch/hermes-agent/pull/17246) | fix: resolve 7 identified issues [automated] | CLI, Config | **ABERTO** (P2) | Corrige migração de config resetting terminal.cwd |
| [#17622](https://github.com/NousResearch/hermes-agent/pull/17622) | fix(copilot): honor token precedence | Provider, Copilot | **ABERTO** (P2) | Resolve HTTP 400 em modelos Copilot não-padrão |
| [#17625](https://github.com/NousResearch/hermes-agent/pull/17625) | fix(tui): hide reasoning panels immediately | TUI | **ABERTO** (P3) | Melhoria de UX no display de reasoning |
| [#17623](https://github.com/NousResearch/hermes-agent/pull/17623) | fix(tui): honor launch toolsets | TUI, CLI | **ABERTO** (P2) | Propaga flags de toolsets para subprocesso TUI |
| [#6728](https://github.com/NousResearch/hermes-agent/pull/6728) | fix: voice messages in /talk sessions | Gateway, TTS | **ABERTO** (P3) | Habilita transcrição de voz em sessões /talk |
| [#6464](https://github.com/NousResearch/hermes-agent/pull/6464) | feat(lcm): Lossless Context Management | Agent, Plugins | **ABERTO** (P3) | Novo ContextEngine com DAG-based message store |
| [#6736](https://github.com/NousResearch/hermes-agent/pull/6736) | feat(display): rich rendering for reasoning blocks (PR6) | CLI, Display | **ABERTO** (P3) | Estende pipeline de rendering para blocos de reasoning |

**Observação**: Nenhum PR foi merged/fechado nas últimas 24h entre os 50 PRs listados — todos permanecem em estado OPEN, sugerindo bottleneck no processo de review ou merge.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| Issue | Título | Comentários | 👍 | Categoria |
|-------|--------|-------------|-----|-----------|
| [#6078](https://github.com/NousResearch/hermes-agent/issues/6078) | Unified one-command migration across machines | 5 | 2 | Feature |
| [#6839](https://github.com/NousResearch/hermes-agent/issues/6839) | Lazy Tool Schema Loading — Two-Pass Tool Injection | 3 | **7** | Feature (Performance) |
| [#17603](https://github.com/NousResearch/hermes-agent/issues/17603) | Chinese text rendering: character scattering | 3 | 0 | Bug (TUI) |
| [#12534](https://github.com/NousResearch/hermes-agent/issues/12534) | Docker env vars not forwarded | 2 | 1 | Bug (Docker) |
| [#17619](https://github.com/NousResearch/hermes-agent/issues/17619) | Approval gate violated in 87-92% of sessions | 1 | 0 | Bug (Security) |
| [#6741](https://github.com/NousResearch/hermes-agent/issues/6741) | Structured session tracing | 1 | 0 | Feature (Observability) |

### Análise dos Temas

**Migração Unificada (#6078)**: Demanda por workflow de migração completo para mover Hermes entre máquinas e sistemas operacionais. O usuário solicita consolidar `hermes claw migrate` e `hermes profile export/import` em comando único. Considerado estratégico para longo prazo.

**Lazy Tool Schema Loading (#6839)**: Com 50+ tools habilitados, cada chamada consome 3.500-5.000 tokens em tool schemas — independente de necessidade. A comunidade demonstra alto interesse (7 👍), sugerindo que otimização de tokens é prioridade para usuários de modelos locais.

**Rendering de Texto Multilíngue (#17603)**: Bug crítico de UX onde texto chinês causa scattering e ghosting no TUI. Relatado como duplicado em [#17602](https://github.com/NousResearch/hermes-agent/issues/17602), indicando impacto em usuários asiáticos.

---

## 5. Bugs e Estabilidade

### Por Severidade

#### **P1 — Críticos (2)**

| Issue | Título | Componente | Descrição |
|-------|--------|------------|-----------|
| [#6831](https://github.com/NousResearch/hermes-agent/issues/6831) | 9 bugs in V4A patch parser and fuzzy match | Tools | Data loss, partial apply, silent errors — arquivos >2000 linhas truncados |
| [#6841](https://github.com/NousResearch/hermes-agent/issues/6841) | Tool-calling pipeline corrupts tool names and JSON | Agent | Payload malformado reaching validator, falhas genéricas em tool calls |

#### **P2 — Altos (14)**

| Issue | Título | Componente | Link |
|-------|--------|------------|------|
| Approval gate violations | 87-92% de sessões violam approval gate | Agent, Security | [#17619](https://github.com/NousResearch/hermes-agent/issues/17619) |
| Model routing bug | `/model provider/model` routing to default | CLI | [#6242](https://github.com/NousResearch/hermes-agent/issues/6242) *(CLOSED)* |
| HERMES_INTERACTIVE set in non-TTY | Sudo prompts em Docker/cron | CLI | [#17575](https://github.com/NousResearch/hermes-agent/issues/17575) |
| API mode reset | `_ensure_runtime_credentials()` overwrites api_mode | CLI, Config | [#17575](https://github.com/NousResearch/hermes-agent/issues/17575) |
| Gateway restart race | Bash watcher causing zombies em Docker | Gateway | [#17576](https://github.com/NousResearch/hermes-agent/issues/17576) |
| Docker env vars | `docker_forward_env` não forwarded | Terminal | [#12534](https://github.com/NousResearch/hermes-agent/issues/12534) |
| Slack manifest broken | Manifest generation falha | Gateway, Slack | [#17054](https://github.com/NousResearch/hermes-agent/issues/17054) |
| Chinese TUI rendering | Character scattering/ghost | TUI | [#17603](https://github.com/NousResearch/hermes-agent/issues/17603) |
| Feishu hardcoded identity | DEFAULT_AGENT_IDENTITY usado em vez de SOUL.md | Gateway, Feishu | [#6731](https://github.com/NousResearch/hermes-agent/issues/6731) |
| Copilot empty responses | Thinking-only responses when tool denied | ACP, Copilot | [#17284](https://github.com/NousResearch/hermes-agent/issues/17284) |
| MiniMax connection drops | RemoteProtocolError after provider switch | Agent, MiniMax | [#6838](https://github.com/NousResearch/hermes-agent/issues/6838) |
| WeChat file timeout | asyncio timeout em envio de arquivos | Gateway, WeChat | [#17595](https://github.com/NousResearch/hermes-agent/issues/17595) |
| Telegram path parsing | Paths starting with `/` parsed as commands | Gateway, Telegram | [#6976](https://github.com/NousResearch/hermes-agent/issues/6976) |
| Matrix E2EE conflict | `matrix-nio[e2e]` conflict with HTTP deps | Platform, Matrix | [#6931](https://github.com/NousResearch/hermes-agent/issues/6931) |

#### **P3 — Medios (8)**

Incluem: WSL2 TTS audio routing, TTS speed control para Edge/OpenAI/ElevenLabs, per-model max_tokens, git-free installation, OpenCode Go doctor probe, observability tracing.

### Análise de Estabilidade

O estado geral é **preocupante** com:
- **2 bugs P1 simultâneos** relacionados a integridade de dados
- **Regressão de segurança crítica**: approval gate funcionando em apenas 8-13% das sessões
- **Acúmulo de 14 bugs P2** sem resolução aparente nas últimas 24h
- **Problemas recorrentes de containerização** (Docker) — pelo menos 4 issues distintas

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features com Maior Potencial de Inclusão

| Issue | Título | 👍 | Complexidade | Link |
|-------|--------|-----|--------------|------|
| Lazy Tool Schema Loading | Two-pass injection para reduzir token overhead | **7** | Alta | [#6839](https://github.com/NousResearch/hermes-agent/issues/6839) |
| Unified Migration Command | Consolidação de workflows de migração | 2 | Média | [#6078](https://github.com/NousResearch/hermes-agent/issues/6078) |
| Per-model max_tokens | Suporte em custom_providers config | 1 | Baixa | [#15037](https://github.com/NousResearch/hermes-agent/issues/15037) |
| Git-free Installation | Version-based auto-update sem .git | 1 | Média | [#7070](https://github.com/NousResearch/hermes-agent/issues/7070) |
| TTS Speed Control | Wire native rate params para múltiplos providers | 0 | Média | [#6926](https://github.com/NousResearch/hermes-agent/issues/6926) |
| Lossless Context Management | ContextEngine plugin com DAG store | Em PR | Alta | [#6464](https://github.com/NousResearch/hermes-agent/pull/6464) |
| Structured Session Tracing | Timestamps start/end para profiling | 0 | Média | [#6741](https://github.com/NousResearch/hermes-agent/issues/6741) |
| Gateway Fast Mode | Priority Processing para Telegram | 0 | Média | [#7011](https://github.com/NousResearch/hermes-agent/issues/7011) |

### Sinais de Roadmap Identificados

1. **Otimização de Contexto**: A comunidade sinaliza fortemente (7 👍) que gerenciamento de tokens é prioritário — Lazy Tool Schema Loading pode indicar direção do roadmap.
2. **Observabilidade**: Demanda crescente por tracing estruturado e timestamps.
3. **Multi-plataforma**: Issues de Slack, WeChat, Feishu, Matrix indicam expansão de integrações.
4. **Instalação**: Críticas ao modelo git-based sugerem necessidade de alternativa mais simples.
5. **LCM em desenvolvimento**: PR #6464 representa mudança arquitetural significativa no ContextEngine.

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais Identificadas

| Dor | Frequência | Impacto | Link |
|-----|------------|---------|------|
| Aprovação interativa não funciona corretamente | **Crítica** | Segurança, UX | [#17619](https://github.com/NousResearch/hermes-agent/issues/17619) |
| Tool calls falham silenciosamente | **Alta** | Confiabilidade | [#6831](https://github.com/NousResearch/hermes-agent/issues/6831), [#6841](https://github.com/NousResearch/hermes-agent/issues/6841) |
| Docker/Container incompatibilidades | **Alta** | Infraestrutura | [#17575](https://github.com/NousResearch/hermes-agent/issues/17575), [#17576](https://github.com/NousResearch/hermes-agent/issues/17576), [#12534](https://github.com/NousResearch/hermes-agent/issues/12534) |
| Rendering TUI com caracteres não-ASCII | **Média** | Usuários internacionais | [#17603](https://github.com/NousResearch/hermes-agent/issues/17603) |
| Provider switching causa 404/erros | **Média** | Flexibilidade | [#17574](https://github.com/NousResearch/hermes-agent/issues/17574), [#6838](https://github.com/NousResearch/hermes-agent/issues/6838) |
| Custo/token overhead em modelos locais | **Alta** | Eficiência | [#6839](https://github.com/NousResearch/hermes-agent/issues/6839) |

### Cenários de Uso Reportados

- **Usuários em container**: Docker, WSL2, Paperclip — interatividade indesejada
- **Usuários multilíngues**: Texto chinês no TUI não renderiza corretamente
- **Usuários multi-plataforma**: Integrações Slack/WeChat/Feishu/Matrix com bugs
- **Usuários de modelos locais**: Token overhead de 3.5k-5k por chamada

### Indicadores de Satisfação

- **7 usuários** votaram a favor de Lazy Tool Schema Loading — indicando dor real com overhead
- **Issue de approval gate** com 129 sessões auditadas demonstra usuário avançado monitorando comportamento
- **Múltiplos PRs** em andamento indicam contributors ativos

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Stale

| Issue | Título | Criado | Atualizado | Status | Prioridade |
|-------|--------|--------|------------|--------|------------|
| [#6831](https://github.com/NousResearch/hermes-agent/issues/6831) | 9 bugs in V4A patch parser | 2026-04-09 | 2026-04-29 | **OPEN** | **P1** |
| [#6841](https://github.com/NousResearch/hermes-agent/issues/6841) | Tool-calling pipeline corrupts JSON | 2026-04-09 | 2026-04-29 | **OPEN** | **P1** |
| [#6839](https://github.com/NousResearch/hermes-agent/issues/6839) | Lazy Tool Schema Loading | 2026-04-09 | 2026-04-29 | **OPEN** | P3 (7 👍) |
| [#6731](https://github.com/NousResearch/hermes-agent/issues/6731) | Feishu hardcoded identity | 2026-04-09 | 2026-04-29 | **OPEN** | P2 |
| [#6838](https://github.com/NousResearch/hermes-agent/issues/6838) | MiniMax connection drops | 2026-04-09 | 2026-04-29 | **OPEN** | P2 |
| [#6839](https://github.com/NousResearch/hermes-agent/issues/6839) | Lazy Tool Schema Loading | 2026-04-09 | 2026-04-29 | **OPEN** | P3 |
| [#7024](https://github.com/NousResearch/hermes-agent/issues/7024) | _build_cheap_route() missing credential_pool | 2026-04-10 | 2026-04-29 | **OPEN** (stale) | P2 |
| [#7074](https://github.com/NousResearch/hermes-agent/issues/7074) | hermes doctor probes wrong OpenCode endpoint | 2026-04-10 | 2026-04-29 | **OPEN** | P3 |
| [#6931](https://github.com/NousResearch/hermes-agent/issues/6931) | Matrix E2EE dependency conflict | 2026-04-10 | 2026-04-29 | **OPEN** | P2 |

### Issues Fechadas Recentemente (值得关注)

| Issue | Título | Fechada | Observação |
|-------|--------|---------|-----------|
| [#6242](https://github.com/NousResearch/hermes-agent/issues/6242) | Model routing to default provider | 202

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-04-30

---

## 1. Panorama do Dia

O projeto PicoClaw mantém um alto nível de atividade com **20 PRs e 11 issues atualizadas nas últimas 24h**, indicando uma release cycle acelerada. A versão nightly `v0.2.7-nightly.20260429.db1bc6a1` foi publicada, sinalizando preparação para a próxima release estável. Cinco PRs foram fechados/merged hoje, incluindo duas correções críticas de segurança e o início da migração da TUI para CLI. A comunidade demonstra forte interesse em integrações com novos provedores (DeepSeek, OpenVINO, MQTT) e correções de estabilidade em canais.

---

## 2. Lançamentos

### Nova Build Available

**Nightly Build: `v0.2.7-nightly.20260429.db1bc6a1`**

| Campo | Detalhe |
|-------|---------|
| Tipo | Automated Nightly Build |
| Commit | `db1bc6a1` |
| Comparação | [v0.2.7...main](https://github.com/sipeed/picoclaw/compare/v0.2.7...main) |
| Status | ⚠️ Instável — uso em produção não recomendado |

> **Nota:** Esta build inclui todas as contribuições merged até o commit atual. Usuários em produção devem aguardar a release estável.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados Hoje (5 total)

| # | PR | Autor | Impacto |
|---|-----|-------|---------|
| [#2710](https://github.com/sipeed/picoclaw/pull/2710) | Add CLI support for custom OpenAI-compatible endpoints and remove TUI | taonyx | **Estratégico** — Migração da interface TUI para CLI, alinhado com RFC #2208 |
| [#2700](https://github.com/sipeed/picoclaw/pull/2700) | fix(docker): restore `make docker-build` | imguoguo | **Crítico** — Restaura capacidade de build Docker; corrige Go version para `golang:1.25-alpine` |
| [#2711](https://github.com/sipeed/picoclaw/pull/2711) | Fix frontend copy button in HTTP context | openapphub | **UX** — Elimina erro em contextos não-seguros (HTTP) |
| [#2709](https://github.com/sipeed/picoclaw/pull/2709) | Fix frontend copy button in HTTP context (dup) | openapphub | **Duplicado** — Mesmo fix que #2711 |
| [#2714](https://github.com/sipeed/picoclaw/pull/2714) | attribute history messages per sender | is-Xiaoen | **Arquitetural** — Substituído por #2715 (split em commits focados) |

### Destaques de PRs Abertos Importantes

| # | PR | Autor | Descrição |
|---|-----|-------|-----------|
| [#2715](https://github.com/sipeed/picoclaw/pull/2715) | attribute history messages per sender | is-Xiaoen | ** fecha #2702** — Substituto refatorado de #2714. Permite atribuição de histórico por remetente em chats grupais (Discord, Telegram groups, Slack) |
| [#2705](https://github.com/sipeed/picoclaw/pull/2705) | add MQTT channel support | hehaijunandhenry | **Novo canal** — Suporte ao protocolo MQTT para comunicação de mensagens |
| [#2703](https://github.com/sipeed/picoclaw/pull/2703) | Add Intel OpenVINO Model Server support | JohnLeFeng | **Infraestrutura** — Suporte para inferência LLM local em CPU/GPU/NPU Intel |
| [#2645](https://github.com/sipeed/picoclaw/pull/2645) | feat(bedrock): implement StreamingProvider | loafoe | **Provedor** — Streaming em tempo real via AWS ConverseStream API |
| [#2624](https://github.com/sipeed/picoclaw/pull/2624) | feat(providers): OpenAI-compatible embeddings | badgerbees | **Provedor** — Suporte a embeddings via endpoints OpenAI-compatíveis (vLLM-style) |

---

## 4. Temas Quentes da Comunidade

### Issues/PRs com Maior Engajamento

| # | Tipo | Título | Autor | 👍 | 💬 | Análise |
|---|------|--------|-------|----|----|---------|
| [#2208](https://github.com/sipeed/picoclaw/issues/2208) | RFC | Deprecar TUI e migrar para CLI | taonyx | **8** | 1 | ✅ **RESOLVIDO** — RFC aceito; PR #2710 implementa a migração. Alto apoio da comunidade |

### Análise dos Temas

1. **Migração TUI → CLI**: A decisão estratégica de deprecar a interface TUI em favor da CLI foi bem recebida (8 reações positivas). Isso reduz a carga de manutenção e centraliza recursos no WebUI + CLI.

2. **Suporte a Provedores**: A comunidade demonstra forte demanda por novos provedores:
   - DeepSeek v4 com thinking mode (#2706)
   - OpenCode provider (#2671)
   - OpenAI-compatible embeddings (#2624)

3. **Mensagens por Remetente em Grupos**: Issue #2702 (atendida por #2715) resolve uma limitação crítica em chats grupais, onde hoje todos os participantes compartilham um histórico único.

---

## 5. Bugs e Estabilidade

### Bugs Reportados Hoje (8 issues + 2 PRs de fix)

| # | Severidade | Domínio | Título | Status | Impacto |
|---|-----------|---------|--------|--------|---------|
| [#1042](https://github.com/sipeed/picoclaw/issues/1042) | 🟡 Medium | tool | exec工具的guardCommand方法问题 | Open | 6 comments | Bloqueio falso em comandos legítimos (ex: `curl wttr.in/Beijing`) por regex ingênua |
| [#2548](https://github.com/sipeed/picoclaw/issues/2548) | 🟡 Medium | provider/config | Multiple authentication credentials received | Open | 5 comments | Erro de configuração com provedores múltiplos |
| [#2704](https://github.com/sipeed/picoclaw/issues/2704) | 🔴 Alta | channel | DingTalk SDK panic导致gateway异常停止 | Open | 0 comments | Crash do gateway por race condition no SDK (envio para channel fechado) |
| [#2718](https://github.com/sipeed/picoclaw/issues/2718) | 🔴 Alta | provider/agent | DeepSeek 400 'unknown variant image_url' | Open | 0 comments | Falha quando modelo não-multimodal recebe imagem em histórico |
| [#2706](https://github.com/sipeed/picoclaw/issues/2706) | 🟡 Medium | provider | DeepSeek v4 thinking model问题 | Open | 1 comment | `reasoning_content` não persiste entre requisições → erro 400 |
| [#2621](https://github.com/sipeed/picoclaw/issues/2621) | 🟡 Medium | channel/agent | Session context lost after API timeout | Open | 1 comment | Cria sessão duplicada ao invés de retomar contexto |
| [#2716](https://github.com/sipeed/picoclaw/issues/2716) | 🟡 Medium | channel | SVG files fail on Telegram | Open | 0 comments | `inferMediaType` mapeia SVG como `SendPhoto` que rejeita |
| [#2707](https://github.com/sipeed/picoclaw/pull/2707) | ✅ Fix | provider | fix(seahorse): persist reasoning_content | Open | — | **PR para #2706** — Persiste reasoning_content no histórico SQLite |

### PRs de Bug Fix Abertos

| # | PR | Autor | Descrição |
|---|-----|-------|-----------|
| [#2717](https://github.com/sipeed/picoclaw/pull/2717) | feat: add DeepSeek vision unsupported error detection | LiusCraft | Detecção de erro `unknown variant` para DeepSeek e provedores restritos |
| [#2708](https://github.com/sipeed/picoclaw/pull/2708) | fix(feishu): image download with API fallback | imguoguo | Fallback de API + suporte a imagens em mensagens post e cards |
| [#2713](https://github.com/sipeed/picoclaw/pull/2713) | fix(channels): dismiss tool feedback animation | imguoguo | Corrige goroutine de animação travada quando `ResponseHandled=true` |
| [#2192](https://github.com/sipeed/picoclaw/pull/2192) | fix(provider): anthropic_messages system cache_control | whtiehack | Corrige cache_control em mensagens Anthropic (fecha #2191) |

### Priorização Recomendada

```
🔴 Crítico:
├── #2704 — DingTalk SDK panic (gateway crash)
└── #2718 — DeepSeek image_url 400 (bloqueia Multimodal)
├── #2621 — Session context loss (experiência)
└── #2706 — DeepSeek thinking persistence
```

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| # | Tipo | Domínio | Título | 👍 | Potencial Roadmap |
|---|------|---------|--------|----|-------------------|
| [#2625](https://github.com/sipeed/picoclaw/issues/2625) | Enhancement | build | Provide compiled builds with WhatsApp support | 0 | Alta — Acesso via flag de build |
| [#2623](https://github.com/sipeed/picoclaw/issues/2623) | Enhancement | skill/config | .env file support | 0 | Média — Variáveis de ambiente para skills |
| [#2671](https://github.com/sipeed/picoclaw/issues/2671) | Enhancement | provider | opencode provider support | 0 | Alta — Provedor solicitado |
| [#2705](https://github.com/sipeed/picoclaw/pull/2705) | Feature (PR) | channel | MQTT channel support | 0 | **Em revisão** — Novo canal |
| [#2703](https://github.com/sipeed/picoclaw/pull/2703) | Feature (PR) | provider | Intel OpenVINO Model Server support | 0 | **Em revisão** — LLM local |
| [#2719](https://github.com/sipeed/picoclaw/pull/2719) | Feature (PR) | channel | slack_webhook output-only channel | 0 | **Em revisão** — Integração Slack |
| [#2645](https://github.com/sipeed/picoclaw/pull/2645) | Feature (PR) | provider | Bedrock StreamingProvider | 0 | **Em revisão** — AWS streaming |
| [#2696](https://github.com/sipeed/picoclaw/pull/2696) | Feature (PR) | tool | MCP per-request dynamic headers | 0 | **Em revisão** — Flexibilidade MCP |

### Sinais de Roadmap

| Sinal | Observação |
|-------|------------|
| 🆕 **Multi-provedor** | Crescente demanda por provedores alternativos (OpenCode, OpenVINO, DeepSeek) |
| 🔄 **Grupos multi-usuário** | #2715 endereça limitação crítica em chats grupais |
| 📡 **Canais IoT/Protocolos** | MQTT (#2705) expande casos de uso para automação |
| 🏗️ **CLI-first** | Migração TUI→CLI (#2710) indica direção arquitetural |
| 🐛 **Stale issues** | 4 issues classificadas como "stale" — possivelmente abandonadas |

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Dor | Evidência | Severidade |
|-----|-----------|------------|
| **Segurança excessiva no exec tool** | #1042: Comandos legítimos como `curl wttr.in/Beijing?T` são bloqueados por regex ingênua | 🟡 |
| **Crash do Gateway em DingTalk** | #2704: Panic 导致 6 eventos de timeout = 6 crashes | 🔴 |
| **Perda de contexto em timeouts** | #2621: API timeout causa criação de sessão duplicada | 🟡 |
| **Builds sem WhatsApp** | #2625: Usuários de Raspberry Pi Zero 2 não têm builds com WhatsApp | 🟡 |
| **Sem suporte .env** | #2623: Skills customizadas não recebem variáveis de ambiente | 🟢 |

### Cenários de Uso Identificados

1. **Raspberry Pi Zero 2 com WhatsApp** — Necessidade de builds otimizadas para hardware limitado
2. **LLM local com Intel OpenVINO** — #2703 addressa demanda por inferência on-premise
3. **Integração Slack via Webhooks** — #2719 permite push de mensagens para Slack
4. **Grupos multi-usuário** — Chat history por remetente (#2715)
5. **DeepSeek com thinking mode** — #2706/#2707/#2717 tratam cenário de reasoning chains

### Indicadores de Satisfação

- ✅ 8 reações no RFC de deprecação da TUI — comunidade apoia simplificação
- ✅ 1 reação no bug #1042 — bug reconhecido
- 🔄 0 reações nos PRs de features — possivelmente ainda não descobertos pela comunidade

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Stale (requerem triagem)

| # | Status | Idade | Título | Prioridade |
|---|--------|-------|--------|------------|
| [#2625](https://github.com/sipeed/picoclaw/issues/2625) | stale | 8 dias | WhatsApp compiled builds | 🟡 |
| [#2623](https://github.com/sipeed/picoclaw/issues/2623) | stale | 8 dias | .env file support | 🟢 |
| [#2621](https://github.com/sipeed/picoclaw/issues/2621) | stale | 8 dias | Session context lost | 🟡 |
| [#2610](https://github.com/sipeed/picoclaw/pull/2610) | stale | 9 dias | ci(release): existing tag support | 🟢 |
| [#2192](https://github.com/sipeed/picoclaw/pull/2192) | stale | 31 dias | anthropic_messages cache_control | 🟡 |
| [#2551](https://github.com/sipeed/picoclaw/pull/2551) | Open | 14 dias | standardize channel identification | 🟡 |
| [#2624](https://github.com/sipeed/picoclaw/pull/2624) | stale | 8 dias | OpenAI-compatible embeddings | 🟡 |

### PRs Blocked ou Requerendo Review

| # | Status | Idade | Título | Bloqueio |
|---|--------|-------|--------|----------|
| [#2715](https://github.com/sipeed/picoclaw/pull/2715) | Open | 1 dia | attribute history per sender | Review pendente |
| [#2705](https://github.com/sipeed/picoclaw/pull/2705) | Open | 1 dia | MQTT channel support | Review pendente |
| [#2703](https://github.com/sipeed/picoclaw/pull/2703) | Open | 2 dias | Intel OpenVINO support | Review pendente |
| [#2645](https://github.com/sipe

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório de Projeto — IronClaw | 2026-04-30

---

## 1. Panorama do dia

O projeto IronClaw está em **velocidade de desenvolvimento muito alta**. Nas últimas 24h foram abertas 28 issues, com 50 PRs atualizados — destes, 37 já foram merged/fechados, sinalizando uma cadência de integração excepcionalmente acelerada. O trabalho está consumido quase inteiramente pela **arquitetura Reborn**, com uma cascata de PRs sendo preparados para a integração em staging. A release v0.27.0 saiu ontem (2026-04-29), introduzindo o vocabulário canônico de status de capabilities e a centralização da política de superfície ação-vs-capability — uma melhoria contratual de infraestrutura sem breaking changes aparentes. 4 lanes de canary vivo reportaram falhas nas últimas 24h, todas no mesmo commit `2a65da7`, o que indica uma regressão pontual a investigar.

---

## 2. Lançamentos

### ironclaw-v0.27.0 — Released 2026-04-29

**Changeset principal:**

| Mudança | Escopo | Link |
|---|---|---|
| Vocabulário canônico de status de capabilities para o contrato v2 do runtime | `engine-v2` | [#2825](https://github.com/nearai/ironclaw/pull/2825) |
| Centralização da política de superfície ação-vs-capability (prompt, runtime, bridge projection, tool surface) | `engine-v2` | (parcial de #2825) |

**Análise:** Esta release representa um refinamento contratual significativo do engine-v2, não uma feature nova. A centralização da política de superfície significa que todas as camadas do sistema (prompt, runtime, bridge e tools) agora compartilham a mesma definição de "capability" vs "action", reduzindo o risco de inconsistências entre o que o modelo vê, o que o runtime autoriza e o que o bridge projeta. **Sem breaking changes identificadas** — é uma evolução contratual interna.

> **Nota de migração:** Não há etapas de migração explícitas para usuários, mas operadores em ambiente de staging devem monitorar o comportamento do engine-v2 pós-atualização.

---

## 3. Progresso do Projeto

### PRs merged/fechados nas últimas 24h (37 total) — Principais por impacto

| PR | Tamanho | Escopo | Impacto | Link |
|---|---|---|---|---|
| `#3096` | XL | WASM runtime (reborn) | Substitui #3028 com WIT-compatible WASM tool runtime limpo, construído sobre o contrato canônico wit/tool.wit. Adiciona `crates/ironclaw_wasm` | [#3096](https://github.com/nearai/ironclaw/pull/3096) |
| `#3077` | XL | Segurança (reborn) | Adiciona `crates/ironclaw_secrets` e `crates/ironclaw_network`: scoped secret storage, leases, meta-programming, SSRF check, egress gating | [#3077](https://github.com/nearai/ironclaw/pull/3077) |
| `#3028` | XL | WASM runtime (reborn) | Closed — substituído por #3096; minado para trabalho reutilizável | [#3028](https://github.com/nearai/ironclaw/pull/3028) |
| `#3027` | XL | Runtime lanes (reborn) | Adiciona `crates/ironclaw_scripts` e `crates/ironclaw_mcp`: ScriptRuntime, ScriptBackend, MCP tool/runtime | [#3027](https://github.com/nearai/ironclaw/pull/3027) |
| `#3017` | XL | Process lifecycle (reborn) | Adiciona `crates/ironclaw_processes`: ProcessStore, ProcessManager, ProcessHost, ProcessExecutor, subscriptions | [#3017](https://github.com/nearai/ironclaw/pull/3017) |
| `#3023` | L | Dispatcher substrate (reborn) | Adiciona `crates/ironclaw_dispatcher`: RuntimeDispatcher, RuntimeAdapter, registry routing | [#3023](https://github.com/nearai/ironclaw/pull/3023) |
| `#3070` | L | Authorization (reborn) | Torna authorization trust-aware com TrustAwareCapabilityDispatchAuthorization, dependência em ironclaw_trust | [#3070](https://github.com/nearai/ironclaw/pull/3070) |
| `#3076` | XS | Testes (reborn) | Adiciona cobertura de integração Phase 1 para dispatcher e processes | [#3076](https://github.com/nearai/ironclaw/pull/3076) |
| `#3084` | M | Process error handling (reborn) | Corrige mapeamento amplo de HostApiError → ProcessError silenciando variantes diferentes | [#3084](https://github.com/nearai/ironclaw/pull/3084) |

### PRs abertos em revisão
| PR | Tamanho | Escopo | Status | Link |
|---|---|---|---|---|
| `#3095` | XL | Host runtime contract facade | Adiciona facade `ironclaw_host_runtime` — PR4f-a, contrato estável para camadas superiores | [#3095](https://github.com/nearai/ironclaw/pull/3095) |
| `#3080` | XL | Built-in obligations & handoffs | Draft/snapshot carve-out PR6 — obrigações V1 fail-closed, audit metadata obligations | [#3080](https://github.com/nearai/ironclaw/pull/3080) |
| `#3078` | XL | Memory document storage | PR7 — `ironclaw_memory` filesystem backend, MemoryDocumentScope | [#3078](https://github.com/nearai/ironclaw/pull/3078) |
| `#3079` | XL | Memory search & plugin seams | PR8 — document metadata merge, search contracts, search/index provider seam | [#3079](https://github.com/nearai/ironclaw/pull/3079) |
| `#3071` | XL | CapabilityHost base | PR4f-b — ironclaw_capabilities caller-facing CapabilityHost base workflow | [#3071](https://github.com/nearai/ironclaw/pull/3071) |
| `#3065` | XL | Inline image artifacts | Persiste imagens geradas/editadas para reutilização por path em image_edit | [#3065](https://github.com/nearai/ironclaw/pull/3065) |

**Análise:** A pilha Reborn está sendo entregue em fatias incrementais bem orquestradas. Os PRs #3017, #3023, #3027, #3070, #3077 e #3076 construíram a base — agora o trabalho está nas camadas de capacidade (capabilities), memória e runtime facade. A cadência de 37 PRs fechados em 24h indica uma sprint de integração com cobertura CI massiva.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento

**#2987 — [EPIC] Track Reborn architecture landing strategy** — 37 comentários
[Link](https://github.com/nearai/ironclaw/issues/2987)

Epic central do momento. Define o plano de entrega do Reborn como múltiplos PRs agrupados (PR0 contract freeze → staging reborn-integration → grouped implementation PRs → reborn-integration final). Este é o issue de governança que orquestra toda a ativação de Reborn. 27 issues filhas derivam deste plano.

**#3045 — [Reborn] Runtime presets and effective runtime policy** — 3 comentários
[Link](https://github.com/nearai/ironclaw/issues/3045)

Demanda por um **layer de presets de runtime** simples — operadores escolhem um modo de operação (dev, sandbox, prod) sem configurar manualmente grants, mounts, process backends, network policy, secret policy, approval policy e audit. Este é o ponto de entrada UX para o Reborn — indica que a arquitetura interna está amadurecendo e o foco está virando para ergonomia do operador.

**#3044 — [Reborn] Local developer runtime profiles** — 2 comentários
[Link](https://github.com/nearai/ironclaw/issues/3044)

Complementar a #3045, focado em UX de developer local. Meta: `ironclaw-reborn --profile dev` para setup automático sem wiring manual. Sinaliza que a experiência de onboarding do developer está sendo priorizada.

**#233 — Distributed tracing via W3C traceparent headers** — 2 comentários
[Link](https://github.com/nearai/ironclaw/issues/233)

Issue antigo (fev/2026) ganhando atenção novamente em 2026-04-29. Sem tracing distribuído, não há como correlacionar operações entre web gateway → agent loop → worker → orchestrator → tool execution. Esta é uma **deficiência operacional crítica** para debug em produção. Vindo do core contributor ilblackdragon, tem peso técnico alto.

### Análise de demandas

O engajamento da comunidade está **quase totalmente focado em Reborn**. A estrutura de issues do Epic #2987 mostra que o time está metodicamente decompondo a landing da arquitetura em blocos menores para evitar PRs monolíticos. As demandas de UX (presets, profiles) revelam que o Reborn está amadurecendo da fase de "infraestrutura" para a fase de "experiência do operador" — uma transição saudável.

---

## 5. Bugs e Estabilidade

### Regressões críticas — 4 canary lanes falhando

| Issue | Severidade | Impacto | Link |
|---|---|---|---|
| `public-smoke` falhou (commit `2a65da7`) | 🔴 Alta | Regressão em caminho de usuário público com Anthropic | [#3075](https://github.com/nearai/ironclaw/issues/3075) |
| `persona-rotating` falhou (commit `2a65da7`) | 🔴 Alta | Regressão em persona dinâmica | [#3074](https://github.com/nearai/ironclaw/issues/3074) |
| `public-smoke` falhou (run anterior, mesmo commit) | 🔴 Alta | Regressão persistente | [#3064](https://github.com/nearai/ironclaw/issues/3064) |
| `private-oauth` falhou (commit `7194808`) | 🔴 Alta | Regressão em autenticação OAuth privada | [#3052](https://github.com/nearai/ironclaw/issues/3052) |

**Análise:** 4 falhas simultâneas em lanes diferentes (public-smoke apareceu duas vezes) no mesmo commit apontam para uma **regressão em componente compartilhado** — provavelmente触及 ao engine-v2 ou à camada de runtime alterada na v0.27.0. A falha em `private-oauth` com commit diferente (`7194808`) pode ser uma causa raiz separada.

### Bugs P2 — Qualidade UX

| Issue | Descrição | Severidade | Link |
|---|---|---|---|
| `#3083` | Criação duplicada de usuário por falta de loading state e debounce no submit | 🟡 Média | [#3083](https://github.com/nearai/ironclaw/issues/3083) |
| `#3082` | App trava em "Restarting IronClaw" ao habilitar Auto Approvals | 🟡 Média | [#3082](https://github.com/nearai/ironclaw/issues/3082) |
| `#3081` | Portfolio extension mostra botão "Configure" misleading quando não há configuração necessária | 🟡 Média | [#3081](https://github.com/nearai/ironclaw/issues/3081) |

**Análise:** Os bugs P2 reportados por `joe-rlo` são todos UX — race conditions no frontend, flow de restart, e misleading affordances. Todos marcados como `bug_bash_P2`, indicando QA estruturado. A origem comum (hosted-staging, v0.27.0, 2026-04-29) sugere que estas regressões foram introduzidas com a release de ontem e não foram pegas no CI pre-commit.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features novas abertas nas últimas 24h

| Feature | Escopo | Risco | Sinais de roadmap | Link |
|---|---|---|---|---|
| HTTP egress compartilhado para WASM, Script e MCP (reborn) | tool/wasm, tool/mcp, safety, secrets | 🔴 Alto | Reborn cutover blocker — este é gate para production readiness | [#3085](https://github.com/nearai/ironclaw/issues/3085) |
| Preservar brokered HTTP credential injection (reborn cutover blocker) | safety, secrets, reborn | 🔴 Alto | Feature-parity blocker com V1 — não é nice-to-have | [#3068](https://github.com/nearai/ironclaw/issues/3068) |
| Reborn como binary separado `ironclaw-reborn` | ci, docs, reborn | 🟡 Médio | Estabelece boundary de produto/executável independente | [#3069](https://github.com/nearai/ironclaw/issues/3069) |
| SessionThreadService (reborn) | reborn | Sem risco | Camada de persistência de thread/message/reply/milestone | [#3089](https://github.com/nearai/ironclaw/issues/3089) |
| ToolSurfaceService + CapabilityCatalog (reborn) | reborn | Sem risco | Computa capability/tool surface visível ao modelo | [#3090](https://github.com/nearai/ironclaw/pull/3090) |
| Loop support services (reborn) | reborn | Sem risco | PromptContextService, MemoryPromptContextService, SkillContextService, InstructionBundleBuilder, HostManagedModelGateway | [#3091](https://github.com/nearai/ironclaw/issues/3091) |
| Reference AgentLoop implementations (reborn) | reborn | Sem risco | DefaultChatLoop (text-only), DefaultChatLoop (tool-capable) — CodeActLoop/RoutineLoop como follow-on | [#3092](https://github.com/nearai/ironclaw/issues/3092) |
| EventProjectionService (reborn) | reborn | Sem risco | Thread timeline, run status, approval/auth gates, cost/resource usage, memory activity | [#3093](https://github.com/nearai/ironclaw/issues/3093) |
| Approval/Auth interaction services (reborn) | reborn | Sem risco | ApprovalInteractionService + AuthInteractionService para adapter/UI flows | [#3094](https://github.com/nearai/ironclaw/issues/3094) |
| Compose ironclaw_host_runtime services (reborn) | reborn | Sem risco | Composição do service graph completo (CapabilityHost + RuntimeDispatcher + process + resources + events) | [#3087](https://github.com/nearai/ironclaw/issues/3087) |
| Re-carve WASM runtime lane (reborn) | reborn | Sem risco | Re-abre #3028 no reborn-integration após close | [#3086](https://github.com/nearai/ironclaw/issues/3086) |
| Integração tests vertical-slice para Reborn |

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do Projeto CoPaw — 2026-04-30

---

## 1. Panorama do Dia

O CoPaw (QwenPaw) manteve um ritmo de desenvolvimento intenso em 29/04, com **29 issues e 22 PRs atualizados nas últimas 24 horas** — indicador de uma comunidade ativa e revisões ágeis. A release **v1.1.5** foi publicada, trazendo Search com suporte a CJK e fallback de Context Compaction. O foco dominante do dia foi a **estabilidade dos canais** (WeCom, Feishu, QQ) e a **experiência multi-agente** no Console. Também se destaca a abertura simultânea de 4 issues de segurança/estabilidade classificadas como críticas, o que requer atenção imediata da equipe.

---

## 2. Lançamentos

### v1.1.5 — Released em 2026-04-28/29

**Mudanças adicionadas:**

- **CJK-Aware Memory Search** — A busca em memória agora tokeniza queries CJK em nível de caractere, preservando sequências Latinas e dígitos, melhorando drasticamente a precisão de recall para Chino, Japonês e Coreano. [#3811](https://github.com/agentscope-ai/QwenPaw/pull/3811)
- **Context Compaction Fallback** — Quando a compactação de contexto baseada em LLM falha ou está desabilitada, o sistema agora aciona um fallback robusto em vez de ignorar silenciosamente.

> **Nota:** A release note oficial foi atualizada via [PR #3918](https://github.com/agentscope-ai/QwenPaw/pull/3918). Não foram declaradas breaking changes ou notas de migração formais.

---

## 3. Progresso do Projeto

Os PRs merged/closed a seguir representam avanços concretos:

| PR | Título | Impacto |
|----|--------|---------|
| [#3509](https://github.com/agentscope-ai/QwenPaw/pull/3509) | feat: add multimodal message support (images/files) | Suporte a imagens e arquivos em mensagens, com auto-detecção de tipo, validação de segurança e compatibilidade retroativa |
| [#3918](https://github.com/agentscope-ai/QwenPaw/pull/3918) | chore(release): update release note of v1.1.5 | Atualização da documentação de release |
| [#3946](https://github.com/agentscope-ai/QwenPaw/pull/3946) | docs(readme): add plugin system links | Melhora na navegabilidade da documentação |
| [#3943](https://github.com/agentscope-ai/QwenPaw/pull/3943) | style: sessionList style | Correção estética no Console |
| [#3934](https://github.com/agentscope-ai/QwenPaw/pull/3934) | Console/session list | Correção de input de caracteres chineses no painel de histórico e problema persistente |
| [#3793](https://github.com/agentscope-ai/QwenPaw/pull/3793) | fix: indentation bug in rebuild_sys_prompt break statement | Correção de bug de indentação que impedia atualização de mensagens de sistema |
| [#3887](https://github.com/agentscope-ai/QwenPaw/pull/3887) + [#3845](https://github.com/agentscope-ai/QwenPaw/pull/3845) | fix(qq): voice message type mapping | Correção de distinguished voice messages vs. regular audio files e fallback ASR |

**PRs abertos com potencial de merge próximo:**

- [#3889](https://github.com/agentscope-ai/QwenPaw/pull/3889) — **feat: live inter-agent task progress** via `ProgressObservingHook` e `check_agent_task` detail mode — permite a um agente monitorar o estado de execução de outro em tempo real.
- [#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) — **feat: add Tauri 2.x desktop app support** — substituição do Electron por Tauri para desktop, sob revisão.
- [#3938](https://github.com/agentscope-ai/QwenPaw/pull/3938) — **feat: multi-instance channels with agent routing** — permite duplicar canais built-in com instâncias independentes e roteamento por agente.
- [#3846](https://github.com/agentscope-ai/QwenPaw/pull/3846) — **feat(models): Support GitHub Copilot model provider** — sob revisão.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários + reações)

| # | Título | Tipo | Comentários | Reações | Análise |
|---|--------|------|-------------|---------|---------|
| [#981](https://github.com/agentscope-ai/QwenPaw/issues/981) | 飞书/QQ —机器人不能发送文件 ao usuário | question | 14 | 0 | Demanda recorrente desde 2026-03-09; 14 comentários indicam frustração acumulada com limitação de canais |
| [#3936](https://github.com/agentscope-ai/QwenPaw/issues/3936) | Isolamento de workspaces entre agentes | question | 8 | 0 | O principal tema de arquitetura multi-agente: o usuário quer isolamento granular, mas o file_guard é global e só suporta blacklist |
| [#2720](https://github.com/agentscope-ai/QwenPaw/issues/2720) | Converter "/Approve" em botão na UI | enhancement | 8 | 2 | Feature request antiga (2026-04-01); 2 👍 indicam que a comunidade valoriza UI mais intuitiva para approve/reject |
| [#1403](https://github.com/agentscope-ai/QwenPaw/issues/1403) | Feishu: mensagem processada múltiplas vezes | bug | 7 | 0 | Bug crítico de dedup no Feishu — duplica processamento e pode gerar respostas repetidas |
| [#3893](https://github.com/agentscope-ai/QwenPaw/issues/3893) | Context Sync Race Condition — loop infinito | bug | 6 | 0 | Bug sério em alta concorrência; ferramenta devolve resultado que é descartado antes da próxima chamada LLM |

**Sinal da comunidade:** O tema dominante são **limitações de isolamento e estado entre agentes/múltiplas abas do Console**, além de problemas crônicos nos canais (Feishu, WeCom, QQ). Há demanda clara por **multimodalidade completa** (imagens, áudio, vídeo) e **controle fino de timeout/context_window por modelo**.

---

## 5. Bugs e Estabilidade

### Críticos (requerem atenção imediata)

| Severidade | # | Título | Detalhes |
|------------|---|--------|----------|
| 🔴 **Crítico** | [#3955](https://github.com/agentscope-ai/QwenPaw/issues/3955) | **[Segurança] Server Arbitrary File Traversal** | Vulnerabilidade reportada com evidências visuais no v1.1.5 — permite listagem/acesso arbitrário de arquivos no servidor |
| 🔴 **Crítico** | [#3932](https://github.com/agentscope-ai/QwenPaw/issues/3932) | `read_file_safe` passa 1GB como `size` ao `TextIOWrapper.read()` | Causa `MemoryError` em sistemas com memória limitada; o parâmetro `size` do Python's `read()` significa caracteres, não teto de segurança |
| 🔴 **Crítico** | [#3893](https://github.com/agentscope-ai/QwenPaw/issues/3893) | Race Condition em Context Sync — loop infinito | Ferramentas devolvem resultados que são descartados antes da próxima chamada LLM, causando loops infinitos sob alta concorrência |
| 🔴 **Crítico** | [#3957](https://github.com/agentscope-ai/QwenPaw/issues/3957) | Workspace switching incorreto ao receber mensagens de outros agentes via canal | Quando um agente secundário envia mensagem ao canal do agente default, o workspace do default é indevidamente switchado — confusão grave de identidade |

### Altos

| # | Título | Detalhes |
|---|--------|----------|
| [#3947](https://github.com/agentscope-ai/QwenPaw/issues/3947) | WeCom: `filter_thinking` causa perda total de conteúdo em requisições complexas | Usuário só vê "Thinking..." e nunca recebe a resposta final |
| [#3937](https://github.com/agentscope-ai/QwenPaw/issues/3937) | WeCom channel para de responder após uso normal | Requer reativar/desativar o canal para恢复正常 |
| [#3919](https://github.com/agentscope-ai/QwenPaw/issues/3919) | Troca de Agent causa perda de session/chat_id | `lastChatIdByAgent` não implementado no frontend |
| [#3935](https://github.com/agentscope-ai/QwenPaw/issues/3935) | Múltiplas abas do Console interferem entre si ( Issue #2283 ) | Seleção de agente compartilhada entre abas; session/conf上下文 misturados |
| [#3949](https://github.com/agentscope-ai/QwenPaw/issues/3949) | DeepSeek thinking mode: `reasoning_content` não passado → 400 BadRequest | Compatibilidade com o modo de raciocínio do DeepSeek quebrada |
| [#1403](https://github.com/agentscope-ai/QwenPaw/issues/1403) | Feishu: mensagens processadas múltiplas vezes (sem dedup) | Impacto direto na experiência do usuário no canal Feishu |

### Outros bugs notáveis

- [#3951](https://github.com/agentscope-ai/QwenPaw/issues/3951) — Criação de MCP de 云效 falha com erro específico
- [#3953](https://github.com/agentscope-ai/QwenPaw/issues/3953) — `BOOTSTRAP.md` recriado em workspaces já inicializados (corrigido em [#3954](https://github.com/agentscope-ai/QwenPaw/pull/3954))
- [#3952](https://github.com/agentscope-ai/QwenPaw/issues/3952) — Não permite selecionar modelos quantizados na 魔搭 (ModelScope)

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features mais solicitadas (com engajamento)

| # | Título | Relevância Estratégica |
|---|--------|------------------------|
| [#3940](https://github.com/agentscope-ai/QwenPaw/issues/3940) | Support separate vision model routing para inputs de imagem | Evita que o usuário precise trocar de modelo manualmente para analisar imagens |
| [#3942](https://github.com/agentscope-ai/QwenPaw/issues/3942) | Suporte a multimodalidade completa (áudio/vídeo) no frontend | Alinhado com tendência de mercado; atualmente QwenPaw só processa imagem |
| [#3929](https://github.com/agentscope-ai/QwenPaw/issues/3929) | Timeout e context_window_size por modelo em custom providers | Necessidade real de configurações finas para modelos customizados |
| [#3956](https://github.com/agentscope-ai/QwenPaw/issues/3956) | LLM Model Auto Switch Mechanism | Mecanismo de failover automático de modelo (por tempo, por chamadas, por falhas) — feature de resiliência importante |
| [#3944](https://github.com/agentscope-ai/QwenPaw/issues/3944) | Auto-Memory: exclude Heartbeat & Cron sessions | Evita que diálogos automatizados contaminem a memória do agente |
| [#600](https://github.com/agentscope-ai/QwenPaw/issues/600) | Plan and Task Monitoring para continual tasks | Feature de monitoramento de plano/tarefa para execuções contínuas |
| [#3920](https://github.com/agentscope-ai/QwenPaw/issues/3920) | Suporte a llama.cpp como provedor oficial | Usuário solicita parity com Ollama e LMS |
| [#893](https://github.com/agentscope-ai/QwenPaw/issues/893) | Versão offline + download de skills/agents offline | Cenário institucional (laboratórios/governo) com restrições de rede |
| [#2720](https://github.com/agentscope-ai/QwenPaw/issues/2720) | Botão de Approve na UI (em vez de comando texto) | Usabilidade para workflows de aprovação |

**Sinais de roadmap extraídos dos PRs em revisão:** A equipe parece estar trabalhando em **multi-instância de canais com roteamento por agente** (#3938), **desktop Tauri** (#3813), **provider GitHub Copilot** (#3846) e **inter-agent task monitoring** (#3889).

---

## 7. Resumo de Feedback dos Usuários

### Dores reais identificadas

1. **Limitações de canais (Feishu/QQ/WeCom):**
   - Impossibilidade de enviar arquivos pelo bot (#[981](https://github.com/agentscope-ai/QwenPaw/issues/981))
   - Mensagens duplicadas no Feishu (#[1403](https://github.com/agentscope-ai/QwenPaw/issues/1403))
   - WeCom para de responder sem motivo aparente (#[3937](https://github.com/agentscope-ai/QwenPaw/issues/3937))
   - `filter_thinking` no WeCom毁了 reply (#[3947](https://github.com/agentscope-ai/QwenPaw/issues/3947))

2. **Arquitetura multi-agente imatura:**
   - Workspaces compartilhados sem isolamento granular (#[3936](https://github.com/agentscope-ai/QwenPaw/issues/3936))
   - Troca de agente perde sessão (#[3919](https://github.com/agentscope-ai/QwenPaw/issues/3919))
   - Múltiplas abas do Console interferem entre si (#[3935](https://github.com/agentscope-ai/QwenPaw/issues/3935))
   - Workspace switch incorreto via canal (#[3957](https://github.com/agentscope-ai/QwenPaw/issues/3957))

3. **Configurabilidade insuficiente:**
   - File guard é global, sem suporte por-agente (#[3936](https://github.com/agentscope-ai/QwenPaw/issues/3936))
   - Sem suporte a whitelist de diretórios (#[3936](https://github.com/agentscope-ai/QwenPaw/issues/3936))
   - Modelos customizados não aceitam timeout/context_window individuais (#[3929](https://github.com/agentscope-ai/QwenPaw/issues/3929))

4. **Segurança:**
   - Vulnerabilidade de path traversal reportada no v1.1.5 (#[3955](https://github.com/agentscope-ai/QwenPaw/issues/3955))
   - `read_file_safe` pode causar MemoryError (#[3932](https://github.com/agentscope-ai/QwenPaw/issues/3932))

### Cenários de uso emergentes

- **Agentes interagindo entre si via canais** — novos padrões de uso revelam bugs de workspace/session state
- **Modelos quantizados no ModelScope** — demanda por pipelines de download mais flexíveis
- **Deploy em ambientes air-gapped** — interesse institucional em versão offline

---

## 8. Backlog que Merece Atenção

### Issues sem resposta há >7 dias

| # | Título | Idade | Prioridade |
|---|--------|-------|------------|
| [#893](https://github.com/agentscope-ai/QwenPaw/issues/893) | Considerar versão offline + skills/agents offline | ~53 dias | Média-alta |
| [#600](https://github.com/agentscope-ai/QwenPaw/issues/600) | Plan and Task Monitoring para continual tasks | ~56 dias | Alta |
| [#981](https://github.com/agentscope-ai/QwenPaw/issues/981) | Bot não consegue enviar arquivos no Feishu/QQ | ~52 dias | Alta (14 comentários, sem resposta da equipe) |
| [#1031](https://github.com/agentscope-ai/QwenPaw/issues/1031) | Configuração de定时任务 com QwenPaw | ~52 dias | Baixa |
| [#1226](https://github.com/agentscope-ai/QwenPaw/issues/1226) | Skill metadata para appkey configuration | ~50 dias | Baixa |

### Issues abertas sem assignee ou triagem clara

| # | Título | Observação |
|---|--------|------------|
| [#3955](https://github.com/agentscope-ai/QwenPaw/issues/3955) | Segurança — Path Traversal | **Crítico** — necessita triagem e resposta imediata |
| [#3942](https://github.com/agentscope-ai/QwenPaw/issues/3942) | Suporte multim

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-04-30

## 1. Panorama do Dia

O ecossistema ZeroClaw manteve alta atividade em 29 de abril de 2026, com 50 issues e 50 PRs atualizados nas últimas 24h. **Nenhum release foi publicado**, indicando foco em estabilidade pré-lançamento. Das issues, 21 foram fechadas — indicando ritmo saludable de resolução — porém todas as 50 PRs permanecem abertas, sinalizando backlog de merge significativo. Os temas dominantes são bugs críticos de segurança (context spillage, path sanitization), problemas de integração com provedores (Ollama, Bedrock, Copilot) e uma frente ativa de melhorias na experiência web/UX.

---

## 2. Lançamentos

**Nenhum release publicado nas últimas 24h.**

A ausência de releases coincide com aissue #5498 (já fechada), que corrigiu problemas de secrets/permissions no pipeline de release da v0.6.9. O pipeline de CI/CD passou por ajustes recentes, e a comunidade aguarda a próxima versão que consolide as correções acumulado

---

## 3. Progresso do Projeto

Os PRs mais relevantes aguardando merge representam avanços em múltiplas áreas críticas:

| PR | Escopo | Impacto |
|----|--------|---------|
| [#6179](https://github.com/zeroclaw-labs/zeroclaw/pull/6179) | CRUD endpoints `/api/config/*` no gateway | Paridade web onboarding com CLI; base para dashboard e ferramentas third-party |
| [#6167](https://github.com/zeroclaw-labs/zeroclaw/pull/6167) | ACP protocol v1 com tool-call permission | Restaura conectividade com Nori e consumidores ACP externos |
| [#5978](https://github.com/zeroclaw-labs/zeroclaw/pull/5978) | Speech capture buffer + STT dispatch | Habilita transcrição de voz com buffer pré-fala |
| [#6009](https://github.com/zeroclaw-labs/zeroclaw/pull/6009) | OTel tool spans com attrs `gen_ai.tool.*` | Observabilidade aprimorada para tool calls |
| [#5838](https://github.com/zeroclaw-labs/zeroclaw/pull/5838) | Retry logic com exponential backoff em webhooks | Resiliência a falhas transitórias |
| [#5905](https://github.com/zeroclaw-labs/zeroclaw/pull/5905) | Workspace bind-mount no DockerSandbox | Corrige scripts com caminhos absolutos dentro do container |

**Nota:** Nenhum PR foi merged/fechado nas últimas 24h — todos os 50 PRs listados permanecem em estado `OPEN`, sugerindo gargalo de review ou CI.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários + reações)

| # | Título | Comentários | 👍 | Tema Central |
|---|--------|-------------|----|-------------|
| [#5509](https://github.com/zeroclaw-labs/zeroclaw/issues/5509) | Telegram voice message transcription | 7 | 0 | Feature parity com OpenClaw (TypeScript) |
| [#5146](https://github.com/zeroclaw-labs/zeroclaw/issues/5146) | Token minimization via skill compilation | 6 | 1 | Custo de LLM — prompt inflation |
| [#5550](https://github.com/zeroclaw-labs/zeroclaw/issues/5550) | Memory session_id mismatch | 6 | 0 | Recall de memórias quebrado |
| [#6153](https://github.com/zeroclaw-labs/zeroclaw/issues/6153) | Matrix voice transcription failed | 5 | 0 | Suporte a formato de áudio no Matrix |
| [#5459](https://github.com/zeroclaw-labs/zeroclaw/issues/5459) | Ollama tool_count=0 | 5 | 4 | Provider Ollama inoperante |

**Análise:** A maior demanda comunitária concentra-se em:
1. **Paridade de features** entre ZeroClaw (Rust) e OpenClaw (TypeScript) — especialmente Telegram voice.
2. **Otimização de custos** via skill compilation (redução de token consumption).
3. **Memória e recall** — problema recorrente de `session_id` causando perda de contexto.

---

## 5. Bugs e Estabilidade

### Por Severidade (S0–S3)

| Severidade | Count | Exemplos |
|------------|-------|----------|
| **S0** (data loss / security) | 3 | Context spillage (#5415), forbidden_path blocks safe redirects (#5518), Telegram anthropic misconfigured (#6090) |
| **S1** (workflow blocked) | 3 | voice-wake compile failure (#5861), Copilot+Telegram (#5475), Shell tool raw JSON (#5553) |
| **S2** (degraded) | 4 | Matrix transcription (#6153), Canvas tool silent failure (#5356), Slack thread continuity (#6226) |
| **S3** (minor) | 2 | Web UI cursor misalignment (#6073), dead orphan file (#6094) |

### Bugs críticos sem resolution (status: blocked / needs-repro)

- [#5415](https://github.com/zeroclaw-labs/zeroclaw/issues/5415) — **Context spillage from chat to scheduled tasks** (S0, security): Contexto de Discord vaza para execuções cron.
- [#5518](https://github.com/zeroclaw-labs/zeroclaw/issues/5518) — **forbidden_path blocks `/dev/null`, `/dev/stdout`** (S0): Bloqueia operações legítimas de shell.
- [#5475](https://github.com/zeroclaw-labs/zeroclaw/issues/5475) — **Copilot + Telegram Invalid parameter** (S1): Combinação específica quebra.

### Issues fechadas nas últimas 24h (8 bugs resolvidos)

- [#5459](https://github.com/zeroclaw-labs/zeroclaw/issues/5459) — Ollama tool_count hardcoded em 0
- [#5553](https://github.com/zeroclaw-labs/zeroclaw/issues/5553) — Shell tool retornando JSON cru no Telegram
- [#5861](https://github.com/zeroclaw-labs/zeroclaw/issues/5861) — voice-wake falha de compilação em v0.6.9
- [#6090](https://github.com/zeroclaw-labs/zeroclaw/issues/6090) — Telegram com chamada anthropic mal configurada
- [#5502](https://github.com/zeroclaw-labs/zeroclaw/issues/5502) — Feature `allowed_tools` adicionada

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em demanda (ordenadas por intensidade)

| # | Feature | Status | Prioridade | Sinais de roadmap |
|---|---------|--------|------------|-------------------|
| [#5146](https://github.com/zeroclaw-labs/zeroclaw/issues/5146) | Skill compilation para reduzir tokens | `accepted` | p2 | Custo é dor primária; iniciativa alinhada com sustentabilidade |
| [#5501](https://github.com/zeroclaw-labs/zeroclaw/issues/5501) | Trigger cron manual | `no-stale` | — | UX para testing de prompts |
| [#5509](https://github.com/zeroclaw-labs/zeroclaw/issues/5509) | Telegram voice transcription | `closed` | — | Paridade OpenClaw (feature completada?) |
| [#5503](https://github.com/zeroclaw-labs/zeroclaw/issues/5503) | Pre-LLM command shortcuts | `closed` | — | Aceleração de ações determinísticas |
| [#6225](https://github.com/zeroclaw-labs/zeroclaw/issues/6225) | Smart truncation para Telegram | `open` | — | Melhoria de UX em mensagens longas |

### Sinais emergentes

- **Segurança e sandboxing:** PR [#5905](https://github.com/zeroclaw-labs/zeroclaw/pull/5905) (DockerSandbox workspace) e [#5939](https://github.com/zeroclaw-labs/zeroclaw/pull/5939) (git -C vs -c) indicam investimento em isolamento.
- **Observabilidade:** PR [#6009](https://github.com/zeroclaw-labs/zeroclaw/pull/6009) com OTel spans sugere maturidade operational.
- **Voice/STT:** PR [#5978](https://github.com/zeroclaw-labs/zeroclaw/pull/5978) em голос capture buffer mostra direção clara em voz.

---

## 7. Resumo de Feedback dos Usuários

### Dores reais identificadas

| Dor | Ocorrências | Impacto |
|-----|-------------|---------|
| **Custo excessivo de LLM** | #5146, #5503 | Latência de ~8s para ações simples; prompt inflation |
| **Memory recall quebrado** | #5550, #5170 | Memórias "invisíveis" ao agente; wildcard falha |
| **Provider instability** | #5459 (Ollama), #5289 (Bedrock), #5475 (Copilot) | Funcionalidades específicas não funcionam |
| **Channel fragmentation** | Telegram, Matrix, Discord, Slack cada um com bugs | Experiência inconsistente por canal |
| **Segurança/confiança** | #5415 (context leak), #5518 (false positives) | Usuários hesitantes em produção |

### Cenários de uso reportados

- **Setup hybrid:** Telegram + Copilot (quebrado), Discord + scheduled tasks (context spillage).
- **Self-hosted com constraints:** Docker sandbox com workspace paths, Ollama local.
- **Enterprise-adjacent:** AWS Bedrock, Canvas tool para visualização, Webhook para automação.

### Satisfação parcial

- Bugs críticos sendo fechados (8 issues em 24h).
- Novas features merged (#5502 `allowed_tools`, #5503 shortcuts).
- Pipeline de release corrigido (#5498).

---

## 8. Backlog que Merece Atenção

### Issues sem atividade significativa ou sem maintainer response

| # | Título | Criado | Atualizado | Status | Prioridade | Ação recomendada |
|---|--------|--------|------------|--------|------------|------------------|
| [#5146](https://github.com/zeroclaw-labs/zeroclaw/issues/5146) | Token minimization via skill compilation | 2026-03-29 | 2026-04-29 | `accepted` | p2 | Aguardando assignee; impacto alto em custo |
| [#5550](https://github.com/zeroclaw-labs/zeroclaw/issues/5550) | Memory session_id mismatch | 2026-04-09 | 2026-04-29 | `open` | — | Bug recorrente; root cause em `src/channels/mod.rs` |
| [#5415](https://github.com/zeroclaw-labs/zeroclaw/issues/5415) | Context spillage security | 2026-04-06 | 2026-04-29 | `blocked` | p1 (S0) | **Alta urgência**; vazamento de contexto entre canais |
| [#5289](https://github.com/zeroclaw-labs/zeroclaw/issues/5289) | Bedrock API_KEY header 403 | 2026-04-04 | 2026-04-29 | `in-progress` | p1 | `in-progress` mas sem updates recentes |
| [#5470](https://github.com/zeroclaw-labs/zeroclaw/issues/5470) | Multiple issues running safely | 2026-04-07 | 2026-04-29 | `blocked` | p2 | Requer triagem para separar issues |

### PRs stalled ou sem author action

| PR | Tamanho | Risco | Bottleneck |
|----|---------|-------|------------|
| [#5838](https://github.com/zeroclaw-labs/zeroclaw/pull/5838) | M | medium | `needs-author-action` |
| [#5978](https://github.com/zeroclaw-labs/zeroclaw/pull/5978) | XL | high | `needs-author-action` |

---

## Indicadores de Saúde do Projeto

| Indicador | Valor | Avaliação |
|-----------|-------|-----------|
| Atividade (issues + PRs / 24h) | 100 | ✅ Alta |
| Taxa de resolução (fechadas / total) | 21/50 (42%) | ✅ Boa |
| Releases (24h) | 0 | ⚠️ Estável, sem release |
| Bugs S0+S1 em aberto | 6 | 🔴 Crítico |
| PRs em aberto sem merge | 50 | ⚠️ Backlog elevado |
| Features aceitas + em progresso | 2 (#5146, #6128) | 🟡 Moderado |

**Veredicto:** ZeroClaw demonstra vigoroso ritmo de desenvolvimento com alta participação comunitária. O principal risco é o acúmulo de PRs sem merge e a presença de bugs S0 de segurança não resolvidos. A ausência de releases recentes sugere cautela deliberada — recomendável priorizar o merge de correções de segurança (context spillage, forbidden_path) antes do próximo tag.

---

*Relatório gerado automaticamente com base em dados do GitHub de 2026-04-30. Todos os links referenciam `github.com/zeroclaw-labs/zeroclaw`.*

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*