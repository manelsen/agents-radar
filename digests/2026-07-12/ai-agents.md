# Resumo diário do ecossistema de agentes de IA 2026-07-12

> Issues: 2 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-07-11 20:41 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal


# Relatório do Projeto NullClaw — 2026-07-12

---

## 1. Panorama do Dia

O projeto NullClaw mantém-se em estado de baixa atividade no dia de hoje, sem movimentações em PRs ou releases. Duas issues foram atualizadas nas últimas 24 horas, ambas em estado aberto: uma relacionado a um bug de estabilidade no canal Telegram após períodos de inatividade, e outra pedindo a adição de um novo provider para o CLI do Grok. A ausência de PRs merged ou releases recentes indica uma fase de maturação ou possivelmente um intervalo entre ciclos de desenvolvimento ativo.

---

## 2. Lançamentos

**Nenhum release detectado nas últimas 24 horas.**

O projeto não publicou novas versões hoje. O último ciclo de release permanece como referência, e não há notas de migração ou breaking changes a serem comunicadas neste momento.

---

## 3. Progresso do Projeto

**Nenhuma PR foi atualizada, merged ou fechada nas últimas 24 horas.**

Não há registro de contribuições aceitas ou ciclos de merge no período analisado. Este dado sugere que a comunidade pode estar em fase de discussão e planejamento antes de um próximo ciclo de integração de código.

---

## 4. Temas Quentes da Comunidade

### Issue com maior engajamento (comentários)

- **[#972](https://github.com/nullclaw/nullclaw/issues/972)** — Bug: Telegram channel stop respond after some idle time
  - **Comentários:** 3 | **Reações:** 0
  - **Status:** Aberta
  - **Resumo:** Usuário reporta que o canal Telegram do NullClaw deixa de responder após períodos de inatividade (uma noite ou mais). O backend continua funcional, mas o canal frontal não reconecta automaticamente. O bug está em análise com 3 comentários de discussão técnica.

### Análise

O issue #972 lidera em engajamento com 3 comentários, indicando uma discussão ativa sobre diagnóstico e possível solução. A severidade do problema é relevante, pois afeta a disponibilidade do agente em um canal amplamente utilizado (Telegram). A participação da comunidade sugere que o bug pode ser reproduzido por outros usuários.

---

## 5. Bugs e Estabilidade

### Issue aberta — Bug reportado

| Issue | Severidade | Descrição | Status |
|-------|-----------|-----------|--------|
| [#972](https://github.com/nullclaw/nullclaw/issues/972) | **Alta** | Canal Telegram cessa resposta após períodos de inatividade prolongada | Aberta |

**Análise:** O bug afeta diretamente a usabilidade do NullClaw via Telegram, um dos canais de comunicação mais populares para agentes de IA. O fatto de que o backend continua operando normalmente indica que o problema está na camada de conexão/reconexão do canal, não no motor central do NullClaw. A severidade é considerada **alta** por impacto direto na experiência do usuário final.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Nova feature request

- **[#975](https://github.com/nullclaw/nullclaw/issues/975)** — Add grok-cli provider (run Grok via the grok CLI's login session, unmetered)
  - **Autor:** yanggf8 | **Criado:** 2026-07-11 | **Atualizado:** 2026-07-11
  - **Comentários:** 1 | **Reações:** 0
  - **Status:** Aberta

**Resumo:** Solicitação para adicionar um novo provider `grok-cli` que permita executar o Grok através da sessão de login local do CLI do Grok (assinatura grok.com), seguindo o mesmo padrão de subprocesso já utilizado para `claude-cli`, `codex-cli` e `gemini-cli`.

**Análise:** Este pedido demonstra interesse da comunidade em expandir o ecossistema de providers do NullClaw. A abordagem de usar o CLI local com sessão autenticada permite acesso "unmetered" ao Grok, o que pode ser um diferencial competitivo. A referência explícita aos providers existentes indica que o autor conhece a arquitetura do projeto e propõe uma implementação consistente com o design atual.

**Potencial impacto no roadmap:** Se aceito, este provider adicionaria suporte a mais um provedor de IA de grande porte, aumentando a cobertura do NullClaw como plataforma multi-provider.

---

## 7. Resumo de Feedback dos Usuários

### Dores reportadas

1. **Instabilidade do Telegram após inatividade** (#972)
   - **Cenário:** Usuários que deixam o NullClaw rodando por longos períodos sem interação enfrentam falha do canal Telegram na manhã seguinte.
   - **Impacto:** Agentes configurados para monitoramento ou automação via Telegram podem perder conectividade sem aviso.
   - **Satisfação:** Insatisfação moderada — o backend continua funcional, mas a indisponibilidade do canal frontal quebra a experiência de uso.

2. **Necessidade de mais providers** (#975)
   - **Cenário:** Usuários desejam acesso ao Grok via CLI local para evitar limitações de API.
   - **Impacto:** Expandiria as opções de provedores para usuários com assinatura Grok.
   - **Satisfação:** Neutra — é uma solicitação de melhoria, não uma dor imediata.

---

## 8. Backlog que Merece Atenção

### Issues em aberto sem resolução recente

| Issue | Tipo | Idade | Comentários | Prioridade |
|-------|------|-------|-------------|------------|
| [#972](https://github.com/nullclaw/nullclaw/issues/972) | Bug | ~12 dias | 3 | **Alta** |
| [#975](https://github.com/nullclaw/nullclaw/issues/975) | Feature | ~1 dia | 1 | Média |

**Análise:**

- **#972 (Bug Telegram):** Este issue está aberto há aproximadamente 12 dias e ainda não possui resolução. A discussão técnica está ativa (3 comentários), o que sugere que o problema está sendo investigado. No entanto, a ausência de etiquetas de severidade ou assignees indica que o bug ainda não foi triado formalmente. **Recomenda-se atenção priorizada** para evitar que a instabilidade do Telegram afete mais usuários.

- **#975 (Grok-cli provider):** Issue recém-criada com apenas 1 comentário. Ainda em fase de proposta, aguardando feedback dos mantenedores sobre viabilidade e alinhamento com o roadmap.

---

## Métricas Resumidas — 2026-07-12

| Métrica | Valor |
|---------|-------|
| Issues abertas/ativas (24h) | 2 |
| Issues fechadas (24h) | 0 |
| PRs abertas (24h) | 0 |
| PRs merged/fechadas (24h) | 0 |
| Releases (24h) | 0 |
| Issue mais comentada | #972 (3 comentários) |
| Issue mais antiga em aberto | #972 (~12 dias) |

---

## Saúde Geral do Projeto

**Status: Estável com incidentes pontuais**

O projeto NullClaw apresenta saúde estável, porém com pelo menos um bug de severidade relevante pendente de resolução. A baixa atividade de PRs e releases no dia de hoje pode indicar fase de revisão ou planejamento. A comunidade permanece ativa em issues, com discussões técnicas em andamento. O bug do Telegram (#972) é o ponto de atenção mais crítico para manutenção da satisfação dos usuários.

---

*Relatório gerado em 2026-07-12 com base em dados do GitHub do projeto [nullclaw/nullclaw](https://github.com/nullclaw/nullclaw).*

---

## Comparação entre projetos do ecossistema


# Relatório Comparativo do Ecossistema de Agentes de IA Open Source

**Data de referência:** 2026-07-12

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **duas velocidades distintas** em 12 de julho de 2026. Projetos de segunda geração — NanoBot, Hermes Agent, IronClaw e ZeroClaw — operam em ritmo de desenvolvimento intenso com volumes de 11-50 issues e 14-50 PRs atualizados por dia, sinalizando matrizes ativas de engenharia. Em contraste, NullClaw e PicoClaw permanecem em estados de baixa atividade, possivelmente em fases de planejamento ou manutenção leve. **A segurança emerge como tema transversal**: NanoBot enfrenta uma auditoria com 42 vulnerabilidades reportadas, enquanto ZeroClaw e Hermes Agent lidam com memory leaks e falhas de configuração com potencial de perda de dados. A versão v2.0.0 do CoPaw demonstra os riscos de migrações significativas — seis bugs críticos abertos relacionados a regressões. Nenhum dos oito projetos publicou releases formais nas últimas 24 horas, indicando um período de consolidação pré-lançamento em múltiplos фронтах.

---

## 2. Comparação de Atividade

| Projeto | Issues Ativas (24h) | Issues Fechadas (24h) | PRs Abertos | PRs Merged (24h) | Releases (24h) | Avaliação de Saúde |
|---------|---------------------|------------------------|-------------|------------------|----------------|--------------------|
| **ZeroClaw** | 50 | N/D | Many | 1 | 0 | 🟡 Alta atividade, foco em memória |
| **Hermes Agent** | 40 | 10 | 49 | 1 | 0 | 🟡 Alta atividade, baixa taxa de resolução (~2%) |
| **NanoBot** | 19 | 3 | 14 | 6 | 0 | 🟠 Ativo com crise de segurança |
| **IronClaw** | 11 | 3 | 35 | 15 | 0 | 🟢 Alta atividade, PRs fluem bem |
| **CoPaw** | 23 | 0 | 3 | 4 | 0 | 🔴 Tensão — regressões v2.0.0 |
| **NullClaw** | 2 | 0 | 0 | 0 | 0 | 🟢 Estável, baixa atividade |
| **PicoClaw** | 0 | 0 | 2 | 0 | 0 | 🟢 Estável, baixa atividade |
| **IronClaw** | 11 | 3 | 35 | 15 | 0 | 🟢 Desenvolvimento intenso |

**Observação:** Hermes Agent apresenta o maior desbalanceamento entre atividade (40 issues, 49 PRs) e resolução (10 fechadas, 1 merged), sugerindo gargalo de review ou acúmulo intencional deipeline.

---

## 3. Posicionamento do Projeto Principal

*Nota: Não há um "projeto principal" declarado; a análise considera o projeto mais ativo (ZeroClaw) como referência de benchmark.*

### ZeroClaw — Referência de Atividade e Funcionalidades

**Vantagens técnicas:**
- **Arquitetura de memória persistente mais madura**: 7 PRs simultâneos de um único contribuidor (Nillth) indicam investimento dedicado e consistente no subsistema de memória, com feature gates para reranking e auditoria OTEL/Prometheus.
- **RFC process institucionalizado**: 5 RFCs aceitos demonstram governança de design — Supply chain signing (PGP/SLSA), Goal mode, unified output routing, decoupling de storage backends.
- **Segurança por design**: ToolAccessPolicy por agente em revisão (PR #7960), sinalizando evolução de permissões granulares.

**Diferenças técnicas:**
| Aspecto | ZeroClaw | Hermes Agent | NanoBot |
|---------|----------|-------------|---------|
| Paradigma de memória | Persistent, typed retrieval | Compression chain | Dynamic context |
| Modelo de permissões | Per-agente ToolAccessPolicy | Channel-scoped | MCP transport isolation |
| Extensibilidade | Plugin-first (RFC #6489) | Skill-based | MCP-native |
| Segurança supply chain | RFC ativa com SLSA | Não mencionado | Security audit em curso |

**Tamanho da comunidade:**
- 50 issues + 50 PRs em 24h — maior volume absoluto de atividade.
- RFCs com 8-20 comentários indicam participação qualificada em decisões arquiteturais.
- Contribuidor isolado (Nillth) domina área crítica de memória — risco de concentração.

---

## 4. Focos Técnicos Compartilhados

### 4.1 Segurança — Emergência como Prioridade Transversal

| Projeto | Issue de Segurança | Severidade |
|---------|-------------------|------------|
| NanoBot | 42 vulnerabilidades reportadas (auditoria #4815) | Crítica |
| Hermes Agent | Config migration v30→v32 dropa platforms silenciosamente | P1 — Crítica |
| ZeroClaw | ToolAccessPolicy bypass via execute_pipeline (#7960) | Alto |
| Hermes Agent | Memory leak: 7.4 GB RSS com 8 sessões (#62743) | P1 — Alto |
| NanoBot | API keys vazam via os.environ global (#4784) | Crítica |
| IronClaw | Canal privado de reporte ausente (#6000) | Governança |

**Implicação:** A proliferação de vulnerabilidades em múltiplos projetos simultâneos sugere que a superfície de ataque de agentes de IA — com suas múltiplas integrações (MCP, OAuth, channels, tool execution) — está sendo sistematicamente explorada por auditores e red teams. Expectativa de que "secure by default" se torne diferencial competitivo.

### 4.2 Migração e Estabilidade de Dados

| Projeto | Problema | Impacto |
|---------|----------|---------|
| CoPaw | v1→v2.0.0: Pydantic ValidationError, mapping perdido, auto-memory broken | 6 bugs críticos |
| Hermes Agent | v30→v32: 90% dos profiles perdem config de platforms | Bug silencioso |
| NanoBot | Ollama prompt prefix diverge do histórico → cache useless | Performance -60s/turn |

**Implicação:** Projetos que investiram em estratégias de migração progressiva (feature flags, backwards compatibility layers).evitarão crises de churn. Ferramentas de migração automatizada tornam-se feature request recorrente.

### 4.3 Suporte a Plataformas — Windows como Second-Class Citizen

| Projeto | Bug Windows | Severidade |
|---------|------------|------------|
| CoPaw | Sandbox: pwsh recursão infinita, ACL NTFS, CREATE_NO_WINDOW | Crítica — inutilizável |
| Hermes Agent | Mensagens longas truncadas (#46606), .pyd locks bloqueiam updates (#62792) | P2 |
| Hermes Agent | Path separators causam update loop infinito (#62313) | P2 |
| IronClaw | local-dev-yolo não inicia (MountAlias requer POSIX paths) | P1 |

**Implicação:** A base de usuários Windows permanece subtestada. A ausência de pipelines CI/CD cross-platform rigorosos resulta em bugs de runtime que passam despercebidos até撞壁produção.

---

## 5. Análise de Diferenciação

### 5.1 Por Arquitetura e Paradigma

| Dimensão | Hermes Agent | NanoBot | ZeroClaw | CoPaw |
|----------|-------------|---------|----------|-------|
| **Abstração de provider** | Multi-provider com fallback, telemetry billing | MCP-native, transport isolation | RetrievalPipeline com rerank | Skill-based, OAuth request |
| **Modelo de sessão** | Unified across CLI/Desktop/Telegram/Discord (requested) | Channel-scoped, MCP lifecycle | Persistent memory com recall semântico | Conversation history com compression |
| **Extensibilidade** | Skills + overlay system | MCP como plataforma | Plugin-first RFC | Built-in scripts + skill registry |
| **Prioridade atual** | Estabilização (memory leaks, Windows) | Segurança (audit) | Memória persistente | Correção de regressões v2.0 |

### 5.2 Por Público-Alvo

| Projeto | Público Implícito | Evidência |
|---------|------------------|----------|
| **Hermes Agent** | Enterprise multi-channel | Integração Feishu, cron jobs, dashboard, session bleeding entre tabs |
| **ZeroClaw** | Desenvolvedores avançados / self-hosted | RFCs arquiteturais, supply chain signing, local-first mode |
| **NanoBot** | Operadores de modelos locais (Ollama) | Bugs de cache com 32 GB VRAM, MCP como extensibilidade primária |
| **CoPaw** | Usuários finais com onboarding via web | Guided setup flows, dark mode UX, skills UI |
| **IronClaw** | Enterprise / compliance-focused | Attestation docs, admin secrets scoping, coordinator authentication |

### 5.3 Diferenciação Técnica Visível

**ZeroClaw** diferencia-se por:
- Auditoria de memória com fan-out para OTEL/Prometheus (PR #8893)
- Supply chain security com SLSA provenance (RFC #8177)
- ACP protocol para multi-agente (via query param #8958)

**Hermes Agent** diferencia-se por:
- Telemetry billing com persistência de fallback route (PR #62302)
- Intent-Based Model Routing (issue #62685) para auto tier selection
- Distributed worker routing para Kanban (PR #62316)

**NanoBot** diferencia-se por:
- Reconnect cancel scopes para prevenir gateway crash (PR #4764)
- Runtime context opt-in com prefix-stable para cache de prompts locais

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração

| Ranking | Projeto | Indicador | Interpretação |
|---------|---------|-----------|---------------|
| 1 | **IronClaw** | 15 PRs merged + 35 open em 24h | Pipeline saudável, review responsivo |
| 2 | **ZeroClaw** | 7 PRs simultâneos de um autor (Nillth) em memória | Contribuição dedicada porém concentrada |
| 3 | **NanoBot** | 6 PRs merged + 14 open | Fluxo consistente, auditoria gerando volume |
| 4 | **CoPaw** | 4 PRs merged + 3 open | Contribuição iteração rápida (dark mode) |
| 5 | **Hermes Agent** | 1 PR merged + 49 open | Gargalo de review — 98% de items sem resolução |
| 6 | **PicoClaw** | 2 PRs em revisão há 8-9 dias | Baixa velocidade, maduro para merge |
| 7 | **NullClaw** | 0 PRs, 0 releases | Estagnação ou pausa voluntária |

### 6.2 Qualidade de Manutenção

**Sinais de maturidade elevada:**
- **IronClaw**: CI routing para ci-standard runner (PR #6003), E2E test fixes, release notes com breaking changes demarcados.
- **ZeroClaw**: RFC process formal, feature gates para funcionalidades em staging (#8895 rerank_enabled).
- **NanoBot**: Triagem de vulnerabilidades com categorização (command injection, auth bypass, DoS).

**Sinais de dívida técnica acumulada:**
- **Hermes Agent**: 7 issues >30 dias sem resposta, P1 bug de config migration sem correção.
- **CoPaw**: 6 bugs críticos da versão mais recente (v2.0.0) indicam release precipitada ou testing insuficiente.
- **NullClaw**: Issue #972 (Telegram bug) aberta há 12 dias sem assignee ou label de severidade.

---

## 7. Sinais de Tendência

### 7.1 Tendências Extraídas do Feedback

| Tendência | Evidência | Projetos |
|-----------|-----------|----------|
| **MCP como padrão de extensibilidade** | PRs de ciclo de vida MCP (NanoBot #4875), suporte local MCP (IronClaw #5998), OAuth MCP (Hermes #62309) | NanoBot, IronClaw, Hermes |
| **Segurança "by default"** | restrict_to_workspace=True como default (NanoBot #4880), ToolAccessPolicy por agente (ZeroClaw #7960), admin secrets scoped (IronClaw #5934) | NanoBot, ZeroClaw, IronClaw |
| **Memória persistente como feature core** | 7 PRs simultâneos em ZeroClaw, recall pipeline (NanoBot), compression chains (Hermes) | ZeroClaw, NanoBot, Hermes |
| **Multi-model routing** | Intent-based routing (Hermes #62685), delegate_task com modelos distintos (Hermes #62731), OpenRouter fallbacks (ZeroClaw #8138) | Hermes, ZeroClaw |
| **Local-first / modelos locais** | Bug de cache Ollama 60s/turn (NanoBot #4867), Local API server request (Hermes #62753), local-first mode (ZeroClaw #5287) | NanoBot, Hermes, ZeroClaw |
| **Experiência de onboarding** | Guided setup flows (NanoBot #4855), Windows sandbox broken (CoPaw #5951), commands missing (NanoBot #4860) | NanoBot, CoPaw |

### 7.2 Tendências de Mercado

1. **Do "feature-rich" para "secure and stable"**: A proliferação de bugs de segurança (42 vulnerabilidades em NanoBot, vazamento de API keys, memory leaks de 7.4 GB) indica que o mercado está开始在意 a diferença entre funcionalidade e production-readiness. Projetos que investirem em hardening e auditing de segurança terão vantagem competitiva.

2. **Fragmentação de providers**: A demanda por Grok CLI (NullClaw #975), Vertex AI (Hermes #13484), Ollama local (NanoBot #4867) e OpenRouter fallbacks (ZeroClaw #8138) indica que nenhum provedor único atenderá todos os casos de uso. Arquiteturas multi-provider com fallback inteligente tornam-se requisito.

3. **Windows como plataforma ignorada**: A recorrência de bugs Windows em 4 de 8 projetos (CoPaw, Hermes, IronClaw) sugere que a base de usuários Windows está subrepresentada nos ciclos de QA. Com a crescente adoção de agentes em ambientes corporativos (dominado por Windows), resolver estes bugs será diferencial de adoção.

4. **Gradualismo de migrations**: O desastre de regressões v2.0.0 do CoPaw demonstra que atualizações com breaking changes massivos destroem confiança. Expectativa de que ferramentas de migração automatizada, feature flags e backwards compatibility se tornem expectativas padrão.

5. **Memória como campo de batalha competitivo**: ZeroClaw investindo 7 PRs simultâneos, NanoBot com issues de cache abertas há 3+ meses, Hermes com compression chains — todos competindo pela mesma solução: memória persistente, recall semântico e contexto otimizado para modelos locais.

---

## Conclusão

O ecossistema de agentes de IA open source em 2026-07-12 demonstra **maturidade fragmentada**: projetos como IronClaw e ZeroClaw mostram ciclos de desenvolvimento saudáveis com governança técnica sofisticada (RFCs, feature gates, auditorias), enquanto CoPaw e Hermes Agent enfrentam crises de estabilidade. A **segurança emerge como tema transversal** — tanto como risco (vulnerabilidades em NanoBot, vazamento de API keys) quanto como oportunidade (secure by default como diferencial). **Windows permanece subtestado** com bugs críticos em 50% dos projetos. Para decisores técnicos, a recomendação é priorizar projetos com pipelines de segurança institucionalizados, enquanto desenvolvedores devem observar ZeroClaw para inovações em memória persistente e IronClaw para arquitetura de extensibilidade.

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-07-12

## 1. Panorama do Dia

O NanoBot apresenta **alta atividade** em 12 de julho de 2026, com 22 issues e 20 PRs atualizados nas últimas 24 horas. O projeto enfrenta uma **onda significativa de issues de segurança**, com 13 vulnerabilidades reportadas pelo mesmo autor (hamb1y) em uma auditoria profunda do código. Simultaneamente, 6 PRs foram fechados/merged, incluindo correções de bugs críticos de gateway e refatorações arquiteturais importantes. Não houve novos lançamentos, e a relação entre issues abertas (19) e fechadas (3) indica acúmulo de pendências, especialmente na categoria de segurança.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24 horas.**

O projeto não publicou novas versões desde o período analisado. Isso é consistente com o padrão de trabalho interno através de PRs antes de consolidação em releases formais.

---

## 3. Progresso do Projeto

### PRs Fechados/Mergidos (6 total)

| # | PR | Autor | Prioridade | Impacto |
|---|-----|--------|------------|---------|
| [#4764](https://github.com/HKUDS/nanobot/pull/4764) | fix(mcp): isolate reconnect cancel scopes to prevent gateway crash | tjc0726 | p1 | Corrige crash do gateway após timeout de reconnect MCP. Resolve issue #4211 relacionada. |
| [#4844](https://github.com/HKUDS/nanobot/pull/4844) | refactor(agent): gate sustained goals behind explicit /goal | chengyongru | p1 | Substitui o contrato legacy `long_task`/`complete_goal` por `create_goal`/`update_goal`, melhorando UX e controle de goals sustentados. |
| [#4891](https://github.com/HKUDS/nanobot/pull/4891) | refactor(agent): make runtime context opt-in and prefix-stable | chengyongru | p2 | Remove injeção de tempo, channel, chat_id e sender_id de prompts por padrão. Resolve problemas de cache com Ollama (#4867, #2463). |
| [#4843](https://github.com/HKUDS/nanobot/pull/4843) | fix(mcp): keep transport cleanup in owner tasks | flyzstu | p1 | Serializa ciclo de vida MCP (connect, reload, reconnect, shutdown) através de lock existente, prevenindo vazamento de conexões. |
| [#4873](https://github.com/HKUDS/nanobot/pull/4873) | fix(dream): skip no-op periodic commit attempts | alekwo | p2 | Evita commits vazios no Dream quando não há mudanças reais nos arquivos de memória. |
| [#4836](https://github.com/HKUDS/nanobot/pull/4836) | fix(webui): bind landing first message to created chat | sidkang | p2 | Associa primeira mensagem do landing page ao chat criado, melhorando UX da interface. |

### PRs Abertos em Estado Avançado (5 com conflito ou aguardando merge)

- [#4890](https://github.com/HKUDS/nanobot/pull/4890) — **fix(api): avoid retaining idle session locks** (p2): Implementa `WeakValueDictionary` para garbage collection de locks ociosos, resolvendo #4883.
- [#4889](https://github.com/HKUDS/nanobot/pull/4889) — **fix(security): authorize destructive priority commands** (p1): Adiciona `channels.admin_senders` allowlist para proteger `/restart` e `/stop`.
- [#4888](https://github.com/HKUDS/nanobot/pull/4888) — **fix(filesystem): serialize workspace writes** (p1): Serializa operações de escrita usando file locks derivados do workspace.
- [#4880](https://github.com/HKUDS/nanobot/pull/4880) — **fix(security): default restrict_to_workspace to True** (p1): Corrige vulnerabilidade #4796 alterando default de `False` para `True`.
- [#4842](https://github.com/HKUDS/nanobot/pull/4842) — **fix: catch asyncio CancelledError in close_mcp shutdown** (p1): Corrige handler para `CancelledError` durante shutdown de MCP.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Atividade (comentários/reações)

**#2463** — Architectural issue: nanobot does not preserve the exact prompt prefix it previously sent
- 🔥 **14 comentários** | Aberto desde 2026-03-25 (3+ meses)
- Autor: ronny-rentner
- **Análise**: Issue fundamental relacionada a persistência de histórico de conversation que difere do prompt real enviado ao modelo. Afeta cache em provedores como Ollama, causando +60 segundos por turno. Correlacionado com #4867.

**#4867** — Preserve exact prompt prefix to enable caching in Ollama and others
- 💬 4 comentários | Criado: 2026-07-10
- Autor: The-Markitecht
- **Análise**: Follow-up direto de #2463. Denuncia que modelos rodando em Ollama com 32 GB de VRAM ficam "totally unusable" devido ao problema de cache. Já tem PR #4891 relacionado merged.

**#4860** — Bug: no such command "onboard" or "webui"
- 💬 3 comentários | Fechado em 2026-07-11
- Autor: justTravis
- **Análise**: Problema de experiência do usuário com novos instaladores via `uv tool install`. Comandos documentados no website não existem na instalação. Marca problema de documentação vs. implementação.

### PR com Maior Relevância Arquitetural

**#4844** — refactor(agent): gate sustained goals behind explicit /goal
- Fecha issue de longa data sobre workflow de goals sustentados
- Alinha API interna com expectations de usuários

---

## 5. Bugs e Estabilidade

### Por Severidade

#### 🔴 Críticos (p1) — 6 issues abertas

| # | Bug | Severidade | Impacto |
|---|-----|------------|---------|
| [#4785](https://github.com/HKUDS/nanobot/issues/4785) | read_file carrega arquivo inteiro em memória antes de truncar → OOM em arquivos multi-GB | Crítica | Pode crashar gateway com arquivos grandes |
| [#4302](https://github.com/HKUDS/nanobot/issues/4302) | Gateway crash após reconnect MCP | Crítica | Afeta estabilidade do servidor (já tem PR #4764 merged) |
| [#4815](https://github.com/HKUDS/nanobot/issues/4815) | **Audit: 42 vulnerabilidades** — command injection, auth bypass, DoS, secrets handling | Crítica | Conjunto massivo de falhas de segurança |
| [#4784](https://github.com/HKUDS/nanobot/issues/4784) | API keys vazam entre providers via os.environ global | Crítica | Segurança |
| [#4783](https://github.com/HKUDS/nanobot/issues/4783) | CLI apps rodam com ambiente completo → API keys em subprocessos | Crítica | Segurança |
| [#4779](https://github.com/HKUDS/nanobot/issues/4779) | process_direct() ignora todas as verificações de autorização | Crítica | Bypass de segurança |

#### 🟠 Altos (p2) — 3 issues

| # | Bug | Impacto |
|---|-----|---------|
| [#4887](https://github.com/HKUDS/nanobot/issues/4887) | Testes Feishu falham por falta de lark-oapi no grupo dev | DX/Testing |
| [#4882](https://github.com/HKUDS/nanobot/issues/4882) | Dream diff reporta arquivos vazios inalterados como modificados | Funcionalidade |
| [#4881](https://github.com/HKUDS/nanobot/issues/4881) | Windows ExecTool corrompe output UTF-16 do PowerShell | Compatibilidade Windows |

#### 🟡 Médios/Outros — 10 issues

Incluem: DoS sem rate limiting (#4782), WebSocket sem limite de conexões (#4781), asyncio.Queue sem backpressure (#4780), /stop cancela tarefas de outros usuários (#4777), channel "system" sem autorização (#4778), e 5+ issues de segurança adicionais (#4886, #4885, #4884, #4883, #4886).

### PRs de Correção Recentes

- **#4764** (merged): Corrige crash de reconnect MCP — **resolvido**
- **#4843** (merged): Mantém cleanup de transporte MCP em owner tasks — **resolvido**
- **#4837** (aberto c/ conflito): Protege .strip() em conteúdo multimodal — aguardando merge

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em Desenvolvimento (PRs abertos)

| # | Feature | Autor | Prioridade | Status |
|---|---------|--------|------------|--------|
| [#4855](https://github.com/HKUDS/nanobot/pull/4855) | Guided setup flows no WebUI (canais com validação, links oficiais, QR handoff) | Re-bin | feature | Aberta |
| [#4626](https://github.com/HKUDS/nanobot/pull/4626) | Opt-in eager memory consolidation | yu-xin-c | feature | Aberta |
| [#4621](https://github.com/HKUDS/nanobot/pull/4621) | Archive facts com provenance context | yu-xin-c | feature | Aberta |
| [#4875](https://github.com/HKUDS/nanobot/pull/4875) | Extrair lifecycle do MCP tool provider | Kokeip | refactor | Aberta |
| [#4879](https://github.com/HKUDS/nanobot/pull/4879) | Gate sustained-goal behind opt-in flag (default off) | franciscomaestre | feature | Aberta (duplicate) |

### Sinais de Roadmap Identificados

1. **Cache de prompts para provedores locais (Ollama)** — Issue #2463/#4867 com PR #4891 merged indica foco em performance com modelos locais.

2. **Segurança como prioridade** — 13+ issues de segurança abertas em 5 dias sugere que a equipe está respondendo a uma auditoria abrangente (#4815).

3. **Workspace restriction por padrão** — PR #4880 alterando default para `restrict_to_workspace=True` indica tendência de "secure by default".

4. **Modularização de MCP** — PR #4875 extrai `MCPToolProvider` indicando refatoração para melhor encapsulamento do ciclo de vida MCP.

5. **Experiência de setup** — PR #4855 focado em guided setup flows para WebUI sugere foco em onboarding.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

**🔴 Problema Crítico de Usabilidade com Ollama**
> "Nanobot adds an extra 60 seconds to every single turn, even the dead-simple turns. This is totally unusable with Ollama and 32 GB of VRAM."
> — The-Markitecht (#4867)

**🔴 Falta de Commands Documentados**
> "The commands mentioned on the website don't exist? I've tried 'nanobot onboard' and 'nanobot webui' with no luck."
> — justTravis (#4860)
> *Instalação via `uv tool install` não expõe comandos esperados. Problema de DX.*

**🔴 Insegurança de API Keys**
> "Provider API keys leaked between providers via global os.environ mutation"
> — hamb1y (#4784)
> *Comunidade de segurança identificando vetores de vazamento.*

**🟠 Onboarding Ruim**
> Instaladores (uv/pip) não incluem dependências necessárias para testes (lark-oapi), ocultando problemas em CI (#4887).

**🟠 Commits Excessivos no Dream**
> "The dream logic creates a new commit on every run, regardless of whether there were any changes. This leads to many unnecessary empty commits." (#4872)
> *Corrigido via PR #4873.*

### Cenários de Uso Indicados

- **Agentes locais com Ollama**: Usuários tentando rodar modelos localmente com constraints de VRAM
- **Integração com Feishu**: Testes e validação de integrações enterprise
- **Gateway multi-tenant**: Issues de segurança indicam uso em ambientes compartilhados
- **MCP como plataforma**: Ciclo de vida de ferramentas MCP sendo refatorado

### Indicadores de Satisfação/Insatisfação

| Indicador | Sinal |
|-----------|-------|
| Atividade intensa em issues de segurança | Comunidade engajada em auditoria |
| PRs de refatoração merged rapidamente | Equipe respondendo a feedback técnico |
| Bug de onboarding (#4860) fechado rapidamente (2 dias) | Prioridade em DX |
| Issues de performance com Ollama abertas há meses (#2463) | Pendência antiga sem resolução completa |

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Aguardando Feedback (>7 dias sem atividade)

| # | Issue | Criado | Estado | Prioridade |
|---|-------|--------|--------|------------|
| [#2463](https://github.com/HKUDS/nanobot/issues/2463) | Prompt prefix não preservado | 2026-03-25 | Aberta | p2 |
| **Tempo em aberto**: ~108 dias | Arquitetural, afeta cache de todos os provedores | — | — | — |
| [#4021](https://github.com/HKUDS/nanobot/pull/4021) | fix(codex): dedup reasoning items | 2026-05-27 | Aberta | feature |
| **Tempo em aberto**: ~45 dias | Correlacionada com #3633, quebrando conversas multi-turn | — | — | — |

### Issues Críticas Sem PR Associado

| # | Issue | Autor | Categoria |
|---|-------|-------|-----------|
| [#4785](https://github.com/HKUDS/nanobot/issues/4785) | OOM em read_file com arquivos multi-GB | hamb1y | Bug crítico |
| [#4815](https://github.com/HKUDS/nanobot/issues/4815) | 42 vulnerabilidades de segurança | hamb1y | Security audit |
| [#4782](https://github.com/HKUDS/nanobot/issues/4782) | DoS: sem rate limiting na API | hamb1y | DoS |
| [#4781](https://github.com/HKUDS/nanobot/issues/4781) | DoS: sem limite WebSocket | hamb1y | DoS |
| [#4780](https://github.com/HKUDS/nanobot/issues/4780) | DoS: asyncio.Queue sem backpressure | hamb1y | DoS |

### PRs Bloqueados ou com Conflito

| # | PR | Conflito/Bloqueio | Impacto |
|---|-----|-------------------|---------|
| [#4875](https://github.com/HKUDS/nanobot/pull/4875) | refactor: extract MCP tool provider lifecycle | Com conflito | Refatoração MCP |
| [#4842](https://github.com/HKUDS/nanobot/pull/4842) | fix: catch CancelledError in close_mcp | Com conflito | Shutdown MCP |
| [#4837](https://github.com/HKUDS/nanobot/pull/4837) | fix: guard .strip() on multimodal | Com conflito | Multimodal |
| [#4664](https://github.com/HKUDS/nanobot/pull/4664) | fix: protect dream history during compaction | Com conflito | Memória |

---

## Métricas Consolidada do Período

| Métrica | Valor |
|---------|-------|
| Issues abertas/ativas | 19 |
| Issues fechadas | 3 |
| PRs abertos | 14 |
| PRs fechados/merged | 6 |
| Novas releases | 0 |
| Issues de segurança abertas | 13 |
| Issues de bug abertas | 10 |
| PRs de segurança p1 |

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent
## NousResearch/hermes-agent — 2026-07-12

---

## 1. Panorama do dia

O Hermes Agent apresenta **alta atividade comunitária** em 12 de julho de 2026, com 50 issues e 50 PRs atualizados nas últimas 24 horas. A taxa de resolução de issues está baixa (apenas 10 fechadas vs 40 abertas), sugerindo um acúmulo de demandas em aberto. **Nenhuma release foi publicada**, indicando que o projeto está em fase intensiva de desenvolvimento e estabilização. O volume de PRs abertos (49) demonstra contribuições ativas, mas a baixa taxa de merges (1 PR fechado) pode indicar rigoroso processo de review ou gargalo. Não há releases recentes, então o foco está em bugfixes e features para a próxima versão.

---

## 2. Lançamentos

### 🚫 Nenhuma release publicada hoje (2026-07-12)

O projeto não publicou novas versões nas últimas 24 horas. A última release conhecida foi **v0.18.0** (2026.7.1), que trouxe updates para cron jobs e Telegram gateway conforme issue [#62151](https://github.com/NousResearch/hermes-agent/issues/62151).

---

## 3. Progresso do Projeto

### PR Fechado/Merged Hoje

| # | Descrição | Impacto |
|---|-----------|---------|
| [#62302](https://github.com/NousResearch/hermes-agent/pull/62302) | `fix(telemetry): persist first accounted fallback route` | **Corrige billing**: Garante que o modelo de fallback real é persistido ao invés do modelo originally requested, melhorando precisão de custos |

### PRs Abertos com Alto Impacto

| # | Descrição | Impacto | Risco |
|---|-----------|--------|-------|
| [#62316](https://github.com/NousResearch/hermes-agent/pull/62316) | `feat(kanban): distributed worker routing` | Adiciona **coordenador autenticado** e workers remotos para Kanban distribuído | `risk-security-boundary`, `risk-compatibility` |
| [#62309](https://github.com/NousResearch/hermes-agent/pull/62309) | `fix(mcp): clamp expired-token` | Elimina **re-autenticação forçada** em servers MCP (Notion, Todoist) após restart | `risk-security-boundary` |
| [#62313](https://github.com/NousResearch/hermes-agent/pull/62313) | `fix(skills): normalize path separators Windows` | Resolve **update loop infinito** no Windows para skills | `risk-platform-windows` |
| [#62304](https://github.com/NousResearch/hermes-agent/pull/62304) | `fix(windows): recover locked native wheels` | Permite **update no Windows** mesmo com arquivos .pyd lockados | `risk-platform-windows` |
| [#39902](https://github.com/NousResearch/hermes-agent/pull/39902) | `fix(update): run inside managed venv` | Garante que `hermes update` roda no ambiente correto | `risk-compatibility` |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

**🏆 #13484** — *Feature: native Google Cloud Vertex AI provider support*
- 🔗 [Issue](https://github.com/NousResearch/hermes-agent/issues/13484) | 👎 14 | 💬 12 comentários
- **Resumo**: Hermes tem entrada em `HERMES_OVERLAYS` para `google-vertex`, mas falta machinery de auth. Vertex usa OAuth access tokens de service account — não há implementação atual.
- **Análise**: Demanda consolidada (~3 meses em aberto) indica complexidade técnica elevada. Vários usuários demonstraram interesse.

**#62780** — *Canonical cross-platform session*
- 🔗 [Issue](https://github.com/NousResearch/hermes-agent/issues/62780) | 💬 1 comentário
- **Resumo**: Mesma conversa via CLI, Desktop, Telegram ou Discord gera sessões separadas sem shared view.
- **Análise**: Feature requests para unificação de sessões entre plataformas — dor real de usuários multi-device.

**#62806** — *Desktop: Multi-window / split-view*
- 🔗 [Issue](https://github.com/NousResearch/hermes-agent/issues/62806) | 💬 1 comentário
- **Resumo**: Desktop app não suporta múltiplas janelas para monitoramento paralelo de agentes.
- **Análise**: Comparação direta com TUI (que permite múltiplos terminais) — lacuna de funcionalidade Desktop.

**#62753** — *Local API server, unified memory, German interface, Android*
- 🔗 [Issue](https://github.com/NousResearch/hermes-agent/issues/62753) | 💬 1 comentário
- **Resumo**: Diversas solicitações agrupadas: API server local limpo, sync de memória entre dispositivos, interface em alemão, app Android.
- **Análise**: Usuário não-anglófono pedindo localização e expansão de plataforma.

---

## 5. Bugs e Estabilidade

### 🔴 Prioridade P1 (Crítico)

| # | Bug | Severidade | Status |
|---|-----|-----------|--------|
| [#62723](https://github.com/NousResearch/hermes-agent/issues/62723) | **Config migration v30→v32 silently drops platforms section** — 9 de 10 profiles perderam config do Feishu | `sweeper:risk-compatibility` | OPEN |
| [#62151](https://github.com/NousResearch/hermes-agent/issues/62151) | **Gateway cron jobs deadlock** — Jobs cron travam no 2º+ API call dentro do gateway (v0.18.0) | Deadlock confirmado | CLOSED |

### 🟠 Prioridade P2 (Alto)

| # | Bug | Componente | Status |
|---|-----|-----------|--------|
| [#20582](https://github.com/NousResearch/hermes-agent/issues/20582) | Model picker mostra apenas um modelo para custom providers | `comp/cli` | OPEN |
| [#46606](https://github.com/NousResearch/hermes-agent/issues/46606) | Mensagens longas no Windows Desktop desaparecem (primeira metade truncada) | `comp/tui` | OPEN |
| [#62743](https://github.com/NousResearch/hermes-agent/issues/62743) | **TUI Gateway RSS leak — 7.4 GB com 8 sessões** | `comp/tui` | OPEN |
| [#62732](https://github.com/NousResearch/hermes-agent/issues/62732) | `/v1/runs` não restaura SessionDB history de session_id | `comp/gateway` | OPEN |
| [#62726](https://github.com/NousResearch/hermes-agent/issues/62726) | Dashboard cross-tab session bleed + /new hang | `comp/dashboard` | OPEN |
| [#61508](https://github.com/NousResearch/hermes-agent/issues/61508) | Single-query chat imprime traceback KeyboardInterrupt | `comp/cli` | OPEN |
| [#55588](https://github.com/NousResearch/hermes-agent/issues/55588) | Compression chain sessions desaparecem da sidebar quando root é arquivado | `comp/cli` | OPEN |
| [#45279](https://github.com/NousResearch/hermes-agent/issues/45279) | Instalador macOS cria shims em ~/.local/bin shadowando Homebrew/nvm | `area/config` | OPEN |
| [#62791](https://github.com/NousResearch/hermes-agent/issues/62791) | Dashboard permite port-binding inválido em profiles multiplexados | `comp/dashboard` | OPEN |
| [#62792](https://github.com/NousResearch/hermes-agent/issues/62792) | Desktop Windows usa venv Python, locks em .pyd bloqueiam updates | `comp/desktop` | OPEN |

### 🟡 Padrões de Bug Identificados

1. **Windows Platform**: 4+ bugs específicos de Windows (UI truncation, path separators, .pyd locks, venv resolution)
2. **Session State**: 3+ bugs relacionados a session management e cross-tab bleeding
3. **Memory Management**: 4 issues sobre memory leaks, especialmente em TUI Gateway
4. **Config Migration**: Bug crítico silencioso que pode afetar muitos usuários em upgrade

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| # | Feature | Componente | Sinais de Roadmap |
|---|---------|-----------|-------------------|
| [#13484](https://github.com/NousResearch/hermes-agent/issues/13484) | Native Google Cloud Vertex AI provider | `provider/gemini` | Provider expansion |
| [#62731](https://github.com/NousResearch/hermes-agent/issues/62731) | delegate_task com modelos diferentes por subtask | `tool/delegate` | Multi-model agent workflows |
| [#62728](https://github.com/NousResearch/hermes-agent/issues/62728) | Real test runs visíveis ao verifier | `comp/agent` | Testing workflow integration |
| [#62685](https://github.com/NousResearch/hermes-agent/issues/62685) | Intent-Based Model Routing (Auto Tier Selection) | `comp/gateway` | Smart model routing |
| [#62857](https://github.com/NousResearch/hermes-agent/issues/62857) | Scoped WebSocket grants para native clients | `area/auth` | Enhanced auth security |
| [#62316](https://github.com/NousResearch/hermes-agent/pull/62316) | Distributed worker routing para Kanban | `comp/cron` | Enterprise/distributed workflows |
| [#62305](https://github.com/NousResearch/hermes-agent/pull/62305) | Safe Markdown artifact viewer | `comp/desktop` | Desktop UX improvements |

### Sinais de Roadmap Emergentes

1. **Multi-platform parity**: Unificação de sessões CLI/Desktop/Telegram/Discord
2. **Enterprise features**: Distributed workers, coordinator authentication
3. **Model flexibility**: Per-subtask model selection, intent-based routing
4. **Localization**: Demanda explícita por interface em alemão
5. **Mobile**: Request para Android app

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais Identificadas

#### 🖥️ **Windows Desktop — Instabilidade e UX**
- Longas mensagens desaparecem da UI ([#46606](https://github.com/NousResearch/hermes-agent/issues/46606))
- Updates bloqueados por .pyd locks ([#62792](https://github.com/NousResearch/hermes-agent/issues/62792), [#62304](https://github.com/NousResearch/hermes-agent/pull/62304))
- Path separators causam false-positive update_available loops ([#62313](https://github.com/NousResearch/hermes-agent/pull/62313))

#### ⚙️ **Configuração e Migração — Risco de Perda de Dados**
- Migração v30→v32 dropa silenciosamente seções platforms em 90% dos profiles ([#62723](https://github.com/NousResearch/hermes-agent/issues/62723))
- Model picker persiste em config global ao invés de session-scoped ([#56058](https://github.com/NousResearch/hermes-agent/issues/56058))

#### 🧠 **Gerenciamento de Memória**
- TUI Gateway com leak severo: 7.4 GB RSS com apenas 8 sessões ([#62743](https://github.com/NousResearch/hermes-agent/issues/62743))
- Impacta diretamente usuários power (multi-session monitoring)

#### 🔐 **Autenticação e Providers**
- Vertex AI sem path funcional ([#13484](https://github.com/NousResearch/hermes-agent/issues/13484))
- MCP OAuth força re-autenticação a cada restart ([#62309](https://github.com/NousResearch/hermes-agent/pull/62309))

#### 📊 **Sessões e Estado**
- Cross-tab session bleed no Dashboard ([#62726](https://github.com/NousResearch/hermes-agent/issues/62726))
- Sessões de compression chain desaparecem ao arquivar root ([#55588](https://github.com/NousResearch/hermes-agent/issues/55588))
- Mesma conversa fragmentada em múltiplas sessões por plataforma ([#62780](https://github.com/NousResearch/hermes-agent/issues/62780))

### Cenários de Uso Emergentes

1. **Multi-agent legal research**: Diferentes modelos para diferentes subtarefas ([#62731](https://github.com/NousResearch/hermes-agent/issues/62731))
2. **Distributed team workflows**: Kanban com workers distribuídos ([#62316](https://github.com/NousResearch/hermes-agent/pull/62316))
3. **Cross-device Hermes**: Sync de memória e sessões entre dispositivos
4. **Enterprise auth**: Scoped WebSocket grants para clientes nativos

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta/Assignee por Período Prolongado

| # | Issue | Criado | Prioridade | Status | Observação |
|---|-------|--------|-----------|--------|-----------|
| [#13484](https://github.com/NousResearch/hermes-agent/issues/13484) | Vertex AI provider support | 2026-04-21 | P3 | OPEN | ~3 meses sem assignee — feature request madura |
| [#39284](https://github.com/NousResearch/hermes-agent/pull/39284) | bust cache on auxiliary compression changes | 2026-06-04 | P2 | OPEN | PR aberto há ~5 semanas |
| [#39902](https://github.com/NousResearch/hermes-agent/pull/39902) | run hermes update inside managed venv | 2026-06-05 | P2 | OPEN | PR aberto há ~5 semanas |
| [#43200](https://github.com/NousResearch/hermes-agent/pull/43200) | transcribe observed audio context on demand | 2026-06-10 | P3 | OPEN | Telegram observe workflow quebrado |
| [#30470](https://github.com/NousResearch/hermes-agent/pull/30470) | observe Matrix room context | 2026-05-22 | P2 | OPEN | PR aberto há ~7 semanas |
| [#20582](https://github.com/NousResearch/hermes-agent/issues/20582) | Model picker only shows one model | 2026-05-06 | P2 | OPEN | ~2 meses sem progress |
| [#45279](https://github.com/NousResearch/hermes-agent/issues/45279) | macOS shims shadowing Homebrew/nvm | 2026-06-12 | P2 | OPEN | Regressão de PR #38889 |

### Recomendação de Priorização

1. **Crítico (agora)**: [#62723](https://github.com/NousResearch/hermes-agent/issues/62723) — migração config silenciosa perder dados
2. **Alta**: [#62743](https://github.com/NousResearch/hermes-agent/issues/62743) — memory leak severo em produção
3. **Média**: [#13484](https://github.com/NousResearch/hermes-agent/issues/13484) — provider request com 14 👍 e 12 comments
4. **Técnica**: PRs [#39284](https://github.com/NousResearch/hermes-agent/pull/39284), [#39902](https://github.com/NousResearch/hermes-agent/pull/39902), [#30470](https://github.com/NousResearch/hermes-agent/pull/30470) — aberta 5-7 semanas, precisam de review

---

## Métricas de Saúde do Projeto

| Indicador | Valor | Avaliação |
|-----------|-------|-----------|
| Issues ativas (24h) | 40 | ⚠️ Elevado |
| PRs abertos (24h) | 49 | ✅ Alta atividade |
| Taxa de merge (24h) | ~2% (1/50) | ⚠️ Potencial gargalo |
| Releases (24h) | 0 | 😐 Período de estabilização |
| P1 bugs abertos | 1 | ⚠️ Requer atenção imediata |
| P2 bugs abertos | 11 | 🔴 Elevado |
| Features abertas | ~15 | ✅ Pipeline saudável |
| Backlog >30 dias | 7 issues | ⚠️ Requer triagem |

---

*Relatório gerado automaticamente com base em dados do GitHub NousResearch/hermes-agent em 2026-07-12.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório de Projeto: PicoClaw
**Data:** 2026-07-12 | **Repositório:** github.com/sipeed/picoclaw

---

## 1. Panorama do Dia

O projeto PicoClaw apresenta uma atividade reduzida no período de 24 horas analisado. Nenhuma nova issue foi aberta ou atualizada, e nenhum PR foi merged ou fechado, indicando um dia de baixa movimentação. Duas pull requests permanecem abertas e ativas: uma refatoração significativa no módulo deltachat e uma feature para overrides de runtime específicos por agente. A ausência de releases e issues indica que o projeto pode estar em uma fase de revisão de código antes de um próximo lançamento.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24 horas.**

O projeto não publicou novas versões, releases de补丁, ou宣告 de fim de suporte para versões anteriores. Isso representa uma pausa no ciclo de releases típico do projeto.

---

## 3. Progresso do Projeto

**Nenhum PR merged ou fechado nas últimas 24 horas.**

Dois PRs permanecem em revisão ativa:

| PR | Título | Autor | Status | Atualizado |
|----|--------|-------|--------|------------|
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) | refactor(deltachat): cleanup implementation, documentation -200LOC | trufae | OPEN | 2026-07-11 |
| [#3225](https://github.com/sipeed/picoclaw/pull/3225) | Support agent-specific runtime overrides | xdatafactor | OPEN | 2026-07-11 |

**Análise:** O PR #3222 representa uma limpeza técnica substancial com redução de ~200 linhas de código, removendo features legadas, referenciando a lista oficial de relays, e renomeando campos para maior clareza semântica.

---

## 4. Temas Quentes da Comunidade

**Nenhuma issue ou PR com atividade significativa de comentários/reações registrada.**

Os dois PRs abertos (#3222 e #3225) não registraram reações (likes) e possuem contagem de comentários indefinida, sugerindo que ainda não houve discussão substancial da comunidade nestas mudanças.

---

## 5. Bugs e Estabilidade

**Nenhum bug reportado nas últimas 24 horas.**

Não foram identificadas issues abertas relacionadas a crashes, regressões ou problemas de estabilidade. O projeto mantém um estado estável sem incidentes reportados no período.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Feature em Desenvolvimento Ativo:

**[#3225](https://github.com/sipeed/picoclaw/pull/3225) - Support agent-specific runtime overrides**
- **Autor:** xdatafactor
- **Criado:** 2026-07-04
- **Última atualização:** 2026-07-11

**Funcionalidades propostas:**
- Permite que entradas em `agents.list` definam `max_tokens`, limiares de sumarização e `split_on_marker`
- Aplica overrides específicos por agente na construção de `AgentInstance`
- Remove import `openai_compat` não utilizado para permitir compilação do pacote agent

**Sinal de roadmap:** A adição de overrides de runtime por agente indica uma tendência em direção à personalização granular do comportamento de agentes, permitindo configurações específicas sem modificações globais.

---

## 7. Resumo de Feedback dos Usuários

**Ausência de feedback explícito registrado nas últimas 24 horas.**

Sem issues abertas ou discussões recentes, não há indicadores diretos de feedback dos usuários sobre dores, satisfação ou pedidos urgentes. A baixa atividade pode indicar estabilidade operacional ou período de baixa utilização.

---

## 8. Backlog que Merece Atenção

### PRs Abertos há mais de 7 dias sem merge:

| PR | Título | Idade | Prioridade de Review |
|----|--------|-------|----------------------|
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) | refactor(deltachat): cleanup -200LOC | 9 dias | Alta - reduz dívida técnica |
| [#3225](https://github.com/sipeed/picoclaw/pull/3225) | Support agent-specific runtime overrides | 8 dias | Alta - feature significativa |

**Recomendação:** Ambos os PRs estão maduros para review. O PR #3222 pode ser mergeado rapidamente por ser uma limpeza técnica sem breaking changes. O PR #3225 requer validação mais aprofundada por alterar comportamento de runtime de agentes.

---

## Indicadores de Saúde do Projeto

| Métrica | Valor | Status |
|---------|-------|--------|
| Issues ativas | 0 | 🟢 Estável |
| PRs abertos | 2 | 🟡 Aguardando review |
| Releases (24h) | 0 | ⚪ Pausa |
| Bugs críticos | 0 | 🟢 Saudável |
| Tempo médio de PR aberto | 8.5 dias | 🟡 Verificar |

---

*Relatório gerado automaticamente com base em dados do GitHub para 2026-07-12.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-07-12

## 1. Panorama do Dia

O projeto IronClaw demonstra **alta atividade de desenvolvimento** com 50 PRs e 11 issues atualizadas nas últimas 24h, embora nenhuma release nova tenha sido publicada. A equipe mantém foco em duas grandes iniciativas: a arquitetura **extension-runtime** (PRs #5996 e #5995) e a **Responses API** (#5991, #5990). Observam-se preocupações com estabilidade no runtime Reborn — múltiplos bugs de inicialização, transport de MCP local e wall-clock bounds sem proteção — que podem impactar operadores em produção.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

A última release disponível é a **0.29.1** ([#5598](https://github.com/nearai/ironclaw/pull/5598)), que inclui:
- `ironclaw`: 0.24.0 → **0.29.1**
- `ironclaw_common`: 0.4.2 → **0.5.0** ⚠️ Breaking changes
- `ironclaw_skills`: 0.3.0 → **0.4.0** ⚠️ Breaking changes
- `ironclaw_safety`: 0.2.2 → **0.2.3**

⚠️ **Nota de migração**: `ironclaw_common` e `ironclaw_skills` possuem mudanças incompatíveis com API. Verificar o diff de breaking changes no PR antes de atualizar.

---

## 3. Progresso do Projeto

### PRs fechadas/merged hoje (15 total)

| PR | Título | Escopo | Destaque |
|---|---|---|---|
| [#6003](https://github.com/nearai/ironclaw/pull/6003) | CI routing para ci-standard runner | CI, multi-crate | Padronização de infraestrutura de CI |
| [#5997](https://github.com/nearai/ironclaw/pull/5997) | E2E test fixes (Emulate fixture) | Testing | Correção de testes após review automatizado |
| [#5951](https://github.com/nearai/ironclaw/pull/5951) | Recover near.ai streaming tool-call args | LLM | Corrige tool-calls com args vazios em modelos de raciocínio |
| [#5966](https://github.com/nearai/ironclaw/issues/5966) | Fix boot crash-loop (stale manifest) | Reborn | **Corrigido** — crash em produção após #5499 |

### PRs abertas de destaque

- **[#5965](https://github.com/nearai/ironclaw/pull/5965)** (XL, docs): Recoverable errors agorareach the model — canal de diagnóstico `Diagnostic`/`detail` fortalecido
- **[#6001](https://github.com/nearai/ironclaw/pull/6001)** (XS, docs): Rewrote `AGENTS.md` para arquitetura Reborn-native
- **[#5934](https://github.com/nearai/ironclaw/pull/5934)** (M, dependencies): Admin secrets scoped to default agent — segurança reforçada
- **[#5981](https://github.com/nearai/ironclaw/pull/5981)** (XL): Queued-message steering para threads busy — UX de envio de mensagens

---

## 4. Temas Quentes da Comunidade

### Issues com mais engajamento implícito (bugs repetidos ou segurança)

| Issue | Título | Urgência | Tema |
|---|---|---|---|
| [#6000](https://github.com/nearai/ironclaw/issues/6000) | Security: sem canal privado de reporte | **Alta** | Segurança & Governança |
| [#5968](https://github.com/nearai/ironclaw/issues/5968) | HTTP tool falha com Attio (sem MCP) | **Média** | Integração & Ferramentas |
| [#5987](https://github.com/nearai/ironclaw/issues/5987) | Attestation docs complexas demais | **Média** | DX & Documentação |

### Análise de demandas

- **Segurança**: Usuário reportou vulnerabilidade potencial no Reborn runtime mas não consegue canal privado — risco reputacional e de compliance
- **Integração HTTP**: Usuários precisam de autenticação e egress para APIs de terceiros (ex: Attio) sem suporte MCP dedicado
- **DX de attestation**: Documentação atual intimida usuários não-técnicos; há demanda por proxy local simples

---

## 5. Bugs e Estabilidade

### Por severidade

#### 🔴 P1 — Críticos (bloqueiam produção)

| Issue | Descrição | Status |
|---|---|---|
| [#5966](https://github.com/nearai/ironclaw/issues/5966) | Boot crash-loop após #5499 (stale manifest em persistent volume) | ✅ Fechada |
| [#5999](https://github.com/nearai/ironclaw/issues/5999) | `local-dev-yolo` não inicia no Windows (MountAlias requer POSIX paths) | 🆕 Aberta |
| [#5998](https://github.com/nearai/ironclaw/issues/5998) | Reborn não tem transport para MCP local (stdio rejeitado, loopback HTTP negado) | 🆕 Aberta |

#### 🟡 P2 — Significativos

| Issue | Descrição |
|---|---|
| [#5838](https://github.com/nearai/ironclaw/issues/5838) | Context compaction error após execução bem-sucedida de tools |
| [#5958](https://github.com/nearai/ironclaw/issues/5958) | Store I/O sem wall-clock bound (não é só compaction) |
| [#5969](https://github.com/nearai/ironclaw/issues/5969) | GLM-5.2 não disponível na lista default de modelos opencode |

#### 🟢 P3 — Conforto/UX

| Issue | Descrição |
|---|---|
| [#5992](https://github.com/nearai/ironclaw/issues/5992) | Taxonomy diária de failures — 77+ tasks falhando por benchmark defect |
| [#5990](https://github.com/nearai/ironclaw/issues/5990) | Responses API: gaps de fidelidade semântica, lifecycle safety e tools |

**⚠️ Alerta**: 3 bugs críticos em aberto no mesmo dia sugere necessidade de triage urgente pelo time de core.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features solicitadas

| Issue | Demanda | Sinal de Roadmap |
|---|---|---|
| [#6000](https://github.com/nearai/ironclaw/issues/6000) | Adicionar `SECURITY.md` + private vulnerability reporting | **Governança & Compliance** |
| [#5998](https://github.com/nearai/ironclaw/issues/5998) | Support para MCP server local (stdio ou HTTP loopback) | **Extensibilidade** |
| [#5987](https://github.com/nearai/ironclaw/issues/5987) | Proxy local para attestation (sem setup complexo) | **Usabilidade** |
| [#5968](https://github.com/nearai/ironclaw/issues/5968) | Autenticação nativa para HTTP tool em serviços externos | **Tooling & Integração** |

### PRs indicando direção estratégica

- **[#5996](https://github.com/nearai/ironclaw/pull/5996)** (extension-runtime P2): ExtensionHost + dispatch cutover — infraestrutura para plugins terceiros
- **[#5995](https://github.com/nearai/ironclaw/pull/5995)** (extension-runtime P1): Manifest v3 + VendorId + recipes — novo formato de extensão
- **[#5981](https://github.com/nearai/ironclaw/pull/5981)**: Queued-message steering — experiência multi-thread melhorada

---

## 7. Resumo de Feedback dos Usuários

### Dores reais identificadas

| Dor | Frequência | Impacto |
|---|---|---|
| Configuração manual de modelos (GLM-5.2) | 1 report, mas issue interna indica padrão | Configurabilidade |
| Complexidade de attestation NEAR AI | 1+ usuário abandonado fluxo | Adoção |
| Incompatibilidade Windows para `local-dev-yolo` | 1 report | Multi-plataforma |
| Falta de transport para MCP local | 1 report (pode afetar mais) | Extensibilidade |
| Sem canal privado para security | 1+ researcher barrado | Segurança |

### Cenários de uso emergentes

- **Desenvolvedores Windows** tentando usar `local-dev-yolo` estão bloqueados
- **Usuários não-técnicos** lutam com setup de attestation; querem "plug-and-play"
- **Segurança/auditoria** precisa de workflow privado para reportar vulnerabilidades

---

## 8. Backlog que Merece Atenção

### Issues sem resposta há >48h com potencial de bloco

| Issue | Idade | Prioridade | Motivo |
|---|---|---|---|
| [#5998](https://github.com/nearai/ironclaw/issues/5998) | ~1 dia | **Alta** | Bloqueia MCP local — feature request válida |
| [#6000](https://github.com/nearai/ironclaw/issues/6000) | ~1 dia | **Alta** | Governança — sem resposta pode afastar security researchers |
| [#5999](https://github.com/nearai/ironclaw/issues/5999) | ~1 dia | **Alta** | Bug Windows — reprodutível e bloqueante |

### PRs aguardando review há >24h

| PR | Tamanho | Riesgo | Status |
|---|---|---|---|
| [#5996](https://github.com/nearai/ironclaw/pull/5996) | XL | medium | Aberto |
| [#5995](https://github.com/nearai/ironclaw/pull/5995) | XL | low | Aberto |
| [#5934](https://github.com/nearai/ironclaw/pull/5934) | M | medium | Aberto |
| [#5981](https://github.com/nearai/ironclaw/pull/5981) | XL | low | Aberto |

---

## Métricas Resumidas (2026-07-12)

| Indicador | Valor | Tendência |
|---|---|---|
| Issues ativas abertas | 8 | Neutra |
| Issues fechadas | 3 | Positiva |
| PRs abertos | 35 | — |
| PRs fechados/merged | 15 | — |
| Releases | 0 | — |
| Bugs críticos em aberto | 2 | ⚠️ Alerta |
| PRs de feature aguardando merge | 5 | — |

---

*Relatório gerado automaticamente com base em dados do GitHub de [nearai/ironclaw](https://github.com/nearai/ironclaw) em 2026-07-12.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do Projeto CoPaw — 2026-07-12

---

## 1. Panorama do dia

O projeto CoPaw (QwenPaw) apresenta **alta atividade comunitária** em 12 de julho de 2026, com 23 issues atualizadas e 7 PRs no período de 24 horas. **Todas as 23 issues são abertas/ativas** — nenhum problema foi resolvido nas últimas 24h, indicando um acúmulo de itens pendentes. A versão **v2.0.0** domina o universo de reports, sendo citada na maioria absoluta dos issues como a versão onde os problemas foram identificados. Não houve lançamentos de novas versões no período. A saúde geral do projeto apresenta **sinais de tensão**: múltiplos bugs críticos relacionados a regressões de migração v1.x→v2.0.0, problemas de estabilidade com ferramentas de contexto/sessão, e uma UX do sistema de permissões criticada pela comunidade.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto encontra-se em um período sem novos releases formais, enquanto a comunidade reporta problemas na versão mais recente (v2.0.0). Recomenda-se atenção à possibilidade de um **hotfix** ou patch corretivo em breve.

---

## 3. Progresso do Projeto

### PRs Merged/Fechadas (4)

| # | PR | Autor | Resumo | Data |
|---|-----|-------|--------|------|
| [#5974](https://github.com/agentscope-ai/QwenPaw/pull/5974) | fix(console): improve dark mode text contrast | Marlin-Phone | Melhora contraste de texto no dark mode para templates de Loop e histórico de chat — fecha #5969 | 2026-07-11 |
| [#5973](https://github.com/agentscope-ai/QwenPaw/pull/5973) | fix(console): improve dark mode text contrast | Marlin-Phone | Variação do mesmo fix com definições CSS refatoradas | 2026-07-11 |
| [#5971](https://github.com/agentscope-ai/QwenPaw/pull/5971) | fix(console): improve dark mode text contrast | Marlin-Phone | Endereça 4 sugestões de revisão do Copilot — fecha #5969 | 2026-07-11 |
| [#5970](https://github.com/agentscope-ai/QwenPaw/pull/5970) | fix(console): improve dark mode text contrast | Marlin-Phone | Corrige problema onde texto ficava quase invisível em fundos escuros — fecha #5969 | 2026-07-11 |

**Análise:** OContributor **Marlin-Phone** investiu esforço significativo (5 PRs, 4 fechadas, 1 aberta) na mesma issue #5969, demonstrando iteração ativa para resolver problemas de acessibilidade no dark mode. O PR #5968 também aborda uma issue do mesmo escopo (skills page).

### PRs Abertas (3)

| # | PR | Autor | Resumo | Issue Relacionada |
|---|-----|-------|--------|-------------------|
| [#5975](https://github.com/agentscope-ai/QwenPaw/pull/5975) | fix(console): improve dark mode text contrast | Marlin-Phone | Melhora variáveis CSS com fallbacks adequados | [#5969](https://github.com/agentscope-ai/QwenPaw/issues/5969) |
| [#5968](https://github.com/agentscope-ai/QwenPaw/pull/5968) | fix: skills page scroll loading stops after first batch | feng183043996 | Corrige `IntersectionObserver` que não carrega mais de 20 skills; primeira contribuição | [#5788](https://github.com/agentscope-ai/QwenPaw/issues/5788) |
| [#5953](https://github.com/agentscope-ai/QwenPaw/pull/5953) | fix: use standard truncation hint for scroll-capped tool results | niceIrene | Centraliza truncamento de resultados grandes em `ToolResultLimiter`; persiste outputs como artefatos em `tool_results/` | #5946, #5929 |

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários)

1. **[#5951](https://github.com/agentscope-ai/QwenPaw/issues/5951)** — **Windows Sandbox Bug** — 7 comentários 🔥
   - **Tema:** Falha crítica na implementação de sandbox no Windows (v2.0.0). pwsh entra em recursão infinita com pop-ups, memória estourada em 20GB, e sandbox impossível de desativar.
   - **Impacto:** Ferramenta **completamente inutilizável** no Windows após upgrade.
   - **Análise:** Bug de alta severidade que combina múltiplas falhas (NTFS ACL, CREATE_NO_WINDOW, processo de inicialização do sandbox).

2. **[#4124](https://github.com/agentscope-ai/QwenPaw/issues/4124)** — **OAuth para OpenAI/Codex** — 4 comentários ⭐
   - **Tema:** Request para suportar login OAuth para OpenAI e Codex, similar ao `hermes auth add openai-codex --type oauth`.
   - **Análise:** Demanda antiga (Maio 2026) que continua gerando interesse. Indica necessidade de integração mais fluida com provedores de API externos.

3. **[#5788](https://github.com/agentscope-ai/QwenPaw/issues/5788)** — **Skills list only shows 20 items** — 4 comentários
   - **Tema:** Scroll-to-load-more não funciona na página de Skills. Problema de UX com progressive rendering.
   - **Progresso:** PR #5968 (feng183043996) já aberto para correção.

4. **[#5961](https://github.com/agentscope-ai/QwenPaw/issues/5961)** — **Loop execution cycles** — 3 comentários
   - **Tema:** Com qwen3.7-plus, agente entra em loop de escrita/deleção sem completar tarefas simples.

5. **[#5952](https://github.com/agentscope-ai/QwenPaw/issues/5952)** — **auto-memory module missing** — 3 comentários
   - **Tema:** Falha em auto-memory com `No module named 'agentscope.tool._builtin._scripts'`. Afeta todos os agentes.

### Issue com reação (thumbs up)

- **[#5955](https://github.com/agentscope-ai/QwenPaw/issues/5955)** — 1 👍 — v2.0.0 skills UI display issues (somente 20 habilidades mostradas)

---

## 5. Bugs e Estabilidade

### 🔴 Críticos (afetam funcionalidades core / uso impossível)

| # | Título | Severidade | Canal | Link |
|---|--------|------------|-------|------|
| #5951 | Windows sandbox: pwsh recursive explosion + NTFS ACL + CREATE_NO_WINDOW | **Crítica** | Windows Desktop | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5951) |
| #5961 | Loop de execução infinita (escrever/deletar) com qwen3.7-plus | **Crítica** | Runtime | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5961) |
| #5967 | Pydantic ValidationError ao carregar sessão legacy (parse_legacy_memory_state) | **Crítica** | Dados/Migração | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5967) |
| #5965 | PyInstaller bundle missing `agentscope.tool._builtin._scripts` submodule | **Crítica** | Build/PyInstaller | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5965) |
| #5952 | auto-memory falha com module not found | **Crítica** | Memória | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5952) |
| #5964 | Chat list → conversation_history mapping lost after v2.0.0 upgrade (500 error) | **Crítica** | Database/Migração | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5964) |

### 🟠 Altos (causam erros recurrentes ou perda de funcionalidade)

| # | Título | Severidade | Canal | Link |
|---|--------|------------|-------|------|
| #5960 | Context compression split tool_call/tool_result → API 400 error | **Alta** | Contexto/API | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5960) |
| #5962 | WeChat: orphaned tool_result after scroll eviction → 400 | **Alta** | WeChat Channel | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5962) |
| #5956 | DingTalk: legacy file tool results fail to load after v2.0.0 upgrade | **Alta** | DingTalk/Migração | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5956) |
| #5963 | execute_shell_command hard-capped at 60s (ignora shell_command_timeout) | **Alta** | Shell Tool | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5963) |
| #5972 | heartbeat session recovery carrega estado antigo → tool orphaning → 400 | **Alta** | Session/Heartbeat | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5972) |
| #5950 | Chinese memory files → embedding 400 (truncation por char, não token) | **Alta** | Embedding/Memória | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5950) |
| #5957 | WeChat: "/Internal error" após upgrade para v2.0 | **Alta** | WeChat | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5957) |

### 🟡 Medios (UX / UI / convenience)

| # | Título | Severidade | Canal | Link |
|---|--------|------------|-------|------|
| #5969 | Dark mode: texto com contraste muito baixo | **Média** | UI/Console | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5969) → PR #5974 merged |
| #5955 | Skills UI: só mostra 20 itens ativados | **Média** | UI/Console | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5955) |
| #5958 | Pergunta sobre permission control do AgentScope | **Média** | Permissões | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5958) |

**Padrões identificados:**

1. **Regressões de migração v1.x → v2.0.0**: Múltiplos bugs de compatibilidade com dados de sessões antigas (#5967, #5964, #5956, #5957). O upgrade não preserva corretamente estados legacy.
2. **Contexto compressão / scroll eviction**: Problema recorrente onde `tool_call` e `tool_result` são separados, causando API 400 errors (#5960, #5962, #5972).
3. **Módulo faltante no PyInstaller**: A build empacotada perdeu um submodule crítico (#5952, #5965).
4. **Limite de 20 itens**: Padrão aparece em múltiplas partes da UI (skills list, skills ativados) — possível código shared com limite hard-coded.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Feature Requests

| # | Título | Demandas | Link |
|---|--------|----------|------|
| #4124 | Support OAuth login for OpenAI / Codex | Autenticação OAuth para APIs OpenAI | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/4124) |
| #5976 | Separar controle de parâmetros e resultados de tool calls no channel | 1) Controlar independentemente envio de params vs resultados. 2) Truncar resultados mostrando início e fim | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5976) |
| #5958 | Usar permission control features do AgentScope no QwenPaw | Integrar sistema de permissões (io.agentscope.core.permission) | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5958) |

### Feedback sobre Features Existentes

| # | Título | Feedback | Link |
|---|--------|----------|------|
| #5954 | Sistema de permissões (v2.0) | **Crítica de UX:** Modo Manual e Smart pedem aprovação repetidamente. Sugestão: modo whitelist com "executar 1x" ou "adicionar à whitelist" | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5954) |
| #2664 | Suporte a Intel Mac | Pergunta sobre suporte futuro (aberta desde Março 2026) | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/2664) |

**Sinais de roadmap:**
- O PR #5953 demonstra priorização em **otimização de contexto** (truncar tool results grandes antes de entrar no contexto do agente).
- A issue #5954 revela que o **sistema de permissões da v2.0.0** precisa de redesign UX significativo — احتمال grande de mudanças no modelo de permissão.
- Demanda por **OAuth** (#4124) indica necessidade de autenticação mais moderna para provedores externos.

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais

| Dor | Descrição | Severidade Percebida | Links |
|-----|-----------|----------------------|-------|
| **Windows quebrado** | Sandbox do Windows causa recursão infinita de pwsh, memória estourada, impossível usar | 🔴 Crítica | [#5951](https://github.com/agentscope-ai/QwenPaw/issues/5951) |
| **Upgrade destrói dados** | Sessões existentes não carregam após migrar para v2.0.0 — Pydantic errors, mapping perdido | 🔴 Crítica | [#5967](https://github.com/agentscope-ai/QwenPaw/issues/5967), [#5964](https://github.com/agentscope-ai/QwenPaw/issues/5964), [#5956](https://github.com/agentscope-ai/QwenPaw/issues/5956) |
| **auto-memory não funciona** | Módulo ausente impede memory summarization | 🔴 Crítica | [#5952](https

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-07-12

---

## 1. Panorama do Dia

O projeto ZeroClaw mantém **alta atividade** em 12 de julho de 2026, com 50 issues e 50 PRs atualizados nas últimas 24 horas. Não houve lançamentos oficiais recentes, mas o desenvolvimento está intenso, especialmente no subsistema de **memória persistente** — com 7 PRs simultâneos em progresso (de Nillth) mirando a aposentadoria da feature gate do `RetrievalPipeline` e a introdução de classificação tipada, auditoria e varredura de conteúdo por segurança. A comunidade demonstra engajamento significativo em RFCs arquiteturais (modo Goal, supply chain signing, roteamento unificado de saída) e há um bug de severidade P1 ativo relacionado a poda silenciosa de histórico.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24 horas.**

O último release estável tracking ocurre no issue **#8073** (*v0.8.3 observability, CI, docs, dependencies, and release support*), que coordena o suporte pós-lançamento — mas ainda não há artefatos publicados.

> **Nota de monitoramento:** A ausência de releases novas combinada com a intensidade de PRs sugere que o time pode estar preparando uma release de integração de memória em breve.

---

## 3. Progresso do Projeto

### PRs fechado/merged (1)

| PR | Autor | Tamanho | Risco | Descrição |
|----|-------|---------|-------|-----------|
| **#8959** | mazhuima | XS | 🔴 alto | **fix(runtime): annotate max-iteration turn stop with visible reason** — Corrige problema silencioso onde `max_iterations` encerrava o loop sem indicação ao usuário. Agora exibe razão visível. |

### PRs em revisão com potencial de merge iminente

| PR | Autor | Tamanho | Risco | Destaque |
|----|-------|---------|-------|----------|
| **#8173** | NiuBlibing | L | 🔴 alto | In-app upgrade com auto-restart do dashboard web (RFC #8170). Requer revisão de mantenedor. |
| **#8895** | Nillth | L | 🔴 alto | Rerank stage no pipeline de memória — feature gate ativado (`[memory] rerank_enabled`). |
| **#8897** | Nillth | XL | 🔴 alto | Rota recall pelo `RetrievalPipeline` — unblocks toda a arquitetura de memória em staging. |
| **#8893** | Nillth | L | 🔴 alto | Audit trail com fan-out para logs/OTel/Prometheus no subsistema de memória. |
| **#8898** | Nillth | M | 🔴 alto | Corrige memórias globais duráveis não alcançando recall semântico entre sessões. |
| **#7960** | mazhuima | S | 🔴 alto | Gata `execute_pipeline` com `ToolAccessPolicy` por agente — regressão de segurança. |

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários/reações)

| # | Título | Comentários | 👍 | Autor | Status | Link |
|---|--------|------------|----|-------|--------|------|
| **#5849** | Dream Mode — Periodic Memory Consolidation | 20 | 0 | Svtter | ✅ CLOSED | [Issue #5849](https://github.com/zeroclaw-labs/zeroclaw/issues/5849) |
| **#8177** | RFC: Supply chain signing (PGP, hermetic, SLSA) | 10 | 0 | ConYel | 🟡 OPEN | [Issue #8177](https://github.com/zeroclaw-labs/zeroclaw/issues/8177) |
| **#8681** | Goal mode implementation split stack | 8 | 0 | vrurg | 🟡 OPEN | [Issue #8681](https://github.com/zeroclaw-labs/zeroclaw/issues/8681) |
| **#6165** | RFC: Lighter ZeroClaw core via external integrations | 8 | 0 | ilteoood | 🟡 OPEN | [Issue #6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) |
| **#6969** | RFC: Unified output routing (per-peer modality + send_via) | 7 | 0 | mov-xound-glitch | 🟡 OPEN | [Issue #6969](https://github.com/zeroclaw-labs/zeroclaw/issues/6969) |
| **#5287** | Local-First Mode for Small Models | 4 | 2 | ThirDecade2020 | 🟡 OPEN | [Issue #5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) |
| **#8303** | Goal mode for bounded autonomous session work | 4 | 1 | vrurg | 🟡 OPEN | [Issue #8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) |

### Análise dos temas quentes

1. **Memória e "Dream Mode" (#5849, #7794)** — O recurso de consolidação periódica de memória durante períodos de ociosidade foi fechado recentemente (20 comentários). A comunidade demonstra interesse contínuo com o PR #7794 para estender a feature por agente.

2. **Segurança de supply chain (#8177)** — RFC ambicioso para PGP com hardware, builds herméticos e SLSA provenance. Bloqueado (`status:blocked`), sinaliza maturidade organizacional.

3. **Arquitetura do modo Goal (#8681, #8303)** — Tracker de splitting de PRs e RFC dedicado mostram que o time está transformando implementações ad-hoc em unidades revisáveis.

4. **Core mais leve (#6165)** — Discussão sobre mover integrações de long-tail para skills/MCP/plugins. Indica pressão por manutenção e simplificação.

5. **Local-first (#5287)** — 2 reactions, maior ratio de aprovação por comentário. Usuários locais valorizam prompt compactado e proteção contra prompt-leakage.

---

## 5. Bugs e Estabilidade

### Bug reportado (P1 — atenção imediata)

| # | Severidade | Título | Autor | Atualizado | Link |
|---|-----------|--------|-------|------------|------|
| **#8837** | 🔴 S2 - degraded | history trimming occurs silently with history pruning disabled | susyabashti | 2026-07-11 | [Issue #8837](https://github.com/zeroclaw-labs/zeroclaw/issues/8837) |

**Detalhe:** Usuário reporta perda súbita de contexto durante sessão sem explicação — o agente simplesmente para de "lembrar" sem aviso. Afeta `runtime/daemon`. Necessita reprodução e fix.

### Bugs em PR em revisão

| PR | Severidade | Título | Link |
|----|-----------|--------|------|
| **#8959** | 🔴 alto | fix(runtime): annotate max-iteration turn stop with visible reason | [PR #8959](https://github.com/zeroclaw-labs/zeroclaw/pull/8959) |
| **#8913** | 🟡 medium | fix(runtime): annotate max-iteration turn stop with visible reason (duplicate/redundância) | [PR #8913](https://github.com/zeroclaw-labs/zeroclaw/pull/8913) |
| **#7960** | 🔴 alto | fix(tools): gate execute_pipeline sub-tool execution with per-agent ToolAccessPolicy | [PR #7960](https://github.com/zeroclaw-labs/zeroclaw/pull/7960) |
| **#8601** | 🔴 alto | fix(skills): support owner-qualified ClawHub installs | [PR #8601](https://github.com/zeroclaw-labs/zeroclaw/pull/8601) |
| **#8960** | 🟡 medium | fix(channels): relax Matrix marker path instructions | [PR #8960](https://github.com/zeroclaw-labs/zeroclaw/pull/8960) |
| **#8963** | 🟢 low | fix(channels): cap Telegram bot commands | [PR #8963](https://github.com/zeroclaw-labs/zeroclaw/pull/8963) |

**Alerta de estabilidade:** 2 bugs de risco alto (#7960, #8601) aguardam revisão de mantenedor. O PR #7960 representa regressão de segurança (permissões de ferramenta burladas via `execute_pipeline`).

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em progresso (status:in-progress)

| # | Título | Prioridade | Tipo | Link |
|---|--------|------------|------|------|
| **#8681** | Goal mode implementation split stack | p2 | tracker | [Issue #8681](https://github.com/zeroclaw-labs/zeroclaw/issues/8681) |
| **#8891** | Persistent memory — wire curation, relevance, operability planes | p2 | tracker | [Issue #8891](https://github.com/zeroclaw-labs/zeroclaw/issues/8891) |
| **#6391** | Real heartbeat tracking for daemon nodes | p2 | feature | [Issue #6391](https://github.com/zeroclaw-labs/zeroclaw/issues/6391) |
| **#8891** | Persistent memory epic | p2 | tracker | [Issue #8891](https://github.com/zeroclaw-labs/zeroclaw/issues/8891) |

### RFCs aceitos (indicadores de direção)

| # | Título | Status | Link |
|---|--------|--------|------|
| **#6165** | Lighter ZeroClaw core via external integrations | accepted | [Issue #6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) |
| **#6969** | Unified output routing model | accepted | [Issue #6969](https://github.com/zeroclaw-labs/zeroclaw/issues/6969) |
| **#8303** | Goal mode for bounded autonomous session work | accepted | [Issue #8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) |
| **#6850** | Decouple memory lifecycle policy from storage backends | accepted | [Issue #6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) |
| **#6489** | Everything is a plugin — phased path | accepted | [Issue #6489](https://github.com/zeroclaw-labs/zeroclaw/issues/6489) |

### Novas features (últimas 24h)

| # | Título | Prioridade | Link |
|---|--------|------------|------|
| **#8958** | ACP agent selection via ?agent= query param | p2 | [Issue #8958](https://github.com/zeroclaw-labs/zeroclaw/issues/8958) |
| **#8138** | Support OpenRouter model fallbacks array | p2 | [Issue #8138](https://github.com/zeroclaw-labs/zeroclaw/issues/8138) |
| **#8046** | Optional Telegram webhook mode | p2 | [Issue #8046](https://github.com/zeroclaw-labs/zeroclaw/issues/8046) |
| **#8043** | Retire aardvark-sys crate → zeroclaw-hardware | p2 | [Issue #8043](https://github.com/zeroclaw-labs/zeroclaw/issues/8043) |
| **#8078** | zerocode local pre-submission gate | p2 | [Issue #8078](https://github.com/zeroclaw-labs/zeroclaw/issues/8078) |

**Observação de roadmap:** OPR #8891 (Persistent memory epic) junto com os 7 PRs simultâneos de Nillth indicam que **memória persistente é a prioridade técnica mais intensa do momento**.

---

## 7. Resumo de Feedback dos Usuários

### Dores relatadas

| Dor | Issue | Contexto |
|-----|-------|----------|
| Perda silenciosa de contexto | #8837 | "Talking to the agent mid session suddenly loses its context without explanation" |
| Overhead de comandos Telegram | #8950 (via #8963) | Limite de 100 comandos no Telegram Bot API excedido |
| Falta de failover automático em provedores | #8138 | "if the primary model is down or rate-limited, it automatically tries the next model" — inacessível |
| Confusion com canais não-bundle | #7952 | "user configures a channel that is not covered by the prebuilt bundle" |
| Desorientação no loop de ferramentas | #8959/#8913 | "agent simply gave up mid-response" sem indicação de `max_iterations` |
| Migração de Letta | #6969 | "I recently migrated from Letta to ZeroClaw and one behaviour I relied on heavily is gone" |

### Cenários de uso destacados

- **Multi-agente via ACP (#8958):** Integração com cliente Thunderbird (Thunderbolt) valida interoperabilidade do protocolo.
- **Headless/TUI (#7790):** Usuários server-demandam paridade zerocode ↔ web dashboard.
- **Local-first com modelos pequenos (#5287):** Prompt bloat e prompt-leakage são barreiras reais.

---

## 8. Backlog que Merece Atenção

### Issues sem resposta recente (estagnadas ou aguardando mantenedor)

| # | Título | Criado | Atualizado | Comentários | Status | Link |
|---|--------|--------|------------|-------------|--------|------|
| **#8309** | SkillForge (#144) is orphaned — wire up or remove? | 2026-06-25 | 2026-07-11 | 2 | accepted | [Issue #8309](https://github.com/zeroclaw-labs/zeroclaw/issues/8309) |
| **#6653** | Define host-architecture policy for emulated installs | 2026-05-14 | 2026-07-11 | 2 | accepted | [Issue #6653](https://github.com/zeroclaw-labs/zeroclaw/issues/6653) |
| **#6346** | zeroclaw node CLI + dashboard health & management | 2026-05-03 | 2026-07-11 | 2 | accepted | [Issue #6346](https://github.com/zeroclaw-labs/zeroclaw/issues/6346) |
| **#7790** | Bring remaining web dashboard operator surfaces into zerocode | 2026-06-16 | 2026-07-11 | 2 | accepted | [Issue #7790](https://github.com/zeroclaw-labs/zeroclaw/issues/7790) |

### PRs aguardando revisão de mantenedor

| PR | Título |等待时长 | Link |
|----|--------|--------|------|
| **#8173** | In-app upgrade com auto-restart | dias | [PR #8173](https://github.com/zeroclaw-labs/zeroclaw/pull/8173) |
| **#7960** | ToolAccessPolicy bypass | dias | [PR #7960](https://github.com/zeroclaw-labs/zeroclaw/pull/796

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*