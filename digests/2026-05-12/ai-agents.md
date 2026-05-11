# Resumo diário do ecossistema de agentes de IA 2026-05-12

> Issues: 2 | PRs: 7 | Projetos cobertos: 7 | Gerado em: 2026-05-11 21:14 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório do Projeto NullClaw — 2026-05-12

---

## 1. Panorama do Dia

NullClaw mantém atividade moderada-alta com **7 PRs e 2 issues atualizadas** nas últimas 24h. Duas correções importantes foram mergeadas (#906, #905), ambas relacionadas à estabilidade do Discord gateway, indicando priorização de estabilidade. A comunidade permanece ativa em múltiplas frentes: segurança (#911), automação (#783) e infraestrutura de rede (#908). A ausência de releases formais sugere que o projeto está em fase de consolidação antes de um próximo lançamento.

---

## 2. Lançamentos

**Nenhuma release została wydana nelle ultime 24h.**

O projeto não publicou novas versões desde a última análise. A regressão crítica reportada em [#902](https://github.com/nullclaw/nullclaw/issues/902) afeta o provider `siliconflow` na versão 2026.5.x, o que pode exigir um hotfix caso a severidade se confirme em ambiente de produção.

---

## 3. Progresso do Projeto

### PRs Fechadas/Mergedas

| PR | Título | Impacto |
|----|--------|---------|
| [#906](https://github.com/nullclaw/nullclaw/pull/906) | fix(tools): defer shell sandbox auto-detection | Elimina subprocessos desnecessários durante inicialização; adiciona cobertura de regressão para lazy sandbox initialization |
| [#905](https://github.com/nullclaw/nullclaw/pull/905) | fix(discord): avoid Android gateway startup stalls | Corrige stalld startup em Android com retry DNS multi-address; mantém runtime A2A lazy em daemon mode |

### PRs Abertas em Destaque

| PR | Título | Complexidade |
|----|--------|--------------|
| [#911](https://github.com/nullclaw/nullclaw/pull/911) | feat(audit): privacy-preserving secret triage | LLM-based triage usando "privacy envelopes" (hash/entropy ao invés de valores brutos) |
| [#783](https://github.com/nullclaw/nullclaw/pull/783) | feat(cron): cron subagent, run history, JSON output | Motor de scheduler DB-backed com histórico completo; suporta skill/agent/shell jobs com TZ offsets |
| [#910](https://github.com/nullclaw/nullclaw/pull/910) | fix(discord): gateway liveness watchdog, stale resume URL clear | 4 fixes de estabilidade soak-testados em 4 arquiteturas diferentes (macOS arm64, aarch64/riscv64 Linux, Android riscv64) |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Atividade

**#909 — Performance stat. report and analysis** (1 comentário, 0 👍)  
Autor: jacktang | Criado: 2026-05-11

> *"Any idea to add agent performance statistical report, like token input/output, tool invokes (success and failed) and security warnings?"*

**Análise:** Demanda por observabilidade em nível de agente. O pedido abrange:
- Métricas de consumo de tokens (input/output)
- Taxas de sucesso/falha de tool invocations
- Alertas de segurança

Este é um pedido alinhado com tendências de MLOps/LLMOps e pode indicar necessidade de dashboarding integrado.

**#911 (PR) — Privacy-preserving secret triage** (0 comentários, 0 👍)  
Autor: gosIX22 | Criado: 2026-05-11

Solução elegante que classifica secrets via LLM sem expor valores brutos — apenas metadados (length, charset, Shannon entropy). Interessante para compliance (GDPR, SOC2).

---

## 5. Bugs e Estabilidade

### Regressão Crítica Reportada

**#902 — [CLOSED]** [bug] HostResolutionFailed when using siliconflow provider  
🔴 **Severidade:** Alta (regressão confirmada entre 2026.4.9 → 2026.5.x)  
📅 Criado: 2026-05-09 | Atualizado: 2026-05-11 | Comentários: 2

**Causa identificada:** Refactoring de HTTP/DNS client na versão 2026.5.x

> *"Exact same config, token, network works perfectly in 2026.4.9"*

**Status:** Issue fechada, sugerindo que a correção foi integrada via [#908](https://github.com/nullclaw/nullclaw/pull/908) (Project hktn).

### Correções de Estabilidade Mergedas

- **#906:** Shell sandbox auto-detection agora é lazy, evitando processos fantasma
- **#905:** Gateway Discord agora faz retry em todos os endereços DNS resolvidos (não só o primeiro)

### Problemas em Andamento

| # | Título | Status | Severidade Estimada |
|---|--------|--------|---------------------|
| [#908](https://github.com/nullclaw/nullclaw/pull/908) | Network/DNS handler HostResolutionFailed fix | OPEN | 🔴 Crítica (hotfix) |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Feature Request Principal

**#909 — Performance stat. report and analysis**

```markdown
Solicitações específicas:
├── Token usage tracking (input/output)
├── Tool invocation stats (success vs failed)
└── Security warnings aggregation
```

**Sinais de mercado:** Este pedido reflete a maturidade do ecossistema NullClaw — à medida que agentes são usados em produção, a necessidade de observabilidade cresce. O roadmap pode incluir:
- Telemetria nativa
- Dashboard de custos por agente
- Logs estruturados para integração com Prometheus/Grafana

### Features em Desenvolvimento

| PR | Feature | Estágio |
|----|---------|---------|
| [#783](https://github.com/nullclaw/nullclaw/pull/783) | Cron subagent com histórico DB-backed | Em revisão |
| [#911](https://github.com/nullclaw/nullclaw/pull/911) | Secret triage via LLM | Em revisão |
| [#883](https://github.com/nullclaw/nullclaw/pull/883) | Executable resolution pre-spawn | Em revisão |

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Dor | Fonte | Severidade |
|-----|-------|------------|
| **Regressão de DNS/HTTP em 2026.5.x** | #902 | 🔴 Alta |
| **Stalls em Android Discord gateway** | #905 (fix merged) | 🟡 Média |
| **Falta de observabilidade** | #909 | 🟡 Média |
| **Shell sandbox auto-detection prematura** | #906 (fix merged) | 🟢 Baixa (mas técnico) |

### Cenários de Uso Emergentes

1. **Multi-plataforma:** Android (riscv64), Linux (aarch64, riscv64), macOS arm64 — indica uso em edge/IoT
2. **Automação programada:** Feature request de cron + histórico sugere adoção em pipelines CI/CD
3. **Segurança corporativa:** Interest em secret scanning e privacy-preserving audit

### Satisfação Geral

**Mista com tendência positiva:**
- Bugs críticos estão sendo corrigidos rapidamente (regressão DNS em ~48h)
- Comunidade ativa (7 PRs em 24h)
- Foco em estabilidade no Discord gateway (4 fixes soak-tested)

---

## 8. Backlog que Merece Atenção

### Issues/PRs Sem Resposta ou Estagnadas

| Item | Idade | Prioridade | Motivo da Atenção |
|------|-------|------------|-------------------|
| [#783](https://github.com/nullclaw/nullclaw/pull/783) | ~35 dias (criado 2026-04-07) | 🔴 Alta | Cron subagent completo — adiciona scheduler DB-backed; muitos contributors potenciais aguardam review |
| [#883](https://github.com/nullclaw/nullclaw/pull/883) | ~9 dias (criado 2026-05-03) | 🟡 Média | Correção de bug Zig stdlib; segurança de child process |

### Recomendação de Priorização

1. **#783 (Cron subagent):** PR madura com escopo bem definido. Review poderia desbloquear feature altamente solicitada
2. **#883 (Probe):** Corrige vulnerabilidade de execve; deveria ser priorizada por segurança
3. **#908 (Project hktn):** Contém fix para regressão DNS #902 — deve ser validada e mergeada rapidamente

---

## Métricas Consolidada do Dia

| Métrica | Valor |
|---------|-------|
| Issues abertas/ativas | 1 |
| Issues fechadas | 1 |
| PRs abertas | 5 |
| PRs mergeadas/fechadas | 2 |
| Releases | 0 |
| Atividade total | 9 eventos |

**Índice de Saúde:** 🟢 **Bom** — Bugs críticos estão sendo addressed rapidamente; community PRs em volume saudável.

---

*Relatório gerado em 2026-05-12 com base em dados do GitHub API de nullclaw/nullclaw.*

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo — Ecossistema de Agentes de IA Open Source

**Data de referência:** 2026-05-12 | **Projetos analisados:** 7

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **alta atividade consolidada** em 12 de maio de 2026, com 195+ PRs e 174+ issues atualizados em 24 horas entre os sete projetos monitorados. **Hermes Agent** lidera em volume absoluto (50 PRs, 50 issues), enquanto **IronClaw** demonstra a taxa de integração mais saudável (48% dos PRs atualizados foram mergeados). A convergência técnica é evidente: todos os projetos priorizam **estabilidade de integrações de mensagens** (Telegram, Discord, WhatsApp), **resiliência de providers** (fallback entre modelos) e **observabilidade** (tracking de tokens, logs estruturados). Os projetos dividem-se em dois padrões distintos — aqueles em **modo de consolidação** (NullClaw, NanoBot, CoPaw) preparando releases formais após intenso desenvolvimento, e aqueles em **modo de refatoração agressiva** (Hermes Agent com 9 bugs P1 abertos, IronClaw com Reborn v2). A ausência de releases formais na maioria dos projetos indica uma fase de maturação pré-lançamento.

---

## 2. Comparação de Atividade

| Projeto | Issues Ativas (24h) | Issues Abertas | PRs Atualizados | PRs Abertos | PRs Merged/Fechados | Releases | Saúde | Avaliação |
|---------|---------------------|----------------|-----------------|-------------|---------------------|----------|-------|-----------|
| **NullClaw** | 2 | 1 | 7 | 5 | 2 | 0 | 🟢 | Bom |
| **NanoBot** | 10 | 7 | 21 | 16 | 5 | 0 | 🟡 | Atenção — 2 bugs críticos |
| **Hermes Agent** | 50 | 43 | 50 | ~42 | 8 | 1 (ad-hoc) | 🔴 | Crítico — 9 P1 bugs |
| **PicoClaw** | 12 | 4 | 28 | 20 | 8 | 1 (nightly) | 🟡 | Atenção — 3 bugs alta severidade |
| **IronClaw** | 36 | ~14 | 50 | ~26 | 24 | 0 | 🟢 | Excelente — Reborn v2 em进度 |
| **CoPaw** | 49 | 28 | 35 | 19 | 16 | 0 | 🟢 | Bom — 5 bugs críticos |
| **ZeroClaw** | 15 | ~9 | 48 | ~46 | 2 | 0 | 🔴 | Crítico — S0/S1 bugs + 153 commits revertidos |

**Destaques quantitativos:**
- **Maior volume absoluto:** Hermes Agent (50 issues + 50 PRs)
- **Maior taxa de integração:** IronClaw (24/50 = 48% merge rate)
- **Maior taxa de resolução de bugs:** CoPaw (46% PR merge + 43% issues fechadas)
- **Menor saúde aparente:** ZeroClaw (2 PRs merged vs. 46 abertos + bugs S0/S1)

---

## 3. Posicionamento do Projeto Principal

### Hermes Agent (NousResearch)

**Vantagens competitivas:**
- Maior base de código e comunidade (50 events/24h)
- Expansão para desktop app (Electron) — único com release ad-hoc de instaladores cross-platform
- Suporte multi-plataforma consolidado (Windows, macOS, Linux, NixOS, Android)
- Agente loop em refatoração (PR #23978) com middleware hooks — arquitetura mais modular

**Diferenças técnicas:**
- Sistema de skills local (`~/.hermes/skills/`) com versionamento ausente
- Integração nativa com modelos locais (Ollama Cloud, kimi-k2.6)
- Smart model routing com threshold de compressão configurável
- Desktop-first approach diferenciado dos pares

**Dívida técnica identificada:**
- 9 bugs P1 simultâneos (bloqueio OAuth Anthropic, reasoning blocks vazados, deadlocks CLI)
- 43 issues abertas com baixa taxa de fechamento (7/50 = 14%)
- Skills sem versionamento impacting produção

### Runner-ups de Destaque

| Projeto | Vantagem Principal | Gap vs. Hermes |
|---------|-------------------|----------------|
| **IronClaw** | Taxa de integração superior (48%), foco em segurança formal (trust-boundary hardening) | Volume menor, menor visibilidade de desktop |
| **CoPaw** | Maior taxa de resolução (46% PR merge, 43% issues fechadas), suporte multi-canal maduro | Sem desktop app, ecossistema menor |
| **ZeroClaw** | Suporte mais diverso de canais (Matrix, Discord, WhatsApp, Telegram) | Saúde crítica, 153 commits revertidos sem auditoria |

---

## 4. Focos Técnicos Compartilhados

Os sete projetos convergem em cinco áreas técnicas prioritárias, indicando padrões de mercado consolidados:

### 4.1 Resiliência de Providers e Fallback

| Projeto | Implementação |
|---------|--------------|
| **NanoBot** | PR #3749 (multi-tenant), PR #3743 (provider-hosted web search) |
| **CoPaw** | Issue #4011 (fallback model option), PR #4215 (custom shell config) |
| **ZeroClaw** | PR #6582 (DuckDuckGo 403 detection), PR #6587 (OpenAI-compatible reasoning fallback) |
| **PicoClaw** | Issue #2582 (API fallback chain: Brave→Tavily→Perplexity→DDG) |
| **NullClaw** | Issue #902 (regressão DNS siliconflow corrigida via PR #908) |

**Análise:** A dependência de providers únicos é identificada como risco sistêmico. Todos os projetos estão implementando mecanismos de fallback, indicando maturidade do ecossistema para cenários de produção.

### 4.2 Estabilidade de Canais de Mensagens

- **Telegram:** Bugs de stalls, long-reply failures, reasoning block leakage
- **Discord:** Gateway stability (NullClaw, Hermes Agent, ZeroClaw)
- **WhatsApp:** Interactive replies, polls (ZeroClaw PR #6297)
- **Matrix:** SDK upgrades causing recursion overflows (ZeroClaw #6530)
- **Slack:** Incoming webhooks (PicoClaw PR #2719)

### 4.3 Observabilidade e Telemetria

| Projeto | Feature Request |
|---------|----------------|
| **NullClaw** | #909 — Token usage, tool invocation stats, security warnings |
| **NanoBot** | #3731 — `/insights` command para token tracking |
| **Hermes Agent** | OpenTelemetry via distributed tracing |
| **CoPaw** | #4114 —链路追踪 (distributed tracing) |

**Síntese:** A demanda por tracking de custos (token usage) é transversal, refletindo adoção em cenários pay-per-token.

### 4.4 Segurança e Compliance

| Projeto | Foco |
|---------|------|
| **NullClaw** | #911 — Privacy-preserving secret triage com "privacy envelopes" |
| **IronClaw** | #3494 — Trust-boundary hardening baseline, redações de erros SQL |
| **Hermes Agent** | #7233 — Reasoning block leak no Telegram (vazamento de privacidade) |
| **CoPaw** | Heartbeat.md regression causing network failures |

### 4.5 Shell Compatibility e Sandbox

- **NullClaw:** Shell sandbox auto-detection lazy (#906)
- **CoPaw:** Shell environment compatibility (#3767), custom shell selection (#4215)
- **IronClaw:** HTTP tool disabled by default (#3034) — onboarding deficit

---

## 5. Análise de Diferenciação

### 5.1 Por Público-Alvo

| Segmento | Projetos Dominantes | Características |
|----------|--------------------|--------------------|
| **Enterprise/Multi-tenant** | IronClaw, Hermes Agent | Trust-boundary hardening, admin settings propagation, multi-user sessions |
| **Desenvolvedores Individuais** | NullClaw, PicoClaw | Foco em DX, edge deployment (Raspberry Pi, Android), cron/scheduler |
| **Mercado Chinês** | NanoBot, CoPaw | Suporte a provedores regionais (LongCat, DashScope, Volcano Engine), plataformas (DingTalk, Feishu) |
| **Corporativo/Cross-platform** | ZeroClaw | Matrix, Discord, WhatsApp, Telegram — comunicação empresarial |
| **Power Users/Desktop** | Hermes Agent | Desktop app Electron, CLI maduro, extensibilidade via skills |

### 5.2 Por Arquitetura

```
┌─────────────────────────────────────────────────────────────────┐
│                    ARQUITETURA COMPARATIVA                       │
├───────────────┬───────────────┬───────────────┬─────────────────┤
│ Projeto       │ Paradigma     │ Diferencial   │ Maturidade      │
├───────────────┼───────────────┼───────────────┼─────────────────┤
│ Hermes Agent  │ Loop refatorável│ Desktop app  │ Alta (mas P1)  │
│ IronClaw     │ Trust-boundary │ Formal methods│ Reborn v2       │
│ NullClaw     │ Modular tools  │ Edge/IoT      │ Consolidação    │
│ NanoBot      │ Plugin system  │ Multi-provider│ Alta atividade  │
│ PicoClaw     │ Self-evolution │ Agent AI loop │ Nightly builds  │
│ CoPaw        │ Tauri desktop  │ Multi-canal   │ Boa resolução   │
│ ZeroClaw     │ Multi-channel  │ Matrix native │ Crítico (S0/S1) │
└───────────────┴───────────────┴───────────────┴─────────────────┘
```

### 5.3 Por Estratégia de Release

| Estratégia | Projetos | Implicação |
|------------|----------|------------|
| **Nightly builds** | PicoClaw | CI/CD maduro,testing automatizado, baixa barreira para contributors |
| **Pre-release gate** | NullClaw | Consolidação antes de release, foco em estabilidade |
| **Ad-hoc releases** | Hermes Agent | Desktop app justifica release pontual para testing |
| **Postponed releases** | NanoBot, CoPaw, IronClaw | Preparando releases significativos após sprint intenso |

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração

| Projeto | Indicador | Classificação |
|---------|-----------|---------------|
| **IronClaw** | 24 PRs mergeados em 24h (48% rate) | 🔴 Iteração mais rápida |
| **CoPaw** | 16 PRs mergeados (46% rate) | 🟢 Alta velocidade |
| **PicoClaw** | 8 PRs mergeados + nightly release | 🟢 Consistente |
| **Hermes Agent** | 8 PRs mergeados vs. 43 issues abertas | 🟡 Desequilíbrio |
| **NullClaw** | 2 PRs mergeados, foco em estabilidade | 🟡 Moderado |
| **NanoBot** | 5 PRs mergeados, alta atividade (21 PRs) | 🟡 Promissor |
| **ZeroClaw** | 2 PRs mergeados vs. 46 abertos | 🔴 Estagnado |

### 6.2 Razão Issues Abertas/Resolvidas (24h)

| Projeto | Abertas | Fechadas | Razão | Saúde |
|---------|---------|----------|-------|-------|
| **IronClaw** | ~14 | 22 | 0.64 | 🟢 Consolida mais do que abre |
| **CoPaw** | ~28 | 21 | 1.33 | 🟡 Equilibrado |
| **PicoClaw** | 4 | 8 | 0.50 | 🟢 Limpa backlog |
| **NanoBot** | 7 | 3 | 2.33 | 🟡 Gera mais issues do que resolve |
| **Hermes Agent** | 43 | 7 | 6.14 | 🔴 Acúmulo crítico |
| **ZeroClaw** | ~9 | ~6 | 1.50 | 🟡 Gera mais do que fecha |

### 6.3 Perfil de Maturidade

```
Maturidade Alta (Consolidação):
├── NullClaw — Bugs críticos corrigidos, preparando release
├── IronClaw — Reborn v2 em finalização, alta taxa de merge
└── PicoClaw — Nightly builds consistentes, 3 bugs alta severidade pendentes

Maturidade Média (Atividade Intensa):
├── NanoBot — 21 PRs atualizados, 5 merged, multi-provider
├── CoPaw — Taxa de resolução 46%, features implementadas
└── Hermes Agent — Volume alto, mas 9 P1 bugs = dívida técnica

Maturidade Baixa (Atenção Crítica):
└── ZeroClaw — S0 data loss bug, 153 commits revertidos sem auditoria
```

---

## 7. Sinais de Tendência

### 7.1 Tendências de Mercado Extraídas

| Tendência | Evidência Transversal | Implicação |
|-----------|----------------------|------------|
| **Multi-provider fallback é requisito** | NanoBot, CoPaw, PicoClaw, ZeroClaw todos implementando | Usuários em produção não podem depender de provider único |
| **Edge/IoT deployment** | NullClaw (Android riscv64), PicoClaw (Raspberry Pi, Yocto), IronClaw (runtimes adapters) | Mercado além de cloud; agentes em dispositivos restritos |
| **Desktop app como diferencial** | Hermes Agent (Electron), CoPaw (Tauri 2.x), PicoClaw (WebUI evoluindo) | Experiência nativa vs. CLI/Web-only |
| **Observabilidade pay-per-token** | NullClaw #909, NanoBot #3731, Hermes tracing, CoPaw distributed tracing | Custos de LLM são preocupação real de usuários |
| **Privacidade e compliance** | NullClaw privacy envelopes, IronClaw trust-boundary, Hermes reasoning block leak | Empresas exigem controle de dados sensíveis |
| **Agent self-evolution** | PicoClaw PR #2847 (agent self-evolution loop) | Próxima fronteira: agentes que melhoram a si mesmos |
| **Arquitetura plugin** | NanoBot #3729 (self-describing tools), CoPaw plugin install/uninstall | Extensibilidade como competidor primário |
| **Multi-tenant isolation** | NanoBot #3744 (session-level MEMORY), IronClaw admin settings, CoPaw multi-bot | Mercado corporativo amadurecendo |

### 7.2 Bugs Recorrentes (Padrões Sistêmicos)

| Padrão | Projetos Afetados | Severidade Típica |
|--------|-------------------|-------------------|
| **OAuth/Autenticação quebra após upgrades** | Hermes (#15080), CoPaw (#4133, #4159), IronClaw (#3128) | P1/Alta |
| **DuckDuckGo search blocks/fails** | NanoBot (#2828), ZeroClaw (#4083), PicoClaw (#2582) | Alta/Média |
| **Telegram long-reply failures** | Hermes (#7233), IronClaw (#2903), NanoBot | P1 |
| **MCP/offline server crashes** | NanoBot (#3739), Hermes (#23997), NullClaw | Alta |
| **Heartbeat/network recovery** | CoPaw (#4017), Hermes (reconnection issues) | Alta |

### 7.3 Features Mais Solicitadas (Consenso)

| Feature | Projetos com Demanda | Prioridade |
|---------|---------------------|------------|
| **Token usage tracking / cost dashboard** | NullClaw, NanoBot, Hermes, CoPaw | 🔴 Cr

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-05-12

---

## 1. Panorama do Dia

NanoBot mantém **alta atividade de desenvolvimento** em 12 de maio de 2026. Nas últimas 24 horas, o projeto registrou 21 PRs atualizados (5 merged/fechados) e 10 issues (3 fechadas, 7 abertas). O ritmo de contributions é intenso, com foco em três eixos principais: (1) **estabilidade e bug fixes** — incluindo correções críticas de WebSocket, MCP e provedores; (2) **extensibilidade** — arquitetura de plugins, suporte a novos provedores e ferramentas de auto-correção do agente; e (3) **experiência do usuário** — comandos slash, tracking de tokens e isolamento de sessões. Não houve novos releases, indicando que a equipe prioriza consolidação antes de corte de versão.

---

## 2. Lançamentos

**Nenhum release publicado nas últimas 24 horas.**

O projeto encontra-se em fase ativa de desenvolvimento com múltiplas PRs em review, sinalizando que um novo release está em preparação.

---

## 3. Progresso do Projeto

### PRs Merged/Fechadas (5 total)

| # | Título | Autor | Impacto |
|---|--------|-------|---------|
| [#3673](https://github.com/HKUDS/nanobot/pull/3673) | fix(websocket): pass media through in _dispatch_envelope | ivelin | **Crítico** — Corrigia perda silenciosa de anexos de imagem via WebSocket; agora imagens são corretamente transmitidas ao agente |
| [#3733](https://github.com/HKUDS/nanobot/pull/3733) | fix(webui): shim crypto.randomUUID for non-secure contexts | NearlCrews | **Bug fix** — WebUI passível de crash ao rodar em contexto não-HTTPS (acesso LAN); solução de compatibilidade implementada |
| [#3734](https://github.com/HKUDS/nanobot/pull/3734) | fix(providers): wire MiMo to thinking_type (#3585) | pixan-ai | **Correção de feature** — `reasoning_effort: "none"` agora desativa corretamente o modo de raciocínio no Xiaomi MiMo |
| [#3736](https://github.com/HKUDS/nanobot/pull/3736) | feat: add LongCat (美团) provider support | JiajunBernoulli | **Novo provedor** — Adicionado suporte ao provedor LongCat (Meituan), expandindo opções para o mercado chinês |
| [#3740](https://github.com/HKUDS/nanobot/pull/3740) | fix(mcp): probe HTTP port before connecting | chengyongru | **Estabilidade** — Evita crash do event loop quando servidor MCP (streamableHttp/SSE) está inalcançável |

**Destaque:** A correção #3734 fecha o issue #3585, resolvendo uma regressão onde `reasoning_effort: null` não desabilitava o modo de raciocínio no MiMo. A correção #3740 endereça um crash crítico do event loop que poderia travar o processo inteiro.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários/reações)

| # | Título | Status | Comentários | 👍 | Tema |
|---|--------|--------|-------------|----|------|
| [#2828](https://github.com/HKUDS/nanobot/issues/2828) | DuckDuckGo web search hangs entire system | ✅ Closed | 5 | 1 | **Bug crítico de estabilidade** |
| [#3650](https://github.com/HKUDS/nanobot/issues/3650) | Configure bot name and icon | ✅ Closed | 3 | 0 | UX customization |
| [#3744](https://github.com/HKUDS/nanobot/issues/3744) | session级别MEMORY功能请求 | 🟡 Open | 1 | 0 | **Arquitetura multi-usuário** |

**Análise:**
- **Issue #2828 (DuckDuckGo hang)** foi **fechada** após 36 dias aberta. O hang de sistema ao usar DuckDuckGo representa uma falha grave — o agente fica completamente irresponsivo, exigindo force-stop. Este é o problema de estabilidade mais sério do período.
- **Issue #3744** reflete uma necessidade real de arquitetura: quando múltiplos usuários de IM (WeChat, Feishu, Telegram) compartilham o mesmo agente, os arquivos `USER.md` e `MEMORY.md` precisam de isolamento por sessão/usuário. A solução atual não escala.
- **Issue #3650**, mesmo com baixa reação, demonstra demanda por customização visual do bot em agent mode — configuração de nome e ícone via `config.json`.

---

## 5. Bugs e Estabilidade

### Bugs abertos (5 novos)

| Severidade | # | Título | Descrição |
|------------|---|--------|-----------|
| 🔴 **Crítica** | [#3739](https://github.com/HKUDS/nanobot/issues/3739) | mcp服务未启动时报错 | Nanobot agent crasha ao iniciar sem MCP configurado — impacto em novos usuários |
| 🟠 **Alta** | [#3746](https://github.com/HKUDS/nanobot/issues/3746) | WebUI: markdown renderer pré-carrega chunk >1 MB | WebUI carrega 1+ MB de código de syntax highlighting mesmo quando não há blocos de código na sessão — performance desnecessária |
| 🟠 **Alta** | [#2828](https://github.com/HKUDS/nanobot/issues/2828) | DuckDuckGo web search hangs entire system | Sistema inteiro trava ao usar DuckDuckGo — **já fechado, mas problema recorrente** |
| 🟡 **Média** | [#3737](https://github.com/HKUDS/nanobot/issues/3737) | 企业微信: arquivos não têm nome reconhecido | WeChat Enterprise envia arquivos sem identificação correta de filename — integrações corporativas afetadas |

**Análise:** A severidade dos bugs é concentrada em **estabilidade de integrações** (MCP, WeChat Enterprise) e **performance do frontend** (WebUI). O bug de DuckDuckGo (#2828), mesmo fechado, pode indicar uma vulnerabilidade sistêmica no handler de search que merece revisão preventiva.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features solicitadas (7 issues)

| # | Título | Categoria | Relevância Estratégica |
|---|--------|-----------|------------------------|
| [#3744](https://github.com/HKUDS/nanobot/issues/3744) | Session-level MEMORY功能 | **Arquitetura** | ⭐⭐⭐ Multi-usuário/team collaboration |
| [#3742](https://github.com/HKUDS/nanobot/issues/3742) | Support /model slash command | CLI/UX | ⭐⭐⭐ Troca dinâmica de provider & model |
| [#3741](https://github.com/HKUDS/nanobot/issues/3741) | Support provider-hosted web search tools | **Provider** | ⭐⭐⭐ Azure OpenAI + native web search |
| [#3731](https://github.com/HKUDS/nanobot/issues/3731) | `/insights` command for token usage tracking | Observability | ⭐⭐⭐ Controle de custos em pay-per-token |
| [#3650](https://github.com/HKUDS/nanobot/issues/3650) | Configure bot name and icon | UX | ⭐⭐ Branding/customização |
| [#3746](https://github.com/HKUDS/nanobot/issues/3746) | WebUI markdown renderer optimization | Performance | ⭐⭐ Performance do frontend |

### PRs em desenvolvimento com mesma direção

| # | Título | Autor | Objetivo |
|---|--------|-------|----------|
| [#3750](https://github.com/HKUDS/nanobot/pull/3750) | Add Atomic Chat provider | yanalialiuk | Novo provedor local (OpenAI-compatible) |
| [#3749](https://github.com/HKUDS/nanobot/pull/3749) | Multi-tenant WebUI accounts | hoangtuanm | **Isolamento per-user state** — suporte multi-tenant |
| [#3729](https://github.com/HKUDS/nanobot/pull/3729) | Plugin architecture with self-describing tools | chengyongru | **Arquitetura de plugins** — extensibilidade |
| [#3728](https://github.com/HKUDS/nanobot/pull/3728) | LoopDetectHook + ReflectRetryHook | MuataSr | Auto-correção do agente em loops e retries |
| [#3745](https://github.com/HKUDS/nanobot/pull/3745) | Stream tool progress SSE events | boogieLing | Eventos SSE para tool progress |
| [#3743](https://github.com/HKUDS/nanobot/pull/3743) | Support provider-hosted web search | Colin3191 | Web search nativo de provider |
| [#3735](https://github.com/HKUDS/nanobot/pull/3735) | Add /insights for token usage | morandot | Tracking histórico de tokens |
| [#3408](https://github.com/HKUDS/nanobot/pull/3408) | MGP sidecar for cross-session memory | LarFii | Memória de longo prazo governada |

**Sinais claros de roadmap:**
1. **Multi-usuário e multi-tenant** — Issues #3744 e PR #3749 indicam que a equipe está atacando isolamento de sessões/usuários
2. **Tool architecture** — PR #3729 reformula o sistema de tools para padrão plugin auto-descritivo
3. **Provider ecosystem** — Novos provedores (Atomic Chat, LongCat, Azure web search) expandem compatibilidade
4. **Observabilidade** — Tracking de tokens (#3735) responde à demanda de usuários pay-per-token

---

## 7. Resumo de Feedback dos Usuários

### Dores relatadas (Issues abertas)

| Dor | Issue | Contexto |
|-----|-------|----------|
| **Sistema trava com DuckDuckGo** | [#2828](https://github.com/HKUDS/nanobot/issues/2828) | Usuários não conseguem cancelar processo nem shutdown graceful; exigindo force-stop |
| **Sem visibilidade de custos** | [#3731](https://github.com/HKUDS/nanobot/issues/3731) | Usuários de OpenRouter/DeepSeek não têm como rastrear gastos dentro do nanobot |
| **Instabilidade com MCP offline** | [#3739](https://github.com/HKUDS/nanobot/issues/3739) | Usuários novos encontram erro ao tentar iniciar sem configurar MCP |
| **Sem controle de modelo/provider** | [#3742](https://github.com/HKUDS/nanobot/issues/3742) | Usuários na China continental com instabilidade de rede precisam trocar provider dinamicamente |
| **Nomes de arquivos corrompidos no WeChat** | [#3737](https://github.com/HKUDS/nanobot/issues/3737) | Usuários corporativos não conseguem identificar arquivos recebidos |

### Cenários de uso observados

- **Multi-agente em produção:** Issue #3744 evidencia uso em ambientes team collaboration com múltiplos usuários IM compartilhando um único agente
- **Multi-provider com fallback:** Demanda por trocar providers dinamicamente (#3742) indica cenários de rede instável
- **Customização de branding:** Issue #3650 sugere uso em contextos comerciais onde o bot precisa ter identidade própria

### Satisfação/Insatisfação

| Indicador | Observação |
|-----------|------------|
| 🔧 **Atividade de contributors** | Alta — 21 PRs em 24h indica comunidade ativa e engajada |
| 🐛 **Bug reports** | 5 bugs novos em 24h — possível aceleração de desenvolvimento com regressões |
| 💡 **Feature requests** | 7 requests — usuários pedindo extensibilidade (multi-usuário, tokens, plugins) |
| ⚠️ **Bugs críticos recorrentes** | DuckDuckGo hang (reaberto?) — indicador de dívida técnica |

---

## 8. Backlog que Merece Atenção

### Issues antigas sem resolução

| # | Título | Criado | Atualizado | Dias Aberta | Prioridade |
|---|--------|--------|------------|-------------|------------|
| [#2828](https://github.com/HKUDS/nanobot/issues/2828) | DuckDuckGo hangs system | 2026-04-05 | 2026-05-11 | **36 dias** | 🔴 Crítica |

> ⚠️ **Nota:** A issue #2828 foi marcada como "CLOSED" mas envolve um bug de stability crítico (hang de sistema inteiro). Se a solução não foi adequadamente validada, o problema pode reincidir.

### PRs abertas há >7 dias sem merge

| # | Título | Criado | Idade | Complexidade |
|---|--------|--------|-------|--------------|
| [#3621](https://github.com/HKUDS/nanobot/pull/3621) | Production-ready multi-role agent squad for HF Spaces | 2026-05-04 | **8 dias** | Alta — orquestração multi-agente |
| [#3408](https://github.com/HKUDS/nanobot/pull/3408) | MGP sidecar for cross-session memory | 2026-04-23 | **19 dias** | Alta — integração de protocolo externo |
| [#3693](https://github.com/HKUDS/nanobot/pull/3693) | Centralize LLM concurrency gate | 2026-05-08 | **4 dias** | Média — throttle de background tasks |

**Ação recomendada:** O PR #3621 em HF Spaces representa uma feature de deployment importante e está parado há 8 dias — ideal para review. O PR #3408 (MGP sidecar) com 19 dias pode indicar blockers de design ou necessidade de feedback da equipe core.

---

## Métricas Consolidada do Dia

| Indicador | Valor | Tendência |
|-----------|-------|-----------|
| Issues abertas/ativas | 7 | Neutra |
| Issues fechadas | 3 | Positiva |
| PRs abertos | 16 | Neutra |
| PRs merged/fechados | 5 | **Positiva** |
| Bugs críticos abertos | 2 | ⚠️ Alerta |
| Features solicitadas | 7 | Alta demanda |
| Novas releases | 0 | Sem release |
| Contributors ativos (estimativa) | ~10-15 | **Alta** |

---

*Relatório gerado automaticamente com base nos dados do GitHub de [HKUDS/nanobot](https://github.com/HKUDS/nanobot) em 2026-05-12.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent
## NousResearch/hermes-agent — 2026-05-12

---

## 1. Panorama do dia

O projeto Hermes Agent apresenta **alta atividade** em 12 de maio de 2026, com 50 issues e 50 PRs atualizados nas últimas 24 horas. A distribuição de 43 issues abertas versus apenas 7 fechadas indica um acúmulo de trabalho pendente, enquanto 8 PRs foram merged/fechados demonstrando progresso na integração de mudanças. O destaque do dia é a release ad-hoc de instaladores para testes do desktop app (#20059), sinalizando avanço significativo no produto desktop. A comunidade demonstra engajamento contínuo com issues de bugs de alta severidade (P1) demandando atenção imediata, particularmente relacionados a deadlocks no CLI, vazamento de blocos internos no Telegram e problemas de contexto com modelos locais.

---

## 2. Lançamentos

### Release Ad-Hoc: desktop-pr20059-installers

| Artefato | Hash SHA-256 |
|----------|--------------|
| Hermes-0.0.0-mac-arm64.dmg | `a598cd3b88df7381a4c52e4c4c65d4c...` (truncado) |

**Natureza:** Release de teste para smoke tests de UX de instaladores no PR #20059. Não é uma release estável assinada.

**Plataformas incluídas:**
- macOS ARM64 (DMG)
- Windows x64 + ARM64 (NSIS)
- Linux x64 + ARM64 (AppImage)

**Commit de origem:** `bff052d61` na branch `bb/gui`

**Nota de migração:** Esta build ad-hoc destina-se exclusivamente a validação de instaladores no contexto do PR #20059. Usuários em produção devem aguardar release estável oficial.

🔗 [NousResearch/hermes-agent PR #20059](https://github.com/NousResearch/hermes-agent/pull/20059)

---

## 3. Progresso do Projeto

### PRs Merged/Fechados Hoje

| PR | Título | Impacto |
|----|--------|---------|
| #24006 | RAN-1447: Add Ryan Projects + Ideas dashboard | Plugin de dashboard para gerenciamento de projetos |
| #23853 | /reload-mcp deadlock: _prompt_text_input input() blocks daemon thread | **Correção crítica de deadlock** no reload de MCP |
| #23920 | '/new' confirmation freezes session | Correção de freeze em confirmação de destructive slash |
| #13618 | TUI approval overlay freezes terminal | Correção de freeze no overlay de aprovação |
| #23694 | Terminal hang on /new or /clear (Windows beta) | Suporte Windows para comandos destrutivos |
| #23949 | kimi-k2.6 on Ollama Cloud context detection | Correção de detecção de context window |

### PRs Abertos com Alto Impacto

| PR | Título | Segmento |
|----|--------|----------|
| #23978 | refactor(agent): extract AgentLoop with middleware hooks (Phases 1-3) | Refatoração arquitetural do core agent |
| #24008 | api_server: honor the `model` field in /v1/chat/completions | Compatibilidade OpenAI melhorada |
| #24009 | feat(browser): add pagination to web_extract and browser_snapshot | Extensão de capacidades web |
| #24013 | feat(ui-tui): resolve markdown links to readable page titles | UX melhorada no TUI |

🔗 [NousResearch/hermes-agent PRs Recentes](https://github.com/NousResearch/hermes-agent/pulls?q=is%3Apr+updated%3A2026-05-11..2026-05-12)

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (Comentários)

**#15080 — Bug P1: Rejeição OAuth Anthropic (HTTP 400)** — 8 comentários
- **Problema:** Usuários de Claude Max 20x com token OAuth válido em `~/.claude/.credentials.json` recebem rejeição HTTP 400 em todas as requisições ao endpoint native Anthropic.
- **Impacto:** Bloqueio total para assinantes premium.
- **Urgência:** Alta — afeta usuários pagantes.

🔗 [Issue #15080](https://github.com/NousResearch/hermes-agent/issues/15080)

**#6607 — Bug P3: checkpoint_manager subprocess cwd inválido** — 8 comentários
- **Problema:** `Path.resolve()` no Linux/macOS não valida existência do diretório, causando `FileNotFoundError` quando `cwd` aponta para diretório inexistente.
- **Caráter:** Edge case em gestão de checkpoints.

🔗 [Issue #6607](https://github.com/NousResearch/hermes-agent/issues/6607)

**#7798 — Bug P1: smart_model_routing e compressão incorreta** — 4 comentários, 1 thumbs up
- **Problema:** Ao rotear para modelo barato, `ContextCompressor` usa threshold do modelo barato, causando compressão prematura.

🔗 [Issue #7798](https://github.com/NousResearch/hermes-agent/issues/7798)

**#7233 — Bug P1: Bloco de raciocínio interno vazado no Telegram** — 3 comentários
- **Problema:** Após update/resume de sessão Telegram, blocos `Reasoning` são renderizados no chat visível ao usuário.
- **Impacto:** Exposição de thinking chain interno — risco de privacidade.

🔗 [Issue #7233](https://github.com/NousResearch/hermes-agent/issues/7233)

**#22696 — Bug P2: Parser tool_use falha intermitentemente** — 3 comentários
- **Problema:** Parser falha quando closing tags aparecem dentro de strings JSON no campo `content`.

🔗 [Issue #22696](https://github.com/NousResearch/hermes-agent/issues/22696)

### PRs com Maior Atividade

**#20059 — Add Hermes desktop app** — Desktop app Electron com screenshots
- Inclui build de testes para Windows, macOS e Linux.
- Representa expansão significativa para desktop.

🔗 [PR #20059](https://github.com/NousResearch/hermes-agent/pull/20059)

---

## 5. Bugs e Estabilidade

### Severidade P1 (Crítica — 9 issues)

| ID | Título | Status | Componentes |
|----|--------|--------|-------------|
| #15080 | OAuth Anthropic rejeição HTTP 400 | OPEN | provider/anthropic, auth |
| #7798 | smart_model_routing compressão incorreta | OPEN | comp/agent, comp/cli |
| #7233 | Reasoning block vazado no Telegram | OPEN | gateway, platform/telegram |
| #23943 | Nix package omite locales (i18n keys brutas) | OPEN | gateway, platform/telegram, nix |
| #23767 | Oversized prompts com modelos locais | OPEN | comp/agent |
| #23997 | enabled_toolsets rejeita MCP silenciosamente | OPEN | comp/tools, comp/cron, tool/mcp |
| #24012 | Agent tenta alternativas não verificadas após falhas | OPEN | comp/agent |
| #23853 | /reload-mcp deadlock (já fechado) | CLOSED | comp/cli, tool/mcp |
| #23920 | '/new' confirmation freezes (já fechado) | CLOSED | comp/cli |

### Severidade P2 (Alta — 8 issues)

| ID | Título | Status |
|----|--------|--------|
| #23949 | kimi-k2.6 context detection 32K vs 256K | CLOSED |
| #22696 | tool_use parser falha com JSON strings | OPEN |
| #23799 | OpenClaw fleet respawn por invocação | OPEN |
| #22879 | max_tokens hardcoded quebra OpenRouter | OPEN |
| #24000 | provider: nous fallback 32K tokens | OPEN |
| #23838 | Feishu adapter strip Markdown em tabelas | OPEN |

### Severidade P3 (Média — 11 issues abertas)

Destaques:
- **#20352:** Skills em `~/.hermes/skills/` sem versionamento
- **#22620:** Skill list bloat causa context window inflation
- **#20595:** Memory hygiene é advisory-only — bloat recorrente
- **#24007:** Habit reminders silenciosamente decaem

🔗 [Todas as Issues Abertas P1/P2](https://github.com/NousResearch/hermes-agent/issues?q=is%3Aissue+is%3Aopen+label%3AP1+OR+label%3AP2)

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Recentes com Maior Prioridade

**#22879 — max_tokens configurável por perfil (P2)**
- **Problema:** `max_tokens` hardcoded para máximo do modelo causa HTTP 402 no OpenRouter mesmo com crédito disponível.
- **Proposta:** Permitir configuração `max_tokens` por perfil em `config.yaml`.
- **Relevância:** Crítico para usuários OpenRouter.

🔗 [Issue #22879](https://github.com/NousResearch/hermes-agent/issues/22879)

**#21850 — Discord: forward edited messages (P2)**
- **Proposta:** Bot deve responder quando mensagem editada menciona o bot pela primeira vez.
- **Autor:** sjoerdmaessen

🔗 [PR #21850](https://github.com/NousResearch/hermes-agent/pull/21850)

**#21854 — Reference images em image_generate (P3)**
- Adiciona parâmetros `input_images` e `background` para geração de imagens.

🔗 [PR #21854](https://github.com/NousResearch/hermes-agent/pull/21854)

**#21855 — Resolver GPT context em Codex OAuth (P2)**
- Corrige detecção de context length para assinaturas ChatGPT/Codex OAuth.

🔗 [PR #21855](https://github.com/NousResearch/hermes-agent/pull/21855)

**#24010 — DuckDuckGo backend (P3)**
- Adiciona `duckduckgo`/`ddg` como backend alternativo para web search, eliminando necessidade de dependências externas.

🔗 [PR #24010](https://github.com/NousResearch/hermes-agent/pull/24010)

**#23978 — AgentLoop refactor com middleware hooks (P3)**
- Refatoração arquitetural em 5 fases decompondo loop de 3128 linhas em abstrações testáveis.

🔗 [PR #23978](https://github.com/NousResearch/hermes-agent/pull/23978)

### Features Solicitadas Recorrentes

| Categoria | Issues | Tema |
|-----------|--------|------|
| Gateway | #20059, #19413, #21850, #21868 | Expansão plataformas (Desktop, Discord, Feishu, Telegram) |
| Agente | #23978, #22620, #20352 | Performance, skill management, refatoração |
| Tools | #24009, #24010, #21854, #11424 | Web extraction, imagem, email (JMAP) |
| UX/CLI | #24013, #23965, #24017 | Links legíveis, Telegram context, ANSI formatting |

---

## 7. Resumo de Feedback dos Usuários

### Dores Críticas Reportadas

**1. Problemas de Autenticação e Provedores (P1)**
- Usuários Claude Max enfrentam bloqueios completos por bugs OAuth (#15080).
- OpenRouter quebra com HTTP 402 por config rígida de `max_tokens` (#22879).
- Provider `nous` não inicializa com fallback de 32K tokens (#24000).

**2. Estabilidade CLI/TUI (P1)**
- Deadlocks recorrentes em comandos destrutivos (`/new`, `/clear`, `/reload-mcp`) — já parcialmente corrigidos mas ainda há issues abertas (#23920, #23853, #23694).
- TUI overlay congela terminal em interações de aprovação (#13618).

**3. Plataformas Não-Linux (P1)**
- Windows: hang em confirmação de destructive commands (#23694).
- NixOS: raw i18n keys expostas no Telegram (#23943).
- Telegram: vazamento de reasoning blocks e perda de contexto em approvals (#7233, #23965).

**4. Memory e Tool Management (P2/P3)**
- Hygiene checks são "advisory-only" — entries ruins persistem (#20595).
- OpenClaw fleet respawna desnecessariamente por invocação (#23799).
- MCP tools ausentes em cron sessions por silenciosa rejeição (#23997).

### Cenários de Uso Identificados

| Cenário | Issues Relacionadas | Frequência |
|---------|---------------------|------------|
| Claude Max subscription | #15080 | Alta |
| OpenRouter com múltiplos modelos | #22879 | Média |
| Discord bot deployment | #21850, #19413 | Alta |
| Windows Scheduled Tasks | #23817 | Baixa |
| NixOS deployments | #23943 | Baixa |
| Habit tracking workflows | #24007 | Média |
| Local models (Ollama) | #23949, #23767 | Alta |

### Sentimento Geral

**Positivo:**
- Progresso visível em desktop app (#20059).
- Correções de deadlocks CLIs sendo merged rapidamente.
- Engajamento da comunidade em múltiplas plataformas.

**Preocupações:**
- Acúmulo de 43 issues abertas com baixa taxa de fechamento (7/50 = 14%).
- Bugs P1 antigos (#6607 desde 2026-04-09 sem resolução).
- Falta de versionamento em skills критически impacts produção.

🔗 [Feedback por Label](https://github.com/NousResearch/hermes-agent/labels?q=feedback)

---

## 8. Backlog que Merece Atenção

### Issues Antigas Sem Resolution (idade > 14 dias, alta severidade)

| ID | Título | Criado | Prioridade | Status | Notas |
|----|--------|--------|-----------|--------|-------|
| #6607 | checkpoint_manager subprocess cwd inválido | 2026-04-09 | P3 | OPEN | 33 dias, 8 comentários — edge case mas risco de crash |
| #7233 | Reasoning block vazado no Telegram | 2026-04-10 | P1 | OPEN | 32 dias, 3 comentários — privacidade |
| #15080 | OAuth Anthropic HTTP 400 | 202

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-05-12

---

## 1. Panorama do Dia

O PicoClaw mantém um ritmo de desenvolvimento intenso com **12 issues e 28 PRs atualizados nas últimas 24h**, indicando alta atividade comunitária. A release nightly `v0.2.8-nightly.20260511` foi publicada, sinalizando progresso contínuo em direção a uma versão estável. A comunidade demonstra foco em **estabilidade de canais** (Telegram, Slack), **melhorias em providers** (DeepSeek, Gemini, Codex) e **ergonomia do agente** (self-evolution, streaming, async delivery). O volume de PRs abertos (20) sugere um pipeline saudável de contribuições, enquanto 8 PRs foram mergeados/fechados, demonstrando capacidade de revisão ativa pelos mantenedores.

---

## 2. Lançamentos

### Release Disponíveis
| Versão | Tipo | Status |
|--------|------|--------|
| `v0.2.8-nightly.20260511.6e6293e5` | Nightly Build | Disponível |

**Notas da Release:**
- **Build:** Automated nightly para `v0.2.8`
- **Aviso:** Pode ser instável; uso em produção não recomendado
- **Changelog completo:** https://github.com/sipeed/picoclaw/compare/v0.2.8...main
- **Sem breaking changes documentadas** nesta build automática

> ⚠️ **Nota de Migração:** Não há changelog formal detalhado para esta nightly. Usuários em versões anteriores devem consultar o diff no link acima antes de atualizar.

---

## 3. Progresso do Projeto

### PRs Mergeados/Fechados (Últimas 24h)

| PR | Autor | Descrição | Impacto |
|----|-------|-----------|---------|
| [#2581](https://github.com/sipeed/picoclaw/pull/2581) | astrada-c | Recover Codex output from streamed message events | **Crítico** — Corrige responses vazios no Codex OAuth |
| [#2565](https://github.com/sipeed/picoclaw/pull/2565) | stpwin | preserve explicit `mention_only=false` in GroupTriggerConfig | **Bugfix** — Configuração de grupos não era persistida corretamente |
| [#2719](https://github.com/sipeed/picoclaw/pull/2719) | loafoe | feat(channels): add slack_webhook output-only channel | **Novo Canal** — Suporte a Slack via Incoming Webhooks |
| [#2831](https://github.com/sipeed/picoclaw/pull/2831) | SiYue-ZO | Provider selection and model form foundation | **Backend API** — Base para CRUD de modelos |
| [#2847](https://github.com/sipeed/picoclaw/pull/2847) | lxowalle | Feat/agent self evolution | **Feature Maior** — Loop de auto-evolução de agentes |

### Destaques de Funcionalidades Entregues

**1. Canal Slack Webhook** ([#2719](https://github.com/sipeed/picoclaw/pull/2719))
- Suporte a múltiplos webhooks com fallback
- Formatação Block Kit com conversão markdown-to-mrkdwn
- Renderização de tabelas narrow formatadas

**2. Agent Self-Evolution** ([#2847](https://github.com/sipeed/picoclaw/pull/2847))
- Loop seguro e configurável para auto-melhoria
- Gravação de outcomes bem-sucedidos
- Geração de skill drafts via clustering de padrões
- Validação de candidatos antes da aplicação

**3. Codex Output Recovery** ([#2581](https://github.com/sipeed/picoclaw/pull/2581))
- Captura de `response.output_item.done` items
- Rebuild de `response.output` quando payload completo está vazio
- Tests de regressão para fallback paths

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| Issue | Tipo | Comentários | Reações | Tema |
|-------|------|-------------|---------|------|
| [#2674](https://github.com/sipeed/picoclaw/issues/2674) | Bug | 3 | 👍 4 | Codex OAuth: resposta vazia com ChatGPT backend |
| [#2046](https://github.com/sipeed/picoclaw/issues/2046) | Bug | 6 | 👍 1 | PicoClaw não chama tool com LongCat API |
| [#2590](https://github.com/sipeed/picoclaw/issues/2590) | Bug | 4 | 👍 0 | Serviço não inicia no Android app |
| [#2582](https://github.com/sipeed/picoclaw/issues/2582) | Enhancement | 3 | 👍 0 | API Fallback Chain para web_search (Brave→Tavily→Perplexity→DDG) |

### Análise dos Temas

**1. Estabilidade de Providers (Mais Crítico)**
A issue [#2674](https://github.com/sipeed/picoclaw/issues/2674) destaca um problema sério: OAuth do Codex contra `chatgpt.com` retorna respostas vazias. A comunidade reporta o erro "model returned an empty response", indicando problemas no parsing de streaming. Este é um **bloqueador para usuários do Codex**.

**2. Web Search API (Demanda Frequente)**
[#2232](https://github.com/sipeed/picoclaw/issues/2232) (SerpAPI) e [#2582](https://github.com/sipeed/picoclaw/issues/2582) (fallback chain) mostram que há demanda ativa por:
- Integração com SerpAPI (250 buscas/mês gratuitas)
- Mecanismo automático de fallback entre provedores

**3. Suporte a Hardware (Embeddings)**
[#2675](https://github.com/sipeed/picoclaw/issues/2675) solicita suporte oficial para Raspberry Pi e Pi Zero 2W, indicando uso em edge devices.

---

## 5. Bugs e Estabilidade

### Bugs Abertos (Por Severidade)

| Severidade | Issue | Descrição | Impacto |
|------------|-------|-----------|---------|
| 🔴 Alta | [#2674](https://github.com/sipeed/picoclaw/issues/2674) | Codex OAuth retorna resposta vazia | Bloqueia uso do Codex |
| 🔴 Alta | [#2590](https://github.com/sipeed/picoclaw/issues/2590) | Serviço não inicia no Android | App Android inutilizável |
| 🔴 Alta | [#2796](https://github.com/sipeed/picoclaw/issues/2796) | Histórico mostra apenas última mensagem do usuário | Perda de contexto em conversas |
| 🟡 Média | [#2780](https://github.com/sipeed/picoclaw/issues/2780) | Reload config quebra voice recognition | Funcionalidade ASR impactada |
| 🟡 Média | [#2690](https://github.com/sipeed/picoclaw/issues/2690) | Gateway sem canais na v0.2.7 | Configuração default falha |
| 🟡 Média | [#2684](https://github.com/sipeed/picoclaw/issues/2684) | Endereço解析错误 em第三方技能 | Busca de skills falha |
| 🟢 Baixa | [#2046](https://github.com/sipeed/picoclaw/issues/2046) | Tool não chamada com LongCat API | Integração específica |

### Bugs Recentemente Fechados
- ✅ [#2581](https://github.com/sipeed/picoclaw/pull/2581) — Codex output recovery (mergeado)
- ✅ [#2565](https://github.com/sipeed/picoclaw/pull/2565) — Config `mention_only=false` persistence (mergeado)
- ✅ [#2780](https://github.com/sipeed/picoclaw/issues/2780) — Voice recognition após reload (fechado)

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Propostas (Issues Abertas)

| Issue | Feature | Complexidade | Sinais de Roadmap |
|-------|---------|--------------|-------------------|
| [#2232](https://github.com/sipeed/picoclaw/issues/2232) | SerpAPI integration | Média | Busca por alternativas ao Brave (pago) |
| [#2582](https://github.com/sipeed/picoclaw/issues/2582) | Web Search API Fallback Chain | Média | Resiliência de provedores |
| [#2675](https://github.com/sipeed/picoclaw/issues/2675) | Raspberry Pi / Pi Zero 2W support | Baixa | Expansão para edge devices |
| [#2829](https://github.com/sipeed/picoclaw/issues/2829) | Async result delivery policy | Alta | Orquestração de subagentes |
| [#2848](https://github.com/sipeed/picoclaw/issues/2848) | Unified diff preview para edit_file | Média | DX improvements |

### PRs Abertos (Features em Desenvolvimento)

| PR | Feature | Autor | Estado |
|----|---------|-------|--------|
| [#2763](https://github.com/sipeed/picoclaw/pull/2763) | Gemini web search provider | bogdanovich | Aberto |
| [#2758](https://github.com/sipeed/picoclaw/pull/2758) | Telegram media group handling | bogdanovich | Aberto |
| [#2853](https://github.com/sipeed/picoclaw/pull/2853) | ChatStream real-time token streaming | loafoe | Aberto |
| [#2851](https://github.com/sipeed/picoclaw/pull/2851) | Yocto/OpenEmbedded layer (meta-picoclaw) | skrimby1 | Aberto |
| [#2849](https://github.com/sipeed/picoclaw/pull/2849) | Telegram guest mode | stolyarchuk | Aberto |
| [#2752](https://github.com/sipeed/picoclaw/pull/2752) | Model configuration workflows | SiYue-ZO | Aberto |
| [#2830](https://github.com/sipeed/picoclaw/pull/2830) | Async delivery policy for spawn | bogdanovich | Aberto |

### Tendências de Roadmap Identificadas

1. **Multi-Provider Web Search**: Adição de Gemini ([#2763](https://github.com/sipeed/picoclaw/pull/2763)) e SerpAPI ([#2232](https://github.com/sipeed/picoclaw/issues/2232))
2. **Agent Orchestration**: Melhorias em spawn/async delivery ([#2830](https://github.com/sipeed/picoclaw/pull/2830), [#2761](https://github.com/sipeed/picoclaw/pull/2761))
3. **Edge Deployment**: Yocto layer ([#2851](https://github.com/sipeed/picoclaw/pull/2851)), Raspberry Pi support ([#2675](https://github.com/sipeed/picoclaw/issues/2675))
4. **WebUI Evolutions**: Model catalog, provider-aware validation, connectivity testing ([#2752](https://github.com/sipeed/picoclaw/pull/2752))

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Dor | Frequência | Contexto |
|-----|------------|----------|
| **Respostas vazias em provedores OAuth** | 🔴 Alta | Codex, ChatGPT backend — bloqueia uso |
| **Android app não funciona** | 🔴 Alta | Erro ao executar libpicoclaw.so |
| **Histórico de conversas incompleto** | 🟡 Média | Apenas última mensagem visível |
| **Web search頼りに fallback** | 🟡 Média | Sem mecanismo automático |
| **Voice recognition quebrapós reload** | 🟡 Média | Config reload destrói ASR |

### Cenários de Uso Observados

**1. Agentes em Produção (Edge)**
- Usuários desejam deploy em Raspberry Pi e dispositivos low-resource
- Yocto/OpenEmbedded layer em desenvolvimento ([#2851](https://github.com/sipeed/picoclaw/pull/2851))

**2. Integração com Canais de Mensagens**
- Telegram: suporte a media groups ([#2758](https://github.com/sipeed/picoclaw/pull/2758)), guest mode ([#2849](https://github.com/sipeed/picoclaw/pull/2849))
- Slack: novo canal webhook ([#2719](https://github.com/sipeed/picoclaw/pull/2719))
- Feishu: reports de bugs em parser de skills

**3. Produtividade com Ferramentas**
- edit_file precisa de preview de diff ([#2848](https://github.com/sipeed/picoclaw/issues/2848))
- Async tool results precisa de política clara ([#2829](https://github.com/sipeed/picoclaw/issues/2829))

### Satisfação/Insatisfação

| Indicador | Status |
|-----------|--------|
| Volume de Issues | ✅ Alto — comunidade ativa reportando |
| PRs Mergeados | ✅ Saúde — 8 PRs fechados, revisão ativa |
| Bugs Críticos Abertos | ⚠️ 3 bugs alta severidade pendentes |
| Feature Requests | ✅ Rico — 7+ features em desenvolvimento |

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta/Atendimento Prolongado

| Issue | Criado | Atualizado | Status | Prioridade |
|-------|--------|------------|--------|------------|
| [#2046](https://github.com/sipeed/picoclaw/issues/2046) | 2026-03-26 | 2026-05-11 | CLOSED (stale) | Baixa (LongCat API específica) |
| [#2232](https://github.com/sipeed/picoclaw/issues/2232) | 2026-03-31 | 2026-05-11 | CLOSED (stale) | Média (SerpAPI request) |
| [#2590](https://github.com/sipeed/picoclaw/issues/2590) | 2026-04-19 | 2026-05-11 | CLOSED (stale) | **Alta** (Android não funciona) |
| [#2675](https://github.com/sipeed/picoclaw/issues/2675) | 2026-04-26 | 2026-05-11 | CLOSED (stale) | Média (RPi support) |
| [#2582](https://github.com/sipeed/picoclaw/issues/2582) | 2026-04-18 | 2026-05-11 | CLOSED (stale) | Média (fallback chain) |
| [#2690](https://github.com/sipeed/picoclaw/issues/2690) | 2026-04-27 | 2026-05-11 | CLOSED (stale) | **Alta** (gateway sem canais) |

### Análise do Backlog

**Padrão Observado:** Muitas issues foram marcadas como `stale` e fechadas recentemente (2026-05-11), possivelmente como parte de uma limpeza de backlog pelos mantenedores. Isso pode indicar:
- Reorganização do tracker de issues
- Issues resolvidas indiretamente por outros PRs
- Necessidade de re-abertura pelos usuários

### Recomendações para Mantenedores

1. **Priorizar [#2674](https://github.com/sipeed/picoclaw/issues/2674)** — Bug crítico do Codex OAuth afeta usuários paywall
2. **Verificar [#2590](https://github.com/sipeed/picoclaw/issues/2590)** — Android app completamente quebrado
3. **Revisar [#2796](https://github.com/sipeed/picoclaw/issues/2796)** — Perda de histórico é UX crítico
4. **Avaliar PR [#2763](https://github.com/sipeed/picoclaw/pull/2763)** — Gemini provider pode endereçar demanda de web search

---

## Métricas Consolidada do Dia

| Métrica | Valor |
|---------|-------|
| Issues ativas (24h) | 12 |
| Issues abertas | 4 |
| Issues fechadas | 8 |
| PRs atualizados (24h) | 28 |
| PRs abertos | 20 |
| PRs mergeados/fechados | 8 |
| Novas releases | 1 (nightly) |
| Bugs alta severidade abertos | 3 |
| Features em desenvolvimento | 7+ |

---

*Relatório gerado automaticamente com base nos dados do GitHub de [sipeed/picoclaw](https://github.com/sipeed/picoclaw) em 2026-05-12.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-05-12

## 1. Panorama do Dia

O projeto IronClaw mantém alta atividade com **36 issues e 50 PRs** atualizados nas últimas 24h. O esforço principal continua concentrado no **Reborn** (v2 do motor), com múltiplos PRs de integração e refatoração em paralelo. Não houveram novos lançamentos hoje, mas o churn de código é intenso com 24 PRs fechados/merged e 22 issues resolvidos. A base de código está em fase de maturação do Reborn, com trabalho ativo em trust-boundary hardening, storage substrate e runtime adapters. O time demonstra ritmo sustentável de entregas diárias.

---

## 2. Lançamentos

**Nenhum novo release** registrado nas últimas 24h.

O último release documentado foi `ironclaw_common 0.4.2` (PR #3388), que inclui mudanças API-compatíveis, publicado em 2026-05-08. O release `ironclaw 0.28.1` também foi documentado nesse período como bump manual.

---

## 3. Progresso do Projeto

### PRs Closed/Merged Hoje

| PR | Título | Tamanho | Destaque |
|----|--------|---------|----------|
| [#3498](https://github.com/nearai/ironclaw/pull/3498) | feat(common): describe paths and platform helpers | XS | Atualização de documentação do crate `ironclaw_common` |
| [#3485](https://github.com/nearai/ironclaw/pull/3485) | test(turns): cover terminal lifecycle projection replay | S | Cobertura de testes para replay de ciclo de turns (`Failed`/`Cancelled`) via `DefaultTurnCoordinator` e `TurnEventProjectionService` |
| [#3489](https://github.com/nearai/ironclaw/pull/3489) | Add Reborn CLI completion command | M | Implementação de `ironclaw-reborn completion --shell <shell>` com suporte a múltiplos shells e guarda zsh `compdef` |

### PRs Abertos de Alto Impacto

| PR | Título | Tamanho | Escopo |
|----|--------|---------|--------|
| [#3476](https://github.com/nearai/ironclaw/pull/3476) | [Reborn] Wire SkillContextService into loop prompt path | XL | Integração de `HostSkillContextSource` e parser de snapshots no `ironclaw_loop_support` |
| [#3494](https://github.com/nearai/ironclaw/pull/3494) | docs(reborn): establish trust-boundary hardening baseline | L | Contrato formal de hardening de trust-boundary com primitivas em `ironclaw_common::trust_boundary` |
| [#3493](https://github.com/nearai/ironclaw/pull/3493) | Fix Reborn memory error redaction and SQL replay cursors | M | Sanitização de erros de filesystem e correção de cursor em replay de event-stores SQL |
| [#3462](https://github.com/nearai/ironclaw/pull/3462) | [Reborn] Add user-selectable model routes and provider pool | XL | API de seleção de `ModelSlot` → `{provider_id, model_id}` com política de allowlist |
| [#3454](https://github.com/nearai/ironclaw/pull/3454) | Add Reborn loop capability host-runtime adapter slice | XL | `HostRuntimeLoopCapabilityPort` para rotear capacidades através de `HostRuntime` injetado |
| [#3353](https://github.com/nearai/ironclaw/pull/3353) | feat(reborn): add native product adapter runner | M | Runner nativo de `ProductAdapter` com verificação de auth, minting de evidência e forwarding para `ProductWorkflow` facade |
| [#3461](https://github.com/nearai/ironclaw/pull/3461) | feat: mobile layout UI | XL | Refatoração de layout mobile (≤768px) com drawer hamburger unificado; desktop intocado |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (Comentários + Reações)

| Issue | Título | Comentários | 👍 | Status | Tema Central |
|-------|--------|-------------|----|--------|--------------|
| [#3193](https://github.com/nearai/ironclaw/issues/3193) | Define conversation binding and session thread contracts | 6 | 0 | CLOSED | Contratos de binding de conversa/session para Reborn |
| [#3204](https://github.com/nearai/ironclaw/issues/3204) | Define transcript and thread storage boundary | 5 | 0 | CLOSED | Fronteira de storage entre transcript e thread |
| [#3107](https://github.com/nearai/ironclaw/issues/3107) | Define AgentLoopDriver and run-class profile contract | 4 | 0 | CLOSED | Contrato de loop driver e perfil de execução |
| [#3069](https://github.com/nearai/ironclaw/issues/3069) | Ship Reborn as separate ironclaw-reborn binary | 3 | 0 | OPEN | Empacotamento do binary standalone Reborn |
| [#3492](https://github.com/nearai/ironclaw/issues/3492) | Establish trust-boundary hardening baseline | 1 | 0 | OPEN | **Cross-PR review: falha de modo estrutural** em trusted components com valores fracamente bound |
| [#3484](https://github.com/nearai/ironclaw/issues/3484) | [EPIC] Reborn Contributor Runway | 0 | 0 | OPEN | **Runway mínimo para porting paralelo** de skills, tools, MCP/WASM e channels |

### Análise dos Demandas

O tema dominante continua sendo **Reborn v2**, com três padrões claros:

1. **Consolidação de Contratos Arquiteturais**: Issues #3193, #3204, #3107 foram todas fechadas, indicando que os contratos fundamentais de conversation binding, transcript storage e loop driver estão estáveis.

2. **Hardening de Trust-Boundaries**: Issue [#3492](https://github.com/nearai/ironclaw/issues/3492) identifica problema estrutural recorrente — trusted components introduzidos sem bound adequado de policy/evidence/snapshot, deixando brechas em APIs públicas. Já há PR #3494 em andamento para endereçá-lo.

3. **Contributor Runway**: Epic [#3484](https://github.com/nearai/ironclaw/issues/3484) busca estabelecer base mínima para enable parallel skill/tool/channel porting sem tocar kernel internals.

---

## 5. Bugs e Estabilidade

### Bugs Reportados (por Severidade)

| Severity | Issue | Título | Canal | Status |
|----------|-------|--------|-------|--------|
| **P1** | [#3128](https://github.com/nearai/ironclaw/issues/3128) | Connecting to Gmail gives 502 | Bug Bash | OPEN |
| **P1** | [#2903](https://github.com/nearai/ironclaw/issues/2903) | Telegram response too long fails silently | Bug Bash | OPEN |
| **P1** | [#2905](https://github.com/nearai/ironclaw/issues/2905) | Agent saves files to /home/agent (inaccessible) | Bug Bash | OPEN |
| **P2** | [#3034](https://github.com/nearai/ironclaw/issues/3034) | V2 engine: HTTP tool disabled by default | Bug Bash | OPEN |
| **P1** | [#3317](https://github.com/nearai/ironclaw/issues/3317) | Telegram setup did not work with local IronClaw | Bug Bash | **CLOSED** |
| **High** | [#3490](https://github.com/nearai/ironclaw/issues/3490) | Admin tools settings not propagated to users | — | OPEN |
| **High** | [#3478](https://github.com/nearai/ironclaw/issues/3478) | [Reborn] Add separate System runtime adapter | — | **CLOSED** |

### Análise de Estabilidade

- **4 bugs P1 ativos** relacionados a integrações (Gmail 502, Telegram silencioso, file system path) e setup local
- **Bug de admin settings** (#3490) indica problema de multi-tenant: admin desabilita tool, usuário ainda acessa — risco operacional
- **P2 HTTP tool** (#3034): onboarding deficiente para enable, impacto na experiência V2 engine
- Correção de redação de erros de memory backend em [PR #3493](https://github.com/nearai/ironclaw/pull/3493) mostra foco em segurança da informação (sanitização de SQL/provider errors)

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| Issue | Título | Escopo | Prioridade |
|-------|--------|--------|------------|
| [#3069](https://github.com/nearai/ironclaw/issues/3069) | Ship Reborn as separate `ironclaw-reborn` binary | ci, docs | Medium (risk: medium) |
| [#748](https://github.com/nearai/ironclaw/issues/748) | Publish ironclaw-worker Docker image to public registry | setup, sandbox | Enhacement (6 👍) |
| [#3484](https://github.com/nearai/ironclaw/issues/3484) | [EPIC] Reborn Contributor Runway | reborn | Epic |
| [#3492](https://github:///nearai/ironclaw/issues/3492) | Establish trust-boundary hardening baseline | reborn | Enhacement |
| [#3466](https://github.com/nearai/ironclaw/issues/3466) | Add FirstParty runtime adapter for host-owned capabilities | reborn | Enhacement |
| [#3475](https://github.com/nearai/ironclaw/issues/3475) | pairing_approve: add integration tests for DB-backed execution | tool | — |
| [#3474](https://github.com/nearai/ironclaw/issues/3474) | pairing_approve: share web orchestration path | tool | — |
| [#3461](https://github.com/nearai/ironclaw/pull/3461) | Mobile layout UI (PR — feature) | channel/web | L/XL |

### Sinais de Roadmap

1. **Reborn como binary independente** (#3069): Primeiro milestone é producir binary `ironclaw-reborn` seguro e releaseable com sua própria CLI — indica maturidade do Reborn para单独的 produto
2. **Docker public registry** (#748): 6 👍 mostra demanda da comunidade por onboarding simplificado via sandbox
3. **Mobile UI** (#3461): Foco em experiência mobile (≤768px drawer-based) sugere push por UX em canais web
4. **Contributor Runway** (#3484): Epic visa permitir porting paralelo de skills/tools/channels sem tocar kernel internals — sinal de preparção para abertura a contribuidores externos

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Dor | Issue | Contexto |
|-----|-------|----------|
| **Gmail OAuth 502** | [#3128](https://github.com/nearai/ironclaw/issues/3128) | Autenticação via chat assistant quebra no callback; instalação via settings funciona |
| **Telegram long reply fails** | [#2903](https://github.com/nearai/ironclaw/issues/2903) | Replies longas (>limite?) resultam em falha silenciosa; usuário não é notificado |
| **File system inacessível** | [#2905](https://github.com/nearai/ironclaw/issues/2905) | Agente salva em `/home/agent`, não acessível em hosted setup |
| **Telegram setup local** | [#3317](https://github.com/nearai/ironclaw/issues/3317) | Setup Telegram não funciona em IronClaw local (já fechado — resolved?) |
| **Admin settings bypass** | [#3490](https://github.com/nearai/ironclaw/issues/3490) | Configurações de admin (ex: disable shell tool) não propagam para usuários em multi-tenant |
| **HTTP tool disabled** | [#3034](https://github.com/nearai/ironclaw/issues/3034) | V2 engine shippa com HTTP tool desabilitado sem onboarding para habilitar |

### Cenários de Uso

- **Uso hosted (production)**: Principal dor é файловая system + Telegram + Gmail (integrações externas)
- **Uso self-hosted**: Setup local (Telegram) requer configuração manual
- **Multi-tenant**: Settings de admin não respeitam hierarquia de permissões

### Satisfação/Insatisfação

**Pontos negativos claros:**
- Integrações externas (Gmail, Telegram) com falha silenciosa ou 502
- Onboarding deficiente (HTTP tool, Docker sandbox) para novos usuários
- Gap de permissões em setups multi-tenant

**Não há feedback positivo explícito** nos dados de 24h, mas o churn de PRs sugere foco interno em estabilidade do Reborn.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Estagnadas

| Issue | Título | Idade | Situação |
|-------|--------|-------|----------|
| [#748](https://github.com/nearai/ironclaw/issues/748) | Publish ironclaw-worker Docker image to public registry | ~63 dias | 6 👍, nenhuma resposta da equipe; quebra onboarding para novos usuários |
| [#2903](https://github.com/nearai/ironclaw/issues/2903) | Telegram long reply fails silently | ~19 dias | P1, sem update desde 2026-04-23 |
| [#2905](https://github.com/nearai/ironclaw/issues/2905) | Agent saves files to /home/agent inaccessible | ~19 dias | P1, sem update desde 2026-04-23 |
| [#3034](https://github.com/nearai/ironclaw/issues/3034) | V2 engine: HTTP tool disabled by default | ~14 dias | P2, sem onboarding path definido |

### Issues Arquiteturais Reborn com Dependências Críticas

| Issue | Título | Blocs | Risco |
|-------|--------|-------|-------|
| [#3484](https://github.com/nearai/ironclaw/issues/3484) | [EPIC] Contributor Runway | Enable porting paralelo | Epic sem milestones |
| [#3466](https://github.com/nearai/ironclaw/issues/3466) | Add FirstParty runtime adapter | Host-owned capabilities | Enhacement |
| [#3434](https://github.com/nearai/ironclaw/issues/3434) | Add InstructionBundleBuilder + deterministic tests | Loop context assembly | Reborn completeness |
| [#3432](https://github.com/nearai/ironclaw/issues/3432) | Add deterministic trust-aware SkillContextService | Trust-aware skill context | Reborn completeness |

---

## Indicadores de Saúde do Projeto

| Métrica | Valor | Avaliação |
|---------|-------|-----------|
| Issues fechadas (24h) | 14/36 (39%) | ✅ Bom churn |
| PRs merged/closed (24h) | 24/50 (48%) | ✅ Saúde de integração |
| Bugs P1 abertos | 4 | ⚠️ Atenção requerida |
| Release activity | 0 | ℹ️ Nenhuma nova versão |
| Reborn progress | Alto (múltiplos PRs XL) | ✅ Avanço consistente |

---

*Relatório gerado em 2026-05-12. Dados extraídos de github.com/nearai/ironclaw.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do Projeto CoPaw — 2026-05-12

---

## 1. Panorama do Dia

O projeto CoPaw (QwenPaw) registrou **alta atividade** nas últimas 24h, com **49 issues** e **35 PRs** atualizados. Não houve novos lançamentos, indicando foco em estabilização e correções. A comunidade está ativamente reportando bugs, especialmente relacionados a provedores de API (opencode, Volcano Engine, DashScope), problemas de sessão e reconexão de rede. Dezesseis PRs foram merged/fechados, demonstrando progresso contínuo em correções de bugs e novas funcionalidades, como suporte a múltiplos anexos e gerenciamento automático de memória.

---

## 2. Lançamentos

**Nenhum release nas últimas 24h.**

O projeto está em um período de maturação de funcionalidades antes do próximo tagged release.

---

## 3. Progresso do Projeto

Os seguintes PRs foram **merged/fechados** nas últimas 24h, representando avanços significativos:

| PR | Título | Impacto |
|----|--------|---------|
| [#4203](https://github.com/agentscope-ai/QwenPaw/pull/4203) | Fix session history disappearing | Corrige problema crítico onde histórico de chat desaparecia e mensagens iam para sessão errada |
| [#4206](https://github.com/agentscope-ai/QwenPaw/pull/4206) | Enable multiple attachments support | Adiciona suporte a múltiplos anexos em conversas |
| [#4209](https://github.com/agentscope-ai/QwenPaw/pull/4209) | DingTalk quoted messages | Implementa processamento de mensagens citadas no DingTalk |
| [#4197](https://github.com/agentscope-ai/QwenPaw/pull/4197) | Async execution for delegate_external_agent | Melhora ferramenta para workflows longos com execução assíncrona |
| [#4204](https://github.com/agentscope-ai/QwenPaw/pull/4204) | Auto-memory management features | Adiciona extração automática de memória e métodos de resumo |
| [#4212](https://github.com/agentscope-ai/QwenPaw/pull/4212) | Fix ConfigurationException key passing | Corrige passagem de parâmetros em exceções de configuração |
| [#4139](https://github.com/agentscope-ai/QwenPaw/pull/4139) | Browser_use batch action support | Adiciona suporte a ações em lote com 13 sub-ações |
| [#1791](https://github.com/agentscope-ai/QwenPaw/pull/1791) | Avatar upload for agents | Permite upload de avatares para agentes |

---

## 4. Temas Quentes da Comunidade

As **issues com maior engajamento** (comentários) revelam as principais preocupações:

### 🔥 Maior volume de discussão

1. **[#4133](https://github.com/agentscope-ai/QwenPaw/issues/4133)** — 10 comentários
   - **Tópico:** opencode provider quebrado após upgrade para v1.1.5.post2
   - **Análise:** Regression crítica. O provider que funcionava na v1.1.5 falha na post2, indicando mudança incompatível na API.

2. **[#2429](https://github.com/agentscope-ai/QwenPaw/issues/2429)** — 10 comentários
   - **Tópico:** Cron job retorna "I noticed that you have interrupted me"
   - **Análise:** Problema de UX/confusão onde usuários não entendem o comportamento esperado do scheduler.

3. **[#3843](https://github.com/agentscope-ai/QwenPaw/issues/3843)** — 9 comentários
   - **Tópico:** Session history desaparece misteriosamente
   - **Status:** ✅ Corrigido em [#4203](https://github.com/agentscope-ai/QwenPaw/pull/4203)

4. **[#4165](https://github.com/agentscope-ai/QwenPaw/issues/4165)** — 8 comentários
   - **Tópico:** Volcano Engine (v1.1.6) configuração de API keys falha
   - **Análise:** Bug no novo release relacionado a provedores regionais.

5. **[#4017](https://github.com/agentscope-ai/QwenPaw/issues/4017)** — 7 comentários
   - **Tópico:** HEARTBEAT.md causa falha de reconexão após perda de rede
   - **Análise:** Recurso de heartbeat, quando ativado, impede reconexão automática — regressão significativa.

---

## 5. Bugs e Estabilidade

### 🔴 Críticos (alta severidade)

| Issue | Descrição | Provedor/Componente |
|-------|-----------|---------------------|
| [#4133](https://github.com/agentscope-ai/QwenPaw/issues/4133) | opencode provider quebrado na v1.1.5.post2 | Provider opencode |
| [#4159](https://github.com/agentscope-ai/QwenPaw/issues/4159) | DashScope config não é lido em runtime → 401 | DashScope provider |
| [#4017](https://github.com/agentscope-ai/QwenPaw/issues/4017) | Heartbeat.md bloqueia reconexão após network drop | Core/Backend |
| [#4220](https://github.com/agentscope-ai/QwenPaw/issues/4220) | auto_memory_interval não sincroniza vetor de busca | Memory system |
| [#4185](https://github.com/agentscope-ai/QwenPaw/issues/4185) | Chat não abre se histórico contém malformed tool_use | Session manager |

### 🟡 Moderados

| Issue | Descrição | Provedor/Componente |
|-------|-----------|---------------------|
| [#4165](https://github.com/agentscope-ai/QwenPaw/issues/4165) | Volcano Engine todas as modelos falham | Volcano Engine |
| [#3985](https://github.com/agentscope-ai/QwenPaw/issues/3985) | DeepSeek reasoning_content não retorna após múltiplas rodadas → HTTP 500 | DeepSeek provider |
| [#3262](https://github.com/agentscope-ai/QwenPaw/issues/3262) | Mensagens de aprovação aparecem no bot Telegram errado | Telegram multi-bot |

### 🟢 Menores/UI

| Issue | Descrição |
|-------|-----------|
| [#4123](https://github.com/agentscope-ai/QwenPaw/issues/4123) | Windows: execute_shell_command abre janela de console |
| [#4170](https://github.com/agentscope-ai/QwenPaw/issues/4170) | Agent actions só aparecem após conclusão (sem feedback em tempo real) |
| [#4174](https://github.com/agentscope-ai/QwenPaw/issues/4174) | OpenAI API format não colapsa thoughts, ocupa espaço excessivo |

**Padrão identificado:** Múltiplos bugs concentram-se em **provedores de API** (opencode, DashScope, Volcano Engine, DeepSeek) e **gestão de sessão/conexão**.

---

## 6. Pedidos de Features e Sinais de Roadmap

### ✨ Novas features com alta demanda

| Issue | Feature | Potencial Impacto |
|-------|---------|-------------------|
| [#4011](https://github.com/agentscope-ai/QwenPaw/issues/4011) | Fallback model option | Alta — resiliência operacional |
| [#4192](https://github.com/agentscope-ai/QwenPaw/issues/4192) | Multiple attachments in chat | ✅ Implementado em [#4206](https://github.com/agentscope-ai/QwenPaw/pull/4206) |
| [#4138](https://github.com/agentscope-ai/QwenPaw/issues/4138) | Browser_use batch actions | ✅ Implementado em [#4139](https://github.com/agentscope-ai/QwenPaw/pull/4139) |
| [#3747](https://github.com/agentscope-ai/QwenPaw/issues/3747) | DingTalk quoted messages/files | ✅ Implementado em [#4209](https://github.com/agentscope-ai/QwenPaw/pull/4209) |
| [#4215](https://github.com/agentscope-ai/QwenPaw/pull/4215) | `shell_command_executable` config | Permite escolher shell customizado |
| [#3767](https://github.com/agentscope-ai/QwenPaw/issues/3767) | Respect user shell environment | Correção de compatibilidade Linux/macOS |
| [#4114](https://github.com/agentscope-ai/QwenPaw/issues/4114) |链路追踪 (distributed tracing) | Observabilidade — pedido explícito |
| [#4167](https://github.com/agentscope-ai/QwenPaw/issues/4167) | GPT-image-2 reference image support | Integração avançada de imagem |

### 📊 Sinais de tendência

- **Resiliência operacional:** Fallback models é pedido recorrente
- **Multi-canal:** Suporte a voz nativo Feishu ([#4202](https://github.com/agentscope-ai/QwenPaw/pull/4202)), múltiplos anexos
- **Desktop:** PR ativo para Tauri 2.x ([#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813))
- **Plugins:** Suporte a instalação/desinstalação via console ([#4214](https://github.com/agentscope-ai/QwenPaw/pull/4214))
- **Memória avançada:** Memory-distill plugin ([#4171](https://github.com/agentscope-ai/QwenPaw/pull/4171)), ADBPG long-term memory ([#2308](https://github.com/agentscope-ai/QwenPaw/pull/2308))

---

## 7. Resumo de Feedback dos Usuários

### 😤 Dores Principais

1. **Incompatibilidade após upgrades**
   - Usuários reportam que provedores funcionais quebram ao atualizar (opencode, DashScope)
   - **Cenário:** "Mesma configuração que funcionava na v1.1.5 falha na post2"

2. **Problemas de rede e reconexão**
   - Heartbeat.md deveria manter conexão viva, mas causa o efeito oposto
   - Agentes não se recuperam automaticamente após network drop

3. **Confusão com cron jobs**
   - Mensagem "I noticed that you have interrupted me" causa frustração
   - Usuários não entendem quando devem intervir vs. quando é comportamento esperado

4. **Shell compatibility**
   - Comandos funcionam no terminal do usuário mas falham no agente
   - /bin/sh (dash) no Linux não suporta sintaxe bash

5. **Feedback visual em ações longas**
   - Usuários não sabem o que está acontecendo durante execuções de 5-10 minutos
   - Impossibilidade de interromper a tempo

### 😊 Pontos Positivos

- Comunidade ativa com **primeiros contribuidores** aparecendo (PRs #4219, #3813, #4202)
- Funcionalidades esperadas estão sendo implementadas (múltiplos anexos, quoted messages)
- Suporte a idiomas expandindo (indonésio adicionado)

---

## 8. Backlog que Merece Atenção

### ⚠️ Issues sem resposta significativa

| Issue | Idade | Tópico | Prioridade |
|-------|-------|--------|------------|
| [#4114](https://github.com/agentscope-ai/QwenPaw/issues/4114) | 4 dias |链路追踪 (tracing) solicitado | Média |
| [#4103](https://github.com/agentscope-ai/QwenPaw/issues/4103) | 5 dias | Windows shell selection request | Média |
| [#4088](https://github.com/agentscope-ai/QwenPaw/issues/4088) | 5 dias | Agent-to-agent cria novas sessões infinitamente | Alta |
| [#4011](https://github.com/agentscope-ai/QwenPaw/issues/4011) | 10 dias | Fallback model feature request | Alta |
| [#3767](https://github.com/agentscope-ai/QwenPaw/issues/3767) | 18 dias | Shell environment compatibility | Média |

### 🔧 PRs em revisão aguardando merge

| PR | Tópico | Status |
|----|--------|--------|
| [#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) | Tauri 2.x desktop app | Under Review |
| [#4214](https://github.com/agentscope-ai/QwenPaw/pull/4214) | Plugin install/uninstall via console | Open |
| [#4210](https://github.com/agentscope-ai/QwenPaw/pull/4210) | Cron & inbox optimization | Not ready |
| [#4084](https://github.com/agentscope-ai/QwenPaw/pull/4084) | CronManager concurrency fixes | Open |
| [#2308](https://github.com/agentscope-ai/QwenPaw/pull/2308) | ADBPG memory manager | Open (desde 2026-03-26) |

---

## Métricas de Saúde do Projeto

| Indicador | Valor | Status |
|-----------|-------|--------|
| Issues ativas (24h) | 28 | 🟢 Normal |
| PRs abertas (24h) | 19 | 🟢 Normal |
| Taxa de resolução (issues) | 43% (21/49) | 🟡 Moderada |
| Taxa de merge (PRs) | 46% (16/35) | 🟢 Boa |
| Novos releases | 0 | 🟡 Aguardando |
| Bugs críticos abertos | 5 | 🔴 Requer atenção |
| Features implementadas (24h) | 8 | 🟢 Excelente |

---

*Relatório gerado em 2026-05-12. Dados extraídos do GitHub do projeto CoPaw (agentscope-ai/CoPaw).*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório de Projeto ZeroClaw — 2026-05-12

---

## 1. Panorama do Dia

O projeto ZeroClaw mantém **alta atividade** em 12 de maio de 2026, com 15 issues e 48 PRs atualizados nas últimas 24 horas. A comunidade demonstra engajamento significativo em múltiplas áreas: canais (Matrix, Discord, WhatsApp, Telegram), providers (OpenAI-compatível, Gemini, LM Studio) e ferramentas (web search, cron, TTS/STT). Não houve lançamentos oficiais, mas há sinais de que a versão 0.7.6 está em preparação com gate de smoke test para Matrix. A saúde geral do código é pressionada por bugs de alta severidade (S0/S1) relacionados a perda de mensagens e falhas em ferramentas críticas, enquanto o backlog técnico acumula 153 commits revertidos que precisam de auditoria.

---

## 2. Lançamentos

**Nenhuma release oficial została publicada nas últimas 24 horas.**

O último release mencionado é **v0.7.5**, e há indicativos de preparação para **v0.7.6**:

- **#6566** (merged) trouxe bump do matrix-sdk 0.16 → 0.17, incluindo fix de recursion-limit e heurística de instalação low-memory
- **#6576** [OPEN] propõe um *release-gate smoke check* para validar o comportamento do Matrix após o bump do matrix-sdk 0.17

**Pendências de release-gate:**
- **#6547** [CLOSED] — Falha no merge do Homebrew para v0.7.5 precisa de resolução externa no homebrew-core

---

## 3. Progresso do Projeto

### PRs Closed/Merged nas Últimas 24h

| PR | Descrição | Impacto |
|----|-----------|---------|
| [#6505](https://github.com/zeroclaw-labs/zeroclaw/pull/6505) | Cron jobs table layout fix | UX melhorado no dashboard web |
| [#6513](https://github.com/zeroclaw-labs/zeroclaw/pull/6513) | Atomic Chat provider | Novo provider local registrado |

### PRs Abertos com Alto Impacto

| PR | Descrição | Tamanho/Risco | Observação |
|----|-----------|---------------|------------|
| [#6297](https://github.com/zeroclaw-labs/zeroclaw/pull/6297) | WhatsApp poll-vote / interactive-reply + Channel::send_choice | L / Alto | Expõe eventos interativos anteriormente descartados |
| [#6572](https://github.com/zeroclaw-labs/zeroclaw/pull/6572) | Discord media send/receive gaps | L / Médio | Consolida download de attachments em uma única passagem |
| [#6183](https://github.com/zeroclaw-labs/zeroclaw/pull/6183) | Image marker normalization | M / Alto | Corrige rewrite de paths de imagens em history replay |
| [#6582](https://github.com/zeroclaw-labs/zeroclaw/pull/6582) | DuckDuckGo search blocks detection | S / Alto | Detecta 403 e redirects de verificação |
| [#6587](https://github.com/zeroclaw-labs/zeroclaw/pull/6587) | OpenAI-compatible `reasoning` field fallback | — / Alto | Resolve silenciamento de conteúdo de reasoning |
| [#6575](https://github.com/zeroclaw-labs/zeroclaw/pull/6575) | Gemini token usage propagation | S / Médio | Recupera tracking de custos para Gemini |
| [#6588](https://github.com/zeroclaw-labs/zeroclaw/pull/6588) | TTS voice replies em stream_mode=partial | — / — | Restaura TTS para Telegram com streaming |
| [#6580](https://github.com/zeroclaw-labs/zeroclaw/pull/6580) | LM Studio runtime options | S / Médio | Honra merge_system_into_user para LM Studio |

---

## 4. Temas Quentes da Comunidade

### Issues com Mais Comentários

| Issue | Tópico | Comentários | Status |
|-------|--------|-------------|--------|
| [#4083](https://github.com/zeroclaw-labs/zeroclaw/issues/4083) | Web search tool não funciona em canais (Telegram) | 5 | CLOSED |
| [#6530](https://github.com/zeroclaw-labs/zeroclaw/issues/6530) | Build failure com matrix-sdk v0.16.0 (recursion overflow) | 5 | CLOSED |
| [#6034](https://github.com/zeroclaw-labs/zeroclaw/issues/6034) | Perda de user message em single/multi-turn | 4 | OPEN (P1) |
| [#6547](https://github.com/zeroclaw-labs/zeroclaw/issues/6547) | Homebrew merge fail para v0.7.5 | 3 | CLOSED |
| [#5991](https://github.com/zeroclaw-labs/zeroclaw/issues/5991) | Failed cron job (S0 - data loss) | 3 | CLOSED |

### Análise de Demandas

1. **Provider robustness** — Múltiplas issues (#6034, #6584, #6589) indicam problemas com fallback de providers, multimodality e campos de API inconsistentes entre provedores OpenAI-compatíveis
2. **Web search reliability** — Issues #4083 e PR #6582 mostram que o DuckDuckGo search frequentemente falha com 403 e CAPTCHAs; há demanda por alternativa com SearXNG (#5316)
3. **Cron jobs UX/funcionalidade** — Três issues (#5991, #6504, #6586) abordam diferentes aspectos de cron: falha em execução, UX de tabela e error messages

---

## 5. Bugs e Estabilidade

### Por Severidade

| Severidade | Count | Issues Relevantes |
|------------|-------|-------------------|
| **S0** (data loss / security) | 1 | [#5991](https://github.com/zeroclaw-labs/zeroclaw/issues/5991) — failed cron job |
| **S1** (workflow blocked) | 2 | [#4083](https://github.com/zeroclaw-labs/zeroclaw/issues/4083) (CLOSED), [#6034](https://github.com/zeroclaw-labs/zeroclaw/issues/6034) — perda de mensagens |
| **S2** (degraded behavior) | 6+ | [#6530](https://github.com/zeroclaw-labs/zeroclaw/issues/6530) (CLOSED), [#6589](https://github.com/zeroclaw-labs/zeroclaw/issues/6589), [#6584](https://github.com/zeroclaw-labs/zeroclaw/issues/6584), [#6574](https://github.com/zeroclaw-labs/zeroclaw/issues/6574), [#6561](https://github.com/zeroclaw-labs/zeroclaw/issues/6561), [#6504](https://github.com/zeroclaw-labs/zeroclaw/issues/6504) (CLOSED) |

### Bugs Críticos Abertos

| Issue | Título | Risk | Prioridade |
|-------|--------|------|------------|
| [#6034](https://github.com/zeroclaw-labs/zeroclaw/issues/6034) | Perda de user message em diálogo single/multi-turn | High | P1 |
| [#6589](https://github.com/zeroclaw-labs/zeroclaw/issues/6589) | RouterProvider::supports_vision() bypass em setups mistos | Medium | — |
| [#6584](https://github.com/zeroclaw-labs/zeroclaw/issues/6584) | OpenAI-Compatible ignora `reasoning` field | Medium | — |
| [#6561](https://github.com/zeroclaw-labs/zeroclaw/issues/6561) | Gateway --host recovery hint inapropriado (security: pairing) | Low | P3 |

### Bugs Recentemente Resolvidos

- **#4083**: Web search tool não funcionava em canais Telegram (com 5 comentários)
- **#6530**: Build failure com matrix-sdk v0.16.0 por recursion limit overflow
- **#6504**: UX confusa na tabela de cron jobs do dashboard web

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Novas Propostas

| Issue | Título | Risk | Prioridade | Status |
|-------|--------|------|------------|--------|
| [#5316](https://github.com/zeroclaw-labs/zeroclaw/issues/5316) | Suporte a SearXNG + CAPTCHA detection para DuckDuckGo | High | P2 | needs-maintainer-review |
| [#6563](https://github.com/zeroclaw-labs/zeroclaw/issues/6563) | Comfy Cloud / ComfyUI como media provider (gen_image + gen_video) | High | P2 | needs-maintainer-review |
| [#6574](https://github.com/zeroclaw-labs/zeroclaw/issues/6574) | Comportamento configurável para mensagens com imagens sem vision path | — | — | OPEN |
| [#6565](https://github.com/zeroclaw-labs/zeroclaw/issues/6565) | Clear inline-keyboard após click + reflete outcome no Telegram | Medium | P2 | OPEN |
| [#6576](https://github.com/zeroclaw-labs/zeroclaw/issues/6576) | Matrix v0.7.6 smoke check pós matrix-sdk 0.17 | Low | P2 | OPEN |

### Reforços de Roadmap Identificados

1. **Suporte a multimodalidade avançada** — Issues [#6574](https://github.com/zeroclaw-labs/zeroclaw/issues/6574), [#6563](https://github.com/zeroclaw-labs/zeroclaw/issues/6563) e PRs associados (#6183, #6587, #6575) indicam priorização de pipeline de imagens/vídeo com fallbacks robustos
2. **Privacidade em search** — Demanda clara por SearXNG como alternativa ao DuckDuckGo
3. **Canais interativos** — WhatsApp poll-vote (#6297), Telegram inline keyboard refinements (#6565)

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Dor | Cenário | Impacto |
|-----|---------|---------|
| **Perda de mensagens** | Usuários experimentam desaparecimento de user messages em single e multi-turn | Bloqueio de workflow — P1 |
| **Web search quebrado em canais** | Ferramenta funciona no agente mas falha via Telegram | Usabilidade degradada |
| **Cron jobs não executam** | Tarefas agendadas falham silenciosamente, causando perda de recaps | S0 — risco de perda de dados |
| **TTS desabilitado com streaming** | Voz não funciona quando stream_mode=partial | Experiência de voz degradada |
| **Homebrew desatualizado** | Usuários Homebrew não conseguem instalar v0.7.5 | Onboarding frustrante |

### Cenários de Uso Observados

- **Agentes pessoais via Telegram** — caso de uso principal com integração de web search, cron e TTS
- **Setup multi-provider** — usuários combinam providers com capacidades diferentes (ex: Together AI + Anthropic para visão)
- **Matrix como canal corporativo** — suporte a homeservers auto-hospedados com necessidade de smoke tests

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Estagnadas

| Issue | Título | Criado | Atualizado | Idade |
|-------|--------|--------|------------|-------|
| [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) | Audit: 153 commits lost em bulk revert c3ff635 | 2026-04-24 | 2026-05-11 | ~17 dias |
| [#5316](https://github.com/zeroclaw-labs/zeroclaw/issues/5316) | SearXNG support + DuckDuckGo CAPTCHA | 2026-04-05 | 2026-05-11 | ~36 dias |
| [#6034](https://github.com/zeroclaw-labs/zeroclaw/issues/6034) | Perda de user messages (P1, high risk) | 2026-04-23 | 2026-05-11 | ~19 dias |
| [#6563](https://github.com/zeroclaw-labs/zeroclaw/issues/6563) | Comfy Cloud / ComfyUI media provider | 2026-05-10 | 2026-05-11 | ~2 dias |

### PRs Pendentes de Ação do Autor

| PR | Descrição | Criado | Status |
|----|-----------|--------|--------|
| [#4944](https://github.com/zeroclaw-labs/zeroclaw/pull/4944) | Refatoração de wrappers de ferramentas | 2026-03-28 | needs-author-action |
| [#6183](https://github.com/zeroclaw-labs/zeroclaw/pull/6183) | Image marker normalization | 2026-04-28 | needs-author-action |

### Recomendação de Triagem

1. **#6074** — Auditoria de 153 commits revertidos é risco técnico alto; precisa de owner designado
2. **#6034** — Bug P1 com perda de mensagens exige priorização imediata
3. **#5316** & **#6563** — Ambos marcados `needs-maintainer-review` há >30 dias; necesitan feedback oficial de roadmap

---

*Relatório gerado automaticamente com base em dados do GitHub de 2026-05-12. Última atualização: 2026-05-12.*

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*