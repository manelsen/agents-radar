# Resumo diário do ecossistema de agentes de IA 2026-06-24

> Issues: 1 | PRs: 1 | Projetos cobertos: 7 | Gerado em: 2026-06-23 21:28 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório do Projeto NullClaw
## 📅 Data de referência: 2026-06-24

---

## 1. Panorama do Dia

O projeto NullClaw apresenta **atividade moderada** na data de hoje. Foi registrada **1 issue fechada** (resolução de bug) e **1 PR aberto** em atualização, sem novos lançamentos nas últimas 24h. A taxa de atividade indica manutenção regular do repositório, com foco em estabilidade e evolução incremental de funcionalidades. O ecossistema demonstra saúde estável, embora o volume de contribuições tenha sido baixo no período.

---

## 2. Lançamentos

### ⚠️ Nenhum novo release nas últimas 24h

O projeto não publicou versões recentes. O último release conhecido (v2026.5.29) foi mencionado na issue #967 como a versão em uso pelo usuário afetado. Recomenda-se monitorar o repositório para announcements futuros.

---

## 3. Progresso do Projeto

### PRs em destaque

| # | Título | Status | Autor | Atualizado |
|---|--------|--------|-------|------------|
| [#783](https://github.com/nullclaw/nullclaw/pull/783) | feat(cron): cron subagent, run history, JSON output, security hardening | **ABERTO** | yanggf8 | 2026-06-23 |

**Análise do PR #783:**

O PR #783 representa uma **evolução significativa** no motor de automação do NullClaw, introduzindo:

- **🔧 Cron subagent engine**: Scheduler baseado em banco de dados com tabela `cron_runs` para histórico e `cron_run_queue` para workers
- **⚡ Operações atômicas**: tick, enqueue e complete para garantir integridade transacional
- **📋 Tipos de job**: Suporte a skill, agent e shell
- **🌍 Timezones**: Offset TZ por job individual
- **📤 JSON CLI output**: Comandos `cron list --json` e `cron schedule --json`
- **🔒 Security hardening**: Reforço de segurança no subsistema

**Valor para o projeto:** Este PR adiciona capacidades de automação agendada robustas, posicionando o NullClaw como uma ferramenta mais completa para workflows de IA.

**Status:** Aguardando revisão e merge.

---

## 4. Temas Quentes da Comunidade

### Issue com maior atenção

| # | Título | Status | Comentários | 👍 |
|---|--------|--------|-------------|-----|
| [#967](https://github.com/nullclaw/nullclaw/issues/967) | [bug] error: NoResponseContent | **FECHADO** | 2 | 0 |

**Análise da Issue #967:**

A issue reportada por **svier0** demonstra um problema crítico de **confiabilidade**:

- **🚨 Severidade**: Alta — 50%+ de taxa de falha (>12 falhas em 21 conversas)
- **⏱️ Tempo de resposta afetado**: 27 segundos antes do erro
- **💻 Ambiente**: Windows 11, modelo Agnes-2.0-Flash
- **📝 Sintoma**: `error: NoResponseContent` — conteúdo de resposta vazio/nulo

**Interação da comunidade**: A issue recebeu 2 comentários, sugerindo troubleshooting colaborativo. O status "CLOSED" indica que o problema foi potencialmente resolvido ou direcionado para outra resolução.

**Demanda identificada**: Usuários precisam de **logs mais verbosos** e **tratamento de erros mais robusto** quando modelos de IA não retornam conteúdo.

---

## 5. Bugs e Estabilidade

### Resumo de bugs reportados

| Severidade | Quantidade | Issue |
|------------|------------|-------|
| **Alta** | 1 | #967 - NoResponseContent |

### Detalhamento

**🔴 Bug Crítico: #967 - NoResponseContent (RESOLVIDO)**

- **Impacto**: Afeta >50% das interações em ambiente Windows 11
- **Causa raiz suspeita**: Falha na serialização de resposta do modelo Agnes-2.0-Flash ou timeout no streaming
- **Resolução**: Issue fechada com 2 comentários de troubleshooting
- **Recomendação**: Verificar se o fix foi implementado ou documentar workaround para usuários

### Métricas de estabilidade (últimas 24h)

- Issues abertas novas: 0
- Issues fechadas: 1
- Taxa de resolução: 100% ✅

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em desenvolvimento

**PR #783** ([yanggf8](https://github.com/yanggf8)) sinaliza direções estratégicas:

| Feature | Prioridade | Categoria |
|---------|------------|-----------|
| Cron subagent engine | Alta | Automação |
| JSON CLI output | Média | DX (Developer Experience) |
| Security hardening | Alta | Infraestrutura |
| Run history persistente | Média | Observabilidade |

### Sinais de demanda implícita

Baseado na issue #967, a comunidade demonstra necessidade de:

1. **Melhor tratamento de erros** — Mensagens mais claras quando modelos falham
2. **Timeouts configuráveis** — Para controlar comportamento em respostas lentas
3. **Logs estruturados** — Para debug de erros "NoResponseContent"

---

## 7. Resumo de Feedback dos Usuários

### Dores identificadas

| Dor | Frequência | Issue |
|-----|------------|-------|
| Respostas vazias/nulas | Alta (>50%) | #967 |

### Cenário de uso documentado

```
Sistema: Windows 11
Versão: v2026.5.29
Modelo: Agnes-2.0-Flash
Uso: Agent CLI (nullclaw agent -m "mensagem")
Problema: Erro aleatório em mais da metade das interações
```

### Satisfação/Insatisfação

- **Insatisfação**: Taxa de falha inaceitável (>50%) afeta produtividade
- **Satisfação parcial**: Tempo de resposta de 27s considerado aceitável quando funciona
- **NPS estimado**: Baixo para usuários Windows com modelos flash

### Feedback construtivo implícito

O usuário reporta o problema com **dados quantitativos** (21 conversas, 12 falhas, 27s de latency), demonstrando sofisticação técnica e desejo de resolução.

---

## 8. Backlog que Merece Atenção

### Itens sem resposta ou estagnados

| # | Título | Status | Criado | Última Atualização | Idade |
|---|--------|--------|--------|---------------------|-------|
| [#783](https://github.com/nullclaw/nullclaw/pull/783) | feat(cron): cron subagent... | ABERTO | 2026-04-07 | 2026-06-23 | ~78 dias |

### Análise

**⚠️ PR #783 — Em revisão há 78 dias**

- **Bloqueio**: PR aguarda merge há mais de 2 meses
- **Impacto**: Funcionalidade significativa de automação retida
- **Recomendação**: Priorizar code review ou solicitar updates do autor

---

## 📊 Métricas Consolidada (24h)

| Métrica | Valor | Tendência |
|---------|-------|-----------|
| Issues abertas/ativas | 0 | 🟢 Neutro |
| Issues fechadas | 1 | 🟢 Positivo |
| PRs abertos | 1 | 🟢 Neutro |
| PRs merged | 0 | 🟡 Aguardando |
| Releases | 0 | 🟡 Sem atividade |
| Novos comentários | ~2 | 🟢 Positivo |

---

## 🎯 Conclusão

O projeto NullClaw demonstra **saúde operacional estável** com resolução ativa de bugs (#967) e desenvolvimento contínuo de features (#783). A prioridade imediata deve ser:

1. **Verificar resolução do bug #967** e garantir que o fix seja backported se necessário
2. **Avançar com review do PR #783** para entregar a funcionalidade de cron
3. **Implementar logging melhorado** para diagnóstico de erros "NoResponseContent"

---

*Relatório gerado automaticamente com base em dados do GitHub de 2026-06-24*

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo — Ecossistema Open Source de Agentes de IA

**Data de referência:** 2026-06-24
**Projetos analisados:** NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw, ZeroClaw

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **dois perfis distintos de maturidade** neste período. Por um lado, projetos como **NanoBot, Hermes Agent e ZeroClaw** demonstram atividade intensa com 50+ PRs por dia, indicando comunidades activas e ciclos de desenvolvimento acelerados. Por outro, **NullClaw** mantém perfil discreto com manutenção incremental. A **estabilidade de integrações multi-canal** (Telegram, WhatsApp, Slack) emerge como o principal desafio transversal, enquanto a **gestão de memória e contexto de longo prazo** representa a fronteira técnica mais discutida. Observa-se uma tendência clara hacia funcionalidades de **automação agendada (cron), segurança de plugins WASM e experiência mobile/PWA**.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | Releases | Bugs Críticos | Saúde |
|---------|:------------:|:---------:|:--------:|:-------------:|:-----:|
| **NanoBot** | 11 | 39 | 1 (v0.2.2) | 2 (Telegram regressões) | 🟢 Alta |
| **Hermes Agent** | 50 | 50 | 0 | ~8 (P1 abertas) | 🟡 Ativa |
| **ZeroClaw** | 29 | 50 | 0 (v0.8.2 iminente) | 3 (S1 abertas) | 🟢 Alta |
| **CoPaw** | 38 | 50 | 1 (v1.1.12.post2) | 4 (cron/scheduler) | 🟡 Ativa |
| **IronClaw** | 20 | 40 | 0 | 3 (regressões) | 🟡 Ativa |
| **PicoClaw** | 2 | 18 | 0 | 1 (WhatsApp) | 🟢 Sólida |
| **NullClaw** | 1 | 1 | 0 | 1 (resolvido) | 🟢 Estável |

**Observação:** Hermes Agent e ZeroClaw lideram em volume absoluto de atividade, enquanto NullClaw apresenta ritmo significativamente mais conservador.

---

## 3. Posicionamento do Projeto Principal

### Diferenciais Técnicos

| Aspeto | Projetos com Diferenciação |
|--------|---------------------------|
| **Scheduler robusto** | NullClaw (PR #783 — cron subagent com DB), CoPaw (SQLite scroll context) |
| **Segurança WASM** | ZeroClaw (SSRF protection, env allowlist), IronClaw (skill approval gate) |
| **Multi-canal maduro** | PicoClaw (8+ canais), Hermes Agent (Telegram estabilizado), ZeroClaw (DingTalk, WeCom) |
| **Desktop-first** | Hermes Agent (first-class projects), IronClaw (WebUI completo) |
| **Mobile-first** | CoPaw (7+ PRs responsive), Hermes Agent (Android app draft) |

### Tamanho da Comunidade

- **Maior volume:** Hermes Agent, ZeroClaw, NanoBot (>100 contributors, atividade diária massiva)
- **Comunidade média:** IronClaw, CoPaw (atividade consistente, contributors activos)
- **Comunidade pequena:** PicoClaw, NullClaw (foco em nicho, desenvolvimento concentrado)

---

## 4. Focos Técnicos Compartilhados

### Problemas Transversais Identificados

| Problema | Afeta | Severidade | Projetos |
|----------|-------|:----------:|----------|
| **Loop infinito de tool calls** | Modelos small/local | 🔴 Crítica | NanoBot (#2298 — 95+ dias), ZeroClaw (#8219) |
| **Instabilidade do sistema de cron** | Automação | 🔴 Crítica | CoPaw (4+ issues), NullClaw (feature em PR), ZeroClaw (#6037 — corrigido) |
| **Gestão de contexto/histórico** | Sessões longas | 🟠 Alta | NanoBot, CoPaw, IronClaw, PicoClaw (#3159) |
| **Timeouts e latência** | Produtividade | 🟠 Alta | IronClaw (120s NEAR AI), NullClaw (27s), Hermes Agent |
| **Credenciais e auth** | Segurança | 🔴 Crítica | Hermes Agent (#19566 — OpenAI-Codex), IronClaw (#3733 — Gmail) |

### Padrões Arquiteturais Emergentes

1. **Memory as a Service:** Múltiplos projetos movem-se para abstrações de memória plugáveis (IronClaw #5163, CoPaw #5321)
2. **Progressive disclosure de tools:** Otimização de schema (~91 tools → subset dinâmico) para reduzir latência
3. **SQLite para persistência:** CoPaw e NullClaw adoptam SQLite como backbone para cron/history
4. **PWA como alternativa mobile:** NanoBot e CoPaw investem em responsivo web como ponte para mobile

---

## 5. Análise de Diferenciação

### Por Público-Alvo

| Perfil | Projetos | Características |
|--------|----------|-----------------|
| **Enterprise/Pro** | Hermes Agent, ZeroClaw, IronClaw | OAuth, MCP, multi-tenant, Slack/Google integrations |
| **Developers** | NullClaw, PicoClaw | CLI rico, ferramentas de automação, multi-canal |
| **Consumer/Mobile** | NanoBot, CoPaw | WebUI, PWA, interface amigável |
| **Nicho técnico** | PicoClaw | QQ, LINE, DingTalk — foco em canais asiáticos |

### Por Estratégia de Features

```
Hermes Agent  → Desktop-first com Android app draft
CoPaw         → Mobile-first via responsivo web
ZeroClaw      → Security-first (WASM, SSRF, per-agent env)
NanoBot       → Stability-first (140 PRs de durabilidade)
IronClaw      → Automation-first (Reborn automations lifecycle)
NullClaw      → Incremental (manutenção + cron engine)
PicoClaw      → Multi-canal (8 integrações, remote WebSocket)
```

---

## 6. Tração e Maturidade da Comunidade

### Projetos em Velocidade Máxima

| Projeto | Indicadores | Ciclo |
|---------|-------------|-------|
| **NanoBot** | 140 PRs merged em release, 21 novos contribuidores | 🚀 Crescimento rápido |
| **ZeroClaw** | 50 PRs/24h, 134 items no tracker v0.9.0 | 🚀 Feature-rich |
| **Hermes Agent** | 50 issues + 50 PRs simultâneos | 🚀 Desenvolvimento intenso |

### Projetos em Consolidação de Qualidade

| Projeto | Indicadores | Ciclo |
|---------|-------------|-------|
| **NullClaw** | 1 PR há 78 dias (cron), baixa atividade | 🔧 Estabilização |
| **PicoClaw** | Foco em segurança (#3160 CSRF), estabilidade | 🔧 Refinamento |
| **CoPaw** | Cron instability resolved, mobile-first | 🔧 Maturação |

### Backlog Crítico Accumulado

| Projeto | Issue | Idade | Impacto |
|---------|-------|-------|---------|
| NanoBot | #2298 — Loop infinito | 95+ dias | Modelos small inutilizáveis |
| Hermes Agent | #19566 — Credenciais dropping | Em análise | Segurança enterprise |
| IronClaw | #5139 — Tasks hang at init | <1 semana | 14% tarefas afetadas |
| CoPaw | #5064 — Cron não dispara | 14+ dias | Automação bloqueada |

---

## 7. Sinais de Tendência

### Tendências Extraídas do Feedback

| Tendência | Evidência | Implicação |
|-----------|-----------|------------|
| **Mobile como próximo frontier** | CoPaw (7 PRs responsive), Hermes Agent (Android app), NanoBot (PWA) | Competição por UX mobile intensifica |
| **Segurança em plugins WASM** | ZeroClaw (SSRF, env allowlist), IronClaw (approval gates) | Adoção enterprise exige sandboxing robusto |
| **Automação agendada madura** | Cron engines em NullClaw, CoPaw, ZeroClaw | Diferenciação via scheduler UX e reliability |
| **Providers alternativos** | Kimi Coding, OpenCode, Vertex AI, Ollama Cloud | Diversificação deLLM providers é demanda real |
| **Memory persistence** | SQLite, MemoryService facades, progressive consolidation | Contexto de longo prazo torna-se feature diferenciadora |
| **Multi-canal como commodity** | 8+ canais em PicoClaw, feature parity em outros | Diferenciação shift de "quantidade" para "qualidade de integração" |

### Recomendações para Desenvolvedores

1. **Para novos contribuidores:** IronClaw e CoPaw apresentam backlogs acessíveis com alta diversidade de componentes
2. **Para empresas:** Hermes Agent e ZeroClaw oferecem APIs mais maduras para integração enterprise
3. **Para researchers:** NullClaw e NanoBot demonstram arquiteturas interessantes para experimentação (cron DB, transcrições segmentadas)

---

*Relatório gerado automaticamente com base em dados GitHub de 2026-06-24. Métricas subjectivas baseadas em análise comparativa dos resumos fornecidos.*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-06-24

## 1. Panorama do Dia

O NanoBot apresenta **alta atividade de desenvolvimento** em 24 de junho de 2026, com 39 PRs e 11 issues atualizadas. A release **v0.2.2** trouxe melhorias significativas de durabilidade para a WebUI, com 140 PRs mesclados e 21 novos contribuidores. A comunidade demonstra foco em **estabilidade de integrações** (Telegram, provedores) e **experiência mobile/PWA**, além de avanços na gestão de memória e comportamento de agentes. O projeto mantém um ritmo saudável de contribuições com atenção simultânea a bugs críticos e features estratégicas.

---

## 2. Lançamentos

### ✅ v0.2.2 — Durabilidade da WebUI

| Métrica | Valor |
|---------|-------|
| PRs mesclados | 140 |
| Novos contribuidores | 21 |

**Destaques da release:**
- **Transcrições segmentadas**: conversas da WebUI agora sobrevivem melhor ao uso real, abandonando o modelo de arquivo único frágil
- **Chats bifurcados**: replies são preservados mais confiavelmente em conversas forkadas
- **Melhorias gerais de estabilidade** no agente

> ⚠️ **Nota de migração**: usuários reportam regressões no Telegram após o upgrade (veja seção Bugs).

🔗 [Release v0.2.2](https://github.com/HKUDS/nanobot/releases/tag/v0.2.2)

---

## 3. Progresso do Projeto

### PRs Merged/Fechados (7 total)

| PR | Descrição | Impacto |
|----|-----------|---------|
| **#4474** | Fix provider: deduplicate parallel tool_use IDs em AnthropicProvider | ✅ Corrige erro 400 do Kimi Coding com tool calls paralelos |
| **#4393** | Test exec: cover git commands in workspace subdirectories | ✅ Cobertura de regressão para comandos git em subdiretórios |
| **#4387** | Fix context: fall back to default memory bootstrap | ✅ Fallback para SOUL.md/USER.md padrão quando não encontrados |
| **#4417** | Test MCP: use resolvable timeout regression URL | ✅ Teste mais confiável para transporte HTTP |
| **#4458** | Feat WebUI: add PWA support (CLOSED como invalid — substituído por #4480) | ⚠️ Substituído por implementação mais completa |

**Avanços notáveis:**
- **Integração Kimi Coding** avança com correção de IDs duplicados
- **Sistema de memória** mais robusto com fallbacks e testes de consolidação
- **Git workspace** protegido com testes de regressão

---

## 4. Temas Quentes da Comunidade

### Issues com Mais Atividade

| Issue | Tipo | Comentários | Relevância |
|-------|------|-------------|------------|
| **#2298** — Breaking endless tool calling loops | 🐛 Bug | 5 | ⭐⭐⭐ Alta demanda de users com modelos locais/small |
| **#4410** — Heartbeat envia mensagem indesejada | 🐛 Bug | 2 | ⚠️ Regressão pós-v0.2.2 |
| **#4465** — WebUI exibe `<thinking/>` como texto | 🐛 Bug | 1 | 🔒 UX leak de controle/template |
| **#4470** — Telegram line breaks + flickering | 🐛 Bug | 0 | 🚨 Regressão pós-v0.2.2 |

### Análise de Demandas

**🔴 Loop infinito de tool calls (#2298)**
- **Problema**: modelos menores/locais entram em loops infinitos de tool calls
- **Cenário**: usuários com hardware limitado ou modelos compactos
- **Proposta**: adicionar lógica de detecção e remediação
- **Estado**: aberto desde 2026-03-20 — **backlog crítico**

**📱 Mobile-first PWA**
- **#4479** / **#4480**: PWA + swipe gesture para sidebar mobile
- Multiplos contribuidores (zpljd258) trabalhando em paralelo
- Indica demanda real por experiência mobile nativa

**🧠 Enhancements de Memória e Dream**
- **#4467**: Dream criando skills duplicadas vs. atualizando existentes
- **#4402**: Opt-in eager consolidation para memória
- **#4424**: Archive facts com contexto de proveniência

🔗 [Issue #2298](https://github.com/HKUDS/nanobot/issues/2298) | [Issue #4470](https://github.com/HKUDS/nanobot/issues/4470)

---

## 5. Bugs e Estabilidade

### Regressões Críticas (pós-v0.2.2)

| Severidade | Bug | Origem | Status | Link |
|------------|-----|--------|--------|------|
| 🔴 **Alta** | Telegram: line breaks ignorados + flickering | v0.2.2 | PR #4472 aberto | [#4470](https://github.com/HKUDS/nanobot/issues/4470) |
| 🟡 **Média** | Heartbeat enviando mensagens indesejadas | v0.2.2? | Closed | [#4410](https://github.com/HKUDS/nanobot/issues/4410) |
| 🟡 **Média** | WebUI exibe tags `<thinking/>` como texto | Bug existente | Aberto | [#4465](https://github.com/HKUDS/nanobot/issues/4465) |

### Correções em Andamento

| PR | Fix | Progresso |
|----|-----|-----------|
| **#4472** | Skip sendRichMessage quando streaming preview existe | ✅ Aberto, 2026-06-23 |
| **#4471** | Prevenir iOS Safari composer zoom | ✅ Aberto, 2026-06-23 |

**Métrica de qualidade**: 2 bugs de regressão relacionados a v0.2.2 indicam necessidade de melhores testes de integração para WebUI e Telegram gateway.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Propostas

| Feature | Proposta | Prioridade | Link |
|---------|----------|------------|------|
| **OpenCode Zen & Go providers** | zpljd258 | 🟢 Alta | [#4475](https://github.com/HKUDS/nanobot/issues/4475) / [#4476](https://github.com/HKUDS/nanobot/pull/4476) |
| **Kimi Coding Plan support** | zpljd258 | 🟢 Alta | [#4463](https://github.com/HKUDS/nanobot/issues/4463) |
| **PWA + mobile swipe** | zpljd258 | 🟢 Alta | [#4479](https://github.com/HKUDS/nanobot/issues/4479) / [#4480](https://github.com/HKUDS/nanobot/pull/4480) |
| **Hiding reasoning steps display** | EvanNotFound | 🟡 Média | [#2305](https://github.com/HKUDS/nanobot/issues/2305) ✅ Closed |

### Sinais de Roadmap

**Estratégia de Providers:**
- Expansão contínua (OpenCode Zen/Go, Kimi Coding Plan)
- Suporte a parâmetros de thinking customizados por provider (PR #4482)

**Mobile-first:**
- PWA emergence como feature request recorrente
- Suporte a gestos touch para sidebar

**Memory & Dream:**
- Foco em consolidação inteligente de memória
- Dream mais inteligente com atualização vs. criação de skills

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Dor | Frequência | Impacto |
|-----|------------|--------|
| **Loop infinito de tool calls** | Múltiplos users (modelos small/local) | 🔴 Alto — UX inutilizável |
| **Regressões Telegram** | Users que atualizaram para v0.2.2 | 🔴 Alto — comunicação quebrada |
| **Skills duplicadas do Dream** | Users com workflows customizados | 🟡 Médio — poluição de workspace |
| **iOS Safari zoom** | Usuários mobile | 🟡 Médio — experiência degradada |

### Cenários de Uso Emergentes

1. **Agentes locais/small models**: comunidade demandando robustez para hardware limitado
2. **Uso mobile**: necessidade de experiência "app-like" via PWA
3. **Codificação assistida**: integração com Kimi Coding, OpenCode

### Satisfação Geral

```
Release v0.2.2: +140 PRs, +21 contribuidores = momentum positivo
Bugs regressivos: -2 bugs críticos = atenção necessária
```

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta há >3 dias

| Issue | Criado | Dias | Prioridade | Link |
|-------|--------|------|------------|------|
| **#2298** — Endless tool calling loops | 2026-03-20 | **95+** | 🔴 Alta | [#2298](https://github.com/HKUDS/nanobot/issues/2298) |
| **#2305** — Hide reasoning steps | 2026-03-20 | **95+** | ✅ Closed | [#2305](https://github.com/HKUDS/nanobot/issues/2305) |

### Issues Importantes sem Atribuição

| Issue | Descrição | Recomendação |
|-------|-----------|--------------|
| **#4467** | Dream criando duplicatas de skills | Atribuir a core dev de Dream |
| **#4463** | Kimi Coding Plan support | Priorizar — integra provedor oficial |
| **#2298** | Loop infinito de tools | **CRÍTICO** — requer solução arsiteural |

---

## Métricas Resumo do Dia

```
┌─────────────────────────────────────────────────┐
│  ATIVIDADE (24h)                                │
│  ├── Issues: 11 (7 abertas, 4 fechadas)         │
│  ├── PRs: 39 (32 abertas, 7 fechadas/merged)    │
│  └── Releases: 1 (v0.2.2)                       │
├─────────────────────────────────────────────────┤
│  SAÚDE DO PROJETO                               │
│  ├── Bugs críticos: 2 (regressões Telegram)     │
│  ├── Features em progresso: 5+                  │
│  └── Backlog crítico: #2298 (95+ dias)         │
└─────────────────────────────────────────────────┘
```

---

**Recomendação prioritária**: Atribuir **#2298** (loop infinito) e **#4472** (Telegram) para resolução nesta semana. O backlog de 95+ dias nesta issue impacta diretamente a base de usuários com modelos locais.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent
## NousResearch/hermes-agent — 2026-06-24

---

## 1. Panorama do Dia

O Hermes Agent mantém um ritmo de atividade intenso com **50 issues e 50 PRs atualizados nas últimas 24 horas**, demonstrando uma comunidade ativa e engajada. Não houve lançamentos de novas versões hoje. O estado geral do projeto apresenta um **balanço saudável entre correções críticas e evolução de features**, com destaque para múltiplas correções de segurança sendo consolidadas via PRs. A maioria das issues abertas concentra-se em bugs de média prioridade (P2/P3), indicando maturidade do codebase, porém algumas falhas críticas de P1 (especialmente relacionadas a Telegram, sessões web/WeChat e credenciais OpenAI-Codex) exigem atenção imediata.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24 horas.**

O projeto não выпустил novas versões hoje. Para referências de versões anteriores, consultar o [histórico de releases](https://github.com/NousResearch/hermes-agent/releases).

---

## 3. Progresso do Projeto

### PRs Merged/Fechados Hoje (20 total)

| # | PR | Autor | Tipo | Impacto |
|---|-----|-------|------|---------|
| [#51537](https://github.com/NousResearch/hermes-agent/pull/51537) | `fix(agent): handle concurrent tool submit shutdown` | helix4u | Bug fix | Corrige crash quando `ThreadPoolExecutor` rejeita tarefas durante shutdown do interpretador Python |
| [#51549](https://github.com/NousResearch/hermes-agent/pull/51549) | `fix(agent): handle concurrent tool submit shutdown` | kshitijk4poor | Bug fix | Duplex da correção acima (provavelmente merged em paralelo) |
| [#51541](https://github.com/NousResearch/hermes-agent/pull/51541) | `fix(telegram): wire keepalive limits into general request pool to fix CLOSE_WAIT fd leak` | kshitijk4poor | Bug fix | Fecha [#31599](https://github.com/NousResearch/hermes-agent/issues/31599) — resolve vazamento de sockets CLOSE_WAIT no Telegram via proxy HTTP |
| [#51539](https://github.com/NousResearch/hermes-agent/pull/51539) | `fix(agent): persist tool calls before turn-end flush` | kshitijk4poor | Bug fix P1 | Fecha [#49045](https://github.com/NousResearch/hermes-agent/issues/49045) — tool calls agora persistem no DB antes do flush |
| [#51536](https://github.com/NousResearch/hermes-agent/issues/51536) | `Session summary injection appends corrupted/garbage text` | jaayjaayy | Bug closed | Issue duplicada marcada como closed |

### Avanços Principais

- **Correção de estabilidade do agente**: A correção de tool calls não persistidos resolve um problema crítico onde sessões podiam perder histórico de ferramentas executadas
- **Telegram gateway estabilizado**: O vazamento de file descriptors (CLOSE_WAIT) que afetava instalações rodando por ~2 dias foi finalmente sanado
- **Threadsafe shutdown**: Execução concorrentes de ferramentas agora lidam graciosamente com shutdown do interpretador

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários + reações)

| # | Título | Comentários | 👍 | Prioridade | Categoria |
|---|--------|-------------|----|------------|----------|
| [#19566](https://github.com/NousResearch/hermes-agent/issues/19566) | OpenAI-Codex credential pool pode perder credenciais durante rotação | 8 | 1 | P1 | Auth/Security |
| [#48648](https://github.com/NousResearch/hermes-agent/issues/48648) | Telegram infinite streamed message duplication loop | 6 | 1 | P1 | Message Delivery |
| [#44121](https://github.com/NousResearch/hermes-agent/issues/44121) | npm ci falha com lock file @types/node@24.13.1 | 6 | 0 | P2 | Dependencies |
| [#28004](https://github.com/NousResearch/hermes-agent/issues/28004) | Telegram typing indicator stuck indefinitely | 5 | 0 | P2 | Message Delivery |
| [#48061](https://github.com/NousResearch/hermes-agent/issues/48061) | Hermes Agent v0.16.0 envia empty runtime model/provider | 5 | 0 | P1 | Runtime |
| [#25822](https://github.com/NousResearch/hermes-agent/issues/25822) | Gemini 503 não trigga provider fallback | 5 | 2 | P2 | Vision/Fallback |
| [#29299](https://github.com/NousResearch/hermes-agent/issues/29299) | Necessidade de HTTPS OAuth callback URL | 3 | 1 | P3 | Auth/MCP |
| [#45935](https://github.com/NousResearch/hermes-agent/issues/45935) | WhatsApp Cloud API message template support | 3 | 2 | P3 | Platform/WhatsApp |

### Análise de Demandas

1. **Autenticação e Credenciais** (8+ comentários): A comunidade demonstra forte preocupação com o gerenciamento de credenciais, especialmente para OAuth e provedores como OpenAI-Codex e Salesforce MCP.

2. **Telegram como plataforma prioritária**: 3 das top issues envolvem Telegram (duplicação de mensagens, typing indicator, vazamento de sockets). Telegram parece ser o caso de uso principal da comunidade.

3. **Fallback e Resiliência**: A issue de Gemini 503 não disparando fallback (#25822, 5 👍) indica que usuários em produção precisam de resiliência de provedores mais robusta.

---

## 5. Bugs e Estabilidade

### Issues P1 (Críticas — Requerem Atenção Imediata)

| # | Bug | Plataforma | Sweeper Risk | Link |
|---|-----|-----------|--------------|------|
| #19566 | OpenAI-Codex credential pool pode dropping credenciais | openai | risk-security-boundary | [Issue](https://github.com/NousResearch/hermes-agent/issues/19566) |
| #48648 | Infinite streamed message duplication loop | Telegram | risk-message-delivery | [Issue](https://github.com/NousResearch/hermes-agent/issues/48648) |
| #48061 | Empty runtime model/provider no pipx install | Linux | — | [Issue](https://github.com/NousResearch/hermes-agent/issues/48061) |
| #49106 | Sessions leak history across Web/WeChat | Web/WeChat | — | [Issue](https://github.com/NousResearch/hermes-agent/issues/49106) |
| #47134 | /reload-mcp crashes gateway via killpg | MCP | — | [Issue](https://github.com/NousResearch/hermes-agent/issues/47134) |

### Issues P2 (Importantes)

| # | Bug | Componente | Link |
|---|-----|------------|------|
| #28004 | Telegram typing indicator stuck (race condition) | Gateway/Telegram | [Issue](https://github.com/NousResearch/hermes-agent/issues/28004) |
| #44121 | npm ci fails com lock file mismatch | CLI | [Issue](https://github.com/NousResearch/hermes-agent/issues/44121) |
| #25822 | Gemini 503 não trigga fallback | Agent/Vision | [Issue](https://github.com/NousResearch/hermes-agent/issues/25822) |
| #51535 | OAuth MCP connection fails com 405 | CLI/MCP | [Issue](https://github.com/NousResearch/hermes-agent/issues/51535) |
| #49586 | Vision fallback_chain crash (await on sync client) | Agent/Vision | [Issue](https://github.com/NousResearch/hermes-agent/issues/49586) |
| #49637 | TUI reutiliza HERMES_CWD stale | CLI/TUI | [Issue](https://github.com/NousResearch/hermes-agent/issues/49637) |

### Observações de Estabilidade

- **Problemas de socket/file descriptor**: Resolvido via [#51541](https://github.com/NousResearch/hermes-agent/pull/51541), mas demonstra necessidade de melhores limites de connection pool
- **Race conditions em cleanup**: Múltiplas issues de Telegram envolvem race conditions (`_keep_typing`, `_kill_orphaned_mcp_children`)
- **Vazamento de sessão**: Issue [#49106](https://github.com/NousResearch/hermes-agent/issues/49106) sobre história vazando entre sessões web é crítico para multi-tenant

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features com Alta Demanda

| # | Feature | 👍 | Componente | Link |
|---|---------|----|------------|------|
| #45935 | WhatsApp Cloud API message template support | 2 | Gateway/WhatsApp | [Issue](https://github.com/NousResearch/hermes-agent/issues/45935) |
| #29299 | HTTPS OAuth callback URL ability | 1 | MCP/Auth | [Issue](https://github.com/NousResearch/hermes-agent/issues/29299) |
| #35467 | Progressive background pre-compaction cache | 0 | Agent | [Issue](https://github.com/NousResearch/hermes-agent/issues/35467) |
| #35437 | delegate_task com model/provider parameters | 0 | Tools/Delegate | [Issue](https://github.com/NousResearch/hermes-agent/issues/35437) |

### PRs de Feature em Progresso

| # | Feature | Autor | Escopo | Link |
|---|---------|-------|--------|------|
| #49037 | First-class projects — sidebar, coding rail, review pane | OutThisLife | Desktop/CLI | [PR](https://github.com/NousResearch/hermes-agent/pull/49037) |
| #8427 | Vertex AI provider para Gemini | slawt | Provider | [PR](https://github.com/NousResearch/hermes-agent/pull/8427) |
| #22648 | Ollama Cloud como provider de busca web | jcmcneal | Web/Plugins | [PR](https://github.com/NousResearch/hermes-agent/pull/22648) |
| #49834 | Hermes Agent Android app (Capacitor thin client) | Bentlybro | Mobile | [PR](https://github.com/NousResearch/hermes-agent/pull/49834) |

### Sinais de Roadmap

1. **Desktop como prioridade**: O PR [#49037](https://github.com/NousResearch/hermes-agent/pull/49037) de "first-class projects" indica foco em experiência desktop
2. **Multi-plataforma mobile**: Android app em draft (#49834) sugere estratégia mobile-first futura
3. **Vertex AI enterprise**: Provider de Gemini via Vertex (#8427) atende demanda enterprise
4. **WhatsApp templates**: Demanda por re-engagement fora da janela de 24h demonstra caso de uso comercial

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

**Autenticação e Credenciais (🔴 Crítico)**
- Usuários relatam perda de credenciais recém-adicionadas durante rotação no OpenAI-Codex
- OAuth com serviços enterprise (Salesforce) falham por falta de suporte HTTPS callback
- Credenciais "stale" persistem após `/reload` em plugins como OpenViking

**Estabilidade de Plataforma (🟠 Significativo)**
- Telegram: vazamento de sockets após ~2 dias de operação via proxy
- Web/WeChat: contaminação de histórico entre sessões ativas
- Desktop: builds de código não assinados causam problemas no macOS/Windows

**UX e Mobilidade (🟡 Moderado)**
- Mobile: thumbnails e cards renderizam em baixa resolução
- Desktop Linux: falta ícone no app launcher
- TUI: working directory incorreto em comparação com CLI clássico

### Cenários de Uso em Produção

1. **Automação de negócio via Telegram**: Usuários rodam Hermes 24/7 em servidores com proxy HTTP — o vazamento de sockets (#31599) é blocker para produção
2. **Multi-provedor com fallback**: Necessidade de fallback automático entre OpenAI, Gemini e provedores customizados
3. **Agentes delegantes**: Casos de uso batch/cost-saving requerem routing dinâmico de modelos

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta/Engajamento

| # | Issue | Idade | Status | Link |
|---|-------|-------|--------|------|
| #14 | updates for stability and speed | ~6 meses | Open | [PR](https://github.com/NousResearch/hermes-agent/pull/14) |
| #8427 | Vertex AI provider | ~2 meses | Open | [PR](https://github.com/NousResearch/hermes-agent/pull/8427) |
| #22648 | Ollama Cloud provider | ~1.5 meses | Open | [PR](https://github.com/NousResearch/hermes-agent/pull/22648) |
| #29299 | HTTPS OAuth callback | ~1 mês | Open | [Issue](https://github.com/NousResearch/hermes-agent/issues/29299) |

### Issues Antigas com Baixa Prioridade Aparente

| # | Issue | Idade | P | Tema | Link |
|---|-------|-------|---|------|------|
| #32837 | Mobile content cards resolution | ~1 mês | P3 | Mobile/TUI | [Issue](https://github.com/NousResearch/hermes-agent/issues/32837) |
| #32836 | Mobile thumbnail controls | ~1 mês | P2 | Mobile/TUI | [Issue](https://github.com/NousResearch/hermes-agent/issues/32836) |
| #35467 | Progressive pre-compaction cache | ~25 dias | P3 | Agent/Performance | [Issue](https://github.com/NousResearch/hermes-agent/issues/35467) |

### Recomendações de Priorização

1. **Para triagers**: Issues de P1 sobre segurança de credenciais (#19566) e vazamento de sessão (#49106) necessitam resposta oficial
2. **Para mantenedores**: PRs enterprise (#8427 Vertex AI, #22648 Ollama Cloud) estão abertos há semanas — feedback seria valioso para a comunidade
3. **Para roadmap**: Features de WhatsApp (#45935) e Android (#49834) demonstram demanda comercial clara

---

## Métricas Resumidas do Dia

| Métrica | Valor |
|---------|-------|
| Issues atualizadas (24h) | 50 (41 open, 9 closed) |
| PRs atualizados (24h) | 50 (30 open, 20 merged/closed) |
| Novas releases | 0 |
| P1 issues abertas | ~8 |
| P2 issues abertas | ~12 |
| PRs de segurança merged | 1 ([#47308](https://github.com/NousResearch/hermes-agent/pull/47308)) |
| PRs de bug critical merged | 3 ([#51539](https://github.com/NousResearch/hermes-agent/pull/51539), [#51541](https://github.com/NousResearch/hermes-agent/pull/51541), [#51537](https://github.com/NousResearch/hermes-agent/pull/51537)) |

---

*Relatório gerado automaticamente com base em dados do GitHub de 2026-06-24. Para atualizações em tempo real, consultar [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent).*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório de Projeto PicoClaw — 2026-06-24

## 1. Panorama do dia

O projeto PicoClaw apresenta **alta atividade de desenvolvimento** nesta data, com 18 PRs atualizados nas últimas 24h e 2 issues relevantes. A comunidade está focada em **melhorias de estabilidade** (correções de segurança, edge cases em canais e ferramentas) e **novas funcionalidades** como suporte a WebSocket remoto e caching no AWS Bedrock. Não há lançamentos novos, indicando que a equipe pode estar em ciclo de consolidação antes de uma próxima release. O volume de PRs abertos (11) sugere pipeline saudável de contribuições.

---

## 2. Lançamentos

**Nenhum novo release registrado nas últimas 24h.**

O último release conhecido permanece **v0.2.9** (referenciada na issue #3159). A ausência de releases novas pode indicar que mudanças estão sendo validadas antes de publicação.

---

## 3. Progresso do Projeto

### PRs merged/fechadas hoje (7):

| # | Título | Impacto | Link |
|---|--------|---------|------|
| #3162 | fix(whatsapp): reconnection e async message processing | **Crítico** — Adiciona pong handler, read deadline, auto-reconexão com backoff exponencial | [PR #3162](https://github.com/sipeed/picoclaw/pull/3162) |
| #3154 | fix(openai_compat): recover Doubao Seed tool calls | **Importante** — Corrige tool calls vazados como `<seed:tool_call>` em texto | [PR #3154](https://github.com/sipeed/picoclaw/pull/3154) |
| #3059 | fix: explicitly ignore Close() errors | **Manutenção** — Elimina warnings de linter em error paths | [PR #3059](https://github.com/sipeed/picoclaw/pull/3059) |
| #3054 | fix(line): add ok checks for sync.Map | **Estabilidade** — Previne panics em type assertions | [PR #3054](https://github.com/sipeed/picoclaw/pull/3054) |
| #3047 | fix(web): restore full JSONL history for session detail | **UX** — Permite ver mensagens arquivadas no detail da sessão | [PR #3047](https://github.com/sipeed/picoclaw/pull/3047) |
| #3053 | fix(evolution): ok check for LoadOrStore | **Estabilidade** — Previne panic em lockStoreFile | [PR #3053](https://github.com/sipeed/picoclaw/pull/3053) |
| #2888 | External fork: Fix/tool config load image reaction | **Contribuição externa** — Fork 55N10E/picoclaw-1#1 | [PR #2888](https://github.com/sipeed/picoclaw/pull/2888) |

**Destaque principal:** O PR #3162 resolve problemas de desconexão automática no WhatsApp, um problema que impacta usuários em produção com conexões instáveis.

---

## 4. Temas Quentes da Comunidade

### Issues com mais contexto:

**#3015** — QQ Channel Connection Failed on Windows *(CLOSED)*
- **Problema:** Timeout ao obter access token de `bots.qq.com`
- **Status:** Fechada como stale
- **Link:** [Issue #3015](https://github.com/sipeed/picoclaw/issues/3015)
- **Análise:** Bug específico de Windows para canal QQ; o mesmo funciona normalmente em Pico channel, sugerindo diferença de comportamento na plataforma.

**#3159** — Tarefas Repetidas *(OPEN — criada 2026-06-23)*
- **Ambiente:** v0.2.9, Debian 13, deepseek-v4-flash-free
- **Problema:** Ao fazer perguntas sequenciais (notícias EUA → notícias França), o bot refaz a primeira tarefa antes de executar a segunda.
- **Link:** [Issue #3159](https://github.com/sipeed/picoclaw/issues/3159)
- **Análise:** Possível problema de gerenciamento de contexto/histórico em sessões com múltiplas interações.

---

## 5. Bugs e Estabilidade

### Por severidade:

| Severidade | Quantidade | Exemplos |
|------------|------------|----------|
| 🔴 Crítica | 1 | WhatsApp disconnections (#3162 — corrigido) |
| 🟠 Alta | 2 | Doubao Seed tool calls (#3154), QQ Windows (#3015) |
| 🟡 Média | 1 | Tarefas repetidas (#3159 — em análise) |
| 🟢 Baixa | 3 | sync.Map panics (#3054, #3053), Close() warnings (#3059) |

**Issue em destaque (nova):** [#3159](https://github.com/sipeed/picoclaw/issues/3159) — Reproduzível com passos claros, afetando interações sequenciais com IA.

---

## 6. Pedidos de Features e Sinais de Roadmap

### PRs com novas funcionalidades (abertas):

| # | Feature | Estratégico | Link |
|---|---------|-------------|------|
| #3163 | **feat(bedrock): prompt caching via cache points** | ⭐ AWS Bedrock optimization | [PR #3163](https://github.com/sipeed/picoclaw/pull/3163) |
| #3118 | **Add remote Pico WebSocket mode** | ⭐ Arquitetura distribuída | [PR #3118](https://github.com/sipeed/picoclaw/pull/3118) |
| #3157 | **feat: Android ADB remote operations tool** | 🔧 Device management | [PR #3157](https://github.com/sipeed/picoclaw/pull/3157) |
| #2975 | **Telegram: reply as mention** | 📱 UX canais | [PR #2975](https://github.com/sipeed/picoclaw/pull/2975) |

### Melhorias em revisão:

| # | Título | Link |
|---|--------|------|
| #3161 | fix(exec): keep deny patterns active for custom allow rules | [PR #3161](https://github.com/sipeed/picoclaw/pull/3161) |
| #3160 | fix(auth): reject cross-site launcher setup requests | [PR #3160](https://github.com/sipeed/picoclaw/pull/3160) |
| #3115 | Fix inline data URL media extraction | [PR #3115](https://github.com/sipeed/picoclaw/pull/3115) |
| #3158 | Test: sandbox fs Windows path handling | [PR #3158](https://github.com/sipeed/picoclaw/pull/3158) |

**Sinais de roadmap:** O PR #3118 (remote WebSocket mode) indica direção para arquiteturas onde o agent executa remotamente. O PR #3157 (ADB tool) sugere expansão para automação mobile.

---

## 7. Resumo de Feedback dos Usuários

### Dores relatadas:

1. **Instabilidade em WhatsApp** — Usuários enfrentavam desconexões automáticas. *(Corrigido em #3162)*
2. **Integração QQ quebrada no Windows** — Token retrieval timeout impede uso em ambiente Windows. *(Issue #3015 — sem resolução ativa)*
3. **Comportamento inesperado com AI sequencial** — Tarefas repetidas indicam possible degradação de contexto em sessões longas. *(Issue #3159)*

### Cenários de uso identificados:
- **Automação com múltiplos canais:** Telegram, WhatsApp, QQ, LINE
- **Execução de ferramentas:** shell, exec, file operations
- **Integração cloud:** AWS Bedrock, DeepSeek, Doubao Seed
- **Device management:** Android ADB (em desenvolvimento)

---

## 8. Backlog que Merece Atenção

### Issues sem resposta há tempo considerável:

| # | Título | Idade | Prioridade | Link |
|---|--------|-------|------------|------|
| #3015 | QQ Channel Connection Failed on Windows | ~17 dias | Alta | [Issue #3015](https://github.com/sipeed/picoclaw/issues/3015) |
| #3159 | 经常重复任务 | <1 dia | Alta | [Issue #3159](https://github.com/sipeed/picoclaw/issues/3159) |

### PRs stale (sem atualização):

| # | Título | Status | Link |
|---|--------|--------|------|
| #2975 | Telegram: reply as mention | stale ~24d | [PR #2975](https://github.com/sipeed/picoclaw/pull/2975) |
| #3059 | Close() errors | stale ~16d | [PR #3059](https://github.com/sipeed/picoclaw/pull/3059) |
| #3054 | sync.Map ok checks | stale ~16d | [PR #3054](https://github.com/sipeed/picoclaw/pull/3054) |
| #3047 | JSONL history | stale ~17d | [PR #3047](https://github.com/sipeed/picoclaw/pull/3047) |

**Recomendação:** O PR #2975 (Telegram reply-as-mention) está stale há ~24 dias com descrição clara de feature. Validação ou feedback da maintainers aceleraria a decisão.

---

## Saúde Geral do Projeto

| Indicador | Status |
|-----------|--------|
| 📊 Atividade de PRs | ✅ Alta (18 PRs em 24h) |
| 🐛 Issues em aberto | ⚠️ 1 nova (repetição de tarefas) |
| 🔒 Segurança | ✅ Correção #3160 em revisão (CSRF protection) |
| 📦 Releases | ⚠️ Nenhuma nas últimas 24h |
| 🧹 Dívida técnica | ✅ Múltiplas correções de stability merged |
| 🎯 Direção estratégica | ✅ Features alinhadas (remote mode, caching, mobile) |

**Veredicto:** PicoClaw demonstra **saúde sólida** com foco em estabilidade e novas capacidades. Atenção necessária à issue #3159 (comportamento inesperado em sessões) e resolução da regressão QQ/Windows.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>


# Relatório de Projeto — IronClaw
## Data: 2026-06-24 | nearai/ironclaw

---

## 1. Panorama do Dia

O projeto IronClaw apresenta **alta atividade** em 24 de junho de 2026, com 20 issues e 40 PRs atualizados. A equipe demonstrou foco intenso em recursos do Reborn, especialmente automações, gerenciamento de memória e integrações (Slack, Google). Não houve lançamentos hoje, mas a velocidade de merge foi expressiva — 10 PRs fechados. Bugs críticos como regressões de tarefas e problemas de autenticação foram reportados e demandam atenção imediata. A comunidade mantém engajamento consistente com issues de alta qualidade e PRs de grande escopo sendo integrados continuamente.

---

## 2. Lançamentos

**Nenhum release detectado nas últimas 24 horas.**

| Release | Data | Mudanças |
|---------|------|----------|
| — | — | Sem releases registrados |

> ⚠️ **Nota:** O projeto não publicou releases formalizadas recentemente. O desenvolvimento avança via merges diretos no `main`.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados (10 dos 40 atualizados)

| # | PR | Escopo | Tamanho | Destaque |
|---|-----|--------|---------|----------|
| [#5166](https://github.com/nearai/ironclaw/pull/5166) | Wire dynamic Slack routine delivery | core | L | Integração Slack dinâmica no delivery hook |
| [#4969](https://github.com/nearai/ironclaw/pull/4969) | fix(google-wasm): auth required errors | core | M | Retorno estruturado de `auth_required` para Google APIs 401 |
| [#5164](https://github.com/nearai/ironclaw/pull/5164) | Restore Slack routine outbound targets | core | L | Provisionamento de Slack DM target via pairing |
| [#5133](https://github.com/nearai/ironclaw/pull/5133) | Add Reborn automation delete support | core | XL | Rota DELETE `/api/webchat/v2/automations/{id}` operacional |
| [#5152](https://github.com/nearai/ironclaw/pull/5152) | feat(slack): move setup into WebUI | core | XL | Migração completa da config Slack para WebUI |
| [#5155](https://github.com/nearai/ironclaw/pull/5155) | Add Reborn Emulate full-path calendar E2E | core | XS | Harness de teste end-to-end para calendário |
| [#5159](https://github.com/nearai/ironclaw/pull/5159) | ci(test): stop v1 monolith re-running | core | S | Remoção de redundância CI — economia de tempo de build |
| [#4859](https://github.com/nearai/ironclaw/pull/4859) | complete operator setup state | core | M | Validação de profile IDs e WebUI access tokens |

### Avanços Principais

1. **Automations Reborn maduros:** Suporte completo a delete, pause/resume (#5121, #5122) — lifecycle de automações agora funcional
2. **Slack integrado ao WebUI:** Configuração e targets migrados para interface, permitindo setup dinâmico
3. **Google WASM auth aprimorado:** Erros 401 agora retornam `auth_required` estruturado em vez de `operation_failed` opaco
4. **CI otimizado:** Remoção de redundâncias no job `tests` — composição, memória e secrets não re-executados

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários/reações)

| # | Título | Tipo | Comentários | Status | Análise |
|---|--------|------|-------------|--------|---------|
| [#5154](https://github.com/nearai/ironclaw/issues/5154) | Canary GitHub issue workflow | E2E | 2 | CLOSED | Teste de workflow automatizado — validação interna |
| [#3733](https://github.com/nearai/ironclaw/issues/3733) | Invalid Gmail token shows success toast | Bug | 1 | OPEN | UX crítica: token inválido aceito como válido |
| [#5129](https://github.com/nearai/ironclaw/issues/5129) | Always approve not working | Bug | 1 | OPEN | Feature gate quebrado em outbound_delivery_target_set |
| [#5139](https://github.com/nearai/ironclaw/issues/5139) | web/research tasks hang at init | Regression | 1 | OPEN | Regressão severa: 21/147 tarefas PinchBench afetadas |
| [#4640](https://github.com/nearai/ironclaw/issues/4640) | google-calendar list_events unordered | Bug | 1 | OPEN | API retorna eventos mais antigos em vez de próximos |

### PRs com maior atenção

| # | Título | Escopo | Comentários | Status | Relevância |
|---|--------|--------|-------------|--------|------------|
| [#5165](https://github.com/nearai/ironclaw/pull/5165) | MemoryService provider seam | reborn | — | OPEN | Facade para providers de memória intercambiáveis |
| [#5163](https://github.com/nearai/ironclaw/pull/5163) | MemoryService facade + agnostic/native split | reborn | — | OPEN | Preparação para Honcho/mem0 como providers |
| [#5149](https://github.com/nearai/ironclaw/pull/5149) | Context management — progressive tool disclosure | reborn | — | OPEN | Redução de 25.8k tokens/turn → resolve timeouts NEAR AI |
| [#5156](https://github.com/nearai/ironclaw/pull/5156) | Skill-learning approval gate + distillation | skill-learning | — | OPEN | Skills aprendidas agora requerem aprovação humana |

### Análise de Demandas

- **Automations Reborn:** Forte demanda por lifecycle completo (create, pause, resume, delete)
- **Integração Slack:** Esforço concentrado em mover configuração para WebUI com targets dinâmicos
- **Performance LLM:** PR #5149 endereça problema real de timeouts com otimização de tokens
- **Google integrations:** Múltiplos bugs de auth e ordenação de dados reportados

---

## 5. Bugs e Estabilidade

### Bugs Abertos (por severidade)

#### 🔴 Críticos

| # | Título | Impacto | Link |
|---|--------|---------|------|
| [#5139](https://github.com/nearai/ironclaw/issues/5139) | web/research tasks hang at init (0 LLM calls) | 21/147 tarefas PinchBench falham; regressão desde commit `2b2ccc55→704fcd43` | Issue |
| [#5148](https://github.com/nearai/ironclaw/issues/5148) | Turn scheduler heartbeat self-deadlock | Tarefas travam permanentemente durante extension_install | Issue |
| [#5147](https://github.com/nearai/ironclaw/issues/5147) | Flaky test blocks merge queue | Teste `trigger_poller_e2e` falha ~1 em 3 execuções | Issue |

#### 🟠 Altos

| # | Título | Impacto | Link |
|---|--------|---------|------|
| [#3733](https://github.com/nearai/ironclaw/issues/3733) | Invalid Gmail token shows success toast | Auth aceito incorretamente; UX confusa | Issue |
| [#5129](https://github.com/nearai/ironclaw/issues/5129) | Always approve não funciona | Gate de aprovação falhando em outbound_delivery_target_set | Issue |
| [#4640](https://github.com/nearai/ironclaw/issues/4640) | google-calendar list_events unordered | Retorna eventos antigos em vez de próximos; sem timeMin/orderBy | Issue |

#### 🟡 Médios

| # | Título | Impacto | Link |
|---|--------|---------|------|
| [#5151](https://github.com/nearai/ironclaw/issues/5151) | Claude fails to create automation | Model chama tools erradas em vez de trigger_create | Issue |
| [#5157](https://github.com/nearai/ironclaw/issues/5157) | Inference section missing on Railway | Settings incompletos em ambiente Railway | Issue |
| [#5146](https://github.com/nearai/ironclaw/issues/5146) | No deactivate button for extensions | UX: impossível desativar extensão pela UI | Issue |
| [#4108](https://github.com/nearai/ironclaw/issues/4108) | Nightly E2E failed | Job de teste diário falhou em E2E v2-engine | Issue |

### Observações de Estabilidade

- **Regressão #5139** é particularmente preocupante: afeta 14% das tarefas e ocorreu em apenas 10 commits
- **Teste flaky #5147** está impactando diretamente a merge queue, potencialmente bloqueando merges legítimos
- **Problema de deadlock #5148** indica possível race condition em async store locking

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Abertas

| # | Título | Escopo | Prioridade | Link |
|---|--------|--------|------------|------|
| [#5167](https://github.com/nearai/ironclaw/issues/5167) | Stop tracking `dist` in git | DevEx/Build | Alta | Issue |
| [#5120](https://github.com/nearai/ironclaw/issues/5120) | Unify gate declined semantics | UX/Consistência | Média | Issue |
| [#5144](https://github.com/nearai/ironclaw/issues/5144) | Show NEAR AI default base URL | UX/Provider | Média | Issue |
| [#5134](https://github.com/nearai/ironclaw/pull/5134) | GitHub bug workflow design docs | Process | — | PR |

### Sinais de Roadmap

1. **Model Memory como Userland Extension (#3537):**
   - PRs #5163 e #5165 estabelecem `MemoryService` facade
   - Preparação para providers alternativos (Honcho, mem0)
   - Direção clara para arquitetura de memória plugável

2. **Progressive Tool Disclosure (#5149):**
   - Redução de ~91 tool schemas por chamada para otimizar latência
   - Flag-gated, default off — rollout conservador
   - Endereça timeout real da API NEAR AI (120s)

3. **Skill Learning com Approval Gate (#5156):**
   - Skills aprendidas salvas como `pending_review`
   - Aprovação humana explícita antes de uso
   - Mitigação de riscos de skills não supervisionadas

4. **Tool Permissions + Auto-Approve (#5068):**
   - Configuração granular por tool no WebUI
   - Global auto-approve para workflows confiáveis
   - Persistência compartilhada entre UI e runtime

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Categoria | Problema | Frequência | Issue |
|-----------|----------|------------|-------|
| **Auth/Google** | Token inválido aceito como válido; erros 401 tratados como failures genéricos | Múltiplos | #3733, #4991 |
| **Performance** | Tasks web/research travam; latência excessiva por tokens | Crítica | #5139, #5149 |
| **UI/UX** | Configurações faltantes (Inference), botões ausentes (deactivate extension) | Vários | #5157, #5146 |
| **Stabilidade** | Canary E2E falha; nightly failures | Recorrente | #4108 |

### Cenários de Uso Observados

1. **Automations Reborn:** Usuários criando automações recorrentes com triggers — lifecycle completo agora funcional
2. **Google Workspace:** Integração com Drive, Calendar, Gmail — auth e listagem sendo refinados
3. **Slack Integration:** Setup via WebUI substituindo TOML manual — experiência melhorada
4. **Skill Learning:** Usuários aprendendo skills de transcripts — gate de aprovação adicionado por segurança

### Indicadores de Satisfação

- **Positivo:** 10 PRs merged demonstram ritmo saudável de entrega
- **Positivo:** Features críticas (automation lifecycle, Slack WebUI) completadas
- **Neutro:** Bugs críticos existem mas estão sendo tratados ativamente
- **Alerta:** Regressão #5139 e teste flaky #5147 requerem ação urgente

---

## 8. Backlog que Merece Atenção

### Issues sem resposta ou aguardando ação (>48h sem atualização)

| # | Título | Criado | Atualizado | Status | Prioridade |
|---|--------|--------|------------|--------|------------|
| [#3733](https://github.com/nearai/ironclaw/issues/3733) | Invalid Gmail token shows success toast | 2026-05-17 | 2026-06-23 | OPEN | 🔴 |
| [#4640](https://github.com/nearai/ironclaw/issues/4640) | google-calendar list_events unordered | 2026-06-09 | 2026-06-23 | OPEN | 🟠 |
| [#4108](https://github.com/nearai/ironclaw/issues/4108) | Nightly E2E failed | 2026-05-27 | 2026-06-23 | OPEN | 🟠 |
| [#4592](https://github.com/nearai/ironclaw/issues/4592) | First-run setup API | 2026-06-09 | 2026-06-23 | CLOSED | — |

### PRs Abertos Pendentes de Review

| # | Título | Tamanho | Risco | Idade | Link |
|---|--------|---------|-------|-------|------|
| [#5163](https://github.com/nearai/ironclaw/pull/5163) | MemoryService facade + crate split | XL | medium | Novo | PR |
| [#5149](https://github.com/nearai/ironclaw/pull/5149) | Progressive tool disclosure | XL | low | Novo | PR |
| [#5145

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório de Projeto — CoPaw (QwenPaw)
**Data:** 2026-06-24 | **Período:** Últimas 24h

---

## 1. Panorama do Dia

O projeto CoPaw (QwenPaw) mantém alta atividade de desenvolvimento com **38 issues** e **50 PRs** atualizados nas últimas 24h. Uma nova release (v1.1.12.post2) foi publicada com correções pontuais para navegação de chat e preview de arquivos. A comunidade demonstra preocupação significativa com bugs recorrentes no sistema de tarefas agendadas (cron) e estabilidade geral, enquanto multiple PRs focam em **mobile-first responsive design** para a console web. O ritmo de merge de PRs permanece intenso, indicando maturidade no processo de code review.

---

## 2. Lançamentos

### ✅ Nova Release: v1.1.12.post2

| Item | Descrição | PR |
|------|-----------|-----|
| Fix | Navegação para novo chat após deletar a sessão atual | [#5376](https://github.com/agentscope-ai/QwenPaw/pull/5376) |
| Feat | Melhoria no preview de arquivos para suportar caminhos relativos | [#5377](https://github.com/agentscope-ai/QwenPaw/pull/5377) |

**Notas:** Release de manutenção com duas mudanças pontuais. Sem breaking changes ou notas de migração. Mantém a versão em `1.1.12.post2`.

---

## 3. Progresso do Projeto

### PRs Fechados/Merged Recentemente

| PR | Título | Impacto |
|----|--------|---------|
| [#5435](https://github.com/agentscope-ai/QwenPaw/pull/5435) | refactor(memory): remove language parameter from get_memory_prompt | Limpeza de API de memória |
| [#5366](https://github.com/agentscope-ai/QwenPaw/pull/5366) | feat(console): mobile responsive layout for Agent Config | Mobile UX |
| [#5397](https://github.com/agentscope-ai/QwenPaw/pull/5397) | feat(console): adapt Settings-Models page for mobile | Mobile UX |
| [#5350](https://github.com/agentscope-ai/QwenPaw/pull/5350) | feat(ui): improve mobile responsiveness of Chat header | Mobile UX |
| [#5437](https://github.com/agentscope-ai/QwenPaw/pull/5437) | frontend M3-B unit tests (Inbox + 11 API modules) | Cobertura de testes |
| [#5433](https://github.com/agentscope-ai/QwenPaw/pull/5433) | frontend M3-A unit tests (M1 Agent hooks + Settings) | Cobertura de testes |
| [#1296](https://github.com/agentscope-ai/QwenPaw/pull/1296) | Discord channel: streaming responses | Canal Discord |

### PRs Abertos em Review

| PR | Título | Destaque |
|----|--------|----------|
| [#5321](https://github.com/agentscope-ai/QwenPaw/pull/5321) | feat(context): scroll context manager — SQLite + recall REPL | Gerenciamento de contexto revolucionário |
| [#5413](https://github.com/agentscope-ai/QwenPaw/pull/5413) | feat(browser): shared browser instance with page isolation | Multi-sessão no browser use |
| [#5440](https://github.com/agentscope-ai/QwenPaw/pull/5440) | fix: agentscope 2.0 post-merge bugs cleanup | Estabilidade pós-migração 2.0 |

**Análise:** Destaque para o PR #5321 (scroll context manager) que propõe uma abordagem inovadora usando SQLite para persistência durável de histórico de conversa, potencialmente resolvendo problemas de truncamento de contexto que aparecem em múltiplas issues.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| # | Título | Comentários | Tipo | Link |
|---|--------|-------------|------|------|
| #5262 | Built-in skills re-habilitam após upgrade | 12 | Bug | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5262) |
| #5064 | Tarefas cron não disparam corretamente | 12 | Bug | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5064) |
| #5345 | Custom OpenAI providers não suportam function calling | 6 | Bug | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5345) |
| #5317 | Python não encontrado no Tauri (Windows) | 6 | Question | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5317) |
| #3995 | Enhancement: memória e召回机制 | 3 | Feature | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/3995) |
| #4635 | Mobile-friendly client request | 3 | Feature | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/4635) |

### Análise de Demandas

**Padrões Identificados:**
1. **Migração/Upgrade:** Usuários experimentam regressões ao atualizar (skills resetadas)
2. **Tarefas Agendadas:** Sistema de cron demonstra instabilidade crônica (3+ issues relacionadas: #5064, #5235, #5398, #5402)
3. **Providers Customizados:** Limitações na API de providers OpenAI-compatíveis para function calling
4. **Mobile:** Demanda consolidada por experiência mobile (multiple PRs em paralelo indicam priorização)

---

## 5. Bugs e Estabilidade

### 🔴 Críticos (Impacto Alto)

| Bug | Descrição | Severidade | Link |
|-----|-----------|------------|------|
| #5064/#5398/#5235 | Cron scheduler para de disparar jobs durante execução normal | **Alta** | [Issues](https://github.com/agentscope-ai/QwenPaw/issues/5064) |
| #5416 | Respostas em `thinking` block causam silêncio (contexto truncado) | **Alta** | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5416) |
| #5401 | Console crasha com sessões de histórico grande (tool_use blocks) | **Alta** | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5401) |
| #5379 | Internal Server Error ao iniciar via Python | **Alta** | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5379) |

### 🟡 Moderados

| Bug | Descrição | Link |
|-----|-----------|------|
| #5262 | Built-in skills perdem estado após upgrade | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5262) |
| #5328 | Agente trava durante thinking com DeepSeek | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5328) |
| #5373 | Shell commands falham com caracteres especiais | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5373) |
| #5456 | Agent identity incorreto em requests de canal | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5456) |

### 🟢 Menores/UI

| Bug | Descrição | Link |
|-----|-----------|------|
| #5403 | Browser autofill interfere no campo de busca | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5403) |
| #5421 | Lag severo ao trocar entre agentes | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5421) |

**Alerta de Estabilidade:** O sistema de cron/scheduler demonstra problemas recorrentes com 4+ issues abertas, sugerindo necessidade de auditoria técnica na implementação de tarefas agendadas.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| Feature | Descrição | Prioridade | Link |
|---------|-----------|------------|------|
| #5441/#5439 | **Otimização de memória** — 1.4GB ao iniciar | 🔴 Alta | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5441) |
| #3995 | **Gerenciamento de ciclo de vida da memória** — archive automático | 🟡 Média | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/3995) |
| #5316 | **Recency-aware ranking** em memory_search | 🟡 Média | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5316) |
| #4635 | **Mobile client dedicado** | 🟡 Média | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/4635) |
| #5360 | **Estabilizar core app** antes de novas features | 🟡 Média | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5360) |
| #5453 | **Suporte KaTeX** para renderização LaTeX | 🟢 Baixa | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5453) |
| #5427 | **Kimi Coding Plan** configuration | 🟢 Baixa | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5427) |

### Sinais de Priorização Observados

O alto volume de **PRs de mobile responsive** (Skills Pool, Sidebar, Security, Debug, Chat) indica que a equipe está ativamente trabalhando na melhoria mobile — possivelmente como preparação para lançamento de app mobile.

O PR #5321 (scroll context manager) demonstra interesse em resolver problemas de gerenciamento de contexto de longa duração.

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais Identificadas

| Dor | Frequência | Impacto |
|-----|------------|---------|
| **Memória excessiva ao iniciar** | 2+ reports independentes | Usuários com limitação de RAM |
| **Sistema de cron não funciona** | 4+ reports | Produtividade afetada para automações |
| **Upgrade reseta configurações** | 1 report recorrente (2a vez) | Experiência frustrante |
| **Modelos customizados quebrados** | 1 report | Bloqueia adoção de providers alternativos |
| **Lag de interface** | 1 report severo | Usabilidade degradada |

### Cenários de Uso Reportados

1. **Automação corporativa:** Agentes configurando cron jobs para tarefas diárias (WeChat memory sync, summaries)
2. **Ambientes restritos:** Windows Tauri com Conda, configurações customizadas de provider
3. **Produção:** Agentes em produção com multi-session e tool calling pesado

### Sentimento Geral

**Neutro a Negativo** em questões de estabilidade, **Positivo** em relação à evolução de features e responsividade mobile.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Aguardando Triagem

| Issue | Idade | Status | Link |
|-------|-------|--------|------|
| #3995 (Memory lifecycle) | ~54 dias | Aguardando | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/3995) |
| #4635 (Mobile client) | ~33 dias | Aguardando | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/4635) |
| #5166 (Python 3.13 imghdr) | ~12 dias | Aguardando | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5166) |
| #5064 (Cron tasks) | ~14 dias | Ativo | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5064) |

### PRs Abertos Sem Review

| PR | Idade | Link |
|----|-------|------|
| #5321 (Scroll context manager) | ~5 dias | [PR](https://github.com/agentscope-ai/QwenPaw/pull/5321) |
| #5413 (Browser isolation) | ~1 dia | [PR](https://github.com/agentscope-ai/QwenPaw/pull/5413) |

---

## Métricas Resumidas do Dia

| Indicador | Valor |
|------------|-------|
| Issues ativas (24h) | 38 |
| PRs atualizados (24h) | 50 |
| Release | v1.1.12.post2 |
| Bugs críticos abertos | 4 |
| PRs de mobile responsiveness | 7+ |
| Taxa de fechamento (issues) | ~26% (10/38) |

**Saúde Geral:** Projeto ativo com boa cadência de merges, porém com problemas recorrentes de estabilidade no subsistema de cron/scheduler e preocupações de memória que merecem atenção prioritária.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-06-24

---

## 1. Panorama do Dia

O projeto ZeroClaw mantém **alta atividade** em 24 de junho de 2026, com **29 issues e 50 PRs** atualizados nas últimas 24 horas. **Nenhuma nova release** foi publicada, porém a preparação para **v0.8.2** está em curso via PR #8234. O foco principal permanece em **estabilidade do runtime, segurança de plugins WASM e multi-canal**, com 7 bugs de alta severidade resolvidos nas últimas 24h, incluindo correções críticas de SSRF (#5918), vazamento de tokens Telegram (#2091) e cron jobs duplicados (#6037). O tracker v0.9.0 (#7432) acumula **134 itens em aberto**, sinalizando escopo ambicioso para a próxima versão major.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

Contudo, o PR [#8234](https://github.com/zeroclaw-labs/zeroclaw/pull/8234) — *chore(release): bump version to v0.8.2 and add changelog* (autor: @singlerider) — está **aberto e em revisão**, indicando lançamento iminente. A release v0.8.2 consolida:

- Correções de stability do tracker [#8181](https://github.com/zeroclaw-labs/zeroclaw/issues/8181)
- Melhorias de UX no zerocode (PR #8000)
- Suporte a streaming para DingTalk (issue #8228)
- Alinhamento do clippy gate com CI (PR #8020)

> ⚠️ **Nota:** Sem release formal publicada ainda. Monitorar para confirmação de publicação.

---

## 3. Progresso do Projeto

### PRs Fechados/Merged (últimas 24h)

| # | PR | Resumo | Impacto |
|---|-----|--------|---------|
| [#8048](https://github.com/zeroclaw-labs/zeroclaw/pull/8048) | fix(runtime): keep tool-result content under context pressure; honor history_pruning config | Corrige trim de histórico que ignorava `history_pruning` configurado | **Alta** — comportamento silenciosamente incorreto corrigido |
| [#8122](https://github.com/zeroclaw-labs/zeroclaw/pull/8122) | fix(runtime): treat ENOBUFS as a recoverable accept() error | Trata `ENOBUFS` como erro recuperável no daemon IPC | **Alta** — aumenta robustez sob pressão de memória/socket |
| [#8024](https://github.com/zeroclaw-labs/zeroclaw/pull/8024) | feat(channels/telegram): dispatch media groups as single album | Albums Telegram agora dispatch como mensagem única | **Média** — UX melhorada em grupos Telegram |
| [#8025](https://github.com/zeroclaw-labs/zeroclaw/pull/8025) | feat(channels/wecom): proactive + attachment messaging | Corrige envio de attachments no WeCom WebSocket | **Média** — feature completa para WeCom |
| [#8027](https://github.com/zeroclaw-labs/zeroclaw/pull/8027) | feat(channels/qq): thread passive group replies via refer_msg | QQ agora threading replies via `refer_msg` | **Média** — alinhamento com comportamento de outros canais |
| [#8016](https://github.com/zeroclaw-labs/zeroclaw/pull/8016) | feat(scripts): add agent-preflight pre-PR validation gate | Novo script `agent-preflight.sh` para validação pré-PR | **Processo** — padroniza qualidade de contribuições |
| [#8020](https://github.com/zeroclaw-labs/zeroclaw/pull/8020) | ci(quality-gate): align strict clippy gate with CI | Alinha gate local com jobs CI `--features ci-all` | **Processo** — reduz falsos positivos em PRs |
| [#8223](https://github.com/zeroclaw-labs/zeroclaw/pull/8223) | fix(scripts): use act's GoGitActionCache | Usa cache nativo do act para resolver SHAs de actions | **DevEx** — acelera workflows locais |
| [#7345](https://github.com/zeroclaw-labs/zeroclaw/pull/7345) | fix(loop): gate path-listing tool results from vision routing | Evita que paths de imagens locais disparem routing de visão | **Alta** — correção de routing incorreto |
| [#7964](https://github.com/zeroclaw-labs/zeroclaw/pull/7964) | [Bug]: context_compression.summary_model provider-specific | Corrige summary model em profile compartilhado cross-provider | **Alta** — silent runtime failure corrigido |

### PRs Abertos com Alto Engajamento

| # | PR | Resumo | Status |
|---|-----|--------|--------|
| [#8234](https://github.com/zeroclaw-labs/zeroclaw/pull/8234) | chore(release): bump version to v0.8.2 | Preparação da release v0.8.2 | 🔴 **Pronto para merge** |
| [#7946](https://github.com/zeroclaw-labs/zeroclaw/pull/7946) | feat(runtime): add model context window ctx bar | Barra de uso de contexto no TUI e Chat Gateway | 🟡 Size L — revisão necessária |
| [#8109](https://github.com/zeroclaw-labs/zeroclaw/pull/8109) | fix(runtime): cascade config alias renames safely | Renames de aliases via config cascade | 🟡 Correção de integridade de config |
| [#8235](https://github.com/zeroclaw-labs/zeroclaw/pull/8235) | feat(skills): add per-agent prompt_injection_mode override | Override per-agente do modo de injeção de prompt | 🟢 Novo, em revisão |

---

## 4. Temas Quentes da Comunidade

### Issues/PRs com Mais Comentários

**🔴 #5919** — `[CLOSED] plugins: zc_env_read allowlist — restrict plugin access to env vars`  
🔗 [Issue #5919](https://github.com/zeroclaw-labs/zeroclaw/issues/5919) | 6 comentários | **Closed**  
📌 **Demanda**: Plugins WASM com permissão `env_read` podiam ler **qualquer** variável de ambiente. Solicitação de allowlist para restringir acesso a vars específicas (ex: `FAL_API_KEY`).  
✅ **Resolução**: Issue fechada — sinaliza que o PR correspondente foi merged.

---

**🔴 #8193** — `[CLOSED] bug(zerocode): MCP tools/tool_search missing from TUI sessions while gateway sees them`  
🔗 [Issue #8193](https://github.com/zeroclaw-labs/zeroclaw/issues/8193) | 4 comentários | **Closed** (S1 - workflow blocked)  
📌 **Demanda**: Servidores MCP conectam e expõem tools, mas sessões TUI do Zerocode não recebem as tools descobertas. Impacto direto na experiência de usuários que usam MCP para estender capacidades.  
✅ **Resolução**: Corrigido — issue fechada com 4 comentários de investigação.

---

**🟡 #8075** — `[OPEN] Keybinds vs. OS globals`  
🔗 [Issue #8075](https://github.com/zeroclaw-labs/zeroclaw/issues/8075) | 2 comentários | **In Progress**  
📌 **Demanda**: Conflito entre keybinds default do Zerocode e globais do macOS (ex: `ctrl+up`). Limitações de terminais impedem certas bindas razoáveis em PC.  
💡 **Sinal de roadmap**: Suporte a keybinds customizáveis e resolução de conflitos com OS.

---

**🟡 #8170** — `[OPEN] RFC: In-app upgrade with optional supervised restart from the web dashboard`  
🔗 [Issue #8170](https://github.com/zeroclaw-labs/zeroclaw/issues/8170) | 2 comentários | RFC em análise  
📌 **Demanda**: Dashboard web mostra versão estática; atualização requer CLI. RFC propõe upgrade in-app com restart supervisionado.  
💡 **Sinal de produto**: Evolução do dashboard para interface de admin completa.

---

**🟡 #8125** — `[OPEN] [Feature]: Automatically set risk profile to yolo in quickstart`  
🔗 [Issue #8125](https://github.com/zeroclaw-labs/zeroclaw/issues/8125) | 2 comentários | Needs maintainer review  
📌 **Demanda**: Quickstart deve aplicar preset `yolo` automaticamente (assim como `unbounded` é forçado no runtime), evitando que novos usuários se limitem inadvertidamente.  
💡 **Sinal UX**: Onboarding mais amigável para novos usuários.

---

**🟡 #8226** — `[OPEN] [Feature]: support per-agent custom environment variables configuration`  
🔗 [Issue #8226](https://github.com/zeroclaw-labs/zeroclaw/issues/8226) | 1 comentário | **Novo**  
📌 **Demanda**: Bloco configurável de env vars por agente, permitindo injeção segura de contexto de execução.  
💡 **Sinal arquitetura**: Isolamento de contexto por agente (relevante para multi-tenant).

---

**🟡 #8231** — `[OPEN] feat(approval): route tool approvals to a distinct approver channel`  
🔗 [PR #8231](https://github.com/zeroclaw-labs/zeroclaw/pull/8231) | Novo  
📌 **Demanda**: Aprovações HITL routeiam apenas para o canal que disparou a run. RFC propõe roteamento para canal distinto (ex: agente Slack approve iniciado via Telegram).  
💡 **Sinal segurança/enterprise**: Suporte a workflows de aprovação cross-channel.

---

## 5. Bugs e Estabilidade

### Bugs Resolvidos (Últimas 24h)

| Severidade | # | Descrição | Link |
|------------|---|-----------|------|
| **S1 - Workflow blocked** | #8193 | MCP tools ausentes no TUI enquanto gateway vê | [Issue #8193](https://github.com/zeroclaw-labs/zeroclaw/issues/8193) |
| **S1 - Workflow blocked** | #8151 | Anexo de imagem diferida perde referência recarregável no Matrix | [Issue #8151](https://github.com/zeroclaw-labs/zeroclaw/issues/8151) |
| **S0 - Data loss / Security** | #8013 | Desabilitar agente não para canal Discord bound | [Issue #8013](https://github.com/zeroclaw-labs/zeroclaw/issues/8013) |
| **S1 - Workflow blocked** | #8202 | `refreshed_new_session_system_prompt` exclui bundled_skill | [Issue #8202](https://github.com/zeroclaw-labs/zeroclaw/issues/8202) |
| **S2 - Degraded** | #6037 | Cron jobs lançados múltiplas vezes enquanto ainda rodando | [Issue #6037](https://github.com/zeroclaw-labs/zeroclaw/issues/6037) |
| **S2 - Degraded** | #8069 | RPC-triggered reload reinicia gateway antes de listener liberar porta | [Issue #8069](https://github.com/zeroclaw-labs/zeroclaw/issues/8069) |
| **S2 - Degraded** | #7742 | Refresh system prompt após tool dispatcher swap não ocorre | [Issue #7742](https://github.com/zeroclaw-labs/zeroclaw/issues/7742) |
| **S2 - Degraded** | #7964 | context_compression.summary_model é provider-specific em shared profile | [Issue #7964](https://github.com/zeroclaw-labs/zeroclaw/issues/7964) |
| **S3 - Minor** | #2091 | Telegram poll errors logam segmentos de URL com Bot API token | [Issue #2091](https://github.com/zeroclaw-labs/zeroclaw/issues/2091) |

### Bugs Abertos (Não Resolvidos)

| Severidade | # | Descrição | Link |
|------------|---|-----------|------|
| **S1 - Workflow blocked** | #8054 | System prompt tool-availability deve casar com tools efetivas por turno | [Issue #8054](https://github.com/zeroclaw-labs/zeroclaw/issues/8054) |
| **S1 - Workflow blocked** | #8151 | Anexo de imagem diferida perde referência no Matrix | [Issue #8151](https://github.com/zeroclaw-labs/zeroclaw/issues/8151) |
| **S1 - Workflow blocked** | #8202 | Bundled skills excluídas de new sessions | [Issue #8202](https://github.com/zeroclaw-labs/zeroclaw/issues/8202) |
| **S2 - Degraded** | #8219 | gpt-oss-120b on Groq falha em multi-turn tool loops (2º request) | [Issue #8219](https://github.com/zeroclaw-labs/zeroclaw/issues/8219) |
| **S2 - Degraded** | #8236 | `voice_wake.rs` ChannelMessage literal missing `subject` — quebra --all-features | [Issue #8236](https://github.com/zeroclaw-labs/zeroclaw/issues/8236) |

### 🔴 Segurança Corrigida Recentemente

| # | Vulnerabilidade | Link |
|---|-----------------|------|
| #5918 | SSRF protection para `zc_http_request` host function em plugins WASM | [Issue #5918](https://github.com/zeroclaw-labs/zeroclaw/issues/5918) |
| #5919 |

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*