# Resumo diário do ecossistema de agentes de IA 2026-06-20

> Issues: 2 | PRs: 1 | Projetos cobertos: 7 | Gerado em: 2026-06-19 21:04 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório do Projeto NullClaw — 2026-06-20

## 1. Panorama do Dia

O projeto NullClaw mantém uma atividade moderada no dia de hoje, com **2 issues ativas** e **1 pull request** em aberto atualizado nas últimas 24 horas. Não houve lançamentos de novas versões, indicando可能 uma fase de estabilização ou trabalho em segundo plano. As issues mais recentes concentram-se em problemas de compatibilidade com plataformas móveis (Android/Termux), sugerindo que a equipe está atenta à portabilidade do projeto. O PR #966, focado em resolver problemas HTTP no Android/aarch64, representa um avanço técnico relevante para usuários de Termux. O projeto continua ativo com 0 releases no período, mantendo o foco em correções e melhorias incrementais.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24 horas.**

O projeto não publicou novas versões hoje. Recomenda-se monitorar o repositório para eventuais anúncios de versões estáveis ou pre-releases que possam incluir as correções em discussão.

🔗 Repositório: [github.com/nullclaw/nullclaw](https://github.com/nullclaw/nullclaw/releases)

---

## 3. Progresso do Projeto

### PRs em destaque

| PR | Título | Status | Impacto |
|----|--------|--------|---------|
| [#966](https://github.com/nullclaw/nullclaw/pull/966) | `fix(http): route stdlib HTTP through curl on aarch64-linux-android` | **Aberta** | Alto — resolve falha de rede no Android/Termux |

**Análise do PR #966:**
- **Autor:** vernonstinebaker
- **Criado:** 2026-06-19
- **Problema resolvido:** O `std.http.Client` do Zig 0.16 falha com `error.NameServerFailure` no Android (Termux) devido à ausência de `/etc/resolv.conf`
- **Solução proposta:** Encaminhar o HTTP padrão através do `curl`
- **Status atual:** Aberto, aguardando revisão e merge

Este PR, se aprovado, representará uma melhoria significativa para a base de usuários mobile, especialmente aqueles que utilizam o NullClaw em dispositivos Android via Termux.

🔗 Ver PR: [nullclaw/nullclaw PR #966](https://github.com/nullclaw/nullclaw/pull/966)

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento

| Issue | Título | Comentários | Reações |
|-------|--------|-------------|---------|
| [#484](https://github.com/nullclaw/nullclaw/issues/484) | 飞书无法联网查询 (Feishu não conecta) | 3 | 0 |
| [#868](https://github.com/nullclaw/nullclaw/issues/868) | zig build fails on Android/Termux (aarch64) | 2 | 0 |

**Análise detalhada:**

**Issue #484 — Problema de conectividade com Feishu (Lark)**
- **Duração:** Aberta desde 2026-03-13 (98 dias)
- **Última atualização:** 2026-06-19
- **Severidade:** Intermediária — afeta usuários que dependem da integração com Feishu
- **Contexto:** Usuário reporta impossibilidade de consultar dados via rede no Feishu, com screenshot anexado
- **Demanda principal:** Funcionalidade de rede para integração com plataforma de produtividade chinesa

**Issue #868 — Falha de build no Android/Termux**
- **Duração:** Aberta desde 2026-04-23 (58 dias)
- **Última atualização:** 2026-06-19
- **Severidade:** Alta — impede compilação em plataformas Android/aarch64
- **Problema técnico:** Erro `AccessDenied` ao criar link simbólico para `options.zig` durante `zig build -Doptimize=ReleaseSmall`
- **Relevância:** Correlaciona-se diretamente com o PR #966, sugerindo que ambos tratam da mesma raiz (problemas de sistema de arquivos/permissões no Android)

🔗 Ver issues:
- [#484](https://github.com/nullclaw/nullclaw/issues/484)
- [#868](https://github.com/nullclaw/nullclaw/issues/868)

---

## 5. Bugs e Estabilidade

### Bugs reportados nas últimas 24h

| Bug | Severidade | Plataforma | Status |
|-----|------------|------------|--------|
| [#868](https://github.com/nullclaw/nullclaw/issues/868) | **Alta** | Android/Termux (aarch64) | Aberto |
| [#484](https://github.com/nullclaw/nullclaw/issues/484) | **Média** | Feishu/Lark | Aberto |

**Análise por severidade:**

🔴 **Alta severidade:**
- **#868:** Build falha completamente em dispositivos Android via Termux. Impacta desenvolvedores que tentam compilar o NullClaw em ambiente móvel. Correlacionado com problemas de permissões de sistema de arquivos no Android.

🟡 **Média severidade:**
- **#484:** Funcionalidade de rede específica (Feishu) não funciona. Não afeta o core do projeto, mas impacta usuários da plataforma de comunicação empresarial.

**Métricas de bugs:**
- Total de issues abertas: 2
- Taxa de resolução (24h): 0%
- Média de idade das issues ativas: 78 dias

🔗 Todas as issues: [github.com/nullclaw/nullclaw/issues](https://github.com/nullclaw/nullclaw/issues)

---

## 6. Pedidos de Features e Sinais de Roadmap

### Demanda identificada

**Conectividade multiplataforma expandida:**
- Suporte robusto a Android/Termux (evidenciado por #868 e #966)
- Integração com plataformas chinesas (Feishu/Lark — #484)

**Sinais de evolução do roadmap:**
O número de issues relacionadas a plataformas mobile (Android) sugere que:
1. A equipe pode estar considerando suporte oficial ao Android/Termux
2. Melhorias na camada de rede para ambientes restritos são prioridade
3. Integração com serviços asiáticos (Feishu) indica foco em mercado internacional

**Recomendações para o roadmap:**
- Priorizar merge do PR #966 para resolver problemas de rede no Android
- Avaliar viabilidade de build nativo no Android/Termux (Issue #868)
- Considerar wrapper ou alternativa de conectividade para plataformas sem `/etc/resolv.conf`

🔗 Ver todas as issues: [nullclaw/nullclaw/issues](https://github.com/nullclaw/nullclaw/issues?q=is%3Aissue+is%3Aopen+label%3Aenhancement)

---

## 7. Resumo de Feedback dos Usuários

### Dores relatadas

| Dor do usuário | Ocorrência | Impacto |
|----------------|------------|---------|
| Falha de build no Android/Termux | Issue #868 | Alto — impede uso |
| Rede não funciona no Feishu | Issue #484 | Médio — limita funcionalidade |
| Problemas HTTP no Android | PR #966 | Alto — afeta conectividade |

### Perfis de usuário identificados

1. **Desenvolvedores mobile:** Tentam compilar e executar NullClaw em dispositivos Android via Termux. Enfrentam barreiras técnicas de permissões e rede.

2. **Usuários empresariais (mercado chinês):** Utilizam integração com Feishu/Lark para fluxos de trabalho. Reportam problemas de conectividade desde março de 2026.

### Tendências de satisfação

- **Insatisfação moderada** relacionada a suporte mobile
- **Demanda clara** por melhor experiência em plataformas não-convencionais (Termux, Android)
- **Silêncio da equipe** em issues mais antigas (ex.: #484 aberta há 98 dias)

🔗 Feedback histórico: [nullclaw/nullclaw/issues](https://github.com/nullclaw/nullclaw/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc)

---

## 8. Backlog que Merece Atenção

### Issues sem resposta significativa

| Issue | Título | Idade | Comentários | Prioridade |
|-------|--------|-------|-------------|------------|
| [#484](https://github.com/nullclaw/nullclaw/issues/484) | 飞书无法联网查询 | 98 dias | 3 | 🔴 Alta |
| [#868](https://github.com/nullclaw/nullclaw/issues/868) | zig build fails on Android/Termux | 58 dias | 2 | 🔴 Alta |

### Análise do backlog crítico

**Issue #484 — Negligenciada há 98 dias:**
- Uma das issues mais antigas ainda abertas
- 3 comentários indicam que o problema persiste
- Sem resposta oficial da equipe de mantenedores
- Recomenda-se: Priorizar triagem e solicitar informações adicionais ao autor

**Issue #868 — Potencial correlação com PR aberto:**
-尽管有 PR #966 tentando resolver problemas relacionados, a issue original permanece aberta
- Recomenda-se: Vincular issue ao PR e unificar discussões

### Métricas de backlog

| Métrica | Valor |
|---------|-------|
| Issues abertas totais | 2 (24h) |
| Idade média das issues ativas | 78 dias |
| Taxa de resposta (issues antigas) | Baixa |
| Issues sem atividade >30 dias | 2 |

---

## Conclusão e Recomendações

### Estado geral do projeto: **Moderado com pontos de atenção**

| Área | Status | Ação recomendada |
|------|--------|------------------|
| Atividade de PRs | ✅ Positivo | Revisar e merge PR #966 |
| Bugs em produção | ⚠️ Atenção | Resolver issues Android/Termux |
| Comunicação com comunidade | ⚠️ Atenção | Responder issues antigas (#484) |
| Lançamentos | ℹ️ Inativo | Nenhuma release no período |

### Próximos passos sugeridos:

1. **Curto prazo:** Revisar e validar PR #966 para resolver problemas HTTP no Android
2. **Médio prazo:** Investigar e corrigir falha de build no Termux (Issue #868)
3. **Longo prazo:** Retomar comunicação sobre Issue #484 (Feishu) para não perder base de usuários

---
*Relatório gerado em 2026-06-20 com base nos dados do GitHub de [nullclaw/nullclaw](https://github.com/nullclaw/nullclaw).*

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo do Ecossistema de Agentes de IA Open Source

## 2026-06-20

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **dois polos distintos de maturidade** neste ciclo. De um lado, projetos maduros como **Hermes Agent** (245 contribuidores) e **ZeroClaw** (v0.8.1) operam em modo de consolidação massiva pós-release, processando volumes elevados de PRs críticos e gerenciando regressões complexas. De outro, projetos menores como **NullClaw** e **PicoClaw** enfrentam desafios de compatibilidade cross-platform (Android/Termux, Windows) que limitam sua adoção. A tendência dominante é a **modularização de canais de mensageria** — Telegram, Discord, Feishu, WhatsApp — como diferenciador competitivo, enquanto a estabilização de memória vetorial (ChromaDB) e controles de subagentes emergem como preocupações técnicas compartilhadas.

---

## 2. Comparação de Atividade

| Projeto | Issues Ativas (24h) | PRs Atualizados (24h) | Releases (24h) | Avaliação de Saúde |
|---------|---------------------|----------------------|----------------|-------------------|
| **Hermes Agent** | 50 | 50 | 1 (v0.17.0) | 🟢 Maturidade alta — risco de regressão elevado |
| **ZeroClaw** | 50 | 50 | 1 (v0.8.1) | 🟡 Consolidation — 10 P1s pendentes |
| **NanoBot** | 9 | 35 | 0 | 🟢 Crescimento saudável — ciclo issue→PR rápido |
| **CoPaw** | 11 | 17 | 0 | 🟡 Regressões v1.1.12 — estabilidade comprometida |
| **IronClaw** | 5 | 26 | 0 | 🟢 Transformação Reborn — nightly E2E falhando |
| **PicoClaw** | 3 | 7 | 1 (nightly) | 🟢 Ativo com pendências de review |
| **NullClaw** | 2 | 1 | 0 | 🔴 Baixa atividade — issues negligenciadas (78 dias média) |

**Observação:** A disparidade entre Hermes Agent/ZeroClaw (50 PRs) e NullClaw (1 PR) ilustra uma **lacuna de escala de 50x** entre projetos líderes e follower projects.

---

## 3. Posicionamento do Projeto Principal

### Hermes Agent — Líder de Escala

**Vantagens competitivas:**

| Dimensão | Hermes Agent | Comparação |
|----------|--------------|------------|
| **Base de contribuidores** | 245 (v0.17.0) | 5-10x maior que pares |
| **Volume de código** | +235K linhas em um release | Inédito no ecossistema |
| **Escopo de plataforma** | Desktop, TUI, CLI, 10+ canais | Mais integrado que NanoBot |
| **Segmento** | Enterprise/Individual | Amplo |

**Diferenças técnicas:**
- Arquitetura monolítica unificada vs. design modular do NanoBot
- Prioridade em segurança (environment scoping, .env leak prevention)
- Roadmap explícito de compressão de contexto via headroom-ai

**Limitações atuais:**
- 4 bugs P1 críticos incluindo symlink quebrado pós-update e vazamento de secrets
- Falta de feature-flag system unificado (roadmap #5091)

---

## 4. Focos Técnicos Compartilhados

### 4.1 Compatibilidade Multi-Plataforma

```
Android/Termux ──────► NullClaw (#868), Hermes (#48521)
Windows paths ──────► PicoClaw (#2472), IronClaw
macOS symlinks ─────► Hermes (#48521)
```

A compatibilidade com Termux e Windows emerge como **barra de entrada crítica**, especialmente para desenvolvedores que desejam compilar/executar agentes em dispositivos não-convencionais.

### 4.2 Estabilidade de Memória Vetorial

| Projeto | Problema | Solução |
|---------|----------|---------|
| **CoPaw** | ChromaDB índice 37GB → crash | PR #5332: auto-compactação, timeout protection |
| **ZeroClaw** | Memory overhead excessivo (#5844) | ACCEPTED — sem correção ainda |

O tratamento de memória de longo prazo é um **problema recorrente** que impacta sessões produtivas.

### 4.3 Human-in-the-Loop e Approval UX

```
Hermes Agent ──► SuspTurn (#4411)
IronClaw ──────► Approval modal commands longos (#5078)
PicoClaw ──────► Telegram permission granularity (#3114)
```

A tendencia de pausarturn para aprovação assíncrona aparece em múltiplos projetos, indicando **convergência arquitetural** para workflows enterprise.

### 4.4 Canal de Mensageria

| Canal | Projetos com Suporte | Status |
|-------|---------------------|--------|
| Telegram | Todos | Avançado (NanoBot v10.1, PicoClaw) |
| Discord | Hermes, ZeroClaw, NanoBot, PicoClaw | Em maturidade |
| Feishu | NanoBot, NullClaw | Issue #484 (NullClaw) negligenciada |
| WhatsApp | Hermes, ZeroClaw | Instável (ZeroClaw #49242) |
| XMPP | NanoBot (#1945) | PR aberto há 3 meses |

---

## 5. Análise de Diferenciação

### 5.1 Por Arquitetura

| Abordagem | Projetos | Implicação |
|-----------|----------|------------|
| **Monolítico integrado** | Hermes Agent | Menos configuração, mais opinião |
| **Plugin/MCP extensível** | ZeroClaw, IronClaw | Flexibilidade para providers custom |
| **Canal-first** | NanoBot | Foco em conectores de mensageria |
| **Multi-agente nativo** | PicoClaw (#2937) | Collaboration bus em desenvolvimento |
| **Mobile-first** | CoPaw | UI responsiva para narrow viewports |

### 5.2 Por Público-Alvo

```
Individual/Dev       ───► NullClaw, PicoClaw, NanoBot
Enterprise/Team      ───► Hermes Agent, ZeroClaw, IronClaw
Mercado Chinês       ───► CoPaw (Qwen), NullClaw (Feishu)
Self-hosted/NAS      ───► Hermes (ntfy integration)
```

### 5.3 Por Stack Técnico

| Stack | Projetos | Implicação |
|-------|---------|------------|
| **Zig** | NullClaw | Performance, mas compile issues em mobile |
| **Python** | Hermes, CoPaw | Ecossistema rico, mas GIL limitations |
| **Rust** | ZeroClaw, PicoClaw, IronClaw | Performance, memory safety |
| **Go** | PicoClaw | Cross-compilation nativa |

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração

| Projeto | Ciclo Issue→PR | Média Idade de PRs | Taxa de Fechamento |
|---------|----------------|-------------------|-------------------|
| **NanoBot** | <24h (ex: #4410→#4412) | ~5 dias | Alta |
| **CoPaw** | Same-day | ~7 dias | 6/11 fechadas | 
| **ZeroClaw** | ~3-7 dias | ~10 dias | 23 PRs merged/24h |
| **Hermes** | ~7 dias | Variável | 800 PRs/v0.17.0 |
| **NullClaw** | >98 dias | 78 dias | 0% resolução |

### 6.2 Indicadores de Saúde

| Indicador | Hermes | ZeroClaw | NanoBot | IronClaw | CoPaw | PicoClaw | NullClaw |
|-----------|--------|----------|---------|----------|-------|----------|----------|
| **Contribuidores ativos** | ████████░░ (245) | █████░░░░░ | ████░░░░░░ | ███░░░░░░░ | ███░░░░░░░ | ██░░░░░░░░ | █░░░░░░░░ |
| **Segurança (bugs críticos)** | ⚠️ 4 P1 | ⚠️ 10 P1 | ✅ 0 | ⚠️ 1 E2E | ⚠️ 3 | ✅ 1 | ✅ 0 |
| **Release cadence** | ████ Alta | ████ Alta | ███░ Média | ██░ Baixa | ██░ Baixa | ██░ Nightly | █░ Nenhuma |
| **Engajamento community** | ████████░░ | ██████░░░░ | █████░░░░░ | ████░░░░░░ | ███░░░░░░░ | ███░░░░░░░ | █░░░░░░░░ |

### 6.3 Maturidade Relativa

```
Maturidade Alta (Consolidação)
├── Hermes Agent ───► 800 PRs/release, 245 contribuidores
└── ZeroClaw ──────► 10 P1s em gestão ativa

Maturidade Média (Feature Development)
├── NanoBot ───────► Crescimento rápido, ciclo curto
├── IronClaw ──────► Reborn architecture em progresso
└── CoPaw ─────────► Estabilidade pós-regressão

Maturidade Baixa (Early Stage)
├── PicoClaw ──────► Feature bus, review backlog
└── NullClaw ──────► Baixa atividade, community care
```

---

## 7. Sinais de Tendência

### 7.1 Tendências de Mercado

| Tendência | Evidência | Implicação |
|-----------|-----------|------------|
| **Modularização de canais** | 10+ integrações (Telegram, Discord, Feishu, WhatsApp, QQ, WeCom, XMPP) | Diferenciação por cobertura, não por profundidade |
| **Multi-agente nativo** | PicoClaw collaboration bus, NanoBot subagents, IronClaw concurrent turns | Decomposição de tarefas complexas em padrões first-class |
| **Human-in-the-loop** | SuspTurn, approval modals, permission granularity | Enterprise adoption requer checkpoints de aprovação |
| **Memory-as-a-service** | ChromaDB fixes, context compression (headroom-ai) | Sessões longas exigem gestão inteligente de estado |
| **Mobile/Termux como target** | 3+ projetos com issues Android/Termux | Democratização do deployment |
| **Feature flags centralizados** | IronClaw #5091, Hermes planning | Release management mais sofisticado |

### 7.2 Preocupações Emergentes

1. **Segurança em produção**
   - .env leak em snapshots (Hermes #48441)
   - SSRF bypass via ISATAP (PicoClaw #3143)
   - TLS vulnerabilities (ZeroClaw #5869)

2. **Estabilidade de providers alternativos**
   - DeepSeek hangs (CoPaw #5328)
   - Zhipu API failures (CoPaw #5330)
   - Alibaba/Qwen incompatibility (IronClaw #1012)

3. **UX para não-técnicos**
   - TUI inline (NanoBot #4329)
   - Onboard wizard (NanoBot #4395)
   - RTL Arabic localization (Hermes #44987)

### 7.3 Oportunidades Identificadas

| Oportunidade | Projetos | Viabilidade |
|--------------|----------|-------------|
| **XMPP como canal federado** | NanoBot (#1945) | Alta — demanda por protocolo open standard |
| **ntfy para self-hosted** | Hermes (#13866) | Média — nicho air-gapped |
| **Compressão de contexto** | Hermes (#39691) | Alta — impacto direto em custos |
| **Agent collaboration bus** | PicoClaw (#2937) | Média — arquitetura experimental |

---

## Conclusão

O ecossistema de agentes de IA open source em junho de 2026 demonstra **consolidação nos líderes** (Hermes Agent, ZeroClaw) enquanto projetos menores (NullClaw, PicoClaw) enfrentam desafios de escala e engajamento. A modularização de canais de mensageria e a emergência de padrões multi-agente representam as tendências técnicas mais significativas. **NullClaw**, com apenas 1 PR e 2 issues, demonstra sinais preocupantes de negligência comunitária que podem comprometer sua viabilidade a médio prazo se não houver revitalização da governança.

---

*Relatório gerado em 2026-06-20. Dados extraídos dos relatórios de atividade individual de cada projeto.*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-06-20

---

## 1. Panorama do Dia

O projeto NanoBot apresenta **alta atividade** na data de hoje, com 35 PRs atualizados e 9 issues movimentadas nas últimas 24h. Nenhum lançamento foi publicado, indicando que a equipe está em fase de estabilização e preparação para uma próxima release. A dinâmica é marcadamente orientada a **feature development e hardening**: enquanto PRs recentes corrigiram problemas críticos de timeout e sessões legacy, o pipeline atual concentra-se em melhorias de usabilidade (TUI inline, onboard wizard), extensões de canais (Telegram 10.1, XMPP) e controles finos para subagentes e cron jobs. O volume de atividade sugere uma comunidade engajada, com colaboração distribuída entre mantenedores e contribuidores externos.

---

## 2. Lançamentos

**Nenhum release publicado nas últimas 24h.**

- Não há changelog ou notas de migração a reportar neste ciclo.
- A ausência de releases indica que a equipe optou por acumular commits antes de um próximo tag, possivelmente para incluir o conjunto robusto de PRs abertos atualmente em revisão.

---

## 3. Progresso do Projeto

Os seguintes PRs foram **merged/closed** hoje e representam avanços concretos:

| PR | Título | Área | Impacto |
|----|--------|------|---------|
| [#4230](https://github.com/HKUDS/nanobot/pull/4230) | fix: set httpx timeout for streamableHttp transport | Infra/MCP | Corrige timeout infinito que causava bloqueios indefinite em handshakes HTTP; essencial para estabilidade de servidores MCP |
| [#4246](https://github.com/HKUDS/nanobot/pull/4246) | fix(session): delete_session also removes legacy path files | Sessions | Elimina assimetria entre caminhos legacy e workspace que permitia revival acidental de sessões deletadas |
| [#4394](https://github.com/HKUDS/nanobot/pull/4394) | fix: support OpenAI image reference edits | Provider/OpenAI | Adiciona suporte a `/images/edits` com multipart uploads, habilitando GPT Image models com imagens de referência |
| [#4342](https://github.com/HKUDS/nanobot/pull/4342) | fix(feishu): support reading WebSocket rendered card content | Canal/Feishu | Resolve problema de renderização de cards Feishu via WebSocket com 3 mismatches estruturais corrigidos |
| [#2655](https://github.com/HKUDS/nanobot/pull/2655) | feat(discord): overhaul — discord.py 2.x, slash commands, UI components | Canal/Discord | Overhaul completo do canal Discord com migração para discord.py 2.x, slash commands e componentes interativos |

**PRs em destaque no pipeline atual (abertos):**

| PR | Título | Área | Relevância |
|----|--------|------|------------|
| [#4416](https://github.com/HKUDS/nanobot/pull/4416) | feat(cron): support job model presets | Cron/Jobs | Permite presets de modelo por job, isolando overrides sem mutar o agent live model |
| [#4415](https://github.com/HKUDS/nanobot/pull/4415) | feat(subagent): allow spawn model override | Subagentes | Habilita override de modelo por spawn, fortalecendo o padrão de subagentes |
| [#4414](https://github.com/HKUDS/nanobot/pull/4414) | feat(subagent): add aggregated result mode | Subagentes | Novo modo `aggregated` que bufa resultados e publica um único combined message |
| [#4329](https://github.com/HKUDS/nanobot/pull/4329) | feat(cli): add inline TUI for nanobot agent | CLI/UX | TUI inline para `nanobot agent` em TTY interativo, com flag `--classic` para fallback |
| [#4411](https://github.com/HKUDS/nanobot/pull/4411) | feat(agent): add SuspendTurn | Core Agent | Sentinel para pausar turns em async/human-in-the-loop sem produzir mensagem final |

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários)

1. **[#4013](https://github.com/HKUDS/nanobot/issues/4013)** — *LLM stream stalled for more than 90 seconds* (bug, question — 5 comentários)
   - **Tópico:** Erro de stream após upgrade para v0.2.0; usuário reporta que renders tornam o trabalho inútil.
   - **Status:** CLOSED — indica que o problema foi potencialmente endereçado ou classificado.

2. **[#4374](https://github.com/HKUDS/nanobot/issues/4374)** — *SOUL.md/USER.md read/write asymmetry* (feature request — 3 comentários)
   - **Tópico:** Arquivos bootstrap são lidos do project workspace por turno, mas escritos no workspace default. Requisita simetria.
   - **Status:** CLOSED — demanda reconhecida; pode ter sido abordada em PR correlato.

3. **[#4389](https://github.com/HKUDS/nanobot/issues/4389)** — *Per-model contextWindowTokens* (question — 2 comentários)
   - **Tópico:** `contextWindowTokens` é global e não per-model; fallback models com contexto menor não recebem trimming adequado.
   - **Status:** CLOSED — questão de design documentada.

4. **[#4287](https://github.com/HKUDS/nanobot/issues/4287)** — *Empty model responses not triggering fallback* (bug — 2 comentários)
   - **Tópico:** Respostas vazias de DeepSeek são detectadas como erro mas classificadas como "non-fallbackable", impedindo switch automático.
   - **Status:** CLOSED.

### PRs com maior interesse (comentários e área)

- **[#1945](https://github.com/HKUDS/nanobot/pull/1945)** — XMPP channel: PR antigo (março) com atividade contínua, sinalizando demanda por protocolo federation-aware além dos canais proprietários.
- **[#4412](https://github.com/HKUDS/nanobot/pull/4412)** — Suppress routine cron notifications: Resposta direta a issue #4410, mostrando ciclo rápido de issue → PR.
- **[#4395](https://github.com/HKUDS/nanobot/pull/4395)** — Onboard wizard improvement: Reforça tendência de investimento em UX de onboarding.

---

## 5. Bugs e Estabilidade

### Bugs em Aberto

| Issue | Severidade | Descrição | Link |
|-------|-----------|-----------|------|
| #4410 | **Alta** | Heartbeat envia mensagem mesmo quando "don't send" — regressão desde v0.15 | [Issue #4410](https://github.com/HKUDS/nanobot/issues/4410) |
| #4418 | Média | Heartbeat delivery vai para canal errado (mais recente) em vez do canal de origem | [Issue #4418](https://github.com/HKUDS/nanobot/issues/4418) |
| #4413 | Média | Telegram API 10.1 rich messages não suportadas — formatação limitada | [Issue #4413](https://github.com/HKUDS/nanobot/issues/4413) |

### Bugs Recentemente Fechados (hardening)

- **#4345** — Image-strip fallback vaza file path para o modelo: corrigido em release anterior.
- **#4052** — MCP `notifications/progress` rejeitadas como invalid literal em v0.2.0: corrigido.
- **#4013** — Stream stalled >90s: tratado e fechado.

### Análise de Severidade

O bug **#4410** é o mais crítico: trata-se de **regressão comportamental** que viola a expectativa do usuário (heartbeat silencioso quando apropriado). Dado que possui PR acompanhante ([#4412](https://github.com/HKUDS/nanobot/pull/4412)), a resolução é iminente. Issues #4418 e #4413 são de **impacto médio** — afetam canais específicos e não bloqueiam o uso core.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Request (issues abertas hoje)

| Issue | Feature | Motivação | Link |
|-------|---------|-----------|------|
| #4418 | Heartbeat delivery context-aware | Entrega ao canal de origem, não ao mais recente | [Issue #4418](https://github.com/HKUDS/nanobot/issues/4418) |
| #4413 | Telegram Bot API 10.1 rich messages | Habilitar formatação avançada (bold, italic, code blocks nativas) | [Issue #4413](https://github.com/HKUDS/nanobot/issues/4413) |

### Sinais de Roadmap a Partir dos PRs Abertos

A análise dos PRs em revisão revela **4 eixos estratégicos** para a próxima release:

1. **Subagentes avançados** — PRs [#4415](https://github.com/HKUDS/nanobot/pull/4415), [#4414](https://github.com/HKUDS/nanobot/pull/4414) adicionam controle de modelo por spawn e modo de resultado agregado. Sinaliza foco em arquiteturas multi-agent.

2. **Cron jobs mais flexíveis** — PRs [#4416](https://github.com/HKUDS/nanobot/pull/4416), [#4412](https://github.com/HKUDS/nanobot/pull/4412), [#3590](https://github.com/HKUDS/nanobot/pull/3590) mostram investimento em controles per-job, suppress de notificações e trigger manual.

3. **UX e CLI** — TUI inline ([#4329](https://github.com/HKUDS/nanobot/pull/4329)) e onboard wizard melhorado ([#4395](https://github.com/HKUDS/nanobot/pull/4395)) indicam prioridade em experiência de primeiro uso e terminal.

4. **Human-in-the-loop** — SuspTurn ([#4411](https://github.com/HKUDS/nanobot/pull/4411)) adiciona capacidade de pausa para aprovação assíncrona, expandindo casos de uso enterprise.

### Demanda Recorrente Identificada

- Suporte a mais canais/protocolos (XMPP [#1945](https://github.com/HKUDS/nanobot/pull/1945), Telegram 10.1 [#4413](https://github.com/HKUDS/nanobot/issues/4413)).
- Flexibilização de modelos (per-model context window [#4389](https://github.com/HKUDS/nanobot/issues/4389), per-spawn override [#4415](https://github.com/HKUDS/nanobot/pull/4415)).

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Dor | Evidência | Severidade |
|-----|-----------|-----------|
| **Regressão de silêncio do heartbeat** | Usuário reporta que "in old version, if heartbeat have cron job, but no special thing it wont message me" — agora envia. | **Alta** |
| **Stream stalls bloqueiam trabalho** | "renders any real work useless" — upgrade para v0.2.0 quebrou caso de uso produtivo. | Alta |
| **Fallback ineficiente para modelos menores** | Contexto global não adapta ao fallback model; prompts não são trimmed. | Média |
| **Assimetria workspace read/write** | SOUL.md lido do project path mas escrito no default — confusão para usuários de project workspaces. | Média |
| **MCP notifications/progress ignoradas** | Servidores que emitem progress durante operações longas geram Pydantic validation errors. | Média |

### Cenários de Uso Reforçados

- **Agente Telegram** como runtime principal (múltiplas issues e PRs direcionados).
- **Project workspaces** como padrão de organização (leitura de bootstrap files).
- **Cron jobs / heartbeat** como sistema de automação proativa.
- **Subagentes** como padrão para decomposição de tarefas complexas.

### Satisfação

- O volume de PRs contribuídos externamente (XMPP, TUI, onboard wizard, cron presets) indica **alta satisfação e ownership** da comunidade.
- Ciclo rápido issue → PR (ex: #4410 → #4412) demonstra maturidade do processo de triagem.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta há Longo Tempo

| Issue | Idade | Status | Prioridade |
|-------|-------|--------|------------|
| [XMPP channel #1945](https://github.com/HKUDS/nanobot/issues/1945) | ~3 meses | PR aberto | Alta (demanda de protocolo alternativo) |
| [Dream update scope controls #3591](https://github.com/HKUDS/nanobot/pull/3591) | ~7 semanas | PR aberto | Média (feature de controle) |
| [Heartbeat manual trigger #3590](https://github.com/HKUDS/nanobot/pull/3590) | ~7 semanas | PR aberto | Média (complementa #4412) |
| [Token estimation offline #3662](https://github.com/HKUDS/nanobot/pull/3662) | ~6 semanas | PR aberto | Média (resiliência offline) |

### PRs que Necessitam Review ou Decisão

| PR | Autor | Bloqueio? | Nota |
|----|-------|-----------|------|
| [#1945](https://github.com/HKUDS/nanobot/pull/1945) XMPP | regularfry | Não | Funciona self-hosted; precisa de validação de mantenedores |
| [#4411](https://github.com/HKUDS/nanobot/pull/4411) SuspendTurn | vinit-patel-athena | Não | Feature de alto impacto; review de design desejável |
| [#4329](https://github.com/HKUDS/nanobot/pull/4329) TUI inline | pancacake | Não | UX significativa; pode conflitar com roadmap CLI existente |

### Recomendação de Priorização

1. **Merge #4412** (cron notification suppression) — fecha bug #4410 e tem review advanced.
2. **Review #4411** (SuspendTurn) — arquitetura nova; decisão de design antes de merge.
3. **Triagem #1945** (XMPP) — PR antigo com "no guarantees" exige decisão de aceitar/mainter ou fechar.
4. **Consolidação #4416 + #4415 + #4414** — subagentes podem ser feature set coeso para release.

---

*Relatório gerado em 2026-06-20 com base em dados de atividade do GitHub HKUDS/nanobot.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent
## Data: 2026-06-20 | NousResearch/hermes-agent

---

## 1. Panorama do Dia

O projeto Hermes Agent atravessa um período de **alta atividade e transformação**, impulsionado pelo recente lançamento da v0.17.0 ("The Reach Release"), que representou um salto massivo em código (~235K linhas adicionadas, ~800 PRs mergeados, 245 contributors). Nas últimas 24h, o repositório registrou **50 issues e 50 PRs atualizados**, indicando uma comunidade extremamente ativa. O ritmo de desenvolvimento continua intenso com dois PRs P1 em aberto — um sobre cache de sessão do gateway e outro sobre symlinks quebrados do browser — evidenciando que a equipe está em modo de estabilização pós-release. A saúde geral do projeto é positiva, mas a velocidade de mudanças exige atençãoredobrada à regressão.

---

## 2. Lançamentos

### 🎉 v0.17.0 — "The Reach Release" (19/06/2026)
**Release notes:** [NousResearch/hermes-agent/releases/tag/v2026.6.19](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.6.19)

| Métrica | Valor |
|---|---|
| Commits | ~1.475 |
| PRs mergeados | ~800 |
| Arquivos alterados | 1.693 |
| Linhas adicionadas | 235.390 |
| Linhas removidas | 50.730 |
| Issues fechadas | 300+ |
| Contribuidores | 245 |

**Destaques temáticos:** v0.16.0 trouxe Hermes para o desktop; v0.17.0 expande seu alcance (daí "Reach Release"). Não foram detalhadas breaking changes específicas no sumário, mas a magnitude de alterações sugere que **migrações de configuração e plugins terceiros merecem verificação cautelosa**.

> ⚠️ **Nota de migração:** givenor a volume massivo de mudanças, recomenda-se testar exaustivamente integrações com providers personalizados, gateways não-oficiais e plugins que dependam de APIs internas antes de atualizar em ambientes de produção.

---

## 3. Progresso do Projeto

### PRs Recentes Relevantes

| # | Título | Área | Tipo | Status |
|---|---|---|---|---|
| [#49257](https://github.com/NousResearch/hermes-agent/pull/49257) | fix(gateway): invalidate agent cache when session_id rotates | gateway | Bug P1 | ABERTO |
| [#30861](https://github.com/NousResearch/hermes-agent/pull/30861) | fix(terminal): scope environment cache by session key (previne cross-profile SSH leakage) | terminal/segurança | Security P1 | ABERTO |
| [#49254](https://github.com/NousResearch/hermes-agent/pull/49254) / [#49239](https://github.com/NousResearch/hermes-agent/pull/49239) | fix(windows): prefer managed node for whatsapp and desktop | windows/whatsapp | Bug P2 | **FECHADO** |
| [#49256](https://github.com/NousResearch/hermes-agent/pull/49256) | fix(memory): gate external provider bridge on successful writes | memory | Bug P2 | ABERTO |
| [#49258](https://github.com/NousResearch/hermes-agent/pull/49258) | feat(gateway/telegram): native HTML tables via sendRichMessage | telegram | Feature P2 | ABERTO |
| [#34243](https://github.com/NousResearch/hermes-agent/pull/34243) | fix(cron): fall back to root scripts/ dir for profile-context jobs | cron | Bug P2 | ABERTO |
| [#25506](https://github.com/NousResearch/hermes-agent/pull/25506) | fix(clarify): check interrupt flag in gateway wait_for_response loop | gateway | Bug P2 | ABERTO |
| [#24866](https://github.com/NousResearch/hermes-agent/pull/24866) | fix(dingtalk): add circuit breaker to prevent infinite reconnect storm | dingtalk | Bug P2 | ABERTO |

**Avanços notáveis:**
- **Segurança P1 resolvida (em revisão):** o PR [#30861](https://github.com/NousResearch/hermes-agent/pull/30861) corrige vazamento de variáveis de ambiente entre sessões SSH em perfis diferentes — um bug crítico para ambientes compartilhados.
- **Windows stability:** dois PRs duplicates fechando a mesma issue sobre Node gerenciado confirmam que o problema de WhatsApp/Desktop no Windows foi finalmente endereçado.
- **Memory integrity:** o PR [#49256](https://github.com/NousResearch/hermes-agent/pull/49256) garante que bridges externos (RetainDB, Honcho, Supermemory, OpenViking) só recebem operações após commit no store interno, eliminando inconsistências silenciosas.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários + reações)

| # | Título | Comentários | 👍 | Prioridade |
|---|---|---|---|---|
| [#39691](https://github.com/NousResearch/hermes-agent/issues/39691) | feat(compression): integrate headroom-ai for tool output compression | 6 | **9** | P3 |
| [#38478](https://github.com/NousResearch/hermes-agent/issues/38478) | [Bug]: camofox browser screenshots cropped | 6 | 0 | P2 |
| [#41625](https://github.com/NousResearch/hermes-agent/issues/41625) | MCP tools discovered but not exposed to agent in TUI mode | 5 | 1 | P2 |
| [#19753](https://github.com/NousResearch/hermes-agent/issues/19753) | Auxiliary title generation 404 on custom Anthropic-mode providers | 5 | 2 | P3 |

### Análise das Demandas

🔴 **Compressão de Contexto (#39691)** — Com 9 reações, esta é a issue mais desejada pela comunidade. O pedido é substituir a sumarização por janela inteira por compressão inteligente via headroom-ai no output de ferramentas. O impacto seria enorme em sessões longas, especialmente com LLMs de contexto limitado.

🟡 **Browser Provider Issues (#38478)** — Screenshots cortados no camofox afetam qualquer fluxo de automação web. Issue antiga (03/06) com 6 comentários indica complexidade na reprodutibilidade ou na solução.

🟡 **MCP em TUI (#41625)** — Considerada closed mas aparentemente a conversa continua (5 comentários). A comunidade tem forte interesse em usar MCP servers no modo TUI sem workarounds.

🟢 **Provider Modes (#19753)** — Providers custom com api_mode anthropic quebram em tasks auxiliares (title generation, compression). Interessante notar que a mesma issue [#32858](https://github.com/NousResearch/hermes-agent/issues/32858) (curation prompts vazando para memória do usuário) foi criada por contribuidor diferente, sugerindo que a arquitetura de providers custom tem problemas sistêmicos.

---

## 5. Bugs e Estabilidade

### 🔴 P1 — Críticos (ação imediata requerida)

| # | Título | Link | Descrição |
|---|---|---|---|
| #48721 | hermes update targets wrong Python + PEP 668 | [Issue](https://github.com/NousResearch/hermes-agent/issues/48721) | `hermes update` no macOS com Homebrew Python 3.14 aponta para interpreter errado e é bloqueado por PEP 668. Afeta fluxo de instalação padrão. |
| #49196 | Dashboard container role detection reads wrong PID | [Issue](https://github.com/NousResearch/hermes-agent/issues/49196) | Sob s6-overlay v3, o container dashboard inicia gateways por perfil, causando duplicação de polling Telegram e perda silenciosa de mensagens. |
| #48521 | agent-browser symlink becomes dangling after hermes update | [Issue](https://github.com/NousResearch/hermes-agent/issues/48521) | No macOS/Linux, `hermes update` quebra o symlink `/opt/homebrew/bin/agent-browser`, invalidando todas as ferramentas de browser integradas. |
| #48441 | Terminal snapshots leak .env secrets in plaintext | [Issue](https://github.com/NousResearch/hermes-agent/issues/48441) | Snapshot mechanism escreve `export -p` (com secrets) em arquivos legíveis por qualquer processo/usuário sob `cache/terminal/hermes-snap-*.sh`. **Implicação de segurança grave.** |

### 🟠 P2 — Altos (impacto significativo)

| Categoria | Issues | Impacto |
|---|---|---|
| **Gateway/Plataforma** | #48648 (Telegram duplication loop), #49242 (WhatsApp Node), #48623 (reverse proxy login) | Funcionalidade core de mensageria |
| **Auth/OAuth** | #48534 (Anthropic Max OAuth 404), #48731 (model switch provider) | Login e切换 de provedores |
| **TUI/Desktop** | #48388 (config sorting), #47500 (protocol handlers), #47795 (scroll bounce) | Experiência do usuário desktop |
| **Providers** | #47868 (timestamp metadata reject), #47970 (GLM-5.2 context), #19753 (custom provider aux tasks) | Compatibilidade com LLMs |
| **ACP** | #49226 (session stranded after compression), #33023 (tool events silently lost) | Clientes ACP (VS Code, AionUI) |
| **Cron/Arquivos** | #48552 (tilde HOME mismatch), #34243 (cron scripts path) | Automação e scripts |

### 🟡 P3 — Médios

Markdown rendering (#20084), MCP plugin slash commands truncados (#33480), async logging (#48618), entre outros.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features com Alto Potencial

| # | Título | Plataforma | Comentários | Análise |
|---|---|---|---|---|
| [#39691](https://github.com/NousResearch/hermes-agent/issues/39691) | Integrate headroom-ai for tool output compression | agent/compression | 6 | **Candidata a roadmap.** Reduz custo e latência em sessões longas. Requer decisão arquitetural: compressão no output de tools vs. contexto global. |
| [#49229](https://github.com/NousResearch/hermes-agent/issues/49229) | Add Zulip platform adapter plugin | gateway | 2 | Integração com equipe open-source. Boa indicação de adoção em ambientes corporativos. |
| [#13866](https://github.com/NousResearch/hermes-agent/issues/13866) | Support ntfy as native Messaging Provider | gateway | 3 | Para air-gapped/self-hosted. Nicho, mas alta demanda em cenários NAS/VPS privados. |
| [#32159](https://github.com/NousResearch/hermes-agent/issues/32159) | Support ordered failover chains for web backends | tools/web | 2 | Melhora resiliência de search/extract. Hoje só um backend ativo por capability. |
| [#49037](https://github.com/NousResearch/hermes-agent/pull/49037) | First-class projects with backend-authoritative session tree | CLI/TUI/sidebar | — | PR aberto. Transforma workspaces inferred (git-branch) em entidades nomeadas com árvore hierárquica. **Mudança conceitual significativa.** |
| [#41756](https://github.com/NousResearch/hermes-agent/pull/41756) | Integrate kanban into desktop app | desktop | — | Kanban dentro do Electron app, eliminando necessidade de CLI separada. |
| [#44987](https://github.com/NousResearch/hermes-agent/pull/44987) | Arabic localization with full RTL support | i18n | — | Arabic como locale oficial com RTL completo. Expansão de mercado non-English. |
| [#40301](https://github.com/NousResearch/hermes-agent/pull/40301) | Add --nous flag to upload diagnostics to Nous S3 | debug | — | Diagnóstico proprietário para suporte. Facilita debugging de usuários enterprise. |

### Sinais de Direção

1. **Modularização de plataforma:** múltiplas integrações de mensageria (Zulip, ntfy, DingTalk com circuit breaker) sugerem estratégia de "hub universal".
2. **Desktop como cidadão de primeira:** kanban, RTL Arabic, symlink fixes específicos de desktop indicam foco em UX do app Electron.
3. **Resiliência operacional:** failover chains, circuit breakers, e tratamento de erros (interrupt flags, timeout unificado) mostram amadurecimento do gateway.
4. **Segurança ganhando peso:** terminal environment scoping, .env leak prevention, e OAuth fixes (Anthropic) são prioridades crescentes.

---

## 7. Resumo de Feedback dos Usuários

### Dores Realmente Reportadas

| Dor | Evidence | Impacto |
|---|---|---|
| **Atualização quebra browser tools** | [#48521](https://github.com/NousResearch/hermes-agent/issues/48521) — macOS/Linux sym

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-06-20

---

## 1. Panorama do Dia

O projeto PicoClaw apresenta **atividade moderada-alta** nas últimas 24 horas, com 7 PRs atualizados e 3 issues abertas. O destaque vai para a publicação de uma nova nightly build (v0.3.0-nightly.20260619), indicando progresso contínuo em direção à versão 0.3.0. A comunidade mantém engajamento em múltiplas frentes: segurança (SSRF guard bypass), compatibilidade cross-platform (Windows path handling) e novas funcionalidades (agent collaboration, Telegram permissions). O volume de PRs "stale" sugere que há pendências de revisão que podem precisar de atenção dos mantenedores.

---

## 2. Lançamentos

### 🌙 Nova Nightly Build Disponível

**Release:** `nightly` — `v0.3.0-nightly.20260619.287853ab`

| Item | Detalhe |
|------|---------|
| **Tipo** | Automated nightly build |
| **Data** | 2026-06-19 |
| **Commit** | `287853ab` |
| **Branch** | `main` |

**Changelog:** https://github.com/sipeed/picoclaw/compare/v0.3.0...main

> ⚠️ **Aviso:** Esta é uma build automatizada e pode ser instável. Uso em produção não recomendado.

**Análise:** O projeto está em ritmo ativo de desenvolvimento pré-0.3.0, com múltiplas correções sendo mergeadas em `main`. Recomenda-se acompanhar o changelog completo para identificar breaking changes antes da release estável.

---

## 3. Progresso do Projeto

### PR Merged/Closed (Últimas 24h)

#### ✅ #2956 — `fix: preserve channel enabled state when merging security.yml`
**Status:** CLOSED  
**Autor:** yuxuan-7814  
**Atualizado:** 2026-06-19

**Problema resolvido:** Canais configurados como `enabled: true` em `config.json` estavam sendo desabilitados após carregar `.security.yml`. Quando usuários adicionavam credenciais (ex: `telegram.token`) ao `security.yml` sem definir explicitamente `enabled: true`, o processo de merge sobrescrevia o estado habilitado.

**Impacto:** Corrigiu um bug de regressão silenciosa que poderia desabilitar canais sem notificação, afetando deployments em produção.

🔗 https://github.com/sipeed/picoclaw/pull/2956

---

### PRs Abertas em Revisão (Últimas 24h)

| PR | Título | Autor | Tipo |
|----|--------|-------|------|
| #3143 | fix(web): block private IPv4 embeds in ISATAP literals | lc6464 | Bug fix (Segurança) |
| #3091 | fix(openai_compat): add ok check for native_search type assertion | chengzhichao-xydt | Bug fix |
| #3053 | fix(evolution): add ok check for LoadOrStore type assertion | chengzhichao-xydt | Bug fix |
| #3048 | fix(mcp): reject unknown pre-positional flags in add | afjcjsbx | Bug fix |
| #3045 | fix(identity): allow_from fallthrough for Matrix user IDs with colon | chengzhichao-xydt | Bug fix |
| #2937 | Feat/agent collaboration | afjcjsbx | Feature |

---

## 4. Temas Quentes da Comunidade

### 🔥 Issue #2472 — Bug: `list_dir` retorna "invalid argument" no Windows
**Status:** ABERTA  
**Autor:** ut2or1  
**Comentários:** 6 | 👍: 1  
**Atualizado:** 2026-06-19

**Resumo técnico:**  
`list_dir` falha no Windows com `invalid argument` porque backslashes (`\`) específicos do Windows são passados diretamente para Go's `fs.FS`/`os.Root`, que exige estritamente forward slashes (`/`).

**Impacto:** Usuários Windows não conseguem listar diretórios através do sistema de arquivos virtual do PicoClaw.

**Análise da demanda:** Bug com impacto direto em usabilidade cross-platform. A quantidade de comentários (6) indica que outros usuários já reproduziram ou confirmaram o problema.

🔗 https://github.com/sipeed/picoclaw/issues/2472

---

### 💬 Issue #3114 — Future Request: Controle de permissões Telegram por tipo de conversa
**Status:** ABERTA  
**Autor:** v2up-32mb  
**Comentários:** 1 | 👍: 1  
**Atualizado:** 2026-06-19

**Proposta:** Implementar "security boundaries" no Telegram:
- **DM (privado)** → permissões completas
- **Grupo** → operações perigosas restritas (`exec`, `write_file`, `delete_file`)
- **Canal** → operações perigosas restritas

**Contexto:** Atualmente, se um bot é adicionado a um grupo, qualquer membro autorizado pode executar comandos shell ou modificar arquivos.

🔗 https://github.com/sipeed/picoclaw/issues/3114

---

### ⚠️ Issue #3150 — Bug: "它给自己整失忆了" (Amnésia do bot)
**Status:** ABERTA  
**Autor:** svier0  
**Comentários:** 2 | 👍: 0  
**Criado/Atualizado:** 2026-06-19

**Resumo:** Relato recente (mesmo dia) de comportamento anômalo onde o agente parece "perder a memória". Detalhes ainda limitados na issue, mas a natureza do bug sugere problema com persistência de estado ou contexto de sessão.

🔗 https://github.com/sipeed/picoclaw/issues/3150

---

## 5. Bugs e Estabilidade

### 🐛 Bugs Reportados por Severidade

| Severidade | Issue | Descrição | Status |
|------------|-------|-----------|--------|
| **Alta** | #3150 | Amnésia do agente (perda de estado/contexto) | ABERTA |
| **Alta** | #2472 | `list_dir` quebrado no Windows (path separator) | ABERTA |
| **Média** | #3143 | SSRF guard bypass via ISATAP IPv6 literals | ABERTA (PR pronto) |

### 🔒 Correção de Segurança Pendente

**PR #3143 — `fix(web): block private IPv4 embeds in ISATAP literals`**

Este PR corrige um bypass no SSRF guard identificado na issue #3074. A correção:
- Ensina o classificador de IP a reconhecer literais ISATAP IPv6 que embutem endereços IPv4 privados/loopback
- Cobre as formas comuns de IID ISATAP (`00:00:5e:fe` e `02:00:5e:fe`)
- Adiciona testes de regressão

> ⚡ **Recomendação:** Priorizar revisão e merge deste PR devido à implicação de segurança.

🔗 https://github.com/sipeed/picoclaw/pull/3143

---

## 6. Pedidos de Features e Sinais de Roadmap

### 🚀 Feature em Desenvolvimento

#### #2937 — Agent Collaboration Bus
**Autor:** afjcjsbx  
**Status:** ABERTA  
**Atualizado:** 2026-06-19

**Descrição:** Introduce um "Agent Collaboration Bus" de primeira classe para PicoClaw com:
- Mailboxes por agente
- Collaboration threads com histórico de sessão isolado
- Structured message envelopes e delivery state
- Permissão-aware routing

**Relevância:** Esta feature representa uma evolução significativa na arquitetura multi-agente do projeto, potencialmente habilitando cenários de colaboração entre agentes.

🔗 https://github.com/sipeed/picoclaw/pull/2937

---

### 📋 Feature Requests Identificados

| # | Feature | Descrição | Usuário | 👍 |
|---|---------|-----------|---------|-----|
| #3114 | Telegram Permission Granularity | Controle de permissões por tipo de conversa (DM/Grupo/Canal) | v2up-32mb | 1 |

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Dor | Evidência | Impacto |
|-----|-----------|---------|
| **Compatibilidade Windows quebrada** | Issue #2472 (6 comentários) | Usuários Windows não conseguem usar `list_dir` |
| **Segurança em grupos Telegram** | Issue #3114 | Risco de execução de comandos por membros não intencionais |
| **Perda de estado do agente** | Issue #3150 | Experiência frustrante em produção |
| **SSRF em web fetch** | PR #3143 | Vulnerabilidade de segurança |

### Padrões de Uso Emergentes

1. **Uso multi-plataforma:** Usuários esperando comportamento consistente entre Windows/Linux/macOS
2. **Deploy em grupos Telegram:** Usuários configurando bots em ambientes multi-usuário (grupos, canais)
3. **Integração com provedores:** Uso de OpenAI-compatible APIs e modelos nativos de busca

---

## 8. Backlog que Merece Atenção

### Issues/PRs Sem Resposta há Tempo

| ID | Tipo | Título | Idade | Última Atualização | Notas |
|----|------|--------|-------|---------------------|-------|
| #2472 | Issue | Bug Windows `list_dir` | ~70 dias | 2026-06-19 | 6 comentários, aguardando triagem |
| #2956 | PR | preserve channel enabled state | ~23 dias | 2026-06-19 | ✅ Closed/merged ✓ |
| #2937 | PR | Agent collaboration | ~27 dias | 2026-06-19 | Feature importante, sem merge |
| #3091 | PR | openai_compat type assertion | ~10 dias | 2026-06-19 | Sem comentários de revisão |
| #3053 | PR | evolution LoadOrStore | ~12 dias | 2026-06-19 | Sem comentários de revisão |
| #3048 | PR | mcp pre-positional flags | ~13 dias | 2026-06-19 | Sem comentários de revisão |
| #3045 | PR | Matrix user IDs with colon | ~13 dias | 2026-06-19 | Sem comentários de revisão |

### ⚠️ Prioridades de Triagem

1. **#2472** — Bug com impacto real em usuários, merece confirmação de solução ou workaround documentado
2. **#2937** — Feature em desenvolvimento há ~27 dias, merece feedback de arquitetura
3. **#3150** — Bug recente (mesmo dia) que pode indicar regressão crítica

---

## 📊 Métricas de Saúde do Projeto (24h)

| Métrica | Valor | Tendência |
|---------|-------|-----------|
| Issues abertas/ativas | 3 | Neutra |
| PRs abertas | 6 | Moderada |
| PRs fechadas/merged | 1 | Positiva |
| Releases | 1 nightly | Positiva |
| Taxa de atividade | Alta | ↑ |

---

*Relatório gerado automaticamente em 2026-06-20 com base em dados do GitHub de [sipeed/picoclaw](https://github.com/sipeed/picoclaw)*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>


# Relatório do Projeto IronClaw — 2026-06-20

---

## 1. Panorama do dia

O IronClaw apresenta **alta atividade de desenvolvimento** no período analisado, com 26 PRs atualizados e 5 issues nos últimos 7 dias, evidenciando um ciclo de releases agressivo. O foco predominante está na maturação do **Reborn** — com PRs significativos para Projects (página completa), concurrent turn execution, feature-flag system e melhorias de CI/CD (mold linker, sccache). A base de código encontra-se em transição arquitetural significativa, com múltiplas funcionalidades de backend e extensibilidade em paralelo. Nenhum release formal foi publicado, indicando que o time prioriza merges incrementais antes de versionamento.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24h.**

O projeto não publicou versões taggeadas neste período, sugerindo que as funcionalidades em desenvolvimento (Projects, concurrent execution, MCP enhancements) aguardam consolidação antes de corte de release.

---

## 3. Progresso do Projeto

### PRs merged/fechadas mais impactantes (11 fechadas)

| # | PR | Escopo | Tamanho | Contribuidor |
|---|-----|--------|---------|--------------|
| [#5095](https://github.com/nearai/ironclaw/pull/5095) | QA recorded fixtures | `docs` | L | `serrfirat` |
| [#5092](https://github.com/nearai/ironclaw/pull/5092) | A/B sccache experiment | `ci` | L | `serrfirat` |
| [#5090](https://github.com/nearai/ironclaw/pull/5090) | Mold linker para E2E/replay-gate | `ci` | M | `serrfirat` |
| [#5089](https://github.com/nearai/ironclaw/pull/5089) | Mold linker + CARGO_BUILD_JOBS=1 lift | `ci` | M | `serrfirat` |
| [#5064](https://github.com/nearai/ironclaw/pull/5064) | Projects DTOs/facade leftover fixes | `reborn` | M | `ilblackdragon` |
| [#5019](https://github.com/nearai/ironclaw/pull/5019) | Projects page frontend wiring (5/5) | `docs` | XL | `ilblackdragon` |
| [#5037](https://github.com/nearai/ironclaw/pull/5037) | Suppress stale extension search prompts | `codex` | M | `serrfirat` |

### Destaques técnicos

**CI/CD Modernização:** A adoção do [mold linker](https://github.com/nearai/ironclaw/pull/5089) representa ~40% de melhoria em tempo de linking para builds Reborn, com [extensão para E2E e replay-gate jobs](https://github.com/nearai/ironclaw/pull/5090). O experimento [A/B sccache vs rust-cache](https://github.com/nearai/ironclaw/pull/5092) busca validar estratégia de cache otimizada.

**Projects Feature Complete:** O stack 5/5 ([#5019](https://github.com/nearai/ironclaw/pull/5019)) entrega a página completa de Projects com CRUD real via `/api/webchat/v2/projects`, eliminando stubs de frontend. Follow-up de fixes em [#5064](https://github.com/nearai/ironclaw/pull/5064).

**QA Infrastructure:** Port de benchmarks de project-setup para harness de record/replay ([#5096](https://github.com/nearai/ironclaw/pull/5096)) e [fixtures para trace scenarios](https://github.com/nearai/ironclaw/pull/5095) fortalecem testabilidade.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento

| # | Título | Status | 👍 | Comentários |
|---|--------|--------|----|-------------|
| [#1012](https://github.com/nearai/ironclaw/issues/1012) | Alibaba Coding Plan em openai_compatible mode | OPEN | 1 | 1 |
| [#5078](https://github.com/nearai/ironclaw/issues/5078) | Approval modal com comandos longos | CLOSED | 0 | 1 |

### Análise

**Alibaba/Qwen Compatibility (#1012):** Issue antiga (Mar 2026) reportando que o Alibaba Coding Plan não funciona no endpoint `openai_compatible`, retornando erro 405. Afeta integridade com provedores alternativos. A comunidade expressa interesse (1 👍) mas sem momentum aparente.

**Approval UX (#5078):** Resolvido — modal de aprovação difulturava revisão quando comandos shell eram extensos. A comunidade demonstrou interesse ao reportar, evidenciando uso intensivo de shell approvals.

---

## 5. Bugs e Estabilidade

### Falhas ativas

| # | Severidade | Descrição | Impacto |
|---|------------|-----------|---------|
| [#4108](https://github.com/nearai/ironclaw/issues/4108) | 🔴 Alta | Nightly E2E failed | Bloco de regressão; workflow `Nightly E2E` reportando falha em `E2E (features)` |
| [#5088](https://github.com/nearai/ironclaw/issues/5088) | 🟡 Média | Shell approval prompt mostra "reads" indevidamente | UX confusa; pode induzir aprovação incorreta |
| [#5078](https://github.com/nearai/ironclaw/issues/5078) | 🟡 Média | Approval modal com comandos longos | RESOLVIDO — dificuldade de revisão em comandos extensos |

### Análise

O **nightly E2E falhando** é a questão de estabilidade mais crítica, indicando regressão em funcionalidades de features. O time deve priorizar root cause analysis. A issue de approval "reads" ([#5088](https://github.com/nearai/ironclaw/issues/5088)) é sub-issue de #4879, sugerindo contexto已知 e possível fila de trabalho.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas proposals

| # | Feature | Escopo | Tamanho | Prioridade |
|---|---------|--------|---------|------------|
| [#5091](https://github.com/nearai/ironclaw/issues/5091) | Unified feature-flag system (env + dynamic switching, targeting, A/B) | `config`, `reborn` | — | Estratégica |
| [#5061](https://github.com/nearai/ironclaw/pull/5061) | Skill extraction & self-evolution | `reborn` | XL | Experimental |
| [#5085](https://github.com/nearai/ironclaw/pull/5085) | Concurrent turn execution via TurnRunScheduler | `reborn` | XL | Performance |
| [#5065](https://github.com/nearai/ironclaw/pull/5065) | One-shot scheduled triggers | `triggers` | XL | Funcionalidade |
| [#5094](https://github.com/nearai/ironclaw/pull/5094) | `/v1/models`, model validation, external-tool gate | `reborn` | XL | API compat. |

### Sinais de roadmap

**Feature Flags Unificado (#5091):** Proposta robusta de `ilblackdragon` para substituir `std::env::var` scattered por sistema centralizado com targeting, rollout gradual e A/B testing. Indica maturidade do Reborn buscando controles de release mais sofisticados.

**Concurrent Execution (#5085):** Elimina gargalo serial do TurnRunnerWorker, permitindo inferência LLM paralela por usuário/tipo. Impacto direto em throughput.

**MCP Enhancements:** 
- Thread-scoped sessions ([#4648](https://github.com/nearai/ironclaw/pull/4648)) resolve colisões de MCP-Session-Id
- Programmatic MCP config + PATCH ([#4735](https://github.com/nearai/ironclaw/pull/4735)) permite configuração dinâmica

**Skill Self-Evolution (#5061):** Background job que distila transcripts em `SKILL.md` reutilizáveis com safety scan. Indica direção de agenticidade avançada.

---

## 7. Resumo de Feedback dos Usuários

### Dores identificadas

1. **UX de Approval em Shell Commands:** Comandos shell longos dominam o modal de aprovação, dificultando revisão ([#5078](https://github.com/nearai/ironclaw/issues/5078) — RESOLVIDO)

2. **Labels Confusos em Approvals:** "reads" aparece indevidamente em prompts de aprovação shell, potencialmente induzindo erro do usuário ([#5088](https://github.com/nearai/ironclaw/issues/5088))

3. **Compatibilidade com Provedores Alternativos:** Alibaba/Qwen coding plan não funciona em `openai_compatible` endpoint ([#1012](https://github.com/nearai/ironclaw/issues/1012))

4. **Credential Prompts em Extension Search:** Busca por extensões gerava prompts de credenciais desnecessários — [suprimido em #5037](https://github.com/nearai/ironclaw/pull/5037)

### Padrões observados

- **Foco em segurança/approval:** Múltiplas issues sobre approval UX indicam uso em contextos de alta confiança onde revisão de ações é crítica
- **Extensibilidade:** Interesse em MCP configurável e extensões programáticas
- **Multi-tenant/hosting:** Desenvolvimento ativo de [perfil hosted-single-tenant PostgreSQL](https://github.com/nearai/ironclaw/pull/5081) sugere preparação para deployment gerenciado

---

## 8. Backlog que Merece Atenção

### Issues sem atividade recente ou aguardando resposta

| # | Título | Criado | Status | Idade | Notas |
|---|--------|--------|--------|-------|-------|
| [#1012](https://github.com/nearai/ironclaw/issues/1012) | Alibaba Coding Plan incompatibility | 2026-03-12 | OPEN | ~97 dias | Problema de compatibilidade API |
| [#4108](https://github.com/nearai/ironclaw/issues/4108) | Nightly E2E failed | 2026-05-27 | OPEN | ~24 dias | Falha de regressão |
| [#4648](https://github.com/nearai/ironclaw/pull/4648) | MCP thread-scoped sessions | 2026-06-09 | OPEN | ~11 dias | PR aguardando merge |
| [#4735](https://github.com/nearai/ironclaw/pull/4735) | MCP programmatic config | 2026-06-10 | OPEN | ~10 dias | PR aguardando merge |

### Recomendações

1. **Priorizar #1012:** 97 dias sem resolução para questão de compatibilidade com provedores alternativos pode impactar adoção
2. **Diagnosticar #4108:** Falha nightly E2E há 24 dias representa risco de regressões não detectadas
3. **Review PRs MCP (#4648, #4735):** Ambos com +10 dias sem merge, representando funcionalidades bloqueadas

---

## Métricas Resumidas (24h)

| Indicador | Valor |
|-----------|-------|
| Issues ativas | 4 |
| Issues fechadas | 1 |
| PRs abertos | 15 |
| PRs merged/fechados | 11 |
| Releases | 0 |
| Falhas críticas | 1 (E2E nightly) |
| Features em desenvolvimento | 8+ PRs XL |

---

*Relatório gerado automaticamente com base em dados GitHub de 2026-06-20. Consulte os links para detalhes completos.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do Projeto CoPaw — 2026-06-20

---

## 1. Panorama do Dia

O projeto CoPaw (QwenPaw) manteve **alta atividade de desenvolvimento** em 20 de junho de 2026, com 11 issues e 17 PRs atualizados nas últimas 24 horas. Não houve novas releases, indicando que a equipe está em ciclo de consolidação de mudanças antes de um próximo lançamento. A atividade concentrou-se em **correções críticas de estabilidade** (especialmente no backend de memória ChromaDB e no tratamento de exceções do console) e em **features de usabilidade** para interface mobile e gestão de modelos. Seis PRs foram fechados/merged, demonstrando boa taxa de throughput. O destaque negativo fica por conta de múltiplos bugs reportados na versão v1.1.12 que indicam regressões de comportamento, especialmente no envio de imagens e na estabilidade com provedores como DeepSeek e Zhipu.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24 horas.**

O projeto encontra-se em período pré-release, com várias correções acumuladas no pipeline que deverão compor uma próxima versão (provavelmente v1.1.13). Recomenda-se monitorar o repositório para a próxima tag.

---

## 3. Progresso do Projeto

### PRs Importantes Fechados/Merged

| # | PR | Descrição | Impacto |
|---|-----|-----------|---------|
| [#5332](https://github.com/agentscope-ai/QwenPaw/pull/5332) | `fix(memory): add index maintenance and timeout protection for ChromaDB` | Adiciona `compact_index()`, `purge_index()`, `get_index_stats()` e estratégia de auto-compactação com threshold configurável (default: 1000 writes) | **Crítico** — resolve problema de índice ChromaDB crescendo até 37GB (Issue #4795) |
| [#5242](https://github.com/agentscope-ai/QwenPaw/pull/5242) | `fix(compaction): add timeout protection to agent.reply() in _compact_context` | Protege contra freezes quando chamadas LLM travam por rede ou rate limiting | **Alta** — melhora estabilidade em ambientes instáveis |
| [#5241](https://github.com/agentscope-ai/QwenPaw/pull/5241) | `fix(cron): increase default misfire_grace_seconds from 60 to 3600` | Amplia janela de tolerância para jobs cron de 60s para 3600s | **Média** — reduz jobs perdidos durante execuções longas |
| [#5338](https://github.com/agentscope-ai/QwenPaw/pull/5338) / [#5337](https://github.com/agentscope-ai/QwenPaw/pull/5337) | `fix(providers): use plain string content for check_model_connection` | Corrige teste de conexão de modelos Zhipu que falhavam mesmo com API funcional | **Média** — resolve frustração de configuração |
| [#5179](https://github.com/agentscope-ai/QwenPaw/pull/5179) | `fix(skills): expand multi-agent collaboration skill trigger keywords` | Adiciona keywords em português para acionar modo team collaboration | **Baixa** — melhoria UX de skills |

### PRs Abertos em Revisão

| # | PR | Descrição | Status |
|---|-----|-----------|--------|
| [#5321](https://github.com/agentscope-ai/QwenPaw/pull/5321) | `feat(context): scroll context manager — durable history + recall REPL` | Nova estratégia de gerenciamento de contexto com recall persistente | Under Review |
| [#5334](https://github.com/agentscope-ai/QwenPaw/pull/5334) | `feat(ui): allow switching agent in collapsed sidebar mode` | Permite trocar agente pelo ícone na sidebar colapsada (mobile) | Open |
| [#5336](https://github.com/agentscope-ai/QwenPaw/pull/5336) | `feat(providers): support custom model ordering within providers` | Adiciona campo `sort_order` para ordenação de modelos | Open |
| [#5335](https://github.com/agentscope-ai/QwenPaw/pull/5335) | `fix(console): yield failed response event on exception to prevent stuck UI` | Corrige UI travada após erro de execução (fecha Issue #5333) | Open |
| [#5331](https://github.com/agentscope-ai/QwenPaw/pull/5331) | `feat(console): real-time SSE push-message notifications with voice beep` | Substitui polling por push sub-50ms com beep de voz | Open |
| [#5326](https://github.com/agentscope-ai/QwenPaw/pull/5326) | `feat: minimize window to system tray on close` | Esconde para tray ao fechar em vez de sair | Open |
| [#5325](https://github.com/agentscope-ai/QwenPaw/pull/5325) | `feat(memory): add optional recency-aware ranking for memory_search` | Decay temporal exponencial para notas diárias | Open |
| [#5324](https://github.com/agentscope-ai/QwenPaw/pull/5324) | `fix(files): use inline content-disposition for file preview` | Corrige download vs. exibição inline de imagens (fecha Issue #5320) | Open |
| [#5323](https://github.com/agentscope-ai/QwenPaw/pull/5323) | `feat(plan): add native todo_write progress panel` | Ferramenta `todo_write` nativa com painel de progresso | Open |
| [#5310](https://github.com/agentscope-ai/QwenPaw/pull/5310) | `feat(sandbox): add bubblewrap Linux sandbox` | Sandbox com mount namespace isolation para Linux | Open |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários)

| # | Título | Comentários | Tipo | Prioridade |
|---|--------|-------------|------|------------|
| [#5329](https://github.com/agentscope-ai/QwenPaw/issues/5329) | Feature: 添加切换agent按钮 na sidebar colapsada | 3 | Enhancement | Média |
| [#4795](https://github.com/agentscope-ai/QwenPaw/issues/4795) | Bug: 向量索引无限膨胀至37G导致memory_search崩溃 | 3 | Bug | **Crítica** |
| [#5267](https://github.com/agentscope-ai/QwenPaw/issues/5267) | Feature: 模型列表支持自定义排序 | 2 | Enhancement | Média |
| [#5328](https://github.com/agentscope-ai/QwenPaw/issues/5328) | Bug: agent卡死在thinking过程(DeepSeek) | 2 | Bug | **Alta** |
| [#5319](https://github.com/agentscope-ai/QwenPaw/issues/5319) | Console shows "Answers have stopped" | 2 | Bug | Baixa (resolvido) |
| [#5317](https://github.com/agentscope-ai/QwenPaw/issues/5317) | Question: Python não encontrado no Tauri | 2 | Question | — |
| [#5330](https://github.com/agentscope-ai/QwenPaw/issues/5330) | Bug: Zhipu API测试成功但模型测试失败 | 1 | Bug | Alta |

### Análise de Demandas

A comunidade demonstra forte interesse em:

1. **Experiência mobile/narrow viewport** — Múltiplas reclamações sobre a sidebar colapsada não permitir troca de agente (#[5329](https://github.com/agentscope-ai/QwenPaw/issues/5329), #[5334](https://github.com/agentscope-ai/QwenPaw/pull/5334))
2. **Customização de interface** — Desejo de ordenar modelos por prioridade (#[5267](https://github.com/agentscope-ai/QwenPaw/issues/5267))
3. **Estabilidade com provedores alternativos** — DeepSeek e Zhipu apresentam problemas de integração que precisam ser endereçados urgentemente

---

## 5. Bugs e Estabilidade

### Bugs Críticos (reportados em 2026-06-19/20)

| # | Título | Severidade | Descrição | Status |
|---|--------|------------|-----------|--------|
| [#4795](https://github.com/agentscope-ai/QwenPaw/issues/4795) | ChromaDB índice cresce até 37GB | **🔴 Crítica** | Após 3 meses de uso normal, índice de vetores explode causando crash recorrente a cada 30 min | **Corrigido** (PR #5332) |
| [#5328](https://github.com/agentscope-ai/QwenPaw/issues/5328) | Agent trava no thinking (DeepSeek) | **🔴 Crítica** | Pensamento trava frequentemente, requer stop+continue manual. Afeta web/console/Tauri no Windows 11 | Aberto |
| [#5333](https://github.com/agentscope-ai/QwenPaw/issues/5333) | Agent trava após envio + input ativo | **🔴 Crítica** | Campo de texto permite nova mensagem mas agent está parado; indica problema SSE/exception handling | **Corrigido** (PR #5335) |

### Bugs Altos

| # | Título | Severidade | Descrição | Status |
|---|--------|------------|-----------|--------|
| [#5330](https://github.com/agentscope-ai/QwenPaw/issues/5330) | Zhipu API conecta mas modelos falham | **🟠 Alta** | Teste de conexão no nível provider funciona, mas todos os modelos individuais falham com API error | **Corrigido** (PRs #5339, #5338, #5337) |
| [#5320](https://github.com/agentscope-ai/QwenPaw/issues/5320) | Imagens não aparecem após v1.1.12 | **🟠 Alta** | Regressão: `send_file_to_user` envia com sucesso mas não exibe imagem inline | **Corrigido** (PR #5324) |

### Bugs Médios/Baixos

| # | Título | Severidade | Descrição | Status |
|---|--------|------------|-----------|--------|
| [#5319](https://github.com/agentscope-ai/QwenPaw/issues/5319) | Console sempre mostra "Answers have stopped" | 🟡 Média | Após reinstall/reboot | **Resolvido** (reinstall) |
| [#5317](https://github.com/agentscope-ai/QwenPaw/issues/5317) | Python não encontrado no Tauri | 🟡 Média | Skills com scripts Python não funcionam no canal Tauri | Aberto |

### Avaliação Geral de Estabilidade

**Pontuação: 6/10** — O projeto apresenta **regressões significativas** na v1.1.12, especialmente no tratamento de exceções SSE (causando UI inconsistente) e no Content-Disposition de arquivos. A correção rápida de múltiplos bugs indica resposta ágil da equipe. A comunidade reporta frustração com a estabilidade de provedores não-oficiais (DeepSeek, Zhipu).

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| # | Título | Categoria | Impacto | Potencial Versão |
|---|--------|-----------|---------|------------------|
| [#5329](https://github.com/agentscope-ai/QwenPaw/issues/5329) | Botão de troca de agente na sidebar colapsada | UI/Mobile | Alto — facilita uso mobile | v1.1.13 (PR #5334 em andamento) |
| [#5267](https://github.com/agentscope-ai/QwenPaw/issues/5267) | Ordenação customizada de modelos por provider | UI/UX | Médio — organiza experiência | v1.1.13 (PR #5336 em andamento) |
| [#5327](https://github.com/agentscope-ai/QwenPaw/issues/5327) | Chat e troca de sessão no "Agent Office" | UI/UX | Médio — workflow multi-agente | backlog |
| [#5322](https://github.com/agentscope-ai/QwenPaw/issues/5322) | Atualização UI em tempo real via API + notificação de voz | UX/Console | Médio — melhora interatividade | v1.1.13 (PR #5331 em andamento) |
| [#5323](https://github.com/agentscope-ai/QwenPaw/issues/5323) | Painel nativo de progresso para tarefas multi-step | UX/Productivity | Médio — visibilidade de execução | v1.1.13 (PR #5323 em andamento) |
| [#5326](https://github.com/agentscope-ai/QwenPaw/issues/5326) | Minimizar para system tray ao fechar | Desktop/UX | Baixo — conveniência | v1.1.13 (PR #5326 em andamento) |

### Tendências Observadas

- **Mobile-first**: Acessibilidade em narrow viewports é uma demanda crescente
- **Multi-agente**: Feature requests indicando uso mais complexo de múltiplos agentes simultâneos
- **Observabilidade**: Melhorias em feedback visual em tempo real (push, vozes, painéis de progresso)

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais Reportadas

1. **Estabilidade e Crashes**
   - *"使用约 3 个月后，ChromaDB 索引膨胀至 37GB...每 30 分钟左右崩溃一次"* (Issue #4795)
   - *"agent经常在thinking的过程中卡死，需要手动点停止，然后发送继续才会继续干活"* (Issue #5328)
   - *"提交了我的指令以后，agent就卡着不动，同时文本框又是可提交新指令的状态，而不是暂停按钮"* (Issue #5333)

2. **Regressões de UI**
   - *"升级到v1.1.12后，用send_file_to_user发送图片时...只执行命令，显示发送成功，但是没有显示图片"* (Issue #5320)
   - *"Zhipu 供应商 API 测试连接成功但所有模型测试连接均失败"* (Issue #5330)

3. **Usabilidade Mobile**
   - *"我通过手机浏览器访问了Qwenpaw...没有办法切换agent"* (Issue #5329)

### Cenários de Uso Identificados

| Cenário | Frequência | Sentimento |
|---------|------------|------------|
| Uso mobile via navegador | Alto | Frustrado |
| Multi-agente com DeepSeek | Alto | Instável |
| Memória de longo prazo (3+ meses) | Baixo | Crítico |
| Configuração de providers alternativos | Médio | Confuso |
| Integração com飞书 (Feishu) | Baixo | Positivo (imagens funcionam) |

### Indicadores de Satisfação

| Indicador | Status |
|-----------|--------|
| Reporte de bugs vs. features | ~60% bugs / 40% features |
| Sentimento geral | ⚠️ Atenção — regressões causam frustração |
| Resolução de issues | ✅ Boa — 6/11 issues fechadas/fixadas |
| Velocidade de resposta | ✅ Alta — PRs publicados no mesmo dia |

---

## 8. Backlog que Merece Atenção

### Issues sem Resposta ou Pendentes há >7 dias

| # | Título | Criado | Atualizado | Status | Ação Recomendada |
|---|--------|--------|------------|--------|------------------|
| [#4795](https://github.com/agentscope-ai/QwenPaw/issues/4795) | ChromaDB 37GB crash | 2026-05-29 | 2026-06-19 | **Corrigido** | Confirmar se PR #5332 resolve completamente e fechar |
| [#5267](https://github.com/agentscope-ai/QwenPaw/issues/5267) | Custom model ordering | 2026-06-17 | 2026-06-19 | **PR aberto** (#5336) | Revisar e dar feedback |
| [#5317](https://github.com/agentscope-ai/QwenPaw/issues/5317) | Python

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-06-20

---

## 1. Panorama do Dia

O projeto ZeroClaw mantém um ritmo intenso de atividade, com **50 issues e 50 PRs atualizados nas últimas 24h**, sinalizando alta produtividade da comunidade. A release **v0.8.1** trouxe 207 commits de 45 contribuidores, equilibrando 123 correções com 46 novas funcionalidades no runtime multiagente. A saúde geral é positiva, com vários PRs críticos merged e novos merges em canais, segurança e infraestrutura, embora cerca de **10 issues P1 de alta severidade** ainda demandem atenção imediata — incluindo bugs de regressão em Slack/Discord, problemas com o Gemini, vulnerabilidades TLS e defeitos no cascade de rename/delete de agentes.

---

## 2. Lançamentos

### 🎉 v0.8.1 — 2026-06-19
**Link:** [Release v0.8.1](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.8.1)

- **Natureza:** Patch release sobre a linha v0.8.x
- **Escopo:** Estabilização do runtime multiagente, canais e provider stack introduzidos em v0.8.0
- **Estatísticas:** 207 commits, 45 contribuidores
- **Composição:**
  - 123 bug fixes
  - 46 features novas
  - 38 outras mudanças
- **Destaque:** Foco em consolidar a nova arquitetura de providers e canais sem breaking changes
- **Breaking changes:** Nenhuma declarada
- **Migração:** Sem notas de migração explícitas; рекомендується testar canais e providers após upgrade

---

## 3. Progresso do Projeto

### PRs Merged/Fechados Hoje (23)

| PR | Autor | Tamanho | Risco | Descrição | Link |
|---|---|---|---|---|---|
| **#7997** | Nillth | L | HIGH | `feat(runtime): universal ingress policy layer (default Loop)` — camada de política de entrada unificada | [#7997](https://github.com/zeroclaw-labs/zeroclaw/pull/7997) |
| **#7833** | Nillth | XL | MEDIUM | `feat(channels/discord): render outbound rich embeds from [EMBED:{…}]` | [#7833](https://github.com/zeroclaw-labs/zeroclaw/pull/7833) |
| **#7993** | Nillth | S | HIGH | `fix(gateway): register devices on legacy /pair + backfill orphaned paired_tokens` | [#7993](https://github.com/zeroclaw-labs/zeroclaw/pull/7993) |
| **#7919** | Nillth | M | HIGH | `feat(web): config-alias rename + delete cascade preview` | [#7919](https://github.com/zeroclaw-labs/zeroclaw/pull/7919) |
| **#7963** | Nillth | M | MEDIUM | `fix(gateway): dashboard Skills page reflects an agent's effective skills` — corrige #7757 | [#7963](https://github.com/zeroclaw-labs/zeroclaw/pull/7963) |
| **#7747** | Yyukan | S | HIGH | `fix(runtime): wire mcp_bundles into agent loop — enforce per-agent MCP server scoping` | [#7747](https://github.com/zeroclaw-labs/zeroclaw/pull/7747) |
| **#8028** | JordanTheJet | XS | LOW | `chore(hardware): gate aardvark-sys behind the hardware feature` | [#8028](https://github.com/zeroclaw-labs/zeroclaw/pull/8028) |
| **#8027** | perlowja | S | LOW | `channel:qq`: resolve #7872 — QQ group passive replies need msg_id | [#8027](https://github.com/zeroclaw-labs/zeroclaw/pull/8027) |
| **#8026** | perlowja | S | LOW | `gateway`: resolve #7876 — tunnel picker hides option-backed providers on fresh | [#8026](https://github.com/zeroclaw-labs/zeroclaw/pull/8026) |
| **#8023** | perlowja | S | LOW | `fix(mcp): stop leaking stdio child processes per heartbeat tick` | [#8023](https://github.com/zeroclaw-labs/zeroclaw/pull/8023) |
| **#8025** | perlowja | S | LOW | `channel:wecom`: resolve #7824 — wecom_ws proactive messaging | [#8025](https://github.com/zeroclaw-labs/zeroclaw/pull/8025) |
| **#8024** | perlowja | S | LOW | `channel:telegram`: resolve #7873 — Telegram media groups dispatch as one | [#8024](https://github.com/zeroclaw-labs/zeroclaw/pull/8024) |
| **#8020** | perlowja | — | LOW | `ci(quality-gate): run strict clippy with --all-features` | [#8020](https://github.com/zeroclaw-labs/zeroclaw/pull/8020) |
| **#8019** | perlowja | — | LOW | `fix(ci): pass provider-dispatch gate and --all-features build on master` | [#8019](https://github.com/zeroclaw-labs/zeroclaw/pull/8019) |
| **#8018** | wangmiao0668000666 | — | MEDIUM | `fix(gateway): make agent rename re-issue converge after post-persist partial failure` | [#8018](https://github.com/zeroclaw-labs/zeroclaw/pull/8018) |
| **#8016** | perlowja | — | LOW | `feat(scripts): add agent-preflight pre-PR validation gate` | [#8016](https://github.com/zeroclaw-labs/zeroclaw/pull/8016) |

**Avanços significativos:**
- **Segurança:** correções em `/pair` legacy, MCP per-agent scoping, orphaned tokens
- **Canais:** melhorias em Discord embeds, QQ, WeCom, Telegram media groups
- **Web/Gateway:** preview de cascade, Skills page com skills efetivos, config pickers temáticos
- **Infraestrutura CI:** gates de qualidade, clippy strict, preflight agent validation
- **Runtime:** universal ingress policy layer

---

## 4. Temas Quentes da Comunidade

### Issues com Mais Comentários

| # | Título | Comentários | 👍 | Tipo | Link |
|---|---|---|---|---|---|
| #7787 | Prebuilt v0.8.0 binaries ship without Slack/Discord channel features | **6** | 1 | Bug (P1) | [#7787](https://github.com/zeroclaw-labs/zeroclaw/issues/7787) |
| #5844 | Too much emphasis on memory | **6** | 0 | Bug (P1) | [#5844](https://github.com/zeroclaw-labs/zeroclaw/issues/5844) |
| #7141 | OIDC Authentication Provider support | **5** | 0 | Feature/RFC (P1) | [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) |
| #5221 | Model cost not captured for schedules, CLI and web agents | **5** | 0 | Bug (P2) | [#5221](https://github.com/zeroclaw-labs/zeroclaw/issues/5221) |
| #6067 | Make channel reply-intent precheck configurable | **5** | 0 | Feature (P2) | [#6067](https://github.com/zeroclaw-labs/zeroclaw/issues/6067) |
| #6002 | Not clearly addressed to the assistant | **5** | 0 | Bug (P2) | [#6002](https://github.com/zeroclaw-labs/zeroclaw/issues/6002) |

**Análise:** A comunidade demonstra forte preocupação com:
1. **Regressão de canais** (#7787) — binaries oficiais losing Slack/Discord sem aviso
2. **Priorização de memória** (#5844) — cron jobs e prompts com memória sobre-determinante
3. **Segurança/OIDC** (#7141) — demanda por autenticação federada
4. **Observabilidade de custos** (#5221) — modelos usados em schedules não capturam custo

---

## 5. Bugs e Estabilidade

### 🔴 P1 — Críticos (Workflow Blocked / Degraded Behavior)

| # | Título | Severidade | Status | Atualizado | Link |
|---|---|---|---|---|---|
| **#7787** | Regressão: Slack/Discord ausentes nos binaries v0.8.0 | S1 | ACCEPTED | 2026-06-19 | [#7787](https://github.com/zeroclaw-labs/zeroclaw/issues/7787) |
| **#7907** | agent rename move state antes de persistir config | S1 | OPEN | 2026-06-19 | [#7907](https://github.com/zeroclaw-labs/zeroclaw/issues/7907) |
| **#7941** | agent delete purge state antes de persistir config (espelho de #7907) | S1 | OPEN | 2026-06-19 | [#7941](https://github.com/zeroclaw-labs/zeroclaw/issues/7941) |
| **#6302** | Gemini 400 — tool_call como primeiro turn (viola histórico) | S1 | ACCEPTED | 2026-06-19 | [#6302](https://github.com/zeroclaw-labs/zeroclaw/issues/6302) |
| **#6037** | Cron jobs podem ser lançados repetidamente enquanto rodam | S1 | ACCEPTED | 2026-06-19 | [#6037](https://github.com/zeroclaw-labs/zeroclaw/issues/6037) |
| **#6841** | vision_provider silenciosamente ignorado — imagens vão para fallback | S1 | ACCEPTED | 2026-06-19 | [#6841](https://github.com/zeroclaw-labs/zeroclaw/issues/6841) |
| **#5808** | 32k context budget excedido no primeiro turno (trim preemptivo perpétuo) | S1 | ACCEPTED | 2026-06-19 | [#5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808) |
| **#5844** | Demasiada ênfase em memória no system prompt | S2 | ACCEPTED | 2026-06-19 | [#5844](https://github.com/zeroclaw-labs/zeroclaw/issues/5844) |
| **#6250** | require_auth como middleware em /api/config e /api/onboard | S2 | ACCEPTED | 2026-06-19 | [#6250](https://github.com/zeroclaw-labs/zeroclaw/issues/6250) |
| **#5869** | 🔒 RUSTSEC advisory cluster (TLS) em rumqttc v0.25.1 | S2 | BLOCKED | 2026-06-19 | [#5869](https://github.com/zeroclaw-labs/zeroclaw/issues/5869) |
| **#7759** | WebSocket gateway acoplado ao ciclo de turns do agente | S2 | IN-PROGRESS | 2026-06-19 | [#7759](https://github.com/zeroclaw-labs/zeroclaw/issues/7759) |
| **#5221** | Custo de modelos não capturado em schedules/CLI/web | S2 | ACCEPTED | 2026-06-19 | [#5221](https://github.com/zeroclaw-labs/zeroclaw/issues/5221) |

### 🟡 P2 — Degraded Behavior

| # | Título | Severidade | Status | Link |
|---|---|---|---|---|
| **#6557** | Reconciliar model switching com estrutura de providers | S2 | IN-PROGRESS | [#6557](https://github.com/zeroclaw-labs/zeroclaw/issues/6557) |
| **#6055** | Slack: hidratar contexto de thread via conversations.replies | S2 | ACCEPTED | [#6055](https://github.com/zeroclaw-labs/zeroclaw/issues/6055) |
| **#5514** | Múltiplas imagens no Telegram geram múltiplas respostas | S3 | ACCEPTED | [#5514](https://github.com/zeroclaw-labs/zeroclaw/issues/5514) |
| **#6002** | Respostas não claramente direcionadas ao assistant | S1 | ACCEPTED | [#6067](

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*