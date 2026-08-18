# Resumo diário do ecossistema de agentes de IA 2026-08-19

> Issues: 0 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-08-18 20:16 UTC

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

# Relatório Comparativo — Ecossistema Open Source de Agentes de IA

**Data de Análise:** 2026-08-19  
**Projetos Avaliados:** NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw, ZeroClaw

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source demonstra maturidade heterogênea em 2026-08-19. **ZeroClaw e Hermes Agent** lideram em volume de atividade comunitária (50 issues + 50 PRs cada), enquanto **IronClaw** destaca-se pela disciplina de release com dois RCs em 48h. **NanoBot e CoPaw** apresentam ritmo de desenvolvimento intenso comPRs merged em número elevado, sugerindo pipeline saudável. **PicoClaw** mantém atividade moderada em fase de consolidação, e **NullClaw** permanece inativa. As convergências técnicas mais evidentes são: suporte a Windows como pain point universal, segurança de subprocessos/shell como tema crítico em múltiplos projetos, e necessidade de observabilidade/recoverability em produção.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | PRs Merged | Releases (24h) | Avaliação de Saúde |
|---------|:------------:|:---------:|:----------:|:--------------:|-------------------|
| **NullClaw** | 0 | 0 | 0 | 0 | ⚫ Inativa |
| **NanoBot** | 8 | 19 | 6 | 0 | 🟡 Estável com atenção |
| **Hermes Agent** | 50 | 50 | 15 | 1 (v0.20.4) | 🟡 Estável — 2 P1s críticos |
| **PicoClaw** | 6 | 3 | 1 | 0 | 🟢 Saudável com pontos de atenção |
| **IronClaw** | 22 | 38 | 6+ | 2 (RCs) | 🟢 Saudável — RC em estabilização |
| **CoPaw** | 45 | 50 | 19 | 0 | 🔴 Crítico — 5 bugs críticos abertos |
| **ZeroClaw** | 50 | 50 | — | 0 | 🟡 Estável — segurança em foco |

**Observação:** CoPaw apresenta volume alto mas com concentração de bugs críticos (5), demandando atenção imediata. Hermes Agent e ZeroClaw compartilham top em engajamento quantitativo.

---

## 3. Posicionamento do Projeto Principal

*Nota: "NullClaw" não possui atividade; análises subsequentes comparam os seis projetos ativos.*

### Posicionamento Relativo

| Dimensão | Líder | Seguidor Próximo | Laggard |
|----------|-------|------------------|---------|
| **Volume de Atividade** | ZeroClaw / Hermes Agent (paridade) | CoPaw | PicoClaw |
| **Velocidade de Release** | IronClaw (RCs consecutivos) | Hermes Agent (patch 74 PRs) | NanoBot / ZeroClaw |
| **Maturidade de Segurança** | ZeroClaw (sandboxes, RFCs formais) | IronClaw (action budgets) | CoPaw |
| **Estabilidade Cross-Platform** | NanoBot (Windows fixes ativos) | IronClaw (RC2 corrige upgrade) | ZeroClaw (74 testes falhando) |
| **Observabilidade/UX** | IronClaw (design system, notifications) | NanoBot (turn tracking) | CoPaw |
| **Comunidade Engajada** | ZeroClaw (22+ comentários em RFCs) | Hermes Agent (53 comentários) | PicoClaw |

### Vantagens Competitivas por Projeto

- **ZeroClaw**: Abordagem de segurança mais rigorosa (Landlock sandbox, SOP contracts, RFCs formalizados) — diferencia-se para deployments enterprise.
- **Hermes Agent**: Ecossistema mais maduro em canais (Telegram, Windows Desktop) com 74 PRs consolidados em release.
- **IronClaw**: Disciplina de release e design system profissionalizado — atrativo para equipes que valorizam DX e UX consistente.
- **NanoBot**: Foco em estabilidade cross-platform e performance de TUI — posiciona-se para desenvolvedores que usam CLI como interface primária.
- **CoPaw**: Maior diversificação de providers e canais, mas precisa resolver regressões críticas.
- **PicoClaw**: Projeto mais enxuto, focado em community-driven features (WebUI, IRC) com ciclo de desenvolvimento menos agressivo.

---

## 4. Focos Técnicos Compartilhados

### 4.1 Suporte a Windows — Dor Universal

Todos os projetos ativos enfrentam desafios com Windows:

| Projeto | Sintoma | Severidade |
|---------|---------|------------|
| **NanoBot** | PID handoff, gateway lifecycle | P2 (fixes ativos) |
| **Hermes Agent** | `get-windows` binding não staged | **P1** |
| **ZeroClaw** | 74 testes falhando, encoding, path semantics | **P1** |
| **CoPaw** | Crash ao executar tool calls (regressão v2.1.0) | **Crítico** |
| **IronClaw** | Upgrade crash-loop de 1.2.x | Corrigido em RC2 |

**Análise:** A incompatibilidade Windows é o maior impediment para adoção broad. ZeroClaw é o caso mais grave (74 testes) e representa dívida técnica acumulada. NanoBot demonstra abordagem proativa com múltiplos PRs de fix por dia.

### 4.2 Segurança de Subprocessos e Isolamento

| Projeto | Abordagem | Status |
|---------|-----------|--------|
| **NanoBot** | ULimits, cgroups (proposta) | #4797 — **Crítico** |
| **ZeroClaw** | Landlock sandbox, action budgets, SOP permissions | RFCs em andamento |
| **IronClaw** | Action budget accounting (race condition corrigida) | PR #9996 merged |
| **CoPaw** | Isolate subprocessos em plugins | PR #10093 em progresso (ZeroClaw) |

**Convergência:** A comunidade reconhece que LLMs executando shell commands sem constraints é vetor de DoS. ZeroClaw lidera em sofisticação (Landlock tiers), enquanto NanoBot precisa resolver issue #4797 urgentemente.

### 4.3 Estabilidade de Estado e Persistência

| Projeto | Problema | Evidência |
|---------|----------|-----------|
| **Hermes Agent** | Corrupção `state.db` (3x em 8 dias) | #89293 |
| **CoPaw** | `envs.json` corrompido silenciosamente | #7118 |
| **ZeroClaw** | Memory backend vs effective backend mismatch | #9896 |
| **NanoBot** | Session context preservation | #5421 |

**Sinal:** Arquiteturas que usam SQLite/libSQL para estado session-level enfrentam problemas de durability sob carga. Hermes Agent é caso mais crítico.

### 4.4 Observabilidade e Recoverability

- **NanoBot**: Turn tracking + safe recovery (#5420)
- **IronClaw**: Benchmark automation (#7713), notifications API (#7697)
- **ZeroClaw**: Dashboard SOP runs view live (#9928)
- **CoPaw**: Background task listing API (#7072)

**Tendência:** A próxima geração de agentes exige debuggabilidade production-grade, não apenas logging básico.

---

## 5. Análise de Diferenciação

### 5.1 Arquitetura e Escopo

| Projeto | Arquitetura | Escopo |
|---------|-------------|--------|
| **ZeroClaw** | Modular com SOP engine, Landlock sandbox, PostgreSQL optional | Enterprise-grade, multi-agent, cron isolation |
| **IronClaw** | Extensões, design system, Reborn runtime | Productivity/team usage |
| **NanoBot** | Gateway-centric, TUI-first | Developer tooling, CLI |
| **Hermes Agent** | Teams pipeline, webhook-centric | Community/collaboration |
| **CoPaw** | Multi-provider, MCP-first | Provider agnostic, channel diversity |
| **PicoClaw** | Lightweight, channel-focused | Community/simple use cases |

### 5.2 Público-Alvo Inferido

| Projeto | Público Primário | Público Secundário |
|---------|------------------|-------------------|
| **ZeroClaw** | Enterprise security-conscious | Developers needing SOP automation |
| **IronClaw** | Teams using automations | Developers valuing DX |
| **NanoBot** | Developers using TUI/CLI | Local-first users |
| **Hermes Agent** | Community users (Telegram, Windows) | Multi-profile power users |
| **CoPaw** | Multi-provider users | Non-technical users (Desktop) |
| **PicoClaw** | IRC communities | Self-hosted enthusiasts |

### 5.3 Diferenciação Estratégica

**ZeroClaw** posiciona-se como "segurança first" — única com RFCs formalizados, sandbox em kernel space (Landlock), e contracts tipados. Maior risco técnico (74 testes falhando), mas ambição superior.

**IronClaw** investe em design system e UX profissional — única com Storybook, theming, e componente reutilizável (`InlineNotice`). Diferencia-se em DX.

**CoPaw** é mais provider-agnostic — suporta Qwen, GLM, Volcengine, e busca Web. Maior diversificação de integrações.

**NanoBot** é TUI-first — investimento em performance de cold-start e UX de terminal.

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração

| Métrica | Mais Rápido | Observação |
|---------|-------------|-------------|
| **PRs merged/24h** | CoPaw (19) | Ciclo de revisão curto |
| **Taxa de release** | IronClaw (2 RCs em 48h) | Disciplina de feature freeze |
| **Volume de discussão** | Hermes Agent (53 comentários em issue) | Comunidade engajada em infraestrutura |
| **RFCs formalizados** | ZeroClaw (5+ RFCs ativos) | Governança madura |
| **Bugs críticos resolvidos** | IronClaw (libSQL starvation em 1 dia) | Capacidade de resposta |

### 6.2 Estabilização vs. Experimentação

| Perfil | Projetos | Características |
|--------|---------|-----------------|
| **Consolidação de Qualidade** | IronClaw, PicoClaw | Releases taggd, poucos critical bugs, foco em UX |
| **Iteração Rápida** | CoPaw, NanoBot | Muitos PRs, bugs críticos presentes, ritmo acelerado |
| **Expansão Controlada** | Hermes Agent, ZeroClaw | Volume alto, RFCs estruturados, bugs P1 em aberto |

### 6.3 Dívida Técnica Indicada

| Projeto | Dívida Visível | Risco |
|---------|----------------|-------|
| **ZeroClaw** | 74 testes Windows, compile failure hardware | Alto — impede cross-platform |
| **CoPaw** | 5 bugs críticos, env corruption, freeze >10min | Crítico — impacto direto em produção |
| **Hermes Agent** | state.db corruption recorrente | Alto — dados de sessão em risco |
| **NanoBot** | Resource limits ausentes (#4797) | Crítico — vetor de DoS |

---

## 7. Sinais de Tendência

### 7.1 Enterprise-readiness

O ecossistema está em transição de "developer tools" para "production deployments":

- **ZeroClaw**: RFCs de segurança (shell-policy tiers), sandboxing, SOP contracts
- **Hermes Agent**: Corrupção de `state.db` em produção, lock storm sob carga
- **NanoBot**: Spend Firewall proposal (#5409) — demanda de budget controls
- **IronClaw**: BudgetLedger accounting refinements (#7673)

**Sinal:** O próximo diferenciador será compliance, auditability e cost predictability.

### 7.2 Multi-Agent e Scheduler

| Evidência | Projeto |
|-----------|---------|
| Cron isolation cross-agent (#9947) | ZeroClaw |
| SOP engines, outcome derivation (#7650) | IronClaw |
| Background task coordination (#7072) | CoPaw |
| Session-scoped persistent prompts (#9998) | ZeroClaw |
| Automation runs hit-or-miss (#6879) | IronClaw |

**Sinal:** Agentes únicos estão evoluindo para multi-agent orchestrators. Cron/jobs são o primeiro caso de uso.

### 7.3 UX/Accessibility como Diferenciador

| Evidência | Projeto |
|-----------|---------|
| WebUI em desenvolvimento (#806) | PicoClaw |
| Voice-to-text no composer (#7724) | IronClaw |
| Follow-up suggestions, side conversations | NanoBot |
| Design System + Storybook (#7038) | IronClaw |
| Onboarding OOBE (#6994) | IronClaw |

**Sinal:** A batalha por não-desenvolvedores começou. WebUI e onboarding polished serão requisitos deTable.

### 7.4 Provider Diversification

| Provider | Projetos |
|----------|----------|
| Meta-search (mst-python) | NanoBot (#5234) |
| DashScope image gen | NanoBot (#5419) |
| Crusoe Managed Inference | ZeroClaw (#9338) |
| GLM 5.3, Qwen, Volcengine | CoPaw |
| DeepSeek cache tokens | PicoClaw |

**Sinal:** Lock-in em providers únicos está diminuindo. Suporte a múltiplos providers é expectativa baseline.

### 7.5 Observabilidade como Requisito

| Feature | Projeto |
|---------|---------|
| Turn tracking + safe recovery | NanoBot |
| Benchmark automation | IronClaw |
| Notifications API durável | IronClaw |
| Dashboard live activity | ZeroClaw |

**Sinal:** Agents precisam ser debugáveis em produção, não apenas em desenvolvimento.

---

## 8. Recomendações por Perfil

| Decisor | Recomendação |
|---------|--------------|
| **Enterprise Security** | Acompanhar ZeroClaw — líder em sandboxing e security contracts. Cautela com estabilidade Windows. |
| **Developer Experience** | IronClaw — melhor DX, design system, e disciplina de release. RC2 disponível. |
| **CLI/Power Users** | NanoBot — TUI otimizado, performance cold-start, comunidade ativa. |
| **Multi-Provider** | CoPaw — provider-agnostic, mas resolver bugs críticos primeiro. |
| **Community/IRC** | PicoClaw — leve, focado, WebUI em desenvolvimento. |
| **Broad Ecosystem** | Hermes Agent — maturidade em canais, 74 PRs consolidados. |

---

## 9. Síntese Final

O ecossistema de agentes de IA open source demonstra **fragmentação saudável** em 2026-08-19: cada projeto ocupa um nicho distinto (segurança enterprise vs. DX vs. CLI vs. multi-provider). As convergências técnicas (Windows, segurança de subprocessos, observabilidade) indicam que a indústria está resolvendo problemas similares em paralelo, com abordagens arquitetonicamente diferentes.

**ZeroClaw** é o projeto mais ambicioso tecnicamente, **IronClaw** o mais polido em UX, e **CoPaw** o mais ágil em volume. **NullClaw** requer reativação ou archivial. Para adotantes, a escolha depende de prioridades: segurança → ZeroClaw, produtividade → IronClaw, flexibilidade → CoPaw, simplicidade → NanoBot.

---

*Relatório gerado em: 2026-08-19*  
*Fontes: GitHub Issues/PRs de cada projeto (últimas 24h)*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-08-19

## 1. Panorama do dia

O NanoBot apresenta **alta atividade de desenvolvimento** em 19/08, com 8 issues e 19 PRs atualizados nas últimas 24h. O projeto está focado em **estabilidade cross-platform** (especialmente Windows), melhorias de observabilidade no WebUI/TUI, e refinamento de tratamento de tarefas em background. Seis PRs foram merged/fechados, demonstrando ritmo de entrega consistente. Não há releases novas hoje, e nenhuma issue antiga foi desbloqueada. A saúde geral é positiva, com foco em bugs e UX.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto está em ciclo ativo de desenvolvimento sem tagged releases no período. Isso indica preparação para uma未来的 versão com múltiplas melhorias accumulation.

---

## 3. Progresso do Projeto

### PRs fechados/merged hoje

| # | Título | Impacto |
|---|--------|---------|
| [#5433](https://github.com/HKUDS/nanobot/pull/5433) | test(exec): wait deterministically for truncation output | Teste determinístico para Windows, remove poll arbitrário de 500ms |
| [#5358](https://github.com/HKUDS/nanobot/pull/5358) | feat(webui): add lightweight cross-session messaging | Sessions now have stable `@handle`, permite listar/enviar mensagens entre sessões via WebUI |
| [#5432](https://github.com/HKUDS/nanobot/pull/5432) | fix(tui): refresh expired API credentials | TUI agora renova credenciais via endpoint autenticado após HTTP 401, sem logout forçado |
| [#5427](https://github.com/HKUDS/nanobot/pull/5427) | fix(tui): keep composer visible and focused | UX TUI: foco retorna ao composer após clicks, com edge accent e placeholder de maior contraste |
| [#5424](https://github.com/HKUDS/nanobot/pull/5424) | perf(tui): reduce cold-start and exit latency | TUI inicia processo antes de aguardar gateway; nanobot agent usa dispatch path leve |
| [#5418](https://github.com/HKUDS/nanobot/pull/5418) | fix(gateway): allow Windows launcher PID handoff | Gateway Windows pode consumir PID handoff do venv launcher, preservando lifecycle background/on-demand |

**Destaque:** O conjunto de PRs da Chengyongru representa ~50% do progresso de hoje, indicando contribuição concentrada em estabilidade e performance.

---

## 4. Temas Quentes da Comunidade

### Issues com maior potencial de discussão

**#5409 — "Prevent Margin Leaks & Surprise LLM Bills: Add a Hybrid Spend Firewall"** (CLOSED)
- Proposta de segurança financeira para防止 infinite loops consumirem budget de API
- Autor: sophieamoure2026-ui — posição-se como usuário comercial potencial
- Status: Fechada sem implementação aparente, mas sinaliza demanda real de enterprise
- **Análise:** Indica que o projeto está em transição para uso comercial, onde custo de LLM é preocupação prioritária

**#5421 — "should idle compaction preserve provider state created by a concurrent turn?"** (OPEN)
- Questão de design sobre o contrato de continuação de estado entre sessões
- Autor: er-s-an — pergunta antes de abrir PR de implementação
- **Análise:** Demonstra maturidade da comunidade em discutir design antes de código, positivo para projeto

**#5372 — "Memory for your agents — integration proposal (ViBo)"** (CLOSED)
- Proposta de integração de memória persistente entre sessões
- Closed sem merges, mas indica demanda por persistent memory

---

## 5. Bugs e Estabilidade

### Bugs em aberto (por severidade)

| Severidade | # | Título | Problema |
|------------|---|--------|----------|
| **CRÍTICA** | [#4797](https://github.com/HKUDS/nanobot/issues/4797) | No resource limits on shell subprocesses | `ExecTool._spawn()` sem ulimit, cgroups ou limites de CPU/memory. LLMs podem executar fork bombs ou comandos que consomem todos os recursos. Apenas timeout constraint. |
| **P2** | [#5429](https://github.com/HKUDS/nanobot/issues/5429) | AgentLoop does not retrieve exceptions from background tasks | `set.discard` callback não chama `task.result()`, exceções silenciosamente perdidas |
| **P2** | [#5428](https://github.com/HKUDS/nanobot/issues/5428) | AgentLoop retains empty active-task groups | `_active_tasks` acumula sets vazios após tarefas completarem, memory leak |
| **P2** | [#5425](https://github.com/HKUDS/nanobot/issues/5425) | Support legacy socks:// proxy URLs | Requests falham quando config ou ambiente contém `socks://` alias com providers OpenAI-compatíveis |

### Bugs recentemente corrigidos (PRs merged)

- [#5417](https://github.com/HKUDS/nanobot/issues/5417) — Windows WebUI exits on gateway PID handoff rejection → Fix em [#5418](https://github.com/HKUDS/nanobot/pull/5418)
- Suporte a `socks://` legacy → PR [#5426](https://github.com/HKUDS/nanobot/pull/5426) em aberto

**Alerta:** Issue #4797 (resource limits) requer atenção urgente — é um vetor de DoS explotável por LLMs maliciosos ou mal-configurados.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em desenvolvimento (PRs abertos)

| # | Título | Categoria | Prioridade |
|---|--------|-----------|------------|
| [#5420](https://github.com/HKUDS/nanobot/pull/5420) | feat(webui): add turn observability and safe recovery | WebUI | P0-ish |
| [#5234](https://github.com/HKUDS/nanobot/pull/5234) | feat(agent): integrate mst-python as metasearch provider | Provider | P1 (conflict) |
| [#5419](https://github.com/HKUDS/nanobot/pull/5419) | feat(providers): add native DashScope image generation client | Provider | P2 |
| [#5403](https://github.com/HKUDS/nanobot/pull/5403) | fix(memory): use API-reported prompt tokens for consolidation | Memory | P1 |
| [#5408](https://github.com/HKUDS/nanobot/pull/5408) | feat(webui): add follow-up suggestions | WebUI | P2 |
| [#5364](https://github.com/HKUDS/nanobot/pull/5364) | feat(webui): add temporary side conversations | WebUI | P2 |

### Sinais de roadmap
1. **Observabilidade** — Turn tracking e safe recovery (#5420) indica foco em debuggabilidade para produção
2. **Multi-provider** — Meta-search integration (#5234) e DashScope image gen (#5419) mostram expansão de providers
3. **Memory/Context** — Token consolidation baseada em dados reais da API (#5403) é correção crítica para long conversations
4. **UX WebUI** — Side conversations e follow-up suggestions indicam matangr para interface conversacional mais rica

---

## 7. Resumo de Feedback dos Usuários

### Dores relatadas

| Dor | Evidence | Severidade |
|-----|----------|------------|
| **Custo imprevisível de LLM** | #5409 (Spend Firewall proposal) | Alta — bloqueia adoção comercial |
| **Sem memória persistente** | #5372 (ViBo proposal) | Média — fricção em workflows multi-sessão |
| **Windows instabilidade** | #5417, #5341 | Alta —梗阻 a 50% dos desenvolvedores |
| **Contexto perdido em idle** | #5421 (design question) | Média — quebrando continuidade de sessão |
| **Proxy URLs quebrando** | #5425 | Média — comum em setups corporativos |

### Cenários de uso inferidos
- **Desenvolvimento local com agentes** — TUI e CLI são primary interfaces
- **Integração corporativa** — Proxy, autenticação, budget controls sendo requisitados
- **WebUI para非 devs** — Follow-up suggestions e side conversations indicam público menos técnico

---

## 8. Backlog que Merece Atenção

### Issues antigas sem movimento recente

| # | Título | Idade | Status | Recomendação |
|---|--------|-------|--------|--------------|
| [#4797](https://github.com/HKUDS/nanobot/issues/4797) | No resource limits on shell subprocesses | ~44 dias | OPEN | **Urgente:** Security issue. PRs #5431 e #5430 (fixes relacionados) podem ser preamble para fix |
| — | — | — | — | Não há outras issues com mais de 30 dias em aberto visíveis no período |

### PRs bloqueados por conflitos

| # | Título | Conflito desde | Impacto |
|---|--------|----------------|---------|
| [#5234](https://github.com/HKUDS/nanobot/pull/5234) | feat(agent): integrate mst-python | ~16 dias | Meta-search provider |
| [#5341](https://github.com/HKUDS/nanobot/pull/5341) | fix(skills): make weather workflow Windows-safe | ~8 dias | Usabilidade Windows |

**Ação recomendada:** Revisar e resolver conflitos em #5234 e #5341 para desbloquear contribuições.

---

## Métricas Resumidas (2026-08-19)

| Indicador | Valor | Tendência |
|-----------|-------|-----------|
| Issues ativas abertas | 5 | Neutra |
| PRs abertos | 13 | Alta |
| PRs merged/fechados | 6 | Positiva |
| Bugs críticos | 1 | Alerta (#4797) |
| Conflitos bloqueando | 2 | A resolver |
| Novas releases | 0 | N/A |

**Veredicto de Saúde:** 🟡 **Estável com需要注意** — Atividade alta e entregas consistentes, mas issue de segurança (#4797) e PRs em conflito merecem atenção imediata.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent
## Data: 2026-08-19

---

## 1. Panorama do Dia

O Hermes Agent mantém alta atividade com 50 issues e 50 PRs atualizados nas últimas 24h, demonstrando uma comunidade engajada. Foi publicada a release **v0.20.4** como patch de estabilização. Os temas prioritários hoje concentram-se em **estabilidade do gateway** (corrupção de state.db, hangs em chamadas de API), **compatibilidade com Windows** e **problemas de sessão em ambientes multiplexados**. A taxa de resolução está positiva com 3 issues fechadas e 15 PRs merged/fechados, indicando хороший ciclo de desenvolvimento.

---

## 2. Lançamentos

### 🆕 v2026.8.18 — Hermes Agent v0.20.4
**Data:** 18 de agosto de 2026

> **Patch release de consolidação.** Esta tag consolida ~74 PRs merged desde v0.20.3 em um release estável para consumidores downstream (imagens Docker, deployments hospedados, instalações frescas).

| Aspecto | Detalhe |
|---------|---------|
| **Tipo** | Patch |
| **PRs incluídas** | ~74 |
| **Breaking changes** | Nenhuma |
| **Migração** | Não requer ação — atualização direta recomendada |

**Recomendação:** Usuários em v0.20.3 ou anteriores devem atualizar para v0.20.4 para obter correções acumuladas.

---

## 3. Progresso do Projeto

### PRs Merged/Fechadas (15 total)

| # | PR | Componente | Tipo | Impacto |
|---|-----|------------|------|---------|
| [#89382](https://github.com/NousResearch/hermes-agent/pull/89382) | teams-pipeline: organizer-user-id | Teams pipeline | Bug fix | Adiciona flag para lookup organizado em URLs curtas `/meet/` |
| [#89417](https://github.com/NousResearch/hermes-agent/pull/89417) | hindsight: exception type in errors | Memory plugin | Bug fix | Inclui tipo de exceção em erros de ferramentas + orientação de timeout |
| [#89409](https://github.com/NousResearch/hermes-agent/pull/89409) | Telegram voice timeout | Telegram | Bug fix | Resolvido timeout repetido em downloads de voz após fallback |
| [#89414](https://github.com/NousResearch/hermes-agent/pull/89414) | docs(teams-pipeline) | Docs | Documentation | Documenta flag `--organizer-user-id` |

### PRs Abertas em Destaque (35 open)

| # | PR | Componente | Tipo | Prioridade |
|---|-----|------------|------|------------|
| [#85852](https://github.com/NousResearch/hermes-agent/pull/85852) | feat(local-runtime): managed llama.cpp | Agent/CLI/Desktop | Feature | P3 |
| [#89424](https://github.com/NousResearch/hermes-agent/pull/89424) | Dashboard model picker fix | CLI/Plugins | Bug fix | P3 |
| [#89433](https://github.com/NousResearch/hermes-agent/pull/89433) | cron PYTHONPATH leak | Cron | Bug fix | P2 |
| [#89425](https://github.com/NousResearch/hermes-agent/pull/89425) | excluded providers in auxiliary | Agent/Gateway | Bug fix | P2 |
| [#89427](https://github.com/NousResearch/hermes-agent/pull/89427) | Gitea/Forgejo webhook | Gateway/Webhook | Feature | P2 |
| [#89431](https://github.com/NousResearch/hermes-agent/pull/89431) | skills manifest mode preservation | Skills | Bug fix | P2 |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários)

| # | Título | Comentários | 👍 | Severidade | Status |
|---|--------|------------|----|------------|--------|
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | Skills index is stale/degraded | 53 | 0 | P3 | 🟡 OPEN |
| [#66887](https://github.com/NousResearch/hermes-agent/issues/66887) | Telegram sessions persist in wrong profile | 10 | 0 | **P1** | 🟡 OPEN |
| [#88251](https://github.com/NousResearch/hermes-agent/issues/88251) | Windows: get-windows binding never staged | 6 | 0 | **P1** | 🟡 OPEN |
| [#89206](https://github.com/NousResearch/hermes-agent/issues/89206) | Desktop Bot Mode: non-primary chats blank | 5 | 2 | P2 | ✅ CLOSED |
| [#5197](https://github.com/NousResearch/hermes-agent/issues/5197) | Run npm audit automatically | 5 | 0 | P3 | 🟡 OPEN |

**Análise:** A issue #66616 sobre o skills index degradado lidera em comentários (53), indicando frustração com automação de infraestrutura. A issue #66887 sobre sessões Telegram em perfis errados demonstra complexidade em cenários de multiplexação de gateway.

---

## 5. Bugs e Estabilidade

### 🔴 P1 — Críticos

| # | Título | Componente | Status |
|---|--------|------------|--------|
| [#66887](https://github.com/NousResearch/hermes-agent/issues/66887) | Telegram sessions persist in wrong profile | Gateway | OPEN |
| [#88251](https://github.com/NousResearch/hermes-agent/issues/88251) | Windows: get-windows binding not staged | CLI/Desktop | OPEN |
| [#89297](https://github.com/NousResearch/hermes-agent/issues/89297) | Gateway hangs permanently on API timeout | Gateway | OPEN |
| [#89293](https://github.com/NousResearch/hermes-agent/issues/89293) | Repeated state.db corruption (3x in 8 days) | Gateway/Sessions | OPEN |

**Caso crítico — #89293:** Usuário de produção reportou corrupção de `state.db` **três vezes em 8 dias** (2026-08-10, 08-16, 08-17) com lock storm + journal_mode revertido silenciosamente. Requer atenção imediata.

### 🟠 P2 — Importantes

| # | Título | Componente | Status |
|---|--------|------------|--------|
| [#88661](https://github.com/NousResearch/hermes-agent/issues/88661) | MCP timeout parks server connection | MCP Tools | OPEN |
| [#89166](https://github.com/NousResearch/hermes-agent/issues/89166) | Cross-process session lease floods gateways | Gateway | OPEN |
| [#89401](https://github.com/NousResearch/hermes-agent/issues/89401) | Quota exhaustion (429) shown as auth error | Gateway | OPEN |
| [#89396](https://github.com/NousResearch/hermes-agent/issues/89396) | Shutdown notification not sent to threads | Gateway | OPEN |
| [#89393](https://github.com/NousResearch/hermes-agent/issues/89393) | DB journal_mode flip needs warning | State | PR #89393 |
| [#89244](https://github.com/NousResearch/hermes-agent/issues/89244) | Desktop restore after compaction fails | Desktop | OPEN |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features em Destaque

| # | Título | Componente | Prioridade | Sinais |
|---|--------|------------|------------|--------|
| [#85852](https://github.com/NousResearch/hermes-agent/pull/85852) | Managed llama.cpp runtime (local models) | Agent/Desktop | P3 | **Alta demanda** — zero-config local models |
| [#5197](https://github.com/NousResearch/hermes-agent/issues/5197) | Automated npm audit | Cron | P3 | Security hardening |
| [#44413](https://github.com/NousResearch/hermes-agent/issues/44413) | Desktop: discoverable multi-backend profiles | Desktop/Profiles | P3 | UX improvement |
| [#89357](https://github.com/NousResearch/hermes-agent/issues/89357) | CDP attach for Electron apps | Browser/CLI | P3 | Developer tooling |
| [#87117](https://github.com/NousResearch/hermes-agent/pull/87117) | Non-interactive fallback add | CLI | P3 | Automation support |

**Sinais de roadmap observados:**
- **Integração local:** PR #85852 com llama.cpp managed runtime indica direção para modelos locais
- **Webhook expansion:** PR #89427 adiciona Gitea/Forgejo (rebased de #66895)
- **CDP automation:** Demanda crescente por controle de apps Electron via Chrome DevTools Protocol

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Categoria | Feedback | Evidência |
|-----------|----------|-----------|
| **Estabilidade em produção** | Corrupção recorrente de state.db em deployments busy | [#89293](https://github.com/NousResearch/hermes-agent/issues/89293) — 3 incidentes em 8 dias |
| **Windows support** | Desktop app não atualiza em Windows por falta de binding | [#88251](https://github.com/NousResearch/hermes-agent/issues/88251) |
| **Gateway reliability** | Hangs permanentes em chamadas de API travam completamente | [#89297](https://github.com/NousResearch/hermes-agent/issues/89297) |
| **Multiplexed profiles** | Sessões Telegram aparecem no perfil errado | [#66887](https://github.com/NousResearch/hermes-agent/issues/66887) |
| **Message delivery** | Notificações de shutdown/envio ignoram threads | [#89166](https://github.com/NousResearch/hermes-agent/issues/89166), [#89396](https://github.com/NousResearch/hermes-agent/issues/89396) |

### Cenários de Uso Reportados

1. **Deployments busy single-host** — lock storm + journal_mode corruption
2. **Windows Desktop users** — automação de update quebrada
3. **Multiplexed gateways** — Telegram + múltiplos perfis
4. **MCP servers** — timeout recovery não funciona
5. **Cross-platform sessions** — WeChat + desktop

### Satisfação/Insatisfação

| Indicador | Status |
|-----------|--------|
| Release cycle | ✅ Saudável — v0.20.4 consolida 74 PRs |
| Community engagement | ✅ Alto — 50 issues + 50 PRs em 24h |
| Bug resolution | ⚠️ Pendente — 2 P1s críticos sem resolução |
| Documentation | ✅ Em dia — PRs de docs sendo mergeados |

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Estagnadas

| # | Título | Idade | Severidade | Notas |
|---|--------|-------|------------|-------|
| [#5197](https://github.com/NousResearch/hermes-agent/issues/5197) | Run npm audit automatically | **126 dias** | P3 | Aguardando decisão de implementação |
| [#45535](https://github.com/NousResearch/hermes-agent/issues/45535) | Context Compression Amplification Bug | 67 dias | P2 | Double costs em interrupções |
| [#47950](https://github.com/NousResearch/hermes-agent/issues/47950) | Nous Portal OAuth broken | 63 dias | P2 | Fluxo de autenticação quebrado |
| [#66887](https://github.com/NousResearch/hermes-agent/issues/66887) | Telegram sessions wrong profile | 32 dias | **P1** | Ativo desde 2026-07-18 |
| [#44413](https://github.com/NousResearch/hermes-agent/issues/44413) | Multi-backend profile UX | 69 dias | P3 | Usabilidade Desktop |

### Recomendações

1. **Priorizar P1s:** #66887 (32 dias), #89293, #89297, #88251
2. **Revisitar OAuth (#47950):** 63 dias sem movimento — impactar usuários de Nous Portal
3. **Decidir sobre npm audit (#5197):** 126 dias — definir se entra no roadmap
4. **Investigar compressão (#45535):** Custos duplicados afetam diretamente usage

---

**Relatório gerado em:** 2026-08-19  
**Fonte:** Dados GitHub NousResearch/hermes-agent (últimas 24h)  
**Links:** [Repositório](https://github.com/nousresearch/hermes-agent) | [Issues](https://github.com/NousResearch/hermes-agent/issues) | [PRs](https://github.com/NousResearch/hermes-agent/pulls)

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-08-19

---

## 1. Panorama do Dia

O projeto PicoClaw demonstra **atividade moderada** nesta data, com 6 issues e 3 pull requests atualizados nas últimas 24 horas. O repositório apresenta um ritmo saudável de desenvolvimento: uma PR foi fechada (relacionada a logging de tokens de cache em provedores como DeepSeek), enquanto Issues de alta prioridade — como a feature de WebUI (#806) com 8 reações e 9 comentários — continuam gerando engajamento significativo da comunidade. Não houve novos lançamentos, sugerindo que a equipe pode estar em fase de consolidação antes de uma próxima release.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24 horas.**

O projeto encontra-se sem выпуск свежей версии, o que é consistente com o padrão de ciclos de release mais espaçados observados em projetos maduros. Recomenda-se monitorar o repositório para announcements futuros.

---

## 3. Progresso do Projeto

### PR Mergeada

| PR | Título | Impacto |
|----|--------|---------|
| [#3317](https://github.com/sipeed/picoclaw/pull/3317) | feat(providers): log prompt cache tokens in LLM response debug output | **Melhoria de observabilidade** — Adiciona suporte para exibir metadados de cache de prompts (via `cached_tokens`) no output de debug do gateway. Específicamente beneficia provedores como DeepSeek via Cloudflare AI Gateway que reportam essa informação no objeto `usage`. Aprimora capacidade de debugging e análise de custos em ambientes de produção. |

### PR em Aberto (Destaque)

| PR | Título | Status |
|----|--------|--------|
| [#3314](https://github.com/sipeed/picoclaw/pull/3314) | Fix: agent not able to execute shell command added to customAllowPatterns | Correção de bug crítico no sistema deallowlist de comandos. O PR resolve um problema onde padrões como `git push` eram bloqueados mesmo quando adicionados a `customAllowPatterns`, devido à lógica de "default deny" em `guardCommand` que sempre tomava precedence. |

---

## 4. Temas Quentes da Comunidade

### Issue com Maior Engajamento

| Issue | Título | Engajamento |
|-------|--------|--------------|
| [#806](https://github.com/sipeed/picoclaw/issues/806) | [Feature]: Add webUI support (Refactoring now) | **9 comentários, 8 👍** |

**Análise:** A demanda por uma interface web (WebUI) permanece como o tema mais discutido da comunidade. Classificada como `enhancement`, `high priority` e `roadmap`, esta feature visa reduzir a barreira de entrada para usuários não-técnicos, complementando a interface TUI existente. A menção "(Refactoring now)" indica que há trabalho ativo em andamento, embora ainda em fase de reestruturação. Este é um indicador claro de que a experiência do usuário e acessibilidade são prioridades estratégicas para o projeto.

### Issue Secundária em Destaque

| Issue | Título | Engajamento |
|-------|--------|--------------|
| [#3287](https://github.com/sipeed/picoclaw/issues/3287) | Better support long messages in IRC | **6 comentários** |

**Análise:** Esta issue aborda uma limitação técnica do protocolo IRC (512 bytes por mensagem). A comunidade reconhece a necessidade de tratar mensagens longas (IRCv3) como единое целое, ao invés de fragmentos isolados. Este é um caso de uso específico para comunidades técnicas que utilizam IRC como canal primário.

---

## 5. Bugs e Estabilidade

### Bugs Reportados (5 issues abertas + 1 fechada)

| Severidade | Issue | Título | Resumo |
|------------|-------|--------|--------|
| **🔴 Alta** | [#3339](https://github.com/sipeed/picoclaw/issues/3339) | Google Antigravity generation returns generic 429 | Autenticação e descoberta de modelos funcionam, mas todas as requests de geração retornam `RESOURCE_EXHAUSTED` (429). Indica problema de quota ou configuração no provider Google Antigravity. |
| **🟡 Média** | [#3301](https://github.com/sipeed/picoclaw/issues/3301) | /clear and session auto-compression don't work in chats routed to non-default agent | Comportamento inconsistente em chats roteados via dispatch rules para agents não-padrão. Afeta sessões em Discord e Telegram. |
| **🟡 Média** | [#3328](https://github.com/sipeed/picoclaw/issues/3328) | line.settings.webhook_host / webhook_port are never read | Configurações declaradas e documentadas mas sem consumer no código. potencial para confusão de usuários. |
| **🟢 Baixa** | [#3292](https://github.com/sipeed/picoclaw/issues/3292) | **[CLOSED]** CPU usage too high when focus on input box in chat interface | Já resolvida/fechada. |

### Análise de Estabilidade

O projeto apresenta **2 bugs de severidade média-alta** que merecem atenção imediata da equipe de maintainers. O bug #3339 (Google Antigravity 429) é particularmente crítico por bloquear completamente a funcionalidade de geração com o provider Google, mesmo com configuração válida. O bug #3301 afeta fluxos de trabalho específicos com dispatch rules, representando regressão funcional para casos de uso avançados.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em Pipeline

| Feature | Issue | Prioridade | Status |
|---------|-------|------------|--------|
| **WebUI** | [#806](https://github.com/sipeed/picoclaw/issues/806) | High / Roadmap | Em refatoração |
| **IRC Long Messages** | [#3287](https://github.com/sipeed/picoclaw/issues/3287) | Normal | Aberta, em discussão |

### Sinais de Roadmap

A presença de tags `roadmap` e `high priority` na issue #806, combinada com trabalho ativo de refatoração, indica que **a WebUI é a próxima grande feature planejada**. Este alinhamento estratégico sugere foco em:
- **Onboarding de novos usuários** — interface mais acessível
- **Multi-plataforma** — independence do terminal
- **UX/UI modernization**

A issue #3287 sobre IRC demonstra maturidade do projeto em cobrir casos de uso edge cases em protocolos legados.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Categoria | Descrição | Frequência |
|-----------|-----------|------------|
| **Configuração de Canais** | Usuários enfrentam configurações que aparentam funcionar mas não têm efeito (LINE webhook) | Recorrente |
| **Segurança/Execução** | Comandos shell adicionados à allowlist ainda são bloqueados | Crítico |
| **Performance UI** | Alto CPU ao focar em input box na interface web | Ja resolvido |
| **Integração Provider** | Problemas inexplicáveis de quota com Google Antigravity | Ativo |
| **Roteamento Avançado** | Funcionalidades falham em contexts de agents não-padrão via dispatch | Específico |

### Cenários de Uso Observados

1. **Multi-agent com dispatch rules** — Usuários experientes configuram pipelines complexos com múltiplos agentes roteados por regras
2. **Canais legacy** — IRC ainda é utilizado por comunidades técnicas
3. **Integração com providers cloud** — DeepSeek, Google Antigravity, LINE demonstram ecossistema diversificado
4. **Ambientes auto-hospedados** — Raspberry Pi mencionado como ambiente de deployment

### Indicadores de Satisfação/Insatisfação

- **Positivo:** 8 👍 na WebUI indicam demanda genuína e antecipação positiva
- **Neutro:** Bugs técnicos reportados com detalhes de ambiente completos, sugerindo comunidade engajada
- **Negativo:** Configurações "fantasma" (sem efeito) geram frustração e indicam gaps de documentação ou validação

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Estagnadas

| Issue | Idade | Status | Prioridade | Ação Recomendada |
|-------|-------|--------|------------|------------------|
| [#3301](https://github.com/sipeed/picoclaw/issues/3301) | ~21 dias | stale, sem resposta | Alta | Triagem pela equipe |
| [#3287](https://github.com/sipeed/picoclaw/issues/3287) | ~28 dias | Discussão ativa | Normal | Avançar decisão técnica |
| [#3328](https://github.com/sipeed/picoclaw/issues/3328) | ~8 dias | PR #3329 pendente | Média | Merge ou feedback |

### PRs em Backlog

| PR | Idade | Status | Impacto |
|----|-------|--------|---------|
| [#3329](https://github.com/sipeed/picoclaw/pull/3329) | ~8 dias | Aberta, em revisão | Adiciona warning para configurações inertes de LINE webhook |

---

## Conclusão

O projeto PicoClaw encontra-se em **estado saudável mas com pontos de atenção**. A atividade recente demonstra uma comunidade ativa com 9+ interações em issues principais. As prioridades técnicas para a equipe de desenvolvimento deveriam ser:

1. **Crítico:** Investigar e resolver o bug #3339 (Google Antigravity 429)
2. **Alta:** Revisar e testar o PR #3314 (customAllowPatterns)
3. **Estratégica:** Acompanhar desenvolvimento da WebUI (#806)
4. **Manutenção:** Avaliar merge do PR #3329 (LINE webhook warning)

O projeto demonstra maturidade técnica com issues bem documentadas e PRs com descrição clara de problemas e soluções. A ausência de releases recentes pode indicar foco em qualidade antes do próximo lançamento.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-08-19

## 1. Panorama do Dia

IronClaw apresenta **alta atividade de desenvolvimento** nas últimas 24h, com 38 PRs atualizados e 22 issues em movimento. A equipe emitiu dois release candidates consecutivos (v1.3.0-rc.1 e v1.3.0-rc.2) abordando um crash crítico em upgrades de 1.2.x, indicando foco em estabilidade e qualidade de release. O projeto demonstra maturidade em múltiplas frentes — automações, notificações, design system e extensões — comepic不小的 épicos em paralelo e uma quantidade relevante de PRs de tamanho XL em revisão. A atividade sugere um ciclo de release próximo, com a estabilização da v1.3.0 como prioridade imediata.

---

## 2. Lançamentos

### ironclaw-v1.3.0-rc.2
📅 2026-08-18 | [Release no GitHub](https://github.com/nearai/ironclaw/releases/tag/ironclaw-v1.3.0-rc.2)

**Correções:**
- **Migração de 1.2.x preserva `activation_state`**: upgrades de extensões de instalações v2 agora aceitam e preservam o campo `activation_state`, eliminando o crash-loop durante o startup que afetava deployments migrados.
- **SSH público no Reborn runtime**: a imagem canônica do Reborn runtime reabilitou o suporte opt-in a SSH com chave pública na porta 2222 durante execução do IronClaw.

**Recomendação**: Usuários em 1.2.x que enfrentavam crash-loop devem atualizar diretamente para rc.2.

---

### ironclaw-v1.3.0-rc.1
📅 2026-08-17 | [Release no GitHub](https://github.com/nearai/ironclaw/releases/tag/ironclaw-v1.3.0-rc.1)

- Release candidato sem notas de mudança significativas no diff. Serve como base para rc.2. **Nota**: deployments 1.2.x atualizando para rc.1 sofrem crash-loop — a correção veio em rc.2.

---

## 3. Progresso do Projeto

### PRs fechados/merged nas últimas 24h

| # | PR | Escopo | Impacto |
|---|---|--------|---------|
| [#7717](https://github.com/nearai/ironclaw/pull/7717) | `fix(resources): stop libSQL write-lane starvation` | **Crítico/Infra** | Resolveu starvation do journal do resource governor sob carga de benchmark, eliminando cascatas de invalidação de autoridade e leaks de reserva que causavam falha em chamadas de capability. Corrigiu [#7714](https://github.com/nearai/ironclaw/issues/7714). |
| [#7714](https://github.com/nearai/ironclaw/issues/7714)关联) | libSQL single write connection starves resource-governor journal | **Bug crítico** | Confirmado e resolvido em 1 dia — turnaround rápido. |
| [#7713](https://github.com/nearai/ironclaw/pull/7713) | `test: exercise /benchmark on qa-automation-preview` | **CI/QA** | Primeira execução de suite tipo `enterprise` via `/benchmark` no pipeline de automação. Valida infraestrutura de benchmark end-to-end. |
| [#7684](https://github.com/nearai/ironclaw/pull/7684) | `chore(deps): bump everything-else group (5 updates)` | **Dependências** | Atualização de segurança/tidying — base64, toml, http-body-util, pin-project, tower. |
| [#7638](https://github.com/nearai/ironclaw/pull/7638) | `Replace thread deletion alerts with global toast feedback` | **WebUI** | Substituiu `window.alert()` bloqueante por toast não-bloqueante — UX consistente com sistema de notificação existente. |
| [#7639](https://github.com/nearai/ironclaw/pull/7639) | `Introduce shared InlineNotice for page feedback` | **WebUI** | Componente reutilizável `InlineNotice` com variantes info/success/warning/danger, migrando 4+ banners inline inconsistentes. |

**Avaliação**: Semana sólida em infraestrutura e UX. A correção do bug libSQL (#7714 → #7717) demonstra capacidade de resposta a regressions de performance em cenários de benchmark. Convergência em componentes compartilhados do WebUI (#7639) reduzirá inconsistência visual.

---

## 4. Temas Quentes da Comunidade

### Issues com maior atenção

| # | Título | Comentários | 👍 | Tema |
|---|--------|-------------|----|------|
| [#7185](https://github.com/nearai/ironclaw/issues/7185) | Memory not reliably recalled across conversations | 2 | 0 | **Durabilidade de contexto** — múltiplos testadores reportaram que informações estabelecidas em uma conversa não são recalladas em conversas subsequentes. Closed. |
| [#6879](https://github.com/nearai/ironclaw/issues/6879) | Automation runs are hit-or-miss | 1 | 0 | **Execução de automações** — trigger fires executam como turns de chat interativo, não como runs autônomas. Problema estrutural, não ruído de modelo. |
| [#7673](https://github.com/nearai/ironclaw/issues/7673) | BudgetLedger accounting refinements | 1 | 0 | **Billing/precisão** — double-charge em janelas de launch truncadas + problema de durability de carga. |

### PRs com maior atenção (por extensão/relevância)

| # | Título | Tamanho | Escopo | Relevância |
|---|--------|---------|--------|------------|
| [#7491](https://github.com/nearai/ironclaw/pull/7491) | `feat(coding): omp core-tool contract + engines + benchmark arm` | XL | **Epicentral** | Substitui superfície de ferramentas de codificação por 6 nomes exatos (read, write, edit, glob, grep, bash) — mudança de contrato significativa para modelos. Slices 1-4. |
| [#7650](https://github.com/nearai/ironclaw/pull/7650) | `feat(automations): derive run outcomes from runtime evidence` | XL | **Automations** | Substitui julgamento semântico answer-only por avaliação determinística evidence-backed. Remove dependência de `required_capability_ids` em rotinas ordinárias. |
| [#7697](https://github.com/nearai/ironclaw/pull/7697) | `feat(notifications): add durable user inbox and product APIs` | XL | **Notifications** | Introduce contratos tipados de inbox, armazenamento durável por destinatário, paginação, contagem de não-lidos e APIs de ciclo de vida. |
| [#7724](https://github.com/nearai/ironclaw/pull/7724) | `feat(webui): voice-to-text in composer via NEAR AI Whisper` | XL | **UX/WebUI** | Microfone no composer: grava → transcreve no host → insere no caret. Não auto-envia — credencial de inferência nunca sai do browser. |
| [#6994](https://github.com/nearai/ironclaw/pull/6994) | `feat(webui): OOBE automation-tasks prototype` | XL | **Onboarding** | Primeira iteração de onboarding (carousel, cards inline, agent-mode pill) — gated por flag `oobe_suggestions` off-by-default. |

**Análise**: A convergência de [#6879](https://github.com/nearai/ironclaw/issues/6879) e [#7650](https://github.com/nearai/ironclaw/pull/7650) sugere que a equipe reconhece o problema estrutural de automações e está abordando com uma reformulação de como outcomes são derivados. O PR #7491 (OMP contract) é a mudança mais significativa em contrato de ferramenta visível ao modelo — sinal forte de evolução da superfície de tooling.

---

## 5. Bugs e Estabilidade

### Bugs abertos (por severidade)

#### 🔴 Alta severidade / Crítico

| # | Título | Escopo | Status |
|---|--------|--------|--------|
| [#7720](https://github.com/nearai/ironclaw/issues/7720) | `1.3.0-rc.1 crash-loops on boot after 1.2.x upgrade: unknown field activation_state` | **Release Blocker** | **ABERTO** — rc.1 crasha ao fazer boot em deployments migrados de 1.2.x. rc.2 (lançado ontem) corrige isso. Usuários em rc.1 devem atualizar para rc.2. |
| [#7726](https://github.com/nearai/ironclaw/issues/7726) | `IRONHUB_MANIFEST_URL configurável mas hardcoded para hub.ironclaw.com` | **Self-hosting** | **ABERTO** — qualquer valor pointing a um catalog auto-hospedado é rejeitado; host precisa estar em allowlist compile-time. Bloqueia self-hosting. |
| [#7727](https://github.com/nearai/ironclaw/issues/7727) | `Catalog capabilities artifact é obrigatório mas nunca é lido` | **Tooling/Catalog** | **ABERTO** — `IronHubToolEntry.capabilities` é campo requerido, artifact é baixado e verificado, mas nunca utilizado, incluindo para manifest v3 tools. |

#### 🟡 Média severidade

| # | Título | Escopo | Status |
|---|--------|--------|--------|
| [#7714](https://github.com/nearai/ironclaw/issues/7714) | `libSQL single shared write connection starves resource-governor journal` | **DB/Performance** | **FECHADO** — corrigido em [#7717](https://github.com/nearai/ironclaw/pull/7717). |
| [#7447](https://github.com/nearai/ironclaw/issues/7447) | `Agent fails after calling too many tools` | **Agent/Robos** | **ABERTO** — agente entra em loop fetch-retry redundante (4 rodadas de queries GitHub quase-duplicadas) queimando budget de tool-call. Epic. |
| [#7185](https://github.com/nearai/ironclaw/issues/7185) | `Memory not reliably recalled across conversations` | **Memória/Contexto** | **FECHADO** — bug reportado na weekly check-in de 2026-07-23, fechado em 2026-08-18. |

#### 🟢 Baixa / Enhancements categorizados como bug

| # | Título | Escopo | Status |
|---|--------|--------|--------|
| [#7681](https://github.com/nearai/ironclaw/issues/7681) | `Slack unlinked-user connect message é público` | **Slack/UX** | **ABERTO** — reply visível a todos no canal. Corrigido em [#7682](https://github.com/nearai/ironclaw/pull/7682) (em revisão). |

**Avaliação de estabilidade**: 3 bugs de alta severidade abertos. O mais crítico (#7720) já foi corrigido em rc.2 lançado ontem. #7726 e #7727 são blockers para self-hosting e tooling respectivamente, merecem priorização. A saúde geral é boa com correção rápida do libSQL starvation.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features e épicos abertos (v1.4.0)

| # | Feature | Escopo | Complexidade | Sinal estratégico |
|---|---------|--------|--------------|--------------------|
| [#7733](https://github.com/nearai/ironclaw/issues/7733) | `Epic: DESIGN.md governance + theme reskin phases 2–3` | **Docs/Gov** | Epic | Governança de design documentado — profissionalização do codebase. |
| [#7732](https://github.com/nearai/ironclaw/issues/7732) | `Sandboxing Solution with CLIs` | **Segurança** | Epic | E2E sandboxing com CLIs — evolução do modelo de segurança. |
| [#7731](https://github.com/nearai/ironclaw/issues/7731) | `Mnesis Spike` | **Memória** | Spike | Integração Mnesis como provider de memória — memória de longo prazo. |
| [#7467](https://github.com/nearai/ironclaw/issues/7467) | `Make Reborn durable state profile-agnostic + migrate legacy profile roots` | **Storage** | Epic | Elimina fragmentação de estado por profile — problema real de usabilidade em deployments com múltiplos profiles. |
| [#7392](https://github.com/nearai/ironclaw/issues/7392) | `Experiment: Replace first-party coding tools with pinned omp tool surface` | **Coding/Tools** | Epic | Substitui ferramentas de codificação pelo contrato OMP — consolidação de superfície de tooling. |
| [#7038](https://github.com/nearai/ironclaw/issues/7038) | `Epic: Storybook + AI-first Design System` | **WebUI** | Epic | Design system completo com Storybook, theming, assets, interações e IA. Proposta em [#7257](https://github.com/nearai/ironclaw/pull/7257). |
| [#7354](https://github.com/nearai/ironclaw/issues/7354) | `Epic: Extensions vNext — Unified Channels, Rich Messaging, Signal` | **Extensions** | Epic | Canais unificados, messaging rico e Signal production-ready. |
| [#6837](https://github.com/nearai/ironclaw/issues/6837) | `Add minimal info-level logging for growth/usage stats` | **Observability** | Enhancement | Zero info! logs em código IronClaw workspace; 52 são infraestrutura. Feature de analytics missing. |

### Sinais de roadmap

- **v1.4.0** é claramente a próxima versão maior, com 7+ épicos marcados (#[7467](https://github.com/nearai/ironclaw/issues/7467), #[7392](https://github.com/nearai/ironclaw/issues/7392), #[7038](https://github.com/nearai/ironclaw/issues/7038), #[7354](https://github.com/nearai/ironclaw/issues/7354), #[6837](https://github.com/nearai/ironclaw/issues/6837), #[7733](https://github.com/nearai/ironclaw/issues/7733), #[7732](https://github.com/nearai/ironclaw/issues/7732)).
- **v1.3.0** está em RC2 — feature freeze iminente.
- **Notificações** (#7697, #7699, #7700, #7698) representam um domínio de produto em expansão,

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do Projeto CoPaw (QwenPaw) — 2026-08-19

## 1. Panorama do Dia

O projeto CoPaw apresenta **alta atividade comunitária** em 19 de agosto de 2026, com 45 issues e 50 PRs atualizados nas últimas 24h — um volume indicando intensa colaboração e resolução ativa de problemas. Não houve novos lançamentos, mas o pipeline de PRs revela 19 merge/fechamentos e 31 abertas, demonstrando maturidade no fluxo de integração. A base de usuários demonstra forte engajamento em funcionalidades críticas (canais, MCP, multiagente) e reports de bugs que afetam estabilidade em produção. O time respondeu rapidamente a múltiplas vulnerabilidades de segurança via PRs dedicados.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24h.** O projeto não publicou novas versões entre 2026-08-18 e 2026-08-19. A versão mais recente permanece **v2.1.0** (Desktop) / **2.1beta2** (Console), lançada anteriormente.

> ⚠️ *Recomendação: Monitorar o backlog de PRs críticos merged que ainda não fizeram parte de release tag.*

---

## 3. Progresso do Projeto

Os seguintes PRs foram **merged/fechados** recentemente, representando avanços concretos:

| PR | Descrição | Área | Status |
|----|-----------|------|--------|
| [#7072](https://github.com/agentscope-ai/QwenPaw/pull/7072) | Nova API de listagem de tarefas em background (`GET /console/chat/task`) para coordenação multiagente | Console | ✅ Closed |
| [#7066](https://github.com/agentscope-ai/QwenPaw/pull/7066) | **Correção crítica**: persiste `refresh_token` rotacionado em OAuth2 Authorization Code (MCP remoto) — resolve [#7053](https://github.com/agentscope-ai/QwenPaw/issues/7053) | Drivers | ✅ Closed |
| [#7069](https://github.com/agentscope-ai/QwenPaw/pull/7069) | Renderiza imagens `data-URL` em mensagens históricas ao recarregar sessão — resolve [#7051](https://github.com/agentscope-ai/QwenPaw/issues/7051) | Console | ✅ Closed |
| [#7064](https://github.com/agentscope-ai/QwenPaw/pull/7064) | Sincroniza campo `text` de nível superior em `cron update` para jobs de tipo agent — resolve [#7048](https://github.com/agentscope-ai/QwenPaw/issues/7048) | CLI | ✅ Closed |
| [#7071](https://github.com/agentscope-ai/QwenPaw/pull/7071) | Torna limite de 2MB para vídeos inline configurável por provider (em vez de hardcoded) | Agents | 🔄 Under Review |
| [#7054](https://github.com/agentscope-ai/QwenPaw/pull/7054) | Suporte a endpoint de bridge remoto para Chrome em navegadores LAN/network | Chrome | 🔄 Under Review |
| [#6617](https://github.com/agentscope-ai/QwenPaw/pull/6617) | Honra limite `Retry-After` no path de retry de streaming | Providers | ✅ Closed |

**Destaque de arquitetura:**
- [#7114](https://github.com/agentscope-ai/QwenPaw/pull/7114) — Refatoração para tornar carregamento de config de agentes assíncrono por padrão (preparação para performances em escala)
- [#6764](https://github.com/agentscope-ai/QwenPaw/pull/6764) — Gating de merge em `main` com testes obrigatórios (corrige problema recorrente de merges com CI vermelho)

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários):

| Issue | Título | Comentários | Tipo | Link |
|-------|--------|:-----------:|------|------|
| [#6684](https://github.com/agentscope-ai/QwenPaw/issues/6684) | Funcionalidade de retry para canais (Matrix) | **10** | enhancement | [🔗](https://github.com/agentscope-ai/QwenPaw/issues/6684) |
| [#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921) | Tarefas multi-etapa param sem aviso após "Let me do all three" | **8** | bug | [🔗](https://github.com/agentscope-ai/QwenPaw/issues/6921) |
| [#7102](https://github.com/agentscope-ai/QwenPaw/issues/7102) | Congelamento >10 minutos com GLM 5.3 | **7** | bug | [🔗](https://github.com/agentscope-ai/QwenPaw/issues/7102) |
| [#7011](https://github.com/agentscope-ai/QwenPaw/issues/7011) | Stop request do Console cancela sessão Feishu ativa | **7** | bug | [🔗](https://github.com/agentscope-ai/QwenPaw/issues/7011) |

### Análise dos temas quentes:

**🔁 Confiabilidade de canais (Issue #6684)**  
Autor: MCQSJ | 10 comentários  
Problema recorrente: canais Matrix falham no startup do QwenPaw por timing (QwenPaw inicia antes do servidor Matrix). Sem retry automático, usuários precisam re-salvar canais manualmente a cada reinicialização. **Demanda clara**: resiliência de conexão e health check.

**⏸️ Interrupção silenciosa de tarefas (Issue #6921)**  
Autor: rerbin | 8 comentários  
Sintoma: o modelo planeja etapas ("Now 2.1, 3.1, 3.2. Let me do all three.") e para sem output visual. Usuário precisa digitar "continuar". **Hipótese**: problema no stream de resposta ou na UI de renderização dothinking process.

**🛡️ Preocupação com segurança (Issue #6775)**  
Autor: boktoday | 3 comentários  
Malwarebytes classifica instalador Windows como Trojan Loader — **falso positivo confirmado pela comunidade**, mas demonstra necessidade de assinatura de código / documentação de segurança mais clara.

---

## 5. Bugs e Estabilidade

### Por severidade:

#### 🔴 Críticos (impacto em produção, múltiplos afetados)

| Issue | Título | Severidade | Link |
|-------|--------|:----------:|------|
| [#7063](https://github.com/agentscope-ai/QwenPaw/issues/7063) | **Crash ao executar tool call** — `async for` em coroutine inválida | **Crítica** | [🔗](https://github.com/agentscope-ai/QwenPaw/issues/7063) |
| [#7102](https://github.com/agentscope-ai/QwenPaw/issues/7102) | **Freeze >10 min** com GLM 5.3 — nem thinking process responde | **Crítica** | [🔗](https://github.com/agentscope-ai/QwenPaw/issues/7102) |
| [#7082](https://github.com/agentscope-ai/QwenPaw/issues/7082) | `_StructuredOutputDynamicClass` not fully defined — erro Pydantic na inicialização | **Crítica** | [🔗](https://github.com/agentscope-ai/QwenPaw/issues/7082) |
| [#7118](https://github.com/agentscope-ai/QwenPaw/issues/7118) | `envs.json` corrompido silenciosamente apaga todas variáveis de ambiente | **Crítica** | [🔗](https://github.com/agentscope-ai/QwenPaw/issues/7118) |
| [#7110](https://github.com/agentscope-ai/QwenPaw/issues/7110) | Imagem indownlodável quebra sessão inteira — só `/clear` recupera | **Alta** | [🔗](https://github.com/agentscope-ai/QwenPaw/issues/7110) |

> **Issue #7063 detail**: Bug introduzido em v2.1.0 — `_execute_tool_call` usa `async for` em `_acting(tool_call)` que retorna coroutine (não async generator). Correção direta disponível no codebase.

#### 🟡 Moderados

| Issue | Título | Severidade | Link |
|-------|--------|:----------:|------|
| [#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921) | Tarefas multi-etapa param silenciosamente | Alta | [🔗](https://github.com/agentscope-ai/QwenPaw/issues/6921) |
| [#7011](https://github.com/agentscope-ai/QwenPaw/issues/7011) | Stop request cancela sessão Feishu entre sessões UI | Alta | [🔗](https://github.com/agentscope-ai/QwenPaw/issues/7011) |
| [#7039](https://github.com/agentscope-ai/QwenPaw/issues/7039) | Auto-criação de sessões + falta de opção para desativar preview | Média | [🔗](https://github.com/agentscope-ai/QwenPaw/issues/7039) |
| [#7065](https://github.com/agentscope-ai/QwenPaw/issues/7065) | Não consegue ver histórico após ~7 rodadas de discussão | Média | [🔗](https://github.com/agentscope-ai/QwenPaw/issues/7065) |
| [#7074](https://github.com/agentscope-ai/QwenPaw/issues/7074) | Crashes frequentes exigem refresh — alta frequência | Alta | [🔗](https://github.com/agentscope-ai/QwenPaw/issues/7074) |
| [#6470](https://github.com/agentscope-ai/QwenPaw/issues/6470) | MCP driver ignora `streamable_http` config (hardcoded SSE) | Alta | [🔗](https://github.com/agentscope-ai/QwenPaw/issues/6470) |

#### 🟢 Menores / Regression

| Issue | Título | Link |
|-------|--------|------|
| [#7046](https://github.com/agentscope-ai/QwenPaw/issues/7046) | `execute_shell_command` corrompe heredoc/multi-line | [🔗](https://github.com/agentscope-ai/QwenPaw/issues/7046) |
| [#6794](https://github.com/agentscope-ai/QwenPaw/issues/6794) | Agent Kanban POST retorna 405 (Method Not Allowed) | [🔗](https://github.com/agentscope-ai/QwenPaw/issues/6794) |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features em alta demanda:

| Issue | Título | Área | Prioridade aparente | Link |
|-------|--------|------|:-------------------:|------|
| [#7052](https://github.com/agentscope-ai/QwenPaw/issues/7052) | Permissão `system_prompt` para APIs de plugin | Plugins | Alta | [🔗](https://github.com/agentscope-ai/QwenPaw/issues/7052) |
| [#6925](https://github.com/agentscope-ai/QwenPaw/issues/6925) | Colaboração de agentes em janela única (evita切换) | Multi-agent | Alta | [🔗](https://github.com/agentscope-ai/QwenPaw/issues/6925) |
| [#7062](https://github.com/agentscope-ai/QwenPaw/issues/7062) | `reasoning_effort` por agent/sessão (não só provider) | Models | Média | [🔗](https://github.com/agentscope-ai/QwenPaw/issues/7062) |
| [#6684](https://github.com/agentscope-ai/QwenPaw/issues/6684) | Retry e health check para canais | Channels | Alta | [🔗](https://github.com/agentscope-ai/QwenPaw/issues/6684) |
| [#7090](https://github.com/agentscope-ai/QwenPaw/issues/7090) | Busca/filtro na página de importação de skills | Skills | Média | [🔗](https://github.com/agentscope-ai/QwenPaw/issues/7090) |
| [#6260](https://github.com/agentscope-ai/QwenPaw/issues/6260) | Colapsar思考/ferramentas e mostrar só resultado | UX | Média (+1 👍) | [🔗](https://github.com/agentscope-ai/QwenPaw/issues/6260) |

### PRs de features em pipeline:

| PR | Título | Estágio | Link |
|----|--------|---------|------|
| [#7112](https://github.com/agentscope-ai/QwenPaw/pull/7112) | **QwenPaw Pro**: control plane local isolado multi-tenant | Draft | [🔗](https://github.com/agentscope-ai/QwenPaw/pull/7112) |
| [#6800](https://github.com/agentscope-ai/QwenPaw/pull/6800) | **Mailbox assistant**: gestão inteligente de email com monitoramento real-time | Aberto | [🔗](https://github.com/agentscope-ai/QwenPaw/pull/6800) |
| [#7081](https://github.com/agentscope-ai/QwenPaw/pull/7081) | **AnySearch**: integração de busca web (SearchProvider + MCP) | Aberto | [🔗](https://github.com/agentscope-ai/QwenPaw/pull/7081) |
| [#6515](https://github.com/agentscope-ai/QwenPaw/pull/6515) | **Volcengine Agent Plan & MiMo V2.5**: novos providers | Under Review | [🔗](https://github.com/agentscope-ai/QwenPaw/pull/6515) |

---

## 7. Resumo de Feedback dos Usuários

### Dores reais identificadas:

| Categoria | Descrição | Impacto | Issues relacionadas |
|-----------|

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório de Projeto — ZeroClaw

**Data:** 2026-08-19
**Repositório:** github.com/zeroclaw-labs/zeroclaw

---

## 1. Panorama do Dia

O projeto ZeroClaw mantém altíssima atividade com 50 issues e 50 PRs atualizados nas últimas 24h, sem nenhum release正式 hoje. A comunidade está focada em três eixos principais: **segurança** (completando PRs de sandbox, action budgets e isolamento de subprocessos), **estabilidade em plataforma Windows** (74 testes falhando, normalização de line endings) e **evoluções de arquitetura** (RFCs sobre memory lifecycle, SOP permissions e cron security). Não houve lançamentos, indicando que a equipe pode estar em fase de consolidação antes de um próximo release.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24h.**

O projeto não publicou novas versões hoje. Isso é consistente com o padrão de desenvolvimento ativo onde múltiplos PRs de segurança e bugfix estão em revisão, sugerindo que um release focusing em patches pode estar próximo.

---

## 3. Progresso do Projeto

### PRs Importantes Merged/Fechadas

| # | Título | Impacto | Link |
|---|--------|---------|------|
| **#9996** | `fix(security): make action budget accounting atomic` | **ALTO** — Corrige race condition no accounting de action budgets para chamadas paralelas, garantindo que `max_actions_per_hour` não seja excedido. | [PR #9996](https://github.com/zeroclaw-labs/zeroclaw/pull/9996) |
| **#9819** | `fix(multimodal): add pixel-level image validation` | **ALTO** — Validação completa de imagens via decodificação (não apenas header sniffing), prevenindo requests falhos com imagens corrompidas. | [PR #9819](https://github.com/zeroclaw-labs/zeroclaw/pull/9819) |

### PRs Abertas em Progresso

| # | Título | Escopo | Link |
|---|--------|--------|------|
| **#10100** | `feat(security): honor allowed_roots tiers in Landlock sandbox` | Integra três níveis de allowed_roots no Landlock sandbox. | [PR #10100](https://github.com/zeroclaw-labs/zeroclaw/pull/10100) |
| **#10093** | `fix(hardware): isolate manifest-installed plugin subprocesses` | Limpa ambiente herdado e aplica allowlist restritiva em subprocessos de plugins. | [PR #10093](https://github.com/zeroclaw-labs/zeroclaw/pull/10093) |
| **#10098** | `fix(security): grant Landlock access to DNS and TLS config` | Adiciona regras de leitura para `/etc/resolv.conf` e `/etc/nsswitch.conf`. | [PR #10098](https://github.com/zeroclaw-labs/zeroclaw/pull/10098) |
| **#10085** | `feat(gateway): answer WhatsApp passkey gate` | Habilita linking de dispositivos WhatsApp após atualização upstream. | [PR #10085](https://github.com/zeroclaw-labs/zeroclaw/pull/10085) |
| **#10095** | `ci(docker): enforce non-root production image` | Garante que imagem Docker usa `65534:65534` como user/group. | [PR #10095](https://github.com/zeroclaw-labs/zeroclaw/pull/10095) |
| **#10094** | `ci(memory): require PostgreSQL backend tests` | Adiciona job obrigatório para testes de memória PostgreSQL em PRs. | [PR #10094](https://github.com/zeroclaw-labs/zeroclaw/pull/10094) |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| # | Título | Comentários | Link |
|---|--------|-------------|------|
| **#7155** | RFC: Add per-execution confirmation tier for high-risk shell commands + Claude Code-style pattern | **22** | [Issue #7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) |
| **#7462** | 74 test failures on Windows — Unix-only test commands, path semantics, console encoding | **17** | [Issue #7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) |
| **#6850** | RFC: Decouple memory lifecycle policy from storage backends | **13** | [Issue #6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) |
| **#9965** | runtime-written executable test fixtures hit ETXTBSY under parallel runtime gate | **7** | [Issue #9965](https://github.com/zeroclaw-labs/zeroclaw/issues/9965) |
| **#9598** | RFC: Define the SOP capability permission contract | **6** | [Issue #9598](https://github.com/zeroclaw-labs/zeroclaw/issues/9598) |

### Análise de Demandas

1. **Segurança de Shell Commands (#7155):** A comunidade debate ativamente um sistema de tiers (allow/ask/deny) para comandos shell de alto risco, inspirado em Claude Code. Há convergência sobre o escopo normativo, com foco no contrato `shell-policy`.

2. **Compatibilidade Windows (#7462):** 74 testes falhando devido a comandos Unix-only, semânticas de path e encoding de console. A CI não captura isso porque só roda em Linux. A comunidade busca soluções cross-platform.

3. **Memory Lifecycle (#6850):** RFC maduro (13 comentários) propõe separação entre storage backends e política de lifecycle, eliminando duplicação entre gateways e channels.

---

## 5. Bugs e Estabilidade

### Por Severidade

#### S0 - Risco de perda de dados / segurança (Crítico)

| # | Título | Status | Link |
|---|--------|--------|------|
| **#9947** | cron tools are not scoped to owning agent — any agent can read/trigger/modify/delete another's jobs | `in-progress` | [Issue #9947](https://github.com/zeroclaw-labs/zeroclaw/issues/9947) |

> ⚠️ **CRÍTICO:** Bug de segurança permite cross-agent access a jobs cron. Prioridade máxima.

#### S1 - Workflow bloqueado

| # | Título | Status | Link |
|---|--------|--------|------|
| **#10066** | SOP engine promotes and runs later steps before recording step's output-schema rejection | `accepted` | [Issue #10066](https://github.com/zeroclaw-labs/zeroclaw/issues/10066) |

#### P1 - Alta Prioridade

| # | Título | Status | Link |
|---|--------|--------|------|
| **#7462** | 74 test failures on Windows | `accepted` | [Issue #7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) |
| **#10067** | One oversized tool result is unrecoverable — 1MB memory bound, not context bound | `accepted` | [Issue #10067](https://github.com/zeroclaw-labs/zeroclaw/issues/10067) |
| **#9832** | zeroclaw-hardware fails to compile with `--features hardware` | `in-progress` | [Issue #9832](https://github.com/zeroclaw-labs/zeroclaw/issues/9832) |
| **#9940** | turn-context tells agents to use a cron delivery channel that cannot resolve | `in-progress` | [Issue #9940](https://github.com/zeroclaw-labs/zeroclaw/issues/9940) |
| **#10006** | `endpoint_lock_is_held_through_guard_cleanup` flakes under Parallel Runtime Test gate | `CLOSED` | [Issue #10006](https://github.com/zeroclaw-labs/zeroclaw/issues/10006) |
| **#10013** | Edge TTS cancellation test can miss fake child startup under parallel load | `CLOSED` | [Issue #10013](https://github.com/zeroclaw-labs/zeroclaw/issues/10013) |

#### P2 - Comportamento Degradado

| # | Título | Status | Link |
|---|--------|--------|------|
| **#10068** | Interactive agent session caps context at 32,000 tokens, ignoring max_context_tokens | `in-progress` | [Issue #10068](https://github.com/zeroclaw-labs/zeroclaw/issues/10068) |
| **#9857** | JSONL session operations disagree on valid file types | `in-progress` | [Issue #9857](https://github.com/zeroclaw-labs/zeroclaw/issues/9857) |
| **#9896** | status/startup banner reports `Memory: none` when effective backend is sqlite | `in-progress` | [Issue #9896](https://github.com/zeroclaw-labs/zeroclaw/issues/9896) |
| **#9925** | model thinking output sometimes leaks to daemon stdout | `in-progress` | [Issue #9925](https://github.com/zeroclaw-labs/zeroclaw/issues/9925) |
| **#9919** | reject Qdrant in builder-only factory without storage config | `in-progress` | [Issue #9919](https://github.com/zeroclaw-labs/zeroclaw/issues/9919) |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features em Discussão

| # | Título | Prioridade | Link |
|---|--------|------------|------|
| **#9928** | dashboard SOP runs view shows live per-run activity, not only step transitions | P2 | [Issue #9928](https://github.com/zeroclaw-labs/zeroclaw/issues/9928) |
| **#9970** | Authorize Discord members by role, not just user ID | P2 | [Issue #9970](https://github.com/zeroclaw-labs/zeroclaw/issues/9970) |
| **#10059** | Support Option-Backspace word deletion in ZeroCode text inputs | P3 | [Issue #10059](https://github.com/zeroclaw-labs/zeroclaw/issues/10059) |

### RFCs em Andamento (Roadmap Indicators)

| # | Título | Escopo | Link |
|---|--------|--------|------|
| **#7155** | RFC: Per-execution confirmation tier for shell commands | v0.9.0 | [Issue #7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) |
| **#9598** | RFC: Define SOP capability permission contract | v0.9.0 | [Issue #9598](https://github.com/zeroclaw-labs/zeroclaw/issues/9598) |
| **#6850** | RFC: Decouple memory lifecycle from storage backends | Future | [Issue #6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) |
| **#9998** | RFC: Session-scoped persistent prompt attachments | Future | [Issue #9998](https://github.com/zeroclaw-labs/zeroclaw/issues/9998) |
| **#9990** | RFC: Calibrate PR risk and security approval requirements | Process | [Issue #9990](https://github.com/zeroclaw-labs/zeroclaw/issues/9990) |
| **#9967** | Tracker: Establish harness evaluation framework | Epic | [Issue #9967](https://github.com/zeroclaw-labs/zeroclaw/issues/9967) |

### Provider Additions

| # | Título | Status | Link |
|---|--------|--------|------|
| **#9338** | feat(provider): add Crusoe Managed Inference as first-class OpenAI-compatible provider | `needs-author-action` | [PR #9338](https://github.com/zeroclaw-labs/zeroclaw/pull/9338) |

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

1. **Contexto de agente limitado (#10068):** Usuários com `max_context_tokens = 131072` experimentam cap de 32,000 tokens, frustrando sessões longas.

2. **Falhas em Windows (#7462):** Usuários Windows reportam 74 testes falhando, especialmente em ambientes Simplified Chinese (console code page 936). A CI não captura isso.

3. **Leaks de output (#9925):** Thinking output do modelo vaza para stdout do daemon durante operações cron, poluindo terminais.

4. **Status de memória misleading (#9896):** Banner mostra `Memory: none` quando backend sqlite está ativo, confundindo usuários.

5. **ZeroCode UX (#10058, #10059):** Navegação de search e deleção de palavras incompletas em inputs de texto.

### Cenários de Uso Observados

- **Multi-agente com cron:** Usuários multi-agente estão sendo bloqueados pelo bug de segurança de cron isolation (#9947).
- **SOP workflows longos:** Usuários executando SOPs de 30-90 minutos não veem atividade em tempo real no dashboard (#9928).
- **Discord integration:** Administradores pedindo autorização por role, não apenas por user ID (#9970).

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Stale

| # | Título | Idade | Prioridade | Link |
|---|--------|-------|------------|------|
| **#9972** | Tracker: Eliminate user-facing literal output outside localization | 6 dias | P2 | [Issue #9972](https://github.com/zeroclaw-labs/zeroclaw/issues/9972) |
| **#9832** | Hardware compile failure | 12 dias | P1 | [Issue #9832](https://github.com/zeroclaw-labs/zeroclaw/issues/9832) |
| **#9919** | Qdrant builder factory error | 8 dias | P1 | [Issue #9919](https://github.com/zeroclaw-labs/zeroclaw/issues/9919) |

### Issues com Status "needs-maintainer-review" ou "needs-author-action"

| # | Título | Tipo | Link |
|---|--------|------|------|
| **#9998** | RFC: Session-scoped persistent prompt attachments | RFC | [Issue #9998](https://github.com/zeroclaw-labs/zeroclaw/issues/9998) |
| **#9990** | RFC: Calibrate PR risk and security approval requirements | RFC | [Issue #9990](https://github.com/zeroclaw-labs/zeroclaw/issues/9990) |
| **#10040** | CI Lint timeout headroom for fork PRs | Feature | [Issue #10040](https://github.com/zeroclaw-labs/zeroclaw/issues/

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*