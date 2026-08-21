# Resumo diário do ecossistema de agentes de IA 2026-08-22

> Issues: 0 | PRs: 1 | Projetos cobertos: 7 | Gerado em: 2026-08-21 20:19 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório do Projeto NullClaw — 2026-08-22

---

## 1. Panorama do Dia

O projeto NullClaw apresenta **baixa atividade nas últimas 24 horas**, sem novos lançamentos, issues abertas/fechadas ou demais atualizações significativas. A única movimentação registrada foi a **abertura de uma nova Pull Request (#990)** adicionando suporte ao provedor Eden AI como gateway compatível com OpenAI. O repositório encontra-se em estado de **manutenção estável**, sem indicadores de instabilidade ou regressões reportadas.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24 horas.**

O projeto não publicou novas versões desde o período analisado. Recomenda-se consultar o histórico de releases em [nullclaw/nullclaw/releases](https://github.com/nullclaw/nullclaw/releases) para verificações de versões anteriores.

---

## 3. Progresso do Projeto

| PR | Status | Título | Impacto |
|---|---|---|---|
| [#990](https://github.com/nullclaw/nullclaw/pull/990) | 🟡 ABERTA | `feat(providers): add Eden AI as an OpenAI-compatible gateway` | Expansão de provedores |

**Análise:** A PR #990 introduz suporte ao **Eden AI**, um agregador de provedores de IA que oferece acesso unificado a múltiplos vendors através de uma única chave API. A implementação segue o padrão existente de gateways compatíveis com OpenAI (`OpenAiCompatibleProvider`), mantendo consistência arquitetural com PRs anteriores como #922 (NEAR AI Cloud e Atlas Cloud).

**Aspectos técnicos observados:**
- Não requer implementação de novo provider
- Integração através de wrapper existente
- Proposta com foco em **conformidade EU-based**, relevante para requisitos de soberania de dados

---

## 4. Temas Quentes da Comunidade

**Nenhuma issue ou PR com atividade significativa de comentários/reações registrada nas últimas 24h.**

A PR #990, embora seja a única movimentação do período, **ainda não recebeu comentários ou reações** da comunidade, indicando que está em fase inicial de revisão. Recomenda-se monitorar o feedback dos maintainers nos próximos dias.

---

## 5. Bugs e Estabilidade

**Nenhum bug ou regressão reportado nas últimas 24 horas.**

O projeto não apresenta indicadores de instabilidade no período analisado. Sem incidentes de crashes ou falhas críticas abertas.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Feature em desenvolvimento:
- **Eden AI como gateway OpenAI-compatível** ([#990](https://github.com/nullclaw/nullclaw/pull/990)) — Adição de provedor que unifica múltiplos vendors de IA atrás de uma única API key, com benefícios em:
  - Redução de complexidade de gerenciamento de múltiplos provedores
  - Suporte a provedores EU-based (relevante para GDPR)
  - Padrão de implementação já consolidado no projeto

**Sinais de direção:**
A adição do Eden AI, seguindo o padrão de #922, sugere que o roadmap continua priorizando **extensibilidade de provedores** através de gateways compatíveis com a API OpenAI, facilitando эксперименталь (experimentação) com novos vendors sem alterações na arquitetura core.

---

## 7. Resumo de Feedback dos Usuários

**Nenhum feedback direto registrado nas últimas 24 horas.**

Ausência de issues ou comentários de usuários no período impede análise de dores ou satisfação. Recomenda-se:
- Monitorar Issues fechadas recentemente para contexto de problemas resolvidos
- Analisar discussões em PRs antigas para identificar padrões de demanda

---

## 8. Backlog que Merece Atenção

| Item | Tipo | Estado | Observação |
|---|---|---|---|
| [#990](https://github.com/nullclaw/nullclaw/pull/990) | PR | ABERTA | Aguardando review — Eden AI provider |
| Releases anteriores | — | — | Verificar releases pendentes de merge/feedback |

### Prioridades de acompanhamento:
1. **Revisar PR #990** — Feature pronto para avaliação que adiciona valor à cobertura de provedores
2. **Verificar PR #922 e similares** — Contexto arquitetural para a feature atual
3. **Histórico de releases** — Avaliar se há versões pendentes de publicação

---

## Indicadores de Saúde do Projeto

| Métrica | Status | Observação |
|---|---|---|
| Issues ativas | ✅ 0 | Nenhumaissue aberta sem resolução |
| PRs abertas | 🟡 1 | Em fase inicial de review |
| Bugs reportados | ✅ 0 | Sem regressões |
| Releases | ⚪ 0 | Sem atividade de publicação |
| Estabilidade geral | ✅ Estável | Base de código sem incidentes |

---

*Relatório gerado com base em dados do GitHub de [nullclaw/nullclaw](https://github.com/nullclaw/nullclaw) em 2026-08-22.*

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo do Ecossistema Open Source de Agentes de IA

**Data de referência:** 2026-08-22
**Projetos analisados:** NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw (QwenPaw), ZeroClaw

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **duas velocidades distintas** de desenvolvimento. Por um lado, projetos como **NanoBot, Hermes Agent e ZeroClaw** operam em escala industrial, com dezenas de PRs e issues atualizados diariamente, consolidando centenas de contribuições por ciclo de release. Por outro, **NullClaw** permanece em modo de manutenção estável com atividade mínima, enquanto **PicoClaw** e **IronClaw** mantêm cadências saudáveis porém mais focadas. A dominante tendência técnica do período é a **segurança e resiliência**: ZeroClaw endereça 10+ vulnerabilidades S0-S2, Hermes Agent luta contra corrupção de SQLite WAL, e NanoBot consolida métricas tipadas de providers. Simultaneamente, observabilidade e controle de custos emergem como diferenciadores de mercado, com múltiplos projetos investindo em tracking de usage por provedor e ferramentas de debugging granular.

---

## 2. Comparação de Atividade

| Projeto | Issues Ativas | PRs Atualizados | PRs Mergeados | Releases | Saúde |
|---------|---------------|-----------------|---------------|----------|-------|
| **NanoBot** | 2 | 36 | 23 | 0 | 🟢 Saudável |
| **Hermes Agent** | ~15 P1/P2 | 50 | 0 (em batch) | v0.20.5 | 🟡 Atenção |
| **ZeroClaw** | ~10 S0-S2 | 50 | Múltiplos | 0 | 🟡 Crítico |
| **CoPaw** | 19 | 36 | 15 | v2.1.1-beta.2 | 🟠 Regressões |
| **IronClaw** | 22 | 38 | 15 | 0 | 🟢 Saudável |
| **PicoClaw** | 1 | 5 | 5 | 0 | 🟢 Estável |
| **NullClaw** | 0 | 1 | 0 | 0 | ⚪ Manutenção |

**Observação crítica:** Hermes Agent (50 PRs em revisão sem nenhum merged) e ZeroClaw (~10 bugs críticos pendentes) representam os projetos com maior pressão técnica no período. NanoBot demonstra o melhor equilíbrio entre volume de contribuição e qualidade de resolução (23 merges em 24h).

---

## 3. Posicionamento do Projeto Principal

### NanoBot como Referência de Saúde do Ecossistema

**NanoBot (HKUDS/nanobot)** emerge como o projeto com melhor saúde operacional documentada:

**Vantagens técnicas:**
- **Contrato tipado de usage (#5478/#5480):** Padroniza métricas de tokens e cache em todas as interfaces (OpenAI Chat, OpenAI Responses, Anthropic, Bedrock), criando base sólida para billing e observabilidade enterprise
- **Trajetória unificada (#5479/#5481):** Rastreamento completo de cada tentativa de provider incluindo fallbacks e erros — essencial para debugging em produção
- **Segurança madura (#1149 PromptGuard):** Defesa em profundidade contra prompt injection com cobertura de overrides, confusão de papéis e injeção JSON
- **Expansão de deployment (#2063 Tauri):** App desktop com WebSocket channel demonstra antecipação de necessidades de UX além do terminal

**Diferenças estruturais:**
- Arquitetura de providers orientada a contratos tipados vs. dicionários dinâmicos
- Sistema de trajetória com retenção de reasoning ordenado
- Skill system com approval granular (CrowPay para autonomia financeira)

---

## 4. Focos Técnicos Compartilhados

### 4.1 Observabilidade e Controle de Custos

Todos os projetos maduros investem em métricas de uso:

| Projeto | Implementação |
|---------|---------------|
| **NanoBot** | Typed `LLMUsage` contract + trajetória unificada por provider |
| **Hermes Agent** | Reasoning effort display em `/status` (#91794) |
| **IronClaw** | Notification center com lifecycle state |
| **ZeroClaw** | Context compaction dinâmico baseado em model window ratio (#9535) |
| **CoPaw** | Token usage by agent tracking (#7207 PR) |

**Implicação:** O mercado enterprise exige controle granular de custos por provider, modelo e sessão — maturidade de billing se torna requisito de produção.

### 4.2 Segurança em Camadas Múltiplas

Três projetos enfrentam vulnerabilidades críticas simultaneamente:

| Projeto | Vulnerabilidade | Severidade |
|---------|-----------------|------------|
| **ZeroClaw** | Shell Tool Workspace Boundary Bypass | S0 |
| **ZeroClaw** | Bluesky/Reddit sem sender authorization | S1 |
| **Hermes Agent** | state.db corruption (SQLite WAL) | P1 |
| **NanoBot** | PromptGuard — defesa contra injection | — |
| **IronClaw** | Sandbox egress via per-user proxy | Arquitetural |

**Padrão:** O sucesso de adoption traz surface de ataque expandida. Projects que não investem em sandboxing e validation estão acumulando dívida técnica de segurança.

### 4.3 Multi-Provider e Multi-Cloud

Demanda consistente por flexibilidade de providers:

- **NanoBot:** DeepSeek V4 Flash Vision (#5474), Google Vertex AI request (#5459)
- **NullClaw:** Eden AI como gateway OpenAI-compatible (#990)
- **CoPaw:** Creator 1.1.0 com Anthropic/Gemini (#7167)
- **IronClaw:** OAuth registration fixes (#7308)
- **ZeroClaw:** Runtime proxy para OpenAI Responses (#9606)

**Sinal de mercado:** Usuários enterprise não querem lock-in em provedor único. Providers agregadores (Eden AI) e wrappers OpenAI-compatible ganham tração como camada de abstração.

### 4.4 Resiliência de Canais

Bugs de estabilidade concentrados em handlers assíncronos:

| Canal | Projeto | Bug |
|-------|---------|-----|
| DingTalk | NanoBot | Background tasks leak (#5463) |
| Telegram | IronClaw | Bot pairing ambiguity (#7715) |
| Discord | ZeroClaw | Typing indicator stuck (#9198) |
| Notion MCP | NanoBot | Connection failure (#1168) |
| Slack | NanoBot | File download redirects (#5414) |

**Padrão:** Canais de mensagens externas requerem tratamento de edge cases de reconnect, redirect e lifecycle assíncrono que frequentemente escapam da suíte de testes padrão.

---

## 5. Análise de Diferenciação

### 5.1 Por Foco Primário

| Categoria | Projetos | Estratégia |
|-----------|----------|------------|
| **Observabilidade Enterprise** | NanoBot, Hermes Agent | Métricas granulares, debugging, billing |
| **Segurança e Sandboxing** | ZeroClaw, IronClaw | Proxies por usuário, fail-closed, CI gates |
| **Extensibilidade de Providers** | NullClaw, PicoClaw | Gateways compatíveis, protocolos novos |
| **Experiência do Usuário** | CoPaw, PicoClaw | Desktop apps, console responsivo, minimalismo |
| **Automação e Workflow** | IronClaw, Hermes Agent | Cron jobs, run gates, notifications |

### 5.2 Por Público-Alvo

| Público | Projetos Ideais | Características |
|---------|----------------|-----------------|
| **Desenvolvedores individuais** | NullClaw, PicoClaw | CLI-focused, baixo overhead, providers simples |
| **Times de produto** | NanoBot, Hermes Agent | Debugging rico, desktop client, integrations |
| **Enterprise multi-cloud** | ZeroClaw, IronClaw | Security hardening, compliance, notifications |
| **Power users Windows** | CoPaw | Desktop-first, WebView2, uploads drag-drop |

### 5.3 Diferenças Arquiteturais

| Aspecto | NanoBot | ZeroClaw | IronClaw |
|---------|---------|----------|----------|
| **Provider abstraction** | Contrato tipado imutável | Builder pattern + runtime proxy | Plugin via MCP |
| **Memory system** | Dream + trajectory backend | Arquitetura local-first proposta | Pluggable memory over MCP |
| **Security model** | PromptGuard (injection) | Shell policy hardening | Per-user sandbox with iron-proxy |
| **Channel handling** | Handler genérico com stream | Múltiplos adapters (WeChat, LINE) | WebUI + notifications |
| **Deployment** | Server + Tauri desktop | Desktop + gateway | Cloud-hosted + local |

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração

| Métrica | NanoBot | Hermes Agent | ZeroClaw | IronClaw |
|---------|---------|--------------|----------|----------|
| **PRs/24h** | 36 atualizados, 23 mergeados | 50 atualizados, 0 mergeados | 50 atualizados | 38 atualizados, 15 mergeados |
| **Bugs resolvidos** | 4 P2 | ~10+ P1-P2 | ~10 S0-S2 | 5 medium |
| **Release cycle** | Contínuo | ~1 mês (v0.20.4→v0.20.5) | Estável (v0.8.3) | Preparando v1.4.0 |

**Winner de velocidade:** NanoBot com melhor ratio de PRs mergeados vs. abertos (23/36 = 64%).

**Winner de escala:** Hermes Agent com 323 PRs consolidados em uma release — demonstra capacidade de gerenciar contribuição massiva.

### 6.2 Qualidade de Processos

**Indicadores positivos:**
- **IronClaw:** Bugs P2 resolvidos em <5 dias (Telegram: 17/08→21/08)
- **NanoBot:** 4 bugs críticos fechados em 24h com descrição clara de impacto
- **CoPaw:** Regression identified between v2.1.0→v2.1.1-beta.1 com issue documentada (#7206)

**Indicadores de atenção:**
- **Hermes Agent:** Skills index 29.8h desatualizado (limite: 26h) — automação de rebuild falhando
- **CoPaw:** WebView2 crash sem resolução há ~1 mês
- **ZeroClaw:** 4 workstreams tocando mesmo contrato sem owner designado (#9600)

### 6.3 Engajamento de Terceiros

| Projeto | Contribuidor Externo Notável | Contribuição |
|---------|------------------------------|--------------|
| **NanoBot** | @Laihiujin | Tauri desktop app |
| **NanoBot** | @flobo3 | Dream cursor fix |
| **IronClaw** | @rdisandro | Design System epic lead |
| **PicoClaw** | @unedtamps | Feature request de steering |
| **CoPaw** | Múltiplos | v2.1.1-beta.2 |

---

## 7. Sinais de Tendência

### 7.1 Tendências Confirmadas (Evidência em Múltiplos Projetos)

| Tendência | Evidência | Implicação |
|-----------|-----------|------------|
| **Desktop apps como canal primário** | NanoBot (Tauri), CoPaw (WebView2), Hermes Agent (desktop client), ZeroClaw (Android app) | Terminal é insuficiente para usuários non-technical; apps nativos substituem SaaS |
| **Observabilidade é feature** | Usage contracts, trajectory backends, /status com reasoning effort, dashboards | Enterprise adição requer debugging granular; billing é blocking para adoção |
| **Segurança em sandbox é estrutural** | ZeroClaw (shell policy), IronClaw (per-user proxy), NanoBot (PromptGuard) | Agents autônomos exigem isolamento equivalente a containers; não é optional |
| **Multi-provider como default** | Todos os projetos com providers alternativos | Lock-in em provedor único é risco de mercado; Abstração OpenAI-compatible é padrão de facto |
| **MCP como protocolo de extensibilidade** | IronClaw (memory over MCP), NanoBot (Notion MCP issues), CoPaw (MCP recovery) | MCP emerge como padrão de facto para tools/context; problemas de compatibilidade ainda comuns |

### 7.2 Tendências Emergentes (Sinais Precoces)

| Tendência | Sinais | Confiança |
|-----------|--------|-----------|
| **Local-first memory** | Hermes Agent (#85418), IronClaw (#7664) | 🟡 Média |
| **Approval granularity** | CoPaw (#7198), IronClaw (actionable notifications) | 🟡 Média |
| **Android como target** | ZeroClaw (#10205) | 🟢 Emergente |
| **Multi-agent collaboration** | PicoClaw (#423 WIP) | 🟡 Média |
| **Autonomous financial agents** | NanoBot CrowPay skill (#1539) | 🟢 Emergnete |
| **EU-based providers (GDPR)** | NullClaw Eden AI (#990) | 🟡 Média |

### 7.3 Riscos Identificados

| Risco | Projetos Afetados | Mitigação Necessária |
|-------|-------------------|---------------------|
| **SQLite WAL em alta concorrência** | Hermes Agent | Migration para engine ACID mais robusto ou redesign de locking |
| **Regression testing gaps** | CoPaw (WebView2), NanoBot (DingTalk leak) | CI coverage para edge cases assíncronos |
| **Coordenação de contratos** | ZeroClaw (#9600), Hermes Agent (skills index) | Designação clara de owners por domínio |
| **Security debt accumulation** | Projetos com múltiplos S0-S2 | Security sprint dedicado antes de próximas releases |

---

## 8. Recomendações para Decisores

### Para Adoção de Projeto

| Cenário | Recomendação | Projeto |
|---------|--------------|---------|
| **Debugging enterprise** | Priorizar observabilidade madura | **NanoBot** |
| **Compliance/GDPR (EU)** | Provider abstraction | **NullClaw** ou **NanoBot** |
| **Segurança máxima** | Sandboxing estrutural | **ZeroClaw** ou **IronClaw** |
| **Desktop-first Windows** | WebView2 + drag-drop | **CoPaw** |
| **Automação cloud-native** | Cron + notifications + CI | **IronClaw** |

### Para Contribuição

| Perfil | Recomendação |
|--------|--------------|
| **Bug fixes** | NanoBot (alta velocidade de merge), Hermes Agent (many P1s) |
| **Features de providers** | NullClaw (simplicidade), PicoClaw (protocolos novos) |
| **Segurança** | ZeroClaw (S0-S2 backlog), IronClaw (sandbox architecture) |
| **UX/Design** | IronClaw (Design System), CoPaw (Console redesign) |

---

*Relatório gerado com base em dados agregados de 7 projetos do ecossistema open source de agentes de IA em 2026-08-22. Métricas sujeitas a variação conforme ritmo de desenvolvimento.*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-08-22

---

## 1. Panorama do Dia

O NanoBot mantém um ritmo de desenvolvimento extremamente ativo, com **36 PRs e 6 issues atualizadas nas últimas 24 horas**, demonstrando alta produtividade da equipe e da comunidade. O dia foi marcado por **23 PRs mergeadas/fechadas**, indicando fluxo de integração contínuo, enquanto 2 issues abertas — uma sobre o canal DingTalk e outra sobre suporte ao Google Vertex AI — requerem atenção da equipe. Não houve novas releases, mas avanços significativos em refatorações de providers e no sistema de trajetória foram mergeados. A saúde geral do projeto permanece sólida com foco em estabilidade, observabilidade e expansão de provedores.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24 horas.**

O projeto está em intenso ciclo de desenvolvimento com múltiplas PRs empilhadas (stacked PRs) que devem compor a próxima versão. Recomenda-se monitorar os merges da refatoração de providers (#5480, #5478) e do backend unificado de trajetória (#5479, #5481) como candidatas para a próxima release.

---

## 3. Progresso do Projeto

### PRs Mergeadas/Fechadas de Destaque

| # | PR | Autor | Resumo |
|---|-----|-------|--------|
| [#5478](https://github.com/HKUDS/nanobot/pull/5478) | refactor(providers): define typed LLM usage contract | chengyongru | Substitui dicionários dinâmicos por contrato tipado imutável `LLMUsage`, normalizando métricas de tokens e cache nas interfaces OpenAI Chat, OpenAI Responses, Anthropic e Bedrock |
| [#5479](https://github.com/HKUDS/nanobot/pull/5479) | feat(trajectory): add unified provider usage backend | chengyongru | Registra uma linha de trajetória para cada tentativa gerenciada pelo retry, incluindo fallbacks, erros e cancelamentos, com métricas de uso por provedor |
| [#5442](https://github.com/HKUDS/nanobot/pull/5442) | fix(dream): advance cursor when tool errors were recovered | flobo3 | Corrige rejeição de runs do Dream quando tool errors eram recuperados pelo modelo, avançando corretamente o cursor de memória |
| [#5407](https://github.com/HKUDS/nanobot/pull/5407) | fix(cron): retire persisted heartbeat/dream system jobs when disabled | aiguozhi123456 | Garante que jobs persistidos em `cron/jobs.json` sejam removidos ao desabilitar heartbeat/dream via configuração |
| [#5474](https://github.com/HKUDS/nanobot/pull/5474) | feat(providers): support DeepSeek V4 Flash Vision | chengyongru | Adiciona suporte ao modelo `deepseek-v4-flash-vision-exp` com conversão multimodal e retenção de conteúdo estruturado |
| [#1149](https://github.com/HKUDS/nanobot/pull/1149) | feat(safety): Add PromptGuard | rexlunae | Adiciona módulo `nanobot.safety` com defesa contra prompt injection, cobrindo overrides de system prompt, confusão de papéis e injeção JSON |
| [#2063](https://github.com/HKUDS/nanobot/pull/2063) | feat: add Tauri desktop app with PyInstaller sidecar | Laihiujin | Introduce app desktop com WebSocket channel, shell Tauri v2, UI de chat e wizard de onboarding |
| [#1539](https://github.com/HKUDS/nanobot/pull/1539) | Add CrowPay skill | streacy | Adiciona skill de pagamento autônomo para agentes com regras de gastos configuráveis |
| [#5476](https://github.com/HKUDS/nanobot/pull/5476) | feat(tui): render LaTeX as Unicode | chengyongru | Renderiza LaTeX matemático como texto Unicode/plain em transcrições, suportando delimitadores inline e display |
| [#5414](https://github.com/HKUDS/nanobot/pull/5414) | fix(slack): validate file downloads across redirects | KDB-Wind | Valida downloads do Slack através de toda a cadeia de redirects, prevenindo URLs forjadas |

### Avanços Principais

- **Contrato tipado de usage**: A refatoração #5478/#5480 padroniza como todos os providers reportam uso de LLM, criando base sólida para observabilidade e billing
- **Trajetória unificada**: O backend #5479/#5481 permite rastreamento completo de cada tentativa de provider, essencial para debugging e otimização de custos
- **Segurança**: PromptGuard (#1149) adiciona camada de defesa contra ataques de injeção, tema crítico em agentes AI
- **Desktop**: App Tauri (#2063) expande opções de deployment além do gateway/server

---

## 4. Temas Quentes da Comunidade

### Issues/PRs com Maior Atenção

| # | Tipo | Título | Comentários | Reações |
|---|------|--------|-------------|---------|
| [#5198](https://github.com/HKUDS/nanobot/issues/5198) | Bug | Model switching in session not working | 4 | 0 |
| [#1168](https://github.com/HKUDS/nanobot/issues/1168) | Bug | Nanobot连接Notion MCP失败 | 2 | 0 |

### Análise das Demandas

**Issue #5198** — *Model switching in session*: Usuário reporta que não é possível trocar modelos durante uma sessão sem reconfigurar toda a instância. Issue foi fechada, sugerindo que o problema foi resolvido ou a abordagem foi rejeitada. Com 4 comentários, é a issue com maior discussão do período.

**Issue #1168** — *Notion MCP connection*: Usuário tenta conectar NanoBot ao Notion via MCP (Model Context Protocol) sem sucesso, enquanto o mesmo setup funciona com Claude. Indica possível incompatibilidade no handler MCP do NanoBot.

**PR #5420** — *Turn observability and safe recovery*: Adiciona visualização de cada turno do usuário com retenção de reasoning ordenado, ferramenta e edits, acumulando uso de provider. Este é um recurso esperado pela comunidade para debugging.

---

## 5. Bugs e Estabilidade

### Bugs Reportados (Issues Abertas)

| # | Severidade | Título | Descrição |
|---|-----------|--------|-----------|
| [#5463](https://github.com/HKUDS/nanobot/issues/5463) | — | DingTalk does not observe/drain inbound background tasks | Handler de stream DingTalk cria `asyncio.Task` sem observer terminal, potencialmente causando vazamento de tasks e mensagens não processadas |

### Bugs Corrigidos (Recentemente Mergeados)

| # | Prioridade | Título | Impacto |
|---|-----------|--------|---------|
| [#5442](https://github.com/HKUDS/nanobot/pull/5442) | p2 | Dream cursor blocked by recovered tool errors | Corrigia rejeição de runs válidos que recuperavam de erros transient |
| [#5407](https://github.com/HKUDS/nanobot/pull/5407) | p2 | Cron jobs not disabled when config says disabled | Impedia desativação efetiva de heartbeat/dream, consumindo tokens desnecessariamente |
| [#5457](https://github.com/HKUDS/nanobot/pull/5457) | p2 | Channel dispatcher crashes stop all outbound messages | Exceção não capturada em `_dispatch_outbound` podia paralisar todo o sistema de mensagens |
| [#5471](https://github.com/HKUDS/nanobot/pull/5471) | — | Ephemeral SDK runs persisting session state | Runs com `ephemeral=True` não honravam documentação de não persistência |

### Avaliação de Estabilidade

**Pontos Positivos:**
- 4 bugs críticos de regressão foram fechados nas últimas 24h
- Foco em exceptions boundaries (#5457) e lifecycle de tasks (#5463) melhora resiliência

**Pontos de Atenção:**
- Issue #5463 sobre tasks assíncronas no DingTalk permanece aberta — risco de resource leak
- Bug de model switching (#5198) foi fechado, mas deve ser verificado se realmente foi resolvido

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Feature Requests

| # | Título | Autor | Resumo |
|---|--------|-------|--------|
| [#5459](https://github.com/HKUDS/nanobot/issues/5459) | Add native Google Vertex AI provider for Claude | xuayan-nokia | Solicita provider first-class para rodar modelos Claude via Google Vertex AI, além dos providers existentes (Anthropic direto, OpenAI, Azure, Bedrock, Copilot, xAI) |

### Features em Desenvolvimento

| # | Título | Status | Detalhes |
|---|--------|--------|----------|
| [#5420](https://github.com/HKUDS/nanobot/pull/5420) | Turn observability and safe recovery | OPEN | Visualização granular de turnos, métricas de uso, recuperação de trabalho interrompido |
| [#5405](https://github.com/HKUDS/nanobot/pull/5405) | Support manual-only skill invocation | OPEN | Permite skills com side effects serem invocadas apenas por usuários, desabilitando para o modelo |
| [#5480](https://github.com/HKUDS/nanobot/pull/5480) | Typed LLM usage contract | OPEN | Contrato tipado para métricas de todos os providers |

### Sinais de Roadmap

1. **Observabilidade**: A comunidade demonstra forte interesse em métricas de uso (#5420, #5479, #5481) — indica maturidade do projeto e necessidade de controle de custos em ambiente enterprise
2. **Multi-cloud**: Demanda por Vertex AI (#5459) reforça tendência de querer rodar modelos em diferentes cloud providers
3. **Desktop**: App Tauri (#2063) finalizado mostra expansão para用户体验 além do terminal
4. **Segurança**: PromptGuard (#1149) merged indica priorização de segurança para agentes autonomous

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Dor | Issue | Contexto |
|-----|-------|----------|
| **Troca de modelo não funciona por sessão** | #5198 | Usuários esperam comportamento similar a SaaS AI (Claude, ChatGPT) onde podem trocar modelo a qualquer momento sem reconfiguração |
| **Integração MCP problemática** | #1168 | Usuários tentando usar NanoBot como hub de agents encontram barreiras com protocolos MCP externos |
| **Dream runs nunca completam** | #5441/#5442 | Usuários avançados de memory system reportavam que runs eram rejeitados mesmo quando modelo recuperava de erros |

### Cenários de Uso Emergentes

- **Agents autônomos com orçamento**: Skill CrowPay (#1539) indica adoção para agents que fazem compras/autonomia financeira
- **Desktop local**: App Tauri (#2063) e instalador Lumina (#1592) respondem a demanda por deployments on-premise
- **Renderização matemática**: Feature LaTeX as Unicode (#5476) atende usuários acadêmicos/técnicos

### Indicadores de Satisfação

- Alta taxa de PRs fechadas indica que equipe responde a issues
- Features como PromptGuard e Tauri app demonstram que projeto antecipa necessidades da comunidade
- 23 PRs mergeadas em 24h sugere processo de review saudável

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta há Tempo

| # | Título | Criado | Idade | Status | Prioridade |
|---|--------|--------|-------|--------|------------|
| [#1168](https://github.com/HKUDS/nanobot/issues/1168) | Notion MCP connection failure | 2026-02-25 | ~6 meses | CLOSED | — |

**Nota**: A issue #1168 foi fechada em 2026-08-21 após ~6 meses, mas sem resolução clara — usuário reportou problema de conexão que não foi debugado publicamente. Recomenda-se verificar se foi realmente resolvida ou se pode reabrir.

### PRs Abertas que Precisam Review

| # | Título | Prioridade | Idade | Importância |
|---|--------|-----------|-------|-------------|
| [#5480](https://github.com/HKUDS/nanobot/pull/5480) | Typed LLM usage contract | p2 | <1 dia | **Crítica** — base para outras PRs stacked |
| [#5481](https://github.com/HKUDS/nanobot/pull/5481) | Unifed provider usage backend | — | <1 dia | Depende de #5480 |
| [#5420](https://github.com/HKUDS/nanobot/pull/5420) | Turn observability | — | ~4 dias | Feature request popular |
| [#5463](https://github.com/HKUDS/nanobot/issues/5463) | DingTalk background tasks leak | — | 1 dia | **Bug potencialmente sério** |
| [#5459](https://github.com/HKUDS/nanobot/issues/5459) | Vertex AI provider | — | 2 dias | Demanda de comunidade |
| [#5379](https://github.com/HKUDS/nanobot/pull/5379) | Preserve full consolidation input | p2 | ~9 dias | Consolidação de memória pode perder dados |

### Recomendações de Priorização

1. **Alta**: Review de #5480/#5481 — bloqueia outras PRs e é foundation para observabilidade
2. **Alta**: Responder #5463 — leak de tasks assíncronas pode causar crashes em produção
3. **Média**: Avaliar #5459 — demanda de mercado para multi-cloud support
4. **Média**: Garantir que #5198 foi de fato resolvida — usuários esperam model switching funcional
5. **Baixa**: Verificar status de #1168 — fechada sem resolução aparente

---

## Métricas Resumidas do Período

| Métrica | Valor |
|---------|-------|
| Issues abertas/ativas | 2 |
| Issues fechadas | 4 |
| PRs abertas | 13 |
| PRs mergeadas/fechadas | 23 |
| Novas releases | 0 |
| Bugs críticos abertos | 1 |
| Feature requests abertas | 1 |
| PRs com priority:p2 | 8 |

---

*Relatório gerado automaticamente com base em dados do GitHub de HKUDS/nanobot em 2026-08-22.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-08-22

## 1. Panorama do Dia

O projeto Hermes Agent demonstra **altíssima atividade** nas últimas 24h, com 50 issues e 50 PRs atualizados. A release v0.20.5 (19/ago) consolida ~323 PRs desde a v0.20.4, sinalizando um ciclo de desenvolvimento muito produtivo. Três issues P1 relacionadas a **corrupção de state.db (SQLite WAL)** mobilizam atenção imediata, enquanto a comunidade reporta regressões pontuais no desktop client após a atualização. O volume de PRs abertos (todos ainda em revisão, nenhum merged/fechado) sugere um gargalo de review ou processo de merge em lote. A saúde geral é **boa com incidentes críticos em monitoramento**.

---

## 2. Lançamentos

### ✅ v2026.8.19 — Hermes Agent v0.20.5

| Campo | Detalhe |
|-------|---------|
| **Data** | 19 de agosto de 2026 |
| **Tipo** | Patch release |
| **PRs consolidados** | ~323 PRs desde v0.20.4 |
| **Destinatários** | Imagens Docker, deploys hospedados, instalações novas |

**Mudanças salientas:**
- Consolidação de centenas de contribuições em todas as áreas: agent, CLI, gateway, plugins, desktop, tools e providers
- Não há breaking changes documentadas explicitamente
- Correções de estabilidade que antecedem a release v0.20.5 aparentemente estão relacionadas às **regressões P1 de state.db** reportadas após o deploy

**Nota de migração:**
- Usuários que atualizaram de v0.20.4 para v0.20.5 reportam **sessões stale no Bot Mode do perfil default** ([#91749](https://github.com/NousResearch/hermes-agent/issues/91749)). Recomendação: verificar perfil default manualmente pós-update.

---

## 3. Progresso do Projeto

### PRs em destaque (últimas 24h)

| # | Título | Área | Tipo | Impacto |
|---|--------|------|------|---------|
| [#91493](https://github.com/NousResearch/hermes-agent/pull/91493) | Failed turns nomeiam a camada que falhou com ações de Recovery | Desktop | Feature | **Alto** — UX de debug dramatically improved |
| [#91754](https://github.com/NousResearch/hermes-agent/pull/91754) | Fail closed em state.db danificado antes de writes | Gateway/Agent | Bug Fix | **Crítico** —blinda contra corrupção WAL |
| [#90715](https://github.com/NousResearch/hermes-agent/pull/90715) | Validação do parâmetro `profile` no RPC antes da resolução de caminho | TUI | Security Fix | **Alto** — previne path traversal |
| [#91123](https://github.com/NousResearch/hermes-agent/pull/91123) | Dotted custom model overrides passam a funcionar | CLI/Config | Bug Fix | **Médio** — feature quebrada desde config rewrite |
| [#91793](https://github.com/NousResearch/hermes-agent/pull/91793) | Backups completos não aninham state snapshots | Backup | Bug Fix | **Médio** — consumo de disco e integridade |
| [#91794](https://github.com/NousResearch/hermes-agent/pull/91794) | Exibe reasoning effort efetivo em `/status` | Gateway | Feature | **Médio** — observabilidade |
| [#90928](https://github.com/NousResearch/hermes-agent/pull/90928) | UX broken de paginação de mensagens longas | Gateway/Desktop | UX Fix | **Médio** — usabilidade em sessões longas |
| [#91795](https://github.com/NousResearch/hermes-agent/pull/91795) | Cron jobs entregam com o bot do profile dono em multiplex | Cron | Bug Fix | **Médio** — correção de comportamento em setups avançados |
| [#91791](https://github.com/NousResearch/hermes-agent/pull/91791) | Bot row abre conversa correta em vez de desaparecer | Desktop/Bot Mode | Bug Fix | **Médio** — UX do roster de bots |
| [#91189](https://github.com/NousResearch/hermes-agent/pull/91189) | Append SSE `[DONE]` quando streams Nous omitem sentinel | Proxy/Nous | Bug Fix | **Médio** — compatibilidade com clientes strict |

**Situação geral:** 50 PRs abertos, nenhum merged/fechado nas últimas 24h — pipeline de merge pode estar em processamento.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários)

| # | Título | Comentários | Tipo | Status |
|---|--------|-------------|------|--------|
| [#78647](https://github.com/NousResearch/hermes-agent/issues/78647) | Large-file decomposition: 20/20 done (EPIC) | **77** | Refactoring | ✅ CLOSED |
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | Skills index is stale or degraded | **71** | Bug/Tool | 🔴 OPEN |
| [#88584](https://github.com/NousResearch/hermes-agent/issues/88584) | Automated Nous integration is blocked | **15** | Cron | 🟡 OPEN |
| [#90950](https://github.com/NousResearch/hermes-agent/issues/90950) | state.db corruption — SQLite 3.53.1 WAL | **8** | Bug P1 | 🔴 OPEN |
| [#90879](https://github.com/NousResearch/hermes-agent/issues/90879) | Bot Mode handoff replies destroyed | **7** | Bug | 🟡 OPEN |
| [#85418](https://github.com/NousResearch/hermes-agent/issues/85418) | Memory provider proposal: local-first | **6** | Feature | 🟢 OPEN |
| [#54352](https://github.com/NousResearch/hermes-agent/issues/54352) | Voice input via browser getUserMedia | **5** | Feature | 🟢 OPEN |

### Análise de demanda

**🔴 Crítico — Skills Index (#66616):**
- Index de skills está 29.8h desatualizado (limite: 26h)
- Impacta o Skills Hub em `/docs/skills`
- Automação de rebuild com cron (6/18 UTC) aparentemente falhando
- 71 comentários indicam que a comunidade depende fortemente do sistema de skills centralizado

**✅ Concluído — Epic de Decomposição (#78647):**
- 20/20 god-files shardados
- 77 comentários documentam o processo de refactoring
- Estabelece precedente: **"god files são shardados, nunca revertidos"**

**🟡 Proposta — Memória Local-First (#85418):**
- 2ndNatureAI propõe uma camada de memória local sem dependências externas
- Comparado com Honcho, construído sobre Hermes
- Indica demanda por **memória offline-first** e **privacidade de dados**

---

## 5. Bugs e Estabilidade

### 🔴 P1 — Críticos (requerem atenção imediata)

| # | Título | Área | Detalhe | Atualizado |
|---|--------|------|---------|------------|
| [#90950](https://github.com/NousResearch/hermes-agent/issues/90950) | state.db corruption — WAL sidecar unlink | Sessions/Agent | Corrupção recorrente com SQLite 3.53.1, writers concorrentes | 2026-08-21 |
| [#90806](https://github.com/NousResearch/hermes-agent/issues/90806) | state.db WAL sidecars substituídos sob holders vivos | Sessions/Gateway | Corrupção estrutural recorrente | 2026-08-21 |
| [#91277](https://github.com/NousResearch/hermes-agent/issues/91277) | Fleet update reliability (Tracking Epic) | Install/Update | ~30 issues + ~15 PRs fragmentados | 2026-08-21 |
| [#90835](https://github.com/NousResearch/hermes-agent/issues/90835) | Telegram hangs via gateway.run.start_gateway() | Gateway/Telegram | Funcional apenas com start direto | 2026-08-21 |

**Análise:** O cluster de issues P1 relacionados a **state.db/SQLite WAL** indica um problema estrutural com escrita concorrente. A PR [#91754](https://github.com/NousResearch/hermes-agent/pull/91754) ("fail closed on damaged state.db") é a resposta principal. **Recomendação: priorizar review e merge.**

### 🟡 P2 — Importantes

| # | Título | Área | Resumo |
|---|--------|------|--------|
| [#91670](https://github.com/NousResearch/hermes-agent/issues/91670) | HTTP MCP session morre silenciosamente ~10min | Agent/MCP | Sem log, sem retry, sem reconnect |
| [#91621](https://github.com/NousResearch/hermes-agent/issues/91621) | Codex TTFB scaling capped a 120s | Agent/OpenAI | Large-context penalizado |
| [#91770](https://github.com/NousResearch/hermes-agent/issues/91770) | Truncation continuation gated a chat modes | Agent/OpenAI | Responses API turn não continua |
| [#91698](https://github.com/NousResearch/hermes-agent/issues/91698) | search_files dropa resultados com espaços | Tools/File | `files_only` silenciosamente retorna 0 |
| [#89561](https://github.com/NousResearch/hermes-agent/issues/89561) | config set armazena listas/mappings como strings | CLI/Config | Composite values não funcionam |
| [#58083](https://github.com/NousResearch/hermes-agent/issues/58083) | ACP session/new hangs no boot (Windows) | ACP/Windows | Bloco completo em Windows |
| [#73403](https://github.com/NousResearch/hermes-agent/issues/73403) | Windows ACP adapter hangs em terminal tool | ACP/Windows | Terminal tool não avança |
| [#57911](https://github.com/NousResearch/hermes-agent/issues/57911) | Desktop sessions no projeto errado | Desktop/Profiles | Sessões pousam em workspace errado |

### 🟢 P3 — Correções menores

- **Bot Mode:** Replies destruídos no handoff ([#90879](https://github.com/NousResearch/hermes-agent/issues/90879))
- **Profiles:** Desktop recria perfis deletados via localStorage ([#89438](https://github.com/NousResearch/hermes-agent/issues/89438))
- **Desktop UI:** Preview pane sem botão de fechar ([#91723](https://github.com/NousResearch/hermes-agent/issues/91723))
- **Desktop UI:** Layout customizado não persiste ([#89548](https://github.com/NousResearch/hermes-agent/issues/89548))
- **Bot Mode:** Regressão stale preview no profile default pós-v0.20.5 ([#91749](https://github.com/NousResearch/hermes-agent/issues/91749))
- **Skills:** Validação de file_path antes do gate de aprovação ([#90711](https://github.com/NousResearch/hermes-agent/pull/90711) — PR disponível)

**Padrão identificado:** Cluster de issues de **isolamento de perfil** (memory, terminal, sessions, dashboard) em setups com múltiplos perfis ou Docker/s6-overlay.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features com alta demanda ou interesse estratégico

| # | Título | Área | Tipo | Demandante | Sinal |
|---|--------|------|------|------------|-------|
| [#91277](https://github.com/NousResearch/hermes-agent/issues/91277) | Fleet update reliability — unified plan | Install/Update | Epic | @teknium1 | **Roadmap** — Install/update é "least reliable capability" |
| [#54352](https://github.com/NousResearch/hermes-agent/issues/54352) | Browser-side microphone (getUserMedia) | Dashboard/Voice | Feature | @styles01 | 👍 3 — voz remota sem PortAudio server-side |
| [#85418](https://github.com/NousResearch/hermes-agent/issues/85418) | Local-first memory provider | Plugins/Memory | Proposal | 2ndNatureAI | **Tendência** — privacidade, offline-first |
| [#90810](https://github.com/NousResearch/hermes-agent/pull/90810) | Bot Mode localization (i18n) | Desktop/Bots | Feature PR | @oliverhees | i18n completo do Bot Mode |
| [#91531](https://github.com/NousResearch/hermes-agent/pull/91531) | Thinking/action text size setting | Desktop | Feature PR | @huklaa | Customização de UI |
| [#91794](https://github.com/NousResearch/hermes-agent/pull/91794) | Effective reasoning effort em /status | Gateway | Feature PR | @AllanAlmeida | Observabilidade operacional |
| [#90935](https://github.com/NousResearch/hermes-agent/pull/90935) | Configurable memory-pressure thresholds | Gateway/Dashboard | Feature PR | @aurorabotticus-svg | Hosts ZFS/TrueNAS com false positives |
| [#91125](https://github.com/NousResearch/hermes-agent/pull/91125) | Always-visible deferred-tool pins | Tools/ToolSearch | Feature PR | @boobutler | Controles finos de visibilidade de tools |
| [#90878](https://

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-08-22

---

## 1. Panorama do dia

O projeto PicoClaw apresenta **alta atividade de merge** nesta data, com **5 PRs fechadas/merged** nas últimas 24 horas e **nenhuma release publicada**. A atividade de issues permanece moderada, com 1 nova feature request aberta. O fluxo de desenvolvimento demonstra manutenção contínua, com foco em melhorias de ferramentas, documentação e protocolos de integração. A ausência de releases indica que o código está em fase de consolidação sem tagging formal.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24 horas.**

O projeto não emitiu novas versões neste período. Recomenda-se verificar a branch `main` para commits mais recentes, que podem conter funcionalidades ainda não versionadas.

---

## 3. Progresso do projeto

### PRs fechadas/merged recentemente:

| # | Título | Domínio | Impacto |
|---|--------|---------|---------|
| [#647](https://github.com/sipeed/picoclaw/pull/647) | Improve WebFetchTool text extraction with HTML entity decoding | Tool | **Alto** — Melhora qualidade de extração de conteúdo web |
| [#1182](https://github.com/sipeed/picoclaw/pull/1182) | Add agents.md | Documentação | **Médio** — Guia principiológico para contribuidores |
| [#1158](https://github.com/sipeed/picoclaw/pull/1158) | Add anthropic-messages protocol | Protocolo | **Alto** — Suporte a API nativa Anthropic Messages |
| [#714](https://github.com/sipeed/picoclaw/pull/714) | Skills install/reinstall CLI | CLI | **Médio** — Interface para gerenciamento de skills |
| [#423](https://github.com/sipeed/picoclaw/pull/423) | Multi-agent collaboration framework (WIP) | Arquitetura | **Estratégico** — Base para colaboração entre agentes |

### Destaques de progresso:

- **Suporte expandido a provedores**: PR #1158 adiciona protocolo `anthropic-messages`, resolvendo a Issue #269 e habilitando uso de serviços compatíveis com API nativa Anthropic.
- **Qualidade de ferramentas**: PR #647 implementa decodificação de entidades HTML e preservação de estrutura, melhorando significativamente o `WebFetchTool`.
- **Framework multi-agent**: PR #423 introduz **Blackboard** (contexto compartilhado thread-safe), ferramentas de handoff e descoberta — base para arquiteturas colaborativas.

---

## 4. Temas quentes da comunidade

### Issue em destaque:

**[#3342](https://github.com/sipeed/picoclaw/issues/3342)** — [OPEN] Feature: Opt-in "after-turn" steering mode

- **Autor**: unedtamps
- **Reações**: 0 👍 | **Comentários**: 0
- **Resumo da demanda**: Quando usuário envia segunda mensagem durante processamento da primeira, o steering atual interrompe a tarefa em andamento. A feature request propõe um modo opcional que **enfileira** a segunda mensagem ao invés de interrompê-la.

**Análise**: Este é um padrão comum em interfaces conversacionais. A demanda sugere que o comportamento atual ("Skipped due to queued user message") não atende todos os casos de uso. Sem reactions, ainda não há validação clara da comunidade —值得关注后续反馈。

---

## 5. Bugs e estabilidade

**Nenhum bug reportado nas últimas 24 horas.**

Não há issues de bug abertas ou fechadas neste período. O projeto aparenta estabilidade operacional no momento.

---

## 6. Pedidos de features e sinais de roadmap

### Feature request nova:

**[#3342](https://github.com/sipeed/picoclaw/issues/3342)** — Modo "after-turn" steering com fila de mensagens

**Cenário descrito:**
```
Usuário envia msg #1 → Agente processa → Usuário envia msg #2 (durante processamento)
→ Comportamento atual: task #1 é interrompida
→ Comportamento desejado: msg #2 fica em fila até fim da task #1
```

**Implicações para roadmap:**
- Adiciona opção de configuração de steering mode
- Reforça padrão de fila FIFO para mensagens
- Potencial impacto em concorrência e ordem de execução

---

## 7. Resumo de feedback dos usuários

### Feedback implícito (via issues e PRs):

| Tipo | Indicação |
|------|-----------|
| **Positivo** | PRs sendo merged continuamente indicam aceitação do ritmo de desenvolvimento |
| **Necessidade** | Suporte a mais formatos de API (Anthropic Messages via PR #1158) |
| **Dores** | Comportamento de steering durante tarefas longas não atende todos os cenários |
| **Adoção** | Interesse em framework multi-agent (PR #423 com WIP) |

### Lacuna identificada:

A ausência de comments nas issues (0 para #3342) indica que a comunidade pode estar passiva ou que o canal de comunicação não está gerando engajamento direto.

---

## 8. Backlog que merece atenção

### Issues/PRs sem atividade recente que merecem revisão:

| # | Tipo | Título | Última atualização | Prioridade |
|---|------|--------|--------------------|------------|
| [#423](https://github.com/sipeed/picoclaw/pull/423) | PR (WIP) | Multi-agent collaboration framework | 2026-08-20 | **Alta** — Framework estratégico |
| [#3342](https://github.com/sipeed/picoclaw/issues/3342) | Issue | After-turn steering mode | 2026-08-21 | **Média** — aguardando triagem |

### Nota sobre PR #423 (WIP):
虽然是 Work-in-Progress, representa uma mudança arquitetural significativa. Recomenda-se acompanhamento próximo para entender dependências e timeline de finalização.

---

## Métricas consolidadas (últimas 24h)

| Indicador | Valor |
|-----------|-------|
| Issues abertas/ativas | 1 |
| Issues fechadas | 0 |
| PRs abertas | 0 |
| PRs fechadas/merged | 5 |
| Releases | 0 |
| Engajamento (reactions + comments) | 0 |

**Veredicto de saúde**: Projeto em **atividade moderada-alta** de desenvolvimento, sem sinais de problemas críticos. A alta taxa de merge vs. issues abertas sugere foco em execução. Atenção à validação da comunidade para a feature request #3342.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-08-22

## 1. Panorama do Dia

O IronClaw mantém um nível de atividade intenso e concentrado em preparação para a versão 1.4.0. Nas últimas 24 horas, 22 issues e 38 PRs foram atualizados, com 15 PRs merged/fechados — sinal de alta cadência de entrega. Os trabalhos se concentram em três eixos principais: **infraestrutura de CI** (4 épicos paralelos de expedição), **Design System da WebUI** (5 fases em andamento) e **segurança do sandbox** (implementação do proxy por usuário). Não houve releases formais neste período, indicando que o time está em fase de consolidação antes da próxima versão.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24 horas.**

O projeto encontra-se em fase de desenvolvimento ativo sem tags de versão publicadas neste período.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados (15 total)

| PR | Título | Escopo | Destaque |
|----|--------|--------|----------|
| [#7779](https://github.com/nearai/ironclaw/pull/7779) | `feat(sandbox)`: route user-sandbox egress through managed per-user proxy | sandbox | **Step 2 de #7732** — fluxo de shell agora passa por `ironsh/iron-proxy` sidecar em vez de `--network none` + host broker. Workers se juntam a redes Docker isoladas por `(tenant, user)` |
| [#7699](https://github.com/nearai/ironclaw/pull/7699) | `feat(notifications)`: publish actionable run gates | notifications | Publica eventos de approval-required, authentication-required e blocked-run na inbox durável do usuário |
| [#7796](https://github.com/nearai/ironclaw/pull/7796) | `fix(sandbox)`: preserve failed Railway audit appends | sandbox | Fail-closed ao appendar registros de auditoria; preserva captura e proxy para retry |
| [#7766](https://github.com/nearai/ironclaw/pull/7766) | `fix(telegram)`: separate bot pairing from personal device linking | telegram | Restaura identidade bot sem vincular à conta pessoal; requer escolha explícita no WebUI |
| [#7787](https://github.com/nearai/ironclaw/pull/7787) | `chore(agents)`: refresh codebase knowledge graph | ci | Refresh do snapshot de bootstrap da memória do codebase pela nightly workflow |
| [#7689](https://github.com/nearai/ironclaw/pull/7689) | Generalize notification center and consume server-backed inbox | webui | Introduz modelo genérico de apresentação de notificações no frontend com suporte a kind, severity, icon, timestamp e lifecycle state |

### Avanços-chave:
- **Sandbox persistente**: Implementação do proxy sidecar por usuário (#7779) avança significativamente o épico [#7732](https://github.com/nearai/ironclaw/issues/7732)
- **Sistema de notificações**: Consolidação da inbox durável com notificações acionáveis (#7699) e refatoração do frontend (#7689)
- **Telegram**: Correção da ambiguidade no fluxo de conexão entre bot e conta pessoal

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| Issue | Título | Comentários | Categoria |
|-------|--------|-------------|----------|
| [#7732](https://github.com/nearai/ironclaw/issues/7732) | Epic: Persistent per-user sandbox with iron-proxy | 8 | **Épico central v1.4.0** |
| [#7801](https://github.com/nearai/ironclaw/issues/7801) | CI expedite T4: canonical preflight | 3 | CI/CD |
| [#7799](https://github.com/nearai/ironclaw/issues/7799) | CI expedite T2: nextest pipeline | 3 | CI/CD |
| [#7800](https://github.com/nearai/ironclaw/issues/7800) | CI expedite T3: PR/queue convergence | 2 | CI/CD |
| [#7798](https://github.com/nearai/ironclaw/issues/7798) | CI expedite T1: setup-rust composite | 2 | CI/CD |
| [#7193](https://github.com/nearai/ironclaw/issues/7193) | feat(automations): add run-now manual fire | 2 | **Feature request** |
| [#7783](https://github.com/nearai/ironclaw/issues/7783) | LLM timeout policy bug | 1 | Bug |

### Análise dos Demandas

**1. Programa de Expedição CI (4 tracks paralelos)**
- Criados em 2026-08-21 por @henrypark133
- T1: Unificação do `setup-rust` (substitui 43 invocações espalhadas em 12 workflows)
- T2: Migração para `cargo-nextest` com JUnit failure roll-up
- T3: Convergência PR/queue com drift guard e clippy default-features
- T4: Canonical preflight gates com `core.hooksPath` worktree-safe
- **Demanda**: Redução de tempo de CI e consolidação de tooling fragmentado

**2. Design System WebUI (5 fases)**
- Fase 1: [#7038](https://github.com/nearai/ironclaw/issues/7038) — Storybook + catalog (PR [#7750](https://github.com/nearai/ironclaw/pull/7750) aberto)
- Fases 2-3: [#7781](https://github.com/nearai/ironclaw/issues/7781) — `DESIGN.md` governance + theme reskin
- Fases 4-5: [#7782](https://github.com/nearai/ironclaw/issues/7782) — agentic interactions e components
- **Demanda**: Padronização visual e governança de design

**3. Manual fire para automations (#7193)**
- Issue Closed com 2 comentários
- **Demanda**: Capacidade de disparar automações sob demanda (hoje só list/pause/resume/delete)

---

## 5. Bugs e Estabilidade

### Bugs Reportados/Resolvidos

| Issue | Severidade | Escopo | Status | Descrição |
|-------|------------|--------|--------|-----------|
| [#7783](https://github.com/nearai/ironclaw/issues/7783) | **medium** | llm | ✅ Closed | Timeout policy: finalização não mede TTFT; retry budget não cabe no deadline |
| [#7308](https://github.com/nearai/ironclaw/issues/7308) | **medium** | oauth/mcp | ✅ Closed | OAuth registration para Attio falha com scope inválido |
| [#7715](https://github.com/nearai/ironclaw/issues/7715) | **P2** | telegram | ✅ Closed | Fluxo Telegram não permite escolha entre bot e conta pessoal |
| [#7193](https://github.com/nearai/ironclaw/issues/7193) | — | automations | ✅ Closed | Ausência de trigger manual (run-now) |

### Observações de Estabilidade
- **Sandbox Railway**: Fix #7796 aborda falha silenciosa em appends de auditoria — padrão fail-closed implementado
- **Clippy 1.98**: PR [#7805](https://github.com/nearai/ironclaw/pull/7805) resolve lint failures no branch `release/2026-08-17` com `chunks_exact`
- **Workspace root**: PR [#7804](https://github.com/nearai/ironclaw/pull/7804) forward-porta `IRONCLAW_REBORN_WORKSPACE_ROOT` para `release/2026-08-17`

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features em Desenvolvimento

| PR/Issue | Feature | Escopo | Observação |
|----------|---------|--------|------------|
| [#7193](https://github.com/nearai/ironclaw/issues/7193) | Run-now manual fire para automations | agent | Implementado — suporta disparo sob demanda do modelo, WebUI e product surface |
| [#7664](https://github.com/nearai/ironclaw/issues/7664) | Pluggable memory over MCP | memory | Tracking issue — provider crate `ironclaw_memory_mcp` com Mnesis como primeiro consumer |
| [#7765](https://github.com/nearai/ironclaw/pull/7765) | AfterTurn lifecycle hook | hooks | Phase 1 de #7770 — primeiro hook capaz de executar ações após turn finalizar |
| [#7650](https://github.com/nearai/ironclaw/pull/7650) | Run outcomes deriváveis de evidência runtime | automations | Substitui julgamento semântico por fatos determinísticos |
| [#7491](https://github.com/nearai/ironclaw/pull/7491) | OMP core-tool contract + engines | coding | Padroniza surface de tools: `read`, `write`, `edit`, `glob`, `grep`, `bash` |
| [#7806](https://github.com/nearai/ironclaw/pull/7806) | GitHub CLI credentials mediation | sandbox | Resolve credenciais de extensões e stage material opaco para runtime |

### Sinais de Roadmap (baseados em épicos)

**v1.4.0 confirmed:**
- Sandbox persistente por usuário com iron-proxy ([#7732](https://github.com/nearai/ironclaw/issues/7732))
- Design System Phases 1-3 ([#7038](https://github.com/nearai/ironclaw/issues/7038), [#7781](https://github.com/nearai/ironclaw/issues/7781))
- Notificações duráveis (inbox do usuário)

**Post-v1.4.0:**
- Design System Phases 4-5 ([#7782](https://github.com/nearai/ironclaw/issues/7782)) — agentic interactions
- Pluggable memory architecture ([#7664](https://github.com/nearai/ironclaw/issues/7664))
- Hook lifecycle expansion (AfterTurn → AfterSession)

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Issue | Problema | Escopo |
|-------|----------|--------|
| [#7308](https://github.com/nearai/ironclaw/issues/7308) | Usuário seguiu docs do Attio para OAuth, mas registration falha sem correção possível | OAuth/Extensions |
| [#7715](https://github.com/nearai/ironclaw/issues/7715) | Usuário não sabe se está conectando bot ou conta pessoal Telegram — sem consentimento explícito | UX/Telegram |
| [#7687](https://github.com/nearai/ironclaw/issues/7687) | Necessidade de inbox durável para receber notificações de aprovação, autenticação e runs bloqueados | UX/Notifications |

### Melhorias Implementadas em Resposta

- **Notificações acionáveis**: PRs [#7699](https://github.com/nearai/ironclaw/pull/7699) e [#7700](https://github.com/nearai/ironclaw/pull/7700) addressam necessidade de feedback sobre gates e outcomes
- **Separação Telegram**: PR [#7766](https://github.com/nearai/ironclaw/pull/7766) adiciona escolha explícita com disclosures em 11 locale packs
- **InlineNotice migration**: PRs [#7794](https://github.com/nearai/ironclaw/pull/7794) e [#7795](https://github.com/nearai/ironclaw/pull/7795) padronizam feedback visual no Settings/Admin

### Padrão de Satisfação
- Atividade intensa de PRs (38 em 24h) sugere equipe engajada
- Bugs P2 resolvidos em < 5 dias (Telegram: criado 17/08, closed 21/08)
- Community contributor (@rdisandro) liderando épico de design system

---

## 8. Backlog que Merece Atenção

### Issues Abertas Sem Atividade Recente

| Issue | Título | Criado | Atualizado | Comments | Risco |
|-------|--------|--------|------------|----------|-------|
| [#7664](https://github.com/nearai/ironclaw/issues/7664) | Pluggable memory over MCP | 2026-08-14 | 2026-08-21 | 1 | Arquitetura |
| [#7785](https://github.com/nearai/ironclaw/issues/7785) | Cleanup: split executor test-support catch-all | 2026-08-20 | 2026-08-20 | 0 | Tech debt |
| [#7784](https://github.com/nearai/ironclaw/issues/7784) | Cleanup: extract capability-port test forest | 2026-08-20 | 2026-08-20 | 0 | Tech debt |
| [#7257](https://github.com/nearai/ironclaw/pull/7257) | docs(design-system): proposal & checklist | 2026-08-05 | 2026-08-21 | 0 | Documentação |

### Priorização Recomendada

1. **[#7664](https://github.com/nearai/ironclaw/issues/7664)** — Arquitetura de memória plugável: draft crate `ironclaw_memory_mcp` precisa de revisão e merge
2. **[#7801-7798](https://github.com/nearai/ironclaw/issues/7801)** — 4 tracks de CI expedite: criados em 21/08, alta prioridade para v1.4.0
3. **[#7793](https://github.com/nearai/ironclaw/issues/7793)** / [#7792](https://github.com/nearai/ironclaw/issues/7792) — Refatorações WebUI: dependem de `InlineNotice` estar maduro
4. **[#7785](https://github.com/nearai/ironclaw/issues/7785)** / [#7784](https://github.com/nearai/ironclaw/issues/7784) — Cleanup de test-support: tech debt menor, pode ser postergado

---

## Métricas Resumidas (24h)

| Métrica | Valor | Tendência |
|---------|-------|-----------|
| Issues ativas | 22 | 🔴 Alta |
| PRs atualizados | 38 | 🔴 Muito alta |
| PRs merged/closed | 15 | 🟢 Positiva |
| Releases | 0 | — |
| Bugs resolvidos | 5 | 🟢 Positiva |
| Novos épicos | 2 | 🟡 Neutra |

**Saúde Geral: 🟢 Saudável** — Alta cadência de entrega, bugs críticos ausentes, foco claro em v1.4.0 com sandbox persistente e design system.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório de Projeto — CoPaw (QwenPaw)
## Data de referência: 2026-08-22

---

## 1. Panorama do Dia

O ecossistema CoPaw demonstra **alta atividade operacional** em 22 de agosto de 2026, com 34 issues e 36 PRs atualizados nas últimas 24 horas. A taxa de resolução é saudável: 15 issues fechadas e 15 PRs merged/fechados, sugerindo um fluxo de trabalho de triagem eficiente. A plataforma encontra-se em ciclo de desenvolvimento ativo com a versão beta v2.1.1b2 recém-lançada (PR #7200). O foco atual recai sobre melhorias de estabilidade (correções de crashes, vazamento de banco de dados), refinamento da experiência do console e expansão do ecossistema de ferramentas e provedores de IA. Não há releases formais publicadas no período.

---

## 2. Lançamentos

**Nenhuma release formal publicada nas últimas 24 horas.**

| Release | Status | Observação |
|---------|--------|------------|
| v2.1.1-beta.2 | Merged (#7200) | Apenas bumped; detalhes no commit |

**Histórico recente relevante:**
- A versão v2.1.1-beta.1 foi mencionada em issues como ponto de regressão (Issue #7206: `/compact` falha com ValidationError ao usar `compact_threshold_ratio == 0.9`).

---

## 3. Progresso do Projeto

### PRs Merged/Closed (15 total)

| PR | Título | Impacto |
|----|--------|---------|
| [#7205](https://github.com/agentscope-ai/QwenPaw/pull/7205) | test(coverage): fix Windows integration coverage always reading 0 | **Crítico** — Corrigia problema silencioso onde cobertura de integração Windows reportava 0 linhas executadas todas as noites. Adicionado guard fail-closed. |
| [#7112](https://github.com/agentscope-ai/QwenPaw/pull/7112) | feat(hub): add self-hosted multi-user Hub with local and Docker runtimes | **Estratégico** — Introduz QwenPaw Hub, plano de controle multiusuário autohospedado com instâncias isoladas. |
| [#7176](https://github.com/agentscope-ai/QwenPaw/pull/7176) | perf(console): keep long chat sessions responsive | **UX** — Melhora responsividade do Console em sessões longas, especialmente durante streaming e scroll em histórico Markdown-heavy. |
| [#7168](https://github.com/agentscope-ai/QwenPaw/pull/7168) | fix(console): show custom profile markdown files | **UX** — Corrige ocultação de arquivos de persona customizados na categoria Profile do Files workspace. |
| [#7200](https://github.com/agentscope-ai/QwenPaw/pull/7200) | chore: bump version to v2.1.1b2 | Infra |
| [#7168](https://github.com/agentscope-ai/QwenPaw/pull/7168) | — | Relacionado ao bug de history.db bloat |

### PRs Abertos com Alto Impacto

| PR | Título | Status |
|----|--------|--------|
| [#7190](https://github.com/agentscope-ai/QwenPaw/pull/7190) | feat(qwenpaw-data): PyPI runtime path, docker-compose demo | Pipeline de dados simplificado |
| [#7113](https://github.com/agentscope-ai/QwenPaw/pull/7113) | feat(tools): transactional patching, managed PTY, bounded capture | Camada de ferramentas reforçada |
| [#7167](https://github.com/agentscope-ai/QwenPaw/pull/7167) | feat(creator) 1.1.0: Anthropic/Gemini, video providers, 2GB uploads | Creator alcança ecossistema mainstream |
| [#6976](https://github.com/agentscope-ai/QwenPaw/pull/6976) | feat: session-scoped multi project directories | Multiplos diretórios por sessão |
| [#6607](https://github.com/agentscope-ai/QwenPaw/pull/6607) | feat(desktop): global-hotkey floating quick-input window | Atalho global estilo Doubao |
| [#7209](https://github.com/agentscope-ai/QwenPaw/pull/7209) | fix(e2e): repair remaining failing cases | Reparo pós-redesign do console |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários)

| Issue | Título | Comentários | Tipo | Análise |
|-------|--------|-------------|------|---------|
| [#6524](https://github.com/agentscope-ai/QwenPaw/issues/6524) | MCP backend restart breaks client auto-recovery | **6** | Bug | Após restart do servidor MCP, QwenPaw não recupera conexão automaticamente — usuário precisa executar `list mcp` manualmente. Afeta fluxos de produção com servidores remotos. |
| [#6780](https://github.com/agentscope-ai/QwenPaw/issues/6780) | App freezes after 10-20 min idle | **4** | Question/Bug | Usuário reporta que aplicação congela após período sem uso; requer kill manual. Possível vazamento de recursos ou deadlock. |

### Padrões de Demanda Identificados

1. **Controle de UI**: Múltiplas issues solicitam opções para ocultar/collapse elementos de interface — ferramentas (#7203, #7196), raciocínio do modelo (#7196). Usuários profissionais querem UX minimalista.

2. **Gestão de memória e contexto**: Issue #7193 reporta "confusão de memória" onde agente busca conteúdo de outra sessão. Issue #7168 (agora fechada) revelou vazamento de 7.6GB no history.db.

3. **Sistema de aprovação**: Issue #7198 critica a granularidade excessiva de aprovações — usuarios desejam que operações em arquivos temporários não disparem审批.

4. **MCP/Tools**: Regressão em recovery (#6524), problemas de autorização (#7197), e injeção inconsistente de schema (#7210).

---

## 5. Bugs e Estabilidade

### Por Severidade

#### 🔴 Críticos

| Issue | Título | Severidade | Link |
|-------|--------|------------|------|
| #6524 | MCP backend restart — client não recupera | Alta | [#6524](https://github.com/agentscope-ai/QwenPaw/issues/6524) |
| #7168 | history.db bloat até 7.6GB + duplicação | **Alta** | [#7168](https://github.com/agentscope-ai/QwenPaw/issues/7168) (fechada) |
| #7199 | PDF crash com caracteres surrogate (U+D800–U+DFFF) | Alta | [#7199](https://github.com/agentscope-ai/QwenPaw/issues/7199) |

#### 🟠 Médios

| Issue | Título | Link |
|-------|--------|------|
| #6427 | WebView2 crash após 7s (post.3 vs post.4) | [#6427](https://github.com/agentscope-ai/QwenPaw/issues/6427) |
| #6430 | Startup hang ~85 segundos | [#6430](https://github.com/agentscope-ai/QwenPaw/issues/6430) |
| #7156 | Embedding health check timeout (>5s hardcoded) | [#7156](https://github.com/agentscope-ai/QwenPaw/issues/7156) |
| #7193 | Memory search cross-session contamination | [#7193](https://github.com/agentscope-ai/QwenPaw/issues/7193) |
| #7206 | `/compact` ValidationError em v2.1.1-beta.1 | [#7206](https://github.com/agentscope-ai/QwenPaw/issues/7206) |

#### 🟡 Menores

| Issue | Título | Link |
|-------|--------|------|
| #7016 | Tool call 404 em streaming | [#7016](https://github.com/agentscope-ai/QwenPaw/issues/7016) |
| #7136 | Mojibake em filenames não-ASCII | [#7136](https://github.com/agentscope-ai/QwenPaw/issues/7136) |
| #7195 | Fullscreen UI blocked por ícones | [#7195](https://github.com/agentscope-ai/QwenPaw/issues/7195) |

### Regressões Identificadas

- **v2.1.1-beta.1**: `/compact` falha com ValidationError quando `compact_threshold_ratio == 0.9` — regression vs v2.1.0 ([#7206](https://github.com/agentscope-ai/QwenPaw/issues/7206))
- **post.3 → post.4**: WebView2 rendering crash introduced ([#6427](https://github.com/agentscope-ai/QwenPaw/issues/6427))

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| Feature | Issue | Demanda | Link |
|---------|-------|---------|------|
| Toggle de visibilidade de tool calls | #7203 | Ocultar durante análise de contratos/docs | [#7203](https://github.com/agentscope-ai/QwenPaw/issues/7203) |
| Caps de mídia por tipo (image/video/audio) separados | #7201 | Configuração granular por provider | [#7201](https://github.com/agentscope-ai/QwenPaw/issues/7201) |
| Multi project directories por sessão | #6976 (PR) | Vários diretórios de trabalho | [#6976](https://github.com/agentscope-ai/QwenPaw/pull/6976) |
| Global hotkey para quick-input | #6607 (PR) | Atalho estilo Doubao | [#6607](https://github.com/agentscope-ai/QwenPaw/pull/6607) |
| Custom tool loading | #7204 | Como adicionar tools customizados | [#7204](https://github.com/agentscope-ai/QwenPaw/issues/7204) |
| Per-session model overrides | #5992 (PR) | Modelos diferentes por conversa | [#5992](https://github.com/agentscope-ai/QwenPaw/pull/5992) |
| Token usage by agent | #7207 (PR) | Rastreamento de consumo por agente | [#7207](https://github.com/agentscope-ai/QwenPaw/pull/7207) |
| Drag-drop file upload (Windows) | #4855 (fechada) | Upload por drag | [#4855](https://github.com/agentscope-ai/QwenPaw/issues/4855) |
| Unrestricted file size (Windows) | #4854 (fechada) | Sem limite local | [#4854](https://github.com/agentscope-ai/QwenPaw/issues/4854) |
| History sorting by last activity | #4816 (fechada) | Ordem por última atividade | [#4816](https://github.com/agentscope-ai/QwenPaw/issues/4816) |

### Sinais de Roadmap

1. **Creator 1.1.0** (PR #7167): Integração de Anthropic/Gemini, provedores mainstream de imagem/video, uploads de 2GB — indica expansão para além do ecossistema Alibaba/Qwen.
2. **QwenPaw Hub** (PR #7112): Deploy multiusuário autohospedado — direção enterprise.
3. **Per-provider media caps** (Issue #7201): Refinamento da arquitetura de providers.

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais

| Categoria | Evidência | Severidade |
|-----------|-----------|------------|
| **Estabilidade em produção** | App freeze após idle (#6780), WebView2 crash (#6427), startup hang (#6430) | 🔴 Alta |
| **Gestão de banco de dados** | history.db de 7.6GB (#7168) | 🔴 Crítica |
| **UX poluída** | Múltiplas solicitações para collapse de tool calls (#7203) e reasoning (#7196) | 🟠 Média |
| **Sistema de aprovação inflexível** | Operações em arquivos temporários requerem aprovação desnecessária (#7198) | 🟠 Média |
| **MCP reliability** | Não recovery automático após restart (#6524) | 🟠 Média |

### Cenários de Uso Emergentes

1. **Análise de documentos profissionais**: Contratos, pesquisas — usuários querem UX minimalista sem ruído de tool calls.
2. **Operações de longa duração**: Agentes executando overnight — necessidade de approval menos intrusivo.
3. **Ambientes Windows Desktop**: Suporte a multi-file drag-drop, uploads sem limite de tamanho.

### Satisfação/Iinsatisfação

**Positivo:**
- Creator 1.1.0 demonstra expansão bem-recebida do ecossistema
- Múltiplas features fechadas (#4855, #4854, #4816) indicam resposta a feedback histórico

**Negativo:**
- Bugs de estabilidade persistem entre versões (WebView2, startup, freeze)
- Gap entre necessidade de customização de tools (#7204) e documentação

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Estagnadas

| Issue | Título | Tempo sem resposta | Prioridade |
|-------|--------|-------------------|------------|
| [#6427](https://github.com/agentscope-ai/QwenPaw/issues/6427) | WebView2 crash (post.4) | ~1 mês (24/07) | 🔴 Alta |
| [#6430](https://github.com/agentscope-ai/QwenPaw/issues/6430) | Startup hang ~85s | ~1 mês (24/07) | 🟠 Média |
| [#6524](https://github.com/agentscope-ai/QwenPaw/issues/6524) | MCP recovery | ~25 dias (28/07) | 🔴 Alta |
| [#6780](https://github.com/agentscope-ai/QwenPaw/issues/6780) | App freeze after idle | ~15 dias (07/08) | 🟠 Média |

### PRs "Under Review" Pendentes de Merge

| PR | Título | Desde |
|----|--------|-------|
| [#5992](https://github.com/agentscope-ai/QwenPaw/pull/5992) | Per-session model overrides | 12/07 |
| [#6399](https://github.com/agentscope-ai/QwenPaw/pull/6399) | Reranker UI config panel | 23/07 |
| [#6515](https://github.com/agentscope-ai/QwenPaw/pull/6515) | Volcengine Agent Plan & MiMo providers | 28/07 |
| [#6808](https://github.com/agentscope-ai/QwenPaw/pull/6808) | Show custom profile markdown files | 07/08 |

---

## Métricas Consolidada do Período

| Métrica | Valor |
|---------|-------|
| Issues ativas | 19 |
| Issues fechadas | 15 |
| PRs abertos | 21 |
| PRs merged/fechados | 15 |
| Releases | 0 |
| Issues críticas abertas | 3 (#6524, #7199, #6427) |
| PRs estratégicos em review | 4 |

---

*Relatório gerado automaticamente com base em dados GitHub de 2026-08-22. Todas as referências a issues/PRs linkadas para `github.com/agentscope-ai/QwenPaw`.*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-08-22

## 1. Panorama do Dia

O projeto ZeroClaw mantém alta atividade nas últimas 24h, com **50 issues e 50 PRs atualizados**, demonstrando um fluxo intenso de trabalho. Não houve novos lançamentos. O foco predominante está na **corrreção de vulnerabilidades de segurança** (com pelo menos 10 issues classificadas como S0-S2), além de refinamentos em canais, runtime e infraestrutura de CI. A comunidade demonstra engajamento significativo em debates sobre arquitetura de sessões, políticas de shell e melhorias de observabilidade.

---

## 2. Lançamentos

**Nenhum release nas últimas 24h.** O último release estável permanece **v0.8.3**. A ausência de release pode estar relacionada à quantidade de correções de segurança pendentes em fila de review.

---

## 3. Progresso do Projeto

### PRs Recentes Importantes (merged/closed ou em estágio avançado)

| # | Título | Impacto | Link |
|---|--------|---------|------|
| **#9678** | `fix(config): harden Git shell policy arguments` | **Crítico** — Normaliza shell words no limite da política, melhorando segurança de allowlisting e classificação de risco | [PR #9678](https://github.com/zeroclaw-labs/zeroclaw/pull/9678) |
| **#9574** | `fix(channels): authorize approval responders` | **Alto** — Vincula aprovações Telegram/Slack/Matrix/Lark ao chat/room que recebeu a solicitação | [PR #9574](https://github.com/zeroclaw-labs/zeroclaw/pull/9574) |
| **#9637** | `fix(ci): guard temporary React Router RSC exception` | **Alto** — Permite apenas `GHSA-qwww-vcr4-c8h2` no dependency review, restringindo exceção de React Router | [PR #9637](https://github.com/zeroclaw-labs/zeroclaw/pull/9637) |
| **#10136** | `fix(core): keep platform paths panic-free` | **Médio** — Remove 8 candidatos a panic do dispatch de comandos, deployment e inicialização | [PR #10136](https://github.com/zeroclaw-labs/zeroclaw/pull/10136) |
| **#9110** | `fix(lark): use constant_time_eq for verification_token` | **Alto** — Corrige vulnerabilidade de timing attack na verificação do Lark webhook | [PR #9110](https://github.com/zeroclaw-labs/zeroclaw/pull/9110) |
| **#10128** | `fix(channels): avoid panic-prone assumptions` | **Médio** — Remove 28 findings de panic/invariant em canais (WeChat, ACP, etc.) | [PR #10128](https://github.com/zeroclaw-labs/zeroclaw/pull/10128) |
| **#9634** | `feat(channels/telegram): add allowed_groups` | **Médio** — Adiciona `allowed_groups` para authorization grant em grupos Telegram | [PR #9634](https://github.com/zeroclaw-labs/zeroclaw/pull/9634) |
| **#10203** | `fix(log): bridge log-facade records into tracing` | **Alto** — Conecta registros do `log`-facade ao pipeline de tracing (corrige descarte de logs do whatsapp-rust) | [PR #10203](https://github.com/zeroclaw-labs/zeroclaw/pull/10203) |
| **#10132** | `fix(config): make config and provider paths fallible` | **Médio** — Remove 13 candidatos a panic em validação de alias, parsing shell e construções regex | [PR #10132](https://github.com/zeroclaw-labs/zeroclaw/pull/10132) |
| **#9606** | `fix(providers): honor runtime proxy for OpenAI Responses` | **Alto** — Aplica proxy helper do runtime aos builders OpenAI Responses (streaming e non-streaming) | [PR #9606](https://github.com/zeroclaw-labs/zeroclaw/pull/9606) |

### Destaque: PR em tamanho XL em progresso
- **#9535** — `feat(runtime): anchor context compaction to model window ratio` — Adiciona `runtime_profiles.<name>.context_compact_ratio` para trimming dinâmico baseado na janela do modelo selecionado. Resolve um artifact de budget fixo de 32.000 tokens. ([PR #9535](https://github.com/zeroclaw-labs/zeroclaw/pull/9535))
- **#10205** — `feat(android): add native tools and standalone app` — Introduz 5 ferramentas Android (screenshots, accessibility-tree, UI actions, app launch, device facts). ([PR #10205](https://github.com/zeroclaw-labs/zeroclaw/pull/10205))

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (por comentários)

| # | Título | Comentários | Tema Central |
|---|--------|-------------|--------------|
| **#9600** | `[Tracker]: Session-persistence contract ownership and layer ordering` | 6 | Arquitetura — 4 workstreams independentes tocando o mesmo contrato sem owner designado |
| **#9512** | `[Feature]: Annotate each bespoke CI gate` | 4 | DevEx — Documentação de gates CI motivados por incidentes passados |
| **#9464** | `Anthropic stored-profile OAuth alias contract` | 4 | Provider — Contrato para `auth_mode = "oauth"` com Anthropic |
| **#9393** | `[Bug]: Bluesky and Reddit have no sender authorization` | 4 | **Segurança** — Permite bypass de autorização em Bluesky e Reddit |
| **#9198** | `[Bug]: Discord typing indicator stuck` | 4 | UX — Indicador de digitação preso após reload do daemon |
| **#9573** | `[Bug]: cost pricing lookup fails for multiple aliases` | 3 | Runtime — Preços ignorados em caminhos Agent-based |
| **#9421** | `[Bug]: Incomplete terminal responses reported as successful` | 3 | **S1** — Provider pode encerrar turn sem resposta confiável |
| **#9392** | `[Bug]: LINE group messages skip allowlist` | 3 | **Segurança** — LINE pula handshake e allowlist |
| **#9315** | `[Feature]: classify Telegram file-download failures` | 3 | Eficiência — Falhas permanentes devem ser puladas imediatamente |
| **#9345** | `[Feature]: Recalculate PR risk and size labels` | 3 | CI — Auto-cálculo de labels size/risk no diff |
| **#9290** | `[Bug]: Windows installer fails with missing TaskDialogIndirect` | 3 | Desktop — S1 workflow blocked no Windows |

### Análise de Demandas

1. **Arquitetura de Sessões (#9600)** — Tracker de alto nível com 6 comentários indica debate significativo sobre ownership de contratos. Demandas concorrentes de 4 workstreams sem coordenação representam risco de regressão.

2. **Segurança em Canais (#9393, #9392)** — Dois bugs de segurança com 4 e 3 comentários respectivamente em Bluesky, Reddit e LINE. Ambos estão `in-progress` e classificados como `risk:high`. A comunidade demonstra preocupação ativa com a auditoria.

3. **CI/CD Improvements (#9512, #9345, #9509, #9507)** — Múltiplas issues sobre automação de labels, gates declarativos e anotações de incidentes. Indicam maturidade do processo de engenharia.

4. **Stale/CI #9637 com tag `do-not-merge`** — O PR de guarda do React Router RSC está marcado explicitamente como não para merge, sugerindo que a equipe está avaliando alternativas ou esperando upstream.

---

## 5. Bugs e Estabilidade

### Por Severidade

#### S0 — Risco de Perda de Dados / Segurança Crítica

| # | Título | Status | Link |
|---|--------|--------|------|
| **#9247** | Shell Tool Workspace Boundary Bypass | `accepted` | [Issue #9247](https://github.com/zeroclaw-labs/zeroclaw/issues/9247) |
| **#9206** | Agent cron resolve `workspace_dir` para `/` intermitentemente | `accepted` | [Issue #9206](https://github.com/zeroclaw-labs/zeroclaw/issues/9206) |

#### S1 — Workflow Bloqueado

| # | Título | Status | Link |
|---|--------|--------|------|
| **#9290** | Windows desktop installer falha com `TaskDialogIndirect` ausente | `in-progress` | [Issue #9290](https://github.com/zeroclaw-labs/zeroclaw/issues/9290) |
| **#9421** | Respostas terminais incompletas reportadas como sucesso | `in-progress` | [Issue #9421](https://github.com/zeroclaw-labs/zeroclaw/issues/9421) |
| **#9231** | Docker runtime commands aninhados em segundo Docker sandbox | `in-progress` | [Issue #9231](https://github.com/zeroclaw-labs/zeroclaw/issues/9231) |
| **#9191** | Cron agent jobs sem timeout de wall-clock | `in-progress` | [Issue #9191](https://github.com/zeroclaw-labs/zeroclaw/issues/9191) |

#### S2 — Comportamento Degradado

| # | Título | Status | Link |
|---|--------|--------|------|
| **#9573** | Lookup de preços falha para múltiplos aliases do mesmo provider | `in-progress` | [Issue #9573](https://github.com/zeroclaw-labs/zeroclaw/issues/9573) |
| **#9572** | Gateway WebSocket debug overflows Tokio worker stack | `accepted` | [Issue #9572](https://github.com/zeroclaw-labs/zeroclaw/issues/9572) |
| **#9255** | WASM plugin calls sem wall-clock timeout | `in-progress` | [Issue #9255](https://github.com/zeroclaw-labs/zeroclaw/issues/9255) |
| **#9198** | Discord typing indicator preso após reload | `in-progress` | [Issue #9198](https://github.com/zeroclaw-labs/zeroclaw/issues/9198) |
| **#9284** | Config flush pode sobrescrever escritas concorrentes | `accepted` | [Issue #9284](https://github.com/zeroclaw-labs/zeroclaw/issues/9284) |

### Análise de Estabilidade

**Total: ~10 bugs críticos/S0-S1 em fila.** A maioria está `in-progress` ou `accepted`, indicando visibilidade e priorização. Padrões recorrentes:

1. **Timeouts ausentes** — WASM (#9255), cron jobs (#9191), Discord indicator (#9198) — todos suffer de ausência de limites temporais
2. **Race conditions** — config flush (#9284), models refresh (#9590), concurrent cache writes
3. **Segurança em canais** — Bluesky/Reddit (#9393), LINE (#9392), Shell workspace (#9247), audit logging (#9391)

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em Desenvolvimento

| # | Título | Prioridade | Link |
|---|--------|------------|------|
| **#10205** | `feat(android): add native tools and standalone app` | Alta | [PR #10205](https://github.com/zeroclaw-labs/zeroclaw/pull/10205) |
| **#9535** | `feat(runtime): anchor context compaction to model window ratio` | P1 | [PR #9535](https://github.com/zeroclaw-labs/zeroclaw/pull/9535) |
| **#9228** | `add eval results dashboard and trend tracking` | P3 | [Issue #9228](https://github.com/zeroclaw-labs/zeroclaw/issues/9228) |
| **#9634** | `feat(channels/telegram): add allowed_groups` | P1 | [PR #9634](https://github.com/zeroclaw-labs/zeroclaw/pull/9634) |

### Novas Demandas Identificadas

| # | Título | Descrição | Link |
|---|--------|-----------|------|
| **#9599** | `[Tracker]: Tool-result image serialization across provider adapters` | Auditoria de serialização de imagens em providers (Anthropic, Bedrock, OpenAI Codex) | [Issue #9599](https://github.com/zeroclaw-labs/zeroclaw/issues/9599) |
| **#9597** | `make peer-agent turns durable and attributable` | Transforma chamadas `send_message_to_peer` em tarefas rastreáveis com lifecycle | [Issue #9597](https://github.com/zeroclaw-labs/zeroclaw/issues/9597) |
| **#9575** | `Warm OpenAI-compatible connections through /models` | Substituir warmup via `/chat/completions` por `GET /models` | [Issue #9575](https://github.com/zeroclaw-labs/zeroclaw/issues/9575) |
| **#9521** | `Map MCP tools/call type:image content blocks into vision pipeline` | Mapear imagens base64 do MCP para pipeline de visão | [Issue #9521](https://github.com/zeroclaw-labs/zeroclaw/issues/9521) |
| **#9507** | `Enforce crate dependency direction with declarative CI gate` | Generalizar guards de dependência para gate único declarativo | [Issue #9507](https://github.com/zeroclaw-labs/zeroclaw/issues/9507) |
| **#9509** | `Add scope-aware preflight job to skip CI lanes` | Classificar diff e pular lanes irrelevantes | [Issue #9509](https://github.com/zeroclaw-labs/zeroclaw

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*