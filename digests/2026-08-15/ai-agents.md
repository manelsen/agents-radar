# Resumo diário do ecossistema de agentes de IA 2026-08-15

> Issues: 0 | PRs: 1 | Projetos cobertos: 7 | Gerado em: 2026-08-14 20:25 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório de Projeto NullClaw — 2026-08-15

---

## 1. Panorama do Dia

O projeto NullClaw apresenta **baixa atividade nas últimas 24 horas**, com zero issues abertas ou fechadas e nenhuma nova release. A equipe focou seus esforços no ciclo de merge, com **1 PR fechada (#986)** que traz melhorias na configurabilidade do sistema de memória SQLite. O repositório mantém-se em estado estável, sem Indicadores de problemas críticos reportados pela comunidade. O ritmo de desenvolvimento sugere foco em refinamento de funcionalidades existentes em vez de expansão de escopo.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24 horas.**

O projeto nãoemitiu novas versões desde o período analisado. Recomenda-se monitorar o repositório para futuros anúncios de versões que possam incluir a funcionalidade adicionada pela PR #986.

🔗 [Repositório NullClaw](https://github.com/nullclaw/nullclaw/releases)

---

## 3. Progresso do Projeto

### PR Merged/Closed

| # | Título | Status | Autor | Impacto |
|---|--------|--------|-------|---------|
| [#986](https://github.com/nullclaw/nullclaw/pull/986) | GEN-548: make SQLite memory database path configurable | CLOSED | gently-whitesnow | **Alta** |

**Análise da PR #986:**
A pull request implementa a capacidade de configurar o caminho do banco de dados SQLite para motores de memória primários. Principais contribuições:

- Adição do parâmetro `memory.database_path` para configuração
- Preservação do comportamento padrão (`<workspace>/memory.db`) quando vazio
- Suporte a caminhos relativos (resolvidos a partir do workspace) e absolutos
- Adequação para cenários de *read-only workspace*

🔗 [NullClaw PR #986](https://github.com/nullclaw/nullclaw/pull/986)

---

## 4. Temas Quentes da Comunidade

**Nenhuma issue ou PR com atividade significativa de comentários ou reações registrada nas últimas 24 horas.**

A comunidade não demonstrou engajamento elevado (comentários, reações) em topics específicos no período analisado. Este cenário pode indicar:
- Satisfação geral com o estado atual do projeto
- Período de baixa participação da comunidade
- Necessidade de monitorar discussões pendentes em issues anteriores

---

## 5. Bugs e Estabilidade

**Nenhum bug, crash ou regressão reportado nas últimas 24 horas.**

O período de análise não registra:
- Issues abertas com标签 `bug`
- Reportes de crashes ou comportamentos inesperados
- Alertas de regressões por membros da comunidade

**Métricas de estabilidade:** ✅ Nenhuma anomalia detectada

---

## 6. Pedidos de Features e Sinais de Roadmap

### Feature Adicionada

**PR #986 — Configurabilidade de caminho SQLite** (GEN-548)

Esta PR sinaliza direção de desenvolvimento focada em:
- **Flexibilidade de deployment** — suporte a configurações customizadas de storage
- **Adequação a infraestruturas diversas** — suporte a workspaces read-only
- **Configurabilidade via parâmetros** — движущая tendência de externalização de configurações

**Possíveis implicações para roadmap:**
- Generalização do padrão de configurabilidade para outros componentes
- Suporte a múltiplos backends de memória (além de SQLite)
- Documentação extensiva de opções de deployment

🔗 [Ver PR #986](https://github.com/nullclaw/nullclaw/pull/986)

---

## 7. Resumo de Feedback dos Usuários

**Nenhum feedback direto (comentários, issues de usuário) registrado nas últimas 24 horas.**

A ausência de feedback negativo ou positivo indica:
- Estabilidade operacional percebida pela base de usuários
- Possível satisfação com funcionalidades existentes
- Necesidade de canais proativos de coleta de feedback (surveys, GitHub Discussions)

---

## 8. Backlog que Merece Atenção

**Não há indicators de issues/PRs importantes sem resposta prolongada no período de 24 horas analisado.**

| Critério | Status |
|----------|--------|
| Issues sem resposta >7 dias | Nenhuma identificada |
| PRs aguardando review | 0 abertas |
| Debates técnicos pendentes | Nenhum registrado |

---

## Resumo Executivo

| Dimensão | Status |
|----------|--------|
| Atividade de código | 🟡 Moderada (1 PR merged) |
| Lançamentos | ⚪ Nenhum |
| Bugs reportados | 🟢 Zero |
| Engajamento comunidade | ⚪ Baixo |
| Estabilidade | 🟢 Estável |

**Veredicto:** Projeto em modo de manutenção ativa com foco em refinamentos de configurabilidade. A saúde geral permanece sólida, sem indicators de problemas críticos. Recomenda-se monitorar a integração da PR #986 na próxima release para validar impacto.

---

🔗 [github.com/nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo do Ecossistema de Agentes de IA Open Source

## 2026-08-15

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **duas velocidades distintas** em 2026-08-15. De um lado, **Hermes Agent, CoPaw, IronClaw e ZeroClaw** demonstram atividade intensa com 50+ itens atualizados por dia, ciclos de release rápidos (IronClaw 1.2.0, Hermes v0.20.1) e desenvolvimento arquitetural ativo. Do outro, **NullClaw** opera em modo de manutenção refinada com atividade mínima, sugerindo maturidade ou estagnação. **NanoBot** e **PicoClaw** ocupam posição intermediária, com foco em estabilidade e correções críticas. O tema transversal é a **segurança e robustez**: múltiplos projetos investem simultaneamente em timeout handling, race condition fixes e autenticação plugável, evidenciando maturidade do ecossistema ao convergir para problemas similares.

---

## 2. Comparação de Atividade

| Projeto | Issues Ativas | PRs Atualizados (24h) | PRs Merged/Fechados (24h) | Releases (24h) | Bugs Críticos Abertos | Saúde Geral |
|---------|:-------------:|:---------------------:|:--------------------------:|:--------------:|:---------------------:|:-----------:|
| **Hermes Agent** | 41 | 50 | 17 | 1 (v0.20.1) | 5 P1 | 🟢 Muito Alta |
| **CoPaw** | 12 | 41 | 15 | 0 | 3 Alta | 🟢 Alta |
| **IronClaw** | 23 | 50 | 22 | 1 (v1.2.0) | 0 P1 | 🟢 Alta |
| **ZeroClaw** | 30 | 50 | 3 | 0 | 1 S1 | 🟡 Alta (fluxo) |
| **NanoBot** | 3 | 23 | 8 | 0 | 1 P0 | 🟡 Moderada-Alta |
| **PicoClaw** | 1 | 8 | 5 | 0 | 1 Alta | 🟡 Estável c/ incidentes |
| **NullClaw** | 0 | 0 | 1 | 0 | 0 | ⚪ Manutenção |

**Observação:** Hermes Agent e IronClaw lideram em volume absoluto, enquanto CoPaw apresenta o maior índice de resolução (76% das issues fechadas em 24h).

---

## 3. Posicionamento do Projeto Principal

Considerando o volume de atividade, maturidade do release cycle e diversidade de funcionalidades, **Hermes Agent** se destaca como o projeto mais completo do ecossistema:

### Vantagens Competitivas

| Dimensão | Hermes Agent | Pares |
|----------|--------------|-------|
| **Volume de código** | ~656 PRs consolidadas em v0.20.1 | IronClaw (v1.2.0), ZeroClaw (v0.8.5) |
| **Integrações** | Desktop, CLI, Docker, Browserbase, Firecrawl, Browser Use | IronClaw (Telegram, Slack), ZeroClaw (Telegram, Discord, ACP) |
| **Automação** | Agent loops com timeout/deadline semantics | IronClaw (automations determinísticas), ZeroClaw (goal mode) |
| **Extensibilidade** | Plugin hooks em SQLite (transform_message_store/load) | CoPaw (skill system dinâmico), IronClaw (pluggable loops) |

### Diferenças Técnicas Marcantes

| Aspecto | Hermes Agent | ZeroClaw | IronClaw | CoPaw |
|---------|-------------|----------|----------|-------|
| **Paradigma central** | Agente stateful com deadlinelayer | Agente com confirmação explícita | Runtime plugável com harness | Skill-centric com auto-unload |
| **Storage** | SQLite + FTS5 indexes | SQLite + budget accounting | Mnesis via MCP | Auto-memory linked |
| **Orquestração** | Sequential tool calls c/ timeouts | Goal mode v1 (bounded) | ACP harness executor | Dynamic skill loading |
| **Segurança** | Browserbase/Firecrawl integration | Atomic budget accounting | Secrets mediation | MCP tool result deduplication |

### Tamanho da Comunidade

| Indicador | Hermes | ZeroClaw | IronClaw | CoPaw | NanoBot |
|-----------|--------|----------|----------|-------|---------|
| **Issues/PRs 24h** | 100 | 83 | 97 | 91 | 26 |
| **Engajamento (comentários)** | 30+ (skills index) | 22 (goal mode) | 6 (epic) | 8 (auto model) | Moderado |
| **Release cadence** | ~2 semanas | Semanal (v0.8.5) | ~1 mês | Pré-release | — |

---

## 4. Focos Técnicos Compartilhados

A análise dos sete projetos revela **cinco problemas técnicos em convergência** no ecossistema:

### 4.1 Timeout e Deadline Management

| Projeto | Abordagem | Issue/PR |
|---------|-----------|----------|
| **Hermes Agent** | Unified deadline layer (4 fases) | #85125 |
| **NanoBot** | Timeout inactivity vs. total time distinction | #5392 |
| **PicoClaw** | Honor exec timeout + boolean options | #3319 |
| **IronClaw** | Deterministic no-result suppression | #7651 |
| **ZeroClaw** | Atomic budget accounting | #9996 |

**Conclusão:** O ecossistema reconhece timeout handling como problema estrutural, não incident-based. Hermes Agent lidera com proposta arquitetural de 4 fases.

### 4.2 Estabilidade Multi-Plataforma (Windows/Linux)

| Projeto | Problema | Severidade |
|---------|----------|:----------:|
| **Hermes Agent** | Desktop quebrado após updates (WinError 32, lock chain) | P1 |
| **ZeroClaw** | 74 test failures no Windows | S2 |
| **CoPaw** | cmd.exe flash, ícone taskbar, auto-update | Alta |
| **NanoBot** | Crash em os.replace() Windows PermissionError | P2 |
| **PicoClaw** | Concurrency hazards, goroutine leaks | Resolvida |

**Conclusão:** Windows permanece como plataforma problemático. Hermes Agent apresenta o cluster mais crítico (3 issues P1 simultâneas).

### 4.3 Sistema de Memória/Estado Plugável

| Projeto | Implementação | Status |
|---------|---------------|--------|
| **IronClaw** | MCP-backed memory + Mnesis | PR #7661 em revisão |
| **NullClaw** | SQLite path configurável | PR #986 merged |
| **CoPaw** | Auto-memory linked chat titles | PR #7030 merged |
| **Hermes Agent** | FTS5 index self-repair | PR #86183 |

**Conclusão:** Tendência clara para memory provider plugável, com IronClaw liderando em sofisticação (Mnesis + MCP).

### 4.4 Autenticação e Autorização

| Projeto | Feature | Status |
|---------|---------|--------|
| **ZeroClaw** | Pluggable inbound auth + canonical principals | RFC #7141 (P1) |
| **Hermes Agent** | OAuth status warnings + desktop cookie flush | PR #61486, #4689 |
| **IronClaw** | Secrets mediation + egress boundary | Epic #7482 |
| **ZeroClaw** | Discord role-based auth | Issue #9970 |

**Conclusão:** Autenticação plugável emerge como requisito para uso enterprise, com ZeroClaw e IronClaw liderando discussão.

### 4.5 Extensibilidade via Skills/Plugins

| Projeto | Sistema | Diferencial |
|---------|---------|-------------|
| **CoPaw** | Dynamic skill loading + auto-unload | Auto-unload após 5 rodadas |
| **IronClaw** | Capability socket + ACP executor | Harness adapters (Claude Code, Pi, Codex) |
| **Hermes Agent** | Plugin hooks em SQLite | transform_message_store/load |
| **NanoBot** | Skills marketplace c/ builtin override | Issue #5309 |

**Conclusão:** Skills evoluíram de simples ferramentas para lifecycle management completo, com CoPaw demonstrando maturidade mais avançada.

---

## 5. Análise de Diferenciação

### 5.1 Por Público-Alvo

| Público | Projeto Recomendado | Justificativa |
|---------|--------------------|---------------|
| **Enterprise/Segurança** | ZeroClaw | RFCs de segurança maduros (11+ comentários), atomic budget, confirmation tiers |
| **Desenvolvedores CLI** | Hermes Agent | Desktop quebrado, mas CLI maduro, browser tools, Docker integration |
| **Usuários finais mobile** | NanoBot | WebUI refinamento, session groups, sidebar polish |
| **Hardware embarcado** | PicoClaw | $10 hardware, <10MB RAM, boot sub-second |
| **Automação headless** | IronClaw | Deterministic automations, ACP executor, unattended runs |
| **Extensibilidade profunda** | CoPaw | Skill system dinâmico, auto-unload, per-session overrides |

### 5.2 Por Arquitetura

```
┌─────────────────────────────────────────────────────────────────┐
│                    PARADIGMA CENTRAL                            │
├─────────────────┬─────────────────┬────────────────────────────┤
│  AGENTE PURO    │  RUNTIME        │  SKILL-CENTRIC             │
│  (stateful)     │  PLUGGABLE      │  (dynamic)                │
├─────────────────┼─────────────────┼────────────────────────────┤
│ Hermes Agent    │ IronClaw        │ CoPaw                     │
│ - Agent loops   │ - Harness       │ - Dynamic loading          │
│ - Deadline      │   adapters      │ - Auto-unload              │
│   semantics     │ - ACP executor  │ - Per-session overrides    │
│ - Session state │ - Capability     │ - Memory-linked titles     │
│                 │   socket        │                            │
├─────────────────┴─────────────────┴────────────────────────────┤
│  AGENTE MODULAR                                                  │
│  (composable)                                                    │
├─────────────────┬─────────────────┬────────────────────────────┤
│ ZeroClaw        │ NanoBot         │ PicoClaw                   │
│ - Security-     │ - Provider      │ - Minimalist               │
│   first         │   flexibility   │ - Hardware-constrained      │
│ - Auth plugável │ - WebUI polish  │ - Edge deployment          │
│ - Atomic        │ - Streaming     │ - Go-based                 │
│   budgets       │   stability     │                            │
└─────────────────┴─────────────────┴────────────────────────────┘
```

### 5.3 Por Prioridade Estratégica

| Projeto | Foco Principal (2026) | Sinal de Roadmap |
|---------|----------------------|------------------|
| **Hermes Agent** | Timeout/hang resolution | Unified deadline layer |
| **IronClaw** | Pluggable everything | Epic #7482 (17 sub-issues) |
| **ZeroClaw** | Segurança + compatibilidade | RFC #7155, #7141 |
| **CoPaw** | Skill lifecycle | Dynamic loading + auto-unload |
| **NanoBot** | UI/UX e provider diversity | WebUI features (5+ PRs) |
| **PicoClaw** | Resiliência de conectores | MCP failure handling |
| **NullClaw** | Refinamento configurável | SQLite path configurável |

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração

| Categoria | Projetos | Característica |
|-----------|----------|----------------|
| **🚀 Iteração rápida** | Hermes Agent, IronClaw, CoPaw, ZeroClaw | 50+ itens/dia, releases frequentes, RFCs ativos |
| **⚡ Consolidando** | NanoBot, PicoClaw | Bug fixes prioritários, features em PR, sem release |
| **🛑 Manutenção** | NullClaw | 1 PR/dia, sem releases, baixa participação |

### 6.2 Índice de Responsividade

| Projeto | Taxa de Resolução (24h) | Bugs P0/P1 | Tempo Médio de Fechamento |
|---------|:----------------------:|:-----------:|:------------------------:|
| **CoPaw** | 76% (38/50 issues) | 3 alta | <24h para bugs críticos |
| **NanoBot** | 66% (2/3 bugs) | 1 P0 | <24h (streaming timeout) |
| **Hermes Agent** | ~17 PRs/50 | 5 P1 | variável (regressões) |
| **IronClaw** | ~22 PRs/50 | 0 P1 | estável |
| **ZeroClaw** | ~3 PRs/50 | 1 S1 | em progresso |

### 6.3 Maturidade por Estágio

```
NullClaw    ▓░░░░░░░░░  Estagnação
PicoClaw    ▓▓▓▓░░░░░░  Crescimento
NanoBot     ▓▓▓▓▓░░░░░  Maturidade (features)
CoPaw       ▓▓▓▓▓▓▓░░░  Maturidade (estável)
IronClaw    ▓▓▓▓▓▓▓▓░░  Maturidade (release)
ZeroClaw    ▓▓▓▓▓▓▓▓░░  Maturidade (segurança)
Hermes      ▓▓▓▓▓▓▓▓▓░  Alta maturidade
```

---

## 7. Sinais de Tendência

### 7.1 Tendências de Mercado Extraídas

| Tendência | Evidência | Implicação |
|-----------|-----------|------------|
| **Agent loops plugáveis** | IronClaw Epic #7482, Hermes deadline layer, ZeroClaw goal mode | Commoditization de executores — usuários poderão trocar harness (Claude Code ↔ Pi ↔ Codex) |
| **Segurança como feature de primeira classe** | ZeroClaw atomic budgets, confirmation tiers; IronClaw secrets mediation; Hermes auth improvements | Usuários enterprise demandam controles granulares, não apenas funcionalidades |
| **Memory/state plugável** | IronClaw MCP+Mnesis, CoPaw auto-memory, Hermes FTS5 self-repair | Providers de memória third-party emergirão como categoria de marketplace |
| **Windows como cidadã de segunda classe** | 74 falhas de teste ZeroClaw, P1s Hermes, CoPaw desktop issues | Maior cobertura CI/CD multi-plataforma necessária; comunidade pode se segmentar |
| **Skills como unidade de extensibilidade** | CoPaw auto-unload, NanoBot marketplace, IronClaw capability socket | Skills evoluem de scripts para plugins com lifecycle management |
| **Computer use em desenvolvimento** | CoPaw PR #7037, NanoBot streaming fixes, PicoClaw MCP resilience | Computer use se tornará commodity; diferencial será estabilidade |
| **Avaliação de agentes** | ZeroClaw eval harness, Hermes session search, IronClaw conformance suite | Mercado amadurece para benchmarking e reproducibility |

### 7.2 Sinais de Oportunidade

| Oportunidade | Projetos que Sinalizam | Ação Recomendada |
|--------------|------------------------|------------------|
| **Marketplace de memory providers** | IronClaw, Hermes, CoPaw | Desenvolvedores third-party podem criar provedores custom |
| **Integração cross-platform testing** | ZeroClaw, Hermes, CoPaw | Ferramentas de CI/CD especializadas em testes Windows/Linux |
| **Agent evaluation frameworks** | ZeroClaw, IronClaw | Startups podem criar plataformas de benchmark |
| **Security audit tooling** | ZeroClaw | Demanda por ferramentas de auditoria de comandos shell |

### 7.3 Riscos Identificados

| Risco | Projetos Afetados | Severidade |
|-------|-------------------|:----------:|
| **Regressões de plataforma Windows** | Hermes, ZeroClaw, CoPaw | Alta — impacta base de usuários significativa |
| **Dívida técnica em timeout handling** | Todos | Média — problema estrutural não resolvido |
| **Fragmentação de ecossistema** | Todos | Baixa — mas convergência de padrões beneficiaria todos |
| **Manutenção de integrações (Telegram, Discord)** | IronClaw, ZeroClaw, PicoClaw | Média — APIs externas quebram frequentemente |

---

## Resumo Executivo

| Dimensão | Líder | Seguidor | Tendência |
|----------|-------|----------|-----------|
| **Volume de desenvolvimento** | Hermes Agent | IronClaw | ↗️ Hermes acelerando |
| **Velocidade de resposta** | CoPaw | NanoBot | ↗️ CoPaw destacando |
| **Maturidade de segurança** | ZeroClaw | IronClaw | ↗️ ZeroClaw isolado |
| **Extensibilidade** | CoPaw | IronClaw | ↗️ Skills commoditizing |
| **Estabilidade multi-plataforma** | IronClaw | CoPaw | → todas com gaps |
| **Inovação arquitetural** | Hermes Agent | ZeroClaw | ↗️ Deadline layer como diferencial |

**Conclusão:** O ecossistema está em **fase de maturação acelerada**, com projetos competindo em segurança, extensibilidade e estabilidade multi-plataforma. Hermes Agent lidera em volume e sofisticação técnica; CoPaw demonstra o melhor índice

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-08-15

---

## 1. Panorama do Dia

O ecossistema NanoBot demonstra **alta atividade de desenvolvimento** nesta data, com 23 PRs atualizadas nas últimas 24h —indicativo de um ciclo de integração intenso. O projeto fechou ao menos 8 PRs (incluindo 3 correções críticas de bugs) e mantém 15 PRs abertas em diferentes estágios de revisão. A atividade de issues permanece moderada (3 issues), com dois bugs críticos resolvidos (timeout em streaming da Anthropic e mutação prematura de sessão) que evidenciam atenção à estabilidade do provedor e da camada de persistência. Não houve lançamentos de novas versões hoje, sugerindo foco em refinamento de código e preparação para release futura.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24h.**

O projeto encontra-se em fase de desenvolvimento ativo semtag de versão nova. A ausência de releases não indica estagnação —pelo contrário, o volume de PRs em revisão sugere preparação para um próximo ciclo de release.

---

## 3. Progresso do Projeto

### PRs Fechadas/Mergidas Hoje (8 total)

| # | Título | Impacto |
|---|--------|--------|
| [#5392](https://github.com/HKUDS/nanobot/pull/5392) | `fix(anthropic): treat stream idle timeout as inactivity only, not total time` | **Crítica** — Resolve regressão que matava gerações longas ativas. |
| [#5395](https://github.com/HKUDS/nanobot/pull/5395) | `feat(webui): refine conversation groups and shared shapes` | UI — Terminologia consistente e simplificação de delete confirmation. |
| [#5393](https://github.com/HKUDS/nanobot/pull/5393) | `feat(webui): polish sidebar and session transitions` | UI — Hierarquia de sidebar mais clara e apresentação de pastas. |
| [#5390](https://github.com/HKUDS/nanobot/pull/5390) | `Agent/knowledge graph` | **Feature** — Introduz visualização de grafo de conhecimento para agentes. |
| [#5018](https://github.com/HKUDS/nanobot/pull/5018) | `feat(skills): support explicit context loading` | **Enhancement** — Permite pré-carregamento explícito de skills via `ContextBuilder`. |
| [#4689](https://github.com/HKUDS/nanobot/pull/4689) | `feat(providers): surface OAuth status and expiry warnings` | UX — Status de provedores OAuth e alertas de expiração de token. |
| [#5382](https://github.com/HKUDS/nanobot/pull/5382) | `fix(session): retry os.replace() on transient Windows PermissionError` | **Stabilidade Windows** — Retry em `[WinError 5]` durante heartbeat. |
| — | PR #5378 bug fix (file-cap archive) | Resolve mutação prematura de sessão antes de persistência. |

**Destaque de progresso:** A correção #5392 demonstra maturidade no processo de detecção de regressões em provedores, enquanto #5179 (MCP SDK v2) avança em prioridade p1, indicando modernização da integração com ferramentas externas.

---

## 4. Temas Quentes da Comunidade

### Issues e PRs com Maior Atenção

| # | Tipo | Tema | Status |
|---|------|------|--------|
| [#5161](https://github.com/HKUDS/nanobot/issues/5161) / [#5396](https://github.com/HKUDS/nanobot/pull/5396) | Issue + PR | Refatoração de supressões Pyright para strict checking | Aberta (PR pronta) |
| [#5309](https://github.com/HKUDS/nanobot/pull/5309) | PR | Marketplace skills com capacidade de sobrepor builtins | Aberta |
| [#5271](https://github.com/HKUDS/nanobot/pull/5271) | PR | Prevenção de sobrescrita de sessão por tarefas stale | **Aberta — Prioridade P0** |
| [#4329](https://github.com/HKUDS/nanobot/pull/4329) | PR | TypeScript Terminal UI nativa | Aberta (em andamento há ~2 meses) |
| [#5179](https://github.com/HKUDS/nanobot/pull/5179) | PR | Migração MCP para SDK v2 com compatibilidade legacy | Aberta — Prioridade P1 |

**Análise de demandas comunitárias:**

1. **Qualidade de código:** A issue #5161 demonstra esforço contínuo em rigor de tipagem (BasedPyright strict), evidenciando compromisso com manutenibilidade.

2. **Extensibilidade:** O PR #5309 busca resolver uma limitação do sistema de skills onde marketplace skills não conseguiam sobrepor skills bundled — demanda comum em ecossistemas de plugins.

3. **Estabilidade de sessão:** A prioridade P0 no PR #5271 indica que race conditions em background tasks representam risco operacional real para usuários em produção.

4. **Modernização de UI:** Diversos PRs webui (#5367, #5358, #5340, #5389) revelam investimento significativo na experiência do usuário WebUI, incluindo localização, colaboração e interatividade.

---

## 5. Bugs e Estabilidade

### Bugs Reportados/Resolvidos Hoje

| Severidade | # | Descrição | Status |
|------------|---|-----------|--------|
| **P0** | #5271 | Tarefas background stale sobrescrevendo dados de sessão após `/new` | Aberta |
| **P2** | #5391 | Timeout de streaming Anthropic aplicado como tempo total (não inactivity) | ✅ Fechada via #5392 |
| **P2** | #5390 | File-cap archive failure mutando sessão antes de persistência | ✅ Fechada |
| **P2** | #5382 | Crash em `gateway.log` por `os.replace()` no Windows `[WinError 5]` | Aberta |
| **P2** | #5371 | Ações do assistente visíveis antes do fim do turno | Aberta |
| **Regression** | #5152 | Resultados parciais de subagente sem marcação adequada | Aberta |

**Análise crítica:** Aissue #5391 demonstra um padrão de bug comum em integrações de streaming — tratadores de timeout reutilizados em contextos diferentes (idle vs. total). A resolução rápida (< 24h) é positiva. O bug P0 em #5271 requer atenção imediata da equipe.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features em Desenvolvimento

| # | Feature | Área | Prioridade |
|---|---------|------|------------|
| [#5390](https://github.com/HKUDS/nanobot/pull/5390) | Agent/Knowledge Graph | Core | P2 |
| [#4329](https://github.com/HKUDS/nanobot/pull/4329) | TypeScript Terminal UI nativa | CLI | Enhancement |
| [#5179](https://github.com/HKUDS/nanobot/pull/5179) | Migração MCP para SDK v2 | Provider | P1 |
| [#5358](https://github.com/HKUDS/nanobot/pull/5358) | Colaboração de sessão via menções | WebUI | Feature |
| [#5367](https://github.com/HKUDS/nanobot/pull/5367) | Localização de activity labels do agente | WebUI | P2 |
| [#5389](https://github.com/HKUDS/nanobot/pull/5389) | Drag-and-drop para organização de sessões | WebUI | P2 |
| [#5340](https://github.com/HKUDS/nanobot/pull/5340) | Background interativo com partículas | WebUI | Feature |
| [#4145](https://github.com/HKUDS/nanobot/pull/4145) | Weather Skill | Skills | Feature |

**Sinais de roadmap identificados:**

1. **Modernização de provedores:** Migração MCP SDK v2 (#5179) sugere atualização de integrações externas para APIs mais recentes.

2. **UI/UX como prioridade:** 5+ PRs webui indicam foco em experiência visual e colaboração multi-sessão.

3. **Conhecimento estruturado:** O PR #5390 (Agent/Knowledge Graph) pode indicar direção estratégica hacia memória e raciocínio estruturado.

4. **Skills marketplace:** #5309 mostra evolução do ecossistema de skills com suporte a override de builtins.

---

## 7. Resumo de Feedback dos Usuários

### Padrões de Dores Identificados (via issues e PRs)

| Categoria | Evidência | Impacto |
|-----------|-----------|---------|
| **Estabilidade de sessão** | #5271 (P0), #5378 | Alto — dados podem ser perdidos em operações normais |
| **Timeout em streaming longo** | #5391 | Crítico para usuários com gerações de texto extenso |
| **Compatibilidade Windows** | #5382 | Funcionalidade básica em ambiente Windows comprometida |
| **Skills bundling** | #5309 | UX limitante — marketplace skills não substituem builtins |
| **UI responsiva** | #5371, #5367 | Satisfação — comunidade aguarda melhorias visuais |

**Análise de sentimento:** A atividade intensa de PRs e a resolução rápida de bugs críticos (#5391 resolvida no mesmo dia) sugerem equipe responsiva. Issues P0 e P2 têm atenção imediata, indicando priorização adequada. A ausência de issues com 👍 alto não permite análise quantitativa de feedback.

---

## 8. Backlog que Merece Atenção

### Issues/PRs Sem Resposta ou Estagnadas

| # | Tipo | Título | Idade | Status |
|---|------|-------|-------|--------|
| [#5161](https://github.com/HKUDS/nanobot/issues/5161) | Issue | Refatorar supressões Pyright (strict) | ~17 dias | Aberta — PR #5396 vinculada |
| [#4145](https://github.com/HKUDS/nanobot/pull/4145) | PR | Weather Skill | ~45 dias | Aberta |
| [#4329](https://github.com/HKUDS/nanobot/pull/4329) | PR | TypeScript Terminal UI | ~63 dias | Aberta |
| [#4689](https://github.com/HKUDS/nanobot/pull/4689) | PR | OAuth status warnings | ~43 dias | ✅ Fechada (8/14) |
| [#5179](https://github.com/HKUDS/nanobot/pull/5179) | PR | MCP SDK v2 migration | ~16 dias | Aberta — P1 |

**Recomendações de atenção:**

1. **#4329 — TypeScript Terminal UI:** 63 dias em aberto. Considerar dividir em PRs incrementais ou definir milestone para desbloqueio.

2. **#4145 — Weather Skill:** 45 dias sem merge. Avaliar se a feature atende requisitos atuais ou se precisa de rework.

3. **#5271 — P0 Session overwrite:** Prioridade máxima. Risco de perda de dados em produção.

---

## Métricas Sintéticas

| Indicador | Valor | Observação |
|-----------|-------|------------|
| Atividade de PRs (24h) | 23 | Muito alta |
| Taxa de resolução de bugs | 2/3 fechadas | Positiva |
| Bugs P0 abertos | 1 (#5271) | Requer atenção imediata |
| Features em review | 15 | Pipeline saudável |
| Releases | 0 | Desenvolvimento ativo sem tag |

---

**Fontes dos dados:** GitHub HKUDS/nanobot — atualizado em 2026-08-15.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório de Projeto — Hermes Agent
**Data de referência:** 2026-08-15 | **Repositório:** NousResearch/hermes-agent

---

## 1. Panorama do dia

O projeto mantém um ritmo de atividade muito intenso: 50 issues e 50 PRs atualizados nas últimas 24h, com 17 PRs merged/fechados e 1 nova release (v0.20.1). O ciclo de desenvolvimento segue veloz, consolidando ~656 PRs na release patch mais recente. A base de issues abertas permanece elevada (~41 ativas), com destaque para regressões no desktop Windows e bugs de estabilidade no updater CLI — sinais de que a cobertura de testes em plataformas não-Linux ainda é uma lacuna crítica. A comunidade está engajada, com 5+ issues acumulando 4+ comentários cada, indicando triage ativo e colaboração decentralizada.

---

## 2. Lançamentos

### ✅ v2026.8.13 — Hermes Agent **v0.20.1**
**Release date:** 13/08/2026 | [GitHub Release](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.8.13)

- **Tipo:** Patch release (tag estável para consumidores downstream)
- **Escopo:** Consolida ~656 PRs merged desde v0.20.0 em uma tag estável
- **Impacto:** Docker images, hospedagem gerenciada e consumidores instalando via tag `latest` agora usam baseconf validada
- **Breaking changes:** Nenhuma documentada nesta release
- **Notas de migração:** Consumidores que puxam `latest` ou `main` automaticamente adotam a release; implantações custom via `requirements.txt` ou `pyproject.toml` com pins explícitos precisarão atualizar a referência da tag se quiserem a nova superfície de estabilidade

> ⚠️ **Sinal de alerta:** A rápida sequência v0.20.0 → v0.20.1 (intervalo de ~2 semanas) sugere que a v0.20.0 introduziu problemas significativos que demandaram correção acelerada. Issues abertas como #83680 (cryptography 50.0.0 no Termux) e #85272 (Telegram em python-telegram-bot 22.8) indicam que a v0.20.0 trouxe regressões de compatibilidade.

---

## 3. Progresso do Projeto

### PRs merged/fechados hoje (relevância alta)

| # | Título | Impacto |
|---|--------|---------|
| [#86302](https://github.com/NousResearch/hermes-agent/pull/86302) **[CLOSED]** | Pasting an image no longer stalls the send behind agent startup | **Corrige** hang de 30s–vários minutos ao anexar imagem em sessão fresca — gargalo de RPC aguardando dependência desnecessária |
| [#51293](https://github.com/NousResearch/hermes-agent/pull/51293) **[CLOSED]** | fix(browser): skip Chromium install for cloud setup | **Corrige** instalação desnecessária de Chromium (~170 MB) para provedores cloud (Browserbase, Firecrawl, Browser Use) durante `hermes setup tools` |
| [#61486](https://github.com/NousResearch/hermes-agent/pull/61486) **[CLOSED]** | fix(desktop): flush cookie storage before destroying OAuth login window | **Corrige** desktop remote-gateway bounceback para tela de login após basic-auth bem-sucedido |
| [#86117](https://github.com/NousResearch/hermes-agent/pull/86117) **[CLOSED]** | Make hermes tools post-setup browserbase fail when dependency installation fails | **Melhora** feedback de erro no post-setup do Browserbase — antes silenciava falhas de npm |

### PRs abertos com progresso significativo

| # | Título | Destaque |
|---|--------|---------|
| [#86311](https://github.com/NousResearch/hermes-agent/pull/86311) | fix(agent): bound sequential tool calls + salvage #84795 + timeouts.tools.sequential_call | Aplica deadline semantics à execução sequencial de ferramentas — evita wedge de turns até restart do processo (alinha com #85125) |
| [#86183](https://github.com/NousResearch/hermes-agent/pull/86183) | fix(state): verify and self-repair FTS5 indexes on engine change | Auto-reparo de índices trigram legados ao migrar SQLite — fecha #86027 |
| [#86318](https://github.com/NousResearch/hermes-agent/pull/86318) | fix(update): stop reporting bogus 'Found 9980 new commit(s)' on shallow installs | Elimina último sítio de fabricação de contagem espúria no `hermes update` (raiz em #53479) |
| [#86313](https://github.com/NousResearch/hermes-agent/pull/86313) | fix(agent): bot prompt leaks default profile's skills index + identity | Corrige vazamento de skills/identidade do perfil default no prompt de bots — impacto funcional, não cosmético |
| [#86320](https://github.com/NousResearch/hermes-agent/pull/86320) | fix(browser): discover browser-use from user-level tool directories | `browser_exec` agora encontra browser-use em `~/.local/bin` mesmo com PATH mínimo (Desktop/TUI worker) |
| [#86298](https://github.com/NousResearch/hermes-agent/pull/86298) | feat(state): transform_message_store / transform_message_load plugin hooks | Duas novas hooks de plugin na fronteira SQLite do SessionDB — abre espaço para extensões de storage sem fork interno |
| [#86324](https://github.com/NousResearch/hermes-agent/pull/86324) | feat(discord): typed outbound embed builder for REST v10 (omniscience M4) | Novo módulo `tools/discord_api/embeds.py` com validação tipada de limites REST v10 — fase 2A da campaign Omniscience |
| [#86322](https://github.com/NousResearch/hermes-agent/pull/86322) | feat(a2a): support custom per-peer headers and send User-Agent | Suporte a headers customizados por peer + User-Agent `Hermes-A2A/1.0` — melhora compatibilidade com peers frontados por header-auth |

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários + reação)

| # | Título | Comentários | Área | Análise |
|---|--------|:-----------:|------|---------|
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | Skills index is stale or degraded | **30** | Skills Hub | Sonda automatizada de freshness falhou — índice 29.8h old (limite 26h). Impacta `/docs/skills` e workflows de deploy. Comunidade monitora ativamente. |
| [#85622](https://github.com/NousResearch/hermes-agent/issues/85622) | External memory provider (mode both) suppresses built-in MEMORY.md/USER.md injection | **6** | Memory | Contradiz documentação "additive, never replacing" — memória externa substitui em vez de somar. Relevante para usuários com provedores custom. |
| [#83680](https://github.com/NousResearch/hermes-agent/issues/83680) | [Termux] "cryptography" Rust extension cannot resolve "PyLong_Type" | **6** | CLI / Install | Regressão após bump de cryptography 48.x → 50.0.0. Afeta Android/Termux. Usuários não consegue carregar fontes criptográficas. |
| [#86223](https://github.com/NousResearch/hermes-agent/issues/86223) | Desktop client broken after last 2 updates on Windows — backend exits (1), WinError 32 | **5** | Desktop / Win | P1 — dois updates consecutivos quebraram o desktop no Windows. Lock chain impede restart. |
| [#85125](https://github.com/NousResearch/hermes-agent/issues/85125) | Tracking: unified deadline layer — architectural fix for timeout/hang backlog (4 fases) | **5** | Agent / Arch | Rastreamento de esforço arquitetural para eliminar classes recorrentes de timeout/hang. Backlog de 400+ issues. Usuário interno propõe solução em 4 fases. |

**Análise:** A comunidade está particularmente atenta a:
1. **Estabilidade do Desktop Windows** — duas issues P1 abertas no mesmo dia (#86223, #86079) com cadeias de lock e update failures
2. **Compatibilidade de plataforma** — Termux, Android e Windows aparecem consistentemente como fontes de regressões
3. **Dívida arquitetural em timeouts** — #85125 busca solução estrutural para problema crônico, sinalizando maturidade da comunidade em propor mudanças de fundo

---

## 5. Bugs e Estabilidade

### 🔴 P1 — Críticos (afetam produção / perda de funcionalidade)

| # | Título | Plataforma | Tags de Risco |
|---|--------|------------|---------------|
| [#86223](https://github.com/NousResearch/hermes-agent/issues/86223) | Desktop client broken after last 2 updates on Windows — backend exits (1), WinError 32 lock chain | Windows | message-delivery, compatibility, platform-windows |
| [#86287](https://github.com/NousResearch/hermes-agent/issues/86287) | Desktop backend orphan-reap kills independently-managed gateway on Windows | Windows | message-delivery, compatibility, platform-windows |
| [#86079](https://github.com/NousResearch/hermes-agent/issues/86079) | Desktop updater wipes packaged app (Hermes.exe) and never relaunches after repo hand-off | Windows | compatibility, platform-windows |
| [#53479](https://github.com/NousResearch/hermes-agent/issues/53479) | CLI updater trusts rev-list counts for shallow/diverged installs | CLI | compatibility |
| [#85756](https://github.com/NousResearch/hermes-agent/issues/85756) | session_search hides ALL hits from current session's own lineage (gateway recall goes blind) | Gateway | session-state, sessions |

### 🟠 P2 — Graves (funcionalidade comprometida, workarounds existem)

| # | Título | Área |
|---|--------|------|
| [#83680](https://github.com/NousResearch/hermes-agent/issues/83680) | cryptography 50.0.0 Rust extension cannot resolve PyLong_Type on Termux | CLI / Install |
| [#84969](https://github.com/NousResearch/hermes-agent/issues/84969) | Persistent Docker reuse ignores immutable config drift | Docker / Terminal |
| [#85777](https://github.com/NousResearch/hermes-agent/issues/85777) | Local profile switch reuses default socket after update | Desktop |
| [#86093](https://github.com/NousResearch/hermes-agent/issues/86093) | hermes update always fails on Windows (live hermes.exe cannot be renamed) | CLI / Windows |
| [#84027](https://github.com/NousResearch/hermes-agent/issues/84027) | code_execution_tool and file_tools drop docker_extra_args / docker_forward_env | Docker / Tools |
| [#85693](https://github.com/NousResearch/hermes-agent/issues/85693) | computer_use tool not exposed in Hermes Desktop sessions | Desktop |

### 🟡 P3 — Moderados (impacto localizado)

| # | Título | Área |
|---|--------|------|
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | Skills index stale (degraded) — 29.8h old | Skills Hub |
| [#85272](https://github.com/NousResearch/hermes-agent/issues/85272) | Telegram adapter fails on python-telegram-bot 22.8 — regression from 22.6→22.8 | Gateway / Telegram |
| [#76906](https://github.com/NousResearch/hermes-agent/issues/76906) | prompt_builder ignores terminal.docker_network | Docker / Agent |
| [#82812](https://github.com/NousResearch/hermes-agent/issues/82812) | skill_view fails on unquoted YAML date in skill front matter | Skills |

**Padrão identificado:** O cluster de bugs P1 em Windows/Desktop é recente e concentrado (todos criados em 2026-08-14), sinalizando que a release v0.20.1 pode não ter coberto completamente as regressões do desktop. A comunidade reporta dois updater breakages consecutivos em 10 dias, sugerindo fragilidade no pipeline de update do desktop.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features novas propostas

| # | Título | Área | Status | Sinal |
|---|--------|------|--------|-------|
| [#85125](https://github.com/NousResearch/hermes-agent/issues/85125) | Unified deadline layer — architectural fix for timeout/hang backlog (4 fases) | Agent / Arch | Needs decision | **Alto** — tenta resolver estruturalmente 400+ issues de timeout/hang. Proposta interna com design de 4 fases. |
| [#67765](https://github.com/NousResearch/hermes-agent/issues/67765) | Show running session cost in desktop status bar | Desktop / Billing | Needs decision | **Médio** — extensão direta do modelo de monetização; requer consenso sobre UX de exibição de custo |
| [#47858](https://github.com/NousResearch/hermes-agent/issues/47858) | Gateway: delayed cleanup for Telegram/meta progress messages | Gateway / Telegram | Open | **Médio** — qualidade de vida para longas sessões em plataformas de mensageria |
| [#4882](https://github.com/NousResearch/hermes-agent/issues/4882) | Auto-delete tool progress messages after completion | Gateway | Open | **Médio** — continuidade do tema de cleanup de meta-mensagens |
| [#86321](https://github.com/NousResearch/hermes-agent/issues/86321) / [#86324](https://github.com/NousResearch/hermes-agent/pull/86324) | Discord typed outbound embed builder (omniscience M4) | Discord | PR aberto | **Em progresso** — fase 2A da campaign Omniscience; novo módulo `tools/discord_api/embeds.py` |
| [#75861](https://github.com/NousResearch/hermes-agent/pull/75861) | Add LLMExecutionBlocked block signal for llm_execution middleware | Agent / Plugins | Open | **Médio** — extensibilidade de middleware para controle de execução LLM |
| [#86298](https://github.com/NousResearch/hermes-agent/pull/86298) | transform_message_store / transform_message_load plugin hooks | State / Plugins | PR aberto | **Médio** — abre plugin ecosystem para interceptação de mensagens no SQLite |

**Sinais de roadmap:**
- O track de **timeout/hang** (#85125) é a iniciativa arquitetural mais ambiciosa listada — se implementada, reduzirá drasticamente a base de issues
- **Campaign Omniscience** para Discord segue em ritmo constante (M4 em PR)
- **Plugins hooks** (state transforms, a2a headers) indicam abertura para extensibilidade third-party
- **Sessão custo em tempo real** (#67765) sugere que a dimensão billing/custo está gaining traction como feature de produto

---

## 7. Resumo de Feedback dos Usuários

### Dores reais mapeadas nas issues

| Dor | Frequência | Issues |
|-----|:----------:|--------|
| **Desktop Windows quebrado após updates** | 🔴 Alta | #86223, #86079, #86287 |
| **Upater CLI impreciso (contagem fake de commits)** | 🟠 Média-alta | #53479, #86093, PR #86318 (já corrigido em PR) |
| **Regressões em plataformas mobile/Termux** | 🟠 Média | #83680 |
| **Telegram gateway quebrado após v0.20.0** | 🟡 Média | #85272 |
| **Memory provider "additive" na docs mas replace na prática** | 🟡 Média | #85622 |
| **Skills index desatualizado / stale** | 🟡 Média | #66616 |
| **Docker config drift ignorado em reuse** | 🟡 Média | #84969 |

### Cenários de uso emergentes
- **Uso em Termux/Android** como plataforma de desenvolvimento/edição lightweight — usuário reportando regressão de cryptography bloqueia workflow
- **Desktop como UI principal** — bugs de updater e socket profile isolam usuários Windows que dependem do app como interface primária
- **Gateways remotos com OAuth** — fluxo de autenticação remote-gateway melhorado (#61486 closed), mas bounces ainda ocorrem para auth básico
- **Integração Telegram como canal principal** — regression na conexão após pin bump de python-telegram-bot evidencia falta de CI pinning de dependência

### Satisfação / Insatisfação
- **Insatisfação concentrada:** Plataforma Windows apresenta bugs recorrentes no ciclo de update (2 falhas consecutivas em 10 dias) — usuários experimentam perda de funcionalidade produtiva
- **Satisfação parcial:** A velocidade de consolidação de PRs (~656 em ~2 semanas) demonstra capacidade de resposta da equipe, mas regressões indicam necessidade de mais cobertura de testes em plataformas não-Linux
- **NPS implícito:** Issues com 30 comentários (#

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório de Projeto: PicoClaw
## Data: 15 de agosto de 2026 | github.com/sipeed/picoclaw

---

## 1. Panorama do Dia

O projeto PicoClaw apresenta **alta atividade comunitária** em 15/08/2026, com 11 itens atualizados nas últimas 24h (3 issues + 8 PRs). Não houve lançamentos oficiais, mas o fluxo de contribuições permanece robusto com 5 PRs mesclados/fechados e 3 aberturas, demonstrando maturidade no processo de revisão de código. A codebase mostra evolução consistente em estabilidade (correção de vazamentos de goroutines), suporte a provedores (DashScope TTS, WeChat) e qualidade de ferramentas. O único issue aberto significativo é um bug crítico de hang no loop do agente quando servidores MCP falham — já com PR corretivo em andamento.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto não publicou novas versões desde o período analisado. O último nightly build mencionado pelo usuário no issue #3269 refere-se ao commit `2cf030d2`. Para追踪 mudanças recentes, recomenda-se consultar o histórico de tags em https://github.com/sipeed/picoclaw/releases.

---

## 3. Progresso do Projeto

### PRs Merged/Fechadas (5 total)

| # | PR | Autor | Impacto |
|---|-----|-------|---------|
| #3303 | **build(deps): bump actions/stale from 10 to 11** | dependabot | Atualização de dependência CI/CD, mantendo pipelines atualizadas |
| #3283 | **fix(dingtalk): support picture/image message inbound** | MrTreasure | Suporte a mensagens de imagem no canal DingTalk com degradação graceful |
| #3279 | **fix(seahorse): prevent tool-call format leakage** | MrTreasure | Corrige vazamento de formatação de tool-calls em resumos LLM, melhorando qualidade de respostas |
| #3271 | **chore(providers): update default model names to 2026-07** | LeaderOnePro | Atualização de 9 provedores com modelos verificados oficialmente (GPT-5.6, Claude 4, etc.) |
| #3270 | **feat: add DashScope TTS provider + WeChat audio** | MrTreasure | Adiciona síntese de voz Alibaba Cloud e envio de áudio WeChat |

### Destaque: Correções de Estabilidade

As PRs #3279 e #3283 demonstram foco em **edge cases** que afetam a experiência do usuário final:
- Prevenção de vazamento de tool-calls em resumos de的海马 (Seahorse) 
- Suporte a mídia em canais secundários (DingTalk)

---

## 4. Temas Quentes da Comunidade

### Issue com Maior Engajamento

**#3269 — [BUG] MCP server failure hangs agent loop** 🟠 Crítica
- **Autor:** ruiyigen | **Comentários:** 5 | **Reações:** 👍 1
- **Link:** https://github.com/sipeed/picoclaw/issues/3269
- **Resumo:** Conexão falha com servidor MCP causa hang no loop do agente, fazendo a interface de chat parar de responder
- **Severidade:** Alta — impacto direto na disponibilidade do assistente
- **Status:** Aberta, com **PR #3337** em andamento como correção

### Análise de Demandas

| Categoria | Issue | Tendência |
|-----------|-------|-----------|
| Estabilidade | #3269 (MCP hang) | Crítica, requer atenção imediata |
| Concurrency | #3308 (code review) | Resolvida — destaca maturidade em Go (goroutine leaks) |
| UX Multi-canal | #3307 (session management Telegram) | Necessidade de paridade Web ↔ Telegram |

A issue **#3307** evidencia um **pattern recorrente**: funcionalidades completas na Web UI que não existem em canais como Telegram. Isso sugere um backlog de **paridade de experiência** entre plataformas.

---

## 5. Bugs e Estabilidade

### Bug Ativo (Severidade: Alta)

**#3269 — Agent loop hang em falhas MCP**
```
Sintoma: ensureMCPInitialized retorna erro → AgentLoop.Run propaga → interface para de responder
Severidade: Alta
Workaround: Reiniciar o serviço
Fix: PR #3337 em andamento
```

### Bugs Fechados Recently

| # | Bug | Resolução |
|---|-----|-----------|
| #3308 | Concurrency hazards, goroutine leaks, memory/speed | Code review concluído (marcado stale) |
| #3279 | Tool-call format vaza em resumos Seahorse | Corrigido via merge |
| #3283 | Canal DingTalk não recebia imagens | Corrigido via merge |

### Métricas de Estabilidade
- **Vazamentos de recursos:** Endereçados via code review #3308
- **Timeouts de ferramentas:** PR #3319 em aberto corrige honra de timeout e booleanos
- **Gestão de sessões:** Gap identificado em Telegram (issue #3307)

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Abertas

| # | Feature | Autor | Status | Potencial Impact |
|---|---------|-------|--------|------------------|
| #3307 | Session list/switch para Telegram | iamtoricool | Aberta | Alta — paridade com Web UI |
| #3200 | Configurable default fallback chain | lc6464 | Aberta | Média — resiliência de modelos |

### PRs de Features em Revisão

| # | Feature | Autor | Prioridade |
|---|---------|-------|------------|
| #3337 | Fix MCP hang (previne crash) | kuzmichus | **Crítica** |
| #3319 | Honor exec timeout + boolean options | MrTreasure | Média |

### Tendências de Roadmap Identificadas

1. **Resiliência de conectores MCP** — múltiplas Issues/PRs indicam foco em robustez
2. **Paridade entre canais** — Telegram precisa de session management (equivalente Web)
3. **Qualidade de ferramentas** — timeouts, booleanos e formatação de saída
4. **Expansão de provedores** — TTS (DashScope), messaging (WeChat, DingTalk)

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Dor | Issue | Severidade | Evidência |
|-----|-------|------------|-----------|
| Chat para de responder | #3269 | 🔴 Crítica | "Picoclaw chat interface stops replying to users" |
| Sem gestão de sessões no Telegram | #3307 | 🟡 Média | "Users on Telegram cannot list/switch/delete sessions" |
| Modelos desatualizados na lista | #3271 | 🟢 Baixa | Necessidade de atualização para GPT-5.6, Claude 4, etc. |

### Cenários de Uso Identificados

1. **Assistentes em hardware limitado** — PicoClaw executa em $10 hardware com <10MB RAM (issue #3308)
2. **Integração corporativa** — DingTalk, WeChat, Telegram como canais
3. **Fluxos de agentes complexos** — Seahorse, MCP tools, hooks

### Satisfação/Insatisfação

- **Positivo:** Capacidade de rodar em hardware embarcado, boot sub-second
- **Negativo:** Falhas de conexão causam indisponibilidade total; ausência de features parity

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta/Ação Prolongada

| # | Título | Criado | Status | Ação Recomendada |
|---|--------|--------|--------|------------------|
| **#3307** | Session list/switch Telegram | 2026-07-30 | Aberta | Priorizar — feature parity request |
| **#3200** | Configurable fallback chain | 2026-07-01 | Aberta | Avaliar para vNext — resiliência |
| **#3269** | MCP hang bug | 2026-07-20 | Aberta | **URGENTE** — PR #3337 em andamento |

### PRs Abertas Pendentes de Revisão

| # | Título | Criado | Prioridade |
|---|--------|--------|------------|
| **#3337** | Fix MCP failure hangs agent | 2026-08-14 | 🔴 Crítica |
| **#3319** | Honor exec timeout + booleans | 2026-08-07 | 🟡 Média |
| **#3200** | Configurable fallback chain | 2026-07-01 | 🟢 Baixa |

### Recomendações

1. **Imediato:** Revisar e merge do PR #3337 para mitigar hang crítico
2. **Curto prazo:** Avaliar issue #3307 — demanda clara de paridade Telegram/Web
3. **Médio prazo:** Implementar fallback chain (#3200) para resiliência de provedores

---

## Métricas Consolidada do Período

| Métrica | Valor |
|---------|-------|
| Issues abertas/ativas | 1 |
| Issues fechadas | 2 |
| PRs abertas | 3 |
| PRs mescladas/fechadas | 5 |
| Releases | 0 |
| Bug reports críticos | 1 (em correção) |
| Features requests abertas | 1 |

**Saúde Geral:** 🟡 **Estável com incidentes** — Bug crítico identificado e em vias de correção. Atividade comunitária saudável com 11 contribuições em 24h.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório de Projeto: IronClaw — 2026-08-15

---

## 1. Panorama do Dia

O projeto IronClaw demonstra **alta atividade** nas últimas 24 horas, com 47 issues e 50 PRs atualizados. O lançamento da versão **1.2.0** (2026-08-13) foi consolidado com merge da release line em main ([PR #7657](https://github.com/nearai/ironclaw/pull/7657)), marcando um marco importante para a estabilidade. A equipe mantém foco intenso na arquitetura de **agent loops plugáveis** (Epic #7482), com pelo menos 17 sub-issues criados ou fechados nos últimos dias, sinalizando uma reestruturação significativa do runtime. Simultaneamente, há uma fila ativa de bugs QA em integrações críticas (Telegram, Slack), além de avanços em automações e memória plugável. A saúde geral do projeto permanece robusta, com contributions diversificadas entre features, fixes e documentação.

---

## 2. Lançamentos

### ironclaw-v1.2.0 (2026-08-13)

**Mudanças incluídas:**
- Promoção estável da release candidate 1.2.0-rc.3, consolidando fixes validados em RC2 e RC3
- **Fix crítico:** A imagem do container runtime agora instala `curl`, permitindo healthchecks HTTP em-container ([PR #7657](https://github.com/nearai/ironclaw/pull/7657))
- Forward-port de correções de versão 1.2 para main sem migrations legadas ([PR #7663](https://github.com/nearai/ironclaw/pull/7663))

**Breaking Changes:** Nenhuma identificada nesta release.

**Notas de migração:** A release forward-porta migrations de estado 1.0/1.1 → 1.2 com preservação de backward compatibility. Usuários em versões anteriores devem seguir o processo de upgrade documentado.

**Artefatos:**
- Tag: `ironclaw-v1.2.0`
- Commit de merge: included in [PR #7657](https://github.com/nearai/ironclaw/pull/7657)

---

## 3. Progresso do Projeto

### PRs Merged/Closed Hoje

| PR | Título | Tamanho | Impacto |
|----|--------|---------|---------|
| [#7657](https://github.com/nearai/ironclaw/pull/7657) | Merge 1.2.0 release line into main | XL | Consolidação da release estável |
| [#7658](https://github.com/nearai/ironclaw/pull/7658) | fix(telegram): reconhece 2FA gate em DCs migrados | M | Correção de linking em Telegram |
| [#7666](https://github.com/nearai/ironclaw/pull/7666) | fix(extensions): verdade em cards e resultados de install | L | Correção de UX em extensões |
| [#7655](https://github.com/nearai/ironclaw/pull/7655) | fix(ci): re-pin coverage floors para realidade | XS | Manutenção de regressão |
| [#7569](https://github.com/nearai/ironclaw/issues/7569) | Introduce shared SearchField | - | Componente reutilizável |

### PRs Abertos de Alto Impacto

- **[#7648](https://github.com/nearai/ironclaw/pull/7648)** `feat(runtime): add ACP harness executor` (XL, medium risk) — Implementa router neutral para `TurnRunExecutor`, preparando infraestrutura para agent loops plugáveis
- **[#7634](https://github.com/nearai/ironclaw/pull/7634)** `feat(unbound-turns): complete switchover to prepared-context turns` (XL, low risk) — Auditoria de 71 cláusulas de conformance para o modelo de turns não-bound
- **[#7661](https://github.com/nearai/ironclaw/pull/7661)** `feat(memory): MCP-backed memory provider` (XL, medium risk) — Primeira metade da memória plugável via configuração
- **[#7650](https://github.com/nearai/ironclaw/pull/7650)** `feat(automations): persist semantic execution outcomes` (XL, low risk) — Substitui reconciler oculto por settlement event explícito
- **[#7651](https://github.com/nearai/ironclaw/pull/7651)** `feat(automations): deterministic no-result suppression` (XL, low risk) — Exige escolha explícita entre `deliver` ou `suppress_when_nothing_to_report`

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

**[#7482](https://github.com/nearai/ironclaw/issues/7482) — Epic: Pluggable Agent Loops** ⭐ 6 comentários
- **Demanda:** Transformar IronClaw em "kernel" — separando scheduling, tenancy, capability membrane, secrets mediation e egress boundary do agent loop e tool code
- **Arquitetura proposta:** Loops como "off-the-shelf harnesses" (Claude Code, Pi, Codex), com ACP executor como implementação nativa
- **Escopo:** 7 binding decisions documentadas, 6 workspaces planejados
- **Riscos:** High (scope: agent, scope: tool) — representa reestruturação fundamental

**[#6879](https://github.com/nearai/ironclaw/issues/6879) — Automation runs hit-or-miss** ⭐ 1 comentário
- **Demanda:** Automation unattended executa como chat interativo em vez de automação confiável
- **Causa identificada:** Trigger fire executado como turn de chat, não como automação
- **Impacto:** Afeta runs unattended especialmente em modelos pequenos (DeepSeek V4 Flash)

### Issues Recentes de Destaque

| Issue | Tema | Comentários | Complexidade |
|-------|------|-------------|--------------|
| [#7667](https://github.com/nearai/ironclaw/issues/7667) | Telegram phone-mode login code hint | 0 | Bug QA |
| [#7660](https://github.com/nearai/ironclaw/issues/7660) | Slack "Reconnect" mesmo com conexão ativa | 0 | Bug QA P2 |
| [#7664](https://github.com/nearai/ironclaw/issues/7664) | Pluggable memory over MCP + Mnesis | 0 | Feature |
| [#7662](https://github.com/nearai/ironclaw/issues/7662) | MP4 attachment fails no Telegram | 0 | Bug QA P2 |
| [#7659](https://github.com/nearai/ironclaw/issues/7659) | Extensões de outros usuários visíveis | 0 | Bug QA P2 |
| [#7656](https://github.com/nearai/ironclaw/issues/7656) | Slack-to-Console bridge | 0 | Feature |

---

## 5. Bugs e Estabilidade

### Bugs P2 (QA — Impacto Moderado)

| Issue | Descrição | Severidade | Status | Link |
|-------|-----------|------------|--------|------|
| #7660 | Slack mostra "Reconnect"/"Finish Setup" apesar de conexão ativa | P2 | OPEN | [Issue](https://github.com/nearai/ironclaw/issues/7660) |
| #7662 | MP4 attachment falha com `invalid_value (attachments.mime_type)` no Telegram | P2 | OPEN | [Issue](https://github.com/nearai/ironclaw/issues/7662) |
| #7659 | Extensões instaladas por outros usuários visíveis na página | P2 | OPEN | [Issue](https://github.com/nearai/ironclaw/issues/7659) |

### Bugs P3/P4 (Menor Severidade)

| Issue | Descrição | Severidade | Status | Link |
|-------|-----------|------------|--------|------|
| #7667 | Telegram phone-mode: código de login não chega ao usuário (2FA gate em DCs migrados) | P3 | OPEN | [Issue](https://github.com/nearai/ironclaw/issues/7667) |

### Correções Recentes de Estabilidade

- **[#7658](https://github.com/nearai/ironclaw/pull/7658)** — Telegram 2FA: reconhece gate em DCs migrados e informa usuário sobre chegada do código
- **[#7666](https://github.com/nearai/ironclaw/pull/7666)** — Extensões: informa verdade em cards e resultados de install
- **[#7655](https://github.com/nearai/ironclaw/pull/7655)** — CI: re-pin de coverage floors para números observados em main

**Tendencia:** Bugs concentrados em integrações (Telegram, Slack) indicam necessidade de coverage mais robusto nestas áreas.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em Desenvolvimento Ativo

**Epic #7482 — Pluggable Agent Loops** (Roadmap v1.3+)
- 17 sub-issues criados em 2026-08-13, abrangendo:
  - WS1: Egress edge com iron-proxy
  - WS3: Harness adapters (Claude Code, Pi, Codex)
  - WS4: Capability socket e ic CLI
  - WS5: Workspace mounts e GC
  - WS6: Profile routing e conformance suite
- **Sinais de roadmap:** Model passthrough via egress proxy, sandbox autenticado, policy records para integrações

**Pluggable Memory ([#7664](https://github.com/nearai/ironclaw/issues/7664), [#7661](https://github.com/nearai/ironclaw/pull/7661))**
- Mnesis como primeiro consumer via MCP provider
- Configuração por arquivo ao invés de factory arm compilado
- Draft PR [#7661](https://github.com/nearai/ironclaw/pull/7661) em revisão

**Structured Ask User Cards ([#7653](https://github.com/nearai/ironclaw/issues/7653))**
- Implementação de cards `OMP-inspired` para WebUI
- Baseado em `LoopCompletionKind::AskUserReply` existente

**Slack-to-Console Bridge ([#7656](https://github.com/nearai/ironclaw/issues/7656))**
- Deep links e metadata de run em respostas Slack
- Inspirado em feature do Centaur

### Sinais de Direção

| Área | Signal | Evidência |
|------|--------|-----------|
| Executor flexibility | Alto | Epic #7482, PR #7648 |
| Memory pluggability | Médio-alto | Issues #7664, PR #7661 |
| Automation determinism | Médio | PRs #7650, #7651 |
| Docs as truth | Médio | PRs #7378, #7379, #7255 |
| Release cadence | Estável | 1.2.0 release + hotfix forward-port |

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

1. **Automations não confiáveis** ([#6879](https://github.com/nearai/ironclaw/issues/6879))
   - Usuários reportam que unattended runs falham ou executam como chat interativo
   - Impacto: quebra de expectativa em cenários de automação

2. **UX de Integrações Confusa**
   - Slack mostra estados incorretos mesmo com conexão funcional ([#7660](https://github.com/nearai/ironclaw/issues/7660))
   - Extensões aparecem como instaladas quando não são ([#7659](https://github.com/nearai/ironclaw/issues/7659))

3. **Telegram 2FA Problemático**
   - Código de login não chega ao usuário em phone-mode com 2FA habilitado ([#7667](https://github.com/nearai/ironclaw/issues/7667))
   - Upload de MP4 falha mesmo com mime type correto ([#7662](https://github.com/nearai/ironclaw/issues/7662))

### Cenários de Uso Observados

- **Phone-mode linking** em Telegram com contas já logadas em outros devices
- **Unattended automation** em produção com modelos pequenos (DeepSeek V4 Flash)
- **Extensão multi-usuário** em instâncias Railway compartilhadas

### Satisfação

- Release 1.2.0 bem recepcionada com fix de `curl` para healthchecks
- Atividade de PRs indica developers satisfeitos com arquitetura em evolução
- Doc-truth initiative (#7317) responde a demanda por documentação precisa

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta / Abandonadas

| Issue | Título | Criado | Status | Prioridade |
|-------|--------|--------|--------|------------|
| [#6879](https://github.com/nearai/ironclaw/issues/6879) | Automation runs hit-or-miss | 2026-07-29 | OPEN | Epic v1.3.0 |
| [#7255](https://github.com/nearai/ironclaw/pull/7255) | APDD governance kit evaluation | 2026-08-05 | OPEN | Docs |
| [#7378](https://github.com/nearai/ironclaw/pull/7378) | Doc-fact contract tests | 2026-08-07 | OPEN | Doc-truth |
| [#7379](https://github.com/nearai/ironclaw/pull/7379) | Deploy docs from docs-live branch | 2026-08-07 | OPEN | Doc-truth |
| [#7456](https://github.com/nearai/ironclaw/pull/7456) | Make durable storage profile-agnostic | 2026-08-10 | OPEN | Core |

### Items Críticos para Atenção

1. **[#6879](https://github.com/nearai/ironclaw/issues/6879)** — Automation runs hit-or-miss
   - **Razão:** Issue aberta há 17 dias sem resolução, afeta caso de uso principal
   - **Próximo passo:** Need triagem e assignment

2. **Epic #7482 tracking**
   - 17 sub-issues criados, alguns sem assignees óbvios
   - **Próximo passo:** Priorizar WS3-WS6 para v1.3

3. **Memory pluggability ([#7664](https://github.com/nearai/ironclaw/issues/7664), [#7661](https://github.com/nearai/ironclaw/pull/7661))**
   - Draft PR aguardando review
   - **Próximo passo:** Code review e feedback

---

## Métricas Resumidas

| Métrica | Valor (24h) | Tendência |
|---------|-------------|-----------|
| Issues ativas | 23 open / 24 closed | Neutra |
| PRs abertos | 28 | Estável |
| PRs merged/closed | 22 | Estável |
| Releases | 1 (1.2.0) | Positiva |
| Bugs P2 abertos | 3 | Atenção |
| Features XL em progresso | 7+ | Alta atividade |

---

*Relatório gerado em 2026-08-15 com base em dados do GitHub do projeto [nearai/ironclaw](https://github.com/nearai/ironclaw).*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do Projeto CoPaw — 2026-08-15

## 1. Panorama do Dia

O projeto CoPaw demonstra **alta atividade comunitária** em 15/08/2026, com 50 issues e 41 PRs atualizados nas últimas 24h. A equipe mantém um fluxo intenso de resolução de bugs e features, com 38 issues fechadas e 15 PRs merged/fechados. Merece destaque a concentração de PRs do contributor **Ferrum360** relacionados ao sistema de skills e sincronização de títulos, sugerindo foco prioritário在这些功能上。Nenhum release foi publicado hoje, indicando que a base de código está em fase de estabilização antes de um próximo tagged version.

---

## 2. Lançamentos

**Nenhum release publicado nas últimas 24 horas.**

O projeto encontra-se em período pré-release, com intensas atividades de code review e merge. Recomenda-se monitorar o repositório para anuncios de nova versão.

---

## 3. Progresso do Projeto

### PRs Importantes Merged/Fechados

| PR | Título | Impacto | Link |
|----|--------|---------|------|
| #7031 | feat(skill-system): dynamic skill loading + auto-unload + frontmatter fix | Sistema de lifecycle dinâmico de skills com auto-unload após 5 rodadas de inatividade | [PR #7031](https://github.com/agentscope-ai/QwenPaw/pull/7031) |
| #7030 | feat(auto-title-sync): auto-memory linked chat title refresh | Sincronização automática de títulos de chat com entries de memória | [PR #7030](https://github.com/agentscope-ai/QwenPaw/pull/7030) |
| #7029 | feat(skill-system): 动态技能加载+自动卸载+frontmatter修复 (versão CN) | Tradução/adaptação do PR #7031 para audiencia chinesa | [PR #7029](https://github.com/agentscope-ai/QwenPaw/pull/7029) |
| #7028 | feat(auto-title-sync): 会话标题auto-memory联动刷新 (versão CN) | Versão chinesa do PR #7030 | [PR #7028](https://github.com/agentscope-ai/QwenPaw/pull/7028) |
| #6969 | fix: avoid duplicate tool result when MCP returns structuredContent | Corrige duplicação de dados em Tool Result com FastMCP | [PR #6969](https://github.com/agentscope-ai/QwenPaw/pull/6969) |
| #6943 | feat(channels): support interactive configurators for plugin channels | Suporte a configuradores interativos para canais via plugins | [PR #6943](https://github.com/agentscope-ai/QwenPaw/pull/6943) |
| #2105 | docs: add whisper installation instructions | Documentação de instalação com suporte Whisper (`--extras whisper`) | [PR #2105](https://github.com/agentscope-ai/QwenPaw/pull/2105) |
| #6715 | feat(onebot): localize inbound media before agent processing | Normalização de midia inbound para pipeline AgentScope 2.0 | [PR #6715](https://github.com/agentscope-ai/QwenPaw/pull/6715) |

**Avanços-chave identificados:**
- Infraestrutura de skills agora suporta **carregamento dinâmico e auto-unload**, resolvendo issues crônicas de gerenciamento de skills
- **Títulos de chat** agora atualizam automaticamente via auto-memory, melhorando navegabilidade do histórico
- Correção de bug crítico em **Tool Results** com MCP devolvendo structuredContent

---

## 4. Temas Quentes da Comunidade

### Issues/PRs com Maior Engajamento

| # | Tipo | Título | Comentários | Link |
|---|------|--------|-------------|------|
| #3045 | Bug | 自动获取模型为什么不可用 | 8 | [Issue #3045](https://github.com/agentscope-ai/QwenPaw/issues/3045) |
| #2418 | Question | 能否在新增skills-hub管理页面 | 7 | [Issue #2418](https://github.com/agentscope-ai/QwenPaw/issues/2418) |
| #2846 | Feature | 桌面端增加自动更新功能 | 6 | [Issue #2846](https://github.com/agentscope-ai/QwenPaw/issues/2846) |
| #2303 | Bug | MiniMax provider check_connection() 404 | 6 | [Issue #2303](https://github.com/agentscope-ai/QwenPaw/issues/2303) |
| #7010 | Question | qwenpaw app缺乏daemon后台模式 | 6 | [Issue #7010](https://github.com/agentscope-ai/QwenPaw/issues/7010) |
| #6405 | Question | mcp工具Tool notfound após upgrade 2.0 | 6 | [Issue #6405](https://github.com/agentscope-ai/QwenPaw/issues/6405) |
| #7011 | Bug | Console stop cancel active Feishu session | 5 | [Issue #7011](https://github.com/agentscope-ai/QwenPaw/issues/7011) |

### Análise dos Demandas

1. **Gestão de Skills e Hub** (#2418, #2846): Usuários solicitam interface gráfica para download e gerenciamento de skills的主流方法。Combinado com PR #7031, este é um **tema prioritário**.

2. **Provider Compatibility** (#2303, #3002): Problemas recorrentes com APIs incompatíveis (MiniMax, OpenAI Responses). A issue #944 solicita suporte nativo ao Responses API.

3. **Desktop Experience** (#2846, #3464): Múltiplas solicitações para auto-update no Windows e correção de ícone na taskbar. Alto impacto na experiência desktop.

4. **Daemon/Background Mode** (#7010): block issues quando executado via SSH ou scripts, indicando necessidade de suporte a detached processes.

---

## 5. Bugs e Estabilidade

### Bugs Abertos (Prioridade)

| Severidade | # | Título | Descrição | Link |
|-------------|---|--------|-----------|------|
| **Alta** | #7011 | Console stop cancela sessão Feishu ativa | Problema de cross-session identity causando cancelamento indevido de conversas em ambientes multi-UI | [Issue #7011](https://github.com/agentscope-ai/QwenPaw/issues/7011) |
| **Alta** | #7016 | Ferramenta调用404 em sessão流式 | API `/api/tool-calls/{id}/offload` retorna 404 durante streaming sessions | [Issue #7016](https://github.com/agentscope-ai/QwenPaw/issues/7016) |
| **Alta** | #6612 | Incompatibilidade QwenPaw 2.0.1 com agentscope 2.0.4.post1 | Crashes proativos e deadlock de permissão de ferramentas | [Issue #6612](https://github.com/agentscope-ai/QwenPaw/issues/6612) |
| **Média** | #6958 | MCP tool result写两份重复数据 | Duplicação ao truncar resultados que excedem threshold | [Issue #6958](https://github.com/agentscope-ai/QwenPaw/issues/6958) |
| **Média** | #6951 | Scroll压缩后聊天记录不可见 | Mensagens pré-compressão não exibidas após reentrar na sessão | [Issue #6951](https://github.com/agentscope-ai/QwenPaw/issues/6951) |
| **Média** | #4832 | Shell command causa cmd.exe flash no Windows | Falta flag CREATE_NO_WINDOW no subprocess | [Issue #4832](https://github.com/agentscope-ai/QwenPaw/issues/4832) |

### Bugs Recentemente Fechados

- **#6972**: Chrome扩展WebSocket断开 (3 comentários)
- **#6197**: QwenPaw Desktop hang quando nvidia-smi hang
- **#4731**: Browser启动失败 - Edge exit code 21

**Nota**: O PR #6969 já implementa correção para #6958 (MCP duplicate tool result).

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Abertas com Maior Potencial

| # | Título | Uso | Link |
|---|--------|-----|------|
| #4001 | 支持在对话中手动删除单条消息 | Usuários querem deletar mensagens individuais como no WeChat | [Issue #4001](https://github.com/agentscope-ai/QwenPaw/issues/4001) |
| #4436 | 支持将部分对话转移至新会话（会话拆分） | Dividir conversas longas para economia de tokens | [Issue #4436](https://github.com/agentscope-ai/QwenPaw/issues/4436) |
| #5551 | Does QwenPaw plan to support computer use? | Interesse em capacidades de computer use | [Issue #5551](https://github.com/agentscope-ai/QwenPaw/issues/5551) |
| #2763 | /models - 查看所有可用模型, /model切换模型 | Comandos slash para gerenciamento de modelos | [Issue #2763](https://github.com/agentscope-ai/QwenPaw/issues/2763) |

### PRs de Features Em Progresso

| PR | Título | Escopo | Link |
|----|--------|--------|------|
| #7033 | feat(skill-system): dynamic skill loading + auto-unload + frontmatter fix | Infraestrutura de skills dinâmicos | [PR #7033](https://github.com/agentscope-ai/QwenPaw/pull/7033) |
| #7032 | feat(auto-title-sync): auto-memory linked chat title refresh | Sincronização de títulos via auto-memory | [PR #7032](https://github.com/agentscope-ai/QwenPaw/pull/7032) |
| #5992 | Add per-session model overrides | Override de modelo por sessão | [PR #5992](https://github.com/agentscope-ai/QwenPaw/pull/5992) |
| #6302 | unify provider discovery, model metadata, routing | Sistema unificado de providers e modelos | [PR #6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) |
| #7037 | feat(computer-use): observe related window surfaces | Observação de janelas relacionadas em computer use | [PR #7037](https://github.com/agentscope-ai/QwenPaw/pull/7037) |
| #7035 | feat(console): organize subagent conversations into groups | Agrupamento de subagentes no console | [PR #7035](https://github.com/agentscope-ai/QwenPaw/pull/7035) |

**Sinais de Roadmap**:
- **Computer Use** está em desenvolvimento ativo (PR #7037)
- **Sistema de modelos unificado** em construção (PR #6302)
- **Skills dinâmicos** como prioridade técnica (PRs #7031/#7033)

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Categoria | Descrição | Frequência |
|-----------|-----------|------------|
| **Desktop/Windows** | Experiência desktop fragmentada: falta auto-update, ícone errado na taskbar, cmd.exe flash | Alta |
| **Daemon/Background** | qwenpaw app só funciona em foreground, problemático para SSH/scripts | Alta |
| **Model Providers** | Incompatibilidades com APIs (MiniMax 404, OpenAI Responses) causam falha de conexão | Alta |
| **MCP Integration** | Tool notfound após upgrade, duplicação de dados em resultados | Média |
| **Chat Management** | Ausência de delete por mensagem, impossibilidade de split/split de conversas | Média |
| **Plugin Conflicts** | Creator plugin causa失效 de outros plugins | Baixa (1 report) |

### Cenários de Uso em Evidência

1. **Usuários Windows Desktop**: Solicitam experiência similar a apps nativos (auto-update, ícones corretos, background execution)
2. **Usuários Server/SSH**: Precisam de modo daemon para deployment headless
3. **Desenvolvedores de Plugins**: Incompatibilidades entre plugins e canais causam comportamentos inesperados
4. **Usuários Enterprise**: Integração com Azure OpenAI, DashScope, MiniMax requerem robust fallback

### Indicadores de Satisfação

- **38 issues fechadas em 24h** indica equipe responsiva
- **15 PRs merged** demonstra progresso contínuo
- Issues abertas concentram-se em features (não bugs críticos generalizados)

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Pendentes de Classificação

| # | Título | Idade | Status | Link |
|---|--------|-------|--------|------|
| #4001 | 支持在对话中手动删除单条消息 | ~3 meses | OPEN (4 comments) | [Issue #4001](https://github.com/agentscope-ai/QwenPaw/issues/4001) |
| #4436 | 支持将部分对话转移至新会话（会话拆分） | ~3 meses | OPEN (2 comments) | [Issue #4436](https://github.com/agentscope-ai/QwenPaw/issues/4436) |
| #5551 | Does QwenPaw plan to support computer use? | ~2 meses | CLOSED (3 comments) | [Issue #5551](https://github.com/agentscope-ai/QwenPaw/issues/5551) |
| #2763 | /models - 查看所有可用模型 | ~4 meses | CLOSED (4 comments) | [Issue #2763](https://github.com/agentscope-ai/QwenPaw/issues/2763) |
| #2314 | Support provider-agnostic conversation history | ~5 meses | CLOSED (4 comments) | [Issue #2314](https://github.com/agentscope-ai/QwenPaw/issues/2314) |

### Issues com Labels Ausentes ou需要 Triage

| # | Título | Nota | Link |
|---|--------|------|------|
| #7040 | typo: "Stopp Running" | Bug trivial de tipografia, Closed | [Issue #7040](https://github.com/agentscope-ai/QwenPaw/issues/7040) |
| #6806 | [Windows] Cannot save any model config — "Internal Server Error" | Closed, mas merece verificação se root cause resolved | [Issue #6806](https://github.com/agentscope-ai/QwenPaw/issues/6806) |

### Priorização Recomendada

1. **Alta Prioridade**: #7011 (Feishu session cancellation), #7016 (tool-call 404)
2. **Média Prioridade**: #4001 (delete message), #4436 (session split)
3. **baixa Prioridade**: #5551 (computer use - já em desenvolvimento via #7037)

---

## Métricas Resumidas do Dia

| Métrica | Valor |
|---------|-------|
| Issues abertas/ativas | 12 |
| Issues fechadas | 38 |
| PRs abertos | 26 |
| PRs merged/fechados | 15 |
| Novas releases | 0 |
| Total atividade | 91 items |

**Índice de Resolução**: 76% (38/50 issues fechadas)  
**Razão PR/Issue**: 0.82 (41 PRs para 50 issues)  
**Estado Geral**: Projeto saudável com alta atividade de manutenção e feature development

---

*Relatório gerado automaticamente com base em dados do GitHub de 2026-08-15. Todos os links referenciam github.com/agentscope-ai/QwenPaw.*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório de Projeto — ZeroClaw
**Data de referência:** 2026-08-15  
**Repositório:** [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## 1. Panorama do Dia

O projeto ZeroClaw mantém um ritmo de desenvolvimento intenso, com **33 issues e 50 PRs atualizados nas últimas 24h**, evidenciando alta atividade tanto em discussões arquiteturais quanto em implementações concretas. A ênfase do momento recai sobre segurança (pipeline de decisões, autenticação plugável, budget atômico), extensibilidade de canais (Telegram, Discord, ACP) e robustez de testes em plataformas Windows. Não houve lançamentos oficiais no período, indicando que a equipe prioriza estabilização antes de corte de release — alinhado ao tracker [v0.8.5 finite weekly stabilization line](https://github.com/zeroclaw-labs/zeroclaw/issues/9459).

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

A estabilização da versão 0.8.5 está em curso conforme o [tracker dedicado](https://github.com/zeroclaw-labs/zeroclaw/issues/9459), com congelamento de entrada em 2026-08-04 e corte semanal até 2026-08-30.

---

## 3. Progresso do Projeto

Três PRs atingiu marco demerged/fechamento no período:

| # | PR | Resumo |
|---|----|--------|
| [#9982](https://github.com/zeroclaw-labs/zeroclaw/issues/9982) | `[CLOSED]` Proposta: Hosted memory — 97.5% fewer tokens (ViBo Cloud API) | Proposta comercial de infraestrutura de memória hospedada; **fechada como wontfix** — a equipe optou por não integrar serviços externos proprietários. |
| [#6663](https://github.com/zeroclaw-labs/zeroclaw/issues/6663) | `[CLOSED]` feat(telegram): show tool-call progress during partial streaming | Adicionado suporte a `update_draft_progress` no Telegram para exibir progresso de tool-calls durante streaming parcial — funcionalidade concluída. |
| [#9965](https://github.com/zeroclaw-labs/zeroclaw/issues/9965) | `[OPEN]` Task: cron custom-shell test hits ETXTBSY | **Tarefa aberta** — visível aqui por representar progresso em curso; não é merged ainda. |

**Destaque de progresso funcional:**
- [PR #9839](https://github.com/zeroclaw-labs/zeroclaw/pull/9839) — `feat(security): block direct spellings of irreversible destructive commands` — implementa proteção contra comandos destrutivos irreversíveis.
- [PR #9996](https://github.com/zeroclaw-labs/zeroclaw/pull/9996) — `fix(security): make action budget accounting atomic` — corrige race condition no accounting de budget de ações.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários + reações)

| # | Título | Comentários | 👍 | Prioridade | Risco | Rubrica |
|---|--------|:-----------:|:--:|:----------:|:-----:|---------|
| [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) | RFC: Goal mode v1 — bounded foreground Matrix work | 22 | 1 | P2 | HIGH | Arquitetura de agente multi-turn |
| [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) | RFC: Add per-execution confirmation tier + Claude Code-style command pattern policy | 20 | 0 | P1 | HIGH | Segurança de shell |
| [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) | RFC: ZeroClaw Chat Completions profile | 19 | 0 | P2 | HIGH | Compatibilidade OpenAI SDK |
| [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) | RFC: Pluggable inbound authentication and canonical principals | 16 | 0 | P1 | HIGH | Identity & Access |
| [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) | RFC: Runtime-owned conversation sessions and transport surface adapters | 14 | 0 | P2 | HIGH | Arquitetura de sessões |
| [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) | RFC: Unified attachment architecture for web chat and channels | 14 | 0 | P2 | HIGH | Arquitetura de anexos |

**Análise:** O tema mais debatido é **arquitetura de agente** (goal mode, sessões runtime-owned), refletindo a ambição do ZeroClaw de funcionar como agente stateful de longa duração. A segurança em shell commands (#7155) continua gerando discussão ativa — a comunidade demanda paridade com o modelo "allow/ask/deny" do Claude Code. A compatibilidade com OpenAI Chat Completions (#8603) é estratégica para captar usuários de ecossistemas como LangChain, Continue.dev e Open WebUI.

---

## 5. Bugs e Estabilidade

### Bugs em aberto por severidade

| Severidade | Descrição | Link | Status |
|:-----------|-----------|------|--------|
| **S1** (workflow blocked) | Incomplete terminal responses reported as successful — provider pode encerrar turno sem resposta confiável | [#9421](https://github.com/zeroclaw-labs/zeroclaw/issues/9421) | `in-progress` |
| **S2** (degraded) | 74 test failures on Windows — comandos Unix-only, path semantics, console encoding | [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) | `accepted` |
| **S2** (degraded) | Solicitação: rejeitar portas duplicadas em webhook channels via Quickstart | [#9759](https://github.com/zeroclaw-labs/zeroclaw/issues/9759) | `accepted` |
| **S2** (degraded) | High-entropy detector redacts Solana wallet addresses mesmo com `high_entropy_tokens=false` | [#9486](https://github.com/zeroclaw-labs/zeroclaw/issues/9486) | `accepted` |
| **S3** (minor) | Fallback model without vision incorrectamente reporta causa do erro | [#9983](https://github.com/zeroclaw-labs/zeroclaw/issues/9983) | `open` |

**Alertas críticos:**
- **Ação de segurança ativa:** [PR #9996](https://github.com/zeroclaw-labs/zeroclaw/pull/9996) aborda race condition no budget atômico — risco de bypass de rate-limit.
- **Testes CI:** A falha de `ETXTBSY` no cron custom-shell ([#9965](https://github.com/zeroclaw-labs/zeroclaw/issues/9965)) está gerando check vermelho em PRs não relacionadas.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features com maior relevância estratégica

| # | Feature | Tags | Link |
|---|---------|------|------|
| — | **Agent evaluation harness** (`zeroclaw eval`) — replay + live modes, pluggable graders, LLM-as-judge | agent, tests, P2 | [#7065](https://github.com/zeroclaw-labs/zeroclaw/issues/7065) |
| — | **Provider-grouped Telegram model picker** — paginado via inline keyboard | channel:telegram, P2 | [#9895](https://github.com/zeroclaw-labs/zeroclaw/issues/9895) |
| — | **Discord role-based authorization** — permitir acesso por role, não só user ID | channel:discord, P2 | [#9970](https://github.com/zeroclaw-labs/zeroclaw/issues/9970) |
| — | **Agent export to portable bundle** — `zeroclaw agents export` | agents, P2 | [PR #9986](https://github.com/zeroclaw-labs/zeroclaw/pull/9986) |
| — | **Web research delegate** — bounded sub-agent loop (8 calls, 180s) para search→fetch→distill | tool:web, P2 | [PR #9833](https://github.com/zeroclaw-labs/zeroclaw/pull/9833) |

**Sinais de roadmap derivados:**
1. O ecossistema OpenAI-compatible (#8603) é demanda crescente — indica estratégia de portabilidade.
2. Avaliação de agentes (#7065) sinaliza maturidade do projeto para uso em produção/benchmark.
3. Suporte Hailo-Ollama ([PR #9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109)) expande lista de provedores compatíveis.

---

## 7. Resumo de Feedback dos Usuários

| Categoria | Evidência | Insight |
|-----------|-----------|---------|
| **Dores de segurança** | #7155 (20 comentários), #6971, #7142 | Usuários demandam controles granulares sobre execução de comandos shell — especially no contexto de agentes autônomos de longa duração. |
| **Frustração com testes Windows** | #7462 — 74 falhas, nenhuma detecção em CI | Usuários Windows estão sendo impedidos de contribuir ou validar localmente; dano à diversidade de comunidade. |
| **Experiência mobile em Telegram** | #9895 | Picker de modelos atual é "cumbersome on mobile when many routes are configured" — UX fragmentada. |
| **Solana/MCP users** | #9486 | Bloqueio de wallet addresses via high-entropy detector gera frustração direta em um caso de uso legítimo. |
| **Feedback positivo** | #9986 (agent export) | Feature de portabilidade de agentes recebe aprovação implícita — responde a demanda de migração entre instalações. |

---

## 8. Backlog que Merece Atenção

### Issues sem atividade significativa ou aguardando decisão de maintainer

| # | Título | Criado | Comentários | Risco | Rubrica |
|---|--------|--------|:-----------:|:-----:|---------|
| [#9459](https://github.com/zeroclaw-labs/zeroclaw/issues/9459) | Tracker: v0.8.5 finite weekly stabilization line | 2026-07-27 | 0 | HIGH | Release/milestone |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | Maintainer decision queue for RFCs and design issues | 2026-07-04 | 13 | MEDIUM | Tracker |
| [#6971](https://github.com/zeroclaw-labs/zeroclaw/issues/6971) | RFC: Security posture, credential boundaries, universal ingress policy | 2026-05-27 | 11 | HIGH | Security |
| [#6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) | RFC: Provenance, conversation binding, reply contract for internal agent turns | 2026-05-26 | 11 | HIGH | Arquitetura cron |
| [#9621](https://github.com/zeroclaw-labs/zeroclaw/issues/9621) | RFC: Staged opt-in product telemetry | 2026-08-01 | 3 | HIGH | Observabilidade |
| [#9788](https://github.com/zeroclaw-labs/zeroclaw/issues/9788) | Feature: Report active shell dialect in system prompt | 2026-08-06 | 1 | MEDIUM | agent:prompt |

**Recomendação prioritária:**
- **[#6971](https://github.com/zeroclaw-labs/zeroclaw/issues/6971)** — RFC de postura de segurança com 11 comentários mas criado há ~80 dias. Aguarda decisão de maintainer e é dependência para outros RFCs de segurança acceptance.
- **Decisão de design backlog:** O [tracker #8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) registra 13 comentários e é o mecanismo oficial de fila de decisões;值得关注 que muitos RFCs de alto risco estão pendentes neste tracker.

---

## Métricas Resumidas (24h)

| Dimensão | Valor |
|----------|-------|
| Issues ativas | 30 |
| PRs abertos | 47 |
| PRs merged/fechados | 3 |
| Releases | 0 |
| RFCs em discussão | 15+ |
| Bugs S1+S2 em aberto | 4 |
| Features em progresso | 10+ |
| Contribuidores ativos | 12+ (autores únicos) |

**Veredicto geral:** ZeroClaw demonstra saúde de projeto vigoroso com alta taxa de merge, desenvolvimento arquitetural maduro e foco consciente em segurança e estabilidade. O gargalo principal é a fila de decisões de maintainer para RFCs críticos e a pendência de testes Windows — ambos impactando contributors e confiança operacional.

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*