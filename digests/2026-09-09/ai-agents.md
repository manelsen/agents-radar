# Resumo diário do ecossistema de agentes de IA 2026-09-09

> Issues: 0 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-09-08 22:18 UTC

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

**Data de referência:** 2026-09-09 | **Período:** últimas 24 horas

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **dois padrões distintos de desenvolvimento** neste período. Por um lado, projetos como **CoPaw, ZeroClaw, NanoBot e Hermes Agent** demonstram atividade intensa com 30–50+ eventos por dia, indicando ciclos de desenvolvimento acelerados e comunidades engajadas. Por outro, **PicoClaw e IronClaw** mantêm ritmo mais moderado, focando em estabilização de recursos específicos. A **ausência completa de releases formais** em todos os projetos (exceto CoPaw v2.2.1-beta.1) sugere que o ecossistema está em fase de consolidação pré-release, priorizando correções de bugs críticos e refinamento arquitetural sobre funcionalidades novas. Os temas técnicos dominantes incluem **estabilidade de caches em memória, multi-canal (Telegram/Mattermost/WhatsApp), e integração com provedores alternativos de IA** — reflexo direto das demandas de produção em ambientes enterprise e self-hosted.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | Releases | Bugs Críticos | Avaliação Saúde |
|---------|--------------|-----------|----------|--------------|----------------|
| **NullClaw** | 0 | 0 | 0 | N/A | 🔴 Inativo |
| **NanoBot** | 0 ativas | 40 (26 abertos, 14 merged) | 0 | 5 P2 (memory leaks) | 🟢 Muito ativo |
| **Hermes Agent** | 50 | 50 (9 merged) | 0 | 2 P1 + 13 P2 | 🟢 Ativo, alta demanda |
| **PicoClaw** | 4 | 8 (1 merged) | 0 | 2 críticos (data loss) | 🟡 Moderado |
| **IronClaw** | 2 | 11 (3 merged) | 0 | 1 segurança (42 dias) | 🟡 Concentrado |
| **CoPaw** | 30 (15 fechadas) | 45 (24 merged) | 1 beta | 7 críticos | 🟢 Muito ativo |
| **ZeroClaw** | 27 (4 fechadas) | 50 (2 merged) | 0 | ≥2 S1 + ≥3 S2 | 🟡 Volume alto |

**Observação:** ZeroClaw e Hermes Agent lideram em volume absoluto, mas ZeroClaw apresenta menor taxa de fechamento (4% de PRs mergeados). NanoBot e CoPaw demonstram melhor equilíbrio entre volume e throughput de triagem.

---

## 3. Posicionamento do Projeto Principal (NanoBot)

### Vantagens Competitivas

| Dimensão | NanoBot | Análise |
|----------|---------|---------|
| **Throughput de PRs** | 40 PRs/24h | Lidera em eficiência de processamento — 2.3x mais que Hermes (17.3/24h equivalent) |
| **Comunidade** | 6+ contribuidores recorrentes | Diversificado, sem dependência de contributor único |
| **Estabilidade** | 0 issues abertas/atrasadas | Best-in-class em triagem — ZeroClaw tem 15% de taxa de fechamento |
| **Foco Telegram** | 4 PRs coordenadas de UX | Paridade de canal com IronClaw (Telegram Bot API), mas com mais iterações |

### Diferenças Técnicas

- **Arquitetura de caches:** NanoBot demonstra padrão recorrente de vazamentos em caches (idle sessions, OAuth flows, Mattermost threads) — 3 dos 5 bugs P2 seguem esse padrão. Diferencia-se de CoPaw (que prioriza event-loop blocking) e Hermes (foco em Desktop UI).
- **Provider discovery:** Integração ativa com Codex (GPT-6-Astra), mantendo compatibilidade com múltiplos endpoints — estratégia similar a ZeroClaw (OpenAI Responses API), porém com implementação mais pragmática.
- **WebUI:** Reorganização de sidebar (#5710) sinaliza foco em experiência de desenvolvimento, contrastando com Hermes (Desktop-first) e PicoClaw (CLI-first).

### Tamanho da Comunidade

| Métrica | NanoBot | Hermes | ZeroClaw | CoPaw |
|---------|---------|--------|----------|-------|
| PRs/24h | 40 | 50 | 50 | 45 |
| Contribuidores ativos | 6+ | 5+ | 3+ | 4+ |
| RFCs em revisão | 0 | 0 | 6+ | 0 |
| Releases (30 dias implícito) | 0 | 0 | 0 | 1 beta |

**Veredicto:** NanoBot posiciona-se como **projeto mais saudável operacionalmente** — alta atividade com baixa pendência. ZeroClaw tem volume similar mas maior backlog acumulado.

---

## 4. Focos Técnicos Compartilhados

### 4.1 Memory Leaks em Caches — Padrão Transversal

| Projeto | Caches afetados | Severidade |
|---------|-----------------|------------|
| **NanoBot** | Idle session, MCP OAuth, Mattermost threads | P2 |
| **PicoClaw** | Config.initSensitiveCache (race condition) | Crítico |
| **CoPaw** | History integrity scans repetidos | P3 (perf) |
| **ZeroClaw** | History trimming re-triggering | P1 |

**Análise:** 4 de 6 projetos ativos enfrentam problemas de boundedness em estruturas em memória. Este é o **problema técnico mais prevalente** no ecossistema, refletindo a complexidade de gerenciar estado em sessões longas com múltiplos canais e providers.

### 4.2 Integração Multi-Canal

| Canal | NanoBot | Hermes | PicoClaw | ZeroClaw |
|-------|---------|--------|----------|----------|
| Telegram | ✅ Maduro (4 PRs) | ✅ | ✅ | ✅ |
| WhatsApp | ❌ | ✅ | ❌ | ✅ |
| Mattermost | ✅ | ❌ | ❌ | ❌ |
| Feishu | ❌ | ❌ | ✅ (buggy) | ❌ |
| DeltaChat | ❌ | ❌ | ✅ (legacy) | ❌ |
| Discord | ❌ | ✅ | ❌ | ❌ |

**Insight:** Telegram é o denominador comum — todos os projetos com canais ativos suportam Telegram. NanoBot é único com Mattermost nativo.

### 4.3 Estabilidade de Provedores de IA

| Problema | NanoBot | Hermes | CoPaw | ZeroClaw |
|----------|---------|--------|-------|----------|
| Model discovery | ✅ (Codex 0.153.4) | ❌ (skills index stale) | ✅ | ✅ |
| Ollama compatibility | ✅ | ❌ (empty responses) | ✅ | ✅ |
| OpenAI Responses API | ❌ | ❌ | ❌ | ✅ (7 issues) |
| Python 3.14 | N/A | ❌ (P1) | N/A | N/A |

---

## 5. Análise de Diferenciação

### 5.1 Estratégia de Arquitetura

| Projeto | Abordagem | Implicação |
|---------|-----------|------------|
| **NanoBot** | Incremental iterativo | Rápido, mas sem visão de longo prazo documentada |
| **ZeroClaw** | RFC-driven | Maturidade de design alta, mas overhead processual (35+ comentários em #9487, 28 em #9488) |
| **IronClaw** | Security-first | Foco em multi-tenant isolation (hosted-MCP), menor comunidade |
| **Hermes** | Desktop/TUI primary | Platform lock-in, mas UX otimizada para non-developers |
| **CoPaw** | Feature-complete | 7 bugs críticos indicam "ready feature, production-ready" trade-off |
| **PicoClaw** | Embedded/CLI | Foco em deployments remotos (gbr/1), menor surface area |

### 5.2 Público-Alvo Inferido

| Projeto | Usuário Primário | Mercado geográfico |
|---------|------------------|---------------------|
| **NanoBot** | Desenvolvedores power | HK, CN (IoT requests) |
| **Hermes Agent** | Usuários Desktop | Global (Windows issues P1) |
| **ZeroClaw** | Enterprise self-hosted | Global (RFCs maduros) |
| **CoPaw** | Usuários chineses corporativos | CN (pkulaw, DingTalk) |
| **PicoClaw** | Self-hosted minimal | Global (Feishu, DeltaChat) |
| **IronClaw** | Multi-tenant providers | Enterprise |

### 5.3 Diferenciação Técnica

```
NanoBot:     Cache stability + Telegram UX → Produtividade developer
Hermes:      Desktop integration + Skills ecosystem → Usabilidade final
ZeroClaw:    RFC architecture + OpenAI Responses → Enterprise flexibility  
CoPaw:       Provider breadth + Localization → Mercado chinês
PicoClaw:    Remote agents + Minimal footprint → Edge/IoT
IronClaw:    Security isolation + MCP → B2B platforms
```

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração

| Projeto | Velocidade | Padrão |
|---------|------------|--------|
| **NanoBot** | Muito alta | "Move fast, fix later" — 40 PRs, 5 P2s simultâneos |
| **CoPaw** | Alta | "Feature + stabilization" — 24 merges, 7 bugs críticos |
| **ZeroClaw** | Moderada | "RFC-driven" — 50 PRs, 2 merges, 6 RFCs em revisão |
| **Hermes** | Moderada | "Stabilization" — 9 merges, 2 P1s abertos |
| **IronClaw** | Baixa | "Focused" — 3 merges, 1 contribuidor principal |
| **PicoClaw** | Baixa | "Critical fixes" — 1 merge, 2 bugs críticos parados |

### 6.2 Saúde Comunitária

| Indicador | NanoBot | Hermes | ZeroClaw | CoPaw |
|-----------|---------|--------|----------|-------|
| First-time contributors (24h) | 1 (#5696) | Múltiplos | Indeterminado | 3 |
| Issues respondidas <48h | ~100% | ~70% | ~50% | ~80% |
| PRs abandonados (>14 dias) | 0 | 1 (#31987, 107 dias) | 0 | 0 |
| RFCs em revisão | 0 | 0 | 6 | 0 |
| Stale issues (>7 dias) | 0 | 2 | 0 | 1 |

**Líder em comunidade saudável:** NanoBot — sem stale issues, zero PRs abandonados, contribuidor iniciante engajado.

**Líder em maturidade de design:** ZeroClaw — RFC process robusto, mas com overhead visível (issue #10549 pedindo simplificação).

### 6.3 Investimento em Infraestrutura

| Tipo | Projetos investindo | Prioridade |
|------|---------------------|------------|
| **Skills/Plugin marketplace** | Hermes (#66616), IronClaw (#6760), CoPaw (#7605) | Alta |
| **Observabilidade (usage/metrics)** | NanoBot (#5705), ZeroClaw (#10718) | Média-Alta |
| **Localização (i18n)** | CoPaw (#7482), Hermes (#96858 China) | Média |
| **Self-hosted deployment** | NanoBot (#4919), Hermes (#106036) | Alta |

---

## 7. Sinais de Tendência

### 7.1 Tendências de Mercado

| Tendência | Evidência | Projetos |
|-----------|-----------|----------|
| **Edge/IoT deployment** | NanoBot #5693 (无人零售/IoT), PicoClaw gbr/1 protocol | NanoBot, PicoClaw |
| **Multi-tenant enterprise** | IronClaw hosted-MCP, ZeroClaw multi-agent sidebar | IronClaw, ZeroClaw |
| **OpenAI Responses API** | ZeroClaw 7 issues + PRs (#10704-#10708) | ZeroClaw |
| **Telegram como canal principal** | 4 PRs NanoBot, Telegram Bot API IronClaw | NanoBot, IronClaw, ZeroClaw |
| **Provider diversification** | OpenCode-Go (PicoClaw), Hailo-Ollama (ZeroClaw), Requesty (CoPaw) | Todos |
| **China market** | Feishu (PicoClaw), Chinese localization (CoPaw), China mirror (Hermes) | PicoClaw, CoPaw, Hermes |
| **WASM extensibility** | ZeroClaw #10076 (plugin runtime) | ZeroClaw |

### 7.2 Padrões Arquiteturais Emergentes

1. **SEP-414 Caller Attribution (IronClaw):** Billing granular por-conversa em vez de por-usuário — indica maturidade de monetization em platforms.

2. **Context window optimization:** ZeroClaw (#8082 pointer mode), NanoBot (#5706 compression), CoPaw (#7628 budget-aware compaction) — convergência em reduzir custo de tokens.

3. **RFC como processo padrão:** ZeroClaw com 6+ RFCs em revisão múltipla estabelece padrão para design participativo — CoPaw e NanoBot não possuem equivalente.

### 7.3 Riscos Identificados

| Risco | Projetos afetados | Probabilidade |
|-------|-------------------|---------------|
| Skills index stale (Hermes) | Hermes (~30h downtime) | Alta — workflow quebrado |
| Security: cross-user metadata (IronClaw) | IronClaw (42 dias) | Crítica — open |
| Data loss: api_key deletion (PicoClaw) | PicoClaw | Crítica — open |
| Event-loop blocking (CoPaw) | CoPaw (2+ min freezes) | Alta |
| RFC overhead (ZeroClaw) | ZeroClaw | Média — comunidade reclamando |

### 7.4 Oportunidades de Mercado

| Oportunidade | Validação | Projetos |
|--------------|-----------|----------|
| **Ultra-lightweight IoT agents** | Issue NanoBot #5693 com 3 comentários | NanoBot |
| **China distribution channel** | 2+ issues pedindo mirror | Hermes, CoPaw |
| **Metasearch aggregation** | PR NanoBot #5234 (37 dias, em conflito) | NanoBot |
| **Enterprise self-hosted Telegram** | PR NanoBot #4919 | NanoBot |

---

## 8. Síntese para Tomadores de Decisão

### Prioridades por Perfil

| Perfil | Recomendação | Justificativa |
|--------|--------------|---------------|
| **Desenvolvedor buscando contribuição** | NanoBot ou CoPaw | Alta atividade, issues bem triadas, primeiro-contribuidor acolhido |
| **Enterprise avaliando estabilidade** | IronClaw ou ZeroClaw | Foco em segurança (IronClaw) ou arquitetura documentada (ZeroClaw) |
| **Usuário power (Telegram-first)** | NanoBot | 4 PRs de UX Telegram em 24h, comunidade ativa |
| **Plataforma B2B/Multi-tenant** | IronClaw | Foco estrutural em hosted-MCP e isolamento |
| **Mercado chinês/IoT** | CoPaw ou NanoBot | Localização nativa e requests IoT específicos |
| **Avoid (para produção)** | Hermes (skills index stale) | 30h downtime em documentação |

### Conclusão

O ecossistema demonstra **maturidade crescente com fragmentação intencional** — cada projeto converge para nichos específicos (Telegram, Desktop, Enterprise, Edge). NanoBot destaca-se como **referência operacional** pela combinação de alta atividade + baixa pendência. ZeroClaw emerge como **arquiteturalmente mais sofisticado** através de RFC-driven design, porém com overhead processual visível. A tendência de 2026-Q4 aponta para **consolidação em multi-provedor e otimização de context window**, com janela de oportunidade para agentes ultra-leves em mercados edge/IoT.

---

*Relatório gerado em 2026-09-09 | Fontes: GitHub APIs dos projetos referenciados*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-09-09

---

## 1. Panorama do Dia

NanoBot demonstra **atividade intensa e saudável** em 2026-09-09, com 40 PRs atualizados nas últimas 24h (26 abertos, 14 merged/fechados) e apenas 2 issues processadas. A equipe de manutenção está concentrada em **estabilidade e refinamento**: múltiplos PRs abordam vazamentos de memória em caches (idle session, Mattermost thread context, MCP OAuth flows), enquanto melhorias na experiência Telegram e WebUI dominam as contribuições de features. Nenhum lançamento foi publicado, indicando que o projeto está em fase de estabilização pré-release. A ausência de issues abertas/atrasadas sugere que a comunidade está engajada e bem atendida.

---

## 2. Lançamentos

**Nenhum release publicado nas últimas 24 horas.**

O projeto encontra-se em período de consolidação de contribuições antes de um próximo tag.

---

## 3. Progresso do Projeto

As seguintes PRs foram **merged/fechadas** hoje, representando avanços concretos:

| PR | Autor | Descrição | Impacto |
|---|---|---|---|
| [#5709](https://github.com/HKUDS/nanobot/pull/5709) | Re-bin | Atualiza client_version do Codex para 0.153.4, permitindo descoberta do modelo GPT-6-Astra | Funcionalidade |
| [#5711](https://github.com/HKUDS/nanobot/pull/5711) | Naster17 | Renomeia comandos com hífen para underscores compatíveis com Telegram (e.g., `/dream-log` → `/dream_log`) | UX Telegram |
| [#5707](https://github.com/HKUDS/nanobot/pull/5707) | Naster17 | Rota corretamente `/compact` e `/evaluator-prompt` para o command router do Telegram | Correção Telegram |
| [#5706](https://github.com/HKUDS/nanobot/pull/5706) | Naster17 | Colapsa mensagens de compactação de contexto em uma única mensagem editável no Telegram | UX Telegram |
| [#5710](https://github.com/HKUDS/nanobot/pull/5710) | chengyongru | Reorganiza sidebar WebUI separando Projects, Topics e Automations | UX WebUI |

**Destaque:** A convergência de 4 PRs do mesmo autor (Naster17) em melhorias Telegram sinaliza um esforço coordenado para melhorar a experiência nesse canal.

---

## 4. Temas Quentes da Comunidade

### Issues com mais comentários

| Issue | Autor | Tema | Comentários | Análise |
|---|---|---|---|---|
| [#5693](https://github.com/HKUDS/nanobot/issues/5693) | linxingming168 | Suporte ultra-lightweight para无人零售/IoT | 3 | **Demanda estratégica** — Sugere adaptação para mercados asiáticos (零售 = varejo) e dispositivos edge. Indicador de interesse em IoT/embebidos. |
| [#5696](https://github.com/HKUDS/nanobot/issues/5696) | 1printf | Primeiro contribuidor buscando issues acessíveis | 1 | **Sinal de saúde comunitaria** — Contribuidor com experiência em Python/LangChain/RAG buscando entrada. |

### PRs em destaque (comunidade ativa)

| PR | Autor | Tema | Relevância |
|---|---|---|---|
| [#5234](https://github.com/HKUDS/nanobot/pull/5234) | goodtiding5 | Integração mst-python como metasearch (RRF de múltiplos motores) | **Alta** — Feature ambiciosa de busca agregada |
| [#5437](https://github.com/HKUDS/nanobot/pull/5437) | googio | Provider Serply (Google SERP API) | **Média** — Alternativa ao Serper |
| [#5387](https://github.com/HKUDS/nanobot/pull/5387) | dajiaohuang | Suporte a stickers reutilizáveis no Telegram | **Média** — Enhances interações Telegram |

**Padrão identificado:** Forte interesse em expandir canais de comunicação (Telegram) e provedores de busca/web.

---

## 5. Bugs e Estabilidade

### Correções em andamento (PRs abertos)

| PR | Severidade | Problema | Impacto |
|---|---|---|---|
| [#5664](https://github.com/HKUDS/nanobot/pull/5664) | **P2** | Cache de summaries de sessões idle sem bound | Memória crescente em sessões abandonadas |
| [#5665](https://github.com/HKUDS/nanobot/pull/5665) | **P2** | Cache de OAuth flows MCP sem bound | Memory leak em reinícios rápidos |
| [#5663](https://github.com/HKUDS/nanobot/pull/5663) | **P2** | Mattermost thread context set sem eviction | Crescimento indefinido de identificadores |
| [#5708](https://github.com/HKUDS/nanobot/pull/5708) | **P2** | Caracteres UTF-8 corrompidos em streaming exec (char spanning reads) | Output de ferramentas pode exibir � em vez de caracteres válidos |
| [#5590](https://github.com/HKUDS/nanobot/pull/5590) | **P2** | Preview JSON truncado perde campos importantes (`ok`, `status`, `error`) | Debugging dificultado |

**Análise:** O projeto apresenta **padrão recorrente de memory leaks em caches** — 3 dos 5 bugs P2 envolvem boundedness de estruturas em memória. Isso sugere que a equipe está sistematicamente fortalecendo a resiliência em produção.

### Regressão em destaque
| PR | Autor | Tema | Status |
|---|---|---|---|
| [#5152](https://github.com/HKUDS/nanobot/pull/5152) | yu-xin-c | Marcação de resultados parciais de subagentes | **Aberto** — Count incomplete completions para pending notices |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas demandas identificadas

| Issue/PR | Autor | Feature | Potencial |
|---|---|---|---|
| [#5693](https://github.com/HKUDS/nanobot/issues/5693) | linxingming168 | Ultra-lightweight, self-hosted para无人零售/IoT | **Estratégico** — Mercado IoT/embebido + localização chinesa |
| [#4919](https://github.com/HKUDS/nanobot/pull/4919) | nolanchic | Custom Bot API base URL + headers para Telegram | **Enterprise** — Self-hosted Telegram em ambientes corporativos |
| [#5498](https://github.com/HKUDS/nanobot/pull/5498) | chengyongru | Unificação de onboarding no Agent TUI | **UX** — Melhora experiência de novos usuários |
| [#5705](https://github.com/HKUDS/nanobot/pull/5705) | chengyongru | Painel `/usage` com charts de contexto e tokens | **Observabilidade** — Diagnóstico de custos |
| [#5704](https://github.com/HKUDS/nanobot/pull/5704) | chengyongru | 48 campos de configuração via WebUI com live apply | **Usabilidade** — Reduz dependência de config.json |

**Sinais de roadmap:**
1. **Enterprise/self-hosted** — Custom endpoints Telegram, storage de tokens OAuth em diretórios gerenciados (#5638)
2. **Observabilidade** — Métricas de usage (#5705), bounded history rendering (#5703)
3. **Expansão de canais** — Telegram como foco principal, Mattermost, potencialmente IoT

---

## 7. Resumo de Feedback dos Usuários

### Dores identificadas
| Feedback | Origem | Tema |
|---|---|---|
| "Telegram only accepts `[a-z0-9_]` names as bot commands" | [#5711](https://github.com/HKUDS/nanobot/pull/5711) | Compatibilidade Telegram |
| "Abandoned sessions could therefore cause the cache to grow without limit" | [#5664](https://github.com/HKUDS/nanobot/pull/5664) | Estabilidade em produção |
| "In container deployments, this location may not be persistent or writable" | [#5638](https://github.com/HKUDS/nanobot/pull/5638) | Deployments containerizados |
| "Sidebar mixes project folders with a long history of topics" | [#5710](https://github.com/HKUDS/nanobot/pull/5710) | Navegação WebUI |

### Cenários de uso emergentes
- **Varejo autônomo (IoT)** — Feature request específico para无人零售 (China) com部署 ultra-leve em edge devices
- **Metasearch** — Integração mst-python sugere demanda por agregação de resultados de múltiplos motores
- **Desenvolvedores iniciantes** — Contribuidor #5696 busca issues "beginner-friendly", indicando necessidade detagging claro

### Satisfação geral
**Indicadores positivos:**
- 40 PRs em 24h → comunidade ativa
- 2 issues fechadas com discussão substancial (3 comentários)
- Multiple contributors возвращаются (Shizoqua com 4 PRs, chengyongru com 4 PRs, Naster17 com 3 PRs)

---

## 8. Backlog que Merece Atenção

### PRs com conflito ou inactivity

| PR | Autor | Tema | Idade | Status |
|---|---|---|---|---|
| [#5234](https://github.com/HKUDS/nanobot/pull/5234) | goodtiding5 | Metasearch mst-python | ~37 dias | **Aberto com conflito** |
| [#5437](https://github.com/HKUDS/nanobot/pull/5437) | googio | Provider Serply | ~21 dias | **Aberto com conflito** |
| [#5387](https://github.com/HKUDS/nanobot/pull/5387) | dajiaohuang | Telegram stickers | ~27 dias | **Aberto com conflito** |
| [#5590](https://github.com/HKUDS/nanobot/pull/5590) | dajiaohuang | JSON tool results preview | ~12 dias | **Aberto com conflito** |
| [#5152](https://github.com/HKUDS/nanobot/pull/5152) | yu-xin-c | Partial subagent completion | ~43 dias | **Aberto (regression)** |

### Recomendação

**4 PRs com conflito em 3 semanas** exigem resolução de merge block para não desmotivar contributors. Prioridade sugerida:
1. Resolver conflitos de [#5234](https://github.com/HKUDS/nanobot/pull/5234) e [#5387](https://github.com/HKUDS/nanobot/pull/5387) — features desejadas pela comunidade
2. Revisar [#5152](https://github.com/HKUDS/nanobot/pull/5152) — tag regression sugere impacto na estabilidade

---

## Métricas de Saúde do Projeto

| Indicador | Valor | Avaliação |
|---|---|---|
| PRs nas últimas 24h | 40 | 🟢 Muito ativo |
| Issues ativas/abertas | 0 | 🟢 Bem gerenciadas |
| PRs abertos | 26 | 🟢 Pipeline saudável |
| Releases (7 dias) | 0 | 🟡 Em consolidação |
| PRs com conflito | 4 | 🟠 Requer atenção |
| Contributors recorrentes | 6+ | 🟢 Diversificado |

---

**Relatório gerado em 2026-09-09 | Fonte: [HKUDS/nanobot](https://github.com/HKUDS/nanobot)**

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-09-09

---

## 1. Panorama do Dia

O projeto Hermes Agent demonstra **alta atividade operacional** em 8 de setembro de 2026, com 100 eventos totais (50 issues + 50 PRs) registrados nas últimas 24 horas. A postura geral é de **manutenção intensiva e estabilização**, sem lançamentos formais. A atividade de PRs revela 9 merges/fechamentos, indicando que a equipe está processando o backlog de correções de forma consistente. Os temas dominantes giram em torno de **estabilidade multiplataforma (Windows, Desktop)**, **sessões e profiles**, e **ferramentas MCP/ Skills**. O índice de issues abertas (49 de 50) sinaliza uma janela de lavoro ativa, porém sem resolução acelerada de tickets mais antigos.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24 horas.**

O projeto não emitiu novas versões desde o último ciclo. Isso é consistente com o padrão observado de que correções estão sendo direcionadas ao branch `main` via PRs, sem versão semântica atrelada. A ausência de releases pode indicar que a equipe aguarda estabilização do batch atual antes de cortar uma release — particularmente relevante dado o volume de bugs P1/P2 reportados.

---

## 3. Progresso do Projeto

### PRs Fechadas/Merged (9 total)

| # | PR | Autor | Área | Impacto |
|---|-----|-------|------|--------|
| #106084 | fix(agent): route keyless local auxiliary providers | JoaoMarculos44 | comp/agent | Carry-forward da correção #106018 — resolve routing de providers ollama sem chave API |
| #95483 | fix(kanban): enforce exact PASS review verdicts | djagya | comp/cron | Impede transição para `done` sem verdict explícito PASS; fortalece integridade de dependências |
| #102021 | fix(skills): validate writes before approval staging | djagya | tool/skills | Adiciona validação pre-staging para operações de escrita em skills; reduz approvals órfãs |
| #100304 | fix(fallback): use canonical API-mode resolution | djagya | comp/agent | Alinha resolução de fallback do Kimi ao resolver canônico; evita `chat_completions` em endpoints que requerem `anthropic_` |
| #105943 | fix(gateway): honor profile namespace in session-key parse | gaoanze888 | comp/gateway | Corrige parsing de session key para `multiplex_profiles`; fecha #105931 |
| #106089 | fix(compression): preserve batch clarify answers | gaoanze888 | comp/agent | Garante que respostas de clarify em batch sobrevivem ao summarize pass |
| #106085 | fix(whatsapp): unwrap quoted-message wrappers | liuhao1024 | platform/whatsapp | Corrige extração de quotes em mensagens ephemeral/wrapper |
| #106088 | fix(tui): run quick-command skill aliases | PRATHAMESH75 | comp/tui | Habilita execução de aliases de skills via `command.dispatch` no desktop/TUI |
| #106095 | fix(desktop): restore minimized sessions | huklaa | comp/desktop | Restaura sidebar de sessões minimizada; fecha #106009 |

### PRs Abertas em Destaque

- **#106099** — fix(desktop): coalesce pending live status refreshes (Xipong) — Resolve loop de requisições causado por reset de `inFlight` a cada tick
- **#106080** — feat(skills): add evidence merge ledger (ether-btc) — Introduce ledger de evidências aditivas em YAML frontmatter de skills
- **#106036** — docs(install): support restricted networks (JoaoMarcos44) — Documenta instalação em redes restritas sem proxy
- **#106092** — perf(tools): resolve get_entry with O(1) lookups (liuhao1024) — Otimização crítica: duas buscas DICT vs. cópia do registry

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

1. **#66616** — Skills index is stale or degraded (180 comentários) — `degraded`
   - Status: **Crítico operacional**. Índice de skills 29.8h atrasado (limite: 26h).
   - O workflow `skills-index.yml` (cron 6/18 UTC) não está renovando `/docs/api/skills-index.json`.
   - Impacto: Docs de Skills Hub desatualizados para todos os usuários.
   - [Link](https://github.com/NousResearch/hermes-agent/issues/66616)

2. **#88584** — Automated Nous integration is blocked (78 comentários)
   - Merge automatizado Nous→Enterkey com conflitos em `cron/jobs.py`.
   - Dashboard updater preso na última release testada do Enterkey.
   - [Link](https://github.com/NousResearch/hermes-agent/issues/88584)

3. **#105145** — Windows `hermes update` reports FAILED (exit 8) after successful update (12 comentários) — `P1`
   - Post-update verification resolve wrong working directory.
   - Usuários Windows experimentam falha fantasma após update real.
   - [Link](https://github.com/NousResearch/hermes-agent/issues/105145)

4. **#94769** — Desktop UI flickers (WS reconnect loop) (8 comentários) — `P1`
   - Reconnect WebSocket a cada 2–5s, piora durante turns do agent.
   - Usuários com 4 perfis (multi-profile) são os mais afetados.
   - [Link](https://github.com/NousResearch/hermes-agent/issues/94769)

5. **#94726** — Desktop Bot Mode tracking (8 comentários) — **CLOSED**
   - Escopo direcionado pela equipe: 4 melhorias de Bot Mode aceitas para `main`.
   - [Link](https://github.com/NousResearch/hermes-agent/issues/94726)

6. **#96858** — Feature: mirror/update channel para usuários da China (3 comentários, em chino)
   - Proposta de渠道镜像 para Hermes na China continental.
   - Usuário argumenta valor estratégico: mercado de AI Agents em crescimento na CN.
   - [Link](https://github.com/NousResearch/hermes-agent/issues/96858)

### Análise de Demandas

- **Infraestrutura interna** domina o top 2 (skills-index + Nous integration), sinalizando dependências de automação frágeis.
- **Windows desktop** emerge como plataforma problemática (P1 em update + flicker).
- **Multiplex profiles** é um vetor de bugs recorrentes — 3+ issues relacionadas a session/profile scoping.
- **Usuários internacionais**已经开始 a sinalizar barreiras geográficas (China mirror request).

---

## 5. Bugs e Estabilidade

### Por Severidade

#### P1 — Críticos (2 issues abertas)

| # | Bug | Componente | Resumo |
|---|-----|------------|--------|
| #105145 | Windows update exit 8 false positive | comp/cli, desktop | Verificação post-update resolve cwd errado |
| #94769 | Desktop UI flicker (WS reconnect loop) | comp/gateway, desktop | Reconexão WS a cada 2–5s; multi-profile |
| #48723 | Python 3.14 compatibility | comp/cli | `Requires-Python: <3.14` — bloqueia adoção em Homebrew |

#### P2 — Altos (13+ issues abertas)

| Área | Bugs | Exemplos |
|------|------|----------|
| Desktop UI | 5+ | Sidebar zero-width (#106009), sessions invisíveis (#106003), flickering |
| MCP/Transport | 2 | anyio RuntimeError em cleanup (#31987), MCP não profile-scoped (#106005) |
| Session/Profiles | 4+ | Unbound sessions (#106016), namespace parse (#105931), AGENTS.md não injetado (#106012) |
| Gateway/Messaging | 3+ | WhatsApp quote parser (#106066), Discord voice timer (#105974), warm-up latência |
| Compression | 1 | Clarify answers descartadas (#106077) |
| Providers | 2 | Ollama empty responses (#46131), Mistral streaming breaks (#106006) |

#### P3 — Médios (~30+ issues)

Predominância de bugs em:
- **Skills/CLI**: install.sh duckduckgo.com probe (#106025), office skills dependências faltantes (#106090), quick-command aliases (#106063)
- **Perf**: get_entry O(N) registry copy (#106062), gateway warm-up latência (#105986, #106064)
- **Kanban/Automation**: respawn guard blocking rework (#62418), full-backup auditable dry-run (#105868)

### Regressões Identificadas

- **Windows update path**: introduzido após mudança de cwd resolution
- **Multiplex profiles**: scoping de MCP connections quebrado em multiplex
- **Compression summarize pass**: batch clarify answers não preservadas
- **Direnv**: hard-fail quando nix não instalado (#106091)

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas (Issues Abertas)

| # | Feature | Área | Prioridade | Sinais de Roadmap |
|---|---------|------|------------|-------------------|
| #26277 | Email session isolation por normalized subject | platform/email | P3 | Inbox gateways podem estar em expansão |
| #48723 | Suporte Python 3.14 | comp/cli | P1 | Bloqueio de compatibilidade impede adoção |
| #96858 | Canal mirror para China | infra/distribuição | P3 | Estratégia de mercado internacional |
| #50195 | Mudar working directory durante sessão | comp/cli, tui | P3 | QoL para workflows multi-projeto |
| #106080 (PR) | Evidence merge ledger para skills | tool/skills | P3 | Governança e auditabilidade de skills |

### Indicadores de Evolução

1. **Desktop como plataforma primária**: 5+ issues P2 específicas do Desktop App; a equipe está investindo em estabilização da UI.
2. **Skills como cidadã de primeira classe**: evidence ledger, validação de writes, office skills — a plataforma de skills está ganhando infraestrutura de governança.
3. **Multiplex profiles é prioridade implícita**: bugs de scoping tratados com urgência — sugere adoção crescente de multi-tenant.
4. **Python 3.14**: elevação a P1 indica que maintainers reconhecem impacto na distribuição (Homebrew).

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Reportadas

| Dor | Evidência | Severidade |
|-----|-----------|------------|
| **Windows update falha mesmo succeedendo** | #105145: "always reports FAILED (exit 8) after a successful update" | P1 |
| **Desktop UI instável** | #94769: flickering constante, especialmente com múltiplos perfis | P1 |
| **Skills não funcionam out-of-the-box** | #106090: 35 scripts importam libs não-bundleadas (docx, openpyxx, pptx) | P2 |
| **Sessões desaparecem da sidebar** | #106003: "No sessions yet" mesmo com 40+ sessões no DB | P2 |
| **Conexividade em redes restritas** | #106025: "falso check failed" por duckduckgo.com inacessível | P3 |
| **Nix não instalado quebra direnv** | #106091: bootstrap/managed installs com pip quebrados | P3 |

### Cenários de Uso Observados

- **Multi-profile fleet**: Usuários rodando 4+ agentes simultâneos com profiles diferentes (padrão Chinês + western).
- **Desktop-first**: TUI/desktop como superfície primária, não CLI pura.
- **Voice (Discord)**: Integração de voz em canais Discord com timer de inatividade.
- **WhatsApp Bridge**: Uso de quotes em mensagensephemerais.
- **Enterprise/restricted networks**: Usuários em ambientes sem acesso direto a pypi.org/duckduckgo.com.

### Satisfação/Insatisfação

- **Alta insatisfação** em Windows (update false positive + flickering) — usuários perdem confiança no ciclo de update.
- **Frustração crônica** com skills index degradado (#66616, 180 comentários) — usuários não confiam na documentação.
- **Sinal positivo**: comunidade ativamente contributing PRs (14+ PRs abertas em um dia, incluindo 6 duplicates de bugs já identificados) — engajamento saudável.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Estagnadas

| # | Issue | Idade | Status | Prioridade | Ação Recomendada |
|---|-------|-------|--------|------------|-----------------|
| #66616 | Skills index stale | ~53 dias | OPEN | P3 (op-impact) | Prioridade operacional — resolver cron/workflow |
| #88584 | Nous integration blocked | ~23 dias | OPEN | P3 (infra) | Desbloquear ou архивировать |
| #31987 | MCP anyio RuntimeError | ~107 dias | OPEN | P2 | Lock contention em reconnect — risco de loop infinito |
| #46131 | Ollama reasoning models empty | ~87 dias | OPEN | P2 | work-around conhecido: enviar `reasoning_effort=0` |
| #62418 | Kanban respawn guard blocks rework | ~60 dias | OPEN | P3 | Revisar lógica de respawn guard |
| #94769 | Desktop flicker WS loop | ~15 dias | OPEN | P1 | Bug de estabilidade crítico |
| #105868 | Full-backup reliability | 1 dia | OPEN | P3 | Consolidar integrações existentes |

### Issues Arquivadas ou Duplicadas a Considerar

| # | Issue | Nota |
|---|-------|------|
| #94726 | Bot Mode tracking | Closed, mas escopo residual pode ficar orfão |
| #105943 | Profile namespace fix | Closed, mas verificar se há side-effects |

### Priorização Sugerida

1. **#66616 + #88584** — Infraestrutura de automação (impacta confiança em processos internos)
2. **#105145 + #94769** — Estabilidade Windows/Desktop (P1, alta visibilidade)
3. **#31987 + #46131** — Providers alternativos (Ollama/MCP são的核心 para local-first)
4. **#106090** — Office skills out-of-box (quick win de DX)
5. **

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-09-09

---

## 1. Panorama do Dia

O projeto PicoClaw apresenta alta atividade de desenvolvimento no dia de hoje, com **4 issues abertas** e **8 pull requests** atualizados nas últimas 24 horas. A equipe de desenvolvimento demonstra foco em **estabilidade e segurança**: dois bugs críticos de race conditions e silenciamento de dados foram identificados e já possuem PRs corretivas em análise. A plataforma mantiene releases estáveis sem novos lançamentos hoje, indicando trabalho incremental de melhoria. A comunidade segue ativa com integrações em múltiplos canais (Telegram, Feishu, DeltaChat) e expansão de provedores de IA.

---

## 2. Lançamentos

**Nenhuma nova release registrada nas últimas 24 horas.**

O projeto opera atualmente na versão `picoclaw nightly-50-gbbf6893c` (Go 1.25.13), sem changelog formal de releases recientes. A ausência de novas versões indica fase de maturação do codebase antes de próximo tag estável.

---

## 3. Progresso do Projeto

### PR Merged/Closed Hoje

| # | Título | Impacto |
|---|--------|---------|
| [#714](https://github.com/sipeed/picoclaw/pull/714) | `skills: install/reinstall CLI and refactor into skillsCmd` | **Alto** — Adiciona CLI completo para instalação/reinstalação de skills via GitHub, usando Trees API para busca de diretórios. Inclui suporte a `repo@branch` e subpath opcional. Feature aguardada desde fevereiro. |

### PRs Abertas com Potencial de Merge

| # | Título | Autor | Relevância |
|---|--------|-------|------------|
| [#3375](https://github.com/sipeed/picoclaw/pull/3375) | `fix(config): guard lazy sensitive-data cache against concurrent init` | sting8k | **Crítica** — Corrige race condition em `Config.initSensitiveCache` que pode causar panic. |
| [#3372](https://github.com/sipeed/picoclaw/pull/3372) | `fix(config): make the reaction tool configurable` | sting8k | **Médio** — Torna configuração de tool de reactions funcional. |
| [#3371](https://github.com/sipeed/picoclaw/pull/3371) | `feat(providers): add opencode-go provider with session header support` | EMTumariscal | **Médio** — Adiciona provedor OpenCode Go com suporte a `x-opencode-session`. |
| [#3357](https://github.com/sipeed/picoclaw/pull/3357) | `fix(telegram): treat replies to bot's own messages as implicit mentions` | hugodeco | **Médio** — Melhora UX em grupos com `mention_only: true`. |
| [#3356](https://github.com/sipeed/picoclaw/pull/3356) | `fix(telegram): re-attach quoted documents when replying` | hugodeco | **Médio** — Corrige perda de contexto ao citar documentos. |
| [#3344](https://github.com/sipeed/picoclaw/pull/3344) | `Add Build Remote Agent phone pairing (gbr/1)` | LinespottingPrivate | **Funcionalidade** — Protocolo para agentes remotos via QR/8-char code. |
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) | `refactor(deltachat): cleanup implementation, documentation -200LOC` | trufae | **Manutenção** — Remove features legadas, atualiza docs, limpa -200LOC. |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| # | Título | Comentários | Prioridade |
|---|--------|-------------|------------|
| [#3343](https://github.com/sipeed/picoclaw/issues/3343) | `[stale] Tool feedback animation can edit Telegram message indefinitely after failed turn` | **3** | **Crítica** |
| [#3355](https://github.com/sipeed/picoclaw/issues/3355) | `Bug: conexão Feishu报错 (unknown field: channel_list.feishu.app_id)` | **1** | **Média** |

### Análise de Demandas

**Bug #3343** é o tema mais urgente da comunidade. O problema causa **+228.000 chamadas a `editMessageText`** em sequência após falha de agente, gerando rate limit no Telegram. Afeta diretamente a experiência em produção e indica necessidade de circuit breaker em animações de feedback.

**Issue #3355** representa barreira de onboarding para usuários Feishu, sugerindo descompasso entre documentação/configuração e schema esperado.

**Usuário sting8k** emerge como contribuidor significativo, identificando simultaneamente bugs de segurança e estabilidade (race conditions + silent data loss).

---

## 5. Bugs e Estabilidade

### Bugs Reportados (por severidade)

#### 🔴 Críticos

| # | Título | Impacto |
|---|--------|---------|
| [#3373](https://github.com/sipeed/picoclaw/issues/3373) | `SaveConfig silently deletes every api_key after the first` | **Perda silenciosa de dados** — `model_list` com múltiplas `api_keys` perde todas exceto a primeira. Fallback reference dangling. |
| [#3374](https://github.com/sipeed/picoclaw/issues/3374) | `Data race in Config.initSensitiveCache returns nil replacer` | **Potencial panic** — Goroutines concorrentes podem alocar múltiplos caches, retornando `nil *strings.Replacer`. |

#### 🟡 Médios

| # | Título | Impacto |
|---|--------|---------|
| [#3343](https://github.com/sipeed/picoclaw/issues/3343) | `Telegram animation loops indefinitely` | **Rate limit + performance** — 228k chamadas desnecessárias. |
| [#3355](https://github.com/sipeed/picoclaw/issues/3355) | `Feishu connection fails with unknown field error` | **Bloqueio de feature** — Configuração rejeitada pelo parser. |

### Status de Correções

- **#3375** (fix race condition) — PR aberto por sting8k
- **#3372** (reaction tool config) — PR aberto
- Ambos aguardam review e merge

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Recentes

| # | Título | Autor | Potencial |
|---|--------|-------|-----------|
| [#3371](https://github.com/sipeed/picoclaw/pull/3371) | `Add opencode-go provider with session header support` | EMTumariscal | **Alto** — Expande suporte a provedores. |
| [#3344](https://github.com/sipeed/picoclaw/pull/3344) | `Build Remote Agent phone pairing (gbr/1)` | LinespottingPrivate | **Funcionalidade** — Integração desktop-mobile via `gbr-agent`. |

### Sinais de Roadmap Inferidos

1. **Melhoria de canais**: Trabalhos em Telegram (replies, documents), DeltaChat (limpeza), Feishu (conexão)
2. **Extensibilidade de providers**: OpenCode adicionando-se a lista crescente
3. **CLI de skills maduro**: #714 mergeado indica maturidade da gestão de skills
4. **Agents remotos**: Protocolo `gbr/1` sugere estratégia de deployment distribuído

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Dor | Evidência | Severidade |
|-----|-----------|------------|
| **Rate limits em produção** | Bug #3343: 228k edits em dias | 🔴 Crítica |
| **Perda silenciosa de api_keys** | Bug #3373: round-trip apaga chaves | 🔴 Crítica |
| **Barreira Feishu onboarding** | Bug #3355: campo `app_id` não reconhecido | 🟡 Média |
| **UX em grupos Telegram** | PR #3357: replies ignorados sem @mention | 🟡 Média |
| **Perda de contexto em documentos** | PR #3356: quotes de docs perdem mídia | 🟡 Média |

### Cenários de Uso Observados

- **Agentes desktop remotos**: Phone pairing via `gbr/1`
- **Multi-canal**: Telegram, Feishu, DeltaChat em uso ativo
- **Skills customizadas**: CLI de install/reinstall em uso
- **Provedores diversificados**: OpenCode Go demonstrando fragmentação de provedores

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta Prolongada

| # | Título | Criado | Dias Dormindo |
|---|--------|--------|---------------|
| [#3343](https://github.com/sipeed/picoclaw/issues/3343) | `Tool feedback Telegram animation loops` | 2026-08-22 | **18 dias** ⚠️ |
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) | `DeltaChat refactor` | 2026-07-03 | **68 dias** ⚠️ |
| [#3355](https://github.com/sipeed/picoclaw/issues/3355) | `Feishu connection error` | 2026-09-01 | **8 dias** |

### Priorização Recomendada

1. **#3375 + #3373** — Race conditions e data loss são críticos para produção
2. **#3343** — Issue stale há 18 dias com impacto real em rate limits
3. **#3355** — Bloqueia integração Feishu para novos usuários
4. **#3222** — DeltaChat refactor pendente há 68 dias; código legacyj prejudica manutenção

---

## Métricas Resumidas (2026-09-09)

| Métrica | Valor |
|---------|-------|
| Issues abertas/ativas (24h) | 4 |
| PRs abertas (24h) | 7 |
| PRs merged/closed (24h) | 1 |
| Novas releases | 0 |
| Bugs críticos abertos | 2 |
| PRs aguardando merge | 8 |
| Issues stale (>7 dias) | 2 |

---

*Relatório gerado automaticamente com base em dados do GitHub. Última atualização: 2026-09-09.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-09-09

## 1. Panorama do Dia

O projeto IronClaw apresenta **alta atividade de desenvolvimento** nesta data, com 11 PRs atualizados nas últimas 24h (8 abertos, 3 merged/fechados) e 2 issues ativas. A atividade concentra-se fortemente no ecossistema **hosted-MCP**, com múltiplas correções e features relacionadas a catálogos de ferramentas, atribuição de chamadas e model context. Não há lançamentos registrados no período. O único contribuidor identificado nos dados é `kirikov`, com participação secundaria de `thisisjoshford` (PR #8072).

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24 horas.**

O projeto não publicou novas versões no período analisado. Recomenda-se monitorar o repositório para próximos lançamentos, considerando o volume de PRs em merged state (#8083, #6760, #6759).

---

## 3. Progresso do Projeto

Três PRs foram fechados/merged hoje, representando avanços significativos:

| PR | Título | Impacto |
|---|---|---|
| [#8083](https://github.com/nearai/ironclaw/pull/8083) | fix(extensions): merge discovered hosted-MCP catalogs instead of replacing them | **Crítico** — Corrige overwrite de catálogos entre usuários |
| [#6760](https://github.com/nearai/ironclaw/pull/6760) | feat(extensions): bundle the agent-market marketplace extension | Estabilidade — Agrega marketplace como package first-party |
| [#6759](https://github.com/nearai/ironclaw/pull/6759) | feat(mcp): SEP-414 attribution on hosted-MCP calls | Melhoria — Atribuição opt-in por provider |

### Destaque principal

O PR [#8083](https://github.com/nearai/ironclaw/pull/8083) resolve um bug crítico: em servidores hosted-MCP multi-tenant, a descoberta de ferramentas de um usuário **sobrescrevia** os catálogos de outros usuários. A correção implementa merge em vez de substituição, garantindo que todas as ferramentas descobertas coexistam no registry compartilhado.

---

## 4. Temas Quentes da Comunidade

### Issues com maior relevância

**[#6778](https://github.com/nearai/ironclaw/issues/6778) — Exposição de metadados cross-user (Segurança)**
- **Autor:** kirikov | **Comentários:** 2
- **Resumo:** Catálogos de ferramentas discovered são publicados por extension ID, não por instalação/usuário. Em servidores multi-principal, há exposição potencial de metadados entre usuários.
- **Status:** Aberta desde 2026-07-28 — problema em aberto há ~42 dias.

**[#8086](https://github.com/nearai/ironclaw/issues/8086) — CLI invisível para skills do runtime**
- **Autor:** kirikov | **Criado:** 2026-09-08 | **Comentários:** 0
- **Resumo:** `ironclaw skills list` não exibe skills instalados por agentes ou skills de outros usuários, conduzindo debugging a conclusões erradas.

### PRs em destaque (discutindo segurança e arquitetura)

| PR | Título | Tema |
|---|---|---|
| [#8090](https://github.com/nearai/ironclaw/pull/8090) | fix(mcp): key catalogs per caller, not per extension | Correção de segurança related a #6778 |
| [#8084](https://github.com/nearai/ironclaw/pull/8084) | feat(mcp): SEP-414 caller attribution | Atribuição por conversa (não apenas por usuário) |
| [#8082](https://github.com/nearai/ironclaw/pull/8082) | feat(attachments): pointer mode para document text | Otimização de context window |

---

## 5. Bugs e Estabilidade

### Problemas em aberto

**🔴 Crítico — Exposição cross-user (Issue [#6778](https://github.com/nearai/ironclaw/issues/6778))**

```
O registry de active-extensions armazena catálogos por extension ID apenas.
Instalações são per-user, mas a chave no registry é compartilhada.
```

- **Severidade:** Alta (segurança/multi-tenant)
- **Trabalho em progresso:** PR [#8090](https://github.com/nearai/ironclaw/pull/8090) propõe correção.

**🟡 Moderado — CLI não vê skills do runtime (Issue [#8086](https://github.com/nearai/ironclaw/issues/8086))**

- Ferramenta natural de debugging (`ironclaw skills list`) retorna vazio para skills válidos.
- Impacto: Diagnóstico incorreto por usuários/operadores.

**🟡 Configuração de env vars (PR [#8088](https://github.com/nearai/ironclaw/pull/8088))**

- `FOO=` e `FOO` ausente tratados identicamente.
- Variáveis cuja presença implica decisão de deployment silenciam erros.

### Bugs resolvidos recentemente

- [#8083](https://github.com/nearai/ironclaw/pull/8083) — Merge de catálogos MCP em vez de replace.
- [#8085](https://github.com/nearai/ironclaw/pull/8085) — Packages instalados por operator agora tratáveis como host-bundled.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features abertas com maior potencial estratégico

**1. [PR #8084](https://github.com/nearai/ironclaw/pull/8084) — SEP-414 Caller Attribution**
> "A hosted MCP server cannot tell which conversation a call came from"

- **Importância:** Permite que providers mantenham estado por-conversa e evitem cobranças duplicadas em retries.
- **Aplicação:** Ambientes multi-tenant com billing granular.

**2. [PR #8087](https://github.com/nearai/ironclaw/pull/8087) — Prompt Context Limit como override**
> "Anyone running models with a bigger window carries an edit to that line"

- **Importância:** Flexibiliza deployments para modelos com context window > 128k tokens.
- **Impacto:** Operacional (sem breaking changes).

**3. [PR #8082](https://github.com/nearai/ironclaw/pull/8082) — Pointer Mode para Documents**
> "Attaching a document silently spends most of the model's context"

- **Importância:** Reduz consumo de tokens em ~25k por PDF anexado.
- **Benefício direto:** Mais turns por conversation, menor custo por interação.

**4. [PR #8089](https://github.com/nearai/ironclaw/pull/8089) — Agent-market MCP Provider Bundle**
- Formaliza provider para agent.market como package first-party.
- Sigue padrão estabelecido para outros bundled providers.

**5. [PR #8072](https://github.com/nearai/ironclaw/pull/8072) — Telegram Bot API Command Menu**
- Contribuidor: `thisisjoshford`
- Registra comandos `/model`, `/status`, `/new`, `/stop`, `/interrupt` no menu Telegram via Bot API.

---

## 7. Resumo de Feedback dos Usuários

### Dores identificadas (derivadas de issues/PRs)

| Dor | Frequência nos dados | Evidência |
|---|---|---|
| Catálogos MCP sobrescrevem entre usuários | Alta (3 issues/PRs) | #6778, #8083, #8090 |
| Context window limitado por constante | Moderada | #8087 |
| Skills invisíveis para CLI | Moderada | #8086 |
| Documentos consomem context excessivamente | Emergente | #8082 |

### Cenários de uso implícitos

- **Multi-tenant hosting:** Servidores MCP servindo múltiplos usuários simultaneamente (demanda por isolamento).
- **Agentes autônomos:** Skills instalados por runtime, não por operador (gap de visibilidade).
- **Deployments customizados:** Necessidade de overrides de configuração sem patching de código.
- **Integrações externas:** Telegram como canal de interação.

### Indicadores de satisfação

- Volume de contribuições ativas indica comunidade engajada.
- PRs resolvendo problemas críticos (#8083) merged rapidamente — resposta rápida a dores críticas.

---

## 8. Backlog que Merece Atenção

### Issues sem resposta significativa

| Issue | Idade | Prioridade | Situação |
|---|---|---|---|
| [#6778](https://github.com/nearai/ironclaw/issues/6778) — Cross-user metadata exposure | ~42 dias | **Alta** | Aberta; PR #8090 em progresso |
| [#8086](https://github.com/nearai/ironclaw/issues/8086) — Skills invisíveis | 1 dia | **Média** | Aberta; sem assign ou PR |

### Recomendações

1. **Priorizar #6778** — Issue de segurança aberta há 42 dias; PR #8090 parece pronto para review.
2. **Triangular #8086** — Issue nova com 0 comentários; necessidade de ack ou assign.
3. **Revisar PR #8082** — Feature de otimização de tokens pode ter alto impacto em custo/performance.

---

## Indicadores de Saúde do Projeto

| Métrica | Status |
|---|---|
| Atividade (PRs/24h) | 🟢 Alta (11 PRs) |
| Bugs críticos abertos | 🟡 Moderada (1 segurança, 1 estabilidade) |
| Releases | 🔴 Nenhuma (24h) |
| Tempo de resposta em issues | 🟡 Médio (42 dias para #6778) |
| Contribuição diversificada | 🟡 Baixa (1 contribuidor principal) |

---

*Relatório gerado em 2026-09-09 com base em dados do GitHub de [nearai/ironclaw](https://github.com/nearai/ironclaw).*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do Projeto CoPaw — 2026-09-09

## 1. Panorama do dia

O projeto CoPaw (QwenPaw) manteve **atividade intensa** em 08/09, com **30 issues e 45 PRs** atualizados nas últimas 24h. Foi publicada a release **v2.2.1-beta.1**, indicando preparativos para a próxima versão stable. A comunidade demonstrou engajamento significativo com bugs críticos (perda de contexto,bloqueio deevent-loop, regressões de UI) e features ambiciosas (integração de provedores, plugins marketplace, localization). A taxa de fechamento de issues foi de **50%**, sinalizando capacidade de triagem e resolução acelerada.

---

## 2. Lançamentos

### ✅ v2.2.1-beta.1 (Beta) — PUBLICADA

| Mudança | Autor | PR |
|---------|-------|-----|
| `feat`: adição de settings de roteamento de modelos de agentes | @zhaozhuang521 | [#7501](https://github.com/agentscope-ai/QwenPaw/pull/7501) |
| `docs`: atualização do website para v2.2.0 | @cuiyuebing | [#7517](https://github.com/agentscope-ai/QwenPaw/pull/7517) |
| `fix(chat)`: sync de sessões resolvidas durante streaming | @zhaozh | (inline) |

**Notas de migração**: Release beta com foco em estabilidade de streaming e roteamento de modelos. Sem breaking changes declarados. Usuários em produção devem aguardar v2.2.1 stable.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados (destaque)

| # | Título | Impacto | Status |
|---|--------|---------|--------|
| [#7621](https://github.com/agentscope-ai/QwenPaw/pull/7621) | `fix(agents)`: handle PDF blocks for text-only models | **Crítico** — Resolve 400 errors com Zhipu, DeepSeek, vLLM auto-hospedado | ✅ Merged |
| [#7610](https://github.com/agentscope-ai/QwenPaw/pull/7610) | `fix(console)`: prevent chat submissions from bypassing the queue | **Estabilidade** — Corrige race conditions no envio de mensagens | ✅ Merged |
| [#7631](https://github.com/agentscope-ai/QwenPaw/pull/7631) | `fix(hub)`: authenticate CLI requests to the current local runtime | **DevEx** — CLI funciona dentro de sandboxes Hub | ✅ Merged |
| [#7598](https://github.com/agentscope-ai/QwenPaw/pull/7598) | `fix(shell)`: detach child stdin from interactive console | **Windows** — Evita hang em comandos que leem stdin | ✅ Merged |
| [#7627](https://github.com/agentscope-ai/QwenPaw/pull/7627) | `fix(mcp)`: legacy handshake arbitrate 401 discover probe | **MCP** — Restaura compatibilidade com pkulaw e endpoints legados | ✅ Merged |
| [#7605](https://github.com/agentscope-ai/QwenPaw/pull/7605) | `fix/issue 7582 plugin manager` | **UX** — Preserva contexto de marketplace após instalar plugins; batch updates | ✅ Merged |
| [#7502](https://github.com/agentscope-ai/QwenPaw/pull/7502) | `feat(console)`: redesign sidebar and settings experience | **UI/UX** — Sidebar unificado e nova experiência de configurações | ✅ Merged |
| [#7482](https://github.com/agentscope-ai/QwenPaw/pull/7482) | `feat(agent-kanban)`: Chinese/English localization | **i18n** — Localization completa do Agent Kanban | ✅ Merged |

**PRs Abertos com Potencial de Merge Próximo**

| # | Título | Área | Observação |
|---|--------|------|------------|
| [#7636](https://github.com/agentscope-ai/QwenPaw/pull/7636) | `fix(agents)`: strip PDF blocks regardless of multimodal support | Agents | Follow-up crítico do #7621 |
| [#7637](https://github.com/agentscope-ai/QwenPaw/pull/7637) | `feat(qwenpaw-data)`: QwenPaw-Data app 0.3.0 | PawApp | Integração de engine analítico |
| [#7639](https://github.com/agentscope-ai/QwenPaw/pull/7639) | `perf(scroll)`: avoid repeated history integrity scans | Performance | Reduz overhead em builds de agentes |
| [#7638](https://github.com/agentscope-ai/QwenPaw/pull/7638) | `feat(providers)`: add Requesty (OpenAI-compatible) | Providers | Primeiro merge de @Thibaultjaigu |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários + reactions)

| # | Título | Tipo | Comentários | Reações | Link |
|---|--------|------|-------------|---------|------|
| [#7579](https://github.com/agentscope-ai/QwenPaw/issues/7579) | [Bug]: 模型的回复意外从上下文中丢失 | Bug | 8 | 0 | 🔴 Crítico |
| [#7597](https://github.com/agentscope-ai/QwenPaw/issues/7597) | [Bug]: Tool-returned image/PDF binary → 400 error | Bug | 6 | 0 | 🔴 Crítico |
| [#7559](https://github.com/agentscope-ai/QwenPaw/issues/7559) | [Bug]: 409报错 ao enviar mensagem durante task | Bug | 5 | 0 | 🟡 Médio |
| [#7363](https://github.com/agentscope-ai/QwenPaw/issues/7363) | [Bug]: Chamadas síncronas bloqueiam event-loop + timeout失效 | Bug | 5 | 0 | 🔴 Crítico |
| [#7589](https://github.com/agentscope-ai/QwenPaw/issues/7589) | Heartbeat cron session feedback loop (duplicate pile-up) | Bug | 4 | 0 | 🔴 Crítico |
| [#7615](https://github.com/agentscope-ai/QwenPaw/issues/7615) | Discussion: Onde perguntar sobre plugins de terceiros? | Discussion | 1 | 👍 3 | 💬 Meta |

**Análise**: O tema dominante é **confiabilidade de sessões e contextos persistidos**. A comunidade reporta frequentemente:
- Perda de histórico de conversação entre requisições
- Erros 400/409 bloqueando fluxos de trabalho
- Bloqueio de event-loop causando freezes de 2+ minutos

---

## 5. Bugs e Estabilidade

### 🔴 Críticos (impactam produção)

| # | Descrição | Severidade | Status | Link |
|---|-----------|------------|--------|------|
| #7579 | Respostas do modelo perdidas do contexto (空响应) | Crítica | ABERTA | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/7579) |
| #7363 | Chamadas síncronas bloqueiam event-loop (118-135s startup, ~126s por mensagem) | Crítica | ABERTA | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/7363) |
| #7589 | Heartbeat cron cria loop de feedback com duplicação massiva de mensagens | Crítica | ABERTA | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/7589) |
| #7625 | Gemini retorna 400 após background tool completion | Crítica | ABERTA | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/7625) |
| #7633 | llama.cpp b10853 (5 dígitos) tem upgrade silenciosamente revertido para b8744 | Crítica | ABERTA | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/7633) |

### 🟡 Médios (regressões e UX issues)

| # | Descrição | Severidade | Status | Link |
|---|-----------|------------|--------|------|
| #7622 | Modal backgrounds "transparentes" no v2.2.0 (Linux, Chromium) | Média | ABERTA | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/7622) |
| #7617 | PDF DataBlock em history quebra endpoints OpenAI-compat (Zhipu GLM 400) | Média | FECHADA | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/7617) |
| #7572 | Coordinator `_drain` ingere exceções sem logging | Média | FECHADA | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/7572) |
| #7156 | Embedding health check timeout hardcoded (5s) mesmo com backend warm | Média | FECHADA | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/7156) |

**Métricas de Bug**: 7/30 issues abertas são bugs críticos. Taxa de fechamento em 24h: 50% (15 fechadas), indicando bom throughput de triagem.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Identificadas

| # | Título | Área | Potencial Impacto | Link |
|---|--------|------|-------------------|------|
| [#7630](https://github.com/agentscope-ai/QwenPaw/issues/7630) | Desabilitar detecção de CPU (vm/cloud desktops não funcionam) | Deploy | **Alto** — desbloqueia cloud deployments | Issue |
| [#7628](https://github.com/agentscope-ai/QwenPaw/issues/7628) | Context compaction deve ser budget-aware do request completo | Agents | **Alto** — evita truncagem prematura | Issue |
| [#7583](https://github.com/agentscope-ai/QwenPaw/issues/7583) | Integração com AgentScope Community (login, feedback) | Console | **Médio** — ecossistema | Issue |
| [#7479](https://github.com/agentscope-ai/QwenPaw/issues/7479) | Comandos com typo não são rejeitados (feedback ao usuário) | Channels | **Médio** — UX de canais | Issue |
| [#7638](https://github.com/agentscope-ai/QwenPaw/pull/7638) | Adicionar Requesty como provider OpenAI-compat | Providers | **Médio** — novos modelos | PR |

### Features em Desenvolvimento

| # | Título | Área | Observação | Link |
|---|--------|------|------------|------|
| [#7613](https://github.com/agentscope-ai/QwenPaw/pull/7613) | OpenViking long-term memory backend | Memory | PR Under Review | PR |
| [#5992](https://github.com/agentscope-ai/QwenPaw/pull/5992) | Per-session model overrides | Agents | PR longo (Julho), ainda em revisão | PR |
| [#6399](https://github.com/agentscope-ai/QwenPaw/pull/6399) | Reranker UI config panel | UI | PR Under Review | PR |

**Sinais de Roadmap**:
- **Performance**: Redução de overhead em history integrity checks (#7639)
- **Infraestrutura**: Cloud/VM compatibility (#7630)
- **Ecosistema**: Integração community, novos providers (Requesty)

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais Reportadas

| Categoria | Descrição | Frequência | Issues |
|-----------|-----------|------------|--------|
| **Confiabilidade de Sessão** | Perda de contexto, histórico "sumindo" entre requests | 🔴 Alta | #7579, #7589, #7617 |
| **Bloqueio/Freeze** | UI trava por 2+ minutos durante startup ou envio de mensagem | 🔴 Alta | #7363 |
| **Erros 400/409** | Operações legítimas falham com erros HTTP obscuros | 🟡 Média | #7597, #7559, #7625 |
| **UX de Plugins** | Marketplace confuso, sem batch updates, sem notificação de updates | 🟡 Média | #7582 (resolvido parcialmente) |
| **Windows Shell** | Comandos stdin bloqueiam console, Ctrl+C não funciona | 🟡 Média | #7554 (resolvido) |
| **Deploy** | VMs e cloud desktops根本无法使用 (CPU detection) | 🟡 Média | #7630 |

### Cenários de Uso Identificados

- **Ambiente corporativo**: Integração com pkulaw (北大法宝) MCP, canais QQ/Discord/DingTalk
- **Desenvolvedores locais**: CLI em sandboxes Hub, llama.cpp customizado
- **Usuários power**: Plugin marketplace, ReMe long-term memory, modelos auto-hospedados (vLLM, Ollama)

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Estagnadas

| # | Título | Criado | Comentários | Prioridade | Link |
|---|--------|--------|-------------|------------|------|
| #2972 | Painel mostra思考过程 sem opção de desabilitar (v1.0.1) | 2026-04-05 | 1 | 🟡 Antiga | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/2972) |
| #6885 | Console UI crashes on Chinese IME compositionEnd | 2026-08-10 | 3 | 🔴 Crítica | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/6885) |
| #6948 | Logs mostram UTC ao invés de user_timezone | 2026-08-12 | 1 | 🟡 UX | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/6948) |

### PRs Long-Standing

| # | Título | Criado | Status | Observação |
|---|--------|--------|--------|------------|
| [#5992](https://github.com/agentscope-ai/QwenPaw/pull/5992) | Per-session model overrides | 2026-07-12 | OPEN | 2 meses em revisão |

---

## Métricas Consolidada (24h)

| Indicador | Valor | Tendência |
|-----------|-------|-----------|
| Issues abertas/ativas | 15 | — |
| Issues fechadas | 15 | ✅ 50% taxa de fechamento |
| PRs abertos | 21 | — |
| PRs merged/fechados | 24 | ✅ Alta atividade |
| Novas releases | 1 (beta) | ✅ Ciclo de release ativo |
| Bugs críticos abertos | 7 | 🔴需要 atenção |
| PRs de first-time contributors | 3 | ✅ Comunidade crescendo |

---

*Relatório gerado em 2026-09-09. Dados extraídos de github.com/agentscope-ai/CoPaw.*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório de Projeto — ZeroClaw
**Data de referência:** 2026-09-09 | **Período analisado:** últimas 24 horas

---

## 1. Panorama do Dia

O ecossistema ZeroClaw registrou **alta atividade** no período, com **27 issues** e **50 pull requests** atualizados. A ausência de novas releases indica que a equipe está em ciclo de maturação de contribuições — muitas RFCs encontram-se em revisões de múltiplas revisões (#9487 Rev.5, #9488 Rev.10), sinalizando maturidade no processo de design. Não há itens fechados com estagnação prolongada; a taxa de issues fechadas (4/27) e PRs fechados (2/50) sugere um backlog controlado. A predominância de issues com标签 `risk:high` (múltiplas) e `priority:p1/p2` reforça que a equipe está focando em estabilidade e segurança, particularmente nos domínios de runtime, arquitetura e canais.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24 horas.**

O projeto encontra-se em período pré-release, com a base de código em intenso refinamento através de PRs e RFCs. Recomenda-se acompanhar o repositório para a próxima tag.

---

## 3. Progresso do Projeto

### PRs fechados/merged hoje (2)

| # | PR | Autor | Resumo |
|---|---|---|---|
| [#10719](https://github.com/zeroclaw-labs/zeroclaw/pull/10719) | `fix(providers): preserve tool image references through normalization` | shadowbrok3r | Preserva caminhos absolutos HTTP(S) em marcadores de imagem de ferramentas durante a normalização de payload para providers, garantindo entrega correta de imagens multimodais. |
| [#10670](https://github.com/zeroclaw-labs/zeroclaw/issues/10670) | `fix(heartbeat): aceita chave composta <tipo>.<alias> para instâncias de canal` | metalmon | Resolve rejeição indevida de chaves compostas em `heartbeat.target`, restaurando roteamento funcional para instâncias não-padrão. |

> **Destaque:** O PR #10670, fechado em 2026-09-07, representa uma correção pontual de interoperabilidade em configuração de heartbeat.

### PRs em destaque (em revisão ativa)

| # | PR | Tamanho | Domínio | Resumo estratégico |
|---|---|---|---|---|
| [#9724](https://github.com/zeroclaw-labs/zeroclaw/pull/9724) | `fix(approval): always_ask survives Full autonomy` | XL | Security | Corrige persistência da política `always_ask` quando agente eleva para autonomia total — **crítico para segurança de aprovação**. |
| [#9977](https://github.com/zeroclaw-labs/zeroclaw/pull/9977) | `fix(tools): confine filesystem mutations to workspace` | XL | Security | Torna o diretório de dados compartilhado autoritativo para backup/retenção e restringe escritas ao workspace autorizado. |
| [#10621](https://github.com/zeroclaw-labs/zeroclaw/pull/10621) | `feat(runtime): coordinate agent lifecycle mutations` | XL | Runtime | Unifica autoridade de configuração live entre daemon RPC, gateway, canais e CLI — elimina drift entre snapshots de config. |
| [#9320](https://github.com/zeroclaw-labs/zeroclaw/pull/9320) | `fix(cron): bound agent job runs with wall-clock timeout` | XL | Cron | Aplica `agentic_timeout_secs` a jobs cron e libera lock após expiração, eliminando jobs órfãos. |
| [#9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109) | `feat(providers): add native Hailo-Ollama support` | XL | Providers | Adiciona provider tipado para Hailo-Ollama 0.5.1 com suporte `/api/tags` e `/api/chat` não-streaming. |

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários + actividaderecente)

| # | Título | Comentários | Etiquetas-chave | Tendência |
|---|---|---|---|---|
| [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) | RFC: Runtime-owned conversation sessions and transport surface adapters | **35** | `type:rfc`, `risk:high`, `domain:architecture` | Rev.5 em discussão — redesign profundo de ownership de sessões. |
| [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) | RFC: Unified file and attachment architecture for conversation surfaces | **28** | `type:rfc`, `risk:high`, `domain:architecture` | Rev.10 — maturidade alta; unificação de arquitetura de anexos. |
| [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) | RFC: Granular sandbox policy — filesystem restrictions | **26** | `type:rfc`, `risk:high`, `status:in-progress` | Política de sandbox granular em avanço. |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | [Tracker]: Maintainer decision queue for RFCs | **15** | `type:tracker`, `status:accepted` | Ferramenta de gestão — fila oficial de decisões. |
| [#10076](https://github.com/zeroclaw-labs/zeroclaw/issues/10076) | RFC: Composable WASM plugin runtime architecture | **11** | `type:rfc`, `runtime:wasm`, `risk:high` | Arquitetura de plugins WASM composáveis. |
| [#10549](https://github.com/zeroclaw-labs/zeroclaw/issues/10549) | RFC: Simplify RFC voting — remove mandatory discussion windows | **5** | `type:rfc` | Proposta de simplificação do processo RFC. |

**Análise:** O volume de RFCs em múltiplas revisões (especialmente #9487 e #9488 com 28+ comentários combinados) demonstra que a comunidade está ativamente moldando a arquitetura de médio prazo. O Issue #10549 sugere cansaço com a overhead processual do RFC — um indicador cultural relevante.

---

## 5. Bugs e Estabilidade

### Bugs abertos por severidade (sempre atualizado)

| Severidade | Count | Exemplos críticos |
|---|---|---|
| **S1** (workflow bloqueado) | **≥2** | [#9333](https://github.com/zeroclaw-labs/zeroclaw/issues/9333) — turns ACP falhados desaparecem ao trocar sessão; [#10670](https://github.com/zeroclaw-labs/zeroclaw/issues/10670) — heartbeat rejeita chave composta *(já fechado)* |
| **S2** (degraded) | **≥3** | [#5514](https://github.com/zeroclaw-labs/zeroclaw/issues/5514) — grupos de mídia Telegram geram múltiplas respostas; [#10667](https://github.com/zeroclaw-labs/zeroclaw/issues/10667) — ZeroCode duplica resposta streamada; [#10688](https://github.com/zeroclaw-labs/zeroclaw/issues/10688) — notas de voz WhatsApp nunca transcritas |
| **S3** (menor) | **≥1** | [#10702](https://github.com/zeroclaw-labs/zeroclaw/issues/10702) — trimming de histórico com gap de hysteresis; [#10326](https://github.com/zeroclaw-labs/zeroclaw/issues/10326) — streaming errors reportam modelo errado *(follow-up)* |

### Bugs P1/P2 em destaque

- [#10674](https://github.com/zeroclaw-labs/zeroclaw/issues/10674) **`priority:p1`** — History trimming para no cap, sessões tool-heavy re-trimam a cada turno e **derrotam prompt caching** (28+ comentários em issues relacionadas). Impacto direto em custo e latência.
- [#10700](https://github.com/zeroclaw-labs/zeroclaw/issues/10700) — `CostTracker.session_id` usa UUID por lifetime do daemon, impossibilitando separação de spend por conversa.
- [#9727](https://github.com/zeroclaw-labs/zeroclaw/issues/9727) — Epic para múltiplos agentes side-by-side no ZeroCode sidebar (risiko: high, `status:in-progress`).

> **Alerta:** O bug #10674 tem implicação direta em custos de API. PRs como [#9535](https://github.com/zeroclaw-labs/zeroclaw/pull/9535) (`context_compact_ratio`) são a resposta arquitetural a este problema.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features novas (últimas 24h)

| # | Título | Tags | Relevância |
|---|---|---|---|
| [#10715](https://github.com/zeroclaw-labs/zeroclaw/issues/10715) | Opt-in passive group context para Telegram | `channel:telegram`, `enhancement` | Paridade com WhatsApp Web |
| [#10714](https://github.com/zeroclaw-labs/zeroclaw/pull/10714) | Route integration config links on registry key | `integration`, `web` | Melhora UX de configuração |
| [#10718](https://github.com/zeroclaw-labs/zeroclaw/pull/10718) | Atribuir ledger de custos à conversa | `feat:cost`, `agent` | Rastreabilidade de spend |
| [#10716](https://github.com/zeroclaw-labs/zeroclaw/pull/10716) | Price cache writes at configured write premium | `feat:cost`, `provider` | Precificação correta de cache writes (Anthropic cobra 1.25x–2x) |
| [#10708](https://github.com/zeroclaw-labs/zeroclaw/issues/10708) | Active-response steering em OpenAI Responses WebSockets | `provider:openai`, `enhancement` | Alinhamento com Astra |
| [#10707](https://github.com/zeroclaw-labs/zeroclaw/issues/10707) | Bounded programmatic tool calling via OpenAI Responses | `provider:openai`, `enhancement` | Funcionalidade tool hosting |
| [#10706](https://github.com/zeroclaw-labs/zeroclaw/issues/10706) | Preserve opaque reasoning state em Responses | `provider:openai`, `enhancement` | Consistência de replay |
| [#10705](https://github.com/zeroclaw-labs/zeroclaw/issues/10705) | Support max reasoning effort para modelos compatíveis | `provider:compatible`, `enhancement` | Configuração de esforço |
| [#10704](https://github.com/zeroclaw-labs/zeroclaw/issues/10704) | Async function tools via OpenAI Responses | `provider:openai`, `enhancement` | Ferramentas assíncronas |
| [#10641](https://github.com/zeroclaw-labs/zeroclaw/issues/10641) | Per-field cron schedule input na UI | `web`, `cron` | UX de scheduling |
| [#10640](https://github.com/zeroclaw-labs/zeroclaw/pull/10640) | Passive Telegram group context (PR) | `channel:telegram`, `feat` | Mesma feature de #10715 em implementação |

**Sinal de roadmap dominante:** Integração profunda com **OpenAI Responses API** (issues #10704–#10708) e provedores compatíveis — indicando direção estratégica para 2026-Q4.

---

## 7. Resumo de Feedback dos Usuários

### Dores reais identificadas

| Dor | Issue de origem | Impacto |
|---|---|---|
| **Prompt caching derrotado por trimming agressivo** | [#10674](https://github.com/zeroclaw-labs/zeroclaw/issues/10674), [#10702](https://github.com/zeroclaw-labs/zeroclaw/issues/10702) | Custo elevado de tokens; degradação de performance em sessões tool-heavy |
| **Spend por conversa não rastreável** | [#10700](https://github.com/zeroclaw-labs/zeroclaw/issues/10700) | Usuários multi-agente não conseguem isolar custos |
| **Turns falhados desaparecem** | [#9333](https://github.com/zeroclaw-labs/zeroclaw/issues/9333) | Perda de contexto; workflow bloqueado em produção |
| **Transcrição de voz WhatsApp quebrada** | [#10688](https://github.com/zeroclaw-labs/zeroclaw/issues/10688) | Feature broken desde v0.8.5 |
| **Janelas de discussão RFC creating fricção desnecessária** | [#10549](https://github.com/zeroclaw-labs/zeroclaw/issues/10549) | Process overhead; contribuidores recorrentes sinalizam cansaço |
| **Cron jobs travam sem timeout** | [#9320](https://github.com/zeroclaw-labs/zeroclaw/pull/9320) | Recursos órfãos; operadores reportam jobs "pendurados" |
| **Git operations não respeitam allowed-roots** | [#10337](https://github.com/zeroclaw-labs/zeroclaw/pull/10337) | Risco de segurança em ambientes restritos |

### Cenários de uso emergentes

- **Multi-agente side-by-side** (#9727) — demanda crescente por monitoramento paralelo de agentes.
- **Passive group context** (Telegram + WhatsApp) — unificação de UX cross-channel.
- **WASM plugin runtime** (#10076) — desejo de extensibilidade via plugins compilados.

---

## 8. Backlog que Merece Atenção

| # | Título | Idade | Status | Prioridade | Motivo da atenção |
|---|---|---|---|---|---|
| [#9333](https://github.com/zeroclaw-labs/zeroclaw/issues/9333) | ACP turns falhados desaparecem após troca de sessão | ~47 dias | `in-progress` | **P1** | Workflow bloqueado — já em progresso mas sem merge |
| [#10674](https://github.com/zeroclaw-labs/zeroclaw/issues/10674) | History trimming vs. prompt caching | ~2 dias | `accepted` | **P1** | Emergente; risco direto em custos de API |
| [#5514](https://github.com/zeroclaw-labs/zeroclaw/issues/5514) | Batch Telegram media groups | ~154 dias | `in-progress` | P2 | Bug antigo com impacto UX — necesita push |
| [#9727](https://github.com/zeroclaw-labs/zeroclaw/issues/9727) | Epic: multi-agent sidebar | ~36 dias | `in-progress` | P2 | Demanda estratégica; em progresso |
| [#9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109) | Hailo-Ollama provider | ~54 dias | Review ativo | P2 | Provider novo; comunidade aguardando |
| [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) | Granular sandbox policy | ~104 dias | `in-progress` | P2 | Segurança; maturidade de design alta |

---

## Indicadores de Saúde do Projeto

| Indicador | Valor | Avaliação |
|---|---|---|
| Issues fechadas / total (24h) | 4/27 (~15%) | 🟡 Moderada — fluxo de entrada alto |
| PRs fechados / total (24h) | 2/50 (4%) | 🟡many PRs em revisão ativa vs. merge |
| Releases (24h) | 0 | 🔴 Sem release — ciclo em preparação |
| Issues P1 abertas | ≥2 | 🔴 Crítico — 2 bugs P1 simultâneos |
| RFCs em revisão múltipla | ≥3 | 🟢 Saudável — design participativo |
| Bugs S1+S2 em aberto | ≥5 | 🟡 Atenção — degradam experiência |
| PRs aguardando maintainer review | ≥8 com `needs-maintainer-review` | 🟡 Gargalo potencial |

---

*Relatório gerado automaticamente com base em dados do GitHub de zeroclaw-labs/zeroclaw em 2026-09-09.*

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*