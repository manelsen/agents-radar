# Resumo diário do ecossistema de agentes de IA 2026-09-25

> Issues: 12 | PRs: 25 | Projetos cobertos: 7 | Gerado em: 2026-09-24 22:57 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório do Projeto NullClaw — 2026-09-25

## 1. Panorama do Dia

NullClaw mantém um ritmo de desenvolvimento intenso e saudável. Nas últimas 24 horas, 25 pull requests e 12 issues foram atualizadas, com 8 PRs fechadas/merged e 10 issues resolvidas. A atividade concentra-se em **correções de estabilidade** (stack overflows, hangs em stdio MCP, crash loops no Telegram) e em **documentação extensiva** (5 PRs docs simultâneas). Dois problemas em aberto (#1000, #995) sinalizam demandas reais de usabilidade ainda pendentes de resolução. A saúde geral do projeto é sólida — não há releases novas, mas o volume de merges demonstra progresso contínuo.

---

## 2. Lançamentos

**Nenhuma release nas últimas 24h.**

O projeto não publicou versões novas hoje. É possível que a equipe esteja consolidando para uma release futura que incorpore as múltiplas correções de bugs merged recentemente. Recomenda-se monitorar a aba releases para announcements iminentes.

---

## 3. Progresso do Projeto

### PRs fechadas/merged nas últimas 24h

| # | Título | Impacto | Link |
|---|--------|---------|------|
| #985 | fix(runtime): give the agent turn path a 16 MiB stack | **Crítica** — resolve SIGSEGV em Telegram e outros canais (Issue #976) | [PR #985](https://github.com/nullclaw/nullclaw/pull/985) |
| #996 | fix(mcp): bound stdio response waits | **Estabilidade** — elimina hangs indefinitely em MCP stdio (Issue #991) | [PR #996](https://github.com/nullclaw/nullclaw/pull/996) |
| #989 | fix: restore broken star history chart | **UX** — corrige gráfico quebrado no README | [PR #989](https://github.com/nullclaw/nullclaw/pull/989) |
| #979 | feat(memory): add configurable auto-recall, recall_limit, max_context_bytes | **Feature** — controles de recall de memória | [PR #979](https://github.com/nullclaw/nullclaw/pull/979) |
| #986 | GEN-548: make SQLite memory database path configurable | **Flexibilidade** — `memory.database_path` configurável | [PR #986](https://github.com/nullclaw/nullclaw/pull/986) |
| #978 | discord: run typing thread on the heavy runtime stack | **Estabilidade** — corrige crash no Discord por stack overflow | [PR #978](https://github.com/nullclaw/nullclaw/pull/978) |
| #411 | implements tool customization system with trigger-based prioritization | **Feature** — sistema completo de customização de tools | [PR #411](https://github.com/nullclaw/nullclaw/pull/411) |
| #319 | Fix DingTalk Message Sending & Recall Support | **Canais** — integração oficial DingTalk API com OAuth2 | [PR #319](https://github.com/nullclaw/nullclaw/pull/319) |

**Destaque principal:** A correção de stack overflow (#985) que afetava processamento de mensagens Telegram em aarch64/Linux é uma melhoria de estabilidade significativa, resolvendo crash loops em produção.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários + reações)

| # | Título | Comentários | Reações | Tema |
|---|--------|-------------|---------|------|
| #871 | [bug] Critical: web_search is impractical on low-resource devices without direct DuckDuckGo support | 9 | 0 | **Déficit de suporte nativo DuckDuckGo** |
| #190 | Subagent spawn | 4 | 0 | **Spawn de subagentes com provider por agente** |
| #976 | SIGSEGV on every inbound Telegram message | 4 | 0 | **Stack overflow — RESOLVIDO** |
| #991 | MCP stdio calls can hang indefinitely | 3 | 0 | **Hangs em MCP stdio — RESOLVIDO** |
| #631 | [enhancement] add GET /status endpoint for agent monitoring | 3 | 1 | **Endpoint REST para monitoramento** |
| #867 | [enhancement] Provide a fully working example config.json | 1 | 3 | **Documentação de configuração** |

**Análise:** A Issue #871 sobre suporte DuckDuckGo para dispositivos de baixo recurso é a mais comentada e sinaliza uma necessidade real de opção de busca sem API key. A demanda por subagentes (#190) indica interesse em arquiteturas multi-provider.

---

## 5. Bugs e Estabilidade

### Bugs reportados/resolvidos nas últimas 24h

| Severidade | # | Descrição | Status | Link |
|------------|---|-----------|--------|------|
| **Crítica** | #976 | SIGSEGV no Telegram por stack overflow (512KB insuficiente) | ✅ RESOLVIDO | [Issue #976](https://github.com/nullclaw/nullclaw/issues/976) |
| **Crítica** | #991 | MCP stdio hangs indefinitely atrás do Proxmox launcher lock | ✅ RESOLVIDO | [Issue #991](https://github.com/nullclaw/nullclaw/issues/991) |
| **Alta** | #870 | Gateway accept4 busy loop (100% CPU) no WSL2 | ✅ RESOLVIDA | [Issue #870](https://github.com/nullclaw/nullclaw/issues/870) |
| **Média** | #978 | Discord typing thread crash por stack overflow | ✅ RESOLVIDO | [PR #978](https://github.com/nullclaw/nullclaw/pull/978) |
| **Média** | #1006 | CLI stdout sobrescreve em vez de append (macOS) | 🔄 ABERTA | [PR #1006](https://github.com/nullclaw/nullclaw/pull/1006) |
| **Baixa** | #989 | Star history chart quebrado no README | ✅ RESOLVIDO | [PR #989](https://github.com/nullclaw/nullclaw/pull/989) |

**Tendencia:** O projeto apresenta padrão de **stack size mismanagement** — múltiplos componentes usando 512KB onde 2-16 MiB são necessários. As correções de hoje (PRs #985, #978) endereçam o problema de forma abrangente.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features em aberto

| # | Título | Demanda | Potencial Impacto |
|---|--------|---------|-------------------|
| #1000 | ollama incompatibility notification | Notificação clara quando modelo Ollama não suporta tools | **Usabilidade** — reduz debugging com Wireshark |
| #995 | Support Skills Symlinks | Seguir symlinks em `nullclaw skills list` | **Gestão de skills** — reduz sincronização |
| #631 | add GET /status endpoint for agent monitoring | Endpoint REST JSON para dashboards externos | **Observabilidade** — integração com monitoramento |
| #624 | Vision Pipeline: Send images and files directly to the agent | Encoding base64 automático para LLMs multimodais | **Multimodalidade** — análise de imagens |
| #886 | option to show reasoning/thinking | Exibir processo de raciocínio em tempo real | **UX/Debugging** — visibilidade de execução longa |

### PRs de feature abertas (revisão recomendada)

| # | Título | Descrição | Link |
|---|--------|-----------|------|
| #1001 | feat(memory): add configurable auto-recall, recall_limit, max_context_bytes | Controles finos de injeção de memória | [PR #1001](https://github.com/nullclaw/nullclaw/pull/1001) |
| #1003 | feat(skills): follow symlinked skill directories | Suporte a symlinks para skills | [PR #1003](https://github.com/nullclaw/nullclaw/pull/1003) |
| #411 | tool customization system with trigger-based prioritization | Sistema completo de customização de tools | [PR #411](https://github.com/nullclaw/nullclaw/pull/411) |

**Sinal de roadmap:** A combinação de PRs #1001 e #986 indica foco em **configurabilidade de memória**. A Issue #624 (Vision Pipeline) pode sinalizar suporte multimodal em breve.

---

## 7. Resumo de Feedback dos Usuários

### Dores reais identificadas

| Dor | Frequência | Impacto | Fonte |
|-----|------------|---------|-------|
| **Busca web inacessível em dispositivos de baixo custo** | Alta (9 comentários) | Blockeia uso intended do NullClaw | [Issue #871](https://github.com/nullclaw/nullclaw/issues/871) |
| **Configuração inicial frustrante** | Média (3 reactions) | Barreira de entrada alta | [Issue #867](https://github.com/nullclaw/nullclaw/issues/867) |
| **Ausência de notificação clara de incompatibilidade Ollama** | Média | Debugging com ferramentas externas (Wireshark) | [Issue #1000](https://github.com/nullclaw/nullclaw/issues/1000) |
| **Longas execuções sem feedback** | Média | Incerteza se agent está travado ou processando | [Issue #886](https://github.com/nullclaw/nullclaw/issues/886) |

### Cenários de uso observados

- **Dispositivos ARM64 de baixo recurso** (aarch64 Linux, Raspberry Pi-style)
- **Ambientes Proxmox CT** com MCP bridges read-only
- **WSL2** como ambiente de desenvolvimento Windows
- **Android/Termux** como plataforma de deployment
- **Telegram e Discord** como canais primários de interação

### Satisfação

A comunidade demonstra **engajamento ativo** com issues bem documentadas e PRs substanciais. A resposta rápida da maintainer (vernonstinebaker) em múltiplas PRs simultâneas indica **suporte responsivo**.

---

## 8. Backlog que Merece Atenção

### Issues abertas há mais tempo sem resolução

| # | Título | Criado | Atualizado | Comentários | Prioridade |
|---|--------|--------|------------|-------------|------------|
| #190 | Subagent spawn | 2026-03-01 | 2026-09-24 | 4 | **Alta** — feature request antiga |
| #495 | Web channel com CloudFlare/Nginx | 2026-03-13 | 2026-09-24 | 3 | **Média** — configuração de túnel |
| #624 | Vision Pipeline (base64 encoding) | 2026-03-18 | 2026-09-24 | 3 | **Média** — feature aguardando |
| #631 | GET /status endpoint | 2026-03-18 | 2026-09-24 | 3 | **Alta** — observabilidade |
| #1000 | ollama incompatibility notification | 2026-09-20 | 2026-09-24 | 3 | **Alta** — usabilidade |
| #995 | Support Skills Symlinks | 2026-08-26 | 2026-09-24 | 1 | **Média** |

### PRs abertas há >30 dias

| # | Título | Criado | Idade | Descrição | Link |
|---|--------|--------|-------|-----------|------|
| #966 | fix(http): secure buffered curl fallback on Android | 2026-06-19 | ~97 dias | Fallback curl no Android | [PR #966](https://github.com/nullclaw/nullclaw/pull/966) |
| #777 | docs: structural cleanup | 2026-04-05 | ~173 dias | Arquivar docs obsoletas | [PR #777](https://github.com/nullclaw/nullclaw/pull/777) |
| #776 | docs: add MCP, subagents, skills, voice, hardware documentation | 2026-04-05 | ~173 dias | **Documentação de 5 subsistemas** | [PR #776](https://github.com/nullclaw/nullclaw/pull/776) |
| #775 | docs: deduplicate CLAUDE.md | 2026-04-05 | ~173 dias | Redução de duplicação | [PR #775](https://github.com/nullclaw/nullclaw/pull/775) |
| #774 | docs: update outdated stats | 2026-04-05 | ~173 dias | Métricas desatualizadas | [PR #774](https://github.com/nullclaw/nullclaw/pull/774) |
| #962 | docs(providers): document native Anthropic provider | 2026-06-18 | ~99 dias | Docs Anthropic nativo | [PR #962](https://github.com/nullclaw/nullclaw/pull/962) |

**Alerta:** O cluster de 4 PRs de documentação (#777, #776, #775, #774) abertas há ~173 dias representa **dívida de documentação** significativa. A PR #776 é especialmente importante — documenta 5 subsistemas sem docs de usuário.

---

## Métricas Consolidada do Dia

| Indicador | Valor | Tendência |
|-----------|-------|-----------|
| Issues fechadas | 10 | ✅ Positiva |
| PRs fechadas/merged | 8 | ✅ Positiva |
| PRs abertas | 17 | Neutra |
| Novas releases | 0 | Neutra |
| Bugs críticos resolvidos | 2 | ✅ Positiva |
| Features aguardando review | 3 | Observar |
| Issues abertas pendentes | 2 | Baixo risco |

**Veredicto:** NullClaw apresenta **saúde de projeto excelente**. Correções de estabilidade críticas (stack overflows, hangs) demonstram maturidade em QA. A dívida de documentação (4 PRs docs abertas há 173 dias) é o ponto mais urgente a endereçar.

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo — Ecossistema de Agentes de IA Open Source

**Período de Referência:** 2026-09-25  
**Projetos Analisados:** NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw, ZeroClaw

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **duas velocidades distintas de evolução** em 25 de setembro de 2026. Por um lado, NullClaw, Hermes Agent, CoPaw e ZeroClaw demonstram alta atividade com dezenas de PRs diários, ciclos de release frequentes e governança técnica madura (RFCs, ADRs). Por outro, PicoClaw e IronClaw operam em режим de manutenção moderada, focando em estabilidade e correções pontuais. A característica transversal mais notável é a **maturação simultânea em três eixos**: (1) estabilização de runtimes e canais de comunicação, (2) expansão de infraestrutura multi-agente e multi-tenant, e (3) emergência de requisitos de segurança e observabilidade em produção. O mercado começa a exigir diferenciadores claros entre projetos focados em facilidade de uso (NullClaw) versus escalabilidade enterprise (ZeroClaw, CoPaw).

---

## 2. Comparação de Atividade

| Projeto | Issues Ativas | PRs (24h) | PRs Merged | Releases | Bugs Críticos | Saúde |
|---------|--------------|-----------|------------|----------|--------------|-------|
| **NullClaw** | 12 | 25 | 8 | 0 | 2 críticos resolvidos | ★★★★★ |
| **NanoBot** | 14 | 39 | 26 | 0 | 3 P2 abertos | ★★★★☆ |
| **Hermes Agent** | 50 | 50 | 26 | v0.21.5 | 1 P0 aberto | ★★★★☆ |
| **PicoClaw** | 2 | 8 | 0 | 0 | 1 alta | ★★☆☆☆ |
| **IronClaw** | 1 | 2 | 0 | 1.4.1-rc.2 | 0 | ★★★☆☆ |
| **CoPaw** | 34 | 23 | 6 | 0 (betas) | 4 altas | ★★★★☆ |
| **ZeroClaw** | 26 | 50 | 5+ | 0 | 3 S0/S1 | ★★★☆☆ |

**Observações:**
- **NullClaw** apresenta o melhor índice de eficiência (8 merges em 25 PRs), indicando código review maduro.
- **Hermes Agent** e **ZeroClaw** lideram em volume absoluto, mas ZeroClaw carrega bugs de maior severidade.
- **PicoClaw** e **IronClaw** demonstram ciclo de desenvolvimento mais lento, possivelmente indicando maturidade ou baixa adoção.
- **NanoBot** destaca-se pela velocidade de merge (26 fechamentos), sugerindo equipe pequena mas altamente produtiva.

---

## 3. Posicionamento do Projeto Principal

Para fins deste relatório, consideraremos **NullClaw** como referência central dado seu padrão de documentação e saúde de projeto.

### Vantagens Competitivas do NullClaw

| Dimensão | Vantagem | Evidência |
|----------|----------|-----------|
| **Qualidade de Código** | Resolvedor de stack overflows em múltiplos canais (Telegram, Discord) simultaneamente | PRs #985, #978 |
| **Documentação** | 5 PRs de docs simultâneas, dívida de docs menor que pares | #777–#776 (~173 dias) ainda menor que ZeroClaw |
| **Multi-canal** | Integração oficial DingTalk (#319), suporte a MCP stdio | 8 canais suportados |
| **Configurabilidade** | SQLite path configurável, recall limits, max_context_bytes | PRs #986, #979 |
| **Comunidade** | Maintainer responsiva (vernonstinebaker) em múltiplas PRs simultâneas | Métricas de tempo de resposta |

### Posição Relativa

NullClaw ocupa um **nicho de estabilidade e usabilidade** que o diferencia de:
- **Hermes Agent**: Mais focado em desktop/TUI com fragmentação de platform (Windows, macOS, systemd)
- **ZeroClaw**: Orientado a enterprise multi-agent com infraestrutura pesada (OIDC, ZeroRelay)
- **CoPaw**: Focado em beta features (voz realtime, terminal multi-tab) com regressões recentes

**Tamanho da comunidade**: Com 25 PRs e 12 issues em 24h, NullClaw demonstra comunidade ativa mas menor que Hermes Agent (50/50) e NanoBot (39 PRs).

---

## 4. Focos Técnicos Compartilhados

### 4.1 Stabilização de Runtime e Concurrency

| Projeto | Problema | Status |
|---------|----------|--------|
| **NullClaw** | Stack overflows (512KB → 16 MiB) | ✅ Resolvido |
| **NanoBot** | Background task exceptions perdidas silenciosamente | ✅ Resolvido |
| **CoPaw** | Provider quarantined após stream travado | ✅ Resolvido |
| **ZeroClaw** | Concurrency race no markdown memory backend (S0) | 🔴 Aberto |

**Interpretação**: O padrão de stack mismanagement e race conditions em operações concurrentes indica que a indústria está amadurecendo de protótipos para sistemas de produção.

### 4.2 Memória e Gerenciamento de Contexto

| Projeto | Feature | Status |
|---------|---------|--------|
| **NullClaw** | auto-recall configurável, max_context_bytes | PR #979 merged |
| **CoPaw** | Modelo separado para memória ReMeLight | PR #7719 aberto |
| **ZeroClaw** | Backend markdown com perda silenciosa de entries | Bug S0 #10797 |
| **NanoBot** | Compaction deadlock | Issue #5849 (P2) |

**Interpretação**: Gestão de memória de longo prazo é o problema técnico mais distribuído, afetando 4 de 7 projetos.

### 4.3 Multi-Canal e Integrações

| Canal | NullClaw | NanoBot | Hermes | CoPaw | ZeroClaw |
|-------|----------|---------|--------|-------|----------|
| Discord | ✅ | ✅ | ✅ | — | — |
| Telegram | ✅ (crash corrigido) | ✅ | — | — | — |
| WeChat/Feishu | — | ✅ | — | ✅ | — |
| Matrix | — | ✅ | — | — | — |
| Signal | — | — | ✅ | — | — |
| DingTalk | ✅ (nova) | — | — | — | — |

### 4.4 Segurança Emergencial

| Projeto | Vulnerabilidade | Severidade |
|---------|-----------------|------------|
| **ZeroClaw** | ApprovalManager inerte em unattended turns (cron/SOP headless) | S0 |
| **ZeroClaw** | Shell commands bypass em allowlist | S1 |
| **CoPaw** | execute_shell_command pode burlar File Guard | Segurança (aberto desde Abril) |

**Interpretação**: Agentes rodando em modo autonomizado (cron, headless) revelam surface de ataque não endereçada uniformemente.

---

## 5. Análise de Diferenciação

### 5.1 Foco de Público-Alvo

| Projeto | Público Primário | Secundário |
|---------|------------------|------------|
| **NullClaw** | Desenvolvedores individuais, dispositivos ARM64 low-cost | Homelab enthusiasts |
| **NanoBot** | Usuários multi-canal (Discord, Telegram, WeChat) | Power users com múltiplas conversas |
| **Hermes Agent** | Usuários desktop/TUI cross-platform | Enterprise com Signal |
| **CoPaw** | Empresas (QwenPaw Hub multi-tenant) | Desenvolvedores de plugins |
| **ZeroClaw** | Enterprise com requisitos de compliance (OIDC, ZeroRelay) | Multi-agent hosts |
| **IronClaw** | Pesquisadores (benchmarks, taxonomy) | Avaliadores de agentes |
| **PicoClaw** | Usuários TTY minimalistas | Embedding de sistemas |

### 5.2 Diferenças Arquiteturais

| Aspecto | NullClaw | ZeroClaw | CoPaw | Hermes |
|---------|----------|----------|-------|--------|
| **Stack** | Runtime monolith | Gateway/runtime separation (v0.9.0) | Modular com plugins | Monolith com adapters |
| **Persistence** | SQLite | Markdown + PostgreSQL (futuro) | SQLite | Session files |
| **Security** | ApprovalManager | OIDC + admission control | File Guard (evasion bug) | OAuth (RFC 9207 issues) |
| **Deployment** | Single-binary, self-hosted | Enterprise-grade | Docker, self-hosted | Docker, cloud |

### 5.3 Matriz de Prioridades

| Prioridade | NullClaw | NanoBot | Hermes | CoPaw | ZeroClaw |
|------------|----------|---------|--------|-------|----------|
| Estabilidade | 🔴 | 🟡 | 🟡 | 🟡 | 🔴 |
| UX/Facilidade | 🔴 | 🟡 | 🟠 | 🟠 | 🟠 |
| Features | 🟡 | 🟢 | 🟡 | 🟢 | 🟡 |
| Enterprise | 🟠 | 🟠 | 🟡 | 🔴 | 🔴 |
| Performance | 🟡 | 🟡 | 🟡 | 🟢 | 🟡 |

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração

| Métrica | Líder | Seguidor | Laggard |
|---------|-------|----------|---------|
| **PRs merged/dia** | NanoBot (26) | Hermes (26), NullClaw (8) | PicoClaw (0), IronClaw (0) |
| **Tempo de resposta** | NullClaw (mesmo dia) | NanoBot, CoPaw | IronClaw (#7988 ~27 dias) |
| **Bugs críticos resolvidos** | NullClaw (2/24h) | Hermes (wave-8 fixes) | ZeroClaw (S0 em aberto) |
| **Engajamento comunitário** | Hermes (#88584 com 139 comentários) | CoPaw (#7318 com 32 comentários) | IronClaw (0 comentários) |

### 6.2 Consolidação vs. Expansão

| Estratégia | Projetos | Características |
|------------|----------|-----------------|
| **Consolidação de qualidade** | NullClaw, IronClaw, PicoClaw | Foco em estabilidade, releases RC, baixa atividade |
| **Expansão rápida** | Hermes, ZeroClaw, CoPaw | Muitas features, RFCs, múltiplos PRs simultâneos |
| **Balanço** | NanoBot | Alta atividade com resolução consistente (26 fechamentos) |

### 6.3 Captação de Contribuidores

| Projeto | First-time contributors (24h) | Indicador |
|---------|------------------------------|-----------|
| **CoPaw** | 4 PRs | 🟢 Crescimento saudável |
| **NullClaw** | Não especificado | Neutro |
| **NanoBot** | Não especificado | Neutro |
| **Hermes** | Múltiplos (wave-8) | 🟢 Ativo |
| **IronClaw** | 0 | 🟠 Baixa atração |
| **PicoClaw** | 0 | 🟠 Baixa atração |

---

## 7. Sinais de Tendência

### 7.1 Do Feedback das Comunidades

| Tendência | Evidência | Projetos |
|-----------|-----------|----------|
| **Multi-conversa e filas de mensagens** | "Server-side message queue", "waiting room" (NanoBot #5909) | NanoBot |
| **Feedback visual de streaming** | Live tokens/sec, progress indicators | NanoBot, Hermes |
| **Voice em tempo real** | Realtime voice chat (CoPaw #7785) | CoPaw |
| **Multi-tenant enterprise** | Hub multi-tenant discussion (CoPaw #7318) | CoPaw, ZeroClaw |
| **Busca sem API key** | DuckDuckGo nativo (NullClaw #871) | NullClaw |
| **Modelos locais** | Local-setup offer (Hermes #121969) | Hermes, CoPaw |
| **Memory persistente** | Configurable auto-recall (NullClaw #979) | NullClaw, CoPaw |

### 7.2 Roadmap Implícitos

| Direção | Sinais | Projetos |
|---------|--------|----------|
| **Agents autônomos** | SOP headless, cron triggers, self-healing | NullClaw, ZeroClaw |
| **Agent-to-agent messaging** | RFC #11027 (ZeroClaw) | ZeroClaw |
| **Visão multimodal** | Vision Pipeline base64 (NullClaw #624) | NullClaw |
| **Observabilidade** | GET /status endpoint (NullClaw #631), Langfuse (CoPaw #7963) | NullClaw, CoPaw |
| **Package manager unificado** | Unified package manager (Hermes #102765) | Hermes |

### 7.3 Padrões Emergentes

1. **Segurança em automação**: A descoberta de que ApprovalManager é "inerte" em unattended turns (ZeroClaw #10968) sinaliza que a indústria precisa endereçar o gap entre agentes interativos e autônomos.

2. **Concorrência em memória**: Race conditions em stores concorrentes (ZeroClaw #10797, NullClaw multi-thread Discord) indicam que a transição de单线程 para multi-threaded agents está revelando bugs estruturais.

3. **Desktop como área frágil**: Hermes Agent com 15+ bugs desktop e NullClaw com crashes Telegram/Discord em plataformas específicas sugere que a abstração de canais ainda não é robusta o suficiente.

4. **Enterprise readiness**: ZeroClaw investindo em OIDC, admission control e capability catalog; CoPaw em multi-tenant Hub — ambos sinalizam movimento do ecossistema de "hobby projects" para deployments corporativos.

---

## Síntese Executiva

| Dimensão | Conclusão |
|----------|-----------|
| **Saúde do ecossistema** | O ecossistema é saudável com 4 de 7 projetos em alta atividade. A divisão entre projetos de consolidação (PicoClaw, IronClaw) e expansão (Hermes, ZeroClaw) é saudável e natural. |
| **Maior risco** | Bugs de segurança em automação headless (ZeroClaw) e regressões em beta (CoPaw) merecem atenção imediata. |
| **Oportunidade técnica** | Gerenciamento de memória de longo prazo é o problema mais distribuído — solução reutilizável teria alto impacto. |
| **Diferenciação clara** | NullClaw vence em estabilidade multi-canal; CoPaw em features enterprise; Hermes em volume de comunidade; ZeroClaw em arquitetura multi-agent. |

**Recomendação para decisores**: NullClaw representa o melhor equilíbrio entre estabilidade e inovação incremental para deployments de médio porte. ZeroClaw e CoPaw são escolhas para quem prioriza features enterprise de longo prazo, aceitando maturidade em construção.

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-09-25

## 1. Panorama do Dia

O NanoBot apresenta alta atividade de desenvolvimento no dia de hoje, com 14 issues e 39 PRs atualizados nas últimas 24 horas. Seis issues foram fechadas com sucesso, incluindo correções importantes para background tasks e localização da interface. Entre os PRs, 26 foram merged ou fechados, demonstrando um ritmo intenso de integração de mudanças. A comunidade demonstra foco em melhorias de experiência multi-canal (Discord, Telegram, Feishu, WeChat, Matrix) e refinamentos na WebUI. Não houve novos lançamentos hoje.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24 horas.**

O projeto encontra-se em período de desenvolvimento ativo sem выпуска de versão estável. A última versão mencionada nos issues é a **v0.3.5**, que introduziu uma regressão documentada em #5881.

---

## 3. Progresso do Projeto

As seguintes PRs foram fechadas ou mergeadas hoje, representando avanços concretos:

| PR | Descrição | Impacto |
|---|---|---|
| [#5724](https://github.com/HKUDS/nanobot/pull/5724) | fix(agent): retrieve background task exceptions | **Crítico** — Corrige perda silenciosa de exceções em tarefas em background |
| [#5431](https://github.com/HKUDS/nanobot/pull/5431) | fix(agent): report background task failures | Complementa #5724 com tratamento de ciclo de vida de tarefas |
| [#5367](https://github.com/HKUDS/nanobot/pull/5367) | feat(webui): localize agent activity | Localização completa de labels de atividade em 10 idiomas |
| [#5904](https://github.com/HKUDS/nanobot/pull/5904) | perf(webui): improve chat refresh and mobile interactions | Melhora performance de refresh e interação mobile |
| [#5905](https://github.com/HKUDS/nanobot/pull/5905) | fix(webui): keep global page URLs clean and defer chat mounting | Corrige navegação e perda de chat temporário |
| [#5292](https://github.com/HKUDS/nanobot/pull/5292) | fix(matrix): reply to room-level user event | Melhora usabilidade no Matrix com respostas vinculadas |
| [#5807](https://github.com/HKUDS/nanobot/pull/5807) | fix(discord): clean up reaction state on stop | Libera corretamente recursos de reações no Discord |

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento potencial

| Issue | Título | Tipo | Relevância |
|---|---|---|---|
| [#5910](https://github.com/HKUDS/nanobot/issues/5910) | Persist composer draft per conversation | Feature | UX multi-conversação |
| [#5909](https://github.com/HKUDS/nanobot/issues/5909) | Server-side message queue ("waiting room") | Feature | Experiência de uso durante tarefas longas |
| [#5908](https://github.com/HKUDS/nanobot/issues/5908) | Show live tokens/sec while streaming | Feature | Feedback visual de performance |
| [#5896](https://github.com/HKUDS/nanobot/issues/5896) | Support OpenAI Responses API for opencode_go | Provider | Integração com novos modelos |

### Análise dos temas quentes

Três features consecutivamente criadas pelo mesmo autor (`coinwh`) em 2026-09-24 indicam um padrão de demandas centradas na **experiência do usuário durante interações ativas**:

1. **Persistência de rascunhos** — Resolve frustração ao alternar entre conversas
2. **Fila de mensagens服务端** — Resolve problema real de não poder enviar follow-up durante tarefas longas
3. **Indicador de velocidade de streaming** — Feedback de transparência operacional

Essas três issues podem indicar direção de roadmap para v0.3.6+.

---

## 5. Bugs e Estabilidade

### Regressões Críticas

| Severidade | Issue | Descrição | Status |
|---|---|---|---|
| **P2** | [#5881](https://github.com/HKUDS/nanobot/issues/5881) | v0.3.5 exige que `_nanobot` fique fora do workspace, quebrando setups existentes | **Aberto** |
| **P2** | [#5898](https://github.com/HKUDS/nanobot/issues/5898) | Modelos GPT-6 via GitHub Copilot retornam erro 500 | **Aberto** |

### Bugs Reportados

| Issue | Canal | Descrição |
|---|---|---|
| [#5849](https://github.com/HKUDS/nanobot/issues/5849) | Agent/Core | Auto-compaction pode entrar em deadlock por falta de token-budget guard |
| [#5903](https://github.com/HKUDS/nanobot/issues/5903) | Feishu | Mensagem interna de checkpoint é exposta ao usuário após compaction |
| [#5900](https://github.com/HKUDS/nanobot/issues/5900) | WeChat | Notificações de context compaction são enviadas ao usuário indevidamente |

### Correções Recentes de Bugs

- **#5806 / #5864** — Tarefas de reação do Discord ficavam vivas após stop (PR #5807 fechado)
- **#5429 / #5724 / #5431** — Exceções de background tasks eram perdidas silenciosamente (resolvido)

**Métricas de estabilidade:** 6 bugs fechados nas últimas 24h, 3 novos bugs P2 em aberto. A saúde geral é boa, mas atenção à regressão #5881 que afeta usuários existentes.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| PR/Issue | Feature | Categoria | Sinal |
|---|---|---|---|
| [#5909](https://github.com/HKUDS/nanobot/issues/5909) | Server-side message queue ("waiting room") | API | Forte — resolve caso de uso real |
| [#5910](https://github.com/HKUDS/nanobot/issues/5910) | Persist composer draft per conversation | WebUI | Médio |
| [#5908](https://github.com/HKUDS/nanobot/issues/5908) | Live tokens/sec indicator | WebUI | Médio |
| [#5524](https://github.com/HKUDS/nanobot/issues/5524) | WebUI notification sound | WebUI | Baixo (quase resolvido) |
| [#5845](https://github.com/HKUDS/nanobot/pull/5845) | Add Opper as built-in provider | Provider | Integração de gateway |

### Provider/API

- [#5896](https://github.com/HKUDS/nanobot/issues/5896) + [#5906](https://github.com/HKUDS/nanobot/pull/5906) — Suporte à OpenAI Responses API para OpenCode Go (muse-spark)
- [#5834](https://github.com/HKUDS/nanobot/pull/5834) — Tratamento de eventos `response.reasoning_text.*` no consumer SSE

### Sinais de Roadmap

1. **Melhoria de feedback visual em tempo real** (tokens/sec, streaming indicators)
2. **Experiência multi-conversa** (persistência, filas, waiting room)
3. **Expansão de providers** (Opper, Responses API)
4. **Notificações configuráveis** por canal

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Dor | Evidence | Severidade |
|---|---|---|
| Perda de rascunhos ao trocar de conversa | [#5910](https://github.com/HKUDS/nanobot/issues/5910) | Alta |
| Impossibilidade de enviar mensagem durante tarefa longa | [#5909](https://github.com/HKUDS/nanobot/issues/5909) | Alta |
| Notificações indesejadas de compaction | [#5900](https://github.com/HKUDS/nanobot/issues/5900), [#5903](https://github.com/HKUDS/nanobot/issues/5903) | Média |
| Regressão na estrutura de diretórios | [#5881](https://github.com/HKUDS/nanobot/issues/5881) | **Alta** (breaking change) |
| Falta de transparência no streaming | [#5908](https://github.com/HKUDS/nanobot/issues/5908) | Baixa |

### Cenários de Uso Emergentes

- **Automação de tarefas longas** (ex: browser automation para verificar notas) — usuários querem poder continuar interagindo
- **Multi-conversa ativa** — usuários mantém múltiplas conversas abertas simultaneamente
- **WebUI como interface principal** — todas as features de localization, notifications e UX indicam shift para interface web

### Satisfação

- Localização da interface ([#5367](https://github.com/HKUDS/nanobot/pull/5367)) demonstra responsiveness a pedidos da comunidade
- Correção de exceções silenciosas ([#5724](https://github.com/HKUDS/nanobot/pull/5724)) indica maturidade em robustez

---

## 8. Backlog que Merece Atenção

### Issues sem resposta há >7 dias

| Issue | Criado | Título | Prioridade |
|---|---|---|---|
| [#5849](https://github.com/HKUDS/nanobot/issues/5849) | 2026-09-21 | Auto-compaction deadlock | **P2** — potencial de deadlock |
| [#5845](https://github.com/HKUDS/nanobot/pull/5845) | 2026-09-21 | Add Opper provider | Feature request |
| [#5838](https://github.com/HKUDS/nanobot/pull/5838) | 2026-09-20 | Route each session_id to its own chat | Bug/API |

### PRs em Conflito

Dois PRs apresentam conflitos não resolvidos que merecem atenção:

- [#5838](https://github.com/HKUDS/nanobot/pull/5838) — fix(api): route each session_id to its own chat
- [#1387](https://github.com/HKUDS/nanobot/pull/1387) — Anthropic extended thinking support (desde 2026-03-01)

### Recomendações de Priorização

1. **#5881** — Regressão P2 afetando instalações existentes de v0.3.5
2. **#5849** — Bug crítico de deadlock em compaction automática
3. **#5898** — Provider quebrado para GPT-6 via Copilot
4. **#5909 + #5910** — Features com alta demanda comunitária

---

## Métricas Resumidas do Dia

| Métrica | Valor |
|---|---|
| Issues abertas/ativas | 8 |
| Issues fechadas | 6 |
| PRs abertos | 13 |
| PRs merged/fechados | 26 |
| Novas releases | 0 |
| Bugs P2 em aberto | 3 |
| Features requests novos | 5 |

**Saúde Geral:** ★★★★☆ (4/5) — Alta atividade de desenvolvimento com resolução consistente de issues, mas atenção necessária a regressões P2.

---

*Relatório gerado automaticamente com base em dados do GitHub para HKUDS/nanobot em 2026-09-25.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-09-25

## 1. Panorama do Dia

O projeto Hermes Agent apresenta **alta atividade** em 25 de setembro de 2026, com 50 issues e 50 PRs atualizados nas últimas 24 horas. Foi released a versão **v0.21.5** como patch estável, consolidados ~460 PRs desde a v0.21.4. A equipe demonstra forte ritmo de desenvolvimento com múltiplos PRs de correções em andamento, embora um **issue P0** crítico sobre null system prompt em mid-session esteja aguardando decisão. A composição de atividade sugere foco em estabilidade (correções desktop/TUI/systemd) e melhorias de UX.

---

## 2. Lançamentos

### v2026.9.24 — Hermes Agent v0.21.5

| Informação | Detalhe |
|------------|---------|
| **Data** | 24 de setembro de 2026 |
| **Tipo** | Patch release |
| **Mudanças** | ~460 PRs consolidados desde v0.21.4 |

**Notas:**
- Release destinada a consumidores downstream (Docker images, Hermes Cloud, hosted deployments)
- Notas completas curadas foram diferidas para release completo

**Impacto:** Marca consolidação de grande volume de correções, indicando maturização contínua do codebase. Consumidores de imagens Docker/cloud devem atualizar para garantir compatibilidade com última versão estável.

---

## 3. Progresso do Projeto

### PRs Fechados/Merged Relevantes

| PR | Descrição | Impacto |
|----|-----------|---------|
| [#101565](https://github.com/NousResearch/hermes-agent/pull/101565) | Discord channel-aware routing para Sasha | Funcionalidade nova para Discord |
| [#122002](https://github.com/NousResearch/hermes-agent/pull/122002) | TTS entrega respostas como Ogg/Opus real | Correção de delivery de voz |
| [#122008](https://github.com/NousResearch/hermes-agent/pull/122008) | Todo checklists mantêm reopen após turns | UX improvement |
| [#122003](https://github.com/NousResearch/hermes-agent/pull/122003) | Bedrock stream silence com monotonic clock | Estabilidade AWS |

### PRs Abertos em Andamento

| PR | Descrição | Status |
|----|-----------|--------|
| [#102765](https://github.com/NousResearch/hermes-agent/pull/102765) | Bundles & unified package manager | Em revisão — mudança arquitetural significativa |
| [#122012](https://github.com/NousResearch/hermes-agent/pull/122012) | write_file/patch não esvazia target em Modal/Daytona/Vercel | Fix crítico para ambientes |
| [#121990](https://github.com/NousResearch/hermes-agent/pull/121990) | Keep in-flight corrections entre folded tool rounds | Sessions stability |
| [#121629](https://github.com/NousResearch/hermes-agent/pull/121629) | TUI resume em fallback-served chat | Sessions robustness |

**Análise:** A onda de PRs "wave-8 misc fixes" (#122000, #122001, #122004, #122005, #121997) indica esforço coordenado de sweep de bugs P3, sinalizando maturidade no processo de QA.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| Issue | Comentários | Tema Central |
|-------|-------------|--------------|
| [#88584](https://github.com/NousResearch/hermes-agent/issues/88584) | 139 | Automated Nous integration bloqueada — conflito em cron/jobs.py |
| [#121890](https://github.com/NousResearch/hermes-agent/issues/121890) | 7 | SIGTERM perde session id em `hermes chat -Q` |
| [#121970](https://github.com/NousResearch/hermes-agent/issues/121970) | 6 | Feature request: desabilitar Note to Self no Signal |

**Análise de #88584:** Com 139 comentários, esta é a issue mais debatida. Refere-se ao merge programado Nous→Enterkey com conflitos em `cron/jobs.py`. O dashboard updater permanece na última versão testada do Enterkey. Este tema indica tensões de integração entre branches e processos de deployment.

**Demanda de Feature #121970:** Signal adapter tratando "Note to Self" como prompt de agente — indica necessidade de configuração granular para usuários que usam Signal como dispositivo secundário.

---

## 5. Bugs e Estabilidade

### P0 — Crítico

| Issue | Componente | Descrição |
|-------|------------|-----------|
| [#121840](https://github.com/NousResearch/hermes-agent/issues/121840) | agent | Mid-session route commits null stored system prompt — WARNING logs e rebuild from scratch |

**Nota:** Esta issue requer decisão e afeta qualquer messaging gateway ou CLI session. Impacto direto na experiência de uso prolongado.

### P2 — Alto

| Issue | Componente | Descrição |
|-------|------------|-----------|
| [#121890](https://github.com/NousResearch/hermes-agent/issues/121890) | cli | SIGTERM perde session id em quiet one-shot mode |
| [#84102](https://github.com/NousResearch/hermes-agent/issues/84102) | gateway/tts | TTS local escreve Ogg/Vorbis, não Opus — bubbles de voz degradam silenciosamente |
| [#107427](https://github.com/NousResearch/hermes-agent/issues/107427) | gateway | systemd-managed gateway: updater SIGKILLed durante restart |
| [#121596](https://github.com/NousResearch/hermes-agent/issues/121596) | cli | launchd update fight — orphan re-orphaned, impostor holds port |
| [#106217](https://github.com/NousResearch/hermes-agent/issues/106217) | desktop | Desktop dead-ends em 'Turn failed' ao resumir sessão de TUI |

### P3 — Médio

| Issue | Componente | Descrição |
|-------|------------|-----------|
| [#121959](https://github.com/NousResearch/hermes-agent/issues/121959) | desktop | Todo checklist não reopenable após turn |
| [#121970](https://github.com/NousResearch/hermes-agent/issues/121970) | gateway | Signal Note to Self tratado como prompt |

**Padrões Identificados:**
- **Desktop:** 15+ bugs relacionados a desktop, indicando área de maior fragilidade
- **Sessions:** Múltiplas issues de session state (persistence, ownership, resume)
- **Platform-specific:** Windows (WinError 32, flicker), macOS (launchd), systemd — fragmentação de platform

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Abertas

| PR/Issue | Descrição | Área |
|----------|-----------|------|
| [#121970](https://github.com/NousResearch/hermes-agent/issues/121970) | Signal: opção para desabilitar Note to Self handling | Gateway/Signal |
| [#121969](https://github.com/NousResearch/hermes-agent/pull/121969) | Local-setup offer: tour step, model-menu, post-task card | Desktop/Local Models |
| [#101565](https://github.com/NousResearch/hermes-agent/pull/101565) | Discord: route Sasha toolsets por channel | Gateway/Discord |

### Indicadores de Roadmap

| Sinal | Interpretação |
|-------|----------------|
| #102765 (unified package manager) | Consolidação de mecanismos de install/dependency/update/release |
| #121969 (local-setup offer) | Push para adoção de modelos locais — UX flow improvement |
| Feature flags para Signal (#121970) | Tendência de configurações granulares por platform |

**Sugestão de Priorização:** A feature de local-setup (#121969) demonstra foco em privacidade/local-first, alinhado com tendências de mercado. A unificação do package manager (#102765) representa dívida técnica sendo abordada.

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Categoria | Descrição | Frequência |
|-----------|-----------|------------|
| **Desktop instabilidade** | Dead-ends, flickers, approval failures | Alta |
| **Session management** | Perda de sessão, failures de resume, pinned sessions divergindo | Alta |
| **Platform fragmentation** | Windows update failures, macOS launchd fights, systemd SIGKILL | Média-Alta |
| **TTS qualidade** | Voz degradando silenciosamente em Ogg/Vorbis | Média |
| **OAuth issues** | Token refresh failures, RFC 9207 non-compliance | Média |

### Cenários de Uso Reportados

1. **Multi-profile desktop:** Usuários com múltiplos profiles enfrentam `SessionOwnerResolutionError` ao tentar approval responses
2. **Cross-device resume:** Tentativas de continuar sessão TUI no Desktop resultam em dead-end
3. **Local models (Ollama):** Qwen3.5 retorna tool_calls válidos mas Hermes renderiza como texto

### Satisfação/Insatisfação

**Positivo:** Ritmo de releases consistente (v0.21.5 com 460 PRs), múltiplas correções sendo merged rapidamente

**Negativo:** Desktop permanece área problemática, fragmentação de platform aumenta carga de manutenção

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta/Estagnadas

| Issue | Idade | Descrição | Prioridade |
|-------|-------|-----------|------------|
| [#42517](https://github.com/NousResearch/hermes-agent/issues/42517) | ~3 meses | ExecStop marker em gateway — sinal source inference problem | P2 |
| [#84102](https://github.com/NousResearch/hermes-agent/issues/84102) | ~1.5 meses | TTS Ogg/Vorbis vs Opus — silent degradation | P2 |
| [#88584](https://github.com/NousResearch/hermes-agent/issues/88584) | ~1 mês | Automated Nous integration blocked | P3 |

### PRs Pendentes de Review

| PR | Descrição | Tamanho |
|----|-----------|---------|
| [#102765](https://github.com/NousResearch/hermes-agent/pull/102765) | Unified package manager | Grande — requer decisão |
| [#121990](https://github.com/NousResearch/hermes-agent/pull/121990) | In-flight corrections | Médio |
| [#121629](https://github.com/NousResearch/hermes-agent/pull/121629) | TUI fallback resume | Médio |

**Recomendação:** As issues #42517 e #84102 estão abertas há tempo considerável com baixa atividade. Recomenda-se triagem para assignment ou close como stale.

---

## Métricas Resumidas

| Métrica | Valor |
|---------|-------|
| Issues ativas (24h) | 26 |
| Issues fechadas (24h) | 24 |
| PRs abertos (24h) | 24 |
| PRs merged/fechados (24h) | 26 |
| Releases | 1 (v0.21.5) |
| Issues P0 abertas | 1 (#121840) |
| Issues P2 em aberto | 15+ |
| PRs em wave-8 fix sweep | 8+ |

**Saúde Geral:** O projeto demonstra atividade saudável com ciclo de release consistente. Áreas de atenção: Desktop (estabilidade), Sessions (robustness), e Platform-specific (Windows/macOS/systemd). Aissue P0 #121840 requer decisão urgente da equipe de arquitetura.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-09-25

---

## 1. Panorama do Dia

O projeto PicoClaw apresenta **atividade moderada** em 25 de setembro de 2026, com 10 itens atualizados nas últimas 24h (2 issues, 8 PRs). Não houve lançamentos de novas versões. A atividade está concentrada em **atualizações de dependências** (6 PRs de dependabot) e **manutenção de provedores** (2 PRs stale aguardando merge). Um bug crítico de multi-line input foi reportado e corrigido em uma issue, embora um duplicado permaneça aberto.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O último ciclo de desenvolvimento parece focado em preparação interna sem publicação oficial de versão.

---

## 3. Progresso do Projeto

### PRs merged/fechadas hoje
| # | Título | Status | Impacto |
|---|--------|--------|---------|
| — | Nenhum PR mergeado | — | — |

### Observação
Todos os 8 PRs更新的 permanecem em estado **OPEN**, indicando que não houve merges concretizados hoje. Os PRs stale (#3381, #3376) e as atualizações de dependências aguardam revisão.

---

## 4. Temas Quentes da Comunidade

### Issue com maior relevância técnica
**[#3390] [BUG] Pico channel splits multi-line input into multiple messages** — [GitHub](https://github.com/sipeed/picoclaw/issues/3390)

- **Estado:** CLOSED
- **Comentários:** 1
- **Severidade:** Alta (quebra funcional)
- **Análise:** Bug afeta usuários do cliente TTY Pico que colam código ou poesia multi-linha. O sistema fragmenta cada linha em mensagens separadas, comprometendo a estrutura original.

### Issue duplicada em análise
**[#3391] [BUG] Pico channel splits multi-line input into multiple messages** — [GitHub](https://github.com/sipeed/picoclaw/issues/3391)

- **Estado:** OPEN
- **Comentários:** 0
- **Ação necessária:** Considerar fechamento como duplicado de #3390.

---

## 5. Bugs e Estabilidade

### Bug Reportado

| Severidade | Issue | Descrição |
|------------|-------|-----------|
| **🔴 Alta** | #3391 | Multi-line input splitting no canal Pico — afeta UX ao colar código/texto longo |

**Recomendação:** Priorizar correção no pipeline do canal Pico para normalizar inputs antes do envio.

---

## 6. Pedidos de Features e Sinais de Roadmap

### PRs em desenvolvimento

| # | Título | Tipo | Relevância Estratégica |
|---|--------|------|------------------------|
| **#3381** | Switch Openai to responses API | ✨ Feature | **Alta** — Migração para API mais recente da OpenAI |
| **#3371** | Add opencode-go provider with session header support | ✨ Feature | **Alta** — Expansão de provedores compatíveis |
| **#3376** | Fix deltachat config validation error | 🐞 Bug Fix | **Média** — Resolução de erro de inicialização |

**Análise de roadmap:**
- Migração para OpenAI Responses API (#3381) sugere alinhamento com新一代 APIs de IA.
- Integração com OpenCode Go (#3371) amplia opções de provedor para usuários.
- Correção do canal DeltaChat (#3376) indica foco em estabilidade multi-canal.

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

1. **Fragmentação de Input Multi-linha** — Usuários do cliente TTY Pico reportam frustração ao colar conteúdo formatado (código, poesia). O comportamento atual quebra a experiência esperada.

### Sinais de Satisfação/Insatisfação
- **Insatisfação:** Problema de UX documentado em 2 issues separadas (indica recorrência).
- **Engajamento:** Comunidade ativa reportando bugs e contribuindo PRs de provedor.

---

## 8. Backlog que Merece Atenção

### PRs Stale (sem atividade significativa)

| # | Título | Tempo em Aberto | Prioridade |
|---|--------|-----------------|------------|
| **#3381** | Switch Openai to responses API | ~8 dias | 🔴 Alta |
| **#3376** | Fix deltachat channel | ~15 dias | 🟡 Média |

**Ação recomendada:** Revisar e dar feedback nos PRs stale para desbloquear avanços em provedores e estabilidade de canais.

---

## Métricas de Saúde do Projeto

| Indicador | Valor | Status |
|-----------|-------|--------|
| Issues ativas (24h) | 1 | 🟢 Normal |
| PRs abertos (24h) | 8 | 🟢 Normal |
| Releases (24h) | 0 | 🟡 Ausente |
| PRs stale | 2 | 🔴 Atenção |
| Bugs críticos abertos | 1 | 🟡 Monitorar |

---

**Gerado em:** 2026-09-25 | **Fonte:** github.com/sipeed/picoclaw

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-09-25

---

## 1. Panorama do Dia

O projeto IronClaw mantém atividade moderada no dia de hoje. Foi publicada a release candidate **1.4.1-rc.2**, continuando o ciclo de correções iniciado na rc.1 com foco na compatibilidade OAuth das extensões Google. A comunidade reportou uma issue de taxonomia de falhas em benchmarks, evidenciando o uso ativo do projeto em cenários de avaliação de agentes. Dois PRs aguardam revisão, nenhum mergeado nas últimas 24h, sugerindo uma fase de validação antes de consolidação.

---

## 2. Lançamentos

### ironclaw-v1.4.1-rc.2
📅 **Data:** 2026-09-24  
🔗 **Link:** [nearai/ironclaw Releases](https://github.com/nearai/ironclaw/releases)

**Resumo:** Segundo patch candidate sobre a versão 1.4.0.

**Correções:**

| Componente | Problema Resolvido |
|------------|-------------------|
| Google Extensions (Gmail, Google Calendar) | Ativação agora funciona em deployments onde o operador fornece o Google OAuth client via Web UI, sem necessidade de variáveis de ambiente |

**Nota:** Esta correção foi portada diretamente da rc.1, mantendo escopo restrito à estabilidade do OAuth.

---

## 3. Progresso do Projeto

### PRs em Aberto (24h)

| # | Título | Size | Risco | Escopo | Atualização |
|---|--------|------|-------|--------|-------------|
| [#7988](https://github.com/nearai/ironclaw/pull/7988) | `chore(agents): refresh codebase knowledge graph` | XS | low | CI/Infrastructure | 2026-09-24 |
| [#8110](https://github.com/nearai/ironclaw/pull/8110) | `chore(release): cut 1.4.1-rc.2` | M | low | docs, dependencies | 2026-09-23 |

**Análise:**

- **PR #7988:** Atualização do snapshot de bootstrap do codebase-memory. Este é um PR de infraestrutura gerado automaticamente pelo workflow noturno. Aguardando revisão da equipe core. Não foram reportados merges ou fechamentos nas últimas 24h.

- **PR #8110:** Promoção do branch de release `1.4.1-rc.1` para `1.4.1-rc.2`. Inclui refresh de lockfiles com patches de segurança (`wasmtime 47.0.4`, `rustls 0.23.45`). Também aguardando merge.

**Status de Merge:** Nenhum PR foi merged ou fechado nas últimas 24h. O ciclo de release 1.4.1 está em fase de validação.

---

## 4. Temas Quentes da Comunidade

### Issues Recentes (Total: 1)

| # | Título | Status | Reações | Comentários |
|---|--------|--------|---------|-------------|
| [#8111](https://github.com/nearai/ironclaw/issues/8111) | Daily ironclaw failure taxonomy — 2026-09-24 | OPEN | 0 👍 | 0 |

**Análise da Issue #8111:**

A issue apresenta a análise diária de taxonomy de falhas do IronClaw nos benchmarks. Dados relevantes:

- **Suite analisada:** `officeqa` (38 tarefas non-pass)
- **Link do benchmark:** [ironclaw/officeqa run #69f799a5](https://nearai.github.io/benchmarks/#/runs/ironclaw/officeqa/69f799a5-16f3-4577-b008-89c48b9deb82)
- **Causa identificada:** Falhas genuínas de qualidade do modelo `deepseek-v4-flash` em tarefas envolvendo OCR de documentos do Treasury
- **Autor:** pranavraja99 (2026-09-24)

**Interpretação:** Esta é uma issue de monitoramento automatizado, não uma reclamação de usuário. Indica que a equipe mantém rastreamento ativo de métricas de qualidade em produção.

---

## 5. Bugs e Estabilidade

### Status Atual

| Categoria | Quantidade (24h) |
|-----------|------------------|
| Bugs reportados | 0 |
| Issues de estabilidade | 0 |
| Regressões | 0 |

**Observações:**

- A issue #8111 não configura um bug técnico, mas documenta limitações de desempenho do modelo subjacente (`deepseek-v4-flash`) em tarefas específicas de OCR.
- A release 1.4.1-rc.2 aborda um problema pré-existente com OAuth via Web UI nas extensões Google.

**Métricas de Saúde:**

```
Issues abertas (24h):     1
Issues fechadas (24h):    0
PRs abertos (24h):        2
PRs merged/fechados (24h): 0
Release atividade:        ✅ Ativa (rc.2)
```

---

## 6. Pedidos de Features e Sinais de Roadmap

### Sinais Identificados

| Tipo | Origem | Descrição |
|------|--------|-----------|
| Feature implícita | Issue #8111 | Necessidade de melhor handling de documentos OCR em tarefas do Treasury |

**Análise:**

Não há requests explícitos de features nas últimas 24h. A issue de taxonomy indica uma área de melhoria potencial: a robustez do agente em cenários com OCR de baixa qualidade. Isso pode influenciar decisões sobre:

- Integração de modelos de OCR mais precisos
- Fallback strategies para documentos Treasury
- Enhancement do pré-processamento de输入

**Compatível com Roadmap Provável:** Suporte aprimorado a documentos não-estruturados.

---

## 7. Resumo de Feedback dos Usuários

### Dados Disponíveis (24h)

| Tipo | Volume | Sentimento |
|------|--------|------------|
| Issues de usuários | 0 | N/A |
| Comentários em issues | 0 | N/A |
| Reações | 0 | N/A |

**Análise:**

As últimas 24h não registraram feedback explícito de usuários finais. A issue #8111 é uma análise interna de performance gerada automaticamente, não feedback de usuário.

**Contexto:** O baixo volume de feedback direto pode indicar:
- Estabilidade operacional do produto
- Usuários satisfeitos (sem necessidade de reportar)
- Período de baixa adoção externa
- Ou simplesmente um dia de baixa atividade comunitária

**Recomendação:** Monitorar tendência nas próximas semanas para validar.

---

## 8. Backlog que Merece Atenção

### Items Sem Resposta Prolongada

| # | Título | Idade | Prioridade | Última Atualização |
|---|--------|-------|------------|---------------------|
| [#7988](https://github.com/nearai/ironclaw/pull/7988) | `chore(agents): refresh codebase knowledge graph` | ~27 dias | low (CI) | 2026-09-24 |

**Análise do PR #7988:**

Este PR está aberto desde **2026-08-29** (~27 dias), o que é significativo para um PR de infraestrutura. Embora seja de tamanho XS e risco low, e已被 gerado automaticamente pelo workflow, ele:

- Atualiza o snapshot de bootstrap do codebase-memory
- Depende de revisão manual para merge
- Não possui linked issues ou dependências explícitas

**Recomendação:** Priorizar review e merge para manter a sincronia do codebase-memory com o default branch. Este é um PR de baixa urgência mas que não deveria acumular delay prolongado.

---

## Resumo Executivo

| Dimensão | Status | Tendência |
|----------|--------|-----------|
| **Atividade de Código** | Moderada | Estável |
| **Ciclo de Release** | 1.4.1-rc.2 em validação | Progressando |
| **Bugs Críticos** | Nenhum reportado | ✅ Verde |
| **Engajamento Comunitário** | Baixo (1 issue, 0 feedback) | Neutro |
| **Dívida Técnica** | PR #7988 pendente (~27d) | Atenção |

**Conclusão Geral:** O projeto IronClaw apresenta saúde estável em 2026-09-25. A release candidate 1.4.1-rc.2 avança com correções de OAuth para extensões Google. A atenção deve se concentrar na revisão do PR #7988 (infraestrutura CI) que aguarda merge há quase um mês.

---

*Relatório gerado automaticamente com base nos dados do GitHub. Última atualização: 2026-09-25.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do Projeto CoPaw — 2026-09-25

---

## 1. Panorama do Dia

O projeto CoPaw (QwenPaw) apresenta **alta atividade comunitária** em 25 de setembro de 2026, com 34 issues e 23 PRs atualizados nas últimas 24 horas. Não há novos lançamentos formais, mas o desenvolvimento está intenso em versões beta (2.2.2b2–b4), com múltiplas correções de regressões críticas. A equipe mantém ritmo acelerado de merges, especialmente no console web e funcionalidades de memória. A comunidade demonstra forte engajamento em features de infraestrutura (multi-tenant Hub, terminal multi-tab, voz em tempo real).

---

## 2. Lançamentos

**Nenhum release formal nas últimas 24h.**

O último release estável mencionado nos issues é **v2.2.0**, com betas subsequentes (2.2.2b2–b4) em desenvolvimento ativo. Issues como [#7968](https://github.com/agentscope-ai/QwenPaw/issues/7968) e [#7966](https://github.com/agentscope-ai/QwenPaw/issues/7966) indicam que a versão 2.2.2b3 introduziu regressões no console que estão sendo corrigidas nos PRs subsequentes.

> ⚠️ **Alerta de estabilidade:** Usuários da 2.2.2b3 devem considerar atualização para b4 ou aguarda próxima release ao reportarem problemas com grupos de chat ou URLs de mídia.

---

## 3. Progresso do Projeto

### PRs Mergeadas/Fechadas Hoje (destaque)

| PR | Título | Impacto |
|----|--------|---------|
| [#7972](https://github.com/agentscope-ai/QwenPaw/pull/7972) | `fix(console): default session list grouping to source` | Corrige regressão do redesign do sidebar no b3 — grupos de chat restaurados |
| [#7971](https://github.com/agentscope-ai/QwenPaw/pull/7971) | `fix(console): gate tool-call lifecycle queries on execution start` | Corrige polling prematuro de tool-calls no console |
| [#7960](https://github.com/agentscope-ai/QwenPaw/pull/7960) | `fix(providers): recover after stalled stream cleanup` | Corrige provider quarantined após stream travado — reduz falhas após restart |
| [#5659](https://github.com/agentscope-ai/QwenPaw/pull/5659) | `fix(chat): allow sending attachments without text` | Permite envio de anexos sem texto na WeChat empresarial |

### PRs Abertas de Alto Impacto

- **[#7785](https://github.com/agentscope-ai/QwenPaw/pull/7785)** — `feat(voice): add realtime voice chat` — Feature significativa de voz integrada ao chat
- **[#7931](https://github.com/agentscope-ai/QwenPaw/pull/7931)** — `feat(chat): add durable paginated transcript history` — Transcrições persistidas com SQLite
- **[#7861](https://github.com/agentscope-ai/QwenPaw/pull/7861)** — `feat(console): add authenticated multi-tab chat terminal` — Terminal xterm integrado ao console
- **[#7719](https://github.com/agentscope-ai/QwenPaw/pull/7719)** — `feat(memory): allow a separate model for ReMeLight memory writing` — Reduz custo usando modelo barato para memória

---

## 4. Temas Quentes da Comunidade

### Issue com Maior Engajamento

| # | Título | Comentários | Tipo |
|---|--------|-------------|------|
| [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) | QwenPaw Hub (multi-tenant) — o que construir agora? | **32** | Discussion |

**Análise:** O QwenPaw Hub, lançado em 2.2.0, desperta forte interesse da comunidade empresarial. A discussão (#7318) coleta requisitos para a próxima fase multi-tenant, indicando demanda por:
- Gerenciamento centralizado de agentes
- Controle de acesso por equipes
- Marketplace de skills compartilhadas

### Outras Discussões Ativas

- **[#7571](https://github.com/agentscope-ai/QwenPaw/issues/7571)** — Agente "esquece" configurações de workspace após dias — 8 comentários, problema de persistência de memória de longo prazo
- **[#7377](https://github.com/agentscope-ai/QwenPaw/issues/7377)** — Loop mode não persiste entre execuções — 5 comentários
- **[#7957](https://github.com/agentscope-ai/QwenPaw/issues/7957)** — Solicitações para desabilitar modelos/canais pré-fabricados — 2 comentários

---

## 5. Bugs e Estabilidade

### 🔴 Críticos (regressões ou crashes)

| # | Severidade | Descrição | Última Atualização |
|---|------------|-----------|-------------------|
| [#7968](https://github.com/agentscope-ai/QwenPaw/issues/7968) | **Alta** | Console sidebar redesign (b3) quebrou chat groups — impossível criar/ver grupos | 2026-09-24 |
| [#7966](https://github.com/agentscope-ai/QwenPaw/issues/7966) | **Alta** | Sessão permanentemente quebrada após troca de provider: URLs `file://` rejeitadas com `invalid_parameter_error` | 2026-09-24 |
| [#7963](https://github.com/agentscope-ai/QwenPaw/issues/7963) | **Alta** | Langfuse nunca registra output de tools (observabilidade) | 2026-09-24 |
| [#7534](https://github.com/agentscope-ai/QwenPaw/issues/7534) | **Alta** | Consumer de queue Feishu trava silenciosamente após horas, sessão unresponsive | 2026-09-24 |

### 🟡 Moderados (funcionalidade degradada)

| # | Descrição |
|---|-----------|
| [#7576](https://github.com/agentscope-ai/QwenPaw/issues/7576) | `RetryChatModel` hardcoded 32768 tokens causa falha em modelos <31130 tokens |
| [#7628](https://github.com/agentscope-ai/QwenPaw/issues/7628) | Context compaction excede budget do provider em turns ativos |
| [#7715](https://github.com/agentscope-ai/QwenPaw/issues/7715) | Daily Paper falha silenciosamente quando arxiv.org inacessível |
| [#7959](https://github.com/agentscope-ai/QwenPaw/issues/7959) | Moonshot rejeita schemas MCP com `anyOf` sem `type` definido |

### 🟢 Menores (first-time contributors + fixes)

Múltiplos PRs de contributors novatos hoje (4 PRs com tag `[first-time-contributor]`), indicando saúde na captação de novos colaboradores. Correções incluem:
- [#7975](https://github.com/agentscope-ai/QwenPaw/pull/7975) — Plugin dir desabilitado não deve contar como instalado
- [#7974](https://github.com/agentscope-ai/QwenPaw/pull/7974) — Login QR WeChat com timeout baseado em tempo real
- [#7967](https://github.com/agentscope-ai/QwenPaw/pull/7967) — Fechamento de chunks Markdown com fence correto

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| # | Feature | Sinais de Prioridade |
|---|---------|---------------------|
| [#7976](https://github.com/agentscope-ai/QwenPaw/issues/7976) | **App móvel oficial (Android)** — conexão segura com servidor próprio | 1 👍, muitos comentários |
| [#7957](https://github.com/agentscope-ai/QwenPaw/issues/7957) | Desabilitar modelos/canais pré-fabricados | Demanda por UI mais limpa |
| [#7733](https://github.com/agentscope-ai/QwenPaw/issues/7733) | **Gestão autônoma de contexto pelo agent** — agent escolhe o que evictar | 3 comentários, discussão técnica |

### Features em Desenvolvimento

| PR | Feature | Estágio |
|----|---------|---------|
| [#7785](https://github.com/agentscope-ai/QwenPaw/pull/7785) | Voice chat em tempo real | Aberta, alta atividade |
| [#7931](https://github.com/agentscope-ai/QwenPaw/pull/7931) | Histórico de chat paginado e durável | Aberta |
| [#7861](https://github.com/agentscope-ai/QwenPaw/pull/7861) | Terminal multi-tab autenticado | Aberta |
| [#7719](https://github.com/agentscope-ai/QwenPaw/pull/7719) | Modelo separado para escrita de memória | Aberta |

> **Indicação de roadmap:** O hub multi-tenant (#7318) e features de infraestrutura (voz, terminal, memória) sugerem foco em cenários empresariais e de uso intensivo.

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais

1. **Memória e contexto de longo prazo**
   - Agente "esquece" configurações de workspace após dias de uso ([#7571](https://github.com/agentscope-ai/QwenPaw/issues/7571))
   - Compaction de contexto não respeita budget completo do provider ([#7628](https://github.com/agentscope-ai/QwenPaw/issues/7628))
   - Eviction pode perder turns do usuário ([#7836](https://github.com/agentscope-ai/QwenPaw/issues/7836))

2. **Estabilidade de sessões prolongadas**
   - Consumer Feishu trava após horas sem erro visível ([#7534](https://github.com/agentscope-ai/QwenPaw/issues/7534))
   - Loop mode não persiste entre execuções ([#7377](https://github.com/agentscope-ai/QwenPaw/issues/7377))

3. **Questões de segurança e guardrails**
   - `execute_shell_command` pode burlar File Guard ([#2967](https://github.com/agentscope-ai/QwenPaw/issues/2967)) — reportada em Abril, ainda relevante
   - Shell evasion com newlines bloqueia comandos legítimos ([#4244](https://github.com/agentscope-ai/QwenPaw/issues/4244))

4. **Integração com provedores**
   - ChatGPT-5.5 não suportado ([#4474](https://github.com/agentscope-ai/QwenPaw/issues/4474))
   - Moonshot rejeita schemas MCP específicos ([#7959](https://github.com/agentscope-ai/QwenPaw/issues/7959))
   - MCP streamable_http sem auto-reconexão ([#5900](https://github.com/agentscope-ai/QwenPaw/issues/5900))

### Cenários de Uso Reportados

- **Desenvolvimento de plugins:** Usuário configura workspace em A, mas agent persiste código em C, causando overwrite acidental ([#7571](https://github.com/agentscope-ai/QwenPaw/issues/7571))
- **Análise de arquivos CAD/PLM:** Desejo de upload sem texto adicional para agentes specialized ([#5558](https://github.com/agentscope-ai/QwenPaw/issues/5558))
- **Uso empresarial via WeChat:** Necessidade de múltiplos agentes com canais independentes ([#2013](https://github.com/agentscope-ai/QwenPaw/issues/2013))

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Estagnadas

| # | Idade | Título | Prioridade |
|---|-------|-------|------------|
| [#2967](https://github.com/agentscope-ai/QwenPaw/issues/2967) | ~5 meses | `execute_shell_command` pode burlar File Guard | **Segurança** |
| [#4244](https://github.com/agentscope-ai/QwenPaw/issues/4244) | ~4 meses | Shell evasion newlines bloqueia comandos legítimos | **UX** |
| [#4474](https://github.com/agentscope-ai/QwenPaw/issues/4474) | ~4 meses | Suporte a ChatGPT-5.5? | **Feature** |
| [#5558](https://github.com/agentscope-ai/QwenPaw/issues/5558) | ~3 meses | WeChat: anexo sem texto não habilita envio | **Feature** |
| [#5900](https://github.com/agentscope-ai/QwenPaw/issues/5900) | ~2.5 meses | MCP streamable_http sem auto-reconexão | **Estabilidade** |
| [#2013](https://github.com/agentscope-ai/QwenPaw/issues/2013) | ~6 meses | Dois agentes com mesmo canal WeChat? | **Feature** |

### Recomendações

1. **Segurança (#2967):** Issue de Abril sem confirmação de fix. Avaliar se ainda reproduzível na v2.2.x
2. **UX Shell (#4244):** Default `newlines=True` afeta produtividade — considerar smarter validation
3. **Multi-agente WeChat (#2013):** Demanda empresarial clara há 6 meses — avaliar viabilidade técnica
4. **MCP Reconnect (#5900):** Padrão comum em ambientes instáveis — alto impacto se corrigido

---

## Métricas Resumidas

| Indicador | Valor |
|-----------|-------|
| Issues ativas (24h) | 18 |
| Issues fechadas (24h) | 16 |
| PRs abertas | 17 |
| PRs merged/fechadas | 6 |
| Novas releases | 0 |
| Issue mais comentada | #7318 (32 comentários) |
| First-time contributors | 4 PRs hoje |

**Saúde geral:** ★★★★☆ — Atividade alta, ciclo de releases beta ativo, mas regressões recentes no console exigem atenção. Segurança e estabilidade de sessões prolongadas são áreas críticas a endereçar.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório de Projeto — ZeroClaw
**Data de referência:** 2026-09-25  
**Fonte:** github.com/zeroclaw-labs/zeroclaw

---

## 1. Panorama do dia

O projeto ZeroClaw apresenta **alta atividade** em 25 de setembro de 2026, com 26 issues atualizadas e 50 PRs movimentados nas últimas 24 horas. A ênfase atual está na consolidação de funcionalidades críticas — SOP (Standard Operating Procedures), OIDC/Identity & Access, e ZeroRelay — com múltiplos PRs em stack e trackers coordenando entregas das versões v0.8.6 e v0.9.0. Três bugs de alta severidade (S0/S1) exigem atenção imediata, incluindo um problema de segurança no ApprovalManager e perda silenciosa de dados no backend de memória. Não há releases novas, indicando foco em estabilidade e qualidade antes do próximo tag.

---

## 2. Lançamentos

### Nenhuma release registrada nas últimas 24h

O projeto encontra-se em período pré-release, com trabalho ativo nos milestone trackers:
- **v0.8.6** — Fase 2 do runtime e work leftover de gateway ([#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432))
- **v0.9.0** — Separação gateway/runtime e ZeroRelay native transport ([#8358](https://github.com/zeroclaw-labs/zeroclaw/issues/8358))

---

## 3. Progresso do Projeto

### PRs fechadas/merged recentemente

| PR | Título | Impacto |
|----|--------|---------|
| [#11102](https://github.com/zeroclaw-labs/zeroclaw/pull/11102) | feat(sop): drive headless SOP runs, and rename SOPs from every authoring surface | **Crítico** — Consolida stack inteiro do SOP em um PR; fecha 5 defeitos e adiciona rename atômico |
| [#9841](https://github.com/zeroclaw-labs/zeroclaw/pull/9841) | fix(sop): drive headless SOP runs, and close the five defects found reviewing #9494 | Resolve hangforever em runs headless via channel/cron triggers |
| [#10233](https://github.com/zeroclaw-labs/zeroclaw/pull/10233) | feat(sop): add a collision-checked atomic SOP rename flow | Previne fork de SOP por rename conflitante |
| [#10527](https://github.com/zeroclaw-labs/zeroclaw/pull/10527) | feat(sop): rename a SOP from the web editor, unblock zerocode pane | Melhora DX no web editor |
| [#10834](https://github.com/zeroclaw-labs/zeroclaw/pull/10834) | docs(adr): record runtime security provenance boundaries | ADR-018 documentando arquitetura de segurança |

### PRs abertas em destaque

- [#11082](https://github.com/zeroclaw-labs/zeroclaw/pull/11082) — **OIDC principals, enrollment e gateway auth surface** (XL, stacked, dependência #8289)
- [#10538](https://github.com/zeroclaw-labs/zeroclaw/pull/10538) — fix(gateway): manter agent turn rodando quando WebSocket disconnecta (XL, needs-maintainer-review)
- [#11099](https://github.com/zeroclaw-labs/zeroclaw/pull/11099) + [#11089](https://github.com/zeroclaw-labs/zeroclaw/pull/11089) — Relay frontdoor com link/QR prefilled (enrollment UX)
- [#11061](https://github.com/zeroclaw-labs/zeroclaw/pull/11061) — fix(security): bloquear high-risk shell commands mesmo em allowlist (S, needs-maintainer-review)

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários + thumbs)

| Issue | Título | Comentários | Tema central |
|-------|--------|-------------|--------------|
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | [Tracker] Maintainer decision queue for RFCs | 15 | Process/Governança |
| [#6489](https://github.com/zeroclaw-labs/zeroclaw/issues/6489) | [Tracker] Unified capability catalog and plugin migration | 8 | Arquitetura/Plugin |
| [#8519](https://github.com/zeroclaw-labs/zeroclaw/issues/8519) | Reconciliar cargo-audit ignores e CVEs wasmtime-wasi | 7 | Segurança/Dependencies |
| [#9899](https://github.com/zeroclaw-labs/zeroclaw/issues/9899) | Remover matrix-sdk → imbl advisory waivers | 6 | Segurança/RUSTSEC |
| [#8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850) | Move optional channels/tools para runtime plugins | 5 | Arquitetura/Plugins |
| [#10315](https://github.com/zeroclaw-labs/zeroclaw/issues/10315) | Re-add browser enrollment frontdoor sem hand-rolled TLS | 5 | Segurança/ZeroRelay |
| [#10970](https://github.com/zeroclaw-labs/zeroclaw/issues/10970) | RFC: Host-scoped admission control e per-agent resource bounds | 5 | Arquitetura/Multi-agent |
| [#11027](https://github.com/zeroclaw-labs/zeroclaw/issues/11027) | RFC: Agent-to-agent session messaging | 3 | Arquitetura/Agent-loop |

**Análise:** A comunidade demonstra preocupação significativa com (1) governança de decisões de design (RFC queue), (2) arquitetura de plugins e capability catalog, e (3) segurança em múltiplas camadas (TLS, shell commands, admission control). A atividade de RFCs indica maturidade no processo de design.

---

## 5. Bugs e Estabilidade

### Severidade S0 — Data loss / Security risk

| Issue | Descrição | Link |
|-------|-----------|------|
| [#10968](https://github.com/zeroclaw-labs/zeroclaw/issues/10968) | Unattended agent turns (cron, heartbeat, headless SOP) rodam sem ApprovalManager — tool approvals de risk-profile são silenciosamente inertes | 🔴 Crítico |
| [#10797](https://github.com/zeroclaw-labs/zeroclaw/issues/10797) | markdown memory backend perde entries silenciosamente em store() sobrepostas (concurrency) | 🔴 Data loss |

### Severidade S1 — Workflow blocked

| Issue | Descrição | Link |
|-------|-----------|------|
| [#11087](https://github.com/zeroclaw-labs/zeroclaw/issues/11087) | Windows — após fechar janela, app não pode ser reaberto nem encerrado (single-instance marker preso) | 🟠 Bloqueante |
| [#9805](https://github.com/zeroclaw-labs/zeroclaw/issues/9805) | SOP auto-mode via channel/cron nunca executa e fica 'running' para sempre (agora com PR [#9841](https://github.com/zeroclaw-labs/zeroclaw/pull/9841) merged) | 🟠 Corrigido em PR |

### Severidade S2 — Degraded behavior

| Issue | Descrição | Link |
|-------|-----------|------|
| [#11094](https://github.com/zeroclaw-labs/zeroclaw/issues/11094) | Apple preflight tests falham quando retry sleep mock intercepta subprocess polling | 🟡 CI |
| [#11093](https://github.com/zeroclaw-labs/zeroclaw/issues/11093) | Stable docs promotion deixa root llms files fora de sincronia | 🟡 Docs/CI |
| [#10948](https://github.com/zeroclaw-labs/zeroclaw/issues/10948) | interruption-scope keys colidem entre boundaries de componentes | 🟡 Canal |

### Severidade S3 — Minor

| Issue | Descrição | Link |
|-------|-----------|------|
| [#11097](https://github.com/zeroclaw-labs/zeroclaw/issues/11097) | Plugin egress remedy commands não escapam apostrophes em grants existentes | 🟢 Minor |

**Métricas de bugs:** 3 de alta severidade (S0/S1), 3 de severidade média (S2), 1 menor — indicando pressão sobre estabilidade em cenários de produção (headless, multi-agent, Windows).

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features (criadas em 24h)

| Issue | Título | Domínio | Link |
|-------|--------|---------|------|
| [#11103](https://github.com/zeroclaw-labs/zeroclaw/issues/11103) | Adicionar Cheaper Inference como provider OpenAI-compatible | Providers | Nova |
| [#11100](https://github.com/zeroclaw-labs/zeroclaw/issues/11100) | Preservar provider aliases no cost-rate catalog prefill | UX/Dashboard | Nova |
| [#11096](https://github.com/zeroclaw-labs/zeroclaw/issues/11096) | RFC: Risk-based merge-result freshness | CI/Release | RFC |
| [#11088](https://github.com/zeroclaw-labs/zeroclaw/issues/11088) | Mover multi-agent setup guide de Contributing para Agents | Docs | Docs |

### Trackers de roadmap ativos

| Tracker | Milestone | Progresso | Link |
|---------|-----------|-----------|------|
| SOP milestone | v0.8.6 | PRs em stack sendo consolidados | [#8288](https://github.com/zeroclaw-labs/zeroclaw/issues/8288) |
| OIDC milestone | v0.9.0 | #11082 em desenvolvimento | [#8289](https://github.com/zeroclaw-labs/zeroclaw/issues/8289) |
| ZeroRelay transport | v0.9.0 | Frontdoor pré-preenchimento em PR | [#8358](https://github.com/zeroclaw-labs/zeroclaw/issues/8358) |
| Plugin migration | v0.9.0 | Capacidade unificada em discussão | [#6489](https://github.com/zeroclaw-labs/zeroclaw/issues/6489) |

### RFCs em avaliação

- **[#10970](https://github.com/zeroclaw-labs/zeroclaw/issues/10970)** — Host-scoped admission control para máquinas rodando múltiplos agents (needs-maintainer-review)
- **[#11027](https://github.com/zeroclaw-labs/zeroclaw/issues/11027)** — Agent-to-agent session messaging com receiver discretion (needs-maintainer-review)

**Sinal de roadmap:** O foco em multi-agent resource bounds e agent-to-agent messaging indica direção para ambientes de produção com alta densidade de agents.

---

## 7. Resumo de Feedback dos Usuários

### Dores identificadas

1. **Segurança em automação (crítica):** O bug #10968 expõe que agents não-interativos (cron, headless SOP) executam sem ApprovalManager, deixando tool approvals de alto risco completamente inertes. Isso é um risco operacional real em setups de automação.

2. **Perda de memória (S0):** O backend markdown com stores concorrentes perde dados silenciosamente. Cenários: agentes concurrently storeando conhecimento perdem informações sem qualquer aviso — impacta diretamente o caso de uso de "memória persistente".

3. **UX de enrollment:** O processo atual de browser enrollment requer digitação manual de node id, gerando atrito. A iniciativa de links prefilled (#11089, #11099) responde diretamente a essa fricção.

4. **Binary size e plugin model:** A demanda por runtime plugins (#8850) em vez de feature flags em compile-time indica que usuários querem extensibilidade sem rebuild — caso de uso de distribuição/部署.

### Cenários de uso inferidos

- **Multi-agent hosts:** Máquinas rodando "muitos agents" simultaneamente (contexto #10970)
- **Automação headless:** SOPs disparados por cron/channel sem operator
- **Enterprise identity:** OIDC como requerimento para deployments corporativos

---

## 8. Backlog que Merece Atenção

### Issues sem resposta / stale-hunted

| Issue | Título | Criado | Status | Prioridade |
|-------|--------|--------|--------|------------|
| [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) | Runtime and gateway delivery v0.8.6/v0.9.0 | 2026-06-09 | accepted, no-stale | p2 (trackers) |
| [#6489](https://github.com/zeroclaw-labs/zeroclaw/issues/6489) | Unified capability catalog and plugin migration | 2026-05-06 | in-progress | p2 |
| [#8519](https://github.com/zeroclaw-labs/zeroclaw/issues/8519) | Reconciliar cargo-audit ignores / wasmtime CVEs | 2026-06-30 | accepted | p1, high risk |

### Issues aguardando maintainer review

| Issue | Título | Link |
|-------|--------|------|
| Needs maintainer | RFC: Host-scoped admission control | [#10970](https://github.com/zeroclaw-labs/zeroclaw/issues/10970) |
| Needs maintainer | RFC: Agent-to-agent session messaging | [#11027](https://github.com/zeroclaw-labs/zeroclaw/issues/11027) |
| Needs maintainer | Bug: ApprovalManager inerte em unattended turns | [#10968](https://github.com/zeroclaw-labs/zeroclaw/issues/10968) |
| Needs maintainer | fix(gateway): WebSocket disconnect | [#10538](https://github.com/zeroclaw-labs/zeroclaw/pull/10538) |

### Recomendações de priorização

1. **Crítico imediato:** #10968 (S0 security) e #10797 (S0 data loss) — ambos impacts em produção
2. **Esta semana:** #10538 (XL PR em need-maintainer-review, bloqueia gateway stability)
3. **Sprint atual:** #8289 OIDC milestone (#11082 é XL e consolida 8+ PRs anteriores)
4. **Atenção técnica:** #6489 plugin migration — trabalho em andamento desde maio, precisa de checkpoint

---

## Métricas Consolidada do Dia

| Dimensão | Valor |
|----------|-------|
| Issues ativas (24h) | 26 |
| PRs movimentados (24h) | 50 |
| Novas releases | 0 |
| Bugs S0/S1 | 3 |
| PRs em stack OIDC | 1 (XL) |
| RFCs novas | 2 |
| Issues needs-maintainer-review | 4 |

**Saúde geral:** Projeto em alta atividade com foco em qualidade — bugs críticos abertos balanceados por PRs de correção em pipeline. O investimento em ADR/documentation (#10834) e RFCs (#10970, #11027) indica maturidade de processo. Atenção requerida para S0s e review de PRs bloqueantes antes do próximo release tag.

---

*Relatório gerado automaticamente com base em dados do GitHub. Intervalo: 2026-09-24 00:00 UTC → 2026-09-25 00:00 UTC.*

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*