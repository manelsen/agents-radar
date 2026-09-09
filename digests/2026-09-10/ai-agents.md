# Resumo diário do ecossistema de agentes de IA 2026-09-10

> Issues: 0 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-09-09 22:10 UTC

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

**Data de Referência:** 2026-09-10
**Projetos Analisados:** NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw, ZeroClaw

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source demonstra maturidade crescente com abordagens arquiteturalmente distintas. **ZeroClaw e Hermes Agent** lideram em volume de atividade (50+ eventos/24h), enquanto **NanoBot e CoPaw** equilibram alta produção com saúde operacional estável. **PicoClaw e IronClaw** ocupam nichos especializados com cadência moderada. **NullClaw** permanece como referência inativa, sugerindo projeto em standby ou reestruturação. A ausência de releases formais em todos os projetos indica foco coletivo em estabilização pré-lançamento. Os temas dominantes — sandboxing de segurança, interfaces multi-canal, memória persistente e UX mobile — revelam convergência de mercado em problemas fundamentais de agentes de produção.

---

## 2. Comparação de Atividade

| Projeto | Issues (abertas/fechadas/24h) | PRs (abertos/fechados/24h) | Releases (24h) | Avaliação de Saúde |
|---------|------------------------------|---------------------------|----------------|-------------------|
| **NullClaw** | — / — / 0 | — / — / 0 | 0 | 🟡 Inativa (referência) |
| **NanoBot** | 4 / — / 9 merged | 12 / 9 / 21 | 0 | ✅ Alta — estável e produtivo |
| **Hermes Agent** | 45 / 5 / 50 | 46 / 4 / 50 | 0 | 🟡 Muito ativa, mas backlog crescendo |
| **PicoClaw** | — / 3 / 3 | 4 / 1 / 5 | 0 | 🟢 Moderada — melhorando |
| **IronClaw** | 1 / — / 6 | 4 / 2 / 6 | 0 | 🟢 Moderada — saudável |
| **CoPaw** | 11 / 11 / 22 | 26 / 8 / 34 | 0 | ✅ Alta — trajetória positiva |
| **ZeroClaw** | 34 / — / 37 | 49 / 1 / 50 | 0 | 🔴 Arquitetural forte, operacional fraca |

**Observação Crítica:** ZeroClaw apresenta o maior gargalo — 49 PRs abertos versus apenas 1 merge em 24h, contrastando com NanoBot que fechou 9 PRs no mesmo período.

---

## 3. Posicionamento do Projeto Principal

### Líderes por Categoria

| Categoria | Projeto | Diferencial |
|-----------|---------|-------------|
| **Volume de Atividade** | ZeroClaw / Hermes Agent | 50+ eventos/24h |
| **Throughput de Revisão** | NanoBot | 9 merges/24h (taxa 42%) |
| **Estabilidade Operacional** | NanoBot / CoPaw | Baixo backlog, poucos P1s |
| **Maturidade de Design** | ZeroClaw | 6+ RFCs ativas com debate robusto |
| **Inovação Mobile** | CoPaw | PR #7378 (Expo/React Native) |
| **Nicho Edge/IoT** | PicoClaw | Proposta worker mode para Raspberry Pi |

### Análise Comparativa

**NanoBot** emerge como projeto mais equilibrado: alta atividade combinada com saúde operacional estável. Seu foco em WebUI-first (6+ PRs), segurança de sandbox (macOS Seatbelt) e diversificação de providers (Serply, OpenRouter) demonstra estratégia de produto coerente. A ausência de P1s de segurança em aberto e backlog controlado de 2 PRs >30 dias sugere capacidade de manutenção adequada.

**ZeroClaw**, apesar do volume impressionante de atividade, apresenta risco operacional. Os P1s #9816 (budget caps inoperantes, impacto financeiro direto) e #10697 (perda de contexto em tool calls) requerem atenção imediata. A disparidade entre 49 PRs abertos e 1 merge sugere gargalo de review que pode desmotivar contribuidores.

**Hermes Agent** concentra 3 P1s de segurança abertos simultaneamente, com foco excessivo em bugs Windows desktop. A comunidade está claramente frustrada (186 comentários no skills index issue), indicando necessidade de investimento em automação de infraestrutura.

---

## 4. Focos Técnicos Compartilhados

### Necessidades Transversais Identificadas

| Necessidade | Projetos Afetados | Evidência |
|-------------|-------------------|-----------|
| **Segurança de Sandbox** | NanoBot, ZeroClaw, PicoClaw | PR #5628 (Seatbelt), RFC #6996 (granular policy), Issue #3269 (MCP hang) |
| **Persistência de Memória** | NanoBot, CoPaw, ZeroClaw | Issues #5721, #7656, RFC #10526 |
| **Multi-Canal (Discord/Telegram)** | NanoBot, Hermes Agent, PicoClaw, IronClaw | Correções de UX em todos |
| **Provider Diversification** | NanoBot, ZeroClaw | Serply (#5437), OpenRouter Images (#5718), OpenAI Responses API (ZeroClaw) |
| **WebUI / Interface** | NanoBot, Hermes Agent, CoPaw | 6+ PRs NanoBot, múltiplos bugs Hermes desktop, mobile CoPaw |

### Padrão de Convergência

Asobrevivência de 4+ projetos investindo simultaneamente em:

1. **Sandboxing multiplataforma** — indica adoção em produção onde isolamento é requisito
2. **Memória cross-session** — evidencia shift de agentes stateless para stateful
3. **MCP (Model Context Protocol)** — PicoClaw, IronClaw, CoPaw demonstram adoção crescente

---

## 5. Análise de Diferenciação

### Vetores de Posicionamento

| Projeto | Público-Alvo Implícito | Arquitetura Diferenciadora | Estratégia de Mercado |
|---------|------------------------|---------------------------|------------------------|
| **NanoBot** | Desenvolvedores web, power users | WebUI-first, providers configuráveis | Produtividade desktop |
| **Hermes Agent** | Usuários Windows, enterprise | Desktop-first, OAuth integration | Assistente pessoal multi-perfil |
| **CoPaw** | Mobile users, home-lab enthusiasts | QwenPaw mobile, Expo, ntfy integration | Acessibilidade mobile e self-hosted |
| **ZeroClaw** | Desenvolvedores enterprise, arquitetos | RFC-driven, session ownership, WASM plugins | Extensibilidade máxima |
| **PicoClaw** | IoT/edge, comunidades asiáticas (QQ) | Worker mode distribuído, DeltaChat | Hardware limitado, privacidade |
| **IronClaw** | Multi-tenant, enterprise MCP | SEP-414 attribution, hosted-MCP | Infraestrutura MCP |

### Diferenças Técnicas Notáveis

- **ZeroClaw** adota arquitetura "runtime-owned sessions" (RFC #9487), diferenciando-se de peers stateless
- **CoPaw** investe em mobile nativo (React Native) enquanto peers priorizam web
- **PicoClaw** é o único com proposta formal de arquitetura distribuída edge (Issue #3345)
- **IronClaw** foca em attribution e multi-tenancy para MCP enterprise

---

## 6. Tração e Maturidade da Comunidade

### Ranking de Engajamento

| Posição | Projeto | Métrica de Engajamento | Indicador de Maturidade |
|---------|---------|------------------------|-------------------------|
| 1 | **Hermes Agent** | 186 comentários em issue de automação quebrada | Community-driven debugging |
| 2 | **ZeroClaw** | 36 comentários em RFC de arquitetura | Design participativo |
| 3 | **CoPaw** | 8 PRs merged, 5.02pp coverage gain | Qualidade de codebase |
| 4 | **NanoBot** | 9 merges, nenhum P1 >7 dias | Processo de triagem eficiente |
| 5 | **IronClaw** | PRs revisados no mesmo dia | Review turnaround rápido |
| 6 | **PicoClaw** | Bug crítico resolvido após 51 dias | Triagem lenta mas eficaz |

### Sinais de Saúde Comunitária

**Positivos:**
- **CoPaw**: Issues fechadas = abertas (taxa 1:1), indicando backlog gerenciável
- **NanoBot**: Proposta de parceria com MemCode (#5721) demonstra attractor de mercado
- **IronClaw**: Autor kirikov com múltiplas contribuições de qualidade (#8088, #8089)

**Preocupantes:**
- **Hermes Agent**: 3 P1s simultâneos indica dívida técnica acumulando
- **ZeroClaw**: PRs bloqueados há >60 dias (#8546, #8763) sugerem gargalo de decisão
- **PicoClaw**: 2 bugs resolvidos após 51-52 dias, mas nenhum PR revisado em >7 dias

---

## 7. Sinais de Tendência

### Tendências Extraídas do Feedback

| Tendência | Projetos Evidenciando | Implicação de Mercado |
|-----------|----------------------|----------------------|
| **Mobile-first demanda** | CoPaw (#7378, #7177), Hermes (#11911) | Usuários esperam experiência nativa além do browser |
| **Self-hosted resilience** | CoPaw (ntfy), PicoClaw (edge), IronClaw (operator packages) | Crescimento de home-lab e infraestrutura privada |
| **MCP como padrão** | PicoClaw, IronClaw, CoPaw | Model Context Protocol ganhando tração como middleware |
| **Multi-model flexibility** | NanoBot (Serply, OpenRouter), ZeroClaw (#9809) | Usuários querem انتخاب provider sem lock-in |
| **Budget controls críticos** | ZeroClaw (#9816) | Adoção enterprise exige governança financeira |
| **3-session cap frustração** | Hermes (#70421, 7👍) | Power users limitados por UX decisions |

### Tendências Arquiteturais

1. **De Stateless para Stateful**: Memória persistente (#5721, #7656) e session ownership (ZeroClaw RFC) indicam shift
2. **De Monolítico para Modular**: ZeroClaw WASM plugins, PicoClaw worker mode, IronClaw hosted-MCP catalogs
3. **De Web para Multi-Plataforma**: Mobile apps, desktop apps, edge devices

### Recomendações para Desenvolvedores

| Audiência | Recomendação |
|-----------|-------------|
| **Contribuidores** | Priorizar CoPaw e NanoBot — saúde operacional permite merge mais rápido |
| **Empresas** | Avaliar ZeroClaw para extensibilidade, CoPaw para mobile, NanoBot para produtividade |
| **Pesquisadores** | Acompanhar RFCs ZeroClaw (#6996, #9487, #10076) — design de próxima geração |
| **DevOps** | CoPaw para self-hosted (ntfy), PicoClaw para edge computing |

---

## Conclusão

O ecossistema demonstra maturização acelerada com convergência em problemas fundamentais (segurança, memória, multi-canal) e diferenciação em público-alvo e arquitetura. **NanoBot e CoPaw** oferecem o melhor equilíbrio atual entre atividade e saúde operacional. **ZeroClaw** representa a vanguarda arquitetural, mas precisa resolver gargalo de review. **Hermes Agent** requer investimento urgente em estabilidade Windows. A tendência clara é movimento de agentes stateless para stateful, de web-only para multi-plataforma, e de lock-in provider para flexibilidade operacional.

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-09-10

---

## 1. Panorama do Dia

O projeto NanoBot apresenta **alta atividade de desenvolvimento** em 10 de setembro de 2026. Nas últimas 24 horas, foram registradas **4 issues** e **21 PRs** atualizados, com **9 merge/fechamentos** indicando entrega contínua. Não houve lançamentos de novas versões, evidenciando foco em estabilização e refinamento. A comunidade demonstra engajamento significativo com contributions em múltiplas frentes: WebUI (interface), canais (Discord/Telegram), segurança de sandbox, e integrações com provedores. O estado geral é saudável, com correções sendo priorizadas e melhorias incrementais em andamento.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24 horas.**

O projeto encontra-se em período de desenvolvimento ativo sem疋tag de versão formalizada. Contributions recentes parecem direcionadas à branch `main` para incorporação na próxima release.

---

## 3. Progresso do Projeto

### PRs Closed/Merged (9 total)

| # | Título | Impacto |
|---|--------|---------|
| [#5662](https://github.com/HKUDS/nanobot/pull/5662) | `feat(providers): send x-opencode-session header` | **Crítico** — Resolve perda de cache de prompts e erros potenciais com OpenCode após 2026-09-06 |
| [#5628](https://github.com/HKUDS/nanobot/pull/5628) | `feat(exec): add macOS Seatbelt sandbox backend` | **Segurança** — Adiciona sandbox nativo para subprocessos shell em macOS via `/usr/bin/sandbox-exec` |
| [#5717](https://github.com/HKUDS/nanobot/pull/5717) | `fix(webui): preserve project when creating a topic` | **UX** — Corrige seleção de projeto ao criar tópico via menu de contexto |
| [#5703](https://github.com/HKUDS/nanobot/pull/5703) | `perf(webui): reduce repeated work and bound history rendering` | **Performance** — Otimiza renderização em conversas longas e respostas com muitas ferramentas |
| [#5716](https://github.com/HKUDS/nanobot/pull/5716) | `fix(webui): refresh skill suggestions when opening picker` | **UX** — Skills instaladas dinamicamente pelo agente aparecem imediatamente no picker |
| [#5714](https://github.com/HKUDS/nanobot/pull/5714) | `fix(webui): keep edit diffs outside reasoning folds` | **UX** — Diffs de edição permanecem acessíveis fora de folds colapsáveis |
| [#5705](https://github.com/HKUDS/nanobot/pull/5705) | `feat(tui): add /usage context and token charts` | **Observabilidade** — Painel de métricas de contexto e usage de tokens no terminal |
| [#5713](https://github.com/HKUDS/nanobot/pull/5713) | `fix(webui): prevent italic activity labels from clipping` | **UX** — Labels em itálico não têm mais caracteres cortados |
| [#5712](https://github.com/HKUDS/nanobot/pull/5712) | `fix(webui): preserve less-than comparisons in streaming math` | **Bug Fix** — Evita truncamento de respostas com fórmulas matemáticas contendo `<` |

---

## 4. Temas Quentes da Comunidade

### Issues com Engajamento

1. **[#5721](https://github.com/HKUDS/nanobot/issues/5721) — Durable memory across sessions** (0 👍, 0 comentários)
   - **Proposta de integração** de Vivek Gupta (Founder & CEO, MemCode)
   - Solicita memória persistente entre sessões/deployments via backend MemCode
   - **Análise**: Oportunidade de parceria estratégica; memória compartilhada é demanda crescente para workflows multi-agente

2. **[#5647](https://github.com/HKUDS/nanobot/issues/5647) — WebUI session title not generated** (0 👍, 1 comentário)
   - Relacionado a PR #5528 (`a8ffe0f1`); problema emerge quando frontend envelope lacks `webui` flag
   - **Análise**: Edge case em sessões unificadas; impacta nomenclatura de abas

### PRs em Destaque

1. **[#5536](https://github.com/HKUDS/nanobot/pull/5536) — Security fix: fail closed when restricted shell lacks sandbox** (labels: `bug`, `security`, `priority: p1`)
   - Corrigido o problema onde `ExecTool` confiava em checagens de path que não previnem symlinks, shell expansion ou command substitution
   - **⚠️ Alta Prioridade** — Flag de conflito; merge aguardando resolução

2. **[#5437](https://github.com/HKUDS/nanobot/pull/5437) — Add Serply web search provider** (labels: `feature`, `provider`)
   - Adiciona provedor alternativo ao Serper para web search via API Serply
   - **Análise**: Diversifica opções de busca para usuários; aumenta resiliência contra dependência de fornecedor único

3. **[#5718](https://github.com/HKUDS/nanobot/pull/5718) — OpenRouter native image generation API** (labels: `provider`, `feature`, `priority: p2`)
   - Suporte à API nativa de geração de imagens do OpenRouter
   - **Análise**: Mantém compatibilidade com serviço; expande capacidades multimodais

---

## 5. Bugs e Estabilidade

### Issues Abertas (Bugs)

| # | Descrição | Severidade | Canal |
|---|-----------|------------|-------|
| [#5719](https://github.com/HKUDS/nanobot/issues/5719) | Discord: compaction notices ignoram `sendProgress: false`, enviando mensagens "Compressing context…" e "Context compacted." | **P2** | Discord |
| [#5647](https://github.com/HKUDS/nanobot/issues/5647) | Session title não gerado quando envelope falta flag `webui` | **P2** | WebUI |

### PRs Abertas (Bug Fixes)

| # | Título | Prioridade | Status |
|---|--------|------------|--------|
| [#5720](https://github.com/HKUDS/nanobot/pull/5720) | `fix(channels): make automatic compaction notices follow send_progress` | P2 | Aberto → Resolve #5719 |
| [#5715](https://github.com/HKUDS/nanobot/pull/5715) | `fix(webui): honor persisted session marker for titles` | P2 | Aberto |
| [#4819](https://github.com/HKUDS/nanobot/pull/4819) | `fix(memory): replace WeakValueDictionary with plain dict for consolidation locks` | P2 | Aberto (desde 2026-07-06) |
| [#4820](https://github.com/HKUDS/nanobot/pull/4820) | `fix(runtime): reject non-string web fetch URLs` | P2 | Aberto (desde 2026-07-06) |
| [#5711](https://github.com/HKUDS/nanobot/pull/5711) | `fix(command): rename hyphenated slash commands to Telegram-safe underscores` | P2 | Aberto |

### Análise de Estabilidade

- **P1 (Crítico)**: 1 fix pendente — [#5536](https://github.com/HKUDS/nanobot/pull/5536) (segurança do sandbox)
- **P2 (Alto)**: 6 bugs em fila de correção
- **Conflitos**: 3 PRs apresentam conflitos (`#5437`, `#5498`, `#4819`)
- **Observação**: Bugs #4819 e #4820 estão abertos há **65+ dias** sem merge; merecem atenção

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| # | Título | Descrição | Potencial |
|---|--------|-----------|-----------|
| [#5721](https://github.com/HKUDS/nanobot/issues/5721) | Durable memory across sessions | Integração com MemCode para memória persistente entre deployments | **Alto** — Parceria estratégica |
| [#5710](https://github.com/HKUDS/nanobot/pull/5710) | Organize projects and simplify sidebar | Dedicar diretório para projetos; organizar tópicos e automações | **UX** — Melhora navegação |
| [#5704](https://github.com/HKUDS/nanobot/pull/5704) | Expand and organize settings with autosave | Expor opções runtime via endpoint mutável; autosave para edits comuns | **UX** — Reduz fricção |
| [#5498](https://github.com/HKUDS/nanobot/pull/5498) | Unify onboarding in Agent TUI | Alinhar labels de configuração em colunas; separar headings com whitespace | **Polish** — Consistencia visual |

### Sinais de Roadmap Inferidos

1. **WebUI First**: 6+ PRs focados em WebUI indicam priorização da interface web
2. **Multi-Canal**: Correções para Discord e Telegram sugerem investimento em canais
3. **Segurança de Exec**: Sandbox improvements (Seatbelt + fail-closed) indicam foco em isolamento
4. **Provider Diversification**: Serply, OpenRouter Image Generation demonstram estratégia de não-lock-in

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Categoria | Problema | Issue |
|-----------|----------|-------|
| **Memória** | Necessidade de memória persistente entre sessões e deployments | [#5721](https://github.com/HKUDS/nanobot/issues/5721) |
| **Discord UX** | Mensagens de compaction interferem em chats com `sendProgress: false` | [#5719](https://github.com/HKUDS/nanobot/issues/5719) |
| **Telegram Commands** | Comandos com hífen não funcionam como comandos no Telegram (não são clicáveis/autocompletados) | [#5711](https://github.com/HKUDS/nanobot/pull/5711) |
| **WebUI Session** | Títulos de sessão se perdem após restart do gateway | [#5715](https://github.com/HKUDS/nanobot/pull/5715) |

### Cenários de Uso Emergentes

- **Multi-sessão Unificada**: Issues com `unifiedSession` e títulos demonstram uso em ambientes compartilhados
- **Extensibilidade via Skills**: Pickers de skills dinâmicas indicam ecossistema de plugins
- **Produção com Provedores Diversos**: Demanda por Serply e OpenRouter image generation reflete uso em produção

### Satisfação Indicada

- 1 👍 em [#5661](https://github.com/HKUDS/nanobot/issues/5661) (OpenCode header) indica alinhamento com necessidade de otimização
- PRs de UX (labels, clipping, streaming math) resolvem irritantes específicos de interface

---

## 8. Backlog que Merece Atenção

### Issues/PRs Sem Resposta há >30 Dias

| # | Tipo | Título | Idade | Prioridade |
|---|------|--------|-------|------------|
| [#4819](https://github.com/HKUDS/nanobot/pull/4819) | PR | `fix(memory): replace WeakValueDictionary with plain dict` | **65 dias** | P2 |
| [#4820](https://github.com/HKUDS/nanobot/pull/4820) | PR | `fix(runtime): reject non-string web fetch URLs` | **65 dias** | P2 |

### Recomendações de Priorização

1. **[#4819](https://github.com/HKUDS/nanobot/pull/4819)** — Bug de locks de consolidação pode causar race conditions em memória; merece merge ou decisão de encerramento
2. **[#4820](https://github.com/HKUDS/nanobot/pull/4820)** — Validação de URL é questão de robusteza; baixa complexidade, alto valor
3. **[#5536](https://github.com/HKUDS/nanobot/pull/5536)** — Fix de segurança com conflitos; necessidade de resolução para proteger usuários

### Métricas de Saúde do Backlog

- **Total de PRs abertos**: 12
- **PRs com conflitos**: 3 (25%)
- **Bugs P1 em aberto**: 1 (segurança)
- **Bugs P2 em aberto**: 6
- **Issues/PRs >30d sem movimento**: 2

---

## Indicadores de Saúde do Projeto

| Indicador | Status | Tendência |
|-----------|--------|-----------|
| Atividade (PRs/24h) | 21 atualizados, 9 fechados | ✅ Alta |
| releases (24h) | 0 | ⚠️ Nenhuma esta semana |
| Bugs críticos (P1) | 1 em aberto | 🟡 Requer atenção |
| Backlog antigo (>30d) | 2 PRs | 🔴 Requer triagem |
| Conflitos em PRs | 3 | 🟡 Requer resolução |

**Veredicto Geral**: Projeto ativo e saudável, com foco em stabilização de UX e segurança. Atenção recomendada aos PRs de segurança (#5536) e backlog antigo (#4819, #4820).

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-09-10

---

## 1. Panorama do Dia

O Hermes Agent mantém altíssima atividade em 10 de setembro de 2026, com **50 issues e 50 PRs atualizados nas últimas 24h**, indicando uma comunidade extremely ativa. Não há releases novas, sugerindo que o time está focado em estabilidade e preparação para próxima versão. A distribuição de issues abertas/ativas (45) versus fechadas (5) mostra que o backlog está crescendo, enquanto PRs abertos (46) versus merged/fechados (4) revela gargalo na revisão de código. Os temas dominantes são **estabilidade do desktop no Windows** (vários bugs P1-P2) e **segurança de sessões/perfis**. A proporção de bugs críticos (P1) abertos continua elevada — 3 ativos — sinalizando pressão sobre a equipe de manutenção.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.** O projeto está em período de desenvolvimento ativo sem distribuição de versão nova. Não há notas de migração ou breaking changes a reportar neste ciclo.

---

## 3. Progresso do Projeto

### PRs fechados/merged hoje:

| # | Título | Impacto |
|---|--------|---------|
| [#106912](https://github.com/NousResearch/hermes-agent/pull/106912) | `fix(web/firecrawl): wait for lazy-loaded content before snapshotting scrape` | Corrigido scraping incompleto do Firecrawl que retornava resultados truncados sem sinal de erro |
| [#106275](https://github.com/NousResearch/hermes-agent/pull/106275) | `fix(agent): stop overflowing partial stream recovery` | Resolvida recuperação de stream que gerava stubs duplicados no histórico — impacta estabilidade de sessões longas |
| [#105145](https://github.com/NousResearch/hermes-agent/issues/105145) (issue closed) | Windows desktop `hermes update` exit 8 after successful update | Bug de validação de diretório de trabalho pós-update no Windows finalmente fechado |

### PRs abertos com maior potencial estratégico:

- [#106920](https://github.com/NousResearch/hermes-agent/pull/106920) — **Integração FND-02 a FND-09** (Clicksmith foundation artifacts): Avança capacidades de Execution Identity, Execution State, Policy & Authorization Boundary e Evidence Model. Representa evolução arquitetural significativa.
- [#105863](https://github.com/NousResearch/hermes-agent/pull/105863) — **Claude Subscription DirectSDK (Experimental)**: Permite uso da Claude CLI instalada localmente com ferramentas Hermes, mantendo histórico e aprovações. Rota Sonnet 5 1M.
- [#103890](https://github.com/NousResearch/hermes-agent/pull/103890) — **Honcho per-author writes**: Cada mensagem em sessão compartilhada escrita sob peer do autor, DMs de bots em sessão própria — impacta isolamento de contexto em multi-usuário.

---

## 4. Temas Quentes da Comunidade

### Discussões mais intensos (por comentários):

1. **[#66616](https://github.com/NousResearch/hermes-agent/issues/66616) — Skills index está stale há 29.8h (limite 26h)** — 186 comentários
   - **Análise**: O sistema de automação de integração do Skills Hub quebrou silenciosamente. O workflow `.github/workflows/skills-index.yml` não está executando no cron esperado. Comunidade debate tanto a causa raiz quanto estratégia de monitoramento futuro.
   - **Tags**: `type/bug`, `P3`, `sweeper:risk-automation`, `comp/skills`
   - **Sentimento**: Frustração com silêncio do sistema, mas engajamento técnico construtivo.

2. **[#88584](https://github.com/NousResearch/hermes-agent/issues/88584) — Automated Nous integration blocked** — 81 comentários
   - **Análise**: A integração automatizada Nous→Enterkey está bloqueada por conflitos em `cron/jobs.py`. O dashboard updater permanece na última versão testada do Enterkey release. Workflow run público mostra extensão.
   - **Tags**: `invalid`, `comp/cron`, `P3`
   - **Sentimento**: Discussão operacional longa, possivelmente estagnada por necessidade de decisão de alinhamento entre projetos.

3. **[#105145](https://github.com/NousResearch/hermes-agent/issues/105145) — Windows desktop update FAILED (exit 8) com post-update verificação de working directory** — 17 comentários
   - **Análise**: Bug fechável, mas demonstra problema recorrente de validação pós-update no Windows. Validação resolve `cwd` errado após update bem-sucedido.
   - **Tags**: `type/bug`, `P1`, `platform/windows`, `area/install-update`
   - **Status**: Closed — aguardando validação de que fix foi efetivo.

### Issues com mais reações positivas (thumbs up):

| # | Título | 👍 |
|---|--------|---|
| [#70421](https://github.com/NousResearch/hermes-agent/issues/70421) | Desktop — show all chats under project (remove 3-session preview cap) | 7 |
| [#11911](https://github.com/NousResearch/hermes-agent/issues/11911) | Native Mobile App (iOS & Android) with Voice Calling | 2 |
| [#356](https://github.com/NousResearch/hermes-agent/issues/356) | Feature: Acceptance Criteria & Independent Judge for Sub-agent Delegation | 2 |

**Sinal de comunidade**: A demanda por **remover limite de 3 sessões no preview do desktop** tem maior validação social, indicando que power users estão sendo limitados no workflow multi-projeto.

---

## 5. Bugs e Estabilidade

### P1 — Críticos (requerem atenção imediata):

| # | Título | Componente | Status |
|---|--------|------------|--------|
| [#48860](https://github.com/NousResearch/hermes-agent/issues/48860) | OAuth prompt sanitizer greedy-replaces: `hermes-agent.nousresearch.com` → `claude-code.nousresearch.com` (NXDOMAIN) | `comp/agent`, `provider/anthropic` | **OPEN** — substitui URLs legítimas de documentação, quebrando links em contextos OAuth |
| [#105629](https://github.com/NousResearch/hermes-agent/issues/105629) | Desktop build fails on Windows: electron-builder "updating asar integrity" rewrite quebra afterPack rcedit stamp | `comp/desktop`, `platform/windows` | **OPEN** — build determinístico quebrado no Windows |
| [#95849](https://github.com/NousResearch/hermes-agent/pull/95849) | Co-hosted models inherit stale reasoning (PR aberto, não merged) | `comp/agent`, `provider/openai` | **OPEN** — afeta sessões multi-modelo com mesma Responses endpoint |

### P2 — Altos (impactam experiência significativa):

| # | Título | Componente |
|---|--------|------------|
| [#106665](https://github.com/NousResearch/hermes-agent/issues/106665) | Desktop rendering/click issues at 125% scaling + extended use (grouping, lag, unresponsive) |
| [#102792](https://github.com/NousResearch/hermes-agent/issues/102792) | Desktop new session loses all owner metadata → "Couldn't open this session" on multi-profile |
| [#79833](https://github.com/NousResearch/hermes-agent/issues/79833) | Inline embed (X/Twitter) de outra sessão fica preso sobre a UI inteira |
| [#105247](https://github.com/NousResearch/hermes-agent/issues/105247) | Group chat harvest window (5 min) < hard turn cap (20 min) → late replies perdidas |
| [#92644](https://github.com/NousResearch/hermes-agent/issues/92644) | Scanner bloqueia SOUL.md legítimo sobre prompt injection defenses |
| [#106909](https://github.com/NousResearch/hermes-agent/issues/106909) | Rootless Docker: iron-proxy binds to unreachable loopback — segurança em containers comprometida |

### P3 — Médios (regressões e annoyances):

Concentração em:
- **Windows DPI/transparência**: [#106285](https://github.com/NousResearch/hermes-agent/issues/106285) (janela transparente ao trocar displays), [#106359](https://github.com/NousResearch/hermes-agent/issues/106359) (TCP port exhaustion → zombie gateway)
- **Web scraping**: [#99533](https://github.com/NousResearch/hermes-agent/issues/99533), [#106904](https://github.com/NousResearch/hermes-agent/issues/106904) (Firecrawl returning empty results sem erro)
- **Desktop context meter**: [#94001](https://github.com/NousResearch/hermes-agent/issues/94001) (cross-session contamination)

### ⚠️ Alerta de Segurança:
- **[#106775](https://github.com/NousResearch/hermes-agent/issues/106775)** — 6 high-severity dev-tree advisories com fixes disponíveis há >14 dias. O PR associado não está listados, sugerindo backlog de update de dependências.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features com maior momentum:

1. **[#11911](https://github.com/NousResearch/hermes-agent/issues/11911) — Native Mobile App (iOS & Android) com Voice Calling** (7 👍)
   - Demandado há >4 meses, gaining traction
   - **Contexto estratégico**: Posicionaria Hermes como assistente pessoal mobile nativo, não apenas CLI/desktop
   - **Complexidade**: Requer infraestrutura de voz, STT/TTS, push notifications, possibly real-time WebRTC

2. **[#70421](https://github.com/NousResearch/hermes-agent/issues/70421) — Remove 3-session preview cap no desktop** (7 👍)
   - Recurso de usabilidade simples com alto ROI
   - Já tem PR equivalente em discussão

3. **[#106267](https://github.com/NousResearch/hermes-agent/issues/106267) — Per-tool-scope YOLO mode via `/yolo allow/deny`**
   - Flexibiliza approve/deny para categorias específicas de ferramentas
   - Addressable via CLI flag `HERMES_YOLO_MODE=1` atual é all-or-nothing

4. **[#106258](https://github.com/NousResearch/hermes-agent/issues/106258) — Natural language resolution para slash commands**
   - "switch to grok oauth" ao invés de `/model xai-oauth`
   - Reduz fricção para novos usuários

5. **[#356](https://github.com/NousResearch/hermes-agent/issues/356) — Acceptance Criteria & Independent Judge for Sub-agent Delegation**
   - Inspirado em OpenPlanter: parent especifica acceptance criteria, sistema valida outcome
   - Avança autonomia de agentes multi-nível
   - Closed — indica interesse mas necessidade de champion interno

### Features de infraestrutura emergentes:

- **[#106908](https://github.com/NousResearch/hermes-agent/issues/106908) / [#106913](https://github.com/NousResearch/hermes-agent/pull/106913)** — Cron with future `start_at` para recurring jobs (PR aberto)
- **[#106261](https://github.com/NousResearch/hermes-agent/issues/106261) — Session context should describe client, not backend** (UX clarity para remote desktop)

---

## 7. Resumo de Feedback dos Usuários

### Dores reais identificadas:

| Dor | Frequência | Severidade | Evidência |
|-----|------------|------------|-----------|
| **Windows Desktop quebrado** | Alta | P1-P2 | Múltiplos bugs: update exit 8, build failure, DPI transparency, port exhaustion | 
| **Multi-profile broken no desktop** | Média-alta | P2 | New session cria sem metadata, resultando em "Couldn't open this session" | 
| **Skills index stale** | Contínua | P3 | Sistema de automação não está rodando; 186 comentários indicam frustração | 
| **Web scraping retorna dados vazios sem erro** | Média | P3 | Firecrawl silenciosamente falha em páginas com lazy load | 
| **3-session cap frustra power users** | Média | P2 | Sidebar só mostra 3 chats por projeto; resto requer drill-in | 
| **Rootless Docker networking inseguro** | Baixa | P2 | Proxy binds a loopback inacessível do container | 

### Cenários de uso recorrentes:

1. **Multi-profile workflows**: Usuários com >1 perfil Hermes experimentam quebras na criação de sessão e isolamento de dados — evidenciado por 4+ issues sobre cross-profile leaks e metadata loss.
2. **Windows como plataforma primária**: Concentração desproporcional de bugs desktop (+6 issues P1-P3) indica que Windows é path crítico sub-testado.
3. **Group chat em rooms**: Harvest window de 5 min muito curto vs turn cap de 20 min — power users em ambientes colaborativos perdem mensagens.

### Satisfação vs Insatisfação:

- **Satistfeito**: Capacidade de integrations (Claude SDK, Telegram, Firecrawl), CLI extensível, cron job management.
- **Insatisfeito**: Estabilidade do desktop (especialmente Windows), silêncio do sistema de automação de skills, UX confusa do "Fast toggle" sem explicação de billing priority lane.

---

## 8. Backlog que Merece Atenção

### Issues sem resposta ou estagnadas:

| # | Título | Tempo desde criação | Prioridade | Motivo da atenção |
|---|--------|---------------------|------------|------------------|
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | Skills index stale | ~54 dias (desde 2026-07-18) | P3 | Sistema de automação quebrado afeta Docs; 186 comentários mas sem fix merged |
| [#88584](https://github.com/NousResearch/hermes-agent/issues/88584) | Automated Nous integration blocked | ~24 dias (desde 2026-08-17) | P3 | Bloque

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-09-10

---

## 1. Panorama do Dia

O projeto PicoClaw manteve atividade moderada nas últimas 24h, com **3 issues fechadas** e **5 PRs atualizados**. Nenhum release foi publicado. As contribuições concentraram-se em estabilidade (correção de bugs de conexão MCP e gateway) e melhorias incrementais em canais existentes (QQ, IRC). O volume de issues/prs está dentro da normalidade operacional, sem sinais de crise. A comunidade demonstra foco em resolver dividas técnicas e expandir suporte a plataformas de mensagens.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24h.**

O projeto não publicou novas versões. O último ciclo de release permanece inalterado. Este é um período de maturação de PRs e preparação para próxima release.

---

## 3. Progresso do Projeto

### PR Mergeado/Fechado

| # | Título | Domínio | Impacto |
|---|--------|---------|---------|
| [#1349](https://github.com/sipeed/picoclaw/pull/1349) | feat(qq): suporte a mais tipos de anexos | Canal QQ | **Alto** — Adiciona parsing de emojis, voz, imagem, vídeo e arquivos; prioriza Markdown em respostas |

**Avanço:** O PR #1349 (fechado em 2026-09-09) representa uma melhoria significativa no canal QQ, expandindo capacidades de parsing e envio de mídia. Isso reduz atritos para usuários do ecossistema QQ.

### PRs Abertos em Progresso

| # | Título | Status | Prioridade |
|---|--------|--------|------------|
| [#3358](https://github.com/sipeed/picoclaw/pull/3358) | fix(agent): thread responses | 🔵 Aberto | **Alta** |
| [#3354](https://github.com/sipeed/picoclaw/pull/3354) | feat(irc): IRCv3 multiline | 🔵 Aberto | Média |
| [#3353](https://github.com/sipeed/picoclaw/pull/3353) | fix(channels): bound tool feedback | 🔵 Aberto | Média |
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) | refactor(deltachat): cleanup -200LOC | 🔵 Aberto | Baixa-Média |

---

## 4. Temas Quentes da Comunidade

### Issue com Maior Engajamento

| # | Título | Comentários | 👍 | Categoria |
|---|--------|-------------|----|-----------|
| [#3269](https://github.com/sipeed/picoclaw/issues/3269) | MCP server connection fail → agent loop hang | **9** | 1 | Bug Crítico |

**Análise:** A issue #3269 liderou em engajamento com 9 comentários. O problema — loop infinito do agente quando servidor MCP falha — afeta diretamente a usabilidade do chat. A resolução (issue agora fechada) indica correção entregue.

### Proposta com Potencial Estratégico

| # | Título | 👍 | Relevância |
|---|--------|----|------------|
| [#3345](https://github.com/sipeed/picoclaw/issues/3345) | lightweight PicoClaw worker mode for household edge compute | 0 | **Estratégica** |

**Análise:** Embora sem reações, a proposta #3345 aborda um caso de uso relevante: dispositivos IoT/home labs como Raspberry Pi e boards RISC-V/ARM/MIPS. Sugere uma arquitetura modular "worker mode" que permitiria distribuir carga entre dispositivos fracos e PCs mais potentes. Este é um diferenciador potencial frente a sistemas que ignoram hardware de baixo custo.

---

## 5. Bugs e Estabilidade

### Bugs Resolvidos (24h)

| # | Severidade | Título | Tempo de Vida |
|---|------------|--------|---------------|
| [#3269](https://github.com/sipeed/picoclaw/issues/3269) | 🔴 Alta | MCP server failure → agent hang | ~51 dias |
| [#3265](https://github.com/sipeed/picoclaw/issues/3265) | 🟡 Média | Gateway fails com 'deltachat has unknown type' | ~52 dias |
| [#3345](https://github.com/sipeed/picoclaw/issues/3345) | 🟢 Baixa | Proposta (não bug, mas fechada) | ~15 dias |

**Estado Geral de Bugs:** A saúde estabilidade melhorou nas últimas 24h com o fechamento de 2 bugs ativos (incluindo 1 crítico). O tempo de resolução (~51-52 dias) para issues antigas indica processo de triagem eficiente.

### Nenhum Bug Novo Reportado

Não há issues de bug abertas criadas nas últimas 24h.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em Desenvolvimento

| # | Título | Canal/Domínio | Sinal de Roadmap |
|---|--------|---------------|------------------|
| [#3354](https://github.com/sipeed/picoclaw/pull/3354) | IRCv3 multiline messages | IRC | Expansão IRC |
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) | DeltaChat cleanup/refactor | DeltaChat | Limpeza técnica |

### Sinais de Demanda

1. **Suporte a Mídia Rica:** PR #1349 demonstra demanda por capacidades completas de mídia (voz, vídeo, arquivos) em canais modernos.
2. **IRC Moderno:** PR #3354 busca suporte a especificações IRCv3 (batch, message-tags, multiline).
3. **Distribuição em Edge:** Issue #3345 sinaliza interesse em arquiteturas distribuídas para hardware limitado.

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Dor | Fonte | Severidade |
|-----|-------|------------|
| Agent trava quando MCP falha | [#3269](https://github.com/sipeed/picoclaw/issues/3269) | 🔴 Crítica |
| Configuração delta-chat causa erro inesperado | [#3265](https://github.com/sipeed/picoclaw/issues/3265) | 🟡 Média |
| Respostas do bot desconectadas da mensagem original | [#3358](https://github.com/sipeed/picoclaw/pull/3358) | 🟡 Média |
| Limpeza de animações de feedback | [#3353](https://github.com/sipeed/picoclaw/pull/3353) | 🟢 Baixa |

### Cenários de Uso Reportados

- **Agentes em grupos lotados:** Necessidade de respostas threadadas (PR #3358)
- **Edge computing doméstico:** Proposta de arquitetura worker distribuído (Issue #3345)
- **Multi-canal:** Suporte a QQ com capacidades completas de mídia (PR #1349)

---

## 8. Backlog que Merece Atenção

### Issues Abertas Sem Resposta Recente

| # | Título | Criado | Atualizado | Dias Inativo |
|---|--------|--------|------------|--------------|
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) | refactor(deltachat) | 2026-07-03 | 2026-09-09 | 0 (ativo) |

> Nenhuma issue aberta significativa sem atividade recente identificada. O projeto demonstra boa cadência de atualização em PRs ativos.

### Observação de Estaleza

Três issues/PRs estão marcados como `[stale]` nas últimas 24h:
- [#3269](https://github.com/sipeed/picoclaw/issues/3269) — Fechada
- [#3265](https://github.com/sipeed/picoclaw/issues/3265) — Fechada
- [#3358](https://github.com/sipeed/picoclaw/pull/3358) — Aberta

**Ação recomendada:** O PR #3358 precisa de revisão para evitar fechamento por estaleza.

---

## Métricas Consolidada do Dia

| Indicador | Valor |
|-----------|-------|
| Releases | 0 |
| Issues fechadas | 3 |
| PRs abertos | 4 |
| PRs fechados/merged | 1 |
| Bugs críticos resolvidos | 1 |
| Issues com alta interação (>5 comentários) | 1 |

---

**Próximos Passos Sugeridos:**
1. Revisitar PR [#3358](https://github.com/sipeed/picoclaw/pull/3358) para evitar estaleza
2. Avaliar proposta [#3345](https://github.com/sipeed/picoclaw/issues/3345) para alinhamento estratégico
3. Preparar release com correções de estabilidade (MCP, gateway)

---

*Relatório gerado automaticamente com base em dados GitHub de 2026-09-09.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-09-10

---

## 1. Panorama do Dia

O projeto IronClaw apresenta **atividade moderada** em 10 de setembro de 2026. Foram registradas 1 nova issue e 6 PRs nas últimas 24h, com 2 PRs já fechados/merged, indicando um ritmo de desenvolvimento contínuo. Não houve novos lançamentos hoje. A atividade concentra-se no ecossistema MCP (Model Context Protocol) e em melhorias de estabilidade de extensões, com destaque para correções de comportamento silencioso em configurações de ambiente. O time mantém um pipeline saudável de PRs em aberto com baixo risco identificado na maioria dos casos.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto não publicou novas versões hoje. O último ciclo de release pode estar em fase de preparação ou em curso de estabilização das contribuições recentes.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados Hoje

| # | Título | Autor | Resumo do Impacto |
|---|--------|-------|-------------------|
| [#8088](https://github.com/nearai/ironclaw/pull/8088) | feat(common): distinguish a set-but-empty env var from unset | kirikov | **Elimina falha silenciosa em configurações.** Antes, `FOO=` e ausência de `FOO` eram tratadas identicamente. Agora, variáveis de ambiente presentes mas vazias são explicitamente diferenciadas, prevenindo erros de configuração que passavam despercebidos. |
| [#8089](https://github.com/nearai/ironclaw/pull/8089) | feat(extensions): bundle agent-market hosted-MCP provider | kirikov | **Expande ecossistema MCP.** Adiciona pacote first-party para o provedor agent.market, com manifest, schemas de input por ferramenta e declarações estáticas que servem como fallback até a descoberta dinâmica via `tools/list`. |

### Avanços Principais
- **Melhoria de confiabilidade operacional**: A correção em #8088 representa uma melhoria significativa em debugging e comportamento de deploy, eliminando confusão entre variáveis configuradas e não-configuradas.
- **Expansão de integrações MCP**: O bundling do provedor agent.market alinha IronClaw com o ecossistema hosted-MCP, oferecendo catalogação pré-discoverida para usuários.

---

## 4. Temas Quentes da Comunidade

### Issues/PRs em Destaque

**Issue aberta:**
- [#8091](https://github.com/nearai/ironclaw/issues/8091) — **Bug: WebChat v2 IME composition sends mensagem prematuramente**  
  *Autor: supermomonga | 0 comentários | 0 reações*  
  **Análise:** Bug de usabilidade que afeta usuários de idiomas asiáticos (IME/Input Method Editor). Quando o usuário confirma conversão de texto composto via Enter, a mensagem é enviada antes de estar completa. Regressão de comportamento já identificado anteriormente. Severidade: **user-facing, UX-critical** para público internacional.

**PRs em revisão com potencial impacto:**

- [#8084](https://github.com/nearai/ironclaw/pull/8084) — **feat(mcp): opt-in SEP-414 caller attribution**  
  *Autor: kirikov | Escopo: MCP, Segurança*  
  **Demanda:** Permite que servidores MCP hospedados identifiquem a conversa de origem e detectem retries de chamadas com side-effects. Resolve limitações de attribution em arquiteturas multi-usuário com bearer tokens compartilhados.

- [#8072](https://github.com/nearai/ironclaw/pull/8072) — **feat(telegram): register Bot API command menu**  
  *Autor: thisisjoshford | Escopo: docs, dependencies*  
  **Demanda:** Melhora experiência Telegram com menu de comandos (`/model`, `/status`, `/new`, `/stop`, `/interrupt`) registrado via Bot API, com limpeza best-effort na desativação.

---

## 5. Bugs e Estabilidade

### Bugs Reportados

| # | Título | Severidade | Status | Impacto |
|---|--------|------------|--------|---------|
| [#8091](https://github.com/nearai/ironclaw/issues/8091) | IME Enter envia mensagem prematuramente (WebChat v2) | **Média-Alta** | Aberto | Usuários de IME (chinês, japonês, coreano) enviam mensagens parcialmente compostas |

### Análise de Estabilidade
- **Regressão confirmada**: O issue #8091 indica recorrência de comportamento problemático anterior, sugerindo que o bug pode ter sido reintroduzido em atualização recente do WebChat v2.
- **Sem crashes ou outages reportados** nas últimas 24h.
- **Qualidade do codebase**: As 2 PRs fechadas hoje demonstram atenção a edge cases (variáveis de ambiente vazias vs. ausentes) e robustez de integrações.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features em Desenvolvimento

| # | Título | Escopo | Tipo | Indicência Estratégica |
|---|--------|--------|------|------------------------|
| [#8084](https://github.com/nearai/ironclaw/pull/8084) | SEP-414 caller attribution para MCP | MCP, Segurança | Feature | **Roadmap MCP Enterprise** — suporte a arquiteturas multi-tenant com billing per-conversation |
| [#8090](https://github.com/nearai/ironclaw/pull/8090) | Hosted-MCP catalogs por caller | MCP, Extensions | Bugfix/Feature | **Consistência multi-usuário** — prevents tool overwrite em ambientes compartilhados |
| [#8085](https://github.com/nearai/ironclaw/pull/8085) | Operator-installed packages treated as host-bundled | Extensions | Bugfix | **Flexibilidade de deployment** — operadores podem instalar packages anteriormente indisponíveis |
| [#8089](https://github.com/nearai/ironclaw/pull/8089) | Agent-market provider bundle | Extensions, MCP | Feature | **Expansão de marketplace** — integrações first-party reduzem fricção de onboarding |
| [#8072](https://github.com/nearai/ironclaw/pull/8072) | Telegram command menu registration | Telegram | Feature | **UX de integração Telegram** — comandos visíveis diretamente no app |

### Sinais de Direção
- **Foco em MCP**: 3 dos 6 PRs envolvem hosted-MCP, indicando investimento contínuo na padronização e robustez do Model Context Protocol.
- **Operator experience**: Melhorias em packages operacionais (#8085) e configuração de ambiente (#8088) sugerem atenção a usuários de deployment self-hosted.
- **Integrações de chat**: Telegram recebe atenção com comandos registrados dinamicamente.

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

**1. Problema de UX em WebChat (Issue #8091)**
- **Cenário**: Usuários de idiomas que usam IME (composição de texto) experienciam envio acidental de mensagens.
- **Dano**: Mensagens incompletas ou incorretas são enviadas involuntariamente.
- **Impacto emocional**: Frustração com perda de controle sobre envio de conteúdo.
- **Frequência**: Contínua para o público afetado; 0 reações indicam baixa votação ou novo reporte.

**2. Falha silenciosa de configuração (PR #8088 — agora resolvido)**
- **Cenário**: Operadores configurando variáveis de ambiente para sobrescrever endpoints ou credenciais podiam cometer typos (ex: `ENDPOINT=`) que eram ignorados silenciosamente.
- **Dano**: Deploys usavam valores padrão inesperados, gerando comportamento inconsistente.
- **Solução implementada**: Diferenciação explícita entre variável ausente e presente mas vazia.

### Satisfação Observada
- **Comunidade ativa**: 6 contribuições em 24h demonstra engajamento saudável.
- **Resposta rápida**: PRs criados em 08/09 já revisados e fechados em 08/09 — ciclo de review eficiente.
- **Cobertura de edge cases**: O time demonstra atenção a cenários não-obviamente críticos (variáveis vazias, operator packages).

---

## 8. Backlog que Merece Atenção

### Items Sem Resposta Prolongada

**Não há items com resposta pendente identificada nos dados de 24h.**

Todos os PRs abertos (#8084, #8090, #8085, #8072) foram atualizados em 2026-09-09, indicando revisão ativa. Nenhuma issue ou PR antigo foi mencionado.

### Monitoramento Recomendado

| # | Título | Idade Est. | Prioridade | Motivo |
|---|--------|------------|------------|--------|
| [#8091](https://github.com/nearai/ironclaw/issues/8091) | Bug IME WebChat v2 | ~1 dia | **Alta** | Bug user-facing, possível regressão, afeta UX internacional |
| [#8084](https://github.com/nearai/ironclaw/pull/8084) | SEP-414 caller attribution | ~2 dias | **Média** | Feature de segurança para MCP enterprise; sem comentários visíveis |

---

## Métricas Consolidada — 2026-09-10

| Indicador | Valor | Tendência |
|-----------|-------|-----------|
| Issues abertas (24h) | 1 | Neutra |
| PRs abertos (24h) | 4 | Positiva |
| PRs fechados (24h) | 2 | Positiva (throughput) |
| Novas releases | 0 | Neutra |
| Bugs críticos | 1 | Atenção necessária |
| Features em pipeline | 5 | Saudável |

---

**Próximos passos recomendados:**
1. Priorizar review do PR #8091 (bug IME) — impacto direto em usuários
2. Acompanhar merge de #8084 (caller attribution) — alinhamento com roadmap MCP
3. Considerar release após estabilização das features MCP (#8084, #8089, #8090)

*Relatório gerado automaticamente com base em dados GitHub de nearai/ironclaw em 2026-09-10.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório de Projeto — CoPaw (QwenPaw)

**Data:** 2026-09-10  
**Repositório:** [agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw)  
**Período:** Últimas 24 horas

---

## 1. Panorama do Dia

O ecossistema CoPaw apresenta **alta atividade** nesta janela de 24h, com 56 eventos combinados (22 issues + 34 PRs). A relação entre issues abertas (11) e fechadas (11) evidencia um fluxo de trabalho saudável, com resolução de backlog consistente. Os PRs seguem tendência similar: 26 abertos versus 8 fechados/merged, indicando pipeline robusto de contribuições. O projeto demonstra vigor na faixa v2.2.0, com lançamentos recorrentes de features (Advisor Mode, mobile experience, cobertura de testes em sprint) coexistindo com correções críticas — notadamente a corrupção silenciosa de FTS no history.db e regressões visuais nos modais. **A saúde geral do projeto é positiva**, com comunidade engajada em múltiplas dimensões (backend, frontend, canais, UX).

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto opera em ciclo beta contínuo (v2.2.0b7 referenciada em issue). As contribuições mais recentes (#7655, #7649, #7609) possuem maturidade suficiente para compor a próxima tag, mas ainda não foram oficialmente releaseadas.

---

## 3. Progresso do Projeto

### PRs fechados/merged hoje

| # | PR | Tipo | Impacto |
|---|---|---|---|
| [#7649](https://github.com/agentscope-ai/CoPaw/pull/7649) | `feat(mcp): support configurable timeout for HTTP/SSE clients` | Feature | Resolve limitation histórica — timeout de MCP agora é configurável por cliente, eliminando o teto fixo de 30s que bloqueava operações de longa duração |
| [#7609](https://github.com/agentscope-ai/CoPaw/pull/7609) | `feat(skills): expose versions and validate declared dependencies` | Feature | Habilita versionamento de skills e validação de dependências (MCP, env, bin), resolvendo #7557 e melhorando fleet management |
| [#7655](https://github.com/agentscope-ai/CoPaw/pull/7655) | `fix(history): repair FTS corruption and retention cleanup` | Bugfix | Corrige falha silenciosa de retenção em history.db corrompido — `SQLITE_CORRUPT_VTAB` não era tratado, causando perda de dados de retenção |

### PRs em destaque (abertos)

- **#7569** — Advisor Mode: modo que emparelha um modelo advisor forte com worker em modelo barato, otimizando custo
- **#7378** — QwenPaw Mobile (draft): cliente Expo/React Native unificado para iOS/Android, usando backend existente
- **#7653** — Coverage sprint batch 2: +2.475 testes unitários, elevando coverage de 64.41% para 69.43% (+5.02pp)
- **#7639** — Evita escaneamentos repetidos de integridade do history.db por processo
- **#7542** — Scroll-back message pagination: permite acesso a mensagens em contexto compactado após refresh

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários)

| # | Título | Comentários | Tipo | Insights |
|---|---|---|---|---|
| [#7177](https://github.com/agentscope-ai/CoPaw/issues/7177) | Otimização do portal de deploy agentscope.io/deploy | 8 | Enhancement | Demanda por acessibilidade mobile — botões de ação ("abrir/parar") precisam estar mais acessíveis no topo da tela |
| [#7597](https://github.com/agentscope-ai/CoPaw/issues/7597) | base64 image/PDF como "type":"data" causa erro 400 | 7 | Bug | Problema de integração com ferramentas que retornam binários; impacta fluxos de automação com visão |
| [#7363](https://github.com/agentscope-ai/CoPaw/issues/7363) | Chamadas síncronas bloqueiam event loop (Windows) | 6 | Bug | Bloqueio de 118–135s no startup e ~126s ao enviar mensagens — impacto severo em UX desktop Windows |
| [#7228](https://github.com/agentscope-ai/CoPaw/issues/7228) | Botão "Instalar" persiste em apps já instalados | 6 | Bug | Regressão de UI no market; quebra affordance de desinstalação |
| [#5329](https://github.com/agentscope-ai/CoPaw/issues/5329) | Botão de alternar agent no modo sidebar simplificado | 5 | Enhancement | Usuários mobile (via backend API) não conseguem trocar agent pela sidebar compacta |
| [#6460](https://github.com/agentscope-ai/CoPaw/issues/6460) | CPU elevado em Edge+Wayland em páginas de sessão | 5 | Bug | Vazamento de memória/event loop em browser Chromium; só ocorre em QwenPaw, não em navegação normal |
| [#7622](https://github.com/agentscope-ai/CoPaw/issues/7622) | Modal com fundo transparente (v2.2.0) | 4 | Bug | Regressão visual: backdrop mask não funciona em páginas de config |
| [#7633](https://github.com/agentscope-ai/CoPaw/issues/7633) | llama.cpp versão 5-dígitos causa rollback silencioso | 4 | Bug | Usuários que fazem upgrade manual do runtime perdem mudanças após ~40min sem notificação |

### Análise de tendências

**Padrão dominante: UX mobile e desktop.** Três das top issues (#7177, #7363, #5329) diretamente связаны com experiência em dispositivos móveis ou desktop Windows, evidenciando que a base de usuários ampliou-se para além do usage puramente web.

**Preocupação com confiabilidade de runtime local.** Issue #7633 revela fragilidade no sistema de auto-detecção de versões de componentes nativos (llama.cpp), potencialmente minando a confiança em deployments self-hosted.

---

## 5. Bugs e Estabilidade

### Críticos (alta severidade)

| # | Bug | Severidade | Status | Link |
|---|---|---|---|---|
| #7363 | Chamadas síncronas bloqueiam event loop (timeout失效) | **Crítica** | OPEN | [#7363](https://github.com/agentscope-ai/CoPaw/issues/7363) |
| #7596 | Corrupção FTS não detectada; retenção falha silenciosamente | **Crítica** | CLOSED (fix em #7655) | [#7596](https://github.com/agentscope-ai/CoPaw/issues/7596) |
| #7633 | Rollback silencioso de runtime llama.cpp upgraded | **Crítica** | OPEN | [#7633](https://github.com/agentscope-ai/CoPaw/issues/7633) |

### Bugs significativos (média/alta)

| # | Bug | Severidade | Status | Link |
|---|---|---|---|---|
| #7642 | Chrome: streaming no console não renderiza até turno completo | Alta | OPEN | [#7642](https://github.com/agentscope-ai/CoPaw/issues/7642) |
| #7622 | Modal com fundo transparente (v2.2.0) | Alta | CLOSED | [#7622](https://github.com/agentscope-ai/CoPaw/issues/7622) |
| #7597 | base64 image/PDF como "type":"data" causa 400 | Alta | CLOSED | [#7597](https://github.com/agentscope-ai/CoPaw/issues/7597) |
| #6460 | CPU elevado persistente em Edge+Wayland | Alta | CLOSED | [#6460](https://github.com/agentscope-ai/CoPaw/issues/6460) |
| #7228 | Botão "Instalar" aparece em apps já instalados | Média | CLOSED | [#7228](https://github.com/agentscope-ai/CoPaw/issues/7228) |

**Nota:** A taxa de fechamento de bugs é elevada (5 de 7 bugs listados já fechados), indicando processo de triagem ativo. A presença de 2 bugs críticos em aberto (#7363, #7633) merece atenção imediata.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features aguardando implementação (abertas)

| # | Feature | Relevância Estratégica | Link |
|---|---|---|---|
| #7600 | **QwenPaw Traffic Light** — indicador visual de status do agent | UX de produtividade | [#7600](https://github.com/agentscope-ai/CoPaw/issues/7600) |
| #7657 | **ntfy channel support** — integração com ntfy.sh push (~34k★) | Canais de notificação self-hosted | [#7657](https://github.com/agentscope-ai/CoPaw/issues/7657) |
| #7648 | **Custom web page title** — permitir título customizado por painel | Multi-instância / workflow | [#7648](https://github.com/agentscope-ai/CoPaw/issues/7648) |
| #7656 | **Durable memory across sessions** — integração MemCode | Persistência de memória | [#7656](https://github.com/agentscope-ai/CoPaw/issues/7656) |
| #7628 | **Context compaction baseado em request completo** | Precisão de LLM | [#7628](https://github.com/agentscope-ai/CoPaw/issues/7628) |
| #7177 | **UX mobile: reordenar入口 de deploy** | Acessibilidade | [#7177](https://github.com/agentscope-ai/CoPaw/issues/7177) |
| #7644 | **Parâmetros do agent default editáveis** | Configurabilidade | [#7644](https://github.com/agentscope-ai/CoPaw/issues/7644) |

### Sinais de mercado

1. **Expansão mobile:** PR #7378 (native mobile) e issues de UX mobile (#7177, #5329) indicam demanda real por experiência nativa
2. **Self-hosted push notifications:** ntfy.sh (~34k estrelas no GitHub) é escolha natural para base home-lab
3. **Multi-instância:** #7648 evidencia uso em escala — usuários rodando 7–8 painéis simultâneos
4. **Memória persistente cross-session:** integração com MemCode sinaliza ambição de memória de longo prazo

---

## 7. Resumo de Feedback dos Usuários

### Dores reais identificadas

| Dor | Cenário | Impacto | Link |
|---|---|---|---|
| **Bloqueio de event loop em Windows** | Desktop → startup 118–135s; envio de mensagem ~126s | Severo — produto parece travado | [#7363](https://github.com/agentscope-ai/CoPaw/issues/7363) |
| **Timeout fixo em MCP (30s)** | Clientes HTTP/SSE com operações longas | Bloqueante para automação | [#3997](https://github.com/agentscope-ai/CoPaw/issues/3997) |
| **Rollback silencioso de runtime** | Upgrade manual do llama.cpp revertido após ~40min | Perda de trabalho; confiança minada | [#7633](https://github.com/agentscope-ai/CoPaw/issues/7633) |
| **Corrupção FTS não detectada** | history.db com índice quebrado; retenção falha | Dados órfãos; espaço desperdiçado | [#7596](https://github.com/agentscope-ai/CoPaw/issues/7596) |
| **Seleção de diretório sem edição manual** | Navegação de path em 2.2.0 só permite clicks | Inconveniente para power users | [#7601](https://github.com/agentscope-ai/CoPaw/issues/7601) |
| **QQ channel group chat não funciona** | Bot em grupo não responde | Canal popular na China impactado | [#7618](https://github.com/agentscope-ai/CoPaw/issues/7618) |

### Cenários de uso emergentes

- **Home-lab self-hosted:** ntfy, llama.cpp customizado, deployments Linux
- **Multi-projeto/painel:** 7–8 instâncias simultâneas com necessidade de customização visual
- **Mobile-first em certos fluxos:** usuários acessam backend via mobile browser
- **Fleet management:** skills compartilhadas entre múltiplos workspaces com necessidade de versionamento

### Satisfação geral

**Mista com tendência positiva.** A velocidade de resposta da comunidade (média ~5 comentários por issue de bug de alta severidade) e o volume de PRs de primeira contribuição (#7542, #6776) indicam projeto saudável e acolhedor para novos contribuidores. Regressões em v2.2.0 (#7622, #7228) causam frustração pontual, mas são rapidamente triadas.

---

## 8. Backlog que Merece Atenção

### Issues antigas sem resolução

| # | Idade | Título | Prioridade | Inação |
|---|---|---|---|---|
| [#3997](https://github.com/agentscope-ai/CoPaw/issues/3997) | ~4 meses | MCP timeout não configurável | **Alta** | Resolvida em #7649 (agora closed) — OK |
| [#5329](https://github.com/agentscope-ai/CoPaw/issues/5329) | ~3 meses | Botão de alternar agent no sidebar | **Média** | Closed sem detalhes de implementação — verificar se feature foi entregue |
| [#5688](https://github.com/agentscope-ai/CoPaw/issues/5688) | ~2 meses | CSS selector mismatch (ant- vs qwenpaw-) | **Média** | Closed — sem detalhes; risco de CSS inconsistente persistir |
| [#6460](https://github.com/agentscope-ai/CoPaw/issues/6460) | ~1.5 meses | CPU elevado em Edge+Wayland | **Alta** | Closed — verificar se root cause foi addressado |
| [#7618](https://github.com/agentscope-ai/CoPaw/issues/7618) | 2 dias | QQ channel group chat não funciona | **Média** | Apenas 2 comentários; sem triagem |

### PRs em estado "Under Review" há tempo

| # | Idade | Título | Status | Observação |
|---|---|---|---|---|
| [#6399](https://github.com/agentscope-ai/CoPaw/pull/6399) | ~7 semanas | reranker UI config panel | Under Review | UI para feature de backend já existente |
| [#7616](https://github.com/agentscope-ai/CoPaw/pull/7616) | 3 dias | migrate ADBPG/PowerContext to plugins | Under Review | Migração de memória — bloqueia release? |

### Recomendações para triagem

1. **Reverificar closures suspeitas:** Issues #5329, #5688, #6460 foram fechadas sem linking de PR/commits — verificar se realmente foram resolvidas ou se feedback foi ignorado
2. **QQ channel #7618:** 2 comentários sem resposta de maintainer; canal relevante para base de usuários chineses
3. **PR #6399 (7 semanas Under Review):** avaliar se UI está alinhada com roadmap ou se deve ser fechada com direcionamento

---

## Métricas Resumidas (24h)

| Indicador | Valor | Tendência |
|---|---|---|
| Issues ativas | 11 | Neutra |
| Issues fechadas | 11 | Positiva (taxa 1:1) |
| PRs abertos |

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-09-10

## 1. Panorama do Dia

O ecossistema ZeroClaw mantém um nível de atividade intenso, com **37 issues e 50 PRs atualizados nas últimas 24 horas**, embora nenhuma release tenha sido publicada. A atividade é marcada por um robusto ciclo de RFCs (Requests for Comments), evidenciando uma comunidade engajada em debates arquiteturais profundos — cinco dos dez itens mais comentados são RFCs com 12 a 36 comentários. Dois bugs de alta severidade (P1) entraram no radar: um sobre textos de resposta sendo descartados no ZeroCode ACP (#10697) e outro sobre o provedor Anthropic reportar custo zero (#9816). O projeto demonstra maturidade no processo de design, mas a taxa de abertura de PRs (49 abertos) sugere gargalo na revisão por mantenedores.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24 horas.**

O último release estável é a **v0.8.5**, cujo post no X (Xitter) apresentou problemas de formatação — a publicação foi cortada prematuramente, começando com "channels/slack: hydrate thread context…" e cortando no meio. O PR #10727 propõe automatizar a composição dos anúncios de release para X e Discord a partir das notas de release, evitando esse tipo de problema futuro.

---

## 3. Progresso do Projeto

### PR Merged/Fechado Hoje

| # | Título | Autor | Impacto |
|---|--------|-------|---------|
| [#10732](https://github.com/zeroclaw-labs/zeroclaw/pull/10732) | fix(service): select the daemon log by content, not existence | rifuki | Corrigiu `zeroclaw service logs` que não exibia nada em macOS, Windows e OpenRC quando o daemon estava saudável |

### PRs Abertos em Estado Avançado (necessitando revisão/ação do autor)

| # | Título | Tamanho | Prioridade | Status |
|---|--------|---------|------------|--------|
| [#10391](https://github.com/zeroclaw-labs/zeroclaw/pull/10391) | fix(delegate): bounded delegate filesystem tools now respect the target's own workspace | XL | Alta | needs-author-action |
| [#10337](https://github.com/zeroclaw-labs/zeroclaw/pull/10337) | fix(tools): honor allowed roots for git operations | XL | Alta | needs-author-action |
| [#8966](https://github.com/zeroclaw-labs/zeroclaw/pull/8966) | feat(agent): carry live provider identity on usage events | XL | Alta | needs-author-action |
| [#9809](https://github.com/zeroclaw-labs/zeroclaw/pull/9809) | feat(providers): support multiple models per provider profile | XL | Média | needs-author-action |
| [#10214](https://github.com/zeroclaw-labs/zeroclaw/pull/10214) | feat(log): add entry-count rotation and multi-segment log queries | XL | Alta | needs-author-action |

**Destaque:** O PR #10233 (`feat(sop): add a collision-checked atomic SOP rename flow`) da contribuição destacada JordanTheJet implementa uma correção importante para o fluxo de renomeação de SOPs, que anteriormente poderia causar bifurcação de dados ao mudar o nome de um SOP existente.

---

## 4. Temas Quentes da Comunidade

### RFCs em Votação/Discussão (os 5 mais comentados)

| # | Título | Comentários | Prioridade | Tema Central |
|---|--------|-------------|------------|--------------|
| [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) | RFC: Runtime-owned conversation sessions and transport surface adapters | 36 | P2 (High Risk) | Arquitetura de sessões Owned pelo runtime |
| [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) | RFC: Unified file and attachment architecture for conversation surfaces | 29 | P2 (High Risk) | Arquitetura unificada de arquivos/anexos |
| [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) | RFC: Granular sandbox policy - filesystem restrictions | 28 | P2 (High Risk) | Políticas de sandbox granulares (Bubblewrap, Landlock, Seatbelt) |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | [Tracker]: Maintainer decision queue for RFCs and design issues | 15 | Medium Risk | Fila de decisões pendentes de mantenedores |
| [#10076](https://github.com/zeroclaw-labs/zeroclaw/issues/10076) | RFC: Composable WASM plugin runtime architecture | 12 | P2 (High Risk) | Runtime de plugins WASM com APIs core e pontos de extensão |

**Análise:** A comunidade demonstra forte interesse em três eixos:
1. **Segurança e sandboxing** (#6996) — política granular de sistema de arquivos
2. **Arquitetura de dados** (#9487, #9488) — sessões Owned pelo runtime e anexos unificados
3. **Extensibilidade** (#10076) — plugins WASM composable

A RFC #10549 propõe simplificar o próprio processo de RFC, removendo janelas de discussão obrigatórias e fazendo REVISE parar o snapshot atual — reflexo de um processo que pode estar criando fricção.

---

## 5. Bugs e Estabilidade

### Bugs P1 (Críticos — ação imediata recomendada)

| # | Título | Severidade | Risco | Status |
|---|--------|------------|-------|--------|
| [#9816](https://github.com/zeroclaw-labs/zeroclaw/issues/9816) | cost: anthropic provider reports $0.00 spend — budget caps nunca disparam | S3 → Budget never fires | High | in-progress |
| [#10697](https://github.com/zeroclaw-labs/zeroclaw/issues/10697) | ZeroCode ACP transcript drops assistant text emitted before a tool call | S3 | High | open |

**#9816 — Impacto financeiro direto:** Cada registro de uso no provedor direto Anthropic é written com `cost_usd: 0.0`, fazendo `zeroclaw status` reportar `$0.0000` independentemente do gasto real. Como o controle de budget diário/mensal compara spend acumulado contra limites, **capping de budget está inoperante**.

**#10697 — Corrupção de UX:** Em sessões ACP/ZeroCode, quando o agente emite texto, faz uma tool call, e emite mais texto dentro de um único turno, **todo texto antes da última tool call é descartado** do transcript renderizado.

### Bugs P2 (Degradados — corrigir brevemente)

| # | Título | Severidade | Canal |
|---|--------|------------|-------|
| [#10721](https://github.com/zeroclaw-labs/zeroclaw/issues/10721) | knowledge.db_path tilde expansion é global replace, não prefixo home | S2 | memory:backend |
| [#10731](https://github.com/zeroclaw-labs/zeroclaw/issues/10731) | `zeroclaw service logs` prints nothing em macOS/Windows/OpenRC | S2 | daemon |
| [#10720](https://github.com/zeroclaw-labs/zeroclaw/issues/10720) | zerocode v0.8.5: agent responses render twice (display-only, tool call fires once) | S3 | zerocode |
| [#10701](https://github.com/zeroclaw-labs/zeroclaw/issues/10701) | user message com imagem invalida todo history cache prefix, não só a nova mensagem | S2 | compatible provider |
| [#10690](https://github.com/zeroclaw-labs/zeroclaw/issues/10690) | Integrations page "Configure" link usa display name slugificado em vez de family key | S3 | web |

### Issues Relacionadas a Segurança

| # | Título | Risco | Tags |
|---|--------|-------|------|
| [#10662](https://github.com/zeroclaw-labs/zeroclaw/issues/10662) | OAuth system-prefix cache marker está abaixo do mínimo Anthropic e consome slot | High | provider:anthropic |
| [#10699](https://github.com/zeroclaw-labs/zeroclaw/issues/10699) | cost ledger prices cache writes at plain input rate — subestima cache misses | High | config |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features OpenAI Responses (alta prioridade, múltiplas issues)

A comunidade está empujando fortemente para suporte completo ao OpenAI Responses API:

| # | Título | Tags |
|---|--------|------|
| [#10706](https://github.com/zeroclaw-labs/zeroclaw/issues/10706) | Preserve opaque reasoning state across OpenAI Responses call paths | provider:openai |
| [#10708](https://github.com/zeroclaw-labs/zeroclaw/issues/10708) | Support active-response steering on OpenAI Responses WebSockets | provider:openai |
| [#10707](https://github.com/zeroclaw-labs/zeroclaw/issues/10707) | Support bounded programmatic tool calling through OpenAI Responses | provider:openai |
| [#10704](https://github.com/zeroclaw-labs/zeroclaw/issues/10704) | Support asynchronous function tools with OpenAI Responses | provider:openai |

### Features Arquiteturais

| # | Título | Prioridade | Status |
|---|--------|------------|--------|
| [#10526](https://github.com/zeroclaw-labs/zeroclaw/issues/10526) | RFC: Append-only session event history, deterministic state replay, and derived agent streams | P2 (High) | RFC |
| [#10549](https://github.com/zeroclaw-labs/zeroclaw/issues/10549) | RFC: Simplify RFC voting by removing mandatory discussion windows | — | RFC |
| [#10663](https://github.com/zeroclaw-labs/zeroclaw/issues/10663) | Feature: configurable 1-hour prompt-cache TTL for Anthropic cache markers | P2 (High) | open |
| [#8763](https://github.com/zeroclaw-labs/zeroclaw/issues/8763) | Feature: Show subagent activity and expandable tool results in ZeroCode | P2 | accepted |

### Tracking Issues de Implementação

| # | Título | Escopo |
|---|--------|--------|
| [#10405](https://github.com/zeroclaw-labs/zeroclaw/issues/10405) | [Tracker]: Implement session-scoped prompt attachments (#9998) | ACP + durable chat + tools + approval |

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

1. **Custo e budget inoperantes (#9816):** Usuários não conseguem confiar em controles de gasto com o provedor Anthropic. Isso é crítico para ambientes corporativos onde budget é requisito de compliance.

2. **Logs de daemon indisponíveis (#10731, #10732):** Em macOS, Windows e OpenRC, `zeroclaw service logs` não retorna saída quando o daemon está saudável — atrapalha debugging em produção.

3. **Perda de contexto em tool calls (#10697):** Usuários do ZeroCode ACP notam que texto do agente desaparece quando faz tool calls intermediárias, causando confusão e perda de informação.

4. **Cache de histórico quebrado (#10701):** Usuários do compatible provider com `cache_passthrough = true` experimentam cache reads excessivos (lendo apenas system prompt) quando adicionam imagens, desperdiçando recursos.

5. **Deep links quebrados na UI (#10690):** O link "Configure" da página de integrações usa o nome de exibição slugado (Z.AI → `/z-ai`) em vez da family key, resultando em `path_not_found`.

### Cenários de Uso Observados

- **Agentes multi-turn em produção:** A necessidade de RFCs arquiteturais (#9487, #10526) indica que o projeto está sendo usado em cenários de longa duração onde estado de sessão é crítico.
- **Multi-model provider (#9809):** A feature de múltiplos modelos por perfil de provider mostra que usuários querem consolidar múltiplos modelos sob uma única credencial.
- **Sessões concorrentes (#9729):** O trabalho na sidebar do agente e multi-session tracking indica adoção em cenários de uso paralelo.

---

## 8. Backlog que Merece Atenção

### Issues sem resposta há muito tempo

| # | Título | Criado | Comentários | Notas |
|---|--------|--------|-------------|-------|
| [#5514](https://github.com/zeroclaw-labs/zeroclaw/issues/5514) | [Bug]: batch Telegram media groups into one multimodal turn | 2026-04-08 | 8 | Bug existe há ~5 meses; priority:p2, status:in-progress |
| [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) | RFC: Granular sandbox policy | 2026-05-28 | 28 | RFC ativa há ~3.5 meses sem decisão de mantenedor |
| [#8546](https://github.com/zeroclaw-labs/zeroclaw/pull/8546) | fix(cli): localize status fragments | 2026-06-30 | — | PR aberto há ~2.5 meses aguardando manutenção |
| [#8763](https://github.com/zeroclaw-labs/zeroclaw/issues/8763) | Feature: Show subagent activity in ZeroCode | 2026-07-06 | 2 | Feature aceita há ~2 meses sem implementação |

### PRs bloqueados sem movimento

| # | Título | Status | Notas |
|---|--------|--------|-------|
| [#9713](https://github.com/zeroclaw-labs/zeroclaw/pull/9713) | feat(runtime): expose token accounting on history-trim events | blocked | Principal contributor; aguardando desbloqueio |
| [#10358](https://github.com/zeroclaw-labs/zeroclaw/pull/10358) | feat(channels): add Mattermost approval prompts | blocked | Channels mattermost sem path de aprovação |
| [#9739](https://github.com/zeroclaw-labs/zeroclaw/pull/9739) | feat(zerocode): multi-session panes | closed (merged) | ✅ Resolvido |

### Mantenedor Decision Queue

O tracker [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) indica 15 comentários sobre a fila de decisões pendentes de mantenedores, sugerindo que há decisões arquiteturais acumuladas esperando resolução. A RFC #10549 busca exatamente simplificar esse gargalo.

---

## Métricas Sintéticas

| Indicador | Valor | Observação |
|------------|-------|------------|
| Issues ativas (24h) | 34 | Volume alto de trabalho em aberto |
| PRs abertos | 49 | Potencial gargalo de revisão |
| RFCs ativas | 6+ | Ciclo de design robusto mas possivelmente lento |
| Bugs P1 | 2 | Ação imediata recomendada |
| Bugs P2 | 8+ | Backlog de estabilidade |
| Releases (24h) | 0 | Projeto em modo de desenvolvimento ativo |
| PRs merged (24h) | 1 | Taxa de consolidação baixa vs. abertura |

**Veredicto:** ZeroClaw apresenta **saúde arquitetural forte** com RFCs bem debatidas e contribuições diversificadas, porém **saúde operacional preocupantemente baixa** — a disparidade entre 49 PRs abertos e 1 merge em 24h, somada a bugs P1 de impacto financeiro direto (#9816) e UX (#10697), sugere gargalo na capacidade de revisão dos mantenedores. A comunidade está ativa e engajada, mas o projeto precisa de investimento em throughput de review para converter contribuição em ship.

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*