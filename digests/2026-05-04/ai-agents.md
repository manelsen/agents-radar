# Resumo diário do ecossistema de agentes de IA 2026-05-04

> Issues: 2 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-05-03 20:37 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal


# Relatório do Projeto NullClaw — 2026-05-04

---

## 1. Panorama do Dia

O projeto NullClaw manteve uma atividade moderada no período analisado, com **2 issues ativas** registradas nas últimas 24 horas e **nenhuma atividade de PRs ou releases**. As discussões concentram-se em dois eixos críticos: a usabilidade do módulo `web_search` em dispositivos de baixo recursos e a reavaliação da estratégia de sandbox padrão no Linux. O repositório demonstra vitalidade através de Issues em aberto, embora a ausência de merged PRs ou novos lançamentos sugira uma fase de consolidação ou discussão antes de próximo ciclo de desenvolvimento.

---

## 2. Lançamentos

**Nenhum release foi publicado nas últimas 24 horas.**

O projeto não registrou novas versões, indicando que o foco atual está na resolução de issues pendentes e na preparação de próximas funcionalidades. Recomenda-se monitorar o repositório para eventuais anúncios de releases.

---

## 3. Progresso do Projeto

**Nenhum PR foi merged ou fechado nas últimas 24 horas.**

A ausência de atividade de merge no período pode indicar:
- Fase de revisão e feedback em Issues antes da criação de PRs formais
- Priorização de discussões arquiteturais antes de implementação

---

## 4. Temas Quentes da Comunidade

### Issue #871 — `web_search` impraticável em dispositivos de baixo recurso
| Campo | Detalhe |
|-------|---------|
| **Status** | Aberta |
| **Autor** | uMendex |
| **Criação** | 2026-04-25 |
| **Última atualização** | 2026-05-02 |
| **Comentários** | 2 |
| **Reações** | 0 |
| **Link** | [#871](https://github.com/nullclaw/nullclaw/issues/871) |

**Análise:** Esta issue é considerada **crítica** pelo autor. O problema central é que a funcionalidade `web_search` depende atualmente de:
1. Brave Search API (requer chave API externa)
2. Outras alternativas não especifiées

O autor destaca que esta limitação compromete o caso de uso principal do NullClaw: **execução em dispositivos fracos, baratos e com recursos limitados**. A necessidade de API keys externas contraria o princípio de independência de serviços proprietários. Esta issue tem potencial para impactar diretamente a proposta de valor do projeto.

---

### Issue #882 — Sandbox: padrão para Landlock no Linux
| Campo | Detalhe |
|-------|---------|
| **Status** | Aberta |
| **Autor** | mark-os |
| **Criação** | 2026-05-03 |
| **Última atualização** | 2026-05-03 |
| **Comentários** | 1 |
| **Reações** | 0 |
| **Link** | [#882](https://github.com/nullclaw/nullclaw/issues/882) |

**Análise:** Esta issue propõe uma mudança arquitetural significativa no sistema de sandbox do NullClaw. O autor identifica que o comportamento atual de `sandbox.backend: "auto"` realiza **probing de ferramentas externas via spawning de processos filhos** (firejail, bwrap, docker), causando problemas recorrentes.

A proposta sugere:
- Padrão para **Landlock** (mecanismo de sandbox nativo do kernel Linux)
- Eliminação do probing de ferramentas externas no startup

Esta mudança pode simplificar significativamente a inicialização e reduzir dependências externas, alinhando-se melhor com o objetivo de rodar em dispositivos de baixo recurso.

---

## 5. Bugs e Estabilidade

### Issue Crítica Aberta

| # | Título | Severidade | Status | Comentários |
|---|--------|------------|--------|-------------|
| #871 | web_search impraticável em dispositivos low-resource | **Crítica** | Aberta | 2 |

**Análise:** A issue #871 é classificada pelo próprio autor como "Critical". O bug impacta diretamente a usabilidade do projeto no cenário para o qual foi concebido (dispositivos de baixo custo). Até que uma solução seja implementada (como suporte nativo a DuckDuckGo), usuarios de dispositivos fracos não conseguirão utilizar a funcionalidade de busca web — um componente essencial para agentes de IA.

**Não foram reportados crashes ou regressões novas** nas últimas 24 horas.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Solicitadas

| # | Título | Tipo | Status | Sinal de Roadmap |
|---|--------|------|--------|------------------|
| #882 | Padrão Landlock no sandbox Linux | Feature | Aberta | ✔️ Indica direção para simplificação de dependências |
| #871 | Suporte DuckDuckGo para web_search | Feature | Aberta | ✔️ Relevante para dispositivos low-resource |

**Análise de Sinais de Roadmap:**

1. **Descentralização de APIs**: A comunidade demonstra demanda clara por redução de dependência de serviços proprietários (Brave Search API). O suporte a provedores gratuitos como DuckDuckGo seria estratégico.

2. **Simplificação de Infraestrutura**: A proposta de Landlock como padrão indica que o projeto está priorizando:
   - Redução de dependências externas
   - Melhor performance em inicialização
   - Maior portabilidade (especialmente em dispositivos IoT/embarcados)

3. **Foco em Low-Resource**: O tom das duas issues indica que o nicho de mercado-alvo (dispositivos modestos) está sendo priorizado pelos contribuidores.

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Dor | Proveniência | Impacto |
|-----|--------------|---------|
| **Dependência de API keys externas** | Issue #871 | Alto — quebra o caso de uso principal |
| **Probing lento no startup** | Issue #882 | Médio — afeta experiência em dispositivos fracos |
| **Sem suporte DuckDuckGo** | Issue #871 | Alto — força uso de serviços pagos/proprietários |
| **Complexidade de ferramentas de sandbox** | Issue #882 | Médio — reduz portabilidade |

### Cenários de Uso em Foco

O feedback atual da comunidade converge para um **perfil de usuário específico**:
- Desenvolvedores/operadores rodando NullClaw em:
  - Mini PCs (Raspberry Pi, Orange Pi)
  - Dispositivos IoT
  - Servidores com recursos limitados
  - Ambientes containerizados minimalistas

### Satisfação e Insatisfação

- **Insatisfação**: Limitação de `web_search` e complexidade de setup de sandbox
- **Satisfação implícita**: A comunidade continua ativa reportando issues detalhadas e propondo soluções, indicando engajamento positivo com o projeto

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Progresso Prolongado

| # | Título | Idade | Comentários | Prioridade |
|---|--------|-------|-------------|------------|
| #871 | web_search em low-resource devices | ~9 dias | 2 | **Alta** |

### Recomendação de Priorização

**Para o time de manutenção do NullClaw:**

1. **#871 — Alta Prioridade**: Considerada "Critical" pelo autor. A ausência de `web_search` funcional em dispositivos de baixo recurso comprometer o valor central do projeto. Recomenda-se:
   - Avaliar viabilidade técnica de integração com DuckDuckGo HTML/JSON API
   - Considerar implementação de fallback automático

2. **#882 — Média-Alta Prioridade**: Melhoria arquitetural que alinhará o projeto com seus objetivos de simplicidade. O Landsock como padrão pode resolver múltiplos problemas recorrentes simultaneamente.

---

## Métricas Resumidas do Período

| Métrica | Valor |
|---------|-------|
| Issues abertas/ativas (24h) | 2 |
| Issues fechadas (24h) | 0 |
| PRs abertos (24h) | 0 |
| PRs merged/fechados (24h) | 0 |
| Releases | 0 |
| Issues críticas abertas | 1 (#871) |
| Issues com proposta de feature | 2 (todas) |

---

*Relatório gerado automaticamente com base nos dados do GitHub de [nullclaw/nullclaw](https://github.com/nullclaw/nullclaw) em 2026-05-04.*

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo: Ecossistema de Agentes de IA Open Source

**Data de Referência:** 2026-05-04  
**Projetos Analisados:** NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw, ZeroClaw

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **duas velocidades distintas de desenvolvimento** em 2026. Projetos maduros como Hermes Agent e ZeroClaw operam com volumes massivos de atividade (50+ issues/PRs diários), evidenciando comunidades estabelecidas com processos de triagem e review consolidados. Simultaneamente, projetos nichados como NullClaw mantêm foco laser em casos de uso específicos (dispositivos de baixo recurso) com atividade moderada mas direcionada.

A **segurança emerge como tema transversal**: sandboxing, context isolation, e hardening de deployments públicos aparecem como prioridades em pelo menos 5 dos 7 projetos. Paralelamente, a **diversificação de providers** (DeepSeek, Gemini, Ollama cloud, Volcengine) indica um mercado fragmentado onde interoperabilidade supera lock-in. O desktop application trend (ZeroClaw/Tauri, CoPaw/system tray) sugere maturação do produto para além do terminal.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | Releases | Saúde | Tendência |
|---------|-------------|-----------|----------|-------|-----------|
| **NullClaw** | 2 | 0 | 0 | 🟡 Baixa | Consolidação |
| **NanoBot** | 6 | 23 (7 merged) | 0 | 🟢 Alta | Expansão |
| **Hermes Agent** | 50 | 50 | 0 | 🟢 Muito Alta | Maturação |
| **PicoClaw** | 5 | 15 (5 merged) | 1 nightly | 🟢 Alta | Iteração rápida |
| **IronClaw** | 20 | 33 (3 merged) | 0 | 🟡 Refatoração | Reborn architecture |
| **CoPaw** | 31 | 16 | 0 (v1.1.6b1 prep) | 🟢 Alta | Feature-rich |
| **ZeroClaw** | 50 | 44 (19 merged) | 0 | 🟢 Muito Alta | Desktop focus |

**Observações:**
- Hermes Agent e ZeroClaw lideram volume absoluto de atividade
- NanoBot e PicoClaw apresentam melhor taxa de PRs mergeados (indicando review eficiente)
- NullClaw é o único projeto em fase claramente de baixa atividade, possivelmente pré-release ou em hibernação

---

## 3. Posicionamento do Projeto Principal (NullClaw)

NullClaw ocupa um **nicho diferenciado**: execução em dispositivos de recursos limitados (Raspberry Pi, Orange Pi, IoT). Enquanto outros projetos otimizam para poder computacional, NullClaw prioriza:

| Diferencial | Implementação |
|-------------|---------------|
| **Independence de API keys** | web_search via Brave Search (crítica #871 — precisa DuckDuckGo) |
| **Sandbox nativo** | Landlock como padrão em vez de firejail/bwrap (issue #882) |
| **Minimalismo arquitetural** | Eliminação de probing de ferramentas externas no startup |

**Limitações atuais:**
- Atividade de PRs zerada nas 24h (sem merge pipeline ativo)
- Comunidade pequena (2 issues ativas)
- Baixa diversificação de contributors

**Comparado aos pares:** NullClaw sacrifica breadth por profundidade em low-resource. Hermes Agent e ZeroClaw oferecem mais features mas com overhead significativamente maior.

---

## 4. Focos Técnicos Compartilhados

### 4.1 Memória e Contexto

| Projeto | Problema | Status |
|---------|----------|--------|
| Hermes Agent | Session search retorna vazio após crash (#19244) | Aberto |
| CoPaw | memory_search AttributeError (#3977) | Aberto |
| ZeroClaw | Context compressor dropando reasoning_content (#6269) | Aberto |
| IronClaw | Config fallback persiste no DB (#3229) | Crítico aberto |

**Padrão:** Sístemas de memória são o principal ponto de dor. Sessões corrompidas, índice não construído, e compressão excessiva afetam múltiplos projetos.

### 4.2 Segurança e Sandbox

| Projeto | Foco | Risco |
|---------|------|-------|
| NanoBot | Safety guard false positives (#3599) | Corrigido |
| ZeroClaw | Context spillage chat→scheduler (#5415) | **S0 — Crítico** |
| PicoClaw | Bash path traversal (sandbox escape #2749) | PR #2750 em review |
| Hermes Agent | INSECURE_NO_AUTH webhook bypass (#19333) | PR mergeado |

**Padrão:** Sandbox policies são subestimadas em edge cases (git -C, paths relativos, approval bypass).

### 4.3 Multi-Provider Stability

| Provider | Projetos Afetados | Sintoma |
|----------|-------------------|---------|
| **DeepSeek** | ZeroClaw, PicoClaw, IronClaw | reasoning_content drops, streaming errors |
| **Gemini** | IronClaw, PicoClaw, ZeroClaw | HTTP 400 em tool-calling, schema handling |
| **Ollama** | CoPaw, PicoClaw | Contexto perdido, subprocess ARM64 |

**Padrão:** Integração com modelos chinese/asiáticos (DeepSeek, Volcengine, Zhipu) está amadurecendo, mas ainda apresenta bugs específicos de provider.

---

## 5. Análise de Diferenciação

### 5.1 Por Público-Alvo

```
NullClaw     ──► Low-resource devices (Raspberry Pi, IoT)
NanoBot      ──► Developers com OAuth (OpenAI Codex, GitHub Copilot)
Hermes       ──► Enterprise multi-provider (Vertex, Claude Max)
PicoClaw     ──► MCP power users (Notion, ferramentas complexas)
IronClaw     ──► NEAR ecosystem (trading, intents, portfólio)
CoPaw        ──► Chinês/ASI (Feishu, WeChat, Volcengine)
ZeroClaw     ──► Desktop-first (macOS menu bar, Tauri app)
```

### 5.2 Por Arquitetura

| Arquitetura | Projetos | Implicação |
|-------------|----------|------------|
| **Monolithic CLI** | NullClaw, NanoBot | Simplicidade, menor superfície de ataque |
| **Modular/Plugin** | PicoClaw (MCP), CoPaw (hooks) | Extensibilidade, complexidade de integração |
| **Desktop-first** | ZeroClaw (Tauri) | UX rica, necessidade de code-signing/notarization |
| **Enterprise Gateway** | Hermes Agent | Escalabilidade, ACL, webhook security |

### 5.3 Por Estratégia de Provider

| Estratégia | Projeto | Exemplo |
|------------|---------|---------|
| **Provider-agnostic** | Hermes Agent (13+ providers) | Vertex, Claude Max, MiniMax |
| **Single-focus** | IronClaw (NEAR) | DeepLedger, NEAR intents |
| **Market-specific** | CoPaw (China market) | Volcengine, DashScope |
| **Minimal dependency** | NullClaw (offline-first) | DuckDuckGo, Landlock |

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração

| Tier | Projetos | Características |
|------|----------|------------------|
| **🚀 Fast movers** | ZeroClaw, Hermes Agent | 40-50 PRs/issues diária, review em <24h |
| **📈 Active** | NanoBot, PicoClaw, CoPaw | 15-30 atividade, ciclo de release semanal |
| **🔄 Consolidating** | IronClaw | Reborn architecture (refatoração massiva) |
| **💤 Low activity** | NullClaw | 0 PRs, fase de discussão |

### 6.2 Métricas de Maturidade

| Indicador | Lider | Trailer |
|-----------|-------|---------|
| **Débito técnico addressado** | NanoBot (7 PRs merged/24h) | NullClaw (0) |
| **Segurança processada** | ZeroClaw (19 PRs merged, 4 security fixes) | NullClaw (0) |
| **Feature backlog** | Hermes Agent (18 P3 items) | - |
| **Bugs críticos abertos** | IronClaw (1 DB corruption), ZeroClaw (1 S0 context spillage) | NullClaw (1) |
| **Stale backlog** | PicoClaw (#2647), CoPaw (#2430 ~38 dias) | - |

### 6.3 Saúde Relativa

```
ZeroClaw     ████████████████░░░░  92% — Security-first, desktop expanding
NanoBot      ████████████████░░░░  88% — CLI stable, security hardening
Hermes       ███████████████░░░░░  85% — Volume alto, mas 47 issues abertas vs 3 fechadas
PicoClaw     █████████████░░░░░░░  78% — Bugs críticos resolvidos, security alerta
CoPaw        ████████████░░░░░░░  72% — 3 bugs críticos abertos, beta release pending
IronClaw     ███████████░░░░░░░░░  68% — Refatoração Reborn domina backlog
NullClaw     ██████░░░░░░░░░░░░░░  45% — Baixa atividade, sem pipeline ativo
```

---

## 7. Sinais de Tendência

### 7.1 Tendências de Mercado

| Tendência | Evidência | Implicação |
|-----------|-----------|------------|
| **Desktop como próximo frontier** | ZeroClaw batch macOS (14 issues), CoPaw system tray (#2430) | Competição em UX além do terminal |
| **Multi-modalidade** | WhatsApp voice (NanoBot), Telegram audio (CoPaw), Xiaomi Mimo (PicoClaw) | Audio/video support em roadmap transversal |
| **MCP como protocolo padrão** | PicoClaw #2681 (Gemini+MCP crash), CoPaw (#4007 MemoryHook) | Model Context Protocol ganhabdo adoption |
| **LLMs chineses em ascensão** | DeepSeek (4 projetos), Volcengine (CoPaw), Zhipu (ZeroClaw) | Fragmentação de mercado, necessidade de provider abstraction |
| **Low-resource como segmento** | NullClaw (full focus), Raspberry Pi guide (ZeroClaw) | Mercado IoT/embarcado ainda niche mas crescente |

### 7.2 Tendências Técnicas

| Área | Sinal | Proyectos |
|------|-------|-----------|
| **Concurrency control** | Semáforo asyncio para subagentes (#3615 NanoBot) | Evitar OOM em hardware consumidor |
| **Provider fallback chain** | ZeroClaw #5803 (ignora config), CoPaw #4011 (fallback model) | Resiliência > performance single-provider |
| **Security hardening** | Context spillage, sandbox escapes, approval bypass | Movimentação de "feature-complete" para "security-first" |
| **Context optimization** | Lazy tool schema (#6839 Hermes), FTS5 skills (#17649 Hermes) | Token overhead como problema aceite |

### 7.3 Tendências de Comunidade

| Padrão | Observação |
|--------|------------|
| **Segurança reporta bem** | Issues com repro steps detalhados, PoCs em 24-48h |
| **Feature fatigue** | NullClaw (baixa atividade) vs ZeroClaw (50 issues) — tradeoff entre scope e foco |
| **Contributors não-maintainers** | abbyshekit (IronClaw), theonlyhennygod (ZeroClaw) adicionando features significativas |
| **I18n em crescimento** | CoPaw pt-BR locale (#4009) — expansão para mercados ocidentais |

---

## Síntese para Decisores

**Para escolher um projeto:**

- **Prototipagem rápida + segurança CLI:** NanoBot
- **Enterprise multi-provider:** Hermes Agent
- **Desktop application (macOS):** ZeroClaw
- **Integração MCP + multimodel:** PicoClaw
- **Mercado chinês/ASI:** CoPaw
- **Dispositivos IoT/low-resource:** NullClaw
- **Blockchain/NEAR ecosystem:** IronClaw

**Para contribuir:**

- Hermes Agent e ZeroClaw oferecem volume alto de issues good-first
- PicoClaw e CoPaw apresentam PRs stale aguardando review
- Security-minded developers encontrarão bugs em todos os projetos

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-05-04

## 1. Panorama do Dia

O NanoBot apresentou alta atividade em 04/05/2026, com **6 issues atualizadas** e impressionantes **23 PRs** no período. O foco principal foi a estabilização do sistema de segurança do workspace e a resolução de bugs críticos no CLI e safety guard. A comunidade demonstrou grande engajamento em funcionalidades de segurança, estabilidade do CLI interativo e suporte a canais multimídia (WhatsApp). O projeto segue em ritmo intenso de desenvolvimento, com 16 PRs abertos e 7 merged/fechados.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24 horas.**

O último release estável permanece **v0.1.5.post3**, que foi identificado como causador de falsos positivos no safety guard (issue #3599, já corrigida em PR #3613 e #3614). Recomenda-se atenção ao próximo tag para verificar se as correções de segurança do workspace são incluídas.

---

## 3. Progresso do Projeto

### PRs Merged/Fechadas (7 total)

| PR | Título | Impacto |
|----|--------|---------|
| [#3613](https://github.com/HKUDS/nanobot/pull/3613) | fix(agent): prevent safety guard false positives and streamed message drop | **Crítico** — Permite `/dev/*` paths (ex: `rm file.txt 2>/dev/null`), corrige drop de mensagens em stream |
| [#3614](https://github.com/HKUDS/nanobot/pull/3614) | fix(runner): soft workspace boundary with retry throttle | **Crítico** — Substitui abort fatal por erros recuperáveis com guidance ao LLM |
| [#3609](https://github.com/HKUDS/nanobot/pull/3609) | fix(cli): stop provider retry messages garbling interactive output | **UX** — Elimina ANSI garble no CLI durante retries de API |
| [#3606](https://github.com/HKUDS/nanobot/pull/3606) | fix(cron): atomic write for jobs.json | **Estabilidade** — Previene desaparecimento silencioso de jobs agendados após restart |
| [#3600](https://github.com/HKUDS/nanobot/pull/3600) (via #3609) | CLI retry_wait intercept | **UX** — Corrige confusão entre output de retry e streaming |
| [#3583](https://github.com/HKUDS/nanobot/pull/3583) | Improve beta WebUI turn completion and chat isolation | **UX** — Melhora estado de loading e isolação de sessões |
| [#2727](https://github.com/HKUDS/nanobot/pull/2727) | feat(cli): add provider logout command | **Feature** — Implementação inicial do logout de providers OAuth |

### PRs Abertos com Alta Prioridade

| PR | Título | Destaque |
|----|--------|----------|
| [#3615](https://github.com/HKUDS/nanobot/pull/3615) | feat(agent): limit concurrent subagent execution | Semáforo `asyncio` para `maxConcurrentSubagents`; resolve OOM em hardware consumidor |
| [#3612](https://github.com/HKUDS/nanobot/pull/3612) | feat(cli): add provider logout command | Complementa #2727 com handlers registrados para `openai-codex` e `github-copilot` |
| [#3607](https://github.com/HKUDS/nanobot/pull/3607) | fix(bridge): support WhatsApp voice message download | Adiciona handling de `audioMessage` no WhatsApp bridge |
| [#3492](https://github.com/HKUDS/nanobot/pull/3492) | fix(security): harden public-deploy footguns + browser-CSRF | Protege deployments públicos contra configurações perigosas silenciosas |

---

## 4. Temas Quentes da Comunidade

### Issues/PRs com Maior Atenção

**1. Segurança do Workspace (4 PRs relacionados)**
- [#3492](https://github.com/HKUDS/nanobot/pull/3492) — Hardening de footguns em deploy público
- [#3255](https://github.com/HKUDS/nanobot/pull/3255) — Proteção de `history.jsonl`/.dream_cursor na camada filesystem
- [#3252](https://github.com/HKUDS/nanobot/pull/3252) — Detecção de esquemas não-HTTP em SSRF scan (`file://`, `gopher://`)
- [#3235](https://github.com/HKUDS/nanobot/pull/3235) — Fail-closed em DNS failure

**Demanda:** A comunidade (especialmente @mohamed-elkholy95) demonstra foco intenso em segurança, especialmente em vetores SSRF, bypass de guards e configurações inseguras silenciosas em deployments públicos.

**2. Estabilidade do CLI Interativo**
- [#3600](https://github.com/HKUDS/nanobot/issues/3600) + [#3609](https://github.com/HKUDS/nanobot/pull/3609) — Mensagens de retry causando garble ANSI
- [#3601](https://github.com/HKUDS/nanobot/pull/3601) — Display baseado em painéis para respostas do agente

**3. Suporte Multimídia**
- [#3604](https://github.com/HKUDS/nanobot/issues/3604) + [#3607](https://github.com/HKUDS/nanobot/pull/3607) — Voice messages do WhatsApp não funcionavam

**4. Concorrência de Subagentes**
- [#3611](https://github.com/HKUDS/nanobot/issues/3611) + [#3615](https://github.com/HKUDS/nanobot/pull/3615) — Limitar subagentes simultâneos para evitar OOM em LLMs locais

---

## 5. Bugs e Estabilidade

### Bugs Reportados Abertos

| Severidade | Issue | Descrição | Link |
|------------|-------|-----------|------|
| **Alta** | #3605 | Safety guard abort dropa turn silenciosamente — usuário não recebe erro nem retry | [Issue #3605](https://github.com/HKUDS/nanobot/issues/3605) |
| **Alta** | #3611 | Múltiplos subagentes simultâneos causam OOM em servidores LLM locais (Ollama, mlx_lm) | [Issue #3611](https://github.com/HKUDS/nanobot/issues/3611) |
| **Média** | #3604 | WhatsApp voice messages não são baixadas para transcrição | [Issue #3604](https://github.com/HKUDS/nanobot/issues/3604) |

### Bugs Corrigidos Recentemente

| Severidade | Issue | Correção | Status |
|------------|-------|----------|---------|
| **Crítica** | #3599 | v0.1.5.post3 causava falsos positivos em `/dev/null` | [PR #3613](https://github.com/HKUDS/nanobot/pull/3613) |
| **Crítica** | #3600 | Mensagens de retry misturadas ao stream no CLI | [PR #3609](https://github.com/HKUDS/nanobot/pull/3609) |
| **Média** | #3606 | Jobs cron desapareciam após restart do container | [PR #3606](https://github.com/HKUDS/nanobot/pull/3606) |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features em Desenvolvimento

| Feature | PR | Descrição | Relevância |
|---------|-----|-----------|------------|
| **Logout de Providers OAuth** | [#3612](https://github.com/HKUDS/nanobot/pull/3612) | Comando `nanobot provider logout <provider>` para OpenAI Codex e GitHub Copilot | [Issue #2665](https://github.com/HKUDS/nanobot/issues/2665) |
| **Limitação de Subagentes Concorrentes** | [#3615](https://github.com/HKUDS/nanobot/pull/3615) | Config `maxConcurrentSubagents` com semáforo asyncio | Issue #3611 |
| **HookCenter Plugin System** | [#3564](https://github.com/HKUDS/nanobot/pull/3564) | Sistema de hooks tipado com suporte a plugins via `entry_points` | Arquitetura |
| **Display Panelado no CLI** | [#3601](https://github.com/HKUDS/nanobot/pull/3601) | Nova UI baseada em painéis para terminal | UX |
| **Telegram Group Allowlist** | [#2867](https://github.com/HKUDS/nanobot/pull/2867) | Controle de acesso por grupo Telegram com fallback | ACL |
| **Desacoplamento de Heartbeat** | [#1443](https://github.com/HKUDS/nanobot/pull/1443) | Heartbeat agora raciocina silenciosamente por padrão | Configurabilidade |

### Sinais de Roadmap

1. **Segurança em profundidade**: Foco contínuo em SSRF, bypass de guards e hardening de deployments públicos
2. **Estabilidade de CLI**: Melhorias de UX interativo (panels, output limpo)
3. **Suporte a LLMs locais**: Controle de concorrência para hardware consumidor
4. **Sistema de plugins**: HookCenter indica movimento hacia extensibilidade

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Dor | Cenário | Impacto |
|-----|---------|---------|
| **Falta de logout OAuth** | Usuário migrou de conta OpenAI Codex (team → Plus) e não consegue re-autenticar | [Issue #2665](https://github.com/HKUDS/nanobot/issues/2665) |
| **Safety guard muito agressivo** | Comandos legítimos como `rm file.txt 2>/dev/null` bloqueados após upgrade | [Issue #3599](https://github.com/HKUDS/nanobot/issues/3599) |
| **Mensagens de erro invisíveis** | Safety guard aborta turn sem notificar usuário no Telegram | [Issue #3605](https://github.com/HKUDS/nanobot/issues/3605) |
| **WhatsApp voice broken** | Voice messages não são processadas, quebrando fluxos de áudio | [Issue #3604](https://github.com/HKUDS/nanobot/issues/3604) |
| **Garble ANSI no SSH** | Retry messages causam乱码 em terminais remotos | [Issue #3600](https://github.com/HKUDS/nanobot/issues/3600) |

### Usos Observados

- **Agentes pessoais com OAuth**: Autenticação em provedores como OpenAI Codex e GitHub Copilot
- **WhatsApp como canal**: Integração de mensagens de voz
- **LLMs locais**: Servidores Ollama/MLX em hardware consumidor
- **CLI interativo**: Uso principal via `nanobot chat`
- **Agentes scheduled**: Cron jobs para automação (ex: "Daily Loving Message")

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta há >30 dias

| Issue | Título | Idade | Prioridade |
|-------|--------|-------|------------|
| [#2665](https://github.com/HKUDS/nanobot/issues/2665) | How to re-authenticate OpenAI Codex provider after account change? | ~34 dias | **Alta** (feature request marcada como "good first issue") |
| [#1443](https://github.com/HKUDS/nanobot/pull/1443) | feat: decouple heartbeat reasoning from notification | ~63 dias (PR) | **Média** — Feature request antiga aguardando merge |

### PRs Antigos com Atividade Recente

| PR | Título | Status | Observação |
|----|--------|--------|------------|
| [#3254](https://github.com/HKUDS/nanobot/pull/3254) | fix(sdk): populate RunResult.tools_used and messages | Aberto | Aguardando review há ~17 dias |
| [#3255](https://github.com/HKUDS/nanobot/pull/3255) | feat(security): enforce history.jsonl protection | Aberto | Aguardando merge; dependência de #3240 |
| [#3252](https://github.com/HKUDS/nanobot/pull/3252) | fix(security): detect non-http schemes in SSRF scan | Aberto | Foco em segurança; precisa review |
| [#3235](https://github.com/HKUDS/nanobot/pull/3235) | fix(security): fail closed on DNS failure | Aberto | SSRF protection; precisa review |

---

## Indicadores de Saúde do Projeto

| Indicador | Status | Tendência |
|-----------|--------|-----------|
| **Atividade de Issues** | 6 em 24h (4 abertas, 2 fechadas) | ✅ Saudável |
| **Atividade de PRs** | 23 em 24h (16 abertas, 7 fechadas) | ✅ Muito ativo |
| **Bugs críticos abertos** | 2 (OOM em subagentes, silent abort) | ⚠️ Requer atenção |
| **Débito técnico** | Múltiplos PRs de segurança aguardando (~4) | ⚠️ Priorizar reviews |
| **Comunidade** | Contribuidores únicos ativos (múltiplos autores) | ✅ Diversificado |

---

*Relatório gerado automaticamente com base nos dados do GitHub de [HKUDS/nanobot](https://github.com/HKUDS/nanobot) em 2026-05-04.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-05-04

---

## 1. Panorama do dia

O Hermes Agent mantém alta atividade comunitária com **50 issues e 50 PRs atualizados nas últimas 24h**, indicando um ecossistema vibrante. **Nenhuma release foi publicada hoje**, mas o desenvolvimento está focado em estabilização (3 issues fechadas) e introdução de features solicitadas. A distribuição de prioridades mostra 2 bugs P1 em aberto (autenticação Anthropic e hang do gateway), 11 bugs/features P2, e 18 itens P3 — evidenciando trabalho contínuo em qualidade e UX. A proporção de 47 issues abertas vs. 3 fechadas sugere backlog crescente, mas com atenção ativa da comunidade.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

O projeto encontra-se em ciclo de desenvolvimento ativo sem release tagada para hoje. Users em produção devem acompanhar o branch `main` para hotfixes críticos (como o P0 de segurança #19333).

---

## 3. Progresso do Projeto

### PRs merged/fechados hoje (4 itens)

| # | Título | Impacto | Link |
|---|--------|---------|------|
| **#19349** | `fix(debug): redact log content at upload time` | **Segurança/Privacidade** — Aplica `redact_sensitive_text` com `force=True` em logs antes do upload ao pastebin. Logs em disco permanecem originais, mas compartilhamentos são automaticamente redigidos. Fecha #19316. | [PR #19349](https://github.com/NousResearch/hermes-agent/pull/19349) |
| **#19347** | `chore: remove embedded BusinessOS tree` | **Manutenção** — Remove árvore BusinessOS legada após extração para repositório standalone. Reduz tamanho do monorepo. | [PR #19347](https://github.com/NousResearch/hermes-agent/pull/19347) |
| **#19350** | `fix(kanban): use shared board path for profile workers` | **Bugfix Kanban** — Corrige caminho do `kanban.db` para workers com `-p <profile>`, garantindo que usem o board compartilhado ao invés do local do perfil. Resolve #19348. | [PR #19350](https://github.com/NousResearch/hermes-agent/pull/19350) |
| **#19314/relacionado** | Issue #19214 fechada (terminal.cwd foot-gun) | **UX/CLI** — Corrigido problema onde `hermes setup terminal` prendia CLI ao `$HOME`. Agora CLI/TUI usam diretório de lançamento. | [Issue #19214](https://github.com/NousResearch/hermes-agent/issues/19214) |

### PRs em destaque em revisão ativa

| # | Título | Componente | Prioridade | Link |
|---|--------|------------|------------|------|
| **#19333** | `fix: remove INSECURE_NO_AUTH webhook authentication bypass` | Gateway/Webhook | **P0** | [PR #19333](https://github.com/NousResearch/hermes-agent/pull/19333) |
| **#19308** | `Add native vision path for main models` | Agent/Vision | P2 | [PR #19308](https://github.com/NousResearch/hermes-agent/pull/19308) |
| **#19326** | `perf(mcp): add discover_mcp_tools_async()` | MCP | P2 | [PR #19326](https://github.com/NousResearch/hermes-agent/pull/19326) |
| **#8427** | `feat(vertex): add Vertex AI provider` | Provider/Gemini | P3 | [PR #8427](https://github.com/NousResearch/hermes-agent/pull/8427) |
| **#16749** | `feat: circuit breaker with compression model judgment` | Agent | P3 | [PR #16749](https://github.com/NousResearch/hermes-agent/pull/16749) |
| **#7656** | `feat: add ask_advisor tool for multi-model guidance` | Agent/Tools | P3 | [PR #7656](https://github.com/NousResearch/hermes-agent/pull/7656) |

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários + reações)

| # | Título | Comentários | 👍 | Categoria | Link |
|---|--------|-------------|----|-----------|------|
| **#8430** | Bug: `context_length` ignorado em modelos <64k tokens | 6 | 0 | Bug | [Issue #8430](https://github.com/NousResearch/hermes-agent/issues/8430) |
| **#15080** | Bug: Claude Max OAuth rejeita requisições com HTTP 400 | 6 | 0 | Bug (P1) | [Issue #15080](https://github.com/NousResearch/hermes-agent/issues/15080) |
| **#5712** | Feature: True Autonomy — Cron injetado em sessões live | 6 | **4** | Feature | [Issue #5712](https://github.com/NousResearch/hermes-agent/issues/5712) |
| **#6839** | Feature: Lazy Tool Schema Loading (two-pass) | 4 | **7** | Feature (P3) | [Issue #6839](https://github.com/NousResearch/hermes-agent/issues/6839) |
| **#2667** | Feature: Current-session context buffer | 3 | 2 | Feature | [Issue #2667](https://github.com/NousResearch/hermes-agent/issues/2667) |

### Análise das demandas quentes

1. **Performance/Tamanho de Contexto (#6839, #5712):** A comunidade demonstra forte interesse em reduzir overhead de tokens (~3,500-5,000 por chamada com 50+ tools). A feature "True Autonomy" (#5712) com 4 👍 sugere demanda por automação de cronjobs em sessões live.

2. **Autenticação/Provider (#15080, #19046):** Dois bugs relacionados a integrações com Anthropic — um sobre OAuth em Claude Max, outro sobre branding excessivo detectado pela API. Isso indica tensões com políticas de uso de第三方 harnesses.

3. **Configuração e Defaults (#19214 fechado, #19286):** Usuários enfrentam armadilhas silenciosas em configurações, especialmente `terminal.cwd` e mudanças automáticas de provider/model após restart.

---

## 5. Bugs e Estabilidade

### Bugs P1 (Críticos — atenção imediata)

| # | Título | Componente | Status | Link |
|---|--------|------------|--------|------|
| **#15080** | Claude Max 20x subscription rejeita requests com HTTP 400 | Provider/Anthropic | OPEN | [Issue #15080](https://github.com/NousResearch/hermes-agent/issues/15080) |
| **#14128** | Gateway shutdown hangs causando PID file race | Gateway | OPEN | [Issue #14128](https://github.com/NousResearch/hermes-agent/issues/14128) |

### Bugs P2 (Altos — impacto significativo)

| # | Título | Componente | Link |
|---|--------|------------|------|
| **#19214** | `terminal.cwd` é foot-gun (CLI/TUI presos ao $HOME) | CLI/TUI | [Issue #19214](https://github.com/NousResearch/hermes-agent/issues/19214) *(fechado)* |
| **#19294** | `_chromium_installed()` ignora `AGENT_BROWSER_EXECUTABLE_PATH` | Browser | [Issue #19294](https://github.com/NousResearch/hermes-agent/issues/19294) |
| **#5729** | Telegram resolver failure + degraded-state detection ausente | Gateway/Telegram | [Issue #5729](https://github.com/NousResearch/hermes-agent/issues/5729) |
| **#19236** | Slack `send_message` não abre DMs por @username | Slack | [Issue #19236](https://github.com/NousResearch/hermes-agent/issues/19236) |
| **#19287** | Imagens Telegram chegam como path, não como vision content | Vision/Telegram | [Issue #19287](https://github.com/NousResearch/hermes-agent/issues/19287) |
| **#19286** | Provider/Model auto-switch causa 404 silencioso | Config | [Issue #19286](https://github.com/NousResearch/hermes-agent/issues/19286) |
| **#19244** | `session_search` retorna vazio após crash | Memory | [Issue #19244](https://github.com/NousResearch/hermes-agent/issues/19244) |
| **#6838** | Frequent `RemoteProtocolError` com MiniMax provider | Provider/MiniMax | [Issue #6838](https://github.com/NousResearch/hermes-agent/issues/6838) |
| **#11020** | Browser cleanup mata sessões headed/persistent | Browser | [Issue #11020](https://github.com/NousResearch/hermes-agent/issues/11020) |
| **#5892** | `show_reasoning` não exibe extended-thinking da Anthropic | Agent/Anthropic | [Issue #5892](https://github.com/NousResearch/hermes-agent/issues/5892) |

### Bugs P3 (Médios)

- **#19239:** Xiaomi TokenPlan normaliza dots em hifens em IDs de modelos
- **#19293:** Curator misclassifica skills com nome non-ASCII como agent-created
- **#19348:** Kanban workers com `-p <profile>` usam board local (corrigido em #19350)
- **#11529:** Context bursting em sessões longas (fechado)
- **#14420:** Agent não consegue contexto em conversas anteriores

### Bug P0 em correção (PR #19333)

- **#19333:** Remoção do bypass `INSECURE_NO_AUTH` em webhooks — **todas as rotas agora exigem HMAC válido**.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features com maior potencial (comentários + thumbs-up)

| # | Título | Componente | 👍 | Link |
|---|--------|------------|-----|------|
| **#6839** | Lazy Tool Schema Loading (two-pass) | Agent/Tools | **7** | [Issue #6839](https://github.com/NousResearch/hermes-agent/issues/6839) |
| **#5712** | True Autonomy — Cron injetado em sessões live | Agent/Cron | **4** | [Issue #5712](https://github.com/NousResearch/hermes-agent/issues/5712) |
| **#17649** | Semantic Skill Retrieval com SQLite FTS5 | Skills | 0 | [Issue #17649](https://github.com/NousResearch/hermes-agent/issues/17649) |
| **#2667** | Current-session context buffer pesquisável | Memory | 2 | [Issue #2667](https://github.com/NousResearch/hermes-agent/issues/2667) |
| **#13332** | Hybrid Tool Pre-Selection (RAG-style) | Tools | 1 | [Issue #13332](https://github.com/NousResearch/hermes-agent/issues/13332) |

### Novas features submitted hoje (2026-05-03/04)

| # | Título | Escopo | P | Link |
|---|--------|--------|---|------|
| **#19324** | Policy para aprovação de write operations em self-improvement | Skills/Agent | P3 | [Issue #19324](https://github.com/NousResearch/hermes-agent/issues/19324) |
| **#19320** | Adicionar Codex/OpenAI `web.run` como search provider | Web/OpenAI | P3 | [Issue #19320](https://github.com/NousResearch/hermes-agent/issues/19320) |
| **#19344** | Planning Consultant via `/consult` | Agent | P3 | [Issue #19344](https://github.com/NousResearch/hermes-agent/issues/19344) |
| **#13072** | CLI Auto-Queue Mode com Smart Interrupt | CLI | P3 | [Issue #13072](https://github.com/NousResearch/hermes-agent/issues/13072) |
| **#10835** | Expor Hermes memory via MCP server | MCP/Memory | P3 | [Issue #10835](https://github.com/NousResearch/hermes-agent/issues/10835) |

### Sinais de roadmap inferidos

1. **Performance de tokens:** Lazy loading (#6839), FTS5 skills (#17649), hybrid pre-selection (#13332) — todos apontando para necessidade de otimizar contexto.
2. **Multi-provider enterprise:** Vertex AI (#8427), autenticação robusta (OAuth #15080), MCP extensibility (#19326, #10835).
3. **Autonomia avançada:** True Autonomy (#5712), Ask Advisor (#7656), Shield Kernel (#19345), circuit breaker (#16749).
4. **Platform expansion:** Telegram robust (#5729, #19287), Slack DMs (#19236), BlueBubbles (#17503).

---

## 7. Resumo de Feedback dos Usuários

### Dores reais identificadas

| Dor | Evidência | Prioridade |
|-----|----------|------------|
| **Config é pegadinha (foot-gun)** | #19214: `terminal.cwd` prende CLI ao $HOME permanentemente após setup | Alta |
| **Contexto explodindo em sessões longas** | #11529: "cannot press anything or type any message" | Alta |
| **Autenticação quebrada com subscriptions** | #15080: Claude Max 20x OAuth rejeitado | Crítica |
| **Browser tools inacessíveis** | #19294: mesmo com Chrome instalado, tools não funcionam | Alta |
| **Memória não persiste corretamente** | #19244, #14420: agente "não lembra" contexto anterior | Alta |
| **Overhead de tokens inaceitável** | #6839: 3,500-5,000 tokens por chamada mesmo sem necessidade | Média-Alta |
| **Self-improvement muito agressivo** | #19324: agent fez `git add; commit; push` sem aprovação | Média |

### Cenários de uso emergentes

- **Gateway headless em produção:** Usuários rodando Hermes via `systemd` enfrentam race conditions em boot (#14128, #5729).
- **Modelos locais (Ollama):** Feature requests para lazy loading e advisor tool indicam uso越来越多 de modelos locais.
- **Integração empresarial:** Vertex AI (#8427), BlueBubbles (#17503), Feishu (#5729) mostram expansão para ambientes corporativos.

### Satisfação/Insatisfação

**Positivo:**
- Kanban e cron jobs funcionando bem (vários PRs de refinamento, não de bug).
- MCP discovery sendo otimizado (#19326) — comunidade reconheceu problema de startup.

**Negativo:**
- Config system é foco de reclamações (#19214, #19286, #15080).
- Browser e vision integration ainda imaturas (#19294, #19287, #5892).
- Memória e contexto são pontos de dor recorrentes.

---

## 8. Backlog que Merece Atenção

### Issues sem resposta ou estagnadas

| # | Título | Criado | Comentários | Prioridade | Link |
|---|--------|--------|-------------|------------|------|
| **#8427** | Vertex AI provider | 2026-04-12 | 0 | P3 | [Issue #8427](https://github.com/NousResearch/hermes-agent/issues/8427) |
| **#7656** | ask_advisor tool | 2026-04-11 | 0 | P3 | [Issue #7656](https://github.com/NousResearch/hermes-agent/issues/7656) |
| **#6839** | Lazy Tool Schema Loading | 2026-04-09 | 4 | P3 | [Issue #6839](https://github.com/NousResearch/hermes-agent/issues/6839) |
| **#6838** | MiniMax RemoteProtocolError | 2026-04-09 | 2 | P2 | [Issue #6838](https://github.com/NousResearch/hermes-agent/issues

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-05-04

## 1. Panorama do dia

O PicoClaw mantém alto ritmo de desenvolvimento, com **5 issues e 15 PRs atualizados nas últimas 24h**. A atividade reflete um projeto saudável e diversificado: enquanto bugs críticos (como o crash do Gemini com schemas MCP) já possuem fix merges, novos recursos multimídia e de subagentes estão em avaliação. A release nightly `v0.2.8-nightly.20260503` consolida avanços recentes, e a taxa de PRs abertos (11) sugere pipeline robusto de contributions. O ecossistema de providers está em expansão ativa, com contribuições voltadas a multimídia (vídeo, áudio) e integração com novos provedores como Xiaomi Mimo.

---

## 2. Lançamentos

### 🌙 Nightly Build — v0.2.8-nightly.20260503.a94ba821
- **Tipo:** Build automatizado, não é release estável
- **Link:** [Full Changelog](https://github.com/sipeed/picoclaw/compare/v0.2.8...main)
- **Nota:** Este build reflete o estado do branch `main` após os PRs merged em 2026-05-03. Uso em produção não recomendado — serve para testing de features em desenvolvimento.

**Recomendação:** Para ambientes de produção, aguardar próxima tag estável (provavelmente `v0.2.8` ou superior).

---

## 3. Progresso do Projeto

### PRs Merged/Fechados (últimas 24h)

| PR | Autor | Domínio | Resumo | Impacto |
|---|---|---|---|---|
| [#2681](https://github.com/sipeed/picoclaw/pull/2681) | afjcjsbx | provider (MCP/Gemini) | Sanitização de schemas MCP para Gemini function calling | ✅ **Crítico** — Corrige crash HTTP 400 com ferramentas complexas |
| [#2717](https://github.com/sipeed/picoclaw/pull/2717) | LiusCraft | provider/agent | Detecção de erro "unsupported" em imagens DeepSeek vision | ✅ **Robustez** — Trata rejeição de `image_url` por providers estrictos |
| [#2669](https://github.com/sipeed/picoclaw/pull/2669) | david1gp | agent/config | Retry com backoff configurável para erros de rede | ✅ **Resiliência** — Reduz falhas por transient network errors |
| [#2735](https://github.com/sipeed/picoclaw/pull/2735) | dependabot | dependencies | Bump aws-sdk bedrockruntime 1.50.5 → 1.50.6 | 🔧 Maintenance |
| [#2735](https://github.com/sipeed/picoclaw/pull/2735) | dependabot | dependencies | Bump aws-sdk config 1.32.16 → 1.32.17 | 🔧 Maintenance |

**Destaques de impacto:**
- **Gemini + MCP:** O PR #2681 resolve o crash com ferramentas complexas (`$ref`, `anyOf`, `$defs`) — issue #2668 tinha 1 upvote e impacto em qualquer usuário com integração Notion/MCP + Gemini.
- **DeepSeek streaming:** Fix em andamento no PR #2740 para capturar `reasoning_content` em streaming — relevante para operadores de thinking-mode.
- **Network resilience:** PR #2669 adiciona retry backoff configurável — aumenta estabilidade em ambientes instáveis.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento

| Issue | Tipo | Comentários | Reações | Descrição |
|---|---|---|---|---|
| [#2225](https://github.com/sipeed/picoclaw/issues/2225) | Enhancement (provider) | 10 | 0 | **Ollama cloud credentials** — Feature request para autenticação em provedor Ollama cloud (não-local) |
| [#2668](https://github.com/sipeed/picoclaw/issues/2668) | Bug (provider) | 1 | 1 | Gemini HTTP 400 com schemas MCP complexos — **RESOLVIDO via PR #2681** |

**Análise da demanda #2225 (Ollama cloud):**
- 10 comentários indica discussão substancial sobre necessidade real
- Atualmente PicoClaw suporta Ollama local, mas não Ollama cloud (terceiros)
- Demanda reflete cenário: usuários desejam usar modelos hospedados pelo Ollama (API key-based) além de instâncias locais
- **Sinal de roadmap:** Provedor cloud Ollama pode ser下一 funcionalidade de provider

### PRs com diskusião activa (baseado em complexidade)

| PR | Título | Complexidade |
|---|---|---|
| [#2696](https://github.com/sipeed/picoclaw/pull/2696) | MCP dynamic headers via channel context | 🔶 Média-alta |
| [#2754](https://github.com/sipeed/picoclaw/pull/2754) | Multi subagent parallel calls | 🔶 Alta |
| [#2752](https://github.com/sipeed/picoclaw/pull/2752) | Model configuration workflows | 🔶 Média |

---

## 5. Bugs e Estabilidade

### Bugs reportados (abertos)

| Issue | Severidade | Domínio | Descrição | Status |
|---|---|---|---|---|
| [#2753](https://github.com/sipeed/picoclaw/issues/2753) | 🟡 **Média** | build/config | "Build from source --> launcher does not exist" — Usuário com Ubuntu 24.04 seguindo README não encontra binário | **Aguardando triage** |
| [#2744](https://github.com/sipeed/picoclaw/issues/2744) | 🟡 **Média** | channel/config (Android) | Android v0.2.8 não acessa dados de tabs — Regressão específica de versão mobile | **Aguardando triage** |
| [#2749](https://github.com/sipeed/picoclaw/issues/2749) | 🟠 **Alta** (segurança?) | tool (Bash) | Bash avalia caminho relativo como absoluto — Pode permitir escape de sandbox | **PR #2750 em review** |

### Bugs resolvidos

| Issue | Domínio | Resolução |
|---|---|---|
| [#2668](https://github.com/sipeed/picoclaw/issues/2668) | MCP/Gemini | PR #2681 — Normalização de schemas antes do envio |

**Alerta de segurança potencial:**
> [#2749](https://github.com/sipeed/picoclaw/issues/2749) — O path scanner de Bash trata `archive/SKILL.md` como `/SKILL.md` (absoluto). PR #2750 propõe correção no exec guard. **Priority: Revisar com urgência.**

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features em pipeline

| PR | Título | Domínio | Status | Valor estratégico |
|---|---|---|---|---|
| [#2755](https://github.com/sipeed/picoclaw/pull/2755) | Streaming reasoning_content + video media support | provider/agent | 🔵 Draft/Aberto | Integração Xiaomi Mimo com multimodalidade completa |
| [#2754](https://github.com/sipeed/picoclaw/pull/2754) | Multi subagent parallel calls | agent | 🔵 Aberto | **Execução paralela de subagentes em uma única tool call** — Feature de alto valor para workflows complexos |
| [#2752](https://github.com/sipeed/picoclaw/pull/2752) | Model configuration workflows | config/web | 🔵 Aberto | Melhor UX: fetching de modelos upstream, validação por provider, teste de conectividade |
| [#2696](https://github.com/sipeed/picoclaw/pull/2696) | MCP dynamic headers per-request | channel/mcp | 🔵 Aberto | Headers customizados de channels (Discord, Telegram) para MCP servers |
| [#2647](https://github.com/sipeed/picoclaw/pull/2647) | web_search YAML support + DuckDuckGo default | config/tool | 🔵 Aberto | Configuração de search via YAML, provider default ativado |
| [#2225](https://github.com/sipeed/picoclaw/issues/2225) | Ollama cloud credentials | provider | 🟡 Em discussão (10 comments) | Expansão de suporte a provedores cloud |

**Observações:**
- Feature **multi subagent parallel calls** (#2754) representa evolução arquitetural significativa — permite orquestração de múltiplos subagentes simultaneamente
- **Model configuration UI** (#2752) indica foco em experiência do usuário final (web UI)
- **Xiaomi Mimo** emerge como novo provider de interesse, com suporte multimodal (chat, imagem, vídeo, áudio)

---

## 7. Resumo de Feedback dos Usuários

### Dores reportadas

| Dor | Frequência | Impacto | Link |
|---|---|---|---|
| Crash ao usar Gemini + MCP tools com schemas complexas | 🟢 Alta relevância (1 usuário reportou, resolvido rapidamente) | Alto — bloqueia uso com Notion e similares | [#2668](https://github.com/sipeed/picoclaw/issues/2668) |
| Build from source não gera binário `picoclaw-launcher` | 🟡 1 report | Médio — quebra onboarding de desenvolvedores | [#2753](https://github.com/sipeed/picoclaw/issues/2753) |
| Android v0.2.8: abas não retornam dados | 🟡 1 report | Médio — usability regressão mobile | [#2744](https://github.com/sipeed/picoclaw/issues/2744) |
| DeepSeek streaming perde reasoning_content (thinking tokens) | 🟡 1 PR | Médio — quebra feature de pensamento explícito | [#2740](https://github.com/sipeed/picoclaw/pull/2740) |
| Sandbox bash: caminhos relativos escapam segurança | 🟠 1 report (com PR) | Alto — potenciais riscos de segurança | [#2749](https://github.com/sipeed/picoclaw/issues/2749) |

### Padrões identificados

1. **Integração MCP está crescendo** — Problemas com Gemini + MCP indican adoção ativa de ferramentas Model Context Protocol
2. **Mobile (Android) é área de atenção** — Regressão de v0.2.8 com abas indica necessidade de teste de regression em plataformas mobile
3. **Developers enfrentam fricção no build** — Documentação/setup precisa de verificação contra Ubuntu 24.04
4. **Providers multimídia em expansão** — DeepSeek, Xiaomi Mimo, Ollama cloud demonstram demanda por variety de provedores

---

## 8. Backlog que Merece Atenção

### Issues aguardando resposta há >7 dias

| Issue | Criado | Atualizado | Tipo | Prioridade |
|---|---|---|---|---|
| [#2462](https://github.com/sipeed/picoclaw/issues/2462) | 2026-04-09 | 2026-05-03 | Bug (codex streaming/telegram) | 🟡 **Média** — PR relacionado em aberto |
| [#2239](https://github.com/sipeed/picoclaw/pull/2239) | 2026-04-01 | 2026-05-03 | Enhancement (docker privileged) | 🟡 **Média** — Aguarda merge/review |
| [#2225](https://github.com/sipeed/picoclaw/issues/2225) | 2026-03-31 | 2026-05-03 | Feature (Ollama cloud) | 🟡 **Média** — 10 comments, discussão ativa |

### PRs com stale labels (requerem atenção)

| PR | Stale | Domínio | Observação |
|---|---|---|---|
| [#2647](https://github.com/sipeed/picoclaw/pull/2647) | ✅ (stale) | tool/config | web_search YAML + DuckDuckGo — Boa feature, avaliar merge |
| [#2669](https://github.com/sipeed/picoclaw/pull/2669) | ✅ | agent | Network retry — **Recentemente merged** |
| [#2681](https://github.com/sipeed/picoclaw/pull/2681) | ✅ | provider | Gemini MCP fix — **Recentemente merged** |

### Recomendação de ação

1. **@maintainers:** Revisar PR #2750 (Bash sandbox) com urgência — risco de segurança
2. **@maintainers:** Triar issues #2753 (build), #2744 (Android) — impacto em onboarding
3. **Review:** PR #2647 (web_search YAML) merece merge — feature útil e stale
4. **Roadmap:** Avaliar feature Ollama cloud (#2225) para planejamento de próxima versão

---

## Scorecard Final

| Métrica | Status |
|---|---|
| 🔵 Atividade (PRs/Issues atualizados) | ✅ Alta — 15 PRs, 5 Issues |
| 🟢 Bugs críticos abertos | ✅ Nenhum — crash Gemini foi resolvido |
| 🟡 Bugs médios abertos | ⚠️ 3 (Android, build, path security) |
| 🔶 Features em desenvolvimento | ✅ 6+ PRs de enhancement |
| 🟢 Dependências atualizadas | ✅ AWS SDK atualizado |
| 🟡 Backlog stale | ⚠️ 3 items requerem atenção |

**Veredicto:** Projeto em **saúde boa**. Atividade elevada, bugs críticos resolvidos rapidamente, pipeline de features robusto. Atenção requerida em: segurança do sandbox Bash, regressão Android, e stale backlog de PRs.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório de Projeto: IronClaw
**Data:** 2026-05-04 | **Período:** Últimas 24h

---

## 1. Panorama do dia

O IronClaw apresenta alta atividade de desenvolvimento com 33 PRs e 20 issues atualizados nas últimas 24h. O destaque é a iniciativa **Reborn** — uma grande refatoração arquitetural — que domina o backlog com 15+ issues abertas e um PR de integração massivo (#3230) em curso para consolidar o substrato na branch principal. A comunidade reportou bugs críticos relacionados ao Gemini API e persistência de configuração, enquanto novos contribuidores (abbyshekit) avançam em features de portfólio/NEAR intents.

---

## 2. Lançamentos

**Nenhum release novo** registrado nas últimas 24h. O projeto permanece na versão `v0.27.0` (último release estável). O PR #3230 menciona que o Reborn será landed "behind default-off gates", indicando que feature flags controlarão a ativação até a cutover pública.

---

## 3. Progresso do Projeto

### PRs fechados/merged

| # | PR | Resumo | Impacto |
|---|-----|--------|---------|
| [#3226](https://github.com/nearai/ironclaw/pull/3226) | fix(llm): preserve Gemini thought_signature | Corrige tool-calling persistente com modelos Gemini 3.x que falhava com HTTP 400. Threads `thought_signature` através de call sites. | **Alto** — resolve bug crítico |
| [#3234](https://github.com/nearai/ironclaw/pull/3234) | ci(e2e): replace deleted preflight test | Substitui teste removido por surface `tool_activate` após mudança de contrato no engine-v2. | **Baixo** — manutenção CI |
| [#3170](https://github.com/nearai/ironclaw/pull/3170) | test(reborn): add host runtime vertical gates | Cobertura de gates para cursor/gap behavior e mount attenuation. | **Baixo** — cobertura de teste |

### PRs em destaque (open)

| # | PR | Tamanho | Status |
|---|-----|---------|--------|
| [#3230](https://github.com/nearai/ironclaw/pull/3230) | Land Reborn substrate into main | **XL** | Esteira principal — reduz branch drift |
| [#3171](https://github.com/nearai/ironclaw/pull/3171) | Add Reborn event store backends | **XL** | PostgreSQL, libSQL, JSONL backends |
| [#3212](https://github.com/nearai/ironclaw/pull/3212) | Add Reborn event projection service | **XL** | `EventProjectionService`, ThreadTimeline, RunStatusProjection |
| [#3235](https://github.com/nearai/ironclaw/pull/3235) | test(e2e): unblock Live Canary auth lanes | **S** | Desbloqueia testes OAuth após contract change |

---

## 4. Temas Quentes da Comunidade

### Issues com maior atividade

| # | Título | Comentários | Tag |
|---|--------|-------------|-----|
| [#3016](https://github.com/nearai/ironclaw/issues/3016) | Reborn cutover blocker: add reference AgentLoopHost facade | 3 | reborn, blocker |
| [#3013](https://github.com/nearai/ironclaw/issues/3013) | Reborn cutover blocker: add kernel TurnCoordinator | 1 | reborn, blocker |
| [#3225](https://github.com/nearai/ironclaw/issues/3225) | bug: gemini API-key backend fails tool-calling | 1 | bug, llm |
| [#3228](https://github.com/nearai/ironclaw/issues/3228) | Terminal corruption after /quit | 1 | bug, channel/cli |

### Análise das demandas

**Reborn Architecture** — 15+ issues abertas com prefixo `[reborn]` indicam trabalho massivo em:
- `TurnCoordinator` e `TurnRunner` execution model
- Loop support services (`PromptContextService`, `MemoryPromptContextService`)
- `ToolSurfaceService` / `CapabilityCatalog`
- Crate boundary para `ironclaw_turns`
- Cancellation semantics e follow-up steering policy

**NEAR Intents features** — PRs de abbyshekit (#3218, #3221-3224) adicionam funcionalidades de portfólio: DCA multi-ativo, validação de estratégias, compilador NL→ação.

---

## 5. Bugs e Estabilidade

### Por Severidade

| Severidade | # | Título | Escopo |
|------------|---|--------|--------|
| **CRÍTICA** | [#3229](https://github.com/nearai/ironclaw/issues/3229) | LLM provider fallback persiste no DB, destruindo config permanentemente | config/mod.rs |
| **ALTA** | [#3225](https://github.com/nearai/ironclaw/issues/3225) | Gemini API-key fails tool-calling com missing thought_signature | llm |
| **ALTA** | [#3228](https://github.com/nearai/ironclaw/issues/3228) | Terminal corruption após /quit em SSH/noVNC/screen/tmux | channel/cli |
| **MÉDIA** | [#3227](https://github.com/nearai/ironclaw/issues/3227) | TUI text copy falha em ambientes headless (arboard precisa X11/Wayland) | channel/cli |
| **MÉDIA** | [#3201](https://github.com/nearai/ironclaw/issues/3201) | Tool use para Deepseek não funciona | llm |

### Análise

- **Bug crítico #3229**: O fallback de provider LLM persiste no DB, causando reversion permanente da configuração do usuário após restart. Requer atenção imediata.
- **Padrão Gemini issues**: Problema recorrente com `thought_signature` em tool calls — afetando múltiplos modelos (gemini-3-flash-preview, gemini-3.1-flash-lite-preview). PR #3226 endereça parcialmente.
- **Issue #3214** foi fechada (relacionada a thoughtSignature no Cloud Code SSE handler), mas bugs similares continuam surgindo.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features

| # | Título | Escopo | Contribuidor |
|---|--------|--------|--------------|
| [#3238](https://github.com/nearai/ironclaw/issues/3238) | Define cancellation semantics | reborn | serrrfirat |
| [#3237](https://github.com/nearai/ironclaw/issues/3237) | Define runtime HTTP syscall contract | reborn | serrrfirat |
| [#3236](https://github.com/nearai/ironclaw/issues/3236) | Define same-thread follow-up e steering policy | reborn | serrrfirat |
| [#3232](https://github.com/nearai/ironclaw/issues/3232) | Define LoopExit contract | reborn | serrrfirat |
| [#3231](https://github.com/nearai/ironclaw/issues/3231) | Follow-up architecture deepening | reborn | serrrfirat |

### Sinais de Roadmap

1. **Reborn cutover blocker chain** (#2987 como tracker principal) — indica foco em arquitetura interna antes de features visíveis
2. **NEAR Intents integration** — novo contribuidor abbyshekit adicionando funcionalidades de trading/portfólio
3. **WASM channels activation** (#3233) — expansão de canais além de setups tradicionais

---

## 7. Resumo de Feedback dos Usuários

### Dores reportadas

| Categoria | Problema | Impacto |
|-----------|----------|---------|
| **LLM Integration** | Gemini API-key falhando em tool-calling; Deepseek tool use não funciona | Usuários presos sem funcionalidade |
| **Terminal** | Corrupção após /quit em ambientes remotos (SSH, tmux) | Usabilidade degradada em containers |
| **Configuração** | Fallback de provider persistindo, destruindo config customizada | Experiência frustrante em produção |
| **Headless** | Copy/paste no TUI falhando silenciamente sem X11 | Limitações em infraestrutura padrão |

### Tendências

- **Multi-provider instability**: Problemas recorrentes com Gemini e Deepseek sugerem necessidade de teste de regressão cross-provider
- **Edge cases não cobertos**: Ambientes containerizados/headless expõem gaps em UI e clipboard

---

## 8. Backlog que Merece Atenção

| # | Título | Criado | Atualizado | Status | Prioridade |
|---|--------|--------|------------|--------|------------|
| [#3016](https://github.com/nearai/ironclaw/issues/3016) | Reborn: Add reference AgentLoopHost facade | 2026-04-28 | 2026-05-03 | OPEN | Blocker |
| [#3013](https://github.com/nearai/ironclaw/issues/3013) | Reborn: Add kernel TurnCoordinator | 2026-04-28 | 2026-05-03 | OPEN | Blocker |
| [#3229](https://github.com/nearai/ironclaw/issues/3229) | LLM provider fallback persiste ao DB | 2026-05-03 | 2026-05-03 | OPEN | **Crítica** |
| [#2987](https://github.com/nearai/ironclaw/issues/2987) | Reborn architecture tracker | — | — | OPEN | Arquitetura |
| [#3031](https://github.com/nearai/ironclaw/issues/3031) | Reborn product-surface tracker | — | — | OPEN | Arquitetura |

---

## Resumo Executivo

| Indicador | Valor | Tendência |
|-----------|-------|-----------|
| Issues ativas | 19 | 🔴 Alta |
| PRs abertos | 30 | 🟡 Alta |
| PRs fechados | 3 | 🟢 Normal |
| Bugs críticos | 1 | 🔴 Requer ação |
| Release activity | 0 | 🟡 Aguardando Reborn |

**Saúde do projeto:** Atividade robusta com foco em arquitetura (Reborn). Bugs críticos requieren priorização, especialmente o fallback de provider LLM (#3229) que afeta produção. Recommend atenção imediata em estabilidade de providers antes do cutover Reborn.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do Projeto CoPaw — 2026-05-04

---

## 1. Panorama do Dia

O projeto CoPaw manteve alta atividade em 04 de maio de 2026, com **31 issues** e **16 pull requests** atualizados nas últimas 24 horas. A taxa de fechamento de issues foi expressiva (11 de 31), sugerindo boa capacidade de triagem. Entre os destaques do dia, destacam-se a preparação para a release **v1.1.6b1**, a adição de suporte a provedor **Volcengine**, e a correção de problemas críticos como o vazamento de memória em sessões com falhas e a falha de reconexão de canais após interrupções de rede. A comunidade demonstra engajamento ativo, com issues tocando desde基础设施建设 (cron scheduler, memory hooks) até qualidade de vida (system tray, deleção de mensagens individuais). **Não houve lançamento oficial** — a versão mais recente continua sendo v1.1.5.

---

## 2. Lançamentos

**Nenhum release foi publicado nas últimas 24 horas.**

O PR #4012 (`chore(version): bumping version to 1.1.6b1`) sinaliza que a versão **v1.1.6-beta.1** está em preparação. Aguarda-se merge e publicação para que as mudanças recentes — incluindo correções de memory hooks, resilient skill loading e novos provedores — sejam disponibilizadas aos usuários.

---

## 3. Progresso do Projeto

Os PRs merged/fechados hoje trouxe avanços significativos em múltiplas frentes:

| PR | Descrição | Impacto |
|----|-----------|---------|
| [#4013](https://github.com/agentscope-ai/QwenPaw/pull/4013) | Documentação atualizada para v1.1.5 | Infraestrutura |
| [#1642](https://github.com/agentscope-ai/QwenPaw/pull/1642) | Adição de sistema de códigos de erro | Diagnóstico e observabilidade |
| [#1055](https://github.com/agentscope-ai/QwenPaw/pull/1055) | Integração do provedor **MiniMax** (M2.5 e M2.5-highspeed) | Expansão de provedores |
| [#559](https://github.com/agentscope-ai/QwenPaw/pull/559) | Remoção de mensagens falhas da memória para evitar envenenamento de sessão | **Estabilidade** |

O PR [#559](https://github.com/agentscope-ai/QwenPaw/pull/559) é particularmente relevante: quando `query_handler` lança exceção (ex.: erro 400 de DashScope por URI de imagem malformado), a mensagem do usuário já havia sido adicionada à memória pelo `ReActAgent.reply()`. O `finally` block agora remove a mensagem falha antes de persistir, prevenindo sessões corrompidas.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários):

1. **[#3936](https://github.com/agentscope-ai/QwenPaw/issues/3936)** — "智能体之间是否可以完全隔离" (8 comentários, CLOSED)
   - **Demanda**: Isolamento de workspaces entre agentes, com configuração granular de permissões de arquivos
   - **Contexto**: Usuários querem限制 agente A acessar workspace de agente B; a file guard é global e usa blacklist

2. **[#1516](https://github.com/agentscope-ai/QwenPaw/issues/1516)** — "AudioContent not supported in Telegram channel" (5 comentários, OPEN)
   - **Demanda**: Suporte a mensagens de voz no Telegram
   - **Status**: PR #4021 em andamento para correção

3. **[#3977](https://github.com/agentscope-ai/QwenPaw/issues/3977)** — Memory search AttributeError (4 comentários, OPEN)
   - **Sintoma**: `AttributeError: 'list' object has no attribute 'get'` ao usar `memory_search`

4. **[#3991](https://github.com/agentscope-ai/QwenPaw/issues/3991)** — "Ollama 无法携带对话历史" (3 comentários, CLOSED)
   - **Demanda**: Perda de memória conversacional ao usar Ollama local
   - **Nota**: Funciona com APIs online — indica problema de обработка contexto específico para canal Ollama

### Patterns emergentes nos temas quentes:

- **Isolamento e segurança**: Múltiplas issues pedem controle granular sobre workspaces, arquivos de memória e permissões de agentes (#3936, #4020)
- **Suporte a canais**: Problemas recorrentes com Telegram (áudio), Ollama (contexto), Feishu/WeChat (interrupção)
- **Memória e contexto**: Sistema de memória é o maior ponto de dor — desde `memory_search` quebrado até gerenciamento de ciclo de vida de arquivos de memória

---

## 5. Bugs e Estabilidade

### Críticos

| Issue | Severidade | Descrição | Link |
|-------|------------|-----------|------|
| #4017 | 🔴 Alta | HEARTBEAT.md ativo causa falha de reconexão automática após interrupção de rede | [Link](https://github.com/agentscope-ai/QwenPaw/issues/4017) |
| #3976 | 🔴 Alta | Session cleanup cancela tarefas em execução após 10 min de timeout | [Link](https://github.com/agentscope-ai/QwenPaw/issues/3976) |
| #3977 | 🔴 Alta | `memory_search` lança AttributeError — índice nunca construído | [Link](https://github.com/agentscope-ai/QwenPaw/issues/3977) |
| #3019 | 🟠 Média | skill.json corrompe em UTF-8 após desinstalar skills com descrição em chinês | [Link](https://github.com/agentscope-ai/QwenPaw/issues/3019) |
| #4018 | 🟠 Média | `embedding_model_config` resetado para vazio após `qwenpaw update` | [Link](https://github.com/agentscope-ai/QwenPaw/issues/4018) |
| #4015 | 🟠 Média | Modelo local não executa em MacBook M5 Pro (ARM subprocess rodando em x86_64 via Rosetta) | [Link](https://github.com/agentscope-ai/QwenPaw/issues/4015) |

### Regressões e problemas recorrentes

- **Cron scheduler (#3986)**: Tarefas com `enabled=true` nunca são disparadas automaticamente — `last_run_at` permanece `null`
- **Config corruption (#3969)**: `loop_config.json` corrompe, causando `ValidationError` com `call_id=None`
- **Running Config API (#3980)**: Endpoint `/api/workspace/running-config` retorna 404 — já fechado, mas demonstra fragilidade em configurações de workspace

### Correções em curso

O PR [#4007](https://github.com/agentscope-ai/QwenPaw/pull/4007) ataca dois bugs críticos simultaneamente:
- **#3182**: `ReMeLightMemoryManager.start()` não era chamado — índice nunca construído
- **#3828**: embedding config escrita em `config.json` não sincronizada para `agent.json`

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features com alta demanda (comentários ≥ 2 ou 👍 significativo):

| Feature | Descrição | 👍 | Link |
|---------|-----------|----|------|
| System tray e minimizar para bandeja | Manter serviço rodando após fechar janela | 2 | [#2430](https://github.com/agentscope-ai/QwenPaw/issues/2430) |
| Fallback model | Trocar automaticamente para modelo reserva quando principal falha | 2 | [#4011](https://github.com/agentscope-ai/QwenPaw/issues/4011) |
| Excluir Heartbeat/Cron do Auto-Memory | Evitar que sessões automáticas sejam acumuladas como "experiência" | 1 | [#3944](https://github.com/agentscope-ai/QwenPaw/issues/3944) |
| Mid-task guidance | Guia intermediário durante execução de tarefa (estilo Codex) | 1 | [#4019](https://github.com/agentscope-ai/QwenPaw/issues/4019) |
| Visual shared area | Área gráfica para框选/标注 durante conversas | 2 | [#4002](https://github.com/agentscope-ai/QwenPaw/issues/4002) |
| Delete individual messages | Remover mensagens únicas do histórico | 1 | [#4001](https://github.com/agentscope-ai/QwenPaw/issues/4001) |
| Read-only protection for MEMORY/AGENTS/SOUL | Proteger arquivos críticos contra sobrescrita | 1 | [#4020](https://github.com/agentscope-ai/QwenPaw/issues/4020) |
| Auto-derive max_input_length | Calcular automaticamente threshold de compressão baseado no context window | 1 | [#4004](https://github.com/agentscope-ai/QwenPaw/issues/4004) |
| Feishu/WeChat interrupt | Capacidade de abortar tarefas em canais externos | 2 | [#4010](https://github.com/agentscope-ai/QwenPaw/issues/4010) |

### PRs de novas funcionalidades em review:

| PR | Feature | Status |
|----|---------|--------|
| [#3994](https://github.com/agentscope-ai/QwenPaw/pull/3994) | Provider **Volcengine** (火山引擎) + coding plan | OPEN, Under Review |
| [#3911](https://github.com/agentscope-ai/QwenPaw/pull/3911) | Plugin **GPT Image 2** tool | OPEN |
| [#3999](https://github.com/agentscope-ai/QwenPaw/pull/3999) | CLI `qwenpaw skills test` para validação de skills | OPEN |
| [#4009](https://github.com/agentscope-ai/QwenPaw/pull/4009) | Suporte a **Brazilian Portuguese (pt-BR)** | OPEN, Under Review |
| [#4007](https://github.com/agentscope-ai/QwenPaw/pull/4007) | `MemoryHook` — memória de longo prazo com vector search | OPEN |

### Análise de sinais de roadmap

As features mais solicitadas convergem para três eixos:
1. **Resiliência operacional**: fallback models, interrupt em canais externos, system tray
2. **Gestão de memória sofisticada**: lifecycle management, read-only protection, exclusion de sessões automáticas
3. **Interação multimodal**: área visual compartilhada, deleção de mensagens, mid-task guidance

A adição de provedor Volcengine (#3994) e a expansão de i18n (#4009) indicam estratégia de mercado internacional e diversificação de provedores na China.

---

## 7. Resumo de Feedback dos Usuários

### Dores recorrentes

| Dor | Descrição | Frequência |
|-----|-----------|------------|
| Perda de contexto/memória | Usuários de Ollama perdem histórico conversacional; memória search retorna vazio | Alta |
| Estabilidade de canais | Telegram não processa áudio; canais perdem conexão após network glitch | Alta |
| Config reset | Updates sobrescrevem configurações de embedding e providers | Média |
| Isolamento deficiente | Agentes acessam workspaces uns dos outros sem controle | Média |
| UX desktop | Fechar janela mata o serviço; não há minimize-to-tray | Média |

### Cenários de uso mencionados

- **Uso empresarial**: Integração com Feishu/WeChat para automação de equipes
- **Desenvolvimento local**: Usuários com Mac M-series ou Windows rodando modelos Ollama locais
- **Automação de tarefas**: Heartbeat, cron jobs, delegation entre agentes
- **Produtividade individual**: System tray, visual shared area, message deletion

### Satisfaction/Frustration signals

- **Satisfação implícita**: Issue #2430 (system tray) tem 2👍 e tom educado — indica usuário invested que solicita ao invés de abandonar
- **Frustração técnica**: Issues #3977, #4017, #3019 demonstram problemas quebvam tempo de setup e configuration
- **Feature request prolíficos**: ~10+ enhancement issues em 24h indica base de usuários ativa e exploratória

---

## 8. Backlog que Merece Atenção

### Issues sem resposta significativa (>3 dias sem interação da equipe):

| Issue | Idade | Título | Link |
|-------|-------|--------|------|
| #2430 | ~38 dias | System tray + minimize to tray | [Link](https://github.com/agentscope-ai/QwenPaw/issues/2430) |
| #3019 | ~27 dias | skill.json encoding corruption | [Link](https://github.com/agentscope-ai/QwenPaw/issues/3019) |
| #3984 | ~4 dias | context_check splitting user/assistant pairs | [Link](https://github.com/agentscope-ai/QwenPaw/issues/3984) |
| #3995 | ~3 dias | Enhanced memory management lifecycle | [Link](https://github.com/agentscope-ai/QwenPaw/issues/3995) |
| #4003 | ~2 dias | Ollama ARM64 subprocess issue | [Link](https://github.com/agentscope-ai/QwenPaw/issues/4003) |
| #4019 | ~1 dia | Mid-task guidance like Codex | [Link](https://github.com/agentscope-ai/QwenPaw/issues/4019) |

### PRs aguardando review há >3 dias:

| PR | Idade | Título | Link |
|----|-------|--------|------|
| #3928 | ~6 dias | Safe default timeout for delegate_external_agent | [Link](https://github.com/agentscope-ai/QwenPaw/pull/3928) |
| #3994 | ~3 dias | Volcengine provider | [Link](https://github.com/agentscope-ai/QwenPaw/pull/3994) |
| #4009 | ~2 dias | Brazilian Portuguese locale | [Link](https://github.com/agentscope-ai/QwenPaw/pull/4009) |
| #4005 | ~2 dias | WSL2 NAT documentation fix | [Link](https://github.com/agentscope-ai/QwenPaw/pull/4005) |

### Priorização recomendada

1. **🔴 Críticos para release v1.1.6**:
   - #4017 (re

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>


# Relatório de Projeto — ZeroClaw
## Período: 2026-05-04 | github.com/zeroclaw-labs/zeroclaw

---

## 1. Panorama do Dia

ZeroClaw manteve alta atividade em 04/05/2026, com **50 issues e 44 PRs atualizados** nas últimas 24h. O projeto demonstrou foco em estabilidade com o fechamento de **7 issues** e **19 PRs** (merged/fechados), enquanto **25 PRs permanecem abertos**, incluindo correções críticas. Não houve lançamento de novas versões. A área mais movimentada foi a **plataforma desktop/Tauri**, com uma leva de ~12 issues e features criados no mesmo dia pelo contribuidor `theonlyhennygod`, sinalizando avanço estruturado no roadmap de macOS. Bugs de segurança e regressões em provedores (DeepSeek, Gemini, Bedrock) continuam demandando atenção, com 4 issues classificados como **priority:p1** ou **risk:high** abertos simultaneamente.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.** O projeto está em período de intensa consolidação de PRs e preparação para o próximo ciclo de release. A ausência de releases novas sugere que a equipe está acumulando correções agrupadas antes de cortar uma versão.

---

## 3. Progresso do Projeto

### PRs fechados/merged nas últimas 24h

| # | PR | Tamanho | Risco | Impacto |
|---|----|---------|-------|---------|
| [#5939](https://github.com/zeroclaw-labs/zeroclaw/pull/5939) | **fix(security): distinguish git -C from git -c** | XS | High | Corrige bloqueio legítimo de `git -C` pela política de sandbox — resolvia o issue [#5809](https://github.com/zeroclaw-labs/zeroclaw/issues/5809) |
| [#6189](https://github.com/zeroclaw-labs/zeroclaw/pull/6189) | **fix(runtime): strip image markers from non-vision context compression** | S | Medium | Fecha gap residual de marcadores de imagem em provedores não-vision — continuidade de #6183 e #6184 |
| [#6194](https://github.com/zeroclaw-labs/zeroclaw/pull/6194) | **docs(config): update YOLO config examples** | XS | Low | Atualiza documentação com valores correntes de `[security.sandbox]` e `[gateway]`, fechando [#6149](https://github.com/zeroclaw-labs/zeroclaw/issues/6149) |
| [#6154](https://github.com/zeroclaw-labs/zeroclaw/pull/6154) | **fix(install): restore web dashboard extraction in prebuilt install path** | XS | Low | Garante que `install.sh` extraia `web/dist/` do tarball de release — fechando [#6096](https://github.com/zeroclaw-labs/zeroclaw/issues/6096) |
| [#6203](https://github.com/zeroclaw-labs/zeroclaw/pull/6203) | **docs(hardware): add Raspberry Pi setup guide** | M | Low | Adiciona guia completo para Raspberry Pi (binário, cross-compile, Podman), fechando [#4704](https://github.com/zeroclaw-labs/zeroclaw/issues/4704) |
| [#6185](https://github.com/zeroclaw-labs/zeroclaw/pull/6185) | **feat(tools/web_search): implement Tavily search backend** | M | High | Implementa backend Tavily como provider de busca — preenche TODO pendente e adiciona alternativa a DuckDuckGo |
| [#5257](https://github.com/zeroclaw-labs/zeroclaw/pull/5257) | **fix(agent): align history trim to user boundary** | M | Medium | Garante ordenação `system* → user` após trim para compatibilidade com provedores como Zhipu GLM |
| [#5303](https://github.com/zeroclaw-labs/zeroclaw/pull/5303) | **fix: ignore generic API_KEY override for Bedrock** | — | — | Corrige autenticação Bedrock evitando uso de API_KEY genérico em vez de SigV4 |
| [#5236](https://github.com/zeroclaw-labs/zeroclaw/pull/5236) | **fix(security): allow high risk command execution** | — | High | Medida temporária para permitir execução completa de comandos quando `allowed_commands` configurado |

### PRs abertos com destaque

| # | PR | Tamanho | Risco | Destaque |
|---|----|---------|-------|---------|
| [#6107](https://github.com/zeroclaw-labs/zeroclaw/pull/6107) | **fix(agent/loop): capture reasoning_content from streaming** | M | High | Captura `reasoning_content` de streaming — corrige 400 em follow-ups do DeepSeek V4 (relacionado a [#6233](https://github.com/zeroclaw-labs/zeroclaw/issues/6233)) |
| [#5265](https://github.com/zeroclaw-labs/zeroclaw/pull/5265) | **feat(desktop): menu bar chat agent** | L | — | Transformação do app Tauri em agente de menu bar com WebSocket, voz e upload de imagem — feature mais ambiciosa em curso |
| [#6101](https://github.com/zeroclaw-labs/zeroclaw/pull/6101) | **feat(webui): hot-switch model & preserve chat context** | M | Medium | Troca de modelo em tempo real e preservação de contexto ao navegar — melhoria de UX significativa |
| [#6317](https://github.com/zeroclaw-labs/zeroclaw/pull/6317) | **fix(config): preserve dotted provider map keys** | S | Medium | Preserva chaves com pontos (URLs, hostnames) em configs de provedor |
| [#6299](https://github.com/zeroclaw-labs/zeroclaw/pull/6299) | **fix(installer): install prebuilt dashboard assets** | XS | Medium | Complementar a #6154 — garante assets web no path correto |
| [#6316](https://github.com/zeroclaw-labs/zeroclaw/pull/6316) | **fix(agent): exclude Conversation memories from build_context recall** | — | — | Follow-up de #5415 — previne vazamento de memória de chat para scheduler |
| [#6296](https://github.com/zeroclaw-labs/zeroclaw/pull/6296) | **fix(memory): treat bare wildcard recall as recent memory query** | M | Medium | Corrige recall com `query: "*"` retornando zero resultados — fecha [#5170](https://github.com/zeroclaw-labs/zeroclaw/issues/5170) |
| [#6318](https://github.com/zeroclaw-labs/zeroclaw/pull/6318) | **feat(hooks): add on_before_compaction hook** | — | — | Hook para notificação pré-compressão de contexto — visibilidade para agentes |
| [#6190](https://github.com/zeroclaw-labs/zeroclaw/pull/6190) | **feat(obs): instrument runtime memory ops with OTel GenAI spans** | L | Medium | Instrumentação OTel para operações de memória — observable observability |

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários + reações)

| # | Título | Comentários | Reações | Categoria |
|---|--------|-------------|---------|-----------|
| [#6233](https://github.com/zeroclaw-labs/zeroclaw/issues/6233) | `chat_messages_to_native()` drops `reasoning_content` | 7 | 0 | Bug / DeepSeek |
| [#6149](https://github.com/zeroclaw-labs/zeroclaw/issues/6149) | config.toml examples for YOLO / local testing desatualizados | 4 | 0 | Bug / Docs |
| [#5415](https://github.com/zeroclaw-labs/zeroclaw/issues/5415) | Context spillage from chat to schedule | 4 | 0 | Bug / Security |
| [#5809](https://github.com/zeroclaw-labs/zeroclaw/issues/5809) | Shell policy blocks `git -C` | 3 | 2 👍 | Bug / Security |
| [#6269](https://github.com/zeroclaw-labs/zeroclaw/issues/6269) | Context compressor drops `reasoning_content` | 3 | 0 | Bug / DeepSeek |
| [#5649](https://github.com/zeroclaw-labs/zeroclaw/issues/5649) | Clipboard paste & drag-and-drop image support | 2 | 0 | Feature / UI |
| [#5803](https://github.com/zeroclaw-labs/zeroclaw/issues/5803) | Fallback provider chain ignores `[providers.X]` config | 2 | 0 | Bug / Provider |
| [#4704](https://github.com/zeroclaw-labs/zeroclaw/issues/4704) | docs: add Raspberry Pi deployment guide | 1 | 3 👍 | Docs / Help wanted |

**Análise:** O tema dominante é a compatibilidade com **DeepSeek V4 e seu reasoning_content** (3 issues relacionados: #6233, #6269, #6107). Seguido por **segurança/sandbox** (context spillage, git -C, ApprovalManager bypass) e **experiência desktop** com o lote de ~12 issues do `theonlyhennygod`. O issue com mais reações (👍 2) é o bug de `git -C`, refletindo frustração de usuários avançados que usam workflows Git legítimos.

---

## 5. Bugs e Estabilidade

### Issues abertas por severidade

| Severidade | Qtd | Exemplos |
|------------|-----|---------|
| **S0** (data loss / security) | 1 | [#5415](https://github.com/zeroclaw-labs/zeroclaw/issues/5415) — Context spillage de chat para scheduler |
| **S1** (workflow blocked) | 3+ | [#6149](https://github.com/zeroclaw-labs/zeroclaw/issues/6149) (config docs), [#5803](https://github.com/zeroclaw-labs/zeroclaw/issues/5803) (provider config), [#6207](https://github.com/zeroclaw-labs/zeroclaw/issues/6207) (ApprovalManager bypass) |
| **S2** (degraded behavior) | 5+ | [#6233](https://github.com/zeroclaw-labs/zeroclaw/issues/6233) (reasoning_content DeepSeek), [#6269](https://github.com/zeroclaw-labs/zeroclaw/issues/6269) (context compressor), [#6302](https://github.com/zeroclaw-labs/zeroclaw/issues/6302) (Gemini 400), [#5897](https://github.com/zeroclaw-labs/zeroclaw/issues/5897) (Telegram photo flow) |

### Bugs críticos em aberto

1. **[#5415](https://github.com/zeroclaw-labs/zeroclaw/issues/5415) — Context spillage: S0 / Security** — Memória de chat em Discord vaza para execução scheduled. Risco alto: dados de um usuário podem influenciar tarefas de outro. Status: `blocked`, `no-stale`, precisa repro.
2. **[#6207](https://github.com/zeroclaw-labs/zeroclaw/issues/6207) — ApprovalManager bypass: S1 / Security** — Dashboard web/WS não exibe aprovações de ferramentas, mas as executa. Usuários não veem o que está sendo aprovado. `needs-maintainer-review`.
3. **[#6302](https://github.com/zeroclaw-labs/zeroclaw/issues/6302) — Gemini 400: Invariant violation** — História coloca `assistant` (com `tool_calls`) antes do primeiro `user` turn — Gemini exige `system* → user` estrito. Criado em 2026-05-03, alta свежесть.
4. **[#5803](https://github.com/zeroclaw-labs/zeroclaw/issues/5803) — Fallback chain ignora config: S1 / P1** — `create_resilient_provider_with_options` não lê `base_url` nem credenciais de `[providers.X]` para fallbacks, apenas de env vars. Status: `in-progress`.
5. **[#6051](https://github.com/zeroclaw-labs/zeroclaw/issues/6051) — Self-test reporta localhost contra config** — `zeroclaw self-test` ignora config de interface, sempre usa `127.0.0.1`. Afeta debug.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em alta demanda

| # | Feature | Comentários | Tags | Sinal de Roadmap |
|---|---------|-------------|------|-----------------|
| [#5649](https://github.com/zeroclaw-labs/zeroclaw/issues/5649) | Clipboard paste & drag-and-drop image no Web Chat | 2 | `enhancement`, `gateway`, `desktop` | UI/UX do dashboard |
| [#6177](https://github.com/zeroclaw-labs/zeroclaw/issues/6177) | Support Matrix file uploads em partial stream drafts | 1 | `channel:matrix` | Canal Matrix |
| [#6344](https://github.com/zeroclaw-labs/zeroclaw/issues/6344) | Dashboard editor para arquivos SOUL/IDENTITY/USER/etc. | 0 | `desktop` | Experiência de persona |

### Roadmap desktop/Tauri (lote theonlyhennygod — 12 issues, 2026-05-03)

| # | Feature | Prioridade |
|---|---------|-----------|
| [#5265](https://github.com/zeroclaw-labs/zeroclaw/pull/5265) (PR) | Menu bar chat agent com voice + image upload | L |
| [#6343](https://github.com/zeroclaw-labs/zeroclaw/issues/6343) | v0.7.7 Desktop parity, menu bar, macOS a11y | — |
| [#6341](https://github.com/zeroclaw-labs/zeroclaw/issues/6341) | Ship signed .dmg em releases | Bloqueia distribuição |
| [#6338](https://github.com/zeroclaw-labs/zeroclaw/issues/6338) | macOS notarization + code-signing pipeline | Bloqueia distribution |
| [#6339](https://github.com/zeroclaw-labs/zeroclaw/issues/6339) | Universal binary (arm64 + x86_64) | Desktop |
| [#6332](https://github.com/zeroclaw-labs/zeroclaw/issues/6332) | Auto-update channel (Tauri updater) | Depende do signed .dmg |
| [#6335](https://github.com/zeroclaw-labs/zeroclaw/issues/6335) | macOS Microphone permission flow | Desktop |
| [#6334](https://github.com/zeroclaw-labs/zeroclaw/issues/6334) | macOS Screen Recording permission flow | Desktop |
| [#6333](https://github.com/zeroclaw-labs/zeroclaw/issues/6333) | macOS Accessibility permission flow | Desktop |
| [#6331](https://github.com/zeroclaw-labs/zeroclaw/issues/6331) | Launch at login + LSUIElement verification | Desktop |
| [#6330](https://github.com/github.com/zeroclaw-labs/zeroclaw/issues/6330) | Tray icon light/dark + contrast audit | Desktop |
| [#6329](https://github.com/zeroclaw-labs/zeroclaw/issues/6329) | Tray menu: quit, restart, open dashboard, copy token, show logs | Desktop |
| [#6337](https://github.com/github.com/zeroclaw-labs/zeroclaw/issues/6337) | Reduced-motion e Increase-Contrast no chat-ui | A11y |
| [#6336](https://github:///zeroclaw-labs/zeroclaw/issues/6336) | VoiceOver / NSAccessibility audit | A11y |
| [#6340](https://github.com/zeroclaw-labs/

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*