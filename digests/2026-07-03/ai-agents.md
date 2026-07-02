# Resumo diário do ecossistema de agentes de IA 2026-07-03

> Issues: 0 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-07-02 20:59 UTC

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

**Data de referência:** 2026-07-03  
**Projetos analisados:** NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw, ZeroClaw

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **alta atividade consolidada** em 6 dos 7 projetos monitorados, com mais de 300 PRs e 250 issues processados nas últimas 24 horas. O panorama é marcado por duas correntes distintas: projetos em **fase de consolidação** (Hermes Agent, PicoClaw) priorizam estabilidade, segurança e compatibilidade multiplataforma, enquanto projetos em **transição arquitetural** (IronClaw, CoPaw, ZeroClaw) investem em novas stacks (Reborn, Runtime 2.0) com mudanças estruturais. NanoBot se destaca pela intensidade de correções de segurança após uma auditoria formal. A comunidade demonstra demandas convergentes em OAuth, MCP, memory durável e extensibilidade via plugins — sinais claros de maturação do segmento para casos de uso enterprise e multi-tenant.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | Releases (7d) | Bugs Críticos | Saúde |
|---------|:---:|:---:|:---:|:---:|:---:|
| **ZeroClaw** | 35 | 50 | 0 (v0.8.1) | 3 S1 | 🟡 Alta atividade + críticos |
| **NanoBot** | 51 | 64 | 0 | 5+ security | 🟢 Muito ativo |
| **Hermes Agent** | 50 | 50 | 0 (v0.18.0) | 8 P1/P2 | 🟡 Estável + Windows |
| **CoPaw** | 25 | 50 | v2.0.0-beta.2 | 1 P1 (leak) | 🟡 Beta + produção |
| **IronClaw** | 21 | 50 | 0 (v0.29.1) | 1 P1 | 🟡 Reborn em开发 |
| **PicoClaw** | 2 | 23 | nightly | 2 | 🟢 Manutenção ativa |
| **NullClaw** | 0 | 0 | N/A | N/A | 🟥 Inativo |

**Observação:** NanoBot lidera em volume absoluto de atividade (64 PRs atualizados), enquanto ZeroClaw apresenta a maior diversidade de temas quentes (14+ comentários em issue única). CoPaw é o único projeto com release formal recente (beta).

---

## 3. Posicionamento do Projeto Principal (NanoBot)

### Vantagens Competitivas

| Dimensão | NanoBot | Comparação |
|----------|---------|------------|
| **Volume de correções** | 28 PRs fechados em 24h | Lidera em throughput de manutenção |
| **Auditoria de segurança** | 13 bugs resolvidos em batch (#4648) | Diferencial de confiança |
| **Integrações** | Mattermost, Anthropic OAuth, OpenCode | Expansão ativa de canais |
| **Liderança técnica** | hamb1y como autor principal | Consistência de visão |

### Diferenças Técnicas

- **Segurança first:** Único projeto com batch formal de security fixes — indica processo de auditoria estruturado
- **Extensibilidade:** Plugin system (#2231, 77+ dias) e subagent overrides (#4231) em roadmap
- **Provider flexibility:** Suporte a Sonnet 5, OpenCode Zen, Copilot — diversidade de backends

### Limitações Identificadas

- 4 issues antigas sem resposta (>30 dias) no backlog
- Nenhuma release em 7+ dias — consolidação pré-release pode sinalizar preparação para breaking changes

---

## 4. Focos Técnicos Compartilhados

### 4.1 Segurança e Autenticação

Todos os projetos demonstram foco intenso em hardening:

| Projeto | Iniciativa | Status |
|---------|------------|--------|
| **NanoBot** | Batch de 13 security fixes | ✅ Merged (#4648) |
| **CoPaw** | Rate limiting multidimensional, sanitização de secrets | 🟡 PRs abertos (#5738, #5740, #5745) |
| **ZeroClaw** | Path traversal em WeChat, per-agent env vars | 🟡 Fixes e RFC |
| **Hermes Agent** | Billing bug em reasoning_effort | ✅ Corrigido (#57330) |
| **PicoClaw** | Exec deny patterns | ✅ Merged (#3161) |

**Síntese:** A comunidade está respondendo a ameaças concretas (auth bypass, SSRF, secret leakage) com correções rápidas. A demanda por **OAuth não-interativo** (ZeroClaw, Hermes Agent, NanoBot) indica tendência de eliminar API keys manuais.

### 4.2 Compatibilidade Multiplataforma (Windows)

| Projeto | Problemas Reportados |
|---------|---------------------|
| **ZeroClaw** | 74 testes falhando (paths, CP 936 encoding) |
| **Hermes Agent** | 7 bugs Windows (MSYS paths, cron duplicado, Tirith) |
| **NanoBot** | cmd.exe vs PowerShell inconsistente |
| **PicoClaw** | Windows path handling em sandbox fs |
| **CoPaw** | Memory leak + streaming lag no Windows |

**Síntese:** Windows permanece como a plataforma com maior Technical Debt. A comunidade开源 demonstra que o desenvolvimento é predominantemente Linux-first.

### 4.3 Extensibilidade e Plugins

| Projeto | Feature | Estado |
|---------|---------|--------|
| **NanoBot** | Plugin system (#2231) | 77+ dias aberto, alta demanda |
| **ZeroClaw** | WASM plugin authoring guide | PR #8621 aberto |
| **IronClaw** | WASM tool install (ZIP + credenciais) | 3 PRs em paralelo |
| **Hermes Agent** | MCP OAuth headless | PR #57344 |

**Síntese:** A extensibilidade via plugins e MCP está convergindo como necessidade universal. ZeroClaw e IronClaw lideram com arquiteturas formalizadas.

---

## 5. Análise de Diferenciação

### 5.1 Por Público-Alvo

| Projeto | Posicionamento | Público |
|---------|----------------|---------|
| **ZeroClaw** | Enterprise multi-agent | Equipes DevOps, SOCs, automação corporativa |
| **IronClaw** | Privacidade e multi-tenant | Organizações com requisitos de isolamento |
| **CoPaw** | Desenvolvedores e early adopters | Quem quer influencia direção via beta |
| **NanoBot** | Power users + integrações | Usuários avançados com necessidades de customização |
| **Hermes Agent** | Desktop-first + MoA | Usuários desktop com workflows complexos |
| **PicoClaw** | Manutenção leve | Ambientes minimalistas ou embarcados |

### 5.2 Por Arquitetura

| Abordagem | Projetos | Implicação |
|-----------|----------|------------|
| **Runtime 2.0 / Reborn** | CoPaw, IronClaw | Breaking changes, oportunidade de redesign |
| **Stack estável + features** | NanoBot, Hermes Agent | Menor risco, menor inovação |
| **Modular via MCP** | ZeroClaw, IronClaw | Integração via protocolo, não código |
| **Canal-first** | PicoClaw, NanoBot | Foco em conectividade (Matrix, Mattermost, LINE) |

### 5.3 Por Estágio de Maturidade

```
Maturidade crescente →
CoPaw (v2.0.0-beta)
IronClaw (Reborn em transição)
ZeroClaw (v0.8.x, épicos estruturais)
Hermes Agent (v0.18.x, consolidação)
NanoBot (release freeze)
PicoClaw (nightly ativo, bem mantido)
```

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Iteração Rápida

| Projeto | Indicador | Interpretação |
|---------|-----------|---------------|
| **NanoBot** | 64 PRs em 24h | Mantenedor hiperativo (hamb1y) + comunidade |
| **CoPaw** | v2.0.0-beta.2 em dias | Ciclo de release acelerado para beta |
| **ZeroClaw** | 50 PRs + RFCs em paralelo |many contribuidores |
| **Hermes Agent** | 19 PRs merged hoje | Atividade sustentada |

### 6.2 Consolidação de Qualidade

| Projeto | Indicador | Interpretação |
|---------|-----------|---------------|
| **PicoClaw** | 23 PRs de dependências | Hygiene de manutenção excelente |
| **Hermes Agent** | 8 P1/P2 rastreados | Processo de triagem estruturado |
| **IronClaw** | Tier-2 coverage em Reborn | Investimento em testes sistemático |
| **NanoBot** | Auditoria formal de segurança | Maturidade de processo |

### 6.3 Sinais de Alerta

| Projeto | Risco | Detalhe |
|---------|-------|---------|
| **CoPaw** | Vazamento de memória produção | P1 aberto — v1.1.12.post2 |
| **ZeroClaw** | 74 testes Windows | Compatibilidade em dúvida |
| **NullClaw** | Inatividade total | Projeto referência inoperante |
| **IronClaw** | CI noturno E2E falhando | ~5 semanas de instabilidade |

---

## 7. Sinais de Tendência

### 7.1 Do Feedback das Comunidades

| Tendência | Evidência | Projeto |
|-----------|-----------|---------|
| **OAuth como padrão de autenticação** | 3+ projetos implementando OAuth (NanoBot #4604, Hermes #57344, ZeroClaw) | Universal |
| **Memory durável** | Epic A (#8570), ReMe reranker (#5692), Honcho config (#51020) | ZeroClaw, CoPaw, Hermes |
| **Multi-model por contexto** | Override por conversa (#4253), per-slot reasoning_effort (#57043) | NanoBot, Hermes |
| **Privacidade first** | Alternar modelos locais/remotos (#4253), per-agent env vars (#8226) | NanoBot, ZeroClaw |
| **Headless deployments** | MCP OAuth (#57344), CLI headless (#5737), cronjobs | Hermes, CoPaw |
| **MCP como protocolo de extensibilidade** | MCP tools visíveis em gateway mas não TUI (#8193) | ZeroClaw |

### 7.2 Do Volume de Issues

| Tema | Volume | Tendência |
|------|--------|-----------|
| **Segurança** | 5+ fixes em batch + 10+ issues | ↑ Estável — prioridade contínua |
| **Windows** | 7+ bugs reportados hoje | → Persistente — dívida técnica crônica |
| **Integração de canais** | Mattermost, DeltaChat, Simplex, LINE | ↑ Crescendo — "conectar tudo" |
| **Plugin/Extensibilidade** | 4+ projetos com demanda explícita | ↑ Emergente — feature parity com Copilot CLI |

### 7.3 Implicações para Mercado

1. **OAuth substituirá API keys** como método primário de autenticação em agents — impacto direto em onboarding e enterprise adoption
2. **Memory layer está sendo refatorado** em múltiplos projetos simultaneamente — sinal de maturidade onde memória durável se torna requisito
3. **MCP emerge como protocolo de facto** para extensibilidade — similar à posição que LSP alcançou em editores
4. **Windows é o calcanhar de Aquiles** do ecossistema — representa barreira para adoção corporativa
5. **Beta programs estão aquecidos** (CoPaw v2, IronClaw Reborn) — comunidade active buscando influenciar o produto

---

## Conclusão

O ecossistema está **saudável e em expansão**, com projetos dividindo-se entre consolidação de estabilidade (Hermes, PicoClaw) e inovação arquitetural (CoPaw, IronClaw, ZeroClaw). NanoBot lidera em volume de atividade e maturidade de segurança. A convergência em OAuth, MCP e memory durável sugere que o mercado está se estabilizando em torno de padrões comuns, enquanto a diversidade de canais (Mattermost, DeltaChat, WeChat, LINE) indica estratégia de "dispersão" para capturar usuários onde eles já estão. Windows permanece como a maior lacuna técnica do ecossistema.

---

*Relatório gerado com base em dados públicos do GitHub de 2026-07-03. Métricas sujeitas a variações de coleta.*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>


# Relatório do Projeto NanoBot — 2026-07-03

## 1. Panorama do Dia

O projeto NanoBot apresenta **altíssima atividade** nas últimas 24 horas, com 51 issues e 64 PRs atualizados. A equipe de desenvolvimento (liderada por hamb1y) está concentrada em uma grande leva de correções de segurança e bugs validados, conforme evidenciado pelo PR em lote #4648 que resolve 13 issues previamente identificados. Não há lançamentos formais hoje, indicando que o trabalho está em fase de consolidação pré-release. A comunidade demonstra interesse crescente em integrações (Mattermost, Anthropic OAuth) e melhorias de extensibilidade (plugin system, subagent overrides).

---

## 2. Lançamentos

**Nenhum novo release hoje.**

O projeto não publicou versões nas últimas 24h. O foco atual é na estabilização da branch `main` com correções críticas.

---

## 3. Progresso do Projeto

### PRs Merged/Closed Hoje

| # | PR | Autor | Impacto |
|---|-----|-------|---------|
| [#4648](https://github.com/HKUDS/nanobot/pull/4648) | Fix validated issue batch | hamb1y | Resolve 13 bugs validados incluindo security fixes |
| [#4685](https://github.com/HKUDS/nanobot/pull/4685) | fix: omit temperature for sonnet 5 | hamb1y | Compatibilidade com Sonnet 5 da Anthropic |
| [#4686](https://github.com/HKUDS/nanobot/pull/4686) | feat: support canonical opencode provider | hamb1y | Suporte ao OpenCode Zen provider |
| [#4684](https://github.com/HKUDS/nanobot/pull/4684) | fix(copilot): guard token refresh with asyncio.Lock | axelray-dev | Corrige race condition no Copilot provider |
| [#4669](https://github.com/HKUDS/nanobot/pull/4669) | fix: require api key for serve | hamb1y | **Security Fix** — requer autenticação no servidor API |
| [#4668](https://github.com/HKUDS/nanobot/pull/4668) | fix: enforce message outbound policy | hamb1y | **Security Fix** — autorização para envio de mensagens |
| [#4667](https://github.com/HKUDS/nanobot/pull/4667) | fix: protect user skills from dream writes | hamb1y | **Security Fix** — proteção de skills do usuário |
| [#4671](https://github.com/HKUDS/nanobot/pull/4671) | fix: pin validated dns for ssrf checks | hamb1y | Proteção SSRF reforçada |
| [#4666](https://github.com/HKUDS/nanobot/pull/4666) | fix(mcp): contain malformed tool results | Yuxin-Lou | Tratamento robusto de resultados MCP |
| [#4670](https://github.com/HKUDS/nanobot/pull/4670) | refactor: make retention planning explicit | hamb1y | Melhora API de retenção de sessão |
| [#4665](https://github.com/HKUDS/nanobot/pull/4665) | fix: preserve pending message runtime context | hamb1y | Preserva contexto em mensagens pendentes |
| [#4664](https://github.com/HKUDS/nanobot/pull/4664) | fix: protect dream history during compaction | hamb1y | Protege histórico do Dream durante compactação |
| [#4663](https://github.com/HKUDS/nanobot/pull/4663) | fix: quarantine invalid tool results | hamb1y | Sanitização de IDs de tool results |
| [#4662](https://github.com/HKUDS/nanobot/pull/4662) | fix: normalize text tool call markup | hamb1y | Parsing de tool calls em texto plano |
| [#4661](https://github.com/HKUDS/nanobot/pull/4661) | fix: separate file edit progress ids | hamb1y | Refatoração de IDs no WebUI |
| [#4659](https://github.com/HKUDS/nanobot/pull/4659) | fix: isolate matrix stream buffers | hamb1y | Isolamento de streams no Matrix |
| [#4658](https://github.com/HKUDS/nanobot/pull/4658) | fix: resolve builtin skill reads | hamb1y | Resolução de skills bundle |
| [#4673](https://github.com/HKUDS/nanobot/pull/4673) | fix(dream): ground memory audit in git diff | goodtiding5 | Auditoria de memória alinhada ao diff real |

### Destaques de Progresso

- **Batch de Segurança (#4648)**: O PR #4648 fechou um ciclo importante ao resolver issues de segurança validadas (#4078, #4076, #4075, #4072, #4068, #4064, #4061, #4058, #4055, #4604, #4378, #4544, #4136).
- **Mattermost Channel (#4459)**: goodtiding5 está desenvolvendo suporte nativo ao Mattermost via WebSocket + REST API.
- **Anthropic OAuth (#4632)**: Permite uso sem chave API via tokens Claude Code.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários)

| # | Título | Comentários | Tema Principal |
|---|--------|-------------|---------------|
| [#4604](https://github.com/HKUDS/nanobot/issues/4604) | Anthropic OAuth | 5 | Integração/Autenticação |
| [#4419](https://github.com/HKUDS/nanobot/issues/4419) | Automatic reasoning effort escalation | 5 | Feature Request |
| [#4253](https://github.com/HKUDS/nanobot/issues/4253) | Support overriding model per conversation | 5 | Flexibilidade de uso |
| [#2231](https://github.com/HKUDS/nanobot/issues/2231) | Plugin system for agent extensibility | 5 | Extensibilidade |
| [#4657](https://github.com/HKUDS/nanobot/issues/4657) | Nanobot Radar Finding (13 bugs) | 4 | Bug tracking |

### Análise das Demandas

**Extensibilidade e Customização:**
- Issue [#2231](https://github.com/HKUDS/nanobot/issues/2231) solicita sistema de plugins similar ao Copilot CLI/Claude Code — demanda recorrente para usuários avançados.
- Issue [#4253](https://github.com/HKUDS/nanobot/issues/4253) pede override de modelo por conversa (cenário: alternar entre OpenRouter e LlamaCPP local).

**Controle de Reasoning:**
- Issue [#4419](https://github.com/HKUDS/nanobot/issues/4419) requer escalonamento automático de esforço de raciocínio, indicando adoção crescente de modelos reasoning.

**Integrações:**
- Issue [#4010](https://github.com/HKUDS/nanobot/issues/4010) solicita text-to-speech/voice output (2 👍).
- Issue [#3436](https://github.com/HKUDS/nanobot/issues/3436) propõe usar OpenCode/Codex como backend alternativo.

---

## 5. Bugs e Estabilidade

### Issues de Bug Abertas (Prioridade Alta)

| # | Severidade | Título | Status |
|---|-----------|--------|--------|
| [#4078](https://github.com/HKUDS/nanobot/issues/4078) | **🔴 Security** | OpenAI-compatible API aceita requisições não autenticadas | ✅ Fixo em #4669 |
| [#4076](https://github.com/HKUDS/nanobot/issues/4076) | **🔴 Security** | Message tool sem autorização outbound | ✅ Fixo em #4668 |
| [#4075](https://github.com/HKUDS/nanobot/issues/4075) | **🔴 Security** | Dream pode sobrescrever skills do usuário | ✅ Fixo em #4667 |
| [#4072](https://github.com/HKUDS/nanobot/issues/4072) | **🔴 Security** | ExecTool bypass via symlinks | ✅ Fixo em batch |
| [#4544](https://github.com/HKUDS/nanobot/issues/4544) | 🟠 Alta | Windows: cmd.exe vs PowerShell inconsistente | Em análise |
| [#4082](https://github.com/HKUDS/nanobot/issues/4082) | 🟠 Alta | Cron jobs reutilizam session context fixo | Aberto |
| [#4637](https://github.com/HKUDS/nanobot/issues/4637) | 🟡 Média | Telegram long message splits não rendem | Aberto |
| [#4067](https://github.com/HKUDS/nanobot/issues/4067) | 🟡 Média | Config inválido falha silenciosamente | Aberto |

### Padrões Identificados

- **Segurança**: 5+ issues de security validadas e resolvidas em batch — indicando auditoria formal em curso.
- **Windows**: Inconsistência shell (#4544) mostra technical debt em cross-platform.
- **Scheduling/Cron**: Session isolation (#4082) pode causar comportamentos inesperados em jobs agendados.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| # | Feature | Prioridade Indicada | Notas |
|---|---------|---------------------|-------|
| [#4604](https://github.com/HKUDS/nanobot/issues/4604) | Anthropic OAuth | Alta | Usuários querem usar sem API key |
| [#4419](https://github.com/HKUDS/nanobot/issues/4419) | Automatic reasoning effort escalation | Alta | Suporte a níveis de reasoning |
| [#2231](https://github.com/HKUDS/nanobot/issues/2231) | Plugin system | Alta | Extensibilidade via plugins |
| [#4010](https://github.com/HKUDS/nanobot/issues/4010) | Text-to-speech | Média | Voice output em canais nativos |
| [#4378](https://github.com/HKUDS/nanobot/issues/4378) | Cron level model/preset | Média | Modelos diferentes por cron |
| [#4231](https://github.com/HKUDS/nanobot/issues/4231) | Model parameter para spawn tool | Média | Subagent model override |
| [#4612](https://github.com/HKUDS/nanobot/issues/4612) | Support OpenAI response API | Média | Compatibilidade expandida |

### Sinais de Roadmap

1. **OAuth Providers**: Anthropic OAuth (#4632) em PR, indicando tendência de simplificar autenticação.
2. **Multi-Channel**: Mattermost (#4459) em desenvolvimento — expansão de canais.
3. **Model Flexibility**: Suporte a modelos por conversation (#4253) e subagent (#4231).
4. **Extensibilidade**: Sistema de plugins (#2231) é pedido recorrente, possivelmente para próximas versões.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Dor | Issue | Cenário |
|-----|-------|---------|
| Autenticação complexa | [#4604](https://github.com/HKUDS/nanobot/issues/4604) | Usuários não querem criar API keys manuais |
| Troca de modelo por contexto | [#4253](https://github.com/HKUDS/nanobot/issues/4253) | Alternar entre modelo rápido (OpenRouter) e local (LlamaCPP) por privacidade/velocidade |
| Sessões cron compartilhadas | [#4082](https://github.com/HKUDS/nanobot/issues/4082) | Jobs agendados acumulam contexto indesejado |
| Falta de voice output | [#4010](https://github.com/HKUDS/nanobot/issues/4010) | Canais com suporte nativo a voz ficam subutilizados |
| Windows incompatibilidades | [#4544](https://github.com/HKUDS/nanobot/issues/4544) | Comandos cross-platform falham |

### Cenários de Uso Emergentes

- **Privacidade first**: Usuários querem alternar modelos locais/remotos.
- **Agentes encadeados**: Spawn tool com modelos específicos (#4231).
- **Plataformas corporativas**: Mattermost (#4459) indica demanda enterprise.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta há >14 dias

| # | Título | Criado | Dias | Prioridade |
|---|--------|--------|------|------------|
| [#2231](https://github.com/HKUDS/nanobot/issues/2231) | Plugin system | 2026-03-18 | 77+ | Alta |
| [#1899](https://github.com/HKUDS/nanobot/issues/1899) | Heartbeat session isolation | 2026-03-11 | 84+ | Média |
| [#3096](https://github.com/HKUDS/nanobot/issues/3096) | Tool scheduling parallelism | 2026-04-13 | 51+ | Média |
| [#3436](https://github.com/HKUDS/nanobot/issues/3436) | External agent integration | 2026-04-25 | 39+ | Baixa |

### Recomendações

1. **Plugin System (#2231)**: Demanda antiga com 5+ comentários — considerar roadmap oficial.
2. **Tool Scheduling (#3096)**: Arquitetura fundamental para performance — avaliação de design necessária.
3. **Heartbeat Session (#1899)**: Issue em chinês sem resposta — pode indicar comunidade internacional não atendida.

---

## Métricas de Saúde do Projeto

| Indicador | Valor | Status |
|-----------|-------|--------|
| Issues ativas (24h) | 48 | 🟢 Alta |
| PRs abertos | 36 | 🟢 Ativo |
| PRs fechados (24h) | 28 | 🟢 Muito ativo |
| Security fixes | 5+ | 🟡 Em remediação |
| Releases (7d) | 0 | 🟡 Silêncio |
| Issues antigos (>30d) | 4+ | 🟡 Backlog |

---

*Relatório gerado automaticamente com base em dados do GitHub de 2026-07-03. Para atualizações em tempo real, consulte [github.com/HKUDS/nanobot](https://github.com/HKUDS/nanobot).*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-07-03

---

## 1. Panorama do Dia

O projeto Hermes Agent registrou **alta atividade** em 03 de julho de 2026, com 50 issues e 50 PRs atualizados nas últimas 24 horas. Não houve lançamentos de novas versões, mas um volume significativo de PRs foi merged/fechado (19 PRs), indicando progresso consistente na correção de bugs. A comunidade está particularmente engajada em questões de estabilidade — especialmente bugs críticos relacionados a desconexões WebSocket durante operações longas, problemas com plataforma Windows e falhas em integrações de terceiros (iMessage, QQBot). O dia foi marcado por correções de bugs de alta prioridade e por discussões acaloradas sobre a arquitetura de memory backends configuráveis.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24 horas.**

O projeto não emitiu novas versões desde o último relatório. A versão mais recente mencionada nos dados é a **v0.18.0 (2026.7.1)**, referenciada na issue #57056 sobre comportamento de auto-resume em webhooks.

---

## 3. Progresso do Projeto

### PRs Merged/Fechadas Hoje (19 total)

| # | PR | Autor | Descrição |
|---|-----|-------|-----------|
| [#57340](https://github.com/NousResearch/hermes-agent/pull/57340) | `fix(usage): capture reasoning_tokens` | teknium1 | **Correção crítica de accounting** — captura `reasoning_tokens` de `completion_tokens_details` em chat_completions, resolvendo invisibilidade de hidden thinking em sessões, traces MoA e avaliação de tokens. |
| [#57335](https://github.com/NousResearch/hermes-agent/pull/57335) | `fix(tui_gateway): route setup.runtime_check` | OutThisLife | Consolida dois fixes para timeout de "Settings failed to load" no Desktop, migrando `setup.runtime_check` e `setup.status` para o pool RPC. |
| [#57088](https://github.com/NousResearch/hermes-agent/pull/57088) | `fix(tui): route runtime check off read loop` | izumi0uu | Move readiness probe para `_LONG_HANDLERS` RPC pool, evitando bloqueios no websocket reader thread. |
| [#56084](https://github.com/NousResearch/hermes-agent/pull/56084) | `fix(tui_gateway): route setup.runtime_check` | yingliang-zhang | Mesma correção que #57088, mas no lado gateway — ambos agora supersedados por #57335. |
| [#57329](https://github.com/NousResearch/hermes-agent/pull/57329) | `fix(desktop): converge profile deletion` | OutThisLife | Corrige bug de deleção de perfil que causava respawn instantâneo — consolida #52301 e #49335. |
| [#57330](https://github.com/NousResearch/hermes-agent/pull/57330) | `fix(desktop,tui-gateway,zai): stop thinking-off` | OutThisLife | **Fix de billing** — corrige 4 bugs compostos que faziam `reasoning_effort: false` reverter para medium, causando consumo excessivo de créditos (~200% em 4 dias). |
| [#56700](https://github.com/NousResearch/hermes-agent/pull/56700) | `fix(terminal): MSYS path mangling` | Esc1200 | Resolve falha de comandos nativos Windows (tasklist, schtasks, wmic) após Git Bash/MSYS reescrever paths com `/c`. |

### PRs Abertas de Destaque

| # | PR | Autor | Descrição |
|---|-----|-------|-----------|
| [#57344](https://github.com/NousResearch/hermes-agent/pull/57344) | `feat(mcp): headless client_credentials OAuth` | slvnlrt | Adiciona autenticação OAuth 2.0 não-interativa para servidores MCP via HTTP, eliminando necessidade de browser para deployments headless. |
| [#57343](https://github.com/NousResearch/hermes-agent/pull/57343) | `fix(bedrock): guard client cache dicts` | sprmn24 | Corrige race condition em cache de clientes Bedrock com `threading.Lock`. |
| [#57342](https://github.com/NousResearch/hermes-agent/pull/57342) | `fix(cron): thread per-run prompt` | liuhao1024 | Permite que `prompt` em `cronjob(action="run")` seja passado corretamente através da cadeia de execução. |
| [#51020](https://github.com/NousResearch/hermes-agent/pull/51020) | `feat(memory): declarative Honcho config panel` | erosika | Adiciona painel de configuração visual para memory providers no desktop app. |

---

## 4. Temas Quentes da Comunidade

### Issue com Maior Engajamento (#47349) — **11 comentários**

[**Feature: Configurable Memory Backends** (TechFlipsi)](https://github.com/NousResearch/hermes-agent/issues/47349)

> O sistema de memória atual é hardcoded com dois arquivos fixos (`MEMORY.md` e `USER.md`) em `~/.hermes/memories/`. A demanda é por backends configuráveis — permitindo desabilitar `memory.md` e usar apenas `honcho/fact_store`.

**Análise:** Esta issue reflete uma necessidade crescente de flexibilidade na arquitetura de memória do agente. A solução proposta envolve separar o snapshot frozen injetado no system prompt de um sistema de memória persistente, permitindo que ferramentas como Honcho gerenciem fatos de forma dinâmica. O debate técnico gira em torno de manter backward compatibility vs. implementar uma arquitetura mais modular.

### Issue #53817 — Desktop Model Picker (6 comentários)

[**Bug: Desktop não mostra presets MoA/BeastMode de gateway Linux remoto**](https://github.com/NousResearch/hermes-agent/issues/53817)

**Análise:** Usuários com Desktop Windows conectados a gateway Linux remoto não conseguem acessar presets MoA (como BeastMode), mesmo quando o Telegram funciona corretamente. Este é um problema de compatibilidade desktop-gateway que afeta fluxos de trabalho de power users.

### Issue #5200 — Documentação vs. Código (5 comentários)

[**Context Files: comportamento documentado não corresponde ao código** (liuyi2711)](https://github.com/NousResearch/hermes-agent/issues/5200)

> A documentação diz que `AGENTS.md` faz recursive walk e combina subdiretórios, mas o código em `prompt_builder.py` não implementa essa funcionalidade.

**Análise:** Esta issue (com 5 👍) destaca uma dívida técnica de documentação. A discrepância entre docs e implementação pode causar confusão para novos contribuidores e usuários avançados.

---

## 5. Bugs e Estabilidade

### 🔴 P1 — Críticos

| # | Bug | Componente | Descrição |
|---|-----|------------|-----------|
| [#53773](https://github.com/NousResearch/hermes-agent/issues/53773) | WebSocket disconnects durante delegate_task longo | gateway, tui | TUI WebSocket fica unresponsive por minutos durante operações com latência 30-150s. Client Electron espera ~9min antes de desistir. |

### 🟠 P2 — Altos

| # | Bug | Componente | Notas |
|---|-----|------------|-------|
| [#57056](https://github.com/NousResearch/hermes-agent/issues/57056) | Auto-resume em webhook reconhece restauração em vez de completar turn | gateway, webhook | Afeta plataformas não-interativas. |
| [#57191](https://github.com/NousResearch/hermes-agent/issues/57191) | Cron jobs entregam mensagens duplicadas no Windows | gateway, cron, desktop | Gateway e desktop servem rodam ambos tickers. |
| [#57315](https://github.com/NousResearch/hermes-agent/issues/57315) | Blank Slate não carrega tools após habilitação | cli, tools | Apenas cronjob funciona após fresh install. |
| [#57237](https://github.com/NousResearch/hermes-agent/issues/57237) | UI desktop não atualiza após subagentes retornarem | desktop, delegate | UI fica em "Processando" mesmo após conclusão. |
| [#57358](https://github.com/NousResearch/hermes-agent/issues/7142) | TypeError em cronjob com repeat='once' | cron | String-to-int coercion missing. |
| [#55892](https://github.com/NousResearch/hermes-agent/issues/5254) | Tool calls repetindo com LM-Studio | agent, ollama | Fragmentação de tool calls. |
| [#57298](https://github.com/NousResearch/hermes-agent/issues/57298) | `_is_transient_network_error` crash em TracebackException | gateway | Missing `__cause__` attribute. |

### 🟡 P3 — Médios

| # | Bug | Componente | Notas |
|---|-----|------------|-------|
| [#38786](https://github.com/NousResearch/hermes-agent/issues/38786) | Desktop mostra imagens geradas localmente como [Image blocked] | vision, desktop | Apenas paths Windows. |
| [#55416](https://github.com/NousResearch/hermes-agent/issues/55416) | Photon iMessage: RST_STREAM code 2 (Internal error) | plugins, imessage | Sidecar alive mas stream dead. |
| [#56835](https://github.com/NousResearch/hermes-agent/issues/56835) | ERR_NETWORK_IO_SUSPENDED após resume de sleep | desktop | Regression de rede. |
| [#57282](https://github.com/NousResearch/hermes-agent/issues/57282) | transform_llm_output leaking into Honcho sync | agent, memory | Conteúdo transformado vazando para memória externa. |
| [#57255](https://github.com/NousResearch/hermes-agent/issues/57255) | Ollama provider ignorado quando OLLAMA_BASE_URL termina em `/v1` | agent, ollama | Silent fallback para custom. |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Propostas

| # | Feature | Componente | Descrição |
|---|---------|------------|-----------|
| [#47349](https://github.com/NousResearch/hermes-agent/issues/47349) | Configurable Memory Backends | agent, memory | Renomear memory.md → rules.md + backends configuráveis (Honcho, fact_store). |
| [#13490](https://github.com/NousResearch/hermes-agent/issues/13490) | Configurable TUI status bar | tui | Layout, ordem de campos e cores customizáveis. |
| [#32474](https://github.com/NousResearch/hermes-agent/issues/32474) | `/queue cancel` command | cli, gateway | Cancelar prompts enfileirados. |
| [#52821](https://github.com/NousResearch/hermes-agent/issues/52821) | Extrair seções contributor-only do AGENTS.md | agent | AGENTS.md cresceu para ~70K chars, causando ~25K tokens por sessão. |
| [#57120](https://github.com/NousResearch/hermes-agent/issues/57120) | Google Cloud STT (Chirp 3) + TTS | tool/tts, provider/gemini | Autenticação ADC (sem API key). |
| [#56859](https://github.com/NousResearch/hermes-agent/pull/56859) | Skill "mind" — projeto offline brain-like memory | skills, memory | Zero dependências, MIT, totalmente offline. |
| [#57043](https://github.com/NousResearch/hermes-agent/pull/57043) | Per-slot reasoning_effort para MoA advisors | moa | Controlar esforço de reasoning por advisor. |

### Sinais de Evolução do Roadmap

1. **Modularidade de memória:** A convergência de issues sobre memory backends (#47349, #57282) e a PR #51020 indicam que uma refatoração do sistema de memória está no radar.
2. **Headless/MCP:** A PR #57344 (OAuth headless para MCP) sugere que automação e deployments serverless são prioridade.
3. **Multi-plataforma:** Issues sobre Windows (MSYS path mangling, Tirith, cron duplicado) demonstram necessidade de QA mais robusto para Windows.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Categoria | Descrição | Frequência |
|-----------|-----------|------------|
| **Estabilidade Desktop** | UI congela após subagentes completarem, WebSocket disconnects, model picker não mostra presets. | Alta |
| **Windows** | Problemas crônicos com paths MSYS, cron duplicado, GUI commands não abrem, Tirith não instala. | Alta |
| **Integrações** | Photon iMessage quebrado, QQBot falha em reconnect, Slack MPIMs não respeitam gating. | Média |
| **Billing** | Thinking reverte para medium gastando créditos excessivos. | Crítica (já corrigida em #57330) |
| **Onboarding** | Blank Slate installations perdem tools após setup. | Média |

### Cenários de Uso Identificados

1. **Gateway remoto + Desktop local:** Usuários rodam gateway em servidor Linux e desktop em Windows/macOS — expõe bugs de sincronização de estado.
2. **Power users com MoA:** Utilizam presets BeastMode e modelos de reasoning — ausência no model picker é bloqueadora.
3. **Deployments headless:** Necessidade de OAuth não-interativo para MCP servers em automação.
4. **Desenvolvedores 기여:** Dívida de documentação (#5200) impacta onboarding de contribuidores.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Estagnadas

| # | Issue | Criada | Última Atualização | Status |
|---|-------|--------|-------------------|--------|
| [#5200](https://github.com/NousResearch/hermes-agent/issues/5200) | Context Files docs mismatch | 2026-04-05 | 2026-07-02 | 5 👍, aguardando triagem |
| [#5254](https://github.com/NousResearch/hermes-agent/issues/5254) | Tool calls repeating with LM-Studio | 2026-04-05 | 2026-07-02 | Aguardando repro |
| [#7142](https://github.com/NousResearch/hermes-agent/issues/7142) | TypeError cronjob repeat='once' | 2026-04-10 | 2026-07-02 | PR #57342 aberta |
| [#47762](https://github.com/NousResearch/hermes-agent/issues/47762) | Rich Messages via send_message tool | 2026-06-17 | 2026-07-02 | 2 👍, baixa atenção |
| [#13314](https://github.com/NousResearch/hermes-agent/pull/13314) | You.com as web backend | 2026-04-21 | 2026-07-02 | PR aberta há ~2 meses |

### PRs Abertas com Potencial de Merge

| # | PR | Idade | Importância |
|---|-----|-------|-------------|
| [#51020](https://github.com/NousResearch/hermes-agent/pull/51020) | Declarative Honcho config panel | ~11 dias | Alta — feature desktop |
| [#13314](https://github.com/NousResearch/hermes-agent/pull/13314) | You.com web backend | ~73 dias | Média — expandir search |
| [#56859](https://github.com/NousResearch/hermes-agent/pull/56859) | Skill mind (offline memory) | ~3 dias | Média — novo provider |

---

## Métricas Resumidas do Dia

| Indicador | Valor |
|-----------|-------|
| Issues ativas | 46 |
| Issues fechadas | 4 |
| PRs abertos | 31 |
| PRs merged/fechados | 19 |
| Novas releases | 0 |
| Issues P1/P2 em aberto | 8 |
| Bugs relacionados a Windows | 7 |
| Features propostas | 7 |

---

*Relatório gerado automaticamente com base em dados do GitHub — NousResearch/hermes-agent — 2026-07-03*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório de Projeto: PicoClaw
## 📅 Data: 2026-07-03 | github.com/sipeed/picoclaw

---

## 1. Panorama do Dia

O projeto PicoClaw apresenta **alta atividade** em 03 de julho de 2026, com 25 itens atualizados nas últimas 24 horas (2 issues + 23 PRs). A atividade é predominantemente de manutenção, com múltiplos PRs de atualização de dependências (Go e frontend), sinalizando um projeto bem cuidado. A release nightly mais recente (v0.3.1-nightly) indica trabalho contínuo no pipeline de desenvolvimento. Dois bugs críticos foram reportados: um sobre migração de configuração v2→v3 e outro sobre falha de reconexão no loop Matrix. A comunidade demonstra engajamento através de PRs de features (simplex channel, deltachat gateway) e correções pendentes.

---

## 2. Lançamentos

### Release Mais Recente
| Item | Detalhes |
|------|----------|
| **Versão** | `nightly: v0.3.1-nightly.20260702.2cf030d2` |
| **Tipo** | Automated Nightly Build |
| **Data** | 2026-07-02 |
| **Aviso** | Pode ser instável — uso com cautela |

**Changelog completo:** https://github.com/sipeed/picoclaw/compare/v0.3.1...main

> ⚠️ **Nota:** Esta é uma build automática baseada no branch `main`. Não há changelog detalhado publicado, indicando que belum há release estável formal após v0.3.1.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados nas Últimas 24h (8 total)

| # | Título | Impacto |
|---|--------|---------|
| **#3209** | Bump anthropics-sdk-go 1.50.2 → 1.55.1 | Atualização de dependência AI |
| **#3210** | Bump golang.org/x/crypto 0.51.0 → 0.53.0 | Patch de segurança Go crypto |
| **#3161** | fix(exec): keep deny patterns active for custom allow rules | Correção de segurança em exec |
| **#3158** | test: cover sandbox fs Windows path handling | Cobertura de testes cross-platform |
| **#3177** | Bump github/copilot-sdk/go 0.2.0 → 1.0.4 | Atualização SDK Copilot |
| **#3100** | Bump @vitejs/plugin-react 6.0.1 → 6.0.2 | Dependência frontend |
| **#3103** | Bump typescript-eslint 8.59.3 → 8.62.0 | Linting frontend |
| **#3104** | Bump shadcn 4.7.0 → 4.11.0 | UI components |

**Destaques de Progresso:**
- **Correção de segurança (#3161):** Garante que deny patterns continuem ativos mesmo com custom allow rules, impedindo payloads maliciosos via `jq`
- **Testes Windows (#3158):** Melhora suporte cross-platform para sandbox filesystem
- **Atualizações críticas de dependências:** golang.org/x/crypto atualizado para versão com patches de segurança

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Potencial de Impacto

| # | Título | Status | Reações | Análise |
|---|--------|--------|---------|---------|
| **#3206** | v2→v3 config migration fails with false 'unknown field(s)' | 🔴 OPEN | 0 👍 | **Bug crítico** — Migração de configuração quebra para usuários fazendo upgrade, mesmo em fresh install. Afeta fluxos de onboarding. |
| **#3203** | Matrix sync loop has no reconnection logic | 🔴 OPEN | 0 👍 | **Bug crítico** — Loop de sync Matrix morre permanentemente após disrupção de rede. Processo não crasha, então systemd restart não dispara. Usuários ficam semnotificações silenciosamente. |

### PRs de Feature com Engajamento

| # | Título | Status | Tipo |
|---|--------|--------|------|
| **#3193** | Added simplex channel type | 🟡 OPEN | ✨ New Feature |
| **#3063** | feat: add deltachat gateway | 🟡 OPEN | ✨ New Feature + 📖 Docs |
| **#3180** | fix(cli): skip tool calls with invalid arguments | 🟡 OPEN | 🐞 Bug Fix |

**Análise:** 
- O PR #3063 (deltachat gateway) está em desenvolvimento há ~25 dias, indicando feature complexa ou necessidade de review.
- O PR #3193 adiciona suporte a canal simplex, expandindo opções de integração.
- A comunidade está ativamente expandindo canais de comunicação suportados.

---

## 5. Bugs e Estabilidade

### 🔴 Bugs Críticos (2)

#### 1. Migração de Configuração v2→v3 Quebra
- **Issue:** [#3206](https://github.com/sipeed/picoclaw/issues/3206)
- **Autor:** OhYash | Criado: 2026-07-02
- **Severidade:** Alta — Impede uso básico do software
- **Sintoma:** `picoclaw status` (ou qualquer comando que carrega config) falha com:
  ```
  Failed to load config: config.json contains unknown field(s): build_info, session.dm_scope
  ```
- **Impacto:** Usuários fazendo upgrade de v0.2.9+ não conseguem executar comandos básicos
- **Recomendação:** Prioridade alta para hotfix na próxima nightly ou release

#### 2. Loop Matrix Sem Reconexão
- **Issue:** [#3203](https://github.com/sipeed/picoclaw/issues/3203)
- **Autor:** weissfl | Criado: 2026-07-02
- **Severidade:** Alta — Serviço degrada silenciosamente
- **Sintoma:** Após qualquer disrupção de rede ou restart do homeserver, o sync loop morre permanentemente
- **Impacto:** Notificações Matrix param de funcionar sem feedback ao usuário
- **Recomendação:** Implementar exponential backoff + retry logic

### 🟡 PRs de Correção Pendentes

| # | Título | Descrição |
|---|--------|-----------|
| **#3171** | fix(line): add ok checks for sync.Map type assertions | Previne pânico em type assertions no canal LINE |
| **#3180** | fix(cli): skip tool calls with invalid arguments | Corrige malformed tool calls sem descartar batch inteiro |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em Desenvolvimento

| # | Título | Tipo | Tempo Aberto | Sinal de Roadmap |
|---|--------|------|--------------|------------------|
| **#3193** | Added simplex channel type | ✨ Feature | 6 dias | Expansão de canais de comunicação |
| **#3063** | add deltachat gateway | ✨ Feature | 25 dias | Integração com DeltaChat (email-based) |
| **#3213** | bump aws-sdk-go-v2 config | 🔧 Dep | 1 dia | Manutenção AWS integration |
| **#3207** | bump copilot-sdk/go to 1.0.5 | 🔧 Dep | 1 dia | Suporte GitHub Copilot atualizado |

**Análise de Roadmap:**
- **Geração de收入 (Revenue):** Atualizações frequentes de dependências de IA (Anthropic, Copilot) indicam foco em integração com múltiplos provedores
- **Canais de Comunicação:** Expansão contínua (Matrix, LINE, DeltaChat) sugere estratégia de "conectar tudo"
- **Estabilidade:** Foco em testes e correções de segurança (exec deny patterns, Windows paths)

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Dor | Issue | Severidade | Frequência |
|-----|-------|------------|------------|
| **Upgrade quebrado** | #3206 | Crítica | Qualquer usuário fazendo upgrade |
| **Matrix para de funcionar silenciosamente** | #3203 | Alta | Usuários com conexões instáveis |
| **Configuração complexa para novos usuários** | #3206 | Média | Onboarding |

### Cenários de Uso Identificados
- **Desktops/workspaces com múltiplas integrações:** Usuários configuram múltiplos canais (Matrix, LINE, etc.)
- **Ambientes corporativos:** Dependência de AWS SDK e integração com homeservers
- **Desenvolvedores CLI:** Uso extensivo de tool calls e sandbox filesystem

### Indicadores de Satisfação
- 🔄 **23 PRs de atualização de dependências** nos últimos dias — comunidade ativa mantendo o projeto
- ✅ **Feature contributions** (simplex, deltachat) — usuários investindo no projeto
- ⚠️ **2 bugs críticos reportados em 24h** — necessidade de processo de QA mais rigoroso antes de releases

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta há >7 dias

| # | Título | Criado | Status | Prioridade |
|---|--------|--------|--------|------------|
| **#3206** | v2→v3 config migration fails | 2026-07-02 | OPEN | 🔴 Alta |
| **#3203** | Matrix sync loop death | 2026-07-02 | OPEN | 🔴 Alta |
| **#3180** | fix(cli): skip invalid tool calls | 2026-06-26 | OPEN | 🟡 Média |
| **#3171** | fix(line): sync.Map ok checks | 2026-06-25 | OPEN | 🟡 Média |

### PRs Stale (Sem Atualização)

| # | Título | Criado | Última Atualização | Status |
|---|--------|--------|---------------------|--------|
| **#3161** | fix(exec): keep deny patterns | 2026-06-23 | 2026-07-02 | CLOSED ✅ |
| **#3158** | test: Windows path handling | 2026-06-22 | 2026-07-02 | CLOSED ✅ |
| **#3100** | bump vitejs/plugin-react | 2026-06-11 | 2026-07-02 | CLOSED ✅ |

> **Nota:** PRs stale foram fechados/merged com sucesso, indicando que o projeto tem processo de triagem ativo.

---

## 📊 Métricas Consolidada (2026-07-03)

| Métrica | Valor | Tendência |
|---------|-------|-----------|
| Issues ativas (24h) | 2 | Neutra |
| PRs atualizados (24h) | 23 | ↑ Alta |
| PRs merged/fechados (24h) | 8 | ↑ Positiva |
| Bugs críticos abertos | 2 | ⚠️ Atenção |
| Features em development | 2 | → Normal |
| Release mais recente | v0.3.1-nightly.20260702 | N/A |

---

## 🎯 Recomendações para Mantenedores

1. **URGENTE:** Corrigir bug de migração v2→v3 (#3206) — está quebrando upgrades
2. **URGENTE:** Implementar reconnection logic no Matrix sync (#3203)
3. **MÉDIO:** Review e merge do PR #3180 (CLI tool calls)
4. **CONTÍNUO:** Manter ritmo de updates de dependências
5. **ESTRATÉGICO:** Avaliar merge de #3193 (simplex) e #3063 (deltachat) para próxima release

---

*Relatório gerado automaticamente com base em dados do GitHub de 2026-07-03.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-07-03

## 1. Panorama do dia

O projeto IronClaw apresenta **alta atividade** nas últimas 24 horas, com 50 PRs atualizados e 21 issues processadas. A atividade concentra-se no ecossistema **Reborn** — nova arquitetura do agente — com múltiplos PRs de features (~#5525, #5513, #5499) e refatorações em paralelo. Bugs P2 na interface web dominam as issues abertas, indicando pressão sobre a experiência do usuário. Não houve releases formais hoje, embora o PR #5311 (0.24.0 → 0.29.1) já tenha sido mesclado anteriormente. O pipeline de CI mostra instabilidade (E2E noturno falhou), e o time está investindo fortemente em cobertura de testes (Tier-2) para a stack Reborn.

---

## 2. Lançamentos

**Nenhuma nova release publicada hoje.**

A release mais recente disponível é a **0.29.1** (PR #5311), que inclui:
- `ironclaw_common`: 0.4.2 → 0.5.0 ⚠️ API breaking
- `ironclaw_safety`: 0.2.2 → 0.2.3 ✓
- `ironclaw_skills`: 0.3.0 → 0.4.0 ⚠️ API breaking
- `ironclaw`: 0.24.0 → 0.29.1
- `ironclaw_skill_learning`: 0.1.0 → 0.1.1 ✓

> ⚠️ **Nota de migração**: As quebras de API em `ironclaw_common` e `ironclaw_skills` podem exigir ajustes em dependentes. Verificar changelog completo em [PR #5311](https://github.com/nearai/ironclaw/pull/5311).

---

## 3. Progresso do Projeto

### PRs fechados/merged hoje (principais)

| PR | Título | Impacto |
|---|---|---|
| [#5526](https://github.com/nearai/ironclaw/pull/5526) | fix(reborn-tests): resolve one-runtime owner-scope gap (E-MULTIUSER) | Desbloqueia testes multiusuário no harness Reborn |
| [#5559](https://github.com/nearai/ironclaw/pull/5559) | scripts: enforce architecture sprawl checks | Adiciona verificações de code smell arquitetural no pre-commit |
| [#5547](https://github.com/nearai/ironclaw/pull/5547) | test(reborn): PR-C2 Tier-2 coverage (C-SKILL, C-DURABLE, C-ERRORS) | Melhora cobertura de testes para skills, durability e erros |
| [#5543](https://github.com/nearai/ironclaw/pull/5543) | [codex] refresh Reborn agent guidance | Atualiza documentação de orientação para agentes |
| [#5564](https://github.com/nearai/ironclaw/pull/5564) | chore(deps): bump cmov 0.5.3 → 0.5.4 | Atualização de dependência Rust |

### PRs abertos de destaque

| PR | Título | Tamanho | Risco | Status |
|---|---|---|---|---|
| [#5567](https://github.com/nearai/ironclaw/pull/5567) | refactor(types,traits): execute judged dedup backlog — 6 traits removidos | XL | Medium | Aberto |
| [#5280](https://github.com/nearai/ironclaw/pull/5280) | Trace Commons: instance-wide enrollment + per-user profiles | XL | Low | Aberto |
| [#5525](https://github.com/nearai/ironclaw/pull/5525) | feat(reborn): introduce private installs of tools | XL | Low | Aberto |
| [#5499](https://github.com/nearai/ironclaw/pull/5499) | feat(reborn): WASM tool install from zip + env-provisioned credentials | XL | Low | Aberto |
| [#5563](https://github.com/nearai/ironclaw/pull/5563) | feat(webui): design system tokens + /playground | XL | Low | Aberto |

**Avanços significativos**:
- Infraestrutura de **ferramentas WASM instaláveis** está convergindo (ZIP install + credenciais privadas vs. compartilhadas)
- Cobertura de testes **Tier-2** para Reborn avança (C-SKILL, C-DURABLE, C-ERRORS, C-TRACECAP)
- Refatoração de tipos/traits em andamento para reduzir complexidade

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários)

1. **[#5459](https://github.com/nearai/ironclaw/issues/5459)** — *Configurable skills and tools* — 2 comentários
   - Demanda central: permitir instalação de ferramentas WASM por admins (compartilhado) e usuários (privado)
   - Correlacionado com PRs #5499, #5513, #5525 — **área mais ativa do roadmap**

2. **[#5460](https://github.com/nearai/ironclaw/issues/5460)** — *Memories in WebUI workspace visíveis a todos* — 1 comentário
   - Bug de privacidade: memórias de um usuário aparecem para outros no workspace
   - Impacto: confiança e segurança multi-tenant

3. **[#5530](https://github.com/nearai/ironclaw/issues/5530)** — *Skill criteria-based auto-activation unreachable* — 1 comentário (fechado)
   - Descoberta de código morto: feature de auto-ativação por critérios não funciona no path moderno
   - Requer atenção antes da GA

4. **[#5527](https://github.com/nearai/ironclaw/issues/5527)** — *FilesystemSessionThreadService idempotency mismatch* — 0 comentários
   - Mismatch entre write (owner scope) e read (system scope) no sistema de idempotência
   - Correlacionado com a cobertura de testes de #5526

### Análise de demandas

O tema mais quente é **privacidade e isolamento de ferramentas/usuários**. A issue #5459 serve como epic para:
- Instalação privada de ferramentas WASM
- Instalação administrativa de ferramentas compartilhadas
- Gestão de credenciais por tenant vs. por usuário

Há também pressão sobre **UI/UX mobile e desktop** (5+ bugs P2/P3 de interface reportados hoje).

---

## 5. Bugs e Estabilidade

### Por severidade

#### 🔴 P1 — Crítico
| Issue | Título | Status |
|---|---|---|
| [#5504](https://github.com/nearai/ironclaw/issues/5504) | Routine creation hangs sem retornar resultado ou erro | Aberto |

#### 🟠 P2 — Alto
| Issue | Título | Área |
|---|---|---|
| [#5552](https://github.com/nearai/ironclaw/issues/5552) | Run fails com "invalid result" após múltiplas tool failures | Agent loop |
| [#5509](https://github.com/nearai/ironclaw/issues/5509) | Chat creation latency escala com histórico acumulado | Frontend |
| [#5508](https://github.com/nearai/ironclaw/issues/5508) | Slack delivery target não encontrado mesmo com conexão ativa | Slack integration |
| [#5522](https://github.com/nearai/ironclaw/issues/5522) | Reborn routine falha ao ler Slack DMs (capability missing) | Reborn + Slack |
| [#5555](https://github.com/nearai/ironclaw/issues/5555) | Terminal floating button sobrepõe chat composer | WebUI |
| [#5553](https://github.com/nearai/ironclaw/issues/5553) | Approval notifications desaparecem | Notifications |
| [#5551](https://github.com/nearai/ironclaw/issues/5551) | Automation posta progresso intermediário no Slack | Slack delivery |
| [#5558](https://github.com/nearai/ironclaw/issues/5558) | Vision model hallucina e aceita correções falsas | Vision/LM |
| [#5554](https://github.com/nearai/ironclaw/issues/5554) | Mobile chat layout com overflow horizontal | WebUI Mobile |

#### 🟡 P3 — Médio
| Issue | Título | Área |
|---|---|---|
| [#5557](https://github.com/nearai/ironclaw/issues/5557) | Logs deep link requer abrir duas vezes | WebUI |
| [#5556](https://github.com/nearai/ironclaw/issues/5556) | Chat ativo permanece destacado após navegação | WebUI |

### Regressões e problemas de estabilidade

1. **CI instável**: [Issue #4108](https://github.com/nearai/ironclaw/issues/4108) — Nightly E2E falhou (05/27, relatado novamente 07-02)
2. **Code coverage**: Issue [#5530](https://github.com/nearai/ironclaw/issues/5530) revelou código morto no path de auto-ativação de skills
3. **Idempotência**: Issue [#5527](https://github.com/nearai/ironclaw/issues/5527) expõe mismatch produção no FilesystemSessionThreadService

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features abertas

| Issue | Título | Escopo | Indicador estratégico |
|---|---|---|---|
| [#5570](https://github.com/nearai/ironclaw/issues/5570) | Stable OAuth auth-relay callback para testes Google SSO em PRs | DevEx / OAuth | Infraestrutura de testing |
| [#5537](https://github.com/nearai/ironclaw/issues/5537) | Daily ironclaw failure taxonomy | Observability | Maturidade operacional |

### Features em desenvolvimento (PRs)

| PR | Feature | % do roadmap |
|---|---|---|
| [#5525](https://github.com/nearai/ironclaw/pull/5525) | Private installs de tools por usuário (vs. admin) | #5459 parte 2 |
| [#5513](https://github.com/nearai/ironclaw/pull/5513) | Admin UI para credenciais compartilhadas de tools | #5459 parte 1b |
| [#5499](https://github.com/nearai/ironclaw/pull/5499) | WASM tool install via ZIP + credenciais via env | #5459 parte 1 |
| [#5568](https://github.com/nearai/ironclaw/pull/5568) | Final-answer nudge para planned_default e scheduled_trigger | Reborn steering |
| [#5563](https://github.com/nearai/ironclaw/pull/5563) | Design system tokens + playground | WebUI v2 |
| [#5566](https://github.com/nearai/ironclaw/pull/5566) | Decouple outbound channels + WebUI como canal primário | Agent communication |
| [#5565](https://github.com/nearai/ironclaw/pull/5565) | Onboarding/NUX demo com OAuth + chat-first workspace | Go-to-market |

### Sinais de roadmap

1. **Ferramentas configuráveis** (#5459) é o tema central do momento — 3 PRs em paralelo
2. **Reborn é a stack ativa** — novos desenvolvimentos priorizam a arquitetura Reborn sobre a v1
3. **Design System** emerge como necessidade explícita (PR #5563 feedback da liderança de design)
4. **Trace Commons** (#5280) avança para observabilidade instance-wide

---

## 7. Resumo de Feedback dos Usuários

### Dores reais identificadas

| Dor | Descrição | Severidade |
|---|---|---|
| **Privacidade de memórias** | Usuários veem memórias de outros no workspace | 🔴 Confiança |
| **Latência crescente** | Chat creation fica mais lento conforme histórico acumula | 🟠 Produtividade |
| **Integração Slack quebrada** | Rotinas não encontram target de delivery mesmo com Slack conectado | 🟠 Workflow automation |
| **Routine creation trava** | Criação de rotinas fica pendente sem feedback | 🔴 Funcionalidade core |
| **Notifications efêmeras** | Approvals desaparecem antes de serem actionados | 🟠 Segurança/operacional |

### Cenários de uso problemáticos

1. **Automação com Slack**: Usuário configura rotina → recebe "reconnect Slack" mesmo com integração ativa → rotinas antigas ainda postam normalmente
2. **Reborn + Slack DMs**: Rotinas "Reborn" falham ao tentar ler DMs do Slack por falta de capability
3. **Mobile workflow**: Usuário em movimento não consegue ler prompts longos de automação por overflow horizontal

### Satisfação

- Infraestrutura de **WASM tools** está em boas mãos (múltiplos PRs convergindo)
- **Cobertura de testes** avança sistematicamente (Tier-2 roadmap)
- Refatoração de tipos (#5567) reduzirá dívida técnica

---

## 8. Backlog que Merece Atenção

### Issues sem resposta significativa (>48h, sem comentários)

| Issue | Título | Idade | Prioridade |
|---|---|---|---|
| [#5527](https://github.com/nearai/ironclaw/issues/5527) | FilesystemSessionThreadService idempotency mismatch | ~1 dia | Alta — produção |
| [#5537](https://github.com/nearai/ironclaw/issues/5537) | Daily failure taxonomy | ~1 dia | Observabilidade |
| [#5555](https://github.com/nearai/ironclaw/issues/5555) | Terminal button overlap | <1 dia | UX |
| [#5554](https://github.com/nearai/ironclaw/issues/5554) | Mobile overflow | <1 dia | UX mobile |
| [#5551](https://github.com/nearai/ironclaw/issues/5551) | Slack intermediate progress | <1 dia | Workflow |
| [#5553](https://github.com/nearai/ironclaw/issues/5553) | Approval notifications | <1 dia | Operacional |
| [#4108](https://github.com/nearai/ironclaw/issues/4108) | Nightly E2E failed | ~7 dias | CI/Estabilidade |

### Issues antigas sem resolução

| Issue | Título | Criada | Notas |
|---|---|---|---|
| [#4108](https://github.com/nearai/ironclaw/issues/4108) | Nightly E2E failed | 2026-05-27 | Reincidente — CI quebrado há ~5 semanas |
| [#4765](https://github.com/nearai/ironclaw/pull/4765) |

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório de Projeto: CoPaw (QwenPaw)
**Data:** 2026-07-03 | ** Fonte:** GitHub @agentscope-ai/CoPaw

---

## 1. Panorama do Dia

O ecossistema CoPaw (QwenPaw) manteve ritmo intenso de desenvolvimento em 2026-07-02/03. Foram registradas **25 issues** (16 ativas, 9 fechadas) e **50 PRs** (23 abertos, 27 merged/fechados) nas últimas 24h, sinalizando alta atividade tanto da comunidade quanto da equipe central. O destaque vai para o lançamento da versão **v2.0.0-beta.2**, marca importante na trajetória do projeto rumo à GA. Entre os temas mais urgentes, observam-se **vazamento de memória em produção** (v1.1.12.post2), **problemas de contexto no scroll** da Runtime 2.0, e múltiplas issues de segurança envolvendo canais (Feishu) e armazenamento de segredos. A comunidade demonstra forte engajamento com PRs de primeira contribuição, indicando crescimento da base de contribuidores.

---

## 2. Lançamentos

### 🎯 v2.0.0-beta.2 — 2026-07-02
**Status:** Beta (não recomendado para produção)

| Item | Detalhe |
|:---|:---|
| **Release page** | https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.0.0-beta.2 |
| **Issue de tracking** | [#5273](https://github.com/agentscope-ai/QwenPaw/issues/5273) |
| **Verificação** | [#5733](https://github.com/agentscope-ai/QwenPaw/issues/5733) |

**Mudanças declaradas:**
- Adição de comando `cron up` via CLI (feat CLI)
- Desenvolvimento ativo de QwenPaw 2.0.0 com possível breaking changes

> ⚠️ **Aviso oficial:** *This is an early beta release [...] it may contain breaking changes and instability. Intended for developers and early adopters only; not recommended for production use.*

---

## 3. Progresso do Projeto

### PRs Merged/Fechados Hoje (relevância alta)

| PR | Título | Impacto |
|:---|:---|:---|
| [#5738](https://github.com/agentscope-ai/QwenPaw/pull/5738) | feat(auth): enhance rate limiting com proteção multidimensional | **Segurança** — rate limiting por conta, IP,撞库攻击 |
| [#5743](https://github.com/agentscope-ai/QwenPaw/pull/5743) | fix(ci): guard empty extra_flags para bash 3.2 no macOS | **CI/CD** — corrige build broken em macOS legacy |
| [#5727](https://github.com/agentscope-ai/QwenPaw/pull/5727) | fix(loop): fix goal mode gate architecture and scope filtering | **Core/Runtime** — corrige `/goal` mode não funcional |
| [#5533](https://github.com/agentscope-ai/QwenPaw/pull/5533) | Avoid treating content safety image errors as media capability failures | **Bug fix** — previne false positives de rejeição de mídia |

### PRs Abertos com Alto Potencial

| PR | Título | Status |
|:---|:---|:---|
| [#5749](https://github.com/agentscope-ai/QwenPaw/pull/5749) | fix(channel): add consumer timeout and typing auto-stop | 🐛 Resolve [#5748](https://github.com/agentscope-ai/QwenPaw/issues/5748) — agent hang |
| [#5747](https://github.com/agentscope-ai/QwenPaw/pull/5747) | Protect active turn from scroll context eviction | 🧠 Resolve [#5746](https://github.com/agentscope-ai/QwenPaw/issues/5746) — contexto 2.0 |
| [#5597](https://github.com/agentscope-ai/QwenPaw/pull/5597) | feat(backend): per-agent and global LLM model fallback | 🔄 Resolve [#5718](https://github.com/agentscope-ai/QwenPaw/issues/5718) — auto switch model |
| [#5745](https://github.com/agentscope-ai/QwenPaw/pull/5745) | fix(security): redact secrets in persisted dialog artifacts | 🔐 Segurança — dialog logs |
| [#5740](https://github.com/agentscope-ai/QwenPaw/pull/5740) | feat(config): expand env var references in json config | 🔐 + 🔧 Resolve [#5705](https://github.com/agentscope-ai/QwenPaw/issues/5705) parcialmente |
| [#5734](https://github.com/agentscope-ai/QwenPaw/pull/5734) | switch desktop release to Tauri | 📦 Desktop — migração de packaging |
| [#5731](https://github.com/agentscope-ai/QwenPaw/pull/5731) | fix(runtime): honor per-request model override | 🐛 cron jobs + model override |
| [#5692](https://github.com/agentscope-ai/QwenPaw/pull/5692) | feat(memory): add reranker for search results on reme0.4 | 🧠 ReMe — melhoria de busca |

---

## 4. Temas Quentes da Comunidade

### 🔥 Issues com Maior Engajamento (comentários + reações)

| # | Título | Tipo | Coment. | Reações | Tendência |
|:---|:---|:---|:---:|:---:|:---|
| [#5630](https://github.com/agentscope-ai/QwenPaw/issues/5630) | Support custom BaseURL for telegram channel | enhancement | 8 | 0 | **Aguardando merge** |
| [#5705](https://github.com/agentscope-ai/QwenPaw/issues/5705) | 密钥脱敏与安全存储（env var + dialog脱敏 + ReMe日志脱敏） | enhancement | 6 | 0 | **Em desenvolvimento** |
| [#5403](https://github.com/agentscope-ai/QwenPaw/issues/5403) | Browser autofill hijacks search input in Model Config | bug | 6 | 0 | **Aguardando atenção** |
| [#5720](https://github.com/agentscope-ai/QwenPaw/issues/5720) | 内存泄漏反馈 (v1.1.12.post2, ~64min → 580MB) | **bug crítico** | 4 | 0 | **Urgente — produção** |
| [#5273](https://github.com/agentscope-ai/QwenPaw/issues/5273) | v2.0.0 Pre-release Bug & Issue Tracker | tracking | 4 | 👍 1 | **Centralizado** |
| [#4873](https://github.com/agentscope-ai/QwenPaw/issues/4873) | 同时开两个subagent导致主agent无限快速轮询 | bug | 4 | 0 | **Desde 2026-06-01** |

### 📊 Análise de Demandas

**Segurança e Configuração (alta prioridade):**
A issue [#5705](https://github.com/agentscope-ai/QwenPaw/issues/5705) consolida três deficiências de segurança: (1) variáveis de ambiente com fallback incompleto no agent.json, (2) ausência de sanitização em dialog logs, e (3) falta de redact em logs ReMe. A comunidade já está respondendo com PRs [#5740](https://github.com/agentscope-ai/QwenPaw/pull/5740) e [#5741](https://github.com/agentscope-ai/QwenPaw/pull/5741).

**Canais (Feishu em destaque):**
Três issues abertas sobre Feishu:
- [#5709](https://github.com/agentscope-ai/QwenPaw/issues/5709) — `is_bot` hard drop (bloqueia multi-agent)
- [#5708](https://github.com/agentscope-ai/QwenPaw/issues/5708) — Interactive card messages não parseiam
- [#5721](https://github.com/agentscope-ai/QwenPaw/issues/5721) — share_session_in_group perde sender info

**CLI Enhancement:**
[#5737](https://github.com/agentscope-ai/QwenPaw/issues/5737) solicita expansão significativa da CLI para cenários headless/corporativos. Há alinhamento com PR [#5731](https://github.com/agentscope-ai/QwenPaw/pull/5731).

---

## 5. Bugs e Estabilidade

### 🚨 Críticos (Produção)

| # | Severidade | Título | Detalhes |
|:---|:---|:---|:---|
| [#5720](https://github.com/agentscope-ai/QwenPaw/issues/5720) | **P1 — Produção** | 内存泄漏反馈 (v1.1.12.post2) | 64min → 580MB; async task leak + HTTP sessions não回收; corrompe config no crash |
| [#5725](https://github.com/agentscope-ai/QwenPaw/issues/5725) | **P2** | Console 流式输出浏览器卡顿 | Streaming latency > DeepSeek; reprovável |
| [#5748](https://github.com/agentscope-ai/QwenPaw/issues/5748) | **P2** | Agent hangs with typing indicator spinning | `_consume_queue` sem timeout; PR [#5749](https://github.com/agentscope-ai/QwenPaw/pull/5749) open |

### ⚠️ Alto (v2.0.0-beta)

| # | Severidade | Título | Detalhes |
|:---|:---|:---|:---|
| [#5746](https://github.com/agentscope-ai/QwenPaw/issues/5746) | **Alto** | scroll 上下文压缩折叠当前任务 (2.0 beta) | Contexto perdido durante `/heartbeat`; PR [#5747](https://github.com/agentscope-ai/QwenPaw/pull/5747) open |
| [#5717](https://github.com/agentscope-ai/QwenPaw/issues/5717) | **Alto** | malformed tool-call history causa repetição infinita (Runtime 2.0) | `write_file` truncado gera loop |
| [#5710](https://github.com/agentscope-ai/QwenPaw/issues/5710) | **Alto** | 上下文压缩无保护锚点 (v1.1.12.post2) | Mensagens críticas removidas por scroll |
| [#4873](https://github.com/agentscope-ai/QwenPaw/issues/4873) | **Alto** | 两个subagent导致无限快速轮询 | Desde 2026-06-01 — regressão antiga |
| [#5403](https://github.com/agentscope-ai/QwenPaw/issues/5403) | **Médio** | Browser autofill hi jack search input | UI bug — model config page |

### 🔧 Bugs Recentemente Fechados

| # | Título | Resolução |
|:---|:---|:---|
| [#5701](https://github.com/agentscope-ai/QwenPaw/issues/5701) | 并发访问卡死 (v1.1.10) | Closed |
| [#4795](https://github.com/agentscope-ai/QwenPaw/issues/4795) | 向量索引膨胀至37G导致memory_search崩溃 | Closed — ChromaDB `link_lists` inflation |
| [#5703](https://github.com/agentscope-ai/QwenPaw/issues/5703) | 关闭所有工具审批后仍弹出审批窗口 | Closed |
| [#5676](https://github.com/agentscope-ai/QwenPaw/issues/5676) | Available skills not listed in system prompt (v2.0.0b2) | Closed |

---

## 6. Pedidos de Features e Sinais de Roadmap

### ✨ Novas Features Solicitadas

| # | Feature | Motivação | Sinais de Prioridade |
|:---|:---|:---|:---|
| [#5718](https://github.com/agentscope-ai/QwenPaw/issues/5718) | **Auto Switch Model** | Troca automática ao esgotar quota ou erro; agente preso em modelo indisponível | 🔄 PR [#5597](https://github.com/agentscope-ai/QwenPaw/pull/5597) em progresso |
| [#5737](https://github.com/agentscope-ai/QwenPaw/issues/5737) | **增强 CLI 能力** | Operações headless para empacotamento corporativo; pré-instalação de SKILL via CLI | CLI atual limitada; demanda empresarial |
| [#5715](https://github.com/agentscope-ai/QwenPaw/issues/5715) | **Web Console 密码登录** | Console exposto sem auth; risco de acesso não autorizado | 🔐 Segurança — alinhado com PRs de sanitização |
| [#5712](https://github.com/agentscope-ai/QwenPaw/issues/5712) | **Select text + auto-copy em chat** | UX mobile/desktop; não é possível selecionar texto em mensagens | 🎨 UX improvement; PR [#5739](https://github.com/agentscope-ai/QwenPaw/pull/5739) open |
| [#5630](https://github.com/agentscope-ai/QwenPaw/issues/5630) | **Custom BaseURL para Telegram** | Suporte a proxies e self-hosted Telegram Bot API | 🌍 Canal — compatibilidade corporativa |
| [#5692](https://github.com/agentscope-ai/QwenPaw/pull/5692) | **Reranker para ReMe0.4 memory search** | Melhorar qualidade de retrieval híbrido BM25 + vector | 🧠 Memória — PR open |

### 🔮 Indicadores de Roadmap (v2.0.0+)

Baseado na atividade combinada de issues e PRs:

1. **Modelo de fallback automático** — #5597 em desenvolvimento
2. **Desktop Tauri migration** — #5734 em andamento
3. **Segurança integrada** — env var resolution + dialog redact (PRs #5740, #5741, #5745)
4. **Reranker para memória** — PRs #5692 e #5691 (UI config)
5. **Windows native sandbox** — #5525 (first-time contributor)

---

## 7. Resumo de Feedback dos Usuários

### 😤 Dores Principais Reportadas

**1. Vazamento de Memória em Produção (crítico)**
> *"进程运行大约64分钟后，内存从正常的150MB持续涨到580MB左右（每分钟涨5.5MB），然后被外部进程杀掉。重启后弹出'配置大模型'对话框，需要重新配置。"*
— [#5720](https://github.com/agentscope-ai/QwenPaw/issues/5720)

**Cenário:** Usuário Windows 10, v1.1.12.post2, após ~1h de uso contínuo. **Dano:** Perda de configuração e interrupção de trabalho.

**2. Streaming Lag no Console (frustração)**
> *"QwenPaw Console 在流式输出（streaming）过程中，浏览器会出现明显卡顿，回答完毕后卡顿消失。同样的使用场景下，DeepSeek 网页版流式输出不会卡顿。"*
— [#5725](https://github.com/agentscope-ai/QwenPaw/issues/5725)

**Cenário:** Cloud server deployment + browser access via IP:port. Comparação direta com DeepSeek como benchmark de performance esperada.

**3. Contexto Perdido em v2.0.0-beta (regressão grave)**
> *"任务进行到后半段时，最终回复突然变成了对很久之前一条「你好呀」消息的闲聊回复，表现得像是'失忆'或'任务中途丢失上下文'。"*
— [#5746](https://github.com/agentscope-ai/QwenPaw/issues/5746)

**Cenário:** Scroll compression foldando active turn durante tarefa crítica (`/heartbeat`).

**4. Feishu Multi-Agent Broken (bloqueio de uso)**
> *"多 Agent 协作场景中，Agent A（如「冬」）以 Bot 身份在飞书群内

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório de Projeto — ZeroClaw
## Data: 2026-07-03

---

## 1. Panorama do dia

O ecossistema ZeroClaw mantém um **ritmo intenso de atividade** com 35 issues e 50 PRs atualizados nas últimas 24h, evidenciando alta engagement da comunidade. O dia é marcado pela **ausência de releases formais** (v0.8.1 permanece como última versão estável), mas por um volume significativo de PRs em estado de revisão aberta — muitos deles de alta complexidade técnica (tamanho XL), como a infraestrutura de canais Git e o epic de memória durável. O foco predominante está em **maturar a estabilidade multiplataforma** (Windows, path traversal), **expandir capacidades de memória e storage**, e **refinar a arquitetura de autenticação e gateway**. Não há sinal de estagnação; ao contrário, a quantidade de PRs de tamanho XL em pipeline indica investimento em capacidades estruturais de médio prazo.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.** A versão atual mais recente permanece **v0.8.1** conforme referências nos issues (ex.: RFC #6808 menciona "Current: 0.8.1 | Status: Accepted / rollout in progress"). O projeto segue em modo de desenvolvimento ativo com trabalho direcionado às milestone v0.8.3 (Gateway, Web, ZeroCode, Onboarding — Issue #8070) e v0.9.0 (Auth/Security/Gateway — Issue #7432), ambas em construção sem tag de release formal ainda.

---

## 3. Progresso do Projeto

### PRs fechados/merged recentemente

| PR | Título | Impacto |
|----|--------|---------|
| [#7361](https://github.com/zeroclaw-labs/zeroclaw/pull/7361) | feat(rfc-6969): per-turn output routing via send_via + voice delivery fixes | **Crítico** — corrige double-send bug em Telegram e implementa voice-only peer delivery; abrange 11+ canais |
| [#8437](https://github.com/zeroclaw-labs/zeroclaw/pull/8437) | refactor(log): extract JSONL write pipeline into testable helper | Refatoração interna de logging, zero mudança observável em produção |
| [#8476](https://github.com/zeroclaw-labs/zeroclaw/pull/8476) | fix(providers/openai-codex): gate has_tools on non-empty list | **P1 fix** — corrige HTTP 400 em vLLM 0.19+ com tool_choice |
| [#8475](https://github.com/zeroclaw-labs/zeroclaw/pull/8475) | fix(providers/openrouter): gate tool_choice on non-empty tools | **P1 fix** — mesma correção para OpenRouter provider |
| [#8474](https://github.com/zeroclaw-labs/zeroclaw/pull/8474) | fix(providers/copilot): gate tool_choice on non-empty tools | **P1 fix** — mesma correção para Copilot provider |

**Análise:** O merge do PR #7361 representa um marco significativo para a estabilidade de canais, especialmente Telegram. A série de hotfixes em providers (#8476, #8475, #8474) indica que a adoção de vLLM 0.19+ pela comunidade revelou uma incompatibilidade comum que foi corrigida de forma consistente em três provedores simultaneamente.

### PRs em destaque (pipeline aberto)

- **[#8611](https://github.com/zeroclaw-labs/zeroclaw/pull/8611) + [#8609](https://github.com/zeroclaw-labs/zeroclaw/pull/8609):** 3-PR series para Git forge channel (GitHub + Gitea/Forgejo) com SOP ingress — tamanho XL, risco alto. Primeiro substitui um PR monolith de 6.4k linhas (#8504) em fatias revisáveis.
- **[#8570](https://github.com/zeroclaw-labs/zeroclaw/pull/8570):** Epic A de memória durável — supersede, dedup, budget, policy-gate (tamanho XL, risco alto).
- **[#8619](https://github.com/zeroclaw-labs/zeroclaw/pull/8619):** Unified memory-context injection com provenance axis (`TurnOrigin`) — risco médio, tamanho L.
- **[#8621](https://github.com/zeroclaw-labs/zeroclaw/pull/8621):** Plugin authoring guide series (docs, tamanho XS) — guia completo de 5 páginas para WASM component-model.
- **[#8628](https://github.com/zeroclaw-labs/zeroclaw/pull/8628):** Fix de path traversal em WeChat channel (tamanho XS, risco alto) — vulnerabilidade de segurança corregida.

---

## 4. Temas Quentes da Comunidade

### Por volume de discussão (comentários)

| Issue | Tema | Comentários | Tensão |
|-------|------|-------------|--------|
| [#8193](https://github.com/zeroclaw-labs/zeroclaw/issues/8193) | MCP tools ausentes no TUI sessões enquanto gateway vê | **14** | Bug crítico — S1 workflow blocked |
| [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) | RFC: Work Lanes, Board Automation, Label Cleanup | **13** | Governança — accepted, rollout in progress |
| [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) | 74 test failures no Windows | **7** | Compatibilidade multiplataforma |
| [#6302](https://github.com/zeroclaw-labs/zeroclaw/issues/6302) | Gemini 400 — invariant violation no history serializer | **5** | Bug P1 em provider Gemini |
| [#8226](https://github.com/zeroclaw-labs/zeroclaw/issues/8226) | Per-agent environment variables (RFC) | **5** | Multi-tenancy para MCP e variáveis |
| [#8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424) | RFC: .ignore file mechanism | **5** | Segurança de workspace (CLOSED) |

**Análise:** O issue #8193 (MCP tools no TUI vs Gateway) domina a discussão com 14 comentários, refletindo uma **lacuna de UX significativa** onde o agente consegue ver MCP tools mas a interface TUI não as expõe ao usuário. Este é um bug de percepção que mina a confiança na transparência do sistema. O RFC #6808 (Work Lanes) mantém 13 comentários mesmo em status "in-progress", indicando que a comunidade acompanha de perto a evolução dos processos de governança do projeto. A questão do Windows (#7462) com 74 testes falhando mostra que a compatibilidade com sistemas não-Linux continua sendo uma dor crônica.

---

## 5. Bugs e Estabilidade

### Por severidade

**S1 — Workflow bloqueado (crítico):**
| Issue | Título | Detalhes |
|-------|--------|----------|
| [#8193](https://github.com/zeroclaw-labs/zeroclaw/issues/8193) | MCP tools missing from TUI sessions | Gateway vê tools, TUI não. Afeta `zerocode/tui, tools, runtime, gateway/api` |
| [#8627](https://github.com/zeroclaw-labs/zeroclaw/issues/8627) | WhatsApp Web device linking quebrado por novo gate passkey/SHORTCAKE | Meta mudou mecanismo de link; canal `whatsapp-web` não completa pareamento |
| [#8631](https://github.com/zeroclaw-labs/zeroclaw/issues/8631) | SOP deterministic steps registrados Completed sem executar | Headless triggers (cron, MQTT, filesystem) geram audit trail falso |

**P1 — Alta prioridade (10 bugs ativos):**
| Issue | Título | Impacto |
|-------|--------|---------|
| [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) | 74 test failures on Windows | Unix-only test commands, path semantics, console encoding (CP 936) |
| [#6302](https://github.com/zeroclaw-labs/zeroclaw/issues/6302) | Gemini 400 — assistant turn before first user turn | History serializer violation; LiteLLM `wire_api="chat_completions"` rejeitado |
| [#8044](https://github.com/zeroclaw-labs/zeroclaw/issues/8044) | `/model --agent` sem per-sender authorization | Qualquer sender pode mudar modelo effective de todos os usuários |
| [#8334](https://github.com/zeroclaw-labs/zeroclaw/issues/8334) | `skills install/list/remove` target data_dir errado | Multi-agent installs não carregam skills instalados via CLI |
| [#8605](https://github.com/zeroclaw-labs/zeroclaw/issues/8605) | is_runtime_config_path não protege config.toml real | Self-modification guard falho no per-agent layout; risco de segurança |

**P2 — Degradado (S2):**
- [#8302](https://github.com/zeroclaw-labs/zeroclaw/issues/8302): MCP server tools não mostradas na lista do web dashboard
- [#8615](https://github.com/zeroclaw-labs/zeroclaw/issues/8615): Compatible provider deleta conteúdo via unconditional `<think>` tag stripping
- [#8598](https://github.com/zeroclaw-labs/zeroclaw/issues/8598): Skills install não aceita URLs owner-qualified do ClawHub
- [#8631](https://github.com/zeroclaw-labs/zeroclaw/issues/8631): SOP headless false-green audit trail (também bloqueia real driven run)

**Análise:** A **estabilidade está sob pressão** em múltiplas frentes. A combinación de bugs de segurança (#8605, #8044) com bugs de UX críticos (#8193, #8627) e falhas de compatibilidade (#7462) indica que o projeto está em fase de consolidação de features complexas (MCP, multi-agent, SOP) sem estabilização completa. O PR #8628 já corrige uma vulnerabilidade de path traversal em WeChat, sugerindo resposta ativa a segurança.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features de alta demanda

| Issue | Feature | Status | Complexidade |
|-------|---------|--------|--------------|
| [#8550](https://github.com/zeroclaw-labs/zeroclaw/issues/8550) / [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) | OpenAI-compatible chat completions endpoint | RFC (2 issues) | Arquitetural — abrange Open WebUI, LobeChat |
| [#8226](https://github.com/zeroclaw-labs/zeroclaw/issues/8226) | Per-agent custom environment variables | RFC, blocked | Multi-tenancy; afeta MCP e secrets |
| [#7952](https://github.com/zeroclaw-labs/zeroclaw/issues/7952) | Publish full-channel prebuilt assets | Blocked, needs maintainer | Operacional — download sizes |
| [#7065](https://github.com/zeroclaw-labs/zeroclaw/issues/7065) | Agent evaluation harness (`zeroclaw eval`) | Accepted | DX crítica — replay + live modes |
| [#6416](https://github.com/zeroclaw-labs/zeroclaw/issues/6416) | Quickstart config validation + provider warnings | Accepted, quickstart | UX onboarding |
| [#8600](https://github.com/zeroclaw-labs/zeroclaw/issues/8600) | Easy per-chat model switching para multi-model providers | Needs maintainer review | UX multi-model |
| [#8602](https://github.com/zeroclaw-labs/zeroclaw/issues/8602) | Enhance file_read — line cap, PDF, charset detection, notebooks | Needs maintainer review | Tool robustness |

### Tracks de roadmap em monitoramento

- **v0.8.3** (Issue #8070): Gateway, Web, ZeroCode, Onboarding surfaces — accepted
- **v0.9.0** (Issue #7432): Auth hardening, security, A2A/multi-agent boundaries, breaking changes — 111 open items

**Sinais de tendência:** A comunidade está empurrando o projeto em duas direções:
1. **Ecosystem expansion** — compatibilidade com OpenAI API, mais providers (Gitea, Forgejo), mais canais
2. **Production hardening** — eval harness, config validation, security policies, durable memory

---

## 7. Resumo de Feedback dos Usuários

### Dores recorrentes identificadas

| Padrão | Evidência | Severidade |
|--------|-----------|------------|
| **Opacidade de MCP tools** | #8193: "gateway sees them, TUI sessions do not receive" | S1 |
| **Quebra em multi-agent setups** | #8334: skills CLI não funciona em install paths usados por multi-agent runtime | S2 |
| **Onboarding doloroso** | #6416: provider kind incompatibilities não warnadas antes de runtime | S2 |
| **Compatibilidade Windows** | #7462: 74 testes falhando; Chinese console CP 936 não suportado | P1 |
| **WhatsApp link quebrado** | #8627: Meta mudou passkey flow; canal wechat-web parou de funcionar | S1 |
| **Secrets multi-tenancy** | #8226: MCP instances compartilhadas não isolam tokens entre agentes | P2 |

### Feedback positivo implícito

- O sistema de **SOP (Standard Operating Procedures)** está amadurecendo bem (RFC em Rev.8, múltiplos PRs de refinamento)
- A arquitetura **WASM plugin model** está documentada e em expansão (guia de 5 páginas lançado)
- Provider abstraction está funcionando — correção uniforme de tool_choice em 3 provedores

---

## 8. Backlog que Merece Atenção

### Issues sem resposta ou estagnadas

| Issue | Título | Idade | Situação |
|-------|--------|-------|----------|
| [#4467](https://github.com/zeroclaw-labs/zeroclaw/issues/4467) | Add MCP resource and prompt support | ~3 meses | In-progress, 4 👍 — feature antiga, ainda não finalizada |
| [#7108](https://github.com/zeroclaw-labs/zeroclaw/issues/7108) | CI cached Rust builds improvement | ~1 mês | Accepted — CI crítico path está em 15-20min |
| [#6250](https://github.com/zeroclaw-labs/zeroclaw/issues/6250) | Extract require_auth to route-layer middleware | ~2 meses | Accepted, follow-up — auth hardening em progresso |
| [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) | v0.9.0 tracker | ~3 semanas | 111 open items — risco de scope creep |

### Riscos de manutenção

- **RFCs múltiplos em paralelo** (#6808, #8226, #8396, #8424, #8550/8603) sobrecarregando reviewers
- **Epic A de memória durável** (#8570) é tamanho XL com mudanças estruturais — risco de regressão em storage layer
- **Git forge channel 3-PR series** (#8609, #8611) substitui monolith 6.4k linhas — requer review cuidadoso de integração

---

## Conclusão

ZeroClaw está em **fase de maturação acelerada**, com alta atividade de PRs estruturais (memória durável, Git forge channels, unified memory-context) mas também com bugs críticos abertos que afetam workflow (MCP TUI, WhatsApp linking,

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*