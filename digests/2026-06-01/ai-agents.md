# Resumo diário do ecossistema de agentes de IA 2026-06-01

> Issues: 2 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-05-31 20:53 UTC

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

**Data de referência:** 2026-06-01  
**Repositório:** [nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)

---

## 1. Panorama do dia

O projeto NullClaw manteve baixa atividade em 01/06/2026, sem movimentações em PRs ou releases. Duas issues novas foram abertas pelo mesmo autor (weissfl), ambas relacionadas a falhas no canal Telegram — uma envolvendo indicador de digitação e outra sobre cron jobs do tipo agent que falham em entregar mensagens. O estado atual sugere foco em estabilização do módulo Telegram, com demanda reprimida em funcionalidades de background tasks.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

---

## 3. Progresso do projeto

**Nenhum PR merged ou fechado nas últimas 24h.**

---

## 4. Temas quentes da comunidade

| Issue | Tema | Comentários | Análise |
|-------|------|-------------|---------|
| [#942](https://github.com/nullclaw/nullclaw/issues/942) | Telegram callback sem typing indicator | 0 | Bug de UX: usuário não recebe feedback visual ao acionar botão inline |
| [#941](https://github.com/nullclaw/nullclaw/issues/941) | Cron jobs agent não executam | 0 | Falha crítica: tarefas agendadas completam sem ação, quebrando automações |

Ambas as issues indicam que o Telegram delivery está com problemas em diferentes vetores de entrada (callbacks e cron agents). A comunidade não comentou ainda, sinalizando possivelmente que são bugs recentes.

---

## 5. Bugs e estabilidade

### Crítico
- **#941** — Cron jobs com `job_type: "agent"` completam sem executar subprocesso; entrega Telegram não ocorre. Setores `delivery_mode: "always"` e `delivery_channel: "telegram"` ignorados. [Link](https://github.com/nullclaw/nullclaw/issues/941)

### Alto
- **#942** — Indicador "typing…" não aparece ao pressionar botões inline (callback_query) no Telegram, apenas em mensagens de texto. Quebra feedback visual esperado pelo usuário. [Link](https://github.com/nullclaw/nullclaw/issues/942)

**Severidade combinada:** O módulo Telegram apresenta pelo menos dois vetores de falha independentes, sugerindo necessidade de regressão em toda a pipeline de delivery.

---

## 6. Pedidos de features e sinais de roadmap

Nenhuma issue com tag `enhancement` aberta nas últimas 24h. O backlog não mostra sinais de novas funcionalidades planejadas — a demanda atual concentra-se em correções do Telegram delivery.

---

## 7. Resumo de feedback dos usuários

As issues abertas por `weissfl` revelam dois padrões de dor:

| Cenário | Problema | Impacto |
|---------|----------|---------|
| Automação por botão inline | Ausência de typing indicator no Telegram | Usuário perde noção de que comando foi processado |
| Tarefas agendadas com agente | Cron agent não executa, entrega nunca chega | Automação de notification quebrada |

**Observação:** Usuário não reportou workaround ou alternativas, indicando dependência direta dessas funcionalidades.

---

## 8. Backlog que merece atenção

| Issue | Idade | Status | Prioridade | Motivo |
|-------|-------|--------|------------|--------|
| #941 cron agent subprocess | 1 dia | OPEN | **Alta** | Entrega completamente quebrada |
| #942 typing indicator | 1 dia | OPEN | **Média** | UX degradado no Telegram |

Nenhuma das issues possui resposta da equipe de manutenção. Dado o impacto em automações críticas (cron) e UX (typing), recomenda-se triagem imediata. Caso sejam bugs de regressão, rollback ou hotfix devem ser considerados antes da próxima release.

---

## Indicadores de saúde do projeto

| Métrica | Valor | Observação |
|---------|-------|------------|
| Issues abertas (24h) | 2 | ▲ Acima da média histórica? |
| PRs (24h) | 0 | Estagnação |
| Releases (7 dias) | 0 | Sem movimento |
| Tempo médio de resposta em issues | N/D | Sem dados disponíveis |

**Recomendação:** Priorizar triagem das issues #941 e #942; verificar se há regressão no módulo Telegram antes da próxima release.

---

*Relatório gerado automaticamente com base em dados do GitHub*

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo — Ecossistema de Agentes de IA Open Source

**Data de Referência:** 2026-06-01  
**Projetos Analisados:** NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw, ZeroClaw

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **duas velocidades distintas** em 01/06/2026. De um lado, ZeroClaw, Hermes Agent e NanoBot demonstram atividade intensa (40–100 eventos/dia), sinalizando projetos em fase de expansão acelerada. De outro, NullClaw permanece estagnado com apenas 2 issues abertas e nenhuma atividade de PR, sugerindo dependência de um único mantenedor. A estabilidade do Telegram emerge como o denominador comum mais crítico — presente em pelo menos 5 dos 7 projetos com falhas ativas. Há uma tendência clara de maturação: os projetos mais ativos investem em segurança defensiva (SSRF guards, OAuth nativo, RBAC), enquanto os de menor porte concentram esforços em sobrevivência básica (bug fixes isolados). O mercado enterprise começa a influenciar o roadmap de múltiplos projetos, com demandas explícitas por Azure AAD, multi-tenant isolation e compliance-ready deployments.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | PRs Merged | Releases (24h) | Bugs Críticos Abertos | Saúde |
|---------|--------------|-----------|------------|----------------|-----------------------|-------|
| **NullClaw** | 2 | 0 | 0 | 0 | 2 (cron agent, typing) | 🟠 Estagnado |
| **NanoBot** | 6 | 19 | 7 | 0 | 1 (msg duplication) | 🟢 Saudável |
| **Hermes Agent** | 50 | 50 | 1 | 0 | 5 (Telegram P1, gateway, type errors) | 🟡 Saturado |
| **PicoClaw** | 7 | 12 | 4 | 1 (nightly) | 0 (resolvido) | 🟢 Saudável |
| **IronClaw** | 5 | 23 | 8 | 0 | 2 (E2E fail, stdio MCP) | 🟡 Moderado |
| **CoPaw** | 17 | 2 | 0 | 0 | 3 (Windows, memory, regression) | 🟡 Moderado |
| **ZeroClaw** | 50 | 50 | 9 | 0 | ~10 (providers, cron, security) | 🟡 Saturado |

**Observações:**
- **ZeroClaw e Hermes Agent** lideram em volume absoluto, mas apresentam taxa de fechamento baixa (18% e 2% respectivamente), indicando gargalo de review ou acúmulo de backlog.
- **NanoBot e PicoClaw** demonstram o melhor equilíbrio entre atividade e qualidade, com ciclos de fix rápidos (<24h para bugs críticos).
- **NullClaw** é o único projeto em estado de alerta real — sem movimento de código há 24h e sem releases em 7 dias.

---

## 3. Posicionamento do Projeto Principal

*Dado o contexto do relatório, **NanoBot** apresenta o melhor posicionamento estratégico entre os pares analisados:*

### Vantagens Competitivas do NanoBot

| Dimensão | NanoBot | Hermes Agent | ZeroClaw |
|----------|---------|--------------|----------|
| Tempo de resposta a bugs críticos | <24h | Sem SLA visível | >7 dias para P1 |
| Cobertura de segurança | SSRF + symlink + token auth | Parcial (OAuth loopback) | Incompleta (allowed_tools bypass) |
| Foco enterprise | Azure AAD (PR #4126) | Não identificado | RBAC multi-tenant (RFC) |
| Modularidade | Gateway decoupled (#4115) | Monolítico | Multi-crate (channels-all) |
| Pipeline de PRs | 12 abertos, 7 mergeados | 50 abertos, 1 merged | 41 abertos, 9 mergeados |

### Diferenças Técnicas Marcantes

- **NanoBot** investe em arquitetura hot-reloadable (extração de GatewayHTTPHandler) e tokenizer pre-warming para latência.
- **ZeroClaw** opta por expansão horizontal (ESP32, IoT, 15+ canais) em vez de consolidação.
- **Hermes Agent** carrega dívida técnica significativa com 6+ bugs P1/P2 ativos no Telegram — a plataforma mais demandada.

### Tamanho de Comunidade

| Projeto | Issues Ativas | PRs Abertos | Engajamento Relativo |
|---------|---------------|-------------|----------------------|
| ZeroClaw | ~100 | 41 | ⭐⭐⭐⭐⭐ |
| Hermes Agent | ~50 | ~50 | ⭐⭐⭐⭐ |
| CoPaw | 17 | 2 | ⭐⭐ |
| PicoClaw | 7 | 8 | ⭐⭐⭐ |
| NanoBot | 6 | 12 | ⭐⭐⭐ |
| NullClaw | 2 | 0 | ⭐ |

**Conclusão:** NanoBot oferece o melhor trade-off entre velocidade de iteração e qualidade de outputs. ZeroClaw tem maior tração comunitária mas sofre com fragmentação de atenção.

---

## 4. Focos Técnicos Compartilhados

### 4.1 Integração com Telegram — O Ponto de Dor Universal

Todos os projetos que suportam Telegram (NullClaw, Hermes Agent, PicoClaw, ZeroClaw, IronClaw) reportam bugs ativos:

| Projeto | Bug Telegram | Severidade |
|---------|-------------|------------|
| NullClaw | Cron jobs não entregam | 🔴 Crítica |
| NullClaw | Typing indicator ausente | 🟡 Média |
| Hermes Agent | Roteamento após session split | 🔴 P1 |
| Hermes Agent | Auto-topic-rename quebrado | 🔴 P1 |
| Hermes Agent | Token already in use | 🟡 P2 |
| Hermes Agent | sendMessageDraft flicker | 🟡 P2 |
| ZeroClaw | Cron output não entrega | 🔴 P1 |
| PicoClaw | Reply ignorada em grupos | 🟡 Média |

**Análise:** O Telegram é simultaneamente o canal mais demandado e o mais frágil. Isso sugere que a API Bot é usada como caso de teste primário, mas recebe menos QA que canais tradicionais.

### 4.2 Estabilidade e Segurança de Providers

Bugs em providers aparecem em **todos os projetos** sem exceção:

| Projeto | Provider | Problema |
|---------|----------|----------|
| NanoBot | OpenAI-compatible | XML tool calls não renderizam |
| PicoClaw | Codex OAuth | Respostas vazias em streaming |
| ZeroClaw | Kimi | 400 error por temperature hardcoded |
| ZeroClaw | Ollama | Falha quando tools são necessárias |
| ZeroClaw | Gemini | OAuth quebrado após auth |
| Hermes Agent | GPT pools | Type error bloqueia outbound |
| IronClaw | stdio MCP | Activation fail na pré-verificação |

**Padrão:** A fragmentação de providers criou uma camada de compatibilidade frágil. Cada provider tem quirks específicos (streaming não-padrão, auth flows, tool schemas) que não são testados uniformemente.

### 4.3 Windows Compatibility — Demanda Recorrente

| Projeto | Status | Evidência |
|---------|--------|-----------|
| Hermes Agent | 2 issues duplicadas (#2512, #10359), 14👍 total | Mais votada do projeto |
| CoPaw | 5+ bugs Windows ativos (process locks, console flash, CREATE_NO_WINDOW) | Backlog crítico |
| PicoClaw | PR #2902 para Android Termux (ARM64) | Expansão mobile |

**Sinal:** A base Windows é subestimada no planejamento inicial. Demanda existe (14👍 + 8 comentários em Hermes Agent) mas nenhum projeto oferece suporte first-class.

### 4.4 MCP (Model Context Protocol) — Maturidade Inicial

| Projeto | Status do MCP |
|---------|---------------|
| NanoBot | SSRF guard em PR #4123 |
| Hermes Agent | 3 bugs ativos (discovery, auth, availability) |
| IronClaw | stdio activation fail (P1) |
| ZeroClaw | Security bypass em allowed_tools |

**Observação:** MCP está em fase de adoção acelerada, mas a interoperabilidade entre implementações é baixa. Cada projeto implementa um subconjunto diferente da especificação.

---

## 5. Análise de Diferenciação

### 5.1 Por Público-Alvo

| Projeto | Público Primário | Evidência |
|---------|------------------|-----------|
| **ZeroClaw** | DevOps/IoT | ESP32, sensores, multi-canal (15+), RBAC |
| **NanoBot** | Desenvolvedores pro | SSRF guards, hot-reload, tokenizer pre-warm |
| **Hermes Agent** | Power users multi-plataforma | Google Chat, Telegram, Discord, Kanban workers |
| **IronClaw** | Enterprise early adopters | GSuite OAuth, Notion MCP, credential broker |
| **CoPaw** | Usuários Windows desktop | Shell commands, browser automation, cron local |
| **PicoClaw** | Hobbyists e local-first | LM Studio, Codex, streaming custom |
| **NullClaw** | Uso específico de Telegram | Módulos focados em Telegram agent |

### 5.2 Por Arquitetura

| Projeto | Abordagem | Trade-off |
|---------|-----------|-----------|
| **ZeroClaw** | Monorepo Rust com features cruzadas | Escalabilidade de canais vs. complexidade de merge |
| **IronClaw** | Microserviços Rust (triggers crate, outbound crate) | Modularidade vs. overhead de comunicação |
| **NanoBot** | Modular com gateway decoupling | Manutenibilidade vs. superfície de API |
| **Hermes Agent** | Monolítico Python | Produtividade inicial vs. dívida técnica |
| **CoPaw** | Monolítico Python | Simplicidade vs. escalabilidade MCP |

### 5.3 Por Estratégia de Release

| Projeto | Estratégia | Risco |
|---------|-----------|-------|
| **PicoClaw** | Nightly automatizado + releases estáveis | Usuários confusionam nightly com production |
| **ZeroClaw** | Beta por ~2 meses sem estável | Bloqueia adotantes conservadores |
| **NanoBot** | Releases only when ready | Menor confusion, mas menor feedback loop |
| **Hermes Agent** | Code freeze sem release | Docker users sem migration step |

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Projetos em Velocidade Máxima (Consolidando Qualidade)

| Projeto | Velocidade | Foco Atual | Maturidade |
|---------|------------|-------------|------------|
| **NanoBot** | ⭐⭐⭐⭐ | Security hardening, WebUI stability | 🟢 Maduro — ciclo de fix <24h |
| **PicoClaw** | ⭐⭐⭐ | Provider streaming, message bus | 🟢 Crescendo — taxa de merge 33% |
| **IronClaw** | ⭐⭐⭐ | "Reborn" architecture (OAuth, triggers) | 🟡 Transição — 8 PRs merged/24h |

### 6.2 Projetos em Velocidade Média (Expansão Controlada)

| Projeto | Velocidade | Foco Atual | Maturidade |
|---------|------------|-------------|------------|
| **ZeroClaw** | ⭐⭐⭐⭐⭐ | Multi-canal, IoT, security | 🟡 Fragmentado — 4 issues bloqueadas por maintainer |
| **Hermes Agent** | ⭐⭐⭐⭐ | Windows support, Telegram parity | 🟡 Saturado — 50 issues, 2% closure |

### 6.3 Projetos em Velocidade Baixa (Manutenção Mínima)

| Projeto | Velocidade | Risco Principal | Maturidade |
|---------|------------|-----------------|------------|
| **NullClaw** | ⭐ | Estagnação | 🔴 Dependência de único contributor |
| **CoPaw** | ⭐⭐ | Regressão v1.1.9 + Windows bugs | 🟠 Dívida de QA acumulando |

### 6.4 Indicadores de Saúde Relativa

| Indicador | Melhor Performer | Pior Performer |
|-----------|------------------|----------------|
| Tempo de resposta a bugs críticos | NanoBot (<24h) | NullClaw (sem resposta) |
| Taxa de closure de PRs | PicoClaw (33%) | Hermes Agent (2%) |
| Releases vs. atividade | PicoClaw (nightly) | Hermes Agent (0 releases) |
| Issues bloqueadas sem ação | IronClaw (0) | ZeroClaw (4 P1/P2 blocked) |

---

## 7. Sinais de Tendência

### 7.1 Enterprise Readiness como Diferenciador

A demanda por Azure AAD (NanoBot #4125), GSuite OAuth (IronClaw #4257), e RBAC multi-tenant (ZeroClaw #5982) indica que o ecossistema está migrando de "agentes para devs" para "agentes para empresas". Quem resolver compliance e auth nativo primeiro terá vantagem competitiva.

**Frequência:** 3 de 7 projetos com RFCs enterprise ativos.

### 7.2 IoT/Embarcado como Nova Fronteira

ZeroClaw (ESP32, smartroom) e PicoClaw (Android Termux) demonstram interesse em expandir além de deployments em nuvem. Isso reflete a tendência de "local-first AI" e a maturação de modelos que rodam em hardware limitado.

**Frequência:** 2 de 7 projetos com PRs de hardware ativos.

### 7.3 Security Defense-in-Depth

Correções de segurança estão presentes em todos os projetos maduros:

- SSRF guards (NanoBot #4123, IronClaw #36058)
- OAuth nativo com WebUI (IronClaw #4257, NanoBot #4103)
- allowed_tools enforcement (ZeroClaw #6914)
- Composio sandboxing (ZeroClaw #6915–#6917)

**Frequência:** 4 de 7 projetos com pelo menos 1 fix de segurança na semana.

### 7.4 Multimodal e Interface Evoluída

- Voice recording + ASR (NanoBot #4122)
- computer-use com screenshots (ZeroClaw #6909)
- Thinking effort selector (CoPaw #4840)
- Rich Telegram delivery com mídia (PicoClaw #2856)

**Frequência:** 3 de 7 projetos investindo em interfaces não-texto.

### 7.5 Decoupling Arquitetural

Múltiplos projetos estão simultaneamente refatorando para modularidade:

- Gateway decoupling (NanoBot #4115)
- Crate extraction para triggers/outbound (IronClaw #4261, #4260)
- Feature flags para channels (ZeroClaw #7044)

**Frequência:** 3 de 7 projetos em refatoração arquitectural ativa.

---

## Resumo Executivo

| Dimensão | Líder | Em Riscos | Tendência |
|----------|-------|-----------|-----------|
| **Atividade Geral** | ZeroClaw |

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>


# Relatório do Projeto NanoBot — 2026-06-01

## 1. Panorama do dia

O NanoBot demonstra **alta atividade de desenvolvimento** em 01/06/2026, com 25 atividades totais (6 issues + 19 PRs) nas últimas 24h. O projeto apresenta um ciclo saudável de bug fixes rápidos — **7 PRs foram fechados/mergeados**, demonstrando maturidade no processo de review. Destaque para correções críticas de segurança (WebSocket token auth) e usabilidade (WebUI crash com code blocks). A comunidade segue ativa com 12 PRs abertos, indicando pipeline robusto de features. Não há releases novas registradas, sugerindo foco em estabilização do codebase atual.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto não publicou novas versões. Isso indica que a equipe pode estar em ciclo de acumulação de changesets para uma próxima release, ou que o foco está em revisão de PRs pendentes. Usuários em produção devem permanecer na última versão estável disponível.

---

## 3. Progresso do Projeto

### PRs fechados/mergeados hoje (7 total)

| # | Título | Autor | Impacto |
|---|--------|-------|---------|
| [#4127](https://github.com/HKUDS/nanobot/pull/4127) | fix(agent): extend sustained goal iteration budget | Re-bin | Adiciona caminho de continuação para `/goal` que atinge o budget normal de iteração de tool-calls, melhorando robustez em sessões longas |
| [#4121](https://github.com/HKUDS/nanobot/pull/4121) | feat(webui): polish chat rendering and host runtime | Re-bin | Estabiliza renderização de chat streaming, deltas de reasoning formam blocos "Thought" ordenados, mantém host genérico sem nomenclatura de produto desktop |
| [#4117](https://github.com/HKUDS/nanobot/pull/4117) | fix(webui): handle undefined language in code blocks | Flinn-X | **Fix de crash crítico** — fallback para "text" quando linguagem não é especificada, evitando white screen |
| [#4112](https://github.com/HKUDS/nanobot/pull/4112) | fix(heartbeat): fail closed on internal checks | Re-bin | Torna avaliador de notificação configurável, suprime delivery durante checks internos |
| [#4103](https://github.com/HKUDS/nanobot/pull/4103) | Require auth for WebSocket token issuance | hamb1y | **Fix de segurança** — exige Authorization para token_issue_path quando token estático configurado |
| [#4114](https://github.com/HKUDS/nanobot/pull/4114) | fix(heartbeat): skip empty HEARTBEAT.md and fail closed on delivery | 04cb | Corrige envio incorreto de "All clear." quando não há tarefas, fecha vulnerabilidade de delivery leak |
| [#4118](https://github.com/HKUDS/nanobot/pull/4118) | Test push | wzcone | Push de teste, sem impacto |

### PRs abertos com potencial de merge iminente (3)

| # | Título | Autor | Destaque |
|---|--------|-------|----------|
| [#4123](https://github.com/HKUDS/nanobot/pull/4123) | fix(mcp): reject unsafe HTTP URLs before probe | yu-xin-c | **Segurança SSRF** — valida URLs MCP antes de probing |
| [#4119](https://github.com/HKUDS/nanobot/pull/4119) | fix(exec): block relative symlink workspace escapes | yu-xin-c | **Segurança** — bloqueia escapes de workspace via symlinks relativos |
| [#4126](https://github.com/HKUDS/nanobot/pull/4126) | feat(provider): Add Azure AAD Auth support | kunalk16 | Resolve #4125, demanda corporativa relevante |

---

## 4. Temas Quentes da Comunidade

### Issue com mais engajamento/discussão

| # | Título | Status | Comentários | Reações | Relevância |
|---|--------|--------|-------------|---------|------------|
| [#4120](https://github.com/HKUDS/nanobot/issues/4120) | Vest × HKUDS: tool recommendations or monetization angle | Closed | 1 | 0 | Exploração de integrações comerciais |
| [#4125](https://github.com/HKUDS/nanobot/issues/4125) | Add support for Azure AAD Based Auth | Open | 1 | 0 | Demanda corporativa/enterprise |

### Análise dos temas

1. **Integração Azure Enterprise (#4125/#4126):** Usuário `kunalk16` reporta que políticas Azure Restritivas não permitem API Key-based auth, demandando Azure Identity-based authentication. O PR #4126 já implementado resolve isso — indicador forte de demanda enterprise.

2. **Plugin de ferramentas (#4120):**Empresa Vest demonstra interesse em usar nanobot como framework MCP para workflow de agentes, potencialmente como canal de monetização ou integração. Issue fechada como "Vest × HKUDS", sugerindo discussão privada ou alinhamento de partnership.

3. **ASR multimodal (#4122):** PR do usuário Archermmt propõe gravação de voz no WebUI com transcrição via FunASR local. Marcado como `[enhancement, invalid]` — possivelmente necessita reformulação ou está em discussão sobre escopo.

---

## 5. Bugs e Estabilidade

### Bugs reportados hoje (4 issues + fixes aplicados)

| Severidade | # | Título | Status | Detalhes |
|------------|---|--------|--------|----------|
| **🔴 Crítica** | [#4116](https://github.com/HKUDS/nanobot/issues/4116) | Code blocks sem language specifier causam white screen crash | **FIXED** (#4117) | WebUI crashava completamente ao carregar sessões com fenced code blocks sem especificação de linguagem |
| **🔴 Segurança** | [#4077](https://github.com/HKUDS/nanobot/issues/4077) | WebSocket token minting sem authentication | **FIXED** (#4103) | Rota de issuance aceitava tokens sem verificar static token ou secret quando configurados |
| **🟡 Alta** | [#4128](https://github.com/HKUDS/nanobot/issues/4128) | retain_recent_legal_suffix duplica user messages | **Open** | Bug em `session/manager.py` onde else branch causa archive/kept duplication de mensagens de usuário, pode causar inconsistência de contexto LLM |
| **🟡 Média** | [#4111](https://github.com/HKUDS/nanobot/issues/4111) | Heartbeat envia "All clear." desnecessário | **FIXED** (#4114) | Cron job de heartbeat enviava notificação "All clear." via Feishu quando não havia tarefas |

### Avaliação de estabilidade

**Pontos positivos:**
- Equipe responde rapidamente a bugs críticos (fix de WebUI crash mergeado em <24h)
- 2 de 3 bugs reportados já possuem fixes merged
- Foco em "fail closed" em Heartbeat indica postura defensiva madura

**Ponto de atenção:**
- [#4128](https://github.com/HKUDS/nanobot/issues/4128) ainda aberto — bug de duplicação de mensagens pode afetar sessões de produção com compressão de contexto ativa

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features solicitadas

| # | Título | Autor | Status | Sinal de Roadmap |
|---|--------|-------|--------|------------------|
| [#4125](https://github.com/HKUDS/nanobot/issues/4125) | Azure AAD Based Auth | kunalk16 | Open → **In Progress** | Suporte enterprise/azure-native authentication |
| [#4122](https://github.com/HKUDS/nanobot/pull/4122) | Voice recording + Local ASR | Archermmt | Open (invalid) | Interface multimodal — gravação de áudio nativa |
| — | XML tool call handling | lucndm (#4124) | Open | Suporte modelos OpenAI-compatíveis (mimo, glm) que emitem XML |

### PRs indicando direção técnica

| # | Título | Sinal de Roadmap |
|---|--------|------------------|
| [#4115](https://github.com/HKUDS/nanobot/pull/4115) | Extract GatewayHTTPHandler from WebSocketChannel | **Decoupling architecture** — preparação para hot-reload e modularização de canais |
| [#3990](https://github.com/HKUDS/nanobot/pull/3990) | Replace Dream two-phase with simple cron + process_direct | **Simplificação** — reduzir complexidade do Dream agent |
| [#3994](https://github.com/HKUDS/nanobot/pull/3994) | Registry-driven provider config fields | **Multi-cloud extensibility** — Bedrock region/profile exposto na UI |
| [#3997](https://github.com/HKUDS/nanobot/pull/3997) | Pre-warm tokenizer + build-state timing logs | **Performance observability** — diagnosing startup/turn latency |

### Análise de tendências

1. **Enterprise readiness:** Azure AAD Auth (#4125/#4126) e Bedrock config (#3994) indicam foco em adoção corporativa
2. **Segurança defense-in-depth:** SSRF guards (#4123), symlink blocking (#4119), token auth (#4103) — postura proativa
3. **Decoupling/hot-reload:** Arquitetura sendo modularizada para facilitar manutenção futura

---

## 7. Resumo de Feedback dos Usuários

### Dores identificadas

| Dor | Evidência | Severidade |
|-----|-----------|------------|
| **Restrições Azure corporativas** | [#4125](https://github.com/HKUDS/nanobot/issues/4125): "Azure subscriptions sometimes have strict policies which does not allow API Key based auth" | Alta — bloqueia adoção enterprise |
| **Inconsistência de contexto LLM** | [#4128](https://github.com/HKUDS/nanobot/issues/4128): "usuário messages appear in both archive and kept" | Alta — pode gerar alucinações em sessões comprimidas |
| **WebUI crashes imprevisíveis** | [#4116](https://github.com/HKUDS/nanobot/issues/4116): "crashes entire WebUI on specific session load" | Crítica — UX destrutivo |
| **Notificações spam de "All clear."** | [#4111](https://github.com/HKUDS/nanobot/issues/4111): "造成用户困扰" (causa frustração) | Média — ruído de notificação |

### Cenários de uso inferidos

- **Agentes de produção:** Sessões longas com compressão de contexto (problema #4128)
- **Usuários Azure enterprise:** Restrições de compliance impedem adoção (#4125)
- **Integração Feishu/Lark:** Notificações de heartbeat via canal externo (#4111)
- **WebUI-heavy users:** Sessões com code blocks são caso de uso comum (#4116)

### Satisfação implícita

- Equipe responde rapidamente a bugs reportados (<24h para fix)
- Funcionalidade MCP (#4123) atrai interesse de parceiros (Vest, #4120)
- Community contributing PRs de segurança (hamb1y, yu-xin-c) indica confiança no projeto

---

## 8. Backlog que Merece Atenção

### PRs abertos há >7 dias sem resposta

| # | Título | Criado | Days Open | Prioridade |
|---|--------|--------|-----------|------------|
| [#1443](https://github.com/HKUDS/nanobot/pull/1443) | feat: decouple heartbeat reasoning from notification | 2026-03-02 | **~90d** | Média — feature completa mas aguardando review |
| [#3990](https://github.com/HKUDS/nanobot/pull/3990) | refactor(dream): replace two-phase Dream class | 2026-05-24 | ~8d | Alta — simplificação significativa do codebase |
| [#3994](https://github.com/HKUDS/nanobot/pull/3994) | refactor: add registry-driven provider config fields | 2026-05-25 | ~7d | Média — feature enterprise |
| [#3997](https://github.com/HKUDS/nanobot/pull/3997) | perf(agent): pre-warm shared tokenizer | 2026-05-25 | ~7d | Alta — performance improvement |

### Issues aguardando triagem

| # | Título | Criado | Days | Tipo |
|---|--------|--------|------|------|
| [#4125](https://github.com/HKUDS/nanobot/issues/4125) | Azure AAD Auth | 2026-05-31 | 1d | Enhancement — já possui PR #4126 |
| [#4128](https://github.com/HKUDS/nanobot/issues/4128) | retain_recent_legal_suffix bug | 2026-05-31 | 1d | Bug — precisa de confirmação/assign |
| [#4120](https://github.com/HKUDS/nanobot/issues/4120) | Vest partnership discussion | 2026-05-31 | 1d | Closed — sem follow-up visível |

### Recomendações de ação

1. **Review #1443:** PR aberto há ~90 dias — verificar se ainda relevante, caso contrário arquivar ou dar feedback
2. **Triage #4128:** Bug de duplicação de mensagens pode afetar usuários em produção — priorizar assign
3. **Merge #4123/#4119:** Ambos são fixes de segurança SSRF/escape — podem ser mergeados rapidamente
4. **Avaliar #4122:** PR de ASR marcado como "invalid" —用户提供 feedback sobre escopo ou requisitos

---

## Métricas Consolidada do Dia

| Indicador | Valor | Observação |
|-----------|-------|------------|
| Issues abertas/ativas | 2 | Baixo — comunidade reporteia bugs corretamente |
| PRs abertos | 12 | Pipeline saudável |
| PRs fechados/mergeados | 7 | Alta taxa de closure (37% do total) |
| Bugs críticos corrigidos | 2 | WebUI crash + WebSocket security |
| Novas features em开发 | 3 | Azure auth, multimodal ASR, tokenizer warming |
| Releases | 0 | Sem novas versões |

**Saúde geral do projeto: 🟢 Saudável** — Atividade intensa com resposta rápida a bugs críticos, foco em segurança e estabilidade, e pipeline saudável de features enterprise-oriented.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>


# Relatório do Projeto Hermes Agent — 2026-06-01

## 1. Panorama do Dia

O Hermes Agent mantém alta atividade comunitária com 50 issues e 50 PRs atualizados nas últimas 24h, sem novas releases. A comunidade concentra esforços em três eixos: suporte nativo a Windows (quebreadamente demandado há meses), estabilidade da plataforma Telegram (com múltiplos bugs P1 e P2 ativos), e expansão de integrações (Google Chat, ACP Registry para Zed). A taxa de fechamento de issues é baixa (2/50), indicando acumulo de backlog. Não há releases recentes, sinalizando possibly um ciclo de desenvolvimento em andamento ou foco em stabilização.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto não publicou versões novas entre 2026-05-31 e 2026-06-01. Isso pode indicar que a equipe mainteiner está em período de code freeze para a próxima release ou priorizando revisão de PRs. Usuários em ambientes Docker são afetados pela ausência de um passo equivalente à migração de config que roda em updates non-Docker ([PR #35458](https://github.com/NousResearch/hermes-agent/pull/35458) foi merged, mas a release不下来 ainda).

---

## 3. Progresso do Projeto

### PRs Fechados/Merged Hoje

| # | Título | Impacto |
|---|---|---|
| [#35458](https://github.com/NousResearch/hermes-agent/pull/35458) | `fix(config): run config migration on Docker container boot` | **Crítico para Docker** — equaliza o path de update Docker com o fluxo non-Docker, evitando config stale após `docker pull` |

### PRs Abertos Relevantes (por impacto)

| # | Título | Área | Prioridade |
|---|---|---|---|
| [#36063](https://github.com/NousResearch/hermes-agent/pull/36063) | Implement diff-only memory and user profile updates | Performance/Memory | P3 |
| [#36065](https://github.com/NousResearch/hermes-agent/pull/36065) | fix dflash malformed final recovery | Agent/Reliability | P2 |
| [#36071](https://github.com/NousResearch/hermes-agent/pull/36071) | preserve interleaved thinking order on Anthropic replay | Agent/Anthropic | — |
| [#36061](https://github.com/NousResearch/hermes-agent/pull/36061) | feat(gateway): route platform HTTP event callbacks | Gateway/Google Chat | P2 |
| [#36058](https://github.com/NousResearch/hermes-agent/pull/36058) | fix(mcp): fail fast on HTML content-type | MCP/Tooling | P2 |
| [#36059](https://github.com/NousResearch/hermes-agent/pull/36059) | Fix: harden Windows portable Node install | Windows/DX | P3 |
| [#36027](https://github.com/NousResearch/hermes-agent/pull/36027) | fix(tools): scope google chat toolset to platform | Google Chat/Hygiene | P3 |
| [#35342](https://github.com/NousResearch/hermes-agent/pull/35342) | feat(telegram): support business chat automation | Telegram | P3 |

**Destaque estratégico:** O PR [#36063](https://github.com/NousResearch/hermes-agent/pull/36063) implementa diff-only memory updates, otimizando o tamanho do system prompt em conversas multi-turn — uma melhoria de performance que beneficia todos os provedores e plataformas.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| # | Título | Comentários | 👍 | Categoria |
|---|---|---|---|---|
| [#2512](https://github.com/NousResearch/hermes-agent/issues/2512) | Native Windows Support | 10 | 6 | Feature/DX |
| [#10359](https://github.com/NousResearch/hermes-agent/issues/10359) | native windows support | 9 | 8 | Feature/DX |
| [#27385](https://github.com/NousResearch/hermes-agent/issues/27385) | xAI OAuth loopback on macOS: Hermes times out | 8 | 0 | Bug/Auth |
| [#16028](https://github.com/NousResearch/hermes-agent/issues/16028) | ACP Registry integration for Zed editor | 5 | 0 | Feature/ACP |
| [#18301](https://github.com/NousResearch/hermes-agent/issues/18301) | wire up clarify tool for Telegram | 4 | 0 | Feature/Telegram |

### Análise dos Temas

**1. Suporte Nativo a Windows (duplicado em #2512 e #10359, total 14👍):**
Este é o tema mais demandado há meses. A frustração comunitária é evidente: usuários querem rodar Hermes nativamente no Windows sem WSL2. O escopo é "Large (new module or significant refactor)", indicando mudança arquitetural significativa. Há PR [#36059](https://github.com/NousResearch/hermes-agent/pull/36059) em andamento para endurecer a instalação portável de Node.js no Windows.

**2. Plataforma Telegram — Problemas Estruturais:**
São 6+ issues ativas cobrindo bugs críticos de roteamento de mensagens, token management, e UX flicker. A plataforma Telegram recebe atenção desproporcional (sugerindo base de usuários significativa), mas a taxa de bugs indica que a superfície de integração ainda não está madura.

**3. ACP Protocol e Ecossistema de Editores:**
[#16028](https://github.com/NousResearch/hermes-agent/issues/16028) solicita registro no ACP Registry para descoberta automática em editors como Zed. Isso indica estratégia de expansão para além do uso standalone.

**4. MCP Server Reliability:**
Três issues distintas (#35908, #36052, #35703) mostram que integrações MCP ainda apresentam problemas de discovery, auth, e disponibilidade entre plataformas.

---

## 5. Bugs e Estabilidade

### Bugs P1 (Críticos — atendimento imediato recomendado)

| # | Título | Componente | Detalhes |
|---|---|---|---|
| [#27166](https://github.com/NousResearch/hermes-agent/issues/27166) | Telegram DM topic response routed to All Messages after session split | Gateway/Telegram | Após context compression, resposta vai para thread errada |
| [#30411](https://github.com/NousResearch/hermes-agent/issues/30411) | Telegram DM auto-topic-rename broken by `_recover_telegram_topic_thread_id()` | Gateway/Telegram | Root-DM não cria topics; auto-rename falha silenciosamente |
| [#32574](https://github.com/NousResearch/hermes-agent/issues/32574) | Gateway needs periodic platform liveness watchdog | Gateway | Sem mecanismo de detectar zombie connections (afeta Discord, potencialmente outras plataformas) |
| [#25516](https://github.com/NousResearch/hermes-agent/issues/25516) | Type issue in GPT pools — outbound requests fail immediately | Provider/OpenAI | Erro de tipo em `credential_pool.py` bloqueia todos os provedores GPT-family |

### Bugs P2 (Altos)

| # | Título | Componente |
|---|---|---|
| [#27385](https://github.com/NousResearch/hermes-agent/issues/27385) | xAI OAuth loopback on macOS: Hermes times out |
| [#23783](https://github.com/NousResearch/hermes-agent/issues/23783) | Telegram bot token already in use after hermes update |
| [#7069](https://github.com/NousResearch/hermes-agent/issues/7069) | Infinite retry loop caused by stream stale timeout |
| [#32737](https://github.com/NousResearch/hermes-agent/issues/32737) | Tirith shell scanner blocks pipe-to-interpreter |
| [#27834](https://github.com/NousResearch/hermes-agent/issues/27834) | MiniMax/DeepSeek V4 XML tool calls rendered as text |
| [#24000](https://github.com/NousResearch/hermes-agent/issues/24000) | `provider: nous` falls back to 32,768-token context (FIXED) |
| [#35908](https://github.com/NousResearch/hermes-agent/issues/35908) | GoogleDrive MCP server login fails with correct config |
| [#26436](https://github.com/NousResearch/hermes-agent/issues/26436) | `hermes doctor` doesn't flag missing credentials for openrouter |
| [#26157](https://github.com/NousResearch/hermes-agent/issues/26157) | sendMessageDraft causes visible flicker/rollback in Telegram DM |
| [#36054](https://github.com/NousResearch/hermes-agent/issues/36054) | Gateway image auto-routing ignores session model overrides |
| [#35703](https://github.com/NousResearch/hermes-agent/issues/35703) | MCP server tools missing from api_server platform agent |
| [#35882](https://github.com/NousResearch/hermes-agent/issues/35882) | s6 gateway stop records want down but leaves child running |
| [#36052](https://github.com/NousResearch/hermes-agent/issues/36052) | Bad HTTP MCP endpoint blocks discovery for 60s |

**Padrão identificadas:**
- **Telegram:** 6 bugs P1/P2 ativos — a integração mais problemática.
- **Gateway genérico:** Problemas estruturais de zombie connections (#32574) e roteamento de callbacks (#36054).
- **MCP reliability:** Falha em content-type detection, auth, e availability cross-platform.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Abertas por Prioridade

| # | Título | Escopo | Sinais Estratégicos |
|---|---|---|---|
| [#2512](https://github.com/NousResearch/hermes-agent/issues/2512) + [#10359](https://github.com/NousResearch/hermes-agent/issues/10359) | Native Windows Support | Large | Entrada na base Windows sem WSL2 |
| [#16028](https://github.com/NousResearch/hermes-agent/issues/16028) | ACP Registry integration for Zed | Medium | Expansão IDE/editor ecosystem |
| [#36057](https://github.com/NousResearch/hermes-agent/issues/36057) | ACP client mode — connect to external ACP agents | Medium | Hermes como controller de outros agentes |
| [#22201](https://github.com/NousResearch/hermes-agent/issues/22201) + [#32408](https://github.com/NousResearch/hermes-agent/issues/32408) | Per-auxiliary fallback_providers | Medium | Resiliência granular por tarefa |
| [#24206](https://github.com/NousResearch/hermes-agent/issues/24206) | Per-task model override for Kanban workers | Medium | Flexibilidade em workflows automatizados |
| [#18301](https://github.com/NousResearch/hermes-agent/issues/18301) | Clarify tool for Telegram | Small | Feature parity entre plataformas |
| [#15221](https://github.com/NousResearch/hermes-agent/issues/15221) | Exclude compose/profile runtime from Docker build | Small | Docker hygiene |
| [#19272](https://github.com/NousResearch/hermes-agent/issues/19272) | Collapsible Sidebar for Dashboard | Small | UX desktop |
| [#35342](https://github.com/NousResearch/hermes-agent/pull/35342) | Telegram Business Chat Automation | — | Telegram B2C/B2B use cases |

**Sinais de roadmap inferidos:**
1. **Windows first-class** é a demanda mais antiga e voted. Qualquer roadmap sério deve abordar isso.
2. **ACP como protocolo aberto** está se consolidando — tanto como server (Zed) quanto como client (connectar a Claude Code, OpenCode).
3. **Multi-plataforma parity** — Telegram, Google Chat, Slack recebem features em paralelo, indicando estratégia de distribuição broad.

---

## 7. Resumo de Feedback dos Usuários

### Dores Realmente Reportadas

**1. Experiência Windows (usuário: abdelkrimkr, athuljayaram)**
> "We need Native Windows Support"  
> "i want native windows support instead of wsl2"  
**Sentimento:** Frustração moderada-alta. A necessidade de WSL2 é vista como barreira desnecessária.

**2. OAuth e Auth Genérica (usuário: Jind0la)**
> "xAI authorization timed out waiting for the local callback"  
**Sentimento:** Confusão — o browser confirma sucesso, mas Hermes não reconhece. Experiência de setup quebrada.

**3. Stability under Load (usuário: clayop)**
> "When using Hermes Agent with a local LLM backend (especially heavy ones), the agent falls into an infinite loop of timeouts"  
**Sentimento:** Bug bloqueante para power users com setups locais. Impacto direto na usabilidade.

**4. Docker User Experience (autor PR #35458: konsisumer)**
> "Docker image update path had no equivalent to the config-migration step that runs during `hermes update`"  
**Sentimento:** Descoberta de gap de parity entre install methods. Ameaça a adoção Docker.

**5. Telegram comodaily Driver (múltiplos)**
Problemas de roteamento de mensagens, token management, e UX flicker mostram que Telegram é usado intensivamente mas com fricção.

### Cenários de Uso Identificados

- **Setup local com LLMs pesados** (prefill > 180s)
- **Telegram como interface principal** (DM, topics, business)
- **MCP server integration** (Google Drive, tools externos)
- **Kanban workers automatizados** para workflows
- **Google Meet com captions e TTS** (PR #36073)

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Stale

| # | Título | Idade | Status | Ação Recomendada |
|---|---|---|---|---|
| [#15221](https://github.com/NousResearch/hermes-agent/issues/15221) | Exclude compose/profile runtime from Docker build context | ~37 dias | 2 comentários, 0 resposta maintainer | Baixa prioridade mas fácil de resolver |
| [#19272](https://github.com/NousResearch/hermes-agent/issues/19272) | Collapsible Sidebar for Dashboard | ~28 dias | 2 comentários | UX request — precisa de feedback da equipe |
| [#26157](https://github.com/NousResearch/hermes-agent/issues/26157) | sendMessageDraft flicker/rollback | ~16 dias | 2 comentários, P2 | Bug P2 sem assignment claro |

### Issues Duplicadas ou Consolidadoras

| # | Subtipo | Recomendação |
|---|---|---|
| [#2512](https://github.com/NousResearch/hermes-agent/issues/2512) + [#10359](https://github.com/NousResearch/hermes-agent/issues/10359) | Windows Support duplicado | Consolidar em uma issue com escopo definido |
| [#22201](https://github.com/NousResearch/hermes-agent/issues/22201

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>


# Relatório de Projeto — PicoClaw
## Data de Referência: 2026-06-01 | Fonte: github.com/sipeed/picoclaw

---

## 1. Panorama do Dia

O projeto PicoClaw apresenta **alta atividade comunitária** em 31 de maio de 2026, com 12 PRs e 7 issues atualizados nas últimas 24h. A versão nightly **v0.2.9-nightly.20260531.1ce353ba** foi publicada como build automatizado, sinalizando desenvolvimento contínuo no branch principal. O time focou em correções de bugs críticos — especialmente no provider Codex/OAuth com respostas vazias — e em melhorias incrementais de estabilidade no message bus e agent loop. A taxa de PRs abertos/fechados (8/4) indica fluxo saudável de code review.

---

## 2. Lançamentos

### 🌙 Release Nightly: v0.2.9-nightly.20260531.1ce353ba

| Campo | Detalhe |
|-------|---------|
| **Tag** | `nightly` |
| **Commit** | 1ce353ba |
| **Natureza** | Automated nightly build |
| **Status** | ⚠️ Instável — uso em produção desaconselhado |
| **Changelog** | https://github.com/sipeed/picoclaw/compare/v0.2.9...main |

**Notas:**
- Build automatizado do branch `main`; sem changelog formal detalhado.
- Sem breaking changes documentadas para esta build.

> 📌 **Recomendação:** Aguardar próxima tag estável (baseada nos PRs mergeados) para deployments em produção.

---

## 3. Progresso do Projeto

### PRs Fechados/Mergidos (4)

| # | Título | Impacto | Link |
|---|--------|---------|------|
| **#2967** | `fix(codex): preserve streamed output text deltas` | 🔴 **Crítico** — Corrige responses vazias no Codex OAuth ao preservar deltas de streaming. Resolve também #2674. | [PR #2967](https://github.com/sipeed/picoclaw/pull/2967) |
| **#2969** | `feat(web): add chat image paste and drag-and-drop upload` | 🟢 UX — Suporte a colar e arrastar imagens no frontend web, com normalização MIME. | [PR #2969](https://github.com/sipeed/picoclaw/pull/2969) |
| **#2856** | `feat(message): support media attachments and Telegram rich delivery` | 🟡 Interoperabilidade — Estende `message` tool para payloads mídia+texto, unificando workflow. | [PR #2856](https://github.com/sipeed/picoclaw/pull/2856) |
| **#2980** | `chore: gitignore debug output files` | ⚪ housekeeping — Limpeza de artefatos de debug. | [PR #2980](https://github.com/sipeed/picoclaw/pull/2980) |

**Destaque principal:** A correção `#2967` resolve um bug de longue data no provider Codex, onde responses streaming eram descartadas, causando mensagens de erro "empty response" mesmo com backend funcional.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| # | Tipo | Tema | 👍 | 💬 | Link |
|---|------|------|----|----|------|
| **#28** | Enhancement (Provider) | LM Studio Easy Connect | 2 | 21 | [Issue #28](https://github.com/sipeed/picoclaw/issues/28) |
| **#2674** | Bug (Provider) | Codex OAuth empty response | 4 | 7 | [Issue #2674](https://github.com/sipeed/picoclaw/issues/2674) |

### Análise

**#28 — LM Studio Integration (21 comentários, 2 👍)**
- Demanda antiga (fev/2026) para conexão simplificada com LM Studio como provider.
- O autor reconhece limitação técnica própria para implementar; comunidade demonstra interesse moderado (2 👍).
- Status: **CLOSED** com label `stale` — nenhum consenso sobre priorização.
- **Sinal de roadmap:** Integração com provedores "local-first" (LM Studio, Ollama) parece ser demanda recorrente.

**#2674 — Codex OAuth Empty Response (4 👍, 7 comentários)**
- Bug crítico: backend ChatGPT retorna dados via `response.output_item.done`, mas PicoClaw ignorava e exibia erro genérico.
- **Resolvido via PR #2967** — excelente exemplo de colaboração comunidade ↔ maintainers.
- **Sinal:** Providers baseados em streaming não-padrão (Codex, APIs alternativas) exigem handlers customizados.

---

## 5. Bugs e Estabilidade

### Issues Abertas — Bugs

| # | Severidade | Descrição | 💬 | Link |
|---|------------|-----------|----|------|
| **#2674** | 🔴 Alta | Codex OAuth: resposta vazia ao usar streaming não-padrão | 7 | [Issue #2674](https://github.com/sipeed/picoclaw/issues/2674) |
| **#2968** | 🟡 Média | `/context` sempre exibe "Compress at: 76800 tokens" | 3 | [Issue #2968](https://github.com/sipeed/picoclaw/issues/2968) |
| **#2952** | 🟡 Média | QQ canal reinicia em loop após restart; `exec` command sem `actions:run` | 3 | [Issue #2952](https://github.com/sipeed/picoclaw/issues/2952) |

### PRs Abertos — Correções Pendentes

| # | Tipo | Descrição | Link |
|---|------|-----------|------|
| **#2936** | Bugfix | Pular skills com binários ausentes no PATH (evita advertising de skills inoperantes) | [PR #2936](https://github.com/sipeed/picoclaw/pull/2936) |
| **#2979** | Bugfix | Compatibilidade com `anthropic-sdk-go v1.46.0` (helper removido) | [PR #2979](https://github.com/sipeed/picoclaw/pull/2979) |
| **#2976** | Bugfix | Makefile falhava com espaço em `go env GOVERSION` | [PR #2976](https://github.com/sipeed/picoclaw/pull/2976) |

### Análise de Estabilidade

**Pontos de Atenção:**
1. **Message Bus (#2906)** — PR aberto sobre backpressure handling; filas saturadas sem bounded waiting podem causar deadlocks em cargas altas.
2. **Agent Loop (#2904)** — Correção de goroutine leak no reload de provider; indica problema de estabilidade em hot-reload.
3. **Loop de restart no QQ (#2952)** — Bug de regressão no channel handler, possivelmente relacionado a contexto/history mal gerenciado.

**Métricas positivas:** Correções de bugs estão sendo mergeadas rapidamente (PR #2967 fechado em <48h após reporte).

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| # | Tema | Resumo | Link |
|---|------|--------|------|
| **#2978** | Provider | Adicionar suporte a **OmniRoute** como provider | [Issue #2978](https://github.com/sipeed/picoclaw/issues/2978) |
| **#2952** | UX/Interface | Interface deve listar providers com keys salvas; seleção via dropdown; teste de conexão com `/models` | [Issue #2952](https://github.com/sipeed/picoclaw/issues/2952) |

### PRs Abertos com Features

| # | Feature | Descrição | Link |
|---|---------|-----------|------|
| **#2977** | Cron Tool | Ações `get` e `update` no cron tool para edição granular sem recreate | [PR #2977](https://github.com/sipeed/picoclaw/pull/2977) |
| **#2975** | Telegram | Reply a mensagem do bot é tratada como @mention em grupos | [PR #2975](https://github.com/sipeed/picoclaw/pull/2975) |
| **#2902** | Docs | Guia oficial para rodar PicoClaw no **Android Termux** (ARM64) | [PR #2902](https://github.com/sipeed/picoclaw/pull/2902) |

### Sinais de Roadmap

1. **Multi-provider management:** Demanda clara por melhor UI de configuração de API keys e seleção de provider.
2. **Mobile/Termux support:** PR de documentação indica interesse em expandir para Android — bom candidato a guideline oficial.
3. **Skills resilience:** PR #2936 demonstra foco em robustez (não advertise skills inalcançáveis).

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Dor | Contexto | Severidade | Referência |
|-----|----------|------------|------------|
| **Respostas vazias inexplicáveis** | Codex OAuth / ChatGPT backend | 🔴 Alta | [#2674](https://github.com/sipeed/picoclaw/issues/2674) |
| **Comportamento estranho do `/context`** | Compressão de tokens sempre em 76800 | 🟡 Média | [#2968](https://github.com/sipeed/picoclaw/issues/2968) |
| **Loop de restart em canal QQ** | Ao reiniciar, bot re-reinicia ao receber qualquer mensagem | 🟡 Média | [#2952](https://github.com/sipeed/picoclaw/issues/2952) |
| **Falha de build com Go customizado** | Makefile não tolera espaços em `GOVERSION` | 🟢 Baixa | [#2976](https://github.com/sipeed/picoclaw/pull/2976) |

### Cenários de Uso Emergentes

- **Local AI:** Issue #28 evidencia desejo de usar LM Studio (inference local).
- **Multi-plataforma:** Documentação Termux (#2902) confirma uso em Android.
- **Rich Messaging:** Feature de mídia em messages (#2856) atende usuários de Telegram com necessidade de mídia rica.

### Satisfação Geral

| Indicador | Leitura |
|-----------|---------|
| Tempo de resposta a bugs | ✅ Rápido (<48h em issues críticas) |
| Engajamento em PRs | ✅ Ativo (12 PRs em 24h) |
| Issues stale sem resposta | ⚠️ Preocupante (#28 com 21 comentários mas closed/stale) |

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Stale

| # | Idade | Tema | Status | Link |
|---|-------|------|--------|------|
| **#28** | ~4 meses | LM Studio Easy Connect | Closed/Stale | [Issue #28](https://github.com/sipeed/picoclaw/issues/28) |
| **#2855** | ~3 semanas | Extend message tool para mídia | Closed/Stale | [Issue #2855](https://github.com/sipeed/picoclaw/issues/2855) |
| **#2953** | ~5 dias | Codex OAuth empty response (dup de #2674) | Closed | [Issue #2953](https://github.com/sipeed/picoclaw/issues/2953) |

### PRs Stale Pendentes de Review

| # | Idade | Tema | Prioridade | Link |
|---|-------|------|------------|------|
| **#2936** | ~7 dias | Skip skills com binários ausentes | 🟡 Média | [PR #2936](https://github.com/sipeed/picoclaw/pull/2936) |
| **#2906** | ~11 dias | Message bus backpressure | 🔴 Alta | [PR #2906](https://github.com/sipeed/picoclaw/pull/2906) |
| **#2904** | ~11 dias | Agent loop reload stability | 🔴 Alta | [PR #2904](https://github.com/sipeed/picoclaw/pull/2904) |
| **#2902** | ~11 dias | Android Termux guide | 🟢 Baixa | [PR #2902](https://github.com/sipeed/picoclaw/pull/2902) |

### Recomendações para Maintainers

1. **Revisar PRs #2904 e #2906** — ambos tratam estabilidade de runtime (goroutine leaks, deadlocks); são críticos para produção.
2. **Reavaliar Issue #28** — 21 comentários indicam demanda real por provider local; definir posição (backlog, won't do, ou planejado).
3. **Manter ciclo de releases estável** — a última release oficial é v0.2.9; considerar tagging de release semanal para as correções acumulada.

---

## Ficha-Resumo

| Métrica | Valor |
|---------|-------|
| Issues ativas (24h) | 7 |
| PRs atualizados (24h) | 12 |
| PRs abertos | 8 |
| PRs fechados | 4 |
| Releases | 1 (nightly) |
| Bugs críticos abertos | 1 (#2674 — resolvido em PR) |
| Bugs médios abertos | 2 |
| PRs stale sem review | 4 |

> **Saúde Geral:** 🟢 Saudável — atividade alta, bugs críticos sendo corrigidos rapidamente, código novo fluindo via PRs. Atenção necessária aos PRs de estabilidade stale.

---
*Relatório gerado automaticamente com base em dados GitHub de 2026-05-31 (23:59 UTC).*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-06-01

## 1. Panorama do Dia

O projeto IronClaw apresenta **alta atividade de desenvolvimento** nas últimas 24h, com 23 PRs atualizados e 5 issues em movimento. A equipe demonstra foco em infraestrutura crítica: o fechamento de PRs relacionados a autenticação OAuth (#4257), triggers (#4261) e comunicação outbound (#4260) indica progresso significativo na arquitetura "Reborn". A dependência pesada em atualizações automatizadas via Dependabot (6 PRs) evidencia maturidade no pipeline de dependências, enquanto falhas na nightly E2E (#4108) e issues abertas sobre stdio MCP (#2923) e política de sub-jobs (#228) apontam para áreas que requerem atenção nos próximos ciclos.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto está em fase ativa de desenvolvimento com mudanças sendo merged continuamente. O último release estável (v0.25.0, referenciado na issue #2923) permanece como versão de referência para bugs reportados.

---

## 3. Progresso do Projeto

### PRs Merged/Closed Recentemente

| PR | Escopo | Destaque |
|---|---|---|
| [#4257](https://github.com/nearai/ironclaw/pull/4257) | Auth/OAuth | Implementa wire-shape e WebUI v2 para OAuth de GSuite, Notion MCP e GitHub PAT |
| [#4261](https://github.com/nearai/ironclaw/pull/4261) | Triggers | Adiciona skeleton do crate `ironclaw_triggers` com tipos de domínio e validação cron |
| [#4260](https://github.com/nearai/ironclaw/pull/4260) | Outbound | Cria repositório de preferências de comunicação (reply_target, approval_prompt, etc.) |
| [#4268](https://github.com/nearai/ironclaw/pull/4268) | Dependências | Atualização massiva de 46 dependências (Tokio, PostgreSQL, agent-client-protocol) |
| [#4256](https://github.com/nearai/ironclaw/pull/4256) | Testes E2E | Fixtures e 3 cenários de teste para auth E2E |
| [#4000](https://github.com/nearai/ironclaw/pull/4000) | Dependências | Bump serde_json 1.0.149 → 1.0.150 |

**Avanços-chave:**
- Sistema de triggers com backend libSQL iniciado
- Pipeline de autenticação OAuth completamente reprojetado para WebUI v2
- Motor de resolução outbound em fase inicial de implementação

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| Issue | Tipo | Comentários | Reações | Análise |
|---|---|---|---|---|
| [#2923](https://github.com/nearai/ironclaw/issues/2923) | Bug | 4 | 1 👍 | **stdio MCP activation bug** — Usuário reporta que pré-verificação falha mesmo transport sendo suportado em v0.25.0. Reabertura de #2474 após fechamento incorreto por non-maintainer. Alto risco para integrações MCP stdio. |
| [#3289](https://github.com/nearai/ironclaw/issues/3289) | Feature | 1 | 0 | Migração de OAuth e secrets para novos flows — issue pai de 8 issues relacionadas, indica reescrita significativa da camada de autenticação. |

### PRs com Maior Complexidade (Size XL)

| PR | Escopo | Sinal |
|---|---|---|
| [#4269](https://github.com/nearai/ironclaw/pull/4269) | docs | Propagação de requisitos product-auth para auth prompts |
| [#4266](https://github.com/nearai/ironclaw/pull/4266) | docs | Correção de handling de capability_info com targets desconhecidos |
| [#4239](https://github.com/nearai/ironclaw/pull/4239) | docs | Projeção de accounts para runtime credential broker |
| [#4263](https://github.com/nearai/ironclaw/pull/4263) | triggers | Adição de backend libSQL para triggers |
| [#4262](https://github.com/nearai/ironclaw/pull/4262) | outbound | Engine de resolução de comunicação |
| [#4229](https://github.com/nearai/ironclaw/pull/4229) | web | GitHub SSO nativo para WebUI v2 |

---

## 5. Bugs e Estabilidade

### Falhas de CI/CD

| Severity | Item | Descrição |
|---|---|---|
| **🔴 Alta** | [#4108](https://github.com/nearai/ironclaw/issues/4108) | **Nightly E2E failed** — Workflow falhou no commit `749f584`. Jobs específicos: Full E2E e E2E (extensions). Falha em `failure` sem detalhes publicados na issue (0 comentários). Requer investigação imediata. |

### Bugs Reportados

| Bug | Status | Impacto |
|---|---|---|
| [#2923](https://github.com/nearai/ironclaw/issues/2923) — stdio MCP activation fail | **OPEN** | Ativação de servidores MCP stdio falha na pré-verificação. Bug afeta fluxo de discovery de authorization endpoints. |

**Métricas de Estabilidade:**
- Taxa de falha E2E: **1 falha** / 1 execução (100% falha na última nightly)
- PRs de dependências fechados: 3 (sem incidentes reportados)

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features em Desenvolvimento

| PR | Escopo | Descrição |
|---|---|---|
| [#228](https://github.com/nearai/ironclaw/issues/228) | Agent | **Deny-by-default delegation policy** — Adicionar política de segurança para evitar criação descontrolada de sub-jobs via `CreateJobTool`. Protege contra prompts injection e alucinações de LLM. |
| [#4264](https://github.com/nearai/ironclaw/pull/4264) | Gateway | Endpoint `POST /api/routines` para criação de rotinas via API web |
| [#4090](https://github.com/nearai/ironclaw/pull/4090) | Observabilidade | Configuração de `IRONCLAW_LOG_MAX_BYTES` para debugging de logs |
| [#4265](https://github.com/nearai/ironclaw/pull/4265) | Testes | Live E2E tests seguindo guideline codeact |

### Arquitetura "Reborn" — Sinais de Roadmap

O volume de PRs relacionados à saga "Reborn" (#4257, #4239, #4261, #4260, #4262, #4263) indica que a reescrita arquitetural está em ritmo acelerado:

1. **Autenticação**: OAuth flows nativos (GSuite, Notion, GitHub), credential broker unificado
2. **Triggers**: Sistema de triggers durável com backend libSQL
3. **Outbound**: Motor de resolução de comunicações (delivery candidates)
4. **WebUI**: SSO nativo com GitHub, nova superfície de auth

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Problema | Fonte | Impacto |
|---|---|---|
| **Integração stdio MCP quebrada** | [#2923](https://github.com/nearai/ironclaw/issues/2923) (usuário `rajulbhatnagar`) | Crítico — ativações MCP via stdio completamente bloqueadas |
| **Regressão de E2E nightly** | [#4108](https://github.com/nearai/ironclaw/issues/4108) (automated) | Blindam testes de regressão até resolução |

### Cenários de Uso Emergentis

- **MCP via stdio**: Usuários tentando integrar servidores MCP externos reportam falhas na pré-verificação
- **OAuth com serviços externos**: Crescente demanda por auth flows para GSuite, Notion e GitHub
- **Políticas de segurança para agentes**: Necessidade de limitar criação de sub-jobs para evitar runaway jobs

### Satisfação/Insatisfação

- **Positivo**: Progresso visível em auth flows e triggers; kontribusições ativas de contributors externos
- **Negativo**: Falha na nightly E2E e bug de stdio MCP causam fricção para usuários avançados

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta / Abandonadas

| Issue | Idade | Status | Prioridade |
|---|---|---|---|
| [#2923](https://github.com/nearai/ironclaw/issues/2923) | ~37 dias | **OPEN** (reaberta) | **P1** — Bug de stdio MCP afeta usuários de integrações |
| [#228](https://github.com/nearai/ironclaw/issues/228) | ~102 dias | **OPEN** | **Enhancement** — Política de segurança para sub-jobs |
| [#4108](https://github.com/nearai/ironclaw/issues/4108) | ~5 dias | **OPEN** | **P0** — CI/CD falhando |

### PRs Abertos com Alto Impacto

| PR | Size | Risco | Idade | Ação Recomendada |
|---|---|---|---|---|
| [#4269](https://github.com/nearai/ironclaw/pull/4269) | XL | Low | <1 dia | Revisar para merge |
| [#4266](https://github.com/nearai/ironclaw/pull/4266) | XL | Low | <1 dia | Revisar para merge |
| [#4229](https://github.com/nearai/ironclaw/pull/4229) | XL | Low | ~3 dias | GitHub SSO — review pendente |
| [#4263](https://github.com/nearai/ironclaw/pull/4263) | XL | Low | <1 dia | Triggers libSQL — review pendente |
| [#4262](https://github.com/nearai/ironclaw/pull/4262) | XL | Low | <1 dia | Outbound engine — review pendente |

---

## Métricas Consolidada (Últimas 24h)

| Indicador | Valor | Tendência |
|---|---|---|
| Issues ativas | 3 | Neutra |
| Issues fechadas | 2 | Positiva |
| PRs abertos | 15 | Alta atividade |
| PRs merged/closed | 8 | Positiva |
| Releases | 0 | N/A |
| Falhas E2E | 1 | **Alerta** |
| Contribuidores únicos | 5+ | Positiva |

---

**Próximos Passos Recomendados:**
1. Investigar e resolver falha de nightly E2E (#4108) — bloqueia regressão
2. Avaliar fix para bug stdio MCP (#2923) — P1
3. Review dos PRs XL de arquitetura Reborn antes do freeze de release

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório de Projeto CoPaw — 2026-06-01

---

## 1. Panorama do Dia

O projeto CoPaw apresenta alta atividade com **17 issues e 2 PRs atualizados nas últimas 24h**, sem novos lançamentos. O foco atual está na **estabilidade do Windows** — bugs relacionados a processos de navegador, lock de diretórios, acumulação de processos MCP e flashes de console dominam o backlog. A comunidade demonstra interesse significativo em UX (seletores de thinking effort, modos de chat) e otimização de performance (carga por demanda de ferramentas). A taxa de fechamento de issues está baixa, sugerindo que muitos problemas de longa data precisam de atenção priorizada.

---

## 2. Lançamentos

**Nenhum novo release nas últimas 24h.** O último release disponível é a versão **v1.1.9**, que aparenta ter introduzie regressões conforme reportado em [#4837](https://github.com/agentscope-ai/QwenPaw/issues/4837).

---

## 3. Progresso do Projeto

| PR | Status | Contribuidor | Impacto |
|---|---|---|---|
| [#4810](https://github.com/agentscope-ai/QwenPaw/pull/4810) feat(console): improve chat slash skill suggestions | Under Review | saltapp | Melhora experiência do usuário com sugestões de skills no chat, popup compacto com scrolling limitado a 5 itens, logs de debug para carregamento. |
| [#4689](https://github.com/agentscope-ai/QwenPaw/pull/4689) feat(providers): route non-standard generate_kwargs into extra_body | OPEN | leoleils | Permite parâmetros não-padrão (ex: DashScope `enable_search`) fluírem corretamente para a API. |

**Destaque:** O PR #4810 está em revisão e representa uma melhoria incremental na UX do console. O PR #4689 resolve um problema crítico de compatibilidade com provedores não-padrão da OpenAI SDK.

---

## 4. Temas Quentes da Comunidade

| Issue | Comentários | Tema | Análise |
|---|---|---|---|
| [#4653](https://github.com/agentscope-ai/QwenPaw/issues/4653) Cron jobs sharing session | 8 | Conflito de session entre tarefas cron e mensagens de usuário | Bug crítico que interrompe tarefas programadas. Afeta automações dependentes de timing preciso. |
| [#4123](https://github.com/agentscope-ai/QwenPaw/issues/4123) Windows execute_shell_command console flash | 8 | Experiência Windows degradada | Problema antigo (criado em 2026-05-08) sem resolução. Impacta usabilidade diária. |
| [#4649](https://github.com/agentscope-ai/QwenPaw/issues/4649) Orphaned cron jobs not cleaned | 5 | Gerenciamento de estado de tarefas | ghost tasks executando indefinidamente causam desperdício de recursos e comportamento imprevisível. |

**Tendência:** Problemas de **estado e lifecycle** (cron jobs órfãos, processos MCP acumulados, sessões compartilhadas) são o tema mais recorrente com alto volume de discussão.

---

## 5. Bugs e Estabilidade

### 🔴 Críticos
| Issue | Descrição | Severidade |
|---|---|---|
| [#4844](https://github.com/agentscope-ai/QwenPaw/issues/4844) Browser process locks on Windows | Processos de navegador e diretórios temporários não são liberados após sessão, causando falhas em cascata. | Alta |
| [#4835](https://github.com/agentscope-ai/QwenPaw/issues/4835) One invalid job fails entire workspace | Um único job mal-formatado em `jobs.json` trava todo o workspace. | Crítica |
| [#4837](https://github.com/agentscope-ai/QwenPaw/issues/4837) v1.1.9 fallback reply "cannot process your question" | Regressão na v1.1.9 causando respostas de fallback excessivas. | Crítica |

### 🟡 Moderados
| Issue | Descrição |
|---|---|
| [#4833](https://github.com/agentscope-ai/QwenPaw/issues/4833) Memory compaction failed in pre_reasoning hook |
| [#4834](https://github.com/agentscope-ai/QwenPaw/issues/4834) MCP server processes accumulate across restarts |
| [#4839](https://github.com/agentscope-ai/QwenPaw/issues/4839) ~prefixed stale skill dirs after pip upgrade |

### 🟢 Menores (Windows UX)
| Issue | Descrição |
|---|---|
| [#4123](https://github.com/agentscope-ai/QwenPaw/issues/4123) Console window flashes on execute_shell_command |
| [#4832](https://github.com/agentscope-ai/QwenPaw/issues/4832) CREATE_NO_WINDOW flag missing |

---

## 6. Pedidos de Features e Sinais de Roadmap

| Issue | Feature | Impacto Potencial | Link |
|---|---|---|---|
| [#4836](https://github.com/agentscope-ai/QwenPaw/issues/4836) On-demand tool definition loading | Reduzir 55-65% do token overhead na inicialização (~20-25K tokens economizados) | **Alto** — performance e custo |
| [#4843](https://github.com/agentscope-ai/QwenPaw/issues/4843) Configurable chat modes (Interrupt/Queue/Insert) | Controle fino sobre concorrência de mensagens | **Médio** — UX |
| [#4840](https://github.com/agentscope-ai/QwenPaw/issues/4840) Thinking effort level selector in UI | UI para ajustar thinking depth sem edição de config | **Médio** — UX |
| [#4838](https://github.com/agentscope-ai/QwenPaw/issues/4838) Suppress final text after tool calls | Silent tool execution para canais interativos | **Baixo** — feature niche |

**Sinal de roadmap:** A comunidade está claramente focada em **otimização de custo (token reduction)** e **experiência de usuário (configurabilidade)**. A feature #4836 (on-demand loading) merece atenção estratégica dado seu impacto direto no throughput e gastos com LLM APIs.

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas:

**1. Estabilidade no Windows** — Múltiplos bugs relacionados à plataforma Windows (processos órfãos, lock de arquivos, flashes de console) indicam que o backend tem problemas de cleanup de recursos e subprocess management.

**2. Gerenciamento de Estado Cron** — Usuários que dependem de tarefas agendadas reportam comportamento imprevisível quando jobs são atualizados ou removidos. Ghost tasks acumulando é uma dor real.

**3. Regressão na v1.1.9** — Fallback excessivo "não consigo processar sua pergunta" indica problemas na camada de tratamento de exceções ou timeout handling.

**4. Escalabilidade de MCP** — Com 300+ agentes, o sistema não escala adequadamente (explosão de processos MCP). Nenhum caso de uso enterprise documentado, mas é um limite técnico.

### Cenários de Uso Observados:
- Automação de tarefas via cron ( parenting tips, lembretes)
- Execução de shell commands para automação de desktop
- Uso de múltiplos agentes em paralelo (300+)
- Carregamento de skills externos via ClawHub

---

## 8. Backlog que Merece Atenção

| Issue | Idade | Status | Prioridade |
|---|---|---|---|
| [#4123](https://github.com/agentscope-ai/QwenPaw/issues/4123) Windows console flash | 23 dias | **OPEN** | Alta — 8 comentários, problema antigo não resolvido |
| [#4844](https://github.com/agentscope-ai/QwenPaw/issues/4844) Browser process locks | Novo | **OPEN** | Alta — impacto em backup operations |
| [#4834](https://github.com/agentscope-ai/QwenPaw/issues/4834) MCP process accumulation | Novo | **OPEN** | Alta — impacto em restart cycles |
| [#4837](https://github.com/agentscope-ai/QwenPaw/issues/4837) v1.1.9 fallback regression | Novo | **OPEN** | Crítica — regressão de release |
| [#4836](https://github.com/agentscope-ai/QwenPaw/issues/4836) On-demand tool loading | Novo | **OPEN** | Alta — impacto em custo/performance |

---

## Conclusão

O projeto CoPaw apresenta **saúde operacional moderada** com alta atividade de issues mas baixa taxa de resolução aparente. Os pontos cegos principais são:

1. **Windows compatibility** — bugs não resolvidos há semanas sugerem necessidade de QA dedicado ou automação de testes Windows.
2. **Statelessness failures** — processos e sessões não são corretamente limpos, indicando gaps no lifecycle management.
3. **Feature bloat vs stability** — Issues de UX (#4843, #4840) competem com bugs críticos pelo backlog.

**Recomendação:** Priorizar a resolução de bugs de Windows e estado (lifecycle) antes de implementar novas features, especialmente considerando o release v1.1.9 com regressões ativas.

---

*Relatório gerado em 2026-06-01. Dados extraídos de [CoPaw/QwenPaw GitHub](https://github.com/agentscope-ai/QwenPaw).*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>


# Relatório de Projeto — ZeroClaw
## Período: 2026-06-01

---

## 1. Panorama do Dia

O ecossistema ZeroClaw mantém **alta atividade** com 100 eventos totais em 24h (50 issues + 50 PRs). A distribuição de 41 PRs abertos vs. 9 merged/fechados indica um pipeline robusto de contribuições, mas também sugere que a base de código está em fase de consolidação de múltiplas frentes simultâneas — providers, canais de comunicação, segurança e hardware. A ausência de releases novas (v0.8.0-beta-1 é a mais recente) e o volume de issues bloqueadas (`status:blocked, needs-maintainer-review`) sinalizam que a equipe core está focada em revisar e estabilizar o código para a próxima beta. O destaque vai para a convergência de PRs de hardware (ESP32, sensores) com a plataforma core, indicando expansão do caso de uso para IoT/embarcados.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

A última versão remains **v0.8.0-beta-1**, com o PR #6848 servindo como base para a **v0.8.0-beta-2** em preparação. O PR #6848 (feat(integration): introduce zerocode TUI, RPC socket transport, DenyWithEdit approval, and beta-2 integration) é o gargalo de integração mais crítico do momento — ele consolida TUI, transport RPC e fluxo de aprovação, afetando virtualmente todos os módulos do projeto.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados nas Últimas 24h

| # | PR | Impacto |
|---|-----|---------|
| [#7049](https://github.com/zeroclaw-labs/zeroclaw/pull/7049) | fix(providers): omit temperature for kimi-k2 models | Resolve bug crítico que causava erro 400 na API do Kimi |
| [#7044](https://github.com/zeroclaw-labs/zeroclaw/pull/7044) | refactor(cargo): extract channels-all aggregate feature | Limpeza de dependências, separa features de canais em crate agregado |
| [#7048](https://github.com/zeroclaw-labs/zeroclaw/pull/7048) | feat(hardware): add esp32_sim example | Demonstração de simulador ESP32 com frontend web (hackathon) |
| [#7047](https://github.com/zeroclaw-labs/zeroclaw/pull/7047) | fix(hardware): surface pin_devices and description | Melhora ferramenta `hardware_capabilities` expondo dispositivos nomeados |
| [#7046](https://github.com/zeroclaw-labs/zeroclaw/pull/7046) | feat(hardware): add dev-sim feature | Feature `dev-sim` com allowlist de portas seriais `/tmp/zc-sim-*` |
| [#7045](https://github.com/zeroclaw-labs/zeroclaw/pull/7045) | feat(hardware): add smartroom named-device tools | Ferramentas `set_device` / `read_device` com fiação de periféricos |

**Análise:** O PR #7049 é o fix mais urgente — corrige regressions na provider compatible que afeta Kimi/Moonshot. Os PRs de hardware (#7045–#7048) indicam investimento institucional na demo de IoT, possivelmente para eventos futuros ou materiais de marketing. O refactor #7044 é arquitetura: extrair `channels-all` como feature separada evita que users finais instalem dependências de email/IMAP sem necessidade.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários + reações)

| # | Título | Comentários | 👍 | Categoria |
|---|--------|-------------|----|-----------|
| [#5937](https://github.com/zeroclaw-labs/zeroclaw/issues/5937) | refactor: Unify providers architecture and reqwest client management | 9 | 0 | provider/arch |
| [#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) | Per-sender RBAC for multi-tenant agent deployments | 8 | 0 | security/multi-tenant |
| [#5847](https://github.com/zeroclaw-labs/zeroclaw/issues/5847) | Document gateway.web_dist_dir & ZEROCLAW_WEB_DIST_DIR | 8 | 1 | documentation |
| [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) | computer-use support (screen interaction like Codex) | 4 | 0 | agent/desktop |
| [#6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) | Route scheduled tasks through the orchestrator pipeline | 3 | 0 | cron/orchestrator |
| [#6969](https://github.com/zeroclaw-labs/zeroclaw/issues/6969) | unified output routing model (per-peer modality preference) | 3 | 0 | channel/routing |

**Análise:** A issue #5937 (reqwest unification) lidera com 9 comentários — indica dor crônica de code duplication nos providers. A ausência de thumbs-up em issues técnicas sugere que a comunidade prioriza discussão funcional sobre validação social. O RFC #6954 sobre routing de cron jobs é significativo: ele tenta resolver **cinco bugs relacionados** (#6037, #6105, #6648, #6632, #6686) de uma vez — indica arquitetura de scheduler instável que a comunidade já identificou como problema sistêmico.

---

## 5. Bugs e Estabilidade

### Issues de Bug Abertos por Severidade

| Severidade | Count | Exemplos Críticos |
|------------|-------|-------------------|
| **P1 (S1 — workflow blocked)** | ~10 | #5122, #4842, #6647, #4879, #6914, #7022, #5256 |
| **P2 (S2 — degraded behavior)** | ~15+ | #5962, #5866, #5962, #5879 |

### Bugs Mais Críticos

**🔴 Alta Severidade:**

- [#7022](https://github.com/zeroclaw-labs/zeroclaw/issues/7022) — **kimi-k2.6 falha com 400** por temperature hardcoded em compatible.rs. **Fix merged em #7049** ✅
- [#6647](https://github.com/zeroclaw-labs/zeroclaw/issues/6647) — Cron jobs não entregam output em canais Telegram, só no dashboard web.
- [#4842](https://github.com/zeroclaw-labs/zeroclaw/issues/4842) — `zeroclaw update` baixa binário errado em Raspberry Pi (aarch64).
- [#4879](https://github.com/zeroclaw-labs/zeroclaw/issues/4879) — Gemini CLI OAuth quebrado desde auth bem-sucedida.
- [#5962](https://github.com/zeroclaw-labs/zeroclaw/issues/5962) — Ollama Provider falha quando tools são necessárias (bloqueia sessão).
- [#6876](https://github.com/zeroclaw-labs/zeroclaw/issues/6876) — `allowed_tools` em risk_profile **não restringe ferramentas MCP**, potencial gap de segurança.

**🟡 Média Severidade:**

- [#5866](https://github.com/zeroclaw-labs/zeroclaw/issues/5866) — Bot Telegram ignora replies quando `mention_only=true`.
- [#6720](https://github.com/zeroclaw-labs/zeroclaw/issues/6720) — Campo `context_aware_tools` no config é **dead code** (declarado mas nunca lido).
- [#7008](https://github.com/zeroclaw-labs/zeroclaw/pull/7008) — WhatsApp: entrega replies para LID JIDs com sanitização vazia.

**Análise de Estabilidade:** O bug #6876 é o mais preocupante — permite que ferramentas MCP sejam chamadas mesmo quando `allowed_tools` deveria bloqueá-las. Isso representa um bypass de segurança real em ambientes multi-tenant. O padrão recorrente de cron jobs (#6647, #6954) indica que o scheduler precisa de refatoração fundamental, não de fixes pontuais.

---

## 6. Pedidos de Features e Sinais de Roadmap

### RFCs e Features de Alto Impacto

| # | Feature | Risco | Prioridade | Sinais de Roadmap |
|---|---------|-------|------------|-------------------|
| [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) | **computer-use** (screenshots + mouse/keyboard) | high | p2 | Align com OpenAI Codex, Hermes |
| [#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) | **Per-sender RBAC** para multi-tenant | high | p2 | ZeroClaw como plataforma SaaS |
| [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) | **MemoryStrategy trait** (decouple memory layer) | high | p2 | Arquitetura plugável |
| [#6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) | **Cron via orchestrator pipeline** | high | p2 | Resolução de 5 bugs relacionados |
| [#6969](https://github.com/zeroclaw-labs/zeroclaw/issues/6969) | **unified output routing** (per-peer modality) | high | p2 | UX consistente cross-canais |
| [#4467](https://github.com/zeroclaw-labs/zeroclaw/issues/4467) | **MCP resources + prompts** (não só tools) | medium | p2 | Profundização integração MCP |
| [#6253](https://github.com/zeroclaw-labs/zeroclaw/issues/6253) | **zeroclaw skills** UX improvements (v0.7.6) | low | p1 | Evolução do sistema de skills |

### Sinais de Produto

1. **Expansão para Hardware/IoT:** O bundle ESP32 (#6148, #7045–#7048) indica que ZeroClaw está se posicionando para automação de dispositivos físicos, não só agentes de chat.
2. **Multi-canal madura:** PRs simultâneos para Telegram TTS (#7050), WhatsApp (#7008), email XOAUTH2 (#7021), Twilio SMS (#6429), Linq multi-tenant (#7041) mostram que a estratégia de canais é prioridade.
3. **Segurançaenterprise:** RBAC por sender (#5982), enforcement de allowed_tools (#6914, #6915–#6917), process-memory limits (#6916) — a projeto está se preparando para deployments críticos.
4. **Composio integration:** 3 issues simultâneas (#6915, #6916, #6917) indicam investimento em ferramentas de automação de desktop.

---

## 7. Resumo de Feedback dos Usuários

### Dores Realmente Reportadas

| Dor | Frequência | Evidência |
|-----|-----------|-----------|
| **Integração com provedores falhando** (Gemini OAuth, Ollama tools, Kimi temperature) | 🔴 Alta | #4879, #5962, #7022 |
| **Docs ausentes/confusas** (web_dist_dir, config fields) | 🟡 Média | #5847, #5843, #6760 |
| **Cron jobs não entregam output** em canais configurados | 🔴 Alta | #6647, #6954 |
| **Ferramentas de desktop/GUI ausentes** | 🟡 Média | #6909 |
| **Configuração por-modelo de raciocínio inexistente** | 🟢 Baixa | #5843 |
| **Deploy multi-tenant sem isolamento** | 🔴 Alta | #5982 |

### Cenários de Uso Emergentes

1. **Agente pessoal multi-canal:** Usuários querem Telegram + WhatsApp + email como interface unificada com preferências de modality por peer (#6969, #7020).
2. **Automação IoT:** "Smart room" com ESP32, sensores, Telegram bot como controle (#6148).
3. **Skills como primitivas reutilizáveis:** Sistema de skills evoluindo para v0.7.6 (#6253) com sandbox e tool activation temporária (#6915).
4. **Migradores de outras plataformas:** Issue #6969 especificamente menciona migração de Letta — indica crescimento de adoção por usuários insatisfeitos com alternativas.

### Satisfação/Insatisfação

- **Frustração com providers:** O padrão "provider X está quebrado" aparece em Gemini, Ollama, Bedrock, Kimi — a camada de providers é frágil.
- **Esforço de migração valorizado:** Issues de documentação (#5847) + PR #7023 (versioned docs) indicam que usuários estão investindo tempo em onboarding — sinal de retenção.
- **Comunidade ativa:** 50 issues + 50 PRs em 24h de um projeto com ~0 releases em meses sugere contributors dedicados apesar da ausência de releases frequentes.

---

## 8. Backlog que Merece Atenção

### Issues sem Resposta / Bloqueadas há Tempo

| # | Título | Idade | Status | Prioridade |
|---|--------|-------|--------|------------|
| [#3100](https://github.com/zeroclaw-labs/zeroclaw/issues/3100) | Mattermost oncall mode | ~3 meses | in-progress | p2 |
| [#4467](https://github.com/zeroclaw-labs/zeroclaw/issues/4467) | MCP resources + prompts | ~2.5 meses | in-progress | p2 |
| [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) | Audit: 153 commits lost in bulk revert c3ff635 | ~1.5 meses | in-progress | p2 |
| [#5843](https://github.com/zeroclaw-labs/zeroclaw/issues/5843) | Model-wise reasoning config | ~1.5 meses | blocked, needs-maintainer-review | p2 |
| [#6914](https://github.com/zeroclaw-labs/zeroclaw/issues/6914) | enforce allowed_tools in agent loop | ~7 dias | blocked, needs-maintainer-review | p1 |
| [#6915](https://github.com/zeroclaw-labs/zeroclaw/issues/6915) | skill-scoped tool activation | ~7 dias | blocked, needs-maintainer-review | p2 |
| [#6916](https://github.com/zeroclaw-labs/zeroclaw/issues/6916) | process-memory limits on shell/skill_tool | ~7 dias | blocked, needs-maintainer-review | p1 |
| [#6917](https://github.com/zeroclaw-labs/zeroclaw/issues/6917) | honor action-scope in Composio dispatch | ~7 dias | blocked, needs-maintainer-review | p2 |

### Análise do Backlog

**Três padrões preocupantes:**

1. **Bloqueio por maintainer-review:** 4 issues de segurança (#6914–#6917) todas bloqueadas esperando revisão — o gargalo de review está em segurança e ferramentas, áreas críticas.
2. **Dívida de auditoria:** #6074 (153 commits perdidos) está sem movimento há semanas — se não for resolvido, bug fixes legítimos foram revertidos e podem nunca ser recuperado.
3. **Feature freeze em providers:** #5937 (unify providers) com 9 comentários mas nenhum movimento indica que a refatoração de providers é complexa demais para incrementalismo — precisa de champion dedicado.

### Recomendações para o Core Team

1. **Priorizar review de #6914–#6917** — são issues de segurança P1/P2 bloqueadas há ~7 dias.
2. **Alocar waktu para #6074** — o audit de commits pode desbloquear múltiplos PRs stalled.
3. **Consolidar PRs de hardware (#7045–#7048)** antes que dominem o pipeline — demo é boa, mas merge order precisa ser cuidadoso para não criar dívida de integração.
4. **Comunicar roadmap de v0.8.0-beta-2** — a comunidade tem muitos RFCs abertos e nenhum timeline claro para o que entra na próxima release.

---

*Relatório gerado automaticamente com base em dados do GitHub de zeroclaw-labs/zeroclaw em 2026-06-01.Dados de 50 issues e 50 PRs atualizados nas últimas 24h.*

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*