# Resumo diário do ecossistema de agentes de IA 2026-08-09

> Issues: 0 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-08-08 20:21 UTC

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

**Data de Referência:** 2026-08-09 | **Projetos Analisados:** 7 | **Status:** Ativo

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **alta atividade generalizada** em 2026-08-09, com 6 de 7 projetos demonstrando engajamento significativo nas últimas 24h. O tema central dominante é a **maturação para produção**: otimização de custos de tokens (NanoBot), estabilização cross-platform (CoPaw, Hermes), e consolidação arquitetural (IronClaw, ZeroClaw). Observa-se uma clara divisão entre projetos em **modo iteração rápida** (ZeroClaw com 100 itens/24h, Hermes com 100 itens/24h) e projetos em **modo consolidação de qualidade** (NanoBot, PicoClaw). A segurança emerge como preocupação transversal, aparecendo em todos os projetos com severidade P1. Nenhum projeto publicou releases oficiais no período, indicando que a maioria está acumulando mudanças para publicações futuras.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | PRs Merged | Releases | Bugs P1/P2 | Saúde |
|---------|-------------|-----------|------------|----------|------------|-------|
| **NullClaw** | 0 | 0 | 0 | 0 | 0 | ⚫ Inativo |
| **NanoBot** | 5 | 10 | 4 | 0 | 1 P1 | 🟢 Positiva |
| **Hermes Agent** | 50 | 50 | 10 | 0 | 2 P1 + 1 Security | 🟡 Estável (com regressões) |
| **PicoClaw** | 3 | 4 | 0 | 0 | 1 P1 | 🟡 Moderada |
| **IronClaw** | 33 | 50 | 31 | 0 | 1 P1 | 🟢 Forte |
| **CoPaw** | 18 | 50 | — | 0 | 2 P2 | 🟡 Desenvolvimento intenso |
| **ZeroClaw** | 50 | 50 | 1 | 0 | 14 P1 | 🔴 Crítica (segurança) |

**Observação:** IronClaw apresenta a melhor taxa de resolução com 62% de PRs mergeados (31/50). ZeroClaw concentra o maior volume de bugs P1 abertos (14), muitos com etiqueta de segurança. Hermes Agent e CoPaw mostram padrão de regressões recorrentes em plataformas específicas (macOS, Windows).

---

## 3. Posicionamento do Projeto Principal

### Líderes por Categoria

| Categoria | Projeto | Diferencial |
|-----------|---------|-------------|
| **Volume de Desenvolvimento** | IronClaw / ZeroClaw / Hermes | 50+ PRs/24h, alta rotatividade |
| **Qualidade de Processos** | IronClaw | 62% merge rate, auditorias formais de gates |
| **Foco em Produção** | NanoBot | Otimização de tokens, logging granular |
| **Inovação de Features** | ZeroClaw | 17 PRsXL em infraestrutura de eval |
| **Velocidade de Bug Fix** | CoPaw | 2 bugs críticos fechados em 24h |

### NanoBot — Estudo de Caso (Projeto com Melhor Saúde Relativa)

**Vantagens técnicas:**
- Ciclo de feedback curto: issue #5266 → PR #5293 em <24h
- Features orientadas a custo: logging por iteração, schemas otimizados para contexto
- WebUI com iterções práticas (temporary chat mode, image hover fix)

**Tamanho da comunidade:** ~15 issues/PRs por dia — menor que os líderes, mas com alta taxa de conversão

**Diferenciação:** É o único projeto com foco explícito em **otimização de custos de tokens**, respondendo à demanda crescente de deployments em larga escala com budgets controlados.

---

## 4. Focos Técnicos Compartilhados

### 4.1 Segurança de Canais e Autenticação

| Projeto | Issue Relacionada | Descrição |
|---------|------------------|-----------|
| NanoBot | #5297, #5298 | MCP OAuth web authorization, schemas otimizados |
| PicoClaw | #3302 | Suporte OAuth 2.1 para MCP servers |
| Hermes | #81952 | **CRÍTICO:** Config corrompida seleciona modelo pago silenciosamente |
| ZeroClaw | #8054, #9348 | Ferramentas indisponíveis no system prompt; WhatsApp responde a todos |
| IronClaw | #7389 | Auditoria completa de gates |

**Padrão identificado:** A segurança está evoluindo de proteção básica para modelos de confiança zero entre componentes (gate auditing, isolation testing).

### 4.2 Estabilidade Cross-Platform

| Plataforma | Projetos Afetados | Problemas |
|------------|-------------------|-----------|
| **macOS** | Hermes, CoPaw | SIGBUS/SQLite crashes, encoding UTF-8/CJK, PATH issues |
| **Windows** | Hermes, CoPaw | Sessões caem para home, browser extension blocking updates |
| **Docker** | NanoBot, ZeroClaw, CoPaw | Permission denied, loopback config, markets inacessíveis |

**Padrão identificado:** A maioria dos projetos foi desenvolvida primariamente em ambiente Linux/macOS, resultando em gaps de compatibilidade quando users tentam deployments containerizados ou Windows-native.

### 4.3 Custos e Observabilidade

| Projeto | Feature | Descrição |
|---------|---------|-----------|
| NanoBot | PR #5293, #5299 | Logging granular de tokens por iteração + UI de breakdown |
| IronClaw | Issue #6989 | Token accounting incorreto em ModelWorkRequest |
| ZeroClaw | Issue #9816 | Anthropic provider reporta $0.00 spend |

**Padrão identificado:** O mercado está migrando de "modelos baratos" para "observabilidade de custos" — ferramentas de debugging de spend são agora feature requests recorrentes.

### 4.4 Infraestrutura de Avaliação

ZeroClaw lidera com **9 PRsXL em eval**, introduzindo:
- `pass@k` / `pass^k` com barras de erro
- Graders assíncronos workspace-aware
- Formato JUnit XML para CI
- Replay fixtures com casos de regressão

IronClaw segue com stress testing de tool-call workload (PR #7382) e auditorias de gates. Este padrão indica que **avaliação rigorosa de agentes** está se tornando requisito de maturidade.

---

## 5. Análise de Diferenciação

### 5.1 Por Público-Alvo

| Projeto | Público Primário | Implicação |
|---------|-----------------|------------|
| **ZeroClaw** | Equipes de segurança e DevOps | Foco em authorization, forbidden paths, leak detection |
| **NanoBot** | Desenvolvedores individuais e PMEs | Foco em custo, simplicidade de deploy, WebUI |
| **Hermes** | Desenvolvedores desktop-first | Desktop app como produto principal, CLI como secundário |
| **IronClaw** | Plataformas enterprise (Slack, Telegram) | Delivery determinístico, skills como extensibilidade |
| **CoPaw** | Usuários multi-provedor | Volcengine, Xiaomi MiMo, Google Gemini |
| **PicoClaw** | Hobbyists e通讯multi-canais | IRC, WhatsApp, DeltaChat, Simplex |

### 5.2 Por Arquitetura

| Abordagem | Projetos | Características |
|-----------|----------|-----------------|
| **Monolítico com plugins** | Hermes, IronClaw | Plugin system como extensão, API estável |
| **Modular/Extensível** | NanoBot, CoPaw | MCP como integração primária, arquitetura leve |
| **Canal-centrico** | PicoClaw, ZeroClaw | Protocolos de comunicação como cidadão de primeira classe |
| **Reborn/Microservices** | IronClaw | Migration layer por layer, CI boundaries em crates |

### 5.3 Por Estratégia de Mercado

- **ZeroClaw:** API compatibility (OpenAI endpoint) para baixa barreira de adoção
- **CoPaw:** Provedores asiáticos (ByteDance, Xiaomi) para expansão regional
- **IronClaw:** Enterprise integrations (Slack, Telegram) como plataforma de delivery
- **NanoBot:** Cost efficiency como diferencial para PMEs

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Projetos em Iteração Rápida

| Projeto | Indicadores | Comportamento |
|---------|-------------|---------------|
| **ZeroClaw** | 100 itens/24h, 14 P1 abertos, 17 PRs pendentes do mesmo autor | High velocity, dívida técnica acumulada |
| **Hermes Agent** | 100 itens/24h, 5+ issues duplicates (encoding) | High velocity, regressões recorrentes |
| **CoPaw** | 68 itens/24h, 49 PRs em aberto | High velocity, consolidação necessária |

### 6.2 Projetos em Consolidação de Qualidade

| Projeto | Indicadores | Comportamento |
|---------|-------------|---------------|
| **IronClaw** | 31 merges/50 PRs, auditorias formais, stress testing | Maturidade de processos, foco em reliability |
| **NanoBot** | Ciclo curto feedback→fix, 0 releases pendente | Crescimento sustentável |

### 6.3 Projetos Estagnados

| Projeto | Situação | Recomendações |
|---------|---------|---------------|
| **NullClaw** | Sem atividade | Possível abandono ou rebranding |
| **PicoClaw** | PRs acumulando (43 dias sem merge), 1 bug crítico | Gargalo de review, necessidade de mantenedor dedicado |

### 6.4 Patterns de Engajamento

- **Issues com maior engajamento:** ZeroClaw RFCs (11 comentários), NanoBot token consumption (13 comentários), Hermes desktop regression (17 comentários)
- **Duplicados como sinal:** Hermes tem 8+ reports do mesmo bug de encoding — indica falha em resolver de forma definitiva
- **Stale backlog:** PicoClaw com 3+ PRs >30 dias sem ação, ZeroClaw com 17 PRsXL aguardando autor

---

## 7. Sinais de Tendência

### 7.1 Tendências Confirmadas

| Tendência | Evidência | Implicação |
|-----------|-----------|------------|
| **Observabilidade de custos** | NanoBot logging por iteração, IronClaw token accounting | Ferramentas de debugging de spend serão标配 |
| **Segurança como blocking issue** | 5+ issues security P1 em ZeroClaw, Hermes silent paid selection | Produtização exige security-first design |
| **Cross-platform reliability** | macOS/Windows bugs em 4 projetos | Testes em múltiplas plataformas serão obrigatórios |
| **MCP como integração padrão** | 4 projetos com issues/features MCP | Model Context Protocol como lingua franca |
| **Agent eval como disciplina** | ZeroClaw 9 PRsXL em eval, IronClaw stress testing | Avaliação rigorosa substituirá "shipping and hoping" |

### 7.2 Tendências Emergentes

| Sinal | Projeto | Interpretação |
|-------|---------|---------------|
| OAuth 2.1 para MCP (#3302) | PicoClaw | Autenticação moderna substitui API keys |
| Legacy migration tools (#6939) | IronClaw | Consolidação de mercado após proliferacão |
| Computer use (#4276) | NanoBot | Browser/desktop automation como feature core |
| OMP tool surface replacement (#7392) | IronClaw | Padronização de tool contracts |

### 7.3 Riscos Sistêmicos Identificados

1. **Encoding UTF-8/CJK:** Afeta 4+ projetos simultaneamente — problema sistêmico que pode bloquear adoção em mercados asiáticos
2. **Config corruption → financial impact:** Hermes #81952 e ZeroClaw #9348 mostram que config validation é frequentemente negligenciada
3. **Dependency lock-in:** PicoClaw WhatsApp quebrado por dependência desatualizada (`whatsmeow`) — risco de supply chain
4. **Test coverage gaps:** IronClaw #7360 e ZeroClaw #9834 identificam que stress testing não cobre cenários reais de produção

---

## Recomendações Estratégicas

### Para Desenvolvedores

1. **Adotar projetos com saúde estável** — NanoBot e IronClaw apresentam melhores práticas de desenvolvimento
2. **Priorizar observabilidade** — Implementar logging de tokens e custos desde o início
3. **Testar cross-platform** — CI deve incluir macOS, Windows e Docker

### Para Decisores Técnicos

1. **ZeroClaw e Hermes apresentam alta dívida de bugs** — Avaliar criticamente antes de produção
2. **MCP está se tornando padrão** — Projetos sem suporte MCP perderão competitividade
3. **Segurança de canais** (WhatsApp, Telegram) é área negligenciada — Risco de exposição

### Para Investidores/Adquirentes

1. **IronClaw demonstra maturidade** — Melhor processo de QA e menor regressão
2. **NanoBot tem posicionamento diferenciado** — Foco em custo pode capturar PMEs
3. **PicoClaw precisa de injeção de mantenedores** — Risco de abandono

---

*Relatório gerado em 2026-08-09. Próxima atualização recomendada: 2026-08-10.*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-08-09

---

## 1. Panorama do Dia

O projeto NanoBot apresenta **alta atividade de desenvolvimento** em 09/08/2026, com 15 itens atualizados nas últimas 24 horas (5 issues + 10 PRs). A comunidade está intensamente focada em **otimização de custos de tokens** — tanto em logging/diagnostics quanto em eficiencia de schemas — indicando uma maturação do projeto em direção a produção em larga escala. Não houve lançamentos de novas versões, mas 4 PRs foram mergeados/fechados, demonstrando progresso contínuo em usabilidade e estabilidade. A saúde geral é positiva, com destaque para correção de bugs críticos em sessões e estabilidade do WebUI.

---

## 2. Lançamentos

**Nenhuma release nas últimas 24h.** O repositório não publicou novas versões desde o período analisado. Usuários em produção devem acompanhar o canal oficial para anúncios de próximos releases.

---

## 3. Progresso do Projeto

### PRs Fechados/Mergiados Recentemente

| # | Título | Tipo | Status | Destaque |
|---|--------|------|--------|----------|
| [#5252](https://github.com/HKUDS/nanobot/pull/5252) | feat(webui): add temporary chat mode | feature | **CLOSED** | Adiciona modo Temporary Chat ao WebUI — conversas temporárias não-persistentes, úteis para testes rápidos |
| [#5293](https://github.com/HKUDS/nanobot/pull/5293) | feat(usage): log per-iteration token diagnostics | feature | **CLOSED** | Logs detalhados de token por iteração do agente — resposta direta à issue #5266 |
| [#5296](https://github.com/HKUDS/nanobot/pull/5296) | refactor: remove verified dead code | refatoração | **CLOSED** | Remove 19 unidades de código morto e 11 seams de teste inacessíveis — limpeza técnica |
| [#5294](https://github.com/HKUDS/nanobot/pull/5294) | fix(webui): prevent image hover clipping | bug fix | **CLOSED** | Corrige problema visual no hover de imagens no WebUI |

### Análise

O PR [#5293](https://github.com/HKUDS/nanobot/pull/5293) é particularmente relevante — implementa logging granular de consumo de tokens por execução, permitindo debug de picos inesperados de uso. Este PR responde diretamente à issue #5266, mostrando ciclo saudável de feedback → desenvolvimento → entrega.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| # | Título | Comentários | Tipo | Link |
|---|--------|-------------|------|------|
| #5266 | Logs about token consumption (too many tokens are burned) | 13 | enhancement | [Issue #5266](https://github.com/HKUDS/nanobot/issues/5266) |
| #5297 | 希望mcp增加oauth网页授权功能 | 2 | feature request | [Issue #5297](https://github.com/HKUDS/nanobot/issues/5297) |
| #5295 | Docker compose permission denied | 2 | bug | [Issue #5295](https://github.com/HKUDS/nanobot/issues/5295) |

### Análise dos Principais Temas

**1. Token Consumption (#5266)** — Com **13 comentários**, esta é a issue mais discutida. O usuário `knoppix2` reporta consumo de milhões de tokens em poucas horas sem atividade aparente. A demanda central é por **logs de consumo por chamada**, não apenas agregados. O PR #5293 já endereça parcialmente esta necessidade.

**2. MCP OAuth Web Authorization (#5297)** — O usuário `sunboy0523` solicita suporte a MCP servers que requerem OAuth web authorization (ex: XMind API). Este é um **gap de integração** que limita casos de uso empresariais.

**3. Docker Deployment Bug (#5295)** — Bug de permissões no entrypoint.sh durante deploy com Docker Compose, com **impacto em novos usuários**.

---

## 5. Bugs e Estabilidade

### Bugs Reportados

| # | Título | Severidade | Link |
|---|--------|------------|------|
| #5300 | MCP连接失败未隔离+anyio cancel scope跨任务崩溃 | **CRÍTICA** | [Issue #5300](https://github.com/HKUDS/nanobot/issues/5300) |
| #5295 | Docker compose: Permission denied no entrypoint.sh | **MÉDIA** | [Issue #5295](https://github.com/HKUDS/nanobot/issues/5295) |

### Detalhamento

**CRÍTICA — #5300**: Erro HTTP 530 de MCP remoto (Cloudflare tunnel) dispara `RuntimeError: Attempted to exit cancel scope in a different task than it was entered in` no SDK MCP 1.29.0. Consequências graves:
- Gateway进程直接崩溃/卡死
- Task leakage com event loop vazio
- CPU占用飙升到异常高

**MÉDIA — #5295**: Deploy com Docker Compose falha com `/bin/sh: 0: cannot open /usr/local/bin/entrypoint.sh: Permission denied`. Afeta diretamente novos usuários seguindo a documentação oficial.

### PRs de Bug Fix em Aberto

| # | Título | Prioridade | Link |
|---|--------|------------|------|
| #5271 | prevent stale background task saves from overwriting session data | **P0** | [PR #5271](https://github.com/HKUDS/nanobot/pull/5271) |
| #5206 | log streamed responses exactly once | **P2** | [PR #5206](https://github.com/HKUDS/nanobot/pull/5206) |

O PR [#5271](https://github.com/HKUDS/nanobot/pull/5271) está marcado P0 com conflito — corrige race condition onde `session.clear()` durante `await provider.chat_with_retry(...)` pode causar perda de dados.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| # | Título | Descrição | Link |
|---|--------|-----------|------|
| #5297 | MCP OAuth网页授权 | Suporte a MCP servers com OAuth web authentication (ex: XMind) | [Issue #5297](https://github.com/HKUDS/nanobot/issues/5297) |
| #5298 | budget model-visible MCP schemas | Reduzir contexto de grandes tool sets MCP visíveis ao modelo | [Issue #5298](https://github.com/HKUDS/nanobot/issues/5298) |

### PRs de Feature em Desenvolvimento

| # | Título | Escopo | Link |
|---|--------|--------|------|
| #4276 | model-agnostic computer use (computer_use + browser tools) | Ferramentas nativas de controle de desktop e browser automation | [PR #4276](https://github.com/HKUDS/nanobot/pull/4276) |
| #5288 | integrate Agent Plugins with CLI Apps | Unificação de plugins agent e CLI apps via formato vendor-neutral | [PR #5288](https://github.com/HKUDS/nanobot/pull/5288) |
| #5299 | show recent token usage details no WebUI | Interface para visualizar breakdown de tokens por chamada | [PR #5299](https://github.com/HKUDS/nanobot/pull/5299) |
| #5292 | reply to room-level user event in Matrix | Melhorar threading de respostas em rooms Matrix | [PR #5292](https://github.com/HKUDS/nanobot/pull/5292) |

### Sinais de Roadmap

O esforço concentrado em **token optimization** (issues #5266, #5298 + PRs #5293, #5299) sugere que **controle de custos** será um tema prioritário. A integração de **Agent Plugins com CLI Apps** (#5288) indica movimento hacia um ecossistema unificado de extensibilidade.

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Dor | Frequência | Impacto |
|-----|------------|---------|
| **Custo excessivo de tokens** | Alta — issue #5266 com 13 comentários | Crítico para uso em produção |
| **Dificuldade de deploy (Docker)** | Média — issue #5295 | Bloqueante para novos usuários |
| **Incompatibilidade com MCP OAuth** | Média — issue #5297 | Limita integrações corporativas |
| **Instabilidade com MCP remoto** | Crítica — issue #5300 | Afeta confiabilidade em produção |

### Cenários de Uso Emergentes

1. **Uso empresarial com múltiplos MCPs** — Demanda por OAuth, schemas otimizados e isolamento de falhas
2. **Automação de desktop/browser** — PR #4276 sugere interesse em computer use
3. **Matrix como canal** — Suporte a rooms não-threaded (#5292)

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta/Confirmação

| # | Título | Criado | Link |
|---|--------|--------|------|
| #5300 | MCP + anyio crash | 2026-08-08 | [Issue #5300](https://github.com/HKUDS/nanobot/issues/5300) |
| #5298 | budget model-visible MCP schemas | 2026-08-08 | [Issue #5298](https://github.com/HKUDS/nanobot/issues/5298) |

### PRs com Conflitos Pendentes

| # | Título | Prioridade | Status | Link |
|---|--------|------------|--------|------|
| #5271 | prevent stale background task saves | **P0** | conflict | [PR #5271](https://github.com/HKUDS/nanobot/pull/5271) |
| #5206 | log streamed responses exactly once | **P2** | conflict | [PR #5206](https://github.com/HKUDS/nanobot/pull/5206) |

### Recomendação

O PR [#5271](https://github.com/HKUDS/nanobot/pull/5271) (P0, com conflito) deve ser priorizado para resolução — corrige race condition em sessões que pode causar perda de dados do usuário. A issue [#5300](https://github.com/HKUDS/nanobot/issues/5300) de crash crítico também requer triagem imediata.

---

## Métricas Resumidas

| Indicador | Valor |
|-----------|-------|
| Issues ativas (24h) | 5 |
| PRs atualizados (24h) | 10 |
| PRs mergeados/fechados | 4 |
| Novas releases | 0 |
| Bugs críticos | 1 (#5300) |
| Features em progresso | 4 |

---

*Relatório gerado automaticamente com base em dados do GitHub para HKUDS/nanobot em 2026-08-09.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-08-09

## 1. Panorama do Dia

O Hermes Agent registrou **alta atividade** nas últimas 24 horas, com 50 issues e 50 PRs atualizados. O volume de fechamentos (31 issues, 10 PRs) indica trabalho intenso de manutenção. Não houve lançamentos oficiais, mas a taxa de merge sugiere que a equipe está focada em estabilização. A plataforma Desktop continua sendo a área com maior volume de reports, especialmente relacionados a regressões em macOS beta e problemas de sessão. O ecossistema de plugins está em evolução ativa, com múltiplas PRs de infraestrutura sendo propostas.

---

## 2. Lançamentos

**Nenhum release nas últimas 24 horas.**

O projeto não publicou novas versões desde o período analisado. Isso é consistente com um ciclo de desenvolvimento intensivo em que muitas mudanças estão em PR antes de um próximotag.

---

## 3. Progresso do Projeto

As seguintes PRs foram **merged/fechadas** hoje, representando avanços significativos:

| PR | Tipo | Componente | Descrição |
|---|---|---|---|
| [#81997](https://github.com/NousResearch/hermes-agent/pull/81997) | refactor | tui, desktop | Auto-fix lint via `npm run fix` — formatação padronizada |
| [#81992](https://github.com/NousResearch/hermes-agent/pull/81992) | refactor | tui, desktop | Segunda iteração de auto-fix lint |
| [#81973](https://github.com/NousResearch/hermes-agent/pull/81973) | bug fix | cli | Model picker agora serve catálogo cacheado de providers customizados, eliminando necessidade de re-probe |
| [#81956](https://github.com/NousResearch/hermes-agent/pull/81956) | bug fix | desktop | Nova sessão agora permanece no projeto correto, resolvendo navegação confusa |

**Destaque:** A PR [#81973](https://github.com/NousResearch/hermes-agent/pull/81973) é particularmente relevante por **superseder múltiplas PRs anteriores** (#81665, #81556), consolidando a correção do model picker em uma única mudança.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários + reações)

**1. Desktop app unresponsive após ~5 mensagens (macOS 27 beta)** — [#63047](https://github.com/NousResearch/hermes-agent/issues/63047)
- **Severidade:** P1
- **Comentários:** 17
- **Situação:** ABERTA há ~27 dias
- **Análise:** Este é o issue mais crítico em termos de comentários. Envolve freeze completo do UI, não apenas lentidão, afetando inclusive o acesso às Settings. A classificação `sweeper:risk-session-state` indica preocupação com integridade de sessões.

**2. read_file marca arquivos UTF-8/CJK como binários** — Múltiplos duplicates (#80308, #77047, #77842, #81480, #81658, #81651, #80251, #80221)
- **Severidade:** P2
- **Padrão:** O limite de amostragem de 1000 bytes corta caracteres multibyte
- **Impacto:** Bloqueia leitura e patch de arquivos Markdown, arquivos Chinese/Japanese/Korean
- **Análise:** Alta prolificidade de reports idênticos indica problema recorrente que não foi completamente resolvido

**3. Corrupt config silently seleciona modelo pago** — [#81952](https://github.com/NousResearch/hermes-agent/issues/81952)
- **Severidade:** P2
- **Comentários:** 3
- **Alerta de Segurança:** Quando config.yaml falha em parse, o sistema automaticamente seleciona `z-ai/glm-5.2` no OpenRouter e auto-ingere `OPENROUTER_API_KEY`, gerando **gastos sem consentimento do operador**

---

## 5. Bugs e Estabilidade

### Por Severidade

**P1 — Crítico:**
| Issue | Link | Título |
|---|---|---|
| #63047 | [Link](https://github.com/NousResearch/hermes-agent/issues/63047) | Desktop app becomes completely unresponsive after ~5 messages on macOS 27 beta |

**P2 — Alto:**
| Issue | Link | Título |
|---|---|---|
| #80308 | [Link](https://github.com/NousResearch/hermes-agent/issues/80308) | read_file incorrectly flags valid UTF-8 CJK files as binary + search_files broken |
| #81952 | [Link](https://github.com/NousResearch/hermes-agent/issues/81952) | Corrupt profile config silently falls back to paid OpenRouter default model (SECURITY) |
| #81989 | [Link](https://github.com/NousResearch/hermes-agent/pull/81989) | fix(cli): enforce shell-mode timeout instead of draining to EOF |
| #81988 | [Link](https://github.com/NousResearch/hermes-agent/pull/81988) | fix(cli): reject corrupt config in noninteractive runs |
| #65274 | [Link](https://github.com/NousResearch/hermes-agent/issues/65274) | Desktop project-scoped sessions fall back to home cwd on Windows |

**P3 — Moderado:**
| Issue | Link | Título |
|---|---|---|
| #81969 | [Link](https://github.com/NousResearch/hermes-agent/issues/81969) | "scared to update because every other update bricks everything!" |
| #58774 | [Link](https://github.com/NousResearch/hermes-agent/issues/58774) | /personality command saves but doesn't affect current CLI session |
| #51155 | [Link](https://github.com/NousResearch/hermes-agent/issues/51155) | Personalities don't change and persist across sessions |
| #45779 | [Link](https://github.com/NousResearch/hermes-agent/issues/45779) | Feature: Multi-gateway connections with per-gateway tabs |
| #71659 | [Link](https://github.com/NousResearch/hermes-agent/issues/71659) | Desktop UI tests depend on host locale (en-DE failures) |

**Padrões Identificados:**
1. **Encoding/UTF-8**: Afeta desktop, CLI, tools, memory — problema sistêmico
2. **Sessões/Persistence**: Múltiplos reports sobre comportamento imprevisível de sessões
3. **Windows**: Regressões consistentes em plataforma Windows (locale, path, encoding)

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Propostas

| PR | Link | Descrição |
|---|---|---|
| #81998 | [Link](https://github.com/NousResearch/hermes-agent/pull/81998) | **feat(plugins):** namespaced config e durable state para plugins |
| #81986 | [Link](https://github.com/NousResearch/hermes-agent/pull/81986) | **feat(plugins):** cache-safe system prompt sections |
| #81980 | [Link](https://github.com/NousResearch/hermes-agent/pull/81980) | **feat(plugins):** route ctx.llm through auxiliary slots |
| #81993 | [Link](https://github.com/NousResearch/hermes-agent/pull/81993) | **test(plugins):** enforce behavior compatibility contract |
| #45779 | [Link](https://github.com/NousResearch/hermes-agent/issues/45779) | Multi-gateway connections with per-gateway tabs in Desktop |
| #81985 | [Link](https://github.com/NousResearch/hermes-agent/pull/81985) | **feat(agent):** name sessions instantly from opening message |
| #31623 | [Link](https://github.com/NousResearch/hermes-agent/pull/31623) | **feat(stt):** add prompt files e speech hotwords |
| #66668 | [Link](https://github.com/NousResearch/hermes-agent/issues/66668) | Proposal: encoding-safety lint |

**Sinais de Roadmap:**
- **Plugin Ecosystem:** Evolução clara da API de plugins com namespaced config, system prompt sections e auxiliary LLM routing
- **Desktop UX:** Melhorias em multi-gateway, session naming, find-in-page
- **Encoding Safety:** Proposta formal de lint para prevenir regressions de encoding

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

**1. Insegurança com Updates** (Issue [#81969](https://github.com/NousResearch/hermes-agent/issues/81969))
> *"scared to update because every other update bricks everything!"*

Sentimento negativo forte. Usuários reportam que updates frequentemente quebram funcionalidades, causando perda de configuração.

**2. Confusão com Sessões** (Issues [#75537](https://github.com/NousResearch/hermes-agent/issues/75537), [#81956](https://github.com/NousResearch/hermes-agent/pull/81956))
- Nova sessão vai para projeto errado
- Status dot é inconsistente
- Nome da sessão não persiste

**3. Personalities Não Funcionam** (Issues [#58774](https://github.com/NousResearch/hermes-agent/issues/58774), [#51155](https://github.com/NousResearch/hermes-agent/issues/51155))
- Comando `/personality` salva mas não afeta a sessão atual
- Comportamento persiste entre sessões

**4. Problemas de Encoding Sistêmicos**
- Arquivos UTF-8/CJK bloqueados
- Emoji/clipboard quebrado no Windows
- Locale-dependent failures

**5. Modelo Pago Selecionado Sem Consentimento** (Issue [#81952](https://github.com/NousResearch/hermes-agent/issues/81952))
Vulnerabilidade de segurança onde config corrompida leva a gastos financeiros não autorizados.

---

## 8. Backlog que Merece Atenção

### Issues Abertas há >30 dias sem resolução

| Issue | Link | Idade | Severidade | Título |
|---|---|---|---|---|
| #63047 | [Link](https://github.com/NousResearch/hermes-agent/issues/63047) | ~27 dias | P1 | Desktop unresponsive (macOS beta) |
| #65274 | [Link](https://github.com/NousResearch/hermes-agent/issues/65274) | ~24 dias | P2 | Sessions fall back to home on Windows |
| #58774 | [Link](https://github.com/NousResearch/hermes-agent/issues/58774) | ~35 dias | P3 | /personality command ignores current session |
| #51155 | [Link](https://github.com/NousResearch/hermes-agent/issues/51155) | ~47 dias | P2 | Personalities don't change across sessions |
| #45779 | [Link](https://github.com/NousResearch/hermes-agent/issues/45779) | ~57 dias | P3 | Multi-gateway tabs feature request |

### PRs Abertas aguardando review

| PR | Link | Autor | Descrição |
|---|---|---|---|
| #81999 | [Link](https://github.com/NousResearch/hermes-agent/pull/81999) | elbukett1 | fix(desktop): allow get-windows@9.3.0 install script |
| #81998 | [Link](https://github.com/NousResearch/hermes-agent/pull/81998) | teknium1 | feat(plugins): namespaced config |
| #81989 | [Link](https://github.com/NousResearch/hermes-agent/pull/81989) | briandevans | fix(cli): enforce shell-mode timeout (P2) |
| #81988 | [Link](https://github.com/NousResearch/hermes-agent/pull/81988) | embwl0x | fix(cli): reject corrupt config (P2) |
| #81952 | [Link](https://github.com/NousResearch/hermes-agent/issues/81952) | cruzanstx | SECURITY: silent paid model selection |

---

## Saúde Geral do Projeto

| Métrica | Valor | Avaliação |
|---|---|---|
| Atividade (issues+PRs/24h) | 100 | 🟢 Alta |
| Releases (24h) | 0 | 🟡 Sem release |
| Issue Resolution Rate | 62% (31/50) | 🟢 Forte |
| PR Merge Rate | 20% (10/50) | 🟡 Moderado |
| P1 Issues Abertas | 1 | 🔴 Crítico |
| Security Issues | 1 | 🔴 Requer atenção imediata |
| Backlog >30 dias | 5 | 🟡 Necessita triagem |

**Recomendação Prioritária:** Resolver #81952 (security) e #63047 (P1) são urgentes. O problema de encoding UTF-8 (#80308 e duplicados) precisa de solução definitiva para evitar proliferation de reports.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-08-09

---

## 1. Panorama do Dia

O projeto PicoClaw mantém um nível de atividade moderado com **7 itens atualizados nas últimas 24h** (3 issues + 4 PRs). Todas as interações foram registradas em **08/08/2026**, indicando um dia de trabalho ativo. O ponto mais crítico é a **issue de dependência #3320**, que corrige um problema de incompatibilidade com o WhatsApp (erro 405 "client outdated"), exigindo atenção imediata. Não houve lançamentos de novas versões, e o backlog contém PRs pendentes desde junho, sinalizando gargalos na revisão de código.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto não publicou novas versões desde a última análise. A versão mais recente disponível continua sendo a **0.3.1**, mencionada na issue #3292.

---

## 3. Progresso do Projeto

**Nenhum PR merged ou fechado nas últimas 24h.**

Todos os 4 PRs em destaque permanecem em status `OPEN`, aguardando revisão:

| PR | Tipo | Idade | Prioridade |
|----|------|-------|------------|
| [#3320](https://github.com/sipeed/picoclaw/pull/3320) | fix(deps) | 1 dia | 🔴 Crítica |
| [#3321](https://github.com/sipeed/picoclaw/pull/3321) | fix(agent) | 1 dia | 🟡 Alta |
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) | refactor | 37 dias | 🟢 Média |
| [#3193](https://github.com/sipeed/picoclaw/pull/3193) | feat | 43 dias | 🟢 Média |

**PR em destaque:** O PR [#3321](https://github.com/sipeed/picoclaw/pull/3321) otimiza o posicionamento do contexto dinâmico (`## Current Time`, `## Runtime`, etc.) para preservar o **prefix caching**, melhorando performance em requisições de IA.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento:

| Issue | Tipo | Comentários | Criação | Status |
|-------|------|-------------|---------|--------|
| [#3287](https://github.com/sipeed/picoclaw/issues/3287) | Feature | 4 | 22/07 | OPEN (stale) |
| [#3302](https://github.com/sipeed/picoclaw/issues/3302) | Feature | 2 | 30/07 | OPEN |
| [#3292](https://github.com/sipeed/picoclaw/issues/3292) | Bug | 2 | 24/07 | CLOSED |

**Análise:** A issue **[#3287](https://github.com/sipeed/picoclaw/issues/3287)** lidera em comentários, solicitando tratamento de mensagens longas em IRC (limite de 512 bytes). Este é um problema de interoperabilidade com o protocolo IRCv3 que pode afetar usuários em servidores com limitações de buffer.

A issue **[#3302](https://github.com/sipeed/picoclaw/issues/3302)** demonstra demanda por atualização de segurança: suporte a **OAuth 2.1** para servidores MCP, indicando que a comunidade prioriza conformidade com padrões modernos de autenticação.

---

## 5. Bugs e Estabilidade

### Issue resolvida:
**[#3292](https://github.com/sipeed/picoclaw/issues/3292)** — CPU usage excessivo ao focar no input box da interface web (Debian/Firefox, PicoClaw 0.3.1). **Status: CLOSED** ✅

### Problema crítico em aberto:
**[#3320](https://github.com/sipeed/picoclaw/pull/3320)** — O canal nativo **WhatsApp está inoperante** devido à versão desatualizada da dependência `whatsmeow`. Erro: `"client outdated (405)"`. A conexão é estabelecida mas-dropada após ~5 segundos sem tentativa de reconexão.

> **Severidade:** 🔴 **Crítica** (canal quebrado)

**Solução proposta:** Bump da dependência `go.mau.fi/whatsmeow` para versão mais recente.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas demandas identificadas:

1. **[#3302](https://github.com/sipeed/picoclaw/issues/3302)** — Suporte a **OAuth 2.1** para MCP servers
   - Classificação: Nice-to-Have / Enhancement
   - Alinhado com demanda de segurança (#2546 relacionado)

2. **[#3287](https://github.com/sipeed/picoclaw/issues/3287)** — Tratamento de mensagens longas no IRC
   - Protocolo IRC limitado a 512 bytes
   - Compatibilidade com IRCv3 message-tags

3. **[#3193](https://github.com/sipeed/picoclaw/pull/3193)** — Novo tipo de canal **Simplex**
   - Em revisão há 43 dias
   - Adiciona funcionalidade de canal unidirecional

### Sinais de roadmap:
- **Modernização de autenticação** (OAuth 2.1) parece ser prioridade implícita
- **Suporte a novos protocolos** (Simplex, IRCv3)
- **Otimização de performance** de IA (prefix caching em #3321)

---

## 7. Resumo de Feedback dos Usuários

### Dores relatadas:

| Dor | Frequência | Severidade |
|-----|------------|------------|
| Canal WhatsApp quebrado | 1 relatório | 🔴 |
| CPU alto na interface web | 1 relatório | 🟡 |
| Limitações do IRC com mensagens longas | 1+ relatório | 🟡 |

### Cenários de uso identificados:
- **Chat via interface web** (Firefox + Debian)
- **Integração com provedores de IA** (ex: DeepSeek v4-flash)
- **Comunicação multimercado** (IRC, WhatsApp, DeltaChat)

### Satisfação geral:
- A resposta rápida no bug #3292 (fechado) demonstra boa **capacidade de reação**
- Porém, PRs de features (#3193) com 43 dias sem merge indicam **gargalo na revisão**

---

## 8. Backlog que Merece Atenção

| Item | Tipo | Criado | Última Atualização | Dias Inativo |
|------|------|--------|-------------------|--------------|
| [#3193](https://github.com/sipeed/picoclaw/pull/3193) | PR - Simplex channel | 27/06 | 08/08 | 42 dias sem merge |
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) | PR - Refactor DeltaChat | 03/07 | 08/08 | 36 dias sem merge |
| [#3287](https://github.com/sipeed/picoclaw/issues/3287) | Issue - IRC long messages | 22/07 | 08/08 | Com stale (sem resposta recente) |

### Ações recomendadas:

1. **🔴 PRIORIDADE CRÍTICA:** Revisar e merge do PR [#3320](https://github.com/sipeed/picoclaw/pull/3320) para restaurar funcionalidade do WhatsApp

2. **🟡 PRIORIDADE ALTA:** Revisar PRs stale #3193 e #3222 — ambos com trabalho significativo pendente de aprovação

3. **🟢 MELHORIA:** Atribuir mantenedor para responder à issue #3287 (IRC long messages) e evitar que se torne stale permanently

---

## Métricas Resumidas (24h)

| Indicador | Valor |
|-----------|-------|
| Issues abertas | 2 |
| Issues fechadas | 1 |
| PRs abertos | 4 |
| PRs merged | 0 |
| Releases | 0 |
| Bugs críticos | 1 |
| Features pendentes | 3 |

**Saúde geral:** 🟡 **Moderada** — Atividade estável, mas com 1 bug crítico (WhatsApp) e backlog de PRs acumulando.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-08-09

---

## 1. Panorama do Dia

O projeto IronClaw manteve **atividade intensa** nas últimas 24h, com 33 issues e 50 PRs atualizados. Não houve lançamentos oficiais, mas o volume de merges (31 PRs fechados) indica progresso substancial em múltiplas frentes. A arquitetura **Reborn** continua sendo o eixo central do desenvolvimento, com múltiplas issues de migração fechadas e novos PRs de implementação em curso. O time demonstrou foco em **estabilidade e qualidade** — evidenciando pelo menos 5 PRs voltados a correções de race conditions, auditorias de gates e testes de stress. A participação da comunidade (contributors new/experienced) permanece ativa, com novos PRs sendo abertos com frequência.

---

## 2. Lançamentos

**Nenhuma release została publiée nas últimas 24h.** O último release estável não foi atualizado desde o período anterior. O time segue em modo de integração contínua, acumulando mudanças para uma futura publicação.

---

## 3. Progresso do Projeto

Os seguintes PRs foram **merged/fechados** nas últimas 24h, representando avanços significativos:

| PR | Escopo | Impacto |
|----|--------|---------|
| [#7382](https://github.com/nearai/ironclaw/pull/7382) | Stress testing com tool-call workload | Adiciona verificação de writes duráveis no cenário de stress — cobertura de regressão para built-ins e memória |
| [#6938](https://github.com/nearai/ironclaw/pull/6938) | Skills: model chooses skill | Remove keyword scorer; modelo agora decide ativação de skills — mudança de UX significativa |
| [#7280](https://github.com/nearai/ironclaw/pull/7280) | Inspector: browser/security tests | Cobertura de segurança completa para authorization, isolation e connection limits |
| [#7390](https://github.com/nearai/ironclaw/pull/7390) | Loop: routine delivery deterministic | Corrige steer deterministic sob progressive disclosure para rotinas web-created |
| [#7389](https://github.com/nearai/ironclaw/pull/7389) | Live-qa: Slack delivery verification | Verifica triggered delivery através do two-lane contract após #7157 |
| [#7364](https://github.com/nearai/ironclaw/pull/7364) | Telegram: reply anchoring tests | Confirma fix para latency e busy-notice em Telegram |
| [#7228](https://github.com/nearai/ironclaw/pull/7228) | WebUI: admin thread scraping | Adiciona painel read-only para coleta de transcripts e logs por admins |
| [#7393](https://github.com/nearai/ironclaw/pull/7393) | Disclosure: Core delivery benchmark | Mede par de entrega Core (`outbound_deliver` + `outbound_delivery_targets_list`) |
| [#7029](https://github.com/nearai/ironclaw/pull/7029) | Durable delivery claim | Restaura claim compare-and-swap para vendor-egress ownership |
| [#7226](https://github.com/nearai/ironclaw/pull/7226) | Inspector: browser coverage | Completa cobertura cross-layer para Inspector |

**Destaque estratégico:** O PR [#7377](https://github.com/nearai/ironclaw/pull/7377) (em aberto) implementa a decisão "a run acts as its invoker" — uma mudança arquitetural que unifica subject binding em três pontos, reforçada pela auditoria completa de gates em [#7373](https://github.com/nearai/ironclaw/pull/7373).

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários):

1. **[#3280](https://github.com/nearai/ironclaw/issues/3280)** — ProductWorkflow & InboundTurnService facade *(7 comentários, CLOSED)*
   - Migração de ProductAdapters para o layer Reborn
   - Tema recorrente: unificar interfaces de inbound workflow

2. **[#6989](https://github.com/nearai/ironclaw/issues/6989)** — Token accounting bug *(5 comentários, OPEN)*
   - Bug P1: `ModelWorkRequest::for_assistant` estima tokens do reference string length em vez do conteúdo referenciado
   - Impacta medição de usage em providers híbridos

3. **[#7317](https://github.com/nearai/ironclaw/issues/7317)** — Doc-Truth Verification Pipeline *(3 comentários, OPEN)*
   - Proposta de pipeline para sincronizar breaking changes com documentação
   - Identifica `origin_gate_matrix` como exemplo de breaking change sem docs
   - **Alta relevância para DX e onboarding**

4. **[#7360](https://github.com/nearai/ironclaw/issues/7360)** — Expand stress coverage *(2 comentários, OPEN)*
   - Gap: mock LLM não exercita tool calls no nightly stress
   - Regressões em built-in capability writes passam despercebidas

5. **[#6939](https://github.com/nearai/ironclaw/issues/6939)** — Migration tool para legacy agents *(2 comentários, OPEN)*
   - Feature request: port de setup, config e memória de Hermes/Openclaw
   - Reduz switching costs para usuários legacy

### PRs em destaque (atividade recente):

| PR | Tamanho | Risco | Tema |
|----|---------|-------|------|
| [#7396](https://github.com/nearai/ironclaw/pull/7396) | XL | Low | **Slack streaming nativo** via `chat.startStream` — UX significativo |
| [#7171](https://github.com/nearai/ironclaw/pull/7171) | XL | Low | Skill mount: DB-backed tree por skill, skills são executáveis |
| [#7395](https://github.com/nearai/ironclaw/pull/7395) | XL | Low | TOCTOU race em `claim_delivery_attempt_for_send` — bug crítico |
| [#7291](https://github.com/nearai/ironclaw/pull/7291) | XL | Low | Inspector: statistics, navigation, localization |
| [#7373](https://github.com/nearai/ironclaw/pull/7373) | L | Low | **Auditoria completa de gates** — 37 arquivos, 5 in-crate modules, ~80 CI scripts |

---

## 5. Bugs e Estabilidade

### Bugs reportados (por severidade):

**P1 (Críticos):**
- **[#6989](https://github.com/nearai/ironclaw/issues/6989)** — Token accounting incorreto em `ModelWorkRequest::for_assistant`
  - Estima do reference string em vez do conteúdo
  - Afeta pi-harness adoption program
  - **Pode impactar billing e usage tracking**

**P2 (Altos):**
- **[#7360](https://github.com/nearai/ironclaw/issues/7360)** — Gap de regressão em built-in capability writes
  - Stress harness não exercita tool calls
  - Regressões podem landar sem detecção

**Menores/Fixos:**
- **[#7395](https://github.com/nearai/ironclaw/pull/7395)** (PR aberto) — TOCTOU race em outbound send-claim
  - `claim_delivery_attempt_for_send` mal.classificava claim losers
- **[#7352](https://github.com/nearai/ironclaw/pull/7352)** (PR aberto) — Gate projection identities duplicadas
  - Múltiplas gates no mesmo run geravam IDs idênticos

### Melhorias de estabilidade merged:

- [#7382](https://github.com/nearai/ironclaw/pull/7382): Scripted tool-call workload para stress
- [#7029](https://github.com/nearai/ironclaw/pull/7029): Durable delivery claim compare-and-swap
- [#7028](https://github.com/nearai/ironclaw/pull/7028): Terminal status preservation durante recovery
- [#7373](https://github.com/nearai/ironclaw/pull/7373): Auditoria de 37 gates e 5 fail-opens identificados

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas proposals em destaque:

1. **[#7317](https://github.com/nearai/ironclaw/issues/7317)** — Doc-Truth Verification Pipeline *(Proposta)*
   - Pipeline automatizado para detectar breaking changes sem docs
   - Resposta a problema recorrente: shipping sem documentação
   - **Sinal de roadmap:** Investimento em DX e processo de release

2. **[#7392](https://github.com/nearai/ironclaw/issues/7392)** — Replace first-party coding tools com OMP tool surface *(Epic, OPEN)*
   - Substituir ferramentas de coding visíveis ao modelo
   - Usar contract exato de `oh-my-pi`
   - **Sinal:** Evolução do toolchain de coding agent

3. **[#7218](https://github.com/nearai/ironclaw/issues/7218)** — Epic: Web Debug Inspector *(v1.1.0)*
   - Inspector via `?debug=true` com 3 views: Prompt, Activity, Stats
   - Feature-operator para debugging de prompt construction e tool execution

4. **[#6939](https://github.com/nearai/ironclaw/issues/6939)** — Migration tool para legacy agents
   - Port de Hermes/Openclaw setup, config e memória
   - **Sinal:** Consolidação de base de usuários legacy

### Sinais de arquitetura (Reborn migration):

- [#3280](https://github.com/nearai/ironclaw/issues/3280) (CLOSED): ProductWorkflow facade
- [#3288](https://github.com/nearai/ironclaw/issues/3288) (CLOSED): Capability lifecycle admin parity
- [#4539](https://github.com/nearai/ironclaw/issues/4539) (CLOSED): Epic Reborn approvals parity
- [#4470](https://github.com/nearai/ironclaw/issues/4470) (CLOSED): Refactor reborn composition em crates com CI boundaries

---

## 7. Resumo de Feedback dos Usuários

### Dores identificadas nos dados:

1. **Switching costs de legacy agents** ([#6939](https://github.com/nearai/ironclaw/issues/6939))
   - Usuários de Hermes/Openclaw enfrentam perda de setup, configuração e memória
   - Resistência a migrar sem ferramenta de port
   - **Impacto:** Bloqueio de aquisição

2. **Breaking changes sem documentação** ([#7317](https://github.com/nearai/ironclaw/issues/7317))
   - Exemplos concretos: `origin_gate_matrix` virou mandatory sem notice
   - Produtividade afetada durante updates
   - **Impacto:** DX degradado, suporte erhöht

3. **Latência em Telegram** ([#7364](https://github.com/nearai/ironclaw/pull/7364) — já fixado)
   - Multi-minute turn latency com zero in-channel feedback
   -用户体验: sistema parece não responder
   - **Status:** Corrigido no main

4. **Stress coverage insuficiente** ([#7360](https://github.com/nearai/ironclaw/issues/7360))
   - Regressões em built-in writes passam despercebidas
   - Confiança em CI comprometida
   - **Impacto:** Risco de produção

### Cenários de uso destacados:

- Rotinas web-created com Slack delivery ([#7390](https://github.com/nearai/ironclaw/pull/7390))
- Skills como ferramentas de extensibilidade ([#7171](https://github.com/nearai/ironclaw/pull/7171))
- Admin debugging via thread scraping ([#7228](https://github.com/nearai/ironclaw/pull/7228))

---

## 8. Backlog que Merece Atenção

### Issues sem atividade recente (requer triagem):

| Issue | Idade | Tema | Prioridade |
|-------|-------|------|------------|
| [#3484](https://github.com/nearai/ironclaw/issues/3484) | ~3 meses | EPIC: Reborn Contributor Runway | P1 |
| [#3410](https://github.com/nearai/ironclaw/issues/3410) | ~3 meses | v2 engine driver model adapter | P1 |
| [#3905](https://github.com/nearai/ironclaw/issues/3905) | ~2.5 meses | User-scoped tool installs | Enhancement |
| [#4091](https://github.com/nearai/ironclaw/issues/4091) | ~2.5 meses | Extension lifecycle wiring | Refactoring |
| [#4382](https://github.com/nearai/ironclaw/issues/4382) | ~2 meses | Default OAuth account per provider | Enhancement |

### Issues abertas de alto impacto sem PR:

- **[#6989](https://github.com/nearai/ironclaw/issues/6989)** — Token accounting bug (P1, 5 comments)
- **[#7317](https://github.com/nearai/ironclaw/issues/7317)** — Doc-Truth pipeline (proposal, 3 comments)
- **[#7392](https://github.com/nearai/ironclaw/issues/7392)** — OMP tool surface replacement (epic)
- **[#6939](https://github.com/nearai/ironclaw/issues/6939)** — Legacy migration tool (P2)

### PRs bloqueados/dependentes:

- [#7048](https://github.com/nearai/ironclaw/pull/7048): Depends on [#7063](https://github.com/nearai/ironclaw/pull/7063) (não visível nos dados)
- [#7029](https://github.com/nearai/ironclaw/pull/7029): Depends on [#7028](https://github.com/nearai/ironclaw/pull/7028)

---

## Métricas de Saúde do Projeto

| Indicador | Valor | Status |
|-----------|-------|--------|
| Issues ativas (24h) | 9 | ✅ Normal |
| PRs abertos (24h) | 19 | ✅ Normal |
| PRs merged (24h) | 31 | ✅ Alto throughput |
| Releases (24h) | 0 | ⚠️ Nenhuma publicação |
| Novos contributors | 3+ | ✅ Comunidade ativa |
| Bugs P1 abertos | 1 | ⚠️ Requer atenção |
| PRs de bug/fix | ~10 | ✅ Foco em estabilidade |

---

*Relatório gerado em 2026-08-09 com base em dados do GitHub. Próxima atualização recomendada em 24h.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do Projeto CoPaw (QwenPaw) — 2026-08-09

## 1. Panorama do Dia

O projeto CoPaw (QwenPaw) apresenta **alta atividade de desenvolvimento** em 2026-08-09, com 18 issues e 50 PRs atualizados nas últimas 24h. Não houve lançamentos de novas versões, mas o volume de PRs em aberto (49) sinaliza um pipeline de código robusto com múltiplas contribuições simultâneas. A community está particularmente focada em **estabilidade do desktop** (macOS/Windows) e **robustez de integrações** (MCP, provedores externos). Dois bugs críticos foram fechados (#6756, #4558), indicando resolução ativa de problemas reportados. A ausência de releases sugere que a equipe está consolidando contribuições antes de um próximo versionamento.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto encontra-se em período de desenvolvimento ativo (provavelmente versões beta 2.1.0), com貢獻 sendo preparadas para futura publicação.

---

## 3. Progresso do Projeto

| PR | Título | Tipo | Destaque |
|----|--------|------|----------|
| [#6527](https://github.com/agentscope-ai/QwenPaw/pull/6527) | `feat(runtime): add cancellation-safe lifecycle hooks` | Feature | Adiciona fase `ON_CANCEL` para persistir estado interrompido de agentes, incluindo respostas parciais e cron history |
| [#6704](https://github.com/agentscope-ai/QwenPaw/pull/6704) | `feat(chat): session fork — snapshot conversation context` | Feature | Permite fork de sessão com contexto completo copiado (feature aguardada: issue #6560) |
| [#6778](https://github.com/agentscope-ai/QwenPaw/pull/6778) | `docs: agent memory upgrade practice guide` | Docs | Guia de práticas para memória de agentes com camadas, symbolic canvas e busca híbrida |
| [#6492](https://github.com/agentscope-ai/QwenPaw/pull/6492) | `fix(console): infinite scroll rendering performance` | Bug Fix | Resolve problema de renderização infinita no console |

**PR em destaque:** #6527 introduz um padrão robusto para cancelamento de operações em agentes, crucial para reliability em ambientes de produção.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários)

| # | Título | Comentários | Categoria |
|---|--------|-------------|-----------|
| [#6782](https://github.com/agentscope-ai/QwenPaw/issues/6782) | Docker plugin/app market "manutenção" permanente | 9 | Bug |
| [#6811](https://github.com/agentscope-ai/QwenPaw/issues/6811) | OpenAI Responses: `disable_thinking` ignorado | 5 | Bug |
| [#6490](https://github.com/agentscope-ai/QwenPaw/issues/6490) | Adicionar Volcengine Agent Plan + Xiaomi MiMo | 5 | Feature |

**Análise:**
- **Dockerização**: Usuários reportam impossibilidade de usar markets em containers Docker v2.0.1 — barreira significativa para deployments containerizados.
- **OpenAI Responses**: Problema com modelos de raciocínio onde `disable_thinking` não funciona na geração de resumos de continuação, causando bloqueios de 60s.
- **Novos provedores**: Demanda por expandrir ecossistema com Volcengine (ByteDance) e Xiaomi MiMo, indicando interesse em provedores asiáticos.

---

## 5. Bugs e Estabilidade

### Crashes Críticos
| Severidade | Issue | Descrição |
|------------|-------|-----------|
| 🔴 Crítico | [#6814](https://github.com/agentscope-ai/QwenPaw/issues/6814) | SIGBUS (`FS pagein 22`) em `sqlite3WalFindFrame` ao abrir history.db no macOS — crash direto do SQLite WAL |
| 🔴 Crítico | [#6822](https://github.com/agentscope-ai/QwenPaw/issues/6822) | Falha transitória MCP streamable HTTP bloqueia conversa permanentemente após reconnect automático |

### Bugs de UI/UX
| Severidade | Issue | Descrição |
|------------|-------|-----------|
| 🟠 Alto | [#6828](https://github.com/agentscope-ai/QwenPaw/issues/6828) | Console em idle com ~20% CPU por animações CSS infinitas (blink + offscreen spinner) |
| 🟠 Alto | [#6820](https://github.com/agentscope-ai/QwenPaw/issues/6820) | UI não exibe output/ferramentas/thinking em tempo real — só aparece ao completar |
| 🟠 Alto | [#6826](https://github.com/agentscope-ai/QwenPaw/issues/6826) | Tempo de resposta do assistente 显示 incorreto (2min → segundos) |

### Bugs de Integração
| Severidade | Issue | Descrição |
|------------|-------|-----------|
| 🟠 Alto | [#6812](https://github.com/agentscope-ai/QwenPaw/issues/6812) | Google Gemini API rejeita `$schema` em tool schemas |
| 🟠 Alto | [#6831](https://github.com/agentscope-ai/QwenPaw/issues/6831) | macOS Desktop: Whisper local com "ffmpeg disabled" — PATH exclui `/opt/homebrew/bin` |
| 🟡 Médio | [#6813](https://github.com/agentscope-ai/QwenPaw/issues/6813) | `KeyError: '__aiter__'` ao gerar títulos de chat automaticamente |

### Bugs Resolvidos (24h)
- ✅ [#6756](https://github.com/agentscope-ai/QwenPaw/issues/6756): `run_tool_batch` com "No toolkit available" — **CLOSED**
- ✅ [#4558](https://github.com/agentscope-ai/QwenPaw/issues/4558): CPU anormalmente alto em outputs longos — **CLOSED**

---

## 6. Pedidos de Features e Sinais de Roadmap

| # | Feature | Autor | Indicador Estratégico |
|---|---------|-------|----------------------|
| [#6490](https://github.com/agentscope-ai/QwenPaw/issues/6490) | Volcengine Agent Plan + Xiaomi MiMo como providers nativos | TinyBai | Expansão de mercado China |
| [#6832](https://github.com/agentscope-ai/QwenPaw/issues/6832) | AI descreve审批 items antes de solicitar aprovação | wwth8819 | UX de segurança |
| [#6827](https://github.com/agentscope-ai/QwenPaw/issues/6827) | Limpar arquivos temporários ao deletar conversa | gy23rm | Gestão de storage |
| [#5069](https://github.com/agentscope-ai/QwenPaw/pull/5069) | Visual model fallback para modelos text-only | yuanxs21 | Multimodalidade |

**Sinal de roadmap:** A combinação de #6490 + PRs de reranker (#6398) + cache de assets (#6232) sugere foco em **melhoria de performance** e **expansão de provedores** para a próxima release.

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais

| Dor | Frequência | Impacto |
|-----|------------|---------|
| **Instabilidade em macOS** | Alta | Crashes SQLite, ffmpeg não encontrado, PATH issues |
| **Windows install/update broken** | Alta | Arquivos travados por processos (browser extension, NM host) impedem update |
| **UI não responsiva em tempo real** | Alta | Usuário não vê output/thinking até completion — percepção de "travado" |
| **Markets inacessíveis no Docker** | Média | Blocka uso containerizado (v2.0.1) |
| **MCP connection fragility** | Média | Falha transitória = bloqueio permanente da conversa |

### Cenários de Uso Reportados
- **Agentes com reasoning**: Modelos como DeepSeek V4 com thinking mode estão gerando 400 BadRequest por `reasoning_content` não retornado corretamente (#6821).
- **Deploys autogerenciados**: Usuários com memória de agente auto-hospedada enfrentam recall misses por busca apenas por keyword (#6778 docs).
- **Multi-canal**: Correção de WeCom graceful shutdown (#4269) beneficia operações 24/7.

---

## 8. Backlog que Merece Atenção

### Issues sem resposta significativa (>7 dias sem atividade ou resolução)

| # | Título | Criado | Status | Prioridade |
|---|--------|--------|--------|------------|
| [#6490](https://github.com/agentscope-ai/QwenPaw/issues/6490) | Adicionar Volcengine + Xiaomi providers | 2026-07-27 | Open | Alta |
| [#5069](https://github.com/agentscope-ai/QwenPaw/pull/5069) | Visual model fallback | 2026-06-10 | Open | Média |
| [#4269](https://github.com/agentscope-ai/QwenPaw/pull/4269) | WeCom graceful shutdown | 2026-05-13 | Open | Média |
| [#4321](https://github.com/agentscope-ai/QwenPaw/pull/4321) | Hot-reload para mcp.clients/skills | 2026-05-14 | Open | Alta |
| [#5061](https://github.com/agentscope-ai/QwenPaw/pull/5061) | DingTalk empty AI Card fix | 2026-06-10 | Open | Baixa |

### PRs Pendentes de Review

| # | Título | Idade | Bottleneck |
|---|--------|-------|------------|
| [#6398](https://github.com/agentscope-ai/QwenPaw/pull/6398) | Reranker support para ReMe (Under Review) | ~17 dias | Code review |
| [#6232](https://github.com/agentscope-ai/QwenPaw/pull/6232) | Cache/compress static assets | ~23 dias | Prioridade |
| [#5492](https://github.com/agentscope-ai/QwenPaw/pull/5492) | Plugin install via pip | ~46 dias | Escopo/validação |

---

## Indicadores de Saúde do Projeto

| Indicador | Valor | Avaliação |
|-----------|-------|-----------|
| Atividade Issues (24h) | 18 | 🟢 Alta |
| Atividade PRs (24h) | 50 | 🟢 Muito alta |
| Bugs críticos abertos | 2 | 🟡 Atenção |
| PRs em "Under Review" | 1 | 🟢 Pipeline fluindo |
| Releases (7d) | 0 | 🟡 Pré-release |

**Conclusão geral:** O projeto está em **fase de desenvolvimento intensa** com foco em estabilidade cross-platform (macOS/Windows) e robustness de integrações (MCP, provedores). A ausência de releases indica consolidação imminent. Recomenda-se atenção prioritária aos crashes SQLite em macOS e ao problema de install no Windows.

---

*Relatório gerado em 2026-08-09 com base em dados do GitHub do CoPaw (agentscope-ai/QwenPaw).*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-08-09

## 1. Panorama do Dia

O ecossistema ZeroClaw mantém alta atividade com **50 issues e 50 PRs atualizados nas últimas 24h**, indicando intenso trabalho de desenvolvimento e revisão. **Nenhuma release foi publicada**, sinalizando que a equipe está em ciclo de maturação de funcionalidades antes de下一个tag. Observa-se concentração significativa de **bugs de alta severidade (p1)** relacionados a segurança, runtime e canais de comunicação, muitos em andamento. A comunidade demonstra engajamento substancial com RFCs e debates técnicos densos, enquanto um único contributor (@IftekharUddin) aparece consistentemente como autor de múltiplos PRs pendentes de ação.

---

## 2. Lançamentos

**Nenhum release publicado nas últimas 24h.**

O projeto encontra-se em período de desenvolvimento ativo sem tagged releases recentes. Recomenda-se monitorar o repositório para próximas publicações.

---

## 3. Progresso do Projeto

### PR Merged/Fechado Recentemente

| # | Título | Autor | Impacto |
|---|--------|-------|--------|
| [#9843](https://github.com/zeroclaw-labs/zeroclaw/issues/9843) | bug(zerocode): long-lived client can enter sustained CPU spin alongside daemon | Audacity88 | **Encerrado** — Corrigiu condição de CPU spin em sessões longas entre daemon e cliente ZeroCode |

### PRs Abertos em Revisão (Pendentes de Autor)

O contributor **@IftekharUddin** (distinguished) domina a fila de PRs com **17 pull requests** aguardando ação do autor:

| # | Título | Tamanho | Prioridade | Área |
|---|--------|---------|------------|------|
| [#9320](https://github.com/zeroclaw-labs/zeroclaw/pull/9320) | fix(cron): bound agent job runs with wall-clock timeout | XL | p1 | runtime |
| [#9313](https://github.com/zeroclaw-labs/zeroclaw/pull/9313) | fix(wechat): persist sync cursor only after inbound batch enqueued | XL | p1 | channel:wechat |
| [#9263](https://github.com/zeroclaw-labs/zeroclaw/pull/9263) | feat(providers): route refusals through client-side fallback | XL | — | provider |
| [#9224](https://github.com/zeroclaw-labs/zeroclaw/pull/9224) | feat(eval): repeated live runs with pass@k, pass^k, error bars | XL | — | ci/eval |
| [#9219](https://github.com/zeroclaw-labs/zeroclaw/pull/9219) | feat(eval): workspace, budget, json-field graders | XL | — | ci/eval |
| [#9217](https://github.com/zeroclaw-labs/zeroclaw/pull/9217) | refactor(eval): async Grader trait wired through runner | XL | — | ci/eval |
| [#8955](https://github.com/zeroclaw-labs/zeroclaw/pull/8955) | fix(telegram): batch media group attachments | XL | p2 | channel:telegram |
| [#9248](https://github.com/zeroclaw-labs/zeroclaw/pull/9248) | feat(eval): append-only run-history receipts | XL | — | eval |
| [#9244](https://github.com/zeroclaw-labs/zeroclaw/pull/9244) | feat(eval): seed and grade isolated case memory | XL | — | eval |
| [#9223](https://github.com/zeroclaw-labs/zeroclaw/pull/9223) | feat(eval): junit xml report format | XL | — | eval |
| [#9281](https://github.com/zeroclaw-labs/zeroclaw/pull/9281) | fix(config): roll back auto-created map aliases on failure | M | p1 | config |
| [#9314](https://github.com/zeroclaw-labs/zeroclaw/pull/9314) | fix(telegram): advance long-poll offset only after delivery | L | p1 | channel:telegram |
| [#9321](https://github.com/zeroclaw-labs/zeroclaw/pull/9321) | fix(telegram): send unauthorized notice for media messages | L | p2 | channel:telegram |
| [#9325](https://github.com/zeroclaw-labs/zeroclaw/pull/9325) | fix(runtime): make streamed user turns read as conversation | M | p2 | runtime |
| [#9317](https://github.com/zeroclaw-labs/zeroclaw/pull/9317) | fix(zerocode): render transient frames as viewport slice | L | p2 | zerocode |
| [#9229](https://github.com/zeroclaw-labs/zeroclaw/pull/9229) | fix(runtime): make interactive Ctrl+C state-aware | L | p2 | runtime |
| [#9002](https://github.com/zeroclaw-labs/zeroclaw/pull/9002) | fix(gateway): keep agent turns alive after viewer disconnect | M | p1 | gateway/web |

**Destaque:** A maioria dos PRsXL (9 de 17) ataca a infraestrutura de avaliação (eval), introduzindo:
- `pass@k` / `pass^k` com barras de erro para medições estatísticas
- Graders assíncronos e workspace-aware
- Formato JUnit XML para integração CI
- Replay fixtures com casos de regressão

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (Comentários)

| # | Título | Comentários | Tags Relevantes |
|---|--------|-------------|-----------------|
| [#8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424) | RFC: Workspace-relative forbidden path patterns | **11** | enhancement, security, RFC |
| [#8043](https://github.com/zeroclaw-labs/zeroclaw/issues/8043) | RFC: Retire aardvark-sys crate | **10** | architecture, hardware, RFC |
| [#8054](https://github.com/zeroclaw-labs/zeroclaw/issues/8054) | System prompt tool-availability mismatch | **10** | bug, security, runtime |
| [#9348](https://github.com/zeroclaw-labs/zeroclaw/issues/9348) | WhatsApp Web security: all DMs/groups answered | **9** | bug, security, priority:p1 |
| [#5514](https://github.com/zeroclaw-labs/zeroclaw/issues/5514) | Telegram media groups batching | **6** | bug, channel:telegram |
| [#8550](https://github.com/zeroclaw-labs/zeroclaw/issues/8550) | OpenAI-compatible chat completions endpoint | **6** | enhancement, gateway |

### Análise dos Temas Principais

1. **Segurança de Paths (#8424):** RFC para adicionar suporte a `.zeroclawignore` e padrões workspace-relative em `forbidden_paths`. Atualmente, arquivos sensíveis internos (`.env`, `rust-toolchain.toml`) não podem ser protegidos.

2. **Consolidação de Crates (#8043, #9803):** Dois RFCs paralelos propõem fundir `aardvark-sys` e `zeroclaw-robot-kit` em `zeroclaw-hardware`, simplificando a estrutura do workspace.

3. **Incompatibilidade de Ferramentas (#8054):** Bug crítico onde o system prompt informa "No tools available" mesmo quando ferramentas nativas/MCP estão presentes — afeta múltiplos pontos de entrada (WebSocket, multimodal, /think).

4. **Vazamento de WhatsApp (#9348):** Configuração em `mode = business` com `allowed_groups` vazio responde a TODOS os grupos e DMs — risco S1.

---

## 5. Bugs e Estabilidade

### Bugs por Severidade

#### 🔴 Priority 1 (S1/S2 — workflow bloqueado ou degradado)

| # | Título | Status | Risco | Link |
|---|--------|--------|-------|------|
| #8054 | Tool-availability mismatch no system prompt | in-progress | high | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8054) |
| #9348 | WhatsApp responde a todos DMs/grupos | in-progress | high | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/9348) |
| #8559 | Agentes param ao sair da web dashboard | in-progress | high | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8559) |
| #9207 | web_fetch retorna garbage em respostas gzip/brotli | in-progress | medium | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/9207) |
| #9390 | Emergency stop é CLI-only e não é lido pelo runtime | in-progress | high | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/9390) |
| #9340 | CLI cron jobs têm delivery hardcoded para None | in-progress | high | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/9340) |
| #9815 | forbidden_paths é inacessível para paths internos | accepted | high | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/9815) |
| #9825 | Leak detection redacts endereços blockchain públicos | accepted | high | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/9825) |
| #9816 | Anthropic provider reporta $0.00 spend | accepted | high | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/9816) |
| #9573 | Cost pricing lookup falha com múltiplos aliases | accepted | high | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/9573) |
| #9805 | SOP auto-mode nunca executa e rot como 'running' | in-progress | high | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/9805) |
| #9387 | Aprovações interativas aceitas de qualquer membro | in-progress | high | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/9387) |
| #8731 | MCP servers stdio acumulam como zombie processes | in-progress | high | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8731) |
| #9834 | Test failures intermitentes por shared process-global state | accepted | high | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/9834) |

#### 🟡 Priority 2 (S3 — menor ou cosmetics)

| # | Título | Status | Risco | Link |
|---|--------|--------|-------|------|
| #5514 | Telegram media groups não batchados | in-progress | medium | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/5514) |
| #9486 | High-entropy detector redacts endereços Solana | in-progress | high | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/9486) |
| #8445 | Telegram multi-message mode | in-progress | medium | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8445) |
| #9656 | Typing indicator continua durante approval wait | in-progress | medium | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/9656) |
| #9035 | Docker Compose gateway em loopback | in-progress | high | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/9035) |
| #9202 | zeroclaw desktop usa URL morta | in-progress | medium | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/9202) |

**Nota:** 5 bugs de segurança (S1/high) estão abertos com etiqueta `security`, indicando superfície de ataque ativa.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Propostas

| # | Título | Prioridade | Sinais Estratégicos | Link |
|---|--------|------------|---------------------|------|
| #8550 | OpenAI-compatible chat completions endpoint | p2 | Integração com clientes padrão (Open WebUI, LobeChat) | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8550) |
| #9824 | Simplify web-tool surface para web_fetch + web_research + http_request | p1 | Consolidação de 5 ferramentas para 3 verbos distintos | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/9824) |
| #9496 | RFC: Streamline RFC scope, voting, assignment | p1 | Consciência interna de processo lento | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/9496) |
| #6663 | Telegram show tool-call progress during streaming | p2 | UX incremental para streaming parcial | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6663) |
| #7099 | Route zeroclaw status output through CLI i18n | p3 | Internacionalização incremental | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/7099) |

### Sinais de Roadmap

1. **API Compatibility:** Esforço para endpoint OpenAI-compatible (#8550) indica estratégia de baixa barreira para novos usuários.

2. **Consolidação de Ferramentas Web (#9824):** Reduzir superfície de 5 para 3 ferramentas com browser automation opt-in sugere foco em segurança e simplicidade.

3. **RFC Reform (#9496):** A equipe reconhece gargalo no processo RFC e buscaStreamline — indica madurecimento de governança.

4. **Refactoring de Hardware:** Cons

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*