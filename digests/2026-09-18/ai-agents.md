# Resumo diário do ecossistema de agentes de IA 2026-09-18

> Issues: 0 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-09-17 22:36 UTC

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

# Relatório Comparativo do Ecossistema de Agentes de IA Open Source

**Data de Referência:** 2026-09-18
**Projetos Analisados:** NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw, ZeroClaw

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **atividade intensa e polarizada** em 2026-09-18. Enquanto NullClaw permanece inativo e IronClaw opera em modo de monitoramento passivo, cinco projetos demonstram desenvolvimento acelerado com foco convergente em **confiabilidade de sessões, gestão de contexto e paridade multi-canal**. A ausência quase universal de releases nas últimas 24h (7/7 projetos) sugere que o ecossistema está em ciclo de integração pré-release, potencialmente indicando uma onda de lançamentos iminentes. A saúde geral é mista: ZeroClaw e Hermes Agent lideram em volume mas com alta carga de bugs P0/P1, enquanto CoPaw e NanoBot mostram maturidade operacional superior com taxas de resolução elevadas. O tema transversal é a **transição de funcionalidades core para estabilização** — todas as iniciativas estão maduras o suficiente para atrair uso em produção, mas enfrentam desafios de escala e regressões em funcionalidades críticas.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | Merges | Releases | Bugs Críticos Abertos | Saúde |
|---------|--------------|-----------|--------|----------|----------------------|-------|
| **NullClaw** | 0 | 0 | 0 | 0 | 0 | ⚪ Inativo |
| **NanoBot** | 4 | 17 | 7 | 0 | 1 (P1: cross-session) | 🟢 Boa |
| **Hermes Agent** | 50 | 50 | 2 | 0 | 2 P0 + ~7 P1 | 🔴 Tensão |
| **PicoClaw** | 1 | 14 | 7 | 0 | 0 | 🟢 Boa |
| **IronClaw** | 1 | 0 | 0 | 0 | 0 | ⚪ Monitoramento |
| **CoPaw** | 20 | 41 | 17 | 0 | 1 P1 (plugins) | 🟡 Moderada |
| **ZeroClaw** | 50 | 50 | 2 | 0 | 8 P1 | 🔴 Instável |

**Observações Quantitativas:**

- **Volume total de PRs:** 172 em 24h (excluindo NullClaw/IronClaw), indicando ecossistema altamente ativo
- **Taxa de merge média:** ~8% (18 merges / 172 PRs abertos), sugerindo gargalo de review
- **Concentração de bugs:** 18 bugs P0/P1 distribuídos entre 3 projetos (Hermes, CoPaw, ZeroClaw)
- **Release activity:** 0 releases em todos os projetos — ciclo de integração ou pausa estratégico

---

## 3. Posicionamento do Projeto Principal

### Hermes Agent vs. ZeroClaw vs. CoPaw

**Hermes Agent (NousResearch)**
- **Vantagens:** Maior volume de comunidade (112 comentários em issue única), integração com Nous/Enterkey, Plugin Catalog em expansão
- **Diferenças Técnicas:** Foco em MoA (Mixture of Agents), prompt cache, desktop app Electron, turn lease semantics
- **Tamanho da Comunidade:** 🔴 Alta — 50 issues + 50 PRs + engajamento máximo
- **Maturidade:** 🔴 Instável — 4 bugs P0/P1 simultâneos, regressões desktop desde v0.21.3

**ZeroClaw (zeroclaw-labs)**
- **Vantagens:** Foco em segurança (RUSTSEC advisories), RFC-driven governance, primitivas duráveis para interações humano-agente
- **Diferenças Técnicas:** Arquitetura Rust-first, crate extraction (cron→zeroclaw-cron), bounded child tool approvals, multi-channel robusto (WhatsApp, Matrix, Telegram)
- **Tamanho da Comunidade:** 🔴 Alta — 50 issues + 50 PRs
- **Maturidade:** 🔴 Instável — 8 bugs P1, múltiplos PRs risk:high

**CoPaw (agentscope-ai)**
- **Vantagens:** Taxa de merge superior (41%), Hub como platform B2B, telemetria de runtime, voice chat em desenvolvimento
- **Diferenças Técnicas:** DoomLoop architecture, model gateway organizacional, QwenPaw-Data analytics app, plugin ecosystem com hot reload
- **Tamanho da Comunidade:** 🟡 Alta — 61 eventos totais
- **Maturidade:** 🟡 Moderada — scroll eviction bugs P1, mas alta capacidade de resolução

**Veredicto de Posicionamento:** Hermes Agent e ZeroClaw lideram em volume e visibilidade, mas CoPaw demonstra **eficiência operacional superior** com 41% da taxa de merge do ecossistema. Para decisões de integração, CoPaw oferece melhor equilíbrio estabilidade/futuro; Hermes Agent oferece maior ecossistema de plugins; ZeroClaw oferece segurança e governança mais maduras.

---

## 4. Focos Técnicos Compartilhados

### Necessidades Emergentes em Múltiplos Projetos

| Foco Técnico | Projetos Afetados | Evidência |
|--------------|-------------------|-----------|
| **Gestão de contexto/sessão** | NanoBot, Hermes, CoPaw, ZeroClaw | Issues de cross-session replies (#5798), turn lease (#104303), scroll eviction (#7836), session-ownership (#10412) |
| **Paridade multi-canal** | NanoBot, PicoClaw, ZeroClaw | Telegram-Discord (#5800), QQ auth (#3349), Matrix voice (#10925), WhatsApp TTS (#10922) |
| **Context compaction / eviction** | NanoBot, ZeroClaw, CoPaw | Compaction inerte desde v0.8.5 (#10780), truncamento de archive (#5377), corrupt DB por purge (#7839) |
| **MCP stability** | Hermes Agent, CoPaw | Conexões quebram 60-90s (#103746), MCP DashScope 500 (#7827), OAuth token discard (#7821) |
| **Desktop stability** | Hermes Agent, CoPaw | Windows 125% scaling (#106665), event loop freeze (#7840), plugin SDK crashes (#107288) |
| **Segurança de ferramentas** | ZeroClaw, Hermes | Cross-origin credential leak (#109440), image marker injection (#10854), bounded tool approvals (#10937) |

**Interpretação:** A gestão de sessão/contexto é o **desafio técnico #1** do ecossistema, afetando 4/5 projetos ativos. Isso reflete a transição de chatbots stateless para agentes stateful com memória persistente — um desafio arquitetural fundamental. A paridade multi-canal é o **desafio #2**, indicando que a abstração de canais (Telegram, Discord, QQ, WhatsApp, Matrix) introduz complexidades não-antigas em production deployments.

---

## 5. Análise de Diferenciação

### Por Público-Alvo

| Projeto | Público Primário | Público Secundário | Posicionamento |
|---------|-----------------|--------------------|----------------|
| **Hermes Agent** | Desenvolvedores individuais, power users | Teams kecil, ONGs | Desktop-first, MoA orchestration |
| **CoPaw** | Empresas, equipes, devs | Usuários individuais | Platform B2B, model governance |
| **ZeroClaw** | Infraestrutura, SREs, auto-hosts | Desenvolvedores Rust | Security-first, self-hosted |
| **NanoBot** | Usuários multi-canal (Telegram/Discord) | Auto-hosts | Channel parity, cron automation |
| **PicoClaw** | Auto-hosts, devs de integração | Usuários IRC | Lightweight, protocol-native |

### Por Arquitetura

| Projeto | Paradigma | linguagem Principal | Modelo de Plugin |
|---------|-----------|---------------------|------------------|
| **Hermes Agent** | Electron desktop + CLI | TypeScript/Node | Marketplace centralizado |
| **CoPaw** | DoomLoop + Hub | Python | Catalog com hot reload |
| **ZeroClaw** | Modular crates (Rust) | Rust | RFC-driven, bounded scopes |
| **NanoBot** | Worker-per-session | Python | Channel adapters |
| **PicoClaw** | Protocol-native | Go | Channel modules |

### Diferenças Estratégicas Visíveis

- **Hermes Agent** investe em **ecossistema de marketplace** (Jarvis, localsend, bot-forge plugins em 24h)
- **CoPaw** investe em **analytics e governança organizacional** (model gateway, telemetria, QwenPaw-Data)
- **ZeroClaw** investe em **segurança e primitivas duráveis** (RFCs, bounded approvals, RUSTSEC)
- **NanoBot** investe em **opiniated multi-channel parity** (Telegram/Discord feature alignment)
- **PicoClaw** investe em **minimalismo pragmático** (dependências atualizadas, foco em autenticação)

---

## 6. Tração e Maturidade da Comunidade

### Velocidade de Iteração

| Projeto | PRs/24h | Merges/24h | Taxa Merge | Velocidade |
|---------|---------|------------|------------|------------|
| **CoPaw** | 41 | 17 | **41%** | 🟢 Veloz |
| **PicoClaw** | 14 | 7 | **50%** | 🟢 Veloz |
| **NanoBot** | 17 | 7 | **41%** | 🟢 Veloz |
| **Hermes Agent** | 50 | 2 | **4%** | 🔴 Lentidão |
| **ZeroClaw** | 50 | 2 | **4%** | 🔴 Lentidão |
| **IronClaw** | 0 | 0 | N/A | ⚪ Estagnado |

**Análise:** CoPaw e PicoClaw demonstram **eficiência de review superior**, processando 41-50% dos PRs abertos em 24h. Hermes Agent e ZeroClaw sofrem de **gargalo de review** com apenas 4% de taxa de merge — volume de contribuições excede capacidade de integração. Isso não é necessariamente negativo: pode indicar processo de quality gate rigoroso ou simplesmente sobrecarga operacional.

### Qualidade de Bug Resolution

| Projeto | Bugs Resolvidos/24h | Taxa Resolução | Estabilidade Aparente |
|---------|---------------------|-----------------|-----------------------|
| **PicoClaw** | 1/1 | **100%** | 🟢 Estável |
| **NanoBot** | 7/2 | **>100%** (backlog) | 🟢 Estável |
| **CoPaw** | 17/~5 P1 | **Alta** | 🟡 Em estabilização |
| **Hermes Agent** | 2/~9 P0/P1 | **22%** | 🔴 Crítico |
| **ZeroClaw** | 2/~8 P1 | **25%** | 🔴 Crítico |

### Consolidando vs. Iterando

| Perfil | Projetos | Comportamento |
|--------|----------|---------------|
| **Consolidando Qualidade** | NanoBot, PicoClaw, CoPaw | Alta taxa de merge, bugs resolvidos, releases pausadas para estabilização |
| **Iterando Rápido** | Hermes Agent, ZeroClaw | Alto volume de PRs, baixa taxa de merge, dívida técnica acumulada |
| **Monitorando** | IronClaw, NullClaw | Baixa ou nenhuma atividade, foco em benchmarks ou estagnação |

---

## 7. Sinais de Tendência

### Tendências de Mercado Extraídas

**1. Multi-channel Parity como Diferenciador Competitivo**
O ecossistema investe pesadamente em paridade de features entre canais (Telegram↔Discord, WhatsApp↔Matrix). Isso indica que **usuários esperam experiência consistente independentemente da plataforma de chat**, e que agentes que resolvem essa abstração adequadamente capturarão adoção.

**2. Memória Persistente e Context Management como Estadio Crítico**
Com 4/5 projetos ativos reportando bugs em gestão de sessão, compaction e eviction, o ecossistema reconhece que **memória de longo prazo** é o próximo problema技术上 difícil. Quem resolver context management confiável terá vantagem competitiva significativa.

**3. Enterprise/B2B Features em Ascensão**
CoPaw Hub (model gateway, member governance), Hermes Agent plugin catalog, e ZeroClaw RFC governance indicam **profissionalização do ecossistema**. O mercado está migrando de "agentes para devs" para "plataformas para organizações".

**4. Voice e Multimodal como Próxima Fronteira**
CoPaw (#7785 realtime voice chat), ZeroClaw (#10925 mirror voice replies, #10932 STT echo), e Hermes Agent STT providers mostram que **voice interaction está saindo de proof-of-concept** para feature production-ready.

**5. Security-First como Requisito de Mercado**
ZeroClaw com RUSTSEC advisories (#9899), bounded tool approvals (#10937), Hermes Agent cross-origin leak (#109440) e CoPaw memory recall privacy bug (#7835) indicam que **segurança em agentes multi-tenant** será requisito tabelado em 2027.

**6. Plugin Ecosystems como Moat**
Hermes Agent marketplace, CoPaw plugin catalog, e ZeroClaw bounded scopes mostram que **extensibilidade via plugins** é estratégia comum. Quem construir ecossistema de desenvolvedores mais atraente wins no longo prazo.

---

## 8. Síntese para Decisores

| Stakeholder | Recomendação |
|-------------|--------------|
| **Desenvolvedor individuais** | Considerar NanoBot ou PicoClaw para estabilidade e baixa fricção; Hermes Agent para profundidade de features |
| **Times/Empresas** | CoPaw oferece melhor platform B2B story; ZeroClaw para segurança e compliance |
| **Infraestrutura/SREs** | ZeroClaw (Rust, bounded scopes, RFC governance) |
| **Pesquisa/Benchmarks** | IronClaw para tracking de qualidade de modelos; Hermes Agent para experimentação com MoA |
| **Integração de Canais** | NanoBot ou PicoClaw para paridade Telegram/Discord; ZeroClaw para Matrix/WhatsApp |

**Aviso:** Hermes Agent e ZeroClaw apresentam bugs P0/P1 ativos que afetam produção. Para deployments críticos, priorizar NanoBot, CoPaw ou PicoClaw até que os ciclos de estabilização completem.

---

*Relatório gerado em 2026-09-18. Dados consolidados de 7 repositórios open source do ecossistema de agentes de IA.*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-09-18

---

## 1. Panorama do Dia

O projeto NanoBot apresenta alta atividade comunitária no dia de hoje, com **17 PRs atualizados** e **4 issues** no período de 24 horas. A equipe demonstrou foco significativo em **estabilidade e regressões** — com a correção de um bug crítico de prioridae P1 relacionado à serialização de mensagens por sessão (#5792) — além de melhorias incrementais em múltiplos canais (Telegram, Discord) e funcionalidades do sistema de cron. Nenhum lançamento foi publicado nas últimas 24h, indicando que o time está em ciclo de integração antes de um próximo release.

---

## 2. Lançamentos

**Nenhum release nas últimas 24 horas.**

O projeto não publicou novas versões desde o período reportado. Os últimos builds (0.3.5 conforme mencionado na issue #5798) permanecem estáveis como referência.

---

## 3. Progresso do Projeto

### PRs Fechados/Merged Hoje (7)

| # | Título | Impacto |
|---|--------|---------|
| [#5792](https://github.com/HKUDS/nanobot/pull/5792) | `fix(agent): serialize and batch per-session messages` | **Crítico** — Corrige regressão P1 instalando inbox FIFO autoritativo antes de cada worker de sessão, eliminando caminhos de execução específicos de startup e republished de bus |
| [#5799](https://github.com/HKUDS/nanobot/pull/5799) | `fix(channels): drop compaction notices on channels without in-place affordance` | Resolve ruído de compaction em QQ onde lifecycle notices apareciam como mensagens de chat ordinárias |
| [#5802](https://github.com/HKUDS/nanobot/pull/5802) | `fix(webui): hide model details until AI setup is complete` | Melhora UX ocultando detalhes do modelo e fallback quando setup é necessário |
| [#5379](https://github.com/HKUDS/nanobot/pull/5379) | `fix(memory): preserve full consolidation input` | Corrige truncamento de archive input durante consolidação (fecha #5377) |
| [#5765](https://github.com/HKUDS/nanobot/pull/5765) | `fix(api): require boolean stream values` | Adiciona validação estrita para parâmetro `stream` na API OpenAI-compatible |
| [#5766](https://github.com/HKUDS/nanobot/pull/5766) | `fix(cron): reject conflicting schedule fields` | Impede silently discarding de campos de schedule mutuamente exclusivos |
| [#5762](https://github.com/HKUDS/nanobot/pull/5762) | `fix(cron): reject past one-time schedules in the cron tool` | Valida que jobs cron com `at` no passado não sejam aceitos |

### Destaque de Progresso

A correção em **#5792** representa um avanço significativo em confiabilidade: ao centralizar admission de inputs através de uma única função para channel input, automation turns e comandos `/compact`, o projeto elimina race conditions que podiam causar comportamento inesperado em sessões concorrentes.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Atenção

| # | Título | Comentários | Tema |
|---|--------|-------------|------|
| [#5377](https://github.com/HKUDS/nanobot/issues/5377) | consolidation truncates archive input | 3 | **Consolidação de memória** — Bug onde `Consolidator.archive()` trunca conversa ao budget de tokens, mas callers avançam `last_consolidated` além do batch original |
| [#5784](https://github.com/HKUDS/nanobot/issues/5784) | QQ compaction notices as standalone messages | 2 | **UX em canais** — Notificações de compactação aparecem como mensagens de chat no QQ |
| [#5459](https://github.com/HKUDS/nanobot/issues/5459) | Add native Google Vertex AI provider for Claude | 1 | **Expansão de provedores** — Solicitação para suporte first-class ao Google Vertex AI |

### Análise de Demandas

A comunidade demonstra preocupação significativa com **confiabilidade de sessão** e **preservação de estado**. A issue #5377 (já resolvida em #5379) e a preocupação com checkpoints em #5801 indicam que o sistema de memória/consolidação é uma área crítica. Paralelamente, há demanda crescente por **diversificação de provedores** (Vertex AI) e **paridade entre canais** (Telegram ↔ Discord).

---

## 5. Bugs e Estabilidade

### Bugs Reportados (Issues Abertas: 2)

| # | Severidade | Título | Descrição |
|---|------------|--------|-----------|
| [#5798](https://github.com/HKUDS/nanobot/issues/5798) | **Alta** | Reply cross-session problem | Mensagens de outras sessões aparecem na sessão errada durante回复. Regression desde 0.3.0 → 0.3.5 |
| [#5459](https://github.com/HKUDS/nanobot/issues/5459) | Feature | Missing Vertex AI provider | Não é bug, mas indica gap de funcionalidade |

### Bugs Resolvidos Hoje (7 PRs)

| # | Tipo | Área |
|---|------|------|
| [#5792](https://github.com/HKUDS/nanobot/pull/5792) | Regressão P1 | Agent/Session |
| [#5799](https://github.com/HKUDS/nanobot/pull/5799) | Bug de UX | Channels (QQ) |
| [#5765](https://github.com/HKUDS/nanobot/pull/5765) | Bug de validação | API |
| [#5766](https://github.com/HKUDS/nanobot/pull/5766) | Bug lógico | Cron tool |
| [#5762](https://github.com/HKUDS/nanobot/pull/5762) | Bug lógico | Cron tool |
| [#5379](https://github.com/HKUDS/nanobot/pull/5379) | Bug de memória | Memory consolidation |
| [#5802](https://github.com/HKUDS/nanobot/pull/5802) | Bug de UX | WebUI |

### Status de Estabilidade

**Saúde Geral: Boa** — O ciclo de hoje mostra foco defensivo com 7 correções merged, incluindo uma regressão P1. A issue #5798 (cross-session replies) requer atenção imediata por ser uma regressão user-facing.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features em Desenvolvimento (PRs Abertos)

| # | Título | Prioridade | Área | Sinal Estratégico |
|---|--------|------------|------|-------------------|
| [#5803](https://github.com/HKUDS/nanobot/pull/5803) | Small improvements for Telegram | P2 | Channels | Paridade de features entre canais |
| [#5562](https://github.com/HKUDS/nanobot/pull/5562) | Stream tool progress events | P2 | API | Melhor observabilidade para clientes |
| [#5800](https://github.com/HKUDS/nanobot/pull/5800) | Discord replyToMessage parity with Telegram | P2 | Channels | Paridade Telegram-Discord |
| [#5352](https://github.com/HKUDS/nanobot/pull/5352) | Add model provider removal controls | P2 | WebUI/Provider | Melhor gestão de configurações |
| [#5718](https://github.com/HKUDS/nanobot/pull/5718) | OpenRouter native image generation API | P2 | Provider | Expansão de capacidades de imagem |
| [#5611](https://github.com/HKUDS/nanobot/pull/5611) | Bound reasoning replay to latest assistant turn | Feature | Agent | Otimização de performance |
| [#5152](https://github.com/HKUDS/nanobot/pull/5152) | Mark partial completion results | Regression | Subagent | Melhor feedback de tasks |

### Feature Request em Issue

| # | Título | Demanda |
|---|--------|---------|
| [#5459](https://github.com/HKUDS/nanobot/issues/5459) | Add native Google Vertex AI provider | Suporte para Claude via Vertex AI |

### Sinais de Roadmap

1. **Paridade entre canais** é tema recorrente (Telegram ↔ Discord)
2. **Observabilidade** em streaming API (#5562) indica foco em developer experience
3. **Gestão de provedores** (#5352) sugere refinamento do sistema multi-provider
4. **Vertex AI** (#5459) pode indicar expansão além de AWS Bedrock para Google Cloud

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Categoria | Descrição | Evidência |
|-----------|-----------|-----------|
| **Cross-session replies** | Mensagens respondem na sessão errada | #5798 — "在别的会话里的问题 会串到不相干的会话里进行恢复" |
| **Ruído de compaction** | Notificações de compressão poluem o chat | #5784/#5799 —QQ users recebem mensagens "Compressing context…" |
| **Checkpoint loss** | Reinícios perdem tool results e estado | #5801 — metadata updates sobrescrevem checkpoints |
| **Concurrent file writes** | Writes simultâneos podem perder dados | #5779/#4798 — truncamento e interleaving |

### Cenários de Uso Identificados

- **Self-hosting com QQ**: Usuários auto-hospedados enfrentam limitações específicas de canais sem edit/recall API (#5784)
- **Multi-sessão concurrente**: Gerenciamento de múltiplas sessões ativas revela race conditions (#5792, #5798)
- **Provedores enterprise**: Demanda por Google Vertex AI indica uso em contextos corporativos (#5459)

### Satisfação/Insatisfação

**Positivo**: Community ativa com múltiplas contribuições simultâneas, correções rápidas de bugs reportados.
**Negativo**: Regressões desde 0.3.0→0.3.5 causam frustração, especialmente em funcionalidades core de sessão.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Em Espera

| # | Idade | Título | Status | Ação Recomendada |
|---|-------|--------|--------|------------------|
| [#5152](https://github.com/HKUDS/nanobot/pull/5152) | ~52 dias | Mark partial completion results | Open | Review e feedback da equipe |
| [#5459](https://github.com/HKUDS/nanobot/issues/5459) | ~29 dias | Add native Google Vertex AI provider | Open | Triagem e decisão de roadmap |
| [#5611](https://github.com/HKUDS/nanobot/pull/5611) | ~19 dias | Bound reasoning replay | Open (conflict) | Resolver conflitos de merge |
| [#5562](https://github.com/HKUDS/nanobot/pull/5562) | ~22 dias | Stream tool progress events | Open | Priorização para Developer Experience |

### PRs com Conflitos ou Em Espera

| # | Título | Problema |
|---|--------|----------|
| [#5611](https://github.com/HKUDS/nanobot/pull/5611) | Bound reasoning replay | Marcado como `[conflict]` |
| [#5352](https://github.com/HKUDS/nanobot/pull/5352) | Model provider removal | Marcado como `[conflict]` |

### Priorização Recomendada

1. **#5798** — Bug de cross-session: regressão user-facing, requer hotfix
2. **#5611** — Conflito de merge bloqueando otimização de reasoning
3. **#5459** — Decisão de roadmap para Vertex AI provider
4. **#5562** — Feature de observabilidade para API clients

---

## Métricas Consolidada do Dia

| Métrica | Valor |
|---------|-------|
| Issues ativas | 2 |
| Issues fechadas | 2 |
| PRs abertos | 10 |
| PRs fechados/merged | 7 |
| Regressões corrigidas | 1 (P1: #5792) |
| Releases | 0 |
| Bugs críticos abertos | 1 (#5798) |

---

*Relatório gerado em 2026-09-18 baseado em dados do GitHub do repositório [HKYUDS/nanobot](https://github.com/HKUDS/nanobot).*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent
## NousResearch/hermes-agent — 2026-09-18

---

## 1. Panorama do Dia

O projeto Hermes Agent registrou **extrema atividade** nas últimas 24h, com 50 issues e 50 PRs atualizados. A saúde geral indica **tensão operacional** — 4 bugs P0/P1 estão abertos simultaneamente, incluindo um vazamento de credenciais cross-origin de severidade P1 e problemas de sessão que travam o turn lease. A comunidade está altamente engajada (112 comentários na issue #88584), mas a taxa de merge permanece baixa (apenas 2 PRs fechados/merged). Não houve lançamentos, e a versão mais recente continua sendo v0.21.3,发出一系列P2 regressions no desktop e CLI que afetam a estabilidade em produção.

---

## 2. Lançamentos

**Nenhum release nas últimas 24h.**

A ausência de releases combina com o alto volume de PRs abertos (48), sugerindo que a equipe está em ciclo de revisão ativo antes de um próximo tag. Issues como #88584 indicam que a integração automatizada com branch de release está bloqueada, o que pode explicar o hiatus.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados (2 total)

| # | PR | Autor | Impacto |
|---|-----|-------|---------|
| [#114451](https://github.com/NousResearch/hermes-agent/pull/114451) | `fix: parse JSON receipts as objects so directory scans cannot wedge` | JoaoMarcos44 | **P1** — Corrige wedge em scans de diretório que afetavam Bot Chat drain |
| [#112220](https://github.com/NousResearch/hermes-agent/pull/112220) | `fix(desktop): route url chips through the link surface` | DavidMetcalfe | **P3** — Permite ⌘/Ctrl-click em URLs de mensagens para abrir no browser nativo |

**Avanços-chave:**
- **P1 resolution**: O bug de parse JSON (#114240) causava wedge em qualquer receipt/scan de estado, potencialmente travando o sistema. Corrigido.
- **Desktop UX**: Chips de URL em mensagens de usuário agora respeitam atalhos de browser padrão, eliminando comportamento estranho do preview pane.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| # | Título | Comentários | Reações | Analise |
|---|--------|-------------|---------|---------|
| [#88584](https://github.com/NousResearch/hermes-agent/issues/88584) | Automated Nous integration blocked | 112 | 0 | **Crítico** — Merge automatizado Nous→Enterkey travado por conflitos em `cron/jobs.py`; dashboard updater desatualizado |
| [#106665](https://github.com/NousResearch/hermes-agent/issues/106665) | Desktop rendering/click issues at 125% scaling | 16 | 0 | Dores de usabilidade no Windows com escalamento de display |
| [#111237](https://github.com/NousResearch/hermes-agent/issues/111237) | [Feature] Self-tuning harness — opt-in local evolver loop | 11 | 0 | Proposta inovadora de loop de evolução local overnight |
| [#107288](https://github.com/NousResearch/hermes-agent/issues/107288) | Module cycle breaks all runtime desktop plugins | 7 | 0 | Regressão P1 caused by #107212; todos plugins de disco falham |

**Análise das Demandas:**
- **Integração Nous**: A issue com 112 comentários (#88584) domina a discussão — indica que a automação de release entre forks (Nous e Enterkey) está quebrada e afeta workflows de CI/CD de toda a comunidade.
- **Desktop Windows**: Problemas de escalamento 125% (#106665) e plugins quebrados (#107288) mostram que a experiência desktop é instável nesta versão.
- **Evolução de IA**: #111237 propõe um "self-tuning harness" — um evolver loop local overnight que mantém apenas tweaks estatisticamente creditados. Este é um sinal forte de que a comunidade quer automação de otimização de agentes.

---

## 5. Bugs e Estabilidade

### P0 — Críticos (2 ativos)

| # | Título | Componente | Risco |
|---|--------|------------|-------|
| [#112358](https://github.com/NousResearch/hermes-agent/issues/112358) | MoA: prompt cache hits pinned to system prompt; re-billed every call (~$147 em 49 min) | agent, usage-cost | **Caching, Custos** |
| [#114456](https://github.com/NousResearch/hermes-agent/issues/114456) | Async delegation stalls behind busy session; prompt cache invalidated | gateway, sessions | **Sessões, Mensagens** |

### P1 — Altos (7 ativos, alguns duplicate/closed)

| # | Título | Componente | Status |
|---|--------|------------|--------|
| [#107288](https://github.com/NousResearch/hermes-agent/issues/107288) | Module cycle breaks all runtime desktop plugins | desktop, plugins | **Ativo** |
| [#107191](https://github.com/NousResearch/hermes-agent/issues/107191) | model_aliases: custom base_url dropped at CLI startup (401) | cli, config | **Closed** |
| [#109440](https://github.com/NousResearch/hermes-agent/issues/109440) | `-m <alias>` sends API key to wrong provider (cross-origin leak) | cli, auth | **Closed** (duplicate) |
| [#107312](https://github.com/NousResearch/hermes-agent/issues/107312) | Desktop plugin SDK: Object.keys(undefined) breaks all plugins | desktop, plugins | **Closed** |
| [#103933](https://github.com/NousResearch/hermes-agent/issues/103933) | `-m/--model` drops base_url, misroutes to default provider | cli, config | **Closed** |
| [#104303](https://github.com/NousResearch/hermes-agent/issues/104303) | Turn lease held forever on stream failure — session locks out | agent, sessions | **Ativo** |
| [#103746](https://github.com/NousResearch/hermes-agent/issues/103746) | MCP servers break 60-90s after connection (revival logic) | agent, tools, mcp | **Ativo** |

### P2 — Médios (destaques, 15+ ativos)

| # | Título | Componente |
|---|--------|------------|
| [#114395](https://github.com/NousResearch/hermes-agent/issues/114395) | ACP tool calls never reach terminal status (in_progress forever) |
| [#114353](https://github.com/NousResearch/hermes-agent/issues/114353) | `HERMES_HOME` with literal `~` resolves relative to cwd |
| [#114350](https://github.com/NousResearch/hermes-agent/issues/114350) | Streamable HTTP MCP client fails with non-latest protocol negotiation |
| [#61443](https://github.com/NousResearch/hermes-agent/issues/61443) | nix desktop build breaks on every electron bump (hardcoded hash) |
| [#89896](https://github.com/NousResearch/hermes-agent/issues/89896) | Desktop auto-speak races — doubles, truncates, or skips |

**Análise de Estabilidade:**
- **Sessões travadas**: Turn lease nunca liberado (#104303) e delegation stalls (#114456) são os bugs mais perigosos — após ocorrência, o usuário precisa reiniciar o session.
- **Desktop quebrado**: A combinação de #107288 + #107312 + escalamento 125% (#106665) = experiência desktop severamente degradada.
- **MCP instável**: Conexões MCP quebram após 60-90s — problema recorrente desde v0.21.0.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features P3 (12+ abertas hoje)

| # | Título | Proponente | Sinais |
|---|--------|------------|--------|
| [#111237](https://github.com/NousResearch/hermes-agent/issues/111237) | Self-tuning harness — opt-in local evolver loop | kvnloo | **Roadmap forte** — 11 comments, integra com #111189 e #111200 |
| [#114203](https://github.com/NousResearch/hermes-agent/pull/114203) | Integrate Jarvis | IbrahimAbdelsattar | **Integração de assistente** |
| [#114364](https://github.com/NousResearch/hermes-agent/issues/114364) | Run extracted-memory-provider pilot via plugins market | ahrazzle | **Plugin Catalog strategy** |
| [#114284](https://github.com/NousResearch/hermes-agent/issues/114284) | Add Turkish (tr) locale for desktop | aytacbilgisayar-hub | **i18n expansion** |
| [#114372](https://github.com/NousResearch/hermes-agent/issues/114372) | Command STT providers lack `{prompt}` placeholder | andersonjeccel | **STT flexibility** |
| [#114057](https://github.com/NousResearch/hermes-agent/pull/114057) | Add bot-forge to plugin catalog | BkashJEE | **Plugin ecosystem** |
| [#114453](https://github.com/NousResearch/hermes-agent/pull/114453) | Add localsend to plugin catalog | tylerbrevard | **File transfer plugin** |

**Sinais de Roadmap:**
1. **Memory providers como plugins**: #114364 propõe usar o Plugin Catalog como piloto para memory providers extraídos de core — indica estratégia de extração modular.
2. **Evolver loop local**: #111237 é a "demanda lado" após supply-side bets (#111189, #111200) — comunidade quer automação de otimização de scaffolds.
3. **Plugin ecosystem crescendo**: 3 PRs de catalog hoje — localsend, bot-forge, Jarvis — mostra que a comunidade está investindo no marketplace.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Dor | Evidência | Severidade |
|-----|----------|------------|
| **Desktop instability on Windows** | #106665, #107288, #107312, #89896, #95713 | **Alta** — múltiplos bugs afectan UX básico |
| **CLI config broken for model aliases** | #107191, #103933, #109440 | **Alta** — users não consegue usar aliases customizados |
| **MCP servers disconnecting** | #103746 | **Média** — uso de ferramentas externas quebrado após 60-90s |
| **Memory providers undocumented** | #34271 (8 👍) | **Média** — Mnemosyne excluded da documentação oficial |
| **Prompt cache não funciona em MoA** | #112358 | **Alta** — $147 em 49 min de re-billing |

### Cenários de Uso Reportados

- **Agentes em produção com escalamento 125% no Windows** (tomekdot) — UI quebra, sessões stickam na top bar
- **Teams usando aliases de modelo customizados** (ramonbastos, ramazangur) — fallthrough para OpenRouter 401
- **Usuários com Claude Code OAuth no host** — testes falham por credenciais ambientes (#114424)
- **Desenvolvedores Nix** — build desktop quebrado em cada bump de electron (#61443)

### Satisfação/Insatisfação

**Insatisfação alta** em:
- Desktop app — considerada instável nesta versão
- CLI model alias resolution — regressão persistente
- MCP tool use — connectivity não confiável

**Sinais de satisfação:**
- Mnemosyne memory provider tem 8 👍 (#34271) — usuários querem mais opções locais
- Self-tuning harness tem 11 comments em 3 dias — interesse em automação de otimização
- Plugin catalog submissions ativas — ecossistema crescendo

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta > 3 Meses

| # | Título | Criado | Comentários | Prioridade |
|---|--------|--------|-------------|------------|
| [#34271](https://github.com/NousResearch/hermes-agent/issues/34271) | Proposal: Add Mnemosyne to official memory provider documentation | 2026-05-29 | 6 | P3, Needs Decision |
| [#33072](https://github.com/NousResearch/hermes-agent/issues/33072) | [gateway] POST /v1/runs `model` override silently ignored | 2026-05-27 | 3 | P3 |
| [#43366](https://github.com/NousResearch/hermes-agent/issues/43366) | Gmail send/reply can send literal `\n` instead of line breaks | 2026-06-10 | 3 | P3 |
| [#50766](https://github.com/NousResearch/hermes-agent/issues/50766) | Typing indicator persists after /new | 2026-06-22 | 3 | P2 |
| [#61443](https://github.com/NousResearch/hermes-agent/issues/61443) | nix: .#desktop build breaks on every electron bump | 2026-07-09 | 5 | P2 |

### Issues Ativas com Alto Impacto Sem PR

| # | Título | Impacto | Pior cenário |
|---|--------|---------|--------------|
| [#104303](https://github.com/NousResearch/hermes-agent/issues/104303) | Turn lease held forever on stream failure | **P1** | Session locked para sempre; usuário precisa restart |
| [#103746](https://github.com/NousResearch/hermes-agent/issues/103746) | MCP servers break 60-90s | **P2** | Ferramentas externas ficam indisponíveis após período curto |
| [#114395](https://github.com/NousResearch/hermes-agent/issues/114395) | ACP tool calls stuck in_progress forever | **P2** | Tool calls nunca completam na UI |

---

## Indicadores de Saúde do Projeto

| Indicador | Valor | Avaliação |
|-----------|-------|-----------|
| Issues ativas (24h) | 40 | 🔴 Alta carga |
| PRs abertos (24h) | 48 | 🔴 Alta carga |
| PRs mergeados (24h) | 2 | 🔴 Taxa baixa |
| Releases (24h) | 0 | 🟡 Sem atividade de release |
| Bugs P0 ativos | 2 | 🔴 Críticos abertos |
| Bugs P1 ativos | ~7 | 🔴 Alto volume |
| Tempo médio de resposta em issues quentes | <24h | 🟢 Comunidade ativa |
| Engajamento (comentários) | 112 max | 🟢 Muito alto |

**Veredicto:** Hermes Agent está em **modo de estabilização**. A comunidade está altamente ativa, mas a equipe de manutenção precisa priorizar P0/P1 (turn lease, session stalls, desktop plugins) antes do próximo release. A ausência de releases combinada com alta atividade de PRs sugere que um tag está próximo, mas a qualidade deve ser cuidadosamente validada dado o volume de regressões P1.

---

*Relatório gerado em 2026-09-18. Dados fonte: GitHub NousResearch/hermes-agent, últimas 24h.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório de Projeto: PicoClaw
## 📅 Data de Referência: 2026-09-18

---

## 1. Panorama do Dia

O projeto PicoClaw demonstra **alta atividade de desenvolvimento** neste período, com 14 PRs atualizados nas últimas 24h. A maioria das atividades concentra-se em **atualizações de dependências automatizadas** (6 PRs do dependabot) e refatorações de código. Apenas 1 issue foi fechada, relacionada a problemas de autenticação com canal QQ. Não houve novos lançamentos hoje, indicando foco em trabalho interno de manutenção e preparação para próxima versão.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24h.**

| Status | Count |
|--------|-------|
| Novas Releases | 0 |
| Releases Pendentes | Verificar pipeline de CI/CD |

> *Observação: A ausência de releases pode indicar que o projeto está em fase de integração de múltiplas PRs antes de um próximo tag. Recomenda-se monitorar branch `main` para próximos merge windows.*

---

## 3. Progresso do Projeto

### PRs Fechadas/Merged Hoje (7 total)

| # | Título | Tipo | Impacto |
|---|--------|------|---------|
| [#3360](https://github.com/sipeed/picoclaw/pull/3360) | Bump Lark SDK v3.9.4 → v3.11.0 | Dependencies | Patch de segurança/funcionalidade |
| [#3361](https://github.com/sipeed/picoclaw/pull/3361) | Bump Protobuf 1.36.11 → 1.36.12 | Dependencies | Correção de bugs |
| [#3364](https://github.com/sipeed/picoclaw/pull/3364) | Bump AWS SDK v1.42.0 → v1.45.1 | Dependencies | Novos recursos AWS |
| [#3362](https://github.com/sipeed/picoclaw/pull/3362) | Bump golang.org/x/term 0.44.0 → 0.45.0 | Dependencies | Atualização stdlib |
| [#3363](https://github.com/sipeed/picoclaw/pull/3363) | Bump irc-go 0.6.0 → 0.7.0 | Dependencies | Suporte IRCv3 melhorado |
| [#3358](https://github.com/sipeed/picoclaw/pull/3358) | fix(agent): thread responses to originating message | Bug Fix | **Crítico UX** - Respostas agora vinculadas à mensagem original |
| [#1158](https://github.com/sipeed/picoclaw/pull/1158) | feat: add anthropic-messages protocol | Feature | Suporte nativo API Anthropic Messages |

### Destaque: Correção de UX em Agentes ([#3358](https://github.com/sipeed/picoclaw/pull/3358))
O PR #3358 resolve problema onde respostas de agentes em grupos apareciam desconectadas da mensagem que as originou, melhorando significativamente a experiência em ambientes com alto volume de mensagens.

### Destaque: Suporte Anthropic Messages ([#1158](https://github.com/sipeed/picoclaw/pull/1158))
Implementação aguardada desde Issue #269, permitindo uso de serviços proxy que suportam apenas o formato `/v1/messages` nativo da Anthropic.

---

## 4. Temas Quentes da Comunidade

### Issue em Destaque

| # | Título | Status | Comentários | Reações |
|---|--------|--------|-------------|---------|
| [#3349](https://github.com/sipeed/picoclaw/issues/3349) | QQ频道无法正常使用 (Canal QQ não funciona) | 🔴 FECHADA | 5 | 0 |

**Análise:** Issue relatada pelo usuário `bxwl5` sobre erro 401 ao obter websocket info para canal QQ, com mensagem de erro em chino indicando problema de autenticação no header Authorization. Recebeu atenção da comunidade com 5 comentários antes do fechamento.

### PR em Destaque (por impacto técnico)

| # | Título | Status | Complexidade |
|---|--------|--------|--------------|
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) | refactor(deltachat): cleanup implementation, documentation -200LOC | 🟡 ABERTA | Alta |

**Análise:** PR de refatoração que remove features legadas, atualiza documentação e renomeia campos (`invite_link` → `join_invite_link`). Reduz codebase em ~200 LOC indicando dívida técnica sendo paga.

---

## 5. Bugs e Estabilidade

### Issues Reportadas (Últimas 24h)

| # | Severidade | Descrição | Status |
|---|------------|-----------|--------|
| [#3349](https://github.com/sipeed/picoclaw/issues/3349) | 🔴 Alta | Erro 401 no canal QQ - autenticação WS | ✅ FECHADA |

### Correções de Bugs Merged

| # | Componente | Descrição |
|---|------------|-----------|
| [#3358](https://github.com/sipeed/picoclaw/pull/3358) | Agent | Respostas não vinculadas à mensagem original |
| [#3376](https://github.com/sipeed/picoclaw/pull/3376) | DeltaChat | Erro de validação "unknown type deltachat" |

**Métricas de Estabilidade:**
- Taxa de resolução de bugs: **100%** (1/1 issue fechada)
- Correções pendentes de review: 2

---

## 6. Pedidos de Features e Sinais de Roadmap

### PRs Abertos com Potencial de Roadmap

| # | Título | Tipo | Prioridade Sinalizada |
|---|--------|------|----------------------|
| [#3381](https://github.com/sipeed/picoclaw/pull/3381) | Switch OpenAI to Responses API | ✨ Feature | 🔥 Alta - Tendência API |
| [#3354](https://github.com/sipeed/picoclaw/pull/3354) | IRCv3 multiline messages assembly | ✨ Feature | 🟡 Média |
| [#3344](https://github.com/sipeed/picoclaw/pull/3344) | Build Remote Agent phone pairing (gbr/1) | ✨ Feature | 🔧 Experimental |
| [#3368](https://github.com/sipeed/picoclaw/pull/3368) | Parallel Search MCP setup docs | 📖 Docs | 🟢 Baixa |

### Análise de Tendências

1. **Modernização de APIs LLM:** PR #3381 busca adaptar ao novo Responses API da OpenAI, indicando alinhamento com evolução das APIs de IA.

2. **Expansão de Canais:** Suporte a pairing remoto (gbr/1) e documentação para MCP demonstram estratégia de extensibilidade.

3. **Melhorias IRC:** Suporte a multiline via draft/multiline IRCv3 indica foco em interoperabilidade com clientes modernos.

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Categoria | Frequência | Descrição |
|-----------|------------|-----------|
| 🔴 Canal QQ | 1 incidente | Problemas de autenticação websocket |
| 🟡 DeltaChat | 1 issue (resolvida) | Configuração e validação de canal |
| 🟢 UX Grupos | 1 issue (resolvida) | Respostas desconectadas em grupos |

### Cenários de Uso Observados

- **QQ/Telegram/IRC:** Usuários esperam experiência de chat fluida com threading correto
- **Agentes Remotos:** Interesse em pairing telefone-desktop via protocolo gbr/1
- **Provedores LLM:** Demanda por suporte a formatos API variados (Anthropic Messages, OpenAI Responses)

### Satisfação Geral

| Indicador | Status |
|-----------|--------|
| Engajamento Issues | 🟢 Moderado (5 comentários) |
| Correção de Bugs | 🟢 Alta (100% resolução) |
| Novas Features | 🟡 Em progresso |

---

## 8. Backlog que Merece Atenção

### Issues/PRs Sem Resposta (Stale)

| # | Tipo | Título | Dias Inativo | Prioridade |
|---|------|--------|--------------|------------|
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) | PR | refactor(deltachat): cleanup implementation | ~77 dias | 🟡 Alta |
| [#3354](https://github.com/sipeed/picoclaw/pull/3354) | PR | IRCv3 multiline support | ~18 dias | 🟡 Média |
| [#3353](https://github.com/sipeed/picoclaw/pull/3353) | PR | bound tool feedback animations | ~18 dias | 🟢 Baixa |
| [#3344](https://github.com/sipeed/picoclaw/pull/3344) | PR | Build Remote Agent phone pairing | ~26 dias | 🟡 Média |

### Recomendações

1. **Revisar PR #3222** - Cleanup de 77 dias pode indicar blockers ou necessidade de rebase
2. **Avaliar PR #3381** - Atualização OpenAI Responses API pode requerir planejamento de release
3. **Priorizar review de PRs stale** - 4 PRs importantes pendentes indicam gargalo de code review

---

## Métricas Resumidas do Dia

```
┌─────────────────────────────────────────────────────┐
│  📊 PICOCLAW - STATUS 2026-09-18                    │
├─────────────────────────────────────────────────────┤
│  Issues Ativas:    0                                │
│  Issues Fechadas:  1  (100% taxa resolução)         │
│  PRs Abertos:      7  (incl. 1 alta prioridade)      │
│  PRs Fechados:     7  (6 deps + 1 bug fix + 1 feat) │
│  Releases:         0                                 │
│  Backlog Stale:    4 PRs                            │
└─────────────────────────────────────────────────────┘
```

**Veredicto:** Projeto em **saúde boa** com atividade moderada-alta. Foco atual em manutenção de dependências e preparação de features para próxima release.

---

*Relatório gerado automaticamente com base em dados GitHub de 2026-09-18*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-09-18

---

## 1. Panorama do Dia

O projeto IronClaw apresenta **atividade muito baixa** nesta data. Foi registrada apenas **1 issue aberta** nas últimas 24h, referente à análise diária de taxonomy de falhas do benchmark officeqa. Não houveram novos PRs, merges ou lançamentos. O projeto mantém um estado de monitoramento contínuo através de automações de failure taxonomy, mas não há movimentação significativa de desenvolvimento ativo ou interação da comunidade no período analisado.

---

## 2. Lançamentos

**Nenhum novo release nas últimas 24h.**

O projeto não publicou versões ou tags novas neste período. Para informações sobre lançamentos anteriores, consultar a [página de releases](https://github.com/nearai/ironclaw/releases) do repositório.

---

## 3. Progresso do Projeto

**Nenhum PR merged ou fechado nas últimas 24h.**

Não há registro de pull requests que representem progresso tangível no código-base do IronClaw neste período.

---

## 4. Temas Quentes da Comunidade

### Issue em Destaque

| #8101 | Daily ironclaw failure taxonomy — 2026-09-17 |
|-------|----------------------------------------------|
| **Status** | 🟢 ABERTA |
| **Autor** | pranavraja99 |
| **Criação** | 2026-09-17 |
| **Comentários** | 0 |
| **Reações** | 👍 0 |

**Análise do conteúdo:**

A issue documenta a análise diária de failures do IronClaw, especificamente:

- **Suite analisada:** officeqa (35 non-pass)
- **Link do benchmark:** [officeqa run específico](https://nearai.github.io/benchmarks/#/runs/ironclaw/officeqa/3c277fef-4853-4f2b-affe-3d82c4df8a5e)
- **Natureza dos erros:** A issue menciona que os 35 non-pass tasks são "overwhelmingly genuine model-quality errors" relacionados ao modelo DeepSeek-V4-Flash

**Interpretação:** Esta é uma issue automática/de automação de monitoramento que indica que a maioria das falhas são relacionadas à qualidade do modelo subjacente (DeepSeek-V4-Flash) e não necessariamente bugs no código do IronClaw. A comunidade parece estar em modo de observação e rastreamento de métricas de desempenho.

🔗 [Ver Issue #8101](https://github.com/nearai/ironclaw/issues/8101)

---

## 5. Bugs e Estabilidade

**Nenhum bug ou regressão reportado diretamente nas últimas 24h.**

O sistema de failure taxonomy monitoramento indica que:
- O benchmark officeqa apresenta **35 tarefas com falha**
- A natureza predominante é **model-quality errors** (erros de qualidade do modelo DeepSeek-V4-Flash), não bugs de código ou crashes

**Observação:** A distinção é importante — os problemas parecem estar relacionados ao modelo de IA utilizado, não à infraestrutura ou código do IronClaw em si.

---

## 6. Pedidos de Features e Sinais de Roadmap

**Nenhuma nova feature request registrada nas últimas 24h.**

Não há issues com label de feature ou discussões sobre roadmap visíveis no período analisado. O projeto parece manter foco em:
- Monitoramento de métricas de benchmarks
- Análise de taxonomy de falhas
- Avaliação de qualidade de modelos suportados

---

## 7. Resumo de Feedback dos Usuários

**Ausência de feedback direto captado nas últimas 24h.**

Com 0 comentários na issue #8101 e 0 PRs com discussão, não há sinais diretos de feedback dos usuários neste período. 

**Contexto inferido:**
- O monitoramento diário de failures sugere que usuários/operadores estão ativamente trackeando o desempenho do sistema em produção
- A transparência na publicação dos resultados do benchmark (via nearai.github.io/benchmarks) indica maturidade na comunicação de métricas

---

## 8. Backlog que Merece Atenção

**Não há informações suficientes para determinar issues antigas sem resposta.**

O dataset disponível cobre apenas as últimas 24h e contém:
- 1 issue ativa (#8101) — criada em 2026-09-17 (ontem)
- 0 PRs em aberto ou pendentes

**Para análise de backlog histórico**, seria necessário acessar a lista completa de issues e PRs do repositório.

---

## Métricas Consolidada do Período

| Métrica | Valor |
|---------|-------|
| Issues abertas/ativas (24h) | 1 |
| Issues fechadas (24h) | 0 |
| PRs abertos (24h) | 0 |
| PRs merged/fechados (24h) | 0 |
| Releases novas | 0 |
| Comentários totais (issues+PRs) | 0 |

---

## Conclusão

O projeto IronClaw encontra-se em **estado de baixa atividade** em 2026-09-18, com foco primário em monitoramento automatizado de benchmarks. A issue #8101 representa uma análise de taxonomy de falhas que, embora aberta, não indica problemas críticos de estabilidade — apenas desempenho esperado do modelo de IA subjacente. Não há sinais de urgência, regressões críticas ou demandas pendentes da comunidade que requeiram ação imediata.

🔗 [Repositório IronClaw](https://github.com/nearai/ironclaw) | [Benchmarks](https://nearai.github.io/benchmarks/)

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório de Projeto — CoPaw (QwenPaw)

**Data:** 2026-09-18
**Repositório:** [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw)
**Atividade nas últimas 24h:** 20 issues (19 abertas, 1 fechada) · 41 PRs (24 abertos, 17 merged/fechados) · 0 releases

---

## 1. Panorama do Dia

O projeto mantém **nível de atividade muito elevado** com 61 eventos totais em 24h, indicando uma base de contribuidores ativa. A ausência de releases novas sugiere que a equipe pode estar em ciclo de estabilização ou preparando uma versão. O volume de issues abertas (19) com muitas datadas de ontem (2026-09-17) revela uma fila substancial de itens novos, e a distribuição entre bugs críticos, bugs平凡 e features indica que a versão 2.2.x está sob scrutiny intensivo. A presença de múltiplos PRs sob review (4 "[Under Review]") mostra pipeline saudável, mas a disparidade entre 41 PRs e 0 releases levanta questão sobre lead time de merge.

---

## 2. Lançamentos

**Nenhum novo release nas últimas 24h.**

O último release mencionado nos dados é a versão **2.2.1**, que aparece como base em vários bugs reportados (issues #7841, #7812, #7827). A versão 2.2.0 também é referenciada como afetada (issue #7840). A ausência de release novo pode indicar que a equipe priorizou estabilização após a 2.2.1 ou está em período pré-release para a próxima versão.

---

## 3. Progresso do Projeto

### PRs fechadas/merged nas últimas 24h (4)

| # | PR | Autor | Impacto |
|---|-----|-------|---------|
| #7808 | refactor(loop): pass DoomLoopStageConfig objects from catalog factory | TerebiSAMA | Limpeza de API interna — move validação de estágios para o gate catalog factory, eliminando acceptação de dicts ou objetos mistos em DoomLoopGate |
| #7779 | feat(hub): add model gateway, member governance and usage dashboard | rayrayraykk | **Feature significativa** — Hub agora atua como gateway de modelos organizacionais; admins publicam modelos e retêm chaves no cofre; membros selecionam sem credenciais diretas |
| #7802 | feat(telemetry): report daily Runtime activity on Agent execution | rayrayraykk | Adiciona telemetria de atividade diária do Agent, cobrindo tarefas agendadas e execuções — não conta startup, visitas de página ou comandos sem execução |
| #7751 | fix(docker): align app Python runtime with desktop | jinglinpeng | Alinha runtime Python do Docker com o standalone 3.11 do desktop, substituindo Python baseado em OpenSSL 3.0 do Debian |

### PRs abertas com alta atividade de review (selecionadas)

- [#7639](https://github.com/agentscope-ai/QwenPaw/pull/7639) — **perf(scroll): avoid repeated history integrity scans** (niceIrene): Otimização crítica — elimina PRAGMA quick_check em cada build de agent; reduz verificações concorrentes no mesmo history.db. Impacto direto nos bugs de scroll eviction.
- [#7637](https://github.com/agentscope-ai/QwenPaw/pull/7637) — **feat(qwenpaw-data): QwenPaw-Data app 0.3.0** (cyruszhang, [Under Review]): Workflow completo de analytics — seleção de datasource, perguntas de negócio, execução e relatório gerado.
- [#7785](https://github.com/agentscope-ai/QwenPaw/pull/7785) — **feat(voice): add realtime voice chat** (jinglinpeng): Feature ambiciosa — adiciona voz em tempo real com input de fala, playback, interrupção e seleção de modelo, integrada ao pipeline existente de chat.
- [#7835](https://github.com/agentscope-ai/QwenPaw/pull/7835) — **fix(memory): stop leaking auto-memory-recall payload to channels** (TerebiSAMA): Bug de privacidade/dados — pipeline de recall automático injeta synthetic trace no contexto LLM que vazava para canais externos.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários)

1. **[#7678](https://github.com/agentscope-ai/QwenPaw/issues/7678)** — `[Bug] spawn subAgent` · 10 comentários · aberta desde 2026-09-11
   - **Problema:** Spawn de subAgent causa timeout em todas as tarefas, mesmo com timeout estendido. Versão win2.2.0.
   - **Análise:** Bug de criticidade alta com investigação em andamento. Desenvolvedores estão usando debugging com session_id para rastrear onde a execução de subAgent trava. Este é o issue com maior volume de discussão (10 comentários), indicando que a root cause pode não ser trivial.

2. **[#6318](https://github.com/agentscope-ai/QwenPaw/issues/6318)** — `[Feature] Suporte a modelo por conversation` · 7 comentários · aberta desde 2026-07-21
   - **Problema:** Modelos atualmente vinculados ao nível de agent; usuário deseja permitir override por conversa específica.
   - **Análise:** Feature request antigo (~2 meses) com momentum constante (7 comentários). Mostra demanda real por flexibilidade de configuração. Relacionado ao PR #7832 (fix providers context-window override).

3. **[#7815](https://github.com/agentscope-ai/QwenPaw/issues/7815)** — `Console does not recover from failed lazy page chunk load` · 4 comentários
   - **Problema:** Páginas com lazy import que falham travam o UI permanentemente — não há recovery, apenas reload completo.
   - **Análise:** UX bug de alta visibilidade. Error boundary existe mas não consegue retry com sucesso. Impacta produtividade do usuário.

### PR com maior destaque

- **[#7639](https://github.com/agentscope-ai/QwenPaw/pull/7639)** — perf(scroll): evita scans repetidos de integridade de histórico
  - Este PR aborda diretamente a root cause de vários bugs de scroll (issues #7836, #7837, #7839). Seu progresso é monitorado pela comunidade como solução para um cluster de bugs relacionados.

---

## 5. Bugs e Estabilidade

### Criticidade ALTA (impacto em produção)

| # | Bug | Descrição | Canais afetados |
|---|-----|-----------|-----------------|
| [#7840](https://github.com/agentscope-ai/QwenPaw/issues/7840) | Plugins compartilham event loop do host | Chamada síncrona em qualquer plugin congela toda a instância por ~40s. Sem isolamento, sem contrato, sem monitoramento. Afeta 2.2.0 e 2.2.1 em managed cloud e Docker. | Todos os canais |
| [#7810](https://github.com/agentscope-ai/QwenPaw/issues/7810) ⚠️ **CLOSED** | Context management ignora limites do modelo | 尽管设置131k máxima, 输入飙升至271k. compressão não dispara mesmo com threshold 0.5. | Console / Backend |
| [#7812](https://github.com/agentscope-ai/QwenPaw/issues/7812) | Slash commands após startup usam sessão errada | Comandos como /compact após boot executam na sessão fallback (/compact reporta memória vazia) | Desktop (Tauri 2.2.1) |
| [#7814](https://github.com/agentscope-ai/QwenPaw/issues/7814) | SSE stream: `_strip_event_headlines` emite payload `null` | Produz SSE event inválido cujo payload não é objeto. Afeta robustness do stream. | Console SSE |
| [#7813](https://github.com/agentscope-ai/QwenPaw/issues/7813) | Console stream congela com payload `null` literal | Exceção dentro do generator de consumo é logada mas não propagada — UI fica em estado inconsistente. | Console SSE |
| [#7839](https://github.com/agentscope-ai/QwenPaw/issues/7839) | Session-sync pula arquivos órfãos + retention purge corrompe DB | 86 arquivos órfãos ignorados; purge falha com "database disk image is malformed". history.db corrompido desde 2026-08-14. | Database / Persistence |

### Criticidade MÉDIA

| # | Bug | Descrição |
|---|-----|-----------|
| [#7841](https://github.com/agentscope-ai/QwenPaw/issues/7841) | Console UI carrega antes do backend — lista de modelos e painéis de plugins ficam vazios | Desktop 2.2.1, Windows 11 |
| [#7837](https://github.com/agentscope-ai/QwenPaw/issues/7837) | User rows sem headline — scroll eviction index precisa chamar modelo para rotular span |
| [#7836](https://github.com/agentscope-ai/QwenPaw/issues/7836) | Scroll eviction dropa user turn dentro de tool-heavy span — live window perde request mas history.db retém |
| [#7817](https://github.com/agentscope-ai/QwenPaw/issues/7817) | P2P Feishu: erro 230101 — framework envia open_id onde飞书 espera user_id |
| [#7827](https://github.com/agentscope-ai/QwenPaw/issues/7827) | MCP DashScope: `/server/discover` retorna HTTP 500 nu → driver nunca ativa, Console mostra 503 |
| [#7821](https://github.com/agentscope-ai/QwenPaw/issues/7821) | MCP driver descarta OAuth refresh token — cliente mantém Authorization do connect-time |

### Criticidade BAIXA / UX

| # | Bug | Descrição |
|---|-----|-----------|
| [#7818](https://github.com/agentscope-ai/QwenPaw/issues/7818) | UI trava frequentemente + alto uso de memória no desktop Windows | Screenshot anexado mostrando 1008px de altura |
| [#7809](https://github.com/agentscope-ai/QwenPaw/issues/7809) | Tool approval cards têm texto hardcoded em inglês — sem suporte i18n |

### Regressões identificadas

Os bugs de scroll (#7836, #7837, #7839) representam uma **regressão funcional significativa** na versão 2.2.x. O scroll eviction, sistema crítico para gestão de contexto em longas conversas, está dropando turns de usuário e corrompendo o banco de dados de histórico — isso mina a confiabilidade do produto para uso profissional.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features com maior momentum

| # | Feature | Autor | Sinais de priorização |
|---|---------|-------|----------------------|
| [#6318](https://github.com/agentscope-ai/QwenPaw/issues/6318) | **Modelo por conversation** (não só por agent) | earthjasonlin | 7 comentários, ~2 meses aberto, 3 issues relacionadas (#7832, #7830) |
| [#7785](https://github.com/agentscope-ai/QwenPaw/pull/7785) | **Realtime voice chat** | jinglinpeng | PR aberto com desenvolvimento ativo — integra input de fala, playback, interrupção e seleção de modelo |
| [#7733](https://github.com/agentscope-ai/QwenPaw/issues/7733) | **Agent-autonomous context management** | MCQSJ | Feature de gestão de contexto inteligente — agent participa das decisões de eviction |
| [#7809](https://github.com/agentscope-ai/QwenPaw/issues/7809) | **i18n para tool approval cards** | singlet264 | Usuários não-ingleses impactados; texto de aprovação de ferramentas crítico para segurança |
| [#7830](https://github.com/agentscope-ai/QwenPaw/issues/7830) | **Registrar aplicações no modo OS desktop** | yingzichao | Demonstra interesse em extensibilidade do desktop — API para plugins de terceiros |
| [#6399](https://github.com/agentscope-ai/QwenPaw/pull/6399) | **UI panel para reranker config** | lecheng2018 | Complementa feature de backend existente; sob review |

### Sinais de roadmap implícitos

1. **Gestão de contexto** é o tema mais solicitado (issues #6318, #7733, #7836, #7810). A direção parece ser dar mais controle ao agent e ao usuário sobre quando e como a compactação ocorre.

2. **Voice/multimodal** está em desenvolvimento ativo (#7785), sinalizando expansão além de texto.

3. **i18n/internacionalização** (#7809, #7817) indica foco em mercados não-ingleses.

4. **Plugin ecosystem** (#7840, #7830, #7565) — necessidade de isolamento e API aberta mostra que o modelo de plugins está amadurecendo.

5. **Hub como plataforma organizacional** (#7779 merged) — a feature de model gateway sugere direção B2B/enterprise.

---

## 7. Resumo de Feedback dos Usuários

### Dores recorrentes

**Gestão de contexto tokenizada** — O usuário xiaohushi512 reportou consistentemente (issues #7678 e #7810) que:
- Limites de contexto são frequentemente excedidos (271k vs 131k configured)
- Compressão não funciona mesmo com threshold explícito
- Conexões instáveis impedem o fluxo de compressão

**Instabilidade no desktop Windows** — Múltiplos usuários (tangsuiyong #7818, Mr-luoyifeng #7841, AlexDesign420 #7812) reportaram:
- UI trava com alta memória
- Backend não está pronto quando UI carrega
- Sessão incorreta após boot

**Fragmentação de comportamento entre canais** — Bugs específicos de Feishu (#7817), MCP (#7827, #7821), Console (#7813, #7814, #7815) demonstram que a abstração multi-canal ainda tem pontos de fricção.

### Cenários de uso em evidência

- **Uso profissional/enterprise:** Context eviction, session persistence, model governance (Hub), telemetria
- **Uso desktop pessoal:** Voice chat, plugin ecosystem, OS mode extensibility
- **Integração organizacional:** MCP stores, Feishu, model gateway, OAuth

### Padrão de insatisfação

O tema central é **confiabilidade da gestão de contexto em sessões longas**. Usuários que dependem do produto para trabalho实质性 estão encontrando limites de token e comportamento de evict que não correspondem às expectativas configuradas. Este é o issue #7678 com 10 comentários e o issue #7810 (fechado mas não resolvido) — juntos representam a maior fonte de frustração.

---

## 8. Backlog que Merece Atenção

### Issues sem resposta ou com resposta insuficiente

| # | Issue | Idade | Situação | Prioridade |
|---|-------|-------|----------|------------|
| [#6318](https://github.com/agentscope-ai/QwenPaw/issues/6318) | Modelo por conversation | ~2 meses | Aberta, 7 comentários, sem assignment visível | **ALTA** — feature request legítimo |
| [#7678](https://github.com/agentscope-ai/QwenPaw/issues/7678) | spawn subAgent timeout | 7 dias | Ativa, 10 comentários, em debugging | **CRÍTICA** |
| [#7733](https://github.com/agentscope-ai/QwenPaw/issues/7733) | Agent-autonomous context management | 5 dias | 2 comentários | **MÉDIA** — arquitetura significativa |
| [#7565](https://github.com/agentscope-ai/QwenPaw/pull/7565) | Plugin clean unload + hot reload | 14 dias | PR aberta, em revisão | **MÉDIA** — infraestrutura de plugins |
| [#639

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-09-18

---

## 1. Panorama do Dia

O projeto ZeroClaw mantém **atividade intensa** com **50 issues e 50 PRs atualizados nas últimas 24h**, sem novos lançamentos. A comunidade está concentrada em **correções de segurança e estabilidade** — destacam-se múltiplos bugs de alta severidade relacionados a processamento de imagens, integridade de contexto e vazamento de tool calls em prosa. Dois RFCs novos (#10930, #10929) buscam definir primitivas duráveis para interações humano-agente. A saúde geral é estável, mas a quantidade de bugs de alta severidade (8 issues P1, múltiplos PRs risk:high) indica necessidade de atenção aos pipelines de review e merge.

---

## 2. Lançamentos

**Nenhum release nas últimas 24h.** O último ciclo de releases permanece como referência. Sem changelog ou notas de migração a reportar nesta iteração.

---

## 3. Progresso do Projeto

### PRs Fechados/Merged (2)

| # | Título | Impacto | Link |
|---|---|---|---|
| #10868 | `ci(tests): parallelize channel feature and plugin runtime tests` | Paralelização de jobs de CI para WeChat, Lark, Matrix e QQ; adiciona Cranelift runtime matrix leg | [PR #10868](https://github.com/zeroclaw-labs/zeroclaw/pull/10868) |
| #10859 | `fix(runtime): gate Unix-only test support on Windows` | Corrige compilation em Windows ao isolar imports Unix-only para `cfg(unix)` | [PR #10859](https://github.com/zeroclaw-labs/zeroclaw/pull/10859) |

**PRs Abertos de Destaque (em progresso ativo)**

| # | Título | Tamanho | Risco | Link |
|---|---|---|---|---|
| #10621 | `feat(runtime): coordinate agent lifecycle mutations` — Autoridade compartilhada de live-config para daemon RPC, gateway, channels e CLI | XL | **high** | [PR #10621](https://github.com/zeroclaw-labs/zeroclaw/pull/10621) |
| #10499 | `fix(config): validate persistent config writes` — Validação completa de config antes de publicar | XL | **high** | [PR #10499](https://github.com/zeroclaw-labs/zeroclaw/pull/10499) |
| #9819 | `fix(multimodal): add pixel-level image validation` — Decodificação completa para prevenir imagens corrompidas em providers | XL | **high** | [PR #9819](https://github.com/zeroclaw-labs/zeroclaw/pull/9819) |
| #10412 | `feat(session): extract atomic session-ownership claim into SessionBackend contract` | XL | high | [PR #10412](https://github.com/zeroclaw-labs/zeroclaw/pull/10412) |
| #10425 | `feat(runtime): internal-principal envelope and separated cron run outcomes (RFC #6954, 1/3)` | XL | **high** | [PR #10425](https://github.com/zeroclaw-labs/zeroclaw/pull/10425) |
| #10938 | `fix(tools): declare tool attachments explicitly instead of scanning tool text for image markers` | XL | high | [PR #10938](https://github.com/zeroclaw-labs/zeroclaw/pull/10938) |
| #10935 | `fix(runtime): keep prose that quotes a tool-result object out of the streaming protocol guard` | XL | **high** | [PR #10935](https://github.com/zeroclaw-labs/zeroclaw/pull/10935) |
| #10937 | `fix(runtime): enforce bounded child tool approvals` | — | **high** | [PR #10937](https://github.com/zeroclaw-labs/zeroclaw/pull/10937) |

---

## 4. Temas Quentes da Comunidade

### Issues com Mais Comentários

| # | Título | Comentários | Link |
|---|---|---|---|
| #8692 | `[Tracker]: Maintainer decision queue for RFCs and design issues` | **15** | [Issue #8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) |
| #10549 | `RFC: Simplify RFC voting by removing mandatory discussion windows` | **12** | [Issue #10549](https://github.com/zeroclaw-labs/zeroclaw/issues/10549) |
| #4853 | `[Feature]: install skills from .well-known agent-skills discovery indexes` | **7** | [Issue #4853](https://github.com/zeroclaw-labs/zeroclaw/issues/4853) |
| #9899 | `[Tracker]: triage and remove bitmaps unmaintained advisory waiver (RUSTSEC-2026-0247)` | **5** | [Issue #9899](https://github.com/zeroclaw-labs/zeroclaw/issues/9899) |

### Análise de Demandas

- **Governança e processo**: Issue #8692 (15 comentários) é o tracker de decisões de maintainers para RFCs e design issues — reflete necessidade de clareza no processo de aceitação de propostas. Issue #10549 (12 comentários) busca simplificar o processo de votação de RFCs, indicando fricção com janelas de discussão obrigatórias.

- **Ecossistema e interoperabilidade**: Issue #4853 (7 comentários) avança a padronização `.well-known` para skills de agentes, com adoção confirmada por Cloudflare e Vercel — sinal forte de alinhamento com o ecossistema agentskills.

- **Segurança de dependências**: Issue #9899 (5 comentários) trata do advisory RUSTSEC-2026-0247 no crate `bitmaps` via `imbl` → Matrix SDK dev-dependencies — impacto direto na CI de segurança.

---

## 5. Bugs e Estabilidade

### Por Severidade

**P1 — Críticos (workflow blocked / major degradation)**

| # | Título | Componente | Link |
|---|---|---|---|
| #9899 | `RUSTSEC-2026-0247`: crate `bitmaps 3.2.1` na graph | security/CI | [Issue #9899](https://github.com/zeroclaw-labs/zeroclaw/issues/9899) |
| #10875 | Telegram media-group tests flakiness no Parallel Runtime Test | channel:telegram | [Issue #10875](https://github.com/zeroclaw-labs/zeroclaw/issues/10875) |
| #10408 | Segunda mensagem em sessão ativa inicia run paralelo → duplicate reply | runtime/daemon | [Issue #10408](https://github.com/zeroclaw-labs/zeroclaw/issues/10408) |
| #10854 | Literal image marker em tool output promoted into malformed image | provider | [Issue #10854](https://github.com/zeroclaw-labs/zeroclaw/issues/10854) |
| #10912 | Streaming text guard suprime replies quando prosa cita tool-result-shaped object | agent | [Issue #10912](https://github.com/zeroclaw-labs/zeroclaw/issues/10912) |
| #10908 | Image markers em tool-result text promotions sem provenance | provider | [Issue #10908](https://github.com/zeroclaw-labs/zeroclaw/issues/10908) |
| #10780 | Proactive token-budget context compaction inerte desde v0.8.5 | runtime/agent | [Issue #10780](https://github.com/zeroclaw-labs/zeroclaw/issues/10780) |

**P2 — Degradados (S2 - degraded behavior)**

| # | Título | Link |
|---|---|---|
| #9332 | Image-aware pre-dispatch budgeting understates/overspikes context-meter | [Issue #9332](https://github.com/zeroclaw-labs/zeroclaw/issues/9332) |
| #10889 | Anthropic provider drops rolling cache breakpoint com image block final | [Issue #10889](https://github.com/zeroclaw-labs/zeroclaw/issues/10889) |
| #9708 | Service launcher stdout/stderr logs sem bound de tamanho | [Issue #9708](https://github.com/zeroclaw-labs/zeroclaw/issues/9708) |
| #10887 | Non-vision capability gate falha em marker-shaped prose sem imagem carregável | [Issue #10887](https://github.com/zeroclaw-labs/zeroclaw/issues/10887) |
| #10926 | Matrix `send_via` trata peer user identities como room destinations | [Issue #10926](https://github.com/zeroclaw-labs/zeroclaw/issues/10926) |
| #10924 | Runtime-command replies entram em conversational voice routing | [Issue #10924](https://github.com/zeroclaw-labs/zeroclaw/issues/10924) |
| #10922 | WhatsApp Web ignora `suppress_voice` ao enfileirar TTS automático | [Issue #10922](https://github.com/zeroclaw-labs/zeroclaw/issues/10922) |
| #10932 | Voice-note transcript não é ecoado ao usuário (STT invisível) | [Issue #10932](https://github.com/zeroclaw-labs/zeroclaw/issues/10932) |

**Nota**: Três bugs (#10912, #10908, #10854) compartilham root cause relacionada a parsing de image markers em tool-result text — o PR #10938 propõe correção centralizada (declaração explícita de anexos).

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features com Alto Engajamento

| # | Título | Descrição | Link |
|---|---|---|---|
| #10930 | `RFC: One durable primitive for questions an agent asks a human` | Propõe unificar "perguntas duráveis" sob o gate SOP existente | [Issue #10930](https://github.com/zeroclaw-labs/zeroclaw/issues/10930) |
| #10929 | `RFC: Delivery receipts for outbound messages` | Adicionar identificador a `SendMessage` para tracking de entrega | [Issue #10929](https://github.com/zeroclaw-labs/zeroclaw/issues/10929) |
| #10925 | `Feature`: Support input-driven mirror voice replies on Matrix | Implementar `output_modality = "mirror"` para voz em Matrix | [Issue #10925](https://github.com/zeroclaw-labs/zeroclaw/issues/10925) |
| #10932 | `Feature`: Surface voice-note transcript to user (STT echo) | Echo de transcrição como opt-in por canal | [Issue #10932](https://github.com/zeroclaw-labs/zeroclaw/issues/10932) |
| #8766 | `Feature`: Add user-behavior E2E coverage for first-run setup | Cobertura E2E para quickstart, zerocode, doctor e startup wiring | [Issue #8766](https://github.com/zeroclaw-labs/zeroclaw/issues/8766) |
| #9511 | `Feature`: Surface diff-aware Semgrep findings como PR comment | Transformar findings de SARIF em comments acionáveis | [Issue #9511](https://github.com/zeroclaw-labs/zeroclaw/issues/9511) |
| #10546 | Extract cron into dedicated `zeroclaw-cron` crate | Extração seguindo ADR-016 e aposentadoria de exceção transitional | [Issue #10546](https://github.com/zeroclaw-labs/zeroclaw/issues/10546) |

### Sinais de Roadmap

- **RFCs em голосование**: #10930 e #10929 indicam direção clara para durability de interações e observabilidade de entrega — ambos com 2 comentários e criados em 2026-09-17, mostrando momentum.
- **Context management**: Issue #10780 (P1) destaca ausência de compaction token-budget-driven desde v0.8.5 — provavelmente prioritário no roadmap do agente.
- **Extração de crate cron**: #10546 está em progresso ativo (PRs associados), sinal de refactoring arquitetural em andamento.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Dor | Cenário | Issue |
|---|---|---|
| **Instalação via `nix run` não documentada** | Usuários tentam instalar com `cargo binstall zeroclaw` e enfrentam path inesperado | [Issue #5269](https://github.com/zeroclaw-labs/zeroclaw/issues/5269) ✅ Fechada |
| **Transcrição de voice note invisível** | Erro de STT molda resposta sem o usuário perceber — "silently shaping the reply" | [Issue #10932](https://github.com/zeroclaw-labs/zeroclaw/issues/10932) |
| **Voice replies em Matrix não funcionam** | Usuário envia voz, recebe texto — documentação confirma `mirror` unimplemented | [Issue #10925](https://github.com/zeroclaw-labs/zeroclaw/issues/10925) |
| **WhatsApp TTS não respeita preferências** | Mensagens de sistema ativam TTS mesmo quando `suppress_voice` está setado | [Issue #10922](https://github.com/zeroclaw-labs/zeroclaw/issues/10922) |
| **Duplicação de replies em sessões ativas** | Usuário envia segunda mensagem enquanto agent processa — obtém duas respostas | [Issue #10408](https://github.com/zeroclaw-labs/zeroclaw/issues/10408) |
| **CI Required Gate vermelho por flaky tests** | PRs unrelated a Telegram falham no Parallel Runtime Test step — blocking merge | [Issue #10875](https://github.com/zeroclaw-labs/zeroclaw/issues/10875) |

### Padrões de Insatisfação

1. **UX de canais não-textuais**: Voz, Telegram media groups e WhatsApp apresentam inconsistências que degradam a experiência em workflows multimodais.
2. **First-run path problemático**: Config gerada pode parecer válida mas falhar silenciosamente — cobertura E2E insuficiente (issue #8766).
3. **Observabilidade de daemon**: Logs sem bound e ausência de failure reason em run detail dificultam debug em produção.

---

## 8. Backlog que Merece Atenção

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*