# Resumo diário do ecossistema de agentes de IA 2026-07-24

> Issues: 0 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-07-23 20:56 UTC

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

## 2026-07-24

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source demonstra **vitalidade intensa** em 24 de julho de 2026, com 5 dos 6 projetos monitorados em estado de alta fermentação desenvolvimental. NanoBot, Hermes Agent, IronClaw, CoPaw e ZeroClaw mantêm volumes expressivos de atividade — combinando **aproximadamente 270 PRs atualizados e 220+ issues** no período de 24 horas. Nenhum projeto publicou releases formais, indicando que o ecossistema está majoritariamente em **ciclos de estabilização e preparação para lançamentos futuros**. Os temas dominantes concentram-se em segurança de workspace, resiliência multi-plataforma (especialmente Windows), melhorias de memória persistente e interoperabilidade entre agentes. A exceção é NullClaw, que permanece completamente inativo, levantando questões sobre viabilidade contínua do projeto.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | Releases | PRs Merged | Avaliação de Saúde |
|---------|-------------|-----------|----------|------------|-------------------|
| **NanoBot** | 8 (4✅/4🔓) | 46 (16🔓/30✅) | 0 | 30 | 🟢 Excelente — 8 PRs p0/p1 merged, foco em segurança |
| **Hermes Agent** | 50 (26✅/24🔓) | 50 (46🔓/4✅) | 0 | 4 | 🟢 Sadio — sem P0/P1 abertas, mas 6 issues >30d sem resposta |
| **PicoClaw** | 2 | 15 (7✅/8🔓) | 0 | 7 | 🟢 Bom — atualizações massivas de deps, 1 bug crítico corrigido |
| **IronClaw** | 33 (40🔓/10✅) | 50 (40🔓/10✅) | 0 | 10 | 🟢 Excelente — 123/123 capacidades hermeticamente testadas |
| **CoPaw** | 35 (13✅/21🔓) | 50 (21✅/29🔓) | **v2.0.1-beta.2** | 21 | 🟡 Atenção — regressão de performance v2.0 (~2s overhead) |
| **ZeroClaw** | 50 (46🔓/4✅) | 50 (46🔓/4✅) | 0 | 4 | 🟡 Atenção — 2 bugs S0 (perda de mensagens Telegram/WeChat) |
| **NullClaw** | 0 | 0 | 0 | 0 | 🔴 Inativo | ⚠️ |

**Observação:** A contagem de PRs reflete "atualizados" (abertos ou com atividade recentes), não exclusivamente novos PRs.

---

## 3. Posicionamento do Projeto Principal

### NanoBot (HKUDS/nanobot)

**Posição:** Líder em volume de correções de segurança e velocidade de ciclo de release.

| Dimensão | Avaliação |
|----------|----------|
| **Velocidade de Merge** | ⭐⭐⭐⭐⭐ — 30 PRs merged/closed em 24h |
| **Segurança** | ⭐⭐⭐⭐⭐ — 4+ correções p0/p1 de security (workspace containment, destructive commands) |
| **Maturidade WebUI** | ⭐⭐⭐⭐ — Refatoração completa de presets (#5061) |
| **Comunidade** | ⭐⭐⭐⭐ — Forte adoção asiática (Feishu/Lark) |
| **Estabilidade** | ⚠️ 2 PRs com conflitos pendentes (incluindo p0) |

**Vantagens competitivas:**
- Ciclo de correção de segurança notavelmente rápido — 7 PRs p0/p1 fechados no mesmo dia de abertura
- Integração nativa com canais asiáticos (Feishu)
- Sistema de presets de modelo reestruturado para granularidade por conversation
- Foco declarado em fase de estabilização pré-release

**Diferenças técnicas:**
- Arquitetura com forte isolamento de workspace e shell guard
- Exec engine com proteção contra path traversal via `equals sign` extraction
- Session management com retenção de sessões após falhas de cleanup

---

## 4. Focos Técnicos Compartilhados

### 4.1 Segurança de Workspace e Containment

Três projetos demonstram foco simultâneo em segurança de workspace:

| Projeto | Foco | Issue/PR |
|---------|------|----------|
| **NanoBot** | Path traversal em shell guard; bind de validação a file handles | #4594, #4987 (p0, conflict) |
| **IronClaw** | Workspace overlap validation no Windows | #6590 |
| **ZeroClaw** | Landlock sandbox restringindo o próprio daemon | #9204 |

**Implicação:** A tendência é consolidar validação de workspace em nível de kernel/sandbox, não apenas aplicação.

### 4.2 Estabilidade Multi-Plataforma (Windows)

```
NanoBot:    Testes falham com `python` vs `python3` (#5062)
Hermes:     Console flashes em subprocessos Windows (#62734)
IronClaw:   Workspace overlap no Windows serve (#6590)
CoPaw:      PATH concatenation quebrado (#6239); multi-line PowerShell (#6406)
ZeroClaw:   Desktop installer falha com TaskDialogIndirect (#9290)
```

**Implicação:** A base Windows está crescendo em todos os projetos, mas testes E2E automatizados para Windows são insuficientes. Recomenda-se investimento em CI/CD cross-platform.

### 4.3 Memória Persistente e Recuperação de Contexto

```
Hermes Agent:  Múltiplas issues sobre Hindsight (recall síncrono, retain guidelines)
CoPaw:        Recovery guidance em MEMORY.md (#6351); reranker para ReMe (#6398)
ZeroClaw:     SOUL.md/AGENTS.md change history (#3672); schema-validated tool calls (#4760)
NanoBot:      Length recovery perde segmentos (#5051 — fix em #5056)
```

**Implicação:** A próxima fronteira é memória de longo prazo com recuperação determinística e search semântico (rerankers).

### 4.4 Atualização de Dependências e Segurança CI/CD

| Projeto | PRs de Dependências | Status |
|---------|---------------------|--------|
| PicoClaw | 10 PRs (Go, GitHub Actions, AWS SDK) | Em batch, recomenda-se consolidação |
| IronClaw | 30+ deps (async-trait, thiserror, uuid, tokio) | Em progresso |
| ZeroClaw | npm audit failures (#9235 — 3 high/critical) | ⚠️ Requer triagem urgente |

---

## 5. Análise de Diferenciação

### 5.1 Por Público-Alvo

| Projeto | Público Primário | Arquitetura de Deploy |
|---------|-----------------|----------------------|
| **NanoBot** | Desenvolvedores e usuários avançados com necessidade de isolamento forte | Self-hosted, Telegram, Feishu |
| **Hermes Agent** | Equipes com infraestrutura existente (Slack, Discord) | Desktop-first, gateway centralizado |
| **IronClaw** | Desenvolvedores que priorizam confiabilidade hermética | Cloud-hosted readiness, Rust-first |
| **CoPaw** | Usuários de NAS/Docker, automação de desktop | Container-native, Tauri desktop |
| **ZeroClaw** | Operadores de múltiplos canais (Telegram, Discord, WeChat, Matrix) | Daemon-first, PostgreSQL backend |
| **PicoClaw** | Usuários de hardware (NanoKVM, KVM over IP) | Embedded/single-purpose agent |

### 5.2 Por Diferenciação Técnica

| Projeto | Diferenciador Principal | Linha Técnica |
|---------|------------------------|---------------|
| **NanoBot** | Exec engine com containment granular | Shell guard, workspace restrictions |
| **Hermes Agent** | Mix-of-Agents (MoA) e plugins de memória Hindsight | Subagentes assíncronos, recall |
| **IronClaw** | 100% coverage hermético de capabilities | 123/123 capacidades testadas deterministicamente |
| **CoPaw** | Browser unificado SDK + reranker para memória vetorial | Multi-backend automation |
| **ZeroClaw** | Multi-canal (6+ plataformas) + A2A protocol readiness | Interoperabilidade, PostgreSQL-first |
| **PicoClaw** | Remote WebSocket agent mode | Arquitetura distribuída mínima |

### 5.3 Por Estágio de Maturidade

```
[CONSOLIDAÇÃO]     IronClaw — feature freeze para v1, cobertura de testes como diferencial
[ESTABILIZAÇÃO]    NanoBot, PicoClaw — alto volume de bugfixes antes de release
[EXPERIMENTAÇÃO]   CoPaw — v2.0 em beta com regressões conhecidas
[INTEROPERABILIDADE] ZeroClaw — preparando v0.9.0 com A2A e multi-agent
[MATURIDADE]       Hermes Agent — sem P0/P1, focado em UX e integrações
[INATIVO]          NullClaw — nenhum sinal de vida
```

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração

| Projeto | PRs/Dia | Tempo Médio de Resposta | Issues >30d Sem Resposta |
|---------|---------|------------------------|-------------------------|
| **NanoBot** | ~30 merged | <24h (p0/p1) | 0 documentada |
| **IronClaw** | ~10 merged | <48h | 1 (DeepSeek bug, ~45d) |
| **CoPaw** | ~21 merged | Variable | 0 documentada |
| **Hermes Agent** | ~4 merged | Variable | **6 issues** (Hindsight, Slack, opencode) |
| **ZeroClaw** | ~4 merged | Variable | 0 documentada |
| **PicoClaw** | ~7 merged | <48h | 1 (NanoKVM bug, ~24d) |

**🏆 Líder em velocidade:** NanoBot — 30 PRs merged em 24h com ciclo de segurança <24h.

### 6.2 Patterns de Maturidade

**Projetos em consolidação de qualidade (IronClaw):**
- Foco em cobertura hermética de testes
- Feature freeze explícito
- Priorização de bugs críticos sobre features

**Projetos em iteração rápida (NanoBot, CoPaw):**
- Volume alto de PRs com merge rápido
- Bugs críticos com correções no mesmo dia
- Regressões aceitas como trade-off de velocidade

**Projetos em estagnação de comunidade (Hermes Agent):**
- 6 issues >30d sem resposta
- Hindsight plugin com 4+ issues acumuladas desde março
- Falta de ownership definido para subsystems

### 6.3 Saúde Relativa

| Projeto | Score | Justificativa |
|---------|-------|---------------|
| **IronClaw** | 9.0/10 | 123/123 testes herméticos, zero P0/P1, v1-launch checklist ativa |
| **NanoBot** | 8.5/10 | Volume excelente, mas 2 PRs p0 com conflitos |
| **PicoClaw** | 8.0/10 | Ativo, mas baixa comunidade e 1 bug stale |
| **CoPaw** | 6.5/10 | v2.0 com regressão de performance conhecida |
| **ZeroClaw** | 6.0/10 | 2 bugs S0 (perda de mensagens), npm audit failures |
| **Hermes Agent** | 5.5/10 | Backlog abandonado, sem P0 mas com 6 issues >30d |
| **NullClaw** | 1.0/10 | Completamente inativo |

---

## 7. Sinais de Tendência

### 7.1 Tendências Extraídas do Feedback da Comunidade

| Tendência | Evidência | Projetos |
|-----------|-----------|----------|
| **Adoção Windows em crescimento** | Múltiplas issues Windows em todos os projetos | NanoBot, Hermes, IronClaw, CoPaw, ZeroClaw |
| **Demanda por modelos locais/privacidade** | Alternância dinâmicas entre llamacpp e APIs cloud (#4253) | NanoBot |
| **Multi-canal como expectativa** | 6+ plataformas suportadas em ZeroClaw; integrações Telegram/Discord/WeChat generalizadas | ZeroClaw, Hermes |
| **Interoperabilidade A2A** | Issue #3566 com 7 👍 em ZeroClaw; roadmap v0.9.0 | ZeroClaw |
| **Memory como diferenciador** | Rerankers (CoPaw), Hindsight (Hermes), ReMe (CoPaw), schema-validated memory (ZeroClaw) | Hermes, CoPaw, ZeroClaw |
| **Self-hosted em NAS/Docker** | Hot reload Docker (#6344), HDD performance (#6380) | CoPaw |
| **Segurança como prioridade** | 4+ correções de workspace containment | NanoBot, IronClaw, ZeroClaw |

### 7.2 Implicações Estratégicas

1. **Windows-first CI/CD necessário:** A ausência de testes E2E automatizados para Windows é um debt técnico presente em todos os projetos. Investir em infraestrutura de testes cross-platform será diferenciador competitivo.

2. **Local-first não é niche:** O issue #4253 (NanoBot) e #5287 (ZeroClaw) demonstram demanda real por alternância entre modelos cloud e locais. Funcionalidades de privacy/speed trade-off por conversation/task serão esperado.

3. **A2A protocol como direção:** O Agent2Agent protocol da Linux Foundation está gaining traction. ZeroClaw está posicionado para ser o primeiro projeto a implementar nativamente.

4. **Performance regressions are blocking adoption:** A regressão de ~2s no CoPaw v2.0 (#6307) demonstra que upgrades maiores precisam de benchmark gates antes de release.

5. **Multi-canal converge para 6-8 plataformas:** ZeroClaw suporta Telegram, Discord, WeChat, Matrix, Slack, Email, etc. Esta expansão de canais é tendência, não exceção.

### 7.3 Recomendações para Decisores

| Audiência | Recomendação |
|-----------|-------------|
| **Desenvolvedores** | Contribuir para NanoBot (velocidade de merge) ou IronClaw (qualidade de código) |
| **Empresas** | Avaliar ZeroClaw para multi-canal, IronClaw para confiabilidade, CoPaw para Docker/NAS |
| **DevOps** | Aguardar CoPaw v2.0.1+ para evitar regressão; contribuir com hot reload Docker |
| **Segurança** | Priorizar NanoBot para review de código de containment; monitorar ZeroClaw npm audit |
| **Comunidade** | Resgatar Hermes Agent (6 issues abandonadas) ou CoPaw (regressão v2.0) |

---

*Relatório compilado em 2026-07-24. Fontes: GitHub APIs dos projetos HKUDS/nanobot, NousResearch/hermes-agent, sipeed/picoclaw, nearai/ironclaw, agentscope-ai/CoPaw, zeroclaw-labs/zeroclaw.*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-07-24

---

## 1. Panorama do Dia

O NanoBot demonstra **altíssima atividade** em 24 de julho de 2026, com **46 PRs** atualizados (30 merged/closed, 16 open) e **8 issues** processadas. O foco principal concentra-se em **correções de segurança (p0-p1)**, melhorias na WebUI e refinamentos em ferramentas de execução e workspaces. A equipe de manutenção demonstra velocidade notável no ciclo de merge, com pelo menos **7 PRs p0/p1 fechados no mesmo dia** de sua abertura. Não há releases novas, indicando que o projeto está em fase intensiva de stabilização antes de um próximo lançamento.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

O projeto não publicou novas versões. Dado o volume de correções de bugs e features em progresso,推测 uma release está sendo preparada em breve.

---

## 3. Progresso do Projeto

### PRs Merged/Closed Relevantes

| # | Título | Prioridade | Autor | Impacto |
|---|--------|------------|-------|---------|
| [#5061](https://github.com/HKUDS/nanobot/pull/5061) | `feat(webui): simplify model preset settings` | p1 | chengyongru | Refatoração completa do sistema de presets de modelo — substitui configuração "current" por presets reutilizáveis e ordem explícita de chamada |
| [#5065](https://github.com/HKUDS/nanobot/pull/5065) | `fix(webui): allow media directory access when restrictToWorkspace is enabled` | p1 | cms19859230182-lang | Corrige preview de arquivos no diretório media quando workspace restriction está ativo |
| [#4889](https://github.com/HKUDS/nanobot/pull/4889) | `fix(security): authorize destructive priority commands` | p1 | hamb1y | Adiciona allowlist `channels.admin_senders` para comandos destrutivos; protege `/restart` e `/stop` |
| [#4594](https://github.com/HKUDS/nanobot/pull/4594) | `fix(exec): extract absolute paths after equals sign in shell guard` | p1 | axelray-dev | Fecha falha de segurança onde `curl --output=/etc/passwd` burlava containment |
| [#5055](https://github.com/HKUDS/nanobot/pull/5055) | `fix(telegram): advance markdown split on long single-line fences` | p1 | santhreal | Corrige hang em respostas Telegram com code blocks longos |
| [#5066](https://github.com/HKUDS/nanobot/pull/5066) | `fix(exec): retain stale sessions after cleanup failure` | p1 | KDB-Wind | Garante retry de cleanup em sessões; remove sessões stales apenas após término do processo |
| [#5068](https://github.com/HKUDS/nanobot/pull/5068) | `fix(session): tolerate files removed during listing` | p1 | KDB-Wind | Previne crash em `list_sessions()` quando arquivos são removidos entre enumeração e abertura |
| [#5067](https://github.com/HKUDS/nanobot/pull/5067) | `fix(webui): keep composer model badge in sync` | p1 | Re-bin | Corrige race condition onde badge mostrava modelo desatualizado após mudança de Settings |
| [#4901](https://github.com/HKUDS/nanobot/pull/4901) | `fix(webui): replace transcript JSON round-trip copies with deepcopy` | p2 | wingkwong | Otimização de performance — substitui `json.loads(json.dumps())` por `copy.deepcopy()` |
| [#5058](https://github.com/HKUDS/nanobot/pull/5058) | `style(webui): unify settings and dark mode surfaces` | p2 | chengyongru | Unificação visual do WebUI com paleta consistente para light/dark modes |

**Destaque:** O PR [#5061](https://github.com/HKUDS/nanobot/pull/5061) representa a maior mudança user-facing do dia — simplifica radicalmente a UX de configuração de modelos.

---

## 4. Temas Quentes da Comunidade

### Issues com Mais Comentários/Reações

| # | Título | Status | Comentários | Autor | Tema Central |
|---|--------|--------|-------------|-------|--------------|
| [#4253](https://github.com/HKUDS/nanobot/issues/4253) | `support overriding model per conversation` | ✅ CLOSED | 6 | rombert | **Switch dinâmico entre presets de modelo** (openrouter vs. llamacpp local) baseado em privacidade/time-sensitivity |
| [#5059](https://github.com/HKUDS/nanobot/issues/5059) | `都支持各个浏览器的什么版本` (browser compatibility) | ✅ CLOSED | 4 | qteamo | **Suporte a versões de navegadores** — usuário solicita lista de browsers suportados |

### Análise

- **#4253 (closed):** Feature request com forte demanda prática — alternar entre modelos com diferentes trade-offs (velocidade/privacidade/custo) é necessidade real. O usuário trabalha com 2 presets: openrouter (rápido, capaz) vs. llamacpp local (privado, lento, barato). A issue foi fechada mas não há PR correspondente visível, sugerindo que a feature pode já existir ou está planejada.

- **#5059 (closed):** Issue em chinês solicitando documentação sobre compatibilidade de navegadores. Fecha rapidamente, indicando可能是 duplicata ou já documentado.

- **#4858 (open):** Refatoração p2 do lifecycle MCP fora de `AgentLoop` — tema técnico relevante para extensibilidade futura.

---

## 5. Bugs e Estabilidade

### Issues Abertas (Bugs)

| # | Severidade | Título | Impacto |
|---|------------|--------|---------|
| [#5028](https://github.com/HKUDS/nanobot/issues/5028) | bug | `media路径和workspace限制冲突` | Arquivos de mídia do Feishu não acessíveis mesmo com workspace restriction configurado |
| [#5051](https://github.com/HKUDS/nanobot/issues/5051) | bug | `AgentRunner length recovery: final_content loses earlier segments` | Em nanobot-ai==0.2.2, recovery de token limit perde segmentos anteriores |
| [#5062](https://github.com/HKUDS/nanobot/issues/5062) | test | `test_workspace_scope uses 'python' command unavailable on Linux` | Testes falham em Ubuntu/Debian onde só `python3` existe |

### PRs Abertos (Correções Bug em Progresso)

| # | Prioridade | Título | Status |
|---|------------|--------|--------|
| [#4987](https://github.com/HKUDS/nanobot/pull/4987) | **p0** | `fix(filesystem): bind workspace checks to opened files` | ⚠️ COM CONFLICT — Protege contra TOCTOU em operações de arquivo |
| [#5056](https://github.com/HKUDS/nanobot/pull/5056) | p1 | `fix(agent): preserve output across length recovery` | Resolve #5051 — acumula segmentos após `finish_reason="length"` |
| [#5042](https://github.com/HKUDS/nanobot/pull/5042) | p1 | `fix(cron): default null schedule when loading jobs.json` | ⚠️ COM CONFLICT — Previne TypeError que quarantinava todo cron store |
| [#5057](https://github.com/HKUDS/nanobot/pull/5057) | p1 | `fix(mcp): normalize local schema refs` | Resolve problema com JSON Schema refs incompatíveis com Kimi/Moonshot |

### Avaliação de Estabilidade

**🔴 Alerta:** O PR [#4987](https://github.com/HKUDS/nanobot/pull/4987) está marcado como **p0** (prioridade crítica) e apresenta conflitos. Trata-se de bind de validação workspace a file handles abertos — uma correção de segurança fundamental. A equipe deve priorizar a resolução do conflito.

**🟡 Atenção:** [#5042](https://github.com/HKUDS/nanobot/pull/5042) também tem conflitos e pode causar perda de jobs do cron se mergeado incorretamente.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| # | Tipo | Título | Sinais de Roadmap |
|---|------|--------|-------------------|
| [#4253](https://github.com/HKUDS/nanobot/issues/4253) | enhancement | `support overriding model per conversation` | Fortemente desejado — usuários precisam alternar modelos por隐私/velocidade |
| [#5059](https://github.com/HKUDS/nanobot/issues/5059) | enhancement | `都支持各个浏览器的什么版本` | Solicita documentação de compatibilidade de browsers |
| [#4858](https://github.com/HKUDS/nanobot/issues/4858) | refactor | `Refactor dynamic tool provider lifecycle out of AgentLoop` | Preparação para melhor extensibilidade de providers (MCP, etc.) |

### Avanços em Features

| # | Título | Progresso |
|---|--------|------------|
| [#5061](https://github.com/HKUDS/nanobot/pull/5061) | `simplify model preset settings` | **MERGED** — Sistema de presets simplificado e pronto |
| [#5017](https://github.com/HKUDS/nanobot/pull/5017) | `indicate per-turn model fallback` | **MERGED** — WebUI agora indica quando fallback está ativo |

### Implicações para Roadmap

1. **Modelo por conversa:** O closure de #4253 sem PR correspondente pode indicar que a feature já existe parcialmente ou está em desenvolvimento interno. Vale investigar.
2. **Melhorias WebUI:** A refatoração de presets (#5061) e indicadores de fallback (#5017) sugerem foco em UX/UI para próximas versões.
3. **MCP Extensibility:** A refatoração planejada em #4858 indica preparação para suportar mais provedores de tools dinamicamente.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Dor | Frequência | Issue | Severidade |
|-----|------------|-------|------------|
| Conflito entre media paths e workspace restrictions | 1 usuário | [#5028](https://github.com/HKUDS/nanobot/issues/5028) | Funcional |
| Perda de segmentos em length recovery | 1 usuário | [#5051](https://github.com/HKUDS/nanobot/issues/5051) | Crítica |
| Compatibilidade de navegadores não documentada | 1 usuário | [#5059](https://github.com/HKUDS/nanobot/issues/5059) | Documentação |
| Falha de testes em sistemas Linux sem `python` | CI/CD | [#5062](https://github.com/HKUDS/nanobot/issues/5062) | Teste |

### Cenários de Uso Emergent

1. **Workflow híbrido modelo local/remoto:** Usuários alternam entre llamacpp local (privacidade) e APIs cloud (velocidade) depending on task — indica necessidade de granularidade por conversation/task.

2. **Integração com plataformas asiáticas:** Issues de usuários do Feishu (Lark) demonstram adoção significativa na China — mídia e canais asiáticos são pontos de integração importantes.

3. **Ambientes Linux restritivos:** Falha de testes com `python` vs `python3` indica que usuários rodam em ambientes Ubuntu/Debian minimal — compatibilidade cross-distro é importante.

### Satisfação Geral

**🟢 Positiva** — Volume alto de PRs merged demonstra equipe ativa. Bugs críticos (#5051, #5028) têm correções em aberto rapidamente. A refatoração de presets (#5061) mostra atenção a feedback de UX.

---

## 8. Backlog que Merece Atenção

### Issues sem Resposta/Estagnadas

| # | Título | Idade | Status | Prioridade |
|---|--------|-------|--------|------------|
| [#4858](https://github.com/HKUDS/nanobot/issues/4858) | `Refactor dynamic tool provider lifecycle out of AgentLoop` | ~15 dias | OPEN, 1 comentário | p2 |

### PRs com Conflitos (Risco de Stagnação)

| # | Título | Prioridade | Risco |
|---|--------|------------|-------|
| [#4987](https://github.com/HKUDS/nanobot/pull/4987) | `fix(filesystem): bind workspace checks to opened files` | **p0** | 🔴 Crítico — segurança |
| [#5042](https://github.com/HKUDS/nanobot/pull/5042) | `fix(cron): default null schedule when loading jobs.json` | p1 | 🟠 Alto — pode perder dados |

### Recomendações

1. **🔴 Prioridade máxima:** Resolver conflitos em [#4987](https://github.com/HKUDS/nanobot/pull/4987) — é p0 e envolve segurança de workspace.

2. **🟠 Alta prioridade:** Revisar [#5042](https://github.com/HKUDS/nanobot/pull/5042) antes que cause regressão no cron.

3. **🟡 Monitorar:** [#4858](https://github.com/HKUDS/nanobot/issues/4858) — refatoração MCP importante para extensibilidade mas estagnou com apenas 1 comentário.

4. **🟢 Manter:** Ritmo de merges excelente — 30 PRs em 24h demonstra здоровье da equipe.

---

## Métricas Resumidas do Dia

| Métrica | Valor |
|---------|-------|
| Issues ativas | 8 (4 open, 4 closed) |
| PRs atualizados | 46 (16 open, 30 merged/closed) |
| Releases | 0 |
| PRs p0/p1 merged | 8 |
| PRs com conflitos | 2 |
| Bugs abertos | 3 |
| Features merged | 2 webui, 1 security, 1 exec |

---

*Relatório gerado em 2026-07-24. Dados: GitHub HKUDS/nanobot.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-07-24

## 1. Panorama do Dia

O projeto Hermes Agent apresenta **alta atividade comunitária** em 24 de julho de 2026, com 50 issues e 50 PRs atualizados nas últimas 24 horas. A taxa de resolução de issues está positiva (26 fechadas vs 24 abertas), indicando maturidade no fluxo de trabalho. **Não houve lançamentos de novas versões**, sinalizando que a equipe pode estar preparando uma release futura. Observa-se forte foco em **estabilidade multiplataforma** (especialmente Windows), melhorias no desktop Electron e refinamento de plugins de memória. A maioria dos bugs reportados hoje é de severidade P2/P3, sem P0 ou P1 críticas abertas. O ecossistema demonstra vitalidade com contribuições distribuídas entre features, bugfixes e melhorias de UX.

---

## 2. Lançamentos

### Nenhuma release registrada nas últimas 24h

O projeto está em modo de desenvolvimento ativo sem publicação de versões no período analisado. Isso é consistente com o alto volume de PRs abertos (46) aguardando revisão e merge.

---

## 3. Progresso do Projeto

### PRs Fechados/Merged (4 total)

| PR | Descrição | Impacto |
|---|---|---|
| [#70180](https://github.com/NousResearch/hermes-agent/pull/70180) | `fix(gateway): report truthful async roster capacity` | Corrige problema de capacidade assíncrona em subagentes, melhorando visibilidade operacional |
| [#69512](https://github.com/NousResearch/hermes-agent/pull/69512) | `fix(anthropic): sanitize empty/whitespace-only text blocks` | Previne HTTP 400 permanente após compressão de contexto com blocos vazios |
| [#42525](https://github.com/NousResearch/hermes-agent/pull/42525) | `feat(desktop): allow changing workspace/directory from UI` | Permite alteração de workspace diretamente na interface Desktop, eliminando necessidade de edição manual de config |
| [#8552](https://github.com/NousResearch/hermes-agent/pull/8552) | Slack: usa Block Kit markdown em vez de `mrkdwn` legado | Melhora renderização de mensagens Slack com suporte a tabelas e formatação moderna |

### Destaque de Avanços

O PR [#42525](https://github.com/NousResearch/hermes-agent/pull/42525) representa uma **vitória de UX significativa**, permitindo que usuários do Desktop alterem o diretório de trabalho sem reiniciar o gateway. Este era um pedido recorrente da comunidade.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários + reações)

| Issue | Título | Comentários | 👍 | Categoria |
|---|---|---|---|---|
| [#8552](https://github.com/NousResearch/hermes-agent/issues/8552) | Slack Block Kit vs mrkdwn legado | 8 | 9 | Feature/Melhoria |
| [#5820](https://github.com/NousResearch/hermes-agent/issues/5820) | Sync recall para turn atual (honcho/hindsight) | 7 | 0 | Feature/Memória |
| [#63679](https://github.com/NousResearch/hermes-agent/issues/63679) | Desktop: mensagens duplicadas após update | 7 | 0 | Bug/Desktop |
| [#58437](https://github.com/NousResearch/hermes-agent/issues/58437) | MoA `_collect_stream` dropa tool_calls em quiet mode | 6 | 0 | Bug/Agent |
| [#5237](https://github.com/NousResearch/hermes-agent/issues/5237) | Hindsight: seguir retain guidelines corretamente | 4 | 0 | Feature/Memória |
| [#15575](https://github.com/NousResearch/hermes-agent/issues/15575) | API não funciona com opencode zen | 2 | 4 | Bug/Integração |

### Análise de Demandas

1. **Plataforma Slack é destaque**: A issue [#8552](https://github.com/NousResearch/hermes-agent/issues/8552) com 9 upvotes demonstra forte interesse em modernizar o formato de mensagens Slack para Block Kit, suportando markdown tables e formatação avançada.

2. **Plugins de Memória**: Múltiplas issues (#[5820](https://github.com/NousResearch/hermes-agent/issues/5820), #[5237](https://github.com/NousResearch/hermes-agent/issues/5237), #[2765](https://github.com/NousResearch/hermes-agent/issues/2765)) indicam que o sistema de memória Hindsight precisa de refinamentos — especialmente em recall síncrono e proper retention de conversas.

3. **Desktop App em Foco**: 3 das top issues envolvem o Hermes Desktop, sugerindo que a base de usuários desktop está crescendo e reportando problemas de estabilidade.

---

## 5. Bugs e Estabilidade

### Por Severidade

#### P0/P1 — Críticas (0 abertas)
Nenhuma issue P0/P1 aberta. Este é um indicador saudável.

#### P2 — Altas (9 issues abertas)

| Issue | Título | Plataforma | Link |
|---|---|---|---|
| #58437 | MoA dropa tool_calls em quiet mode | Agent | [Link](https://github.com/NousResearch/hermes-agent/issues/58437) |
| #62734 | Windows: probes spawn console windows visíveis | Windows | [Link](https://github.com/NousResearch/hermes-agent/issues/62734) |
| #39365 | Desktop mostra erro enganoso de API key missing | Desktop/macOS | [Link](https://github.com/NousResearch/hermes-agent/issues/39365) |
| #70294 | Cron: delegate_task results são silenciosamente descartados | Cron | [Link](https://github.com/NousResearch/hermes-agent/issues/70294) |
| #70253 | Imagens Telegram descartadas durante turn ocupado | Telegram | [Link](https://github.com/NousResearch/hermes-agent/issues/70253) |
| #70206 | Desktop crash com duplicate key toolCallId | Desktop | [Link](https://github.com/NousResearch/hermes-agent/issues/70206) |
| #70268 | Teste falha por falta de API server key válido | Gateway | [Link](https://github.com/NousResearch/hermes-agent/issues/70268) |
| #70258 | Delegações completadas deixam TUI runtimes órfãos | TUI/Dashboard | [Link](https://github.com/NousResearch/hermes-agent/issues/70258) |

#### P3 — Médias (destaques)

| Issue | Título | Link |
|---|---|---|
| #63679 | Mensagens duplas após update no Desktop | [Link](https://github.com/NousResearch/hermes-agent/issues/63679) |
| #44802 | Discord allowlist rewrite causa lockout do operador | [Link](https://github.com/NousResearch/hermes-agent/issues/44802) |
| #2765 | Hindsight registra 0 tools silenciosamente quando API URL ausente | [Link](https://github.com/NousResearch/hermes-agent/issues/2765) |

### Padrões de Bugs Identificados

1. **Windows Console Flash**: 4+ issues relacionadas a janelas de console visíveis durante subprocessos — indica dívida técnica acumulada em gerenciamento de processos Windows.

2. **Desktop Renderer Instabilidade**: Crash ao carregar sessões grandes/comprimidas e mensagens duplicadas sugerem necessidade de hardening no renderer Electron.

3. **Plataforma Telegram**: Problemas recorrentes com imagens (descarte durante turns ocupados e streaming draft).

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em Demandadas

| Feature | Descrição | Issue | Link |
|---|---|---|---|
| Slack Block Kit | Substituir mrkdwn legado por formato moderno | #8552 | [Link](https://github.com/NousResearch/hermes-agent/issues/8552) |
| Sync Recall | Permitir recall síncrono para turn atual | #5820 | [Link](https://github.com/NousResearch/hermes-agent/issues/5820) |
| Hindsight Guidelines | Seguir best practices de retain | #5237 | [Link](https://github.com/NousResearch/hermes-agent/issues/5237) |
| Version Display | Derivar versões de release tags | #70260 (PR) | [Link](https://github.com/NousResearch/hermes-agent/pull/70260) |
| Compress Indicator | Mostrar indicador durante /compress | #62626 (PR) | [Link](https://github.com/NousResearch/hermes-agent/pull/62626) |
| Messaging Toolset | Restaurar opt-in de tools de mensagens | #70304 (PR) | [Link](https://github.com/NousResearch/hermes-agent/pull/70304) |
| Memory Entropy | Lidar com degradação de dados táticos por projeto | #59796 | [Link](https://github.com/NousResearch/hermes-agent/issues/59796) |

### PRs de Features Abertos (visíveis para roadmap)

- [#62626](https://github.com/NousResearch/hermes-agent/pull/62626): Indicador visual durante `/compress` — resolve UX problemático
- [#70260](https://github.com/NousResearch/hermes-agent/pull/70260): Sistema de versionamento consistente entre CLI, TUI, Desktop e Nix
- [#55170](https://github.com/NousResearch/hermes-agent/pull/55170): Melhor gestão de fallback de modelos no dashboard web
- [#70304](https://github.com/NousResearch/hermes-agent/pull/70304): Ferramentas de messaging com opt-in explícito

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Reportadas

| Dor | Ocorrências | Impacto |
|---|---|---|
| **Windows: Console flashes durante subprocessos** | 4+ issues | Experiência quebrada em uso background/cron |
| **Desktop: Instabilidade com sessões grandes** | 3 issues | Produtividade afetada |
| **Mensagens duplicadas no Desktop** | 1 issue (7 comentários) | Confusão para usuários |
| **Erros enganosos de autenticação** | 1 issue | Troubleshooting frustrante |
| **Discord lockout por allowlist vazio** | 1 issue | Operadores bloqueados |

### Cenários de Uso Observados

1. **Uso em Background/Cron**: Usuários que rodam Hermes via cron relatam frustração com flashes de console e resultados de delegação silenciosamente perdidos.

2. **Ambiente Windows Desktop**: A base Windows parece significativa, com problemas recorrentes de subprocessos e janelas de console.

3. **Integração Slack**: Organizações usando Slack como canal principal desejam formatação mais rica (Block Kit).

4. **Memória Persistente**: Usuários de longa data reportam "experience debt" — degradação de qualidade por acúmulo não-pruned de dados.

### Satisfação/Insatisfação

- **Positivo**: Feature de workspace no Desktop ([#42525](https://github.com/NousResearch/hermes-agent/issues/42525) merged) resolving dor antiga
- **Positivo**: Suporte a Block Kit no Slack trending bem (9 upvotes)
- **Negativo**: Padrão de bugs Windows indica possível falta de testes automatizados E2E na plataforma
- **Neutro**: Nenhuma queixa sobre modelos ou providers de IA

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta > 30 dias

| Issue | Título | Criado | Link |
|---|---|---|---|
| #2765 | Hindsight registra 0 tools silenciosamente | 2026-03-24 | [Link](https://github.com/NousResearch/hermes-agent/issues/2765) |
| #5820 | Sync recall para turn atual | 2026-04-07 | [Link](https://github.com/NousResearch/hermes-agent/issues/5820) |
| #5237 | Hindsight retain guidelines | 2026-04-05 | [Link](https://github.com/NousResearch/hermes-agent/issues/5237) |
| #6572 | Slack: Unhandled request warnings | 2026-04-09 | [Link](https://github.com/NousResearch/hermes-agent/issues/6572) |
| #7718 | Hindsight local_embedded requiere hindsight-all | 2026-04-11 | [Link](https://github.com/NousResearch/hermes-agent/issues/7718) |
| #15575 | API não funciona com opencode zen | 2026-04-25 | [Link](https://github.com/NousResearch/hermes-agent/issues/15575) |

### Recomendações

1. **Priorize Issues de Memória (#2765, #5820, #5237, #7718)**: 4+ issues sobre Hindsight acumuladas desde março/maio sugerem necessidade de triagem e ownership definido para plugins de memória.

2. **Resolva Padrão Windows Console**: 4+ PRs sobre subprocessos Windows ([#45409](https://github.com/NousResearch/hermes-agent/issues/45409), [#56503](https://github.com/NousResearch/hermes-agent/issues/56503), [#68457](https://github.com/NousResearch/hermes-agent/issues/68457), [#62734](https://github.com/NousResearch/hermes-agent/issues/62734)) indicam dívida técnica. Recomenda-se PR unificado ou solução centralizada com `CREATE_NO_WINDOW`.

3. **Triage #15575**: Integração com opencode zen tem 4 upvotes mas apenas 2 comentários — pode indicar interesse latente que precisa de validação.

4. **Hidratação de Backlog Desktop**: Issues como #70206 e #63679 com poucos dias já mostram problemas de estabilidade — garanta testes de carga para sessões comprimidas.

---

## Métricas Resumidas (2026-07-24)

| Indicador | Valor | Status |
|---|---|---|
| Issues ativas (24h) | 50 | 🟢 Alta |
| Issues abertas/fechadas ratio | 24/26 | 🟢 Positivo |
| PRs abertos | 46 | 🟡 Muitos em revisão |
| PRs merged (24h) | 4 | 🟢 Fluxo mantido |
| Novas releases | 0 | ⚪ Em desenvolvimento |
| P0/P1 bugs | 0 | 🟢 Saúde crítica OK |
| P2 bugs abertos | 9 | 🟡 Requerem atenção |
| Issues >30d sem resposta | 6 | 🔴 Backlog abandonado? |

---

*Relatório gerado automaticamente com base em dados GitHub de 2026-07-24. Todas as informações referenciam [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent).*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-07-24

---

## 1. Panorama do Dia

O projeto PicoClaw apresenta **alta atividade de manutenção** nas últimas 24 horas, com 15 PRs atualizados e nenhuma release nova. A equipe está concentrada em duas frentes principais: (1) **atualizações massivas de dependências** — todas as 10 PRs de dependencies abertas ou fechadas visam bibliotecas Go, GitHub Actions e AWS SDK — e (2) **consolidação de funcionalidades** com o merge de 3 PRs que abordam o modo WebSocket remoto, correção de extração de mídia inline e atualização de segurança do Go. A atividade de Issues está moderada, com 2 novas movimentações. O projeto demonstra saúde operacional estável, sem sinais de instabilidade crítica ou regressões relevantes reportadas no período.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24 horas.**

O projeto não publicou novas versões entre 2026-07-23 e 2026-07-24. Esse padrão pode indicar que a equipe está em ciclo de preparo para uma futura release تجمعية ( aggregating ), acumulando correções e features em branch.

---

## 3. Progresso do Projeto

### PRs merged/fechados hoje (7)

| # | Título | Impacto | Link |
|---|---|---|---|
| **#3118** | Add remote Pico WebSocket mode to picoclaw agent | ⭐ **Alto** — Adiciona modo remoto ao comando `picoclaw agent` via `picoclaw agent --remote ws://...` sem alterar comportamento local. Habilita arquiteturas distribuídas. | [PR #3118](https://github.com/sipeed/picoclaw/pull/3118) |
| **#3115** | Fix inline data URL media extraction for generic tool output | 🐞 **Crítico** — Corrige corrupção do histórico de sessão onde `data:image/...;base64,...` em texto de ferramentas era tratado incorretamente como mídia real. Afeta `read_file`, `exec` e ferramentas similares. | [PR #3115](https://github.com/sipeed/picoclaw/pull/3115) |
| **#3286** | fix: update Go and x/text for govulncheck | 🔒 **Segurança** — Atualiza Go e dependência `x/text` para corrigir vulnerabilidades detectadas pelo govulncheck. | [PR #3286](https://github.com/sipeed/picoclaw/pull/3286) |
| #3237 | build(deps): bump golang.org/x/sync 0.21.0 → 0.22.0 | Dependência Go — Semanticamente novo `semaphore: panic on negative weights` | [PR #3237](https://github.com/sipeed/picoclaw/pull/3237) |
| #3236 | build(deps): bump github.com/github/copilot-sdk/go 0.2.0 → 1.0.6 | Atualização de SDK | [PR #3236](https://github.com/sipeed/picoclaw/pull/3236) |
| #3238 | build(deps): bump aws-sdk-go-v2/config 1.32.25 → 1.32.29 | Atualização AWS SDK | [PR #3238](https://github.com/sipeed/picoclaw/pull/3238) |
| #3235 | build(deps): bump github.com/pion/rtp 1.10.2 → 1.10.3 | Atualização biblioteca RTP | [PR #3235](https://github.com/sipeed/picoclaw/pull/3235) |

### Destaque de progresso

**PR #3222 — Refatoração DeltaChat** (em andamento, não mergeado)
- Remoção de features legadas sem fallbacks e testes desatualizados
- Migração de lista de relays hardcoded para referência oficial
- Remoção de configuração de email por senha (segurança)
- Renomeação de `invite_link` → `join_invite_link` com novo campo `show_invite_link`
- Redução de ~200 LOC com nova documentação completa

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento

| # | Título | Comentários | Status | Link |
|---|---|---|---|---|
| **#3195** | [BUG] OpenAI GPT does not work on NanoKVM with default config | **4** | CLOSED (stale) | [Issue #3195](https://github.com/sipeed/picoclaw/issues/3195) |

**Análise da Issue #3195:**
- **Cenário:** Usuário tentou configurar PicoClaw em NanoKVM 2.4.0 com modelo gpt-5.4 seguindo a documentação oficial
- **Problema:** Todas as interações retornavam erro sem sucesso
- **Status:** Fechada como *stale*, indicando possivelmente falta de resposta da equipe ou replicação do problema
- **Sinal de documentação:** Sugere que a docs/docs/configuration/model-list pode estar desatualizada ou que há incompatibilidade não documentada com NanoKVM

### Análise de padrões de demandas

As Issues mais recentes **(2 total)** indicam:
1. **Problema de integração** com plataformas específicas (NanoKVM)
2. **Limitações de protocolo** — necessidade de tratamento de mensagens longas em IRC (limite de 512 bytes do IRCv3)

---

## 5. Bugs e Estabilidade

### Bugs reportados e correções

**Corrigido e mergeado:**
- ✅ **#3115 — Extração de mídia inline corrupta**: Ferramentas como `read_file` e `exec` retornavam strings `data:image/...;base64,...` em código/HTML que eram incorretamente interpretadas como anexos, corrompendo o histórico de sessão.

**Potencialmente em investigação:**
- ⚠️ **#3195 — GPT não funciona em NanoKVM**: Bug reportado há ~24 dias, fechado como stale. Recomenda-se reavaliação para confirmar se o problema foi resolvido indiretamente por outras mudanças.

### Atualizações de segurança
- ✅ **#3286** — Atualização de Go e `golang.org/x/text` via govulncheck: demonstra processo ativo de Varredura de vulnerabilidades.

**Classificação por severidade:**

| Severidade | Count | Status |
|---|---|---|
| 🔴 Crítica | 1 (#3115) | ✅ Corrigido |
| 🟡 Média | 1 (#3195) | ⚠️ Fechado stale |
| 🔒 Segurança | 1 (#3286) | ✅ Corrigido |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features abertas

| # | Título | Descrição | Potencial Impacto | Link |
|---|---|---|---|---|
| **#3287** | [Feature] Better support long messages in IRC | Tratamento de mensagens >512 bytes divididas automaticamente por clientes IRCv3 como mensagem única e coesa | 🔧 Suporte a protocolos legado | [Issue #3287](https://github.com/sipeed/picoclaw/issues/3287) |

**Análise #3287:**
- Cenário real: PicoClaw em ambiente IRC onde mensagens longas são automaticamente divididas
- Problema: O agente trata cada fragmento como mensagem separada, quebrando contexto
- Solução desejada: Reconstrução de mensagens divididas antes do processamento
- Relevância: Importante para adoção em servidores IRC legacy/educacionais

### Features em desenvolvimento (PRs abertos)

| # | Título | Descrição | Link |
|---|---|---|---|
| **#3200** | feat(models): add configurable default fallback chain | Interface para configurar chain de modelos com fallback, reordenamento e persistência via API | [PR #3200](https://github.com/sipeed/picoclaw/pull/3200) |
| **#3222** | refactor(deltachat): cleanup implementation | Modernização do módulo DeltaChat com documentação e remoção de features legadas | [PR #3222](https://github.com/sipeed/picoclaw/pull/3222) |

**Sinais de roadmap implícitos:**
1. Suporte a **infraestrutura distribuída/remote** (#3118)
2. **Resiliência de modelos** com fallback configurável (#3200)
3. **Suporte a mais protocolos** de comunicação (IRC #3287)
4. **Modernização de módulos** legados (DeltaChat #3222)

---

## 7. Resumo de Feedback dos Usuários

### Dores identificadas

| Dor | Issue | Severidade | Origem |
|---|---|---|---|
| **Integração quebrada com NanoKVM** | #3195 | 🟡 Média | Usuário que configurou seguindo documentação oficial |
| **Fragmentação de mensagens IRC** | #3287 | 🟡 Média | Usuário em ambiente IRCv3 real |
| **Corrupção de histórico de sessão** | #3115 (já corrigido) | 🔴 Alta | Descoberta via testes, afetava qualquer output com `data:` URLs |

### Cenários de uso observados

- **NanoKVM 2.4.0**: PicoClaw está sendo utilizado como parte do stack de gerenciamento remoto (KVM over IP)
- **IRC como canal de comunicação**: Usuários tentam integrar PicoClaw com protocolos de chat tradicionais
- **Agente autônomo com WebSocket remoto**: Habilita arquiteturas onde o agente roda em container/servidor separado da interface

### Indicadores de satisfação

- **6 de 15 PRs** fechados com merge indicando aceitação de contribuições
- Atualizações ativas de dependências demonstram **manutenção contínua**
- Atividade consistente de **5+ contributors** (dependabot + jp39, trufae, lc6464, imguoguo, rtadams89, superuser-does)

---

## 8. Backlog que Merece Atenção

### Items sem resposta há longo tempo

| # | Tipo | Título | Criado | Atualizado | Dias Inativo | Prioridade |
|---|---|---|---|---|---|---|
| **#3195** | Bug | OpenAI GPT does not work on NanoKVM with default config | 2026-06-30 | 2026-07-23 | ~24 dias | ⚠️ **Revisar** |
| #3118 | Feature | Add remote Pico WebSocket mode to picoclaw agent | 2026-06-12 | 2026-07-23 | ~41 dias | ✅ Closed |
| #3115 | Bug | Fix inline data URL media extraction | 2026-06-12 | 2026-07-23 | ~41 dias | ✅ Closed |

### Recomendações de ação

1. **[ALTA]** **Reavaliar Issue #3195** — Fechada como stale mas com 4 comentários indicando problema não resolvido. A equipe deve confirmar se a documentação está correta ou se há bug real na integração NanoKVM.

2. **[MÉDIA]** **Revisar Issue #3287** — Feature request legítima para suporte IRC, sem comentários ainda. Sugerir ao autor mais contexto sobre caso de uso.

3. **[MÉDIA]** **Acompanhar PR #3200** — Feature de fallback chain está aberta há 23 dias sem merge. Avaliar se há bloqueios técnicos ou de design.

4. **[MÉDIA]** **Consolidar PRs de dependências** — Há múltiplos PRs do dependabot abertos (#3263, #3262, #3291, #3290, #3289, #3288). Recomenda-se batch-merge para reduzir debt.

---

## Métricas Resumidas do Dia

| Indicador | Valor | Tendência |
|---|---|---|
| PRs atualizados | 15 | 🟢 Alta atividade |
| PRs mergeados/fechados | 7 | 🟢 Positivo |
| Features mergeadas | 2 | 🟢鸭子鸭子 |
| Bugs corrigidos | 2 | 🟢 Positivo |
| Atualizações segurança | 1 | 🟢 Positivo |
| Releases | 0 | ⚪ Neutro |
| Issues abertas | 1 | ⚪ Neutro |
| Issues fechadas | 1 | ⚪ Neutro |
| Atualizações dependências | 10 | 🟡 Needs attention |

**Veredicto geral:** Projeto em **bom estado de saúde**. Atividade alta de manutenção com foco em estabilidade e atualização de dependências. Atenção recomendada à Issue #3195 e consolidação dos PRs pendentes de dependências.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-07-24

## 1. Panorama do Dia

O IronClaw mantém um ritmo intenso de atividade com 33 issues e 50 PRs atualizados nas últimas 24h, indicando alta fermentação no desenvolvimento. Não houve novas releases, mas o foco continua na preparação para o v1, evidenciada por múltiplos itens na "v1-launch-checklist". A equipe está simultaneamente trabalhando em simplificação arquitetural do Reborn, melhorias de estabilidade operacional (OAuth, webhooks, rate limits) e expansão da cobertura de testes herméticos. A relação de PRs abertos/fechados (40/10) sugere que o pipeline de merge está saudável, com revisão ativa.

---

## 2. Lançamentos

**Nenhum release publicado nas últimas 24h.**

O último release documentado (#5598) foi preparado em 2026-07-03, contendo atualizações nos crates `ironclaw_common` (0.4.2 → 0.5.0, com breaking changes), `ironclaw_safety` (0.2.2 → 0.2.3) e `ironclaw_skills` (0.3.0 → 0.4.0, com breaking changes).

---

## 3. Progresso do Projeto

### PRs Merged/Closed (10 itens)

| PR | Título | Tamanho | Escopo |
|---|---|---|---|
| [#6588](https://github.com/nearai/ironclaw/pull/6588) | fix(ci): scope /benchmark suite pre-check | S | CI |
| [#6583](https://github.com/nearai/ironclaw/pull/6583) | Use shared product surface vocabulary | XL | Arquitetura |
| [#6580](https://github.com/nearai/ironclaw/pull/6580) | test(reborn): complete capability evidence | XS | Testes |
| [#6462](https://github.com/nearai/ironclaw/issues/6462) | Sidebar thread list does not load beyond first page | — | Bug fix (UI) |

### Destaques do Progresso:

- **#6583** ([PR](https://github.com/nearai/ironclaw/pull/6583)): Migra o vocabulário de comando/query/stream do product-surface para `ironclaw_host_api`, eliminando duplicação entre WebUI e consumidores OpenAI-compatíveis.

- **#6580** ([PR](https://github.com/nearai/ironclaw/pull/6580)): Fecha as últimas 4 capability waivers, alcançando **123/123 capacidades hermeticamente testadas** — marco significativo de qualidade.

- **#6389** ([Issue closed](https://github.com/nearai/ironclaw/issues/6389)): Collapse dos dois paths de runtime assembly (`build_local_runtime` e `build_production_shaped`) em `build_runtime(cfg)`, simplificando a fábrica de composition.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários)

| Issue | Título | Comentários | Tag |
|---|---|---|---|
| [#6389](https://github.com/nearai/ironclaw/issues/6389) | Phase 4: collapse build_runtime paths | 11 |CLOSED|
| [#6274](https://github.com/nearai/ironclaw/issues/6274) | Finish DeploymentConfig as main composition config | 5 | CLOSED |
| [#6284](https://github.com/nearai/ironclaw/issues/6284) | [epic] error-recoverability endgame | 4 | OPEN |
| [#6524](https://github.com/nearai/ironclaw/issues/6524) | [epic] Hermetic capability and journey testing platform | 3 | OPEN |

### Análise dos Temas

1. **Error Recoverability (#6284)** — Epic ambicioso focado em garantir que o modelo se recupere de 100% dos erros. Contrato definido: (a) run sobrevive, (b) modelo vê o erro, (c) contexto carrega causa + solução, (d) modelo recebe turno para agir. Este é um diferenciador estratégico de confiabilidade.

2. **Hermetic Testing Platform (#6524)** — Busca responder mecanicamente: "Cada capability e jornada crítica tem cobertura determinística?" Avança da cobertura de traces para coverage holístico.

3. **v1-Launch Checklist** — Múltiplas issues (17+ itens) sinalizam preparação intensiva para lançamento v1, cobrindo OAuth, Telegram, rate limits, CLI availability e UI stability.

---

## 5. Bugs e Estabilidade

### Por Severidade

| Severidade | Count | Exemplos |
|---|---|---|
| **Crítica** | 1 | #6581: 429 Too Many Requests no webchat v2 |
| **Alta** | 2 | #6590: serve fails on Windows (workspace overlap); #4548: duplicate model field (DeepSeek 400) |
| **Média** | 5+ | #6575: systemd error post-onboard; #6578: Admin agents subject management |
| **Baixa** | 8+ | #6572: daily failure taxonomy; UI reconnect issues |

### Bugs Críticos/Hochas Recentes

- **#6590** ([Windows fail](https://github.com/nearai/ironclaw/issues/6590)): `ironclaw serve` falha no Windows com "workspace root must not overlap default skill root /skills" — impacto em onboarding de desenvolvedores Windows.

- **#4548** ([DeepSeek 400](https://github.com/nearai/ironclaw/issues/4548)): Request serialization duplica campo `model` quando tools estão incluídas, causando rejeição API.

- **#6581** ([Rate limit](https://github.com/nearai/ironclaw/issues/6581)): Canal SSE retorna 429 em uso normal multi-thread, causando UI "Disconnected" — **já com PR #6592 resolvendo**.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Epics e Enhancements em Destaque

| Issue | Feature | Escopo |
|---|---|---|
| [#6565](https://github.com/nearai/ironclaw/issues/6565) | [epic] Reliable Skill Discovery, Routing, and Activation | Agent/Skills |
| [#6578](https://github.com/nearai/ironclaw/issues/6578) | [epic] Admin-Managed Agents as UserId Subjects | Security/RBAC |
| [#6569](https://github.com/nearai/ironclaw/issues/6569) | Define Reborn heartbeat contract | Infra/Reliability |
| [#6570](https://github.com/nearai/ironclaw/issues/6570) | Implement durable heartbeat scheduling | Infra/Triggers |
| [#6552](https://github.com/nearai/ironclaw/issues/6552) | Rename Internal Reborn Crates/Types | Tech Debt |
| [#6551](https://github.com/nearai/ironclaw/issues/6551) | Introduce Default IronClaw Configuration Contracts | Config/Compat |

### PRs de Feature em Aberto

- **#6539** ([BENCHMARKING_MODE](https://github.com/nearai/ironclaw/pull/6539)): Add system-prompt addendum para unattended evaluation — remove escape valve para "ask user" em benchmarking.

- **#6595** ([Skill routing baseline](https://github.com/nearai/ironclaw/pull/6595)): 18-case routing corpus com top-5 selector baseline para skill discovery.

- **#6579** + dependências: 30 updates de deps (async-trait, thiserror, uuid, tokio ecosystem) — mantêm stack atualizada.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Categoria | Issue | Descrição |
|---|---|---|
| **OAuth/Auth** | #6534, #6544 | Google OAuth config não funciona em hosted; redirect URI não persiste |
| **Webhook/Integration** | #6548, #6522 | Preview-auth wall bloqueia webhooks (Telegram/Slack); sem docs Telegram |
| **Rate Limits** | #6581 | "Disconnected" stuck mesmo após reload |
| **CLI/SSH** | #6521, #6591 | `ironclaw` command unavailable via SSH; `service restart` não funciona |
| **Windows Dev** | #6590 | serve falha em Windows local-dev |
| **UI Stability** | #6541 | WebUI reconnecting constantemente |

### Padrões Identificados

- **Hosted staging tem múltiplos gaps**: OAuth, webhook delivery, CLI availability, auth wall — indicando que a experiência hosted ainda não está production-ready.
- **Onboarding UX precisa de polishing**: systemd setup, Windows compatibility, redirect URI persistence.
- **WebUI stability**: Reconnecting states e SSE rate limits afetam percepção de confiabilidade.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta/Ação Prolongada

| Issue | Título | Criado | Estado | Observação |
|---|---|---|---|---|
| [#4548](https://github.com/nearai/ironclaw/issues/4548) | DeepSeek duplicate model field | 2026-06-08 | OPEN | Bug aberto há ~45 dias — impacto em provedores alternativos |
| [#6274](https://github.com/nearai/ironclaw/issues/6274) | Finish DeploymentConfig | 2026-07-19 | CLOSED | Closed, mas PR de implementação ainda não aparece |
| [#3995](https://github.com/nearai/ironclaw/pull/3995) | Attested webui gate/resolve | 2026-05-24 | OPEN | PR aberto há ~60 dias — trabalho de signing |
| [#4060](https://github.com/nearai/ironclaw/pull/4060) | Continuation asserts caller scope | 2026-05-25 | OPEN | PR aberto há ~60 dias — continuidade do signing |

### Priorização Sugerida

1. **#4548** — Bug funcional afeta integrações com DeepSeek e provedores OpenAI-compatíveis.
2. **#3995/#4060** — PRs de signing abertos há 2 meses; definir timeline ou close.
3. **v1-launch-checklist items** — Múltiplas issues menores mas necessárias para launch readiness.
4. **Windows compatibility (#6590)** — Afeta onboarding de novos desenvolvedores Windows.

---

## Métricas de Saúde do Projeto

| Indicador | Valor | Avaliação |
|---|---|---|
| Issues ativas (24h) | 29 | 🟢 Alta |
| PRs abertos (24h) | 40 | 🟢 Sadio |
| PRs merged (24h) | 10 | 🟢 Pipeline ativo |
| Releases (24h) | 0 | 🟡 Em feature freeze para v1? |
| Bugs críticos abertos | 1 | 🟡 Rate limit — já com fix |
| Cobertura hermética | 123/123 | 🟢 Marco atingido |

---

*Relatório gerado em 2026-07-24 com dados do GitHub do IronClaw (nearai/ironclaw)*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do Projeto CoPaw (QwenPaw)
## Data: 2026-07-24

---

## 1. Panorama do dia

O projeto CoPaw (QwenPaw) apresenta **alta atividade** em 24 de julho de 2026, com 35 issues e 50 PRs atualizados. O ritmo de desenvolvimento continua intenso, evidenciado pela release v2.0.1-beta.2 com mudanças no CI e runtime. A comunidade reporta regressões de performance na transição v1.x→v2.0 (~2s overhead), além de múltiplos bugs críticos relacionados a crashes no novo loop engine e problemas de estabilidade em Windows. O ecossistema de features está em expansão com PRs significativos: unificação de browser SDK, reranker para memória ReMe, e novas integrações de agentes terceiros (Codex/Qoder). A taxa de resolução está positiva com 13 issues e 21 PRs fechados/merged no período.

---

## 2. Lançamentos

### v2.0.1-beta.2
**Release tag:** `v2.0.1-beta.2`

#### Mudanças documentadas:
| PR | Autor | Descrição |
|---|---|---|
| [#6329](https://github.com/agentscope-ai/QwenPaw/pull/6329) | @yutai78786 | `feat(ci)`: Unificado orchestrator de release, habilitando web no desktop build |
| [#6310](https://github.com/agentscope-ai/QwenPaw/pull/6310) | @zhaozhuang521 | `fix(runtime)`: Rotação de mensagem de texto em novo reasoning block |

#### Status: Pré-release beta
Não há notas de migração ou breaking changes documentadas para esta versão. Correções focadas em CI/CD e runtime.

---

## 3. Progresso do Projeto

### PRs merged/fechados hoje (21 total)

| PR | Tipo | Impacto |
|---|---|---|
| [#6351](https://github.com/agentscope-ai/QwenPaw/pull/6351) `fix(memory)` | **Bug fix** | **Alto** — Melhora recovery guidance em edições falhadas de MEMORY.md; agora usa `write_file` ao invés de repetir `edit_file` |
| [#6393](https://github.com/agentscope-ai/QwenPaw/pull/6393) `perf(console)` | **Performance** | **Alto** — Estabiliza memo de chat options e reduz re-parsing SSE; introduz `EMPTY_QUEUE` constante |
| [#6225](https://github.com/agentscope-ai/QwenPaw/pull/6225) `fix(desktop)` | **Bug fix** | **Médio** — Graceful shutdown do backend sidecar antes de exit no Desktop (Tauri) |
| [#6390](https://github.com/agentscope-ai/QwenPaw/pull/6390) `fix(governance)` | **Bug fix** | **Médio** — Bridge de regras `tool_guard` detection para governance policy Phase 1 |
| [#6394](https://github.com/agentscope-ai/QwenPaw/pull/6394) `chore` | Version bump | Bump para 2.0.1b2 |
| [#6389](https://github.com/agentscope-ai/QwenPaw/pull/6389) | Test | Teste |
| [#6388](https://github.com/agentscope-ai/QwenPaw/pull/6388) | Test | Teste |

### PRs em destaque (Under Review)

| PR | Tipo | Descrição |
|---|---|---|
| [#6284](https://github.com/agentscope-ai/QwenPaw/pull/6284) | **Feature** | **QwenPaw Creator** — Plugin `app` para workflow script→assets→storyboard→video |
| [#6398](https://github.com/agentscope-ai/QwenPaw/pull/6398) | **Feature** | Reranker backend para ReMe memory search (re-ranking via API externa) |
| [#6399](https://github.com/agentscope-ai/QwenPaw/pull/6399) | **Feature** | UI panel de config do reranker em ReMeLightMemoryCard |
| [#6397](https://github.com/agentscope-ai/QwenPaw/pull/6397) | **Feature** | Integração extensível Codex e Qoder como backends de agente terceiros |
| [#6276](https://github.com/agentscope-ai/QwenPaw/pull/6276) | **Feature** | **Browser unificado** — Um SDK, múltiplos backends (control plane + execution plane) |
| [#6387](https://github.com/agentscope-ai/QwenPaw/pull/6387) | **Feature** | Instalação on-demand de dependências de canais built-in |
| [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) | **Infrastructure** | Infraestrutura de safe model discovery para providers |

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento

#### 🔥 #6307 — Performance Overhead v2.0 (~2s por reply)
**Status:** OPEN | **Comentários:** 6 | ** 👍:** 0

> Upgrade de v1.1.12.post2 para v2.0.0.post3 introduce **~2 segundos de overhead fixo** em cada reply conversacional simples, independente da latência do modelo.

**Análise:** Este é o issue mais comentado e representa uma regressão de performance crítica. A comunidade reporta que o overhead é "fixo" e "arquitetural", não relacionado a latência de rede ou modelo. Aguardando resposta dos mantenedores.

**Link:** https://github.com/agentscope-ai/QwenPaw/issues/6307

---

#### 🔥 #6344 — Docker Hot Reload para Web
**Status:** OPEN | **Comentários:** 3 | ** 👍:** 0

> Pedido para adicionar hot-update no Docker, evitando rebuild de container. Usuários perdem ferramentas instaladas (Node, ffmpeg, LibreOffice) a cada update.

**Análise:** Feature request com alta relevância para usuários de NAS/containers. Proposta de implementar `qwenpaw update` como alternativa a `docker rm && docker run`.

**Link:** https://github.com/agentscope-ai/QwenPaw/issues/6344

---

#### 🔥 #6408 — Undo/Re-edit em Conversas
**Status:** OPEN | **Comentários:** 1 | ** 👍:** 0

> Pedido de `/undo` command para reverter último par user+assistant message, similar a Cherry Studio/ChatGPT.

**Análise:** Funcionalidade esperada em clientes de chat modernos.history.db menyimpan semua dados mas não há interface para deletar mensagens específicas.

**Link:** https://github.com/agentscope-ai/QwenPaw/issues/6408

---

## 5. Bugs e Estabilidade

### Bugs Críticos (P0-P1)

| Issue | Severidade | Descrição |
|---|---|---|
| [#6376](https://github.com/agentscope-ai/QwenPaw/issues/6376) | **Crítica** | Loop engine causa crash no processo principal em v2.0.0.post3 e post4. "Não podem testar antes de publicar? Testem stress!" |
| [#6401](https://github.com/agentscope-ai/QwenPaw/issues/6401) | **Alta** | Scheduled tasks sobrescrevem histórico de sessões existentes quando `share_session: true` |
| [#6363](https://github.com/agentscope-ai/QwenPaw/issues/6363) | **Alta** | `[CLOSED]` Tool calls com markdown fences/XML tags quebram execução (GLM-5-Turbo, DeepSeek-V3) |
| [#6405](https://github.com/agentscope-ai/QwenPaw/issues/6405) | **Alta** | MCP tools reportam "Tool notfound" após upgrade v2.0 (nome muda para `[mcp-key]__[tool_name]`) |

### Bugs Médios (P2)

| Issue | Descrição |
|---|---|
| [#3015](https://github.com/agentscope-ai/QwenPaw/issues/3015) | `[CLOSED]` MEMORY.md write failure causa loop infinito de retries |
| [#6362](https://github.com/agentscope-ai/QwenPaw/issues/6362) | MiniMax-M3 não reconhece imagens corretamente (v2.0.0.post4) |
| [#6407](https://github.com/agentscope-ai/QwenPaw/issues/6407) | ReAct Agent context mistura `tool_result` com `role:assistant`, causando erro 400 |
| [#6372](https://github.com/agentscope-ai/QwenPaw/issues/6372) | Idle cleanup remove queue state recém-criada |
| [#6354](https://github.com/agentscope-ai/QwenPaw/issues/6354) | `[CLOSED]` UI de Approval Dialog pode grantar permissões permanentes acidentalmente |

### Bugs de Plataforma

| Issue | Plataforma | Descrição |
|---|---|---|
| [#6239](https://github.com/agentscope-ai/QwenPaw/issues/6239) | **Windows** | Backend remove `;` do PATH, perdendo npm globals |
| [#6406](https://github.com/agentscope-ai/QwenPaw/issues/6406) | **Windows** | `execute_shell_command` colapsa multi-line PowerShell em uma linha |
| [#5187](https://github.com/agentscope-ai/QwenPaw/issues/5187) | **Windows** | **PR OPEN** Automação GUI Windows com UIA + Tauri control mode |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| Issue | Feature | Potencial Impact |
|---|---|---|
| [#6344](https://github.com/agentscope-ai/QwenPaw/issues/6344) | Hot reload Docker | Alto (devops) |
| [#6408](https://github.com/agentscope-ai/QwenPaw/issues/6408) | Undo/Re-edit messages | Alto (UX) |
| [#6316](https://github.com/agentscope-ai/QwenPaw/issues/6316) | Cron jobs com model opcional | Médio |
| [#6392](https://github.com/agentscope-ai/QwenPaw/issues/6392) | Token stats por agente | Médio |
| [#6377](https://github.com/agentscope-ai/QwenPaw/issues/6377) | API para tarefas específicas | Médio |
| [#6403](https://github.com/agentscope-ai/QwenPaw/issues/6403) | Syntax highlighting RobotFramework | Baixo |
| [#6380](https://github.com/agentscope-ai/QwenPaw/issues/6380) | Atualização incremental para HDD | Alto (performance) |

### Sinais de Roadmap Observados nos PRs

| PR | Feature | Observação |
|---|---|---|
| [#6398](https://github.com/agentscope-ai/QwenPaw/pull/6398) + [#6399](https://github.com/agentscope-ai/QwenPaw/pull/6399) | **Reranker para ReMe** | Investimento em memória vetorial |
| [#6397](https://github.com/agentscope-ai/QwenPaw/pull/6397) | **Codex/Qoder backends** | Expansão de agentes terceiros |
| [#6276](https://github.com/agentscope-ai/QwenPaw/pull/6276) | **Browser unificado** | Unificação de automação de browser |
| [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) | **Safe model discovery** | Melhora DX de providers |
| [#6268](https://github.com/agentscope-ai/QwenPaw/issues/6268) | **AIOnly provider** | Integração OpenAI-compatible com 190+ modelos |

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Categoria | Feedback | Frequência |
|---|---|---|
| **Performance v2.0** | "2 segundos de overhead fixo é inaceitável para conversas simples" | Alta |
| **Estabilidade** | "Loop feature crashing production. Testem antes de publicar!" | Alta |
| **Docker/Deploy** | "Perco todas as ferramentas instaladas a cada update" | Média |
| **MCP Integration** | "After upgrade, MCP tools não funcionam mais" | Média |
| **Windows** | "PATH concatenation quebrado; npm globals somem" | Média |
| **HDDs** | "1.5 horas para update em NAS com HDD" | Média |

### Cenários de Uso Identificados

1. **Self-hosted bots em NAS/Docker** — Usuários rodam QwenPaw em NAS com discos magnéticos, precisam de updates frequentes sem perder ambiente
2. **Agentes de produção** — Scheduling de tarefas com cron jobs que interagem com sessões existentes
3. **Desenvolvedores Windows** — Automação de desktop e shell commands multi-line
4. **Usuários de Market de Skills** — Instalação de plugins precisa ser mais fluida

### Satisfação

- **Positivo:** Ritmo de features é alto; comunidade ativa reportando bugs
- **Negativo:** Regressões de performance e estabilidade em v2.0 causam frustração

---

## 8. Backlog que Merece Atenção

### Issues sem resposta há >3 dias

| Issue | Criado | Status | Prioridade |
|---|---|---|---|
| [#6307](https://github.com/agentscope-ai/QwenPaw/issues/6307) | 2026-07-21 | OPEN | **Crítica** |
| [#6344](https://github.com/agentscope-ai/QwenPaw/issues/6344) | 2026-07-22 | OPEN | Alta |
| [#6342](https://github.com/agentscope-ai/QwenPaw/issues/6342) | 2026-07-22 | OPEN | Média |
| [#6316](https://github.com/agentscope-ai/QwenPaw/issues/6316) | 2026-07-21 | OPEN | Média |
| [#6239](https://github.com/agentscope-ai/QwenPaw/issues/6239) | 2026-07-18 | OPEN | Alta |
| [#6362](https://github.com/agentscope-ai/QwenPaw/issues/6362) | 2026-07-22 | OPEN | Alta |
| [#6380](https://github.com/agentscope-ai/QwenPaw/issues/6380) | 2026-07-23 | OPEN | Alta |

### PRs sem review

| PR | Criado | Tipo |
|---|---|---|
| [#6284](https://github.com/agentscope-ai/QwenPaw/pull/6284) | 2026-07-20 | Feature (QwenPaw Creator) |
| [#6398](https://github.com/agentscope-ai/QwenPaw/pull/6398) | 2026-07-23 | Feature (Reranker backend) |
| [#6397](https://github.com/agentscope-ai/QwenPaw/pull/6397) | 2026-07-23 | Feature (Codex/Qoder) |
| [#6276](https://github.com/agentscope-ai/QwenPaw/pull/6276) | 2026-07-20 | Feature (Browser unificado

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-07-24

---

## 1. Panorama do Dia

O ecossistema ZeroClaw manteve uma atividade intensa nas últimas 24 horas, com 50 issues e 50 PRs atualizados — um ritmo sustentado de desenvolvimento. Não houve novos lançamentos, indicando que a atenção da equipe está concentrada em estabilização e integração de contribuições pendentes. Dos 46 PRs abertos, 4 foram merged/fechados, sinalizando progresso modesto mas constante no pipeline de código. A compositions das issues revela uma工程项目 saudável com equilíbrio entre bugs críticos (alguns de severidade S0/S1), features solicitadas pela comunidade e work tracking de longo prazo como o tracker v0.9.0.

---

## 2. Lançamentos

**Nenhuma release została publicada nas últimas 24 horas.**

O tracker de milestone v0.9.0 (#7432) permanece em aberto, acumulando decisões sobre auth, security hardening, gateway boundaries, A2A e multi-agent boundaries, tool policy e breaking changes. A ausência de nova release sugere que a equipe está na fase de consolidação antes de um próximo cut. Nenhum changelog ou nota de migração disponível para este período.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados Recentemente (4 total)

| # | Título | Tipo | Status | Relevância |
|---|--------|------|--------|------------|
| #6378 | Discord Bot respond only in specific Discord channels | Feature | FECHADO | Permite restrict respostas a canais específicos via `allowed_channels` |
| #2767 | Multi-Agent Routing | Feature | FECHADO | Implementa roteamento multi-agente com workspaces isolados e bindings |
| #4721 | zeroclaw should log to stderr instead of stdout | Bug | FECHADO | Resolve confusão em output de comandos (ex: `zeroclaw config schema`) |
| #4832 | Add config option to disable LeakDetector high-entropy token redaction | Enhancement | FECHADO | Adiciona toggle para falsos positivos em hashes MD5/arquivos randômicos |
| #7248 | Persist cached input tokens and include them in cost accounting | Feature | FECHADO | Propaga cached tokens de providers (Anthropic/OpenAI) no accounting |
| #5145 | add `send_channel_message` tool for direct per-user channel delivery | Feature | FECHADO | Resolve workarounds de scheduled jobs para envio direto de mensagens |
| #6510 | cron `delivery.mode = "announce"` — deliver only final assistant message | Enhancement | FECHADO | Melhora output de agentes com intermediate reasoning narration |

### Principais PRs Abertos com Alto Impacto

- **#9251** — PostgreSQL as first supported session backend (size:XL, risk:high): Reduz a complexidade de 5 backends para foundation + PostgreSQL, seguindo guidance de Audacity88 para provar um path completo antes de expandir vendor matrix.
- **#9208** — Stop per-iteration tool-schema deep clones (size:XL, risk:high): Elimina rebuild de specs via `parameters_schema()` em cada iteração do agent loop, com wrappers ArcDelegatingTool, ArcToolRef, ToolArcRef e SkillBuiltinTool que não forwardavam `spec()`.
- **#8655** — Consolidate Code pane, rails, and prompt drafts (size:XL, risk:high): Transforma o default session surface do ZeroCode para o Code pane, expondo ACP via `code.rs` com transcript behavior compartilhado.
- **#9211** — Consolidate release attestations (risk:high): Centraliza GitHub artifact attestations como único mecanismo de provenance para assets baixáveis, gerando ambos formatos SBOM.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários + reações)

| # | Título | Comentários | 👍 | Status | Tema Central |
|---|--------|-------------|----|--------|--------------|
| [#3566](https://github.com/zeroclaw-labs/zeroclaw/issues/3566) | [Tracker]: A2A protocol interoperability | 9 | 7 | OPEN | Suporte nativo ao Agent2Agent protocol (v0.3.0+, Linux Foundation) para comunicação HTTP entre ZeroClaw e agentes externos |
| [#2767](https://github.com/zeroclaw-labs/zeroclaw/issues/2767) | Multi-Agent Routing | 7 | 9 | CLOSED | Multiple isolated agents (workspace + agentDir + sessions) com roteamento via bindings — **feature implementada** |
| [#6378](https://github.com/zeroclaw-labs/zeroclaw/issues/6378) | Discord Bot respond only in specific Discord channels | 8 | 0 | CLOSED | Restrição de bot a canais específicos via `allowed_channels` — **feature implementada** |
| [#9127](https://github.com/zeroclaw-labs/zeroclaw/issues/9127) | RFC: Abstract a `KeySource` trait | 7 | 0 | OPEN | Classificação de master-key material por source/deployment form com ChaCha20-Poly1305 e 93 campos `#[secret]` |
| [#4853](https://github.com/zeroclaw-labs/zeroclaw/issues/4853) | install skills from .well-known agent-skills discovery indexes | 6 | 0 | OPEN | Suporte ao `.well-known` URI padronizado (Cloudflare, Vercel já usam) |
| [#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) | define a compact local_small runtime profile | 6 | 2 | OPEN | Local-first: reduz prompt bloat, desabilita fallback parsing, previne vazamento de instruções internas |

### Análise de Demandas

**Interoperabilidade e Multi-Agent (maior interesse):** O issue #3566 com 7 👍 e 9 comentários demonstra forte demanda da comunidade por A2A compliance. A combinação com o tracker #7432 (v0.9.0) indica que multi-agent architecture é um foco estratégico de longo prazo.

**Segurança como Tema Recorrente:** As issues de security aparecem em peso — KeySource trait (#9127), TOTP cross-channel (#3767), LeakDetector (#4832, já fechada), Landlock sandbox (#9204). O projeto demonstra maturidade em threat modeling.

**Local-First:** O issue #5287 sobre runtime profile `local_small` revela um caso de uso importante: usuários que rodam modelos localmente sem overhead de contexto desnecessário.

---

## 5. Bugs e Estabilidade

### Bugs por Severidade

#### S0 — Data Loss / Security Risk (Críticos)

| # | Título | Status | Canal | Link |
|---|--------|--------|-------|------|
| #9188 | Telegram long-poll advances update offset before successful inbound delivery | IN-PROGRESS | Telegram | [#9188](https://github.com/zeroclaw-labs/zeroclaw/issues/9188) |
| #9187 | WeChat sync cursor persisted before message enqueue — crash loses inbound messages | IN-PROGRESS | WeChat | [#9187](https://github.com/zeroclaw-labs/zeroclaw/issues/9187) |

#### S1 — Workflow Blocked

| # | Título | Status | Área | Link |
|---|--------|--------|------|------|
| #9207 | web_fetch returns garbage for compressed responses (gzip, brotli, deflate) | IN-PROGRESS | Web | [#9207](https://github.com/zeroclaw-labs/zeroclaw/issues/9207) |
| #9204 | Landlock sandbox restricts the ZeroClaw daemon itself | IN-PROGRESS | Sandbox | [#9204](https://github.com/zeroclaw-labs/zeroclaw/issues/9204) |
| #9191 | Cron agent jobs have no wall-clock timeout; in-flight locks only cleared at process start | ACCEPTED | Cron/Daemon | [#9191](https://github.com/zeroclaw-labs/zeroclaw/issues/9191) |
| #9290 | Windows desktop installer fails at launch with missing TaskDialogIndirect | ACCEPTED | Desktop | [#9290](https://github.com/zeroclaw-labs/zeroclaw/issues/9290) |
| #9235 | ci: npm audit failed — 2026-07-21 | IN-PROGRESS | CI/Security | [#9235](https://github.com/zeroclaw-labs/zeroclaw/issues/9235) |

#### S2 — Degraded Behavior

| # | Título | Status | Área | Link |
|---|--------|--------|------|------|
| #9284 | config flush can overwrite concurrent writes | IN-PROGRESS | Config/Daemon | [#9284](https://github.com/zeroclaw-labs/zeroclaw/issues/9284) |
| #9236 | fresh Telegram aliases are dropped after config reload | IN-PROGRESS | Telegram | [#9236](https://github.com/zeroclaw-labs/zeroclaw/issues/9236) |

### Bugs com PRs Corretivos Pendentes

| PR # | Corretivo | Issue Alvo |
|------|-----------|------------|
| [#9313](https://github.com/zeroclaw-labs/zeroclaw/pull/9313) | fix(wechat): persist sync cursor only after inbound batch is enqueued | #9187 |
| [#9310](https://github.com/zeroclaw-labs/zeroclaw/pull/9310) | fix(config): propagate nested set_prop value errors instead of masking | #9285 |
| [#9312](https://github.com/zeroclaw-labs/zeroclaw/pull/9312) | fix(runtime): serialize RPC config writes so a flush can't erase concurrent updates | #9284 |
| [#9309](https://github.com/zeroclaw-labs/zeroclaw/pull/9309) | fix(config): keep partial channel aliases through salvage | #9236 |
| [#9297](https://github.com/zeroclaw-labs/zeroclaw/pull/9297) | fix(config): save_dirty resolves map keys containing dots | — |

### Análise de Estabilidade

**Problemas Críticos de Canais:** Telegram (#9188) e WeChat (#9187) ambos apresentam race conditions onde o cursor de sincronização avança antes do processamento completo da mensagem. Isso representa risco de **perda de mensagens** e deve ser tratado com alta prioridade. A correção em #9313 demonstra que o time já está ciente e trabalhando.

**Segurança CI/CD:** O issue #9235 aponta 3 vulnerabilidades high/critical em npm (especificamente `@redocly/openapi-core`). Este é um alerta de security que precisa de triagem urgente.

**Landlock Sandbox Regression:** O bug #9204 indica que o sandbox do Linux (Landlock) está restringindo o próprio daemon, não apenas processos filhos. Isso bloqueia acesso SQLite em memória e workflow de daemon.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em Andamento (Status: In-Progress)

| # | Título | Prioridade | Domínio | Link |
|---|--------|------------|---------|------|
| #3767 | require TOTP for cross-channel approval of critical tools | P1 | Security | [#3767](https://github.com/zeroclaw-labs/zeroclaw/issues/3767) |
| #9228 | add eval results dashboard and trend tracking | P3 | Observability | [#9228](https://github.com/zeroclaw-labs/zeroclaw/issues/9228) |
| #8997 | Warn when peer_groups.*.channel ref points at non-existent channel alias | P2 | Config | [#8997](https://github.com/zeroclaw-labs/zeroclaw/issues/8997) |

### Features Accepted com Potencial v0.9.0

| # | Título | Prioridade | Tema | Link |
|---|--------|------------|------|------|
| #3566 | A2A protocol interoperability (Tracker) | P2 | Interop | [#3566](https://github.com/zeroclaw-labs/zeroclaw/issues/3566) |
| #4853 | install skills from .well-known discovery indexes | P2 | Extensibility | [#4853](https://github.com/zeroclaw-labs/zeroclaw/issues/4853) |
| #5287 | compact local_small runtime profile and prompt-budget contract | P2 | Local-First | [#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) |
| #7432 | v0.9.0 auth, security, gateway, breaking-change queue (Tracker) | P2 | Meta | [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) |
| #3696 | configure external commands for message lifecycle hooks | P2 | Hooks | [#3696](https://github.com/zeroclaw-labs/zeroclaw/issues/3696) |
| #4760 | use schema-validated tool calls for memory consolidation | P2 | Memory | [#4760](https://github.com/zeroclaw-labs/zeroclaw/issues/4760) |
| #3672 | Workspace file and memory change history | P2 | Memory | [#3672](https://github.com/zeroclaw-labs/zeroclaw/issues/3672) |

### Sinais de Roadmap

1. **A2A e Multi-Agent:** Forte indicação via #3566 e #7432 de que interop com Agent2Agent protocol é prioritário para v0.9.0
2. **PostgreSQL como Session Backend:** #9251 confirma que o primeiro storage backend suportado será PostgreSQL, antes de expandir para outros vendors
3. **Skills Discovery:** Padronização `.well-known` (#4853) alinha ZeroClaw com Cloudflare e Vercel
4. **TOTP Cross-Channel:** #3767 sugere consolidação de MFA across canais (Telegram, Discord, Matrix, etc.)
5. **Eval Dashboard:** #9228 adiciona observabilidade longitudinal para capability suites

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas (via Issues)

| Categoria | Problema | Frequência | Link |
|-----------|----------|------------|------|
| **Discord** | Necessidade de restringir bot a canais específicos (para ambientes multi-tenant) | 1 (CLOSED — feature implementada) | [#6378](https://github.com/zeroclaw-labs/zeroclaw/issues/6378) |
| **Local-first** | Prompt bloat e vazamento de instruções internas em setups com modelos locais | 1 issue | [#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) |
| **Logging** | Log para stdout polui output de comandos CLI (`zeroclaw config schema`) | 1 (CLOSED — bug corrigido) | [#4721](https://github.com/zeroclaw-labs/zeroclaw/issues/4721) |
| **LeakDetector** | False positives em hashes MD5 e filenames randômicos (WeChat, etc.) | 1 (CLOSED — config option adicionada) | [#4832](https://github.com/zeroclaw-labs/zeroclaw/issues/4832) |
| **Memory/History** | Perda de contexto quando agente modifica SOUL.md ou AGENTS.md | 1 issue | [#3672](https://github.com/zeroclaw-labs/zeroclaw/issues/3672) |
| **Channel Sync** | Mensagens perdidas em WeChat/Telegram por race conditions em sync cursor | 2 issues S0 | [#9188](https://github.com/zeroclaw-labs/zeroclaw/issues/9188), [#9187](https://github.com

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*