# Resumo diário do ecossistema de agentes de IA 2026-04-15

> Issues: 8 | PRs: 2 | Projetos cobertos: 7 | Gerado em: 2026-04-15 01:57 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório NullClaw — 2026-04-15

---

## 1. Panorama do dia

NullClaw mantém **atividade intensa** com 8 issues e 2 PRs atualizados nas últimas 24h, sinalizando alta engajamento da comunidade. O projeto apresenta **7 issues abertas pendentes** e **nenhuma release** ou PR merged no período, indicando que o time de maintainers está em modo de triagem e review. Há sinais claros de fricção em funcionalidades críticas (shell Linux, HTTP requests, Otel HTTPS constraints), sugerindo que a versão atual pode ter regressões ou gaps de documentação que exigem atenção imediata.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O último release tag não especificado nos dados; caso não haja release futura planejada, a comunidade aguarda sinalização do roadmap para a próxima versão.

---

## 3. Progresso do projeto

Nenhum PR foi merged ou fechado nas últimas 24h. Dois PRs estão em aberto:

- **[#783](https://github.com/nullclaw/nullclaw/pull/783)** — `feat(cron): cron subagent, run history, JSON output, security hardening`
  - **Autor:** yanggf8 | Criado: 2026-04-07
  - **Impacto:** Adiciona motor de cron com scheduler baseado em DB (`cron_runs`, `cron_run_queue`), tipos de job (skill/agent/shell), timezones por job e alertas de operador. Também introduz JSON output para CLI e hardening de segurança. PR maduro (8 dias em review).

- **[#818](https://github.com/nullclaw/nullclaw/pull/818)** — `Add Weixin QR auth flow and channel support`
  - **Autor:** DDGRCF | Criado: 2026-04-14
  - **Impacto:** Implementa integração com WeChat via canal `weixin`, incluindo login QR code interativo, polling flow e CLI para auth/config/catalog. Alinha-se diretamente com issue #816 e #817 (mesmo autor).

**Recomendação:** Priorizar review do #783 pela magnitude da feature e impacto em estabilidade (security hardening).

---

## 4. Temas quentes da comunidade

| Issue/PR | Comentários | 👍 | Tema |
|---|---|---|---|
| [#791](https://github.com/nullclaw/nullclaw/issues/791) | 3 | 0 | Shell não funciona no Linux físico |
| [#812](https://github.com/nullclaw/nullclaw/issues/812) | 3 | 1 | HTTP request/internet search não funciona |
| [#449](https://github.com/nullclaw/nullclaw/issues/449) | 2 | 1 | Request imagem Docker Hub oficial |
| [#800](https://github.com/nullclaw/nullclaw/issues/800) | 1 | 1 | Otel quebrou por constraint HTTPS |

**Análise das demandas:**

- **Shell Linux (#791):** Usuário reportou impossibilidade de executar comandos shell mesmo com permissões liberadas. Com 3 comentários em 7 dias, indica regressão ou documentação insuficiente de configuração de runtime `native`.

- **HTTP Request (#812):** Usuário migrou do Picoclaw e ZeroClaw, enfrenta problemas há dias com busca por internet. Com 3 comentários e 1 upvote, evidencia dor crítica de UX — novo usuário não consegue funcional básica.

- **Docker Hub (#449):** Request de imagem oficial para facilitar deploy. 2 comentários indicam discussão ativa sobre design da solução e arquivo `docker-compose.yaml`.

- **Otel HTTPS (#800):** Breaking change em v2026.4.9 forçou adoção de HTTPS, quebrando configurações internas com containers Podman. 1 comentário, 1 upvote — regressão com impacto em ambientes de desenvolvimento local.

---

## 5. Bugs e estabilidade

| Severidade | Issue | Descrição | Status |
|---|---|---|---|
| 🔴 **Alta** | [#791](https://github.com/nullclaw/nullclaw/issues/791) | Shell não executa no Linux (runtime native) | Aberta |
| 🔴 **Alta** | [#812](https://github.com/nullclaw/nullclaw/issues/812) | HTTP request/internet search completamente quebrado | Aberta |
| 🟡 **Média** | [#800](https://github.com/nullclaw/nullclaw/issues/800) | Constraint HTTPS quebrou Otel (breaking change v2026.4.9) | Aberta |
| 🟡 **Média** | [#821](https://github.com/nullclaw/nullclaw/issues/821) | `nullclaw version` retorna "dev" em vez de versão/hash | Aberta |

**Resumo:** 2 bugs críticos (shell e HTTP) que bloqueiam funcionalidades core para novos usuários. Regression de breaking change no Otel. Problema de metadata (versão) afeta debugging.

**SLA sugerida:** Bugs #791 e #812 devem ser investigados nas próximas 48h — representam falhas em funcionalidades advertised.

---

## 6. Pedidos de features e sinais de roadmap

| Issue | Tipo | Descrição | Potencial |
|---|---|---|---|
| [#449](https://github.com/nullclaw/nullclaw/issues/449) | enhancement | Imagem Docker Hub oficial + docker-compose | Alta — reduz fricção de onboarding |
| [#817](https://github.com/nullclaw/nullclaw/issues/817) / [#818](https://github.com/nullclaw/nullclaw/pull/818) | feature | Suporte a login via QR Code WeChat | Média — comunidade Chinesa |
| [#783](https://github.com/nullclaw/nullclaw/pull/783) | feature | Cron subagent com history e segurança | Alta — missing feature em produção |
| [#820](https://github.com/nullclaw/nullclaw/issues/820) | documentation | Guia de instalação Zig no Debian | Média — onboarding bloqueado |

**Observação:** O PR #818 (WeChat QR) já está draft/submitado — indica priorização do author para esta feature. O cron subagent (#783) é a feature mais substancial pendente de merge.

**Sinais de roadmap:** Maior clareza de versão (issue #821) e documentação de instalação (issue #820) indicam que a experiência de setup precisa ser polida na próxima release.

---

## 7. Resumo de feedback dos usuários

| Perfil | Dor | Sentimento |
|---|---|---|
| **Usuário migrante (#812)** | Tentou NullClaw vindo do Picoclaw/ZeroClaw; funcionalidade de internet search não funciona | Frustrado — funcionalidade básica não entrega |
| **Usuário Linux físico (#791)** | Shell bloqueado mesmo com permissões explícitas | Confuso — comportamento diverge do esperado |
| **Usuário Podman/Otel (#800)** | Breaking change HTTPS em v2026.4.9 quebrou setup | Irritado — mudança abrupta sem migração suave |
| **Usuário Debian (#820, #821)** | Não consegue instalar Zig; version mostra "dev" | Confuso — setup manual nebuloso |

**Padrão identificado:** Usuários enfrentam barreiras na fase de **onboarding/setup** (Zig, Docker, runtime). Problema de documentation gap combinado com regressões em features core. Usuários novos (#812) desistem antes de explorar funcionalidades avançadas.

**NPS estimado:** ~4/10 — comunidade ativa mas enfrentando fricção em primeiro uso.

---

## 8. Backlog que merece atenção

| Issue/PR | Criado | Atualizado | Dias inativo | Prioridade |
|---|---|---|---|---|
| [#449](https://github.com/nullclaw/nullclaw/issues/449) — Docker Hub image | 2026-03-12 | 2026-04-14 | ~34 dias | Alta |
| [#791](https://github.com/nullclaw/nullclaw/issues/791) — Shell Linux | 2026-04-08 | 2026-04-15 | 7 dias | 🔴 Crítica |
| [#783](https://github.com/nullclaw/nullclaw/pull/783) — Cron feature | 2026-04-07 | 2026-04-15 | 8 dias | Alta |

**#449 é o item mais antigo (34 dias)** — aguardando decisão de manter ou fechar. Request legítimo mas sem resposta do core team.

**Ação recomendada:**
- Responder #449 com decisão de roadmap (sim/não/later)
- Investigar #791 e #812 com prioridade — são bloqueantes
- Revisar constraint HTTPS do #800 — pode necessitar flag de configuração

---

**⚠️ Ações inmediatas sugeridas:**
1. Reproduzir bug #791 (shell Linux) e #812 (HTTP request)
2. Revisar PR #783 — feature grande pode necesitar help do autor
3. Documentar constraint HTTPS do Otel como breaking change explícito
4. Resolver issue #449 (Docker Hub) — 34 dias sem resposta é muito

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo — Ecossistema Open Source de Agentes de IA

**Data de Referência:** 2026-04-15 | **Projetos Analisados:** 8

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **duas velocidades distintas de evolução**: um grupo de projetos em ritmo acelerado de feature delivery (NanoBot, Hermes Agent, CoPaw/QwenPaw) e outro grupo em modo de estabilização e consolidação de qualidade (NullClaw, PicoClaw, IronClaw, ZeroClaw). O tema transversal mais urgente é a **maturidade de provedores e tool calling** — problemas com Ollama, OpenRouter, e integrações locais afetam múltiplos projetos simultaneamente. A demanda por interfaces web nativas (WebUI) surge como o feature request mais mencionado em quatro projetos, indicando que a experiência do usuário não-técnico tornou-se diferenciador competitivo. O mercado sino-falante emerge como segmento estratégico, com WeChat, QQ, Feishu e integrações específicas para a China (Sogou, DashScope) em desenvolvimento ativo em pelo menos cinco projetos.

---

## 2. Comparação de Atividade

| Projeto | Issues (abertas/total 24h) | PRs (abertos/total 24h) | Releases (24h) | Bugs Críticos Abertos | Avaliação de Saúde |
|---------|---------------------------|------------------------|----------------|----------------------|-------------------|
| **NanoBot** | 13/36 | 26/60 | 1 (v0.1.5.post1) | 3 (🔴) | 🟢 Excelente |
| **Hermes Agent** | ~50 | ~50 | 0 | 4 (🔴🟠) | 🟢 Muito Alta |
| **IronClaw** | 46/50 | 36/50 | 0 | 5 (P0) | 🟢 Alta |
| **ZeroClaw** | 47/50 | ~50 | 0 | 9 (S0+S1) | 🟡 Ativa com acúmulo |
| **CoPaw/QwenPaw** | 34/48 | 23/45 | 2 (v1.1.1 stable/beta) | 3 (🔴) | 🟢 Boa |
| **PicoClaw** | 6/8 | 16/30 | 1 (nightly) | 2 (🔴) | 🟡 Estável |
| **NullClaw** | 7/8 | 2/2 | 0 | 2 (🔴) | 🟡 Triagem |
| **OpenClaw** | — | — | — | — | — |

**Mapeamento de Volume:** NanoBot, Hermes Agent, IronClaw e ZeroClaw operam em escala de 50+ updates/24h, indicando equipes de desenvolvimento amplas ou automação intensa. NanoBot destaca-se com 34 PRs fechados em 24h — a taxa de throughput mais alta do ecossistema. CoPaw/QwenPaw e PicoClaw mantêm ritmo moderado com foco em qualidade. NullClaw apresenta volume baixo (8 issues, 2 PRs), sugerindo equipe reduzida ou fase de pausa.

---

## 3. Posicionamento do Projeto Principal

### NanoBot (HKUDS/nanobot) — Líder em Throughput e Features

**Vantagens frente aos pares:**

- **Maior velocidade de iteração:** 34 PRs merged/24h contra média de 10-15 dos demais projetos
- **Feature parity mais ampla:** Suporte a 15+ canais (Telegram, Discord, Feishu, DingTalk, Slack, Matrix, WebSocket), múltiplos providers com normalização de strict mode
- **Auto-gerenciamento maduro:** v0.1.5.post1 introduz compressão automática de contexto e tooling de auto-evolução — capacidade que nenhum concorrente oferece neste estágio
- **Comunidade diversificada:** 25 novos contribuidores na última release, indicando atração de novos desenvolvedores

**Diferenças técnicas arquiteturais:**

- Implementa **strict provider normalization** (corrige erros 502 em provedores Alibaba-style)
- Suporte nativo a **Kimi thinking models** via `extra_body` com detecção automática de slugs
- Infraestrutura de **session roles** que persiste em JSONL e injeta no system prompt
- Timeouts granulares por operação HTTP (DingTalk) — resolvendo hang indefinite

**Tamanho da comunidade:** ~80 PRs históricos na release, 25 contribuidores novos, 36 issues atualizadas/24h — indica base de contribuidores ativa e diversificada.

---

## 4. Focos Técnicos Compartilhados

### 4.1 Estabilidade de Tool Calling e Providers

O problema de **tool calling quebrado em provedores locais** afeta NullClaw, ZeroClaw e NanoBot simultaneamente:

| Projeto | Problema | Evidência |
|---------|----------|-----------|
| **NullClaw** | HTTP request/internet search completamente quebrado (#812) | 3 comentários, 1 upvote — dor crítica de UX |
| **ZeroClaw** | Ollama `tool_count=0` hardcoded — quebra tool calling para todos os modelos Ollama (#5459) | 3 👍, S1 |
| **NanoBot** | Normalização de argumentos para providers strict (#3154) | Corrigido em PR |

**Análise:** A inconsistência de APIs Anthropic/OpenAI-compatíveis entre provedores locais (Ollama, llama.cpp) e cloud providers exige adaptação dinâmica — necessidade que nenhum projeto resolveu de forma elegante.

### 4.2 Interfaces Web (WebUI)

Demanda transversal em PicoClaw, Hermes Agent, IronClaw e CoPaw/QwenPaw:

| Projeto | Status | Engajamento |
|---------|--------|-------------|
| **Hermes Agent** | Proposta oficial #501 — 13 comentários, fork `nesquena/hermes-webui` com 1.602 stars | Muito alto |
| **PicoClaw** | Refactoring em andamento #806 — 8 👍, tooltip improvements merged | Alto |
| **IronClaw** | Dashboard com bugs críticos (refresh loop #2410, mensagens desaparecem #2409) | Bloqueante |
| **CoPaw/QwenPaw** | Statistics page em PR #3365, auto-build console on startup (#2996) | Em progresso |

**Implicação:** A ausência de WebUI nativa força usuários não-técnicos a usar CLI ou configurações manuais — barreira competitiva frente a soluções closed-source.

### 4.3 Scheduler/Cron com Isolamento de Sessão

Três projetos enfrentam desafios similares com execução agendada:

| Projeto | Issue | Solução em Progresso |
|---------|-------|---------------------|
| **NullClaw** | PR #783 — cron subagent com history, JSON output, security hardening | Em review há 8 dias |
| **NanoBot** | #3123 — cron jobs usam sessão própria, usuários não conseguem responder | PR #3145 persisting cross-channel |
| **PicoClaw** | #2468 — "scheduling command execution restricted to internal channels" | PRs #2474 (independent session), #2520 (failure resolution) |

**Padrão:** Cron jobs executando em contextos isolados impedem interatividade do usuário — necessidade de herança de sessão ou reply mechanism.

### 4.4 Integrações com Mercado Chinês

| Projeto | Integração | Estágio |
|---------|-----------|---------|
| **NullClaw** | WeChat QR auth (#818) | PR draft |
| **PicoClaw** | Sogou web search (#2524) | Em implementação |
| **IronClaw** | Aliyun DashScope (#1446) | PR aberto |
| **Hermes Agent** | QQ Bot (#9166) | Completo e testado |
| **CoPaw/QwenPaw** | WeChat/QQ sync (#3369) | Bug em TrUNCATION |

**Sinal:** O ecossistema está em corrida para atender à base de usuários sino-falante com integrações proprietárias (WeChat, QQ, Feishu, DingTalk, Sogou).

---

## 5. Análise de Diferenciação

### 5.1 Por Público-Alvo

| Segmento | Projetos Líderes | Características |
|----------|-----------------|-----------------|
| **Desenvolvedores avançados / Enterprise** | Hermes Agent, IronClaw | CLI rica, multi-provider, extensibilidade via plugins/MCP, security hardening |
| **Usuários não-técnicos / Onboarding** | PicoClaw, CoPaw/QwenPaw | WebUI em desenvolvimento, setup simplificado, documentation push |
| **Pesquisa acadêmica / Multi-agente** | NanoBot, Hermes Agent | Auto-evolution, self-modification, session roles, Orchestra research primitives |
| **Mercado chinês / Regional** | NullClaw, PicoClaw, Hermes Agent | WeChat, QQ, Feishu, Sogou, DashScope em integração ativa |

### 5.2 Por Arquitetura Técnica

| Arquitetura | Projetos | Vantagens |
|-------------|---------|-----------|
| **Rust-native** | ZeroClaw | Performance de compilação em foco, crate split em roadmap, musl builds para embarcados |
| **Go-native** | PicoClaw | Build simplificado (CGO_ENABLED=0), cross-platform (OpenWrt), streaming SSE |
| **Python-first** | NanoBot, Hermes Agent, CoPaw/QwenPaw | Flexibilidade de providers, integração fácil com tooling Python, ecossistema ML maduro |
| **Auto-gerenciamento** | NanoBot (v0.1.5.post1) | Compressão de contexto própria, self-evolution tooling — diferenciador de maturidade |

### 5.3 Por Estratégia de Features

| Estratégia | Projetos | Exemplo |
|------------|---------|---------|
| **Platform parity** | NanoBot | 15+ canais suportados, normalização cross-provider |
| **Security-first** | IronClaw | Memory poisoning scanning, OAuth hardening, HMAC receipts em ZeroClaw |
| **UX maturity** | CoPaw/QwenPaw | Agent statistics, Mission Mode, performance de startup (4.5s → 0.05s) |
| **Minimal viable** | NullClaw | Foco em core features, cron subagent como próximo release |

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Projetos em Velocidade Máxima (Iteração Rápida)

| Projeto | Métrica de Velocidade | Indicador de Tração |
|---------|----------------------|---------------------|
| **NanoBot** | 34 PRs merged/24h | 25 novos contribuidores em uma release |
| **Hermes Agent** | 50 issues + 50 PRs/24h | 13 comentários em WebUI proposal, fork com 1.600+ stars |
| **CoPaw/QwenPaw** | 22 PRs merged, 14 issues fechadas/24h | 56 comentários em Open Tasks (#2291) |

### 6.2 Projetos em Modo Consolidação (Qualidade)

| Projeto | Sinal | Implicação |
|---------|-------|-----------|
| **NullClaw** | 7 issues abertas, 0 releases, 8 dias em review do PR #783 | Triagem ativa, aguardando decisão de roadmap |
| **IronClaw** | 4 promoções de staging, 0 releases públicas | CI ativo, release adiada para estabilidade |
| **ZeroClaw** | 47 issues abertas, 3 fechadas | Acúmulo de demandas, config schema V2 em progresso |
| **PicoClaw** | 14 PRs merged, foco em bug fixes | Consolidação pós-feature (cron reliability, WebUI) |

### 6.3 Métricas de Saúde Comparativas

```
NanoBot:        ████████████ 85% — Líder absoluto em throughput
CoPaw/QwenPaw:  █████████░░░ 75% — Boa saúde com migração como risco
Hermes Agent:   █████████░░░ 70% — Alta atividade, Web UI como bottleneck
PicoClaw:       ████████░░░░ 65% — Estável, precisa entregar WebUI
IronClaw:       ████████░░░░ 60% — Segurança visível, mas bugs P0 persistem
ZeroClaw:       ██████░░░░░░ 55% — 9 bugs críticos/abertos exige release corretiva
NullClaw:       █████░░░░░░░ 45% — Baixa atividade, priorização crítica
```

---

## 7. Sinais de Tendência

### 7.1 Auto-Gerenciamento e Auto-Evolução
A release **v0.1.5.post1 do NanoBot** com auto-context compression e self-evolution tooling sinaliza transição do paradigma "agente como ferramenta" para "agente como sistema auto-gerenciável". A comunidade do Hermes Agent segue esta direção com issues sobre self-modification (#2521). **Previsão:** Dentro de 6 meses, auto-gerenciamento será expectativa básica, não feature diferenciadora.

### 7.2 Provider Agnosticism e Multi-Provider Routing
Três+ issues em cada projeto indicam demanda por **fallback automático, timeout configurável e provider routing**. A divergência do Hermes Agent entre AWS Bedrock via SDK Anthropic (#9957) vs Converse API (#7920) exemplifica o desafio de manter paridade entre APIs divergentes. **Previsão:** Providers que não implementarem fallback automático e health checking serão abandonados por usuários de produção.

### 7.3 WebUI como Tabela Rasa de Competitividade
A pressão comunitária por WebUI em Hermes Agent, PicoClaw, IronClaw e CoPaw indica que **CLI-only ou config-file-driven** não é mais aceitável paraonboarding de novos usuários. O fork `nesquena/hermes-webui` com 1.600+ stars valida demanda de mercado. **Previsão:** Projetos sem WebUI funcional até Q3 2026 enfrentarão barreira competitiva significativa.

### 7.4 Segurança como Prioridade de Produção
IronClaw com memory poisoning scanning (#2470), ZeroClaw com HMAC tool receipts (#5168) e NullClaw com security hardening no cron (#783) indicam que **agentes autônomos em produção exigem guarantees de integridade**. O recall de 3 de 4 vulnerabilidades no IronClaw mostra maturidade em resposta. **Previsão:** Auditorias de segurança third-party e compliance frameworks emergirão como requisito para enterprise adoption.

### 7.5 Segmentação Geográfica — China como Mercado Prioritário
WeChat, QQ, Feishu, DingTalk, Sogou e DashScope em desenvolvimento simultâneo em 5 projetos indica **investimento estratégico no mercado chinês**. A coexistência de CoPaw → QwenPaw sugere alinhamento com ecossistema Alibaba. **Previsão:** Projetos com suporte nativo a plataformas chinesas capturarão share significativo do mercado APAC.

### 7.6 Cross-Channel Sessions e Persistência
PRs #3145 (NanoBot), #3123 (NanoBot), #2521 (Hermes Agent) indicam que **sessões que atravessam canais** (Telegram ↔ Discord ↔ Web) são prioridade técnica. A issue de cron jobs usando sessão própria (#3123) exemplifica a complexidade. **Previsão:** Unificação de histórico e contexto entre canais será feature table-stakes em 2027.

---

## Recomendações Estratégicas

| Para

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório de Projeto — NanoBot (HKUDS/nanobot)

**Data de referência:** 2026-04-15 | **Período:** últimas 24h

---

## 1. Panorama do Dia

O NanoBot mantém um ritmo de desenvolvimento extremamente intenso. Nas últimas 24h, foram registradas **36 issues atualizadas** (13 abertas/ativas, 23 fechadas) e **60 PRs** (26 abertas, 34 merged/fechadas), sinalizando uma comunidade ativa e uma base de código em evolução acelerada. A release **v0.1.5.post1** chegou com marco importante: 80 PRs mescladas e 25 novos contribuidores, introduzindo capacidades de auto-gerenciamento do agente (compressão de contexto próprio). O portfólio de features avança em múltiplas frentes — canais, providers, API, observabilidade e experiência de sessão — sem sinais de regressões bloqueantes Generalizadas, embora bugs críticos de estabilidade (hang em web search, falhas de instalação) ainda demandem atenção prioritária.

---

## 2. Lançamentos

### 🆕 v0.1.5.post1 — "The building learning to take care of itself"

| Métrica | Valor |
|---------|-------|
| PRs mescladas | 80 |
| Novos contribuidores | 25 |
| Data de corte | — |

**Mudanças emblemáticas:**

- **Auto-context compression:** o agente agora comprime seu próprio contexto antes que ele cresça demais, reduzindo risco de estouro de janela de tokens e melhorando a eficiência de sessões longas.
- **Self-evolution tooling (experimental):** capacidade do agente inspecionar e modificar seu próprio estado runtime, monitorar subagentes em tempo real e salvar/restaurar snapshots de configuração (desabilitado por padrão).

**Breaking changes:** Nenhuma sinalizada. Release descrita como incremental sobre v0.1.5 ("making the building livable" → "learning to take care of itself").

**Notas de migração:** Para habilitar self-evolution, adicionar ao config:

```yaml
tools:
  self_evolution: true
  self_modify: true
```

🔗 https://github.com/HKUDS/nanobot/releases/tag/v0.1.5.post1

---

## 3. Progresso do Projeto

### PRs Merged/Fechadas Hoje (relevantes)

| # | Título | Domínio | Impacto |
|---|--------|---------|---------|
| #3124 | Enable Kimi thinking via `extra_body` (k2.5, k2.6) | Provider | Suporte a modelos de raciocínio Kimi com `thinking={"type": "enabled\|disabled"}` via `extra_body`; helper `_is_kimi_thinking_model` para slugs bare e OpenRouter-style |
| #3150 | Retry termination notification to interaction channel | Agent/Core | Adiciona `logger.warning` e notificação `on_retry_wait` quando modo standard exaure retries (antes silencioso); mesma notificação para modo persistent com erro idêntico |
| #3149 | Show active task count in `/status` output | Agent/UX | Nova linha `⚡ Tasks: {n} active` no `/status` — cobre dispatch tasks + subagent tasks; permite ao usuário detectar bot travado |
| #3154 | Normalize tool-call arguments for strict providers | Provider | Corrige erro 502/algo.InvalidParameter em provedores strict (ex: Alibaba) causado por `function.arguments` mal formatado |
| #3153 | Handle dict config in `is_allowed()` and `_validate_allow_from()` | Channel/Core | Corrige false-negative em ACL quando channel config é Pydantic extra field (plain dict) — `getattr()` em dict não encontra chaves custom |
| #3155 | Add timeouts for DingTalk HTTP operations | Channel | Timeout para requests HTTP DingTalk (token refresh, media transfer, message sending) — resolves hang indefinitely |
| #2938 | File uploads via JSON base64 and multipart/form-data | API | Suporte a uploads de arquivo no `/v1/chat/completions` — base64 (`data:` URLs) para imagens, text extraction para PDF/DOCX/XLSX/PPTX |
| #3138 | Resolve named message targets in Slack | Channel | Resolve `#channel_name`, `channel_name`, `@user` e menções Slack em concrete conversation IDs antes do envio |
| #3147/#3148 | Session role infrastructure | Channel/Session | Infraestrutura para role-playing por sessão via `InboundMessage.metadata["session_role"]` — persiste em JSONL e injeta no system prompt |

### PRs Abertas em Destaque

| # | Título | Domínio | Estágio |
|---|--------|---------|---------|
| #2521 | SelfTool for agent self-evolution | Agent | Aberto (26/mar) — feature principal por trás da v0.1.5.post1; self-modificação runtime |
| #3030 | Web App and Mobile APIs channel | Channel | Aberto (11/abr) — ~594 linhas, canal web completo com UI HTML/CSS/JS + testes |
| #3156 | Per-phase model overrides (evalModelOverride, execModelOverride) | Heartbeat | Aberto (14/abr) — dois modelos separados para fase eval e exec do heartbeat |
| #3140 | Restore full-featured LangSmith integration | Observability | Aberto (14/abr) — restaura tracing dropado em v0.1.5 com auto-instrumentação `wrap_openai`/`wrap_anthropic` |
| #3145 | Persist cross-channel messages into target session history | Agent | Aberto (14/abr) — mensagens via tool entre canais (websocket → feishu) agora persistem no history do canal destino |
| #3136 | Route message tool sends to channels | API | Aberto (14/abr) — `ChannelManager` em background durante `nanobot serve` para despacho de outbound |

🔗 https://github.com/HKUDS/nanobot/pulls?q=is%3Apr+updated%3A2026-04-14..2026-04-15

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários + reações)

| # | Título | Comentários | Status | Tema Central |
|---|--------|-------------|--------|--------------|
| #2760 | Retry amplification risk: stacked app+SDK retries can triple upstream load | 10 | CLOSED | ⚠️ **Risco de amplificação de retries** — app retries + SDK retries (max_retries=2) causam fanning out multiplicativo; proposta: coordenar retry modes |
| #1300 | Matrix channel does not work | 9 | OPEN | 🔴 **Canal Matrix quebrado** — erro ao iniciar com matrix-nio; instalção falha com python-olm |
| #3107 | Algumas sugestões (status, session history, retry timeout, model override, fallback, multi-provider) | 3 | OPEN | 📋 **Consolidação de UX requests** — 7 sugestões agrupadas: mostrar count de tasks no /status, referenciar session history no system prompt, retry timeout configurável, model por startup, timeout LLM configurável, provider fallback, multi-provider |
| #3095 | Custom provider with anthropic API (não-anthropic endpoint) | 4 | OPEN | 🔧 **Custom provider para endpoints Anthropic-style** — usar endpoint que implementa API Anthropic mas não é da Anthropic |
| #2570 | Local Ollama config — 404 page not found | 6 | OPEN | 🔧 **Ollama local não responde pelo gateway** — modelo funciona no CLI mas 404 via nanobot; gateway não escuta na porta |
| #2828 | DuckDuckGo web search hangs entire system | 4 | CLOSED | 🐛 **Web search causa hang do sistema inteiro** — Ctrl+C não para, Proxmox não desligga gracefully; específico do DuckDuckGo |
| #3123 | Cron/scheduled task message send — users cannot reply | 3 | OPEN | 🔧 **Cron job usa session própria** — usuários não conseguem fazer perguntas ou correções sobre conteúdo enviado |
| #3143 | LLM returned error code 1214 (messages parameter illegal) | 3 | OPEN | 🐛 **Erro 1214 frequente** — token consolidation estoura limite (71835/65536 via tiktoken); impacto: fornecedores instáveis |
| #3047 | Dream memory consolidation issues | 1 | OPEN | 🐛 **Context overflow em Dream** — 2h de janela + múltiplas tasks com limite 40k tokens = estouro antes da consolidação |

**Análise:** O tema mais discutido (#2760, 10 comentários) é retry amplification — evidência de que o sistema de retries em camadas está causando problemas de carga upstream em produção. Isso correlaciona diretamente com a PR #3150 fechada hoje, indicando que o time já está abordando. Em segundo lugar, Matrix (#1300) permanece aberto há quase 2 meses, sinalizando deuda técnica persistente.

🔗 https://github.com/HKUDS/nanobot/issues?q=sort%3Acomments-desc

---

## 5. Bugs e Estabilidade

### 🟠 Alta Severidade

| # | Título | Severidade | Status | Descrição |
|---|--------|------------|--------|-----------|
| #2828 | DuckDuckGo web search hangs entire system | **🔴 Crítica** | CLOSED | Web search com DuckDuckGo causa hang completo — Ctrl+C ineficaz, Proxmox não desligga gracefully. **Afeta todo o host.** |
| #3143 | LLM error code 1214 (messages parameter illegal) | **🔴 Crítica** | OPEN | Token consolidation estoura 65536 tokens regularmente (71835/65536); erro aparece com frequência alta, impacta estabilidade de sessões |
| #2802 | Install of python-olm fails | **🔴 Crítica** | CLOSED | Build do `python-olm==3.2.16` falha no setuptools; impede instalação do matrix-nio[e2e] |
| #2818 | oauth-cli-kit dependency not found | **🔴 Crítica** | CLOSED | `oauth-cli-kit<1.0.0,>=0.1.3` não encontrado em plataforma ARM |
| #1300 | Matrix channel does not work | **🟠 Alta** | OPEN | Canal Matrix无法启动；instalação e runtime quebrados |
| #3047 | Dream memory consolidation — context overflow | **🟠 Alta** | OPEN | Janela de 2h + múltiplas tasks + limite 40k = estouro antes de consolidação; memória não persiste corretamente |

### 🟡 Média Severidade

| # | Título | Severidade | Status | Descrição |
|---|--------|------------|--------|-----------|
| #2559 | Telegram streaming — Message_too_long for long replies | 🟡 Média | CLOSED | Streaming habilitado + respostas longas → erro Message_too_long no Telegram |
| #2660 | Cannot read files outside workspace with restrictToWorkspace: true | 🟡 Média | CLOSED | Arquivos recebidos de canais (ex: DingTalk) fora do workspace causam erro de path restriction |
| #2570 | Local Ollama — 404 page not found | 🟡 Média | OPEN | Ollama CLI funciona mas nanobot gateway retorna 404; porta 18790 não escuta |
| #2749 | 美团 LongCat-Flash-Chat retorna tool calls crus | 🟡 Média | CLOSED | Provider retorna raw tool_call XML ao invés de processar corretamente |

### ⚙️ Correções Aplicadas (do dia)

- **#3155** — Timeouts adicionados para operações HTTP DingTalk (resolve hang indefinitely)
- **#3154** — Normalização de argumentos de tool-call para providers strict
- **#3153** — Validação de dict config em ACL channels
- **#3150** — Notificações de retry termination (via logger + channel)

🔗 https://github.com/HKUDS/nanobot/issues?q=is%3Aissue+created%3A2026-04-14..2026-04-15+label%3Abug

---

## 6. Pedidos de Features e Sinais de Roadmap

### 🆕 Novos Feature Requests (criados em 14–15/abr)

| # | Título | Sinais de Roadmap |
|---|--------|-------------------|
| #3095 | Custom provider com endpoint Anthropic API (não-Anthropic) | 🔮 Provider flex — nanobot está se tornando agnóstico de API; demanda por suporte a novos endpoints que implementam Anthropic-style APIs |
| #3123 | Cron job — repliesability事后 (usuário não consegue corrigir/formatar) | 🔮 Sessions cross-context — cron job deveria usar sessão do usuário para manter contexto |
| #3144 | Optional AgentHiFive integration spike | 🔮 MCP tooling protegido via AgentHiFive bearer token; expansão de ecossistema MCP |
| #3107 | 7 sugestões consolidadas (status count, session history, retry, timeout, fallback, multi-provider) | 🔮 UX maturity — comunidade pedindo controles operacionais (timeouts, fallbacks) para uso em produção |
| #2599 | Official way to add subagents to config.json | 🔮 Multi-agent architecture — demanda crescente por subagentes com modelos diferentes |
| #2521 | SelfTool for agent self-evolution | 🔮 Self-managing agent — capability central da v0.1.5.post1; roadmap completo de auto-evolução |
| #3140 | Full LangSmith integration restoration | 🔮 Observabilidade — tracing completo via LangSmith é exigência de equipes de avaliação |

### 🔮 Sinais Fortes de Roadmap

1. **Multi-provider e fallback:** múltiplos issues pedindo provider fallback, multi-provider config, e timeout configurável — indicando uso em produção onde estabilidade > performance.
2. **Self-evolution e auto-gerenciamento:** a release v0.1.5.post1 com 80 PRs e 25 contributors em contexto de auto-gerenciamento sinaliza direção clara.
3. **Cross-channel sessions:** PRs #3145 e #3123 indicam que sessões cross-channel e histórico persistente entre canais é prioridade.
4. **Web/Mobile channel:** PR #3030 (Web App + Mobile APIs) demonstra ambição de expandir para além de canais tradicionais (Telegram, Discord, etc.).

🔗 https://github.com/HKUDS/nanobot/issues?q=is%3Aissue+created%3A2026-04-14..2026-04-15+label%3Aenhancement

---

## 7. Resumo de Feedback dos Usuários

### ✅ Dores Aliviadas (comentários positivos implícitos)

- **Comunidade Sinophone ativa:** Issue #2714 (tutorial Windows + DeepSeek em mandarim) com 6 comentários e 1 reactions — indica adoção significativa na China, com usuários contribuindo documentação na língua local.
- **Auto-context compression bem-vinda:** release v0.1.5.post1 posiciona compressão de contexto próprio como solução para estouro de tokens, dor frequentemente relatada.
- **Integração LangSmith restaurada:** issue #2493 referenciada na PR #3140 — comunidade monitorava ausência do tracing desde v0.1.5.

### ⚠️ Dores Persistentes

| Dor | Evidência | Impacto |
|-----|-----------|---------|
| **Web search instável** | #2828 — sistema inteiro trava com DuckDuckGo | Usuários não conseguem usar search em produção |
| **Matrix quebrado** |

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-04-15

## 1. Panorama do dia

O Hermes Agent apresenta **alta atividade comunitária** em 15 de abril de 2026, com 50 issues e 50 PRs atualizados nas últimas 24 horas. Não houve lançamentos formais, indicando que a equipe está em fase de consolidação de contribuições. A base de código recebe atenção intensa em múltiplas frentes: plataformas de mensageria (Feishu, QQ, Telegram), infraestrutura de gateway, provedores de IA e melhorias na CLI. A comunidade demonstra forte interesse em uma interface web nativa, enquanto bugs de estabilidade (especialmente noFeishu e MCP) mobilizam a equipe de manutenção.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24 horas.**

O projeto encontra-se em período de consolidação de código aberto, sem tags de versão publicadas neste intervalo.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados Relevantes

| PR | Autor | Título | Impacto |
|---|---|---|---|
| [#9939](https://github.com/NousResearch/hermes-agent/pull/9939) | mkoker | Fix NameError: missing import os in web_server.py | **Crítico** — corrige crash do dashboard ao configurar autenticação OpenAI |
| [#789](https://github.com/NousResearch/hermes-agent/pull/789) | ar0cket1 | feat(cli): add /reasoning slash command | Adiciona controle de esforço de raciocínio via comando na CLI |
| [#9995](https://github.com/NousResearch/hermes-agent/pull/9995) | tkpang | feat(feishu): add group history context and video cover key support | Melhora contexto em grupos e suporte a miniaturas de vídeo no Feishu |
| [#7536](https://github.com/NousResearch/hermes-agent/pull/7536) | SHL0MS | [Gateway] Stuck session resumes on restart | Resolve loop irrecuperável ao reiniciar gateway com sessão travada |

**Destaque:** A correção do `NameError: name 'os' is not defined` ([#9939](https://github.com/NousResearch/hermes-agent/pull/9939)) era um bloqueador direto para uso do dashboard web — problema crítico que afeta novos usuários.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (por comentários)

1. **[#9179](https://github.com/NousResearch/hermes-agent/issues/9179)** — SECURITY.md — *14 comentários* | [CLOSED]  
   Pedido para ativar *private vulnerability reporting* no repositório. Comunidade demonstra maturidade em práticas de segurança. Status: fechado.

2. **[#501](https://github.com/NousResearch/hermes-agent/issues/501)** — Web UI Gateway Feature — *13 comentários* | [OPEN]  
   Proposta de interface web local com streaming, artifacts e renderização rica. **Tema dominante** — múltiplas issues derivadas ([#8852](https://github.com/NousResearch/hermes-agent/issues/8852), [#8183](https://github.com/NousResearch/hermes-agent/issues/8183)). A comunidade identifica lacuna crítica frente a concorrentes (Claude, etc.).

3. **[#8852](https://github.com/NousResearch/hermes-agent/issues/8852)** — Proposal: Official Web Control UI — *4 comentários* | [OPEN]  
   Integra `nesquena/hermes-webui` (1.602 stars, 154 forks) como solução oficial. Sinais claros de demanda validada pelo mercado.

### Feature Requests com Potencial de Roadmap

| Issue | Tema | Sinais |
|---|---|---|
| [#6839](https://github.com/NousResearch/hermes-agent/issues/6839) | Lazy Tool Schema Loading — *3 👍* | Reduz ~3.500–5.000 tokens por chamada em modelos locais; alto impacto em performance |
| [#5999](https://github.com/NousResearch/hermes-agent/issues/5999) | /model command in-session | Elimina fricção ao trocar modelos durante conversas ativas |
| [#9166](https://github.com/NousResearch/hermes-agent/issues/9166) | QQ Bot Integration | Abrange base de usuários chinesa; implementação completa e testada |
| [#8542](https://github.com/NousResearch/hermes-agent/issues/8542) | Orchestra Research Suite | 94+ primitivas de pesquisa para LLMs — expansão do ecossistema de skills |

---

## 5. Bugs e Estabilidade

### Por Severidade

#### 🔴 P1 (Críticos)

| Issue | Descrição | Status |
|---|---|---|
| [#9936](https://github.com/NousResearch/hermes-agent/issues/9936) | NameError `os` não definido no dashboard — bloqueia configuração via UI | **FIXED** ([#9939](https://github.com/NousResearch/hermes-agent/pull/9939)) |
| [#9930](https://github.com/NousResearch/hermes-agent/issues/9930) | MCP reconnect falha com `asyncio.CancelledError` no Python 3.11+ — 586 ferramentas ficam indisponíveis após restart | OPEN |
| [#7536](https://github.com/NousResearch/hermes-agent/issues/7536) | Sessões travadas voltam ao estado travado após restart — loop irrecuperável | **FIXED** |
| [#9948](https://github.com/NousResearch/hermes-agent/issues/9948) | `MemoryManager.add_provider()` deixa provider externo meio-registrado, bloqueando todos os futuros | OPEN |

#### 🟠 P2 (Altos)

| Issue | Descrição |
|---|---|
| [#9789](https://github.com/NousResearch/hermes-agent/issues/9789) | KeyError 'sms' no gateway — plataforma não registrada no PLATFORMS registry |
| [#9813](https://github.com/NousResearch/hermes-agent/issues/9813) | Tokens OAuth (`cc-`) misclassificados como API keys — falha em autenticação Claude Code |
| [#9817](https://github.com/NousResearch/hermes-agent/issues/9817) | Completions com `@` crasham a CLI |
| [#9814](https://github.com/NousResearch/hermes-agent/issues/9814) | Insights subconta uso de ferramentas ao coexistirem fontes `tool_name` e `tool_calls` |
| [#9950](https://github.com/NousResearch/hermes-agent/issues/9950) | `batch_runner` refaz prompts "sem raciocínio" infinitamente no `--resume` |

#### 🟡 P3 (Médios)

| Issue | Plataforma | Descrição |
|---|---|---|
| [#9840](https://github.com/NousResearch/hermes-agent/issues/9840) | Discord | Bot envia "(No message)" em vez de não enviar nada |
| [#9835](https://github.com/NousResearch/hermes-agent/issues/9835) | Feishu | Arquivos/imagens em grupos são descartados silenciosamente |
| [#9816](https://github.com/NousResearch/hermes-agent/issues/9816) | Feishu | Excesso de escape no Markdown quebras rendering |
| [#9916](https://github.com/NousResearch/hermes-agent/issues/9916) | Feishu | Respostas vazam da thread de tópico para o chat principal |
| [#9721](https://github.com/NousResearch/hermes-agent/issues/9721) | Geral | Headers HTTP customizados indisponíveis — Cloudflare WAF retorna 403 |
| [#6351](https://github.com/NousResearch/hermes-agent/issues/6351) | macOS/Ollama | HTTP 503 ao usar Ollama local |
| [#9869](https://github.com/NousResearch/hermes-agent/issues/9869) | Hindsight | Timeout hardcoded de 30s causa falha em operações longas |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Evidências Concretas de Direção

| Feature | Indicador | Potencial |
|---|---|---|
| **Web UI Local** | #501 (13 comentários), #8852, #8183 — forte pressão comunitária + fork com 1.600+ stars | Muito alto |
| **AWS Bedrock Provider** | 2 PRs concorrentes: [#9957](https://github.com/NousResearch/hermes-agent/pull/9957) (Anthropic SDK) vs [#7920](https://github.com/NousResearch/hermes-agent/pull/7920) (Converse API) | Alto |
| **Lazy Tool Schema Loading** | #6839 com 3 👍 — problema real de performance em modelos locais | Alto |
| **QQ Bot** | #9166 — implementação completa e testada | Médio |
| **YantrikDB Memory Provider** | [#9989](https://github.com/NousResearch/hermes-agent/pull/9989) — adiciona memory backend Rust com capacidades de reasoning | Experimental |
| **/model in-session** | #5999 — elimina contexto switching | Médio |
| **/editor command** | [#7620](https://github.com/NousResearch/hermes-agent/pull/7620) — compose em $EDITOR | Conveniência |

### Conflitos de Implementação a Resolver
- **AWS Bedrock:** Divergência entre SDK nativo Anthropic ([#9957](https://github.com/NousResearch/hermes-agent/pull/9957)) vs API Converse ([#7920](https://github.com/NousResearch/hermes-agent/pull/7920)). O PR #9957 preserva recursos como streaming e reasoning.

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

1. **Falta de Web UI nativa**  
   Usuários esperam interface web comparable a Claude. A lacuna cria barreira de entrada para não-técnicos.

2. **Problemas de estabilidade em plataformas**  
   - **Feishu:** Markdown quebrado, vazamento de threads, drop de arquivos — ecossistema com suporte imaturo.
   - **Discord:** Comportamento inesperado "(No message)" expõe training/config problems.
   - **Telegram:** Validação de token ausente no setup.

3. **Performance em modelos locais**  
   Overhead de 3.500–5.000 tokens por chamada quando apenas subconjunto de tools é usado. Impacta diretamente modelos locais (Ollama).

4. **Erros de configuração não-guidados**  
   - `NameError` em import ausentes ([#9936](https://github.com/NousResearch/hermes-agent/issues/9936)).
   - Headers HTTP não configuráveis causam 403 em provedores customizados ([#9721](https://github.com/NousResearch/hermes-agent/issues/9721)).
   - Tokens OAuth mal classificados — barreira para Claude Code users.

5. **Memory provider robustness**  
   Falha em registro de providers externos pode bloquear todo o sistema de memória.

### Cenários de Uso Emergentes
- **Pesquisa acadêmica/engenharia:** Skills de Orchestra Research (#8542) indicam adoção em contextos de pesquisa avançada.
- **Mercado chinês:** QQ Bot integration (#9166) demonstra expansão geográfica.
- **Enterprise:** AWS Bedrock provider busca paridade com ambientes cloud-native.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta / Abandonadas

| Issue | Idade | Tema | Prioridade |
|---|---|---|---|
| [#501](https://github.com/NousResearch/hermes-agent/issues/501) | ~40 dias | Web UI Gateway | **Alta** — aguardando direcionamento oficial |
| [#4538](https://github.com/NousResearch/hermes-agent/issues/4538) | ~13 dias | Skill auto-naming incorreto | Média |
| [#8183](https://github.com/NousResearch/hermes-agent/issues/8183) | ~3 dias | Web UI MVP contract — não há decisão ainda | Alta |
| [#6351](https://github.com/NousResearch/hermes-agent/issues/6351) | ~6 dias | Ollama 503 em macOS | Média |
| [#5463](https://github.com/NousResearch/hermes-agent/pull/5463) | ~9 dias | Discord thread access — PR aberto | Média |

### PRs Estagnados

| PR | Idade | Tema |
|---|---|---|
| [#7920](https://github.com/NousResearch/hermes-agent/pull/7920) | ~4 dias | AWS Bedrock via Converse API — em competição com #9957 |
| [#7620](https://github.com/NousResearch/hermes-agent/pull/7620) | ~4 dias | /editor command — aguardando review |

---

## Indicadores de Saúde do Projeto

| Indicador | Valor | Avaliação |
|---|---|---|
| Atividade (issues + PRs / 24h) | 100 | 🟢 Muito alta |
| Releases (24h) | 0 | 🟡 Sem tag recente |
| Bug backlog aberto | ~20 | 🟠 Moderado |
| PRs abertos | 38 | 🟢 Saudável |
| Razão issues/PRs fechadas | 10/12 | 🟢 Proporção positiva |
| Web UI como tema dominante | Sim | 🟢 Sinal de produto maduro para UX |

---

*Relatório gerado automaticamente com base em dados do GitHub — NousResearch/hermes-agent — 2026-04-15.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório de Projeto PicoClaw — 2026-04-15

## 1. Panorama do dia

O projeto PicoClaw apresenta alta atividade em 15 de abril de 2026, com **30 PRs atualizados** nas últimas 24h (16 abertos, 14 merged/fechados) e **8 issues** (6 abertas/ativas, 2 fechadas). O volume de atividade sugere um ciclo intenso de desenvolvimento, com foco em estabilidade e UX. Foi publicada uma nightly build (`v0.2.6-nightly.20260415.c0fadc59`), indicando preparativos para a próxima versão. A comunidade demonstra engajamento ativo, com contributions em múltiplos domínios: ferramentas web, provider, cron, agent e build.

---

## 2. Lançamentos

### Nova Release

| Versão | Tipo | Data |
|--------|------|------|
| `v0.2.6-nightly.20260415.c0fadc59` | Nightly Build | 2026-04-15 |

**Resumo:**
- Build automático para acompanhamento do branch `main`
- **Aviso**: Pode ser instável; uso em produção não recomendado
- Full changelog: https://github.com/sipeed/picoclaw/compare/v0.2.6...main

**Observação:** Não há breaking changes documentadas nesta nightly. A release indica trabalho contínuo de integração entre os múltiplos PRs abertos.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados (Últimas 24h)

| PR | Autor | Domínio | Impacto |
|----|----|---------|---------|
| [#2517](https://github.com/sipeed/picoclaw/pull/2517) | lxowalle | tool | **Validação direta de API key/URL** nos métodos Search — erro claro quando faltam credenciais |
| [#2430](https://github.com/sipeed/picoclaw/pull/2430) | SiYue-ZO | channel | **Tooltips de razões de desabilitação** nos botões da WebUI — UX melhorada |
| [#2501](https://github.com/sipeed/picoclaw/pull/2501) | lahuman | cron | **Confiabilidade do cron**: falhas visíveis, claim/retry/audit state, preservação de cadência |
| [#2523](https://github.com/sipeed/picoclaw/pull/2523) | lc6464 | channel | **Placeholder contextual** para composer desabilitado com orientações de recuperação |
| [#2514](https://github.com/sipeed/picoclaw/pull/2514) | lc6464 | config, build | **Host binding para launcher/gateway** — resolve issue #2488 (OpenWrt 23.05) |
| [#2521](https://github.com/sipeed/picoclaw/pull/2521) | BeaconCat | chore | Atualização QR code WeChat |
| [#2518](https://github.com/sipeed/picoclaw/pull/2518) | imguoguo | docs | Atualização documentação QR code |
| [#2516](https://github.com/sipeed/picoclaw/pull/2516) | sushi30 | ci | Remoção do cron schedule de sync-rebase (disponível sob demanda) |

### Destaques de Avanço

**Stabilidade do Sistema:**
- Cron: Melhorias significativas em confiabilidade e recuperação pós-reinício
- Build: Correção de binding em OpenWrt 23.05 ARM64

**UX/WebUI:**
- Razões de desabilitação visíveis para usuário
- Melhor feedback contextual

**Provedores:**
- Validação mais clara de credenciais para web search

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| Issue | Tipo | Comentários | 👍 | Título |
|-------|------|-------------|----|-------|
| [#806](https://github.com/sipeed/picoclaw/issues/806) | enhancement, roadmap | 8 | 8 | **[Feature] Add webUI support** (Refactoring now) |
| [#2148](https://github.com/sipeed/picoclaw/issues/2148) | roadmap, agent | 3 | 0 | **Phase 2 Implementation Plan: Agent Discovery → Delegation** |
| [#2354](https://github.com/sipeed/picoclaw/issues/2354) | bug, channel | 3 | 0 | **[BUG] Something Wrong** (WebUI input desabilitado) |

### Análise de Demandas

**#806 — WebUI Support:**
- **Demanda central**: Interface web para reduzir barreira de entrada para iniciantes
- **Estado**: Refactoring em andamento por Zepan
- **Sinais**: A comunidade valoriza acessibilidade; 8 reactions indicam suporte forte
- **Conexão**: Vários PRs (#2430, #2523) já implementam melhorias de UX na WebUI

**#2148 — Agent Discovery Phase 2:**
- Implementação do plano de descoberta e delegação de agentes
- Vinculado ao counter-proposal #1934
- Sinaliza roadmap estruturado para sistema multi-agente

**#2354 — WebUI Input Bug:**
- Campo de input e botão de envio desabilitados na interface web
- Reportado com 3 comentários de discussão técnica
- **Resolvido**: Issue closed em 2026-04-14

---

## 5. Bugs e Estabilidade

### Bugs Reportados (Abertos)

| Severidade | Issue | Domínio | Resumo |
|------------|-------|---------|--------|
| **Alta** | [#2519](https://github.com/sipeed/picoclaw/issues/2519) | tool, config | **Comandos accessing diretórios externos ao workspace** — +100 linhas de erro "Command blocked by saf" em operações simples |
| **Alta** | [#2468](https://github.com/sipeed/picoclaw/issues/2468) | cron | **Scheduled task falha**: "scheduling command execution is restricted to internal channels" |
| **Média** | [#2513](https://github.com/sipeed/picoclaw/issues/2513) | channel | **Gateway start abnormal** — запускается mas não aceita conexões |
| **Baixa** | [#2488](https://github.com/sipeed/picoclaw/issues/2488) | config, build | TCP connections falham em OpenWrt 23.05 ARM64 **[RESOLVIDO via #2514]** |

### Bugs Fechados

| Issue | Domínio | Resolução |
|-------|---------|-----------|
| [#2354](https://github.com/sipeed/picoclaw/issues/2354) | channel | Resolvido |
| [#2488](https://github.com/sipeed/picoclaw/issues/2488) | config, build | Resolvido via PR #2514 |

### PRs de Bug Fix em Aberto

| PR | Domínio | Status |
|----|---------|--------|
| [#2525](https://github.com/sipeed/picoclaw/pull/2525) | provider, agent | **Recuperação após falhas image-input-unsupported** — previne session "stuck" |
| [#2474](https://github.com/sipeed/picoclaw/pull/2474) | cron | **Sessão independente por execução cron** — evita interferência entre runs |
| [#2411](https://github.com/sipeed/picoclaw/pull/2411) | provider, go | **SSE stream chunk parsing** — evita perda de conteúdo em boundaries |
| [#2520](https://github.com/sipeed/picoclaw/pull/2520) | tool, cron | **Resolução de falhas de criação/execução cron** |
| [#2522](https://github.com/sipeed/picoclaw/pull/2522) | provider | **Streaming usage para OpenAI** |

### Análise de Estabilidade

**Padrões identificados:**
1. **Cron jobs**: Múltiplos bugs relacionados a isolamento de sessão e falhas silenciosas
2. **Providers**: Edge cases em streaming e compatibilidade de modelos
3. **Segurança/SAF**: Comportamento de workspace causing errors repetidos

**Recomendação:** Atenção priorizada ao PR #2525 (image-input recovery) e #2519 (workspace safety) — podem afetar experiência de usuário em produção.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features

| Issue | Tipo | Domínio | Título | Estratégia |
|-------|------|---------|--------|------------|
| [#2515](https://github.com/sipeed/picoclaw/issues/2515) | enhancement | provider | **Memory system robusto com integração mem0/Supermemory/HydraDB** | SDK Go para providers externos |
| [#2519](https://github.com/sipeed/picoclaw/issues/2519) | feature | config | **Force workspace como diretório padrão** | Configuração de segurança |

### Features em Implementação

| PR | Domínio | Título |
|----|---------|--------|
| [#2524](https://github.com/sipeed/picoclaw/pull/2524) | tool, config | **Sogou-backed web search** — suporte China mainland |
| [#2524](https://github.com/sipeed/picoclaw/pull/2524) | channel | **Painel de configuração de web search na WebUI** |
| [#2503](https://github.com/sipeed/picoclaw/pull/2503) | agent, channel | **Agent loop support parallel** |
| [#2484](https://github.com/sipeed/picoclaw/pull/2484) | provider | **LLM-as-Judge evaluation mode** para membench |
| [#2502](https://github.com/sipeed/picoclaw/pull/2502) | agent | **Comando /btw** para side-questions |

### Sinais de Roadmap

**Alta Prioridade (Roadmap tagged):**
- #806: WebUI support — refactoring em andamento
- #2148: Phase 2 Agent Discovery → Delegation

**Tendências:**
1. **UX/WebUI**: Esforço concentrado em acessibilidade (WebUI, tooltips, placeholders)
2. **Memory/Providers**: Sistema de memória interoperável com providers externos
3. **Cron/Scheduler**: Melhorias em confiabilidade e isolamento
4. **Agent System**: Preparação para processamento paralelo e comandos adicionais

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Dor | Cenário | Impacto |
|-----|---------|--------|
| **Comandos bloqueados por SAF** | Operações simples de query causam +100 linhas de erro | Usuário relata experiência degradada, система não confiável |
| **WebUI inputs desabilitados** | Não consegue conversar via interface web | Bloqueio de uso основной interface |
| **Gateway não aceita conexões** | picoClaw gateway inicia mas não responde | Sistema inoperante |
| **TCP failures em OpenWrt** | Conexões em ARM64 musl falham | Incompatibilidade com ambiente popular (roteadores) |

### Cenários de Uso

**Usuários técnicos (avançados):**
- Configuração em roteadores OpenWrt
- Build custom com CGO_ENABLED=0
- Integração com modelos glm4.7

**Usuários não-técnicos:**
- Necessidade de interface web intuitiva (WebUI)
- Operações de busca sem configuração de provider extra

### Satisfação/Insatisfação

| Aspecto | Sentimento | Observação |
|---------|------------|------------|
| **Cron reliability** | Insatisfeito | Falhas silenciosas, perda de reminders |
| **Segurança (SAF)** | Insatisfeito | Comportamento excessivamente restritivo |
| **WebUI** | Em evolução | Melhorias em andamento mas ainda com bugs |
| **Cross-platform** | Preocupado | Windows build failures, OpenWrt issues |

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Stale

| Issue | Idade | Tipo | Título | Prioridade |
|-------|-------|------|--------|------------|
| [#2239](https://github.com/sipeed/picoclaw/issues/2239) | 14 dias | enhancement, docker | **modify docker compose with privileged** | Média |

*Observação: #2239 tem PR associado (#2239) aberto há 14 dias sem merge ou feedback.*

### PRs Antigos em Aberto

| PR | Idade | Domínio | Título |
|----|----|---------|--------|
| [#2411](https://github.com/sipeed/picoclaw/pull/2411) | 8 dias | provider, go | SSE stream chunk parsing |
| [#2484](https://github.com/sipeed/picoclaw/pull/2484) | 3 dias | provider | LLM-as-Judge evaluation mode |

### Recomendações

1. **Priorizar review de PRs de stability** (cron, provider) — muitos estão aguardando merge há dias
2. **Revisar #2239** —贡献 PR de docker aberto há 14 dias sem feedback
3. **Agendar triagem de #2519** — issue de alta severidade sobre workspace safety
4. **Acompanhar #806** — WebUI refactoring em andamento; community espera entrega

---

## Métricas Resumidas

| Indicador | Valor |
|-----------|-------|
| PRs abertos | 16 |
| PRs merged/fechados (24h) | 14 |
| Issues abertas | 6 |
| Issues fechadas (24h) | 2 |
| Bugs críticos abertos | 2 |
| Features em implementação | 5 |
| Release nightly | 1 |

---

**Saúde Geral: 🟡 Estável com alta atividade**  
O projeto demonstra vigoroso desenvolvimento com foco em estabilidade (cron, providers), UX (WebUI), e extensibilidade (memory providers). Atenção necessária para backlog de PRs antigos e issues de segurança/workspace.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório de Projeto — IronClaw
**Data:** 2026-04-15 | **Período:** Últimas 24h

---

## 1. Panorama do Dia

O projeto IronClaw mantém uma atividade intensa e bem diversificada. Nas últimas 24h, foram registradas 50 issues (46 abertas, 4 fechadas) e 50 PRs (36 abertos, 14 merged/fechados) — um volume expressivo que evidencia um ciclo de desenvolvimento acelerado. A **segurança** sigue como prioridade visível: dois PRs de segurança foram fechados (#2401, #2473) e há uma issue em aberto sobre *memory poisoning* (#2470). O release mais recente continua sendo a versão **0.25.0** (sem novos releases neste período). A comunidade reporta bugs críticos na experiência web (mensagens que desaparecem, loop de refresh no dashboard) e há uma issue de QA sobre falha de upgrade entre versões. O time de contribuidores core (henrypark133, serrrfirat) lidera a maior parte dos PRs, com contribuições significativas também de colaboradores novos (quchenyuan, ymcrcat).

---

## 2. Lançamentos

**Nenhum novo release nas últimas 24h.**

A versão mais recente em circulação permanece **0.25.0** (`nearaidev/ironclaw-dind:0.25.0`). O pipeline de CI continua promovendo builds de staging automaticamente (4 promoções nas últimas 24h), mas nenhuma tag de release público foi criada.

> ⚠️ **Nota:** Há uma issue de QA reportando falha de upgrade de 0.24.0 para 0.25.0 sem detalhe de erro ([#2346](https://github.com/nearai/ironclaw/issues/2346)). Recomenda-se atenção antes de aplicar em produção.

---

## 3. Progresso do Projeto

Os PRs mais relevantes **merged ou fechados** hoje:

| PR | Escopo | Destaque |
|----|--------|----------|
| [#2475](https://github.com/nearai/ironclaw/pull/2475) | e2e test | Novo teste Playwright valida persistência de mensagens após reload — cobre o bug #2409 |
| [#2434](https://github.com/nearai/ironclaw/pull/2434) | gateway | Corrige persistência de mensagens no momento do envio (antes era assíncrono, causando perda) |
| [#2425](https://github.com/nearai/ironclaw/pull/2425) | db | Introduce `CachedSettingsStore` com write-through invalidation — todas as leituras de settings do agent-loop passam pelo cache |
| [#2473](https://github.com/nearai/ironclaw/pull/2473) | extensions | Corrige storage de nonce OAuth do relay (Slack OAuth estava falhando para todos os usuários) |
| [#2467](https://github.com/nearai/ironclaw/pull/2467) | sandbox | Prioriza socket Docker sobre checagem de binário CLI — corrige deploys container-in-container (Nomad) |
| [#2401](https://github.com/nearai/ironclaw/pull/2401) | security | Gata test URL rewriters atrás de `#[cfg(test)]` — fecha vetor de ataque em builds de staging |
| [#2362](https://github.com/nearai/ironclaw/pull/2362) | ci | Adiciona *live canary regression lanes* com replay gating — infraestrutura de smoke test em produção |

**PRs abertos de destaque ainda em revisão:**

| PR | Escopo | Impacto |
|----|--------|---------|
| [#2429](https://github.com/nearai/ironclaw/pull/2429) | agent | Mensagens em threads diferentes passam a processar em paralelo via `tokio::spawn`; serialização por thread preservada |
| [#2168](https://github.com/nearai/ironclaw/pull/2168) | credentials | Credential mapping com `path_patterns` — permite segredo diferente por prefixo de URL no mesmo host |
| [#1446](https://github.com/nearai/ironclaw/pull/1446) | llm | Adiciona `AliyunProvider` para DashScope — abre suporte ao ecossistema Alibaba Cloud |
| [#2459](https://github.com/nearai/ironclaw/pull/2459) | ci | Workflows CI com review AI, health monitor e smoke test em cada PR |
| [#2428](https://github.com/nearai/ironclaw/pull/2428) | gate | Persiste decisões "always approve" no DB na engine v2 — defense-in-depth para ferramentas críticas |
| [#2423](https://github.com/nearai/ironclaw/pull/2423) | tools | Execução concorrente de tools read-only via `JoinSet`; tools mutantes rodam em série |

---

## 4. Temas Quentes da Comunidade

**Issues com maior engajamento (comentários + reações):**

1. **#2229 — Google Sheets OAuth bloqueado (Error 400 invalid_request)** — 7 comentários, 0 👍  
   Autor: `joe-rlo` | Criado: 2026-04-10 | [Link](https://github.com/nearai/ironclaw/issues/2229)  
   QA report completo no ambiente staging. Problema afeta extensão Google Suite. Este é o bug com **mais comentários** do período — indica que a integração OAuth com Google está quebrada e impactando workflows reais de QA.

2. **#2230 — Twitter/X conexão indisponível (MCP requer extração manual de cookies)** — 4 comentários, 0 👍  
   Autor: `joe-rlo` | Criado: 2026-04-10 | [Link](https://github.com/nearai/ironclaw/issues/2230)  
   Problema no canal Twitter/X: MCP não consegue autenticar automaticamente, forçando extração manual de cookies do navegador. Afeta o caso de uso "Daily Twitter digest".

3. **#76 — feat: Discord channel integration** — 3 comentários, **3 👍**, **CLOSED**  
   Autor: `ilblackdragon` | [Link](https://github.com/nearai/ironclaw/issues/76)  
   Integração com Discord foi concluída (issue fechada). O estado "closed" com 3 👍 sugere que a funcionalidade era aguardada pela comunidade.

4. **#80 — Multi-provider LLM support (Ollama, Bedrock, Gemini)** — 3 comentários, 0 👍  
   Autor: `ilblackdragon` | [Link](https://github.com/nearai/ironclaw/issues/80)  
   Feature parity track: ainda faltam Ollama (P2), AWS Bedrock (P3), Google Gemini (P3) e OpenRouter.

5. **#84 — Agent system advanced features (multi-agent, streaming, thinking modes)** — 3 comentários, 0 👍  
   Autor: `ilblackdragon` | [Link](https://github.com/nearai/ironclaw/issues/84)  
   Roteamento multi-agente, sessões globais e modos de raciocínio ainda pendentes (P2-P3).

6. **#87 — Memory & knowledge system enhancements** — 3 comentários, 0 👍  
   Autor: `ilblackdragon` | [Link](https://github.com/nearai/ironclaw/issues/87)  
   Embeddings locais, batching, citação e CLI de memória como lacunas identificadas.

7. **#144 — Chat/channel do projeto** — 2 comentários, **1 👍**  
   Autor: `BroccoliFin` | [Link](https://github.com/nearai/ironclaw/issues/144)  
   Comunidade solicita canal oficial de comunicação (Discord/Telegram) para discussão de tarefas e brainstorming — questão de *engagement*, não de código.

---

## 5. Bugs e Estabilidade

**Por severidade, baseado em labels e escopo:**

### P0 / p0_quality (críticos — afetam produção)
| # | Título | Escopo | Status | Atualizado |
|---|--------|--------|--------|------------|
| [#2409](https://github.com/nearai/ironclaw/issues/2409) | Mensagens desaparecem após digitar no chat | channel/web | OPEN | 2026-04-14 |
| [#2346](https://github.com/nearai/ironclaw/issues/2346) | Upgrade de 0.24.0 → 0.25.0 falha sem detalhe | config/setup | OPEN | 2026-04-14 |
| [#2276](https://github.com/nearai/ironclaw/issues/2276) | Orchestrator crash com HTTP 413 Payload Too Large | llm/orchestrator | OPEN | 2026-04-14 |
| [#2405](https://github.com/nearai/ironclaw/issues/2405) | Gateway routing error: broadcast() requires thread_id | channel/web | OPEN | 2026-04-14 |
| [#2410](https://github.com/nearai/ironclaw/issues/2410) | Dashboard faz refresh em loop e limpa conteúdo | channel/web | OPEN | 2026-04-14 |

> ✅ **Mitigados:** #2409 (mensagens desaparecendo) e #2411 (Telegram token save) já têm PRs associados ([#2434](https://github.com/nearai/ironclaw/pull/2434), [#2432](https://github.com/nearai/ironclaw/pull/2432)) merged/fechados.

### P2 / bug_bash (QA reports de estabilidade)
| # | Título | Escopo | Status | Atualizado |
|---|--------|--------|--------|------------|
| [#2281](https://github.com/nearai/ironclaw/issues/2281) | Bot ignora condições temporais e envia imediatamente | agent | OPEN | 2026-04-15 |
| [#1997](https://github.com/nearai/ironclaw/issues/1997) | Slack App não disponível para usuários | channel/wasm | OPEN | 2026-04-14 |
| [#1998](https://github.com/nearai/ironclaw/issues/1998) | Slack connect flow quebrado | channel/wasm | OPEN | 2026-04-14 |
| [#2402](https://github.com/nearai/ironclaw/issues/2402) | Bot entra em loop infinito "Calling LLM" após tool ops | agent/tool | OPEN | 2026-04-14 |

### Segurança
| # | Título | Severidade | Status | Atualizado |
|---|--------|-----------|--------|------------|
| [#2470](https://github.com/nearai/ironclaw/issues/2470) | Memory poisoning: write_to_layer() bypasseia injection scanning | Alta | OPEN | 2026-04-14 |
| [#2474](https://github.com/nearai/ironclaw/issues/2474) | stdio MCP servers disparam OAuth discovery flow incorretamente | Média | OPEN | 2026-04-14 |

> ⚠️ **Auditoria FailSafe:** Três das quatro vulnerabilidades já foram corrigidas. A issue [#2470](https://github.com/nearai/ironclaw/issues/2470) sobre *memory poisoning* permanece **aberta** e merece priorização urgente.

---

## 6. Pedidos de Features e Sinais de Roadmap

**Novas features sinalizadas nas últimas 24h:**

| # | Feature | Escopo | Prioridade | Observação |
|---|---------|--------|------------|------------|
| [#2281](https://github.com/nearai/ironclaw/issues/2281) | Condições temporais/scheduling funcionais | agent | P2 | Bug report masquerading como feature request — scheduling não funciona |
| [#1446](https://github.com/nearai/ironclaw/pull/1446) | Aliyun Coding Plan support (DashScope) | llm | — | PR aberto; primeiro passo para providers chineses |
| [#80](https://github.com/nearai/ironclaw/issues/80) | Multi-provider LLM (Ollama, Bedrock, Gemini) | llm | P1-P3 | Roadmap documentado em FEATURE_PARITY.md |
| [#84](https://github.com/nearai/ironclaw/issues/84) | Multi-agent, streaming, thinking modes | agent | P2-P3 | Idem |
| [#87](https://github.com/nearai/ironclaw/issues/87) | Local embeddings, batching, citations | workspace | P2-P3 | Idem |
| [#90](https://github.com/nearai/ironclaw/issues/90) | Audio pipeline (STT, TTS, voice notes) | llm/channel | P1-P2 | PREREQUISITO para WhatsApp voice notes |
| [#150](https://github.com/nearai/ironclaw/issues/150) | Import Claude conversation history | workspace | Alta | Feature de migração com maior prioridade |
| [#97](https://github.com/nearai/ironclaw/issues/97) | Generic embedding model endpoint | llm | — | Permite qualquer provider de embeddings |
| [#101](https://github.com/nearai/ironclaw/issues/101) | RFC: Git-Based Plugin Registry | extensions | Draft | Zaki Manian & Illia Polosukhin — design em discussão |

**Sinais de roadmap via PRs abertos:**
- **Parallelismo:** O PR [#2429](https://github.com/nearai/ironclaw/pull/2429) indica que execução paralela de mensagens por thread está em desenvolvimento ativo.
- **Ferramentas concorrentes:** O PR [#2423](https://github.com/nearai/ironclaw/pull/2423) avança execução paralela de tools read-only — melhoria de performance significativa.
- **CI AI-first:** O PR [#2459](https://github.com/nearai/ironclaw/pull/2459) mostra que a equipe está investindo em automação de review e smoke tests com IA.

---

## 7. Resumo de Feedback dos Usuários

**Dores reais identificadas:**

1. **OAuth quebrado em integrações externas** — Google Sheets (#2229) e Twitter/X (#2230) estão inoperantes. Isso impacta diretamente casos de uso reais (automação de productivity). A comunidade precisa de OAuth funcional para integrações de produtividade.

2. **Canal Slack completamente indisponível** (#1997, #1998) — Usuários não conseguem configurar o Slack; quando conseguem, a integração não funciona. Afeta o público empresarial que usa Slack como hub de comunicação.

3. **Telegram com falhas de isolamento de memória e tools** (#2259) — Usuários que configuram tools via CLI não conseguem acessá-las pelo Telegram. Problema de consistência entre canais.

4. **Experiência web imatura** — Mensagens desaparecem (#2409, corrigido por #2434), dashboard entra em loop (#2410), bot entra em loop infinito de LLM (#2402). A interface web ainda apresenta bugs de UX críticos.

5. **Upgrade path problemático** (#2346) — Falha silenciosa de upgrade entre versões. Usuários em produção podem ficar presos em versões antigas sem saber o porquê.

**Cenários de uso observados:**
- **Daily AI digest** (Twitter → Telegram): case de uso forte; quebrado por #2230.
- **Meeting prep assistant** com scheduling temporal: desejado; quebrado por #2281.
- **Claude → IronClaw migration**: alta demanda; issue #150 com 0 comentários mas alta prioridade documentada.
- **Multi-channel agent** (Discord, Slack, Telegram): Discord pronto (#76 closed), Slack quebrado, Telegram com limitações.

**Satisfação/Insatisfação:**
- 👍 **Discord integration** com 3 reactions positiva — a comunidade valorizou o fechamento.
- 🔇 **Zero reactions** na maioria dos bugs de QA (50+ issues) — possivelmente reporters são testers internos (

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do Projeto CoPaw/QwenPaw — 2026-04-15

## 1. Panorama do dia

O projeto CoPaw/QwenPaw demonstra **alta atividade** nesta data. Nas últimas 24h, 48 issues e 45 PRs foram atualizados, com 14 issues fechadas e 22 PRs merged/fechadas. A comunidade está particularmente engajada na migração de CoPaw para QwenPaw, gerando diversas dúvidas e problemas relacionados à transição de versão. A release v1.1.1 trouxe novos provedores (OpenRouter, OpenCode), sinalizando expansão de ecossistema. Dois PRs críticos de performance foram merged, reduzindo drasticamente o tempo de inicialização (~4.5s → 0.05s), evidenciando foco em experiência do usuário.

## 2. Lançamentos

### v1.1.1 (Stable)
**Data:** 2026-04-14

| Categoria | Alteração |
|-----------|-----------|
| **OpenRouter Provider** | Provedor nativo com descoberta de modelos, navegação por série e filtragem por modalidade e preço. [#1192](https://github.com/agentscope-ai/QwenPaw/pull/1192) |
| **OpenCode Provider** | Provedor OpenAI-compatible para OpenCode |

**Nota de Migração:** Usuários migrando de CoPaw para QwenPaw devem consultar a documentação oficial. Diversas issues (#3288, #3309, #3351) indicam que o processo de migração ainda não está claro para muitos usuários. O diretório `.copaw` coexiste com `.qwenpaw` por padrão, exigindo migração manual de agentes, skills e workspaces.

### v1.1.1-beta.2 (Beta)
**Data:** 2026-04-14

Melhorias no modal de gerenciamento de provedores/modelos, incluindo tags de capacidade e busca por modelo. [#3343](https://github.com/agentscope-ai/QwenPaw/pull/3343)

---

## 3. Progresso do Projeto

### PRs Merged/Fechadas Hoje

| PR | Autor | Impacto | Link |
|----|-------|---------|------|
| **#2996** — Auto-build console frontend on startup | shadowabi | Elimina stale build após `git pull` | [PR #2996](https://github.com/agentscope-ai/QwenPaw/pull/2996) |
| **#2987** — Fix cancel race condition | shadowabi | Corrige chat cancel que não funcionava; novo cancelamento ignorava mensagem antiga | [PR #2987](https://github.com/agentscope-ai/QwenPaw/pull/2987) |
| **#3386** — Performance: QwenPaw startup optimization | rayrayraykk | **Reduz startup de ~4.5s para ~0.05s** via lazy loading e inicialização paralela | [PR #3386](https://github.com/agentscope-ai/QwenPaw/pull/3386) |
| **#3292** — Refactor multi-agent collaboration | pan-x-c | Adiciona ferramentas nativas `list_agents`, `chat_with_agent`; padroniza colaboração | [PR #3292](https://github.com/agentscope-ai/QwenPaw/pull/3292) |
| **#3379** — Fix scheduled task 422 error | celestialhorsehorse51D | Corrige erro de validação ao criar tarefas agendadas | [PR #3379](https://github.com/agentscope-ai/QwenPaw/pull/3379) |

### PRs em Review (Under Review)

| PR | Descrição | Link |
|----|-----------|------|
| **#3394** | Warn when console frontend build is outdated | [PR #3394](https://github.com/agentscope-ai/QwenPaw/pull/3394) |
| **#3365** | **Agent Statistics page** — cards de métricas + gráficos de tendência | [PR #3365](https://github.com/agentscope-ai/QwenPaw/pull/3365) |
| **#3257** | Render approve buttons para tool guard (em vez de comando `/approve`) | [PR #3257](https://github.com/agentscope-ai/QwenPaw/pull/3257) |
| **#3347** | Torna file watcher recursivo configurável para memória | [PR #3347](https://github.com/agentscope-ai/QwenPaw/pull/3347) |
| **#3107** | Fix tool call stop para modelos similares a qwen3-coder-plus | [PR #3107](https://github.com/agentscope-ai/QwenPaw/pull/3107) |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| Issue | Tipo | Comentários | Link |
|-------|------|-------------|------|
| **#2291** — Open Tasks para contribuições | enhancement | 56 comentários | [Issue #2291](https://github.com/agentscope-ai/QwenPaw/issues/2291) |
| **#3288** — Como migrar CoPaw → QwenPaw | question | 32 comentários | [Issue #3288](https://github.com/agentscope-ai/QwenPaw/issues/3288) |
| **#3356** — WORKING_DIR aponta para .copaw após upgrade | bug | 11 comentários | [Issue #3356](https://github.com/agentscope-ai/QwenPaw/issues/3356) |
| **#2301** — Sugestões de atualização, /approve button, auto-switch | enhancement | 9 comentários | [Issue #2301](https://github.com/agentscope-ai/QwenPaw/issues/2301) |

### Análise dos Temas

**Migração CoPaw → QwenPaw (Crítico):** A rename/rebrand de CoPaw para QwenPaw gerou ondas de confusão. Issues reportam:
- Comandos `qwenpaw` não encontrados após update
- Dados (agent, skills, workspace) permanecem em `.copaw/` enquanto binários vão para `.qwenpaw/`
- Ambas aplicações coexistem causando confusão

**Demandas Recorrentes:**
1. **One-click update** — Atualização automática via botão na interface
2. **Botões Approve/Cancel** — Em vez de digitar `/approve`
3. **Auto-switch de modelos** — Fallback automático quando modelo falha
4. **Autoself-improvement** — Memória persistente que evolui com uso
5. **Sincronização cross-device** — Browser ↔ WeChat/QQ

---

## 5. Bugs e Estabilidade

### Bugs Abertos (Por Severidade)

| Severidade | Título | Link |
|------------|--------|------|
| **🔴 Alta** | WORKING_DIR aponta para .copaw após upgrade (Windows) | [Issue #3356](https://github.com/agentscope-ai/QwenPaw/issues/3356) |
| **🔴 Alta** | Mac: 安装包 1.1.0 quebra ambas versões (nova e antiga) | [Issue #3312](https://github.com/agentscope-ai/QwenPaw/issues/3312) |
| **🔴 Alta** | Windows Desktop: tela branca e freeze após instalação | [Issue #3322](https://github.com/agentscope-ai/QwenPaw/issues/3322) |
| **🟠 Média** | Feishu WebSocket crash com RuntimeError em multi-agent | [Issue #3331](https://github.com/agentscope-ai/QwenPaw/issues/3331) |
| **🟠 Média** | Session state JSON corruption (race condition) | [Issue #3277](https://github.com/agentscope-ai/QwenPaw/issues/3277) |
| **🟠 Média** | WeChat: mensagens truncadas após output de tool | [Issue #3369](https://github.com/agentscope-ai/QwenPaw/issues/3369) |
| **🟠 Média** | view_image via Feishu: LLM não vê pixels, só filename | [Issue #2873](https://github.com/agentscope-ai/QwenPaw/issues/2873) |
| **🟡 Baixa** | Token usage list ordenado ascendente (scroll até fundo) | [Issue #3368](https://github.com/agentscope-ai/QwenPaw/issues/3368) |

### Bugs Fechados Hoje

| Bug | Solução | Link |
|-----|---------|------|
| Scheduled task 422 error | Fix de validação frontend/backend | [PR #3379](https://github.com/agentscope-ai/QwenPaw/pull/3379) |
| Cancel race condition | Tratamento adequado de CancelledError | [PR #2987](https://github.com/agentscope-ai/QwenPaw/pull/2987) |
| Ollama provider connection test | Fix no teste de conexão | [PR #3391](https://github.com/agentscope-ai/QwenPaw/pull/3391) |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Propostas

| Feature | Descrição | Impacto | Link |
|---------|-----------|---------|------|
| **Mission Mode** | Agente autônomo iterativo para tarefas longas e complexas | Alto | [PR #3364](https://github.com/agentscope-ai/QwenPaw/pull/3364) |
| **Agent Statistics Page** | Dashboard com métricas de uso, tendências e breakdown por canal | Alto | [PR #3365](https://github.com/agentscope-ai/QwenPaw/pull/3365) |
| **File Operation Rollback** | Recovery de arquivos deletados acidentalmente | Médio | [Issue #2590](https://github.com/agentscope-ai/QwenPaw/issues/2590) |
| **Skill Classification** | Organização de skills em pastas/categorias | Médio | [Issue #2961](https://github.com/agentscope-ai/QwenPaw/issues/2961) |
| **Support viewing images/videos online** | view_image/view_video com URLs em vez de apenas arquivos locais | Médio | [PR #3329](https://github.com/agentscope-ai/QwenPaw/pull/3329) |
| **Agent CLI & Local Agent Template** | CLI para criação e gerenciamento de agentes | Médio | [PR #3385](https://github.com/agentscope-ai/QwenPaw/pull/3385) |

### Insights de Roadmap

1. **Experiência de Migração** é claramente uma prioridade operacional — a confusão entre CoPaw/QwenPaw afeta many users
2. **Multi-agent Collaboration** está amadurecendo (#3292 merged)
3. **Observabilidade** em desenvolvimento (Statistics page)
4. **Autonomia** sendo explorada (Mission Mode inspirado em Anthropic)

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais

| Dor | Severidade | Evidência |
|-----|------------|-----------|
| **Migração confusa** | 🔴 Alta | 30+ issues/questions sobre upgrade; dados não migram automaticamente | 
| **Windows installer warning** | 🟠 Média | Alert de segurança não-sinalizado; sugestões de code signing | [Issue #3314](https://github.com/agentscope-ai/QwenPaw/issues/3314) |
| **Performance de UI** | 🟠 Média | Delay de 3-5 segundos ao abrir; lentidão em conversas 200+ rodadas | [Issue #3352](https://github.com/agentscope-ai/QwenPaw/issues/3352), [Issue #3350](https://github.com/agentscope-ai/QwenPaw/issues/3350) |
| **Skill management desorganizado** | 🟡 Baixa | Tags não reutilizáveis; skills não isoladas por agente | [Issue #2657](https://github.com/agentscope-ai/QwenPaw/issues/2657) |

### Cenários de Uso Reportados

1. **Desenvolvimento de projetos grandes** — Usuários mantendo 200+ rodadas de conversa para manter contexto multi-agente
2. **Integração empresarial** — Feishu bots em ambiente multi-agente com diferentes app_id
3. **Ambientes air-gapped** — Necessidade de operação offline/LAN sem CDNs externos

### Satisfação

- **Positivo:** Nova Statistics page (#3365) e Mission Mode (#3364) geram entusiasmo
- **Positivo:** Performance de startup (#3386) foi recebida como melhoria significativa
- **Negativo:** Problemas de instalação no Mac/Windows criam frustração inicial

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Atendidas há >7 dias

| Issue | Idade | Prioridade | Situação | Link |
|-------|-------|------------|----------|------|
| Support file operation rollback | 16 dias | P1 | Em discussão | [Issue #2590](https://github.com/agentscope-ai/QwenPaw/issues/2590) |
| Skill classification function | 10 dias | P2 | Aberta | [Issue #2961](https://github.com/agentscope-ai/QwenPaw/issues/2961) |
| execute_shell_command - comando não existe (Ubuntu) | 5 dias | P1 | Aberta | [Issue #3183](https://github.com/agentscope-ai/QwenPaw/issues/3183) |
| Ollama model ID não suporta (sem /model endpoint) | 1 dia | P2 | Aberta | [Issue #3377](https://github.com/agentscope-ai/QwenPaw/issues/3377) |

### PRs Aguardando Review

| PR | Aguardando Desde | Link |
|----|------------------|------|
| #3347 — Recursive file watcher configurável | 2 dias | [PR #3347](https://github.com/agentscope-ai/QwenPaw/pull/3347) |
| #3388 — Bundle icons localmente (offline support) | 1 dia | [PR #3388](https://github.com/agentscope-ai/QwenPaw/pull/3388) |
| #2177 — Default memory summarization cron job | 22 dias | [PR #2177](https://github.com/agentscope-ai/QwenPaw/pull/2177) |

---

## Métricas Resumidas do Dia

| Métrica | Valor |
|---------|-------|
| Issues abertas/ativas | 34 |
| Issues fechadas | 14 |
| PRs abertos | 23 |
| PRs merged/fechados | 22 |
| Novas releases | 2 |
| Issue com mais comentários | #2291 (56) |
| PRs de performance merged | 2 (#3386 startup, #2996 auto-build) |

**Saúde Geral:** 🟢 **Bom** — Atividade alta com melhorias significativas de performance. **Atenção necessária** para problemas de migração CoPaw→QwenPaw e bugs de instalação em plataformas desktop.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-04-15

---

## 1. Panorama do Dia

O projeto ZeroClaw apresenta **alta atividade** nas últimas 24 horas, com 50 issues e 50 PRs atualizados. A atividade concentra-se em correções de estabilidade (destaque para bugs S0/S1 relacionados a configuração de email, OOM em WSL2, e caminhos de config) e em melhorias de usabilidade como suporte a voice messages no Telegram, melhorias no OpenRouter provider, e refatorações de observabilidade. **Nenhuma release foi publicada** no período. O volume de issues abertas (47) versus fechadas (3) sugere um acúmulo de demandas em aberto que requer triagem. A comunidade demonstra interesse ativo em features de provider routing, streaming, e tooling de agentes.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24 horas.**

O projeto encontra-se em desenvolvimento ativo com mudanças significativas mergeadas no PR #5517 (config schema versioning V1→V2), que deve alimentar uma próxima release. Recomenda-se monitorar o repositório para announcements de versão.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados Recentes

| PR | Descrição | Impacto |
|----|-----------|---------|
| **[#5517](https://github.com/zeroclaw-labs/zeroclaw/pull/5517)** | `feat(config)`: Forward-only schema versioning com migração V1→V2 | **Alto** — Consolida campos ambiguos em `[providers.models.<name>]`, remove `channels.matrix.room_id` em favor de `allowed_rooms`, preserva comentários TOML |
| **[#5660](https://github.com/zeroclaw-labs/zeroclaw/pull/5660)** | `feat(ci)`: Builds musl/Alpine Linux para release workflows | **Médio** — Adiciona `x86_64-unknown-linux-musl` e `aarch64-unknown-linux-musl`, melhora compatibilidade com sistemas embarcados e containers leves |

### PRs Abertos com Alto Impacto

| PR | Descrição | Status |
|----|-----------|--------|
| **[#5168](https://github.com/zeroclaw-labs/zeroclaw/pull/5168)** | `feat(agent)`: HMAC tool execution receipts para detecção de alucinações | **Alto** — Proposta de segurança para agentes autônomos |
| **[#5735](https://github.com/zeroclaw-labs/zeroclaw/pull/5735)** | `feat(features)`: Decoupling gateway e tui-onboarding de agent-runtime | **Alto** — Reduz tempo de compilação e permite compilar canais sem HTTP/WS server |
| **[#5738](https://github.com/zeroclaw-labs/zeroclaw/pull/5738)** | `feat(tools)`: Adiciona `model_spawn` tool — switch de modelo em tempo real | **Alto** — Nova capacidade para sessões efêmeras paralelas |
| **[#5623](https://github.com/zeroclaw-labs/zeroclaw/pull/5623)** | `feat(openrouter)`: extra_body passthrough para parâmetros genéricos | **Médio** — Supera abordagem anterior de #5621, fecha #5619 |
| **[#5744](https://github.com/zeroclaw-labs/zeroclaw/pull/5744)** | `fix(observability)`: Hierarquia parent-child span e atributos de token em OTEL | **Médio** — Corrige traces inúteis em backends OTEL |
| **[#5737](https://github.com/zeroclaw-labs/zeroclaw/pull/5737)** | `fix(security)`: runtime.kind=native não auto-seleciona Docker sandbox | **Médio** — Corrige regressão de segurança/contêiner |
| **[#5733](https://github.com/zeroclaw-labs/zeroclaw/pull/5733)** | `feat(web)`: Model quick-switcher e WebSocket persistente | **Médio** — Melhora UX do chat web |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (Comentários/Reações)

| Issue | Título | Comentários | 👍 | Tipo | Análise |
|-------|--------|-------------|----|------|---------|
| **[#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866)** | Web dashboard not available | 11 | 0 | Bug (S1) | Reclamação recorrente — dashboard requer build manual via `cd web && npm ci && npm run build`. Impacta workflow diretamente. |
| **[#4710](https://github.com/zeroclaw-labs/zeroclaw/issues/4710)** | Better LOGO of Zeroclaw | 6 | 1 | Enhancement | Demanda de rebranding/design mais profissional. Sinais de identidade de projeto. |
| **[#5584](https://github.com/zeroclaw-labs/zeroclaw/issues/5584)** | Duplicate consecutive assistant messages | 5 | 0 | Bug (S2) | Quando modelo retorna narração + tool_calls, mensagens duplicam. Afeta experiência conversacional. |
| **[#5509](https://github.com/zeroclaw-labs/zeroclaw/issues/5509)** | Voice message transcription (Telegram) | 5 | 0 | Feature | Feature parity com OpenClaw (TypeScript). Demanda por acessibilidade em canais de voz. |
| **[#5459](https://github.com/zeroclaw-labs/zeroclaw/issues/5459)** | Ollama provider tool_count=0 | 3 | **3** | Bug (S1) | **Alta prioridade** — hardcoded `tool_count=0` quebra tool calling para todos os modelos Ollama. |

### Análise de Demandas

**Providers e Tool Calling:** Multiple issues apontam para problemas com providers (Ollama #5459, kimi-code #5600, Groq #5670, llama.cpp #5578). A comunidade demanda melhor suporte a tool calling nativo e routing de providers.

**UX/Web Interface:** Issues como #4866 (dashboard indisponível), #5634 (session persistence), #5649 (clipboard/drag-drop), e #5724 (fix de tema) indicam necessidade de investimento na experiência web.

**Canais:** Destaque para Telegram (voice #5509, encryption #5654), Feishu (ack_reactions #5558, mention_only #5672), e Matrix (encrypted media #5727).

---

## 5. Bugs e Estabilidade

### Por Severidade

#### S0 — Data Loss / Security Risk (Crítico)

| Issue | Título | Atualizado | Canal |
|-------|--------|------------|-------|
| **[#5528](https://github.com/zeroclaw-labs/zeroclaw/issues/5528)** | Improper logic of email channel config | 2026-04-14 | Email |
| **[#5542](https://github.com/zeroclaw-labs/zeroclaw/issues/5542)** | Consecutive OOM in WSL2 | 2026-04-14 | Runtime |
| **[#5605](https://github.com/zeroclaw-labs/zeroclaw/issues/5605)** | Default Configuration Path Issues (Multi-Instance) | 2026-04-14 | Config |
| **[#5672](https://github.com/zeroclaw-labs/zeroclaw/issues/5672)** | Feishu responds even when mention_only enabled | 2026-04-14 | Feishu |

**Recomendação:** Issues S0 exigem atenção imediata da equipe de manutenção.

#### S1 — Workflow Blocked

| Issue | Título | Atualizado |
|-------|--------|------------|
| **[#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866)** | Web dashboard not available | 2026-04-14 |
| **[#5459](https://github.com/zeroclaw-labs/zeroclaw/issues/5459)** | Ollama tool_count=0 | 2026-04-14 |
| **[#5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600)** | kimi-code provider error | 2026-04-14 |
| **[#5578](https://github.com/zeroclaw-labs/zeroclaw/issues/5578)** | Zeroclaw doesn't talk to local llama.cpp server | 2026-04-14 |
| **[#5654](https://github.com/zeroclaw-labs/zeroclaw/issues/5654)** | Telegram encryption not working | 2026-04-14 |

#### S2 — Degraded Behavior

| Issue | Título |
|-------|--------|
| **[#5584](https://github.com/zeroclaw-labs/zeroclaw/issues/5584)** | Duplicate consecutive assistant messages |
| **[#5670](https://github.com/zeroclaw-labs/zeroclaw/issues/5670)** | Groq provider 400 error |
| **[#5634](https://github.com/zeroclaw-labs/zeroclaw/issues/5634)** | Session persistence not working |
| **[#5629](https://github.com/zeroclaw-labs/zeroclaw/issues/5629)** | api_key falsely warned as unknown config key |

#### S3 — Minor/Cosmetic

| Issue | Título |
|-------|--------|
| **[#5556](https://github.com/zeroclaw-labs/zeroclaw/issues/5556)** | Summarization timed out (60s limit) |
| **[#4862](https://github.com/zeroclaw-labs/zeroclaw/issues/4862)** | apps/tauri/gen/schemas/ not gitignored |

### Análise de Estabilidade

**Padrões identificados:**
- **Providers:** 4+ issues afetando conectividade e tool calling (Ollama, Groq, kimi-code, llama.cpp)
- **Canais:** 3+ issues em Feishu e Telegram (mention_only, ack_reactions, encryption)
- **Config:** Problemas de path hardcoded e schema warnings (v0.6.9)
- **Performance:** OOM em WSL2 (#5542) e compilação lenta (#5575)

**Saúde Geral:** 4 S0 + 5 S1 = 9 issues críticas/abertas, indicando necessidade de release corretiva.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| Issue | Título | Sinais de Roadmap |
|-------|--------|-------------------|
| **[#5509](https://github.com/zeroclaw-labs/zeroclaw/issues/5509)** | Voice message transcription (Telegram) | Paridade com OpenClaw, acessibilidade |
| **[#5649](https://github.com/zeroclaw-labs/zeroclaw/issues/5649)** | Clipboard paste & drag-and-drop image support | UX web chat, multimodal |
| **[#5502](https://github.com/zeroclaw-labs/zeroclaw/issues/5502)** | Add allowed_tools configuration option | Flexibilidade de configuração |
| **[#5501](https://github.com/zeroclaw-labs/zeroclaw/issues/5501)** | Trigger cron manually | DX/testing de cron jobs |
| **[#5619](https://github.com/zeroclaw-labs/zeroclaw/issues/5619)** | Native OpenRouter provider routing | Suporte a provider routing avançado |
| **[#5730](https://github.com/zeroclaw-labs/zeroclaw/pull/5730)** | Manifest Router provider (PR aberto) | Expansão de providers compatíveis |
| **[#5742](https://github.com/zeroclaw-labs/zeroclaw/pull/5742)** | Add MiniMax-AI/cli as default skill tap | Integração com ecossistema de skills |

### Temas Estratégicos

1. **Multimodalidade:** Voice messages (#5509), imagens via clipboard (#5649)
2. **Provider Routing:** OpenRouter extra_body (#5623, #5619), Manifest Router (#5730)
3. **Compilação/Performance:** Crate split (#5447), compilação lenta (#5575), ANN index para SQLite (#5570)
4. **Segurança:** HMAC tool receipts (#5168), runtime.kind=native sandbox (#5737)
5. **Plugin System:** WIT interface files (#5586) para Tool/Channel contracts

### Backlog de Refatoração

| Issue | Título | Objetivo |
|-------|--------|----------|
| **[#5586](https://github.com/zeroclaw-labs/zeroclaw/issues/5586)** | WIT interface files para plugin contracts | Arquitetura microkernel Phase 1 D4 |
| **[#5656](https://github.com/zeroclaw-labs/zeroclaw/issues/5656)** | Move wizard UI to zeroclaw_hardware::wizard | Separação de responsabilidades |
| **[#5447](https://github.com/zeroclaw-labs/zeroclaw/issues/5447)** | Crate split | Redução de tempo de compilação |
| **[#5735](https://github.com/zeroclaw-labs/zeroclaw/pull/5735)** | Decouple gateway/tui from agent-runtime | Modularidade (PR aberto) |

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

**1. Experiência de Setup/Onboarding (S1-S2)**
- [WSL2 OOM (#5542)](https://github.com/zeroclaw-labs/zeroclaw/issues/5542): Usuários enfrentam crashes de memória em ambientes Windows/WSL2
- [Config path hardcoded (#5605)](https://github.com/zeroclaw-labs/zeroclaw/issues/5605): Multi-instance deployments falham por caminhos fixos em `~/.zeroclaw/`
- [Container URLs (#5552)](https://github.com/zeroclaw-labs/zeroclaw/pull/5552): Onboarding Docker sugere `localhost` para providers locais (corrigido em PR)

**2. Provider Instabilidade (S1)**
- [Ollama tool calling (#5459)](https://github.com/zeroclaw-labs/zeroclaw/issues/5459): "completely breaks tool calling for all Ollama-hosted models"
- [llama.cpp connectivity (#5578)](https://github.com/zeroclaw-labs/zeroclaw/issues/5578): "After SEVERAL MINUTES it completes" — latency inaceitável
- [Groq API errors (#5670)](https://github.com/zeroclaw-labs/zeroclaw/issues/5670): Regressão similar a

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*