# Resumo diário do ecossistema de agentes de IA 2026-09-13

> Issues: 0 | PRs: 1 | Projetos cobertos: 7 | Gerado em: 2026-09-12 21:53 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório do Projeto NullClaw — 2026-09-13

---

## 1. Panorama do Dia

O projeto NullClaw apresenta **baixa atividade nas últimas 24 horas**, sem novos issues abertos ou atualizações de conversas. A atividade principal concentra-se na finalização de um PR de manutenção relacionado ao protocolo MCP (Model Context Protocol), que foi fechado após correções de timeout e limpeza de processos. O repositório mantém-se estável, sem novos lançamentos ou reports críticos pendentes.

---

## 2. Lançamentos

**Nenhum novo release registrado nas últimas 24 horas.**

O projeto não publicou versões recentes. Caso necessite do histórico completo de releases, recomenda-se consultar a aba [Releases](https://github.com/nullclaw/nullclaw/releases) do repositório.

---

## 3. Progresso do Projeto

### PR Merged/Closed Hoje

| #996 | **[fix(mcp): bound stdio response waits](https://github.com/nullclaw/nullclaw/pull/996)** | `CLOSED` |
|------|----------------------------------------------------------------------------------------|----------|
| **Autor** | be-student | |
| **Criado** | 2026-09-06 | |
| **Atualizado** | 2026-09-12 | |
| **Resumo** | Aplica `timeout_ms` às leituras de resposta stdio do MCP e encerra o group de processos do servidor quando uma requisição atinge timeout. Falhas de inicialização agora também limpam processos filho spawned. | |

**Avanço entregue:**
- ✅ **Melhoria de estabilidade** — Requests MCP com stdio agora respeitam timeouts configurados
- ✅ **Prevenção de zombies** — Terminação correta do group de processos em timeouts
- ✅ **Cleanup robusto** — Falhas de inicialização não deixam processos órfãos
- ✅ **Validação** — 7.373 testes passando, 9 skipped

---

## 4. Temas Quentes da Comunidade

**Nenhum issue ou PR com atividade significativa de comentários/reações registrado nas últimas 24 horas.**

O PR #996, embora fechado, endereça a issue #991 (referência no commit). Para identificar discussões ativas da comunidade, recomendo monitorar issues com labels como `help wanted` ou `question`.

---

## 5. Bugs e Estabilidade

**Nenhum bug reportado nas últimas 24 horas.**

O projeto demonstra saúde estável, evidenciado pela taxa de sucesso do PR #996 (7.373+ testes passando). Não há evidências de regressões ou crashes ativos.

---

## 6. Pedidos de Features e Sinais de Roadmap

**Nenhum novo feature request registrado nas últimas 24 horas.**

O PR #996 sugere que **suporte a timeout configurável para MCP via stdio** é uma prioridade de stabilização em andamento. Issues relacionadas podem indicar direções futuras:

- [#991](https://github.com/nullclaw/nullclaw/issues/991) — (referenciada no PR #996, verificar contexto)

---

## 7. Resumo de Feedback dos Usuários

**Ausência de feedback explícito registrado nas últimas 24 horas.**

Para coletar insights de usuários, sugere-se:
- Analisar issues com tags `bug`, `enhancement` ou `question`
- Verificar discussões em [Discussions](https://github.com/nullclaw/nullclaw/discussions)
- Acompanhar Issues fechadas recentemente para identificar resolvedores de dores

---

## 8. Backlog que Merece Atenção

| Prioridade | Item | Status | Observação |
|------------|------|--------|------------|
| 🔴 Alta | [#991](https://github.com/nullclaw/nullclaw/issues/991) — MCP stdio timeout issue | Resolvido via #996 | Verificar se a solução cobre todos os edge cases |
| 🟡 Média | Issues sem resposta recente | Sem dados | Recomenda-se triagem de issues antigas |

---

## Métricas Consolidada (Últimas 24h)

| Indicador | Valor |
|-----------|-------|
| Issues abertas/ativas | 0 |
| Issues fechadas | 0 |
| PRs abertas | 0 |
| PRs merged/fechadas | 1 |
| Releases | 0 |
| Testes validados (PR #996) | 7.373 ✅ |

---

**Índice de Saúde do Projeto:** 🟢 **Estável** — Atividade mínima com foco em manutenção e stabilização. O codebase mantém-se bem testado e sem pendências críticas.

---

*Relatório gerado em 2026-09-13. Dados extraídos do GitHub de [nullclaw/nullclaw](https://github.com/nullclaw/nullclaw).*

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo — Ecossistema de Agentes de IA Open Source

**Data de referência:** 2026-09-13  
**Projetos analisados:** NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw, ZeroClaw

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source demonstra **duas velocidades distintas de desenvolvimento** em 13 de setembro de 2026. Projetos como Hermes Agent e ZeroClaw operam em alta intensidade — 50+ itens atualizados por dia — com foco em estabilização pós-lançamento, enquanto NullClaw e IronClaw mantêm ritmo de manutenção pontual. **Nenhum dos sete projetos publicou releases formais** nas últimas 24h, indicando um período de consolidação transversal. As principais dores compartilhadas são integridade de dados duráveis, regressões de estabilidade em features core (WebUI, MCP) e desafios de autenticação multi-canal. A comunidade manifesta demanda crescente por memória persistente, interoperabilidade entre canais enterprise e arquiteturas de plugin extensíveis.

---

## 2. Comparação de Atividade

| Projeto | Issues Abertas | PRs Abertos | PRs Merged (24h) | Releases (24h) | Bugs P1 | Avaliação de Saúde |
|---------|----------------|-------------|------------------|----------------|---------|-------------------|
| **NullClaw** | 0 | 0 | 1 | 0 | 0 | 🟢 Estável |
| **NanoBot** | 3 | 11 | 9 | 0 | 0 | 🟢 Positiva |
| **Hermes Agent** | 50+ | 50+ | 5 | 0 | 4 | 🟡 Consolidação |
| **PicoClaw** | 4 | 3 | 0 | 0 | 1 (crítico) | 🔴 Crítica |
| **IronClaw** | 0 | 2 | 1 | 0 | 0 | 🟢 Satisfatória |
| **CoPaw** | 16 | 6 | 0 | 0 | 5 | 🔴 Preocupante |
| **ZeroClaw** | 18 | 41 | 9 | 0 | 5 | 🟡 Atenção |

**Observação:** Hermes Agent e ZeroClaw lideram em volume absoluto de atividade. PicoClaw e CoPaw apresentam razão crítica de bugs P1 sem merges no período, sinalizando gargalos de estabilização.

---

## 3. Posicionamento do Projeto Principal

### NanoBot como Referência de Ritmo Sustentado

O NanoBot (HKUDS) demonstra o melhor equilíbrio entre volume de entrega e saúde de projeto:

| Dimensão | NanoBot | Diferencial |
|----------|---------|-------------|
| **Throughput** | 9 PRs merged/24h | Maior taxa de fechamento do ecossistema |
| **Qualidade** | 7.373+ testes (NullClaw) via PR #996 | Validação robusta |
| **Segurança** | P1 path traversal mergeado em <10 dias | Responsividade a vulnerabilidades |
| **Performance** | Otimização de replay incremental (PR #5745) | Escala para sessões longas |
| **Canal** | Multi-channel: Linear, Telegram, Office365 | Posicionamento enterprise |

**Vantagens técnicas:**
- Arquitetura de provider flexível com failover automático
- Checkpointing e recovery para agentes de longa duração
- WebUI com streaming otimizado e cache stale-while-revalidate
- Community engagement: 20 PRs totais em 24h (11 abertos + 9 fechados)

**Tamanho da comunidade:** Medido por volume de contribuições, NanoBot e Hermes Agent lideram. PicoClaw apresenta sinais de comunidade estagnada (issues stale >50 dias).

---

## 4. Focos Técnicos Compartilhados

### 4.1 MCP (Model Context Protocol)

| Projeto | Status MCP | PR/Issue Relacionada |
|---------|------------|---------------------|
| NullClaw | ✅ Estabilizado | PR #996 (timeout stdio) |
| Hermes Agent | 🔄 OAuth isolado por perfil | PR #109430 (P1 segurança) |
| CoPaw | ⚠️ Regressões | Issue #7716 (MCP 2.2.x broken) |
| PicoClaw | 📚 Documentação | PRs #3368, #3367 (MCP setup examples) |
| ZeroClaw | 🔴 Connection poisoned | Issue #10807 (recovery permanent failure) |

**Conclusão:** MCP é camada crítica em todos os projetos. A fragmentação de SDKs (Java/Kotlin em CoPaw) gera incompatibilidades específicas de linguagem.

### 4.2 Estabilidade de Memória e Persistência

| Projeto | Problema | Severidade |
|---------|----------|------------|
| **ZeroClaw** | Markdown memory lose entries on concurrent store() | S0 — Data Loss |
| **CoPaw** | Conversation loss + model settings lost | Crítica |
| **NanoBot** | Partial tool progress persistence (em fix) | P2 |
| **Hermes Agent** | Config.yaml empty string shadowing env vars | P1 regressão |

**Padrão identificado:** Concorrência de escrita em stores assíncronas é vetor comum de corrupção de dados. Arquiteturas que não serializam writers estão vulneráveis.

### 4.3 Segurança de Autenticação

| Projeto | Foco | Status |
|---------|------|--------|
| **ZeroClaw** | Permissões de arquivos, imagens Docker | ✅ 3 PRs merged |
| **NanoBot** | Path traversal em session keys | ✅ PR #5633 |
| **Hermes Agent** | OAuth isolado por perfil | 🔄 PR #109430 |
| **PicoClaw** | OAuth scopes hardcoded | 🔄 PR #3378 |

---

## 5. Análise de Diferenciação

### 5.1 Por Público-Alvo

| Projeto | Público Primário | Arquitetura de Canal |
|---------|------------------|---------------------|
| **Hermes Agent** | Enterprise / Desktop | Multi-gateway (CLI, TUI, Desktop, API, ACP) |
| **NanoBot** | Auto-hospedagem / DevOps | WebUI + Multi-channel (Telegram, Email, Linear) |
| **PicoClaw** | Comunidades IRC | Protocolo IRC nativo |
| **CoPaw** | Usuários Desktop Windows/macOS | Plugin marketplace centralizado |
| **ZeroClaw** | Produção / High-load | Plugin scheduler durável |

### 5.2 Por Foco Arquitetural

| Projeto | Diferenciador Principal | Tendência |
|---------|------------------------|-----------|
| **Hermes Agent** | Sessão unificada (One gateway owns every session) | Mega-feature #106742 |
| **NanoBot** | Provider flexibility + failover | Maturidade multi-provider |
| **ZeroClaw** | Plugin architecture + typed event routing | Investimento XL em plugins |
| **CoPaw** | A2A protocol roadmap | Interoperabilidade agentes |
| **NullClaw** | Minimalismo MCP | Manutenção estabilizada |

### 5.3 Por Estágio de Maturidade

| Estágio | Projetos | Características |
|---------|----------|-----------------|
| **Consolidação** | Hermes Agent, ZeroClaw | Volume alto, bugs P1 ativos, mega-features |
| **Crescimento** | NanoBot | Throughput alto, estável, sem P1s |
| **Manutenção** | NullClaw, IronClaw | Atividade baixa, sem issues críticas |
| **Regressão** | PicoClaw, CoPaw | Bugs críticos sem resolução, stale backlog |

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração

| Ranking | Projeto | PRs Merged (24h) | Testes/Validação |
|---------|---------|-------------------|-------------------|
| 1 | **ZeroClaw** | 9 | Security-focused (3 PRs de segurança) |
| 2 | **NanoBot** | 9 | Performance + Security P1s |
| 3 | **Hermes Agent** | 5 | Bug fixes + Voice feature |
| 4 | **IronClaw** | 1 | Bug fix + Test coverage |
| 5 | **NullClaw** | 1 | MCP stabilization |
| 6 | **CoPaw** | 0 | 🔴 Stagnant |
| 7 | **PicoClaw** | 0 | 🔴 Stagnant |

### 6.2 Quality vs. Quantity

**NullClaw** — Menor volume, maior taxa de sucesso por PR: 7.373 testes passando, 9 skipped. codebase mais testado proporcionalmente.

**NanoBot** — Volume alto com qualidade mantida: P1s resolvidos (security + performance) sem regressões reportadas.

**Hermes Agent** — Volume massivo com instabilidade: 50 issues/PRs atualizados, mas 4 P1s críticos indicam dívida técnica significativa.

**CoPaw** — 16 issues atualizadas sem nenhum PR mergeado — **sinal de alerta** para saúde do pipeline.

### 6.3 Community Engagement

| Projeto | Issue com maior discussão | Comentários |
|---------|--------------------------|-------------|
| Hermes Agent | #88584 (Nous integration blocked) | 93 |
| PicoClaw | #3287 (IRC long messages) | 12 |
| NanoBot | #5721 (Durable memory) | 1 (estratégico) |
| CoPaw | #7484 (A2A protocol) | 3 |

**Insight:** Hermes Agent tem maior engajamento orgânico. PicoClaw demonstra comunidade engajada em features legacy. NanoBot sinaliza demanda estratégica (memória durável) com baixo volume de comentários.

---

## 7. Sinais de Tendência

### 7.1 Tendências de Mercado Extraídas

| Tendência | Evidência | Projetos |
|-----------|-----------|----------|
| **Memória Persistente** | Issue #5721 (NanoBot), Issue #82304 (Hermes), Issue #10797 (ZeroClaw) | NanoBot, Hermes, ZeroClaw |
| **Interoperabilidade Enterprise** | Linear, Office365 OAuth, Telegram custom endpoints | NanoBot, Hermes |
| **Arquitetura de Plugins** | #9139, #9138, #8949 (ZeroClaw), A2A protocol (CoPaw) | ZeroClaw, CoPaw |
| **Segurança por Design** | 3 PRs security (ZeroClaw), OAuth isolation (Hermes), path traversal fix (NanoBot) | Ecossistema inteiro |
| **MCP Maturation** | Timeout bounds, OAuth isolation, Java SDK compatibility | NullClaw, Hermes, CoPaw, ZeroClaw |
| **Self-hosted Flexibility** | OpenAI-compatible providers (PicoClaw), multi-provider failover (NanoBot) | PicoClaw, NanoBot |

### 7.2 Dores Emergenciais Comuns

1. **Corrupção de Estado Durável** — Concorrência de escrita, perda de sessions, descartes de turn em falhas
2. **Regressões de Estabilidade** — Features que funcionavam em versões anteriores quebram em updates (MCP 2.2.x em CoPaw, config.yaml em Hermes)
3. **UX de Auto-hospedagem** — Headless login, CLI tooling, daemon logging
4. **Cold Start Latency** — Cron worker timeouts (Hermes: 5s vs 12s cold start)

### 7.3 Sinais de Roadmap Convergente

| Feature | Projetos Investindo | Complexidade |
|---------|--------------------|--------------|
| **One Gateway/Session Unificada** | Hermes (#106742) | Mega (XL) |
| **Durable Scheduler** | ZeroClaw (#9139) | XL |
| **Typed Event Routing** | ZeroClaw (#9138) | L |
| **A2A Protocol** | CoPaw (#7484) | Roadmap pendente |
| **MCP + ACP Unificação** | CoPaw, Hermes | Driver mechanism |

---

## 8. Recomendações para Decisores

### Para Desenvolvedores

| Prioridade | Ação | Projetos de Referência |
|------------|------|------------------------|
| 🔴 Crítica | Resolver PRs de segurança bloqueados (path traversal, OAuth isolation) | NanoBot #5633, Hermes #109430 |
| 🔴 Crítica | Implementar serialização de writers em stores assíncronas | ZeroClaw #10797 |
| 🟡 Alta | Fazer rebase de PRs com conflitos (>14 dias) | NanoBot, Hermes |
| 🟡 Alta | Triar stale issues (>30 dias) | PicoClaw, CoPaw |
| 🟢 Oportunidade | Adotar timeout bounds em stdio MCP | NullClaw #996 |

### Para Arquitetos

| Decisão | Projeto de Referência | Rationale |
|---------|-----------------------|-----------|
| **Provider abstraction** | NanoBot | Multi-provider com failover robusto |
| **Checkpoint/recovery** | NanoBot | Sessions de longa duração |
| **Typed plugin system** | ZeroClaw | Arquitetura extensível para 2026-Q4 |
| **Test coverage** | NullClaw | 7.373+ testes como baseline |

### Para Produto/Produto Managers

| Feature | Demanda | Viabilidade |
|---------|---------|-------------|
| Durable memory cross-sessions | 🔴 Alta (3 projetos) | Complexa — requer design de persistência |
| Enterprise channels (Linear, Office365) | 🟠 Média-Alta | NanoBot já implementando |
| IRC protocol support | 🟡 Média | PicoClaw focado, comunidade estagnada |

---

**Conclusão:** O ecossistema demonstra maturidade crescente em estabilidade (segurança, testes) mas enfrenta desafios compartilhados em integridade de dados duráveis e regressões de features. NanoBot emerge como referência de equilíbrio throughput/qualidade. Hermes Agent e ZeroClaw lideram em volume com dívida técnica compensada por features de próxima geração. PicoClaw e CoPaw requerem atenção imediata para estancar regressões.

---

*Relatório gerado em 2026-09-13. Baseado em dados agregados dos repositórios: nullclaw/nullclaw, HKUDS/nanobot, NousResearch/hermes-agent, sipeed/picoclaw, nearai/ironclaw, agentscope-ai/CoPaw, zeroclaw-labs/zeroclaw.*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-09-13

---

## 1. Panorama do Dia

O projeto NanoBot apresenta **alta atividade** nesta data, com 20 PRs atualizados nas últimas 24h (11 abertos, 9 fechados/merged) e 4 issues movimentadas. A atividade concentra-se em correções de estabilidade e usabilidade da WebUI, melhorias de recovery/checkpointing, e expansão de canais (Telegram, Email, Linear). Não houve releases formais. A saúde geral do projeto é positiva, com a equipe mantendo ritmo consistente de merge de correções P1-P2 enquanto avança em features de longa data.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24h.**

---

## 3. Progresso do Projeto

### PRs Closed/Merged Hoje (9)

| # | PR | Autor | Impacto |
|---|-----|-------|---------|
| [#5745](https://github.com/HKUDS/nanobot/pull/5745) | `fix(webui): make large history replay incremental and cached` | chengyongru | **P1** — Otimização crítica: limitação de replay de histórico por mensagem, registro e bytes; cache stale-while-revalidate; fetch inicial de 40 mensagens |
| [#5633](https://github.com/HKUDS/nanobot/pull/5633) | `fix(session): reject session keys with path traversal components` | aniruddhaadak80 | **P1 Security** — Previne path traversal em session keys; adição de `validate_session_key()` no chokepoint de persistência |
| [#5735](https://github.com/HKUDS/nanobot/pull/5735) | `fix(webui): make headless login self-explanatory` | chengyongru | **P2** — Detecção de browsers text-only (links, lynx, w3m); instruções manuais de handoff para ambientes headless |
| [#5738](https://github.com/HKUDS/nanobot/pull/5738) | `perf(webui): reduce long-text streaming refresh overhead` | chengyongru | **P2** — Bound de preview de raciocínio em 512 UTF-16 code units; prevenção de split de surrogate pairs |
| [#5746](https://github.com/HKUDS/nanobot/pull/5746) | `feat(providers): add DaoXE gateway provider` | seven7763 | **P2** — Adição de novo provider DaoXE como named gateway |
| [#5613](https://github.com/HKUDS/nanobot/pull/5613) | `fix(provider): clean up replayed items before sending to providers` | kkkhoo | **P2** — Previne falhas na Responses API causadas por IDs gerados pelo provider no replay |
| [#5675](https://github.com/HKUDS/nanobot/pull/5675) | `fix(providers): allow model failover after runner deadlines` | be-student | **P2** — Permite fallback de provider após deadline do runner (fecha #5674) |
| [#5743](https://github.com/HKUDS/nanobot/pull/5743) | `fix(webui): simplify settings catalog controls` | Re-bin | **P2** — Refatoração de UI de automações: Calendar como default, Tasks em toolbar compacta |
| [#5752](https://github.com/HKUDS/nanobot/pull/5752) | `Codex/integrations stability upstream` | szymongalka | **Dev** — Melhorias de estabilidade upstream de integrações Codex |

**Destaque:** Merge significativo de [PR #5745](https://github.com/HKUDS/nanobot/pull/5745) (P1) resolve gargalo de performance em replays de histórico grande, com implicações diretas na experiência do usuário em sessões longas.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento

| # | Título | Autor | Comentários | Reações | Tipo |
|---|--------|-------|-------------|---------|------|
| [#5721](https://github.com/HKUDS/nanobot/issues/5721) | "Could nanobot support durable memory across sessions?" | memcodeoff | 1 | 0 | Enhancement |
| [#5726](https://github.com/HKUDS/nanobot/issues/5726) | "[bug] Startup initial password?" | gardiol | 2 | 0 | Bug (P1) |

### Análise

- **[#5721](https://github.com/HKUDS/nanobot/issues/5721)** — Proposta de parceria da MemCode para memória persistente cross-deployment. Indica demanda por **memória de longo prazo** além dos checkpoints de sessão. Este é um sinal de roadmap relevante para expandir capacidades de memória do agente.

- **[#5726](https://github.com/HKUDS/nanobot/issues/5726)** (agora fechada) — Bug do usuário `gardiol` sobre senha inicial em servidor headless. Resolvido via [PR #5735](https://github.com/HKUDS/nanobot/pull/5735), indica que a UX para instalação headless precisava de melhorias — problema comum em agentes auto-hospedados.

### PRs em discussão (com conflitos ou múltiplos labels)

| # | Título | Status | Conflitos |
|---|--------|--------|-----------|
| [#5633](https://github.com/HKUDS/nanobot/pull/5633) | Security fix path traversal | Aberto | ⚠️ Conflito |
| [#5495](https://github.com/HKUDS/nanobot/pull/5495) | Native Linear agent channel | Aberto | ⚠️ Conflito |
| [#4919](https://github.com/HKUDS/nanobot/pull/4919) | Telegram custom Bot API base URL | Aberto | ⚠️ Conflito |
| [#5609](https://github.com/HKUDS/nanobot/pull/5609) | Microsoft OAuth for Office365/Outlook | Aberto | ⚠️ Conflito |

**4 PRs com conflitos** indicam necessidade de rebase ou resolução de dependências — atenção recomendada para manter o pipeline de merge fluindo.

---

## 5. Bugs e Estabilidade

### Bugs Reportados (Issues Abertas: 1)

| # | Título | Severidade | Prioridade | Idade |
|---|--------|------------|------------|-------|
| [#5726](https://github.com/HKUDS/nanobot/issues/5726) | Startup initial password? | Bug | P1 | 3 dias |

### Bugs em PRs Abertos (4)

| # | Título | Severidade | Prioridade | Status |
|---|--------|------------|------------|--------|
| [#5633](https://github.com/HKUDS/nanobot/pull/5633) | Reject session keys with path traversal | Bug/Security | P1 | Aberto c/ conflito |
| [#5748](https://github.com/HKUDS/nanobot/pull/5748) | Persist partial tool progress at batch boundaries | Bug | P2 | Aberto |
| [#5751](https://github.com/HKUDS/nanobot/pull/5751) | Preserve pending runs when editing automation | Bug | P2 | Aberto |
| [#5605](https://github.com/HKUDS/nanobot/pull/5605) | Only mark \Seen on delivered messages | Bug | P2 | Aberto c/ conflito |

### Análise de Estabilidade

**P1 em aberto:** [PR #5633](https://github.com/HKUDS/nanobot/pull/5633) — Corrigindo vulnerability de path traversal em session keys. A presença de conflito pode atrasar o merge; **recomenda-se priorização**.

**P2s值得关注:**
- [PR #5748](https://github.com/HKUDS/nanobot/pull/5748) — Resolve window de crash-consistency em checkpoints multi-tool (crash entre tool A e C pode perder progresso)
- [PR #5751](https://github.com/HKUDS/nanobot/pull/5751) — Corrige comportamento de automações cron que pulam execuções quando editadas

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features (Issues Abertas: 2)

| # | Título | Tipo | Idade |
|---|--------|------|-------|
| [#5721](https://github.com/HKUDS/nanobot/issues/5721) | Durable memory across sessions | Enhancement | 4 dias |
| [#5749](https://github.com/HKUDS/nanobot/issues/5749) | Expose stable tool invocation context | Enhancement | 1 dia |

### Features em PRs Abertos (9)

| # | Título | Canal/Área | Prioridade |
|---|--------|------------|------------|
| [#5750](https://github.com/HKUDS/nanobot/pull/5750) | Expose stable per-invocation tool context | Tools | P2 |
| [#5495](https://github.com/HKUDS/nanobot/pull/5495) | Native Linear agent channel | Channel | P2 |
| [#4919](https://github.com/HKUDS/nanobot/pull/4919) | Telegram custom Bot API base URL | Channel | P2 |
| [#5609](https://github.com/HKUDS/nanobot/pull/5609) | Microsoft OAuth for Office365/Outlook | Email | P2 |
| [#5606](https://github.com/HKUDS/nanobot/pull/5606) | Filter by recipient alias | Email | P2 |
| [#5602](https://github.com/HKUDS/nanobot/pull/5602) | Completion notification sound | WebUI | P2 |
| [#5388](https://github.com/HKUDS/nanobot/pull/5388) | Budget model-visible MCP schemas | Agent/MCP | P2 |

### Sinais de Roadmap

1. **Expansão de canais:** Linear, Telegram custom endpoints, Office365 OAuth — foco em interoperabilidade enterprise
2. **MCP maturity:** [PR #5388](https://github.com/HKUDS/nanobot/pull/5388) adiciona budget para schemas MCP visíveis ao modelo
3. **Memory durability:** [Issue #5721](https://github.com/HKUDS/nanobot/issues/5721) sinaliza demanda por memória persistente além de sessões
4. **Tool context stability:** [PR #5750](https://github.com/HKUDS/nanobot/pull/5750)/[Issue #5749](https://github.com/HKUDS/nanobot/issues/5749) endereçam idempotência de side effects

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Dor | Fonte | Status |
|-----|-------|--------|
| Senha inicial invisível em servidores headless | [Issue #5726](https://github.com/HKUDS/nanobot/issues/5726) (gardiol) | ✅ Resolvido |
| Necessidade de memória persistente entre sessões | [Issue #5721](https://github.com/HKUDS/nanobot/issues/5721) (memcodeoff) | 🆕 Aberto |
| Performance degradada em históricos longos | [PR #5745](https://github.com/HKUDS/nanobot/pull/5745) | ✅ Resolvido |
| Webhooks de email marcando mensagens como lidas antes da entrega | [PR #5605](https://github.com/HKUDS/nanobot/pull/5605) | 🔄 Em revisão |

### Cenários de Uso Indicados

- **Auto-hospedagem em headless servers** — caso de uso principal emergentes (servidor sem browser)
- **Integração empresarial** — múltiplos canais (Linear, Telegram, Email), OAuth para Microsoft 365
- **Agentes de longa duração** — checkpointing, recovery, persistência de tool progress
- **Multi-provider failover** — necessidade de resiliência quando modelo primário falha

### Satisfação Geral

**Positiva.** Correções P1 merged rapidamente (path traversal security, replay performance). A atividade massiva de PRs (20 em 24h) indica equipe ativa e responsiva.

---

## 8. Backlog que Merece Atenção

### Issues sem resposta há >7 dias

| # | Título | Criado | Atualizado | Tipo |
|---|--------|--------|------------|------|
| [#5721](https://github.com/HKUDS/nanobot/issues/5721) | Durable memory across sessions? | 2026-09-09 | 2026-09-12 | Enhancement |

### PRs em aberto há >14 dias com conflitos

| # | Título | Criado | Labels | Urgência |
|---|--------|--------|--------|----------|
| [#5633](https://github.com/HKUDS/nanobot/pull/5633) | Security: reject path traversal | 2026-09-02 | bug, fix, security, p1 | 🔴 Alta |
| [#5609](https://github.com/HKUDS/nanobot/pull/5609) | Microsoft OAuth for Office365 | 2026-08-30 | channel, feature, p2 | 🟡 Média |
| [#5606](https://github.com/HKUDS/nanobot/pull/5606) | Filter by recipient alias | 2026-08-30 | channel, feature, p2 | 🟡 Média |
| [#5605](https://github.com/HKUDS/nanobot/pull/5605) | Only mark \Seen on delivered | 2026-08-30 | bug, channel, p2 | 🟡 Média |
| [#5495](https://github.com/HKUDS/nanobot/pull/5495) | Native Linear agent channel | 2026-08-23 | channel, feature, p2 | 🟡 Média |
| [#4919](https://github.com/HKUDS/nanobot/pull/4919) | Telegram custom Bot API base | 2026-07-14 | channel, feature, p2 | 🟡 Média |
| [#5388](https://github.com/HKUDS/nanobot/pull/5388) | Budget MCP schemas | 2026-08-13 | conflict | 🟡 Média |

### Priorização Recomendada

1. **🔴 Merge [PR #5633](https://github.com/HKUDS/nanobot/pull/5633)** — Security fix com 10+ dias aberto; resolver conflito é crítico
2. **🟡 Resolver [PRs com conflitos do email channel](https://github.com/HKUDS/nanobot/pulls?q=is%3Apr+is%3Aopen+conflict+email)** — Microsoft OAuth é feature de alto valor enterprise
3. **🟢 Responder [Issue #5721](https://github.com/HKUDS/nanobot/issues/5721)** — Proposta de parceria MemCode merece consideração estratégica

---

## Métricas do Dia

| Indicador | Valor |
|-----------|-------|
| Issues abertas/ativas | 3 |
| Issues fechadas | 1 |
| PRs abertos | 11 |
| PRs fechados/merged | 9 |
| Novas releases | 0 |
| PRs com conflitos | 4 |
| P1 bugs ativos | 1 (security path traversal) |
| PRs P1 merged | 2 (history replay + path traversal fix em review) |

---

*Relatório gerado em 2026-09-13. Dados extraídos do GitHub HKUDS/nanobot.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent
**Data:** 2026-09-13  
**Repositório:** [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)

---

## 1. Panorama do Dia

O Hermes Agent manteve um ritmo de atividade intenso nas últimas 24 horas, com **50 issues e 50 PRs atualizados**, indicando alta participação da comunidade. Nenhum lançamento de versão foi registrado hoje. O estado geral do projeto reflete uma fase de **consolidação de bugs e regressões** reportadas na versão 0.21.2, com várias issues P1 (críticas) demanding atenção imediata, especialmente relacionadas a configurações de provider, OAuth em ambientes multiplexados e problemas de estabilidade no Desktop. A comunidade está ativamente engajada em resolver problemas de segurança e estabilidade.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24 horas.**

O projeto encontra-se em período de pré-release, com foco na correção de bugs críticos reportados após a versão 0.21.2.

---

## 3. Progresso do Projeto

### PRs Merged/Closed (5 total)

| PR | Tipo | Descrição | Link |
|---|---|---|---|
| #109415 | feat(voice) | Suporte a GPT Live via assinatura Codex | [Link](https://github.com/NousResearch/hermes-agent/pull/109415) |
| #60496 | fix(cli) | Corrige Desktop App ignorando `prefill_messages_file` | [Link](https://github.com/NousResearch/hermes-agent/pull/60496) |
| #60500 | fix(cli) | Port de `_load_prefill_messages` para hermes_cli | [Link](https://github.com/NousResearch/hermes-agent/pull/60500) |
| #109426 | fix | Fallback para `computer_use` quando MCP SDK remove capabilities | [Link](https://github.com/NousResearch/hermes-agent/pull/109426) |
| #101975 | fix | Corrige auto-correção de modelos não catalogados (fechado) | [Link](https://github.com/NousResearch/hermes-agent/issues/101975) |

### PRs Abertos de Destaque

| PR | Tipo | Descrição | Link |
|---|---|---|---|
| #109430 | fix(mcp) | **Isola conexões OAuth por perfil** (P1, segurança) | [Link](https://github.com/NousResearch/hermes-agent/pull/109430) |
| #109428 | fix(mcp) | **Isola OAuth por perfil** (fixes #109422, P1) | [Link](https://github.com/NousResearch/hermes-agent/pull/109428) |
| #106742 | feat | **One gateway owns every session** (P1, mega-feature) | [Link](https://github.com/NousResearch/hermes-agent/pull/106742) |
| #108914 | feat | Bot Screen — Xfce desktop streamed no Hermes Desktop | [Link](https://github.com/NousResearch/hermes-agent/pull/108914) |
| #109409 | fix(cli) | `hermes doctor --fix` instala mcp extra | [Link](https://github.com/NousResearch/hermes-agent/pull/109409) |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

1. **#88584** — Integração Nous bloqueada (93 comentários)  
   A fusão programada Nous-to-Enterkey apresenta conflitos em `cron/jobs.py`. Este é o issue com maior atividade da comunidade, refletindo a complexidade de integrações entre sistemas.  
   [Link](https://github.com/NousResearch/hermes-agent/issues/88584)

2. **#97681** — Bot Group Chats devem funcionar após fechar Desktop (28 comentários)  
   Feature request para que bots em diferentes gateways trabalhem juntos e retomem de outro dispositivo. Demonstra demanda por **sessões distribuídas e persistência entre dispositivos**.  
   [Link](https://github.com/NousResearch/hermes-agent/issues/97681)

3. **#109243** — Cron worker handoff timeout (15 comentários)  
   Bug de severidade alta: worker externo requer ack em 5s, mas cold start leva ~12s. Impacta confiabilidade de jobs agendados.  
   [Link](https://github.com/NousResearch/hermes-agent/issues/109243)

4. **#109358** — Regressão v0.21.2 em config.yaml (2 comentários, alta severidade)  
   Empty strings em `config.yaml` agora sobrescrevem fallbacks de variáveis de ambiente, **desabilitando silenciosamente** funcionalidades como Matrix free-response.  
   [Link](https://github.com/NousResearch/hermes-agent/issues/109358)

5. **#109357** — Desktop sobrescreve config de host remoto (P1)  
   Bug crítico onde Desktop gravou factory config de uma máquina sobre o config.yaml de host remoto, causando "No LLM provider configured".  
   [Link](https://github.com/NousResearch/hermes-agent/issues/109357)

---

## 5. Bugs e Estabilidade

### Por Severidade

#### **P1 (Crítico - 4 issues)**
| Issue | Descrição | Link |
|---|---|---|
| #109357 | Desktop sobrescreve config de host remoto | [Link](https://github.com/NousResearch/hermes-agent/issues/109357) |
| #109397 | Dashboard TUI: "needs model provider" para `provider: custom` | [Link](https://github.com/NousResearch/hermes-agent/issues/109397) |
| #109247 | `_config_model_provider()` não reconhece custom/openrouter | [Link](https://github.com/NousResearch/hermes-agent/issues/109247) |
| #109430 | OAuth MCP isolado por perfil (PR, segurança) | [Link](https://github.com/NousResearch/hermes-agent/pull/109430) |

#### **P2 (Alto - 14 issues)**
- **Cron:** #109243 (timeout worker), #109423 (Telegram allowed_chats), #109258 (Telegram /save), #109361 (macOS clock fingerprint)
- **Config/Auth:** #109358 (config.yaml shadowing), #90136 (approvals test)
- **Desktop/Gateway:** #109338 (preserve files/Group Chat), #71181 (shutdown notifications)
- **Ferramentas:** #96610 (tool_call bridge empty), #91987 (TTS microphone)
- **OAuth:** #109429 (mTLS certs excluded from identity)

#### **P3 (Médio - 20+ issues)**
- Kanban (#109260), Memory (#109215), Skills (#109375, #87730), Plugins (#109063, #109391), Terminal Docker (#90679), Supermemory (#109359)

### Regressões Identificadas na v0.21.2
1. Config.yaml empty string shadowing env vars
2. Dashboard TUI bootstrap com `provider: custom`
3. Approvals test false positives

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| Issue | Descrição | Prioridade | Link |
|---|---|---|---|
| #106742 | **One gateway owns every session** — CLI, TUI, Desktop, API, ACP, bots e cron anexam à mesma conversa | P1 | [Link](https://github.com/NousResearch/hermes-agent/pull/106742) |
| #97681 | Bot Group Chats com persistência entre dispositivos | P2 | [Link](https://github.com/NousResearch/hermes-agent/issues/97681) |
| #108914 | Bot Screen — Xfce desktop streamed no Hermes Desktop | P2 | [Link](https://github.com/NousResearch/hermes-agent/pull/108914) |
| #109400 | Opt-in para automatic goal start | P3 | [Link](https://github.com/NousResearch/hermes-agent/pull/109400) |
| #109424 | Fleet Policy rollout tool (orchestrator-only) | P3 | [Link](https://github.com/NousResearch/hermes-agent/pull/109424) |

### Sinais de Roadmap
- **Sessões unificadas:** A mega-feature #106742 indica direção clara para consolidação de múltiplas superfícies em uma sessão gateway
- **Voice/GPT Live:** Suporte recém-lançado (#109415) mostra expansão para assistentes de voz
- **Bot Group Chats:** Funcionalidade colaborativa multi-gateway em desenvolvimento

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Reportadas

1. **Configuração e Provider** (3 issues P1)  
   Usuários com `provider: custom` ou `openrouter` enfrentam bloqueios na inicialização do Dashboard, causando frustração na migração.

2. **Estabilidade do Desktop**  
   - Plugin routes não montam corretamente após registro tardio
   - Microfone não é liberado após comando 'stop' no TTS
   - Config de máquina local sobrescreve host remoto

3. **Cron e Jobs Agendados**  
   Timeout de 5s para ack é insuficiente para cold starts (~12s), causando falha silenciosa de jobs críticos.

4. **OAuth/Autenticação**  
   Bug de isolamento de perfil permite vazamento de credenciais OAuth entre profiles — **preocupação de segurança**.

### Cenários de Uso
- **Uso corporativo:** Configurações remotas via Desktop com integração Matrix/Slack
- **Desenvolvedores:** CLI e TUI com múltiplos providers (custom, openrouter)
- **Automação:** Cron jobs, bot routines, unattended missions

---

## 8. Backlog que Merece Atenção

### Issues Sem Atribuição ou Sem Resposta Recente

| Issue | Idade | Descrição | Link |
|---|---|---|---|
| #82304 | ~35 dias | Unattended autonomous missions: silent failure chain | [Link](https://github.com/NousResearch/hermes-agent/issues/82304) |
| #87730 | ~28 dias | Skill collision com symlinked roots | [Link](https://github.com/NousResearch/hermes-agent/issues/87730) |
| #88584 | ~27 dias | Nous integration blocked (bloqueando release) | [Link](https://github.com/NousResearch/hermes-agent/issues/88584) |
| #90679 | ~24 dias | Terminal Docker: Windows path no container | [Link](https://github.com/NousResearch/hermes-agent/issues/90679) |
| #92146 | ~22 dias | HERMES_HOME exemption: SOUL.md/AGENTS.md ungated | [Link](https://github.com/NousResearch/hermes-agent/issues/92146) |
| #95078 | ~19 dias | Nested Hermes CWD stale | [Link](https://github.com/NousResearch/hermes-agent/issues/95078) |
| #96610 | ~17 dias | tool_call bridge arguments empty | [Link](https://github.com/NousResearch/hermes-agent/issues/96610) |

### Priorização Recomendada

1. **Crítico (esta semana):**
   - #109357, #109397, #109247 (config/provider P1s)
   - #109430/#109428 (OAuth segurança)
   - #88584 (bloqueando integração)

2. **Alta Prioridade:**
   - #106742 (mega-feature de sessões unificadas)
   - #109243 (cron timeout)
   - #109358 (regressão config)

3. **Média Prioridade:**
   - #82304 (unattended missions)
   - #97681 (bot group chats)

---

**Relatório gerado em:** 2026-09-13  
**Fonte:** Dados do GitHub NousResearch/hermes-agent (últimas 24h)

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-09-13

---

## 1. Panorama do dia

O projeto PicoClaw apresenta **atividade moderada** em 13 de setembro de 2026, com 4 issues e 3 pull requests atualizados nas últimas 24 horas. Não houveram lançamentos de novas versões, e nenhum PR foi mesclado ou fechado no período. O ponto mais urgente do dia é a **issue #3377**, que reporta um certificado TLS expirado no domínio oficial `picoclaw.io`, tornando o site inacessível para todos os usuários. A equipe parece focada em manutenção e expansão de funcionalidades, com múltiplos PRs de documentação e correções autenticidade em análise.

---

## 2. Lançamentos

**Nenhum lançamento registrado nas últimas 24 horas.**

O projeto não publicou novas releases desde o período anterior. O último release conhecido permanece como **v0.3.1** (referenciado na issue #3281 como ambiente estável).

---

## 3. Progresso do Projeto

**Nenhum PR mesclado ou fechado nas últimas 24 horas.**

Três pull requests permanecem em estado aberto, aguardando revisão:

| PR | Título | Status | Prioridade |
|----|--------|--------|------------|
| [#3378](https://github.com/sipeed/picoclaw/pull/3378) | fix(auth): use configured scopes instead of hardcoded default in RefreshAccessToken | ABERTO | 🔴 Alta |
| [#3368](https://github.com/sipeed/picoclaw/pull/3368) | docs: add Parallel Search MCP setup example | ABERTO (stale) | 🟡 Média |
| [#3367](https://github.com/sipeed/picoclaw/pull/3367) | docs: add Pilot MCP setup example | ABERTO (stale) | 🟡 Média |

**Destaque técnico:** O PR [#3378](https://github.com/sipeed/picoclaw/pull/3378) corrige um bug crítico no fluxo de autenticação OAuth, onde scopes configurados pelo usuário eram substituídos por valores hardcoded `"openid profile email"`. Este fix garante que provedores com scopes personalizados funcionem corretamente durante refresh de tokens.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários + reações):

| Issue | Título | Comentários | 👍 | Link |
|-------|--------|-------------|-----|------|
| #3287 | Better support long messages in IRC | 12 | 0 | [🔗](https://github.com/sipeed/picoclaw/issues/3287) |
| #3281 | Web UI chat input is very laggy | 10 | 2 | [🔗](https://github.com/sipeed/picoclaw/issues/3281) |
| #3366 | Add support for OpenAI compatible providers | 2 | 0 | [🔗](https://github.com/sipeed/picoclaw/issues/3366) |
| #3377 | TLS certificate expired | 0 | 1 | [🔗](https://github.com/sipeed/picoclaw/issues/3377) |

**Análise das demandas:**

- **IRC Long Messages (#3287):** Usuários solicitam tratamento inteligente para mensagens fragmentadas pelo protocolo IRCv3 (limite de 512 bytes). Esta é uma questão antiga (julho/2026) com alto volume de discussão, indicando necessidade real de compatibilidade com redes IRC modernas.

- **UI Performance (#3281):** O input de chat na web UI apresenta lentidão significativa com histórico de conversas longo. Com 10 comentários e 2 👍, este é o bug com maior feedback positivo, sugerindo impacto em múltiplos usuários.

- **OpenAI Compatible Providers (#3366):** Demanda por provedores customizados OpenAI-compatible para suportar routers auto-hospedados (ex: 9Router), demonstrando interesse da comunidade em flexibilidade de infraestrutura.

---

## 5. Bugs e Estabilidade

### 🔴 Crítico

**[#3377](https://github.com/sipeed/picoclaw/issues/3377)** — TLS certificate for picoclaw.io expired on 2026-09-10
- **Severidade:** CRITICAL
- **Autor:** dimonb
- **Criado:** 2026-09-12 | **Atualizado:** 2026-09-12
- **Resumo:** O certificado TLS do domínio oficial expirou em 2026-09-10 23:59:59 UTC. Todos os navegadores e clientes TLS recusam a conexão. **Ação imediata requerida.**

### 🟡 Médio

**[#3281](https://github.com/sipeed/picoclaw/issues/3281)** — Web UI chat input laggy
- **Severidade:** Bug
- **Ambiente:** PicoClaw Web, versão 0.3.1, Go 1.25.11
- **Impacto:** Degradação de performance no input com histórico de chat moderado
- **Comentários:** 10 | 👍: 2

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features solicitadas:

| Issue | Feature | Potencial Impacto | Link |
|-------|---------|------------------|------|
| #3366 | OpenAI Compatible Providers | Alta (flexibilidade de infraestrutura) | [🔗](https://github.com/sipeed/picoclaw/issues/3366) |
| #3287 | Suporte a mensagens longas no IRC | Média (compatibilidade IRCv3) | [🔗](https://github.com/sipeed/picoclaw/issues/3287) |

**Sinais de tendência:**
- Crescente interesse em **MCP (Model Context Protocol)** — evidenciado por 2 PRs de documentação para setups de MCP (#3368, #3367)
- Demanda por **provedores customizáveis** para modelos de IA, sugerindo evolução para arquitetura mais flexível
- Melhorias de **protocolo IRC** indicam foco em compatibilidade com plataformas de comunicação tradicionais

---

## 7. Resumo de Feedback dos Usuários

### Dores identificadas:

1. **Infraestrutura Down (#3377):** Usuários não conseguem acessar o site oficial, impactando onboarding e documentação. Situação crítica gerando frustração.

2. **UX Web UI (#3281):** Performance do chat deteriora com uso prolongado. Usuários relatam experiência "muito laggy" ao digitar — problema de retenção.

3. **Limitações de Protocolo (#3287):** Comunidades IRC enfrentam fragmentação de mensagens, prejudicando coerência de conversas em agentes de IA.

### Cenários de uso detectados:

- **Agentes para IRC:** Integração com redes IRC para automação e assistentes
- **Web UI interativa:** Uso como interface principal para chat com IA
- **Provedores customizados:** Necessidade de self-hosted LLM routers

### Indicadores de satisfação:
- 2 👍 na issue de UI performance indica frustração compartilhada
- Discussão ativa (24 comentários totais) sugere comunidade engajada
- PRs de documentação indicam investimento em experiência do desenvolvedor

---

## 8. Backlog que Merece Atenção

### Issues sem resposta/atualização significativa:

| Issue | Título | Idade | Status | Link |
|-------|--------|-------|--------|------|
| #3287 | Better support long messages in IRC | ~53 dias | OPEN (stale) | [🔗](https://github.com/sipeed/picoclaw/issues/3287) |
| #3281 | Web UI chat input laggy | ~54 dias | OPEN (stale) | [🔗](https://github.com/sipeed/picoclaw/issues/3281) |
| #3366 | OpenAI compatible providers | ~9 dias | OPEN | [🔗](https://github.com/sipeed/picoclaw/issues/3366) |

**Recomendações:**

1. **Prioridade imediata:** Resolver #3377 (TLS expirado) — impacto em todo o ecossistema
2. **Revisar stale issues:** As issues #3287 e #3281 estão abertas há mais de 50 dias sem resolução, mesmo com atualizações recentes. Considerar triagem ou fechamento com milestone.
3. **MCP Integration:** PRs #3367 e #3368 aguardam merge — representam valor文档ário para comunidade

---

## Métricas Resumidas do Período

| Indicador | Valor |
|-----------|-------|
| Issues abertas/ativas | 4 |
| Issues fechadas | 0 |
| PRs abertos | 3 |
| PRs mesclados | 0 |
| Novas releases | 0 |
| Problemas críticos | 1 |
| Issues com alta engajamento | 2 |

---

*Relatório gerado automaticamente para 2026-09-13 com base em dados do GitHub do repositório sipeed/picoclaw.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório de Projeto: IronClaw (nearai/ironclaw)

**Data de referência:** 2026-09-13  
**Formato:** Análise diária de atividade do projeto

---

## 1. Panorama do Dia

O projeto IronClaw apresenta **baixa atividade** no período analisado. Não há issues abertas ou fechadas nas últimas 24h, e não foram registradas novas releases. A atividade concentrou-se em **2 Pull Requests**: uma nova PR de testes (aberta) e uma correção de bug relacionada a canais desconectados (fundida/fechada). O projeto encontra-se em estado de **manutenção pontual**, sem sinais de desenvolvimento intenso ou bloqueios críticos.

---

## 2. Lançamentos

**Nenhum novo lançamento registrado nas últimas 24h.**

| Release | Data | Notas |
|---------|------|-------|
| — | — | Sem releases recentes |

> O repositório não publicou versões novas no período. Recomenda-se verificar a aba [Releases](https://github.com/nearai/ironclaw/releases) para informações históricas.

---

## 3. Progresso do Projeto

### PR Fundida/Fechada (1)

| PR | Título | Autor | Status |
|----|--------|-------|--------|
| [#8076](https://github.com/nearai/ironclaw/pull/8076) | fix(assistant): distinguish disconnected shared channels | be-student | ✅ FECHADA |

**Análise da contribuição:**
- **Escopo:** Melhoria na diferenciação entre canais compartilhados desconectados de contas não-pareadas
- **Impacto:** Padronização de classificação de rejeições entre produto, adapter e superfícies compatíveis com OpenAI
- **Extensão:** Atualização de capacidades do Slack
- **Qualificação:** Correção de bug/refinamento de UX — não é breaking change

---

### PR Aberta (1)

| PR | Título | Autor | Status |
|----|--------|-------|--------|
| [#8098](https://github.com/nearai/ironclaw/pull/8098) | test(turns): pin state-derived lineage drop | huiq777 | 🔄 ABERTA |

**Análise da contribuição:**
- **Escopo:** Adição de teste de regressão para validar ausência de metadados de linhagem em snapshots derivados de `TurnRunState`
- **Propósito:** Proteger contra regressões na propagação de profundidade, proveniência de ativação e capacidade de descendentes
- **Qualificação:** Teste defensivo — aumento de cobertura e confiabilidade

---

## 4. Temas Quentes da Comunidade

**Nenhuma issue ou PR com comentários significativos registradas nas últimas 24h.**

| Item | Tipo | Interações |
|------|------|------------|
| — | — | Sem dados |

> A ausência de discussão recente pode indicar: (a) resolução em canais internos, (b) baixo tráfego de Issues no período, ou (c) comunidade focada em PRs diretas.

---

## 5. Bugs e Estabilidade

### Bugs Reportados (24h)

| Bug | Severidade | Status | Notas |
|-----|------------|--------|-------|
| — | — | — | Sem bugs reportados no período |

### Observações de Estabilidade

- **PR #8076** tratou de um bug na lógica de diferenciação de canais desconectados — agora resolvido
- **Sem crashes ou regressões críticas** reportados nas últimas 24h

> **Índice de estabilidade:** ✅ Satisfatório — 1 bug resolvido recentemente

---

## 6. Pedidos de Features e Sinais de Roadmap

**Nenhuma nova feature request registrada nas últimas 24h.**

| Feature | Autor | Status | Relevância |
|---------|-------|--------|------------|
| — | — | — | Sem demandas |

**Sinais inferidos:**
- O PR #8076 sugere foco contínuo em **qualidade de atendimento e diferenciação de estados de usuário**
- Testes adicionais em #8098 indicam preocupação com **consistência de estado e lineage tracking**

> Para roadmap, recomenda-se consultar issues com label `enhancement` ou `feature-request` no [rastreador do projeto](https://github.com/nearai/ironclaw/issues).

---

## 7. Resumo de Feedback dos Usuários

**Nenhum feedback explícito de usuários registrado nas últimas 24h.**

| Tipo | Ocorrências | Sentimento |
|------|-------------|------------|
| Issues de usuário | 0 | — |
| Comentários em issues | 0 | — |
| Reações (👍/👎) | 0 | — |

**Perfil de uso inferido:**
- Base de usuários ativa provavelmente utiliza canais de suporte fora do GitHub Issues
- Atividade de Issues focada em contribuições técnicas internas

---

## 8. Backlog que Merece Atenção

**Nenhuma issue antiga sem resposta identificada no período analisado.**

| Issue | Idade | Prioridade | Notas |
|-------|-------|------------|-------|
| — | — | — | Sem backlog visível |

### Recomendações

1. **Monitoramento de PR #8098** — Validar merge timely para garantir cobertura de testes
2. **Verificar debts técnicos** — Issues abertas com +30 dias sem atualização merecem triagem
3. **Avaliar saúde da comunidade** — Baixa atividade de Issues pode indicar subutilização do rastreador como canal de feedback

---

## Métricas Consolidada (2026-09-13)

| Indicador | Valor | Avaliação |
|-----------|-------|-----------|
| Issues abertas/fechadas (24h) | 0 / 0 | 🟡 Baixa |
| PRs ativas (24h) | 2 | 🟢 Normal |
| Releases (24h) | 0 | 🟡 Nenhuma |
| Bugs críticos | 0 | 🟢 Ok |
| Tempo médio de resposta* | — | Insuficiente dados |

*Baseado em issues/PRs do período

---

**Fontes:** [github.com/nearai/ironclaw](https://github.com/nearai/ironclaw)  
**Gerado em:** 2026-09-13

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do Projeto CoPaw (QwenPaw)
**Data de referência:** 2026-09-13  
**Fonte:** GitHub.com/agentscope-ai/CoPaw

---

## 1. Panorama do Dia

O projeto CoPaw apresenta **alta atividade de manutenção** nesta data, com 16 issues e 6 PRs atualizados nas últimas 24h. No entanto, **nenhum PR foi mergeado** e **nenhuma release foi publicada**, indicando foco em triagem e preparação de patches. As issues concentram-se em **bugs críticos de estabilidade** (perda de configurações, freezes de servidor, vazamentos de memória) e **problemas de integração MCP**. A ausência de releases recentes sugere que a versão 2.2.1 pode estar em fase de validação antes de novas publicações.

---

## 2. Lançamentos

**Nenhum lançamento registrado nas últimas 24 horas.**

| Release | Data | Status |
|---------|------|--------|
| — | — | Sem releases recentes |

> **Nota:** A versão mais recente mencionada nas issues é `2.2.1` (Desktop, Windows/macOS), com variants `beta.1` e `beta.2` em circulação.

---

## 3. Progresso do Projeto

### PRs Abertos (6 total — nenhum mergeado)

| # | Título | Autor | Área | Impacto |
|---|--------|-------|------|---------|
| [#7729](https://github.com/agentscope-ai/QwenPaw/pull/7729) | fix(mcp): recognize Java jsonRpcError envelope on discover probe | kabishou11 | MCP | Resolve incompatibilidade com servidores Java/Kotlin MCP SDK |
| [#7725](https://github.com/agentscope-ai/QwenPaw/pull/7725) | fix(workspace): replace blocking watchfiles.awatch SSE watcher with threaded polling | xiaoka76 | Workspace | Corrige freeze total do servidor ao abrir file browser |
| [#7723](https://github.com/agentscope-ai/QwenPaw/pull/7723) | fix(console): emit an error event when stream_one fails | Nobodyanonymou-s | Console | Melhora feedback de erros em streams SSE |
| [#7719](https://github.com/agentscope-ai/QwenPaw/pull/7719) | feat(memory): allow a separate model for ReMeLight memory writing | iluv7 | Memory | Permite configuração de modelo separado para operações de memória |
| [#7718](https://github.com/agentscope-ai/QwenPaw/pull/7718) | fix(telegram): render approval-card markdown via HTML parse_mode | j4Uq | Telegram | Corrige exibição de markup em cards de aprovação |
| [#7680](https://github.com/agentscope-ai/QwenPaw/pull/7680) | fix(agents): diagnose dropped subagent model overrides | lorenzozanee | Agents | Adiciona logging para diagnose de falhas em subagentes |

### Issues Fechadas Hoje (3)

| # | Título | Autor | Tipo | Relevância |
|---|--------|-------|------|------------|
| [#7676](https://github.com/agentscope-ai/QwenPaw/issues/7676) | `subagent_model` has no effect | NORFMS | Bug | Corrigido via #7680 |
| [#7582](https://github.com/agentscope-ai/QwenPaw/issues/7582) | Plugin store operations too complex | One-sixth | Enhancement |用户提供反馈已记录 |
| [#7664](https://github.com/agentscope-ai/QwenPaw/issues/7664) | RemeLight额外自定义模型 | bxwl5 | Enhancement | Implementado via #7719 |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (por comentários)

| # | Título | Comentários | Tipo | Tendência |
|---|--------|-------------|------|-----------|
| [#7484](https://github.com/agentscope-ai/QwenPaw/issues/7484) | A2A协议支持咨询 (qwenpaw 2.x) | 3 | Enhancement | Expectativa de roadmap MCP/A2A unificado |
| [#7708](https://github.com/agentscope-ai/QwenPaw/issues/7708) | 设置好的大模型丢失 | 3 | Bug | Perda recorrente de configuração em Windows |
| [#7715](https://github.com/agentscope-ai/QwenPaw/issues/7715) | Daily Paper fails silently when arxiv.org unreachable | 3 | Bug | Tratamento de erros em serviços externos |
| [#7676](https://github.com/agentscope-ai/QwenPaw/issues/7676) | `subagent_model` has no effect | 3 | Bug | **RESOLVIDO** — impactava seleção de modelo por tarefa |
| [#7582](https://github.com/agentscope-ai/QwenPaw/issues/7582) | Plugin store operations too complex | 2 | Enhancement | **FECHADO** — UX do plugin marketplace |

### Análise de Demandas

**A2A Protocol Support (#7484)**  
- **Autor:** qixinbo  
- **Demanda:** Usuários do QwenPaw 2.x questionam o roadmap oficial para suporte ao protocolo A2A (Agent-to-Agent), que foi mencionado na arquitetura como parte do Driver unificado junto ao MCP.  
- **Sinal estratégico:** Indica que a comunidade aguarda concretização de promessas arquiteturais divulgadas na documentação.

**Plugin Store UX (#7582)**  
- **Autor:** One-sixth  
- **Dores relatadas:**
  - Refresh de página a cada instalação/atualização
  - Falta de botão de "atualizar todos"
  - Ausência de notificação de updates de plugins de terceiros
- **Impacto:** Usuários que mantêm QwenPaw em múltiplas máquinas sofrem fricção significativa.

---

## 5. Bugs e Estabilidade

### Bugs Críticos (Severidade Alta)

| # | Título | Autor | Status | Severidade | Ramificação |
|---|--------|-------|--------|------------|-------------|
| [#7724](https://github.com/agentscope-ai/QwenPaw/issues/7724) | 会话丢失 (Conversation loss) | xiaohushi512 | OPEN | 🔴 Crítica | Perda completa de histórico; relacionado a #7708 |
| [#7722](https://github.com/agentscope-ai/QwenPaw/issues/7722) | Memory exhaustion — 3 paths | Nobodyanonymou-s | OPEN | 🔴 Crítica | Vazamento de memória ~1MB/s em containers Docker |
| [#7721](https://github.com/agentscope-ai/QwenPaw/issues/7721) | Workspace file browser freezes entire server | xiaoka76 | OPEN | 🔴 Crítica | `watchfiles.awatch` bloqueia event loop |

### Bugs de Estabilidade (Severidade Média)

| # | Título | Autor | Status | Severidade |
|---|--------|-------|--------|------------|
| [#7708](https://github.com/agentscope-ai/QwenPaw/issues/7708) | LLM model settings lost | xiaohushi512 | OPEN | 🟡 Média-Alta |
| [#7715](https://github.com/agentscope-ai/QwenPaw/issues/7715) | Daily Paper fails silently | PTW1981 | OPEN | 🟡 Média |
| [#7716](https://github.com/agentscope-ai/QwenPaw/issues/7716) | MCP can't connect since 2.2.x | f39516046 | OPEN | 🟡 Média |
| [#7728](https://github.com/agentscope-ai/QwenPaw/issues/7728) | Java MCP SDK HTTP 500 on discover | remotepan-design | OPEN | 🟡 Média |

### Bugs de Segurança/UX

| # | Título | Autor | Status | Tipo |
|---|--------|-------|--------|------|
| [#7727](https://github.com/agentscope-ai/QwenPaw/issues/7727) | kimi-code Write tool bypasses workspace restriction | remotepan-design | OPEN | ⚠️ Potencial |
| [#7726](https://github.com/agentscope-ai/QwenPaw/issues/7726) | ACP `trusted: true` falls back to prompts | remotepan-design | OPEN | ⚠️ UX |
| [#7720](https://github.com/agentscope-ai/QwenPaw/issues/7720) | Creator prompt-sync blocker behind GATED | ekzhu | OPEN | ⚠️ Fluxo |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| # | Título | Autor | Comentários | Viabilidade |
|---|--------|-------|-------------|-------------|
| [#7484](https://github.com/agentscope-ai/QwenPaw/issues/7484) | A2A协议支持 (Roadmap inquiry) | qixinbo | 3 | ⏳ Aguardando confirmação |
| [#7717](https://github.com/agentscope-ai/QwenPaw/issues/7717) | DeepSeek models: capability metadata, prompt stability, KV-cache observability | Moonlit-Pages | 1 | 🔧 Proposta detalhada |
| [#7582](https://github.com/agentscope-ai/QwenPaw/issues/7582) | Plugin store: one-click update + notifications | One-sixth | 2 | 🔶 Prioridade UX |

### Features em Implementação (via PRs)

| # | Título | Feature | Progresso |
|---|--------|---------|-----------|
| [#7719](https://github.com/agentscope-ai/QwenPaw/pull/7719) | Separate model for ReMeLight memory writing | `memory_model` config | 🔄 PR aberto |
| [#7680](https://github.com/agentscope-ai/QwenPaw/pull/7680) | Diagnose dropped subagent model overrides | Logging/diagnose | 🔄 PR aberto |

### Sinais de Roadmap

> **A2A Protocol (#7484):** Aissue pergunta diretamente sobre a promessa arquitetural de suporte unificado MCP/A2A/ACP via Driver mechanism. A resposta da equipe indicará o planejamento de longo prazo para interoperabilidade de agentes.

> **DeepSeek Enhancement (#7717):** Proposta inspirada no `deepseek-harness` oficial, solicitando:
> - Metadata de capacidades nativas
> - Estabilidade de prompt-prefix
> - Observabilidade de KV-cache
> - Sugere amadurecimento do provider DeepSeek.

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais Identificadas

| Dor | Frequência | Severidade | Issues Relacionadas |
|-----|------------|------------|---------------------|
| **Perda de configurações de modelo** | 🔴 Alta | Crítica | #7708, #7724 |
| **Plugin store tedioso** | 🟠 Média-Alta | Média | #7582 |
| **Freeze do servidor ao usar file browser** | 🟠 Média | Crítica | #7721 |
| **MCP quebra ao atualizar** | 🟡 Média | Média | #7716 |
| **Vazamento de memória em containers** | 🟡 Média | Crítica | #7722 |

### Cenários de Uso Reportados

1. **Desktop Windows 10 — Uso intensivo de plugins (#7708, #7724)**
   - Perda recorrente de configuração de modelo após uso normal
   - Perda de conversas inteiras após períodos de inatividade
   - Impacto direto na produtividade

2. **ReMe Daily Paper (#7715)**
   - Falha silenciosa quando arxiv.org é inacessível
   - Mensagem enganosa "completed with no returned content"
   - Sem configuração de proxy/endpoint

3. **Plugin marketplace multi-device (#7582)**
   - Usuário mantém QwenPaw em múltiplas máquinas como "gerente de manutenção"
   - Atualização manual de cada plugin = 10x cliques por plugin

4. **Container Docker em produção (#7722)**
   - Vazamento de memória ~1MB/s
   - Três paths de exaustão identificados (stream buffers, keep-alive stacking, doom-loop gate)
   - Service hangs/OOM após progressão

### Satisfação/Insatisfação

| Aspecto | Sentimento | Detalhamento |
|---------|------------|--------------|
| Core chat functionality | ✅ Estável | Sem complaints diretas |
| Integração MCP | ⚠️ Instável | Quebras entre versões (2.1.x → 2.2.x) |
| UX do plugin store | ❌ Insatisfeito | Completo redesign necessário |
| Configuração de memória | 🔶 Em evolução | #7719 promete melhorias |
| Stability (regressões) | ❌ Insatisfeito | Perda de dados = unacceptable |

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Stale

| # | Título | Criado | Atualizado | Dias Inativo | Prioridade |
|---|--------|--------|------------|--------------|------------|
| [#4901](https://github.com/agentscope-ai/QwenPaw/issues/4901) | Per-task model selection | — | — | Long-standing | 🔴 Alta |
| [#6302](https://github.com/agentscope-ai/QwenPaw/issues/6302) | Introduced subagent_model | — | — | Long-standing | 🟡 Resolvido |

> **Nota:** Issue #4901 (per-task model selection) permanece aberta há tempo, mesmo com #7676 (resolvido) e #7680 (PR aberto) tratarem aspectos relacionados.

### Issues com Correlação (Recomendação de Triagem)

| Cluster | Issues | Recomendação |
|---------|--------|--------------|
| Perda de configurações + conversas | #7708, #7724 | Unificar investigação — mesma raiz? |
| Freezes + vazamento de memória | #7721, #7722 | Verificar se watchfiles é gatilho |
| MCP 2.2.x regressions | #7716, #7728 | Priorizar fix #7729 |

### PRs Aguardando Review

| # | Título | Idade | Bloqueantes? |
|---|--------|-------|--------------|
| [#7729](https://github.com/agentscope-ai/QwenPaw/pull/7729) | Java MCP SDK fix | <1 dia | — |
| [#7725](https://github.com/agentscope-ai/QwenPaw/pull/7725) | Threaded polling fix | <1 dia | 🔴 Crítico |
| [#7719](https://github.com/agentscope-ai/QwenPaw/pull/7719) | Separate memory model | <1 dia | — |

---

## Indicadores de Saúde do Projeto

| Métrica | Valor | Status |
|---------|-------|--------|
| Issues abertas (24h) | 13 | 🟢 Normal |
| PRs abertos (24h) | 6 | 🟢 Normal |
| PRs mergeados (24h) | 0 | 🔴 Abaixo do esperado |
| Bugs críticos abertos | 5 | 🔴 Atenção |
| Releases (7 dias) | 0 | 🟡 Verificar pipeline |
| Tempo médio de resposta | — | ⚠️ Não mensurado |

---

## Ação Recomendada

1. **🔴 Crítico:** Priorizar merge dos PRs [#7725](https://github.com/agentscope-ai/QwenPaw/pull/7725) e [#7729](https://github.com/agentscope-ai/QwenPaw/pull/

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-09-13

---

## 1. Panorama do Dia

O ecossistema ZeroClaw manteve alta atividade em 12 de setembro, com **24 issues e 50 PRs atualizados** nas últimas 24h, sem novos lançamentos. A base de código apresenta **5 bugs P1 ativos**, incluindo um caso crítico de perda de dados no backend de memória markdown e falhas de estabilidade no Windows CI. Entre os PRs, destacam-se correções de segurança merged (permissões de arquivos e imagens Docker) e grandes refatorações em andamento, como a fundação do scheduler durável de plugins e a coordenação do ciclo de vida de agentes.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

O projeto não emitiu novas versões. O último ciclo de release permanece sem atualização pública, indicando foco em estabilização interna.

---

## 3. Progresso do Projeto

### PRs Merged/Closed (9 items)

| # | Título | Escopo | Relevância |
|---|--------|--------|------------|
| [#10091](https://github.com/zeroclaw-labs/zeroclaw/pull/10091) | fix(memory): harden response cache storage permissions | Security | 🔒 Aplica proteção owner-only ao cache de respostas, igualando ao banco de auditoria |
| [#10449](https://github.com/zeroclaw-labs/zeroclaw/pull/10449) | fix(channels): create Edge TTS artifact with owner-only permissions | Security | 🔒 Corrige permissão de artefatos TTS (0o644 → owner-only) |
| [#10726](https://github.com/zeroclaw-labs/zeroclaw/pull/10726) | ci(zerorelay): pin published relay base images by digest | DevOps | Imagens Docker agora usam digest imutável |
| [#10676](https://github.com/zeroclaw-labs/zeroclaw/pull/10676) | fix(ci): compare publish exceptions as paths | CI | Normaliza exceções para paths Unix/Windows |
| [#10534](https://github.com/zeroclaw-labs/zeroclaw/issues/10534) | bounded delegates silently strip delegate tool | Bugfix | Delegação agora respeita `delegation_policy/max_delegation_depth` |
| [#10689](https://github.com/zeroclaw-labs/zeroclaw/issues/10689) | Telegram voice reply skips replies starting with `[` | Bugfix | Corrige parsing de tags de áudio ElevenLabs v3 |
| [#10277](https://github.com/zeroclaw-labs/zeroclaw/issues/10277) | Pin zerorelay image base tags | Security | Follow-up de #10142 |
| [#10731](https://github.com/zeroclaw-labs/zeroclaw/issues/10731) | service logs nothing on macOS/Windows/OpenRC | Bugfix | Linux journalctl uniformizado |
| [#10699](https://github.com/zeroclaw-labs/zeroclaw/issues/10699) | cost ledger cache writes at plain input rate | Bugfix | Preço de cache miss agora correto |

**Destaque:** A semana fechou com **3 PRs de segurança merged** (permissões de arquivos, imagens Docker, Edge TTS), indicando foco em hardenning de produção.

---

## 4. Temas Quentes da Comunidade

### Issues/PRs com maior engajamento (comentários > 1)

| # | Título | Comentários | Categoria |
|---|--------|-------------|-----------|
| [#10734](https://github.com/zeroclaw-labs/zeroclaw/issues/10734) | RpcDispatcher stack overflow Windows (2% do guard) | 6 | P1/CI |
| [#10788](https://github.com/zeroclaw-labs/zeroclaw/issues/10788) | Failed ACP turn discards prompt + tool exchanges | 2 | P1/Data |
| [#10797](https://github.com/zeroclaw-labs/zeroclaw/issues/10797) | **markdown memory loses entries on concurrent store()** | 1 | **P1/Data Loss** |
| [#10803](https://github.com/zeroclaw-labs/zeroclaw/pull/10803) | fix(providers): single-candidate stream recovery retry budget | 1 | P2/Provider |

**Análise:** A comunidade demonstra preocupação intensa com **integridade de dados** (perda de entries, descarte de turns) e **estabilidade CI Windows**. A issue #10797 sobre perda silenciosa de dados no backend markdown é especialmente crítica — não há mecanismo de serialização de writers nem verificação pós-escrita.

---

## 5. Bugs e Estabilidade

### 🔴 P1 — Críticos (5 issues abertas)

| # | Severidade | Título | Status | Canal |
|---|------------|--------|--------|-------|
| [#10797](https://github.com/zeroclaw-labs/zeroclaw/issues/10797) | **S0 - Data Loss** | markdown memory backend loses entries on concurrent store() | `status:accepted` | Memory |
| [#10788](https://github.com/zeroclaw-labs/zeroclaw/issues/10788) | S2 - Degraded | Failed ACP turn discards accepted prompt + completed tools | `in-progress` | ACP |
| [#10734](https://github.com/zeroclaw-labs/zeroclaw/issues/10734) | S2 - Degraded | RpcDispatcher::process_line stack overflow (2MB guard) | `in-progress` | CI/Windows |
| [#10785](https://github.com/zeroclaw-labs/zeroclaw/issues/10785) | S2 - Degraded | notification lag cancels every running turn | `in-progress` | ZeroCode |
| [#10731](https://github.com/zeroclaw-labs/zeroclaw/issues/10731) | S2 - Degraded | service logs prints nothing (macOS/Windows/OpenRC) | `in-progress` | Daemon |

### 🟡 P2 — Degradados (principais)

| # | Severidade | Título | Canal |
|---|------------|--------|-------|
| [#10802](https://github.com/zeroclaw-labs/zeroclaw/issues/10802) | S2 | session/list-acp vs turn_end message_count mismatch | ACP |
| [#10787](https://github.com/zeroclaw-labs/zeroclaw/issues/10787) | S2 | Single-candidate stream ignores provider_retries (529 sem backoff) | Provider |
| [#10793](https://github.com/zeroclaw-labs/zeroclaw/issues/10793) | S3 | 3 Windows-only test failures (advisory CI) | CI |
| [#10807](https://github.com/zeroclaw-labs/zeroclaw/issues/10807) | **S1 - Workflow blocked** | MCP connection permanently poisoned after one recovery | MCP/Tools |

### 🟢 P3 — Minor

- [#10796](https://github.com/zeroclaw-labs/zeroclaw/issues/10796) — Delete key ignorado no ZeroCode chat
- [#10792](https://github.com/zeroclaw-labs/zeroclaw/issues/10792) — Docs: clarificar recovery Windows após reload refusal
- [#10805](https://github.com/zeroclaw-labs/zeroclaw/issues/10805) — control_plane liveness race on Windows

**Alerta:** A conjunção de P1s em **memória** (#10797) e **ACP** (#10788) sugere risco de **corrupção de estado durável** em produção.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features

| # | Título | Tags | Prioridade |
|---|--------|------|------------|
| [#10812](https://github.com/zeroclaw-labs/zeroclaw/issues/10812) | WhatsApp: populate jpegThumbnail para PDFs renderizarem preview | `channel:whatsapp` | P3 |
| [#10400](https://github.com/zeroclaw-labs/zeroclaw/issues/10400) | Telegram: notice configurável para remetentes não-autorizados | `channel:telegram`, `config` | P2 |
| [#10789](https://github.com/zeroclaw-labs/zeroclaw/issues/10789) | ZeroCode: localizar diagnósticos de startup do daemon | `i18n`, `zerocode` | P3 |

### PRs Enhancement em Progresso (Size L/XL)

| # | Título | Escopo | Complexidade |
|---|--------|--------|--------------|
| [#9139](https://github.com/zeroclaw-labs/zeroclaw/pull/9139) | Durable scheduler outbox foundation | Plugins/Cron | 🔴 XL |
| [#9138](https://github.com/zeroclaw-labs/zeroclaw/pull/9138) | Typed event routing foundation | Plugins | 🔴 L |
| [#10621](https://github.com/zeroclaw-labs/zeroclaw/pull/10621) | Coordinate agent lifecycle mutations | Runtime/Daemon | 🔴 XL |
| [#9809](https://github.com/zeroclaw-labs/zeroclaw/pull/9809) | Support multiple models per provider profile | Provider | 🟡 XL |
| [#8949](https://github.com/zeroclaw-labs/zeroclaw/pull/8949) | Typed plugin webhook challenge replies | Gateway | 🔴 XL |

**Sinal de Roadmap:** O investimento pesado em **plugins** (#9139, #9138, #8949, #8862) e **event routing** indica que a arquitetura de plugins é prioridade estratégica para 2026-Q4.

---

## 7. Resumo de Feedback dos Usuários

### Dores Críticas Reportadas

1. **Perda de dados em memória persistente** (#10797)
   - Cenário: `MarkdownMemory::store()` com escritas concorrentes
   - Impacto: entries silenciosamente descartadas sem warning
   - Requer: mutex/writer serialization + verificação pós-escrita

2. **Estado de turn ACP descartado em falha** (#10788)
   - Cenário: provider failure (não cancellation) em turno Code/ACP
   - Impacto: prompt aceito + tool exchanges completas perdidos
   - Usuários受影响: sessões de ~200k tokens

3. **Notificações cancelam turns ativos** (#10785)
   - Cenário: lag de notificação dispara `begin_notification_resync → session/cancel`
   - Impacto: 4 sessões streaming canceladas simultaneamente
   - Frequência: 1 evento observador em produção

### Bugs de Experiência (UX)

| Cenário | Issue | Impacto |
|---------|-------|---------|
| Delete key no ZeroCode chat | [#10796](https://github.com/zeroclaw-labs/zeroclaw/issues/10796) | Impossibilita edição básica |
| Backspace com chars multibyte no REPL | [#10795](https://github.com/zeroclaw-labs/zeroclaw/issues/10795) | Corrupção visual de entrada |
| `service logs` vazio em macOS/Windows | [#10731](https://github.com/zeroclaw-labs/zeroclaw/issues/10731) | Diagnóstico impossível |

---

## 8. Backlog que Merece Atenção

### Issues sem resposta ou stale

| # | Título | Criado | Status | Observação |
|---|--------|--------|--------|------------|
| [#8733](https://github.com/zeroclaw-labs/zeroclaw/issues/8733) | models.dev catalog descarta capabilities (vision) | 2026-07-05 | `no-stale` | 68+ dias sem triagem |
| [#10436](https://github.com/zeroclaw-labs/zeroclaw/issues/10436) | OpenRouter streaming corta respostas | 2026-08-29 | Closed | Closed 2026-09-12 (resolvido) |
| [#10797](https://github.com/zeroclaw-labs/zeroclaw/issues/10797) | Markdown memory data loss | 2026-09-12 | `accepted` | Recém-reportado, risco imediato |

### PRs Blocked/Needs Maintainer Review

| # | Título | Waiting On | Tamanho |
|---|--------|------------|---------|
| [#10621](https://github.com/zeroclaw-labs/zeroclaw/pull/10621) | Coordinate agent lifecycle mutations | Maintainer | XL |
| [#10266](https://github.com/zeroclaw-labs/zeroclaw/pull/10266) | WhatsApp is_direct_message | Maintainer | S |
| [#9809](https://github.com/zeroclaw-labs/zeroclaw/pull/9809) | Multiple models per provider profile | Author | XL |

**Recomendação:** Priorizar review de #8733 (models.dev capabilities) que está há >60 dias sem movimento — indica gap de ownership em provider parsing.

---

## Métricas Resumidas do Dia

| Indicador | Valor | Tendência |
|-----------|-------|-----------|
| Issues abertas/ativas | 18 | Neutra |
| PRs abertos | 41 | Alta (pipeline ativo) |
| PRs merged/closed | 9 | Positiva (fluxo de entrega mantido) |
| Releases | 0 | — |
| Bugs P1 ativos | 5 | ⚠️ Atenção (3 involving data/state loss) |
| PRs de segurança merged | 3 | ✅ Positiva |

---

*Relatório gerado automaticamente com base em dados GitHub de 2026-09-12 23:59 UTC. Para detalhamento adicional, consultar [github.com/zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw).*

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*