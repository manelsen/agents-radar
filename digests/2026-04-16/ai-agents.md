# Resumo diário do ecossistema de agentes de IA 2026-04-16

> Issues: 8 | PRs: 8 | Projetos cobertos: 7 | Gerado em: 2026-04-16 02:05 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório do Projeto NullClaw — 2026-04-16

---

## 1. Panorama do Dia

NullClaw mantém alta atividade comunitária com 8 issues e 8 PRs atualizados nas últimas 24h, embora nenhum release tenha sido publicado. O projeto está em fase de maturação técnica, evidenciada pela migração para Zig 0.16 (#823) e pela consolidação de funcionalidades críticas como cron jobs DB-backed e correções de segurança no gateway. A diversidade de issues — cobrindo desde bugs de configuração de rede (Otel/https) até documentação e suporte a plataformas (WeChat) — revela um ecossistema em expansão que precisa de atenção simultânea em múltiplas frentes.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

O projeto está em período de preparação técnica. A migração para Zig 0.16 (#823) e as correções de segurança pendentes indicam que um release está sendo articulado. Recomenda-se monitorar o repositório para announcements nas próximas 48-72h.

---

## 3. Progresso do Projeto

Três PRs foram merged/fechados hoje, todos de autoria de **jmylchreest**, representando contribuições significativas para estabilidade e segurança:

| PR | Título | Impacto |
|----|--------|---------|
| [#369](https://github.com/nullclaw/nullclaw/pull/369) | feat(signal): support Note to Self messages | Funcionalidade Signal completa com 4 novos testes |
| [#377](https://github.com/nullclaw/nullclaw/pull/377) | feat(shell): sandbox-validated path environment variables | Segurança reforçada para variáveis de ambiente em shell |
| [#378](https://github.com/nullclaw/nullclaw/pull/378) | fix(security): scope git -C handling | Correção de classificação incorreta de flags git + suporte Note to Self |

**Destaque:** O PR #378 combina duas correções de segurança revisadas — proteção contra má classificação de `git -C` vs `-c` e suporte a envelopes Signal "Note to Self" — demonstrando consolidação eficiente de patches relacionados.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários + reações)

**#812** — **[bug] http_request** (4 comentários, 1 reação 👍)  
Autor: uMendex | Criado: 2026-04-13 | Atualizado: 2026-04-15

Usuário migrou de Picoclaw/ZeroClaw e relata incapacidade de habilitar busca na internet mesmo seguindo todos os exemplos. Este é o issue mais comentado do período, indicando que **a funcionalidade de internet search é crítica para novos usuários** e pode ter uma barreira de configuração não documentada.

**#800** — **[bug] Otel broke due to https constraint** (2 comentários, 1 reação 👍)  
Autor: lestan | Criado: 2026-04-11 | Atualizado: 2026-04-15

Regressão introduzida em v2026.4.9 quando nova constraint forçou endpoints https://. Afeta configuraçõeslegítimas em containers Podman com comunicação interna via HTTP. **Impacto:** usuários em setups de desenvolvimento local ou microserviços podem ter suas integrações de observabilidade quebradas.

---

## 5. Bugs e Estabilidade

### Bugs Reportados (5 issues)

| Severidade | Issue | Descrição | Status |
|------------|-------|-----------|--------|
| **Alta** | [#800](https://github.com/nullclaw/nullclaw/issues/800) | Constraint https quebrou configurações Otel existentes | Aberto |
| **Alta** | [#812](https://github.com/nullclaw/nullclaw/issues/812) | http_request não funciona para busca na internet | Aberto |
| **Média** | [#821](https://github.com/nullclaw/nullclaw/issues/821) | `nullclaw version` retorna "dev" em vez de versão | Aberto |
| **Média** | [#827](https://github.com/nullclaw/nullclaw/issues/827) | `channel status` contradiz saída do `doctor` | Aberto |
| **Média** | [#825](https://github.com/nullclaw/nullclaw/issues/825) | Agent Skills não suporta diretórios aninhados | Aberto |

### Correção Pendente

**#824** — [fix(compaction): fix UTF-8 truncation in history compaction](https://github.com/nullclaw/nullclaw/pull/824) (PR aberto) — Consolida helper `truncateUtf8` em 6 localizações do código de compactação e move utilitário duplicado para `util.zig`. Validação em andamento com `zig build test`.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Demandas Identificadas

| # | Demanda | Contexto | Sinal Estratégico |
|---|---------|----------|-------------------|
| [#825](https://github.com/nullclaw/nullclaw/issues/825) | Support nested Agent skills | Autor referencia PR similar no OpenClaude | Preparação para compatibilidade multi-plataforma |
| [#817](https://github.com/nullclaw/nullclaw/issues/817) | WeChat QR code login | Verificação de suporte a plataforma Asiática | Expansão de mercado / internacionalização |
| [#783](https://github.com/nullclaw/nullclaw/pull/783) | Cron subagent com history e JSON output | Engine DB-backed completa com worker queue | Funcionalidade enterprise-ready em desenvolvimento |

### PRs em Desenvolvimento (Roadmap Implícito)

- **#823** — Migração para Zig 0.16: atualiza codebase para última versão do compilador
- **#783** — Sistema de cron com timezone, alertas e múltiplos job types (skill/agent/shell)
- **#789** — Gateway bind safety, rate limiting por rota+cliente, JSON-escape

**Interpretação:** O roadmap está convergindo para dois eixos: (1) maturidade operacional (cron jobs, gateway seguro, observabilidade) e (2) modernização técnica (Zig 0.16).

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Dor | Evidência | Gravidade |
|-----|-----------|-----------|
| **Internet search não funciona** | #812: usuário dedicado tempo desde sexta-feira testando exemplos | Crítica — onboarding comprometido |
| **Instalação Zig complexa** | #820: usuário questiona se Docker é necessário para Debian | Alta — barreira de entrada |
| **Versão "dev" não informativa** | #821: expectativa de version hash ou número, recebe string inútil | Média — DX (Developer Experience) |
| **Tailscale gateway não implementado** | #826: `NotImplemented` ao tentar túnel | Média — usuários avançados bloqueados |
| **Informações conflitantes de saúde** | #827: `channel status` vs `doctor` divergem | Média — troubleshooting frustrante |

### Cenários de Uso Emergentes

- **Desenvolvimento local com containers**: Configurações Podman com comunicação interna HTTP (afetadas por #800)
- **VPS remoto com Tailscale**: Usuários tentando acesso remoto via VPN mesh (#826)
- **Migração de outras CLaws**: uMendex representa usuário migratório de Picoclaw/ZeroClaw — indicador de reputação no ecossistema

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta/Atendimento

| # | Título | Criado | dias sem resposta | Prioridade |
|---|--------|--------|-------------------|------------|
| [#817](https://github.com/nullclaw/nullclaw/issues/817) | Does nullclaw support WeChat QR code login? | 2026-04-14 | ~2 dias | Baixa mas estratégica |
| [#826](https://github.com/nullclaw/nullclaw/issues/826) | How to use nullclaw gateway with Tailscale? | 2026-04-15 | ~1 dia | Média |
| [#825](https://github.com/nullclaw/nullclaw/issues/825) | Support nested Agent skills | 2026-04-15 | ~1 dia | Média |
| [#827](https://github.com/nullclaw/nullclaw/issues/827) | nullclaw channel status contradicts doctor info | 2026-04-15 | ~1 dia | Média |

### PRs Abertos Aguardando Review

| # | Título | Atualizado | Status |
|---|--------|------------|--------|
| [#783](https://github.com/nullclaw/nullclaw/pull/783) | feat(cron): cron subagent, run history... | 2026-04-16 | Aguardando merge (~9 dias) |
| [#823](https://github.com/nullclaw/nullclaw/pull/823) | migrate project to Zig 0.16 | 2026-04-15 | Aguardando merge (~1 dia) |
| [#789](https://github.com/nullclaw/nullclaw/pull/789) | Fix gateway bind and rate limit safeguards | 2026-04-15 | Aguardando merge (~8 dias) |
| [#774](https://github.com/nullclaw/nullclaw/pull/774) | docs: update outdated stats | 2026-04-15 | Aguardando merge (~11 dias) |

---

## Conclusão

**Saúde Geral: Estável com pressões pontuais**

NullClaw demonstra vigor comunitário com 8 PRs merged/fechados no período, mas enfrenta gargalos deDX (internet search, version info) que afetam novos usuários. A migração para Zig 0.16 e as correções de segurança no gateway indicam maturidade técnica. Recomenda-se priorização de: (1) #812 — internet search, (2) #800 — regressão Otel, e (3) #823 — Zig 0.16 para unlockedependencies futuras.

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo — Ecossistema de Agentes de IA Open Source

**Data de Referência:** 2026-04-16  
**Projetos Analisados:** NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw/QwenPaw, ZeroClaw

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source demonstra maturização acelerada, com todos os sete projetos mantendo ciclos intensos de desenvolvimento — média de 50 PRs/issues atualizados por dia nos projetos mais ativos. A convergência técnica é evidente: multi-channel support (Slack, Telegram, Discord, Teams, Feishu), provedores locais (LM Studio, Ollama), e arquiteturas de segurança refinadas aparecem como requisitos universais. Contudo, a fragmentação é marcante — cada projeto adota filosofias distintas de linguagem (Zig vs Python vs Rust), modelos de deployment (CLI, gateway, daemon) e público-alvo (enterprise, developers, mercados regionais como China). A saúde geral é estável, mas três projetos (IronClaw, ZeroClaw, Hermes Agent) enfrentam vulnerabilidades críticas não resolvidas, indicando que a velocidade de desenvolvimento ainda supera a capacidade de segurança review.

---

## 2. Comparação de Atividade

| Projeto | Issues Ativas | PRs Abertos | Releases (24h) | PRs Merged | Avaliação de Saúde |
|---------|--------------|-------------|----------------|------------|-------------------|
| **NullClaw** | 8 | 8 | 0 | 3 | Estável com pressões pontuais |
| **NanoBot** | 15 | ~25 | 0 | 7 | Saudável — responsividade alta |
| **Hermes Agent** | 50 | 42 | 0 | 8 | Alta atividade — 3 PRs security pendentes |
| **PicoClaw** | 7 | 14 | 0 | 8 | Ritmo intenso e saudável |
| **IronClaw** | 17 | 50 | 0 | 4 | Alta atividade — bugs P0 críticos |
| **CoPaw/QwenPaw** | 50 | 25 | 2 (betas) | 25 | Alta atividade — release cycle ativo |
| **ZeroClaw** | 39 | 48 | 0 | 2 | Muito intensa — 5 issues S0 abertas |

**Observação:** CoPaw/QwenPaw é o único projeto com releases formais no período (v1.1.2-beta.1/2), indicando maturidade no pipeline de deployment. ZeroClaw apresenta o maior risco operacional com 5 issues de severidade S0 simultâneas.

---

## 3. Posicionamento do Projeto Principal

### Contexto: Definição de "Principal"

Considerando volume de atividade, maturidade de features e impacto comunitário, **NanoBot** e **CoPaw/QwenPaw** emergem como líderes do ecossistema pelo conjunto de critérios:

**NanoBot — Excelência em Performance e Infraestrutura**

| Dimensão | Vantagem |
|----------|----------|
| Performance | Write batching, cache de bootstrap files, profiling hook — otimizações concretas para produção |
| Provedor Local | LM Studio como provider nativo (#3186) — elimina workarounds para devs locais |
| WebSocket | Tool events, session lifecycle, reasoning content (#3179) — infraestrutura moderna |
| Responsividade | 7 issues fechadas em 24h, regressão P0 corrigida no mesmo dia |

**CoPaw/QwenPaw — Liderança em Routing e Voice**

| Dimensão | Vantagem |
|----------|----------|
| Release Cycle | Único com releases formais (betas) — disciplina de versioning |
| Routing | Local model routing (#3443), local judge routing v1 (#2144) — sofisticação em multi-provider |
| Voice | SIP voice channel em desenvolvimento (#3449) — expansão para telecomunicações |
| Session Resilience | Fix de JSON corruption (#3278) — disponibilidade para workloads longos |

**Diferenciação Técnica dos Pares**

| Projeto | Diferencial Técnico | Público-Alvo |
|---------|---------------------|--------------|
| NullClaw | Zig 0.16 migration, shell sandboxing | Developers avançados, edge computing |
| Hermes Agent | 3 PRs security pendentes, AWS Bedrock demand | Enterprise com necessidade de compliance |
| PicoClaw | Mercado chinês (Sogou search), benchmark LLM-as-Judge | Mercados asiáticos, researchers |
| IronClaw | DB migrations, Engine V2, multi-user grants | Teams enterprise com DB backend |
| ZeroClaw | Microkernel transition, Mattermost WebSocket | Desenvolvedores reformando arquitetura |

---

## 4. Focos Técnicos Compartilhados

A análise revela seis temas universais que atravessam os sete projetos:

### 4.1 Segurança de Credentials e Secrets

Todos os projetos enfrentam desafios de segurança em evolução:

| Projeto | Issue/Feature | Severidade |
|---------|---------------|------------|
| Hermes Agent | 3 PRs de segurança pendentes (CWE-522, CWE-862, token endpoint) | CRÍTICO |
| IronClaw | Engine V2 ignorando `scan_inbound_for_secrets()` | P0 |
| ZeroClaw | TOTP gate para gated_commands (#5779) | EM DESENVOLVIMENTO |
| NanoBot | Memory corruption fix (v0.1.5→v0.1.5.post1) | RESOLVIDO |

**Implicação:** O padrão de "scan secrets in-bound" está se tornando requirement table stake para produção.

### 4.2 Multi-Channel Parity

A conectividade com plataformas de mensagem é onipresente:

```
Slack (Hermes, IronClaw, ZeroClaw)
Telegram (Hermes, PicoClaw, IronClaw, ZeroClaw)
Discord (NanoBot, Hermes)
Microsoft Teams (NanoBot)
Feishu/Lark (NanoBot, ZeroClaw)
WeChat (NullClaw, Hermes, CoPaw)
Mattermost (ZeroClaw — WebSocket migration pending)
```

**Convergência:** A maioria dos projetos implementa canais similarmente, mas com níveis distintos de maturidade. Teams e WeChat são integrações recentes na maioria dos casos.

### 4.3 Provedores Locais e LLM-as-Judge

```
LM Studio — PicoClaw (#28, 64 dias aberta), NanoBot (#3186, now native)
Ollama — CoPaw/QwenPaw (connectivity fix), NanoBot (workaround)
AWS Bedrock — Hermes Agent (#3863, 17👍 — maior demanda de feature)
OpenRouter — NanoBot, ZeroClaw
```

**Sinal:** Provedores locais são demandados mas implementações variam em maturidade. LM Studio em NanoBot é referência de implementação "first-class".

### 4.4 Cron Jobs e Scheduling

Todos os projetos têm subsistemas de cron em diferentes estágios:

| Projeto | Status |
|---------|--------|
| NullClaw | DB-backed cron com worker queue (#783) — aguardando merge ~9 dias |
| NanoBot | `deliver: false` respect fix (#3115) — resolvido |
| PicoClaw | Task scheduling fails com "internal channels" error (#2468) — aberto |
| Hermes Agent | Cron notification thread respect (#10582) — resolvido |
| CoPaw/QwenPaw | Cron Job ID messaging fix (#3404) — resolvido |

### 4.5 Performance e Latência

Otimizações de performance aparecem em múltiplos projetos simultaneamente:

- **NanoBot:** Write batching (#3181), cache bootstrap (#3182), first-token streaming (#3183), profiling (#3184)
- **ZeroClaw:** Compilação extremamente lenta (#5575) — problema crônico
- **Hermes Agent:** @-completion 1s lag (#9740)
- **CoPaw/QwenPaw:** Long conversations causing UI lag (#3350)

### 4.6 Persistência e Session Management

| Projeto | Problema |
|---------|----------|
| NanoBot | Regressão v0.1.5.post1 quebrou sessões Feather/Lark — KeyError |
| CoPaw/QwenPaw | JSON corruption em race conditions (#3278) |
| IronClaw | Mensagens desaparecem no staging (#2409), DB migration de tool_calls |
| ZeroClaw | Web dashboard não persiste sessões (#5634) |

**Conclusão:** Session persistence é area de risco compartilhado. Corruption, loss, e inconsistency afetam múltiplos projetos.

---

## 5. Análise de Diferenciação

### 5.1 Arquitetura e Stack Tecnológico

| Projeto | Linguagem Principal | Modelo de Deployment | Database |
|---------|--------------------|-----------------------|----------|
| NullClaw | Zig | CLI/Gateway | DB-backed (Zig native) |
| NanoBot | Python | Daemon | File-based + SQLite (?) |
| Hermes Agent | Python (?) | CLI/Gateway | DuckDB (alpha) |
| PicoClaw | Python (?) | CLI | Não especificado |
| IronClaw | Python (?) | Gateway + DB | PostgreSQL (?) |
| CoPaw/QwenPaw | Python | Daemon | File-based |
| ZeroClaw | Rust | Daemon + Web UI | Não especificado |

**Diferenciador:** NullClaw (Zig) e ZeroClaw (Rust) apostam em performance de sistema via linguagens compiled. Os demais usam Python — sugerindo que o ecossistema valoriza developer experience sobre raw performance.

### 5.2 Público-Alvo e Positioning

| Projeto | Público Primário | Posicionamento |
|---------|------------------|----------------|
| **NullClaw** | Developers avançados | Edge computing, security-first |
| **NanoBot** | Teams e developers | Produtividade com alta customização |
| **Hermes Agent** | Enterprise | Compliance, AWS integration |
| **PicoClaw** | Mercado asiático | China-specific (Sogou), benchmarking |
| **IronClaw** | Teams enterprise | Multi-user, DB-backed collaboration |
| **CoPaw/QwenPaw** | Developers locais | Local LLM routing, voice |
| **ZeroClaw** | Desenvolvedores de plataforma | Arquitetura reformista |

### 5.3 Abordagem de Features

| Projeto | Abordagem | evidência |
|---------|-----------|-----------|
| **NanoBot** | Feature-complete com otimização | 49 PRs, foco em perf + infra |
| **Hermes Agent** | Expansão de plataforma | 50 issues, múltiplos canais |
| **CoPaw/QwenPaw** | Roadmap estruturado | Issue #2291 com 57 comentários |
| **ZeroClaw** | Reformulação arquitetural | Microkernel RFC + crate splitting |
| **NullClaw** | Estabilização técnica | Zig migration + security |
| **IronClaw** | Bugfixing intensivamente | 5 P0/P1 simultâneas |
| **PicoClaw** | Features incrementais | 8 PRs merged, foco UX |

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração

| Tier | Projetos | Issues/Dia | PRs Merged/Dia | Perfil |
|------|----------|------------|----------------|--------|
| **🚀 Rápida** | NanoBot, Hermes Agent, CoPaw, ZeroClaw | 50 | 7-25 | Alto volume, alta responsividade |
| **⚡ Moderada** | PicoClaw, IronClaw | 7-17 | 4-8 | Volume médio, foco em qualidade |
| **🐢 Estável** | NullClaw | 8 | 3 | Baixo volume, alta significância |

### 6.2 Retenção e Satisfação

| Indicador | Projeto | Leitura |
|-----------|---------|---------|
| **Feedback negativo explícito** | ZeroClaw (#2691) | 9👍 — code quality concerns, attitude perception |
| **Feedback positivo implícito** | NanoBot | 7 issues fechadas, comunidade reporta sucesso |
| **Feature requests sem resposta** | PicoClaw (#28) | 64 dias aberta — LM Studio |
| **Segurança ignorada** | Hermes Agent | 17 issues security pendentes |

**Alerta:** ZeroClaw apresenta o maior risco de retenção com issue de crítica comunitária (#2691) fechada sem resolução formal. A perception de "code quality concerns" é viral e pode afectar recruitment de contribuidores.

### 6.3 Maturidade de Processo

| Aspecto | Líder | Detalhe |
|---------|-------|---------|
| **Release Discipline** | CoPaw/QwenPaw | Releases formais, beta versioning |
| **Security Response** | Hermes Agent | 3 PRs pendentes — precisa acelerar |
| **RFC Process** | ZeroClaw | 4 RFCs ativas em draft |
| **Bug Triage** | NanoBot | P0 corrigida no mesmo dia |
| **Documentation** | Todos | Defasagem universal |

---

## 7. Sinais de Tendência

### 7.1 Tendências de Mercado Extraídas

**1. Provedores Locais como Padrão**
O suporte a LM Studio (#3186 NanoBot, #28 PicoClaw) e Ollama (CoPaw, NanoBot) indica que o mercado está migrando para deployment privado de LLMs. A demanda por "key nullable" APIs e workarounds eliminados sugere que provedores locais serão first-class citizens em 6-12 meses.

**2. Multi-Channel como Requirement Table Stakes**
Todos os sete projetos implementam 3+ canais de mensagem. A diferenciação futura não será "suporta Slack", mas sim a qualidade de implementação — Teams com graceful SIGTERM (#2600 NanoBot), Slack com reaction events (#10583 Hermes).

**3. Segurança como Bottleneck**
Três PRs de segurança pendentes em Hermes Agent e um P0 ignorado em IronClaw (#2491) indicam que a velocidade de feature development está superando a capacidade de security review. Startups e enterprises avaliando esses projetos vão exigir security posture demonstrável.

**4. WebSocket como Futuro de Real-Time**
Mattermost migration para WebSocket (#5162 ZeroClaw), WebSocket tooling no NanoBot (#3179), e bounded queues com backpressure (#3180) mostram que polling-based architectures estão sendo substituídas por event-driven patterns.

**5. Mercado Asiático como Segmento Crescente**
NullClaw (WeChat #817), PicoClaw (Sogou #2524), CoPaw/QwenPaw (Feishu/Lark #3432) demonstram investimento específico no mercado chinês. Isso indica que o ecossistema open source está respondendo a pressures de mercado onde serviços ocidentais (Google, OpenAI) são bloqueados.

**6. Crate Splitting e Modularidade**
ZeroClaw (#5447) e NullClaw (migração Zig) demonstram que projetos estão refatorando arquiteturas monolíticas para crates/modules. Isso favorece: (a) melhor testability, (b) reuse, (c) compilation caching.

**7. Cron Jobs como Feature Enterprise**
Sistemas de scheduling estão evoluindo de "executar comando" para "cron subagent com history, JSON output, e timezone awareness" (#783 NullClaw). Isso sinaliza que o caso de uso está amadurecendo de automation script para orchestration layer.

### 7.2 Recomendações para Decisores

| Stakeholder | Recomendação |
|-------------|--------------|
| **Enterprise evaluating adoption** | Priorizar NanoBot ou CoPaw/QwenPaw por disciplina de release e responsividade a security |
| **Developer choosing ecosystem** | Considerar NullClaw (Zig) para performance edge; Python-based para ecosystem maturity |
| **Security-conscious org** | Aguardar resolution de issues pendentes em Hermes Agent e IronClaw antes de produção |
| **Market-specific (China)** | PicoClaw ou CoPaw/QwenPaw — ambos com integrações regionais |
| **Teams with multi-user** | IronClaw (DB migration, cross-user grants) ou Hermes Agent (Slack threading) |

### 7.3 Métricas Consolidado do Ecossistema

| Dimensão | Estado | Tendência |
|----------|--------|-----------|
| Volume de desenvolvimento | Muito alto (média 40+ PRs/issues por dia agregados) | Estável |
| Segurança | Crítico — 4+ vulnerabilidades pendentes | Piorando |
| Releases formais | Baixo — apenas CoPaw com versioning disciplinado | Estável |
| Integração regional | Alto — China (Sogou, WeChat, Feishu), Teams | Crescendo |
| Performance optimization | Ativo — múltiplos projetos otimizando simultaneamente |

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-04-16

---

## 1. Panorama do Dia

O NanoBot atravessa um dos dias mais ativos do último período: **49 PRs atualizados e 15 issues movimentadas** em apenas 24 horas, com 7 issues fechadas — sinal de uma equipe de mantenedores altamente responsiva. O evento mais impactante do dia foi a **regressão crítica reportada em #3190**, onde a atualização de `v0.1.5 → v0.1.5.post1` quebrou a funcionalidade para usuários com sessões Feather/Lark existentes, evidenciada por erros no processamento de mensagens. A boa notícia é que um fix já foi aberto ([PR #3195](https://github.com/HKUDS/nanobot/pull/3195)) no mesmo dia. Em paralelo, a integração com **Microsoft Teams está sendo reintegrada ao nightly** após meses de desenvolvimento, e um pacote robusto de **otimizações de performance** (caching, write batching, profiling) está em revisão. O projeto demonstra saúde geral saudável com alta atividade e responsividade.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.** Não há changelog ou tags novas a reportar.

> ⚠️ **Nota de contexto:** A ausência de release contrasta com a alta atividade de PRs — indicando que o time provavelmente está reservando a próxima release para bundlar as melhorias do nightly (reintegração Teams, otimizações de performance, e o fix de regressão #3190).

---

## 3. Progresso do Projeto

### PRs Fechadas/Merged Hoje

| PR | Título | Relevância |
|----|--------|------------|
| [PR #3195](https://github.com/HKUDS/nanobot/pull/3195) | `fix(memory): handle missing cursor key in history entries` | 🔴 **Crítica** — Corrigida a regressão #3190 (v0.1.5 → v0.1.5.post1 breaking change). Adiciona defesa contra chave `cursor` ausente em entradas de histórico. |
| [PR #3186](https://github.com/HKUDS/nanobot/pull/3186) | `Add support for nullable API keys and LM Studio` | 🟢 **Funcionalidade** — LM Studio agora é provider de primeira classe com chave API anulável, resolvendo [#3185](https://github.com/HKUDS/nanobot/issues/3185). Usuários locais de LLM não precisam mais de workarounds. |
| [PR #2600](https://github.com/HKUDS/nanobot/pull/2600) | `Add Microsoft Teams channel on current nightly base` | 🔵 **Plataforma** — Canal Microsoft Teams integrado ao nightly após ciclo de revisão longo. Funcionalidade completa com suporte a restartNotify e graceful SIGTERM. |
| [PR #2929](https://github.com/HKUDS/nanobot/pull/2929) | `Fix msteams followups 2920 2921` | 🔵 **Bugfix Teams** — Remove fallback hardcoded `"Reply with quote test"`, adiciona wire de `restartNotifyEnabled/Pre/PostMessage` no ciclo de vida do canal Teams. |
| [PR #3115](https://github.com/HKUDS/nanobot/pull/3115) | `fix(cron): respect deliver:false on cron output` | 🟡 **Bugfix** — Cron jobs com `deliver: false` agora respeitam a flag mesmo quando o agente produz output. |
| [PR #3102](https://github.com/HKUDS/nanobot/pull/3102) | `fix: NoneType comparison in _build_kwargs` | 🟡 **Bugfix** — Corrigido `TypeError: '<=' not supported between instances of 'NoneType' and 'int'` quando `max_tokens=None`. |
| [PR #3178](https://github.com/HKUDS/nanobot/pull/3178) | `fix(discord): remove duplicate channel_id assignment` | 🟢 **Cleanup** — Removido código duplicado morto em `discord.py` (linha 453). |

### PRs Abertas com Alto Impacto

| PR | Título | Destaque |
|----|--------|----------|
| [PR #3179](https://github.com/HKUDS/nanobot/pull/3179) | `feat(agent,websocket,...): WebSocket tooling, session lifecycle, reasoning` | Adiciona infraestrutura de tool events, lifecycle notifications, e suporte a reasoning content via WebSocket. |
| [PR #3156](https://github.com/HKUDS/nanobot/pull/3156) | `feat(heartbeat): per-phase model overrides` | Heartbeat agora suporta `evalModelOverride` e `execModelOverride` separados para fases de decisão vs. execução. |
| [PR #3184](https://github.com/HKUDS/nanobot/pull/3184) | `feat: profiling infrastructure for agent loop timing` | **ProfilingHook** registra tempos de iteração e tool batch via `AgentHook`. |
| [PR #3183](https://github.com/HKUDS/nanobot/pull/3183) | `feat: first-token streaming priority` | First delta agora é dispatchado imediatamente sem waiting for coalescing, melhorando latência percebida. |
| [PR #3182](https://github.com/HKUDS/nanobot/pull/3182) | `feat: cache bootstrap files, tool schemas, Dream skill list` | Cache com invalidação por mtime — reduz 4 I/O reads por prompt a 4 `stat()` calls quando em cache hit. |
| [PR #3181](https://github.com/HKUDS/nanobot/pull/3181) | `feat: memory & history performance optimizations` | **Write batching** no `append_history()` + `flush_history()` com `writelines()` atômico. |
| [PR #3180](https://github.com/HKUDS/nanobot/pull/3180) | `fix: bounded MessageBus queues` | Queues agora têm `maxsize` configurável (default 100), com backpressure para inbound e blocking para outbound. |

---

## 4. Temas Quentes da Comunidade

### Issues/PRs com Maior Engajamento (comentários + reações)

**#623** — *"Persistent 'Tool Not Found' Errors for Custom Skills"* ([Issue](https://github.com/HKUDS/nanobot/issues/623))  
**8 comentários | 1 👍 | Status: CLOSED**  
Primeiro contato positivo de um novo usuário que, apesar do entusiasmo inicial, encontrou dificuldades com skills customizadas como `google_calendar` e `ha-voice`. A issue demonstra que a **experiência de desenvolvimento de skills customizadas** ainda é um ponto de fricção significativo para iniciantes.

**#3190** — *"【重大BUG】v0.1.5升级到v0.1.5.post1后用不了了"* ([Issue](https://github.com/HKUDS/nanobot/issues/3190))  
**7 comentários | Status: CLOSED (fix PR #3195)**  
Bug de regressão crítico: sessões Feather/Lark existentes quebraram após upgrade. Stack trace completo mostra `KeyError` ao processar mensagens com sessão legada. **Já corrigido com PR #3195 no mesmo dia.**

**#3123** — *"cron/scheduled task message send enhancement"* ([Issue](https://github.com/HKUDS/nanobot/issues/3123))  
**7 comentários | Status: OPEN**  
Usuários reportam que mensagens enviadas por cron jobs usam a sessão cron dedicated, impossibilitando追问 ou ajustes posteriores. Feature request para desvincular o envio do contexto da sessão cron.

**#2957** — *"huge bug dream overwriting MEMORY.md"* ([Issue](https://github.com/HKUDS/nanobot/issues/2957))  
**5 comentários | Status: CLOSED**  
Bug crítico: a habilidade Dream sobrescreveu `MEMORY.md` com arquivo em branco, sem backup git. Usuário perdeu toda a memória do agente. Demonstrou vulnerabilidade crítica no sistema de persistência de memória.

**#3107** — *"一些建议 / Sugestões"* ([Issue](https://github.com/HKUDS/nanobot/issues/3107))  
**5 comentários | Status: OPEN**  
Lista estruturada de melhorias desejadas pela comunidade:
- `[x]` Status display com contagem de tasks
- `[x]` Retry abort message no LLM request
- `[ ]` Startup `-model` parameter support
- `[ ]` LLM request timeout configurável
- `[ ]` LLM provider fallback
- `[ ]` Multi custom provider config
- `[ ]` Indicar no system prompt que session history é consultável

**#3095** — *"custom provider with anthropic api"* ([Issue](https://github.com/HKUDS/nanobot/issues/3095))  
**5 comentários | Status: OPEN**  
Solicitação para usar Anthropic API com endpoint customizado (não oficial). Usuário precisa de provider que converse com API Anthropic via endpoint alternativo.

**#2220** — *"Proposal: use ContextVar for task-local tool routing context"* ([Issue](https://github.com/HKUDS/nanobot/issues/2220))  
**4 comentários | Status: OPEN**  
Proposta técnica avançada para usar `ContextVar` para contexto de roteamento de ferramentas em operações assíncronas. Propõe hardenening de async-safety em `message`, `spawn`, e `cron`. Alvo: nightly branch.

---

## 5. Bugs e Estabilidade

### 🔴 Críticos (regressões, crashes)
| Issue | Descrição | Severidade | Status |
|-------|-----------|------------|--------|
| [#3190](https://github.com/HKUDS/nanobot/issues/3190) | Upgrade v0.1.5→v0.1.5.post1 quebra sessões existentes — KeyError no processamento | **P0** | ✅ Fechada — fix em [PR #3195](https://github.com/HKUDS/nanobot/pull/3195) |
| [#2957](https://github.com/HKUDS/nanobot/issues/2957) | Habilidade Dream sobrescreveu MEMORY.md com arquivo vazio | **P0** | ✅ Fechada |

### 🟡 Altos (impacto funcional significativo)
| Issue | Descrição | Severidade | Status |
|-------|-----------|------------|--------|
| [#3143](https://github.com/HKUDS/nanobot/issues/3143) | Erro LLM `'code': '1214'` — mensagens ilegais (token consolidation 71835/65536) | **P1** | ✅ Fechada |
| [#3102](https://github.com/HKUDS/nanobot/issues/3102) | `TypeError: '<=' not supported between instances of 'NoneType' and 'int'` em `_build_kwargs` | **P1** | ✅ Fechada — [PR #3102](https://github.com/HKUDS/nanobot/pull/3102) |
| [#1186](https://github.com/HKUDS/nanobot/issues/1186) | Memory consolidation resulta em arquivo bloated ao longo do tempo | **P1** | ✅ Fechada |

### 🟢 Medios (bugs por canal, edge cases)
| Issue | Descrição | Severidade | Status |
|-------|-----------|------------|--------|
| [#3166](https://github.com/HKUDS/nanobot/issues/3166) | Canal Feishu não exibe progress notifications mesmo com `send_progress: true` | **P2** | 🔄 Fix em [PR #3169](https://github.com/HKUDS/nanobot/pull/3169) |
| [#3115](https://github.com/HKUDS/nanobot/issues/3115) | `deliver: false` ignorado quando cron job produz qualquer output | **P2** | ✅ Fechada |
| [#2921](https://github.com/HKUDS/nanobot/issues/2921) | MS Teams: `restart_notify_*` config exposta mas não implementada | **P2** | 🔄 Corrigida via [PR #2929](https://github.com/HKUDS/nanobot/pull/2929) |
| [#3188](https://github.com/HKUDS/nanobot/issues/3188) | Não é possível instalar `nanobot-channel-webhook` (Python 3.14 + setuptools backend) | **P2** | 🔄 Docs fix em [PR #3192](https://github.com/HKUDS/nanobot/pull/3192) + CI em [PR #3193](https://github.com/HKUDS/nanobot/pull/3193) |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| # | Feature | Sinal de Roadmap | Link |
|---|---------|-----------------|------|
| 1 | **Cron job session isolation** — mensagens de cron jobs deveriam ser consultáveis para追问 | 🔵 Enhancement direto | [#3123](https://github.com/HKUDS/nanobot/issues/3123) |
| 2 | **LM Studio como provider nativo** — evitar workaround com chave dummy no OpenAI provider | 🔵 Crescente | [#3185](https://github.com/HKUDS/nanobot/issues/3185) ✅ Adicionado em [#3186](https://github.com/HKUDS/nanobot/pull/3186) |
| 3 | **`-model` parameter no startup** — facilitar uso por teams | 🟢 Pequena | [#3107](https://github.com/HKUDS/nanobot/issues/3107) |
| 4 | **LLM request timeout configurável** — buffer para provedores por prompt instáveis | 🟢 Pequena | [#3107](https://github.com/HKUDS/nanobot/issues/3107) |
| 5 | **LLM provider fallback** — fallback automático entre provedores | 🟡 Média | [#3107](https://github.com/HKUDS/nanobot/issues/3107) |
| 6 | **Multi custom provider config** — suportar múltiplos provedores customizados | 🟢 Pequena | [#3107](https://github.com/HKUDS/nanobot/issues/3107) |
| 7 | **Provider customizado com API Anthropic endpoint** — usar API Anthropic via endpoint alternativo | 🟢 Pequena | [#3095](https://github.com/HKUDS/nanobot/issues/3095) |
| 8 | **`ContextVar` para task-local tool routing context** — async-safety hardening | 🔵 Técnico/Avançado | [#2220](https://github.com/HKUDS/nanobot/issues/2220) |
| 9 | **Status display com contagem de tasks** — melhorar feedback de status黑盒 | 🟢 UX | [#3107](https://github.com/HKUDS/nanobot/issues/3107) ✅ Implementado |

### Sinais de Evolução de Arquitetura

O volume de PRs técnicas abertas ([#3179](https://github.com/HKUDS/nanobot/pull/3179), [#3184](https://github.com/HKUDS/nanobot/pull/3184), [#3183](https://github.com/H

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-04-16

## 1. Panorama do dia

O projeto Hermes Agent apresenta alta atividade comunitária em 16 de abril de 2026, com 50 issues e 50 PRs atualizados nas últimas 24 horas. A taxa de fechamento de issues está em 30% (15/50), enquanto 42 PRs permanecem abertos, indicando um pipeline robusto de contribuições. Não houve lançamentos de novas versões, sugerindo foco em estabilização e refinamento. A atividade recente é marcada por preocupação com vulnerabilidades de segurança (três PRs de segurança pendentes) e problemas de usabilidade no setup e integrações com plataformas de mensagem.

---

## 2. Lançamentos

**Nenhum release detectado nas últimas 24 horas.**

O projeto não publicou novas versões desde o período analisado. Recomenda-se verificar o histórico de releases em [NousResearch/hermes-agent/releases](https://github.com/NousResearch/hermes-agent/releases) para追踪 a cadência de versões.

---

## 3. Progresso do Projeto

### PRs fechados/mergeados nas últimas 24h:

| # | Título | Autor | Impacto |
|---|--------|-------|---------|
| [#10159](https://github.com/NousResearch/hermes-agent/pull/10159) | fix(gateway): handle macOS GUI domain sleep/lock | OWALabuy | Corrigido falha ao iniciar/restartar gateway em Macs bloqueados com display dormindo |
| [#10468](https://github.com/NousResearch/hermes-agent/issues/10468) | Bug: hermes auth add api_key crashes | NewTurn2017 | Corrigido crash em ambientes não-interativos no prompt de label |
| [#10583](https://github.com/NousResearch/hermes-agent/pull/10583) | Route Slack reaction_added events | denysgaievskyi | Adicionado suporte para eventos de reação no Slack |
| [#10582](https://github.com/NousResearch/hermes-agent/pull/10582) | Cron job notification thread respect | denysgaievskyi | Mensagens de confirmação de cron agora respeitam thread_ts |
| [#10579](https://github.com/NousResearch/hermes-agent/pull/10579) | Slack mention prefix command detection | denysgaievskyi | Corrigido is_command() quebrado com menção @bot |

**Total de PRs fechados: 8** (incluindo 4 com issues fechadas automaticamente)

### Destaque de contribuição:
Três PRs de segurança foram submetidos pelo **AntAISecurityLab** e aguardam review:
- [#10031](https://github.com/NousResearch/hermes-agent/pull/10031) — Fix credential leakage em MCP HTTP transport (CWE-522)
- [#10038](https://github.com/NousResearch/hermes-agent/pull/10038) — Fix authorization bypass em Telegram media (CWE-862)
- [#10189](https://github.com/NousResearch/hermes-agent/pull/10189) — Fix session token endpoint sem autenticação (CRITICAL)

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários + reações):

| # | Título | Comentários | 👍 | Status |
|---|--------|-------------|----|--------|
| [#9179](https://github.com/NousResearch/hermes-agent/issues/9179) | SECURITY.md — Habilitar private vulnerability reporting | 24 | 0 | OPEN |
| [#3863](https://github.com/NousResearch/hermes-agent/issues/3863) | Native AWS Bedrock provider support | 13 | 17 | CLOSED |
| [#7237](https://github.com/NousResearch/hermes-agent/issues/7237) | Error: Response truncated due to output length limit | 9 | 2 | CLOSED |
| [#6360](https://github.com/NousResearch/hermes-agent/issues/6360) | Invalid port error no setup | 8 | 2 | CLOSED |
| [#9531](https://github.com/NousResearch/hermes-agent/issues/9531) | NameError: 'self' is not defined em fuzzy completions | 5 | 0 | OPEN |

### Análise das demandas:

**Segurança:** A issue [#9179](https://github.com/NousResearch/hermes-agent/issues/9179) lidera em comentários (24), evidenciando interesse da comunidade em habilitar GitHub Private Vulnerability Reporting. O repo possui 17 issues de segurança pendentes ou PRs aguardando review.

**Integração AWS:** A feature request de AWS Bedrock (#3863) foi fechada mas demonstra demanda significativa (17 👍), indicando que usuários precisam de acesso direto à AWS sem intermediários como OpenRouter.

**Usabilidade CLI:** Problemas de setup (porta inválida, instalador bloqueado) indicam fricção na experiência inicial de novos usuários.

---

## 5. Bugs e Estabilidade

### Bugs críticos/alta severidade (abertos):

| # | Título | Severidade | Plataforma |
|---|--------|------------|------------|
| [#10575](https://github.com/NousResearch/hermes-agent/issues/10575) | Claude OAuth/Max proxy classifica prompt como "out of usage" erroneamente | HIGH | API |
| [#10648](https://github.com/NousResearch/hermes-agent/issues/10648) | GitHub Copilot ACP mode falho + 8K token limit (HTTP 413) | HIGH | CLI |
| [#10364](https://github.com/NousResearch/hermes-agent/issues/10364) | Agent stalls em "preparing \<tool\>..." | HIGH | CLI |
| [#9531](https://github.com/NousResearch/hermes-agent/issues/9531) | NameError em fuzzy file completions (@) | MEDIUM | CLI |

### Bugs de integração (plataformas de mensagem):

- [#6447](https://github.com/NousResearch/hermes-agent/issues/6447) — Discord /sethome grava channel ID em config.yaml ao invés de .env
- [#10411](https://github.com/NousResearch/hermes-agent/issues/10411) — Notificações de background injetadas na thread errada do Discord
- [#10581](https://github.com/NousResearch/hermes-agent/issues/10581) — Home-channel auto-prompt só verifica env var, ignora config yaml

### Regressões conhecidas:

- [#10314](https://github.com/NousResearch/hermes-agent/issues/10314) — Context compression falha para OpenRouter default em vez do provider principal quando summary_provider=auto
- [#9545](https://github.com/NousResearch/hermes-agent/issues/9545) — Model picker mostra triple entries do mesmo provider

**Métricas de estabilidade:**
- Taxa de bugs abertos: ~60% das issues analisadas (30/50)
- Issues de crashes/setup: 4 casos documentados
- Sistema alertas: 2 (DuckDB MISSING, News Daemon NOT RUNNING)

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features com maior potencial de aceitação:

| # | Título | 👍 | Complexidade | Área |
|---|--------|----|--------------|------|
| [#3863](https://github.com/NousResearch/hermes-agent/issues/3863) | Native AWS Bedrock provider | 17 | HIGH | Provedores |
| [#10585](https://github.com/NousResearch/hermes-agent/issues/10585) | Multi-resolution context compression (reduzir custos 80%+) | 0 | HIGH | Performance |
| [#9756](https://github.com/NousResearch/hermes-agent/issues/9756) | WeChat multi-account support | 0 | MEDIUM | Plataforma |
| [#10644](https://github.com/NousResearch/hermes-agent/issues/10644) | Brave Search como backend nativo | 0 | LOW | Busca |
| [#10600](https://github.com/NousResearch/hermes-agent/pull/10600) | xAI provider com video/image generation | — | HIGH | Provedores |

### Sinais de roadmap identificados:

1. **Expansão de provedores:** xAI (#10600), AWS Bedrock (#3863), Brave Search (#10644)
2. **Otimização de custos:** Compressão de contexto multi-resolução (#10585)
3. **Multi-plataforma:** Suporte multi-conta WeChat (#9756), aprimoramentos Slack (#10583, #10582)
4. **Browser engine:** Lightpanda (#7144) com fallback automático para Chrome

---

## 7. Resumo de Feedback dos Usuários

### Dores documentadas:

| Categoria | Descrição | Evidência |
|-----------|-----------|-----------|
| **Setup/Onboarding** | Instalador bloqueia ou configura porta inválida | [#6360](https://github.com/NousResearch/hermes-agent/issues/6360), [#7066](https://github.com/NousResearch/hermes-agent/issues/7066) |
| **Custos de API** | Contexto explode em tamanho, custos crescem descontroladamente | [#10585](https://github.com/NousResearch/hermes-agent/issues/10585) |
| **Integração AWS** | Latência extra e markup de 5-20% via OpenRouter | [#3863](https://github.com/NousResearch/hermes-agent/issues/3863) |
| **CLI Performance** | Lag de ~1s ao usar @ completions em projetos grandes | [#9740](https://github.com/NousResearch/hermes-agent/issues/9740) |
| **Discord** | Configuração de home channel confusa e frágil | [#6447](https://github.com/NousResearch/hermes-agent/issues/6447), [#10581](https://github.com/NousResearch/hermes-agent/issues/10581) |

### Cenários de uso emergentes:

- **Agentes de trading:** Alerta de DuckDB alpha_discovery (#10646) sugere uso em pipelines de backtest
- **News daemon:** Sistema de monitoramento de notícias integrado (#10645)
- **Enterprise WeChat:** Continuidade de suporte via WeCom (#10137)
- **Multi-mídia:** Suporte bidirecional a arquivos/media via API server (#10595)

### Satisfação vs. Insatisfação:

**Positivo:**
- Comunidade ativa contribuindo com PRs de segurança
- Suporte a novas plataformas (Slack reactions, cron threading)
- Atenção a bugs de usabilidade (auth não-interativo, setup wizard)

**Negativo:**
- Acúmulo de 17 issues de segurança pendentes
- Problemas recorrentes de setup e primeira experiência
- Inconsistências entre plataformas de mensagem

---

## 8. Backlog que Merece Atenção

### Issues sem resposta há >7 dias ou aguardando triagem:

| # | Título | Criado | Comentários | Prioridade |
|---|--------|--------|-------------|------------|
| [#9179](https://github.com/NousResearch/hermes-agent/issues/9179) | SECURITY.md private vulnerability reporting | 2026-04-13 | 24 | HIGH |
| [#3863](https://github.com/NousResearch/hermes-agent/issues/3863) | AWS Bedrock support | 2026-03-30 | 13 | HIGH |
| [#9740](https://github.com/NousResearch/hermes-agent/issues/9740) | @-completion performance (1s lag) | 2026-04-14 | 1 | MEDIUM |
| [#9545](https://github.com/NousResearch/hermes-agent/issues/9545) | Model picker triple entries | 2026-04-14 | 1 | MEDIUM |
| [#10585](https://github.com/NousResearch/hermes-agent/issues/10585) | Context compression cost reduction | 2026-04-16 | 1 | HIGH |

### PRs de segurança aguardando review há >24h:

1. [#10031](https://github.com/NousResearch/hermes-agent/pull/10031) — CWE-522: Credential leakage em MCP HTTP (CRÍTICO)
2. [#10038](https://github.com/NousResearch/hermes-agent/pull/10038) — CWE-862: Authorization bypass em Telegram (MÉDIO)
3. [#10189](https://github.com/NousResearch/hermes-agent/pull/10189) — Endpoint de token sem autenticação (CRÍTICO)

**Recomendação:** Priorizar review dos 3 PRs de segurança e habilitar private vulnerability reporting conforme solicitado pela comunidade.

---

## Métricas Consolidada do Dia

| Indicador | Valor |
|-----------|-------|
| Issues ativas | 35 |
| Issues fechadas | 15 |
| PRs abertos | 42 |
| PRs fechados | 8 |
| Releases | 0 |
| PRs de segurança pendentes | 3 |
| Issues de bugs abertas | ~18 |
| Feature requests abertas | ~12 |
| Engagement total (comentários) | ~80+ |

---

*Relatório gerado automaticamente com base em dados do GitHub de 2026-04-16. Todos os links referem-se a [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent).*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-04-16

---

## 1. Panorama do dia

O ecossistema PicoClaw mantém um ritmo de desenvolvimento intenso e saudável. Nas últimas 24 horas, **7 issues e 14 PRs** foram atualizadas, com **8 PRs fechadas/merged** — indicando uma taxa de fechamento expressiva. A maioria das atividades concentra-se nos domínios de **agent**, **channel** e **provider**, sugerindo evolução prioritária na experiência de interação e conectividade com provedores de IA. Não houve lançamento de novas versões, mas o volume de código mesclado demonstra maturidade no pipeline de contributions.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto não emitiu nova versão hoje. O último ciclo de releases permanece como referência — usuários em versões anteriores devem acompanhar issues de regressão abertas para avaliar necessidade de atualização.

---

## 3. Progresso do Projeto

Oito PRs foram fechadas/merged hoje, impulsionando a estabilidade e funcionalidades:

| PR | Autor | Domínio | Impacto |
|---|---|---|---|
| [#2502](https://github.com/sipeed/picoclaw/pull/2502) | lxowalle | agent | Novo comando `/btw` para perguntas paralelas sem poluir histórico |
| [#2525](https://github.com/sipeed/picoclaw/pull/2525) | afjcjsbx | agent, provider | Recuperação automática após falhas com modelos sem suporte a imagens |
| [#2528](https://github.com/sipeed/picoclaw/pull/2528) | wj-xiao | agent | Correção de deduplicação de tool calls que causava perda de dados em sequências |
| [#2529](https://github.com/sipeed/picoclaw/pull/2529) | lc6464 | channel | Syntax highlighting de Markdown no web UI |
| [#2524](https://github.com/sipeed/picoclaw/pull/2524) | SiYue-ZO | tool, config | Busca web via Sogou para usuários na China continental |
| [#2526](https://github.com/sipeed/picoclaw/pull/2526) | wj-xiao | channel | Restauração de mensagens de estado desabilitado no composer web |
| [#2500](https://github.com/sipeed/picoclaw/pull/2500) | cytown | build | Remoção de output irrelevante para platform-token |
| [#2484](https://github.com/sipeed/picoclaw/pull/2484) | BeaconCat | provider | Avaliação LLM-as-Judge no benchmark membench |

**Destaque:** A PR [#2525](https://github.com/sipeed/picoclaw/pull/2525) resolve um problema crítico onde sessões ficavam "travadas" após envio de imagens a modelos sem suporte a visão — correção essencial para estabilidade em produção.

---

## 4. Temas Quentes da Comunidade

As issues com maior engajamento hoje:

### Issue #28 — Feature Request: LM Studio Easy Connect
- **Autor:** Franzferdinan51 | **13 comentários** | **1 👍**
- **Resumo:** Solicitação para integração simplificada com LM Studio como provedor local. Usuário destaca utilidade mas reconhece limitação técnica para implementar.
- **Análise:** Demanda recorrente de conectores com provedores locais (Ollama, LM Studio, LocalAI). Indica tendências de uso privado/enterprise do PicoClaw.
- **Link:** https://github.com/sipeed/picoclaw/issues/28

### Issue #2468 — Scheduled Task Fails to Execute
- **Autor:** zuozhehao | **5 comentários** | **0 👍**
- **Resumo:** Tasks cron falham com erro `scheduling command execution is restricted to internal channels`.
- **Link:** https://github.com/sipeed/picoclaw/issues/2468

### PR #2503 — Agent Loop Parallel Processing
- **Autor:** cytown | Reforço na arquitetura de agents com suporte a processamento paralelo.
- **Link:** https://github.com/sipeed/picoclaw/pull/2503

---

## 5. Bugs e Estabilidade

Sete issues abertas hoje — todas de severidade não classificada, mas com impacto relevante:

| # | Domínio | Título | Comentários |
|---|---|---|---|
| [#2468](https://github.com/sipeed/picoclaw/issues/2468) | cron | Task agendada falha com erro de restrição de canal interno | 5 |
| [#2046](https://github.com/sipeed/picoclaw/issues/2046) | provider | PicoClaw não executa tools com LongCat API | 2 |
| [#2302](https://github.com/sipeed/picoclaw/issues/2302) | channel | Re-autenticação manual frequente no web UI (PERMISSION_DENIED) | 1 |
| [#2446](https://github.com/sipeed/picoclaw/issues/2446) | channel | Mensagens podem ecoar de volta em setups multi-channel | 1 |
| [#2524](https://github.com/sipeed/picoclaw/issues/2524) | provider | *(já resuelta via PR)* | - |

**Crítico identificado:** Issue [#2302](https://github.com/sipeed/picoclaw/issues/2302) — Usuários enfrentam `PERMISSION_DENIED` repetidamente na web UI, indicando problema de persistência de sessão/credenciais que afeta diretamente a experiência de uso.

---

## 6. Pedidos de Features e Sinais de Roadmap

Cinco novas solicitações de enhancement abertas hoje:

### [#2533](https://github.com/sipeed/picoclaw/issues/2533) — Flag `--no-browser` para auth login
- **Autor:** gitricko
- **Proposta:** Adicionar opção para autenticação via CLI sem abrir navegador — útil para ambientes headless/containerizados.
- **Impacto:** Automação e integração CI/CD.

### [#2527](https://github.com/sipeed/picoclaw/issues/2527) — fresh_tail_size configurável
- **Autor:** weissfl
- **Proposta:** Externalizar constante de 32 mensagens "frescas" do contexto para config do Seahorse.
- **Impacto:** Flexibilidade para otimização de contexto e custos de tokens.

### [#28](https://github.com/sipeed/picoclaw/issues/28) — LM Studio Provider
- **Demanda de longa data:** Facilitar conexão com LM Studio como provedor local.

**PRs abertas indicando direção do roadmap:**
- [#2535](https://github.com/sipeed/picoclaw/pull/2535) — MCP slash commands (`/list mcp`, `/show mcp`)
- [#2531](https://github.com/sipeed/picoclaw/pull/2531) — Ferramenta `delegate` para handoff entre agentes
- [#2532](https://github.com/sipeed/picoclaw/pull/2532) — Suporte a perguntas paralelas via `/btw`

---

## 7. Resumo de Feedback dos Usuários

### Dores identificadas:

| Dor | Evidência | Severidade |
|---|---|---|
| **Integração com provedores locais é complexa** | Issue #28 — LM Studio; vários issues sobre APIs específicas (LongCat) | Alta |
| **Instabilidade de sessão/credenciais no Web UI** | Issue #2302 — `PERMISSION_DENIED` recorrente | Alta |
| **Tasks cron falham** | Issue #2468 — Erro de "internal channels" | Média |
| **Comportamento inesperado em multi-channel** | Issue #2446 — Echo de mensagens | Média |

### Cenários de uso em destaque:
- **Usuários na China:** Necessidade de search nativo via Sogou (PR #2524 merged).
- **Ambientes headless:** Demanda por autenticação sem browser (#2533).
- **Multi-agentes:** Interação entre agentes via delegate tool (#2531).
- **Benchmarking:** Avaliação semântica via LLM-as-Judge (#2484).

---

## 8. Backlog que Merece Atenção

### Issues sem resposta prolongada:

| # | Criação | Dias aberta | Domínio | Título |
|---|---|---|---|---|
| [#28](https://github.com/sipeed/picoclaw/issues/28) | 2026-02-11 | ~64 dias | provider | LM Studio Easy Connect |
| [#2046](https://github.com/sipeed/picoclaw/issues/2046) | 2026-03-26 | ~21 dias | provider | LongCat API tool calls |

**Recomendação:** A issue #28 está aberta há mais de 60 dias com 13 comentários — indica demanda real sem resposta oficial. Considerar triagem ou delegação para contribuidores.

---

## Métricas Resumidas do Dia

| Indicador | Valor |
|---|---|
| Issues ativas | 7 |
| PRs atualizadas | 14 |
| PRs fechadas/merged | 8 |
| Novas releases | 0 |
| Issues de bugs | 5 |
| Requests de features | 5 |
| Issues com >5 comentários | 2 |

---

*Relatório gerado automaticamente com base em dados GitHub do repositório sipeed/picoclaw em 2026-04-16.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-04-16

---

## 1. Panorama do Dia

O projeto IronClaw mantém alta atividade com **50 PRs e 17 issues atualizados nas últimas 24h**, sem novos lançamentos. O estado atual reflete uma base de código em evolução acelerada, com foco intenso em estabilidade — múltiplos bugs P0/P1 foram identificados e estão sendo tratados em paralelo, incluindo um **problema de segurança crítico** (Engine V2 ignorando varredura de secrets). A comunidade está ativa com 4 PRs promotion e diversas contribuições externas em andamento. O pipeline de CI/CD opera normalmente com staging promotions automatizadas.

---

## 2. Lançamentos

**Nenhum novo release nas últimas 24h.** O histórico recente indica que a equipe está estabilizando a versão 0.25.0 em staging antes de promover para produção. PRs de infrastructure (`#2507`, `#2509`) sugerem preparação para reconstrução de imagens Docker de releases históricos.

---

## 3. Progresso do Projeto

### PRs merged/fechados nas últimas 24h

| PR | Escopo | Resumo |
|----|--------|--------|
| [#2509](https://github.com/nearai/ironclaw/pull/2509) | CI | Suporte a alvos históricos de Dockerfile no workflow de rebuild — essencial para manutenção de imagens v0.24.0 |
| [#2507](https://github.com/nearai/ironclaw/pull/2507) | CI | Workflow manual para reconstruir imagens Docker Hub de releases específicos com verificação de versão |
| [#2421](https://github.com/nearai/ironclaw/pull/2421) | DB, Auth | **DB MIGRATION** — Escopo de grants para acesso cross-user (leitura/escrita entre usuários), substituindo o mecanismo quebrado de `GATEWAY_USER_TOKENS` |
| [#2452](https://github.com/nearai/ironclaw/pull/2452) | DB, Gateway | **DB MIGRATION** — Persistência de `tool_calls` no v2 engine + cobertura e2e, resolvendo UI vazio no histórico de chat |

### Avanços relevantes nos PRs abertos de destaque

- **#2513** (rozgo): Correção do Telegram group-chat — emite `metadata.chat_type` para comportamento correto de prompts em grupos. Resolve parcialmente #2482.
- **#2503** (serrfirat): Corrige **12 falhas E2E** (9 em rotinas + 3 em features) — regressão de thread read-only e dois outros root causes.
- **#2458** (serrfirat): Restaura consistência de resume e alias de ação no v2 gate — ligado à issue #2402.
- **#2257** (zmanian): Resiliência de testes em ambientes offline/sandbox — adiciona `dns_probe_available()` com timeout de 2s.

---

## 4. Temas Quentes da Comunidade

### Issues com maior atenção/discussão

| Issue | Escopo | Interação | Destaque |
|-------|--------|-----------|----------|
| [#548](https://github.com/nearai/ironclaw/issues/548) | llm, tool/builtin | 4 comentários | **Feature antiga reaberta** — Add Search endpoint to Chat API para web search nativo; autor: sergeiest |
| [#2087](https://github.com/nearai/ironclaw/issues/2087) | agent, tool/mcp | 3 comentários | **Agent trava ao configurar Notion** — screenshots incluídos, possível loop infinito |
| [#2482](https://github.com/nearai/ironclaw/issues/2482) | channel | 1 comentário | **Metadata de grupo Telegram omitida** — diferente de issues de autorização #443/#590 |
| [#2484](https://github.com/nearai/ironclaw/issues/2484) | permissions | 0 comentários | **Grant param-aware** — permite aprovar `shell ls /tmp` sem permitir `shell rm -rf /` |

### Análise de demandas emergentes

1. **Navegação web nativa**: A reabertura de #548 indica que há demanda concreta por search integrado à Chat API — não é apenas uma melhoria, parece ser uma necessidade operacional para usuários.
2. **Permissões granulares**: #2484 propõe um modelo de grants mais sofisticado que o atual `AlwaysAllow` binário. Este é um sinal claro de maturidade do sistema de segurança.
3. **Suporte multi-canal com perilaku diferenciado**: A atenção ao Telegram group-chat (#2482) e ao PR de routing (#1378) indica que implantações multi-canal estão crescendo.

---

## 5. Bugs e Estabilidade

### 🛑 P0 — Crítico (requer ação imediata)

| Issue | Escopo | Descrição |
|-------|--------|-----------|
| [#2491](https://github.com/nearai/ironclaw/issues/2491) | security, engine-v2 | **Engine V2 ignora `scan_inbound_for_secrets()`** — tokens e credenciais vão direto para o LLM sem bloqueio. Confirmed on staging com Slack bot token. **Label:** `security-review-required` |
| [#2409](https://github.com/nearai/ironclaw/issues/2409) | channel/web | **Mensagens do usuário desaparecem após digitação** no staging (v0.25.0). Regressão no componente de chat. |

### ⚠️ P1 — Alto

| Issue | Escopo | Descrição |
|-------|--------|-----------|
| [#2410](https://github.com/nearai/ironclaw/issues/2410) | channel/web | **Dashboard faz refresh contínuo e limpa conteúdo** — loop de reload. Mesmo ambiente que #2409. |
| [#2488](https://github.com/nearai/ironclaw/issues/2488) | security | **TOCTOU race + gaps cross-user** na conversa fallback do Gateway. Falha descoberta durante security review do PR #2444. |
| [#2284](https://github.com/nearai/ironclaw/issues/2284) | orchestrator | **Instância do agent morre após 1h de inatividade** no staging. Ciclo de vida/persistência do agent. |

### 🔧 P2 — Médio

| Issue | Escopo | Descrição |
|-------|--------|-----------|
| [#2489](https://github.com/nearai/ironclaw/issues/2489) | llm | **HTTP 413 não mapeado** para 4 provedores HTTP diretos — diferente de #2276 que cobria `nearai_chat` e `rig_adapter`. |
| [#2482](https://github.com/nearai/ironclaw/issues/2482) | channel/telegram | **Telegram omite `chat_type` metadata** para prompts de grupo — comportamento distinto de issues de autorização. |
| [#2087](https://github.com/nearai/ironclaw/issues/2087) | agent, tool/mcp | **Agent para de responder ao configurar Notion** — prováveis loops infinitos com ferramentas complexas. |

### ✅ Resolvidos recentemente (last 24h)

| Issue | Escopo | Nota |
|-------|--------|------|
| [#2474](https://github.com/nearai/ironclaw/issues/2474) | tool/mcp | stdio MCP servers triggering OAuth discovery flow — fixado |
| [#2345](https://github.com/nearai/ironclaw/issues/2345) | tool | Tool install pede permissão repetidamente — fixado |
| [#2279](https://github.com/nearai/ironclaw/issues/2279) | agent, tool/builtin | Bot reporta sucesso falso apesar de erros de shell/open — fixado |
| [#2276](https://github.com/nearai/ironclaw/issues/2276) | llm, orchestrator | Orchestrator crash com HTTP 413 do nearai_chat — fixado |

**Observação:** A taxa de fechamento de bugs está boa (4 bugs resolvidos + 1 security fix em preparo), mas a regressão no web channel (#2409, #2410) indica risco no frontend que merece atenção prioritária.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em desenvolvimento ativo

| PR | Escopo | Descrição | Risk |
|----|--------|-----------|------|
| [#2336](https://github.com/nearai/ironclaw/pull/2336) | memory | Insights configuráveis, hook de summary de sessão, recall com reasoning | XL / medium |
| [#1378](https://github.com/nearai/ironclaw/pull/1378) | routing | Filtro per-channel de MCP e built-in tools via JSON config | XL / medium |
| [#2418](https://github.com/nearai/ironclaw/pull/2418) | runtime, infra | Slim mode runtime, Dockerfiles otimizados, `/health` endpoint | L / medium |
| [#2506](https://github.com/nearai/ironclaw/pull/2506) | orchestrator | `ORCHESTRATOR_HOST` env var para callback em Linux (hoje hardcoded para Docker Desktop) | M / medium |
| [#1446](https://github.com/nearai/ironclaw/pull/1446) | llm | **Aliyun Coding Plan** — novo provider para BaiLian com Anthropic Messages API compat | XL / low |
| [#1764](https://github.com/nearai/ironclaw/pull/1764) | integrations | Abound demo com Responses API, credential injection, skills, guardrails | XL / high |

### Sinais de demanda comunidade

| Issue | Demanda | Estratégia |
|-------|---------|------------|
| [#548](https://github.com/nearai/ironclaw/issues/548) | Search nativo na Chat API | Considerar para backlog v0.26+ |
| [#2484](https://github.com/nearai/ironclaw/issues/2484) | Grants param-aware | Security enhancement — alto valor |
| [#2481](https://github.com/nearai/ironclaw/issues/2481) | Como gerenciar secrets customizados | Documentação缺口 — usuário não consegue configurar |

---

## 7. Resumo de Feedback dos Usuários

### Dores reais identificadas

1. **Segurança no v2 engine**: Usuários que colam tokens no chat (Slack, credenciais) não têm proteção. Impacto: usuários em staging estão potencialmente expondo secrets ao LLM. **Severidade: crítico.**

2. **UI/Web instabilidade**: No staging, mensagens somem e dashboard faz loop de refresh. Usuários perdem contexto de conversa. Impacto: experiência degradada impede uso produtivo. **Severidade: P0.**

3. **Permissões persistentes não funcionam**: Aprovação "always" não é lembrada entre sessões (#2345). O usuário precisa aprovar a mesma ferramenta repetidamente. **Severidade: frustração alta.**

4. **Instância morre após inatividade**: Agentes em staging morrem após 1h sem interação. Workflows longos ou assistentes deBackground são inviáveis. **Severidade: bloqueia caso de uso.**

5. **Gestão de secrets**: Um usuário (_ieasyit_) reportou não conseguir configurar secrets customizados por limitações de segurança. **Severidade: bloqueia integrações.**

### Padrões de uso emergentes

- **Integrações complexas** (Notion, MCP servers) estão causando crashes/agentes travados — indica necessidade de error handling mais robusto para tools externas.
- **Deploy multi-canal** (Slack + Telegram + web) está crescendo — evidenced by routing PR (#1378), Telegram metadata issue (#2482), e Slack relay OAuth fix (#2512).

---

## 8. Backlog que Merece Atenção

### Issues sem resposta há > 7 dias

| Issue | Criado | Escopo | Status | Razão para atenção |
|-------|--------|--------|--------|---------------------|
| [#2087](https://github.com/nearai/ironclaw/issues/2087) | 2026-04-06 | agent, tool/mcp | OPEN, 3 comments | Agent para de responder — usuário aguardando retorno |
| [#2284](https://github.com/nearai/ironclaw/issues/2284) | 2026-04-10 | orchestrator | OPEN, 1 comment | Instância morre — P2 mas bloqueia prod |
| [#2345](https://github.com/nearai/ironclaw/issues/2345) | 2026-04-11 | tool | CLOSED | ✅ Resolvido |
| [#2410](https://github.com/nearai/ironclaw/issues/2410) | 2026-04-13 | channel/web | OPEN, 1 comment | Dashboard loop — P0 |
| [#2409](https://github.com/nearai/ironclaw/issues/2409) | 2026-04-13 | channel/web | OPEN, 1 comment | Mensagens somem — P0 |

### PRs antigos em revisão

| PR | Criado | Escopo | Status | Nota |
|----|--------|--------|--------|------|
| [#1446](https://github.com/nearai/ironclaw/pull/1446) | 2026-03-20 | llm | OPEN, 27 dias | Aliyun provider — tamanho XL, risco baixo, sem updates há 4 dias |
| [#1378](https://github.com/nearai/ironclaw/pull/1378) | 2026-03-18 | routing | OPEN, 29 dias | Per-channel tool filtering — XL, risco médio, sem updates |
| [#2086](https://github.com/nearai/ironclaw/pull/2086) | 2026-04-06 | agent, workspace | OPEN, 10 dias | Shared skills — XL, risco baixo |

### Recomendações de triagem

1. **Responder #2087** — usuário incluiu screenshots, há 3 comentários mas nenhum action item claro. Triar como bug e atribuir.
2. **Revisar #1446** — Aliyun provider está pronto há ~27 dias, tem risco baixo, pode ser merged.
3. **Priorizar #2491** — Security issue, precisa de review urgente e hotfix.

---

## Resumo Executivo

| Dimensão | Estado | Tendência |
|----------|--------|-----------|
| **Atividade** |

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório de Projeto CoPaw — 2026-04-16

---

## 1. Panorama do Dia

O CoPaw/QwenPaw apresenta **alta atividade** nesta data. Foram registradas 50 issues e 50 PRs atualizados nas últimas 24h, com distribuição equilibrada entre abertas e fechadas, indicando manutenção ativa do repositório. Duas novas versões beta foram publicadas (v1.1.2-beta.1 e v1.1.2-beta.2), sinalizando ritmo acelerado de desenvolvimento. A comunidade demonstra interesse significativo em features como roteamento de modelos locais, canais de voz SIP e estatísticas de agentes. Bugs críticos como corrupção de sessões e erros 400 com conteúdo multimodal estão sendo tratados via PRs em revisão. A relação entre CoPaw e QwenPaw é uma questão recorrente que merece esclarecimento oficial.

---

## 2. Lançamentos

### v1.1.2-beta.1 → v1.1.2-beta.2

**Mudanças em v1.1.2-beta.1:**
- [`chore(version): bumping version to 1.1.2b1`](https://github.com/agentscope-ai/QwenPaw/pull/3416) — manutenção de versão
- [`fix(memory): make file watcher recursive configurable`](https://github.com/agentscope-ai/QwenPaw/pull/3347) — perbaikan watcher rekursif untuk memory
- [`feat(memory): add default memory sum`](https://github.com/agentscope-ai/QwenPaw/pull/3347) — nova funcionalidade de sumário de memória padrão

**Mudanças em v1.1.2-beta.2:**
- [`chore(version): bumping version to 1.1.2b2`](https://github.com/agentscope-ai/QwenPaw/pull/3454)

**Nota:** Não há breaking changes detectados. Migração tranquila para quem vem de v1.1.1.post1.

### v1.1.1.post1

- [`fix: update Cron Job ID info message text`](https://github.com/agentscope-ai/QwenPaw/pull/3404) — ajuste em mensagens de ID do Cron Job
- Fix no Ollama Provider connectivity (detalhe truncado nos dados)

---

## 3. Progresso do Projeto

### PRs Merged/Closed mais relevantes

| PR | Título | Impacto |
|---|---|---|
| [#3454](https://github.com/agentscope-ai/QwenPaw/pull/3454) | chore(version): bumping version to 1.1.2b2 | Release prep |
| [#3443](https://github.com/agentscope-ai/QwenPaw/pull/3443) | feat(routing): add local model routing | Funcionalidade de roteamento local/cloud |
| [#3305](https://github.com/agentscope-ai/QwenPaw/pull/3305) | fix: register AgentApp dispatched requests with TaskTracker | Evita cancelamento de tarefas em background |
| [#2144](https://github.com/agentscope-ai/QwenPaw/pull/2144) | feat(routing): add local judge routing v1 | Upgrade do sistema de roteamento |

### PRs em revisão com potencial alto

| PR | Título | Status |
|---|---|---|
| [#3340](https://github.com/agentscope-ai/QwenPaw/pull/3340) | feat(tool): ACP-based external agent delegation | Under Review |
| [#3299](https://github.com/agentscope-ai/QwenPaw/pull/3299) | fix(formatter): 400 error with multimodal content | Ready for Merge |
| [#3278](https://github.com/agentscope-ai/QwenPaw/pull/3278) | fix(session): recover from JSON corruption | Under Review |
| [#3449](https://github.com/agentscope-ai/QwenPaw/pull/3449) | feat(channels): SIP voice channel with pyVoIP/LiveKit | OpenTask (Roadmap #2291) |

**Destaque:** O PR #3278 corrige um problema P0 de disponibilidade onde arquivos JSON de sessão sofriam corrupção por race conditions em escritas concorrentes.

---

## 4. Temas Quentes da Comunidade

### Issue com maior engajamento
- [**#2291** - Help Wanted: Open Tasks — Come Contribute!](https://github.com/agentscope-ai/QwenPaw/issues/2291) — **57 comentários** | Desde 2026-03-25

Lista de tarefas abertas priorizadas de P0 a P2. A alta participação indica comunidade ativa em contribuições.

### Pergunta importante sobre branding
- [**#3430** - QwenPaw e CoPaw relação?](https://github.com/agentscope-ai/QwenPaw/issues/3430) — 5 comentários

Usuários questionam se QwenPaw e CoPaw serão mantidos juntos ou separados. **Recomendação:** Documentar oficialmente a estratégia de naming para evitar confusão.

### Feature com demanda clara
- [**#3349** - Aumentar alertas vermelhos para operações sensíveis](https://github.com/agentscope-ai/QwenPaw/issues/3349) — 2 comentários

Proposta de melhorar a UX de aprovação de ferramentas com alertas mais visíveis describing o tipo de operação, destino e risco.

---

## 5. Bugs e Estabilidade

### Severidade ALTA

| Issue | Descrição | Impacto |
|---|---|---|
| [#3397](https://github.com/agentscope-ai/QwenPaw/issues/3397) | Session freezes com `max_input_length` alto em tarefas CLI | Usabilidade crítica |
| [#3279](https://github.com/agentscope-ai/QwenPaw/issues/3279) | Pipeline ops executam 2x por mensagem + tool ID grows unbounded | Performance e vazamento de memória |
| [#3011](https://github.com/agentscope-ai/QwenPaw/issues/3011) | Tarefas longas param silenciosamente (Qwen3 Coder Plus) | Confiabilidade em produção |

### Severidade MÉDIA

| Issue | Descrição |
|---|---|
| [#3435](https://github.com/agentscope-ai/QwenPaw/issues/3435) | URL duplicada em download de arquivos (`/api/file/preview` repetido) |
| [#3434](https://github.com/agentscope-ai/QwenPaw/issues/3434) | Ollama não reconhecido pelo sistema local |
| [#3420](https://github.com/agentscope-ai/QwenPaw/issues/3420) | Editar skill.md causa perda de arquivos no workspace |
| [#3375](https://github.com/agentscope-ai/QwenPaw/issues/3375) | Conflito entre gunicorn e pydantic |

### Bugs resolvidos recentemente

- [#3407](https://github.com/agentscope-ai/QwenPaw/issues/3407) — MiniMax MCP tool启动失败 (fechado)
- [#3417](https://github.com/agentscope-ai/QwenPaw/issues/3417) — Importação de múltiplas skills de um repositório (fechado)
- [#3375](https://github.com/agentscope-ai/QwenPaw/issues/3375) — gunicorn/pydantic conflict (fechado)

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features mais requisitadas

| # | Feature | Demandas | Componente |
|---|---|---|---|
| [#2441](https://github.com/agentscope-ai/QwenPaw/issues/2441) | **Plan Mode** | 3 comentários | Console (UI) |
| [#3380](https://github.com/agentscope-ai/QwenPaw/issues/3380) | **Backup/restore completo** (agentes, modelos, canais) | 2 comentários | Sistema |
| [#2961](https://github.com/agentscope-ai/QwenPaw/issues/2961) | **Classificação de skills** (pastas/categorias) | 3 comentários | Skills |
| [#3426](https://github.com/agentscope-ai/QwenPaw/issues/3426) | **Indicador de uso de contexto** | 5 comentários | Console |
| [#3437](https://github.com/agentscope-ai/QwenPaw/issues/3437) | **Suporte API Kimi Code** | 3 comentários | Provider |

### Sinais de evolução do roadmap

1. **Roteamento de modelos locais/cloud** — PRs #3443, #3451, #3452 indicam foco em estratégia de roteamento dinâmica
2. **Canal de voz SIP** — PR #3449 está em desenvolvimento como parte do Roadmap #2291
3. **Tracing com Langfuse** — PR #3433 adiciona suporte opcional para OpenAI SDK tracing
4. **Página de estatísticas de agentes** — PR #3365 em review

---

## 7. Resumo de Feedback dos Usuários

### Dores recorrentes

1. **Escalabilidade de conversas longas (#3350)**
   > "Mais de 200 rodadas de diálogo causam lentidão extrema no scroll da página"
   - Usuários realizando iteração de código em nível de projeto mantêm contexto longo deliberadamente
   - Solicitam orientação metodológica ou otimização de frontend

2. **Segurança de API (#3392)**
   > "Não há autenticação por senha na API, preciso habilitar segurança urgentemente"
   - Usuário reports insegurança no acesso ao web UI
   - Demanda por autenticação default

3. **Integração Feishu/Lark (#3432)**
   > "Impossível conectar 云文档 e 多维表格 mesmo com permissões completas"
   - Comparação com OpenClaw que oferecia fluxo de autorização mais fluido
   - Barreira de entrada para corporate users

4. **Fragilidade geral (#3390)**
   > "Muito fácil ter erros durante operação"
   - Usuário reporta instabilidade percebida no frontend

### Feedback positivo implícito

- Issues com alta participação (57 comentários em #2291) indicam comunidade engajada
- Contribuições de first-time contributors (PRs #3449, #3433, #3278, #3117) demonstram atratividade do projeto

---

## 8. Backlog que Merece Atenção

### Issues sem resposta há mais tempo

| Issue | Idade | Status | Prioridade |
|---|---|---|---|
| [#2291](https://github.com/agentscope-ai/QwenPaw/issues/2291) | ~22 dias | Aberta | P0-P2 (Roadmap) |
| [#2441](https://github.com/agentscope-ai/QwenPaw/issues/2441) | ~19 dias | Aberta | Enhancement |
| [#2961](https://github.com/agentscope-ai/QwenPaw/issues/2961) | ~11 dias | Aberta | Feature |

### PRs com review pendente há dias

| PR | Status | Tempo em Review |
|---|---|---|
| [#3299](https://github.com/agentscope-ai/QwenPaw/pull/3299) | Ready for Merge | ~4 dias |
| [#3340](https://github.com/agentscope-ai/QwenPaw/pull/3340) | Under Review | ~3 dias |
| [#2506](https://github.com/agentscope-ai/QwenPaw/pull/2506) | Under Review | ~18 dias |

**Nota:** O PR #2506 (Channel testing infrastructure) está em review há tempo considerável. Considerar priorização ou dividir em PRs menores.

### Items de baixa cobertura

- **Suporte Kimi API (#3437)** — 3 comentários, sem ação ainda
- **Qwen3 Coder Plus silenciando (#3011)** — bug crítico sem resolução desde 2026-04-07

---

## Métricas Resumidas do Dia

| Indicador | Valor |
|---|---|
| Issues ativas | 32 |
| Issues fechadas (24h) | 18 |
| PRs abertos | 25 |
| PRs merged/fechados (24h) | 25 |
| Releases | 2 (v1.1.2-beta.1, v1.1.2-beta.2) |
| Issue mais comentada | #2291 (57 comentários) |
| PR com maior potencial | #3299 (fix 400 error, ready for merge) |
| Bugs críticos em aberto | 3 |
| Features em desenvolvimento | 5+ |

---

*Relatório gerado com base nos dados de [CoPaw/QwenPaw](https://github.com/agentscope-ai/QwenPaw) em 2026-04-16.*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-04-16

---

## 1. Panorama do dia

O projeto ZeroClaw apresenta **atividade muito intensa** nas últimas 24 horas, com 50 issues e 50 PRs atualizados — indicando uma comunidade ativa e um ciclo de desenvolvimento acelerado. Não houve lançamentos de novas versões, mas o período foi marcado por **fechamento de 11 issues** e **2 PRs merged/fechados**, demonstrando progresso contínuo. A maior parte da atividade concentra-se em bugs de severidade alta (S0/S1) relacionados a estabilidade do runtime/daemon, configuração de provedores e comportamento de canais. Simultaneously, multiple RFCs (issues #5574, #5577, #5576, #5579) are under active development, signaling a coordinated push toward the v0.7.0 → v1.0.0 transition with improved architecture, governance, and documentation standards.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24 horas.**

O último período sem lançamento formal sugere que a equipe está focada em estabilização interna e preparação para a próxima versão里程碑. Users are encouraged to monitor the [releases page](https://github.com/zeroclaw-labs/zeroclaw/releases) for upcoming announcements.

---

## 3. Progresso do Projeto

As **2 PRs mais relevantes fechadas/merged** nas últimas 24h trouxeram avanços significativos:

| PR | Título | Impacto |
|----|--------|---------|
| [#5447](https://github.com/zeroclaw-labs/zeroclaw/issues/5447) | Feature: crate split the crate | Reduz tempo de compilação ao propor reorganização monolítica em múltiplos crates (`zeroclaw-core`, `zeroclaw-services`, etc.) |
| [#5575](https://github.com/zeroclaw-labs/zeroclaw/issues/5575) | fix(build): Extremely slow project compilation | Correção direta do problema de compilação incremental extremamente lenta em desenvolvimento local |

O PR [#5162](https://github.com/zeroclaw-labs/zeroclaw/pull/5162) — **feat(channel): add Mattermost WebSocket listener** — permanece aberto e em destaque, propondo migrar a integração Mattermost de polling REST API (3s intervals) para WebSocket real-time, eliminando latência e carga desnecessária na API. Este é um **merge candidate importante** que melhoraria significativamente a experiência em canais Mattermost.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários + reações)

| # | Título | Tipo | Comentários | 👍 | Destaque |
|---|--------|------|-------------|-----|----------|
| [#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) | Web dashboard is still not available | bug | 12 | 0 | Problema recorrente desde múltiplas versões; acesso ao dashboard web/desktop Tauri completamente quebrado |
| [#5574](https://github.com/zeroclaw-labs/zeroclaw/issues/5574) | RFC: Intentional Architecture — ZeroClaw Microkernel Transition | RFC | 7 | 0 | Proposta estrutural para v0.7.0 → v1.0.0; refatoração do codebase reativo para arquitetura intencional |
| [#2691](https://github.com/zeroclaw-labs/zeroclaw/issues/2691) | Zeroclaw's code quality is seriously concerning | enhancement | 4 | **9** | Crítica comunitária forte sobre qualidade de código e atitude em relação a contribuições; issue com **mais reactions do dataset** |

### Análise das demandas

A issue [#2691](https://github.com/zeroclaw-labs/zeroclaw/issues/2691) com **9 reações** evidencia um **sentimento negativo significativo** de parte da comunidade Regarding code quality and collaborative culture. Isso contrasta com a atividade intensa de PRs, sugerindo um descompasso entre volume de código produzido e percepção de qualidade/contribuição aberta. A equipe respondeu fechando a issue, mas o feedback merece atenção para retenção de contribuidores.

O RFC [#5574](https://github.com/zeroclaw-labs/zeroclaw/issues/5574) sobre "Microkernel Transition" é o segundo tema mais comentado, indicando que a comunidade está engajada na evolução arquitetural do projeto. A proposta de migrar de um codebase grown reactively para uma arquitetura intencional com microkernel é ambiciosa e alinhada com as necessidades de escalabilidade evidenciadas nos problemas de compilação (#5575).

---

## 5. Bugs e Estabilidade

### Severidade S0 — Data Loss / Security Risk (4 issues abertas)

| # | Título | Componente | Atualização |
|---|--------|------------|-------------|
| [#5542](https://github.com/zeroclaw-labs/zeroclaw/issues/5542) | consecutive OOM in WSL2 | runtime/daemon | 2026-04-15 |
| [#5528](https://github.com/zeroclaw-labs/zeroclaw/issues/5528) | Improper logic of email channel config | runtime/daemon | 2026-04-15 |
| [#5672](https://github.com/zeroclaw-labs/zeroclaw/issues/5672) | Feishu responds even when mention_only enabled | runtime/daemon | 2026-04-15 |
| [#5518](https://github.com/zeroclaw-labs/zeroclaw/issues/5518) | forbidden_path_argument blocks safe redirect targets | tooling/ci | 2026-04-15 |
| [#5533](https://github.com/zeroclaw-labs/zeroclaw/issues/5533) | allowed_path doesn't respect contains logic | runtime/daemon | 2026-04-15 |

**Alerta:** 5 issues S0 ativas — todas em status `in-progress`. O OOM em WSL2 (#5542) e problemas com path permissions (#5518, #5533) são especialmente críticos para workloads de produção.

### Severidade S1 — Workflow Blocked (7 issues abertas)

| # | Título | Componente |
|---|--------|------------|
| [#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) | Web dashboard not available | runtime/daemon |
| [#5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600) | kimi-code provider streaming error | provider |
| [#5654](https://github.com/zeroclaw-labs/zeroclaw/issues/5654) | Telegram token encryption not working | runtime/daemon |
| [#5527](https://github.com/zeroclaw-labs/zeroclaw/issues/5527) | Gemini changed oath things again | runtime/daemon |
| [#5475](https://github.com/zeroclaw-labs/zeroclaw/issues/5475) | Copilot + Telegram Invalid parameter | channel |
| [#5564](https://github.com/zeroclaw-labs/zeroclaw/issues/5564) | Custom provider empty tool output causes failure | provider |

### Severidade S2 — Degraded Behavior (6 issues abertas)

Problemas UX e de comportamento degradado incluem: daemon auto-start causando conflito de porta (#5628), Groq provider 400 error (#5670), web dashboard não persiste sessões (#5634), Windows shell flashing (#5562), e issues com Matrix E2E (#5144).

### Regressões Recentes Fechadas

| # | Título | Severidade |
|---|--------|------------|
| [#5537](https://github.com/zeroclaw-labs/zeroclaw/issues/5537) | Causes Persistent Error Loop (GPT file parsing) | S0 |
| [#4851](https://github.com/zeroclaw-labs/zeroclaw/issues/4851) | GitHub copilot provider config | S1 |
| [#5144](https://github.com/zeroclaw-labs/zeroclaw/issues/5144) | Matrix failed to decrypt room event | S2 |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features em Demandas

| # | Título | Tipo | Sinal de Roadmap |
|---|--------|------|------------------|
| [#5619](https://github.com/zeroclaw-labs/zeroclaw/issues/5619) | Native OpenRouter provider routing support | enhancement | Alinhamento com ecossistema OpenRouter; suporte a provider fields e extra_body |
| [#5579](https://github.com/zeroclaw-labs/zeroclaw/issues/5579) | RFC: Engineering Infrastructure — CI/CD Pipeline | RFC | Automação de releases e pipeline CI/CD para v0.7.0 |
| [#5269](https://github.com/zeroclaw-labs/zeroclaw/issues/5269) | Improve Installation Documentation | bug (S2) | DX improvement prioritizado |

### PRs de Features em Pipeline (review pendente)

| PR | Título | Área | Prioridade |
|----|--------|------|------------|
| [#5782](https://github.com/zeroclaw-labs/zeroclaw/pull/5782) | feat(skills): add squash-merge skill | skills | Alta — padroniza workflow de merge |
| [#5780](https://github.com/zeroclaw-labs/zeroclaw/pull/5780) | feat(skills): add github-issue-triage Claude Code skill | skills | Alta — automatiza triagem de issues |
| [#5779](https://github.com/zeroclaw-labs/zeroclaw/pull/5779) | feat(security): add gated_commands TOTP gate (phase 1) | security | Crítica — refinamento de segurança granular |
| [#5705](https://github.com/zeroclaw-labs/zeroclaw/pull/5705) | feat(gateway): session abort endpoint + incremental streaming | gateway | Alta — controle de sessões em tempo real |
| [#5696](https://github.com/zeroclaw-labs/zeroclaw/pull/5696) | feat(tools): add SessionResetTool and SessionDeleteTool | tools | Média — gestão programática de sessões |
| [#5754](https://github.com/zeroclaw-labs/zeroclaw/pull/5754) | feat: make provider connect_timeout_secs configurable | provider | Média — flexibilidade de configuração |

**Sinais de roadmap claros:**
1. **v0.7.0 → v1.0.0** transition com microkernel architecture (#5574)
2. **Governance e documentação** (#5577, #5576)
3. **CI/CD automation** (#5579)
4. **Segurança granular** com TOTP gates (#5779)
5. **Melhoria de DX** com crate splitting (#5447) e compilação otimizada (#5575)

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

**1. Experiência de Setup/Instalação Quebrada**
- Web dashboard completamente indisponível (#4866) — usuários são instruídos a buildar manualmente com `cd web && npm ci && npm run build`
- Documentação de instalação insuficiente (#5269) — `cargo binstall zeroclaw` não documentado
- Configuração de provedores (GitHub Copilot, Gemini) sem workflow guiado (#4851, #5527)

**2. Estabilidade em Produção**
- OOM crashes em WSL2 causando kill de processos (#5542)
- Port conflicts com daemon auto-start (#5628)
- Error loops persistentes quando GPT tenta processar arquivos (#5537)
- Path permission logic inconsistente (#5533, #5518)

**3. Experiência Multi-Canal**
- Feishu ignorando `mention_only` (#5672)
- Telegram com token encriptado não funciona (#5654)
- Copilot + Telegram gerando Invalid parameter errors (#5475)
- Matrix E2E encryption quebrado em first-time setup (#5144)

**4. DX / Desenvolvimento Local**
- Compilação extremamente lenta mesmo para mudanças triviais (#5575, #5447)
- Windows shell commands causando flashing de console (#5562) — PR [#5563](https://github.com/zeroclaw-labs/zeroclaw/pull/5563) aberto para corrigir

### Cenários de Uso Reportados

- **Agentes com memória persistente:** Usuários relatam saving duplicado de mensagens em memória (#5470)
- **Streaming com reasoning models:** Kimi/GLM com `thinking` habilitado causa erros de missing `reasoning_content` (#5600)
- **WSL2 como runtime principal:** Ambiente Linux dentro Windows com constraints de memória
- **Matrix como canal corporativo:** Rooms encriptadas para comunicação team-wide

### Satisfação/Insatisfação

**Pontos positivos percebidos:**
- Flexibilidade de provedores (múltiplas integrações)
- Arquitetura de skills extensível
- Community activa (50 issues + 50 PRs em 24h)

**Críticas recorrentes:**
- Code quality questionada (#2691 — 9 👍)
- Attitude percebida como fechada a contribuições
- Documentação desatualizada e incompleta
- Bugs críticos persistindo por múltiplas versões

---

## 8. Backlog que Merece Atenção

### Issues sem resposta / inactivity

| # | Título | Criado | Status | Prioridade |
|---|--------|--------|--------|------------|
| [#2691](https://github.com/zeroclaw-labs/zeroclaw/issues/2691) | Code quality concerns + community attitude | 2026-03-04 | CLOSED | Alta — sinal vermelho de retenção |
| [#5574](https://github.com/zeroclaw-labs/zeroclaw/issues/5574) | RFC Microkernel Transition | 2026-04-10 | OPEN, 7 comments | Crítica — roadmap v1.0.0 |
| [#5162](https://github.com/zeroclaw-labs/zeroclaw/pull/5162) | Mattermost WebSocket support | 2026-04-02 | OPEN | Alta — merge candidate |
| [#5269](https://github.com/zeroclaw-labs/zeroclaw/issues/5269) | Installation Documentation | 2026-04-04 | OPEN | Alta — DX blocker |

### Ações Recomendadas

1. **Responder publicamente à issue #2691** — A crítica sobre code quality e comunidade merece uma resposta oficial da liderança para reconstruir confiança
2. **Priorizar fix para #4866 (web dashboard)** — É S1 e afeta onboarding de novos usuários
3. **Review do PR #5162 (Mattermost WebSocket)** — Pronto para merge há 14 dias
4. **Estabilização S0** — As 5 issues S0 abertas (OOM, email config, path permissions, Feishu, forbidden paths) precisam de owner e timeline
5. **Avançar RFCs** — Os 4 RFCs em Draft (#5574, #5577, #5576, #5579) precisam de decisão formal para guiar a comunidade

---

## Métricas Resumidas

| Indicador | Valor | Tendência |
|-----------|-------|-----------|
| Issues ativas | 39 | Neutra |
| Issues fechadas (24h) | 11 | Positiva |
| PRs abertos | 48 | Alta atividade |
| PRs merged/fechados (24h) | 2 | Moderada |
| Releases | 0 | Sem mudança |
| Issues S0 abertas | 5 | ⚠️ Alerta |
| Issues S

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*