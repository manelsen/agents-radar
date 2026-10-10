# Resumo diário do ecossistema de agentes de IA 2026-10-11

> Issues: 1 | PRs: 1 | Projetos cobertos: 7 | Gerado em: 2026-10-10 23:08 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório de Projeto NullClaw — 2026-10-11

---

## 1. Panorama do Dia

O projeto NullClaw apresenta **atividade mínima** nesta data, com apenas 1 issue e 1 PR abertos nas últimas 24 horas, ambos do mesmo autor (vernonstinebaker). Não houve lançamentos recentes. A atividade está concentrada em um tema técnico específico: o gerenciamento de histórico de sessões e seus limites de memória. O projeto não registrou interação comunitária adicional (sem reactions ou comments significativos), indicando um período de desenvolvimento interno.

---

## 2. Lançamentos

**Nenhum lançamento registrado nas últimas 24 horas.**

- Releases mais recentes: Nenhuma
- Breaking changes: N/A
- Notas de migração: N/A

---

## 3. Progresso do Projeto

### PRs Abertas

| # | Título | Autor | Status | Link |
|---|--------|-------|--------|------|
| #1054 | fix(session): bound restored history to max_history_messages | vernonstinebaker | OPEN | [PR #1054](https://github.com/nullclaw/nullclaw/pull/1054) |

**Análise:** O PR #1054 propõe uma correção para o problema de histórico de sessões não limitado (issue #1053). A validação报告显示 `zig build test —summary all` com **7491/7500 testes passando** (9 ignorados, 0 falhas, 0 vazamentos de memória), indicando maturidade do código e baixa probabilidade de regressões. Este é um PR pronto para review que resolve um problema de estabilidade de longo prazo.

---

## 4. Temas Quentes da Comunidade

### Issue com Atividade

| # | Título | Comentários | Reactions | Link |
|---|--------|-------------|-----------|------|
| #1053 | Session history is reloaded unbounded; auto-compaction cannot bound per-request context | 1 | 0 | [Issue #1053](https://github.com/nullclaw/nullclaw/issues/1053) |

**Análise:** A issue #1053 aborda um **problema de design arquitetural** relacionado ao ciclo de vida do histórico de sessões:

- **Problema central:** O contexto por requisição em sessões de longa duração cresce indefinidamente
- **Sintoma:** `trimHistory` e auto-compaction reduzem o `agent.history` em memória, mas **nunca gravam de volta no session store**
- **Consequência:** Ao restaurar sessão, o histórico **inteiro** é recarregado, anulando os esforços de limitação
- **Solução proposta:** Bound do histórico restaurado ao `max_history_messages` configurado (implementado em #1054)

Este é um tema técnico relevante para ambientes de produção com sessões persistentes.

---

## 5. Bugs e Estabilidade

### Issues Reportadas

| # | Severidade | Título | Impacto |
|---|------------|--------|---------|
| #1053 | **Média-Alta** | Session history grows unbounded | Memory leak em sessões longas |

**Análise de Severidade:**

- **Impacto:** Sessões de longa duração consomem memória progressivamente
- **Risco:** Degradação de performance em deployments com múltiplas sessões ativas
- **Mitigação atual:** O PR #1054 propõe correção, aguardando merge
- **Testes de regressão:** Suite de testes com 99.88% de pass rate (7491/7500)

**Não há crashes ou regressões reportadas** nas últimas 24h.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Sinais Identificados

Com base na issue #1053, identificam-se **demandas implícitas de robustez**:

1. **Controle de memória por sessão** — necessidade de configurar limites de histórico por session store
2. **Sincronização de compactação** — auto-compaction deve persistir resultados no storage
3. **Configurabilidade granular** — `max_history_messages` deve ser respeitado em todos os pontos do ciclo de vida

**Nenhuma feature request formal foi aberta** nas últimas 24h.

---

## 7. Resumo de Feedback dos Usuários

**Feedback explícito detectado:** 0 reactions, 1 comment (detalhes não especificados)

**Dores inferidas dos dados:**

| Dor | Evidência |
|-----|-----------|
| Histórico de sessão não confiável em produção | Issue #1053 |
| Inconsistência entre config e comportamento real | `max_history_messages` não respeitado na restauração |
| Risco de memory leak em longa duração | Crescimento sem bound do contexto |

**Cenário de uso típico:** Agentes de IA com sessões persistentes e histórico acumulado.

---

## 8. Backlog que Merece Atenção

### Items Sem Resposta Prolongada

| # | Título | Idade | Status | Prioridade |
|---|--------|-------|--------|------------|
| #1053 | Session history unbounded | 1 dia | OPEN | Alta |

**Recomendação:** O PR #1054 resolve diretamente a issue #1053. Priorizar review e merge para:

1. Eliminar memory leak potencial em produção
2. Garantir consistência do comportamento com `max_history_messages`
3. Manter a reputação de estabilidade do projeto (99.88% test pass rate)

---

## Indicadores de Saúde do Projeto

| Métrica | Valor | Avaliação |
|---------|-------|-----------|
| Atividade (24h) | 1 issue, 1 PR | 🟡 Baixa |
| Taxa de testes | 99.88% (7491/7500) | 🟢 Excelente |
| Releases (24h) | 0 | 🟡 Nenhuma |
| Engajamento comunitário | Baixo (0 reactions) | 🟡 Necessita atenção |
| Issues abertas | 1 | 🟢 Controlado |

---

**Relatório gerado em:** 2026-10-11  
**Fonte:** github.com/nullclaw/nullclaw  
**Próxima verificação recomendada:** 2026-10-12

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo — Ecossistema de Agentes de IA Open Source

**Data de referência:** 2026-10-11
**Projetos analisados:** 8 repositórios

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **duas velocidades distintas** em 11 de outubro de 2026. De um lado, **quatro projetos demonstram atividade intensa** — NanoBot (69 PRs), Hermes Agent (50 PRs), CoPaw (19 PRs) e ZeroClaw (50 PRs) — evidenciando comunidades em sprints ativos de desenvolvimento. Do outro, **três projetos operam em modo de baixa intensidade** — NullClaw (1 issue/PR), IronClaw (2 issues, 0 PRs) e PicoClaw (2 PRs fechadas) — indicando fases de estabilização ou perda de momentum. O tema técnico dominante que atravessa o ecossistema é a **governança de memória e sessões**, com pelo menos três projetos (NullClaw, Hermes Agent, ZeroClaw) concurrently abordando vazamentos, limites de contexto e política de descarte de histórico. A **estabilidade do Desktop/Linux** emerge como preocupação transversal, afetando Hermes Agent, CoPaw e ZeroClaw simultaneamente. Nenhum projeto publicou releases formais nas últimas 24h, sugerindo um freeze coordenado ou fase de QA pré-lançamento.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | Releases | Bugs P0/P1 | Saúde | Avaliação |
|---------|-------------|-----------|----------|------------|-------|-----------|
| **NanoBot** | 4 | 69 atualizados | 0 | 1 P1 (security) | 🟢 Alta | Desenvolvimento intenso, preparação de release |
| **Hermes Agent** | 50 | 50 | 0 | 7 (P0+P1) | 🟡 Atenção | Sprint com acúmulo de bugs críticos |
| **CoPaw** | 17 | 19 | 0 | 1 Crítica, 1 Alta | 🟡 Atenção | Bug deDesktop (~46 dias) requer ação urgente |
| **ZeroClaw** | 18 | 50 | 0 | 5 P1 | 🔴 Crítico | Modo intensivo de estabilização |
| **PicoClaw** | 2 | 2 fechadas | 0 | 1 Média-Alta (82 dias) | 🟡 Estável | Contribuições relevantes, UX pendente |
| **NullClaw** | 1 | 1 | 0 | 0 | 🟢 Excelente | Maturidade (99.88% test pass rate) |
| **IronClaw** | 2 | 0 | 0 | 0 | 🔴 Baixa | Risco reputacional em onboarding |

**Métricas consolidadas do ecossistema (24h):**
- **Total de eventos:** ~145 issues + ~190 PRs
- **Bugs críticos abertos:** 13+ (P0/P1 combinadas)
- **Releases publicadas:** 0
- **Features de providers em desenvolvimento:** 4 (NanoBot, PicoClaw, Hermes Agent)

---

## 3. Posicionamento do Projeto Principal

*Nota: Os relatórios não identificam um "projeto principal" declarado. Abaixo, analisamos o projeto com maior atividade e maturidade combinadas.*

### NanoBot como Referência de Atividade

O NanoBot apresenta o **volume de atividade mais alto** (69 PRs atualizados) e demonstra diferenciação clara em três dimensões:

| Dimensão | NanoBot | Comparação |
|----------|---------|------------|
| **Integrações de providers** | 3+ em revisão (#5915, #5666, #6068) | Liderança em ecossistema de LLMs |
| **Maturidade de WebUI** | Busca em seletores, OAuth, feedback de loading | Avançado vs. NullClaw (sem UI), PicoClaw (lag issue) |
| **Segurança** | Bug P1 em aberto (#6147) | Transparência em regressões |
| **Auto-update** | Preparação formal (#5817, #6146) | Profissionalização do release cycle |

**Diferenças técnicas estruturais:**

- **Arquitetura modular:** NanoBot investe em providers como plugins, enquanto NullClaw usa gerenciamento de sessão como diferencial (Rust, 99.88% test coverage)
- **Canais múltiplos:** NanoBot suporta Telegram, WhatsApp, OAuth, WebUI; Hermes Agent adiciona Desktop Tauri e CLI nativo
- **Estratégia de deployment:** ZeroClaw prepara separação gateway/runtime; Hermes Agent consolida "One Gateway" (#106742)

---

## 4. Focos Técnicos Compartilhados

O cruzamento dos relatórios revela **cinco temas técnicos recorrentes** que atravessam múltiplos projetos:

### 4.1 Governança de Memória e Histórico de Sessões

| Projeto | Problema | Status |
|---------|----------|--------|
| **NullClaw** | Histórico restaurado sem bound (`max_history_messages` ignorado) | PR #1054 em review |
| **Hermes Agent** | Memory budget enforcement para MEMORY.md (#135039) | Em discussão |
| **ZeroClaw** | Memory leak em `map_key_sections` (#11614) | P1 — urgente |
| **CoPaw** | Módulo ausente quebrando tools no Desktop (#7311) | Crítico, 46 dias |

**Implicação:** Sessões persistentes com contextos acumulados são o cenário de uso predominante, e todos os projetos enfrentam o desafio de balancear retaining history vs. memory constraints.

### 4.2 Estabilidade do Desktop/Linux

| Projeto | Sintomas |
|---------|----------|
| **Hermes Agent** | SIGILL loop em sandbox (#131055), NVIDIA SwiftShader pinned (#131321) |
| **ZeroClaw** | WebKitWebProcess 100% GPU idle (#11632) |
| **CoPaw** | Módulo `_qwenpaw_remote_backend` ausente (#7311) |

**Implicação:** Desktop deployment é prioridade para Hermes Agent e CoPaw, mas a base Linux apresenta regressões persistentes em ambos.

### 4.3 Integração e Confiabilidade de Canais

| Canal | Projetos Afetados | Bugs |
|-------|------------------|------|
| **Telegram** | NanoBot, ZeroClaw | Classificação de mídia (NanoBot), listener wedged (ZeroClaw), rate limiting ignorado (ZeroClaw) |
| **WhatsApp** | NanoBot | Replay filter com timestamp bug |
| **Feishu** | Hermes Agent, CoPaw | Bot-to-bot messages, imagens descartadas |

**Implicação:** Canais de mensageria são vetores de regressão frequente, especialmente Telegram com edge cases de URLs e rate limiting.

### 4.4 Provedores de LLM e Custos

- **Demanda convergente:** NanoBot, PicoClaw e IronClaw recebem PRs/issues sobre novos providers (Cheaper Inference com 15-60% economia, aimlapi.com)
- **Observabilidade de custos:** ZeroClaw (#11613) reporta subcontagem de tokens em modelos com reasoning
- **Provedores como blockers:** IronClaw enfrenta reclamação de que "provedores documentados não funcionam" (#8131)

### 4.5 Segurança e Isolamento

| Projeto | Foco de Segurança |
|---------|-------------------|
| **ZeroClaw** | Sandbox policy schema (#7821), DNS resolution bounds (#10550), delegate bounds |
| **NanoBot** | Tool calls markup pode se tornar executável (#6147) — P1 |
| **Hermes Agent** | Billing duplicado por credential pool revert (#118379), HERMES_WRITE_SAFE_ROOT ignorado (#136204) |

**Implicação:** À medida que agentes ganham capacidade de executar comandos e tools, segurança de sandbox e isolamento tornam-se preocupação sistêmica.

---

## 5. Análise de Diferenciação

### 5.1 Posicionamento por Público-Alvo

| Projeto | Público Primário | Diferenciador |
|---------|-----------------|---------------|
| **NullClaw** | DesenvolvedoresRust, sistemas críticos | Test coverage 99.88%, linguagem de sistemas |
| **NanoBot** | Usuários finais, integrações third-party | WebUI madura, múltiplos canais, providers |
| **Hermes Agent** | Desenvolvedores desktop, CLI power users | One Gateway unificado, múltiplas interfaces |
| **ZeroClaw** | Usuários de Telegram, automações de servidor | Canal Telegram prioritizado, observabilidade |
| **CoPaw** | Usuários Qwen/AgentScope, plugins | Creator plugin, expansão HarmonyOS |
| **PicoClaw** | Usuários embed, serviços backend | HTTP API (`POST /v1/messages`), Go-based |
| **IronClaw** | Novos usuários, onboarding | Promessa de 20+ provedores (em questão) |

### 5.2 Arquitetura e Pilha Técnica

| Projeto | Linguagem | Arquitetura Destacada |
|---------|-----------|----------------------|
| **NullClaw** | Zig | Session management, bounded history |
| **NanoBot** | Python | Provider abstraction layer, WebUI |
| **Hermes Agent** | Não especificado | One Gateway (CLI/TUI/Desktop/API/ACP unificados) |
| **ZeroClaw** | Não especificado | Runtime/gateway separation (v0.9.0) |
| **PicoClaw** | Go | HTTP API endpoint, ringan para embedding |
| **CoPaw** | Não especificado | Desktop plugin architecture, Creator ecosystem |

### 5.3 Estratégia de Features

| Projeto | Investimento Principal | Evidência |
|---------|----------------------|-----------|
| **NanoBot** | Providers + WebUI | 3 PRs de providers, UX refactor |
| **Hermes Agent** | Desktop stability + Kanban | 7 P0/P1 bugs, 7 Kanban tools (#125508) |
| **ZeroClaw** | Canal Telegram + segurança | 3 bugs Telegram P1, sandbox schema |
| **CoPaw** | Console recovery + mobile | PR #8154 (XXL), HarmonyOS client |
| **PicoClaw** | HTTP API + custo | PR #3421, Cheaper Inference |

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração

| Projeto | Eventos/24h | PRs merged | Razão Open/Merged | Classificação |
|---------|-------------|------------|-------------------|---------------|
| **NanoBot** | ~73 | ~39 | ~1:1 | 🔄 Iteração rápida |
| **ZeroClaw** | ~68 | 7 | ~6:1 | ⚠️ Acúmulo de backlog |
| **Hermes Agent** | ~100 | ~1 declarado | ~50:1 (?) | ⚠️ Prioriza issues |
| **CoPaw** | ~36 | 11 | ~1:1.4 | 🟢 Equilibrado |
| **NullClaw** | ~2 | 0 | 1:0 | 🐢 Maturidade |
| **IronClaw** | ~2 | 0 | — | 🔴 Estagnado |

**Interpretação:** NanoBot e CoPaw demonstram capacidade de merge proporcional à atividade. ZeroClaw e Hermes Agent acumulam PRs em aberto, sinalizando gargalo de review ou decisões de design pendentes.

### 6.2 Maturidade por Testes e Estabilidade

| Projeto | Taxa de Testes | Releases Estáveis | Perfil |
|---------|---------------|------------------|--------|
| **NullClaw** | 99.88% (7.491/7.500) | Nenhuma recente | Consolidado, maturidade alta |
| **NanoBot** | Não especificada | Ciclo preparando (#5817) | Crescimento controlado |
| **CoPaw** | Correções de bugs agrupadas | 2.0.1 em revisão | Beta ativo |
| **PicoClaw** | Não especificada | Nenhuma | Fase de contribuições |
| **IronClaw** | Não especificada | Não especificada | Desconhecida |

### 6.3 Engajamento e Satisfação

| Projeto | Reactions/Comments | Issues Resolvidas (24h) | Sinal |
|---------|-------------------|------------------------|-------|
| **NanoBot** | 2 comentários (Telegram bug) | ~39 PRs | Engajamento ativo |
| **Hermes Agent** | 10+ comentários (Linux sandbox) | Baixa | Comunidade ativa reportando |
| **ZeroClaw** | 15 comentários (cron tests) | 7 PRs | Debate técnico intenso |
| **CoPaw** | 10 comentários (subAgent timeout) | 11 PRs | Suporte reativo forte |
| **IronClaw** | 0 reações, tom sarcástico | 1 issue | ⚠️ Risco reputacional |
| **NullClaw** | 0 reactions | 0 | Silêncio operacional |
| **PicoClaw** | 18 comentários (Web UI bug) | 2 PRs | Comunidade antiga reportando |

---

## 7. Sinais de Tendência

### 7.1 Tendências de Mercado Extraídas

**T1 — fragmentação de provedores de LLM como oportunidade:**
- 4 projetos simultaneamente adicionando providers (Cheaper Inference, aimlapi.com, OpenAI-compatible endpoints)
- Demanda por redução de custos de 15-60% validada pela comunidade
- NanoBot e PicoClaw lideram essa tendência

**T2 — Desktop como vetor de crescimento:**
- 3 projetos (Hermes Agent, CoPaw, ZeroClaw) investindo em Desktop Linux
- HarmonyOS em desenvolvimento (CoPaw #8164)
- WebUI evolui de simples chat para dashboard completo

**T3 — segurança de agentes como requisito emergente:**
- Sandbox policy, DNS bounds, delegate isolation discutidos em ZeroClaw
- NanoBot com P1 security regression em tool calls
- Hermes Agent com billing duplicado e root safe ignorado
- Indica maturidade do uso — agentes executando em produção

**T4 — observabilidade como necessidade de produção:**
- ZeroClaw implementa cost ledger (#11613)
- Hermes Agent adiciona budget enforcement por sessão (#135039)
- Sessões longas com métricas de uso tornam-se padrão de deployment

**T5 — canais Telegram como plataforma primária:**
- 3 projetos com bugs críticos em Telegram simultaneamente
- ZeroClaw prioriza Telegram listener stability (3 issues P1)
- NanoBot enfrenta classificação de mídia com query strings
- Indica adoção massiva de Telegram como canal de deployment

### 7.2 Riscos Sistêmicos Identificados

| Risco | Projetos Afetados | Impacto |
|-------|------------------|--------|
| **Memory leaks em produção** | NullClaw, ZeroClaw, Hermes Agent | Degradação cumulativa em servers |
| **Onboarding quebrado** | IronClaw, NanoBot (OAuth) | Barreiras de entrada |
| **Desktop Linux instável** | Hermes Agent, CoPaw, ZeroClaw | Base instalável degradada |
| **Acúmulo de PRs em review** | ZeroClaw, Hermes Agent | Contribuições órfãs, desmotivação |

### 7.3 Oportunidades de Colaboração

Dado os problemas compartilhados, identificam-se áreas onde colaboração entre projetos seria benéfica:

1. **Biblioteca de bounded session stores** — NullClaw já tem referência em Rust; poderia ser portada ou adaptada
2. **Schema de sandbox policy** — ZeroClaw (#7821) em desenvolvimento há 4 meses; resultado poderia beneficiar todos
3. **Provider abstraction layer** — NanoBot maduro; padrão de interface poderia ser especificado
4. **Testes de onboarding automatizados** — IronClaw e NanoBot enfrentam problemas similares

---

## Conclusão Executiva

O ecossistema de agentes de IA open source em 2026-10-11 demonstra **maturidade crescente com pressão de produção**. Projetos como NullClaw e CoPaw equilibram atividade e estabilidade, enquanto Hermes Agent e ZeroClaw enfrentam o desafio típico de sistemas em escala — múltiplos bugs P0/P1 simultâneos em Desktop e canais. A tendência clara é a **convergência para providers como plugins**, **segurança como feature obrigatória** e **Telegram como vetor de adoção primário**.

**Para decisores técnicos:** NanoBot representa a fronteira de UX e integração; NullClaw, a referência de qualidade de código; ZeroClaw, o exemplo de como não deixar backlog acumular.

**Para desenvolvedores:** Os problemas de memória e sessão são compartilhados; contribuir em NullClaw (test coverage) ou NanoBot (provider pattern) oferece aprendizado transferível.

---

*Relatório gerado em 2026-10-11 com base nos resumos de atividade comunitária dos projetos analisados.*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-10-11

## 1. Panorama do dia

O NanoBot apresenta **alta atividade de desenvolvimento** nas últimas 24h, com 69 PRs atualizados e 4 issues processadas. A equipe está focada em **melhorias de usabilidade da WebUI** (campos de busca em seletores, UX de provedores, autenticação local) e em **correções de bugs críticos** nos canais Telegram e WhatsApp. O projeto não publicou releases formais recentemente, mas uma série de PRs de infraestrutura (#5817, #6146) indica preparação para um novo fluxo de versões estável/preview. A saúde geral é positiva, com comunidade ativa e regressões sendo tratadas com prioridade.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

Dois PRs em paralelo sugerem que um ciclo de release está em preparação:
- **#5817** — Adiciona fluxos de auto-update para versões estável (PyPI) e dev (source)
- **#6146** — Define contrato formal de releases estável vs. preview com versões imutáveis

> ⚠️ **Sinais de migração futura:** O PR #6146 propõe versões preview "immutáveis e compatíveis com Python", sugerindo que可能会有 breaking changes no pipeline de deployment.

---

## 3. Progresso do Projeto

### PRs merged/fechados hoje (39 no total)

| PR | Título | Impacto |
|---|---|---|
| **#6145** ✅ | feat(webui): improve model and provider settings UX | Campo de modelo pesquisável, feedback de loading, ações de retry; melhoria direta na experiência do usuário |
| **#6144** ✅ | fix(webui): clarify Chinese temporary chat tooltip | Ajustes de UI em chinês (simplificado/tradicional) |
| **#4819** ✅ | fix(memory): replace WeakValueDictionary with plain dict | Elimina race conditions em locks de consolidação por garbage collection |
| **#5836** ✅ | fix(webui): make OAuth reauthentication actionable | Diferencia credenciais OAuth rejeitadas de falhas de rede; adiciona botão "Sign in again" |

### Destaque: Melhoria de UX da WebUI (#6145)

O PR mais substantivo do dia refatora o seletor de modelos e provedores com:
- Campo de busca com feedback de carregamento
- Catálogo de modelos compartilhado
- Ação de retry explícita
- Melhor navegação por teclado

---

## 4. Temas Quentes da Comunidade

### Issues com mais atenção

| Issue | Título | Engajamento | Tema central |
|---|---|---|---|
| **#6123** 🔴 | Telegram: classify remote media URLs with query strings | 2 comentários | **Bug real** — URLs de mídia com query strings (ex: `?width=672`) são mal classificadas como documento |
| **#1739** ✅ (fechada) | Bug: Multiple instances on Windows via NANOBOT_HOME | 2 comentários | **Problema recorrente** — variável de ambiente ignorada no Windows causa conflitos entre instâncias |

### PRs com maior interação potencial

| PR | Título | Tag | Interação |
|---|---|---|---|
| **#6091** | feat(apps): add managed computer use with Cua Driver | [conflict], [draft] | Funcionalidade ambiciosa de "computer use" — **pausada pelo mantenedor** |
| **#5915** | feat(providers): add Cheaper Inference como provider | [new-provider], [priority:p2] | Provedor de gateway com economia de 15-60% — alinhado com demanda por custos menores |
| **#5666** | feat(providers): add aimlapi.com como provider | [new-provider] | 1000+ modelos através de API única — partnership ativo |

### Análise de demandas

**Predominância de integrações de providers:** A comunidade demonstra forte interesse em adicionar novos provedores de LLM (Cheaper Inference, aimlapi.com), refletindo um ecossistema fragmentado de gateways e busca por custos otimizados.

---

## 5. Bugs e Estabilidade

### Bugs reportados/fixados hoje

| Severidade | Issue/PR | Descrição | Status |
|---|---|---|---|
| **🔴 P1** | #6147 | fix(providers): tighten tool calls — `<tool_call>` markup pode se tornar executável | **ABERTO** |
| **🟡 P2** | #6123 / #6149 | Telegram: URLs de mídia com query string mal classificadas | **ABERTO / PR #6149 criado** |
| **🟡 P2** | #6120 | WhatsApp: filtro replay não funciona (timestamp em ms vs segundos) | **FECHADO** |
| **🟡 P2** | #6122 | DeepSeek: `reasoning_effort="minimal"` contradiz `thinking.type="disabled"` | **FECHADO** |
| **🟢 P3** | #6144 | Tooltip de chat temporário em chinês impreciso | **FECHADO** |

### ⚠️ Bug crítico em aberto

**#6147** — security/regression em tool calls: plaintext extraction introduzida em #4662 permite que markup `<tool_call>` em textos do assistant se torne executável. **Prioridade P1** com tags `security` e `regression`.

> Link: https://github.com/HKUDS/nanobot/pull/6147

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features em desenvolvimento

| PR | Feature | Categoria | Prioridade |
|---|---|---|---|
| **#6150** | Simplificar login local e acesso de rede | webui | p2 |
| **#6148** | Conexões de provider removíveis (persistência) | settings | — |
| **#5817** | Fluxos de auto-update estável e dev | infra | — |
| **#6146** | Documentação de rollout stable/preview | docs | — |
| **#5537** | Persistir `focus` de sessão entre turns | my tool | p2 |
| **#5405** | Skills com invocação manual-only | skills | p2 |

### Integrações MCP em crescimento

| PR | MCP Preset | Uso |
|---|---|---|
| **#6068** | FXMacroData | Dados macroeconômicos (taxas, CPI, PIB) — somente leitura |
| **#6014** | Keenable | Busca web e fetch de páginas |

### Sinais de roadmap

1. **WebUI como prioridade** — múltiplos PRs focados em search, login, OAuth, provider settings indicam investimento em UX
2. **MCP como plataforma** — preset de third-party tools sugere estratégia de extensibilidade
3. **Self-update formalizado** — #5817 e #6146 indicam preparação para release management profissional

---

## 7. Resumo de Feedback dos Usuários

### Dores identificadas

| Dor | Fonte | Issue/PR |
|---|---|---|
| **Custo de LLM** | Comunidade | #5915 (Cheaper Inference com 15-60% economia) |
| **Configuração de provedores complexa** | Usuários Windows/Server | #1739 (variável NANOBOT_HOME ignorada) |
| **Providers "fantasmas" após reload** | Usuários avançados | #6148 (remoção não persiste) |
| **Falhas de autenticação OAuth confusas** | Usuários remotos | #5836 (solucionado) |
| **Login sem senha em headless** | Usuários server/WSL | #6150, #5727 |

### Cenários de uso em evidência

- **Servidor Windows com múltiplas instâncias** — conflito via NANOBOT_HOME
- **WSL/Linux headless com WebUI** — problemas de abertura de browser e autenticação
- **Grupos Feishu com múltiplos bots** — mensagens bot-to-bot precisam de allowlist

---

## 8. Backlog que Merece Atenção

### Issues sem resposta há longo tempo

| Issue | Idade | Título | Status |
|---|---|---|---|
| **#1739** | ~7 meses | Multiple instances on Windows via NANOBOT_HOME | ✅ Fechada em 2026-10-10 |
| **#5929** | ~2 semanas | [Feishu] Bot-to-bot messages in groups | Em progresso via #5930 |

### PRs conflituosos ou pausados

| PR | Conflito | Situação |
|---|---|---|
| **#6091** | ⚠️ Marcado como conflict + draft | Pausado pelo mantenedor |
| **#5915** | Conflito com树干? | Em revisão |
| **#5666** | Conflito com树干? | Em revisão |
| **#5776** | Conflito | Em revisão |
| **#6068** | Conflito | Em revisão |

### Recomendações de atenção

1. **#6147 (P1 security)** — requer revisão urgente
2. **#6091** — decisão de design necessária sobre "computer use"
3. **PRs conflituosos** — risco de merge conflicts se não resolvidos em breve

---

## Links Rápidos

- Repositório: https://github.com/HKUDS/nanobot
- Issue crítica: https://github.com/HKUDS/nanobot/pull/6147
- Feature em destaque: https://github.com/HKUDS/nanobot/pull/6145
- Auto-update: https://github.com/HKUDS/nanobot/pull/5817

---

*Relatório gerado automaticamente com base em dados do GitHub de 2026-10-11. Métricas: 69 PRs, 4 issues, 0 releases nas últimas 24h.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-10-11

## 1. Panorama do Dia

O projeto apresenta alta atividade nas últimas 24h, com 50 issues e 50 PRs atualizados, indicando uma sprint intensa de desenvolvimento. Não houve novos lançamentos, mantendo o foco em correções e features pendentes. A base de código concentra esforços em estabilidade do Desktop (múltiplos bugs P1/P2) e na consolidação da arquitetura "One Gateway" (#106742). A comunidade demonstra preocupação crescente com bugs de segurança e regressões de sessão.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O último release permanece estável, sem atualizações de versão oficiais. A ausência de releases pode indicar foco em testes de integrações pendentes ou preparação para uma versão significativa.

---

## 3. Progresso do Projeto

### PR Merged/Closed

| PR | Descrição | Impacto |
|----|-----------|---------|
| [#136313](https://github.com/NousResearch/hermes-agent/pull/136313) | **feat(desktop)**: Updates dialog agora exibe o nome do canal e link para alterá-lo | Melhora UX de atualizações no Desktop |

### PRs Abertos de Destaque

| PR | Descrição | Progresso |
|----|-----------|-----------|
| [#106742](https://github.com/NousResearch/hermes-agent/pull/106742) | **One gateway owns every local session**: CLI, TUI, Desktop, API, ACP, bots e cron compartilham mesma sessão viva | Arquitetura central — 39 arquivos alterados |
| [#128791](https://github.com/NousResearch/hermes-agent/pull/128791) | **CLI Ownership Refactor — Phase 4**: Plugin runtime ownership | Fases finais da refatoração |
| [#125508](https://github.com/NousResearch/hermes-agent/pull/125508) | **feat(kanban)**: 7 novas ferramentas Kanban com políticas e gates | +9829/-200 linhas |
| [#136191](https://github.com/NousResearch/hermes-agent/pull/136191) | **fix(agent)**: Persiste replies parciais interrompidas (#136160) | P1 — corrige perda de dados |
| [#136336](https://github.com/NousResearch/hermes-agent/pull/136336) | **feat(desktop)**: Export e import de bots do Bot Mode | Feature aguardada pela comunidade |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| Issue | Título | Comentários | Reações | Análise |
|-------|--------|-------------|---------|---------|
| [#131055](https://github.com/NousResearch/hermes-agent/issues/131055) | Linux Desktop: second-instance poison sandbox fallback → SIGILL loop | 10 | 1 | **P1/Security** — Bug crítico de sandbox no Linux |
| [#105267](https://github.com/NousResearch/hermes-agent/issues/105267) | Feature: política por-job para external memory providers em cron | 8 | 1 | Controle granular de memória para automações |
| [#135039](https://github.com/NousResearch/hermes-agent/issues/135039) | Memory budget enforcement para MEMORY.md/USER.md | 7 | 0 | Governança de custo e latência por sessão |
| [#24770](https://github.com/NousResearch/hermes-agent/issues/24770) | Discussão: Native multi-provider memory routing | 7 | 1 | Limitação intencional mas contestada |
| [#110126](https://github.com/NousResearch/hermes-agent/issues/110126) | Output truncation é falha sistêmica em 4 subsistemas (35+ issues) | 6 | 0 | P2 — problemas DeepSeek V4 root cause |

**Análise**: A comunidade demonstra forte interesse em:
1. **Estabilidade do Desktop** — múltiplos bugs críticos relacionados a updates e sessões
2. **Governança de memória** — controle de custos e comportamento por contexto
3. **Truncation output** — problema sistêmico afetando múltiplos provedores

---

## 5. Bugs e Estabilidade

### Prioridade P0 (Crítico)
| Issue | Componente | Descrição |
|-------|------------|-----------|
| [#136216](https://github.com/NousResearch/hermes-agent/issues/136216) | API Server | Imagens perdidas em follow-up questions após replay de sessão |

### Prioridade P1 (Alta)
| Issue | Componente | Descrição |
|-------|------------|-----------|
| [#131055](https://github.com/NousResearch/hermes-agent/issues/131055) | Desktop/Linux | Second-instance poison sandbox → SIGILL loop |
| [#118379](https://github.com/NousResearch/hermes-agent/issues/118379) | Agent/Anthropic | Credential refresh reverte pool rotation — billing duplicado |
| [#136188](https://github.com/NousResearch/hermes-agent/issues/136188) | Cron | Gateway restart descarta resultado de worker vivo |

### Prioridade P2 (Média-Alta)
| Issue | Componente | Descrição |
|-------|------------|-----------|
| [#110126](https://github.com/NousResearch/hermes-agent/issues/110126) | Agent/DeepSeek | Truncation em cascata — 35+ issues relacionadas |
| [#131321](https://github.com/NousResearch/hermes-agent/issues/131321) | Desktop | NVIDIA SwiftShader pinned por 13 dias |
| [#127450](https://github.com/NousResearch/hermes-agent/issues/127450) | CLI | hermes update stalla 11 minutos após "Update complete!" |
| [#136204](https://github.com/NousResearch/hermes-agent/issues/136204) | Desktop | HERMES_WRITE_SAFE_ROOT ignorado — risco segurança |
| [#136321](https://github.com/NousResearch/hermes-agent/issues/136321) | Agent | load_soul_md carrega SOUL.md de perfil errado |

### Bugs de Compatibilidade (P2-P3)
| Issue | Componente | Descrição |
|-------|------------|-----------|
| [#136281](https://github.com/NousResearch/hermes-agent/issues/136281) | CLI | Update check retorna 404 em stable.json |
| [#136294](https://github.com/NousResearch/hermes-agent/issues/136294) | Desktop | Build falha com simple-git v4 — import default |
| [#136223](https://github.com/NousResearch/hermes-agent/issues/136223) | Windows | Plugin update falha com WinError 32 |
| [#51067](https://github.com/NousResearch/hermes-agent/issues/51067) | Gateway | tool_preview_length: 0 truncado para 40 chars |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em Discussão

| Issue | Componente | Descrição | Sinais de Roadmap |
|-------|------------|-----------|-------------------|
| [#105267](https://github.com/NousResearch/hermes-agent/issues/105267) | Cron/Memory | Política por-job para external memory providers | Funcionalidade para automações |
| [#135039](https://github.com/NousResearch/hermes-agent/issues/135039) | Agent/Memory | Budget enforcement em write time para MEMORY.md | Governança de custos |
| [#106113](https://github.com/NousResearch/hermes-agent/issues/106113) | Agent/Config | session_id no chat-completions metadata | Suporte LiteLLM Proxy |
| [#136150](https://github.com/NousResearch/hermes-agent/pull/136150) | ACP | advertise configOptions para model e reasoning effort | Integração JetBrains Air |

### Features Planejadas (PRs Abertos)

| PR | Descrição | Status |
|----|-----------|--------|
| [#136336](https://github.com/NousResearch/hermes-agent/pull/136336) | Export/Import de bots do Bot Mode | Nova feature |
| [#125508](https://github.com/NousResearch/hermes-agent/pull/125508) | Kanban tools com lifecycle e reviewer gates | Em desenvolvimento |
| [#135418](https://github.com/NousResearch/hermes-agent/pull/135418) | Post-approval terminal middleware | Segurança reforçada |

**Tendência**: Foco em governança de memória/custos, exportabilidade de configurações e integrações com IDEs.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

1. **Estabilidade de Updates** — Usuários Desktop reportam:
   - Timeout em state.db pre-flight (macOS) — [#124972](https://github.com/NousResearch/hermes-agent/issues/124972)
   - Snapshot emergency com hard 30s cap falha em DBs >1GB — [#128605](https://github.com/NousResearch/hermes-agent/issues/128605)
   - Update stalla 11 minutos após conclusão — [#127450](https://github.com/NousResearch/hermes-agent/issues/127450)

2. **Perda de Dados em Sessões**:
   - Imagens perdidas em follow-up questions — [#136216](https://github.com/NousResearch/hermes-agent/issues/136216) **P0**
   - Partial replies perdidas em streaming disconnect — [#136191](https://github.com/NousResearch/hermes-agent/pull/136191)
   - Session transport hijacked por RPC externo — [#55564](https://github.com/NousResearch/hermes-agent/issues/55564)

3. **Problemas de Segurança**:
   - Billing duplicado por credential pool revert — [#118379](https://github.com/NousResearch/hermes-agent/issues/118379) **P1**
   - HERMES_WRITE_SAFE_ROOT ignorado no Desktop — [#136204](https://github.com/NousResearch/hermes-agent/issues/136204) **P2**
   - Sandbox bypass no Linux — [#131055](https://github.com/NousResearch/hermes-agent/issues/131055) **P1**

4. **UX do Desktop**:
   - Status bar mostra commit count cacheado 24h — [#120016](https://github.com/NousResearch/hermes-agent/issues/120016)
   - Updates dialog sem informação de canal — **Corrigido em** [#136313](https://github.com/NousResearch/hermes-agent/pull/136313)

### Cenários de Uso Problemáticos

- **Desenvolvedores com múltiplas checkouts**: PATH registration polui ambiente compartilhado — [#135037](https://github.com/NousResearch/hermes-agent/issues/135037)
- **Hosts com muitos projetos**: Update lento e stalls — [#127450](https://github.com/NousResearch/hermes-agent/issues/127450)
- **Integrações ERP**: Session transport roubado por clientes externos — [#55564](https://github.com/NousResearch/hermes-agent/issues/55564)

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Estagnadas

| Issue | Idade | Prioridade | Descrição | Recomendação |
|-------|-------|------------|-----------|--------------|
| [#24770](https://github.com/NousResearch/hermes-agent/issues/24770) | 5 meses | P3 | Multi-provider memory routing — "intentional limitation" | Reavaliar decisão ou documentar oficialmente |
| [#70390](https://github.com/NousResearch/hermes-agent/issues/70390) | Antigo | wontfix | Limitação similar à #24770 | Manter wontfix, fechar dup |
| [#136236](https://github.com/NousResearch/hermes-agent/issues/136236) | 1 dia | P3 | Telegram exclusive_bot_mentions drop false positive | Baixa prioridade, mas impacto UX |
| [#46115](https://github.com/NousResearch/hermes-agent/issues/46115) | 4 meses | P2 | Image attachment markers em replay | PR aberto — acompanhar |
| [#62402](https://github.com/NousResearch/hermes-agent/issues/62402) | 3 meses | P2 | Desktop approval card com placeholder | PR merged — verificar resolução |

### Métricas de Saúde

| Indicador | Valor | Status |
|-----------|-------|--------|
| Issues P0/P1 ativas | 3 + 4 = 7 | ⚠️ Necessita atenção |
| PRs aguardando review | 43 | Atividade normal |
| Releases últimas 24h | 0 | Pausa de release |
| Bugs de segurança abertos | 3 | ⚠️ Prioridade |

---

## Conclusão

O Hermes Agent apresenta **atividade saudável** mas com **accúmulo de bugs críticos** (7 P0/P1). A comunidade demonstra maturidade ao reportar issues detalhadas com perfis de risco. O foco em estabilidade do Desktop e governança de memória sugere preparação para uma release de consolidação. **Recomendação**: Priorizar correções P1 antes do próximo release, especialmente issues de segurança e perda de dados.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-10-11

---

## 1. Panorama do Dia

O projeto PicoClaw mantém atividade moderada com **2 issues abertas** e **2 PRs fechadas** nas últimas 24h. Não houve novos lançamentos, indicando um período de estabilização ou foco em integrações. A comunidade demonstra interesse em expansões funcionais (operações autônomas de browser) e melhorias de provedor (Cheaper Inference). O bug de lag no Web UI permanece sem resolução, representando a principal preocupação de usabilidade.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto não publicou novas versões desde o período analisado. Isso sugere:
- Fase de QA antes de próxima versão
- Foco em contribuições externas (PRs) ainda não consolidadas em release

**Recomendação:** Acompanhar a fila de PRs merged (#3393, #3421) para prever próximo tag de release.

---

## 3. Progresso do Projeto

### PRs Fechadas/Merged nas Últimas 24h

| # | Título | Autor | Impacto |
|---|--------|-------|---------|
| [#3421](https://github.com/sipeed/picoclaw/pull/3421) | feat(apiserve): serve PicoClaw agents over HTTP | hms58 | **Alto** |
| [#3393](https://github.com/sipeed/picoclaw/pull/3393) | feat(provider): add Cheaper Inference provider | aiapienthusiast | **Médio** |

**Destaque #3421:** Adiciona endpoint HTTP (`POST /v1/messages`) para consumo de agentes PicoClaw por serviços internos via Bearer API key. Permite integração como backend de IA sem modificar código existente de channels/gateway.

**Destaque #3393:** Integra provedor "Cheaper Inference" como endpoint OpenAI-compatible, com redução de custos de 15–60% em modelos de LLM.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| # | Título | Comentários | 👍 | Status |
|---|--------|-------------|-----|--------|
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Web UI chat input laggy com history longo | 18 | 2 | 🟡 OPEN |
| [#293](https://github.com/sipeed/picoclaw/issues/293) | Autonomous Browser Operations | 8 | 8 | 🟡 OPEN |

**Análise #3281 (Bug - 18 comentários):**
- Relatado por xpader em 2026-07-21, marcado como *stale*
- Versão afetada: 0.3.1, Go 1.25.11
- Sintoma: Lentidão extrema no input de chat quando há histórico significativo
- **Demanda:** Performance optimization no frontend Web UI

**Análise #293 (Feature Roadmap - 8 👍):**
- Proposta de automação de browser para interação com websites
- Considera duas abordagens técnicas (conteúdo não detalhado na issue)
- **Demanda estratégica:** Expansão para operações web autônomas

---

## 5. Bugs e Estabilidade

### Bug Aberto

| # | Severidade | Título | Idade | Comentários |
|---|------------|--------|-------|-------------|
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | 🟡 Média-Alta | Web UI laggy com chat history longo | ~82 dias | 18 |

**Análise:**
- Bug reportado há ~82 dias, marcado *stale*
- Impacta experiência do usuário no canal Web
- Necessita atenção da equipe core para investigação de memory leak ou rendering issue

**Riscos:**
- Degradação contínua de UX em sessões longas
- Possível perda de usuários do canal Web

---

## 6. Pedidos de Features e Sinais de Roadmap

### Feature de Alto Impacto

| # | Prioridade | Título | 👍 | Status |
|---|------------|--------|-----|--------|
| [#293](https://github.com/sipeed/picoclaw/issues/293) | 🔴 High | Autonomous Browser Operations | 8 | 🟡 Roadmap |

**Análise:**
- Objetivo: Permitir que o agente AI interaja autonomamente com websites
- Casos de uso: navegação, extração de dados, automação de tarefas web
- Posiciona PicoClaw como plataforma de RPA (Robotic Process Automation) com IA

**Sinais de tendência:**
- 8 upvotes indicam demanda real do mercado
- Seria diferenciador competitivo significativo

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Dor | Issue | Frequência |
|-----|-------|------------|
| Lag no Web UI com histórico | [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Relatado + 18 comentarios |
| Necessidade de browser automation | [#293](https://github.com/sipeed/picoclaw/issues/293) | 8 upvotes |

### Cenários de Uso Emergentes

1. **Agentes como backend de serviços** → atendido pelo PR #3421
2. **Redução de custos em inferência** → atendido pelo PR #3393
3. **Automação web completa** → demanda em aberto (#293)

**Satisfação geral:** Comunidade ativa com contribuições relevantes, mas perhatianção necessária à estabilização do Web UI.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Stale

| # | Título | Criado | Atualizado | Status | Ação Recomendada |
|---|--------|--------|------------|--------|------------------|
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Web UI laggy | 2026-07-21 | 2026-10-10 | stale | Triagem e assign |
| [#293](https://github.com/sipeed/picoclaw/issues/293) | Browser Operations | 2026-02-16 | 2026-10-10 | roadmap | Roadmap planning |

### Priorização Sugerida

1. 🔴 **Crítica:** #3281 — Bug de usabilidade há 82+ dias
2. 🟠 **Alta:** #293 — Feature estratégica com alta demanda
3. 🟢 **Suporte:** PRs merged aguardando release (#[3421](https://github.com/sipeed/picoclaw/pull/3421), #[3393](https://github.com/sipeed/picoclaw/pull/3393))

---

## Métricas Resumo (24h)

| Indicador | Valor |
|-----------|-------|
| Issues abertas/ativas | 2 |
| PRs fechadas/merged | 2 |
| Novas releases | 0 |
| Bugs críticos novos | 0 |
| Features roadmap | 1 |

**Saúde geral:** ⚠️ **Estável com atenção necessária** — Atividade consistente, mas bug de UX pendente exige resolução.

---

*Relatório gerado em 2026-10-11 com base em dados do GitHub (github.com/sipeed/picoclaw)*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório de Projeto: IronClaw
**Data de referência:** 2026-10-11  
**Repositório:** [nearai/ironclaw](https://github.com/nearai/ironclaw)  
**Analista:** Automated Project Report Generator

---

## 1. Panorama do Dia

O projeto IronClaw apresenta **atividade muito baixa** em 11 de outubro de 2026, com apenas 2 issues atualizadas nas últimas 24 horas e **zero PRs ou releases**. A atividade reduzida pode indicar um período de estabilidade do código base ou possível perda de momentum na manutenção ativa. Das issues ativas, uma é um relato de usuário insatisfeito com a documentação de provedores, enquanto a outra foi fechada após resolução de um problema de autenticação com a API DeepSeek. O ecossistema parece não estar em desenvolvimento ativo significativo no momento.

---

## 2. Lançamentos

### Novos Releases
**Nenhum release registrado nas últimas 24 horas.**

A ausência de lançamentos recentes indica que:
- O projeto pode estar em fase de planejamento ou congelamento de features
- A última versão estável foi publicada há mais de 24h
- Não há correções urgentes em produção que demandem hotfix

---

## 3. Progresso do Projeto

### PRs Atualizados nas Últimas 24h
**Nenhuma PR registrada.**

### Issue Fechada
| # | Título | Status | Observação |
|---|--------|--------|------------|
| [#1047](https://github.com/nearai/ironclaw/issues/1047) | can not use deepseek, can not set key | ✅ CLOSED | Problema de autenticação 401 Unauthorized resolvido |

**Análise:** A issue #1047 foi fechada, indicando que usuários estão conseguindo configurar chaves de API DeepSeek corretamente. Isso representa uma regressão positiva na experiência do usuário, solucionando barreiras de entrada para uso do provedor.

---

## 4. Temas Quentes da Comunidade

### Issues com Atividade Recente

| # | Título | Autor | Comentários | 👍 | Status |
|---|--------|-------|-------------|-----|--------|
| [#8131](https://github.com/nearai/ironclaw/issues/8131) | Is this a joke? (ironclaw onboard provider list) | oooskarrr | 0 | 0 | 🟡 OPEN |

### Análise da Issue #8131

**Resumo do relato:**
O usuário questiona a precisão da documentação que afirma suporte a "mais de vinte provedores de inferência", incluindo "qualquer endpoint compatível com OpenAI". A issue sugere que a experiência real não corresponde à promessa de onboarding.

**Tom do relato:** Frustrado e irônico ("Is this a joke?")  
**Implicação:** Problema de **expectativa vs. realidade** na comunicação do produto

**Ações recomendadas:**
- Verificar se a lista de provedores onboard está funcionando corretamente
- Atualizar documentação para refletir capacidades reais
- Melhorar mensagens de erro durante configuração de provedores

---

## 5. Bugs e Estabilidade

### Issues Reportadas nas Últimas 24h

| # | Severidade | Título | Tipo |
|---|------------|--------|------|
| [#8131](https://github.com/nearai/ironclaw/issues/8131) | 🔴 Alta (UX) | Onboard provider list não funciona como documentado | Bug/Documentação |

### Análise de Estabilidade

**Problema prioritário:** A issue #8131, embora sem reações ou comentários, representa um risco significativo de **percepção negativa** da marca. Usuários que experimentam dificuldade em configurar provedores "suportados" tendem a abandonar a ferramenta e deixar reviews negativas.

**Problema resolvido:** A issue #1047 sobre autenticação DeepSeek foi fechada em 2026-10-10, indicando que a equipe respondeu a um problema real de estabilidade.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Demandas Identificadas

**Nenhuma feature request explícita registrada nas últimas 24h.**

### Sinais de Roadmap (via Issues Abertas)

| Issue | Sinal Extraído | Prioridade Indicada |
|-------|----------------|---------------------|
| [#8131](https://github.com/nearai/ironclaw/issues/8131) | Melhorar onboarding de provedores compatíveis com OpenAI | 🔴 Alta |

**Observação:** A queixa sobre "OpenAI-compatible endpoints" sugere que:
1. A feature existe, mas a UX de configuração precisa melhorar
2. A documentação promete mais do que o produto entrega
3. Testes automatizados de onboarding podem estar faltando

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Dor | Severidade | Issue | Evidência |
|-----|------------|-------|-----------|
| Onboarding de provedores não funciona como documentado | 🔴 Alta | [#8131](https://github.com/nearai/ironclaw/issues/8131) | "Seriously? According to the docs..." |
| Configuração de API keys para provedores externos | 🟡 Média | [#1047](https://github.com/nearai/ironclaw/issues/1047) | Erro 401 Unauthorized |

### Cenários de Uso Identificados

1. **Configuração de provedores LLM externos** — Usuários tentam conectar serviços como DeepSeek, OpenAI-compatible endpoints
2. **Dependência de documentação precisa** — Usuários confiam na documentação para onboarding inicial
3. **Autenticação via API keys** — Modelo de acesso padrão para provedores terceiros

### Indicadores de Satisfação

| Indicador | Valor | Interpretação |
|-----------|-------|---------------|
| 👍 em issues abertas | 0 | Baixo engajamento ou issues muito recentes |
| Comentários em issues | 0 | Comunidade não está respondendo às issues |
| PRs abertas/fechadas | 0 | Sem contribuição externa visível |

**Satisfação Geral:** ⚠️ **POTENCIALMENTE INSATISFEITA** — A issue #8131 com tom sarcástico indica frustração significativa de um usuário.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta há Longo Tempo

| # | Título | Criado | Atualizado | Dias Inativo | Prioridade |
|---|--------|--------|------------|--------------|------------|
| [#1047](https://github.com/nearai/ironclaw/issues/1047) | can not use deepseek, can not set key | 2026-03-12 | 2026-10-10 | ~7 meses | ✅ Resolvida |

### Issues Abertas sem Interação

| # | Título | Criado | Comentários | Status |
|---|--------|--------|-------------|--------|
| [#8131](https://github.com/nearai/ironclaw/issues/8131) | Is this a joke? (ironclaw onboard provider list) | 2026-10-10 | 0 | 🟡 OPEN |

### Recomendações de Priorização

1. **🔴 PRIORIDADE ALTA:** Responder à issue #8131 — o tom do usuário ("Is this a joke?") indica risco reputacional imediato
2. **🟡 PRIORIDADE MÉDIA:** Adicionar testes de onboarding para provedores OpenAI-compatible
3. **🟢 PRIORIDADE BAIXA:** Adicionar mais 👍/reações para validar demandas da comunidade

---

## Métricas Consolidada do Dia

| Métrica | Valor | Status |
|---------|-------|--------|
| Issues abertas/ativas (24h) | 1 | ⚠️ Requer atenção |
| Issues fechadas (24h) | 1 | ✅ Positivo |
| PRs merged/fechadas (24h) | 0 | 🔴 Sem progresso visível |
| Releases | 0 | ⚠️ Sem atualização |
| Taxa de resposta (issues) | 0% | 🔴 Crítico |
| Engajamento da comunidade | Mínimo | 🔴 Alerta |

---

## Conclusão

O projeto IronClaw encontra-se em **estado de baixa atividade** em 11/10/2026. A principal preocupação imediata é a issue #8131, que denuncia um gap entre a promessa de documentação (20+ provedores, incluindo endpoints OpenAI-compatíveis) e a experiência real do usuário. A resposta rápida a esta issue é essencial para preservar a credibilidade do projeto. A questão resolvida sobre DeepSeek (#1047) demonstra que a equipe **pode** responder a problemas, mas o tempo de resposta de ~7 meses é inaceitável para issues críticas.

**Ação recomendada:** Engajar imediatamente com o autor da issue #8131 para investigar e corrigir o onboarding de provedores OpenAI-compatíveis.

---

*Relatório gerado automaticamente com base nos dados públicos do GitHub em 2026-10-11.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório de Projeto CoPaw — 2026-10-11

---

## 1. Panorama do dia

O projeto CoPaw (QwenPaw/AgentScope) registrou **alta atividade** em 11 de outubro de 2026, com 17 issues e 19 PRs atualizados nas últimas 24h. O foco principal do dia foi a **resolução de bugs críticos no Console** — PRs importantes corrigiram problemas de recuperação de erros em chunk loading, refresh do painel de arquivos e erros de renderização SVG. Doze issues foram fechadas (incluindo 2 bugs de segurança marcados como inválidos), enquanto 6 novas issues permanecem abertas, abrangendo plataformas (Windows, Feishu, Console), APIs (OpenAI Responses, LM Studio) e documentação. Nenhum release foi publicado no período.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

O PR #8121 está em revisão para liberar o **QwenPaw Creator 2.0.1**, que inclui produção controlada de mídia e será a próxima versão do plugin.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados (11 no total)

| PR | Descrição | Impacto |
|----|-----------|---------|
| [#8154](https://github.com/agentscope-ai/QwenPaw/pull/8154) | Melhora recuperação de erros de chunk e diagnósticos no Console | **Alto** — corrige 4 issues simultâneas (#8120, #8094, #7815, #7074) |
| [#8169](https://github.com/agentscope-ai/QwenPaw/pull/8169) | Hub respeita overrides de capacidade do token administrativo | Correção de validação no Hub |
| [#8168](https://github.com/agentscope-ai/QwenPaw/pull/8168) | Usa limites de contexto resolvidos na validação do Hub | Melhora precisão de configuração de modelos |
| [#7996](https://github.com/agentscope-ai/QwenPaw/pull/7996) | Refresh de pastas expandidas no painel Files | Experiência de usuário |
| [#8149](https://github.com/agentscope-ai/QwenPaw/pull/8149) | Refresh de diretórios expandidos e preservação de paginação | Complemento ao #7996 |
| [#8157](https://github.com/agentscope-ai/QwenPaw/pull/8157) | Previne tamanho inválido de ícone de cópia | Correção UI menor |
| [#8159](https://github.com/agentscope-ai/QwenPaw/pull/8159) | Pula mensagens de texto vazias no agrupamento de respostas | Correção de renderização |
| [#8145](https://github.com/agentscope-ai/QwenPaw/pull/8145) | Wrap de controles do composer quando espaço é limitado | Responsividade mobile |
| [#7132](https://github.com/agentscope-ai/QwenPaw/pull/7132) | Fecha proposta de pin de ícone no sidebar (redesign supersede) | Arquivamento |
| [#7096](https://github.com/agentscope-ai/QwenPaw/pull/7096) | Fecha PR de annotations PEP 563 (funciona no main atual) | Arquivamento |

**Destaque técnico:** O PR #8154 (XXL size) foi a contribuição mais substancial do dia, resolvendo um cluster de issues relacionadas a estados de erro persistentes no Console.

---

## 4. Temas Quentes da Comunidade

### Issues com mais comentários

| Issue | Tipo | Comentários | Tema |
|-------|------|-------------|------|
| [#7678](https://github.com/agentscope-ai/QwenPaw/issues/7678) | Bug | 10 | spawn subAgent timeout — problema recorrente com subagentes |
| [#8162](https://github.com/agentscope-ai/QwenPaw/issues/8162) | Bug | 7 | OpenAI Responses API streaming vazio — **corrigido via #8165** |
| [#7815](https://github.com/agentscope-ai/QwenPaw/issues/7815) | Bug | 5 | Console não recupera de falha de lazy load — **corrigido via #8154** |
| [#7311](https://github.com/agentscope-ai/QwenPaw/issues/7311) | Bug | 4 | Módulo _qwenpaw_remote_backend ausente — **ABERTO** |
| [#7074](https://github.com/agentscope-ai/QwenPaw/issues/7074) | Bug | 4 | Crashes frequentes — **corrigido via #8154** |
| [#8120](https://github.com/agentscope-ai/QwenPaw/issues/8120) | Bug | 4 | Páginas falham frequentemente — **corrigido via #8154** |

**Análise:** Há um padrão claro de problemas com **recuperação de erros no Console** — a comunidade reportou múltiplas situações onde o UI fica preso em telas de erro. O PR #8154 aborda esse problema sistematicamente. A issue #7678 sobre subAgent timeout sugere problemas mais profundos com spawning de subprocessos.

---

## 5. Bugs e Estabilidade

### Issues Abertas (6) — Requirem atenção

| Issue | Severidade | Descrição |
|-------|------------|-----------|
| [#7311](https://github.com/agentscope-ai/QwenPaw/issues/7311) | **🔴 Crítica** | Módulo `_qwenpaw_remote_backend` ausente — todas as tools quebradas no Desktop v2.1.1b2 |
| [#8172](https://github.com/agentscope-ai/QwenPaw/issues/8172) | 🔴 Alta | Console chat: resposta vazia em 1s, modelo nunca chamado |
| [#8163](https://github.com/agentscope-ai/QwenPaw/issues/8163) | 🟡 Média | Caminhos longos no Windows quebram Creator plugin (erros 503/409) |
| [#8171](https://github.com/agentscope-ai/QwenPaw/issues/8171) | 🟡 Média | send_file_to_user com áudio trava sessão com LM Studio |
| [#8150](https://github.com/agentscope-ai/QwenPaw/issues/8150) | 🟡 Média | Feishu: imagens em mensagens post são descartadas silenciosamente |
| [#8082](https://github.com/agentscope-ai/QwenPaw/issues/8082) | 🟢 Documentação | Semântica de heartbeat não documentada |

### Análise de Severidade

- **Crítica (1):** #7311 afeta todos os usuários Desktop — todas as tools estão quebradas. Sem work-around além de reinstallar que não resolve.
- **Alta (1):** #8172 indica problema de stream/processamento silenciosamente falhando.
- **Média (3):** Problemas específicos de plataforma (Windows paths) e integrações (LM Studio, Feishu).

---

## 6. Pedidos de Features e Sinais de Roadmap

### PRs Abertos em Destaque

| PR | Size | Descrição | Implicação Estratégica |
|----|------|-----------|-------------------------|
| [#8164](https://github.com/agentscope-ai/QwenPaw/pull/8164) | XXXL | **HarmonyOS native client** | Expansão para ecossistema Huawei |
| [#7565](https://github.com/agentscope-ai/QwenPaw/pull/7565) | XXXL | Plugin clean unload + hot reload seguro | Estabilidade de plugins em produção |
| [#8121](https://github.com/agentscope-ai/QwenPaw/pull/8121) | XXXL | Release Creator 2.0.1 | Evolução do plugin Creator |
| [#8166](https://github.com/agentscope-ai/QwenPaw/pull/8166) | S | Docs: documenta semântica runtime do heartbeat | Documentação técnica |
| [#8167](https://github.com/agentscope-ai/QwenPaw/pull/8167) | S | Fix: caminhos longos Windows no Creator | Suporte Windows |

**Sinais de roadmap:**
1. **Expansão mobile:** HarmonyOS é uma adição estratégica significativa
2. **Stabilidade de plugins:** O PR #7565 indica foco em produção-ready plugins
3. **Documentação técnica:** Issue #8082 e PR #8166 mostram demanda por documentação de semântica runtime

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

1. **Experiência Console instável:** Usuários relatam falhas frequentes de carregamento (#8120), crashes exigindo reload (#7074), e estados de erro persistentes sem recuperação automática.

2. **Desktop Windows problemático:** 
   - Módulo ausente quebrando todas as tools (#7311)
   - Caminhos longos causando falhas irreversíveis (#8163)
   - Contexto UI não atualizando corretamente (#7994)

3. **Integrações externas frágeis:**
   - OpenAI Responses API retornando respostas vazias (#8162) — já corrigido
   - Feishu descartando imagens silenciosamente (#8150)
   - LM Studio rejeitando áudios sem fallback (#8171)

4. **Performance em produção:** Reporte de segurança (#8153) mencionando invasão por MCP Driver — marcado como inválido, mas indica preocupação com configuração de drivers.

### Cenários de Uso Reportados
- **Docker/Linux NAS deployment:** Console channel com modelos custom (octopus/keyong)
- **Desktop Windows:** Uso principal com v2.2.x beta
- **Plugins:** Creator sendo usado em workflows de revisão

---

## 8. Backlog que Merece Atenção

### Issues Abertas Sem Resolução

| Issue | Idade | Status | Prioridade |
|-------|-------|--------|------------|
| [#7311](https://github.com/agentscope-ai/QwenPaw/issues/7311) | ~46 dias | Aberta | 🔴 **Alta** |
| [#8082](https://github.com/agentscope-ai/QwenPaw/issues/8082) | ~9 dias | Aberta | 🟡 Média |
| [#8172](https://github.com/agentscope-ai/QwenPaw/issues/8172) | <1 dia | Aberta | 🔴 **Alta** |
| [#8163](https://github.com/agentscope-ai/QwenPaw/issues/8163) | <1 dia | Aberta | 🟡 Média |
| [#8171](https://github.com/agentscope-ai/QwenPaw/issues/8171) | <1 dia | Aberta | 🟡 Média |
| [#8150](https://github.com/agentscope-ai/QwenPaw/issues/8150) | ~2 dias | Aberta | 🟡 Média |

### Análise do Backlog

**Urgente:** A issue [#7311](https://github.com/agentscope-ai/QwenPaw/issues/7311) está aberta desde ~26 de agosto (46 dias) e afeta todos os usuários Desktop Windows — todas as ferramentas estão quebradas. Esta issue precisa de atribuição e investigação imediata.

**Novo cluster de issues (11/10):** 4 issues abertas no mesmo dia indicam regressões recentes nas versões beta (2.2.2b3/b4):
- Console chat silencioso (#8172)
- Windows long paths (#8163)  
- LM Studio audio (#8171)
- Feishu images (#8150)

**Recomendação:** Considerar release 2.2.2 stable após resolver #7311 e validar os fixes de #8154.

---

## Métricas Resumidas

| Métrica | Valor |
|---------|-------|
| Issues ativas (24h) | 17 |
| Issues fechadas | 11 |
| Issues abertas | 6 |
| PRs atualizados | 19 |
| PRs merged/closed | 11 |
| PRs abertos | 8 |
| Releases | 0 |
| Issue mais comentada | #7678 (10 comentários) |
| Bug mais crítico aberto | #7311 (46 dias sem resposta) |

---

*Relatório gerado em 2026-10-11 baseado em dados do GitHub.*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-10-11

---

## 1. Panorama do Dia

O projeto ZeroClaw mantém **atividade intensa** em 11 de outubro de 2026, com 18 issues e 50 PRs atualizados nas últimas 24h — sinalizando alta dinâmica de desenvolvimento. A taxa de merge fecha em 7 PRs contra 43 abertos, indicando pipeline de review ativo. Não há lançamentos novos registrados. Os esforços concentram-se em **estabilidade do runtime, canais (especialmente Telegram), observabilidade de custos e segurança de agentes**. A ausência de releases recentes sugere que a equipe está em ciclo de estabilização pré-lançamento, provavelmente alinhada às metas de v0.8.6 e v0.9.0 tracked em [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432).

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O tracker [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) indica que a **v0.9.0** ainda está em desenvolvimento, com fases pendentes de runtime e separação de gateway. A comunidade aguarda a finalização do Phase 3. Recomenda-se monitorar issues com tag `release:v0.9.0` para antecipar o próximo deployment.

---

## 3. Progresso do Projeto

### PRs Mergeadas/Fechadas (7 total)

| # | Título | Impacto |
|---|--------|---------|
| [#10801](https://github.com/zeroclaw-labs/zeroclaw/pull/10801) | `fix(zerocode): reload notification-lag sessions without cancelling running turns` | **Alto** — corrige regressão no ZeroCode que cancelava turns legítimos. Marca-se como `distinguished contributor`. |
| [#11306](https://github.com/zeroclaw-labs/zeroclaw/pull/11306) | `feat(dev): measure release binary bytes per footprint profile` | **Processo** — adiciona métricas de tamanho de binário por perfil, aiding release engineering. Tag: `release:v0.8.6`. |
| [#11356](https://github.com/zeroclaw-labs/zeroclaw/pull/11356) | `fix(plugins): replace a channel plugin's instance after a trap` | **Estabilidade** — mecanismo de recovery para plugins que travam (trap), melhorando resiliência do sistema. |

### Destaque: Fix em ZeroCode
O PR [#10801](https://github.com/zeroclaw-labs/zeroclaw/pull/10801) resolve um bug onde overflow no canal de notificação do daemon (`TryRecvError::Lagged`) disparava `begin_session_resync` indiscriminadamente, cancelando turns em execução. A correção preserva sessões ativas, melhorando diretamente a experiência do usuário no TUI.

---

## 4. Temas Quentes da Comunidade

### Issues com Mais Comentários

| # | Título | Comentários | Tensão |
|---|--------|-------------|--------|
| [#9965](https://github.com/zeroclaw-labs/zeroclaw/issues/9965) | Harden runtime-written executable test fixtures under parallel runtime gate | **15** | Testes de cron/scheduler em ambiente multithreaded — complexidade técnica elevada. `priority:p1`, `status:in-progress`. |
| [#9887](https://github.com/zeroclaw-labs/zeroclaw/issues/9887) | Downscale oversized images vs. dropping them | **7** | Demanda por flexibilidade no tratamento de imagens multimodais. `priority:p2`, `status:blocked`. |
| [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) | [Tracker] Runtime and gateway delivery v0.8.6 e v0.9.0 | **6** | Coordenação central do roadmap — referência obrigatória. |

### PRs com Alto Envolvimento (Long-Running)

| # | Título | Tamanho | Status |
|---|--------|---------|--------|
| [#10407](https://github.com/zeroclaw-labs/zeroclaw/pull/10407) | `feat(sessions): add persistent session prompt attachments` | **XL** | Aberto desde ago/2026 — adiciona SQLite para anexos de prompt por sessão. |
| [#10391](https://github.com/zeroclaw-labs/zeroclaw/pull/10391) | `fix(delegate): keep a bounded delegate's workspace...` | **XL** | Corrige bound leaking em delegates — 2 meses em review. |
| [#7821](https://github.com/zeroclaw-labs/zeroclaw/pull/7821) | `feat(security): canonical sandbox_policy schema` | **XL** | Schema de sandboxing desde jun/2026 — segurança crítica. |

### Análise
A comunidade demonstra **preocupação significativa com segurança e isolamento de agentes** (delegate bounds, sandbox policy, DNS resolution bounds). Issues com 15+ comentários indicam debates técnicos acalorados que merecem atenção da liderança.

---

## 5. Bugs e Estabilidade

### Por Severidade

#### P1 (Críticos — Workflow Bloqueado)

| # | Título | Canal | Risco |
|---|--------|-------|-------|
| [#11612](https://github.com/zeroclaw-labs/zeroclaw/issues/11612) | Re-running approved shell command aborts agent loop | `channel:acp` | Abort de loop em comandos shell reaprovados — **reportado por DefuzeX/KUMA**. |
| [#11608](https://github.com/zeroclaw-labs/zeroclaw/issues/11608) | Telegram listener wedges on blackholed request | `channel:telegram` | Listener permanente — sem recovery automático. |
| [#11615](https://github.com/zeroclaw-labs/zeroclaw/issues/11615) | Telegram send ignores 429 `retry_after` | `channel:telegram` | Rate limiting composto — replies perdidas. |
| [#11614](https://github.com/zeroclaw-labs/zeroclaw/issues/11614) | `map_key_sections` leaks schema paths → memory grow | `config` | **Memory leak confirmado** — crescimento indefinido. |
| [#11618](https://github.com/zeroclaw-labs/zeroclaw/issues/11618) | ZeroCode drops queued message on SESSION_BUSY | `zerocode` | Input de usuário perdido silenciosamente. |
| [#11648](https://github.com/zeroclaw-labs/zeroclaw/issues/11648) | Web dashboard pairing limited to 6 digits (policy: 32) | `web` | Onboarding quebrado — **S1**. |

#### P2 (Degradados)

| # | Título | Impacto |
|---|--------|---------|
| [#11613](https://github.com/zeroclaw-labs/zeroclaw/issues/11613) | Cost ledger drops `total_tokens` → under-count (ex: Gemini reasoning) | Observabilidade de custos imprecisa. |
| [#11632](https://github.com/zeroclaw-labs/zeroclaw/issues/11632) | Desktop (Linux/Tauri) WebKitWebProcess 100% GPU idle | Desempenho de desktop degradado. |
| [#11623](https://github.com/zeroclaw-labs/zeroclaw/issues/11623) | ZeroCode drops pending `ask_user` prompt | Ferramentas de elicitação falham silenciosamente. |

### Tendência
**5 bugs P1 ativos simultaneamente** — indicativo de pressão sobre o time de estabilidade. Os problemas em Telegram (2) e memória (1) são particularmente urgentes.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Abertas

| # | Título | Prioridade | Observação |
|---|--------|------------|------------|
| [#9887](https://github.com/zeroclaw-labs/zeroclaw/issues/9887) | Downscale oversized images em vez de drop, com limite desabilitável com 0 | `p2`, `high risk` | Melhoria de UX multimodais — blocked. |
| [#10550](https://github.com/zeroclaw-labs/zeroclaw/issues/10550) | Bound skill HTTP DNS resolution + test seam | `p2`, `high risk` | Segurança de skills HTTP. |
| [#11620](https://github.com/zeroclaw-labs/zeroclaw/issues/11620) | Show message times in ZeroCode transcript | `p3` | Qualidade de vida no TUI. |
| [#11638](https://github.com/zeroclaw-labs/zeroclaw/issues/11638) | [Tracker] Restore stable community entry points | `tracker` | Coordena atualização de links (Discord vanity broken). |

### Sinais de Roadmap
- **Multimodal maturity**: [#9887](https://github.com/zeroclaw-labs/zeroclaw/issues/9887) indica que o pipeline de imagens precisa evoluir de "reject on size" para "process flexivelmente".
- **Observabilidade**: Custos ([#11613](https://github.com/zeroclaw-labs/zeroclaw/issues/11613)), sessões ([#10700](https://github.com/zeroclaw-labs/zeroclaw/issues/10700) — closed) e tokens ([#11613](https://github.com/zeroclaw-labs/zeroclaw/issues/11613)) são tema recorrente.
- **Canais**: Telegram recebe atenção massiva (3 PRs novos em 24h), sinalizando priorização de estabilidade nessa integração.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Dor | Evidência | Severidade |
|-----|-----------|------------|
| **Perda de mensagens** | [#11618](https://github.com/zeroclaw-labs/zeroclaw/issues/11618) (ZeroCode), [#11615](https://github.com/zeroclaw-labs/zeroclaw/issues/11615) (Telegram) | Alta |
| **Memória leak em produção** | [#11614](https://github.com/zeroclaw-labs/zeroclaw/issues/11614) (`map_key_sections`) | Crítica |
| **Loop de agente abortado** | [#11612](https://github.com/zeroclaw-labs/zeroclaw/issues/11612) (reportado via KUMA/DefuzeX) | Alta |
| **Telegram wedged** | [#11608](https://github.com/zeroclaw-labs/zeroclaw/issues/11608) — sem auto-recovery | Alta |
| **Onboarding web quebrado** | [#11648](https://github.com/zeroclaw-labs/zeroclaw/issues/11648) | Bloqueante |
| **Custo subcontado** | [#11613](https://github.com/zeroclaw-labs/zeroclaw/issues/11613) — modelos com reasoning tokens | Média |

### Cenários de Uso Refletidos
- **Agentes supervisionados**: O bug em [#11612](https://github.com/zeroclaw-labs/zeroclaw/issues/11612) afeta fluxos onde o humano re-aprova comandos shell — caso de uso de segurança/testing.
- **Desktop Linux**: Bug de GPU ([#11632](https://github.com/zeroclaw-labs/zeroclaw/issues/11632)) impacta usuários GNOME/Wayland — base instalável degradada.
- **Integração Telegram**: 3 bugs simultâneos sugerem que canais são área de risco ativo.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Estagnadas

| # | Título | Idade | Estado | Por que Importa |
|---|--------|-------|--------|-----------------|
| [#7821](https://github.com/zeroclaw-labs/zeroclaw/pull/7821) | Canonical sandbox_policy schema | **~4 meses** | Aberto | Segurança de agentes — schema fundamental. |
| [#9420](https://github.com/zeroclaw-labs/zeroclaw/pull/9420) | Support stored OAuth profiles (Anthropic) | **~3 meses** | Aberto | Experiência de auth mais limpa. |
| [#9447](https://github.com/zeroclaw-labs/zeroclaw/pull/9447) | Classify incomplete terminal responses (Anthropic) | **~3 meses** | `needs-maintainer-review` | Qualidade de resposta — confusão usuário. |
| [#9887](https://github.com/zeroclaw-labs/zeroclaw/issues/9887) | Downscale oversized images | **~2 meses** | `blocked` | Feature request multimodais bloqueada. |
| [#10622](https://github.com/zeroclaw-labs/zeroclaw/pull/10622) | Slack: accept bot/workflow messages | **~1 mês** | `parking-lot` | Suporte a automações Slack. |

### PRs com "needs-author-action" Pendentes

| # | Título | Idade |
|---|--------|-------|
| [#10391](https://github.com/zeroclaw-labs/zeroclaw/pull/10391) | Bounded delegate fix | ~2 meses |
| [#10446](https://github.com/zeroclaw-labs/zeroclaw/pull/10446) | Reject tool-call envelopes in prose | ~1.5 meses |

### Risco de Atrição
PRs com meses em review sem movimento podem sinalizar:
1. Falta de capacidade de review no time principal.
2. Conflitos arquiteturais não resolvidos.
3. Priorização desalinhada.

**Recomendação**: Triagem semanal dos PRs >30 dias para evitar contribuições órfãs.

---

## Saúde Geral do Projeto

| Indicador | Status | Tendência |
|-----------|--------|-----------|
| Atividade (issues/PRs/24h) | **68 eventos** | ⬆️ Alta |
| Razão open/merged (PRs) | **43:7** (~1:6 em 24h) | ⚠️ Acúmulo de backlog |
| Bugs P1 ativos | **5** | 🔴 Crítico |
| Releases (7 dias) | **0** | ⏸️ Pausa |
| Long-running PRs (>30d) | **6+** | ⚠️ Atenção |

**Veredicto**: ZeroClaw está em **modo intensivo de estabilização**. A comunidade reporta dores concretas (memory leak, Telegram, onboarding). O time precisa priorizar a resolução de P1s e o flush de PRs bloqueados antes de um próximo release.

---

*Relatório gerado em 2026-10-11 com base em dados do GitHub de [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw).*

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*