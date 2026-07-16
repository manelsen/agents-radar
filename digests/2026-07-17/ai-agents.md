# Resumo diário do ecossistema de agentes de IA 2026-07-17

> Issues: 1 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-07-16 20:52 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório do Projeto NullClaw — 2026-07-17

---

## 1. Panorama do Dia

O projeto NullClaw apresenta **baixa atividade** nas últimas 24 horas, sem novos lançamentos ou pull requests. Foi registrada **1 issue crítica aberta** (#976) relacionada a um crash de segmentation fault que afeta especificamente usuários da arquitetura ARM64 (aarch64) ao receber mensagens Telegram via gateway. O crash-looping do serviço evidencia um problema de estabilidade que requer atenção imediata da equipe de manutenção.

---

## 2. Lançamentos

**Nenhum lançamento registrado nas últimas 24 horas.** O projeto nãoemitiu novas versões desde o último release disponível (v2026.5.29).

---

## 3. Progresso do Projeto

**Nenhuma PR merged ou fechada nas últimas 24 horas.** O pipeline de desenvolvimento permanece estático, sem código novo integrado à base principal.

---

## 4. Temas Quentes da Comunidade

### Issue em Destaque

| # | Título | Tipo | Comentários | 👍 |
|---|--------|------|-------------|-----|
| #976 | SIGSEGV on every inbound Telegram message | Bug Crítico | 1 | 0 |

**Análise:** A issue reporta um crash recorrente na versão v2026.5.29 especificamente em plataformas aarch64. O problema está relacionado ao tamanho inadequado da stack (~512 KB) para a thread de worker que processa mensagens Telegram recebidas, resultando em stack overflow e SIGSEGV. O service crash-loops com `Restart=always`, causando perda de mensagens e falha em replies.

**Link:** [nullclaw/nullclaw#976](https://github.com/nullclaw/nullclaw/issues/976)

---

## 5. Bugs e Estabilidade

### Bug Crítico Identificado

| Severidade | Título | Plataforma | Status |
|------------|--------|------------|--------|
| 🔴 **Crítica** | Stack overflow causing SIGSEGV em inbound Telegram | aarch64 Linux | Aberto |

**Impacto:**
- **Usuários afetados:** Clientes utilizando NullClaw como gateway systemd em dispositivos ARM64 (ex: Raspberry Pi, servidores ARM)
- **Sintoma:** Processo crasha em cada mensagem recebida → restart automático → mensagem_dropada
- **Causa raiz provável:** Thread de worker com stack size insuficiente para carga de processamento de mensagens Telegram

**Recomendação:** Priorizar hotfix ou work-around para a próxima release.

---

## 6. Pedidos de Features e Sinais de Roadmap

**Nenhuma nova feature request registrada nas últimas 24 horas.**

O foco da comunidade permanece em estabilização, dado o bug crítico reportado.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

1. **Estabilidade em ARM64:** Usuários de plataformas aarch64 reportam impossibilidade de uso estável do gateway Telegram
2. **Perda de mensagens:** O crash-looping causa drop de mensagens, impactando comunicação em produção
3. **Experiência degradada:** Configuração systemd `Restart=always` não resolve o problema, apenas mascara a falha

**Cenário típico:** Usuário deploya NullClaw v2026.5.29 em Raspberry Pi OS (ARM64), configura como systemd service, e percebe que não recebe replies do bot Telegram — o processo morre silenciosamente a cada mensagem.

---

## 8. Backlog que Merece Atenção

| Issue | Título | Idade | Prioridade |
|-------|--------|-------|------------|
| #976 | SIGSEGV on every inbound Telegram message | ~1 dia | 🔴 Alta |

**Observação:** A issue #976 é a única atividade registrada no período. Dado seu impacto crítico em produção, recomenda-se:

- Investigação imediata da alocação de stack na thread de worker
- Teste em ambiente aarch64 para reprodução
- Considerar backport de fix para patch release, caso a próxima versão (v2026.6.x) ainda não esteja em fase de freeze

---

## Indicadores de Saúde do Projeto

| Métrica | Valor | Status |
|---------|-------|--------|
| Issues abertas (24h) | 1 | ⚠️ 1 crítica |
| PRs merged (24h) | 0 | 🔴 Estagnado |
| Releases (24h) | 0 | 🟡 Normal |
| Tempo médio de resposta | N/A* | — |

*Insuficiente volume de dados para métrica confiável.

---

**Conclusão:** O projeto NullClaw requer atenção imediata à issue #976. O bug de stack overflow em ARM64 compromete a estabilidade do serviço em produção para uma arquitetura de hardware amplamente utilizada em edge computing e IoT. A baixa atividade geral pode indicar freeze para lançamento futuro ou período de baixa demanda da comunidade.

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo — Ecossistema Open Source de Agentes de IA

**Data de Referência:** 2026-07-17  
**Projetos Analisados:** NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw, ZeroClaw

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source demonstra dois polos distintos de maturidade: **ZeroClaw, Hermes Agent e IronClaw** apresentam ciclos de desenvolvimento acelerados com volumes superiores a 40 itens de atividade diária, evidenciando comunidades engajadas e infraestrutura de CI/CD robusta. Em contraste, **NullClaw** permanece em estagnação funcional com apenas uma issue crítica em aberto e nenhum release recente, sinalizando risco de abandono ou freeze não comunicado. **CoPaw** atravessa uma transição de versão traumática (1.x→2.0) que resulta em múltiplos bugs críticos reportados, enquanto **NanoBot** consolida patches de segurança e estabilidade com foco em resiliência de sessão e hardening Docker. A arquitetura predominante converge para runtimes baseados em channels (Slack, Telegram, Discord) com WebUI como interface canônica, embora Hermes Agent e IronClaw mantenham客户端 desktop como diferencial competitivo.

---

## 2. Comparação de Atividade

| Projeto | Issues Abertas (24h) | PRs Abertos (24h) | Releases (24h) | PRs Merged (24h) | Saúde Geral |
|---------|----------------------|-------------------|----------------|------------------|-------------|
| **NullClaw** | 1 (1 crítica) | 0 | 0 | 0 | 🔴 Crítica |
| **NanoBot** | 1 | 13 | 0 | 1 | 🟡 Atenção |
| **Hermes Agent** | 41 | 41 | 0 | 9 | 🟢 Ativa |
| **PicoClaw** | 2 | 9 | 0 | 0 | 🟡 Estável |
| **IronClaw** | 24 | 40 | 0 | 10 | 🟢 Saudável |
| **CoPaw** | 44 | 43 | 0 | 8 | 🟠 Transição |
| **ZeroClaw** | 30 | 46 | 1 (v0.8.3) | 4 | 🟢 Forte |

**Observação:** ZeroClaw é o único projeto com release publicada no período (v0.8.3 com 379 commits de 56 contribuidores), demonstrando disciplina de tagging que os demais projetos carecem. Hermes Agent apresenta o maior volume absoluto de atividade (82 itens total), mas sem releases indica acúmulo de patches para bundled release futuro.

---

## 3. Posicionamento do Projeto Principal

### ZeroClaw — Líder Técnico do Ecossistema

| Dimensão | Posicionamento | Vantagem Competitiva |
|----------|---------------|----------------------|
| **Arquitetura** | Runtime modular com providers unbundled | Flexibilidade para provedores LLM sem acoplamento |
| **Segurança** | OAuth lifecycle hygiene, OIDC RFC fechada | Maturidade enterprise-ready |
| **Extensibilidade** | Host de plugins WebAssembly | Sandbox seguro para customizações |
| **Memória** | Sistema dual-plane (conversational vs. long-term) | Arquitetura RFC-driven que resolve confusões de usuários |
| **Comunidade** | 56 contribuidores, 5 RFCs fechadas | Processo de design transparente e participativo |

**Diferenças Técnicas:**
- Único projeto com RFC formal para OIDC authentication (#7141 closed)
- Único com pgvector nativo para memória vetorial (#9100 merged)
- Roadmap清晰地指向 arquitetura de memória em camadas (v0.9.x)

### Hermes Agent — Presença Desktop Dominante

Hermes Agent diferencia-se pelo foco Desktop-first com 70% das issues de alta prioridade relacionadas ao客户端. A integração LM Studio (#61606) sinaliza estratégia para modelos locais, enquanto a Web UI (#501) com 15 comentários representa a feature mais demandada do ecossistema. A base de usuários Windows é significativa, evidenciada por bugs de path normalization (`D:\` vs `D:/`) e timeout de boot.

### IronClaw — Canal Slack como Centro

IronClaw concentra 8 bugs P1/P2 na integração Slack, revelando tanto a popularidade do canal quanto débitos técnicos na state machine de autenticação. O rebranding de `ironclaw-reborn` para `ironclaw` e a promoção do WebUI para root path indicam的准备弃用 v1 em favor do runtime Reborn como canônico.

---

## 4. Focos Técnicos Compartilhados

### 4.1 Estabilidade de Sessão e Memória

Três projetos (NanoBot, Hermes Agent, CoPaw) reportam bugs de vazamento de estado entre sessões:

| Projeto | Sintoma | Issue Referência |
|---------|---------|-----------------|
| **NanoBot** | Cache de sessão unbounded + limite de 2.000 mensagens | #4957, #4956 |
| **Hermes Agent** | Mensagens vazam entre tabs/sessões | #59305, #47475 |
| **CoPaw** | Mensagens descartadas silenciosamente quando sessão ocupada | #5995, #6148 |

**Implicação:** O padrão de session management é area crítica transversal. NanoBot implementa bounding explícito (#4957) como correção; Hermes Agent e CoPaw ainda não resolveram.

### 4.2 Segurança de Containers Docker

NanoBot (#4955) e PicoClaw (#3262-#3263) executam hardening de Docker via:
- Remoção de capabilities privilegiadas (SYS_ADMIN)
- AppArmor profiles
- Atualização de actions/setup-node v6→v7

**Implicação:** A maturidade de security hardening varia significativamente; NanoBot demonstra prática recomendada enquanto outros projetos carecem de pipeline de security scanning (exceto CoPaw que adiciona CodeQL #6027).

### 4.3 Ambientes Headless e Arquiteturas ARM64

| Problema | Projetos Afetados | Impacto |
|----------|-------------------|---------|
| Stack overflow ARM64 (SIGSEGV) | NullClaw | Crítico — bloqueia edge computing |
| Browser automation sem display | ZeroClaw (#8560) | Hang infinito em daemon |
| Launcher ARM64 ausente | PicoClaw (#3260) | Gap de binários |
| UAC Windows obrigatório | CoPaw (#6169) | Usabilidade degradada |

**Implicação:** A convergência ARM64 + headless server é cenário de uso crescente (Raspberry Pi, NanoKVM, edge deployment). NullClaw é mais vulnerável; ZeroClaw possui work-around mas não correção.

### 4.4 Internacionalização (i18n)

Três projetos simultaneamente добавляют suporte a Traditional Chinese (zh-TW):

| Projeto | PR # | Escopo |
|---------|------|--------|
| **PicoClaw** | #3261 | UI/Docs |
| **IronClaw** | #6158 | WebUI v2 |
| **NanoBot** | #4958 | Locale zh-TW |

**Implicação:** Mercado taiwanês é prioridade transversal; sugere análise de market share ou demanda orgânica por localization.

---

## 5. Análise de Diferenciação

### 5.1 Por Público-Alvo

| Projeto | Público Primário | Diferenciador |
|---------|------------------|---------------|
| **NullClaw** | Edge/IoT (ARM64) | Gateway Telegram minimalista |
| **NanoBot** | Desenvolvedoresavançados | WebUI com subagentes, Nimble search |
| **Hermes Agent** | Usuários Desktop (Windows-heavy) | LM Studio local, pets, skills inline |
| **PicoClaw** | Operadores KVM over IP | NanoKVM integration, WebSocket remote |
| **IronClaw** | Equipes enterprise (Slack) | OAuth secrets management, workspace isolation |
| **CoPaw** | Usuários Windows Desktop | Computer use via UIA, Feishu/DingTalk |
| **ZeroClaw** | Infraestrutura cloud-native | pgvector, Wasm plugins, Git Forge channel |

### 5.2 Por Arquitetura Técnica

| Padrão | Projetos | Características |
|--------|----------|----------------|
| **Runtime monoliticself-contained** | NullClaw, PicoClaw | Simplicidade, menor flexibilidade |
| **Channels modulares** | Hermes Agent, IronClaw, CoPaw | Extensibilidadepor provider (Slack, Telegram, Discord) |
| **Plugin system baseado em Wasm** | ZeroClaw | Sandbox seguro, linguagens agnósticas |
| **RFC-driven architecture** | ZeroClaw, IronClaw | Design transparente, dívida técnica documentada |
| **WebUI como interface primária** | NanoBot, IronClaw, ZeroClaw | Browser-first; Desktop é secundario |
| **Desktop como interface primária** | Hermes Agent, CoPaw | Aplicativo nativo; CLI é fallback |

### 5.3 Modelo de Negócio Inferido

| Modelo | Projetos | Indicadores |
|--------|----------|-------------|
| **Open core** | IronClaw (admin secrets), ZeroClaw (pgvector) | Features enterprise em módulos separados |
| **Community-driven** | NanoBot | README reflete transição para "community maintenance" |
| **Vendor-locked** | CoPaw | Integração nativa com Alibaba (Qwen, DingTalk) |
| **Academic/research** | Hermes Agent (NousResearch) | Pets system, Codex-style mentions |

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração

| Projeto | Commits/Tempo | PR Merge Rate | Maturidade |
|---------|--------------|---------------|------------|
| **ZeroClaw** | 379 commits / release | 4/46 (8.7%) | Consolidando v0.9.x |
| **Hermes Agent** | ~50 PRs+issues / dia | 9/50 (18%) | Ciclo acelerado, pre-release |
| **IronClaw** | 40 PRs / dia | 10/40 (25%) | High-velocity, transição v1→Reborn |
| **CoPaw** | 43 PRs / dia | 8/43 (18.6%) | Bug-fixing pós v2.0 |
| **NanoBot** | 14 PRs / dia | 1/14 (7.1%) | Gargalo de review |

**Análise:** IronClaw demonstra o melhor throughput de merge (25%), seguido por Hermes Agent e CoPaw (~18%). NanoBot apresenta gargalo crítico com apenas 7.1% de PRs mergeados — volume de review insuficiente.

### 6.2 Dívida Técnica e Backlog

| Projeto | Backlog Crítico | Estagnação |
|---------|-----------------|------------|
| **NullClaw** | 1 issue ARM64 (1 dia) | Estagnado — sem atividade de desenvolvimento |
| **NanoBot** | 9 P1 bugs abertos | PRs acumulando sem review |
| **Hermes Agent** | 3 P1 críticos (MoA crash) | 1 PR stale (Zulip, 112 dias) |
| **IronClaw** | 8 bugs Slack cluster | Nenhum stale identificado |
| **CoPaw** | 4 bugs críticos v2.0 | 3 issues antigas (>30 dias) |
| **ZeroClaw** | 2 P1 (Kimi, browser_open) | 6 PRs needs-author-action |

**Risco Elevado:**
- **NullClaw**: Bug crítico ARM64 sem resolução em semana
- **CoPaw**: Issue #4818 (cron agent vazio) desde 29/05 — 49 dias
- **Hermes Agent**: PR #3335 (Zulip) há 112 dias sem rebase

### 6.3 Maturidade Organizacional

| Indicador | ZeroClaw | IronClaw | NanoBot | Hermes Agent |
|-----------|----------|----------|---------|--------------|
| RFC process | ✅ 5 fechadas | ✅ Implícito | ❌ | ❌ |
| Breaking changes documentadas | ✅ v0.8.3 changelog | ✅ v0.29.1 notes | ❌ | ❌ |
| Security scanning | ✅ Dependabot | ✅ Dependabot | ✅ (CodeQL #6027) | ❌ |
| CODEOWNERS ativo | ⚠️ 1 maintainer saiu | ✅ | ✅ | ✅ |

---

## 7. Sinais de Tendência

### 7.1 Tendências Técnicas

| Tendência | Evidência | Projetos |
|-----------|-----------|----------|
| **Arquitetura de memória dual-plane** | RFC #9048 (ZeroClaw), session bounds (NanoBot) | ZeroClaw, NanoBot |
| **Extensibilidade via plugins Wasm** | Host de plugins v0.8.3 (ZeroClaw) | ZeroClaw |
| **Providers LLM unbundled** | Refatoração #5937, Kimi/Bedrock bugs | ZeroClaw, Hermes Agent |
| **Computer use automation** | UIA automation #5187 (CoPaw), browser_open fixes | CoPaw, ZeroClaw |
| **Deployment one-click** | Render deploy #4937 (NanoBot), CI/CD maturation | NanoBot, IronClaw |
| **Canal Git Forge nativo** | GitHub/GitLab/Gitea channel (ZeroClaw v0.8.3) | ZeroClaw |

### 7.2 Tendências de Mercado

| Sinal | Interpretação | Confiança |
|-------|---------------|-----------|
| Demanda por Web UI streaming (#501 Hermes, 15 comments) | Usuários querem experiência Artifacts-like | Alta |
| i18n zh-TW em 3 projetos simultâneos | Mercado taiwanês/empresas chinesas adopting open source | Alta |
| LM Studio integration (Hermes #61606) | Push para modelos locais / offline-first | Média |
| Enterprise features (secrets CRUD, OIDC, GDPR skills) | Competição por segmento B2B | Alta |
| Edge/ARM64 focus (NullClaw crash, PicoClaw ARM launcher) | IoT/embedded como mercado emergente | Média |
| Billing transparency complaints (Hermes #65902) | Usuários sensíveis a custos ocultos | Baixa |

### 7.3 Riscos Sistêmicos

| Risco | Probabilidade | Impacto | Projetos Vulneráveis |
|-------|-------------|---------|---------------------|
| Fragmentação de canais (Slack/Telegram/Matrix) sem padronização | Alta | Média | IronClaw, Hermes, CoPaw |
| Dependência de contributors individuais (ZeroClaw CODEOWNER) | Alta | Alta | ZeroClaw |
| Transição de versão traumática (CoPaw 1.x→2.0) | Realizada | Alta | Qualquer projeto em major version |
| Estagnação de comunidade (NullClaw) | Alta | Total | NullClaw |

---

## 8. Recomendações Estratégicas

### Para Desenvolvedores

1. **Adotar ZeroClaw ou IronClaw** como base para novos projetos — maturidade arquitetural superior
2. **Evitar NullClaw** para produção ARM64 até resolução do bug #976
3. **Monitorar NanoBot** para padrões de segurança Docker — referência de hardening
4. **Estudar Hermes Agent** para integrações Desktop Windows-first

### Para Decisores Técnicos

1. **ZeroClaw** oferece melhor relação segurança/feature para deployments cloud-native
2. **IronClaw** é escolha pragmática para equipes já baseadas em Slack
3. **CoPaw** requer validação extensiva antes de upgrade para v2.0.post2
4. **NullClaw** não é recomendado para nenhum caso de uso crítico no momento

### Para Maintainers

1. **Priorizar** resolução de session state leakage — padrão recorrente em 3 projetos
2. **Implementar** bounding de cache de sessão antes de releases (cf. NanoBot #4957)
3. **Documentar** breaking changes e notas de migração — apenas ZeroClaw e IronClaw o fazem
4. **Redistribuir** CODEOWNERS em ZeroClaw antes do acúmulo de PRs órfãos

---

**Veredicto Final:** O ecossistema demonstra vitalidade com ZeroClaw como líder técnico inquestionável (release disciplinada, RFC-driven, Wasm plugins) e Hermes Agent/IronClaw como contenders de alto volume. CoPaw representa o caso de transição de versão problemática, enquanto NullClaw exige intervenção imediata ou risco de fork/abandono. A convergência em architecture patterns (channels modulares, WebUI primária, memory dual-plane) sugere amadurecimento do domínio, mas fragmentação de integrações (Slack em particular) indica necessidade de padronização.

---

*Relatório gerado em 2026-07-17. Dados consolidados de 7 repositórios GitHub.*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório de Projeto — NanoBot
## Data de Referência: 2026-07-17

---

## 1. Panorama do Dia

O NanoBot apresenta uma atividade intensa no dia de hoje, com **14 pull requests** atualizadas e apenas **1 issue** aberta nas últimas 24 horas. Não houve lançamentos de novas versões. O ecossistema mostra foco em **estabilidade e segurança**, com múltiplos patches P1 (prioridade máxima) addressing bugs críticos em session management, provedores de LLM, e hardening Docker. A comunidade demonstra alta produtividade com 13 PRs abertas e apenas 1 merge (#4950 — atualização de documentação), indicando que muitas contribuições ainda estão em fase de revisão.

---

## 2. Lançamentos

**Nenhum lançamento registrado nas últimas 24 horas.**

O projeto não publicou novas releases desde o período analisado. Isso é consistente com o padrão de trabalho observado: contribuições acumulando em PRs abertas antes de um próximo tag de versão.

---

## 3. Progresso do Projeto

### PR Merged/Fechada (1)

| # | Título | Autor | Impacto |
|---|--------|-------|---------|
| [#4950](https://github.com/HKUDS/nanobot/pull/4950) | `docs(readme): reflect community maintenance` | Re-bin | Atualiza a seção de contato do README para refletir a manutenção colaborativa com a comunidade open source |

### Análise
A única PR fechada hoje é de **natureza exclusivamente documental**, atualizando o README para reconhecer a transição para modelo de manutenção comunitário. Isso sinaliza maturidade organizacional do projeto.

---

## 4. Temas Quentes da Comunidade

### Atividade Relevante

| # | Tipo | Título | Comentários | Reações |
|---|------|--------|-------------|---------|
| [#4954](https://github.com/HKUDS/nanobot/pull/4954) | PR (bug fix) | `fix(webui): keep late subagent turns visible` | — | 0 |
| [#4959](https://github.com/HKUDS/nanobot/pull/4959) | PR (bug fix) | `fix: add one second to retry after delays` | — | 0 |
| [#4955](https://github.com/HKUDS/nanobot/pull/4955) | PR (security fix) | `Harden default Docker Compose security` | — | 0 |

### Análise
A atividade está **distribuída uniformemente** sem concentração de discussão em issues específicas — todas apresentam 0 comentários e 0 reações no momento. Os **temas dominantes** são:

1. **Estabilidade da WebUI com subagentes assíncronos** — Correlação direta com a issue #4948 (visibilidade perdida quando subagente termina tarde)
2. **Segurança de containers Docker** — Remoção de capabilities privilegiadas e AppArmor
3. **Resiliência de provedores LLM** — Retry com delays mais robustos após rate limits

---

## 5. Bugs e Estabilidade

### Bugs Reportados/Corriegidos (P1 — Críticos)

| # | Severidade | Título | Status | Link |
|---|------------|--------|--------|------|
| #4948 | P1 | `WebUI loses visibility when a late subagent completion starts a system turn` | ABERTA | [Issue](https://github.com/HKUDS/nanobot/issues/4948) |
| [#4959](https://github.com/HKUDS/nanobot/pull/4959) | P1 | `fix: add one second to retry after delays` | ABERTA | PR |
| [#4960](https://github.com/HKUDS/nanobot/pull/4960) | P1 | `fix: preserve real cancellation in MCP paths` | ABERTA | PR |
| [#4957](https://github.com/HKUDS/nanobot/pull/4957) | P1 | `fix(session): bound the in-memory session cache` | ABERTA | PR |
| [#4956](https://github.com/HKUDS/nanobot/pull/4956) | P1 | `fix(session): cap messages at persistence boundary` | ABERTA | PR |
| [#4955](https://github.com/HKUDS/nanobot/pull/4955) | P1 | `Harden default Docker Compose security` | ABERTA | PR |
| [#4954](https://github.com/HKUDS/nanobot/pull/4954) | P1 | `fix(webui): keep late subagent turns visible` | ABERTA | PR |
| [#4952](https://github.com/HKUDS/nanobot/pull/4952) | P1 | `fix(providers): sanitize UTF-16 surrogates at provider request boundary` | ABERTA | PR |
| [#4947](https://github.com/HKUDS/nanobot/pull/4947) | P1 | `fix(web): keep sensitive URLs out of Jina Reader` | ABERTA | PR |

### Análise
**9 itens de prioridade P1** indicam foco massivo em estabilidade. Áreas críticas:

- **Session Management**: Cache unbounded (#4957) e limite de 2.000 mensagens (#4956) — risco de memory leak
- **WebUI/Subsistema**: Perda de visibilidade em turnos tardios de subagentes (#4954 resolve correlata #4948)
- **Segurança**: URLs com credenciais expostas ao Jina Reader (#4947) e capabilities Docker berlebihan (#4955)
- **Providers**: Surrogates UTF-16 causando `UnicodeEncodeError` intermitente (#4952)
- **MCP/AnyIO**: `CancelledError` sinais vazados sendo engolidos silenciosamente (#4960)

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Novas (P2 — Média Prioridade)

| # | Área | Título | Link |
|---|------|--------|------|
| [#4937](https://github.com/HKUDS/nanobot/pull/4937) | Infraestrutura | `feat: add one-click Deploy to Render support` | PR |
| [#4953](https://github.com/HKUDS/nanobot/pull/4953) | WebUI | `feat(webui): support native folder picker bridges` | PR |
| [#4951](https://github.com/HKUDS/nanobot/pull/4951) | Busca | `feat(web): add Nimble search provider` | PR |
| [#4942](https://github.com/HKUDS/nanobot/pull/4942) | Triggers | `feat(triggers): let agents manage session-local triggers` | PR |
| [#4958](https://github.com/HKUDS/nanobot/pull/4958) | i18n | `Improve zh-TW Traditional Chinese locale` | PR |

### Análise
Sinais de roadmap identificados:

1. **Deployment simplificado**: Suporte one-click ao Render (#4937) — reduz barreira de entrada
2. **WebUI nativa**: Bridge de folder picker nativo (#4953) com autenticação por token tab-scoped
3. **Expansão de provedores**: Nimble como nova opção de busca web (#4951)
4. **Agentes autônomos**: Triggers locais gerenciados por agentes (#4942) — autonomia reforçada
5. **Internacionalização**: Melhoria de locale zh-TW (#4958) — mercado taiwanês

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Categoria | Descrição | Fonte |
|-----------|-----------|-------|
| **Estabilidade de subagentes** | Usuários perdem visibilidade quando subagentes demorados iniciam novo system turn na WebUI | [#4948](https://github.com/HKUDS/nanobot/issues/4948) |
| **Rate limits de LLM** | Mensagens repetidas de "retrying in 25s" após rate limit — falta de backoff imediato | [#4959](https://github.com/HKUDS/nanobot/pull/4959) |
| **Memory leaks em sessões** | Cache de sessão sem limite causando consumo crescente de memória | [#4957](https://github.com/HKUDS/nanobot/pull/4957) |
| **Segurança Docker** | Configuração default com SYS_ADMIN expõe ambientes a riscos desnecessários | [#4955](https://github.com/HKUDS/nanobot/pull/4955) |
| **Credenciais em URLs** | URLs com tokens/credenciais sendo enviadas a terceiros (Jina Reader) | [#4947](https://github.com/HKUDS/nanobot/pull/4947) |
| **Encoding UTF-16** | Falhas intermitentes ao processar conteúdo com emoji após round-trip JSON | [#4952](https://github.com/HKUDS/nanobot/pull/4952) |

### Cenários de Uso Observados
- **Agentes multi-turn com subagentes assíncronos** — cenário principal da issue #4948
- **Deploy em produção via containers** — foco na segurança Docker (#4955)
- **Busca web integrada** — expansão para novo provider Nimble (#4951)

---

## 8. Backlog que Merece Atenção

### Items Antigos ou Sem Resposta

**Nenhum item antigo identificado no período de 24 horas.** Todos os 14 PRs e a 1 issue foram criados ou atualizados em 2026-07-16, indicando atividade recentes sem backlog acumulado.

### Observação
A issue [#4948](https://github.com/HKUDS/nanobot/issues/4948) foi criada em 2026-07-16 e não possui comentários — requer atenção da equipe para triage inicial.

---

## Indicadores de Saúde do Projeto

| Indicador | Valor | Status |
|-----------|-------|--------|
| PRs abertas | 13 | ⚠️ Volume alto — necesita review |
| Issues abertas | 1 | ✅ Saudável |
| Bugs P1 em aberto | 9 | 🔴 Crítico — requiere atenção imediata |
| Features P2 | 5 | 🟡 Em progresso |
| Releases (24h) | 0 | ⚪ Inativo |
| Merge rate (PRs fechadas) | 7.1% (1/14) | ⚠️ Gargalo de review |

---

*Relatório gerado automaticamente com base em dados do GitHub para HKUDS/nanobot em 2026-07-17.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent
## Data: 2026-07-17

---

## 1. Panorama do dia

O projeto Hermes Agent apresenta alta atividade comunitária com **50 issues e 50 PRs atualizados nas últimas 24h**, sendo 41 issues abertas e 41 PRs abertos. O dia é marcado por intenso trabalho na estabilização do Desktop (com múltiplos bugs críticos relacionados a sessões e Windows) e expansão de funcionalidades (Web UI, pets, habilidades inline, LM Studio). Nenhuma release foi publicada hoje, indicando foco em patches e features para a próxima versão. A comunidade demonstra engajamento elevado, com issues acumulando até 15 comentários.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

O projeto encontra-se em ciclo de desenvolvimento ativo, com correções acumuladas aguardando捆绑 para próxima release.

---

## 3. Progresso do Projeto

### PRs Fechados/Merged Recentemente

| PR | Descrição | Impacto |
|----|-----------|---------|
| [#65915](https://github.com/NousResearch/hermes-agent/pull/65915) | `fix(context): preserve standalone engine compression arguments` | Corrige propagação de argumentos de compressão em plugins de contexto |
| [#64629](https://github.com/NousResearch/hermes-agent/pull/64629) | `[Bug] Desktop sidebar duplicates project on Windows` | Resolvido path normalization (`D:\` vs `D:/`) |
| [#53834](https://github.com/NousResearch/hermes-agent/pull/53834) | `user_char_limit / memory_char_limit config changes` | Configurações de memória agora respeitadas após restart |
| [#47475](https://github.com/NousResearch/hermes-agent/pull/47475) | `Messages leaking between conversation sessions` | Corrigido vazamento de mensagens entre sessões |

### PRs Abertos de Destaque

| PR | Descrição | Status |
|----|-----------|--------|
| [#65805](https://github.com/NousResearch/hermes-agent/pull/65805) | **Desktop E2E: Playwright suite com visual regression diffs** | Aguarda review |
| [#61606](https://github.com/NousResearch/hermes-agent/pull/61606) | **LM Studio local model management** | Dependente de #62292 |
| [#3335](https://github.com/NousResearch/hermes-agent/pull/3335) | **Zulip integration** | Em desenvolvimento (desde Mar/2026) |
| [#64905](https://github.com/NousResearch/hermes-agent/pull/64905) | **Inline `$skill-name` mentions** | Implementa menções Codex-style |

---

## 4. Temas Quentes da Comunidade

### Issue com Maior Engajamento

**[#501](https://github.com/NousResearch/hermes-agent/issues/501) — Web UI Gateway: Interface Web Local com Streaming, Artifacts & Rich Rendering**
- **Comentários:** 15 | **Reações:** 2
- **Autor:** teknium1
- **Análise:** Esta é a demanda mais antiga e comentada do projeto. A comunidade exige uma interface web local para competir com Claude Artifacts. A feature cobriria streaming em tempo real, rendering rico de código/markdown, e suporte a artifacts interativos. Impacto estratégico alto para user adoption.

### Issues Relevantes por Engajamento

| Issue | Tema | Comentários | Reações |
|-------|------|-------------|---------|
| [#60144](https://github.com/NousResearch/hermes-agent/issues/60144) | Desktop boot falha no Windows (timeout 15s) | 4 | 0 |
| [#59305](https://github.com/NousResearch/hermes-agent/issues/59305) | Mensagens vazam entre tabs | 4 | 1 |
| [#50718](https://github.com/NousResearch/hermes-agent/issues/50718) | Session visibility & notifications | 4 | 1 |
| [#52426](https://github.com/NousResearch/hermes-agent/issues/52426) | Distinguir user/assistant visualmente | 4 | 1 |

### Tendências Observadas

1. **Desktop é prioridade:** 70% das issues de alta prioridade são relacionadas ao desktop
2. **UX/UI requests em alta:** Múltiplas features de visualização de sessões e mensagens
3. **Windows compatibility:** Bugs de path, timeout e environment variables afetam fortemente usuários Windows

---

## 5. Bugs e Estabilidade

### P1 - Críticos (Aguardam Fix Imediato)

| Issue | Descrição | Plataformas |
|-------|-----------|------------|
| [#65746](https://github.com/NousResearch/hermes-agent/issues/65746) | MoA/local calls crash após 30s: `cannot convert float infinity to integer` | Todas |
| [#65876](https://github.com/NousResearch/hermes-agent/issues/65876) | New sessions hang silently — MoA preset KeyError | Todas |
| [#65891](https://github.com/NousResearch/hermes-agent/issues/65891) | Model switch markers poluem histórico permanentemente | Desktop |

### P2 - Importantes

| Issue | Descrição | Plataformas |
|-------|-----------|------------|
| [#60144](https://github.com/NousResearch/hermes-agent/issues/60144) | Desktop boot falha com MCP registration > 15s | Windows |
| [#65909](https://github.com/NousResearch/hermes-agent/issues/65909) | PYTHONPATH vaza para child processes | Windows |
| [#65924](https://github.com/NousResearch/hermes-agent/issues/65924) | `write_file` recusa .yml válido (TypeError) | Windows |
| [#64587](https://github.com/NousResearch/hermes-agent/issues/64587) | Schema sanitizer corrompe `dependentRequired` em MCP tools | Todas |
| [#65853](https://github.com/NousResearch/hermes-agent/issues/65853) | Delegation cleanup deleta results antes de delivery | Todas |
| [#65854](https://github.com/NousResearch/hermes-agent/issues/65854) | Uninstall pode deletar outros packages | Todas |

### P3 - Moderados

| Issue | Descrição |
|-------|-----------|
| [#65902](https://github.com/NousResearch/hermes-agent/issues/65902) | "Free mode" não é realmente free (feedback sobre billing) |
| [#65869](https://github.com/NousResearch/hermes-agent/issues/65869) | Cron agent falha em AR Reporting (auth spam) |
| [#45738](https://github.com/NousResearch/hermes-agent/issues/45738) | Desktop mostra transcript de outra sessão |
| [#65173](https://github.com/NousResearch/hermes-agent/issues/65173) | File browser reabre em nova sessão |

### Padrões de Bugs Identificados

1. **Vazamento de estado entre sessões** — Múltiplas reports (#[59305](https://github.com/NousResearch/hermes-agent/issues/59305), #[47475](https://github.com/NousResearch/hermes-agent/issues/47475), #[65891](https://github.com/NousResearch/hermes-agent/issues/65891))
2. **Windows path handling** — Normalização inconsistente entre `\` e `/`
3. **Timeout e heartbeat** — MoA com timeouts non-finite causando crashes

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Solicitadas

| Issue | Descrição | Prioridade |
|-------|-----------|------------|
| [#501](https://github.com/NousResearch/hermes-agent/issues/501) | **Web UI Gateway** — Interface browser local com streaming | P1 |
| [#40769](https://github.com/NousResearch/hermes-agent/issues/40769) | **Group by picker** — Agrupar sessões por tempo/fonte/tipo/tópico | P3 |
| [#64905](https://github.com/NousResearch/hermes-agent/pull/64905) | **Inline `$skill-name` mentions** — Invocar skills no meio do prompt | P3 |
| [#59806](https://github.com/NousResearch/hermes-agent/pull/59806) | **EU GDPR unbroker skill** — Cobertura EU/EEA/UK DPA | P3 |
| [#44492](https://github.com/NousResearch/hermes-agent/issues/44492) | **Enhanced status bar** — cwd, cost, time budget | P3 |
| [#3335](https://github.com/NousResearch/hermes-agent/pull/3335) | **Zulip integration** | P3 |

### Sinais de Roadmap

1. **Desktop-first:** Foco واضح em estabilizar e melhorar a experiência desktop
2. **Model flexibility:** LM Studio integration (#61606, #62292) indica expansão para modelos locais
3. **Plugin ecosystem:** Lifecycle hooks (#65927) sugerem sistema de plugins mais robusto
4. **Pet system:** Features de hatch/import de pets (#65930, #65929) indicam gamification layer

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais

| Categoria | Feedback | Frequência |
|-----------|----------|------------|
| **Estabilidade Desktop** | "Desktop boot fails every launch", "Messages leak across sessions" | Alta |
| **Windows compatibility** | "Works on CLI but not Desktop", path normalization issues | Alta |
| **UX/UI** | "Can't tell who said what", "Which session is active?" | Média |
| **Billing transparency** | "Free mode is NOT free" — reclamação sobre labeling | Emergente |

### Cenários de Uso Reportados

1. **Workflow corporativo:** Cron jobs para AR reporting com falhas de autenticação
2. **Desenvolvimento local:** LM Studio para modelos locais em execução
3. **Multi-sessão:** Usuários com múltiplas tabs/sessões simultâneas
4. **Integração empresarial:** Slack, Discord, Google Chat, Zulip, WhatsApp

### Sentimento Geral

**Neutro a Positivo** — Comunidade ativa reportando bugs específicos (não frustração generalizada). Bugs são técnicos e bem documentados. Feature requests mostram interesse em expansão, não frustração com funcionalidades existentes.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta há >7 dias

| Issue | Idade | Descrição | Prioridade |
|-------|-------|-----------|------------|
| [#65746](https://github.com/NousResearch/hermes-agent/issues/65746) | 1 dia | MoA crash após 30s | P2 |
| [#65889](https://github.com/NousResearch/hermes-agent/issues/65889) | 1 dia | HTTP MCP tools não carregam em cron | P2 |
| [#65869](https://github.com/NousResearch/hermes-agent/issues/65869) | 1 dia | Cron Agent falha diariamente | P2 |
| [#45738](https://github.com/NousResearch/hermes-agent/issues/45738) | 34 dias | Transcript de outra sessão | P3 |
| [#3335](https://github.com/NousResearch/hermes-agent/pull/3335) | 112 dias | Zulip integration stale | P3 |

### PRs Estagnados

| PR | Idade | Descrição | Bloqueios |
|----|-------|-----------|-----------|
| [#3335](https://github.com/NousResearch/hermes-agent/pull/3335) | 112 dias | Zulip integration | Sistema de plugins mudou significativamente |
| [#61606](https://github.com/NousResearch/hermes-agent/pull/61606) | 8 dias | LM Studio management | Dependente de #62292 |

### Recomendações para Maintainers

1. **Priorizar:** [#65746](https://github.com/NousResearch/hermes-agent/issues/65746) — crash crítico em MoA
2. **Reviver ou fechar:** [#3335](https://github.com/NousResearch/hermes-agent/pull/3335) — Zulip precisa rebase
3. **Resolver:** Vazamento de estado entre sessões (#[59305](https://github.com/NousResearch/hermes-agent/issues/59305), #[47475](https://github.com/NousResearch/hermes-agent/issues/47475), #[65891](https://github.com/NousResearch/hermes-agent/issues/65891)) — padrão recorrente
4. **Decidir:** [#65902](https://github.com/NousResearch/hermes-agent/issues/65902) — free mode labeling requer decisão de produto

---

## Métricas Resumidas (2026-07-17)

| Métrica | Valor |
|---------|-------|
| Issues ativas (24h) | 41 |
| Issues fechadas (24h) | 9 |
| PRs abertos (24h) | 41 |
| PRs merged/fechados (24h) | 9 |
| Releases | 0 |
| Maior discussão | #501 (Web UI, 15 comments) |
| Bugs P1 | 3 |
| Bugs P2 | 7 |
| Features request | 6+ |

**Estado geral:** Projeto saudável com alta atividade. Foco necessário em estabilização desktop e resolução de vazamentos de estado entre sessões. Nenhuma release recente indica preparação paraumpackaged grande.

---

*Relatório gerado automaticamente com base em dados do GitHub do NousResearch/hermes-agent em 2026-07-17.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório de Projeto: PicoClaw

**Data do relatório:** 2026-07-17  
**Repositório:** [sipeed/picoclaw](https://github.com/sipeed/picoclaw)  
**Analista:** Equipe de Análise Open Source

---

## 1. Panorama do Dia

O projeto PicoClaw apresenta alta atividade de Pull Requests nas últimas 24h, com 9 PRs abertos — predominantemente atualizações de dependências automatizadas via Dependabot e duas contribuições de features relevantes da comunidade. Não houve lançamentos de novas versões, e o volume de issues permanece baixo com apenas 2 entradas. A atividade sugere um período de maturação de código antes de um próximo release, com foco em manutenção de dependências e adição localizada de funcionalidades.

---

## 2. Lançamentos

**Nenhum novo release nas últimas 24h.**

O último release disponível permanece o **picoclaw 0.3.1** (Build: 2026-07-03T07:10:50Z). Não há informações de changelog detalhado disponíveis nos dados coletados.

---

## 3. Progresso do Projeto

Nenhum PR foi mergeado ou fechado nas últimas 24h. Todos os 9 PRs abiertos permanecem em revisão.

**PRs em destaque (abertos):**

| PR | Título | Tipo | Status |
|----|--------|------|--------|
| [#3261](https://github.com/sipeed/picoclaw/pull/3261) | Add zh-TW locale and Traditional Chinese translations | Feature | Aberto |
| [#3118](https://github.com/sipeed/picoclaw/pull/3118) | Add remote Pico WebSocket mode to picoclaw agent | Feature | Aberto |
| [#3115](https://github.com/sipeed/picoclaw/pull/3115) | Fix inline data URL media extraction for generic tool output | Bug Fix | Aberto |

**Atualizações de dependências abertas (Dependabot):**

- [#3262](https://github.com/sipeed/picoclaw/pull/3262) — `actions/setup-go` v6 → v7
- [#3263](https://github.com/sipeed/picoclaw/pull/3263) — `actions/setup-node` v6 → v7
- [#3238](https://github.com/sipeed/picoclaw/pull/3238) — `aws-sdk-go-v2/config` 1.32.25 → 1.32.29
- [#3237](https://github.com/sipeed/picoclaw/pull/3237) — `golang.org/x/sync` 0.21.0 → 0.22.0
- [#3236](https://github.com/sipeed/picoclaw/pull/3236) — `copilot-sdk/go` 0.2.0 → 1.0.6
- [#3235](https://github.com/sipeed/picoclaw/pull/3235) — `pion/rtp` 1.10.2 → 1.10.3

---

## 4. Temas Quentes da Comunidade

**Issue em destaque:**

- [#3195](https://github.com/sipeed/picoclaw/issues/3195) — **"OpenAI GPT does not work on NanoKVM with default config"**  
  3 comentários, 0 reações. Usuário reportando problema de integração com GPT-5.4 em ambiente NanoKVM 2.4.0. Esta issue está marcada como `stale` e requer atenção da equipe de manutenção.

**Análise:** A comunidade demonstra interesse em:
1. **Suporte a plataformas de hardware** (NanoKVM, ARM64)
2. **Internacionalização** (Tradução para Traditional Chinese/Taiwan)
3. **Modos de operação remotos** (WebSocket para o agente)

---

## 5. Bugs e Estabilidade

| Severidade | Issue | Descrição | Status |
|------------|-------|-----------|--------|
| **Bug Reported** | [#3195](https://github.com/sipeed/picoclaw/issues/3195) | OpenAI GPT não funciona com config padrão em NanoKVM | Aberto |
| **Bug Reported** | [#3260](https://github.com/sipeed/picoclaw/issues/3260) | Launcher ARM64 não existe para release baixada de picoclaw.io | **Fechado** |

**Análise:** A issue [#3260](https://github.com/sipeed/picoclaw/issues/3260) foi rapidamente fechada, indicando resolução — possivelmente confirmando que o problema já foi corrigido em builds subsequentes ou que houve mal-entendido na configuração do ambiente (Raspberry 3B + Raspbian Lite).

---

## 6. Pedidos de Features e Sinais de Roadmap

| PR | Feature | Impacto | Notas |
|----|---------|---------|-------|
| [#3261](https://github.com/sipeed/picoclaw/pull/3261) | Suporte a locale zh-TW (Traditional Chinese) | UI/Docs | Contribuição da comunidade, indica foco em usuários de Taiwan |
| [#3118](https://github.com/sipeed/picoclaw/pull/3118) | Remote Pico WebSocket mode | Networking | Permite operação remota do agente via WebSocket — feature significativa |
| [#3115](https://github.com/sipeed/picoclaw/pull/3115) | Correção de extração de media URLs inline | Estabilidade | Corrige corrupção de histórico de sessão |

**Sinais de roadmap identificados:**
- Expansão de internacionalização (locales adicionais)
- Suporte a arquiteturas ARM64 (Raspberry Pi)
- Operações remotas via WebSocket
- Melhoria no tratamento de mídia em outputs de ferramentas

---

## 7. Resumo de Feedback dos Usuários

**Dores reportadas:**

1. **Incompatibilidade de plataforma:** Usuário encontrou problemas ao usar PicoClaw em NanoKVM 2.4.0 com GPT-5.4, sugerindo que a documentação de modelos suportados pode não refletir completamente os requisitos de configuração.

2. **Problemas de release para ARM64:** Usuário do Raspberry Pi 3B (aarch64) reportou ausência do launcher, indicando possível gap entre binários disponíveis para download e plataformas ARM.

**Cenários de uso identificados:**
- KVM over IP (NanoKVM)
- Agentes remotos em dispositivos ARM64
- Integração com múltiplos LLMs (OpenAI GPT, GitHub Copilot SDK)

**Satisfação:** A resolução rápida da issue ARM64 (#3260) demonstra responsiveness da equipe.

---

## 8. Backlog que Merece Atenção

| Item | Tipo | Idade | Prioridade | Motivo |
|------|------|-------|------------|--------|
| Issue #3195 (GPT NanoKVM) | Bug | 17 dias | **Alta** | Marcada como stale, 3 comentários, indica problema real com plataforma crescente |
| PR #3118 (Remote WebSocket) | Feature | 35 dias | **Média-Alta** | Feature significativa aguardando review, demonstra demanda por operação remota |
| PR #3115 (Data URL fix) | Bug Fix | 35 dias | **Média** | Corrige corrupção de dados, essencial para estabilidade |
| PRs Dependabot stale | Maintenance | 7-8 dias | **Baixa** | Atualizações de dependências pendentes — recomendadas para evitar Technical Debt |

**Recomendação:** Priorizar review das issues [#3195](https://github.com/sipeed/picoclaw/issues/3195), [#3118](https://github.com/sipeed/picoclaw/pull/3118) e [#3115](https://github.com/sipeed/picoclaw/pull/3115), que representam bugs ativos e features com valor significativo para a comunidade.

---

## Métricas Resumidas

| Indicador | Valor | Tendência |
|-----------|-------|-----------|
| PRs abertos (24h) | 9 | ▲ Alta |
| Issues abertas (24h) | 1 | ▼ Baixa |
| Releases (24h) | 0 | — Estável |
| PRs mergeados (24h) | 0 | — Estável |
| Issues fechadas (24h) | 1 | — Resolvida |

**Saúde geral do projeto:** ✅ Ativo | ⚠️ Backlog de reviews acumulado

---

*Relatório gerado automaticamente. Dados coletados de github.com/sipeed/picoclaw em 2026-07-17.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório de Projeto — IronClaw
## 📅 Data de referência: 2026-07-17

---

## 1. Panorama do dia

O projeto IronClaw apresenta **alta atividade de desenvolvimento** em 17 de julho de 2026, com 24 issues e 40 PRs atualizados nas últimas 24h. O foco predominante está na **racionalização do runtime Reborn** — evidenced by PRs promoting the CLI executable from `ironclaw-reborn` to `ironclaw` and serving the WebUI from root path instead of `/v2`. A integração com Slack continua como a área com maior volume de bugs reportados, abrangendo problemas de autenticação, entrega de mensagens e roteamento incorreto de notificações. O time está simultaneamente executando correções de OAuth lifecycle hygiene, melhorias no WebUI v2 (toasts, temas, workspace), e preparação para lançamento do Telegram como extensão de primeiro nível. Não houve releases publicadas nas últimas 24h.

---

## 2. Lançamentos

### Nenhuma release publicada nas últimas 24h

O último release taggeado permanece **ironclaw v0.29.1** (detalhado no PR [#5598](https://github.com/nearai/ironclaw/pull/5598)), que inclui:
- `ironclaw_common`: 0.4.2 → 0.5.0 ⚠️ (breaking changes)
- `ironclaw_safety`: 0.2.2 → 0.2.3 ✓
- `ironclaw_skills`: 0.3.0 → 0.4.0 ⚠️ (breaking changes)
- `ironclaw`: 0.24.0 → 0.29.1

**Nota de migração:** As quebras de API em `ironclaw_common` e `ironclaw_skills` requerem atenção durante upgrade.

---

## 3. Progresso do Projeto

### PRs merged/fechados hoje (10 total)

| PR | Escopo | Impacto |
|----|--------|---------|
| [#6118](https://github.com/nearai/ironclaw/pull/6118) | **Admin secrets management** | Expõe operações CRUD de secrets por usuário na UI administrativa — feature aguardada pela comunidade |
| [#6164](https://github.com/nearai/ironclaw/issues/6164) | **Slack state machine cleanup** | Remove redundância entre `SlackConnectionEpoch` e auth-flow layer; fonte ativa de bugs eliminada |
| [#6117](https://github.com/nearai/ironclaw/issues/6117) | **Workspace i18n** | Corrige region names e formata file sizes em bytes para formato legível |
| [#6115](https://github.com/nearai/ironclaw/pull/6115) | **Dependabot batch** | Atualização de 25 dependências Rust (incluindo `agent-client-protocol` 0.10.4 → 1.2.0) |
| [#6111](https://github.com/nearai/ironclaw/pull/6111) | **WebChat v2 model selection** | Traz seleção de modelo e tracking de custo/uso para a API WebChat v2 — feature parity com OpenAI-compatible API |
| [#5565](https://github.com/nearai/ironclaw/pull/5565) | **Onboarding/NUX demo** | Shippa intent handoff, OAuth entry, chat-first workspace com mock-backed Vercel demo |

### Avanços significativos em PRs abertos

- ** [#6159](https://github.com/nearai/ironclaw/pull/6159) — Telegram extension para Reborn:** Admin bot setup, WebGeneratedCode pairing, DM entrypoint — Telegram se torna first-class entrypoint
- ** [#6157](https://github.com/nearai/ironclaw/pull/6157) — Terminal UI + service install:** Novo comando `ironclaw-reborn tui` via ratatui, thin HTTP+SSE client
- ** [#6130](https://github.com/nearai/ironclaw/pull/6130) — OAuth lifecycle hygiene:** Supersede-on-start, PKCE verifiers duráveis, projeções honestas de expiry
- ** [#5978](https://github.com/nearai/ironclaw/pull/5978) — Read-before-edit para Reborn:** Implementa proteção contra stale edits e mid-air collisions em coding tools

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários)

1. ** [#5834](https://github.com/nearai/ironclaw/issues/5834) — Slack disconnect rejeitado incorretamente** (3 comentários)
   - **Demanda:** Agente responde com conteúdo irrelevante ao pedir desconexão do Slack
   - **Severidade:** P2 — afeta fluxo de usuário básico

2. ** [#6155](https://github.com/nearai/ironclaw/issues/6155) — Follow-up sem resposta após run falhar** (2 comentários)
   - **Demanda:** Chat fica travado após falha de provider; follow-ups não produzem resposta
   - **Severidade:** P2 — UX quebrado em cenários de erro

3. ** [#6126](https://github.com/nearai/ironclaw/issues/6126) — Sem loading state na primeira mensagem** (2 comentários)
   - **Demanda:** UI parece frozen durante processamento inicial
   - **Severidade:** P3 — UX polish

4. ** [#6127](https://github.com/nearai/ironclaw/issues/6127) — "Previous run still in progress" no primeiro execute** (2 comentários)
   - **Demanda:** Status incorreto para primeira execução de routine
   - **Severidade:** P3

### PRs de maior visibilidade

- ** [#6147](https://github.com/nearai/ironclaw/pull/6147) — Promoção do CLI para `ironclaw`** (XL, risk: high)
  - Impacta Docker entrypoints, CI/E2E workflows, canaries, release archives
  - 38 scopes afetados — mudança de branding massiva

- ** [#6116](https://github.com/nearai/ironclaw/pull/6116) — Unified generic extension runtime** (XL, risk: medium)
  - Reconciles 92 commits do main com arquitetura genérica de extensões
  - Base para Option A honest state machine

---

## 5. Bugs e Estabilidade

### Por severidade (P1-P3)

#### 🔴 P1 — Críticos

| Issue | Título | Status |
|-------|--------|--------|
| [#5943](https://github.com/nearai/ironclaw/issues/5943) | Slack DM action posta no channel errado | OPEN |
| [#5877](https://github.com/nearai/ironclaw/issues/5877) | Notificação Slack enviada ao usuário errado | OPEN |
| [#3533](https://github.com/nearai/ironclaw/issues/3533) | Telegram não configura automaticamente via UI | CLOSED |

#### 🟠 P2 — Altos

| Issue | Título | Status |
|-------|--------|--------|
| [#5834](https://github.com/nearai/ironclaw/issues/5834) | Slack disconnect rejeitado incorretamente | OPEN |
| [#5944](https://github.com/nearai/ironclaw/issues/5944) | Slack DM delivery falha silenciosamente | OPEN |
| [#5882](https://github.com/nearai/ironclaw/issues/5882) | Reconnect Slack deixa auth em estado quebrado | OPEN |
| [#6155](https://github.com/nearai/ironclaw/issues/6155) | Follow-up não responde após run falhar | OPEN |

#### 🟡 P3 — Médios

| Issue | Título | Status |
|-------|--------|--------|
| [#6126](https://github.com/nearai/ironclaw/issues/6126) | Sem loading/streaming state na primeira mensagem | OPEN |
| [#6127](https://github.com/nearai/ironclaw/issues/6127) | Status "previous run" incorreto no primeiro execute | OPEN |
| [#5602](https://github.com/nearai/ironclaw/issues/5602) | Não consegue conectar Slack via chat | OPEN |
| [#6149](https://github.com/nearai/ironclaw/issues/6149) | Download de workspace falha silenciosamente | OPEN |

### Cluster Slack Integration — Análise

O domínio Slack concentra **8 issues de bugs** — o maior cluster de instabilidade do projeto:
- 3 P1/P2 envolvendo entrega de mensagens para usuários incorretos (security-sensitive)
- 2 P2 de autenticação/estado quebrado
- 2 P2/P3 de UX de conexão

O PR [#6164](https://github.com/nearai/ironclaw/issues/6164) (Slack state machine cleanup) foi mergeado hoje, mas o volume de bugs sugere necessidade de revisão arquitetural da integração Slack.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features novas abertas (20 issues open)

| # | Feature | Autor | Escopo |
|---|---------|-------|--------|
| [#6158](https://github.com/nearai/ironclaw/issues/6158) | **Tradução Traditional Chinese (zh-TW)** | PeterDaveHello | WebUI v2 |
| [#6146](https://github.com/nearai/ironclaw/issues/6146) | **Controles de tema na Appearance settings** | italic-jinxin | WebUI v2 |
| [#6143](https://github.com/nearai/ironclaw/issues/6143) | **Promover CLI de `ironclaw-reborn` para `ironclaw`** | italic-jinxin | Reborn |
| [#6142](https://github.com/nearai/ironclaw/issues/6142) | **Servir WebUI na root path (/)** | italic-jinxin | Reborn WebUI |
| [#6140](https://github.com/nearai/ironclaw/pull/6140) | **`github.get_job_logs` + SSRF-safe redirect** | ilblackdragon | Reborn skills |
| [#6160](https://github.com/nearai/ironclaw/issues/6160) | **Build binaries para múltiplas CPU architectures** | think-in-universe | CI/Release |

### Sinais de roadmap

1. **Reborn como runtime canônico:** O rebranding do CLI (#6147) e movimento do WebUI para root path (#6142) indicam que o Reborn substituirá completamente o v1 em breve.

2. **Extensão genérica unificada:** PR #6116 reconcilia 92 commits do main com a arquitetura de extensões genéricas — base para extensões de canal (Slack, Telegram, etc.) em runtime único.

3. **WebUI v2 como interface primária:** Stack de PRs de design system (#6162, #6163) e controles de UX (#6151, #6148) mostram foco em polishing da nova interface.

4. **i18n expansion:** Adição de zh-TW (#6158) e correções de localization (#6117) indicam prioridade em localização.

---

## 7. Resumo de Feedback dos Usuários

### Dores reportadas

| Dor | Frequência | Severidade | Issue |
|-----|------------|------------|-------|
| Slack entrega mensagem no lugar errado | 2+ usuários | P1 | [#5943](https://github.com/nearai/ironclaw/issues/5943), [#5877](https://github.com/nearai/ironclaw/issues/5877) |
| Fluxo de autenticação Slack quebra após reconnect | Recorrente | P2 | [#5882](https://github.com/nearai/ironclaw/issues/5882) |
| Chat fica travado após falha de provider | Observado | P2 | [#6155](https://github.com/nearai/ironclaw/issues/6155) |
| UI parece frozen na primeira mensagem | Observado | P3 | [#6126](https://github.com/nearai/ironclaw/issues/6126) |
| Download de workspace falha silenciosamente | Observado | P3 | [#6149](https://github.com/nearai/ironclaw/issues/6149) |

### Cenários de uso reportados

- **Telegram pairing obsoleto:** UI não configura automaticamente, exigindo workarounds manuais ([#3533](https://github.com/nearai/ironclaw/issues/3533) — já corrigido)
- **Daily failure taxonomy:** Levantamento automático de falhas ([#6144](https://github.com/nearai/ironclaw/issues/6144)) indica uso em produção com monitoramento ativo
- **CI triage automation:** `github.get_job_logs` capability sendo shipada ([#6140](https://github.com/nearai/ironclaw/pull/6140)) responde a demanda de automação de DevOps

### Satisfação/Insatisfação

**Positivo:**
- Admin secrets management finalmente disponível ([#6118](https://github.com/nearai/ironclaw/pull/6118))
- WebUI v2的外观 controles amadurecendo (temas, toasts, workspace redesign)

**Frustrações:**
- Integração Slack permanece instável após múltiplos ciclos de bug reports
- Falta de feedback visual em cenários de erro (downloads, runs)
- Onboarding ainda não polished na nova WebUI

---

## 8. Backlog que Merece Atenção

### Issues sem atividade significativa

| # | Título | Criado | Última atualização | Riscos |
|---|--------|--------|-------------------|--------|
| [#5602](https://github.com/nearai/ironclaw/issues/5602) | Can't connect Slack from chat | 2026-07-03 | 2026-07-16 | **13 dias** sem resolução — P3 elevado |
| [#6138](https://github.com/nearai/ironclaw/issues/6138) | Tier-2 harness não expressa compound deny-gate + HTTP-egress | 2026-07-15 | 2026-07-15 | **2 dias** — afecta fault-injection coverage |
| [#6137](https://github.com/nearai/ironclaw/issues/6137) | Mixed-batch gate resume não redispatches non-first gated call | 2026-07-15 | 2026-07-15 | **2 dias** — bug de gate/approval |
| [#6136](https://github.com/nearai/ironclaw/issues/6136) | WebChatV2Event variants são dead code | 2026-07-15 | 2026-07-15 | **2 dias** — tech debt |

### Priorização recomendada

1. **🔴 Cluster Slack (8 issues)** — requires architects review; ongoing bugs despite fixes
2. **🟠 Read-before-edit (#5978)** — feature de robustez para coding tools em benchmark
3. **🟠 Unified extension runtime (#6116)** — blocker para outras extensões
4. **🟡 Internationalization** — zh-TW localization e polish de i18n

---

## Métricas de Saúde do Projeto

| Indicador | Valor | Status |
|-----------|-------|--------|
| Issues ativas (24h) | 24 | 🟢 Alta |
| PRs atualizados (24h) | 40 | 🟢 Muito alta |
| Ratio open/closed issues | 20/24 = 83% | 🟡 Needs triage |
| P1 bugs ativos | 2 | 🔴 Crítico |
| PRs de infraestrutura (reborn/unified) | 6+ | 🟢 Positivo |
| Dependencies atualizadas | 51 (em 2 PRs) | 🟢 Health |

---

*Relatório gerado em 2026-07-17. Dados extraídos de github.com/nearai/ironclaw.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do Projeto CoPaw — 2026-07-17

## 1. Panorama do Dia

O projeto CoPaw apresenta **alta atividade de desenvolvimento** nas últimas 24h, com 44 issues e 43 PRs atualizados. A transição para a versão 2.0.x continua gerando ondas de bugs e problemas de estabilidade reportados pela comunidade, com destaque para falhas de memória/compactação, problemas de sessão e conflitos de ambiente Windows. No front de engenharia, múltiplas correções críticas foram merged, incluindo patches para vazamento de memória em canais, sincronização de timezone em Docker e resolução de UAC no Windows. A base de issues abertas permanece concentrada em bugs de usabilidade e features solicitadas para a versão 2.x.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto está em sua versão mais recente estável `v2.0.0.post2`, которая ainda não teve uma nova tag de release publicada apesar das múltiplas correções merged hoje.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados com Impacto

| # | PR | Autor | Impacto |
|---|-----|-------|---------|
| [#6200](https://github.com/agentscope-ai/QwenPaw/pull/6200) | fix(cli): cron update preserves untouched runtime and request fields | manjieqi | **Crítico** — Corrige perda de campos customizados ao fazer `qwenpaw cron update` |
| [#6192](https://github.com/agentscope-ai/QwenPaw/pull/6192) | fix(deploy): mount host timezone files | Marlin-Phone | **Crítico** — Sincroniza timezone do container Docker com o host (corrige #6188 e #6196) |
| [#6180](https://github.com/agentscope-ai/QwenPaw/pull/6180) | fix(chat): refresh updated_at on user messages | zhaozhuang521 | **Alto** — Corrige ordenação de sessões ativas (#6131) |
| [#6174](https://github.com/agentscope-ai/QwenPaw/pull/6174) | fix(mcp): unblock workspace startup after connection timeout | jinglinpeng | **Alto** — Desbloqueia inicialização quando MCP client não responde |
| [#6168](https://github.com/agentscope-ai/QwenPaw/pull/6168) | fix(channels): bound unbounded state and track fire-and-forget tasks | hongxicheng | **Crítico** — Previne vazamentos de memória em Mattermost, OneBot e XiaoYi |
| [#6171](https://github.com/agentscope-ai/QwenPaw/pull/6171) | fix(memory): add dream schedule toggle | ployts | **Médio** — Controle explícito de ativação do sonho noturno |
| [#6185](https://github.com/agentscope-ai/QwenPaw/pull/6185) | test(e2e): adapt selectors for v2.0.0 UI redesigns | yutai78786 | **Manutenção** — Adapta suite de testes E2E às novas UI |
| [#6194](https://github.com/agentscope-ai/QwenPaw/pull/6194) | test(ci): run console vitest with coverage | yutai78786 | **DevOps** — Inclui frontend vitest no nightly full sweep |

### PRs Abertos em Review

| # | PR | Autor | Destaque |
|---|-----|-------|----------|
| [#6198](https://github.com/agentscope-ai/QwenPaw/pull/6198) | feat: bound multi-agent startup and improve readiness UX | rayrayrayraykk | Limita concorrência na inicialização de multi-agent |
| [#6127](https://github.com/agentscope-ai/QwenPaw/pull/6127) | fix(cli): conditionally elevate UAC on Windows | wangfei010313 | Remove UAC obrigatório em VBS/headless (#6169) |
| [#6190](https://github.com/agentscope-ai/QwenPaw/pull/6190) | fix(governance): auto-register tools via @tool_descriptor | XiuShenAl | Unifica registro de ferramentasbuiltin/plugins |
| [#6159](https://github.com/agentscope-ai/QwenPaw/pull/6159) | Refactor channel base | yuanxs21 | Move usage/token settlement para BaseChannel |
| [#6191](https://github.com/agentscope-ai/QwenPaw/pull/6191) | fix(model_factory): resolve file:// URIs | qbc2016 | Corrige URIs file:// em DataBlock |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários)

| # | Título | Tipo | Comentários | Link |
|---|--------|------|-------------|------|
| #6116 | Doom loop: agent repeatedly triggers same tool call | bug | 6 | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6116) |
| #6158 | Token 用量异常，未对话仍有大量扣费 | question | 5 | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6158) |
| #6196 | Container log timestamps are always UTC | bug | 5 | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6196) |
| #5995 | Messages silently dropped when session is busy | bug | 5 | [Link](https://github.com/agentscope-ai/QwenPaw/issues/5995) |
| #6048 | 免认证主机白名单支持配置CIDR段 | enhancement | 5 | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6048) |
| #6129 | Missing spaces and line feeds in thinking blocks | bug | 5 | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6129) |

### Análise de Demandas

**1. Custos de API e transparência (#6158)**
Usuário reportou consumo de **28 milhões de tokens em uma semana** sem uso ativo, pedindo investigação de后台调用日志. Este é um sinal de **saúde financeira e confiança** — a comunidade está atenta a gastos inesperados.

**2. Estabilidade de Sessão e Memória (#5995, #6148)**
A "perda de memória" após upgrade para 2.0 foi reportada múltiplas vezes. Issue [#6148](https://github.com/agentscope-ai/QwenPaw/issues/6148) descreve esquecimento frequente e compressão inútil via `/compact`. Combinado com [#5995](https://github.com/agentscope-ai/QwenPaw/issues/5995) (mensagens descartadas silenciosamente), indica problemas sérios de **gestão de estado de sessão**.

**3. Suporte Windows e Permissões (#6161, #6169, #6076)**
Três issues separadas tratam de problemas Windows:
- UAC forçado após upgrade
- Atualização Windows quebrando inicialização
- Pedido de suporte a Windows 7 (com Tauri)

Isto sugere uma **base significativa de usuários Windows Desktop**.

---

## 5. Bugs e Estabilidade

### Por Severidade (baseado em impacto funcional)

#### 🔴 Críticos
| # | Bug | Versão | Link |
|---|-----|--------|------|
| #6158 | Token用量异常 sem uso ativo | 2.0 | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6158) |
| #5995 | Mensagens descartadas silenciosamente quando sessão ocupada | 2.0 | [Link](https://github.com/agentscope-ai/QwenPaw/issues/5995) |
| #6161 | Desktop não inicia após Windows Update (sem admin) | 2.0.post2 | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6161) |
| #6169 | UAC obrigatório mesmo em uso pip normal | 2.0.post2 | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6169) |

#### 🟠 Altos
| # | Bug | Versão | Link |
|---|-----|--------|------|
| #6155 | Múltiplos bugs após upgrade 1.x → 2.0 (embedding, auto-memo) | 2.0 | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6155) |
| #6148 | Amnésia severa após upgrade 2.0 | 2.0.post2 | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6148) |
| #6047 | Nova conversa reabre sessão antiga (stale chats.json) | 2.0 | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6047) |
| #6152 | QQ channel crash ao referenciar imagem local | 2.0 | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6152) |

#### 🟡 Médios
| # | Bug | Versão | Link |
|---|-----|--------|------|
| #6196 | Timestamps UTC ignorando user_timezone | 2.0.post2 | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6196) |
| #6202 | Progressive render失效 no Desktop | Desktop | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6202) |
| #6201 | PubMed MCP causa erro em llama.cpp | 2.0.post2 | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6201) |

### Padrões Identificados

1. **Pós-Upgrade 2.0**: Muitos bugs parecem ser regressões ou configurações quebradas na migração 1.x→2.0
2. **Windows Desktop**: Múltiplos problemas específicos de ambiente (UAC, timezone, inicialização)
3. **Docker**: Timezone UTC como configuração padrão gera problemas recorrentes

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| # | Feature | Autor | Comentários | Link |
|---|---------|-------|-------------|------|
| #6048 | Suporte CIDR em whitelist de hosts | SongDaChuan | 5 | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6048) |
| #6163 | Reusable Workflow Orchestration with Audit Trail | hhhzyd-cloud | 2 | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6163) |
| #5821 | Granular rejects_media capability (por tipo de mídia) | quanrennsxsb | 2 | [Link](https://github.com/agentscope-ai/QwenPaw/issues/5821) |
| #5880 | Interface web para editar/remover policies | MCQSJ | 2 | [Link](https://github.com/agentscope-ai/QwenPaw/issues/5880) |
| #6160 | Python ambiente isolado para scripts gerados | xiaobing006 | 3 | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6160) |

### Features em Desenvolvimento

| # | PR | Status | Link |
|---|-----|--------|------|
| #5187 | feat(computer-use): Windows GUI automation com UIA + Tauri | WIP | [Link](https://github.com/agentscope-ai/QwenPaw/pull/5187) |
| #6186 | feat: image detail level control para view_image | WIP | [Link](https://github.com/agentscope-ai/QwenPaw/pull/6186) |
| #6150 | feat(pawapp): pawapp SDK e kanban app | WIP | [Link](https://github.com/agentscope-ai/QwenPaw/pull/6150) |
| #6027 | ci: CodeQL security scan + Dependabot | Open | [Link](https://github.com/agentscope-ai/QwenPaw/pull/6027) |

### Sinais de Roadmap

1. **Orquestração de Workflows (#6163)**: Usuários querem workflows reutilizáveis multi-step com audit trail — indica uso mais enterprise
2. **Automação Windows Desktop (#5187)**: Computer use via UIA é feature estratégica
3. **Segurança (#6027)**: Adição de CodeQL mostra maturidade e preocupação com vulnerabilidades
4. **Ambientes Isolados (#6160)**: Demanda por sandboxing de scripts Python gerados

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais

1. **Upgrade Problemático para 2.0**
   > "升级到 2.0 之后失忆症很严重" — Amnésia severa após upgrade
   > "从 1.x 升级到 2.0 后，发现多个问题" — Múltiplos bugs após migração

2. **Consumo Inesperado de Tokens/Custos**
   > "DeepSeek 消耗 2800 万 token，但这期间我几乎没有使用" — $28M tokens sem uso

3. **Instabilidade no Windows Desktop**
   > "最近一次 Windows 更新后，QwenPaw Desktop 在普通用户权限下完全无法启动" — Não inicia após Windows Update

4. **Configuração de Ambiente Complexa**
   > "QwenPaw 桌面版在执行生成的 Python 脚本时，直接调用系统全局 Python 解释器" — Necessidade de ambiente Python dedicado

### Cenários de Uso Emergentes

- **Multi-agent orchestration**: Sessions com múltiplos agentes trocando contexto
- **Cron agents com share_session**: Agentes agendados mantendo estado compartilhado
- **Integração empresarial**: Feishu, DingTalk, QQ como canais primários
- **Computer use**: Automação de desktop Windows via UIA

### Satisfação Observada

- Engajamento alto em issues mesmo com problemas — comunidade ativa
- PRs sendo mergeados rapidamente (mesmo dia)
- Features solicitadas (#6186, #5187) já em desenvolvimento

---

## 8. Backlog que Merece Atenção

### Issues Antigas Sem Resolution

| # | Título | Criado | Atualizado | Link |
|---|--------|--------|------------|------|
| #4818 | Cron agent com share_session=true tem execução vazia | 2026-05-29 | 2026-07-16 | [Link](https://github.com/agentscope-ai/QwenPaw/issues/4818) |
| #5717 | Tool-call history malformed causa execução repetida infinita | 2026-07-02 | 2026-07-16 | [Link](https://github.com/agentscope-ai/QwenPaw/issues/5717) |
| #5998 | Agent usa plano antigo após confirmação do usuário | 2026-07-12 | 2026-07-16 | [Link](https://github.com/agentscope-ai/QwenPaw/issues/5998) |

### Issues com labels específicas

| # | Título | Labels | Link |
|---|--------|--------|------|
| #6119 | Session挂起 quando agent B faz zero-downtime reload | bug | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6119) |
| #6116 | Doom loop em tool calls | bug, wontfix | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6116) |

### Recomendação de Priorização

1. **#4818** (Cron agent vazio) — Desde 29/05, problema recorrente afeta uso em produção
2. **#5717** (Tool-call history malformed) — Pode causar loops infinitos e desperdício de tokens
3. **#6158** (Token用量异常) — Potencial problema de segurança/custo que precisa de investigação urgente
4. **#5995** (Mensagens descartadas silenciosamente) — Perda de dados do usuário

---

*Relatório gerado automaticamente com base nos dados do GitHub de CoPaw. Última atualização: 2026-07-17.*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-07-17

## 1. Panorama do Dia

ZeroClaw mantém um alto nível de atividade com **50 issues e 50 PRs atualizados nas últimas 24h**, indicando uma comunidade engajada e um ciclo de desenvolvimento saudável. A release **v0.8.3** acabou de ser publicada, consolidando 379 commits de 56 colaboradores com foco no novo motor SOP, host de plugins WebAssembly e endurecimento de segurança. Dentre as 30 issues abertas, destacam-se 4 bugs P1 em curso (incluindo problemas com provider Kimi e browser_open), enquanto 4 PRs já foram merged. O projeto demonstra vigoroso progresso em múltiplas frentes — runtime, segurança, memória persistente e canais — com várias RFCs fechadas sinalizando amadurecimento arquitetural.

---

## 2. Lançamentos

### ✅ v0.8.3 (Release mais recente)

| Métrica | Valor |
|---|---|
| Commits | 379 |
| Contribuidores | 56 |
| Data | 2026-07-16 |

**Principais destaques:**

- **Novo motor SOP (Standard Operating Procedure):** framework para definição e execução de procedimentos padronizados por agentes.
- **Host de plugins WebAssembly:** infraestrutura para extensibilidade via Wasm.
- **Canal Git Forge:** novo canal de integração com forges Git (GitHub, GitLab, Gitea).
- **Endurecimento de runtime, providers e segurança:** correções e melhorias transversais em estabilidade e proteção.

**Sem menção explícita de breaking changes** — trata-se de release de consolidação incremental. Não há notas de migração publicadas nesta extract.

🔗 [Release v0.8.3](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.8.3)

---

## 3. Progresso do Projeto

### PRs Fechados/Merged (4)

| PR | Autor | Tamanho | Impacto |
|---|---|---|---|
| **#8423** — Adicionar prettier ao frontend web | fjqz177 | XS | Calidadede DX: tooling de formatação CI gate (`npm run fmt:check`) |
| **#9100** — pgvector setup em thread OS dedicada | d6f5g4123-arch | — | **Bugfix crítico P1**: move `try_enable_pgvector` para thread `postgres-memory-init`, eliminando panic síncrono em worker Tokio |
| **#9102** — Strip marcadores de mídia não-imagem antes do dispatch | Nillth | — | **Bugfix provider multimodal**: remove marcadores `[AUDIO:]`, `[VOICE:]`, `[VIDEO:]` etc. que nenhum provider tratava |
| **#8571** — Skip global credential fallback para OAuth providers | mazhuima | XS | **Bugfix segurança delegate**: credencial global era propagada para sub-agentes OAuth, causando falha de autenticação |

O PR **#9100** é particularmente relevante — fecha o bug de panic em startup com Postgres/pgvector habilitado, que bloqueava workflows de memória vetorial.

🔗 [Ver todos os PRs fechados](https://github.com/zeroclaw-labs/zeroclaw/pulls?q=is%3Apr+is%3Aclosed+updated%3A2026-07-16..2026-07-17)

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários + reações)

| # | Título | Comentários | Etiquetas | Status |
|---|---|---|---|---|
| **#5600** | Bug: Use kimi-code provider em streaming — API retorna 400 | 12 | `bug`, `priority:p1`, `risk:high` | 🔴 OPEN |
| **#5937** | Refactor providers architecture e reqwest client | 11 | `enhancement`, `priority:p2`, `risk:high` | 🟡 OPEN |
| **#7952** | Publish optional `channels-full` prebuilt bundle | 7 | `enhancement`, `priority:p2`, `risk:high` | 🟡 OPEN |
| **#7141** | RFC: OIDC authentication provider support | 7 | `rfc`, `priority:p1`, `domain:security` | ✅ CLOSED |
| **#8832** | RFC: Gateway-local Kanban board para trabalho de agentes | 5 | `rfc`, `priority:p2`, `risk:high` | 🟡 OPEN |
| **#9048** | RFC: Separate conversation history from agent-curated long-term memory | 5 | `rfc`, `priority:p2`, `risk:high` | 🟡 OPEN |

**Análise:** O tema dominante é **consolidação arquitetural** — refatoração de providers (#5937), separação de histórico de conversa vs. memória de longo prazo (#9048), e unbundling de artefatos de release (#7952). O bug Kimi streaming (#5600) é o mais comentando, sinalizando dor real em integração de providers alternativos. As RFCs fechadas (#7141 OIDC, #7184 i18n submodule) indicam que o processo de design por RFC está produzindo resultados concretos.

🔗 [Issue #5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600) · [Issue #5937](https://github.com/zeroclaw-labs/zeroclaw/issues/5937) · [Issue #7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141)

---

## 5. Bugs e Estabilidade

### 🔴 Bugs P1 (S1 — workflow blocked)

| # | Título | Componentes | Atualização |
|---|---|---|---|
| **#5600** | Bug: kimi-code streaming — API 400 Bad Request (thinking enabled sem reasoning_content) | provider:kimi, runtime | 2026-07-15 |
| **#8560** | browser_open causa hang infinito quando launcher não abre janela (afeta TTS robot-kit e ffmpeg) | tools, channel, runtime | 2026-07-16 |
| **#9085** | nested runtime panic em try_enable_pgvector (PostgresMemory startup) | memory:backend | 2026-07-16 — **já com PR #9100 merged** |

### 🟡 Bugs P2 (S2 — degraded behavior)

| # | Título | Atualização |
|---|---|---|
| **#9046** | models_cache.json é lido mas nunca escrito — "zeroclaw models refresh" não funciona | 2026-07-16 |
| **#9078** | Serial transport dessincroniza após resposta com ID não correspondente | 2026-07-16 |
| **#8751** | LocalWhisperConfig::default reutiliza defaults serde (max_audio_bytes = 0) | 2026-07-06 |

**Observação:** O bug de pgvector (#9085) já foi corrigido via PR #9100. O bug de browser_open (#8560) ainda está aberto e representa risco alto para agentes em ambientes headless.

🔗 [Issue #8560](https://github.com/zeroclaw-labs/zeroclaw/issues/8560) · [Issue #9085](https://github.com/zeroclaw-labs/zeroclaw/issues/9085) · [Issue #9046](https://github.com/zeroclaw-labs/zeroclaw/issues/9046)

---

## 6. Pedidos de Features e Sinais de Roadmap

### RFCs em destaque (arquitetura)

| # | Título | Prioridade | Status | Sinal de Roadmap |
|---|---|---|---|---|
| **#9048** | Separar histórico de conversa da memória de longo prazo | P2 | Accepted | v0.9.x — sistema de memória dual-plane |
| **#8832** | Kanban board local no gateway para coordenar trabalho de agentes | P2 | Accepted | Dashboard extensível — Workboard plugin |
| **#8780** | Realtime speech-to-speech via Gemini Live | P2 | Accepted | Canal multimodal nativo |
| **#8396** | Tornar wire protocol first-class no provider construction | P2 | Accepted | Padronização de interface de providers |
| **#6293** | Modo air-gapped com daemon companion via unix socket | P2 | Blocked | Execução em ambientes isolados/redes restritivas |

### Features em progresso

| # | Título | Escopo |
|---|---|---|
| **#9072** | Separar storage autoritativo de enrichment connectors (memória) | `size:XL` — refatoração arquitetural de memória |
| **#8384** | Canal nativo Inkbox (email + SMS + voice + iMessage) com Quickstart | `size:XL` — novo canal multi-modal |
| **#6641** | Correlação OTel por turn — spans aninhados llm.call/tool.call/memory.* | Observabilidade |
| **#8134** | Reset de sessões stale após channels.session_ttl_hours | Redução de consumo de tokens |

**Sinal forte:** O projeto está convergindo para uma arquitetura de **memória em camadas** (armazenamento autoritativo vs. enriquecimento opcional — #9072) e **providers padronizados** — indicando foco em flexibilidade de backends para a próxima release.

🔗 [Issue #9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048) · [PR #9072](https://github.com/zeroclaw-labs/zeroclaw/pull/9072) · [PR #8384](https://github.com/zeroclaw-labs/zeroclaw/pull/8384)

---

## 7. Resumo de Feedback dos Usuários

### Dores identificadas

1. **Providers Kimi/Bedrock instáveis** (#5600, #8943): usuários em providers alternativos enfrentam falhas de API que bloqueiam workflow.
2. **Ambientes headless penalizam agentes** (#8560): browser_open + TTS + ffmpeg travam em servidores sem display — dor crítica para deployments daemon.
3. **Configuração de memória confusa**: mistura de Conversation vs. Long-term memory (#9048) gera comportamento inesperado.
4. **Instalação pesada por default** (#7952): bundle únicoconfunde operadores que configuram canais não-incluídos no prebuilt.

### Cenários de uso em expansão

- **Multi-agente via A2A** (#7218 — closed): descoberta de agentes via `.well-known/agent-card.json` para instalações com múltiplos agentes.
- **Gemini Live speech-to-speech** (#8780): demanda por canais de voz nativos em tempo real.
- **In-app upgrade** (#8170): operadores querem atualizar via dashboard web sem CLI.

**Satisfação:** A release v0.8.3 trouxe melhorias concretas (379 commits), e o alto volume de RFCs fechadas indica que a equipe está resolvendo dividas arquiteturais. A dor principal permanece em **providers alternativos** e **ambientes headless/server**.

---

## 8. Backlog que Merece Atenção

### Issues sem resposta / aguardando ação do mantenedor

| # | Título | Idade | Motivo de atenção |
|---|---|---|---|
| **#8398** | RFC: Plugin permission, config e secrets model — perguntas em aberto | 20 dias | Plugin system está em其二ª iteração de permissões; sem resolução, fragmentação persiste |
| **#8541** | Allow Matrix sessions to opt into thread-scoped history | 17 dias | `status:blocked` + `needs-maintainer-review` — funcionalidade de canal Matrix estagnada |
| **#8930+** | Múltiplos PRs aguardando `needs-author-action` | Variável | Pelo menos 6 PRs abertos aguardam ação de autores (ex: #7960, #8576, #8571) — risco de PRs órfãos |

### Riscos de dependência organizacional

| # | Título | Atenção |
|---|---|---|
| **#9107** | Remove singlerider de CODEOWNERS | Mantenedor saiu em 2026-07-15; 44 entradas de código perderam owner — rerouting de reviews necessário |
| **#8358** | Tracker: zerorelay — nominated relay standup | `risk:high`, tracker de release — NAT/CGNAT traversal éfeature crítica para adoção em cloud |

**Recomendação:** Priorizar revisão dos PRs `needs-author-action` e redistribuição dos CODEOWNERS antes que se acumulem. O tracker #8358 (zerorelay) parece em risco de estagnação.

🔗 [Issue #8398](https://github.com/zeroclaw-labs/zeroclaw/issues/8398) · [Issue #8541](https://github.com/zeroclaw-labs/zeroclaw/issues/8541) · [PR #9107](https://github.com/zeroclaw-labs/zeroclaw/pull/9107) · [Issue #8358](https://github.com/zeroclaw-labs/zeroclaw/issues/8358)

---

## Métricas-Resumo do Dia

| Indicador | Valor |
|---|---|
| Issues ativas (24h) | 30 |
| Issues fechadas (24h) | 20 |
| PRs abertos | 46 |
| PRs merged/fechados | 4 |
| Releases | 1 (v0.8.3) |
| Bugs P1 em aberto | 2 (#5600, #8560) |
| RFCs fechadas | 5 (#7141, #7184, #7218, #7142, #6293) |
| PRs de segurança merged | 3 (#9100, #8826, #8571) |
| Commits na release | 379 |
| Contribuidores na release | 56 |

**Veredicto geral:** ZeroClaw está em **saúde boa** — release sólida, atividade alta, RFCs produzindo resultados concretos. Prioridades imediatas: resolver os 2 bugs P1 remanescentes (Kimi streaming + browser_open hang) e redistribuir CODEOWNERS. A direção arquitetural (memória dual-plane, providers unbundled, Kanban gateway) aponta para uma v0.9.x focada em flexibilidade e modularidade.

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*