# Resumo diário do ecossistema de agentes de IA 2026-05-20

> Issues: 1 | PRs: 12 | Projetos cobertos: 7 | Gerado em: 2026-05-19 21:15 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório do Projeto NullClaw — 2026-05-20

---

## 1. Panorama do dia

O projeto NullClaw mantém **atividade intensa**, com 12 PRs atualizados nas últimas 24h e 7 merges realizados — sinal de um ciclo de desenvolvimento saudável. Não houve lançamentos formais no período, mas a base de código recebeu aprimoramentos relevantes em estabilidade de rede, segurança e governança de dados. A comunidade também demonstra engajamento ativo por meio de contribuições de hackathon. O único ponto de atenção é uma **issue aberta** sobre falha de build em Android/Termux, que ainda aguarda triagem.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.** O projeto segue em regime de integração contínua, com merges frequentes diretamente na branch `main`.

> 📌 *Recomendação:* monitorar o próximo tag de release caso o PR #881 (refactor HTTP) seja mesclado, pois envolve renomeação de símbolos de `Curl*` para `Http*` e pode exigir ajustes em integrações externas.

---

## 3. Progresso do Projeto

### PRs merged/fechados nas últimas 24h (7 total)

| # | PR | Autor | Destaque |
|---|-----|-------|----------|
| [#920](https://github.com/nullclaw/nullclaw/pull/920) | fix(net): Windows DNS resolution | chenhlSH | Corrige `getAddressList()` retornando `UnknownHostName` para todo hostname não-localhost no Windows |
| [#912](https://github.com/nullclaw/nullclaw/pull/912) | feat(gateway): sync /webhook para paired-token workers | Kures | Implementa endpoint síncrono `/webhook` para workers com dispatch |
| [#910](https://github.com/nullclaw/nullclaw/pull/910) | fix(discord,websocket): gateway stability | vernonstinebaker | watchdog, backoff, stop interrupt-safe, TLS leak — testado em 4 nós (macOS arm64, Linux aarch64/risvc64, Android) |
| [#911](https://github.com/nullclaw/nullclaw/pull/911) | feat(audit): privacy-preserving secret triage | gosIX22 | Triagem de secrets por LLM com envelopes de privacidade (forma, entropia, charset — sem valores brutos) |
| [#883](https://github.com/nullclaw/nullclaw/pull/883) | probe: resolve executable before spawning | mark-os | Verifica existência do executável antes do `execve` — mitiga bug do Zig stdlib |
| [#885](https://github.com/nullclaw/nullclaw/pull/885) | feat(memory): Data Governance Layer | sleep3r | Camada de governança de dados para o NullClaw (hackathon WB) |
| [#908](https://github.com/nullclaw/nullclaw/pull/908) | Project hktn | ShEvVl | Estabilidade de infraestrutura, reasoning stream, cost tracking, DDG search (hackathon WB) |

### Análise

As contribuições закрытые hoje revelam três eixos prioritários:

1. **Estabilidade multiplataforma** — correções de DNS no Windows, gateway Discord/WebSocket e resolução de executáveis addressam cenários críticos de deployment.
2. **Segurança e privacidade** — a feature de triagem de secrets com envelopes de privacidade é um diferencial arquitetural relevante.
3. **Hackathons como canal de进来的 contribuição** — duas PRs do WB × OpenSource Hackathon foram aceitas, indicando que o projeto atrai contribuições externas de alto impacto.

---

## 4. Temas Quentes da Comunidade

### Issue com maior atenção

| # | Título | Autor | Comentários | Status |
|---|--------|-------|:-----------:|--------|
| [#868](https://github.com/nullclaw/nullclaw/issues/868) | zig build fails on Android/Termux (aarch64) with AccessDenied on options.zig linkat | NOTJuangamer10 | 1 | OPEN |

**Análise:** A issue, aberta em 2026-04-23 e atualizada em 2026-05-19, descreve uma falha de link em dispositivos Android via Termux (aarch64) durante `zig build -Doptimize=ReleaseSmall`. O erro indica `AccessDenied` ao tentar linkar `options.zig`. Embora com apenas 1 comentário e 0 reações, trata-se de um **bloqueio real para usuários em ambiente móvel**. O baixo engajamento pode refletir que é um cenário de uso ainda niche.

### PRs abertos com potencial impacto

| # | Título | Autor | Status |
|---|--------|-------|:------:|
| [#881](https://github.com/nullclaw/nullclaw/pull/881) | refactor(http): remove runtime curl subprocesses | ncode | OPEN |
| [#783](https://github.com/nullclaw/nullclaw/pull/783) | feat(cron): cron subagent, run history, JSON output, security hardening | yanggf8 | OPEN |

**Destaque #881:** Substitui wrappers HTTP baseados em curl por `std.http` nativo do Zig. Impacto arquitetural alto — pode reduzir dependência externa e melhorar performance.

**Destaque #783:** Engine de cron com histórico em DB, filas de workers, suporte a múltiplos tipos de jobs (skill/agent/shell) e saída JSON. É a feature mais antiga em aberto (desde 2026-04-07) e merece acompanhamento.

---

## 5. Bugs e Estabilidade

### Issue aberta (bug)

**🔴 Alta severidade (potencial)**

- **[#868](https://github.com/nullclaw/nullclaw/issues/868)** — `zig build fails on Android/Termux (aarch64)` — link falhando com `AccessDenied` em `options.zig linkat`
  - **Ambiente:** Xiaomi Redmi Note 9, LineageOS 22.2, Termux, aarch64, Zig 0.16.0
  - **Status:** Aberta desde 2026-04-23; 1 comentário (triagem inicial realizada)
  - **Risco:** Bloqueia build em dispositivos móveis ARM64 — segmento crescente de desenvolvedores

### Bugs corrigidos nas últimas 24h

| # | Descrição | Severidade |
|---|-----------|:---------:|
| [#920](https://github.com/nullclaw/nullclaw/pull/920) | DNS resolution no Windows falhava para hostnames não-locais | ⚠️ Média-Alta |
| [#883](https://github.com/nullclaw/nullclaw/pull/883) | execve com executável inexistente deixava processos zumbis | ⚠️ Média |
| [#910](https://github.com/nullclaw/nullclaw/pull/910) | Discord gateway instável (TLS leak, falta de watchdog/backoff) | ⚠️ Média |

### Métricas de estabilidade

- **7 de 12 PRs fechados/merged** nas últimas 24h — taxa de conclusão de ~58%, indicating pipeline saudável
- **0 releases com regressões** — disciplina de integração mantida
- **4 arquiteturas testadas** no PR #910 (macOS arm64, Linux aarch64/risv64, Android aarch64) — cobertura multi-plataforma robusta

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features mergeadas (indicações de direção)

1. **[#911](https://github.com/nullclaw/nullclaw/pull/911) — Secret Triage com privacidade diferencial**
   - Classificação de secrets por LLM usando envelopes de privacidade
   - **Sinal:** NullClaw está investindo em auditoria automatizada e IA-on-device

2. **[#885](https://github.com/nullclaw/nullclaw/pull/885) — Data Governance Layer**
   - Camada de governança de dados integrada ao memory subsystem
   - **Sinal:** Foco em compliance e controle de dados sensíveis

3. **[#912](https://github.com/nullclaw/nullclaw/pull/912) — Webhook síncrono para workers**
   - Preenche GAP 3 do `docs/integration-analysis.md`
   - **Sinal:** Evolução da arquitetura de dispatch para paired-token workers

4. **[#783](https://github.com/nullclaw/nullclaw/pull/783) — Cron subagent (em revisão)**
   - DB-backed scheduler, JSON CLI, security hardening
   - **Sinal:** Expansão do NullClaw como plataforma de automação de agentes

### PR em aberto de alto impacto

- **[#881](https://github.com/nullclaw/nullclaw/pull/881)** — Remoção de curl runtime via refactor HTTP
  - Migrates: providers, channels, gateway, tools, memory API, update, voice, SSE
  - Renomeação: `Curl*` → `Http*`
  - **Sinal:** Espera-se que a próxima major release seja mais lean e com menos deps externas

---

## 7. Resumo de Feedback dos Usuários

### Feedback explícito (via issues)

| # | Cenário | Sentimento | Detalhe |
|---|---------|:---------:|---------|
| [#868](https://github.com/nullclaw/nullclaw/issues/868) | Build em Android/Termux (aarch64) | ❌ Negativo | Frustração com falha de link; usuário forneceu ambiente detalhado, indicando uso real em produção mobile |

### Inferências por análise de PRs

| Área | Sinal | Interpretação |
|------|-------|---------------|
| **Multi-plataforma** | Positivo | Contribuições para Windows DNS, Discord gateway em 4 archs — comunidade valoriza portabilidade |
| **Segurança** | Positivo | Duas PRs de segurança em uma semana (audit + governance) — demanda clara |
| **Hackathons** | Positivo | 2 PRs aceitas do WB Hackathon — projeto atrai contribuidores externos qualificados |
| **Estabilidade** | Positivo | Correções de gateway, DNS e executables demonstram maturidade operacional |

### Lacunas de feedback

- **Sem dados de reações (👍/👎)** nos PRs — impossível medir aceitação da comunidade com base em popularidade
- **Sem comentários** na maioria das PRs — possível baixa visibilidade ou processo de review interno
- **Issue #868 com 0 reações** pode indicar subnotificação do problema ou baixa base de usuários móveis

---

## 8. Backlog que Merece Atenção

### Issues sem resposta há > 7 dias

| # | Título | Criado | Atualizado | Dias inativa |
|---|--------|--------|-----------|:------------:|
| [#868](https://github.com/nullclaw/nullclaw/issues/868) | Bug: Android/Termux aarch64 build failure | 2026-04-23 | 2026-05-19 | ~27 dias |

> ⚠️ Esta issue está aberta há ~27 dias com apenas 1 comentário. O usuário reportou um ambiente detalhado, indicando investimento na investigação. **Recomenda-se resposta da triagem para validar ou escalar.**

### PRs em aberto há > 14 dias (sem movimentação recente visível)

| # | Título | Criado | Idade |
|---|--------|--------|------:|
| [#783](https://github.com/nullclaw/nullclaw/pull/783) | feat(cron): cron subagent, run history... | 2026-04-07 | ~43 dias |
| [#878](https://github.com/nullclaw/nullclaw/pull/878) | fix(compat): nanosleep on POSIX | 2026-04-30 | ~20 dias |
| [#881](https://github.com/nullclaw/nullclaw/pull/881) | refactor(http): remove runtime curl | 2026-05-01 | ~19 dias |

> 📌 **PR #783** em particular merece atenção — feature de cron é substancial (DB scheduler, filas, JSON output) e está aberta há > 40 dias. Pode haver blockers non-técnicos (alinhamento de roadmap, revisão de design).

---

## Indicadores de Saúde do Projeto

| Dimensão | Indicador | Status |
|----------|-----------|:------:|
| **Atividade** | 12 PRs atualizados / 7 mergeados em 24h | ✅ Alta |
| **Qualidade** | 0 releases com regressões | ✅ Sólida |
| **Cobertura** | Testado em 4 arquiteturas | ✅ Robusta |
| **Segurança** | 2 PRs de segurança em 1 semana | ✅ Proativa |
| **Comunidade** | Hackathon contributions aceitas | ✅ Engajada |
| **Atenção** | 1 bug aberto > 20 dias sem resposta | ⚠️ Atenção |
| **Backlog** | PRs antigos sem merge | ⚠️ Monitorar |

---

*Relatório gerado com base em dados do GitHub de nullclaw/nullclaw — 2026-05-20*

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo — Ecossistema de Agentes de IA Open Source

**Data:** 2026-05-20 | **Projetos Analisados:** 6/7 (PicoClaw sem dados)

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source demonstra **saúde polarizada** em 2026-05-20. Cinco dos seis projetos analisados mantêm atividade intensa (>35 itens atualizados em 24h), sinalizando maturidade e adoção crescente. Contudo, padrões distintos emergem: **ZeroClaw e IronClaw** lideram em volume de PRs (48-50/24h), enquanto **NanoBot** se destaca na taxa de fechamento (73 issues+PRs resolvidos). A tensão recorrente entre velocidade de features e estabilidade operacional afeta todos os projetos — Hermes Agent e CoPaw enfrentam regressões críticas em funcionalidades recém-lançadas, enquanto NullClaw mantém disciplina de integração com zero releases com regressões. O tema central do período é a **multi-plataforma e resiliência de canais** — Telegram, WhatsApp, Windows e Android emergem comovetores de fragilidade compartilhados.

---

## 2. Comparação de Atividade

| Projeto | Issues Ativas (24h) | PRs Atualizados (24h) | PRs Merged (24h) | Releases (24h) | Bugs Críticos Abertos | Saúde Geral |
|---------|:-------------------:|:---------------------:|:----------------:|:--------------:|:---------------------:|:------------:|
| **NullClaw** | — | 12 | 7 | 0 | 1 (Android/Termux) | ✅ Alta |
| **NanoBot** | 30 | 35 | 22 | 0 | 0 | ✅ Alta |
| **Hermes Agent** | 50 | 50 | 9 | 0 (v0.14.0) | 3 (P1 Windows/OAuth) | ⚠️ Mista |
| **IronClaw** | 14 | 50 | 10 | 0* | 1 (E2E failed) | ⚠️ Mista |
| **CoPaw** | 37 | 44 | 32 | 2 (v1.1.8) | 3 (crash/RCE/regression) | ⚠️ Mista |
| **ZeroClaw** | 6 | 48 | 6 | 0 (v0.8.0 pending) | 1 (S1 heredocs) | ✅ Alta |

*Release interno não publicado em crates.io

### Destaques Quantitativos

- **Maior Throughput de Código:** IronClaw (50 PRs atualizados, 10 merged)
- **Melhor Taxa de Fechamento:** NanoBot (73 itens resolvidos vs. ~63 atualizados)
- **Maior Volume de Issues:** Hermes Agent (50 issues, 78% abertas)
- **Release Ativa:** CoPaw (v1.1.8 stable + beta)

---

## 3. Posicionamento do Projeto Principal

### Análise de Mercado Relativo

| Dimensão | Liderança | Seguidores | Implicação |
|----------|-----------|------------|------------|
| **Volume de Atividade** | IronClaw + ZeroClaw | Hermes, NanoBot, CoPaw | Competição por mindshare de desenvolvedores |
| **Qualidade/Estabilidade** | NullClaw | NanoBot | NullClaw referência em disciplina de CI |
| **Adoção por Usuário Final** | CoPaw (v1.1.8) | Hermes (v0.14.0) | CoPaw mais maduro para deployment |
| **Inovação Arquitetural** | Hermes (plugin ecosystem) | IronClaw (Reborn) | Hermes com ecossistema mais diversificado |
| **Performance** | NanoBot (cold start 94% faster) | — | NanoBot diferencial técnico claro |

### Posicionamento Estratégico

**NullClaw** posiciona-se como projeto de referência com disciplina de integração exemplar (0 regressões). **NanoBot** diferencia-se por otimização de performance operacional. **Hermes Agent** lidera em ecossistema de plugins e integrações multiplataforma. **IronClaw** demonstra ambição arquitetural com Reborn e separação de crates. **CoPaw** é o mais próximo de produto pronto para produção com desktop app e marketplace. **ZeroClaw** concentra-se em multi-agent runtime com features inovadoras (Dream Mode).

---

## 4. Focos Técnicos Compartilhados

### 4.1 Multi-Plataforma como Vetor de Fragilidade

```
Windows          → Hermes (#28920 P1 crash), IronClaw (E2E), CoPaw (GBK encoding)
Android/Termux   → NullClaw (#868 build failure)
Docker           → Hermes (#18482), IronClaw (permission denied)
```

Todos os projetos enfrentam desafios de portabilidade. Hermes Agent apresenta a situação mais crítica com P1 de subprocess quebrado no Windows.

### 4.2 Resiliência de Canais de Comunicação

| Canal | Projetos Afetados | Status |
|-------|-------------------|--------|
| **WhatsApp** | Hermes, ZeroClaw | Protocol breaks, context loss |
| **Telegram** | NanoBot | Duplicação de respostas, 9+ comentários |
| **WeChat** | CoPaw | Token expiration, cron failures |
| **Feishu** | CoPaw, NanoBot | Audio download, group mode |

### 4.3 Infraestrutura de Memória e Persistência

| Projeto | Feature | Status |
|---------|---------|--------|
| NanoBot | Mnemon integration (#3888) | PR aberto |
| Hermes | Temporal context markers (#28290) | 3 issues abertas |
| ZeroClaw | Dream Mode consolidation (#5849) | P1, 10 comentários |
| NullClaw | Data Governance Layer (#885) | Merged |
| IronClaw | LoopContextBundle improvements (#3434) | Closed |

**Sinal:** Memória de longo prazo e consolidação emergem como necessidade universal.

### 4.4 Multi-Provider e Flexibilidade de Modelos

- **NanoBot:** Skywork, APIFree, StepFun integradas em 24h
- **CoPaw:** OpenCode Go provider (10 modelos gratuitos)
- **ZeroClaw:** Manifest open-source LLM router
- **Hermes:** Codex, SerpApi em demanda

---

## 5. Análise de Diferenciação

### 5.1 Arquitetura e Filosofia

| Projeto | Arquitetura | Linguagem | Foco Primário |
|---------|-------------|-----------|---------------|
| **NullClaw** | Modular, privacy-first | Zig | Estabilidade, segurança |
| **NanoBot** | Lightweight, Python | Python | Performance cold start |
| **Hermes** | Plugin-based, provider agnostic | Python | Extensibilidade |
| **IronClaw** | Rust crates, Reborn | Rust | Maturidade + performance |
| **CoPaw** | Desktop-first, Tauri | Python | UX e distribuição |
| **ZeroClaw** | Multi-agent, skills | Python | Orquestração complexa |

### 5.2 Público-Alvo

| Projeto | Público Primário | Caso de Uso |
|---------|------------------|-------------|
| **NullClaw** | Desenvolvedores Zig, segurança | Agentes auditáveis |
| **NanoBot** | DevOps, múltiplas LLMs | Agentes leves com many-shot |
| **Hermes** | Desenvolvedores, integradores | Dashboards, CLI extensível |
| **IronClaw** | Produtores, plataformas | Multi-tenant, enterprise |
| **CoPaw** | Usuários finais, desktop | Assistente pessoal |
| **ZeroClaw** | Power users, squads | Multi-agent automation |

### 5.3 Diferenças Técnicas Chave

| Aspecto | Diferenciação |
|---------|---------------|
| **Runtime** | IronClaw (Rust) vs. demais (Python) — performance e safety |
| **Deployment** | CoPaw (desktop-first Tauri) vs. Hermes (CLI-first) |
| **Segurança** | NullClaw (privacy envelopes) vs. CoPaw (RCE vulnerability active) |
| **Multi-Agent** | ZeroClaw (squads) vs. NanoBot (bootstrap peer roster) |
| **Provider Model** | Hermes (plugin transport refactor) vs. NanoBot (provider-per-file) |

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração

| Indicador | Líder | Valor | Observação |
|-----------|-------|-------|------------|
| **PRs/24h** | IronClaw | 50 | Reborn architecture driving volume |
| **Taxa de Merge** | CoPaw | 73% (32/44) | Maturidade em review |
| **Issue Resolution** | NanoBot | 87% (26/30) | Manutenção ativa |
| **Release Cadence** | CoPaw | v1.1.8 + beta | Frequência alta |

### 6.2 Engajamento da Comunidade

| Projeto | Issue Mais Comentada | Comentários | Tema |
|---------|---------------------|:-----------:|------|
| **NanoBot** | #193 (Ollama support) | 14 | Provider flexibility |
| **CoPaw** | #4477 (WeChat cron) | 11 | Channel resilience |
| **ZeroClaw** | #5849 (Dream Mode) | 10 | Memory consolidation |
| **Hermes** | #18482 (Docker perms) | 5 | Container issues |
| **IronClaw** | #3259 (crates.io publish) | 6 | Distribution |
| **NullClaw** | #868 (Android build) | 1 | Niche platform |

### 6.3 Dívida Técnica e Backlog

| Projeto | Backlog Crítico | Idade |
|---------|-----------------|-------|
| **ZeroClaw** | 153 commits lost in revert (#6074) | 27 dias |
| **IronClaw** | crates.io gap (3+ semanas) | 20+ dias |
| **Hermes** | Temporal awareness (3 issues) | 2-35 dias |
| **CoPaw** | Markdown tables tech debt | 44 dias |
| **NanoBot** | Prompt prefix preservation | 11+ comentários |

**Sinal:** Projetos mais novos (ZeroClaw, IronClaw) enfrentam dívida de processo (releases, audit), enquanto madura (CoPaw, NanoBot) enfrentam dívida de UX (markdown, table rendering).

---

## 7. Sinais de Tendência

### 7.1 Tendências de Mercado Extraídas

**1. Multi-Agent Orchestration Emerges as Primary Battlefield**

- ZeroClaw: Multi-Agent Runtime v0.8.0 em aprovação
- IronClaw: Reborn architecture com tenant-scoped ACLs
- NanoBot: Squad deployment via HF Spaces
- CoPaw: Subagent spawning (fork pattern) em PR

> **Interpretação:** O mercado evolui de "agente único" para "squads de agentes" — diferenciação por coordenação e não por capacidade individual.

**2. Plugin Ecosystem como Moat Competitivo**

- Hermes: 4+ plugins submetidos em 24h (Kubernetes, Marketing, TokenTelemetry, ElevenLabs)
- CoPaw: Official Plugin Distribution + marketplace
- IronClaw: Extension Manifest v2 com capability catalog

> **Interpretação:** Modelo de plugins madura atrai contribuidores externos — efeito plataforma.

**3. Observabilidade Enterprise Incipiente**

- Hermes: TokenTelemetry plugin (6 deep-link cards)
- NanoBot: /insights for token usage
- Hermes: Provider transport refactor preparando billing multi-provider

> **Interpretação:** Demanda por transparência de custos em ambientes multi-agente.

**4. Privacy-First como Diferencial**

- NullClaw: Secret triage com envelopes de privacidade
- ZeroClaw: Air-gapped execution mode (RFC)
- NullClaw: Data Governance Layer

> **Interpretação:** Segmentação de mercado emergindo — compliance-sensitive vs. feature-first.

**5. Desktop App como Nova Fronteira**

- CoPaw: Tauri 2.x desktop app em revisão
- CoPaw: QwenPaw Pet companion desktop
- Hermes: Windows gateway install (com bugs)

> **Interpretação:** Distribuição desktop como vetor de adoção mainstream.

### 7.2 Recomendações para Decisores

| Stakeholder | Recomendação |
|-------------|--------------|
| **Desenvolvedores** | NullClaw (segurança), Hermes (extensibilidade), NanoBot (performance) |
| **Empresas** | IronClaw (multi-tenant), CoPaw (produto pronto), Hermes (plugins) |
| **Power Users** | ZeroClaw (multi-agent), CoPaw (desktop), Hermes (CLI) |
| **Contribuidores** | NanoBot (alta taxa de merge), CoPaw (v1.x estável), Hermes (plugin ecosystem) |

---

## Conclusão

O ecossistema de agentes de IA open source em 2026-05-20 demonstra **fragmentação saudável** com diferenciação clara por caso de uso. Nenhum projeto domina todas as dimensões — IronClaw lidera em volume de código, CoPaw em produto pronto, Hermes em ecossistema de plugins, NanoBot em performance, e NullClaw em disciplina de qualidade. A tendência mais significativa é a **mudança de foco de agente único para coordenação multi-agente**, com ZeroClaw e IronClaw liderando essa transição. Recomenda-se monitorar a resolução de bugs críticos do Hermes Agent (Windows P1) e do CoPaw (RCE vulnerability) como indicadores de maturidade operacional dos projetos mais ativos.

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# 📊 Relatório do Projeto NanoBot — 2026-05-20

---

## 1. 🌅 Panorama do Dia

O NanoBot apresenta **alta atividade** no período analisado, com 30 issues e 35 PRs atualizados nas últimas 24h. A taxa de fechamento é expressiva — 26 issues e 22 PRs foram resolvidos, indicando uma rotina de manutenção ativa. Não houve releases formais, mas o progresso em PRs de infraestrutura (otimização de cold start) e expansão de provedores (Skywork, APIFree, StepFun) sugere maturidade para uma próxima versão. A comunidade demonstra engajamento significativo com issues de longa data sendo finalmente adressadas.

---

## 2. 🚀 Lançamentos

**Nenhum release detectado no período.**

O projeto não publicou novas versões nas últimas 24h. Isso é consistente com o padrão de desenvolvimento ativo observado, onde mudanças incrementais são acumuladas antes de um tagged release.

---

## 3. 💡 Progresso do Projeto

### PRs Merged/Closed (22 itens)

| PR | Título | Impacto |
|----|--------|---------|
| [#3918](https://github.com/HKUDS/nanobot/pull/3918) | **perf: optimize gateway cold start from ~6.9s to ~385ms** | ⭐ Otimização crítica: redução de 94% no tempo de inicialização via lazy-loading |
| [#3916](https://github.com/HKUDS/nanobot/pull/3916) | feat(providers): add Skywork first-level support | Novo provedor LLM integrado |
| [#3910](https://github.com/HKUDS/nanobot/pull/3910) | feat(image-generation): add StepFun provider support | Provedor de geração de imagem (step-image-edit-2, step-1x-medium) |
| [#3914](https://github.com/HKUDS/nanobot/pull/3914) | refactor(image-generation): split providers into per-file modules | Refatoração para manutenibilidade |
| [#3915](https://github.com/HKUDS/nanobot/pull/3915) | feat(providers): add APIFree support | Provedor alternativo com modelos agent-optimized |
| [#3894](https://github.com/HKUDS/nanobot/pull/3894) | fix(webui): accept end/error phases in tool trace rendering | Correção de visualização de tool calls |
| [#3912](https://github.com/HKUDS/nanobot/pull/3912) | docs: surface local provider setup in README | Melhora na documentação |
| [#3906](https://github.com/HKUDS/nanobot/pull/3906) | feat(webui): upgrade settings and sidebar controls | UX improvements |
| [#3854](https://github.com/HKUDS/nanobot/pull/3854) | feat(webui): expose peer roster via bootstrap endpoint | Suporte a multi-instance |
| [#3891](https://github.com/HKUDS/nanobot/pull/3891) | feat(webui): add bootstrap_allow_from for remote Docker deployments | Deploy flexível |
| [#3621](https://github.com/HKUDS/nanobot/pull/3621) | feat: production-ready multi-role agent squad deployment for HF Spaces | ⭐ Funcionalidade estratégica multi-agent |
| [#2773](https://github.com/HKUDS/nanobot/pull/2773) | Update pyproject.toml | Correção de packaging para SDK Python |

### PRs Abertos (13 itens em destaque)

| PR | Título | Status |
|----|--------|--------|
| [#3919](https://github.com/HKUDS/nanobot/pull/3919) | Apply fix for restrictToWorkspace bug in shell tool | Bug fix pendente |
| [#3917](https://github.com/HKUDS/nanobot/pull/3917) | feat(providers): add APIFree support | Pronto para merge |
| [#3852](https://github.com/HKUDS/nanobot/pull/3852) | feat(signal): add Signal channel support | ⭐ Nova integração de canal |
| [#3913](https://github.com/HKUDS/nanobot/pull/3913) | Nanobot Legion — multi-agent integration showcase | Demo multi-agent |
| [#3869](https://github.com/HKUDS/nanobot/pull/3869) | fix(providers): DeepSeek message hardening | ⚠️ Importante para estabilidade |
| [#3735](https://github.com/HKUDS/nanobot/pull/3735) | feat(command): add /insights for historical token usage tracking | Feature request de usuário |
| [#3908](https://github.com/HKUDS/nanobot/pull/3908) | feat(ws): emit peers_update event from NANOBOT_PEER_* env vars | Suporte multi-agent |

---

## 4. 🔥 Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários + reações)

| Issue | Título | Comentários | Reações | Tema |
|-------|--------|:-----------:|:-------:|------|
| [#193](https://github.com/HKUDS/nanobot/issues/193) | Ollama api support? | 14 | 0 | 📌 Feature request recorrente |
| [#3790](https://github.com/HKUDS/nanobot/issues/3790) | WebUI会话-打印内容显示错乱 | 14 | 0 | Bug de UI |
| [#2463](https://github.com/HKUDS/nanobot/issues/2463) | Architectural issue: nanobot does not preserve the exact prompt prefix | 11 | 0 | 🔴 Problema arquitetural |
| [#1692](https://github.com/HKUDS/nanobot/issues/1692) | The telegram bot answers twice | 9 | 👍 4 | Bug de duplicação |
| [#74](https://github.com/HKUDS/nanobot/issues/74) | Telegram messages problem | 9 | 👍 2 | Integração Telegram |
| [#2638](https://github.com/HKUDS/nanobot/issues/2638) | Session history grows unbounded | 7 | 👍 2 | 🔴 Estabilidade |
| [#3863](https://github.com/HKUDS/nanobot/issues/3863) | 微信不能Login | 6 | 0 | Bug WeChat |

### Análise de Demandas

**1. Suporte a Provedores Alternativos (Alta Prioridade)**
O issue #193 (Ollama API support) com 14 comentários demonstra demanda recorrente por opções locais/alternativas de inference. A resposta da comunidade foram os PRs #3916, #3917 adicionando Skywork e APIFree.

**2. Problema Arquitetural de Persistência de Prompt (#2463)**
Este issue de "arquitetura" com 11 comentários indica uma limitação fundamental: o NanoBot não preserva o prompt prefix exato que foi enviado ao modelo. Isso conflita com integrações como OpenAI Pro. Requer atenção dos mantenedores.

**3. Integração com Canais (Telegram, WeChat, Signal)**
Problemas com Telegram (#1692, #74) e WeChat (#3863) sugerem área de fragilidade. O PR #3852 adicionando Signal demonstra priorização de expansão de canais.

---

## 5. 🐛 Bugs e Estabilidade

### Bugs Reportados (Por Severidade)

#### 🔴 Alta Severidade

| Issue | Título | Status | Descrição |
|-------|--------|--------|-----------|
| [#2463](https://github.com/HKUDS/nanobot/issues/2463) | Prompt prefix não preservado | ABERTO | Conflito arquitetural com APIs que dependem de prompt exato |
| [#2638](https://github.com/HKUDS/nanobot/issues/2638) | Session history grows unbounded | FECHADO | Crescimento irrestrito causa Agent unresponsive |
| [#3029](https://github.com/HKUDS/nanobot/issues/3029) | Session bloat causes bot to stop responding | FECHADO | Exaustão de contexto → falha silenciosa |

#### 🟡 Média Severidade

| Issue | Título | Status | Descrição |
|-------|--------|--------|-----------|
| [#3790](https://github.com/HKUDS/nanobot/issues/3790) | WebUI会话内容显示错乱 | ABERTO | Display corruption requer refresh |
| [#3907](https://github.com/HKUDS/nanobot/issues/3907) | Page rendering issue on reasoning | ABERTO | Cada palavra em nova linha no reasoning mode |
| [#3863](https://github.com/HKUDS/nanobot/issues/3863) | 微信不能Login | FECHADO | "微信版本较低" error |
| [#3901](https://github.com/HKUDS/nanobot/issues/3901) | Unable to setup a simple X checking job | FECHADO | Loop infinito com tool calls |
| [#3857](https://github.com/HKUDS/nanobot/issues/3857) | bootstrap failed: HTTP 500 | FECHADO | Gateway retorna 500 no bootstrap |

### Padrões Identificados

1. **Instabilidade de Canais**: Telegram e WeChat apresentam problemas recorrentes de conectividade/resposta
2. **Memória/Sessão**: Problemas de growth unbounded são crônicos (#2638, #3029, #2604)
3. **WebUI**: Bugs de rendering aparecem em diferentes contextos (session print, reasoning)

---

## 6. ✨ Pedidos de Features e Sinais de Roadmap

### Novas Funcionalidades Solicitadas

| Issue | Título | Tipo | Potencial Impacto |
|-------|--------|------|-------------------|
| [#193](https://github.com/HKUDS/nanobot/issues/193) | Ollama api support? | Feature | ⭐ Alta demanda da comunidade |
| [#3846](https://github.com/HKUDS/nanobot/issues/3846) | Keep skill content in multi-turn conversations | Enhancement | Melhora UX com skills |
| [#3888](https://github.com/HKUDS/nanobot/issues/3888) | Mnemon — persistent memory integration | Feature | ⭐ Resolvedor de dor recorrente |
| [#2604](https://github.com/HKUDS/nanobot/issues/2604) | Memory consolidation async/proactive GC | Enhancement | Performance crítica |
| [#2845](https://github.com/HKUDS/nanobot/issues/2845) | Native MPP (Machine Payments Protocol) tool | Feature | Caso de uso inovador |
| [#3322](https://github.com/HKUDS/nanobot/issues/3322) | Human takeover: /bot on/off commands | Enhancement | Controle de usuário |
| [#3735](https://github.com/HKUDS/nanobot/pull/3735) | /insights for token usage tracking | Feature | ⭐ Já em PR aberto |

### Sinais de Roadmap

1. **Multi-Agent/Squad**: PRs #3913 e #3621 indicam direção clara para orchestration multi-agent
2. **Expansão de Providers**: Skywork, APIFree, StepFun integrados recentemente
3. **Persistent Memory**: Integração Mnemon (#3888) resolvendo "dolor de cabeza" de sessão
4. **Performance**: Otimização de cold start (#3918) e memory consolidation async (#2604)
5. **Canal Signal**: PR #3852 expandindo canais de comunicação

---

## 7. 📝 Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Dor | Frequência | Cenário |
|-----|:----------:|---------|
| **Agent "esquecendo" contexto entre sessões** | Alta | Mnemon integration (#3888) surgiu como resposta |
| **Sessão ficar irrestrita até parar de responder** | Alta | Usuários experienciam falha silenciosa |
| **Respostas duplicadas no Telegram** | Média | Bug visual + funcional (#1692) |
| **Cannot login via WeChat** | Média | Blocked por versionamento |
| **Dificuldade com providers locais (Ollama)** | Média | Issue #193 com 14 comentários |
| **Docker deployment 복잡** | Média | SSH, bootstrap, remote access issues |

### Cenários de Uso Reportados

- **Multi-turn conversations com skills**: Usuários esperam que skill definitions persistam entre turns (#3846)
- **X (Twitter) checking jobs**: Agentes precisam executar cron jobs de monitoramento (#3901)
- **MCP tools discovery**: Alterações em MCP servers não são refletidas (#2325, #1552)
- **Feishu voice messages**: Falha em download de audio (#1607)

### Satisfação/Insatisfação

**Positivo:**
- "Thank you for this project, it's been a lot of fun playing around with it" — #877
- Mnemon integration praised como "lightweight CLI that gives..."

**Negativo:**
- Críticas sobre "too many questions" e incapacidade do agente (#877)
- SSH connections falham após docker compose run (#1826)
- NPM dependencies causing Docker build hangs (#87)

---

## 8. 📋 Backlog que Merece Atenção

### Issues Sem Resposta ou Abertas há Muito Tempo

| Issue | Título | Criado | Comentários | Prioridade |
|-------|--------|--------|:-----------:|:----------:|
| [#193](https://github.com/HKUDS/nanobot/issues/193) | Ollama api support? | 2026-02-06 | 14 | 🔴 Alta |
| [#74](https://github.com/HKUDS/nanobot/issues/74) | Telegram messages problem | 2026-02-04 | 9 | 🟡 Média |
| [#877](https://github.com/HKUDS/nanobot/issues/877) | Feedback: too many questions | 2026-02-20 | 2 | 🟡 Média |
| [#2325](https://github.com/HKUDS/nanobot/issues/2325) | MCP tools not discovered after update | 2026-03-21 | 3 | 🟡 Média |

### Issues Arquiteturais Pendentes

| Issue | Título | Impacto |
|-------|--------|---------|
| [#2463](https://github.com/HKUDS/nanobot/issues/2463) | Prompt prefix preservation | Afeta integrações com APIs que dependem de prompt exato |
| [#2604](https://github.com/HKUDS/nanobot/issues/2604) | Async memory consolidation | Performance e responsividade do agent |
| [#3846](https://github.com/HKUDS/nanobot/issues/3846) | Skill content in

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-05-20

## 1. Panorama do Dia

O ecossistema Hermes Agent manteve **alta atividade** em 19 de maio, com 50 issues e 50 PRs atualizados nas últimas 24 horas. A proporção de issues abertas (78%) versus fechadas (22%) indica um volume significativo de reports novos sendo triados, com 9 PRs já merged/fechados demonstrando progresso concreto na base de código. O projeto segue em ritmo intenso de desenvolvimento, com concentração de atividade nos componentes `comp/gateway`, `comp/agent`, `comp/cli` e integrações de plataforma (WhatsApp, Docker, Terminal). **Não houve releases formais**, sinalizando que a equipe可能在 preparar uma próxima versão. A comunidade demonstra forte engajamento, especialmente em features de observabilidade (TokenTelemetry), temporalidade do agente e correções de estabilidade para Windows.

---

## 2. Lançamentos

### 🚫 Nenhuma release registrada nas últimas 24h

O projeto não publicou novas versões entre 2026-05-19 e 2026-05-20. A versão estável mais recente permanece **v0.14.0** (tag `v2026.5.16`). Dado o volume de PRs em progresso e issues críticas abertas (especialmente bugs P1/P2), é provável que uma release corretiva esteja em preparação.

> **Nota:** Recomenda-se monitorar o repositório para announcements de release.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados (9 total nas últimas 24h)

| PR | Título | Impacto | Link |
|----|--------|---------|------|
| **#28928** | `fix(send_message): offload blocking SMTP calls to asyncio.to_thread` | **Crítico** — Resolve deadlock no event loop causado por `smtplib` síncrono em contexto async, afetando吞吐量 do gateway em servidores SMTP lentos | [#28928](https://github.com/NousResearch/hermes-agent/pull/28928) |
| **#28925** | `Remove priority code from busy queue` | Refatoração — Remove código P0/P1/P2 custom não upstream, simplificando `busy_queue.py` | [#28925](https://github.com/NousResearch/hermes-agent/pull/28925) |
| **#26487** | `[Bug]: [Severe] Windows gateway install may spawn repeated console windows` | **Closed (resolved)** — Mitigação para problema de usabilidade severo no Windows onde `hermes gateway install` podia tornar o desktop inutilizável | [#26487](https://github.com/NousResearch/hermes-agent/issues/26487) |
| **#11195** | `Add Codex as an image generation backend` | **Closed (merged)** — Fecha gap de integração para usuários Codex que precisavam de geração de imagens via mesmo sistema de autenticação | [#11195](https://github.com/NousResearch/hermes-agent/issues/11195) |
| **#28836** | `ACP Neovim Integration: Add first-class support for agentic.nvim` | **Closed (merged)** — Melhora história de integração Neovim, tornando `hermes acp` compatível com cliente maduro | [#28836](https://github.com/NousResearch/hermes-agent/issues/28836) |
| **#9283** | `[Bug]: hermes auth add openai-codex skips auth.json import` | **Closed** — Corrigido problema onde importação de credenciais Codex existentes era ignorada | [#9283](https://github.com/NousResearch/hermes-agent/issues/9283) |
| **#13473** | `tracking: provider transport refactor (agent/transports/)` | **Closed (cycle 1)** — Extrai conversão de formato e normalização de response para `agent/transports/`, preparando infraestrutura para novos providers | [#13473](https://github.com/NousResearch/hermes-agent/issues/13473) |
| **#28920** | `[Bug]: Windows: All tools fail with multiple values for keyword argument 'creationflags'` | **Open (não merged)** — Bug P1 crítico; todo subprocess em Windows 0.14.0 está quebrado | [#28920](https://github.com/NousResearch/hermes-agent/issues/28920) |

### Análise do Progresso

O merge de **#28928** é particularmente relevante: resolve um problema de concurrency que afetava performances reais em integrações de email. A refatoração de **#28925** indica movimento para convergência com upstream. O ciclo de transport refactor (**#13473**) demonstra investimento em arquitetura de longo prazo para providers.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários + reações)

| Issue | Título | Comentários | 👍 | Categoria | Link |
|-------|--------|:-----------:|:--:|-----------|------|
| **#18482** | `[Bug]: Cannot create home directory: Permission denied` | 5 | 0 | Docker/Permissão | [#18482](https://github.com/NousResearch/hermes-agent/issues/18482) |
| **#26696** | `[Feature]: TokenTelemetry Plugin for Integration into Hermes Dashboard` | 4 | 0 | Analytics/Plugins | [#26696](https://github.com/NousResearch/hermes-agent/issues/26696) |
| **#10421** | `Turn-level live time context for current date/time awareness` | 4 | 3 | Agent/UX | [#10421](https://github.com/NousResearch/hermes-agent/issues/10421) |
| **#12325** | `Notes + recorded-conversation ingestion (Obsidian/Apple Notes + Omi/Limitless/Friend/Plaud)` | 2 | 0 | Memory/Integration | [#12325](https://github.com/NousResearch/hermes-agent/issues/12325) |
| **#24029** | `Auxiliary tasks silently fall back to paid OpenRouter models` | 2 | 1 | Billing/Cost | [#24029](https://github.com/NousResearch/hermes-agent/issues/24029) |

### Análise dos Temas

**1. Observabilidade e Analytics (#26696, #28858)**  
A comunidade demonstra demanda forte por visibilidade consolidada de token usageacross múltiplos agentes. A issue #26696 propõe TokenTelemetry como feature nativa, enquanto #28858 já apresenta um plugin community com 6 deep-link cards para Hermes Dashboard. Este é um **sinal claro de roadmap**: analytics multi-agente deve entrar no roadmap oficial.

**2. Temporalidade do Agente (#10421, #28290, #27742)**  
Três issues separadas pedindo a mesma coisa por caminhos diferentes: agent awareness temporal. #10421 pede "live time context" turn-level, #28290 discute "temporal context markers para intra-session", e #27742 reporta "agente lacks internal clock". Este é um **tema recorrente** com 4+ comentários somados — forte candidato para feature próxima.

**3. Memória e Ingestão de Dados (#12325)**  
Proposta ambiciosa para sincronizar notas (Obsidian, Apple Notes) e conversas gravadas (Omi, Limitless, Friend, Plaud) com a memory layer do Hermes. Indica que usuários estão usando Hermes como **sistema de segundo cérebro** — demanda estratégica.

**4. Custos e Billing (#24029)**  
Bug sério: tasks auxiliares (title_generation, compression, vision) silenciosamente usam modelos pagos mesmo quando usuário configurou `fallback_providers` free-only. Impacta diretamente custo de uso — **prioridade operacional**.

---

## 5. Bugs e Estabilidade

### Bugs Críticos (P1) — Requerem Atenção Imediata

| Issue | Título | Componente | Impacto | Link |
|-------|--------|------------|---------|------|
| **#28920** | `[Bug]: Windows: All tools fail with multiple values for keyword argument 'creationflags'` | comp/tools, Windows | **0.14.0 completamente não-funcional no Windows** — todo subprocess crash | [#28920](https://github.com/NousResearch/hermes-agent/issues/28920) |
| **#28902** | `OAuth Anthropic Max: <available_skills> system-prompt injection triggers "out of extra usage" 400` | comp/agent, Anthropic | Usuários Max com skills ativos recebem 400 e não conseguem usar agent | [#28902](https://github.com/NousResearch/hermes-agent/issues/28902) |
| **#28849** | `OAuth Anthropic + Pro/Max: mcp_ tool-name prefix triggers 400` | comp/agent, Anthropic | Relacionado a #28902 — tool-bearing requests falham com Pro/Max OAuth | [#28849](https://github.com/NousResearch/hermes-agent/issues/28849) |

### Bugs de Alta Prioridade (P2)

| Issue | Título | Componente | Link |
|-------|--------|------------|------|
| **#28863** | `terminal.docker_extra_args from config.yaml silently dropped` | comp/gateway, Docker | [#28863](https://github.com/NousResearch/hermes-agent/issues/28863) |
| **#28823** | `WhatsApp: quotedMessageId/context not forwarded to agent` | comp/gateway, WhatsApp | [#28823](https://github.com/NousResearch/hermes-agent/issues/28823) |
| **#26487** | `[Severe] Windows gateway install spawns repeated console windows` | comp/gateway, Windows | [#26487](https://github.com/NousResearch/hermes-agent/issues/26487) |
| **#18482** | `Cannot create home directory: Permission denied (Docker)` | area/docker | [#18482](https://github.com/NousResearch/hermes-agent/issues/18482) |
| **#24029** | `Auxiliary tasks silently fall back to paid OpenRouter models` | comp/agent, OpenRouter | [#24029](https://github.com/NousResearch/hermes-agent/issues/24029) |
| **#28886** | `Gateway /model picker does not fetch dynamic Portal API recommendations` | comp/gateway, Nous | [#28886](https://github.com/NousResearch/hermes-agent/issues/28886) |
| **#28876** | `System prompt blocking markdown on API` | comp/agent, API | [#28876](https://github.com/NousResearch/hermes-agent/issues/28876) |

### Padrões de Bugs Identificados

1. **Windows (3 issues P1/P2)** — O componente Windows apresenta regressões significativas em 0.14.0: subprocess handling quebrado e problemas de gateway. **Alta prioridade de manutenção**.

2. **OAuth Anthropic (2 issues P1)** — Integração com Claude Code OAuth Max/Pro tem problemas de billing triggers. PR #28929 já em aberto como fix.

3. **Docker (2 issues)** — Problemas de permission denied e docker_extra_args indicam gaps no path resolution para containers.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features com Alto Potencial

| Issue | Título | Componente | 👍 | Link |
|-------|--------|------------|:--:|------|
| **#26696** | `TokenTelemetry Plugin for Integration into Hermes Dashboard` | comp/plugins | 0 | [#26696](https://github.com/NousResearch/hermes-agent/issues/26696) |
| **#10421** | `Turn-level live time context for current date/time awareness` | comp/agent | 3 | [#10421](https://github.com/NousResearch/hermes-agent/issues/10421) |
| **#12325** | `Notes + recorded-conversation ingestion` | innovation | 0 | [#12325](https://github.com/NousResearch/hermes-agent/issues/12325) |
| **#27723** | `Add support for SerpApi as a web search tool` | comp/plugins, tool/web | 0 | [#27723](https://github.com/NousResearch/hermes-agent/issues/27723) |
| **#28858** | `Plugin: TokenTelemetry launcher for Hermes Dashboard (v0.1.0)` | comp/plugins | 0 | [#28858](https://github.com/NousResearch/hermes-agent/issues/28858) |
| **#28483** | `Marketing Agent Factory MVP` | comp/plugins | 0 | [#28483](https://github.com/NousResearch/hermes-agent/pull/28483) |
| **#28927** | `Add read-only Kubernetes diagnostics plugin` | comp/plugins | 0 | [#28927](https://github.com/NousResearch/hermes-agent/pull/28927) |

### Sinais de Roadmap

1. **Plugin Ecosystem em Expansão**: 4+ plugins submetidos nas últimas 24h (Kubernetes, Marketing Factory, TokenTelemetry, ElevenLabs Scribe). O modelo de plugins está ganhando tração.

2. **Multi-Provider Web Search**: SerpApi solicitado como provider adicional além de Exa/Tavily existentes. Indica necessidade de flexibilidade de search.

3. **Observabilidade Enterprise**: TokenTelemetry demonstra demanda por features de billing/custo em ambientes multi-agente.

4. **Temporal/Aware Agent**: A confluência de 3 issues pedindo time awareness indica **decisão de design iminente** — implementar clock interno vs. tool-based solution.

5. **Webhook Genérico (#28913)**: currently webhooks são GitHub-specific; generic webhook support expandiría integrações.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Categoria | Feedback | Impacto | Link |
|-----------|----------|---------|------|
| **Estabilidade Windows** | "Hermes Agent 0.14.0 is completely non-functional on Windows. Every tool that invokes subprocess execution crashes" | **Crítico** — Usuários Windows não conseguem usar o agent | [#28920](https://github.com/NousResearch/hermes-agent/issues/28920) |
| **Custo Não-Esperado** | "Users who explicitly configure only OpenRouter :free models... still get billed because auxiliary tasks silently fall back to a hardcoded paid model" | **Financeiro** — Surpresa em billing | [#24029](https://github.com/NousResearch/hermes-agent/issues/24029) |
| **Docker UX** | "Just trying to start minimal viable container with custom HOME but get an error" | **Adoção** — Friction em container setup | [#18482](https://github.com/NousResearch/hermes-agent/issues/18482) |
| **WhatsApp Context** | "When a user replies (quotes) a specific message in WhatsApp... the metadata never reaches the agent's prompt" | **UX** — Perda de contexto conversacional | [#28823](https://github.com/NousResearch/hermes-agent/issues/28823) |
| **Billing xAI** | "xAI OAuth returns HTTP 403 for standard SuperGrok subscribers — backend enforcing Heavy-only despite docs" | **Documentação vs. Realidade** | [#26847](https://github.com/NousResearch/hermes-agent/issues/26847) |

### Cenários de Uso Emergentes

1. **Agente como Dashboard/Analytics Hub**: Usuários querem visibilidade cross-agent de tokens e custos (#26696, #28858)
2. **Memória de Longo Prazo**: Integração com Obsidian, notas, wearables de gravação (#12325) — sinaliza uso como "second brain"
3. **Operações K8s**: Plugins Kubernetes demonstram uso em ambientes de produção cloud-native (#28927)
4. **Marketing/Conteúdo**: Marketing Agent Factory indica adoção para workflows de conteúdo automatizado (#28483)

### Satisfação/Insatisfação

**Pontos Positivos:**
- Comunidade ativa com múltiplas contribuições de plugins
- Modelo de provider flexível (suporte a múltiplos STT, web search, image gen)
- Suporte a Neovim via ACP maturing (#28836 merged)

**Pontos de Atenção:**
- Windows support em regressão (2+ bugs P2)
- Documentação desatualizada vs. features reais (xAI tier, Codex image gen)
- Billing transparency issues com fallback providers

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Inativas (Por Avaliação de Prioridade)

| Issue | Título | Idade | Status | Prioridade | Link |
|-------|--------|-------|--------|:----------:|------|
| **#10421** | `Turn-level live time context for current date/time awareness` | ~35 dias | Open | P3 | [#10421](https://github.com/NousResearch/hermes-agent/issues/10421) |
| **#12325** | `Notes + recorded-conversation ingestion` | ~31 dias | Open | Innovation | [#12325](https://github.com/NousResearch/hermes-agent/issues/12325) |
| **#27742** | `Agent lacks internal clock — no autonomous time awareness` | ~2 dias | Open | P3 | [#27742](https://github.com/NousResearch/hermes-agent/issues/27742) |
| **#28290** | `feat: inject temporal context markers for intra-session time awareness` | <1 dia | Open | P3 | [#28290](https://github.com/NousResearch/hermes-agent/issues/28290) |
| **#26847** | `xAI OAuth returns HTTP 403 for standard SuperGrok subscribers` | ~4 dias | Open | P3 | [#26847](https://github.com/NousResearch/hermes-agent/issues/26847) |
| **#27723** | `Add support for SerpApi as a web search tool` | ~2 dias | Open | P3 | [#27723](https://github.com/NousResearch/hermes-agent/issues/27723) |
| **#28913** | `Support for generic webhooks` | <1 dia | Open | P3 | [#28913](https://github.com/NousResearch/hermes-agent/issues/28913) |

### Análise do Backlog

**Temporal Time Awareness (#10421, #27742, #28290)**  
Três issues relacionadas ao mesmo tema. #10421 está aberta há 35 dias sem resolução clara. **Recomendação**: Tri

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

⚠️ Falha ao gerar o resumo.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório de Projeto — IronClaw
**Data:** 2026-05-20 | **Período:** Últimas 24h

---

## 1. Panorama do Dia

O IronClaw apresenta **alta atividade de desenvolvimento** no período analisado, com 50 PRs atualizados e 14 issues em movimento. A equipe está intensamente focada na **arquitetura Reborn** (o loop de agente de próxima geração), com múltiplas entregas de refatoração, testes de integração binária e composições de serviço. Houve um **release interno** (ironclaw 0.28.2 / ironclaw_common 0.5.0) via bot, porém **nenhuma release oficial publicada no crates.io**, gerando uma lacuna entre as tags GitHub e a versão distribuída. O **Nightly E2E falhou**, sinalizando necessidade de atenção à estabilidade. O ecossistema mostra maturidade em componentes como WebUI v2, tool registry e capability providers, mas ainda há dívida técnica significativa em fronteiras de crates e testes de regressão.

---

## 2. Lançamentos

**⚠️ Release interno detectado, mas não publicado no crates.io**

| Crate | De | Para | Status |
|-------|-----|------|--------|
| `ironclaw_common` | 0.4.2 | **0.5.0** | ⚠️ Breaking changes |
| `ironclaw` | 0.24.0 | **0.28.2** | ⚠️ Não distribuído |

### Breaking Changes — ironclaw_common 0.5.0
```
--- failure enum_no_repr_variant_discriminant_changed: enum variant had its discriminant change value ---
```
**Ação requerida:** Consumidores do `ironclaw_common` devem revisar usages dos enums afetados antes de atualizar.

### Problema de Distribuição
O release #[3708](https://github.com/nearai/ironclaw/pull/3708) foi criado pelo bot em 2026-05-16, mas crates.io ainda expõe **0.24.0** como máxima versão. Issue [#3259](https://github.com/nearai/ironclaw/issues/3259) reporta que consumidores downstream estão **bloqueados em 0.24.0** devido a CVEs do wasmtime 28.x.

> **Recomendação:** Priorizar publicação das versões 0.25.0–0.27.0 e 0.28.2 no crates.io para mitigar exposição a CVEs.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados (10 fechou, 1 release)

| PR | Escopo | Tamanho | Impacto |
|----|--------|---------|---------|
| [#3797](https://github.com/nearai/ironclaw/pull/3797) | `reborn` REPL tools → live adapters | XL | ✅ Fiação completa de ferramentas REPL via adaptadores de runtime |
| [#3792](https://github.com/nearai/ironclaw/pull/3792) | `reborn` REPL LLM auth | XL | ✅ Resolução LLM movida para composition; `ResolvedRebornLlm` adicionado |
| [#3739](https://github.com/nearai/ironclaw/pull/3739) | Extract embeddings crate | XL | ✅ `ironclaw_embeddings` crate criado; providers OpenAI/NearAI/Ollama/Bedrock extraídos |
| [#3790](https://github.com/nearai/ironclaw/pull/3790) | Hot capability catalog publication | L | ✅ Publicação dinâmica de catálogos para Extension Manifest v2 |
| [#3787](https://github.com/nearai/ironclaw/pull/3787) | Register default host API contracts | M | ✅ Registry de contratos padrão em composition |
| [#3788](https://github.com/nearai/ironclaw/pull/3788) | Wire default HostPortCatalog | S | ✅ `HOST_RUNTIME_HTTP_EGRESS_PORT_ID` adicionado ao vocabulário |
| [#3794](https://github.com/nearai/ironclaw/pull/3794) | Extension v2 lifecycle E2E | XS | ✅ Cobertura end-to-end para lifecycle de extensões |
| [#3795](https://github.com/nearai/ironclaw/pull/3795) | Tighten legacy extension manifests | S | ✅ Rejeição de third-party legacy manifests em produção |
| [#3791](https://github.com/nearai/ironclaw/pull/3791) | Runtime fixtures → host API manifests | XS | ✅ Conversão de fixtures para formato v2 |
| [#3786](https://github.com/nearai/ironclaw/pull/3786) | Test: approval cancellation parity | XS | ✅ Cobertura de cancelamento de aprovação via `TurnCoordinator::cancel_run` |
| [#3767](https://github.com/nearai/ironclaw/pull/3767) | NoExposureGuard service | L | ✅ Wrapper para `LeakDetector` com checks de texto/JSON/HTTP |

**Destaque:** A extração do crate de embeddings ([#3739](https://github.com/nearai/ironclaw/pull/3739)) representa uma melhoria significativa de **separação de responsabilidades**, enquanto a fiação REPL ([#3797](https://github.com/nearai/ironclaw/pull/3797), [#3792](https://github.com/nearai/ironclaw/pull/3792)) avança a integração Reborn no runtime.

---

## 4. Temas Quentes da Comunidade

### Issues com Mais Comentários

| Issue | Comentários | Título | Sentimento |
|-------|-------------|--------|------------|
| [#3259](https://github.com/nearai/ironclaw/issues/3259) | 6 | Publish 0.25.0–0.27.0 to crates.io | 🔴 Frustração (downstream afetado) |
| [#3702](https://github.com/nearai/ironclaw/issues/3702) | 4 | Reborn: revise and implement binary-E2E test framework plan | 🟡 Planejamento ativo |
| [#3094](https://github.com/nearai/ironclaw/issues/3094) | 1 | Add approval/auth interaction services | 🟢 Alinhado a roadmap |
| [#3607](https://github.com/nearai/ironclaw/issues/3607) | 1 | Reborn WebUI Beta tracker | 🟢 Em progresso |
| [#3748](https://github.com/nearai/ironclaw/issues/3748) | 1 | Refactor Reborn production builders | 🟢 Refatoração em curso |

### Análise de Demandas

**Publicação crates.io (#3259)** é a issue com maior engajamento (6 comentários), refletindo **dores reais de consumidores externos** que não conseguem acessar funcionalidades já disponíveis em tags GitHub. A lacuna de ~3 semanas entre releases GitHub e crates.io precisa ser resolvida urgentemente.

**Framework de testes E2E binário (#3702)** mostra que a equipe está investindo em **qualidade e regressão**, categorizando 88 arquivos de teste e classificando 29 core files. Este é um indicador saudável de maturidade.

**Arquitetura Reborn domina** as issues ativas: approval/auth services (#3094), subagent spawn design (#3798), tenant-scoped ACLs (#3796), e crate boundary audit (#3773) indicam que o projeto está em **fase de estabilização de uma nova arquitetura**.

---

## 5. Bugs e Estabilidade

### 🔴 Falha de CI/CD

**Issue:** [#3447](https://github.com/nearai/ironclaw/issues/3447) — **Nightly E2E failed**
- **Status:** Aberta desde 2026-05-19
- **Severidade:** Alta (impacta validação de regressão)
- **Detalhes:** Workflow "Nightly E2E" falhou no job `E2E (v2-engine)` no commit `8a12959afa333de6e87cb1a32131e7d51a0bf24a`
- **Run:** https://github.com/nearai/ironclaw/actions/runs/26076140461

> ⚠️ **Recomendação:** Investigar root cause antes do próximo nightly. Falhas recorrentes de E2E podem indicar regressões não detectadas em produção.

### 🟡 Issues de UX/Configuração

| Issue | Severidade | Problema |
|-------|------------|----------|
| [#3771](https://github.com/nearai/ironclaw/issues/3771) | P1 | Configure UI não expõe login/auth para Gemini CLI e OpenAI Codex |
| [#3762](https://github.com/nearai/ironclaw/issues/3762) | P1 | Editing `AGENTS.md` não atualiza system prompt em conversas ativas |

### 🟢 Dívida Técnica

| Issue | Severidade | Problema |
|-------|------------|----------|
| [#3434](https://github.com/nearai/ironclaw/issues/3434) | P0 | `LoopContextBundle` sem `instruction_snippets`/`memory_snippets` — **Closed** ✅ |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Novas Identificadas

| Issue | Escopo | Prioridade | Descrição |
|-------|--------|------------|-----------|
| [#3798](https://github.com/nearai/ironclaw/issues/3798) | `reborn` | Design | **Subagent spawn** para Reborn agent loop — design doc + 3 fases de implementação |
| [#3796](https://github.com/nearai/ironclaw/issues/3796) | `reborn` | Alta | **Tenant-scoped groups e project ACLs** — projetos compartilháveis entre usuários |
| [#3773](https://github.com/nearai/ironclaw/issues/3773) | `reborn` | Epic | **Crate boundary & ownership audit** — 47 crates em análise ([doc](https://github.com/nearai/ironclaw/blob/audit/crate-boundaries/docs/audits/2026-05-18-crate-boundary-audit.md)) |
| [#3748](https://github.com/nearai/ironclaw/issues/3748) | `reborn` | Refatoração | **Factory routing** para production builders |
| [#3763](https://github.com/nearai/ironclaw/issues/3763) | `customer` | P2 | **Per-user/per-tenant tool enable/disable** via UI |
| [#3548](https://github.com/nearai/ironclaw/pull/3548) | security | P0 | **`DISABLE_TOOLS_LIST`** flag — segurança em produção |

### Sinais de Roadmap

1. **WebUI v2 em beta ativo** ([#3607](https://github.com/nearai/ironclaw/issues/3607), [#3747](https://github.com/nearai/ironclaw/pull/3747)) — Roteamento HTTP via `RebornServicesApi`
2. **Separação de crates** em andamento — `ironclaw_embeddings` extraído, mais extrações planejadas
3. **Sistema de permissões multi-tenant** em desenvolvimento

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Dor | Evidência | Severidade |
|-----|-----------|------------|
| **Lacuna de releases no crates.io** | Issue #3259 com 6 comentários de consumidores afetados | 🔴 Crítica |
| **UI de configuração incompleta** | Gemini CLI/OpenAI Codex não expõem auth | 🟡 Alta |
| **AGENTS.md não atualiza prompts** | Usuários esperam atualização em tempo real | 🟡 Alta |
| **Ferramentas não habilitáveis por tenant** | Deploys custom precisam restart | 🟢 Média |

### Cenários de Uso Emergent

1. **Multi-tenant com ACLs por projeto** — necessidade de compartilhar projetos entre usuários com permissões granulares
2. **Providers não-API-key** — Gemini CLI requer fluxo de autenticação diferente (local OAuth)
3. **Ferramentas desabilitáveis em produção** — compliance e segurança em ambientes enterprise

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Estagnadas

| Issue | Idade | Status | Prioridade | Ação Recomendada |
|-------|-------|--------|------------|------------------|
| [#3094](https://github.com/nearai/ironclaw/issues/3094) | 21 dias | Aberta, 1 comentário | P0 | Revisar e priorizar — approval/auth é bloqueador |
| [#3607](https://github.com/nearai/ironclaw/issues/3607) | 6 dias | Aberta, 1 comentário | P1 | Coordenar com PR #3747 |
| [#3726](https://github.com/nearai/ironclaw/issues/3726) | 3 dias | Aberta, 0 comentários | Refatoração | Acompanhar — impacto em API pública |
| [#3763](https://github.com/nearai/ironclaw/issues/3763) | 2 dias | Aberta, 0 comentários | P2 | Considerar para v0.29 |
| [#3762](https://github.com/nearai/ironclaw/issues/3762) | 2 dias | Aberta, 0 comentários | P1 | Priorizar — UX crítico |

### PRs Abertos de Alto Impacto

| PR | Tamanho | Escopo | Status |
|----|---------|--------|--------|
| [#3747](https://github.com/nearai/ironclaw/pull/3747) | XL | `webui_v2` | Em revisão |
| [#3738](https://github.com/nearai/ironclaw/pull/3738) | XL | `traces` | Em revisão |
| [#3548](https://github.com/nearai/ironclaw/pull/3548) | XL | Security | Em revisão |

---

## Indicadores de Saúde do Projeto

| Indicador | Valor | Status |
|-----------|-------|--------|
| **Atividade de PRs** | 50/24h | ✅ Muito alta |
| **Taxa de merge** | 10 PRs fechados/24h | ✅ Saudável |
| **Issues abertas** | 13 ativas | 🟡 Moderado |
| **Release cadence** | Lacuna de 3+ semanas | 🔴 Problema |
| **Testes E2E** | Falha no nightly | 🔴 Crítico |
| **Dívida técnica** | Audit de crates em andamento | 🟡 Em tratamento |

---

*Relatório gerado automaticamente com base em dados GitHub de 2026-05-20. Todas as métricas referem-se ao período das últimas 24h.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do Projeto CoPaw — 2026-05-20

---

## 1. Panorama do Dia

O projeto CoPaw (QwenPaw) manteve um **alto nível de atividade** em 20 de maio de 2026, com 37 issues e 44 PRs atualizadas em 24 horas. O lançamento da versão **v1.1.8** trouxe funcionalidades aguardadas — como o sistema oficial de plugins e o companion "QwenPaw Pet" — impulsionando engajamento significativo da comunidade. A base de código demonstra maturidade com 32 PRs merged/fechadas, enquanto issues críticas (crashes do Pet plugin, bugs de cron WeChat) requerem atenção imediata. O ecossistema de plugins e a expansão para múltiplos canais (Feishu, MCP OAuth) reforçam a estratégia de plataforma aberta do projeto.

---

## 2. Lançamentos

### 🎉 v1.1.8 (Estável)

| Componente | Mudança |
|------------|---------|
| **Official Plugin Distribution** | Distribuição oficial de plugins via website + Plugin Manager com instalação em um clique ([#4482](https://github.com/agentscope-ai/QwenPaw/pull/4482)) |
| **QwenPaw Pet** | Plugin desktop companion com integração nativa |

> ⚠️ **Nota de Migração:** Usuários da Desktop App (Windows .exe / macOS .zip) devem desinstalar e reinstallar para atualizar.

### 🧪 v1.1.8-beta.2 (Beta)

| Componente | Mudança |
|------------|---------|
| **Model Performance** | Otimização de performance do modelo via `refactor(console)` ([#4502](https://github.com/agentscope-ai/QwenPaw/pull/4502)) |
| **Trace I/O** | Batch append de eventos inbox trace para reduzir I/O de arquivos ([#4493](https://github.com/agentscope-ai/QwenPaw/pull/4493)) |
| **Pet Plugin** | Suporte inicial ao QwenPaw Pet (Snowpaw) |

**Breaking Changes Identificados:**
- nenhuma breaking change explícita, mas o `/backups` retorna HTTP 403 quando acessado via localhost ([#4535](https://github.com/agentscope-ai/QwenPaw/issues/4535))

---

## 3. Progresso do Projeto

### PRs Merged/Closed Relevantes (24h)

| PR | Tipo | Impacto | Link |
|----|------|---------|------|
| #4534 | docs | Adicionado diretório de backup na documentação de instalação | [#4534](https://github.com/agentscope-ai/QwenPaw/pull/4534) |
| #4531 | chore | Atualização das notas de release v1.1.8 | [#4531](https://github.com/agentscope-ai/QwenPaw/pull/4531) |
| #4533 | docs | Suplemento descrições zh do Pet plugin para website | [#4533](https://github.com/agentscope-ai/QwenPaw/pull/4533) |
| #4527 | feat | Introdução de `QWENPAW_AUTO_INITIALIZATION` no entrypoint Docker | [#4527](https://github.com/agentscope-ai/QwenPaw/pull/4527) |
| #4529 | fix | Hotfix para configurações de modelo | [#4529](https://github.com/agentscope-ai/QwenPaw/pull/4529) |
| #4526 | feat | Novos modelos gratuitos添加到 OpenCode provider | [#4526](https://github.com/agentscope-ai/QwenPaw/pull/4526) |
| #4523 | fix | Persistência de respostas `/mission` e `/skill` na sessão | [#4523](https://github.com/agentscope-ai/QwenPaw/pull/4523) |
| #4524 | plugin | CloudPaw v0.0.2 — toolkit patching fix + i18n | [#4524](https://github.com/agentscope-ai/QwenPaw/pull/4524) |
| #4522 | fix | Correção de typo `tool_result` → `tool_results` | [#4522](https://github.com/agentscope-ai/QwenPaw/pull/4522) |
| #3875 | feat | Link para demo page no header | [#3875](https://github.com/agentscope-ai/QwenPaw/pull/3875) |

### PRs Abertas em Destaque

| PR | Tipo | Relevância | Link |
|----|------|-------------|------|
| #4537 | feat | Feishu: suporte a group session em modo compartilhado | [#4537](https://github.com/agentscope-ai/QwenPaw/pull/4537) |
| #4536 | feat | OpenCode Go como provider built-in (10 modelos) | [#4536](https://github.com/agentscope-ai/QwenPaw/pull/4536) |
| #4518 | feat | Skill Market unificado + refactoring para httpx | [#4518](https://github.com/agentscope-ai/QwenPaw/pull/4518) |
| #3813 | feat | Desktop app via Tauri 2.x | [#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) |
| #4532 | feat | OAuth 2.1 para MCP servers remotos | [#4532](https://github.com/agentscope-ai/QwenPaw/pull/4532) |
| #4530 | feat | Subagent spawning (fork pattern) | [#4530](https://github.com/agentscope-ai/QwenPaw/pull/4530) |
| #4428 | feat | Prefixo MCP tool names com client key (evita colisão) | [#4428](https://github.com/agentscope-ai/QwenPaw/pull/4428) |
| #4337 | fix | Shell: descoberta de binários locais ( Volta, fnm, nvm) | [#4337](https://github.com/agentscope-ai/QwenPaw/pull/4337) |
| #4520 | feat | Persistência de drafts de chat via localStorage | [#4520](https://github.com/agentscope-ai/QwenPaw/pull/4520) |
| #4279 | feat | Magic command `memorize` para notas de sessão | [#4279](https://github.com/agentscope-ai/QwenPaw/pull/4279) |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (Comentários)

| Issue | Tema | Comentários | Link |
|-------|------|-------------|------|
| **#4477** | Bug WeChat iLink: cron push falha por `context_token` expirado, sem retry | 11 | [#4477](https://github.com/agentscope-ai/QwenPaw/issues/4477) |
| **#4496** | Bug: AGENTS.md carrega template default em vez do arquivo do workspace | 9 | [#4496](https://github.com/agentscope-ai/QwenPaw/issues/4496) |
| **#4497** | Line breaks em Markdown tables não funcionam (`<br>` não faz quebra) | 4 | [#4497](https://github.com/agentscope-ai/QwenPaw/issues/4497) |
| **#3570** | Feature: Pagination na lista "All Chats" | 4 | [#3570](https://github.com/agentscope-ai/QwenPaw/issues/3570) |
| **#4499** | Question: Plugin marketplace e pet system Codex — roadmap? | 4 | [#4499](https://github.com/agentscope-ai/QwenPaw/issues/4499) |

### Análise de Demandas

**🔴 Crítico — WeChat iLink (#4477):**
- Usuários relatam falha frequente em cron jobs quando `context_token` expira
- Falta retry logic e logging para falhas de envio de mídia
- **Sinal:** Integração WeChat precisa de resiliência operacional

**🟡 Regressão — AGENTS.md (#4496):**
- Upgrade para 1.1.7 quebrou carregamento de arquivos customizados
- Usuários perdem configurações de workspace agents
- **Sinal:** Falta de testes de regressão em templates de sistema

**🟢 UX — Markdown Tables (#4497, #2983, #3528):**
- Problema recorrente desde abril, múltiplos reports
- Afeta formatação de tabelas em outputs do agente
- **Sinal:** Prioridade baixa mas tech debt累积

---

## 5. Bugs e Estabilidade

### 🛑 Bugs Críticos (Crash/Blocker)

| Severidade | Issue | Descrição | Link |
|------------|-------|-----------|------|
| **🔴 Crash** | #4541 / #4540 | Pet plugin causa crash do app ao enviar primeira mensagem (ConnectTimeout/PySide6) | [#4541](https://github.com/agentscope-ai/QwenPaw/issues/4541) |
| **🔴 Regression** | #4496 | AGENTS.md carrega template default após upgrade | [#4496](https://github.com/agentscope-ai/QwenPaw/issues/4496) |
| **🟠 Security** | #4470 | RCE vulnerability na interface de plugins | [#4470](https://github.com/agentscope-ai/QwenPaw/issues/4470) |

### ⚠️ Bugs de Alta Prioridade

| Issue | Descrição | Link |
|-------|-----------|------|
| #4454 | `/mission` command causa freeze completo do Console | [#4454](https://github.com/agentscope-ai/QwenPaw/issues/4454) |
| #4494 | Stream stalls com mensagem enganosa "you interrupted me" | [#4494](https://github.com/agentscope-ai/QwenPaw/issues/4494) |
| #4515 | Erro 429 causa freeze em todas as chamadas de modelo | [#4515](https://github.com/agentscope-ai/QwenPaw/issues/4515) |
| #4535 | `/backups` retorna HTTP 403 via localhost | [#4535](https://github.com/agentscope-ai/QwenPaw/issues/4535) |
| #4449 | Rate-limit 429 limpa永久 fila de mensagens (zero-downtime reload bug) | [#4449](https://github.com/agentscope-ai/QwenPaw/issues/4449) |

### 📊 Métricas de Estabilidade

| Indicador | Valor |
|-----------|-------|
| Issues abertas (24h) | 20 |
| Issues fechadas (24h) | 17 |
| Taxa de resolução | 45.9% |
| Bugs de segurança abertos | 1 (RCE plugin) |
| Bugs de crash abertos | 1 (Pet plugin) |

---

## 6. Pedidos de Features e Sinais de Roadmap

### ✨ Features Novas Solicitadas

| Feature | Descrição | Prioridade | Link |
|---------|-----------|------------|------|
| **Multimodal Router** | Auto-switch para modelo visual ao enviar imagem/vídeo/áudio | Alta | [#4539](https://github.com/agentscope-ai/QwenPaw/issues/4539) |
| **Source Tracing** | Funcionalidade de citação/fonte em outputs de conversa | Média | [#4514](https://github.com/agentscope-ai/QwenPaw/issues/4514) |
| **Pagination All Chats** | Paginação na lista de conversas (performance) | Média | [#3570](https://github.com/agentscope-ai/QwenPaw/issues/3570) |
| **Beta Channel Update** | `qwenpaw update --channel beta` | Baixa | [#4500](https://github.com/agentscope-ai/QwenPaw/issues/4500) |
| **Windows GBK Fix** | Solução sistêmica para encoding no Windows | Alta | [#4481](https://github.com/agentscope-ai/QwenPaw/issues/4481) |

### 📈 Sinais de Roadmap

| Signal | Evidência |
|--------|-----------|
| **Ecosistema de Plugins** | v1.1.8 launch + CloudPaw v0.0.2 + Pet plugin |
| **Desktop App** | PR #3813 (Tauri 2.x) em Under Review |
| **MCP Expansion** | OAuth 2.1 (#4532), prefix namespacing (#4428) |
| **Feishu Enhancement** | Group session mode (#4537), CardKit streaming (#3001) |
| **Free Models** | OpenCode Go provider (#4536), novos modelos gratuitos (#4526) |
| **Skill Market** | Refactoring httpx + marketplace unificado (#4518) |

---

## 7. Resumo de Feedback dos Usuários

### 😤 Dores Identificadas

| Dor | Frequência | Impacto |
|-----|------------|---------|
| **Upgrade perde configurações** | Múltiplos reports (#4430) | Alto — experiência de atualização dolorosa |
| **Model 429 causa freeze** | Reportado (#4515, #4449) | Crítico — quebra workflow |
| **Pet plugin crasha** | 2 reports idênticos (#4541, #4540) | Alto — funcionalidade nova quebrada |
| **Plugin tools não injetadas** | Reportado (#4485) | Médio — feature broken at scale |
| **Windows GBK encoding** | Crônico (#4481) | Médio — produtividade afetada |

### 😊 Feedback Positivo

| Aspecto | Comentário |
|---------|------------|
| **Plugin Distribution** | Sistema de marketplace aguardado pela comunidade (#4499) |
| **QwenPaw Pet** | Alta expectativa pelo desktop companion |
| **Feishu CardKit** | Usuários pedem streaming similar ao DingTalk AI Card (#3001) |
| **OpenCode Go** | Provider gratuito bem recebido (#4536) |

### 📊 Satisfação Geral

| Indicador | Status |
|-----------|--------|
| Nova release (v1.1.8) | ✅ Bem recebida |
| Bugs críticos | ⚠️ 3 em aberto (Pet crash, RCE, AGENTS.md) |
| Feature pipeline | ✅ Robusto (MCP, desktop, skill market) |
| Comunidade | ✅ Engajamento alto (11+ comentários em issues) |

---

## 8. Backlog que Merece Atenção

### ⏰ Issues sem Resposta há >7 dias

| Issue | Age | Tema | Link |
|-------|-----|------|------|
| #3570 | ~31 dias | Pagination All Chats | [#3570](https://github.com/agentscope-ai/QwenPaw/issues/3570) |
| #3001 | ~43 dias | Feishu CardKit streaming | [#3001](https://github.com/agentscope-ai/QwenPaw/issues/3001) |
| #2660 | ~50 dias | AGENT_ERROR Task cancelled (CoPaw v1.0) | [#2660](https://github.com/agentscope-ai/QwenPaw/issues/2660) |
| #2983 | ~44 dias | Markdown table line breaks | [#2983](https://github.com/agentscope-ai/QwenPaw/issues/2983) |
| #3528 | ~33 dias | Markdown table `<br>` auto wrap | [#3528](https://github.com/agentscope-ai/QwenPaw/issues/3528) |

### 🎯 Prioridades para Atenção da Equipe

| Prioridade | Item | Razão |
|------------|------|-------|
| **1** | Pet Plugin Crash (#4541) | Breaking feature recém-lançada |
| **2** | RCE Vulnerability (#4470) | Security critical |
| **3** | AGENTS.md Regression (#4496) | Regressão pós-upgrade |
| **4** | WeChat Cron (#4477) | Usuários produtivos受影响 |
| **5** | Markdown Tables (#2983) | Tech debt acumulado (44 dias) |

---

## 📌 Conclusão

O projeto CoPaw demonstra **saúde estável com incidentes pontuais**. A release v1.1.8 trouxe valor com plugins e desktop companion, mas regressões e crashes em funcionalidades novas requerem resposta rápida. A comunidade está engajada com 11+ comentários em issues hot, e o pipeline de features (MCP, Tauri desktop, Skill Market) indica evolução contínua. **Recomendação:** Priorizar fixes de crash do Pet plugin e RCE vulnerability nas próximas 48-72h.

---

*Relatório gerado em 2026-05-20 com base em dados do GitHub (github.com/agentscope-ai/CoPaw)*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>


# Relatório de Projeto ZeroClaw — 2026-05-20

## 1. Panorama do Dia

ZeroClaw demonstra **alta atividade de desenvolvimento** com 48 PRs atualizados nas últimas 24h e 6 issues em discussão. O destaque da data é a entrada na reta final da release **v0.8.0 "Multi-Agent Runtime and Schema V3"** (#6398), que busca aprovação para se tornar a base do beta. A comunidade está ativamente refinando canais de comunicação (WhatsApp, Slack, email), ferramentas de upload de arquivos e correções de bugs críticos — incluindo um S1 sobre heredocs bloqueados pela política de segurança. O projeto segue saudável, com 42 PRs abertos e apenas 6 merged, indicando fluxo intenso de revisões.

---

## 2. Lançamentos

**Nenhuma release nova publicada nas últimas 24h.**

A release v0.8.0 está em fase de approvals (#6398) e será a próxima versão significativa. Enquanto isso, a versão v0.7.6 está em preparação como tema de focus nas issues (#6253).

---

## 3. Progresso do Projeto

### PRs Merged/Fechados Recentemente (6)

| # | PR | Autor | Cambio |
|---|-----|-------|--------|
| **#6268** | feat(providers): add Manifest open-source LLM router | SebConejo | Novo provider adicionaddo |
| **#6649** | feat(channels/acp): persist ACP sessions | tidux | Sessões sobrevivem reconnects |
| **#6706** | fix(channels/whatsapp): restore Apr-2026 protocol parity | alexandme | Atualização para whatsapp-rust 0.6 |
| **#6777** | fix(memory): purge_namespace deletes by namespace | nixosclaw | Bug fix crítico de memória |
| **#6639** | Fix runtime_config directory resolution bug (Homebrew) | BernardKuo | Suporte Homebrew corrigido |
| **#6752** | fix(ci): unblock pr-title workflow | JordanTheJet | CI desbloqueado |

### Destaques Técnicos

- **#6649** — A persistência de sessões ACP (#6649) implementa `AcpSessionStore` SQLite-backed com 4 novos métodos JSON-RPC, garantindo que sessões do editor sobrevivam reconexões sem perda de contexto.

- **#6706** — Atualização do WhatsApp para `whatsapp-rust` 0.6, alinhando com `whatsmeow@74a8496`, restabelecendo paridade de protocolo.

- **#6777** — Correção crítica onde `SqliteMemory::purge_namespace` usava coluna errada (`category` vs `namespace`), causando deleção incorreta de memórias.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| # | Título | Comentários | Tipo | Prioridade |
|---|--------|-------------|------|------------|
| **#5849** | Dream Mode — Periodic Memory Consolidation | **10** | Enhancement | P1 |
| **#6293** | Air-gapped execution mode with daemon (RFC) | 2 | RFC/Blocked | P2 |
| **#6074** | Audit: 153 commits lost in bulk revert | 2 | Audit | P2 |
| **#6253** | zeroclaw skills support and UX (v0.7.6) | 1 | Enhancement | P1 |

### Análise de Demandas

**#5849 — Dream Mode** é o tema mais discutido, propondo consolidação periódica de memórias e aprendizado reflexivo durante períodos idle. Com 10 comentários, há interesse da comunidade em dotar o agente de capacidades de "sono" para reflexão. A feature é classificada como P1 e status `accepted`, indicando alinhamento com roadmap.

**#6293 — Air-gapped Mode** representa uma demanda de segurança para ambientes isolados, com arquitetura split em container offline + daemon online via unix socket. Status `blocked` aguardando revisão de maintainer.

---

## 5. Bugs e Estabilidade

### Bug Crítico (S1 — Workflow Blocked)

**#6771** — [Bug]: Multiline Heredocs incorrectly blocked by SecurityPolicy
- **Severidade:** S1
- **Autor:** tidux
- **Resumo:** A própria política de segurança do ZeroClaw bloqueia o uso de HEREDOCs, impedindo a execução do skill interno para criar PRs via `gh pr create`.
- **Link:** [zeroclaw-labs/zeroclaw#6771](https://github.com/zeroclaw-labs/zeroclaw/issues/6771)

### Bug de Medium Risk

| # | Título | Severidade | Status |
|---|--------|------------|--------|
| **#6639** | Fix runtime_config directory resolution (Homebrew) | Medium | **Merged** ✅ |
| **#6752** | CI pr-title workflow unblocked | High | **Merged** ✅ |
| **#6772** | Windows shell output transcoding to UTF-8 | Medium | Open |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em Desenvolvimento

**#6398 — v0.8.0: Multi-Agent Runtime and Schema V3** (PR aberto para aprovação)
- Mudança mais ambiciosa do período, afetando praticamente todos os subsistemas
- Labels incluem: core, agent, channel, config, daemon, runtime, skillforge, tools, múltiplos providers e channels
- **Link:** [zeroclaw-labs/zeroclaw#6398](https://github.com/zeroclaw-labs/zeroclaw/pull/6398)

**#6773/#6775 — Ferramentas de Upload de Arquivos**
- `file_upload` — Upload HTTP multipart via agente
- `file_upload_bundle` — Upload atômico multi-arquivo
- Resolvem limitação onde LLM precisava carregar arquivo inteiro no contexto
- **Links:** [#6773](https://github.com/zeroclaw-labs/zeroclaw/pull/6773) | [#6775](https://github.com/zeroclaw-labs/zeroclaw/pull/6775)

**#6253 — zeroclaw skills UX (v0.7.6)**
- Tema confirmado da próxima release
- Escopo: CLI, loader, audit, install paths, sandbox, test harness, skill authoring
- **Link:** [zeroclaw-labs/zeroclaw#6253](https://github.com/zeroclaw-labs/zeroclaw/issues/6253)

**#5849 — Dream Mode** (P1, accepted)
- Consolidação periódica de memórias durante idle
- Aprendizado reflexivo em background
- **Link:** [zeroclaw-labs/zeroclaw#5849](https://github.com/zeroclaw-labs/zeroclaw/issues/5849)

**#5838 — Webhook retry com exponential backoff**
- Implementa retry para falhas transitórias (429, 5xx)
- Honra `Retry-After` header
- **Link:** [zeroclaw-labs/zeroclaw#5838](https://github.com/zeroclaw-labs/zeroclaw/pull/5838)

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

1. **Segurança bloqueando workflows legítimos (#6771)**
   - Usuários não conseguem criar PRs via skills internos
   - Impacto: workflow bloqueado

2. **Compatibilidade Windows (#6772)**
   - Saída de shell com code page incorreto
   - Demanda por transcoding UTF-8 automático

3. **Canais incompletos**
   - Slack: agente responde "cego" sem contexto de thread (#6428)
   - WhatsApp: quebra de protocolo após update upstream (#6706)

### Solicitações de Melhoria

- **Homebrew**: Config directory resolution funcionava incorretamente → **RESOLVIDO**
- **RSS/Atom feeds**: Necessidade de descoberta automática de feeds (#6774)
- **Canais de email**: Separação de credenciais IMAP/SMTP (#6666)

---

## 8. Backlog que Merece Atenção

### Issues sem Resposta/Movimentação Significativa

| # | Título | Criado | Status | Observação |
|---|--------|--------|--------|------------|
| **#6074** | Audit: 153 commits lost in bulk revert | 2026-04-24 | In Progress | Requer mapeamento de commits perdidos |
| **#6293** | Air-gapped execution mode (RFC) | 2026-05-03 | Blocked | Aguarda maintainer review |
| **#6253** | Skills UX v0.7.6 | 2026-05-01 | Accepted | Sem momentum recente |
| **#5849** | Dream Mode | 2026-04-18 | Accepted | 10 comentários, mas sem движение |

### Priorização Recomendada

1. **#6074** — Reverter commit c3ff635 perdeu 153 commits aceitos. Comunidade precisa de transparência sobre o que foi perdido.
2. **#6771** — S1: Corrige self-blocking da SecurityPolicy.
3. **#6293** — RFC de segurança crítica para ambientes enterprise/air-gapped.

---

## Métricas Resumidas (24h)

| Indicador | Valor |
|-----------|-------|
| Issues abertas/ativas | 6 |
| PRs abertos | 42 |
| PRs merged/fechados | 6 |
| Novas releases | 0 |
| Bugs S1 | 1 |
| Features P1 | 2 (Dream Mode, Skills UX) |

**Saúde Geral:** ✅ Projeto ativo com pipeline saudável de PRs, mas com 1 bug S1 crítico e 153 commits pendentes de auditoria que merecem atenção imediata.

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*