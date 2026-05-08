# Resumo diário do ecossistema de agentes de IA 2026-05-09

> Issues: 1 | PRs: 5 | Projetos cobertos: 7 | Gerado em: 2026-05-08 20:54 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório do Projeto NullClaw — 2026-05-09

---

## 1. Panorama do dia

NullClaw manteve alta atividade de desenvolvimento em 2026-05-08, com **5 PRs atualizados** e **1 issue resolvida**. O foco principal foi em **infraestrutura de CI/CD** — com dois PRs do colaborador DonPrus habilitando publicação automática de nightly builds e forzando execuções agendadas — e **experiência do desenvolvedor**, através da adição de documentação para setup do Zig (resolvendo issue #820) e lançamento de um adapter nativo para Agent Client Protocol (ACP). Um PR de hackathon (Data Governance Layer) permanece em revisão. O projeto demonstra saúde técnica robusta, sem报告 de bugs ou regressões. Nenhuma release formal foi publicada no período.

---

## 2. Lançamentos

**Nenhum novo lançamento registrado nas últimas 24h.**

O trabalho de CI em #899 e #898 prepara o terreno para um pipeline de **nightly prereleases** automatizado, que poderá estar disponível em breve como marco do roadmap de entregas frequentes.

---

## 3. Progresso do projeto

| PR | Título | Status | Autor | Impacto |
|---|---|---|---|---|
| [#896](https://github.com/nullclaw/nullclaw/pull/896) | Add native ACP stdio adapter | ✅ Closed | DonPrus | Integração nativa do protocolo ACP (JSON-RPC over stdio) dentro do binário principal, cobrindo init, session, prompt e cancel. |
| [#899](https://github.com/nullclaw/nullclaw/pull/899) | ci: publish nightly prerelease | ✅ Closed | DonPrus | Habilita publicação automática de prereleases nightly com título prefixado "NullClaw Nightly". |
| [#898](https://github.com/nullclaw/nullclaw/pull/898) | ci: force scheduled nightly builds | ✅ Closed | DonPrus | Garante que builds agendados não sejam deduplicados, forçando execução diária. |
| [#897](https://github.com/nullclaw/nullclaw/pull/897) | chore(docs): Add docs for quick zig setup | ✅ Closed | kunalk16 | Documentação de instalação do Zig em Debian — fecha issue #820. |

**Destaque:** A entrega do adapter ACP (#896) representa um avanço significativo em interoperabilidade com agentes externos via protocolo stdio, consolidando NullClaw como plataforma agnóstica de agentes.

---

## 4. Temas quentes da comunidade

**Issue em destaque:**

- **[#820 — [documentation] How to install Zig on Debian?](https://github.com/nullclaw/nullclaw/issues/820)** (CLOSED)
  - **Autor:** eabase | **Comentários:** 5 | **Reações:** 0
  - **Duração:** 24 dias (criado em 2026-04-14, resolvido em 2026-05-08)
  - **Análise:** Issue com engajamento moderado (5 comentários) demonstra demanda por documentação mais acessível para setup de ferramentas de build. A ausência de reações sugere que a comunidade valorizou mais a resolução do que a upvoting explícito.

**PR em destaque:**

- **[#885 — [hackathon] feat(memory): Add NullClaw Data Governance Layer](https://github.com/nullclaw/nullclaw/pull/885)** (OPEN)
  - **Autor:** sleep3r | **Comentários:** undefined | **Reações:** 0
  - **Análise:** PR draft preparado por equipe de 3 pessoas para hackathon WB × OpenSource. Sinaliza interesse da comunidade em funcionalidades de governança de dados dentro de NullClaw — área estratégica para adoção corporativa.

---

## 5. Bugs e estabilidade

**Nenhum bug ou regressão reportado nas últimas 24h.**

O fluxo de CI aprimorado (#898, #899) fortalece a estabilidade ao garantir execuções de teste diárias consistentes e publicação verificável de nightly builds.

---

## 6. Pedidos de features e sinais de roadmap

**Feature em desenvolvimento:**

- **[#885 — NullClaw Data Governance Layer](https://github.com/nullclaw/nullclaw/pull/885)** (OPEN)
  - Proposta de camada de governança de dados para NullClaw
  - Equipe de 3 pessoas (hackathon WB × OpenSource)
  - Draft PR — aguardando feedback dos mantenedores

**Sinal de roadmap:** A combinação de ACP stdio adapter (#896) + Data Governance Layer (#885) sugere que NullClaw está convergindo para uma arquitetura de **agente personalizável com segurança corporativa**, posicionando-se além de um simples CLI.

---

## 7. Resumo de feedback dos usuários

**Dores identificadas:**

1. **Onboarding técnico** — Issue #820 revela que a instalação do Zig (necessário para build) não é trivial em distribuições Linux comuns. Documentação adicionada em #897 mitiga parcialmente.
2. **Visibilidade de builds** — A necessidade de forçar builds agendados (#898) sugere frustração prévia com builds noturnos silenciosos ou invisíveis.

**Satisfação implícita:**
- Resolução de issue com 24 dias de vida demonstra engajamento da comunidade (5 comentários) e resposta dos mantenedores.
- PR #896 (ACP adapter) sem necessidade de revisões prolongadas — indica alinhamento com arquitetura existente.

---

## 8. Backlog que merece atenção

| Item | Tipo | Autor | Criado | Status | Observação |
|---|---|---|---|---|---|
| [#885](https://github.com/nullclaw/nullclaw/pull/885) | PR (Draft) | sleep3r | 2026-05-04 | OPEN | Feature de governança de dados — potencial estratégico, precisa de review dos mantenedores. |
| [#820](https://github.com/nullclaw/nullclaw/issues/820) | Issue | eabase | 2026-04-14 | CLOSED ✅ | Resolvida com #897 — sem ações pendentes. |

**Recomendação:** Priorizar review de #885 para capitalizar momentum do hackathon e manter engajamento dos contribuidores externos.

---

## Métricas consolidadas (2026-05-08)

| Indicador | Valor |
|---|---|
| Issues fechadas | 1 |
| PRs abertos | 1 |
| PRs merged/fechados | 4 |
| Releases | 0 |
| Atividade total de PRs | 5 |
| Bugs críticos | 0 |
| PRs aguardando review | 1 |

**Veredicto:** Projeto em **saúde técnica excelente**. Atividade de CI/CD madura, contributors ativos (DonPrus com múltiplas contribuições), e proposta de feature de governança indica evolução para mercado enterprise. Recomenda-se atenção ao PR #885 para manter ciclo de feedback curto com comunidade.

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo — Ecossistema Open Source de Agentes de IA

**Data de referência:** 2026-05-09
**Projetos analisados:** NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw, ZeroClaw

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **alta atividade agregada** em 2026-05-09, com mais de 200 PRs atualizados e 7 projetos simultaneamente em desenvolvimento ativo. A maioria dos projetos não publicou releases formais no período, optando por ciclos de **nightly builds** ou releases beta, sinalizando maturidade inicial ainda em fase de estabilização. Os temas dominantes são: **estabilidade multi-canal** (Telegram, WhatsApp, Feishu, Matrix), **segurança e governança** (TOTP gates, approval managers, isolamento de workspaces), e **interopérabilidade** via protocolos como ACP (Agent Client Protocol) e stdio adapters. A fragmentação do mercado é evidente: cada projeto adota estratégias distintas de diferenciação, desde foco em CI/CD robusto (NullClaw) até suporte nativo a desktop (ZeroClaw) ou arquiteturas de loop de agentes (IronClaw). O ecossistema demonstra demanda corporativa crescente, evidenciada por issues sobre multi-tenant isolation, OAuth integration e deployments em Raspberry Pi.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | PRs Merged | Releases | Saúde |
|---------|:-----------:|:---------:|:----------:|:--------:|:-----:|
| **NullClaw** | 1 | 5 | 4 | 0 | 🟢 Excelente |
| **NanoBot** | 11 | 22 | 14 | 0 | 🟢 Boa |
| **Hermes Agent** | 50 | 50 | 3 | 0 | 🔴 Crítica |
| **PicoClaw** | 22 | 45 | 19 | 1 nightly | 🟢 Boa |
| **IronClaw** | 7 | 46 | 3+ | 1 (v0.28.0) | 🟡 Em progresso |
| **CoPaw** | 36 | 36 | 21 | 1 beta | 🟡 Em progresso |
| **ZeroClaw** | 21 | 45 | 5+ | 1 (v0.7.5) | 🟡 Regressões |

**Análise de volume:** Hermes Agent lidera em volume absoluto (50 issues + 50 PRs), mas a proporção de merges (3/50 = 6%) indica gargalo de review ou triagem. NanoBot (64% merge rate) e PicoClaw (42%) demonstram ciclos de contribuição mais saudáveis. IronClaw, apesar do volume de PRs (46), concentrou merges em 3 PRs críticos (Reborn MVP, secrets, isolation).

**Ritmo de releases:** Três projetos publicaram versões no período (IronClaw v0.28.0, CoPaw v1.1.6-beta.1, ZeroClaw v0.7.5), indicando estratégia de **rolling releases** em vez de versionamento semântico tradicional. NullClaw e Hermes Agent dependem exclusivamente de builds noturnos.

---

## 3. Posicionamento do Projeto Principal (NullClaw)

**NullClaw** foi definido como referência principal no escopo desta análise, posicionando-se como projeto de **infraestrutura agnóstica de agentes**.

### Vantagens Competitivas

| Dimensão | NullClaw vs. Pares |
|----------|---------------------|
| **Arquitetura** | ACP stdio adapter nativo (#896) — único projeto com integração stdio-agnóstica |
| **CI/CD** | Pipeline nightly automatizado (#898, #899) — maturidade superior em DevOps |
| **Segurança** | Foco em governança corporativa (Data Governance Layer draft) |
| **Comunidade** | DonPrus com contribuições concentradas (4/5 PRs) — consistencia de authorship |
| **Documentação** | Setup Zig documentado — mitiga onboarding técnico |

### Diferenças Técnicas

- **Linguagem:** Não especificada nos dados, mas ecossistema sugere Rust/Go (padrão para ferramentas CLI de alta performance)
- **Protocolo:** Suporte nativo a ACP (Agent Client Protocol), diferenciando-se de projetos que usam APIs REST proprietárias
- **Releases:** Sem releases formais — estratégia de nightly-only contrasta com IronClaw/ZeroClaw que investem em versionamento semântico

### Limitações Identificadas

- Comunidade menor em volume absoluto (5 PRs vs. 45-50 em projetos maiores)
- Sem features de multi-canal documentadas (Telegram, WhatsApp, Feishu)
- Data Governance Layer ainda em draft — ROI corporativo não validado

**Veredicto:** NullClaw posiciona-se como **projeto de plataforma** (infraestrutura agnóstica), enquanto NanoBot e Hermes Agent focam em **produtos finais** (agentes prontos para uso multi-canal).

---

## 4. Focos Técnicos Compartilhados

### 4.1 Estabilidade Multi-Canal

| Projeto | Canais Problema | Severidade |
|---------|-----------------|:----------:|
| **NanoBot** | Feishu, WeChat, WhatsApp, Matrix | Alta (loops infinitos, silent drops) |
| **Hermes Agent** | Telegram (API 10.0) | P1 (workflow blocked) |
| **PicoClaw** | WhatsApp (LID migration), Feishu | Alta |
| **ZeroClaw** | WhatsApp Web (protocol bump), Matrix | S1 (workflow blocked) |
| **CoPaw** | WeChat, DingTalk | Alta (race conditions) |

**Conclusão:** A fragmentação de integrações com plataformas de mensagem (especialmente WhatsApp e Feishu) é o **problema #1 do ecossistema**. Cada bump de protocolo em сторонних APIs gera regressões em cascata.

### 4.2 Segurança e Governança

| Projeto | Feature | Status |
|---------|---------|:------:|
| **NullClaw** | Data Governance Layer | Draft (#885) |
| **IronClaw** | Segredos encriptados + CredentialSession | Merged (#3335) |
| **IronClaw** | Isolamento multi-tenant | Merged (#3374) |
| **ZeroClaw** | TOTP gate para comandos destrutivos | Needs author (#5779) |
| **ZeroClaw** | ApprovalManager bypass (security) | In progress (#6207) |
| **Hermes Agent** | Política de auto-improvement write ops | P3 (#19324) |

**Conclusão:** Governança corporativa é prioridade emergente. IronClaw lidera em implementação (credentials + isolation já merged), enquanto NullClaw e Hermes estão em estágios conception/design.

### 4.3 Multimodalidade

| Projeto | Feature | Progresso |
|---------|---------|:---------:|
| **PicoClaw** | Audio input nativo (Gemini 1.5) | PR aberto (#2626) |
| **PicoClaw** | Transcrição voz Groq Whisper | PR aberto (#2828) |
| **PicoClaw** | AWS Bedrock Streaming | PR aberto (#2645) |
| **IronClaw** | Attachments/imagens | PRs abertos |
| **NanoBot** | Geração de imagens | Merged (#3695) |

**Conclusão:** Multimodalidade (audio + imagem + streaming) é **tendência clara**, com PicoClaw liderando em diversidade de inputs. Text-only agents (NullClaw, Hermes Agent base) enfrentam pressão para adicionar suporte.

### 4.4 Infraestrutura de Providers

| Projeto | Problema | Severidade |
|---------|----------|:----------:|
| **ZeroClaw** | Fallback providers não herdam credenciais | S0 (critical) |
| **NanoBot** | Model presets + failover | PR aberto (#3696) |
| **NullClaw** | ACP adapter para providers externos | Merged (#896) |
| **CoPaw** | Aliyun token plan provider | Merged (#4122) |
| **PicoClaw** | LM Studio easy connect | Issue aberta (#28) |
| **Hermes Agent** | Local brain layer (hybrid local/cloud) | Feature request (#21992) |

**Conclusão:** A arquitetura de providers é **fonte de bugs e complexidade** em todos os projetos. Fallback failures, credentials inheritance e multi-provider management requerem refatorações profundas (cf. ZeroClaw issue #5937 — 8 comentários, S2 blocked).

---

## 5. Análise de Diferenciação

### 5.1 Por Público-Alvo

| Segmento | Projetos Líderes | Características |
|----------|------------------|------------------|
| **Desenvolvedores/CLI power users** | NullClaw, IronClaw | Foco em DX, adapters, loop frameworks |
| **Usuários finais multi-canal** | NanoBot, CoPaw | Integrações Telegram/WhatsApp/Feishu prontas |
| **Enterprise/Corporate** | Hermes Agent, ZeroClaw | SSO, OAuth, multi-tenant, security gates |
| **Edge/Embedded** | PicoClaw | Raspberry Pi, Android, builds ARM |
| **Multi-modal creators** | PicoClaw, IronClaw | Audio, imagem, attachments |

### 5.2 Por Arquitetura

```
NullClaw     → [ ACP stdio adapter ] → Agnóstico, exportável
NanoBot      → [ WebUI + multi-channel ] → Pronto para uso
Hermes Agent → [ Dashboard + cron ] → Servidor centralizado
PicoClaw     → [ Provider adapters ] → Plugin-based
IronClaw     → [ Reborn loop ] → Framework extensível
CoPaw        → [ Console + agents ] → Local-first
ZeroClaw     → [ Onboarding + CRUD ] → Desktop-first
```

### 5.3 Diferenciadores Únicos

| Projeto | Diferenciador | Estratégia |
|---------|---------------|------------|
| **NullClaw** | ACP nativo | Ser o "Linux" de protocolos de agentes |
| **NanoBot** | Loops de ferramentas corrigidos | Estabilidade como feature |
| **Hermes Agent** | Kanban/Codex observability | Ciclo de desenvolvimento integrado |
| **PicoClaw** | MQTT + Feishu + LM Studio | Plataformas alternativas |
| **IronClaw** | Reborn loop MVP | Próxima-gen agent architecture |
| **CoPaw** | Conda packaging + Windows diagnostics | Empoderar Windows developers |
| **ZeroClaw** | Onboarding in-browser + TOTP gates | Zero-fricção + segurança |

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração

| Projeto | PRs/Issues Ratio | Velocidade |
|---------|:----------------:|:----------:|
| **NanoBot** | 22:11 (2:1) | 🔥 Muito alta |
| **PicoClaw** | 45:22 (2:1) | 🔥 Muito alta |
| **CoPaw** | 36:36 (1:1) | 🔥 Alta |
| **ZeroClaw** | 45:21 (2:1) | 🔥 Alta |
| **IronClaw** | 46:7 (6.5:1) | 🟡 Selectiva |
| **Hermes Agent** | 50:50 (1:1) | 🟡 Bottlenecked |
| **NullClaw** | 5:1 (5:1) | 🟢 Qualidade > volume |

**Análise:** NanoBot e PicoClaw operam em **modo fast-moving**, mergeando 40-70% dos PRs atualizados. Hermes Agent está claramente em **modo manutenção**, com volume alto mas baixa Throughput. NullClaw mantém **ciclo de qualidade** com 80% de PRs mergeados (4/5).

### 6.2 Retenção e Engajamento

| Projeto | Issue antiga sem resposta | Prioridade |
|---------|:-------------------------:|:----------:|
| **NanoBot** | #1412 (67 dias) — multi-bot integration | ⚠️ Alta |
| **CoPaw** | #1312 (57 dias) — Ollama remote config | ⚠️ Alta |
| **Hermes Agent** | #10771 (23 dias) — Auto Dream | 🟡 P3 |
| **NullClaw** | Nenhuma | ✅ Saudável |
| **PicoClaw** | #2651 (15 dias) — Windows build docs | 🟢 Stale |

**Análise:** NullClaw demonstra **melhor hygiene de comunidade** (sem issues abandonadas). NanoBot e CoPaw acumulam issues antigas que indicam lacunas de product management.

### 6.3 Indicadores de Maturidade

| Indicador | Líder | Seguidor | Lagging |
|-----------|-------|----------|---------|
| **Releases formais** | IronClaw, ZeroClaw | PicoClaw, CoPaw | NullClaw, Hermes Agent |
| **Testes automatizados** | CoPaw (Vitest) | IronClaw (E2E nightly) | Hermes Agent (E2E quebrado) |
| **Documentação** | NullClaw (recent docs) | PicoClaw | Hermes Agent (docs stale) |
| **CI/CD maduro** | NullClaw (nightly + scheduled) | IronClaw | Hermes Agent (E2E falhando) |
| **Changelogs** | ZeroClaw (breaking changes) | — | Demais projetos |

---

## 7. Sinais de Tendência

### 7.1 Do Feedback dos Usuários

**Tendencia #1 — Autonomia controlada:** Múltiplos usuários reportam agentes "muito autônomos" (Hermes #19324: "It decided on its own to add, commit, and push changes"). A demanda por **TOTP gates**, **approval managers** e **policies de governança** indica que o mercado está amadurecendo para além do "copilot always-on".

**Tendencia #2 — Edge deployment:** PicoClaw (Raspberry Pi Zero 2), CoPaw (Termux Android) e setups LAN (ZeroClaw #6399: vLLM + Raspberry Pi) evidenciam interesse em **agentes que rodam localmente** para privacidade e custo. Providers como LM Studio (#28) ganham tração.

**Tendencia #3 — Multi-modalidade nativa:** Demanda por audio input (#2626 PicoClaw), transcrição voz (#2828), streaming (#2587 PicoClaw), e image generation (#3695 NanoBot) indica que agentes **texto-only estão em desadvantagem competitiva**.

**Tendencia #4 — Fragmentação de canais:** Issues sobre WhatsApp, Feishu, Telegram, DingTalk, Matrix, Slack, Teams, Discord sugerem que **não existe padrão de mensageria dominante** no mercado B2B. Agentes precisam suportar todos, mas cada um quebra frequentemente (protocol bumps, LID migrations).

**Tendencia #5 — Onboarding como diferencial:** ZeroClaw (in-browser onboarding), CoPaw (diagnostics Windows), e NullClaw (docs Zig) mostram que **fricção de setup** é barreira real. Usuários esperam experiência "zero-config".

### 7.2 Do Roadmap dos Projetos

| Tendência | Evidência |
|-----------|-----------|
| **Agent loops personalizáveis** | IronClaw Reborn MVP, Hermes Agent Auto Dream, NanoBot Dream controls |
| **Interoperabilidade via protocolos** | NullClaw

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-05-09

---

## 1. Panorama do Dia

NanoBot demonstra **alta atividade de desenvolvimento** em 09/05/2026, com 11 issues e 22 PRs atualizados nas últimas 24h. O projeto apresenta um ciclo de manutenção robusto: 14 dos 22 PRs foram fechados/merged, indicando forte capacidade de merge. Destaque para a resolução de dois problemas críticos de loops infinitos em chamadas de ferramentas locais (#3699, #3700) e perbaikan signifikan pada channel Feishu (#3704). A comunidade demonstra interesse em funcionalidades de customização (bot name/icon, model presets) e melhorias de estabilidade em múltiplos canais (WeChat, WhatsApp, Feishu). Não houve lançamentos oficiais hoje.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto não publicou novas versões neste período. A última atividade de merge sugiere preparação para um próximo release com foco em estabilidade de canais e features de configuração.

---

## 3. Progresso do Projeto

### PRs Merged/Closed Mais Relevantes

| # | PR | Autor | Impacto |
|---|-----|-------|---------|
| [#3702](https://github.com/HKUDS/nanobot/pull/3702) | Add configurable escalation for repeated tool-call loops | andrew-ellis-engineering | Introduz política de escalação determinística para loops de ferramentas |
| [#3701](https://github.com/HKUDS/nanobot/pull/3701) | Guard repeated identical local tool calls | andrew-ellis-engineering | Protege contra loops infinitos em read_file, list_dir, glob, grep |
| [#3704](https://github.com/HKUDS/nanobot/pull/3704) | fix(feishu): send all messages to topic when in thread | yorkhellen | **Resolve #3694** — arquivo enviado ao grupo correto em threads Feishu |
| [#3703](https://github.com/HKUDS/nanobot/pull/3703) | feat(webui): redesign settings and BYOK configuration | Re-bin | Nova UI de configurações com gestão de chaves API |
| [#3697](https://github.com/HKUDS/nanobot/pull/3697) | fix(cli): sanitize surrogate code points | chengyongru | Previne crashes com emojis no Windows |
| [#3695](https://github.com/HKUDS/nanobot/pull/3695) | feat: add image generation tool and WebUI mode | Re-bin | Suporte nativo a geração de imagens com workflow iterativo |
| [#3687](https://github.com/HKUDS/nanobot/pull/3687) | fix(memory): consolidate history hidden by replay window | Re-bin | Consolidação de histórico respeita limite de replay |
| [#3664](https://github.com/HKUDS/nanobot/pull/3664) | fix(matrix+weixin): log errors in silent exception handlers | vystartasv | Elimina-swallowing de erros nos canais Matrix e WeChat |
| [#3691](https://github.com/HKUDS/nanobot/pull/3691) | fix(onboard): allow empty strings and falsy values | chengyongru | Melhora wizard de onboarding |

**Avanços significativos:**
- **Robustez de loops**: Duplo fix para prevenir loops infinitos de tool calls (#3701, #3702)
- **Multi-canal**: Melhorias em Feishu, Matrix, WeChat e WhatsApp
- **UX/WebUI**: Redesign de configurações e geração de imagens

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| # | Título | Comentários | Reações | Categoria |
|---|--------|-------------|---------|-----------|
| [#3650](https://github.com/HKUDS/nanobot/issues/3650) | Configure bot name and icon | 3 | 0 | Enhancement |
| [#3652](https://github.com/HKUDS/nanobot/issues/3652) | Can Dream be disabled? | 3 | 0 | Enhancement |
| [#3699](https://github.com/HKUDS/nanobot/issues/3699) | Repeated identical local tool calls | 2 | 0 | Bug (CLOSED) |
| [#3637](https://github.com/HKUDS/nanobot/issues/3637) | Transcription Provider Configuration Not Transparent | 2 | 0 | Bug/Doc |
| [#1412](https://github.com/HKUDS/nanobot/issues/1412) | processing from another bot | 2 | 1 | Question |

**Análise das demandas principais:**

1. **Customização de identidade do bot** (#3650): Usuários desejam controlar nome e ícone exibidos no "thinking" do agente. Feature request com标签 "good first issue" —候选人 para contribuição newcomers.

2. **Controle do Dream** (#3652): Discussão sobre granularidade do Dream mode — permitir desativação completa. PR relacionado #3591 está em aberto para implementar controles de scope.

3. **Integração com outros bots** (#1412): Dúvida antiga (Mar/2026) sobre permitir processamento entre bots diferentes. Indica demanda por ecossistema multi-bot.

### PRs em Destaque (Em Aberto)

| # | Título | Autor | Status |
|---|--------|-------|--------|
| [#3696](https://github.com/HKUDS/nanobot/pull/3696) | feat(config): add model presets for quick model switching | chengyongru | Aberto |
| [#3684](https://github.com/HKUDS/nanobot/pull/3684) | fix(weixin): prevent silent message drops | chengyongru | Aberto |
| [#3673](https://github.com/HKUDS/nanobot/pull/3673) | fix(websocket): pass media through in _dispatch_envelope | ivelin | Aberto |

---

## 5. Bugs e Estabilidade

### Bugs Resolvidos Hoje

| # | Bug | Severidade | Canal/Componente |
|---|-----|------------|------------------|
| [#3704](https://github.com/HKUDS/nanobot/pull/3704) | Mensagens/arquivos sendo enviados ao grupo errado em threads Feishu | **Alta** | Feishu |
| [#3697](https://github.com/HKUDS/nanobot/pull/3697) | Crashes com emojis surrogados no Windows CLI | **Alta** | CLI |
| [#3699](https://github.com/HKUDS/nanobot/issues/3699) | Loops infinitos com chamadas idênticas de ferramentas locais | **Crítica** | Agent Core |
| [#3664](https://github.com/HKUDS/nanobot/pull/3664) | Exceções silenciadas em canais Matrix e WeChat | **Média** | Matrix, WeChat |
| [#3691](https://github.com/HKUDS/nanobot/pull/3691) | Wizard de onboarding não aceitava strings vazias | **Baixa** | Onboard |

### Bugs Em Aberto

| # | Título | Severidade | Descrição |
|---|--------|------------|-----------|
| [#3637](https://github.com/HKUDS/nanobot/issues/3637) | Transcription Provider Configuration Not Transparent | **Média** | Configuração Groq não valida combinação provider/apiBase |
| [#3698](https://github.com/HKUDS/nanobot/issues/3698) | Injeção de tool events em streaming | **Média** | Feature request para SSE com eventos de tool |
| [#3689](https://github.com/HKUDS/nanobot/issues/3689) | Interrupção de sessão perde histórico | **?** | nanobot "esquece" contexto após interrupção |

**Métricas de Estabilidade:**
- **Bugs fechados hoje**: 5
- **Bugs abertos**: 2 prioritários
- **Ratio de resolução**: ~71% (5/7 bugs totais)

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Abertas com Maior Potencial

| # | Feature | Complexidade | Sinais de Roadmap |
|---|---------|--------------|-------------------|
| [#3696](https://github.com/HKUDS/nanobot/pull/3696) | Model presets com failover automático | Alta | Configuração avançada de LLMs |
| [#3591](https://github.com/HKUDS/nanobot/pull/3591) | Dream update scope controls | Média | Controlo granular de auto-consolidação |
| [#3590](https://github.com/HKUDS/nanobot/pull/3590) | Manual heartbeat trigger | Baixa | Ferramentas de debugging |
| [#3698](https://github.com/HKUDS/nanobot/issues/3698) | Inject tool events in API streaming | Média | Integração com agentes externos |
| [#3650](https://github.com/HKUDS/nanobot/issues/3650) | Configure bot name and icon | Baixa | Personalização UX |
| [#3692](https://github.com/HKUDS/nanobot/issues/3692) | Feishu topic isolation toggle | Média | Configurabilidade de isolamento |

### Correlações Issue→PR

- #3652 (Dream disable) → [#3591](https://github.com/HKUDS/nanobot/pull/3591) em desenvolvimento
- #3694 (Feishu files) → [#3704](https://github.com/HKUDS/nanobot/pull/3704) **RESOLVIDO**
- #3699 (Tool loops) → [#3701](https://github.com/HKUDS/nanobot/pull/3701) **RESOLVIDO**
- #3700 (Loop escalation) → [#3702](https://github.com/HKUDS/nanobot/pull/3702) **RESOLVIDO**

**Indicações de roadmap:**
- Ênfase em **estabilidade multi-canal** (WeChat, Feishu, WhatsApp)
- **Configuração avançada** de modelos com presets e failover
- **Ferramentas de debugging** (heartbeat manual, token estimation)
- **Customização** de identidade do bot e UX

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Dor | Frequência | Issue |
|-----|------------|-------|
| Loop infinito em tarefas | Múltiplos reportes | #3699, #3700 |
| Perca de contexto após interrupção | 1 reporte | #3689 |
| Configuração de provider confusa | 1 reporte | #3637 |
| Arquivos enviados ao grupo errado | 1 reporte | #3694 |
| Integração multi-bot não funciona | 1 reporte | #1412 |

### Cenários de Uso Identificados

1. **Agente de produtividade**: Usuários enviam múltiplos arquivos para processamento em grupos Feishu — necessidade de isolamento por topic.
2. **Personalização**: Desejo de branding próprio (nome/ícone do bot) em vez do padrão "nanobot".
3. **Integração comLLMs locais**: Preocupação com concurrency em endpoints locais (Ollama, vLLM) — issue #3693.
4. **Windows CLI**: Emojis causam crashes — impacta usuários Windows.

### Tendências de Satisfação

- **Positivo**: Resolução rápida de bugs críticos (loops, crashes) — comunidade ativa em reportar e resolver
- **Neutro**: Features pedidas estão sendo implementadas progressivamente (Dream controls, model presets)
- **Negativo**: Algumas issues antigas sem resposta (#1412 desde Mar/2026)

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta Há Muito Tempo

| # | Título | Criado | Dias Inativo | Prioridade |
|---|--------|--------|--------------|------------|
| [#1412](https://github.com/HKUDS/nanobot/issues/1412) | processing from another bot | 2026-03-02 | ~67 dias | **Alta** |
| [#3637](https://github.com/HKUDS/nanobot/issues/3637) | Transcription Provider Not Transparent | 2026-05-06 | 3 dias | Média |

### PRs Abertos com Potencial Impacto

| # | PR | Autor | Impacto | Status Review |
|---|-----|-------|---------|----------------|
| [#3696](https://github.com/HKUDS/nanobot/pull/3696) | Model presets com failover | chengyongru | **Alto** | Em revisão |
| [#3684](https://github.com/HKUDS/nanobot/pull/3684) | WeChat silent message drops | chengyongru | **Alto** | Em revisão |
| [#3673](https://github.com/HKUDS/nanobot/pull/3673) | WebSocket media passthrough | ivelin | **Médio** | Em revisão |
| [#3693](https://github.com/HKUDS/nanobot/pull/3693) | Centralized LLM concurrency gate | HengWeiBin | **Alto** | Em revisão |

### Recomendações de Ação

1. **Responder #1412** — Issue antiga com 1 reação indicando interesse da comunidade em integração multi-bot
2. **Priorizar review de #3696** — Feature de model presets tem alto valor para usuários avançados
3. **Confirmar resolução de #3689** — Relato de perda de contexto após interrupção pode indicar bug sério
4. **Documentar cambios de canais** — Atividade intensa em Feishu, WeChat, WhatsApp sugere necessidade de release notes detalhados

---

**Relatório gerado em**: 2026-05-09  
**Fonte**: github.com/HKUDS/nanobot  
**Periodo analisado**: últimas 24h

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent
## Data: 2026-05-09

---

## 1. Panorama do Dia

O projeto Hermes Agent apresenta **atividade intensa** na data de hoje, com 50 issues e 50 PRs atualizados nas últimas 24 horas, embora **nenhuma release tenha sido publicada** no período. A base de código demonstra um ecossistema maduro com alta cobertura de integrações (Telegram, Slack, Teams, Discord), mas evidencia **problemas de estabilidade recorrentes** em componentes críticos como cron jobs, gerenciamento de sessões e коммуникационных платформ (P1-P2). A comunidade está ativamente reportando bugs e demandando features, com destaque para falhas no Telegram Bot API 10 e problemas de isolamento de perfis. Não há merged PRs visíveis nas últimas 24h, sugerindo que a atividade atual está concentrada em triagem e submissão de contribuições.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24 horas.**

O último release estável referenciado nos dados é **v0.12.0 (2026.4.30)**, mencionado no issue #19280. Usuários reportam estar na versão **v2026.5.7** (issue #21948), indicando que builds noturnas estão em uso, mas sem tag formal de release.

---

## 3. Progresso do Projeto

Dos 50 PRs atualizados, **3 foram merged/fechados** (conforme métricas). Não há detalhes de merge visíveis nos dados, mas a atividade indica que a equipe de maintainers está revisando PRs submetidos. PRs em destaque incluem:

| PR | Título | Prioridade | Status |
|----|--------|------------|--------|
| [#22062](https://github.com/NousResearch/hermes-agent/pull/22062) | fix(tui): trim markdown wrap spaces | — | Aberto |
| [#22072](https://github.com/NousResearch/hermes-agent/pull/22072) | Wire Kanban Codex/Claude observability | — | Aberto |
| [#21017](https://github.com/NousResearch/hermes-agent/pull/21017) | fix(mempalace): optional import guard + skip markers | P3 | Aberto |
| [#21561](https://github.com/NousResearch/hermes-agent/pull/21561) | feat(windows): native Windows support | P2 | Aberto |
| [#22063](https://github.com/NousResearch/hermes-agent/pull/22063) | feat(i18n): add Brazilian Portuguese locale | — | Aberto |
| [#21853](https://github.com/NousResearch/hermes-agent/pull/21853) | feat(context): add operational LCM context engine | — | Aberto |

**PRs técnicos relevantes abertos:**
- [#20922](https://github.com/NousResearch/hermes-agent/pull/20922) — fix: keep background process notifications out of model input (P2)
- [#19551](https://github.com/NousResearch/hermes-agent/pull/19551) — fix: harden auxiliary timeouts and compression busy handling (P2)
- [#22070](https://github.com/NousResearch/hermes-agent/pull/22070) — fix(approval): run tirith check in cron-deny mode (segurança)
- [#22053](https://github.com/NousResearch/hermes-agent/pull/22053) — fix(telegram): preserve DM topic routing via reply fallback
- [#21941](https://github.com/NousResearch/hermes-agent/pull/21941) — fix(telegram): send Direct Messages topics with direct_messages_topic_id

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários + reações)

| Issue | Título | Comentários | 👍 | Prioridade |
|-------|--------|-------------|-----|------------|
| [#10771](https://github.com/NousResearch/hermes-agent/issues/10771) | Feature: Automatic Memory Consolidation (Auto Dream) | 5 | 1 | P3 |
| [#19280](https://github.com/NousResearch/hermes-agent/issues/19280) | Terminal resize causes status bar duplication on macOS | 5 | 0 | P2 |
| [#21981](https://github.com/NousResearch/hermes-agent/issues/21981) | Telegram topic-enabled DM shows typing but never delivers | 3 | 5 | P1 |
| [#19324](https://github.com/NousResearch/hermes-agent/issues/19324) | Feature: policy to control write operations during self-improvement | 4 | 0 | P3 |
| [#15421](https://github.com/NousResearch/hermes-agent/issues/15421) | Slack: top-level messages create isolated sessions | 3 | 0 | P2 |

### Análise das demandas quentes

1. **Memória e Auto-melhoria (#10771, #19324):** A comunidade solicita mecanismos mais sofisticados de gerenciamento de memória, incluindo consolidação automática inspirada em "Claude Code's Auto Dream". Também há preocupação com a autonomia do agente em realizar operações de escrita (git push), indicando necessidade de controles de governança mais granulares.

2. **Estabilidade Multi-Plataforma (#19280, #15421):** Problemas recorrentes no macOS Terminal e integração com Slack demonstram desafios de compatibilidade entre plataformas. A fragmentação de sessões no Slack (top-level messages isoladas) é particularmente problemática para workflows corporativos.

3. **Integração Telegram (#21981, #22022):** A atualização do Telegram Bot API 10.0 quebrou funcionalidades críticas, gerando o maior número de reações positivas (5 👍). Este é um **incidente de alta visibilidade** que afeta usuários em produção.

---

## 5. Bugs e Estabilidade

### Bugs P1 (Críticos)

| Issue | Título | Componente | Link |
|-------|--------|------------|------|
| #21981 | Telegram topic-enabled DM never delivers response | gateway/telegram | [Link](https://github.com/NousResearch/hermes-agent/issues/21981) |
| #21937 | _priority_key raises ValueError: not enough values to unpack | agent | [Link](https://github.com/NousResearch/hermes-agent/issues/21937) |
| #22032 | SQLite locking protocol on NFS breaks multiple commands | cli/gateway | [Link](https://github.com/NousResearch/hermes-agent/issues/22032) |

### Bugs P2 (Altos)

| Issue | Título | Componente | Link |
|-------|--------|------------|------|
| #19280 | Terminal resize causes status bar duplication | cli/tui | [Link](https://github.com/NousResearch/hermes-agent/issues/19280) |
| #21915 | systemd incomplete cleanup causes restart loop | gateway | [Link](https://github.com/NousResearch/hermes-agent/issues/21915) |
| #21867 | Cron doesn't work | cron | [Link](https://github.com/NousResearch/hermes-agent/issues/21867) |
| #21948 | Dashboard Chat websocket never streams | cli/tui | [Link](https://github.com/NousResearch/hermes-agent/issues/21948) |
| #21950 | Credential pool overrides config.yaml api_key | agent/config | [Link](https://github.com/NousResearch/hermes-agent/issues/21950) |
| #15421 | Slack sessions.json not persisting | gateway/slack | [Link](https://github.com/NousResearch/hermes-agent/issues/15421) |

### Bugs P3 (Médios)

| Issue | Título | Componente | Link |
|-------|--------|------------|------|
| #21485 | Profile cloning duplicates GStack skill payload | cli/config | [Link](https://github.com/NousResearch/hermes-agent/issues/21485) |
| #10376 | Profile isolation incomplete: --clone copies memory | cli | [Link](https://github.com/NousResearch/hermes-agent/issues/10376) |
| #22071 | 29% of sessions leak with ended_at=NULL | agent | [Link](https://github.com/NousResearch/hermes-agent/issues/22071) |

**Padrões identificados:**
- **Cron system:** Múltiplos bugs (#21867, #22065) indicam que o subsistema de jobs agendados precisa de revisão arquitetural.
- **Gateway/Systemd:** Falhas de cleanup e restart loops sugerem problemas com gerenciamento de processos.
- **SQLite em NFS:** Issue #22032 é crítico para ambientes corporativos com armazenamento de rede.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em alta demanda

| Issue | Título | Área | Link |
|-------|--------|------|------|
| #10771 | Automatic Memory Consolidation (Auto Dream) | tool/memory | [Link](https://github.com/NousResearch/hermes-agent/issues/10771) |
| #19324 | Policy to control write operations during self-improvement | agent | [Link](https://github.com/NousResearch/hermes-agent/issues/19324) |
| #21992 | Local Brain layer for hybrid local/cloud agent cognition | agent | [Link](https://github.com/NousResearch/hermes-agent/issues/21992) |
| #22027 | Persistent agent sessions when webchat tab is closed | dashboard | [Link](https://github.com/NousResearch/hermes-agent/issues/22027) |
| #22057 | Conditional personality switching for TTS/Voice mode | agent | [Link](https://github.com/NousResearch/hermes-agent/issues/22057) |
| #22033 | Support for Nostr network via Vector app | integrations | [Link](https://github.com/NousResearch/hermes-agent/issues/22033) |
| #21936 | Native Qwen Code ACP integration | acp | [Link](https://github.com/NousResearch/hermes-agent/issues/21936) |

### PRs de features abertas

- [#21561](https://github.com/NousResearch/hermes-agent/pull/21561) — **feat(windows): native Windows support** (P2) —的重大 PR adicionando suporte nativo Windows, anteriormente relying em workarounds.
- [#22063](https://github.com/NousResearch/hermes-agent/pull/22063) — **feat(i18n): add Brazilian Portuguese locale** — expansão de internacionalização.
- [#21853](https://github.com/NousResearch/hermes-agent/pull/21853) — **feat(context): add operational LCM context engine** — plugin de contexto operacional com SQLite side store.
- [#19779](https://github.com/NousResearch/hermes-agent/pull/19779) — **feat: prepare quality-gated context compaction candidates** — melhoria no sistema de compressão de contexto.
- [#19502](https://github.com/NousResearch/hermes-agent/pull/19502) — **feat(agent): add bounded governance retrieval and latency instrumentation** — instrumentação de governança.

**Sinais de roadmap:**
1. **Arquitetura híbrida local/cloud** (#21992) — indica direção estratégica para executar modelos locais como "cérebro secundário".
2. **Windows nativo** (#21561) — prioridade P2 sugere expansão para além do ecossistema Unix.
3. **Persistência de sessões** (#22027) — melhoria na experiência webchat para cenários de uso prolongado.

---

## 7. Resumo de Feedback dos Usuários

### Dores reais identificadas

1. **Instabilidade em produção:**
   - "Telegram private chat topics started failing today after Telegram Bot API 10.0" ([#22022](https://github.com/NousResearch/hermes-agent/issues/22022)) — quebra de compatibilidade com API externa.
   - "Sessions terminated via SIGKILL, terminal force-close, OOM kill... leak silently with `ended_at IS NULL`" ([#22071](https://github.com/NousResearch/hermes-agent/issues/22071)) — perda de dados de telemetria.
   - "Hermes' self-improvement is a little too smart. It saw that my project was a git repo... It decided on its own to add, commit, and push changes" ([#19324](https://github.com/NousResearch/hermes-agent/issues/19324)) — autonomia excessiva sem controles.

2. **Problemas de configuração e isolamento:**
   - "Credential pool in auth.json silently overrides config.yaml api_key, causing stale-key 429s" ([#21950](https://github.com/NousResearch/hermes-agent/issues/21950)) — ambiguidade em precedência de configurações.
   - "Profile isolation is incomplete: --clone copies memory, and agents can read across profile boundaries" ([#10376](https://github.com/NousResearch/hermes-agent/issues/10376)) — documentação diverge da implementação.

3. **Performance e storage:**
   - "Creating or syncing Hermes profiles can duplicate the full GStack skill tree into each profile" — 1.3G por perfil em ambientes com múltiplos profiles.

4. **Deploy e operations:**
   - "systemctl restart hermes-gateway.service can trigger an infinite restart loop" ([#21915](https://github.com/NousResearch/hermes-agent/issues/21915)) — problemas críticos em ambientes systemd.
   - "SQLite locking protocol on NFS silently breaks /resume, /title, /history, /branch, and kanban" ([#22032](https://github.com/NousResearch/hermes-agent/issues/22032)) — incompatibilidade com setups corporativos.

### Cenários de uso emergentes

- **Voice/TTS mode:** Usuários desejam personalities específicas para interação por voz, diferenciando do modo texto.
- **Kanban/Codex observability:** Integração mais profunda com fluxos de desenvolvimento (#22072).
- **Nostr/Vector:** Interesse em descentralização de comunicações para privacidade (#22033).

---

## 8. Backlog que Merece Atenção

### Issues sem resposta há longo prazo

| Issue | Título | Criado | Atualizado | Prioridade | Link |
|-------|--------|--------|------------|------------|------|
| #10771 | Feature: Automatic Memory Consolidation (Auto Dream) | 2026-04-16 | 2026-05-08 | P3 | [Link](https://github.com/NousResearch/hermes-agent/issues/10771) |
| #10376 | Profile isolation is incomplete | 2026-04-15 | 2026-05-08 | P2 | [Link](https://github.com/NousResearch/hermes-agent/issues/10376) |
| #15421 | Slack sessions.json not persisting | 2026-04-24 | 2026-05-08 | P2 | [Link](https://github.com/NousResearch/hermes-agent/issues/15421) |
| #19280 | Terminal resize causes status bar duplication | 2026-05-03 | 2026-05-08 | P2 | [Link](https://github.com/NousResearch/hermes-agent/issues/19280) |

### Issues P1-P2 criados hoje sem assignees aparentes

| Issue | Título | Criado | Link |
|-------|--------|--------|------|
| #22032 | SQLite locking protocol on NFS | 2026-05-08 | [Link](https://github.com/NousResearch/hermes-agent/issues/22032) |
| #21937 | _priority_key ValueError | 2026-05-08 | [Link](https://github.com/NousResearch/hermes-agent/issues/21937) |
| #22071 | 29% session leak rate | 2026-05-08 | [Link](https://github.com/NousResearch/hermes-agent/issues/22071) |
| #21915 | systemd restart loop | 2026-05-08 | [Link](https://github.com/NousResearch/hermes-agent/issues/21915) |

---

## Métricas de Saúde do Projeto

| Indicador | Valor | Observação |
|-----------|-------|------------|
| Issues ativas (24h) | 48 | Alta atividade |
| PRs abertos (24h) | 47 | Pipeline saudável |
| PRs merged (24h) | 3 | Turnover moderado |
| Releases (24h) | 0 | Sem versionamento formal |
| Issues P1 abertas | 3 | Necessita triagem urgente |
| Issues P2 abertas | 9+ | Prioridade alta |
| Média de comentários por issue | ~1.5 | Comunidade particip

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-05-09

---

## 1. Panorama do Dia

O projeto PicoClaw mantém um nível de atividade intenso, com **45 PRs e 22 issues atualizadas nas últimas 24h**, evidenciando uma comunidade engajada. Uma nova nightly build (v0.2.8-nightly.20260508) foi publicada, sinalizando progresso contínuo no ciclo de desenvolvimento. O foco predominante recai sobre **bug fixes críticos** — especialmente no domínio de ferramentas (exec, segurança de caminhos), canais (Telegram, WhatsApp, Feishu) e providers (OAuth, streaming). A taxa de fechamento de issues (14/22) sugere boa capacidade de triagem e resolução pela equipe.

---

## 2. Lançamentos

### Nightly Build v0.2.8-nightly.20260508.2834db13

| Item | Detalhe |
|------|---------|
| **Versão** | v0.2.8-nightly.20260508.2834db13 |
| **Tipo** | Automated nightly build (pode ser instável) |
| **Changelog** | [Comparativo v0.2.8...main](https://github.com/sipeed/picoclaw/compare/v0.2.8...main) |

**Nota:** Este é um build automatizado. Usuários em produção devem continuar com releases estáveis.

---

## 3. Progresso do Projeto

### PRs Merged/Fechadas Relevantes

| # | PR | Domínio | Impacto |
|---|-----|---------|---------|
| [#2705](https://github.com/sipeed/picoclaw/pull/2705) | **add MQTT channel support** | Canal | ✨ Adiciona suporte a protocolo MQTT para comunicação via mensageria |
| [#2681](https://github.com/sipeed/picoclaw/pull/2681) | **fix(mcp): sanitize MCP tool schemas for Gemini function calling** | Provider | 🐞 Corrige crash HTTP 400 ao usar modelos Gemini com ferramentas MCP complexas |
| [#2655](https://github.com/sipeed/picoclaw/pull/2655) | **fix: restore verified unified kernel baseline** | Core/Agent | 🔧 Restaura invariantes críticas: securebus, redaction-safe persistence, session continuity |
| [#2522](https://github.com/sipeed/picoclaw/pull/2522) | **fix(openai_compat): request stream usage** | Provider | ✅ Adiciona suporte a `stream_options.include_usage` para endpoints OpenAI/Azure |
| [#2128](https://github.com/sipeed/picoclaw/pull/2128) | **fix(tools): ensure tool parameters have valid JSON Schema properties field** | Ferramentas | 🛡️ Corrige erros de validação com APIs OpenAI-compatíveis (ex: LM Studio) |
| [#2784](https://github.com/sipeed/picoclaw/pull/2784) | **README Baidu Search Free Tier update** | Docs | 📖 Corrige documentação — limite real é 50 queries/dia, não 1000/dia |

---

## 4. Temas Quentes da Comunidade

### Issues/PRs com Maior Engajamento

| # | Título | Comentários | 👍 | Status | Domínio |
|---|--------|:-----------:|:--:|:------:|---------|
| [#28](https://github.com/sipeed/picoclaw/issues/28) | **[Feat Request] LM Studio Easy Connect** | 18 | 2 | 🟢 Open | Provider |
| [#1042](https://github.com/sipeed/picoclaw/issues/1042) | **[BUG] exec工具的guardCommand方法问题** | 10 | 2 | 🟢 Open | Tool |
| [#2674](https://github.com/sipeed/picoclaw/issues/2674) | **Codex OAuth: empty assistant response** | 2 | 3 | 🟢 Open | Provider |
| [#2580](https://github.com/sipeed/picoclaw/issues/2580) | **飞书插件优化请求** | 3 | 2 | 🔴 Closed | Channel |
| [#2625](https://github.com/sipeed/picoclaw/issues/2625) | **Provide compiled builds with WhatsApp support** | 3 | 1 | 🟢 Open | Build |
| [#2376](https://github.com/sipeed/picoclaw/issues/2376) | **Option to disable 'Enter' key from sending messages** | 5 | 1 | 🔴 Closed | Channel |

### Análise de Demandas

**Provider LM Studio (#28):** Forte demanda por integração facilitada com LM Studio (local AI models). A comunidade sinaliza utilidade alta para usuários que desejam rodar modelos localmente. A complexidade técnica (18 comentários) indica que a implementação não é trivial.

**Canal Feishu (#2580):** Usuários chineses solicitam otimizações no plugin Feishu, incluindo streaming de saída e métricas de uso. O trade-off discutido: manter a filosofia de "lightweight" do projeto vs. agregar funcionalidades.

---

## 5. Bugs e Estabilidade

### Issues Abertas — Bugs

| # | Título | Severidade | Domínio | Detalhe |
|---|--------|:----------:|---------|---------|
| [#1042](https://github.com/sipeed/picoclaw/issues/1042) | **exec tool: guardCommand false positives** | ⚠️ Alta | Tool | Regex considera `../../../../Beijing?T` como caminho inválido quando `restrict_to_workspace=true`; comandos legítimos como `curl -s "wttr.in/Beijing?T"` são bloqueados |
| [#2674](https://github.com/sipeed/picoclaw/issues/2674) | **Codex OAuth: empty response** | ⚠️ Alta | Provider | Backend ChatGPT retorna resposta vazia via `response.output_item.done`; fallback de erro é exibido |
| [#2817](https://github.com/sipeed/picoclaw/issues/2817) | **Voice transcription not passed to LLM** | 🔴 Crítica | Agent | Transcrição via Groq Whisper completa, mas texto não é substituído; LLM recebe `[voice]` literal |
| [#2744](https://github.com/sipeed/picoclaw/issues/2744) | **Android v0.2.8 cannot access data from tabs** | ⚠️ Alta | Channel | Plataforma Android apresenta falha de acesso a dados |

### PRs Abertas — Bug Fixes em Progresso

| # | PR | Status | Domínio | Previsão |
|---|-----|:------:|---------|:--------:|
| [#2826](https://github.com/sipeed/picoclaw/pull/2826) | **fix: resolve relative paths correctly in exec tool safety guard** | 🟢 Open | Tool | Resolve #1042 |
| [#2828](https://github.com/sipeed/picoclaw/pull/2828) | **fix(agent): transcribe queued voice follow-ups** | 🟢 Open | Agent | Resolve #2817 |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Solicitadas Recentes

| # | Título | 👍 | Domínio | Insight Estratégico |
|---|--------|:--:|---------|----------------------|
| [#2820](https://github.com/sipeed/picoclaw/issues/2820) | **Non-destructive fresh-session reset without deleting Seahorse history** | 0 | Agent | Workflows que necessitam "reset" sem perder histórico de conversação — demanda real de usuários avançados |
| [#2515](https://github.com/sipeed/picoclaw/issues/2515) | **Robust memory system with mem0, Supermemory, HydraDB integrations** | 0 | Provider | Expansão do ecossistema de memória externa; potencial para Go SDKs |
| [#2626](https://github.com/sipeed/picoclaw/pull/2626) | **Support native audio input for multimodal LLMs (Gemini 1.5)** | — | Provider | ✨ PR aberto: adiciona campo 'Audio' e encoding data URLs |
| [#2645](https://github.com/sipeed/picoclaw/pull/2645) | **feat(bedrock): implement StreamingProvider via AWS ConverseStream** | — | Provider | Streaming de tokens em tempo real via AWS Bedrock |
| [#2158](https://github.com/sipeed/picoclaw/pull/2158) | **Multi-agent discovery prompt** | — | Agent | Sistema leve de registry de agentes no system prompt |

### Sinais de Roadmap

1. **Multi-modalidade:** Audio nativo (#2626) + streaming (#2587) + transcrição de voz (#2828) indicam direção clara para suporte multimídia nativo
2. **Providers diversificados:** LM Studio (#28), Gemini Web Search (#2763), AWS Bedrock (#2645), GitHub Copilot (#2652) — tendência de expandir suporte a provedores
3. **UX de chat:** Streaming end-to-end com scroll UX (#2587) — experiência web melhorada
4. **Canais alternativos:** MQTT (#2705 merged), otimização Feishu (#2580)

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Categoria | Problema | Evidência |
|-----------|----------|-----------|
| **Segurança de ferramentas** | Falsos positivos no guardCommand bloqueiam comandos legítimos | [#1042](https://github.com/sipeed/picoclaw/issues/1042) |
| **Plataformas restritivas** | Builds ARM (Raspberry Pi Zero 2) sem WhatsApp integrado | [#2625](https://github.com/sipeed/picoclaw/issues/2625) |
| **OAuth instável** | Falhas de autenticação OpenAI e Antigravity | [#2602](https://github.com/sipeed/picoclaw/issues/2602) |
| **WhatsApp LID migration** | Mensagens silenciosamente descartadas após migração LID | [#2540](https://github.com/sipeed/picoclaw/issues/2540) |
| **Android UX** | Tecla Enter envia mensagem em vez de newline | [#2376](https://github.com/sipeed/picoclaw/issues/2376) — Closed, mas indica padrão de UX mobile |
| **Persistência de workspace** | Sistema escreve fora do diretório de trabalho, gerando centenas de erros | [#2519](https://github.com/sipeed/picoclaw/issues/2519) |

### Cenários de Uso Reportados

- **Raspberry Pi Zero 2** como deployment edge com WhatsApp
- **Android via Termux** como cliente mobile
- **Embeddings locais via LM Studio** como alternativa a provedores cloud
- **Canais enterprise** via Feishu e Telegram com topics/forums

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Stale

| # | Título | Criado | Atualizado | Estado | Prioridade |
|---|--------|--------|------------|:------:|:----------:|
| [#2651](https://github.com/sipeed/picoclaw/issues/2651) | **How to build on windows?** | 2026-04-24 | 2026-05-08 | Stale | ⚠️ Documentação |
| [#2593](https://github.com/sipeed/picoclaw/issues/2593) | **统计标签资源数量不能用模糊匹配** | 2026-04-20 | 2026-05-08 | Stale | 🔧 Bug |
| [#2541](https://github.com/sipeed/picoclaw/issues/2541) | **whatsapp_native: group_trigger.mention_only broken** | 2026-04-16 | 2026-05-08 | Stale | 🐞 Bug |

### PRs Abertas com Potencial de Merge

| # | PR | Domínio | Observação |
|---|-----|---------|------------|
| [#2626](https://github.com/sipeed/picoclaw/pull/2626) | **Support native audio input for multimodal LLMs** | Provider | Funcionalidade aguardando review — multi-modalidade é tendência |
| [#2763](https://github.com/sipeed/picoclaw/pull/2763) | **Add Gemini web search provider** | Provider | Provider relativamente independente; merge rápido possível |
| [#2827](https://github.com/sipeed/picoclaw/pull/2827) | **fix: skip canonical ID parsing for @-prefixed allow_from** | Channel | Filtro Matrix quebrado; impacto em ambiente corporativo |

---

## Métricas de Saúde do Projeto

| Indicador | Valor | Tendência |
|-----------|:-----:|:---------:|
| **Issues fechadas (24h)** | 14/22 | ✅ Positiva |
| **PRs fechadas (24h)** | 19/45 | ✅ Positiva |
| **Release activity** | 1 nightly | 📦 Ativo |
| **Bug reports abertas** | 5 | ⚠️ Monitorar |
| **Features em desenvolvimento (PRs)** | 12+ | 📈 Crescente |

---

*Relatório gerado automaticamente com base em dados do GitHub de 2026-05-09.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-05-09

---

## 1. Panorama do dia

O IronClaw apresenta **atividade altíssima** nas últimas 24h, com 46 PRs atualizados e 7 issues movimentadas. O foco está na iteração do stack **Reborn** (loop de agentes de nova geração), com pelo menos 5 PRs ativos relacionados ao framework, incluindo a merge do MVP principal (#3391) e múltiplas adições sobre ele. Neben o eixo Reborn, há correção crítica de vazamento multi-tenant em SSE/WebSocket (#3390) e trabalho em attachments/imagens para finalização. A release `v0.28.0` foi publicada (crate `ironclaw`), indicando ritmo de entrega acelerado.

---

## 2. Lançamentos

| Crate | Versão anterior | Nova versão | Compatibilidade |
|---|---|---|---|
| `ironclaw_common` | 0.4.1 | **0.4.2** | ✓ API compatible |
| `ironclaw` | 0.24.0 | **0.28.0** | — |

**PR:** [Release chore #3388](https://github.com/nearai/ironclaw/pull/3388) | **Tag:** [v0.28.0](https://github.com/nearai/ironclaw/releases/tag/v0.28.0)

> Nenhum changelog detalhado disponível nos dados fornecidos. Recomenda-se consultar o diff da tag parabreaking changes.

---

## 3. Progresso do Projeto

| PR | Escopo | Tamanho | Status | Importância |
|---|---|---|---|---|
| [#3391](https://github.com/nearai/ironclaw/pull/3391) | Reborn loop support MVP | XL | ✅ **Merged** | ⭐⭐⭐ Crítico |
| [#3335](https://github.com/nearai/ironclaw/pull/3335) | Segredos encriptados + credenciais | XL | ✅ **Merged** | ⭐⭐ Alto |
| [#3374](https://github.com/nearai/ironclaw/pull/3374) | Isolamento multi-tenant de workspace | L | ✅ **Merged** | ⭐⭐ Alto |
| [#3364](https://github.com/nearai/ironclaw/pull/3364) | Recovery do modal restart + UI approvals | L | ✅ **Merged** | ⭐ Bug bash |

### Destaques

- **#3391 — Reborn loop support MVP:** Adiciona `ironclaw_loop_support` com portas adaptadas para `LoopContextPort`, `LoopTranscriptPort` e `LoopModelPort`, criando a base para o novo loop de agentes. PR XL mergeado, demonstrando maturidade inicial do stack.

- **#3335 — Segredos encriptados + `CredentialSession`:** Porta cryptografia legada para `ironclaw_secrets`, adiciona `CredentialAccount` e `CredentialSession`. Aumenta segurança e permite escopo explícito de credenciais.

- **#3374 — Isolamento multi-tenant de workspace:** Corrige binding de camadas privadas de workspace para usuário autenticado/session, centraliza scoping por usuário — essencial para ambientes compartilhados.

---

## 4. Temas Quentes da Comunidade

| Issue/PR | Comentários | Tema |
|---|---|---|
| [#3067](https://github.com/nearai/ironclaw/issues/3067) | **32** | Suite de integração e2e para Reborn |
| [#3016](https://github.com/nearai/ironclaw/issues/3016) | **11** | Blocker cutover: AgentLoopHost facade |
| [#3193](https://github.com/nearai/ironclaw/issues/3193) | **5** | Contratos de binding de sessão |
| [#3107](https://github.com/nearai/ironclaw/issues/3107) | **3** | AgentLoopDriver e profile contract |

### Análise

A comunidade (via `serrrfirat`, principal contributor) está concentrada na **arquitetura Reborn**. A issue #3067 acumula 32 comentários e busca validar o substrate através de testes de integração de alto nível — isso indica que o time está investindo em **confiança no código antes do cutover de produção**. A issue #3016 é o maior blocker atual (11 comentários), definindo a fachada `AgentLoopHost`.

Conversa-se também sobre:
- **Definição de contratos** para conversation binding e sessão (#3193) — indica fase de design de interfaces
- **Perfil de execução** para AgentLoopDriver (#3107) — fase de spec de runtime

---

## 5. Bugs e Estabilidade

| Severidade | Issue | Descrição | Status |
|---|---|---|---|
| 🔴 P1 | [#3323](https://github.com/nearai/ironclaw/issues/3323) | **Nightly E2E falhou** — workflow `E2E (v2-engine)` em failure | OPEN |
| 🟡 P2 | [#3385](https://github.com/nearai/ironclaw/issues/3385) | Título de conversa usa primeiro msg do usuário em vez de resumo | OPEN |
| 🟡 P2 | [#3082](https://github.com/nearai/ironclaw/issues/3082) | App hangs no modal "Restarting IronClaw" após auto-approvals | ✅ CLOSED |

### Análise

- **E2E nightly quebrado (#3323):** Prioridade máxima. CI falhando em `v2-engine` com commit `3fab297c`. Investigação necessária antes de qualquer release envolvendo novo loop.
- **Bug Bash P2 resolvido (#3082):** Modal de restart ficava em loop infinito. Corrigido em [#3364](https://github.com/nearai/ironclaw/pull/3364).
- **UX Bug (#3385):** Títulos de conversa mostram raw user input em vez de título resumido — experiência degradada no sidebar web.

---

## 6. Pedidos de Features e Sinais de Roadmap

| # | Feature | Escopo | Signals |
|---|---|---|---|
| [#3004](https://github.com/nearai/ironclaw/pull/3004) | Configuração dedicada para tools de imagem (OpenAI-compatible) | Tool/Builtin/Config | ⭐⭐ Experienciados |
| [#3065](https://github.com/nearai/ironclaw/pull/3065) | Persistir artefatos de imagem inline para attachments | Tool/Builtin/Agent | ⭐⭐ Experienciados |
| [#3331](https://github.com/nearai/ironclaw/pull/3331) | UI de attachments não-imagem + persistência de upload | Web/Docs | ⭐ Experienciados |
| [#3396](https://github.com/nearai/ironclaw/pull/3396) | `pairing_approve` tool para binding Slack via chat | Tool/Builtin | ⭐ Experienciados |
| [#3352](https://github.com/nearai/ironclaw/pull/3352) + [#3353](https://github.com/nearai/ironclaw/pull/3353) | Primitivos de auth/egress e runner nativo para ProductAdapter | Reborn/Extensions | ⭐⭐ Core |

### Tendências observadas

1. **Loop Reborn em produção:** 5+ PRs em stack, arquitetura sendo definida ativamente
2. **DX de imagens:** Ferramentas de imagem com endpoint dedicado (#3004) e persistência de artefatos (#3065) indicam preparação para pipelines visuais completos
3. **Pairing simplificado:** Binding Slack via chat (#3396) reduz fricção de onboarding

---

## 7. Resumo de Feedback dos Usuários

| Fonte | Tema | Sentimento |
|---|---|---|
| Bug report #3385 | Títulos de conversa ruins (usam raw msg) | ⚠️ Frustrado |
| Bug report #3082 | App trava no restart (P2) | ⚠️ Frustrado → ✅ Resolvido |
| Bug Bash P1 (resolvido em #3381) | Telegram → Gmail OAuth flow quebrava conversa | ⚠️ Frustrado → ✅ Resolvido |

### Análise

Bugs relatados apontam para **jornadas de onboarding e auth** como pontos de dor recorrentes:
- OAuth cross-channel (Telegram → Gmail) sem coverage de testes → resolvido
- Auto-approvals + restart não resilient → resolvido
- UI de títulos de conversa degradada → ainda open

O volume de features de attachment (#3065, #3331) sugere que usuários estão utilizando IronClaw como **assistente multimodal** (imagens + arquivos), e a experiência nessa frente precisa maturidade.

---

## 8. Backlog que Merece Atenção

| # | Tipo | Idade | Situação |
|---|---|---|---|
| [#3006](https://github.com/nearai/ironclaw/pull/3006) | PR | ~11 dias | ⏳ Aguardando review — retry MCP após auth failures |
| [#3004](https://github.com/nearai/ironclaw/pull/3004) | PR | ~11 dias | ⏳ Aguardando review — imagem tool config |
| [#3065](https://github.com/nearai/ironclaw/pull/3065) | PR | ~10 dias | ⏳ Aguardando review — persistir imagens |
| [#3322](https://github.com/nearai/ironclaw/pull/3322) | PR | ~2 dias | ⏳ Aguardando review — auth headers MCP |
| [#3016](https://github.com/nearai/ironclaw/issues/3016) | Issue | ~11 dias | ⚠️ Blocker crítico — precisa definição de AgentLoopHost |

### Recomendações

1. **Revisar PRs experientes:** #3004, #3006, #3065 estão abertas há ~10 dias e possuem escopo bem definido. Priorizar para desbloqueio de features prometidas.
2. **Resolver blocker #3016:** AgentLoopHost facade é dependência de múltiplas issues (ver tracking tree). Sem isso, o cutover Reborn fica bloqueado.
3. **E2E quebrado (#3323):** Deve ser investigado imediatamente — pode impactar deploy de PRs mergeadas.

---

*Relatório gerado com base em dados do GitHub de [nearai/ironclaw](https://github.com/nearai/ironclaw) em 2026-05-09. Última atualização dos dados: 2026-05-08 UTC.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do Projeto CoPaw — 2026-05-09

## 1. Panorama do Dia

O CoPaw apresenta **alta atividade de desenvolvimento** em 09/05/2026, com 36 issues e 36 PRs atualizados nas últimas 24h. A comunidade demonstra engajamento significativo, especialmente em problemas de estabilidade (channel dispatch, session persistence) e performance do Console. Foi lançada a versão **v1.1.6-beta.1**, sinalizando preparação para o próximo ciclo de release. O projeto mantém um ritmo saudável de merges (21 PRs fechados), equilibrando correções críticas com melhorias incrementais de performance e experiência do usuário.

---

## 2. Lançamentos

### 🆕 v1.1.6-beta.1 Released

| Mudança | Autor | PR |
|---------|-------|-----|
| Bump de versão para 1.1.6b1 | @zhijianma | [#4082](https://github.com/agentscope-ai/QwenPaw/pull/4082) |
| Testes de smoke para startup e settings/envs | @yutai78786 | [#4081](https://github.com/agentscope-ai/QwenPaw/pull/4081) |
| Correção de crash SSE no console | — | — |

**Status:** Beta release com foco em estabilidade pré-produção. Sem breaking changes detectados nesta versão.

---

## 3. Progresso do Projeto

### PRs Merged/Closed (21 total)

| PR | Descrição | Impacto |
|----|-----------|---------|
| [#4093](https://github.com/agentscope-ai/QwenPaw/pull/4093) | **fix(pack): restore conda packaging tools** | Corrige falha de empacotamento Windows onde `conda-pack` conflitava com `pip install qwenpaw[full]` após upgrade de setuptools |
| [#4064](https://github.com/agentscope-ai/QwenPaw/pull/4064) | **fix(reload): graceful task draining** | Resolve race condition no reload de canais DingTalk que causava perda de conexões HTTP em voo |
| [#4076](https://github.com/agentscope-ai/QwenPaw/pull/4076) | **fix: RotatingFileHandler universal** | Implementa rotação de logs em Windows/Linux (anteriormente só macOS) — previne crescimento infinito de `qwenpaw.log` |
| [#4122](https://github.com/agentscope-ai/QwenPaw/pull/4122) | **feat(provider): aliyun token plan** | Adiciona provider nativo para plano de tokens Aliyun |
| [#4110](https://github.com/agentscope-ai/QwenPaw/pull/4110) | **perf(console): chat performance** | Otimiza polling de estado (2.5s → key comparison) — reduz re-renders desnecessários no Chat component |
| [#3559](https://github.com/agentscope-ai/QwenPaw/pull/3559) | **test(console): Vitest setup** | Estabelece infraestrutura de testes unitários para frontend com 21 arquivos de teste |
| [#4032](https://github.com/agentscope-ai/QwenPaw/pull/4032) | **feat(doctor): Windows diagnostics** | Adiciona verificação de long path support e diagnóstico de caminhos no Windows |
| [#4119](https://github.com/agentscope-ai/QwenPaw/pull/4119) | **fix(channels): markdown tables** | Mantém renderização de tabelas GFM ao fazer split de mensagens longas para WeChat |
| [#4121](https://github.com/agentscope-ai/QwenPaw/pull/4121) | **fix(console): test fix** | Correção de testes unitários |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| Issue | Tipo | Comentários | Link |
|-------|------|-------------|------|
| [#2382](https://github.com/agentscope-ai/QwenPaw/issues/2382) | Bug/Question | 10 | venv reset após updates — dependências de skills são invalidadas |
| [#3919](https://github.com/agentscope-ai/QwenPaw/issues/3919) | Bug | 9 | Perda de session ao trocar de Agent — `lastChatIdByAgent` não implementado |
| [#578](https://github.com/agentscope-ai/QwenPaw/issues/578) | Meta/Enhancement | 7 | **OpenClaw-Inspired Features** — features compostas para valor cumulativo |
| [#4108](https://github.com/agentscope-ai/QwenPaw/issues/4108) | Question | 4 | WebUI causa lag extremo no Windows 11 durante streaming de resposta |
| [#2725](https://github.com/agentscope-ai/QwenPaw/issues/2725) | Bug | 4 | CoPaw Local não utiliza GPU (RTX 3060) — usa CPU para inferência |

### Análise de Demandas

**Problemas de Session/Agent:**
- Issue [#2382](https://github.com/agentscope-ai/QwenPaw/issues/2382) revela fragilidade no sistema de virtualenv quando skills são atualizadas
- Issue [#3919](https://github.com/agentscope-ai/QwenPaw/issues/3919) evidencia lacuna crítica no front-end: `lastChatIdByAgent` não persiste ao trocar de agente

**Performance:**
- Usuário reporta lag severo no Windows 11 com 32GB RAM durante streaming de respostas — possível memory leak ou problema de thread blocking

---

## 5. Bugs e Estabilidade

### 🔴 Críticos (afetam produção)

| Issue | Severidade | Descrição | Link |
|-------|-----------|-----------|------|
| [#4108](https://github.com/agentscope-ai/QwenPaw/issues/4108) | Alta | WebUI congela sistema durante geração de resposta — mouse com dropped frames,切换窗口缓慢 | [Link](https://github.com/agentscope-ai/QwenPaw/issues/4108) |
| [#2725](https://github.com/agentscope-ai/QwenPaw/issues/2725) | Alta | Local models não utilizam GPU disponível (Llama.cpp + RTX 3060) | [Link](https://github.com/agentscope-ai/QwenPaw/issues/2725) |
| [#4100](https://github.com/agentscope-ai/QwenPaw/issues/4100) | Alta | MCP streamable_http não recupera após timeout — cliente em estado inconsistente | [Link](https://github.com/agentscope-ai/QwenPaw/issues/4100) |

### 🟡 Moderados (canais/integrações)

| Issue | Canal | Descrição | Link |
|-------|-------|-----------|------|
| [#4042](https://github.com/agentscope-ai/QwenPaw/issues/4042) | DingTalk | Race condition no event loop causa falha de notificação | [Link](https://github.com/agentscope-ai/QwenPaw/issues/4042) |
| [#3010](https://github.com/agentscope-ai/QwenPaw/issues/3010) | WeChat | Recebimento de mensagens incompleto — agente para de responder | [Link](https://github.com/agentscope-ai/QwenPaw/issues/3010) |
| [#2964](https://github.com/agentscope-ai/QwenPaw/issues/2964) | WeChat | Mensagens de scheduled tasks não chegam ao usuário | [Link](https://github.com/agentscope-ai/QwenPaw/issues/2964) |
| [#3783](https://github.com/agentscope-ai/QwenPaw/issues/3783) | WeChat | Scheduled tasks fazem dispatch para channel errado (console vs wechat) | [Link](https://github.com/agentscope-ai/QwenPaw/issues/3783) |
| [#4104](https://github.com/agentscope-ai/QwenPaw/issues/4104) | Geral | Nomes de arquivo com caracteres mistos recebem espaços extras | [Link](https://github.com/agentscope-ai/QwenPaw/issues/4104) |

### 🟢 Leves/Minor

| Issue | Descrição | Link |
|-------|-----------|------|
| [#4123](https://github.com/agentscope-ai/QwenPaw/issues/4123) | Janela console aparece a cada chamada de `execute_shell_command` no Windows | [Link](https://github.com/agentscope-ai/QwenPaw/issues/4123) |
| [#4099](https://github.com/agentscope-ai/QwenPaw/issues/4099) | Nome do agent "Friday" hardcoded em session — deveria vir de `agent.json` | [Link](https://github.com/agentscope-ai/QwenPaw/issues/4099) |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features em Demand

| Feature | Descrição | Prioridade | Link |
|---------|-----------|-----------|------|
| **OpenClaw-Inspired Features** | Meta-issue para features compostas que geram valor cumulativo com uso prolongado | Alta | [#578](https://github.com/agentscope-ai/QwenPaw/issues/578) |
| **OAuth para OpenAI/Codex** | Suporte a autenticação OAuth (similar a `hermes auth add openai-codex --type oauth`) | Alta | [#4124](https://github.com/agentscope-ai/QwenPaw/issues/4124) |
| **Scheduled Tasks com Fresh Sessions** | Opção para limpar/arquivar sessões de cron jobs | Alta | [#3111](https://github.com/agentscope-ai/QwenPaw/issues/3111) |
| **Rewind Function** | Rollback de arquivos corrompidos ou contexto (similar a `/rewind` do Claude Code) | Média | [#4129](https://github.com/agentscope-ai/QwenPaw/issues/4129) |
| **Project Groups** | Cada projeto com grupo próprio, múltiplos roles, memória compartilhada | Média | [#4131](https://github.com/agentscope-ai/QwenPaw/issues/4131) |
| **DashScope Base URL Selection** | Permitir escolha de endpoint regional na UI | Média | [#4074](https://github.com/agentscope-ai/QwenPaw/pull/4074) |

### PRs Under Review com Potencial

| PR | Feature | Status | Link |
|----|---------|--------|------|
| [#3525](https://github.com/agentscope-ai/QwenPaw/pull/3525) | Discord thread para cron jobs | Under Review | [Link](https://github.com/agentscope-ai/QwenPaw/pull/3525) |
| [#3238](https://github.com/agentscope-ai/QwenPaw/pull/3238) | PlanNotebook para planejamento experimental | Merged | [Link](https://github.com/agentscope-ai/QwenPaw/pull/3238) |
| [#3255](https://github.com/agentscope-ai/QwenPaw/pull/3255) | Fresh execution sessions para cron | Under Review | [Link](https://github.com/agentscope-ai/QwenPaw/pull/3255) |
| [#4041](https://github.com/agentscope-ai/QwenPaw/pull/4041) | System tray startup item (Windows) | Under Review | [Link](https://github.com/agentscope-ai/QwenPaw/pull/4041) |

### Indicadores de Roadmap

1. **Estabilidade de Canais** é prioridade clara — múltiplas issues sobre WeChat, DingTalk e scheduled tasks
2. **Performance do Console** está sendo ativamente otimizada (PRs #4110, #4130)
3. **Testes** ganhando foco com Vitest setup (#3559) e diagnósticos Windows (#4032)
4. **Flexibilidade de Providers** — nova integração Aliyun (#4122) e seleção de base URL DashScope (#4074)

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais

| Categoria | Descrição | Frequência |
|-----------|-----------|------------|
| **Estabilidade pós-update** | venv reset, dependências de skills invalidadas, configurações perdidas | Alta |
| **Performance degradada** | WebUI lag, mouse dropped frames, lentidão geral | Alta |
| **Canais não confiáveis** | WeChat/DingTalk perdem mensagens, scheduled tasks dispatch incorreto | Alta |
| **Integração corporativa** | Configuração de WeChat Enterprise, single-session mode | Média |

### Cenários de Uso Reportados

- **Uso pessoal:** Agentes para resumo de notícias matinal, assistente de通勤
- **Uso corporativo:** Integração com WeChat Enterprise, DingTalk, Discord
- **Local models:** Tentativa de usar CoPaw-Flash-2B com GPU local (RTX 3060) — falhando

### Satisfação/Insatisfação

| Aspecto | Sentimento | Comentário |
|---------|------------|------------|
| Funcionalidade core | 🟡 Neutro | Works, mas regressões após updates frustram |
| Console/UI | 🔴 Negativo | Lag severo em versões recentes; voz não funciona no Firefox |
| Canais | 🟡 Neutro | Funciona quando configurado, mas setup é frágil |
| Documentation | ⚪ Não mencionado | — |

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Stale

| Issue | Idade | Sem Comentários | Link |
|-------|-------|-----------------|------|
| [#2165](https://github.com/agentscope-ai/QwenPaw/issues/2165) | ~45 dias | 2 comments | Unknown agent error após switch de modelo |
| [#1312](https://github.com/agentscope-ai/QwenPaw/issues/1312) | ~57 dias | 2 comments | Configuração Ollama remote com skip certificate |
| [#2783](https://github.com/agentscope-ai/QwenPaw/issues/2783) | ~??? | — | Local model GPU utilization |

### Issues Críticas Pendentes

| Issue | Prioridade | Link |
|-------|-----------|------|
| [#4108](https://github.com/agentscope-ai/QwenPaw/issues/4108) | 🔴 Alta | WebUI performance no Windows |
| [#2725](https://github.com/agentscope-ai/QwenPaw/issues/2725) | 🔴 Alta | Local GPU not utilized |
| [#4100](https://github.com/agentscope-ai/QwenPaw/issues/4100) | 🔴 Alta | MCP reconnection failure |

### PRs Blocked/Needs Review

| PR | Autor | Blocker | Link |
|----|-------|---------|------|
| [#4130](https://github.com/agentscope-ai/QwenPaw/pull/4130) | YingchaoX | Open | Skip chat history lookup para non-arrow keys |
| [#4126](https://github.com/agentscope-ai/QwenPaw/pull/4126) | qbc2016 | Open | Sanitize tool function schemas |
| [#4120](https://github.com/agentscope-ai/QwenPaw/pull/4120) | Morxi | Open | Matrix E2EE verification enhancement |

---

## Métricas Resumidas (24h)

| Métrica | Valor |
|---------|-------|
| Issues ativas/fechadas | 21/15 |
| PRs abertos/merged | 15/21 |
| Novas releases | 1 (v1.1.6-beta.1) |
| Bugs críticos reportados | 3 |
| Features requests | 5+ |
| PRs merged | 9 |

---

**Saúde Geral do Projeto:** 🟡 **Em Progresso** — Projeto ativo com хороший ritmo de desenvolvimento, mas com Issues críticos de performance (WebUI lag, GPU local) e estabilidade de canais que precisam de atenção imediata. A comunidade está engajada, especialmente em problemas pós-update e integrações corporativas.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-05-09

---

## 1. Panorama do Dia

O projeto ZeroClaw mantém um nível de atividade **muito elevado** nas últimas 24h, com 21 issues atualizadas e 45 PRs em movimento. A release **v0.7.5** acabou de ser publicada, trazendo uma reformulação significativa do onboarding e da arquitetura de providers. No entanto, a versão também desbloqueou uma onda de issues relacionados a regressions, especialmente nos canais WhatsApp e Matrix. A segurança aparece como preocupação central: uma falha S0 nos "fallback providers" que não herdam credenciais do `config.toml` foi corrigida (PR #6417 closed), e um bypass no ApprovalManager do dashboard web foi reportado (Issue #6207). O time está ativamente resolvendo problemas de build e CI para estabilizar o release.

---

## 2. Lançamentos

### 🆕 v0.7.5 — Released Hoje

**Changelog v0.7.4 → v0.7.5**

A release v0.7.5 é uma atualização substancial focada em três pilares:

| Pilar | Descrição |
|-------|-----------|
| **Onboarding in-browser** | Fluxo `/onboard` driven por schema, permitindo configuração completa sem CLI |
| **Gateway CRUD Surface** | Interface per-property com OpenAPI 3.1 spec e CLI tipada |
| **Three-surface Personality Editor** | CLI, TUI e interface web para edição de personalidade do agente |

> ⚠️ **Nota**: O workflow de release inicial falhou no job `web` com `Cannot find module './api-generated'` — PR #6502 ([Link](https://github.com/zeroclaw-labs/zeroclaw/pull/6502)) foi criado para corrigir e desbloquear o release.

---

## 3. Progresso do Projeto

### PRs Merged/Closed Hoje

| PR | Título | Impacto |
|----|--------|---------|
| [#6417](https://github.com/zeroclaw-labs/zeroclaw/pull/6417) | `feat(providers): separate llama.cpp into dedicated provider kind` | **Alto** — Refatoração crítica: `LlamaCppProvider` agora usa exclusivamente `/v1/responses`, separando do provider genérico OpenAI. Resolve issues #6377 e problemas com tool usage |
| [#6357](https://github.com/zeroclaw-labs/zeroclaw/pull/6357) | `feat(config,cost): per-provider pricing on ModelProviderConfig` | **Médio** — Permite `pricing: Option<ModelPricing>` por provider, desambiguando custos entre provedores do mesmo modelo |
| [#6532](https://github.com/zeroclaw-labs/zeroclaw/pull/6532) | `fix(providers,security,acp): Llama.cpp thinking output, ACP workspace path fix` | **Alto** — Corrige sandbox que bloqueava skill files quando `cwd` diferia do workspace; também adiciona política `/dev/null` |
| [#6533](https://github.com/zeroclaw-labs/zeroclaw/pull/6533) | `fix(config): respect ZEROCLAW_CONFIG_DIR in path field defaults` | **Médio** — Corrige 7 campos de path para respeitar `ZEROCLAW_CONFIG_DIR`, não apenas `~/.zeroclaw` |
| [#6534](https://github.com/zeroclaw-labs/zeroclaw/pull/6534) | `fix(sop): call reload() after SopEngine construction at both call sites` | **Crítico** — Bug: SOPs nunca eram carregados/executados em runtime porque `reload()` nunca era chamado |

### PRs Abertos com Alto Impacto

| PR | Título | Status | Comentários |
|----|--------|--------|-------------|
| [#6502](https://github.com/zeroclaw-labs/zeroclaw/pull/6502) | `fix(ci): unblock v0.7.5 release` | **needs-author-action** | Bloqueando release estável — adicionar `gen-api` antes do `tsc` |
| [#6523](https://github.com/zeroclaw-labs/zeroclaw/pull/6523) | `feat(config)!: V0.8.0 schema-mirror env-var grammar (breaking change)` | **⚠️ Integração v0.8.0** | Prepara breaking change no contrato de env-vars para v0.8.0 |
| [#5779](https://github.com/zeroclaw-labs/zeroclaw/pull/5779) | `feat(security): gated_commands TOTP gate for shell tool (phase 1)` | **needs-author-action** | Gate TOTP para comandos destrutivos específicos (`rm -rf`, `sudo`, etc.) |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Atividade (Comentários + Engajamento)

#### 🔥 #5937 — Unify providers architecture and reqwest client management
- **Status**: OPEN, blocked
- **Autor**: NiuBlibing | 8 comentários
- **Resumo**: Refatoração arquitetural para unificar providers e gerenciar `reqwest` consistentemente. Problemas incluem uso inconsistente de parâmetros de construção, duplicação de código significativa, e configuração fragmentada.
- **Impacto**: S2/workflow blocked para múltiplos canais
- **Link**: [Issue #5937](https://github.com/zeroclaw-labs/zeroclaw/issues/5937)

#### 🔥 #6153 — Matrix: voice transcription failed (Unsupported audio format)
- **Status**: CLOSED (resolvido)
- **Autor**: freeekanayaka | 7 comentários
- **Resumo**: Transcrição de voz falhava com Element Web/Android client — formato de áudio não suportado.
- **Link**: [Issue #6153](https://github.com/zeroclaw-labs/zeroclaw/issues/6153)

#### 🔥 #6207 — Web dashboard bypasses ApprovalManager (Security)
- **Status**: CLOSED, in-progress
- **Autor**: NiuBlibing | 2 comentários
- **Resumo**: Aprovação de ferramentas em modo supervisionado nunca aparece no dashboard web `/ws/chat`. O backend implementa `approval_request`/`approval_response` mas o frontend não os processa.
- **Severidade**: S1 - workflow blocked
- **Link**: [Issue #6207](https://github.com/zeroclaw-labs/zeroclaw/issues/6207)
- **Sibling PR**: [PR #6522](https://github.com/zeroclaw-labs/zeroclaw/pull/6522) implementa a UI de aprovação

#### 🔥 #6246 — WhatsApp Web channel broken after April 2026 protocol bump
- **Status**: OPEN, priority:p1
- **Autor**: alexandme | 6 comentários
- **Resumo**: Canal WhatsApp Web parou de funcionar após bump de protocolo server-side (~2026-04-24). Mensagens não fluem após pareamento.
- **Severidade**: S1 - workflow blocked
- **Link**: [Issue #6246](https://github.com/zeroclaw-labs/zeroclaw/issues/6246)

#### 🔥 #6399 — Custom remote provider sends local file paths instead of data URLs
- **Status**: OPEN, priority:p1
- **Autor**: vanbukin | 4 comentários
- **Resumo**: Provider vLLM remoto envia caminhos de arquivos locais (`file:///...`) ao invés de data URLs, quebrando requisições multimodais em setups distribuídos (Raspberry Pi + servidor LAN).
- **Severidade**: S1 - workflow blocked
- **Link**: [Issue #6399](https://github.com/zeroclaw-labs/zeroclaw/issues/6399)

#### 🔥 #6418 — Fallback Providers Fail to Inherit Credentials (S0 Security)
- **Status**: CLOSED
- **Autor**: kmukul123 | 4 comentários
- **Resumo**: Failover entre providers (e.g., Gemini → OpenRouter) falha porque credenciais do `config.toml` não são herdadas. Resulta em autenticação anônima no provider fallback.
- **Severidade**: S0 - data loss / security risk
- **Link**: [Issue #6418](https://github.com/zeroclaw-labs/zeroclaw/issues/6418)

---

## 5. Bugs e Estabilidade

### Por Severidade

#### 🔴 S0 — Data Loss / Security Risk (Crítico)

| Issue | Título | Status | Link |
|-------|--------|--------|------|
| #6418 | Fallback Providers Fail to Inherit Credentials | **CLOSED** | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/6418) |

#### 🔴 S1 — Workflow Blocked (Alto)

| Issue | Título | Status | Link |
|-------|--------|--------|------|
| #6246 | WhatsApp Web: messages don't flow after protocol bump | OPEN | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/6246) |
| #6399 | Custom provider sends file paths instead of data URLs | OPEN | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/6399) |
| #6207 | Web dashboard bypasses ApprovalManager | CLOSED (in-progress) | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/6207) |
| #6516 | ACP "cwd" change locks agent out of skill files | OPEN | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/6516) |
| #6530 | Build failure with matrix-sdk v0.16.0: recursion limit | OPEN | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/6530) |
| #6377 | Llama.cpp throws 500s when using tools | CLOSED | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/6377) |

#### 🟡 S2 — Degraded Behavior (Médio)

| Issue | Título | Status | Link |
|-------|--------|--------|------|
| #6153 | Matrix: voice transcription failed | CLOSED | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/6153) |
| #6431 | SQLite schema init fails during concurrent startup | OPEN | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/6431) |
| #6517 | Context overflow causes hallucination/topic drift | OPEN | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/6517) |
| #6528 | Trust system CA for provider requests | OPEN | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/6528) |
| #6526 | /api/events SSE drops tool-call events | OPEN | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/6526) |
| #6524 | Matrix root timeline creates separate threaded sessions | OPEN | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/6524) |
| #6520 | Gemini CLI provider crashes (outdated arg syntax) | OPEN | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/6520) |

#### 🟢 Build/CI Issues

| Issue/PR | Título | Impacto |
|----------|--------|---------|
| [#6502](https://github.com/zeroclaw-labs/zeroclaw/pull/6502) | Release v0.7.5 blocked: Cannot find module './api-generated' | Bloqueia release |
| [#6530](https://github.com/zeroclaw-labs/zeroclaw/issues/6530) | Recursion limit overflow com matrix-sdk v0.16.0 | Build quebrado |
| [#6447](https://github.com/zeroclaw-labs/zeroclaw/pull/6447) | Update GitHub Actions (Node 20→24 deprecation) | CI maintenance |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features com Prioridade Alta (p1)

| Issue | Título | Descrição | Link |
|-------|--------|-----------|------|
| #6465 | Bundle chat-ui as static assets in desktop binary | Desktop app deve inicializar sem gateway remoto; bundlar SPA estaticamente | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/6465) |
| #6499 | Desktop — macOS UI control handlers (screenshot, click, keys, AX, AppleScript) | Handlers para automação macOS via NodeClient persistente | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/6499) |
| #6320 | Desktop menu-bar: first-run onboarding parity | Novo usuário deve chegar ao chat funcional sem CLI | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/6320) |
| #6518 | First-Class Support for Custom/OpenAI-Compatible Providers (Kimi K2.5) | Eliminar workarounds para adicionar providers customizados | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/6518) |

### Features com Prioridade Média/Alta (p2)

| Issue | Título | Descrição | Link |
|-------|--------|-----------|------|
| #5937 | Unify providers architecture and reqwest client management | Refatoração arquitetural de providers | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5937) |
| #5838 | Webhook retry logic with exponential backoff | Implementar retry para falhas transientes em webhooks | [Link](https://github.com/zeroclaw-labs/zeroclaw/pull/5838) |
| #6068 | Configurable reply-intent precheck model + timeout | Classificador de intenção pode usar modelo mais leve | [Link](https://github.com/zeroclaw-labs/zeroclaw/pull/6068) |
| #6178 | Ollama provider: num_ctx/num_predict/temperature tuning | Tuning fino para Ollama via config.toml | [Link](https://github.com/zeroclaw-labs/zeroclaw/pull/6178) |

### Sinais de Roadmap — v0.8.0

| PR | Título | Impacto |
|----|--------|---------|
| [#6523](https://github.com/zeroclaw-labs/zeroclaw/pull/6523) | `feat(config)!: V0.8.0 schema-mirror env-var grammar` | **Breaking change** no contrato de env-vars. Base branch: `integration/v0.8.0` |

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Categoria | Descrição | Frequência |
|-----------|-----------|------------|
| **Canais quebrando com updates externos** | WhatsApp Web parou após protocolo bump sem warning | Múltiplos reports (#6246) |
| **Configuração de providers complexa** | Adicionar providers customizados (Kimi, vLLM) requer workarounds obscuros | Vários reports (#6399, #6518) |
| **Credenciais não persistem em failovers** | Fallback providers falham silenciosamente com credenciais ausentes | Reportado como S0 (#6418) |
| **Onboarding ainda depende de CLI** | Usuários desktop esperam UI graphical para setup inicial | Feature request #6320 |
| **Contexto longo causa alucinações** | Bots driftam após muitas trocas | Reportado #6517 |
| **Trust de certificados self-signed** | Provedores customizados com CAs internos não funcionam | Reportado #6528 |

### Cenários de Uso Reportados

| Cenário | Provider/Setup | Problema |
|---------|----------------|----------|
| Raspberry Pi + vLLM server LAN | vLLM 0.20.1, gemma-4-26b-a4b-it | File paths não são convertidos para data URLs |
| Ubuntu + RTX 5090 + Llama.cpp | Local inference | Provider 500s em tool usage |
| Element Web + Matrix | Canal Matrix voice | Formato de áudio não suportado |
| Desktop-first users | Tauri app | Não inicializa sem gateway reachable |

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta / Abandonadas

| Issue | Título | Idade | Prioridade | Nota |
|-------|--------|-------|------------|------|
| [#6474](https://github.com/zeroclaw-labs/zeroclaw/issues/6474) | LLM invocado duas vezes por request | 3 dias | p1 | in-progress mas sem resolution |
| [#6431](https://github.com/zeroclaw-labs/zeroclaw/issues/6431) | SQLite concurrent init failure | 3 dias | p2 | in-progress |
| [#6516](https://github.com/zeroclaw-labs/zeroclaw/issues/6516) | ACP cwd locks agent from skills | 2 dias | p1 | — |
| [#6526](https://github.com/zeroclaw-labs/zeroclaw/issues/6526) | SSE drops tool-call events | 1 dia | S2 | — |
| [#6528](https://github.com/zeroclaw-labs/zeroclaw/issues/6528) | System CA trust | 1 dia | S2 | Sem comentários |
| [#6520](https://github.com/zer

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*