# Resumo diário do ecossistema de agentes de IA 2026-06-15

> Issues: 0 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-06-14 21:05 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

Sem atividade nas últimas 24 horas.

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo — Ecossistema Open Source de Agentes de IA

**Data de referência:** 2026-06-15
**Projetos analisados:** NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw, ZeroClaw

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source demonstra **vitalidade assimétrica** em 15 de junho de 2026. Quatro projetos (IronClaw, Hermes Agent, ZeroClaw, NanoBot) mantêm volumes de atividade elevados com 30-50 artefatos atualizados por dia, enquanto CoPaw apresenta atividade moderada e NullClaw permanece inativo. A convergência técnica mais marcante é a **multiplicação de canais de comunicação** (Telegram, Matrix, Discord, Slack, WhatsApp, SMS gateways) e a **expansão de providers de IA** (GLM-5.2, K2.7 Code, Kimi, Gemini, Arcee AI). O tema de segurança emerge como divisor crítico: IronClaw enfrenta 6 vulnerabilidades simultâneas de bypass de shell approval, enquanto Hermes Agent lida com redações de credenciais que vazam no histórico do modelo. Em termos de maturidade, o ecossistema fragmenta-se entre projetos em **fase de consolidação arquitetural** (ZeroClaw com RFCs, IronClaw com Reborn WebUI v2) e projetos em **fase de estabilidade** (PicoClaw com foco em bugfixes, NanoBot com validação robusta).

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | Releases (24h) | Taxa Fechamento | Avaliação Saúde |
|---------|-------------|-----------|---------------|-----------------|-----------------|
| **IronClaw** | 31 | 44 | 0 | ~40% | 🟠 Sob pressão — 6 CVEs abertas |
| **Hermes Agent** | 50 | 50 | 0 | ~38% | 🟢 Sadio, mas backlog volumoso |
| **ZeroClaw** | 32 | 50 | 0 | ~56% (issues) | 🟢 Progresso consistente |
| **NanoBot** | 4 | 33 | 0 | 48% | 🟢 Atividade excepcional |
| **PicoClaw** | 4 | 8 | 1 nightly | 62.5% | 🟢 Eficiente, mas 3 issues stale |
| **CoPaw** | 8 | 6 | 0 | ~12.5% | 🔴 Backlog crescente, bugs críticos |
| **NullClaw** | 0 | 0 | 0 | N/A | ⚫ Inativo |

**Destaque quantitativo:** ZeroClaw apresenta a maior taxa de fechamento de issues (56%) среди projects activos, indicando disciplina de triagem. CoPaw é o projeto com menor saúde aparente: volume de issues abertas supera fechadas em 7:1, com bugs críticos (#5172 — chat freeze) sem resposta há 48+ horas.

---

## 3. Posicionamento do Projeto Principal

### ZeroClaw — Líder em Superfície de Integração

**Vantagens competitivas:**

| Dimensão | Vantagem | Evidência |
|----------|---------|-----------|
| **Extensibilidade** | Maior diversidade de integrações | 14 integrações fechadas em 24h (SMS gateways, smart home, novos providers) |
| **Arquitetura** | RFC-driven development | 3 RFCs ativas (#6808, #7415, #6970) com governança explícita |
| **Diversidade de canais** | 10+ canais documentados | Discord, WhatsApp, Telegram, QQ, SMS (Vonage/Sinch/Plivo/Telnyx), Email |
| **Multi-agent** | Delegação cross-profile | PR #7590 resolve limitação de agents com profiles de risco distintos |

**Diferenças técnicas:**
- Arquitetura baseada em `SopEngine` unificado (PR #7546) elimina estado duplicado entre agent tools e listener MQTT
- RFC-6969 implementa roteamento de saída por turno (`send_via`), permitindo decisões dinâmicas de delivery
- Spec de instalação canônica via `cargo generate` (#7558) reduz drift entre superfícies

**Tamanho da comunidade:** High-output contributor (`theonlyhennygod`) demonstrou capacidade de fechar 14+ issues de integração em um único dia — indica equipe dedicada ou contribuidor prolific.

---

## 4. Focos Técnicos Compartilhados

### 4.1 Validação e Sanitização de Entrada

Todos os projetos com atividade significativa investem em validação defensiva:

| Projeto | Foco de Validação | PR/Issue |
|---------|------------------|----------|
| **NanoBot** | Parâmetros, mídia, argv, paginação | #4138, #4311, #4331, #4336 |
| **Hermes Agent** | Integração de novos modelos (GLM-5.2 context window) | #45695 |
| **PicoClaw** | Erros silenciosos em TTS e file I/O | #3122, #3124 |
| **IronClaw** | Shell approval bypass — **crítico** | #4861-#4865 |
| **ZeroClaw** | Alias de providers aninhados | #7577 |

**Conclusão:** A validação de entrada é preocupação universal, mas IronClaw destaca-se pela criticidade — 6 vulnerabilidades de bypass de aprovação indicam que a risk classification atual é insuficiente para comandos shell complexos.

### 4.2 Suporte Multimodal e Imagens

Três projetos avançam simultaneamente em capacidades visuais:

| Projeto | Feature | Status |
|---------|---------|--------|
| **IronClaw** | Universal attachments para vision-capable models | PR #4871 — iminente |
| **Hermes Agent** | `inject_image` tool seguro por provider | PR #41632 — merged |
| **ZeroClaw** | Voice delivery + per-turn routing | PR #7361 — em progresso |

### 4.3 Internacionalização (i18n)

| Projeto | Esforço | Evidência |
|---------|---------|-----------|
| **CoPaw** | Vietnamita completo (40 seções) | PR #5186, #5175 |
| **ZeroClaw** | zh-CN locale lag | Issue #6698 — 0 comentários |
| **NanoBot** | Copy localization para update check | PR #4331 |

---

## 5. Análise de Diferenciação

### 5.1 Arquitetura e Paradigma

| Projeto | Paradigma Arquitetural | Escolhas Técnicas |
|---------|----------------------|------------------|
| **ZeroClaw** | RFC-driven, daemon centralizado | SopEngine unificado, RPC Unix socket, profiles de risco |
| **IronClaw** | Modular com safety layer | ironclaw_safety crate separado, approval boundaries, Reborn como UI v2 |
| **Hermes Agent** | Provider-agnostic com gateway | Fast-mode routing, display options, memory-context como background |
| **NanoBot** | Lightweight, config-driven | tool_configs isolado, AgentLoop coordinators, toggle de filesystem |
| **PicoClaw** | Plugin-oriented | RegisterChannelSettings hook, WebSocket remote mode |
| **CoPaw** | Channel-first | Console-centric, cron/heartbeat autônomo |

### 5.2 Público-Alvo Inferido

| Projeto | Público Primário | Evidência de Uso |
|---------|-----------------|------------------|
| **ZeroClaw** | power users, automação doméstica | Smart home (Sonos, Hue, 8Sleep), SMS gateways |
| **IronClaw** | Empresas, multi-tenant | Slack integration, reborning, security-first |
| **Hermes Agent** | Desenvolvedores, pesquisadores | Suporte a modelos cutting-edge (GLM-5.2, K2.7 Code) |
| **NanoBot** | Usuários avançados | Toggle de tools, WebUI mobile, Matrix |
| **PicoClaw** | Self-hosted, minimalistas | Local deployment, WebSocket remote, MCP servers |
| **CoPaw** | Comunidades asiáticas | DingTalk, QQ, WeChat, vietnamita |

### 5.3 Postura de Segurança

| Projeto | Postura | Evidência |
|---------|---------|-----------|
| **IronClaw** | Security-first em crise | 6 CVEs abertas simultâneas — pressão emergencial |
| **Hermes Agent** | Security-conscious | Issue #43083 (password redaction bypass) — P1 |
| **ZeroClaw** | Security via validation | extra_args allowlist (#5842) em progresso |
| **NanoBot** | Defensive by default | Toggle de filesystem tools, rejeição de payloads malformed |

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração

| Categoria | Projetos | Indicador |
|-----------|----------|-----------|
| **Iteração rápida (30+ artefatos/dia)** | IronClaw, Hermes Agent, ZeroClaw | Pipeline robusto, múltiplos contribuidores |
| **Iteração moderada (8-15 artefatos/dia)** | NanoBot, PicoClaw | Foco em qualidade, taxas de fechamento altas |
| **Iteração estagnada** | CoPaw | 7 issues abertas : 1 fechada nas últimas 24h |
| **Inativo** | NullClaw | Sem atividade |

### 6.2 Consolidação vs. Expansão

| Projeto | Fase | Sinais |
|---------|------|--------|
| **IronClaw** | Consolidação de segurança + polish | 6 security fixes + Reborn UX refinamento |
| **ZeroClaw** | Expansão controlada | 14 integrações fechadas + RFCs arquiteturais |
| **NanoBot** | Estabilização | 48% PRs fechados, validação robusta, nenhum release — consolidação |
| **PicoClaw** | Estabilização + extensibilidade | Bugfixes + plugin hooks (#3120) |
| **CoPaw** | Correção de regressões | v1.1.11.post2 com 2+ bugs — necessidade de hotfix |
| **Hermes Agent** | Expansão de providers | GLM-5.2, K2.7 Code, vision tools |

### 6.3 Engajamento de Contribuidores

| Projeto | Dinâmica | Observação |
|---------|----------|------------|
| **CoPaw** | First-time contributors | 5 de 6 PRs de estreantes — sinal positivo de onboarding |
| **ZeroClaw** | Core contributor ativo | `theonlyhennygod` fechou 14 issues em 24h |
| **IronClaw** | Equipe dedicada | 44 PRs atualizados indica time estruturado |
| **NanoBot** | Contributor único? | Todas as PRs hot são do mesmo autor (chengyongru) — risco de concentração |

---

## 7. Sinais de Tendência

### 7.1 Tendências de Mercado Extraídas

**1. Fragmentação de Providers de IA**
*Evidência:* ZeroClaw adiciona Arcee AI, Inception Labs Mercury, Lambda AI, Featherless AI, Upstage Solar. Hermes Agent suporta GLM-5.2 e K2.7 Code. NanoBot integra Kimi e MiniMax.
*Interpretação:* O mercado caminha para um **hub de providers** onde agentes são agnósticos de modelo. A diferenciação virá de UX, price intelligence e fallback strategies.

**2. Multi-Agent como Padrão de Fato**
*Evidência:* NanoBot (#4291) permite subagentes com presets distintos. ZeroClaw (#7590) implementa delegação cross-profile. Hermes Agent memory-context como background.
*Interpretação:* Arquiteturas de agente único estão evoluindo para **orquestradores + especialistas**. Demanda por controle granular de permissões, profiles de risco e contexto compartilhado.

**3. Shell como Superfície de Ataque Crítica**
*Evidência:* IronClaw com 6 CVEs de bypass de approval. Hermes Agent com password redaction failure. NanoBot com filesystem tool toggle.
*Interpretação:* Shell tools são o **vetor de maior risco** em agentes de IA com capacidades de execução. Expectativa de que o ecossistema desenvolva padrões de sandboxing e approval UX.

**4. Extensibilidade como Diferencial Competitivo**
*Evidência:* PicoClaw (#3120) expõe RegisterChannelSettings hook. ZeroClaw fecha 14 integrações de canais/providers em um dia. IronClaw move Slack para extensão.
*Interpretação:* Projetos que permitirem **ecossistema de plugins** sem fork terão vantagem em adoção. O modelo é WordPress/CMS, não app monolítico.

**5. WebUI como tabela de rasa de maturidade**
*Evidência:* IronClaw investe em Reborn WebUI v2 (polish, acessibilidade, mobile). NanoBot corrige mobile responsiveness. PicoClaw tem issues de Safari iOS.
*Interpretação:* A **experiência da interface web** é o primeiro indicador de maturidade que usuários finais avaliam. Mobile-first e acessibilidade emergem como requisitos.

**6. i18n como vetor de expansão geográfica**
*Evidência:* CoPaw com vietnamita completo. NanoBot com localization de copy. ZeroClaw com zh-CN lag.
*Interpretação:* Mercados asiáticos (China, Vietnã, Japão, Coreia) representam **base de usuários subexplorada** pelos projetos ocidentais. Demanda por i18n é proxy de oportunidade de crescimento.

---

## Síntese Executiva

| Dimensão | Líder | Seguidor | Laggard |
|----------|-------|----------|---------|
| **Volume de atividade** | IronClaw + ZeroClaw | NanoBot | NullClaw |
| **Qualidade de código** | PicoClaw | NanoBot | CoPaw (regressões) |
| **Segurança** | NanoBot (proativo) | Hermes Agent | IronClaw (reativo) |
| **Extensibilidade** | ZeroClaw | PicoClaw | CoPaw |
| **Comunidade** | ZeroClaw | Hermes Agent | NullClaw |

**Recomendação estratégica:** Para decisões de integração ou adoção, ZeroClaw representa a maior superfície de funcionalidades com governança RFC-driven. Para deployments que priorizam estabilidade over features, PicoClaw demonstra disciplina de bugfix e taxas de fechamento saudáveis. Para casos de uso que requerem cutting-edge model support, Hermes Agent oferece velocidade de integração superior. IronClaw, apesar das vulnerabilidades abertas, está em trajetória de correção e representa investimento de longo prazo em security-first.

---

*Relatório gerado com base em dados públicos do GitHub — 2026-06-15*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>


# Relatório do Projeto NanoBot — 2026-06-15

## 1. Panorama do Dia

O projeto NanoBot demonstra **atividade excepcional** nas últimas 24 horas, com 33 PRs atualizados e 4 issues processadas. A comunidade está focada em **fortalecer a robustez do sistema**: múltiplas correções de validação de parâmetros, melhorias na WebUI mobile e expansão de integrações (Matrix protocol). Nenhum release foi publicado, indicando que as mudanças estão em fase de consolidação. A taxa de PRs fechados (16 de 33) sugere um ciclo de review saudável, embora o alto volume de PRs abertos (17) sinalize um pipeline de desenvolvimento intenso.

---

## 2. Lançamentos

**Nenhum release publicado nas últimas 24h.**

O projeto não publicou novas versões neste período. O último ciclo de releases permanece vigente, aguardando consolidação das correções pendentes.

---

## 3. Progresso do Projeto

### PRs Merged/Closed Hoje (16 total)

| PR | Título | Impacto |
|----|--------|---------|
| [#1056](https://github.com/HKUDS/nanobot/pull/1056) | **feat: add Matrix protocol channel integration** | ⭐ Maior destaque — suporte completo a Matrix (DM e rooms) com autenticação por access token |
| [#4138](https://github.com/HKUDS/nanobot/pull/4138) | Add `tools.file.enable` para toggle de filesystem tools | Permite desabilitar ferramentas de arquivo via config |
| [#4339](https://github.com/HKUDS/nanobot/pull/4339) | Improve WebUI mobile responsiveness | UX mobile significativamente aprimorada |
| [#4340](https://github.com/HKUDS/nanobot/pull/4340) | Preserve fenced code blocks when splitting messages | Corrige rendering de código em splits longos |
| [#4312](https://github.com/HKUDS/nanobot/pull/4312) | Reject malformed media attachments | Validação robusta de payloads de mídia |
| [#4311](https://github.com/HKUDS/nanobot/pull/4311) | Reject non-positive file pagination limits | Previne erros em paginação de arquivos |
| [#4336](https://github.com/HKUDS/nanobot/pull/4336) | Reject malformed argv payloads | Validação de argumentos CLI |
| [#4011](https://github.com/HKUDS/nanobot/pull/4011) | Drop orphan tool results from session history | Limpeza de histórico de sessão |
| [#4341](https://github.com/HKUDS/nanobot/pull/4341) | Add themed cover image | Atualização visual do README |
| [#4331](https://github.com/HKUDS/nanobot/pull/4331) | Localize update check copy | Suporte i18n para mensagens de atualização |
| [#4338](https://github.com/HKUDS/nanobot/pull/4338) | Link Kimi partner banner | Links de parceiros atualizados |
| [#4295](https://github.com/HKUDS/nanobot/pull/4295) | Add Kimi and MiniMax partner links | Integração com parceiros |

---

## 4. Temas Quentes da Comunidade

### PRs com Maior Atividade/Aprovação

1. **#4344** [OPEN] — *Refactor config and agent loop boundaries* (chengyongru)
   - Reorganização arquitetural: move tool configs para `nanobot.config.tool_configs`, extrai AgentLoop coordinators
   - **Sinais**: Demanda por melhor separação de responsabilidades e manutenibilidade

2. **#4330** [OPEN] — *Add automation management view* (chengyongru)
   - Nova superfície WebUI para gerenciar automações (listar, filtrar, pausar, deletar)
   - **Sinais**: Usuários querem interface visual para automações, não apenas CLI

3. **#4291** [OPEN] — *feat(spawn): allow subagents to use configurable model presets* (aiguozhi123456)
   - Subagentes podem usar presets de modelo diferentes do agente pai
   - **Sinais**: Casos de uso complexos requerem controle granular de modelos por subagente

4. **#4309** [OPEN] — *Bug: /v1/chat/completions always returns zero usage tokens*
   - Issue ativa com 1 comentário, aguardando resposta
   - **Sinais**: Integração OpenAI-compatível com problemas de telemetria

---

## 5. Bugs e Estabilidade

### Issue Aberta Crítica

| # | Severidade | Título | Status |
|---|------------|--------|--------|
| [#4309](https://github.com/HKUDS/nanobot/issues/4309) | 🔴 **Alta** | `/v1/chat/completions` sempre retorna `usage: 0` | **OPEN** |

**Detalhe**: O endpoint `/v1/chat/completions` retorna tokens zerados mesmo quando o loop do agente rastreia uso real. Afeta integração com sistemas de billing/monitoring.

### Bugs Corrigidos Hoje

| # | Severidade | Título | Resolução |
|---|------------|--------|-----------|
| [#4250](https://github.com/HKUDS/nanobot/issues/4250) | 🟡 Média | `split_message` quebra fenced code blocks no Telegram | PR [#4340](https://github.com/HKUDS/nanobot/pull/4340) |
| [#4333](https://github.com/HKUDS/nanobot/issues/4333) | 🟡 Média | `claude-opus-4-8` recebe `temperature` deprecated (400 error) | Corrigido internamente |
| [#4342](https://github.com/HKUDS/nanobot/pull/4342) | 🟡 Média | Feishu WebSocket cards não renderizam | PR aberto para correção |

### Correções de Estabilidade Merged

- Validação de payloads: mídia, argv, parâmetros de arquivo
- Rejeição de orphan tool results em sessões persistidas
- Ignorar payloads vazios em injeção de mensagens

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Abertas em Progresso

| # | Título | Sinais de Prioridade |
|---|--------|---------------------|
| [#4330](https://github.com/HKUDS/nanobot/pull/4330) | Automation management view no WebUI | Alta demanda por UI de automações |
| [#4291](https://github.com/HKUDS/nanobot/pull/4291) | Subagents com presets de modelo configuráveis | Casos de uso multi-modelo |
| [#4324](https://github.com/HKUDS/nanobot/pull/4324) | Resolver env-var templates em settings (read) | Configuração flexível |
| [#4325](https://github.com/HKUDS/nanobot/pull/4325) | Resolver env-var templates em settings (update) | Idem |

### Novas Demandas Identificadas

1. **Toggle para filesystem tools** (#4138 merged) — Usuários querem desabilitar ferramentas built-in quando usam MCP servers externos
2. **Integração Matrix** (#1056 merged) — Expansão para novo protocolo de comunicação
3. **botIcon no agent mode** (#4262) — Pequena mas importante melhoria de UX

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Categoria | Feedback | Ação Tomada |
|-----------|----------|-------------|
| **Integração OpenAI** | Endpoint `/v1/chat/completions` não report token usage | [#4309](https://github.com/HKUDS/nanobot/issues/4309) aberto |
| **Rendering Telegram** | Mensagens longas quebram código formatado | [#4340](https://github.com/HKUDS/nanobot/pull/4340) merged |
| **Modelos Anthropic** | Opus-4-8 e Fable falham com 400 (deprecated temperature) | Corrigido silenciosamente |
| **WebUI Mobile** | Layout não responsivo em dispositivos móveis | [#4339](https://github.com/HKUDS/nanobot/pull/4339) merged |
| **Configuração** | Templates `${VAR}` não resolvem corretamente | [#4324](https://github.com/HKUDS/nanobot/pull/4324), [#4325](https://github.com/HKUDS/nanobot/pull/4325) |

### Cenários de Uso Emergentes

- **Multi-agente com modelos distintos**: spawn com presets configuráveis
- **MCP-first deployments**: filesystem tools desabilitadas, usando apenas servers remotos
- **Matrix como canal**: nova opção além de Telegram/Discord/Feishu

---

## 8. Backlog que Merece Atenção

### Issues/PRs Sem Resposta há Tempo

| # | Tipo | Título | Idade | Prioridade |
|---|------|--------|-------|------------|
| [#4309](https://github.com/HKUDS/nanobot/issues/4309) | Issue | `/v1/chat/completions` zero usage | 3 dias | 🔴 Alta |
| [#4344](https://github.com/HKUDS/nanobot/pull/4344) | PR | Refactor config and agent loop boundaries | 1 dia | 🟡 Média |
| [#4343](https://github.com/HKUDS/nanobot/pull/4343) | PR | Reject unknown builtin parameters | 1 dia | 🟡 Média |
| [#4337](https://github.com/HKUDS/nanobot/pull/4337) | PR | Ignore empty injected payloads | 1 dia | 🟡 Média |

### Recomendações

1. **#4309** precisa de triagem urgente — afeta integrações de billing
2. **#4344** é refatoração arquitetural crítica — deve ser priorizada no próximo release
3. Considerar revisar **#1056** (Matrix) para merge ou feedback formal

---

## Métricas Resumidas (24h)

| Métrica | Valor | Tendência |
|---------|-------|-----------|
| Issues abertas/ativas | 1 | ↓ (3 fechadas) |
| PRs abertos | 17 | → (estável) |
| PRs merged/closed | 16 | ↑ (alta atividade) |
| Releases | 0 | → (sem mudança) |
| Taxa de fechamento | 48% | ✅ Saudável |

---

*Relatório gerado automaticamente para HKUDS/nanobot em 2026-06-15*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-06-15

## 1. Panorama do Dia

O projeto Hermes Agent manteve um nível de atividade intenso em 14 de junho de 2026, com **50 issues e 50 PRs atualizados** nas últimas 24 horas. A saúde geral é positiva, com **19 PRs merged/fechados** demonstrando bom throughput de código, porém a fila de issues abertas permanece volumosa (44 issues ativas). Duas issues P1/P2 críticas — uma de segurança relacionada a redações de senhas e outra sobre falhas no gateway Matrix após migração de biblioteca — demandam atenção imediata. Não houve lançamentos formais, mas vários PRs de suporte a novos modelos (GLM-5.2, K2.7 Code) foram finalizados.

---

## 2. Lançamentos

**Nenhum lançamento formal nas últimas 24 horas.**

O pipeline de código fechou PRs relevantes (detalhados na seção 3), mas nenhum tag de release foi criado. Não há notas de migração ou breaking changes a reportar neste ciclo.

---

## 3. Progresso do Projeto

Os seguintes PRs foram **merged/fechados** hoje, representando avanços concretos:

| PR | Escopo | Mudança |
|---|---|---|
| [#45695](https://github.com/NousResearch/hermes-agent/pull/45695) | `feat(zai)` | Adiciona suporte a **GLM-5.2 com context window verificado de 1M tokens** — corrige detecção incorreta que caía no fallback de 202.752 tokens |
| [#45751](https://github.com/NousResearch/hermes-agent/pull/45751) | `fix(models)` | Suporte a **glm-5.2 e kimi-k2.7-code**; corrige merge entre listas live e curated |
| [#46309](https://github.com/NousResearch/hermes-agent/pull/46309) | `fix(kimi)` | Expõe **K2.7 Code** no picker nativo mesmo quando a lista live do Kimi ainda não reflete |
| [#41632](https://github.com/NousResearch/hermes-agent/pull/41632) | `feat(vision)` | Adiciona tool `inject_image` seguro por provider para anexar imagens como input multimodal nativo |
| [#41617](https://github.com/NousResearch/hermes-agent/pull/41617) | `feat(tool_progress)` | Novo modo `multimodal` para argumentos de tool sem truncagem |
| [#41629](https://github.com/NousResearch/hermes-agent/pull/41629) | `fix(dashboard)` | Corrige resolução de assets atrás de reverse-proxy com path prefix (ex.: Home Assistant Ingress) |
| [#41621](https://github.com/NousResearch/hermes-agent/pull/41621) | `fix(cli)` | Suprime warning deprecatório do `lark_oapi` na inicialização |
| [#41628](https://github.com/NousResearch/hermes-agent/pull/41628) | `test(gateway)` | Cobertura de regressão para fast-mode routing do GPT-5.5 |
| [#4512](https://github.com/NousResearch/hermes-agent/pull/4512) | `feat(display)` | Adiciona opção de configuração `thinking_progress` independente |

**Avaliação:** Bom progresso em suporte a modelos e experiência de display. A ausência de releases formais pode indicar que a equipe está agregando mudanças antes de um tag maior.

---

## 4. Temas Quentes da Comunidade

Issues e PRs com maior engajamento (comentários + reações):

| # | Tipo | Escopo | Título | 💬 | 👍 |
|---|---|---|---|---|---|
| [#43083](https://github.com/NousResearch/hermes-agent/issues/43083) | Bug (P1) | `comp/agent` | Passwords substituídas por `***` mas modelo lê histórico e falha na segunda tool call | 7 | 0 |
| [#31584](https://github.com/NousResearch/hermes-agent/issues/31584) | Feature (P2) | `comp/agent`, `tool/memory` | Tratar memory-context como contexto de fundo, não como conteúdo autoritativo | 5 | 0 |
| [#31668](https://github.com/NousResearch/hermes-agent/issues/31668) | Bug (P3) | `provider/anthropic` | Hermes com modelos Anthropic: rate limit / uso extra de API | 5 | 1 |
| [#45519](https://github.com/NousResearch/hermes-agent/issues/45519) | Bug (P2) | `provider/zai` | GLM-5.2 context misdetected como 202.752 — **já fechado com PR #45695** | 4 | 0 |
| [#45058](https://github.com/NousResearch/hermes-agent/issues/45058) | Bug (P3) | `tool/web` | web_search/web_extract redireciona silenciosamente para Parallel.ai sem opt-in do usuário | 3 | 3 |
| [#44140](https://github.com/NousResearch/hermes-agent/issues/44140) | Feature (P3) | `comp/gateway` | Desktop GUI: auto-scroll, correção de overlap da sidebar, grupos de sessão customizados | 3 | 3 |
| [#40166](https://github.com/NousResearch/hermes-agent/issues/40166) | Feature (P3) | `Desktop` | Adicionar controle de zoom/tamanho de fonte no app Desktop | 2 | 4 |
| [#36865](https://github.com/NousResearch/hermes-agent/issues/36865) | Feature (P3) | — | Tema "Clean/Professional" para acessibilidade (ADHD) | 1 | 3 |

**Análise:** O tema mais candente é **#43083** — uma falha de segurança onde credenciais redigidas (`***`) ainda são visíveis ao modelo quando ele relê seu próprio histórico de conversa, causando falhas em segunda tool call. Este é um problema de defense-in-depth que precisa de correção urgente. As demandas por melhorias na Desktop GUI (auto-scroll, zoom, tema acessível) representam o maior volume de feedback qualitativo.

---

## 5. Bugs e Estabilidade

### P1 — Críticos

| # | Escopo | Título | Resumo |
|---|---|---|---|
| [#43083](https://github.com/NousResearch/hermes-agent/issues/43083) | `comp/agent` | Passwords substituídas por `***` mas modelo lê histórico e falha | Credenciais são redigidas na persistência mas o modelo acessa o objeto raw da API e vê as senhas reais; defesa em profundidade falha |
| [#46142](https://github.com/NousResearch/hermes-agent/issues/46142) | `comp/gateway`, `platform/matrix` | Migração para mautrix quebra dispatch de mensagens no Tuwunel | Após PR #18505, **nenhuma mensagem** é mais dispatchada no homeserver Tuwunel; a sincronização inicial completa mas eventos não chegam |

### P2 — Altos

| # | Escopo | Título | Resumo |
|---|---|---|---|
| [#46171](https://github.com/NousResearch/hermes-agent/issues/46171) | `comp/agent`, `tool/memory` | **Security:** Memory provider tools burlam `disabled_toolsets` e permanecem callable | Ferramentas como `fact_store` e `fact_feedback` escapam do filtro final de tools — bypass de política de segurança |
| [#46260](https://github.com/NousResearch/hermes-agent/issues/46260) | `comp/cli`, `area/docker` | Instalador falha no estágio "desktop" — npm install exit code 1 no Windows 10 | Instalador standalone trava durante instalação desktop |
| [#46253](https://github.com/NousResearch/hermes-agent/issues/46253) | `comp/plugins`, `tool/memory` | GBrain como plugin de memory provider — sem integração nativa | GBrain funciona via MCP mas não injeta no pipeline de `memory` tool |
| [#43389](https://github.com/NousResearch/hermes-agent/issues/43389) | `comp/plugins`, `tool/memory` | `update_fact` crash com UNIQUE constraint ao atualizar para conteúdo duplicado | `sqlite3.IntegrityError` não tratada quando `content` é atualizado para valor já existente |
| [#27375](https://github.com/NousResearch/hermes-agent/pull/27375) | `type/security` | **tarfile:** add zip-slip + symlink guard (2 extraction sites) | 2

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>


# Relatório do Projeto PicoClaw — 2026-06-15

## 1. Panorama do Dia

O projeto PicoClaw apresenta alta atividade de desenvolvimento no dia de hoje, com 8 Pull Requests atualizadas e 4 Issues registadas nas últimas 24h. A atividade de manutenção é intensa: 5 dos 8 PRs foram fechados/merged, indicando uma rotina saudável de revisão e integração de patches. Uma nova nightly build (v0.2.9-nightly.20260614.cf67dd38) foi publicada, mantendo o ciclo de releases contínuas. O estado geral do projeto reflete um ecossistema ativo, com contribuições focadas em estabilidade, extensibilidade e correção de bugs — especialmente na camada de canais (Telegram, Matrix) e na experiência do agente local/remoto.

---

## 2. Lançamentos

| Versão | Tipo | Data | Artefato |
|---|---|---|---|
| **v0.2.9-nightly.20260614.cf67dd38** | Nightly Build | 2026-06-14 | `picoclaw_Linux_x86_64.tar.gz` |

**Changelog:** https://github.com/sipeed/picoclaw/compare/v0.2.9...main

- **Natureza da release:** Build automática noturna baseada no branch `main`. Esta é uma imagem instável destinada a testadores e desenvolvedores.
- **Sem breaking changes documentadas** nesta versão nightly.
- **Nota de cautela:** O próprio release alerta que a build pode ser instável — não recomendada para ambientes de produção.
- **Recomendação de migração:** Usuários em produção devem permanecer na última tag estável (v0.2.9).

---

## 3. Progresso do Projeto

### PRs Fechados/Merged nas Últimas 24h (5 de 8)

| PR | Título | Impacto |
|---|---|---|
| [#2904](https://github.com/sipeed/picoclaw/pull/2904) | **Fix agent loop reload and panic cleanup stability** | **Crítico** — Elimina goroutines bloqueadas e melhora a estabilidade do loop de reload do agente. Mudança no fluxo síncrono com `defer/recover`. |
| [#3121](https://github.com/sipeed/picoclaw/pull/3121) | refactor(openai_compat): replace log.Printf with structured logger | Padronização — Remove `log.Printf` residual, migrando para `logger.WarnCF`. Melhora consistência de logging. |
| [#3124](https://github.com/sipeed/picoclaw/pull/3124) | fix(tts): handle io.ReadAll error in error response path | **Bugfix** — Erros de leitura em respostas TTS não-200 eram descartados silenciosamente. Agora há fallback descritivo. |
| [#3122](https://github.com/sipeed/picoclaw/pull/3122) | fix(evolution): capture Close() error on write file | **Bugfix** — `Close()` em arquivos abertos com `O_WRONLY|O_APPEND` podia perder falhas de escrita (disco cheio, NFS). Agora captura e reporta. |
| [#3123](https://github.com/sipeed/picoclaw/pull/3123) | fix(filesystem): explicitly ignore Close() error on directory fd | Código limpo — Torna explícita a intenção de ignorar `Close()` em file descriptors de diretório, alinhando com o padrão de `Sync()`. |

**Avaliação:** O ciclo de PRs fechados indica foco em **estabilidade e resiliência** do core, com emphasis especial no subsistema de agente (PR #2904). A refatoração de logging (#3121) sugere maturização do código para ambientes de produção.

---

## 4. Temas Quentes da Comunidade

### Issues com Mais Atividade ou Potencial Impacto

| Issue | Título | Status | Comentários | 👍 | Relevância |
|---|---|---|---|---|---|
| [#2978](https://github.com/sipeed/picoclaw/issues/2978) | Add omniroute as provider | **CLOSED** | 2 | 0 | **Extensibilidade** — Solicitação para adicionar OmniRoute como provider de rede/combo. A issue foi fechada (provavelmente com work-around), mas sinaliza demanda por mais providers. |
| [#3041](https://github.com/sipeed/picoclaw/issues/3041) | `mcp add` mis-parses global flags into positionals | **OPEN** (stale) | 1 | 0 | **UX Crítico** — O comando `mcp add` falha ao adicionar servidores HTTP/SSE e renomeia silenciosamente servidores stdio. Bug funcional com impacto direto na experiência do usuário. |
| [#3090](https://github.com/sipeed/picoclaw/issues/3090) | Panel does not work on Safari iOS < 16.4 | **OPEN** | 1 | 0 | **Compatibilidade** — Painel web inacessível para usuários Safari em iOS inferior a 16.4. Inibe adoção em dispositivos Apple mais antigos. |

### PRs em Aberto com Alto Valor Estratégico

| PR | Título | Status | Relevância Estratégica |
|---|---|---|---|
| [#3118](https://github.com/sipeed/picoclaw/pull/3118) | Add remote Pico WebSocket mode to picoclaw agent | **OPEN** | **Novidade importante** — Adiciona modo remoto ao comando `picoclaw agent`, permitindo conexão via WebSocket (`--remote ws://...`). Mantém compatibilidade retroativa (comportamento local inalterado). Representa avanço significativo para arquiteturas distribuídas. |
| [#3120](https://github.com/sipeed/picoclaw/pull/3120) | feat(config): add RegisterChannelSettings hook for out-of-tree channels | **OPEN** | **Extensibilidade** — Expõe o lado de configuração dos canais para registration via `channels.RegisterFactory`, habilitando canais de terceiros sem fork do projeto. |
| [#2975](https://github.com/sipeed/picoclaw/pull/2975) | feat(telegram): treat reply to bot message as mention | **OPEN** (stale) | **UX de Mensagens** — Melhora ergonomia em grupos Telegram: reply a mensagem do bot é equivalente a @mention. Reduz fricção de uso em ambientes group chat. |

---

## 5. Bugs e Estabilidade

### Bugs Reportados (3 issues abertas de bugs)

| Severidade | Issue | Descrição | Urgência |
|---|---|---|---|
| **🟡 Média** | [#3041](https://github.com/sipeed/picoclaw/issues/3041) | `mcp add` mal-interpreta global flags como positionais — quebra adição de servidores HTTP/SSE e renomeia silenciosamente servidores stdio. | **Alta** — Afeta fluxo principal de configuração de MCP. |
| **🟡 Média** | [#3044](https://github.com/sipeed/picoclaw/issues/3044) | `allow_from` falha para Matrix user IDs contendo dois-pontos (`@localpart:domain`). Mensagens são rejeitadas silenciosamente. | **Média** — Afeta integração Matrix, padrão widely used. |
| **🟡 Média** | [#3090](https://github.com/sipeed/picoclaw/issues/3090) | Painel web não funciona no Safari iOS < 16.4. Usuários ficam bloqueados no login. | **Média** — Limita base de usuários Apple. |

### Bugs Corrigidos Recentemente

- **PR #2904** — Estabilidade do loop de reload e cleanup de pânico no agente. Corrigia goroutines órfãs e panics não tratados.
- **PR #3124** — Erro `io.ReadAll` descartado em respostas TTS não-200.
- **PR #3122** — Erro `Close()` descartado em escrita de arquivos JSONL (evolution).

**Tese Geral:** O projeto demonstra disciplina de bugfix, especialmente em caminhos de erro que eram silenciosos. As 3 issues abertas indicam pontos cegos em parsing de entrada e compatibilidade de plataforma que merecem atenção.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Demandas Identificadas

| Solicitação | Issue/PR | Tipo | Potencial de Aceitação |
|---|---|---|---|
| **OmniRoute como provider** | [#2978](https://github.com/sipeed/picoclaw/issues/2978) | Feature | ✅ Já aceita e fechada — sinaliza demanda por mais providers de roteamento/combo. |
| **Remote WebSocket mode** | [#3118](https://github.com/sipeed/picoclaw/pull/3118) | Feature | ✅ PR aberta — parece bem alinhada com a direção do projeto. |
| **RegisterChannelSettings hook** | [#3120](https://github.com/sipeed/picoclaw/pull/3120) | Feature | ✅ PR aberta — habilita ecossistema de plugins/out-of-tree channels. |
| **Reply como Mention no Telegram** | [#2975](https://github.com/sipeed/picoclaw/pull/2975) | Feature | ✅ PR aberta — UX improvement direto. |

### Sinais de Roadmap Inferidos

1. **Modularidade e plugins** — A feature de `RegisterChannelSettings` (#3120) indica direção clara para extensibilidade, permitindo que a comunidade crie canais sem modificar o core.
2. **Arquitetura distribuída** — O modo remote WebSocket (#3118) aponta para cenários de deployment onde o agente PicoClaw roda em instância separada da interface.
3. **Ecossistema MCP** — A issue #3041 sobre `mcp add` mostra que a gestão de Model Context Protocol servers é um fluxo importante que precisa de robustez.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Dor | Contexto | Severidade |
|---|---|---|
| **Falha silenciosa em configuração de Matrix** | Usuários configuram `allow_from` com formato padrão `@user:domain` e têm mensagens rejeitadas sem feedback. | 🔴 Impacto em produção |
| **Quebra de `mcp add` com flags HTTP/SSE** | Usuários tentando adicionar servers MCP via HTTP falham sem entender o porquê. | 🔴 Bloqueante |
| **Incompatibilidade com Safari antigo** | Usuários Apple em iOS < 16.4 ficam impossibilitados de acessar o painel. | 🟠 Experiência degradada |
| **Desconhecimento de como adicionar providers/combos** | A issue #2978 demonstra que a curva de aprendizado para customização de providers é alta. | 🟡 Documentação |

### Cenários de Uso Refletidos

- **Integração com Matrix** para comunicação em equipe.
- **Gestão de agentes MCP** para estender capacidades do assistente.
- **Acesso ao painel web** em dispositivos móveis (iOS Safari).
- **Deploy distribuído** via WebSocket remoto (evidenciado pelo PR #3118).

---

## 8. Backlog que Merece Atenção

### Issues/PRs Sem Resposta ou Estagnadas

| Item | Tipo | Idade | Status | Ação Recomendada |
|---|---|---|---|---|
| `mcp add` mis-parses global flags | Issue | 8 dias | **stale** | Priorizar — bug funcional que bloqueia fluxo principal. |
| Matrix `allow_from` com colon | Issue | 8 dias | **stale** | Priorizar — regressão de funcionalidade em integração popular. |
| Safari iOS < 16.4 panel | Issue | 5 dias | **stale** | Triangular — pode ser dependência de biblioteca JS (ex: suporte a WebSocket, CSS). |
| Telegram reply-as-mention | PR | 16 dias | **stale** | Revisar e mergear — feature pequena com impacto direto na UX. |

### Métricas de Saúde do Backlog

| Indicador | Valor | Avaliação |
|---|---|---|
| Issues abertas | 3 (de 4 nas últimas 24h) | 🟢 Normal — volume baixo. |
| PRs abertos | 5 (de 8 nas últimas 24h) | 🟢 Bom — alta taxa de fechamento (62.5%). |
| PRs stale (>7 dias sem atualização) | 2 de 5 abertos | 🟡 Atenção — 40% dos PRs em aberto estão estagnados. |
| Issues stale (>7 dias sem atualização) | 3 de 3 abertas | 🔴 Crítico — todas as issues abertas estão estagnadas. |

---

## Conclusão

O projeto **PicoClaw** demonstra saúde de desenvolvimento ativa com ciclo de revisão de PRs eficiente (62.5% de fechamento em 24h) e foco em estabilidade do core. Os PRs #2904, #3122 e #3124 mostram disciplina em tratar caminhos de erro silenciosos. As áreas que merecem atenção imediata são:

1. **Responder e priorizar as 3 issues stale** — especialmente `#3041` (`mcp add`) e `#3044` (Matrix `allow_from`).
2. **Revisar o PR #2975** (Telegram reply-as-mention) antes que se torne stale.
3. **Considerar documentação/adendos** para a configuração de providers (evidenciado por #2978).

O pipeline de features para extensibilidade (#3120) e remote mode (#3118) indica um roadmap saudável em direção a arquiteturas modulares e distribuídas.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-06-15

## 1. Panorama do Dia

O projeto IronClaw manteve altíssima atividade em 14 de junho de 2026, com 31 issues e 44 PRs atualizados nas últimas 24 horas. O foco principal do dia foi a **correção de múltiplas vulnerabilidades de segurança no shell tool** (6 security advisories) e o **avanço na UX do Reborn WebUI v2** (polish, acessibilidade, mobile, locale zh-CN). A release 0.29.1 segue como versão mais recente, sem novos releases anunciados. O teste E2E noturno falhou novamente, sinalizando instabilidade contínua no pipeline de CI.

---

## 2. Lançamentos

**Nenhum novo release nas últimas 24h.**

A release mais recente permanece a **0.29.1** (PR #3708), que incluiu:
- `ironclaw`: 0.24.0 → 0.29.1
- `ironclaw_common`: 0.4.2 → 0.5.0 ⚠️ **Breaking changes**
- `ironclaw_skills`: 0.3.0 → 0.4.0 ⚠️ **Breaking changes**
- `ironclaw_safety`: 0.2.2 → 0.2.3

⚠️ **Nota de migração**: quem usa `ironclaw_common` ou `ironclaw_skills` deve revisar breaking changes antes de atualizar.

---

## 3. Progresso do Projeto

PRs merged/fechados hoje com impacto significativo:

| PR | Título | Impacto |
|---|---|---|
| [#4873](https://github.com/nearai/ironclaw/pull/4873) | test(slack): re-home approval→auth→final-reply delivery e2e | Reabilita teste E2E de Slack removido de #4839 |
| [#4844](https://github.com/nearai/ironclaw/pull/4844) | fix(slack): filter delivered gate routes by raw gate string | Corrige bug de alocação per-route no filtro de gates |
| [#4805](https://github.com/nearai/ironclaw/pull/4805) | fix(reborn): repair oversized provider tool arguments | Repara batch de tool calls quando argumentos excedem limite |
| [#3680](https://github.com/nearai/ironclaw/pull/3680) | docs: document WeChat and WeCom channels | Adiciona documentação de canais WeChat e WeCom |

PRs abertos com potencial de merge iminente:

| PR | Título | Destaque |
|---|---|---|
| [#4871](https://github.com/nearai/ironclaw/pull/4871) | feat(attachments): image attachment support for vision-capable models | Suporte multimodal real para imagens (fecha gap #4644) |
| [#4869](https://github.com/nearai/ironclaw/pull/4869) | fix(security): tool boundary checks | Corrige as 6 vulnerabilidades de shell/write_file |
| [#4860](https://github.com/nearai/ironclaw/pull/4860) | feat(reborn): wire local service lifecycle backend | Backend systemd/launchd para controle de serviço |
| [#4836](https://github.com/nearai/ironclaw/pull/4836) | feat(runtime-context): surface connected channels, delivery state, run origin | Expõe contexto de runtime para o modelo |
| [#4838](https://github.com/nearai/ironclaw/pull/4838) | Explicit gate-open feedback for busy threads | Contrato claro de rejeição para threads ocupadas |
| [#4841](https://github.com/nearai/ironclaw/pull/4841) | reborn: no run-borking failures | Elimina erros terminais opacos no Reborn |

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários/reações):

1. **#4851** — Trusted-trigger origin laundered through adapter_kind string *(1 comentário, CLOSED)*
   - Identifica root cause de forgeabilidade do `ScheduledTrigger` via flatten de tipo para string.
   - [Link](https://github.com/nearai/ironclaw/issues/4851)

2. **#4848** — auth-resume: match pending resume by per-invocation identity *(1 comentário, CLOSED)*
   - Fecha gap de slot-reuse no `take_if` de auth-resume.
   - [Link](https://github.com/nearai/ironclaw/issues/4848)

3. **#4644** — Universal attachments across all channels *(1 comentário, OPEN)*
   - attachments silently dropped on Reborn; duplicação de lógica em 4+ call sites.
   - [Link](https://github.com/nearai/ironclaw/issues/4644)

4. **#4692** — IronClaw Reborn Local Dogfooding Findings *(0 comentários, OPEN)*
   - Issue de rastreamento de problemas encontrados no uso interno do Reborn.
   - [Link](https://github.com/nearai/ironclaw/issues/4692)

### Análise de demandas:
- **Segurança (6 issues)**: Comunidade reports ativamente vulnerabilidades de bypass de aprovação no shell tool — sinal de cultura de security-first, mas indica necessidade de revisão de lógica de risk classification.
- **Reborn UX**: Múltiplos issues sobre polish, acessibilidade, mobile, locale — indica fase de maturação da WebUI v2.
- **Runtime context**: Dividir `runtime_context.rs` (1025 linhas) é demanda recorrente — técnico, mas crítico para manutenibilidade.

---

## 5. Bugs e Estabilidade

### Severidade Alta (crashes/regressões):

| Issue | Descrição | Severidade |
|---|---|---|
| [#4874](https://github.com/nearai/ironclaw/issues/4874) | WebChat v2: "Illegal invocation" via HTTP não-localhost | **Alta** |
| [#4108](https://github.com/nearai/ironclaw/issues/4108) | Nightly E2E failed — falha recorrente | **Alta** |
| [#4861](https://github.com/nearai/ironclaw/issues/4861) | Shell approval bypass via newline-chained commands | **Crítica** (Security) |
| [#4862](https://github.com/nearai/ironclaw/issues/4862) | Shell bypass via `sort --compress-program` | **Crítica** (Security) |
| [#4863](https://github.com/nearai/ironclaw/issues/4863) | High-risk shell approval bypass via `env`/shell wrappers | **Crítica** (Security) |
| [#4864](https://github.com/nearai/ironclaw/issues/4864) | Shell approval wrapper bypass inherits auto-approval | **Crítica** (Security) |
| [#4865](https://github.com/nearai/ironclaw/issues/4865) | Shell approval boundary bypass via `env /bin/sh -c` | **Crítica** (Security) |
| [#4797](https://github.com/nearai/ironclaw/issues/4797) | `write_file` sandbox escape via dangling symlink | **Crítica** (Security) |

### Severidade Média:

| Issue | Descrição |
|---|---|
| [#4853](https://github.com/nearai/ironclaw/issues/4853) | Tool Activity desaparece após completion em multi-tenant |
| [#4852](https://github.com/nearai/ironclaw/issues/4852) | Shell command invisível no approval dialog |
| [#4870](https://github.com/nearai/ironclaw/issues/4870) | WebSocket helper conflita com v2 auth contract |
| [#4857](https://github.com/nearai/ironclaw/issues/4857) | NEAR AI provider incorretamente marcado como Active |
| [#4854](https://github.com/nearai/ironclaw/issues/4854) | GitHub Extension requests exigem aprovação excessiva |

⚠️ **Alerta**: 6 security advisories abertas simultaneamente indicam pressão para release emergencial de patch.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features novas solicitadas:

| Issue | Descrição | Indicador de roadmap |
|---|---|---|
| [#4644](https://github.com/nearai/ironclaw/issues/4644) | Universal attachments — pipeline v1 no Reborn + registry extensível | **Alta prioridade** (já em progresso via #4871) |
| [#4875](https://github.com/nearai/ironclaw/issues/4875) | Split runtime_context.rs — separar prompt renderer do data model | Refatoração técnica pendente |
| [#4849](https://github.com/nearai/ironclaw/issues/4849) | auth-resume: recover orphaned approval leases (TTL/sweep) | Melhoria de resiliência |
| [#4850](https://github.com/nearai/ironclaw/issues/4850) | Decompose oversized files: capabilities/host.rs + auth-resume test | Dívida técnica |
| [#4872](https://github.com/nearai/ironclaw/issues/4872) | Render comm labels como escaped untrusted data | Correção de segurança potencial |

### Sinais de roadmap:
- **Reborn WebUI v2 maturity**: issues de polish, acessibilidade, mobile, locale indicam que a UI está em fase de refinamento final antes de GA.
- **Multimodal attachments**: progresso ativo (#4871) confirma investimento em suporte a imagens.
- **Slack como extensão**: PR #4778 remove Slack da lista built-in — indica arquitetura de canais como extensões.

---

## 7. Resumo de Feedback dos Usuários

### Dores reais identificadas:

1. **Instabilidade do Reborn em produção** (Issue #4692):
   - Problemas de startup, configuração de provider, first-run usability.
   - Usuários internos ainda enfrentam fricção significativa.

2. **CI/CD instável** (Issue #4108):
   - Falha recorrente do E2E noturno gera desconfiança no processo de release.

3. **Segurança do shell tool**:
   - 6 vulnerabilidades de bypass indicam que a risk classification atual é insuficiente para comandos complexos.

4. **UX mobile** (Issue #4868):
   - Settings provider actions cortados em viewports estreitos — usabilidade mobile ignorada.

5. **Acessibilidade parcial** (Issue #4856):
   - Keyboard, screen-reader, dialogs ainda frágeis — experiência não inclusiva.

### Satisfação:
- **Documentação**: WeChat e WeCom docs merged (#3680) — usuários de canais asiáticos reconhecidos.
- **Resiliência de provider**: oversized tool arguments consertado (#4805) — dor de limites de provider resolvida.

---

## 8. Backlog que Merece Atenção

### Issues sem resposta há >3 dias:

| Issue | Título | Idade | Prioridade |
|---|---|---|---|
| [#4108](https://github.com/nearai/ironclaw/issues/4108) | Nightly E2E failed | ~19 dias | **Alta** |
| [#4797](https://github.com/nearai/ironclaw/issues/4797) | write_file sandbox escape (security) | ~3 dias | **Crítica** |
| [#4861](https://github.com/nearai/ironclaw/issues/4861) | Shell approval bypass (security) | ~1 dia | **Crítica** |
| [#4862](https://github.com/nearai/ironclaw/issues/4862) | sort --compress-program bypass | ~1 dia | **Crítica** |
| [#4863](https://github.com/nearai/ironclaw/issues/4863) | env/shell wrapper bypass | ~1 dia | **Crítica** |
| [#4864](https://github.com/nearai/ironclaw/issues/4864) | Shell wrapper auto-approval bypass | ~1 dia | **Crítica** |
| [#4865](https://github.com/nearai/ironclaw/issues/4865) | env /bin/sh -c bypass | ~1 dia | **Crítica** |
| [#4692](https://github.com/nearai/ironclaw/issues/4692) | Dogfooding findings | ~5 dias | **Média** |
| [#4644](https://github.com/nearai/ironclaw/issues/4644) | Universal attachments | ~6 dias | **Alta** |

### Recomendações de ação:

1. **🔴 Prioridade crítica**: PR #4869 (security fixes) precisa ser reviewed e merged imediatamente — 6 vulnerabilidades abertas.
2. **🟠 Prioridade alta**: Falha E2E noturna (#4108) bloqueia confiança em releases; investigar root cause.
3. **🟡 Prioridade média**: Reborn UX issues (#4856, #4868, #4855) merecem triagem para próxima release.
4. **📋 Dívida técnica**: runtime_context.rs (#4875) e oversized files (#4850) devem entrar no roadmap de refatoração.

---

*Relatório gerado automaticamente com base em dados do GitHub de 2026-06-15. Próxima atualização: 2026-06-16.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório de Projeto — CoPaw (QwenPaw)

**Data de referência:** 2026-06-15  
**Período analisado:** Últimas 24 horas  
**Repositório:** [agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw)

---

## 1. Panorama do dia

O projeto CoPaw (também conhecido como QwenPaw) apresenta **atividade moderada** nesta terça-feira, com 8 issues e 6 pull requests atualizados nas últimas 24 horas. Não houve novos lançamentos. A atividade está concentrada em **contribuições de novos mantenedores** — 5 dos 6 PRs abertos são de *first-time-contributors*, indicando uma curva positiva de engajamento da comunidade. Do lado dos usuários, há **sinais preocupantes de estabilidade** no patch v1.1.11.post2, com pelo menos 3 bugs distintos reportados. O volume de issues abertas (7 novas) supera significativamente as fechadas (1), sugerindo backlog crescente.

---

## 2. Lançamentos

**Nenhum release publicado nas últimas 24 horas.**

O projeto encontra-se na versão **v1.1.11.post2**, conforme mencionado nos reports de bugs. Recomenda-se monitorar o repositório para a próxima versão.

---

## 3. Progresso do Projeto

**Nenhum PR merged ou fechado nas últimas 24 horas.** Todos os 6 PRs abertos permanecem em revisão:

| # | PR | Autor | Área | Status |
|---|-----|-------|------|--------|
| [#5186](https://github.com/agentscope-ai/CoPaw/pull/5186) | Adicionar suporte completo ao越南语 (vi) | biencuong | console | OPEN |
| [#5175](https://github.com/agentscope-ai/CoPaw/pull/5175) | Adicionar suporte ao越南语 (vi) (parcial) | nguyenthanhthe | console | OPEN |
| [#5180](https://github.com/agentscope-ai/CoPaw/pull/5180) | Aumentar timeout de cron/heartbeat e adicionar contexto autônomo | nguyenthanhthe | crons | OPEN |
| [#5179](https://github.com/agentscope-ai/CoPaw/pull/5179) | Expandir palavras-chave de habilidade multi-agente | nguyenthanhthe | skills | OPEN |
| [#5178](https://github.com/agentscope-ai/CoPaw/pull/5178) | Adicionar filtro de sessões por título | nguyenthanhthe | console | OPEN |
| [#5176](https://github.com/agentscope-ai/CoPaw/pull/5176) | Corrigir overflow de comandos de aprovação | nguyenthanhthe | console | OPEN |

**Destaque:** O PR [#5186](https://github.com/agentscope-ai/CoPaw/pull/5186) (de nguyenthanhthe) promete **cobertura completa de 40 seções de UI** em vietnamita, substituindo a tradução parcial do #5175. Este é um avanço significativo para internacionalização.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários)

| # | Título | Comentários | Tipo |
|---|--------|-------------|------|
| [#5156](https://github.com/agentscope-ai/CoPaw/issues/5156) | Adicionar `kimi-for-coding` à whitelist/uv | **5** | enhancement |
| [#5184](https://github.com/agentscope-ai/CoPaw/issues/5184) | Local model providers não aparecem no v1.1.11.post2 | 2 | bug |
| [#5185](https://github.com/agentscope-ai/CoPaw/issues/5185) | Adicionar timestamp em tempo real (HH:MM:SS) ao contexto | 1 | feature |
| [#5172](https://github.com/agentscope-ai/CoPaw/issues/5172) | Chat trava após inatividade ⚠️ | 1 | **bug (CRÍTICO)** |

### Análise de demandas

**#5156 — whitelist `kimi-for-coding`:** Forte demanda por expandir integrações de coding assistants. Usuários com assinatura Kimi coding não conseguem usar o serviço via QwenPaw (só via API oficial). Potencial de **crescimento de base de usuários** se implementado.

**#5185 — timestamp em tempo real:** Similar ao AstrBot. Reduz latência e simplifica prompts. Demanda legítima que pode se tornar feature padrão.

---

## 5. Bugs e Estabilidade

### Bugs reportados nas últimas 24h (6 issues)

| Severidade | # | Descrição | Impacto |
|------------|---|-----------|---------|
| 🔴 **Crítica** | [#5172](https://github.com/agentscope-ai/CoPaw/issues/5172) | Chat trava após período de inatividade — não responde até clicar "parar" | Afeta todos os canais (QQ, WeChat, etc.) |
| 🟠 **Alta** | [#5181](https://github.com/agentscope-ai/CoPaw/issues/5181) | Cmd.exe pop-up em loop durante instalação de dependências de plugins | Experiência degradada no Windows |
| 🟠 **Alta** | [#5184](https://github.com/agentscope-ai/CoPaw/issues/5184) | Local model providers não aparecem na UI (v1.1.11.post2) | Funcionalidade quebrada |
| 🟡 **Média** | [#5177](https://github.com/agentscope-ai/CoPaw/issues/5177) | Mensagens do DingTalk não aparecem no console frontend | Integração DingTalk parcial |
| 🟡 **Média** | [#5183](https://github.com/agentscope-ai/CoPaw/issues/5183) | Pet feature não funciona em Wayland (Niri) | Compatibilidade desktop Linux |
| 🟢 **Baixa** | [#5172](https://github.com/agentscope-ai/CoPaw/issues/5172) | (mesma issue acima — chat freeze) | |

### Análise

**Alerta vermelho para #5172:** O bug de chat travando após inatividade é recorrente e afeta todos os canais de mensagem. A descrição indica que é um problema antigo ("essa questão crítica sempre existiu"). Sem ponto de stop em canais como QQ/WeChat, o agente fica **completamente não responsivo**. Prioridade máxima.

**Regressão confirmada em v1.1.11.post2:** Pelo menos 2 bugs (#5184, #5181) estão diretamente ligados a este patch, sugerindo necessidade de **hotfix urgente** ou rollback parcial.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features solicitadas (3 issues)

| # | Feature | Votos | Observações |
|---|---------|-------|-------------|
| [#5182](https://github.com/agentscope-ai/CoPaw/issues/5182) | Unificar configuração de modelos (texto, vetor, áudio/vídeo) | 0 | Padronização de schema |
| [#5185](https://github.com/agentscope-ai/CoPaw/issues/5185) | Timestamp em tempo real (HH:MM:SS) no contexto | 0 | Inspirado em AstrBot |
| [#5156](https://github.com/agentscope-ai/CoPaw/issues/5156) | Adicionar `kimi-for-coding` à allowlist | 0 | Integração de coding assistant |

### Tendências identificadas

1. **Modularização de modelos:** Há demanda por arquitetura unificada de provedores locais, API e coding assistants.
2. **Internacionalização:** PRs vietnamitas indicam expansão para mercados asiáticos (além da base chinês/inglês).
3. **UX/UI do console:** Filtros por título de sessão (#5178) ewrapping de comandos (#5176) mostram foco em usabilidade.

---

## 7. Resumo de Feedback dos Usuários

### Dores relatadas

| Dor | Frequência | Severidade |
|-----|------------|------------|
| Chat trava após inatividade | 🔴 Alta | Crítica |
| Cmd.exe em loop durante install | 🟠 Média | Alta |
| Local providers não aparecem | 🟠 Média | Alta |
| Pet não funciona em Wayland | 🟡 Baixa | Média |
| Integração DingTalk incompleta | 🟡 Baixa | Média |

### Cenários de uso emergentes

- **Desenvolvedores Kimi:** Usuários com assinatura Kimi coding desejam usar CoPaw como interface unificada.
- **Ambientes Linux/Wayland:** Crescente adoção em desktops Linux não-X11 (Niri).
- **Multi-agente:** Solicitações de palavras-chave expandidas para colaboração em equipe.
- **Agentes autônomos (cron/heartbeat):** Timeout de 120s é insuficiente para operações complexas.

### Satisfação geral

**Mista a positiva**, mas com **sinais de alerta** na versão mais recente. A comunidade está engajada (5 first-time-contributors em um dia), mas bugs no patch v1.1.11.post2 podem impactar a confiança.

---

## 8. Backlog que Merece Atenção

### Issues sem resposta significativa (>48h sem atividade)

| # | Título | Criado | Comentários | Prioridade |
|---|--------|--------|-------------|------------|
| [#5156](https://github.com/agentscope-ai/CoPaw/issues/5156) | Adicionar kimi-for-coding/uv whitelist | 2026-06-12 | 5 | 🟡 Média |
| [#5172](https://github.com/agentscope-ai/CoPaw/issues/5172) | Chat trava após inatividade | 2026-06-13 | 1 | 🔴 **Crítica** |
| [#5182](https://github.com/agentscope-ai/CoPaw/issues/5182) | Unificar configuração de modelos | 2026-06-14 | 1 | 🟡 Média |
| [#5181](https://github.com/agentscope-ai/CoPaw/issues/5181) | Cmd pop-up em loop | 2026-06-14 | 1 | 🟠 Alta |

### Recomendações imediatas

1. **#5172** — Priorizar investigação do bug de freeze. É regressão crítica e afeta todos os canais.
2. **v1.1.11.post2** — Avaliar necessidade de hotfix para bugs #5181 e #5184.
3. **#5156** — Demand éjustificada; incluir na roadmap do próximo release.
4. **PR reviews** — Os 6 PRs abertos estão sem comentários definidos. Aprovação rápida pode impulsionar moral da comunidade.

---

*Relatório gerado automaticamente com base em dados do GitHub. Última atualização: 2026-06-15.*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-06-15

## 1. Panorama do Dia

O ecossistema ZeroClaw apresenta **alta atividade** na data de hoje, com **32 issues** e **50 PRs** atualizados nas últimas 24 horas — um volume considerável que sinaliza uma sprint produtiva. Não houve lançamentos oficiais registrados, mas a taxa de fechamento de issues (18 de 32) e PRs (5 de 50) indica progresso concreto. A distribuição de issues abertas vs. fechadas sugere uma equipe ativa em triagem e resolução. Os PRs em aberto dominam o pipeline, sinalizando contribuições recentes em múltiplas áreas: canais, providers, runtime e ferramentas. O projeto mantém um fluxo saudável de kontribusições, embora alguns bugs críticos (P1) eenhancement requests com alta severidade ainda demandem atenção.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto não emitiu novas versões neste período. Historicamente, releases do ZeroClaw acompanham marcos de estabilidade em PRs críticos — a ausência de release pode indicar que a equipe está consolidando o work-in-progress antes de um próximo tag, possivelmente alinhado à versão 0.8.1 conforme indicativo do tracker [#6970](https://github.com/zeroclaw-labs/zeroclaw/issues/6970).

---

## 3. Progresso do Projeto

As **5 PRs fechadas/merged** nas últimas 24h representam avanço tangível:

| PR | Título | Impacto |
|----|--------|---------|
| [#7116](https://github.com/zeroclaw-labs/zeroclaw/pull/7116) | docs(providers): add OpenAI Codex over a ChatGPT subscription | Documentação de providers |
| [#7525](https://github.com/zeroclaw-labs/zeroclaw/pull/7525) | feat(channels/discord): sync archive on message edit, delete, and bulk delete | Melhoria de canal Discord — sincronização de архивации |

Além das mergeadas, **PRs em destaque em andamento** que simbolizam evoluções arquiteturais:

- **[#7546](https://github.com/zeroclaw-labs/zeroclaw/pull/7546)** — `fix(runtime): unify SopEngine construction` — unifica instância do motor de execução em `Arc<Mutex<>>` por daemon, eliminando problema de estado duplicado entre agent tools e listener MQTT.

- **[#7361](https://github.com/zeroclaw-labs/zeroclaw/pull/7361)** — `feat(rfc-6969): per-turn output routing via send_via + voice delivery fixes` — XL PR implementando roteamento de saída por turno com correções de entrega de voz (Telegram, etc.).

- **[#7590](https://github.com/zeroclaw-labs/zeroclaw/pull/7590)** — `feat(agents): per-agent delegate roster with cross-profile reach` — permite delegação entre agents com profiles de risco distintos, resolvendo limitação arquitetural antiga.

- **[#7558](https://github.com/zeroclaw-labs/zeroclaw/pull/7558)** — `feat(xtask): canonical install spec + cargo generate installers` — padroniza especificação de instalação e elimina drift de features entre superfícies.

---

## 4. Temas Quentes da Comunidade

As **issues com maior engajamento** (comentários) refletem prioridades da comunidade:

### Top Issue: #5849 — Dream Mode (18 comentários)
**Link:** [#5849](https://github.com/zeroclaw-labs/zeroclaw/issues/5849)  
**Feature:** Modo de consolidação periódica de memória e aprendizado reflexivo durante períodos de ociosidade. Demanda sofisticada que evidencia interesse em capacidades de memória de longo prazo e auto-reflexão — um diferencial competitivo para agents de IA.

### #6808 — RFC Work Lanes, Board Automation (11 comentários)
**Link:** [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)  
**RFC de Governança** propondo lanes de PR automáticos e cleanup de labels. Sinaliza maturidade organizacional e necessidade de reduzir carga operacional manual dos mantenedores. Status: `in-progress`, mirando versão 0.80-beta1.

### #7415 — RFC Unify Agent Turn Engines (5 comentários)
**Link:** [#7415](https://github.com/zeroclaw-labs/zeroclaw/issues/7415)  
RFC já em execução via PR #7540 — consolidação dos três motores de turno (`run_tool_call_loop`, `turn_streamed`, `Agent::turn`). Alteração arquitetural significativa.

### Contexto de Feature Requests Fechados (Massive Wave)
**O contributor `theonlyhennygod`** fechou uma **série massiva de features** no dia 14/06, todas relacionadas a **integrações**:

| Issue | Integração | Risk |
|-------|-----------|------|
| [#6494](https://github.com/zeroclaw-labs/zeroclaw/issues/6494) | Vonage SMS | high |
| [#6452](https://github.com/zeroclaw-labs/zeroclaw/issues/6452) | Sinch SMS | high |
| [#6453](https://github.com/zeroclaw-labs/zeroclaw/issues/6453) | Plivo SMS | high |
| [#6451](https://github.com/zeroclaw-labs/zeroclaw/issues/6451) | Telnyx SMS | high |
| [#6477](https://github.com/zeroclaw-labs/zeroclaw/issues/6477) | Sonos | high |
| [#6450](https://github.com/zeroclaw-labs/zeroclaw/issues/6450) | 8Sleep | high |
| [#6475](https://github.com/zeroclaw-labs/zeroclaw/issues/6475) | Spotify | medium |
| [#6476](https://github.com/zeroclaw-labs/zeroclaw/issues/6476) | Shazam | medium |
| [#6449](https://github.com/zeroclaw-labs/zeroclaw/issues/6449) | Philips Hue | medium |
| [#6456](https://github.com/zeroclaw-labs/zeroclaw/issues/6456) | Arcee AI (provider) | medium |
| [#6458](https://github.com/zeroclaw-labs/zeroclaw/issues/6458) | Inception Labs Mercury | medium |
| [#6457](https://github.com/zeroclaw-labs/zeroclaw/issues/6457) | Lambda AI | medium |
| [#6455](https://github.com/zeroclaw-labs/zeroclaw/issues/6455) | Featherless AI | medium |
| [#6454](https://github.com/zeroclaw-labs/zeroclaw/issues/6454) | Upstage Solar | medium |

**Análise:** Explosão de integrações — SMS gateways, smart home, música, novos providers de IA. O projeto está em plena expansão de superfície de integração, alinhada à proposta de ser um hub flexível para agents pessoais.

---

## 5. Bugs e Estabilidade

### Bugs P1 (Críticos) em Andamento

| Issue | Severidade | Título | Status |
|-------|-----------|--------|--------|
| [#7470](https://github.com/zeroclaw-labs/zeroclaw/issues/7470) | S1 - workflow blocked | delegate agentic mode rejects empty `allowed_tools` + same-profile gating blocks stricter delegated targets | `in-progress` |
| [#5662](https://github.com/zeroclaw-labs/zeroclaw/issues/5662) | P1 | QQ channel: voice messages processed multiple times → duplicate entries in `brain.db` | `in-progress` |
| [#7591](https://github.com/zeroclaw-labs/zeroclaw/issues/7591) | S2 - degraded | Invalid agent alias não invalidado em `zeroclaw quickstart` | `in-progress` |
| [#7577](https://github.com/zeroclaw-labs/zeroclaw/issues/7577) | S2 - degraded | Extra-nested model provider alias tables silently drop fields | `in-progress` |

### Bugs P1 Fechados (Resolvidos Hoje)

- ** [#7567](https://github.com/zeroclaw-labs/zeroclaw/pull/7567)** — Slack: empty-peer-set rejections now self-diagnosing (indica problema de segurança/rejeição de peers).
- ** [#7560](https://github.com/zeroclaw-labs/zeroclaw/pull/7560)** — Gemini: resolve OAuth project from object and current-project shapes.
- ** [#7565](https://github.com/zeroclaw-labs/zeroclaw/pull/7565)** — WhatsApp Web backend selection from personal/pairing config.
- ** [#7564](https://github.com/zeroclaw-labs/zeroclaw/pull/7564)** — Slack: skip reply-intent classifier on direct messages.
- ** [#7562](https://github.com/zeroclaw-labs/zeroclaw/pull/7562)** — WhatsApp as cron delivery channel.
- ** [#7561](https://github.com/zeroclaw-labs/zeroclaw/pull/7561)** — Email cron delivery via no-registry fallback.

### Bugs P2 (Relevantes) em Andamento

| Issue | Título | Canal |
|-------|--------|-------|
| [#6856](https://github.com/zeroclaw-labs/zeroclaw/issues/6856) | `show_tool_calls` missing from `[channel]` (schema v3) | Channel |
| [#6698](https://github.com/zeroclaw-labs/zeroclaw/issues/6698) | Fluent locale files lag English app-string sources | Runtime/Daemon |
| [#7577](https://github.com/zeroclaw-labs/zeroclaw/issues/7577) | Extra-nested model provider alias silently drops fields | Config |

**Padrões identificados:** Concentração de bugs em canais (Slack, WhatsApp, QQ, Telegram), em decisões de config/onboarding, e em providers (Gemini, Groq). A área de canais mostra-se como surface de maior volatilidade.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Emblemáticas em Aberto

1. **#5849 — Dream Mode** (Priority P2, Risk High)  
   Propõe ciclos de reflexão e consolidação de memória durante ociosidade. Representa evolução cognitiva do agent — potencial diferencial competitivo.

2. **#5842 — `extra_args` validation/allowlist** (Priority P2, Risk High)  
   Avaliação de validação de flags do Codex CLI. Aspecto de segurança operacional.

3. **#6823 — Zerocode ACP Bridge Tracker** (Priority P2, Risk High)  
   Client-side connection layer para TUI ↔ daemon sobre RPC Unix socket ou WSS. Componente arquitetural de conectividade.

4. **#6970 — v0.8.1 integration/channel/provider/tool PR queue** (Priority P2, Risk High)  
   Tracker operacional que consolida fila de PRs para a próxima versão. Marca tendência: **próximo release focado em integrações e canais**.

5. **#6074 — Audit: 153 commits lost in bulk revert c3ff635** (Priority P2, Risk High)  
   Recuperação de commits perdidos — governança e integridade do histórico.

### Sinais de Roadmap

- **Expansão massiva de providers de IA:** Arcee AI, Inception Labs (Mercury/diffusion), Lambda AI, Featherless AI, Upstage Solar — todas fechadas recentemente, sinalizando que a versão atual suporta um ecossistema diversificado de modelos.
- **Consolidação de canais SMS:** Vonage, Sinch, Plivo, Telnyx — arco completo de gateways SMS.
- **Smart home integrations:** Sonos, 8Sleep, Philips Hue, Spotify, Shazam.
- **RFC em execução:** Unificação do motor de turnos (projeto arquitetural significativo).

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Dor | Evidência | Issue |
|------|-----------|-------|
| **Configuração de alias de agent quebra quickstart** | Usuário perde todo input anterior ao corrigir alias | [#7591](https://github.com/zeroclaw-labs/zeroclaw/issues/7591) |
| **Campos de provider aninhados descartados silenciosamente** | TOML mal formatado passa validação mas dropa campos | [#7577](https://github.com/zeroclaw-labs/zeroclaw/issues/7577) |
| **Voice messages duplicadas no QQ** | brain.db poluído com duplicatas — 20+ execuções por mensagem | [#5662](https://github.com/zeroclaw-labs/zeroclaw/issues/5662) |
| **Delegação entre agents com profiles diferentes bloqueada** | Workflows multi-agent reviewer/research impossibilitados | [#7470](https://github.com/zeroclaw-labs/zeroclaw/issues/7470) |
| **Locale files desactualizados (zh-CN)** | Traduções incompletas em ferramentas e CLI | [#6698](https://github.com/zeroclaw-labs/zeroclaw/issues/6698) |

### Cenários de Uso Emergentes

- **Multi-agent setups:** Demanda por delegação cross-profile indica uso em arquiteturas de agent orquestrador ↔ especialistas.
- **Smart home hub:** Integrações Sonos, Hue, 8Sleep revelam uso como controlador centralizado de ambiente doméstico.
- **SMS como canal operacional:** Gateways Vonage/Sinch/Plivo/Telnyx — uso em automações e notificações críticas.
- **Provider diversity:** Usuários buscam flexibilidade de escolha de modelo — desde Arcee AI (specialist models) até Mercury (diffusion-based LLMs).

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Estagnadas

| Issue | Criado | Status | Prioridade | Nota |
|-------|--------|--------|------------|------|
| [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) | 2026-04-24 | `in-progress` | P2, Risk High | 153 commits perdidos em revert — auditoria pendente, 2 comentários |
| [#6698](https://github.com/zeroclaw-labs/zeroclaw/issues/6698) | 2026-05-16 | `in-progress` | P2 | Locale lag — 0 comentários, sem visibilidade |
| [#6823](https://github.com/zeroclaw-labs/zeroclaw/issues/6823) | 2026-05-21 | `no-stale` | P2 | ACP Bridge — 2 comentários, tracker sem PR linkado |

### Riscos de Longo Prazo

1. **Revert massivo (#6074):** 153 commits removidos em um único rollback — mesmo com tracker, a recuperação pode ser complexa. Recurso de engenharia pendente.

2. **Segurança em `extra_args` (#5842):** Validação de flags arbitrários para Codex CLI é um vetor de risco se não houver allowlist. Progresso lento (3 comentários desde 2026-04-17).

3. **Technical debt em canais:** Volume de bugs P1/P2 concentrados em canais (Slack, WhatsApp, QQ, Telegram) sugere necessidade de suite de testes mais robusta ou refatoração de interfaces.

4. **Locale/i18n:** Gap em zh-CN e outros locales pode limitar adoção internacional — issue #6698 com 0 comentários preocupa.

---

## Métricas Consolidada do Dia

| Indicador | Valor | Observação |
|-----------|-------|------------|
| Issues ativas | 14 | Acima da média (abertas/ativas) |
| Issues fechadas | 18 | Taxa de fechamento 56% |
| PRs abertos | 45 | Pipeline robusto |
| PR

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*