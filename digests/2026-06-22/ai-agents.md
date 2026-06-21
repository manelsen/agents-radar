# Resumo diário do ecossistema de agentes de IA 2026-06-22

> Issues: 1 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-06-21 21:09 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório do Projeto NullClaw — 2026-06-22

---

## 1. Panorama do Dia

O projeto NullClaw apresenta **atividade muito baixa** nas últimas 24 horas. Uma única issue aberta foi atualizada, enquanto nenhuma atividade de PR ou release foi registrada. O ecossistema permanece estável, sem indicadores de urgência ou bloqueios críticos. O último período sugere uma fase de manutenção passiva, aguardando resolução do bug reportado.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24h.**

O último lançamento estável (v2026.5.29) continua como versão mais recente, conforme indicado nos dados disponíveis.

---

## 3. Progresso do Projeto

**Nenhuma PR merged ou fechada nas últimas 24h.**

O pipeline de desenvolvimento está inativo no período analisado.

---

## 4. Temas Quentes da Comunidade

### Issue em Destaque

| # | Título | Status | Comentários | Reações |
|---|--------|--------|-------------|---------|
| [#967](https://github.com/nullclaw/nullclaw/issues/967) | [bug] error: NoResponseContent | 🟡 OPEN | 1 | 0 |

**Análise:** Issue reportada por **svier0** em **2026-06-20**, com atualização em 2026-06-21. O usuário relata um problema crítico no Windows 11 com a versão v2026.5.29:

- **Frequência**: >50% das 21 conversas (12 ocorrências)
- **Tempo de resposta**: 27 segundos antes do erro
- **Modelo**: Agnes-2.0-Flash
- **Comportamento**: O comando `nullclaw agent -m "你好！"` retorna `error: NoResponseContent` após aguard~30 segundos

O mesmo modelo e API key funcionam corretamente no projeto Picocla, sugerindo que o problema é específico da implementação do NullClaw.

---

## 5. Bugs e Estabilidade

### Bug Reportado (Severidade: Alta)

| Campo | Detalhe |
|-------|---------|
| **ID** | [#967](https://github.com/nullclaw/nullclaw/issues/967) |
| **Título** | NoResponseContent error |
| **Severidade** | 🔴 Alta (50%+ de falha em interações) |
| **Ambiente** | Windows 11, v2026.5.29 |
| **Reprodutibilidade** | Alta (>50% das tentativas) |
| **Tempo para resposta** | ~27s antes do erro |

**Impacto**: O bug afeta significativamente a experiência do usuário, com falha frequente em respostas de IA. O erro `NoResponseContent` indica possível falha no parsing de resposta do modelo ou timeout mal configurado.

---

## 6. Pedidos de Features e Sinais de Roadmap

**Nenhuma issue de feature request registrada nas últimas 24h.**

A ausência de novos PRs ou issues de feature sugiere que:
- O roadmap atual está em execução sem bloqueios públicos
- A equipe pode estar trabalhando em features closed-source ou em branch interno

---

## 7. Resumo de Feedback dos Usuários

### Pontos de Dor Identificados

| Categoria | Detalhe | Severidade |
|-----------|---------|------------|
| 🔴 **Estabilidade de Resposta** | Erro `NoResponseContent` com alta frequência no Windows 11 | Crítica |
| 🟡 **Timeout/Performance** | 27s de espera antes de falha — UX ruim | Alta |
| 🟡 **Incompatibilidade de Plataforma** | Funciona em Picocla, falha no NullClaw — regressão ou bug específico | Média |

### Cenário de Uso Reportado
- **Contexto**: Agente conversacional CLI
- **Input**: Mensagem simples em mandarim ("你好！")
- **Output Esperado**: Resposta do modelo Agnes-2.0-Flash
- **Output Real**: `error: NoResponseContent` após 27s

---

## 8. Backlog que Merece Atenção

### Issue Sem Resposta da Equipe

| # | Título | Idade | Status | Prioridade |
|---|--------|-------|--------|------------|
| [#967](https://github.com/nullclaw/nullclaw/issues/967) | [bug] error: NoResponseContent | ~2 dias | 🟡 OPEN | 🔴 Alta |

**Análise:** A issue está aberta há aproximadamente 2 dias com apenas **1 comentário** (do próprio autor). A equipe ainda não se manifestou, o que pode impactar a confiança da comunidade. Recomenda-se:

1. **Triagem imediata** para confirmar reprodução do bug
2. **Escalonamento** se o bug afetar múltiplos modelos/plataformas
3. **Comunicação** com o usuário svier0 sobre timeline de correção

---

## Métricas Resumidas

| Métrica | Valor |
|---------|-------|
| Issues abertas/ativas (24h) | 1 |
| Issues fechadas (24h) | 0 |
| PRs abertas (24h) | 0 |
| PRs merged/fechadas (24h) | 0 |
| Releases (24h) | 0 |
| Tempo médio de resposta em issues | ⚠️ Não disponível |
| Issues sem resposta >7 dias | 0 visíveis |

---

## Recomendação

**Ação imediata:** A equipe NullClaw deve priorizar o triagem da issue [#967](https://github.com/nullclaw/nullclaw/issues/967) — o bug `NoResponseContent` com 50%+ de reprodutibilidade representa risco significativo para retenção de usuários Windows.

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo — Ecossistema de Agentes de IA Open Source

**Data de Referência:** 2026-06-22
**Projetos Analisados:** NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw, ZeroClaw

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **dois padrões distintos de desenvolvimento** neste período. Por um lado, projetos como Hermes Agent (50 PRs + 50 issues), ZeroClaw (50 PRs + 23 issues) e IronClaw (30 PRs) demonstram ciclos de desenvolvimento acelerados com foco em estabilização pré-release e correções de segurança. Por outro, NanoBot, CoPaw e PicoClaw equilibram feature velocity com correções de bugs críticos, enquanto NullClaw permanece em modo de manutenção passiva. A **segurança emerge como tema transversal**: vulnerabilidades P0/P2 em Hermes Agent, falhas de bypass em MCP no NanoBot e problemas de autenticação em ZeroClaw indicam que o ecossistema amadurece sob pressão de auditorias e responsible disclosure.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs Atualizados | Releases | Saúde | Tendência |
|---------|--------------|-----------------|----------|-------|-----------|
| **Hermes Agent** | 50 | 50 | 0 | 🔴 Alta rotatividade | Acelerado |
| **ZeroClaw** | 23 | 50 | 0 | 🟢 Estável | Estável-Alta |
| **NanoBot** | 10 | 32 | 0 | 🟡 Moderada | Estável |
| **CoPaw** | 15 | 28 | 0 | 🟡 Moderada | Crescente |
| **IronClaw** | 3 | 30 | 0 | 🟢 Estável | Estável |
| **PicoClaw** | 5 | 3 | 1 nightly | 🟢 Estável | Estável |
| **NullClaw** | 1 | 0 | 0 | ⚠️ Baixa | Estagnada |

**Observações:**
- **Release activity:** Apenas PicoClaw publicou nightly build; demais projetos em ciclo de consolidação
- **S0/S1 críticos:** ZeroClaw (5 bugs), NanoBot (3 bugs), CoPaw (3 bugs), Hermes Agent (2 P0)
- **Tech debt visível:** PRs Dependabot stale em PicoClaw (11 dias), IronClaw (26 dias) e CoPaw

---

## 3. Posicionamento do Projeto Principal

Considerando o volume de atividade e impacto, **Hermes Agent e ZeroClaw** ocupam posição de destaque no ecossistema.

### Hermes Agent (NousResearch)

| Dimensão | Avaliação |
|----------|-----------|
| **Volume de desenvolvimento** | Líder absoluto (100 eventos/24h) |
| **Maturidade de segurança** | P0/P2 resolvidos — SSRF via IPv6, vazamento de credenciais |
| **Cobertura de plataforma** | Desktop, Telegram, Matrix, WhatsApp |
| **Arquitetura** | Gateway-centralizado com cron e session cache |
| **Comunidade** | 28 PRs fechadas em 24h — ciclo de review saudável |

**Diferencial:** Foco em estabilidade de Desktop App (4 P1s resolvidas simultaneamente) e segurança corporativa (E2EE Matrix).

### ZeroClaw

| Dimensão | Avaliação |
|----------|-----------|
| **Arquitetura** | Modular com crates Rust — autenticação plugável |
| **Roadmap claro** | v0.9.0 (OIDC), v0.8.2 (Skills platform) |
| **RFCs ativos** | 3+ RFCs emdraft — disciplina arquitetural |
| **Estabilidade** | Race conditions em concurrent workers requerem atenção |

**Diferencial:** Autenticação OIDC para enterprise, chat-based onboarding, e suporte multi-protocolo (Telegram, Matrix, Discord).

---

## 4. Focos Técnicos Compartilhados

### 4.1 Segurança MCP (NanoBot, Hermes Agent, ZeroClaw)

| Projeto | Vulnerabilidade | Severidade | Status |
|---------|-----------------|------------|--------|
| NanoBot | `enabledTools` allowlist bypass — recursos expostos com `[]` | 🔴 Crítica | PR #4436 open |
| Hermes Agent | IPv6 scope IDs ignorados em SSRF check | 🔴 P0 | ✅ Corrigido |
| ZeroClaw | Race condition em concurrent workers | 🟡 Alta | Open |

**Análise:** O padrão `enabledTools: []` como "deny-all" semanticamente confuso é anti-pattern recorrente. Recomenda-se uso de whitelist explícita ou semântica `enabled: false` ao invés de lista vazia.

### 4.2 Resiliência de Streaming (NanoBot, Hermes Agent)

- **NanoBot #4442:** `tool_use` IDs duplicados em streaming Anthropic — sessões permanentemente quebradas
- **Hermes Agent #50169:** Processos MCP stdio acumulam zumbis após disconnect

**Padrão identificado:** Arquiteturas que dependem de streaming em tempo real com provedores variados enfrentam problemas de idempotência e lifecycle management.

### 4.3 Autenticação e OAuth (IronClaw, ZeroClaw)

- **IronClaw #5071:** Tokens Google OAuth expiram em ~1h sem refresh proativo
- **ZeroClaw #7141:** OIDC como próximo milestone de arquitetura

**Sinal:** Provedores cloud-native exigem gerenciamento de token lifecycle mais sofisticado.

### 4.4 UX Mobile (CoPaw, PicoClaw)

| Projeto | Foco | Impacto |
|---------|------|---------|
| CoPaw | 10+ PRs de responsividade mobile simultâneos | Bloqueante |
| PicoClaw | Safari iOS < 16.4 quebrado | ~12 dias stale |
| NullClaw | Windows 11 com bug crítico | Sem triagem |

**Padrão:** Mobile-first emerge como requirement explícito; projetos sem estratégia mobile enfrentam friction de comunidade.

---

## 5. Análise de Diferenciação

### Por Arquitetura

| Arquitetura | Projetos | Vantagens | Limitações |
|-------------|----------|-----------|------------|
| **Mono-repositório Go** | PicoClaw |部署 simples, binaries standalone | Less modular |
| **Crates Rust modular** | ZeroClaw, IronClaw | type safety, performance | curva de aprendizado |
| **Python/TypeScript hybrid** | CoPaw, NanoBot | DX rápido, prototyping | GIL, bundle size |
| **Python + bindings** | Hermes Agent | Flexibilidade, ecosystem | performance em Desktop |

### Por Público-Alvo

| Público | Projetos | Evidência |
|---------|----------|-----------|
| **Enterprise/Corporate** | Hermes Agent (Matrix E2EE, OIDC em ZeroClaw) | Features de segurança, compliance |
| **Desenvolvedores individuais** | NullClaw, PicoClaw | CLI-first, low footprint |
| **Automação operacional** | IronClaw, ZeroClaw | Triggers, cron, concurrent execution |
| **Consumer/Mobile** | CoPaw | Mobile responsive, Slack, Feishu |

### Por Filosofia de Desenvolvimento

| Projeto | Velocidade vs. Estabilidade | Visível no período |
|---------|------------------------------|-------------------|
| **CoPaw** | Feature-first | 10 PRs mobile simultâneos |
| **IronClaw** | CI-first | 292% aumento em cobertura de testes |
| **Hermes Agent** | Bugfix-intensive | 28 PRs fechadas, 2 P0 resolvidos |
| **ZeroClaw** | RFC-driven | 3 RFCs ativos, documentação formal |

---

## 6. Tração e Maturidade da Comunidade

### Velocidade de Iteração

| Ranking | Projeto | PRs fechadas/24h | Bugs resolvidos/24h | Velocity Score |
|---------|---------|------------------|---------------------|----------------|
| 1 | Hermes Agent | 28 | 10+ P1s | ██████████ 10/10 |
| 2 | ZeroClaw | 6 | 2 | ██████ 6/10 |
| 3 | IronClaw | 13 | 2 | █████ 5/10 |
| 4 | NanoBot | 5 | 3 | ████ 4/10 |
| 5 | CoPaw | 2 | 0 | ███ 3/10 |
| 6 | PicoClaw | 1 | 2 | ██ 2/10 |
| 7 | NullClaw | 0 | 0 | █ 1/10 |

### Qualidade de Review

| Indicador | Melhor performer | Preocupação |
|-----------|------------------|-------------|
| Tempo de triagem | CoPaw (PRs mergeados no mesmo dia) | NullClaw: ~2 dias sem resposta |
| Stale issues | IronClaw: CI expõe falhas imediatamente | PicoClaw: 11 dias sem ação em Dependabot |
| RFC process | ZeroClaw: 3 RFCs emdraft com labels | Demasiado formal para velocity |

### Sinais de Maturidade

| Maturidade | Projetos | Evidência |
|------------|----------|-----------|
| **Consolidação** | Hermes Agent, IronClaw | Feature freeze, bugfix sprints |
| **Feature velocity** | CoPaw, ZeroClaw | 10+ PRs simultâneas em áreas específicas |
| **Manutenção** | NullClaw, PicoClaw | Bug reports sem resposta, nightly builds automáticas |

---

## 7. Sinais de Tendência

### 7.1 Enterprise Readiness como Diferenciador

**Evidência:**
- Hermes Agent: Matrix E2EE, Desktop App stable (4 P1s resolvidas)
- ZeroClaw: OIDC RFC com 6 comentários, autenticação plugável
- IronClaw: Postgres single-tenant profile (#5081) com DB migration

**Implicação:** O mercado open source de agentes amadurece para deployments corporativos. Autenticação, compliance e multi-tenant são requisitos, não diferenciais.

### 7.2 Mobile-First como Necessidade

**Evidência:**
- CoPaw: 10+ PRs mobile em paralelo — resposta direta a issue #5329 (5 comentários)
- PicoClaw: Safari iOS bug sem atenção há 12 dias
- NanoBot: WebUI responsiva em desenvolvimento

**Implicação:** Usuários acessam agentes via mobile browser ou apps. UX mobile não é mais opcional; é barreira de adoção.

### 7.3 Multi-Channel como Tabla Rasa

**Evidência:**
| Canal | Projetos | Status |
|-------|----------|--------|
| Mattermost | NanoBot #1011 (4 👍, 4 meses stale) | Demanda não atendida |
| SimpleX/Tox | PicoClaw #3093 | Feature request novo |
| Slack | CoPaw #5193 | PR open com Socket Mode |
| Telegram | Hermes, ZeroClaw, todos | Estável mas com bugs crônicos |
| Feishu | CoPaw #5353 | Bug de configuração ignorado |

**Implicação:** Usuários diversificam canais por privacidade e contexto organizacional. Integração não é mais "temos ou não temos", mas "quais e com qual qualidade".

### 7.4 Segurança em Arco de Adoção

**Timeline observada:**
1. **Early adopters** — priorizam features
2. **Growth** — escalabilidade, estabilidade
3. **Enterprise** — segurança, compliance

**Projetos por estágio:**

| Estágio | Projetos | Características |
|---------|----------|------------------|
| Enterprise | Hermes Agent, ZeroClaw | P0 security fixes, OIDC, audit trails |
| Growth | IronClaw, NanoBot | CI/CD, concurrent execution, TTS |
| Early | CoPaw, PicoClaw, NullClaw | Core functionality, bug triage |

### 7.5 Memory e Contexto como Próxima Fronteira

**Evidência:**
- ZeroClaw: `proactive_trim_turns` (#8049), eager memory consolidation (NanoBot #4402)
- CoPaw: Recency-aware ranking (#5325)
- NanoBot: `search_history` tool (#4439)
- Hermes Agent: session cache invalidation (#49257)

**Implicação:** Agentes estão evoluindo de stateless para stateful. Gestão de contexto de longo prazo, pruning inteligente e retrieval de memória tornam-se features centrais.

---

## Recomendações Estratégicas

| Público | Recomendação |
|---------|--------------|
| **Desenvolvedores contributing** | Priorizar NanoBot (#4436) e Hermes Agent (SSRF fixes) — alta visibilidade, segurança validada |
| **Decisores de adoção** | Avaliar Hermes Agent para Desktop enterprise; ZeroClaw para autenticação robusta; CoPaw para mobile-first |
| **DevRel/Comunidade** | NuClaw precisa de triagem ativa — 2 dias sem resposta em bug crítico afeta confiança |
| **DevOps/Platform** | IronClaw representa benchmark de CI/CD quality (292% cobertura); ZeroClaw demonstra RFC process disciplinado |

---

*Relatório compilado em 2026-06-22 com base em dados de 7 projetos do ecossistema open source de agentes de IA.*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>


# Relatório do Projeto NanoBot — 2026-06-22

## 1. Panorama do Dia

O NanoBot demonstra **alta atividade comunitária** em 22 de junho de 2026, com 32 PRs atualizados e 10 issues nas últimas 24h. A equipe mantém um fluxo intenso de desenvolvimento, com 18 PRs abertos e 14 merged/fechados, indicando maturidade no processo de code review. Duas **falhas de segurança críticas** relacionadas ao MCP foram reportadas e estão pendentes de correção. O projeto atravessa uma fase de refinamento, equilibrando melhorias de usabilidade (TTS multi-provider, onboarding wizard), otimizações de performance e correções de bugs críticos em streaming e concorrência.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto não publicou novas versões. A ausência de releases pode indicar que a equipe está em ciclo de preparação para um próximo lançamento, consolidando as múltiplas correções e features em开发. Acompanhamento recomendado para announcements.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados (5 total)

| PR | Título | Impacto |
|----|--------|---------|
| [#4316](https://github.com/HKUDS/nanobot/pull/4316) | feat(tts): add TTS configuration system with multi-provider support | Sistema de text-to-speech com suporte a OpenAI, Groq (Orpheus) e ElevenLabs. Expõe configurações via WebUI e persiste no config file padrão. |
| [#4323](https://github.com/HKUDS/nanobot/pull/4323) | fix(transcription): resolve env vars before transcription config lookup | Corrige falha silenciosa na transcrição ao resolver `${VAR}` templates antes da busca de chaves de API (ex: `GROQ_API_KEY`). |
| [#4324](https://github.com/HKUDS/nanobot/pull/4324) | fix(webui): resolve env-var templates in settings read paths | Garante que configurações de credenciais sejam exibidas corretamente após resolução de variáveis de ambiente. |
| [#4325](https://github.com/HKUDS/nanobot/pull/4325) | fix(webui): resolve env-var templates in settings update paths | Uniformiza lógica de comparação de valores de configuração após resolução de templates. |
| [#4422](https://github.com/HKUDS/nanobot/issues/4422) | feat(telegram): Add Bot API 10.1 sendRichMessage support | Implementa suporte nativo a tabelas, task lists, collapsible details e math blocks no Telegram. |

**Destaque:** A adição do sistema TTS multi-provider (#4316) representa uma feature significativa para acessibilidade e casos de uso em produção.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| Issue | Título | 👍 | Comentários | Tema Central |
|-------|--------|-----|-------------|--------------|
| [#1011](https://github.com/HKUDS/nanobot/issues/1011) | [stale] Mattermost Bot | 4 | 1 | **Integração de canais** — Solicitações de Mattermost como alternativa a Discord/Telegram/Slack por preocupações de privacidade. |
| [#4408](https://github.com/HKUDS/nanobot/issues/4408) | Bug: Nanobot.run() per-run hooks not concurrency-safe | 0 | 2 | **Concorrência** — `_extra_hooks` compartilhado causa race conditions em execuções paralelas. Closed. |

### PRs com Maior Engajamento

| PR | Título | Comentários | Tema Central |
|----|--------|-------------|--------------|
| [#4092](https://github.com/HKUDS/nanobot/pull/4092) | fix openai-compatible tool call parsing | undefined | **Parsing de ferramentas** — Corrige deduplicação de provider IDs e conversão de blocos `<tool_call>`. |
| [#4284](https://github.com/HKUDS/nanobot/pull/4284) | feat(webui): activate skills from slash palette | undefined | **UX** — Ativação de skills via comando `/skill` no slash palette da WebUI. |
| [#4402](https://github.com/HKUDS/nanobot/pull/4402) | feat(memory): add opt-in eager consolidation | undefined | **Memória** — Consolidação eager de conversas em `memory/history.jsonl` sem trimming da sessão ativa. |

**Análise:** A comunidade demonstra interesse forte em **(1)** expansão de canais de comunicação, **(2)** melhorias de UX na interface web, e **(3)** gerenciamento eficiente de memória de longo prazo.

---

## 5. Bugs e Estabilidade

### Bugs Abertos (por severidade)

#### 🔴 Críticos (ação imediata recomendada)

| Issue | Título | Impacto |
|-------|--------|---------|
| [#4442](https://github.com/HKUDS/nanobot/issues/4442) | Duplicate tool_use ids in streamed responses poison a session | Sessões ficam permanentemente quebradas com erro "tool_use ids must be unique" 400 ao usar provedores streaming Anthropic. |
| [#4435](https://github.com/HKUDS/nanobot/issues/4435) | [Security] nanobot MCP `enabledTools` allowlist bypass | Recursos e prompts MCP são expostos mesmo com `enabledTools: []` (bypass de segurança). |
| [#4434](https://github.com/HKUDS/nanobot/issues/4434) | [Security] Nanobot MCP `enabledTools` deny-all policy bypass | Mesma falha de #4435, documentação promete deny-all mas comportamento permite leaks. |

#### 🟡 Altos

| Issue | Título | Impacto |
|-------|--------|---------|
| [#4408](https://github.com/HKUDS/nanobot/issues/4408) | Nanobot.run() per-run hooks not concurrency-safe | Hooks internos (`SDKCaptureHook`) e externos (`hooks=`) competem por `_extra_hooks` compartilhado. **Closed — verificar se PR correspondente resolve.** |

### Bugs Corrigidos Recentemente

- **#4420** — Performance: `estimate_prompt_tokens` evitava encoding redundante de tool definitions via cache em nível tiktoken.
- **#4323/#4324/#4325** — Correções de resolução de variáveis de ambiente em configurações de transcrição e settings WebUI.

**Recomendação:** As falhas de segurança (#4434, #4435) requerem atenção imediata da equipe. O bug de streaming (#4442) impacta produção com provedores Anthropic.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Recentemente Implementadas

| PR | Feature | Status |
|----|---------|--------|
| [#4316](https://github.com/HKUDS/nanobot/pull/4316) | TTS multi-provider (OpenAI, Groq, ElevenLabs) | Merged |
| [#4225](https://github.com/HKUDS/nanobot/pull/4225) | Silent mode e lock_recipient para cron jobs | Open |
| [#4284](https://github.com/HKUDS/nanobot/pull/4284) | Ativação de skills via slash palette | Open |
| [#4271](https://github.com/HKUDS/nanobot/pull/4271) | Skip LLM processing para sessions read_only | Open |

### Novas Demandas

| Issue | Título | Descrição |
|-------|--------|-----------|
| [#4431](https://github.com/HKUDS/nanobot/issues/4431) | Add heartbeat-specific model override | Permite usar modelo mais barato/dedicado para HeartbeatService em vez do modelo principal do agent. |
| [#4440](https://github.com/HKUDS/nanobot/issues/4440) | Proposal: read-only `search_history` tool | Ferramenta para recuperar informações de `memory/history.jsonl` sem modificar o arquivo. PR #4439 implementado. |
| [#4413](https://github.com/HKUDS/nanobot/issues/4413) | Telegram Bot API 10.1 rich messages | Solicita conversão de markdown padrão para formato Telegram rich. |
| [#1011](https://github.com/HKUDS/nanobot/issues/1011) | Mattermost Bot integration | Canal alternativo por preocupações de privacidade. |

**Sinais de Roadmap:**
- **Orquestração e automação:** Heartbeat com modelos customizáveis (#4431), cron jobs com modo silencioso (#4225).
- **Memória de longo prazo:** Eager consolidation (#4402) + search_history tool (#4439).
- **Canais de comunicação:** Expansão para Mattermost (#1011), melhorias Telegram rich messages (#4413).
- **Segurança MCP:** Gate de recursos/prompts atrás de enabledTools (#4436).

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Categoria | Descrição | Issues Relacionadas |
|-----------|-----------|---------------------|
| **Concorrência** | Hooks não são thread-safe em `Nanobot.run()` | #4408 (fixado) |
| **Performance** | Encoding tiktoken redundante a cada iteração | #4420 (fixado) |
| **Streaming** | Sessões quebradas por tool_use IDs duplicados | #4442 |
| **Configuração** | Templates `${VAR}` não resolvidos em configurações | #4323, #4324, #4325 (fixados) |
| **Privacidade** | Usuários buscam alternativas a Discord/Telegram/Slack | #1011 |
| **Segurança MCP** | Bypass de allowlist expõe recursos não autorizados | #4434, #4435 |

### Cenários de Uso Reportados

1. **Digital employees / nanobee projects** — Usuários construindo funcionários digitais com NanoBot experimentam latência elevada por encoding redundante (#4420).
2. **Background monitoring tasks** — Necessidade de cron jobs silenciosos que não notifiquem o usuário quando não há ação necessária (#4225, #4412).
3. **Read-only informational sessions** — Sessões informativas na sidebar (welcome, config guides, announcements) não devem acionar LLM desnecessariamente (#4271).
4. **Long-term memory recall** — Agentes precisam recuperar informações de conversas anteriores via `memory/history.jsonl` (#4440, #4439).

### Indicadores de Satisfação

- 👍 4 em #1011 (Mattermost) indica demanda real por diversificação de canais.
- Atividade intensa de PRs sugere comunidade engajada.
- Múltiplos contributors simultâneos (hamb1y, DreamShepherd2006, waelantar, michaelxer, etc.) indica healthy collaboration.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Stale

| Issue | Título | Idade | Estado | Recomendação |
|-------|--------|-------|--------|--------------|
| [#1011](https://github.com/HKUDS/nanobot/issues/1011) | Mattermost Bot | ~4 meses | stale, 1 comentário | Avaliar viabilidade e priorização. Usuário demonstrou interesse ativo recentemente. |
| [#4092](https://github.com/HKUDS/nanobot/pull/4092) | fix openai-compatible tool call parsing | ~24 dias | open | PR pronto para review? Interação recente. |
| [#3869](https://github.com/HKUDS/nanobot/pull/3869) | DeepSeek message hardening | ~37 dias | open | Problema de compatibilidade com DeepSeek v4-pro/flash. |

### PRs Abertos com Potencial Impacto

| PR | Feature | Tempo Aberto | Impacto | Prioridade |
|----|---------|--------------|---------|------------|
| [#4436](https://github.com/HKUDS/nanobot/pull/4436) | Gate MCP resources/prompts behind enabledTools | <1 dia | 🔴 Segurança | **Alta** — Corrige #4434/#4435 |
| [#4441](https://github.com/HKUDS/nanobot/pull/4441) | Force-close streamable_http generator | <1 dia | Estabilidade MCP | **Alta** — Corrige RuntimeError em reconnect |
| [#4402](https://github.com/HKUDS/nanobot/pull/4402) | Eager memory consolidation | ~4 dias | Memória | Média-Alta |
| [#4271](https://github.com/HKUDS/nanobot/pull/4271) | Skip LLM for read_only sessions | ~12 dias | Performance/UX | Média |

### Recomendações de Priorização

1. **Imediato:** Revisar e merge do #4436 (segurança MCP).
2. **Esta semana:** Investigar e corrigir #4442 (streaming tool_use IDs) e #4441 (MCP reconnect crash).
3. **Breve:** Avaliar #1011 (Mattermost) — demanda antiga com interesse renovado.
4. **Próximo ciclo:** Feature freeze para consolidar TTS (#4316) + memory improvements (#4402, #4439).

---

*Relatório gerado automaticamente com base em dados do GitHub de 2026-06-22. Última atualização: 2026-06-22.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-06-22

---

## 1. Panorama do Dia

O Hermes Agent manteve uma atividade intensa em 21 de junho, com **50 issues e 50 PRs atualizados** nas últimas 24 horas — um ritmo de desenvolvimento acelerado. **Nenhuma release foi publicada**, indicando que a equipe está em ciclo de integração e preparação para o próximo corte. O destaque vai para a **resolução de múltiplas vulnerabilidades de segurança críticas** (P0/P2) relacionadas a vazamento de credenciais e bypass de SSRF via IPv6, além de correções de estabilidade no Desktop e Telegram. A base de código está em estado de alta rotatividade, com 28 PRs fechados e 22 ainda abertos, sugerindo uma sprint ativa de bugfixes pré-release.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

A ausência de releases indica que a equipe pode estar finalizando o ciclo de QA ou preparando um bundle de correções. Recomenda-se monitorar o repositório para a próxima tag, especialmente considerando o volume de correções de segurança pendentes de distribuição.

---

## 3. Progresso do Projeto

### PRs Merged/Encerrados Mais Relevantes

| # | Título | Prioridade | Impacto |
|---|--------|-----------|---------|
| [#50423](https://github.com/NousResearch/hermes-agent/pull/50423) | `fix(redact)`: mascara todos os esquemas Authorization e headers x-api-key | **P2** 🔒 | Corrige vazamento de credenciais em logs e transcripts |
| [#50254](https://github.com/NousResearch/hermes-agent/pull/50254) | `fix`: grace call orphans tool results | **P1** | Agent não ficava preso no limite de iteração |
| [#50189](https://github.com/NousResearch/hermes-agent/pull/50189) | `fix(gateway)`: skip DB persist quando model switch falha | **P1** | Evita estado inconsistente após falha de troca de modelo |
| [#49257](https://github.com/NousResearch/hermes-agent/pull/49257) | `fix(gateway)`: invalidate agent cache quando session_id rotaciona | **P1** | Corrige对话历史错误 após /new ou compressão |
| [#48283](https://github.com/NousResearch/hermes-agent/pull/48283) | `fix(gateway)`: guarda cron ticker contra SystemExit | **P1** | Gateway não morre mais em erros de provider SDK |
| [#25961](https://github.com/NousResearch/hermes-agent/pull/25961) / [#50414](https://github.com/NousResearch/hermes-agent/pull/50414) | `fix(security)`: trata IPv6 scope IDs para evitar bypass de SSRF | **P0** 🔒 | Segurança crítica — endereços IPv6 com scope ID eram ignorados |
| [#47073](https://github.com/NousResearch/hermes-agent/pull/47073) / [#50413](https://github.com/NousResearch/hermes-agent/pull/50413) | `fix(gateway)`: respeita decline do adapter para evitar double delivery no Telegram | **P1** | Mensagens não são mais duplicadas com tables em Markdown |
| [#47667](https://github.com/NousResearch/hermes-agent/pull/47667) / [#47615](https://github.com/NousResearch/hermes-agent/pull/47615) | `fix(backup)`: previne rollback de podar snapshot alvo | **P1** | Restore não apaga o snapshot que deveria restaurar |
| [#46313](https://github.com/NousResearch/hermes-agent/pull/46313) | `fix(gateway)`: libera Telegram Application orfa em falha de conexão | **P1** | Evita vazamento de httpx pools |

**Resumo:** O sprint focou em **estabilidade do gateway e segurança**. Dezenas de P1s resolvidos cobrem áreas críticas: Telegram, Desktop, cron, cache de sessão e backup. A atenção à segurança (2 PRs P0/P2 sobre vazamento de credenciais e SSRF) sugere auditoria interna ou reporte de responsible disclosure.

---

## 4. Temas Quentes da Comunidade

### Issues/PRs com Maior Engajamento (comentários + reações)

| # | Tipo | Título | Comentários | 👍 | Tendência |
|---|------|--------|-------------|----|-----------|
| [#45500](https://github.com/NousResearch/hermes-agent/issues/45500) | 🔒 Security | Matrix: mensagens de texto ignoram E2EE (apenas arquivos eram criptografados) | 6 | 0 | ⚠️ **Fechada** — mas revela brecha séria de segurança em rooms encriptadas |
| [#13125](https://github.com/NousResearch/hermes-agent/issues/13125) | Bug | Hindsight daemon crash-restart loop infinito ao rodar como root | 5 | 1 | ⚠️ Fechada — postgres `initdb` se recusa a rodar como root |
| [#44637](https://github.com/NousResearch/hermes-agent/issues/44637) | Feature | Verification gates aplicados em runtime para Skills | 4 | 0 | 📈 Demanda por enforcement de procedimentos em alta-stakes |
| [#39706](https://github.com/NousResearch/hermes-agent/issues/39706) | Bug | `hermes update` crash com `ValueError: too many values to unpack` | 3 | **4** | 🔥 Alto impacto em atualizações — 4 👍 é atípico |
| [#50169](https://github.com/NousResearch/hermes-agent/issues/50169) | Bug | Processos MCP stdio viram zumbis — acumulam 40+ orfãos em 24h | 2 | 0 | ⚠️ **Duplicata** reportada — problema sistêmico no lifecycle de MCP |
| [#50394](https://github.com/NousResearch/hermes-agent/issues/50394) | Bug | Um servidor MCP falhando desestabiliza toda a bridge — ferramentas viram "Unknown" | 1 | 0 | 📈 Problema em cascata na arquitetura MCP |
| [#50293](https://github.com/NousResearch/hermes-agent/issues/50293) | Feature | Toggle dinâmico de thinking via auto-detecção do modelo | 1 | 0 | 💡 Feature inovadora de self-escalation |

**Análise:** A issue de E2EE no Matrix (#45500) gerava mais comentários, sinalizando preocupação com segurança em ambientes corporativos. A issue #39706 sobre `hermes update` com 4 👍 indica dor compartilhada na experiência de atualização. A demanda por **verification gates em runtime** (#44637) é um pedido maduro que pode indicar uso em cenários de produção críticos.

---

## 5. Bugs e Estabilidade

### Por Severidade

#### **P0 — Críticos (2 items)**

| # | Título | Plataforma/Componente | Status |
|---|--------|----------------------|--------|
| [#25961](https://github.com/NousResearch/hermes-agent/issues/25961) | Bypass de SSRF via IPv6 scope IDs — endereços como `fe80::1%eth0` eram silenciosamente ignorados na checagem de URLs | `comp/tools`, `tool/web` | ✅ **Corrigido** (#50414 merged) |
| [#8518](https://github.com/NousResearch/hermes-agent/issues/8518) | API key exposta em dumps de debug — apenas `Authorization: Bearer` era mascarado, outros esquemas vazavam | `comp/agent` | ✅ **Corrigido** (#50407/#50423 merged) |

#### **P1 — Altos (em destaque)**

| # | Título | Plataforma/Componente | Status |
|---|--------|----------------------|--------|
| [#45500](https://github.com/NousResearch/hermes-agent/issues/45500) | **Matrix E2EE**: mensagens de texto não são encriptadas em rooms E2EE | `platform/matrix` | ✅ Fechada |
| [#50090](https://github.com/NousResearch/hermes-agent/issues/50090) | **Windows**: bootstrap-installer mata Gateway sem resspawnar — Telegram para | `comp/cli`, `platform/telegram` | ✅ Fechada |
| [#49609](https://github.com/NousResearch/hermes-agent/issues/49609) | **Desktop**: UI congela após update (session recovery 404) | `comp/tui` | ✅ Fechada |
| [#50291](https://github.com/NousResearch/hermes-agent/issues/50291) | **Desktop**: trava em 94% — backend killed após reportar ready (Windows native) | `comp/tui`, `comp/gateway` | ✅ Fechada |
| [#50209](https://github.com/NousResearch/hermes-agent/issues/50209) | **Desktop**: boot hang em ~94% com WSL2 (native Windows + WSL2) | `comp/tui`, `comp/gateway` | ✅ Fechada |
| [#49206](https://github.com/NousResearch/hermes-agent/issues/49206) | **Windows**: gateway deadlock com `shared=True` + asyncio no Windows | `comp/gateway` | ✅ Fechada |
| [#48648](https://github.com/NousResearch/hermes-agent/issues/48648) | **Telegram**: loop infinito de duplicação em overflow de 4096 chars | `comp/gateway`, `platform/telegram` | 🟡 **Aberta** |
| [#49257](https://github.com/NousResearch/hermes-agent/issues/49257) | **Gateway**: agent cache reuse stale após session_id rotacionar | `comp/gateway` | ✅ Corrigido |
| [#48283](https://github.com/NousResearch/hermes-agent/issues/48283) | **Cron**: gateway exit 1 em erro de LLM no cron — crash loop | `comp/cron` | ✅ Corrigido |
| [#8637](https://github.com/NousResearch/hermes-agent/issues/8637) | **WhatsApp**: crash em números de telefone — JID normalization ausente | `platform/whatsapp` | ✅ Fechada |

#### **P2 — Médios (em destaque)**

| # | Título | Plataforma/Componente | Status |
|---|--------|----------------------|--------|
| [#47048](https://github.com/NousResearch/hermes-agent/issues/47048) | **Telegram**: rich-message final reply sobrepõe MarkdownV2 legado (table duplicada) | `platform/telegram` | ✅ Corrigido |
| [#50169](https://github.com/NousResearch/hermes-agent/issues/50169) | **MCP**: processos stdio acumulam como zumbis após disconnect | `tool/mcp` | 🟡 **Duplicata** — aguarda consolidação |
| [#50394](https://github.com/NousResearch/hermes-agent/issues/50394) | **MCP**: um servidor falhando desestabiliza toda a bridge | `tool/mcp`, `comp/gateway` | 🟡 **Aberta** |

**Análise de estabilidade:** O Desktop App é a área com maior volume de P1s (4 issues distintas de boot/freezing), todaselas fechadas. Telegram também apresenta instabilidade crônica (3 issues P1/P2 distintas). A arquitetura MCP demonstra fragilidade em cascata — um servidor falhando afeta todo o subsistema.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Abertas

| # | Título | Componente | Prioridade | Sinal Estratégico |
|---|--------|-----------|-----------|-------------------|
| [#44637](https://github.com/NousResearch/hermes-agent/issues/44637) | Runtime-enforced verification gates para Skills | `tool/skills` | P3 | 📈 **Automação de alta-stakes** — indica uso em produção crítica (CI/CD, deploys) |
| [#20140](https://github.com/NousResearch/hermes-agent/issues/20140) | Cron: permitir `send_message` tool por job | `comp/cron` | P3 | 📈 **Notificações proativas** — demanda para alerting e automação de canais |
| [#16216](https://github.com/NousResearch/hermes-agent/issues/16216) | Per-request model override via header ou body | `comp/agent`, `comp/gateway` | P3 | 📈 **Routing inteligente** — indica uso como proxy/router multi-modelo |
| [#50293](https://github.com/NousResearch/hermes-agent/issues/50293) | Toggle dinâmico de thinking via self-detection do modelo | `comp/agent` | P3 | 💡 **Eficiência de custo** — auto-escalação de reasoning |
| [#50416](https://github.com/NousResearch/hermes-agent/pull/50416) | Curator: suporte a `reasoning_effort` override | `comp/agent` | P3 | 💡 **Curator customization** — consolidador de contexto com controle de effort |
| [#50428](https://github.com/NousResearch/hermes-agent/pull

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>


# Relatório do Projeto PicoClaw — 2026-06-22

## 1. Panorama do Dia

O projeto PicoClaw mantém atividade moderada com **5 issues e 3 PRs atualizados** nas últimas 24h. Uma nova **nightly build (v0.3.0-nightly.20260621)** foi publicada, sinalizando progresso contínuo em direção à versão 0.3.0. A comunidade reporta dois bugs críticos — um relacionado ao consumo excessivo de tokens na funcionalidade Evolution e outro sobre parsing incorreto de flags globais no comando `mcp add` — enquanto um PR de correção de configuração foi mergeado, demonstrando atenção à estabilidade. O ritmo de atividade sugere um projeto ativo, porém com pendências técnicas que exigem resolução antes do próximo release estável.

---

## 2. Lançamentos

### Nova Release: nightly-20260621

| Artefato | Detalhes |
|----------|----------|
| **Versão** | `v0.3.0-nightly.20260621.287853ab` |
| **Tipo** | Nightly Build (automático) |
| **Comparativo** | [v0.3.0...main](https://github.com/sipeed/picoclaw/compare/v0.3.0...main) |

**Aviso oficial:** Esta build é automatizada e pode ser instável. O histórico completo de mudanças está disponível no link acima.

**Observação:** A ausência de changelog detalhado nesta nightly indica que o release foi gerado por pipeline CI/CD, sem revisão manual de Commits/Merges.

---

## 3. Progresso do Projeto

### PR Mergeado/Closed (últimas 24h)

| # | Título | Domínio | Impacto |
|---|--------|---------|---------|
| [#2565](https://github.com/sipeed/picoclaw/pull/2565) | fix(config): preserve explicit `mention_only=false` in GroupTriggerConfig | Config | **Alto** — Corrige regressão onde `false` explícito era ignorado pelo unmarshal JSON |

**Análise Técnica (PR #2565):**
- **Problema:** O campo `GroupTriggerConfig.MentionOnly` utiliza tag `json:"mention_only,omitempty"`. Por ser um `bool` (zero-value = `false`), o Go omite o campo ao serializar mesmo quando definido explicitamente como `false`.
- **Consequência:** Ao recarregar configuração, o valor era sobrescrito pelo `defaultChannels()`, que hardcoda `MentionOnly=true`.
- **Solução:** Remover o `omitempty` ou utilizar ponteiro (`*bool`) para distinguir entre "não especificado" e "explicitamente falso".
- **Status:** Closed em 2026-06-21.

### PRs Abertos (Dependências Frontend)

| # | Título | Dependência | Atualização |
|---|--------|-------------|-------------|
| [#3103](https://github.com/sipeed/picoclaw/pull/3103) | bump typescript-eslint 8.59.3 → 8.61.0 | Frontend | stale |
| [#3105](https://github.com/sipeed/picoclaw/pull/3105) | bump eslint 10.2.1 → 10.4.1 | Frontend | stale |

Ambos PRs são de autoria do **Dependabot** e aguardam revisão. Atualização:标记 como stale, sugerindo necessidade de merge ou close.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (Comentários/Reações)

| # | Tipo | Título | Comentários | 👍 | Tendência |
|---|------|--------|-------------|----|-----------|
| [#3012](https://github.com/sipeed/picoclaw/issues/3012) | BUG | Token consumption contínuo com Evolution habilitada | 5 | 0 | 🔴 Ativo |
| [#3093](https://github.com/sipeed/picoclaw/issues/3093) | Feature | Suporte a SimpleX ou Tox | 2 | 1 | 🟡 Novo |
| [#3090](https://github.com/sipeed/picoclaw/issues/3090) | BUG | Painel não funciona no Safari iOS < 16.4 | 2 | 0 | 🟡 Ativo |

### Análise das Demandas

**#3012 — Bug Crítico de Consumo de Tokens:**
- **Cenário:** Usuário no FreeBSD com Evolution habilitado (Modo Draft) reportando consumo constante de tokens a cada minuto.
- **Impacto:** Custo financeiro direto e degradação de performance.
- **Ambiente:** PicoClaw v0.2.9, Go 1.25.10, provedor MiniMax.
- **Urgência:** 5 comentários indicam discussão técnica ativa; precisa de triagem imediata.

**#3093 — Pedido de Protocolos Alternativos:**
- Demanda por gateways SimpleX/Wire/Tox indica que usuários querem alternativas a Matrix/Slack.
- Sinal de que a base de usuários está diversificando casos de uso.

**#3090 — Compatibilidade Safari:**
- Bug de UI/UX afeta usuários Apple com iOS antigo (< 16.4).
- Possivelmente relacionado a APIs JavaScript (IndexedDB, WebSocket) não disponíveis em versões antigas do Safari.

---

## 5. Bugs e Estabilidade

### Bugs Abertos

| # | Severidade | Título | Status | Plataforma |
|---|------------|--------|--------|------------|
| [#3012](https://github.com/sipeed/picoclaw/issues/3012) | **🔴 Alta** | Consumo contínuo de tokens (Evolution) | OPEN | FreeBSD |
| [#3090](https://github.com/sipeed/picoclaw/issues/3090) | 🟡 Média | Painel quebrado no Safari iOS < 16.4 | OPEN (stale) | iOS |
| [#3093](https://github.com/sipeed/picoclaw/issues/3093) | 🟡 Média | Necessidade de SimpleX/Tox (não é bug) | OPEN | — |

### Bugs Resolvidos (últimas 24h)

| # | Título | Tempo de Vida | Resolução |
|---|--------|---------------|-----------|
| [#3044](https://github.com/sipeed/picoclaw/issues/3044) | allow_from falha com Matrix user IDs contendo dois-pontos | ~14 dias | CLOSED |
| [#3041](https://github.com/sipeed/picoclaw/issues/3041) | `mcp add` mal-parseia flags globais em positionals | ~14 dias | CLOSED |

**Análise de Estabilidade:**
- Taxa de resolução: 2/5 bugs fechados = 40% nas últimas 24h.
- **Preocupação:** Issue #3012 tem potencial de impacto financeiro e deve ser priorizada.
- Bugs relacionados a parsing de configuração (#3041) e Matrix (#3044) indicam necessidade de hardening em validação de inputs.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Feature Requests Abertos

| # | Título | Autor | 👍 | Complexidade Estimada |
|---|--------|-------|----|----------------------|
| [#3093](https://github.com/sipeed/picoclaw/issues/3093) | Suporte a SimpleX ou Tox como gateway | Damian-o2 | 1 | Alta (novo protocolo) |

### Sinais de Roadmap

1. **Evolução para v0.3.0:**
   - A nightly build indica que a versão 0.3.0 está em desenvolvimento ativo.
   - O PR #2565 (correção de config) foi fechado, sugerindo que a branch principal está sendo preparada para release.

2. **Expansão de Protocolos:**
   - Pedidos por SimpleX/Tox indicam demanda por descentralização além de Matrix.
   - Não há evidência de timeline oficial para esses protocolos.

3. **Frontend Modernization:**
   - Atualizações de dependências (typescript-eslint, eslint) sugerem trabalho em melhorias de DX no frontend web.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Categoria | Descrição | Frequência | Prioridade |
|-----------|-----------|------------|------------|
| **Custo/Integração AI** | Evolução consome tokens excessivamente sem ação do usuário | 1 (crítico) | 🔴 Alta |
| **UX Mobile** | Interface quebrada em Safari iOS antigo | 1 | 🟡 Média |
| **Configuração** | Comportamento inesperado com `mention_only=false` e Matrix IDs | 2 | 🟡 Média |
| **Funcionalidade CLI** | `mcp add` quebra com URLs HTTP/SSE | 1 | 🟡 Média |

### Cenários de Uso Observados

- **Agente pessoal em FreeBSD:** Usuário avançando utiliza PicoClaw como assistente pessoal com Evolution ativado, conectando a provedores AI (MiniMax).
- **Servidor Matrix auto-hospedado:** Usuários configuram canais Matrix com controle de acesso granular (`allow_from`).
- **Raspberry Pi:** Ambiente de deploy comum (Debian 13).

### Satisfação Geral

| Indicador | Leitura |
|-----------|---------|
| Engajamento em Issues | Moderado (2-5 comentários por issue ativa) |
| Bugs resolvidos | Rápido (~14 dias) |
| Novas features | Mínimas (1 request nas últimas 24h) |
| Atividade de PR | Baixa (apenas dependências automáticas) |

**Conclusão:** Usuários estão ativamente reportando problemas, especialmente relacionados a Edge cases em configurações e integrações. A resposta da equipe parece responsiva, mas o projeto precisa de mais contribuidores para PRs funcionais.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Stale

| # | Tipo | Título | Criado | Dias Inativo | Urgência |
|---|------|--------|--------|--------------|----------|
| [#3090](https://github.com/sipeed/picoclaw/issues/3090) | BUG | Painel não funciona no Safari iOS < 16.4 | 2026-06-10 | ~12 dias | 🟡 |
| [#3044](https://github.com/sipeed/picoclaw/issues/3044) | BUG | allow_from falha com Matrix IDs (já fechado) | 2026-06-07 | — | ✅ Resolvido |
| [#3041](https://github.com/sipeed/picoclaw/issues/3041) | BUG | `mcp add` mal-parseia flags | 2026-06-07 | — | ✅ Resolvido |

### PRs Stale

| # | Título | Criado | Dias Inativo |
|---|--------|--------|--------------|
| [#3103](https://github.com/sipeed/picoclaw/pull/3103) | bump typescript-eslint | 2026-06-11 | ~11 dias |
| [#3105](https://github.com/sipeed/picoclaw/pull/3105) | bump eslint | 2026-06-11 | ~11 dias |

### Recomendações para Triagem

1. **PRs Dependabot (#3103, #3105):** Mesmo sendo updates de dev-dependencies, devem ser mergeados para evitar tech debt no frontend.
2. **Issue #3090:** Confirmar se é replicável e, caso positivo, priorizar correção para próxima release.
3. **Issue #3012:** Designar mantenedor para investigar consumo de tokens — potencial problema de loop infinito no Evolution.

---

**Relatório gerado em:** 2026-06-22  
**Fonte de dados:** github.com/sipeed/picoclaw  
**Período analisado:** últimas 24h

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-06-22

---

## 1. Panorama do Dia

O projeto IronClaw manteve um **ritmo de atividade intenso** nas últimas 24 horas, com 30 PRs atualizados e 3 issues processadas. A equipe demonstrou foco em **infraestrutura de CI/CD** (três PRs de CI merged/revisados) e **estabilidade do runtime Reborn**, com esforços para expandir a cobertura de testes para toda a closure de dependências. Não houve lançamentos hoje, mas diversas PRs de tamanho XL estão em revisão, indicando entregas significativas em pipeline. A saúde geral é positiva, com regressões sendo ativamente corrigidas e a base de código avanzando em múltiplas frentes simultâneas.

---

## 2. Lançamentos

**Nenhum release realizado nas últimas 24 horas.**

O projeto está em fase de desenvolvimento ativo, com múltiplas PRs de tamanho XL em revisão. Não há changelogs ou notas de migração aplicáveis neste período.

---

## 3. Progresso do Projeto

### PRs Mergeadas/Fechadas Hoje (13 total)

| PR | Título | Tamanho | Risco | Impacto |
|----|--------|---------|-------|---------|
| [#4990](https://github.com/nearai/ironclaw/pull/4990) | fix(reborn): NEAR AI MCP ready state projection | XL | Low | Corrige projeção indevida de credenciais como requirements de extensão |
| [#5110](https://github.com/nearai/ironclaw/pull/5110) | ci(reborn): run full reborn_cli dependency closure on PR | M | Medium | Expande CI de 21 para 64 crates, cobrindo dependências reais |
| [#5112](https://github.com/nearai/ironclaw/pull/5112) | test(host_runtime): clear closure-exposed test debt | XS | Low | Limpa 2 falhas determinísticas de testes expostas pela closure expandida |
| [#5111](https://github.com/nearai/ironclaw/pull/5111) | fix(coding): read_file limit:0 footer + align stale concurrent-install test | XS | Low | Corrige bug real em `read_file` + teste flaky |
| [#4830](https://github.com/nearai/ironclaw/pull/4830) | ci: run Reborn E2E in merge queue with internal scope gating | M | Medium | Adiciona E2E deterministic gate ao merge queue |
| [#4499](https://github.com/nearai/ironclaw/pull/4499) | build(deps): tokio-ecosystem group (3 updates) | M | Medium | Atualização de dependências tokio |

**Destaque:** A PR [#5110](https://github.com/nearai/ironclaw/pull/5110) representa uma **melhoria crítica de qualidade**, expandindo a matriz de CI do PR de 21 para 64 crates (292% de aumento na cobertura de dependências). Isso expôs imediatamente 2 falhas determinísticas que foram corrigidas nas PRs [#5111](https://github.com/nearai/ironclaw/pull/5111) e [#5112](https://github.com/nearai/ironclaw/pull/5112) no mesmo dia — um ciclo de feedback excelente.

---

## 4. Temas Quentes da Comunidade

### PRs em Destaque (Revisão Ativa)

| PR | Título | Comentários | Tamanho | Escopo |
|----|--------|-------------|---------|--------|
| [#5065](https://github.com/nearai/ironclaw/pull/5065) | feat(triggers): one-shot scheduled triggers via `TriggerSchedule::Once{at}` | 🔴 N/A | XL | triggers, docs |
| [#5085](https://github.com/nearai/ironclaw/pull/5085) | feat(reborn): concurrent turn execution via TurnRunScheduler | 🔴 N/A | XL | reborn, concurrency |
| [#5081](https://github.com/nearai/ironclaw/pull/5081) | feat(reborn): hosted single-tenant Postgres profile | 🔴 N/A | XL | db/postgres, sandbox |
| [#5063](https://github.com/nearai/ironclaw/pull/5063) | feat(reborn): per-turn auto-approve resolution | 🔴 N/A | XL | reborn, approvals |
| [#4937](https://github.com/nearai/ironclaw/pull/4937) | reborn(learning): WS-1 memory learning + A/B gate | 🔴 N/A | XL | reborn, learning |
| [#5109](https://github.com/nearai/ironclaw/pull/5109) | feat(reborn): read-only + gated-write Composio connector | 🔴 N/A | XL | reborn, connectors |

**Análise:** As 6 PRs mais relevantes são todas de tamanho **XL**, indicando entregas de alto impacto. Os temas dominantes são:

1. **Reborn Runtime** — Execução concorrente (#5085), auto-aprovação (#5063), e sistema de aprendizado (#4937)
2. **Triggers** — Suporte a triggers one-shot (#5065)
3. **Infraestrutura** — Perfil Postgres single-tenant (#5081) com migração de banco
4. **Conectores** — Integração Composio para Workbench (#5109)

---

## 5. Bugs e Estabilidade

### Issue de Alta Prioridade Aberta

| # | Título | Escopo | Severidade | Status |
|---|--------|--------|------------|--------|
| [#5071](https://github.com/nearai/ironclaw/issues/5071) | [bug, risk: high] Proactively refresh Google OAuth tokens before expiry | worker, secrets, reborn | 🔴 **High** | OPEN |

**Resumo:** Tokens OAuth do Google expiram em ~1 hora, causando reautenticação frequente para usuários Reborn. A solução proposta é usar o refresh token para renovação proativa antes da expiração.

### Issue de CI/Estabilidade

| # | Título | Escopo | Severidade | Status |
|---|--------|--------|------------|--------|
| [#4108](https://github.com/nearai/ironclaw/issues/4108) | Nightly E2E failed | ci | 🟡 Medium | OPEN |

**Resumo:** Workflow de E2E noturno falhou. Jobs afetados incluem E2E extensions.

### Mitigação Ativa

- **PR [#5115](https://github.com/nearai/ironclaw/pull/5115)** — ci(reborn): retry crates.io network failures (CARGO_NET_RETRY) —endereça falhas transitórias de rede no CI que afetam múltiplos jobs simultaneamente.

**Métricas de Estabilidade:** 2 de 3 issues abertas são de prioridade média/baixa. A issue de alto risco (#5071) está aguardando atenção.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Nova Feature Request

| # | Título | Escopo | Complexidade | Status |
|---|--------|--------|--------------|--------|
| [#5117](https://github.com/nearai/ironclaw/issues/5117) | [enhancement] Automations: add "Completed" summary card with server-side count | automations | M | OPEN |

**Resumo:** Adicionar card "COMPLETED" à strip de summary do `/v2/automations`, mostrando automações one-shot completadas. Preenche a 6ª célula vazia do grid e emparelha com o filtro "Completed" shipped em PR #5065.

### Sinais de Roadmap Observados

Baseado nas PRs em desenvolvimento, o roadmap próximo inclui:

1. **Reborn Learning System** (WS-1) — PR [#4937](https://github.com/nearai/ironclaw/pull/4937)
   - Semântica de aprendizado via documentos de memória
   - Gate A/B para experimentação controlada

2. **Execução Concorrente** — PR [#5085](https://github.com/nearai/ironclaw/pull/5085)
   - `TurnRunScheduler` com caps por usuário/tipo
   - Quebra do gargalo de execução serial

3. **Per-Turn Auto-Approve** — PR [#5063](https://github.com/nearai/ironclaw/pull/5063)
   - Store DB-backed para configurações de auto-aprovação
   - Backends: memória + filesystem (CAS-versioned)

4. **Hosted Single-Tenant Postgres** — PR [#5081](https://github.com/nearai/ironclaw/pull/5081) ⚠️ DB MIGRATION
   - Perfil alternativo para preview hospedado
   - Estado durável com Postgres, mantendo surface de dev local

---

## 7. Resumo de Feedback dos Usuários

**Nenhum feedback de usuário explícito registrado nas issues/PRs das últimas 24 horas.**

### Análise Indireta (Baseada em Issues)

| Dor | Evidência | Issue |
|-----|-----------|-------|
| Experiência de automações incompleta | Card "Completed" ausente, apenas filtro implementado | [#5117](https://github.com/nearai/ironclaw/issues/5117) |
| Reautenticação OAuth frequente | Tokens expiram em ~1h, sem refresh proativo | [#5071](https://github.com/nearai/ironclaw/issues/5071) |
| Falhas de CI instáveis | E2E noturno falhando regularmente | [#4108](https://github.com/nearai/ironclaw/issues/4108) |

**Observação:** As dores identificadas são todas técnicas/devex, não há reclamações de UX do produto final.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta/Atendimento Prolongado

| # | Título | Criado | Atualizado | Comentários | Prioridade |
|---|--------|--------|------------|-------------|------------|
| [#4108](https://github.com/nearai/ironclaw/issues/4108) | Nightly E2E failed | 2026-05-27 | 2026-06-21 | 0 | 🟡 Medium |
| [#5071](https://github.com/nearai/ironclaw/issues/5071) | Google OAuth token refresh | 2026-06-18 | 2026-06-21 | 0 | 🔴 High |

### Análise

- **Issue #4108** — Aberta há **26 dias**, com falha recorrente no E2E noturno. Atualizada em 2026-06-21, indicando atenção recente, mas ainda em aberto.
- **Issue #5071** — Risco alto, aberta há 4 dias, sem comentários. **Recomendação:** Priorizar triagem e.assign.

### PRs Antigas em Aberto (Dependabot)

| # | Título | Criado | Atualizado | Tamanho |
|---|--------|--------|------------|---------|
| [#4002](https://github.com/nearai/ironclaw/pull/4002) | build(deps): actions group (16 updates) | 2026-05-24 | 2026-06-21 | L |
| [#4032](https://github.com/nearai/ironclaw/pull/4032) | build(deps): wasm group (2 updates) | 2026-05-25 | 2026-06-21 | M |
| [#4498](https://github.com/nearai/ironclaw/pull/4498) | build(deps): serde_yml 0.0.12→0.0.13 | 2026-06-05 | 2026-06-21 | S |

**Recomendação:** PRs dependabot abertas há mais de 2 semanas devem ser revisadas ou fechadas para manter hygiene do repo.

---

## Métricas Consolidada do Período

| Métrica | Valor |
|---------|-------|
| Issues abertas/ativas | 2 |
| Issues fechadas | 1 |
| PRs abertas | 17 |
| PRs mergeadas/fechadas | 13 |
| Novas releases | 0 |
| Issues de alta severidade | 1 |
| PRs com DB migration | 1 (#5081) |
| PRs dependabot pendentes (>7 dias) | 3 |

---

*Relatório gerado automaticamente com base em dados do GitHub de 2026-06-22. Todas as URLs referenciam https://github.com/nearai/ironclaw.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do Projeto CoPaw — 2026-06-22

---

## 1. Panorama do Dia

O projeto CoPaw (QwenPaw) apresenta **alta atividade comunitária** em 22 de junho de 2026, com 15 issues e 28 PRs atualizados nas últimas 24 horas. A equipe e colaboradores estão concentrados em **melhorias massivas de responsividade mobile** — ao menos 10 PRs abordam esse tema, indicando uma resposta direta a problemas reportados por usuários em dispositivos móveis. O ciclo de desenvolvimento está saudável, com PRs sendo abertos e mergeados rapidamente, embora **nenhuma release oficial** tenha sido publicada hoje. A principal preocupação técnica gira em torno de **estabilidade do message queue**, integração com provedores de modelo (DeepSeek, Zhipu, OMLX) e problemas de context overflow em chamadas de ferramentas.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24 horas.**

O projeto não registrou novos versionamentos desde a última atualização. A versão mais recente mencionada nos reports de bugs é `v1.1.12.post1`, indicando que a equipe está em ciclo de desenvolvimento ativo antes do próximo tag.

---

## 3. Progresso do Projeto

### PRs Mergeados/Fechados (2)

| # | Título | Impacto |
|---|--------|---------|
| [#5365](https://github.com/agentscope-ai/QwenPaw/pull/5365) | `feat(console): mobile responsive layout for Agent Config page` | Layout adaptativo para página de configuração de agentes em viewports ≤768px |
| [#5359](https://github.com/agentscope-ai/QwenPaw/pull/5359) | `feat(console): enhance PR #5350 with marquee and centered menu` | Aprimoramentos de UX mobile no Chat header com dropdown de sessão e marquee para ModelSelector |

### PRs Abertos em Destaque (8 dos 26)

| # | Título | Área | Status |
|---|--------|------|--------|
| [#5368](https://github.com/agentscope-ai/QwenPaw/pull/5368) | `feat(console): improve SkillPool mobile responsive layout` | UI/Mobile | Aberto |
| [#5367](https://github.com/agentscope-ai/QwenPaw/pull/5367) | `feat(console): mobile responsive layout for Security page` | UI/Mobile | Aberto |
| [#5366](https://github.com/agentscope-ai/QwenPaw/pull/5366) | `feat(console): mobile responsive layout for Agent Config page` | UI/Mobile | Aberto |
| [#5334](https://github.com/agentscope-ai/QwenPaw/pull/5334) | `feat(ui): allow switching agent in collapsed sidebar mode` | UI/UX | Aberto |
| [#5193](https://github.com/agentscope-ai/QwenPaw/pull/5193) | `feat(channels): add Slack channel support with Socket Mode and streaming` | Channels | Aberto |
| [#5325](https://github.com/agentscope-ai/QwenPaw/pull/5325) | `feat(memory): add optional recency-aware ranking for memory_search daily notes` | Memory | Aberto |
| [#5331](https://github.com/agentscope-ai/QwenPaw/pull/5331) | `feat(console): real-time SSE push-message notifications with voice beep` | Notifications | Aberto |
| [#5357](https://github.com/agentscope-ai/QwenPaw/pull/5357) | `fix(#5354): release session switch lock on embedded mode completion` | Bug Fix | Aberto |

**Análise:** OPR [#5193](https://github.com/agentscope-ai/QwenPaw/pull/5193) representa expansão significativa do ecossistema de canais, adicionando suporte a Slack com Socket Mode e streaming — um diferenciador competitivo relevante. O PR [#5325](https://github.com/agentscope-ai/QwenPaw/pull/5325) implementa ranking temporal para memória de notas diárias, melhorando relevância de buscas em contextos de uso prolongado.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (por comentários/reações)

| # | Título | Tipo | Comentários | Link |
|---|--------|------|-------------|------|
| [#5329](https://github.com/agentscope-ai/QwenPaw/issues/5329) | Feature: Adicionar botão de troca de agent no sidebar colapsado | Enhancement | 5 | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5329) |
| [#5353](https://github.com/agentscope-ai/QwenPaw/issues/5353) | Bug: Feishu群聊 requer @ obrigatório independente da configuração | Bug | 3 | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5353) |
| [#5345](https://github.com/agentscope-ai/QwenPaw/issues/5345) | Bug: Custom OpenAI providers não suportam function calling | Bug | 3 | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5345) |
| [#5354](https://github.com/agentscope-ai/QwenPaw/issues/5354) | Bug: Mensagem queue容易串台；切换对话时切不回去 | Bug | 2 | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5354) |
| [#5328](https://github.com/agentscope-ai/QwenPaw/issues/5328) | Bug: Agent trava durante thinking com DeepSeek | Bug | 2 | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5328) |
| [#5360](https://github.com/agentscope-ai/QwenPaw/issues/5360) | Stabilize the core app before adding new features | Meta | 1 | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5360) |

**Análise de Demanda:** A issue [#5329](https://github.com/agentscope-ai/QwenPaw/issues/5329) demonstra necessidade clara de interação com agents em interfaces mobile — o autor reportou que o sidebar colapsado impede troca de agent quando acessa via navegador mobile. O problema de Feishu ([#5353](https://github.com/agentscope-ai/QwenPaw/issues/5353)) afeta usuários corporativos que dependem do canal de comunicação. A issue [#5345](https://github.com/agentscope-ai/QwenPaw/issues/5345) evidencia limitação séria na extensibilidade via provedores customizados — OMLX funciona em outras plataformas mas falha em QwenPaw especificamente para function calling.

A issue [#5360](https://github.com/agentscope-ai/QwenPaw/issues/5360) articula uma preocupação estratégica: antes de adicionar features, estabilizar o core. Este é um **sinal de roadmap importante** — a comunidade sinaliza que a velocidade de feature está superando a maturidade operacional.

---

## 5. Bugs e Estabilidade

### Bugs Reportados (12 issues)

| Severidade | # | Título | Status | Link |
|------------|---|--------|--------|------|
| **🔴 Crítica** | [#5354](https://github.com/agentscope-ai/QwenPaw/issues/5354) | Message queue envia mensagens para agent errado após troca | Aberto | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5354) |
| **🔴 Crítica** | [#5328](https://github.com/agentscope-ai/QwenPaw/issues/5328) | Agent trava durante thinking (DeepSeek) | Aberto | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5328) |
| **🔴 Crítica** | [#5358](https://github.com/agentscope-ai/QwenPaw/issues/5358) | TypeError em ui-vendor bundle durante session switch | Aberto | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5358) |
| **🟠 Alta** | [#5344](https://github.com/agentscope-ai/QwenPaw/issues/5344) | /api/console/chat retorna 200 mas descarta mensagens silenciosamente | Aberto | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5344) |
| **🟠 Alta** | [#5333](https://github.com/agentscope-ai/QwenPaw/issues/5333) | Agent fica travado mas input permite novo submit | Aberto | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5333) |
| **🟠 Alta** | [#5342](https://github.com/agentscope-ai/QwenPaw/issues/5342) | Tool results acumulam sem prune em failures (context explosion) | Aberto | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5342) |
| **🟠 Alta** | [#5353](https://github.com/agentscope-ai/QwenPaw/issues/5353) | Feishu ignora configuração e sempre requer @ | Aberto | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5353) |
| **🟡 Média** | [#5345](https://github.com/agentscope-ai/QwenPaw/issues/5345) | Custom OpenAI providers não suportam function calling | Aberto | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5345) |
| **🟡 Média** | [#5330](https://github.com/agentscope-ai/QwenPaw/issues/5330) | Zhipu: teste de conexão passa mas modelos falham | Aberto | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5330) |
| **🟢 Baixa** | [#5351](https://github.com/agentscope-ai/QwenPaw/issues/5351) | Model failover config aceito mas nunca utilizado | Enhancement | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5351) |

**Análise:** O bug [#5354](https://github.com/agentscope-ai/QwenPaw/issues/5354) é **prioridade absoluta** — message queue enviando mensagens para agents incorretos quebra a premissa básica de isolamento de conversas. O bug [#5344](https://github.com/agentscope-ai/QwenPaw/issues/5344) é igualmente crítico pois retorna HTTP 200 (aparência de sucesso) enquanto descarta dados silenciosamente. A issue [#5342](https://github.com/agentscope-ai/QwenPaw/issues/5342) descreve um padrão de falha em cascata: quando LLM falha, tool results não são pruned, causando acumulação de contexto.

**Boa notícia:** O PR [#5357](https://github.com/agentscope-ai/QwenPaw/pull/5357) já aborda o bug de session switch lock descrito em [#5354](https://github.com/agentscope-ai/QwenPaw/issues/5354).

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas (8)

| # | Título | Categoria | Prioridade Indicada | Link |
|---|--------|-----------|---------------------|------|
| [#5329](https://github.com/agentscope-ai/QwenPaw/issues/5329) | Adicionar botão de troca de agent no sidebar colapsado | UI/Mobile | Alta (5 comentários) | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5329) |
| [#5351](https://github.com/agentscope-ai/QwenPaw/issues/5351) | Implementar failover automático de modelos | Resiliência | Média | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5351) |
| [#5316](https://github.com/agentscope-ai/QwenPaw/issues/5316) | Recency-aware ranking para memory_search | Memory | Média | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5316) |
| [#5327](https://github.com/agentscope-ai/QwenPaw/issues/5327) | Adicionar botão de conversa direta no Agent Office | UX/Workflow | Média | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5327) |
| [#5322](https://github.com/agentscope-ai/QwenPaw/issues/5322) | Notificação em tempo real e voz ao receber mensagens via API | Notifications | Média | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5322) |
| [#5360](https://github.com/agentscope-ai/QwenPaw/issues/5360) | Estabilizar core antes de adicionar features | Meta/Processo | — | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5360) |

**Sinais de Roadmap Identificados:**

1. **Mobile-first**: A enxurrada de PRs de responsividade mobile (10+ PRs) e issues relacionadas indica que mobile é prioridade para v1.2.x
2. **Resiliência de modelos**: A config de `llm_routing` com failover está implementada mas não utilizada ([#5351](https://github.com/agentscope-ai/QwenPaw/issues/5351)) — indica feature incompleta no backlog
3. **Expansão de canais**: Slack integration ([#5193](https://github.com/agentscope-ai/QwenPaw/pull/5193)) está em desenvolvimento
4. **Memória aprimorada**: Feature de recency ranking está em PR ([#5325](https://github.com/agentscope-ai/QwenPaw/pull/5325))

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas (Top 5)

| Dor | Frequência | Impacto | Link |
|-----|------------|---------|------|
| **Mobile UX quebrada** | Alta (10+ reports) | Bloqueante para usuários mobile | [#5329](https://github.com/agentscope-ai/QwenPaw/issues/5329), [#5360](https://github.com/agentscope-ai/QwenPaw/issues/5360) |
| **Agentes enviam mensagens para o lugar errado** | Crítica | Perda de dados/confusão | [#5354](https://github.com/agentscope-ai/QwenPaw/issues/5354) |
| **Integração DeepSeek instável** | Alta | Produtividade afetada | [#5328](https://github.com/agentscope-ai/QwenPaw/issues/5328), [#5333](https://github.com/agentscope-ai/QwenPaw/issues/5333) |
| **Provedores customizados limitados** | Média | Impossibilita uso de modelos proprietários | [#5345](https://github.com/agentscope-ai/QwenPaw/issues/5345) |
| **Canais (Feishu) não respeitam configuração** | Média | Usuários corporativos bloqueados | [#5353](https://github.com/agentscope-ai/QwenPaw/issues/5353) |

### Cenários de Uso Identificados

1. **Acesso mobile via navegador**: Usuários acessam backend via mobile browser e esperam funcionalidade completa — atualmente quebrado
2. **Multi-agent management**: Administradores monitoram múltiplos agents e precisam de switch rápido — desejado em Agent Office
3. **Integração corporativa via Feishu**: Deploy em organizações com requisitos de canal específicos — configuração ignorada
4. **Modelos customizados (OMLX, etc.)**: Usuários com infra própria esperam parity de features — function calling não funciona

### Indicadores de Satisfação

| Indicador | Status |
|-----------|--------|
| Velocidade de resposta da comunidade | ✅ Alta (PRs mergeados no mesmo dia) |
| Qualidade de PRs (first-time contributors) | ✅ Boa (múltiplos PRs de novatos) |
| Regressões estáveis | ⚠️ Preocupante (message queue introduziu bugs) |
| Documentação suficiente | ❓ Não mensurável com dados atuais |

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Aguardando Ação

| # | Título | Criado | Atualizado | Link |
|---|--------|--------|------------|------|
| [#5329](https://github.com/agentscope-ai/QwenPaw/issues/5329) | Feature: Troca de agent no sidebar colapsado | 2026-06-19 | 2026-06-21 | [Issue](https://github.com/agentscope-

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-06-22

## 1. Panorama do Dia

O projeto ZeroClaw mantém alta atividade com **50 PRs e 23 issues atualizadas nas últimas 24h**, sem novas releases. O estado geral reflete um projeto em **fase intensiva de estabilização pré-v0.9.0**, com destaque para workstreams paralelos em autenticação (RFC OIDC #7141), plataforma de skills (v0.8.2 tracker #7852) e correções críticas de segurança e estabilidade. A comunidade demonstra engajamento ativo, especialmente em bugs de P1/P2 que afetam workflows bloqueantes. O ratio de 44 PRs abertas versus 6 fechadas sugere pipeline saudável de contribuições, mas exige atenção à taxa de review.

---

## 2. Lançamentos

**Nenhuma release nas últimas 24h.**

O projeto não publicou novas versões desde o período analisado. Mantenha atenção aos trackers de features aceitas (#7141 para OIDC, #7852 para skills platform) que indicam trabalho ativo para próximos milestones.

---

## 3. Progresso do Projeto

### PRs Recentemente Fechadas/Merged

| PR | Título | Impacto |
|----|--------|---------|
| [#7694](https://github.com/zeroclaw-labs/zeroclaw/issues/7694) | cover storage-reader timestamp and ordering edge cases | Melhora deterministicidade em testes de memória |
| [#7888](https://github.com/zeroclaw-labs/zeroclaw/issues/7888) | zeroclaw-runtime still depends on rumqttc without channel-mqtt | Remove dependência condicional indevida |
| [#8049](https://github.com/zeroclaw-labs/zeroclaw/issues/8049) | proactive_trim_turns drops whole turns | Corrige context drift em sessões longas |
| [#7877](https://github.com/zeroclaw-labs/zeroclaw/issues/7877) | external coding tools resolve relative working_directory from daemon cwd | Padroniza resolução de caminhos |
| [#7795](https://github.com/zeroclaw-labs/zeroclaw/issues/7795) | static_voice_peers caches config-derived voice peers | Elimina violação SSOT em Telegram |
| [#8089](https://github.com/zeroclaw-labs/zeroclaw/issues/8089) | Docker/Debian Dockerfile builds fail | Desbloqueia workflow CI (S1) |

### PRs Abertas de Destaque (workstreams ativos)

- **[#8104](https://github.com/zeroclaw-labs/zeroclaw/pull/8104)** — `fix(daemon): drain gateway before RPC reload` — Resolve race condition de porta em reloads
- **[#8068](https://github.com/zeroclaw-labs/zeroclaw/pull/8068)** — `feat(channels): restore Matrix room management tool` — Restaura funcionalidade de criação de salas
- **[#8033](https://github.com/zeroclaw-labs/zeroclaw/pull/8033)** — `feat(onboard): chat-based conversational setup assistant` — Moderniza onboarding do zero
- **[#7747](https://github.com/zeroclaw-labs/zeroclaw/pull/7747)** — `fix(runtime): wire mcp_bundles into agent loop` — Enforce scoping de servidores MCP por agente

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários)

| Issue | Título | Comentários | Tema Central |
|-------|--------|-------------|--------------|
| [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) | [Feature]: OIDC Authentication Provider support | 6 | Arquitetura de autenticação plugável |
| [#7694](https://github.com/zeroclaw-labs/zeroclaw/issues/7694) | feat(memory): cover storage-reader timestamp edge cases | 4 | Testes determinísticos |
| [#8043](https://github.com/zeroclaw-labs/zeroclaw/issues/8043) | RFC: Retire standalone aardvark-sys crate | 2 | Simplificação de crates |
| [#8076](https://github.com/zeroclaw-labs/zeroclaw/issues/8076) | local username/password AuthProvider (child of #7141) | 0 | Autenticação IdP-less |

### Análise de Demandas

**Autenticação domina discussões técnicas.** A issue #7141 (OIDC) com 6 comentários e labels de alta criticidade (security, architecture, P1) demonstra que a comunidade prioriza a capacidade de integração com identity providers externos. A issue filha #8076 expande esse tema com proposta de autenticação local sem IdP.

**Skills platform em radar.** O tracker #7852 coordena trabalho distribuído sobre registries, resolução efetiva de skills e auditoria — indica trabalho sistemático para v0.8.2.

---

## 5. Bugs e Estabilidade

### Por Severidade

**S0/S1 — Bloqueantes ou Risco a Dados:**
- [#8099](https://github.com/zeroclaw-labs/zeroclaw/issues/8099) — NVIDIA provider não processa input de imagem com modelo multimodal
- [#8102](https://github.com/zeroclaw-labs/zeroclaw/issues/8102) — alias rename RPC causa stack overflow no daemon
- [#8095](https://github.com/zeroclaw-labs/zeroclaw/issues/8095) — install.sh instala binário arm64 em Macs Intel (S1 - workflow blocked)
- [#7907](https://github.com/zeroclaw-labs/zeroclaw/issues/7907) — agent rename move estado antes de persistir config

**S2 — Comportamento Degradado:**
- [#6517](https://github.com/zeroclaw-labs/zeroclaw/issues/6517) — Context overflow causa alucinação/topic drift
- [#8047](https://github.com/zeroclaw-labs/zeroclaw/issues/8047) — ReadSkillTool busca em `data_dir` quando skills estão no workspace
- [#8069](https://github.com/zeroclaw-labs/zeroclaw/issues/8069) — RPC reload reinicia gateway antes de liberar porta
- [#8094](https://github.com/zeroclaw-labs/zeroclaw/issues/8094) — Anthropic provider indisponível após adicionar no quickstart

**S3 — Issues Menores:**
- [#8088](https://github.com/zeroclaw-labs/zeroclaw/issues/8088) — model_switch retorna lista hardcoded em vez do catálogo live

### Padrões Observados

- **Race conditions em concurrent workers** (#7847) — evidência de surface area crescente em arquiteturas multi-threaded
- **SSOT violations** (#7795) — caching de estado derivado sem sincronização
- **Path resolution inconsistente** (#7877, #8047) — fragmentos dispersos em ferramentas e canais

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features com Alto Risco/Prioridade

| Issue | Título | Tags | Indicador |
|-------|--------|------|-----------|
| [#8078](https://github.com/zeroclaw-labs/zeroclaw/issues/8078) | RFC: zerocode local pre-submission gate | ci, zerocode, high | Disciplina de contribuição |
| [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) | OIDC Authentication Provider support | security, architecture, P1 | v0.9.0 target |
| [#8076](https://github.com/zeroclaw-labs/zeroclaw/issues/8076) | local username/password AuthProvider | security, high | Expansão de #7141 |
| [#8075](https://github.com/zeroclaw-labs/zeroclaw/issues/8075) | Keybinds vs. OS globals | zerocode | UX/MacOS |
| [#8105](https://github.com/zeroclaw-labs/zeroclaw/issues/8105) | Make Node container-base major selection explicit | ci, dev | CI reproducibility |

### Sinais de Roadmap

1. **v0.9.0** — Autenticação plugável (OIDC, native, ssh-key, peercred) parece ser foco principal
2. **v0.8.2** — Skills platform com registries e auditoria visível
3. **Chat-based onboarding** (#8033 em review) — Redução de fricção para novos usuários
4. **Multi-channel parity** — Matrix room management (#8068) demonstra investimento em canais alternativos

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Dor | Issue | Severidade | Contexto |
|-----|-------|------------|----------|
| Instalação quebrada em Intel Macs | #8095 | S1 | `bad CPU type in executable` após quickstart |
| Context overflow degrada qualidade | #6517 | S2 | Conversas longas → alucinação |
| Provider indisponível após configuração | #8094 | S0 | Anthropic não aparece no chat |
| Discord autocomplete falha em threads | #8103 | S2 | Threads allowlisted não funcionam |
| Skills não encontradas | #8047 | S2 | ReadSkillTool busca no diretório errado |

### Cenários de Uso Evidenciados

- **Desenvolvedores em MacOS Intel** encontrando barreira de instalação
- **Operadores multi-threaded** enfrentando race conditions em sessão
- **Usuários de modelos multimodais** (NVIDIA NIM) com experiência quebrada
- **Usuários de Discord** em ambientes com threads parent-allowlisted

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Stale

| Issue | Título | Tempo | Status | Prioridade |
|-------|--------|-------|--------|------------|
| [#6517](https://github.com/zeroclaw-labs/zeroclaw/issues/6517) | Context Overflow Causes Hallucination | ~46 dias | stale-candidate | P2 |
| [#8075](https://github.com/zeroclaw-labs/zeroclaw/issues/8075) | Keybinds vs. OS globals | ~2 dias | needs-maintainer-review | P2 |
| [#8076](https://github.com/zeroclaw-labs/zeroclaw/issues/8076) | local username/password AuthProvider | ~2 dias | needs-maintainer-review | P2 |
| [#8078](https://github.com/zeroclaw-labs/zeroclaw/issues/8078) | zerocode pre-submission gate | ~1 dia | needs-maintainer-review | P2 |

### Recomendação

- **Issue #6517** (46 dias sem resolução) deve receber triagem prioritária — representa experiência de uso degradada em conversas de produção
- **RFCs emdraft** (#8043, #8076, #8078) necessitam de facilitação para não estagnarem
- **Bug S0** #8099 e #8102 requerem assignação imediata para evitar impacto em múltiplos usuários

---

## Métricas de Saúde do Projeto

| Indicador | Valor | Observação |
|-----------|-------|------------|
| Issues ativas (24h) | 16 | Alta atividade |
| PRs abertas | 44 | Pipeline robusto |
| PRs fechadas (24h) | 6 | Taxa de merge aceitável |
| Releases (24h) | 0 | Sem releases — normal em fase de features |
| Bugs S0/S1 | 5 | Atenção requerida |
| RFCs em aberto | 3 | Demanda de arquitetura significativa |
| Issues stale | 1 crítico | #6517 |

**Veredicto:** Projeto em estado ativo de desenvolvimento, com múltiplos workstreams paralelos em autenticação, skills e canais. Bugs críticos de S0/S1 exigem atenção imediata. A ausência de releases recentes sugere foco em consolidação antes de marca de versão.

---

*Relatório gerado em 2026-06-22 com base em dados do GitHub de zeroclaw-labs/zeroclaw.*

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*