# Resumo diário do ecossistema de agentes de IA 2026-07-31

> Issues: 0 | PRs: 2 | Projetos cobertos: 7 | Gerado em: 2026-07-30 21:02 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório do Projeto NullClaw — 2026-07-31

## 1. Panorama do Dia

O projeto NullClaw apresenta **atividade moderada** em 31 de julho de 2026. Nas últimas 24 horas, foram registradas **2 PRs atualizadas**, indicando desenvolvimento contínuo, embora sem novos lançamentos ou issues reportadas. O destaque vai para a **merge de uma nova integração com o provedor Grok CLI da xAI** (#981), demonstrando expansão do ecossistema de provedores suportados. A base de código permanece estável, sem reportagens de bugs críticos ou regressions nas últimas 24h.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24 horas.**

O projeto nãoemitiu novas versões desde o último período reportado. Recomenda-se monitorar o repositório para eventuais Hotfixes ou patch releases caso issues críticas sejam identificadas.

---

## 3. Progresso do Projeto

### PR Merged

| # | Título | Status | Autor | Impacto |
|---|--------|--------|-------|---------|
| [#981](https://github.com/nullclaw/nullclaw/pull/981) | `feat(provider): add grok-cli provider for xAI Grok CLI` | ✅ CLOSED | @valonmulolli | **Alto** |

**Análise:** A PR #981 introduz um novo provedor CLI para o serviço Grok da xAI, seguindo o padrão "spawn-per-request" já utilizado pelo `codex-cli`. Esta adição:

- Expande o suporte a provedores de IA no ecossistema NullClaw
- Mantém consistência arquitetural com implementações existentes
- Possibilita integração com a CLI local do Grok sem dependências externas pesadas

---

### PR Aberta

| # | Título | Status | Autor | Prioridade |
|---|--------|--------|-------|------------|
| [#980](https://github.com/nullclaw/nullclaw/pull/980) | `fix(scheduler): persist paired token to disk during /pair` | 🔄 OPEN | @valonmulolli | **Alta** |

**Análise:** Esta PR corrige um bug funcional crítico — o endpoint `/pair` não persiste o token gerado em disco, causando falha na autenticação de rotas administrativas do gateway. A correção resolving issue #839.

---

## 4. Temas Quentes da Comunidade

**Nenhuma issue com atividade significativa registrada nas últimas 24 horas.**

O volume de discussões permanece baixo, sugerindo:
- Estabilidade da base de código atual
- Possível necessidade de maior engajamento da comunidade
- Ausência de controvérsias ou debates abertos

---

## 5. Bugs e Estabilidade

### Bug em Andamento

**[#980](https://github.com/nullclaw/nullclaw/pull/980) — Token de pareamento não persiste em disco**

- **Severidade:** Média-Alta (funcionalidade administrativa afetada)
- **Sintoma:** `readPairedToken()` retorna `null`, impedindo autenticação em rotas admin do gateway
- **Causa:** O endpoint `/pair` armazena apenas em memória
- **Status:** PR aberta com correção proposta

### Saúde Geral

| Métrica | Status |
|---------|--------|
| Issues críticas abertas | 0 |
| Regressões reportadas | 0 |
| Crashes documentados | 0 |

**Veredicto:** O projeto demonstra **estabilidade adequada** no período. O bug identificado (#980) possui correção pendente de review.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Feature Adicionada Recentemente

**[#981](https://github.com/nullclaw/nullclaw/pull/981) — Suporte ao provedor Grok CLI**

Este PR sinaliza tendência de **expansão de provedores suportados**, alinhando-se possivelmente a um roadmap que prioriza:
- Diversificação de integrações com LLMs externos
- Padrão arquitetural consistente (CLI-based spawn)
- Suporte a provedores emergentes (xAI/Grok)

### Proposta Implícita

O desenvolvimento do provedor Grok CLI sugere que NullClaw está posicionando-se como **agregador multi-provedor**, competindo em flexibilidade de integração.

---

## 7. Resumo de Feedback dos Usuários

**Sem feedback explícito registrado nas últimas 24 horas.**

Observações inferidas:
- A contribuição de PRs indica **interesse da comunidade** em expandir funcionalidades
- A ausência de issues com +5 reações ou comentários sugere **baixa visibilidade** ou satisfação moderada
- O padrão de desenvolvimento (CLI providers) indica foco em **usabilidade para desenvolvedores**

---

## 8. Backlog que Merece Atenção

### Issue #839 (Referenciada em #980)

- **Título:** Token de pareamento não persiste
- **Link:** [GitHub Issue #839](https://github.com/nullclaw/nullclaw/issues/839)
- **Espera:** Aproximadamente 2 dias (PR aberta desde 2026-07-29)
- **Recomendação:** **Revisar e validar** — impacta segurança/administração do sistema

### Recomendações

1. **Priorizar merge de #980** — corrigência funcional crítica
2. **Revisar issues antigas** — backlog sem atividade recente pode indicar abandono ou baixa prioridade
3. **Estimular comunidade** — volume de Issues/Comments está baixo, indicando oportunidade de engajamento

---

## Métricas Consolidada — 2026-07-31

| Categoria | Valor |
|-----------|-------|
| PRs nas últimas 24h | 2 |
| PRs abertas | 1 |
| PRs fechadas/merged | 1 |
| Issues nas últimas 24h | 0 |
| Releases | 0 |
| Score de Atividade | ⚡ Moderada |

---

*Relatório gerado automaticamente com base nos dados públicos do GitHub.*  
*Repositório: [nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)*

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo — Ecossistema de Agentes de IA Open Source

**Data de referência:** 2026-07-31
**Projetos analisados:** 7 repositórios

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source demonstra **saúde bifurcada** neste período: metade dos projetos está em modo de consolidação (NullClaw, PicoClaw, IronClaw, ZeroClaw) com foco em estabilidade e arquitetura, enquanto a outra metade (NanoBot, Hermes Agent, CoPaw) opera em ciclos de desenvolvimento intenso com volume de PRs massivo. A tendência mais marcante é a **convergência para arquiteturas multi-provedor** — todos os projetos investem em suporte a múltiplos LLMs e canais de comunicação. Seguranca multi-usuário surge como preocupação transversal, aparecendo em três projetos simultaneamente. A fragmentação de integrations (Telegram, WhatsApp, Matrix, IRC) evidencia que a interoperabilidade entre canais de chat permanece como um diferenciador competitivo central.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | PRs Abertos | PRs Merged/Closed | Releases | Avaliação de Saúde |
|---------|--------------|-----------|-------------|-------------------|----------|-------------------|
| **NanoBot** | 4 abertas, 2 fechadas | 48 | — | 32 | 0 | 🟢 Robusta |
| **Hermes Agent** | 50 | 50 | 48 | 2 | 0 | 🟡 Ativa (muitos bugs P2) |
| **ZeroClaw** | 31 | 50 | — | — | 0 (v0.8.4 iminente) | 🟢 Boa |
| **IronClaw** | 34 abertas, 11 fechadas | — | 27 | 23 | 0 | 🟡 Boa (2 P0 security) |
| **CoPaw** | 25 | 50 | — | 26 | 0 | 🟠 Atenção (regressão perf) |
| **PicoClaw** | 4 abertas, 3 fechadas | 17 | 12 | 5 | 0 | 🟢 Boa |
| **NullClaw** | 0 | 2 | 1 | 1 | 0 | 🟢 Estável |

**Observação:** NanoBot, Hermes Agent, ZeroClaw e CoPaw apresentam volumes de PRs anômalos (48-50 em 24h), indicando provavelmente atividade acumulada ou múltiplos branches sendo sincronizados. NanoBot destaca-se com 32 merges efetivos — o mais produtivo em termos de código consolidado.

---

## 3. Posicionamento do Projeto Principal

### NanoBot (HKUDS/nanobot)

**Vantagens competitivas:**
- Volume de contribuição 3-4× superior aos pares em merges efetivos
- Adoção proativa do Responses API (reasoning state persistence)
- Refatoração de storage (JSONL → SQLite) em andamento
- WebUI com diferenciação clara (Quick Chat, Temporary Chat)

**Diferenças técnicas:**
- Arquitetura de executor com budget bounds para stdout/stderr
- Sistema de sessão com WeakValueDictionary substituído por locks centralizados
- Channel-level polling com recovery de network failures

**Tamanho da comunidade:**
- 48 PRs/24h indica contributor base substancial
- Baixo engajamento em issues (1-2 comentários) sugere triagem via PRs
- Bugs P1 fechados em <24h demonstra maturidade operacional

### Hermes Agent (nousresearch/hermes-agent)

**Vantagens competitivas:**
- Desktop app maduro com investimos em theming e layout
- Sistema de skills opcionais em expansão (neon-genie)
- Plugin hooks para extensão de comportamento core
- Voice/TTS provider-neutral em desenvolvimento

**Diferenças técnicas:**
- Separation of concerns entre CLI/desktop/gateway mais pronunciada
- Sistema de approval level com herança para subagentes
- Desktop-first UX com foco em polish visual

**Tamanho da comunidade:**
- 50 issues + 50 PRs denota comunidade engajada mas reativa
- P1 crítico de billing accounting (tokens/cost morrem permanentemente)
- 15+ bugs P2 indicam dívida técnica acumulada

### NullClaw (referência base)

**Perfil:**
- Atividade mínima (2 PRs, 0 issues)
- Integração Grok CLI da xAI demonstra pragmatismo
- Estabilidade como característica, não como resultado
- Baixa visibilidade comunitária (risco de estagnação)

---

## 4. Focos Técnicos Compartilhados

### Multi-Channel Integration (Telegram, WhatsApp, Matrix, IRC)
Todos os projetos investem em integrações com canais de chat tradicionais, evidenciando que **agentes de IA como interface conversacional universal** é o caso de uso predominante. A diversidade de canais reflete a fragmentação do ecossistema de mensageria dos usuários.

| Projeto | Canais Prioritários |
|---------|---------------------|
| NanoBot | Telegram, WhatsApp |
| Hermes Agent | WhatsApp, Telegram, Matrix |
| PicoClaw | DingTalk, WeChat, IRC, Telegram |
| IronClaw | Slack, WebUI |
| ZeroClaw | WhatsApp Cloud, Linq, WATI |
| CoPaw | Matrix (E2EE) |

### Segurança Multi-Usuário
Três projetos reportam vulnerabilidades de isolamento simultaneamente — indicador de arquitetura compartilhada com gaps类似的:

| Projeto | Bug Reportado |
|---------|---------------|
| IronClaw | Home directory compartilhado entre usuários (#6866) |
| IronClaw | Cross-user memory leak via shared-channel binding (#6900) |
| ZeroClaw | Webhook handlers sem autenticação caller (#9565) |

**Implicação:** A demanda por deployments multi-tenant está superando a maturidade das implementações.

### Provider Diversity e Fallback
Todos os projetos implementam ou planejam sistemas de fallback de modelos:

| Projeto | Status |
|---------|--------|
| PicoClaw | AWS Bedrock prompt caching merged; fallback chain em PR |
| CoPaw | Unificação de provider discovery em revisão (#6302) |
| ZeroClaw | OpenAI compatibility em RFC (duas issues paralelas) |
| NullClaw | Grok CLI provider adicionado |

### MCP (Model Context Protocol) Adoption
MCP emerge como camada de integração padrão:

| Projeto | Status MCP |
|---------|-----------|
| CoPaw | MCP backend restart recovery issue (#6524); tool names |
| PicoClaw | OAuth 2.1 para MCP servers (#2546) — 105 dias em aberto |
| IronClaw | MCP server registration (#6930) |

---

## 5. Análise de Diferenciação

### Por Público-Alvo

| Perfil | Projetos | Características |
|--------|----------|-----------------|
| **Enterprise/Cloud** | IronClaw, ZeroClaw, PicoClaw | Multi-usuário, OAuth, billing, compliance |
| **Developer-first** | NullClaw, Hermes Agent | CLI-centric, extensibilidade, terminal tool |
| **Consumer/Desktop** | CoPaw, Hermes Agent | WebUI rica, automação GUI, hotkeys |
| **Research/Academic** | NanoBot | Agent core, tool use, Responses API |

### Por Arquitetura

| Arquitetura | Projetos | Vantagens | Riscos |
|-------------|----------|-----------|--------|
| **Monolito em Go** | NullClaw, PicoClaw | Simplicidade, deploy único | Escalabilidade limitada |
| **Crates Rust modular** | IronClaw | Type safety, performance | Curva de contribuição alta |
| **Python-first com bindings** | NanoBot, CoPaw | Ecossistema ML, extensibilidade | GIL, performance em I/O |
| **Go + Python hybrid** | Hermes Agent | Flexibilidade, legacy support | Complexidade operacional |

### Por Foco de Diferenciação

| Diferenciador | Projetos Líderes |
|----------------|------------------|
| **Performance absoluta** | IronClaw (Rust), PicoClaw (Go) |
| **Features de IA** | NanoBot (Responses API), CoPaw (desktop GUI automation) |
| **Extensibilidade** | Hermes Agent (plugin hooks), PicoClaw (MCP) |
| **Multi-channel** | PicoClaw (6+ canais), Hermes Agent (WhatsApp/Matrix/Telegram) |
| **Self-improvement** | IronClaw (Reborn framework), Hermes Agent (Living System) |

---

## 6. Tração e Maturidade da Comunidade

### Velocidade de Iteração

| Tier | Projetos | PRs Merged/24h | Estilo |
|------|----------|----------------|--------|
| 🥇 Alta velocidade | NanoBot, Hermes Agent | 32, 2+ | Feature-driven, many small PRs |
| 🥈 Ritmo sustentável | PicoClaw, IronClaw, ZeroClaw | 5-23 | PRs maiores, mais review |
| 🥉 Conservador | NullClaw | 1 | Development lento |

### Qualidade e Estabilidade

| Projeto | Indicador Positivo | Indicador Negativo |
|---------|-------------------|-------------------|
| NanoBot | 7 P1 fixes merged em 24h | Bug de tool call display em produção (#5185) |
| Hermes Agent | 2 P1 críticos fechados rapidamente | 15+ bugs P2 acumulador |
| CoPaw | 26 PRs validados | Regressão v2.0 de ~2s por resposta (#6307) |
| IronClaw | P1 bugs OAuth/Gmail resolvidos | 2 P0 security sem triagem |
| PicoClaw | Dependabot PRs processados | Code review de concurrency hazards (#3308) |
| ZeroClaw | Cron SOP bug crítico corrigido | Webhook auth vulnerability (#9565) |

### Engajamento Comunitário

| Projeto | Issue +5 comentários | Única issue com 👍 | Padrão |
|---------|----------------------|-------------------|--------|
| NanoBot | 0 | 0 | Triagem via PRs |
| Hermes Agent | 3 (terminal, WhatsApp, OAuth) | 3 (WhatsApp observe) | Discussions ativas |
| CoPaw | 1 (#6307 — 7 comentários) | 0 | Bug reports detalhados |
| IronClaw | 1 (error recoverability — 15 comentários) | 0 | Epics estruturadas |
| ZeroClaw | 4 (memory, OpenAI compat, local_small) | 1 (local_small — 2👍) | RFC-driven |
| PicoClaw | 1 (OAuth MCP — 6 comentários) | 0 | Feature requests maduros |

**Observação:** Hermes Agent e IronClaw lideram em discussão estruturada (epics, RFCs). NanoBot demonstra saúde via volume de PRs. CoPaw e PicoClaw têm comunidade menor mas focada.

---

## 7. Sinais de Tendência

### Tendência 1: Convergência para OpenAI API Compatibility
ZeroClaw (2 issues paralelas), PicoClaw (fallback chain), CoPaw (unificação de providers) — todos preparando endpoints compatíveis com OpenAI. **Interoperabilidade com ecossistema OpenAI** está se tornando requisito de mesa para adoção, não diferencial.

### Tendência 2: Segurança Multi-Tenant Como Gap Crítico
Três projetos reportando vulnerabilidades de isolamento simultaneamente indica que a demanda por deployments compartilhados (cloud, enterprise) está crescendo mais rápido que a maturidade das implementações. **Zero-trust entre usuários no mesmo deployment** será requisito regulatório em 2027.

### Tendência 3: MCP Como Camada de Extensibilidade Padrão
MCP (Model Context Protocol) aparece em 3 dos 7 projetos com issues ativas. O movimento de mercado indica que MCP está se consolidando como o **"USB-C dos agentes"** — padrão de facto para extensibilidade de ferramentas.

### Tendência 4: Desktop-First UX Como Diferenciador
Hermes Agent, CoPaw e NanoBot investem simultaneamente em WebUI/desktop app com features avançadas (hotkeys, theming, Quick Chat). A **experiência de uso imediata** está substituindo CLI-first como default de onboarding.

### Tendência 5: Regressões de Performance em Transições Major
CoPaw (v2.0 ~2s overhead), IronClaw (breaking changes em 0.5.0), Hermes Agent (múltiplos P2) — **transições de versão major estão gerando regressões significativas**, sugerindo falta de test coverage em pipelines de CI.

### Tendência 6: Local-First Models
ZeroClaw (#5287 local_small profile, #7951 effort-based routing) e Hermes Agent (model picker com flood de indisponíveis) indicam que **usários querem rodar modelos localmente** para privacidade/custo. Esta é uma tendência emergente com baixa satisfação atual.

---

## Recomendações Executivas

| Decisor | Ação Recomendada |
|---------|------------------|
| **Adotar NanoBot** | Para projetos que priorizam features de IA e velocidade de iteração |
| **Adotar IronClaw/ZeroClaw** | Para enterprise com requisitos de multi-usuário e compliance |
| **Adotar PicoClaw** | Para deployments com necessidade multi-canal (Telegram, IRC, DingTalk) |
| **Evitar CoPaw** | Até regressão v2.0 (#6307) ser resolvida |
| **Monitorar NullClaw** | Estável mas baixo engajamento — risco de estagnação |

---

*Relatório gerado em 2026-07-31 com base em dados de atividade dos repositórios GitHub.*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-07-31

---

## 1. Panorama do Dia

O NanoBot apresentou **atividade excepcionalmente alta** em 30 de julho, com **48 PRs atualizados e 32 merges** — um volume de contribuição massivo que indica forte engajamento da comunidade. Seis issues foram movimentadas (4 abertas, 2 fechadas), sem novos lançamentos. O foco predominante foi em **correções de regressão P1** (7 PRs de alta prioridade merged), melhorias na WebUI (Quick Chat, Temporary Chat) e refatorações de estabilidade no core do agente. A saúde geral do projeto é **robusta**, com a equipe respondendo rapidamente a bugs críticos.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto está em ritmo intenso de desenvolvimento interno, com múltiplas correções e features sendo preparadas para o próximo tag de versão.

---

## 3. Progresso do Projeto

### PRs Merged/Closed (principais)

| # | Título | Área | Impacto |
|---|--------|------|---------|
| [#5172](https://github.com/HKUDS/nanobot/pull/5172) | feat: preserve Responses reasoning state and compact context | Agent Core | Adoção antecipada de capacidades do Responses API (criptografia de reasoning, persistência entre turnos) |
| [#5182](https://github.com/HKUDS/nanobot/pull/5182) | refactor(webui): reuse one sidebar selection highlight | WebUI | Unificação de comportamento visual no sidebar |
| [#5181](https://github.com/HKUDS/nanobot/pull/5181) | feat(webui): add persistent Quick Chat | WebUI | Novo entry point para conversas rápidas via WebSocket |
| [#5136](https://github.com/HKUDS/nanobot/pull/5136) | fix(agent): route finish_reason='length' with blank content to length recovery | Agent | Correção P1: modelos que gastam todo budget em tool calls truncados agora têm recovery adequado |
| [#5150](https://github.com/HKUDS/nanobot/pull/5150) | fix(exec): bound buffered session output | Executor | Bound de stdout/stderr com budgets head/tail fixos, evitando memory leaks |
| [#5151](https://github.com/HKUDS/nanobot/pull/5151) | fix(agent): release idle session locks | Agent | Substituição de `WeakValueDictionary` por locks centralizados, eliminando vazamento de sessões |
| [#5147](https://github.com/HKUDS/nanobot/pull/5147) | fix(pairing): keep approvals across transient store read failures | Pairing | Falhas transitórias de leitura não apagam mais approvals de usuários |
| [#5117](https://github.com/HKUDS/nanobot/pull/5117) | fix(session): tolerate invalid idle-compaction timestamps | Session | Tratamento de timestamps inválidos em compactação automática |
| [#5146](https://github.com/HKUDS/nanobot/pull/5146) | fix(webui): drop malformed token-usage day keys | WebUI | Validação de keys de uso de tokens, evitando falhas em `/api/settings` |

**Destaque de impacto:** O PR [#5136](https://github.com/HKUDS/nanobot/pull/5136) resolve um bug crítico onde `finish_reason='length'` com `tool_calls` e conteúdo vazio era mal roteado para retry vazio em vez de recovery de length — impacto direto na confiabilidade de tool use.

---

## 4. Temas Quentes da Comunidade

### Issues com maior atenção

| # | Título | Status | Comentários | Tipo |
|---|--------|--------|-------------|------|
| [#5185](https://github.com/HKUDS/nanobot/issues/5185) | Nanobot returning tool calls code in responses | **OPEN** | 1 | Bug |
| [#5149](https://github.com/HKUDS/nanobot/issues/5149) | no audio on WhatsApp | **OPEN** | 1 | Bug |
| [#4791](https://github.com/HKUDS/nanobot/issues/4791) | DoS: No channel-level message rate limiting | **CLOSED** | 1 | Security |

### Análise das demandas

**Issue #5185** — Retorno de código de tool calls no output do agente: Usuário reportou que o Nanobot passou a exibir raw tool call JSON nas respostas. Embora sem 👍 ainda, é um bug de UX significativo que pode quebrar a experiência de integração. Já tem 1 comentário indicando investigação ativa.

**Issue #4791** (closed) — Vulnerabilidade de DoS por flood de mensagens: A issue de segurança foi fechada. Dado o volume de PRs P1 merged focados em estabilidade (locks, memory bounds, approvals), é provável que mitigações já tenham sido implementadas ou estejam em pipeline.

**Observação:** O baixo número de comentários/interações nas issues pode indicar que a triagem está sendo feita via PRs linked, não via discussão em issues.

---

## 5. Bugs e Estabilidade

### Issues abertas (bugs ativos)

| # | Severidade | Título | Created | Link |
|---|------------|--------|---------|------|
| #5185 | 🔴 Alta | Nanobot returning tool calls code in responses | 2026-07-30 | [Issue #5185](https://github.com/HKUDS/nanobot/issues/5185) |
| #5149 | 🟠 Média-Alta | no audio on WhatsApp | 2026-07-28 | [Issue #5149](https://github.com/HKUDS/nanobot/issues/5149) |
| #5171 | 🟠 Média-Alta | Telegram polling stalls silently after network failures | 2026-07-30 | [Issue #5171](https://github.com/HKUDS/nanobot/issues/5171) |
| #3106 | 🟡 Média | Tool steps completed but couldn't produce final answer | 2026-04-13 | [Issue #3106](https://github.com/HKUDS/nanobot/issues/3106) |

### Análise

1. **#5185** — Bug novo (24h), possivelmente regressão pós-merge. Afeta a saída final do agente e pode impactar integrações downstream. Requer priorização.

2. **#5149** — Bug de áudio no WhatsApp. Recebe mas não envia áudio. Log mostra warning de FFmpeg — possível problema no pipeline de transcodificação.

3. **#5171** — Polling do Telegram trava silenciosamente após falhas de rede transitórias. Já existe PR [#5156](https://github.com/HKUDS/nanobot/pull/5156) aberto com a correção.

4. **#3106** — Issue antiga (abril) com GPT e tool use. Usuário reporta que modelos GPT completam tool calls mas não produzem resposta final. Pode estar relacionado ao fix [#5136](https://github.com/HKUDS/nanobot/pull/5136) que acabou de ser merged —，值得 seguimiento para verificar se resolve.

### Correções P1 merged (estabilidade)

| PR | Problema resolvido |
|----|---------------------|
| [#5136](https://github.com/HKUDS/nanobot/pull/5136) | `finish_reason='length'` com tool_calls mal roteado |
| [#5150](https://github.com/HKUDS/nanobot/pull/5150) | Vazamento de memória em output buferizado |
| [#5151](https://github.com/HKUDS/nanobot/pull/5151) | Locks de sessão nunca liberados |
| [#5147](https://github.com/HKUDS/nanobot/pull/5147) | Approvals apagados em falhas de leitura |
| [#5117](https://github.com/HKUDS/nanobot/pull/5117) | Timestamps inválidos em compaction |
| [#5146](https://github.com/HKUDS/nanobot/pull/5146) | Keys malformadas quebrando API de uso |

**Veredicto de estabilidade:** Bom. Sete correções P1 merged em 24h demonstram maturidade no processo de QA e resposta rápida a regressões.

---

## 6. Pedidos de Features e Sinais de Roadmap

### PRs de feature em aberto

| # | Feature | Área | Prioridade | Link |
|---|---------|------|------------|------|
| #5184 | Quick Chat and Temporary Chat | WebUI | — | [PR #5184](https://github.com/HKUDS/nanobot/pull/5184) |
| #5173 | Migrate session storage from JSONL to SQLite | Session | — | [PR #5173](https://github.com/HKUDS/nanobot/pull/5173) |
| #4919 | Custom Bot API base URL and extra headers | Telegram | P2 | [PR #4919](https://github.com/HKUDS/nanobot/pull/4919) |
| #4291 | Subagents with configurable model presets | Spawn | — | [PR #4291](https://github.com/HKUDS/nanobot/pull/4291) |
| #4551 | isolated_session config for shared session | Heartbeat | P2 | [PR #4551](https://github.com/HKUDS/nanobot/pull/4551) |
| #5153 | Handle non-string timestamp in memory | Memory | P1 | [PR #5153](https://github.com/HKUDS/nanobot/pull/5153) |

### Análise de roadmap

1. **WebUI** — A equipe está investindo fortemente na interface web. Quick Chat e Temporary Chat ([#5184](https://github.com/HKUDS/nanobot/pull/5184)) representam diferenciação de UX significativa, permitindo conversas efêmeras e entry points rápidos.

2. **Storage** — Migração de JSONL para SQLite ([#5173](https://github.com/HKUDS/nanobot/pull/5173)) é uma refatoração de infraestrutura de alto impacto: melhor performance em listagem, queries transacionais e melhor tolerância a concurrent access.

3. **Telegram** — Suporte a Bot API customizado ([#4919](https://github.com/HKUDS/nanobot/pull/4919)) responde a demandas de usuários enterprise com infraestructura própria ou gateways proprietarios.

4. **Multi-model subagents** ([#4291](https://github.com/HKUDS/nanobot/pull/4291)) — Capacidade de spawnar subagentes com presets de modelo diferentes do agente pai. Indica evolução para arquiteturas mais complexas de agentes.

5. **Responses API** ([#5172](https://github.com/HKUDS/nanobot/pull/5172) merged) — A adoção proativa de recursos do Responses API (reasoning chains persistentes) sugere alinhamento com roadmap da OpenAI.

**Sinais de priorização:** O PR [#5184](https://github.com/HKUDS/nanobot/pull/5184) (Quick/Temporary Chat) foi criado em 30/07 e já está em revisão — movimento rápido sugere prioridade alta para a próxima release.

---

## 7. Resumo de Feedback dos Usuários

### Dores identificadas

| Dor | Evidência | Severidade |
|-----|-----------|------------|
| Nanobot exibindo tool call code nas respostas | [#5185](https://github.com/HKUDS/nanobot/issues/5185) | 🔴 Alta |
| Áudio não funciona no WhatsApp | [#5149](https://github.com/HKUDS/nanobot/issues/5149) | 🟠 Média |
| Telegram para de receber mensagens após network blip | [#5171](https://github.com/HKUDS/nanobot/issues/5171) | 🟠 Média |
| GPT falha em produzir resposta final após tool execution | [#3106](https://github.com/HKUDS/nanobot/issues/3106) | 🟡 Média (histórica) |

### Cenários de uso observados

- **Integração WhatsApp:** Usuários tentam usar Nanobot como assistente pessoal via WhatsApp — falha em enviar áudio indica lacuna em multimedia.
- **Telegram como canal principal:** Múltiplos PRs e issues sobre Telegram (polling recovery, custom API base) indicam base significativa de usuários enterprise.
- **Tool use com múltiplos LLMs:** Issues de compatibilidade entre GPT e modelos alternativos (GML-4.7) para tarefas de scheduling.

### Satisfação percebida

O volume de PRs com tags `[regression, fix, test, priority: p1]` indica que **a própria equipe está intensamente testando e corrigindo** — sinal de maturidade. O silêncio nas issues (baixo 👍/comentários) pode indicar:
1. Comunidade ativa mas usando PRs em vez de issues para reportar
2. Ou base de usuários técnicos que reportam diretamente

---

## 8. Backlog que Merece Atenção

### Issues antigas sem resolução ou com baixa visibilidade

| # | Idade | Título | Status | Notas |
|---|-------|--------|--------|-------|
| [#3106](https://github.com/HKUDS/nanobot/issues/3106) | ~3 meses | Tool steps completed but couldn't produce final answer | OPEN | Problema intermitente com GPT. Relacionado ao fix [#5136](https://github.com/HKUDS/nanobot/pull/5136)? |
| [#4791](https://github.com/HKUDS/nanobot/issues/4791) | ~24 dias | DoS: No channel-level message rate limiting | CLOSED | Fechada, mas sem PR link visível — verificar se mitigação foi implementada |

### PRs com conflitos ou estagnados

| # | Idade | Título | Problema |
|---|-------|--------|----------|
| [#4819](https://github.com/HKUDS/nanobot/pull/4819) | ~24 dias | fix(memory): replace WeakValueDictionary | Conflito |
| [#4551](https://github.com/HKUDS/nanobot/pull/4551) | ~34 dias | feat(heartbeat): isolated_session | Conflito |
| [#4021](https://github.com/HKUDS/nanobot/pull/4021) | ~64 dias | fix(codex): dedup reasoning items | Conflito |

### Recomendações

1. **Rever Issue #3106** — Com o merge de [#5136](https://github.com/HKUDS/nanobot/pull/5136), verificar se o problema de GPT com tool use foi resolvido e atualizar/fechar a issue.

2. **Resolver conflitos em PRs** — Os PRs [#4819](https://github.com/HKUDS/nanobot/pull/4819), [#4551](https://github.com/HKUDS/nanobot/pull/4551) e [#4021](https://github.com/HKUDS/nanobot/pull/4021) estão com conflitos há 24-64 dias. Priorizar resolução ou fechar se não还有人 mantendo.

3. **Confirmar mitigação de DoS** — Issue [#4791](https://github.com/HKUDS/nanobot/issues/4791) foi fechada sem PR linked visível nos dados. Verificar se as correções de rate limiting estão em produção.

---

## Métricas Consolidada (2026-07-30)

| Indicador | Valor | Tendência |
|-----------|-------|-----------|
| Issues ativas (24h) | 4 | Neutra |
| Issues fechadas (24h) | 2 | — |
| PRs atualizados (24h) | 48 | 🔺 Muito alta |
| PRs merged/closed (24h) | 32 | 🔺 Muito alta |
| Novas releases | 0 | — |
| Bugs críticos abertos | 1 (#5185) | 🟡 Atenção |
| PRs P1 merged | 7 | 🔺 Excelente

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-07-31

---

## 1. Panorama do Dia

O projeto Hermes Agent mantém **atividade intensa** com 50 issues e 50 PRs atualizados nas últimas 24h, indicando uma comunidade engajada. Não houve lançamentos hoje, mas o volume de PRs em aberto (48) sugere pipeline saudável de contribuições. A distribuição de issues mostra predominância de bugs P2 (prioridade média-alta), concentrados em terminal tool, desktop app e integrações com plataformas (WhatsApp, Telegram, Matrix). A taxa de resolução foi baixa (2 issues fechadas, 2 PRs merged), sinalizando que a equipe pode estar em ciclo de revisão antes do próximo release.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24h.**

O projeto não publicou novas versões desde o último período reportado. Isso é consistente com o padrão de desenvolvimento ativo observado — a equipe aparentemente concentra-se em acumular mudanças para um próximo release coordenado.

---

## 3. Progresso do Projeto

### PRs Recentemente Merged/Fechados
*Baseado nos 2 PRs identificados como merged/fechados nos dados disponíveis:*

| PR | Título | Tipo | Impacto |
|----|--------|------|---------|
| [#75021](https://github.com/NousResearch/hermes-agent/pull/75021) | fix(update): restart a booted-out launchd gateway instead of skipping it | Bug fix | **Crítico** — resolve silent failure no macOS onde `hermes update` concluía sem reiniciar o gateway |
| [#75022](https://github.com/NousResearch/hermes-agent/pull/75022) | fix(gateway): emit silent lifecycle activity without progress bubbles | Feature/Fix | Melhora UX no Telegram com lifecycle events silenciosos |

### PRs em Aberto Destacados
| PR | Título | Área | Status |
|----|--------|------|--------|
| [#75028](https://github.com/NousResearch/hermes-agent/pull/75028) | feat(optional-skills): add neon-genie (product/opportunity intelligence) | Skills | Novo — adiciona skill oficial opcional |
| [#73945](https://github.com/NousResearch/hermes-agent/pull/73945) | perf(desktop): isolate right pane layout work | Desktop/Perf | Isola trabalho de layout do painel direito para evitar contenção no main thread |
| [#73936](https://github.com/NousResearch/hermes-agent/pull/73936) | feat(desktop): add custom theme editor | Desktop/i18n | Permite criar/editar temas dentro do app |
| [#74645](https://github.com/NousResearch/hermes-agent/pull/74645) | feat(plugins): add four extension hooks for plugin-directed core behavior | Plugins | Adiciona 4 hooks para pluginsoverridearem comportamentos core |
| [#75014](https://github.com/NousResearch/hermes-agent/pull/75014) | feat(voice): provider-neutral streaming TTS playout | Voice/TTS | Torna playback TTS independente do provedor |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (por comentários)

| Issue | Título | Comentários | 👍 | Tema Principal |
|-------|--------|-------------|-----|----------------|
| [#69256](https://github.com/NousResearch/hermes-agent/issues/69256) | terminal tool has no repeated-identical-call circuit breaker | 4 | 0 | **Stabilidade** — comandos rejeitados travam sessão com 30+ retries |
| [#68536](https://github.com/NousResearch/hermes-agent/issues/68536) | /model picker shows unavailable models | 4 | 0 | **UX/CLI** — flood de modelos indisponíveis no picker |
| [#38710](https://github.com/NousResearch/hermes-agent/issues/38710) | feat: Add observe_unmentioned_group_messages to WhatsApp | 4 | 3 | **Feature** — contexto em grupos WhatsApp sem menção |
| [#70806](https://github.com/NousResearch/hermes-agent/issues/70806) | feat(kanban): verified completion with failure-fed retries | 4 | 0 | **Feature** — gate de completion baseado em testes |
| [#73997](https://github.com/NousResearch/hermes-agent/issues/73997) | mcp login: internal retry self-collides on pinned oauth.redirect_port | 4 | 0 | **Segurança/Auth** — erro de porta mascarando falha real |

### Análise dos Temas
- **Terminal Tool**: A ausência de circuit breaker para chamadas repetidas é problema recorrente que causa crash de sessão — comunidade demonstra frustração
- **WhatsApp Integration**: Demanda por `observe_unmentioned_group_messages` tem maior número de 👍 (3), indicando desejo legítimo de feature
- **Auth/Segurança**: Issues de OAuth login e hardening de dashboard (#[25910](https://github.com/NousResearch/hermes-agent/issues/25910)) mostram foco em segurança
- **Desktop App**: Muitos issues de UI/UX (flicker, theme editor, git branch display) sugerem que desktop é área de atenção

---

## 5. Bugs e Estabilidade

### Por Severidade

#### **P1 — Críticos (1 issue)**

| Issue | Título | Impacto |
|-------|--------|---------|
| [#73823](https://github.com/NousResearch/hermes-agent/issues/73823) | Token/cost accounting dies permanently on installs with schema_version >= 22 | Accounting de billing morre permanentemente — installações existentes afetadas |

#### **P2 — Altos (15+ issues)**

| Issue | Título | Área |
|-------|--------|------|
| [#69256](https://github.com/NousResearch/hermes-agent/issues/69256) | Terminal tool sem circuit breaker | Terminal/Sessions |
| [#68536](https://github.com/NousResearch/hermes-agent/issues/68536) | /model picker mostra modelos indisponíveis | CLI/Config |
| [#74817](https://github.com/NousResearch/hermes-agent/issues/74817) | PYTHONPATH leaks em subprocesses macOS/Linux | Terminal/Local Backend |
| [#70201](https://github.com/NousResearch/hermes-agent/issues/70201) | hermes update venv-holder guard só no Windows | Install/Update |
| [#29023](https://github.com/NousResearch/hermes-agent/issues/29023) | WhatsApp reply-to-bot detection falha | WhatsApp/Gateway |
| [#74973](https://github.com/NousResearch/hermes-agent/issues/74973) | macOS: hermes update skippa gateway restart silenciosamente | Install/Update |
| [#73777](https://github.com/NousResearch/hermes-agent/issues/73777) | retry loop trata empty content como retryable | Agent/Streaming |
| [#25910](https://github.com/NousResearch/hermes-agent/issues/25910) | Harden dashboard mutation flows | Security/Gateway |
| [#55271](https://github.com/NousResearch/hermes-agent/pull/55271) | Fix/cron delivery credential leak | Security/Cron |

#### **P3 — Médios (20+ issues)**
Diversos bugs em Desktop (flicker, file pickers, UI scale), browser tool (CDP errors), agent tool guardrails, e integrações secundárias.

### Padrões Identificados
1. **Session State**: Múltiplos bugs afetam integridade de sessão (delegate timeouts, accounting deaths)
2. **Cross-Platform**: Issues específicos de macOS/Linux vs Windows em path handling e update mechanisms
3. **Security**: Cred leaks e OAuth collision highlightaml ignore de segurança

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features com Maior Potencial de Inclusão

| Issue/PR | Título | Evidência de Demanda | Área |
|----------|--------|---------------------|------|
| [#38710](https://github.com/NousResearch/hermes-agent/issues/38710) | observe_unmentioned_group_messages para WhatsApp | 👍 3, 4 comentários | WhatsApp |
| [#10354](https://github.com/NousResearch/hermes-agent/issues/10354) | Living System Architecture: Self-Evolution | 2 comentários | Agent/Core |
| [#11919](https://github.com/NousResearch/hermes-agent/issues/11919) | SOUL.md should evolve with usage | 3 comentários, 👍 2 | Agent/Memory |
| [#37474](https://github.com/NousResearch/hermes-agent/issues/37474) | compact runtime card para /status | 3 comentários | Gateway |
| [#8650](https://github.com/NousResearch/hermes-agent/issues/8650) | hermes sessions import command | 👍 3 | CLI/Sessions |

### Tendências Observadas
- **Desktop-first**: Muitos PRs (#73945, #73936, #73948) focam em experiência desktop
- **Plugin System**: PR #74645 busca expandir hooks, indicando roadmap de extensibilidade
- **Voice/TTS**: PR #75014 mostra investimento em streaming TTS provider-neutral
- **Self-Evolution**: Issues sobre SOUL.md e Living System sugerem direção de IA autênnica

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Categoria | Feedback | Frequência |
|-----------|----------|------------|
| **Estabilidade de Sessão** | Usuários reportam sessões "mortas" após erros de terminal ou accounting | Alta |
| **UX do Desktop** | Flicker ao scroll, git branch chrome intrusivo, falta de controle de tema | Média-Alta |
| **Integração WhatsApp** | Limitações em grupos sem menção causam frustração | Média |
| **CLI/Update** | macOS update behavior "mágico demais" — silêncio quando deveria warnar | Média |
| **Model Picker** | Flood de modelos indisponíveis polui UI | Média |

### Cenários de Uso Emergentes
- **Kanban/Gateway Automation**: Demanda por verified task completion (#70806) sugere uso em workflows DevOps
- **Plugin Ecosystem**: Usuários querem estender sem patch (#74645)
- **Backup/Operations**: PR #75024 adiciona drain e backup management ao Desktop Command Center

### Indicadores de Satisfação
- Issues com 👍 explícito são poucos (máximo 3), sugerindo baixa votação mas participação em comments
- PRs de contribuidores recorrentes (Johnny-xuan com 7+ PRs desktop) indicam comunidade ativa

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta/Progresso há >30 dias

| Issue | Título | Criado | Última Atualização | Prioridade |
|-------|--------|--------|-------------------|------------|
| [#35200](https://github.com/NousResearch/hermes-agent/issues/35200) | Installer installed gateway twice | 2026-05-30 | 2026-07-30 | P2 |
| [#29023](https://github.com/NousResearch/hermes-agent/issues/29023) | WhatsApp reply-to-bot detection fails | 2026-05-20 | 2026-07-30 | P2 |
| [#25910](https://github.com/NousResearch/hermes-agent/issues/25910) | Harden dashboard mutation flows | 2026-05-14 | 2026-07-30 | P2 |
| [#4254](https://github.com/NousResearch/hermes-agent/issues/4254) | [UX] Add vim mode for input editing | 2026-03-31 | 2026-07-30 | P3 |
| [#8650](https://github.com/NousResearch/hermes-agent/issues/8650) | feat: hermes sessions import command | 2026-04-12 | 2026-07-30 | P3 |
| [#10354](https://github.com/NousResearch/hermes-agent/issues/10354) | Living System Architecture | 2026-04-15 | 2026-07-30 | P3 |

### Recomendações Prioritárias

1. **Atender #73823 (P1)**: Accounting de billing morto afeta todas as installações existentes — impacto crítico
2. **Revisar #69256 (P2)**: Terminal circuit breaker é problema de estabilidade recorrente
3. ** enderecesar #25910 (P2)**: Security hardening do dashboard com 2+ meses em aberto
4. **Decidir sobre #38710 e #11919**: Ambos têm "needs-decision" — precisam de direcionamento de maintainer
5. **Merge #75021**: Bug fix crítico de macOS já tem PR — precisa review

---

*Relatório gerado em 2026-07-31 com base em dados de atividade das últimas 24h do repositório NousResearch/hermes-agent.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório de Projeto — PicoClaw (2026-07-31)

---

## 1. Panorama do dia

O ecossistema PicoClaw demonstra **alta atividade de manutenção e evolução incremental** em 31 de julho de 2026. Foram registradas 7 issues e 17 pull requests atualizados nas últimas 24h, com 12 PRs em estado aberto — indicando um pipeline robusto de contribuições. Nenhum release foi publicado hoje, mas cinco PRs de dependências e funcionalidades foram fechados com sucesso. A comunidade concentra-se em três eixos: **melhoria de provedores e modelos de IA**, **estabilidade de canais de comunicação** e **refinamento de funcionalidades OAuth/MCP**. O projeto segue saudável, com atividade distribuída entre features de usuário final e updates de infraestrutura.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

> 📌 O último release formal não foi fornecido nos dados, mas o pipeline de merge de dependências (#3262, #3263, #3290, #3288) sinaliza que uma nova versão patch pode estar em preparação.

---

## 3. Progresso do Projeto

### PRs fechados/merged nas últimas 24h

| # | Título | Impacto | Link |
|---|---|---|---|
| #3163 | `feat(bedrock): leverage Converse prompt caching via cache points` | ⭐ **Alto** — Implementa prompt caching no AWS Bedrock via cache points em system, tools e messages, reduzindo custos com reads em ~0.1× | [PR #3163](https://github.com/sipeed/picoclaw/pull/3163) |
| #3263 | `build(deps): bump actions/setup-node from 6 to 7` | Baixo — Atualização de action CI/CD | [PR #3263](https://github.com/sipeed/picoclaw/pull/3263) |
| #3262 | `build(deps): bump actions/setup-go from 6 to 7` | Baixo — Atualização de action CI/CD | [PR #3262](https://github.com/sipeed/picoclaw/pull/3262) |
| #3290 | `build(deps): bump github.com/aws/aws-sdk-go-v2/config` | Baixo — Patch de segurança/estabilidade AWS SDK | [PR #3290](https://github.com/sipeed/picoclaw/pull/3290) |
| #3288 | `build(deps): bump github.com/aws/aws-sdk-go-v2/service/bedrockruntime` | Baixo — Patch de runtime Bedrock | [PR #3288](https://github.com/sipeed/picoclaw/pull/3288) |

**Destaque principal:** O PR #3163 (prompt caching no Bedrock) representa uma melhoria significativa de eficiência de custos para usuários que utilizam AWS Bedrock como provedor de modelos, potencialmente reduzindo custos de input em 10× para prompts repetitivos.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários)

| # | Título | Comentários | Tipo | Link |
|---|---|---|---|---|
| #2546 | `[Feature] Support OAuth 2.1 + PKCE for MCP servers, addable from dashboard` | 6 | Enhancement | [Issue #2546](https://github.com/sipeed/picoclaw/issues/2546) |
| #3258 | `[BUG] Process Hook before_tool modify not working` | 2 | Bug | [Issue #3258](https://github.com/sipeed/picoclaw/issues/3258) |
| #3257 | `Add stateless/no-history mode for gateway sessions` | 2 | Feature | [Issue #3257](https://github.com/sipeed/picoclaw/issues/3257) |
| #3287 | `[Feature] Better support long messages in IRC` | 1 | Feature | [Issue #3287](https://github.com/sipeed/picoclaw/issues/3287) |

### Análise dos temas dominantes

1. **OAuth 2.1 + PKCE para MCP (#2546)** — Recorrente (aberto desde abril/2026), tem 6 comentários e gerou fork (#3302). A comunidade solicita UX similar ao "Add connector" do Claude.ai para que usuários não-técnicos adicionem servidores MCP protegidos por OAuth diretamente do dashboard. **Sinal claro de demanda por democratização de integrações.**

2. **Gateway stateless (#3257)** — Usuários do modo gateway solicitam equivalente ao `--session` do CLI para criar conversas frescas. TEMA relacionado a **multi-tenancy e isolamento de sessões.**

3. **Suporte a mensagens longas no IRC (#3287)** — O protocolo IRC tem limite de 512 bytes; quando clientes dividem mensagens maiores, o PicoClaw interpreta cada fragmento como mensagem separada. **Problema de interoperabilidade com IRCv3.**

---

## 5. Bugs e Estabilidade

### Bugs reportados nas últimas 24h

| # | Severidade | Título | Resumo | Status | Link |
|---|---|---|---|---|---|
| #3308 | 🔴 **Crítica (Code Review)** | `Concurrency hazards, goroutine leaks, memory/speed optimizations in SeaHorse, Channel Manager, and Hooks` | Revisão de código apontando vazamento de goroutines, hazards de concorrência e oportunidades de otimização em SeaHorse, Channel Manager e Hooks | **ABERTA** | [Issue #3308](https://github.com/sipeed/picoclaw/issues/3308) |
| #3258 | 🟡 **Média** | `Process Hook before_tool modify not working: decision field discarded, args misparsed` | Campo `decision` no hook `before_tool` está sendo descartado, com desserialização defeituosa causando args mal parseados | **FECHADA** | [Issue #3258](https://github.com/sipeed/picoclaw/issues/3258) |
| #3283 | 🟡 **Média** | `fix(dingtalk): support picture/image message inbound` | PR para adicionar suporte a imagens no canal DingTalk com degradação elegante | **ABERTO** (PR #3283) | [PR #3283](https://github.com/sipeed/picoclaw/pull/3283) |
| #3279 | 🟢 **Baixa** | `fix(seahorse): prevent tool-call format leakage into LLM summaries` | Formato de tool-calls vazando em resumos LLM via `partsToReadableContent` | **ABERTO** (PR #3279) | [PR #3279](https://github.com/sipeed/picoclaw/pull/3279) |

### Análise

A **Issue #3308** é a mais preocupante — trata-se de uma code review abrangente que identifica problemas estruturais de concorrência e memória em componentes centrais (SeaHorse, Channel Manager, Hooks). Embora não seja um bug com crash imediato, vazamentos de goroutines podem causar degradação progressiva em deployments de longa duração. O autor classificou como "Code Review" ao invés de bug report, sugerindo análise preventiva.

A Issue #3258 foi fechada nas últimas 24h, indicando que o bug do hook `before_tool` foi resolvido.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features abertas nas últimas 24h

| # | Título | Domínio | Align. Roadmap | Link |
|---|---|---|---|---|
| #3307 | `[Feature] session list/switch command for Telegram (and other chat channels)` | UX / Channels | Nice-to-Have | [Issue #3307](https://github.com/sipeed/picoclaw/issues/3307) |
| #3302 | `[Feature] Support OAuth 2.1 for MCP servers same as #2546` | MCP / Auth | Nice-to-Have | [Issue #3302](https://github.com/sipeed/picoclaw/issues/3302) |
| #3287 | `[Feature] Better support long messages in IRC` | Channel: IRC | Nice-to-Have | [Issue #3287](https://github.com/sipeed/picoclaw/issues/3287) |

### PRs de feature em aberto com potencial de merge

| # | Título | Impacto | Link |
|---|---|---|---|
| #3270 | `feat: add DashScope TTS provider and WeChat audio file sending` | **Alto** — Adiciona TTS da Alibaba Cloud + envio de áudio WeChat | [PR #3270](https://github.com/sipeed/picoclaw/pull/3270) |
| #3271 | `chore(providers): update default model names to 2026-07 latest` | **Médio** — Atualiza modelos default (GPT-5.6, etc.) para versões mais recentes | [PR #3271](https://github.com/sipeed/picoclaw/pull/3271) |
| #3200 | `feat(models): add configurable default fallback chain` | **Alto** — Permite encadeamento de fallback de modelos na UI web | [PR #3200](https://github.com/sipeed/picoclaw/pull/3200) |
| #3222 | `refactor(deltachat): cleanup implementation, documentation -200LOC` | **Médio** — Limpeza de código DeltaChat, remoção de features legadas | [PR #3222](https://github.com/sipeed/picoclaw/pull/3222) |

### Sinais de roadmap inferidos

1. **Expansão de canais asiáticos** — DashScope (Alibaba) + WeChat (#3270) indicam foco no mercado chinês.
2. **Fallback chain de modelos** (#3200) — Evolução da UX de seleção de modelos, sugerindo estratégia de resiliência de provedores.
3. **Gestão de sessões cross-channel** (#3307) — Unificação da experiência de sessões entre CLI, gateway e canais de chat.
4. **MCP + OAuth** — O interesse duplicado (#2546, #3302) sinaliza que integração OAuth para MCP servers é candidato forte para a próxima versão.

---

## 7. Resumo de Feedback dos Usuários

### Dores reais identificadas

| Dor | Contexto | Evidência |
|---|---|---|
| **Fragmentação de sessões no gateway** | Usuários de `picoclaw gateway` não conseguem criar conversas frescas sem reiniciar | [Issue #3257](https://github.com/sipeed/picoclaw/issues/3257) |
| **Complexidade de adicionar MCP servers** | Usuários não-técnicos precisam de UX "copy-paste URL" para OAuth-protected MCP | [Issue #2546](https://github.com/sipeed/picoclaw/issues/2546) |
| **Sem gestão de sessões via Telegram** | Usuários Telegram não têm acesso ao sistema de histórico que existe na Web UI | [Issue #3307](https://github.com/sipeed/picoclaw/issues/3307) |
| **Mensagens IRC cortadas** | Usuários IRC perdem contexto ao terem mensagens >512 bytes divididas | [Issue #3287](https://github.com/sipeed/picoclaw/issues/3287) |
| **Performance/memória em produção** | Review de código sinaliza vazamento de goroutines em componentes centrais | [Issue #3308](https://github.com/sipeed/picoclaw/issues/3308) |

### Cenários de uso emergentes

- **Multi-channel deployment:** Usuários rodam PicoClaw simultaneamente em Telegram, DingTalk, WeChat e IRC — exigindo UX consistente de sessões.
- **Enterprise MCP:** Adoção de MCP servers protegidos por OAuth em ambientes cloud, não apenas desenvolvimento local.
- **Edge computing:** Interesse contínuo em rodar em hardware barato (mencionado explicitamente em #3308: "$10 hardware, <10MB RAM").

---

## 8. Backlog que Merece Atenção

### Issues/PRs sem atividade significativa ou aguardando resposta

| # | Tipo | Título | Dias desde atualização | Prioridade | Link |
|---|---|---|---|---|---|
| #3222 | PR | `refactor(deltachat): cleanup implementation, documentation -200LOC` | ~27 dias sem merge | 🟡 Média | [PR #3222](https://github.com/sipeed/picoclaw/pull/3222) |
| #3287 | Issue | `[Feature] Better support long messages in IRC` | Atualizada em 30/07 (recém aberta) | 🟡 Média | [Issue #3287](https://github.com/sipeed/picoclaw/issues/3287) |
| #2546 | Issue | `Support OAuth 2.1 + PKCE for MCP servers` | Atualizada em 30/07 (comentários recentes) | 🔴 **Alta** | [Issue #2546](https://github.com/sipeed/picoclaw/issues/2546) |

### Análise do backlog

**🔴 Alta prioridade: Issue #2546** — Em aberto há ~105 dias (criada em 16/04/2026), com 6 comentários e fork #3302. É um dos requests mais votados em termos de complexidade e impacto. A comunidade demonstra frustração por não haver progressão clara. **Recomendação:** Estabelecer posição oficial (aceitar/rejeitar/com planejado) para evitar acúmulo de demandas duplicadas.

**🟡 Média prioridade: PR #3222** — Refatoração de DeltaChat com -200 LOC de remoção de código legado. PR em stale há ~27 dias, aguardando review. Limpeza técnica importante para reduzir dívida técnica, mas sem impacto direto no usuário final.

---

## Métricas Resumidas (2026-07-31)

| Indicador | Valor |
|---|---|
| Issues ativas (abertas) | 4 |
| Issues fechadas (24h) | 3 |
| PRs abertos | 12 |
| PRs fechados/merged | 5 |
| Novas releases | 0 |
| Dependabot PRs | 9 (6 abertos, 3 fechados) |
| Features em desenvolvimento | 5+ (DashScope TTS, fallback chain, DingTalk images, DeltaChat cleanup, model updates) |
| Bugs reportados | 2 (1 crítico em code review, 1 médio resolvido) |
| Backlog crítico | 1 issue (~105 dias, #2546) |

---

*Relatório gerado automaticamente com base em dados GitHub do repositório sipeed/picoclaw. Data de referência: 2026-07-31.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-07-31

---

## 1. Panorama do Dia

O IronClaw mantém uma atividade intensa em 2026-07-31, com **45 issues e 50 PRs** atualizados nas últimas 24 horas. A equipe demonstra foco significativo em **refatoração arquitetural** (programa de 10 famílias de crates) e em **segurança multi-usuário**, com dois bugs de alta severidade reportados envolvendo isolamento de usuários. Não houve lançamentos hoje, mas vários PRs de tamanho XL estão em pipeline, incluindo funcionalidades de streaming UX e comandos nativos no Slack.

---

## 2. Lançamentos

**Nenhum release hoje (2026-07-31).**

O release mais recente documentado no repositório foi o **PR #5598** (2026-07-03), que incluiu:
- `ironclaw_common`: 0.4.2 → 0.5.0 ⚠️ (breaking changes)
- `ironclaw_safety`: 0.2.2 → 0.2.3
- `ironclaw_skills`: 0.3.0 → 0.4.0 ⚠️ (breaking changes)

| Issue | Tipo | Detalhes |
|-------|------|----------|
| [#5598](https://github.com/nearai/ironclaw/pull/5598) | Release | Changelog completo de breaking changes disponível |

---

## 3. Progresso do Projeto

### PRs Recentemente Merged/Fechados (2026-07-30)

| PR | Autor | Tamanho | Escopo | Impacto |
|----|-------|---------|--------|---------|
| [#6934](https://github.com/nearai/ironclaw/pull/6934) | BenKurrek | XL | refactor(host_api) | Remoção do wildcard prelude em `ironclaw_host_api`, melhor encapsulamento de contratos |
| [#6931](https://github.com/nearai/ironclaw/pull/6931) | BenKurrek | XL | feat(slack) | Comandos `/ironclaw` nativos no Slack (PR-3 do command train) |
| [#6891](https://github.com/nearai/ironclaw/pull/6891) | BenKurrek | XL | feat(webui) | Paleta de comandos filtrada por role na WebUI (PR-2) |
| [#6862](https://github.com/nearai/ironclaw/pull/6862) | serrrfirat | XL | fix(reborn) | Preserva explicações de erros terminais do modelo após migração de DB |
| [#6935](https://github.com/nearai/ironclaw/pull/6935) | BenKurrek | M | fix(libsql) | Recuperação de transações canceladas e migração de histórico |

### Destaques de Avanço

1. **Arquitetura WS0**: O PR #6934 implementa item 1 do wave 0 do programa de arquitetura-alvo, eliminando imports wildcard que violavam o contrato de módulos.

2. **Command Train**: Progresso sequencial com PRs #6873, #6891 e #6931 entregando slash commands consistentes entre Slack e WebUI.

3. **Reborn Stability**: Correções em skills (#6745) e erro terminal (#6862) visam estabilizar o framework Reborn para benchmarks de auto-melhoria.

---

## 4. Temas Quentes da Comunidade

### Issues com Mais Comentários (por volume de discussão)

| Issue | Comentários | Reações | Tema |
|-------|-------------|---------|------|
| [#6284](https://github.com/nearai/ironclaw/issues/6284) | 15 | 0 | Epic de recuperabilidade de erros — 100% de recuperação |
| [#6524](https://github.com/nearai/ironclaw/issues/6524) | 4 | 0 | Epic de plataforma de teste hermético |
| [#6565](https://github.com/nearai/ironclaw/issues/6565) | 1 | 0 | Epic de Skill Discovery, Routing e Activation |

### Análise dos Temas

**🔴 Error Recoverability (#6284)**: Esta epic com 15 comentários é a mais discutida, representando um contrato de recuperabilidade onde todo erro em execução deve: (a) permitir sobrevivência do run, (b) ser visível ao modelo, (c) incluir causa e solução, (d) dar turno ao modelo para agir. Este é um diferencial competitivo significativo para agentes de produção.

**🔒 Segurança Multi-Usuário (#6866, #6900)**: Dois issues de segurança reportados recentemente sem comentários ainda — **mesmo diretório home compartilhado** e **vazamento de namespace de memória entre usuários** — indicam uma área crítica que requer atenção imediata.

**📦 Arquitetura de Crates (#3773, #6919-#6927)**: Uma wave de 9 issues relacionadas à refatoração de crates em 10 famílias-alvo, todas abertas em 2026-07-30, demonstrando um esforço coordenado de limpeza técnica.

---

## 5. Bugs e Estabilidade

### Bugs Reportados por Severidade

| Severity | Issue | Descrição | Status |
|----------|-------|-----------|--------|
| 🔴 **P0/Security** | [#6866](https://github.com/nearai/ironclaw/issues/6866) | Home directory compartilhado; workspaces visíveis a outros usuários | OPEN |
| 🔴 **P0/Security** | [#6900](https://github.com/nearai/ironclaw/issues/6900) | Cross-user memory leak via shared-channel binding | OPEN |
| 🔴 **P1** | [#6348](https://github.com/nearai/ironclaw/issues/6348) | Gmail extension autorizada automaticamente após reinstall | CLOSED |
| 🔴 **P1** | [#6805](https://github.com/nearai/ironclaw/issues/6805) | Service unavailable intermitente (~30 min) | CLOSED |
| 🔴 **P1** | [#6720](https://github.com/nearai/ironclaw/issues/6720) | Task indefinitely running; stop button falha | CLOSED |
| 🟡 **P2** | [#6815](https://github.com/nearai/ironclaw/issues/6815) | Turn-state store latches após flush failure | CLOSED |
| 🟢 **Minor** | [#6916](https://github.com/nearai/ironclaw/issues/6916) | Markdown renderizado como plain text | OPEN |
| 🟢 **Minor** | [#6915](https://github.com/nearai/ironclaw/issues/6915) | Links de workspace não abrem arquivos | OPEN |
| 🟢 **Minor** | [#6904](https://github.com/nearai/ironclaw/issues/6904) | Logs page não carrega além da primeira página | OPEN |
| 🟢 **Minor** | [#6903](https://github.com/nearai/ironclaw/issues/6903) | Admin users list não carrega além de 100 usuários | OPEN |

### Análise de Estabilidade

**Problemas Resolvidos Hoje**: A equipe demonstrou resposta rápida a 4 bugs P1 críticos — OAuth Gmail, service unavailable, task timeout e turn-state latch — todos fechados em 2026-07-29.

**Preocupação Ativa**: Os dois bugs de segurança multi-usuário (#6866, #6900) estão em estado OPEN sem comentários, sugerindo triagem pendente. Estes são críticos para deployments multi-tenant.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Identificadas

| PR/Issue | Escopo | Descrição | Complexidade |
|----------|--------|-----------|--------------|
| [#6901](https://github.com/nearai/ironclaw/pull/6901) | UX | Agentic Activity and Streaming UX (webui_v2) | XL |
| [#6780](https://github.com/nearai/ironclaw/pull/6780) | ironhub | Deep-link register + private manifest source | XL |
| [#6930](https://github.com/nearai/ironclaw/pull/6930) | extensions | Register hosted MCP servers | XL |
| [#6364](https://github.com/nearai/ironclaw/pull/6364) | attachments | Durable cross-channel file flows | XL |
| [#6745](https://github.com/nearai/ironclaw/pull/6745) | skills | Skills selectable/installable/complete in Reborn | XL |
| [#6855](https://github.com/nearai/ironclaw/pull/6855) | compaction | Redact secret matches, recover from overflow | XL |
| [#6933](https://github.com/nearai/ironclaw/pull/6933) | ironhub | Bind installs to verified package identity | L |

### Sinais de Roadmap

1. **Reborn como First-Class**: Investimento pesado em skills (#6745), E2E coverage (#6771), e testing platform (#6524) sugere foco em estabilizar o framework de auto-melhoria de agentes.

2. **Multi-Channel Native**: Funcionalidade de attachments cross-channel (#6364) e comandos Slack nativos (#6931) indicam estratégia de presença multiplataforma.

3. **MCP Integration**: Registro de MCP servers hospedados (#6930) prepara terreno para extensibilidade via Model Context Protocol.

4. **IronHub Marketplace**: Deep-link e private manifest (#6780, #6933) apontam para evoluções no sistema de distribuição de packages/skills.

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Categoria | Feedback | Fonte |
|-----------|----------|-------|
| 🔒 **Privacidade/Segurança** | "Scrolling through the workspace, the home directory is the same for all users" | [#6866](https://github.com/nearai/ironclaw/issues/6866) |
| 🔒 **Isolamento** | Shared-channel binding colapsa usuários no namespace do operador | [#6900](https://github.com/nearai/ironclaw/issues/6900) |
| 📱 **OAuth** | Gmail automaticamente conectado após reinstall sem consentimento | [#6348](https://github.com/nearai/ironclaw/issues/6348) (CLOSED) |
| ⚡ **Performance** | Requisição de immutable caching para JS/CSS bundle | [#6839](https://github.com/nearai/ironclaw/issues/6839) |
| 📊 **UI/UX** | Métricas fabricated ($0.00 spend, 0 failures) exibidas como dados reais | [#6902](https://github.com/nearai/ironclaw/issues/6902) |
| 🔗 **Navigation** | Links de workspace não navegam para arquivo | [#6915](https://github.com/nearai/ironclaw/issues/6915) |
| 📝 **Markdown** | Preview de .md/.mdx como plain text | [#6916](https://github.com/nearai/ironclaw/issues/6916) |

### Análise de Sentimento

**Preocupações Críticas**: Segurança multi-usuário domina o feedback recente — 2 issues de segurança sem interação indicam possível subnotificação ou novos usuários descobrindo o problema.

**Experiência Desktop**: Bugs de UI (markdown, links, métricas fabricadas) sugerem qualidade de polish inconsistente na webui_v2.

**Performance**: Pedido de immutable caching (#6839) indica preocupação com latência de repeat-visit.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta (Stale/Needs Triage)

| Issue | Idade | Escopo | Prioridade Sugerida |
|-------|-------|--------|---------------------|
| [#6866](https://github.com/nearai/ironclaw/issues/6866) | 2 dias | security | 🔴 P0 |
| [#6900](https://github.com/nearai/ironclaw/issues/6900) | 1 dia | security | 🔴 P0 |
| [#6905](https://github.com/nearai/ironclaw/issues/6905) | 1 dia | documentation | 🟢 P3 |
| [#6910](https://github.com/nearai/ironclaw/issues/6910) | 1 dia | UI/components | 🟢 P2 |
| [#6916](https://github.com/nearai/ironclaw/issues/6916) | 1 dia | UI | 🟢 P2 |
| [#6902](https://github.com/nearai/ironclaw/issues/6902) | 1 dia | UI | 🟡 P1 |
| [#6903](https://github.com/nearai/ironclaw/issues/6903) | 1 dia | UI/backend | 🟡 P1 |
| [#6904](https://github.com/nearai/ironclaw/issues/6904) | 1 dia | UI/backend | 🟡 P1 |

### Recomendação de Ação Imediata

1. **Triagem de Segurança (#6866, #6900)**: Ambos os bugs de isolamento multi-usuário estão sem comentários da equipe. Avaliação de severidade e acknowledgment são urgentes.

2. **Epic de Arquitetura (#3773, #6919-#6927)**: 9 issues relacionadas ao target-architecture abertas no mesmo dia. Consolidar emmilestone ou epics maiores evitaria fragmentação.

3. **Paginação UI (#6903, #6904)**: Bugs de paginação em Admin e Logs sugerem problema recorrente de cursor handling que pode se repetir em outras listas.

---

## Métricas Resumo do Dia

| Indicador | Valor |
|-----------|-------|
| Issues ativas/abertas | 34 |
| Issues fechadas (24h) | 11 |
| PRs abertos | 27 |
| PRs merged/fechados | 23 |
| Bugs P0/P1 novos | 2 |
| Releases | 0 |
| Atividade total | 95 itens |

---

*Relatório gerado em 2026-07-31 com base em dados do GitHub do projeto [nearai/ironclaw](https://github.com/nearai/ironclaw).*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório de Projeto — CoPaw (QwenPaw)

**Data de referência:** 2026-07-31
**Repositório:** [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw)

---

## 1. Panorama do dia

O projeto CoPaw (QwenPaw) registrou **alta atividade** em 31/07/2026, com 25 issues e 50 PRs atualizados nas últimas 24h — indicativo de uma comunidade engajada e ciclo de desenvolvimento intenso. Nenhuma release foi publicada no período. A proporção de PRs merged/closed (26) supera as issues fechadas (7), sugerindo que a equipe está focada em validar contribuições externas e estabilizar a codebase. Entre os destaques, a versão 2.0 segue sob scrutiny por regressões de performance (#6307), enquanto recursos aguardam review para a próxima iteração.

---

## 2. Lançamentos

**Nenhum release publicado nas últimas 24h.**

A versão estável atual permanece **v2.0.1** (referenciada nas issues). Não há changelog ou tag de release recente no período analisado.

---

## 3. Progresso do Projeto

### PRs merged/closed mais relevantes

| # | PR | Descrição | Status |
|---|-----|-----------|--------|
| [#6424](https://github.com/agentscope-ai/QwenPaw/pull/6424) | `feat(computer-use): native desktop GUI automation` | Automação GUI nativa para Windows e macOS com modo accessibility-first + Tauri | **Merged** |
| [#6562](https://github.com/agentscope-ai/QwenPaw/pull/6562) | `Fix Bug #6533, #6506, and #60` | Corrige TypeError no `/mission`, herança de `approval_level` em subagentes, e bug #60 | **Merged** |
| [#6486](https://github.com/agentscope-ai/QwenPaw/pull/6486) | `fix(matrix): probe vodozemac E2EE backend` | Habilita criptografia E2EE no Matrix para Python 3.12 | **Merged** |
| [#6256](https://github.com/agentscope-ai/QwenPaw/pull/6256) | `feat(governance): sandbox-unavailable fallback configurable` | Torna configurável o fallback quando sandbox não está disponível | **Merged** |
| [#6556](https://github.com/agentscope-ai/QwenPaw/pull/6556) | `feat(creator): checkpoints, home redesign, media recovery` | Novo sistema de checkpoints de criação, redesign da home e recuperação de mídia | **Merged** |
| [#6582](https://github.com/agentscope-ai/QwenPaw/pull/6582) | `fix(sandbox): fix sandbox cleanup handling` | Correção no gerenciamento de cleanup do sandbox | **Merged** |
| [#6584](https://github.com/agentscope-ai/QwenPaw/pull/6584) | `fix(ci): ensure changes be detected in next reload()` | Correção no CI para detecção de mudanças no reload | **Merged** |
| [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) | `feat: unify provider discovery, model metadata, routing` | Unifica descoberta de providers, metadados de modelos, roteamento e controles de agente | **Under Review** |

**Avanços significativos:**
- **Automação desktop nativa** (#6424): Representa um marco para a experiência "computer-use", permitindo ao agente operar aplicações host com permissões de acessibilidade.
- **Matrix E2EE** (#6486): Resolve bloqueio crítico em Python 3.12 ao detectar corretamente o backend vodozemac.
- **Unificação de modelo/providers** (#6302): PR de grande escala em revisão — promete endereçar 7 pontos de dor em providers de modelos.

---

## 4. Temas Quentes da Comunidade

### Issues/PRs com maior engajamento

| # | Título | Tipo | Comentários | Highlights |
|---|--------|------|-------------|------------|
| [#6307](https://github.com/agentscope-ai/QwenPaw/issues/6307) | v2.0 introduces ~2s fixed overhead per reply | Bug | 7 | **Mais comentada.** Regressão de performance crítica — overhead fixo de ~2s em cada resposta conversational vs v1.x |
| [#6524](https://github.com/agentscope-ai/QwenPaw/issues/6524) | MCP backend restart breaks client auto-recovery | Bug | 5 | Sessões MCP expiradas não são recriadas automaticamente após restart do server |
| [#6563](https://github.com/agentscope-ai/QwenPaw/issues/6563) | CI `real-behavior-proof` blocks all fork PRs | CI Bug | 4 | Todos os PRs de forks estão bloqueados — impacto direto na contribuição externa |
| [#6453](https://github.com/agentscope-ai/QwenPaw/pull/6567) | Preserve Chinese filenames in upload hints | Fix PR | — | Autor: RerankerGuo; aborda problema de UX com arquivos CJK |
| [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) | Unify provider discovery & model routing | Feature | — | PR de refatoração large-scale; 7 pain points endereçados |

**Análise:** O tema mais candente é a **regressão de performance na v2.0** (#6307, 7 comentários), indicando que a atualização da v1.x para v2.0 introduziu um overhead arquitetural significativo. A comunidade também demonstra preocupação com a **saúde do CI para contributors externos** (#6563), o que pode inibir contribuições. A área de **MCP (Model Context Protocol)** aparece em múltiplas issues (#6524, #6557, #6586), sinalizando maturidade inicial dessa integração.

---

## 5. Bugs e Estabilidade

### Por severidade (issues abertas)

| Severidade | Issues | Exemplos |
|------------|--------|----------|
| 🔴 **Crítica** | 2 | #6307 (regressão 2s), #6589 (UI freeze) |
| 🟠 **Alta** | 4 | #6555 (memory compression), #6588 (spawn_subagent), #6558 (data integrity), #6565 (shell multiline) |
| 🟡 **Média** | 5 | #6524 (MCP recovery), #6578 (cron dispatch), #6557 (MCP tool names), #6563 (CI blocks forks), #6476 (Matrix E2EE — closed) |
| 🔵 **Baixa/UX** | 7 | #6583 (file list display), #6585 (char count animation), #6587 (app name) |

### Bugs críticos abertos

**1. Regressão de performance v2.0 (#6307)**
- Autor: lululau | Atualizado: 2026-07-30
- **Resumo:** Upgrade de v1.1.12.post2 para v2.0.0.post3 introduz ~2 segundos de overhead fixo em cada resposta conversacional simples, independente da latência do modelo. Causado por mudanças arquiteturais no request pipeline.
- **Impacto:** Afeta todas as interações; degradando experiência de uso real.
- **Link:** https://github.com/agentscope-ai/QwenPaw/issues/6307

**2. UI freeze com output massivo (#6589)**
- Autor: adolfishxu | Criado: 2026-07-30
- **Resumo:** `execute_shell_command` com stdout de dezenas de milhares de linhas causa freeze completo da UI — o console tenta renderizar tudo de uma vez, bloqueando o main thread.
- **Link:** https://github.com/agentscope-ai/QwenPaw/issues/6589

**3. UI data integrity — perda de mensagens (#6558)**
- Autor: aEgoist | Criado: 2026-07-29
- **Resumo:** Três problemas de integridade: (1)切换模式丢失最后一条消息; (2)切换会话丢失回复 completas; (3)用户指令漂移 após reconexão.
- **Link:** https://github.com/agentscope-ai/QwenPaw/issues/6558

**4. CI bloqueia todos os PRs de forks (#6563)**
- Autor: BlackBox-Labs | Status: CLOSED
- **Nota:** Bug já fechado, mas demonstra vulnerabilidade no processo de contribuição.
- **Link:** https://github.com/agentscope-ai/QwenPaw/issues/6563

### Bugs recentemente resolvidos

| # | Bug | Solução via PR |
|---|-----|---------------|
| [#6562](https://github.com/agentscope-ai/QwenPaw/pull/6562) | `/mission` TypeError — params faltando no patch | PR #6562 merged |
| [#6486](https://github.com/agentscope-ai/QwenPaw/pull/6486) | Matrix E2EE inoperante em Python 3.12 | PR #6486 merged |
| [#6464](https://github.com/agentscope-ai/QwenPaw/issues/6464) | Connection test failure para todos os modelos | Fechado sem PR explícito |
| [#6578](https://github.com/agentscope-ai/QwenPaw/issues/6578) | Cron dispatch.mode "final" não funciona | Fechado (em investigação) |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features mais demandadas

| # | Feature | Comentários | Sinais de Prioridade |
|---|---------|-------------|---------------------|
| [#6408](https://github.com/agentscope-ai/QwenPaw/issues/6408) | Undo/rededit última mensagem | 2 | **Closed** — alto interesse, similar ChatGPT/Cherry Studio |
| [#6571](https://github.com/agentscope-ai/QwenPaw/issues/6571) | Workflows / lógica de流程强 | 1 | Comparação direta com Dify; demanda de uso enterprise |
| [#6568](https://github.com/agentscope-ai/QwenPaw/issues/6568) | Global hotkey para floating input box (estilo豆包) | 1 | Inspirado em Raycast/Doubao; UX premium |
| [#6560](https://github.com/agentscope-ai/QwenPaw/issues/6560) | Chat UX improvements — copy, undo, stop, scroll | 1 | Bunche de UX básico faltando |
| [#6452](https://github.com/agentscope-ai/QwenPaw/issues/6452) | Remover prompt "model lacks multimodal" | 2 | UX polish — mensagem intrusiva |
| [#6587](https://github.com/agentscope-ai/QwenPaw/issues/6587) | Renomear app "QwenPaw Desktop" → "QwenPaw" | 1 | Branding cleanup |

### Sinais de roadmap

1. **Experiência de desktop madura:** Global hotkeys (#6568), automação GUI native (#6424 merged), e refinamento de UI para desktop indicam foco em客户端 desktop como produto primário.

2. **MCP como plataforma:** Issues #6524, #6557, #6586 mostram que MCP está em fase de estabilização — a integração com MCP servers remotos e recuperação de sessão são áreas ativas.

3. **Enterprise/Workflow:** A demanda por workflows estruturados (#6571) e checkpoints de criação (#6556 merged) aponta para casos de uso mais complexos, possivelmente impulsionados por usuários corporativos.

4. **Unificação de providers/modelos:** O PR #6302 em revisão sugere uma rearquitetura significativa no sistema de roteamento de modelos — pode indicar próxima versão com breaking changes.

---

## 7. Resumo de Feedback dos Usuários

### Dores reais reportadas

| Categoria | Descrição | Frequência |
|-----------|-----------|-----------|
| **Performance** | Overhead de ~2s por resposta na v2.0 torna interações arrastadas | Múltiplos usuários; issue #6307 |
| **Estabilidade MCP** | Requisitar `list mcp` manualmente após restart de server é fricção inaceitável | Issue #6524 |
| **UI/UX desktop** | Animação de contagem de caracteres distrai; freezing com outputs grandes; perda de mensagens ao trocar sessão | Issues #6589, #6558, #6585 |
| **Fluxo de trabalho** | Ausência de undo/redo e workflows estruturados força workarounds instáveis | Issues #6408, #6571 |
| **CI/Contribuição** | PRs de forks bloqueados por workflow quebrado | Issue #6563 |

### Cenários de uso destacados

- **Análise de dados em lote:** Scripts que geram 15k+ caracteres de output (stock analysis, database queries) — cenário bloqueado por truncamento e freezing (#6512, #6589).
- **Migração de dados com agent:** Operações críticas (TeslaMate data migration) perdidas no Dream/memory compression — risco de perda de informação (#6555).
- **Uso empresarial com permissões:** Sessions com `approval_level=OFF` não propagam para subagentes — problema de segurança e workflow (#6506

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>


# Relatório do Projeto ZeroClaw — 2026-07-31

---

## 1. Panorama do Dia

ZeroClaw mantém um nível de atividade muito elevado no dia de hoje. Com **31 issues e 50 PRs atualizados nas últimas 24 horas**, o projeto demonstra um fluxo intenso de contribuições. Não houve lançamentos de novas versões, embora o tracker da v0.8.4 (#8357) tenha data-alvo exatamente hoje (31 de julho), sugerindo que o release train pode estar em fase final de corte. A maioria das issues abertas gira em torno de **RFCs arquiteturais de alta prioridade** (memória, segurança de credenciais, compatibilidade OpenAI), enquanto os PRs pendentes de review são predominantemente correções de bugs e melhorias de estabilidade — muitos já sinalizados como "needs-author-action", aguardando resposta dos mantenedores. O cenário é de um projeto saudável, com alta Engajamento da comunidade, mas com pressão sobre a equipe de manutenção para processar o volume de PRs e finalizar o release da semana.

---

## 2. Lançamentos

**Nenhuma release została publicada nelle ultime 24 ore.**

O tracker [v0.8.4 maintenance train (#8357)](https://github.com/zeroclaw-labs/zeroclaw/issues/8357) define hoje (2026-07-31) como data-alvo. Sem atualização formal visível nos dados, presume-se que o release esteja em fase de freeze ou conclusão final de merge. O tracker [v0.8.5 weekly non-breaking release (#9459)](https://github.com/zeroclaw-labs/zeroclaw/issues/9459) já está em acompanhamento para o ciclo subsequente, indicando uma cadência semanal consolidada.

---

## 3. Progresso do Projeto

Os PRs mais relevantes merged/closed nas últimas 24h refletem correções críticas para a estabilidade da v0.8.x:

| PR | Descrição | Tamanho | Risco |
|----|-----------|---------|-------|
| [#8996](https://github.com/zeroclaw-labs/zeroclaw/pull/8996) | `fix(goal)`: preserva goals em execução durante reload do daemon | XL | high |
| [#9494](https://github.com/zeroclaw-labs/zeroclaw/pull/9494) | `fix(sop)`: habilita cron-started headless runs (SOPs cron não executavam) | XS | high |
| [#9476](https://github.com/zeroclaw-labs/zeroclaw/pull/9476) | `feat(sop)`: adiciona cancelamento autenticado de jobs SOP em execução | L | high |
| [#9519](https://github.com/zeroclaw-labs/zeroclaw/pull/9519) | `fix(gateway)`: serializa escritas de config para evitar sobrescrita simultânea | M | high |
| [#9281](https://github.com/zeroclaw-labs/zeroclaw/pull/9281) | `fix(config)`: rollback de aliases de map em falhas de config set | M | high |
| [#9410](https://github.com/zeroclaw-labs/zeroclaw/pull/9410) | `fix(security)`: desabilita audit logging de comandos por padrão | S | high |
| [#9401](https://github.com/zeroclaw-labs/zeroclaw/pull/9401) | `fix(security)`: preserva shell cwd e lança sandbox-exec pelo path canônico | XS | high |

**Destaque:** A correção em [#9494](https://github.com/zeroclaw-labs/zeroclaw/pull/9494) resolve um bug de longa data onde SOPs disparados por cron nunca chegavam a executar — a maintenance tick passava a ação `ExecuteStep` para `process_headless_results`, que apenas registrava como pending sem jamais executar o loop do agente. Este é um bug de **severidade P1** que afeta um caso de uso central de automação.

---

## 4. Temas Quentes da Comunidade

As issues com maior engajamento (comentários + thumbs up) revelam as prioridades arquiteturais que a comunidade considera críticas:

### RFCs com maior volume de discussão:

**1. [#9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048) — Separação de histórico de conversa e memória de longo prazo** (12 comentários)
- **Autor:** Audacity88 | **Prioridade:** P2 | **Risco:** high
- A documentação do ZeroClaw distingue "session history" de "long-term memory", mas a implementação ainda mistura ambos nos caminhos críticos de runtime, gateway e autosave de canais.
- **Análise:** Este é um problema arquitetural fundamental. A separação permitiria políticas de retenção, eviction e enriquecimento independentes para cada conceito. A discussão ativa (12 comentários) indica que múltiplos contribuidores têm skin in the game.

**2. [#9127](https://github.com/zeroclaw-labs/zeroclaw/issues/9127) — Abstract `KeySource` trait para material de chave-mestra** (9 comentários)
- **Autor:** REL-mame | **Prioridade:** P2 | **Risco:** high
- Classifica material de chave-mestra por fonte/deployment form (do sistema, do usuário, de HSM, etc.).
- **Análise:** Extensão direta do sistema ChaCha20-Poly1305 existente com 93 campos `#[secret]` e 59 campos `#[credential_class]`. Ganha relevância em cenários enterprise com requisitos de compliance.

**3. [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) e [#8550](https://github.com/zeroclaw-labs/zeroclaw/issues/8550) — Compatibilidade OpenAI Chat Completions** (7 + 5 comentários)
- **Autores:** REL-mame | **Prioridade:** P2 | **Risco:** high
- Adapter para que clientes OpenAI (Open WebUI, LobeChat) se conectem sem adapter custom.
- **Análise:** A duplicação de issues indica que a demanda é urgente e talvez já esteja sendo tratada em paralelo. A compatibilidade OpenAI reduz significativamente a barreira de adoção.

**4. [#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) — Perfil `local_small` runtime** (7 comentários, 2 👍)
- **Autor:** ThirDecade2020 | **Prioridade:** P2 | **Risco:** high
- Modo compact para modelos locais: reduz prompt bloat, desabilita fallback parsing permissivo, previne vazamento de instruções internas.
- **Análise:** É a issue com mais thumbs up (2) entre as 30 mais comentadas, sinalizando que a dor "local-first" é real e compartilhada. Correlaciona-se com o RFC [#7951](https://github.com/zeroclaw-labs/zeroclaw/issues/7951) (effort-based routing) e [#9549](https://github.com/zeroclaw-labs/zeroclaw/issues/9549) (community model advisor).

---

## 5. Bugs e Estabilidade

### Por Severidade:

**S0 — Risco de perda de dados / segurança crítica:**
- [#9565](https://github.com/zeroclaw-labs/zeroclaw/issues/9565) — Webhook handlers (WhatsApp Cloud, Linq, WATI) **não autenticam o chamador** antes de despachar mensagens para o agente. Verificado por inspeção de source. **P1.** (1 comentário, 0 thumbs up)

**S1 — Workflow bloqueado:**
- [#9186](https://github.com/zeroclaw-labs/zeroclaw/issues/9186) — **MCP stdio**: 3 bugs interagindo — response id ignorado, timeout de 30s vs budget de 180-600s, Mutex mantido por toda a chamada. Closed.

**S2 — Comportamento degradado:**
- [#9373](https://github.com/zeroclaw-labs/zeroclaw/issues/9373) — Peer-agent delivery **não rastreia custo** (sem `TOOL_LOOP_COST_TRACKING_CONTEXT`), budgets não são aplicados. Closed.
- [#9278](https://github.com/zeroclaw-labs/zeroclaw/issues/9278) — `context_compression.enabled` defaulta `true` mas o runtime ignora. Closed.
- [#8810](https://github.com/zeroclaw-labs/zeroclaw/issues/8810) — Documentação do Telegram está incorreta. Closed.

**Bugs P1 restantes em aberto:**
- [#9239](https://github.com/zeroclaw-labs/zeroclaw/issues/9239) — `config patch --json` emite erros em plaintext em dois caminhos de falha. Closed.
- [#9422](https://github.com/zeroclaw-labs/zeroclaw/issues/9422) — Unit tests do zeroclaw-config **não compilam no Windows** (`cfg(unix)` ungated). Closed.

**Bugs em aberto sem assignee claro:**
- [#8847](https://github.com/zeroclaw-labs/zeroclaw/issues/8847) — `cargo test --doc` falha com Rust 1.96 por flag duplicada de rustdoc theme (S3).

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em progresso (status:accepted ou in-progress):

| Issue | Feature | Prioridade | Sinais |
|-------|---------|-----------|--------|
| [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) | OpenAI Chat Completions adapter | P2 | 7 comentários |
| [#8550](https://github.com/zeroclaw-labs/zeroclaw/issues/8550) | OpenAI-compatible chat completions endpoint | P2 | 5 comentários |
| [#9106](https://github.com/zeroclaw-labs/zeroclaw/issues/9106) | A2A outbound client (A2ATool) | P2 | 6 comentários |
| [#8780](https://github.com/zeroclaw-labs/zeroclaw/issues/8780) | Realtime speech-to-speech via Gemini Live | P2 | 5 comentários |
| [#8568](https://github.com/zeroclaw-labs/zeroclaw/issues/8568) | Mixture-of-Agents (MoA) virtual provider | P2 | 4 comentários |
| [#8933](https://github.com/zeroclaw-labs/zeroclaw/issues/8933) | Cross-turn OTel correlation (`gen_ai.conversation.id`) | P2 | 7 comentários |
| [#7951](https://github.com/zeroclaw-labs/zeroclaw/issues/7951) | Effort-based local/cloud model routing | P2 | 1 comentário |
| [#8313](https://github.com/zeroclaw-labs/zeroclaw/pull/8313) | Compact skill injection como default (deprecation de full mode) | — | PR aberto |

**Sinal de roadmap forte:** O esforço de compatibilidade OpenAI aparece em **duas issues paralelas** (#8603 e #8550), sugerindo priorização implícita. A feature de A2A outbound (#9106) completa o picture do A2A Server shipped em v0.8.2, indicando que a estratégia de interop de agentes está em curso. O MoA provider (#8568) aponta para uma direção de agregação multi-modelo no roadmap.

### RFCs aguardando decisão:

- [#9103](https://github.com/zeroclaw-labs/zeroclaw/issues/9103) — Separação de storage autoritativo de memória vs. enrichment connectors (Lucid). 5 comentários.
- [#9549](https://github.com/zeroclaw-labs/zeroclaw/issues/9549) — Community-powered local model advisor. RFC novo (0 comentários ainda).

---

## 7. Resumo de Feedback dos Usuários

**Dores reais identificadas:**

1. **Segurança de webhooks (crítica):** O bug [#9565](https://github.com/zeroclaw-labs/zeroclaw/issues/9565) expõe que três canais (WhatsApp Cloud, Linq, WATI) dispatcham mensagens sem autenticar o webhook caller. É uma vulnerabilidade de segurança real que deve ser priorizada.

2. **Local-first models é doloroso:** As issues [#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) (local_small profile), [#7951](https://github.com/zeroclaw-labs/zeroclaw/issues/7951) (effort-based routing) e [#9549](https://github.com/zeroclaw-labs/zeroclaw/issues/9549) (community model advisor) demonstram que usuários locais enfrentam: prompt bloat, vazamento de instruções internas, e falta de guidance sobre quais modelos usar. A issue #5287 tem 2 thumbs up — o único engajamento positivo registrado.

3. **UX de onboarding e self-service:** O tracker [#9009](https://github.com/zeroclaw-labs/zeroclaw/issues/9009) coordena "Operator UX: Onboarding, Pairing & Self-Service", sinalizando que a experiência de primeiros passos ainda precisa refinamento.

4. **Interoperabilidade com ecossistema OpenAI:** Usuários querem usar ZeroClaw com Open WebUI, LobeChat e integrações custom que falam API OpenAI. A ausência de endpoint compatível é uma barreira de adoção.

5. **Documentação desatualizada:** O bug [#8810](https://github.com/zeroclaw-labs/zeroclaw/issues/8810) sobre exemplo Telegram errado e [#9550](https://github.com/zeroclaw-labs/zeroclaw/issues/9550) sobre link LinkedIn quebrado no org do GitHub indicam que a documentação precisa de manutenção.

**Ponto positivo:** A correção de cron-started SOPs ([#9494](https://github.com/zeroclaw-labs/zeroclaw/pull/9494)) mostra que a equipe responde a bugs de automação, e a adição de cancelamento autenticado de SOP ([#9476](https://github.com/zeroclaw-labs/zeroclaw/pull/9476)) é uma melhoria de UX operacional bem-vinda.

---

## 8. Backlog que Merece Atenção

Issues/PRs importantes que estão **sem resposta significativa ou sem movimento** há algum tempo:

| Issue/PR | Tema | Sinais de alerta |
|----------|------|-----------------|
| [#8568](https://github.com/zeroclaw-labs/zeroclaw/issues/8568) | Mixture-of-Agents provider |

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*