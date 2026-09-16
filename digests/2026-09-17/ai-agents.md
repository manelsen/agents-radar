# Resumo diário do ecossistema de agentes de IA 2026-09-17

> Issues: 1 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-09-16 22:35 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório de Projeto: NullClaw

**Data de Referência:** 2026-09-17  
**Última Atualização dos Dados:** 2026-09-16

---

## 1. Panorama do Dia

O projeto NullClaw apresenta **atividade mínima** em 16 de setembro de 2026, com apenas **1 issue fechada** e nenhuma atividade de PRs ou releases. A atividade concentrou-se em planejamento estratégico, com a discussão sobre potencial integração de interfaces móveis via fork do projeto litter. O repositório demonstra baixo volume de atividade nas últimas 24h, sugerindo um período de reflexão arquitetural ou planejamento de roadmap.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto não publicou novas versões, tags ou artefatos de distribuição. Mantenha-se atento(a) ao repositório para notificações de futuros lançamentos.

---

## 3. Progresso do Projeto

### PRs Merged/Fechadas Hoje
| PR | Status | Impacto |
|----|--------|---------|
| Nenhum PR registrado | — | — |

### Issues Fechadas
| Issue | Título | Impacto |
|-------|--------|---------|
| [#999](https://github.com/nullclaw/nullclaw/issues/999) | Explore forking litter's mobile GUI into human-guard-rail as a NullClaw client | **Estratégico** — Investigação de expansão para plataformas móveis (iOS/Android) via Rust core |

---

## 4. Temas Quentes da Comunidade

### Issue com Maior Atividade
**[#999](https://github.com/nullclaw/nullclaw/issues/999)** — *Explore forking litter's mobile GUI into human-guard-rail as a NullClaw client*  
- **Autor:** Azdwarf5Azdwarf  
- **Comentários:** 1  
- **Reações:** 0 👍  
- **Status:** CLOSED

**Análise:** O autor propõe investigar a arquitetura do projeto [litter (0xSero/litter)](https://github.com/0xSero/litter), um cliente agentic-coding nativo para iOS+Android que utiliza thin UI (Swift/Kotlin) sobre core Rust compartilhado via UniFFI. O objetivo é aplicar shape similar ao projeto human-guard-rail (atualmente Android/Gradle), evoluindo-o para um cliente mobile speak-to com NullClaw.

**Demanda identificada:** Expansão para plataformas móveis com interface nativa, aproveitando capacidades de IA conversational.

---

## 5. Bugs e Estabilidade

### Problemas Reportados
| Severidade | Quantidade | Detalhes |
|------------|------------|----------|
| Crítica | 0 | — |
| Alta | 0 | — |
| Média | 0 | — |
| Baixa | 0 | — |

**Nenhum bug ou regressão reportado nas últimas 24h.** O projeto não apresenta incidentes de estabilidade documentados no período.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Demandas Identificadas
| Issue | Feature | Relevância |
|-------|---------|------------|
| [#999](https://github.com/nullclaw/nullclaw/issues/999) | Client mobile NullClaw via fork de litter | **Estratégica** |

**Sinais de Roadmap:**
- **Integração mobile** parece ser direção estratégica para o projeto
- Arquitetura UniFFI/Rust como foundation para multi-plataforma
- Conexão com servidores Codex/Local Studio como backend

---

## 7. Resumo de Feedback dos Usuários

### Volume de Feedback
| Tipo | Quantidade |
|------|------------|
| Issues abertas com feedback | 0 |
| Issues fechadas com discussão | 1 |
| Comentários em PRs | 0 |
| Total de interações | 1 |

### Análise de Sentimento
A única interação registrada (Issue #999) demonstra **interesse em evolução do produto**, não em reclamações. O autor propõe colaboração ativa (forking), indicando:
- **Satisfação com arquitetura atual:** Quer estender, não substituir
- **Demanda por mobile:** Explícito interesse em客户端 nativos
- **Alinhamento com tendências:** Integração AI agents em dispositivos móveis

---

## 8. Backlog que Merece Atenção

### Issues Antigas Sem Resposta

| Issue | Título | Idade | Prioridade |
|-------|--------|-------|------------|
| *Sem dados disponíveis* | — | — | — |

**Observação:** Não há dados suficientes no período para identificar backlog histórico. Recomenda-se verificação manual do repositório para issues antigas pendentes.

---

## Indicadores de Saúde do Projeto

| Métrica | Status | Tendência |
|---------|--------|-----------|
| Atividade (24h) | 🟡 Baixa | → Estável |
| Bugs críticos abertos | 🟢 Zero | → Estável |
| Releases (7 dias) | 🔴 Nenhuma | → Sem dados |
| Engajamento comunidade | 🟡 Mínimo | → Estável |

---

**Próxima Atualização:** 2026-09-18  
**Fonte:** GitHub API — [nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo — Ecossistema Open Source de Agentes de IA

**Data de Referência:** 2026-09-17  
**Projetos Analisados:** NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw, ZeroClaw

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source demonstra **dois extremos distintos** em 17 de setembro de 2026. De um lado, projetos como **Hermes Agent, CoPaw e ZeroClaw** operam em ritmo intenso de desenvolvimento com dezenas de issues e PRs atualizados diariamente, indicando adoção ativa e maturação acelerada. Do outro, **NullClaw e IronClaw** apresentam atividade mínima ou nula, sugerindo fases de planejamento ou possível abandono. O padrão emergente é a **convergência arquitetural** — múltiplos projetos convergem para problemas similares como gerenciamento de sessões multi-tenant, stability de streaming SSE, e expansão para canais mobile/desktop. A segurança (SSRF hardening, OIDC verification, shell evasion) emerge como tema transversal, sinalizando maturação do ecossistema além da funcionalidade básica.

---

## 2. Comparação de Atividade

| Projeto | Issues (abertas/fechadas) | PRs (abertos/fechados) | Releases (24h) | Saúde | Tendência |
|---------|--------------------------|------------------------|---------------|-------|-----------|
| **Hermes Agent** | 1 / 49 | 47 / 3 | 0 | 🟡 Estável/Alta Pressão | ↑ Crescendo |
| **CoPaw/QwenPaw** | 13 / 12 | 24 / 12 | 0 | 🟢 Estável | ↑ Crescendo |
| **ZeroClaw** | 18 / — | 48 / 2 | 0 | 🟡 Ativo/Técnico Debt | → Estável-Alto |
| **NanoBot** | 0 / 1 | 15 / 4 | 0 | 🔴 Frágil | ↓ Reativo |
| **PicoClaw** | 0 / 1 | 1 / 3 | 0 | 🟢 Bom | → Estável |
| **NullClaw** | 0 / 1 | 0 / 0 | 0 | 🟡 Baixo | → Estável |
| **IronClaw** | — | — | — | ⚫ Inativo | — |

**Observações:**
- **Hermes Agent** lidera em volume absoluto de atividade (100 itens em 24h)
- **NanoBot** apresenta situação crítica: 1 P1 (serialização de sessões), 8 P2 bugs simultâneos, e PR core estagnado há 50 dias
- **ZeroClaw** mantém alto volume com foco em segurança enterprise (SSRF, OIDC, SQLite safety)
- **IronClaw** sem dados — risco de projeto abandonado ou baixa relevância

---

## 3. Posicionamento do Projeto Principal (Hermes Agent)

### Vantagens Competitivas

| Dimensão | Hermes Agent | Pares |
|----------|--------------|-------|
| **Volume de Desenvolvimento** | 100+ itens/dia | ZeroClaw (68), CoPaw (61) |
| **Arquitetura de Sessões** | Gateway unificado proposto (#106742) | NanoBot com race conditions |
| **Superfície de Integração** | CLI, TUI, Desktop, API, ACP, bots, cron | PicoClaw focado em canais |
| **Comunidade** | 50 issues fechadas em sprint | CoPaw com 29 comentários em issue única |

### Diferenças Técnicas

- **Hermes Agent** investe em **single gateway ownership** de sessões — arquitetura que elimina duplicação de estado entre componentes
- **ZeroClaw** prioriza **segurança enterprise** (OIDC, SSRF hardening, SQLite safety)
- **CoPaw** diverge com foco em **multi-tenant Hub** e **voice chat realtime**
- **NanoBot** representa risco: arquitetura de sessão com race conditions não resolvidas há 50 dias

### Tamanho da Comunidade

Hermes Agent demonstra **maior superfície de adoção** com:
- 49 issues fechadas em 24h (sprint massivo de encerramento)
- Múltiplas plataformas suportadas (Desktop, Telegram, group chats)
- Tags `sweeper:risk-session-state` indicando uso em produção
- RFC #112639 com 8 comentários (interesse em otimização de latência)

---

## 4. Focos Técnicos Compartilhados

### 4.1 Gerenciamento de Estado de Sessão

**Presente em:** Hermes Agent (#106742), NanoBot (#5792, #5794), CoPaw (memory exhaustion #7722)

O problema de **concorrência de sessões** aparece transversalmente:

| Projeto | Bug | Severidade |
|---------|-----|------------|
| Hermes Agent | #102157 — Mensagem persiste no DB de outro bot | P2 |
| Hermes Agent | #96570 — System prompt null em group chats | Alta |
| NanoBot | #5792 — Race condition no agent loop | **P1** |
| CoPaw | #7722 — Memory exhaustion em 3 caminhos | Crítico |

**Conclusão:** O pattern de "multi-session agent loop" é fundamentalmente difícil. A solução do Hermes Agent (single gateway ownership) pode servir de referência.

### 4.2 Multimodalidade e Imagens

**Presente em:** ZeroClaw (#10885, #10908), Hermes Agent (#113542), CoPaw (#7799)

Bugs relacionados a imagens em conversas multi-tool:

```
ZeroClaw: Tool-returned images disappear after unrelated tool call
Hermes Agent: evict images at provider limits (cache prefix)
CoPaw: Console image display — corrigido após report
```

**Padrão:** Implementações estão descobrindo que manter imagens "vivas" durante turns de usuário requer gestão explícita de cache/limpeza.

### 4.3 Segurança de Channels

**Presente em:** ZeroClaw (SSRF, SQLite safety), CoPaw (shell evasion habilitada por padrão), PicoClaw (loop infinito de API)

| Projeto | Feature de Segurança |
|---------|---------------------|
| ZeroClaw | SSRF hardening em file_download (#10070) |
| ZeroClaw | OIDC token verification (#10255) |
| ZeroClaw | SQLite storage validation contra symlink attacks (#10835) |
| CoPaw | Shell evasion checks habilitadas por padrão (#7120) |
| PicoClaw | Circuit breaker para animações (fix #3343) |

**Sinal:** O ecossistema está madurando — segurança deixa de ser opcional e vira default.

### 4.4 Cron/Scheduling

**Presente em:** Hermes Agent (#95307), NanoBot (#5762, #5766, #5764)

```
NanoBot: Cron aceita múltiplos schedule fields conflituosos
NanoBot: Cron aceita `at` no passado e reporta sucesso
NanoBot: Fallback probes serializadas incorretamente
Hermes Agent: Cron finite jobs discarded as "Fire claim ownership lost"
```

**Padrão:** Ferramentas de scheduling são subestimadas em complexidade. Validação de input é inexistente em múltiplos projetos.

---

## 5. Análise de Diferenciação

### 5.1 Por Público-Alvo

| Projeto | Público Primário | Arquitetura |
|---------|-----------------|-------------|
| **Hermes Agent** | Desenvolvedores power-user, bots multi-agente | Rust core + Electron, group chats |
| **CoPaw** | Equipes (multi-tenant Hub), voice-first | Plugin architecture, Python-centric |
| **ZeroClaw** | Enterprise, CI/CD, automação corporativa | Rust + SQLite, canais profissionais |
| **NanoBot** | Usuários técnicos, debugging de código | Provider-first, tracing |
| **PicoClaw** | Usuários de Telegram/QQ, bots simples | Canal-first, Rust + adapters |

### 5.2 Por Arquitetura

```
Hermes Agent:  Single gateway → múltiplos frontends (Desktop, CLI, ACP, bots)
CoPaw:         Plugin hub → MCP extensibility + voice
ZeroClaw:      Runtime centralizado → canais (Mattermost, Telegram, Sendblue)
NanoBot:       Provider abstraction → OpenRouter, Codex, NIM
PicoClaw:      Adapter pattern → canais isolados
NullClaw:      Rust core via UniFFI → mobile-first planejado
```

### 5.3 Por Roadmap Estratégico

| Projeto | Direção de Roadmap | Diferenciador |
|---------|-------------------|---------------|
| **Hermes Agent** | Group chat maturity, PWA mobile | Sessões unificadas |
| **CoPaw** | Hub multi-tenant 2.2.0, Realtime voice | Colaboração em equipe |
| **ZeroClaw** | Enterprise security, transcription cascade | Compliance e CI |
| **NullClaw** | Mobile via fork de litter | Cross-platform Rust |
| **NanoBot** | Provider integrations (OpenRouter image gen) | Observabilidade |

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Projetos em Fase de Iteração Rápida

| Projeto | Indicadores de Velocidade |
|---------|--------------------------|
| **Hermes Agent** | 49 issues fechadas em 24h, 3 PRs merged, sprint massivo |
| **CoPaw** | 12 issues + 12 PRs fechados, 5 first-time contributors |
| **ZeroClaw** | 50 PRs atualizados, 4 PRs distinguished contributor |

**Maturidade:** Esses projetos estão em **模式 de product-market fit** — iterando rapidamente com base em feedback real.

### 6.2 Projetos em Fase de Consolidação de Qualidade

| Projeto | Indicadores |
|---------|-------------|
| **PicoClaw** | Correções de bugs específicos (Telegram UX), estável |
| **NullClaw** | Planejamento estratégico, baixa pressão de bugs |

### 6.3 Projetos com Sinais de Alerta

| Projeto | Risco | Evidência |
|---------|-------|-----------|
| **NanoBot** | Technical debt acumulado | PR #5152 estagnado há 50 dias, 9 bugs simultâneos |
| **IronClaw** | Possível abandono | Zero atividade |
| **Hermes Agent** | Debt de stability | 2 P1 + 10+ P2 abertos, double-write data corruption |

### 6.4 Engajamento Comunitário

| Projeto | Métrica de Engajamento | Observação |
|---------|------------------------|------------|
| **CoPaw** | Issue #7318 com 29 comentários | Hub multi-tenant é demanda clara |
| **Hermes Agent** | RFC #112639 com 8 comentários | Comunidade interessada em otimização |
| **ZeroClaw** | 4 PRs distinguished contributor | Contribuidores recorrentes ativos |
| **NanoBot** | Zero reações/comentários | Comunidade passiva, disconnect risco |

---

## 7. Sinais de Tendência

### 7.1 Tendências de Mercado Confirmadas

#### A. Mobile/PWA como Próxima Fronteira

```
NullClaw: Fork de litter para iOS/Android via UniFFI
Hermes Agent: #101394 — Hermes Remote - Mobile PWA for Bot Mode
ZeroClaw: Sendblue iMessage/SMS channel (#10768)
```

**Sinal:** Multi-plataforma não é mais suficiente — os projetos estão convergindo para mobile-native.

#### B. Multi-Tenant e Colaboração em Equipe

```
CoPaw: Hub multi-tenant para 2.2.0 (29 comentários)
ZeroClaw: Model gateway + member governance (#7779)
Hermes Agent: Group chat sessions (15+ issues)
```

**Sinal:** Agentes individuais estão evoluindo para plataformas colaborativas.

#### C. Segurança como Feature de Mesa

```
CoPaw: Shell evasion habilitada por padrão
ZeroClaw: SSRF hardening, OIDC verification, SQLite validation
Hermes Agent: Config mutation detection/blocking (3 PRs)
```

**Sinal:** O ecossistema está madurando para deployments enterprise/CI.

#### D. Observabilidade e Tracing

```
NanoBot: Langfuse tracing for Codex (#5520) — aberto há 23 dias
NanoBot: OpenRouter native image generation API
ZeroClaw: Token accounting on history-trim events (#9713)
```

**Sinal:** "Agentic applications" estão sendo deployados em produção, exigindo debugging e compliance.

### 7.2 Tendências Técnicas Emergentes

| Tendência | Evidência | Implicação |
|-----------|-----------|------------|
| **Context Compaction Proativo** | ZeroClaw (#10780, #10905), CoPaw (memory-distill) | Gerenciamento de contexto emerge como feature crítica |
| **Transcription Cascade** | ZeroClaw #10900 — fallback chain STT | Voice input resilience |
| **Channel Provenance** | ZeroClaw #10891 — tracking de origem | Audit trail para compliance |
| **Script-Speed Execution** | Hermes Agent RFC #112639 | Limitar latência para UX comparável a CLI |

### 7.3 Riscos Transversais Identificados

1. **Race Conditions em Sessões:** 3+ projetos com bugs de concorrência de sessão — padrão architectural não resolvido
2. **Validação de Input em Cron Tools:** NanoBot (3 bugs) e Hermes Agent (1 bug) — superfície negligenciada
3. **Streaming Reliability:** Múltiplos projetos com bugs de `stream: false` treated as truthy, SSE freezes, payload null
4. **Dependency on External Providers:** NanoBot com fallback probes serializadas incorretamente — resiliência de provider é frágil

---

## 8. Síntese para Decisores

### Prioridade de Atenção por Projeto

| Projeto | Status | Recomendação |
|---------|--------|-------------|
| **Hermes Agent** | 🟡 Alto potencial + alto risco | Acompanhar P1 data corruption (#104079, #102157); validar single gateway architecture |
| **CoPaw** | 🟢 Crescimento saudável | Adotar como referência de comunidade engajada; Hub multi-tenant é roadmap sólido |
| **ZeroClaw** | 🟡 Enterprise-ready | Considerar para deployments que requerem segurança e compliance |
| **NanoBot** | 🔴 Requer intervention | Avoid para produção até PR #5152 ser merged; technical debt crítico |
| **PicoClaw** | 🟢 Estável | Bom para casos de uso Telegram/QQ específicos |
| **NullClaw** | 🟡 Observação | Monitorar evolução mobile; arquitetura UniFFI interessante |

### Oportunidades de Colaboração

1. **Solução de Sessões Concorrentes:** Hermes Agent (#106742) pode servir de blueprint para NanoBot e CoPaw
2. **Security Hardening:** ZeroClaw e CoPaw podem trocar padrões de segurança (shell evasion, SSRF)
3. **Multi-Tenant Patterns:** CoPaw Hub pode informar NullClaw mobile strategy
4. **Provider Abstraction:** NanoBot provider-first architecture pode se beneficiar de ZeroClaw's OIDC

---

*Relatório gerado com base em dados do GitHub de 2026-09-17. Frequência recomendada de atualização: semanal.*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório NanoBot — 16 de setembro de 2026

---

## 1. Panorama do Dia

O NanoBot viveu uma das jornadas mais produtivas dos últimos meses. Foram fechadas **4 PRs** (todas de correção, segurança ou documentação), ao passo que **15 PRs permanecem abertos**, com destaque para um regressão **p1** — a serialização de mensagens por sessão (#5792) — que monopoliza a atenção da equipe. A carga de bugs ativos permanece elevada (9 PRs de correção abertos), indicando uma fase de estabilização pós-release. A atividade da comunidade está moderada, com zero reações e baixa discussão explícita nos PRs, sugerindo um ciclo de revisão técnica interno.

---

## 2. Lançamentos

**Nenhum release formal identificado hoje.**

O repositório apresenta um volume incomum de PRs de correção abertos simultaneamente, o que pode sinalizar que um release está **iminente com um bundle de hotfixes**, ou alternativamente que a base de código está em transição (evidenciado pelo PR #5152 sobre "partial completion" e o #5792 sobre serialização de sessão — ambos tocando o core loop do agente).

> *N/A — sem tags de release ou changelog identificados nos dados disponíveis.*

---

## 3. Progresso do Projeto

| # | PR | Autor | Tipo | Impacto |
|---|----|-------|------|---------|
| [#5791](https://github.com/HKUDS/nanobot/pull/5791) | keep input responsive during agent output | chengyongru | fix, performance | **TUI**: drain gateway output em batches FIFO, sem starvation do input durante atividade do agente |
| [#5756](https://github.com/HKUDS/nanobot/pull/5756) | proxy-clearing fixtures hermetic | fszcd | security, test | **Testes**: corrige fixtures que limpavam apenas variáveis de ambiente, ignorando proxies de sistema (Windows registry, macOS SystemConfiguration) |
| [#5789](https://github.com/HKUDS/nanobot/pull/5789) | refresh README WebUI screenshots | chengyongru | docs | **Docs**: atualiza galeria com novo composer, workbench multi-pane, MCP catalog e Automations |
| [#5782](https://github.com/HKUDS/nanobot/pull/5782) | enforce configured iteration limit | axelray-dev | fix | **Dream**: restaura `maxIterations` independente (default 15) para runs manuais e agendados, evitando stall de até 200 iterações |

**Avanço líquido:** 4 PRs fechados. A correção de responsividade do TUI (#5791) é a mais significativa para a experiência do usuário final. A correção de proxy (#5756) fecha uma brecha de segurança em ambientes corporativos.

---

## 4. Temas Quentes da Comunidade

**Nenhum PR ou issue com comentários ou reações significativos hoje.** Todos os 15 PRs abertos registram `undefined` em comentários e `0` em 👍.

A ausência de discussão pública sugere:

- **Comunidade pequena ou passiva** — baixo engajamento de reviewers externos.
- **Ciclo de desenvolvimento interno** — PRs abertos para integração contínua, não para debate.
- **Ausência de issues criados hoje** — nenhuma issue de usuário foi registrada nos dados.

**Sinal de alerta:** sem feedback externo, a equipe depende exclusivamente de testes automatizados para validar as 9 correções de bugs abertas. O risco de disconnect entre a visão interna e as necessidades reais dos usuários é elevado.

---

## 5. Bugs e Estabilidade

### Prioridade P1 (1)
| # | Bug | Descrição |
|---|-----|-----------|
| [#5792](https://github.com/HKUDS/nanobot/pull/5792) | **Serialize per-session messages** | Race condition no agent loop: dispatch tasks competindo causa entrega de resposta em sessão errada. Instalação de inbox FIFO por sessão para garantir ordem e isolamento. |

### Prioridade P2 (8)
| # | Bug | Área |
|---|-----|------|
| [#5794](https://github.com/HKUDS/nanobot/pull/5794) | Cross-session response delivery | Agente loop — mesma raiz do p1, mas na perspectiva do dispatcher |
| [#5793](https://github.com/HKUDS/nanobot/pull/5793) | `list_dir` ignora diretórios recursivos | Tools — `build`, `dist` e `_IGNORE_DIRS` propagam para subárvores |
| [#5796](https://github.com/HKUDS/nanobot/pull/5796) | `edit_file` remove separador whitespace | Tools — une tokens adjacentes |
| [#5795](https://github.com/HKUDS/nanobot/pull/5795) | `edit_file` perde indentação em fallback edits | Tools — newline final removido + linha em branco extra |
| [#5765](https://github.com/HKUDS/nanobot/pull/5765) | `stream` com string `"false"` treated as truthy | API — compliance OpenAI quebrado |
| [#5766](https://github.com/HKUDS/nanobot/pull/5766) | Cron aceita múltiplos schedule fields conflituosos | Cron tool — silenciosamente descarta campos |
| [#5762](https://github.com/HKUDS/nanobot/pull/5762) | Cron aceita `at` no passado e reporta sucesso | Cron tool — job nunca dispara |
| [#5764](https://github.com/HKUDS/nanobot/pull/5764) | Fallback probes serializadas incorretamente | Provider — requisições concorrentes invadem primary antes do cooldown |

### Observações de padrões
- **3 bugs no cron tool** (#5762, #5766, #5764) indicam que a поверхня de input do cron não foi suficientemente validada.
- **3 bugs no `edit_file`** (#5796, #5795, #5152 parcial) revelam edge cases na manipulação de texto em replacements.
- **2 bugs de concorrência no agent loop** (#5792, #5794) são gravitacionais — afetam a integridade de sessão.

---

## 6. Pedidos de Features e Sinais de Roadmap

| # | Feature | Autor | Área | Status |
|---|---------|-------|------|--------|
| [#5718](https://github.com/HKUDS/nanobot/pull/5718) | OpenRouter native image generation API | kkkhoo | Provider | **Aberta** |
| [#5520](https://github.com/HKUDS/nanobot/pull/5520) | Langfuse tracing for Codex | akinolur | Provider | **Aberta** |
| [#5652](https://github.com/HKUDS/nanobot/pull/5652) | Signed direct delivery webhook | kidraohl123 | Gateway | **Aberta** |

**Análise de sinais de roadmap:**

- **Provider-first**: 2 das 3 features são sobre providers (OpenRouter, Codex). A equipe está investindo em observabilidade (Langfuse) e expansão de APIs (OpenRouter image gen). Isso sugere que a estratégia de mercado prioriza **integrações de provider** sobre features de UX.
- **Webhook autenticado**: #5652 é a única feature com componente de infraestrutura de integração, mirando CI/monitoring/billing — indica interesse em expandir o NanoBot como **backend de automação**, não apenas assistente.
- **Ausência de features UI/UX**: nenhuma feature aberta de interface. O roadmap parece orientado a **infraestrutura e backend**.

---

## 7. Resumo de Feedback dos Usuários

**Sem feedback direto de usuários nos dados disponíveis.**

Pressupostos baseados nos bugs reportados:

| Dor inferida | Bug relacionado |
|---|---|
| Sessões se "misturam" | #5792, #5794 |
| Arquivos edittados ficam com indentação quebrada | #5795, #5796 |
| Scheduled tasks não executam | #5762 |
| `stream: false` quebra streaming em clients externos | #5765 |
| Timeout em NIM não dispara failover | #5769 |

**Conclusão:** os bugs mais críticos para o usuário são os de **concorrência de sessão** (#5792, #5794) — experiência degrade significativamente quando respostas aparecem na sessão errada.

---

## 8. Backlog que Merece Atenção

| # | Idade aprox. | Item | Motivo da atenção |
|---|-------------|------|-------------------|
| [#5152](https://github.com/HKUDS/nanobot/pull/5152) | ~50 dias | Partial completion results no subagent | Aberto desde **28/jul** — 50 dias sem merge. Afeta how runners mantêm parent turns abertos. |
| [#5379](https://github.com/HKUDS/nanobot/pull/5379) | ~34 dias | Preserve full consolidation input | Aberto desde **13/ago** — memory consolidation é feature crítica para long-running agents. |
| [#5520](https://github.com/HKUDS/nanobot/pull/5520) | ~23 dias | Langfuse tracing for Codex | Aberto há quase 1 mês. Se CodeX é provider estratégico, tracing é essencial para production readiness. |

> **⚠️ Alerta de saúde do projeto:** #5152 está aberto há ~50 dias e lida com a lógica central de como o agente comunica completude. Demoras prolongadas em PRs de regressão/core indicam risco de acumulação técnica (*technical debt*) e possibilidade de que o fix re-introduza a mesma regressão em outra forma.

---

## Scorecard de Saúde do Projeto

| Dimensão | Status | Observação |
|----------|--------|------------|
| Atividade | 🟡 Moderada | 15 PRs abertos, 4 fechados em 1 dia |
| Estabilidade | 🔴 Frágil | 1 p1, 8 p2 bugs simultâneos — regressões no agent loop |
| Engajamento | ⚪ Baixo | Zero reações/comentários na comunidade |
| Backlog | 🔴 Atenção urgente | PR core (#5152) estagnado há 50 dias |
| Features | 🟢 Progressando | 3 features em pipeline, foco em providers |
| Segurança | 🟡 Correção em curso | Fix de proxy fixturas fechado, nenhum CVE |

**Veredicto geral:** O projeto está em **modo reativo** — a equipe está bem alinhada na correção de bugs, mas o volume de correções simultâneas (9 bugs, 2 deles p1/p2 críticos de concorrência) e a estagnação de um PR core indicam pressão sobre a base de código. A ausência de feedback externo levanta dúvidas sobre se as prioridades de desenvolvimento refletem as necessidades reais dos usuários.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent
## NousResearch/hermes-agent — 2026-09-17

---

## 1. Panorama do Dia

O projeto Hermes Agent apresenta **atividade extraordinária** nas últimas 24h, com 50 issues e 50 PRs atualizados, embora nenhuma nova release tenha sido publicada. A grande maioria das issues (49 de 50) foi fechada, indicando uma sprint massiva de encerramento de pendências. Apenas **1 issue permanece aberta** — #112639, uma RFC arquitetural sobre execução em velocidade de script. No фронте de PRs, 47 permanecem abertos com destaque para a PR #106742 (P1), que propõe uma reformulação arquitetural significativa do sistema de sessões. O ambiente reflete um momento de maturação do código com foco intenso em estabilidade, segurança e correções de bugs críticos.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

O projeto encontra-se em período de desenvolvimento ativo sem tagged releases recentes. Mantenha-se atento ao repositório para anúncios de novos lançamentos que deverão incorporar as múltiplas correções e features em pipeline.

---

## 3. Progresso do Projeto

### PRs em Destaque (fechadas/merged ou em estado avançado)

| PR | Título | Impacto |
|---|---|---|
| **#106742** | One gateway owns every local session | 🔴 **P1** — Reforma arquitetural unificando sessões entre CLI, TUI, Desktop, API, ACP, bots e cron |
| **#113384** | feat(bot-mode): edit existing group room members | Gerenciamento de membros em grupos de bots via UI |
| **#113382** | fix(bot-mode): Group Chat rooms label members by connection/profile | Identificação correta de bots em salas group chat |
| **#113552** | web dashboard: state.db reconcile worker segfault fix | Correção de crash no dashboard durante shutdown |
| **#113420** | fix(bot-mode): group-chat renders code blocks and MEDIA correctly | UX — rendering adequado de código e mídia em grupos |
| **#111002** | perf(desktop): reduce Windows startup I/O | ⭐ Redução de ~122ms no tempo de interação no Windows ARM64 |

### Avanços Técnicos Observados

- **Arquitetura de Gateway Unificado**: A PR #106742 busca eliminar sessões duplicadas entre componentes, convergindo para um único gateway que gerencia todas as sessões locais.
- **Segurança Reforçada**: Múltiplas PRs (#113458, #113459, #113545) tratam detecção e блокуamento de mutações de configuração em tempo de execução.
- **Performance Windows**: Correções de I/O e verificação de antivirus (#111002).
- **MCP Catalog**: Adição do provedor `satohub` para MCP remoto (#113540).

---

## 4. Temas Quentes da Comunidade

### Issue com Maior Engajamento

**#112639 — RFC: script-speed computer use via semantic state, runahead execution, and autoresearch** (8 comentários)  
🔗 https://github.com/NousResearch/hermes-agent/issues/112639  
📌 **Resumo**: Proposta para tornar a interação com o computador tão rápida quanto um script compilado, eliminando componentes ociosos. O autor propõe estado semântico, execução especulativa e auto-pesquisa.  
**Análise**: Esta RFC representa uma visão de longo prazo para performance do agente. Os 8 comentários indicam interesse da comunidade em otimização de latência.

### Issues Secundárias com Alto Engajamento (7 comentários cada)

**#96570 — Group chat sessions: stored system prompt is null every turn**  
🔗 https://github.com/NousResearch/hermes-agent/issues/96570  
🚨 Impacto: Sessions reconstruídas do zero, prefix cache sempre erra — performance degradada em group chats.

**#93618 — Disappearing chats, bot chats not updating**  
🔗 https://github.com/NousResearch/hermes-agent/issues/93618  
🚨 Impacto: Problemas de visibilidade e atualização de chats de bots, confusão de sessões.

### Padrões de Demanda Identificados

1. **Bot Mode Group Chat**: ~15+ issues relacionadas a group chats, indicando que esta é a área com maior adoção e, consequentemente, maior superfície de bugs.
2. **Sessões e Estado**: Múltiplos issues com tag `sweeper:risk-session-state` indicam risco histórico neste domínio.
3. **Configuração de Modelos**: Usuários solicitam controle granular sobre reasoning effort e configurações de provider.

---

## 5. Bugs e Estabilidade

### Por Severidade

#### 🔴 P1 (Crítico)
| Issue | Título | Link |
|---|---|---|
| #104079 | Bug: Desktop Bot Chat double-writes every message after context compression | [#104079](https://github.com/NousResearch/hermes-agent/issues/104079) |
| #106742 | One gateway owns every local session (arch/breaking) | [#106742](https://github.com/NousResearch/hermes-agent/pull/106742) |
| #113542 | fix(agent): evict images at provider limits (cache prefix) | [#113542](https://github.com/NousResearch/hermes-agent/pull/113542) |

#### 🟠 P2 (Alto)
| Issue | Título | Link |
|---|---|---|
| #105247 | Group chat: harvest window drops late replies after busy-extended timeouts | [#105247](https://github.com/NousResearch/hermes-agent/issues/105247) |
| #97051 | `message_agent` reports delivery failure for already delivered messages | [#97051](https://github.com/NousResearch/hermes-agent/issues/97051) |
| #97373 | Desktop group chat truncates messages at ~1.1KB | [#97373](https://github.com/NousResearch/hermes-agent/issues/97373) |
| #99646 | Desktop Bot Mode fails to stream responses, hangs on sleep/wake | [#99646](https://github.com/NousResearch/hermes-agent/issues/99646) |
| #95307 | Cron finite jobs discarded as "Fire claim ownership lost" | [#95307](https://github.com/NousResearch/hermes-agent/issues/95307) |
| #102157 | Message typed in Bot A persisted & answered by Bot B | [#102157](https://github.com/NousResearch/hermes-agent/issues/102157) |
| #98321 | Fresh Bot Chat regresses answer quality vs regular sessions | [#98321](https://github.com/NousResearch/hermes-agent/issues/98321) |

#### 🟡 P3 (Médio)
| Issue | Título | Link |
|---|---|---|
| #112639 | RFC: script-speed computer use | [#112639](https://github.com/NousResearch/hermes-agent/issues/112639) |
| Múltiplas | Group chat UX issues (truncation, activity visibility) | Issues listadas |

### Bugs Críticos em Foco

1. **Double-write em Bot Chat (#104079)**: Mensagens duplicadas no state.db após compressão de contexto — risco de corrupção de dados.
2. **Cross-profile DB write (#102157)**: Mensagem de um bot persiste no banco de outro — **violação de isolamento de dados**.
3. **Stream hanging on sleep/wake (#99646)**: Bot Mode trava após suspend/resume — usabilidade severamente impacted.
4. **Prefix cache image eviction (#113542)**: Limite fixo de 3 imagens causa degradação de cache em sessões com visão frequente.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Recentemente Solicitadas

| PR | Título | Tags | Link |
|---|---|---|---|
| #113384 | Edit group room members from settings | feature, comp/desktop | [#113384](https://github.com/NousResearch/hermes-agent/pull/113384) |
| #101394 | Hermes Remote - Mobile PWA for Bot Mode | feature, innovation | [#101394](https://github.com/NousResearch/hermes-agent/issues/101394) |
| #105740 | Visualization of Session per Bot | feature, UX | [#105740](https://github.com/NousResearch/hermes-agent/issues/105740) |
| #97388 | Live per-task status in group chat UI | feature, UX | [#97388](https://github.com/NousResearch/hermes-agent/issues/97388) |
| #113540 | Add satohub MCP server (onchain agent index) | tool/mcp, feature | [#113540](https://github.com/NousResearch/hermes-agent/pull/113540) |
| #112947 | Make native embed budget configurable | tool/vision, feature | [#112947](https://github.com/NousResearch/hermes-agent/pull/112947) |

### Sinais de Roadmap

1. **Mobile/PWA**: Demanda clara (#101394) por controle remoto de bots via dispositivos móveis.
2. **UX de Monitoramento**: Múltiplas solicitações para painel de atividade em tempo real de bots em group chats.
3. **MCP Ecosystem**: Expansão do catálogo MCP com provedores especializados (satohub).
4. **Configurabilidade**: Usuários solicitam controle sobre embedding budgets e reasoning effort.

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais Reportadas

| Categoria | Descrição | Severidade |
|---|---|---|
| **Confiabilidade de Sessões** | "Session not found" ao retomar conversas, null system prompts, reconstrução de sessões | 🔴 Alta |
| **Group Chat Imatura** | Perda de mensagens tardias, truncamento, falha em renderizar código/mídia | 🟠 Média-Alta |
| **Bot Mode UI** | Visibilidade de sessões, atividade de bots opaca, confusão de identidade | 🟡 Média |
| **Performance Windows** | Inicialização lenta, I/O excessivo, antivirus scans | 🟠 Média-Alta |
| **Integração de Modelos** | Falta de controle sobre reasoning effort, provider config inconsistente | 🟡 Média |

### Cenários de Uso Reportados

1. **Group Chat com Múltiplos Bots**: Usuários tentam coordenar múltiplos bots especializados em rooms — UX atual é "opaca demais".
2. **Bot Mode como Interface Principal**: Usuários dependem de bots como `masterbot` para fluxo de trabalho diário — falhas de stream e persistência são críticas.
3. **Plataformas Híbridas**: Combinação de Desktop, Telegram e sessões remotas — problemas de roteamento e identidade.
4. **Automação com Cron**: Jobs cron com delivery para bot-chat falham silenciosamente.

### Indicadores de Satisfação

- **Atividade intensa**: 50 issues + 50 PRs em 24h indica comunidade ativa e engajada.
- **Tags `needs-repro`**: Muitos bugs têm dificuldade de reprodução, sugerindo comportamento não-determinístico.
- **Feature requests UX**: Várias solicitações para melhorar visibilidade/monitoramento — indica adoção em produção.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Atrasadas

| Issue | Título | Criado | Atualizado | Link |
|---|---|---|---|---|
| #89119 | Bug: agent init fails in group chat - No LLM provider configured | 2026-08-18 | 2026-09-16 | [#89119](https://github.com/NousResearch/hermes-agent/issues/89119) |
| #89109 | Bug: Bot Mode agent init fails in group chat (duplicate) | 2026-08-18 | 2026-09-16 | [#89109](https://github.com/NousResearch/hermes-agent/issues/89109) |
| #91871 | Bug: No way to configure model reasoning effort for bot | 2026-08-21 | 2026-09-16 | [#91871](https://github.com/NousResearch/hermes-agent/issues/91871) |
| #93618 | Disappearing chats, bot chats not updating | 2026-08-24 | 2026-09-16 | [#93618](https://github.com/NousResearch/hermes-agent/issues/93618) |
| #94609 | Bot chat resume fails across profiles | 2026-08-25 | 2026-09-16 | [#94609](https://github.com/NousResearch/hermes-agent/issues/94609) |
| #98321 | Fresh Bot Chat regresses answer quality | 2026-08-30 | 2026-09-16 | [#98321](https://github.com/NousResearch/hermes-agent/issues/98321) |

### Issues Críticas sem Merge Associado

| Issue | Status | Prioridade | Link |
|---|---|---|---|
| #99646 — Stream hangs on sleep/wake | Aberta | P2 | [#99646](https://github.com/NousResearch/hermes-agent/issues/99646) |
| #102157 — Cross-profile DB write | Aberta | P2 | [#102157](https://github.com/NousResearch/hermes-agent/issues/102157) |
| #104079 — Double-write after compression | Aberta | P1 | [#104079](https://github.com/NousResearch/hermes-agent/issues/104079) |

### Recomendação de Priorização

1. **Imediato**: Resolver double-write (#104079) e cross-profile write (#102157) — risco de corrupção/perda de dados.
2. **Curto Prazo**: Corrigir stream hangs (#99646) e truncation (#97373) — impacta experiência diária.
3. **Médio Prazo**: Padronizar session ownership com #106742 — base para estabilidade futura.
4. **Longo Prazo**: RFC #112639 — visão arquitetural para performance de scripts.

---

## Métricas Resumidas

| Indicador | Valor | Tendência |
|---|---|---|
| Issues ativas (24h) | 1 | ✅ Baixa |
| Issues fechadas (24h) | 49 | ✅ Alta |
| PRs abertos | 47 | ⚠️ Elevado |
| PRs merged/fechados | 3 | ⚠️ Necessita monitoramento |
| Novas releases | 0 | ➖ |
| Issues P1 em aberto | ~2 | ⚠️ Crítico |
| Issues P2 em aberto | ~10+ | ⚠️ Alto |
| Security PRs | 3 | ✅ Positivo |

---

*Relatório gerado automaticamente com base em dados do GitHub para NousResearch/hermes-agent em 2026-09-17.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# 📊 Relatório do Projeto PicoClaw — 2026-09-17

---

## 1. Panorama do Dia

O projeto PicoClaw apresenta **atividade moderada** nesta quarta-feira. Foi registrada **1 issue fechada** e **3 PRs merged/fechados**, indicando foco em stabilização e correções — especialmente no canal Telegram. Nenhum release foi publicado nas últimas 24h, mas a manutenção está ativa com correções sendo incorporadas ao codebase. A distribuição de PRs sugere priorização de bugs de usabilidade sobre novas funcionalidades.

---

## 2. Lançamentos

**Nenhum release nas últimas 24h.** O projeto não publicou novas versões desde o período analisado. Mantenha acompanhamento em [sipeed/picoclaw/releases](https://github.com/sipeed/picoclaw/releases) para notificações de novos milestones.

---

## 3. Progresso do Projeto

Três PRs foram fechados hoje, todos com foco em **melhorias de estabilidade e UX**:

| PR | Tipo | Canal | Impacto |
|----|------|-------|---------|
| [#3357](https://github.com/sipeed/picoclaw/pull/3357) | Bugfix | Telegram | Respostas por reply agora funcionam como menções implícitas em grupos com `mention_only: true` |
| [#3356](https://github.com/sipeed/picoclaw/pull/3356) | Bugfix | Telegram | Documentos re-anexados corretamente ao responder/quotar mensagens de arquivo |
| [#1780](https://github.com/sipeed/picoclaw/pull/1780) | Enhancement | QQ | Parâmetros de estabilidade de conexão agora configuráveis (reconnect, retry, rate limits) |

**Destaque:** O PR [#3357](https://github.com/sipeed/picoclaw/pull/3357) resolve um problema significativo de **continuidade conversacional** — usuários que naturalmente usavam "reply" para dar seguimento a respostas do bot estavam sendo ignorados.

---

## 4. Temas Quentes da Comunidade

### Issue em Destaque

**[#3343](https://github.com/sipeed/picoclaw/issues/3343)** — *Bug: Tool feedback animation editou mensagem do Telegram indefinidamente*

- **Gravidade:** Alta — gerou **+228.000 chamadas** à API do Telegram
- **Status:** Fechada
- **Resumo:** Após uma rodada de agente falhar, a animação de feedback continuou chamando `editMessageText` a cada 3 segundos por dias, causando rate limiting server-side
- **Comentários:** 4

**Análise:** Este bug expõe uma falha crítica no ciclo de vida de interações — não há mecanismo de "circuit breaker" para animações quando o agente para de progredir. A correção provavelmente envolve timeout de animação e detecção de agentes estagnados.

---

## 5. Bugs e Estabilidade

| Severidade | Qtd | Exemplos |
|------------|-----|----------|
| 🔴 Crítica | 0 | — |
| 🟠 Alta | 1 | [#3343](https://github.com/sipeed/picoclaw/issues/3343) — Loop infinito de edits no Telegram |
| 🟡 Média | 2 | [#3356](https://github.com/sipeed/picoclaw/pull/3356) — Docs não re-anexados em quotes; [#3357](https://github.com/sipeed/picoclaw/pull/3357) — Replies ignorados em grupos |
| 🟢 Baixa | 0 | — |

**Tendencia:** Correções de bugs no Telegram indicam que o canal está em fase ativa de estabilização após recent changes.

---

## 6. Pedidos de Features e Sinais de Roadmap

### PR Aberto

**[#3344](https://github.com/sipeed/picoclaw/pull/3344)** — *Build Remote Agent phone pairing (protocol `gbr/1`)*

- **Autor:** LinespottingPrivate
- **Tipo:** Nova feature
- **Funcionalidade:**
  - Adapter para pareamento de telefone com agente desktop
  - Suporte a QR code e código de 8 caracteres
  - Endereço fixo `http://127.0.0.1:8788` ou stdio

**Indicador de roadmap:** A feature sugere foco em **interoperalidade entre dispositivos** e cenários de "spectating" (espectador), alinhando-se com casos de uso de agentsremotos.

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Dor | Manifestação | Status |
|-----|--------------|--------|
| **Quebra de conversação** | Replies ignorados em grupos | ✅ Corrigido em [#3357](https://github.com/sipeed/picoclaw/pull/3357) |
| **Perda de contexto** | Documentos não preservados em quotes | ✅ Corrigido em [#3356](https://github.com/sipeed/picoclaw/pull/3356) |
| **Spam de API** | Loop infinito de edits após falha | ✅ Fechado em [#3343](https://github.com/sipeed/picoclaw/issues/3343) |
| **Instabilidade QQ** | Reconexões imprevisíveis | ✅ Parametrizado em [#1780](https://github.com/sipeed/picoclaw/pull/1780) |

**Síntese:** Usuários enfrentam problemas de **confiabilidade em multi-canal** (Telegram + QQ) e **UX conversacional** (continuidade de replies/quotes). Todas as dores reportadas já possuem correções merged ou em avaliação.

---

## 8. Backlog que Merece Atenção

| Item | Tipo | Idade | Motivo de Atenção |
|------|------|-------|-------------------|
| [#3344](https://github.com/sipeed/picoclaw/pull/3344) | Feature | ~25 dias | Pareamento remoto — sem comentários ainda, pode precisar de revisão |
| PRs com tag `stale` | Misc | Variável | 3 dos 4 PRs recentes estão `stale`, indicando possível falta de mantainer response |

**Recomendação:** Ativar stale bot lifecycle — PRs/Issues `stale` sem activity devem ser triaged ou fechados para evitar acúmulo de backlog.

---

## Métricas Resumidas (24h)

| Métrica | Valor |
|---------|-------|
| Issues abertas/ativas | 0 |
| Issues fechadas | 1 |
| PRs abertos | 1 |
| PRs merged/fechados | 3 |
| Releases | 0 |
| Total comentários | 4 |

**Índice de Saúde:** 🟢 **Bom** — Atividade consistente, bugs críticos fechados, nenhum release mas correções sendo integradas ao main branch.

---

*Relatório gerado automaticamente com base em dados do GitHub. Última atualização: 2026-09-17.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

Sem atividade nas últimas 24 horas.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do Projeto CoPaw (QwenPaw) — 2026-09-17

---

## 1. Panorama do Dia

O projeto CoPaw/QwenPaw demonstra **alta atividade de desenvolvimento** em 16 de setembro de 2026, com 25 issues e 36 PRs atualizados nas últimas 24 horas. A equipe mantenedora fechou 12 issues e mergeou/fechou 12 PRs, indicando um ritmo intenso de resolução de bugs e merge de features. O foco principal do dia recaiu sobre **estabilidade do console e fluxos SSE** (com 4 issues separadas sobre problemas relacionados a payloads nulos e freeze de streaming), **melhorias no Creator plugin**, e **avanços no Hub multi-tenant** que está sendo preparado para a versão 2.2.0. Não houveram novos lançamentos oficiais hoje, mantendo o último release estável em v2.2.1.

---

## 2. Lançamentos

**Nenhum novo release registrado nas últimas 24 horas.**

O último release estável continua sendo **v2.2.1** (Windows desktop e backend). A versão v2.2.2 parece estar em desenvolvimento ativo com base nas correções sendo mergeadas.

> **Link:** https://github.com/agentscope-ai/QwenPaw/releases

---

## 3. Progresso do Projeto

### PRs Mergeados/Fechados Hoje

| PR | Descrição | Impacto |
|----|-----------|---------|
| [#7120](https://github.com/agentscope-ai/QwenPaw/pull/7120) | **Shell evasion checks habilitadas por padrão** | 🔒 Segurança — todas as 7 checagens de evasão shell agora ativas por padrão |
| [#7783](https://github.com/agentscope-ai/QwenPaw/pull/7783) | **ACP runner: elimina duplicação e fragmentação de replies** | ✅ UX — respostas de delegação externa mais limpas |
| [#6569](https://github.com/agentscope-ai/QwenPaw/pull/6569) | **Suppress EIO/EPIPE em TTY detachado** | 🐛 Estabilidade — elimina erros de print após terminal fechar |
| [#7805](https://github.com/agentscope-ai/QwenPaw/pull/7805) | **Match settings menu font weight** | 🎨 UI — consistência visual |
| [#4171](https://github.com/agentscope-ai/QwenPaw/pull/4171) | **Memory-distill plugin com title-diffing** | 🧠 Feature — ~92% redução de ruído em consolidação de memória |

### PRs Abertos com Alto Impacto

| PR | Descrição | Status |
|----|-----------|--------|
| [#7779](https://github.com/agentscope-ai/QwenPaw/pull/7779) | **Hub: model gateway + member governance + usage dashboard** | 🚀 Roadmap 2.2.0 |
| [#7790](https://github.com/agentscope-ai/QwenPaw/pull/7790) | **Unified chat workbench shell** | ✨ Console improvement |
| [#7785](https://github.com/agentscope-ai/QwenPaw/pull/7785) | **Realtime voice chat** | 🎤 Voice integration |
| [#7725](https://github.com/agentscope-ai/QwenPaw/pull/7725) | **Replace blocking watchfiles com threaded polling** | 🐛 Critical — corrige freeze do workspace |
| [#6776](https://github.com/agentscope-ai/QwenPaw/pull/6776) | **Self-heal dead Playwright driver** | 🐛 Critical — "die once, dead forever" corrigido |

---

## 4. Temas Quentes da Comunidade

### Issue #7318 — QwenPaw Hub Multi-tenant (29 comentários)
**Título:** "QwenPaw Hub, the multi-tenant edition, is coming in 2.2.0: what should we build next?"  
**Link:** https://github.com/agentscope-ai/QwenPaw/issues/7318

**Análise:** Esta é de longe a issue com maior engajamento, acumulando 29 comentários e 4 reações. Indica uma **demanda clara da comunidade por capacidades multi-usuário**:

- Usuários querem rodar QwenPaw em equipes, não apenas como assistente pessoal
- Features solicitadas incluem: admin-managed skills, multi-user access, organization credentials
- O PR [#7779](https://github.com/agentscope-ai/QwenPaw/pull/7779) já implementa partes do Hub model gateway

**Sinal de roadmap:** Hub multi-tenant é prioritário para 2.2.0.

---

### Issue #7678 — spawn subAgent Timeout Bug (9 comentários)
**Título:** "spawn subAgent: todas as tarefas falham com timeout"  
**Link:** https://github.com/agentscope-ai/QwenPaw/issues/7678

**Análise:** Relatado pelo usuário `xiaohushi512`, este bug afeta a versão 2.2.0 no Windows. Todas as tarefas que usam `spawn subAgent` falham independentemente do timeout configurado. O usuário reportou investigação com logs de debugging, indicando frustração significativa.

**Severidade:** Alta — impacta funcionalidade core de agents.

---

### Issue #7722 — Memory Exhaustion em 3 Caminhos (5 comentários)
**Título:** "Memory exhaustion compounds through three paths"  
**Link:** https://github.com/agentscope-ai/QwenPaw/issues/7722

**Análise:** Bug técnico detalhado que identifica **três caminhos distintos** de exaustão de memória:
1. Stream buffers ilimitados
2. Keep-alive instance stacking
3. Doom-loop gate evasion

Fornece repro reprodutível e fixes mínimos propostos. Excelente reporte técnico da comunidade.

---

## 5. Bugs e Estabilidade

### 🔴 Críticos (Impacto Alto)

| Issue | Descrição | Link |
|-------|-----------|------|
| #7725 | **Workspace freeze com watchfiles** — abertura do file browser congela servidor inteiro | [Link](https://github.com/agentscope-ai/QwenPaw/issues/7725) |
| #6776 | **Playwright driver "die once, dead forever"** — conexão quebrada não se reconstrói | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6776) |
| #7722 | **Memory exhaustion em 3 caminhos** — container OOM em ~1MB/s | [Link](https://github.com/agentscope-ai/QwenPaw/issues/7722) |
| #7678 | **spawn subAgent timeout universal** — funcionalidade core quebrada | [Link](https://github.com/agentscope-ai/QwenPaw/issues/7678) |

### 🟡 Moderados (Console/UI)

| Issue | Descrição | Link |
|-------|-----------|------|
| #7815 | **Console não recupera de lazy page chunk load failure** | [Link](https://github.com/agentscope-ai/QwenPaw/issues/7815) |
| #7814 | **SSE `_strip_event_headlines` emite payload `null` bare** | [Link](https://github.com/agentscope-ai/QwenPaw/issues/7814) |
| #7813 | **Console stream freeze com payload null literal** | [Link](https://github.com/agentscope-ai/QwenPaw/issues/7813) |
| #7812 | **Slash commands no startup usam sessão errada** | [Link](https://github.com/agentscope-ai/QwenPaw/issues/7812) |

### 🟢 Corrigidos/Closed Recentemente

| Issue | Status | Link |
|-------|--------|------|
| #7799 | **Console image display** — corrigido após report | [Link](https://github.com/agentscope-ai/QwenPaw/issues/7799) |
| #7689 | **PDF blocks em multimodal endpoints** — fechado após fix | [Link](https://github.com/agentscope-ai/QwenPaw/issues/7689) |
| #7726 | **ACP trusted fallback** — corrigido | [Link](https://github.com/agentscope-ai/QwenPaw/issues/7726) |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Mais Solicitadas

| # | Feature | Comentários | Link |
|---|---------|-------------|------|
| 1 | **QwenPaw Hub Multi-tenant** | 29 | [Issue #7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) |
| 2 | **Realtime Voice Chat** | — | [PR #7785](https://github.com/agentscope-ai/QwenPaw/pull/7785) |
| 3 | **Unified Chat Workbench Shell** | — | [PR #7790](https://github.com/agentscope-ai/QwenPaw/pull/7790) |
| 4 | **Chat Mode Selector (Discuss vs Execute)** | 1 | [Issue #7801](https://github.com/agentscope-ai/QwenPaw/issues/7801) |
| 5 | **Tool Approval i18n Support** | 1 | [Issue #7809](https://github.com/agentscope-ai/QwenPaw/issues/7809) |
| 6 | **Task Completion Notifications (UI)** | 1 | [Issue #7800](https://github.com/agentscope-ai/QwenPaw/issues/7800) |
| 7 | **Channel Params to MCP Tools** | 3 | [Issue #7650](https://github.com/agentscope-ai/QwenPaw/issues/7650) |
| 8 | **Clean Output (no temp files)** | 2 | [Issue #7797](https://github.com/agentscope-ai/QwenPaw/issues/7797) |
| 9 | **Feishu p2p message improvement** | 1 | [Issue #7817](https://github.com/agentscope-ai/QwenPaw/issues/7817) |

### Análise de Sinais de Roadmap

**Confirmado para 2.2.0:**
- QwenPaw Hub multi-tenant (model gateway, member governance)
- Realtime voice chat

**Possível para próximas versões:**
- Discuss vs Execute mode selector (UX muito solicitada)
- i18n para tool approvals
- Channel lazy loading ([PR #7807](https://github.com/agentscope-ai/QwenPaw/pull/7807) — resolve 5.8s de import do Feishu SDK)

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais Identificadas

**1. Problemas de Timeout e Performance**
> *"任务一旦进行spawn subAgent处理，没有一个执行的下去，全都任务失败，全都timeout失败了"* — Issue #7678
- subAgent timeout é problema recorrente, impacta fluxos de trabalho

**2. Context Window Management**
> *"每次都爆表直接输入271k，明明设置了131k，0.5就压缩，但是不管用"* — Issue #7810
- Usuários não entendem como funciona a configuração de limite de contexto
- Compressão de contexto não funciona conforme esperado

**3. Console UX**
- Imagens desaparecem após streaming ([#7799](https://github.com/agentscope-ai/QwenPaw/issues/7799))
- Lazy page failures não recuperam ([#7815](https://github.com/agentscope-ai/QwenPaw/issues/7815))
- Notificações de task completion invisíveis em monitores grandes ([#7800](https://github.com/agentscope-ai/QwenPaw/issues/7800))

**4. Deployment Complexidade**
> *"云端部署后如何配置模型"*, *"绑定GitHub账号后账号活跃度要求"* — Issue #7768
- Documentação de deployment cloud é insuficiente
- Processos de ativação de conta não claros

### Feedback Positivo Implícito

- Comunidade ativa em reports técnicos detalhados (ex: #7722 com 3 paths de memory exhaustion)
- Contributors novos estão enviando PRs de primeira vez (5 PRs com tag `first-time-contributor` hoje)
- Reatividade da equipe: bugs críticos recebendo atenção em <24h

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta há >7 dias

| Issue | Título | Criado | Comentários | Link |
|-------|--------|--------|-------------|------|
| #6472 | JSON file line numbers missing após upgrade | 2026-07-26 | 2 | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6472) |
| #7406 | Theming support request | 2026-08-30 | 1 | [Link](https://github.com/agentscope-ai/QwenPaw/issues/7406) |
| #7650 | Channel params para MCP tools | 2026-09-09 | 3 | [Link](https://github.com/agentscope-ai/QwenPaw/issues/7650) |

### Issues com sinal de "wontfix" ou precisam triagem

| Issue | Título | Label | Link |
|-------|--------|-------|------|
| #7650 | Channel params to MCP tools | `wontfix` ? | [Link](https://github.com/agentscope-ai/QwenPaw/issues/7650) |
| #7804 | Enhancement "management" | vaga | [Link](https://github.com/agentscope-ai/QwenPaw/issues/7804) |

### PRs com Status "Under Review" há >3 dias

| PR | Título | Criado | Link |
|----|--------|--------|------|
| #4171 | Memory-distill tool plugin | 2026-05-10 | [Link](https://github.com/agentscope-ai/QwenPaw/pull/4171) |
| #7637 | QwenPaw-Data app 0.3.0 | 2026-09-08 | [Link](https://github.com/agentscope-ai/QwenPaw/pull/7637) |
| #7057 | User-local bin PATH | 2026-08-15 | [Link](https://github.com/agentscope-ai/QwenPaw/pull/7057) |
| #7382 | AgentScopeRuntimeWebUI stabilization | 2026-08-28 | [Link](https://github.com/agentscope-ai/QwenPaw/pull/7382) |

---

## Métricas Resumidas do Dia

| Métrica | Valor |
|---------|-------|
| Issues ativas | 13 |
| Issues fechadas | 12 |
| PRs abertos | 24 |
| PRs merged/fechados | 12 |
| Releases | 0 |
| Issue com maior engajamento | #7318 (29 comentários) |
| Bugs críticos abertos | 4 |
| Features em PR aberto | 7 |
| First-time contributors (PRs) | 5 |

---

**Saúde Geral do Projeto:** 🟢 **Estável com alta atividade** — O projeto demonstra vigoroso ciclo de desenvolvimento com muitos bugs sendo corrigidos e features sendo implementadas ativamente. A equipe responde rapidamente a reports críticos, mas há backlog de PRs "Under Review" que precisa de atenção para manter contributors engajados.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-09-17

---

## 1. Panorama do Dia

O projeto ZeroClaw apresenta **alta atividade** em 17 de setembro de 2026, com 18 issues atualizadas e 50 PRs no período de 24 horas. Não houve lançamentos hoje, mas a equipe demonstra ritmo intenso de desenvolvimento com 2 PRs merged/fechados e 48 abertos. Observa-se foco significativo em **segurança** (SSRF hardening, OIDC token verification, SQLite storage safety), **estabilidade de canais** (Telegram, Mattermost, Sendblue) e **experiência do usuário** (context compaction, texto editing no ZeroCode). A grande maioria dos PRs abertos são de tamanho XL ou M, indicando funcionalidades substanciais em desenvolvimento.

---

## 2. Lançamentos

**Nenhum release nas últimas 24 horas.**

O projeto está em período ativo de desenvolvimento sem publicações formais de versão. Recomenda-se monitorar issues marcadas com `status:accepted` e `priority:p1` para identificar candidatos a próxima release.

---

## 3. Progresso do Projeto

### PRs Recentemente Fechados/Mergidos

| # | Título | Tipo | Tamanho | Link |
|---|--------|------|---------|------|
| #10896 | Pin compile-job runner labels instead of reading fmt outputs | perf(ci) | M | [PR #10896](https://github.com/zeroclaw-labs/zeroclaw/pull/10896) |

**Análise:** O PR #10896 otimiza o pipeline de CI ao eliminar dependência de job para leitura de labels de runner. A mudança evita que 11 jobs compile-heavy precisem declarar `needs: [fmt]`, reduzindo waits e melhorando paralelismo.

### PRs Abertos em Estágio Avançado (comentários/revisões)

| # | Título | Tamanho | Risco | Link |
|---|--------|---------|-------|------|
| #9420 | fix(anthropic): support stored OAuth profiles | XL | high | [PR #9420](https://github.com/zeroclaw-labs/zeroclaw/pull/9420) |
| #9713 | feat(runtime): expose token accounting on history-trim events | XL | medium | [PR #9713](https://github.com/zeroclaw-labs/zeroclaw/pull/9713) |
| #10214 | feat(log): add entry-count rotation and multi-segment log queries | XL | high | [PR #10214](https://github.com/zeroclaw-labs/zeroclaw/pull/10214) |
| #10823 | feat(rpc): add config/set-many for atomic batch config writes | M | high | [PR #10823](https://github.com/zeroclaw-labs/zeroclaw/pull/10823) |

**Avançosnotáveis:**
- **#10903** ([fix(multimodal): keep tool-result images live](https://github.com/zeroclaw-labs/zeroclaw/pull/10903)) aborda diretamente o bug #10885, mantendo imagens de resultados de tools vivas durante o turn do usuário
- **#10835** ([fix(memory): reject unsafe SQLite storage entries](https://github.com/zeroclaw-labs/zeroclaw/pull/10835)) implementa validação de segurança contra symlink attacks em bancos SQLite
- **#10860** ([fix(providers): keep non-image data-URI markers](https://github.com/zeroclaw-labs/zeroclaw/pull/10860)) corrige falha de validação que permitia strings marker-shaped em tool outputs

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Atividade (comentários)

| # | Título | Comentários | Prioridade | Link |
|---|--------|-------------|------------|------|
| #10885 | Tool-returned images disappear after unrelated tool call | 4 | P2 | [Issue #10885](https://github.com/zeroclaw-labs/zeroclaw/issues/10885) |
| #9464 | Anthropic stored-profile OAuth alias contract | 4 | P1 | [Issue #9464](https://github.com/zeroclaw-labs/zeroclaw/issues/9464) |
| #9511 | Surface diff-aware Semgrep findings as PR comment | 3 | P2 | [Issue #9511](https://github.com/zeroclaw-labs/zeroclaw/issues/9511) |
| #9649 | test(agent): flip parity row 1 to tested sealed state | 2 | P2 | [Issue #9649](https://github.com/zeroclaw-labs/zeroclaw/issues/9649) |
| #9549 | Guide local model selection with llmfit | 2 | P2 | [Issue #9549](https://github.com/zeroclaw-labs/zeroclaw/issues/9549) |
| #10883 | Telegram media-group listener tests timeout | 2 | P1 | [Issue #10883](https://github.com/zeroclaw-labs/zeroclaw/issues/10883) |

### Análise dos Temas

**1. Multimodalidade e Imagens (#10885):** Bug crítico onde imagens retornadas por tools desaparecem após chamada não relacionada. Community demonstra preocupação com degradação de comportamento em fluxos multi-tool.

**2. Segurança OAuth (#9464):** Contrato de implementação para OAuth com perfis armazenados do Anthropic. Issue documenta o path de autenticação explícito, indicando maturidade do sistema de credenciais.

**3. CI/Segurança (#9511):** Usuários solicitam que findings do Semgrep sejam expostos como comentários em PRs, não apenas no tab Security. Facilitaria visibilidade para contribuidores.

**4. Documentação de Modelos Locais (#9549):** Demanda por guia unificado para seleção de modelos Ollama/llama.cpp, considerando requirements de hardware, quantização e contexto.

---

## 5. Bugs e Estabilidade

### Bugs por Severidade

#### S1 — Workflow Bloqueado (Critical)

| # | Título | Canal | Link |
|---|--------|-------|------|
| #10901 | Mattermost drops the first message in newly auto-discovered DMs | mattermost | [Issue #10901](https://github.com/zeroclaw-labs/zeroclaw/issues/10901) |

**Impacto:** Usuários perdem mensagens iniciais em DMs criados via auto-discovery. Severidade máxima requer atenção imediata.

#### S2 — Degraded Behavior (High)

| # | Título | Risco | Status | Link |
|---|--------|-------|--------|------|
| #10885 | Tool-returned images disappear after unrelated tool call | high | in-progress | [Issue #10885](https://github.com/zeroclaw-labs/zeroclaw/issues/10885) |
| #10887 | Non-vision capability gate fails turn on marker-shaped prose | high | in-progress | [Issue #10887](https://github.com/zeroclaw-labs/zeroclaw/issues/10887) |
| #10908 | Image markers in tool-result text promoted to attachments without provenance | S2 | NEW | [Issue #10908](https://github.com/zeroclaw-labs/zeroclaw/issues/10908) |
| #10897 | daemon::tests::supervisor_preserves_component_error_chain flakes | S2 | NEW | [Issue #10897](https://github.com/zeroclaw-labs/zeroclaw/issues/10897) |

#### Bugs de Testes/Infraestrutura

| # | Título | Canal | Link |
|---|--------|-------|------|
| #10883 | Telegram media-group listener tests timeout (P1) | telegram | [Issue #10883](https://github.com/zeroclaw-labs/zeroclaw/issues/10883) |
| #10897 | Supervisor test flakes under parallel nextest | ci | [Issue #10897](https://github.com/zeroclaw-labs/zeroclaw/issues/10897) |

**Tabela de Riscos:** 4 bugs com `risk:high` estão abertos, com 2 em `in-progress`. A issues #10885 e #10887 parecem relacionadas a processamento multimodal.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features (criadas em 16-17/09)

| # | Título | Área | Tamanho | Link |
|---|--------|------|---------|------|
| #10900 | Transcription provider cascade (ordered fallback chain) | provider | — | [Issue #10900](https://github.com/zeroclaw-labs/zeroclaw/issues/10900) |
| #10909 | Standard text editing in ZeroCode composer | zerocode | — | [Issue #10909](https://github.com/zeroclaw-labs/zeroclaw/issues/10909) |
| #10891 | Carry channel provenance through runtime admission | runtime | — | [Issue #10891](https://github.com/zeroclaw-labs/zeroclaw/issues/10891) |

### Features em Desenvolvimento Ativo (PRs)

| # | Título | Tamanho | Link |
|---|--------|---------|------|
| #10768 | feat(channels): add Sendblue iMessage/SMS channel | XL | [PR #10768](https://github.com/zeroclaw-labs/zeroclaw/pull/10768) |
| #10780 | Restore proactive token-budget context compaction | P1 | [Issue #10780](https://github.com/zeroclaw-labs/zeroclaw/issues/10780) |
| #10905 | feat(zerocode): add manual recoverable context compaction | XL | [PR #10905](https://github.com/zeroclaw-labs/zeroclaw/pull/10905) |
| #10255 | feat(security): oidc.<alias> token-verification provider | XL | [PR #10255](https://github.com/zeroclaw-labs/zeroclaw/pull/10255) |
| #10070 | feat(tools): gate file_download against SSRF | XL | [PR #10070](https://github.com/zeroclaw-labs/zeroclaw/pull/10070) |

### Sinais de Roadmap

1. **Expansão de Canais:** Sendblue iMessage/SMS (#10768) demonstra direção para conectividade mobile cross-platform
2. **Context Management:** Múltiplos PRs (#10780, #10905) indicam foco em gerenciamento de contexto e memória
3. **Segurança Enterprise:** OIDC verification (#10255) e SSRF hardening (#10070) sugerem preparação para deployments corporativos
4. **Transcription:** Feature #10900 propõe cascade de provedores STT para resiliência

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Dor | Issue | Severidade | Link |
|-----|-------|------------|------|
| Perda de imagens em conversas com múltiplas tools | #10885 | S2 | [Issue #10885](https://github.com/zeroclaw-labs/zeroclaw/issues/10885) |
| Mattermost ignora primeira mensagem em DMs novos | #10901 | S1 | [Issue #10901](https://github.com/zeroclaw-labs/zeroclaw/issues/10901) |
| Tests de Telegram timeout em CI paralelo | #10883 | P1 | [Issue #10883](https://github.com/zeroclaw-labs/zeroclaw/issues/10883) |
| Falta de documentação para modelos locais | #9549 | P2 | [Issue #9549](https://github.com/zeroclaw-labs/zeroclaw/issues/9549) |
| Semgrep findings invisíveis para contribuidores | #9511 | P2 | [Issue #9511](https://github.com/zeroclaw-labs/zeroclaw/issues/9511) |

### Cenários de Uso Emergentes

1. **Multi-tool Multimodal:** Usuários executando pipelines com tools de imagem seguido de outras operations experimentam perda de estado
2. **Autoscaling/DMs:** Auto-descoberta de DMs em Mattermost não trata corretamente o handshake inicial
3. **Voice Input:** Fallback de transcription providers é inexistente, causando silêncio quando provedor primário falha
4. **ZeroCode UX:** Ausência de undo/redo básico no composer impacta produtividade

### Indicadores de Satisfação

- 4 PRs com label `distinguished contributor` indicam comunidade ativa de contribuidores recorrentes
- 2 PRs `needs-maintainer-review` aguardando atenção, sinal de volume saudável de contribuições
- Alta taxa de issues com `status:in-progress` demonstra responsiveness da equipe

---

## 8. Backlog que Merece Atenção

### Issues Sem Atividade Recente (>7 dias sem update)

| # | Título | Criado | Prioridade | Risco | Link |
|---|--------|--------|------------|-------|------|
| #9464 | Anthropic stored-profile OAuth alias contract | 2026-07-27 | P1 | high | [Issue #9464](https://github.com/zeroclaw-labs/zeroclaw/issues/9464) |
| #9511 | Surface diff-aware Semgrep findings | 2026-07-28 | P2 | high | [Issue #9511](https://github.com/zeroclaw-labs/zeroclaw/issues/9511) |
| #9549 | Guide local model selection | 2026-07-29 | P2 | medium | [Issue #9549](https://github.com/zeroclaw-labs/zeroclaw/issues/9549) |
| #9635 | Resolve git subcommand past global options | 2026-08-01 | — | high | [PR #9635](https://github.com/zeroclaw-labs/zeroclaw/pull/9635) |
| #9677 | Retire command-catalogue compatibility fallback | 2026-08-02 | P2 | medium | [Issue #9677](https://github.com/zeroclaw-labs/zeroclaw/issues/9677) |
| #9679 | Re-evaluate local artifact support | 2026-08-02 | P3 | low | [Issue #9679](https://github.com/zeroclaw-labs/zeroclaw/issues/9679) |
| #9685 | SOP run cancellation RPC (deferred) | 2026-08-02 | P2 | high | [Issue #9685](https://github.com/zeroclaw-labs/zeroclaw/issues/9685) |
| #9686 | Zerocode SOP pane mouse controls (deferred) | 2026-08-02 | P2 | low | [Issue #9686](https://github.com/zeroclaw-labs/zeroclaw/issues/

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*