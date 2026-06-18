# Resumo diário do ecossistema de agentes de IA 2026-06-19

> Issues: 4 | PRs: 5 | Projetos cobertos: 7 | Gerado em: 2026-06-18 22:01 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal


# Relatório do Projeto NullClaw — 2026-06-19

---

## 1. Panorama do dia

NullClaw apresenta **alta atividade de desenvolvimento** nesta data, com 9 itens atualizados nas últimas 24 horas (4 issues + 5 PRs), embora nenhuma release ou merge tenha sido finalizada. O repositório demonstra vigoroso fluxo de trabalho com foco em **melhorias de streaming, suporte a provedores e funcionalidades de memória**. A comunidade demonstra interesse em integrações de plataforma (WeChat, ESP32) e otimização de performance, evidenciando um projeto em fase ativa de amadurecimento de features. Não há sinais de regressões críticas ou estabilidade comprometida.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24 horas.**

O projeto não registrou novos versionamentos desde o último período. Usuários em produção devem acompanhar o repositório para capturas de funcionalidades pendentes em revisão (detalhadas na seção 3).

---

## 3. Progresso do projeto

Cinco Pull Requests foram submetidos/entram em revisão, representando avanços significativos:

| PR | Autor | Área | Status |
|----|-------|------|--------|
| [#965](https://github.com/nullclaw/nullclaw/pull/965) | mtdphn | Streaming SSE | 🟡 Aberto |
| [#964](https://github.com/nullclaw/nullclaw/pull/964) | mtdphn | Tool calls em streaming | 🟡 Aberto |
| [#963](https://github.com/nullclaw/nullclaw/pull/963) | vernonstinebaker | Documentação WeChat | 🟡 Aberto |
| [#962](https://github.com/nullclaw/nullclaw/pull/962) | vernonstinebaker | Documentação Anthropic | 🟡 Aberto |
| [#961](https://github.com/nullclaw/nullclaw/pull/961) | valonmulolli | Memória configurável | 🟡 Aberto |

**Destaques:**
- **PRs #964 e #965**: Corrigem um bug crítico onde `agent/root.zig` desabilita tools nativas durante streaming, passando `.tools = null`. Esta é uma melhoria de funcionalidade central que afeta todos os usuários de streaming com tool-calling.
- **PR #961**: Introduce controles granulares de memória (`auto_recall`, `recall_limit`, `max_context_bytes`), atendendo demandas por tuning de performance.

⚠️ *Nenhum PR foi mergeado nesta data — todos estão em fase de code review.*

---

## 4. Temas quentes da comunidade

### Issues com maior engajamento (por comentários)

| Issue | Comentários | Tema |
|-------|-------------|------|
| [#50](https://github.com/nullclaw/nullclaw/issues/50) | 4 | Suporte ESP32 |
| [#817](https://github.com/nullclaw/nullclaw/issues/817) | 2 | Login QR WeChat |
| [#190](https://github.com/nullclaw/nullclaw/issues/190) | 2 | Spawn de subagentes |
| [#913](https://github.com/nullclaw/nullclaw/issues/913) | 1 | Performance A2A |

**Análise:**

- **Issue #50 (ESP32)**: Alta demanda por suporte a hardware embarcado. Embora aberta desde fevereiro, a atualização recente sugere que o mantenedor está respondendo — é um sinal de que suporte a microcontroladores pode estar no roadmap ou em discussão.
- **Issue #817 (WeChat)**: Já possui PR #963 associado para documentação, indicando que a funcionalidade existe mas não estava documentada. A documentação deve resolver este gap.
- **Issue #913 (A2A performance)**: Usuário reporta que NullClaw raw é mais rápido que A2A — dado relevante para priorização de otimização do protocolo A2A.

---

## 5. Bugs e estabilidade

**Nenhum bug ou regressão reportado explicitamente nas últimas 24h.**

No entanto, os **PRs #964 e #965** endereçam um bug implícito de longa data: tool-calling nativo é desabilitado em streaming. Este não foi reportado como bug via issue, mas identificado pelo próprio time durante desenvolvimento — sinal de maturidade no processo de QA.

**Sem incidentes de estabilidade reportados.**

---

## 6. Pedidos de features e sinais de roadmap

### Novas features em desenvolvimento

1. **Tool-calling nativo em streaming** (PRs #964, #965)
   - Impacto: Alto — desbloqueia uso de tools com provedores streaming
   - Sinal: Team investindo em parity entre modos streaming e não-streaming

2. **Controles de memória configuráveis** (PR #961)
   - `auto_recall`: Desabilita enriquecimento de memória por usuário
   - `recall_limit`: Limita entradas injetadas por request
   - `max_context_bytes`: Controle de limite de contexto
   - Impacto: Médio — atende power users e casos de uso com constraints

3. **Documentação Anthropic nativa** (PR #962)
   - Suporte a API key direta e OAuth/Pro-Plan
   - Impacto: Baixo para novos usuarios, alto para adoção corporativa

### Sinais de roadmap implícitos

- **ESP32 (Issue #50)**: Discussão ativa sugere exploração de suporte embarcado
- **Subagentes multi-provider (Issue #190)**: Demanda por arquiteturas de agentes federados
- **A2A otimizado (Issue #913)**: Performance do protocolo Agent-to-Agent precisa de atenção

---

## 7. Resumo de feedback dos usuários

### Dores identificadas

| Dor | Severidade | Evidência |
|-----|------------|-----------|
| Falta de documentação para WeChat QR login | 🔴 Alta | Issue #817 — usuário não encontrou como configurar |
| Desconhecimento de suporte Anthropic nativo | 🟡 Média | Issue #767 referenciada no PR #962 |
| Performance A2A inferior ao raw | 🟡 Média | Issue #913 — usuário mediu e reportou |
| Ausência de controles de memória | 🟢 Baixa/Média | PR #961 atende demanda implícita |

### Cenários de uso emergentes

- **Embarcados**: Usuário solicita ESP32 — potencial caso de uso IoT/edge
- **Multi-plataforma**: WeChat como canal de integração para audiência sino-falante
- **Multi-agente**: Spawn de subagentes com provedores distintos

### Satisfação

A ausência de issues抱怨 (queixes) e a existência de múltiplos PRs de documentação indicam **comunidade ativa contribuindo com feedback estruturado**. O projeto demonstra saúde em transparência e resposta.

---

## 8. Backlog que merece atenção

### Issues sem resposta prolongada

| Issue | Criação | Atualização | Comentários | Prioridade |
|-------|---------|-------------|-------------|------------|
| [#50](https://github.com/nullclaw/nullclaw/issues/50) | 2026-02-21 | 2026-06-18 | 4 | 🟡 Needs triage |
| [#190](https://github.com/nullclaw/nullclaw/issues/190) | 2026-03-01 | 2026-06-18 | 2 | 🟡 Needs roadmap clarity |

### Análise

- **Issue #50 (~4 meses)**: Aguarda resposta definitiva sobre ESP32. Manter em aberto sem posição oficial pode frustrar contribuidores interessados.
- **Issue #190 (~3.5 meses)**: Pergunta sobre arquitetura multi-provider para subagentes — decisão de roadmap que impacta design de sistema.

**Recomendação**: Considerar triagem de Issues #50 e #190 com posicionamento oficial (planned/not planned) para gestão de expectativas da comunidade.

---

## Métricas consolidadas (últimas 24h)

| Indicador | Valor |
|-----------|-------|
| 🔄 Issues ativas | 4 |
| 🔀 PRs abertos | 5 |
| 🚀 Releases | 0 |
| ✅ Merges/fechados | 0 |
| 📊 Net activity | Alta (9 eventos) |
| 🐛 Bugs críticos | 0 |

---

**Próxima atualização recomendada**: 2026-06-20 — monitorar merges dos PRs em revisão.

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo — Ecossistema de Agentes de IA Open Source

**Data de referência:** 2026-06-19 | **Projetos analisados:** 8

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **alta atividade transversal** em 19 de junho de 2026, com todos os projetos em fase intensiva de desenvolvimento. Observa-se uma divisão estratégica entre projetos em consolidação de qualidade (ZeroClaw com release iminente v0.8.1, CoPaw com v1.1.12.post1) e projetos em iteração rápida de features (NanoBot com 25 PRs, Hermes com 50 issues+PRs). Os temas técnicos dominantes são **gestão de contexto/compactação**, **segurança de OAuth e subprocessos**, **multi-canal (WeChat, Feishu, Discord, Slack)** e **suporte a hardware embarcado (ESP32)**. A saúde geral do ecossistema é positiva, com pipeline robusto de PRs, mas com pressão uniforme sobre estabilidade — nenhum dos 8 projetos registrou releases formais além das manutenções, indicando que o período é de maturação pré-release.

---

## 2. Comparação de Atividade

| Projeto | Issues Ativas | PRs Abertos | PRs Merged (24h) | Releases (24h) | Saúde | Críticos Abertos |
|---------|--------------|-------------|------------------|----------------|-------|-----------------|
| **ZeroClaw** | 45 | 50 | 7 | 0 (v0.8.1 iminente) | 🔴 Prioridade Segurança | 1 S0 + 5 S1 |
| **Hermes Agent** | 50 | 50 | 4 | 0 | 🟡 Estável | 0 (5 P1 fechadas) |
| **CoPaw** | 50 | 31 | 17 | 1 (v1.1.12.post1) | 🟡 Instável | 3 🔴 críticos |
| **NanoBot** | 5 | 20 | 5 | 0 | 🟢 Alta | 2 🔴 |
| **IronClaw** | 34 | 49 | 6 | 0 | 🟡 Estável | 4 Alta |
| **NullClaw** | 4 | 5 | 0 | 0 | 🟢 Alta | 0 |
| **PicoClaw** | 1 | 8 | 7 | 0 | 🟡 Moderada | 1 Alta |
| **Total** | **189** | **213** | **46** | **1** | — | **~15 críticos** |

**Observação:** ZeroClaw, Hermes e CoPaw lideram em volume absoluto, mas **NanoBot e NullClaw** apresentam melhor relação activity/stability. A média de ~24 PRs mergeados por projeto indica maturidade de processo de review em todos os projetos.

---

## 3. Posicionamento do Projeto Principal

### Candidatos a "Projeto Principal" por Critério

| Critério | Líder | Diferencial |
|----------|-------|-------------|
| **Volume de desenvolvimento** | Hermes Agent | 50 issues + 50 PRs, maior base de contributors |
| **Qualidade de releases** | CoPaw | Release pontual v1.1.12.post1 com changelog claro |
| **Segurança** | ZeroClaw | S0 reportado e PRs de hardening em 24h |
| **Velocidade de iteração** | NanoBot | 25 PRs em 24h, maior turnover |
| **Comunidade ativa** | Hermes Agent | RFCs estruturados, i18n (Arabic RTL) |

### Análise Comparativa

**ZeroClaw** destaca-se pela disciplina de segurança com S0 vulnerability reportada publicamente e correção em pipeline — sinal de maturidade em responsible disclosure. Seu PR #7937 implementando limites de memória para subprocessos shell (default 512 MiB) é uma melhoria de produção enterprise que poucos projetos addressam.

**Hermes Agent** apresenta a maior profundidade de integrações (Slack App Home tab, Docker compose helper, Nostr NIP-17) e foco em desktop/TUI com múltiplas correções de OAuth — indicando público-alvo de desenvolvedores que usam CLI como daily driver.

**NanoBot** é o projeto mais agile em volume, com 20 PRs abertos simultaneamente, sugerindo arquitetura modular que permite contribuições paralelas sem conflito — vantajoso para adoção por equipes.

**CoPaw** diferencia-se pelo ecossistema de plugins (DataPaw com 12 skills BI, Bubblewrap sandbox) e foco em Windows — atraindo desenvolvedores que operam em ambientes corporativos Windows-centric.

---

## 4. Focos Técnicos Compartilhados

### Temas que Aparecem em Múltiplos Projetos

| Tema | Projetos Afetados | Severidade | Evidência |
|------|-------------------|------------|-----------|
| **Gestão de contexto/compactação** | CoPaw, NanoBot, Hermes | 🔴 Crítica | CoPaw #5218 (freeze total), NanoBot #4307 (perda de delivery), Hermes #44794 (compressão deleta originais) |
| **OAuth/Autenticação** | Hermes, IronClaw | 🔴 Crítica | Hermes 5 P1 OAuth fechadas; IronClaw #5071 (Google tokens sem refresh) |
| **Multi-canal (WeChat/Feishu)** | NullClaw, NanoBot, PicoClaw, IronClaw | 🟡 Média | 4 projetos com issues ativas de integração sino-falante |
| **Subagentes/Spawn** | NullClaw #964, PicoClaw #3094, NanoBot #190 | 🟡 Média | Padrão multi-agente sendo adotado transversalmente |
| **Segurança de subprocessos** | ZeroClaw, PicoClaw | 🔴 Crítica | ZeroClaw S0 #7947, PicoClaw SSRF #3143 |
| **Windows-specific bugs** | CoPaw, ZeroClaw, Hermes | 🟡 Média | CoPaw ChromaDB segfault, ZeroClaw self-update, Hermes WSL paths |
| **Hardware embarcado (ESP32)** | NullClaw #50, ZeroClaw #7944 | 🟢 Emergente | 2 projetos explorando voice satellite/ESP32 |

### Interpretação

A **gestão de contexto** é o desafio técnico mais urgente, afetando 3 dos 8 projetos com bugs de perda de dados. A compactação agressiva causa desde freeze total (CoPaw) até perda de histórico (Hermes, NanoBot). Soluções emergentes incluem **Headroom compression** (CoPaw PR #5244) e **consolidation_model** dedicado (NanoBot PR #1391), sugerindo convergência para arquiteturas de memória em camadas.

**OAuth** domina a agenda de estabilidade em Hermes e IronClaw, refletindo a maturidade desses projetos em integrações enterprise (Google Calendar, Slack, Teams).

---

## 5. Análise de Diferenciação

### Matriz de Diferenciação

| Dimensão | Hermes | ZeroClaw | NanoBot | CoPaw | IronClaw | NullClaw | PicoClaw |
|----------|--------|----------|---------|-------|----------|----------|----------|
| **Linguagem principal** | Python | Go | Python | Python | Python | Zig | Go |
| **Público-alvo primário** | Devs CLI | DevOps/Enterprise | Pesquisadores | Corp Windows | Multi-tenant SaaS | Embarcados | Micro-serviços |
| **Diferencial técnico** | Desktop/TUI | WASM plugins | Feishu native | Plugin market | Reborn v2 | Streaming Zig | Dependabot-healthy |
| **Maturidade de release** | Informal | Release soon | Informal | v1.1.12 | Informal | Informal | Informal |
| **Foco de segurança** | OAuth | Subprocess/Memory | — | SSL certs | OAuth | — | SSRF |
| **Canal dominante** | CLI/Desktop | Gateway | Web | Windows/Discord | Web/GSuite | WeChat | Feishu/Telegram |

### Análise de Segmentação

**Segmento Enterprise/Segurança:** ZeroClaw e IronClaw competem diretamente com foco em OAuth, automações e multi-tenant. ZeroClaw leva vantagem em segurança de runtime (memory limits, WASM sandboxing). IronClaw tem vantagem em automations workflow.

**Segmento Desenvolvedor CLI:** Hermes e NullClaw visam developers que usam agentes como daily driver. Hermes temDesktop/TUI matured; NullClaw tem performance advantage pelo runtime Zig.

**Segmento Pesquisa/Experimental:** NanoBot e CoPaw exploram capacidades avançadas (multi-agent spawning, ChromaDB vector search, Headroom compression). CoPaw foca em Windows; NanoBot em canais asiáticos.

**Segmento Embarcado/IoT:** NullClaw e ZeroClaw indicam sinais de roadmap para ESP32/voice satellite — ainda embrionário mas em dois projetos simultaneamente.

---

## 6. Tração e Maturidade da Comunidade

### Rankings por Métrica

| Categoria | Ranking (melhor → pior) | Evidência |
|-----------|--------------------------|-----------|
| **Velocidade de release** | CoPaw > NullClaw > PicoClaw | CoPaw release v1.1.12.post1 com changelog estruturado |
| **Volume de contributors** | Hermes (50 PRs) > ZeroClaw (50 PRs) > NanoBot (25 PRs) | Proporcional a issues também |
| **Qualidade de triagem** | Hermes (razão ~1.6:1 open/closed) > NullClaw > NanoBot | Hermes fechou 5 P1 OAuth em 24h |
| **Processo de segurança** | ZeroClaw (S0 público + PRs 24h) > Hermes > others | ZeroClaw é único com processo estruturado |
| **Responsividade a bugs** | PicoClaw (4 dias para #3125) > CoPaw > Hermes | PicoClaw demonstra ciclo rápido |
| **Documentação** | NanoBot (Feishu CLI, Firecrawl) > Hermes > others | NanoBot investe em onboarding |

### Análise de Maturidade

| Nível de Maturidade | Projetos | Características |
|--------------------|----------|-----------------|
| **Consolidação** | ZeroClaw, CoPaw | Releases formais, security process, changelog estruturado |
| **Crescimento rápido** | Hermes, IronClaw | Volume alto, mas releases informais; foco em estabilizar |
| **Iteração acelerada** | NanoBot | 25 PRs em 24h; risco de debt técnico se não consolidar |
| **Validação de conceito** | NullClaw, PicoClaw | Projetos menores, comunidade engaged mas estreita |

**CoPaw** e **ZeroClaw** são os projetos mais maduros em termos de processo, com releases formais e disciplina de segurança. **Hermes** compensa a informalidade com volume e velocidade de resposta a bugs críticos.

---

## 7. Sinais de Tendência

### Tendências Extraídas do Ecossistema

| Tendência | Evidência Transversal | Implicação |
|-----------|----------------------|------------|
| **1. Compressão de contexto como diferencial competitivo** | CoPaw Headroom (#5244), NanoBot consolidation_model (#1391), NullClaw memory controls (#961), Hermes context compression bugs (5 P1) | Modelos de contexto window finitos empurram inovação em gestão de memória; SDKs especializados (Headroom) emergirão como dependências padrão |
| **2. Multi-agente como padrão arquitetural** | NullClaw #190 (spawn subagentes), PicoClaw #3094 (duplicate messages), NanoBot multi-agent issues | Tool-calling em streaming (#964/#965 NullClaw) habilita padrões federados; espera-se convergência de interfaces A2A padronizadas |
| **3. Segurança de subprocessos como requisito enterprise** | ZeroClaw S0 #7947, PicoClaw SSRF #3143, ZeroClaw memory caps #7937 |Após vulnerabilidades de AI agents em produção, hardening de subprocessos será mandatório; Expectativas de SOC2/GDPR forçarão adoção |
| **4. Canais asiáticos como mercado estratégico** | WeChat (NullClaw, PicoClaw), Feishu (NanoBot, IronClaw), DingTalk (CoPaw) | 4/8 projetos investindo em integração sino-falante; janela de oportunidade para localization como feature diferenciadora |
| **5. Desktop/embarcado como próximo frontier** | Hermes Desktop/TUI, NullClaw ESP32, ZeroClaw voice satellite, PicoClaw multi-channel | Interação por voz e hardware físico (ESP32) indicam pivot de "chatbot" para "personal AI OS"; early movers capturarão mercado IoT |
| **6. Concorrência como gargalo de arquitetura** | NanoBot #4408 (hooks não thread-safe), IronClaw concurrent turns (#5085), CoPaw SharedMCPPool (#4849) | Padrões multi-threaded em agentes são subestimados; libraries de concurrency-safe serão necessidade |
| **7. Plugin ecosystems como moat competitivo** | CoPaw DataPaw (#4622), ZeroClaw WASM (#7928), Hermes skills, IronClaw extensions | Startups que buildarem plugin marketplaces (style VSCode) capturarão developers; commoditization de core agent logic inevitable |

### Recomendações Estratégicas

| Stakeholder | Recomendação |
|-------------|--------------|
| **Desenvolvedores** | Priorizar projetos com security process (ZeroClaw) para produção; acompanhar Headroom SDK (CoPaw) para otimização de custos |
| **Decisores técnicos** | Adotar NullClaw para edge/embarcado (performance Zig), IronClaw para automations enterprise, Hermes para desktop CLI |
| **Contribuidores** | Issue #50 (ESP32) e #190 (subagentes) em NullClaw oferecem oportunidade de impacto; CoPaw plugin system é greenfield |
| **Investidores** | Ecossistema maduro para platform play; projetos com i18n forte (WeChat/Feishu) têm TAM subestimado |

---

*Relatório gerado com base em dados públicos de 8 repositórios GitHub em 2026-06-19. Métricas subjectivas baseadas em análise de issues, PRs e padrões comunitários.*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório de Projeto: NanoBot (HKUDS/nanobot)

**Data de referência:** 2026-06-19  
**Período analisado:** Últimas 24 horas

---

## 1. Panorama do Dia

O projeto NanoBot demonstra **altíssima atividade** no período analisado, com **25 PRs atualizados** e **5 issues** em destaque. O ecossistema segue em plena evolução, impulsionado por melhorias no UX do WebUI, expansão de canais de comunicação (WhatsApp, Feishu), e correções críticas no motor de execução e memória. A ausência de releases formais indica que a equipe está consolidando work-in-progress antes de um próximo tag. A taxa de colaboração — com 20 PRs abertos e 5 fechados/merged — sugere um pipeline saudável, embora a concentração de PRs muito recentes (criados em 2026-06-18) demande revisão célere para evitar gargalos.

---

## 2. Lançamentos

**Nenhuma release oficial została registrada nas últimas 24 horas.**

O projeto não publicou novas versões neste período. O último ciclo de atividade concentra-se em preparar contribuições que podem compor uma futura release (provavelmente `0.2.x` ou superior, considerando as referências à documentação `0.2.1` nas issues).

---

## 3. Progresso do Projeto

### PRs fechados/merged nas últimas 24h

| # | PR | Autor | Destaque |
|---|-----|-------|----------|
| **#1391** | `feat: add consolidation_model for cheaper memory consolidation` | dgross13 | Adiciona campo `consolidation_model` em `AgentDefaults`, permitindo rotear decisões de consolidação de memória e heartbeat para um modelo mais barato que o agente principal. Resolve ineficiência de custo em deployments com modelos orquestradores caros (ex.: Opus). |
| **#4403** | `feat(webui): make Firecrawl a keyless Web Data app` | Re-bin | Transforma o preset Firecrawl em integração hosted keyless via MCP endpoint, eliminando necessidade de `FIRECRAWL_API_KEY` local. Simplifica onboarding para scraping web. |
| **#4400** | `ci: skip docs-only changes` | chengyongru | Otimização de CI: pulo automático de pipelines quando push/PR modifica apenas arquivos em `docs/`. Melhora tempo de feedback em ~30-50% dos commits. |
| **#4391** | `feat(feishu): add QR scan-to-create bot CLI login feishu command` | bllackhu | Implementa device-code flow do Feishu/Lark (init → begin → poll → probe) para registro via QR code, eliminando criação manual de apps e caça a credenciais. |

**Análise:** Os PRs merged demonstram foco em **redução de custos operacionais** (#1391), **simplificação de setup** (#4403, #4391) e **eficiência de desenvolvimento** (#4400). A quantidade de PRs abertos (20) vs. fechados (5) indica backlog considerável, mas a qualidade das propostas merged é alta.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento

| # | Título | Comentários | Tipo | Urgência |
|---|--------|-------------|------|----------|
| **#4307** | Post-turn consolidation wipes agent's delivery message | 3 | Bug | 🔴 Alta |
| **#4374** | SOUL.md/USER.md read/write asymmetry em project workspaces | 2 | Bug/Feature | 🟡 Média |
| **#4408** | Nanobot.run() per-run hooks não são concurrency-safe | 1 | Bug | 🔴 Alta |
| **#4390** | Multi-instances para normies (UI simplificada) | 0 | Enhancement | 🟢 Baixa |

### Análise dos temas dominantes

1. **Memória e contexto (#4307, #4374):** A comunidade demonstra preocupação significativa com a **integridade do contexto** em sessões longas. O bug #4307 — onde consolidação pós-turno apaga delivery messages do agente, perdendo referências de follow-up do usuário — é crítico para workflows multi-iteração. O PR #4373 (`fix(memory): preserve delivery context during consolidation`) já endereça parcialmente o problema.

2. **Concorrência e threads (#4408):** O bug de `_extra_hooks` compartilhado sendo mutado é um **defeito de design** que afeta ambientes multi-threaded. A correção proposta em #4409 (passar hooks via `process_direct` em vez de mutar estado compartilhado) é elegante e deve ser priorizada.

3. **UX e acessibilidade (#4390):** O pedido de UI simplificada ("normie-friendly") para multi-instances sinaliza que o projeto está amadurecendo para além de power users. O PR #4399 (`hidden_settings_sections`) atende parcialmente essa demanda.

---

## 5. Bugs e Estabilidade

### Bugs ativos (por severidade)

#### 🔴 Críticos
| # | Título | Criado | Atualizado | Impacto |
|---|--------|--------|------------|---------|
| **#4408** | Nanobot.run() per-run hooks não são concurrency-safe | 2026-06-18 | 2026-06-18 | Corrupção de estado em execuções concorrentes |
| **#4307** | Post-turn consolidation wipes delivery message | 2026-06-12 | 2026-06-18 | Perda de contexto em turnos longos (>40k tokens) |

#### 🟡 Moderados
| # | Título | Criado | Atualizado | Impacto |
|---|--------|--------|------------|---------|
| **#4375** | Git commands blocked by workspace security (CLOSED 2026-06-18) | 2026-06-17 | 2026-06-18 | Comandos git em subdiretórios do workspace都被拒绝 |
| **#4374** | SOUL.md/USER.md read/write asymmetry | 2026-06-16 | 2026-06-18 | Arquivos lidos do projeto mas gravados no workspace padrão |

### Status de #4375 (resolvido)
O bug de comandos git foi **fechado em 2026-06-18**, indicando correção já aplicada ou em PR associado (#4380, referenciado no teste #4393). Recomenda-se verificar se #4393 (`test(exec): cover git commands in workspace subdirectories`) consolida a regressão.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features abertas

| # | Título | Tags | Autor | Sinal estratégico |
|---|--------|------|-------|-------------------|
| **#4399** | hidden_settings_sections no WebUI | enhancement, webui | HaisamAbbas | UI customizável para deployments multi-tenant |
| **#4404** | Extra bwrap bind roots para sandbox | codex | yu-xin-c | Suporte a ferramentas user-level (cargo, pip) |
| **#4402** | Opt-in eager consolidation de memória | codex | yu-xin-c | Desempenho em sessões longas sem custo de inference |
| **#4406** | Serper.dev como provider de web search | — | franciscomaestre | Diversificação de backends de busca |
| **#4407** | LID→phone mappings no WhatsApp startup | — | franciscomaestre | Melhoria de matching em canais móveis |
| **#4396** | Optional Nanobot feature enablement | enhancement, channel, webui | chengyongru | Plugin system para extensibilidade |
| **#4395** | Improve onboard wizard setup flow | documentation, enhancement, channel | chengyongru | Onboarding simplificado |

### Sinais de roadmap identificados

1. **Modularidade/Plugins (#4396):** A adição de feature discovery e enable/disable via CLI e WebUI indica evolução para um **modelo de plugins**, potencialmente preparando terreno para marketplace ou extensões oficiais.

2. **Economia de tokens (#4402, #1391):** O foco em consolidação eager e modelos de consolidação baratos sugere otimização para **custos em produção**, atraindo deployments enterprise.

3. **Canais alternativos (#4407, #4391):** Investimento contínuo em Feishu e WhatsApp indica **estratégia de múltiplos canais** para reduzir dependência de plataformas ocidentais.

---

## 7. Resumo de Feedback dos Usuários

### Dores reais identificadas

| Dor | Evidence | Severidade |
|-----|----------|------------|
| **Perda de contexto em sessões longas** | #4307: consolidação pós-turno apaga delivery messages | 🔴 Alta |
| **Configuração complexa para multi-instances** | #4390: "I want to be able to hide UI settings/show option..." | 🟡 Média |
| **Assimetria de leitura/escrita em workspaces** | #4374: AGENTS.md/SOUL.md/USER.md lidos do projeto, gravados no default | 🟡 Média |
| **Comandos git bloqueados em subdiretórios** | #4375 (resolvido) | 🟡 Média |
| **Hooks não-thread-safe** | #4408: `_extra_hooks` compartilhado | 🔴 Alta |

### Cenários de uso em destaque

- **Desenvolvedor solo com múltiplos projetos** (#4390): Necessita de instâncias isoladas por pasta, cada uma com `config.json` próprio, sem ruído de UI.
- **Agente em turnos longos** (#4307): Usuários que executam tarefas complexas acumulam >100k tokens antes da consolidação, perdendo histórico crítico.
- **Enterprise multi-tenant** (#4399): Administradores querem UI simplificada para usuários não-técnicos em deployments compartilhados.

---

## 8. Backlog que Merece Atenção

### Issues sem resposta há >48h

| # | Título | Criado | Dias em aberto | Prioridade |
|---|--------|--------|----------------|------------|
| **#4374** | SOUL.md/USER.md read/write asymmetry | 2026-06-16 | 3 dias | 🟡 Média |
| **#4390** | Multi-instances para normies | 2026-06-17 | 2 dias | 🟢 Baixa |
| **#4373** | Preserve delivery context during consolidation | 2026-06-16 | 3 dias | 🔴 Alta (PR associado aberto) |

### PRs parados ou sem revisão

| # | Título | Criado | Status | Risco |
|---|--------|--------|--------|-------|
| **#4409** | fix(sdk): pass per-run hooks to process_direct | 2026-06-18 | Draft | Baixo (em elaboração pelo autor) |
| **#4397** | fix(runner): system hint para mid-turn user messages | 2026-06-18 | Invalid | ⚠️ Marcado invalid; verificar se necessário realocar |
| **#4353** | fix(transcription): WAV 16k mono antes de STT | 2026-06-15 | Open (4 dias) | 🟡 Média — aguarda review |

### Recomendações para mantenedores

1. **Priorizar #4409 + #4408:** Bug de concorrência é crítico para produção; a correção draft precisa de review urgente.
2. **Revisar #4374 + #4387:** O PR #4387 (`fix(context): fall back to default memory bootstrap`) parece endereçar parcialmente #4374; unificar esforços.
3. **Validar #4353:** Transcrição de áudio WhatsApp quebrando para AssemblyAI afeta canais de voz; PR parado há 4 dias.
4. **Confirmar resolução de #4375:** Verificar se teste #4393 cobre adequadamente a regressão e fechar o loop.

---

## Métricas Consolidada do Período

| Indicador | Valor |
|-----------|-------|
| Issues abertas/ativas | 4 |
| Issues fechadas | 1 |
| PRs abertos | 20 |
| PRs fechados/merged | 5 |
| Novas releases | 0 |
| Bugs críticos ativos | 2 (#4307, #4408) |
| Features em pipeline | 7+ |
| Taxa de atividade | 🔥 Muito alta |

---

*Relatório gerado automaticamente com base em dados públicos do GitHub (HKUDS/nanobot) em 2026-06-19.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-06-19

## 1. Panorama do Dia

O Hermes Agent apresenta **alta atividade comunitária** em 19 de junho de 2026, com 50 issues e 50 PRs atualizados nas últimas 24 horas. O projeto não teve releases formais, mantendo-se em desenvolvimento intensivo de correções e funcionalidades. A base de código reflete preocupação com **estabilidade do desktop/TUI**, **integração OAuth com Anthropic** e **preservação de contexto conversacional**. A razão open/closed de ~1,6:1 nas issues sugere pipeline saudável de triagem.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24 horas.**

O projeto encontra-se em período de desenvolvimento intensivo, sem tag de versão publicada. A versão mais recente mencionada nos relatórios de bugs é **v0.16.0 (2026.6.5)**.

---

## 3. Progresso do Projeto

### PRs Fechados/Merged (Principais)

| # | Descrição | Impacto |
|---|-----------|---------|
| [#48651](https://github.com/NousResearch/hermes-agent/pull/48651) | **fix(codex)**: Resolve codex.CMD via `shutil.which` antes do subprocess spawn | Corrige falha em Windows onde `npm i -g @openai/codex` instala `codex.CMD` que não era reconhecido pelo PATHEXT |
| [#48573](https://github.com/NousResearch/hermes-agent/pull/48573) | **fix(file-tools)**: Expand `~` via profile HOME, não gateway process HOME | Corrige path injection quando Hermes roda sob Docker/systemd/s6 com HOME divergente |
| [#48657](https://github.com/NousResearch/hermes-agent/pull/48657) | **fix(npm)**: Lock react-simple-icons para 13.11.1 | Elimina warnings de engines em builds desktop |
| [#37546](https://github.com/NousResearch/hermes-agent/pull/37546) | **fix(desktop)**: Adiciona Hindsight memory provider ao dropdown | Melhora seleção de provider de memória na UI desktop |

### PRs Abertos (Alta Prioridade)

| # | Descrição | Status |
|---|-----------|--------|
| [#48652](https://github.com/NousResearch/hermes-agent/pull/48652) | **fix(security)**: Isola dashboard profile backends de leitura cross-profile | **P2** — Corrigiriaenumeração de sessões de outros perfis via `?profile=all` |
| [#48656](https://github.com/NousResearch/hermes-agent/pull/48656) | **fix(tui)**: Reap orphaned slash_worker processes no gateway startup | **P2** — Elimina zombies em Windows kill-on-close |
| [#48664](https://github.com/NousResearch/hermes-agent/pull/48664) | **fix(oneshot)**: Run memory-provider teardown em `-z` | **P2** — Evita SIGABRT (134) ao shutdown |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

**1. [#44022](https://github.com/NousResearch/hermes-agent/issues/44022)** — Desktop/TUI `session.resume` falha com "No LLM provider configured" (10 comentários, P2)
- **Problema**: Sessões antigas que armazenaram apenas `billing_provider` bare não conseguem resume
- **Contexto**: Usuários com providers custom perdem histórico de chat
- **Status**: Closed — indica correção em andamento

**2. [#47714](https://github.com/NousResearch/hermes-agent/issues/47714)** — Desktop/TUI usa OpenRouter ao invés do custom provider (7 comentários, 👍 4, P2)
- **Problema**: Sessões new Desktop/TUI resolvem requests através de OpenRouter em vez do custom provider configurado
- **Discrepância**: CLI e Feishu gateway funcionam corretamente
- **Status**: Closed — indica resolução

**3. [#40166](https://github.com/NousResearch/hermes-agent/issues/40166)** — Desktop app sem controle de zoom/font size (5 comentários, 👍 6, P3)
- **Problema**: Atalhos Cmd+Plus/Minus/0 não funcionam; pinch-to-zoom inoperante
- **Demanda**: Ajustes de acessibilidade para telas de alta resolução
- **Status**: Open

---

## 5. Bugs e Estabilidade

### P1 — Críticos (5 issues fechadas, todas relacionadas a OAuth Anthropic)

| # | Bug | Severidade | Status |
|---|-----|------------|--------|
| [#48176](https://github.com/NousResearch/hermes-agent/issues/48176) | OAuth Pro/Max/Team rejeitados com HTTP 400 "third-party / extra usage" | P1 | Closed |
| [#47964](https://github.com/NousResearch/hermes-agent/issues/47964) | `_OAUTH_TOKEN_URL` aponta para console.anthropic.com (404) | P1 | Closed |
| [#47965](https://github.com/NousResearch/hermes-agent/issues/47965) | `fetch_models` usa `x-api-key` apenas — OAuth tokens 401 | P1 | Closed |
| [#47966](https://github.com/NousResearch/hermes-agent/issues/47966) | PKCE redirect_uri mismatch: console vs platform.claude.com | P1 | Closed |
| [#32243](https://github.com/NousResearch/hermes-agent/issues/32243) | OAuth Pro/Max retorna "out of extra usage" imediatamente após login | P1 | Closed |

**Análise**: Todas as 5 issues P1 de OAuth Anthropic foram fechadas no período, indicando correção massiva na integração OAuth.

### P1 — Perda de Dados em Context Compression

| # | Bug | Severidade | Status |
|---|-----|------------|--------|
| [#44794](https://github.com/NousResearch/hermes-agent/issues/44794) | `/compress` deleta mensagens originais quando session rotation falha | P1 | Closed |
| [#39704](https://github.com/NousResearch/hermes-agent/issues/39704) | Session Hygiene compression sobreescreve originais quando `_session_db` é None | P1 | Closed |
| [#47202](https://github.com/NousResearch/hermes-agent/issues/47202) | Context compression perde unflushed messages (end_session sem flush) | P1 | Closed |
| [#46122](https://github.com/NousResearch/hermes-agent/issues/46122) | `_flush_messages_to_session_db` stale cursor após repair_message_sequence | P1 | Closed |
| [#39548](https://github.com/NousResearch/hermes-agent/issues/39548) | Compression token savings ignorado quando message count inalterado | P1 | Closed |

**Análise**: Padrão de bugs relacionados a **compressão de contexto e preservação de histórico** indica fragilidade na arquitetura de session hygiene. Todas fechadas, sugerindo correção unificada.

### P2 — Desktop/TUI

| # | Bug | Severidade |
|---|-----|------------|
| [#44022](https://github.com/NousResearch/hermes-agent/issues/44022) | session.resume falha com "No LLM provider configured" | P2 |
| [#47714](https://github.com/NousResearch/hermes-agent/issues/47714) | Desktop/TUI usa OpenRouter ao invés do custom provider | P2 |
| [#38478](https://github.com/NousResearch/hermes-agent/issues/38478) | camofox browser screenshots são cropados/zoomed | P2 |
| [#40137](https://github.com/NousResearch/hermes-agent/issues/40137) | Terminal wrapper injeta Windows paths em WSL | P2 |
| [#48629](https://github.com/NousResearch/hermes-agent/issues/48629) | memory tool retorna todas entries em cada write (já corrigido em main) | P2 |
| [#48649](https://github.com/NousResearch/hermes-agent/issues/48649) | Cron jobs não são profile-aware: skills/storage usam paths globais | P2 |
| [#48628](https://github.com/NousResearch/hermes-agent/issues/48628) | lazy_deps executa ensurepip→pip bootstrap em NixOS (~20s/start) | P2 |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Abertas com Maior Potencial

| # | Feature | Prioridade | Sinais de Roadmap |
|---|---------|------------|-------------------|
| [#41889](https://github.com/NousResearch/hermes-agent/issues/41889) | Cross-profile subagent support em `delegate_task` | P3 | PR [#48644](https://github.com/NousResearch/hermes-agent/pull/48644) em aberto implementando |
| [#48011](https://github.com/NousResearch/hermes-agent/issues/48011) | Mission/Project source-of-truth primitive | P3 | Consolidação de memory, skills, goals, todos em conceito unificado |
| [#40166](https://github.com/NousResearch/hermes-agent/issues/40166) | Zoom/font size control no Desktop | P3 | Acessibilidade para altas resoluções |
| [#48190](https://github.com/NousResearch/hermes-agent/issues/48190) | Session ↔ Workspace binding (cwd + repo tracking) | P3 | Melhora DX para workflows multi-projeto |
| [#40297](https://github.com/NousResearch/hermes-agent/issues/40297) | Workspace selecionável por sessão (não só launch-time) | P3 | Desktop como app multi-projeto |
| [#45619](https://github.com/NousResearch/hermes-agent/pull/45619) | Arabic localization + RTL support | P3 | i18n expansion |

### Funcionalidades em Desenvolvimento (PRs)

- **Photon/iMessage sidecar files** inclusão em wheel/sdist ([#48661](https://github.com/NousResearch/hermes-agent/pull/48661))
- **Slack App Home tab** com bot intro e command list ([#48650](https://github.com/NousResearch/hermes-agent/pull/48650))
- **Docker compose helper script** para operações comuns ([#48636](https://github.com/NousResearch/hermes-agent/pull/48636))
- **Hermes mesh** — fleet provisioner CLI para MQTT mesh ([#29460](https://github.com/NousResearch/hermes-agent/pull/29460))
- **Nostr NIP-17 DM adapter** para gateway ([#16769](https://github.com/NousResearch/hermes-agent/pull/16769))

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Categoria | Problema | Frequência |
|-----------|----------|------------|
| **Desktop/TUI** | Perda de contexto ao resumir sessões com providers custom | Alta (2 issues P2) |
| **OAuth Anthropic** | Falha total em Pro/Max/Team credentials | Crítica (5 issues P1) |
| **Preservação de histórico** | Mensagens perdidas durante compressão/cleanup | Crítica (5 issues P1) |
| **Desktop UX** | Sem controle de zoom, processos zombies, zoom reset | Média (4 issues P3) |
| **Cron/Profile** | Jobs não respeitam perfil, skills/storage isolados | Média (1 issue P2) |

### Cenários de Uso Reportados

1. **Usuários multi-provider**: Configuram providers custom para работы, mas Desktop/TUI falham em usar corretamente
2. **Longas conversas**: Centenas de mensagens perdidas após compressão
3. **Termux + WhatsApp**: Integração mobile para envio em grupo (guia 1-file)
4. **WSL + Windows**: Terminal injetando paths Windows em ambiente Linux
5. **NixOS/Homebrew**: 20s de delay ao startup por bootstrap pip desnecessário

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Aguardando Triagem

| # | Issue | Idade | Prioridade | Observação |
|---|-------|-------|------------|------------|
| [#33055](https://github.com/NousResearch/hermes-agent/issues/33055) | qwen3.7-max via OpenCode Go retorna 401 | ~22 dias | P3 | Provider-specific auth issue |
| [#38854](https://github.com/NousResearch/hermes-agent/issues/38854) | Zoom persistido por hash route, não app-wide | ~15 dias | P3 | UX fragmentation |
| [#48011](https://github.com/NousResearch/hermes-agent/issues/48011) | Mission/Project primitive | ~2 dias | P3 | Feature request, sem feedback |
| [#29460](https://github.com/NousResearch/hermes-agent/pull/29460) | Hermes mesh CLI | ~30 dias | P3 | PR em aberto, aguardando review |

### Issues com Alto Thumbs Up (Sinal de Demanda)

| # | Issue | 👍 | Tema |
|---|-------|----|------|
| [#40166](https://github.com/NousResearch/hermes-agent/issues/40166) | Desktop zoom/font size | 6 | Acessibilidade |
| [#40297](https://github.com/NousResearch/hermes-agent/issues/40297) | Workspace per session | 5 | Multi-projeto workflow |
| [#47714](https

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório de Projeto: PicoClaw
## Data: 2026-06-19 | github.com/sipeed/picoclaw

---

## 1. Panorama do Dia

O ecossistema PicoClaw apresenta **alta atividade de manutenção** nesta data, com 17 eventos totais (2 issues + 15 PRs). O projeto demonstra vigoroso ritmo de atualizações de dependências via Dependabot (12 dos 15 PRs), enquanto a equipe principal concentra-se em **correções de bugs críticos** — notadamente dois problemas que afetam diretamente a experiência do usuário: mensagens duplicadas em sub-agentes assíncronos e falhas silenciosas na busca web. A ausência de releases formais indica fase de estabilização pré-lançamento. A comunidade está engajada, com issues com标签 "stale" sugerindo necessidade de triagem.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto não publicou novas versõesTagged desde o último período reportado. Isso contrasta com o volume de atividade de PRs, sugerindo que as contribuições estão em pipeline de review ou aguardando ciclos de release mais amplos.

> ℹ️ *Nota: O release mais recente anterior pode ser verificado no [repositório principal](https://github.com/sipeed/picoclaw/releases).*

---

## 3. Progresso do Projeto

### PRs Merged/Fechadas Hoje (7)

| # | PR | Descrição | Impacto |
|---|-----|-----------|---------|
| [#3144](https://github.com/sipeed/picoclaw/pull/3144) | `actions/checkout` v6→v7 | Atualização de ação GitHub CI/CD | Manutenção, compatibilidade |
| [#3146](https://github.com/sipeed/picoclaw/pull/3146) | `golang.org/x/term` v0.43.0→v0.44.0 | Bump dependência Go | Manutenção |
| [#3147](https://github.com/sipeed/picoclaw/pull/3147) | `azure-sdk-for-go/azidentity` v1.13.1→v1.14.0 | Bump SDK Azure | Manutenção, segurança |
| [#3149](https://github.com/sipeed/picoclaw/pull/3149) | `anthropic-sdk-go` v1.46.0→v1.50.2 | Bump SDK Anthropic (+4 versões) | **Importante** —追上最新版 Claude |
| [#3148](https://github.com/sipeed/picoclaw/pull/3148) | `golang.org/x/sys` v0.45.0→v0.46.0 | Bump syscall Go | Manutenção |
| [#3107](https://github.com/sipeed/picoclaw/pull/3107) | `copilot-sdk/go` v0.2.0→v1.0.1 | Bump SDK Copilot | **Importante** —追上 API stable |
| [#3141](https://github.com/sipeed/picoclaw/pull/3141) | **Diagnóstico Brave Search** | Logging para falhas silenciosas | **Crítico para debug** |

**Destaque Especial:**
O PR [#3141](https://github.com/sipeed/picoclaw/pull/3141) adiciona **logging diagnóstico** para a API Brave Search, endereçando o Issue #3125. Anteriormente, respostas vazias eram interpretadas silenciosamente como "sem resultados" — agora haverá rastreamento para diagnóstico de mudanças de formato ou respostas não-padrão.

---

## 4. Temas Quentes da Comunidade

### Issue #3094 — Bug: Mensagens Duplicadas em Sub-Agentes Spawn
**Status:** 🟡 ABERTA | **Comentários:** 2 | **Labels:** `bug`, `subagent`, `duplicate-messages`

**Problema:** Quando um sub-agente assíncrono (via `spawn`) completa sua execução, o usuário recebe **duas mensagens idênticas**:
1. Resultado cru/não formatado do sub-agente
2. Resultado formatado pelo agente principal

**Causa Raiz Identificada:** O campo `ForUser` está sendo usado simultaneamente para push direto e para agregação pelo agente principal.

**PR Correlato:** [#3142](https://github.com/sipeed/picoclaw/pull/3142) — `fix(spawn): clear ForUser in sub-turn ToolResult` (ABERTO)

**Impacto:** Afeta canais como **Feishu e Telegram** onde usuários veem spam de mensagens duplicadas.

---

### Issue #3125 — Bug: web_search Falha Silenciosamente com Brave API
**Status:** 🟢 FECHADA | **Comentários:** 0 | **Resolution:** PR #3141

**Problema:** Após migração de chaves de API para `.security.yml`, a ferramenta `web_search` (usando Brave API) parou de funcionar silenciosamente — retornava `"No results for: [query]"` sem erro aparente.

**Solução:** Adição de logging diagnóstico em [#3141](https://github.com/sipeed/picoclaw/pull/3141).

---

## 5. Bugs e Estabilidade

### Bug Crítico em Andamento

| #3094 | **[Bug] Mensagens duplicadas em sub-agentes spawn** | Severidade: **ALTA** |
|-------|----------------------------------------------------|----------------------|
| Canal afetado | Feishu, Telegram | |
| Trigger | Uso da tool `spawn` para tarefas assíncronas | |
| Workaround | Nenhum documentado | |
| Fix draft | PR [#3142](https://github.com/sipeed/picoclaw/pull/3142) em revisão | |

### Bug Resolvido

| #3125 | **web_search falha silenciosamente com Brave API** | Severidade: **MÉDIA** |
|-------|---------------------------------------------------|----------------------|
| Causa | Migração para `.security.yml` quebrou integração | |
| Solução | PR [#3141](https://github.com/sipeed/picoclaw/pull/3141) merged | |

### PR de Segurança Aberto

| [#3143](https://github.com/sipeed/picoclaw/pull/3143) | **Fix SSRF guard bypass (ISATAP literals)** | Severidade: **ALTA** |
|-------|--------------------------------------------|----------------------|
| Problema | `web_fetch` vulnerável a bypass via ISATAP IPv6 literals com IPv4 privado | |
| Autor | lc6464 | |

---

## 6. Pedidos de Features e Sinais de Roadmap

### PRs Abertos com Potencial de Feature

| #3104 | **[Feature?] shadcn v4.7.0 → v4.11.0** | Frontend |
|-------|---------------------------------------|----------|
| Impacto | Atualização significativa do sistema de UI (diferença de ~7 versões) | |
| Indica | Evolução da interface web do agente | |

### Sinais de Evolução de API

**Integração Copilot SDK:**
- PRs [#3145](https://github.com/sipeed/picoclaw/pull/3145) e [#3107](https://github.com/sipeed/picoclaw/pull/3107) atualizam `copilot-sdk/go` de **v0.2.0 para v1.0.2** (major bump)
- Isso sugere **ampliação das capacidades de integração** com GitHub Copilot no pipeline do agente.

**SDK Anthropic atualizado para v1.50.2:**
- Indica suporte contínuo às versões mais recentes da API Claude.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Dor | Frequência | Impacto |
|-----|-----------|---------|
| Mensagens duplicadas ao usar sub-agentes | 1 reporte (Issue #3094) | **Alto** — degrada experiência em canais messengers |
| Falha silenciosa do web_search | 1 reporte (Issue #3125) | **Médio** — erode confiança na ferramenta |
| Falta de visibilidade em erros | Relatado indiretamente via #3141 | **Médio** — comunidade pediu mais logging |

### Cenários de Uso Emergent

1. **Agentes Assíncronos com Spawn:** Usuários estão criando fluxos complexos com sub-agentes que completam em background — indica adoção de padrões Multi-Agent.
2. **Busca Web como Tool:** O uso da Brave API como ferramenta de busca mostra integração de capacidades de pesquisa em tempo real.
3. **Multi-canal:** Suporte a Feishu, Telegram indica foco em mercados asiáticos e ocidentais.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta há >7 dias

| #3094 | **Bug: Mensagens duplicadas em spawn** | Criado: 2026-06-10 | 9 dias sem resolução |
|-------|---------------------------------------|---------------------|----------------------|
| Status | ABERTA, vinculada a PR #3142 draft | | |

### PRs "Stale" Pendentes de Review

| # | PR | Idade | Dependência |
|---|-----|-------|-------------|
| [#3105](https://github.com/sipeed/picoclaw/pull/3105) | eslint 10.2.1→10.4.1 | 8 dias | Frontend |
| [#3104](https://github.com/sipeed/picoclaw/pull/3104) | shadcn 4.7.0→4.11.0 | 8 dias | Frontend |
| [#3103](https://github.com/sipeed/picoclaw/pull/3103) | typescript-eslint 8.59.3→8.61.0 | 8 dias | Frontend |
| [#3101](https://github.com/sipeed/picoclaw/pull/3101) | vite 8.0.13→8.0.16 | 8 dias | Frontend |
| [#3100](https://github.com/sipeed/picoclaw/pull/3100) | @vitejs/plugin-react 6.0.1→6.0.2 | 8 dias | Frontend |

**Recomendação:** Revisar e merger ou fechar os 5 PRs stale do frontend para evitar dependências desatualizadas.

---

## Métricas Consolidada do Dia

| Categoria | Valor |
|-----------|-------|
| Issues abertas/ativas | 1 |
| Issues fechadas | 1 |
| PRs abertas | 8 |
| PRs fechadas/merged | 7 |
| Releases | 0 |
| Total eventos | 17 |
| Bugs críticos | 1 (em fix draft) |
| Security fixes | 1 (SSRF bypass) |

---

**Classificação de Saúde:** 🟡 **MODERADA** — Projeto ativo com manutenção robusta de dependências, mas com bug crítico em aberto afetando UX e 5 PRs stale requieren atenção. A equipe demonstra ritmo de resposta rápido (bug #3125 resolvido em 4 dias).

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-06-19

## 1. Panorama do dia

O IronClaw apresenta **alta atividade de desenvolvimento** no dia de hoje, com 34 issues e 49 PRs atualizados nas últimas 24 horas. O foco principal continua sendo a estabilização e evolução do **Reborn** (v2), evidenciado por PRs de grande porte como execução concorrente de turns e redesign da página de automações. Não houve lançamentos de novas versões, indicando trabalho incremental de preparação. A saúde geral do projeto permanece ativa, porém com **alguns problemas de estabilidade críticos** (E2E nightly falhando, bugs de OAuth) que demandam atenção imediata.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24 horas.**

O projeto está em fase de desenvolvimento intensivo, sem tags de release publicadas hoje. O último ciclo de release (v0.29.1) foi mencionado em issues de staging, mas o foco atual é preparação de funcionalidades para a próxima versão.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados (6)

| PR | Título | Escopo | Impacto |
|---|---|---|---|
| [#5055](https://github.com/nearai/ironclaw/pull/5055) | fix(webui): soften automation run errors | WebUI | Melhora UX de erros em automations (agora "Needs attention" em vez de erro vermelho terminal) |
| [#5018](https://github.com/nearai/ironclaw/pull/5018) | feat(reborn): Projects — WebChat v2 endpoints (4/5) | Backend/API | Endpoints HTTP completos para CRUD de projects |
| [#5067](https://github.com/nearai/ironclaw/pull/5067) | fix(reborn): keep OAuth auth gates visible without auth URL | OAuth/Auth | Corrige fallback incorreto para prompt genérico quando URL de autorização indisponível |
| [#5070](https://github.com/nearai/ironclaw/pull/5070) | Auth gate cancel after approval can replay OAuth prompt | Auth | Corrige replay infinito de OAuth após cancelamento |
| [#5079](https://github.com/nearai/ironclaw/pull/5079) | Add files via upload (template) | Docs | Aporte de documentação |
| [#5077](https://github.com/nearai/ironclaw/issues/5077) (via #5077) | Invalid chat URLs redirect to new chat | UX/Redirect | Melhoria de navegação em URLs inválidas |

### PRs Abertos de Destaque (10)

| PR | Título | Tamanho | Risco | Prioridade |
|---|---|---|---|---|
| [#5085](https://github.com/nearai/ironclaw/pull/5085) | feat(reborn): concurrent turn execution via TurnRunScheduler | XL | Low | **Crítica** — resolve gargalo de execução serial |
| [#5084](https://github.com/nearai/ironclaw/pull/5084) | Redesign the automations page | XL | Low | UX — nova interface mais densa |
| [#5081](https://github.com/nearai/ironclaw/pull/5081) | [codex] Add hosted single-tenant Postgres profile | XL | Low | Infra — novo profile para hospedagem |
| [#5065](https://github.com/nearai/ironclaw/pull/5065) | feat(triggers): fire-once (one-shot) scheduled triggers | XL | Low | Feature — triggers de uso único |
| [#5063](https://github.com/nearai/ironclaw/pull/5063) | feat(reborn): per-turn auto-approve resolution + never-auto-approve | XL | Low | Segurança — controle granular de auto-aprovação |
| [#5072](https://github.com/nearai/ironclaw/pull/5072) | feat(reborn): generic host-ingress for Slack | XL | Medium | Integração — padronização Slack |
| [#5030](https://github.com/nearai/ironclaw/pull/5030) | fix(reborn): wire production trigger poller | XL | Medium | Infra — poller em produção |
| [#4989](https://github.com/nearai/ironclaw/pull/4989) | feat(admin): persist Engine V2 LLM usage | XL | Low | Admin — tracking de uso V2 |
| [#4829](https://github.com/nearai/ironclaw/pull/4829) | ci: retire dormant reborn-integration workflow | L | Medium | CI — consolidação de workflows |
| [#5082](https://github.com/nearai/ironclaw/pull/5082) | fix(reborn): bound approval command previews | XL | Low | UX — truncate comandos longos em approvals |

---

## 4. Temas Quentes da Comunidade

### Issues com Mais Comentários

1. **[#4761](https://github.com/nearai/ironclaw/issues/4761)** — "Agent stops after repeated tool failures instead of recovering" (5 comentários, CLOSED)
   - **Demanda:** Recuperação automática após falhas consecutivas de tools
   - **Status:** Resolvido — implica que o fluxo de recuperação foi endereçado

2. **[#4907](https://github.com/nearai/ironclaw/issues/4907)** — "Google OAuth flow completes but run fails instead of resuming" (3 comentários, CLOSED)
   - **Demanda:** Fluxo OAuth deve retomar execução após autenticação
   - **Status:** Resolvido

3. **[#4942](https://github.com/nearai/ironclaw/issues/4942)** — "Tool calls failed won't appear until re-fetch" (3 comentários, CLOSED)
   - **Demanda:** Feedback imediato de falhas de tools via SSE
   - **Status:** Resolvido

4. **[#1520](https://github.com/nearai/ironclaw/issues/1520)** — "qwen error" (3 comentários, OPEN)
   - **Demanda:** Suporte ao provider qwen3.5-plus com erro 405
   - **Sinais:** Problema antigo (Mar 2026) sem resolução — pode indicar necessidade de revisão de provider

5. **[#2800](https://github.com/nearai/ironclaw/issues/2800)** — "Engine v2 default flip — umbrella tracker" (2 comentários, CLOSED)
   - **Demanda:** Mapeamento de blockers para Engine v2 como default
   - **Status:** Em andamento — confirma foco em V2

### Padrões Identificados

- **OAuth/GSuite:** 6+ issues relacionadas a Google OAuth (token refresh, visibility, flow)
- **WebUI/Reborn:** 10+ issues de UX, approvals e automations
- **WeCom:** 3+ issues de canal (approval, títulos, onboarding) — plataforma parece secundária
- **Stability:** E2E nightly falhando consistentemente

---

## 5. Bugs e Estabilidade

### Alta Severidade (Risk: High / Medium + Bugs)

| Issue | Título | Escopo | Status | Link |
|---|---|---|---|---|
| #5071 | **[HIGH]** Google OAuth tokens não são refreshados proativamente | OAuth/Secrets | OPEN | [Link](https://github.com/nearai/ironclaw/issues/5071) |
| #4108 | **E2E Nightly falhando** consistentemente | CI | OPEN | [Link](https://github.com/nearai/ironclaw/issues/4108) |
| #4992 | SSO access mismatch causa automations falhando antes de thread creation | OAuth/Railway | OPEN | [Link](https://github.com/nearai/ironclaw/issues/4992) |
| #1520 | Qwen provider retorna 405 Method Not Allowed | LLM | OPEN | [Link](https://github.com/nearai/ironclaw/issues/1520) |

### Média Severidade

| Issue | Título | Escopo | Link |
|---|---|---|---|
| #5078 | Approval modal com comandos longos domina a tela | UX/WebUI | [Link](https://github.com/nearai/ironclaw/issues/5078) |
| #5060 | GitHub analysis workflows entram em loops de approval | Extensions | [Link](https://github.com/nearai/ironclaw/issues/5060) |
| #4502 | WeCom approval reply não funciona (y/yes/always) | WeCom/Channel | [Link](https://github.com/nearai/ironclaw/issues/4502) |
| #4918 | Logs de automations mostram 0 entries mesmo após runs | WebUI | [Link](https://github.com/nearai/ironclaw/issues/4918) |

### Bugs Recentemente Resolvidos

- [#4704](https://github.com/nearai/ironclaw/issues/4704) — builtin.http approval loop sem detalhes acionáveis
- [#4823](https://github.com/nearai/ironclaw/issues/4823) — Sem feedback UI ao deletar conversa em estado "Running"
- [#4904](https://github.com/nearai/ironclaw/issues/4904) — Google Calendar dispatcha actions duplicadas
- [#5007](https://github.com/nearai/ironclaw/issues/5007) — Skills validation error não limpa após correção

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Em Desenvolvimento

| PR | Feature | Escopo | Link |
|---|---|---|---|
| #5085 | **Execução concorrente de turns** (TurnRunScheduler) | Core/Reborn | [Link](https://github.com/nearai/ironclaw/pull/5085) |
| #5065 | Fire-once triggers (one-shot) | Automations | [Link](https://github.com/nearai/ironclaw/pull/5065) |
| #5084 | **Redesign da página de Automations** | WebUI | [Link](https://github.com/nearai/ironclaw/pull/5084) |
| #5063 | Per-turn auto-approve + never-auto-approve hard floor | Security/Approvals | [Link](https://github.com/nearai/ironclaw/pull/5063) |
| #5019 | Projects page completa (5/5) | WebUI | [Link](https://github.com/nearai/ironclaw/pull/5019) |

### Novas Demandas Registradas

| Issue | Feature | Escopo | Link |
|---|---|---|---|
| #5071 | Proactive Google OAuth token refresh | OAuth | [Link](https://github.com/nearai/ironclaw/issues/5071) |
| #5069 | Automation UX Redesign (pendente) | WebUI | [Link](https://github.com/nearai/ironclaw/issues/5069) |
| #5009 | Slack OAuth path para DM-parity | Slack/Security | [Link](https://github.com/nearai/ironclaw/issues/5009) |
| #5083 | Triggers unbounded completed-row scan | Database/Performance | [Link](https://github.com/nearai/ironclaw/issues/5083) |

### Indicadores de Roadmap

- **Engine v2 como default** (#2800) — trabalho em andamento
- **Postgres single-tenant profile** (#5081) — preparação para hospedagem
- **Slack como generic host-ingress** (#5072) — refatoração de integrações
- **Projects (full CRUD)** — feature quase completa (#5019)

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais Identificadas

1. **OAuth/Auth Fragil**
   - Usuários precisam reautenticar frequentemente (Google tokens expiram em ~1h)
   - Fluxos OAuth não retomam execução automaticamente
   - Auth gates somem da UI quando URL indisponível

2. **UX de Approvals Problemática**
   - Comandos longos dominam modal de aprovação
   - Loop infinito em some workflows (GitHub analysis)
   - WeCom não responde a y/yes/always

3. **Automations Imaturas**
   - Logs não aparecem mesmo após runs
   - UI mostra "No runs" mesmo com runs executados
   - Falta feedback visual claro de estados

4. **Dogfooding Revela Friction**
   - [#4879](https://github.com/nearai/ironclaw/issues/4879) tracking issues locais de Reborn WebUI
   - Setup de extensões confuso para novos usuários
   - Model provider setup (NEARAI_MODEL=auto) causa hang silencioso

### Cenários de Uso Reportados

- **QA Engineer:** Usa agente para analisar issue trackers e identificar issues prontas para validação
- **Desenvolvedores locais:** Usam Reborn como agent diário ("dogfooding")
- **Integração GSuite:** Google Calendar/Gmail com OAuth flow
- **Automations:** Scheduled triggers para workflows repetitivos

### Satisfação/Insatisfação

| Aspecto | Sentimento | Observação |
|---|---|---|
| Engine v2 capabilities | Positivo | Roadmap claro, trabalho consistente |
| Reborn WebUI | Neutro/Preocupado | MUITAS issues UX, mas trabalho ativamente |
| OAuth/GSuite | Frustrado | Múltiplos bugs afetando experiência core |
| CI/Quality | Preocupado | E2E nightly falhando — risco de regressões |

---

## 8. Backlog que Merece Atenção

### Issues Abertas há >30 dias (Long-Running)

| Issue | Título | Criado | Comentários | Prioridade |
|---|---|---|---|---|
| [#1520](https://github.com/nearai/ironclaw/issues/1520) | qwen error (405) | 2026-03-21 | 3 | **Alta** — provider quebrado |
| [#4193](https://github.com/nearai/ironclaw/issues/4193) | WeCom setup UX lacks onboarding | 2026-05-28 | 0 | Baixa — WeCom secundário |
| [#4500](https://github.com/nearai/ironclaw/issues/4500) | Channel onboarding event written to wrong conversation | 2026-06-05 | 0 | Média |
| [#4502](https://github.com/nearai/ironclaw/issues/4502) | WeCom approval reply doesn't work | 2026-06-05 | 1 | Média |
| [#4505](https://github.com/nearai/ironclaw/issues/4505) | WeCom conversation titles indistinguishable | 2026-06-05 | 0 | Baixa |

### PRs Abertos Sem Revisão Aparente

| PR | Título | Criado | Tamanho | Link |
|---|---|---|---|---|
| #5080 | Add files via upload | 2026-06-18 | XS | [Link](https://github.com/nearai/ironclaw/pull/5080) |
| #4990 | fix(reborn): NEAR AI MCP ready state projection | 2026-06-16 | L | [Link](https://github.com/nearai/ironclaw/pull/4990) |
| #5045 | fix(llm): resolve NEARAI_MODEL=auto | 2026-06-17 | M | [Link](https://github.com/nearai/ironclaw/pull/5045) |

### Recomendações de Priorização

1. **Urgente:** Corrigir E2E nightly (#4108) — bloqueia confiança em releases
2. **Al

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>


# Relatório de Projeto CoPaw — 2026-06-19

---

## 1. Panorama do dia

O projeto CoPaw (QwenPaw) manteve **alta atividade nas últimas 24h**, com 50 issues e 31 PRs atualizados. Uma nova release **v1.1.12.post1** foi publicada com duas correções pontuais. O volume de issues fechadas (34) supera as abertas/ativas (16), indicando хороший ciclo de resolução. No entanto, a comunidade reportou **problemas críticos de estabilidade**, especialmente relacionados à compactação de contexto, falhas de векторных индексов no Windows e erros SSL em canais DingTalk. A integração do Headroom para compressão de contexto e o plugin DataPaw com 12 habilidades de BI avançam como os PRs mais aguardados.

---

## 2. Lançamentos

### 🆕 v1.1.12.post1
**Data:** 2026-06-18 | **Release:** [agentscope-ai/QwenPaw releases](https://github.com/agentscope-ai/QwenPaw/releases)

**Mudanças:**
| PR | Descrição |
|---|---|
| [#5288](https://github.com/agentscope-ai/QwenPaw/pull/5288) | Correção nos argumentos de prerelease do script de build e bump de versão |
| [#5288](https://github.com/agentscope-ai/QwenPaw/pull/5288) | Renomeação da collection probe do ChromaDB para `'probe-test'` |

**Breaking Changes:** Nenhuma.

**Notas de Migração:** Nenhuma — release de manutenção.

**Avaliação:** Correções cosméticas e de infraestrutura de build. Sem impacto para usuários finais.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados Hoje (17 total)

| PR | Título | Impacto |
|---|---|---|
| [#5270](https://github.com/agentscope-ai/QwenPaw/pull/5270) | **Sprint 3 Integration Tests (64 casos)** — ACP Runner, Plugin System, Security, Cross-cutting | ⭐ Alta — Cobertura de testes robusta para sistemas críticos |
| [#5309](https://github.com/agentscope-ai/QwenPaw/pull/5309) | **Migrate context para AgentScope 2.0 native compression** | ⭐⭐ Crítica — Substitui `LightContextManager` pela nova arquitetura |
| [#4849](https://github.com/agentscope-ai/QwenPaw/pull/4849) | **SharedMCPPool** — reuse MCP servers across agents | ⭐ Alta — Resolve explosão de processos com 300+ agentes no Windows |
| [#5291](https://github.com/agentscope-ai/QwenPaw/pull/5291) | **Fix SSL certificates para DingTalk** em instalações `uv` | 🐛 Bugfix — Corrige falha de comunicação |
| [#5298](https://github.com/agentscope-ai/QwenPaw/pull/5298) | **Fix Windows certificate store SSL errors** no build | 🐛 Bugfix — Resolve falha na verificação pós-pack |
| [#5303](https://github.com/agentscope-ai/QwenPaw/pull/5303) | **Token usage usa `max_input_length` do modelo ativo** | 🐛 Bugfix — Indicador de contexto agora mostra valores corretos |
| [#5306](https://github.com/agentscope-ai/QwenPaw/pull/5306) | **Fix chat turn context denominator** | 🐛 Bugfix — Corrige denominador no popover de uso de contexto |
| [#5293](https://github.com/agentscope-ai/QwenPaw/pull/5293) | **Chat history panel** — de Drawer para sidebar fixa à direita | 🎨 UX — Melhora experiência de navegação |
| [#5305](https://github.com/agentscope-ai/QwenPaw/pull/5305) | **Improve model readiness check** para local providers | 🐛 Bugfix — Verificação mais robusta |
| [#4794](https://github.com/agentscope-ai/QwenPaw/pull/4794) | **Plugin uninstall hooks + skill provider API** | 🎁 Feature — Ciclo de vida completo de plugins |
| [#4860](https://github.com/agentscope-ai/QwenPaw/pull/4860) | **Clean up stale Windows skill dirs** | 🐛 Bugfix — Remove fantasmas `~`-prefixed |
| [#5008](https://github.com/agentscope-ai/QwenPaw/pull/5008) | Cherry-pick PR #4794 para `dev/agentscope2.0` | 🔄 Sync — Alinhamento entre branches |

### PRs Abertos em Review

| PR | Título | Status |
|---|---|---|
| [#5244](https://github.com/agentscope-ai/QwenPaw/pull/5244) | **HeadroomContextManager** — compressão opcional de contexto via Headroom SDK | ⭐ Em Review |
| [#5287](https://github.com/agentscope-ai/QwenPaw/pull/5287) | **Fix crash quando summary excede schema maxLength** na compactação | Em Review |
| [#5310](https://github.com/agentscope-ai/QwenPaw/pull/5310) | **Bubblewrap Linux sandbox** com mount namespace isolation | Novo, first-time-contributor |
| [#5314](https://github.com/agentscope-ai/QwenPaw/pull/5314) | **Discord streaming responses** via message edit + typing indicator | Novo |
| [#5304](https://github.com/agentscope-ai/QwenPaw/pull/5304) | **Terminal coding mode** com daemon autostart | Novo |
| [#4900](https://github.com/agentscope-ai/QwenPaw/pull/4900) | **Decouple plugin loader** da inicialização do agent | Em Review |
| [#5265](https://github.com/agentscope-ai/QwenPaw/pull/5265) | **Force rebuild vector index** no backend local Windows | Em Review |
| [#4622](https://github.com/agentscope-ai/QwenPaw/pull/4622) | **DataPaw plugin** — 12 habilidades de BI (data-analysis) | Em Review, first-time-contributor |

---

## 4. Temas Quentes da Comunidade

### 🔥 Issues com Mais Comentários

| # | Issue | Comentários | Tipo | Destaque |
|---|---|---|---|---|
| [#5218](https://github.com/agentscope-ai/QwenPaw/issues/5218) | **Sub-Agent causa freeze ao triggerar context compaction** | 16 | 🐛 Bug (Crítico) | Processo congela completamente — requer restart manual |
| [#5171](https://github.com/agentscope-ai/QwenPaw/issues/5171) | **Context compression perde TODA informação** quando persona file excede threshold | 8 | 🐛 Bug (Crítico) | Tarefas travam porque contexto é zerado |
| [#5140](https://github.com/agentscope-ai/QwenPaw/issues/5140) | **Download de附件 (docx/pdf) falha com 404** | 8 | 🐛 Bug | Já fechado — aparentemente corrigido |
| [#5063](https://github.com/agentscope-ai/QwenPaw/issues/5063) | **Integrar Headroom** — compressão 60-95% do consumo de tokens | 7 | ✨ Feature | Demanda forte por otimização de custos |
| [#5262](https://github.com/agentscope-ai/QwenPaw/issues/5262) | **Skills desabilitadas re-habilitam após upgrade** | 7 | 🐛 Bug | Regressão recorrente desde v1.1.9 |
| [#3854](https://github.com/agentscope-ai/QwenPaw/issues/3854) | **ChromaDB segfault (SIGSEGV) mata processo** | 6 | 🐛 Bug (Crítico) | 45+ crashes em uma sessão no Ubuntu 25.10 |
| [#5264](https://github.com/agentscope-ai/QwenPaw/issues/5264) | **Respostas de grupo vão para chat privado** (Feishu) | 4 | 🐛 Bug | Lógica de roteamento de replies com defeito |
| [#3940](https://github.com/agentscope-ai/QwenPaw/issues/3940) | **Suporte a routing de modelo de visão separado** | 5 | ✨ Feature | Usuários precisam trocar modelo inteiro só pra processar imagem |

### 📊 Análise de Demandas

**Contexto/Compactação é o tema dominante** — 4 das top 7 issues envolvem falhas na gestão de contexto:
- `Context compaction → freeze total` (#5218)
- `Context compression → perda total de dados` (#5171)
- `Summary excede schema → crash` (#5287 — PR em andamento)
- `Headroom como solução` (#5063 + #5244)

**Instabilidade no Windows é recorrente** — ChromaDB segfault (#3854), vector index não persiste (#5265), stale skill dirs (#4860), SSL certificate store (#5298).

**UX de Canais** — Discord streaming (#5314), QQ sem envio de arquivos (#1983), DingTalk SSL (#5291), Feishu roteamento errado (#5264).

---

## 5. Bugs e Estabilidade

### 🔴 Críticos (Processo/Crash)

| Severidade | Issue | Detalhes |
|---|---|---|
| 🔴 Crítico | [#5218](https://github.com/agentscope-ai/QwenPaw/issues/5218) | Sub-Agent trigger → context compaction → **process freeze total** → só restart manual |
| 🔴 Crítico | [#3854](https://github.com/agentscope-ai/QwenPaw/issues/3854) | ChromaDB Rust binding **segfault (SIGSEGV)** — 45+ vezes em uma sessão (Ubuntu 25.10, Python 3.13) |
| 🔴 Crítico | [#5171](https://github.com/agentscope-ai/QwenPaw/issues/5171) | Context compression **apaga TODO contexto** quando persona file > threshold → tarefa não pode continuar |
| 🟠 Alto | [#5264](https://github.com/agentscope-ai/QwenPaw/issues/5264) | Feishu: replies de grupo vão para **chat privado** quando há sessão privada ativa |
| 🟠 Alto | [#5262](https://github.com/agentscope-ai/QwenPaw/issues/5262) | **Regressão**: skills desabilitadas re-habilitam após cada upgrade (desde v1.1.9) |
| 🟠 Alto | [#5253](https://github.com/agentscope-ai/QwenPaw/issues/5253) | custom_channel **listener cai após qualquer save** — requer re-salvar para restart |
| 🟠 Alto | [#5319](https://github.com/agentscope-ai/QwenPaw/issues/5319) | Console channel sempre mostra **"Answers have stopped"** mesmo com resposta real |
| 🟡 Médio | [#5265](https://github.com/agentscope-ai/QwenPaw/pull/5265) | Windows: vector index não persiste no backend local (PR em review) |
| 🟡 Médio | [#5291](https://github.com/agentscope-ai/QwenPaw/pull/5291) | DingTalk falha em instalações `uv` — SSL certificate não configurado (já corrigido em PR) |
| 🟡 Médio | [#5237](https://github.com/agentscope-ai/QwenPaw/issues/5237) | uv-installed qwenpaw: DingTalk **não funciona**, mas .exe funciona |
| 🟡 Médio | [#5313](https://github.com/agentscope-ai/QwenPaw/issues/5313) | MCP `Authorization` header perde prefixo **"Bearer"** |

### 📈 Tendência

Bugs críticos de **compactação de contexto** e **crashes do ChromaDB** são os problemas mais sérios. A migration para AgentScope 2.0 native compression (#5309) pode resolver parte desses problemas, mas a comunidade aguarda resoluções específicas.

---

## 6. Pedidos de Features e Sinais de Roadmap

### ✨ Novas Features Solicitadas

| Feature | Issue | Prioridade | Sinais |
|---|---|---|---|
| **Headroom Context Manager** — compressão 60-95% | [#5063](https://github.com/agentscope-ai/QwenPaw/issues/5063) + [#5244](https://github.com/agentscope-ai/QwenPaw/pull/5244) | ⭐⭐⭐ Alta | PR em review ativo + forte engajamento (7 comentários) |
| **Separate Vision Model Routing** | [#3940](https://github.com/agentscope-ai/QwenPaw/issues/3940) | ⭐⭐ Média | Evita troca de modelo inteiro só pra imagem |
| **Discord Streaming Responses** | [#5314](https://github.com/agentscope-ai/QwenPaw/pull/5314) | ⭐⭐ Média | Message edit in-place + typing indicator |
| **DataPaw Plugin** (12 BI skills) | [#4622](https://github.com/agentscope-ai

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>


# Relatório de Projeto — ZeroClaw
**Data de referência:** 2026-06-19
**Elaborado por:** Analista de Projetos Open Source — Agentes de IA e Assistentes Pessoais

---

## 1. Panorama do Dia

O ecossistema ZeroClaw registrou **alta intensidade de atividade** nas últimas 24 horas, com 45 issues e 50 PRs atualizados — números que indicam um ciclo de desenvolvimento extremely ativo. A ausência de releases formais contrasta com a efervescência em múltiplas frentes: um PR de bump de versão para **v0.8.1** está em revisão (#7938), sinalizando que a próxima release está iminente. A comunidade demonstra foco intenso em **estabilidade, segurança e hardening**, com 7 PRs já merged/fechados hoje resolvendo bugs críticos — desde regressões em Slack/Discord até falhas de segurança em pipelines e shell subprocesses. A severidade dos bugs reportados (incluindo um S0 de segurança) e a densidade de PRs de tamanho S/M/L sugerem que o time está em modo de preparação de release com disciplina de qualidade.

---

## 2. Lançamentos

**Nenhum release formal registrado nas últimas 24h.**

### Indicador de Próxima Release

| PR | Status | Conteúdo |
|----|--------|----------|
| [#7938](https://github.com/zeroclaw-labs/zeroclaw/pull/7938) | **OPEN** (pendente aprovação) | `chore(release): bump version to 0.8.1` — bump massivo de versionamento em todo o repositório via `scripts/release/bump-version.sh`, preparando o corte da release 0.8.1 |

> **Nota:** O PR #7938 está em estado de aguardando aprovação dos gates e consenso da equipe. Trata-se de um indicador forte de que a **v0.8.1** será lançada em breve, consolidando as múltiplas correções de bugs e melhorias acumuladas. Não há changelog ou notas de migração disponíveis ainda, pois o merge ainda não ocorreu.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados nas Últimas 24h (7 total)

A atividade de merge foi robusta, com foco predominante em **correções de bugs de alta prioridade** e **hardening de segurança/runtime**:

| PR | Tamanho | Severidade | Título | Impacto |
|----|---------|-----------|--------|---------|
| [#7931](https://github.com/zeroclaw-labs/zeroclaw/pull/7931) | S | Alta | `fix(providers): coalesce stripped compatible history roles` | Normaliza histórico de chat após strip de ferramentas nativas, coalescendo mensagens adjacentes de mesmo role — corrige falhas de provider em sessões longas |
| [#7933](https://github.com/zeroclaw-labs/zeroclaw/pull/7933) | M | Alta | `fix(provider): trace native tool delivery decisions` | Adiciona diagnósticos DEBUG em nível de runtime turn para decisões de entrega de ferramentas nativas, facilitando troubleshooting |
| [#7932](https://github.com/zeroclaw-labs/zeroclaw/pull/7932) | XS | Alta | `fix(docker): correct Node 24 digest pins` | Atualiza digest do `node:24-bookworm-slim` nos Dockerfiles, alinhando web-node stage entre imagens fonte e Debian |
| [#7934](https://github.com/zeroclaw-labs/zeroclaw/pull/7934) | S | Alta | `fix(runtime): route stdout diagnostics through logs` | Redireciona diagnósticos de exclusão de cron de stdout direto para `zeroclaw_log` cron/delete events estruturados |
| [#7935](https://github.com/zeroclaw-labs/zeroclaw/pull/7935) | M | Alta | `fix(runtime): drain shell pipes while child runs` | Drena stdout/stderr do shell **durante** a execução do child process, evitando deadlock por pipe buffer cheio em comandos de alta saída |
| [#7936](https://github.com/zeroclaw-labs/zeroclaw/pull/7936) | S | Alta | `fix(runtime): read CLI approvals from controlling tty` | CLI de aprovação agora lê do terminal controlador (tty) antes de stdin, fechando gap de segurança em cenários detached |
| [#7937](https://github.com/zeroclaw-labs/zeroclaw/pull/7937) | L | Alta | `fix(runtime): cap shell subprocess memory` | Adiciona `runtime_profiles.*.shell_max_memory_mb` (default 512 MiB) como teto de memória para subprocessos shell/skills via `SecurityPolicy` |

### PRs Abertos com Alto Impacto (20 mais recentes)

| PR | Tamanho | Área | Título | Destaque |
|----|---------|------|--------|----------|
| [#7915](https://github.com/zeroclaw-labs/zeroclaw/pull/7915) | — | Skills | `fix(skills): restore always: true frontmatter flag` | Restaura flag `always: true` para skills que devem injetar mesmo em modo compacto |
| [#7916](https://github.com/zeroclaw-labs/zeroclaw/pull/7916) | — | Memory | `test(memory): cover storage-reader timestamp edge cases` | Cobertura determinística para paginação de log com timestamps iguais |
| [#7923](https://github.com/zeroclaw-labs/zeroclaw/pull/7923) | — | Core/Config | `feat(auto-clean): automatic clearing of temporary files` | Novo bloco `[files_cleanup]` com regras configuráveis de limpeza |
| [#7946](https://github.com/zeroclaw-labs/zeroclaw/pull/7946) | — | Runtime/UI | `feat(runtime): add model context window ctx bar` | Barra de uso de contexto em TUI, gateway e CLI interativo |
| [#7928](https://github.com/zeroclaw-labs/zeroclaw/pull/7928) | — | WASM/Plugins | `feat(wasi): initial WASM component-model plugin host` | Host de plugins WASM com traits Channel, Memory e Tool (wit v0) |
| [#7922](https://github.com/zeroclaw-labs/zeroclaw/pull/7922) | L | Channel/Discord | `feat(channels/discord): slash command localizations + guild scope` | Paridade de slash commands Discord com localizações por locale e escopo guild |
| [#7853](https://github.com/zeroclaw-labs/zeroclaw/pull/7853) | M | Core | `fix(update): repair Windows self-update` | Repara self-update quebrado no Windows (lock de imagem proíbe delete), adiciona `.old` sidecar via PID |
| [#7942](https://github.com/zeroclaw-labs/zeroclaw/pull/7942) | — | Memory | `fix(memory): decouple embedding key from chat provider` | Embedder de memória ganha API key própria, removendo dependência do primeiro provider de chat |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários + reações)

| #Issue | Tipo | Severidade | Comentários | Reações | Título | Análise da Demanda |
|--------|------|-----------|-------------|---------|--------|-------------------|
| [#2079](https://github.com/zeroclaw-labs/zeroclaw/issues/2079) | enhancement | Alta | **7** | 0 | `Restore GitHub as a native channel` | Demanda consolidada para GitHub como canal de primeira classe — agents poderiam observar/agir em issues, PRs, comments e reviews via interface uniforme. A issue está em discussão desde fevereiro, indicando complexidade de design e dependência de decisões arquiteturais. |
| [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) | enhancement/RFC | Alta | **6** | 0 | `RFC: Computer-use support for desktop screen interaction` | Proposta para screenshot + mouse/keyboard em GUI desktop, alinhando-se com capacidades de OpenAI Codex e Hermes. Reflete tendência de mercado de "AI agents que controlam a máquina". |
| [#6067](https://github.com/zeroclaw-labs/zeroclaw/issues/6067) | enhancement | Média | **5** | 0 | `Make channel reply-intent precheck configurable` | Desejo de configurar modelo leve, timeout e logs para precheck de intenção de resposta em channels — problema de latência e visibilidade em produção. |
| [#7787](https://github.com/zeroclaw-labs/zeroclaw/issues/7787) | bug | Alta (P1) | **3** | **1** | `Prebuilt v0.8.0 binaries ship without Slack/Discord` | **Única issue com reação thumbs-up.** Regressão crítica: binaries oficiais v0.8.0 perderam features Slack/Discord. Downgrade para 0.7.5 resolve. Usuários afetados estão insatisfeitos. |
| [#6916](https://github.com/zeroclaw-labs/zeroclaw/issues/6916) | enhancement | Alta (P1) | **3** | 0 | `feat: process-memory limits on shell/skill_tool subprocess` | Limitar memória de subprocessos shell (atualmente ilimitada, causa OOM em containers). Já tem PR #7937 merged (v0.8.1). |
| [#6971](https://github.com/zeroclaw-labs/zeroclaw/issues/6971) | RFC | Alta | **3** | 0 | `RFC: Security UX, runtime credential boundaries, isolation` | RFC estratégico sobre posture de segurança, tratamento de credenciais e sinais de confiança visíveis — discussão architectural profunda. |

### Temas Transversais Emergentes

1. **Segurança como Prioridade Absoluta** — Múltiplas issues e PRs abordam hardening: SSRF em `http_request` (#7902 merged), controlling tty para aprovações (#7892/#7936), limites de memória em shell (#6916/#7937), e boundaries de credenciais (#6971).

2. **Desktop/Physical Interaction** — #6909 (computer-use), #7944 (voice satellite ESP32), #7943 (voice-host WS client) indicam investimento em interação além de texto/chat.

3. **Multi-canal e Integração** — GitHub nativo (#2079), Slack thread context (#6055), Discord guild scope (#7922), e tracker v0.8.1 (#6970) mostram expansão de canais.

---

## 5. Bugs e Estabilidade

### Bugs Reportados por Severidade (8 bugs novos/ativos)

#### S0 — Risco de Perda de Dados / Segurança (1)

| #Issue | Título | Descrição | Status |
|--------|--------|-----------|--------|
| [#7947](https://github.com/zeroclaw-labs/zeroclaw/issues/7947) | `execute_pipeline bypasses per-agent tool gating` | `execute_pipeline` ignora `ToolAccessPolicy` do agent e usa apenas `global [pipeline].allowed_tools` — confused deputy vulnerability. **Severidade S0.** | OPEN, 0 comentários |

#### S1 — Workflow Bloqueado (5)

| #Issue | Título | Canal/Área | Status |
|--------|--------|-----------|--------|
| [#7787](https://github.com/zeroclaw-labs/zeroclaw/issues/7787) | Prebuilt v0.8.0 sem Slack/Discord | Channels | **P1, 3 comentários, 1 👍** — regressão crítica |
| [#7756](https://github.com/zeroclaw-labs/zeroclaw/issues/7756) | native/MCP tools indisponíveis em OpenAI Responses/Anthropic | Provider | **P1, 1 comentário** |
| [#7941](https://github.com/zeroclaw-labs/zeroclaw/issues/7941) | agent delete purga estado antes de persistência (espelho #7907) | Gateway/API | **P1, 0 comentários** |
| [#7804](https://github.com/zeroclaw-labs/zeroclaw/issues/7804) | Code history envia mensagens não-alternantes ao Anthropic | Runtime/Daemon | **P1, 0 comentários** |
| [#7563](https://github.com/zeroclaw-labs/zeroclaw/issues/7563) | canvas-store regression em WS chat/ACP sessions | Runtime/Gateway | **CLOSED** — resolvido |

#### S2 — Comportamento Degradado (2)

| #Issue | Título | Área |
|--------|--------|------|
| [#5221](https://github.com/zeroclaw-labs/zeroclaw/issues/5221) | Model cost não é capturado para schedules, CLI e web agents | Runtime/Daemon | **CLOSED** |
| [#7949](https://github.com/zeroclaw-labs/zeroclaw/issues/7949) | `[[embedding_routes]]` silencia para NoopEmbedding | Memory | **0 comentários** |
| [#7892](https://github.com/zeroclaw-labs/zeroclaw/issues/7892) | CLI approval prompt não lê controlling terminal quando stdin detached | Runtime/Daemon | **0 comentários** — PR #7936 merged (resolvido) |

#### S3 / P3 — Issues Menores (1)

| #Issue | Título | Área |
|--------|--------|------|
| [#7917](https://github.com/zeroclaw-labs/zeroclaw/issues/7917) | file_download tool strings não traduzidas em non-English locales | i18n | **P3, 0 comentários** — good first issue |

### Observações de Estabilidade

- **Regressão crítica v0.8.0** (#7787): Binaries oficiais perderam Slack/Discord. Necessita release patched.
- **Windows em estado precário**: 74 test failures no Windows (#7462) — CI não detecta (só roda Linux). Impacta usuários Windows diretamente.
- **S0 de segurança** (#7947) requer atenção imediata — bypass de tool gating é vulnerabilidade séria.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Novas (7 issues abertas com 0-1 comentários)

| #Issue | Título | Área | Sinal de Roadmap |
|--------|--------|------|-----------------|
| [#7944](https://github.com/zeroclaw-labs/zeroclaw/issues/7944)

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*