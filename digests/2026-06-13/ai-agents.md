# Resumo diário do ecossistema de agentes de IA 2026-06-13

> Issues: 1 | PRs: 3 | Projetos cobertos: 7 | Gerado em: 2026-06-12 21:27 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório do Projeto NullClaw — 2026-06-13

---

## 1. Panorama do Dia

O projeto NullClaw apresenta uma atividade moderada em 13 de junho de 2026, com 4 itens totalizados nas últimas 24 horas. A comunidade mantém-se engajada através de um fluxo constante de pull requests — todas as 3 PRs abertas são de origem do mesmo colaborador (@vernonstinebaker), indicando um período de desenvolvimento focado em correções de estabilidade. Uma issue de bug relacionada à integração com modelos locais via Ollama foi reportada por um usuário externo, evidenciando casos de uso com modelos self-hosted. Nenhum release foi publicado e nenhuma PR foi merged, sugerindo que o código está em fase de revisão ou que a base de mantenedores está com capacidade limitada para merger no momento.

---

## 2. Lançamentos

**Nenhum release publicado nas últimas 24 horas.**

O projeto não registrou novas versões, tags ou publicaciones de changelog no período analisado. Isso representa uma pausa no ciclo de releases habitual, o que pode ser explicado pela estratégia de acumular changes antes de um próximo tagged release.

---

## 3. Progresso do Projeto

Três pull requests foram atualizadas nas últimas 24 horas, todas em estado **OPEN** (abertas para revisão):

| PR | Título | Autor | Status |
|---|---|---|---|
| [#953](https://github.com/nullclaw/nullclaw/pull/953) | fix(discord): recover closed gateway sockets | @vernonstinebaker | 🟡 ABERTA |
| [#951](https://github.com/nullclaw/nullclaw/pull/951) | fix(agent_runner): suppress stderr initialization logs on agent failure | @vernonstinebaker | 🟡 ABERTA |
| [#949](https://github.com/nullclaw/nullclaw/pull/949) | fix: make queue_mode configurable from config.json | @vernonstinebaker | 🟡 ABERTA |

**Destaque para as contribuições:**

- **#953** (Discord Gateway Recovery): Adiciona robustez ao tratamento de reconexão com Discord, fechando sockets antes de join em threads de heartbeat, implementando grace period para reconnects pré-HELLO, e adicionando testes de regressão. Melhoria crítica para estabilidade em ambientes de produção com integração Discord.

- **#951** (Agent Runner Error Handling): Corrige um bug onde logs de inicialização (memory plan, MCP server registration) eram exibidos como respostas do agente quando o processo filho saía com código não-zero. Agora stderr só é usado como fallback em sucesso, evitando confusão para usuários.

- **#949** (Configurable Queue Mode): Adiciona o campo `agent.default_queue_mode` no `config.json`, centralizando o enum `QueueMode` em `config_types.zig`. Melhora a configurabilidade do comportamento padrão de novas sessões.

---

## 4. Temas Quentes da Comunidade

**Nenhum item com comentários ou reações significativas nas últimas 24 horas.**

A issue e as PRs mais recentes apresentam **0 comentários e 0 reactions**, indicando que:
- A comunidade não está ativamente discutindo estes tópicos publicamente
- O volume de participação externa é reduzido
- Os mantenedores estão em modo de revisão silenciosa ou aguardando feedback interno

**Indicador de saúde:** A baixa interação pode sinalizar que (a) o projeto está maduro com issues de baixa controvérsia, ou (b) há necessidade de mais canais de comunicação (Discord, forum) para engajamento da comunidade.

---

## 5. Bugs e Estabilidade

### Bug Reportado

**[#952](https://github.com/nullclaw/nullclaw/issues/952)** — `[bug] Local model using ollama returns incomplete answers`
- **Severidade:** 🟠 MÉDIA
- **Autor:** @bloodgroup-cplusplus
- **Criado:** 2026-06-11 | **Atualizado:** 2026-06-12
- **Comentários:** 0 | **Reações:** 0

**Descrição:** Ao utilizar modelo local (gemma) via Ollama, o agente não responde em frases completas. Screenshots com passos de reprodução foram anexados pelo autor.

**Análise técnica:** Este bug afeta um caso de uso específico — modelos locais/self-hosted — e pode estar relacionado a:
1. Problemas de streaming de resposta do Ollama
2. Truncamento de output por buffer de stdout
3.Timeout de geração configurado incorretamente

**Recomendação:** Priorizar com labels de área `ollama` e `local-model` para facilitar triagem. Sem comentários ainda, indicando que aguardando triagem inicial dos mantenedores.

---

## 6. Pedidos de Features e Sinais de Roadmap

Nenhum pedido de feature explícito foi registrado nas últimas 24 horas. Porém, as PRs abertas indicam direções de desenvolvimento:

| PR | Tipo | Sinal de Roadmap |
|---|---|---|
| #949 | 🔧 Configuração | Expansão de configurabilidade via `config.json` — possível tendência de migrations de hardcoded para configurações externalizadas |
| #951 | 🐛 Bugfix | Melhoria na experiência de erro — sinais de foco em DX (developer experience) |
| #953 | 🐛 Bugfix | Robustez de infraestrutura — foco em produção readiness |

**Sinais emergentes:**
- Padronização de tipos: `QueueMode` movido para `config_types.zig` como single source of truth
- Configuração declarativa: `agent.default_queue_mode` via JSON
- Operações de produção: health checks bounded, reconnect logic

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Categoria | Detalhamento |
|---|---|
| **Respostas Incompletas** | Usuários de modelos locais via Ollama reportam respostas truncadas/incompletas (Issue #952) |

### Cenários de Uso Identificados

- **Modelos Locais Self-hosted:** Pelo menos um usuário ativo está utilizando NullClaw com Ollama + Gemma em ambiente local, demonstrando adoção de configurações privacy-first
- **Integração Discord:** Mantenedor trabalhando ativamente em resiliência de gateway, sugerindo base de usuários significativa nesta plataforma

### Indicadores de Satisfação

**Sem dados positivos ou negativos conclusivos** — a amostra de 24h é limitada. A ausência de issues fechadas ou PRs merged pode indicar:
- Fluxo de desenvolvimento em revisão pendente
- Necessidade de mais reviewers na base de mantenedores

---

## 8. Backlog que Merece Atenção

### Issue Sem Atuação

**[#952](https://github.com/nullclaw/nullclaw/issues/952)** — Bug de Ollama
- ⏱️ **Tempo sem resposta:** ~2 dias (criado em 2026-06-11)
- 📊 **Interação:** 0 comentários, 0 reações
- ⚠️ **Risco:** Bug reportado por usuário externo pode desmotivar contribuição se não houver acolhimento

**Recomendação:** Atribuir label de área, adicionar milestone, e iniciar triagem com pedido de mais contexto (versão do Ollama, flags de configuração).

### Pull Requests Pendentes de Review

| PR | Idade Aproximada | Estado |
|---|---|---|
| [#949](https://github.com/nullclaw/nullclaw/pull/949) | ~3 dias | 🟡 ABERTA — aguardando review |
| [#951](https://github.com/nullclaw/nullclaw/pull/951) | ~3 dias | 🟡 ABERTA — aguardando review |
| [#953](https://github.com/nullclaw/nullclaw/pull/953) | ~1 dia | 🟡 ABERTA — aguardando review |

**Todas as 3 PRs abertas são do mesmo autor (@vernonstinebaker), que demonstra contribuições consistentes em múltiplas áreas do codebase (Discord, agent_runner, config).**

---

## Métricas Resumidas do Dia

| Indicador | Valor |
|---|---|
| 📥 Issues abertas/ativas | 1 |
| 🔒 Issues fechadas | 0 |
| 📥 PRs abertas | 3 |
| 🔀 PRs merged/fechadas | 0 |
| 🏷️ Releases | 0 |
| 💬 Interação comunitária | Baixa (0 comentários, 0 reações) |
| 🐛 Bugs novos | 1 (media severidade) |
| 🔧 Features implementadas (pendentes merge) | 3 |

---

## Classificação Geral de Saúde

| Dimensão | Status | Observação |
|---|---|---|
| Atividade de código | 🟢 Saudável | 3 PRs atualizadas em 24h |
| Resolução de Issues | 🟡 Atenção | 1 bug sem triagem |
| Feedback comunidade | 🔴 Baixo | 0 interações |
| Release cadence | 🟡 Indefinido | Sem releases recentes |

**Recomendação geral:** Aumentar tempo de triagem de issues externas e considerar review colaborativo das PRs pendentes para evitar attrition de contribuidores ativos.

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo do Ecossistema de Agentes de IA Open Source

**Data de Referência:** 2026-06-13
**Projetos Analisados:** 7

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source demonstra maturidade crescente com polarização clara entre projetos em **fase de estabilização** e outros em **expansão acelerada de funcionalidades**. A atividade combinada registra **258+ eventos** (issues + PRs) em 24h, evidenciando alta produção comunitária. Os projetos compartilham três desafios transversais: segurança em gateways (shell injection, RUSTSEC advisories), estabilidade de integrações com provedores (Gemini, Ollama, Copilot), e gestão de memória/contexto em conversas multi-turno. O release **v0.8.0 do ZeroClaw** (multi-agente por daemon) e a preparação de beta do CoPaw indicam que a arquitetura de **múltiplos agentes orquestrados** emerge como próximo marco tecnológico do ecossistema.

---

## 2. Comparação de Atividade

| Projeto | Issues (Open/Total) | PRs (Open/Total) | Releases (24h) | Bugs Críticos | Saúde Geral |
|---------|---------------------|-------------------|----------------|---------------|-------------|
| **NullClaw** | 1 / 1 | 3 / 3 | 0 | 1 (media) | 🟡 Crescendo |
| **NanoBot** | 6 / 6 | 29 / 29 | 0 | 3 | ⬆️ Alta Atividade |
| **Hermes Agent** | 44 / 50 | 49 / 50 | 0 | 1 (CRÍTICA) | ⚠️ Segurança |
| **PicoClaw** | 6 / 6 | 13 / 13 | 1 nightly | 2 | 🟢 Produtivo |
| **IronClaw** | 50 / 50 | 45 / 45 | 0 | 1 (CRÍTICA) | 🟢 Dev Activo |
| **CoPaw** | 23 / 23 | 27 / 27 | 0 (beta prep) | 5 | 🔴 Estabilidade |
| **ZeroClaw** | 50 / 50 | 44 / 50 | 1 (v0.8.0) | 11 P1 | 🟡 Pós-Release |

**Observação:** Hermes Agent, IronClaw e ZeroClaw apresentam volumes de atividade 10-12x maiores que NullClaw, indicando ecossistema com/projects maduros com centenas de contributors ativos.

---

## 3. Posicionamento do Projeto Principal

*Considerando ZeroClaw como projeto mais ativo e recentemente released (v0.8.0):*

### Vantagens Competitivas

| Dimensão | ZeroClaw | Posição vs. Pares |
|----------|----------|-------------------|
| **Arquitetura** | Multi-agente por daemon com workspaces isolados | ✅ Único com multi-agente production-ready |
| **Segurança** | Risk profiles, allowed_tools, allowed_numbers | ✅ Mais granular que PicoClaw e Hermes |
| **Providers** | NEAR AI Cloud, Gemini, Anthropic, OpenAI-compatível | ✅ Paridade com NanoBot, superior a CoPaw |
| **Channels** | Discord, WhatsApp, Telegram, Twitch (proposto) | 🟡 Amplitude média |
| **Comunidade** | 50 issues + 50 PRs/dia, contributors diversificados | ✅ Maior volume de atividade |

### Diferenças Técnicas Significativas

| Característica | ZeroClaw | Hermes Agent | NanoBot | Implicação |
|----------------|----------|--------------|---------|------------|
| **Motor de turn** | 3 motores unificados (PR #7540) | Pipeline单一 | AgentLoop | ZeroClaw mais testável |
| **WASM** | Preparação para Extism deprecation | ❌ Nativo | ❌ Nativo | ZeroClaw prepara futuro |
| **MCP** | Suporte completo com heartbeat tracking | Básico | Básico | ZeroClaw mais enterprise |
| **Configuração** | Schema unificado com migração automática | YAML scattered | JSON | ZeroClaw mais operável |

### Tamanho da Comunidade

**Estimativa por volume de atividade (proxy):**

```
ZeroClaw      ████████████████████ 100%
Hermes Agent  ██████████████████   98%
IronClaw      ████████████████     85%
NanoBot       ████████             40%
CoPaw         ████████             38%
PicoClaw      ████                 20%
NullClaw      ██                   8%
```

---

## 4. Focos Técnicos Compartilhados

### 4.1 Segurança em Subprocessos e Gateways

| Projeto | Vulnerabilidade | Severidade | Status |
|---------|-----------------|------------|--------|
| **Hermes Agent** | `shell=True` em tui_gateway (RCE) | 🔴 CRÍTICA | Aberta |
| **IronClaw** | RUSTSEC-2026-0178/179/180 (postgres DoS) | 🔴 CRÍTICA | **Corrigida** |
| **PicoClaw** | JSON marshal errors silenciados | 🟡 Média | **Corrigida** |

**Conclusão:** O padrão de silenciar erros (`_ = err`) é antipattern recorrente. A comunidade está corrigindo ativamente.

### 4.2 Estabilidade de Provedores de IA

| Provider | Projeto Afetado | Problema |
|----------|-----------------|----------|
| **Gemini 3.5 Flash** | PicoClaw | Erro 400 por `thought_signature` ausente |
| **Ollama** | NullClaw | Respostas truncadas/incompletas |
| **Kimi** | Hermes Agent | Endpoint e User-Agent incorretos |
| **Copilot Business** | Hermes Agent | Falha com 404 em contas corporativas |
| **Anthropic** | ZeroClaw | Skill tools rejeitadas (regex violation) |

**Padrão:** Integrações com provedores são frágeis — qualquer mudança unilateral de API quebra produtores.

### 4.3 Gestão de Memória e Contexto

| Problema | Projetos | Impacto |
|----------|----------|---------|
| **Short-term memory loss** | NanoBot (#4044) | Agent esquece próprias perguntas |
| **Context compaction** | Hermes (#43066) | Mensagens perdidas após compressão |
| **Post-turn consolidation** | NanoBot (#4307) | Mensagens de delivery apagadas |
| **Budget trim perpétuo** | ZeroClaw (#5808) | Primeira iteração sempre excede 32k |

**Frequência:** 4 de 7 projetos reportam problemas de memória/contexto — **necessidade prioritária de solução**.

### 4.4 Observabilidade e Auditoria

| Feature | NanoBot | Hermes Agent | IronClaw | ZeroClaw |
|---------|---------|--------------|----------|----------|
| Audit module | ✅ #4319 | ❌ | ❌ | ❌ |
| Trajectory observer | ❌ | ❌ | ✅ #4588 | ❌ |
| gen_ai spans | ❌ | ❌ | ❌ | ✅ #6642 |

**Tendência:** Módulos de observabilidade emergem independentemente — candidates para convergência.

---

## 5. Análise de Diferenciação

### 5.1 Por Público-Alvo

| Projeto | Público Primário | Característica Distintiva |
|---------|------------------|---------------------------|
| **NullClaw** | Developers individuais | Foco Discord, self-hosted (privacy-first) |
| **NanoBot** | Desenvolvedores de SDK | Python SDK rico, TTS multi-provider |
| **Hermes Agent** | Multi-plataforma | 8+ canais (Telegram, Discord, WhatsApp, Slack, etc.) |
| **PicoClaw** | Operadores técnicos | FreeBSD, Nightly builds, Evolution mode |
| **IronClaw** | Enterprise NEAR | Reborn UI, Slack-first, multi-tenant |
| **CoPaw** | Coding assistants | Modo Coding, AgentScope 2.0, DataPaw BI |
| **ZeroClaw** | Infraestrutura | Multi-agente daemon, fleet management |

### 5.2 Por Arquitetura

| Arquitetura | Projetos | Vantagem | Risco |
|-------------|----------|----------|-------|
| **Mono-repo modular** | Hermes, IronClaw | Coesão | Acoplamento de canais |
| **Plugin/Provider split** | PicoClaw, CoPaw | Extensibilidade | Versionamento de plugins |
| **Multi-agent orchestrator** | ZeroClaw | Isolamento de workspaces | Complexidade operacional |
| **Runtime 2.0** | CoPaw | Testabilidade | Breaking changes em migração |

### 5.3 Por Estratégia de Release

| Estratégia | Projetos | Cadência | Adequação |
|-------------|----------|----------|-----------|
| **Stable + Nightly** | PicoClaw | ~semanal | ✅ Produção + dev |
| **Rolling sem releases** | Hermes, IronClaw | Contínua | ⚠️ Diff obscuro |
| **Marcadores de versão** | ZeroClaw (v0.8.0) | ~mensal | ✅ Claro, com migration notes |
| **Beta 준비** | CoPaw (v1.1.12b1) | ~quinzenal | ✅ Community testing |

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração

| Métrica | Projetos Líderes | Projetos Lentos | Delta |
|---------|------------------|-----------------|-------|
| **PRs merged/24h** | NanoBot (9), IronClaw (5), CoPaw (11) | NullClaw (0) | 9-11x |
| **Issues fechadas/24h** | IronClaw (13), NanoBot (3) | NullClaw (0) | 13x |
| **Bugs críticos triados <24h** | IronClaw | NullClaw, CoPaw | Estabilidade |

**Indicador de maturidade:** IronClaw fecha 13 issues UI em 24h — maturidade em fase de *feature hardening*. NanoBot/CoPaw ainda em *bug discovery*.

### 6.2 Engajamento Comunitário

| Projeto | Comentários/Issue | Reactions | Interação |
|---------|-------------------|-----------|-----------|
| **Hermes Agent** | 40 (issue #7237 truncation) | 7 (inline keyboards) | Alta — 4 issues com 5+ comentários |
| **CoPaw** | 11 (timer tasks) | N/A | Alta — timer tasks é bloqueador |
| **NullClaw** | 0 | 0 | 🔴 Baixíssima —的单 contributor |
| **PicoClaw** | 2 (token consumption) | 2 | 🟡 Baixa — comunidade técnica |
| **ZeroClaw** | 7 (tool_filter_groups) | N/A | 🟡 Moderada — P1 bugs |

**Correlação:** Projetos com bugs críticos visíveis (#7237 Hermes com 40 comments) geram mais engagement que projetos estáveis.

### 6.3 Qualidade de Processos

| Processo | Melhores | Piores | Gap |
|----------|----------|--------|-----|
| **SLA de triagem** | PicoClaw (stale em 8 dias) | NullClaw (2 dias sem resposta) | Crítico |
| **Code review** | IronClaw (RUSTSEC corrigido em <24h) | CoPaw (PRs aguardando 22 dias) | Severo |
| **Release notes** | ZeroClaw (migration docs) | Hermes (sem changelog) | Documentação |
| **Segurança披露** | IronClaw (RUSTSEC advisories) | Hermes (RCE aberta há dias) | Urgência |

---

## 7. Sinais de Tendência

### 7.1 Multi-Agent Orchestration

**Evidência:**
- ZeroClaw v0.8.0: multi-agente por daemon ✅ **Production**
- CoPaw: Agent Team / Swarm Collaboration solicitado ✅ **Demandado**
- Hermes Agent: Multi-Tenant Hermes Problem (P3, 2 semanas) ✅ **Roadmap**

**Direção:** O mercado move de agentes únicos para **fleet de agentes** com isolamento de workspace, providers e políticas.

### 7.2 Voice e Multimodal

**Evidência:**
- NanoBot: TTS multi-provider (OpenAI, Groq, ElevenLabs) — PR #4316
- Hermes Agent: Telegram voice input diagnostics — PR #45220
- CoPaw: Yuanbao receiving improvements

**Direção:** Agentes evoluem de **chat-only** para **voice-first** em canais móveis.

### 7.3 Observabilidade como Feature

**Evidência:**
- NanoBot: `tools.audit` com 4 transports (loguru, webhook, JSONL, callback)
- IronClaw: Trajectory observer + LLM provider injection
- ZeroClaw: gen_ai.input/output spans

**Direção:** Agentes enterprise-grade requerem **audit trail** para compliance e debugging.

### 7.4 Provider Diversification

**Evidência:**
- PicoClaw: NEAR AI Cloud provider (PR #2917)
- Hermes: Gemma 4, MiniMax-M3, Kimi, DeepSeek, Copilot
- ZeroClaw: Anthropic, Gemini, OpenAI-compatible

**Direção:** lock-in em provedor único é anti-pattern — **multi-provider fallback** é exigência.

### 7.5 Desktop como Primeira Classe

**Evevidência:**
- Hermes Agent: Desktop/TUI com session.resume
- IronClaw: Reborn UI com sidebar hover cards
- CoPaw: System tray, auto-start, background service solicitado
- PicoClaw: Desktop app removido do core (foco em runtime)

**Direção:** Divergência — alguns projetos abandonam desktop, outros o elevam.

### 7.6 Enterprise Security Hardening

**Evidência:**
- PicoClaw: Permission scoping por canal/tipo de conversa
- Hermes: shell=True RCE (crítico, aberto)
- IronClaw: RUSTSEC postgres (corrigido)
- ZeroClaw: allowed_numbers bypass (WhatsApp)

**Direção:** Expansão de mercado para enterprise exige **security by design**, não hardening reativo.

---

## Síntese para Decisores

| Prioridade | Ação | Projetos Alinhados |
|------------|------|---------------------|
| 🔴 **Urgente** | Corrigir RCE em Hermes TUI Gateway | Hermes |
| 🔴 **Urgente** | Resolver memory/context loss | NanoBot, Hermes, ZeroClaw |
| 🟡 **Estratégico** | Adotar multi-agent architecture | ZeroClaw (referência) |
| 🟡 **Estratégico** | Implementar audit module | NanoBot (referência) |
| 🟢 **Tático** | Expandir TTS/voice | NanoBot, Hermes |
| 🟢 **Tático** | Multi-provider fallback | Todos |

**Recomendação geral:** O ecossistema está maduro para consolidação de padrões (audit, multi-agent, observability). Projetos que resolverem primeiro os desafios transversais de segurança e memória ganharão share de mercado enterprise em 2026-Q3/Q4.

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-06-13

## 1. Panorama do Dia

O projeto NanoBot apresenta **alta atividade** no dia de hoje, com 6 issues e 29 PRs atualizados nas últimas 24 horas. A equipe está bastante focada em **estabilidade e robustez**, evidenciado pelo grande volume de PRs de correção (fix) e pela atenção a bugs críticos relacionados à memória e manipulação de contexto. Não houve lançamento de novas versões, mas o ritmo de merges indica um ciclo de desenvolvimento saudável. A adição de features como TTS multi-provider e o módulo de audit demonstram evolução contínua da plataforma.

---

## 2. Lançamentos

**Nenhum release nas últimas 24 horas.**

O projeto não publicou novas versões neste período. Isso sugere que a equipe pode estar em fase de estabilização antes de um próximo release ou acumulando mudanças para um update maior.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados Recentemente

| # | PR | Autor | Descrição |
|---|-----|-------|-----------|
| [#4319](https://github.com/HKUDS/nanobot/pull/4319) | feat(audit): Add tools.audit for agent action observability | bjoshuanoah | Módulo de audit integrado ao AgentLoop com 4 transports (loguru, webhook HTTP, JSONL, callback) |
| [#4318](https://github.com/HKUDS/nanobot/pull/4318) | feat(audit): Add tools.audit (dup) | bjoshuanoah | Duplicate/alternative do PR de audit |
| [#4304](https://github.com/HKUDS/nanobot/pull/4304) | fix(cron): wait for spawned subagents before marking cron job complete | michaelxer | Corrige race condition onde cron jobs marcavam completion antes dos subagentes terminarem |
| [#4294](https://github.com/HKUDS/nanobot/pull/4294) | chore(repo): remove desktop app from core repo | Re-bin | Remove desktop app do repositório público, mantendo foco no core runtime e WebUI |

**Destaque:** O merge do módulo de audit (#4319) representa um avanço significativo em observabilidade, permitindo que usuários monitorem ações de ferramentas do agente com diferentes transportes configuráveis.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| # | Título | Status | Comentários | Tema Central |
|---|--------|--------|-------------|--------------|
| [#4044](https://github.com/HKUDS/nanobot/issues/4044) | [bug] short term memory loss | OPEN | 5 | NanoBot "esquece" suas próprias perguntas durante a conversa |
| [#4305](https://github.com/HKUDS/nanobot/issues/4305) | Multiple custom providers: ? | CLOSED | 1 | Necessidade de múltiplos provedores custom/OpenAI |
| [#4307](https://github.com/HKUDS/nanobot/issues/4307) | Post-turn consolidation wipes agent's delivery message | OPEN | 1 | Regressão no tracking de mensagens do agente |

### PRs com Maior Engajamento

| # | Título | Status | Tema Central |
|---|--------|--------|--------------|
| [#4316](https://github.com/HKUDS/nanobot/pull/4316) | feat(tts): add TTS configuration system with multi-provider support | OPEN | Sistema de Text-to-Speech com suporte a OpenAI, Groq e ElevenLabs |
| [#4320](https://github.com/HKUDS/nanobot/pull/4320) | feat(audit): add tools.audit config and AuditTool | OPEN | Observabilidade de ações do agente |
| [#4313](https://github.com/HKUDS/nanobot/pull/4313) | Feat(webui): config.json/webui parity | OPEN | Paridade entre configurações WebUI e config.json |
| [#4296](https://github.com/HKUDS/nanobot/pull/4296) | feat(sdk): expand Python SDK runtime controls | OPEN | API SDK mais rica com controles de runtime |

**Análise:** A comunidade demonstra forte interesse em **extensibilidade** (TTS, audit, múltiplos providers) e **paridade de configurações**. O bug de memory loss (#4044) com 5 comentários indica um problema prioritário que afeta experiência do usuário.

---

## 5. Bugs e Estabilidade

### Bugs Reportados (Open)

| # | Severidade | Título | Impacto |
|---|------------|--------|---------|
| [#4309](https://github.com/HKUDS/nanobot/issues/4309) | **ALTA** | `/v1/chat/completions` always returns zero usage tokens | API compatibility quebrada para monitoramento de uso |
| [#4307](https://github.com/HKUDS/nanobot/issues/4307) | **ALTA** | Post-turn consolidation wipes agent's delivery message | Referências a mensagens anteriores do agente são perdidas |
| [#4044](https://github.com/HKUDS/nanobot/issues/4044) | **ALTA** | Short term memory loss | NanoBot perde contexto durante conversas multi-turno |

### Bugs Recentemente Fechados

| # | Título | Resolução |
|---|--------|----------|
| [#4203](https://github.com/HKUDS/nanobot/issues/4203) | Bug: `find_legal_message_start` descarta mensagens com tool results órfãos | ✅ Corrigido |
| [#4006](https://github.com/HKUDS/nanobot/issues/4006) | Orphaned tool results sem tool_calls correspondentes | ✅ Corrigido |

### PRs de Fix Recentes

| # | Fix | Escopo |
|---|-----|--------|
| [#4315](https://github.com/HKUDS/nanobot/pull/4315) | ignore malformed history entries | Memory store |
| [#4312](https://github.com/HKUDS/nanobot/pull/4312) | reject malformed media attachments | Message tool |
| [#4311](https://github.com/HKUDS/nanobot/pull/4311) | reject non-positive file pagination limits | Read/list tools |
| [#4119](https://github.com/HKUDS/nanobot/pull/4119) | block relative symlink workspace escapes | Security/exec |
| [#4053](https://github.com/HKUDS/nanobot/pull/4053) | keep read-only roots out of write paths | File system security |

**Alerta:** O bug [#4309](https://github.com/HKUDS/nanobot/issues/4309) sobre tokens de uso zerados no endpoint `/v1/chat/completions` requer atenção imediata, pois afeta integração com sistemas que dependem de métricas de uso via API OpenAI-compatible.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Propostas (Open)

| # | Título | Motivação | Potencial Impacto |
|---|--------|-----------|-------------------|
| [#4316](https://github.com/HKUDS/nanobot/pull/4316) | TTS multi-provider | Suporte a OpenAI, Groq (Orpheus), ElevenLabs | **Alto** — amplia casos de uso em voice |
| [#4313](https://github.com/HKUDS/nanobot/pull/4313) | WebUI/config.json parity | Paridade de configurações entre UI e arquivo | **Médio** — UX para administradores |
| [#4296](https://github.com/HKUDS/nanobot/pull/4296) | Expand Python SDK | Controls de runtime para desenvolvedores | **Alto** — atrai ecosystem |
| [#4305](https://github.com/HKUDS/nanobot/issues/4305) | Multiple custom providers | Necessidade de múltiplos provedores custom | **Médio** — flexibilidade para empresas |

### Issues de Enhancement

- [#4305](https://github.com/HKUDS/nanobot/issues/4305) — Request para template de providers no schema de configuração (já fechado, potencialmente implementado via PR)
- [#4320](https://github.com/HKUDS/nanobot/pull/4320) — Módulo de audit com transports configuráveis

**Sinais de Roadmap:** O foco atual indica investimentos em:
1. **Observabilidade** (audit module)
2. **Voice/V Multimodal** (TTS system)
3. **Developer Experience** (SDK expansion)
4. **Configurabilidade avançada** (multi-provider, parity)

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Categoria | Issue | Problema Reportado |
|-----------|-------|-------------------|
| **Memória/Contexto** | [#4044](https://github.com/HKUDS/nanobot/issues/4044) | NanoBot "esquece" perguntas feitas por ele mesmo durante a conversa — impacto direto na experiência conversacional |
| **API Compatibility** | [#4309](https://github.com/HKUDS/nanobot/issues/4309) | Endpoint `/v1/chat/completions` retorna tokens de uso zerados — quebra ferramentas de billing/monitoring |
| **Consolidação** | [#4307](https://github.com/HKUDS/nanobot/issues/4307) | Pós-consolidação apaga mensagem de delivery do agente — referências futuras se perdem |
| **Orphaned Data** | [#4006](https://github.com/HKUDS/nanobot/issues/4006) | Tool results órfãos no histórico causam rejeição de APIs strict e crashes no renderer |

### Cenários de Uso Destacados

- **Voice Integration:** Usuários demandam TTS multi-provider para diferentes idiomas/cust os
- **Enterprise:** Necessidade de múltiplos provedores custom e auditoria de ações
- **Security-Conscious:** Preocupação com escapes de workspace via symlinks
- **SDK Adoption:** Desenvolvedores querem controles mais granulares via Python SDK

**Satisfação Geral:** A atividade massiva de PRs de fix (8+ PRs de correção em 24h) indica uma equipe **reativa** mas também demonstra **débito técnico** acumulado em edge cases de memória, ferramentas e contexto.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta / Aguardando Triagem

| # | Título | Criado | Idade | Prioridade |
|---|--------|--------|-------|------------|
| [#4193](https://github.com/HKUDS/nanobot/pull/4193) | test: add memory lifecycle harness | 2026-06-04 | 9 dias | Infra/Test |
| [#3983](https://github.com/HKUDS/nanobot/pull/3983) | test: cover runner blocked tool-call finish reasons | 2026-05-24 | 20 dias | Test/Coverage |
| [#3982](https://github.com/HKUDS/nanobot/pull/3982) | test: add scripted agent runner harness | 2026-05-24 | 20 dias | Infra/Test |

### PRs Antigos com Need de Review

| # | Título | Autor | Criado | Status |
|---|--------|-------|--------|--------|
| [#3982](https://github.com/HKUDS/nanobot/pull/3982) | test: add scripted agent runner harness | yu-xin-c | 2026-05-24 | OPEN |
| [#3983](https://github.com/HKUDS/nanobot/pull/3983) | test: cover runner blocked tool-call finish reasons | yu-xin-c | 2026-05-24 | OPEN |
| [#4053](https://github.com/HKUDS/nanobot/pull/4053) | fix(tools): keep read-only roots out of write paths | yu-xin-c | 2026-05-29 | OPEN |
| [#4119](https://github.com/HKUDS/nanobot/pull/4119) | fix(exec): block relative symlink workspace escapes | yu-xin-c | 2026-05-31 | OPEN |

### Recomendações de Priorização

1. **Urgente:** Bug [#4309](https://github.com/HKUDS/nanobot/issues/4309) — tokens de uso zerados na API
2. **Urgente:** Bug [#4044](https://github.com/HKUDS/nanobot/issues/4044) — memory loss em multi-turn
3. **Review Pendente:** PRs de segurança ([#4119](https://github.com/HKUDS/nanobot/pull/4119), [#4053](https://github.com/HKUDS/nanobot/pull/4053)) com 13-18 dias de idade
4. **Technical Debt:** Múltiplos PRs de teste do autor yu-xin-c aguardando review há 9-20 dias — possível gargalo de code review

---

## Métricas Resumidas do Dia

| Indicador | Valor |
|-----------|-------|
| Issues ativas (24h) | 6 (3 open, 3 closed) |
| PRs atualizados (24h) | 29 (20 open, 9 merged/closed) |
| Releases | 0 |
| Bugs críticos open | 3 |
| PRs de fix merged | 4 |
| Novas features | 3 (TTS, Audit, SDK) |

**Saúde Geral:** ⬆️ Projeto em alta atividade com foco em estabilidade. Recomenda-se priorizar os bugs de API (#4309) e memória (#4044) para o próximo release.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-06-13

## 1. Panorama do Dia

O projeto Hermes Agent mantém um **nível de atividade intenso**: 50 issues e 50 PRs atualizados nas últimas 24 horas, com 44 issues abertas e 49 PRs em aberto. A equipe de desenvolvimento demonstra foco em **estabilidade e segurança**, com correções críticas em andamento para vulnerabilidades de RCE no TUI gateway e problemas de isolamento no sistema de approvals do cron. A comunidade continua ativa em bugs relacionados a provedores de IA (Kimi, MiniMax, Copilot) e na expansão de funcionalidades para plataformas de mensagens, sinalizando um projeto maduro com demandas crescentes de integração multi-plataforma.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24 horas.**

O projeto encontra-se em desenvolvimento ativo semetag de versionamento visível no período analisado. A ausência de releases indica que a equipe pode estar preparando um bundle de correções ou que o desenvolvimento está focado em contribuições que serão consolidadas em版本 futura.

---

## 3. Progresso do Projeto

### PRs Abertos de Destaque (por impacto)

| # | Título | Escopo | Contribuidor |
|---|--------|--------|--------------|
| [#45222](https://github.com/NousResearch/hermes-agent/pull/45222) | fix(think_scrubber): strip MiniMax-M3 `<mm:think>` tags | UX/Output | Kewe63 |
| [#45220](https://github.com/NousResearch/hermes-agent/pull/45220) | FGD-188 restore Telegram voice input diagnostics | Telegram/Mobile | fgdghooperator |
| [#45219](https://github.com/NousResearch/hermes-agent/pull/45219) | fix(desktop): reserve titlebar safe areas | Desktop/UI | tnware |
| [#45216](https://github.com/NousResearch/hermes-agent/pull/45216) | fix(model_metadata): guard against unhashable list | Stability | Kewe63 |
| [#45214](https://github.com/NousResearch/hermes-agent/pull/45214) | fix(models): get_copilot_api_token fallback for Business/Enterprise | Provider | liuhao1024 |
| [#45218](https://github.com/NousResearch/hermes-agent/pull/45218) | fix(doctor): improve API connectivity reporting | CLI/DevOps | zexy2 |
| [#44980](https://github.com/NousResearch/hermes-agent/pull/44980) | chore(whatsapp-bridge): npm audit fix (4 of 5 vulns) | Security | capitelist |

**Avanços notáveis:**
- **Correção de vazamento de reasoning tokens**: O PR [#45222](https://github.com/NousResearch/hermes-agent/pull/45222) resolve um bug onde a MiniMax-M3 exibe tags `<mm:think>` no output visível ao usuário, melhorando a qualidade das respostas.
- **Suporte a Copilot Business/Enterprise**: O PR [#45214](https://github.com/NousResearch/hermes-agent/pull/45214) expande a compatibilidade do provider Copilot, resolving o erro 404 em contas corporativas.
- **Segurança no WhatsApp Bridge**: O PR [#44980](https://github.com/NousResearch/hermes-agent/pull/44980) resolve 4 de 5 vulnerabilidades npm audit no WhatsApp bridge.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários + reações)

| # | Título | Comentários | 👍 | Tipo | Link |
|---|--------|-------------|-----|------|------|
| [#7237](https://github.com/NousResearch/hermes-agent/issues/7237) | [Bug]: Response truncated due to output length limit | 40 | 5 | Bug (P3) | [Issue](https://github.com/NousResearch/hermes-agent/issues/7237) |
| [#15311](https://github.com/NousResearch/hermes-agent/issues/15311) | Add generic action buttons / inline keyboard support | 13 | 7 | Feature (P3) | [Issue](https://github.com/NousResearch/hermes-agent/issues/15311) |
| [#6626](https://github.com/NousResearch/hermes-agent/issues/6626) | Gemma 4 tool calling support | 8 | 3 | Feature (P3) | [Issue](https://github.com/NousResearch/hermes-agent/issues/6626) |
| [#44022](https://github.com/NousResearch/hermes-agent/issues/44022) | session.resume fails with "No LLM provider configured" | 7 | 0 | Bug (P2) | [Issue](https://github.com/NousResearch/hermes-agent/issues/44022) |

**Análise de Demandas:**

1. **Problema de Truncamento (#7237)**: Com 40 comentários, este é o issue mais discutido. Usuários reportam que ao usar Hermes Agent via CLI ou gateways (Telegram/Discord/Slack), respostas longas são truncadas com erro "Response truncated due to output length limit". A comunidade demonstra frustração significativa com limitações de streaming.

2. **Botões Interativos (#15311)**: A segunda issue mais comentada solicita uma forma genérica de implementar action buttons em plataformas de mensagens, especialmente inline keyboards do Telegram. Com 7 👍, há demanda clara por interatividade avançada além de comandos de texto.

3. **Gemma 4 Tool Calling (#6626)**: Usuários enfrentam problemas de parsing ao integrar Gemma 4 via vLLM, indicando necessidade de melhor documentação e suporte a parsers de tool calling.

---

## 5. Bugs e Estabilidade

### Issues Críticas e de Alta Prioridade (P1-P2)

| # | Severidade | Título | Comentários | Link |
|---|------------|--------|-------------|------|
| [#45160](https://github.com/NousResearch/hermes-agent/issues/45160) | 🔴 CRITICAL | TUI gateway has 2 shell=True subprocess calls (RCE risk) | 1 | [Issue](https://github.com/NousResearch/hermes-agent/issues/45160) |
| [#43066](https://github.com/NousResearch/hermes-agent/issues/43066) | P1 | Context compaction loses assistant messages | 2 | [Issue](https://github.com/NousResearch/hermes-agent/issues/43066) |
| [#37968](https://github.com/NousResearch/hermes-agent/issues/37968) | P2 (Medium/High) | Cron gateway approvals environment pollution | 2 | [Issue](https://github.com/NousResearch/hermes-agent/issues/37968) |
| [#44022](https://github.com/NousResearch/hermes-agent/issues/44022) | P2 | session.resume fails when only billing_provider stored | 7 | [Issue](https://github.com/NousResearch/hermes-agent/issues/44022) |
| [#44560](https://github.com/NousResearch/hermes-agent/issues/44560) | P2 | model.options handler blocks on synchronous HTTP calls | 4 | [Issue](https://github.com/NousResearch/hermes-agent/issues/44560) |
| [#43617](https://github.com/NousResearch/hermes-agent/issues/43617) | P2 | Kimi provider uses wrong endpoint + User-Agent | 4 | [Issue](https://github.com/NousResearch/hermes-agent/issues/43617) |

**Destaques de Bugs:**

- **🔴 CRITICAL - RCE no TUI Gateway (#45160)**: Lines 6367 e 8512 de `tui_gateway/server.py` usam `subprocess.run(..., shell=True)`, criando risco de Execução de Código Remoto. Este é o issue de segurança mais crítico do dia.

- **P1 - Context Compaction (#43066)**: Após compactação de contexto, mensagens do assistente são perdidas e mensagens subsequentes do usuário são mescladas, corrompendo o histórico da sessão.

- **P2 - Handler Síncrono Bloqueante (#44560)**: O handler `model.options` faz chamadas HTTP síncronas para todos os providers configurados, causando timeouts no WebSocket quando um provider responde lentamente.

- **P2 - Provider Kimi (#43617)**: API key tipo `sk-kimi-*` falha com 401 Invalid Authentication devido a endpoint e User-Agent incorretos.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features e Melhorias Solicitadas

| # | Prioridade | Título | 👍 | Link |
|---|------------|--------|-----|------|
| [#15311](https://github.com/NousResearch/hermes-agent/issues/15311) | P3 | Generic action buttons / inline keyboard support | 7 | [Issue](https://github.com/NousResearch/hermes-agent/issues/15311) |
| [#34352](https://github.com/NousResearch/hermes-agent/issues/34352) | P3 | Solving the Multi-Tenant Hermes Problem | 0 | [Issue](https://github.com/NousResearch/hermes-agent/issues/34352) |
| [#6626](https://github.com/NousResearch/hermes-agent/issues/6626) | P3 | Gemma 4 tool calling support | 3 | [Issue](https://github.com/NousResearch/hermes-agent/issues/6626) |
| [#45103](https://github.com/NousResearch/hermes-agent/issues/45103) | P3 | Desktop sidebar hover card with AI-generated session summary | 0 | [Issue](https://github.com/NousResearch/hermes-agent/issues/45103) |
| [#17415](https://github.com/NousResearch/hermes-agent/issues/17415) | P3 | Trusted internal triggers between gateway role sessions | 0 | [Issue](https://github.com/NousResearch/hermes-agent/issues/17415) |

**Análise de Roadmap:**

1. **Multi-Tenant Support (#34352)**:提出要从根本上重新设计记忆系统，实现完全的租户隔离。这是企业部署的关键需求，团队已在生产环境中运行修复方案数月。

2. **Inline Keyboards (#15311)**: A feature mais desejada da semana com 7 👍, demonstrando que usuários querem Hermes como hub de automação com interfaces interativas.

3. **Desktop UI Enhancements (#45103)**: Solicito hover cards com resumos gerados por IA para sessões na sidebar — melhoria de UX significativa para power users.

4. **Gemma 4 Support (#6626)**: Integração com modelo recém-lançado do Google via vLLM, indicando necessidade de atualização de parsers e configurações.

---

## 7. Resumo de Feedback dos Usuários

### Dores e Frustrações Identificadas

| Categoria | Issue | Problema | Impacto |
|-----------|-------|----------|---------|
| **Streaming/Output** | [#7237](https://github.com/NousResearch/hermes-agent/issues/7237) | Truncamento de respostas longas | Alto — afeta uso via CLI e gateways |
| **Desktop/TUI** | [#44022](https://github.com/NousResearch/hermes-agent/issues/44022) | session.resume falha com custom provider | Alto — quebras de fluxo de trabalho |
| **Model Picker** | [#35443](https://github.com/NousResearch/hermes-agent/issues/35443) | Apenas 50 modelos expostos despite larger catalog | Médio — limitação em providers ricos |
| **Mermaid Rendering** | [#40493](https://github.com/NousResearch/hermes-agent/issues/40493) | Diagramas não renderizam no chat assistant | Médio — experiência visual degradada |
| **macOS Install** | [#45183](https://github.com/NousResearch/hermes-agent/issues/45183) | Falha ao instalar DMG no MacOS | Alto — bloqueia novos usuários |
| **Mattermost Mobile** | [#25184](https://github.com/NousResearch/hermes-agent/issues/25184) | Usuários mobile não conseguem enviar comandos | Médio — plataforma específica |

**Padrões de Uso Emergentes:**
- **Multi-plataforma**: Usuários esperam experiência consistente entre CLI, Desktop, Telegram, Discord, WhatsApp, WeChat, Mattermost e Slack.
- **Model Diversity**: Crescente demanda por suporte a Gemma 4, MiniMax-M3, Kimi, DeepSeek e Copilot Business.
- **Memory/Multi-Tenant**: Cenários enterprise com múltiplos agentes por usuário.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Paralisadas

| # | Idade | Prioridade | Título | Status Atual | Link |
|---|-------|------------|--------|--------------|------|
| [#7237](https://github.com/NousResearch/hermes-agent/issues/7237) | ~2 meses | P3 | Response truncated due to output length limit | Aberta, 40 comentários | [Issue](https://github.com/NousResearch/hermes-agent/issues/7237) |
| [#6626](https://github.com/NousResearch/hermes-agent/issues/6626) | ~2 meses | P3 | Gemma 4 tool calling support | Aberta | [Issue](https://github.com/NousResearch/hermes-agent/issues/6626) |
| [#25184](https://github.com/NousResearch/hermes-agent/issues/25184) | ~1 mês | P3 | Mattermost mobile users cannot send commands | Aberta | [Issue](https://github.com/NousResearch/hermes-agent/issues/25184) |
| [#34352](https://github.com/NousResearch/hermes-agent/issues/34352) | ~2 semanas | P3 | Multi-Tenant Hermes Problem | Aberta | [Issue](https://github.com/NousResearch/hermes-agent/issues/34352) |

### Recomendações de Priorização

1. **🔴 CRÍTICO**: Issue [#45160](https://github.com/NousResearch/hermes-agent/issues/45160) — RCE no TUI Gateway precisa de atenção imediata da equipe de segurança.

2. **P1**: Issue [#43066](https://github.com/NousResearch/hermes-agent/issues/43066) — Perda de mensagens após context compaction corrompe dados do usuário.

3. **P2 (Alta Demand)**: Truncamento de output (#7237) tem 40+ comentários e afeta experiência core — considerar priorização mesmo com P3.

4. **P2 (Segurança)**: Issue [#37968](https://github.com/NousResearch/hermes-agent/issues/37968) — Poluição de ambiente no cron gateway tem CVSS 6.3-7.0.

5. **P2 (UX)**: [#44022](https://github.com/NousResearch/hermes-agent/issues/44022) e [#35443](https://github.com/NousResearch/hermes-agent/issues/35443) afetam fluxos básicos de usuários Desktop e CLI.

---

## Métricas Resumidas do Período

| Métrica | Valor |
|---------|-------|
| **Issues Ativas** | 44 |
| **Issues Fechadas (24h)** | 6 |
| **PRs Abertos** | 49 |
| **PRs Merged/Closed** | 1 |
| **Novas Releases** | 0 |
| **Issues P1-P2 Abertas** | 12 |
| **Issues com +5 Comentários** | 4 |
| **PRs com Foco em Segurança** | 2 |

---

*Relatório gerado automaticamente com base em dados do GitHub de Hermes Agent (NousResearch/hermes-agent) em 2026-06-13.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-06-13

## 1. Panorama do Dia

O ecossistema PicoClaw demonstra **alta atividade produtiva** em 12 de junho, com 19 eventos totais (6 issues + 13 PRs) em 24 horas. O projeto segue em ritmo acelerado de desenvolvimento, evidenciando maturidade no pipeline de releases — a build nightly v0.2.9-nightly.20260612 já está disponível. A comunidade demonstra foco em três eixos principais: **estabilidade** (correções de JSON marshaling, type assertions), **segurança de permissões** (escopo granular por canal/tipo de conversa) e **extensibilidade** (novos providers como NEAR AI Cloud, gateway DeltaChat). A taxa de PRs merged/fechados (3/13) indica que o time mantém gatekeeping ativo sobre a base de código.

---

## 2. Lançamentos

### 📦 Nightly Build — v0.2.9-nightly.20260612.413d3749

| Atributo | Detalhe |
|---|---|
| **Tipo** | Build automatizada (nightly) |
| **Commit** | `413d3749` (branch `main`) |
| **Status** | ⚠️ Não recomendada para produção — uso em desenvolvimento apenas |

**Mudanças desde v0.2.9 estável:**
- Baseado no branch `main` com commits mais recentes que a release estável
- PRs potencialmente incluídos:
  - [#3117](https://github.com/sipeed/picoclaw/pull/3117) — roteamento de mídia para modelos de imagem
  - [#3116](https://github.com/sipeed/picoclaw/pull/3116) — completude do lifecycle `turn.done`
  - [#3115](https://github.com/sipeed/picoclaw/pull/3115) — extração de media em data URLs
  - Correções de JSON errors em channels e tools (PRs [#3113](https://github.com/sipeed/picoclaw/pull/3113), [#3112](https://github.com/sipeed/picoclaw/pull/3112))

**Sem breaking changes identificados** nesta build nightly. Usuários em produção devem permanecer na última versão estável.

---

## 3. Progresso do Projeto

### PRs Merged/Closed (3/13)

| PR | Título | Impacto | Link |
|---|---|---|---|
| **#2551** | Refactor: padronizar identificação de canais | 🔧 Arquitetural — desacopla nomes de canais de tipos de provider, permitindo múltiplas instâncias do mesmo provider | [🔗](https://github.com/sipeed/picoclaw/pull/2551) |
| **#3113** | fix(channels): verificar erros JSON marshal/unmarshal | ✅ Estabilidade — elimina silenciamento de erros de serialização em `toChannelHashes` | [🔗](https://github.com/sipeed/picoclaw/pull/3113) |
| **#3112** | fix(tools): tratar erro JSON.Marshal em tool call arguments | ✅ Estabilidade — evita corrupção de histórico ao perder argumentos de ferramentas | [🔗](https://github.com/sipeed/picoclaw/pull/3112) |

**Destaque estratégico — PR #2551:** A refatoração de identificação de canais resolve uma limitação de longa data que impedía configurações multi-instância. Este é um facilitador para deployments corporativos e cenários de staging/produção no mesmo ambiente.

### PRs Abertos de Alto Impacto (parcial)

| PR | Título | Complexidade | Link |
|---|---|---|---|
| #3117 | fix(agent): rotear mídia para modelos de imagem | 🔧 Bug fix | [🔗](https://github.com/sipeed/picoclaw/pull/3117) |
| #3116 | fix(pico): completar lifecycle signaling turn.done | 🔧 Feature parity | [🔗](https://github.com/sipeed/picoclaw/pull/3116) |
| #2917 | feat(provider): adicionar provider NEAR AI Cloud | 🆕 Provider | [🔗](https://github.com/sipeed/picoclaw/pull/2917) |
| #3063 | feat: adicionar gateway DeltaChat | 🆕 Channel | [🔗](https://github.com/sipeed/picoclaw/pull/3063) |

---

## 4. Temas Quentes da Comunidade

### Issue #3012 — Consumo contínuo de tokens com Evolution habilitado
**Status:** Aberta | **Prioridade visual:** Alta (stale flag)  
**Autor:** xpader | **Comentários:** 2 | **Reações:** 0

> **Problema central:** Quando Evolution Mode está ativo, o sistema consome tokens continuamente a cada minuto, mesmo sem interação do usuário.

**Análise:** Esta issue foi marcada como stale, indicando falta de resposta do core team por ~8 dias. O problema é crítico para usuários com limitações de API budget. A comunidade reporta uso em produção, o que eleva a severidade.

🔗 [Ver Issue #3012](https://github.com/sipeed/picoclaw/issues/3012)

---

### Issue #2984 — Sinal explícito de turn completion para WebSocket clients
**Status:** Aberta | **Comentários:** 2 | **Reações:** 2 👍

> **Demanda:** Clientes Pico Protocol WebSocket precisam de um sinal determinístico para saber quando o agente terminou completamente o processamento de uma mensagem.

**Contexto:** Já existe PR #3116 em progresso ( mesmo autor Brook-sys?) para implementar isso. A demanda tem apoio da comunidade (2 👍), indicando que integrações externas dependem deste contrato de API.

🔗 [Ver Issue #2984](https://github.com/sipeed/picoclaw/issues/2984)

---

### Issue #3109 — Permission scoping por canal (CLOSED)
**Status:** Fechada | **Comentários:** 1

> **Solução entregue:** Escopo de permissões em nível de canal para restringir operações perigosas em grupos/chamadas.

Este foi fechado rapidamente (criado e fechado em 2026-06-12), sugerindo que a funcionalidade já estava implementada ou a issue foi duplicada. Usuários devem verificar se a feature está disponível na nightly.

🔗 [Ver Issue #3109](https://github.com/sipeed/picoclaw/issues/3109)

---

## 5. Bugs e Estabilidade

### 🐛 Bugs Reportados Hoje (4 issues abertas)

| # | Bug | Severidade Estimada | Canal Afetado | Link |
|---|---|---|---|---|
| #3111 | Gemini 3.5 Flash: erro 400 por missing `thought_signature` | 🔴 Alta | Provider Gemini | [🔗](https://github.com/sipeed/picoclaw/issues/3111) |
| #3110 | Telegram: replies em Forum topics vão para #General | 🟡 Média | Telegram | [🔗](https://github.com/sipeed/picoclaw/issues/3110) |
| #3012 | Evolution: consumo contínuo de tokens | 🔴 Alta | Core/Evolution | [🔗](https://github.com/sipeed/picoclaw/issues/3012) |

**Análise por severidade:**

**🔴 Crítica:**
- **#3111:** Falha em nova release do Gemini 3.5 Flash bloqueia usuários deste provider. A incompatibilidade de schema indica mudança unilateral na API do Google. Possível necessidade de hotfix.
- **#3012:** Vazamento de tokens em produção pode causar custos significativos não previstos. Precisa triagem urgente.

**🟡 Média:**
- **#3110:** Bug de UX no Telegram Forum — typing indicator funciona, mas resposta vai para lugar errado. Afeta fluxo de conversas em grupos estruturados.

### Correções de Estabilidade Merged

Os PRs #3112 e #3113 abordam silenciamento de erros JSON (`_ = err`), padrão perigoso que pode causar falhas silenciosas. A correção indica maturidade do code review.

---

## 6. Pedidos de Features e Sinais de Roadmap

### 🚀 Features em Desenvolvimento

| PR | Feature | Status | Link |
|---|---|---|---|
| #3063 | Gateway DeltaChat | Aberta | [🔗](https://github.com/sipeed/picoclaw/pull/3063) |
| #2917 | Provider NEAR AI Cloud | Aberta | [🔗](https://github.com/sipeed/picoclaw/pull/2917) |
| #2964 | Compressão de imagens inbound | Aberta | [🔗](https://github.com/sipeed/picoclaw/pull/2964) |

### 🔮 Sinais de Roadmap (Issues Abertas)

| Issue | Feature Request | Implicação Estratégica | Link |
|---|---|---|---|
| #3114 | Permissão granular por tipo de conversa no Telegram (privado/grupo/canal) | 🛡️ Segurança — isolamento de comandos perigosos em grupos | [🔗](https://github.com/sipeed/picoclaw/issues/3114) |

**Análise:** A issue #3114 complementa #3109 (fechado), sugerindo que a feature de permissões está em evolução — primeiro o escopo por canal (#3109), agora细分 por tipo de conversa. O autor v2up-32mb demonstra interesse ativo em segurança corporativa.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Categoria | Descrição | Frequência |
|---|---|---|
| ⚡ **Custo/Tokens** | Evolução causa consumo excessivo e imprevisível de tokens | 1 report (crítico) |
| 🔌 **Provider** | Gemini 3.5 Flash quebrou completamente (erro de schema) | 1 report (crítico) |
| 💬 **Telegram UX** | Respostas em Forum topics vão para tópico errado | 1 report (médio) |
| 🔐 **Segurança** | Falta isolamento de permissões por tipo de conversa | 1 report (estratégico) |

### Padrões Observáveis

1. **Maturidade de integrações diversificadas:** Issues cobrem FreeBSD, Gemini, Telegram, MiniMax — indicando adoção heterogênea.
2. **Foco em segurança/corporativo:** Usuário v2up-32mb demonstra uso em cenários multi-equipe onde isolamento de permissões é mandatório.
3. **Comunidade técnica ativa:** 13 PRs em 24h sugere contributors engaged, não apenas consumers.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta Estendida

| # | Título | Criado | Atualizado | Estado | Prioridade |
|---|---|---|---|---|---|
| **#3012** | Token consumption com Evolution | 2026-06-05 | 2026-06-12 | Stale | 🔴 Alta |
| #2984 | Turn completion signal | 2026-06-02 | 2026-06-12 | Aberta | 🟡 Média |
| #2964 | Image compression | 2026-05-28 | 2026-06-12 | Aberta (PR existe) | 🟢 Baixa |

### PRs Stale ou Aguardando Review

| PR | Título | Criado | Idade | Status |
|---|---|---|---|---|
| **#2964** | Feat/image input compression | 2026-05-28 | ~16 dias | Aguardando merge |
| #2917 | NEAR AI Cloud provider | 2026-05-21 | ~23 dias | Aguardando merge |
| #3045 | Matrix user ID fix | 2026-06-07 | ~6 dias | Aguardando merge |

### Recomendações para o Core Team

1. **🔴 Urgente:** Re-avaliar issue #3012 antes que complete stale (>30 dias) e perca contributor.
2. **🟡 Importante:** PR #3111 (Gemini 3.5 Flash) pode requerer ação no código do provider ou workaround.
3. **🟢 Manter:** PRs #2917 e #2964 com review pendente há >2 semanas — risco de desinteresse do autor.
4. **📊 Processo:** Estabelecer SLA para stale labels — 8 dias já causa frustração visível.

---

## Métricas Sintéticas do Dia

| Métrica | Valor | Tendência |
|---|---|---|
| Issues ativas (24h) | 6 | ➡️ Normal |
| PRs atualizados (24h) | 13 | 📈 Acima da média |
| Taxa de fechamento (issues) | 16.7% (1/6) | 🟡需跟进 |
| Taxa de merge (PRs) | 23% (3/13) | 🟢 Saudável |
| Releases | 1 nightly | ✅ Pipeline ativo |
| Bugs críticos abertos | 2 | ⚠️ Atenção |

---

*Relatório gerado automaticamente com base em dados GitHub de 2026-06-12. Todas as URLs apontam para https://github.com/sipeed/picoclaw.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-06-13

## 1. Panorama do Dia

O projeto IronClaw apresenta alta atividade de desenvolvimento no dia de hoje, com **50 issues e 45 PRs atualizados** nas últimas 24 horas. A equipe demonstra foco intenso em melhorias na interface Reborn (UI/UX), com **13 issues fechadas** relacionadas a bugs de navegação, estados de conversa e interação com composer. No фронтенд, PRs críticos para integração com Slack (entrega de mensagens, outbound targets) estão em revisão, enquanto a infraestrutura recebe correções urgentes de segurança (RUSTSEC advisories). O repositório não registrou novas releases, indicando que a equipe prioriza estabilização antes de corte de versão.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24 horas.**

O último release documentado (PR #3708) ainda está aberto, propondo atualizações de versão para múltiplos crates:
- `ironclaw_common`: 0.4.2 → 0.5.0 (⚠ breaking changes)
- `ironclaw_safety`: 0.2.2 → 0.2.3
- `ironclaw_skills`: 0.3.0 → 0.4.0 (⚠ breaking changes)
- `ironclaw`: 0.24.0 → 0.29.1

⚠️ **Atenção:** O release inclui breaking changes em `ironclaw_common` e `ironclaw_skills`. Consumidores dessas bibliotecas devem revisar as notas de migração antes de atualizar.

---

## 3. Progresso do Projeto

### PRs Fechados/Merged Hoje

| PR | Título | Impacto |
|----|--------|---------|
| [#4826](https://github.com/nearai/ironclaw/pull/4826) | fix(deps): update postgres crates for RUSTSEC-2026-0178/0179/0180 | 🔴 Crítico — corrige 3 vulnerabilidades RUSTSEC que bloqueavam o merge queue |
| [#4811](https://github.com/nearai/ironclaw/pull/4811) | Post Slack feedback when message deferred behind pending gate | ✅ Melhora UX eliminando "dead-air" quando run é bloqueado em gate |
| [#4799](https://github.com/nearai/ironclaw/pull/4799) | Slack gate routing Phase B | ✅ Corrige falha de produção em railway-qa (ScopeNotFound 404) |
| [#2700](https://github.com/nearai/ironclaw/pull/2700) | fix(gateway): show descriptive chat titles | ✅ Elimina UUIDs truncados na sidebar web |
| [#2699](https://github.com/nearai/ironclaw/pull/2699) | fix(mcp): normalize server names, fix UTF-8 truncation | ✅ Normalização de nomes MCP e correção de truncamento UTF-8 |

### Destaque: Correção de Segurança Urgente

O PR [#4826](https://github.com/nearai/ironclaw/pull/4826) resolve três RUSTSEC advisories contra a família `rust-postgres`:
- **RUSTSEC-2026-0178**: Unbounded SCRAM iteration count (DoS por CPU exhaustion)
- **RUSTSEC-2026-0179**: Panic decoding malformed `hstore` value (DoS)
- **RUSTSEC-2026-0180**: Panic on malformed `DataRow` (DoS)

Esta correção foi necessária pois estava impedindo PRs (#4569, #4568, #4562, #4561) de entrarem no merge queue.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| Issue | Título | Comentários | Tipo |
|-------|--------|-------------|------|
| [#4703](https://github.com/nearai/ironclaw/issues/4703) | NEAR AI model picker saves display name instead of model ID | 3 | 🐛 Bug |
| [#4705](https://github.com/nearai/ironclaw/issues/4705) | NEAR AI SSO setup fails in local environment | 2 | 🐛 Bug |
| [#4825](https://github.com/nearai/ironclaw/issues/4825) | Persist "always allow" approvals across threads | 1 | 🔧 Feature |
| [#4762](https://github.com/nearai/ironclaw/issues/4762) | Failed tool workflow causes message ordering inconsistency | 1 | 🐛 Bug |

### Análise dos Temas

**NEAR AI Integration (Issues #4703, #4705, #4673):** Há um padrão de problemas com a integração do provedor NEAR AI — falha no SSO local, salvamento de configuration após teste de conexão, e confusão entre display name e model ID. Sugere necessidade de revisão do fluxo de onboarding do provedor.

**Reborn UX (Issues #4733, #4722, #4721, #4719, #4725, #4720, #4724):** Todas fechadas, indicam que a equipe está ativamente limpando a lista de bugs da interface Reborn. Problemas incluem navegação away de links, flicker em conversas, estado interativo do composer, e persistência de warnings entre conversas.

---

## 5. Bugs e Estabilidade

### Bugs Abertos por Severidade

**🔴 Alta Prioridade:**

| Issue | Título | Descrição |
|-------|--------|-----------|
| [#4824](https://github.com/nearai/ironclaw/issues/4824) | cargo-deny failing repo-wide | RUSTSEC advisories bloqueiam CI em main e todos PRs |
| [#4762](https://github.com/nearai/ironclaw/issues/4762) | Failed tool workflow causes ordering inconsistency | Mensagens e atividade ficam inconsistentes após falha de tool |
| [#4696](https://github.com/nearai/ironclaw/issues/4696) | Local Ollama Test connection reports success when unavailable | Teste de conexão retorna falso positivo |

**🟡 Média Prioridade:**

| Issue | Título | Descrição |
|-------|--------|-----------|
| [#4823](https://github.com/nearai/ironclaw/issues/4823) | No UI feedback when deleting running conversation fails | Usuário não recebe feedback de falha |
| [#4697](https://github.com/nearai/ironclaw/issues/4697) | Active provider status inconsistent in Inference settings | Estado do provedor mostra informação conflitante |
| [#4796](https://github.com/nearai/ironclaw/issues/4796) | LLM lacks awareness of current date/time | Modelo assume data/hora incorreta |

**🟢 Minor/UI:**

| Issue | Título | Descrição |
|-------|--------|-----------|
| [#4723](https://github.com/nearai/ironclaw/issues/4723) | New conversation composer hover state only highlights top border | Visual inconsistente |
| [#4819](https://github.com/nearai/ironclaw/issues/4819) | Attachment warning banner difficult to read in Light theme | Contraste insuficiente |

### Observação sobre Estabilidade

A issue [#4770](https://github.com/nearai/ironclaw/issues/4770) (agora fechada) relatava que tool activity e updates de capability podem parar de aparecer após refresh — possível problema de SSE reconnect. Este tipo de issue indica necessidade de verificar resiliência da conexão em tempo real.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em Desenvolvimento

| PR | Título | Área | Tamanho |
|----|--------|------|---------|
| [#4778](https://github.com/nearai/ironclaw/pull/4778) | Represent Slack as a product-adapter extension | Slack Integration | XL |
| [#4779](https://github.com/nearai/ironclaw/pull/4779) | Expose outbound delivery targets to Reborn model | Slack Integration | XL |
| [#4777](https://github.com/nearai/ironclaw/pull/4777) | Persist Slack connected state in WebUI | Slack Integration | XL |
| [#4812](https://github.com/nearai/ironclaw/pull/4812) | Drain DeferredBusy messages when blocking run reaches terminal | Messaging | XL |
| [#4588](https://github.com/nearai/ironclaw/pull/4588) | Observability seams — trajectory observer + LLM provider injection | Observability | XL |
| [#4559](https://github.com/nearai/ironclaw/pull/4559) | Agent-driven Trace Commons onboarding via invite link | Tracing | XL |

### Novas Features Solicitadas

| Issue | Título | Potencial |
|-------|--------|-----------|
| [#4825](https://github.com/nearai/ironclaw/issues/4825) | Persist "always allow" approvals across threads | Usabilidade significativa |
| [#4822](https://github.com/nearai/ironclaw/issues/4822) | Track Engine V2 LLM usage in /api/admin/usage | Operacional |
| [#4832](https://github.com/nearai/ironclaw/issues/4832) | Batch drained DeferredBusy messages into single run | Performance |
| [#4833](https://github.com/nearai/ironclaw/issues/4833) | Per-thread DeferredBusy index to avoid full transcript scans | Performance |

### Sinais de Roadmap

1. **Slack como Product-Adapter:** A série de PRs #4777-#4780 indica trabalho ativo para tornar Slack uma extensão configurável em vez de canal built-in hardcoded.

2. **DeferredBusy Drain:** O arc de mensagens bloqueadas (#4799 → #4811 → #4812 → #4817) mostra evolução do sistema de gating com drain automático.

3. **Observabilidade:** PR #4588 introduz trajectory observer para external hosts (nearai-bench), sugerindo foco em testabilidade e debugging.

4. **CI Modernization:** Issues #4830 e #4829 indicam intenção de profissionalizar testes E2E do Reborn no merge queue.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Issue | Dor | Frequência |
|-------|-----|------------|
| [#4703](https://github.com/nearai/ironclaw/issues/4703) | NEAR AI provider salva display name ao invés de model ID — frustração no setup | 1 usuário (detalhado) |
| [#4705](https://github.com/nearai/ironclaw/issues/4705) | SSO local falha com `Invalid frontend_callback` | 1 usuário |
| [#4825](https://github.com/nearai/ironclaw/issues/4825) | Aprovação "always allow" não persiste entre threads — re-prompts constantes | Usuários múltiplos |
| [#4696](https://github.com/nearai/ironclaw/issues/4696) | Teste de conexão Ollama dá falso positivo | 1 usuário |
| [#4823](https://github.com/nearai/ironclaw/issues/4823) | Deletar conversa em estado "Running" falha silenciosamente | 1 usuário |

### Padrões Identificados

**Problemas de Estado Persistente:**
- Warnings de attachment persistem entre conversas
- Draft não enviado é perdido ao sair de "New Conversation"
- Sidebar "PINNED" mostra conversa ativa ao invés de pins reais

**Problemas de Feedback:**
- Falhas de deleção não mostram feedback visual
- Estado do provedor inconsistente entre UI e backend
- Autorização não recupera após falha/cancelamento

**Experiência de Onboarding:**
- Fluxo NEAR AI tem múltiplos pontos de falha
- Teste de conexão bem-sucedido não garante salvamento
- SSO local requer atenção (provavelmente configuração de callback)

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta (0 comentários, abertas > 24h)

| Issue | Título | Criado | Prioridade |
|-------|--------|--------|------------|
| [#4824](https://github.com/nearai/ironclaw/issues/4824) | cargo-deny failing repo-wide | 2026-06-12 | 🔴 Crítica |
| [#4822](https://github.com/nearai/ironclaw/issues/4822) | Track Engine V2 LLM usage | 2026-06-12 | 🟡 Alta |
| [#4813](https://github.com/nearai/ironclaw/issues/4813) | Split long CI test jobs | 2026-06-12 | 🟡 Alta |
| [#4818](https://github.com/nearai/ironclaw/issues/4818) | Decompose slack_delivery.rs | 2026-06-12 | 🟡 Alta |
| [#4817](https://github.com/nearai/ironclaw/issues/4817) | DeferredBusy drain follow-ups | 2026-06-12 | 🟡 Alta |
| [#4832](https://github.com/nearai/ironclaw/issues/4832) | Batch drained DeferredBusy | 2026-06-12 | 🟡 Alta |
| [#4833](https://github.com/nearai/ironclaw/issues/4833) | Per-thread DeferredBusy index | 2026-06-12 | 🟡 Alta |
| [#4831](https://github.com/nearai/ironclaw/issues/4831) | Route DeferredBusy through replay | 2026-06-12 | 🟡 Alta |
| [#4828](https://github.com/nearai/ironclaw/issues/4828) | Surface connected channels as runtime-context | 2026-06-12 | 🟡 Alta |

### Issues Antigas Sem Progresso

| Issue | Título | Criado | Idade |
|-------|--------|--------|-------|
| [#2341](https://github.com/nearai/ironclaw/issues/2341) | Bound file history memory, add job cleanup | 2026-04-11 | ~63 dias |
| [#4058](https://github.com/n

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do Projeto CoPaw (QwenPaw) — 2026-06-13

## 1. Panorama do Dia

O projeto demonstra **alta atividade** com 23 issues e 27 PRs atualizados nas últimas 24h. Não houve lançamentos formais, mas a equipe está preparando a versão beta 1.1.12b1. A comunidade reporta vários bugs críticos relacionados à estabilidade (crashes, vazamentos de memória, tarefas agendadas com falha) e há forte demanda por novas funcionalidades como suporte a canais (Slack, Kimi) e colaboração multi-agente. A migração para AgentScope 2.0 (#4727) continua sendo o tema estratégico mais relevante.

---

## 2. Lançamentos

**Nenhuma release oficial** foi publicada nas últimas 24h.

| Release | Status | Observações |
|---------|--------|------------|
| v1.1.12b1 | Em preparação | PRs #5157 e #5159 ajustaram a versão para `1.1.12b1` |

**Preparação em curso:**
- [PR #5159](https://github.com/agentscope-ai/QwenPaw/pull/5159): Corrige formatação da versão para `1.1.12b1`
- [PR #5157](https://github.com/agentscope-ai/QwenPaw/pull/5157): Bump de versão para beta release

---

## 3. Progresso do Projeto

### PRs Fechados/Merged (11 total)

| PR | Autor | Descrição | Impacto |
|----|-------|-----------|---------|
| [#5159](https://github.com/agentscope-ai/QwenPaw/pull/5159) | rayrayraykk | Corrige versão para 1.1.12b1 | Manutenção |
| [#5157](https://github.com/agentscope-ai/QwenPaw/pull/5157) | rayrayraykk | Bump versão para beta | Preparação release |
| [#5144](https://github.com/agentscope-ai/QwenPaw/pull/5144) | zhaozhuang521 | **Force render Collapse panels** — resolve perda de configuração de memória | UX Crítico |
| [#5147](https://github.com/agentscope-ai/QwenPaw/pull/5147) | zhaozhuang521 | **Corrige redirect de session** ao trocar para Coding Mode | UX |
| [#5154](https://github.com/agentscope-ai/QwenPaw/pull/5154) | zhaozhuang521 | Refatora estilo de resultado da busca de memória | UX |
| [#5121](https://github.com/agentscope-ai/QwenPaw/pull/5121) | yutai78786 | **Release Verification Gate** — gate de verificação E2E antes de publicar | DevOps/Qualidade |
| [#4144](https://github.com/agentscope-ai/QwenPaw/pull/4144) | jinglinpeng | Usa loopback para desktop wildcard readiness checks | Desktop |
| [#5022](https://github.com/agentscope-ai/QwenPaw/pull/5022) | jinglinpeng | Guarda validação de workspace restore | Segurança |
| [#5078](https://github.com/agentscope-ai/QwenPaw/pull/5078) | XiuShenAl | **Runtime 2.0 modular architecture** com ToolCoordinator | Arquitetura |

### PRs Abertos em Destaque

| PR | Autor | Descrição | Estado |
|----|-------|-----------|--------|
| [#5078](https://github.com/agentscope-ai/QwenPaw/pull/5078) | XiuShenAl | Runtime 2.0 modular — decomposição do Runner em unidades testáveis | Under Review |
| [#5067](https://github.com/agentscope-ai/QwenPaw/pull/5067) | xiaoming-qxm | **Agent OS Driver** — abstração unificada para MCP/A2A/ACP | Under Review |
| [#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727) | rayrayraykk | Migração backend para AgentScope 2.0 | Em progresso |
| [#4622](https://github.com/agentscope-ai/QwenPaw/pull/4622) | EliasMei | Plugin DataPaw com 12 skills de BI | Under Review |
| [#5069](https://github.com/agentscope-ai/QwenPaw/pull/5069) | yuanxs21 | Visual model fallback para modelos text-only | Implementação |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| Issue | Comentários | Tipo | Tema |
|-------|-------------|------|------|
| [#5064](https://github.com/agentscope-ai/QwenPaw/issues/5064) | 11 | Bug | **Tarefas agendadas não disparam** — Timer tasks created by Agent não executam automaticamente |
| [#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727) | 10 | Breaking Change | Migração para AgentScope 2.0 — questão estratégica |
| [#5140](https://github.com/agentscope-ai/QwenPaw/issues/5140) | 5 | Bug | Download de anexos docx/pdf retorna 404 |
| [#5137](https://github.com/agentscope-ai/QwenPaw/issues/5137) | 5 | Bug | Configurações de memória e vetor perdidas ao salvar |
| [#5098](https://github.com/agentscope-ai/QwenPaw/issues/5098) | 4 | Bug | Busca de memória não exibe resultados no UI |

### Análise de Demandas

**🔴 Funcionalidade Crítica Afetada:** Sistema de tarefas agendadas (#5064) está completamente quebrado — usuários não conseguem usar timer tasks, impactando fluxos de automação.

**🟡 Migração em Espera:** A issue #4727 (10 comentários) indica que a comunidade aguarda ansiosamente a migração para AgentScope 2.0, com usuários perguntando diretamente "quando podemos atualizar" (#5149).

**🟢 Melhorias UI:** Vários bugs de renderização (raiz quadrada, collapse panels, busca de memória) indicam necessidade de hardening do frontend.

---

## 5. Bugs e Estabilidade

### 🔴 Críticos (Impacto Alto)

| Issue | Severidade | Descrição | Recorrência |
|-------|------------|-----------|------------|
| [#5064](https://github.com/agentscope-ai/QwenPaw/issues/5064) | **Crítica** | Timer tasks não disparam automaticamente | Continua desde v1.1.10 |
| [#5155](https://github.com/agentscope-ai/QwenPaw/issues/5155) | **Crítica** | Docker:宕机重启 (crash/restart aleatório) | Intermitente |
| [#5138](https://github.com/agentscope-ai/QwenPaw/issues/5138) | **Crítica** | Windows: processos e memória crescem continuamente até 90%+ | Constante |
| [#5162](https://github.com/agentscope-ai/QwenPaw/issues/5162) | **Crítica** | Loop infinito na lógica de思考 do agente | Regressão |

### 🟠 Graves (Regressões Identificadas)

| Issue | Severidade | Descrição | Versão Afetada |
|-------|------------|-----------|----------------|
| [#5163](https://github.com/agentscope-ai/QwenPaw/issues/5163) | **Grave** | Gemini tool calling quebrado (regressão) | v1.1.11.post2 |
| [#5140](https://github.com/agentscope-ai/QwenPaw/issues/5140) | **Grave** | Download docx/pdf retorna 404 | v1.1.11.post2 |
| [#5142](https://github.com/agentscope-ai/QwenPaw/issues/5142) | **Grave** | Coding Mode: session perdida após refresh | v1.1.11.post2 |

### 🟡 Moderados

| Issue | Descrição |
|-------|-----------|
| [#5137](https://github.com/agentscope-ai/QwenPaw/issues/5137) | Configurações de memória perdidas se cards não expandidos |
| [#5098](https://github.com/agentscope-ai/QwenPaw/issues/5098) | UI de busca de memória exibe "unknown" em vez de caminhos |
| [#5166](https://github.com/agentscope-ai/QwenPaw/issues/5166) | Plugin TeamChat falha em Python 3.13 (imghdr removido) |
| [#5145](https://github.com/agentscope-ai/QwenPaw/issues/5145) | Detalhes de execução sempre expandidos |

**Nota:** A versão v1.1.11.post2 apresenta múltiplas regressões comparada à v1.1.10, especialmente em funcionalidades de tool calling e download.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Funcionalidades Solicitadas

| Issue | Feature | Justificativa | Prioridade |
|-------|---------|---------------|------------|
| [#5156](https://github.com/agentscope-ai/QwenPaw/issues/5156) | Suporte a `kimi-for-coding` / whitelist uv | Usuários com assinatura Kimi coding não conseguem integrar | 🟡 |
| [#5139](https://github.com/agentscope-ai/QwenPaw/issues/5139) | **Agent Team / Swarm Collaboration** | Competição com WorkBuddy Expert Team e JiuwenSwarm | 🟢 |
| [#5152](https://github.com/agentscope-ai/QwenPaw/issues/5152) | Suporte a **Slack** como canal | Integração solicitada para deploy local | 🟡 |
| [#5164](https://github.com/agentscope-ai/QwenPaw/issues/5164) | System tray, auto-start, background service | Funcionalidades desktop melhores | 🟡 |
| [#5069](https://github.com/agentscope-ai/QwenPaw/pull/5069) | Visual model fallback | Já em implementação |

### Sinais de Roadmap

1. **Arquitetura:** PR #5078 (Runtime 2.0) e #5067 (Agent OS Driver) indicam direção de modularização e Abstração de capacidades externas (MCP/A2A/ACP)

2. **Canais:** Yuanbao receiving improvements (#5160, #5150), Slack solicitado (#5152)

3. **Análise de Dados:** Plugin DataPaw (#4622) com 12 skills BI em review

4. **Observabilidade:** PR #5130 adiciona popover de token/context usage por turno

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais

| Dor | Impacto | Evidência |
|-----|---------|-----------|
| **Timer tasks não funcionam** | Alto — automação quebrada | #5064 (11 comentários, 0 upvotes mas alta recorrência) |
| **Instabilidade no Docker** | Alto — produção afetada | #5155: "时不时会自动宕机重启" |
| **Vazamento de memória Windows** | Alto — usabilidade degradada | #5138: memória >90% após uso |
| **Configurações perdidas** | Médio — frustração | #5137: configurações de memória "desaparecem" |
| **Regressões a cada release** | Médio — desconfiança | v1.1.11.post2 quebra Gemini tool calling e downloads |

### Cenários de Uso Reportados

- **Automação empresarial:** Timer tasks para workflows agendados
- **Coding assist:** Modo Coding com múltiplas sessions
- **Integração canais:** Yuanbao, DingTalk, Discord, Slack (solicitado)
- **Análise de dados:** Buscas em memória vetorial, BI

### Satisfação/Insatisfação

**Insatisfeitos:** Usuários Windows, Docker, e quem depende de timer tasks
**Satisfeitos:** Funcionalidades core de chat e agentes parecem estáveis

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta / Aguardando Ação

| Issue | Tempo | Descrição | Prioridade |
|-------|-------|-----------|------------|
| [#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727) | ~17 dias | Migração AgentScope 2.0 — **maior issue estratégica** | 🔴 |
| [#5064](https://github.com/agentscope-ai/QwenPaw/issues/5064) | ~3 dias | Timer tasks não disparam | 🔴 |
| [#5163](https://github.com/agentscope-ai/QwenPaw/issues/5163) | <1 dia | Regressão Gemini tool calling | 🔴 |
| [#5138](https://github.com/agentscope-ai/QwenPaw/issues/5138) | <1 dia | Memory leak Windows | 🔴 |
| [#5155](https://github.com/agentscope-ai/QwenPaw/issues/5155) | <1 dia | Docker crashes | 🔴 |

### PRs Long-Running

| PR | Tempo | Descrição | Status |
|----|-------|-----------|--------|
| [#5078](https://github.com/agentscope-ai/QwenPaw/pull/5078) | ~3 dias | Runtime 2.0 modular | Under Review |
| [#5067](https://github.com/agentscope-ai/QwenPaw/pull/5067) | ~3 dias | Agent OS Driver | Under Review |
| [#4622](https://github.com/agentscope-ai/QwenPaw/pull/4622) | ~22 dias | DataPaw plugin | Under Review |
| [#4900](https://github.com/agentscope-ai/QwenPaw/pull/4900) | ~11 dias | Decouple plugin loader | Aberto |

---

## Indicadores de Saúde do Projeto

| Métrica | Valor | Avaliação |
|---------|-------|-----------|
| Issues ativas (24h) | 23 | 🟢 Alta |
| PRs atualizados (24h) | 27 | 🟢 Alta |
| Taxa de fechamento issues | 7/23 (30%) | 🟡 Moderada |
| Bugs críticos abertos | 5 | 🔴 Alerta |
| Regressões (v1.1.11.post2) | 3+ | 🔴 Alerta |
| Releases (24h) | 0 | 🟡 Aguardando beta |

**Veredicto:** O projeto está ativo mas enfrenta problemas de estabilidade críticos, especialmente relacionados a vazamentos de memória, crashes em Docker, e funcionalidades quebradas (timer tasks, downloads). A v1.1.11.post2 parece ter introduzido regressões que precisam de correção urgente antes da próxima release beta.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-06-13

## 1. Panorama do Dia

O projeto ZeroClaw mantém um ritmo de atividade intenso com **50 issues e 50 PRs atualizados nas últimas 24h**, indicando uma comunidade altamente engajada. O release **v0.8.0** foi recém-lançado como a versão marcante do ciclo, introduzindo suporte a múltiplos agentes nomeados por daemon. Dos 30 issues mais comentados, **11 são bugs de severidade alta/crítica** (P1), muitos ainda em progresso, sugerindo que a equipe está em ciclo ativo de estabilização pós-release. O pipeline de PRs conta com 44 abertos e 6 merged/fechados, com contribuições diversas de múltiplos contribuidores.

---

## 2. Lançamentos

### v0.8.0 — Release Marcante
**Link:** [zeroclaw-labs/zeroclaw/releases/tag/v0.8.0](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.8.0)

A versão v0.8.0 representa uma reformulação arquitetural significativa:

| Mudança | Impacto |
|---------|---------|
| **Multi-agente por daemon** | Um único processo daemon agora executa múltiplos agentes nomeados, cada um com workspace, memória, provider, política de segurança, canais e personalidade próprios |
| **Schema de configuração reescrito** | Sistema de configuração unificado com migração automática de setups existentes |
| **Coordenação centralizada** | Infraestrutura de configuração que orquestra todos os componentes do agente |

**Nota de migração:** O schema de configuração foi reescrito, mas com migração automática para setups existentes — operadores devem validar seus arquivos de configuração após upgrade.

---

## 3. Progresso do Projeto

### PRs Fechados/Merged (Últimas 24h)

| PR | Autor | Área | Impacto |
|----|-------|------|---------|
| [#7546](https://github.com/zeroclaw-labs/zeroclaw/pull/7546) | Yyukan | docs | Unifica construção do SopEngine para instância única por daemon, eliminando estado duplicado entre ferramentas de agente e listener MQTT |
| [#7545](https://github.com/zeroclaw-labs/zeroclaw/pull/7545) | tidux | runtime | Corrige inclusão automática de ferramentas MCP descobertas no `risk_profile.allowed_tools` (corrigido em #7547) |

### PRs Abertos com Alta Prioridade

| PR | Autor | Área | Tamanho | Risco | Destaque |
|----|-------|------|---------|-------|----------|
| [#7540](https://github.com/zeroclaw-labs/zeroclaw/pull/7540) | Nillth | runtime/agent | L | High | **Consolidação dos três motores de turn** — Une `run_tool_call_loop`, `turn_streamed_with_steering_state` e `Agent::turn` em um único engine. Implementa RFC #7415 |
| [#7429](https://github.com/zeroclaw-labs/zeroclaw/pull/7429) | bheatwole | runtime:wasm | L | High | Adiciona dependência wasmtime para preparação de deprecação do Extism |
| [#7524](https://github.com/zeroclaw-labs/zeroclaw/pull/7524) | Nillth | channel:discord | S | Low | Deriva gateway intents da configuração ao invés de hardcoded |
| [#6842](https://github.com/zeroclaw-labs/zeroclaw/pull/6842) | PierreLeGuen | provider | S | Medium | Adiciona provider **NEAR AI Cloud** como slot OpenAI-compatível |

---

## 4. Temas Quentes da Comunidade

### Issues com Mais Comentários (Top 5)

| Issue | Comentários | Tema | Análise |
|-------|-------------|------|---------|
| [#6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699) | 7 | `tool_filter_groups` é no-op para MCP tools reais + bug de prefixo | Problema de filtragem de ferramentas MCP; afeta segurança e configuração de ferramentas |
| [#7112](https://github.com/zeroclaw-labs/zeroclaw/issues/7112) | 3 | Tracker v0.8.0 release queue | Issue de coordenação de milestone para blockers de promoção a Stable-tier |
| [#7415](https://github.com/zeroclaw-labs/zeroclaw/issues/7415) | 3 | RFC: Unificar três motores de turn | RFC já executado via PR #7540; consolidação arquitetural em andamento |
| [#6312](https://github.com/zeroclaw-labs/zeroclaw/issues/6312) | 4 | Routing de webhook por alias | Feature para multi-instance channels via paths; parcialmente implementado via `/webhook?agent=` |
| [#6391](https://github.com/zeroclaw-labs/zeroclaw/issues/6391) | 4 | Heartbeat tracking real para nós daemon | Blocked — sem sinal de liveness real; afetando dashboard de nós |

**Demanda principal:** A comunidade demonstra forte interesse em **estabilidade pós-release** (bugs P1), **arquitetura de multi-agente** (v0.8.0), e **integração de providers** (MCP, NEAR AI, Gemini).

---

## 5. Bugs e Estabilidade

### Bugs Críticos/High (P1) — Em Progresso

| Issue | Severidade | Componente | Descrição | Status |
|-------|------------|------------|-----------|--------|
| [#6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699) | High | runtime/tool:MCP | `tool_filter_groups` não funciona para MCP tools reais (bug de prefixo) | in-progress |
| [#5542](https://github.com/zeroclaw-labs/zeroclaw/issues/5542) | S0 | runtime/daemon | OOM consecutivas em WSL2 — risco de perda de dados | in-progress |
| [#6302](https://github.com/zeroclaw-labs/zeroclaw/issues/6302) | High | provider:gemini | Gemini 400 — `assistant tool_call` como primeiro turn (violação de invariante) | in-progress |
| [#5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808) | High | config/runtime | Budget de 32k tokens excedido na primeira iteração — trim preemptivo perpétuo | accepted |
| [#6350](https://github.com/zeroclaw-labs/zeroclaw/issues/6350) | High | channel:whatsapp | Bypass de `allowed-numbers` para contatos LID (mensagens silenciosamente descartadas) | in-progress |
| [#6361](https://github.com/zeroclaw-labs/zeroclaw/issues/6361) | High | provider:minimax | `context_compression` dropa `tool_calls` e `tool_result` para providers OpenAI-compatíveis | in-progress |
| [#6434](https://github.com/zeroclaw-labs/zeroclaw/issues/6434) | High | tool:shell | Shell tool calls recusadas em `autonomy=full` — `tool_dispatch` não alcança runtime | in-progress |
| [#6678](https://github.com/zeroclaw-labs/zeroclaw/issues/6678) | High | provider:anthropic | Skill tools rejeitadas pela API Anthropic (violação de regex `^[a-zA-Z0-9_-]{1,128}$`) | in-progress |
| [#5903](https://github.com/zeroclaw-labs/zeroclaw/issues/5903) | High | tool:mcp | Processos filhos MCP stdio acumulam com `heartbeat.enabled=true` (1 órfão por tick) | accepted |
| [#6037](https://github.com/zeroclaw-labs/zeroclaw/issues/6037) | High | cron | Cron jobs podem ser lançados repetidamente enquanto ainda rodam | in-progress |
| [#7523](https://github.com/zeroclaw-labs/zeroclaw/issues/7523) | S1 | web dashboard | Dashboard não disponível após install via brew (macOS) | Updated 2026-06-12 |

### Bugs Medium/Low — Em Progresso

| Issue | Severidade | Componente | Descrição |
|-------|------------|------------|-----------|
| [#6548](https://github.com/zeroclaw-labs/zeroclaw/issues/6548) | S3 | channel:core | Replies de comandos bypassam Fluent localization (strings em inglês) |
| [#6227](https://github.com/zeroclaw-labs/zeroclaw/issues/6227) | S2 | runtime/daemon | `status` hardcoda `zeroclaw.service` — instâncias nomeadas reportam "stopped" |

**Alerta de Estabilidade:** 11 bugs P1/S0-S1 em progresso é um volume elevado, indicando que a equipe está em modo de estabilização intensiva pós-v0.8.0.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em Progresso/Accepted

| Issue | Área | Feature | Prioridade | Status |
|-------|------|---------|------------|--------|
| [#6312](https://github.com/zeroclaw-labs/zeroclaw/issues/6312) | gateway | Routing de webhook por alias path para multi-instance | P2 | in-progress |
| [#6391](https://github.com/zeroclaw-labs/zeroclaw/issues/6391) | daemon | Heartbeat tracking real (Online/Stale/Offline) | P2 | **blocked** |
| [#6390](https://github.com/zeroclaw-labs/zeroclaw/issues/6390) | daemon | CLI `zeroclaw node add <url>` para registrar daemon remoto | P2 | blocked |
| [#6346](https://github.com/zeroclaw-labs/zeroclaw/issues/6346) | daemon/gateway | CLI + dashboard de health para nodes | P2 | accepted |
| [#6365](https://github.com/zeroclaw-labs/zeroclaw/issues/6365) | gateway | Botão "Update ZeroClaw" no dashboard via gateway API | P2 | in-progress |
| [#6443](https://github.com/zeroclaw-labs/zeroclaw/issues/6443) | channel | Adicionar canal Twitch (thin IRC adapter) | P2 | accepted |
| [#5618](https://github.com/zeroclaw-labs/zeroclaw/issues/5618) | runtime | Phase 2 D1: Substituir DaemonSubsystems callbacks por Registry API tipada | P2 | accepted |
| [#6914](https://github.com/zeroclaw-labs/zeroclaw/issues/6914) | agent/tool | Enforçar `allowed_tools/denied_tools` no loop principal | P1 | blocked |
| [#6642](https://github.com/zeroclaw-labs/zeroclaw/issues/6642) | observability | Capturar prompt/completion em spans via `gen_ai.input/output.messages` | P2 | in-progress |

### Sinais de Roadmap

1. **Multi-node/fleet management:** Issues [#6391](#6391), [#6390](#6390), [#6346](#6346) formam um cluster de features para gestão distribuída de daemons — provavelmente serão consolidados em milestone futuro
2. **Consolidação de arquitetura de agent:** PR #7540 implementa RFC #7415, indicando prioridade em unificar motores de turn
3. **Novos providers:** NEAR AI Cloud (PR #6842) demonstra expansão de suporte a provedores

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Cenário | Issue | Feedback do Usuário |
|---------|-------|---------------------|
| **OOM em WSL2** | [#5542](https://github.com/zeroclaw-labs/zeroclaw/issues/5542) | Usuário reporta crashes consecutivos com `Out of memory: Killed process`; impacto direto em produtividade |
| **Dashboard indisponível** | [#7523](https://github.com/zeroclaw-labs/zeroclaw/issues/7523) | Install via Homebrew no macOS resulta em dashboard inacessível; reclamação imediata pós-upgrade v0.8.0 |
| **WhatsApp silenciosamente dropa mensagens** | [#6350](https://github.com/zeroclaw-labs/zeroclaw/issues/6350) | Usuários reportam mensagens perdidas sem erro, especialmente com `allowed-numbers` configurado |
| **Shell tool não funciona em full autonomy** | [#6434](https://github.com/zeroclaw-labs/zeroclaw/issues/6434) | Usuário com configuração totalmente permissiva não consegue executar comandos shell; workflow bloqueado |
| **Cron executa múltiplas vezes** | [#6037](https://github.com/zeroclaw-labs/zeroclaw/issues/6037) | Job diário executou 20x em burst; cenário crítico para automação de confiança |

### Cenários de Uso Identificados

- **Multi-agente em produção:** Configuração com workspaces isolados, providers diferentes por agente
- **Integração Twitch:** Usuários querem rodar agentes em canais Twitch (derivado do issue de IRC)
- **Gestão de fleet:** Operadores desejam registrar e monitorar múltiplos daemons remotos via dashboard

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Stale

| Issue | Tempo | Área | Motivo da Atenção |
|-------|-------|------|-------------------|
| [#5903](https://github.com/zeroclaw-labs/zeroclaw/issues/5903) | ~2 meses | tool:mcp | Leak de processos MCP com heartbeat — bug de estabilidade séria, apenas 1 comentário |
| [#6173](https://github.com/zeroclaw-labs/zeroclaw/issues/6173) | ~1.5 meses | runtime/tool | `model_switch` não persiste entre turns; 1 comentário, baixa atenção |
| [#6224](https://github.com/zeroclaw-labs/zeroclaw/issues/6224) | ~1.5 meses | channel:whatsapp | Cron dispatch para WhatsApp falhando; 1 comentário |
| [#6645](https://github.com/zeroclaw-labs/zeroclaw/issues/6645) | ~1 mês | skills/tool | `SkillImprover` não suporta `manifest.toml`; apenas 2 comentários |
| [#6683](https://github.com/zeroclaw-labs/zeroclaw/issues/6683) | ~1 mês | skills | Cooldown de patches ignorado — risco de patches ilimitados; baixa atenção |

### Issues Blocked com Alto Impacto

| Issue | Blocker | Impacto |
|-------|---------|---------|
| [#6391](https://github.com/zeroclaw-labs/zeroclaw/issues/6391) | Desconhecido | Dashboard de nodes sem liveness real |
| [#6390](https://github.com/zeroclaw-labs/zeroclaw/issues/6390) | Depende de #6391 | CLI de registro de nodes remoto |
| [#6914](https://github.com/zeroclaw-labs/zeroclaw/issues/6914) | Desconhecido | `allowed_tools/denied_tools` não aplicado no loop principal — risco de segurança |

---

## Métricas de Saúde do Projeto

| Indicador | Valor | Avaliação |
|-----------|-------|-----------|
| Issues ativas (24h) | 47 | 🔴 Alta carga de bugs |
| PRs abertos | 44 | 🟡 Pipeline ativo |
| Bugs P1 em progresso | 11 | 🔴 Prioridade de estabilização |
| Features P2 bloqueadas | 3 | 🟡 Recursos estratégicos pendentes |
| Release v0.8.0 | Released | 🟢 Marco atingido |

**Veredicto:** O projeto está em **fase de estabilização pós-release**. A v0.8.0 introduziu mudanças arquiteturais significativas que estão gerando bugs de integração. A comunidade está ativa, mas o volume de bugs P1 requer atenção imediata da equipe de mantenedores.

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*