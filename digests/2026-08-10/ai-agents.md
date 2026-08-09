# Resumo diário do ecossistema de agentes de IA 2026-08-10

> Issues: 0 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-08-09 20:25 UTC

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

**Data de referência:** 2026-08-10
**Projetos analisados:** NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw, ZeroClaw

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **dois níveis distintos de atividade** nesta semana. Hermes Agent e CoPaw lideram em volume absoluto com ~100 atualizações combinadas de issues e PRs por dia, evidenciando comunidades de alto engajamento. Os demais projetos ativos — NanoBot, PicoClaw, IronClaw e ZeroClaw — mantêm cadências sustentadas de 15 a 50 itens atualizados por período, com foco predominante em **estabilização e hardening**. Um padrão transversal é a atenção crescente à segurança (3 projetos com vulnerabilidades SSRF ou de autenticação ativas) e à interoperabilidade entre canais (Telegram, WeChat, Slack, Matrix). O projeto NullClaw permanece inativo, servindo como referência de estagnação no ecossistema.

---

## 2. Comparação de Atividade

| Projeto | Issues ativas | PRs atualizados (24h) | PRs fechados (24h) | Releases (24h) | Avaliação de saúde |
|---|:---:|:---:|:---:|:---:|:---|
| **NullClaw** | 0 | 0 | 0 | 0 | 🔴 Inativo |
| **NanoBot** | 4 | 15 | 4 | 0 | 🟢 Estável |
| **Hermes Agent** | 50 | 50 | 8 | 0 | 🟢 Estável |
| **PicoClaw** | 3 | 6 | 1 | 0 | 🟢 Estável |
| **IronClaw** | 21 | 24 | 7 | 0 | 🟡 Estabilização |
| **CoPaw** | 17 | 50 | 1 | 0 | 🟢 Estável |
| **ZeroClaw** | 50 | 50 | 0 | 0 | 🟡 Arquitetural |

**Observações:**
- **ZeroClaw** tem 50 PRs abertos sem nenhum merge no período — gargalo na fila de revisão.
- **CoPaw** abriu 49 PRs em 24h com apenas 1 merge — taxa de abertura 49:1, sinal de forte contribuição externa ainda não absorvida.
- **IronClaw** apresenta a pior proporção de bugs P1 (3 abertas), justificando seu status de "estabilização".

---

## 3. Posicionamento do Projeto Principal

*O "projeto principal" não é eindeutig — os dados sugerem dois polos de referência:*

### Hermes Agent (NousResearch) — Polo de pesquisa e integração

| Dimensão | Posição |
|---|---|
| **Comunidade** | Maior volume de issues (50) e PRs (50) entre pares |
| **Maturidade técnica** | 2 bugs P1 críticos — sessão e delivery de mensagens |
| **Destaque estratégico** | Skills verificados NVIDIA (RAG, cuOpt, CUDA-Q); multi-tenant em produção |
| **Débito técnico** | ~4 meses sem resposta em acessibilidade VoiceOver (#26689) |

### CoPaw (agentscope-ai) — Polo de contribuição massiva

| Dimensão | Posição |
|---|---|
| **Comunidade** | Maior taxa de PRs externos (49 abertos, 1 merged — ~2% de throughput) |
| **Destaque estratégico** | DeepSeek V4 1M tokens catalogado; ReMe memory system em evolução |
| **Foco declarado** | Mobilidade mobile, aprovações de IA, multi-agente |
| **Débito técnico** | Regressão ascend-vllm há 44 dias; antivirus bloqueando execução |

### Diferenciação técnica vs. pares

| Projeto | Diferenciação técnica |
|---|---|
| **NanoBot** | GitAgent Protocol (GAP), computer use nativo, observabilidade de tokens |
| **PicoClaw** | Bridge multi-canal genérico com hardening SSRF coordenado |
| **IronClaw** | Workflows e routines com PWA push notifications |
| **ZeroClaw** | Arquitetura multi-tenant com isolamento de agentes via knowledge graph |
| **Hermes** | Skills verificados, memória como provider plugin, MLOps integrado |
| **CoPaw** | Sistema ReMe de memória, reranker, modelos de 1M de contexto |

---

## 4. Focos Técnicos Compartilhados

Cinco necessidades emergem de forma transversal nos projetos:

### A) Segurança de infraestrutura de bridge
```
NanoBot    → bypass exec.allowPatterns (2 CVEs)
PicoClaw   → SSRF em 7 canais (WeChat, WeCom, QQ, Telegram, Discord, LINE, Slack)
ZeroClaw   → webhook handlers não fail-closed (S0), isolamento de agentes
Hermes     → patch cryptography + npm advisories (#82134)
CoPaw      → CIDR allowlist para hosts sem autent
```
**Conclusão:** O padrão de arquiteturas bridge (agente ↔ canais externos) é o principal vetor de superfície de ataque no ecossistema. A auditoria coordenada do PicoClaw (#3322, #3323, #3324) serve de modelo.

### B) Estabilidade de message delivery multi-canal
```
Hermes Agent → P1: cursor ▉ como entrega final no Telegram
IronClaw     → P2: progresso intermediário no lugar de resultado final
PicoClaw     → Bug de reconnect Matrix resolvido após 38 dias
NanoBot      → Polling Telegram travado (P2, recorrente)
```
**Conclusão:** A entrega confiável de mensagens em streaming é o problema operacional mais recorrente. IronClaw e Hermes têm bugs críticos independentes nesta área.

### C) Observabilidade e controle de custo
```
NanoBot  → Issue #5266: milhões de tokens consumidos sem logs (13 comentários)
ZeroClaw → PR #5299: API para registros estruturados de token usage
CoPaw    → End time display anomaly: tempo real vs. exibido diverge
```
**Conclusão:** O controle de custos de tokens é a principal queixa de usuários no NanoBot e tende a se espalhar para outros projetos conforme o uso em produção cresce.

### D) Compatibilidade Windows e Desktop
```
IronClaw   → Unicode paths, crashes, blank screens
CoPaw      → Antivirus bloqueando execução; regressão ascend-vllm
Hermes     → OIDC refresh rejeita id_token ausente; Krea test falha
ZeroClaw   → PowerShell como shell nativo em desenvolvimento (#9182)
NanoBot    → Weather workflow quebrado em Windows (#5303)
```
**Conclusão:** Todos os projetos enfrentam problemas Windows. A diversidade de runtime (Desktop, CLI, Docker) multiplica a superfície de bugs.

### E) Sessões e persistência de estado
```
Hermes Agent → P1: corrupção FTS em state.db; sessões órfãs
IronClaw     → P1: zombie threads com stream:true + tools[]
ZeroClaw     → S1: TOCTOU em shared_budget; TaskRecord como único owner
CoPaw        → Session fork feature em PR (#6704)
```
**Conclusão:** A gestão de ciclo de vida de sessões é arquiteturalmente imatura em todo o ecossistema — cada projeto implementa sua própria solução com bugs distintos.

---

## 5. Análise de Diferenciação

### Por público-alvo

| Projeto | Público primário | Público secundário |
|---|---|---|
| **Hermes Agent** | Pesquisadores, MLOps, usuários NVIDIA | Desenvolvedores multi-tenant |
| **CoPaw** | Desenvolvedores Qwen, ecossistema agentescope | Usuários mobile |
| **NanoBot** | Desenvolvedores de automação, interoperabilidade GAP | Usuários multi-canal (Telegram, WeChat) |
| **PicoClaw** | Operadores de bridges, infra de produção | Desenvolvedores de protocolo |
| **IronClaw** | Usuários finais de automação,，非技术用户 | Administradores Slack/Telegram |
| **ZeroClaw** | Deployments enterprise, multi-tenant | Desenvolvedores de runtime |

### Por arquitetura

| Abordagem | Projetos | Implicação |
|---|---|---|
| **Plugins/skills como extensão** | Hermes, IronClaw, NanoBot | Ecossistema externo diversificado, mas risco de conflito de versões |
| **Provider abstraction** | NanoBot (Responses), CoPaw (providers) | Padronização de capacidades entre modelos, reduz vendor lock-in |
| **Bridge genérico** | PicoClaw | Valor como middleware, mas menor controle sobre comportamento do agente |
| **Isolamento multi-tenant** | ZeroClaw | Arquitetura mais defensiva, projetada para ambiente compartilhado |
| **Memória como feature core** | CoPaw (ReMe), Hermes (GBrain), ZeroClaw | Convergência para memória persistente como primitivo essencial |

### Por stage de maturidade

```
NullClaw     → [██████████] Inativo / abandonado
PicoClaw     → [████████░░] Estável com hardening ativo
NanoBot      → [████████░░] Estável com features em evolução
CoPaw        → [███████░░░] Beta (2.1.0b2) com contribuições massivas
IronClaw     → [███████░░░] Estabilização pós-P1 críticos
ZeroClaw     → [███████░░░] Refatoração arquitetural (v0.8.4 bloqueada)
Hermes Agent → [████████░░] Maduro com dívida técnica em acessibilidade
```

---

## 6. Tração e Maturidade da Comunidade

### Velocidade de iteração

| Projeto | PRs fechados (7d equivalente) | Velocidade | Tendência |
|---|---|---|---|
| **CoPaw** | ~1/24h (taxa 2%) | Baixa | Absorção de contributions insuficiente |
| **ZeroClaw** | 0/24h | Estagnada | 50 PRs abertos sem merge — gargalo de review |
| **IronClaw** | 7/24h | Média-alta | Equilíbrio entre abertura e fechamento |
| **NanoBot** | 4/24h | Média | Ciclo saudável de review e merge |
| **Hermes Agent** | 8/24h | Alta | Equipe responde bem ao volume |
| **PicoClaw** | 1/24h | Baixa | Foco em qualidade, não velocidade |

### Qualidade de feedback

| Projeto | Detalhamento de bugs | Repr. rate | Sinais de maturidade |
|---|---|---|---|
| **IronClaw** | Alto — steps de repro detalhados, ambiente | 100% (#7400) | Bugs reportados com metodologia |
| **NanoBot** | Alto — logs, contextos, cenários | Alto (#5266) | Usuários técnicos engajados |
| **Hermes Agent** | Médio — screenshots e traces | Variável | Acessibilidade é ponto cego |
| **PicoClaw** | Alto — proof-of-concept de exploit | Crítico (#3203) | Comunidade de segurança ativa |
| **ZeroClaw** | Médio — RFCs estruturados, debates | N/A | Governança formalizada |
| **CoPaw** | Médio — reports visuais | Baixo | Duvidosos — antivirus blamed |

### Propostas estruturais (RFCs e design docs)

| Projeto | RFCs ativos | Engajamento |
|---|---|---|
| **ZeroClaw** | 8 RFCs com >10 comentários | Alto — governança é prioridade |
| **Hermes Agent** | Multi-tenant em produção | Maturidade de processo |
| **IronClaw** | v1.2.0 epics documentados | Planejamento claro |
| **NanoBot** | Roadmap implícito via PRs | Informal |

**Veredicto:** ZeroClaw e Hermes lideram em maturidade de governança. CoPaw tem volume de contribuição massivo mas baixa capacidade de absorção. IronClaw demonstra a melhor qualidade de reports de bugs.

---

## 7. Sinais de Tendência

### T1 — Convergência para computer use e automação desktop
```
NanoBot  → PR #4276: computer use nativo com browser tools (~60 dias)
IronClaw → PR #7392: substituição de coding tools pelo omp
```
O "computer use" — capacidade do agente de controlar interfaces gráficas — emerge como feature prioritária em múltiplos projetos independentemente, sinalizando demanda de mercado por automação de tarefas desktop.

### T2 — Interoperabilidade via protocolos abertos
```
NanoBot  → PR #4019: GitAgent Protocol (GAP)
ZeroClaw → RFC #6971: universal ingress policy
Hermes   → GBrain como memory provider plugin
```
A fragmentação atual do ecossistema estimula adoção de protocolos de interoperabilidade (GAP, A2A). O NanoBot avança mais rapidamente nesta frente.

### T3 — Security hardening como sprint recorrente
```
PicoClaw   → 3 PRs SSRF coordenados
NanoBot    → 2 CVEs allowPatterns
ZeroClaw   → S0 webhook handlers
Hermes     → Patches cryptography + npm
```
Os projetos estão investindo em auditorias de segurança de forma independente. A ausência de um framework de segurança compartilhado para bridges é uma oportunidade aberta.

### T4 — Multi-tenant como requisito enterprise
```
Hermes Agent → Issue #34352: multi-tenant em produção há meses
ZeroClaw     → PR #9745: isolamento per-agent no knowledge graph
ZeroClaw     → PR #9744: autenticação obrigatória em webhook ingress
```
A transição de agentes的单体部署 para ambientes compartilhados é visível em dois projetos distintos, indicando maturização do mercado para além do uso pessoal.

### T5 — Observabilidade como feature
```
NanoBot  → Logs granulares de consumo de tokens (#5266)
ZeroClaw → API de token usage (#5299)
CoPaw    → Completion time persistence (#6845)
```
O controle de custos de API é a principal dor reportada por usuários de produção. Projetos que não implementarem logging estruturado de tokens perderão adoção em ambientes corporativos.

### T6 — Mobile e UX como diferencial secundário
```
CoPaw    → Web console mobile adaptation (#6281)
IronClaw → PWA notifications (#7398)
NanoBot  → WebUI com status de API servers (#5255)
```
O mercado mobile-first ainda é subexplorado no ecossistema. A adaptação mobile do console web é uma feature request com 5 comentários no CoPaw e não tem paralelo claro em outros projetos.

---

## Síntese para Decisores

| Prioridade | Ação | Projetos relacionados |
|---|---|---|
| **Crítica** | Auditar superfície SSRF nos adaptadores de canal | NanoBot, PicoClaw, ZeroClaw |
| **Crítica** | Resolver zombie threads e sessões órfãs antes de release | IronClaw, Hermes Agent |
| **Alta** | Implementar logging de token usage como feature core | NanoBot, ZeroClaw |
| **Alta** | Expandir testes de reconnect em protocolos com long-polling | PicoClaw, NanoBot, Hermes |
| **Média** | Padronizar protocolo de interoperabilidade entre agentes | NanoBot, Hermes, ZeroClaw |
| **Média** | Priorizar acessibilidade VoiceOver | Hermes Agent |
| **Estratégica** | Explorar mercado mobile com console responsivo | CoPaw, IronClaw |

**Recomendação geral:** O ecossistema demonstra saúde funcional com

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-08-10

---

## 1. Panorama do Dia

O NanoBot apresenta alta atividade comunitária em 10 de agosto de 2026, com 4 issues abertas e 15 PRs atualizados nas últimas 24h. A equipe de desenvolvimento está focada em correções de segurança críticas (2 vulnerabilidades relacionadas ao bypass do `exec.allowPatterns`), melhorias na estabilidade de integrações (Telegram, WeChat) e expansão de funcionalidades (plugins, APIs). Não houve lançamentos oficiais hoje, mas 4 PRs foram fechados com contribuições relevantes. O projeto demonstra saúde operacional com manutenção ativa de múltiplas frentes simultâneas.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24h.**

O projeto não publicou novas versões desde o último período reportado. Recomenda-se monitorar os PRs em estágio avançado de revisão (como #5299 e #5307) que podem compor uma próxima release.

---

## 3. Progresso do Projeto

Quatro Pull Requests foram fechados hoje, representando avanços significativos:

| PR | Autor | Tipo | Impacto |
|----|-------|------|---------|
| [#5307](https://github.com/HKUDS/nanobot/pull/5307) | Mubelotix | Documentation | Restaurou o gráfico Star History no repositório, melhorando a visibilidade do projeto |
| [#5308](https://github.com/HKUDS/nanobot/pull/5308) | chengyongru | CI/CD, Testing | Reforçou cobertura de testes em caminhos de usuário, adicionou reporte V8 e gates CI |
| [#5304](https://github.com/HKUDS/nanobot/pull/5304) | chengyongru | Bug, Documentation | Explicou exigência HTTPS para input de voz no WebUI |
| [#4019](https://github.com/HKUDS/nanobot/pull/4019) | shreyas-lyzr | Feature | Adicionou suporte ao GitAgent Protocol |

**Destaque:** O PR #4019 traz integração com o padrão GitAgent Protocol (GAP), posicionando o NanoBot como agente portável e interoperável dentro do ecossistema open source de agentes IA.

---

## 4. Temas Quentes da Comunidade

As issues com maior engajamento hoje são de **segurança e usabilidade**:

### Issue #5266 — Consumo Excessivo de Tokens
- **Autor:** knoppix2
- **Comentários:** 13
- **Problema:** NanoBot consome milhões de tokens em poucas horas sem atividade perceptível
- **Demanda:** Logs granulares de consumo por chamada API
- **Link:** [HKUDS/nanobot#5266](https://github.com/HKUDS/nanobot/issues/5266)

### Issue #5295 — Falha de Permissão com Docker Compose
- **Autor:** Bennett-Yang
- **Comentários:** 5
- **Problema:** `Permission denied` ao executar entrypoint.sh no container
- **Demanda:** Correção da documentação ou do script de deployment
- **Link:** [HKUDS/nanobot#5295](https://github.com/HKUDS/nanobot/issues/5295)

### Issues de Segurança #5305 e #5306
Ambas reportadas por YLChen-007 com severidade alta, documentando bypass do `allowPatterns` na ferramenta `exec`. Estas issues estão sendo monitoradas e indicam necessidade de patch urgente.

---

## 5. Bugs e Estabilidade

### Bugs Abertos (4 issues)

| Severidade | Issue | Descrição | Link |
|------------|-------|-----------|------|
| **Alta** | #5306 | Bypass de segurança em `exec.allowPatterns` | [Link](https://github.com/HKUDS/nanobot/issues/5306) |
| **Alta** | #5305 | Bypass via API OpenAI-compatible | [Link](https://github.com/HKUDS/nanobot/issues/5305) |
| **Média** | #5295 | Docker compose permission denied | [Link](https://github.com/HKUDS/nanobot/issues/5295) |
| **Média** | #5266 | Consumo excessivo de tokens (sem logs) | [Link](https://github.com/HKUDS/nanobot/issues/5266) |

### Correções Em Progresso (PRs abertos)

| PR | Descrição | Prioridade |
|----|-----------|------------|
| #5156 | Recuperação de polling Telegram travado | P2 |
| #5302 | Previne chamadas de ferramentas indisponíveis durante Dream | P2 |
| #5301 | Logging e detecção de polling Telegram travado | P2 |

**Análise:** A estabilidade do Telegram polling é uma área com problemas recorrentes (#5156 relacionado a #5171), indicando necessidade de solução definitiva.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em Desenvolvimento

| PR | Descrição | Sinais de Roadmap |
|----|-----------|-------------------|
| [#4276](https://github.com/HKUDS/nanobot/pull/4276) | Computer use nativo com browser tools | Expansão de automação desktop/browser |
| [#5204](https://github.com/HKUDS/nanobot/pull/5204) | Refatoração de providers com Responses capabilities | Padronização de capacidades declarativas |
| [#5288](https://github.com/HKUDS/nanobot/pull/5288) | Integração Agent Plugins com CLI Apps | Ecossistema de plugins portáteis |
| [#5299](https://github.com/HKUDS/nanobot/pull/5299) | API para registros estruturados de token usage | Observabilidade e diagnóstico |
| [#5255](https://github.com/HKUDS/nanobot/pull/5255) | Status real de API servers externos | Melhoria na WebUI |

### Novas Features (hoje)

- **#5310** — Honor forced QR login no WeChat
- **#5309** — Permite skills do marketplace sombrearem builtins
- **#5303** — Weather workflow Windows-safe

**Tendências identificadas:**
1. Expansão de ferramentas de automação (computer use, browser)
2. Padronização de ecossistema de plugins
3. Melhoria em observabilidade (token usage, logs)
4. Suporte multiplataforma (Windows, desktop)

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Problema | Impacto | Evidência |
|----------|---------|-----------|
| **Custo de tokens invisível** | Alto — usuários perdem controle financeiro | #5266 (13 comentários) |
| **Deployment Docker problemático** | Médio — barreiras para novos adotantes | #5295 |
| **Polling Telegram instável** | Médio — produção afetada | #5156, #5171 |
| **Compatibilidade Windows** | Baixo-Médio — skills quebram | #5303 |

### Cenários de Uso Emergent

1. **Agente de automação desktop** — Demanda por computer use nativo (#4276)
2. **Deploymentself-hosted** — Necessidade de文档 clara e robusta
3. **Multi-canal** — WeChat, Telegram, canais diversos (#5310, #5301)
4. **Interoperabilidade** — Protocolos como GitAgent (#4019)

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta > 7 dias

| Issue | Idade | Prioridade | Link |
|-------|-------|------------|------|
| #5266 | 4 dias | Alta | [Link](https://github.com/HKUDS/nanobot/issues/5266) |
| #5295 | 2 dias | Alta | [Link](https://github.com/HKUDS/nanobot/issues/5295) |
| #4276 | ~60 dias | Alta | [Link](https://github.com/HKUDS/nanobot/pull/4276) |

### PRs Antigos com Conflitos

| PR | Status | Idade | Link |
|----|--------|-------|------|
| #4276 | Conflitos + enhancement | ~60 dias | [Link](https://github.com/HKUDS/nanobot/pull/4276) |
| #5255 | Conflitos + draft | ~5 dias | [Link](https://github.com/HKUDS/nanobot/pull/5255) |

**Recomendação:** O PR #4276 (computer use) está em aberto há ~60 dias com conflitos. É necessário resolução de merge ou decisão de archivar para clareza do roadmap.

---

## Métricas Resumidas (24h)

| Indicador | Valor |
|-----------|-------|
| Issues abertas/ativas | 4 |
| PRs abertos | 11 |
| PRs fechados | 4 |
| Releases | 0 |
| Issues de segurança | 2 |
| Comentários totais | 18+ |
| Autores ativos | 10+ |

---

*Relatório gerado automaticamente com base em dados do GitHub — HKUDS/nanobot*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent
## Data: 2026-08-10

---

## 1. Panorama do Dia

O Hermes Agent manteve um ritmo de atividade intenso nas últimas 24 horas, com 50 issues e 50 PRs atualizados, embora nenhuma release tenha sido publicada. O projeto está em uma fase de estabilização активна, com foco em correções de bugs críticos relacionados a sessões, message delivery e segurança. A comunidade demonstrou particular interesse em problemas de multi-tenant, acessibilidade e integrações com plataformas (Telegram, Feishu, Slack). Diversos PRs de alta prioridade foram abertos hoje abordando vulnerabilidades de segurança e bugs de estabilidade, indicando um sprint ativo de manutenção.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

O projeto não registrou novas versões. Os usuários devem consultar o histórico de releases anteriores para a versão estável mais recente.

---

## 3. Progresso do Projeto

### PRs Fechados/Merged

| PR | Descrição | Impacto |
|----|-----------|--------|
| [#29969](https://github.com/NousResearch/hermes-agent/pull/29969) | Adição de skills NVIDIA verificados (RAG, cuOpt, CUDA-Q) para MLOps | Expansão do ecossistema de skills para usuários NVIDIA |
| [#82671](https://github.com/NousResearch/hermes-agent/pull/82671) | Adição da ferramenta ast_search symbol navigator | Navegação estruturada de código AST sem despejo de arquivos grandes |
| [#51155](https://github.com/NousResearch/hermes-agent/pull/51155) | Correção: personalidades não persistiam entre sessões | Estabilidade da experiência de configuração de personalidade |
| [#73565](https://github.com/NousResearch/hermes-agent/pull/73565) | Correção: display.personality não aplicava automaticamente em novas sessões | Usabilidade do desktop app |

### PRs Abertos de Alto Impacto

| PR | Descrição | Status |
|----|-----------|--------|
| [#82134](https://github.com/NousResearch/hermes-agent/pull/82134) | **fix(sec): patch cryptography e npm advisories** — Remove vulnerabilidades no venv Python e workspaces npm | Aberto |
| [#82665](https://github.com/NousResearch/hermes-agent/pull/82665) | **fix(state): recover gateway sessions stranded** — Recuperação de sessões órfãs sem identidade de roteamento | Aberto, P1 |
| [#82592](https://github.com/NousResearch/hermes-agent/pull/82592) | **fix(gateway,relay): stop frozen-preview finals** — Corrige perda de delivery em relay e callbacks de sessão idle | Aberto, P2 |
| [#82693](https://github.com/NousResearch/hermes-agent/pull/82693) | **fix(conversation_loop): honor classified.should_fallback** — Respeita decisão de fallback antes de tentar failover | Aberto, P2 |
| [#82675](https://github.com/NousResearch/hermes-agent/pull/82675) | **fix(cron): revalidate persisted job** — Evita execução de jobs deletados/pausados | Aberto, P2 |
| [#82653](https://github.com/NousResearch/hermes-agent/pull/82653) | **fix(approval): default dangerous command prompts to deny** — Melhora segurança de comandos perigosos | Aberto, P2 |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

**#34352 — [type/feature] Solving the Multi-Tenant Hermes Problem** 🏆
- **Comentários:** 18 | **👍:** 2
- **Link:** [Issue #34352](https://github.com/NousResearch/hermes-agent/issues/34352)
- **Análise:** Esta é a issue mais comentada do período. O problema central é que operações de memória ignoram o sistema de hooks, impossibilitando isolamento de tenants sem fork do core. A equipe reportou que uma correção já está em produção há meses, sugerindo que um PR de merge pode estar próximo. **Sinal forte de roadmap para multi-tenant.**

**#26689 — [type/feature] Accessibility improvements for blind VoiceOver users**
- **Comentários:** 12 | **👍:** 1
- **Link:** [Issue #26689](https://github.com/NousResearch/hermes-agent/issues/26689)
- **Análise:** Usuário deficiente visual reporta que a UX atual é "muito difícil para screen-reader users". O backend poderoso do Hermes contrasta com uma experiência de acessibilidade deficiente. Demanda legítima de inclusão.

**#46253 — [type/feature] GBrain as memory provider plugin**
- **Comentários:** 5 | **👍:** 6
- **Link:** [Issue #46253](https://github.com/NousResearch/hermes-agent/issues/46253)
- **Análise:** A feature request com mais reações positivas (6 👍). GBrain é um backend de memória semântica (Postgres + busca vetorial) que não integra com o pipeline `memory` do Hermes. Correlaciona-se com PR #82649 (memory provider support) aberto hoje.

---

## 5. Bugs e Estabilidade

### Criticidade P1 (Crítico)

| Issue | Descrição | Link |
|-------|-----------|------|
| #82656 | Gateway suprime envio final em stream interrompido — cursor ▉ fica como única entrega no Telegram | [Link](https://github.com/NousResearch/hermes-agent/issues/82656) |
| #82616 | Continuidade de sessão quebra sob corrupção FTS do state.db — sessão órfã + resume staleness | [Link](https://github.com/NousResearch/hermes-agent/issues/82616) |

### Criticidade P2 (Alto)

| Issue | Descrição | Link |
|-------|-----------|------|
| #77927 | lifecycle_guard: scripts com padding NUL burlam scan (regressão de #76762) | [Link](https://github.com/NousResearch/hermes-agent/issues/77927) |
| #69912 | Desktop/CLI divergem em configurações OpenAI-compatible proxy (Windows) | [Link](https://github.com/NousResearch/hermes-agent/issues/69912) |
| #72275 | video_analyze envia base64 raw que provedores rejeitam com 400 | [Link](https://github.com/NousResearch/hermes-agent/issues/72275) |
| #75692 | PermissionError ao hermes fazer chown em diretório home | [Link](https://github.com/NousResearch/hermes-agent/issues/75692) |
| #75694 | Hermes compromete permissão do computador após setup SFTP | [Link](https://github.com/NousResearch/hermes-agent/issues/75694) |
| #82679 | Desktop app não se recupera de conexão SSH dropada | [Link](https://github.com/NousResearch/hermes-agent/issues/82679) |
| #82688 | ClassifiedError.should_fallback calculado em todo lugar mas nunca lido | [Link](https://github.com/NousResearch/hermes-agent/issues/82688) |

### Criticidade P3 (Médio)

| Issue | Descrição | Link |
|-------|-----------|------|
| #45403 | Desktop crash com 'tapClientLookup: Index out of bounds' | [Link](https://github.com/NousResearch/hermes-agent/issues/45403) |
| #78050 | A2A client tools invisíveis no CLI/TUI | [Link](https://github.com/NousResearch/hermes-agent/issues/78050) |
| #78514 | Feishu multiplex mode: dedup por perfil causa replay de eventos | [Link](https://github.com/NousResearch/hermes-agent/issues/78514) |
| #77253 | Desktop: code blocks sem language tag não renderizam | [Link](https://github.com/NousResearch/hermes-agent/issues/77253) |
| #70779 | Instalação falha no Windows com caracteres Unicode no path do usuário | [Link](https://github.com/NousResearch/hermes-agent/issues/70779) |
| #82674 | OIDC self-hosted refresh rejeita id_token ausente como "provider unreachable" | [Link](https://github.com/NousResearch/hermes-agent/issues/82674) |
| #82683 | Krea image provider test falha no Windows | [Link](https://github.com/NousResearch/hermes-agent/issues/82683) |

**Análise:** O projeto apresenta um cluster de bugs relacionados a **estabilidade de sessão** e **message delivery** (4 issues com tags `sweeper:risk-session-state` e `sweeper:risk-message-delivery`). A abordagem atual com swepers (robôs de risco) indica monitoramento automatizado de áreas críticas.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Propostas

| Issue | Descrição | Comentários | Link |
|-------|-----------|-------------|------|
| #21877 | Kanban board ownership: substituir estado global por profile defaults | 2 | [Link](https://github.com/NousResearch/hermes-agent/issues/21877) |
| #54818 | Kanban: colunas customizáveis e workflow por board | 1 | [Link](https://github.com/NousResearch/hermes-agent/issues/54818) |
| #46253 | GBrain como memory provider plugin | 5 | [Link](https://github.com/NousResearch/hermes-agent/issues/46253) |

### PRs de Feature em Desenvolvimento

| PR | Descrição | Link |
|----|-----------|------|
| #82691 | feat(tools): add project_context tool para auto-evolução de HERMES.md | [Link](https://github.com/NousResearch/hermes-agent/pull/82691) |
| #82692 | feat(delegation): per-task model override + per-model reasoning | [Link](https://github.com/NousResearch/hermes-agent/pull/82692) |
| #82695 | feat(tools): add ast_search symbol navigator | [Link](https://github.com/NousResearch/hermes-agent/pull/82695) |
| #82677 | feat(approvals): add one-shot plugin action decisions (Slack) | [Link](https://github.com/NousResearch/hermes-agent/pull/82677) |

**Sinais de Roadmap:**
- **Multi-tenant support** (Issue #34352) — Prioridade alta da comunidade, correção em produção
- **Memory provider ecosystem** — GBrain integration + standalone providers (PR #82649)
- **Project context tools** — Auto-evolução de documentos de especificação
- **Delegation enhancements** — Model overrides por task

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Categoria | Problema | Severidade |
|-----------|----------|------------|
| **Estabilidade de Desktop** | App crasha com "Index out of bounds", blank screen, problemas com Python paths Unicode | Alta |
| **Sessões** | Reset automático descarta contexto, sessões órfãs sob corrupção DB | Crítica |
| **Message Delivery** | Telegram: cursor de streaming fica como mensagem final; Feishu: replays processados duplamente | Alta |
| **Integração Local** | LM Studio JIT quebra MoA mode; OpenAI-compatible proxies com configurações divergentes | Alta |
| **Acessibilidade** | Usuários de screen reader (VoiceOver) enfrentam UX hostil | Média-Alta |

### Cenários de Uso Mencionados

- **Multiplayer agentic AI**: Usuários avançados pedindo isolamento de tenants
- **MLOps com NVIDIA**: Demanda por skills RAG, cuOpt, CUDA-Q (já implementado em PR #29969)
- **Usuários Deficientes Visuais**: Necessidade de acessibilidade no desktop app
- **Desenvolvedores Locais**: Integração com LM Studio, proxies OpenAI-compatible

### Satisfação/Insatisfação

**Positivo:**
- Backend poderoso e ecossistema de agentes (reconhecido pelo próprio usuário de acessibilidade)
- Skills verificados para tecnologias específicas (NVIDIA)
- Correções ativas para problemas de estabilidade

**Negativo:**
- Desktop app instável em diversos cenários (crashes, blank screens, Unicode paths)
- Configurações não persistem entre sessões
- Integração com plataformas (Telegram, Feishu) apresenta problemas de message delivery

---

## 8. Backlog que Merece Atenção

### Issues Antigas com Atividade Recente (Potencial Dívida Técnica)

| Issue | Idade | Comentários | Descrição | Link |
|-------|-------|-------------|-----------|------|
| #26689 | ~3 meses | 12 | Accessibility VoiceOver — demanda de inclusão sem resposta há meses | [Link](https://github.com/NousResearch/hermes-agent/issues/26689) |
| #21877 | ~3 meses | 2 | Kanban board ownership — refatoração de estado global pendente | [Link](https://github.com/NousResearch/hermes-agent/issues/21877) |
| #12857 | ~4 meses | 7 | Auto-reset discards context — bug P2 closed hoje, mas problema antigo | [Link](https://github.com/NousResearch/hermes-agent/issues/12857) |
| #54818 | ~1.5 meses | 1 | Kanban customizable columns — feature request com baixa atenção | [Link](https://github.com/NousResearch/hermes-agent/issues/54818) |

### Issues Sem Resposta ou sem Atribuição

| Issue | Descrição | Link |
|-------|-----------|------|
| #82687 | Telegram bridge send fails with missing registry import | [Link](https://github.com/NousResearch/hermes-agent/issues/82687) |
| #82683 | Krea image provider test fails on Windows | [Link](https://github.com/NousResearch/hermes-agent/issues/82683) |
| #82648 | Simplex unconditional structured send rejects display-name DMs | [Link](https://github.com/NousResearch/hermes-agent/issues/82648) |

---

## Métricas Resumidas do Dia

| Métrica | Valor |
|---------|-------|
| Issues ativas | 46 |
| Issues fechadas | 4 |
| PRs abertos | 42 |
| PRs merged/fechados | 8 |
| Novas releases | 0 |
| Bugs P1 | 2 |
| Bugs P2 | 7 |
| Bugs P3 | 12 |
| Features Requests | 5 |
| PRs de Segurança | 1 (#82134) |

---

**Saúde Geral do Projeto:** O Hermes Agent demonstra atividade intensa com foco

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório de Projeto — PicoClaw
**Data de referência:** 2026-08-10
**Repositório:** [sipeed/picoclaw](https://github.com/sipeed/picoclaw)

---

## 1. Panorama do dia

O projeto PicoClaw demonstra **alta atividade de manutenção** na data de hoje, com 6 PRs atualizados e 3 issues no período de 24h. A atividade concentra-se em **duas frentes principais**: (i) correções de segurança relacionadas a SSRF (Server-Side Request Forgery) em múltiplos adaptadores de canal (WeChat, WeCom, Telegram, Discord, QQ, Slack, LINE), com 3 PRs independentes do mesmo autor abordando vetores similares; e (ii) melhorias de renderização de conteúdo rico para Telegram, que já gerou tanto uma issue (#3325) quanto um PR paralelo (#3327). Nenhum novo release foi publicado, e a issue de bug crítico sobre o loop de sync do Matrix (#3203) foi fechada — sinalizando resolução de um problema de estabilidade conhecido. O volume de atividade sugere uma fase ativa de endurecimento de segurança e refinamento UX, com boa receptividade da comunidade a correções pontuais.

---

## 2. Lançamentos

**Nenhum novo release nas últimas 24h.**

O projeto encontra-se em um período de pré-release, com múltiplas correções acumuladas (especialmente as de SSRF) que provavelmente serão consolidadas em uma versão futura. Não há informações de quebra de compatibilidade ou notas de migração pendentes no horizonte imediato.

---

## 3. Progresso do projeto

### PRs relevantes fechados/merged hoje

| # | Título | Impacto | Link |
|---|--------|---------|------|
| #3326 | `fix(web): remove duplicate pnpm lock entries` | **Bloqueante de CI** — Remove entries duplicados que impediam `pnpm install --frozen-lockfile`. Merge imediato. | [#3326](https://github.com/sipeed/picoclaw/pull/3326) |

### PRs abertos de destaque

| # | Título | Impacto | Link |
|---|--------|---------|------|
| #3322 | `fix(channels): block private targets on inbound media downloads` | **SSRF — Alta severidade.** Aplica `BlockPrivateTargets` a 7 adaptadores (QQ, Telegram, Discord, LINE, Slack e generic channels) que não utilizavam verificação de alvos privados em downloads de mídia. Consolida a mitigação já aplicada a OneBot. | [#3322](https://github.com/sipeed/picoclaw/pull/3322) |
| #3324 | `fix(weixin): use CreateSafeHTTPClient for media downloads` | **SSRF — WeChat.** Substitui `iLink HttpClient` plain por `CreateSafeHTTPClient` + `ValidateSafeHTTPURL` para downloads de mídia, impedindo redirects para loopback/hosts privados. | [#3324](https://github.com/sipeed/picoclaw/pull/3324) |
| #3323 | `fix(wecom): use CreateSafeHTTPClient for media downloads` | **SSRF — WeCom.** Mesmo hardening do #3324 para o canal WeCom. | [#3323](https://github.com/sipeed/picoclaw/pull/3323) |
| #3327 | `feat(telegram): render tables with native rich messages` | **UX — Telegram.** Detecta tabelas GFM e `<table>` HTML e renderiza via Bot API native rich messages em vez de code blocks monoespaçados. Alinha com issue #3325. | [#3327](https://github.com/sipeed/picoclaw/pull/3327) |
| #3222 | `refactor(deltachat): cleanup implementation, documentation -200LOC` | **Manutenção — DeltaChat.** Remove features legadas, hardcoded lists e autenticação por senha; renomeia `invite_link` → `join_invite_link`; adiciona seção de documentação completa. Redução de ~200 LOC. | [#3222](https://github.com/sipeed/picoclaw/pull/3222) |

**Análise:** A sprint de hoje é marcada por um **esforço coordenado de hardening de segurança em canais**, com 3 PRs do autor SashaMIT tratando do mesmo tema (SSRF em mídia) de forma independente por canal. Isso sugere que uma auditoria de segurança interna está em curso. O PR #3222 (DeltaChat refactor) permanece aberto desde 2026-07-03, indicando complexidade ou necessidade de revisão adicional.

---

## 4. Temas quentes da comunidade

### Issues com maior engajamento

| # | Título | Comentários | 👍 | Link |
|---|--------|-------------|----|------|
| #3203 | Matrix sync loop has no reconnection logic — silent death | **8** | **2** | [#3203](https://github.com/sipeed/picoclaw/issues/3203) |
| #3287 | Better support long messages in IRC | **4** | 0 | [#3287](https://github.com/sipeed/picoclaw/issues/3287) |

### Análise das demandas

**#3203 — Matrix sync loop (já fechada):** Com 8 comentários, foi a issue com maior engajamento da comunidade no período recente. O bug descrevia um cenário grave: o loop de long-polling `/sync` do Matrix morre silenciosamente após qualquer interrupção de rede ou reinício do homeserver, sem re-conexão automática. Como o processo principal permanece ativo, nem `systemd Restart=on-failure` é disparado — resultando em um bridge funcionalmente morto sem qualquer sinal de erro. A fechamento indica que uma solução foi implementada, embora não haja PR visível nos dados de 24h (provavelmente mergeado antes do período). **Severidade:** alta para infraestruturas de produção.

**#3287 — Long messages no IRC:** Issue com 4 comentários debate a necessidade de o PicoClaw tratar mensagens longas divididas pelo IRCv3 (512 bytes limite) como unidades coerentes, em vez de treat each fragment como mensagens independentes. O contexto é técnico: clientes IRC dividem automaticamente mensagens longas, e o receptor precisa reagrupá-las. A discussão ativa sugere que múltiplos contribuidores estão envolvidos na definição da solução.

---

## 5. Bugs e estabilidade

### Issue de bug (fechada)
| # | Título | Severidade | Status | Link |
|---|--------|------------|--------|------|
| #3203 | Matrix sync loop — silent death after network disruption | **🔴 Alta** | ✅ Fechada | [#3203](https://github.com/sipeed/picoclaw/issues/3203) |

**Detalhe:** O bug de reconnect do Matrix (#3203) representa um failure mode crítico em ambientes de produção: o processo não morre, então monitoramento baseado em exit code não detecta o problema. A issue foi aberta em 2026-07-02 e fechada em 2026-08-09 (~38 dias de ciclo), indicando que a correção exigiu desenvolvimento significativo.

### PRs de segurança
Os PRs #3322, #3324 e #3323 abordam **vulnerabilidades de SSRF** em downloads de mídia:

- O vetor: URLs de mídia manipuladas podem redirecionar para endereços privados (loopback `127.0.0.1`, link-local, RFC1918).
- Os canais afetados: WeChat, WeCom, QQ, Telegram, Discord, LINE, Slack e canais genéricos.
- Mitigação: uso de `CreateSafeHTTPClient` com `ValidateSafeHTTPURL` e flag `BlockPrivateTargets` em todas as operações de mídia.
- **Severidade:** ⬆️ Média-alta — explorável remotamente via mensagens manipuladas.

---

## 6. Pedidos de features e sinais de roadmap

### Novas features abertas

| # | Título | Contexto | Link |
|---|--------|----------|------|
| #3325 | Render Telegram tables with rich messages | Telegram Bot API 10.1 introduziu UI nativa de tabelas. PicoClaw atualmente degrada tabelas GFM para código monoespaçado. Feature solicitada com implementação já em PR (#3327). | [#3325](https://github.com/sipeed/picoclaw/issues/3325) |
| #3287 | Better support long messages in IRC | Tratamento de mensagens >512 bytes divididas pelo IRCv3 como unidades lógicas únicas. | [#3287](https://github.com/sipeed/picoclaw/issues/3287) |

### Sinais de roadmap

1. **Suporte a conteúdo rico multi-canal:** Telegram tables (#3325/#3327) é a feature mais próxima de merge. Indica tendência de priorização de renderização rica em canais que suportam UI avançada.
2. **Segurança de rede:** O esforço coordenado de SSRF hardening (#3322, #3324, #3323) sinaliza uma iniciativa de segurança ativa — provavelmente motivada por auditoria ou relato externo.
3. **Modernização de adaptadores:** O refactor do DeltaChat (#3222) — removal de autenticação por senha, atualização de listas hardcoded, documentação — sugere modernização da base de código em adaptadores legados.
4. **Resiliência de conexões:** A resolução do bug de Matrix (#3203) pode indicar que reconnection logic será expandida para outros protocolos com long-polling.

---

## 7. Resumo de feedback dos usuários

### Dores reportadas

| Dor | Origem | Severidade |
|-----|--------|------------|
| **Bridge Matrix funciona mal após interrupções de rede** | #3203 — relato de produção com homeserver restart | 🔴 Alta — downtime não detectado |
| **Tabelas no Telegram renderizam como texto plano** | #3325 — UX degradada em canais com suporte a rich UI | 🟡 Média — frustração visual |
| **Mensagens longas no IRC são fragmentadas** | #3287 — quebra de contexto em conversas técnicas | 🟡 Média — limitação técnica do protocolo |

### Análise de satisfação

O engajamento na issue #3203 (8 comentários) indica que **múltiplos usuários enfrentam o problema de reconnect do Matrix em produção**, e a resolução foi aguardada. A existência simultânea de issue e PR para Telegram tables (#3325 e #3327) demonstra **alinhamento entre demanda da comunidade e trabalho em andamento**, sinal de saúde no ciclo de feature. O silêncio em #3325 (0 comentários) sugere que é uma feature específica, não uma dor generalizada.

---

## 8. Backlog que merece atenção

| # | Título | Idade | Motivo da atenção | Link |
|---|--------|-------|-------------------|------|
| #3222 | refactor(deltachat): cleanup —200LOC | **~38 dias** | PR grande (-200 LOC) em aberto há mais de um mês; remove autenticação por senha (breaking change potencial) e precisa de revisão cuidadosa de segurança. | [#3222](https://github.com/sipeed/picoclaw/pull/3222) |
| #3287 | Better support long messages in IRC | **~19 dias** | Feature com 4 comentários, indicando discussão ativa mas sem movimento. Se a implementação for complexa (stateful reassembly), pode exigir design decision que precisa de decisão dos mantenedores. | [#3287](https://github.com/sipeed/picoclaw/issues/3287) |
| #3203 | Matrix sync loop | ✅ **Resolvida** | Fechada mas merece monitoramente: verificar se a correção foi released e se não há regressões em outros protocolos com long-polling. | [#3203](https://github.com/sipeed/picoclaw/issues/3203) |

---

## Indicadores de Saúde do Projeto

| Indicador | Valor | Observação |
|-----------|-------|------------|
| 🔄 Atividade (PRs 24h) | **6** | Acima da média para projetos de porte similar |
| 🐛 Issues abertas | **2** | Volume controlado |
| ✅ Issue resolvida | **1** | Bug crítico de Matrix fechado |
| 🔒 SSRF patches | **3** | Auditoria de segurança ativa |
| ⚠️ Backlog antigo | **1** | PR #3222 (DeltaChat) precisa de atenção |
| 📦 Releases | **0** | Nenhuma release pendente |

**Veredicto geral:** O projeto está em **bom estado de saúde**, com atividade moderada-alta focada em segurança e UX. A resolução do bug de Matrix demonstra capacidade de resposta a problemas críticos, e o esforço coordenado de SSRF hardening indica maturidade em práticas de segurança. O backlog de features (IRC, Telegram tables) está bem acompanhado. O principal ponto de atenção é o PR #3222 do DeltaChat, que permanece aberto há quase 40 dias com mudanças estruturais.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-08-10

---

## 1. Panorama do Dia

O projeto IronClaw apresenta alta atividade de manutenção corretiva e evolutiva. Nas últimas 24 horas, foram registradas **21 issues** e **24 PRs**, indicando uma cadência intensa de desenvolvimento. A equipe está focada em resolver bugs críticos de estabilidade (como threads zumbis e falhas de autenticação no Slack) enquanto avança em funcionalidades de entrega de notificações via web-push e previews progressivos para canais. Não houve lançamentos de novas versões hoje, sinalizando que o time prioriza estabilização antes de novos releases.

---

## 2. Lançamentos

**Nenhum release nas últimas 24 horas.**

O projeto não publicou novas versões estável ou RC desde o período analisado. O último release mencionado nos dados é o **ironclaw 1.1.0 (stable)**, referenciado na issue #7400 como afetado por um bug crítico de threads zumbis. A ausência de releases sugere que a equipe aguarda consolidação das correções em andamento antes de publicar.

---

## 3. Progresso do Projeto

### PRs Mergeadas/Fechadas (7 total)

| # | Título | Impacto | Link |
|---|--------|---------|------|
| #7229 | test: harden attachment and scheduled delivery coverage | Aumenta cobertura de testes para anexos e entrega agendada via Telegram/Slack | [Ver PR](https://github.com/nearai/ironclaw/pull/7229) |
| #6413 | Enforce completed model response barrier | Impede loops de recuperação após texto parcial visível externamente — melhoria crítica de estabilidade | [Ver PR](https://github.com/nearai/ironclaw/pull/6413) |
| #7323 | ci(nightly): grant actions: read to reborn-tests call contract | Corrige falha de CI que causava zero-job startup_failure há 5 noites | [Ver PR](https://github.com/nearai/ironclaw/pull/7323) |
| #6033 | fix(reborn): allow installed-local MCP over loopback HTTP | Libera MCP local via HTTP apenas em loopback IPv4 — melhoria de compatibilidade | [Ver PR](https://github.com/nearai/ironclaw/pull/6033) |
| #7399 | chore(agents): refresh codebase knowledge graph | Atualiza snapshot do grafo de conhecimento do codebase via workflow noturno | [Ver PR](https://github.com/nearai/ironclaw/pull/7399) |
| #7022 | chore(deps): bump actions group (2 updates) | Atualiza actions/setup-node e docker/login-action | [Ver PR](https://github.com/nearai/ironclaw/pull/7022) |

**Destaque estratégico:** O PR #6413 implementa uma barreira de commit para respostas model completadas, prevenindo recuperação após texto parcial visível — uma melhoria fundamental para a integridade de execuções em produção.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (por comentários)

| # | Título | Comentários | Área |
|---|--------|-------------|------|
| #5522 | Reborn routine fails when task requires reading Slack DMs | 4 | Agent Runtime / Slack |
| #7400 | Bug: `stream: true` + caller `tools[]` creates zombie threads | 2 | API / Responses |
| #7346 | Emoji shortcodes displayed as plain text | 2 | UI / Rendering |
| #7292 | Installed tool cannot be used + runner heartbeat error | 2 | Tool Runtime |
| #7348 | Activity tool calls displayed in wrong chronological order | 2 | UI / Activity |
| #7345 | Agent reports 61 automations while UI shows 50 | 2 | Dashboard / Consistency |

### Análise de Demandas

**Preocupações recorrentes:**
1. **Integração Slack problemática:** Issues #5522, #5882 e #5551 indicam que o fluxo de autenticação Slack, reconexões e entrega de mensagens estão frágeis
2. **UI/UX inconsistências:** Contagem de automações diverge entre agente e interface (#7345), cronologia de atividades incorreta (#7348), e emojis não renderizados (#7346)
3. **Estabilidade de ferramentas:** A issue #7292 demonstra que ferramentas instaladas falham silenciosamente com erros de heartbeat

**Sinal positivo:** A comunidade reporta bugs com steps de reprodução detalhados, indicando usuários técnicos engajados.

---

## 5. Bugs e Estabilidade

### Por Severidade

#### 🔴 P1 — Críticos (ações imediatas)

| # | Título | Descrição | Link |
|---|--------|-----------|------|
| #7400 | Zombie threads com `stream: true` + `tools[]` | Combinação causa falha mid-stream e thread permanentemente indeletável — 100% reprodutível em 1.1.0 stable | [Ver Issue](https://github.com/nearai/ironclaw/issues/7400) |
| #7292 | Ferramenta instalada não funciona + runner heartbeat error | Após instalar CoinGecko, ferramenta não executa e produtor de heartbeat falha | [Ver Issue](https://github.com/nearai/ironclaw/issues/7292) |
| #6479 | Routines podem criar/modificar outras routines | Risco de automações auto-replicantes sem guardrails | [Ver Issue](https://github.com/nearai/ironclaw/issues/6479) |

#### 🟠 P2 — Altos (prioridade de sprint)

| # | Título | Área | Link |
|---|--------|------|------|
| #7346 | Emojis como texto plano | UI | [Ver Issue](https://github.com/nearai/ironclaw/issues/7346) |
| #7348 | Atividades fora de ordem cronológica | UI | [Ver Issue](https://github.com/nearai/ironclaw/issues/7348) |
| #7345 | Contagem de automações inconsistente (61 vs 50) | Dashboard | [Ver Issue](https://github.com/nearai/ironclaw/issues/7345) |
| #5882 | Reconexões Slack deixam auth em estado quebrado | Auth/Slack | [Ver Issue](https://github.com/nearai/ironclaw/issues/5882) |
| #6046 | Workflow simples usa 124 tool invocations | Performance | [Ver Issue](https://github.com/nearai/ironclaw/issues/6046) |
| #5878 | Token GitHub revogado com erros enganosos | Auth/GitHub | [Ver Issue](https://github.com/nearai/ironclaw/issues/5878) |

#### 🟡 P3 — Médios

| # | Título | Link |
|---|--------|------|
| #5510 | Não é possível deletar routines antigas | [Ver Issue](https://github.com/nearai/ironclaw/issues/5510) |

### Bugs Corrigidos Recentemente (closed)

- #7292 — Ferramenta CoinGecko não funcional (2 comentários)
- #5552 — Run fail com "invalid result" após múltiplas falhas
- #5509 — Latência de criação de chat escala com histórico
- #5510 — Rotinas não podem ser deletadas
- #4341 — Chain-of-thought exposto ao usuário
- #4344 — Agent espelha mensagem do usuário

---

## 6. Pedidos de Features e Sinais de Roadmap

### Issues com Tags `enhancement`/`epic`

| # | Título | Escopo | Link |
|---|--------|--------|------|
| #7166 | Tool disclosure follow-up (epic, v1.2.0) | Deferred tool discovery | [Ver Issue](https://github.com/nearai/ironclaw/issues/7166) |
| #7405 | Improve deferred tool discovery with complete signatures | Tool/Evaluation | [Ver Issue](https://github.com/nearai/ironclaw/issues/7405) |
| #7392 | Experiment: Replace first-party coding tools with omp tool surface | Coding tools | [Ver Issue](https://github.com/nearai/ironclaw/issues/7392) |
| #7360 | Expand stress coverage across built-in and durable write paths | CI/Testing | [Ver Issue](https://github.com/nearai/ironclaw/issues/7360) |

### PRs Abertas com Novas Funcionalidades

| # | Título | Funcionalidade | Link |
|---|--------|----------------|------|
| #7398 | Web push notifications + PWA | Web app como canal de notificação nativo (paridade Slack/Telegram) | [Ver PR](https://github.com/nearai/ironclaw/pull/7398) |
| #7396 | Generic progressive previews for Slack and Telegram | Pré-visualizações progressivas via chat.startStream/appendStream | [Ver PR](https://github.com/nearai/ironclaw/pull/7396) |
| #7397 | Presence-based shared conversations for Slack & Telegram | Conversas compartilhadas baseadas em presença | [Ver PR](https://github.com/nearai/ironclaw/pull/7397) |
| #7076 | Install packages the catalog already publishes | Instalação de pacotes do catálogo existente | [Ver PR](https://github.com/nearai/ironclaw/pull/7076) |

### Sinais de Roadmap

1. **v1.2.0 em desenvolvimento:** Issue #7166 explícita "Tool disclosure follow-up" como epic para v1.2.0
2. **Canal web-push:** Estratégia de adicionar notificação push W3C como primeiro-party channel
3. **Ferramentas de coding:** Experimentação com substituição da superfície de ferramentas de código pelo omp
4. **Descoberta de ferramentas diferidas:** Melhorias em signatures e previews de catálogo

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

**1. Instabilidade de Integrações**
- Usuários experimentam falhas repetidas em Slack (#5882, #5522, #5551)
- Autenticação quebrada após reconexões sem recuperação automática

**2. Confiança na Interface**
- Dashboard mostra números inconsistentes (#7345)
- Histórico de execução desaparece ao refresh (#7349)
- Emojis não renderizam — impacto visual significativo

**3. Performance de Tarefas**
- Workflows simples disparam centenas de chamadas de ferramentas (#6046)
- Latência de criação de chat piora com histórico acumulado (#5509)

**4. Operações de Manutenção**
- Rotinas antigas não podem ser deletadas (#5510)
- Impossibilidade de remover tools instaladas (#7171 referencia problema similar)

### Cenários de Uso Reportados

- **Automação de emails → Google Sheets:** Tarefa simples resulta em 124 tool invocations
- **Leitura de Slack DMs via Reborn:** Falha por falta de capability de leitura
- **Notificações Slack:** Progresso intermediário entregue em vez do resultado final

### Indicadores de Satisfação

- Usuários fornecem steps de reprodução detalhados e ambiente
- Issue #7400 tem 100% reprodutibilidade — comunidade ativa em reportar
- PRs do core team (#7396, #7397, #7398) demonstram investimento em canais de entrega

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Espera Prolongada

| # | Título | Idade | Prioridade | Link |
|---|--------|-------|------------|------|
| #6479 | Routines podem criar outras routines (auto-replicação) | ~19 dias | P1 | [Ver Issue](https://github.com/nearai/ironclaw/issues/6479) |
| #5882 | Auth Slack quebrado após reconexões | ~32 dias | P2 | [Ver Issue](https://github.com/nearai/ironclaw/issues/5882) |
| #5878 | Token GitHub revogado = erros enganosos | ~32 dias | P2 | [Ver Issue](https://github.com/nearai/ironclaw/issues/5878) |
| #6046 | 124 tool invocations em workflow simples | ~28 dias | P2 | [Ver Issue](https://github.com/nearai/ironclaw/issues/6046) |
| #5551 | Progresso intermediário no lugar do resultado final | ~39 dias | P2 | [Ver Issue](https://github.com/nearai/ironclaw/issues/5551) |
| #5552 | "Invalid result" sem detalhes após falhas | ~39 dias | P2 | [Ver Issue](https://github.com/nearai/ironclaw/issues/5552) |

### Recomendação

**Alta prioridade para triagem:**
- Issue #6479 (segurança) não tem resposta há 19 dias
- Problemas de auth Slack/GitHub (#5882, #5878) persistem há >30 dias sem resolução
- Performance de tool invocations (#6046) afeta UX diariamente

O volume de issues P2 sem resolução indica necessidade de priorização de cleanup técnico no próximo sprint.

---

## Métricas Consolidada do Período

| Métrica | Valor |
|---------|-------|
| Issues ativas/fechadas (24h) | 14 / 7 |
| PRs abertas/mergeadas (24h) | 17 / 7 |
| Releases | 0 |
| Bugs P1 em aberto | 3 |
| Bugs P2 em aberto | 8 |
| PRs de features abertas | 5 |
| Engajamento (comentários avg) | ~1.5/issue |

**Veredicto de Saúde:** O projeto está em modo de **estabilização ativa**. A ausência de releases sugere cautela, alinhada com a presença de bugs P1 críticos. A equipe demonstra ritmo saudável de PRs, mas o backlog de issues antigas requer atenção estratégica.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do Projeto CoPaw — 2026-08-10

## 1. Panorama do dia

O projeto CoPaw (QwenPaw) apresenta **alta atividade comunitária** em 10 de agosto de 2026, com 50 PRs e 17 issues atualizadas nas últimas 24h. A taxa de abertura de PRs (49 novos) supera significativamente a de issues, indicando forte contribuição externa. Não houve lançamentos de novas versões, mantendo o codebase em fase de estabilização da versão 2.1.0b2. A comunidade demonstra interesse ativo em melhorias de usabilidade (web console,审批流程) e correções de bugs críticos (Gemini API, rendering de output).

---

## 2. Lançamentos

**Nenhum novo release** foi publicado nas últimas 24h.

O último release estável continua sendo a versão 2.0.1, com a versão beta 2.1.0b2 em desenvolvimento ativo conforme evidenciado pelos PRs recentes.

---

## 3. Progresso do Projeto

### PRs Fechadas/Merged

| # | PR | Impacto |
|---|-----|---------|
| [#6846](https://github.com/agentscope-ai/QwenPaw/pull/6846) | **DeepSeek V4 context windows (1M)** — Catalogação oficial dos modelos deepseek-v4-flash e deepseek-v4-pro com janela de 1.000.000 tokens, resolvendo detecção incorreta de 131K | ⭐ Alta |
| [#6851](https://github.com/agentscope-ai/QwenPaw/pull/6851) | **Front-end renderer fix** — Corrigido colapso de outputs multi-linha em "blobs" ilegíveis no console | ✅ Resolvido (duplicado em #6850, #6849, #6848, #6852) |

### PRs em Destaque (Em Review/Abertas)

| # | PR | Descrição |
|---|-----|-----------|
| [#6854](https://github.com/agentscope-ai/QwenPaw/pull/6854) | **Localized approval purpose descriptions** — Adiciona descrição concisa para solicitações de aprovação, melhorando UX | ✨ Feature |
| [#6844](https://github.com/agentscope-ai/QwenPaw/pull/6844) | **Strip unsupported Gemini schema metadata** — Remove campo `$schema` que causa falha `unknown` na API Gemini | 🐛 Bug Fix |
| [#6845](https://github.com/agentscope-ai/QwenPaw/pull/6845) | **Preserve assistant completion time** — Mantém tempo real de resposta ao recarregar histórico | 🐛 Bug Fix |
| [#6398](https://github.com/agentscope-ai/QwenPaw/pull/6398) | **Reranker support for ReMe memory search** — Adiciona re-ranking via API externa para busca de memória | 🚀 Advanced |
| [#6809](https://github.com/agentscope-ai/QwenPaw/pull/6809) | **Sanitize Chat Completions for strict providers** — Corrige rejeição por provedores strict (StepFun) | 🐛 Bug Fix |
| [#6259](https://github.com/agentscope-ai/QwenPaw/pull/6259) | **CIDR support in no-auth host allowlist** — Permite ranges de IP em vez de endereços individuais | 🔐 Security |
| [#6704](https://github.com/agentscope-ai/QwenPaw/pull/6704) | **Session fork feature** — Snapshot de contexto conversacional para nova sessão | ✨ Feature |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| # | Título | Comentários | Categoria |
|---|--------|-------------|-----------|
| [#2291](https://github.com/agentscope-ai/QwenPaw/issues/2291) | **Help Wanted: Open Tasks** | 66 | 📢 Community |
| [#6281](https://github.com/agentscope-ai/QwenPaw/issues/6281) | **Web console mobile adaptation** | 5 | 📱 UX |
| [#6832](https://github.com/agentscope-ai/QwenPaw/issues/6832) | **AI approval descriptions** | 2 | ✨ Feature |
| [#6853](https://github.com/agentscope-ai/QwenPaw/issues/6853) | **prompts.py documentation mismatch** | 1 | 📝 Docs |

### Análise de Demandas

1. **Adaptação Mobile do Console Web** (#6281) — Usuários solicitam interface responsiva para operação mobile, indicando uso em cenários de mobilidade.

2. **Aprimoramento de Aprovações** (#6832) — Feature request com alto valor prático: adicionar descrição de propósito nas solicitações de aprovação de ferramentas, já implementada via [PR #6854](https://github.com/agentscope-ai/QwenPaw/pull/6854).

3. **Roadmap ReMe Light** (#6840) — Comunidade demonstra interesse em conhecer o cronograma completo do ReMe4 (Auto-Link, busca tri-modal, pesos de digest de 4 categorias).

---

## 5. Bugs e Estabilidade

### Bugs Reportados (Por Severidade)

#### 🔴 Alta Severidade

| # | Bug | Descrição |
|---|-----|-----------|
| [#6826](https://github.com/agentscope-ai/QwenPaw/issues/6826) | **End time display anomaly** — Tempo de思考显示仅几秒 quando real é 2min | Afeta: Console Web |
| [#6812](https://github.com/agentscope-ai/QwenPaw/issues/6812) | **Model 'unknown' in Google API** — Campo `$schema` causa rejeição pela API Gemini | Afeta: Provider Gemini |
| [#6847](https://github.com/agentscope-ai/QwenPaw/issues/6847) | **Antivirus killing QwenPaw** — Processo terminated por software de segurança | Afeta: Windows, Execução |

#### 🟡 Média Severidade

| # | Bug | Descrição |
|---|-----|-----------|
| [#6839](https://github.com/agentscope-ai/QwenPaw/issues/6839) | **MCP string-to-number coercion** — Parâmetros numéricos mal interpretados como strings | Afeta: MCP Tools |
| [#6838](https://github.com/agentscope-ai/QwenPaw/issues/6838) | **Sub-agent model switching** — Falha ao alternar modelos entre agentes principais e sub-agentes | Afeta: Multi-Agent |

#### 🟢 Baixa Severidade (Resolvidos)

- **Front-end renderer collapse** (#6851-#6852) — Corrigido via merge

### Regressões Conhecidas

- **Custom ascend-vllm models** (#5584) — Regressão desde versão 1.1.7, modelos customizados param de conectar

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| # | Feature | Relevância | Status |
|---|---------|------------|--------|
| [#6832](https://github.com/agentscope-ai/QwenPaw/issues/6832) | **Approval descriptions** | Alta — UX crítico | PR #6854 em progresso |
| [#6281](https://github.com/agentscope-ai/QwenPaw/issues/6281) | **Mobile web console** | Média — Mobilidade | Aberto |
| [#6840](https://github.com/agentscope-ai/QwenPaw/issues/6840) | **ReMe4 full roadmap** | Média — Visibilidade | Respondido |

### Sinais de Evolução do Produto

1. **Sistema de Memória Avançado**: PR #6398 adiciona suporte a reranker, indicando direção para search mais inteligente
2. **Segurança Empresarial**: PR #6259 (CIDR allowlist) sugere foco em deployments corporativos
3. **Experiência Mobile**: Issue #6281 demonstra demanda por acessibilidade mobile
4. **Multi-Agent Orchestration**: Issue #6838 revela necessidade de controle granular de sub-agentes

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Dor | Frequência | Impacto |
|-----|------------|---------|
| **Software de segurança bloqueia execução** | Alta (1 issue com evidence visual) | 🔴 Crítico |
| **Outputs de ferramentas colapsam em blobs** | Múltiplos duplicados | 🟡 Alto |
| **Modelos customizados (ascend-vllm) não conectam** | Regressão documentada | 🔴 Crítico |
| **Tempo de resposta exibido incorretamente** | 1 report | 🟡 Moderado |
| **Aprovações de IA incompreensíveis** | 1 report | 🟡 UX |

### Cenários de Uso Identificados

- **Operação Desktop Windows** — Maioria dos bugs reportados em Windows 11
- **Agentes com permissões elevadas** — Workflow de approval precisa melhorar
- **Integração MCP** — Usuários avançados integrando ferramentas customizadas
- **Memória de longo prazo** — Interesse no sistema ReMe e Auto-Dream

### Satisfação Geral

**Neutro-Positiva**: Comunidade ativa com 50 PRs em 24h, mas problemas de estabilidade (antivirus, API providers) causam fricção significativa.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Estagnadas

| # | Título | Criado | Dias Estagnado | Prioridade |
|---|--------|--------|----------------|------------|
| [#5584](https://github.com/agentscope-ai/QwenPaw/issues/5584) | Custom ascend-vllm connection regression | 2026-06-27 | ~44 dias | 🔴 Alta |
| [#6281](https://github.com/agentscope-ai/QwenPaw/issues/6281) | Mobile web console adaptation | 2026-07-20 | ~21 dias | 🟡 Média |
| [#2291](https://github.com/agentscope-ai/QwenPaw/issues/2291) | Help Wanted: Open Tasks | 2026-03-25 | ~138 dias | 📢 Community |

### PRs Aguardando Review

| # | PR |等待时间 | Bloqueio |
|---|-----|---------|----------|
| [#6398](https://github.com/agentscope-ai/QwenPaw/pull/6398) | Reranker support | ~18 dias | Under Review |
| [#6715](https://github.com/agentscope-ai/QwenPaw/pull/6715) | OneBot media handling | ~5 dias | Open |
| [#6704](https://github.com/agentscope-ai/QwenPaw/pull/6704) | Session fork | ~5 dias | Open |

---

## Métricas Resumidas (2026-08-10)

| Métrica | Valor | Tendência |
|---------|-------|-----------|
| Issues ativas | 11 | → Estável |
| PRs abertas | 49 | ↑ Alta |
| PRs merged (24h) | 1 | ↓ Baixa |
| Releases | 0 | → Nenhum |
| Bugs críticos abertos | 3 | ⚠️ Atenção |
| Features solicitadas | 4 | → Normal |

---

**Conclusão**: O projeto CoPaw demonstra saúde comunitária saudável com alta taxa de contribuições externas. Recomenda-se atenção prioritária aos bugs de estabilidade (antivirus, Gemini API) e à regressão de modelos ascend-vllm. O pipeline de features (approval descriptions, session fork, reranker) indica evolução consistente para a versão 2.1.x.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-08-10

---

## 1. Panorama do Dia

O ecossistema ZeroClaw mantém **atividade intensa** nesta data, com 50 issues e 50 PRs atualizados nas últimas 24h — sem nenhum merge ou closure de PR, sugerindo que a pipeline de revisão está em fase de absorbsão de contribuições. A taxa de fechamentos de issues (12 de 50) indica que o time está respondendo ao volume, mas a **ausência de releases novas** contrasta com o pipeline robusto de PRs abertos. O esforço concentra-se em **segurança** (3 issues p0/p1 relacionadas a falhas-fechadas e controle de credenciais), **estabilidade do runtime** (vários bugs críticos em andamento) e **governança** (RFCs ativos sobre lanes de trabalho e processo de decisão). A saúde geral sugere um projeto maduro em transição para a versão 0.8.4, com foco em robustez operacional.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

A ausência de release coincide com o bug identificado em [#9690](https://github.com/zeroclaw-labs/zeroclaw/issues/9690), onde o container `all-features` está quebrado desde 2026-07-08 devido a um pin de Rust (1.95.0) abaixo da MSRV declarada. A release v0.8.4 está bloqueada até que essa regressão do Containerfile seja corrigida. Este é um **bloqueador de release** que precisa ser priorizado para desbloquear o ciclo de publicação.

---

## 3. Progresso do Projeto

### PRs em destaque (abertos, aguardando revisão ou ação do autor)

| # | PR | Escopo | Tamanho | Status |
|---|-----|--------|---------|--------|
| [#9745](https://github.com/zeroclaw-labs/zeroclaw/pull/9745) | `fix(memory): add per-agent attribution and scoping to the knowledge graph` | Segurança/Arquitetura | XL | `needs-author-action` |
| [#9744](https://github.com/zeroclaw-labs/zeroclaw/pull/9744) | `refactor(gateway): require authenticated webhook ingress before agent dispatch` | Segurança/Gateway | XL | `needs-author-action` |
| [#9743](https://github.com/zeroclaw-labs/zeroclaw/pull/9743) | `fix(providers): wire modalities parser into capabilities_for_model` | Providers/Runtime | XL | `needs-author-action` |
| [#9726](https://github.com/zeroclaw-labs/zeroclaw/pull/9726) | `fix(runtime): make TaskRecord the single background lifecycle owner` | Runtime/Arquitetura | XL | `needs-author-action` |
| [#9723](https://github.com/zeroclaw-labs/zeroclaw/pull/9723) | `fix(tool-call-parser): parse DeepSeek DSML and <\|tool_call\|> envelopes` | Runtime | XL | `needs-author-action` |
| [#9182](https://github.com/zeroclaw-labs/zeroclaw/pull/9182) | `feat(runtime): support PowerShell as the native shell on Windows` | Runtime/Canal | XL | `needs-author-action` |

### Avanços implícitos nos PRs

Os PRs em andamento representam avanços significativos:

- **Segurança**: [#9745](https://github.com/zeroclaw-labs/zeroclaw/pull/9745) e [#9744](https://github.com/zeroclaw-labs/zeroclaw/pull/9744) abordam vulnerabilidades de isolamento entre agentes e autenticação de webhooks — ambos classificados como `risk:high` e com contribuiadores distintos/reconhecidos.
- **Interoperabilidade**: [#9743](https://github.com/zeroclaw-labs/zeroclaw/pull/9743) corrige a resolução de capacidades visuais para providers OpenAI-compatíveis, resolvendo o issue [#8733](https://github.com/zeroclaw-labs/zeroclaw/issues/8733).
- **Robustez do runtime**: [#9726](https://github.com/zeroclaw-labs/zeroclaw/pull/9726) consolida ownership de tarefas em background, eliminando possibilidades de desacordo entre persistência de output e estado terminal.
- **Suporte a modelos**: [#9723](https://github.com/zeroclaw-labs/zeroclaw/pull/9723) adiciona suporte a envelopes DSML e `<|tool_call|>` do DeepSeek, ampliando a compatibilidade com modelos não-OpenAI.

**Nota**: Todos os 50 PRs atualizados permanecem em estado `OPEN`, com 0 merges/closes. Isso indica um acúmulo na fila de revisão que pode ser gargalo.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários)

| # | Título | Comentários | Categoria | Link |
|---|--------|-------------|-----------|------|
| [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) | RFC: Work Lanes, Board Automation, and Label Cleanup | 21 | Governança | [Issue #6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) |
| [#7100](https://github.com/zeroclaw-labs/zeroclaw/issues/7100) | RFC: Per-model capability & context-window config | 11 | RFC/Arquitetura | [Issue #7100](https://github.com/zeroclaw-labs/zeroclaw/issues/7100) |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | Tracker: Maintainer decision queue for RFCs and design issues | 11 | Governança | [Issue #8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) |
| [#6971](https://github.com/zeroclaw-labs/zeroclaw/issues/6971) | RFC: Security posture, credential boundaries, and universal ingress policy | 10 | Segurança | [Issue #6971](https://github.com/zeroclaw-labs/zeroclaw/issues/6971) |
| [#9397](https://github.com/zeroclaw-labs/zeroclaw/issues/9397) | RFC: Treat empty WhatsApp Web `allowed_groups` as permit-none | 10 | Segurança/Canal | [Issue #9397](https://github.com/zeroclaw-labs/zeroclaw/issues/9397) |
| [#8054](https://github.com/zeroclaw-labs/zeroclaw/issues/8054) | System prompt tool-availability should match per-turn effective tools | 10 | Bug/Runtime | [Issue #8054](https://github.com/zeroclaw-labs/zeroclaw/issues/8054) |
| [#8681](https://github.com/zeroclaw-labs/zeroclaw/issues/8681) | Tracker: Goal mode implementation split stack | 10 | Implementação | [Issue #8681](https://github.com/zeroclaw-labs/zeroclaw/issues/8681) |
| [#9101](https://github.com/zeroclaw-labs/zeroclaw/issues/9101) | RFC: Consolidate release attestation mechanisms | 9 | CI/Segurança | [Issue #9101](https://github.com/zeroclaw-labs/zeroclaw/issues/9101) |

### Análise dos temas quentes

**Governança e processo** lideram o engajamento: a RFC #6808 (Work Lanes, Board Automation, Label Cleanup) domina com 21 comentários, refletindo uma demanda ativa por **racionalização do fluxo de trabalho** do projeto. A #9496 (Streamline RFC scope, discussion, voting) também indica frustração com a burocracia atual.

**Segurança é tema recorrente**: três dos oito issues mais comentados tratam de segurança (#6971, #9397, #9101), demonstrando que a comunidade prioriza a maturidade dos controles de segurança. A RFC #6971 sobre postura de segurança, credenciais e política de ingress universal é particularmente substantiva.

**Separação de implementações**: a #8681 (Goal mode split stack) mostra que o time está tentando modularizar uma feature grande em PRs menores — um indicador de maturidade no processo de code review.

---

## 5. Bugs e Estabilidade

### Por severidade (S0/S1 — críticos)

| # | Bug | Severidade | Status | Canal | Link |
|---|-----|-----------|--------|-------|------|
| [#9565](https://github.com/zeroclaw-labs/zeroclaw/issues/9565) | gateway webhook handlers não fail closed (WhatsApp Cloud, Linq, WATI) | **S0** | in-progress | gateway | [Issue #9565](https://github.com/zeroclaw-labs/zeroclaw/issues/9565) |
| [#8731](https://github.com/zeroclaw-labs/zeroclaw/issues/8731) | Servidores MCP stdio acumulam como processos zumbis | **S2** | in-progress | daemon | [Issue #8731](https://github.com/zeroclaw-labs/zeroclaw/issues/8731) |
| [#8560](https://github.com/zeroclaw-labs/zeroclaw/issues/8560) | `browser_open` congela o turno do agente (subprocesso sem timeout) | **S1** | CLOSED | tool | [Issue #8560](https://github.com/zeroclaw-labs/zeroclaw/issues/8560) |
| [#9192](https://github.com/zeroclaw-labs/zeroclaw/issues/9192) | shared_budget TOCTOU pode fazer wrap em AtomicUsize | **S1** | CLOSED | runtime | [Issue #9192](https://github.com/zeroclaw-labs/zeroclaw/issues/9192) |
| [#9085](https://github.com/zeroclaw-labs/zeroclaw/issues/9085) | Panic aninhado em `try_enable_pgvector` | **S1** | accepted | memory | [Issue #9085](https://github.com/zeroclaw-labs/zeroclaw/issues/9085) |
| [#9284](https://github.com/zeroclaw-labs/zeroclaw/issues/9284) | config flush pode sobrescrever escritas concorrentes | **S2** | accepted | daemon | [Issue #9284](https://github.com/zeroclaw-labs/zeroclaw/issues/9284) |
| [#9284](https://github.com/zeroclaw-labs/zeroclaw/issues/9284) | | | | | |
| [#8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642) | Clonagem de schema MCP causa crescimento irrestrito de RSS | **S1** | accepted | runtime/mcp | [Issue #8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642) |
| [#9690](https://github.com/zeroclaw-labs/zeroclaw/issues/9690) | Containerfile StageX com rustc abaixo da MSRV | **S1** | CLOSED | CI | [Issue #9690](https://github.com/zeroclaw-labs/zeroclaw/issues/9690) |
| [#9834](https://github.com/zeroclaw-labs/zeroclaw/issues/9834) | Falhas intermitentes de teste por estado global compartilhado | **S3** | in-progress | CI/tests | [Issue #9834](https://github.com/zeroclaw-labs/zeroclaw/issues/9834) |
| [#9860](https://github.com/zeroclaw-labs/zeroclaw/issues/9860) | Web UI congelada após evento "created" do canal filesystem | **S2** | CLOSED | daemon | [Issue #9860](https://github.com/zeroclaw-labs/zeroclaw/issues/9860) |

### Análise de estabilidade

**Preocupação crítica**: O issue [#9565](https://github.com/zeroclaw-labs/zeroclaw/issues/9565) é classificado S0 (risco de perda de dados/segurança) e está em `in-progress`. Três handlers de webhook em `crates/zeroclaw-gateway/src/lib.rs` despacham mensagens controladas por atacantes para o agente **sem autenticação** — verified by source inspection. Este é um vetor de ataque ativo.

**Bugs de segurança resolvidos**: Três bugs críticos foram fechados desde a última atualização — `browser_open` hang ([#8560](https://github.com/zeroclaw-labs/zeroclaw/issues/8560)), TOCTOU em shared_budget ([#9192](https://github.com/zeroclaw-labs/zeroclaw/issues/9192)), e container MSRV ([#9690](https://github.com/zeroclaw-labs/zeroclaw/issues/9690)). Isso demonstra capacidade de resposta.

**Padrões emergentes**:
- Falhas de canais (Discord, Telegram

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*