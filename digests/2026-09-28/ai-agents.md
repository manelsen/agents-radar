# Resumo diário do ecossistema de agentes de IA 2026-09-28

> Issues: 18 | PRs: 9 | Projetos cobertos: 7 | Gerado em: 2026-09-27 22:45 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório de Projeto: NullClaw — 2026-09-28

---

## 1. Panorama do Dia

O projeto NullClaw demonstra **alta atividade de manutenção** em 28 de setembro de 2026, com 18 issues e 9 PRs atualizados nas últimas 24h. Não houve lançamentos formais, mas o ritmo de resoluções indica uma equipe ativa — 16 das 18 issues foram fechadas hoje, e 8 de 9 PRs atingiram merge ou fechamento. A ênfase do dia recai sobre **correções de segurança no protocolo A2A** e **melhorias na experiência do usuário**, como a implementação do fluxo de aprovação para comandos arriscados e correções em integrações com Teams, Matrix e provedores de IA. O projeto mantém uma cadência saudável deevolução, balanceando correções de bugs críticos com introdução de features solicitadas pela comunidade.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto não publicou novas versões neste período. Isso não indica estagnação — pelo contrário, a alta proporção de PRs fechados (8 de 9) sugere que conteúdo para uma futura release está sendo acumulado no branch principal, possivelmente para um lançamento coordenado.

> 📦 **Nota:** Para acompanhar lançamentos, consulte a [página de releases do NullClaw](https://github.com/nullclaw/nullclaw/releases).

---

## 3. Progresso do Projeto

Os PRs mais relevantes merged/fechados hoje:

| # | PR | Resumo | Impacto |
|---|-----|--------|---------|
| [#1009](https://github.com/nullclaw/nullclaw/pull/1009) | `fix(exec): pause for /approve on medium/high-risk commands` | Corrige falha no supervised mode que rejeitava comandos arriscados ao invés de pausar para aprovação do usuário | 🔒 Segurança & UX |
| [#969](https://github.com/nullclaw/nullclaw/pull/969) | `feat(agent): structured approval_request/approval_response flow` | Implementa fluxo de dois-turns para aprovação de ferramentas危险as com emissão de eventos SSE | 🛡️ Supervised Autonomy |
| [#990](https://github.com/nullclaw/nullclaw/pull/990) | `feat(providers): add Eden AI as OpenAI-compatible gateway` | Adiciona Eden AI como gateway compatível com OpenAI, roteando para múltiplos vendors upstream com uma única chave | ☁️ Integrações |
| [#968](https://github.com/nullclaw/nullclaw/pull/968) | `fix(matrix): persist next_batch across restart + test env isolation` | Resolve perda de cursor de sincronização no Matrix após reinicializações | 🐛 Estabilidade |
| [#958](https://github.com/nullclaw/nullclaw/pull/958) | `fix(teams): accept lowercase serviceurl JWT claim` | Corrige rejeição 403 em mensagens MS Teams por incompatibilidade de casing no claim JWT | 🐛 Estabilidade |
| [#667](https://github.com/nullclaw/nullclaw/pull/667) | `feat(email): full bidirectional IMAP polling with IDLE` | Transforma canal de email em bidirecional com suporte a IDLE e fallback para polling | 📧 Canais |
| [#527](https://github.com/nullclaw/nullclaw/pull/527) | `feat: adaptive intelligence pipeline + email/WhatsApp Web channels` | Adiciona pipeline de inteligência adaptativa com turn scoring e skill routing, além de canais email e WhatsApp Web | 🚀 Features |
| [#956](https://github.com/nullclaw/nullclaw/pull/956) | `ci(deps): bump alpine from 3.23 to 3.24` | Atualização de dependência Docker pelo Dependabot | 🔧 DevOps |

**Destaque principal:** A combinação dos PRs [#969](https://github.com/nullclaw/nullclaw/pull/969) e [#1009](https://github.com/nullclaw/nullclaw/pull/1009) representa um avanço significativo no modelo de segurança do NullClaw — a feature de supervised autonomy finalmente opera conforme especificada no `webchannel_v1` spec, pausando comandos de risco médio/alto para aprovação ao invés de falhar silenciosamente.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários + reações)

| # | Título | Comentários | 👍 | Status | Tema |
|---|--------|:-----------:|:--:|--------|------|
| [#183](https://github.com/nullclaw/nullclaw/issues/183) | WhatsApp Web support via Baileys (QR Code) | 5 | 2 | CLOSED | 📱 Canal alternativo |
| [#764](https://github.com/nullclaw/nullclaw/issues/764) | Add NullClaw logo to Agent Skills client list | 4 | 0 | OPEN | 🌐 Visibilidade |
| [#449](https://github.com/nullclaw/nullclaw/issues/449) | Docker Hub image installation | 4 | 1 | CLOSED | 🐳 Deploy |
| [#613](https://github.com/nullclaw/nullclaw/issues/613) | Improve config.json descriptions | 2 | **4** | CLOSED | 📖 DX/Documentação |
| [#376](https://github.com/nullclaw/nullclaw/issues/376) | DingTalk send-only limitation | 4 | 0 | CLOSED | 📱 Canal DingTalk |
| [#354](https://github.com/nullclaw/nullclaw/issues/354) | Homebrew upgrade breaks service | 4 | 0 | CLOSED | 🍺 Distribuição |
| [#619](https://github.com/nullclaw/nullclaw/issues/619) | Improve error message: error.ApiError | 4 | 1 | CLOSED | 🐛 DX/Debugging |

### Análise das demandas quentes

**1. WhatsApp Web via Baileys (#183)** — A solicitação de suporte a WhatsApp Web via biblioteca Baileys reflete uma necessidade recorrente da comunidade: muitos usuários não possuem conta Meta Business para usar a Cloud API. A library Baileys permite conexões diretas via QR Code, eliminando barreiras de entrada. O issue foi fechado, sugerindo que está planejado ou já está em desenvolvimento via PRs como [#527](https://github.com/nullclaw/nullclaw/pull/527).

**2. Inclusão no Agent Skills Client List (#764)** — A comunidade reconhece o valor estratégico de ser listado em [agentskills.io/clients](https://agentskills.io/clients). O issue demonstra maturidade do NullClaw como plataforma de referência para skills de agentes.

**3. Melhoria de descrições no config.json (#613)** — Com 4 👍, este é o issue com maior engajamento positivo. A dor real é a curva de aprendizado elevada para novos usuários: configurações sem explicação prática geram frustração. A correção melhora a onboarding experience.

**4. Homebrew upgrade quebra o serviço (#354)** — Problema de packaging recorrente: o caminho hardcoded para a versão do Cellar no LaunchAgent plist quebra após upgrades. Este é um problema de qualidade de distribuição que precisa de solução permanente.

---

## 5. Bugs e Estabilidade

### Bugs reportados nas últimas 24h

| Severidade | Issue | Descrição | Status |
|:-----------|-------|-----------|:------:|
| **🔴 Crítica** | [#974](https://github.com/nullclaw/nullclaw/issues/974) | Bearer token A2A permite cross-caller context reuse — Bob consegue acessar contexto e histórico de tarefas de Alice | OPEN |
| 🟠 Alta | [#354](https://github.com/nullclaw/nullclaw/issues/354) | Homebrew upgrade quebra serviço por caminho hardcoded | CLOSED |
| 🟠 Alta | [#900](https://github.com/nullclaw/nullclaw/issues/900) | `approval_request` nunca emitido — supervised mode falha ao invés de pausar | CLOSED |
| 🟡 Média | [#477](https://github.com/nullclaw/nullclaw/issues/477) | 飞书 (Feishu) WebSocket desconecta durante uso | CLOSED |
| 🟡 Média | [#665](https://github.com/nullclaw/nullclaw/issues/665) | `error.NoResponseContent` no Windows assembly | CLOSED |
| 🟡 Média | [#408](https://github.com/nullclaw/nullclaw/issues/408) | Tool call parsing quebra JSON válido — colon extraído como tool name | CLOSED |
| 🟢 Baixa | [#958](https://github.com/nullclaw/nullclaw/pull/958) | Teams rejeita mensagens com 403 por lowercase JWT claim | CLOSED |
| 🟢 Baixa | [#968](https://github.com/nullclaw/nullclaw/pull/968) | Matrix perde cursor de sync após restart | CLOSED |

### Análise crítica

**#974 — Falha de segurança no protocolo A2A:** Este é o issue mais crítico em aberto. O problema: `/a2a` autentica via bearer token, mas tarefas e sessões são selecionadas apenas por `taskId` e `contextId` fornecidos pelo chamador. Isso permite que callers compartilhando um bearer válido leiam o histórico e reutilizem o contexto de outros callers. Um PR associado ([#1012](https://github.com/nullclaw/nullclaw/pull/1012)) foi aberto em 2026-09-27 para corrigir este problema, o que é uma resposta rápida da equipe.

> ⚠️ **Recomendação:** Priorizar revisão e merge do PR #1012 antes do próximo release. Esta é uma vulnerabilidade de escalação de contexto.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas solicitações em destaque

**[#764](https://github.com/nullclaw/nullclaw/issues/764) — Inclusão no Agent Skills Client List (ABERTA)**
A plataforma Agent Skills ([agentskills.io](https://agentskills.io/)) adicionou uma página de clientes. O pedido é oficializar o NullClaw como cliente skills-compatible. Isso amplia a visibilidade do projeto no ecossistema de agentes de IA.

**Sinais de roadmap inferidos dos PRs fechados:**
- **WhatsApp Web** — suportado via PR [#527](https://github.com/nullclaw/nullclaw/pull/527) (email/WhatsApp Web channels)
- **Eden AI** — gateway OpenAI-compatible adicionado via PR [#990](https://github.com/nullclaw/nullclaw/pull/990)
- **Email bidirecional** — IMAP IDLE implementado via PR [#667](https://github.com/nullclaw/nullclaw/pull/667)
- **Supervisioned Autonomy** — fluxo de aprovação estruturado via PRs [#969](https://github.com/nullclaw/nullclaw/pull/969) e [#1009](https://github.com/nullclaw/nullclaw/pull/1009)
- **Adaptive Intelligence Pipeline** — turn scoring e skill routing via PR [#527](https://github.com/nullclaw/nullclaw/pull/527)

**Demandas não atendidas (sinais de backlog):**
- **JIRA access tool** — Issue [#914](https://github.com/nullclaw/nullclaw/issues/914) foi fechado, mas sem PR associado. Ferramenta de integração com JIRA para gerenciamento de projetos continua pendente.
- **DingTalk bidirecional** — Issue [#376](https://github.com/nullclaw/nullclaw/issues/376) indica que DingTalk ainda é send-only. 尽管 foi fechado, não há evidência de implementação de receive mode.
- **ddgs para web_search** — Issue [#623](https://github.com/nullclaw/nullclaw/issues/623) solicita integração com biblioteca metasearch, mas foi fechado sem implementação.

---

## 7. Resumo de Feedback dos Usuários

### Dores reais identificadas

| Categoria | Descrição | Evidência |
|-----------|-----------|-----------|
| **DX: Onboarding** | Configurações sem descrição clara no `config.json` geram frustração em novos usuários | [#613](https://github.com/nullclaw/nullclaw/issues/613) — 4 👍 |
| **DX: Deploy** | Ausência de imagem oficial no Docker Hub é barreira para adoption | [#449](https://github.com/nullclaw/nullclaw/issues/449) |
| **DX: Web UI** | Documentação da Web UI em servidor headless é inacessível para usuários não-técnicos | [#861](https://github.com/nullclaw/nullclaw/issues/861) |
| **Distribuição** | Upgrades via Homebrew quebram silenciosamente o serviço | [#354](https://github.com/nullclaw/nullclaw/issues/354) |
| **Canais** | Meta Business API é barreira de entrada — muitos usuários preferem WhatsApp Web (Baileys) | [#183](https://github.com/nullclaw/nullclaw/issues/183) |
| **Debugging** | Mensagens de erro genéricas ("error.ApiError") dificultam troubleshooting | [#619](https://github.com/nullclaw/nullclaw/issues/619) |

### Cenários de uso observados

1. **Agente de runtime sem memória** — Usuários configuram NullClaw como runtime leve para modelos locais (LM Studio, Llama), reportando erros de parsing JSON no tool calling
2. **Integração empresarial** — MS Teams, DingTalk, Matrix como canais corporativos
3. **Personalização via skills** — Usuários tentam criar skills customizadas, encontrando barreiras de integração (issue #427)
4. **Supervisioned automation** — Empresas querem agentes que solicitem aprovação para comandos arriscados

### Satisfação geral

**Positiva** em termos de resposta da equipe — bugs recebem patches rapidamente (ex: #974 reportado em 2026-07-10, PR #1012 aberto em 2026-09-27). A comunidade demonstra interesse ativo com issues bem documentados e PRs de qualidade (ex: PRs de sanderdewijs, addadi, valonmulolli).

**Ponto de atenção:** Regressões de distribuição (Homebrew) e erros de parsing de tool calls afetam a confiabilidade percebida. A documentação de configuração precisa de atenção urgente.

---

## 8. Backlog que Merece Atenção

### Issues antigas sem movimento

| # | Título | Criado | Atualizado | Comentários | Status | Prioridade |
|---|--------|--------|------------|:-----------:|:------:|:----------:|
| [#914](https://github.com/nullclaw/nullclaw/issues/914) | Create JIRA access tool | 2026-05-13 | 2026-09-27 | 2 | CLOSED | 🟡 Média |
| [#376](https://github.com/nullclaw/nullclaw/issues/376) | DingTalk send-only limitation | 2026-03-08 | 2026-09-27 | 4 | CLOSED | 🟡 Média |
| [#623](https://github.com/nullclaw/nullclaw/issues/623) | Add ddgs option for web_search | 2026-03-18 | 2026-09-27 | 3 | CLOSED | 🟢 Baixa |
| [#957](https://github.com/nullclaw/nullclaw/issues/957) | Rate limit configuration unclear | 2026-06-15 | 2026-09-27 | 2 | CLOSED | 🟢 Baixa |

### Issues abertas que precisam de resposta

| # | Título | Criado | Comentários | Situação |
|---|--------|--------|:-----------|----------|
| [#764](https://github.com/nullclaw/nullclaw/issues/764) | Add NullClaw logo to Agent Skills client list | 2026-04-03 | 4 | Aguarda posicionamento dos mantenedores |
| [#974](https://github.com/nullclaw/nullclaw/issues/974) | Security: A2A bearer cross-caller context reuse | 2026-07-10 | 1 | PR #1012 em aberto — precisa de revisão |

### Recomendações para mantenedores

1. **Revisar PR #1012 urgentemente** — fecha vulnerabilidade #974. Prioridade de segurança.
2. **Documentar roadmap

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo do Ecossistema de Agentes de IA Open Source

## 2026-09-28

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **alta atividade distribuída** em 28 de setembro de 2026, com ZeroClaw liderando em volume absoluto (44 issues, 50 PRs), enquanto Hermes Agent demonstra o maior acúmulo de trabalho pendente (48 issues abertas vs. apenas 2 fechadas). A ausência de releases formais em todos os projetos indica uma fase coletiva de estabilização pré-lançamento. Os desafios técnicos convergem para **segurança de delegação**, **estabilidade cross-platform** e **persistência de sessões** — problemas que transcendem implementações individuais e sugerem maturização natural do ecossistema. A fragmentação em canais de mensageria (Teams, DingTalk, Feishu, WhatsApp) evidencia a pressão por suporte multilataforma, enquanto a ênfase em supervised autonomy e approval flows revela uma tendência朝着 controle de agente mais granular.

---

## 2. Comparação de Atividade

| Projeto | Issues Abertas | PRs Abertos | PRs Merged/Closed | Releases (24h) | Bugs Críticos | Saúde Geral |
|---------|:-------------:|:-----------:|:-----------------:|:--------------:|:-------------:|:----------:|
| **ZeroClaw** | 44 | 50 | 3 | 0 | 2 S0 | ⚠️ Ativo, risco segurança |
| **Hermes Agent** | 48 | 49 | 3 | 0 | 5 P0/P1 | 🔴 Alto backlog |
| **NullClaw** | 18 | 9 | 24 | 0 | 1 | 🟢 Estável |
| **CoPaw** | 7 | 5 | 0 | 0 | 1 | 🟡 Ativo, PRs pendentes |
| **NanoBot** | 5 | 11 | 6 | 0 | 1 P0 | ⚠️ Estável com incidentes |
| **IronClaw** | 1 | 5 | 1 | 0 | 0 | ✅ Saudável |
| **PicoClaw** | 2 | 2 | 1 | 0 | 1 | 🟡 Baixa atividade |

**Observação:** Hermes Agent apresenta o maior desequilíbrio entre volume de entrada e resolução (48 abertas vs. 2 fechadas), sinalizando gargalo de review ou crescimento acelerado não absorvido pela equipe.

---

## 3. Posicionamento do Projeto Principal

### ZeroClaw como Líder de Volume

O ZeroClaw lidera em atividade absoluta, posicionando-se como o projeto mais ativamente desenvolvido do ecossistema. Seus diferenciais técnicos incluem:

| Diferencial | Descrição |
|-------------|-----------|
| **Arquitetura de Sandbox** | Schema canônico de política de sandbox (PR #7821) com enforcement na camada de aplicação — abordagem pioneiera em isolamento de agentes |
| **Delegação de Código** | Suporte a múltiplos coding CLIs (Anthropic Claude Code, Google agy, Codex) via `#11076` |
| **Memória como Camada First-Class** | RFC para knowledge graph como memória nativa do agente (#11053) — mudança arquitetural significativa |
| **Voice-First** | Canal WebSocket backend-agnóstico para voz (#7943) |

### NullClaw como Referência de Estabilidade

NullClaw demonstra maturidade através de sua proporção de resolução (16 de 18 issues fechadas, 8 de 9 PRs merged), indicando processos de review eficientes. Seus PRs [#969](#969) e [#1009](#1009) estabelecem o padrão para supervised autonomy no ecossistema.

### Hermes Agent como Campo de Experimentação

Com 100 issues/PRs atualizados em 24h, Hermes Agent lidera em volume de contribuições, mas enfrenta desafios de throughput — apenas 2 issues fechadas e 1 PR merged. A arquitetura de gateway unificado (PR #106742) representa uma proposta ambiciosa de consolidação.

---

## 4. Focos Técnicos Compartilhados

### 4.1 Segurança de Delegação e Contexto

**Três projetos identificaram vulnerabilidades críticas relacionadas a compartilhamento indevido de contexto:**

| Projeto | Vulnerabilidade | Severidade |
|---------|-----------------|:----------:|
| ZeroClaw | Ferramentas de memória delegadas perdem scope do principal (#11198) | S0 |
| ZeroClaw | Session resume restaura ambiente após revogação admin (#11197) | S0 |
| NullClaw | Bearer token A2A permite cross-caller context reuse (#974) | Crítica |

**Implicação:** A delegação de agentes para sub-agentes ou ferramentas externas emerge como vetor de risco recorrente. Os projetos estão convergindo para a necessidade de *princípios de menor privilégio* em nível de escopo de memória.

### 4.2 Estabilidade Cross-Platform

**Três projetos reportam problemas críticos específicos de plataforma:**

| Plataforma | Projeto | Problema |
|------------|---------|----------|
| **Windows** | Hermes Agent | Installation fails at python dependencies step (#125657) |
| **Windows** | CoPaw | Double-launch abre janelas duplicadas (#8000) |
| **Windows** | ZeroClaw | Ctrl+C causa force quit (#9028) |
| **macOS** | Hermes Agent | Desktop renders duplicate assistant reply (#123801) |

### 4.3 Persistência e Recuperação de Estado

**Três projetos estão refatorando suas camadas de persistência:**

| Projeto | Abordagem | Status |
|---------|-----------|--------|
| NanoBot | SQLite transactions substituindo JSONL (#5943) | PR aberta |
| NanoBot | Persistence off event loop (#5580) | PR pendente há 30+ dias |
| Hermes Agent | Gateway unificado para sessões locais (#106742) | PR P1 |

### 4.4 Suporte a Modelos GPT-6

**NanoBot é o único projeto com issues dedicadas ao suporte de GPT-6 series:**

- #5898 — GPT-6 via GitHub Copilot não funciona na v0.3.5
- #5939 — Codex model discovery omite GPT-6 Sol e Luna
- #5935 — Route GPT-6 through Responses API (PR aberta)

---

## 5. Análise de Diferenciação

### 5.1 Por Público-Alvo

| Projeto | Público Primário | Posicionamento |
|---------|------------------|----------------|
| **NullClaw** | Desenvolvedores corporativos | Supervised autonomy, integrações empresariais (Teams, Matrix) |
| **NanoBot** | Usuários multi-canal | WebUI-first, PWA mobile, Feishu/Discord/Telegram |
| **Hermes Agent** | Power users CLI/TUI | Kanban dispatcher, cron jobs, desktop app |
| **ZeroClaw** | Segurança-first | Sandbox, delegação controlada, anti-SSRF |
| **CoPaw** | Acessibilidade | Desktop UI customizável, QwenPaw branding |
| **PicoClaw** | Comunidades legacy | Bridges IRC/QQ, minimalismo |
| **IronClaw** | Performance | BM25F + embeddings para tool selection, WASM runtime |

### 5.2 Por Arquitetura Técnica

```
┌─────────────────────────────────────────────────────────────────┐
│                    ARQUITETURA DE DELEGAÇÃO                     │
├─────────────────────────────────────────────────────────────────┤
│  HERMES AGENT  │  Unificação: CLI/TUI/Desktop/API em 1 gateway │
│  ZEROClaw      │  Sandbox Policy Schema + Canonical enforcement│
│  NULLClaw      │  Supervised Autonomy com approval_request flow │
├─────────────────────────────────────────────────────────────────┤
│                    ARQUITETURA DE CANAIS                         │
├─────────────────────────────────────────────────────────────────┤
│  NANOBOT       │  WebSocket + PWA, polling WeChat suprimido    │
│  PICOCLAW      │  OneBot (QQ) + DingTalk Stream SDK            │
│  NULLClaw      │  IMAP IDLE + WhatsApp Web via Baileys         │
├─────────────────────────────────────────────────────────────────┤
│                    ARQUITETURA DE PERSISTÊNCIA                  │
├─────────────────────────────────────────────────────────────────┤
│  NANOBOT       │  SQLite (em refatoração)                      │
│  HERMES AGENT  │  Snapshots com risco de pruning silencioso    │
│  ZEROClaw      │  Qdrant vector recall + checkpoint atômico    │
└─────────────────────────────────────────────────────────────────┘
```

### 5.3 Por Estratégia de Features

| Estratégia | Projetos | Exemplos |
|------------|---------|----------|
| **Extensibilidade** | ZeroClaw, NullClaw | Bridges de tool discovery, provider gateways |
| **Minimalismo** | PicoClaw, IronClaw | Core functionality, dep updates |
| **UX/Desktop** | CoPaw, NanoBot | PWA, font sizing, navigation |
| **Automação** | Hermes Agent | Kanban, cron workers, scheduled tasks |

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração

| Projeto | PRs Merged (24h) | Proporção Resolved/Opened | Classificação |
|---------|:----------------:|:-------------------------:|:-------------:|
| **NullClaw** | 24 | 1.33:1 | 🔄 Consolidando |
| **NanoBot** | 6 | 0.54:1 | ⚠️ Crescendo |
| **CoPaw** | 0 | 0:1 | 🟡 Acumulando |
| **IronClaw** | 1 | 1:5 | 🟢 Manutenção |
| **PicoClaw** | 1 | 0.5:1 | 🟢 Estável |
| **ZeroClaw** | 3 | 0.06:1 | 🔴 Volume alto |
| **Hermes Agent** | 3 | 0.02:1 | 🔴 Gargalo |

### 6.2 Qualidade de Reportes

**Projetos com Issues Mais Detalhadas:**

| Posição | Projeto | Indicador |
|---------|---------|-----------|
| 1 | **ZeroClaw** | Issues S0 com stack traces, reprodução steps, componentes afetados |
| 2 | **NullClaw** | PRs com contexto de segurança, spec references, video evidence |
| 3 | **NanoBot** | Issues P0 com contexto de falha, env details, workaround proposals |

**Projetos com Issues Genéricas/Pouco Detalhadas:**

| Posição | Projeto | Indicador |
|---------|---------|-----------|
| 7 | **Hermes Agent** | 48 issues abertas sem priorização clara visível |

### 6.3 Contribuidores Externos

| Projeto | Contribuidor Notável | Contribuição |
|---------|---------------------|--------------|
| **NullClaw** | sanderdewijs, addadi, valonmulolli | PRs de qualidade documentados |
| **ZeroClaw** | @Audacity88 | Feature SSRF protection gate |
| **PicoClaw** | ycsqwan | Feature request + PR para OneBot toggle |

---

## 7. Sinais de Tendência

### 7.1 Tendências Confirmadas

| Tendência | Evidência | Projetos |
|-----------|-----------|----------|
| **Supervised Autonomy** | Approval flows estruturados com SSE events | NullClaw, ZeroClaw |
| **Persistência Refatorada** | Migração de JSONL para SQLite/transactions | NanoBot, Hermes Agent |
| **Multi-Provider Gateway** | Abstração OpenAI-compatible para múltiplos vendors | NullClaw (Eden AI) |
| **Voice-First Interfaces** | WebSocket backend-agnóstico para ASR/TTS | ZeroClaw (#7943) |
| **Tool Selection Inteligente** | BM25F + embeddings para rankeamento | IronClaw (#8113) |
| **Acessibilidade Desktop** | Font sizing, PWA iOS, double-launch guards | CoPaw, NanoBot |

### 7.2 Demandas Não Atendidas (Backlog Comum)

| Demanda | Projetos Afetados | Status |
|---------|-------------------|--------|
| **JIRA Integration** | NullClaw (#914) | Closed sem PR |
| **DingTalk Bidirecional** | NullClaw (#376), PicoClaw (#3382) | Send-only / Panic |
| **Windows Stability** | Hermes Agent, CoPaw, ZeroClaw | Bugs em aberto |
| **WhatsApp Web** | NullClaw (#183) | Implementado via Baileys em PR #527 |

### 7.3 Riscos Sistêmicos Identificados

1. **Fragmentação de Canais de Mensageria**: 4 projetos investindo em DingTalk/Feishu/OneBot com implementações isoladas — risco de duplicação de esforço.

2. **Dependência de Providers**: Suporte GPT-6 fragmentado (NanoBot com 3 issues dedicadas) indica que a comunidade está sendo impactada por mudanças de API de provedores.

3. **Backlog de Segurança**: ZeroClaw e NullClaw publicando vulnerabilidades críticas simultaneamente sugere que a superfície de ataque em delegation patterns está amadurecendo, não amadurecida.

---

## 8. Recomendações Estratégicas

### Para Desenvolvedores Escolherem um Projeto

| Necessidade | Projeto Recomendado | Justificativa |
|-------------|---------------------|---------------|
| Segurança de sandbox | **ZeroClaw** | Canonical sandbox policy, anti-SSRF gates |
| Integração empresarial | **NullClaw** | Teams/Matrix/DingTalk, supervised autonomy |
| WebUI/PWA mobile | **NanoBot** | PWA iOS, WebSocket polling otimizado |
| CLI automation | **Hermes Agent** | Kanban dispatcher, cron workers |
| Minimalismo/Legacy | **PicoClaw** | IRC/QQ bridges, baixa dependência |
| Performance WASM | **IronClaw** | BM25F tool selection, dep updates |
| Acessibilidade | **CoPaw** | Font sizing, desktop UX |

### Para Mantenedores

| Prioridade | Ação | Projetos |
|------------|------|----------|
| 🔴 Imediato | Revisar PRs de segurança (#1012, #11198, #11197) | NullClaw, ZeroClaw |
| 🔴 Crítico | Atender cron workers em self-managed installs | Hermes Agent |
| ⚠️ Alta | Merge PR de persistência SQLite off event loop | NanoBot (#5580) |
| ⚠️ Alta | Corrigir double-launch Windows | CoPaw (#8000) |
| 🟡 Oportunidade | Unificar implementação de DingTalk entre NullClaw e PicoClaw | NullClaw, PicoClaw |

---

*Relatório gerado em 2026-09-28. Dados consolidados de 7 projetos do ecossistema open source de agentes de IA.*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório de Projeto — NanoBot (HKUDS/nanobot)

**Data de referência:** 2026-09-28  
**Período analisado:** últimas 24 horas

---

## 1. Panorama do Dia

O NanoBot manteve **alta atividade de desenvolvimento** nas últimas 24 horas, com **17 PRs atualizados** (6 merged/fechados) e **5 issues abertas/ativas**. Nenhum novo release foi publicado. A atividade concentra-se em **correções de bugs de prioridade P1 e P0**, especialmente relacionadas à estabilidade do provider OpenAI (GPT-6), persistência de sessões e cron jobs. A comunidade demonstra engajamento significativo em melhorias de UX (WebUI) e suporte a novos modelos de IA. O projeto encontra-se em fase de estabilização pré-release, com foco em eliminar regressions e refinar integrações com canais externos (Feishu, Discord, Telegram, WeChat).

---

## 2. Lançamentos

**Nenhum novo release** publicado nas últimas 24 horas.

> **Nota:** O último release disponível continua sendo **v0.3.5**, que apresenta issues conhecidas com suporte ao GPT-6 series via GitHub Copilot (issues #5898 e #5939).

---

## 3. Progresso do Projeto

### PRs Merged/Closed (6 total)

| # | Título | Prioridade | Impacto |
|---|--------|------------|---------|
| [#5937](https://github.com/HKUDS/nanobot/pull/5937) | `fix(providers): stop Responses streams at terminal events` | P1 | Encerramento correto de streams SSE e SDK Responses ao detectar eventos terminais, evitando vazamento de recursos |
| [#5938](https://github.com/HKUDS/nanobot/pull/5938) | `fix(providers): preserve optional tool parameters in Responses requests` | P1 | Correção de regression: parâmetros `strict` e tool schemas opcionais agora preservados, evitando forçar MCP filters como requeridos |
| [#5865](https://github.com/HKUDS/nanobot/pull/5865) | `fix: preserve primary context window with smaller fallbacks` | P2 | Presets de 256K mantêm budget configurado mesmo com fallbacks de 200K; Failover preserva prompt existente |
| [#5934](https://github.com/HKUDS/nanobot/pull/5934) | `fix(webui): unblock earlier-history pagination and show retry states` | P2 | Paginação de histórico anterior agora acessível mesmo quando página não preenche viewport; feedback visual para loading/falhas |
| [#5944](https://github.com/HKUDS/nanobot/pull/5944) | `feat(webui): polish the GitHub star invitation` | — | Ilustração orange-tabby, copy mais amigável em 10 idiomas, layout responsivo com animações |
| [#5936](https://github.com/HKUDS/nanobot/pull/5936) | `fix(weixin): silence polling request logs` | P2 | Supressão de logs HTTP de polling WeChat (~18s), melhorando visibilidade de output do gateway |

### Destaque Técnico
Os PRs [#5937](https://github.com/HKUDS/nanobot/pull/5937) e [#5938](https://github.com/HKUDS/nanobot/pull/5938) resolvem **regressões críticas** no Responses API introduzidas na v0.3.5, fundamentais para estabilidade do GPT-6.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários/reações)

| # | Título | Comentários | Reações | Tema |
|---|--------|-------------|---------|------|
| [#5903](https://github.com/HKUDS/nanobot/issues/5903) | Feishu: hidden session-checkpoint marker delivered to user | 3 | 0 | Canal/UX |
| [#5898](https://github.com/HKUDS/nanobot/issues/5898) | GPT-6 model series through GitHub Copilot não funciona | 1 | 0 | Provider |
| [#5924](https://github.com/HKUDS/nanobot/issues/5924) | Agent stuck in sudo loop | 1 | 0 | Core/Agent |

### Análise das Demandas

**Maior atenção:** A issue [#5903](https://github.com/HKUDS/nanobot/issues/5903) sobre o canal Feishu gerou o maior número de comentários (3), indicando que a **exposição de mensagens internas de checkpoint aos usuários finais** é uma questão de UX significativa. O marcador `Continue the active task from the working-memory checkpoint above` deveria ser oculto, mas é exposto após idle auto-compaction.

**Padrão recorrente:** Três issues (#5898, #5939, #5935) tratam de **suporte a modelos GPT-6 via GitHub Copilot e OpenAI Codex**, revelando que a integração com os modelos mais recentes da família GPT-6 é uma **dor crítica** para usuários. O PR [#5935](https://github.com/HKUDS/nanobot/pull/5935) já endereça o roteamento via Responses API.

---

## 5. Bugs e Estabilidade

### Issues Abertas (por severidade)

#### 🔴 P0 — Crítico
| # | Título | Descrição |
|---|--------|-----------|
| [#5932](https://github.com/HKUDS/nanobot/issues/5932) | Cron pending actions lost if store cannot be saved | `_merge_action()` limpa `action.jsonl` antes de `_save_store()`. Falha de escrita (ex: ENOSPC) descarta ações pendentes sem recovery |

#### 🟠 P1 — Alto
| # | Título | Descrição |
|---|--------|-----------|
| [#5903](https://github.com/HKUDS/nanobot/issues/5903) | Feishu: hidden checkpoint marker exposto ao usuário | Mensagem interna de session-checkpoint entregue como mensagem comum |
| [#5898](https://github.com/HKUDS/nanobot/issues/5898) | GPT-6 via GitHub Copilot não funciona na v0.3.5 | Erro de provider configuration com modelos GPT-6 |
| [#5939](https://github.com/HKUDS/nanobot/issues/5939) | Codex model discovery omite GPT-6 Sol e Luna | Client version pinned (0.153.4) não retorna modelos mais recentes |

#### 🟡 P2 — Médio
| # | Título | Descrição |
|---|--------|-----------|
| [#5924](https://github.com/HKUDS/nanobot/issues/5924) | Agent stuck in sudo loop | Sudo expira em um turno; agente entra em loop; obsesso por comandos não executados |
| [#5931](https://github.com/HKUDS/nanobot/pull/5931) | Telegram: newline/tab args e emails truncados | Parsing de comandos com múltiplas linhas e emails não preserva argumentos |

### PRs Abertos Relacionados a Bugs
- [#5933](https://github.com/HKUDS/nanobot/pull/5933) — `fix(cron): preserve pending actions until store save succeeds` (P0)
- [#5935](https://github.com/HKUDS/nanobot/pull/5935) — `fix(copilot): route GPT-6 through Responses` (P2)
- [#5940](https://github.com/HKUDS/nanobot/pull/5940) — `fix(providers): expose GPT-6 Sol and Luna in Codex model discovery` (P2)
- [#5864](https://github.com/HKUDS/nanobot/pull/5864) — `fix(discord): cancel delayed reaction tasks on runtime reset` (P2)
- [#5257](https://github.com/HKUDS/nanobot/pull/5257) — `fix(agent): bound sustained-goal continuation when turn goes idle` (P2)

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features em Desenvolvimento

| # | Título | Descrição | Roadmap Signal |
|---|--------|-----------|----------------|
| [#5943](https://github.com/HKUDS/nanobot/pull/5943) | `refactor(session): centralize state ownership in SQLite` | Substitui JSONL por SQLite transactions; estado unificado em worker dedicado | **Core Architecture** — Refatoração fundamental de persistência |
| [#5941](https://github.com/HKUDS/nanobot/pull/5941) | `feat(webui): connect to existing remote nanobot instances` (NAN-157) | Descoberta de instâncias remotas via WebUI local | **DX/Usabilidade** — Conexão remote seamless |
| [#5942](https://github.com/HKUDS/nanobot/pull/5942) | `fix(webui): provide iOS PWA top-edge color surface` | Correção visual para iOS standalone PWA | **Mobile/WebUI** |
| [#5580](https://github.com/HKUDS/nanobot/pull/5580) | `fix(session): move persistence off event loop` | Dispatcher para I/O de sessões sem bloquear event loop | **Performance** — P1 |

### Sinais de Roadmap
- **Suporte a GPT-6 models** é prioridade clara (3 issues + 2 PRs)
- **Persistência em SQLite** indica movimento para arquitetura mais robusta
- **Melhorias de WebUI/PWA** mostram foco em experiência de usuário
- **Refatoração de providers** para Responses API

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Categoria | Problema | Impacto |
|-----------|----------|---------|
| **Provider/GPT-6** | Modelos GPT-6 não disponíveis via Copilot/Codex na v0.3.5 | Bloqueante para usuários em GitHub Copilot |
| **Estabilidade Cron** | Ações pendentes podem ser perdidas em falhas de escrita | Perda de dados/funcionalidade em edge cases |
| **UX Canal Feishu** | Mensagens internas expostas ao usuário | Confusão e experiência degradada |
| **Agent Behavior** | Loop infinito com sudo e comandos travados | Agente se torna inutilizável |

### Cenários de Uso Identificados
- **Desenvolvimento local com instâncias remotas** — necessidade de conectar WebUI local a servers (NAN-157)
- **PWA mobile** — suporte a iOS standalone apps
- **Multicanal** — Feishu, Discord, Telegram, WeChat com desafios específicos de cada plataforma

### Satisfação/Insatisfação
- **Insatisfação** com suporte a modelos mais recentes (GPT-6 family)
- **Regressões** na Responses API causam preocupação
- **Positivo:** comunidade ativa reportando bugs com detalhes técnicos

---

## 8. Backlog que Merece Atenção

### Issues sem resposta há >3 dias

| # | Título | Criado | Atualizado | Status |
|---|--------|--------|-----------|--------|
| [#5939](https://github.com/HKUDS/nanobot/issues/5939) | OpenAI Codex model discovery omits GPT-6 Sol and Luna | 2026-09-27 | 2026-09-27 | 0 comentários |
| [#5932](https://github.com/HKUDS/nanobot/issues/5932) | Cron pending actions lost if store cannot be saved | 2026-09-27 | 2026-09-27 | 0 comentários |

### PRs Abertos há >1 semana sem review

| # | Título | Criado | Prioridade | Status |
|---|--------|--------|------------|--------|
| [#5580](https://github.com/HKUDS/nanobot/pull/5580) | fix(session): move persistence off event loop | 2026-08-28 | P1 | Aprovação pendente |
| [#5257](https://github.com/HKUDS/nanobot/pull/5257) | fix(agent): bound sustained-goal continuation | 2026-08-05 | P2 | Aprovação pendente |
| [#5780](https://github.com/HKUDS/nanobot/pull/5780) | fix: stop sending context compaction notifications | 2026-09-15 | P2 | Com conflito |

### Recomendações
1. **Priorizar review do PR #5580** — Performance crítica para event loop
2. **Atribuir ownership ao PR #5257** — Bug de loop infinito em produção
3. **Resolver conflito no PR #5780** — Funcionalidade solicitada pela comunidade
4. **Triajar issues #5939 e #5932** — Mesmo sem comentários, indicam bugs críticos

---

## Métricas Resumidas (24h)

| Métrica | Valor |
|---------|-------|
| Issues abertas/ativas | 5 |
| PRs abertos | 11 |
| PRs merged/closed | 6 |
| Releases | 0 |
| Bugs P0 | 1 |
| Bugs P1 | 3 |
| Bugs P2 | 2 |

**Saúde Geral:** ⚠️ **Estável com incidentes ativos** — 1 bug P0 em aberto (cron data loss), 3 bugs P1. Atividade de desenvolvimento intensa com 6 PRs merged demonstrando evolução contínua.Atenção necessária para suporte a GPT-6 e persistência de sessões.

---

*Relatório gerado automaticamente com base em dados do GitHub HKUDS/nanobot em 2026-09-28.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent
## NousResearch/hermes-agent — 2026-09-28

---

## 1. Panorama do Dia

O projeto Hermes Agent apresenta **alta atividade** nas últimas 24h, com 50 issues e 50 PRs atualizadas, indicando uma base de contribuidores ativa. A taxa de resolução é baixa (apenas 2 issues fechadas e 1 PR merged), sugerindo que a equipe está processando um volume significativo de reports de bugs, especialmente relacionados à **compatibilidade de instalação em diferentes plataformas** (Windows, macOS, self-managed) e problemas com o sistema de cron jobs. Não houve lançamentos de novas versões hoje, e a quantidade de issues abertas (48) supera significativamente as fechadas, acumulando trabalho pendente. O ecossistema mostra maturidade em funcionalidades core, mas revela tensões em edge cases de deployment.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto não publicou novas versões hoje. A versão mais recente referenciada nos reports é `v0.21.5+3698.g6f7a799` e `v0.21.5+3385.ga3f454a`, ambas do branch de desenvolvimento. Recomenda-se monitorar o repositório para announcements de releases formais.

---

## 3. Progresso do Projeto

### PRs Importantes Merged/Fechadas Hoje

| # | Título | Impacto | Link |
|---|--------|---------|------|
| **#125787** | `fix(desktop): keep large pastes as a chip after the turn is stored` | **Resolvido** — Corrige perda de chips de arquivos grandes após o turno ser armazenado | [PR #125787](https://github.com/NousResearch/hermes-agent/pull/125787) |

### PRs Abertas de Destaque

| # | Título | Status | Link |
|---|--------|--------|------|
| **#106742** | `One gateway owns every local session: CLI, TUI, Desktop, API, ACP, bots and cron attach to the same live conversation` | **P1** — Refatoração arquitetural significativa | [PR #106742](https://github.com/NousResearch/hermes-agent/pull/106742) |
| **#125783** | `fix(gateway): preserve eventless follow-up channel prompt` | **P0** — Corrigir prompt de canal em follow-ups sem evento | [PR #125783](https://github.com/NousResearch/hermes-agent/pull/125783) |
| **#125784** | `fix(gateway): preserve channel prompt for eventless follow-ups` | **P0** — Mesmo bug, PR duplicada | [PR #125784](https://github.com/NousResearch/hermes-agent/pull/125784) |
| **#125790** | `fix(update): reconcile venv with uv.lock so uv run hermes stops re-resolving` | **P2** — Corrigir re-resolução de dependências após update | [PR #125790](https://github.com/NousResearch/hermes-agent/pull/125790) |
| **#125791** | `feat(tui): notify_on_interact audible bell + configurable attention hook` | **P3** — Nova feature de notificação sonora | [PR #125791](https://github.com/NousResearch/hermes-agent/pull/125791) |

**Análise:** O PR #106742 representa uma mudança arquitetural de alto impacto que unifica o gerenciamento de sessões localmente. As duas PRs P0 sobre "eventless follow-ups" indicam um bug crítico recém-descoberto que afeta a integridade do prompt de sistema.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (Comentários/Reações)

| # | Título | Comentários | 👍 | Severidade | Link |
|---|--------|-------------|-----|------------|------|
| **#122222** | Cron external worker cannot import dependencies on self-managed installs | 20 | 2 | **P1** | [Issue #122222](https://github.com/NousResearch/hermes-agent/issues/122222) |
| **#125657** | Windows install fails at python dependencies step | 14 | 0 | **P2** | [Issue #125657](https://github.com/NousResearch/hermes-agent/issues/125657) |
| **#122299** | kanban dispatcher argv guard unsound for bare-interpreter child | 12 | 5 | **P2** | [Issue #122299](https://github.com/NousResearch/hermes-agent/issues/122299) |
| **#88858** | MCP trust gate: readOnlyHint never detected (camelCase vs snake_case) | 9 | 1 | **P2** | [Issue #88858](https://github.com/NousResearch/hermes-agent/issues/88858) |
| **#119070** | kanban card rate-limited then succeeded is parked as blocker_auth forever | 8 | 0 | **P3** | [Issue #119070](https://github.com/NousResearch/hermes-agent/issues/119070) |
| **#123801** | macOS Desktop renders duplicate assistant reply | 6 | 0 | **P1** | [Issue #123801](https://github.com/NousResearch/hermes-agent/issues/123801) |

### Análise dos Temas

**Instalação e Compatibilidade (35% das issues de destaque)**
- Cron jobs falham em instalações self-managed (shell-installer/PM) e managed stores
- Windows installer preso no passo de dependências Python
- Conflitos entre ambiente Hermes-managed e interpreter nativo

**Sistema Kanban (25%)**
- Múltiplos bugs no dispatcher causando jobs travados, rate-limiting incorreto e argv checks inválidos
- Problema recorrente e crescente no tracker

**MCP Server (15%)**
- Trust gate falha em detectar ferramentas read-only
- Suggestion pill do HuggingFace nunca completa OAuth
- SamplingCapability rejeitada por servers Java-strict

---

## 5. Bugs e Estabilidade

### Bugs Críticos (P0-P1)

| # | Componente | Título | Link |
|---|------------|--------|------|
| **#125763** | Gateway | Leftover steer/interrupt-text follow-ups run with channel_prompt=None → system prompt flips | [Issue #125763](https://github.com/NousResearch/hermes-agent/issues/125763) |
| **#125269** | Cron | External cron worker spawns on bare store Python, dies on 'No module named ruamel' | [Issue #125269](https://github.com/NousResearch/hermes-agent/issues/125269) |
| **#123801** | Desktop | macOS Desktop renders duplicate assistant reply on d0288be5 | [Issue #123801](https://github.com/NousResearch/hermes-agent/issues/123801) |
| **#122222** | Cron/Install | Cron external worker cannot import dependencies on self-managed installs | [Issue #122222](https://github.com/NousResearch/hermes-agent/issues/122222) |

### Bugs de Alta Prioridade (P2)

| # | Componente | Título | Link |
|---|------------|--------|------|
| **#125657** | CLI/Install | Windows installation fails at python dependencies step | [Issue #125657](https://github.com/NousResearch/hermes-agent/issues/125657) |
| **#122299** | CLI/Cron | kanban dispatcher argv guard unsound for bare-interpreter child | [Issue #122299](https://github.com/NousResearch/hermes-agent/issues/122299) |
| **#88858** | Tools/MCP | MCP trust gate readOnlyHint never detected (camelCase vs snake_case) | [Issue #88858](https://github.com/NousResearch/hermes-agent/issues/88858) |
| **#107232** | Tool/Browser | Windows: subprocess hang when executing batch files (.cmd) | [Issue #107232](https://github.com/NousResearch/hermes-agent/issues/107232) |
| **#124211** | Agent/Desktop | Toolset changes can never reach canonical Bot Chat | [Issue #124211](https://github.com/NousResearch/hermes-agent/issues/124211) |
| **#77836** | Gateway/Weixin | Weixin rate limit circuit breaker creates infinite retry loop | [Issue #77836](https://github.com/NousResearch/hermes-agent/issues/77836) |
| **#125607** | Gateway | ensure_import prompts on stdin inside gateway, hangs event loop | [Issue #125607](https://github.com/NousResearch/hermes-agent/issues/125607) |
| **#125766** | Desktop | Desktop history navigation broken: trapped pages, wrong timeline targets | [Issue #125766](https://github.com/NousResearch/hermes-agent/issues/125766) |
| **#125707** | Agent | compression: auxiliary.compression override silently ignored | [Issue #125707](https://github.com/NousResearch/hermes-agent/issues/125707) |

### Padrões de Instabilidade

1. **Cron Jobs (3 issues críticas)** — O subsistema de agendamento está com problemas em múltiplos cenários de instalação
2. **Desktop macOS/Windows (4 issues)** — UI inconsistências e problemas de navegação
3. **Gateway/Prompts (3 issues)** — Ssystem prompt flips e cache misses em follow-ups
4. **Instalação Cross-Platform (4 issues)** — Falhas em self-managed, Windows, managed store

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Propostas

| # | Título | Tipo | Link |
|---|--------|------|------|
| **#87212** | feat(desktop): keep sender identity and avatar visible for inter-agent messages | Feature | [Issue #87212](https://github.com/NousResearch/hermes-agent/issues/87212) |
| **#125791** | feat(tui): notify_on_interact audible bell + configurable attention hook | Feature | [PR #125791](https://github.com/NousResearch/hermes-agent/pull/125791) |
| **#88647** | Design together on a live pen.dev canvas beside the chat | Feature | [PR #88647](https://github.com/NousResearch/hermes-agent/pull/88647) |

### Sinais de Roadmap

1. **Unificação de Sessões Locais** — PR #106742 indica direção de ter um gateway único para CLI, TUI, Desktop, API, ACP, bots e cron
2. **Melhorias de Desktop** — Avatares para mensagens inter-agente, navegação de histórico, profiles
3. **Ferramentas Colaborativas** — Canvas ao vivo integrado ao chat
4. **Notificações Audíveis** — Attention hooks para terminals desatentos

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais Reportadas

| Categoria | Descrição | Impacto | Link |
|----------|-----------|--------|------|
| **Instalação Windows** | Usuários Windows 11 não conseguem completar instalação mesmo com admin e VPN | Crítico para aquisição | [Issue #125657](https://github.com/NousResearch/hermes-agent/issues/125657) |
| **Cron Jobs** | Todos os jobs agendados falham em instalações self-managed e managed stores | Bloqueante para automação | [Issue #122222](https://github.com/NousResearch/hermes-agent/issues/122222), [Issue #125269](https://github.com/NousResearch/hermes-agent/issues/125269) |
| **Desktop Navigation** | Navegação de histórico completamente quebrada após update | Usabilidade diária | [Issue #125766](https://github.com/NousResearch/hermes-agent/issues/125766) |
| **MCP Trust** | Servidores MCP "untrusted" são inutilizáveis porque toda ferramenta pede aprovação | Workflow de desenvolvimento | [Issue #88858](https://github.com/NousResearch/hermes-agent/issues/88858) |
| **Backup/Restore** | Restore pode corromper DB se destino está locked | Risco de perda de dados | [PR #124223](https://github.com/NousResearch/hermes-agent/pull/124223) |

### Cenários de Uso Identificados

- **Power Users de Kanban** — Utilizam dispatcher para workflows de revisão que ficam travados
- **Usuários Windows** — Tentam instalar via script curl|bash, falham no bootstrap
- **Multi-plataforma** — Usuários macOS com shared-libpython builds precisam workarounds
- **MCP Developers** — Conectam servers custom que falham com strict validation
- **Sessões Longas (Bot Mode)** — Alterações de toolset nunca chegam à sessão canonical

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Estagnadas

| # | Título | Criado | Atualizado | Comentários | Link |
|---|--------|--------|------------|-------------|------|
| **#69889** | Cron .py script jobs break after Hermes rebuilds its venv (user pip packages lost) | 2026-07-23 | 2026-09-27 | 6 | [Issue #69889](https://github.com/NousResearch/hermes-agent/issues/69889) |
| **#58672** | pre-update quick snapshot uses keep=1, silently pruning ALL other state snapshots | 2026-07-05 | 2026-09-27 | 2 | [Issue #58672](https://github.com/NousResearch/hermes-agent/issues/58672) |
| **#77836** | Weixin: rate limit circuit breaker creates infinite retry loop | 2026-08-03 | 2026-09-27 | 5 | [Issue #77836](https://github.com/NousResearch/hermes-agent/issues/77836) |
| **#8845** | Skill list includes phantom entries — files don't exist on disk | 2026-04-13 | 2026-09-27 | 3 | [Issue #8845](https://github.com/NousResearch/hermes-agent/issues/8845) |
| **#9136** | Progress messages stop coalescing after approval | 2026-04-13 | 2026-09-27 | 2 | [Issue #9136](https://github.com/NousResearch/hermes-agent/issues/9136) |
| **#5968** | extract_content_or_reasoning() raises when response has no usable choices | 2026-04-08 | 2026-09-27 | 2 | [Issue #5968](https://github.com/NousResearch/hermes-agent/issues/5968) |
| **#5468** | mcp_tool: SamplingCapability sub-capability rejected by strict MCP servers | 2026-04-06 | 2026-09-27 | 2 | [Issue #5468](https://github.com/NousResearch/hermes-agent/issues/5468) |

### Issues Antigas com Baixa Atividade Recente

- **#69889** (2+ meses) — Cron venv rebuild destrói jobs de usuário — **BUG CRÍTICO**
- **#58672** (2+ meses) — Snapshots de backup silenciosamente deletados — **RISCO DE DADOS**
- **#8845** (5+ meses) — Skills fantasma existem em lista mas não em disco — **UX Bug**
- **#5468** (5+ meses) — MCP SamplingCapability rejeitada por servers Java — **Incompatibilidade**

---

## Métricas de Saúde do Projeto

| Métrica | Valor | Status |
|---------|-------|--------|
| Issues abertas (24h) | 48 | ⚠️ Alto volume |
| Issues fechadas (24h) | 2 | 🔴 Baixa resolução |
| PRs abertas (24h) | 49 | ⚠️ Alto volume |
| PRs merged/fechadas (24h) | 1 | 🔴 Baixa throughput |
| Releases (24h) | 0 | — |
| P0/P1 bugs abertos | 5 | 🔴 Crítico |
| P2 bugs abertos | 15+ | ⚠️ Significativo |
| Issues sem resposta >30d | 7+ | ⚠️ Backlog estagnado |

---

## Recomendações Prioritárias

1. **🔴 Imediato:** Resolver as 2 PRs P0 sobre eventless follow-ups (#125783, #125784) — risco de corruptão de prompt
2. **🔴 Imediato:** Atender backlog de cron jobs (#122222, #125269, #69889) — afeta automação básica
3. **⚠️ Alta:** Investigar installation path no Windows (#125657) — bloqueia novos usuários
4. **⚠️ Alta:** Reviver issues estagnadas >60 dias antes que virem tech debt crônica

---

*Relatório gerado em 2026-09-28 com base em dados do GitHub NousResearch/hermes-agent*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório de Projeto: PicoClaw
## Data de referência: 2026-09-28

---

## 1. Panorama do dia

O projeto PicoClaw apresenta **atividade moderada** nas últimas 24 horas, com 3 issues e 2 PRs atualizados. Não houve lançamentos de novas versões. A atividade é concentrada em dois canais específicos: **OneBot** (QQ via NapCat) e **DingTalk**, evidenciando demanda por melhorias em integrações de mensageria. O fechamento de uma issue antiga sobre mensagens longas em IRC (#3287) marca um avanço significativo, enquanto um bug crítico de panic no gateway DingTalk (#3382) permanece em aberto, exigindo atenção imediata da equipe.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24 horas.**

O projeto encontra-se na versão **v0.3.1** (conforme mencionado na issue #3382, commit 2cf030d2). Recomenda-se monitorar o repositório para eventuais hotfixes caso o bug de panic no DingTalk seja considerado crítico o suficiente para uma release emergencial.

---

## 3. Progresso do Projeto

### PRs em aberto (2)

| PR | Título | Status | Prioridade |
|----|--------|--------|------------|
| [#3353](https://github.com/sipeed/picoclaw/pull/3353) | fix(channels): bound tool feedback animations | ABERTO (stale) | Média |
| [#3396](https://github.com/sipeed/picoclaw/pull/3396) | feat(channels/onebot): add opt-in toggle for acknowledgement reactions | ABERTO | Média |

**PR #3353** — *fix(channels): bound tool feedback animations*
- Propõe limitação do tempo de animações de feedback de ferramentas (5 minutos máximo)
- Previne edições infinitas em mensagens de canal devido a cleanup incompleto
- Alinha comportamento com o existing lifetime cap do Telegram typing feedback
- Status: **stale** (sem comentários recentes)

**PR #3396** — *feat(channels/onebot): add opt-in toggle for acknowledgement reactions*
- Adiciona setting `reaction_enabled` (default `false`) para o canal OneBot
- Permite controle granular sobre reações automáticas de acknowledgement
- Resolve demanda diretamente relacionada à issue #3395

### Issues fechadas

**[#3287](https://github.com/sipeed/picoclaw/issues/3287)** — [CLOSED] Better support long messages in IRC
- Feature request para tratamento de mensagens >512 bytes em IRCv3
- Resolução，标志着 suporte melhorado para protocolos com limitações de tamanho de mensagem

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento

| Issue | Título | Comentários | Status |
|-------|--------|-------------|--------|
| [#3287](https://github.com/sipeed/picoclaw/issues/3287) | Better support long messages in IRC | 14 | ✅ Fechada |
| [#3382](https://github.com/sipeed/picoclaw/issues/3382) | DingTalk gateway panic on stream SDK reconnect | 1 | 🟡 Aberta |

**Análise de demandas:**

**IRC Long Messages (#3287)** — A quantidade expressiva de 14 comentários indica forte interesse da comunidade em suporte robusto a mensagens longas em IRC. O protocolo IRC tradicional limita mensagens a 512 bytes, e clientes automaticamente fazem split de mensagens maiores. A comunidade busca que o PicoClaw trate esses fragmentos como uma mensagem coesa, melhorando a experiência em gateways IRCv3.

**DingTalk Stream SDK (#3382)** — Bug crítico reportado com detalhes de reprodução (data, versão, commit). Embora com apenas 1 comentário, a severidade (panic/crash) torna esta issue prioritária.

---

## 5. Bugs e Estabilidade

### Bugs críticos em aberto

**[#3382](https://github.com/sipeed/picoclaw/issues/3382)** — v0.3.1: DingTalk gateway still panics on stream SDK reconnect
- **Severidade:** 🔴 Alta
- **Comportamento:** Panic com "send on closed channel" em client.go:161
- **Reprodutibilidade:** Confirmada pelo usuário
- **Stack:**
  - picoclaw v0.3.1 (commit 2cf030d2)
  - dingtalk-stream-sdk-go v0.9.1
- **Canais afetados:** DingTalk (Stream Mode), potencialmente Feishu
- **Relacionado:** Regressão do bug reportado anteriormente em #973
- **Recomendação:** Hotfix urgente ou work-around documentado

### Resumo de estabilidade

| Métrica | Valor |
|---------|-------|
| Bugs críticos abertos | 1 |
| Issues de estabilidade | 1 |
| Releases últimas 24h | 0 |

**Índice de estabilidade:** ⚠️ Atenção necessária (bug de panic não resolvido)

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features solicitadas

**[#3395](https://github.com/sipeed/picoclaw/issues/3395)** — Make OneBot auto-ack reaction configurable (reaction_enabled setting)
- **Autor:** ycsqwan
- **Data:** 2026-09-27
- **Problema:** Reações de acknowledgement (emoji 289 via `set_msg_emoji_like`) são enviadas automaticamente em **todas** as mensagens de grupo
- **Cenário:** Usuários do OneBot (QQ via NapCat) desejam controle sobre este comportamento
- **Implementação relacionada:** PR #3396 já aberto com a solução

**[#3287](https://github.com/sipeed/picoclaw/issues/3287)** — Better support long messages in IRC ✅
- **Status:** Implementado/fechado
- **Demanda:** Tratamento de mensagens >512 bytes em IRC como mensagem única

### Sinais de roadmap observados

1. **Configurabilidade de canais** — Demanda crescente por settings granulares (reaction_enabled)
2. **Estabilidade de gateways** — Foco em eliminar crashes e panics em integrações de terceiros
3. **Suporte a protocolos legados** — Melhorias em IRC demonstram manutenção de compatibilidade

---

## 7. Resumo de Feedback dos Usuários

### Dores relatadas

| Dor | Frequência | Severidade | Canal |
|-----|------------|------------|-------|
| Panic em DingTalk Stream | 1 relato detalhado | 🔴 Alta | DingTalk |
| Reações automáticas indesejadas | 1 relato | 🟡 Média | OneBot |
| Fragmentação de mensagens IRC | 1 relato (resolvido) | 🟢 Baixa | IRC |

### Cenários de uso identificados

1. **Gateway de mensageria corporativa** — PicoClaw operando como bridge entre múltiplas plataformas (DingTalk, Feishu, QQ)
2. **Bot para comunidades IRC** — Integração com protocolos tradicionais de chat
3. **Automação de reações** — Bots que interagem proativamente em grupos de chat

### Satisfação geral

| Aspecto | Status |
|---------|--------|
| Funcionalidade core | ✅ Estável |
| Integrações legacy (IRC) | ✅ Mantida |
| Integrações modernas (OneBot) | ⚠️ Em evolução |
| Integrações corporativas (DingTalk) | 🔴 Regressão ativa |

---

## 8. Backlog que Merece Atenção

### Issues sem resposta ou abandonadas

| Issue | Título | Idade | Status | Ação recomendada |
|-------|--------|-------|--------|-------------------|
| [#3353](https://github.com/sipeed/picoclaw/pull/3353) | fix(channels): bound tool feedback animations | ~27 dias | Stale | Revisão ou close |
| [#3287](https://github.com/sipeed/picoclaw/issues/3287) | Better support long messages in IRC | ~67 dias | Closed | ✅ Resolvido |
| [#3382](https://github.com/sipeed/picoclaw/issues/3382) | DingTalk gateway panic | ~8 dias | Open | Priorizar fix |

### Priorização recomendada

1. **🔴 Urgente:** #3382 — Bug de panic no DingTalk (regressão de #973)
2. **🟡 Médio prazo:** #3396 — Feature toggle para reações OneBot
3. **🟢 Manutenção:** #3353 — Limpar PR stale ou dar feedback ao autor

---

## Métricas Consolidada do Dia

| Categoria | Valor |
|-----------|-------|
| Issues abertas/ativas | 2 |
| Issues fechadas | 1 |
| PRs abertos | 2 |
| PRs merged | 0 |
| Releases | 0 |
| Bugs críticos | 1 |
| Novas features | 1 |

**Veredicto geral:** 🟡 Projeto com atividade moderada, mas com **bug crítico pendente** que afeta estabilidade de gateway corporativo. Ações imediatas recomendadas para DingTalk.

---

*Relatório gerado automaticamente com base nos dados do GitHub de sipeed/picoclaw em 2026-09-28.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório de Projeto IronClaw — 2026-09-28

## 1. Panorama do Dia

O projeto IronClaw mantém uma atividade moderada de manutenção no dia de hoje, com 7 itens de trabalho atualizados nas últimas 24 horas. Não houve novos lançamentos, indicando um período de estabilização ou preparação para próximas versões. A atividade é predominantemente impulsionada por automações de dependências (5 de 6 PRs), enquanto uma proposta arquitetural inovadora sobre seleção de ferramentas com BM25F + embeddings demonstra interesse da comunidade em evoluções conceituais do sistema.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24 horas.**

O projeto não publicou novas versões desde o período analisado. Isso sugere que a equipe pode estar em fase de desenvolvimento interno ou aguardando validação de PRs pendentes antes de um próximo release.

---

## 3. Progresso do Projeto

### PR Merged/Closed Recentemente

| PR | Descrição | Impacto |
|---|---|---|
| [#8104](https://github.com/nearai/ironclaw/pull/8104) | `chore(deps): bump everything-else group — 29 updates` | **Merged** em 2026-09-27. Atualizou dependências Rust críticas como `uuid`, `base64`, `rust_decimal`. Corrigiu vulnerabilidades e bugs conhecidos em bibliotecas de terceiros. |

### PRs Abertas (Fluxo de Trabalho)

| PR | Descrição | Status |
|---|---|---|
| [#8114](https://github.com/nearai/ironclaw/pull/8114) | `chore(deps): bump everything-else — 31 updates` | Aberta · `size: XL` · `risk: low` |
| [#8103](https://github.com/nearai/ironclaw/pull/8103) | `chore(deps): bump actions — 8 updates` | Aberta · GitHub Actions |
| [#7834](https://github.com/nearai/ironclaw/pull/7834) | `chore(deps): bump wasm — 4 updates` | Aberta · `size: L` · `risk: medium` |
| [#8078](https://github.com/nearai/ironclaw/pull/8078) | `chore(deps): bump tokio-ecosystem — 2 updates` | Aberta · Tokio ecosystem |
| [#7988](https://github.com/nearai/ironclaw/pull/7988) | `chore(agents): refresh codebase knowledge graph` | Aberta · `size: XS` · `contributor: core` |

**Análise:** A infraestrutura de CI/CD está ativa com刷新 automático do grafo de conhecimento do codebase ([#7988](https://github.com/nearai/ironclaw/pull/7988)), indicando boas práticas de documentação automatizada.

---

## 4. Temas Quentes da Comunidade

### Issue em Destaque

| Issue | Resumo | Engajamento |
|---|---|---|
| [#8113](https://github.com/nearai/ironclaw/issues/8113) | **Proposal: opt-in turn-0 tool selection (BM25F + embeddings)** | 0 👍 · 0 comentários · Criada: 2026-09-27 |

**Análise da Proposta:**
A issue propõe um mecanismo de **seleção proativa de ferramentas** no turno 0 de uma conversa, utilizando:
- **BM25F** (variante do BM25 para campos múltiplos) para busca por palavras-chave
- **Embeddings** para busca semântica
- **Ranking híbrido** combinando ambos os sinais

A proposta inclui ainda a divulgação de 4 bridges de descoberta (`tool_search`, `tool_describe`, `tool_call`, `result_read`).

**Potencial Impacto:** Esta é uma proposta arquitetural significativa que pode melhorar drasticamente a performance e relevância da seleção de ferramentas em agentes de IA, reduzindo latência e aumentando a precisão da resposta inicial.

---

## 5. Bugs e Estabilidade

**Nenhum bug ou regressão reportada nas últimas 24 horas.**

O projeto não apresenta issues abertas de bugs no período analisado. A saúde geral de estabilidade é positiva, sustentada por atualizações regulares de dependências que corrigem vulnerabilidades upstream.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Feature Proposta Ativa

| Item | Descrição | Sinal Estratégico |
|---|---|---|
| [#8113](https://github.com/nearai/ironclaw/issues/8113) | Seleção de ferramentas turn-0 com BM25F + embeddings | **Roadmap signal**: Direciona o projeto para otimização de ferramentas em tempo de execução. Potencial entrada na próxima versão. |

**Análise:** A proposta sugere que o IronClaw está evoluindo para um modelo de **agente mais inteligente e eficiente**, onde a seleção de ferramentas não é mais manual ou estática, mas dinâmica e preditiva. Este é um diferenciador competitivo significativo no ecossistema de agentes de IA.

---

## 7. Resumo de Feedback dos Usuários

**Não há feedback direto de usuários (comentários em issues) registrado nas últimas 24 horas.**

### Observações Indiretas:
- A proposta de tool selection ([#8113](https://github.com/nearai/ironclaw/issues/8113)) indica que usuários e contribuidores estão pensando em **otimização de performance** em cenários de produção.
- A ausência de issues de suporte/feedback pode indicar que a base de usuários está em período estável ou que o canal de feedback não é o GitHub.

---

## 8. Backlog que Merece Atenção

### Items Sem Resposta por Período Prolongado

| PR/Issue | Idade | Descrição | Prioridade |
|---|---|---|---|
| [#7834](https://github.com/nearai/ironclaw/pull/7834) | ~36 dias | `chore(deps): bump wasm — 4 updates` | ⚠️ Pendente de review · `risk: medium` |
| [#7988](https://github.com/nearai/ironclaw/pull/7988) | ~30 dias | `chore(agents): refresh codebase knowledge graph` | 🔴 Sem review · `contributor: core` |

**Análise:**
1. **PR #7834** — Atualização de dependências WebAssembly com risco médio está aberta há mais de um mês. Este PR contém atualizações de `wasmtime`, `wasmtime-wasi`, `wit-component` e `wit-parser`. Atrasos prolongados podem expor o projeto a vulnerabilidades em componentes críticos de runtime.

2. **PR #7988** — Refresh automático do knowledge graph da base de código, 尽管 foi criado pelo bot `ironclaw-ci[bot]` (core contributor), ainda não recebeu review após 30 dias.

**Recomendação:** Revisar e mesclar #7834 prioritariamente devido ao componente `risk: medium` em dependência WebAssembly.

---

## Métricas Consolidada — 2026-09-28

| Indicador | Valor | Status |
|---|---|---|
| Issues abertas/ativas (24h) | 1 | ✅ Normal |
| PRs abertas (24h) | 5 | ✅ Normal |
| PRs merged/closed (24h) | 1 | ✅ Ativo |
| Releases (24h) | 0 | ℹ️ Período de pausa |
| Bugs críticos | 0 | ✅ Saudável |
| PRs em backlog (>14 dias) | 2 | ⚠️ Requer atenção |

---

## Próximos Passos Recomendados

1. **Revisar e priorizar merge de #7834** — Atualização WASM com risco médio pendente há 36 dias
2. **Engajar com proposta #8113** — Avaliar viabilidade técnica da seleção de ferramentas turn-0
3. **Revisar PR #7988** — Refresh do knowledge graph aguardando validação de 30 dias

---

*Relatório gerado automaticamente com base em dados GitHub do repositório [nearai/ironclaw](https://github.com/nearai/ironclaw).*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório de Projeto CoPaw — 2026-09-28

---

## 1. Panorama do Dia

O projeto **CoPaw (QwenPaw)** demonstra **alta atividade comunitária** nas últimas 24 horas, com 7 issues e 5 pull requests atualizados. O repositório mantém um ritmo saudável de contribuições, concentrando-se em **melhorias de UX/desktop** (ajuste de fonte, refresh de arquivos) e **estabilidade** (proteção contra double-launch, compressão de contexto). Não houve releases ou merges significativos no período, sugerindo uma fase de revisão e preparação para a próxima versão. A comunidade demonstra interesse particular em acessibilidade e personalização da interface.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

O projeto permanece na versão **2.2.1** (build desktop oficial) com betas circulando internamente (2.2.2b4, 2.2.3b).

---

## 3. Progresso do Projeto

Nenhum PR foi mergeado ou fechado no período de 24 horas. Todos os 5 PRs listados permanecem em status **OPEN** ou **UNDER REVIEW**:

| PR | Status | Descrição |
|-----|--------|-----------|
| [#8001](https://agentscope-ai/QwenPaw/pull/8001) | OPEN | `fix(runtime)`: Mantém resultados de timeout de ferramentas recuperáveis |
| [#7956](https://agentscope-ai/QwenPaw/pull/7956) | OPEN | `feat(console)`: Unifica UX de settings e transições de conversa |
| [#6874](https://agentscope-ai/QwenPaw/pull/6874) | UNDER REVIEW | `feat(mcp)`: Adiciona timeout configurável para chamadas de tool (300s default) |
| [#7996](https://agentscope-ai/QwenPaw/pull/7996) | OPEN | `fix(console)`: Refresh de pastas expandidas no painel Files |
| [#7993](https://agentscope-ai/QwenPaw/pull/7993) | OPEN | `fix(i18n)`: Adiciona duas strings de erro faltantes em locale files |

**Destaque:** O PR [#6874](https://agentscope-ai/QwenPaw/pull/6874) está em revisão há ~7 semanas, indicando uma feature aguardando merge para a próxima versão.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento

| Issue | Tipo | Comentários | Tema |
|-------|------|-------------|------|
| [#7957](https://agentscope-ai/QwenPaw/issues/7957) | Enhancement | 3 | Desativar modelos/canais pré-fabricados |
| [#7999](https://agentscope-ai/QwenPaw/issues/7999) | Feature Request | 1 | Ajuste de tamanho de fonte no desktop |

**Análise:** A issue [#7957](https://agentscope-ai/QwenPaw/issues/7957) lidera em engajamento com **3 comentários**. A demanda reflete uma necessidade de **minimalismo e controle** por parte dos usuários — possibilidade de desativar funcionalidades não utilizadas para interfaces mais limpas. A sugestão recebeu tags de `enhancement` e demonstra maturidade na solicitação.

---

## 5. Bugs e Estabilidade

### Bugs reportados nas últimas 24h

| Issue | Severidade | Descrição | Status |
|-------|------------|-----------|--------|
| [#8000](https://agentscope-ai/QwenPaw/issues/8000) | **Alta** | Double-launch no Windows abre segunda janela sem encerrar a primeira (falta single-instance guard) | OPEN |
| [#7995](https://agentscope-ai/QwenPaw/issues/7995) | **Média** | Painel Files não atualiza pastas expandidas após adição de arquivo no disco | OPEN |

### Bugs fechados (resolvidos ou não)

| Issue | Tipo | Descrição |
|-------|------|-----------|
| [#7998](https://agentscope-ai/QwenPaw/issues/7998) | Question | Dúvida sobre quando contexto dispara compressão (fechada para revisão) |
| [#7994](https://agentscope-ai/QwenPaw/issues/7994) | Bug | Indicador de contexto não atualiza + compressão não funciona corretamente |

**Crítico:** O bug [#8000](https://agentscope-ai/QwenPaw/issues/8000) afeta diretamente a experiência Windows, permitindo múltiplas instâncias simultâneas. Este é um **problema de estabilidade conhecido** que pode causar conflitos de arquivo e uso excessivo de memória.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features solicitadas

| Issue | Feature | Prioridade | Esforço Estimado |
|-------|---------|------------|------------------|
| [#7999](https://agentscope-ai/QwenPaw/issues/7999) | Ajuste de tamanho de fonte na UI desktop (pequeno/default/grande/extragrande) | Alta (acessoibilidade) | Baixo |
| [#7997](https://agentscope-ai/QwenPaw/issues/7997) | Retração/edição de mensagens + rollback de workspace no WebUI | Média | Médio |
| [#7957](https://agentscope-ai/QwenPaw/issues/7957) | Desativar modelos e canais pré-fabricados | Baixa (preferência) | Baixo |

**Sinais de roadmap:**
- **Acessibilidade** é um tema recorrente (#7999 para fonte, #7998 para compressão de contexto)
- **Multi-plataforma desktop** precisa de atenção (#8000 - bug Windows, #7999 - feature desktop)
- **Controle de contexto** é uma demanda quente (issues #7998 e #7994 fechadas)

---

## 7. Resumo de Feedback dos Usuários

### Dores relatadas

1. **Experiência desktop imatura**
   - Double-launch abre janelas duplicadas no Windows
   - Fontes não ajustáveis dificultam uso por idosos e usuários de alta DPI
   - Painel de arquivos não atualiza em tempo real

2. **Compressão de contexto problemática**
   - Usuários reportam que o contexto não comprime mesmo quando excede o limiar configurado
   - Indica confusing behavior: "圈，经常不随着对话切换更新"

3. **Sobrecarga visual**
   - Usuários com tendências compulsivas sentem-se incomodados com modelos/canais não utilizados visíveis

### Cenários de uso identificados

- **Agentes de longa execução**: Sessões com 200-300 requisições, onde compressão de contexto é crítica
- **Uso compartilhado**: Famílias onde diferentes membros precisam de configurações de fonte distintas
- **Apresentações**: Usuários projetando em TVs/monitores externos

### Satisfação geral

A comunidade está **ativamente engajada** mas reporta problemas de **estabilidade e UX** que precisam de atenção antes de major releases.

---

## 8. Backlog que Merece Atenção

### Issues sem resposta significativa (sendo acompanhadas)

| Issue | Idade | Tipo | Prioridade |
|-------|-------|------|------------|
| [#6874](https://agentscope-ai/QwenPaw/pull/6874) | ~7 semanas | Feature (MCP timeout configurável) | **Alta** — Aguardando merge |
| [#7956](https://agentscope-ai/QwenPaw/pull/7956) | ~5 dias | Feature (UX de settings) | **Alta** — Alinha experiência |

### Issues abertas sem assignees

| Issue | Tema | Recomenda |
|-------|------|-----------|
| [#7957](https://agentscope-ai/QwenPaw/issues/7957) | Desativar modelos pré-fabricados | Triagem para `enhancement` backlog |
| [#7997](https://agentscope-ai/QwenPaw/issues/7997) | Retração de mensagens | Avaliar escopo e complexidade |

---

## Métricas Consolidada (24h)

| Categoria | Valor |
|-----------|-------|
| Issues abertas/ativas | 5 |
| Issues fechadas | 2 |
| PRs abertos | 5 |
| PRs merged/fechados | 0 |
| Novas releases | 0 |
| Total de atividades | 12 |

---

## Recomendações para Mantenedores

1. **🔴 Prioridade Crítica**: Investigar e corrigir double-launch no Windows ([#8000](https://agentscope-ai/QwenPaw/issues/8000))
2. **🟡 Prioridade Alta**: Revisar PR [#6874](https://agentscope-ai/QwenPaw/pull/6874) — feature madura aguardando merge
3. **🟡 Prioridade Alta**: Corrigir sistema de compressão de contexto ([#7994](https://agentscope-ai/QwenPaw/issues/7994))
4. **🟢 Oportunidade**: Implementar ajuste de fonte desktop como feature de acessibilidade ([#7999](https://agentscope-ai/QwenPaw/issues/7999))

---

*Relatório gerado em 2026-09-28. Dados extraídos de github.com/agentscope-ai/CoPaw.*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-09-28

---

## 1. Panorama do Dia

O projeto ZeroClaw mantém **alta atividade** com 44 issues e 50 PRs atualizados nas últimas 24h, evidenciando um ritmo intenso de desenvolvimento. **Não houve lançamentos hoje**, indicando que a equipe pode estar em fase de estabilização para uma futura release. Dois bugs de **severidade S0** (risca de segurança crítica) foram abertos nas últimas horas, demandando atenção imediata da equipe. A comunidade demonstra engajamento significativo em questões de arquitetura de memória, delegação de agentes e segurança de sandbox. O pipeline de PRs está saudável com 47 abertas e 3 mergeadas/fechadas, sugerindo que o código está sendo revisado e integrado continuamente.

---

## 2. Lançamentos

### Nenhuma release registrada nas últimas 24h

O projeto encontra-se em período pré-release. As atividades de hoje sugerem preparação para as versões **v0.8.6** e **v0.9.0**, conforme tracker em [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432). Recomenda-se monitorar o repositório para announcements.

---

## 3. Progresso do Projeto

### PRs Fechadas/Merged Hoje

| # | PR | Tamanho | Impacto |
|---|-----|---------|---------|
| [#10070](https://github.com/zeroclaw-labs/zeroclaw/pull/10070) | `feat(tools): gate file_download against SSRF with private-host opt-in` | XL | **Crítica**: Proteção contra SSRF em downloads de arquivo, com opt-in para hosts privados. Mantenedor @Audacity88 incrementou o PR após fechamento de PRs relacionados (#10072, #10075). |

### PRs Abertas de Destaque

| # | PR | Tamanho | Status | Descrição |
|---|-----|---------|--------|-----------|
| [#7821](https://github.com/zeroclaw-labs/zeroclaw/pull/7821) | `feat(security): canonical sandbox_policy schema` | XL | high-risk | Schema canônico de política de sandbox com enforcement na camada de aplicação. |
| [#10480](https://github.com/zeroclaw-labs/zeroclaw/pull/10480) | `fix(runtime): recover from rejected image requests` | XL | medium-risk | Recuperação de requisições de imagem rejeitadas, retry com imagens omitidas. |
| [#10197](https://github.com/zeroclaw-labs/zeroclaw/pull/10197) | `fix(acp): persist interrupted turn progress` | XL | high-risk | Checkpoint de progresso de turns interrompidos para recuperação atômica. |
| [#11068](https://github.com/zeroclaw-labs/zeroclaw/pull/11068) | `feat(channels): narrow channel turns by sender role` | XL | high-risk | Peer groups com risk_profile para controle de acesso por função. |
| [#11076](https://github.com/zeroclaw-labs/zeroclaw/pull/11076) | `feat(tools): add agy_cli coding-CLI tool` | XL | medium-risk | Suporte ao Antigravity CLI (Google) como alternativa de delegação de código. |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (por comentários)

| # | Título | Comentários | Categoria | Análise |
|---|--------|-------------|-----------|---------|
| [#10523](https://github.com/zeroclaw-labs/zeroclaw/issues/10523) **[CLOSED]** | Bootstrap file truncation at 6000 chars | 5 | Bug | **Resolvido**: Truncagem invisível de arquivos bootstrap (`AGENTS.md`, `SOUL.md`, etc.) afetava operadores. |
| [#11036](https://github.com/zeroclaw-labs/zeroclaw/issues/11036) **[CLOSED]** | OpenCode big-pickle returns 403 FreeTierError | 5 | Bug | **Resolvido**: Problema de autenticação com tier gratuito do OpenCode em v0.8.4. |
| [#9323](https://github.com/zeroclaw-labs/zeroclaw/issues/9323) **[CLOSED]** | Define execution-tree iteration budget ownership | 4 | Feature | **Em progresso**: Discussão sobre `ToolLoop.shared_budget` para controle de fan-out. |
| [#7943](https://github.com/zeroclaw-labs/zeroclaw/issues/7943) | Realtime voice-host channel | 4 | Feature | Canal WebSocket backend-agnóstico para voz (CrispASR, sherpa-onnx). |
| [#10919](https://github.com/zeroclaw-labs/zeroclaw/issues/10919) | A2A/HTTP tool tests use separate locks | 4 | Test/Bug | Sincronização inconsistente de estado proxy global em testes. |

### PRs com Maior Engajamento (por comentários)

| # | Título | Tamanho | Relevância |
|---|--------|---------|------------|
| [#11203](https://github.com/zeroclaw-labs/zeroclaw/pull/11203) | fix(runtime): fail malformed tool protocol exhaustion | XS | Correção de falha silenciosa em exaustão de protocolo. |
| [#11099](https://github.com/zeroclaw-labs/zeroclaw/pull/11099) | feat(enroll): print relay frontdoor link and QR | M | UX: link e QR code para emparelhamento de relay. |
| [#11071](https://github.com/zeroclaw-labs/zeroclaw/pull/11071) | perf(ci): debounce master-push runs | S | Otimização de CI: cancelamento antecipado de runs obsoletos. |

---

## 5. Bugs e Estabilidade

### Severidade S0 — Risco Crítico (2 bugs novos)

| # | Título | Componente | Risco | Descrição |
|---|--------|------------|-------|-----------|
| [#11198](https://github.com/zeroclaw-labs/zeroclaw/issues/11198) | Delegated memory tools lose principal scope | memory | **Data loss / security** | Ferramentas de memória delegadas perdem scope do principal, expondo dados privados. |
| [#11197](https://github.com/zeroclaw-labs/zeroclaw/issues/11197) | Session resume restores forwarded environment after admin revocation | security/sandbox | **Data loss / security** | Resume de sessão restaura ambiente após revogação de admin. |

### Severidade P1 — Prioridade Alta (4 bugs)

| # | Título | Componente | Status | Descrição |
|---|--------|------------|--------|-----------|
| [#11136](https://github.com/zeroclaw-labs/zeroclaw/issues/11136) | Concurrent file_edit/file_write drops edits | tools | **in-progress** | Chamadas concorrentes à mesma path dropam edições silenciosamente. |
| [#10778](https://github.com/zeroclaw-labs/zeroclaw/issues/10778) | Multimodal image cap eviction rewrites history | runtime | **in-progress** | Cache prefix inválido após evicção de imagens. |
| [#11130](https://github.com/zeroclaw-labs/zeroclaw/issues/11130) | DeepSeek DSML markup not parsed | provider | **in-progress** | Markup DSML vaza cru para o canal. |
| [#10008](https://github.com/zeroclaw-labs/zeroclaw/issues/10008) | Prove wasi:http hook dials pinned address | runtime:wasm | **accepted** | Teste para validar que hook não faz re-resolve. |

### Severidade P2 — Degraded Behavior (10+ bugs ativos)

- **Provider transport**: Stream recovery skips primary após falha de conexão ([#11145](https://github.com/zeroclaw-labs/zeroclaw/issues/11145))
- **Memory**: Qdrant time-bounded vector recall omite resultados ([#10921](https://github.com/zeroclaw-labs/zeroclaw/issues/10921))
- **Tools**: `map_tool_name_alias` mapeia browser/search para shell indevidamente ([#11108](https://github.com/zeroclaw-labs/zeroclaw/issues/11108))
- **Channel CLI**: Backspace em caracteres multi-byte deleta bytes crus ([#10795](https://github.com/zeroclaw-labs/zeroclaw/issues/10795))
- **Windows**: Ctrl+C causa force quit ([#9028](https://github.com/zeroclaw-labs/zeroclaw/issues/9028))
- **Tests**: Flaky test em parallel runtime gate ([#11180](https://github.com/zeroclaw-labs/zeroclaw/issues/11180))

---

## 6. Pedidos de Features e Sinais de Roadmap

### RFCs e Features Estruturais

| # | Título | Prioridade | Sinais de Roadmap |
|---|--------|------------|-------------------|
| [#11053](https://github.com/zeroclaw-labs/zeroclaw/issues/11053) | **RFC: Knowledge graph as first-class agent memory layer** | P2 | Transformar knowledge graph de tool para memory — mudança arquitetural significativa. |
| [#9323](https://github.com/zeroclaw-labs/zeroclaw/issues/9323) | Execution-tree iteration budget ownership | P2 | Controle de fan-out em delegação de agentes. |
| [#7943](https://github.com/zeroclaw-labs/zeroclaw/issues/7943) | Realtime voice-host channel (WS client) | P2 | Canal de voz backend-agnóstico alinhado com Wyoming. |
| [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) | **Tracker: Runtime/gateway delivery v0.8.6 e v0.9.0** | P2 | Roadmap oficial de fases 2 e 3 da arquitetura. |

### Features em Implementação

| # | Título | Área | Descrição |
|---|--------|------|-----------|
| [#11138](https://github.com/zeroclaw-labs/zeroclaw/issues/11138) | Caller tool-level approval in bounded delegation | agent-loop | Definir se criança deve honrar approvals do chamador. |
| [#11068](https://github.com/zeroclaw-labs/zeroclaw/pull/11068) | Narrow channel turns by sender role | channels | Peer groups com risk_profile. |
| [#11076](https://github.com/zeroclaw-labs/zeroclaw/pull/11076) | Add agy_cli coding-CLI tool | tools | Suporte a Antigravity CLI (substituto do Gemini CLI). |
| [#10168](https://github.com/zeroclaw-labs/zeroclaw/issues/10168) | Enable stall watchdog by default | runtime | Timeout de stall não-zero como default. |
| [#9970](https://github.com/zeroclaw-labs/zeroclaw/issues/9970) | Authorize Discord members by role | channel:discord | RBAC por role ID, não só user ID. |

### Novas Features Hoje

| # | Título | Área | Descrição |
|---|--------|------|-----------|
| [#11150](https://github.com/zeroclaw-labs/zeroclaw/issues/11150) | Discord opt-out of built-in /ask | channel:discord | `slash_builtin_ask` para desabilitar comando nativo. |
| [#11196](https://github.com/zeroclaw-labs/zeroclaw/pull/11196) | Stamp daemon/relay with build commit | build | `--version` mostra commit de build, não só versão. |

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

1. **Segurança de delegação**: Usuários reportam que ferramentas de memória delegadas expõem dados de outros principals — risco crítico em ambientes multi-tenant.
2. **Windows UX**: Ctrl+C causando force quit é bloqueador para usuários Windows ([#9028](https://github.com/zeroclaw-labs/zeroclaw/issues/9028)).
3. **Browser/search tool aliases**: Mapeamento automático para shell confunde usuários que esperam ferramentas nativas ([#11108](https://github.com/zeroclaw-labs/zeroclaw/issues/11108)).
4. **Stall watchdog**: Turn que para de progredir fica pendente indefinidamente — need for default timeout ([#10168](https://github.com/zeroclaw-labs/zeroclaw/issues/10168)).
5. **Voice notes (WhatsApp)**: Usuários solicitam documentação clara sobre round-trip de voice notes ([#11056](https://github.com/zeroclaw-labs/zeroclaw/pull/11056)).

### Cenários de Uso Emergentes

- **Delegação de código**: Crescimento de interesse em integrar agentes externos (Anthropic Claude Code, Google agy, Codex).
- **Voice-first interfaces**: Canal de voz backend-agnóstico com ASR/TTS externos.
- **RBAC em canais**: Autorização por role em Discord para equipes.

### Satisfação Observada

- Bug de truncagem de bootstrap ([#10523](https://github.com/zeroclaw-labs/zeroclaw/issues/10523)) e OpenCode FreeTierError ([#11036](https://github.com/zeroclaw-labs/zeroclaw/issues/11036)) foram **resolvidos rapidamente**, indicando resposta ativa da comunidade.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta/Muito Antigas

| # | Título | Criado | Idade | Prioridade | Nota |
|---|--------|--------|-------|------------|------|
| [#9028](https://github.com/zeroclaw-labs/zeroclaw/issues/9028) | Ctrl+C on Windows cause force quit | 2026-07-13 | **~77 dias** | P2 | Bug Windows sem activity recente. |
| [#9158](https://github.com/zeroclaw-labs/zeroclaw/issues/9158) | Signal Channel should process "Note to Self" | 2026-07-19 | **~71 dias** | P2 | Feature request em parking-lot. |
| [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) | Tracker v0.8.6/v0.9.0 | 2026-06-09 | **~111 dias** | P2 | Roadmap tracker — precisa de update. |
| [#7943](https://github.com/zeroclaw-labs/zeroclaw/issues/7943) | Realtime voice-host channel | 2026-06-18 | **~102 dias** | P2 | Feature request em parking-lot. |

### PRs Bloqueadas ou Dependentes

| # | Título | Status | Bloqueio |
|---|--------|--------|----------|
| [#11090](https://github.com/zeroclaw-labs/zeroclaw/pull/11090) | docs(runtime): propose runtime composition contract | **BLOCKED** | Depende de [#11092](https://github.com/zeroclaw-labs/zeroclaw/pull/11092) (aprovado). |
| [#11060](https://github.com/zeroclaw-labs/zeroclaw/pull/11060) | fix(channels/whatsapp-web): queue forced reply | stacked | Depende de #11057. |

### Recomendações de Priorização

1. **Imediato**: Revisar e corrigir S0s [#11198](https://github.com/zeroclaw-labs/zeroclaw/issues/11198) e [#11197](https://github.com/zeroclaw-labs/zeroclaw/issues/11197) — risco de segurança

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*