# Resumo diário do ecossistema de agentes de IA 2026-05-31

> Issues: 0 | PRs: 2 | Projetos cobertos: 7 | Gerado em: 2026-05-30 20:50 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório do Projeto NullClaw — 2026-05-31

---

## 1. Panorama do Dia

O projeto NullClaw mantém um ritmo de desenvolvimento estável com **2 PRs merged/fechadas** nas últimas 24h, porém sem novas issues abertas ou releases publicadas no período. A atividade concentra-se em ajustes de compatibilidade e manutenção de build, indicando uma fase de refinamento incremental do codebase. O projeto não registrou discussões comunidades significativas nas últimas 24h, sugerindo foco em estabilidade antes de novas funcionalidades.

---

## 2. Lançamentos

**Nenhuma nova release publicada nas últimas 24h.**

O último release detectado foi o **v2026.5.29** (PR #938), mergeado em 2026-05-30, consistindo apenas em bump de versão no `build.zig.zon`. Este padrão de releases frequentes com mudanças incrementais sugere um ciclo de release baseado em tags de versão datadas para controle de dependências.

---

## 3. Progresso do Projeto

### PRs Merged/Fechadas (2)

| # | Título | Autor | Impacto |
|---|--------|-------|---------|
| [#878](https://github.com/nullclaw/nullclaw/pull/878) | fix(compat): use nanosleep on POSIX in thread.sleep | vernonstinebaker | **Crítico** |
| [#938](https://github.com/nullclaw/nullclaw/pull/938) | v2026.5.29 | DonPrus | Build |

### Análise do PR #878 (Alta Relevância)

Este PR representa uma **correção de compatibilidade POSIX significativa**:

- **Mudança**: Substitui `std.Io.sleep()` (cooperative yield sob `std.Io.Threaded`) por `nanosleep` nativo do POSIX em `std_compat.thread.sleep()`
- **Preservado**: Caminho scheduler-backed para Windows/WASI
- **Motivação**: NullClaw's managed scheduling não era adequado para suspend real do thread OS
- **Validação**: Mantém compat tests/build wiring no `main`

**Impacto**: Este change é crítico para workloads que dependem de timing preciso de threads em ambientes POSIX (Linux, macOS), alinhando o comportamento de `thread.sleep()` com expectativas nativas.

---

## 4. Temas Quentes da Comunidade

**Nenhuma issue ou PR com atividade de comentários/reações registrada nas últimas 24h.**

O ecossistema NullClaw apresenta silêncio comunitário no período, o que pode indicar:
- Estabilidade atual do codebase
- Ciclo de desenvolvimento interno sem necessidade de input externo
- Período de baixa visibilidade/organicidade

---

## 5. Bugs e Estabilidade

**Nenhum bug reportado nas últimas 24h.**

A ausência de issues abertas ou relatórios de crashes indica boa saúde estabilidade no período. O PR #878, embora classificado como "fix", parece ter sido mergeado preventivamente para corrigir comportamento de sleep em vez de resposta a um bug user-reported.

---

## 6. Pedidos de Features e Sinais de Roadmap

**Nenhuma nova feature request registrada nas últimas 24h.**

Sem inputs externos de roadmap, o desenvolvimento parece focado em manutenção de compatibilidade (PR #878) e controle de versão (PR #938). O padrão de changes sugere que o roadmap está sendo executado internamente sem visibilidade pública das prioridades.

---

## 7. Resumo de Feedback dos Usuários

**Nenhum feedback registrado nas últimas 24h.**

Ausência de issues de usuários limita análise de dores reais. Recomenda-se monitorar issues abertas dos últimos 30 dias para identificar padrões de reclamação ou requests recorrentes.

---

## 8. Backlog que Merece Atenção

**Não há issues pendentes listadas, mas considerando o contexto:**

| Item | Prioridade | Status | Observação |
|------|------------|--------|------------|
| [PR #878](https://github.com/nullclaw/nullclaw/pull/878) | 🔴 Alta | Merged | Correção de sleep POSIX — verificar se não há side-effects em outros módulos |
| [Release v2026.5.29](https://github.com/nullclaw/nullclaw/pull/938) | 🟡 Média | Merged | Validar se dependents estão consumindo versão correta |

---

## Métricas Resumidas (24h)

| Categoria | Abertas | Fechadas/Merged | Total |
|-----------|---------|-----------------|-------|
| Issues | 0 | 0 | 0 |
| PRs | 0 | 2 | 2 |
| Releases | — | 0 | 0 |

**Saúde Geral**: 🟢 Estável — Atividade de manutenção focada, sem bloqueios.

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo — Ecossistema de Agentes de IA Open Source

**Data de referência:** 2026-05-31 | **Projetos analisados:** 7 | **Período:** últimas 24h

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta um padrão bimodal de atividade: três projetos em **modo de consolidação e release** (NullClaw, Hermes Agent, IronClaw) com volumes massivos de PRs e issues pendentes de triagem, e quatro projetos em **modo de iteração acelerada** (NanoBot, PicoClaw, CoPaw, ZeroClaw) com ciclo rápido de features → merge → bug reports. Nenhuma release tagged foi publicada no período em nenhum dos sete projetos, indicando sincronia externa — provavelmente vinculada ao calendário de desenvolvimento independente, não a um evento sistêmico. A pressão comunitária mais visível concentra-se em **estabilidade em plataformas Windows** (CoPaw, PicoClaw, Hermes Agent) e em **segurança de workspaces** (IronClaw, NullClaw), sinalizando maturidade crescente do ecossistema em direção a requisitos de produção enterprise.

---

## 2. Comparação de Atividade

| Projeto | Issues abertas (24h) | PRs atualizados (24h) | PRs merged/fechados | Releases (24h) | Saúde Geral |
|---------|---------------------:|---------------------:|-------------------:|---------------:|:-----------:|
| **NullClaw** | 0 | 2 | 2 | 0 | 🟢 Estável |
| **NanoBot** | 7 (3 novas) | 14 (8 abertos) | 6 | 0 | 🟢 Boa |
| **Hermes Agent** | 50 atualizadas | 50 atualizadas | 1 | 0 | 🟡 Alta demanda |
| **PicoClaw** | 7 | 11 | 3 | 1 nightly | 🟡 Atenção |
| **IronClaw** | — | 32 | 21 | 0 | 🟡 Sob pressão |
| **CoPaw** | 12 | 4 | 0 | 0 | 🟡 Bug accumulation |
| **ZeroClaw** | 26 | 50 | 30 | 0 | 🟡 Muito ativo |

**Nota metodológica:** Hermes Agent e IronClaw reportam PRs/Issues atualizados (não necessariamente abertos/fechados), o que influi o volume absoluto sem refletir diretamente saúde de pipeline.

**Volume total de atividade:**
- **Issues:** ~102 eventos entre os 7 projetos
- **PRs:** ~153 eventos entre os 7 projetos
- **Releases tagged formais:** 0 em 24h (PicoClaw teve nightly automated build)

---

## 3. Posicionamento do NullClaw vs. Pares

### Onde o NullClaw se destaca

| Dimensão | NullClaw | Comparação com Pares |
|----------|----------|----------------------|
| **Velocidade de decisão** | 100% dos PRs merged (2/2) | NanoBot: 43% (6/14); CoPaw: 0% (0/4) |
| **Manutenção de dependências** | Release v2026.5.29 (bumps datados) | Hermes Agent: sem release em 2 dias; IronClaw: 3 releases defasadas no crates.io |
| **Estabilidade** | Zero bugs reportados | CoPaw: 7 bugs; ZeroClaw: 6 bugs S1-S2; Hermes Agent: 4 P1 ativos |
| **Razão sinal/ruído** | PRs críticos com impacto demonstrável | Vários projetos têm PRs "size XS" de documentação |

### Lacunas identificadas

| Lacuna | NullClaw | Pares que endereçam |
|--------|----------|---------------------|
| **Volume comunitário** | Baixo (nenhuma issue/comentário) | ZeroClaw: 26 issues; Hermes: 50+ |
| **Visibilidade de roadmap** | Roadmap interno sem visibilidade | NanoBot: features jelas terlihat via PRs abiertos |
| **Features plurataforma** | Compat POSIX/Core nativo (issue #878) | Hermes Agent: 10+ plataformas; PicoClaw: 6 canais |
| **Documentação** | — | ZeroClaw: RFC estruturado; IronClaw: contrato de design documentado |

**Veredicto:** NullClaw opera como projeto de **núcleo estável e baixa superfície**, ideal para quem prioriza robustez sobre features. Os pares (especialmente ZeroClaw, Hermes Agent) estão mais maduros em termos de ecossistema comunitário e oferta de funcionalidades. A estratégia de NullClaw — foco em compatibilidade POSIX e refinamento incremental — é válida para um nicho, mas limita alcance a usuários que necessitam de canais, providers múltiplos e integrações third-party.

---

## 4. Focos Técnicos Compartilhados

### 4.1 Compatibilidade Multi-Plataforma (Windows/Linux/macOS)

Todos os projetos sem exceção enfrentam desafios de portabilidade:

| Projeto | Problema Específico |
|---------|---------------------|
| Hermes Agent | Dashboard MIME type `.js` no Windows; PowerShell install hangs |
| PicoClaw | MANIFEST resource duplicado no build Windows; FreeBSD context tokens |
| CoPaw | Cmd window flash a cada `execute_shell_command` no Windows (3 issues duplicadas) |
| NullClaw | `std.Io.sleep()` não nativo no POSIX — resolvido em PR #878 |
| ZeroClaw | Backspace deletando byte-a-byte em UTF-8 CJK |

**Interpretação:** A diversidade de ambientes de execução (CLI, Tauri, Docker, WASI, desktop) combinada com a heterogeneidade de plataformas cria uma superfície de compatibilidade que nenhum projeto ainda padronizou completamente.

### 4.2 Segurança de Runtime e Workspaces

Dois projetos demonstram foco explícito em segurança defensiva:

- **IronClaw** — PR #4253 implementa detector read-time de prompt-injection em `AGENTS.md`, `SOUL.md`, `USER.md`, `IDENTITY.md` (Patch #10a)
- **NullClaw** — PR #878 substitui cooperative yield por `nanosleep` POSIX para evitar timing side-channels
- **NanoBot** — PR #4106 limita downloads de mídia antes de materialização; PR #4086 normaliza IPv6-mapeados-IPv4 em checks SSRF

**Interpretação:** À medida que agentes ganham capacidade de executar código e manipular arquivos, a comunidade está ativamente endereçando a superfície de ataque via identity files, network boundaries e media handling.

### 4.3 Sistema de Memória e Contexto

Três projetos convergiram independentemente para a mesma classe de problemas:

| Projeto | Foco |
|---------|------|
| NanoBot | Manual mode (#4050) + RAG leve (#4109) + Dream toggle (#3885) |
| Hermes Agent | Idle-triggered context compression (#27579); memory provider em cron (#18885) |
| CoPaw | `get_model_max_input_length` retornando valor errado (#4827) — afeta limiar de compressão |

**Interpretação:** O gerenciamento de contexto de longo prazo é o problema mais transversal do ecossistema — todos estão evoluindo soluções de compressão, recall e memory write sem um padrão emergente consolidado.

### 4.4 Autenticação e OAuth

Três projetos estão investindo em autenticação moderna:

- **IronClaw** — OAuth GSuite + Notion MCP + GitHub PAT via `CredentialAccountService` (PRs #4228, #4233, #4245)
- **PicoClaw** — Azure Identity para Azure OpenAI (PR #2971)
- **ZeroClaw** — XOAUTH2 para email, scoped tool elevation (PRs #7021, #6924)

**Interpretação:** A migração de auth via secrets hardcoded para OAuth/credential services é uma tendência que reflete a maturação dos agentes para ambientes enterprise.

---

## 5. Análise de Diferenciação

### 5.1 Posicionamento Técnico

| Projeto | Arquitetura Primária | Diferenciação Central |
|---------|---------------------|----------------------|
| **NullClaw** | Zig nativo + POSIX | Minimalismo, compatibilidade POSIX precisa, scheduler managed |
| **NanoBot** | Python + Matrix | Multi-canal, security hardening, RAG memory |
| **Hermes Agent** | Python + CLI-first | Multi-plataforma (Telegram, Teams, Matrix), dashboard, browser tool |
| **PicoClaw** | Go + Tauri desktop | Desktop-first, i18n, provider abstraction |
| **IronClaw** | Rust + WASM | Product adapters, OAuth nativo, Reborn architecture |
| **CoPaw** | Desktop (Tauri/Electron) | Agentes de mercado financeiro, Feishu integration |
| **ZeroClaw** | Rust modular | Canais múltiplos (Signal, WhatsApp, iMessage, Email), AllowlistAspect |

### 5.2 Segmento de Público

| Perfil | Projeto Recomendado | Razão |
|--------|---------------------|-------|
| Desenvolvedor Zig / embedded | NullClaw | Nativo POSIX, baixa dependência |
| Operador multi-canal (Matrix/Telegram) | NanoBot, Hermes Agent | Infraestrutura de canais madura |
| Ambiente enterprise (Azure, OAuth) | IronClaw, PicoClaw | Auth moderno, product adapters |
| Desktop Windows-first | CoPaw, PicoClaw | UX desktop, Tauri/Electron |
| Agente pessoal com memória | NanoBot | RAG + manual mode + Dream system |
| Integração Signal/iMessage/WhatsApp | ZeroClaw | Alcance de canais mais amplo do ecossistema |

### 5.3 Estratégia de Features

**Modo feature-rich:** Hermes Agent (46 issues abertas, 49 PRs abertos) — prioriza escopo máximo.  
**Modo stability-first:** NullClaw (2 PRs, zero issues) — prioriza robustez do core.  
**Modo comunidade acelerada:** ZeroClaw (30 PRs merged em 24h) — alta contribuição, alta dívida técnica.  
**Modo UX polish:** PicoClaw (i18n, image paste, Azure Identity) — foco em experiência de onboarding.  
**Modo segurança hardened:** IronClaw (prompt injection scan, OAuth, CVEs) — prioriza surface hardening.

---

## 6. Tração e Maturidade da Comunidade

### Velocidade de Iteração

| Projeto | PRs merged (24h) | Velocidade (merged/atualizado) | Tendência |
|---------|-----------------:|-------------------------------:|----------|
| ZeroClaw | 30 | 60% | 🔴 Muito rápido — risco de dívida |
| IronClaw | 21 | 65.6% | 🟡 Rápido — monitorar E2E |
| NullClaw | 2 | 100% | 🟢 Seletivo — baixa vazão |
| NanoBot | 6 | 43% | 🟡 Equilibrado |
| PicoClaw | 3 | 27% | 🟡 Moderado — regressões atrasam |
| Hermes Agent | 1 | ~2% | 🔴 Gargalo — 50 PRs backlog |
| CoPaw | 0 | 0% | 🔴 Estagnado — bugs se acumulam |

### Qualidade de Triagem (bug age)

| Projeto | Bug mais antigo em aberto | Idade | Prioridade |
|---------|--------------------------|------:|:----------:|
| CoPaw | #4123 (cmd window flash) | ~23 dias | Alta |
| Hermes Agent | #523 (Local Model Setup guide) | Antiga | Feature |
| ZeroClaw | #3259 (crates.io defasado) | ~26 dias | 🔴 Crítica |
| IronClaw | #3259 (mesma issue?) | — | 🔴 Crítica |
| NullClaw | Nenhum bug em aberto | — | 🟢 |
| NanoBot | ~1 dia (todos recentes) | <2 dias | 🟢 |
| PicoClaw | #2856 (media attachments) | ~20 dias stale | 🟡 Média |

### Padrões de Engajamento

| Padrão | Projetos | Leitura |
|--------|----------|---------|
| Alta atividade + baixa resolução | Hermes Agent, CoPaw | Demanda superior à capacidade de review |
| Alta atividade + alta resolução | NanoBot, ZeroClaw | Pipeline saudável mas intenso |
| Baixa atividade + alta resolução | NullClaw | Desenvolvimento interno estável |
| Stale PRs sem resposta | PicoClaw (#2856, #2838), CoPaw (#4123) | Gargalo de maintainer |

---

## 7. Sinais de Tendência

### 7.1 Do Ecossistema para o Mercado

**T1 — OAuth como padrão de autenticação em agentes:** Três projetos (IronClaw, PicoClaw, ZeroClaw) estão convergindo para OAuth moderno com credenciais runtime-backed em vez de secrets hardcoded. Isso reflete a entrada de agentes em ambientes enterprise onde políticas de subscription bloqueiam API keys secretas.

**T2 — RAG e memória inteligente como feature base:** NanoBot, Hermes Agent e implicitamente CoPaw estão investindo em recall, manual mode e context compression. O mercado está passando de "agente stateless" para "agente com memória persistente e recuperável".

**T3 — Desktop-first para UX de não-desenvolvedores:** CoPaw (Tauri/Electron) e PicoClaw (Tauri) demonstram que o próximo incremento de adoção virá por interfaces desktop amigáveis, não por CLI. A tendência de image paste/drag-drop (#2969, PicoClaw) e caminhos clicáveis (#4830, CoPaw) confirma essa direção.

**T4 — Segredos de workspace como superfície de ataque prioritária:** O PR de prompt-injection scan da IronClaw (#4253), junto com o SSRF hardening do NanoBot (#4086), indica que a comunidade está se antecipando a um requisito de segurança que auditorias enterprise começarão a exigir em 2026H2.

**T5 — Multi-canal é a nova expectation mínima:** Com ZeroClaw suportando 8+ canais e Hermes Agent combinando Matrix + Telegram + Teams, a proposta de valor de um agente de IA hoje inclui, por default, interoperabilidade entre Signal, WhatsApp, iMessage, Email, Slack, Teams e Telegram.

### 7.2 Riscos Transversais Identificados

| Risco | Projetos Afetados | Severidade | Mitigação |
|-------|-------------------|:----------:|-----------|
| **crates.io defasado (IronClaw)** | Downstream pinned a versão com CVEs | 🔴 Crítica | Publicar 0.27.0 no crates.io urgentemente |
| **E2E nightly falhando (IronClaw)** | Confiança em releases comprometida | 🟡 Alta | Investigar commit 749f58441; restaurar pipeline |
| **Bug de cmd window (CoPaw)** | 3 issues duplicadas, 23 dias sem fix | 🟡 Alta | Consolidar issues; priorizar fix |
| **/mission freeze (CoPaw)** | Freeze completo do Console em v1.1.7 | 🟡 Alta | Acknowledge + assign owner |
| **Web UI regression (PicoClaw)** | Mensagens antigas contaminam sessões novas | 🟡 Alta | v0.2.9 regressão — nightly build em monitoramento |

### 7.3 Oportunidades de Consolidação

1. **Padrão de Allowlist/permission model:** A migração de ZeroClaw para `AllowlistAspect` (24 PRs, arquitetura padronizada) poderia ser um blueprint para NullClaw e NanoBot que atualmente mantêm predicates `is_*_allowed` inconsistentes por canal.

2. **i18n como feature competitiveness:** PicoClaw (Bangla, Traditional Chinese) e CoPaw (Fluent contract) demonstram que internacionalização é diferenciador de mercado — demanda orgânica existe, mas implementação é fragmentada.

3. **Provider abstraction layer:** Os bugs correlatos de reasoning_content drop em DeepSeek (#6233, ZeroClaw) e custom providers (NanoBot #4105) sugerem que um schema unificado de provider response normalization beneficiaria todo o ecossistema.

---

## Conclusão

O ecossistema de agentes de IA open source em 2026-05-31 apresenta três estágios simultâneos de maturidade: **early adopters stabilizing** (NullClaw), **production hardening** (NanoBot, Hermes Agent, IronClaw) e **user-experience scaling** (PicoClaw, CoPaw, ZeroClaw).

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-05-31

---

## 1. Panorama do Dia

O NanoBot mantém um nível de atividade intenso e produtivo. Nas últimas 24 horas, 7 issues foram atualizadas (3 abertas, 4 fechadas) e 14 PRs foram atualizados (8 abertos, 6 merged/fechados), sem novos lançamentos formais. A atividade é marcada por três tendências principais: (a) fechamento simultâneo de issues de longa data (ex.: #3885 e #3993 resolvidos no mesmo PR #4054), (b) avanço coordenado em múltiplas frentes — segurança Matrix, UX/WebUI e memória — e (c) entrada de novas features de maior escopo, como transcrição configurável e RAG leve para memória. A saúde geral do projeto é **boa**, com ciclo de revisão rápido e baixa taxa de issues órfãs.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24h.** O projeto não publicou novas versões tagged no período. Isso é consistente com um ciclo de desenvolvimento ativo onde features estão sendo refinadas em PRs abertos antes de um próximo tagged release.

> **Nota:** Os PRs fechados hoje cobrem features e correções que provavelmente serão incluídas no próximo release. Recomenda-se monitorar a convergência dos PRs abertos restantes para antecipar o conteúdo da próxima versão.

---

## 3. Progresso do Projeto

Seis PRs foram merged/fechados hoje, representando avanços significativos em segurança, estabilidade e UX:

| PR | Autor | Tipo | Impacto |
|---|---|---|---|
| [#4054](https://github.com/HKUDS/nanobot/pull/4054) | 04cb | bug+enhancement | Resolve dois issues de uma vez: **coerção de blocos sem `type`** no provedor Anthropic (corrige rejeição da API) e **toggle de enabled para Dream** (resolve #3885 e #3993) |
| [#4104](https://github.com/HKUDS/nanobot/pull/4104) | 04cb | bug fix | Resolve race condition crítica: `process_direct` agora respeita o lock por sessão, eliminando risco de **corrupção de histórico** em chamadas diretas (API/cron/webui/SDK) |
| [#4110](https://github.com/HKUDS/nanobot/pull/4110) | mytechdream | fix | Implementa suporte a **verificação SAS de dispositivos** no Matrix para clientes Element X (matrix-rust-sdk), eliminando warnings E2EE |
| [#4106](https://github.com/HKUDS/nanobot/pull/4106) | Hinotoi-agent | security | Limita downloads de mídia inbound no Matrix **antes** de materializar attachments, impedindo downloads sem bounds |
| [#4086](https://github.com/HKUDS/nanobot/pull/4086) | yorkhellen | security | Normaliza endereços IPv6-mapeados-IPv4 em checks SSRF, impedindo bypass de proteção |
| [#4108](https://github.com/HKUDS/nanobot/pull/4108) | Re-bin | enhancement | Refina rendering da timeline de output no WebUI com ordenação estável, preview de mídia e melhor renderização de código/Markdown |

**Destaque estratégico:** O PR [#4054](https://github.com/HKUDS/nanobot/pull/4054) é o de maior impacto consolidando, resolvendo dois issuesenhancement em uma única mudança — um padrão de eficiência que indica maturidade no processo de revisão.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários + reações)

| Issue | Autor | Tipo | Comentários | Reações | Sinal |
|---|---|---|---|---|---|
| [#3885](https://github.com/HKUDS/nanobot/issues/3885) | codeLong1024 | enhancement | 4 | 0 | Toggle global para Dream (✅ resolvido em #4054) |
| [#4042](https://github.com/HKUDS/nanobot/issues/4042) | PaddyPatPat | bug | 1 | 0 | Verificação SAS Matrix Element X (✅ resolvido em #4110) |
| [#4107](https://github.com/HKUDS/nanobot/issues/4107) | Kyakui | enhancement | 0 | 0 | Bind mounts customizáveis no bwrap sandbox (🆕 aberto) |
| [#4111](https://github.com/HKUDS/nanobot/issues/4111) | CashSoldier | bug | 0 | 0 | Heartbeat enviando "All clear." indesejado (🆕 aberto) |

**Análise:** A comunidade demonstra demanda concreta em três eixos:
1. **Configurabilidade granular** — desejo de switches explícitos para subsistemas (Dream, bwrap sandbox, heartbeat)
2. **Interoperabilidade Matrix** — problemas com clientes modernos (Element X) indicam necessidade de suporte contínuo ao ecossistema Matrix
3. **Automação silenciosa** — Heartbeat enviando notificações não solicitadas revela gap entre comportamento default e expectativa do usuário

---

## 5. Bugs e Estabilidade

### Issues abertas (bugs)

| Issue | Severidade | Descrição | Impacto |
|---|---|---|---|
| [#4111](https://github.com/HKUDS/nanobot/issues/4111) | **Medium** | Heartbeat envia "All clear." a usuários quando não há tarefas a reportar | Poluição de notificações; irritação em integrações Feishu |
| [#4105](https://github.com/HKUDS/nanobot/issues/4105) | Não especificada | Custom provider descarta reasoning content se for string vazia | Perda de conteúdo em fluxos de tool_call com reasoning |

### Bugs resolvidos hoje

| Issue | PR que resolve | Tipo |
|---|---|---|
| [#4080](https://github.com/HKUDS/nanobot/issues/4080) | [#4104](https://github.com/HKUDS/nanobot/pull/4104) | Race condition — `process_direct` ignorava lock de sessão |
| [#4042](https://github.com/HKUDS/nanobot/issues/4042) | [#4110](https://github.com/HKUDS/nanobot/pull/4110) | Warnings E2EE em clientes Element X |

**Avaliação de estabilidade:** A arquitetura apresenta dois pontos de fragilidade addressed — race condition em sessões e limites ausentes em mídia Matrix. Ambos foram corrigidos via PR no mesmo dia do reporte, indicando tempo de resposta rápido. Nenhuma regressão introduzida visível nos PRs fechados.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em desenvolvimento (PRs abertos)

| PR | Autor | Feature | Relevância |
|---|---|---|---|
| [#4113](https://github.com/HKUDS/nanobot/pull/4113) | breitburg | **STT configurável + provedor OpenRouter** para transcrição de voz | Alta — adiciona flexibilidade de provedor para transcrição |
| [#4050](https://github.com/HKUDS/nanobot/pull/4050) | outlook84 | **Modo de memória manual** isolado do automático | Alta — responde à demanda de controle granular sobre memória |
| [#4109](https://github.com/HKUDS/nanobot/pull/4109) | gqcao | **RAG leve para recuperação de memória** com embeddings locais | Alta — melhora relevância de recall de memória |
| [#3992](https://github.com/HKUDS/nanobot/pull/3992) | ysofologis | **Mensagens cross-agent** via message bus compartilhado | Média — habilita cenários multi-instância |
| [#3997](https://github.com/HKUDS/nanobot/pull/3997) | outlook84 | **Pre-warm de tokenizer** + logs de timing no build-state | Média — melhora diagnose de latência de startup |
| [#3994](https://github.com/HKUDS/nanobot/pull/3994) | outlook84 | **Campos de configuração registry-driven** por provedor | Média — padroniza configurações de provedores |

### Novas solicitações de enhancement

| Issue | Autor | Demanda |
|---|---|---|
| [#4107](https://github.com/HKUDS/nanobot/issues/4107) | Kyakui | Bind mounts customizáveis no sandbox bwrap — parametrização de paths além do conjunto hardcoded |
| [#4111](https://github.com/HKUDS/nanobot/issues/4111) | CashSoldier | Heartbeat não deveria enviar "All clear." quando não há tarefas |

**Sinais de roadmap:** O tema central emergente é **memória inteligente**: manual mode (#4050), RAG leve (#4109) e toggle Dream (#3885, já resolvido) indicam que o subsistema de memória é a área de maior evolução planejada. A segunda onda é **extensibilidade de infraestrutura** — transcrição configurável, sandbox customizável, provider fields registry-driven.

---

## 7. Resumo de Feedback dos Usuários

### Dores reais identificadas

1. **Invasão de automação não configurável** — usuários que desabilitam memory skill ainda têm Dream cron registrado (#3885). Resolvido com toggle explícito.
2. **Notificações spam de Heartbeat** — mensagens "All clear." indesejadas causam confusão, especialmente em integrações corporativas (Feishu).
3. **Warnings E2EE em clientes Matrix modernos** — Element X (iOS/Android) mostra warnings de dispositivo não verificado em cada mensagem, sugerindo experiência de usuário degradada.
4. **Rigidêz do sandbox bwrap** — paths hardcoded limitam casos de uso que exigem acesso a diretórios customizados.
5. **Latência de startup** — tokenizer não pré-aquecido causa delays perceptíveis no primeiro turno do agente.

### Cenários de uso em evidência

- **Agente pessoal multi-canal** com integração Feishu (Heartbeat) e Matrix
- **Execução em sandbox** com ferramentas exec isoladas (bwrap)
- **Multi-provedor** com switch entre OpenAI, Anthropic, Bedrock, OpenRouter
- **Memória persistente** com recall via RAG e organização Dream automática

### Satisfação

O ciclo de resolução de issues é notavelmente rápido (diversos bugs resolvidos no mesmo dia do reporte), e a comunidade recebe resposta técnica consistente. A ausência de issues críticas abertas com banyak comentários sugere satisfação geral com a estabilidade do core.

---

## 8. Backlog que Merece Atenção

### Issues abertas há mais tempo sem interação

| Issue | Idade | Tipo | Motivo da atenção |
|---|---|---|---|
| [#4107](https://github.com/HKUDS/nanobot/issues/4107) | ~1 dia | enhancement | Sandbox bwrap customizável — impacto em segurança e usabilidade |
| [#4105](https://github.com/HKUDS/nanobot/issues/4105) | ~1 dia | bug | Custom provider drop de reasoning — perda silenciosa de dados |
| [#4111](https://github.com/HKUDS/nanobot/issues/4111) | ~1 dia | bug | Heartbeat spam — experiência de usuário degradada |

> **Nenhuma das issues abertas atuais é antiga.** Todas têm apenas ~1 dia desde a criação. Isso indica um projeto com alta rotatividade e baixo acúmulo de dívida técnica.

### PRs abertos há mais tempo sem merge

| PR | Idade | Tipo | Motivo da atenção |
|---|---|---|---|
| [#3992](https://github.com/HKUDS/nanobot/pull/3992) | ~7 dias | feature | Cross-agent messaging — mudança arquitetural significativa que requer review cuidadoso |
| [#3994](https://github.com/HKUDS/nanobot/pull/3994) | ~6 dias | refactor | Registry-driven provider fields — refatoração de config que afeta todas as integrações |
| [#3997](https://github.com/HKUDS/nanobot/pull/3997) | ~6 dias | perf | Pre-warm tokenizer — perf improvement que precisa de validação de latência |
| [#4034](https://github.com/HKUDS/nanobot/pull/4034) | ~3 dias | duplicate | GitAgent Protocol — marcado como duplicate, mas pode conter contribuições válidas a avaliar |

**Recomendações:**
- Priorizar review do [#3992](https://github.com/HKUDS/nanobot/pull/3992) (cross-agent messaging) pela magnitude da mudança arquitetural
- Avaliar se [#4034](https://github.com/HKUDS/nanobot/pull/4034) contém contribuições aproveitáveis antes de fechar como duplicate
- Atribuir owner para triagem de [#4105](https://github.com/HKUDS/nanobot/issues/4105) (custom provider reasoning drop) — bug silencioso que pode passar despercebido

---

**Gerado em:** 2026-05-31 | **Fonte:** HKUDS/nanobot GitHub | **Atividade 24h:** 7 issues, 14 PRs | **Releases:** 0

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-05-31

---

## 1. Panorama do Dia

O Hermes Agent manteve um ritmo de atividade intenso nas últimas 24h, com **50 issues e 50 PRs atualizados**. O projeto registra **46 issues abertas/ativas** e **49 PRs abertos**, indicando uma alta demanda de comunidade com volume significativo de reports novos. Apenas **4 issues e 1 PR foram fechados**, sugerindo que a triagem está capturando reports duplicados ou de baixa prioridade, mas o pipeline de merge ainda não absorveu todo o backlog do dia. A ausência de releases novas sinaliza que a equipe pode estar em ciclo de preparação para uma próxima versão. Não há sinais de instabilidade sistêmica, mas a concentração de bugs P1 (4 reports) e P2 (15 reports) nas últimas 24h indica necessidade de priorização imediata.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto não publicou novas versões entre 2026-05-30 e 2026-05-31. Isso contrasta com o alto volume de atividade em issues e PRs, sugerindo que a base de código está em fase de estabilização pré-release ou que o ciclo de lançamento segue cadence próprio não alinhado ao período de dados.

---

## 3. Progresso do Projeto

### PRs Fechados/Merged Hoje

| PR | Título | Impacto |
|----|--------|---------|
| [#35505](https://github.com/NousResearch/hermes-agent/pull/35505) | fix(dashboard): register correct MIME type for .js on Windows | Corrige dashboard em branco no Windows caused by wrong MIME type mapping `.js` → `text/plain` em vez de `application/javascript`. Impacta usabilidade do dashboard em plataformas nativas Windows. |

### PRs Abertos com Alta Prioridade (P1-P2)

| PR | Título | Componente | Prioridade |
|----|--------|------------|------------|
| [#35518](https://github.com/NousResearch/hermes-agent/pull/35518) | feat(custom_providers): per-model max_tokens with switch/fallback re-resolution | agent, cli | P2 |
| [#35515](https://github.com/NousResearch/hermes-agent/pull/35515) | fix(cron): restore cron session env after jobs | cron | P2 |
| [#35516](https://github.com/NousResearch/hermes-agent/pull/35516) | fix(tools): inherit active terminal session virtualenv in execute_code project mode | tools, terminal, code-exec | P2 |
| [#30438](https://github.com/NousResearch/hermes-agent/pull/30438) | fix(mcp): sanitize inherited PATH before forwarding to stdio subprocesses | tool/mcp | P2 |
| [#33339](https://github.com/NousResearch/hermes-agent/pull/33339) | fix(agent): read custom model.base_url/api_key in _resolve_auto cron path | agent, cron | P2 |
| [#35460](https://github.com/NousResearch/hermes-agent/pull/35460) | fix(gateway): refuse shell-launched gateway when profile is supervised | cli, gateway | P2 |
| [#30312](https://github.com/NousResearch/hermes-agent/pull/30312) | fix(gateway): resolve uv-managed pythonw for Windows scheduled-task wrapper | cli, gateway | P2 |
| [#24295](https://github.com/NousResearch/hermes-agent/pull/24295) | fix(anthropic): override SDK User-Agent for third-party endpoints | agent, provider/anthropic | P2 |
| [#35512](https://github.com/NousResearch/hermes-agent/pull/35512) | fix(tui): swallow degraded mouse-burst noise so a stalled loop can't lock the composer | tui | P2 |
| [#35513](https://github.com/NousResearch/hermes-agent/pull/35513) | fix(tools): respect task and session cwd overrides in execute_code project mode | agent, tool/code-exec | P2 |
| [#35514](https://github.com/NousResearch/hermes-agent/pull/35514) | fix(gateway): stop system tips from auto-uploading local files | gateway | P2 |
| [#35480](https://github.com/NousResearch/hermes-agent/pull/35480) | fix(send_message): restrict Telegram HTML detection | tools, platform/telegram | P2 |
| [#35500](https://github.com/NousResearch/hermes-agent/pull/35500) | fix(dashboard): skip legacy token check in gated mode for _require_token endpoints | cli, area/auth | P2 |
| [#18505](https://github.com/NousResearch/hermes-agent/pull/18505) | fix(matrix): isolate room context and restore reliable inbound dispatch | gateway, platform/matrix | P1 |

### Análise de Progresso

OPR #35505 resolve um bug de usabilidade crítico para usuários Windows, onde o dashboard Vite-based falhava silenciosamente. A quantidade de PRs P2 abertos (14) demonstra que a comunidade está ativamente contribuindo com correções, mas o pipeline de review precisa acelerar para evitar acúmulo. Destaca-se a série de PRs Matrix (#18505–#18507, #23815) com 4 PRs abertos focados em fundamentos de plataforma, indicando investimento contínuo em paridade de funcionalidades cross-platform.

---

## 4. Temas Quentes da Comunidade

### Issues com Mais Comentários

| Issue | Título | Comentários | 👍 | Prioridade |
|-------|--------|-------------|----|------------|
| [#26083](https://github.com/NousResearch/hermes-agent/issues/26083) | Microsoft Teams platform plugin fails to load on bundled Python 3.11 | 5 | 0 | P3 |
| [#31272](https://github.com/NousResearch/hermes-agent/issues/31272) | Auto-detect context length not working correctly with oMLX | 4 | 0 | P2 |
| [#35322](https://github.com/NousResearch/hermes-agent/issues/35322) | WebSocket connections rejected when dashboard bound to 0.0.0.0 with --insecure | 4 | 0 | P2 |
| [#35474](https://github.com/NousResearch/hermes-agent/issues/35474) | Outbound MEDIA extraction misses .md/.markdown document not sent as file | 3 | 0 | P3 |
| [#523](https://github.com/NousResearch/hermes-agent/issues/523) | Feature: Local Model Setup Skill — Ollama, llama.cpp & vLLM Configuration Guide | 3 | 3 | feature |
| [#35380](https://github.com/NousResearch/hermes-agent/issues/35380) | fix: Windows drive-letter paths not matched by MEDIA: tag and local file regex | 3 | 0 | P2 |
| [#18885](https://github.com/NousResearch/hermes-agent/issues/18885) | Feature: allow memory provider tools in cron jobs via per-job `allow_memory` flag | 3 | 0 | P3 |
| [#27715](https://github.com/NousResearch/hermes-agent/issues/27715) | get_hermes_dir backward-compat resolver silently shadows new-path data with empty old-path dirs | 3 | 0 | P1 |
| [#8366](https://github.com/NousResearch/hermes-agent/issues/8366) | Feature: Cross-Platform Session Handoff (CLI ↔ Telegram ↔ iMessage) | 2 | 6 | P3 |

### Análise de Demandas

**Interoperabilidade multiplataforma** lidera as discussões com 3 issues no top 10 envolvendo Teams, Telegram e cross-platform session handoff. A comunidade demonstra forte interesse em usar Hermes como hub central de interação, mas a fragmentação de sessões entre plataformas é uma barreira. **Suporte a modelos locais** (#523) continua gerando engajamento com 👍 3, sugerindo demanda por documentação e melhores práticas de configuração para Ollama/llama.cpp/vLLM. **Questões de regex e path handling** aparecem em múltiplos contextos (Windows paths, MEDIA extraction, local files), indicando dívida técnica recorrente que a comunidade gostaria de ver abordada de forma unificada.

---

## 5. Bugs e Estabilidade

### Bugs P1 (Críticos — Requerem Atenção Imediata)

| Issue | Título | Componente | Link |
|-------|--------|------------|------|
| #27715 | get_hermes_dir backward-compat resolver silently shadows new-path data | gateway | [Link](https://github.com/NousResearch/hermes-agent/issues/27715) |
| #33360 | WhatsApp: Cross-chat response contamination — replies from one chat appear in another | gateway, platform/whatsapp | [Link](https://github.com/NousResearch/hermes-agent/issues/33360) |
| #35519 | redact_sensitive_text corrupts API keys in config files causing 401 | tool/file, area/config | [Link](https://github.com/NousResearch/hermes-agent/issues/35519) |
| #35472 | cwd is lost during docker init, making hermes effectively unusable | cli, backend/docker | [Link](https://github.com/NousResearch/hermes-agent/issues/35472) |

### Bugs P2 (Importantes)

| Issue | Título | Componente | Status |
|-------|--------|------------|--------|
| #31272 | Auto-detect context length not working with oMLX | agent, area/config | OPEN |
| #35322 | WebSocket connections rejected with --insecure on 0.0.0.0 | cli, gateway | CLOSED |
| #35380 | Windows drive-letter paths not matched by MEDIA: tag | gateway | CLOSED |
| #23783 | Telegram bot token already in use after hermes update | cli, gateway, platform/telegram | OPEN |
| #14141 | Custom providers sharing same base_url use wrong API credentials | cli, area/auth, area/config | OPEN |
| #34694 | Conversational amnesia when running gemma4 models | provider/gemini, provider/ollama | CLOSED |
| #35272 | TUI rendering bugs: CJK cursor offset + infinite scroll loop | tui | OPEN |
| #6653 | openai-codex reauthentication loop when switching back from local models | cli, provider/openai, area/auth | OPEN |
| #35517 | Auxiliary client HTTP timeout defaults to 30s, causing compression to fail | agent, provider/ollama, area/config | OPEN |
| #35306 | browser_console crashes with CDP "Object reference chain is too long" | tool/browser | OPEN |
| #35506 | PowerShell install hangs on "Checking Python 3.11" | cli | CLOSED |

### Análise de Estabilidade

**4 bugs P1 ativos** representa uma concentração elevada de problemas críticos. Os mais urgentes são:

- **#35519** — A função `redact_sensitive_text` está corrompendo API keys em arquivos de configuração, causando falhas de autenticação (401). Isso é um problema de segurança funcional que afeta diretamente a usabilidade do sistema.
- **#33360** — Contaminação cross-chat no WhatsApp é uma regressão de isolamento de sessão que pode expor conversas privadas a recipients incorretos.
- **#35472** — Perda de `cwd` em Docker torna o Hermes "efetivamente inutilizável" nesse ambiente, impactando workflows de desenvolvimento.

Dos **11 bugs P2**, 3 já foram fechados (#35322, #35380, #34694, #35506), demonstrando resposta rápida da equipe. Aissue #23783 (Telegram token em uso) tem 👍 2, indicando que outros usuários confirmam o problema.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features (Issues Abertos)

| Issue | Título | 👍 | Componentes | Link |
|-------|--------|----|-------------|------|
| #523 | Local Model Setup Skill — Ollama, llama.cpp & vLLM Configuration Guide | 3 | feature | [Link](https://github.com/NousResearch/hermes-agent/issues/523) |
| #8366 | Cross-Platform Session Handoff (CLI ↔ Telegram ↔ iMessage) | 6 | gateway, platform/telegram | [Link](https://github.com/NousResearch/hermes-agent/issues/8366) |
| #18885 | Allow memory provider tools in cron jobs via per-job `allow_memory` flag | 0 | cron, plugins, tool/memory | [Link](https://github.com/NousResearch/hermes-agent/issues/18885) |
| #27579 | Idle-triggered context compression to avoid pre-flight delays | 0 | agent | [Link](https://github.com/NousResearch/hermes-agent/issues/27579) |
| #35489 | Holographic auto_extract only matches English patterns | 0 | plugins, tool/memory | [Link](https://github.com/NousResearch/hermes-agent/issues/35489) |
| #35478 | Extension point for registering custom Slack Block Kit action handlers | 0 | gateway, plugins, platform/slack | [Link](https://github.com/NousResearch/hermes-agent/issues/35478) |
| #35186 | No archive path when removing entries from bounded MEMORY.md | 0 | tool/memory | [Link](https://github.com/NousResearch/hermes-agent/issues/35186) |
| #35234 | Shared user identity layer — auto-collected from conversation, shared across all profiles | 0 | agent, area/config | [Link](https://github.com/NousResearch/hermes-agent/issues/35234) |
| #33049 | Make credential pool exhaustion TTL configurable | 0 | agent, area/config | [Link](https://github.com/NousResearch/hermes-agent/issues/33049) |
| #35479 | Per-user toolset restrictions for approved pairing users | 0 | gateway, area/auth | [Link](https://github.com/NousResearch/hermes-agent/issues/35479) |
| #4429 | Allow opting out of env stripping for proxy-brokered credential placeholders | 3 | tool/terminal, area/config | [Link](https://github.com/NousResearch/hermes-agent/issues/4429) |

### Sinais de Roadmap

**Interoperabilidade multiplataforma** domina as solicitações com 👍 6 para session handoff (#8366), sugerindo que a comunidade prioriza continuidade de contexto entre CLI, Telegram e iMessage. **Suporte a modelos locais** (#523) com 👍 3 indica demanda por documentação oficial e

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório de Projeto — PicoClaw
**Data:** 2026-05-31 | **Fonte:** github.com/sipeed/picoclaw

---

## 1. Panorama do dia

O projeto PicoClaw apresenta alta atividade de desenvolvimento no dia de hoje. Foram registradas **7 issues** e **11 PRs** atualizadas nas últimas 24h, com **3 PRs merged** e **2 features fechadas por meio de issues**. A release nightly mais recente (v0.2.9-nightly.20260530) segue em produção automática, indicando maturidade no pipeline de CI/CD. Há regressões críticas reportadas na versão 0.2.9 (Web UI e context tokens), simultaneamente à merges de funcionalidades internacionais (Bangla, Traditional Chinese) e melhorias em canais (Telegram, QQ), o que evidencia um projeto saudável em transição entre features e estabilização.

---

## 2. Lançamentos

### 📦 Nightly Build — v0.2.9-nightly.20260530.e81d3710
- **Status:** Automated build (potentially unstable)
- **Nota:** Esta é uma build noturna pré-release. Recomenda-se cautela em ambiente de produção.
- **Comparativo:** Full Changelog disponível em https://github.com/sipeed/picoclaw/compare/v0.2.9...main

> **Sem releases tagged formais** registradas nas últimas 24h. A última versão estável oficial permanece em **v0.2.9**, conforme indicado nas issues dos usuários.

---

## 3. Progresso do Projeto

Três PRs foram fechadas/merged hoje, representando avanços em internacionalização, infraestrutura de chat e autenticação:

| PR | Tipo | Contribuidor | Impacto |
|---|---|---|---|
| [#2969](https://github.com/sipeed/picoclaw/pull/2969) | feat(web) | lc6464 | Upload de imagens por paste e drag-and-drop na interface Web |
| [#2971](https://github.com/sipeed/picoclaw/pull/2971) | feat(provider) | kunalk16 | Suporte opcional a Azure Identity para Azure OpenAI |
| [#2974](https://github.com/sipeed/picoclaw/pull/2974) | feat(i18n) | kunalk16 | Adição de locale Bangla (bn-in) na interface |

### Destaque:
- **#2969 (Image paste/drag-drop):** Resolve uma deficiência antiga na UX do Web UI, permitindo envio de imagens sem necessidade de upload manual por arquivo.
- **#2971 (Azure Identity):** Avanço significativo para ambientes empresariais Azure onde keys secretas são bloqueadas por políticas de subscription.
- **#2974 (Bangla i18n):** Expansão de suporte multilíngue, seguindo padrão estabelecido em PRs anteriores (#2932).

---

## 4. Temas Quentes da Comunidade

### Issue com maior tráfego:

**[#2952](https://github.com/sipeed/picoclaw/issues/2952) — [Feature]好久没发新版本了** *(2 comentários, 2026-05-27)*
- **Autor:** xhynice
- **Demanda central:** O usuário solicita novas releases formais e lista múltiplos problemas:
  1. Comando `exec` com `actions:run` não funciona em múltiplos modelos
  2. Canal QQ entra em loop infinito de reinicialização após restart
  3. Interface de modelos deve filtrar providers com keys já salvas
  4. Funcionalidade de testar conexão e listar models via `/models`一键添加

> **Análise:** Este issue reflete dores reais de usabilidade — especialmente o loop no QQ channel que impede estabilidade operacional. O pedido por interface mais intuitiva de providers indica que a experiência de onboarding precisa melhorias.

### PRs com evolução significativa:

**[#2856](https://github.com/sipeed/picoclaw/pull/2856) — Media attachments e Telegram rich delivery** *(stale, 2026-05-11)*
- Traz payloads semânticos no tool `message`, eliminando necessidade de combinar message text-only com primitivas de entrega de arquivos de baixo nível.
- Estagnado (stale) desde 2026-05-30 — requer atenção da maintainer.

**[#2838](https://github.com/sipeed/picoclaw/pull/2838) — Frontmatter tool policy filters** *(stale)*
- Estende `AGENT.md` frontmatter para suportar `allow`/`deny` em `tools` e `mcpServers` com glob patterns.
- Avanço importante para segurança e controle de agentes, porém estagnado.

---

## 5. Bugs e Estabilidade

### 🔴 Críticos (regressões)

| Issue | Descrição | Severidade | Link |
|---|---|---|---|
| #2972 | **Web UI message chaos**: Após upgrade para v0.2.9, novas sessões incluem histórico de mensagens antigas arbitrariamente | Alta | [Issue #2972](https://github.com/sipeed/picoclaw/issues/2972) |
| #2968 | **/context sempre mostra Compress at: 76800 tokens**: Valor fixoindependente de configuração real do modelo | Média-Alta | [Issue #2968](https://github.com/sipeed/picoclaw/issues/2968) |

### ⚠️ Regressões anteriores fechadas

| Issue | Descrição | Status |
|---|---|---|
| #2742 | Gateway inicia sem channels na v0.2.8 (Telegram) | ✅ Fechada (2026-05-30) |
| #2880 | Permission denied ao criar diretório `Downloads/picoclaw` no Android | ✅ Fechada (2026-05-30) |

### 🔧 PRs de bugfix em aberto

- **[#2967](https://github.com/sipeed/picoclaw/pull/2967)** — fix(codex): Preserva streamed output text deltas em OAuth responses vazias do Codex/OpenAI
- **[#2965](https://github.com/sipeed/picoclaw/pull/2965)** — fix(tools): Corrige workspace guard interpretando URLs sem scheme como caminhos absolutos (afeta `curl` sem `http://`)

> **Veredicto:** A versão v0.2.9 apresenta regressões ativas no Web UI que afetam sessões de chat. Recomenda-se monitorar a nightly build para correções pendentes.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features solicitadas:

1. **Azure Identity Auth** ([#2970](https://github.com/sipeed/picoclaw/issues/2970) → [PR #2971](https://github.com/sipeed/picoclaw/pull/2971)) ✅ Já merged — suporte a auth sem keys secretas
2. **Bangla i18n** ([#2973](https://github.com/sipeed/picoclaw/issues/2973) → [PR #2974](https://github.com/sipeed/picoclaw/pull/2974)) ✅ Já merged
3. **Telegram reply-to-mention** ([#2975](https://github.com/sipeed/picoclaw/pull/2975)) — Novos usuários podem mencionar bot via reply em vez de @mention explícita
4. **QQ channel restart loop fix** ([#2952](https://github.com/sipeed/picoclaw/issues/2952)) — Problema recorrente que precisa ser endereçado no roadmap
5. **Provider/model UX improvements** ([#2952](https://github.com/sipeed/picoclaw/issues/2952)) — Filtro de providers com keys salvas, test connection,一键添加

### Tendências identificadas:
- **Canal Telegram** é o mais ativo em desenvolvimento (rich delivery, reply-to-mention)
- **i18n** continua em expansão (Bangla, Traditional Chinese em PR #2935)
- **Segurança/Enterprise**: Azure Identity supporting authentication patterns corporativas

---

## 7. Resumo de Feedback dos Usuários

### Dores reais identificadas:

| Cenário | Problema | Severidade | Referência |
|---|---|---|---|
| Upgrade para v0.2.9 | Mensagens antigas contaminam novas sessões | 🔴 Alta | [#2972](https://github.com/sipeed/picoclaw/issues/2972) |
| Canal QQ | Loop infinito de restart após reinicialização | 🔴 Alta | [#2952](https://github.com/sipeed/picoclaw/issues/2952) |
| Canal Telegram | Necessidade de @mention explícita em grupos | 🟡 Média | [#2975](https://github.com/sipeed/picoclaw/pull/2975) |
| Android 10 (Xiaomi) | Permissions negadas para storage | 🟢 Baixa | [#2880](https://github.com/sipeed/picoclaw/issues/2880) |
| FreeBSD | Context tokens incorretos no display | 🟡 Média | [#2968](https://github.com/sipeed/picoclaw/issues/2968) |

### Insights de satisfação:
- Usuários estão ativos reportando bugs (7 issues em 24h)
- Demanda por **novas releases oficiais** — a comunidade percepcia a frequência de releases como insuficiente
- **Onboarding UX** precisa melhorar: interface de providers/models confusa para novos usuários

---

## 8. Backlog que Merece Atenção

### Issues sem resposta há muito tempo:

| Issue | Tipo | Idade | Estado | Ação Recomendada |
|---|---|---|---|---|
| [#2856](https://github.com/sipeed/picoclaw/pull/2856) | feat(message) media attachments | ~20 dias stale | Aberta | Revisar e dar feedback ou fechar |
| [#2838](https://github.com/sipeed/picoclaw/pull/2838) | feat(agent) tool policy filters | ~22 dias stale | Aberta | Priorizar — impacto em segurança |
| [#2952](https://github.com/sipeed/picoclaw/issues/2952) | Multi-problema (exec, QQ, UI) | ~4 dias | Aberta (sem resposta) | Atribuir a maintainer |

### PRs dependentes de revisão:

| PR | Tipo | Status | Prioridade |
|---|---|---|---|
| [#2935](https://github.com/sipeed/picoclaw/pull/2935) | docs(i18n) Traditional Chinese | Aberta | 🟡 Média |
| [#2963](https://github.com/sipeed/picoclaw/pull/2963) | Dep: larksuite/oapi-sdk-go v3.7.5→v3.9.3 | Aberta | 🟢 Baixa (auto) |
| [#2962](https://github.com/sipeed/picoclaw/pull/2962) | Dep: anthropic-sdk-go v1.26.0→v1.46.0 | Aberta | 🟢 Baixa (auto) |

---

## Métricas de Saúde do Projeto (2026-05-31)

| Indicador | Valor | Status |
|---|---|---|
| Issues fechadas/hoy | 4/7 | 🟢 Positivo |
| PRs fechadas/hoy | 3/11 | 🟢 Positivo |
| Regressões ativas | 2 | 🟡 Atenção |
| PRs stale | 2 | 🟡 Atenção |
| Release activity | 1 nightly | 🟢 Normal |
| Community engagement | Alta (7 issues, 11 PRs) | 🟢 Muito ativo |

**Veredicto geral:** PicoClaw está em fase de desenvolvimento ativo com boa saúde de contributions. Regressões na v0.2.9 (Web UI, context display) requerem atenção imediata. O backlog stale em features de segurança e media attachments merece priorização para manter momentum da comunidade.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-05-31

## 1. Panorama do Dia

O projeto IronClaw mantém uma atividade intensa no dia de hoje, com **32 PRs atualizados** nas últimas 24h — um dos fluxos de trabalho mais ativos do período. O foco principal permanece na transição para a arquitetura **Reborn**, com múltiplas frentes abertas: autenticação OAuth (GSuite, Notion MCP, GitHub PAT), integrações de produto (Slack adapter), e refinamentos no sistema de triggers e delivery.值得注意的是, nenhuma release foi publicada nas últimas 24h, e há um **bloqueio de publicação no crates.io** que mantém consumidores downstream pinned à versão 0.24.0 enquanto o repositório já atingiu a 0.27.0. O teste E2E noturno falhou, sinalizando potenciais problemas de estabilidade na suíte de testes.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

> ⚠️ **Alerta de Publicação:** O repositório GitHub possui tags até `ironclaw-v0.27.0` (29/abr/2026), mas o [crates.io](https://crates.io/crates/ironclaw) só tem `0.24.0` (31/mar/2026). Consumidores via `cargo add ironclaw` estão pinned a uma versão com 3 releases de defasagem. Isso é crítico para downstream —详见 Issue [#3259](https://github.com/nearai/ironclaw/issues/3259).

| Versão Repo | Versão crates.io | Gap |
|---|---|---|
| v0.27.0 | 0.24.0 | 3 releases |

---

## 3. Progresso do Projeto

O今天是 **21 PRs fechados/merged**, indicando uma sprint produtiva. Abaixo, os destaques:

### PRs Fechados/Merged Hoje

| PR | Tamanho | Escopo | Contribuidor | Destaque |
|---|---|---|---|---|
| [#4258](https://github.com/nearai/ironclaw/pull/4258) | L | host-runtime | core | **Correção crítica:** roteia falhas de dispatch através da disposição do PR #4236 + coerção de containers stringified em oneOf/anyOf. Elimina o caminho legado "RecoveryRequired". |
| [#4228](https://github.com/nearai/ironclaw/pull/4228) | XL | tool/mcp | core | **Port Notion MCP para Reborn:** wiring do runtime MCP mediado pelo host, bundling via catálogo de extensões, expansão para reads, writes, comments, views, teams e users. |
| [#4233](https://github.com/nearai/ironclaw/pull/4233) | XL | dependencies | core | **Migração GitHub WASM → product auth:** adiciona fonte de credenciais runtime account-backed, migra manifesto GitHub WASM para CredentialAccountService. |
| [#4245](https://github.com/nearai/ironclaw/pull/4245) | XL | reborn | core | **Auth HTTP surfaces completas:** manual-token onboarding, account list/select/recovery, refresh e cleanup. Completa a superfície WebUI/CLI/API. |
| [#4246](https://github.com/nearai/ironclaw/pull/4246) | S | dependencies | core | **Migração NEAR AI MCP → product auth:** espelha PR #4233 para o lane MCP. |
| [#4253](https://github.com/nearai/ironclaw/pull/4253) | M | workspace | new | **Patch #10a — Scan de injeção em identity files:** detector read-time para padrões de prompt-injection em `AGENTS.md`, `SOUL.md`, `USER.md`, `IDENTITY.md`. |
| [#4252](https://github.com/nearai/ironclaw/pull/4252) | M | agent | new | **Patch #8 — Nudge de memory_write:** após N iterações sem `memory_write`, injeta mensagem sistêmica para encorajar o agente. |
| [#4251](https://github.com/nearai/ironclaw/pull/4251) | M | agent | new | **Patch #3 — Compaction estruturado:** template de 7 seções (Goal/Constraints/Progress/Decisions/Files/Next Steps/Critical Context) para resumos de contexto. |
| [#4250](https://github.com/nearai/ironclaw/pull/4250) | M | agent | new | **Patch #6 — LLM calls interruptíveis:** injeção de `CancellationToken` em `ChatDelegate` para teardown imediato no `/interrupt`. |
| [#4249](https://github.com/nearai/ironclaw/pull/4249) | XS | docs | core | **Trigger trusted ingress contract:** congelamento de semantics para V1 cron-backed scheduled trigger intake. |
| [#4248](https://github.com/nearai/ironclaw/pull/4248) | XS | docs | core | **Delivery resolution contract:** definição do boundary de candidate selection pelo OutboundPolicyService. |
| [#4247](https://github.com/nearai/ironclaw/pull/4247) | S | docs | core | **Design-only: WebUI v2 auth E2E** sobre #4245. |

### PRs Abertos em Destaque

| PR | Tamanho | Escopo | Contribuidor | Tema |
|---|---|---|---|---|
| [#4257](https://github.com/nearai/ironclaw/pull/4257) | XL | reborn | core | Wire AuthPromptView + OAuth cards (GSuite, Notion, GitHub PAT) |
| [#4254](https://github.com/nearai/ironclaw/pull/4254) | XL | codex | core | Trusted inbound facade para trigger ingress |
| [#4035](https://github.com/nearai/ironclaw/pull/4035) | XL | extensions | regular | **Slack Reborn ProductAdapter core** — primeira fatia revisável |
| [#4230](https://github.com/nearai/ironclaw/pull/4230) | XL | llm | core | Preservar reasoning summaries de providers (OpenAI/Codex/Anthropic) |
| [#4229](https://github.com/nearai/ironclaw/pull/4229) | XL | webui | experienced | GitHub OAuth SSO nativo para WebChat v2 |
| [#4255](https://github.com/nearai/ironclaw/pull/4255) | XL | codex | core | Domain types para outbound delivery resolution |
| [#4256](https://github.com/nearai/ironclaw/pull/4256) | XS | e2e | core | Fixtures OAuth + 3 cenários E2E para #4112 |
| [#4164](https://github.com/nearai/ironclaw/pull/4164) | XS | docs | regular | Plano de execução para ProductWorkflow facade completion |

---

## 4. Temas Quentes da Comunidade

### Issues com Mais Comentários

| Issue | Comentários | 👍 | Tema |
|---|---|---|---|
| [#3259](https://github.com/nearai/ironclaw/issues/3259) | **12** | 0 | **Publicação crates.io defasada** — Downstream pinned a 0.24.0 por CVEs do wasmtime 28.x. Bloqueio crítico de distribuição. |
| [#4112](https://github.com/nearai/ironclaw/issues/4112) | 0 | 0 | Reborn GSuite OAuth E2E — em desenvolvimento ativo, 3 PRs relacionados |

### Análise

- **#3259** é a issue com maior engajamento discursivo (12 comentários), sinalizando frustração real de consumidores externos que não conseguem acessar versões mais recentes via `cargo`. O problema é agravada pela necessidade de atualização do wasmtime por CVEs de segurança — mistura de estabilidade + segurança.
- **#4112** tem zero comentários mas gera 3 PRs simultâneos (#[4257](https://github.com/nearai/ironclaw/pull/4257), #[4256](https://github.com/nearai/ironclaw/pull/4256), #[4247](https://github.com/nearai/ironclaw/pull/4247)), indicando trabalho interno coordenado sem feedback externo ainda.

---

## 5. Bugs e Estabilidade

### Falhas Reportadas

| Severidade | Issue | Descrição |
|---|---|---|
| 🔴 **Crítica** | [#4108](https://github.com/nearai/ironclaw/issues/4108) | **Nightly E2E failed** — Run `26674367334`, commit `749f58441ff43d78c7a307a16c7ec536f440ac18`. Job `Full E2E / E2E (v2-engine)` falhou. Reportado em 2026-05-30 04:35:51 UTC. Investigação pendente. |
| 🟡 **Alta** | [#3259](https://github.com/nearai/ironclaw/issues/3259) | **crates.io defasado + CVEs wasmtime** — Consumidores em produção podem estar vulneráveis a CVEs do wasmtime 28.x por não conseguirem atualizar. |

### Correções Aplicadas

- **#4258** (CLOSED): Corrigiu bug onde arrays JSON stringified em `builtin.http headers` causavam falha terminal do agent loop em vez de surfar erro de ferramenta. Removeu o caminho legado "RecoveryRequired".

### Tendência de Estabilidade

A taxa de PRs fechados (21 de 32 = **65.6%**) é saudável. A presença de 4 patches de estabilidade de agentes ([#4250](https://github.com/nearai/ironclaw/pull/4250), [#4251](https://github.com/nearai/ironclaw/pull/4251), [#4252](https://github.com/nearai/ironclaw/pull/4252), [#4253](https://github.com/nearai/ironclaw/pull/4253)) — todos de contribuidores novos — indica amadurecimento da base de código e abertura a contribuições externas. No entanto, a falha do E2E noturno precisa ser investigada com urgência.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features em Desenvolvimento

| PR | Escopo | Feature | Status |
|---|---|---|---|
| [#4035](https://github.com/nearai/ironclaw/pull/4035) | extensions | **Slack Reborn ProductAdapter** — adapter crate, inbound normalization, outbound reply rendering, auth/egress, webhook runner | OPEN (risk: medium) |
| [#4229](https://github.com/nearai/ironclaw/pull/4229) | webui | **GitHub OAuth SSO nativo** para WebChat v2 via `GitHubProvider` | OPEN |
| [#4230](https://github.com/nearai/ironclaw/pull/4230) | llm | **Preservar reasoning summaries** de OpenAI/Codex/Anthropic sem vazar para tool-call content | OPEN |
| [#4254](https://github.com/nearai/ironclaw/pull/4254) | codex | **Trusted inbound facade** para trigger ingress com idempotência replay-first | OPEN |
| [#4255](https://github.com/nearai/ironclaw/pull/4255) | codex | **Outbound delivery resolution domain types** — DTOs para `CommunicationDeliveryResolutionRequest` e `CommunicationDeliveryIntent` | OPEN |
| [#4164](https://github.com/nearai/ironclaw/pull/4164) | docs | **ProductWorkflow facade completion plan** — execução do #3280 | OPEN |

### Sinais de Roadmap

1. **Ecossistema de product adapters:** Slack (#4035) é o primeiro. Provavelmente Google, Notion e outros seguirão o mesmo padrão de adapter crate.
2. **OAuth completo:** O trabalho em #4112/#4257/#4229 sugere que a próxima versão incluirá OAuth nativo para múltiplos provedores (GSuite, Notion, GitHub PAT).
3. **Interrupção e resiliência:** Os patches #4250–#4252 indicam foco em experiência de usuário durante sessões longas — interrupção responsiva, memory management e context compaction.
4. **Segurança de workspace:** #4253 (prompt injection scan) demonstra atenção crescente à superfície de ataque via identity files.

---

## 7. Resumo de Feedback dos Usuários

### Feedback Explícito

- **#3259 (12 comentários):** Consumidores downstream relatam frustração por não conseguirem atualizar via crates.io. O problema é agravada pela urgência de CVEs de segurança no wasmtime. Demanda clara: **publicar versões atualizadas imediatamente**.

### Feedback Inferido

| Padrão | Evidência | Interpretação |
|---|---|---|
| **Segurança é prioridade** | #4253 (prompt injection), #3259 (CVEs), migração product auth (#4233, #4246) | Usuários e mantenedores estão focados em harden a superfície de ataque |
| **Migração para Reborn é bem-vinda** | 11+ PRs Reborn em paralelo | Arquitetura nova está sendo adotada ativamente pelo time |
| **E2E instável** | #4108 (falha noturna) | Falta de confiança na suíte de testes pode retardar releases |
| **Contribuições externas bem-vindas** | 4 patches de "new" contributors fechados | A comunidade está contribuindo; base de código acessível |

---

## 8. Backlog que Merece Atenção

| Item | Tipo | Idade | Comentários | Prioridade |
|---|---|---|---|---|
| [#3259](https://github.com/nearai/ironclaw/issues/3259) | Issue | ~26 dias (criado 05/mai) | **12** | 🔴 **Urgente** — Bloqueia distribuição de segurança |
| [#4108](https://github.com/nearai/ironclaw/issues/4108) | Issue | ~4 dias | 0 | 🔴 **Urgente** — E2E nightly falhando |
| [#4112](https://github.com/nearai/ironclaw/issues/4112) | Issue | ~4 dias | 0 | 🟡 **Alta** — 3 PRs dependentes |
| [#4035](https://github.com/nearai/ironclaw/pull/4035) | PR | ~6 dias | — | 🟡 **Alta** — Primeiro Slack adapter |
| [#3280](https://github.com/nearai/ironclaw/issues/3280) | Issue | Antiga | — | 🟡 **Alta** — ProductWorkflow facade (plano em #4164) |

### Observação sobre Backlog

- Issues [#3259](https://github.com/nearai/ironclaw/issues/3259) e [#4108](https://github.com/nearai/ironclaw/issues/4108) são as mais críticas e ambas estão **sem resposta resolvedora** — representam bloqueios claros para o próximo ciclo de release.
- A issue #3280 (ProductWorkflow facade) permanece aberta há tempo indefinido, com o plano de execução documentado em [#4164](https://github.com/nearai/ironclaw/pull/4164) como única movimentação.

---

## Métricas Resumidas do

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>


# Relatório do Projeto CoPaw — 2026-05-31

## 1. Panorama do Dia

O projeto CoPaw apresenta **alta atividade comunitária** em 31 de maio de 2026, com 12 issues e 4 PRs atualizados nas últimas 24h, **nenhum merged ou release** registrado. O estado geral reflete um projeto em fase ativa de desenvolvimento e refinamento, com forte foco em **estabilidade (bugs de interface no Windows)** e **experiência do usuário desktop**. A comunidade demonstra interesse em features de produtividade inspirada em ferramentas concorrentes (Trae, Hermes Agent), sugerindo um roadmap orientado por feedback competitivo.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.** O projeto não publicou novas versões desde o período anterior.

> **Nota:** A versão mais recente упоминаada nos issues é a **v1.1.9** (Desktop Tauri), sugerindo que o próximo release pode estar em preparação para incorporar correções de bugs pendentes.

---

## 3. Progresso do Projeto

**4 PRs abertos** (nenhum merged/fechado nas últimas 24h):

| PR | Autor | Tipo | Descrição |
|---|---|---|---|
| [#4689](https://github.com/agentscope-ai/CoPaw/pull/4689) | leoleils | Feature | Permite que parâmetros não-padrão de providers (ex: `enable_search` do DashScope) sejam roteados para `extra_body`, resolvendo rejeição silenciosa pelo SDK OpenAI |
| [#4827](https://github.com/agentscope-ai/CoPaw/pull/4827) | szetohoyan | Bug Fix | Corrige `get_model_max_input_length` que retornava valor fallback (131072) em vez do valor configurado pelo usuário em `active_model.json`, afetando o limiar de compressão de contexto |
| [#4821](https://github.com/agentscope-ai/CoPaw/pull/4821) | szetohoyan | Feature | Adiciona controle de compartilhamento de sessão em grupo para o canal Feishu (Lark) — membros compartilham ou têm sessões independentes |
| [#4822](https://github.com/agentscope-ai/CoPaw/pull/4822) | jc200808 | Bug Fix | Corrige tarefas de cron agents com `share_session` produzindo traces vazios |

**Destaque:** O PR #4689 representa um avanço importante na compatibilidade com provedores não-padrão, enquanto #4827 corrige um bug silencioso que impactava a experiência de contexto em modelos configurados.

---

## 4. Temas Quentes da Comunidade

Issues com maior engajamento (comentários/reações):

| Issue | Tipo | Título | Comentários | 👍 |
|---|---|---|---|---|
| [#4789](https://github.com/agentscope-ai/QwenPaw/issues/4789) | Enhancement | Feature similar ao Trae: delete/rollback por conversa | 7 | 1 |
| [#4123](https://github.com/agentscope-ai/QwenPaw/issues/4123) | Bug | Windows: cmd window flash | 7 | 0 |
| [#4408](https://github.com/agentscope-ai/QwenPaw/issues/4408) | Enhancement | Pasta unificada `.qwenpaw` para arquivos de trabalho | 7 | 0 |
| [#4826](https://github.com/agentscope-ai/QwenPaw/issues/4826) | Feature | Três modos de processamento de mensagens | 2 | 0 |

**Análise:** O tema mais quente é a **_FEATURE de gerenciamento de conversas por sessão** (#4789), inspirada no Trae, que permite delete/rollback individual por conversa — demanda com 7 comentários e 1 reação. Há também forte interesse em **melhorias na organização de workspace** (#4408) e **interatividade no Desktop** (#4826).

---

## 5. Bugs e Estabilidade

**7 issues de bugs reportados (6 abertas + 1 PR com fix pendente):**

### Críticos
| Issue | Severidade | Descrição |
|---|---|---|
| [#4454](https://github.com/agentscope-ai/QwenPaw/issues/4454) | **Crítica** | `/mission` command causa freeze completo do Console em v1.1.7 — interface non-responsiva mesmo após limpar diretório de missões |

### Alta Prioridade (Windows/Shell)
| Issue | Severidade | Descrição |
|---|---|---|
| [#4123](https://github.com/agentscope-ai/QwenPaw/issues/4123) | Alta | execute_shell_command abre janela cmd em cada chamada no Windows (7 comentários) |
| [#4829](https://github.com/agentscope-ai/QwenPaw/issues/4829) | Alta | Mesmo bug confirmado no Desktop Tauri v1.1.9 — múltiplas janelas cmd piscando |
| [#4828](https://github.com/agentscope-ai/QwenPaw/issues/4828) | Alta | Bug replicado em Electron e Tauri no Windows 10/11 |
| [#4824](https://github.com/agentscope-ai/QwenPaw/issues/4824) | Alta | Protocol mismatch ACP com Claude Code — `protocolVersion` esperando number, recebido string |

### Outros
| Issue | Severidade | Descrição |
|---|---|---|
| [#4827](https://github.com/agentscope-ai/CoPaw/pull/4827) (PR) | Média | `get_model_max_input_length` retornando valor errado (fix pendente) |

**Padrão identificado:** 3 issues duplicadas (#4123, #4828, #4829) sobre o mesmo bug de cmd window flashing no Windows — recomenda-se consolidação.

---

## 6. Pedidos de Features e Sinais de Roadmap

**5 novas features identificadas:**

| Issue | Categoria | Descrição | Potencial Impacto |
|---|---|---|---|
| [#4826](https://github.com/agentscope-ai/QwenPaw/issues/4826) | UX/Desktop | 3 modos de обработки mensagens (interromper, aguardar, inserir) | Alto — experiência multi-tarefa |
| [#4830](https://github.com/agentscope-ai/QwenPaw/issues/4830) | UX/Desktop | Caminhos locais clicáveis no Desktop — abre diretório | Alto — produtividade |
| [#4831](https://github.com/agentscope-ai/QwenPaw/issues/4831) | DevOps/Docker | Pré-instalar psycopg2-binary, pytz, mootdx na imagem Docker | Médio — استقرار de agents |
| [#4825](https://github.com/agentscope-ai/QwenPaw/issues/4825) | Dev/Review | Diff-view para alterações de arquivos | Alto — code review nativo |
| [#4823](https://github.com/agentscope-ai/QwenPaw/issues/4823) | Dev/Indexing | Índice clicável para arquivos e código na conversa | Médio — navegação |

**Sinal de tendência:** A comunidade demonstra forte demanda por **funcionalidades de desktop** (caminhos clicáveis, modos de mensagem) e **features de referência a código** (diff-view, index), sugerindo evolução do produto para um IDE colaborativo.

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

1. **Experiência Windows degradada** — Janelas cmd piscando a cada comando shell afasta usuários; impacta produtividade em workflows com múltiplos comandos.
2. **Gestão de conversas limitada** — Ausência de delete/rollback por conversa (comparado ao Trae) gera frustração em usuários que precisam reverter mudanças.
3. **Fragilidade de ambiente Docker** — Pacotes Python instalados manualmente se perdem após rebuild do container, quebrando agents de produção.
4. **Interface não-clicável para paths** — Fluxo manual de copiar路径 para explorar arquivos prejudica UX desktop.

### Cenários de Uso Destacados
- **Agents de mercado (A股)** usando mootdx para行情 em tempo real — precisam de ambiente Docker persistente.
- **Desenvolvedores Windows** executando scripts de build/ deploy via `execute_shell_command`.
- **Uso grupal via Feishu** — compartilhamento de sessão em grupo sendo implementado (#4821).

### Satisfação/Insatisfação
- **Insatisfeitos:** Usuários Windows (bugs de UI), usuários de produção (instabilidade Docker), desenvolvedores comparando com Trae.
- **Satisfeitos:** Usuários de features implementadas (v1.1.9), contribuidores ativos (4 PRs em 24h).

---

## 8. Backlog que Merece Atenção

| Issue | Idade | Status | Motivo da Atenção |
|---|---|---|---|
| [#4123](https://github.com/agentscope-ai/QwenPaw/issues/4123) | ~23 dias | Aberta | Bug crítico de UX Windows sem fix, 7 comentários, 3 duplicates |
| [#4408](https://github.com/agentscope-ai/QwenPaw/issues/4408) | ~16 dias | Aberta | Feature de organização (`.qwenpaw`) sem resposta oficial |
| [#4454](https://github.com/agentscope-ai/QwenPaw/issues/4454) | ~14 dias | Aberta | Freeze completo do `/mission` — bug crítico sem acknowledgment |

**Recomendações:**
1. **Consolidar bugs duplicados** de cmd window (#4123, #4828, #4829) em uma única issue.
2. **Priorizar fix do Windows shell** — impacto amplo em experiência desktop.
3. **Responder à issue #4408** sobre organização de workspace — silêncio pode desmotivar contribuidores.
4. **Acknowledge bug #4454** (/mission freeze) — demonstra atenção a crashes críticos.

---

**Dados extraídos em:** 2026-05-31 00:00 UTC  
**Fontes:** GitHub API — agentscope-ai/CoPaw & agentscope-ai/QwenPaw  
**Total de eventos analisados:** 16 (12 issues + 4 PRs)

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-05-31

## 1. Panorama do Dia

O ecossistema ZeroClaw manteve um ritmo intenso de atividade nas últimas 24 horas, com **26 issues atualizadas** e **50 PRs atualizadas**, sinalizando uma sprint bem movimentada. A atividade de PRs se destaca: 30 merges/fechamentos contra apenas 20 aberturas, indicando foco em consolidação de contribuições pendentes. No фронт de releases, não houve novas versões — o projeto permanece em modo de preparação para as里程碑 v0.7.8 e v0.8.1. A carga de bugs é moderada-alta, com 6 issues de severidade S1-S2 reportadas nas últimas 24h, concentradas em canais (Telegram, Slack), providers (DeepSeek, Kimi, zai-cn) e runtime. A cadeia de 24 PRs de migração para `AllowlistAspect` foi completada com sucesso, representando um marco arquitetural significativo na padronização de controle de acesso entre canais.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto encontra-se em período pré-release, com duas linhas de desenvolvimento ativas:
- **v0.7.8** — foca em polish desktop/Tauri, correções de build Windows e melhorias de UX do onboarding.
- **v0.8.1** — consolidação de integrações, canais, providers e ferramentas.

A documentação encontra-se desalinhada com a última release oficial (v0.7.5), conforme reportado em [#6997](https://github.com/zeroclaw-labs/zeroclaw/issues/6997), gerando risco de experiência do usuário para novos adotantes.

---

## 3. Progresso do Projeto

### PRs Fechadas/Merged (últimas 24h)

| PR | Descrição | Impacto |
|----|-----------|---------|
| [#6799](https://github.com/zeroclaw-labs/zeroclaw/pull/6799) | **Chain tip da migração AllowlistAspect (24 PRs)** — Substitui predicates `is_*_allowed` em Signal e outros 6 canais por `aspect_std::AllowlistAspect` padronizado | **Arquitetural** — Padroniza controle de acesso em todo o codebase |
| [#6800](https://github.com/zeroclaw-labs/zeroclaw/pull/6800) | iMessage: migração `is_contact_allowed` → AllowlistAspect | **Arquitetural** — Completa arco de migração de canais |
| [#6778](https://github.com/zeroclaw-labs/zeroclaw/pull/6778) | Telegram: migração `is_user_allowed` → AllowlistAspect | **Consistência** — Alinha Telegram com padrão |
| [#6782](https://github.com/zeroclaw-labs/zeroclaw/pull/6782) | WhatsApp Web: migração `is_number_allowed` → AllowlistAspect | **Consistência** |
| [#6781](https://github.com/zeroclaw-labs/zeroclaw/pull/6781) | Gmail Push: migração `is_sender_allowed` → AllowlistAspect | **Consistência** |
| [#6780](https://github.com/zeroclaw-labs/zeroclaw/pull/6780) | Email: migração `is_sender_allowed` → AllowlistAspect | **Consistência** |
| [#6793](https://github.com/zeroclaw-labs/zeroclaw/pull/6793) | Nextcloud Talk: migração `is_user_allowed` → AllowlistAspect | **Consistência** |

### PRs Abertas em Destaque

| PR | Descrição | Tamanho | Risco |
|----|-----------|---------|-------|
| [#6848](https://github.com/zeroclaw-labs/zeroclaw/pull/6848) | **feat(integration): TUI, RPC socket transport, DenyWithEdit approval, beta-2** | XL | High |
| [#6924](https://github.com/zeroclaw-labs/zeroclaw/pull/6924) | **feat(skills): scoped tool elevation para built-in e MCP tools** | L | High |
| [#7021](https://github.com/zeroclaw-labs/zeroclaw/pull/7021) | **feat(channels/email): XOAUTH2 auth, observer mode, IMAP read-only** | L | High |
| [#7004](https://github.com/zeroclaw-labs/zeroclaw/pull/7004) | **feat(tools): encoding opcional (base64) para file_read/file_write** | S | High |
| [#6968](https://github.com/zeroclaw-labs/zeroclaw/pull/6968) | **feat(tts): uri e response_format configuráveis para OpenAI provider** | S | Medium |
| [#7023](https://github.com/zeroclaw-labs/zeroclaw/pull/7023) | **feat(docs): versioned documentation deployment com version selector** | M | High |
| [#7002](https://github.com/zeroclaw-labs/zeroclaw/pull/7002) | **fix(channels/tts): bind TTS manager ao agent dono do canal** | XS | Medium |
| [#7000](https://github.com/zeroclaw-labs/zeroclaw/pull/7000) | **fix(channels/telegram): wire transcription_provider alias** | XS | Medium |

---

## 4. Temas Quentes da Comunidade

### Issues/PRs com Maior Engajamento

**#6233 — Bug: `chat_messages_to_native()` drop `reasoning_content` (DeepSeek)** | 8 comentários
- Severidade: S2 (degraded behavior)
- Status: Closed
- **Análise:** Após o PR #6107 (que corrigiu captura de `reasoning_content` em streaming), conversas multi-turno com DeepSeek V4 ainda falham no 2º+ turno com erro 400 Bad Request. A comunidade demonstrou interesse significativo (8 comentários), indicando que é um cenário de uso real afetado.

**#3090 — Feature: Wecom(WxWork) channel support** | 5 comentários
- Severidade: S2
- Status: Closed
- **Análise:** Demanda por integração com WeCom, alternativa corporativa ao Slack/Teams. A issue cita que openclaw já possui extensões relacionadas, sugerindo viabilidade técnica.

**#6269 — Context compressor drop `reasoning_content`** | 4 comentários
- Severidade: S2
- Status: Closed
- **Análise:** Problema correlato ao #6233 — quando o histórico de conversa cresce o suficiente para acionar compressão proativa de contexto, o `reasoning_content` é perdido. Afeta providers que dependem desse campo para reconstrução de对话.

**#5287 — Feature: Local-First Mode para Small Models** | 2 👍 + 3 comentários
- Severidade: S1 (broken functionality)
- Status: Open, Accepted
- **Análise:** Feature com maior validação da comunidade (2 👍). Resolve dor real de usuários local-first: prompt bloat, fallback parsing permissivo, e vazamento de instruções internas para usuários. Prioridade P2 mas risco alto.

**#6969 — RFC: unified output routing model** | 2 comentários
- **Análise:** Migrante do Letta propõe controle granular sobre como e onde respostas são entregues (via instrução explícita ou preferência persistente). Demonstra atraía de novos usuários e necessidade de parity feature.

**#6074 — Audit: 153 commits perdidos em bulk revert c3ff635** | 2 comentários
- **Análise:** Após reverter 153 commits, há necessidade de rastreamento para recuperação. Este é um item técnico de dívida técnica que merece atenção para evitar perda de trabalho acumulado.

---

## 5. Bugs e Estabilidade

### S1 — Funcionalidade Quebrada (Workflow Blocked)

| Issue | Componente | Descrição | Link |
|-------|------------|-----------|------|
| #7022 | provider (Kimi) | `kimi-k2.6` falha com 400 invalid temperature — compatible.rs sempre envia baseline 0.7 | [Issue #7022](https://github.com/zeroclaw-labs/zeroclaw/issues/7022) |
| #6992 | channel (Slack) | Slack Socket Mode rejeita todas mensagens como "unauthorized user" | [Issue #6992](https://github.com/zeroclaw-labs/zeroclaw/issues/6992) |
| #6999 | channel (Telegram) | Transcrição de voz Telegram sempre falha — canal nunca faz wire do `transcription_provider` | [Issue #6999](https://github.com/zeroclaw-labs/zeroclaw/issues/6999) |
| #6964 | tooling/CI (Windows) | Build desktop Windows falha com MANIFEST resource duplicado (CVT1100/LNK1123) | [Issue #6964](https://github.com/zeroclaw-labs/zeroclaw/issues/6964) |
| #6997 | docs | Versão da documentação não corresponde à última release (v0.7.5) | [Issue #6997](https://github.com/zeroclaw-labs/zeroclaw/issues/6997) |

### S2 — Comportamento Degradado

| Issue | Componente | Descrição | Link |
|-------|------------|-----------|------|
| #6991 | runtime | `tools_to_openai_format` ignora Risk Profile e Tool Filter em v0.8.0-beta-1 | [Issue #6991](https://github.com/zeroclaw-labs/zeroclaw/issues/6991) |
| #6998 | memory/provider | RFC: Schema-Guided Reasoning (SGR) — structured output cross-provider | [Issue #6998](https://github.com/zeroclaw-labs/zeroclaw/issues/6998) |
| #7001 | channel (Telegram) | TTS voice replies resolvem `tts_provider` do agent errado em configs multi-agent | [Issue #7001](https://github.com/zeroclaw-labs/zeroclaw/issues/7001) |
| #6995 | channel (CLI) | Backspace deleta byte-a-byte ao invés de character (UTF-8 CJK precisa 3 backspaces) | [Issue #6995](https://github.com/zeroclaw-labs/zeroclaw/issues/6995) |

### S3 — Problemas Menores

| Issue | Componente | Descrição | Link |
|-------|------------|-----------|------|
| #7005 | runtime/onboard | Onboarding wizard ainda tem strings hardcoded que bypass Fluent/i18n | [Issue #7005](https://github.com/zeroclaw-labs/zeroclaw/issues/7005) |
| #6990 | tool (i18n) | `file_download` tool strings não estão sob fl!() / Fluent contract | [Issue #6990](https://github.com/zeroclaw-labs/zeroclaw/issues/6990) |

**Nota:** O PR [#7002](https://github.com/zeroclaw-labs/zeroclaw/pull/7002) já propõe correção para o bug de TTS em multi-agent, e [#7000](https://github.com/zeroclaw-labs/zeroclaw/pull/7000) corrige o bug de transcrição Telegram. Ambos estão em revisão.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features em RFC/Proposta

| Issue | Descrição | Sinais de Roadmap |
|-------|-----------|------------------|
| [#6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) | **RFC: Route scheduled tasks through orchestrator message pipeline** | Indica que o scheduler atual (cron) bypassa o pipeline de mensagens, causando cluster de bugs relacionados (#6037, #6105, #6648, #6632, #6686). Provável rearchitecting do sistema de tarefas agendadas. |
| [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) | **RFC: Granular sandbox policy — filesystem e network restrictions** | Visa adicionar controle configurável sobre sandbox em 3 backends (Landlock, Bubblewrap, Seatbelt). Alinhado com tendências de segurança em agentes IA. |
| [#6998](https://github.com/zeroclaw-labs/zeroclaw/issues/6998) | **RFC: Schema-Guided Reasoning (SGR)** | Generaliza structured output cross-provider. Suprime #4760. Prior art de vamplabAI e Abdullin. |
| [#6969](https://github.com/zeroclaw-labs/zeroclaw/issues/6969) | **RFC: Unified output routing model** | Controle granular de routing de saída por peer (modality preference + `send_via` tool). Migrante do Letta evidencia gap competitivo. |

### Features Aceitas e em Progresso

| Issue | Descrição | Prioridade | Link |
|-------|-----------|------------|------|
| #5287 | Local-First Mode para Small Models (compact prompting, strict parser, no prompt-leakage) | P2, High | [Issue #5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) |
| #6253 | Track: zeroclaw skills support e UX (v0.7.6) | P1 | [Issue #6253](https://github.com/zeroclaw-labs/zeroclaw/issues/6253) |
| #6989 |

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*