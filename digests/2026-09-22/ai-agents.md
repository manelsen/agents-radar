# Resumo diário do ecossistema de agentes de IA 2026-09-22

> Issues: 0 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-09-21 22:59 UTC

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

# Relatório Comparativo: Ecossistema de Agentes de IA Open Source

**Data de referência:** 2026-09-22
**Analista:** Consolidador de Ecossistema

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **duas velocidades distintas** neste período. Por um lado, **Hermes Agent, ZeroClaw e CoPaw** demonstram atividade excepcional (>30 PRs/24h), indicando ciclos de desenvolvimento acelerados típicos de projetos em fase de crescimento agresivo. Por outro, **IronClaw e NanoBot** priorizam estabilização pré-release, com foco em qualidade sobre velocidade. **PicoClaw** mantém ritmo moderado com atenção em integrações OAuth. A segurança emerge como tema transversal — desde prompt injection em CoPaw até validação de tokens OIDC em ZeroClaw — refletindo a maturidade do ecossistema em enfrentar vetores de ataque em produção.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | Releases | Saúde | Tendência |
|---------|--------------|-----------|----------|-------|-----------|
| **Hermes Agent** | 50 | 50 | v0.21.4 | 🟡 Complexa | Acelerando |
| **ZeroClaw** | 50 | 50 | Nenhuma | 🟡 Técnica | Estável-Alta |
| **CoPaw** | 17 | 32 | Nenhuma | 🔴 Atenção | Acelerando |
| **NanoBot** | 3 | 28 | Nenhuma | 🟢 Estável | Desacelerando (pré-release) |
| **IronClaw** | 1 | 2 | RC pendente | 🟢 Forte | Consolidando |
| **PicoClaw** | 3 | 3 | Nenhuma | 🟡 Normal | Moderada |
| **NullClaw** | 0 | 0 | Nenhuma | ⚫ Inativa | Estagnada |

**Destaque quantitativo:** Hermes Agent e ZeroClaw lideram em volume absoluto (50/50), mas com perfis distintos — Hermes prioriza features multi-plataforma (Discord, Telegram, WhatsApp), enquanto ZeroClaw investe em segurança foundation (OIDC, RPC authentication).

---

## 3. Posicionamento do Projeto Principal

*Nota: "NullClaw" foi declarado referência principal, mas apresenta zero atividade. Usando Hermes Agent como proxy de projeto líder por volume.*

### Hermes Agent — Vantagens Competitivas

| Dimensão | Vantagem | Evidência |
|----------|----------|-----------|
| **Volume de contribuição** | ~1.800 PRs consolidadas em 1 release | v0.21.4 |
| **Integração multiplataforma** | 4 canais (Discord, Telegram, WhatsApp, Slack) | 6+ PRs de parity |
| **Arquitetura modular** | Provider ABC em discussão ativa (#77111) | 4 PRs competindo |
| **Ecossistema de plugins** | Catálogo comunitário crescente | #118593 |

### Diferenças Técnicas Observadas

| Característica | Hermes Agent | ZeroClaw | CoPaw | NanoBot |
|----------------|--------------|----------|-------|---------|
| **Stack dominante** | Python + Go | Rust | Python | Python |
| **Foco primário** | Agentes sociais | Segurança + RPC | Sessões + loops | UX/WebUI |
| **Modelo de deployment** | Desktop + Cloud | Daemon + Nix | Desktop | Self-hosted |
| **Community size** | Muito grande | Grande | Média | Média-Alta |

---

## 4. Focos Técnicos Compartilhados

### 4.1 Segurança — Tema Transversal

Três de sete projetos enfrentam vulnerabilidades críticas simultaneamente:

| Projeto | Issue de Segurança | Severidade |
|---------|-------------------|------------|
| **CoPaw** | Prompt injection persistente (#7859) | 🔴 Crítica |
| **ZeroClaw** | RUSTSEC waivers bloqueando CI (#9899) | 🟠 Alta |
| **PicoClaw** | OAuth scopes hardcoded (#3378) | 🔴 Alta |

**Análise:** A prevalência de issues de segurança indica que o ecossistema amadureceu o suficiente para atrair atores adversários. Prompt injection (CoPaw) e vazamento de tokens (PicoClaw) são vetores de ataque de confiança.

### 4.2 Estabilidade de Sessões Longas

| Projeto | Sintoma | Status |
|---------|---------|--------|
| **NanoBot** | Auto-compaction deadlock (#5849) | PR #5857 em revisão |
| **Hermes Agent** | Desktop instável (200+ mensagens) | 6 issues P0-P2 |
| **CoPaw** | DoomLoopGate escapa prematuramente | ✅ Resolvido (2 PRs) |
| **ZeroClaw** | 32k token cap forçado (#10068) | Aberto |

**Padrão identificado:** Sessões longas expõem memory leaks e budget violations em múltiplas implementações, sugerindo necessidade de especificação formal de lifecycle management.

### 4.3 Integrações de Terceiros Frágeis

| Provider | Projetos Afetados | Tipo de Falha |
|----------|-------------------|---------------|
| OpenCode | CoPaw, Hermes Agent | 403 FreeTier, header ausente |
| xAI | Hermes Agent | OAuth token refresh |
| DeepSeek/Qwen | Hermes Agent | Truncation em cascata |
| WhatsApp Web | ZeroClaw, Hermes Agent | Images como texto, thumbnails |

---

## 5. Análise de Diferenciação

### 5.1 Por Público-Alvo

```
┌─────────────────────────────────────────────────────────────┐
│                    ESPECTRO DE PROJETOS                      │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  HERMES AGENT ◄─────────────► ZEROCLAW                      │
│  "Consumidor final"             "Infraestrutura/Enterprise" │
│  • Multi-plataforma social      • RPC autenticado            │
│  • Desktop para usuários        • Nix/NixOS deployment       │
│  • Cron jobs, automação         • Auditoria de mensagens     │
│                                                              │
│  COPAW ◄──────────────────────► IRONCLAW                     │
│  "Desenvolvedores de agentes"    "QA automation"             │
│  • PawApp SDK redesign          • OfficeQA benchmarks        │
│  • DoomLoopGate, tool safety    • Taxonomy de failures       │
│  • Provider abstraction         • Managed deployments        │
│                                                              │
│  NANOBOT ◄─────────────────────► PICOCLAW                    │
│  "Self-hosted power users"       "Embedders/IoT"             │
│  • WebUI rico (Mermaid)         • IRC, QQ integration        │
│  • Observabilidade               • Lightweight              │
│  • Token budget management      • OAuth customization        │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### 5.2 Por Arquitetura

| Arquitetura | Projetos | Características |
|-------------|----------|----------------|
| **Event-driven daemon** | ZeroClaw | Rust, RPC autenticado, multi-agente |
| **Desktop-centric** | Hermes Agent, CoPaw | Electron-style, multi-provider |
| **CLI-first** | NanoBot, IronClaw | WebUI como feature, não dependência |
| **Plugin-based** | PicoClaw | Go, módulos intercambiáveis |

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração

| Ranking | Projeto | PRs/24h | Tempo médio de resposta |
|---------|---------|---------|------------------------|
| 🥇 1 | Hermes Agent | 50 | <24h (documentado) |
| 🥈 2 | ZeroClaw | 50 | <24h (baseado em atividade) |
| 🥉 3 | CoPaw | 32 | <24h (2 patches críticos merged) |
| 4 | NanoBot | 28 | <24h (issue → fix em ~1 dia) |
| 5 | IronClaw | 2 | ~3 dias (PR #8102) |
| 6 | PicoClaw | 3 | ~10 dias (PR #3378) |

### 6.2 Qualidade vs. Velocidade

| Projeto | Velocidade | Cobertura/Testes | Debt Técnico |
|---------|------------|------------------|-------------|
| **CoPaw** | Alta | +3.28pp/cobertura em 1 dia | Baixo (sprints de teste) |
| **Hermes Agent** | Muito alta | Não documentada | Alto (issues de julho persistem) |
| **ZeroClaw** | Alta | Alta (Rust type system) | Moderado (waivers de segurança) |
| **IronClaw** | Baixa | Excelente (quality gates) | Baixo (benchmarks internos) |

**Conclusão:** CoPaw demonstra melhor equilíbrio velocidade/qualidade. Hermes Agent prioriza features sobre dívida técnica acumulada. IronClaw prioriza qualidade (pipeline maduro).

### 6.3 Backlog crônico

| Projeto | Issues antigas (>30d) | Padrão |
|---------|------------------------|--------|
| Hermes Agent | 5+ (julho 2026) | Desktop rendering, OAuth |
| NanoBot | 2 (julho 2026) | Memory leaks, URL validation |
| CoPaw | 1 (abril 2026) | JD Cloud interrupção |
| ZeroClaw | 5+ | Cron timeout, emergency stop |

---

## 7. Sinais de Tendência

### 7.1 Tendências de Mercado Extraídas

| Tendência | Evidência | Implicação |
|-----------|----------|------------|
| **Multi-agente orchestration** | ZeroClaw RFC #10970, #11027 | Mercado movendo para deployments com múltiplos agentes |
| **Voice duplex** | Hermes Agent RFC #77111 (4 PRs) | Proximidade com Phone calling, live support |
| **Enterprise security** | ZeroClaw OIDC, Nix packaging | Demanda por compliance e audit trails |
| **Rich WebUI** | NanoBot Mermaid, CoPaw session list | Competição por UX como diferenciador |
| **Provider abstraction** | 3+ provedores problemáticos simultaneamente | Necessidade de SDKs resilientes |
| **Observabilidade** | Tracing (NanoBot #5846), usage analytics | Shift de "funciona" para "diagnosticável" |

### 7.2 Inova

ções de Produto em Nasc

| Sinais de early adopter | Origem |
|-------------------------|--------|
| WhatsApp Web rooms (#10979) | ZeroClaw |
| Delivery receipts para mensagens (#10929) | ZeroClaw |
| SSH control plane para enterprise (#118029) | Hermes Agent |
| RealtimeVoiceProvider ABC (#77111) | Hermes Agent |
| PawApp SDK redesign (#7874) | CoPaw |
| Opper provider nativo (#5845) | NanoBot |

### 7.3 Riscos Sistêmicos Identificados

| Risco | Impacto | Projetos |
|-------|---------|----------|
| **Prompt injection como vetor** | Confiança em third-party skills | CoPaw (ativo), potencialmente todos |
| **Dependência de providers terceiros** | Fronteiras de API instáveis | CoPaw, Hermes Agent |
| **Memory leaks em sessões longas** | Escalabilidade | NanoBot, Hermes Agent, ZeroClaw |
| **Waivers de segurança não resolvidos** | Pipeline CI vermelho | ZeroClaw |

---

## Síntese Executiva

**Para decisores técnicos:** O ecossistema fragmenta-se em dois movimentos — *velocity players* (Hermes, ZeroClaw, CoPaw) competindo por features e integracões, e *quality players* (IronClaw, NanoBot) focando em estabilização. A segurança emerge como requisito de table-stakes, não diferencial.

**Para desenvolvedores:** Contributions em segurança (ZeroClaw), provider abstraction (CoPaw), e UX/WebUI (NanoBot) oferecem menor fricção de entrada e maior impacto. Issues antigas em Hermes Agent representam oportunidades de onboarding.

**Monitoramento recomendado:** CoPaw #7859 (prompt injection) — se não resolvido, estabelece precedente negativo para todo o ecossistema. Hermes Agent desktop stability — 6 issues P0-P2 indicam débt acumular que pode impactar adoção enterprise.

---

*Relatório gerado em 2026-09-22 com base em dados consolidados de 7 repositórios.*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-09-22

---

## 1. Panorama do Dia

O projeto NanoBot apresenta **alta atividade de desenvolvimento** nesta data, com 28 PRs atualizadas nas últimas 24h e nenhum release novo. A equipe está focada em refinamentos de UX/WebUI (11 dos 20 PRs mais comentados são do autor `Re-bin`) e em correções críticas de estabilidade — particularmente o deadlock de auto-compaction (#5849) e latência no BUILD stage (#5843). Das 3 issues registradas, 2 permanecem abertas e indicam problemas de escalabilidade em sessões longas. O estado geral sugere uma fase de estabilização pré-release, com forte contribuição da comunidade em melhorias incrementais.

---

## 2. Lançamentos

**Nenhum novo release nas últimas 24h.**

O projeto não publicou versões recentes. Isso indica que a equipe pode estar em ciclo de merge/validação antes de um próximo tag, dado o volume de PRs abertas com标签 `priority: p2`.

---

## 3. Progresso do Projeto

### PRs Merged/Fechadas Hoje (4)

| # | Título | Autor | Impacto |
|---|--------|-------|---------|
| [#5840](https://github.com/HKUDS/nanobot/pull/5840) | fix: improve log reliability and request correlation | chengyongru | Padronização de timestamps, IDs de requisição e tracebacks |
| [#5770](https://github.com/HKUDS/nanobot/issues/5770) | [WebUI] Opening mobile sidebar focuses search button | morandot | Correção de UX mobile — sidebar não mais exibe tooltip indesejado |

**Análise:** O PR #5840 é significativo para debuggabilidade e observabilidade em produção. A correção do sidebar mobile (#5770) resolve um bug de usabilidade reportado há 6 dias.

### PRs Abertas de Alto Impacto

| # | Título | Autor | Status |
|---|--------|-------|--------|
| [#5857](https://github.com/HKUDS/nanobot/pull/5857) | fix(memory): bound automatic transcript summarization | iuiu-py | Fixa #5849 — Critical |
| [#5846](https://github.com/HKUDS/nanobot/pull/5846) | fix(agent): trace BUILD substage latency | Solaris-star | Fixa #5843 — Critical |

O PR [#5857](https://github.com/HKUDS/nanobot/pull/5857) implementa proteção de token-budget na sumarização automática, evitando o deadlock descrito em #5849. Este é um **PR blocker** para estabilidade de sessões longas.

---

## 4. Temas Quentes da Comunidade

### Issues/PRs com Maior Atenção (por volume de trabalho)

| # | Tipo | Título | Tema Central |
|---|------|--------|--------------|
| [#5856](https://github.com/HKUDS/nanobot/pull/5856) | PR | feat(webui): inspect and stop session commands | Observabilidade de comandos |
| [#5855](https://github.com/HKUDS/nanobot/pull/5855) | PR | feat(webui): show bounded parent-scoped subtask outputs | Hierarquia de tarefas |
| [#5854](https://github.com/HKUDS/nanobot/pull/5854) | PR | feat(commands): add scoped prompt commands and management UI | Gerenciamento de prompts |
| [#5851](https://github.com/HKUDS/nanobot/pull/5851) | PR | feat(webui): add usage ranges, activity calendar and model breakdowns | Análise de uso |
| [#5848](https://github.com/HKUDS/nanobot/pull/5848) | PR | feat(webui): render safe Mermaid diagrams | Visualização rica |

**Análise:** A comunidade demonstra forte interesse em **rich UX features** — renderização de diagramas Mermaid, painéis de comandos, e analytics de uso. O autor `Re-bin` lidera com 8 PRs simultâneas, indicando um roadmap claro para a WebUI. Também há demanda por ferramentas de **observabilidade e debugging** (comandos, outputs, latência).

---

## 5. Bugs e Estabilidade

### Issues Abertas Críticas

| # | Severidade | Título | Status |
|---|------------|--------|--------|
| [#5849](https://github.com/HKUDS/nanobot/issues/5849) | **Crítica** | Auto-compaction deadlock: summarize_transcript sem token-budget | Aberto |
| [#5843](https://github.com/HKUDS/nanobot/issues/5843) | **Alta** | Long sessions aguardam 10s–tens de segundos no BUILD stage | Aberto |

**#5849 — Detalhe:** A sumarização automática de contexto envia o histórico completo ao modelo sem limite de tokens, causando deadlock irreversível. O PR [#5857](https://github.com/HKUDS/nanobot/pull/5857) está em revisão para correção.

**#5843 — Detalhe:** Usuários em sessões longas experimentam delays significativos antes da chamada LLM. O PR [#5846](https://github.com/HKUDS/nanobot/pull/5846) adiciona tracing estruturado para diagnóstico.

### PRs de Correção em Andamento

| # | Severidade | Título | Target |
|---|------------|--------|--------|
| [#4819](https://github.com/HKUDS/nanobot/pull/4819) | Alta | fix(memory): replace WeakValueDictionary com plain dict | Locks de consolidação |
| [#4820](https://github.com/HKUDS/nanobot/pull/4820) | Alta | fix(runtime): reject non-string web fetch URLs | Validação de input |
| [#5641](https://github.com/HKUDS/nanobot/pull/5641) | Média | fix(webui): iOS PWA tap and status-bar fixes | Mobile PWA |

**Nota:** As PRs #4819 e #4820 estão abertas desde 2026-07-06 (>2 meses) e possuem标签 `conflict`, sugerindo necessidade de rebase ou atenção dos mantenedores.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Propostas

| # | Título | Autor | Escopo |
|---|--------|-------|--------|
| [#5845](https://github.com/HKUDS/nanobot/pull/5845) | Add Opper as built-in provider | Felixkw12 | Provedor AI adicional |
| [#5825](https://github.com/HKUDS/nanobot/pull/5825) | feat: add reusable JEV client | kkkhoo | Cliente OpenRouter Decisions |

**Análise de Roadmap:** O roadmap atual prioriza:

1. **Rich WebUI** — diagramas Mermaid, previews de arquivos/sites, analytics de uso
2. **Observabilidade** — tracing de latência, logs estruturados, comandos inspectáveis
3. **Extensibilidade** — novos provedores (Opper), clientes reutilizáveis (JEV)
4. **Estabilidade** — correção de memory leaks (WeakValueDictionary), validação de inputs

A ausência de标签 `breaking-change` nos PRs sugere compatibilidade retroativa mantida.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Problema | Evidência | Severidade |
|----------|-----------|------------|
| Deadlock em sessões longas | [#5849](https://github.com/HKUDS/nanobot/issues/5849) | Crítica |
| Latência excessiva no BUILD | [#5843](https://github.com/HKUDS/nanobot/issues/5843) | Alta |
| UX mobile confusa | [#5770](https://github.com/HKUDS/nanobot/issues/5770) — Closed | Média |
| iOS PWA responsividade | [#5641](https://github.com/HKUDS/nanobot/pull/5641) | Média |

### Cenários de Uso Emergentes

- **Sessões de debugging longas** — usuários experientes reportam necessidade de inspeção de comandos em execução
- **Análise de uso** — demanda por métricas detalhadas (ranges de uso, calendar de atividade, breakdown por modelo)
- **Rich content** — expectativa de renderização nativa de diagramas e imagens inline

**Satisfação:** A velocidade de resposta da comunidade (PRs em <24h após issue) indica saúde do ecossistema. A issue #5849 recebeu fix em ~1 dia, demonstrando processo de triagem eficaz.

---

## 8. Backlog que Merece Atenção

### PRs Antigas sem Merge (expostas >30 dias)

| # | Título | Autor | Criado | Labels | Urgência |
|---|--------|-------|--------|--------|----------|
| [#4819](https://github.com/HKUDS/nanobot/pull/4819) | fix(memory): replace WeakValueDictionary | axelray-dev | 2026-07-06 | `conflict` | **Alta** |
| [#4820](https://github.com/HKUDS/nanobot/pull/4820) | fix(runtime): reject non-string URLs | axelray-dev | 2026-07-06 | — | **Alta** |
| [#5412](https://github.com/HKUDS/nanobot/pull/5412) | fix(gateway): flush background child output | KDB-Wind | 2026-08-17 | — | Média |

### Ações Recomendadas

1. **Priorizar rebase de #4819 e #4820** — ambas corrigem memory leaks e bugs de validação, abertas há >75 dias
2. **Revisar #5857 e #5846** — correções críticas que devem ser mergeadas rapidamente
3. **Limpar conflitos de merge** — PRs com标签 `conflict` estagnam o codebase

---

## Indicadores de Saúde do Projeto

| Métrica | Valor | Avaliação |
|---------|-------|-----------|
| PRs ativas (24h) | 28 | 🟢 Muito alta |
| Issues resolvidas (24h) | 1/3 | 🟡 Moderada |
| PRs críticas abertas | 2 | 🔴 Atenção |
| PRs em conflito | 2 | 🟡 Manter monitor |
| Tempo médio de resposta | <24h | 🟢 Excelente |

---

*Relatório gerado em 2026-09-22 com dados do GitHub HKUDS/nanobot.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent
## NousResearch/hermes-agent — 2026-09-22

---

## 1. Panorama do Dia

O projeto Hermes Agent demonstra **atividade excepcional** nas últimas 24 horas, com 50 issues e 50 PRs atualizados. A release **v0.21.4** foi publicada ontem (21/09), consolidando aproximadamente 1.800 PRs mesclados desde a v0.21.3 — indicando um ciclo de desenvolvimento extremamente produtivo. O volume de issues abertas (47) versus fechadas (3) sugere uma taxa de resolução relativamente baixa no curto prazo, com múltiplos debates técnicos em andamento. A comunidade está particularmente ativa em discussões sobre APIs de voz em tempo real, integração com plataformas de mensagens e bugs críticos no desktop. O estado geral do projeto reflete uma base de código complexa em evolução rápida, com desafios de estabilidade em componentes de backend e plataformas.

---

## 2. Lançamentos

### 🎉 v2026.9.21 — Hermes Agent v0.21.4

| Informação | Detalhe |
|------------|---------|
| **Data de Release** | 21 de setembro de 2026 |
| **Tag** | v2026.9.21 |
| **Tipo** | Patch release |
| **PRs Consolidados** | ~1.800 |

**Mudanças Incluídas:**
- Consolidação de todas as contribuições mescladas no período v0.21.3 → v0.21.4
- Estável para consumidores downstream: imagens Docker, Hermes Cloud e deployments hospedados
- Não foram documentadas *breaking changes* nesta versão

**Nota de Migração:**
- As notas completas e curadas para esta janela foram diferidas; consumidores que dependem de detalhes específicos devem acompanhar o changelog completo no repositório

🔗 [Release v0.21.4](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.9.21)

---

## 3. Progresso do Projeto

### PRs Recentemente Mesclados/Fechados

| # | PR | Tipo | Impacto |
|---|-----|------|---------|
| #118529 | feat(catalog): add hermes-achievements | Feature | Adiciona plugin de conquistas ao catálogo da comunidade |
| #118553 | docs: require project and category on Linear issues | Docs | Melhora processo de rastreamento de PRs com Linear |

### PRs Abertos de Destaque (requerem atenção/revisão)

| # | PR | Autor | Tipo | Prioridade | Descrição |
|---|-----|-------|------|------------|-----------|
| [#118597](https://github.com/NousResearch/hermes-agent/pull/118597) | hermes update repairs system gateway unit | teknium1 | Bug | P1 | Repara unidades gateway que não conseguem estacionar em exit 78 |
| [#118590](https://github.com/NousResearch/hermes-agent/pull/118590) | fix(gateway): converge Discord slash-command sync | AWEOFIJ | Bug | P2 | Corrige re-registro excessivo de comandos Discord |
| [#118592](https://github.com/NousResearch/hermes-agent/pull/118592) | fix(desktop): keep startup alive during update wait | IvanJS17 | Bug | P2 | Corrige falha falsa de inicialização durante updates |
| [#118586](https://github.com/NousResearch/hermes-agent/pull/118586) | feat(whatsapp): processing-status reactions | Jaylouisw | Feature | P3 | Adiciona reações 👀→✅/❌ para mensagens em processamento |
| [#118587](https://github.com/NousResearch/hermes-agent/pull/118587) | feat(desktop): Simple/Advanced interface mode | OutThisLife | Feature | P3 | Novo modo simplificado de interface |
| [#118588](https://github.com/NousResearch/hermes-agent/pull/118588) | write_file keeps known unchanged content | teknium1 | Bug | P2 | Corrige recusa de escrita em arquivos inalterados |
| [#118596](https://github.com/NousResearch/hermes-agent/pull/118596) | feat(staging-queue): Message Staging Queue Phase 1 | jcbyl | Feature | P3 | Implementação de fila de staging de mensagens |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários)

| # | Título | Comentários | 👍 | Status | Tipo |
|---|--------|------------|-----|--------|------|
| [#88584](https://github.com/NousResearch/hermes-agent/issues/88584) | Automated Nous integration is blocked | **127** | 0 | OPEN | Bug/Integration |
| [#77111](https://github.com/NousResearch/hermes-agent/issues/77111) | [RFC] RealtimeVoiceProvider ABC | **27** | 2 | OPEN | Feature/Architecture |
| [#118029](https://github.com/NousResearch/hermes-agent/issues/118029) | feat(desktop): one pinned, verified rollout control plane for managed SSH | **9** | 0 | OPEN | Feature/Security |

### Análise dos Temas Principais

**1. Integração Nous bloqueada (#88584) — 127 comentários**
Este é o tema de maior debate, indicando uma questão crítica de integração. A fusão programada Nous→Enterkey apresenta conflitos em `cron/jobs.py`. O painel de atualização permanece na última versão testada do Enterkey. A complexidade desta issue (127 comentários) sugere disputas arquiteturais significativas ou dependências não resolvidas entre sistemas.

**2. RFC: RealtimeVoiceProvider ABC (#77111) — 27 comentários**
Quatro PRs concorrentes tentam integrar a mesma categoria de funcionalidade (voz duplex), levantando a necessidade de uma interface abstrata (ABC) em vez de uma fila de merge. A comunidade reconhece que quando 3+ PRs competem pela mesma categoria, deve-se projetar um ABC + orquestrador primeiro. Este é um sinal claro de evolução arquitetural importante.

**3. SSH Rollout Control Plane (#118029) — 9 comentários**
Demanda por um plano de controle de rollout verificado para instalações SSH gerenciadas, com dependência de segurança corporativa (#92618).

---

## 5. Bugs e Estabilidade

### 🛑 P0/P1 — Críticos (requerem ação imediata)

| # | Título | Componente | Comentários | Status |
|---|--------|------------|-------------|--------|
| [#71733](https://github.com/NousResearch/hermes-agent/issues/71733) | Desktop: user prompts invisíveis, só replies do assistant | Desktop/Sessions | 3 | OPEN |
| [#118505](https://github.com/NousResearch/hermes-agent/issues/118505) | kanban gc com dias negativos deleta TODO histórico | CLI | 2 | OPEN |
| [#118026](https://github.com/NousResearch/hermes-agent/issues/118026) | Windows: backend crash por fcntl.F_RDLCK ausente | Desktop/Windows | 2 | OPEN |
| [#118487](https://github.com/NousResearch/hermes-agent/issues/118487) | Discord watchdog morre após primeiro socket_closed | Gateway/Discord | 3 | OPEN |
| [#118282](https://github.com/NousResearch/hermes-agent/issues/118282) | /update: fleet restart deixa Telegram deaf | Gateway/Telegram | 1 | OPEN |

### ⚠️ P2 — Altos (impacto significativo)

| # | Título | Componente | Comentários | Status |
|---|--------|------------|-------------|--------|
| [#96355](https://github.com/NousResearch/hermes-agent/issues/96355) | delegate_task retorna "completed" quando validação falha | Tools/Delegate | 8 | OPEN |
| [#110126](https://github.com/NousResearch/hermes-agent/issues/110126) | Truncation é falha sistêmica em 4 subsistemas | Agent/DeepSeek | 4 | OPEN |
| [#107516](https://github.com/NousResearch/hermes-agent/issues/107516) | Context compression retry infinito sem backoff | Agent/Qwen | 4 | OPEN |
| [#70108](https://github.com/NousResearch/hermes-agent/issues/70108) | Desktop renderiza replies duplicados | Desktop | 7 | OPEN |
| [#82052](https://github.com/NousResearch/hermes-agent/issues/82052) | xAI 403 por token OAuth não renovado | Agent/xAI | 5 | OPEN |
| [#118481](https://github.com/NousResearch/hermes-agent/issues/118481) | Desktop mostra "Result unavailable" mesmo com dados no DB | Desktop | 2 | OPEN |
| [#113222](https://github.com/NousResearch/hermes-agent/issues/113222) | Async delegate_task batch nunca reporta finalização | Agent/Tools | 2 | OPEN |

### 📋 P3 — Médios

| # | Título | Componente | Status |
|---|--------|-------------|--------|
| [#118484](https://github.com/NousResearch/hermes-agent/issues/118484) | truncate_message excede limite com fence sem newline | Gateway | OPEN |
| [#113673](https://github.com/NousResearch/hermes-agent/issues/113673) | disk-cleanup deleta dirs PostgreSQL necessários | Plugins | OPEN |
| [#117915](https://github.com/NousResearch/hermes-agent/issues/117915) | compression.threshold_tokens ignora ratio em modelos 1M | CLI/Compression | OPEN |
| [#97981](https://github.com/NousResearch/hermes-agent/issues/97981) | relay_llm._complete_logical quebra handles em turns concorrentes | Agent/Telemetry | OPEN |
| [#118538](https://github.com/NousResearch/hermes-agent/issues/118538) | OMH pre_tool_call veta TODAS tools no multiplex gateway | Plugins/Profiles | OPEN |
| [#118535](https://github.com/NousResearch/hermes-agent/issues/118535) | cron manual run com extra_prompt é no-op | Cron | OPEN |

### Padrões de Bugs Identificados

1. **Desktop (6 issues críticas):** Problemas recorrentes com rendering de UI, sessões e estado
2. **Message Delivery (3 issues):** Problemas persistentes com Discord, Telegram e delivery em geral
3. **Session State (4 issues):** Vazamento ou corrupção de estado em sessões longas
4. **Compression/Truncation (3 issues):** Falhas sistêmicas em múltiplos subsistemas

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features em Proposta/Aprovação

| # | Título | Plataforma | P | Sinal Estratégico |
|---|--------|------------|---|-------------------|
| [#118029](https://github.com/NousResearch/hermes-agent/issues/118029) | Control plane para SSH installations | Desktop | P3 | Enterprise/Managed deployments |
| [#77111](https://github.com/NousResearch/hermes-agent/issues/77111) | RealtimeVoiceProvider ABC | Agent/Plugins | P3 | Voice AI é prioridade |
| [#118586](https://github.com/NousResearch/hermes-agent/pull/118586) | WhatsApp processing-status reactions | WhatsApp | P3 | Feature parity entre plataformas |
| [#118587](https://github.com/NousResearch/hermes-agent/pull/118587) | Simple/Advanced interface mode | Desktop | P3 | UX differentiation para novos usuários |
| [#118596](https://github.com/NousResearch/hermes-agent/pull/118596) | Message Staging Queue Phase 1 | Gateway | P3 | Confiabilidade de message delivery |
| [#118565](https://github.com/NousResearch/hermes-agent/pull/118565) | WhatsApp explicit presence endpoint | WhatsApp | P3 | Estados de presença nativos |
| [#118388](https://github.com/NousResearch/hermes-agent/issues/118388) | Doctor/gateway: detectar tokens duplicados | CLI/Gateway | P2 | Observabilidade e diagnostics |
| [#118593](https://github.com/NousResearch/hermes-agent/pull/118593) | plugin-catalog: provider-usage | Plugin Catalog | P3 | Extensibilidade da comunidade |

### Sinais de Roadmap

1. **Voice/Duplex Communication:** RFC ativa com 4 PRs competindo — interface ABC em desenvolvimento
2. **Enterprise/Managed Deployments:** Demanda por SSH control plane e security interlock (#92618)
3. **Multi-Platform Parity:** Esforço contínuo para feature parity entre WhatsApp, Discord, Telegram, Slack
4. **Plugin Ecosystem:** Crescimento do catálogo com submissions da comunidade

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Reportadas

| Dor | Frequência | Severidade | Cenário |
|-----|------------|------------|---------|
| **Desktop instável em sessões longas** | Alta | P0-P2 | VPS com 200+ mensagens; estados corrompidos, rendering duplo |
| **OAuth tokens expiram silenciosamente** | Média | P1 | xAI com sessões que começam a falhar após horas |
| **Truncation em cascata** | Alta | P2 | DeepSeek V4, Qwen; 35+ issues relacionadas |
| **Windows compatibility** | Emergente | P0 | Backend crash na inicialização para usuários Windows |
| **Compression retry infinito** | Média | P2 | Modelos locais sobrecarregados travam o agent |

### Cenários de Uso Identificados

1. **Assistentes pessoais em VPS:** Sessões longas com múltiplos providers (xAI, DeepSeek, Qwen)
2. **Deployments enterprise:** SSH gerenciado, múltiplos profiles, gate de segurança
3. **Multi-plataforma:** Discord, Telegram, WhatsApp, Slack — parity em reações e presence
4. **Cron jobs automatizados:** Integração com fluxos de trabalho externos

### Indicadores de Satisfação/Insatisfação

| Indicador | Observação |
|-----------|------------|
| Volume de Issues | Alto (50/24h) — pode indicar tanto problemas quanto engajamento |
| Issues antigas não resolvidas | #70108 (julho), #71733 (julho) — bugs de desktop persistindo |
| PRs backlogados | 3 PRs de junho ainda abertos (#45755, #43340, #43310, #39845, #43233) |
| Razão comments/issue | Alta em #88584 (127) e #77111 (27) — debates técnicos intensos |

---

## 8. Backlog que Merece Atenção

### Issues Antigas (>30 dias sem resolução)

| # | Título | Criado | Atualizado | Prioridade | Motivo da Pendência |
|---|--------|--------|------------|------------|---------------------|
| [#70108](https://github.com/NousResearch/hermes-agent/issues/70108) | Desktop: duplicate replies | 2026-07-23 | 2026-09-21 | P2 | needs-repro |
| [#71733](https://github.com/NousResearch/hermes-agent/issues/71733) | Desktop: user prompts invisíveis | 2026-07-26 | 2026-09-21 | **P1** | needs-repro |
| [#82052](https://github.com/NousResearch/hermes-agent/issues/82052) | xAI OAuth token refresh | 2026-08-08 | 2026-09-21 | P2 | needs-decision |
| [#96355](https://github.com/NousResearch/hermes-agent/issues/96355) | delegate_task schema validation | 2026-08-27 | 2026-09-21 | P2 | needs-repro |

### PRs Antigos com Necessidade de Review

| # | Título | Criado | Tipo | Prioridade |
|---|--------|--------|------|------------|
| [#45755](https://github.com/NousResearch/hermes-agent/pull/45755) | feat(approval): block sed/perl -i on .yaml | 2026-06-13 | Security | P3 |
| [#43340](https://github.com/NousResearch/hermes-agent/pull/43340) | fix(profiles): clear macOS immutable flag | 2026-06-10 | Bug | P3 |
| [#43310](https://github.com/NousResearch/hermes-agent/pull/43310) | fix(desktop): restore cron jobs position | 2026-06-10 | Bug | P3 |
| [#39845](https://github.com/NousResearch/hermes-agent/pull/39845) | fix(desktop): auto-retry npm install | 2026-06-05 | Bug | P2 |
| [#43233](https://github.com/NousResearch/hermes-agent/pull/432

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório de Projeto: PicoClaw
## sipeed/picoclaw — 2026-09-22

---

## 1. Panorama do dia

O projeto PicoClaw apresenta **atividade moderada** na data de hoje, com 3 issues e 3 pull requests atualizados nas últimas 24h. A atividade concentra-se principalmente em melhorias de estabilidade e suporte a novos provedores, com destaque para um PR de correção de autenticação OAuth que resolve um problema de scopes hardcoded. Não houve lançamentos de novas versões, indicando uma fase de maturação do código antes de próxima release. O projeto demonstra saúde geral com boa resposta da comunidade em issues técnicas.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto nãoemitiu novas versões neste período. A versão mais recente conhecida permanece `0.3.1` (nightly build).

> ⚠️ **Nota:** Para acompanhar releases, consulte [sipeed/picoclaw/releases](https://github.com/sipeed/picoclaw/releases)

---

## 3. Progresso do projeto

### PR Fechado
| # | Título | Status | Impacto |
|---|--------|--------|---------|
| #3384 | Misplaced PR, please ignore | ❌ Fechado (spam) | Sem impacto — PR inválido de agente IA em repo incorreto |

### PRs Abertos em Merge
| # | Título | Prioridade | Impacto |
|---|--------|------------|---------|
| **#3378** | `fix(auth): use configured scopes instead of hardcoded default` | 🔴 Alta | **Corrige bug crítico de OAuth** — Token refresh sempre enviava scopes hardcoded (`"openid profile email"`), ignorando configuração do provider. Afeta todos os provedores OAuth customizados. |

📌 **Recomendação:** Priorizar review e merge do PR #3378 — é uma correção de segurança e funcionalidade em autenticação.

| # | Título | Status | Complexidade |
|---|--------|--------|--------------|
| #3354 | `feat(irc): assemble IRCv3 multiline messages` | Em revisão | Média-alta |

> Links: [PR #3378](https://github.com/sipeed/picoclaw/pull/3378) · [PR #3354](https://github.com/sipeed/picoclaw/pull/3354)

---

## 4. Temas quentes da comunidade

### Issues com maior engajamento

| # | Título | Reações | Comentários | Tendência |
|---|--------|---------|-------------|-----------|
| **#3281** | Web UI chat input is very laggy when history has long | 👍 2 | 💬 13 | 🔴 Ativa |
| #3365 | QQ channel fails with 401 Authorization error | 👍 1 | 💬 3 | ✅ Resolvida |

### Análise de demanda

**Issue #3281 — Performance do Web UI**
- **Severidade:** Alta (UX crítico)
- **Cenário:** Quando há histórico de chat longo no Web UI, o input se torna extremamente laggy
- **Ambiente:** PicoClaw 0.3.1, Go 1.25.11
- **Patrono:** xpader (comunidade ativa)
- **Análise:** Com 13 comentários, é a issue mais discutida. Indica possível memory leak ou algoritimo O(n²) no gerenciamento de histórico. Requer profiling do frontend e otimização de renderização.

> 🔗 [Issue #3281](https://github.com/sipeed/picoclaw/issues/3281)

---

## 5. Bugs e estabilidade

### Issue Aberta
| # | Severidade | Título | Idade | Status |
|---|------------|--------|-------|--------|
| **#3281** | 🔴 **Alta** | Web UI chat input laggy com histórico longo | 63 dias | Aberta |

### Issue Resolvida (recém-fechada)
| # | Severidade | Título | Causa raiz |
|---|------------|--------|------------|
| **#3365** | 🟡 Média | QQ channel 401 Authorization error | Incompatibilidade entre botgo v0.2.1 e resty ≥ v2.17 |

**Análise de estabilidade:**
- **Métricas positivas:** Bug de QQ channel fechado (issue de第三方 integração resolvida)
- **Métricas de atenção:** Lag no Web UI persiste há 63 dias — potencial memory leak em gerenciamento de estado
- **Recomendação:** Alocar tempo de engenharia para investigar #3281 com urgência

> Links: [#3281](https://github.com/sipeed/picoclaw/issues/3281) · [#3365](https://github.com/sipeed/picoclaw/issues/3365)

---

## 6. Pedidos de features e sinais de roadmap

### Nova feature request
| # | Título | Autor | Complexidade | Relevância estratégica |
|---|--------|-------|--------------|------------------------|
| **#3366** | Add support for OpenAI compatible providers | ItachiSan | Média | 🟢 Alta |

**Detalhes:**
- Permite integração com routers auto-hospedados (ex: 9Router)
- Implementação sugerida: copiar estrutura do provider OpenAI existente
- **Impacto estratégico:** Amplia ecossistema deLLMs suportados, reduz dependência de APIs oficiais

### Feature em desenvolvimento
| # | Título | Status |
|---|--------|--------|
| #3354 | IRCv3 multiline messages support | PR aberto |

> 🔗 [Issue #3366](https://github.com/sipeed/picoclaw/issues/3366) · [PR #3354](https://github.com/sipeed/picoclaw/pull/3354)

---

## 7. Resumo de feedback dos usuários

### Dores reportadas

| Categoria | Issue | Descrição |
|-----------|-------|-----------|
| ⚡ Performance | #3281 | Input laggy no Web UI com histórico longo — prejudica experiência em sessões ativas |
| 🔐 Integração | #3365 (resolvida) | Falha de autenticação em QQ channel — expôs fragilidade em第三方 integrações |
| 🔧 Configuração | #3378 | Scopes OAuth hardcoded limitam customização de provedores |

### Padrões identificados

1. **Usuários ativos** relatam problemas de **performance em interfaces web** — indica adoção significativa do modo Web UI
2. **Comunidade de auto-hosting** demonstra interesse em **provedores customizados** (Issue #3366)
3. **Integrações regionais** (QQ) ainda apresentam **instabilidade** com atualizações dedependências

### Satisfação geral
📊 **Média móvel positiva** — comunidade engajada (13+ comentários em issues técnicas), bugs críticos sendo corrigidos rapidamente (PR #3378 em 10 dias).

---

## 8. Backlog que merece atenção

### Issues sem resposta há >30 dias
*(Nenhuma encontrada no período de 24h)*

### Items de alta prioridade para triagem

| # | Título | Idade | Prioridade | Ação recomendada |
|---|--------|-------|------------|------------------|
| #3281 | Web UI chat laggy | 63 dias | 🔴 Alta | Requer investigação de performance + engenharia |
| #3366 | OpenAI compatible providers | 18 dias | 🟡 Média | Avaliar viabilidade técnica e priorizar no roadmap |
| #3378 | OAuth scopes hardcoded | 10 dias | 🔴 Alta | **Merge urgente** — afeta todos os provedores OAuth customizados |

### Lista de watching
```
📌 #3378 — fix(auth): use configured scopes instead of hardcoded default
📌 #3281 — Web UI chat input laggy
📌 #3366 — Add support for OpenAI compatible providers
📌 #3354 — feat(irc): IRCv3 multiline messages
```

---

## Métricas de Saúde do Projeto (2026-09-22)

| Indicador | Valor | Status |
|-----------|-------|--------|
| Issues ativas (24h) | 2 | 🟢 Normal |
| PRs abertos (24h) | 2 | 🟢 Normal |
| PRs merged/fechados (24h) | 1 | 🟢 Normal |
| Releases (24h) | 0 | 🟡 Pausado |
| Bug crítico aberto | 1 (#3281) | 🔴 Atenção |
| Ratio fechou/abertas | 33% | 🟡 Observe |

---

**Relatório gerado em:** 2026-09-22  
**Repositório:** [sipeed/picoclaw](https://github.com/sipeed/picoclaw)  
**Versão base:** 0.3.1 (nightly)

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-09-22

---

## 1. Panorama do dia

O projeto IronClaw mantém atividade moderada e focada em estabilidade. Nas últimas 24h, o repositório registrantou **2 PRs merged** e **1 issue aberta**, sem novos lançamentos formais. A atividade centralizou-se em ajustes de preparação para release (v1.4.1-rc.1) e correção de bugs críticos em OAuth para extensões Gmail/Calendar. O volume de atividade é típico de projetos em fase de maturação pré-release, indicando foco em qualidade e não em expansão de funcionalidades.

---

## 2. Lançamentos

**Nenhum novo lançamento formal** foi publicado nas últimas 24h.

| Release | Status | Detalhes |
|---------|--------|----------|
| — | — | Sem releases nas últimas 24h |

**Nota:** A preparação para `1.4.1-rc.1` foi concluída via PR #8105, mas o tag formal ainda não aparece como release no GitHub. A release candidate deve ser publicada em breve.

🔗 [nearai/ironclaw PR #8105](https://github.com/nearai/ironclaw/pull/8105)

---

## 3. Progresso do projeto

Dois PRs foram fechados/merged nas últimas 24h, ambos de alta relevância operacional:

### PR #8105 — `chore(release): cut 1.4.1-rc.1` ✅ MERGED
- **Autor:** henrypark133
- **Impacto:** Bump de versão para `1.4.1-rc.1`
- **Significância:** Necessário para que o workflow `Cut Ironclaw Release` possa criar o tag `ironclaw-v1.4.1-rc.1` no commit de merge
- **Blocker identificado:** O script `cut_ironclaw_release.py` valida que a versão do candidate manifest corresponda à versão solicitada — o bump precisou ser merged antes do tag

🔗 [nearai/ironclaw PR #8105](https://github.com/nearai/ironclaw/pull/8105)

### PR #8102 — `fix(extensions): resolve provider-instance readiness live, administrator configuration first` ✅ MERGED
- **Autor:** henrypark133
- **Impacto:** Correção de bug crítico em extensões OAuth
- **Cenário afetado:** Gmail/Google Calendar não ativavam quando configurados via **Web UI** (configuração de administrador), apenas funcionavam com variáveis de ambiente
- **Causa raiz:** OAuth completava consentimento, código e troca de token, mas a ativação falhava com erro `Provider...` por problema de readiness do provider-instance
- **Severidade:** Alta — afetava qualquer deployment que usasse OAuth via interface web

🔗 [nearai/ironclaw PR #8102](https://github.com/nearai/ironclaw/pull/8102)

---

## 4. Temas quentes da comunidade

### Issues com atividade recente

**#8106 — [OPEN] Daily ironclaw failure taxonomy — 2026-09-21**
- **Autor:** pranavraja99
- **Comentários:** 0 | **Reações:** 0
- **Tópicos levantados:**
  - Análise de failures diária para benchmark **officeqa** (47 tarefas non-pass)
  - Erros predominantes são de **qualidade do modelo** (model-quality errors)
  - Exemplo: DeepSeek-V4-Flash apresenta erros de navegação
- **Interpretação:** Issue de monitoramento automático de quality gates, não uma reclamação de usuário, mas sim um indicador interno de regressão de performance

🔗 [nearai/ironclaw Issue #8106](https://github.com/nearai/ironclaw/issues/8106)

> **Análise:** A issue de taxonomy de failures é um mecanismo de tracking contínuo. O volume de 47 non-pass em officeqa sugere que há espaço para otimização de prompts ou fine-tuning do modelo utilizado como baseline.

---

## 5. Bugs e estabilidade

### Bugs reportados/resolvidos nas últimas 24h

| Bug | Severidade | Status | Origem |
|-----|------------|--------|--------|
| Gmail/Calendar não ativavam via Web UI (OAuth) | 🔴 **Alta** | ✅ **RESOLVIDO** (PR #8102) | Configuração de administrador via Web UI vs env vars |

**Detalhamento do bug corrigido:**
- **Sintoma:** OAuth completava normalmente (consentimento → código → token exchange), mas a ativação do provider falhava
- **Causa:** Problema na resolução de readiness do provider-instance para configurações feitas via interface web
- **Escopo:** deployments que usavam Google OAuth via UI administrativa
- **Solução:** Implementado check de readiness em tempo real (`live`) com prioridade na configuração de administrador

**Métricas de estabilidade:**
- Bugs críticos abertos: 0
- Bugs de alta severidade abertos: 0
- Bugs resolvidos nas últimas 24h: 1

---

## 6. Pedidos de features e sinais de roadmap

**Nenhuma issue de feature request** foi aberta nas últimas 24h.

### Sinais de roadmap observados:

1. **Pipeline de releases automatizado** — A existência do workflow `Cut Ironclaw Release` com validação de versão (via `cut_ironclaw_release.py`) indica foco em **CD (Continuous Deployment)** maduro e releases reprodutíveis.

2. **Suporte multi-configuração OAuth** — A correção em #8102 sugere que a equipe está eliminando diferenças de comportamento entre configuração via env vars e via Web UI — possível sinal de prioridade em **experiência de administrador**.

3. **Quality benchmarking contínuo** — O sistema de taxonomy diária de failures (#8106) indica que o projeto mantém **benchmarks internos** (officeqa) para monitorar regressões de qualidade em agentes de IA.

---

## 7. Resumo de feedback dos usuários

### Observações de feedback implícito

**Usuários/administradores de deployments:**
- Bug reportado (implicitamente via detecção interna) em OAuth via Web UI — indica que há **usuários reais** usando extensões Gmail/Calendar em produção
- A configuração via Web UI sendo preferida por administradores sugere **demanda por UI** e não apenas CLI/config files

**Desenvolvedores de agentes:**
- Taxonomy de failures mostrando que 47/47 tasks non-pass em officeqa são "genuine model-quality errors" — isso é um **sinal de que a benchmark está sendo usada ativamente** para avaliar agentes em cenários de QA de escritório

### Lacunas de feedback identificadas

- A issue #8106 tem **0 comentários**, sugerindo que o mecanismo de taxonomy é **automático/interno** e não há debate comunitário aberto
- **Ausência de feedback explícito de usuários finais** nas últimas 24h — típico de projetos de infraestrutura B2B onde usuários reportam via canais internos

---

## 8. Backlog que merece atenção

### Issues sem resposta recente

| Issue | Idade | Prioridade | Motivo da atenção |
|-------|-------|------------|-------------------|
| #8106 | 1 dia | ⚠️ Média-Alta | Taxonomy diária pode acumular issues se não houver ação sobre padrões de failure |

### Recomendação de atenção

**Issue #8106 — Daily ironclaw failure taxonomy** merece monitoramento contínuo. Embora seja um mecanismo de tracking automático, o acúmulo de failures por categoria (navegação, compreensão, etc.) pode indicar:

- Necessidade de **prompt engineering** para o modelo base
- Gaps em **tool definitions** para OfficeQA
- Possível necessidade de **novos examples** no dataset de treinamento

---

## Indicadores de saúde do projeto

| Métrica | Valor | Status |
|---------|-------|--------|
| PRs merged nas últimas 24h | 2 | ✅ Positivo |
| Issues abertas nas últimas 24h | 1 | ✅ Neutro |
| Releases nas últimas 24h | 0 | ⚠️ Sem novo stable |
| Bugs críticos em aberto | 0 | ✅ Positivo |
| Tempo médio de resolução (PRs) | < 3 dias | ✅ Positivo (PR #8102 levou ~3 dias) |

---

**Próximos marcos esperados:**
- Publicação formal da release `1.4.1-rc.1` (tag criado automaticamente após merge de #8105)
- Acompanhamento de taxonomy de failures em #8106 para identificar padrões

🔗 [Repositório IronClaw](https://github.com/nearai/ironclaw) | 🔗 [Benchmarks](https://nearai.github.io/benchmarks/)

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório de Projeto CoPaw — 2026-09-22

## 1. Panorama do Dia

O projeto CoPaw apresenta **atividade muito alta** nas últimas 24h, com 32 PRs e 17 issues atualizadas. A equipe demonstrou forte ritmo de desenvolvimento, com múltiplas correções críticas merged — incluindo dois patches para o `DoomLoopGate` e um fix para crash do host no Windows. Não houve releases formais, mas o código principal avançou significativamente. A comunidade reportou um problema de **segurança grave** (prompt injection persistente) e há pelo menos 3 bugs de severidade alta/aberta sem resolução imediata. O volume de PRs de infraestrutura (CI/CD, testes, cobertura) indica maturidade no processo de desenvolvimento.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto não emitiu novas versões desde o período anterior. A última versão estável referenciada nos issues é `2.2.1`, com betas `2.2.1b1` e `2.2.2b1/b3` em circulação. Recomenda-se monitorar o repositório para anúncios de release.

---

## 3. Progresso do Projeto

### PRs Importantes Merged/Fechadas

| # | PR | Descrição | Impacto |
|---|-----|-----------|---------|
| [#7919](https://github.com/agentscope-ai/CoPaw/pull/7919) | fix: doom loop escalation | Impede escalação prematura para TERMINATE sem nova evidência de tool-call | **Crítico** |
| [#7906](https://github.com/agentscope-ai/CoPaw/pull/7906) | fix(loop): prevent stale doom-loop escalation | Variação do fix acima — garante que textos sem tool-call reseteiem estado repetitivo | **Crítico** |
| [#7915](https://github.com/agentscope-ai/CoPaw/pull/7915) | fix(responses): default function tools to non-strict | Evita parâmetros opcionais se tornarem obrigatórios após sanitização de schema | **Alto** |
| [#7913](https://github.com/agentscope-ai/CoPaw/pull/7913) | chore(deps): bump agentscope to 2.0.8 | Atualização de dependência core | **Manutenção** |
| [#7899](https://github.com/agentscope-ai/CoPaw/pull/7899) | feat(providers): unify model discovery, pricing, selection | Unificação da camada de provedores de modelo | **Arquitetural** |
| [#7920](https://github.com/agentscope-ai/CoPaw/pull/7920) | fix: resolve default thinking and streamline model onboarding | Resolve indicador de thinking oculto e melhora seleção de modelo | **UX** |
| [#7911](https://github.com/agentscope-ai/CoPaw/pull/7911) | test(unit): coverage sprint batch 3 | +2720 casos de teste, coverage: 70.51% → 73.79% (+3.28pp) | **Qualidade** |
| [#7326](https://github.com/agentscope-ai/CoPaw/pull/7326) | feat(ci): split nightly E2E into 3 shards | Paralelização de E2E (p0/p1/p2), fail-closed summary | **CI/CD** |
| [#7918](https://github.com/agentscope-ai/CoPaw/pull/7918) | docs: remove accidentally committed design docs | Remove 877 linhas de docs internos do repo | **Limpeza** |
| [#7846](https://github.com/agentscope-ai/CoPaw/pull/7846) | feat: improve session list details and grouping | Nomes truncados com ellipsis, consolidação de channel/source | **UX** |

### PRs Abertas de Destaque

| # | PR | Descrição | Status |
|---|-----|-----------|--------|
| [#7874](https://github.com/agentscope-ai/CoPaw/pull/7874) | feat(pawapp): redesign SDK and app control plane | Novo plano de controle para PawApps | **Em revisão** |
| [#7923](https://github.com/agentscope-ai/CoPaw/pull/7923) | feat(scroll): age out tool_result blocks | Política de retenção para blocos de tool_result | **Aberta** |
| [#5992](https://github.com/agentscope-ai/CoPaw/pull/5992) | Add per-session model overrides | Overrides de modelo por sessão | **Under Review** |
| [#7910](https://github.com/agentscope-ai/CoPaw/pull/7910) | fix(shell): isolate Windows command consoles | Adiciona CREATE_NO_WINDOW no Windows | **Aberta** |
| [#7917](https://github.com/agentscope-ai/CoPaw/pull/7917) | fix(console): improve API loading on slow networks | Compressão de payloads +1KB | **Aberta** |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários + reações)

| # | Título | Tipo | Comentários | 👍 | Prioridade |
|---|--------|------|-------------|----|------------|
| [#7859](https://github.com/agentscope-ai/QwenPaw/issues/7859) | Persistent prompt injection — delete all skills | Bug (Segurança) | 5 | 0 | **Crítica** |
| [#7628](https://github.com/agentscope-ai/QwenPaw/issues/7628) | Context compaction exceeds provider budget | Bug | 4 | 0 | **Alta** |
| [#7905](https://github.com/agentscope-ai/QwenPaw/issues/7905) | DoomLoopGate escalates without tool-call evidence | Bug | 3 | 0 | **Alta** |
| [#3419](https://github.com/agentscope-ai/QwenPaw/issues/3419) | 京东云 Coding Plan — execução interrompida | Bug | 3 | 0 | **Alta** |
| [#7431](https://github.com/agentscope-ai/QwenPaw/issues/7431) | Codex backend sem streaming → empty response | Bug | 3 | 0 | **Média** |
| [#4974](https://github.com/agentscope-ai/QwenPaw/issues/4974) | Feature: avatar por Agent | Enhancement | 2 | 2 | **UX** |
| [#7841](https://github.com/agentscope-ai/QwenPaw/issues/7841) | Console UI carrega antes do backend | Bug | 2 | 0 | **Alta** |
| [#7882](https://github.com/agentscope-ai/QwenPaw/issues/7882) | OpenCode "free" models retornam 403 | Bug | 2 | 0 | **Média** |

### Análise dos Temas

1. **Segurança em destaque**: O issue #7859 sobre prompt injection persistente é o mais preocupante — uma instrução maliciosa está sendo injetada em system-reminders que instrui o agente a deletar todos os skills. Este é um вектор de ataque de confiança (trusting trust) que não foi totalmente resolvido.

2. **DoomLoopGate controversy**: Dois bugs relacionados (#7905 e #7628) indicam que a lógica de detecção de loops está instável. A correção rápida (#7919, #7906) foi merged, mas o problema subjacente de context compaction e escalação prematura persiste.

3. **Provedores de terceiros problemáticos**: Múltiplas issues envolvem OpenCode (#7882, #7531), Codex (#7431) e provedores chineses (#3419). Isso sugere desafios na abstração de provedores.

4. **Feature request popular**: O enhancement #4974 (avatares) recebeu 2 👍 — a maior contagem de reações deste período — indicando demanda por personalização visual.

---

## 5. Bugs e Estabilidade

### Por Severidade

#### 🔴 Críticos (não resolvidos)

| # | Bug | Descrição | Link |
|---|-----|-----------|------|
| #7859 | Persistent prompt injection | Instrução maliciosa injectada em system-reminders instrui delete de skills. 20+ turns. | [Issue #7859](https://github.com/agentscope-ai/QwenPaw/issues/7859) |

#### 🟠 Altos

| # | Bug | Descrição | Link |
|---|-----|-----------|------|
| #7628 | Context compaction budget overflow | Compactação de contexto pode exceder limite do provider e falhar turns ativos | [Issue #7628](https://github.com/agentscope-ai/QwenPaw/issues/7628) |
| #7905 | DoomLoopGate escalates sem tool-call | Resolvido em #7919/#7906 (merged) | [Issue #7905](https://github.com/agentscope-ai/QwenPaw/issues/7905) |
| #3419 | JD Cloud Coding Plan — interrupção | Sessão cai durante tool execution | [Issue #3419](https://github.com/agentscope-ai/QwenPaw/issues/3419) |
| #7841 | Console UI blank na inicialização | Lista de modelos e plugins não carregam | [Issue #7841](https://github.com/agentscope-ai/QwenPaw/issues/7841) |
| #7866 | File-area tab mostra conteúdo antigo | Preview do session card atualiza, mas tab não | [Issue #7866](https://github.com/agentscope-ai/QwenPaw/issues/7866) |
| #7908 | Windows: Ctrl event crash host | Child process pode matar QwenPaw host | [Issue #7908](https://github.com/agentscope-ai/QwenPaw/issues/7908) |

#### 🟡 Médios

| # | Bug | Descrição | Link |
|---|-----|-----------|------|
| #7431 | Codex streaming — empty response | Provider com Responses API sem streaming causa uso zero | [Issue #7431](https://github.com/agentscope-ai/QwenPaw/issues/7431) |
| #7882 | OpenCode "free" → 403 FreeTierError | UI marca como free, mas API bloqueia | [Issue #7882](https://github.com/agentscope-ai/QwenPaw/issues/7882) |
| #7531 | OpenCode missing x-opencode-session | API requer header específico | [Issue #7531](https://github.com/agentscope-ai/QwenPaw/issues/7531) |
| #7907 | Responses API nullable removal → strict | Parâmetros opcionais se tornam obrigatórios | [Issue #7907](https://github.com/agentscope-ai/QwenPaw/issues/7907) |
| #7921 | OMP SKILL.md missing YAML frontmatter | Skill não registra mas aparece no listing | [Issue #7921](https://github.com/agentscope-ai/QwenPaw/issues/7921) |

### Resumo de Estabilidade

- **Bugs resolvidos (24h):** 9 ( DoomLoopGate, OpenCode header, Responses API strict, etc.)
- **Bugs em aberto:** 8 (incluindo 1 crítico)
- **Regression risk:** Baixo — patches rapidamente merged; coverage aumentando

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Abertas

| # | Feature | Descrição | Evidência de Demanda |
|---|---------|-----------|---------------------|
| [#4974](https://github.com/agentscope-ai/QwenPaw/issues/4974) | Avatar por Agent | Upload/URL de avatar para agentes — gestão, switcher, chat | 2 👍 + 2 comentários |
| [#6167](https://github.com/agentscope-ai/QwenPaw/issues/6167) | Model Provider Layer Optimization | 7 melhorias interrelated: context dinâmico, sync, fallback multi-modelo | Issue umbrella |
| [#7912](https://github.com/agentscope-ai/QwenPaw/issues/7912) | MCP web-research example com Baizhi | Exemplo documentado de search → fetch → extract com credenciais | 1 comentário |
| [#7916](https://github.com/agentscope-ai/QwenPaw/issues/7916) | Validator para memory plugin type | Platform não reconhece novo tipo de plugin memory | Issue aberta |

### Sinais de Roadmap Detectados

1. **Arquitetura de provedores em evolução**: PR #7899 unifica discovery, pricing e selection de modelos — indica refactoring planejado.

2. **PawApp SDK redesign**: PR #7874 propõe novo control plane para apps — domínio em expansão.

3. **Retenção de histórico**: PR #7923 adiciona política de retenção para tool_result blocks — resposta a crescimento de storage.

4. **Testes e CI**: Cobertura subindo de 70.51% para 73.79% em um dia; E2E paralelo — investimento em qualidade.

5. **UX incremental**: Browser tab title (#7914), session list improvements (#7846), onboarding de modelos (#7920) — indicadores de foco em experiência.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Categoria | Descrição | Frequência | Issues |
|-----------|-----------|------------|--------|
| **Integração com provedores** | Problemas com OpenCode, Codex, JD Cloud, provedores Responses API | Alta | #7531, #7882, #7431, #3419 |
| **Estabilidade de loops** | DoomLoopGate causa terminates inesperados | Alta | #7905, #7628 |
| **Performance de UI** | Console carrega antes do backend; lentidão em redes ruins | Média | #7841, #7917 |
| **Gestão de contexto** | Histórico cresce sem limite; budget de contexto excede | Média | #7923, #7628 |
| **Segurança** | Prompt injection persistente | Crítica | #7859 |

### Cenários de Uso Reportados

1. **Ambiente corporativo (JD Cloud)**: Usuários em ambientes de coding plan enfrentam interrupções frequentes durante execução de ferramentas — impacto direto na produtividade.

2. **Provedores alternativos**: Usuários tentando usar modelos "gratuitos" ou provedores terceiros enfrentam erros 403 e headers faltantes — frustração com expectativas não atendidas.

3. **Desktop Windows**: Profissionais usando QwenPaw Desktop em Windows enfrentam crashes do host ao executar shell commands — risco operacional.

### Satisfação/Insatisfação

| Indicador | Sentimento |
|-----------|------------|
| Volume de bugs reportados | ⚠️ Preocupante (17 issues, 8 abertas) |
| Rapidez de resposta | ✅ Positivo (2 patches DoomLoopGate em <24h) |
| Cobertura de testes | ✅ Positivo (+3.28pp em uma PR) |
| UX features | 🔄 Neutro (vários UX bugs, mas também melhorias) |

---

## 8. Backlog que Merece Atenção

### Issues Antigas sem Resposta Recente

| # | Título | Criado | Atualizado | Status | Notas |
|---|--------|--------|------------|--------|-------|
| [#3419](https://github.com/agentscope-ai/QwenPaw/issues/3419) | JD Cloud Coding Plan interrupção | 2026-04-15 | 2026-09-21 | **Aberta** | 5 meses

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-09-22

---

## 1. Panorama do Dia

ZeroClaw registrou atividade intensa nas últimas 24 horas, com **50 issues e 50 PRs atualizados**, sem novos lançamentos formais. O ecossistema demonstra maturidade operacional, com 4 issues e 2 PRs fechados, mas a pauta de segurança domina: dois RFCs Architecture/Security (#10930, #10929) e um tracker de remediação de advisory (#9899) ocupam destaque. A comunidade de contribuidores está engajada em canais (WhatsApp Web, Matrix), infraestrutura Nix e correções de bugs de longa duração, como o vazamento de tool-call envelopes (#10446) e o estouro de pilha no daemon (#10230). A ausência de releases novas sugere foco em estabilização pré-merge.

---

## 2. Lançamentos

**Nenhum novo release nas últimas 24 horas.**

O projeto não emitiu versões taggeadas neste período. Isso é consistente com o padrão de trabalho prevalecente em PRs "stacked" (ex.: #10259 empilhado sobre #10255) e feature flags, sugerindo que a base de código está em fase de consolidação antes de um próximo release.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados Recentemente

| PR | Título | Tipo | Destaque |
|----|--------|------|----------|
| [#11006](https://github.com/zeroclaw-labs/zeroclaw/pull/11006) | Restack #10259 onto current master | Task | Re-base de 12 hunks, incluindo 2 semânticos, para RPC inbound enforcement |
| [#10255](https://github.com/zeroclaw-labs/zeroclaw/pull/10255) | feat(security): oidc.\<alias\> token-verification provider | Feature | Stage 5 do #8289 — JWKS validation com RFC 9068 typed access tokens |

### PRs Abertos com Maior Impacto

| PR | Título | Status | Tam. | Importância |
|----|--------|--------|------|-------------|
| [#10259](https://github.com/zeroclaw-labs/zeroclaw/pull/10259) | feat(security): enforce authenticated principals on RPC | Aceito, stacked | XL | Stage 3 de #8289 — enforcement nativo+peercred |
| [#10172](https://github.com/zeroclaw-labs/zeroclaw/pull/10172) | fix(runtime): preserve configured provider profile semantics | Em revisão | XL | Preservaidentidades `<family>.<alias>` por toda a stack |
| [#10446](https://github.com/zeroclaw-labs/zeroclaw/pull/10446) | fix(runtime): reject tool-call envelopes leaked into prose | Needs author action | XL | Correção de vazamento de tool calls em prosa (gpt-5.6/codex) |
| [#10979](https://github.com/zeroclaw-labs/zeroclaw/pull/10979) | feat(channels/whatsapp-web): implement create_room and invite_user | Novo | L | Funcionalidade básica de rooms para WhatsApp |

**Avanço principal**: O stack de segurança (#8289) avança com o rebase de #10259 e o merge de #10255 (verificação OIDC), indicando progresso firme em direção a RPC autenticado.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários)

| # | Título | Comentários | Domínio |
|---|--------|-------------|---------|
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | [Tracker]: Maintainer decision queue for RFCs | **15** | Architecture |
| [#9899](https://github.com/zeroclaw-labs/zeroclaw/issues/9899) | [Tracker]: remove matrix-sdk advisory waivers | **6** | Security |
| [#10230](https://github.com/zeroclaw-labs/zeroclaw/issues/10230) | Daemon stack overflow during agent init | **6** | Daemon |
| [#10523](https://github.com/zeroclaw-labs/zeroclaw/issues/10523) | Bootstrap file truncation at 6000 chars | **5** | Runtime |
| [#10068](https://github.com/zeroclaw-labs/zeroclaw/issues/10068) | Interactive agent caps context at 32k tokens | **5** | Runtime |

### Análise dos Temas

**Arquitetura & Governança**: O tracker #8692 lidera em comentários (15), sinalizando que a comunidade demanda processos formais de decisão para RFCs e design issues. O RFC #11017 ("Preserve applicable reviews and simplify expedited merge decisions") complementa essa demanda com proposta concreta de reforma do processo de revisão.

**Segurança em Duas Camadas**: Os RFCs #10930 ("One durable primitive for questions an agent asks a human") e #10929 ("Delivery receipts for outbound messages") — ambos com 4 comentários cada — indicam que a comunidade identifica lacunas críticas em durability e accountability de mensagens. Isso é consistente com o bug #9784 (SOP marcado como failed sem evento de audit).

**Multi-agente**: O RFC #10970 (host-scoped admission control) e #11027 (agent-to-agent session messaging) mostram que o roadmap está se movendo para cenários de Many-Agent, com problemas de coordenação e resource bounds ainda não resolvidos.

---

## 5. Bugs e Estabilidade

### Por Severidade

| Severidade | Count | Exemplos Críticos |
|------------|-------|-------------------|
| **S0** (risco de perda de dados/segurança) | 2 | #10966 (Git --attr-source hide mutation), #10379 (cancel button inoperante) |
| **S1** (workflow bloqueado) | 4 | #10230 (stack overflow), #9191 (cron sem timeout), #10231 (stale config retry), #10536 (Seatbelt ignores allowed_roots) |
| **S2** (comportamento degradado) | 6 | #10523 (truncation 6000 chars), #10068 (32k token cap), #10408 (duplicate runs), #10975 (WhatsApp images não baixadas), #10921 (Qdrant time bounds) |

### Bugs Mais Críticos

| # | Título | Status | Link |
|---|--------|--------|------|
| #10966 | Git --attr-source can hide a mutating subcommand | Aceito, P1 | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/10966) |
| #10230 | Daemon stack overflow during agent init (Quickstart) | Aberto, P1 | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/10230) |
| #9191 | Cron jobs have no wall-clock timeout | Aberto, P1 | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/9191) |
| #10379 | Unable to cancel ongoing messages (S0) | Aberto, P1 | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/10379) |

### Correções Recentes (PRs)

| PR | Bug Fixado | Link |
|----|-----------|------|
| #11035 | Qdrant time bounds aplicados antes do recall limit | [PR](https://github.com/zeroclaw-labs/zeroclaw/pull/11035) |
| #11031 | Empty trailing chunk falsamente marcava resposta como truncada | [PR](https://github.com/zeroclaw-labs/zeroclaw/pull/11031) |
| #11029 | Git global options consumidas antes de resolver subcomando | [PR](https://github.com/zeroclaw-labs/zeroclaw/pull/11029) |
| #9453 | Context meter ficava em branco para providers que omitem token counts | [PR](https://github.com/zeroclaw-labs/zeroclaw/pull/9453) |

**Métricas de Estabilidade**: 2 bugs S0, 4 S1 e 6 S2 abertos. A densidade de bugs P1 continua alta, indicando que a superfície de runtime e channels requer atenção sustentada. As correções de memory (#11035) e HTTP decode (#11031) demonstram resposta rápida a bugs identificados.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features em Proposta (RFCs)

| # | Título | Tipo | Prioridade | Sinais de Roadmap |
|---|--------|------|------------|-------------------|
| [#11027](https://github.com/zeroclaw-labs/zeroclaw/issues/11027) | Agent-to-agent session messaging | RFC | P2 | Coordenação multi-agente |
| [#11017](https://github.com/zeroclaw-labs/zeroclaw/issues/11017) | Preserve reviews & simplify expedited merge | RFC | P2 | Governança/Open source maturity |
| [#10970](https://github.com/zeroclaw-labs/zeroclaw/issues/10970) | Host-scoped admission control | RFC | P2 | Resource bounds para many-agent |
| [#10930](https://github.com/zeroclaw-labs/zeroclaw/issues/10930) | One durable primitive for human questions | RFC | P2 | Accountability e durability |
| [#10929](https://github.com/zeroclaw-labs/zeroclaw/issues/10929) | Delivery receipts for outbound messages | RFC | P2 | Observabilidade de mensagens |

### Features Aceitas em Implementação

| # | Título | Status | Link |
|---|--------|--------|------|
| #10315 | Re-add browser enrollment frontdoor (sem hand-rolled TLS) | Aberto | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/10315) |
| #10826 | Make ZeroCode session root selection explicit | Em progresso | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/10826) |
| #9727 | Epic: run and monitor multiple agents from zerocode sidebar | Fechado (merged) | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/9727) |

### Sinais de Direção

1. **Maturidade de infraestrutura**: Nix packaging (#11041, #11040) e OIDC integration (#10255) indicam foco em deployment enterprise-ready.
2. **Multi-channel**: WhatsApp Web recebe investimento significativo (#10979, #10982, #10980, #10984, #10475).
3. **Security-by-design**: O stack #8289 (RPC authentication) avança para stage 3, com #11006 em rebase.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Dor | Evidência | Severidade |
|-----|-----------|------------|
| **Cancelamento de operações** | #10379: botão de cancelar inoperante no ZeroClaw Desktop, input travado após submissão | S0 |
| **Canal WhatsApp quebrado** | #10975 (imagens chegam como texto), #10976 (mentions desfeitos), #10982 (sem thumbnails) | S2 |
| **Limites de contexto invisíveis** | #10068 (32k token cap forçado), #10523 (truncagem 6000 chars sem feedback) | S2 |
| **Concurrency sem bounds** | #10970: máquinas com muitos agentes degradam em estabilidade, não latência | Arquitetural |
| **Tool calls vazando** | #10446: em GPT-5.6 via codex, tool calls aparecem grudados no prose | Intermitente |

### Cenários de Uso Identificados

1. **Many-Agent Production**: Usuários rodando múltiplos agentes em uma máquina enfrentam resource contention sem ferramentas de diagnóstico (#10970).
2. **Voice Interfaces**: A feature `output_modality = "mirror"` no Matrix não funciona para voz (#10925 closed, mas implementação parcial).
3. **Enterprise Deployment**: NixOS deployments precisam servir o web dashboard manualmente — PR #11041 endereça isso.
4. **Cross-Channel Polling**: Usuários esperam native polls em WhatsApp — #10984 e #10988 endereçam essa lacuna.

### Satisfação/Insatisfação

**Pontos positivos percebidos**:
- Matrix channel maduro (voice replies implementado após #10489).
- Infraestrutura de provider routing funcional (a critério de #10172 pendente).
- Nix flake packages em expansão.

**Pontos de fricção**:
- Security CI falhando consistentemente (RUSTSEC-2026-0247, RUSTSEC-2026-0292) — #9899 e #11038.
- Emergency stop não funciona na prática (#9390).
- macOS sandbox com configuração ignorada (#10536).

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Stale

| # | Título | Age | Status | Prioridade | Ação Necessária |
|---|--------|-----|--------|------------|-----------------|
| [#9191](https://github.com/zeroclaw-labs/zeroclaw/issues/9191) | Cron sem wall-clock timeout | ~2 meses | Aberto | P1 | Maintainer review — risco de locks pendentes |
| [#9390](https://github.com/zeroclaw-labs/zeroclaw/issues/9390) | Emergency stop não é lido | ~2 meses | Aberto | P1 | Triagem — feature dead code? |
| [#9784](https://github.com/zeroclaw-labs/zeroclaw/issues/9784) | SOP failed sem audit event | ~1.5 meses | Stale | P2 | Reprodução necessária |
| [#10379](https://github.com/zeroclaw-labs/zeroclaw/issues/10379) | Cancel button inoperante | ~1 mês | Aberto | P1/S0 | Reprodução + correção UI/runtime |
| [#10315](https://github.com/zeroclaw-labs/zeroclaw/issues/10315) | Browser frontdoor removido | ~1 mês | Aberto | P2 | Decisão: re-add ou abandonar |

### PRs Bloqueados ou Stale

| # | Título | Status | Bloqueio |
|---|--------|--------|----------|
| [#10259](https://github.com/zeroclaw-labs/zeroclaw/pull/10259) | RPC authenticated principals | Rebase em progresso (#11006) | Depende de #10255 (merged) |
| [#10172](https://github.com/zeroclaw-labs/zeroclaw/pull/10172) | Preserve provider profile semantics | Needs author action | XL, precisa atenção do autor |
| [#10446](https://github.com/zeroclaw-labs/zeroclaw/pull/10446) | Reject tool-call envelopes in prose | Needs author action | Intermitente, alto risco |

### Priorização Recomendada

1. **Imediata**: Resolver #11038 (RUSTSEC waiver) para desbloquear CI — ou o pipeline estará permanentemente vermelho.
2. **Curto prazo**: Triagem de #9390 e #9191 — ambos são P1 e representam surface de segurança/estabilidade negligenciada.
3. **Médio prazo**: Priorizar rebase e merge de #10259 para fechar o stack de segurança #8289.
4. **Longo prazo**: Os RFCs multi-agente (#10970, #11027) precisam de mantainer buy-in antes de a comunidade investir em implementações.

---

*Relatório gerado automaticamente com base em dados do GitHub de 2026-09-22. Todas as métricas refletem atividade das últimas 24 horas.*

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*