# Resumo diário do ecossistema de agentes de IA 2026-06-03

> Issues: 1 | PRs: 1 | Projetos cobertos: 7 | Gerado em: 2026-06-02 22:19 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório do Projeto NullClaw — 2026-06-03

## 1. Panorama do dia

O projeto NullClaw apresenta uma atividade moderada em 3 de junho de 2026, com foco exclusivo na iteração sobre um bug crítico de falsos positivos no módulo de redator de PII. Uma issue foi aberta reportando que o redator de informações pessoais está incorretamente identificando saídas de data/hora como números de telefone, enquanto um PR com correção associada já foi submetido pelo mesmo autor. Não houve novos lançamentos, merges ou encerramento de issues nas últimas 24 horas, indicando que a equipe está concentrada em resolver essa regressão específica antes de avançar para outras frentes.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24 horas.**

O projeto não publicou novas versões desde o período analisado. O último lançamento significativo foi a alteração no commit `41cdb493` (maio de 2026), que definiu `enable_pii_redaction` como `true` por padrão — mudança que aparentemente introduziu o problema de falsos positivos agora em investigação.

---

## 3. Progresso do projeto

### PRs em destaque

| # | Título | Status | Impacto |
|---|--------|--------|---------|
| [#945](https://github.com/nullclaw/nullclaw/pull/945) | `fix(redaction): reject ISO date/time patterns as false-positive phone matches` | **ABERTO** | Alta — corrige regressão no PII redactor |

**Análise do PR #945:**
O PR propõe uma correção direta para o problema reportado na issue #944. As mudanças incluem:

- Adição de função auxiliar `isDateLike()` no módulo `src/redaction.zig`
- Validação em `matchPhone` que rejeita padrões ISO de data/hora (YYYY-MM-DD hh e DD-MM-YYYY hh)
- Manutenção da compatibilidade com o padrão de datetime emitido pelo system prompt em `appendDateTimeSection`

**Estado atual:** Aguardando revisão. Nenhum comentário registrado ainda.

---

## 4. Temas quentes da comunidade

### Issue em destaque

| # | Título | Reações | Comentários |
|---|--------|---------|-------------|
| [#944](https://github.com/nullclaw/nullclaw/issues/944) | PII redactor falsely matches date/time output as phone numbers | 0 👍 | 0 |

**Análise da demanda:**
A issue #944 representa um caso clássico de **regressão funcional** introduzida por uma mudança de configuração aparentemente inócua. O problema afeta diretamente a usabilidade do redator de PII em cenários onde agentes executam comandos do sistema que geram output com data/hora — situação comum em automações e assistentes pessoais.

**Pontos relevantes:**
- **Severidade:** Alta para workflows que dependem de redator PII ativado
- **Reprodução:** Facilmente replicável via execução de `date` em ambiente Linux/macOS
- **Escopo:** Qualquer usuário que utilize `enable_pii_redaction: true` (padrão desde maio/2026)
- **Autor:** vernonstinebaker — mantenedor ativo do projeto

**Conclusão:** A comunidade demonstra foco em estabilidade e qualidade, com resposta rápida (issue + PR no mesmo dia). Este não é um "tema quente" por buzz social, mas sim por criticidade técnica.

---

## 5. Bugs e estabilidade

### Bug em investigação

| Severidade | Issue | Descrição |
|------------|-------|-----------|
| **🔴 Alta** | [#944](https://github.com/nullclaw/nullclaw/issues/944) | Redator PII classifica incorretamente datas/horas como telefones |

**Detalhes técnicos:**
- **Componente afetado:** `src/redaction.zig` (função `matchPhone`)
- **Trigger:** Qualquer output contendo padrões como `2026-06-02 20:17` ou similares
- **Impacto:** Placeholders `[PHONE_X]` substituem informações legítimas de timestamp
- **Root cause presumida:** Regex/heurística de phone matching sem validação de contexto date/time

**Recomendação:** Priorizar revisão e merge do PR #945 antes do próximo lançamento para evitar acúmulo de tech debt.

---

## 6. Pedidos de features e sinais de roadmap

**Nenhum novo feature request registrado nas últimas 24 horas.**

A atividade recente sugere que o roadmap está em fase de estabilização após a mudança de default do PII redactor. Sinais observáveis:

1. **Foco em DX (Developer Experience):** A correção rápida do bug de redator indica atenção à experiência de uso em produção
2. **Modularidade:** Arquitetura em `src/redaction.zig` permite expansões futuras para novos tipos de PII
3. **Testes de regressão:** A abertura simultânea de issue + PR pelo mesmo autor sugere processo de desenvolvimento test-driven

---

## 7. Resumo de feedback dos usuários

### Feedback implícito via Issues

| Tipo | Observação |
|------|------------|
| **DOR IDENTIFICADA** | Falsos positivos no redator PII causam perda de informação legível em logs e outputs |
| **CENÁRIO DE USO** | Agentes de IA executando comandos de sistema (`date`, timestamps em logs) |
| **FRUSTRAÇÃO** | Redator，默认 ativo desde maio/2026, impacta saída sem opção de granularidade |

### Análise qualitativa

O bug reportado demonstra que o redator de PII foi implementado com abordagem "agressiva por padrão" (princípio de segurança). No entanto, a falta de whitelists para padrões date/time introduziu atrito em cenários legítimos. A rápida submissão de PR pelo mesmo autor indica alinhamento entre mantenedor e comunidade de usuários.

---

## 8. Backlog que merece atenção

### Issues antigas sem movimento recente

| # | Título | Criado | Última atualização | Prioridade |
|---|--------|--------|--------------------|------------|
| — | *Nenhuma identificada nos dados fornecidos* | — | — | — |

**Nota:** Os dados de 24h não incluem histórico de issues mais antigas. Recomenda-se verificar issues com >30 dias sem atualização para identificar potential tech debt ou demandas abandonadas.

### PRs pendentes de revisão

| # | Título | Idade | Status |
|---|--------|-------|--------|
| [#945](https://github.com/nullclaw/nullclaw/pull/945) | fix(redaction): reject ISO date/time patterns as false-positive phone matches | <1 dia | Aguardando revisão |

**Recomendação:** Revisar e testar o PR #945. A idade ainda é curta, mas dado o impacto no default do redator, mover para merge rapidamente melhoraria a estabilidade do main branch.

---

## Métricas resumidas do dia

| Métrica | Valor |
|---------|-------|
| Issues abertas/ativas | 1 |
| Issues fechadas | 0 |
| PRs abertos | 1 |
| PRs merged/fechados | 0 |
| Releases | 0 |
| Total de reações | 0 |
| Total de comentários | 0 |

---

## Conclusão

O projeto NullClaw encontra-se em estado de **manutenção reativa**, com foco em corrigir uma regressão crítica no redator de PII introduzida no último mês. A resposta rápida da equipe (issue + PR no mesmo dia) é positiva para saúde do projeto. Não há indicadores de problemas sistêmicos, mas a ausência de releases recentes e o volume baixo de atividade podem sinalizar fase de maturação ou redução temporária de ritmo de desenvolvimento.

**Ação recomendada:** Priorizar review do PR #945 e, se aprovado, liberar hotfix ou incluir na próxima release com nota de migration para usuários que dependem de output de timestamps não-redatados.

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo — Ecossistema de Agentes de IA Open Source

**Data de referência:** 2026-06-03  
**Projetos analisados:** NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw, ZeroClaw

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **duas velocidades distintas** em 03/06/2026. Por um lado, quatro projetos (Hermes Agent, CoPaw, IronClaw, ZeroClaw) registram volumes экстремально elevados de atividade — acima de 30 eventos por dia — sinalizando fases agressivas de desenvolvimento ou auditoria. Por outro, NullClaw permanece em modo reativo com volume mínimo, concentrado em corrigir uma regressão do redator PII. A característica mais marcante do período é a **prioridade compartilhada por estabilidade e segurança**: todos os projetos sem exceção apresentam correções de bugs críticos ou vulnerabilidades em aberto, indicando que o ecossistema amadureceu da fase de features para uma fase de consolidação operacional. Nenhum projeto publicou releases estáveis no período, sugerindo que a cadeia de integração está mais lenta que o volume de contribuições.

---

## 2. Comparação de Atividade

| Projeto | Issues (abertas/fechadas) | PRs (abertos/fechados) | Releases (24h) | Avaliação de Saúde |
|---------|--------------------------|------------------------|----------------|-------------------|
| **ZeroClaw** | 50 / 17 | 50 / 17 | **v0.8.0-beta-2** ✅ | ████████ Alta — release significativa |
| **Hermes Agent** | 50 / 4 | 50 / 0 | 0 | ██████░░ Média-Alta — gargalo de review |
| **IronClaw** | 34 / ? | 48 / 29 | 0 | ██████░░ Alta — ciclo saudável |
| **CoPaw** | 47 / 22 | 32 / ? | bump v1.1.11b1 | █████░░░ Alta — auditoria segurança |
| **NanoBot** | 10 / 3 | 27 / 18 | 0 | █████░░░ Alta — ciclo robusto |
| **PicoClaw** | 3 / 1 | 14 / 5 | v0.2.9-nightly | ████░░░░ Média — stale PRs |
| **NullClaw** | 1 / 0 | 1 / 0 | 0 | ██░░░░░░ Baixa — manutenção reativa |

**Observações:**
- ZeroClaw é o único projeto com release nova, marcando progresso tangível.
- Hermes Agent apresenta o maior volume absoluto (100 eventos) mas com ratio de fechamento baixo (4/50 issues).
- CoPaw lidera em vulnerabilidades identificadas (7 CVEs em um dia) — auditoria coordenada.
- NullClaw está em modo de manutenção pura, sem atividade de features.

---

## 3. Posicionamento do Projeto Principal (ZeroClaw)

### Vantagens Competitivas

| Dimensão | Posição do ZeroClaw | Vantagem frente aos pares |
|----------|---------------------|--------------------------|
| **Release cadence** | ✅ Beta publicada (v0.8.0-beta-2) | Único com release formal — disciplina de entrega |
| **Arquitetura multi-agente** | Runtime nativo multi-agente desde v0.8 | Diferenciação técnica clara vs. NanoBot/Hermes |
| **Segurança** | 2 P1s de security fechados hoje | Resposta rápida a vulnerabilidades críticas |
| **Canais** | 10+ canais suportados (Telegram, WhatsApp, Twitter, Mattermost) | Cobertura mais ampla vs. PicoClaw (WeChat) |
| **Novos recursos** | Zerocode TUI, ACP protocol extensions, hardware tools | Feature set mais atualizado |
| **Documentação** | PR #7023 para versioned docs | Attention to developer experience |

### Diferenças Técnicas

- **ZeroClaw** opta por arquitetura em Rust com crates modulares, priorizando performance e segurança de memória.
- **NanoBot** e **CoPaw** utilizam stacks Python mais acessíveis, com foco em灵活性和 extensibilidade via plugins.
- **Hermes Agent** e **IronClaw** investem pesado em integrações OAuth e Desktop client, sinalizando foco em consumidores finais.
- **NullClaw** permanece minimalista (Zig), demonstrando abordagem pragmática para correções de PII.

### Tamanho da Comunidade

| Indicador | ZeroClaw | Hermes Agent | IronClaw | NanoBot |
|-----------|----------|--------------|----------|---------|
| Eventos/dia | 100 | 100 | ~82 | ~37 |
| PRs merged/24h | 17 | 0 | 29 | 18 |
| Engajamento (comentários) | Alto | Alto | Alto | Moderado |

ZeroClaw e Hermes Agent lideram em volume, mas ZeroClaw demonstra ciclo de release mais saudável.

---

## 4. Focos Técnicos Compartilhados

### 4.1 Estabilidade de Integrações Externas (MCP/ OAuth)

| Projeto | Tipo de Issue | Severidade |
|---------|--------------|------------|
| Hermes Agent | MCP server unreachable after random time (#4168) | 🔴 Alta |
| IronClaw | MCP driver failure — Notion/GitHub unusable (#4343) | 🔴 Alta |
| NanoBot | Orphaned tool results sem tool_calls (#4006) | 🟡 Média |
| IronClaw | Tool calls rejeitadas como InvalidInvocation (#4339) | 🟡 Média |

**Conclusão:** O padrão **Model Context Protocol (MCP)** apresenta problemas recorrentes de estabilidade em múltiplos projetos, indicando que a especificação ainda não atingiu maturidade operacional. quatro de sete projetos reportam falhas relacionadas a MCP em produção.

### 4.2 Compatibilidade com Providers de IA

| Projeto | Provider afetado | Problema |
|---------|------------------|----------|
| NullClaw | — | Falso positivo no redator PII (regressão) |
| Hermes Agent | Gemini Code Assist | HTTP 404 |
| ZeroClaw | DeepSeek-V4, Kimi | reasoning_content missing em streaming |
| IronClaw | Claude Opus 4.7/4.8 | `temperature` deprecated — bloqueio total |
| CoPaw | DeepSeek reasoning | HTTP 500 em multi-turn |
| PicoClaw | Claude Opus 4.7 | Skip temperature parameter |

**Conclusão:** A velocidade de release dos modelos foundation (especialmente Claude Opus 4.7/4.8 e DeepSeek-V4) está superando a capacidade de adaptação dos agentes. O problema de `temperature` deprecated em IronClaw é breaking e afeta usuários premium.

### 4.3 Segurança e Validação de Input

| Projeto | Vulnerabilidades reportadas (24h) | Status |
|---------|----------------------------------|--------|
| CoPaw | **7 CVEs** (bypass, path traversal, secret leak, etc.) | Todos fechados |
| ZeroClaw | 2 P1 Security (allowlist bypass, pairing code weak) | 1 fechado, 1 aberto |
| NanoBot | 0 | — |
| Hermes Agent | 0 | — |

**Conclusão:** CoPaw passou por auditoria profissional coordenada — volume atípico. A comunidade demonstra maturidade em responder rapidamente a vulnerabilidades (todos os 7 CVEs fechados em menos de 24h). O padrão de **bypass de allowlist** em múltiplos projetos indica weakness архитектурная em middleware de segurança.

### 4.4 UX/Desktop e WebUI

| Projeto | Área de dor | Impacto |
|---------|------------|---------|
| Hermes Agent | Desktop flickering, OAuth persistence, WebSocket origin rejection | 🔴 Alto — 5+ issues |
| IronClaw | Auth modal persistente, chain-of-thought exposto, espelhamento de mensagens | 🔴 Alto — UI/Qwen specific |
| CoPaw | Config Models perdida ao criar sessão, sidebar complexo | 🟠 Médio |
| NanoBot | WebUI refresh routing, sort chats, clipboard fallback | 🟡 Menor |

**Conclusão:** A superfície Desktop/WebUI é onde se concentram os bugs de experiência. Hermes Agent e IronClaw apresentam padrões semelhantes de falhas de OAuth e estado de UI inconsistente, sugerindo que a integração Desktop está arquiteturalmente subdimensionada.

---

## 5. Análise de Diferenciação

### 5.1 Estratégia de Produto

| Projeto | Posicionamento | Público-alvo | Arquitetura |
|---------|---------------|-------------|-------------|
| **ZeroClaw** | Agente de terminal para operadores técnicos | DevOps, power users, multi-machine clusters | Rust, multi-agente nativo |
| **Hermes Agent** | Desktop-first AI assistant com integrações sociais | Consumidores, streamers, Discord/Slack users | Python/TypeScript, Desktop Electron |
| **IronClaw** | Sistema Reborn com automação de canais | Empresas, automação de workflows (Gmail, Notion, GitHub) | Python, Reborn loop engine |
| **NanoBot** | Agente leve com foco em RAG e memória | Usuários que precisam de memória persistente | Python, RAG embeddings locais |
| **CoPaw** | Plataforma multiplataforma com browser automation | Windows users, automação web, XiaoMi/MiMo | Python, Tauri Desktop, AgentScope 2.0 |
| **PicoClaw** | Agente minimalista focado em canais asiáticos | Mercado chinês (WeChat, WeCom, Yuanbao) | Python, streaming HTTP |
| **NullClaw** | Utilitário de redator PII para agentes | Desenvolvedores que precisam de redações de PII | Zig, função única |

### 5.2 Diferenciação Técnica Chave

| Diferenciador | Projetos que investem | Implicação |
|---------------|----------------------|------------|
| **Runtime multi-agente** | ZeroClaw, IronClaw | Arquitetura mais complexa, maior flexibilidade |
| **RAG/_memory persistence** | NanoBot (#4109), ZeroClaw (#7053) | Diferenciação em long-running conversations |
| **Browser automation** | CoPaw (#4919), Hermes Agent | Competição direta por用例 de automação web |
| **Canal QQ/Feishu** | PicoClaw, NanoBot, IronClaw | Foco em mercados asiáticos |
| **WASM capabilities** | IronClaw (GitHub as first WASM) | Sandboxing de tools, extensibilidade |
| **TUI terminal** | ZeroClaw (zerocode), Hermes Agent (TUI input fix) | Diferente do Desktop — appeal técnico |

### 5.3 Matriz de Prioridades por Projeto

| Projeto | Prioridade #1 | Prioridade #2 | Prioridade #3 |
|---------|---------------|---------------|---------------|
| NullClaw | Corrigir regressão PII | — | — |
| NanoBot | Estabilidade MCP | Suporte a providers customizados | RAG memory |
| Hermes Agent | Desktop stability | Gateway reliability (fd leak) | OAuth integration |
| PicoClaw | streaming HTTP support | Compatibilidade Claude Opus 4.7 | Canal WeChat/Yuanbao |
| IronClaw | Corrigir Claude Opus 4.7/4.8 | Reborn audit completion | MCP integrations |
| CoPaw | Patches de segurança (v1.1.11) | Windows compatibility | AgentScope 2.0 migration |
| ZeroClaw | Compatibilidade DeepSeek/Kimi | Multi-daemon cluster | Air-gapped mode |

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Desenvolvimento

| Projeto | PRs merged/24h | Ratio fechamentos | Interpretação |
|---------|----------------|------------------|---------------|
| **IronClaw** | 29 | 60% (29/48) | ⭐ Maior eficiência — grande volume com fechamento rápido |
| **NanoBot** | 18 | 67% (18/27) | ⭐ Alto throughput — ciclo saudável |
| **CoPaw** | ~15 (estimado) | ~50% | ✅ Forte — segurança auditoria não bloqueou features |
| **PicoClaw** | 5 | 36% (5/14) | ⚠️ Stale PRs acumulando — review bottleneck |
| **ZeroClaw** | 17 | 34% (17/50) | ⚠️ Volume alto mas many PRs abertas |
| **Hermes Agent** | 0 | 0% (0/50) | 🔴 Gargalo severo — 50 PRs abertas sem merge |
| **NullClaw** | 0 | 0% (0/1) | 🟡 Baixo volume mas problema específico |

### 6.2 Maturidade Organizacional

| Indicador | IronClaw | ZeroClaw | Hermes Agent | NanoBot |
|-----------|----------|----------|--------------|---------|
| **Auditoria sistemática** | ✅ (L1-L11, C1-C6) | ✅ (security patches) | ⚠️ (desktop issues não triaged) | ❌ |
| **Release cadence** | ❌ (0 releases) | ✅ (beta published) | ❌ (0 releases) | ❌ (0 releases) |
| **Bug triage speed** | ✅ (mesmo dia) | ✅ (mesmo dia) | ⚠️ (vários P1 abertos) | ✅ (18 fechadas) |
| **Feature prioritization** | ✅ (OAuth/WebUI v2) | ✅ (zerocode TUI) | ⚠️ (descentralizado) | ✅ (RAG memory) |
| **Segurança** | ⚠️ (2 P1 security open) | ⚠️ (1 P1 open) | ❌ (fd leak P1) | ❌ |

**Veredicto:** **IronClaw e ZeroClaw** demonstram maior maturidade organizacional — kombinasi volume alto com ciclo de review eficiente e foco em segurança. **Hermes Agent** apresenta risco de bottleneck com 50 PRs abertas sem merges.

### 6.3 Engajamento de Contribuidores

| Projeto | Issues com >5 comentários | Features bem recebidas | Sinais de comunidade |
|---------|--------------------------|------------------------|---------------------|
| **ZeroClaw** | #6059 (15 comentários) | Zerocode TUI | Comunidade ativa em docs e multi-daemon |
| **PicoClaw** | #2404 (10 comentários) | streaming HTTP request | Demanda reprimida de streaming |
| **Hermes Agent** | #13260, #30565, #36934 (3-4 comentários) | Desktop stability | Engajamento em OAuth e injection |
| **CoPaw** | #4666 (6 comentários) | AgentScope 2.0 migration | High engagement, security-driven |
| **IronClaw** | L1-L11 (17 issues de auditoria) | OAuth/WebUI v2 | Auditoria interna robusta |
| **NanoBot** | Moderado | RAG memory, QQ channel | Diversificado, sem tema dominante |
| **NullClaw** | 0 | PII redaction fix | Comunidade mínima |

---

## 7. Sinais de Tendência

### 7.1 Tendência #1 — Consolidação de Segurança como Prioridade Primária

O volume de vulnerabilidades reportadas (7 CVEs em CoPaw, 2 P1 security em ZeroClaw, allowlist bypass em Hermes Agent) indica que o ecossistema está passando por uma **fase de hardening** após crescimento acelerado. Isso é consistente com o padrão observado em projetos open source que atingem adoção significativa.

**Implicação:** Projetos que não demonstrarem processo de resposta a segurança rapidamente perderão credibilidade. A ausência de política de segurança documentada será um gap competitivo.

### 7.2 Tendência #2 — Compatibilidade com Models de Reasoning é Gap Crítico

Três projetos (ZeroClaw, IronClaw, CoPaw) enfrentam problemas com modelos de reasoning (DeepSeek-V4, Claude Opus 4.7/4.8, DeepSeek multi-turn). A velocidade de release dos foundation models está superando a capacidade de adaptação dos agentes.

**Implicação:** Agentes precisam de pipelines de atualização de provider mais ágeis. A tendência é朝着 **dual-mode** (com/sem reasoning) como default, com fallback automático.

### 7.3 Tendência #3 — Multi-Agente e Multi-Daemon como Próximo Marco Arquitetural

ZeroClaw (runtime multi-agente), IronClaw (Reborn loop), NanoBot (subagent access #4166), e CoPaw (spawn_subagent #4901) estão convergindo para arquitetura multi-agente. ZeroClaw adiciona CLI para multi-machine daemon registration (#6390).

**Implicação:** O mercado está evoluindo de agentes isolados para **swarms orquestrados**. Esta é a direção técnica que definirá a próxima geração de produtos.

### 7.4 Tendência #4 — Desktop como Surface Crítica de Instabilidade

Hermes Agent (5+ issues), IronClaw (7 bugs Qwen-related), e CoPaw (Windows compatibility gaps) demonstram que o **Desktop client** é a superfície com maior número de bugs e menor estabilidade. Isso é paradoxal porque Desktop é onde o produto se encontra com o usuário final.

**Implicação:** Organizações que investirem em stability de Desktop terão vantagem competitiva significativa. A falha em Desktop corrói confiança mais rapidamente que falhas em backend.

### 7.5 Tendência #5 — Mercados Asiáticos como

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-06-03

## 1. Panorama do dia

O NanoBot apresenta alta atividade de desenvolvimento em 03/06/2026, com 37 eventos totais (10 issues + 27 PRs) nas últimas 24 horas. Das 27 PRs atualizadas, 18 foram merged/fechadas, indicando uma taxa de conclusão robusta. Não houve lançamentos de novas versões, mas a codebase可见多个功能性增强，包括邮件附件支持、QQ频道集成、WebUI多项修复和轻量级RAG系统。7个问题仍处于开放状态，主要涉及MCP服务稳定性、工具调用历史一致性和CLI安装兼容性。

---

## 2. Lançamentos

**Nenhuma release nas últimas 24h.**

O projeto não publicou novas versões entre 2026-06-02 e 2026-06-03. O último release disponível permanece sem informações detalhadas neste período.

---

## 3. Progresso do Projeto

### PRs Merged/Closed (18 total)

| PR | Título | Destaque |
|----|--------|----------|
| [#4109](https://github.com/HKUDS/nanobot/pull/4109) | Add lightweight RAG for memory retrieval | Implementa recuperação de memória via RAG com embeddings locais |
| [#3990](https://github.com/HKUDS/nanobot/pull/3990) | Replace two-phase Dream class with simple cron + process_direct | Refatoração significativa do fluxo Dream |
| [#4146](https://github.com/HKUDS/nanobot/pull/4146) | Add Napcat (QQ) channel | Adiciona suporte a QQ via OneBot v11 Forward WebSocket |
| [#4162](https://github.com/HKUDS/nanobot/pull/4162) / [#4160](https://github.com/HKUDS/nanobot/pull/4160) | Add file attachment support to email channel | Permite anexar mídias em emails SMTP |
| [#4157](https://github.com/HKUDS/nanobot/pull/4157) | Bound startup fetch waits | Adiciona `fetchWithTimeout` para evitar requisições pendentes indefinidamente |
| [#4155](https://github.com/HKUDS/nanobot/pull/4155) | Prevent read_file offload loop | Corrige loop de offloading em `read_file` |
| [#4151](https://github.com/HKUDS/nanobot/pull/4151) | Sort Chats group by recency | Corrige ordenação de conversas na sidebar do WebUI |
| [#4150](https://github.com/HKUDS/nanobot/pull/4150) | Fix WebUI refresh location routing | Persiste localização no hash route para navegação |
| [#4149](https://github.com/HKUDS/nanobot/pull/4149) | Support fallback copy for WebUI replies | Fallback via `execCommand` quando Clipboard API falha |
| [#4159](https://github.com/HKUDS/nanobot/pull/4159) | Auto-fix for issue #4158 | Correção automática para instalação via `uv tool` |
| [#4115](https://github.com/HKUDS/nanobot/pull/4115) | Split WebUI gateway dependencies | Extrai roteamento HTTP do `WebSocketChannel` |

**Avanços significativos:**
- **Infraestrutura de memória:** Lightweight RAG com embeddings locais (#4109)
- **Canais de comunicação:** Suporte a QQ (Napcat) (#4146) e anexos em email (#4162)
- **WebUI:** Múltiplas correções de UX e navegação (#4150, #4151, #4149)
- **Estabilidade:** Prevenção de loop de offloading (#4155)

---

## 4. Temas Quentes da Comunidade

### Issues com mais comentários

1. **[#4167](https://github.com/HKUDS/nanobot/issues/4167)** — Image generation fails with OpenAI-compatible APIs (2 comentários)
   - **Tensão:** APIs compatíveis com OpenAI (ex: Agnes AI) falham ao usar parâmetro `response_format`
   - **Demanda:** Suporte a provedores customizados de geração de imagem

2. **[#4006](https://github.com/HKUDS/nanobot/issues/4006)** — Orphaned tool results sem tool_calls correspondentes (2 comentários)
   - **Tensão:** Após PR #3984, mensagens `role: "tool"` permanecem sem correspondência
   - **Impacto:** APIs com validação estricta rejeitam requisições; renderizadores de trajetória reportam erros

3. **[#4158](https://github.com/HKUDS/nanobot/issues/4158)** — WebUI CLI App pip installs under uv tool (1 comentário)
   - **Tensão:** Instalação via `uv tool` resulta em `No module named pip`
   - **Status:** Já corrigido via [#4159](https://github.com/HKUDS/nanobot/pull/4159)

4. **[#4132](https://github.com/HKUDS/nanobot/issues/4132)** — Support custom image generation provider (0 comentários, tagged "good first issue")
   - **Demanda:** Permitir providers customizados (ex: Agnes AI) além dos内置

5. **[#4139](https://github.com/HKUDS/nanobot/pull/4139)** — Platform deployment layer for HF Spaces & ModelScope (0 comentários, PR aberta)
   - **Proposta:** Abstração para deployment em plataformas cloud (HuggingFace Spaces, ModelScope)
   - **Impacto:** Reduzir fricção para usuários em ambientes cloud

### Análise de demandas

| Categoria | Frequência | Tendência |
|-----------|------------|-----------|
| Suporte a providers/customização | 2 issues (#4167, #4132) | Alta — indica necessidade de flexibilidade |
| Estabilidade MCP | 2 issues (#4168, #1168) | Moderada — problemas recorrentes |
| Integração cloud | 1 PR (#4139) | Emergente |
| UX/WebUI | 3+ PRs merged | Contínua — investimento em experiência |

---

## 5. Bugs e Estabilidade

### Bugs Abertos

| # | Título | Severidade | Status |
|---|--------|------------|--------|
| [#4168](https://github.com/HKUDS/nanobot/issues/4168) | MCP server unreachable after random time | **Alta** | `Session terminated` aleatório; restart temporário resolve |
| [#4167](https://github.com/HKUDS/nanobot/issues/4167) | Image generation fails sem `response_format` | **Média** | Afeta provedores OpenAI-compatíveis |
| [#4006](https://github.com/HKUDS/nanobot/issues/4006) | Orphaned tool results em conversation history | **Média** | Validação de API falha; rastreamento corrompido |
| [#1168](https://github.com/HKUDS/nanobot/issues/1168) | Nanobot连接 Notion MCP失败 | **Média** | Conexão MCP com Notion não funciona |

### Bugs Recentemente Fechados (com correções mergeadas)

| # | Título | Corrigido em |
|---|--------|--------------|
| [#4081](https://github.com/HKUDS/nanobot/issues/4081) | MemoryStore.append_history duplicate cursors under concurrency | Fechado |
| [#4153](https://github.com/HKUDS/nanobot/issues/4153) | read_file cannot recover persisted tool results | PR [#4155](https://github.com/HKUDS/nanobot/pull/4155) |
| [#4158](https://github.com/HKUDS/nanobot/issues/4158) | CLI App pip installs under uv tool | PR [#4159](https://github.com/HKUDS/nanobot/pull/4159) |

**Alertas de estabilidade:**
- ⚠️ **MCP Session Stability (#4168):** Problema recorrente de terminação de sessão após tempo aleatório — pode indicar vazamento de recursos ou timeout mal configurado
- ⚠️ **Tool Call Integrity (#4006):** Histórico de conversa com dados órfãos viola спецификации OpenAI/Anthropic

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Solicitadas

| # | Título | Impacto | Esforço Estimado |
|---|--------|---------|------------------|
| [#4139](https://github.com/HKUDS/nanobot/pull/4139) | Platform deployment layer (HF Spaces, ModelScope) | **Alto** | +851 linhas, 9 arquivos |
| [#4166](https://github.com/HKUDS/nanobot/issues/4166) | Allow subagent access to MCP service | **Alto** | Configuração + código |
| [#4132](https://github.com/HKUDS/nanobot/issues/4132) | Support custom image generation provider | **Médio** | Good first issue |

### PRs Abertas com Features

| # | Título | Natureza |
|---|--------|----------|
| [#4163](https://github.com/HKUDS/nanobot/pull/4163) | Fork-from-here para user messages (WebUI) | UX Enhancement |
| [#4134](https://github.com/HKUDS/nanobot/pull/4134) | Emit error event on WebSocket permission denial | Robustness |
| [#3983](https://github.com/HKUDS/nanobot/pull/3983) | Cover runner blocked tool-call finish reasons | Test Coverage |
| [#4123](https://github.com/HKUDS/nanobot/pull/4123) | Reject unsafe HTTP URLs before MCP probe | Security |

**Sinais de roadmap identificados:**
1. **Expansão cloud-native:** Deployment layer para HF Spaces/ModelScope (#4139) sugere estratégia de distribuição em plataformas cloud
2. **MCP como cidadão de primeira classe:** Acesso de subagentes a serviços MCP (#4166) indica investimento na arquitetura de agentes
3. **Customização de providers:** Suporte a provedores customizados de imagem e API (#4132, #4167) — flexibilidade aberta

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Dor | Frequência | Workaround Atual |
|-----|------------|------------------|
| Instabilidade MCP (sessões terminam aleatoriamente) | #4168 | Restart do nanobot |
| Falha ao conectar Notion MCP | #1168 | Usuários migram para Claude |
| API Image generation incompatível | #4167, #4132 | Sem workaround — feature request |
| Installation via `uv tool` quebra pip | #4158 | Corrigido em #4159 |

### Cenários de Uso Emergentes

1. **Deploy em plataformas cloud (HF Spaces, ModelScope):** Usuários querem deploy zero-config em ambientes gerenciados
2. **Agentes com MCPtool access:** Subagentes precisam de ferramentas MCP para完成任务 (#4166)
3. **Integração QQ (Napcat):** Recentemente mergeado (#4146), indica demanda por canais de messaging alternativos

### Indicadores de Satisfação

- **Taxa de resolução de bugs:** 3 bugs fechados nas últimas 24h (MemoryStore concurrency, read_file recovery, uv tool install)
- **Features bem recebidas:** RAG para memória (#4109), anexos em email (#4162), QQ channel (#4146)
- **Comunidade ativa:** 27 PRs atualizadas em 24h demonstra engajamento consistente

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta há Longo Tempo

| # | Título | Criado | Idade | Prioridade |
|---|--------|--------|-------|------------|
| [#1168](https://github.com/HKUDS/nanobot/issues/1168) | Nanobot连接 Notion MCP失败 | 2026-02-25 | **~97 dias** | **Alta** |
| [#4006](https://github.com/HKUDS/nanobot/issues/4006) | Orphaned tool results sem tool_calls | 2026-05-26 | ~8 dias | **Alta** |

### Issues com Baixa Interação (sugerem perda de interesse do reporter)

| # | Título | 👍 | Comentários |
|---|--------|----|-------------|
| [#4132](https://github.com/HKUDS/nanobot/issues/4132) | Support custom image generation provider | 0 | 0 |
| [#4166](https://github.com/HKUDS/nanobot/issues/4166) | Allow subagent access to MCP service | 0 | 0 |
| [#4168](https://github.com/HKUDS/nanobot/issues/4168) | cannot reach MCP server after random time | 0 | 0 |

### Recomendações para Maintainers

1. **Priorizar [#1168](https://github.com/HKUDS/nanobot/issues/1168):** Bug de ~3 meses sem solução para integração Notion MCP — impacto reputacional
2. **Triage [#4006](https://github.com/HKUDS/nanobot/issues/4006):** Violação de spec OpenAI/Anthropic pode afetar múltiplos usuários
3. **Engajar PR #4139:** Cloud deployment layer com +850 linhas sem comentários — precisa de code review

---

## Métricas Resumidas (2026-06-03)

| Indicador | Valor |
|-----------|-------|
| Issues abertas/ativas | 7 |
| Issues fechadas (24h) | 3 |
| PRs abertas | 9 |
| PRs merged/fechadas | 18 |
| Novas releases | 0 |
| Atividade total | **37 eventos** |
| Bugs em aberto | 4 |
| Features solicitadas | 3 |
| Backlog crítico | 2 issues antigas |

**Veredicto:** Projeto em **alta atividade** com ciclo de PRs saudável. Atenção needed para estabilidade MCP e conexão Notion. Roadmap sugere expansão cloud-native e flexibilidade de providers.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-06-03

---

## 1. Panorama do Dia

O Hermes Agent apresenta **alta atividade comunitária** em 03/06/2026, com 50 issues e 50 PRs atualizados nas últimas 24h. A ausência de releases novas sugere foco em estabilização e backlog. Os temas dominantes são a **estabilidade do Desktop app** (flickering, OAuth, onboarding remoto) e **problemas críticos de gateway** (file descriptor leak P1). A relação de 46 issues abertas vs. 4 fechadas indica volume elevado de demanda acumulada, enquanto 47 PRs abertos demonstra contribuição ativa, porém com possível gargalo de revisão/merge.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto não publicou novas versões desde o período analisado. Este dado, combinado com o volume de issues abertas (46), sugere que a equipe pode estar em ciclo de integração de contribuições pendentes antes de um próximo release tag.

---

## 3. Progresso do Projeto

### PRs em destaque (abertos)

| PR | Título | Escopo | Prioridade |
|----|--------|--------|------------|
| [#37679](https://github.com/NousResearch/hermes-agent/pull/37679) | fix(gateway): close ResponseStore + dispose unowned adapter on reconnect failure | **P1 — Crítico** | Fecha o file descriptor leak que causa zombie gateway após ~12h |
| [#37691](https://github.com/NousResearch/hermes-agent/pull/37691) | fix(desktop): configure Linux Electron sandbox helper | Desktop Linux | Configura `chrome-sandbox` como `root:root 4755` para renderer funcionar |
| [#37687](https://github.com/NousResearch/hermes-agent/pull/37687) | fix(tui): uppercase shift+letter input from kitty keyboard protocol | TUI | Corrige Shift+A → `a` (deveria ser `A`) no Ghostty via protocolo kitty |
| [#37685](https://github.com/NousResearch/hermes-agent/pull/37685) | fix(tools): return effective toolset state + guard restricted toolsets | Desktop Tools | Endereça toggle silencioso de toolsets restritos (discord_admin) |
| [#37681](https://github.com/NousResearch/hermes-agent/pull/37681) | fix(tools): bound tool_error body to prevent context bloat | Tools/Gateway | Limita tamanho de erro de tool para evitar injeção de strings ilimitadas no histórico |
| [#37688](https://github.com/NousResearch/hermes-agent/pull/37688) | fix(streaming): add Slack streaming=false default | Discord/Slack | Equilibra Slack com Discord: streaming desabilitado para evitar flickering |
| [#37678](https://github.com/NousResearch/hermes-agent/pull/37678) | fix(gateway): honor WECOM_GROUP_ALLOWED_USERS env fallback | WeCom Gateway | Corrige allowlist vazio em setups env-only para WeCom |

### Avanços concretos

- **TUI input**: A correção de shift+letter (issue #37680) foi abordada simultaneamente por comunidade e contributors, sinalizando regressão amplamente sentida.
- **Gateway reliability**: O PR #37679 é a contraparte direta da issue P1 #37011 (file descriptor leak) — indica priorização adequada.
- **Discord/Slack parity**: A issue #37688 fecha gap de configuração onde Discord tinha `streaming=false` mas Slack não, causando comportamento inconsistente.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários + reações)

| Issue | Título | Comentários | 👍 | Link |
|-------|--------|-------------|----|------|
| [#13260](https://github.com/NousResearch/hermes-agent/issues/13260) | Bug: HTTP 404 Code Assist — Gemini | 4 | 0 | Gemini Code Assist retornando 404 |
| [#30565](https://github.com/NousResearch/hermes-agent/issues/30565) | Discord tools silently hidden | 4 | 1 | `.env` não carregado em `os.environ` antes da avaliação |
| [#36934](https://github.com/NousResearch/hermes-agent/issues/36934) | /steer false-positive prompt injection | 3 | 0 | Opus 4.8 flagando steer legítimo como injeção |
| [#37549](https://github.com/NousResearch/hermes-agent/issues/37549) | Flickering chat transcripts Desktop | 2 | 2 | Scroll automático causa jump up/down no stream |
| [#37399](https://github.com/NousResearch/hermes-agent/issues/37399) | Remote mode rejects WebSocket origins | 1 | 1 | Tailscale/LAN binds falham no renderer boot |

### Análise das demandas quentes

**1. Discord tool gating (#30565 — 4 comentários, P2):** Usuários reportam que `DISCORD_BOT_TOKEN` em `~/.hermes/.env` não é reconhecido porque o arquivo não é carregado em `os.environ` antes da verificação de disponibilidade das tools. Este é um **problema de DX (developer experience)** que afeta automações baseadas em tokens via arquivo de ambiente local.

**2. Prompt injection false-positive (#36934 — 3 comentários):** Quando `/steer` é usado com modelos de alta resistência a injeção (Claude Opus 4.8), o texto legítimo é erroneamente classificado como ataque. A causa é colisão entre o canal de entrega de tool e defesas de injeção. Este é um **problema de UX crítico** para operadores que usam steering.

**3. Desktop flickering (#37549 — 2 comentários, 2 👍):** A issue acumulou mais 👍 que a média, indicando que é um incômodo widely felt. O scroll automático durante resposta quebra a experiência de leitura, especialmente em sessões longas.

---

## 5. Bugs e Estabilidade

### P1 — Críticos (gateway/prod)

| Issue | Título | Impacto | Link |
|-------|--------|---------|------|
| [#37011](https://github.com/NousResearch/hermes-agent/issues/37011) | File descriptor leak — sqlite3 never closed on reconnect | Gateway morto após ~12h; fd ulimit 2560 excedido | 1 comentário |
| [#37677](https://github.com/NousResearch/hermes-agent/issues/37677) | Oversized image (>8000px) bricks conversation permanently | Thread inutilizável após imagem grande; replay em todo turno | 1 comentário |

**Análise P1:** O file descriptor leak (#37011) é um bug de **estabilidade em produção** com severidade alta. O PR #37679 aborda a mesma raiz. A issue de imagem oversized (#37677) é particularmente severa porque **não é recuperável** — a thread fica permanentemente quebrada.

### P2 — Altos (afetam fluxos principais)

| Issue | Título | Área | Link |
|-------|--------|------|------|
| [#30565](https://github.com/NousResearch/hermes-agent/issues/30565) | Discord tools hidden (env loading) | Tools/Discord | 4 comentários |
| [#36934](https://github.com/NousResearch/hermes-agent/issues/36934) | /steer false-positive injection | Agent | 3 comentários |
| [#37515](https://github.com/NousResearch/hermes-agent/issues/37515) | Desktop provider resolution fails post-OAuth | Desktop/Auth | 2 comentários, Closed |
| [#37662](https://github.com/NousResearch/hermes-agent/issues/37662) | httpx hangs on IPv6 | Gateway | 1 comentário |
| [#37399](https://github.com/NousResearch/hermes-agent/issues/37399) | WebSocket origin rejection on LAN/Tailscale | Desktop/Gateway | 1 comentário |
| [#37658](https://github.com/NousResearch/hermes-agent/issues/37658) | create_thread drops 'message' on forum channels | Discord Tools | 0 comentários |

**Análise P2:** Predominância de issues de **Desktop app** (OAuth, WebSocket, LAN binds) e **Discord integration** — indicando que o Desktop client é a superfície mais instável atualmente. A issue #37515 foi fechada, mas representa o padrão de "OAuth succeed → runtime fails" que requer atenção contínua.

### P3 — Médios

| Issue | Título | Área | Link |
|-------|--------|------|------|
| [#37549](https://github.com/NousResearch/hermes-agent/issues/37549) | Flickering chat transcripts | Desktop | 2 comentários |
| [#36970](https://github.com/NousResearch/hermes-agent/issues/36970) | Remote-client onboarding | Desktop | 2 comentários |
| [#36980](https://github.com/NousResearch/hermes-agent/issues/36980) | macOS installer fails (tsc @testing-library/dom) | Desktop/macOS | 1 comentário |
| [#37692](https://github.com/NousResearch/hermes-agent/issues/37692) | Nix build broken (stale npmDepsHash) | DevOps | 0 comentários |
| [#37689](https://github.com/NousResearch/hermes-agent/issues/37689) | Circuit-breaker blocks loop forever | Kanban | 0 comentários |
| [#37632](https://github.com/NousResearch/hermes-agent/issues/37632) | hermes -z SIGABRT on exit | CLI | 0 comentários |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Desktop-first

| Issue | Título | Relevância | Link |
|-------|--------|------------|------|
| [#36970](https://github.com/NousResearch/hermes-agent/issues/36970) | Remote-client onboarding para instâncias existentes | UX crítico — evitar dupla instalação | 2 comentários |
| [#37674](https://github.com/NousResearch/hermes-agent/issues/37674) | Desktop setup should adopt existing installs | Evitar sobrescrever instalações prévias | 0 comentários |
| [#37672](https://github.com/NousResearch/hermes-agent/issues/37672) | Show local model loading state before confirming switch | Feedback de loading state | 0 comentários |
| [#37663](https://github.com/NousResearch/hermes-agent/issues/37663) | Connect Desktop client to existing VPS instance | Usabilidade VPS | 0 comentários |

### Features de Agente e Tools

| Issue | Título | Escopo | Link |
|-------|--------|--------|------|
| [#37569](https://github.com/NousResearch/hermes-agent/issues/37569) | /council — multi-model deliberation planner | Agente | 1 comentário |
| [#36196](https://github.com/NousResearch/hermes-agent/issues/36196) | MiniMax M3 model support | Provider | 1 comentário, Closed |
| [#37661](https://github.com/NousResearch/hermes-agent/issues/37661) | mem0-temporal-hygiene plugin para Mem0 OSS | Plugins/Memory | 0 comentários |
| [#35437](https://github.com/NousResearch/hermes-agent/issues/35437) | delegate_task model/provider parameters | Tools/Delegate | 1 comentário |

### Sinais de roadmap

1. **Desktop como produto principal**: 4+ issues sobre onboarding, remote mode e setup adoption — indica que a experiência Desktop está sendo priorizada para uso mainstream.
2. **Multi-model orchestration**: `/council` (#37569) sugere interesse em meta-planejamento com múltiplos modelos — alinhado com tendências de agentic systems.
3. **Provider diversification**: Suporte a MiniMax M3 (#36196, fechado como done) demonstra adição ativa de provedores.

---

## 7. Resumo de Feedback dos Usuários

### Dores reais identificadas

| Dor | Evidência | Severidade percebida |
|-----|-----------|---------------------|
| **Desktop app instável** | #37515, #37399, #37549, #37609, #37675 | **Alta** — múltiplas issues sobre mesma superfície |
| **Discord integration quebrada** | #30565, #37658 | **Alta** — automações baseadas em Discord falham silenciosamente |
| **TUI regressões** | #37680 (shift+letter) | **Média** — input quebrado afeta daily use |
| **Gateway stability** | #37011, #37679 | **Crítica** — produção afetada após 12h |
| **IPv6 não funciona** | #37662 | **Média** — dependendo de rede do usuário |

### Cenários de uso evidenciados

- **Operadores com steering**: Usuários que dependem de `/steer` para controle de personalidade/agente estão sendo bloqueados por false-positives de injeção.
- **Usuários Desktop + VPS**: Há demanda clara para conectar客户端 Desktop a backends remotos (issues #36970, #37674, #37663) — fluxo não intuitivo atualmente.
- **Integrações Discord**: Community bots e admins usam Discord toolsets para automação server-side.

### Satisfação/Insatisfação

**Insatisfação concentrada em:** Desktop app (5+ issues), IPv6/networking, e UX de ferramentas restritas (toggle que retorna sucesso mas não persiste).

**Satisfação implícita:** Atividade comunitária alta (50 issues, 50 PRs em 24h) sugere base de usuários engajada e reportando ativamente. A feature #36196 (MiniMax M3) foi fechada rapidamente, indicando ciclo de feature accept rápido.

---

## 8. Backlog que Merece Atenção

### Issues sem resposta / antigos

| Issue | Idade | Título | Link |
|-------|-------|--------|------|
| [#13260](https://github.com/NousResearch/hermes-agent/issues/13260) | ~42 dias | Bug: HTTP 404 Code Assist Gemini | 4 comentários, sem resolution |
| [#30697](https://github.com/NousResearch/hermes-agent/pull/30697) | ~10 dias | fix(copilot): sanitize Gemini tool schemas | PR aberto, sem merge |
| [#30657](https://github.com/NousResearch/hermes-agent/pull/30702) | ~10 dias | feat(stt): remote audio URL transcription | PR aberto — feature request antiga |

### PRs estagnados com impacto

| PR | Idade | Título | Impacto se merged |
|----|-------|--------|-------------------|
| [#30697](https://github.com/NousResearch/hermes-agent/pull/30697) | ~10 dias | Gemini tool schema sanitization | Resolveria incompatibilidades de Copilot-hosted Gemini |
| [#30702](https://github.com/NousResearch/hermes-agent/pull/30702) | ~10 dias | Remote audio URL transcription | Feature request de transcrição via URL |

### Recom

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-06-03

---

## 1. Panorama do Dia

O projeto PicoClaw demonstra **atividade intensa** nas últimas 24h, com 14 PRs e 3 issues atualizadas. A equipe mantém um ritmo acelerado de correções e melhorias, evidenciando maturidade no processo de desenvolvimento. A release nightly **v0.2.9-nightly.20260602** foi publicada, indicando progresso contínuo em direção à versão 0.2.9. O volume de PRs abertos (9) sugere uma fila saudável de contributions aguardando review, enquanto as 5 PRs fechadas demonstram capacidade de merge eficiente.

---

## 2. Lançamentos

### Release Publicada

| Item | Detalhes |
|------|----------|
| **Versão** | `v0.2.9-nightly.20260602.426046fc` |
| **Tipo** | Nightly Build (automated) |
| **Changelog** | [Compare v0.2.9...main](https://github.com/sipeed/picoclaw/compare/v0.2.9...main) |

> ⚠️ **Aviso:** Esta é uma build automática potencialmente instável. Usuários em produção devem aguardar releases estáveis.

**Observação:** Não há release estável nova hoje. A última versão estável parece ser a `v0.2.8` (referenciada na issue #2943). A versão nightly implementa correções acumuladas das PRs fechadas hoje.

---

## 3. Progresso do Projeto

### PRs Fechadas/Merged Hoje

| PR | Título | Impacto |
|----|--------|---------|
| [#2989](https://github.com/sipeed/picoclaw/pull/2989) | fix(providers): add Zhipu API error code 1210 to format error patterns | **Crítico** — Corrige fallback mechanism para erros específicos do provedor Zhipu GLM-5 |
| [#2991](https://github.com/sipeed/picoclaw/pull/2991) | fix(agent): retry transient LLM HTTP errors using provider error classifier | **Melhoria de resiliência** — Unifica retry logic para erros transitórios de providers |
| [#2986](https://github.com/sipeed/picoclaw/pull/2986) | fix(tools): add Stop() to SessionManager to prevent goroutine leak | **Correção de memória** — Elimina goroutine leak em SessionManager |
| [#2993](https://github.com/sipeed/picoclaw/pull/2993) | docs(skill): self describing Picoclaw agent skill | **Documentação** — Adiciona SKILL.md para auto-descrição do agente |
| [#2239](https://github.com/sipeed/picoclaw/pull/2239) | modify docker compose with privileged | **Infraestrutura** — Atualiza configuração Docker para ambiente production |

### PRs Abertas com Alto Impacto

| PR | Título | Status | Impacto |
|----|--------|--------|---------|
| [#2951](https://github.com/sipeed/picoclaw/pull/2951) | fix: use function-type web_search for better API compatibility | stale | **Bug fix** — Corrige HTTP 400 em web search nativo |
| [#2948](https://github.com/sipeed/picoclaw/pull/2948) | fix: skip temperature parameter for claude-opus-4-7 models | stale | **Bug fix** — Compatibilidade com modelos Claude mais recentes |
| [#2945](https://github.com/sipeed/picoclaw/pull/2945) | feat: add debug trace viewer (picoclaw-tracer) | stale | **Feature** — Nova ferramenta de debug visual para traces LLM |

---

## 4. Temas Quentes da Comunidade

### Issue com Maior Engajamento

| Issue | Métricas | Tema |
|-------|----------|------|
| [#2404](https://github.com/sipeed/picoclaw/issues/2404) | 10 comentários, 1 👍 | **Streaming HTTP requests para backends LLM** |

**Análise:** O request de streaming (#2404) está em discussão desde Abril com 10 comentários, indicando forte demanda por suporte a streams. O autor busca paridade com o cliente OpenAI Python (`stream=True`), sugerindo que este é um caso de uso prioritário para integrações com provedores de API.

### Novas Features Discutidas

- **[#2984](https://github.com/sipeed/picoclaw/issues/2984)** — *Turn completion signal para WebSocket clients*: Novos protocolos necessitam de signals explícitos para indicar fim de processamento de mensagens.

---

## 5. Bugs e Estabilidade

### Bug Resolvido Hoje

| Issue | Severidade | Descrição | Resolução |
|-------|------------|-----------|-----------|
| [#2943](https://github.com/sipeed/picoclaw/issues/2943) | **Alta** | WeChat + Zhipu GLM-5-Turbo vision API error 1210 | PR [#2989](https://github.com/sipeed/picoclaw/pull/2989) adicionou reconhecimento do código 1210 no error classifier |

**Detalhes do Bug Original:**
- Canal: WeChat
- Modelo: GLM-5-Turbo (Zhipu)
- Erro: HTTP 1210 (parâmetro inválido)
- Impacto: Usuários não conseguiam enviar imagens via WeChat

### Bugs em Andamento

| Issue | Severidade | Descrição |
|-------|------------|-----------|
| [#2958](https://github.com/sipeed/picoclaw/pull/2987) | **Média** | `tool_calls` eram incorretamente filtrados durante streaming ativo |

### Correções de Estabilidade Publicadas

| PR | Correção |
|----|----------|
| [#2986](https://github.com/sipeed/picoclaw/pull/2986) | Goroutine leak em `SessionManager` — impacta long-running sessions |
| [#2991](https://github.com/sipeed/picoclaw/pull/2991) | Retry unificado para erros HTTP transitórios de LLM providers |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Requestadas

| Issue | Título | Sinais de Prioridade |
|-------|--------|----------------------|
| [#2404](https://github.com/sipeed/picoclaw/issues/2404) | Add in config to send streaming HTTP request | 10 comentários, 1 👍, em discussão há ~2 meses |
| [#2984](https://github.com/sipeed/picoclaw/issues/2984) | Add explicit turn completion signal for Pico WebSocket clients | Protocol extension, 1 👍 |

### Features em Desenvolvimento (PRs Abertas)

| PR | Feature | Evidência de Roadmap |
|----|---------|---------------------|
| [#2945](https://github.com/sipeed/picoclaw/pull/2945) | picoclaw-tracer — Debug trace viewer UI | Ferramenta de desenvolvimento indica foco em DX |
| [#2994](https://github.com/sipeed/picoclaw/pull/2994) | picoclaw-agent skill (self-describing) | Sistema de skills em expansão |
| [#2985](https://github.com/sipeed/picoclaw/pull/2985) | Mostrar thresholds de summarize e compress no `/context` | Melhora de UX para gerenciamento de contexto |

### Indicadores de Evolução de API

- **API Compatibility:** PRs [#2951](https://github.com/sipeed/picoclaw/pull/2951) e [#2948](https://github.com/sipeed/picoclaw/pull/2948) indicam adaptação contínua para novos modelos (Claude Opus 4.7)
- **Context Management:** Foco em controles granulares de compressão/summarização

---

## 7. Resumo de Feedback dos Usuários

### Padrões de Dores Identificados

| Área | Problema Reportado | Issue |
|------|-------------------|-------|
| **Integração WeChat** | Falha ao enviar imagens com Zhipu GLM-5 | [#2943](https://github.com/sipeed/picoclaw/issues/2943) |
| **Histórico de Sessão** | Web UI mostra apenas última mensagem | [#2796](https://github.com/sipeed/picoclaw/issues/2796) |
| **Compressão de Contexto** | `/context` não respeita configuração `summarize_token_percent` | [#2968](https://github.com/sipeed/picoclaw/issues/2968) |
| **Sessões Promovidas** | Novas sessões obtêm mensagens de sessão antiga | [#2972](https://github.com/sipeed/picoclaw/issues/2972) |

### Cenários de Uso Emergentes

1. **Multi-canal com Imagens:** Integração WeChat + modelos de visão indica adoção em mercados asiáticos
2. **WebSocket Clients:** Clientes externos usando Pico Protocol para integrações customizadas
3. **Debugging Avançado:** Demanda por ferramentas visuais (picoclaw-tracer) para troubleshooting de LLM calls

### Satisfação Observada

- Ritmo de resposta da equipe: Rápido (bugs resolvidos no mesmo dia)
- Community engagement: Issues com 10 comentários demonstram diálogo ativo
- Clear bug tracking: Labels como `type: enhancement`, `domain: config` facilitam triagem

---

## 8. Backlog que Merece Atenção

### Issues Abertas Sem Atividade Recente

| Issue | Idade | Título | Prioridade |
|-------|-------|--------|------------|
| [#2404](https://github.com/sipeed/picoclaw/issues/2404) | ~57 dias | Feature: streaming HTTP request config | **Alta** (10 comentários) |
| [#2945](https://github.com/sipeed/picoclaw/pull/2945) | ~8 dias | picoclaw-tracer debug tool | **Média** (stale) |
| [#2951](https://github.com/sipeed/picoclaw/pull/2951) | ~8 dias | web_search API compatibility fix | **Média** (stale) |
| [#2948](https://github.com/sipeed/picoclaw/pull/2948) | ~8 dias | claude-opus-4-7 temperature fix | **Média** (stale) |

### Recomendação de Triagem

As PRs com tag `stale` (8 dias sem atividade) devem ser priorizadas para review ou closure:

1. **[#2951](https://github.com/sipeed/picoclaw/pull/2951)** — web_search compatibility (bloqueia usuários de web search)
2. **[#2948](https://github.com/sipeed/picoclaw/pull/2948)** — Claude Opus 4.7 (bloqueia novo modelo)
3. **[#2945](https://github.com/sipeed/picoclaw/pull/2945)** — picoclaw-tracer (ferramenta de valor para comunidade)

---

## Métricas Consolidada do Dia

| Métrica | Valor |
|---------|-------|
| Issues abertas/ativas | 2 |
| Issues fechadas | 1 |
| PRs abertas | 9 |
| PRs fechadas/merged | 5 |
| Releases | 1 (nightly) |
| Bugs críticos resolvidos | 1 (Zhipu API error 1210) |
| Goroutine leaks corrigidos | 1 |
| Features abertas aguardando | 2+ |

---

*Relatório gerado em 2026-06-03. Dados不含 histórico anterior.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>


# Relatório do Projeto IronClaw — 2026-06-03

---

## 1. Panorama do Dia

O projeto IronClaw demonstra **atividade intensa** em 03 de junho de 2026, com 34 issues e 48 PRs atualizados nas últimas 24 horas. A equipe está profundamente engajada em uma **revisão sistemática do sistema "Reborn"**, evidenciada por uma cadeia de 11 issues de auditoria (L1-L11) e 6 issues de correção de subagentes (C1-C6) abertos no mesmo dia pelo colaborador `henrypark133`. Parallelamente, há uma frente significativa de **correções de bugs e estabilidade** centrada no modelo Qwen3.6-35B e em integrações OAuth/WebUI v2. O alto volume de PRs fechados (29) sugere ciclo de desenvolvimento acelerado, embora **nenhuma release tenha sido publicada** no período.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24 horas.**

O projeto não registrou novos Versioned Releases neste período. O último release estável permanece como referência, e a atividade sugere que as mudanças estão em fase de integração para uma futura release.

---

## 3. Progresso do Projeto

### PRs Importantes Merged/Fechados (03/06/2026)

| PR | Título | Escopo | Impacto |
|----|--------|--------|---------|
| [#4318](https://github.com/nearai/ironclaw/pull/4318) | PR17: Add trigger first-party capabilities | capabilities | Adiciona `builtin.trigger_create`, `trigger_list` e `trigger_remove` para triggers agendados |
| [#4347](https://github.com/nearai/ironclaw/pull/4347) | Fix Reborn Gmail OAuth auth gate scopes | OAuth, auth | Corrige escopos OAuth do Google para Gmail e Calendar no Reborn |
| [#4345](https://github.com/nearai/ironclaw/pull/4345) | Wire Notion DCR OAuth for Reborn WebUI | OAuth, WebUI | Integra OAuth do Notion via DCR no WebChat v2 |
| [#4346](https://github.com/nearai/ironclaw/pull/4346) | Fix Gmail OAuth auth gate requirements | OAuth | Preserva requirements de credenciais após falhas de auth |
| [#4337](https://github.com/nearai/ironclaw/pull/4337) | Fix Google OAuth prompts for runtime auth gates | OAuth | Adiciona provider OAuth estático para gates de auth em runtime |
| [#4332](https://github.com/nearai/ironclaw/pull/4332) | Enable WebUI v2 DCR extension setup | extensions, WebUI | Habilita fluxo OAuth para extensões MCP no WebUI v2 |
| [#4335](https://github.com/nearai/ironclaw/pull/4335) | Keep auth gate visible during projection text updates | WebUI | Mantém gates de auth visíveis durante updates de projeção |
| [#4333](https://github.com/nearai/ironclaw/pull/4333) | Allow cancelling parked auth without flow record | auth | Permite cancelar auth gate sem registro de flow existente |

**Destaque:** A frente OAuth/WebUI v2 é a mais ativa em termos de merges, indicando maturidade em direção a uma experiência de usuário mais completa.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Atividade

| Issue | Título | Comentários | Autor | Tendência |
|-------|--------|-------------|-------|-----------|
| [#4355](https://github.com/nearai/ironclaw/issues/4355) | engine v2: newtype client_thread_id / client_response_id | 1 | zetyquickly | 🔄 CLOSED |
| [#3806](https://github.com/nearai/ironclaw/issues/3806) | [reborn] Lane 6: implement GitHub WASM capability | 1 | serrrfirat | 🔄 CLOSED |

### Análise dos Temas

**1. Sistema Reborn — Auditoria Sistemática (Issues L1-L11 e C1-C6)**

A equipe conduz uma **revisão abrangente de correção de bugs e hardening** do loop Reborn, organizada em dois clusters:

- **Loop Architecture & Correctness (L1-L11):** Abrange validação de capabilities, segurança de prompts, estratégias de recovery, persistência, orçamentos, cancellation, checkpointing e arquitetura de dependências. Cada issue representa um finding isolado identificado em auditoria interna.

- **Subagent Correctness (C1-C6):** Foca em durabilidade de completion, propagação de cancellation, hygiene operacional e gating de segurança.

**2. Capacidade WASM para GitHub**

A issue [#3806](https://github.com/nearai/ironclaw/issues/3806) (Lane 6 do Reborn) propõe implementar GitHub como primeiro pacote WASM concreto discoverível no capability catalog, após o baseline de runtime e composição de secrets/egress.

**3. Engine v2 e Identificadores de Correlação**

O PR [#3669](https://github.com/nearai/ironclaw/pull/3669) restaura o contrato de que toda tool call recebe `notify_thread_id` e `notify_response_id` em `JobContext.metadata`, permitindo correlação de side-effects externos.

---

## 5. Bugs e Estabilidade

### Bugs Reportados (Severidade P2 — bug_bash_P2)

| Issue | Bug | Modelo Afetado | Feature Area |
|-------|-----|----------------|--------------|
| [#4341](https://github.com/nearai/ironclaw/issues/4341) | THINKING chain-of-thought exposto ao usuário; agent preso em thinking state | Qwen3.6-35B | Agent Runtime / UI Chat |
| [#4344](https://github.com/nearai/ironclaw/issues/4344) | Agent espelha mensagem do usuário como resposta própria durante loading | Qwen3.6-35B | UI Chat / Message Rendering |
| [#4343](https://github.com/nearai/ironclaw/issues/4343) | Integração MCP reconhecida mas inutilizável (driver failure) | Qwen3.6-35B | MCP Integrations (Notion/GitHub) |
| [#4342](https://github.com/nearai/ironclaw/issues/4342) | Modal de autenticação persiste após refresh e bloqueia chat | Qwen3.6-35B | UI Chat / Auth Flow |
| [#4340](https://github.com/nearai/ironclaw/issues/4340) | Erro de validação "content field blank" bloqueia submissão | Qwen3.6-35B | Chat / Message Submission |
| [#4339](https://github.com/nearai/ironclaw/issues/4339) | Tool calls rejeitadas como InvalidInvocation mesmo com schema válido | MiniMax-M2.7 | Agent Runtime / Tool Validator |
| [#4338](https://github.com/nearai/ironclaw/issues/4338) | Estado "disconnected" mostra erro misleading de execution driver | MiniMax-M2.7 | UI / Error Handling |

### Bug Crítico (Breaking)

| Issue | Bug | Impacto |
|-------|-----|---------|
| [#4334](https://github.com/nearai/ironclaw/issues/4334) | **Claude Opus 4.7/4.8 unusable**: IronClaw sempre envia `temperature`, mas modelos Opus 4.7/4.8 rejeitam com `400 "temperature is deprecated"` | Bloqueio total de uso de Claude Opus 4.7/4.8 |

### Instabilidade de CI/CD

| Issue | Status |
|-------|--------|
| [#4108](https://github.com/nearai/ironclaw/issues/4108) | Nightly E2E falhou — job E2E (v2-engine) com failure |

**Análise:** Há uma concentração de bugs relacionados ao modelo **Qwen3.6-35B**, sugerindo necessidade de investigação se os problemas são específicos do modelo ou revelam gaps genéricos no parsing/rendering. O bug de `temperature` com Claude Opus 4.7/4.8 é **breaking** e requer urgência.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em Desenvolvimento Ativo

| PR | Feature | Escopo | Status |
|----|---------|--------|--------|
| [#4178](https://github.com/nearai/ironclaw/pull/4178) | Feishu/Lark websocket event intake | channel | OPEN (XL) |
| [#4294](https://github.com/nearai/ironclaw/pull/4294) | OAuth (Google/GitHub) integration on WebUI v2 | auth, WebUI | OPEN (XL) |
| [#3548](https://github.com/nearai/ironclaw/pull/3548) | Add DISABLE_TOOLS_LIST flag + security regression test | security, config | OPEN (XL) |

### Sinais de Roadmap Imanent

1. **WASM Capability Catalog:** A issue [#3806](https://github.com/nearai/ironclaw/issues/3806) indica que **GitHub será a primeira capability WASM concreta** no catalog, após o baseline de extension-v2.

2. **Gatilhos Agendados (Triggers):** PR [#4318](https://github.com/nearai/ironclaw/pull/4318) adiciona primeira-party trigger capabilities, sugerindo suporte a automações temporais.

3. **Slack Reborn Integration:** PR [#4321](https://github.com/nearai/ironclaw/pull/4321) desenvolve delivery de final-reply para Slack via ProductAdapter path.

4. **Feishu/Lark Channel:** PR [#4178](https://github.com/nearai/ironclaw/pull/4178) adiciona websocket intake para Feishu, expandindo cobertura de canais.

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas via Bugs Reportados

| Categoria | Problema | Severidade |
|-----------|----------|------------|
| **UI/UX Qwen** | chain-of-thought exposto, espelhamento de mensagens, auth modal persistente | Alta — impacta experiência básica |
| **Integrações MCP** | extensões Notion/GitHub reconhecidas mas non-funcionais | Alta — feature advertised mas broken |
| **Model Compatibility** | Claude Opus 4.7/4.8 completamente bloqueado | Crítica — modelo premium inutilizado |
| **Validation UX** | Erro de validação confuso bloqueia submissão sem contexto | Média — friction de entrada |
| **Error Messages** | Estado disconnected mostra erro misleading | Média — confiança do usuário |

### Cenários de Uso Sugeridos pelos Bugs

- **Assistente de pesquisa:** Usuários tentam usar NEAR AI search → autenticação falha e persiste.
- **Automação com Notion/GitHub:** Usuários configuram MCP → driver falha silenciosamente.
- **Análise de X/Twitter:** Usuários tentam resumir posts → execução cai em estado disconnected com erro engañoso.

---

## 8. Backlog que Merece Atenção

### Issues sem Resposta ou Progresso

| Issue | Título | Idade | Prioridade | Observação |
|-------|--------|-------|------------|------------|
| [#4108](https://github.com/nearai/ironclaw/issues/4108) | Nightly E2E failed | ~7 dias | 🔴 Alta | Falha recorrente de CI — sem resolution aparente |
| [#4334](https://github.com/nearai/ironclaw/issues/4334) | Claude Opus 4.7/4.8 temperature deprecated | <1 dia | 🔴 Crítica | Breaking — requer hotfix |
| [#4314](https://github.com/nearai/ironclaw/issues/4314) | CompactionLeakDetected milestone inconsistência | ~2 dias | 🟡 Média | Technical debt em milestone tracking |
| [#4313](https://github.com/nearai/ironclaw/issues/4313) | Schema mismatch compaction milestone | ~2 dias | 🟡 Média | Doc/live enum misalignment |

### Issues Arquiteturais Pendentes (Reborn Audit)

As 17 issues de auditoria do Reborn (L1-L11 + C1-C6, [#4348](https://github.com/nearai/ironclaw/issues/4348)–[#4368](https://github.com/nearai/ironclaw/issues/4368)) representam **dívida técnica identificada** que precisa ser priorizada para produção. Cada issue aborda um finding específico de segurança, correctness ou observabilidade.

---

## Indicadores de Saúde do Projeto

| Indicador | Status | Tendência |
|-----------|--------|-----------|
| Volume de issues (34/24h) | ██████████ Muito alto | ➡️ Estável |
| Volume de PRs (48/24h) | ██████████ Muito alto | ➡️ Estável |
| PRs fechados (29/48) | 60% close rate | ✅ Positivo |
| Bugs P2 reportados | 7 novos em 24h | ⚠️ Atenção |
| Releases (0/24h) | ░ Nenhuma | ➡️ Sem informação |
| CI/CD | E2E nightly falhando | ⚠️ Revisar |

---

**Relatório gerado em:** 2026-06-03  
**Fontes:** GitHub nearai/ironclaw — issues e PRs atualizados em 03/06/2026

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório de Projeto — CoPaw (QwenPaw)

**Data do relatório:** 2026-06-03
**Período analisado:** Últimas 24 horas

---

## 1. Panorama do dia

O projeto CoPaw apresenta altíssima atividade neste período, com **47 issues e 32 PRs atualizados**. Não houve releases formais, mas um bump de versão para `v1.1.11b1` foi preparado, sinalizando uma release Candidates iminente. O destaque negativo é a **quantidade anormalmente alta de issues de segurança** — 7 vulnerabilidades reportadas em um único dia pelo mesmo autor (YLChen-007), indicando um esforço coordenado de auditoria. A comunidade está extremamente ativa em features para Windows e browser automation. O volume de issues fechadas (22) supera as abertas/ativas (25), sugerindo ciclo de revisão acelerado.

---

## 2. Lançamentos

**Nenhuma release formal została publicada neste período.**

Foi preparado bump de versão para `v1.1.11b1` ([PR #4907](https://github.com/agentscope-ai/QwenPaw/pull/4907)) pela equipe core. A ausência de release formal pode indicar que changes ainda estão em validação, dado o volume alto de hotfixes pendentes (especialmente as vulnerabilidades de segurança críticas).

**Nota de expectativa:** Dado que 7 CVEs foram reportados simultaneamente, é provável que a `v1.1.11` inclua patches de segurança como release priority.

---

## 3. Progresso do Projeto

### PRs merged/fechadas mais impactantes (período)

| PR | Autor | Mudança | Impacto |
|---|---|---|---|
| [#4899](https://github.com/agentscope-ai/QwenPaw/pull/4899) | hongxicheng | Corrige arquivos proto faltando no pacote Yuanbao | **Crítico** — autenticação do canal WeChat/Yuanbao estava quebrada |
| [#4883](https://github.com/agentscope-ai/QwenPaw/pull/4883) | jc200808 | Corrige entrega de mensagens cron para WeChat/WeCom | Corrige regressão em notification push |
| [#4689](https://github.com/agentscope-ai/QwenPaw/pull/4689) | leoleils | Encaminha `generate_kwargs` não-padrão para `extra_body` | Suporte a provedores com parâmetros proprietários |
| [#4853](https://github.com/agentscope-ai/QwenPaw/pull/4853) | wangfei010313 | Mata árvore de processos e limpa lock files no Windows | Corrige leak de processos browser no Windows |
| [#1317](https://github.com/agentscope-ai/QwenPaw/pull/1317) | listenMyheart | Adiciona notificações de progresso para download do cloudflared | UX improvement — elimina confusão durante instalação |

### PRs em revisão de destaque

| PR | Autor | Scope | Status |
|---|---|---|---|
| [#4846](https://github.com/agentscope-ai/QwenPaw/pull/4846) | qbc2016 | Migration do backend para AgentScope 2.0 | **Breaking change massivo** — em revisão |
| [#4906](https://github.com/agentscope-ai/QwenPaw/pull/4906) | rayrayraykk | File browser com suporte a múltiplos drives no Windows | Corrige limitação crítica no Windows |
| [#4900](https://github.com/agentscope-ai/QwenPaw/pull/4900) | wangfei010313 | Decouple plugin loader initialization | Corrige bug persistente no Tauri Desktop |
| [#4693](https://github.com/agentscope-ai/QwenPaw/pull/4693) | hongxicheng | Plugin-based custom channels com schema-driven UI | Refatoração arquitetural de canais |

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento

**🔴 #4666 — Configuração de Models perdida ao criar nova sessão** (6 comentários)
- Autor: wly1996 | Status: **OPEN**
- Severidade: Alta — afeta experiência básica do usuário
- Link: [Issue #4666](https://github.com/agentscope-ai/QwenPaw/issues/4666)

> "Após criar nova sessão, toda a configuração de modelos se perde, a página de Models exibe erro 'Load failed'"

**🟡 #4878 — Cron job WeChat delivery falhando** (5 comentários)
- Autor: yuixzero | Status: CLOSED
- Root cause identificado: bug no `channel.py` no parâmetro `share_session=false`
- Link: [Issue #4878](https://github.com/agentscope-ai/QwenPaw/issues/4878)

**🔵 #4727 — Migrate para AgentScope 2.0** (5 comentários, 2 👍)
- Autor: rayrayraykk | Status: **OPEN**
- Breaking change label — impacto em toda a base de usuários
- Link: [Issue #4727](https://github.com/agentscope-ai/QwenPaw/issues/4727)

**🔴 #4908 — Unauthenticated PUT /api/settings/language** (4 comentários)
- Autor: YLChen-007 | Status: CLOSED
- Vulnerabilidade de segurança — permite modificação persistente de configurações globais
- Link: [Issue #4908](https://github.com/agentscope-ai/QwenPaw/issues/4908)

**🟡 #3985 — DeepSeek reasoning_content não retornado em multi-turn** (4 comentários)
- Autor: baofuen | Status: CLOSED
- HTTP 500 em modelos de reasoning multi-turn após ~5 rodadas
- Link: [Issue #3985](https://github.com/agentscope-ai/QwenPaw/issues/3985)

### Análise de demandas por categoria

| Categoria | Volume Issues | Tendência |
|---|---|---|
| **Segurança (CVEs)** | 7 | 🔺 Altíssima — auditoria coordenada |
| **Features Windows** | 3 | 🔺 Demanda reprimida sendo atendida |
| **Plugin System** | 4 | 🔺 Forte investimento em extensibilidade |
| **Bug Reports** | 5+ | ▬ Normal — regressões pontuais |
| **Feature Requests** | 6+ | ▬ Diversificado — sem tema dominante |

---

## 5. Bugs e Estabilidade

### Bugs críticos (afetam produção)

| # | Bug | Severidade | Status | Link |
|---|---|---|---|---|
| 4666 | Config Models perdida ao criar sessão | **Alta** | OPEN | [#4666](https://github.com/agentscope-ai/QwenPaw/issues/4666) |
| 4903 | Loading inesperado ao trocar chats | **Alta** | OPEN | [#4903](https://github.com/agentscope-ai/QwenPaw/issues/4903) |
| 4898 | Yuanbao auth fail — proto files ausentes | **Alta** | CLOSED (fix merged) | [#4898](https://github.com/agentscope-ai/QwenPaw/issues/4898) |
| 4890 | Yuanbao — missing proto files no package | **Alta** | CLOSED (fix merged) | [#4890](https://github.com/agentscope-ai/QwenPaw/issues/4890) |
| 4919 | browser_use — CDP timeout + Chrome/Edge crash | **Alta** | OPEN | [#4919](https://github.com/agentscope-ai/QwenPaw/issues/4919) |
| 4837 | Fallback reply "无法处理您的问题" após v1.1.9 | **Alta** | OPEN | [#4837](https://github.com/agentscope-ai/QwenPaw/issues/4837) |
| 4895 | Infinite image compression loop causing hallucination | **Alta** | OPEN | [#4895](https://github.com/agentscope-ai/QwenPaw/issues/4895) |
| 4877 | Custom channel para de ouvir após salvar config | **Média** | OPEN | [#4877](https://github.com/agentscope-ai/QwenPaw/issues/4877) |

### Vulnerabilidades de Segurança (7 CVEs no dia)

| # | Vulnerability | CVSS Estimado | Status | Link |
|---|---|---|---|---|
| 4908 | Unauthenticated PUT /api/settings/language | Alto | CLOSED | [#4908](https://github.com/agentscope-ai/QwenPaw/issues/4908) |
| 4909 | ToolGuard bypass — disable dangerous command approval | **Crítico** | CLOSED | [#4909](https://github.com/agentscope-ai/QwenPaw/issues/4909) |
| 4910 | Malformed surrogate session_id — persistent failure | Médio | CLOSED | [#4910](https://github.com/agentscope-ai/QwenPaw/issues/4910) |
| 4911 | MCP API returns 500 instead of 422 for invalid transport | Médio | CLOSED | [#4911](https://github.com/agentscope-ai/QwenPaw/issues/4911) |
| 4912 | Cron API accepts non-canonical timezone aliases | Médio | CLOSED | [#4912](https://github.com/agentscope-ai/QwenPaw/issues/4912) |
| 4913 | Path Traversal em system_prompt_files | **Alto** | CLOSED | [#4913](https://github.com/agentscope-ai/QwenPaw/issues/4913) |
| 4914 | Workspace export leaks channel secrets | **Alto** | CLOSED | [#4914](https://github.com/agentscope-ai/QwenPaw/issues/4914) |

**Análise:** Todas as 7 vulnerabilidades foram fechadas rapidamente, indicando resposta de segurança coordenada. O volume de CVEs em um único dia é atípico — provavelmente resultado de uma auditoria de segurança profissional ou bug bounty.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features de alta demanda

**#4836 — On-demand tool loading: reduzir 55-65% do token overhead inicial** (2 comentários)
- Autor: feng183043996 | Prioridade: Alta
- Context: ferramenta definitions ocupam 55-65% do contexto inicial (~20-25K tokens) com 45+ tools
- Link: [Issue #4836](https://github.com/agentscope-ai/QwenPaw/issues/4836)

**#4551 — Lossless Context Compression (DAG-based)** (3 comentários)
- Autor: lioude | Prioridade: Alta
- Cenário: tasks de longa duração perdem contexto original após compressão
- Link: [Issue #4551](https://github.com/agentscope-ai/QwenPaw/issues/4551)

**#4901 — spawn_subagent: per-task model selection (multi-model)** (2 comentários)
- Autor: DICKQI | Prioridade: Média
- Inspiração: Claude Code's Haiku/Opus task dispatch pattern
- Link: [Issue #4901](https://github.com/agentscope-ai/QwenPaw/issues/4901)

**#4893/#4894 — Windows: remover limite de upload + multi-file drag-drop** (4+3 comentários)
- Autores: rescodexx | Prioridade: Alta
- Link: [#4893](https://github.com/agentscope-ai/QwenPaw/issues/4893) | [#4894](https://github.com/agentscope-ai/QwenPaw/issues/4894)

**#4904 — Simplificar sidebar menu** (2 comentários)
- Autor: duwey | Prioridade: Média
- Link: [Issue #4904](https://github.com/agentscope-ai/QwenPaw/issues/4904)

### Sinais de Roadmap implícitos

1. **AgentScope 2.0 migration** (#4727, #4846, #4885) — roadmap confirmado, transição em andamento
2. **Windows-first improvements** — foco claro em parity com Linux/macOS
3. **Plugin system maturity** — 4 PRs relacionados a plugins (4794, 4804, 4693, 4900)
4. **Browser automation** — 3 PRs de browser (4905, 4853, 4919)

---

## 7. Resumo de Feedback dos Usuários

### Dores críticas identificadas

| Dor | Frequência | Severidade | Link |
|---|---|---|---|
| Quebra de funcionalidade básica após atualização (v1.1.9→v1.1.10) | **Alta** | 🔴 | [#4837](https://github.com/agentscope-ai/QwenPaw/issues/4837), [#4878](https://github.com/agentscope-ai/QwenPaw/issues/4878) |
| Problemas com Yuanbao/WeChat channels | **Alta** | 🔴 | [#4890](https://github.com/agentscope-ai/QwenPaw/issues/4890), [#4898](https://github.com/agentscope-ai/QwenPaw/issues/4898) |
| Limitações no Windows (file browser, uploads, browser automation) | **Alta** | 🟠 | [#4836](https://github.com/agentscope-ai/QwenPaw/issues/4836), [#4893](https://github.com/agentscope-ai/QwenPaw/issues/4893), [#4919](https://github.com/agentscope-ai/QwenPaw/issues/4919) |
| Context loss em longas sessões | **Média** | 🟠 | [#4551](https://github.com/agentscope-ai/QwenPaw/issues/4551) |
| UX do sidebar complexo demais | **Média** | 🟡 | [#4904](https://github.com/agentscope-ai/QwenPaw/issues/4904) |

### Feedback positivo

- O sistema de plugins está amadurecendo (4 PRs contributions)
- Community está ativa em contributions (first-time-contributors aparecendo)
- Suporte a novos provedores (Xiaomi MiMo em PR #4722)
- DataPaw plugin (#4622) demonstra ecosystem growth

### Satisfação geral: ▬ **Neutro com тенденція positiva**
O volume de security fixes e regressões corrigidas rapidamente indica equipe responsiva. No entanto, o padrão de regressões a cada release (v1.1.9 quebrou, v1.1.10 quebrou WeChat) sugere necessidade de melhor QA/testing antes de releases.

---

## 8. Backlog que Merece Atenção

### Issues sem resposta há >5 dias

| # | Título | Criado | Atualizado | Link |
|---|---|---|---|---|
| 4551 | Lossless Context Compression | 2026-05-20 | 2026-06-02 | [#4551](https://github.com/agentscope-ai/QwenPaw/issues/4551) |
| 4154 | Font size adjustment + clickable file paths | 2026-05-09 | 2026-06-02 | [#4154](https://github.com/agentscope-ai/QwenPaw/issues/4154) |
| 4666 | Config Models lost on new session | 2026-05-25 | 2026-06-02 | [#4666](https://github.com/agentscope-ai/QwenPaw/issues/4666) |
| 4836 | On-demand tool loading | 2026-05-31 | 2026-06-02 | [#4836](https://github.com/agentscope-ai/QwenPaw/issues/4836) |
| 4837 | Fallback reply

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-06-03

---

## 1. Panorama do dia

O projeto ZeroClaw mantém um nível de atividade intenso e saudável. Nas últimas 24 horas, 50 issues e 50 PRs foram atualizados, com 17 fechamentos/merges em cada categoria — indicando um ciclo de desenvolvimento acelerado. A release **v0.8.0-beta-2** acabou de ser publicada como a maior release desde v0.7.5, trazendo o novo **zerocode** (TUI terminal). O estado geral reflete uma codebase em forte movimento, com múltiplas trilhas paralelas (channels, providers, runtime, security) convergindo para a estabilização da v0.8.0. Três P1s de security/bugs foram fechados hoje, demonstrando atenção prioritária à estabilidade.

---

## 2. Lançamentos

### 🟢 v0.8.0-beta-2 — 2026-06-02

**Headline:** Zerocode — Terminal UI completo para agentes

Esta é a segunda beta da linha v0.8.0 e a **maior release desde v0.7.5**. O destaque é o **zerocode**, uma nova interface de usuário terminal completa para operar agentes sem sair do terminal. A release também traz o runtime multi-agente como feature central.

**Mudanças destacadas:**
- Novo TUI zerocode (conversational chat com streaming, tool calls, approval prompts via Ratatui)
- ACP protocol extensions para diff/file-proposal message types
- Refatoração de crates/zeroclaw-tui para apps/zerocode
- Correções de security críticas em channels

**Observações:**
- Esta é uma release beta; breaking changes são esperadas até a estável.
- Issues Tracker para blockers: [zeroclaw-labs/zeroclaw#7112](https://github.com/zeroclaw-labs/zeroclaw/issues/7112)

---

## 3. Progresso do Projeto

### PRs fechadas/mergeadas hoje (mais impactantes)

| PR | Descrição | Impacto |
|----|-----------|---------|
| [#7064](https://github.com/zeroclaw-labs/zeroclaw/pull/7064) | `fix(channels): enforce per-agent tool allowlist in start_channels` | **P1 Security** — Corrigiu bypass de allowlist ferramentas em agentes via channel |
| [#7070](https://github.com/zeroclaw-labs/zeroclaw/pull/7070) | `fix(channels): include Twitter/X channel in default features` | Resolveu issue de feature faltando no binário pré-built |
| [#7050](https://github.com/zeroclaw-labs/zeroclaw/pull/7050) | `feat(tts): transcode to OGG/Opus for voice notes (Telegram + WhatsApp)` | Melhoria de compatibilidade de voz em dois canais |
| [#7002](https://github.com/zeroclaw-labs/zeroclaw/pull/7002) | `fix(channels/tts): bind TTS manager to the channel-owning agent` | Corrigiu resolução errada do provider TTS em multi-agente |
| [#6961](https://github.com/zeroclaw-labs/zeroclaw/pull/6961) | `feat(self-test): flag web_dist_dir paths using tilde or $VAR` | Diagnosticador de config paths problemáticos |
| [#7045](https://github.com/zeroclaw-labs/zeroclaw/pull/7045) | `feat(hardware): add smartroom named-device tools` | Expansão de ferramentas de hardware/periféricos |
| [#7046](https://github.com/zeroclaw-labs/zeroclaw/pull/7046) | `feat(hardware): add dev-sim feature` | Feature de simulação para desenvolvimento ESP32 |

**Resumo:** Foco forte em security (allowlist bypass), canais (Twitter, Telegram, WhatsApp) e ferramentas. 8 PRs fechadas hoje.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento

| Issue | Título | Comentários | 👍 | Status | Análise |
|-------|--------|-------------|-----|--------|---------|
| [#6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059) | Bug: Incompatible with DeepSeek-V4 API format | 15 | 4 | ✅ CLOSED | Problema de compatibilidade com thinking mode do DeepSeek-V4; fechou hoje após 40 dias |
| [#5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600) | Bug: Use kimi-code provider streaming chat call tools | 9 | 1 | 🟡 OPEN | Similar ao DeepSeek: reasoning_content missing em streaming; prioridade P1 |
| [#6391](https://github.com/zeroclaw-labs/zeroclaw/issues/6391) | Feature: Real heartbeat tracking for daemon nodes | 4 | 0 | 🟡 OPEN | Demanda de liveness signal real para nós daemon; blocked |
| [#5604](https://github.com/zeroclaw-labs/zeroclaw/issues/5604) | Feature: Mattermost private messages | 3 | 1 | 🟡 OPEN | Expansão de funcionalidadeno Mattermost |
| [#6390](https://github.com/zeroclaw-labs/zeroclaw/issues/6390) | Feature: zeroclaw node add CLI | 2 | 0 | 🟡 OPEN | CLI para registrar daemons remotos; ecossistema multi-machine |

**Análise:** A comunidade está focada em **compatibilidade de providers com reasoning models** (DeepSeek, Kimi). Há demanda clara por arquitetura multi-daemon e heartbeat real. Mattermost private messaging é pedido há >50 dias.

### PRs abertos com atenção

| PR | Título | Tamanho | Risk | Detalhe |
|----|--------|---------|------|---------|
| [#7023](https://github.com/zeroclaw-labs/zeroclaw/pull/7023) | feat(docs): versioned documentation deployment | M | HIGH | Version selector para docs — utilidade alta |
| [#7021](https://github.com/zeroclaw-labs/zeroclaw/pull/7021) | feat(channels/email): XOAUTH2, observer mode, IMAP tools | L | HIGH | Email completo com OAuth2 e IMAP read-only |
| [#7053](https://github.com/zeroclaw-labs/zeroclaw/pull/7053) | feat(memory): migrate Agent::turn load_context to MemoryStrategy | S | MED | Decoupling de memória — arquitetura importante |
| [#7041](https://github.com/zeroclaw-labs/zeroclaw/pull/7041) | feat(gateway): multi-tenant Linq channel | M | HIGH | Multi-tenant routing para Linq |
| [#5987](https://github.com/zeroclaw-labs/zeroclaw/pull/5987) | feat(nix): add flake.nix | S | HIGH | Suporte Nix/NixOS — comunidade request antigo |

---

## 5. Bugs e Estabilidade

### 🔴 P1 — Críticos (trabalho bloqueado)

| Issue | Severidade | Título | Status |
|-------|-----------|--------|--------|
| [#7068](https://github.com/zeroclaw-labs/zeroclaw/issues/7068) | S1 - workflow blocked | Telegram channel can receive Codex scratchpad/tool transcript as final response | OPEN |
| [#6600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600) | S1 - workflow blocked | Use kimi-code provider in streaming chat call tools (400 Bad Request) | OPEN |
| [#6613](https://github.com/zeroclaw-labs/zeroclaw/issues/6613) | Security P1 | Pairing code default too weak (6 numeric digits) | OPEN |
| [#6977](https://github.com/zeroclaw-labs/zeroclaw/issues/6977) | Security P1 | Align http_request private-host allowlist with web_fetch | OPEN |

### 🟡 P2 — Degraded behavior (funcionamento degradado)

| Issue | Severidade | Título | Status |
|-------|-----------|--------|--------|
| [#5795](https://github.com/zeroclaw-labs/zeroclaw/issues/5795) | S2 - degraded | XML tool_result tags leak into channel responses | OPEN |
| [#7005](https://github.com/zeroclaw-labs/zeroclaw/issues/7005) | S3 - minor | Quickstart CLI/runtime still has bare user-facing strings | OPEN |
| [#7038](https://github.com/zeroclaw-labs/zeroclaw/issues/7038) | S2 - degraded | zeroclaw check 11/11 websocket 401 despite valid auth profile | OPEN |

### ✅ Resolvidos hoje

- [#6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059) — DeepSeek-V4 API incompatibility ✅
- [#7063](https://github.com/zeroclaw-labs/zeroclaw/issues/7063) — Channel-served agents bypass tool allowlist ✅
- [#6975](https://github.com/zeroclaw-labs/zeroclaw/issues/6975) — `zeroclaw onboard` not writing config ✅
- [#7069](https://github.com/zeroclaw-labs/zeroclaw/issues/7069) — Twitter/X not in pre-built binary ✅

**Estabilidade geral:** 4 bugs P1/P2 resolvidos hoje. 4 P1s ainda abertos — 2 de security, 2 de compatibilidade de provider. Atenção necessária em DeepSeek/Kimi.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em progresso para v0.8.0 ( blockers )

| Issue | Feature | Prioridade | Status |
|-------|---------|-----------|--------|
| [#6293](https://github.com/zeroclaw-labs/zeroclaw/issues/6293) | Air-gapped execution mode with companion daemon over unix socket | P2 | RFC, needs-maintainer-review |
| [#6390](https://github.com/zeroclaw-labs/zeroclaw/issues/6390) | `zeroclaw node add <url>` CLI for remote daemon registration | P2 | Blocked |
| [#6391](https://github.com/zeroclaw-labs/zeroclaw/issues/6391) | Real heartbeat tracking for daemon nodes | P2 | Blocked |
| [#6253](https://github.com/zeroclaw-labs/zeroclaw/issues/6253) | Track: zeroclaw skills support and UX (v0.7.6) | P1 | Accepted |

### Features para v0.8.1

| Issue | Feature | Status |
|-------|---------|--------|
| [#6970](https://github.com/zeroclaw-labs/zeroclaw/issues/6970) | v0.8.1 integration/channel/provider/tool PR queue | IN PROGRESS |

### Novos requests (criados hoje)

| Issue | Feature | Signal |
|-------|---------|--------|
| [#7089](https://github.com/zeroclaw-labs/zeroclaw/issues/7089) | Evaluate PowerShell/Git Bash vs cmd.exe on Windows (make configurable) | Windows compatibility |
| [#7113](https://github.com/zeroclaw-labs/zeroclaw/issues/7113) | Slack: show visible lifecycle progress while agent is working | UX improvement |
| [#7108](https://github.com/zeroclaw-labs/zeroclaw/issues/7108) | Improve cached Rust builds and CI critical path | DevEx/CI |
| [#7110](https://github.com/zeroclaw-labs/zeroclaw/issues/7110) | docs PO catalogs contain generated assistant-response translations | Docs quality |

**Sinais de roadmap:**
1. **Multi-daemon/multi-machine** — Cluster management sendo construído
2. **Air-gapped mode** — Enclave support para segurança tinggi
3. **Skills system** — Tematização para v0.7.6
4. **Provider expansion** — NEAR AI Cloud adicionado em [#6842](https://github.com/zeroclaw-labs/zeroclaw/pull/6842)

---

## 7. Resumo de Feedback dos Usuários

### Dores relatadas

**🔴 Compatibilidade de Providers:**
- DeepSeek-V4 e Kimi com reasoning mode retornam erros 400 Bad Request — workflow bloqueado
- Usuários não conseguem usar modelos populares com streaming enabled
- Impacto: S1 para quem depende desses providers

**🔴 Security:**
- Pairing code de 6 dígitos numéricos é considerado fraco demais por administradores
- Request para，默认32字符随机密码
- web_fetch já usa allowlist mais seguro; http_request precisa de alinhamento

**🟡 UX/Operação:**
- WhatsApp/Telegram: voz não funciona em multi-agente configs (TTS manager resolves wrong agent)
- Daemon nodes mostram "Online" mesmo quando WebSocket está stuck
- CLI `zeroclaw onboard` marca seções completas mas não escreve config

**🟢 Positivo:**
- Zerocode TUI sendo bem recebido como nova interface
- Docs versionados (em progresso) foram solicitados há muito tempo
- Suporte Nix/flake.nix é request antigo com atenção

### Cenários de uso emergentes

1. **Multi-agente via channels** — Usuários configuram agentes em Telegram/WhatsApp
2. **Air-gapped deployments** — Necessidade de isolamento de rede para segurança
3. **Hardware integration** — Smartroom tools e ESP32 demo show IoT potential
4. **Windows usage** — PowerShell compatibility é gap identificado

---

## 8. Backlog que Merece Atenção

### Issues sem resposta há >14 dias

| Issue | Título | Criado | Atualizado | Gap |
|-------|--------|--------|------------|-----|
| [#5604](https://github.com/zeroclaw-labs/zeroclaw/issues/5604) | Mattermost private messages | 2026-04-10 | 2026-06-02 | 54 dias, 1 👍, sem resposta |
| [#6293](https://github.com/zeroclaw-labs/zeroclaw/issues/6293) | Air-gapped execution mode | 2026-05-03 | 2026-06-02 | 31 dias, needs-maintainer-review |
| [#6390](https://github.com/zeroclaw-labs/zeroclaw/issues/6390) | zeroclaw node add CLI | 2026-05-05 | 2026-06

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*