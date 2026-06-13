# Resumo diário do ecossistema de agentes de IA 2026-06-14

> Issues: 2 | PRs: 1 | Projetos cobertos: 7 | Gerado em: 2026-06-13 21:09 UTC

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

**Data de referência:** 2026-06-14  
**Período analisado:** Últimas 24 horas

---

## 1. Panorama do Dia

O projeto NullClaw apresenta **atividade moderada** na data de hoje, com 3 itens totalizados nas últimas 24 horas. A equipe está focada na resolução de um bug crítico de estabilidade relacionado a cron jobs do tipo agent — especificamente um use-after-free que impede a entrega de mensagens em canais como Telegram e Mattermost. Um PR com a correção já foi submetido ([#954](https://github.com/nullclaw/nullclaw/pull/954)) e aguarda revisão. Não houve lançamentos de novas versões hoje, mantendo o projeto em estado de manutenção corretiva. A comunidade demonstra interesse contínuo em ferramentas de integração, evidenciada pela issue de criação de ferramenta JIRA ([#914](https://github.com/nullclaw/nullclaw/issues/914)).

---

## 2. Lançamentos

**Nenhum novo lançamento nas últimas 24 horas.**

O projeto não publicou releases, tags ou hotfixes desde o último período analisado. Isso indica que a versão atual permanece estável — sem mudanças de breaking changes ou necessidade de notas de migração para usuários.

> **Recomendação:** Se a correção do PR #954 for approved e merged, considerar a emissão de um patch release (e.g., vX.Y.Z) para corrigir o bug de delivery em cron jobs agent-type.

---

## 3. Progresso do Projeto

### PRs em destaque

| PR | Título | Status | Impacto |
|----|--------|--------|---------|
| [#954](https://github.com/nullclaw/nullclaw/pull/954) | Fix: one-shot cron jobs silently fail to deliver messages (use-after-free in OutboundMessage.channel) | **OPEN** | 🔴 Alto — Corrige crash/falha silenciosa em delivery |

### Análise

O PR [#954](https://github.com/nullclaw/nullclaw/pull/954), aberto por **vernonstinebaker** em 2026-06-13, propõe correção para o problema descrito em [#941](https://github.com/nullclaw/nullclaw/issues/941). A root cause identificada é um **use-after-free no campo `OutboundMessage.channel`**, que causa falha silenciosa em jobs "schedule once" do tipo agent. O job executa corretamente, é removido de `cron.json`, porém nenhuma mensagem chega ao canal configurado (Telegram, Mattermost, etc.).

Este é um **PR de alta prioridade** que resolve um bug funcional significativo. Aguarda revisão e merge.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento

| Issue | Título | Comentários | Reações | Status |
|-------|--------|-------------|---------|--------|
| [#941](https://github.com/nullclaw/nullclaw/issues/941) | Agent-type cron jobs don't spawn a subprocess — Telegram delivery never happens | 7 | 0 | OPEN |
| [#914](https://github.com/nullclaw/nullclaw/issues/914) | [enhancement] Create JIRA access tool | 1 | 0 | OPEN |

### Análise

**Issue #941** é o tema mais quente da comunidade com **7 comentários**, demonstrando que outros usuários provavelmente reproduziram ou contribuíram com informações adicionais sobre o bug de delivery em cron jobs agent-type. Aissue tem 31 dias desde sua criação (criada em 2026-05-31), indicando que a comunidade aguarda correção há quase um mês.

**Issue #914** representa uma demanda de **integração empresarial** (JIRA), sinalizando que NullClaw está sendo utilizado em contextos de project management corporativo. A baixa contagem de comentários (1) e reações (0) sugere que a demanda ainda não ganhou tração significativa, mas pode indicar uma direção estratégica para o roadmap.

---

## 5. Bugs e Estabilidade

### Bug Crítico Identificado

**🔴 Severidade: ALTA**

| Campo | Detalhe |
|-------|---------|
| **Issue** | [#941](https://github.com/nullclaw/nullclaw/issues/941) |
| **Título** | Agent-type cron jobs don't spawn a subprocess — Telegram delivery never happens |
| **Sintoma** | Jobs "schedule once" com `job_type: "agent"` executam, marcam como completed, mas o subprocess nunca inicia. Nenhuma mensagem é entregue. |
| **Root Cause (identificada no PR)** | Use-after-free em `OutboundMessage.channel` |
| **Canais afetados** | Telegram, Mattermost e potencialmente todos os canais de delivery |
| **Autor** | weissfl |
| **Criação** | 2026-05-31 |
| **Última atualização** | 2026-06-13 |
| **Comments** | 7 |

### Impacto na Estabilidade

Este bug compromete a **funcionalidade core de delivery de mensagens** em workflows agendados. Usuários que dependem de cron jobs agent-type para notificações automatizadas estão sendo impactados há mais de duas semanas sem solução. A classificação como "use-after-free" sugere um problema de gerenciamento de memória que pode ter implicações além do delivery de mensagens.

> **Status de mitigação:** PR [#954](https://github.com/nullclaw/nullclaw/pull/954) aberto com correção. Aguarda review/merge.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Nova Feature Request

| Campo | Detalhe |
|-------|---------|
| **Issue** | [#914](https://github.com/nullclaw/nullclaw/issues/914) |
| **Título** | [enhancement] Create JIRA access tool |
| **Autor** | sayjeyhi |
| **Criação** | 2026-06-13 |
| **Comentários** | 1 |
| **Reações** | 0 |

### Análise do Pedido

A issue propõe a criação de uma **JIRA access tool** que permitiria:

- Autenticação segura com JIRA via NullClaw
- Leitura de issues
- Criação de tickets
- Atualização de status
- Adição de comentários
- Recuperação de informações de sprint

### Sinais de Roadmap

Este pedido indica que NullClaw está sendo utilizado em **contextos DevOps e project management** onde integração com ferramentas de gestão de projetos é valorizada. Considerando o padrão de Issues similares em projetos de agentes de IA, a inclusão de conectores para ferramentas enterprise (JIRA, Linear, Asana) pode ser um vetor de crescimento de adoção.

**Observação:** A issue ainda não recebeu feedback da equipe core (1 comentário, sem resposta oficial), sugerindo que está em fase de triagem inicial.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Dor | Evidência | Severidade |
|-----|-----------|------------|
| **Falha silenciosa em cron jobs agent-type** | Issue [#941](https://github.com/nullclaw/nullclaw/issues/941) com 7 comentários — usuários confirmam reprodução do bug | 🔴 Alta |
| **Ausência de entrega de mensagens** | O job marca como "completed" mas não entrega — falha silenciosa que passa despercebida | 🔴 Alta |
| **Dependência de integrações externas** | Demanda por JIRA ([#914](https://github.com/nullclaw/nullclaw/issues/914)) indica necessidade de ecossistema de ferramentas | 🟡 Média |

### Cenários de Uso Emergent

Baseado nas issues analisadas:

1. **Automação de notificações via Telegram**: Usuários configuram cron jobs agent-type para envio de alertas agendados
2. **Integração com sistemas de gestão de projetos**: NullClaw está sendo explorado como ponte entre automação e ferramentas como JIRA
3. **Workflows de monitoramento**: A falha em delivery afeta pipelines de monitoramento que dependem de entrega garantida de mensagens

### Satisfação/Insatisfação

O bug de delivery em cron jobs representa uma **regressão funcional** que impacta diretamente a confiança no sistema. O silêncio na entrega (sem erro explícito) é particularmente problemático — usuários podem não perceber que suas notificações não estão sendo enviadas até que seja tarde demais. A comunidade demonstra frustração medida pela quantidade de comentários na issue #941.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Aguardando Ação

| Issue | Título | Criação | Última Atualização | Comentários | Prioridade |
|-------|--------|---------|---------------------|-------------|------------|
| [#941](https://github.com/nullclaw/nullclaw/issues/941) | Agent-type cron jobs don't spawn a subprocess | 2026-05-31 | 2026-06-13 | 7 | 🔴 **ALTA** |
| [#914](https://github.com/nullclaw/nullclaw/issues/914) | Create JIRA access tool | 2026-05-13 | 2026-06-13 | 1 | 🟡 MÉDIA |

### Análise de Backlog

**Prioridade Crítica — Ação Imediata Recomendada:**

- **Issue #941**: Com 31 dias de idade e 7 comentários, esta issue precisa de resolução urgente. A comunidade aguarda merge do PR #954. Se o PR não for suficiente, pode haver necessidade de investigação adicional.

**Prioridade Média — Planejar para Próximo Ciclo:**

- **Issue #914**: Feature request de integração JIRA ainda não recebeu resposta oficial da equipe. Recomenda-se avaliar viabilidade técnica e alinhamento com roadmap antes de prometer implementação.

### Métricas de Saúde do Backlog

| Métrica | Valor | Indicador |
|---------|-------|-----------|
| Issues abertas | 2 | 🟢 Normal |
| Issues sem resposta > 30 dias | 1 (#941) | 🟡 Atenção |
| PRs abertos aguardando merge | 1 (#954) | 🟢 Normal |

---

## Conclusão e Recomendações

### Estado Geral do Projeto: 🟡 Estável com Issue Crítica Pendente

### Ações Imediatas (Próximas 24-48h)

1. **Revisar e validar PR #954** — A correção do use-after-free em `OutboundMessage.channel` é prioritária
2. **Considerar release de hotfix** — Após merge, avaliar emissão de patch para corrigir entrega em cron jobs
3. **Responder issue #941** — Confirmar para comunidade que PR está em análise e fornecer timeline estimado

### Oportunidades Estratégicas

1. **Avaliar feature JIRA** — Considerar inclusão no roadmap como diferencial competitivo
2. **Melhorar test coverage** — Bug de memory safety indica necessidade de testes para edge cases em concurrent/async scenarios

---

*Relatório gerado automaticamente com base em dados públicos do GitHub de NullClaw. Última atualização: 2026-06-14.*

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo — Ecossistema Open Source de Agentes de IA

**Data de Referência:** 2026-06-14
**Projetos Analisados:** NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw, ZeroClaw

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **dois extremos distintos de maturidade** neste período. ZeroClaw e Hermes Agent lideram em volume de atividade comunitária (91 e 100 itens respectivamente), evidenciando ciclos rápidos de feature delivery e bugfixing. Em paralelo, NullClaw opera em modo de manutenção corretiva, aguardando merge de um PR crítico para estabilização de cron jobs. A tendência mais marcante é a **fragmentação em abordagens arquiteturais** — desde o modelo de plugins via dynamic libraries nativas do ZeroClaw até o sistema de anexos incremental do IronClaw — enquanto a comunidade demonstra demanda convergente por memory management robusto, parity multi-canal e localization para mercados asiáticos.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | Releases | Saúde | Bugs Críticos |
|---------|-------------|-----------|----------|-------|---------------|
| **ZeroClaw** | 41 | 50 | 0 | 🟢 Ativa | 3 P1 abertas |
| **Hermes Agent** | 50 | 50 | 0 | 🟡 Atenção | 4 P1 + 1 CVE |
| **IronClaw** | 6 | 38 | 0 | 🟡 Pipeline | E2E quebrado (18d) |
| **NanoBot** | 5 | 20 | 0 | 🟢 Sólida | 1 Alta (#4322) |
| **CoPaw** | 11 | 9 | 0 | 🟡 Regressões | 3 Alta simultâneas |
| **PicoClaw** | 1 | 7 | 1 nightly | 🟢 Positiva | 1 Alta (#3012) |
| **NullClaw** | 2 | 1 | 0 | 🟡 Manutenção | 1 Alta (#941, 31d) |

**Observação:** Hermes Agent e ZeroClaw concentram 58% do volume total de atividade do ecossistema. A disparidade entre o projeto mais ativo (ZeroClaw, 91 itens) e o menos ativo (NullClaw, 3 itens) indica ciclos de desenvolvimento em fases radicalmente diferentes.

---

## 3. Posicionamento do Projeto Principal

### Projeto de Referência: **NullClaw**

NullClaw ocupa posição de **referência técnica** no ecossistema, com codebase madura e comunidade consolidada em notificações automatizadas via Telegram/Mattermost. Seu diferencial primário é a **estabilidade de cron jobs agent-type**, embora o bug de use-after-free em `OutboundMessage.channel` (#941, 31 dias) comprometa essa posição temporariamente.

| Dimensão | Posição | Comparação |
|----------|---------|------------|
| **Volume de atividade** | Menor (3 itens/24h) | 30x menos que ZeroClaw |
| **Maturidade da codebase** | Alta | Estável desde últimos releases |
| **Inovação de features** | Baixa | Modo manutenção corretiva |
| **Diversidade de canais** | Média | Telegram, Mattermost (sem Discord/Matrix) |
| **Demanda corporativa** | Alta | Issue #914 (JIRA) sinaliza interesse enterprise |

**Vulnerabilidade:** A dependência de um único contributor (vernonstinebaker) no PR crítico #954 expõe risco de gargalo em review. Em contraste, ZeroClaw demonstra distribuição de contributions mais equilibrada.

---

## 4. Focos Técnicos Compartilhados

### 4.1 Memory Management e Context Window

Três projetos enfrentam desafios similares em gestão de memória conversacional:

| Projeto | Abordagem | Status |
|---------|-----------|--------|
| **NanoBot** | Sumarização de session tail durante idle compaction (#4326) | ✅ Resolvido |
| **Hermes Agent** | Auto Dream / Memory Consolidation (#10771) | 🔄 Proposto (5 👍, 7 comentários) |
| **CoPaw** | Context compression com threshold de persona (#5171) | 🔴 Bug: zera completamente |

**Convergência:** A comunidade demonstra que **idle compaction com janela configurável** é o padrão emergente. NanoBot liderou com implementação concreta; Hermes Agent segue com design mais ambicioso (inspirado em Claude Code).

### 4.2 Cron Jobs e Scheduled Automation

| Projeto | Problema | Severity |
|---------|----------|----------|
| **NullClaw** | Use-after-free em delivery de cron jobs agent-type | 🔴 Alta (31 dias) |
| **Hermes Agent** | Cron jobs não podem usar memory() tool (#43367) | 🟡 Arquitetural |
| **CoPaw** | Cron agent não executa write_file/spawn_subagent (#5174) | 🟡 Limitação |

**Convergência:** A limitação de `skip_memory=True` em scheduled jobs é problema arquitetural transversal. Soluções variam de hotfix (NullClaw) a redesign (Hermes Agent).

### 4.3 Desktop App Stability

| Projeto | Problema | Impacto |
|---------|----------|---------|
| **Hermes Agent** | Crash deleta .env e config.yaml (#45758) | 🔴 P1 — perda de dados |
| **CoPaw** | Startup de 10+ min após migração Tauri (#5047) | 🟡 Experiência degradada |
| **ZeroClaw** | macOS app não detecta permissões (#7527) | 🟡 Usabilidade |

**Convergência:** Desktop apps baseados em Tauri/Electron apresentam problemas de startup e persistence. A comunidade indica necessidade de regression testing mais robusto antes de releases.

### 4.4 CVE de Segurança

| Projeto | Vulnerabilidade | Status |
|---------|-----------------|--------|
| **Hermes Agent** | CVE-2026-48063 no Baileys (WhatsApp) | 🔴 Aguardando bump ≥7.0.0-rc12 |

---

## 5. Análise de Diferenciação

### 5.1 Arquitetura de Plugins

| Projeto | Paradigma | Vantagem |
|---------|-----------|----------|
| **ZeroClaw** | Dynamic libraries nativas + OCI registries (#7420, #7497) | Performance, type safety, supply chain seguro |
| **NanoBot** | MCP (Model Context Protocol) servers | Interoperabilidade, ecosystem existente |
| **NullClaw** | JSON-based tools | Simplicidade, menor barreira de entrada |
| **IronClaw** | Sistema de anexos modular (#4644) | Flexibilidade de formatos, landing crates |

### 5.2 Mercado-Alvo

| Projeto | Foco Primário | Mercados |
|---------|---------------|----------|
| **CoPaw** | Localization SE Asia | Vietnamita (#5169), Zalo (#5168) |
| **PicoClaw** | Multi-provider flexibility | FreeBSD, OpenRouter, MiniMax |
| **Hermes Agent** | Enterprise integrations | Matrix, Telegram, WhatsApp |
| **ZeroClaw** | Power users / TUI | Discord, Slack, canais asiáticos |
| **NullClaw** | Automação de notificações | Telegram, Mattermost |

### 5.3 Estratégia de Features

| Projeto | Diferencial | Status |
|---------|-------------|--------|
| **NanoBot** | TUI nativa com markdown (#4329) | Em desenvolvimento |
| **NanoBot** | TTS multi-provider (#4316) | Em revisão |
| **IronClaw** | Aprovações persistentes entre threads (#4825) | Design pending |
| **PicoClaw** | Image compression pipeline (#2964) | 17 dias sem merge |
| **ZeroClaw** | RFC unificação de turn engines (#7415→#7540) | ✅ Merged |

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração

| Projeto | PRs merged (24h) | Velocidade | Fase |
|---------|------------------|------------|------|
| **ZeroClaw** | 14 | 🔴 Muito Alta | Feature-driven |
| **Hermes Agent** | 10 | 🔴 Alta | Bugfix + Features |
| **IronClaw** | 12 | 🔴 Alta | Feature infrastructure |
| **NanoBot** | 5 | 🟡 Moderada | Estabilização |
| **CoPaw** | 2 | 🟡 Baixa | Bugfix reactivo |
| **PicoClaw** | 5 | 🟢 Equilibrada | Qualidade de vida |
| **NullClaw** | 0 | 🔴 Estagnada | Aguardando merge |

### 6.2 Distribuição de Contribuições

| Projeto | Padrão | Observação |
|---------|--------|------------|
| **IronClaw** | Concentrado (henrypark133: 6 PRs em 1 dia) | Bugfixing intensivo em session |
| **NullClaw** | Concentrado (vernonstinebaker: único contributor) | Gargalo em review |
| **ZeroClaw** | Diversificado | Comunidade ativa em múltiplas áreas |
| **Hermes Agent** | Diversificado | ~25 contributors únicos |

### 6.3 Regression Risk

| Projeto | Regressões Recentes | Risco |
|---------|---------------------|-------|
| **CoPaw** | v1.1.11.post2: Gemini tool calling, download anexos, chat hang | 🔴 Alto — 3 bugs alta simultâneos |
| **NanoBot** | NameError em #4322 (branch feature) | 🟡 Contido — afeta apenas branch |
| **Hermes Agent** | Desktop crash (#45758) | 🔴 P1 — perda potencial de dados |
| **ZeroClaw** | Canvas store regression (#7563) | 🟡 Gateway web |

---

## 7. Sinais de Tendência

### 7.1 Tendências de Arquitetura

| Tendência | Projetos | Evidência |
|-----------|----------|-----------|
| **Plugins v2 via dynamic libraries** | ZeroClaw | RFC #7420 com 3 comentários |
| **OCI registries para distribuição** | ZeroClaw | RFC #7497 com 2 comentários |
| **Memory consolidation automática** | Hermes Agent, NanoBot | Issue #10771 (5👍) + PR #4326 |
| **Runtime de subagentes** | NanoBot, CoPaw | Presets configuráveis (#4291), cron limitations |

### 7.2 Tendências de Mercado

| Tendência | Projetos | Evidência |
|-----------|----------|-----------|
| **Localization SE Asia** | CoPaw, PicoClaw | Vietnamita (#5169), zh-TW (#2935) |
| **Enterprise integrations (JIRA)** | NullClaw | Issue #914 (1 comentário, 1 dia) |
| **Voice/TTS multi-provider** | NanoBot, PicoClaw | PRs #4316, #3119 |
| **Remote agent mode** | PicoClaw, ZeroClaw | WebSocket remote (#3118), ACP Bridge (#6823) |

### 7.3 Padrões de Bug Comuns

| Padrão | Frequência | Exemplo |
|--------|------------|---------|
| **Use-after-free em async/cron** | 2 projetos | NullClaw #954, potencial em IronClaw |
| **Timeout hardcoded** | 2 projetos | ZeroClaw #6723, potencial geral |
| **Non-UTF8 handling** | 2 projetos | ZeroClaw #7521, potencial geral |

### 7.4 Recomendações por Perfil

| Perfil | Recomendação |
|--------|--------------|
| **Desenvolvedor contributing** | Focar em IronClaw (volume alto, distribuição diversificada) ou ZeroClaw (RFCs activos, comunidade engajada) |
| **Enterprise evaluando** | Considerar NullClaw (maturidade) ou Hermes Agent (features enterprise, Matrix/WhatsApp) — evitar CoPaw (regressões ativas) |
| **Pesquisador de mercado** | Acompanhar NanoBot (TUI, TTS multi-provider) e PicoClaw (vision routing, nightly builds) como indicadores de inovação |

---

## Conclusão

O ecossistema demonstra **saúde bipolar**: enquanto ZeroClaw e Hermes Agent operam em ciclos de feature velocity impressionantes, NullClaw e CoPaw enfrentam desafios de estabilização que comprometem confiança. A tendência mais significativa é a **migração para arquiteturas de plugins mais robustas** (dynamic libraries, OCI registries) e a **demanda crescente por localization em mercados asiáticos**. Para tomadores de decisão, o sinal mais relevante é que **memory management e cron job reliability** emergem como os dois pilares de estabilidade que a comunidade espera de qualquer agente de IA production-ready.

---

*Relatório gerado em 2026-06-14 com base em dados públicos do GitHub dos projetos referenciados.*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-06-14

## 1. Panorama do Dia

O NanoBot manteve um nível de atividade intenso em 14 de junho de 2026, com **20 PRs atualizados** e **5 issues** no período de 24 horas. A equipe focou em correções críticas — especialmente no provedor Anthropic e no sistema de memória — enquanto a comunidade contribuiu com uma nova interface TUI e melhorias significativas na WebUI. O projeto demonstra saudável colaboração entre mantenedores e contribuidores externos, com **5 PRs fechados/merged** e **15 novos PRs abertos**, sinalizando pipeline robusto de entregas.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24 horas.**

O projeto não publicou novas versões desde o período analisado. Isso é consistente com o padrão de trabalho em branchs feature (`fix/prompt-caching`, `feat/spawn`) que ainda estão em revisão.

---

## 3. Progresso do Projeto

### PRs Merged/Encerrados (5)

| # | Título | Impacto |
|---|--------|---------|
| [#4326](https://github.com/HKUDS/nanobot/pull/4326) | `fix(memory): summarize full session tail during idle compaction` | Corrige bug crítico em que `idleCompact` ignorava as últimas 8 mensagens na sumarização,可能导致会话历史记录错误。 Inclui novo argumento `summary_context` para controle granular da janela de архивации. |
| [#4098](https://github.com/HKUDS/nanobot/pull/4098) | `[codex] Fix exec workspace symlink guard and path precedence` | Resolve dois problemas de segurança/execução: bloqueia symlinks relativos que escapam do workspace e ajusta precedência de PATH para ferramentas configuradas. |
| [#4327](https://github.com/HKUDS/nanobot/pull/4327) | `Fix WebUI startup blocking on slow gateway routes` | Melhora performance de inicialização ao mover handlers lentos para fora do event loop do gateway e otimizar carregamento de apps/workspace. |
| [#4314](https://github.com/HKUDS/nanobot/pull/4314) | `Break tool config schema import cycle` | Refatoração arquitetural que move `Base` Pydantic para módulo dedicado, eliminando ciclo de import e preservando padrão de auto-documentação das ferramentas. |
| [#4313](https://github.com/HKUDS/nanobot/pull/4313) | `Feat(webui): config.json/webui parity` | Reduz significativamente a lacuna entre configurações via WebUI e `config.json`, cobrindo temperature, tool limits, dream, channels e memory. |

**Observação de destaque:** A PR #4326 implementa correção diretamente relacionada à issue #4264, demonstrando ciclo rápido de feedback (issue criada em 2026-06-09, fix merged em 2026-06-13).

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| # | Título | Comentários | Tipo |
|---|--------|-------------|------|
| [#193](https://github.com/HKUDS/nanobot/issues/193) | Ollama api support? | **15** | Feature Request |
| [#4264](https://github.com/HKUDS/nanobot/issues/4264) | idleCompact should use complete session history | 1 | Bug (✅ Fechado) |
| [#4322](https://github.com/HKUDS/nanobot/issues/4322) | NameError: 'session_key' is not defined | 1 | Bug (Aberto) |

### Análise de Demandas

**1. Suporte a Ollama API (#193)** — A issue com maior engajamento (15 comentários) permanece aberta desde fevereiro, sinalizando demanda recorrente por suporte a modelos Ollama além do vLLM já suportado. A comunidade aguarda posicionamento da equipe.

**2. Funcionalidades de WebUI** — A nova superfície de automação (#4330) e a capacidade de servir sob path prefix (#4328) indicam foco em usabilidade corporativa e deploy em infraestrutura diversificada.

**3. TUI Nativa (#4329)** — Contribuição significativa que adiciona interface interativa inline ao `nanobot agent`, com suporte a markdown, multimídia e comandos slash — diferenciando o projeto de soluções puramente CLI.

---

## 5. Bugs e Estabilidade

### Issues Abertas (2)

| # | Severidade | Título | Descrição |
|---|------------|--------|-----------|
| [#4322](https://github.com/HKUDS/nanobot/issues/4322) | **🔴 Alta** | NameError: 'session_key' is not defined | Crash no startup após merge com `origin/main`. Causado por commit `f8532448` que extraiu `_build_memory_context`. Afeta branch `fix/prompt-caching`. |
| [#4333](https://github.com/HKUDS/nanobot/issues/4333) | **🟠 Média-Alta** | Anthropic provider sends deprecated `temperature` | Modelo `claude-opus-4-8` e `Fable` rejeitam parâmetro `temperature` (deprecated), causando erro 400 em todas as requisições. Apenas `opus-4-7` está isento. |

### PRs de Correção em Andamento

| # | Título | Status |
|---|--------|--------|
| [#4334](https://github.com/HKUDS/nanobot/pull/4334) | `fix(providers): widen omit_temperature to cover opus-4-8 and fable` | ✅ PR aberto (cobre #4333) |
| [#4303](https://github.com/HKUDS/nanobot/pull/4303) | `fix(mcp): close tracked generators in _close_server` | Em revisão (corrige crash `RuntimeError` em tasks asyncio) |

### Correções Recentes de Estabilidade

- **#4321** — Corrige cursor do Dream que não avançava quando desabilitado, prevenindo prompt bloat
- **#4323** — Resolve env vars não resolvidos antes do lookup de configuração de transcrição
- **#4324/#4325** — Corrige comparação de templates `${VAR}` sem resolução em paths de leitura/escrita da WebUI

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features em Desenvolvimento

| # | Título | Sinais de Roadmap |
|---|--------|-------------------|
| [#4329](https://github.com/HKUDS/nanobot/pull/4329) | **Nanobot TUI** | Interface interativa inline com markdown, multimídia e comandos slash — diferenciação UX |
| [#4316](https://github.com/HKUDS/nanobot/pull/4316) | **TTS multi-provider** | Suporte a OpenAI, Groq (Orpheus) e ElevenLabs via nova sistema de configuração |
| [#4320](https://github.com/HKUDS/nanobot/pull/4320) | **AuditTool** | Observabilidade de ações do agente (flag `release-TCH-486-audit`) |
| [#4291](https://github.com/HKUDS/nanobot/pull/4291) | **Subagents com presets configuráveis** | Permite que subagentes usem modelos diferentes do agente pai |
| [#4138](https://github.com/HKUDS/nanobot/pull/4138) | **tools.file.enable** | Paridade com `tools.exec.enable` e `tools.web.enable` para toggle de ferramentas filesystem |

### Features WebUI

- Automação management view (#4330)
- Paridade config.json/WebUI (#4313)
- Suporte a path prefix/reverse proxy (#4328)
- Localização de update checks (#4331)

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

1. **Compatibilidade de Providers (#193)** — Usuários solicitam suporte Ollama, indicando que o ecossistema de modelos locais é importante para a comunidade.

2. **Erros de Configuração de API (#4323, #4324, #4325)** — Transcrição e settings falhavam silenciosamente porque variáveis de ambiente `${VAR}` não eram resolvidas antes do uso.

3. **Histórico de Conversa Confiável (#4264)** — Bug crítico: correções do usuário em conversas podiam ser perdidas na consolidação,，留下错误记录.

4. **Deploy Corporativo (#4328)** — WebUI assumia raiz `/`, quebrando em reverse proxies — barreira para uso em ambientes empresariais.

### Cenários de Uso Emergentes

- **Sandbox remoto com MCP**: Demandas por toggle de ferramentas filesystem indicam uso em ambientes isolados controlados por MCP servers externos (#4138).
- **Subagentes especializados**: Feature #4291 sugere casos de uso com múltiplos modelos para tarefas específicas.
- **Auditoria**: Novo módulo de audit (#4320) indica uso em contextos regulatórios ou de compliance.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta/Resolução Prolongada

| # | Título | Idade | Status | Prioridade |
|---|--------|-------|--------|------------|
| [#193](https://github.com/HKUDS/nanobot/issues/193) | Ollama api support? | **~4 meses** | Aberta | Alta (15 comentários) |
| [#4083](https://github.com/HKUDS/nanobot/issues/4083) | pathAppend precedence | ~2 semanas | ✅ Fechada (via #4098) | — |
| [#4264](https://github.com/HKUDS/nanobot/issues/4264) | idleCompact session history | ~5 dias | ✅ Fechada (via #4326) | — |

### Recomendações

1. **Priorizar resposta em #193** — Com 15 comentários, a comunidade espera retorno oficial sobre roadmap de providers. Mesmo um "planned for vX.Y" ajudaria.

2. **Revisar #4322 urgentemente** — Bug de NameError afeta merges e pode impactar contribuidores working em branches feature.

3. **Considerar triagem de features TTS/Audit** — Issues #4316 e #4320 parecem bem estruturadas; decisão de accept/reject ajudaria contribuidores.

---

## Métricas Resumidas

| Indicador | Valor |
|-----------|-------|
| Issues abertas/ativas | 2 |
| Issues fechadas (24h) | 3 |
| PRs abertos | 15 |
| PRs merged/fechados | 5 |
| Novas releases | 0 |
| Bugs críticos abertos | 1 (#4322) |
| Features em desenvolvimento | 8+ |
| Issues sem resposta (>30 dias) | 1 (#193) |

---

*Relatório gerado automaticamente com base em dados GitHub do repositório [HKUDS/nanobot](https://github.com/HKUDS/nanobot).*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-06-14

## 1. Panorama do Dia

O Hermes Agent mantém alta atividade comunitária com 50 issues e 50 PRs atualizados nas últimas 24h. O projeto apresenta um fluxo saudável de contribuições, com 10 PRs merged/fechados e 8 issues resolvidos. Não houve lançamentos hoje. Os temas dominantes são: correções de segurança (CVE no WhatsApp Bridge), problemas com Rich Messages no Telegram (5 issues relacionados), e instabilidade no desktop app (crashes e configurações não persistidas). A comunidade demonstra preocupação com bugs P1 na gateway e adapters de provider.

---

## 2. Lançamentos

**Nenhum release nas últimas 24h.** O último release permanece como `v0.16.0` (2026.6.5). Sem notas de migração ou breaking changes a reportar neste período.

---

## 3. Progresso do Projeto

### PRs Merged/Closed Recentemente

| PR | Descrição | Impacto |
|----|-----------|---------|
| [#45812](https://github.com/NousResearch/hermes-agent/pull/45812) | fix(desktop): bypass Chromium editing pipeline for large paste & select-delete | Resolve freeze no composer do desktop durante operações de edição |
| [#44805](https://github.com/NousResearch/hermes-agent/pull/44805) | fix(hindsight): re-read on-disk config when recreating embedded client | Corrige stale config em long-running gateways |

### PRs Abertos com Alto Impacto

| PR | Descrição | Prioridade |
|----|-----------|------------|
| [#45822](https://github.com/NousResearch/hermes-agent/pull/45822) | fix(agent): treat Codex reasoning items as thinking-only | Melhora compatibilidade com modelos Codex |
| [#45824](https://github.com/NousResearch/hermes-agent/pull/45824) | fix(telegram): harden rich message fallback handling | Estabiliza API 10.1 do Telegram |
| [#45821](https://github.com/NousResearch/hermes-agent/pull/45821) | fix(approval): gate sensitive user-file terminal writes | Reforça segurança em operações de terminal |
| [#38496](https://github.com/NousResearch/hermes-agent/pull/38496) | feat(gateway): add long-form voice narration | Nova feature de narração por voz |
| [#27678](https://github.com/NousResearch/hermes-agent/pull/27678) | fix(api-server): pop runtime model before AIAgent kwargs unpack | Corrige crash P1 no api-server gateway |

---

## 4. Temas Quentes da Comunidade

### Telegram Rich Messages (5 issues + 2 PRs)
A nova API 10.1 do Telegram mobiliza a comunidade com múltiplos problemas:
- **#[45771](https://github.com/NousResearch/hermes-agent/issues/45771)** — Rich Messages render texto oversized (👍 2)
- **#[45785](https://github.com/NousResearch/hermes-agent/issues/45785)** — Telegram Web não renderiza sendRichMessage (👍 1)
- **#[45770](https://github.com/NousResearch/hermes-agent/issues/45770)** — Streaming não funciona em private DM topics (👍 1)
- **#[44428](https://github.com/NousResearch/hermes-agent/issues/44428)** — Feature request para Rich Messages API 10.1 (👍 3)

**Análise:** A comunidade demonstra interesse forte na nova API. Issues com thumbs-up indicam demanda real por estabilidade.

### Memory e Cron Jobs (3 issues relacionados)
- **#[10771](https://github.com/NousResearch/hermes-agent/issues/10771)** — Feature: Automatic Memory Consolidation (👍 5, 7 comentários)
- **#[43367](https://github.com/NousResearch/hermes-agent/issues/43367)** — Cron jobs não podem usar memory() tool (4 comentários)
- **#[9763](https://github.com/NousResearch/hermes-agent/issues/9763)** — skip_memory=True bloqueia providers externos

**Análise:** A limitação arquitetural de `skip_memory=True` em cron jobs é tema recorrente. A feature de Auto Dream (inspirada em Claude Code) tem maior engajamento.

### Desktop App Instabilidade (3 issues)
- **#[45805](https://github.com/NousResearch/hermes-agent/issues/45805)** — Thinking level não persiste (duplicado)
- **#[45758](https://github.com/NousResearch/hermes-agent/issues/45758)** — Crash reseta config.yaml e deleta .env
- **#[45102](https://github.com/NousResearch/hermes-agent/issues/45102)** — GPU error no Linux

**Análise:** Bugs críticos no desktop app que afetam experiência do usuário final. Issue #45758 é P1 com potencial de perda de dados.

---

## 5. Bugs e Estabilidade

### P1 — Críticos (2 issues)

| Issue | Descrição | Status |
|-------|-----------|--------|
| [#13891](https://github.com/NousResearch/hermes-agent/issues/13891) | Matrix gateway unable to decrypt message | CLOSED |
| [#36151](https://github.com/NousResearch/hermes-agent/issues/36151) | Bedrock Opus 4.8 deprecation error | CLOSED |
| [#27988](https://github.com/NousResearch/hermes-agent/issues/27988) | Codex adapter finish_reason mapping incorreto | CLOSED |
| [#12408](https://github.com/NousResearch/hermes-agent/issues/12408) | Vision tool envia tags Nous para providers externos | CLOSED |
| [#45456](https://github.com/NousResearch/hermes-agent/issues/45456) | Gateway auto-resume races, criando instâncias duplicadas | CLOSED |
| [#45758](https://github.com/NousResearch/hermes-agent/issues/45758) | Desktop crash deleta .env para profiles não-padrão | OPEN |

### P2 — Altos (5 issues)

| Issue | Descrição | Plataforma |
|-------|-----------|------------|
| [#43814](https://github.com/NousResearch/hermes-agent/issues/43814) | CVE-2026-48063 no Baileys (WhatsApp) | Security |
| [#33597](https://github.com/NousResearch/hermes-agent/issues/33597) | Docker restart não persiste gateway | Docker |
| [#29530](https://github.com/NousResearch/hermes-agent/issues/29530) | Profiled workers split-brain OAuth | Auth |
| [#36276](https://github.com/NousResearch/hermes-agent/issues/36276) | HTTP 429 retried 3x em vez de fail-fast | Kimi |
| [#18705](https://github.com/NousResearch/hermes-agent/issues/18705) | load_hermes_dotenv override=True cria footgun | CLI |

### P3 — Médios (em destaque)

| Issue | Descrição | Área |
|-------|-----------|------|
| [#45493](https://github.com/NousResearch/hermes-agent/issues/45493) | Matrix thread root message lost | Matrix |
| [#45657](https://github.com/NousResearch/hermes-agent/issues/45657) | TUI rebuild em cada launch (30-120s) | CLI |
| [#45752](https://github.com/NousResearch/hermes-agent/issues/45752) | find_alias_for_profile lê binários em ~/.local/bin | CLI |

**Métricas de Qualidade:**
- 8 bugs fechados nas últimas 24h (incluindo 4 P1)
- 4 bugs P1 atualmente abertos (2 security, 2 crashes)
- 1 CVE crítico em processamento (WhatsApp Baileys)

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features com Alto Engajamento

| Issue | Descrição | 👍 | Comentários |
|-------|-----------|-----|-------------|
| [#10771](https://github.com/NousResearch/hermes-agent/issues/10771) | Automatic Memory Consolidation (Auto Dream) | 5 | 7 |
| [#39691](https://github.com/NousResearch/hermes-agent/issues/39691) | Integrar headroom-ai para compressão | 6 | 3 |
| [#7273](https://github.com/NousResearch/hermes-agent/issues/7273) | Runtime reasoning_effort tool | 4 | 1 |
| [#37566](https://github.com/NousResearch/hermes-agent/issues/37566) | Font selector para desktop | 4 | 2 |
| [#38469](https://github.com/NousResearch/hermes-agent/issues/38469) | Session list sorting por recent interaction | 0 | 1 |

### PRs de Feature em Review

| PR | Descrição | Complexidade |
|----|-----------|--------------|
| [#27171](https://github.com/NousResearch/hermes-agent/pull/27171) | Future Video Render skill (MCP) | P3 |
| [#38496](https://github.com/NousResearch/hermes-agent/pull/38496) | Long-form voice narration | P3 |
| [#32719](https://github.com/NousResearch/hermes-agent/pull/32719) | Pre-dispatch enforcement hook | P3 |
| [#45815](https://github.com/NousResearch/hermes-agent/pull/45815) | web_search default limit configurável | - |

**Sinais de Roadmap:**
1. **Memory/Context Management** — Área ativa com Auto Dream e compressão headroom
2. **Telegram Rich Messages** — Feature principal para API 10.1
3. **Voice/TTS** — Nova feature de narração em desenvolvimento
4. **Desktop Customization** — Font selector e adjustable font size

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

**1. Estabilidade do Desktop App**
> "Desktop app crash resets profile config.yaml and deletes .env for non-default profiles"
- Usuários Windows 10 experimentam perda de configurações e credenciais
- Thinking level setting não persiste entre sessões

**2. Performance em CLI/TUI**
> "TUI and dashboard rebuild/reinstall on every launch — monorepo workspace lockfile mismatch"
- Cold-start de 30-120 segundos impacta produtividade
- Escaneamento de binários em `~/.local/bin/` bloqueia list_profiles()

**3. Limitações de Cron Jobs**
> "Cron jobs cannot use memory() tool — skip_memory=True blocks automation surface"
- Automação com memória externa (mem0) inviável
- Workflows de scheduled jobs limitados

**4. Integração Matrix**
> "Matrix: agent's own thread-initial message lost from next-turn context"
- Perda de contexto em threads programáticos
- Problemas de descriptografia após uso prolongado

### Cenários de Uso Identificados
- **AI Ops inline approvals** via Telegram callbacks (PR #45772)
- **Voice narration** para conteúdo longo (PR #38496)
- **Future Video rendering** via MCP skill (PR #27171)

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta > 30 dias

| Issue | Criado | Descrição | Prioridade |
|-------|--------|-----------|------------|
| [#7273](https://github.com/NousResearch/hermes-agent/issues/7273) | 2026-04-10 | Runtime reasoning_effort tool | P3 |
| [#9763](https://github.com/NousResearch/hermes-agent/issues/9763) | 2026-04-14 | Cron skip_memory limitation | P3 |
| [#10771](https://github.com/NousResearch/hermes-agent/issues/10771) | 2026-04-16 | Auto Memory Consolidation | P3 |
| [#12408](https://github.com/NousResearch/hermes-agent/issues/12408) | 2026-04-19 | Vision tool Nous tags | P1 |

### Issues com Alto Impacto Pendentes de Assignee

| Issue | Descrição | Bloqueia |
|-------|-----------|----------|
| [#43814](https://github.com/NousResearch/hermes-agent/issues/43814) | CVE WhatsApp Baileys — requer bump >=7.0.0-rc12 | Segurança |
| [#45758](https://github.com/NousResearch/hermes-agent/issues/45758) | Desktop crash deleta .env | Desktop app |
| [#29530](https://github.com/NousResearch/hermes-agent/issues/29530) | OAuth split-brain em profiled workers | Auth |
| [#18705](https://github.com/NousResearch/hermes-agent/issues/18705) | load_hermes_dotenv override footgun | Config |

### Recomendações de Priorização

1. **CVE-2026-48063** — Atualizar Baileys no whatsapp-bridge urgentemente
2. **Desktop crash #45758** — P1 com potencial de perda de dados de usuários
3. **TUI rebuild #45657** — Performance crítica para CLI
4. **Auto Memory Consolidation #10771** — Feature com maior engajamento comunitário

---

## Métricas Consolidada do Período

| Métrica | Valor |
|---------|-------|
| Issues ativas | 42 |
| Issues fechadas | 8 |
| PRs abertos | 40 |
| PRs merged/closed | 10 |
| Bugs P1 abertos | 4 |
| Security issues | 2 |
| Releases | 0 |
| Contributors únicos (issues) | ~25 |

**Saúde Geral:** O projeto demonstra atividade saudável com ciclo de bugfix ativo (8 issues fechadas). Áreas de atenção: desktop app stability, CVE de segurança no WhatsApp, e performance da CLI/TUI. A comunidade está engajada com features de Telegram Rich Messages e Voice/TTS.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-06-14

---

## 1. Panorama do Dia

O projeto PicoClaw apresenta **alta atividade de desenvolvimento** no período analisado, com 7 PRs atualizados e 1 release nightly publicada. A saúde geral é positiva, com foco em estabilidade (correções de linter) e qualidade de vida (suporte a OpenRouter, remote agent mode). A comunidade demonstra engajamento ativo em features de IA (compressão de imagens, roteamento de modelos visuais), enquanto bugs críticos relacionados a consumo de tokens e alucinações em modelos sem suporte a visão foram reportados e demandam atenção.

---

## 2. Lançamentos

### 🌙 Nightly Build — v0.2.9-nightly.20260613.c362114c

| Attribute | Detail |
|-----------|--------|
| **Tipo** | Automated nightly build |
| **Comparativo** | https://github.com/sipeed/picoclaw/compare/v0.2.9...main |
| **Status** | ⚠️ **Unstable** — uso em produção não recomendado |

**Notas:**
- Build automatizado para validação contínua de `main`
- Pode conter funcionalidades ainda não testadas em staging
- Usuários devem testar em ambiente controlado antes de adotar

> **Recomendação:** Acompanhar changelog do compare para identificar features em progreso.

---

## 3. Progresso do Projeto

### PRs Merged/Closed (5)

| # | Título | Área | Impacto |
|---|--------|------|---------|
| [#3119](https://github.com/sipeed/picoclaw/pull/3119) | fix(tts): support OpenRouter voice overrides and fallback | TTS/OpenRouter | ⭐⭐⭐ Alto |
| [#3117](https://github.com/sipeed/picoclaw/pull/3117) | fix(agent): route media turns to image models | Agent/Vision | ⭐⭐⭐ Alto |
| [#3065](https://github.com/sipeed/picoclaw/pull/3065) | fix(seahorse): explicitly ignore Close() errors | DB/Linter | 🛠️ Manutenção |
| [#3066](https://github.com/sipeed/picoclaw/pull/3066) | fix: explicitly ignore Close() errors on temp files | FS/Linter | 🛠️ Manutenção |
| [#2935](https://github.com/sipeed/picoclaw/pull/2935) | docs(i18n): add Traditional Chinese (zh-TW) | i18n/Docs | 🌍 Localização |

**Destaques:**

1. **#3119 — TTS OpenRouter:** Implementa override de parâmetros `voice` e `response_format` via `extra_body` e adiciona fallback automático em caso de erro de formato.

2. **#3117 — Media Routing:** Resolve o issue [#3108](https://github.com/sipeed/picoclaw/issues/3108) — agora turns com mídia são roteados para modelos com suporte a visão, evitando alucinações.

3. **#2935 — zh-TW Localization:** Adiciona suporte completo a Chinês Tradicional (Taiwan) em documentação e frontend i18n.

---

## 4. Temas Quentes da Comunidade

### Issue em Destaque — #3012 [OPEN]

> **[BUG] Continuous consumption of tokens every minutes when evolution is enabled**

| Campo | Valor |
|-------|-------|
| **Autor** | xpader |
| **Criado** | 2026-06-05 |
| **Atualizado** | 2026-06-13 |
| **Comentários** | 3 |
| **Ambiente** | FreeBSD 15.0, Go 1.25.10, MiniMax |

**Análise:** Issue reportada há 8 dias com consumo contínuo de tokens quando Evolution Mode está ativo. Comunidade demonstra preocupação com custos operacionais. Ainda sem solução confirmada — **demanda triagem urgente**.

🔗 https://github.com/sipeed/picoclaw/issues/3012

---

## 5. Bugs e Estabilidade

### Issue Fechada — #3108 [CLOSED ✅]

> **[BUG] Image description requests hallucinate when active model lacks vision support**

| Campo | Valor |
|-------|-------|
| **Severidade** | 🔴 Alta |
| **Solução** | PR #3117 merged |
| **Impacto** | Modelos text-only não processavam imagens corretamente |

**Status:** ✅ **Resolvido** — PR #3117 implementa roteamento inteligente para modelos de imagem.

### Issue Aberta — #3012 [OPEN 🔴]

| Severidade | Descrição |
|------------|-----------|
| 🔴 Alta | Consumo contínuo de tokens com Evolution enabled |

**Risco:** Custo financeiro elevado em uso prolongado se não corrigido.

---

## 6. Pedidos de Features e Sinais de Roadmap

### PRs Abertos (2)

| # | Título | Área | Potencial |
|---|--------|------|-----------|
| [#2964](https://github.com/sipeed/picoclaw/pull/2964) | Feat/image input compression | Vision/Pipeline | ⭐⭐⭐ Alto |
| [#3118](https://github.com/sipeed/picoclaw/pull/3118) | Add remote Pico WebSocket mode to picoclaw agent | Agent/Networking | ⭐⭐⭐ Alto |

**Análise:**

1. **#2964 — Image Compression:** Introduce política configurável de compressão multi-nível para imagens, complementando `max_media_size`. Relevante para otimização de custos e latência com modelos vision.

2. **#3118 — Remote WebSocket Mode:** Adiciona modo remoto ao comando `picoclaw agent`, permitindo conexão via WebSocket (`ws://localhost:18790/pico/ws`). Usuário pode instanciar agent remotamente mantendo comportamento local.

> **Sinais de roadmap:** Foco em eficiência de mídia (compressão, roteamento inteligente) e conectividade (remote agent). Evolução do agent para casos de uso distribuído.

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Dor | Contexto | Severidade |
|-----|----------|------------|
| **Consumo excessivo de tokens** | Evolution Mode com Draft trigger | 🔴 Alta |
| **Alucinações em modelos sem visão** | deepseek-v4-flash via OpenRouter | 🔴 Alta (resolvida) |
| **Limitações em canais não-OpenAI** | Voice/format overrides ausentes | 🟡 Média (resolvida) |

### Cenários de Uso Reportados

- **Cross-platform:** FreeBSD, Go 1.25.10 — projeto manté compatibilidade multi-plataforma
- **Multi-provider:** OpenRouter, MiniMax — flexibilidade de provedores valorizada
- **Evolution workflow:** Uso de Draft mode para geração assistida de código

### Satisfação Geral

✅ **Positiva** — comunidade ativa, issues sendo addressed rapidamente (bug #3108 resolvido em ~48h)

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta prolonged

| # | Título | Idade | Status |
|---|--------|-------|--------|
| [#3012](https://github.com/sipeed/picoclaw/issues/3012) | Token consumption with Evolution | 8 dias | 🔴 Sem solução |

### PRs Abertos Sem Merge

| # | Título | Idade | Prioridade |
|---|--------|-------|------------|
| [#2964](https://github.com/sipeed/picoclaw/pull/2964) | Image input compression | 17 dias | ⭐ Alta |
| [#3118](https://github.com/sipeed/picoclaw/pull/3118) | Remote WebSocket mode | 2 dias | ⭐ Alta |

---

## Métricas Resumidas

| Indicador | Valor |
|-----------|-------|
| Issues abertas/ativas (24h) | 1 |
| Issues fechadas (24h) | 1 |
| PRs abertos (24h) | 2 |
| PRs merged/closed (24h) | 5 |
| Releases | 1 nightly |
| Bugs críticos abertos | 1 (#3012) |
| Bugs resolvidos | 1 (#3108) |

---

**Próximos passos recomendados:**
1. Triagem e resolução do issue #3012 (consumo de tokens)
2. Code review dos PRs #2964 e #3118
3. Monitoramento de feedback da nightly build v0.2.9-nightly.20260613

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-06-14

## 1. Panorama do Dia

O IronClaw apresenta **alta atividade de desenvolvimento** nesta data, com 38 PRs atualizados e 6 issues nos últimos relatórios. O foco principal concentra-se em duas frentes: (1) a estabilização do mecanismo de *DeferredBusy drain* e questões associadas ao Reborn (aprovação persistente, gates de autenticação), e (2) a continuação do desenvolvimento do sistema de anexos (#4644), que agora avança para a integração com WebChat v2. Não há lançamentos formais registrados no período, e o build nightly de E2E permanece em falha — sinal de que a equipe ainda lida com instabilidades no pipeline de testes.

---

## 2. Lançamentos

**Nenhum lançamento registrado nas últimas 24 horas.**

Observa-se que o PR #3708 (criado em 2026-05-16) permanece aberto com a intenção de release, sinalizando que uma versão pode estar em preparação. Dado o histórico recente, a versão 0.29.x já foi publicada, mas não há *changelog* formal disponível nos dados analisados.

---

## 3. Progresso do Projeto

Três PRs fechados nesta janela demonstram avanços concretos no subsistema de mensagens adiadas:

| PR | Título | Impacto |
|----|--------|---------|
| [#4668](https://github.com/nearai/ironclaw/pull/4668) | `feat(attachments): MountView-based attachment landing crate` | Track 6 do #4644 — foundation de armazenamento de bytes para anexos |
| [#4655](https://github.com/nearai/ironclaw/pull/4655) | `feat(threads): carry attachment refs through the Reborn transcript contract` | Track 2 do #4644 — referências de anexo persistidas no transcript |
| [#4654](https://github.com/nearai/ironclaw/pull/4654) | `feat(common): extensible attachment format registry` | Track 1 do #4644 — registro unificado de formatos de anexo |

Essas três *tracks* formam a base infrastructure do sistema de anexos. O PR #4654 substitui quatro listas hardcoded dispersas no código, eliminando a causa raiz de bugs como "CSV uploadado como texto". Os PRs #4655 e #4668 completam o ciclo: referência no transcript + armazenamento via `MountView`.

---

## 4. Temas Quentes da Comunidade

### 4.1 Loop de Re-aprovação no Slack (maior concentração de PRs)

Este é o tema com maior volume de PRs abertos (6 PRs de um mesmo autor, `henrypark133`, todos datados de 2026-06-13):

- [#4839](https://github.com/nearai/ironclaw/pull/4839) — Preservar identidade de invocação através de re-dispatch de auth-gate
- [#4838](https://github.com/nearai/ironclaw/pull/4838) — Feedback explícito para threads busy (sem parking)
- [#4844](https://github.com/nearai/ironclaw/pull/4844) — Filtrar rotas de gate por string crua (auth vs approval)
- [#4843](https://github.com/nearai/ironclaw/pull/4843) — Single-flight gate delivery por run_id
- [#4840](https://github.com/nearai/ironclaw/pull/4840) — Mostrar missing-credential auth gate antes do approval gate
- [#4836](https://github.com/nearai/ironclaw/pull/4836) — Surface connected channels, delivery state e run origin

**Análise:** A sequência de PRs sugere uma sessão de *bugfixing* intensiva após triagem do problema de re-aprovação no Slack. O cenário observado: 4 gates de aprovação consecutivos para uma única chamada lógica. A abordagem é estrutural — corrigir a ordem dos gates, evitar alocações por rota, e garantir idempotência na entrega.

### 4.2 Sistema de Anexos (#4644) — Expansão contínua

5 PRs abertos relacionados ao mesmo tema:

- [#4670](https://github.com/nearai/ironclaw/pull/4670) — Bridge de bytes para AttachmentRefs
- [#4672](https://github.com/nearai/ironclaw/pull/4672) — Upload inline no WebChat v2
- [#4738](https://github.com/nearai/ironclaw/pull/4738) — Attachment web UX no WebChat v2 SPA
- [#4677](https://github.com/nearai/ironclaw/pull/4677) — Fold attachment text no contexto do modelo
- [#4676](https://github.com/nearai/ironclaw/pull/4676) — Extração de texto de documentos no landing path

**Análise:** O feature #4644 segue em progresso activo. A infraestrutura backend (registry, landing, extração) está quase completa. O PR #4738 representa a lacuna de frontend mais significativa — a UX de upload no SPA.

### 4.3 Issue com maior engajamento (comentários)

- [#4817](https://github.com/nearai/ironclaw/issues/4817) — 3 comentários — Follow-up do DeferredBusy drain com 3 decisões de design pendentes
- [#4825](https://github.com/nearai/ironclaw/issues/4825) — 3 comentários — Persistência de aprovações "always allow" entre threads do Reborn
- [#4831](https://github.com/nearai/ironclaw/issues/4831) — 2 comentários — Roteamento de drain via product_workflow replay

---

## 5. Bugs e Estabilidade

### 🔴 Crítico

| Item | Descrição | Severidade |
|------|-----------|------------|
| [#4108](https://github.com/nearai/ironclaw/issues/4108) | **Nightly E2E failed** — Job `E2E (v2-engine)` falhou no run `27456598001` | **Alta** — Build quebrado há 18 dias (desde 2026-05-27) |

Este é o item mais preocupante do relatório. O E2E nightly falhou há 18 dias e continua sem resolução visível. Nenhum comentário foi adicionado à issue, sugerindo que a investigação pode estar em andamento internamente ou que a falha é de baixa reprodutibilidade.

### 🟡 Moderado

| Item | Descrição |
|------|-----------|
| [#4844](https://github.com/nearai/ironclaw/pull/4844) | Bug de alocação por rota no gate_kind_filter — cada avaliação alocava desnecessariamente |
| [#4843](https://github.com/nearai/ironclaw/pull/4843) | Bug de fanout: ack de resolução de gate era re-entregue ao loop original (L1) ainda vivo |
| [#4840](https://github.com/nearai/ironclaw/pull/4840) | Ordem incorreta de gates: approval queimado antes da descoberta de credential |

### 🟢 Menor

| Item | Descrição |
|------|-----------|
| [#4680](https://github.com/nearai/ironclaw/pull/4680) | Emissão de `[non_text_content]` como texto literal para partes não-texto em OpenAI compat |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em desenvolvimento ativo

**1. Sistema de Anexos (#4644) — ~70% completo**
- Backend: registry, landing, extração, transcript ✅
- Frontend WebChat v2: em progresso (#4738)
- Documentação e CI: em progresso

**2. Runtime Context Expandido (#4836)**
- PR aberto: [nearai/ironclaw#4836](https://github.com/nearai/ironclaw/pull/4836)
- Implementa dois estágios: canais conectados + estado de delivery + origem do run
- Permite que o modelo veja: `Connected channels: unknown. Outbound delivery currently points to: ...`

**3. Aprovações Persistentes entre Threads (#4825)**
- Issue: [nearai/ironclaw#4825](https://github.com/nearai/ironclaw/issues/4825)
- Problema: "always allow" feito em thread 1 não persiste na thread 2
- **Sinal de roadmap forte:** Torna a experiência multi-thread do Reborn coerente

**4. Tratamento de Falhas Não-Borking (#4841)**
- PR: [nearai/ironclaw#4841](https://github.com/nearai/ironclaw/pull/4841)
- Visão: todo erro terminal de run deve ser recuperável ou explicável ao usuário
- Elimina `HostUnavailable` e falhas de modelo como "caixa preta"

**5. Rotinas via API (#4264)**
- PR: [nearai/ironclaw#4264](https://github.com/nearai/ironclaw/pull/4264)
- Adiciona `POST /api/routines` ao web gateway
- Permite criação programática de rotinas

---

## 7. Resumo de Feedback dos Usuários

Com base nas issues e PRs, os padrões de dor identificados são:

| Dor | Cenário | Frequência |
|-----|---------|------------|
| **Re-prompts de aprovação** | Usuário aprova Gmail em thread 1, abre thread 2, é re-promptado | Observado em produção |
| **Loop de re-aprovação no Slack** | 4 gates para uma única ação (aprovação → auth → re-aprovação → auth) | Observado em QA |
| **Anexos silenciosamente descartados** | Upload de CSV/arquivo era ignorado na persistência | Bug histórico (#4654) |
| **Runs que morrem sem explicação** | `HostUnavailable` ou falha de modelo resulta em run quebrado, sem retry | Observado em produção |
| **QA-trace trava em auth gates** | Gravador de traces bloqueia em gates interativos | Bug de teste |

**Satisfação implícita:** A taxa de atividade (38 PRs, 6 issues em 24h) sugere uma equipe engajada. A fragmentação do sistema de anexos em 7+ PRs indica desenvolvimento cuidadoso, não desespero.

---

## 8. Backlog que Merece Atenção

### Items sem resposta ou estagnados

| Item | Idade | Status | Prioridade |
|------|-------|--------|------------|
| [#4108](https://github.com/nearai/ironclaw/issues/4108) — E2E nightly falhando | **18 dias** | Open, 0 comentários | 🔴 **Alta** |
| [#3708](https://github.com/nearai/ironclaw/pull/3708) — Release PR | **29 dias** | Open, sem progresso visível | 🟡 Média |

### Items com design decisions pendentes

| Item | Descrição | Risco |
|------|-----------|-------|
| [#4817](https://github.com/nearai/ironclaw/issues/4817) | 3 decisões de design adiadas do DeferredBusy drain (drain doorway, stale-intent policy, startup sweep) | Baixo (não bloqueia) |
| [#4825](https://github.com/nearai/ironclaw/issues/4825) | Drop `thread_id` do scope de aprovação persistente | Médio (requer mudança de contrato) |

---

## Indicadores de Saúde do Projeto

| Indicador | Valor | Avaliação |
|-----------|-------|-----------|
| PRs abertos | 26 | 🟢 Normal |
| PRs fechados (24h) | 12 | 🟢 Bom throughput |
| Issues abertas | 3 | 🟢 Normal |
| Falha de pipeline | Sim (#4108) | 🔴 Requer atenção |
| Release em andamento | Sim (#3708) | 🟡 Aguardando |
| Tema dominante | Slack fixes + Attachments | 🟢 Progresso multifocal |

---

*Relatório gerado automaticamente com base nos dados do GitHub de [nearai/ironclaw](https://github.com/nearai/ironclaw) para 2026-06-14.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do Projeto CoPaw — 2026-06-14

## 1. Panorama do Dia

O projeto CoPaw (QwenPaw) manteve alta atividade em 14 de junho de 2026, com 11 issues e 9 PRs atualizados nas últimas 24 horas. Das issues, 10 permanecem abertas e 1 foi fechada (#5140 — bug de download de anexos docx/pdf). Entre os PRs, 7 estão abertos (5 em revisão) e 2 foram merged. Não houve releases neste período. A comunidade demonstra engajamento significativo em localization (solicitação de idioma vietnamita), integrações de canais (Zalo Bot) e otimizações de performance, especialmente no desktop Tauri para Windows.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24h.**

O último release estável mencionado nos dados é **v1.1.11.post2**, que apresenta uma regressão confirmada no download de anexos não-textuais (docx/pdf) — bug identificado na issue #5140 e já encerrado. Recomenda-se monitorar a publicação de uma correção (v1.1.11.post3) caso o fix ainda não tenha sido aplicado ao main branch.

---

## 3. Progresso do Projeto

### PRs Merged/Closed (2)

| # | Título | Impacto |
|---|--------|---------|
| [#2498](https://github.com/agentscope-ai/QwenPaw/pull/2498) | fix(agents): use console language when creating agent and fallback unsupported langs | **Alto** — Corrige seleção de idioma de agentes recém-criados, que sempre usavam inglês/chinês fixo ignorando a preferência do usuário. Melhora experiência multi-idioma. |
| [#4969](https://github.com/agentscope-ai/QwenPaw/pull/4969) | feat(skill): Add skill tag batch download | **Médio** — Adiciona filtragem por tags no download em lote de skills, resolvendo issue #2961. Melhora usabilidade do sistema de skills. |

### PRs em Revisão (5)

| # | Título | Impacto |
|---|--------|---------|
| [#5035](https://github.com/agentscope-ai/QwenPaw/pull/5035) | fix(local_models): parse llama.cpp server version without fixed-width slice | **Médio** — Previne crash quando build number do llama.cpp alcançar 5 dígitos. |
| [#5040](https://github.com/agentscope-ai/QwenPaw/pull/5040) | fix(crons): tolerate invalid jobs in jobs.json | **Médio** — Evita falha total do scheduler por jobs malformados. |
| [#5037](https://github.com/agentscope-ai/QwenPaw/pull/5037) | fix(config): avoid IndexError on empty Exec= in Linux | **Baixo** — Robustez em edge cases de desktop Linux. |
| [#5041](https://github.com/agentscope-ai/QwenPaw/pull/5041) | fix(backup): skip unreadable files instead of failing | **Médio** — Evita perda de backup inteiro por arquivo corrompido. |
| [#5038](https://github.com/agentscope-ai/QwenPaw/pull/5038) | fix(context): guard empty msg list in LightContextManager | **Baixo** — Previne IndexError em cenários de lista vazia. |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários > 2)

| # | Título | Tipo | Comentários | Destaque |
|---|--------|------|-------------|----------|
| [#5140](https://github.com/agentscope-ai/QwenPaw/issues/5140) | Bug: v1.1.11.post2附件下载还是有问题 (CLOSED) | Bug | 6 | Download docx/pdf retorna 404; **já fechado** — priorizado pela equipe. |
| [#5156](https://github.com/agentscope-ai/QwenPaw/issues/5156) | 建议支持 kimi-for-coding / 加入 uv 白名单 | Feature | 4 | Demanda por usar Kimi coding subscription diretamente no QwenPaw; barreira atual: só API oficial. |
| [#5047](https://github.com/agentscope-ai/QwenPaw/issues/5047) | Windows Tauri 桌面端启动特别慢 | Question | 3 | Reclame de performance: 10+ min startup vs 1-2 min antes; afeta experiência desktop significativamente. |
| [#5169](https://github.com/agentscope-ai/QwenPaw/issues/5169) | Add Vietnamese (vi) interface language | Feature | 2 | Expansão de localization; 参考 Indonesian (#4219) e Brazilian Portuguese. |
| [#5173](https://github.com/agentscope-ai/QwenPaw/issues/5173) | Feature request (sem título) | Feature | 2 | Issue incompleta; requer triagem. |
| [#5168](https://github.com/agentscope-ai/QwenPaw/issues/5168) | Add official Zalo Bot channel support | Feature | 1 | Plataforma Zalo é dominante no Vietnã; similar a Telegram/WhatsApp local. |

**Análise:** O tema mais quente é a **performance do desktop Tauri no Windows** (#5047, 3 comentários), indicando um problema recorrente desde a migração de Python packaging para Tauri. A comunidade vietnamita demonstra demanda forte por localization (#5169) e integração Zalo (#5168).

---

## 5. Bugs e Estabilidade

### Bugs Reportados (6 issues abertas)

| # | Severidade | Título | Descrição |
|---|------------|--------|-----------|
| [#5163](https://github.com/agentscope-ai/QwenPaw/issues/5163) | **Alta** | Gemini tool calling regression v1.1.11.post2 | Regressão confirmada: funciona em v1.1.10, falha em v1.1.11.post2. Afeta ferramenta nativa do Gemini. |
| [#5172](https://github.com/agentscope-ai/QwenPaw/issues/5172) | **Alta** | 聊天总出现问完问题没反应一直等待 | Chat trava após inatividade; usuário precisa clicar "parar" para recuperar. **Crítico para canais QQ/WeChat** onde não há botão de stop. |
| [#5171](https://github.com/agentscope-ai/QwenPaw/issues/5171) | **Alta** | 上下文压缩保留缺少按条数保留 | Context compression zera completamente quando persona file token > threshold; **impossibilita continuação de tarefas**. |
| [#5174](https://github.com/agentscope-ai/QwenPaw/issues/5174) | **Média** | 定时任务和心跳机制的缺陷 | Cron agent não executa write_file/spawn_subagent; heartbeat agent não executa tarefas pesadas. Limitações conhecidas do mecanismo. |
| [#5047](https://github.com/agentscope-ai/QwenPaw/issues/5047) | **Média** | Windows Tauri 桌面端启动特别慢 | Startup de 10+ minutos vs 1-2 minutos pré-Tauri; afecta estabilidade percebida. |
| [#5167](https://github.com/agentscope-ai/QwenPaw/issues/5167) | **Baixa** | Feishu CardKit 流式卡片刷新较慢 | Performance degrade em respostas longas; experiência de streaming comprometida. |

**Alerta:** Há **3 bugs de severidade alta** abertos simultaneamente, incluindo um que afeta canais onde o usuário não pode interromper manualmente (#5172). Recomenda-se priorização imediata.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features (5 issues abertas)

| # | Título | Demanda | Viabilidade |
|---|--------|---------|-------------|
| [#5156](https://github.com/agentscope-ai/QwenPaw/issues/5156) | 支持 kimi-for-coding / 加入 uv 白名单 | Alta | Requer whitelist de provider Kimi coding; impacta modelo de negócio de usuários existentes. |
| [#5169](https://github.com/agentscope-ai/QwenPaw/issues/5169) | Add Vietnamese (vi) interface language | Média | Localization direta; padrão já estabelecido com #4219. |
| [#5168](https://github.com/agentscope-ai/QwenPaw/issues/5168) | Add official Zalo Bot channel support | Média | Zalo é top messaging no Vietnã; integrações similares já existem (Telegram, Discord). |
| [#5173](https://github.com/agentscope-ai/QwenPaw/issues/5173) | Feature request (sem título) | Indeterminada | Issue incompleta; aguardando detalhes do autor. |
| [#5088](https://github.com/agentscope-ai/QwenPaw/pull/5088) | feat: initial governance & sandbox interface discussion | Exploratória | Discussão de governança e sandboxing; pode indicar direção de longo prazo. |

**Sinais de roadmap:**
- **Localization:** expansions para Vietnamese indica estratégia de penetração no mercado SE Asia.
- **Canais:** Zalo Bot representa expansão para mercado vietnamita; alinhado com localization.
- **Providers:** whitelist para Kimi coding sugere pressão de usuários por alternativas a API oficial.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Categoria | Feedback | Frequência |
|-----------|----------|------------|
| **Performance Desktop** | "启动速度严重变慢，从原本的一两分钟变成了十几分钟" (Desde migração para Tauri) | Múltiplos usuários |
| **Bugs de Chat** | "问完问题就一直等待，只有点停止后，再问正常" (Travamento pós-inatividade) | 1+ usuário |
| **Context Compression** | "压缩会出现将上下文完全压缩保留为0的情况，模型无法在继续任务" | 1+ usuário |
| **Download Anexos** | "docx/pdf下载错误，报错404" (Resolvido em #5140) | 1+ usuário |
| **Kimi Integration** | "已经订阅了 Kimi coding 套餐的用户来说会比较难受，因为现有套餐能力没法直接接入" | 1+ usuário |

### Cenários de Uso Identificados

- **Desktop Windows:** Usuários com hardware robusto (32GB RAM, i7 11th gen) enfrentando startup de 10+ min.
- **Agentes Cron/Heartbeat:** Usuários tentando automatizar tarefas de escrita de arquivos e spawn de subagentes — expectativa vs. realidade diverge.
- **Feishu Integration:** Usuários avançados usando CardKit streaming cards e reportando lentidão em respostas longas.
- **Multi-canal:** Usuários integrando QQ/WeChat/Zalo buscam experiência consistente, especialmente capacidade de recovery de erros sem botão "stop".

**Satisfação Geral:** Oscilante. Bug de download (#5140) foi resolvido rapidamente, demonstrando responsiveness. Porém, regressões em v1.1.11.post2 (Gemini tool calling, chat hang) e performance desktop indicam necessidade de regression testing mais robusto antes de releases.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Aguardando Triagem

| # | Título | Idade | Status | Urgência |
|---|--------|-------|--------|----------|
| [#5047](https://github.com/agentscope-ai/QwenPaw/issues/5047) | Windows Tauri 桌面端启动特别慢 | 5 dias | Aguardando resposta da equipe | **Alta** — Impacta experiência desktop |
| [#5173](https://github.com/agentscope-ai/QwenPaw/issues/5173) | Feature request (sem título) | 1 dia | Issue incompleta | **Média** — Requer triagem |
| [#5088](https://github.com/agentscope-ai/QwenPaw/pull/5088) | governance & sandbox interface | 4 dias | PR sem descrição | **Baixa** — Discussão exploratória |

### PRs Abertos Sem Revisão

| # | Título | Idade | Status | Prioridade |
|---|--------|-------|--------|------------|
| [#5170](https://github.com/agentscope-ai/QwenPaw/pull/5170) | perf(agents): cache PROFILE.md reads | 1 dia | Sem revisão | **Média** — Otimização performance list |
| [#5035](https://github.com/agentscope-ai/QwenPaw/pull/5035) | fix(local_models): parse llama.cpp version | 5 dias | Under Review | **Média** — Previne crash futuro |
| [#5040](https://github.com/agentscope-ai/QwenPaw/pull/5040) | fix(crons): tolerate invalid jobs | 5 dias | Under Review | **Média** — Robustez scheduler |
| [#5037](https://github.com/agentscope-ai/QwenPaw/pull/5037) | fix(config): IndexError Linux | 5 dias | Under Review | **Baixa** — Edge case |
| [#5041](https://github.com/agentscope-ai/QwenPaw/pull/5041) | fix(backup): skip unreadable files | 5 dias | Under Review | **Média** — Confiabilidade backup |
| [#5038](https://github.com/agentscope-ai/QwenPaw/pull/5038) | fix(context): guard empty msg | 5 dias | Under Review | **Baixa** — Edge case |

**Recomendação:** O PR #5170 (cache de PROFILE.md) deveria ser priorizado, pois otimiza o endpoint `/agents` que é chamado frequentemente. Issues de performance desktop (#5047) e bugs de severidade alta (#5163, #5172, #5171) requerem atenção da equipe core para evitar churn da comunidade.

---

*Relatório gerado automaticamente com base em dados do GitHub de 2026-06-14. Métricas: 11 issues, 9 PRs, 0 releases.*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-06-14

---

## 1. Panorama do Dia

O projeto ZeroClaw mantém uma **atividade intensa**, com 91 itens atualizados nas últimas 24 horas (41 issues + 50 PRs). Não houve lançamentos de novas versões, indicando foco em estabilização e refinamento da codebase. A comunidade demonstra engajamento significativo em RFCs arquiteturais (unificação dos motores de turns, sistema de plugins nativos, registries OCI) e em correções críticas de estabilidade, especialmente no gateway web e canais de comunicação. O volume de PRs abertos (36) sugere um pipeline saudável de contribuições, enquanto 14 PRs foram merged/fechados, indicando ritmo de integração ativo.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24 horas.**

O projeto não publicou novas versões desde o período analisado. A ausência de releases sugere que a equipe de manutenção está focada em revisar e consolidar o backlog de PRs antes de um próximo tag.

---

## 3. Progresso do Projeto

Os seguintes PRs foram **merged/fechados** com impacto direto na estabilidade:

| PR | Título | Tamanho | Impacto |
|----|--------|---------|---------|
| [#7538](https://github.com/zeroclaw-labs/zeroclaw/pull/7538) | fix(zerocode): prevent Cmd-C from triggering Quit on macOS | XS | Corrige comportamento incorreto de Cmd-C no TUI macOS |
| [#7513](https://github.com/zeroclaw-labs/zeroclaw/pull/7513) | fix(quickstart): bail with a clear error on non-TTY stdin | S | Elimina loop infinito que gerava 4.3 GB de output — fecha [#7507](https://github.com/zeroclaw-labs/zeroclaw/issues/7507) |
| [#7524](https://github.com/zeroclaw-labs/zeroclaw/pull/7524) | feat(channels/discord): derive gateway intents from config | S | Substitui `intents` hardcoded por configuração dinâmica — flexibilidade para deploys |
| [#7406](https://github.com/zeroclaw-labs/zeroclaw/pull/7406) | fix(runtime): suppress skill suggestions for installed tools | S | Remove sugestões duplicadas de skills já instaladas — UX mais limpa |
| [#6993](https://github.com/zeroclaw-labs/zeroclaw/pull/6993) | fix(runtime): clarify peer send targets | M | Clarifica alvos de envio entre peers no runtime core |

**PRs abertos de destaque** em revisão ativa:

- [#7361](https://github.com/zeroclaw-labs/zeroclaw/pull/7361) — **RFC-6969**: per-turn output routing via `send_via` + correções de entrega de voz (size: XL, risk: high). Adiciona parity entre canais Slack, Telegram, Discord, Matrix, Lark, WeCom
- [#7490](https://github.com/zeroclaw-labs/zeroclaw/pull/7490) — Comandos slash dinâmicos derivados de skills instaladas no Discord
- [#7525](https://github.com/zeroclaw-labs/zeroclaw/pull/7525) — Sync de archive no Discord para edits/deletes de mensagens
- [#7583](https://github.com/zeroclaw-labs/zeroclaw/pull/7583) — Honra limites de iteração de tools por perfil no runtime

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários)

1. **[#5470](https://github.com/zeroclaw-labs/zeroclaw/issues/5470)** — *"Multiple issues when running safely"* (5 comentários, CLOSED)
   - **Análise**: Relatado por `nxtkofi`,，涉及 múltiplas issues com runtime/daemon ao usar GPT 5.4 com reasoning. Problemas incluem saving duplicado no Telegram e comportamentos inesperados. closed como stale/blocked.

2. **[#5570](https://github.com/zeroclaw-labs/zeroclaw/issues/5570)** — *"Faster SQLite memory vector search"* (5 comentários, CLOSED)
   - **Análise**: Proposta de substituição do scan O(n) por ANN index in-process. Closed como stale/blocked — pode precisar re-abertura ou follow-up.

3. **[#7415](https://github.com/zeroclaw-labs/zeroclaw/issues/7415)** — *"RFC: Unify the three agent turn engines"* (4 comentários, CLOSED)
   - **Análise**: RFC execute como PR consolidado #7540. Marco arquitetural significativo para consolidação de `run_tool_call_loop`, `turn_streamed` e `Agent::turn`.

4. **[#6760](https://github.com/zeroclaw-labs/zeroclaw/issues/6760)** — *"Update Documentation for Docker"* (4 comentários, OPEN)
   - **Análise**: Documentação de Docker compose para v0.7.5-debian em progresso. Demonstra demanda por examples operacionais.

5. **[#7420](https://github.com/zeroclaw-labs/zeroclaw/issues/7420)** — *"RFC: Native Dynamic-Library Plugin System"* (3 comentários, OPEN)
   - **Análise**: Proposta ambiciosa de migrar de plugins JSON para sistema de dynamic libraries nativas. Redesenha arquitetura de plugins com foco em performance e type safety.

6. **[#7497](https://github.com/zeroclaw-labs/zeroclaw/issues/7497)** — *"RFC: OCI-Compliant Container Registries as Plugin Storage"* (2 comentários, OPEN)
   - **Análise**: Propõe usar registries OCI + cosign + wasm-pkg-client para distribuição de plugins WASM. Avanço significativo na supply chain e discovery.

---

## 5. Bugs e Estabilidade

### Bugs P1 (S1 — workflow blocked)

| Issue | Título | Status | Link |
|-------|--------|--------|------|
| #7563 | canvas-store regression in WS chat/ACP sessions | OPEN | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/7563) |
| #7527 | macOS app não detecta permissões e exibe página vazia | OPEN | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/7527) |
| #7542 | `ask_user` falha com "Channel closed before receiving a response" no gateway web | OPEN | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/7542) |
| #7507 | quickstart loop infinito em non-TTY (4.3 GB output) | **CLOSED** | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/7507) |

### Bugs P2 (S2 — degraded behavior)

| Issue | Título | Status | Link |
|-------|--------|--------|------|
| #5470 | Múltiplos issues ao rodar em modo seguro | CLOSED (stale) | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5470) |
| #7523 | Web dashboard não disponível após brew install (macOS) | OPEN (in-progress) | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/7523) |
| #7378 | zerocode trata Cmd-C como quit chord (macOS) | **CLOSED** | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/7378) |
| #7377 | Temas dark herdam texto foreground ilegível | CLOSED | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/7377) |
| #6223 | web_fetch não funciona no WhatsApp Web | CLOSED | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/6223) |
| #6723 | OpenAI provider ignora `timeout_secs` (hardcoded 120s) | CLOSED | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/6723) |

### Observações de Estabilidade

- **Regressões críticas no gateway web** (P1): Canvas store e ask_user afetam fluxo de chat via WebSocket — 需要 atenção prioritária
- **macOS TUI**: Cmd-C bug corrigido em [#7538](https://github.com/zeroclaw-labs/zeroclaw/pull/7538), mas issues de app nativo (#7527) ainda abertas
- **Quickstart**: Bug de loop infinito resolvido — melhoria de DX significativa

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Prioritárias (P2, risk: high)

| Issue | Título | Status | Link |
|-------|--------|--------|------|
| #6289 | Prompt-triggered install suggestions para skills/plugins faltantes | OPEN | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/6289) |
| #6823 | Tracker: Zerocode ACP Bridge (TUI ↔ daemon RPC) | OPEN | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/6823) |
| #6826 | Tracker: Zerocode (standalone TUI binary) | OPEN | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/6826) |
| #6825 | Tracker: Zerocode UX (theming, keybindings, accessibility) | OPEN | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/6825) |
| #7514 | `delegate` tool com risk profiles diferentes para subagentes | OPEN | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/7514) |
| #7521 | file_read: decode non-UTF-8 (cp1251/Latin-1) via charset detection | OPEN | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/7521) |

### RFCs Arquiteturais em Evolução

1. **[#7415](https://github.com/zeroclaw-labs/zeroclaw/issues/7415)** — Unificação dos 3 motores de turn (implementado em #7540)
2. **[#7420](https://github.com/zeroclaw-labs/zeroclaw/issues/7420)** — Sistema de plugins via dynamic libraries nativas
3. **[#7497](https://github.com/zeroclaw-labs/zeroclaw/issues/7497)** — OCI registries para storage de plugins WASM

### Novos PRs de Features

- [#7552](https://github.com/zeroclaw-labs/zeroclaw/pull/7552) — Skills respeitam `timeout_secs` do SKILL.toml
- [#7539](https://github.com/zeroclaw-labs/zeroclaw/issues/7539) — Llama.cpp model router para quick switching
- [#7543](https://github.com/zeroclaw-labs/zeroclaw/issues/7543) — Multi-session support no gateway web UI
- [#7531](https://github.com/zeroclaw-labs/zeroclaw/issues/7531) — Streaming card messages para QQ/DingTalk/WeChat/Feishu
- [#6842](https://github.com/zeroclaw-labs/zeroclaw/pull/6842) — NEAR AI Cloud provider
- [#5797](https://github.com/zeroclaw-labs/zeroclaw/pull/5797) — Suporte a `tls_ca_cert_path` para providers custom

### Sinais de Roadmap

- **TUI como prioridade**: Três trackers dedicados (ACP Bridge, Zerocode binary, UX) indicam foco em interface terminal
- **Plugins e extensibilidade**: RFCs de dynamic libraries e OCI registries sugerem arquitetura de plugins v2
- **Multi-canal parity**: Mejorias consistentes em Discord, WhatsApp, e canais asiáticos (QQ, DingTalk, WeCom, Feishu)

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Categoria | Descrição | Issue |
|-----------|-----------|-------|
| **Estabilidade macOS** | App nativo não detecta permissões, janela some ao reiniciar | [#7527](https://github.com/zeroclaw-labs/zeroclaw/issues/7527) |
| **Web Dashboard** | Dashboard indisponível após instalação via Homebrew | [#7523](https://github.com/zeroclaw-labs/zeroclaw/issues/7523) |
| **Timeout Config** | Timeout de 120s hardcoded no provider OpenAI ignora configuração | [#6723](https://github.com/zeroclaw-labs/zeroclaw/issues/6723) |
| **WhatsApp Web** | Ferramenta `web_fetch` não funciona no canal WhatsApp Web | [#6223](https://github.com/zeroclaw-labs/zeroclaw/issues/6223) |
| **Non-UTF8 Files** | `file_read` substitui bytes inválidos com � — Cyrillic/Latin-1 quebrados | [#7521](https://github.com/zeroclaw-labs/zeroclaw/issues/7521) |

### Cenários de Uso Destacados

- **Usuários power**: Demanda por TUI standalone com parity ao web dashboard ([#6826](https://github.com/zeroclaw-labs/zeroclaw/issues/6826))
- **Deploys corporativos**: Necessidade de TLS custom CA para endpoints privados ([#5797](https://github.com/zeroclaw-labs/zeroclaw/pull/5797))
- **Multi-session**: Usuários solicitam conversas independentes por agente no gateway web ([#7543](https://github.com/zeroclaw-labs/zeroclaw/issues/7543))
- **Descoberta de Skills**: Sugestões automáticas quando usuário pede capability não instalada ([#6289](https://github.com/zeroclaw-labs/zeroclaw/issues/6289))

### Satisfação Observada

- Correção rápida do bug de loop infinito no quickstart demonstra responsividade
- Consolidação do RFC de turn engines (#7415 → #7540) mostra maturidade em governança arquitetural
- Node.js version centralization (#7550) reduz fricção em setup de contributors

---

## 8. Backlog que Merece Atenção

### Issues sem atividade recente (candidates para triagem)

| Issue | Título | Criado | Atualizado | Comentários | Link |
|-------|--------|--------|------------|-------------|------|
| #5570 | Faster SQLite vector search (ANN) | 2026-04-09 | 2026-06-13 | 5 | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5570) |
| #6289 | Prompt-triggered install suggestions | 2026-05-02 | 2026-06-13 | 3 | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/6289) |
| #6876 | allowed_tools não restringe MCP tools | 2026-05-23 | 2026-06-13 | 3 | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/6876) |
| #6970 | v0.8.1 integration/channel/provider/tool PR queue | 2026-05-27 | 2026-06-13 | 0 | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/6970) |

### Issues bloqueadas/stale que precisam de ação

| Issue | Título | Tags | Link |
|-------|--------|------|------|
| #5470 | Multiple issues when running safely | `status:stale`, `status:blocked`, `needs-author-action` | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5470) |
| #5570 | Faster SQLite vector search | `status:stale`, `status:blocked`, `needs-author

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*