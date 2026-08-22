# Resumo diário do ecossistema de agentes de IA 2026-08-23

> Issues: 0 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-08-22 20:16 UTC

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

# Relatório Comparativo do Ecossistema Open Source de Agentes de IA

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **dois padrões distintos de maturidade** em 2026-08-23. De um lado, projetos como ZeroClaw e Hermes Agent mantêm volumes massivos de atividade (50+ eventos/24h), evidenciando comunidades grandes e fluxos de trabalho intenso. De outro, NanoBot demonstra eficiência desproporcional — com apenas 17 PRs, entrega 7 merges e múltiplas correções de alta qualidade. A ausência total de releases em todos os projetos indica que o ecossistema está globalmente em **fase de estabilização pré-release**, com equipes focadas em robustez em vez de novas funcionalidades.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | Merges | Releases | Bugs P1/Críticos | Saúde |
|---------|--------------|-----------|--------|----------|-----------------|-------|
| **NullClaw** | 0 | 0 | 0 | 0 | — | 🔴 Inativo |
| **NanoBot** | 0 | 17 (10 open) | 7 | 0 | 0 P1, 4 P2 | 🟢 Eficiente |
| **Hermes Agent** | 50 | 50 | 4 | 0 | 1 P1 | 🟡 Estável |
| **PicoClaw** | 2 | 6 | 4 | 0 | 1 Crítico | 🟡 Moderada |
| **IronClaw** | 12 | 26 | 6 | 0 | 1 Crítico | 🟢 Saudável |
| **CoPaw** | 6 | 6 | 0 | 0 | 1 Crítico | 🟡 Ativa |
| **ZeroClaw** | 50 | 50 | 1 | 0 | 6 P1 | 🟠 Sob pressão |

**Observação:** NanoBot apresenta a melhor **taxa de eficiência** (7 merges / 17 PRs = 41%), enquanto ZeroClaw tem volume alto mas baixa taxa de fechamento (1 merge / 50 PRs = 2%).

---

## 3. Posicionamento do Projeto Principal (NullClaw)

NullClaw serve como **referência estática** no ecossistema, sem atividade registrada. Este perfil sugere:

| Dimensão | Análise |
|----------|---------|
| **Vantagens** | Ausência de débitos técnicos; baseline limpo para integrações futuras |
| **Diferenças técnicas** | Sem dados de PRs/issues — impossibilidade de avaliar arquitetura atual |
| **Tamanho da comunidade** | Indeterminado — necessidade de estratégia de relançamento |
| **Risco** | Perigo de obsolescência se mantido inativo por períodos prolongados |

**Recomendação:** NullClaw deve priorizar um **soft launch** com documentação e primeiros PRs de integração para restabelecer presença no ecossistema.

---

## 4. Focos Técnicos Compartilhados

### 4.1 Estabilidade de Canais de Comunicação

| Projeto | Problema | Status |
|---------|----------|--------|
| NanoBot | Telegram polling stalls | ✅ Resolvido (#5156) |
| PicoClaw | Telegram rate limit por animações excessivas | 🔴 Aberto (#3343) |
| Hermes Agent | Streams Ollama cancelam após ~1.5s | 🟡 Aberto (#87697) |
| ZeroClaw | Mensagens Telegram duplicadas | 🟡 Em progresso (#9718) |

### 4.2 Infraestrutura de Memory/Estado

Três projetos investem em arquitetura de memória independente:

- **IronClaw:** Pluggable memory via MCP (#7664) — 227.7M tokens custando 4x o baseline
- **ZeroClaw:** RFCs #6850 e #9103 sobre desacoplamento de lifecycle de memória
- **NanoBot:** Turn recovery com checkpoints sidecar (#5420)

### 4.3 Segurança e Sandbox

| Projeto | Iniciativa |
|---------|------------|
| **ZeroClaw** | WASM plugin timeout (#9403), SSRF hardening, sandbox policy RFC |
| **Hermes Agent** | Capability contracts para tools de alto risco (#55811) |
| **IronClaw** | Memory write path redaction (#7808) como pré-requisito |

### 4.4 Compatibilidade Windows

Dois projetos reportam problemas Windows críticos:

- **Hermes Agent:** 4 issues específicas (Desktop Snap, Docker sandbox, Hindsight, timeout)
- **ZeroClaw:** 74 testes falhando em Windows (#7462)
- **CoPaw:** UTF-8 encoding issues (#7043)

---

## 5. Análise de Diferenciação

### 5.1 Por Público-Alvo

| Projeto | Perfil Primário | Diferenciador |
|---------|-----------------|---------------|
| **NanoBot** | Desenvolvedores avançados | Multi-provedor LLM configurável, metasearch |
| **Hermes Agent** | Usuários enterprise | Fleet management, Skills Hub, desktop app |
| **IronClaw** | Times de automação | Onboarding suggestions, background runs, extensibilidade |
| **ZeroClaw** | Operadores de infraestrutura | WASM plugins, A2A protocol, granular sandbox |
| **PicoClaw** | Usuários finais (Telegram) | CLI skills, cron jobs, integração delta chat |
| **CoPaw** | Desenvolvedores web | Chrome extension, browser LAN support |

### 5.2 Por Arquitetura

| Abordagem | Projetos | Implicação |
|-----------|----------|------------|
| **Monolítico** | Hermes Agent | Maior integração, menor flexibilidade |
| **Plugin-first** | ZeroClaw, PicoClaw | Extensibilidade via WASM/MCP, complexidade operacional |
| **Provider-agnostic** | NanoBot | Flexibilidade de modelos, lock-in reduzido |
| **Modular (slices)** | IronClaw | Releases incrementais, menor risco |

### 5.3 Por Estratégia de Qualidade

| Estratégia | Projeto | Comportamento |
|------------|---------|---------------|
| **Volume alto + baixa taxa de merge** | ZeroClaw, Hermes | Backlog extenso, risco de stagnation |
| **Volume moderado + alta eficiência** | NanoBot | Código review ágil, releases mais frequentes |
| **Foco em bugs críticos** | PicoClaw | Estabilização defensiva |
| **Refatoração proativa** | IronClaw | Debt técnico endereçado antes de scale |

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração

| Projeto | PRs/24h | Merges/24h | Velocidade | Fase |
|---------|---------|------------|------------|------|
| **NanoBot** | 17 | 7 | 🟢 Rápida | Iteração ativa |
| **PicoClaw** | 6 | 4 | 🟢 Rápida | Bug fixing |
| **IronClaw** | 26 | 6 | 🟡 Moderada | Feature + stabilização |
| **CoPaw** | 6 | 0 | 🟠 Lenta | Code review |
| **ZeroClaw** | 50 | 1 | 🔴 Lentíssima | Acúmulo |
| **Hermes Agent** | 50 | 4 | 🟡 Moderada | Estabilização |

### 6.2 Indicadores de Maturidade

| Indicador | Líder | Seguidor | Laggard |
|-----------|-------|----------|---------|
| **Bug response time** | Hermes (correção rápida Windows Snap) | NanoBot, PicoClaw | ZeroClaw (6 P1s abertos) |
| **Onboarding de contribuidores** | CoPaw (4 first-timers/6 PRs) | IronClaw | ZeroClaw |
| **Documentação** | NanoBot (credits refresh) | IronClaw | CoPaw |
| **Test coverage** | IronClaw (timezone-robust tests) | PicoClaw | ZeroClaw (testes Linux-only) |

### 6.3 Backlog e Staleness

| Projeto | Issues stale (>7 dias) | RFCs pendentes | Risco |
|---------|------------------------|----------------|-------|
| **ZeroClaw** | ~5 | 7 | 🔴 Alto — decisão de maintainers bottleneck |
| **Hermes Agent** | ~5 | 1 | 🟡 Médio |
| **NanoBot** | 0 | 0 | 🟢 Baixo |
| **PicoClaw** | 2 | 0 | 🟡 Moderado |
| **IronClaw** | 0 | 2 | 🟢 Baixo |

---

## 7. Sinais de Tendência

### 7.1 Tendências de Mercado

| Tendência | Evidência | Implicação |
|-----------|-----------|------------|
| **A2A (Agent-to-Agent) como padrão** | ZeroClaw RFC #9324 em fase 1, Hermes tracking | Interoperabilidade entre agentes será requisito |
| **Memory externalization** | IronClaw #7664, ZeroClaw #6850/#9103 | Arquiteturas pluggable memory em alta |
| **Rigor em segurança de plugins** | ZeroClaw WASM timeout, Hermes capability contracts | Sandbox e isolamento serão default |
| **UX minimalista (toggle de reasoning)** | CoPaw #7196, NanoBot observability unificada | Usuários profissionais rejeitam "caixa preta" |
| **Compatibilidade Windows como blockers** | 3+ projetos com issues Windows críticas | Suporte cross-platform ainda imaturo |

### 7.2 Mudanças Arquiteturais em Voga

1. **Contratos tipados** (NanoBot #5480, Hermes #28984): Abandono de dicionários dinâmicos por type safety
2. **Provider abstraction** (NanoBot multi-provider, CoPaw OpenRouter): Evitar vendor lock-in
3. **Runtime telemetry** (NanoBot LangSmith, Hermes tracing): Observabilidade como feature de primeira classe
4. **Background/fleet agents** (IronClaw #7818, Hermes #91277): Operações autônomas de longa duração

### 7.3 Recomendações para Decisores

| Stakeholder | Recomendação |
|-------------|--------------|
| **Dev teams** | Adotar NanoBot ou IronClaw para projetos novos — melhor equilíbrio feature/stabilidade |
| **Enterprises** | Hermes Agent para fleet management; ZeroClaw para ambientes que requerem sandbox granular |
| **Integradores** | Priorizar A2A readiness — ZeroClaw e Hermes lideram RFCs de interoperabilidade |
| **Contribuidores** | CoPaw e NanoBot oferecem melhores pontos de entrada (first-timers, PRs menores) |

---

*Relatório gerado em 2026-08-23. Dados consolidados de 7 projetos do ecossistema open source de agentes de IA.*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-08-23

---

## 1. Panorama do Dia

O projeto NanoBot apresenta alta atividade de desenvolvimento no dia de hoje, com **17 PRs atualizados** nas últimas 24 horas (10 abertos, 7 fechados/merged), apesar de nenhuma issue ter sido registrada no período. A atividade concentra-se em melhorias de estabilidade, refatorações de provedores LLM e expansão da interface web. Não houve lançamentos de novas versões, indicando que o time está em fase de consolidação antes de um próximo release. A ausência de issues abertas sugere uma base de usuários ainda pequena ou um ciclo de report de problemas através de PRs.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24 horas.**

O projeto não publicou novas versões desde o período analisado. Recomenda-se monitorar os PRs em revisão, especialmente as refatorações de provedores (#5480, #5481), que podem indicar preparação para uma release significativa.

---

## 3. Progresso do Projeto

### PRs Fechados/Merged Hoje

| # | Título | Autor | Impacto |
|---|--------|-------|---------|
| [#5486](https://github.com/HKUDS/nanobot/pull/5486) | feat(webui): unify turn observability | Re-bin | Melhora visibilidade de cada turno do usuário, preservando raciocínio e ferramentas |
| [#5488](https://github.com/HKUDS/nanobot/pull/5488) | docs: refresh team and contributor credits | Re-bin | Atualização de créditos e avatares da comunidade |
| [#4430](https://github.com/HKUDS/nanobot/pull/4430) | feat(web): configure web_fetch provider | ChachAloha | Provider configurável com modos auto, tavily, jina e readability |
| [#3869](https://github.com/HKUDS/nanobot/pull/3869) | fix(providers): DeepSeek message hardening | DreamShepherd2006 | Corrige erros 400 e vazamento de placeholders na API DeepSeek |
| [#3294](https://github.com/HKUDS/nanobot/pull/3294) | feat(dream): optional kill switch + custom templates | pixan-ai | Permite desabilitar cron job de Dream e personalizar templates |
| [#5156](https://github.com/HKUDS/nanobot/pull/5156) | fix(telegram): recover from stalled polling | QQQ300kuai | Recuperação de polling Telegram após falhas de rede |
| [#5407](https://github.com/HKUDS/nanobot/pull/5407) | fix(cron): retire heartbeat/dream when disabled | aiguozhi123456 | Corrige jobs persistidos que continuavam executando após desabilitados |

**Destaque:** A unificação da observabilidade de turnos (#5486) representa uma melhoria significativa na experiência de debug e acompanhamento de sessões.

---

## 4. Temas Quentes da Comunidade

### PRs em Destaque por Complexidade

**#5480 - Refactor Typed LLM Usage Contract** ([HKUDS/nanobot#5480](https://github.com/HKUDS/nanobot/pull/5480))
- Substitui dicionários dinâmicos por contrato imutável tipado
- Normaliza semântica de tokens e cache entre OpenAI, Anthropic e Bedrock
- **Signal:** O time está investindo em robustez de tipos e interoperabilidade entre provedores

**#5481 - Unified Provider Usage Backend** ([HKUDS/nanobot#5481](https://github.com/HKUDS/nanobot/pull/5481))
- Registra trajetórias para todas as tentativas de provedores, incluindo fallbacks e erros
- Parte da "native stack" (issue #5482)
- **Signal:** Preparação para tracking granular de custos e uso

**#5234 - Meta-Search Provider (mst-python)** ([HKUDS/nanobot#5234](https://github.com/HKUDS/nanobot/pull/5234))
- Integração com agregador de busca usando Reciprocal Rank Fusion
- **Signal:** Expansão de capacidades de busca web além de provedores individuais

---

## 5. Bugs e Estabilidade

### Bugs Reportados (Prioridade P2)

| # | Título | Severidade | Status |
|---|--------|------------|--------|
| [#5485](https://github.com/HKUDS/nanobot/pull/5485) | fix: restore LangSmith tracing | Bug/Regressão | ABERTO |
| [#5484](https://github.com/HKUDS/nanobot/pull/5484) | fix(mcp): flag business-error envelopes | Bug | ABERTO |
| [#5483](https://github.com/HKUDS/nanobot/pull/5483) | fix(session): prevent deleted sessions recreation | Bug/Regressão | ABERTO |
| [#5489](https://github.com/HKUDS/nanobot/pull/5489) | perf(email): fetch headers before body | Performance | ABERTO |

### Análise de Severidade

**Regressões (2):**
- LangSmith tracing removido na migração LiteLLM→native SDK (#5485)
- Sessões deletadas sendo recriadas por mensagens atrasadas (#5483)

**Bugs Críticos (1):**
- MCP servers retornando erros de negócio como sucesso (isError=false) (#5484)

**Performance (1):**
- Loop IMAP baixando corpo inteiro antes de filtrar mensagens (#5489)

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features em Desenvolvimento

**#5420 - User-Controlled Turn Recovery** ([HKUDS/nanobot#5420](https://github.com/HKUDS/nanobot/pull/5420))
- Checkpoint sidecar para WebSocket interrompidos
- Botões "Continue" / "Dismiss" na interface
- Evita re-chamada desnecessária ao modelo

**#5471 - Ephemeral Runs** ([HKUDS/nanobot#PR5471](https://github.com/HKUDS/nanobot/pull/5471))
- SDK: runs efêmeras não devem persistir estado de sessão
- Corrige violação de contrato documentedo

**#5487 - WebUI Subagent Activity Replay** ([HKUDS/nanobot#5487](https://github.com/HKUDS/nanobot/pull/5487))
- Preview de arquivos com renderização Markdown
- Replay de ciclo de vida de subagentes

### Possível Próxima Versão
Baseado nos PRs em revisão, a próxima release deve incluir:
- Contrato tipado de uso LLM (padronização interna)
- Provider meta-search integrado
- Recuperação de turnos controlada pelo usuário
- Tracing LangSmith restaurado

---

## 7. Resumo de Feedback dos Usuários

*Nota: Não há issues abertas com feedback direto de usuários nas últimas 24h. A análise baseia-se nos padrões de PRs.*

### Dores Identificadas

| Dor | Evidência | Impacto |
|-----|-----------|---------|
| Polling Telegram trava silenciosamente | #5156 merged | Produtivo |
| Jobs cron persistidos não respeitam config desabilitada | #5407 merged | Produtivo |
| Tracing removido após refatoração | #5485 aberto | Observabilidade |
| Sessões deletadas ressurgem | #5483 aberto | Consistência |
| Erros de negócio MCP tratados como sucesso | #5484 aberto | Confiabilidade |

### Cenários de Uso Observados

- **Integração corporativa:** Tracing LangSmith, múltiplos provedores LLM
- **Automação pessoal:** Email IMAP, Telegram, Dream loop
- **Web scraping:** Provedores configuráveis (tavily, jina, readability)
- **Multi-session:** Recuperação de turnos, gerenciamento de estado

---

## 8. Backlog que Merece Atenção

### PRs Antigos sem Merge Recente

| # | Título | Criado | Idade | Prioridade |
|---|--------|--------|-------|------------|
| [#3294](https://github.com/HKUDS/nanobot/pull/3294) | feat(dream): optional kill switch | 2026-04-19 | ~4 meses | Baixa |
| [#3869](https://github.com/HKUDS/nanobot/pull/3869) | fix DeepSeek hardening | 2026-05-16 | ~3 meses | Média |
| [#4430](https://github.com/HKUDS/nanobot/pull/4430) | feat web_fetch provider | 2026-06-21 | ~2 meses | Alta |
| [#5156](https://github.com/HKUDS/nanobot/pull/5156) | fix telegram polling | 2026-07-29 | ~3 semanas | Alta |
| [#5234](https://github.com/HKUDS/nanobot/pull/5234) | feat mst-python metasearch | 2026-08-03 | ~2 semanas | Média |

### Recomendações

1. **Revisar #5234 (metasearch)** — Aberto há 20 dias, adiciona valor significativo
2. **Priorizar #5483 e #5484** — Bugs podem afetar usuários em produção
3. **Considerar release** — Múltiplas correções importantes merged; momento propício

---

## Métricas de Saúde do Projeto

| Indicador | Valor | Status |
|-----------|-------|--------|
| PRs abertos | 10 | 🟡 Normal |
| PRs fechados (24h) | 7 | 🟢 Alto volume |
| Issues abertas | 0 | 🟢 Nenhuma pendente |
| Bugs P1 abertos | 0 | 🟢 Críticos resolvidos |
| Bugs P2 abertos | 4 | 🟡 Em tratamento |
| Tempo médio de review | N/A | — |

---

*Relatório gerado automaticamente com base em dados do GitHub — 2026-08-23*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-08-23

---

## 1. Panorama do Dia

O projeto **Hermes Agent** manteve alta atividade nas últimas 24 horas, com **50 issues e 50 PRs atualizados**, sem novos lançamentos. A maioria das interações concentra-se em **correções de bugs e refinamentos de estabilidade**, especialmente nos componentes CLI, gateway e desktop. A questão mais comentada envolve o índice de Skills obsoleto (29,8h sem atualização), enquanto um PR de alta prioridade busca consolidar a confiabilidade de atualizações em fleet. O estado geral indica **saúde operacional estável**, porém com múltiplas regressões e problemas de compatibilidade sendo tratados simultaneamente.

---

## 2. Lançamentos

**Nenhum novo release registrado nas últimas 24 horas.**

O projeto não publicou versões desde o período analisado. Os dados sugerem que a equipe está em ciclo de estabilização antes de um próximo lançamento.

---

## 3. Progresso do Projeto

### PRs Recentemente Merged/Fechados

| PR | Título | Impacto |
|---|---|---|
| [#90237](https://github.com/NousResearch/hermes-agent/issues/90237) | Desktop window breaks Windows Snap and FancyZones | **P2** — Corrigiu regressão v0.20.4 no Windows 11 |
| [#74101](https://github.com/NousResearch/hermes-agent/issues/74101) | sanitize_api_messages dedup re-introduz tool_calls: [] | **P2** — Resolveu HTTP 400 em DeepSeek |
| [#92446](https://github.com/NousResearch/hermes-agent/issues/92446) | skills_guard quarantines legitimate skills | **P2** — Desbloqueou skills de projeto |
| [#14931](https://github.com/NousResearch/hermes-agent/issues/14931) | feat(gateway): make BOOT.md discoverable by default | **P3** — Aprimorou descoberta de inicialização |

### PRs Abertos de Destaque

| PR | Título | Prioridade | Componente |
|---|---|---|---|
| [#92491](https://github.com/NousResearch/hermes-agent/pull/92491) | fix(mcp): inject trusted args before deferred validation | **P2** | tool/mcp |
| [#92442](https://github.com/NousResearch/hermes-agent/pull/92442) | fix(gateway): use BSD-compatible ps flags | **P2** | comp/cli |
| [#92495](https://github.com/NousResearch/hermes-agent/pull/92495) | fix(backup): bound non-advancing SQLite snapshots | **P2** | comp/cli |
| [#92499](https://github.com/NousResearch/hermes-agent/pull/92499) | feat(skills): honour disable-model-invocation | **P3** | tool/skills |

**Avanços principais:** Correção de regressão no Windows 11, melhoria na compatibilidade BSD/macOS, e refinamento do sistema de habilidades com suporte a `disable-model-invocation`.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| Issue | Comentários | Status | Tema |
|---|---|---|---|
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | **77** | OPEN | Skills index stálo/degradado (29,8h) |
| [#88584](https://github.com/NousResearch/hermes-agent/issues/88584) | **19** | OPEN | Integração Nous bloqueada |
| [#83390](https://github.com/NousResearch/hermes-agent/issues/83390) | **18** | OPEN | DeepSeek HTTP 400 em title_generation |
| [#91277](https://github.com/NousResearch/hermes-agent/issues/91277) | **13** | OPEN | Fleet update reliability (P1) |
| [#87697](https://github.com/NousResearch/hermes-agent/issues/87697) | **9** | OPEN | Streams Ollama cancelam após ~1,5s |

**Análise:** O problema de **Skills index degradado** domina as discussões, indicando impacto direto na experiência do Skills Hub. A integração bloqueada (#88584) sugere gargalos em automações de CI/CD. O issue #91277 tracking fleet updates reflete uma necessidade recorrente de unificar estratégias de deployment multi-plataforma.

---

## 5. Bugs e Estabilidade

### Por Severidade

#### P1 — Crítico
| Issue | Título | Link |
|---|---|---|
| #91277 | Fleet update reliability | [GitHub #91277](https://github.com/NousResearch/hermes-agent/issues/91277) |

**Nota:** ~30 issues abertas + ~15 PRs sobre atualização de fleet sem plano unificado.

#### P2 — Alto
| Issue | Título | Link |
|---|---|---|
| #87697 | Streams Ollama cancelam após ~1,5s | [GitHub #87697](https://github.com/NousResearch/hermes-agent/issues/87697) |
| #90297 | auto_tts plays audio twice | [GitHub #90297](https://github.com/NousResearch/hermes-agent/issues/90297) |
| #25087 | hermes skills inspect falha em skills locais | [GitHub #25087](https://github.com/NousResearch/hermes-agent/issues/25087) |
| #13582 | .env sobrescreve silenciosamente config.yaml | [GitHub #13582](https://github.com/NousResearch/hermes-agent/issues/13582) |
| #87460 | install.sh falha silenciosamente no Ubuntu minimal | [GitHub #87460](https://github.com/NousResearch/hermes-agent/issues/87460) |
| #92271 | Docker sandbox quebrado no Windows (WinError 267) | [GitHub #92271](https://github.com/NousResearch/hermes-agent/issues/92271) |
| #92302 | Timeout de 120s muito curto para modelos locais | [GitHub #92302](https://github.com/NousResearch/hermes-agent/issues/92302) |
| #92429 | Credential pool sem alias normalization → 429 ×3 | [GitHub #92429](https://github.com/NousResearch/hermes-agent/issues/92429) |

#### P3 — Médio
| Issue | Título | Link |
|---|---|---|
| #46593 | kanban worker exit rc=0 sem chamar kanban_complete | [GitHub #46593](https://github.com/NousResearch/hermes-agent/issues/46593) |
| #78365 | WhatsApp bridge SIGTERM processo não-relacionado | [GitHub #78365](https://github.com/NousResearch/hermes-agent/issues/78365) |
| #90918 | Hindsight daemon restart falha WinError 87 | [GitHub #90918](https://github.com/NousResearch/hermes-agent/issues/90918) |

**Padrões identificados:**
- **Windows:** 4 issues específicas da plataforma (Desktop Snap, Docker sandbox, Hindsight, timeout)
- **Streams:** Problemas recorrentes com cancelamento e stalling
- **Instalação:** Falhas silenciosas em ambientes minimal/cloud

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em Discussão

| Issue | Título | Link | Observação |
|---|---|---|---|
| #91277 | Fleet update reliability tracking | [GitHub #91277](https://github.com/NousResearch/hermes-agent/issues/91277) | **Prioridade P1** — Plano unificado para install/update |
| #84340 | Memory-file placement contract (MEMORY.md, USER.md, etc.) | [GitHub #84340](https://github.com/NousResearch/hermes-agent/issues/84340) | Contrato formal para arquivos persistentes |
| #55811 | Runtime-enforced capability contracts para tools de alto risco | [GitHub #55811](https://github.com/NousResearch/hermes-agent/issues/55811) | Unificação de mecanismos de segurança |
| #28984 | Typed Config-Runtime Contract | [GitHub #28984](https://github.com/NousResearch/hermes-agent/issues/28984) | Eliminar gaps silenciosos config→runtime |
| #92208 | Desktop: generalizar "Add to chat" para selections | [GitHub #92208](https://github.com/NousResearch/hermes-agent/issues/92208) | Expansão de UX |
| #92493 | Webhook task relays: trusted role handoff | [GitHub #92493](https://github.com/NousResearch/hermes-agent/issues/92493) | Routing em Discord/webhook |
| #92438 | Tool-iteration-budget signpost (checkpoint antes do wall) | [GitHub #92438](https://github.com/NousResearch/hermes-agent/pull/92438) | PR aberto — opt-in |

**Sinais de roadmap:**
1. **Fleet management** é a maior lacuna identificada — unificação de install/update para múltiplos cenários (local, multi-profile, remote, image-managed)
2. **Segurança e contratos** ganham atenção com typed configs e capability contracts
3. **Persistência e memória** com formalização do contrato de arquivos .md

---

## 7. Resumo de Feedback dos Usuários

### Dores Real reportedas

| Cenário | Problema | Impacto |
|---|---|---|
| **Windows Desktop** | Regressão v0.20.4 quebra Snap/FancyZones | Altíssimo — workflow diário |
| **Ubuntu Minimal** | install.sh falha silenciosamente (libatomic1) | Medio — bloqueia deploy em cloud |
| **Modelos Locais** | Timeout 120s inadequado para contextos grandes | Medio — frustração com LLMs on-premise |
| **Skills Hub** | Índice degradado impede descoberta de skills | Alto — impacto na produtividade |
| **Headless/Automation** | stdout bloqueado em pipes, 24min silêncio | Crítico — agentes automatizados |
| **Windows Docker** | Sandboxes falham por ":" no nome da pasta | Medio — isola usuários Windows |
| **Oneshot (-z)** | Exit 0 mesmo em recusa de política | Alto — false-success em automações |

### Padrões de Satisfação/Insatisfação

- **Insatisfação:** Falhas silenciosas (install.sh, .env override, stdout buffers) geram desconfiança
- **Satisfação:** Correção rápida do Windows Snap (#90237) demonstra responsividade
- **Demanda:** Sistema de aprovações mais granular (#92437) — comparação com Claude Code

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Estagnadas

| Issue | Criado | Atualizado | Status | Prioridade | Link |
|---|---|---|---|---|---|
| #13582 | 2026-04-21 | 2026-08-22 | OPEN | **P2** | [.env override config.yaml](https://github.com/NousResearch/hermes-agent/issues/13582) |
| #25087 | 2026-05-13 | 2026-08-22 | OPEN | **P2** | [skills inspect falha local](https://github.com/NousResearch/hermes-agent/issues/25087) |
| #28984 | 2026-05-19 | 2026-08-22 | OPEN | P3 | [Typed Config-Runtime Contract](https://github.com/NousResearch/hermes-agent/issues/28984) |
| #55811 | 2026-06-30 | 2026-08-22 | OPEN | P3 | [Capability contracts alto risco](https://github.com/NousResearch/hermes-agent/issues/55811) |

### PRs Abertos sem Revisão

| PR | Autor | Componente | Link |
|---|---|---|---|
| #92499 | wsyski | tool/skills | [disable-model-invocation](https://github.com/NousResearch/hermes-agent/pull/92499) |
| #92494 | McClean | A2A delivery | [preserve round trips](https://github.com/NousResearch/hermes-agent/pull/92494) |
| #92449 | fangliquanflq | tool/file | [restrict file tools to paths](https://github.com/NousResearch/hermes-agent/pull/92449) |
| #92437 | dhruvkej9 | approvals | [user-defined ask rules](https://github.com/NousResearch/hermes-agent/pull/92437) |

---

## Indicadores de Saúde do Projeto

| Métrica | Valor | Observação |
|---|---|---|
| Issues ativas (24h) | 44 | Alta atividade |
| PRs abertos (24h) | 46 | Pipeline saudável |
| PRs merged (24h) | 4 | Fluxo de code review ativo |
| Releases (24h) | 0 | Ciclo de estabilização |
| P1 em aberto | 1 | Fleet update reliability |
| Issues >7 dias sem activity | ~5 | Backlog precisa triagem |

**Veredicto:** Hermes Agent apresenta **saúde operacional estável**, porém com múltiplas frentes de bugs P2 simultâneos, especialmente em Windows e automação headless. A ausência de releases e a concentração de issues sobre fleet updates indicam priorização de estabilidade sobre novas features no curto prazo.

---

*Relatório gerado em 2026-08-23 com base em dados do GitHub NousResearch/hermes-agent.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório de Projeto: PicoClaw
## 📅 Data de Referência: 2026-08-23

---

## 1. Panorama do Dia

O projeto PicoClaw apresenta um dia de **atividade moderada**, com 8 eventos totais registrados nas últimas 24 horas. O volume de PRs (6) supera significativamente o de issues (2), indicando foco em contribuições de código. Duas issues abertas foram atualizadas, ambas relacionadas a bugs críticos — uma sobre falha em loop de agente e outra sobre animação de feedback. Nenhum lançamento foi realizado, e não há releases recentes no período. A base de código continua em manutenção ativa com 4 PRs fechados/merged hoje.

---

## 2. Lançamentos

### 🚫 Nenhuma release nas últimas 24h

O projeto não registrou novos lançamentos. A ausência de releases indica que as mudanças pendentes ainda estão em fase de revisão ou aguardando merge no branch principal.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados Hoje (4 total)

| # | PR | Descrição | Impacto |
|---|-----|-----------|---------|
| #3319 | [fix(tools): honor exec timeout and boolean run options](https://github.com/sipeed/picoclaw/pull/3319) | Corrige execução síncrona ignorando `timeout` por-run e declara `background`/`pty` como booleanos | **Alta** — Melhora confiabilidade de ferramentas de execução |
| #714 | [skills: install/reinstall CLI](https://github.com/sipeed/picoclaw/pull/714) | Adiciona comandos CLI para instalação/reinstalação de skills com suporte a repo@branch | **Alta** — Melhora UX de gerenciamento de skills |
| #1083 | [fix(cron): preserve recurring job schedule after execution](https://github.com/sipeed/picoclaw/pull/1083) | Corrige cron jobs recorrentes se tornando one-time após primeira execução | **Crítica** — Resolve bug silencioso em tarefas agendadas |
| #1545 | [fix: merge PRs #1500 #1490 #1488 #1487 #1485](https://github.com/sipeed/picoclaw/pull/1545) | Consolida múltiplos fixes de uma só vez | **Moderada** — Limpa backlog de PRs menores |

### Análise
Os PRs fechados demonstram foco em **estabilidade e DX** (Developer Experience). A correção do cron (#1083) é particularmente importante por ser uma regressão silenciosa — jobs simplesmente paravam sem notificação ao usuário.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| # | Título | Comentários | 👍 | Status | Relevância |
|---|--------|-------------|-----|--------|------------|
| #3269 | [BUG] MCP server failure hangs agent loop | 6 | 1 | OPEN | **Crítica** |
| #3343 | [BUG] Tool feedback animation edits Telegram message indefinitely | 0 | 0 | OPEN | **Alta** |

### Análise de #3269 (MCP Server Hang)
Esta issue está em discussão há ~34 dias (criada em 2026-07-20) e gerou **6 comentários**. O problema é sério:
- Falha em conexão MCP causa **hang no agent loop**
- Interface de chat para de responder completamente
- Afeta diretamente a experiência do usuário final

**Nota:** Existe PR #3337 ([Fix/mcp failure hangs agent loop](https://github.com/sipeed/picoclaw/pull/3337)) aberto para resolver exatamente este problema, indicando que a comunidade já identificou e está trabalhando na solução.

### Análise de #3343 (Telegram Animation Bug)
Issue criada em 2026-08-22 (ontem), demonstrando bug grave:
- Animação de feedback chamou `editMessageText` a cada 3 segundos
- Executou por **vários dias** gerando **228.000+ tentativas de edit**
- Resultou em **rate limit imposto pelo Telegram**

Este é um problema de **estabilidade e consumo de recursos** que pode afetar a reputação do bot junto à API do Telegram.

---

## 5. Bugs e Estabilidade

### 🔴 Bugs Abertos (2)

| Severidade | Issue | Descrição | Tempo Aberto |
|------------|-------|-----------|--------------|
| **Crítica** | [#3269](https://github.com/sipeed/picoclaw/issues/3269) | Loop de agente trava quando servidor MCP falha | 34 dias |
| **Alta** | [#3343](https://github.com/sipeed/picoclaw/issues/3343) | Animação de feedback edita mensagem indefinidamente no Telegram | 1 dia |

### Análise de Severidade

**Crítica (#3269):** Afeta disponibilidade do sistema inteiro. O PR #3337 está em aberto como solução — merece revisão prioritária.

**Alta (#3343):** Gera consumo excessivo de API e possíveis penalidades de rate limit. Bug de regressão possivelmente introduzido recently.

### Indicadores de Estabilidade
- ✅ 4 bugs crônicos foram fechados hoje (incluindo cron regression)
- ⚠️ 2 novos bugs críticos reportados
- 📉 Proporção de issues abertas/fechadas: 2:4 (equilibrada)

---

## 6. Pedidos de Features e Sinais de Roadmap

### PRs Abertos com Características de Enhancement

| # | PR | Descrição | Potencial Roadmap |
|---|-----|-----------|-------------------|
| #3222 | [refactor(deltachat): cleanup implementation](https://github.com/sipeed/picoclaw/pull/3222) | Remove features legadas, atualiza docs, renomeia campos | **Manutenção/Melhoria** |
| #3337 | [Fix/mcp failure hangs agent loop](https://github.com/sipeed/picoclaw/pull/3337) | Adiciona resilient handling para falhas MCP | **Estabilidade** |

### Observações
- Não há requests de features explícitas nas últimas 24h
- O foco atual é **estabilidade e bug fixing** — bom sinal de maturidade
- A refatoração do deltachat (#3222) sugere preparação para mudanças na integração de email

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Dor | Origem | Severidade |
|-----|--------|------------|
| Chat trava completamente após falha MCP | [#3269](https://github.com/sipeed/picoclaw/issues/3269) | 🔴 Crítica |
| Rate limit no Telegram por animações excessivas | [#3343](https://github.com/sipeed/picoclaw/issues/3343) | 🟠 Alta |
| Timeout de tools não funciona como esperado | [#3319](https://github.com/sipeed/picoclaw/pull/3319) (já corrigido) | 🟡 Média |
| Cron jobs param de executar após primeira vez | [#1083](https://github.com/sipeed/picoclaw/pull/1083) (já corrigido) | 🔴 Crítica |

### Cenários de Uso Refletidos
- **Agentes em produção:** Usuários dependem de conexões MCP externas
- **Integração Telegram:** Bots são usados intensamente, causando rate limits
- **Automação com cron:** Tarefas agendadas são críticas para workflows

### Satisfação Geral
**Indeterminado** — Sem métricas de satisfaction survey disponíveis. O volume de issues (apenas 2 em 24h) sugere base de usuários ainda pequena ou madura.

---

## 8. Backlog que Merece Atenção

### Issues/PRs Sem Resposta há Tempo

| # | Tipo | Título | Criado | Última Atualização | Dias Inativo |
|---|------|--------|--------|---------------------|--------------|
| #3269 | Issue | MCP server hangs agent | 2026-07-20 | 2026-08-22 | ~34 dias |
| #3222 | PR | deltachat refactor | 2026-07-03 | 2026-08-22 | ~51 dias |
| #714 | PR | skills CLI | 2026-02-24 | 2026-08-22 | ~180 dias |

### Prioridades de Atenção

1. **[#3269](https://github.com/sipeed/picoclaw/issues/3269)** — Bug crítico aberto há 34 dias. O PR #3337 já existe como solução. **Ação: revisar e MERGE #3337.**

2. **[#3222](https://github.com/sipeed/picoclaw/pull/3222)** — PR de refatoração do deltachat está stale há 51 dias. **Ação: revisar ou fechar com explicação.**

3. **[#714](https://github.com/sipeed/picoclaw/pull/714)** — PR antigo de skills CLI foi finalmente merged hoje após ~180 dias. **Ação: N/A — já resolvido.**

### Recomendações

| Prioridade | Ação | Responsável |
|------------|------|-------------|
| 🔴 **Alta** | Revisar e testar PR #3337 para fix do MCP hang | Maintainers |
| 🟠 **Média** | Investigar root cause do bug #3343 (Telegram animation) | Dev team |
| 🟡 **Baixa** | Limpar PRs stale do backlog (#3222) | Maintainers |

---

## 📊 Métricas Resumidas do Dia

| Métrica | Valor |
|---------|-------|
| Issues abertas/ativas | 2 |
| PRs abertos | 2 |
| PRs merged/fechados | 4 |
| Releases | 0 |
| Bugs críticos abertos | 1 |
| Bugs de alta severidade | 1 |
| PRs em stale há >30 dias | 2 |

---

## Conclusão

O projeto PicoClaw demonstra **saúde moderada** em 2026-08-23. A atividade de PRs está saudável com 4 merges, incluindo fixes importantes para cron e timeout. Contudo, dois bugs críticos permanecem abertos — especialmente o hang do agent loop por falha MCP (#3269), que já possui PR de fix aguardando revisão. A ausência de releases recentes sugere pipeline de deployment conservador ou fase de estabilização pré-release. **Recomenda-se priorização imediata da revisão do PR #3337** para mitigar o bug crítico de MCP.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-08-23

## 1. Panorama do Dia

O projeto IronClaw mantém alto volume de atividade com **12 issues e 26 PRs atualizados nas últimas 24h**, sem novos lançamentos. O ecossistema mostra foco intenso em **infraestrutura de CI/CD** (4 PRs de tamanho XL do contribuidor core henrypark133) e **melhorias de UX/WebUI** (onboarding, sugestões, design system). A taxa de fechamento está saudável: 4 issues fechadas e 6 PRs merged/fechados, indicando progresso tangível em correções de bugs e refatorações. O contribuidor `italic-jinxin` domina o backlog de issues fechadas com 4 resoluções em sequência, enquanto `serrrfirat` lidera iniciativas estratégicas de longa duração.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.** O projeto não registrou novos milestones ou tags de versão. A ausência de releases pode indicar que o trabalho está concentrado em branches de feature ou que há um ciclo de lançamento mais espaçado.

---

## 3. Progresso do Projeto

### PRs Fechados/Merged (6 total)

| # | Título | Escopo | Impacto |
|---|--------|--------|---------|
| [#7773](https://github.com/nearai/ironclaw/pull/7773) | refactor(webui): remove duplicate Settings and Extensions tabs | webui | Removeu componentes e inventários obsoletos — redução de debt técnico |
| [#7774](https://github.com/nearai/ironclaw/pull/7774) | test(webui): make automation presenter date assertions timezone-robust | webui | Corrigiu testes que falhavam em timezones como Asia/Shanghai |
| [#7772](https://github.com/nearai/ironclaw/pull/7772) | fix(webui): surface extension setup phase and blockers in Configure | webui | Exibição completa de blockers de configuração de extensões |
| [#7700](https://github.com/nearai/ironclaw/pull/7700) | feat(notifications): publish authoritative run outcomes | notifications | Notificações duráveis para conclusão/falha de runs em background |
| [#7749](https://github.com/nearai/ironclaw/pull/7749) | test: trigger PR for /benchmark qa-automation-preview | ci/benchmarks | Re-medição do harness contra ironclaw main |
| [#7814](https://github.com/nearai/ironclaw/pull/7814) | chore(agents): refresh codebase knowledge graph | agents | Refresh noturno do bootstrap snapshot da memória do codebase |

**Destaque:** A converging de notificações autoritativas ([#7700](https://github.com/nearai/ironclaw/pull/7700)) representa maturidade no lifecycle de runs, diferenciando foreground vs background e garantindo entrega após reply finalizável.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| # | Título | Comentários | Tipo |
|---|--------|-------------|------|
| [#7664](https://github.com/nearai/ironclaw/issues/7664) | Pluggable memory over MCP: wire provider, Mnesis | 2 | enhancement (epic) |
| [#7824](https://github.com/nearai/ironclaw/issues/7824) | Context projection: Pi-style compaction barrier | 1 | enhancement |
| [#7815](https://github.com/nearai/ironclaw/issues/7815) | Onboarding suggestions: cumulative net-new work | 1 | epic, ux |

### PRs com Maior Complexidade (XL size, múltiplas tracks)

| # | Título | Escopo | Riesgo |
|---|--------|--------|--------|
| [#7491](https://github.com/nearai/ironclaw/pull/7491) | feat(coding): omp core-tool contract + benchmark arm | ci, docs, dependencies | medium |
| [#7821](https://github.com/nearai/ironclaw/pull/7821) | ci: single setup-rust composite — T1 | ci, docs | medium |
| [#7817](https://github.com/nearai/ironclaw/pull/7817) | ci: nextest test pipeline, full-failure signal — T2 | ci, docs | medium |
| [#7818](https://github.com/nearai/ironclaw/pull/7818) | feat(subagent): background mode slices 2b+2c | subagent | medium |

**Análise:** A comunidade está fragmentada em 3 eixos temáticos:
1. **Memory architecture** — pluggable memory via MCP com Mnesis como primeiro consumer
2. **CI-expedite tracks (T1-T4)** — redução de drift local vs CI e wall-clock time
3. **Onboarding/WebUI** — sugestões, conectividade e fluxo de entrada

---

## 5. Bugs e Estabilidade

### Bugs Abertos (4)

| # | Severidade | Título | Link |
|---|------------|--------|------|
| #7823 | medium | Notion install fails in IronClaw | [#7823](https://github.com/nearai/ironclaw/issues/7823) |
| #7822 | medium | Unable to set up Slack in IronClaw | [#7822](https://github.com/nearai/ironclaw/issues/7822) |
| #7813 | low | UI: heading gets cropped when suggestions panel appears | [#7813](https://github.com/nearai/ironclaw/issues/7813) |
| #7808 | critical (prerequisite) | Memory write path: redaction + taint metadata required | [#7808](https://github.com/nearai/ironclaw/issues/7808) |

### Análise por Severidade

- **Critical:** [#7808](https://github.com/nearai/ironclaw/issues/7808) é blocker para qualquer external memory provider — o write path currently egresses verbatim conversation content sem redaction.
- **Medium:** Bugs de integração com Notion e Slack reportados via #x-ai-product-feedback indicam fricção na configuração de extensões externas.
- **Low:** UI layout issue cosmético no onboarding.

**Conclusão:** Estabilidade geral é boa para features core. O gap está em extensibility (MCP, integrações externas) — área que [#7664](https://github.com/nearai/ironclaw/issues/7664) e [#7808](https://github.com/nearai/ironclaw/issues/7808) endereçam.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Enhancements em Destaque

| # | Feature | Escopo | Link |
|---|---------|--------|------|
| #7664 | Pluggable memory over MCP + Mnesis | memory | [#7664](https://github.com/nearai/ironclaw/issues/7664) |
| #7824 | Context projection: Pi-style compaction | context, cost | [#7824](https://github.com/nearai/ironclaw/issues/7824) |
| #7812 | Onboarding suggestions: respect user-level tool permissions | onboarding | [#7812](https://github.com/nearai/ironclaw/issues/7812) |
| #7650 | Derive run outcomes from runtime evidence | automations | [#7650](https://github.com/nearai/ironclaw/pull/7650) |

### Sinais de Roadmap

1. **Memory externo:** O tracking issue [#7664](https://github.com/nearai/ironclaw/issues/7664) indica direção clara para externalizar memória via MCP, com Mnesis Core como primeiro consumer.
2. **Context window optimization:** [#7824](https://github.com/nearai/ironclaw/issues/7824) cita dados concretos: 227.7M input tokens ($10.31) vs 55.1M ($2.52) no baseline — custo 4x maior, evidenciando necessidade de compaction.
3. **Subagent background mode:** [#7818](https://github.com/nearai/ironclaw/pull/7818) é slices 2b+2c, indicando roadmap modular para background agents.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Categoria | Problema | Severidade | Fonte |
|-----------|----------|------------|-------|
| Integration-install | Notion tool não instala | medium | #x-ai-product-feedback |
| Integration-setup | Slack não configura | medium | #x-ai-product-feedback |
| UX/Layout | Heading cortado no onboarding | low | user report |
| Tool permissions | Sugestões não respeitam permissões de ferramentas | medium | internal |

### Cenários de Uso Observados

- **Onboarding flow:** Usuários querem sugestões baseadas em suas ferramentas conectadas (não apenas search interno) — [#7812](https://github.com/nearai/ironclaw/issues/7812).
- **Background runs:** Necessidade de notificações confiáveis para runs completados em background — resolvido em [#7700](https://github.com/nearai/ironclaw/pull/7700).
- **Agent linking:** Operators precisam de surface WebUI para IronHub link — endereçado em [#7516](https://github.com/nearai/ironclaw/pull/7516).

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Stale

| # | Idade | Título | Status | Link |
|---|-------|--------|--------|------|
| #7664 | ~9 dias | Pluggable memory over MCP | OPEN (2 comments) | [#7664](https://github.com/nearai/ironclaw/issues/7664) |
| #7650 | ~9 dias | Derive run outcomes from runtime evidence | OPEN (large PR) | [#7650](https://github.com/nearai/ironclaw/pull/7650) |
| #7808 | ~2 dias | Memory write path: redaction prerequisite | OPEN (0 comments) | [#7808](https://github.com/nearai/ironclaw/issues/7808) |

### PRs com Alto Risco/Impacto Abertos

| # | Size | Riesgo | Título | Link |
|---|------|--------|--------|------|
| #7491 | XL | medium | omp core-tool contract + benchmark arm | [#7491](https://github.com/nearai/ironclaw/pull/7491) |
| #7516 | XL | low | operator surface for IronHub agent link | [#7516](https://github.com/nearai/ironclaw/pull/7516) |
| #7650 | XL | low | derive run outcomes from runtime evidence | [#7650](https://github.com/nearai/ironclaw/pull/7650) |

**Recomendação:** Priorizar review de [#7491](https://github.com/nearai/ironclaw/pull/7491) (core-tool contract) e [#7821](https://github.com/nearai/ironclaw/pull/7821) (CI setup-rust T1) — ambos são foundation para múltiplos dependentes. O issue [#7808](https://github.com/nearai/ironclaw/issues/7808) precisa de atribuição de owner para desbloquear a track de pluggable memory.

---

*Relatório gerado automaticamente com base em dados do GitHub de 2026-08-23.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do Projeto CoPaw — 2026-08-23

---

## 1. Panorama do Dia

O projeto CoPaw (QwenPaw) apresenta **alta atividade comunitária** em 23 de agosto de 2026, com 6 issues e 6 pull requests atualizados nas últimas 24h. Nenhum merge ou release foi realizado no período, sugerindo que a equipe está em fase de code review e validação de contribuições. A comunidade demonstra engajamento ativo com features, bugs e documentação, com destaque para contribuidores de primeira viagem submetendo PRs relevantes. O projeto mantém um fluxo saudável de feedback, embora alguns bugs críticos (como crashes com imagens de alta resolução) demandem atenção imediata.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto encontra-se na versão **2.1.0** (referenciada em issues #7213 e #7212). Sem novos releases, a equipe mantém foco em estabilização e preparação para próximas versões.

---

## 3. Progresso do Projeto

**Nenhum PR merged ou fechado nas últimas 24h.** Todos os 6 PRs abertos permanecem em revisão:

| PR | Autor | Descrição | Tipo |
|----|-------|-----------|------|
| [#7214](https://github.com/agentscope-ai/QwenPaw/pull/7214) | c020627 | Adiciona Access Policy como quinto layer de segurança no README | docs |
| [#7054](https://github.com/agentscope-ai/QwenPaw/pull/7054) | cillins | Suporte a endpoint remoto para browsers LAN/network | feat(chrome) |
| [#7050](https://github.com/agentscope-ai/QwenPaw/pull/7050) | cillins | Model override picker por cron job | feat(console) |
| [#6808](https://github.com/agentscope-ai/QwenPaw/pull/6808) | ump45nose | Exibição de arquivos markdown customizados de perfil | fix(console) |
| [#7190](https://github.com/agentscope-ai/QwenPaw/pull/7190) | cyruszhang | PyPI runtime path e docker-compose demo para qwenpaw-data | feat |
| [#7187](https://github.com/agentscope-ai/QwenPaw/pull/7187) | niceIrene | Desabilita thinking para geração de títulos de chat | fix(chat) |

**Observação:** 4 de 6 PRs são de *first-time-contributors*, indicando sucesso na captação de novos desenvolvedores.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento:

| Issue | Autor | Comentários | 👍 | Tema |
|-------|-------|-------------|----|------|
| [#7196](https://github.com/agentscope-ai/QwenPaw/issues/7196) | rerbin | 2 | 1 | Colapso opcional de processo de raciocínio |
| [#7043](https://github.com/agentscope-ai/QwenPaw/issues/7043) *(fechada)* | One-sixth | 1 | 0 | Suporte UTF-8 no shell (Windows) |
| [#7215](https://github.com/agentscope-ai/QwenPaw/issues/7215) | NicholaLau | 1 | 0 | Modelos OpenRouter/OpenCode não exibidos na GUI |

**Análise:** A issue #7196 destaca-se pela demanda recorrente de usuários que consideram a visualização do processo de raciocínio dos modelos como "interferência visual severa". A comparação com o Hermes (referência positiva) indica que há espaço para melhoria na UX. A issue foi classificada como `[enhancement]` com 1 reação positiva.

---

## 5. Bugs e Estabilidade

### Bugs reportados nas últimas 24h:

| Issue | Severidade | Descrição | Impacto |
|-------|------------|-----------|---------|
| [#7212](https://github.com/agentscope-ai/QwenPaw/issues/7212) | **🔴 Crítica** | Imagens com dimensões de pixel acima do limite do provider causam crash com `MODEL_EXECUTION_ERROR` em vez de degradação graceful | Encerra conversa inesperadamente |
| [#7215](https://github.com/agentscope-ai/QwenPaw/issues/7215) | 🟡 Média | Modelos OpenRouter/OpenCode não são exibidos na GUI após adição | Funcionalidade incompleta |
| [#7213](https://github.com/agentscope-ai/QwenPaw/issues/7213) | 🟡 Média | Linhas vazias persistentes na saída de conversas | UX degradada |

**Análise:** O bug #7212 é o mais crítico — um crash ao inliner imagens com dimensões excessivas (mesmo dentro do limite de 2MB) indica falha no tratamento de edge cases e necessidade de validação de dimensões antes do envio ao provider.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features solicitadas:

| Issue | Autor | Feature | Potencial Impact |
|-------|-------|---------|------------------|
| [#7196](https://github.com/agentscope-ai/QwenPaw/issues/7196) | rerbin | Toggle para colapsar/expandir processo de raciocínio | UX significativa |
| [#7201](https://github.com/agentscope-ai/QwenPaw/issues/7201) | xiaoka76 | Caps separados por tipo de mídia (imagem/vídeo/áudio) nos settings avançados | Configurabilidade avançada |
| [#7043](https://github.com/agentscope-ai/QwenPaw/issues/7043) | One-sixth | Execução automática de `chcp 65001` no启动 (UTF-8 no Windows) | Compatibilidade Windows |

**Sinais de roadmap:**
- **Customização de UI**: Toggle de thinking (#7196) alinhado com tendência de interfaces minimalistas
- **Configuração granular**: Separação de caps por tipo de mídia (#7201) indica demanda por controle fino
- **Multi-plataforma**: Suporte UTF-8 no Windows (#7043) aponta necessidade de melhor compatibilidade com locale

---

## 7. Resumo de Feedback dos Usuários

### Dores identificadas:

| Dor | Frequência | Contexto |
|-----|------------|----------|
| **Interferência visual do reasoning** | ⭐⭐⭐ Alta | Usuários focados em workflow querembrowsing limpo |
| **Linhas vazias na saída** | ⭐⭐ Reclamação recorrente | Usuários precisam limpar output manualmente |
| **Suporte UTF-8 no Windows** | ⭐⭐ Sistema | Desenvolvedores Windows enfrentam encoding issues |
| **Exibição de modelos customizados** | ⭐ UI | Usuários avançados não veem modelos adicionados |

### Cenários de uso destacados:
- **Debugging de agents/skills**: Usuários precisam de toggle para mostrar/esconder reasoning
- **Ambiente Windows corporativo**: Código page GBK (936) impacta estabilidade do shell tool
- **Provedores diversos**: Suporte a OpenRouter, OpenCode, e configuração por provider

---

## 8. Backlog que Merece Atenção

### Issues sem atividade ou sem resposta prolongada:

| Issue | Idade | Status | Prioridade |
|-------|-------|--------|------------|
| [#6808](https://github.com/agentscope-ai/QwenPaw/pull/6808) | 16 dias | PR aberto | Média |
| [#7043](https://github.com/agentscope-ai/QwenPaw/issues/7043) | 8 dias | Fechada | — |

**Nota:** A issue #7043 foi fechada sem resolução visível no período, indicando possível necessidade de follow-up com o autor (One-sixth).

### PRs aguardando review:

| PR | Idade | Prioridade |
|----|-------|------------|
| [#7054](https://github.com/agentscope-ai/QwenPaw/pull/7054) | 8 dias | Alta (LAN browser support) |
| [#7050](https://github.com/agentscope-ai/QwenPaw/pull/7050) | 8 dias | Média |
| [#6808](https://github.com/agentscope-ai/QwenPaw/pull/6808) | 16 dias | Média |

---

## Indicadores de Saúde do Projeto

| Métrica | Valor | Status |
|---------|-------|--------|
| Issues ativas (24h) | 5 | 🟢 Saudável |
| PRs em revisão (24h) | 6 | 🟢 Ativo |
| Releases (24h) | 0 | 🟡 Pausa de release |
| Bugs críticos abertos | 1 | 🟠 Requer atenção |
| Engajamento comunitário | Alto | 🟢 Positivo |

---

*Relatório gerado em 2026-08-23 com base em dados do GitHub do projeto [CoPaw/QwenPaw](https://github.com/agentscope-ai/QwenPaw).*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-08-23

## 1. Panorama do Dia

O projeto ZeroClaw apresenta **alta atividade** na data de hoje, com 50 issues e 50 PRs atualizados nas últimas 24 horas. Não houve lançamentos de novas versões, indicando que a equipe está em ciclo de desenvolvimento intensivo. Observa-se forte foco em **segurança, arquitetura de memória e refatoração de canais**, com múltiplas RFCs em discussão e bugs críticos de estabilidade sendo tratados. A comunidade demonstra engajamento significativo em questões de compatibilidade Windows, sandbox e integrações com provedores.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24 horas.**

O projeto não publicou novas versões desde o período analisado. A versão mais recente mencionada nos dados é a **v0.8.4** (referenciada em issue de reprodução Alpine).

---

## 3. Progresso do Projeto

### PRs Fechados/Merged Hoje

| PR | Descrição | Impacto |
|---|---|---|
| [#9403](https://github.com/zeroclaw-labs/zeroclaw/pull/9403) | `fix(plugins): bound WASM exports by a wall-clock deadline` | **Crítico** — Adiciona `plugins.limits.call_timeout_ms` com default de 30.000ms, resolvendo timeout ilimitado em plugins WASM |
| [#9436](https://github.com/zeroclaw-labs/zeroclaw/issues/9436) | `bug(config): config init writes template sections that fail strict loader` | **Alto** — Corrige config degradada ao nascer, que fazia `config migrate` sair com código 1 |
| [#9339](https://github.com/zeroclaw-labs/zeroclaw/issues/9339) | `feat(mcp): support custom CA trust for remote MCP servers` | **Alto** — Habilita certificados CA internos para servers MCP em redes privadas |

### PRs Abertos de Alto Impacto (Em Progresso)

- **[#9129](https://github.com/zeroclaw-labs/zeroclaw/pull/9129)** — `feat(plugins): add coherent channel config services` (size:XL) — Adiciona serviços de configuração e secrets para plugins de canal
- **[#9128](https://github.com/zeroclaw-labs/zeroclaw/pull/9128)** — `feat(plugins): add scoped tool secret service` (size:XL) — Serviço de secrets para ferramentas com escopo por instância de plugin
- **[#9324](https://github.com/zeroclaw-labs/zeroclaw/pull/9324)** — `feat(a2a): outbound client config, shared wire-model, tools` (size:XL) — Fase 1 do RFC A2A, implementa ferramentas `a2a_*` e modelo wire v1.0
- **[#10072](https://github.com/zeroclaw-labs/zeroclaw/pull/10072) + [#10075](https://github.com/zeroclaw-labs/zeroclaw/pull/10075)** — Hardening SSRF para `file_download` com classificação NAT64
- **[#10215](https://github.com/zeroclaw-labs/zeroclaw/pull/10215)** — `fix(runtime): suppress final reply duplicated by send_via delivery` — Elimina duplicação de mensagens Telegram

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (por comentários)

| Issue | Título | Comentários | Categoria |
|---|---|---|---|
| [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) | 74 test failures on Windows — Unix-only test commands, path semantics, console encoding | 19 | **Bug P1** |
| [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) | RFC: Decouple memory lifecycle policy from storage backends | 15 | **RFC Arquitetura** |
| [#8780](https://github.com/zeroclaw-labs/zeroclaw/issues/8780) | RFC: Realtime speech-to-speech channel for Gemini Live | 15 | **RFC Canal** |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | [Tracker]: Maintainer decision queue for RFCs and design issues | 13 | **Tracker** |
| [#9103](https://github.com/zeroclaw-labs/zeroclaw/issues/9103) | RFC: separate authoritative memory storage from optional enrichment connectors | 13 | **RFC Arquitetura** |
| [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) | RFC: Granular sandbox policy — filesystem and network restrictions | 10 | **RFC Segurança** |

### Análise dos Principais Temas

**Arquitetura de Memória:** Duas RFCs concorrentes (#6850 e #9103) buscam separar políticas de ciclo de vida de memória do storage backend. A #9103 foi atualizada em 2026-08-22 com revisão após Core REVISE vote, sinalizando progresso.

**Segurança e Sandbox:** A RFC #6996 busca consolidar camadas de filesystem policy (application-layer e OS sandbox como Bubblewrap/Landlock) com profiles de risco do agente.

**Gemini Live:** Proposta de canal de voz real-time com broker contract (rev2).

---

## 5. Bugs e Estabilidade

### Bugs Prioritários (P1)

| Issue | Título | Severidade | Status |
|---|---|---|---|
| [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) | 74 test failures on Windows | S2 - Degraded | **Aberto** |
| [#10230](https://github.com/zeroclaw-labs/zeroclaw/issues/10230) | Daemon startup/reload overflow during agent init | S1 - Blocked | **Aberto** |
| [#10164](https://github.com/zeroclaw-labs/zeroclaw/issues/10164) | `block_high_risk_commands = false` not honored | S2 - Degraded | **Aceito** |
| [#9666](https://github.com/zeroclaw-labs/zeroclaw/issues/9666) | Filesystem listener not cancellation-aware | S1 - Blocked | **Em Progresso** |
| [#9946](https://github.com/zeroclaw-labs/zeroclaw/issues/9946) | Browser tool unbounded subprocess waits | S1 - Blocked | **Em Progresso** |
| [#9255](https://github.com/zeroclaw-labs/zeroclaw/issues/9255) | WASM plugin calls no wall-clock timeout | S2 - Degraded | **Resolvido (#9403)** |

### Bugs Secundários (P2) — Destacados

| Issue | Título | Severidade | Status |
|---|---|---|---|
| [#9718](https://github.com/zeroclaw-labs/zeroclaw/issues/9718) | Telegram duplicate messages (tool_call + content) | S2 | **Em Progresso** |
| [#10073](https://github.com/zeroclaw-labs/zeroclaw/issues/10073) | `StoragePolicy::Rolling` performance regression | S2 | **Em Progresso** |
| [#9708](https://github.com/zeroclaw-labs/zeroclaw/issues/9708) | Daemon stdout/stderr logs unbounded | S2 | **Em Progresso** |
| [#9001](https://github.com/zeroclaw-labs/zeroclaw/issues/9001) | Provider turn failures bury diagnostics | S2 | **Em Progresso** |

### Observações de Estabilidade

- **Windows compatibility** é problema recorrente (#7462 com 74 testes falhando)
- **Timeout/WAShM unbounded** é classe de bug repetida (#9255, #9946, #8560 referenciados)
- **Daemon reliability** apresenta múltiplas issues: overflow (#10230), unbounded logs (#9708), listener cancellation (#9666)
- **Telegram channel** tem problemas de duplicação de mensagens

---

## 6. Pedidos de Features e Sinais de Roadmap

### RFCs em Discussão Ativa

| RFC | Título | Prioridade | Status |
|---|---|---|---|
| [#8780](https://github.com/zeroclaw-labs/zeroclaw/issues/8780) | Realtime speech-to-speech para Gemini Live | P2 | RFC v2 |
| [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) | Decouple memory lifecycle from storage | P2 | Needs-maintainer-review |
| [#9103](https://github.com/zeroclaw-labs/zeroclaw/issues/9103) | Memory storage vs enrichment connectors | P2 | Needs-maintainer-review |
| [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) | Granular sandbox policy | P2 | Em Progresso |
| [#8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396) | Wire protocol first-class | P2 | Needs-maintainer-review |
| [#10050](https://github.com/zeroclaw-labs/zeroclaw/issues/10050) | Verbatim channel send over gateway | P2 | Needs-maintainer-review |
| [#10069](https://github.com/zeroclaw-labs/zeroclaw/issues/10069) | Agent Portability | P2 | Em Progresso |
| [#8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850) | Runtime plugins via WASM (vs compile-time flags) | P2 | Em Progresso |

### Features Solicitadas

| Issue | Título | Categoria |
|---|---|---|
| [#10141](https://github.com/zeroclaw-labs/zeroclaw/issues/10141) | Sessions usability improvements | UX |
| [#7790](https://github.com/zeroclaw-labs/zeroclaw/issues/7790) | Zerocode parity with web dashboard | TUI |
| [#5607](https://github.com/zeroclaw-labs/zeroclaw/issues/5607) | Deterministic precondition gates for cron jobs | Cron |
| [#9945](https://github.com/zeroclaw-labs/zeroclaw/issues/9945) | Browser tool exposes only 16 of 100+ commands | Browser Tool |

### Sinais de Roadmap

- **v0.9.0** — Tracker [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) coordena auth, security hardening, gateway boundaries, A2A e breaking changes
- **Plugin Architecture** — Reforço contínuo com serviços de config (#9129) e secrets (#9128)
- **A2A Protocol** — Implementação fase 1 em [#9324](https://github.com/zeroclaw-labs/zeroclaw/pull/9324)
- **Agent Portability** — Proposta de bundles exportáveis (#10069)

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

1. **Gerenciamento de sessões** (#10141): Usuários reclamam de dificuldade em acessar sessões anteriores e copiar snippets de código — UX do zerocode precisa melhorar para parity com web dashboard.

2. **Compatibilidade Windows** (#7462): 74 testes falhando no Windows 11 (Simplified Chinese, code page 936) — CI não captura porque roda só em Linux.

3. **Duplicação de mensagens Telegram** (#9718): Quando modelo retorna `tool_calls` + `content`, Telegram entrega ambos — frustração com reliability do canal.

4. **Browser tool limitado** (#9945): Apenas 16 de 100+ comandos expostos — iframes, dialogs, tabs e form controls inacessíveis.

5. **Config nascendo degradada** (#9436): `config init` gera template inválido para strict loader — migração falha com exit 1.

6. **Memory architecture confusa** (#6850, #9103): Limite entre durable storage e lifecycle policy não claro, causando reinvenção em cada gateway/canal/backend.

### Cenários de Uso Identificados

- **Operadores headless** buscando parity TUI/web via zerocode (#7790)
- **Usuários de redes privadas** precisando de custom CA para MCP servers (#9339)
- **Agentes em sandbox** com políticas granulares de filesystem/network (#6996)
- **Integrações multi-canal** com necessidade de send verbatim (#10050)

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta/Estagnadas

| Issue | Título | Criado | Última Atualização | Days Idle |
|---|---|---|---|---|
| [#5607](https://github.com/zeroclaw-labs/zeroclaw/issues/5607) | Deterministic precondition gates for cron | 2026-04-10 | 2026-08-22 | ~134 dias |
| [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) | v0.9.0 tracker | 2026-06-09 | 2026-08-22 | ~75 dias |

### Issues com Maintainer Review Pendente

| Issue | Título | Comentários |
|---|---|---|
| [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) | Memory lifecycle RFC | 15 |
| [#8780](https://github.com/zeroclaw-labs/zeroclaw/issues/8780) | Gemini Live channel RFC | 15 |
| [#8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396) | Wire protocol RFC | 9 |
| [#9103](https://github.com/zeroclaw-labs/zeroclaw/issues/9103) | Memory storage RFC | 13 |
| [#10050](https://github.com/zeroclaw-labs/zeroclaw/issues/10050) | Verbatim channel send RFC | 3 |

### Riscos Identificados

1. **P1s acumulados**: 6 bugs P1 em aberto, incluindo daemon crash (#10230) e security policy bypass (#10164)
2. **RFC queue**: 7 RFCs aguardando maintainer decision — risco de stagnation
3. **Tech debt em testes**: Testes com wall-clock timeouts (#10251) e dependência Linux-only
4. **StoragePolicy regression**: Performance issue em produção sob volume sustentado (#10073)

---

## Métricas Consolidada do Período

| Métrica | Valor |
|---|---|
| Issues ativas | 43 |
| Issues fechadas (24h) | 7 |
| PRs abertos | 49 |
| PRs merged/fechados | 1 |
| Novas releases | 0 |
| Bugs P1 em aberto | 6 |
| RFCs pendentes de decisão | 7 |
| Issues com +10 comentários | 5 |

**Saúde Geral**: O projeto está em fase активная de desenvolvimento com foco em segurança (SSRF hardening, sandbox, WASM timeouts) e arquitetura (memory lifecycle, A2A, plugins). A taxa de atividade é alta, mas há acúmulo de bugs P1 e RFCs pendentes de decisão que merecem atenção da equipe de maintainers.

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*