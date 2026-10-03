# Resumo diário do ecossistema de agentes de IA 2026-10-04

> Issues: 0 | PRs: 20 | Projetos cobertos: 7 | Gerado em: 2026-10-03 22:38 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório do Projeto NullClaw — 2026-10-04

---

## 1. Panorama do dia

O projeto NullClaw apresenta hoje um quadro de **alta atividade de desenvolvimento sem concretização visível ao usuário**. Nas últimas 24 horas, **20 pull requests foram atualizados**, porém **nenhum foi merged ou fechado**, e **nenhum novo release foi publicado**. Todas as 20 PRs permanecem em estado `OPEN`, sinalizando uma fase de depuração e refinamento intensivo de código. Não há issues abertas, fechadas ou releases novas, o que indica que o mantenedor **vernonstinebaker** está focado em limpar o backlog técnico antes de um próximo lançamento. A ausência de reações (0 👍) e comentários externos nas PRs sugere que ainda não há envolvimento significativo da comunidade.

---

## 2. Lançamentos

**Nenhum release publicado nas últimas 24 horas.**

O último release rastreável não foi informado nos dados disponíveis. O projeto encontra-se em uma fase pré-release, com todas as 20 PRs abertas representando candidate changes que aguardam revisão e merge.

---

## 3. Progresso do Projeto

**Nenhuma PR foi merged ou fechada nas últimas 24 horas.**

Apesar da falta de merges formais, as 20 PRs abertas representam avanços substanciais que estão sendo preparados para incorporação:

| # | Título | Categoria | Idade | Última Atualização |
|---|--------|-----------|-------|---------------------|
| [#953](https://github.com/nullclaw/nullclaw/pull/953) | recover gateway sockets with safe shutdown ownership | fix(channels) | ~4 meses | 2026-10-03 |
| [#954](https://github.com/nullclaw/nullclaw/pull/954) | preserve outbound ownership on allocation failures | fix(channels) | ~4 meses | 2026-10-03 |
| [#987](https://github.com/nullclaw/nullclaw/pull/987) | loop hygiene for long local tool-heavy runs | feat(agent) | ~2 meses | 2026-10-03 |
| [#1001](https://github.com/nullclaw/nullclaw/pull/1001) | add configurable auto-recall, recall_limit, max_context_bytes | feat(memory) | ~10 dias | 2026-10-03 |
| [#1012](https://github.com/nullclaw/nullclaw/pull/1012) | scope tasks and context sessions by bearer principal | fix(a2a) | ~7 dias | 2026-10-03 |

As PRs mais recentes (setembro 2026) são as que têm maior probabilidade de serem merged em breve, especialmente as de fix de estabilidade (#1010, #1011, #1012).

---

## 4. Temas Quentes da Comunidade

**Não há métricas de engajamento community detectáveis.** Nenhuma das 20 PRs registradas apresenta comentários ou reações:

- 👍 **Reações:** 0 em todas as PRs
- 💬 **Comentários:** `undefined` (não registrado) em todas as PRs

**Análise das demandas implícitas nas PRs:**

O foco do desenvolvimento recai sobre três áreas principais:

1. **Estabilidade de canais** (Discord, Telegram, Weixin, HTTP): correções de crashes, vazamentos de memória e edge cases com sockets e workers de typing
2. **Melhoria do loop de agente**: hygiene para runs longas com ferramentas locais, compressão de histórico, e suporte a tool calls nativas durante streaming SSE
3. **Segurança e hardening**: persistência segura de credenciais, scope de sessões por bearer principal, e scrub de logs de erro

O volume de PRs de segurança e estabilidade sugere que o projeto está amadurecendo e se preparando para uso em produção.

---

## 5. Bugs e Estabilidade

**Todas as 20 PRs abertas tratam de correções ou features, indicando um ciclo ativo de hardening.** Principais correções de bugs identificadas:

### Crashes e Terminações Inesperadas

| Severidade | # | Descrição |
|------------|---|-----------|
| 🔴 Alta | [#953](https://github.com/nullclaw/nullclaw/pull/953) | Discord gateway connections travadas — socket é encerrado antes de workers de heartbeat; bounded pre-HELLO health; backoff em RESUME attempts |
| 🔴 Alta | [#1002](https://github.com/nullclaw/nullclaw/pull/1002) | HTTPS typing workers estouram stack de 512 KiB dentro da inicialização Zig TLS — alocado stack de 2 MiB (heavy runtime) |
| 🔴 Alta | [#1010](https://github.com/nullclaw/nullclaw/pull/1010) | Discord: bot alimentando próprias respostas de volta ao agente quando `allow_bots = true` |

### Vazamentos de Memória

| Severidade | # | Descrição |
|------------|---|-----------|
| 🟠 Média | [#954](https://github.com/nullclaw/nullclaw/pull/954) | Vazamento de ownership em outbound delivery quando alocações falham |
| 🟠 Média | [#1011](https://github.com/nullclaw/nullclaw/pull/1011) | `parseXmlToolCalls` vaza allocations de `name` e `arguments` quando append falha |
| 🟠 Média | [#1005](https://github.com/nullclaw/nullclaw/pull/1005) | Archive copies sendo injetadas em prompts e `memory_recall` indevidamente |

### Bugs de Funcionalidade

| Severidade | # | Descrição |
|------------|---|-----------|
| 🟡 Baixa | [#1006](https://github.com/nullclaw/nullclaw/pull/1006) | Streamed CLI stdout sobrescrevia offset 0 em vez de append — corrupção de output no macOS |
| 🟡 Baixa | [#1005](https://github.com/nullclaw/nullclaw/pull/1005) | Session search aplicava `LIMIT` antes do filtro de sessão |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em desenvolvimento (13 de 20 PRs são `feat` ou `fix` com dimensão de feature):

| # | Feature | Complexidade | Impacto |
|---|---------|--------------|---------|
| [#971](https://github.com/nullclaw/nullclaw/pull/971) | Native tool calls durante SSE streaming | Alta | Decopla tool calls do prompt-injection para providers que suportam nativamente |
| [#987](https://github.com/nullclaw/nullclaw/pull/987) | Loop hygiene + compressão de tool outputs + dedup de chamadas idênticas | Alta | Performance em runs longas e locais |
| [#1001](https://github.com/nullclaw/nullclaw/pull/1001) | `memory.auto_recall`, `memory.recall_limit`, `memory.max_context_bytes` configuráveis | Média | Controle granular de injeção de memória |
| [#970](https://github.com/nullclaw/nullclaw/pull/970) | Line editor POSIX raw-mode para REPL (`nullclaw agent`) | Média | Usabilidade — arrow keys, history, cursor movement |
| [#1003](https://github.com/nullclaw/nullclaw/pull/1003) | Seguir symlinks em skill directories | Baixa | Flexibilidade de organização de skills |
| [#1008](https://github.com/nullclaw/nullclaw/pull/1008) | Guia de subsystems: MCP, subagents, voice, hardware (EN/CN) | Documentação | Onboarding e descoberta |

### Sinais de roadmap detectados:

1. **Multi-provider hardening**: Anthropic provider nativo (#962) sendo documentado e fortalecido
2. **Segurança cross-channel**: A2A scope por bearer principal (#1012) fecha #974 — indica que autenticação e multi-tenancy estão amadurecendo
3. **Memory/Context management**: O investimento em recall controls e archive handling sugere foco em contextos longos

---

## 7. Resumo de Feedback dos Usuários

**Não há dados de feedback dos usuários disponíveis neste ciclo.**

A ausência de issues, comentários em PRs, reações e releases indica:

- O projeto pode estar em fase de **uso interno ou early-stage** sem base de usuários ativa reportando
- O mantenedor único (**vernonstinebaker**) está conduzindo tanto o desenvolvimento quanto o QA internamente
- A documentação em inglês e chinês sendo adicionada (#1008, #1007) pode indicar preparação para expansão de audiência

**Perfil de usuário inferido das correções:**
- Usuários de Discord com bots configurados (`allow_bots`, ignore self-messages)
- Usuários de terminais não-Unix (macOS pipe behavior em #1006)
- Usuários mobile (Android/Termux em #966)
- Usuários que executam runs locais longas com muitas ferramentas (#987)

---

## 8. Backlog que Merece Atenção

### PRs em aberto há >60 dias sem movimento aparente:

| # | Idade | Título | Prioridade |
|---|-------|--------|------------|
| [#953](https://github.com/nullclaw/nullclaw/pull/953) | ~4 meses | recover gateway sockets | 🔴 Crítica |
| [#954](https://github.com/nullclaw/nullclaw/pull/954) | ~4 meses | preserve outbound ownership | 🟠 Alta |
| [#959](https://github.com/nullclaw/nullclaw/pull/959) | ~3.5 meses | persist scheduler credential securely | 🔴 Segurança |
| [#962](https://github.com/nullclaw/nullclaw/pull/962) | ~3.5 meses | document and harden Anthropic setup | 🟡 Média |
| [#963](https://github.com/nullclaw/nullclaw/pull/963) | ~3.5 meses | document and harden Weixin iLink QR | 🟡 Média |
| [#966](https://github.com/nullclaw/nullclaw/pull/966) | ~3.5 meses | secure buffered curl fallback on Android | 🟠 Alta |
| [#971](https://github.com/nullclaw/nullclaw/pull/971) | ~3 meses | native tool calls during SSE streaming | 🟠 Alta |
| [#1012](https://github.com/nullclaw/nullclaw/pull/1012) | ~7 dias | scope tasks and context by bearer principal | 🔴 Segurança |

### Recomendações:

1. **Revisar e priorizar merges**: as PRs de segurança (#959, #1012) e estabilidade de gateway (#953, #1002) estão maduras e devem ser priorizadas
2. **Engajamento comunitário**: todas as 20 PRs aguardam review — a falta de reviewers pode ser um gargalo
3. **Release strategy**: com 20 PRs abertas e várias maduras, um release incremental faria sentido
4. **Issue triage**: zero issues reportadas pode indicar subnotificação — 고려要不要 abrir canais de feedback

---

*Relatório gerado em 2026-10-04 com base nos dados públicos do GitHub de [nullclaw/nullclaw](https://github.com/nullclaw/nullclaw).*

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo — Ecossistema de Agentes de IA Open Source

**Data de Referência:** 2026-10-04  
**Projetos Analisados:** NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw, ZeroClaw

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta um **ciclo de maturação acelerada** em outubro de 2026, com projetos concentrando esforços em trêsvetores: **estabilidade de produção** (canais, updates, credenciais), **experiência mobile/touch** e **hardening de segurança**. A maioria dos projetos encontra-se em fase pré-release, com atividade intensa mas baixa taxa de entrega formal (poucos releases). ZeroClaw e Hermes Agent lideram em volume de atividade, enquanto PicoClaw e IronClaw mostram sinais de estagnação. A fragmentação de canais (Discord, Telegram, QQ, Weixin, WhatsApp, Matrix, Slack) permanece como o principal desafio técnico compartilhado.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | Merges (24h) | Releases (24h) | Saúde |
|---------|--------------|-----------|--------------|----------------|-------|
| **ZeroClaw** | 50 | 50 | 2 | 0 | 🟡 Alta atividade, baixa entrega |
| **Hermes Agent** | 50 | 50 | 2 | 0 | 🟡 Alta atividade, backlog elevado |
| **NanoBot** | 1 | 46 | 17 | 0 | 🟢 Melhor taxa de merge (~37%) |
| **CoPaw** | 10 | 11 | 0 | 0 | 🟡 Pipeline congestionado |
| **NullClaw** | 0 | 20 | 0 | 0 | 🟠 Fase de depuração intensiva |
| **PicoClaw** | 1 | 0 | 0 | 0 | 🔴 Estagnação |
| **IronClaw** | 1 | 0 | 0 | 0 | 🔴 Estagnação + bug crítico |

**Observação:** NanoBot destaca-se pela **taxa de merge mais eficiente** (37%), indicando pipeline de review maduro. ZeroClaw e Hermes Agent concentram volume massivo de atividade sem converter em releases, sugerindo ciclos de desenvolvimento mais longos ou etapas de validação mais rigorosas.

---

## 3. Posicionamento do Projeto Principal

### Candidatos a Referência

#### **ZeroClaw** — Volume e Complexidade
- **Vantagem:** Ecossistema mais completo em termos de canais (7+), providers e tooling. Roadmap claro com separação gateway/runtime em v0.9.0.
- **Diferenciação técnica:** Arquitetura Rust/Dioxus com WASM PoC para Skills dashboard; esforço-aware routing entre local/cloud.
- **Comunidade:** 50+ contributors ativos, 100+ issues/PRs por ciclo.
- **Risco:** 2 merges em 50+ PRs indica gargalo de review ou CI/CD.

#### **Hermes Agent** — Segurança e Multi-tenancy
- **Vantagem:** Foco em compliance (audit logs), rate limiting por provider, e multi-profile enterprise.
- **Diferenciação técnica:** Plugin catalog em expansão (Home Assistant); per-task Hermes profile routing.
- **Comunidade:** Volume alto de issues (38 ativas), indicando base de usuários ativa reportando.

#### **NanoBot** — Eficiência de Pipeline
- **Vantagem:** Taxa de merge mais alta do ecossistema; 257 testes TUI passando consistentemente.
- **Diferenciação técnica:** Mobile WebUI bem desenvolvido; MCP discovery completo.
- **Comunidade:** 20+ contribuidores com PRs simultâneos.

### NullClaw — Foco em Estabilidade
- Projeto de mantenedor único (vernonstinebaker) com 20 PRs abertas há semanas. Fase de hardening pré-produção com foco em crashes de gateway Discord e segurança de credenciais. **Não recomendado como referência** até estabilização.

---

## 4. Focos Técnicos Compartilhados

### 4.1 Estabilidade de Canais de Comunicação

Todos os projetos com atividade significativa enfrentam problemas de integração com canais:

| Canal | Projetos Afetados | Tipo de Problema |
|-------|-------------------|------------------|
| Discord | NullClaw, Hermes Agent | Gateway crashes, bot feedback loops |
| Telegram | ZeroClaw, NanoBot | Socket stalls, CPU spin |
| QQ | PicoClaw | API deprecation |
| Weixin | NullClaw | iLink QR integration |
| WhatsApp | Hermes Agent | CVE em qs (DoS) |
| Matrix | CoPaw | OIDC MSC2965 compatibility |
| Slack | ZeroClaw | "is thinking…" regression |

**Conclusão:** A fragmentação de adapters de canal gera维护 burden significativo. Nenhum projeto padronizou abstração de canal de forma consistente.

### 4.2 Mobile/Touch UX

Três projetos simultaneamente investindo em mobile:

- **NanoBot:** Navegação acima do teclado virtual, controles de preview enlarged, envio via botão (#6023, #6022)
- **CoPaw:** Settings drawer mobile-first (#8086)
- **CoPaw:** Web console adaptation (#6281 — 75 dias em aberto)

**Sinal de mercado:** Demanda crescente por agentes que funcionam em dispositivos móveis e tablets, não apenas desktop/TUI.

### 4.3 Memory e Context Management

| Projeto | Feature |
|---------|---------|
| NullClaw | `memory.auto_recall`, `memory.recall_limit`, `memory.max_context_bytes` configuráveis (#1001) |
| Hermes Agent | Store bulky tool results, fetch on demand (#132184) |
| CoPaw | Chat history curto após compressão (#7884 — 8 comentários, frustração explícita) |
| ZeroClaw | SQLite rewrites created_at em cada turn (#11420) |

**Conclusão:** Custo de contexto e persistência de histórico são dores recorrentes. A tendência é oferecer controles granulares sobre injeção de memória.

### 4.4 Segurança e Hardening

| Projeto | Foco |
|---------|------|
| NullClaw | A2A scope por bearer principal (#1012), persistência segura de credenciais (#959) |
| Hermes Agent | CVE fixes (qs bump #105488), audit log de aprovações (#104102) |
| ZeroClaw | owned sessions reaching shared memory (#11239), macOS Seatbelt allowed_roots (#10536) |
| IronClaw | BackendUnavailable em macOS Apple Silicon (#8122) — falha de credenciais |

---

## 5. Análise de Diferenciação

| Dimensão | ZeroClaw | Hermes Agent | NanoBot | CoPaw | NullClaw |
|----------|----------|--------------|---------|-------|----------|
| **Arquitetura** | Rust/Dioxus, WASM | Go/Plugin-first | TypeScript/React | Qwen-based | Zig (?) |
| **Público-alvo primário** | Enterprise/CLI power users | Multi-profile enterprise | Developers/TUI | Chinese market (Lark, WeChat) | Discord-heavy users |
| **Foco principal** | Runtime separation, effort routing | Security, audit, multi-tenancy | TUI stability, mobile | Multimodal, providers | Channel stability |
| **Estratégia de release** | Feature-driven (v0.8.6, v0.9.0) | Campaign-based (updater) | Incremental fixes | Beta-driven (2.2.x) | Pre-release |
| **Comunidade** | 100+ contributors | 50+ issues active | 20+ contributors, efficient | Engaged, emotional feedback | Solo maintainer |

### Arquitetura como Diferenciador

- **ZeroClaw** investe em Rust para performance e WASM para extensibilidade (Skills dashboard).
- **Hermes Agent** adota plugin architecture com hooks (`on_maintenance_tick`).
- **NanoBot** prioriza DX com TUI Suite testada (257 testes).
- **CoPaw** baseia-se em Qwen para integração nativa com ecossistema chinês.
- **NullClaw** usa Zig, diferenciando-se tecnicamente mas com menor base de contributors.

---

## 6. Tração e Maturidade da Comunidade

### Projetos em Fase de Crescimento Rápido

| Projeto | Sinais de Crescimento |
|---------|------------------------|
| **ZeroClaw** | 50 PRs/50 issues por ciclo; 5+ PRs merged recently; roadmap transparente (v0.8.6, v0.9.0) |
| **Hermes Agent** | 38 issues ativas; 7+ novas features; Plugin catalog em expansão |
| **NanoBot** | Taxa de merge saudável; 20+ contribuidores; mobile investment |

### Projetos em Fase de Consolidação

| Projeto | Sinais de Consolidação |
|---------|------------------------|
| **CoPaw** | 11 PRs em review simultâneo; 3 bugs críticos abertos; foco em estabilizar 2.2.x |
| **NullClaw** | 20 PRs abertas há semanas; sem community engagement; pré-produção |

### Projetos em Estagnação

| Projeto | Sinais de Estagnação |
|---------|----------------------|
| **PicoClaw** | 0 PRs, 1 issue sem resposta há 8 dias; QQ Bot API quebrado |
| **IronClaw** | 0 PRs, 1 issue crítica (macOS) sem resposta; 0 releases em 30+ dias |

**Veredicto:** ZeroClaw e Hermes Agent representam o estado da arte em volume de atividade. NanoBot destaca-se em eficiência. PicoClaw e IronClaw necessitam de intervention para não se tornarem abandonware.

---

## 7. Sinais de Tendência

### 7.1 Mobile-First Agent Experience
Três projetos investindo simultaneamente em WebUI mobile/Touch — **tendência clara** para 2027.

### 7.2 Plugin Architecture como Padrão
ZeroClaw (Rust/Dioxus), Hermes Agent (Home Assistant catalog), CoPaw (providers) — **modularidade** é consenso.

### 7.3 Custo de Contexto como Problema #1
Demanda por controles granulares de memória, truncation inteligente e "fetch on demand" para tool results.

### 7.4 Segregação Gateway/Runtime
ZeroClaw (v0.9.0), Hermes Agent (per-task routing) — движение toward **distributed agent architecture**.

### 7.5 Segurança Não é Afterthought
Múltiplos CVEs (Hermes), security PRs (NullClaw A2A scope), hardening de credenciais (IronClaw) — **security hardening** é requisito de produção.

### 7.6 Fragmentação de Canais como Dívida Técnica
Sete adapters diferentes com problemas recorrentes de estabilidade — **oportunidade de consolidação** ou abstração.

---

## 8. Recomendações Estratégicas

| Audiência | Recomendação |
|-----------|--------------|
| **Desenvolvedores** | Contribuir para ZeroClaw (volume, arquitetura Rust) ou NanoBot (pipeline eficiente, TUI testada) |
| **Empresas** | Avaliar Hermes Agent para multi-tenant enterprise; NullClaw para produção Discord-intensive aguardando estabilização |
| **Produtores de tooling** | Oportunidade em abstração de canais e observabilidade padronizada (logs machine-parseable, audit logs) |
| **Comunidade** | Evitar PicoClaw/IronClaw até reativação; priorizar projetos com PRs em revisão ativa |

---

*Relatório gerado em 2026-10-04. Dados extraídos dos resumos de atividade pública do GitHub de cada projeto.*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-10-04

---

## 1. Panorama do Dia

O NanoBot mantém um nível de atividade elevado com **46 PRs atualizados nas últimas 24h**, dos quais 17 já foram merged ou fechados, demonstrando um fluxo de contribuição intenso. Apenas **1 nova issue** foi registrada (um bug report sobre a CLI do Obsidian no Linux/Wayland), indicando que o foco da comunidade está na estabilização e entrega de features pendentes. Não houve lançamentos de novas versões, mas o projeto segue com uma pipeline saudável de correções e melhorias, especialmente no ecossistema TUI, WebUI e providers.

---

## 2. Lançamentos

**Nenhum release detectado nas últimas 24h.**

O projeto encontra-se em um ciclo de desenvolvimento ativo sem tags formais publicadas neste período, sugerindo que as mudanças estão sendo acumuladas para um próximo release agrupado.

---

## 3. Progresso do Projeto

### PR Merged/Closed Recentemente

| # | Título | Tipo | Impacto |
|---|--------|------|---------|
| [#5763](https://github.com/HKUDS/nanobot/pull/5763) | fix(api): return 400 for invalid multimodal field types | bug/fix | Melhorouvalidação de requisições, preservando 413 apenas para uploads oversized |

### PRs Abertos de Destaque (por progresso recente)

| # | Título | Tipo | Prioridade | Destaque |
|---|--------|------|------------|----------|
| [#6026](https://github.com/HKUDS/nanobot/pull/6026) | fix(tui): retain queued prompts after send failure | bug/fix | p0 — Corrige perda de drafts após falha de envio |
| [#6027](https://github.com/HKUDS/nanobot/pull/6027) | fix(tui): merge saved file edits in chronological order | bug/fix | p2 — Resolve race condition no diff-viewer |
| [#6025](https://github.com/HKUDS/nanobot/pull/6025) | fix(tui): submit prompts with Kitty keypad Enter | bug/fix | p2 — Melhora compatibilidade com terminais Kitty |
| [#6018](https://github.com/HKUDS/nanobot/pull/6018) | fix(mcp): discover all resource and prompt pages | bug/fix | p2 — Habilita paginação completa de catalogs MCP |
| [#6011](https://github.com/HKUDS/nanobot/pull/6011) | fix(providers): stream Codex image generation responses | bug/fix | p2 — Corrige descarte de imagens geradas via SSE |
| [#5985](https://github.com/HKUDS/nanobot/pull/5985) | feat(subagent): add session-owned task messaging | feature | p2 — Adiciona controle granular de subagentes por sessão |

---

## 4. Temas Quentes da Comunidade

### Discussões com Maior Atividade

Os PRs com maior interação concentram-se em **três eixos principais**:

1. **Experiência Mobile/Touch (#6023, #6022, #5640)**
   - Melhorias no WebUI para dispositivos touch: navegação acima do teclado virtual, controles de preview enlarged, e envio via botão em vez de Enter
   - [PR #6023](https://github.com/HKUDS/nanobot/pull/6023) | [PR #6022](https://github.com/HKUDS/nanobot/pull/6022) | [PR #5640](https://github.com/HKUDS/nanobot/pull/5640)

2. **Estabilidade do TUI (#6026, #6027, #6025)**
   - Três correções de alta prioridade para o terminal UI: retenção de prompts após falha, merge correto de edições, e suporte a Kitty keypad
   - [PR #6026](https://github.com/HKUDS/nanobot/pull/6026) | [PR #6027](https://github.com/HKUDS/nanobot/pull/6027) | [PR #6025](https://github.com/HKUDS/nanobot/pull/6025)

3. **Correções de Providers e API (#5764, #6011, #6020)**
   - Serialização de probes fallback, streaming de imagens Codex, e uso de aliases na API
   - [PR #5764](https://github.com/HKUDS/nanobot/pull/5764) | [PR #6011](https://github.com/HKUDS/nanobot/pull/6011) | [PR #6020](https://github.com/HKUDS/nanobot/pull/6020)

### Issue em Destaque

**[#6024](https://github.com/HKUDS/nanobot/issues/6024)** — Bug: CLI App for Obsidian says "unable to find Obsidian" sob nanobot (XDG_RUNTIME_DIR não alcançando a CLI)
- **Autor:** austinleekelly
- **Ambiente:** Ubuntu, GNOME on Wayland, Obsidian 1.13.7, nanobot-ai 0.3.5
- **Status:** Aberta | 0 comentários | 0 reações
- **Análise:** Problema de ambiente no Linux com Wayland onde a variável `XDG_RUNTIME_DIR` não é propagada corretamente para processos filhos, impedindo a detecção do Obsidian desktop

---

## 5. Bugs e Estabilidade

### Por Severidade

| Prioridade | Quantidade | Exemplos |
|------------|------------|----------|
| **p0** (crítica) | 1 | [#6026](https://github.com/HKUDS/nanobot/pull/6026) — perda de prompts após falha de envio |
| **p1** (alta) | 1 | [#5922](https://github.com/HKUDS/nanobot/pull/5922) — cron usando offset UTC incorreto sem DST |
| **p2** (média) | 14 | MCP pagination, TUI keypad, Providers streaming, Enum validation |

### Regressões Identificadas

- **TUI:** Queue de prompts pode perder conteúdo após falha de transporte
- **Providers:** FallbackProvider pode enviar múltiplas probes concorrentes no estado half-open
- **MCP:** Servers sem capacidade de tools são desconectados antes da descoberta de resources/prompts
- **Cron:** Tarefas agendadas podem executar 1h antes/depois após mudança de horário de verão

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features em Desenvolvimento

| # | Feature | Escopo | Status |
|---|---------|--------|--------|
| [#5985](https://github.com/HKUDS/nanobot/pull/5985) | Subagent session-owned task messaging and cancellation | Subagent/Tools | Em revisão |
| [#5640](https://github.com/HKUDS/nanobot/pull/5640) | Mobile keyboard input and streaming send | WebUI/Mobile | Em revisão |
| [#5974](https://github.com/HKUDS/nanobot/pull/5974) | `/group` command for reply policy management | Commands/Chat | Bloqueado por conflito com #5973 |

### Sinais de Roadmap Observados

- **Expansão Mobile:** Investimento consistente em UX touch (3 PRs simultâneos)
- **Subagents:** Introdução de controle de tarefas privado por sessão indica direção para multi-agency
- **CLI Integration:** Bug report de Obsidian sugere demanda por melhor integração com apps desktop

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Categoria | Problema | Fonte |
|-----------|----------|-------|
| **Linux/Wayland** | CLI não detecta apps desktop (XDG_RUNTIME_DIR) | [#6024](https://github.com/HKUDS/nanobot/issues/6024) |
| **Mobile UX** | Navegação webui coberta pelo teclado virtual | [#6022](https://github.com/HKUDS/nanobot/pull/6022) |
| **TUI Terminal** | Enter do keypad Kitty não submete prompts | [#6025](https://github.com/HKUDS/nanobot/pull/6025) |
| **Scheduling** | Cron executa em horário errado após mudança DST | [#5922](https://github.com/HKUDS/nanobot/pull/5922) |

### Padrões de Satisfação

- **TUI Suite:** 257 testes passando consistentemente (indica base estável)
- **Features aceitas:** Fluxo de contribution ativo com média de 46 PRs atualizados/dia
- **Comunidade ativa:** 20+ contribuidores com PRs em revisão simultânea

---

## 8. Backlog que Merece Atenção

### PRs com Conflitos ou Bloqueados

| # | Título | Bloqueio | Tempo Aberto |
|---|--------|----------|--------------|
| [#5974](https://github.com/HKUDS/nanobot/pull/5974) | feat(commands): add /group | Depende de #5973 | ~5 dias |
| [#5605](https://github.com/HKUDS/nanobot/pull/5605) | fix(email): only mark \Seen on delivered | Conflito | ~35 dias |

### Issues/PRs Sem Atividade Recente (>7 dias)

| # | Título | Última Atualização | Prioridade |
|---|--------|---------------------|------------|
| [#5922](https://github.com/HKUDS/nanobot/pull/5922) | fix: cron timezone DST | 2026-10-03 | p1 |
| [#5914](https://github.com/HKUDS/nanobot/pull/5914) | fix(napcat): keep image with non-numeric size | 2026-10-03 | p2 |
| [#5764](https://github.com/HKUDS/nanobot/pull/5764) | fix(provider): serialize fallback probes | 2026-10-03 | p2 |

---

## Métricas de Saúde do Projeto

| Indicador | Valor | Tendência |
|-----------|-------|-----------|
| PRs atualizados (24h) | 46 | 📈 Alta atividade |
| Issues abertas (24h) | 1 | 📉 Baixa entrada |
| Taxa de merge | ~37% (17/46) | ✅ Saudável |
| PRs p0/p1 pendentes | 2 | ⚠️ Requer atenção |
| PRs com conflitos | 2 | ⚠️ Monitorar |

---

**Relatório gerado automaticamente com base em dados do GitHub — HKUDS/nanobot**  
**Período de análise:** 2026-10-03 00:00 UTC → 2026-10-04 00:00 UTC

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent
## Data: 2026-10-04 | NousResearch/hermes-agent

---

## 1. Panorama do Dia

O Hermes Agent mantém alta atividade comunitária com 50 issues e 50 PRs atualizados nas últimas 24 horas, indicando um dia intenso de desenvolvimento. A taxa de fechamento de issues (12/50 = 24%) é moderada, sugerindo que a equipe está processando o backlog mas acumulando trabalho pendente. Não houve releases novas, mantendo o projeto em estado de pré-lançamento ou intervalo entre versões. O estado geral aponta para uma fase de estabilização com foco em correções de bugs críticos (P0-P1) e melhorias no sistema de updates, particularmente no ecossistema Windows.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24 horas.**

O projeto encontra-se em período de desenvolvimento ativo sem tags de versão publicadas recentemente. A ausência de releases indica que as correções estão em pipeline de revisão, aguardando validação antes do próximotag stable.

---

## 3. Progresso do Projeto

### PRs Fechados/Mergidos (2)

| PR | Descrição | Impacto |
|----|-----------|---------|
| [#105488](https://github.com/NousResearch/hermes-agent/pull/105488) | `fix(whatsapp): bump qs to 6.16.0` | Segurança — corrige 2 CVEs de DoS (CVE-2026-82417, CVE-2026-834) |
| [#64392](https://github.com/NousResearch/hermes-agent/issues/64392) | `[Bug]: duplicate skill names` | Estabilidade — unifica comportamento de skills duplicadas |

### PRs Abertos em Destaque (Pipeline Ativo)

**Campaign de Atualização (Updater)** — Correções críticas para estabilidade do `hermes update`:

- [#132361](https://github.com/NousResearch/hermes-agent/pull/132361) — Commit point crash-safe para swap git/ZIP (P2)
- [#132386](https://github.com/NousResearch/hermes-agent/pull/132386) — Contrato C3: pós-commit point nada falha no update (P2)
- [#132338](https://github.com/NousResearch/hermes-agent/pull/132338) — Updater morto no Windows não deixa gateways pausados (P2)
- [#132428](https://github.com/NousResearch/hermes-agent/pull/132428) — Migra installs treeless para blobless clones (P2)
- [#132346](https://github.com/NousResearch/hermes-agent/pull/132346) — Gates E2E para cada mudança no updater (P3)

**Segurança e Performance (P0):**

- [#111786](https://github.com/NousResearch/hermes-agent/pull/111786) — `fix(agent): preserve cacheable prompt context` — Aguarda revisão formal

**Plugin Catalog:**

- [#132476](https://github.com/NousResearch/hermes-agent/pull/132476) — Adiciona Home Assistant como plugin oficial

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| Issue | Comentários | Tema |
|-------|-------------|------|
| [#125727](https://github.com/NousResearch/hermes-agent/issues/125727) | 20 | Nous-to-Enterkey merge bloqueado por conflitos em múltiplos arquivos |
| [#132401](https://github.com/NousResearch/hermes-agent/issues/132401) | 12 | Bug P0: scratch prune destrói trabalho de agentes parked no TMPDIR |
| [#64392](https://github.com/NousResearch/hermes-agent/issues/64392) | 8 | Skills duplicadas com comportamento inconsistente entre list/prompt/view |

### Análise de Demandas

**Integração e Migração (#125727):** A merge conflict da integração Nous-to-Enterkey afeta 10+ arquivos do core do agent, indicando uma refatoração significativa em andamento. A comunidade demonstra preocupação com a estabilidade durante transições de código.

**Segurança (#77162):** Issue de segurança com 5 comentários discute redações de secrets ausentes no path de egress de tool-results para provider API — demanda atenção prioritária.

**UX/Desktop (#106017, #130980):** Usuários reportam problemas de navegação em profiles em fleet mode e sessões incorretas ao clicar em bots no Desktop — indicativo de fricção na experiência multi-profile.

---

## 5. Bugs e Estabilidade

### Por Severidade

#### P0 — Crítico (1 issue ativa)

- [#132401](https://github.com/NousResearch/hermes-agent/issues/132401) — **scratch prune 24h destrói trabalho de agentes multi-dia**  
  O TMPDIR aponta para `~/.hermes/cache/scratch` e o prune de 24h deleta arquivos sem log, quarantine ou marker, destruindo trabalho parked.

#### P1 — Alto (1 issue)

- [#64392](https://github.com/NousResearch/hermes-agent/issues/64392) ✅ **FECHADA** — Duplicate skill names com comportamento inconsistente entre list/prompt/view

#### P2 — Médio (13 issues ativas)

**Sistema de Updates:**
- [#132431](https://github.com/NousResearch/hermes-agent/issues/132431) — Update interrompido no Windows deixa artifacts .js stale
- [#106702](https://github.com/NousResearch/hermes-agent/pull/106702) — Soft-fail no resume de gateway Windows

**Sessões e Estados:**
- [#132329](https://github.com/NousResearch/hermes-agent/issues/132329) — Desktop mostra "reply cut off" durante context compaction
- [#129175](https://github.com/NousResearch/hermes-agent/pull/129175) — Turn claim token para sessões TUI
- [#127923](https://github.com/NousResearch/hermes-agent/pull/127923) — Writers não sobrevivem profile-delete sweep

**Cron e Agendamento:**
- [#131764](https://github.com/NousResearch/hermes-agent/issues/131764) — Cron external worker não executa shell hooks de config.yaml
- [#131585](https://github.com/NousResearch/hermes-agent/issues/131585) ✅ **FECHADA** — Cron dispatch-failure notice não delivery em multi-profile
- [#132223](https://github.com/NousResearch/hermes-agent/issues/132223) ✅ **FECHADA** — Sweep de stale libera cron runs saudáveis

**Providers e Tools:**
- [#131278](https://github.com/NousResearch/hermes-agent/issues/131278) — `maxLength: 8000` no schema break llama.cpp servers
- [#130132](https://github.com/NousResearch/hermes-agent/issues/130132) — MoA native providers falham em streaming sync boundaries
- [#105379](https://github.com/NousResearch/hermes-agent/issues/105379) — detect_local_server_type spray 401 em servers com API key
- [#128392](https://github.com/NousResearch/hermes-agent/pull/128392) — MCP probe cancelado retry em vez de 500

**Gateway e Desktop:**
- [#125910](https://github.com/NousResearch/hermes-agent/issues/125910) ✅ **FECHADA** — Cloud gateway unresponsive desde Sep 27
- [#122277](https://github.com/NousResearch/hermes-agent/issues/122277) ✅ **FECHADA** — Update lento no Windows

#### P3 — Baixo (34 issues)

Problemas documentados incluem:
- Blocklist de shutdown bloqueia function definitions incorretamente ([#132444](https://github.com/NousResearch/hermes-agent/issues/132444))
- Plugins de usuário com import pattern quebrado ([#132334](https://github.com/NousResearch/hermes-agent/issues/132334))
- Skills enabled allowlist mode solicitada ([#69245](https://github.com/NousResearch/hermes-agent/issues/69245))

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features (Issues Abertas)

| Issue | Feature | Status |
|-------|---------|--------|
| [#132184](https://github.com/NousResearch/hermes-agent/issues/132184) | Store bulky tool results, send receipt, fetch on demand | Custo/performance |
| [#104102](https://github.com/NousResearch/hermes-agent/issues/104102) | Durable approval-decision audit log para todas tools | Compliance |
| [#132248](https://github.com/NousResearch/hermes-agent/issues/132248) | Trusted Agent Contacts — A2A cross-owner como plugin | Interoperabilidade |
| [#75458](https://github.com/NousResearch/hermes-agent/issues/75458) | Standardize logging format (machine-parseable) | Observabilidade |
| [#69245](https://github.com/NousResearch/hermes-agent/issues/69245) | skills.enabled allowlist mode | Configuração |
| [#75367](https://github.com/NousResearch/hermes-agent/issues/75367) | key_env support para built-in providers | Configuração |
| [#117324](https://github.com/NousResearch/hermes-agent/issues/117324) | Windows Service support para Gateway | Windows |

### PRs de Feature em Desenvolvimento

| PR | Feature | Escopo |
|----|---------|--------|
| [#132465](https://github.com/NousResearch/hermes-agent/pull/132465) | Skill Sync moves to plugin + on_maintenance_tick hook | Plugin architecture |
| [#128816](https://github.com/NousResearch/hermes-agent/pull/128816) | Per-provider max_in_flight e requests_per_minute | Rate limiting |
| [#103965](https://github.com/NousResearch/hermes-agent/pull/103965) | Per-task Hermes profile routing (model, host, memory) | Multi-tenancy |
| [#63791](https://github.com/NousResearch/hermes-agent/pull/63791) | Nexusyn standalone memory provider plugin | Memory ecosystem |

### Sinais de Roadmap

1. **Plugin-first architecture:** Skill Sync migrando para plugin, Home Assistant adicionado ao catalog, novos hooks (`on_maintenance_tick`)
2. **Multi-profile enterprise:** Per-task routing, per-provider rate limits, profile-scoped credentials
3. **Observabilidade:** Audit log de aprovações, padronização de logs
4. **Windows maturity:** Service support, E2E gates para updater, crash-safe commits

---

## 7. Resumo de Feedback dos Usuários

### Dores Real Reportadas

**Custo de Contexto (#132184):**
> *"I use Hermes every day as my second brain and for running my business... the cost problem I hit is one most non-technical users won't even know to look for."*

Usuários não-técnicos enfrentam custos imprevisíveis com tool results bulk retainidos no prompt.

**Estabilidade de Updates (#122277):**
> *"This takes an insane amount of time to update. Like what is this? Am I installing an OS? I feel like I could reinstall Windows faster than this."*

Frustração extrema com tempo de update e experiência Windows.

**Confiança em GitHub Ops (#53072):**
> *"Hermes can report a GitHub repository operation as successfully completed even when the required tool calls failed or were never verified."*

Agente reporta sucesso em operações GitHub que falharam — problema de confiança em automação.

**Desktop Fleet UX (#106017, #131632):**
Perfil default inacessível quando múltiplos gateways registrados — fricção em setups enterprise.

### Cenários de Uso Identificados

- **Second brain / produtividade pessoal** (não-técnicos)
- **Multi-agent fleet deployment** (produção)
- **Windows desktop-first users** (crescente)
- **Cron job automation** (infraestrutura)
- **A2A cross-owner collaboration** (emergente)

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Stale

| Issue | Idade | Prioridade | Motivo |
|-------|-------|------------|--------|
| [#53072](https://github.com/NousResearch/hermes-agent/issues/53072) | ~95 dias | P2 | Agent pode reportar sucesso em GitHub ops sem verificação — sem interação recente |
| [#406](https://github.com/NousResearch/hermes-agent/issues/406) | ~213 dias | — | Feature request de Code Verification inspirado em Nightwire — aguardando |
| [#75458](https://github.com/NousResearch/hermes-agent/issues/75458) | ~65 dias | P3 | Padronização de logs — sem decisão |

### PRs Aguardando Revisão

| PR | Idade Aprox. | Prioridade | Bloqueio |
|----|--------------|------------|----------|
| [#111786](https://github.com/NousResearch/hermes-agent/pull/111786) | ~19 dias | P0 | Aguarda revisão formal de `teknium1` |
| [#129175](https://github.com/NousResearch/hermes-agent/pull/129175) | ~4 dias | P2 | Parte de campaign stack |
| [#103965](https://github.com/NousResearch/hermes-agent/pull/103965) | ~28 dias | P3 | needs-decision |

### Issues com needs-decision Pendentes

- [#132401](https://github.com/NousResearch/hermes-agent/issues/132401) — P0: needs-decision sobre comportamento do scratch prune
- [#132248](https://github.com/NousResearch/hermes-agent/issues/132248) — P3: RFC Trusted Agent Contacts precisa de aprovação

---

## Métricas Sintéticas do Dia

| Indicador | Valor | Status |
|-----------|-------|--------|
| Issues ativas abertas | 38 | 🔴 Elevado |
| PRs abertos | 48 | 🔴 Elevado |
| Taxa de fechamento issues | 24% | 🟡 Moderado |
| Bugs P0-P1 pendentes | 1 | 🟢 Controlado |
| PRs P0 em revisão | 1 | 🟡 Atenção |
| Novas features | 7+ | 🔵 Crescendo |
| Releases | 0 | 🟡 Estável |

---

*Relatório gerado automaticamente com base em dados do GitHub de 2026-10-04. Para informações atualizadas, consulte [github.com/nousresearch/hermes-agent](https://github.com/NousResearch/hermes-agent).*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-10-04

## 1. Panorama do Dia

O projeto PicoClaw mantém **baixa atividade** na data de hoje. Apenas **1 issue** foi atualizada nas últimas 24h, tratando de um bug relacionado à API do QQ Bot. Não houve novos PRs, releases ou mudanças significativas no codebase. O repositório encontra-se em um estado de **estabilidade operacional**, sem sinais de regressões ou incidentes críticos. A comunidade demonstra interesse pontual em questões de integração de canais de comunicação.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24 horas.**

O projeto não publicou novas versões desde o último período. Usuários em produção permanecem nas versões anteriores disponíveis no repositório.

---

## 3. Progresso do Projeto

**Nenhum PR mergeado ou fechado nas últimas 24 horas.**

O fluxo de desenvolvimento encontra-se pausado, sem contribuições de código mergeadas. Isso pode indicar:
- Período de avaliação de proposals/abertas
- Feriado ou baixa disponibilidade dos mantenedores
- Foco em questões de estabilidade/issue triage

---

## 4. Temas Quentes da Comunidade

### Issue em Destaque

| #3394 | **[BUG] Interface do QQ Bot desatualizada** |
|-------|---------------------------------------------|
| **Status** | 🟡 ABERTA |
| **Autor** | qinglt |
| **Criação** | 2026-09-26 |
| **Última atualização** | 2026-10-03 |
| **Comentários** | 2 |
| **Reações** | 👍 0 |

**Resumo:** O usuário reporta que a API do QQ Robot foi atualizada, mas o canal de comunicação QQ do PicoClaw não reflete essas mudanças. Isso sugere que o PicoClaw pode estar usando endpoints deprecated ou quebrados para integração com Tencent QQ.

**Análise da demanda:** Esta issue é relevante pois envolve **compatibilidade de canal** — um problema que afeta a funcionalidade core do assistente em mercados onde QQ é relevante. A ausência de reactions indica baixa visibilidade ou que poucos usuários utilizam este canal ativamente.

🔗 [Ver Issue #3394](https://github.com/sipeed/picoclaw/issues/3394)

---

## 5. Bugs e Estabilidade

### Bugs Reportados Hoje

| Severidade | Quantidade | Descrição |
|------------|------------|-----------|
| 🔴 Crítica | 0 | — |
| 🟠 Alta | 0 | — |
| 🟡 Média | 1 | Atualização de API do QQ Bot (#3394) |
| 🟢 Baixa | 0 | — |

**Análise:** A issue #3394, classificada como "stale" e "BUG", aponta para um problema de **compatibilidade com serviço externo**. A severidade é potencialmente **média-alta** dependendo da base de usuários do canal QQ. O status "stale" indica que a issue não recebeu resposta da equipe nos últimos dias, o que pode impactar a percepção da comunidade sobre suporte.

---

## 6. Pedidos de Features e Sinais de Roadmap

**Nenhum novo feature request registrado nas últimas 24h.**

A ausência de PRs e issues de feature sugere que:
1. O release atual atende às expectativas básicas da comunidade
2. Não há visibilidade clara sobre o roadmap futuro
3. Possível necessidade de comunicação proativa dos mantenedores sobre prioridades

---

## 7. Resumo de Feedback dos Usuários

| Canal | Sentimento | Observação |
|-------|------------|------------|
| GitHub Issues | ⚠️ Frustração moderada | Issue aberta há 8 dias sem resposta oficial |
| Canais QQ | 🔴 Impacto funcional | Usuários podem estar com integração quebrada |

**Dores identificadas:**
- **Integração QQ desatualizada** —影响了依赖QQ频道的用户
- **Tempo de resposta em issues** —标记为stale pode desmotivar reporter

**Cenário de uso afetado:** Usuários que deployam PicoClaw em mercados chineses, onde QQ é canal primário de comunicação, enfrentam funcionalidade reduzida.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta com Potencial Impacto

| Issue | Título | Idade | Prioridade Sugerida |
|-------|--------|-------|---------------------|
| [#3394](https://github.com/sipeed/picoclaw/issues/3394) | Interface QQ Bot desatualizada | 8 dias | 🟠 Alta |

**Recomendação:** A equipe de manutenção deve priorize:
1. **Triage da issue #3394** — confirmar se é bug de API e estimar esforço de correção
2. **Comunicar status ao reporter (qinglt)** — mesmo um comentário de acknowledgment reduz frustração
3. **Avaliar uso do canal QQ** — se base pequena, considerar deprecation; se relevante, priorizar fix

---

## Indicadores de Saúde do Projeto

| Métrica | Status | Observação |
|---------|--------|------------|
| Atividade de código (24h) | 🔴 Baixa | 0 PRs mergeados |
| Issues em aberto | 🟢 Estável | 1 issue ativa |
| Releases | 🔴 Parado | 0 novas releases |
| Tempo de resposta | ⚠️ Preocupante | Issue aguardando 8 dias |
| Bugs críticos | 🟢 Nenhum | Sem incidentes críticos |

**Veredicto geral:** PicoClaw encontra-se em **modo de baixa atividade**. A principal ação necessária é o triage da issue #3394 para definir o rumo da correção do canal QQ.

---

*Relatório gerado automaticamente em 2026-10-04 com base em dados do GitHub.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# 📊 Relatório de Projeto: IronClaw

**Data de referência:** 2026-10-04  
**Repositório:** [nearai/ironclaw](https://github.com/nearai/ironclaw)

---

## 1. 🌅 Panorama do Dia

O projeto IronClaw apresenta **atividade extremamente baixa** nas últimas 24 horas. Apenas uma issue foi aberta, sem qualquer movimento em pull requests ou lançamentos. O cenário atual sugere uma fase de estagnação no desenvolvimento ativo, possivelmente indicando foco em estabilidade ou período de baixa demanda. A issue aberta hoje (#8122) representa um **bloqueio crítico para desenvolvedores macOS**, afetando o comando `ironclaw serve` com falha de credenciais. O sistema de saúde do CLI (`ironclaw doctor` reportando 8/8 passes) demonstra que o problema é específico ao componente de serviço e credenciais, não ao setup geral do ambiente.

---

## 2. 🚀 Lançamentos

**Nenhuma release registrada nas últimas 24h.**

| Status | Detalhes |
|--------|----------|
| Novas releases | 0 |
| Releases pendentes | Não especificado |
| Última versão estável | Mencionada como 1.4.1 no issue reportado |

> **Nota:** A ausência de releases recentes combinada com a baixa atividade de PRs indica que o projeto pode estar em período de manutenção ou aguardando resolution do issue crítico em aberto.

---

## 3. 📈 Progresso do Projeto

**Nenhum PR merged ou fechado nas últimas 24h.**

| Tipo | Quantidade | Detalhes |
|------|------------|----------|
| PRs abertos | 0 | — |
| PRs merged/fechados | 0 | — |
| Progresso visível | ❌ Nenhum | — |

A completa ausência de atividade em PRs nas últimas 24h contrasta com a issue ativa, sugerindo que o time de desenvolvimento pode estar em modo de triagem de issues rather than active feature development.

---

## 4. 🔥 Temas Quentes da Comunidade

### Issue em Destaque

**[#8122](https://github.com/nearai/ironclaw/issues/8122)** — `ironclaw serve fails with credential read failed: BackendUnavailable for extension web-app on macOS (local-dev profile)`

| Campo | Valor |
|-------|-------|
| **Status** | 🟡 OPEN |
| **Autor** | rahhbster |
| **Criado** | 2026-10-03 |
| **Atualizado** | 2026-10-03 |
| **Comentários** | 0 |
| **Reações** | 0 👍 |

**Resumo técnico do problema:**
- **Ambiente:** macOS Apple Silicon (aarch64-apple-darwin), Darwin 27.0.0
- **Versões afetadas:** IronClaw 1.4.1 (release oficial) e 1.4.0 (build via `cargo install`)
- **Comando afetado:** `ironclaw serve`
- **Perfil:** `local-dev`
- **Sintoma:** Falha de leitura de credenciais com `BackendUnavailable` para extensão web-app
- **Verificação:** `ironclaw doctor` reporta 8/8 testes passando

**Análise:** Este é um issue de **alta severidade** por bloquear completamente o workflow de desenvolvimento local. O fato de `ironclaw doctor` passar indica que o problema está no subsystem de credenciais usado pelo comando `serve`, não no setup geral. A extensão `web-app` parece ter dependência de um backend de credenciais específico da plataforma que não está disponível em macOS Apple Silicon.

---

## 5. 🐛 Bugs e Estabilidade

### Issue Reportado

| Severity | Descrição | Impacto |
|----------|-----------|---------|
| 🔴 **Alta** | Credential read failure para extensão web-app em macOS | Bloqueia `ironclaw serve` |

**Detalhamento:**
- **Tipo:** Crash/Bloqueio funcional
- **Reprodução:** Confirmada em múltiplas versões (1.4.0 e 1.4.1)
- **Escopo:** macOS (Apple Silicon) apenas
- **Workaround:** Não identificado no issue

### Métricas de Estabilidade

| Indicador | Status |
|-----------|--------|
| Novas issues (24h) | 1 |
| Issues críticas abertas | 1 |
| Regressões identificadas | 0 (possível) |
| Crash reports | 1 |

> **⚠️ Alerta:** A falha de `ironclaw serve` em macOS representa um blocking issue para desenvolvedores Apple Silicon. Este bug afeta diretamente a produtividade e pode impactar adoção em ecossistema macOS.

---

## 6. ✨ Pedidos de Features e Sinais de Roadmap

**Nenhuma feature request registrada nas últimas 24h.**

| Categoria | Quantidade |
|-----------|------------|
| Novas features | 0 |
| Melhorias solicitadas | 0 |
| Sinais de roadmap | N/A |

### Sinais Indiretos do Issue #8122

O problema reportado sugere áreas que podem necessitar atenção no roadmap:
1. **Portabilidade de backend de credenciais** — Suporte nativo para Keychain/Credential Storage em macOS
2. **Fallback de credenciais** — Implementargraceful degradation quando backend primário indisponível
3. **Detecção de plataforma** — Melhorar mensagens de erro para diagnóstico rápido

---

## 7. 📝 Resumo de Feedback dos Usuários

### Única Interação Recente

**Usuário:** rahhbster  
**Contexto:** Desenvolvedor tentando usar IronClaw em ambiente local de desenvolvimento

**Dores identificadas:**
1. **Bloqueio completo do workflow** — `ironclaw serve` é fundamental para desenvolvimento
2. **Inconsistência entre versões** — Problema persiste tanto em release oficial quanto build local
3. **Falha silenciosa** — BackendUnavailable sem detalhes de troubleshooting
4. **Issue não triado** — Zero comentários após abertura, indicando falta de acknowledgment

**Cenário de uso:** Desenvolvimento local com perfil `local-dev` em macOS Apple Silicon

**Satisfação:** 🔴 Baixa — Funcionalidade crítica quebrada, sem resposta da comunidade

---

## 8. 📋 Backlog que Merece Atenção

### Issue Sem Resposta

| # | Título | Idade | Status | Prioridade |
|---|--------|-------|--------|------------|
| [#8122](https://github.com/nearai/ironclaw/issues/8122) | ironclaw serve fails with credential read failed: BackendUnavailable for extension web-app on macOS | ~1 dia | 🟡 OPEN | 🔴 Alta |

**Análise:** O issue #8122 foi aberto há aproximadamente 1 dia e **ainda não recebeu qualquer resposta** (0 comentários, 0 reações). Em cenário de bug blocking, esta falta de engagement pode:
- Frustrar usuários reporter
- Permitir que o bug se multiplique (outros usuários podem estar enfrentando)
- Sinalizar baixa capacidade de triagem/manutenção

**Ação recomendada:** Este issue deve ser priorizado para triage imediato pelo time de manutenção.

---

## 📊 Dashboard de Saúde do Projeto

| Métrica | Valor | Status |
|---------|-------|--------|
| Atividade (24h) | 1 issue | 🟡 Baixa |
| PRs merged (7d) | 0 | 🔴 Estagnado |
| Releases (30d) | 0 | 🔴 Nenhuma |
| Issues abertas pendentes | 1 | 🟡 Necessita atenção |
| Taxa de resposta a issues | 0% (1/1) | 🔴 Crítica |
| Bugs críticos | 1 | 🟡 Bloqueante |

---

## 🎯 Conclusão

O projeto IronClaw apresenta **sinais de baixa atividade e um issue crítico pendente**. A falha de `ironclaw serve` em macOS Apple Silicon (#8122) representa um bloqueador para desenvolvedores que utilizam a plataforma. A completa ausência de PRs merged e releases recentes sugere possível estagnação ou transição de foco. **Recomenda-se atenção imediata ao issue #8122** para restaurar confiança da comunidade e evitar perda de usuários macOS.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do Projeto CoPaw — 2026-10-04

---

## 1. Panorama do Dia

O projeto CoPaw apresenta **alta atividade de desenvolvimento** em 2026-10-04, com 21 eventos combinados (10 issues + 11 PRs) nas últimas 24 horas. Todos os PRs permanecem em estado `OPEN`, indicando que a equipe está em fase ativa de revisão e belum houve merges no período. As issues concentram-se em bugs críticos (multimodal, provider OpenAI, boot splash) e UX mobile. A ausência de releases recentes sugere que a equipe está consolidando a versão 2.2.x antes de um próximo lançamento. O fluxo de PRs massivo (11 em 24h) demonstra maturidade no processo de code review, embora a falta de merges possa indicar gargalo na review pipeline.

---

## 2. Lançamentos

**Nenhum novo release nas últimas 24 horas.**

O último release estável (provavelmente 2.2.x baseado nas issues mentioning 2.2.0 e 2.2.2b4) permanece como versão mais recente. Issues como `#8074` indicam que correções para GPT-6-family ainda não estão em release, o que pode justificar uma atualização futura.

---

## 3. Progresso do Projeto

### PRs em revisão ativa (11 total, todos OPEN)

| PR | Título | Área | Tamanho | Impacto |
|----|--------|------|---------|---------|
| [#8100](https://github.com/agentscope-ai/QwenPaw/pull/8100) | fix(agents): use resolved media capabilities at runtime | Agents | M | **Crítico** — corrige gate de suporte a imagem que rejeitava modelos capaces |
| [#8099](https://github.com/agentscope-ai/QwenPaw/pull/8099) | fix(qoder): enable custom providers and context usage | Qoder | S | Habilita BYOK mode e exposição de métricas de uso |
| [#8098](https://github.com/agentscope-ai/QwenPaw/pull/8098) | fix(agents): return a result for foreground chat timeouts | Agents | S | Melhora UX em timeouts de subagentes |
| [#8096](https://github.com/agentscope-ai/QwenPaw/pull/8096) | fix(providers): surface finish_reason length truncation | Providers | S | Melhora debuggabilidade de respostas truncadas |
| [#8095](https://github.com/agentscope-agentscope-ai/QwenPaw/pull/8095) | fix(agents): attribute inter-agent chat messages | Agents | S | Corrige tracking de mensagens cross-session |
| [#8091](https://github.com/agentscope-ai/QwenPaw/pull/8091) | fix(console): track last active chat id on sidebar | Console | M | Corrige navegação de histórico de sessões |
| [#8090](https://github.com/agentscope-ai/QwenPaw/pull/8090) | fix(providers): recognize newer GPT token limit params | Providers | XS | **Crítico** — corrige HTTP 400 para GPT-6 models |
| [#8089](https://github.com/agentscope-ai/QwenPaw/pull/8089) | fix(console): support terminal identity over LAN HTTP | Console | S | Habilita uso em origens não-HTTPS |
| [#8086](https://github.com/agentscope-ai/QwenPaw/pull/8086) | feat(console): move settings navigation into mobile drawer | Console | M | **UX Mobile** — reorganiza navegação em telas <768px |
| [#8097](https://github.com/agentscope-ai/QwenPaw/pull/8097) | test(agents): cover sent PDF tool-result replay | Testes | XS | Adiciona cobertura de regressão para PDFs |
| [#7004](https://github.com/agentscope-ai/QwenPaw/pull/7004) | feat(console): persist spawn parent-child linkage | Console | M | **Feature significativa** — persiste hierarquia de subagentes |

### Issue Closed Recentemente

- [#7535](https://github.com/agentscope-ai/QwenPaw/issues/7535) [CLOSED] — Feature: Element-specific Matrix channel compatibility (MSC2965 OIDC login + device verification). Esta feature foi fechada, indicando implementação concluída ou decisão de não implementar.

**Prioridades de Review:** Recomenda-se priorização de #8100 e #8090 (ambos críticos para multimodal e GPT-6) antes do próximo release.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento

| Issue | Título | Comentários | 👍 | Tipo | Prioridade |
|-------|--------|-------------|----|------|------------|
| [#7884](https://github.com/agentscope-ai/QwenPaw/issues/7884) | Chat history muito curta após compressão | 8 | 0 | Question | **Alta** |
| [#6281](https://github.com/agentscope-ai/QwenPaw/issues/6281) | Web console precisa de adaptação mobile | 6 | 0 | Enhancement | **Alta** |
| [#7661](https://github.com/agentscope-ai/QwenPaw/issues/7661) | Criação errada de novas sessões | 5 | 0 | Bug | **Crítica** |

### Análise dos temas dominantes

**1. Persistência e UX de Histórico de Chat (#7884)**
- **Demanda:** Usuários reclamam que histórico de conversas é muito curto após compressão, dificultando revisão de discussões passadas.
- **Sentimento:** Frustração explícita ("sabe o quanto essa experiência é ruim??" — autor)
- **Implicação:** Problema recorrente pode afetar retenção de usuários em cenários de uso prolongado.

**2. Adaptação Mobile do Console (#6281, #8086)**
- **Demanda:** Console web precisa funcionar adequadamente em dispositivos móveis.
- **Sinal positivo:** PR #8086 já endereça parcialmente (settings drawer), indicando que a equipe reconhece a necessidade.
- **Implicação:** Mercado mobile-first espera suporte; ausência impacta adoção.

**3. Bugs de Criação de Sessão (#7661)**
- **Demanda:** Click em "nova tarefa" cria múltiplas sessões no sidebar ao invés de reutilizar会话.
- **Gravidade:** Bug de UX que pode causar perda de contexto e confusão.
- **Implicação:** Afeta fluxo de trabalho básico; prioridade de correção alta.

---

## 5. Bugs e Estabilidade

### Bugs reportados nas últimas 24h

| Issue | Severidade | Título | Área | Status |
|-------|------------|--------|------|--------|
| [#8094](https://github.com/agentscope-ai/QwenPaw/issues/8094) | **🔴 Crítica** | Boot splash sem retry; WebView2 stale cache bloqueia boot permanentemente | Console | OPEN |
| [#8093](https://github.com/agentscope-ai/QwenPaw/issues/8093) | 🔴 Crítica | Runtime bloqueia imagem mesmo quando model anuncia `supports_multimodal=true` | Runtime | OPEN |
| [#8074](https://github.com/agentscope-ai/QwenPaw/issues/8074) | 🔴 Crítica | OpenAI provider retorna 400 para GPT-6-family models | Providers | OPEN |
| [#8088](https://github.com/agentscope-ai/QwenPaw/issues/8088) | 🟠 Alta | Imagem entra em loop Bash+PIL cropping e é cancelada silenciosamente | Agents | OPEN |
| [#8092](https://github.com/agentscope-ai/QwenPaw/issues/8092) | 🟠 Alta | Content inspection false positives da Ali-style gateways matam turn | Providers | OPEN |
| [#7661](https://github.com/agentscope-ai/QwenPaw/issues/7661) | 🟠 Alta | Criação errada de sessões ao usar "nova tarefa" | Console | OPEN |

### Análise de severidade

**Críticos (3):**
- **Boot permanently blocked (#8094):** WebView2 cache stale após update pode impedir Console de iniciar. Cenário de atualização em produção é risco.
- **Multimodal blocking despite capability (#8093):** Modelo anuncia suporte mas runtime rejeita imagens. Inconsistência catalog vs. runtime.
- **GPT-6 HTTP 400 (#8074):** Afeta todos os usuários de GPT-6-family. PR #8090 já propõe correção.

**Patches corretivos em andamento:**
- [#8100](https://github.com/agentscope-ai/QwenPaw/pull/8100) — corrige gate de capabilities (endereça #8093)
- [#8090](https://github.com/agentscope-ai/QwenPaw/pull/8090) — corrige parâmetro `max_completion_tokens` (endereça #8074)

**Recomendação:** Priorizar merge de #8090 e #8100 antes do próximo release para mitigar impacto em produção.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features solicitadas

| Issue | Título | Área | Complexidade | Viabilidade |
|-------|--------|------|--------------|-------------|
| [#8087](https://github.com/agentscope-ai/QwenPaw/issues/8087) | Adicionar nome do agente/provider/model às respostas do bot Lark | Channels | Baixa | Comparável a implementação WeChat existente |
| [#7535](https://github.com/agentscope-ai/QwenPaw/issues/7535) | Element-specific Matrix compatibility (MSC2965 OIDC) | Matrix | Alta | **Closed** — verificado implementação |

### Sinais de roadmap identificados

1. **Suporte multimodal consolidado:**
   - PRs #8100, #8093, #8088 indicam que a equipe está investindo em capacidades de imagem/arquivo.
   - Test coverage (#8097) para PDF tool results sugere maturação da feature.

2. **Expansão de providers:**
   - Fix para GPT-6 (#8090) + suporte a novos parâmetros indica adaptação contínua ao ecossistema OpenAI.

3. **Mobile-first UX:**
   - Issues #6281, #8086 (PR) demonstram movimento em direção a suporte mobile.
   - Feature request para Lark (#8087) indica interesse em diversificação de canais.

4. **Observabilidade e debug:**
   - PRs #8096 (finish_reason), #8099 (context usage) sugerem foco em developer experience.

---

## 7. Resumo de Feedback dos Usuários

### Dores reais identificadas

| Dor | Frequência | Severidade | Issue |
|-----|------------|------------|-------|
| Histórico de chat muito curto | 1 (mas reação emocional intensa) | Alta | [#7884](https://github.com/agentscope-ai/QwenPaw/issues/7884) |
| Console não funciona em mobile | 1 | Alta | [#6281](https://github.com/agentscope-ai/QwenPaw/issues/6281) |
| Imagens não funcionam apesar de suporte anunciado | 1 | Crítica | [#8093](https://github.com/agentscope-ai/QwenPaw/issues/8093) |
| Erros 400 em GPT-6 | 1 | Crítica | [#8074](https://github.com/agentscope-ai/QwenPaw/issues/8074) |
| Boot bloqueado após update | 1 | Crítica | [#8094](https://github.com/agentscope-ai/QwenPaw/issues/8094) |
| Content inspection mata turns legítimos | 1 | Alta | [#8092](https://github.com/agentscope-ai/QwenPaw/issues/8092) |

### Padrões de uso inferidos

- **Uso profissional:** Problemas com DevOps e workflows complexos indicam uso corporativo.
- **Multi-device:** Demanda mobile + desktop implica usuários em múltiplos contextos.
- **Multi-canal:** Interesse em Lark (飞书), Matrix, WeChat demonstra necessidade de integração empresarial.

### Satisfaction/Frustration signals

- **Frustração explícita:** Issue #7884 com linguagem emocional ("sabe o quanto essa experiência é ruim??") indica usuário potencialmente insatisfeito.
- **Feedback construtivo:** Maioria das issues bem formatadas com contexto técnico, sugerindo comunidade engajada e technical-savvy.

---

## 8. Backlog que Merece Atenção

### Issues antigas sem resolução

| Issue | Idade | Título | Comentários | Status | Ação Recomendada |
|-------|-------|--------|-------------|--------|------------------|
| [#6281](https://github.com/agentscope-ai/QwenPaw/issues/6281) | ~75 dias | Web console adaptação mobile | 6 | OPEN | **Alta prioridade** — PR #8086 em andamento |
| [#7661](https://github.com/agentscope-ai/QwenPaw/issues/7661) | ~24 dias | Bug criação errada de sessões | 5 | OPEN | **Alta prioridade** — impacta UX básico |
| [#7884](https://github.com/agentscope-ai/QwenPaw/issues/7884) | ~15 dias | Chat history curta após compressão | 8 | OPEN | **Alta prioridade** — satisfação do usuário |

### Issues aguardando resposta do mantenedor

| Issue | Idade | Título | Comentários | Situação |
|-------|-------|--------|-------------|----------|
| [#7884](https://github.com/agentscope-ai/QwenPaw/issues/7884) | 15 dias | Chat history curta | 8 | Autor aguardando resposta |
| [#6281](https://github.com/agentscope-ai/QwenPaw/issues/6281) | 75 dias | Mobile adaptation | 6 | Aguardando triagem |
| [#7661](https://github.com/agentscope-ai/QwenPaw/issues/7661) | 24 dias | Session creation bug | 5 | Aguardando triagem |

### PRs em espera de review

| PR | Idade | Título | Tamanho | Prioridade |
|----|-------|--------|---------|------------|
| [#7004](https://github.com/agentscope-ai/QwenPaw/pull/7004) | ~52 dias | Persist spawn parent-child linkage | M | Alta — feature significativa |
| [#8100](https://github.com/agentscope-ai/QwenPaw/pull/8100) | 1 dia | Media capabilities at runtime | M | **Crítica** — endereça #8093 |
| [#8090](https://

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-10-04

## 1. Panorama do dia

O projeto ZeroClaw mantém um nível de atividade intenso, com **50 issues e 50 PRs atualizados nas últimas 24 horas**. A atividade concentra-se no ciclo de desenvolvimento para as versões v0.8.6 e v0.9.0, com destaque para correções de bugs críticos (P1), melhorias no runtime e no gateway, e refinamentos na interface ZeroCode. Não houve lançamentos de novas versões. O estado geral reflete uma codebase em evolução acelerada, com múltiplos contribuidores conduzindo работы em paralelo — há 48 PRs abertos, dos quais 2 foram merged/fechados. A colaboração está ativa em trilhas diversas: segurança, canais, providers, e tooling.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24 horas.**

O tracker [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) indica que a **v0.8.6** está em fase final de completude da Fase 2 (runtime work), enquanto a **v0.9.0** aguarda a separação do gateway (Fase 3). O release v0.8.5 já introduziu uma regressão documentada em [#11387](https://github.com/zeroclaw-labs/zeroclaw/issues/11387), que a equipe está corrigindo ativamente.

---

## 3. Progresso do projeto

### PRs Fechados/Merged

| # | Título | Impacto | Link |
|---|--------|---------|------|
| #11387 | `zerocode ignores its launch directory again` (regression) | Corrigiu regressão crítica no working directory do ZeroCode | [PR](https://github.com/zeroclaw-labs/zeroclaw/issues/11387) |
| #10701 | Image attachment invalidates cache prefix | Repair no history cache para mensagens com imagens | [PR](https://github.com/zeroclaw-labs/zeroclaw/issues/10701) |
| #10662 | OAuth cache marker abaixo do mínimo Anthropic | Fix no provider transport, liberando breakpoint slot | [PR](https://github.com/zeroclaw-labs/zeroclaw/issues/10662) |
| #10293 | Define lifecycle semantics para `sessions_send` | Contrato explícito para operação de histórico | [PR](https://github.com/zeroclaw-labs/zeroclaw/issues/10293) |
| #10734 | RpcDispatcher stack overflow no Windows | Corrigiu Windows stack guard (2MB) no job `Advisory Windows nextest` | [PR](https://github.com/zeroclaw-labs/zeroclaw/issues/10734) |

### PRs Abertos em Destaque

| # | Título | Tamanho | Link |
|---|--------|---------|------|
| #11516 | `feat(runtime): effort-aware local/cloud routing` | XL | [PR](https://github.com/zeroclaw-labs/zeroclaw/pull/11516) |
| #10391 | `fix(delegate): workspace/tool ceiling bounds beyond turn` | XL | [PR](https://github.com/zeroclaw-labs/zeroclaw/pull/10391) |
| #11355 | Rust/Dioxus Skills dashboard PoC (WASM) | XL | [PR](https://github.com/zeroclaw-labs/zeroclaw/pull/11355) |
| #11506 | `feat(zerocode): show saved and applied config status` | XL | [PR](https://github.com/zeroclaw-labs/zeroclaw/pull/11506) |
| #11512 | `fix(skills): bound HTTP calls with one deadline` | M | [PR](https://github.com/zeroclaw-labs/zeroclaw/pull/11512) |

---

## 4. Temas quentes da comunidade

### Issues com mais comentários

1. **[#9965](https://github.com/zeroclaw-labs/zeroclaw/issues/9965)** — `harden runtime-written executable test fixtures` (13 comentários)  
   **Téma:** Fortalecimento de test fixtures que escrevem shims executáveis após o teste se tornar multithread, sob o gate do Parallel Runtime. Prioridade P1, risco médio.

2. **[#7108](https://github.com/zeroclaw-labs/zeroclaw/issues/7108)** — `improve cached Rust builds and CI critical path` (9 comentários)  
   **Téma:** O pipeline de CI está consumindo 15-20 minutos mesmo em mudanças pequenas. A equipe busca otimizar caching de builds Rust e scheduling de jobs. Prioridade P2, risco alto.

3. **[#9799](https://github.com/zeroclaw-labs/zeroclaw/issues/9799)** — `long-lived ephemeral daemon CPU spin` (7 comentários)  
   **Téma:** Um daemon em modo ephemeral consumiu 140-177% CPU por ~17 horas, com socket Telegram HTTPS fechado e loops repetidos. Severidade S2, risco alto.

4. **[#6105](https://github.com/zeroclaw-labs/zeroclaw/issues/6105)** — `Agent doesn't have context of cron job` (6 comentários)  
   **Téma:** Agente perdendo referência à mensagem enviada quando acionado por cron job. Afeta o workflow de reminders. Prioridade P2.

5. **[#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)** — `Tracker: v0.8.6 and v0.9.0` (5 comentários)  
   **Téma:** Source of truth para as entregas da Fase 2 (runtime) e Fase 3 (gateway separation). Releases v0.8.6 e v0.9.0.

---

## 5. Bugs e estabilidade

### Severidade P0/P1 (Críticos)

| # | Título | Severidade | Link |
|---|--------|------------|------|
| #11239 | `owned sessions reach shared memory plane via spawn_subagent` | **S0** — data loss / security risk | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/11239) |
| #10225 | `ZeroCode RPC sessions cannot reach channels through channel-backed tools` | **S1** — workflow blocked | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/10225) |
| #10536 | `macOS Seatbelt ignores allowed_roots for shell commands` | **S1** — workflow blocked | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/10536) |
| #10673 | `Persist failed ACP turns on daemon RPC path` | **S1** — workflow blocked | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/10673) |
| #11478 | `Images >64KB silently truncated mid-file` | S2 (P1 reportado) | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/11478) |
| #9799 | `Ephemeral daemon CPU spin` | S2 | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/9799) |
| #11420 | `SQLite rewrites created_at on every turn` | S2 | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/11420) |

### Regressões Ativas

| # | Título | Status | Link |
|---|--------|--------|------|
| #11387 | `zerocode ignores launch directory (regression of #10609)` | Closed (fix merged) | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/11387) |
| #10701 | `image attachment invalidates entire history cache prefix` | Closed (fix merged) | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/10701) |

---

## 6. Pedidos de features e sinais de roadmap

### Features em desenvolvimento ativo

| # | Título | Release Target | Link |
|---|--------|---------------|------|
| #11516 | `effort-aware local/cloud model routing` | v0.8.6+ | [PR](https://github.com/zeroclaw-labs/zeroclaw/pull/11516) |
| #11002 | `Ship zeroclaw-gw as standalone IPC client` | v0.9.0 | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/11002) |
| #7951 | `Effort-based local/cloud model routing` (tracker) | v0.9.0 | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/7951) |
| #8766 | `E2E coverage for first-run setup` | v0.8.6 | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8766) |
| #8310 | `Schema V4 breaking cut` | v0.9.0 | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8310) |
| #11355 | `Rust/Dioxus Skills dashboard PoC (WASM)` | Future | [PR](https://github.com/zeroclaw-labs/zeroclaw/pull/11355) |

### Novas demandas identificadas

- **[#11425](https://github.com/zeroclaw-labs/zeroclaw/issues/11425)** — Batch de correções Windows (file replacement + path handling). Dez PRs agrupados.
- **[#11509](https://github.com/zeroclaw-labs/zeroclaw/pull/11509)** — Preferir attachments para artefatos grandes gerados.
- **[#11505](https://github.com/zeroclaw-labs/zeroclaw/pull/11505)** — Expor ações de settings e keybindings no ZeroCode.

---

## 7. Resumo de feedback dos usuários

### Dores reportadas

| Problema | Ocorrências | Impacto |
|----------|-------------|---------|
| **Timeouts e lentidão no CI** | Alta (9 comentários em #7108) | Produtividade dos contribuidores |
| **Daemons entrando em spin de CPU** | Repetido (#9799) | Confiabilidade em produção |
| **Perda de contexto em cron jobs** | Frequente (#6105) | Experiência do agente |
| **Imagens truncadas (>64KB)** | Reportado recentemente (#11478) | Qualidade de respostas |
| **Config complexa sem feedback claro** | Visible em múltiplos PRs | UX onboarding |

### Cenários de uso em destaque

- **ZeroCode como IDE de agente**: Usuários esperam que o workspace, contexto de runtime e estado de sessão sejam visíveis e persistidos corretamente. Issues [#8383](https://github.com/zeroclaw-labs/zeroclaw/issues/8383), [#8763](https://github.com/zeroclaw-labs/zeroclaw/issues/8763) e PRs em [#11513](https://github.com/zeroclaw-labs/zeroclaw/pull/11513), [#11506](https://github.com/zeroclaw-labs/zeroclaw/pull/11506) addressam isso.

- **Multi-canal com confiança**: Canais Slack, Matrix, Telegram, WhatsApp, ACP etc. exigem status consistente. Issue [#11416](https://github.com/zeroclaw-labs/zeroclaw/issues/11416) reportou regressão no "is thinking…" do Slack.

- **Segurança em primeiro lugar**: Issues de segurança ativas em `allowed_roots` macOS (#10536), owned sessions (#11239), e bounds em HTTP (#11512) indicam foco da comunidade em hardening.

---

## 8. Backlog que merece atenção

### Issues sem atividade recente (>7 dias sem update) — Prioridade alta

| # | Título | Days Silent | Prioridade | Link |
|---|--------|-------------|------------|------|
| #7951 | Effort-based local/cloud routing | Alto | P2, risco alto | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/7951) |
| #8310 | Schema V4 breaking cut | Alto | P2, risco alto | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8310) |
| #8766 | E2E first-run coverage | Alto | P1, risco alto | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8766) |
| #11002 | Standalone zeroclaw-gw IPC client | Moderado | P2, risco alto | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/11002) |

### PRs aguardando maintainer review

| # | Título | Status | Link |
|---|--------|--------|------|
| #10391 | `fix(delegate): workspace bounds` | Needs maintainer review | [PR](https://github.com/zeroclaw-labs/zeroclaw/pull/10391) |
| #10687 | `fix(providers): custom OpenAI endpoints` | Needs author action | [PR](https://github.com/zeroclaw-labs/zeroclaw/pull/10687) |
| #10049 | `fix(prompt): channel scope` | Needs author action | [PR](https://github.com/zeroclaw-labs/zeroclaw/pull/10049) |
| #10034 | `fix(tools): provider alias probe` | Needs review | [PR](https://github.com/zeroclaw-labs/zeroclaw/pull/10034) |

### Issues antigas com risco acumulado

- **[#6105](

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*