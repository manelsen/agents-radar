# Resumo diário do ecossistema de agentes de IA 2026-07-21

> Issues: 0 | PRs: 1 | Projetos cobertos: 7 | Gerado em: 2026-07-20 21:06 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório do Projeto NullClaw — 2026-07-21

---

## 1. Panorama do Dia

O projeto **NullClaw** apresenta **baixa atividade** nesta terça-feira, 21 de julho de 2026. Nenhuma issue foi atualizada nas últimas 24 horas, e não há releases recentes. O único movimento registrado é um PR de dependência pendente de merge (#956), aberto pelo Dependabot para atualização da imagem Docker Alpine. O repositório não demonstra atividade comunitária significativa no curto prazo, sugerindo um período de manutenção routine ou possível pausa no desenvolvimento ativo.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24 horas.**

O projeto não teve publicações de novas versões. Recomenda-se verificar a branch principal caso haja construções intermediárias ou tags não publicadas.

> 🔗 [Repositório NullClaw](https://github.com/nullclaw/nullclaw)

---

## 3. Progresso do Projeto

**PRs merged/fechadas hoje:** 0

**PRs abertas pendentes de revisão:**

| #956 | **[dependencies, docker] ci(deps): bump alpine from 3.23 to 3.24** | `[OPEN]` |
|------|------------------------------------------------------------------------|----------|
| **Autor** | dependabot[bot] | |
| **Criado em** | 2026-06-15 | |
| **Última atualização** | 2026-07-20 | |
| **Impacto** | Atualização de dependência Docker (patch de segurança/base image) | |

Esta atualização, embora rotineira, garante que o projeto permaneça com imagens base atualizadas. Nenhum progresso significativo foi registrado em termos de funcionalidades ou correções.

> 🔗 [Visualizar PR #956](https://github.com/nullclaw/nullclaw/pull/956)

---

## 4. Temas Quentes da Comunidade

**Nenhuma issue ou PR com comentários ou reações registradas nas últimas 24 horas.**

A comunidade não demonstrou engajamento ativo hoje. Não há discussões em destaque, debates sobre decisões técnicas ou solicitações de feedback pendentes de resposta.

> 🔗 [Issues em aberto](https://github.com/nullclaw/nullclaw/issues) | [Pull Requests](https://github.com/nullclaw/nullclaw/pulls)

---

## 5. Bugs e Estabilidade

**Nenhum bug ou regressão reportado nas últimas 24 horas.**

O repositório não apresenta indicadores de instabilidade. Não há issues abertas relacionadas a crashes, erros de build ou problemas de produção.

**Recomendação:** Manter monitoramento contínuo e incentivos para report de bugs pela comunidade.

---

## 6. Pedidos de Features e Sinais de Roadmap

**Nenhuma nova feature request registrada nas últimas 24 horas.**

Não há indicadores de direcionamento estratégico visíveis na atividade recente. Issues antigas (se existentes) não foram revisitadas.

**Recomendação:** Caso o projeto possua um roadmap público, seria benéfico compartilhá-lo com a comunidade para alinhar expectativas e facilitar contribuições direcionadas.

---

## 7. Resumo de Feedback dos Usuários

**Nenhum feedback registrado nas últimas 24 horas.**

A ausência de issues e comentários impede uma análise de sentiment dos usuários. O baixo volume de participação pode indicar:
- Satisfação com a estabilidade atual; ou
- Falta de canais adequados para feedback.

> 🔗 [Abrir uma issue](https://github.com/nullclaw/nullclaw/issues/new/choose)

---

## 8. Backlog que Merece Atenção

**Nenhum item antigo identificado como "sem resposta" com base nos dados disponíveis.**

No entanto, o **PR #956**, aberto em **15 de junho de 2026** e atualizado pela última vez em **20 de julho de 2026** (há ~1 mês), está pendente há **36 dias** sem merge ou resposta. Este é o item de backlog mais antigo que merece atenção imediata, especialmente por se tratar de uma atualização de segurança.

### Item Crítico do Backlog

| #956 | **Bump alpine from 3.23 to 3.24** | ⏱️ ~36 dias pendente |
|------|-----------------------------------|----------------------|
| **Prioridade sugerida:** | Média-alta (atualização de dependência Docker) | |
| **Ação recomendada:** | Revisar, testar e fazer merge ou rejeitar com justificativa | |

> 🔗 [Revisar PR #956](https://github.com/nullclaw/nullclaw/pull/956)

---

## Indicadores de Saúde do Projeto

| Indicador | Status | Observação |
|-----------|--------|------------|
| Atividade de Issues (24h) | 🟢 Saudável | 0 issues (sem problemas novos) |
| Atividade de PRs (24h) | 🟡 Atenção | 1 PR pendente de merge |
| Releases | 🟢 Saudável | Sem releases = projeto estável |
| Bugs/Regressões | 🟢 Saudável | Nenhum reportado |
| Engajamento Comunitário | 🔴 Baixo | Sem interação nas últimas 24h |

---

**Relatório gerado em:** 2026-07-21  
**Fonte:** [github.com/nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo — Ecossistema de Agentes de IA Open Source

**Data de referência:** 2026-07-21
**Projetos analisados:** NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw, ZeroClaw

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **duas velocidades distintas** em 2026-07-21. De um lado, projetos em **fase de maturidade acelerada** (Hermes Agent, IronClaw, ZeroClaw) conduzem releases massivas com milhares de commits e centenas de contributors, sinalizando consolidação de funcionalidades enterprise. De outro, projetos como NanoBot, PicoClaw e CoPaw enfrentam **dívida técnica de estabilização**, com loops de agente, regressões de providers e bugs de armazenamento de estado demandando atenção imediata. A segurança emerge como tema transversal: vazamento de credenciais (#4803 NanoBot, #51603 Hermes), autorizações não solicitadas (#6348 IronClaw) e classes de vulnerabilidade TOCTOU (#9187/9188/9192 ZeroClaw) aparecem simultaneamente. O NullClaw permanece em silêncio, possivelmente em modo de manutenção mínima ou abandono.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs Atualizados | PRs Merged | Releases | Saúde | Tendência |
|---------|:------------:|:---------------:|:----------:|:--------:|:-----:|:---------:|
| **NullClaw** | 0 | 0 | 0 | 0 | 🔴 Estagnado | ▼ |
| **NanoBot** | 6 | 37 | 11 | 0 | 🟡 Instável | ➡ |
| **Hermes Agent** | 50 | 50 | 18 | 1 (v0.19.0) | 🟡 Crítico | ▲ |
| **PicoClaw** | 11 | 9 | 4 | 0 | 🟠 Alerta | ➡ |
| **IronClaw** | 41 | 50 | 9 | 0 (RC1 iminente) | 🟢 Positivo | ▲ |
| **CoPaw** | 30 | 42 | 5 | 0 | 🟡 Instável | ➡ |
| **ZeroClaw** | 29 | 50 | 2 | 0 | 🟠 Alerta | ➡ |

**Observação:** Hermes Agent e IronClaw lideram volume de atividade, porém Hermes carrega 3 bugs P1 críticos de segurança simultâneos. IronClaw apresenta o perfil mais saudável trotz alta complexidade — prepara RC1 com dívida técnica zerada (`FROZEN_DEBT` = 0).

---

## 3. Posicionamento do Projeto Principal

### Hermes Agent (NousResearch) — Volume Absoluto

| Dimensão | Posição |
|----------|---------|
| **Commits (release)** | ~2.245 (maior ciclo do projeto) |
| **Contribuidores** | 450+ |
| **PRs merged (v0.19.0)** | ~1.065 |
| **Issues fechadas** | ~3.300 |

**Vantagens absolutas:** Maior base de contribuidores, release mais substancial do ecossistema, cobertura multi-canal (WhatsApp, Slack, Telegram, Desktop). Alcance de plataforma mainstream.

**Passivo técnico:** 3 bugs P1 simultâneos, incluindo vazamento de credenciais cross-profile (#51603) e path traversal em Nix (#67723). A magnitude da release sugere risco elevado de regressões não detectadas.

### IronClaw (NearAI) — Qualidade e Direção

**Diferenciação técnica:** Unificação de stores (eliminação de `InMemoryTurnStateStore`), migração para arquitetura "Reborn" com desaclopamento de `ironclaw_legacy`. Consolidação arquitetural mais disciplinada do ecossistema.

**Comunidade:** Milestone #6263 com 9 comentários de debate arquitetural ativo — sinal de governança técnica saudável.

---

## 4. Focos Técnicos Compartilhados

### 4.1 Segurança de Credenciais e Isolamento

Três projetos enfrentam vulnerabilidades relacionadas simultaneamente:

| Projeto | Issue | Tipo |
|---------|-------|------|
| **NanoBot** | #4803 | API keys em plaintext (`~/.nanobot/config.json`) |
| **Hermes Agent** | #51603 | `resolve_anthropic_token()` ignora escopo de perfil |
| **IronClaw** | #6348 | Gmail extension autoriza automaticamente após reinstall |

**Conclusão:** O padrão "store credentials na config" está sendo revisado pela comunidade. Recomenda-se adoção de variáveis de ambiente, secret managers ou vaults como primitivo padrão.

### 4.2 Estabilidade de Streams e Replay

| Projeto | Issue | Sintoma |
|---------|-------|---------|
| **NanoBot** | #4767 | QQ WebSocket flood de tracebacks |
| **CoPaw** | #6257 | Thinking blocks duplicados |
| **IronClaw** | #6352 | Streamed response replays in loop |
| **ZeroClaw** | #9198 | Discord typing indicator stuck |

**Padrão:** Agentes que processam streams assíncronos (WebSocket, Server-Sent Events, streaming LLM) apresentam bugs de replay, reconexão e estado inconsistente. A correção de backoff exponencial (NanoBot #4768) é replicável.

### 4.3 Classe TOCTOU em Sincronização de Estado

ZeroClaw reportou 3 bugs S0 no mesmo padrão TOCTOU (Time-of-Check-Time-of-Use) em um único dia:

- `#9188` — Telegram offset avançado antes do parse
- `#9187` — WeChat cursor persistido antes do enqueue  
- `#9192` — `shared_budget` AtomicUsize race condition

**Implicação:** Esta é uma classe de vulnerabilidade que pode existir em outros projetos. Recomenda-se auditoria cruzada.

### 4.4 Multi-Agent e Interoperabilidade

| Projeto | Feature | Status |
|---------|---------|--------|
| **NanoBot** | #5000 — Subagent → multi-agent evolution | OPEN |
| **ZeroClaw** | #3566 — A2A Protocol Support | ACCEPTED (7 👍) |
| **IronClaw** | #2277 — ACP-backed child thread backends | OPEN |
| **CoPaw** | Human-in-the-Loop (#6274) | PLANNED |

**Sinal unânime:** O ecossistema converge para arquiteturas multi-agente. A adoção do protocolo A2A (Linux Foundation) por ZeroClaw pode definir padrão de interoperabilidade.

---

## 5. Análise de Diferenciação

| Projeto | Foco Primário | Público-Alvo | Arquitetura Distintiva |
|---------|--------------|--------------|------------------------|
| **NullClaw** | (?) | — | Estagnado — sem dados |
| **NanoBot** | Multi-canal (QQ, Feishu, Telegram) + providers locais (Ollama) | Usuários locais e corporates com canais asiáticos | Provider-agnostic com cache de prompts |
| **Hermes Agent** | Experiência desktop integrada + memória persistente | Usuários生产力 individuais | Desktop-first com session management |
| **PicoClaw** | Android + Matrix protocol + TTS | Mobile-first + automação server | Modular com providers locais |
| **IronClaw** | Enterprise extensions + reborn architecture | Equipes enterprise com kebutuhan integrations | Rust-based com strong typing |
| **CoPaw** | ReMe memory + browser automation + UX polish | Desenvolvedores de agentes workflow | Python-first com extensibilidade |
| **ZeroClaw** | SOP (Standard Operating Procedures) + eval harness | DevOps/MLOps pipelines | Go-based com observabilidade OTel |

**Posicionamento geográfico inferido:**
- **Mercado chinês:** NanoBot (QQ, Feishu, WeChat), PicoClaw (DashScope, WeChat), CoPaw (Qwen)
- **Mercado enterprise ocidental:** IronClaw (Slack, Gmail, OAuth), Hermes Agent (WhatsApp, Desktop)
- **Mercado DevOps/MLOps:** ZeroClaw (cron jobs, SOP, eval harness)

---

## 6. Tração e Maturidade da Comunidade

### Projetos em Consolidacão de Qualidade (Maturidade Alta)

| Projeto | Indicador de Maturidade | Estágio |
|---------|------------------------|---------|
| **IronClaw** | `FROZEN_DEBT` zerado, RC1 iminente, 450+ contributors | Pré-lançamento enterprise |
| **Hermes Agent** | v0.19.0 com 3.300 issues fechadas | Release massiva |

### Projetos em Iteração Rápida (Tração Alta)

| Projeto | Indicador de Tração | Estágio |
|---------|---------------------|---------|
| **NanoBot** | 37 PRs/24h, 11 merges | Crescimento acelerado |
| **ZeroClaw** | 50 PRs/24h, RFC ativo (#6808) | Evolução contínua |
| **CoPaw** | 42 PRs/24h, feature-rich | Feature expansion |

### Projetos em Estabilização Emergencial

| Projeto | Indicador | Ação Necessária |
|---------|-----------|-----------------|
| **NanoBot** | 3 P1 bugs com conflicts | Resolver branch conflicts antes de release |
| **CoPaw** | 3 bugs críticos (loops, OSError, Desktop hang) | Hotfix release |
| **PicoClaw** | api_key loss + MCP hangs | Bloquear main para produção |

### Projeto Estagnado

| Projeto | Status | Recomendação |
|---------|--------|--------------|
| **NullClaw** | 0 atividade, 1 PR pendente há 36 dias | Avaliar archival ou revival |

---

## 7. Sinais de Tendência

### 7.1 Enterprise Readiness como Diferenciador

IronClaw e Hermes investem em multi-profile isolation, OAuth lifecycle management e billing/métricas. O mercado enterprise demanda **auditoria, compliance e isolation** — não apenas funcionalidade.

### 7.2 Interoperabilidade A2A como Próximo Horizonte

ZeroClaw aceitou suporte ao protocolo A2A (9 comentários, 7 👍). NanoBot e IronClaw convergem para arquiteturas multi-agente. **A próxima fronteira é a comunicação inter-agente padronizada.**

### 7.3 Observabilidade como Primitivo

- ZeroClaw: nesting OTel spans memória/RAG sob turn trace (#8752)
- CoPaw: tracing Langfuse com user_id/session_id/version (#5922)
- NanoBot: diagnósticos de cache para Ollama (#4998)

**Trend:** Agentes estão sendo instrumentados para produção. Tracing não é mais diferencial — é expectativa.

### 7.4 UX como Fator de Retenção

| Feature | Projeto | Prioridade |
|---------|---------|------------|
| Collapsible thinking/tools para focar em resultados | CoPaw (#6260) | ⭐⭐⭐ |
| WebUI workspace redesign | IronClaw (#6324) | Planejado |
| One-click deploy (Dokploy, Render) | NanoBot (#5007, #4937) | Em progresso |
| Systemd support para headless | PicoClaw (#3276) | Em progresso |

**Trend:** A barreira de entrada para non-technical users está caindo. Projetos que investem em DX (developer experience) e UX (user experience) simultaneamente terão vantagem competitiva.

### 7.5 Memória Persistente como Feature Crítica

- ZeroClaw: Persistent memory tracker (#8891) — 18 open items
- CoPaw: ReMe Light com chunking otimizado
- IronClaw: Skill learning + approval-gated learned skills (#6322)

**Trend:** Agentes stateless estão sendo substituídos por agentes com memória cross-session. A fronteira é memória persistente, não memória de contexto.

### 7.6 Mercado Asiático como Vetor de Crescimento

- NanoBot: QQ, Feishu, WeChat
- PicoClaw: DashScope TTS, WeChat audio
- CoPaw: Qwen models como primeiro-citizen

**Trend:** Projetos com integração nativa em plataformas chinesas (WeChat, Feishu, QQ, DingTalk) têm acesso a base de usuários massiva e não servida por concorrentes ocidentais.

---

## Síntese para Decisores

| Recomendação | Projetos de Referência |
|--------------|----------------------|
| **Para interoperabilidade futura:** | Adotar ZeroClaw (A2A) como reference implementation |
| **Para estabilidade enterprise:** | Monitorar IronClaw RC1 (arquitetura mais disciplinada) |
| **Para multi-canal asiático:** | NanoBot (QQ/Feishu) ou PicoClaw (WeChat) |
| **Para browser/workflow automation:** | CoPaw (unified browser SDK) |
| **Para memória persistente:** | ZeroClaw (epic tracker) + CoPaw (ReMe Light) |
| **Para produção imediata:** | Evitar PicoClaw main (instável), aguardar IronClaw RC1 |
| **Para исследование:** | NullClaw requer reavaliação de status |

---

*Relatório gerado em 2026-07-21. Dados agregados de github.com/* dos projetos listados.*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório de Projeto — NanoBot (HKUDS/nanobot)

**Data de referência:** 2026-07-21 | **Período:** últimas 24h

---

## 1. Panorama do dia

O NanoBot mantém alta atividade de desenvolvimento com **37 PRs atualizados** nas últimas 24h, sinalizando progresso intenso em múltiplas frentes. Nenhum lançamento foi publicado hoje, mas **11 PRs foram merged/fechados**, indicando ritmo saudável de entrega. A comunidade discutiu ativamente melhorias de segurança (armazenamento de chaves API) e propostas arquiteturais para sistemas multi-agente. Seis issues foram atualizadas, com destaque para o fechamento de bugs críticos no canal QQ (WebSocket reconnect loop) e documentação de cache para Ollama. O projeto demonstra saúde operacional com correções regressions e melhorias de estabilidade em curso.

---

## 2. Lançamentos

### 🛑 Nenhum novo release nas últimas 24h

O projeto não publicou versões desde o último período reportado. O pipeline de releases permanece estável aguardando consolidação das branchs em desenvolvimento ativo.

---

## 3. Progresso do Projeto

### PRs Merged/Closed (últimas 24h)

| # | Título | Tipo | Prioridade |
|---|--------|------|------------|
| [#5008](https://github.com/HKUDS/nanobot/pull/5008) | fix(providers): keep all images when merging consecutive multimodal user turns | bug fix | — |
| [#4993](https://github.com/HKUDS/nanobot/pull/4993) | refactor(agent): unify internal turn lifecycle | refactor | p1 |
| [#4768](https://github.com/HKUDS/nanobot/pull/4768) | fix(qq): add exponential backoff to WebSocket reconnect loop | bug fix | p1 |
| [#4982](https://github.com/HKUDS/nanobot/pull/4982) | fix(feishu): avoid hang in fallback text chunks when limit <= 0 | bug fix | p2 |
| [#4981](https://github.com/HKUDS/nanobot/pull/4981) | fix(telegram): avoid hang in markdown split when max_len <= 0 | bug fix | p2 |
| [#4998](https://github.com/HKUDS/nanobot/pull/4998) | docs(ollama): document tool prompt cache diagnostics | documentation | p2 |
| [#4937](https://github.com/HKUDS/nanobot/pull/4937) | feat: add one-click deploy to render support | feature | p2 |

**Destaques:**

- **[#4993](https://github.com/HKUDS/nanobot/pull/4993)** — Refatoração crítica que unifica o ciclo de vida de turns internos, eliminando um loop paralelo em `_process_system_message` que duplicava restauração, compactação, construção de prompt, execução, persistência e entrega de resposta. Melhora manutenibilidade e reduz superfície de bugs.

- **[#4768](https://github.com/HKUDS/nanobot/pull/4768)** — Resolve bug crítico no canal QQ onde reconexões WebSocket falhavam com backoff fixo de 5s, gerando flood de tracebacks em falhas de rede/DNS.

- **[#5008](https://github.com/HKUDS/nanobot/pull/5008)** — Corrige perda de imagens em fluxos multimodais consecutivos ao concatenar blocos de conteúdo corretamente durante merge.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento

| # | Título | Comentários | Status |
|---|--------|-------------|--------|
| [#4867](https://github.com/HKUDS/nanobot/issues/4867) | Preserve exact prompt prefix to enable caching in Ollama | **15** | CLOSED |
| [#4803](https://github.com/HKUDS/nanobot/issues/4803) | Security: API keys stored as plaintext | 1 | OPEN |
| [#5000](https://github.com/HKUDS/nanobot/issues/5000) | Proposal: evolve subagent system toward multi-agent | 1 | OPEN |

**Análise:**

- **#4867 (CLOSED)** — Issue com maior volume de discussão (15 comentários). Relata que Ollama adiciona 60 segundos extras por turno mesmo em operações simples, tornando o uso local "totalmente inviável" com 32GB de VRAM. A alta participação indica que cache de prompts é uma necessidade real para usuários de modelos locais. O fechamento sinaliza resolução iminente ou implementada via [#4998](https://github.com/HKUDS/nanobot/pull/4998).

- **#4803 (OPEN)** — Preocupação de segurança legítima: chaves API armazenadas em plaintext em `~/.nanobot/config.json`. A comunidade demonstra maturidade ao reportar vulnerabilidades. O PR [#5010](https://github.com/HKUDS/nanobot/pull/5010) já aborda documentação de mitigação via variáveis de ambiente.

- **#5000/#4999 (OPEN/CLOSED)** — Proposta arquitetural para evoluir subagentes para colaboração multi-agente real. Indica demanda por identidades persistentes, estado compartilhado e comunicação agente-para-agente. A duplicação (#4999 Closed → #5000 Open) sugere iteração da proposta.

### PRs em destaque

- **[#5009](https://github.com/HKUDS/nanobot/pull/5009)** — Adiciona `groupPolicy: listen` para Feishu, permitindo acumulação de contexto sem turn LLM. Multi-label (documentation, provider, channel, webui, feature, test) indica feature cross-cutting.

- **[#5007](https://github.com/HKUDS/nanobot/pull/5007)** — Template Dokploy one-click, respondendo à issue [#1503](https://github.com/HKUDS/nanobot/issues/1503). Alinha-se à estratégia de redução de fricção para não-técnicos.

- **[#4963](https://github.com/HKUDS/nanobot/pull/4963)** — Polish de output e discovery no WebUI com linguagem de atividade unificada e reparo parcial de Markdown.

---

## 5. Bugs e Estabilidade

### Bugs Reportados/Em Tratamento (últimas 24h)

| # | Severidade | Título | Status |
|---|------------|--------|--------|
| [#4803](https://github.com/HKUDS/nanobot/issues/4803) | **High** | API keys stored as plaintext | OPEN |
| [#4988](https://github.com/HKUDS/nanobot/pull/4988) | **P1** | Empty model response substitutes placeholder in background turns | OPEN (conflict) |
| [#4954](https://github.com/HKUDS/nanobot/pull/4954) | **P1** | Late subagent turns visibility in WebUI | OPEN (conflict) |
| [#4928](https://github.com/HKUDS/nanobot/pull/4928) | **P1** | Heartbeat routing to wrong channel in unified sessions | OPEN (conflict) |
| [#4945](https://github.com/HKUDS/nanobot/pull/4945) | **P1** | Project instructions scope and default prompt trim | OPEN |
| [#5004](https://github.com/HKUDS/nanobot/pull/5004) | P1 | Session fsync tolerance for unsupported operations | OPEN |
| [#5005](https://github.com/HKUDS/nanobot/pull/5005) | **P1** | Exec tmp cleanup scoped commands | OPEN |

**Análise de Severidade:**

- **3 PRs P1 com conflicts** — Indica regressões ativas em cenários de subagente e sessões unificadas. A tag "conflict" sugere que merges estão aguardando resolução de branch conflicts, potencialmente bloqueando releases.

- **Bug de segurança #4803** — Armazenamento de credenciais em plaintext é vulnerabilidade crítica. Necessita atenção imediata da equipe de segurança.

- **Bugs P1 resolvidos hoje:**
  - [#4768](https://github.com/HKUDS/nanobot/pull/4768) — QQ WebSocket reconnect loop (resolvido com exponential backoff)
  - [#4982](https://github.com/HKUDS/nanobot/pull/4982) — Feishu infinite loop quando limit <= 0
  - [#4981](https://github.com/HKUDS/nanobot/pull/4981) — Telegram infinite loop quando max_len <= 0

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Propostas

| # | Título | Tags | Prioridade |
|---|--------|------|------------|
| [#5000](https://github.com/HKUDS/nanobot/issues/5000) | Evolve subagent system toward multi-agent collaboration | enhancement | — |
| [#5006](https://github.com/HKUDS/nanobot/pull/5006) | Add guarded tool gateway for channel plugins | feature, security | **P1** |
| [#5009](https://github.com/HKUDS/nanobot/pull/5009) | Feishu groupPolicy listen mode | feature, channel | — |
| [#4919](https://github.com/HKUDS/nanobot/pull/4919) | Telegram custom Bot API base URL and headers | feature, channel | P2 |

**Sinais de Roadmap Identificados:**

1. **Arquitetura Multi-Agente (#5000)** — A proposta de evoluir subagentes para colaboração real indica direção estratégica. Requer讨论 técnica sobre identidade persistente, estado compartilhado e protocolos de comunicação.

2. **Tool Gateway Seguranca (#5006)** — Adição de protocolo `ToolGateway` com acesso controlado a ferramentas indica maturação da arquitetura de plugins.

3. **Deploy Simplificado** — Dokploy (#5007) e Render (#4937) demonstram foco em redução de barreira de entrada para self-hosting.

4. **Provedores Alternativos** — Suporte a Telegram Bot API customizado (#4919) e Ollama otimizado (#4998) indica expansão de ecossistema de providers.

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Categoria | Descrição | Referência |
|-----------|-----------|------------|
| **Performance Local** | Modelos Ollama adicionam 60s por turno — "totalmente inviável" | [#4867](https://github.com/HKUDS/nanobot/issues/4867) |
| **Segurança** | Armazenamento de API keys em plaintext | [#4803](https://github.com/HKUDS/nanobot/issues/4803) |
| **Infraestrutura** | Instalação complexa para não-técnicos | [#1503](https://github.com/HKUDS/nanobot/issues/1503) |
| **Estabilidade Canal QQ** | Flood de erros em reconexões de rede | [#4767](https://github.com/HKUDS/nanobot/issues/4767) |
| **UX Background Turns** | Placeholder "empty response" aparece inapropriadamente | [#4988](https://github.com/HKUDS/nanobot/pull/4988) |

### Cenários de Uso Emergentes

- **Deploy Self-hosted:** Usuários buscam soluções one-click (Dokploy, Render) — indica base de usuários menos técnicos
- **Grupos Feishu:** Modo "listen" para acumulação de contexto sem turn LLM — caso de uso colaborativo
- **Multi-Agente:** Necessidade de coordenação entre agentes com identidades e estado compartilhado

---

## 8. Backlog que Merece Atenção

### Issues sem resposta significativa (>7 dias sem interação da equipe)

| # | Título | Criado | Comentários | Prioridade |
|---|--------|--------|-------------|------------|
| [#1503](https://github.com/HKUDS/nanobot/issues/1503) | [Feature Request] Template for Dokploy | 2026-03-04 | 1 | — |
| [#4803](https://github.com/HKUDS/nanobot/issues/4803) | Security: API keys plaintext | 2026-07-06 | 1 | **High** |

### Análise

- **#1503 (4+ meses)** — Request de template Dokploy aguarda resposta. Embora PR #5007 endereçe parcialmente, comunicação com o solicitante sobre status melhoraria relacionamento com comunidade.

- **#4803 (2 semanas)** — Issue de segurança com apenas 1 comentário. Requer triagem oficial e timeline de resolução. Vulnerabilidade de armazenamento plaintext pode impactar adoção em ambientes corporativos.

### PRs Bloqueados por Conflicts

| # | Título | Criado | Prioridade |
|---|--------|--------|------------|
| [#4988](https://github.com/HKUDS/nanobot/pull/4988) | fix(agent): keep background turns silent | 2026-07-19 | **P1** |
| [#4954](https://github.com/HKUDS/nanobot/pull/4954) | fix(webui): keep late subagent turns visible | 2026-07-16 | **P1** |
| [#4928](https://github.com/HKUDS/nanobot/pull/4928) | fix(heartbeat): route unified sessions to last channel | 2026-07-14 | **P1** |

**Recomendação:** Resolver conflicts prioritariamente para desbloquear releases P1.

---

## Métricas Resumidas (24h)

| Métrica | Valor | Tendência |
|---------|-------|-----------|
| Issues atualizadas | 6 | Neutra |
| PRs atualizados | 37 | Alta |
| PRs merged/closed | 11 | — |
| Releases | 0 | Estável |
| Bugs P1 resolvidos | 3 | Positiva |
| Features P1 em progresso | 5 | Atenção |

---

*Relatório gerado automaticamente com base em dados GitHub de 2026-07-21. Para atualizações em tempo real, consulte [github.com/HKUDS/nanobot](https://github.com/HKUDS/nanobot).*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-07-21

## 1. Panorama do dia

O Hermes Agent manteve um ritmo de desenvolvimento intenso na data de hoje, com a release **v0.19.0 "The Quicksilver Release"** marcandogit成交量 um salto significativo em escopo. Nas últimas 24 horas, 50 issues e 50 PRs foram atualizados, com 3 issues fechadas e 18 PRs merged/fechados. A atividade da comunidade permanece robusta, com issues de alta severidade (P1) chamando atenção especial — incluindo um bug crítico no auto-updater que pode comprometer sessões desktop e um vazamento de credenciais em ambientes multiplexados. A saúde geral do projeto é positiva, impulsionada por uma release massiva que trouxe ~2.245 commits, ~1.065 PRs merged e ~3.300 issues fechadas desde a versão anterior.

---

## 2. Lançamentos

### v0.19.0 — "The Quicksilver Release" (20/07/2026)

**Link:** [NousResearch/hermes-agent Release v0.19.0](https://github.com/NousResearch/hermes-agent/releases/tag/v0.19.0)

A release mais recente representa o maior ciclo de desenvolvimento do projeto até agora:

| Métrica | Valor |
|---|---|
| Commits | ~2.245 |
| PRs merged | ~1.065 |
| Arquivos alterados | ~2.465 |
| Linhas inseridas | ~300.000 |
| Linhas removidas | ~36.000 |
| Issues fechadas | ~3.300 |
| Contribuidores | 450+ |

**Destaques da release:**
- O codinome "Quicksilver" sugere foco em velocidade e responsividade
- A magnitude das mudanças (300k+ inserções, 450+ contribuidores) indica expansão significativa de funcionalidades e platforma
- Documentação de breaking changes e notas de migração não disponíveis publicamente no excerpt — recomendo consultar o CHANGELOG completo

**Nota de atenção:** Com uma release dessa magnitude, issues abertasoday como o bug de auto-updater (#68178) e regressões de sessão podem estar relacionadas a mudanças recentes.

---

## 3. Progresso do Projeto

### PRs Fechados/Merged Hoje

| PR | Título | Área | Impacto |
|---|---|---|---|
| [#68230](https://github.com/NousResearch/hermes-agent/pull/68230) | fix(desktop): navigate to selected session from pages | Desktop | Corrige navegação quebrada do sidebar |
| [#68233](https://github.com/NousResearch/hermes-agent/pull/68233) | Feat/fleet ssh mcp tool | Fleet/SSH | Adiciona ferramenta MCP via SSH |
| [#68232](https://github.com/NousResearch/hermes-agent/pull/68232) | feat: add WhatsApp read-only ingest script | WhatsApp | Ingestão de mensagens para análise |
| [#68227](https://github.com/NousResearch/hermes-agent/pull/68227) | fix: close Hindsight clients on agent eviction | Memory | Previne vazamento de recursos |
| [#68223](https://github.com/NousResearch/hermes-agent/pull/68223) | fix(slack): echo prompt slash inputs publicly | Slack | Melhora visibilidade de comandos |
| [#63513](https://github.com/NousResearch/hermes-agent/pull/63513) | feat(desktop): route slash commands with dedicated RPCs | Desktop | Simplifica execução de comandos internos |

### PRs Abertos com Alto Impacto

| PR | Título | Severidade | Status |
|---|---|---|---|
| [#68229](https://github.com/NousResearch/hermes-agent/pull/68229) | fix(desktop): salvage /compress cluster | P2 | Consolida 4 PRs anteriores sobre compressão de sessão |
| [#68217](https://github.com/NousResearch/hermes-agent/pull/68217) | rip out brew + pip/PyPI wheel support | P2 | **Breaking change**: remove métodos de instalação legados |
| [#68203](https://github.com/NousResearch/hermes-agent/pull/68203) | fix: scope private URL policy per multiplexed profile | P2 | Corrige isolamento entre perfis |
| [#63168](https://github.com/NousResearch/hermes-agent/pull/63168) | fix(cron): handle repeat field as plain int | P2 | Compatibilidade com formato v0.18+ |
| [#55700](https://github.com/NousResearch/hermes-agent/pull/55700) | fix(cli): update reasoning config in-place | P2 | Evita rebuild desnecessário do agente |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (Comentários)

1. **[#67600](https://github.com/NousResearch/hermes-agent/issues/67600)** — Desktop session sidebar vazia para perfil `default` (8 comentários, P2)
   - **Demanda:** Bug afeta apenas o perfil padrão; perfis nomeados funcionam normalmente
   - Backend confirma estar servindo os dados corretamente
   - Possível problema de frontend/renderização

2. **[#59305](https://github.com/NousResearch/hermes-agent/issues/59305)** — Chat tab messages leak across sessions (6 comentários, P1)
   - **Demanda:** Conteúdo de mensagens vaza entre abas de chat — séria ameaça à privacidade
   - Prioridade elevada (P1) indica impacto significativo

3. **[#67762](https://github.com/NousResearch/hermes-agent/issues/67762)** — `session_estimated_cost_usd` reseta em restart (5 comentários, P2)
   - **Demanda:** Métricas de custo não sobrevivem reinicialização do gateway
   - Afeta funcionalidades que dependem de custo acumulado da sessão

4. **[#5394](https://github.com/NousResearch/hermes-agent/issues/5394)** — Thread-bound agent runtimes for Telegram (4 👍, P3)
   - **Demanda:** Feature para vincular runtimes de agente a topics Telegram (semelhante ao OpenClaw)
   - Interesse moderado da comunidade, mas com 👍 significativo

### Tema Recorrente: Estabilidade de Sessão

Ataques de diversos bugs estão concentrados em **estado de sessão** (`sweeper:risk-session-state`), indicando que a arquitetura de gerenciamento de sessões precisa de atenção:

- Duplicação de transcript em resume frio (#68196)
- Perda de pending clarify prompts (#67265)
- Reset de custo em restart (#67762)
- Sobrescrita de cost_status a cada API call (#67764)
- Título auto-gerado não persiste entre perfis (#61156)

---

## 5. Bugs e Estabilidade

### 🔴 P1 — Críticos (ação imediata recomendada)

| Issue | Título | Risco |
|---|---|---|
| [#68178](https://github.com/NousResearch/hermes-agent/issues/68178) | Auto-updater rewrites source under live desktop backend — **576 failures, 149 wasted API calls** | Corrupção de sessão por commit splice |
| [#59305](https://github.com/NousResearch/hermes-agent/issues/59305) | Chat tab messages leak across sessions | Vazamento de dados entre sessões |
| [#51603](https://github.com/NousResearch/hermes-agent/issues/51603) | **resolve_anthropic_token() bypasses profile secret scope** — cross-profile credential leak | **Segurança**: vazamento de credenciais entre perfis |

### 🟠 P2 — Altos (alta prioridade)

| Issue | Título | Área |
|---|---|---|
| [#67762](https://github.com/NousResearch/hermes-agent/issues/67762) | `session_estimated_cost_usd` reseta em gateway restart | Billing/Custos |
| [#65365](https://github.com/NousResearch/hermes-agent/issues/65365) | OAuth Anthropic + memory tool schema = HTTP 400 | Provedor Anthropic |
| [#67453](https://github.com/NousResearch/hermes-agent/issues/67453) | `key_env` só resolve para primeira sessão | Auth/Custom Providers |
| [#67764](https://github.com/NousResearch/hermes-agent/issues/67764) | `cost_status` sobrescrito a cada API call | Billing/Métricas |
| [#67723](https://github.com/NousResearch/hermes-agent/issues/67723) | **CRITICAL: path-traversal em workspaceClosure Nix** | **Segurança** |
| [#67705](https://github.com/NousResearch/hermes-agent/issues/67705) | Codex streaming viola OpenAI API contract | Provider OpenAI/Codex |
| [#68163](https://github.com/NousResearch/hermes-agent/issues/68163) | bootstrap-installer confia em cache corrupto forever | Install/Windows |
| [#68055](https://github.com/NousResearch/hermes-agent/issues/68055) | `_secure_dir()` chmod através de symlink danifica skills compartilhadas | CLI/Config |

### 🟡 P3 — Médios

| Issue | Título | Área |
|---|---|---|
| [#68196](https://github.com/NousResearch/hermes-agent/issues/68196) | Cold resume duplica transcript persistido | Desktop/Sessions |
| [#68128](https://github.com/NousResearch/hermes-agent/issues/68128) | WhatsApp bridge fails WinError 5 — job objects sem breakaway | WhatsApp/Windows |
| [#68209](https://github.com/NousResearch/hermes-agent/issues/68209) | Memory provider config broken para OpenViking/RetainDB | Memory/Config |
| [#68201](https://github.com/NousResearch/hermes-agent/issues/68201) | kanban worktree usa HEAD em vez de origin/HEAD | Cron/Git |
| [#68138](https://github.com/NousResearch/hermes-agent/issues/68138) | Slack adapter ignora mensagens em blocks/attachments | Slack |
| [#68170](https://github.com/NousResearch/hermes-agent/issues/68170) | Desktop startup waits on expensive rich status snapshot | Desktop/Perf |

### ⚠️ Alerta de Segurança

- **#67723** — Path traversal crítico no Nix `workspaceClosure` (P3, mas CRÍTICO por natureza): `../../../../etc/passwd` pode escapar do repo root
- **#51603** — Vazamento de credenciais Anthropic entre perfis em modo multiplex (P2, security boundary)

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features em Demandas

| Issue/PR | Título | Prioridade | Sinal de Roadmap |
|---|---|---|---|
| [#67546](https://github.com/NousResearch/hermes-agent/issues/67546) | Headless memory-provider write-approval + `hermes memory` CLI | P3 | Suporte a workflows de aprovação offline |
| [#5394](https://github.com/NousResearch/hermes-agent/issues/5394) | Thread-bound agent runtimes for Telegram (OpenClaw-like) | P3 | Runtimes persistentes por platforma |
| [#68172](https://github.com/NousResearch/hermes-agent/issues/68172) | Config-driven channel/team-ID → profile routing | P3 | Multi-tenant genérico |
| [#31371](https://github.com/NousResearch/hermes-agent/issues/31371) | Compact session continuity handoff after auto-reset | P3 | Resiliência de sessões longas |
| [#17711](https://github.com/NousResearch/hermes-agent/pull/17711) | Expose normalized channel identity | P3 | Metadata estruturada para roteamento |
| [#68130](https://github.com/NousResearch/hermes-agent/pull/68130) | SSH remote-backend connection mode (desktop) | P3 | Suporte a deploys remotos via SSH |
| [#68225](https://github.com/NousResearch/hermes-agent/pull/68225) | Opt-in assistant bubble color (desktop theme) | P3 | Customização visual |
| [#65964](https://github.com/NousResearch/hermes-agent/pull/65964) | CI live-updating PR review comment | P3 | DX/Automação de PR review |

### Indicadores de Direção Técnica

- **Remoção de legado**: PR #68217 remove Homebrew e PyPI — indica foco em distribution channels próprios
- **Modularização de memory providers**: #68209 menciona "8 in-tree memory providers implement config reading independently" — sinal de necessidade de refatoração/interface comum
- **Multi-profile/multi-tenant**: várias issues (#51603, #68203, #68172) indicam investimento em isolamento e roteamento por perfil

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais Identificadas

| Categoria | Descrição | Frequência |
|---|---|---|
| **Estabilidade de desktop** | Auto-updater quebra sessões; sidebar vazia; startup lento | Alta |
| **Billing/custos** | Métricas de custo não persistem, resetam ou sobrescrevem | Alta |
| **Sessões cruzadas** | Vazamento de conteúdo entre tabs e perfis | Crítica |
| **Providers específicos** | Problemas com OAuth Anthropic, Kimi, Gemini, Codex | Moderada |
| **Windows/ambientes restritos** | Job objects, symlinks, bootstrap failures | Moderada |

### Cenários de Uso Problemáticos Reportados

1. **Usuário com múltiplas abas**: Ao alternar entre conversas, conteúdo se mistura (#59305)
2. **Operador com múltiplos perfis**: Credenciais de um perfil vazam para outro em multiplex (#51603)
3. **Usuário Windows em ambiente corporativo**: Instalação falha permanentemente por cache corrupto (#68163)
4. **Desenvolvedor com skills compartilhados**: chmod via symlink destrói permissões de diretórios compartilhados (#68055)
5. **Equipe usando billing features**: Custo da sessão sempre mostra $0 após restart (#67762)

### Satisfação Aparente

- **Release massiva v0.19.0** com 450+ contribuidores sugere saúde da comunidade
- **3.300 issues fechadas** desde a última versão indica resposta ativa a backlog
- Namun, issues de estabilidade e segurança abertas (especialmente P1) podem impactar confiança em produção

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta / Aguardando Decisão

| Issue | Título | Criado | Dias Aberto | Prioridade |
|---|---|---|---|---|
| [#51603](https://github.com/NousResearch/hermes-agent/issues/51603) | bug(auth): cross-profile credential leak in multiplex mode | 2026-06-24 | ~27 dias | P2 (Segurança) |
| [#5394](https://github.com/NousResearch/hermes-agent/issues/5394) | Thread-bound agent runtimes for Telegram | 2026-04-06 | ~106 dias | P3 (Feature) |
| [#31371](https://github.com/NousResearch/hermes-agent/issues/31371) | Compact session continuity handoff | 2026-05-24 | ~58 dias | P3 (Feature) |
| [#17711](https://github.com/NousResearch/hermes-agent/pull/17711) | Expose normalized channel identity | 2026-04-30 | ~82 dias | P3 (Feature) |
| [#59305](https://github.com/NousResearch/hermes-agent/issues/59305) | Chat tab messages leak across sessions | 2026-07-06 | ~15 dias | **P1** (Crítico) |
| [#67265](https://

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-07-21

## 1. Panorama do dia

O projeto PicoClaw apresenta **alta atividade comunitária** nesta data, com 11 issues e 9 PRs atualizados nas últimas 24 horas. O cenário atual reflete um momento de **consolidação de funcionalidades** (TTS, localização japonesa, atualização de modelos) simultaneamente ao enfrentamento de **bugs críticos** como regressões em providers, perda de configuração e problemas de estabilidade em loops de agente. Não há novas releases, indicando foco em merges de manutenibilidade e preparação para próxima versão.

---

## 2. Lançamentos

**Nenhum release nas últimas 24h.**

O projeto encontra-se em desenvolvimento ativo na branch `main` (último commit: `85dcfcca`). Usuários em produção devem acompanhar a versão `v0.3.1` como última tagged release enquanto a branch principal acumula correções.

---

## 3. Progresso do Projeto

### PRs Closed/Merged nas últimas 24h

| # | Título | Tipo | Impacto |
|---|--------|------|---------|
| [#3192](https://github.com/sipeed/picoclaw/pull/3192) | Bump goreleaser base images: alpine 3.21 → 3.23 | Chore | Consistência e segurança nos Dockerfiles |
| [#3191](https://github.com/sipeed/picoclaw/pull/3191) | Remove duplicate build/ entry in .gitignore | Chore | Limpeza de configuração |
| [#276](https://github.com/sipeed/picoclaw/pull/276) | Improve README | Docs | Melhora de documentação e branding |
| [#277](https://github.com/sipeed/picoclaw/pull/277) | Update make deps logic | Feat | Prevenir atualizações frequentes de dependências |

**Análise:** Os 4 PRs fechados representam trabalho de **manutenibilidade e polish**, não funcionalidades novas. O PR [#277](https://github.com/sipeed/picoclaw/pull/277) é particularmente relevante para DX — evita "dependency fatigue" durante builds.

### PRs Abertos em Destaque

| # | Título | Tipo | Complexidade |
|---|--------|------|--------------|
| [#3273](https://github.com/sipeed/picoclaw/pull/3273) | Add Japanese (ja) localization | Feature | Média |
| [#3270](https://github.com/sipeed/picoclaw/pull/3270) | Add DashScope TTS + WeChat audio | Feature | Alta |
| [#3251](https://github.com/sipeed/picoclaw/pull/3251) | Capture prompt cache token usage (Anthropic) | Bugfix | Média |
| [#3254](https://github.com/sipeed/picoclaw/pull/3254) | Prefer verbatim model matches over alias splits | Bugfix | Média |

---

## 4. Temas Quentes da Comunidade

### Issues com Mais Engajamento

| # | Título | Tipo | Comentários | 👍 | Status |
|---|--------|------|:-----------:|:--:|--------|
| [#3182](https://github.com/sipeed/picoclaw/issues/3182) | Android version - can't launch service | Bug | 4 | 0 | Open |
| [#3203](https://github.com/sipeed/picoclaw/issues/3203) | Matrix sync loop has no reconnection logic | Bug | 3 | 1 | Open |
| [#3229](https://github.com/sipeed/picoclaw/issues/3229) | Rolling conversation cache breakpoints | Feature | 2 | 0 | Closed |
| [#3230](https://github.com/sipeed/picoclaw/issues/3230) | Missing thought_signature with Gemini API | Bug | 2 | 0 | Closed |

### Análise de Demandas

**Android (#3182):** Usuários Android enfrentam problemas para iniciar o serviço e alterar caminhos — indica necessidade de testes em ambiente mobile.

**Matrix Protocol (#3203):** Issue com único upvote mas 3 comentários demonstra **importância estratégica**: integrações Matrix são críticas para automação. A falta de lógica de reconnection causa "silent death" — problema grave para despliegues em servidores.

**Cache Breakpoints (#3229):** Closed com diskusi — demanda sofisticada para otimização de tokens em cargas agentic, alinhada com tendências de inference cost reduction.

---

## 5. Bugs e Estabilidade

### Bugs Abertos (por severidade)

#### 🔴 Críticos
| # | Título | Recência | Impacto |
|---|--------|:--------:|--------|
| [#3269](https://github.com/sipeed/picoclaw/issues/3269) | MCP server connection hangs agent loop | 2026-07-20 | Chat para de responder completamente |
| [#3274](https://github.com/sipeed/picoclaw/issues/3274) | Antigravity provider INVALID_ARGUMENT — regression v0.3.1 | 2026-07-20 | Provider quebrado na main |

#### 🟠 Altos
| # | Título | Recência | Impacto |
|---|--------|:--------:|--------|
| [#3275](https://github.com/sipeed/picoclaw/issues/3275) | model_list loses api_keys after config rewrites | 2026-07-20 | Perda de credenciais em produção |
| [#3203](https://github.com/sipeed/picoclaw/issues/3203) | Matrix sync loop — silent death | 2026-07-20 | Integração inutilizada |
| [#3268](https://github.com/sipeed/picoclaw/issues/3268) | exec tool action parameter required (should default) | 2026-07-19 | Falhas imprevisíveis em agentes |

#### 🟡 Médios
| # | Título | Recência | Impacto |
|---|--------|:--------:|--------|
| [#3182](https://github.com/sipeed/picoclaw/issues/3182) | Android service launch fails | 2026-07-20 | Platform-specific |

### Regressões Identificadas
- **#3274**: Antigravity provider com `tool_schema_transform "simple"` não funciona mais na main vs v0.3.1
- **#3275**: Perda de campos `api_keys` ao reescrever config via Launcher WebUI

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Novas Abertas

| # | Título | Complexidade | Sinais de Demanda |
|---|--------|:------------:|-------------------|
| [#3276](https://github.com/sipeed/picoclaw/issues/3276) | Launcher: systemd support + handle unknown channel types | Alta | Headless server deployments |
| [#3272](https://github.com/sipeed/picoclaw/issues/3272) | Japanese localization | Média | Mercado japonês |
| [#3270](https://github.com/sipeed/picoclaw/pull/3270) | DashScope TTS + WeChat audio (PR) | Alta | Mercado chinês |
| [#3271](https://github.com/sipeed/picoclaw/pull/3271) | Update default model names to 2026-07 | Baixa | Manutenção de provider |

### Sinais de Roadmap

1. **Suporte a systemd e Deployments Avançados (#3276):** A demanda por systemd integration + graceful handling de channel types desconhecidos indica maturação do projeto para cenários enterprise/headless.

2. **Internacionalização (#3272, #3273):** Adição de japonês demonstra estratégia de expansão para novos mercados — PR já aberto.

3. **Integração de Áudio Multimodal (#3270):** DashScope TTS + WeChat audio amplia casos de uso para integração com ecossistemas asiáticos.

4. **Prompt Cache Visibility (#3251):** Captura de token usage de cache indica foco em **observabilidade e otimização de custos** — tendência crescente em LLMOps.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Categoria | Problema | Frequência |
|-----------|----------|:----------:|
| **Estabilidade de Agent** | Loops param ao perder conexão (MCP, Matrix) | Múltiplos reports |
| **Perda de Configuração** | Credenciais somem após reescrita | Crítico |
| **UX Mobile** | Android não funciona corretamente | 1 report |
| **Regressões** | Providers quebram entre versões | 1 report (Antigravity) |

### Cenários de Uso Identificados

- **Headless server deployment** com systemd services (Launcher's `-console -no-browser -host <tailscale-ip>`)
- **Integração Matrix** para automação via homeserver
- **Agentes tool-use** com múltiplos providers (Gemini, Claude, etc.)
- **Mercado chinês/japonês** comDashScope e WeChat

### Satisfação Geral

**⚠️ Alerta:** A concentração de bugs críticos (MCP hangs, perda de api_keys, regressões de provider) em um único dia sugere que a branch `main` atual pode estar em estado **instável para produção**. Usuários devem preferencialmente usar `v0.3.1` ou aguardar próxima release com correções.

---

## 8. Backlog que Merece Atenção

### Issues sem Resposta / Stale

| # | Título | Criado | Atualizado | Dias inativo |
|---|--------|:------:|:----------:|:------------:|
| [#3203](https://github.com/sipeed/picoclaw/issues/3203) | Matrix sync reconnection logic | 2026-07-02 | 2026-07-20 | ~18 dias |
| [#3230](https://github.com/sipeed/picoclaw/issues/3230) | Missing thought_signature Gemini | 2026-07-06 | 2026-07-20 | ~14 dias |
| [#3231](https://github.com/sipeed/picoclaw/issues/3231) | Searxng basicauth | 2026-07-06 | 2026-07-20 | ~14 dias |
| [#3229](https://github.com/sipeed/picoclaw/issues/3229) | Cache breakpoints | 2026-07-06 | 2026-07-20 | ~14 dias |
| [#3254](https://github.com/sipeed/picoclaw/pull/3254) | Model resolution PR | 2026-07-13 | 2026-07-20 | ~7 dias |

### Priorização Recomendada

1. **🔴 #3269** — MCP hang: impacta usabilidade básica
2. **🔴 #3275** — Perda de api_keys: risco de segurança e disponibilidade
3. **🔴 #3274** — Regressão Antigravity: confiança em providers
4. **🟠 #3276** — Systemd support: caso de uso enterprise crescente
5. **🟡 #3270, #3273** — Features com PRs prontos: baixa fruta

---

## Métricas Resumidas do Dia

| Indicador | Valor |
|-----------|------:|
| Issues abertas/ativas | 8 |
| Issues fechadas | 3 |
| PRs abertos | 5 |
| PRs fechados | 4 |
| Novas releases | 0 |
| Bugs críticos | 2 |
| Features com PR pronto | 2 |
| Localization PR | 1 |

---

*Relatório gerado em 2026-07-21. Dados extraídos de github.com/sipeed/picoclaw.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório de Projeto — IronClaw

**Data:** 2026-07-21
**Repositório:** [nearai/ironclaw](https://github.com/nearai/ironclaw)

---

## 1. Panorama do dia

O projeto IronClaw apresenta altíssima atividade nas últimas 24h, com 41 issues e 50 PRs atualizados. O foco dominante continua na transição para a arquitetura **Reborn**: o milestone de consolidação de stores (#6263) atingiu marco importante com a eliminação do `InMemoryTurnStateStore` (PRs #6340 e #6367 fechados), e a equipe se prepara para publicar a primeira Release Candidate (`v1.0.0-rc.1`), evidenciada pelo PR de notas de release #6370 e pela pipeline de binários já configurada (PRs #6354 e #6358). Simultaneamente, uma leva expressiva de bugs da fase "bug_bash" (tags P1/P2) foi aberta, cobrindo UX, estabilidade de streams e falhas de autorização em integrações — sinal de que o produto está em estágio de amadurecimento pré-lançamento.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

No entanto, o projeto está às vésperas da primeira Release Candidate pública:

| Artefato | Status | Observação |
|---|---|---|
| `ironclaw-v1.0.0-rc.1` tag | **Pendente** | PR #6370 ("docs(release): 1.0.0-rc.1 release notes + destale reborn-binary.md") deve ser mergeado antes do push da tag — caso contrário, o GitHub Release será publicado sem notas de changelog. |
| Binários standalone (cargo-dist) | **Pipeline pronta** | PRs #6354 e #6358 configuraram a compilação e publicação de `ironclaw-<target>.tar.gz` com checksums SHA-256. |
| Imagem Docker | **Desabilitada temporariamente** | A publicação Docker permanece fora do scope desta RC. |

**Breaking changes esperados** (derivados do changelog parcial em #6370 e PRs de release):

- `ironclaw_common`: migração de `0.4.2 → 0.5.0` — **⚠ alterações incompatíveis com API.** Os consumidores diretos desse crate precisam revisar a migração.
- `ironclaw_skills`: `0.3.0 → 0.4.0` — **⚠ alterações incompatíveis com API.**
- `ironclaw_safety`: `0.2.2 → 0.2.3` — alterações compatíveis.

---

## 3. Progresso do Projeto

### PRs fechados/mergeados nas últimas 24h

| # | Título | Escopo | Impacto |
|---|---|---|---|
| **#6340** | `refactor(turns): eliminate InMemoryTurnStateStore — embed the engine privately in the row store (#6263 Step 5c)` | Turns / Arquitetura | Remove o último `InMemory*Store` da lista de dívida técnica. O crate `crates/ironclaw_turns/src/memory/mod.rs` deixa de existir como API pública. **Lista `FROZEN_DEBT` zerada.** |
| **#6367** | `refactor(turns): collapse TurnStateDurabilityPolicy to a single write-behind mode (#6263 Step 5b)` | Turns / Arquitetura | Elimina enum `TurnStateDurabilityPolicy` — o `FilesystemTurnStateRowStore` agora tem exatamente um comportamento: write-behind incondicional. Remove superfície de configuração ociosa. |
| **#6358** | `ci: publish Reborn release binaries` | CI / Release | Adiciona publisher específico para binários Reborn pós-tag, com geração de `.sha256` e suma de verificação. |
| **#6354** | `ci: build IronClaw reborn release binaries with cargo-dist` | CI / Release | Prepara a pipeline cargo-dist para empacotar o CLI standalone. |
| **#6328** | `feat(host-api): expand Invocation to the pre-auth input carrier` | Host API / Autorização | Avança o fold de "authority" (§5.3.2) sobre a seam de pre-authorize (#6309), permitindo que `Invocation` seja entrada de `authorize()`. |
| **#6169** | `refactor(slack,auth): delete the Slack connection-epoch slot` | Slack / Auth | Remove o slot privado de timestamp de conexão do Slack; o registro de auth-flow passa a ser a única autoridade de liveness para tentativas OAuth. Simplifica choreography de reconnect. |
| **#6363** | `fix(reborn): preserve user response language` | Reborn / i18n | Corrige bug #6350 — o prompt padrão do assistente agora direciona resposta no idioma da mensagem do usuário. |
| **#6335** | *(Closed)* `Host-authored capability remediation is silently placeholder'd since #6309` | — | Issue identificada, mas fechada sem merge de fix — indica que a root cause pode estar em #6309 e precisa de follow-up. |

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários + reações)

| # | Título | Comentários | 👍 | Tendência |
|---|---|---|---|---|
| **#6263** | `[refactoring, reborn] §4.3 final store consolidation: retire InMemoryTurnStateStore` | 9 | 0 | 🔥 Debate arquitetural ativo — Slice 0 oracle e evidência de no-livelock ainda pendentes. |
| **#6190** | `[bug_bash_P2] Multiple conflicting error messages displayed for a single failed request` | 4 | 0 | 🐛 Prioridade de UX — múltiplos banners de erro simultâneos confundem o usuário. |
| **#6189** | `[bug_bash_P2] Retryable stream error leaves completed response in failed state` | 4 | 0 | 🐛 Estabilidade — banner de erro aparece mesmo após resposta bem-sucedida. |
| **#2277** | `V2: ACP-backed child thread backends for delegated external agents` | 2 | 1 | 🚀 Feature estratégica — única issue com upvote da comunidade. Propõe delegação para Codex/Droid/OpenCode via ACP. |
| **#6320** | `[enhancement, scope: extensions] feat(reborn): IronHub extension install flow` | 1 | 0 | 📦 Feature de extensão — integra discovery, install, configure e activate de extensões via CLI/superfícies de composição. |

### Análise de demandas

- **Arquitetura Reborn:** O volume de issues de refactoring (#6263, #6369, #6329) e de feature tracking (#6320, #6322, #6323, #6324, #6325) confirma que a equipe está focada na migração do v1 para Reborn. A eliminação das stores in-memory encerra um ciclo de dívida técnica significativo.
- **UX/UI:** Os bugs P2 abertos (multi-error banners, stream replay loops, language switching, truncated messages, workspace navigation) indicam que a interface WebUI e o fluxo de chat precisam polimento fino antes do lançamento da RC.
- **Integrações:** Issues relacionadas a Telegram (#6349), Gmail (#6348), Slack (#6347) e OAuth genérico (#6251) mostram que a camada de autorização e sincronização cross-channel ainda precisa amadurecer.

---

## 5. Bugs e Estabilidade

### Por severidade

**P1 (Crítico) — 2 issues**

| # | Título | Link | Resumo |
|---|---|---|---|
| **#6360** | `Provider onboarding has no way to navigate back` | [#6360](https://github.com/nearai/ironclaw/issues/6360) | Fluxo de onboarding local — após selecionar provider e receber prompt de API key, não há como voltar para trocar provider. Apenas continuar ou cancelar. |
| **#6348** | `Gmail extension is automatically authorized without user consent after reinstall` | [#6348](https://github.com/nearai/ironclaw/issues/6348) | **Segurança.** Reinstalação do Gmail extension ignora OAuth — acesso concedido automaticamente sem consentimento. |

**P2 (Alto) — 8 issues**

| # | Título | Link | Área |
|---|---|---|---|
| **#6190** | Multiple conflicting error messages | [#6190](https://github.com/nearai/ironclaw/issues/6190) | Chat UX |
| **#6189** | Retryable stream error on completed response | [#6189](https://github.com/nearai/ironclaw/issues/6189) | Chat/Stream |
| **#6350** | Assistant switches response language | [#6350](https://github.com/nearai/ironclaw/issues/6350) | i18n — *já com PR fix #6363 mergeado* |
| **#6351** | Checkpoint unavailable/unreachable errors | [#6351](https://github.com/nearai/ironclaw/issues/6351) | Sistema de checkpoints |
| **#6353** | Long messages truncated | [#6353](https://github.com/nearai/ironclaw/issues/6353) | Chat UI |
| **#6352** | Streamed response replays in a loop | [#6352](https://github.com/nearai/ironclaw/issues/6352) | Chat/Stream |
| **#6349** | Telegram chat history rendered inconsistently in WebUI | [#6344](https://github.com/nearai/ironclaw/issues/6349) | Cross-channel |
| **#6362** | Duplicate "Test connection" and "Fetch models" flows | [#6362](https://github.com/nearai/ironclaw/issues/6362) | Onboarding UX |

**Problemas de Testes e Infraestrutura**

| # | Título | Link | Resumo |
|---|---|---|---|
| **#6359** | `reborn_trace_first_party_tool_coverage` reads real `$HOME` state | [#6359](https://github.com/nearai/ironclaw/issues/6359) | Teste depende de `~/.ironclaw/trace_contributions/users/*/policy.json` real — passa em CI (clean `$HOME`) mas falha localmente. Afeta desenvolvedores. |
| **#6347** | Slack instance-readiness has no caller-level test coverage | [#6347](https://github.com/nearai/ironclaw/issues/6347) | Harness força Slack configurado, impedindo teste do path de extensão não configurada. |

**Regressões identificadas**

- **#6335** — Capacidade de remediation do host substituída silenciosamente por placeholder `"capability summary unavailable"` desde #6309. Impacta mensagens de diagnóstico para o usuário.
- **#6178** *(Closed)* — Banner de automação expunha erros API crus e não podia ser dispensado. *(Closed — presumivelmente corrigido.)*
- **#6179** *(Closed)* — Importação de settings reportava sucesso sem importar nada. *(Closed — presumivelmente corrigido.)*

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features novas abertas nas últimas 24h

| # | Título | Escopo | Link |
|---|---|---|---|
| **#6320** | `feat(reborn): IronHub extension install flow` | Extensions | [#6320](https://github.com/nearai/ironclaw/issues/6320) |
| **#6322** | `feat(reborn): skill learning and approval-gated learned skills` | Skills | [#6322](https://github.com/nearai/ironclaw/issues/6322) |
| **#6323** | `feat(reborn): offline v1-to-Reborn migration workflow` | Migration | [#6323](https://github.com/nearai/ironclaw/issues/6323) |
| **#6324** | `feat(reborn): WebUI workspace redesign and chat-first onboarding` | WebUI | [#6324](https://github.com/nearai/ironclaw/issues/6324) |
| **#6325** | `feat(reborn): thread-scoped MCP sessions and programmatic MCP config` | MCP/Tools | [#6325](https://github.com/nearai/ironclaw/issues/6325) |
| **#2277** | `V2: ACP-backed child thread backends for delegated external agents` | Agent Architecture | [#2277](https://github.com/nearai/ironclaw/issues/2277) |
| **#6365** | `[reference] P2b: per-user hosted-MCP discovery (worker agents get per-hire connector tools)` | MCP/Workers | [#6365](https://github.com/nearai/ironclaw/issues/6365) |
| **#6371** | `Discussion: narrow Reborn hooks to invocation authorization policy` | Architecture/Policy | [#6371](https://github.com/nearai/ironclaw/issues/6371) |

### PRs de feature em andamento

| # | Título | Escopo | Status | Link |
|---|---|---|---|---|
| **#6116** | `feat(reborn): unified generic extension runtime + Option A honest state machine` | Extensions | OPEN | [#6116](https://github.com/nearai/ironclaw/pull/6116) |
| **#6337** | `fix: keep chat streams active and resume without replay` | Chat/Stream | OPEN | [#6337](https://github.com/nearai/ironclaw/pull/6337) |
| **#6251** | `fix(auth): make OAuth denial lifecycle channel-neutral` | Auth | OPEN | [#6251](https://github.com/nearai/ironclaw/pull/6251) |
| **#6364** | `Add Telegram and Slack workspace attachments` | Attachments | OPEN | [#6364](https://github.com/nearai/ironclaw/pull/6364) |
| **#6368** | `refactor(reborn-migration): decouple from ironclaw_legacy before Tier B` | Migration | OPEN | [#6368](https://github.com/nearai/ironclaw/pull/6368) |

### Sinais de roadmap

1. **Reborn como stack principal:** A aposentadoria do v1 monolith (`src/`) está em curso — `ironclaw_legacy` foi deletado e a migração de `ironclaw_reborn_migration` está sendo desaclopada (PR #6368).
2. **Runtime de extensões unificado:** PR #6116 é o esforço mais pesado em aberto (~92 commits de reconciliação com main), indicando que a arquitetura de extensões está sendo reescrita sobre o modelo genérico.
3. **MCP como cidadão de primeira classe:** Issues #6325 e #6365 mostram investimento em sessões MCP por-thread e descoberta de MCP hospedado para agentes worker.
4. **Skills aprendidas:** #6322 propõe derivation automática de skills a partir de interações, com gate de aprovação — sinal de amadurecimento do ecossistema de automação.

---

## 7. Resumo de Feedback dos Usuários

As issues abertas pelos usuários (via bug_bash) revelam os seguintes padrões de dor:

### Dores críticas

1. **Segurança de integrações (#6348):** Reinstalação do Gmail extension automaticamente autoriza sem OAuth — risco reputacional e regulatório. Prioridade máxima.

2. **Fluxo de onboarding quebrado (#6360):** Usuários ficam presos no fluxo de configuração de provider, sem opção de navegação. Afeta onboarding de novos usuários.

### Dores de UX

3. **Confusão com erros múltiplos (#6190, #6189):** Usuários não conseguem identificar a causa raiz quando múltiplos banners de erro aparecem ou quando um banner de erro surge sobre uma resposta aparentemente completa.

4. **Loop de replay de stream (#6352):** Ao retornar a uma página de chat, respostas streaming recomeçam a exibir chunks repetidamente, criando experiência desorientadora.

5. **Histórico Telegram inconsistente (#6349):** Quem usa Telegram e WebUI simultaneamente enfrenta layouts fragmentados, mensagens duplicadas e desincronização visual.

6. **Mensagens longas truncadas (#6353):** Respostas extensas (tabelas

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do Projeto CoPaw (QwenPaw) — 2026-07-21

---

## 1. Panorama do Dia

O projeto CoPaw (QwenPaw) mantém um alto nível de atividade com **30 issues e 42 PRs** atualizados nas últimas 24h, indicando uma semana de intenso desenvolvimento. Não houve lançamentos de novas versões, mas o pipeline de merge está ativo com **5 PRs fechados/merged** focados em estabilidade de memória (ReMe Light), observabilidade (Langfuse) e refatorações arquiteturais. A base de issues revela uma concentração de bugs relacionados a comportamentos repetitivos/loop do agente e problemas de integração com ferramentas de reasoning. A comunidade demonstra engajamento significativo com múltiplas feature requests e discussões sobre UX/UI.

---

## 2. Lançamentos

**Nenhuma release została publicada nelle ultime 24h.**

> **Nota:** A ausência de releases pode indicar que a equipe está em ciclo de integração de PRs ou preparando uma versão para distribuição futura.

---

## 3. Progresso do Projeto

### PRs Merged/Closed nas últimas 24h

| PR | Autor | Título | Impacto |
|----|-------|--------|---------|
| [#6150](https://github.com/agentscope-ai/QwenPaw/pull/6150) | zhijianma | `feat(pawapp): add pawapp sdk and kanban app` | Introduz SDK para apps e aplicativo Kanban integrado |
| [#6235](https://github.com/agentscope-ai/QwenPaw/pull/6235) | jinliyl | `feat(memory): enhance ReMe Light index maintenance stability and chunking` | Melhora estabilidade da memória de longo prazo com índice explícito e chunking otimizado |
| [#5922](https://github.com/agentscope-ai/QwenPaw/pull/5922) | alvinlee518 | `feat(observability): track user/session/version on langfuse traces` | Adiciona telemetria completa com user_id, session_id e versão nos traces Langfuse |
| [#6210](https://github.com/agentscope-ai/QwenPaw/pull/6210) | rayrayraykk | `refactor: make the default loop an agent mode` | Refatoração arquitetural que eleva o loop ReAct padrão a modo de primeira classe |
| [#6264](https://github.com/agentscope-ai/QwenPaw/pull/6264) | miluo123 | Feature: suporte a minimizar para bandeja do sistema | Feature solicitada pela comunidade |

### Destaques Técnicos

- **ReMe Light**: Melhorias significativas no índice de memória com upgrade para `reme-ai@0.4.1.3`, incluindo proteção de escrita concorrente e chunking Markdown otimizado
- **Observabilidade**: Tracing completo via Langfuse com IDs válidos (correção UUID)
- **Arquitetura**: Modo Default como first-class citizen no sistema de modos do agente

---

## 4. Temas Quentes da Comunidade

### Issues/PRs com Maior Engajamento (Comentários + Reações)

| Issue/PR | Tipo | Comentários | 👍 | Tema Principal |
|----------|------|-------------|-----|----------------|
| [#6257](https://github.com/agentscope-ai/QwenPaw/issues/6257) | Bug | 13 | 0 | Thinking blocks duplicados em múltiplas tool calls |
| [#5961](https://github.com/agentscope-ai/QwenPaw/issues/5961) | Bug | 8 | 0 | Loop de escrita/exclusão no v2.0.0 |
| [#4873](https://github.com/agentscope-ai/QwenPaw/issues/4873) | Bug | 5 | 0 | Polling infinito com 2 subagents (Feishu) |
| [#5958](https://github.com/agentscope-ai/QwenPaw/issues/5958) | Question | 4 | 0 | Integração de controle de permissões do AgentScope |
| [#6282](https://github.com/agentscope-ai/QwenPaw/issues/6282) | Bug | 1 | 1 | Reasoning relay repete primeiro bloco |
| [#6260](https://github.com/agentscope-ai/QwenPaw/issues/6260) | Enhancement | 1 | 1 | UX:折叠思考/ferramentas para focar em resultados |

### Análise de Demandas

**Padrões identificados:**
1. **Loop/Repetição**: 3+ issues (#5961, #4873, #6241) sobre comportamento repetitivo do agente — indica necessidade de mecanismo de detecção mais robusto
2. **UX/UI**: Múltiplas solicitações (#6260, #6281, #6287) para melhorar apresentação de resultados e responsividade mobile
3. **Integração de Providers**: Adição de AIOnly como provider unificado (#6268, #6271) — reflete demanda por agregação de modelos

---

## 5. Bugs e Estabilidade

### Bugs Reportados nas últimas 24h

| Severidade | Issue | Descrição | Link |
|------------|-------|-----------|------|
| **🔴 Crítica** | #6257 | Thinking blocks duplicados em múltiplas tool calls | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6257) |
| **🔴 Crítica** | #6246 | OSError filename too long em recall_history | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6246) |
| **🔴 Crítica** | #6197 | QwenPaw Desktop trava se nvidia-smi travar | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6197) |
| **🟠 Alta** | #5961 | Loop infinito de escrita/exclusão v2.0.0 | [Link](https://github.com/agentscope-ai/QwenPaw/issues/5961) |
| **🟠 Alta** | #4873 | Polling infinito com 2 subagents (não interrupível via Feishu) | [Link](https://github.com/agentscope-ai/QwenPaw/issues/4873) |
| **🟠 Alta** | #6241 | Repetição de saída + memory_search loop | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6241) |
| **🟡 Média** | #6258 | Max output tokens não funciona para modelos OpenAI | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6258) |
| **🟡 Média** | #6239 | PATH concatenation no Windows perde separador `;` | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6239) |
| **🟡 Média** | #6252 | Ctrl+/- zoom não funciona no Linux Desktop | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6252) |

### Análise de Estabilidade

**Problemas recorrentes:**
- **Agent loops**: O sistema ainda sofre com detecção insuficiente de loops repetitivos (DoomLoopGate false positives e false negatives simultâneos)
- **Desktop stability**: Ambiente Desktop apresenta vulnerabilidades a condições de contorno (nvidia-smi, ambiente offline)
- **Memory/recall**: Edge cases em filenames longos e parsing de tool results

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Requestadas

| Prioridade | Issue | Feature | Link |
|------------|-------|---------|------|
| ⭐⭐⭐ | #6283 | Auto-attach de timestamp real ao contexto da sessão | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6283) |
| ⭐⭐⭐ | #6287 | Agrupamento de histórico de sessões em pastas | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6287) |
| ⭐⭐⭐ | #6274 | Ferramenta ask_user_question para Human-in-the-Loop | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6274) |
| ⭐⭐ | #6286 | Customização de tool descriptions built-in (economia de tokens) | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6286) |
| ⭐⭐ | #6285 | Suporte a qwen3.8-max-preview no model list | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6285) |
| ⭐⭐ | #6268 | Provider AIOnly (190+ modelos agregados) | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6268) |

### PRs de Feature em Desenvolvimento

| PR | Título | Link |
|----|--------|------|
| #6284 | qwenpaw-creator: workflow script → assets → storyboard → video | [Link](https://github.com/agentscope-ai/QwenPaw/pull/6284) |
| #6276 | Unified Browser SDK (browser_use + browser_cdp + browser_visible unificados) | [Link](https://github.com/agentscope-ai/QwenPaw/pull/6276) |
| #6270 | User editable agent mode | [Link](https://github.com/agentscope-ai/QwenPaw/pull/6270) |
| #5992 | Per-session model overrides | [Link](https://github.com/agentscope-ai/QwenPaw/pull/5992) |
| #5187 | Windows desktop GUI automation com UIA + Tauri | [Link](https://github.com/agentscope-ai/QwenPaw/pull/5187) |

### Indicadores de Roadmap

- **Arquitetura de Browser Unificada**: Consolidação de múltiplas ferramentas de browser em SDK único
- **Provider de Modelos Flexível**: Adição de AIOnly como alternativa multi-provider
- **Memória de Longo Prazo**: Reforço do sistema ReMe Light com manutenção explícita
- **Human-in-the-Loop**: Framework para pausar agentes e coletar input estruturado

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais Reportadas

| Categoria | Descrição | Frequência |
|-----------|-----------|------------|
| **Loop/Repetição** | Agente entra em loop de escritas, verificações ou chamadas de memória sem progresso | 🔴 Alta |
| **Estabilidade Desktop** | Travamentos em condições específicas (nvidia-smi, offline, zoom) | 🟠 Média |
| **Performance de Tokens** | Ferramentas built-in consomem 8-10k tokens desnecessariamente | 🟠 Média |
| **UX Overwhelming** | Tela poluída por思考 e tool calls, resultado final "afogado" | 🟡 Emergente |
| **Integração Feishu** | Impossibilidade de interromper polling pelo lado Feishu | 🟡 Emergente |

### Cenários de Uso Destacados

1. **Agentes de Tarefa Longa**: Usuários reportam frustração com loops ao executar tarefas simples que requerem múltiplas tool calls
2. **Ambiente Desktop**: Usuários Windows/Linux reportam problemas de inicialização em configurações não-padrão
3. **Sessões Multi-Dia**: Confusão temporal ao retomar conversas antigas (solicitação de timestamp automático)
4. **Mobile**: Necessidade de acessar Console via mobile para monitoramento

### Satisfação/Insatisfação

| Aspecto | Sentimento | Observação |
|---------|------------|------------|
| Core de Agente | 🟡 Neutro-Insuficiente | Funcional mas propenso a loops |
| Sistema de Memória | 🟢 Positivo | ReMe Light bem avaliado após melhorias |
| Desktop App | 🔴 Negativo | Instabilidade em edge cases |
| UX/Console | 🟡 Em evolução | Feature requests indicam demanda por refinamento |

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Estagnadas

| Issue | Idade | Título | Link |
|-------|-------|--------|------|
| **⚠️ Alta Prioridade** | ~50 dias | Bug: Dois subagents causam polling infinito e não podem ser interrompidos via Feishu | [#4873](https://github.com/agentscope-ai/QwenPaw/issues/4873) |
| **⚠️ Média Prioridade** | ~30 dias | Question: Duas arquiteturas de memória (MEMORY.md vs Dream digest) | [#6222](https://github.com/agentscope-ai/QwenPaw/issues/6222) |
| **⚠️ Média Prioridade** | ~20 dias | Bug: SandBox fallback hardcoded popup sem configuração | [#6250](https://github.com/agentscope-ai/QwenPaw/issues/6250) |

### PRs Prontos para Merge

| PR | Status | Título | Link |
|----|--------|--------|------|
| #6203 | Ready for Review | fix: bound Windows tasklist liveness probe | [Link](https://github.com/agentscope-ai/QwenPaw/pull/6203) |
| #6280 | Ready for Review | fix: align reasoning with tool segments | [Link](https://github.com/agentscope-ai/QwenPaw/pull/6280) |
| #6238 | Under Review | perf: initialize handlers concurrently | [Link](https://github.com/agentscope-ai/QwenPaw/pull/6238) |
| #6278 | Under Review | fix: expose structured failure outcomes | [Link](https://github.com/agentscope-ai/QwenPaw/pull/6278) |

### Recomendações

1. **Priorizar fix de loops**: Issue #4873 está aberta há ~50 dias e impacta experiência de produção
2. **Unificar documentação de memória**: Clarity needed sobre sistema de memória dual (Issue #6222)
3. **Merge de fixes críticos**: PRs #6203 e #6280 abordam bugs de estabilidade — acelerar review
4. **Planejar comunicação**: Usuários aguardam v2.0.0+ stability fixes — considerar release tag ou changelog

---

## Métricas Resumidas do Dia

| Métrica | Valor |
|---------|-------|
| Issues Ativas | 30 (22 abertas, 8 fechadas) |
| PRs Ativos | 42 (32 abertos, 10 merged/fechados) |
| Releases | 0 |
| Bugs Críticos | 3 |
| Features em Dev | 8+ |
| Taxa de Engajamento | 🟢 Alta (85+ atividades) |

---

*Relatório gerado em 2026-07-21 00:00 UTC com dados do GitHub do projeto [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw)*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-07-21

---

## 1. Panorama do dia

ZeroClaw mantém alta atividade com **29 issues e 50 PRs atualizados nas últimas 24h**, embora nenhuma release tenha sido publicada no período. O projeto está em modo de estabilização intensiva: múltiplos bugs de severidade S0–S1 (data loss, workflow blocked) foram reportados no mesmo dia, concentrados em módulos críticos como cron jobs, canais (Discord, Telegram, WeChat), runtime e sandbox. Simultaneamente, avanços significativos estão em curso em areas estruturantes como SOP (fan-in, control plane), avaliação de agentes e CI/CD — sinal de que a equipe está equilibrando manutenção emergencial com evolução da plataforma. A ausência de releases recentes sugere que a versão 0.8.x está em fase de refinamento antes do próximotag.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

A versão mais recente vigente continua sendo **0.8.3**, conforme referenceda no RFC #6808. Não há changelog ou notas de migração pendientes para o período em análise.

---

## 3. Progresso do Projeto

As seguintes PRs foram **merged ou fechadas** no período, representando avanços concretos:

| # | PR | Autor | Impacto |
|---|-----|-------|---------|
| [#9199](https://github.com/zeroclaw-labs/zeroclaw/pull/9199) | `chore(providers): drop issue refs from tool-argument comments` | ozpool | Limpeza — remove referências a issues em comentários de sanitização de argumentos de ferramentas. Bloca gates de hygiene do CI. |
| [#9210](https://github.com/zeroclaw-labs/zeroclaw/pull/9210) | `fix(sop): construct required admission fields in blankSop` | JordanTheJet | Corrige construction de `SopAdmissionPolicy` e `max_pending_approvals` com defaults corretos. |

### PRs em progresso de alto impacto (size M ou maior, risco high):

- [#9211](https://github.com/zeroclaw-labs/zeroclaw/pull/9211) — **ci(release): consolidate release attestations** (IftekharUddin): centraliza attestations GitHub como única fonte de proveniência para artefatos baixáveis, com SBOM em dois formatos e bundles offline verificados.
- [#9212](https://github.com/zeroclaw-labs/zeroclaw/pull/9212) — **feat(eval): gate CI on the replay regression suite** (IftekharUddin): introduz suite de regressão de replays como gate obrigatório no CI.
- [#9213](https://github.com/zeroclaw-labs/zeroclaw/pull/9213) — **fix(ci): preflight act artifact compatibility** (IftekharUddin): valida execução de `act -j` para ações de artefatos antes do trabalho local, requer `act` v0.2.90+.
- [#9205](https://github.com/zeroclaw-labs/zeroclaw/pull/9205) — **feat(sop): centralize fan-in ingress adapters** (IftekharUddin): adiciona camada `SopIngress` compartilhada paravalidação de deliveries externos.
- [#9203](https://github.com/zeroclaw-labs/zeroclaw/pull/9203) — **fix(sop): wire authenticated HTTP fan-in** (IftekharUddin): implementa `POST /sop/{*rest}` autenticado com dispatch via SOP engine.
- [#9201](https://github.com/zeroclaw-labs/zeroclaw/pull/9201) — **fix(runtime): prevent shared iteration budget underflow** (IftekharUddin): corrige race condition na reserva de iterações parent/subagent com subtração verificada.
- [#8684](https://github.com/zeroclaw-labs/zeroclaw/pull/8684) — **feat(runtime): surface model fallback notice** (IftekharUddin): expõe notificação de fallback de modelo em superfícies de turno direto.
- [#8752](https://github.com/zeroclaw-labs/zeroclaw/pull/8752) — **feat(obs): nest memory and RAG spans under the turn trace** (alexandme): aninha spans OTel de memória e RAG sob o span `gen_ai.agent.invoke`.

---

## 4. Temas Quentes da Comunidade

### Issues/PRs com maior engajamento (comentários):

1. **[#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) — RFC: Work Lanes, Board Automation, and Label Cleanup** | 14 comentários
   - *Status: accepted, in-progress | Prioridade: P2*
   - Proposta governança para automação de project board e limpeza de labels. Tráficos de trabalho sem manutenção manual. Revisã 21 — rollout em andamento para 0.8.x.

2. **[#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) — 74 test failures on Windows** | 10 comentários
   - *Status: accepted | Prioridade: P1 | Risco: high*
   - Testes de console, path semantics e encoding falham no Windows 11 (code page 936). CI não detecta pois jobs só rodam em Linux.

3. **[#3566](https://github.com/zeroclaw-labs/zeroclaw/issues/3566) — A2A (Agent-to-Agent) Protocol Support** | 9 comentários
   - *Status: accepted | Prioridade: P2 | 7 👍*
   - Feature mais desejada pela comunidade: suporte nativo ao protocolo A2A da Linux Foundation (v0.3.0+) para interoperar com outros agentes.

4. **[#8891](https://github.com/zeroclaw-labs/zeroclaw/issues/8891) — Persistent memory tracker** | 6 comentários
   - *Status: in-progress | Prioridade: P2 | Risco: high*
   - Epic tracker coordenando rollout de memória persistente cross-session. 18 open items (3 issues + 15 PRs). Snapshot atual em 2026-07-19.

5. **[#9117](https://github.com/zeroclaw-labs/zeroclaw/issues/9117) — ZeroCode won't start on Windows without ZEROCLAW_SOCKET** | 5 comentários
   - *Status: closed | Prioridade: P1*
   - Bug crítico no Windows (Severity S3). Resolvido — a necessidade de configurar `ZEROCLAW_SOCKET` manualmente foi eliminada.

### Análise de demandas:
A comunidade demonstra forte interesse em **(a)** interoperabilidade (A2A protocol), **(b)** governança e DX (RFC #6808, label cleanup), e **(c)** memória persistente. O bug de testes Windows (#7462) permanece em destaque pela segunda semana seguida, indicando pressão por cobertura cross-platform.

---

## 5. Bugs e Estabilidade

### Severidade S0 — Data Loss / Security Risk (críticos)

| # | Título | Componente | Detalhe |
|---|--------|------------|---------|
| [#9206](https://github.com/zeroclaw-labs/zeroclaw/issues/9206) | Cron `agent` jobs resolvem `workspace_dir` para `/` | runtime/cron | Intermitente — `SecurityPolicy.workspace` incorreto. |
| [#9188](https://github.com/zeroclaw-labs/zeroclaw/issues/9188) | Telegram long-poll avança offset antes da entrega | channel/telegram | Offset avançado antes de parse/enqueue — crash perde mensagens. |
| [#9187](https://github.com/zeroclaw-labs/zeroclaw/issues/9187) | WeChat cursor persistido antes de message enqueue | channel/wechat | Mesmo padrão TOCTOU — crash perde mensagens. |

### Severidade S1 — Workflow Blocked (bloqueantes)

| # | Título | Componente | Detalhe |
|---|--------|------------|---------|
| [#9204](https://github.com/zeroclaw-labs/zeroclaw/issues/9204) | Landlock sandbox se aplica ao próprio zeroclaw | security/sandbox | Landlock bloqueia SQLite e outras operações internas do daemon. |
| [#9207](https://github.com/zeroclaw-labs/zeroclaw/issues/9207) | `web_fetch` retorna garbage para respostas gzip/brotli | tools/web_fetch | Agentes não conseguem processar dados de sites compactados. |
| [#9192](https://github.com/zeroclaw-labs/zeroclaw/issues/9192) | `shared_budget` TOCTOU com `AtomicUsize` | runtime/daemon | Race condition pode causar underflow. |
| [#9191](https://github.com/zeroclaw-labs/zeroclaw/issues/9191) | Cron agent jobs sem wall-clock timeout | runtime/cron | In-flight locks só limpos ao restart. |
| [#9189](https://github.com/zeroclaw-labs/zeroclaw/issues/9189) | Discord gateway heartbeats starved inline | channel/discord | Download/transcrição inline bloqueia heartbeats. |
| [#9186](https://github.com/zeroclaw-labs/zeroclaw/issues/9186) | MCP stdio: id mismatch, 30s hard timeout vs 180–600s budget | tools/mcp | Três defeitos interagindo no stdio MCP. |

### Severidade S2 — Degraded Behavior (regressões)

| # | Título | Componente |
|---|--------|------------|
| [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) | 74 test failures no Windows (Unix paths, encoding) |
| [#9190](https://github.com/zeroclaw-labs/zeroclaw/issues/9190) | Key rotation cools last_selected, não a key que atingiu 429 |
| [#9117](https://github.com/zeroclaw-labs/zeroclaw/issues/9117) | ZeroCode não inicia no Windows sem `ZEROCLAW_SOCKET` **(RESOLVIDO)** |

### Padrões identificados:
Três bugs de **data loss com padrão TOCTOU idêntico** foram reportados no mesmo dia (#9187, #9188, #9192), sugerindo que o codebase tem uma classe de vulnerabilidade subjacente em operações de sincronização de estado que precisa de auditoria estrutural. Additionally, 4 issues são "probes" ou "ignore" (#9185, #9184) — possivelmente criados por bots de teste que devem ser limpos.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features aceitas com alto impacto estratégico:

| # | Feature | Status | Prioridade | Oportunidade |
|---|---------|--------|------------|---------------|
| [#3566](https://github.com/zeroclaw-labs/zeroclaw/issues/3566) | **A2A Protocol Support** | accepted | P2 | Interoperabilidade com agentes externos (NanoClaw, OpenClaw, qualquer cliente A2A-compliant). 7 👍 da comunidade. |
| [#7065](https://github.com/zeroclaw-labs/zeroclaw/issues/7065) | **Agent evaluation harness (`zeroclaw eval`)** | accepted | P2 | Replay + live modes, pluggable graders, LLM-as-judge. Sem equivalente hoje. |
| [#9178](https://github.com/zeroclaw-labs/zeroclaw/issues/9178) | **ACP embedded resource blob + `deliver_file`** | open | — | Permite agentes retornarem arquivos como recursos ACP com URI estável para citação. |
| [#8288](https://github.com/zeroclaw-labs/zeroclaw/issues/8288) | **SOP milestone: daemon-owned SOP control plane → 5/5** | in-progress | P2 | 13 capacidades SOP a 100%. Múltiplos PRs em curso (#9205, #9203, #8581). |
| [#8691](https://github.com/zeroclaw-labs/zeroclaw/issues/8691) | **Restore ADR baseline and audit accepted RFC records** | accepted | P2 | Recuperação de documentação de decisões arquiteturais. |

### Sinais de roadmap:
- **Memória persistente (#8891)**: 18 open items — maior esforço estruturante em andamento. Wire de curation, relevance e operability planes.
- **SOP como primitivo central**: fan-in adapters (#9205), authenticated HTTP ingress (#9203), SOP ingress centralizado — o sistema está evoluindo de feature para subsistema backbone.
- **Observabilidade (#8752)**: nesting de spans memória/RAG sob turn trace indica maturidade operacional em direção a produção.

---

## 7. Resumo de Feedback dos Usuários

### Dores críticas reportadas:

| Dor | Ocorrências | Severidade |
|-----|-------------|------------|
| **Agente perde contexto silenciosamente** (history trimming) | Issue #8837 | S2 — degradado |
| **web_fetch retorna garbage** (sites comprimidos) | Issue #9207 | S1 — bloqueante |
| **Landlock bloqueia operações internas** | Issue #9204 | S1 — bloqueante |
| **74 testes falham no Windows** | Issue #7462 | S2 — degradado |
| **Discord typing indicator preso** | Issue #9198 | S3 — menor |

### Cenários de uso evidenciados:
- **Desenvolvedores Windows**: impacto no workflow (zerocode não inicia, testes falham, encoding inconsistente).
- **Operações de produção**: cron jobs com workspace errado e sem timeout representam risco operacional real.
- **Agentes cross-session**: ausência de memória persistente é limitante para assistentes de longa duração.
- **Integração com infra existente**: fans de A2A protocol indicam demanda por ZeroClaw como plataforma agent-to-agent.

### Satisfação parcial:
O bug #9117 (ZeroCode no Windows) foi **resolvido rapidamente** (criado 2026-07-17, fechado 2026-07-20), demonstrando capacidade de resposta. No entanto, a acumulação de bugs de mesmo padrão (TOCTOU) no mesmo dia sugere debt técnico crescente em sincronização de estado.

---

## 8. Backlog que Merece Atenção

### Issues sem resposta ou estagnadas:

| # | Título | Criado | Atualizado | Comentários | Risco |
|---|--------|--------|------------|-------------|-------|
| [#6685](https://github.com/zeroclaw-labs/zeroclaw/issues/6685) | SOP HTTP fan-in documentado mas não wired | 2026-05-15 | 2026-07-20 | 1 | high |
| [#8858](https://github.com/zeroclaw-labs/zeroclaw/issues/8858) | Audit existing drift surfaces | 2026-07-08 | 2026-07-20 | 0 | low |
| [#9185](https://github.com/zeroclaw-labs/zeroclaw/issues/9185) | permission probe (lixo) | 2026-07-20 | 2026-07-20 | 0 | — |
| [#9184](https://github.com/zeroclaw-labs/zeroclaw/issues/9184) | permission probe — ignore (lixo) | 2026-07-20 | 2026-07-20 | 0 | — |

### Issues com baixa resposta trotz komentarreich:

| # | Título | Comentários | Status |
|---|--------|-------------|--------|
| [#7065](https://github.com/zeroclaw-labs/zeroclaw/issues/7065) | Agent eval harness | 2 | accepted |
| [#9202](https://github.com/zeroclaw-labs/zeroclaw/issues/9202) | AppImage detection no Linux | 0 | open |
| [#9198](https://github.com/zeroclaw-labs/zeroclaw/issues/9198) | Discord typing stuck | 0 | open |

### Priorização recomendada:

1. **Auditar classe TOCTOU** — 3 bugs S0 no mesmo padrão (#9187, #9188, #9192) exigem refatoração estrutural em sincronização de estado.
2. **Limpeza de probes** — #9185

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*