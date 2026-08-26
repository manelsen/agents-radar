# Resumo diário do ecossistema de agentes de IA 2026-08-27

> Issues: 1 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-08-26 22:39 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório do Projeto NullClaw — 2026-08-27

---

## 1. Panorama do Dia

O projeto NullClaw apresenta **atividade mínima** nesta terça-feira. Foi registrada apenas **1 issue aberta** nas últimas 24 horas, referente a um pedido de enhancement para suporte a symlinks de skills. Não houve atividade de PRs, merges ou lançamentos novos. O repositório permanece em um estado de baixa movimentação, sugerindo um período de estabilidade ou possivelmente fase de planejamento para a próxima release. O build/integridade do projeto não aparenta riscos imediatos.

---

## 2. Lançamentos

**Nenhum lançamento registrado nas últimas 24 horas.**

A ausência de releases indica que o projeto está em um intervalo entre versões ou em fase de desenvolvimento interno. Recomenda-se monitorar o repositório para eventuais anuncios de versões futuras.

---

## 3. Progresso do Projeto

**Nenhum PR foi merged ou fechado nas últimas 24 horas.**

Sem atividade de merge, o progresso funcional do NullClaw permanece estagnado no curto prazo. Não há evidências de integração de novas funcionalidades ou correções recentes no codebase.

---

## 4. Temas Quentes da Comunidade

### Issue em Destaque

**[#995 — Support Skills Symlinks](https://github.com/nullclaw/nullclaw/issues/995)** *(ABERTA)*  
- **Autor:** ivostoykov  
- **Criação:** 2026-08-26  
- **Reações:** 0 👍  
- **Comentários:** 0  

**Resumo da Demanda:** O usuário reporta que o `nullclaw 2026.5.29` não suporta symlinks de skills, e o comando `nullclaw skills links` os ignora. A solicitação visa adicionar essa funcionalidade.

**Análise:**  
- **Esforço estimado:** Baixo a médio (provavelmente envolve manipulação de filesystem)  
- **Casos de uso:** Redução de sincronização e viabilidade de uso de skills obsoletas via links simbólicos  
- **Receptividade:** Ainda sem feedback da equipe/core maintainers  

---

## 5. Bugs e Estabilidade

**Nenhum bug ou regressão reportado nas últimas 24 horas.**

O projeto não apresenta incidentes críticos, crashes ou falhas conhecidas documentadas no período. A estabilidade parece mantida.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Nova Demanda Registrada

| Item | Detalhes |
|------|----------|
| **Issue** | [#995 - Support Skills Symlinks](https://github.com/nullclaw/nullclaw/issues/995) |
| **Tipo** | Enhancement |
| **Prioridade aparente** | Média (resolvendo limitação funcional) |
| **Sinal de roadmap** | Indica que o sistema de skills está em evolução; symlinks são recurso comum em ferramentas de automação e poderia ser considerado para próxima milestone |

**Possível implicação:** Se aceito, este enhancement poderia fazer parte de uma futura release (possivelmente `2026.6.x` ou similar, considerando a versão atual `2026.5.29`).

---

## 7. Resumo de Feedback dos Usuários

| Aspecto | Status |
|---------|--------|
| **Novos relatórios de dor** | 0 |
| **Solicitações de features** | 1 (symlinks de skills) |
| **Reclamações/FRUSTRAÇÕES** | Nenhuma registrada |
| **Elogios/Feedback positivo** | Nenhum explícito |

**Dores identificadas historicamente:**
- Limitação no sistema de skills symlinks (reportado hoje) — impacta workflows onde skills obsoletas precisam ser referenciadas sem duplicação.

**Cenário de uso emergente:** Usuários desejam compartilhar/reutilizar skills via symlinks para evitar redundância de arquivos e facilitar manutenção centralizada.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta / Aguardando Triagem

| Issue | Título | Criação | Status | Idade |
|-------|--------|---------|--------|-------|
| [#995](https://github.com/nullclaw/nullclaw/issues/995) | Support Skills Symlinks | 2026-08-26 | ABERTA | 1 dia |

**Recomendação:** A issue #995 foi criada ontem e ainda não recebeu resposta da equipe. Dado que é uma solicitação de enhancement razoável e direta, recomenda-se:

1. **Triagem inicial** — confirmar se está dentro do escopo do projeto
2. **Esclarecimento técnico** — determinar se há limitações known (ex: suporte a symlinks em diferentes OS)
3. **Labeling** — adicionar labels como `enhancement`, `needs-review` ou `help wanted` para visibilidade

---

## Indicadores de Saúde do Projeto

| Indicador | Status | Observação |
|-----------|--------|------------|
| Atividade de issues (24h) | 🟡 Leve | 1 issue nova |
| Atividade de PRs (24h) | ⚪ Estagnada | Nenhuma |
| Releases (24h) | ⚪ Nenhuma | — |
| Bugs críticos | ⚪ Nenhum | — |
| Backlog acumulado | 🟡 Monitorar | Issue #995 precisa de resposta |

---

**Próximos passos recomendados:**
1. Avaliar e responder a issue #995
2. Publicar roadmap ou milestone planejada para transparência da comunidade
3. Considerar comunicação ativa caso haja release iminente

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo — Ecossistema de Agentes de IA Open Source

**Data de Referência:** 27 de agosto de 2026
**Projetos Analisados:** NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw (QwenPaw), ZeroClaw

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source demonstra **forte polarização** entre projetos em fase de crescimento acelerado e aqueles em estabilização ou estagnação. A maioria absoluta dos projetos (5 de 7) opera em regime de alta atividade, com dezenas de PRs e issues processados diariamente, indicando maturidade crescente do segmento. No entanto, padrões recorrentes de problemas — estabilidade de WebSockets, gestão de sessões, corrupção de banco de dados e performance de UI — aparecem transversalmente, sugerindo que o ecossistema ainda não consolidou soluções arquiteturais padronizadas para desafios fundamentais de sistemas multi-agente stateful. A demanda por funcionalidades enterprise (multi-usuário, RBAC, multi-tenant) emerge como o principal vetor de diferenciação estratégica, enquanto issues de segurança (sandbox escapes, validação de input, gestão de credenciais) ocupam posição crítica em ao menos três projetos simultaneamente.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs Atualizados | PRs Merged | Releases | Saúde Geral |
|---------|:-----------:|:---------------:|:----------:|:--------:|:-----------:|
| **ZeroClaw** | 40 | 50 | 2 | 0 | 🟢 Alta — foco em segurança |
| **Hermes Agent** | 50 | 50 | — | 0 | 🟡 Sob pressão — backlog crítico |
| **IronClaw** | 29 | 50 (16 abertas) | 34 | 0 | 🟢 Preparando v1.4.0 |
| **CoPaw** | 36 | 44 | 26 | 0 | 🟢 Infraestrutura de testes em alta |
| **NanoBot** | 5 | 28 | 9 | 0 | 🟢 Estável — refactoring ativo |
| **PicoClaw** | 6 | 5 | 3 | 0 | 🟡 Estagnação relativa |
| **NullClaw** | 1 | 0 | 0 | 0 | 🔴 Mínima |

**Observações críticas:**

- **NullClaw** apresenta o menor volume de atividade do ecossistema, com apenas 1 issue e nenhuma interação de PR, sugerindo projeto inativo ou em modo de manutenção mínima.
- **Hermes Agent** e **ZeroClaw** lideram em volume absoluto de atividade, porém por razões opostas: Hermes lida com backlog de bugs críticos (corrupção de banco de dados recorrente, crashes SIGSEGV), enquanto ZeroClaw executa um ciclo de desenvolvimento intenso com foco em correções de segurança.
- **CoPaw** destaca-se pelo ganho de cobertura de testes (+5,02pp, atingindo 63,06%) e paralelização de CI, indicando investimento em qualidade de codebase.

---

## 3. Posicionamento do Projeto Principal

Considerando volume de atividade, maturidade operacional e saúde de desenvolvimento, **IronClaw** e **CoPaw** emergem como os projetos com melhor equilíbrio entre velocidade de iteração e disciplina de engenharia.

### IronClaw — Vantagens Competitivas

| Dimensão | Posicionamento |
|----------|---------------|
| **Arquitetura de sandbox** | Diferenciação técnica central com workspace persistente por usuário e bridges de arquivo para Railway, demonstrando visão clara de isolamento seguro |
| **Clareza de roadmap** | Roadmap versionado (v1.4.0, v1.5.0) com épicos publicados, gerando confiança em adotantes empresariais |
| **Modernização de UI** | Investment contínuo em Design System, i18n e padronização de componentes, reduzindo dívida técnica de frontend |
| **Comunidade** | 34 PRs merged em 24h indica pipeline de review saudável e mantenedores responsivos |

### CoPaw — Vantagens Competitivas

| Dimensão | Posicionamento |
|----------|---------------|
| **Cobertura de testes** | 63% de cobertura com +382 casos de teste console, superando a maioria dos pares em disciplina de QA |
| **CI/CD** | Paralelização de E2E e integração deve reduzir tempo de CI em 60-70%, atraindo contribuidores com loops de feedback rápidos |
| **Estratégia multi-provider** | Suporte a provedores chineses (Aliyun, Kimi, Volcengine, Xiaomi MiMo) amplia mercado endereçável |

### Diferenciações Técnicas por Projeto

| Projeto | Arquitetura Diferenciadora | Público-Alvo Implícito |
|---------|---------------------------|------------------------|
| **ZeroClaw** | Wire protocol first-class, bounded delegates, export de agentes como bundle | Desenvolvedores avançados, segurança de workspaces |
| **Hermes Agent** | Package manager unificado (pm), Desktop renderer em browser, iMessage nativo | Usuários finais desktop, integração iOS/macOS |
| **NanoBot** | Meta-search provider, multi-agent handoff, side conversations | Power users de busca e pesquisa |
| **PicoClaw** | Multi-channel routing (Discord, Telegram, IRC, Slack), deploy em hardware limitado (Raspberry Pi) | DevOps e comunidades técnicas diversas |
| **NullClaw** | Sistema de skills com symlinks | Base de usuários pequena — diferenciação ainda não formada |

---

## 4. Focos Técnicos Compartilhados

A análise transversal revela cinco desafios técnicos que o ecossistema ainda não padronizou:

### 4.1 Gestão de Sessões e Persistência de Estado

Múltiplos projetos enfrentam problemas relacionados a sessões Stateful:

- **NanoBot** (#5550): `read_session` retorna histórico vazio com queries curinga
- **Hermes Agent** (#77127): WS disconnect race pode orphanar sessão no resume
- **IronClaw**: Épico persistente de sandbox com workspace por usuário (#7732)
- **CoPaw** (#6921): Agente para após planejamento multi-step sem aviso

**Implicação:** A comunidade precisa de padrões consolidados para gestão de sessão em agentes com tool-calling, histórico variável e reconexão.

### 4.2 Estabilidade de WebSockets e Conexões de Gateway

- **NanoBot** (#5544): WebSocket listener recovery degrades
- **Hermes Agent** (#94248): SIGSEGV 17-72ms após delegate deadlines
- **CoPaw** (#7218): "peer closed connection" em textos longos e inferência longa
- **IronClaw** (#7912): Telegram removal retorna 503

**Implicação:** A padrão de WebSocket como transporte primário para agentes interativos gera problemas recorrentes de race condition e recovery que exigem bibliotecas e padrões compartilhados.

### 4.3 Performance de UI e Histórico de Chat

- **PicoClaw** (#3281): UI web laggy com histórico extenso
- **IronClaw** (#7891): 19,7s de turn (19,2s inferência) por MIME headers não solicitados
- **ZeroClaw** (#10390, #10349): Painéis Chat/SOP bloqueiam navegação quando inativos
- **Hermes Agent** (#90473): Paging quebrado em sessões longas

**Implicação:** A estratégia de enviar histórico completo de chat para inferência escala mal. Diversos projetos已经开始 a implementar compressão seletiva, mas sem padrão consensual.

### 4.4 Segurança de Sandbox e Workspaces

Três projetos tratam segurança de isolamento simultaneamente:

- **ZeroClaw** (#10381): Host launchers resolvidos antes de workspace cwd (S0)
- **ZeroClaw** (#10391): Delegate bounded resolve filesystem para workspace errado
- **Hermes Agent** (#89333): Plugin-scanner security skill em desenvolvimento
- **IronClaw** (#7556): Railway sandbox workspace file bridge

**Implicação:** A proliferação de runtimes sandboxed (Docker, bounded delegates, workspace isolation) gera superfície de ataque fragmentada. Requer padronização.

### 4.5 Validação e Configuração de Providers

- **Hermes Agent** (#95003): xAI rejeita `tool_search` como nome reservado
- **CoPaw** (#7311): `_qwenpaw_remote_backend` missing em v2.1.1b2
- **CoPaw** (#7298): OpenSSL 3.0.x TLS handshake resets (DPI carrier)
- **NullClaw** (#995): Skills symlinks não suportados
- **PicoClaw** (#3339): Google Antigravity retorna 429 genérico

**Implicação:** A integração com provedores externos (xAI, Google, provedores chineses) é frágil e específica por projeto, sem abstração compartilhada de erro e retry.

---

## 5. Análise de Diferenciação

### Por Foco Técnico

| Cluster | Projetos | Característica |
|---------|----------|----------------|
| **Segurança & Sandbox** | ZeroClaw, Hermes Agent | Foco em isolamento, credenciais, políticas de pairing |
| **Multi-Canal** | PicoClaw, IronClaw | Routing entre Telegram, Slack, Discord, IRC, WhatsApp |
| **Enterprise/Organizacional** | CoPaw, IronClaw | Multi-usuário, RBAC, multi-tenant, onboarding |
| **Busca & Pesquisa** | NanoBot | Meta-search, AnySearch, multi-provider search |
| **Desktop/Nativo** | Hermes Agent | Desktop renderer, iMessage, Slack integrations |
| **Estabilidade Mínima** | NullClaw | Baixa atividade — posicionamento indefinido |

### Por Público-Alvo

| Perfil | Projetos Ideais | Evidência |
|--------|----------------|-----------|
| **Desenvolvedores avançados / DevOps** | ZeroClaw, PicoClaw | Sandbox, CLI, deploy em Raspberry Pi, bounded delegates |
| **Equipes enterprise** | CoPaw, IronClaw | Multi-usuário, RBAC, DingTalk, Slack channel-routed agents |
| **Usuários finais desktop** | Hermes Agent | Desktop renderer em browser, iMessage nativo, Slack deep |
| **Power users de pesquisa** | NanoBot | Meta-search, AnySearch, side conversations |
| **Adotantes iniciais** | NullClaw | Projeto incipiente com comunidade mínima |

### Por Arquitetura

| Abordagem | Projetos | Implicação |
|-----------|----------|------------|
| **Monolítico com plugins** | Hermes Agent, PicoClaw | Extensibilidade via plugins, porém risco de acoplamento |
| **Camadas modulares** | ZeroClaw, IronClaw | Delegate, gateway, runtime como camadas distintas com contratos definidos |
| **Hub centralizado** | CoPaw | QwenPaw Hub multi-tenant como ponto de controle |
| **Minimalista** | NullClaw, NanoBot | Core enxuto com extensões opcionais |

---

## 6. Tração e Maturidade da Comunidade

### Velocidade de Iteração

| Classificação | Projetos | Indicador |
|--------------|----------|-----------|
| **Iteração rápida** | IronClaw, CoPaw, Hermes Agent, ZeroClaw | 29-50 PRs/24h processados |
| **Iteração moderada** | NanoBot, PicoClaw | 5-28 PRs/24h processados |
| **Consolidação** | NullClaw | Estagnação — risco de abandono |

### Qualidade de Código (proxy por infraestrutura de testes)

| Projeto | Cobertura/Tesde | Avaliação |
|--------|-----------------|-----------|
| **CoPaw** | 63,06% (+5pp), +382 casos console, CI paralelo | 🟢 Excelente — disciplina de QA em destaque |
| **IronClaw** | Múltiplos forward-ports e changelog entries, CI shards | 🟢 Bom — processo de release disciplinado |
| **NanoBot** | Regressão coberta em #5551 para read_session | 🟡 Adequado — coverage parcial |
| **Hermes Agent** | Não especificado — múltiplos bugs p0/p1 abertos | 🔴 Preocupante — tech debt acumulada |
| **ZeroClaw** | Flaky test reportado (#10371) — auto-teste em Windows advisory | 🟡 Em progresso — cobertura Windows em expansão |
| **PicoClaw** | Não especificado — alto índice de issues stale (100%) | 🔴 Crítico — falta de resposta a community |
| **NullClaw** | Nenhuma evidência de testes ou CI | 🔴 Arriscado — projeto inativo |

### Gestão de Backlog

| Projeto | Backlog Crítico | Tendência |
|--------|-----------------|-----------|
| **Hermes Agent** | 48 issues abertas vs 2 fechadas (24h) | 🔴 Crescendo — backlog se acumula mais rápido que resolução |
| **NanoBot** | 5 PRs com conflitos, multi-agent handoff há 5 meses | 🟡 Estável mas bloqueado |
| **CoPaw** | Issue #6921 com 11 comentários aguardando need-info | 🟡 Progressão normal |
| **ZeroClaw** | 3 S0 abertas, RFCs em discussão ativa | 🟡 Gerenciável com alta atividade |
| **IronClaw** | v1.4.0 em preparação com forward-ports disciplinados | 🟢 Pipeline saudável |
| **PicoClaw** | 6/6 issues stale, 100% sem resposta da equipe | 🔴 Alerta — risco de perda de contribuidores |

### Release Cadence

Nenhum dos sete projetos publicou releases nas últimas 24h. No entanto:

- **IronClaw** tem data-alvo clara para v1.4.0 (próximas semanas)
- **ZeroClaw** aponta para v0.8.5 em 30/ago/2026
- **CoPaw** prepara v2.2.0 com Hub multi-tenant
- **NullClaw**, **PicoClaw** e **NanoBot** não possuem visibilidade de roadmap pública

---

## 7. Sinais de Tendência

### 7.1 Enterprise Adoption como Vetor Primário

A demanda por multi-usuário, RBAC e deployments organizacionais é o tema mais consistente transversalmente:

- **CoPaw** (#5780): "单 Bot 账号模式 — qualquer pessoa pode enviar mensagem ao Bot"
- **IronClaw** (#7895): Request por UI para personality (agent.md) para configuração individual
- **CoPaw** (#7318): Hub multi-tenant confirmado para v2.2.0
- **IronClaw** (#4625): Slack channel-routed agents como feature v1.5.0

**Sinal:** Projetos estão evoluindo de "ferramentas solo" para "plataformas de equipe", competindo por espaço com soluções comerciais.

### 7.2 Diversificação de Provedores de IA

A fragmentação de provedores (xAI, Grok, AnySearch, Meta-Search, Volcengine, Xiaomi MiMo, Hailo-Ollama) indica:

- Nenhum provedor dominante emergiu — a adoção de modelos é heterogênea
- Provedores regionais chineses (Aliyun, Kimi, Volcengine) têm suporte dedicado em CoPaw
- Provedores sem key API (AnySearch) resolvem fricção de adoção
- Conflitos de nomenclatura de tools (xAI `tool_search` reservado) revelam falta de padronização de tool schemas

**Sinal:** O mercado de agentes está menos competitivo em modelo de IA e mais em abstração de provider.

### 7.3 Segurança como Requisito Primeiro

Três projetos estão simultaneamente endereçando vulnerabilidades críticas de sandbox:

- **ZeroClaw**: S0 para host launcher resolution (#9916) e bounded delegate filesystem (#9872)
- **Hermes Agent**: memory-setup bypass validation gate (#95885), cron deliveries com adapters errados
- **IronClaw**: Credential bindings declaradas via manifest (#7810)

**Sinal:** À medida que agentes ganham acesso a filesystem, execução de comandos e credenciais, a superfície de ataque cresce proporcionalmente. Segurança deixa de ser feature e vira requisito estrutural.

### 7.4 Performance de Contexto como Gargalo Generalizado

Todos os projetos enfrentam degradação de performance com histórico crescente:

- Headers MIME custando 19,2s de inferência (IronClaw #7891)
- `read_session` retornando histórico vazio (NanoBot #5550)
- UI laggy com sessões extensas (PicoClaw #3281)
- Tool results sendo armazenados como envelope completo em vez de payload (ZeroClaw #10394, #10396)

**Sinal:** A estratégia de context window infinito não escala. Espera-se consolidação em técnicas de compressão, sumário incremental e chunking seletivo — IronClaw (#7905) e NanoBot (#5551) já avançam nessa direção.

### 7.5 Mobile e Cross-Platform como Direção Estratégica

- **Hermes Agent**: Android renderer touch-first (#95865), Desktop renderer em browsers (#93508)
- **ZeroClaw**: Desktop com cancelamento de mensagens (#10379)
- **PicoClaw**: Deploy em Raspberry Pi com Go

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-08-27

---

## 1. Panorama do Dia

O projeto NanoBot demonstra **alta atividade de desenvolvimento** na data de hoje, com 33 itens atualizados nas últimas 24 horas (5 issues + 28 PRs). Das 28 PRs, 9 foram fechadas/merged, indicando um ritmo de integração saudável. Não houve lançamentos formais neste período. A atividade concentra-se em correções de bugs críticos para a estabilidade do sistema (especialmente WebSocket e gerenciamento de sessões), além de melhorias na WebUI. A comunidade está particularmente engajada em ferramentas de busca (AnySearch, Meta-Search) e funcionalidades de UX como notificações sonoras e conversas temporárias.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24 horas.**

O projeto não publicou novas versões neste período. Recomenda-se monitorar os PRs em conflito (#5234, #5257, #5339, #5364, #5504) que, uma vez resolvidos, podem compor um próximo release focado em estabilidade e funcionalidades de busca.

---

## 3. Progresso do Projeto

### PRs Fechadas/Merged (9 total)

| PR | Título | Impacto |
|---|---|---|
| [#5551](https://github.com/HKUDS/nanobot/pull/5551) | fix(session): clarify read_session query semantics | Corrige comportamento de filtro de queries em `read_session`; adiciona cobertura de regressão |
| [#5552](https://github.com/HKUDS/nanobot/pull/5552) | refactor(agent): make checkpoint recovery ownership explicit | Clarifica propriedade de recovery no ciclo de vida do AgentLoop |
| [#5548](https://github.com/HKUDS/nanobot/pull/5548) | refactor(webui): isolate websocket application orchestration | Melhora separação de responsabilidades no pipeline WebSocket |
| [#5554](https://github.com/HKUDS/nanobot/pull/5554) | refactor(agent): reduce loop and runner parameter plumbing | Simplifica passagem de parâmetros entre AgentLoop e Runner |

**Destaque:** As quatro PRs de refactoring fechadas hoje contribuem para a **saúde arquitetural** do projeto, reduzindo complexidade técnica e melhorando manutenibilidade. A #5551 é especialmente relevante por resolver ambiguidade no uso da tool `read_session` que foi reportada como bug em [#5550](https://github.com/HKUDS/nanobot/issues/5550).

---

## 4. Temas Quentes da Comunidade

### Issues com Mais Comentários

| Issue | Título | Comentários | Tipo |
|---|---|---|---|
| [#5505](https://github.com/HKUDS/nanobot/issues/5505) | Add AnySearch as a web search provider | 5 | enhancement |

**Análise — #5505 (AnySearch Integration):**
A equipe do AnySearch propõe integração como novo provedor de busca. Diferencia-se por oferecer métodos API, MCP e Skill, sem necessidade de chave de API. Este pedido reflete **demanda por diversificação de provedores de busca** além das opções existentes (DuckDuckGo, Google, Brave, Bing). A discussão ativa (5 comentários) indica interesse da comunidade em provedores alternativos.

### PRs com Atividade Significativa (conflitos/resolução)

| PR | Título | Status |
|---|---|---|
| [#5234](https://github.com/HKUDS/nanobot/pull/5234) | feat(agent): integrate mst-python as metasearch provider | ABERTA (conflict) |
| [#2108](https://github.com/HKUDS/nanobot/pull/2108) | Multi agent handoff | ABERTA (conflict) |
| [#5364](https://github.com/HKUDS/nanobot/pull/5364) | feat(webui): add temporary side conversations | ABERTA (conflict) |

**Observação:** Três PRs importantes possuem conflitos não resolvidos. O PR #2108 (Multi-agent handoff) está em aberto desde março de 2026, sugerindo complexidade técnica significativa. A funcionalidade de side conversations (#5364) tem alta demanda para UX.

---

## 5. Bugs e Estabilidade

### Bugs Reportados (3 issues fechadas)

| Issue | Severidade | Resumo | Status |
|---|---|---|---|
| [#5532](https://github.com/HKUDS/nanobot/issues/5532) | p2 | Missing import de `mask_session_key` em autocompact.py — erro ao processar comando de limpeza de recursos | **FECHADA** |
| [#5550](https://github.com/HKUDS/nanobot/issues/5550) | — | `read_session` retorna histórico vazio com queries curinga (`*`, `.*`) | **FECHADA** (via #5551) |
| [#5527](https://github.com/HKUDS/nanobot/issues/5527) | — | Sidebar WebUI mostra "Untitled" quando `unifiedSession` está habilitado | **FECHADA** |

### Bugs Em Andamento (PRs abertas)

| PR | Severidade | Título |
|---|---|---|
| [#5553](https://github.com/HKUDS/nanobot/pull/5553) | p1 | fix(agent): hold goal continuation after failed completion attempt |
| [#5504](https://github.com/HKUDS/nanobot/pull/5504) | p1 | fix(ui): surface model retry status |
| [#5544](https://github.com/HKUDS/nanobot/pull/5544) | p1 | fix(gateway): recover degraded WebSocket listener |
| [#5543](https://github.com/HKUDS/nanobot/pull/5543) | p2 | fix(tui): surface chat connection failures |
| [#5483](https://github.com/HKUDS/nanobot/pull/5483) | p2 | fix(session): prevent deleted sessions from being recreated by delayed messages |

**Análise de Severidade:**
- **3 bugs p1** em resolução ativa: problemas críticos de estabilidade (WebSocket listener recovery, model retry status, goal continuation)
- **2 bugs p2** adicionais: falhas de conexão TUI e recreation de sessões deletadas
- A concentração de bugs p1 indica foco da equipe em **confiabilidade do sistema de agentes**

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| Issue/PR | Título | Tipo | Relevância |
|---|---|---|---|
| [#5505](https://github.com/HKUDS/nanobot/issues/5505) | Add AnySearch as a web search provider | enhancement | Integração de busca alternativa (key-optional) |
| [#5524](https://github.com/HKUDS/nanobot/issues/5524) | WebUI 会话结束通知铃声 | good first issue | Notificação sonora ao completar turn |
| [#5234](https://github.com/HKUDS/nanobot/pull/5234) | feat(agent): integrate mst-python as metasearch provider | feature (PR) | Meta-search agregador (DucDuckGo, Google, Brave, Bing) |
| [#5364](https://github.com/HKUDS/nanobot/pull/5364) | feat(webui): add temporary side conversations | feature (PR) | Conversas temporárias em abas |
| [#5537](https://github.com/HKUDS/nanobot/pull/5537) | feat(my): persist session focus across turns | feature (PR) | Persistência de foco entre turns |

**Sinais de Roadmap Identificados:**

1. **Diversificação de provedores de busca** — Tanto AnySearch (#5505) quanto Meta-Search (#5234) buscam expandir opções de busca. A integração de múltiplas fontes com fusão de rankings (RRF) é tendência.

2. **Melhorias de UX WebUI** — Notificações sonoras (#5524) e conversas temporárias (#5364) indicam foco em experiência do usuário durante esperas longas.

3. **Persistência de estado de sessão** — O PR #5537 (focus persistence) sugere evolução na capacidade de continuidade entre turns.

4. **Multi-agent handoff** — O PR #2108 em desenvolvimento há meses sinaliza ambição de escalabilidade multi-agente.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Cenário | Problema | Issue |
|---|---|---|
| **WebUI com sessão unificada** | Sidebar não exibe títulos corretos quando `unifiedSession: true` está ativo | [#5527](https://github.com/HKUDS/nanobot/issues/5527) |
| **Leitura de histórico** | `read_session` com query curinga retorna vazio; modelos não conseguem acessar histórico completo | [#5550](https://github.com/HKUDS/nanobot/issues/5550) |
| **Comandos de limpeza** | Erro ao executar comandos de exclusão de recursos e limpeza de memória | [#5532](https://github.com/HKUDS/nanobot/issues/5532) |
| **Task longa sem notificação** | Usuário precisa ficar na tela esperando para perceber resposta do agente | [#5524](https://github.com/HKUDS/nanobot/issues/5524) |

### Necessidades Identificadas

1. **Feedback proativo:** Usuários desejam notificações quando agentes completam tarefas longas (feature #5524 marcada como "good first issue")

2. **Busca flexível:** Demanda por provedores de busca sem chave API (#5505) e agregadores multi-motor (#5234)

3. **Confiabilidade de sessões:** Problemas com unifiedSession e recreation de sessões deletadas (#5483) indicam área crítica

4. **Transparência de retry:** Usuários precisam visualizar status de tentativas de retry do modelo (#5504)

---

## 8. Backlog que Merece Atenção

### Itens com Alta Prioridade e Sem Movimento Recente

| Item | Tipo | Idade | Prioridade | Notas |
|---|---|---|---|---|
| Multi agent handoff | PR | ~5 meses | Alta | [#2108](https://github.com/HKUDS/nanobot/pull/2108) — conflito persistente; funcionalidade aguardada |
| AnySearch integration | Issue | 3 dias | Alta | [#5505](https://github.com/HKUDS/nanobot/issues/5505) — aguardando triage/PR |
| Meta-search provider | PR | ~3 semanas | Alta | [#5234](https://github.com/HKUDS/nanobot/pull/5234) — conflita com outros PRs |

### Ações Recomendadas

1. **Priorizar resolução de conflitos** nos PRs #5234 e #2108 para desbloquear integrações de busca e multi-agent

2. **Revisar PR #2108** — Com 5 meses em aberto, recomenda-se decisão sobre escopo ou divisão em PRs menores

3. **Triage da issue #5505** — AnySearch oferece proposta concreta; mover para PR ou rejeitar com justificativa

4. **Merge de bugs p1** — #5553, #5504 e #5544 addressing estabilidade crítica devem ser priorizados

---

## Métricas de Saúde do Projeto

| Indicador | Valor | Avaliação |
|---|---|---|
| Issues ativas (24h) | 2 | ✅ Saudável |
| PRs abertas (24h) | 19 | ✅ Ativo |
| PRs fechadas (24h) | 9 | ✅ Ritmo de integração bom |
| Bugs p1 em aberto | 3 | ⚠️ Requer atenção |
| Releases (7 dias) | 0 | ℹ️ Sem releases recentes |
| PRs com conflito | 5 | ⚠️ Bloqueios pendentes |

**Conclusão Geral:** O NanoBot demonstra **saúde de desenvolvimento estável**, com alta atividade e foco em correções de estabilidade. O principal risco é o acúmulo de PRs com conflitos e itens em backlog longo (especialmente multi-agent handoff). O time está respondendo bem a bugs reportados, com 3 de 5 issues fechadas no período.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-08-27

---

## 1. Panorama do Dia

O projeto Hermes Agent manteve um **ritmo de atividade intenso** nas últimas 24 horas, com 50 issues e 50 PRs atualizados — evidenciando uma comunidade engajada e ciclo de desenvolvimento acelerado. **Nenhuma release foi publicada**, sugerindo que o time pode estar em fase de estabilização antes de um próximo lançamento. A saúde geral do projeto apresenta **sinais de pressão operacional**: bugs de estabilidade críticos (crashes no gateway, corrupção de banco de dados, problemas de instalação) competem por atenção com demandas crescentes de features e problemas de compatibilidade multi-plataforma (Windows, macOS, Linux). A proporção de 48 issues abertas versus apenas 2 fechadas indica um backlog crescente que merece monitoração.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24 horas.**

O projeto nãoemitiu novas versões desde o período analisado. As últimas versões mencionadas nos issues são v0.20.4 e v0.20.5 (2026.8.19), indicando que a base de usuários está aguardando uma nova publicação com as correções em andamento.

---

## 3. Progresso do Projeto

### PRs Abertos (High-Impact)

| PR | Título | Componentes | Impacto |
|----|--------|-------------|---------|
| [#95886](https://github.com/NousResearch/hermes-agent/pull/95886) | fix(desktop): keep streamed text when completion is empty | desktop | **P0** — Corrige perda durável de texto em streams |
| [#95890](https://github.com/NousResearch/hermes-agent/pull/95890) | fix(desktop+serve): update no longer strands you on a white screen | desktop, dashboard | **P1** — Elimina estado irrecuperável pós-update |
| [#95433](https://github.com/NousResearch/hermes-agent/pull/95433) | fix(compression): retry a stalled summary on the fallback chain | agent, compression | **P1** — Melhora resiliência de compressão |
| [#95893](https://github.com/NousResearch/hermes-agent/pull/95893) | Slack link unfurls can no longer duplicate an in-flight turn | slack, plugins | **P3** — Evita respostas duplicadas |
| [#95899](https://github.com/NousResearch/hermes-agent/pull/95899) | fix(cron): multiplex deliveries use the owning profile's adapters | cron | Corrige identidade de entrega em gateways multiplexados |
| [#95885](https://github.com/NousResearch/hermes-agent/pull/95885) | fix(memory-setup): provider .env writes bypass validation gate | memory, security | **P3** — Correção de segurança em credenciais |
| [#95895](https://github.com/NousResearch/hermes-agent/pull/95895) | fix(desktop): same-id sessions stop collapsing and resuming wrong backend | desktop | Resolve confusão de sessões em múltiplos perfis |
| [#95888](https://github.com/NousResearch/hermes-agent/pull/95888) **CLOSED** | Reviewer BLOCKs now notify and wake the kanban origin | — | Melhoria em workflow de revisão |

### PRs de Features em Desenvolvimento

| PR | Título | Descrição |
|----|--------|-----------|
| [#95281](https://github.com/NousResearch/hermes-agent/pull/95281) | pm: unified package manager | Sistema unificado de gerenciamento de dependências (pacotes, lock.json, etc.) |
| [#95865](https://github.com/NousResearch/hermes-agent/pull/95865) | feat(mobile): add touch-first Hermes Desktop renderer | Shell Android Capacitor com renderer Desktop adaptado para touch |
| [#93508](https://github.com/NousResearch/hermes-agent/pull/93508) | feat(webapp): serve Desktop renderer in browsers | `hermes webapp` — renderer Desktop em navegadores |
| [#95892](https://github.com/NousResearch/hermes-agent/pull/95892) | feat(photon): native iMessage edit tool | Ferramenta para editar bubbles próprios do iMessage |
| [#89333](https://github.com/NousResearch/hermes-agent/pull/89333) | feat(skills): add optional plugin-scanner security skill | Scanner de segurança para plugins e skills |

**Resumo:** O time está ativamente endereçando bugs críticos de estabilidade (especialmente em Desktop e Windows) enquanto avança em features estratégicas como package manager unificado, suporte mobile/browser e melhorias em iMessage/Slack.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (Comentários/Reações)

| Issue | Título | Comentários | 👍 | Severidade | Link |
|-------|--------|-------------|-----|------------|------|
| #66616 | Skills index is stale or degraded | **102** | 0 | P3 | [Issue #66616](https://github.com/NousResearch/hermes-agent/issues/66616) |
| #88584 | Automated Nous integration is blocked | **34** | 0 | P3 | [Issue #88584](https://github.com/NousResearch/hermes-agent/issues/88584) |
| #87093 | Debian installation broken | **21** | 4 | P1 | [Issue #87093](https://github.com/NousResearch/hermes-agent/issues/87093) |
| #90473 | Paging broken UX on long sessions | **14** | 0 | P2 | [Issue #90473](https://github.com/NousResearch/hermes-agent/issues/90473) |
| #95003 | xAI rejects tool_search function name | **14** | 8 | P1 | [Issue #95003](https://github.com/NousResearch/hermes-agent/issues/95003) |

### Análise dos Temas

**1. Infraestrutura de Skills Degradada (#66616 - 102 comentários)**
O problema mais debatido: o índice de Skills está 29.8h desatualizado (limite: 26h), afetando o Skills Hub em `/docs/skills`. Este é um problema de automação de CI/CD que impacta a discoverabilidade de skills para usuários. A alta volumetria de comentários sugere disputas sobre priorização e ownership do workflow `.github/workflows/skills-index.yml`.

**2. Integração Nous→Enterkey Bloqueada (#88584)**
Conflitos no `cron/jobs.py` estão impedindo um merge agendado. A questão tem implicações organizacionais e pode afetar pipelines de automação de usuários downstream.

**3. Instalação Debian Quebrada (#87093 - 21 comentários, 4 👍)**
Usuários reportam falha na instalação em Debian 13.6 via script `curl | bash`. O problema envolve `uv.lock` e `npm install`. Este é um problema de DX (developer experience) crítico que afeta novos adoptantes.

**4. xAI tool_search Reservado (#95003 - 14 comentários, 8 👍)**
A API do xAI (grok-4.6) rejeita requisições com erro 400 porque o nome da função `tool_search` é reservado internamente. Este é um **blocker para provedores xAI/Grok**, indicando necessidade de mapeamento de nomes de ferramentas.

---

## 5. Bugs e Estabilidade

### Bugs P0/P1 (Críticos)

| Issue | Título | Plataforma | Status | Link |
|-------|--------|------------|--------|------|
| #95886 | keep streamed text when completion is empty | Desktop | PR aberto | [Issue #95886](https://github.com/NousResearch/hermes-agent/pull/95886) |
| #95003 | xAI rejects tool_search function name | Provider | Aberto | [Issue #95003](https://github.com/NousResearch/hermes-agent/issues/95003) |
| #87093 | Debian installation broken | Linux | Aberto | [Issue #87093](https://github.com/NousResearch/hermes-agent/issues/87093) |
| #94248 | Gateway SIGSEGV 17-72ms after delegate deadlines | macOS arm64 | Aberto | [Issue #94248](https://github.com/NousResearch/hermes-agent/issues/94248) |
| #77127 | WS disconnect race can orphan session on resume | TUI/Gateway | Aberto | [Issue #77127](https://github.com/NousResearch/hermes-agent/issues/77127) |
| #90837 | Recurring state.db corruption (11 incidents) | Gateway | Aberto | [Issue #90837](https://github.com/NousResearch/hermes-agent/issues/90837) |
| #95868 | Desktop sessions hard-deleted during gateway reload | Desktop | Aberto | [Issue #95868](https://github.com/NousResearch/hermes-agent/issues/95868) |
| #95867 | MCP stdio client drops healthy servers | MCP | Aberto | [Issue #95867](https://github.com/NousResearch/hermes-agent/issues/95867) |

### Bugs P2 (Moderados)

| Issue | Título | Área | Link |
|-------|--------|------|------|
| #95589 | Windows desktop update hangs after build | Windows | [Issue #95589](https://github.com/NousResearch/hermes-agent/issues/95589) |
| #90473 | "Show earlier messages" paging broken on long sessions | Desktop/UX | [Issue #90473](https://github.com/NousResearch/hermes-agent/issues/90473) |
| #84220 | Desktop Home binds files to previous named project | Desktop | [Issue #84220](https://github.com/NousResearch/hermes-agent/issues/84220) |
| #54922 | custom_providers[].extra_body silently dropped | Gateway | [Issue #54922](https://github.com/NousResearch/hermes-agent/issues/54922) |
| #80670 | "Could not react" on resumed conversations | Desktop | [Issue #80670](https://github.com/NousResearch/hermes-agent/issues/80670) |
| #95816 | Telegram gateway hangs at connecting | Telegram | [Issue #95816](https://github.com/NousResearch/hermes-agent/issues/95816) |
| #95577 | One-shot CLI resolves context against $HOME instead of launch dir | CLI | [Issue #95577](https://github.com/NousResearch/hermes-agent/issues/95577) |

### Bugs P3 (Menores/cosméticos)

| Issue | Título | Área | Link |
|-------|--------|------|------|
| #66616 | Skills index stale (infra automation) | CI/CD | [Issue #66616](https://github.com/NousResearch/hermes-agent/issues/66616) |
| #67869 | Discord @mention resolves to integration role | Discord | [Issue #67869](https://github.com/NousResearch/hermes-agent/issues/67869) |
| #95430 | Slack streaming posts duplicate messages | Slack | [Issue #95430](https://github.com/NousResearch/hermes-agent/issues/95430) |
| #95842 | reply_in_thread only honored for Slack | Cross-platform | [Issue #95842](https://github.com/NousResearch/hermes-agent/issues/95842) |
| #95855 | fastmcp needs mcp 1.x but pyproject pins 2.0.0 | MCP | [Issue #95855](https://github.com/NousResearch/hermes-agent/issues/95855) |

**Análise de Estabilidade:** O projeto apresenta **padrões preocupantes**:
- **Corrupção recorrente de banco de dados** (state.db) com 11 incidentes — problema de integridade de dados
- **Race conditions** em desconexão WebSocket e reload de gateway
- **Crashes SIGSEGV** em macOS arm64 em cenários específicos (deadline de delegates)
- **Problemas crônicos de instalação** em Debian/Windows (DX degradado)

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Solicitadas (Issues)

| Issue | Título | Área | Comentários | Link |
|-------|--------|------|-------------|------|
| #12323 | Personal message ingestion pipeline (iMessage/Signal/WhatsApp/X/Gmail) | Agent/Tools | 2 | [Issue #12323](https://github.com/NousResearch/hermes-agent/issues/12323) |
| #95884 | Built-in time awareness for agents | Agent | 1 | [Issue #95884](https://github.com/NousResearch/hermes-agent/issues/95884) |
| #95829 | Expose FAL FLUX 3 keyframes-to-video | Vision | 1 | [Issue #95829](https://github.com/NousResearch/hermes-agent/issues/95829) |

### Features em Desenvolvimento (PRs)

| PR | Título | Área | Link |
|----|--------|------|------|
| #95281 | Unified package manager (pm) | Infrastructure | [PR #95281](https://github.com/NousResearch/hermes-agent/pull/95281) |
| #95865 | Touch-first Hermes Desktop renderer (Android) | Mobile | [PR #95865](https://github.com/NousResearch/hermes-agent/pull/95865) |
| #93508 | Serve Desktop renderer in browsers | Web | [PR #93508](https://github.com/NousResearch/hermes-agent/pull/93508) |
| #95892 | Native iMessage edit tool | Photon | [PR #95892](https://github.com/NousResearch/hermes-agent/pull/95892) |
| #89333 | Plugin-scanner security skill | Security | [PR #89333](https://github.com/NousResearch/hermes-agent/pull/89333) |
| #95887 | Safe

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw
## Data: 27 de agosto de 2026

---

## 1. Panorama do Dia

O projeto PicoClaw apresenta **atividade moderada** em 27/08/2026, com 6 issues e 5 pull requests atualizados nas últimas 24 horas. A comunidade demonstrou engajamento significativo em issues de usabilidade — especialmente no problema de lentidão na interface web e no suporte a mensagens longas em IRC. três PRs foram mergeados, focando em correções de bugs críticos relacionados ao roteamento de agentes, suporte a topics do Telegram e execução de comandos shell. Não houve lançamentos de novas versões, indicando que a equipe está em fase de estabilização do codebase antes da próxima release.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto encontra-se em período sem releases formais. A versão mais recente conhecida continua sendo a **0.3.1**, conforme referenceda nas issues reportadas. Recomenda-se monitorar o repositório para announcements de futuras versões que deverão incorporar as correções currently em revisão.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados Recentemente

| # | Título | Impacto |
|---|--------|---------|
| [#3316](https://github.com/sipeed/picoclaw/pull/3316) | Routed-agent context management | **Crítico** — Corrigido gerenciamento de contexto, sumarização e compressão de histórico para agentes roteados via dispatch rules. Resolveu problema de perda de memória em sessões |
| [#3315](https://github.com/sipeed/picoclaw/pull/3315) | Support topics in private bot chats | **Melhoria** — Estendido suporte a topics do Telegram para chats privados com bots em modo forum |
| [#3314](https://github.com/sipeed/picoclaw/pull/3314) | Fix shell command execution with customAllowPatterns | **Bugfix** — Corrigido padrão de negação que bloqueava comandos permitidos em `customAllowPatterns` |

### Análise de Avanço

As três PRs fechadas representam **correções de bugs importantes** que afetavam funcionalidades core:
- O PR #3316 resolve uma regressão crítica no sistema de roteamento de agentes
- O PR #3315 расширяет a compatibilidade com recursos avançados do Telegram
- O PR #3314 corrige uma falha de segurança incorretamente implementada

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| # | Título | Comentários | 👍 | Status |
|---|--------|-------------|-----|--------|
| [#3287](https://github.com/sipeed/picoclaw/issues/3287) | Feature: Better support long messages in IRC | 7 | 0 | OPEN |
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Bug: Web UI chat input is very laggy | 7 | 1 | OPEN |
| [#3301](https://github.com/sipeed/picoclaw/issues/3301) | Bug: /clear and session auto-compression don't work | 5 | 0 | CLOSED |

### Análise das Demandas

**Issue #3281** (lag na interface web) é particularmente relevante por tratar de **experiência do usuário na plataforma web**, indicando possíveis problemas de performance com histórico de chat extenso. Este é um indicador de saúde do frontend que merece atenção imediata.

**Issue #3287** demonstra demanda por **suporte a mensagens longas em IRC**, um protocolo historicamente limitado a 512 bytes. A comunidade identifica a necessidade de tratar mensagens fragmentadas como единое сообщение.

---

## 5. Bugs e Estabilidade

### Bugs Abertos

| # | Severidade | Título | Impacto |
|---|------------|--------|---------|
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | **Alta** | Web UI chat input laggy | Usabilidade severa quando há histórico extenso |
| [#3339](https://github.com/sipeed/picoclaw/issues/3339) | **Alta** | Antigravity retorna 429 genérico | Autenticação Google quebrada |
| [#3338](https://github.com/sipeed/picoclaw/issues/3338) | **Média** | Slack não anexa mídia | Upload de imagens falhando |

### Bugs Resolvidos

- **#3301**: `/clear` e compressão automática de sessão funcionavam incorretamente com agentes roteados via dispatch rules
- **#3328**: Configurações `webhook_host`/`webhook_port` do LINE eram inúteis — nada as consumia

### Indicadores de Estabilidade

⚠️ **Preocupação**: A issue #3339 indica que o provider Google Antigravity retorna erro 429 mesmo com scopes OAuth válidos, sugerindo possível problema de quota ou regressão na integração.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Solicitadas

| # | Título | Descrição | Potencial Impacto |
|---|--------|-----------|-------------------|
| [#3287](https://github.com/sipeed/picoclaw/issues/3287) | Support long IRC messages | Tratar mensagens IRC fragmentadas (>512 bytes) como unidade coesa | Baixo — nicho específico |

### PRs Abertos com Features

| # | Título | Status |
|---|--------|--------|
| [#3340](https://github.com/sipeed/picoclaw/pull/3340) | fix(slack): set FileSize on media upload params | OPEN |
| [#3329](https://github.com/sipeed/picoclaw/pull/3329) | fix(line): warn on inert webhook configs | OPEN |

### Sinais de Roadmap

O padrão de issues e PRs sugere foco em:
1. **Estabilidade de integrações** (Slack media, LINE webhook, Google Antigravity)
2. **Performance de interface web**
3. **Suporte a protocolos legados** (IRC)

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Categoria | Descrição | Frequência |
|-----------|-----------|------------|
| **Performance UI** | Lentidão ao digitar em sessões com histórico longo | 1 usuário (xpader) |
| **Integração Google** | Falha de autenticação apesar de configuração correta | 1 usuário (k3XD16) |
| **Roteamento de Agentes** | Perda de contexto em agentes roteados | 1 usuário (j-v) |
| **Execução de Comandos** | Comandos permitidos bloqueados | 1 usuário (j-v) |

### Cenários de Uso Identificados

- **Multi-channel routing**: Usuários configuram dispatch rules para direcionar conversas a agentes específicos
- **Servidores Raspberry PI**: Deploy em hardware limitado com Go 1.25.11
- **Integração Discord + Telegram**: Uso simultâneo de múltiplos canais de comunicação

### Indicadores de Satisfação

**Neutro**: As issues apresentam bugs específicos em vez de reclamações amplas. A ausência de issues negativas indica que funcionalidades core estão estáveis para maioria dos usuários.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta Há Tempo

| # | Título | Criado | Atualizado | Dias Inativo |
|---|--------|--------|------------|--------------|
| [#3339](https://github.com/sipeed/picoclaw/issues/3339) | Antigravity 429 bug | 2026-08-17 | 2026-08-26 | 9 |
| [#3338](https://github.com/sipeed/picoclaw/issues/3338) | Slack media upload | 2026-08-17 | 2026-08-26 | 9 |

### Issues com Tag `stale`

Todas as 6 issues atualizadas carregam tag `stale`, indicando que **nenhuma interação da equipe core foi registrada recentemente**. Isso pode significar:
- Baixa disponibilidade de mantenedores
- Necessidade de triagem
- Issues aguardando PR correspondente

### Priorização Recomendada

1. **Crítico**: #3281 (lag de UI) — impacto direto na experiência do usuário
2. **Alto**: #3339 (Google 429) — bloqueia integração
3. **Médio**: #3338 (Slack media) — PR #3340 já aberto, precisa review

---

## Métricas Resumidas

| Indicador | Valor | Tendência |
|-----------|-------|-----------|
| Issues ativas (24h) | 4 | → Estável |
| Issues fechadas (24h) | 2 | ↑ Positivo |
| PRs abertos (24h) | 2 | → Estável |
| PRs merged (24h) | 3 | ↑ Positivo |
| Releases (24h) | 0 | → Sem mudanças |
| Issues stale | 6/6 (100%) | ⚠️ Alerta |

---

**Saúde Geral do Projeto**: **MODERADA** — Atividade consistente de community-driven bug fixes, mas alto índice de issues stale e ausência de releases indicam possível gargalo na review/merge pipeline.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-08-27

## 1. Panorama do Dia

O projeto IronClaw apresenta **alta atividade de desenvolvimento** neste ciclo de 24 horas, com 50 PRs atualizados (16 abertos, 34 merged/fechados) e 29 issues processadas. O foco principal está na preparação para a versão 1.4.0, com diversas correções de bugs e melhorias sendo forward-portadas da branch 1.3. A arquitetura de sandbox persiste como tema central, com épicos sobre executores sandboxed e bridges de arquivo. O ecossistema de notificações e a experiência de onboarding também recebem atenção significativa com correções de UI e UX.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24 horas.**

O projeto não publicou novas versões neste período. Os times estão claramente em fase de consolidação para a release 1.4.0, conforme evidenciado pelos múltiplos forward-ports e fixes críticos sendo preparados em PRs abertos.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados de Destaque

| PR | Título | Impacto |
|---|---|---|
| [#7850](https://github.com/nearai/ironclaw/pull/7850) | feat(automations): expose exact run capability facts | Expõe fatos de capacidade de automação para debugging |
| [#7905](https://github.com/nearai/ironclaw/pull/7905) | fix(threads): preserve incremental compaction summary context | Mantém contexto de summaries em compactação incremental |
| [#7914](https://github.com/nearai/ironclaw/pull/7914) | fix(extension-registry): forward-port 1.2 activation_state fix | Corrige bug de crash-loop da 1.3.0-rc.1 |
| [#7913](https://github.com/nearai/ironclaw/pull/7913) | docs(changelog): backfill v1.3.0 release entry | Documentação do changelog |
| [#7556](https://github.com/nearai/ironclaw/pull/7556) | Add Railway sandbox workspace file bridge | Bridge de arquivos para Railway sandbox |
| [#7879](https://github.com/nearai/ironclaw/pull/7879) | Adopt shared form controls in Admin Users | Padronização de componentes UI |
| [#7880](https://github.com/nearai/ironclaw/pull/7880) | Show loading shell for Notification Center | Melhoria de UX com skeleton loading |
| [#7870](https://github.com/nearai/ironclaw/pull/7870) | Fix missing i18n across exposed WebUI routes | Localização completa de strings |
| [#7878](https://github.com/nearai/ironclaw/pull/7878) | Replace legacy Extensions panels with shared Panel | Modernização de componentes |
| [#7859](https://github.com/nearai/ironclaw/pull/7859) | Move changelog to navbar tab | Reorganização de navegação |

**Avanços arquiteturais notáveis:**
- O PR [#7810](https://github.com/nearai/ironclaw/pull/7810) implementa **credential bindings declaradas via manifest** para execução direta de CLIs autenticados (como `gh`) dentro do sandbox Docker, sem expor tokens.
- O PR [#7904](https://github.com/nearai/ironclaw/pull/7904) re-landerza correções portáveis de confiabilidade de ferramentas extraídas do branch OMP.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

**[#7732](https://github.com/nearai/ironclaw/issues/7732)** — Epic: Persistent per-user sandbox with iron-proxy (10 comentários)
- **Resumo:** Problema arquitetural onde Docker local cria/remove containers por comando shell, sem persistência de `/workspace` entre execuções.
- **Demanda:** Sandbox persistente por usuário que sobrevive entre comandos shell.
- **Status:** Aberta, aguardando implementação.

**[#7891](https://github.com/nearai/ironclaw/issues/7891)** — perf(extensions): MIME headers custam 14.3s de inferência (4 comentários)
- **Resumo:** Dois chamadas `gmail.get_message` (274ms + 290ms) resultaram em **19.7 segundos de turn**, sendo 19.2s apenas inferência do modelo, devido a 49,152 bytes de MIME headers não solicitados no prompt.
- **Demanda:** Otimização de payloads de capacidade com projeção seletiva.
- **Impacto:** Médio-alto, afeta performance de extensões.

**[#4625](https://github.com/nearai/ironclaw/issues/4625)** — Slack channel-routed personal and team agents (1 comentário, 1 reaction)
- **Resumo:** Proposta de Slack como superfície primária para IronClaw, com fase 1 sendo "Slack-as-a-channel".
- **Demanda:** Integração nativa Slack com comportamento de agente.
- **Roadmap:** v1.5.0

**[#7871](https://github.com/nearai/ironclaw/issues/7871)** — Epic: Slack-to-console bridge + rich interactive Slack UX
- **Resumo:** Slack ainda funciona como "thin chat transport" ao invés de surface de controle rico.
- **Demanda:** Continuidade durável, metadata visível, ações rápidas de follow-up.

---

## 5. Bugs e Estabilidade

### Bugs Abertos (por Severidade)

**🔴 Alta Severidade:**
- **[#7918](https://github.com/nearai/ironclaw/issues/7918)** — HTTP 413 ao baixar trajetórias com alta contagem de tool-calls
  - Bloqueia download de exemplos com muitas chamadas de ferramenta.
- **[#6590](https://github.com/nearai/ironclaw/issues/6590)** — `serve` falha no Windows com erro de overlap de workspace/skill roots
  - Afeta perfis `local-dev` e `local-dev-yolo`.

**🟡 Média Severidade:**
- **[#7912](https://github.com/nearai/ironclaw/issues/7912)** — Telegram removal retorna 503 do endpoint WebChat
  - Extension endpoint falha ao remover Telegram.
- **[#7447](https://github.com/nearai/ironclaw/issues/7447)** — Agent fails after calling too many tools
  - Agente entra em loop fetch-retry redundante, gastando budget de tool-calls.

**🟢 Baixa Severidade:**
- **[#7895](https://github.com/nearai/ironclaw/issues/7895)** — Usuários reportam dificuldade em configurar personality (agent.md)
  - Solicitação de UI dedicada em Settings.

### Bugs Corrigidos Recentemente
- [#7915](https://github.com/nearai/ironclaw/pull/7915) forward-porta fixes críticos de SSH in-worker e workspace-root da 1.3 para main.
- [#7914](https://github.com/nearai/ironclaw/pull/7914) corrige activation_state row bug da 1.3.0-rc.1.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Planejadas para v1.4.0

| Issue | Feature | Status |
|---|---|---|
| [#7732](https://github.com/nearai/ironclaw/issues/7732) | Persistent per-user sandbox | Em progresso |
| [#7781](https://github.com/nearai/ironclaw/issues/7781) | Design System Phases 2–3 + theme reskin | Aberta |
| [#7392](https://github.com/nearai/ironclaw/issues/7392) | Replace coding tools with OMP surface | Fechada |
| [#7893](https://github.com/nearai/ironclaw/issues/7893) | automation_lessons_set + fire-time injection | PR aberto |
| [#7903](https://github.com/nearai/ironclaw/issues/7903) | Persistent sandboxed executor spike | Spike aberto |

### Features Planejadas para v1.5.0

| Issue | Feature |
|---|---|
| [#7909](https://github.com/nearai/ironclaw/issues/7909) | Telegram and Slack Bot Groups |
| [#7895](https://github.com/nearai/ironclaw/issues/7895) | Personality (agent.md) editor in Settings |
| [#4625](https://github.com/nearai/ironclaw/issues/4625) | Slack channel-routed agents |

### Novas Demandas Identificadas

**[#7867](https://github.com/nearai/ironclaw/issues/7867)** — Voice-to-text in WebUI composer
- **Proposta:** Adicionar entrada de voz ao composer do WebUI.
- **Justificativa:** "Falando é mais rápido que digitando para qualquer coisa maior que uma frase."

**[#7911](https://github.com/nearai/ironclaw/issues/7911)** — Context Management Optimisations
- Epic para otimização de gerenciamento de contexto.

**[#7917](https://github.com/nearai/ironclaw/issues/7917)** — V2 read result + tool output parser
- Proposta de refatoração do parser de output de ferramentas antes de armazenar em durable storage.

**[#7875](https://github.com/nearai/ironclaw/issues/7875)** — Publish extension auth notifications
- Notificações para credenciais expiradas/revogadas de extensões.

**[#7872](https://github.com/nearai/ironclaw/issues/7872)** — Expand notification center coverage
- Adicionar notificações para falhas de pre-run de automações e blocks de política.

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Problema | Issue | Evidência |
|---|---|---|
| **Configuração de personality complexa** | [#7895](https://github.com/nearai/ironclaw/issues/7895) | "me trying to set up personality with ironclaw" + request por UI dedicada |
| **Performance de extensões Gmail** | [#7891](https://github.com/nearai/ironclaw/issues/7891) | Turn de 19.7s (19.2s inferência) por headers MIME |
| **Incompatibilidade Windows** | [#6590](https://github.com/nearai/ironclaw/issues/6590) | `serve` quebra completamente em Windows |
| **Fluxo de onboarding** | [#7815](https://github.com/nearai/ironclaw/issues/7815) ✅ | Closed com trabalho cumulativo de net-new |
| **Acesso a arquivos locais na cloud** | [#2117](https://github.com/nearai/ironclaw/issues/2117) | Bloqueador para vaults Obsidian, dirs locais |

### Sinais Positivos

- **Onboarding melhorado:** Issue [#7815](https://github.com/nearai/ironclaw/issues/7815) fechada com trabalho concluído (sugestões nativas, backend durável, surface OOBE).
- **UI modernization:** Diversos PRs de padronização de componentes (form controls, panel, loading shells, i18n).
- **Logs de uso:** Issue [#6837](https://github.com/nearai/ironclaw/issues/6837) fechada — agora há logging info-level para growth/usage stats.

---

## 8. Backlog que Merece Atenção

### Issues Antigas com Baixa Atividade (potencial technical debt)

| Issue | Criada | Status | Prioridade |
|---|---|---|---|
| [#2117](https://github.com/nearai/ironclaw/issues/2117) — ironclaw-bridge para arquivos locais/MCP | 2026-04-07 | Aberta | Enhancement, size L |
| [#6369](https://github.com/nearai/ironclaw/issues/6369) — Epic: gaps do v1 src/ retirement | 2026-07-20 | Aberta | Epic, v1.4.0 |
| [#4625](https://github.com/nearai/ironclaw/issues/4625) — Slack channel-routed agents | 2026-06-09 | Aberta | Roadmap, v1.5.0 |

### Issues Recentes Sem Comentários (requer triagem)

| Issue | Criada | Título |
|---|---|---|
| [#7918](https://github.com/nearai/ironclaw/issues/7918) | 2026-08-26 | HTTP 413 for giant trajectories |
| [#7917](https://github.com/nearai/ironclaw/issues/7917) | 2026-08-26 | V2 read result parser proposal |
| [#7911](https://github.com/nearai/ironclaw/issues/7911) | 2026-08-26 | Context Management Optimisations |
| [#7910](https://github.com/nearai/ironclaw/issues/7910) | 2026-08-26 | Migrate B2B to Crabshack |
| [#7909](https://github.com/nearai/ironclaw/issues/7909) | 2026-08-26 | Telegram and Slack Bot Groups |

---

## Métricas de Saúde do Projeto

| Indicador | Valor | Avaliação |
|---|---|---|
| Issues ativas (24h) | 21 abertas / 8 fechadas | 🟢 Saúde moderada |
| PRs processados (24h) | 50 (34% merge rate implícito) | 🟢 Alta atividade |
| Releases (24h) | 0 | 🟡 Pré-release |
| Bugs críticos abertos | 2 | 🟡 Requer atenção |
| Epics v1.4.0 em progresso | 5+ | 🟢 Roteiro ativo |
| Cobertura de features v1.5.0 | 3+ | 🟢 Visibilidade de roadmap |

---

*Relatório gerado automaticamente com base em dados do GitHub de 2026-08-27. Todas as métricas referem-se ao período das últimas 24 horas.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do Projeto CoPaw (QwenPaw) — 2026-08-27

## 1. Panorama do dia

O projeto CoPaw (QwenPaw) apresenta **alta atividade** em 27/08/2026, com 36 issues e 44 PRs atualizados nas últimas 24h. Não houve releases formais, indicando que a equipe está em ciclo de desenvolvimento intensivo para a versão 2.2.0. A comunidade demonstra forte interesse em funcionalidades enterprise (multi-usuário, Hub multi-tenant) e há múltiplos reports de bugs críticos relacionados a estabilidade de tarefas, conexões TLS e comportamento de UI. O time de maintainers está ativo com 26 PRs merged/fechados, incluindo melhorias significativas em CI/CD e cobertura de testes.

## 2. Lançamentos

**Nenhum release registrado nas últimas 24h.**

A ausência de releases sugere foco em preparação para a versão 2.2.0, que conforme a issue [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) trará o **QwenPaw Hub multi-tenant**.

---

## 3. Progresso do Projeto

### PRs Merged/Closed Importantes

| # | Título | Área | Impacto |
|---|--------|------|---------|
| [#7250](https://github.com/agentscope-ai/QwenPaw/pull/7250) | fix(scripts): local test runner skips suites and reports false success | Testing | Corrige falha crítica no test runner local que pulava suites inteiras |
| [#7292](https://github.com/agentscope-ai/QwenPaw/pull/7292) | test(coverage): add 19 unit test files (+5.02pp coverage) | Testing | Aumenta cobertura de 58.04% para 63.06% com 1.148 novos testes |
| [#7325](https://github.com/agentscope-ai/QwenPaw/pull/7325) | test(console): expand console unit tests (+382 cases) | Console | Adiciona 382 casos de teste para frontend console |
| [#7326](https://github.com/agentscope-ai/QwenPaw/pull/7326) | feat(ci): split nightly E2E into three parallel priority shards | CI/CD | Paraleliza suite E2E e implementa fail-closed summary |
| [#7293](https://github.com/agentscope-ai/QwenPaw/pull/7293) | feat(ci): split tests.yml integration tests into three shards | CI/CD | Melhora tempo de execução de testes de integração |
| [#7277](https://github.com/agentscope-ai/QwenPaw/pull/7277) | fix(providers): refresh Aliyun and Kimi model catalogs | Providers | Atualiza catálogos de modelos com IDs atualizados |
| [#7208](https://github.com/agentscope-ai/QwenPaw/pull/7208) | feat(dingtalk): support shared session context in group chats | Channels | Implementa contexto compartilhado em grupos DingTalk |

**Destaque:** Avanços significativos em infraestrutura de testes e CI, com gains de cobertura superiores a 10pp cumulativos. A paralelização de E2E e integração deve reduzir tempo de CI em ~60-70%.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários)

| # | Título | Comentários | Tipo |
|---|--------|-------------|------|
| [#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921) | Bug: tarefas multi-step param sem aviso após "Let me do all three" | **11** | Bug |
| [#7218](https://github.com/agentscope-ai/QwenPaw/issues/7218) | peer closed connection without sending complete message body | **7** | Bug |
| [#7258](https://github.com/agentscope-ai/QwenPaw/issues/7258) | WeChat: "显示思考过程" setting inválido | **6** | Bug |
| [#6810](https://github.com/agentscope-ai/QwenPaw/issues/6810) | Windows: NSIS lock files impedem instalação | **5** | Bug |
| [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) | QwenPaw Hub multi-tenant coming in 2.2.0 | **3** | Discussion |
| [#6490](https://github.com/agentscope-ai/QwenPaw/issues/6490) | Add Volcengine Agent Plan + Xiaomi MiMo providers | **5** | Feature |

### Análise de Demandas

**🔴 Multi-usuário/Enterprise (urgente):**
- Múltiplas issues (#6335, #5780, #4702) pedindo:
  - Gerenciamento multi-usuário
  - RBAC (Role-Based Access Control)
  - Admin panel para gerenciar usuários
- A issue [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) confirma que **Hub multi-tenant chega na 2.2.0**, indicando alinhamento estratégico

**🟡 Melhorias de UI/UX:**
- Otimização da página de deploy ([#7177](https://github.com/agentscope-ai/QwenPaw/issues/7177))
- Seleção de opções via popup ao invés de input textual ([#7279](https://github.com/agentscope-ai/QwenPaw/issues/7279))
- Auto-clear de tarefas em background ([#7280](https://github.com/agentscope-ai/QwenPaw/issues/7280))
- Melhor descrição para opção "deletar cache" na desinstalação ([#7188](https://github.com/agentscope-ai/QwenPaw/issues/7188))

---

## 5. Bugs e Estabilidade

### Severidade Alta (crashes/bloqueios)

| # | Título | Status | Severidade |
|---|--------|--------|------------|
| [#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921) | Agent para após planejamento sem executar | **OPEN** | 🔴 Crítica |
| [#7311](https://github.com/agentscope-ai/QwenPaw/issues/7311) | v2.1.1b2: missing `_qwenpaw_remote_backend` — tools quebradas | **OPEN** | 🔴 Crítica |
| [#7298](https://github.com/agentscope-ai/QwenPaw/issues/7298) | OpenSSL 3.0.x TLS handshake resets (DPI carrier) | **OPEN** | 🔴 Crítica |
| [#7218](https://github.com/agentscope-ai/QwenPaw/issues/7218) | peer closed connection (chunked read incomplete) | **OPEN** | 🔴 Alta |

### Severidade Média (regressões/UX)

| # | Título | Status | Severidade |
|---|--------|--------|------------|
| [#7258](https://github.com/agentscope-ai/QwenPaw/issues/7258) | WeChat: setting "não mostrar pensamento" não funciona | CLOSED | 🟡 Média |
| [#7306](https://github.com/agentscope-ai/QwenPaw/issues/7306) | Cursor/foco pula linha em input multi-linha | **OPEN** | 🟡 Média |
| [#7321](https://github.com/agentscope-ai/QwenPaw/issues/7321) | Tool finalizado mas UI mostra "executando" | **OPEN** | 🟡 Média |
| [#7324](https://github.com/agentscope-ai/QwenPaw/issues/7324) | Notificações de task agendada não chegam (race condition) | **OPEN** | 🟡 Média |
| [#7206](https://github.com/agentscope-ai/QwenPaw/issues/7206) | /compact falha com ValidationError (regressão v2.1.1-beta.1) | CLOSED | 🟡 Média |

### PR Relacionado (fix em progresso)
- [#7331](https://github.com/agentscope-ai/QwenPaw/pull/7331) — bound oversized single-line tool results (protege contra contextos inflationados)

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| # | Título | Área | Prioridade |
|---|--------|------|------------|
| [#6490](https://github.com/agentscope-ai/QwenPaw/issues/6490) | Adicionar Volcengine Agent Plan + Xiaomi MiMo API | Providers | Alta |
| [#7252](https://github.com/agentscope-ai/QwenPaw/issues/7252) | OpenViking-backed long-term memory backend | Memory | Média |
| [#7080](https://github.com/agentscope-ai/QwenPaw/pull/7080) | PowerContext pluggable memory backend (PR) | Memory | Média |
| [#7158](https://github.com/agentscope-ai/QwenPaw/issues/7158) | DingTalk: contexto compartilhado em grupos (merged) | Channels | Alta |
| [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) | QwenPaw Hub multi-tenant para 2.2.0 | Enterprise | 🔴 Prioritária |
| [#6285](https://github.com/agentscope-ai/QwenPaw/issues/6285) | Adicionar qwen3.8-max-preview no Aliyun Token Plan | Providers | Média |

### PRs Under Review (Features em desenvolvimento)

| # | Título | Área |
|---|--------|------|
| [#7330](https://github.com/agentscope-ai/QwenPaw/pull/7330) | feat(mcp): Streamable-HTTP dual-protocol client | MCP |
| [#7080](https://github.com/agentscope-ai/QwenPaw/pull/7080) | PowerContext memory backend | Memory |
| [#7190](https://github.com/agentscope-ai/QwenPaw/pull/7190) | qwenpaw-data: PyPI runtime + docker-compose demo | Deployment |

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais Reportadas

**1. Instabilidade em Tarefas Longas (🔴 Urgente)**
> "执行多步骤任务时经常自己停止且无任何提示消息...需要我说'继续'才会继续任务"
> — [Issue #6921](https://github.com/agentscope-ai/QwenPaw/issues/6921)

**2. Problemas de Conexão em Ambientes Corporativos**
> "peer closed connection without sending complete message body...长文本、推理时间长的时候，出现报错比较高"
> — [Issue #7218](https://github.com/agentscope-ai/QwenPaw/issues/7218)

**3. Experiência Windows (Instalação/Atualização)**
> "v2.1.0b1 自动更新时报错卡死...NSIS 连续弹出'无法打开要写入的文件'错误"
> — [Issue #6810](https://github.com/agentscope-ai/QwenPaw/issues/6810)

**4. Falta de Recursos Enterprise**
> "目前 QwenPaw 通过 IM 频道让团队成员使用，但认证方式是单 Bot 账号模式——任何人都可以向 Bot 发消息"
> — [Issue #5780](https://github.com/agentscope-ai/QwenPaw/issues/5780)

### Cenários de Uso Emergentes
- **Deploy corporativo:** necessidade de deployment multi-usuário com controle de acesso
- **Memória de longo prazo:** usuários querem backend customizável (PowerContext, OpenViking)
- **Integração IM:** contexto compartilhado em grupos DingTalk sendo solicitado

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta/Progresso (Stale)

| # | Título | Criado | Comentários | Status |
|---|--------|--------|-------------|--------|
| [#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921) | Agent para após planejamento | 2026-08-12 | 11 | **OPEN** (need-info) |
| [#7218](https://github.com/agentscope-ai/QwenPaw/issues/7218) | peer connection errors | 2026-08-23 | 7 | **OPEN** (need-info) |
| [#7305](https://github.com/agentscope-ai/QwenPaw/issues/7305) | model discovery não popula modelos custom | 2026-08-26 | 2 | **OPEN** |

### PRs Aguardando Review

| # | Título | Autor | Área |
|---|--------|-------|------|
| [#7330](https://github.com/agentscope-ai/QwenPaw/pull/7330) | MCP dual-protocol client | yuanxs21 | MCP |
| [#6936](https://github.com/agentscope-ai/QwenPaw/pull/6936) | coerce string-typed tool args | yutai78786 | Providers |
| [#7080](https://github.com/agentscope-ai/QwenPaw/pull/7080) | PowerContext memory backend | kic635 | Memory |

---

## Métricas Resumidas do Dia

| Indicador | Valor | Tendência |
|-----------|-------|-----------|
| Issues ativas | 21 | Neutra |
| PRs abertos | 18 | Neutra |
| PRs merged/closed | 26 | **Alta** |
| Releases | 0 | — |
| Cobertura de testes | ~63% | **↑ +5pp** |
| Tempo de CI (estimado) | Redução ~60-70% | **↑ Melhoria** |

---

## Recomendações para Maintainers

1. **🔴 Prioridade Crítica:** Investigar issue [#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921) (agent para após planejamento) — 11 comentários indica problema recorrente
2. **🔴 Prioridade Crítica:** Verificar release v2.1.1b2 com missing module ([#7311](https://github.com/agentscope-ai/QwenPaw/issues/7311))
3. **🟡 Alta Prioridade:** Consolidar requisitos do Hub multi-tenant para 2.2.0 — demanda clara da comunidade enterprise
4. **🟡 Alta Prioridade:** Resolver issues de TLS/OpenSSL ([#7298](https://github.com/agentscope-ai/QwenPaw/issues/7298)) — PR [#7328](https://github.com/agentscope-ai/QwenPaw/pull/7328) em progresso com upgrade para Python 3.13

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-08-27

---

## 1. Panorama do Dia

O projeto ZeroClaw mantém alta atividade em 27 de agosto de 2026, com **40 issues e 50 PRs atualizados nas últimas 24 horas**, sem novas releases. A atividade concentra-se em correções de segurança de alta prioridade (incluindo launchers, workspaces e cron jobs), refinamento de canais (Telegram, Mattermost, WhatsApp, Discord) e melhorias na experiência do ZeroCode. Dois PRs de performance sobre redundância de dados em contexto foram merged, demonstrando atenção contínua à eficiência. A comunidade está particularmente engajada em debates sobre design arquitetural (wire protocol, session persistence) e segurança (webhook ingress, pairing code).

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24 horas.**

- Tracker ativo: [v0.8.5 finite weekly stabilization line](https://github.com/zeroclaw-labs/zeroclaw/issues/9459) (data-alvo: 30 de agosto de 2026)

---

## 3. Progresso do Projeto

### PRs Fechados/Mergidos (2)

| # | PR | Resumo | Impacto |
|---|-----|--------|---------|
| [#10395](https://github.com/zeroclaw-labs/zeroclaw/pull/10395) | perf: stop replaying duplicated tool-result envelopes and stale reasoning | Elimina redundância no histórico de mensagens: envelopes `CallToolResult` duplicados e `reasoning_content` obsoleto não são mais reenviados a cada requisição | Redução de consumo de tokens e latência |
| [#10398](https://github.com/zeroclaw-labs/zeroclaw/pull/10398) | fix(providers): drop stale reasoning_content from replayed assistant history | Remove pensamentos já processados do contexto, evitando Inflar o prompt | Melhoria de custo e contexto |

### PRs Abertos em Destaque

| # | PR | Descrição | Risco |
|---|-----|-----------|-------|
| [#10381](https://github.com/zeroclaw-labs/zeroclaw/pull/10381) | fix(security): resolve host launchers before workspace cwd | Resolve launchers para caminhos absolutos antes de aplicar diretório de trabalho — fecha brecha S0 de sandbox | **Alto** |
| [#10391](https://github.com/zeroclaw-labs/zeroclaw/pull/10391) | fix(delegate): bounded delegate filesystem tools respect target's own workspace | Corrige #9872 — operações de arquivo em delegates bounded agora usam workspace do alvo, não do chamador | **Alto** |
| [#9986](https://github.com/zeroclaw-labs/zeroclaw/pull/9986) | feat(agents): export an agent to a portable bundle | Novo comando `zeroclaw agents export` para exportar agente com manifest, config e workspace | **Alto** |
| [#10307](https://github.com/zeroclaw-labs/zeroclaw/pull/10307) | fix(gateway): one shared pairing-code policy, stronger default | Unifica política de códigos de pareamento; aumenta espaço de busca de 10⁶ para 10⁸ | **Alto** |
| [#10350](https://github.com/zeroclaw-labs/zeroclaw/pull/10350) | ci(tests): measure affected Windows tests on pull requests | Adiciona testes Windows ao CI de forma advisory | **Alto** |
| [#9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109) | feat(providers): add native Hailo-Ollama support | Provedor nativo para Hailo-Ollama 0.5.1 com suporte a `/api/tags` e `/api/chat` | **Médio** |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários)

| # | Título | Comentários | Tipo | Link |
|---|--------|:-----------:|------|------|
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | [Tracker]: Maintainer decision queue for RFCs and design issues | 14 | tracker | A fila ativa de decisões de maintainers para RFCs e design — ponto central de governança |
| [#8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396) | RFC: Make wire protocol first-class in provider construction and onboarding | 13 | rfc | Discussão arquitetural sobre tornar o protocolo wire first-class — attracted 4 maintainers |
| [#9600](https://github.com/zeroclaw-labs/zeroclaw/issues/9600) | [Tracker]: Session-persistence contract ownership and layer ordering | 12 | tracker | Coordenação de 4 workstreams independentes tocando o mesmo contrato de persistência |
| [#10050](https://github.com/zeroclaw-labs/zeroclaw/issues/10050) | RFC: Verbatim channel send over the gateway, without an agent turn | 7 | rfc | Proposta de rota gateway para envio verbatim sem turn de agente — needs-maintainer-review |
| [#10230](https://github.com/zeroclaw-labs/zeroclaw/issues/10230) | [Bug]: Daemon startup or reload can overflow during agent initialization | 5 | bug | Stack overflow no Tokio runtime durante apply de Quickstart — risco: workflow blocked |
| [#9206](https://github.com/zeroclaw-labs/zeroclaw/issues/9206) | [Bug]: agent cron runs intermittently resolve workspace_dir to / | 5 | bug | Cron de agente resolve workspace_dir para `/` — **CLOSED** (S0, risco de segurança) |

### Análise de Demandas

- **Arquitetura e design**: Três dos top 5 issues são trackers/RFCs, indicando foco em decisões técnicas de longo prazo (wire protocol, session persistence, webhook ingress).
- **Segurança**: Múltiplos issues de alta severidade sendo discutidos simultaneamente — a comunidade demonstra preocupação com sandbox e isolamento.
- **UX/ZeroCode**: Issues sobre URLs clicáveis em transcripts, localização de metadata de config e navegação bloqueante em painéis inativos.

---

## 5. Bugs e Estabilidade

### Por Severidade

#### S0 — Data Loss / Security Risk (3 issues abertas)

| # | Título | Status | Link |
|---|--------|--------|------|
| #9916 | resolve host launchers before applying workspace cwd | in-progress | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/9916) |
| #10379 | Unable to cancel ongoing message & request for message queuing in ZeroClaw Desktop | OPEN | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/10379) |
| #10324 | cron manual trigger and run-history reads remain check-then-act across agent rename | accepted | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/10324) |

#### S1 — Workflow Blocked (1 issue)

| # | Título | Status | Link |
|---|--------|--------|------|
| #10230 | Daemon startup or reload can overflow during agent initialization | OPEN, r:needs-repro | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/10230) |

#### S2 — Degraded Behavior (11+ issues abertas)

- [#9872](https://github.com/zeroclaw-labs/zeroclaw/issues/9872) — Delegate bounded resolve filesystem para workspace errado (fix em #10391)
- [#9206](https://github.com/zeroclaw-labs/zeroclaw/issues/9206) — Cron resolve workspace_dir para `/` (**CLOSED**)
- [#10320](https://github.com/zeroclaw-labs/zeroclaw/issues/10320) — `config set` persiste valores sem validação
- [#10379](https://github.com/zeroclaw-labs/zeroclaw/issues/10379) — Botão cancelar desabilitado no Desktop
- [#10329](https://github.com/zeroclaw-labs/zeroclaw/issues/10329) — Resilient wrapper truncates overflow recovery para OpenAI-compatible
- [#10186](https://github.com/zeroclaw-labs/zeroclaw/issues/10186) — Terminal fallback text bypasses live delivery seams
- [#10390](https://github.com/zeroclaw-labs/zeroclaw/issues/10390) — Inactive Chat pane blocks ZeroCode navigation
- [#10349](https://github.com/zeroclaw-labs/zeroclaw/issues/10349) — SOP pane loading blocks ZeroCode navigation
- [#9363](https://github.com/zeroclaw-labs/zeroclaw/issues/9363) — Config metadata remains English in localized ZeroCode (fix em #10378)
- [#10394](https://github.com/zeroclaw-labs/zeroclaw/issues/10394) — MCP tool results stored as full envelope (**CLOSED** via #10395)
- [#10396](https://github.com/zeroclaw-labs/zeroclaw/issues/10396) — reasoning_content replayed for every message (**CLOSED** via #10398)

#### Flaky Tests (1)

| # | Título | Link |
|---|--------|------|
| #10371 | Flaky: `rpc::local concurrent_stale_start_is_serialized_before_cleanup` | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/10371) |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features (últimas 24h)

| # | Título | Área | Link |
|---|--------|------|------|
| #10400 | Configurable Telegram unauthorized-sender notice | channels | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/10400) |
| #10298 | Make URLs clickable in ZeroCode transcripts | zerocode | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/10298) |
| #10138 | Include Git Channel fully compiled in zeroclaw:debian Docker image | docker | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/10138) |

### RFCs em discussão

| # | Título | Área | Link |
|---|--------|------|------|
| #8396 | Make wire protocol first-class in provider construction and onboarding | architecture | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/8396) |
| #10050 | Verbatim channel send over the gateway, without an agent turn | gateway | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/10050) |
| #10346 | Gateway and channels don't share the heartbeat worker's MCP-registry-caching pattern | architecture | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/10346) |

### Features em progresso

| # | Título | Área | Link |
|---|--------|------|------|
| #7461 | Run the test suite on Windows and macOS in CI | ci | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/7461) |
| #6864 | Invert zeroclaw-channels → zeroclaw-runtime layer dependency | architecture | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/6864) |
| #9986 | Export an agent to a portable bundle (PR aberto) | agents | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/9986) |

### Possível Entrada na v0.8.5

O [tracker de estabilização v0.8.5](https://github.com/zeroclaw-labs/zeroclaw/issues/9459) (data: 30/ago) concentra os items de release iminente, incluindo:
- Correções de segurança (#10381, #10391, #10307)
- Melhorias de CI Windows/macOS (#7461, #10350)
- Localização i18n para config (#10378, #9363)

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Categoria | Descrição | Issue |
|-----------|-----------|-------|
| **Segurança de sandbox** | Host launchers resolvidos tardiamente permitem escape de workspace | [#9916](https://github.com/zeroclaw-labs/zeroclaw/issues/9916) |
| **UX Desktop** | Botão cancelar inoperante durante processamento de IA; usuário pede fila de mensagens | [#10379](https://github.com/zeroclaw-labs/zeroclaw/issues/10379) |
| **Validação de config** | `config set` aceita valores fora de range sem erro, pode causar comportamento inesperado | [#10320](https://github.com/zeroclaw-labs/zeroclaw/issues/10320) |
| **UI/TUI** | URLs não clicáveis em transcripts do ZeroCode | [#10298](https://github.com/zeroclaw-labs/zeroclaw/issues/10298) |
| **i18n** | Metadata de config permanece em inglês mesmo com locale non-English | [#9363](https://github.com/zeroclaw-labs/zeroclaw/issues/9363) |
| **Cron agent** | Jobs de agente podem resolver workspace para `/`, potencialmente afetando segurança | [#9206](https://github.com/zeroclaw-labs/zeroclaw/issues/9206) |
| **Navegação TUI** | Painéis Chat e SOP bloqueiam navegação quando inativos/inicializando | [#10390](https://github.com/zeroclaw-labs/zeroclaw/issues/10390), [#10349](https://github.com/zeroclaw-labs/zeroclaw/issues/10349) |
| **Docker** | Canal Git não incluído na imagem Debian, limitando deployments containerizados | [#10138](https://github.com/zeroclaw-labs/zeroclaw/issues/10138) |

### Cenários de Uso Identificados

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*