# Resumo diário do ecossistema de agentes de IA 2026-06-06

> Issues: 0 | PRs: 1 | Projetos cobertos: 7 | Gerado em: 2026-06-05 21:21 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório do Projeto NullClaw — 2026-06-06

---

## 1. Panorama do Dia

O projeto NullClaw apresenta **atividade mínima nas últimas 24 horas**, com zero issues abertas ou fechadas e apenas uma pull request em статус aberto. O repositório não registrou novas releases. A manutenção parece estar em modo de baixo volume, com a comunidade focada em expansão de provedores de IA. O ecossistema do projeto continua estável, sem sinal de regressões ou problemas críticos reportados.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24 horas.**

O projeto não emitiu novas versões. Não há notas de migração ou breaking changes a reportar neste período.

---

## 3. Progresso do Projeto

### PRs Abertas/Mergiadas Hoje

| # | Título | Status | Autor | Impacto |
|---|--------|--------|-------|---------|
| [#947](https://github.com/nullclaw/nullclaw/pull/947) | feat(providers): add Evolink as an OpenAI-compatible provider | **OPEN** | EvoLinkAI | Expansão de provedores |

**Análise da PR #947:**
A PR propõe a adição do **Evolink** como provedor compatível com OpenAI. O Evolink é um gateway multi-modelo que expõe GPT-5, Gemini, DeepSeek, Doubao, MiniMax e outros através de um endpoint `/v1/chat/completions` padronizado com autenticação Bearer-token.

**Impacto potencial:**
- Diversificação de provedores para usuários do NullClaw
- Integração simplificada com múltiplos modelos de IA através de uma interface unificada
- Baixa frição de implementação (compatível com a arquitetura existente de provedores OpenAI-like)

---

## 4. Temas Quentes da Comunidade

**Nenhuma issue com atividade recente registrada.**

A ausência de issues ativas indica que:
- Não há discussões abertas sobre problemas ou features
- A comunidade pode estar em período de baixa engajamento
- Possível necessidade de estímulo à participação

---

## 5. Bugs e Estabilidade

**Nenhum bug reportado nas últimas 24 horas.**

O projeto não apresenta:
- ❌ Regressões críticas
- ❌ Crashes reportados
- ❌ Problemas de estabilidade

**Status geral:** Estável

---

## 6. Pedidos de Features e Sinais de Roadmap

### Feature em Desenvolvimento

**[#947](https://github.com/nullclaw/nullclaw/pull/947) — Adição do provedor Evolink**

**Sinais de roadmap identificados:**
- A comunidade demonstra interesse em **diversificação de provedores**
- Provedores multi-modelo estão gaining traction (Evolink agrega GPT-5, Gemini, DeepSeek, Doubao, MiniMax)
- Integração via padrão OpenAI-compatible permanece como preferência de arquitetura

**Tendencia inferida:** O roadmap do NullClaw parece priorizar a expansão do ecossistema de provedores compatíveis, facilitando a adoção por usuários que desejam migrar entre diferentes provedores de IA sem alterar código.

---

## 7. Resumo de Feedback dos Usuários

**Sem feedback explícito registrado nas últimas 24 horas.**

**Observações baseadas na atividade do projeto:**
- A ausência de issues sugere que o core do projeto está atendendo expectativas básicas
- O interesse em novos provedores (Evolink) indica demanda por flexibilidade de escolha de modelos
- Não há indicadores de insatisfação ou dores críticas reportadas

---

## 8. Backlog que Merece Atenção

### PRs Abertas com Potencial Impacto

| # | Título | Idade | Prioridade Sugerida |
|---|--------|-------|---------------------|
| [#947](https://github.com/nullclaw/nullclaw/pull/947) | feat(providers): add Evolink | 1 dia | **Alta** |

**Recomendação:** A PR #947, embora aberta há apenas 1 dia, representa uma adição de valor significativo ao projeto. Recomenda-se:

1. **Revisão e feedback ativo** do mantenedor para não desmotivar o contribuidor
2. Verificação de compliance com guidelines de contribution
3. Testes de integração com os modelos anunciados (GPT-5, Gemini, DeepSeek, etc.)

**Sem issues antigas pendentes** — não há backlog acumulado de issues sem resposta.

---

## Indicadores de Saúde do Projeto

| Métrica | Status | Tendência |
|---------|--------|-----------|
| Atividade de Issues | 🟡 Baixa | Estável |
| Atividade de PRs | 🟢 Moderada | — |
| Releases | 🔴 Nenhuma | — |
| Bugs Reportados | 🟢 Zero | Positivo |
| Backlog Crítico | 🟢 Limpo | Positivo |

---

**Próxima Atualização:** 2026-06-07

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo do Ecossistema de Agentes de IA Open Source

**Data de referência:** 2026-06-06 | **Projetos analisados:** 7

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **dois perfis distintos de maturidade** neste período. De um lado, projetos como **PicoClaw, NanoBot e CoPaw** demonstram ciclos de desenvolvimento altamente produtivos com taxas de resolução de issues acima de 40% em 24h, indicando comunidades ativas e processos de review eficientes. Do outro, **Hermes Agent e ZeroClaw** operam em volumes massivos (50 issues + 50 PRs atualizados/dia) que, embora evidenciem engajamento robusto, geram acúmulo de backlog e PRs bloqueados aguardando review de maintainers. **NullClaw** permanece em modo de manutenção de baixo volume, enquanto **IronClaw** concentra esforços em hardening arquitetural do framework Reborn sem novos releases formais. A tendência comum é a **expansão de provedores de IA e canais de comunicação**, com segurança emergindo como tema transversal em todos os projetos.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | Releases | Saúde | Tendência |
|---------|--------------|-----------|----------|-------|-----------|
| **NullClaw** | 0 | 1 open | 0 | 🟡 Estável | Estagnada |
| **NanoBot** | 10 atualizadas | 16 open / 11 merged | 0 | 🟢 Ativa | Crescente |
| **Hermes Agent** | 50 atualizadas | 50 atualizadas | 0 | 🟡 Acumulada | Estável-Alta |
| **PicoClaw** | 7 processadas | 27 atualizadas / 25 merged | 1 nightly | 🟢 Excelente | Pico |
| **IronClaw** | 31 atualizadas | 50 atualizadas / 15 merged | 0 | 🟡 Estável | Consolidação |
| **CoPaw** | 30 atualizadas | 24 atualizadas / 16 merged | 0 | 🟢 Estável | Crescente |
| **ZeroClaw** | 50 atualizadas | 50 atualizadas / 20 merged | 0 | 🟡 Acumulada | Estável-Alta |

**Métricas agregadas do ecossistema:**
- **Total de atividade (issues + PRs):** ~218 atualizações em 24h
- **Releases formais:** 0 (apenas 1 nightly build — PicoClaw)
- **Bugs críticos em aberto:** 12+ distribuídos entre projetos
- **Taxa de fechamento médio:** ~50% (excluindo NullClaw)

---

## 3. Posicionamento do Projeto Principal

### PicoClaw — Líder em Eficiência Operacional

**Vantagens competitivas:**

| Dimensão | PicoClaw | Média do Ecossistema |
|---------|----------|---------------------|
| Taxa de resolução (24h) | **93%** (25/27 PRs) | ~50% |
| Bugs críticos resolvidos | **2** (incluindo 1 segurança) | 0-1 |
| Atualizações de dependências | **8** | 2-3 |
| Tempo médio de resolução | **<24h** | 2-5 dias |

**Diferenças técnicas:**
- **Arquitetura JSONL store** com foco em crash-consistency (PRs #2907, #2913)
- **Segurança integrada ao core** via CSRF protection e path traversal validation (PR #2900)
- **Canal OneBot** como diferencial para comunidades QQ/chinesas
- **Evolution Mode** para automação de código com drafts

**Tamanho da comunidade:** Médio-alto (27 PRs/24h, 7 issues processadas) — posiciona-se entre NanoBot (altamente focado) e Hermes/ZeroClaw (volume massivo).

---

## 4. Focos Técnicos Compartilhados

### 4.1 Expansão de Provedores de IA

| Projeto | Provedor em integração | Tipo |
|---------|----------------------|------|
| NullClaw | Evolink (GPT-5, Gemini, DeepSeek, Doubao, MiniMax) | OpenAI-compatible |
| NanoBot | Exa (web search), Azure gateways | Search + API |
| Hermes Agent | DeepSeek V4 Flash pricing | Custo |
| CoPaw | Yuanbao (protobuf issues) | Canal nativo |
| ZeroClaw | Ollama Cloud, z.ai, Kimi, MiniMax OAuth | Autenticação |

**Síntese:** O ecossistema converge para **interoperabilidade multi-provider**, com OpenAI-compatible como padrão de facto.

### 4.2 Segurança como Feature transversal

| Projeto | Iniciativa de segurança | Status |
|---------|------------------------|--------|
| PicoClaw | CSRF + path traversal + security headers | ✅ Merged |
| Hermes Agent | Fail-closed em blocklist import, BlueBubbles privacy fix | ✅ Merged |
| CoPaw | File preview sandboxing (WORKING_DIR) | 🔄 Em review |
| ZeroClaw | OIDC auth, shell confirmation tier, pluggable security layer | 📋 RFC |
| IronClaw | Hook framework activations (cross-tenant leakage fix) | 🔄 Em progresso |

**Síntese:** Segurança evolui de **hardening reativo** (PicoClaw) para **arquitetura plugável** (ZeroClaw), indicando maturidade crescente do ecossistema.

### 4.3 Estabilidade de Canais e Integrações

| Canal | Projetos afetados | Problema |
|-------|-------------------|----------|
| WeCom | IronClaw | Aprovação em grupo, onboarding events |
| Yuanbao | CoPaw | Protobuf breakage (5 bugs críticos) |
| Desktop (Electron) | Hermes Agent | 6 bugs P2-P3 (crashes, IME CJK) |
| Docker/Matrix | Hermes Agent | Gateway travamento |
| OneBot | PicoClaw | Group chat routing (✅ corrigido) |

**Síntese:** Integrações com canais nativos (WeCom, Yuanbao, Desktop) concentram a maior parte dos bugs de estabilidade, sugerindo que **adaptações a APIs proprietárias** são o principal vetor de instabilidade.

---

## 5. Análise de Diferenciação

### Perfil de Público-Alvo

| Projeto | Público primário | Arquitetura diferenciada |
|---------|------------------|------------------------|
| **NullClaw** | Usuários avançados buscando minimalismo | Gateway multi-modelo leve |
| **NanoBot** | Desenvolvedores de automação | Session manager + WebUI |
| **Hermes Agent** | Usuários enterprise multi-plataforma | Desktop-first, CLI maduro |
| **PicoClaw** | Comunidades chinesas (OneBot/QQ) | JSONL store + Evolution |
| **IronClaw** | Operadores de workflows complexos | Reborn framework + durability |
| **CoPaw** | Usuários de desktop (Tauri) | Browser automation + sandbox |
| **ZeroClaw** | Organizações com necessidades diversas | Plugin architecture + 5 novos canais |

### Diferenças Arquiteturais

| Aspecto | Abordagem | Projetos representatives |
|---------|-----------|--------------------------|
| **Persistência** | JSONL store | PicoClaw |
| **Durability** | Durable completion delivery + idempotência | IronClaw |
| **Segurança** | Pluggable enforcement layer | ZeroClaw |
| **Desktop** | Electron wrapper | Hermes Agent |
| **Plugin** | Decoupled loader initialization | CoPaw |
| **Channels** | Adapter pattern (IRC, ActivityPub, REST) | ZeroClaw |

---

## 6. Tração e Maturidade da Comunidade

### Ranking de Produtividade (24h)

| Rank | Projeto | Métrica de produtividade | Avaliação |
|------|---------|--------------------------|-----------|
| 🥇 | **PicoClaw** | 25 PRs merged, 5 bugs críticos resolvidos | Consolidação de qualidade |
| 🥈 | **NanoBot** | 11 PRs merged, 4 issues fechadas | Sprint produtiva |
| 🥉 | **CoPaw** | 16 PRs merged, 12 issues fechadas | Crescimento sustentável |
| 4 | **IronClaw** | 15 PRs merged (hardening arquitetural) | Maturidade técnica |
| 5 | **ZeroClaw** | 20 PRs merged (5 canais novos) | Expansão agressiva |
| 6 | **Hermes Agent** | ~6 PRs merged (backlog acumulado) | Needs triage |
| 7 | **NullClaw** | 1 PR aberta | Modo manutenção |

### Indicadores de Maturidade

| Indicador | PicoClaw | NanoBot | Hermes | IronClaw | CoPaw | ZeroClaw |
|-----------|----------|---------|--------|----------|-------|----------|
| **Test coverage** | ✅ 129 testes adicionados | ⚠️ Testes pendentes | ⚠️ CI falhando | ⚠️ E2E nightly quebrado | ⚠️ macOS Tauri sem suporte Intel | ⚠️ CI/CD container build pendente |
| **Release cadence** | ✅ Nightly regular | ❌ Nenhuma | ❌ Nenhuma | ❌ Última: 0.29.1 | ❌ Última: v1.1.10 | ❌ Nenhuma |
| **Bug resolution speed** | ✅ <24h | ✅ <24h | ⚠️ Variável | ⚠️ Alta severidade aguardando | ⚠️ Yuanbao bugs críticos | ⚠️ 7 issues bloqueadas |
| **Backlog management** | ✅ Limpo | ✅ Controlado | ❌ 44 issues abertas | ⚠️ WeCom validation backlog | ⚠️ 4 issues >5 dias | ❌ 7 issues sem resposta |

---

## 7. Sinais de Tendência

### 7.1 Tendências de Mercado Extraídas

**1. Multi-Provider como Expectativa Base**
> "A comunidade demonstra forte interesse em expandir a compatibilidade com provedores de IA e busca" — NanoBot
> "Diversificação de provedores para usuários" — NullClaw

O mercado evolui de **lock-in com provedores únicos** para **abstração de provider** como feature mandatória. Provedores OpenAI-compatible (Evolink, gateways Azure) são o denominador comum.

**2. Segurança Transicionando de Feature para Arquitetura**
> "Security enforcement layer as pluggable interface" — ZeroClaw RFC
> "Fail-closed when provider blocklist import fails" — Hermes Agent P1

A segurança evolui de **hardening ad-hoc** para **interfaces plugáveis** que permitem customização por ambiente (enterprise vs. consumer).

**3. Desktop como Superfície de Usuário Prioritária**
> "Desktop crashes on NVIDIA 580+ drivers" — Hermes Agent
> "Desktop language switching (JA/ZH-Hant)" — Hermes Agent PR
> "Desktop misses MCP tools" — Hermes Agent

Desktop emerge como **cliente universal** para agentes de IA, competindo com CLI/TUI. A instabilidade observada (6 bugs P2-P3 em Hermes) indica que o mercado ainda está amadurecendo essa superfície.

**4. Durability e Exactly-Once Delivery como Requisitos Enterprise**
> "Exactly-once delivery" — IronClaw PR #4349
> "Idempotency for subagent completion result delivery" — IronClaw PR #4437

O ecossistema converge para **garantias de entrega** equivalentes a sistemas de mensageria, essencial para automação de workflows críticos.

**5. Interoperabilidade via Padrões Abertos**
> "A2A agent discovery (.well-known/agent-card.json)" — ZeroClaw P2
> "OpenAI-compatible wiring" — IronClaw
> "OpenAI-compatible provider" — NullClaw

Adoção de padrões como **A2A (Agent-to-Agent)** e **OpenAI API compatibility** indica movimento do mercado em direção a ecossistemas interoperáveis.

**6. Canais Alternativos de Comunicação**
> "5 novos canais: Mastodon, Lemmy, Zulip, Rocket.Chat, Twitch" — ZeroClaw
> "WeCom group chat approval reply does not work" — IronClaw

Expansão para **Fediverse (ActivityPub)**, **IRC adapters** e **plataformas corporativas** (WeCom, Rocket.Chat) evidencia diversificação além de Slack/Discord.

---

## 8. Recomendações Estratégicas

### Para Desenvolvedores

| Prioridade | Recomendação | Base |
|------------|--------------|------|
| 🔴 Alta | Priorizar resolução de bugs críticos de Yuanbao (CoPaw) e WeCom (IronClaw) | 5+ bugs do mesmo subsistema |
| 🟡 Média | Adotar padrão OpenAI-compatible para novos provedores | 4 projetos convergindo |
| 🟡 Média | Implementar testes de regressão para canais (E2E quebrado em IronClaw) | Risco de supply chain |
| 🟢 Baixa | Considerar arquitetura plugável de segurança | ZeroClaw RFC |

### Para Decisores Técnicos

| Cenário | Projeto recomendado | Justificativa |
|---------|---------------------|---------------|
| **Automação de comunidades chinesas** | PicoClaw | Canal OneBot maduro, Evolution Mode |
| **Workflows enterprise com durability** | IronClaw | Exactly-once delivery, Reborn framework |
| **Desktop como cliente universal** | Hermes Agent | Investimento contínuo em GUI Electron |
| **Interoperabilidade máxima** | ZeroClaw | 5 novos canais em 24h, padrão A2A |
| **Minimalismo e integração rápida** | NullClaw | Gateway leve, baixa fricção |

---

**Conclusão:** O ecossistema de agentes de IA open source demonstra vitalidade com dois polos de atividade — **PicoClaw/NanoBot** focados em qualidade e estabilidade, e **ZeroClaw/Hermes** em escala e expansão de features. A tendência de convergência para padrões abertos (OpenAI-compatible, A2A) e segurança como arquitetura (não como feature) posiciona o ecossistema para adoção enterprise. O principal risco é a **estabilidade de canais proprietárias** (WeCom, Yuanbao, Desktop) que concentram a maioria dos bugs críticos em aberto.

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Report — 2026-06-06

## 1. Panorama do dia

NanoBot apresenta **alta atividade comunitária** no período analisado, com 10 issues e 27 PRs atualizados nas últimas 24h. O projeto demonstra vigoroso desenvolvimento em múltiplas frentes: correções de bugs críticos no session manager e WebUI, evoluções de provedores (Exa, OpenAI, Azure) e preparação de funcionalidades para desktop e colaboração entre agentes. **Nenhum release foi publicado**, sugerindo que as mudanças estão em pipeline de revisão. A saúde geral do projeto é positiva, com contributors ativos resolvendo issues antigas e introduzindo enhancements estruturais.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

Não há changelogs ou notas de migração disponíveis para este período. O projeto mantém sua última versão estável sem interrupções.

---

## 3. Progresso do projeto

### PRs fechados/merged (11 total)

| PR | Título | Impacto |
|----|--------|---------|
| [#4210](https://github.com/HKUDS/nanobot/pull/4210) | Fix desktop restart token and replay gaps | **Crítico** — Corrige perda de tokens e gaps em replays após restart nativo do engine desktop |
| [#3968](https://github.com/HKUDS/nanobot/pull/3968) | feat(command): add /skill slash command | **Alto** — Adiciona comando `/skill` para listar skills habilitadas, resolvendo #3959 |
| [#4197](https://github.com/HKUDS/nanobot/pull/4197) | Fix DM pairing for Weixin and Telegram | **Alto** — Corrige pareamento de mensagens diretas em dois canais importantes |
| [#4201](https://github.com/HKUDS/nanobot/pull/4201) | fix(webui): persist user messages for refresh | **Alto** — Resolve perda de mensagens do usuário ao atualizar navegador (relacionado a #4200) |
| [#4190](https://github.com/HKUDS/nanobot/pull/4190) | Improve tool call validation strictness | **Médio** — Validação mais rigorosa de tool calls com sugestões de correção |

**Destaque:** A correção do bug de mensagens órfãs em `find_legal_message_start` (#4215, em aberto) representa uma melhoria arquitetural significativa no gerenciamento de sessões.

---

## 4. Temas quentes da comunidade

### Issues com maior engajamento

| Issue | Título | Comentários | Tipo |
|-------|--------|-------------|------|
| [#4212](https://github.com/HKUDS/nanobot/issues/4212) | Prevent re-injected history from reinforcing unconfirmed inferences | 0 | Enhancement |
| [#4204](https://github.com/HKUDS/nanobot/issues/4204) | Add extra_query support for OpenAI-compatible providers | 1 | Enhancement |
| [#3959](https://github.com/HKUDS/nanobot/issues/3959) | /skill list disabled skills | 4 | Bug (já fechado) |

### Análise das demandas principais

1. **Suporte a provedores adicionais (#4204, #4132, #4213):** A comunidade demonstra forte interesse em expandir a compatibilidade com provedores de IA e busca. A adição do Exa como provider de busca (#4213) e suporte a query params extras para gateways Azure (#4204) indica tendência de **interoperabilidade multi-provider**.

2. **Colaboração entre agentes (#3992):** O PR de cross-instance messaging permanece aberto, sinalizando demanda por arquiteturas multi-agente mais sofisticadas.

3. **Melhorias no desktop (#4195):** A primeira surface desktop aberta sugere foco estratégico em experiência desktop nativa.

---

## 5. Bugs e estabilidade

### Bugs críticos/alta severidade

| Issue | Severidade | Descrição | Status |
|-------|------------|-----------|--------|
| [#4211](https://github.com/HKUDS/nanobot/issues/4211) | **Alta** | SDK deixa stdio MCP aberto → `RuntimeError: exit cancel scope in different task` no shutdown | Aberta |
| [#4203](https://github.com/HKUDS/nanobot/issues/4203) | **Alta** | `find_legal_message_start` descarta TODAS as mensagens quando tool results órfãos seguem mensagem do usuário | Aberta |
| [#1946](https://github.com/HKUDS/nanobot/issues/1946) | **Alta** | Erro em Matrix test na branch main (desde 2026-03-13) | Aberta |

### Bugs resolvidos recentemente

| Issue | Descrição |
|-------|-----------|
| [#3959](https://github.com/HKUDS/nanobot/issues/3959) | Comando `/skill` listava skills desabilitadas — **corrigido via #3968** |
| [#4200](https://github.com/HKUDS/nanobot/issues/4200) | Perda de mensagens do usuário ao atualizar browser — **corrigido via #4201** |
| [#4196](https://github.com/HKUDS/nanobot/issues/4196) | Suporte a geração de imagens Volcengine — **marcado como duplicata** |

**Alerta:** A issue #4211 representa um crash legítimo no shutdown do SDK que pode afetar integrações em produção. Recomenda-se priorização.

---

## 6. Pedidos de features e sinais de roadmap

### Novas features solicitadas

| Issue/PR | Feature | Relevância estratégica |
|----------|---------|----------------------|
| [#4212](https://github.com/HKUDS/nanobot/issues/4212) | Prevenir que inferências não confirmadas sejam reforçadas pelo histórico | Consolidador de memória |
| [#4204](https://github.com/HKUDS/nanobot/issues/4204) | `extra_query` para provedores OpenAI-compatíveis | Suporte Azure gateways |
| [#4198](https://github.com/HKUDS/nanobot/issues/4198) | Configurabilidade de `fail_on_tool_error` para subagentes | Flexibilidade de agentes |
| [#4213](https://github.com/HKUDS/nanobot/pull/4213) | Adicionar Exa como provider de busca web | Diversificação de search |
| [#4170](https://github.com/HKUDS/nanobot/pull/4170) | Ações pós-processamento configuráveis para IMAP | Gerenciamento de email |

### Sinais de roadmap identificados

1. **Desktop-first:** Investimento contínuo em surfaces desktop (#4195, #4210) sugere prioridade em experiência desktop nativa
2. **Multi-provider:** Expansão de suporte a provedores de IA e busca indica estratégia de interoperabilidade
3. **Agent collaboration:** PR #3992 (cross-agent messaging) pode indicar direção para arquiteturas distribuídas

---

## 7. Resumo de feedback dos usuários

### Dores reportadas

| Dor | Impacto | Solução em curso |
|-----|---------|-----------------|
| **Perda de mensagens** ao atualizar browser | Alta | #4201 (fix) |
| **Skills desabilitadas** listadas no comando `/skill` | Média | #3968 (merged) |
| **Configuração rígida** de `fail_on_tool_error` em subagentes | Média | #4198 (solicitado) |
| **Incompatibilidade** com gateways Azure que requerem `api-version` | Alta | #4204 (solicitado) |

### Cenários de uso identificados

- **Integração SDK:** Usuários embedding NanoBot via SDK com servers MCP stdio experimentam crashes de shutdown
- **Email agentic:** Caixas de email gerenciadas por agentes acumulam mensagens processadas sem cleanup automático
- **Busca web diversificada:** Usuários solicitam alternativas a provedores de busca proprietários

---

## 8. Backlog que merece atenção

### Issues sem resposta há >30 dias

| Issue | Idade | Prioridade | Título |
|-------|-------|------------|--------|
| [#1946](https://github.com/HKUDS/nanobot/issues/1946) | ~85 dias | **Alta** | Matrix test error on `main` |
| [#1408](https://github.com/HKUDS/nanobot/pull/1408) | ~96 dias | Média | Add unit-test workflow with coverage gate |
| [#1284](https://github.com/HKUDS/nanobot/pull/1284) | ~99 dias | Média | Add CI workflow with quality checks and coverage |

### Recomendações

1. **Priorizar #1946** — Teste de matriz quebrado na main representa risco de regressions
2. **Revisar PRs de CI (#1408, #1284)** — Ambos adicionam pipelines de teste e coverage; unificação ou rejeição clarificaria estratégia de QA
3. **Avaliar #4211** — Crash de shutdown no SDK pode afetar ecossistema de integrações

---

## Métricas de resumo (últimas 24h)

| Métrica | Valor | Tendência |
|---------|-------|-----------|
| Issues abertas/ativas | 6 | Neutra |
| Issues fechadas | 4 | Positiva |
| PRs abertos | 16 | Estável |
| PRs merged/fechados | 11 | **Alta** |
| Novos releases | 0 | N/A |
| Bugs críticos abertos | 2 | Atenção necessária |

**Conclusão geral:** NanoBot demonstra saúde de projeto ativa com ciclo de desenvolvimento produtivo. Bugs críticos (particularmente no SDK e session manager) requerem atenção para garantir estabilidade. O pipeline de features para desktop e multi-provider indica direção estratégica clara.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-06-06

## 1. Panorama do dia

O projeto Hermes Agent manteve alta atividade nas últimas 24h, com **50 issues e 50 PRs atualizados**, indicando uma comunidade engajada e ciclo de desenvolvimento intenso. Não houve lançamentos de novas versões (0 releases). O volume de issues abertas (44) supera significativamente as fechadas (6), sugerindo um acúmulo de backlog que pode requerer triagem. A base de código apresenta instabilidade notável na plataforma Desktop (Windows/macOS/Linux) e problemas de segurança relacionados ao sistema de aprovação de ferramentas, o que demanda atenção prioritária da equipe de manutenção.

---

## 2. Lançamentos

**Nenhum release nas últimas 24h.**

O projeto não publicou novas versões entre 2025-06-05 e 2026-06-06. Recomenda-se verificar o histórico de releases no repositório para identificar a versão estável mais recente.

---

## 3. Progresso do Projeto

### PRs closed/merged nas últimas 24h

| # | PR | Descrição | Impacto |
|---|-----|-----------|---------|
| #23407 | [fix(MOL-481): Kimi reasoning_content 400 fix](https://github.com/NousResearch/hermes-agent/pull/23407) | Elimina erros HTTP 400 em caminhos de reasoning do Kimi (Moonshot) K2.6 via OpenRouter e auxiliary client | **P2** — Corrige falha crítica em integrações com Kimi |
| #18726 | [feat: use provider models config as whitelist](https://github.com/NousResearch/hermes-agent/pull/18726) | Permite que o `/model` picker respeite a lista de modelos configurada em providers customizados | **P3** — Melhora UX para provedores como Baidu Qianfan |

### PRs abertos de destaque (potencial de merge iminente)

| # | PR | Descrição | Prioridade |
|---|-----|-----------|------------|
| #40128 | [feat: add workflow intelligence to insights](https://github.com/NousResearch/hermes-agent/pull/40128) | Nova camada de "Workflow Intelligence" em `hermes insights` com relatórios em markdown e recomendações | Alta |
| #40127 | [feat(pricing): add deepseek-v4-flash](https://github.com/NousResearch/hermes-agent/pull/40127) | Adiciona precificação oficial do DeepSeek V4 Flash ao snapshot | Média |
| #40124 | [fix(tools): strip ANSI from session_search](https://github.com/NousResearch/hermes-agent/pull/40124) | Remove sequências ANSI dos resultados de busca antes de enviar ao modelo | Alta |
| #40119 | [fix(desktop): disable gpu for nvidia 580 drivers](https://github.com/NousResearch/hermes-agent/pull/40119) | Detecta e ignora GPUs NVIDIA 580+ no Linux para evitar crashes | Alta |
| #37951 | [fix(env-passthrough): fail closed when provider blocklist import fails](https://github.com/NousResearch/hermes-agent/pull/37951) | Corrige vulnerabilidade de segurança em credenciais de provedores | **P1** — Segurança |
| #24229 | [fix(bluebubbles): drop participant-address fallback](https://github.com/NousResearch/hermes-agent/pull/24229) | Corrige vazamento de privacidade em replies do BlueBubbles | **P1** — Segurança |
| #27610 | [fix(hermes-home): only honour legacy dir layout when it has content](https://github.com/NousResearch/hermes-agent/pull/27610) | Corrige detecção de diretório Hermes legado | **P1** — Estabilidade |

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários + reações)

| # | Título | Comentários | 👍 | Tema |
|---|--------|-------------|-----|------|
| [#25495](https://github.com/NousResearch/hermes-agent/issues/25495) | Matrix/Synapse broken in official docker image | 15 | 1 | **Infraestrutura Docker** |
| [#13944](https://github.com/NousResearch/hermes-agent/issues/13944) | Skill index truncates descriptions to 60 chars | 6 | 0 | **Core Agent** |
| [#933](https://github.com/NousResearch/hermes-agent/issues/933) | Support multiple OAuth tokens with automatic fallback | 4 | 3 | **Autenticação** |
| [#37713](https://github.com/NousResearch/hermes-agent/issues/37713) | Desktop Remote gateway should support switching profiles from UI | 2 | 3 | **Desktop UI** |
| [#15176](https://github.com/NousResearch/hermes-agent/issues/15176) | Add fallback routing from local OSS models to closed-source | 2 | 2 | **Core Agent** |
| [#39538](https://github.com/NousResearch/hermes-agent/issues/39538) | Desktop composer drops CJK IME text on Enter | 1 | 2 | **Desktop UI** |

### Análise dos temas quentes

**Infraestrutura Docker (#25495)** — Com 15 comentários, é a issue mais discutida. Usuários reportam que o gateway Matrix/Synapse trava no docker image oficial após um SHA específico, indicando possível regressão em atualizações de imagem. Este é um problema crítico para usuários que dependem de deploy containerizado.

**Autenticação multi-conta (#933)** — Feature request com 3 reações positivas, evidenciando demanda real de usuários que precisam alternar entre contas pessoais e corporativas ou gerenciar rate limits.

**Fallback de modelos locais (#15176)** — Reflete a necessidade de arquitetura híbrida para otimizar custos, usando modelos locais (Ollama) como primeira opção e fallback para provedores cloud.

---

## 5. Bugs e Estabilidade

### Por Severidade

#### P1 (Críticos — requieren atenção imediata)

| # | Título | Plataforma | Descrição |
|---|--------|------------|-----------|
| [#25495](https://github.com/NousResearch/hermes-agent/issues/25495) | Matrix/Synapse broken in docker | Docker/Linux | Gateway trava em "fixing ownership" — **RESOLVIDA** |
| [#37951](https://github.com/NousResearch/hermes-agent/pull/37951) | Env passthrough security fail-closed | Code-exec | Credenciais podem vazar se blocklist falhar |
| [#24229](https://github.com/NousResearch/hermes-agent/pull/24229) | BlueBubbles privacy leak | iOS/Mac | Replies podem ser roteados para chat errado |
| [#27610](https://github.com/NousResearch/hermes-agent/pull/27610) | Hermes-home legacy dir detection | Cross-platform | Pode ignorar configuração válida |

#### P2 (Altos — impacto significativo no fluxo de trabalho)

| # | Título | Plataforma | Descrição |
|---|--------|------------|-----------|
| [#13944](https://github.com/NousResearch/hermes-agent/issues/13944) | Skill descriptions truncated to 60 chars | Agent | Afeta roteamento de skills pelo modelo — **RESOLVIDA** |
| [#37589](https://github.com/NousResearch/hermes-agent/issues/37589) | Desktop misses MCP tools | Desktop/macOS | Servidores MCP configurados não aparecem na sessão Desktop |
| [#39694](https://github.com/NousResearch/hermes-agent/issues/39694) | Telegram clarify prompts show busy controls | Telegram | UI confusa durante prompts de esclarecimento |
| [#10164](https://github.com/NousResearch/hermes-agent/issues/10164) | System prompt grows unbounded | Agent | Pode causar context overflow em sessões longas |
| [#40103](https://github.com/NousResearch/hermes-agent/issues/40103) | ANSI escapes survive in session titles | CLI | Sequências ANSI aparecem como "lixo" em títulos |
| [#40014](https://github.com/NousResearch/hermes-agent/issues/40014) | Claude Code OAuth drains credits incorrectly | Auth/Anthropic | Usa endpoint pay-per-token em vez de subscription |
| [#39333](https://github.com/NousResearch/hermes-agent/issues/39333) | Desktop can strand on detached HEAD | Desktop/macOS | Instalação trava e reporta erro genérico |
| [#35652](https://github.com/NousResearch/hermes-agent/issues/35652) | Background notifications route to wrong session | TUI | Notificações entregue a sessão incorreta |

#### P3 (Médios — impactam experiência mas não bloqueiam)

| # | Título | Plataforma | Descrição |
|---|--------|------------|-----------|
| [#39570](https://github.com/NousResearch/hermes-agent/issues/39570) | Windows app crashes on launch | Desktop/Windows | Crash imediato após instalação |
| [#40077](https://github.com/NousResearch/hermes-agent/issues/40077) | Desktop crashes on NVIDIA 580+ drivers | Desktop/Linux | Falha com drivers recentes da NVIDIA |
| [#39860](https://github.com/NousResearch/hermes-agent/issues/39860) | Desktop update fails on macOS (EAGAIN) | Desktop/macOS | npm ci falha no postinstall |
| [#40041](https://github.com/NousResearch/hermes-agent/issues/40041) | GitHub PAT shows "Internal server error" | Desktop | Não consegue salvar tokens GitHub |
| [#40069](https://github.com/NousResearch/hermes-agent/issues/40069) | OAuth mode save fails with ERR_INVALID_ARGUMENT | Desktop | Writes falham com erro de rede |
| [#39538](https://github.com/NousResearch/hermes-agent/issues/39538) | CJK IME text drops on Enter | Desktop | Texto em japonês/chinês não é enviado |
| [#40129](https://github.com/NousResearch/hermes-agent/issues/40129) | CLI resume crashes on Rich markup | CLI | ANSI em Rich brackets causa crash |

### Padrões Identificados

1. **Desktop App instável** — 6 bugs P3 concentrados na plataforma Desktop (Windows/macOS/Linux), indicando dívida técnica significativa na GUI Electron.
2. **Segurança em múltiplas camadas** — 3 issues relacionadas a approval gates e vazamento de credenciais (#35357, #37951, #24229).
3. **Localization incompleta** — Bugs de IME CJK e ausência de suporte a idiomas asiáticos na UI.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features propostas (últimas 24h)

| # | Título | 👍 | Indicador estratégico |
|---|--------|-----|----------------------|
| [#40126](https://github.com/NousResearch/hermes-agent/issues/40126) | "Minimum release age" option (tipo PNPM) | 0 | **Segurança** — proteção contra supply-chain attacks |
| [#512](https://github.com/NousResearch/hermes-agent/issues/512) | Doom Loop Detection (pause em chamadas idênticas) | 0 | **Robustez** — inspirado em Kilocode |
| [#39999](https://github.com/NousResearch/hermes-agent/issues/39999) | Support stopping a running webhook | 0 | **UX** — controle de sessões webhook |
| [#15176](https://github.com/NousResearch/hermes-agent/issues/15176) | Fallback routing local → cloud models | 2 | **Custo** — otimização de gastos |
| [#37713](https://github.com/NousResearch/hermes-agent/issues/37713) | Profile switching in remote Desktop UI | 3 | **UX** — multi-tenant |
| [#933](https://github.com/NousResearch/hermes-agent/issues/933) | Multiple OAuth tokens with fallback | 3 | **Enterprise** — multi-conta |

### Features em PR (prontas para review)

| # | Título | Complexidade | Área |
|---|--------|--------------|------|
| [#40128](https://github.com/NousResearch/hermes-agent/pull/40128) | Workflow Intelligence em insights | Média | Analytics |
| [#40125](https://github.com/NousResearch/hermes-agent/pull/40125) | Self-Evolving Multi-Agent Swarm | Alta | Agent |
| [#27601](https://github.com/NousResearch/hermes-agent/pull/27601) | Bearer token auth para webhooks | Baixa | Gateway |
| [#40114](https://github.com/NousResearch/hermes-agent/pull/40114) | Desktop language switching (JA/ZH-Hant) | Baixa | i18n |

### Sinais de roadmap

1. **Desktop como foco principal** — Número elevado de bugs e features para Desktop indica investimento contínuo na GUI.
2. **Segurança reforçada** — Features como "minimum release age", approval gates determinísticos e fail-closed sugerem priorização de hardening.
3. **Multi-provider resilience** — Múltiplas issues e PRs abordam fallback, multi-conta e detecção de erros em provedores.

---

## 7. Resumo de Feedback dos Usuários

### Dores reais identificadas

| Dor | Frequência | Severidade | Evidência |
|-----|------------|------------|-----------|
| Desktop crash/instabilidade | Alta | P2-P3 | #39570, #40077, #39860, #40069 |
| Configuração de provedores confusa | Média | P3 | #28211, #933 |
| Incompatibilidade de plataformas (Docker, Matrix, Telegram) | Média | P1-P2 | #25495, #39694 |
| Autenticação quebrada (OAuth, tokens) | Média | P2 | #40014, #40041, #40069 |
| MCP tools não funcionam end-to-end | Média | P3 | #21563, #37589 |
| Memory providers não auto-iniciam | Baixa | P3 | #39981 |

### Cenários de uso reportados

1. **Deploy containerizado** — Usuários esperam que o Docker image "just work", mas enfrentam travamentos em configurações específicas (Matrix/Synapse).
2. **Desktop como cliente universal** — Usuários querem conectar Desktop a VPS remoto e alternar entre profiles sem CLI.
3. **Ambientes enterprise** — Multi-conta OAuth, fallback de modelos, e webhooks com autenticação robusta.
4. **Usuários asiáticos** — Suporte inadequado a IME CJK afeta base de usuários internacional.

### Satisfação geral

**Tendência: Instabilidade na experiência Desktop** — O volume de bugs P2-P3 relacionados ao Desktop app sugere que a GUI ainda não atingiu maturidade equivalente ao CLI. Usuários migram para soluções alternativas (PowerShell) quando a interface gráfica falha.

---

## 8. Backlog que Merece Atenção

### Issues sem resposta/assignee há >7 dias

| # | Título | Criado | Atualizado | Prioridade | Status |
|---|--------|--------|------------|------------|--------|
| [#512](https://github.com/NousResearch/hermes-agent/issues/512) | Doom Loop Detection | 2026-03-06 | 2026-06-05 | P3 | Sem resposta oficial |
| [#28211](https://github.com/NousResearch/hermes-agent/issues/28211) | DeepSeek 403 error | 2026-05-18 | 2026-06-05 | P3 | Sem solução clara |
| [#21563](https://github.com/NousResearch/hermes-agent/issues/215

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-06-06

## 1. Panorama do dia

O projeto PicoClaw apresenta **alta atividade de desenvolvimento** nas últimas 24h, com 27 PRs atualizados (25 merged/fechados) e 7 issues processadas (5 fechadas). O volume de merges sugere uma sprint intensa de estabilização antes do próximo release. A comunidade demonstra engajamento ativo com issues de bugs sendo reportadas e resolvidas rapidamente, incluindo correções críticas de segurança e estabilidade. O ecossistema de dependências está sendo atualizado consistentemente, mantendo o projeto atualizado com as últimas versões das bibliotecas frontend e Go.

---

## 2. Lançamentos

### Nightly Build v0.2.9-nightly.20260605.5224b9a4

| Item | Detalhes |
|------|----------|
| **Tipo** | Automated nightly build |
| **Versão base** | v0.2.9 |
| **Status** | ⚠️ Unstable — uso em produção não recomendado |
| **Commits** | 5224b9a4 |
| **Changelog** | [Compare v0.2.9...main](https://github.com/sipeed/picoclaw/compare/v0.2.9...main) |

**Nota de migração:** Não há breaking changes documentadas para esta build automática. Usuários em produção devem aguardar o próximo release estável.

---

## 3. Progresso do Projeto

### PRs importantes merged/fechados hoje:

| # | Título | Impacto | Link |
|---|--------|---------|------|
| #2900 | **Security: CSRF protection, path traversal validation, security headers** | 🔴 Crítico | [PR #2900](https://github.com/sipeed/picoclaw/pull/2900) |
| #3013 | **docs: remove missing skill-creator helper script references** | 🟢 Doc | [PR #3013](https://github.com/sipeed/picoclaw/pull/3013) |
| #3009 | **fix(onebot): use prefixed chatID for group reply routing** | 🔧 Bugfix | [PR #3009](https://github.com/sipeed/picoclaw/pull/3009) |
| #2985 | **fix(context): show both summarize and compress thresholds** | 🟡 UX | [PR #2985](https://github.com/sipeed/picoclaw/pull/2985) |
| #2915 | **feat(providers): add CommonModels for MiMo provider** | 🟢 Feature | [PR #2915](https://github.com/sipeed/picoclaw/pull/2915) |
| #3010 | **fix(channels): add ok checks for type assertions** | 🔴 Stability | [PR #3010](https://github.com/sipeed/picoclaw/pull/3010) |
| #3011 | **fix(agent): add ok check for LoadAndDelete type assertion** | 🔴 Stability | [PR #3011](https://github.com/sipeed/picoclaw/pull/3011) |
| #2913 | **Fix JSONL session index hot-path cloning and TTL refresh** | 🟡 Performance | [PR #2913](https://github.com/sipeed/picoclaw/pull/2913) |
| #2907 | **Fix JSONL store metadata drift after crash** | 🔴 Data Integrity | [PR #2907](https://github.com/sipeed/picoclaw/pull/2907) |

### Destaque: Melhorias de estabilidade do JSONL store

Os PRs [#2913](https://github.com/sipeed/picoclaw/pull/2913) e [#2907](https://github.com/sipeed/picoclaw/pull/2907) abordam problemas críticos de integridade de dados no subsistema de sessões JSONL, eliminando cloning desnecessário no hot path e corrigindo gaps de crash-consistency.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários + reações):

| # | Título | Tipo | Comentários | 👍 | Link |
|---|--------|------|-------------|----|------|
| #1042 | **[BUG] exec工具的guardCommand方法问题** | Bug | 15 | 2 | [Issue #1042](https://github.com/sipeed/picoclaw/issues/1042) |
| #2720 | **Singleton PID check crash loop** | Bug (High) | 8 | 0 | [Issue #2720](https://github.com/sipeed/picoclaw/issues/2720) |
| #2968 | **/context always show Compress at: 76800 tokens** | Bug | 5 | 1 | [Issue #2968](https://github.com/sipeed/picoclaw/issues/2968) |
| #2916 | **CPU, Memory and IO optimizations** | Enhancement | 4 | 0 | [Issue #2916](https://github.com/sipeed/picoclaw/issues/2916) |
| #652 | **Check correction of workspace skills/skill-creator** | Task | 3 | 0 | [Issue #652](https://github.com/sipeed/picoclaw/issues/652) |

### Análise das demandas:

**Issue #1042** (exec tool guardCommand): Usuários reportam falsos positivos no safety guard ao usar comandos com argumentos que contêm caminhos (ex: `curl wttr.in/Beijing?T`). A detecção de path traversal está sendo muito agressiva, bloqueando comandoslegítimos. A comunidade demonstra interesse em uma solução mais inteligente de validação.

**Issue #2720** (Singleton PID check): Bug de alta prioridade onde o gateway falha ao iniciar quando um PID reaproveitado por outro processo (ex: systemd-resolved) existe. Corrigido com merge do PR.

---

## 5. Bugs e Estabilidade

### Bugs reportados e fechados hoje:

| Severidade | # | Descrição | Status |
|------------|---|-----------|--------|
| 🔴 **Crítica** | #2720 | Singleton PID check não verifica identidade do processo — crash loop | ✅ Fechada |
| 🔴 **Crítica** | #3002 | OneBot group chat usa send_private_msg ao invés de send_group_msg | ✅ Fechada |
| 🟡 **Média** | #2968 | /context exibe threshold de compressão incorreto (76800 tokens fixo) | ✅ Fechada |
| 🟡 **Média** | #1042 | guardCommand bloqueia comandoslegítimos com caminhos nos argumentos | ✅ Fechada |

### Bugs em aberto:

| Severidade | # | Descrição | Impacto |
|------------|---|-----------|---------|
| 🔴 **Alta** | #3012 | Consumo contínuo de tokens quando evolution está habilitado | Gasta créditos desnecessariamente |

[Issue #3012](https://github.com/sipeed/picoclaw/issues/3012) — Reportada hoje (2026-06-05), requer atenção imediata da equipe.

### Correções de estabilidade aplicadas:

- **PRs [#3010](https://github.com/sipeed/picoclaw/pull/3010) e [#3011](https://github.com/sipeed/picoclaw/pull/3011)**: Type assertion safety — panics potenciais em `toChannelHashes` e `UnsubscribeEvents` corrigidos com checks `ok`.
- **PR [#2900](https://github.com/sipeed/picoclaw/pull/2900)**: CSRF protection, path traversal validation, e security headers adicionados ao backend web.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em desenvolvimento (PRs abertos):

| # | Título | Descrição | Link |
|---|--------|-----------|------|
| #2964 | **Feat: image input compression** | Pipeline de compressão configurável para imagens antes de construir o payload do modelo | [PR #2964](https://github.com/sipeed/picoclaw/pull/2964) |
| #2551 | **Refactor: standardize channel identification** | Decouplar channel names de channel types para permitir múltiplas instâncias do mesmo provider | [PR #2551](https://github.com/sipeed/picoclaw/pull/2551) |

### Novas demandas identificadas:

| # | Título | Sinais de necessidade |
|---|--------|----------------------|
| #2916 | **CPU, Memory and IO optimizations** | Usuários buscando melhor performance em ambientes com recursos limitados |
| #2915 | **MiMo provider models** | Demanda por suporte a provedores adicionais além dos já existentes |

### Indicadores de tendência:
- **Compressão de imagens** (#2964): Necessidade de otimizar custos de tokens em pipelines com imagens
- **Channel identification** (#2551): Usuários avançados precisam de múltiplas instâncias do mesmo canal
- **MiMo provider**: Diversificação de provedores além de OpenAI/Anthropic

---

## 7. Resumo de Feedback dos Usuários

### Dores reais identificadas:

1. **Segurança do exec tool** (#1042): Usuários de skills que executam comandos externos (ex: weather, APIs) enfrentam falsos positivos no safety guard. Cenário: skill de clima usando `curl wttr.in` é bloqueado incorretamente.

2. **OneBot group chat** (#3002): Usuários de OneBot em plataformas como QQ reportam que respostas em grupo são encaminhadas como mensagens privadas, causando confusão e erros no cliente NapCat.

3. **Consumo excessivo de tokens** (#3012): Usuários com Evolution habilitado reportam consumo constante de créditos mesmo sem interação ativa — problema urgente.

4. **Visibilidade de configuração** (#2968): Usuários não entendem os thresholds de compressão/sumarização porque `/context` mostrava apenas o limite de compressão, não o trigger de sumarização.

### Cenários de uso detectados:

- **Multi-plataforma**: Integração com OneBot (QQ), FreeBSD, múltiplos providers de IA
- **Automação com Evolution**: Usuários avançados usando Evolution Mode Draft para automação de código
- **Desenvolvimento de skills**: Criação de skills customizadas no workspace

---

## 8. Backlog que Merece Atenção

### Issues sem resposta há mais de 7 dias:

| # | Título | Criado | Atualizado | Prioridade | Link |
|---|--------|--------|------------|------------|------|
| #652 | **Check correction of workspace skills/skill-creator** | 2026-02-22 | 2026-06-05 | Normal | [Issue #652](https://github.com/sipeed/picoclaw/issues/652) |
| #2916 | **CPU, Memory and IO optimizations** | 2026-05-21 | 2026-06-05 | Normal | [Issue #2916](https://github.com/sipeed/picoclaw/issues/2916) |

### Análise do backlog:

**Issue #652** (48+ dias desde criação): Task de auditoria do skill-creator está aberta desde fevereiro. O PR [#3013](https://github.com/sipeed/picoclaw/pull/3013) fechou parte da documentação, mas a issue original ainda está aberta aguardando verificação completa.

**Issue #2916** (16 dias): Otimizações de performance CPU/Memory/IO foram reportadas mas o issue está marcado como stale. Usuários demonstram interesse em melhor performance conforme visto em discussões.

### Recomendações:

1. **Priorizar #3012** — Bug de consumo de tokens está ativo e gerando custos para usuários
2. **Revitalizar #2916** — Otimizações de performance são sempre bem-vindas
3. **Fechar/resolver #652** — Documentação foi parcialmente corrigida, verificar se task está completa

---

## Métricas de Saúde do Projeto (24h)

| Métrica | Valor | Status |
|---------|-------|--------|
| Issues fechadas | 5/7 | 🟢 Excelente |
| PRs merged/fechados | 25/27 | 🟢 Excelente |
| Novos PRs abertos | 2 | 🟡 Normal |
| Bugs críticos resolvidos | 2 | 🟢 Bom |
| Correções de segurança | 1 | 🟢 Importante |
| Atualizações de dependências | 8 | 🟢 Manutenção em dia |
| Tempo médio de resolução | <24h | 🟢 Responsivo |

---

*Relatório gerado automaticamente com base nos dados do GitHub de [sipeed/picoclaw](https://github.com/sipeed/picoclaw) em 2026-06-06.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório de Projeto — IronClaw
**Data:** 2026-06-06 | **Horizonte:** Últimas 24h

---

## 1. Panorama do dia

O IronClaw mantém um ritmo intenso de atividade com **31 issues e 50 PRs atualizados** nas últimas 24h, sem novos lançamentos formais — a versão mais recente (`0.29.1`) foi tagged em PR #3708. O foco dominante permanece na iteração do framework **Reborn**, com especial atenção à robustez do subagente em background, hardening de workflows de inbound e preparação para wiring OpenAI-compatible. A comunidade também reporta problemas recorrentes no canal **WeCom**, particularmente em fluxos de aprovação e distinguishing de conversas em grupo. O nightly E2E falhou novamente, sinalizando dívida técnica operacional que merece atenção imediata.

---

## 2. Lançamentos

**Nenhum novo release nas últimas 24h.** O release mais recente (tagged em PR #3708) é `0.29.1`, который включает:

| Crate | Mudança | Tipo |
|---|---|---|
| `ironclaw` | 0.24.0 → 0.29.1 | Maior bump |
| `ironclaw_common` | 0.4.2 → 0.5.0 | ⚠️ Breaking |
| `ironclaw_skills` | 0.3.0 → 0.4.0 | ⚠️ Breaking |
| `ironclaw_safety` | 0.2.2 → 0.2.3 | Compatible |

**Breaking changes documentadas** em `ironclaw_common` incluem refatorações no módulo `failure`. Equipes integrando essa versão devem consultar o changelog completo em [PR #3708](https://github.com/nearai/ironclaw/pull/3708) antes de atualizar.

---

## 3. Progresso do Projeto

### PRs fechados/merged nas últimas 24h (15 total)

| PR | Título | Impacto |
|---|---|---|
| [#4348](https://github.com/nearai/ironclaw/issues/4348) | Durable completion delivery — persist gate store, implement RestartReconciler | Fecha gap de durabilidade em subagentes background |
| [#4358](https://github.com/nearai/ironclaw/issues/4358) | Gate replay re-validates current policy + durable dispatch records | Corrige stale context em replay de gates |
| [#4350](https://github.com/nearai/ironclaw/issues/4350) | Spawn compensation + parent→child cancellation propagation | Resolve vazamento de child runs em rollback |
| [#4349](https://github.com/nearai/ironclaw/issues/4349) | Completion observer correctness — exactly-once delivery | Elimina double-delivery em falhas parciais |
| [#4437](https://github.com/nearai/ironclaw/issues/4437) | Track durable idempotency for subagent completion result delivery | Garante idempotência em eventos terminais tardios |
| [#4438](https://github.com/nearai/ironclaw/issues/4438) | Define terminal cleanup policy for subagent rollback reservations | Polui política de cancelamento em compensação |
| [#4194](https://github.com/nearai/ironclaw/issues/4194) | Group chat and private DM merged into same Web UI conversation | Separa corretamente DM e group chats no WeCom |
| [#4147](https://github.com/nearai/ironclaw/issues/4147) | Design durable background subagent completion delivery | Fecha design fundamental de completion delivery |
| [#4473](https://github.com/nearai/ironclaw/issues/4473) | Support one-time trigger_create runs | Habilita triggers de execução única |
| [#4472](https://github.com/nearai/ironclaw/issues/4472) | Add activation state for trigger create pairing | Adiciona flag de ativação em pairing de triggers |
| [#4420](https://github.com/nearai/ironclaw/issues/4420) | TriggerCompletionPolicy::CompleteAfterFirstFire not consulted | Corrige re-firing infinito de triggers |
| [#4497](https://github.com/nearai/ironclaw/issues/4497) | [codex] Add NEAR onboarding setup menu | Melhora UX de onboarding com dropdown estruturado |
| [#4198](https://github.com/nearai/ironclaw/issues/4198) | Owner visibility for unpaired users unclear | Clarifica visibilidade de conversas não-paired |
| [#2550](https://github.com/nearai/ironclaw/issues/2550) | Initializes steps for adding new skills | Melhora DX de contribuição com template e docs |
| [#2904](https://github.com/nearai/ironclaw/issues/2904) | Refactor: replace 11 WASM API-proxy tools with skill-based HTTP declarations | Migra 11 tools WASM → SKILL.md declarativos |

**Destaque:** O cluster de PRs relacionados a subagente background (#4348, #4349, #4350, #4358, #4437, #4438) representa um ciclo completo de hardening — de design a implementação de políticas de cleanup, idempotência e exactly-once delivery. Esse é um marco significativo para a estabilidade do Reborn.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (por comentários)

| Issue | Título | Comentários | Reações |
|---|---|---|---|
| [#4311](https://github.com/nearai/ironclaw/issues/4311) | Reborn model gateway collapses budget governance failures into context-overflow recovery | 2 | 0 |
| [#4488](https://github.com/nearai/ironclaw/issues/4488) | [Reborn] Split ProductWorkflow into explicit submit/read/subscribe doors | 2 | 0 |
| [#4427](https://github.com/nearai/ironclaw/issues/4427) | Loop exit reason invisible — LoopFailureKind never traced | 2 | 0 |

### Análise das demandas

**Reborn loop observability (#4427):** Operators não conseguem ver por que um loop terminou via logs (`RUST_LOG=ironclaw=debug`). O `LoopFailureKind` persiste no DB mas não é logado — dificultando debugging em produção. Esse é um problema de **operacionalidade**, não de funcionalidade.

**Model gateway budget mapping (#4311):** Múltiplas falhas de governance não-relacionadas ao budget são colapsadas em `BudgetExceeded`, que vira `ContextOverflow`. Isso mascara a causa raiz e pode gerar prompts de recuperação incorretos. A demanda indica necessidade de **error taxonomy mais granular** no Reborn.

**ProductWorkflow boundary (#4488):** A reestruturação em três portas (submit/read/subscribe) é pré-requisito para o wiring OpenAI-compatible. O PR #4506 já implementa a splitting, sinalizando que essa demanda está em andamento.

---

## 5. Bugs e Estabilidade

### Bugs abertos (por severidade)

**🔴 Alta severidade**

| Issue | Título | Criado | Canal |
|---|---|---|---|
| [#4502](https://github.com/nearai/ironclaw/issues/4502) | WeCom group chat approval reply does not work | 2026-06-05 | WeCom |
| [#4108](https://github.com/nearai/ironclaw/issues/4108) | Nightly E2E failed | 2026-05-27 | CI |

**🟡 Média severidade**

| Issue | Título | Criado | Canal |
|---|---|---|---|
| [#4500](https://github.com/nearai/ironclaw/issues/4500) | Channel onboarding system event written to wrong conversation | 2026-06-05 | WeCom/Telegram |
| [#4191](https://github.com/nearai/ironclaw/issues/4191) | WeCom Channel Validation Findings (v0.29.0 staging) | 2026-05-28 | WeCom |
| [#4431](https://github.com/nearai/ironclaw/issues/4431) | visible_capabilities ⇔ tool_definitions parity regression | 2026-06-04 | Reborn |

**🟢 Baixa severidade / UX**

| Issue | Título | Criado | Canal |
|---|---|---|---|
| [#4505](https://github.com/nearai/ironclaw/issues/4505) | WeCom group conversation titles not distinguishable in sidebar | 2026-06-05 | WeCom/UI |

### Análise

O canal **WeCom** concentra múltiplos bugs reportados em sequência, indicando que a integração ainda está em fase de estabilização pós-lançamento. O bug de aprovação em grupo chat (#4502) é particularmente crítico porque bloqueia fluxos de segurança que dependem de approval do usuário.

A falha recorrente do nightly E2E (#4108) é um problema operacional de **alta visibilidade** que impacta a confiança na base de código. Requer investigação prioritária.

A regressão de capabilities parity (#4431) — onde `builtin.spawn_subagent` estava no system-prompt mas ausente do `tools:[]` array — é um caso clássico de desvio entre documentação e implementação, reforçando a necessidade de testes de regressão mencionados no issue.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas demandas identificadas

| Issue | Título | Sinais de roadmap |
|---|---|---|
| [#4491](https://github.com/nearai/ironclaw/issues/4491) | Use Slack AI streaming for Reborn Slack progress | Integração mais profunda com APIs nativas de canais |
| [#4470](https://github.com/nearai/ironclaw/issues/4470) | Refactor reborn composition into owned crates | Modularização de crates com CI-enforced boundaries |
| [#4474](https://github.com/nearai/ironclaw/issues/4474) | [Track] durable background subagent completion delivery | Consolidando o pipeline de subagente background |
| [#4483](https://github.com/nearai/ironclaw/issues/4483) | Harden ProductWorkflow submit/projection boundary for OpenAI wiring | Preparação para API compatibility layer |
| [#4509](https://github.com/nearai/ironclaw/issues/4509) | Add Slack channel subject routing | Rotas dinâmicas por canal e subject |

### PRs em progresso indicando direção

- **PR #4479** — Port IronHub install flow to Reborn (skill management + extension packages)
- **PR #4506** — Split ProductWorkflow into submit/read/subscribe doors (preparação OpenAI API)
- **PR #4463** — Wire Slack host-beta durable stores
- **PR #3931-#3938** — Hook framework activations (third-party extensions)

### Conclusão de sinais

O roadmap do IronClaw aponta para três eixos:
1. **OpenAI compatibility** — preparação de ProductWorkflow para API wiring
2. **Durability** — persistência de gates, idempotência, e reconciliation de subagentes
3. **Canal-native integration** — streaming de Slack AI, routing dinâmico, durable stores por canal

---

## 7. Resumo de Feedback dos Usuários

### Dores reais identificadas

| Contexto | Problema | Evidência |
|---|---|---|
| **WeCom group chats** | Aprovação via `y`/`yes`/`always` não funciona; bot continua pedindo approval | [#4502](https://github.com/nearai/ironclaw/issues/4502) |
| **WeCom UX** | Múltiplas conversas de grupo indistinguíveis na sidebar (mesmo título) | [#4505](https://github.com/nearai/ironclaw/issues/4505) |
| **Onboarding** | System events pós-pairing são escritos na conversa errada | [#4500](https://github.com/nearai/ironclaw/issues/4500) |
| **Operação** | Não consegue ver reason do loop exit via logs | [#4427](https://github.com/nearai/ironclaw/issues/4427) |
| **Staging WeCom** | Validation发现多个问题 em v0.29.0 staging | [#4191](https://github.com/nearai/ironclaw/issues/4191) |
| **Unpaired users** | Owners não veem conversas de usuários não-paired — não claro se é design ou bug | [#4198](https://github.com/nearai/ironclaw/issues/4198) |

### Cenários de uso emergentes

- **Background subagent execution** — vários issues indicam que a arquitetura de completion delivery está amadurecendo, sinalizando que esse é um caso de uso cada vez mais central.
- **One-time triggers** — usuários querem executar triggers avulsos, não apenas recorrentes.
- **Third-party extensions** — o hook framework está sendo ativado gradualmente, indicando adoção de ecosistema extensível.

### Satisfação/Insatisfação

**Insatisfação concentrada em:**
- Estabilidade do canal WeCom (múltiplos bugs em sequência)
- Falha recorrente do E2E nightly (impacta confiança)
- UX de onboarding (dropdown e choices)

**Satisfação indicated by:**
- Trabalhos de subagente e durability estão sendo fechados com alta velocidade
- Migração de WASM para SKILL.md (PR #2904) sugere que a simplificação do modelo de tools foi bem recebida

---

## 8. Backlog que Merece Atenção

### Issues sem resposta há >3 dias (por criticidade)

| Issue | Título | Criado | Atualizado | Comentários |
|---|---|---|---|---|
| [#4108](https://github.com/nearai/ironclaw/issues/4108) | Nightly E2E failed | 2026-05-27 | 2026-06-05 | 0 |
| [#4191](https://github.com/nearai/ironclaw/issues/4191) | WeCom Channel Validation Findings | 2026-05-28 | 2026-06-05 | 0 |
| [#4366](https://github.com/nearai/ironclaw/issues/4366) | Compaction + checkpoint hardening | 2026-06-02 | 2026-06-04 | 1 |
| [#4368](https://github.com/nearai/ironclaw/issues/4368) | Architecture hygiene — LoopHostDependencies | 2026-06-02 | 2026-06-04 | 1 |
| [#4313](https://github.com/nearai/ironclaw/issues/4313) | Reconcile compaction milestone payload schema | 2026-06-01 | 2026-06-04 | 1 |

### PRs aguardando review há >3 dias

| PR | Título | Criado | Risk |
|---|---|---|---|
| [#3931](https://github.com/nearai/ironclaw/issues/3931) | fix(hooks): close cross-tenant leakage + replay + provider spoofing | 2026-05-23 | Low |
| [#3938](https://github.com/nearai/ironclaw/issues/3938) | feat(hooks): activate hook framework in production | 2026-05-23 | Low |
| [#

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>


# Relatório do Projeto CoPaw (QwenPaw) — 2026-06-06

## 1. Panorama do dia

O projeto CoPaw apresenta **alta atividade** nesta data, com 30 issues e 24 PRs atualizados nas últimas 24 horas. A equipe demonstrou forte capacidade de resposta ao fechar 12 issues e fazer merge de 16 PRs, indicando um ciclo de desenvolvimento saudável. O foco predominante recai sobre **estabilidade do canal Yuanbao**, com múltiplos bugs de protobuf e streaming reportados, além de melhorias na experiência do console (ordem de colunas, avatares). Não houve lançamentos oficiais, mas a base de código recebe contribuições significativas tanto em correções críticas quanto em features solicitadas pela comunidade.

---

## 2. Lançamentos

**Nenhuma release oficial została publicada nas últimas 24 horas.**

O último ciclo de releases permanece estável na versão **v1.1.10**, sem novas publicações desde a última atualização. A equipe parece focada em estabilizar a base de código antes do próximo release, conforme evidenciado pela quantidade de bug fixes em curso.

---

## 3. Progresso do Projeto

As seguintes PRs foram fechadas/merged com impacto significativo:

| PR | Descrição | Impacto |
|-----|-----------|---------|
| [#4026](https://github.com/agentscope-ai/QwenPaw/pull/4026) | `feat(security): prevent write_file overwriting non-empty files` | Proteção contra sobrescrita acidental de arquivos — segurança |
| [#4972](https://github.com/agentscope-ai/QwenPaw/pull/4972) | `fix: enable LaTeX math formula rendering` | Correção de rendering de fórmulas matemáticas (#4756) |
| [#4944](https://github.com/agentscope-ai/QwenPaw/pull/4944) | `fix(browser): add CDP timeout param and browser profile isolation` | Estabilidade do browser_use com isolamento de perfis |
| [#4975](https://github.com/agentscope-ai/QwenPaw/pull/4975) | `feat(console): implement customizable column order in sessions page` | Feature UX aguardando merge — responde à issue #4770 |
| [#4934](https://github.com/agentscope-ai/QwenPaw/pull/4934) | `Add Plugin opensandbox, Support exec shell in opensandbox` | Nova integração com sandbox de execução segura |
| [#4973](https://github.com/agentscope-ai/QwenPaw/pull/4973) | `test(phase5): add unit tests for local_models, providers, tunnel, utils` | **129 casos de teste** adicionados — cobertura de código |

**Destaque de segurança:** O PR [#4981](https://github.com/agentscope-ai/QwenPaw/pull/4981) (em aberto) restringe preview de arquivos ao `WORKING_DIR` e bloqueia paths sensíveis, remediando vulnerabilidade de path traversal.

---

## 4. Temas Quentes da Comunidade

As issues com maior engajamento revelam prioridades claras da comunidade:

### Issues com mais comentários

| Issue | Tipo | Comentários | Tema Central |
|-------|------|-------------|--------------|
| [#4754](https://github.com/agentscope-ai/QwenPaw/issues/4754) | Question | 7 | Dúvidas sobre opções de empacotamento (exe vs Tauri) |
| [#4919](https://github.com/agentscope-ai/QwenPaw/issues/4919) | Bug | 6 | `browser_use` falha com timeout e browsers闪退 |
| [#4770](https://github.com/agentscope-ai/QwenPaw/issues/4770) | Enhancement | 5 | Ajuste de ordem de colunas na interface de sessões |

### Análise das demandas

1. **Empacotamento e distribuição (#4754):** Usuários solicitam clareza sobre diferenças entre build Windows padrão e Tauri, indicando necessidade de documentação técnica mais robusta.

2. **Estabilidade do browser automation (#4919):** Problemas persistentes com CDP timeout e Chrome/Edge em ambiente Windows — múltiplos usuários afetados.

3. **UX do console (#4770):** Demanda por reorganização visual das colunas de sessão, evidenciando uso intensivo da interface web.

4. **Memória e aprendizado (#4652):** Proposta elaborada para transformar o sistema de memória de "registro passivo" para "aprendizado ativo" com estados e associações.

---

## 5. Bugs e Estabilidade

### Bugs críticos (requerem atenção imediata)

| Issue | Severidade | Descrição | Plataforma |
|-------|------------|-----------|------------|
| [#4967](https://github.com/agentscope-ai/QwenPaw/issues/4967) | **Alta** | Execução陷入死循环 (dead loop) após update para v1.1.10 | Windows/Linux |
| [#4976](https://github.com/agentscope-ai/QwenPaw/issues/4976) | **Alta** | Proto files faltando no wheel v1.1.10 para Yuanbao | Linux (pip) |
| [#4977](https://github.com/agentscope-ai/QwenPaw/issues/4977) | **Alta** | Parâmetro `including_default_value_fields` não suportado na versão protobuf | Cross-platform |
| [#4978](https://github.com/agentscope-ai/QwenPaw/issues/4978) | **Alta** | `AuthBindRsp` faltando campo `connectId` | Yuanbao channel |
| [#4979](https://github.com/agentscope-ai/QwenPaw/issues/4979) | **Alta** | Streaming replies descartadas silenciosamente quando `streaming_enabled=True` | Yuanbao channel |

### Bugs médios

| Issue | Descrição |
|-------|-----------|
| [#4980](https://github.com/agentscope-ai/QwenPaw/issues/4980) | `SendC2CMessage` retorna "bot_id is required" mesmo com encoding correto |
| [#4970](https://github.com/agentscope-ai/QwenPaw/issues/4970) | Arquivos `loop_config.json`/`prd.json` corrompidos causam crash do agent |
| [#4832](https://github.com/agentscope-ai/QwenPaw/issues/4832) | Janela cmd.exe aparece ao executar shell no Windows (falta `CREATE_NO_WINDOW`) |
| [#4962](https://github.com/agentscope-ai/QwenPaw/issues/4962) | DEEPSEEK API folding de conteúdo no thinking process |

### Observação

Há uma **série de bugs relacionados ao canal Yuanbao** (#4976–#4980) reportados pelo mesmo autor (ABAC-123456), sugerindo problemas sistêmicos na implementação protobuf dessa integração. A equipe já possui PR [#4982](https://github.com/agentscope-ai/QwenPaw/pull/4982) em aberto para corrigir o problema de streaming.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features mais demandadas

| Issue | Categoria | Descrição | Status |
|-------|-----------|-----------|--------|
| [#4974](https://github.com/agentscope-ai/QwenPaw/issues/4974) | Console | Avatares customizados por Agent | Aberta |
| [#4963](https://github.com/agentscope-ai/QwenPaw/issues/4963) | Cron | Suporte a execução direta de scripts/shell via cron | Aberta |
| [#4964](https://github.com/agentscope-ai/QwenPaw/issues/4964) | Core | Interromper execução do agent ao receber nova mensagem | Aberta |
| [#4971](https://github.com/agentscope-ai/QwenPaw/issues/4971) | Console | Barra lateral de sessões para troca rápida | Aberta |
| [#4965](https://github.com/agentscope-ai/QwenPaw/issues/4965) | Console | Unificar cards de provider do mesmo brand | Aberta |
| [#4652](https://github.com/agentscope-ai/QwenPaw/issues/4652) | Memory | Sistema de "总结-关联-提醒" (resumo-associação-alerta) | Aberta |

### Tendências identificadas

1. **Console UX:** Múltiplas solicitações para melhorar navegação e visualização (#4770, #4971, #4974, #4965)
2. **Controle de execução:** Capacidade de abortar/interromper agentes em execução
3. **Automação avançada:** Cron com suporte a scripts shell diretos
4. **Sistema de memória:** Evolução de registro passivo para aprendizado ativo

### Sinais de roadmap

O PR [#4900](https://github.com/agentscope-ai/QwenPaw/pull/4900) — "Decouple plugin loader initialization from agent startup" — sugere que a arquitetura de plugins está sendo refatorada para ambientes frozen (Tauri/PyInstaller).

---

## 7. Resumo de Feedback dos Usuários

### Dores relatadas

| Dor | Ocorrências | Exemplos |
|-----|-------------|----------|
| **Instabilidade do browser automation** | Alta | #4919, #4832 |
| **Problemas com canal Yuanbao** | Alta | #4976–#4980 |
| **Dificuldade de gerenciamento de sessões** | Média | #4971, #4770 |
| **Sistema de memória ineficiente** | Média | #4652, #4640 |
| **Documentação de empacotamento insuficiente** | Média | #4754 |
| **Acesso LAN ao console** | Baixa | #4960 |

### Cenários de uso evidenciados

- **Automação de navegador:** Usuários esperam confiabilidade para browser_use em workflows de automação
- **Multi-agent management:** Necessidade de diferenciação visual (avatares) e organização (sessões)
- **Scheduled tasks:** Casos de uso para cron com scripts shell além de texto/agent
- **Desenvolvimento cross-platform:** macOS Intel, Windows, Linux com comportamentos distintos

### Satisfação

A taxa de resolução é alta: **12 de 30 issues fechadas** nas últimas 24h. A comunidade responde rapidamente a PRs e features requests, indicando engajamento saudável. No entanto, bugs críticos no canal Yuanbao e browser automation merecem atenção prioritária.

---

## 8. Backlog que Merece Atenção

### Issues sem resposta significativa (>5 dias sem atividade)

| Issue | Idade | Tema | Prioridade |
|-------|-------|------|------------|
| [#4744](https://github.com/agentscope-ai/QwenPaw/issues/4744) | ~9 dias | macOS Tauri não suporta Intel chips? | Média |
| [#4640](https://github.com/agentscope-ai/QwenPaw/issues/4640) | ~14 dias | RFC:会话结束自动总结机制 | Alta |
| [#4651](https://github.com/agentscope-ai/QwenPaw/issues/4651) | ~13 dias | 「操作前规范自动加载」机制 | Média |
| [#4652](https://github.com/agentscope-ai/QwenPaw/issues/4652) | ~13 dias | 记忆系统的「总结-关联-提醒」机制 | Alta |

### PRs aguardando review

| PR | Idade | Tema | Status |
|----|-------|------|--------|
| [#4900](https://github.com/agentscope-ai/QwenPaw/pull/4900) | 4 dias | Plugin loader decoupling | Aberto |
| [#4975](https://github.com/agentscope-ai/QwenPaw/pull/4975) | 1 dia | Customizable column order | Aberto |
| [#4981](https://github.com/agentscope-ai/QwenPaw/pull/4981) | <1 dia | File preview security fix | Aberto |
| [#4982](https://github.com/agentscope-ai/QwenPaw/pull/4982) | <1 dia | Yuanbao streaming fix | Aberto |

### Recomendação

**Atenção urgente** para a série de bugs do canal Yuanbao (#4976–#4980). Com 5 issues críticas do mesmo autor apontando problemas de protobuf, há risco de regressões se não forem tratadas antes do próximo release.

---

## Métricas Resumidas (2026-06-06)

| Indicador | Valor |
|-----------|-------|
| Issues ativas | 18 |
| Issues fechadas (24h) | 12 |
| PRs abertos | 8 |
| PRs merged/fechados (24h) | 16 |
| Novas releases | 0 |
| Taxa de fechamento (issues) | 40% |
| PRs em segurança | 2 (#4026, #4981) |

**Saúde geral do projeto:** 🟢 **Estável** — Atividade alta, resposta rápida da equipe, mas bugs críticos no canal Yuanbao requerem atenção imediata.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>


# Relatório de Projeto — ZeroClaw
## Data: 2026-06-06

---

## 1. Panorama do Dia

O projeto ZeroClaw apresenta **alta atividade** em 06 de junho de 2026, com 50 issues e 50 PRs atualizados nas últimas 24 horas. Não houve lançamentos de novas versões, indicando que o ciclo de desenvolvimento está focado em consolidação e review. A comunidade demonstra engajamento significativo com 9 issues com mais de 3 comentários, evidenciando debates acalorados sobre arquitetura, segurança e experiência do usuário. A proporção de 30 PRs abertos vs. 20 fechados/merged sugere um fluxo saudável de contribuições, com muitos PRs de canais (Twitch, Lemmy, Zulip, Rocket.Chat, Mastodon) sendo finalizados. O tema central das discussões gira em torno de **segurança plugável, autenticação OIDC, governança de PR lanes e refatoração de observabilidade**.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24 horas.**

O projeto não publicou novas versões desde o período analisado. Isso é consistente com o padrão de trabalho observed — muitos PRs estão em estágio de review ou aguardando aprovação de maintainers (etiquetas `needs-maintainer-review` e `status:blocked`). Recomenda-se monitorar os PRs de canais finalizados (#6446, #6442, #6438, #6436, #6426) que podem compor um próximo release bundling as integrações de chat/social.

---

## 3. Progresso do Projeto

### PRs Closed/Merged Hoje (20 total)

| PR | Título | Tipo | Tamanho | Destaque |
|----|--------|------|---------|----------|
| [#6446](https://github.com/zeroclaw-labs/zeroclaw/pull/6446) | feat(channel:twitch): add Twitch chat channel (thin IRC adapter) | enhancement | M | Twitch via adapter IRC |
| [#6282](https://github.com/zeroclaw-labs/zeroclaw/pull/6282) | fix(hardware): unbreak Windows full build | bug | XS | Correção build Windows |
| [#7188](https://github.com/zeroclaw-labs/zeroclaw/pull/7188) | fix(cron): support relative after schedules | bug | S | Schedules relativos suportados |
| [#6442](https://github.com/zeroclaw-labs/zeroclaw/pull/6442) | feat(channel:lemmy): add Lemmy channel (PM polling) | enhancement | XL | Integração Lemmy completa |
| [#6438](https://github.com/zeroclaw-labs/zeroclaw/pull/6438) | feat(channel:zulip): add Zulip channel | enhancement | XL | Suporte Zulip Events API |
| [#6436](https://github.com/zeroclaw-labs/zeroclaw/pull/6436) | feat(channel:rocketchat): add Rocket.Chat channel | enhancement | L | REST polling para Rocket.Chat |
| [#6426](https://github.com/zeroclaw-labs/zeroclaw/pull/6426) | feat(channel:mastodon): add Mastodon (ActivityPub) | enhancement | XL | Fediverse via ActivityPub |

### Avanços Principais

- **Expansão de canais**: 5 novos canais de chat/social integrados (Mastodon, Lemmy, Zulip, Rocket.Chat, Twitch)
- **Correção de build**: Windows build consertado para `zeroclaw-hardware` (#6282)
- **Cron avançada**: Suporte a schedules relativos (`after_seconds`) (#7188)
- **Stacked PRs ativos**: Documentação completa para canais SMS (#7272) e chat (#7273) em branches empilhados

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (por comentários)

| Issue | Título | Comentários | Tags Principais |
|-------|--------|-------------|----------------|
| [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) | RFC: Work Lanes, Board Automation, and Label Cleanup | **9** | governance, rfc, priority:p2 |
| [#6969](https://github.com/zeroclaw-labs/zeroclaw/issues/6969) | RFC: unified output routing model (per-peer modality) | **7** | architecture, rfc, priority:p2 |
| [#5601](https://github.com/zeroclaw-labs/zeroclaw/issues/5601) | OAuth support for Ollama Cloud, z.ai, Kimi, MiniMax | **6** | provider, security, priority:p2 |
| [#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) | RFC: lighter ZeroClaw core via external integrations | **4** | architecture, mcp, priority:p2 |
| [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) | RFC: shell command confirmation tier (allow/ask/deny) | **4** | security, shell, priority:p1 |
| [#7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142) | Expose security enforcement layer as pluggable interface | **4** | security, architecture, priority:p2 |
| [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) | OIDC Authentication Provider para RPC/WSS | **4** | security, daemon, priority:p1 |

### Análise dos Temas

**1. Governança e Automação (#6808 — 9 comentários)**
Proposta de Work Lanes automatizadas e limpeza de labels para reduzir carga manual de maintainers. Tema recorrente em projetos maduros — indica necessidade de escalabilidade operacional.

**2. Routing de Output Unificado (#6969 — 7 comentários)**
Usuários migrating from Letta sentem falta de controle granular sobre delivery de respostas. Sinaliza demanda por preferências persistentes por-peer e controle de modalidade (texto, voz, etc.).

**3. Segurança como Arquitetura (#7142, #7141, #7155, #6971)**
Bloco coeso de RFCs com标签 `security`, `priority:p1/p2` e `domain:security`. A comunidade está empurrando para: (a) interface plugável de segurança, (b) autenticação OIDC, (c) confirmação interativa para shell de alto risco. Prioridade clara para v0.9.0.

**4. Provedores e OAuth (#5601)**
Demanda por autenticação nativa para provedores emergentes (Ollama Cloud, Zhipu, Kimi, MiniMax). Bloqueado por `needs-maintainer-review` — requer atenção.

---

## 5. Bugs e Estabilidade

### Issues de Bug Reportadas

| Issue | Severidade | Título | Status |
|-------|------------|--------|--------|
| [#6120](https://github.com/zeroclaw-labs/zeroclaw/issues/6120) | **S1** (bloqueante) | Onboarding: choosing OpenAI Codex prompts para OpenAI API key | CLOSED |
| [#7059](https://github.com/zeroclaw-labs/zeroclaw/issues/7059) | **S2** (degradado) | excise "default model provider" credential/URL fallback | IN-PROGRESS |
| [#6715](https://github.com/zeroclaw-labs/zeroclaw/issues/6715) | N/A | Delete unneeded branches from repository | OPEN |

### Análise

- **Bug #6120 fechado**: O onboarding com Codex foi corrigido — fluxo de autenticação OpenAI normalizado.
- **Bug #7059 em progresso**: Remoção de fallbacks de provider padrão no channel orchestrator. Este é um refactoring de arquitetura que pode ter implicações em múltiplos canais.
- **PRs de bug merged**: 
  - [#7085](https://github.com/zeroclaw-labs/zeroclaw/pull/7085): Restaura suporte a referências `op://` (1Password) perdido após revert massivo (#6074)
  - [#7192](https://github.com/zeroclaw-labs/zeroclaw/pull/7192): Corrige `recall since/until` para markdown entries (parsing de timestamp)
  - [#7274](https://github.com/zeroclaw-labs/zeroclaw/pull/7274): Stampara `schema_version` em saves incrementais do dashboard
  - [#7120](https://github.com/zeroclaw-labs/zeroclaw/pull/7120): Impede subprocessos interativos de sequestrar terminal

**Métricas de Estabilidade**: 4 PRs de bug fechados em 24h, nenhum bug novo crítico aberto. Estabilidade moderada.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Destacadas

| Issue | Feature | Prioridade | Status | Sinal de Roadmap |
|-------|---------|------------|--------|------------------|
| [#6914](https://github.com/zeroclaw-labs/zeroclaw/issues/6914) | Enforce `allowed_tools` / `denied_tools` no main agent loop | **P1** | BLOCKED | Consistência de segurança |
| [#6916](https://github.com/zeroclaw-labs/zeroclaw/issues/6916) | Process-memory limits em shell/skill_tool | **P1** | ACCEPTED | Isolamento de recursos |
| [#7100](https://github.com/zeroclaw-labs/zeroclaw/issues/7100) | Per-model capability & context-window config | **P1** | ACCEPTED | Suporte a modelos multimodais |
| [#7232](https://github.com/zeroclaw-labs/zeroclaw/issues/7232) | Structured Observability Enhancement (OTel) | **P2** | ACCEPTED | Observabilidade |
| [#7218](https://github.com/zeroclaw-labs/zeroclaw/issues/7218) | A2A agent discovery (.well-known/agent-card.json) | **P2** | ACCEPTED | Interoperabilidade |
| [#7048](https://github.com/zeroclaw-labs/zeroclaw/pull/7048) | ESP32 simulator (hackathon bundle) | — | OPEN | Hardware/IoT |

### Sinais Fortes para Próxima Versão

1. **Segurança plugável e OIDC** (#7141, #7142) — Target v0.9.0 explicitado
2. **Controle de ferramentas** (#6914, #6915, #6916, #6917) — Feature block de segurança/tooling
3. **LSP para coding workflows** (#5907) — Redução de alucinações em modelos locais
4. **Observabilidade OTel** (#7232) — Trace correlation e eventos estruturados

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Dor | Fonte | Impacto |
|-----|-------|---------|
| **Perda de controle de output routing** | Issue #6969 (migrante Letta) | Alto — workflow daily afetado |
| **Build Windows quebrado** | Issue #6282 | Médio — bloqueava contribuição |
| **Carga de manutenção manual** | Issue #6808 | Médio — burn-out de maintainers |
| **OAuth ausente para provedores populares** | Issue #5601 | Alto — adoção limitada |
| **Shell interativo sequestra terminal** | PR #7120 | Médio — UX degradado em TUI |
| **Branches obsoletos poluindo repo** | Issue #6715 | Baixo — desorganização |

### Cenários de Uso Emergentes

- **Multi-agente com A2A** (#7218): Instalações com múltiplos agentes precisam de discovery padronizado
- **Air-gapped execution** (#6293): Ambientes isolados com enclave via unix socket
- **Office document parsing** (#7024): Suporte a DOCX/XLSX/PPTX via WASM plugin
- **Windows shell configurável** (#7089): PowerShell vs cmd.exe — escolha explícita

---

## 8. Backlog que Merece Atenção

### Issues sem resposta/atrasadas

| Issue | Título | Criado | Atualizado | Comentários | Tags |
|-------|--------|--------|------------|-------------|------|
| [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) | audit: track 153 commits lost in bulk revert c3ff635 | 2026-04-24 | 2026-06-05 | 2 | ci, priority:p2 |
| [#5601](https://github.com/zeroclaw-labs/zeroclaw/issues/5601) | OAuth for Ollama Cloud, z.ai, Kimi, MiniMax | 2026-04-10 | 2026-06-05 | 6 | provider, priority:p2 |
| [#5908](https://github.com/zeroclaw-labs/zeroclaw/issues/5908) | GitHub Actions CI/CD Container Builds | 2026-04-19 | 2026-06-05 | 2 | ci, priority:p2 |
| [#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) | RFC: lighter core via external integrations | 2026-04-27 | 2026-06-05 | 4 | architecture, priority:p2 |
| [#5907](https://github.com/zeroclaw-labs/zeroclaw/issues/5907) | Opt-in LSP support for coding workflows | 2026-04-19 | 2026-06-05 | 4 | lsp, priority:p2 |
| [#6715](https://github.com/zeroclaw-labs/zeroclaw/issues/6715) | Delete unneeded branches | 2026-05-16 | 2026-06-05 | 3 | priority:p3 |
| [#6293](https://github.com/zeroclaw-labs/zeroclaw/issues/6293) | Air-gapped execution mode (enclave) | 2026-05-03 | 2026-06-05 | 3 | security, priority:p2 |

### Recomendações de Priorização

1. **#6074** — Recovery dos 153 commits perdidos está crítico para não perder trabalho validado
2. **#5601** — 6 comentários + 1 👍 indica demanda real de comunidade; needs maintainer review há 57 dias
3. **#6293** — Air-gapped é feature de segurança de alto valor; RFC aceita mas sem progresso
4. **#5908** — CI/CD container build automatizado reduziria friction de releases

---

## Saúde Geral do Projeto

| Indicador | Valor | Avaliação |
|-----------|-------|-----------|
| Atividade (issues + PRs / 24h) | 100 | ✅ Alta |
| Releases (24h) | 0 | ⚠️ Nenhuma |
| PRs abertos vs. fechados | 30/20 (1.5:1) | ✅ Saudável |
| Bugs críticos (S1) abertos | 0 | ✅ Nenhum |
| RFCs em debate | 12+ | ✅ Engajamento alto |
| Issues bloqueadas sem resposta | 7 | ⚠️ Requer triage |
| Cobertura de canais novos | 5 PRs merged | ✅ Expansão contínua |

**Veredicto**: ZeroClaw demonstra vigoroso desenvolvimento com foco em expansão de canais, hardening de segurança e observabilidade. O gargalo atual é a falta de releases recentes e o acúmulo de issues bloqueadas aguardando review de maintainers. Recomenda-se sessão de triagem para issues antigas e possível freeze de features para preparar release.

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*