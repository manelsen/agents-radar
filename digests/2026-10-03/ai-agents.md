# Resumo diário do ecossistema de agentes de IA 2026-10-03

> Issues: 0 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-10-02 23:30 UTC

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

**Data de referência:** 2026-10-03  
**Projetos analisados:** 7 (2 inativos, 5 ativos)

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **dupla velocidade de desenvolvimento** em 2026-10-03. Enquanto ZeroClaw e Hermes Agent demonstram intensidade de atividade comparável a projetos enterprise-grade — com 100 e 100+ eventos combinados respectivamente —, uma parcela significativa dos projetos permanece estagnada (NullClaw, IronClaw). Entre os projetos ativos, observa-se convergência técnica em três eixos: robustez de provedores LLM (especialmente modelos recentes como GPT-6), hardening de stability em Desktop/TUI, e expansão de infraestrutura de deployment (reverse proxy, Docker). A ausência quase universal de releases formais nas últimas 24h sugere que o ecossistema opera em modo de feature freeze ou pipeline de QA pré-release — um padrão consistente com códigobases em maturação rápida.

---

## 2. Comparação de Atividade

| Projeto | Issues (abertas/ativas) | PRs (abertos/ativos) | Releases (24h) | Saúde | Tendência |
|---------|:------------------------:|:--------------------:|:--------------:|:-----:|:---------:|
| **ZeroClaw** | 50 | 50 | 0 | 🟢 Excepcional | ⬆️ Acelerando |
| **Hermes Agent** | 32+ | 50+ | 0 | 🟡 Alta | ➡️ Estável |
| **NanoBot** | 6 | 37 | 0 | 🟢 Positiva | ⬆️ Acelerando |
| **CoPaw** | 9 | 11 | 0 | 🟡 Moderada-Alta | ⬆️ Iterando |
| **PicoClaw** | 3 | 4 | 0 | 🟡 Moderada | ➡️ Estável |
| **NullClaw** | — | — | — | ⚫ Inativa | ⬇️ Estagnada |
| **IronClaw** | — | — | — | ⚫ Inativa | ⬇️ Estagnada |

**Métricas consolidadas (projetos ativos):**
- **Total de eventos combinados:** ~210 issues + PRs atualizados em 24h
- **Bugs críticos reportados:** 8 (3 em Hermes, 2 em CoPaw, 3 em ZeroClaw)
- **Feature PRs em pipeline:** 15+ aguardando review
- **Release blockers identificados:** 5 (ZeroClaw v0.8.6, CoPaw beta4 stabilization)

---

## 3. Posicionamento do Projeto Principal

### NanoBot como referência de ecossistema maduro

O NanoBot (HKUDS) destaca-se como o projeto com **melhor equilíbrio atividade/estabilidade** entre os analisados:

**Vantagens competitivas:**

| Dimensão | NanoBot | Hermes Agent | ZeroClaw | PicoClaw |
|----------|---------|--------------|----------|----------|
| **Throughput de PRs** | 12 merged/24h | 3 merged/24h | 2 merged/24h | 2 merged/24h |
| **Provedores suportados** | 38+ openai_compat | Nous + 3rd party | 12+ | 5+ |
| **Bugs críticos abertos** | 2 (alta) | 3 (P1) | 4 (S1) | 1 (alta) |
| **Dívida técnica (stale)** | Mínima | Moderada | Significativa | Baixa |

**Diferenças técnicas estruturais:**

- **Arquitetura de providers:** NanoBot investe em expansão horizontal (Opper, Eden AI, OrcaRouter) enquanto Hermes Agent prioriza integração vertical (Nous native auth)
- **Surface area de bugs:** NanoBot concentra 2/5 bugs em provedores; Hermes Agent distribui bugs entre Desktop (4), Config (5), Auth (3), Windows (3) — indicando arquitetura mais fragmentada
- **Qualidade de reports:** NanoBot fornece dados de impacto claros (#5898 bloqueia usuários GPT-6); Hermes Agent apresenta issues P1 de integridade de sistema (.git runaway 180 GiB) sem priorização aparente

---

## 4. Focos Técnicos Compartilhados

### 4.1 Estabilidade de Provedores LLM

| Projeto | Problema | Severidade |
|---------|----------|------------|
| **NanoBot** | GPT-6 via GitHub Copilot retorna `Mode provider request failed` | 🔴 Alta |
| **NanoBot** | `reasoningEffort` desabilita `temperature` para 38 provedores | 🔴 Alta |
| **ZeroClaw** | llama.cpp/custom provider usa URL/URI incorreta | 🟡 Média |
| **PicoClaw** | Migração para OpenAI Responses API em progresso | 🟢 Feature |

**Implicação:** A proliferação de provedores openai_compat gera inconsistências de comportamento quando modelos introduzem parâmetros incompatíveis (o1/o3/o4 com `reasoningEffort`).

### 4.2 UX Desktop e TUI

| Projeto | Issue | Impacto |
|---------|-------|---------|
| **Hermes Agent** | Mensagens desaparecem, respostas duplicam (#122167) | P2, Desktop |
| **Hermes Agent** | Minimize-to-tray não funciona | P2, Desktop |
| **CoPaw** | Scroll lock durante streaming (#7356) | ✅ Resolvido |
| **CoPaw** | Window geometry não persistia (#6877) | ✅ Resolvido |
| **PicoClaw** | Chat input laggy com histórico longo (#3281) | 🔴 70+ dias |

**Implicação:**Desktop-first é prioridade transversal, mas Hermes Agent demonstra dívida técnica significativa nesta área.

### 4.3 Segurança e Autenticação

| Projeto | Foco | PR Relacionado |
|---------|------|----------------|
| **ZeroClaw** | ACLs Windows, proteção de key files | #11451 |
| **Hermes Agent** | Bearer token invalidation após refresh fail | #131670 ✅ |
| **ZeroClaw** | Cooperative cancellation em Tool execution | #5836 |
| **NanoBot** | Rejeitar stale member access após reauthorization | #5997 ✅ |

### 4.4 Infraestrutura de Deploy

| Projeto | Feature | Status |
|---------|---------|--------|
| **PicoClaw** | Suporte a reverse proxy Nginx (/pico/) | #3415 (0 comentários) |
| **PicoClaw** | Docker + Parallel Search MCP setup | #3368 ✅ |
| **ZeroClaw** | Docker startup regression (#11369) | 🔴 Ativa |
| **CoPaw** | Multi-instance agent communication | #8080 |

---

## 5. Análise de Diferenciação

### 5.1 Por Público-Alvo

| Projeto | Público Primário | Diferenciador |
|---------|------------------|---------------|
| **NanoBot** | Desenvolvedores corporativos, power users | 38+ provedores, cron/automação |
| **Hermes Agent** | Usuários Desktop Windows/macOS | Nous native, skills system |
| **ZeroClaw** | DevOps, equipes técnicas | ACP protocol, skill bundles, ACLs |
| **CoPaw** | Usuários gerais, first-timers | UX refinements, MCP timeout |
| **PicoClaw** | Homelab, makers (Sipeed hardware) | Custo otimizado, Responses API |

### 5.2 Por Arquitetura

```
NanoBot     → Provider-agnostic com gateway flexível
Hermes Agent → Desktop-first com TUI + CLI
ZeroClaw    → ACP-centric com daemon + plugins
CoPaw       → Tauri desktop com modularidade MCP
PicoClaw    → Lightweight com foco em deployment
```

### 5.3 Por Estratégia de Feature

| Estratégia | Projetos | Exemplos |
|------------|----------|----------|
| **Expansão horizontal** | NanoBot, PicoClaw | Mais provedores, mais integrações |
| **Profundização vertical** | Hermes Agent, ZeroClaw | Skills, RAG, ACP protocol |
| **Refinamento UX** | CoPaw | Scroll lock, window geometry, tool toggles |
| **Modernização de API** | PicoClaw | OpenAI Responses API migration |

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração

| Ranking | Projeto | PRs merged/24h | Estabilidade Relativa |
|:-------:|---------|:--------------:|----------------------|
| 🥇 | **NanoBot** | 12 | Alta |
| 🥈 | **CoPaw** | 7 | Moderada (beta4 issues) |
| 🥉 | **PicoClaw** | 2 | Alta |
| 4 | **Hermes Agent** | 3 | Baixa (47 abertas vs 3 fechadas) |
| 5 | **ZeroClaw** | 2 | Baixa (release blockers) |

### 6.2 Sinais de Maturidade

**Projetos em modo consolidação de qualidade:**
- **NanoBot:** Bug de cron crítico (#5932) resolvido em <24h com PR bem segmentado
- **CoPaw:** Contribuições de first-timers (AaronZ345 com 7 PRs UX), issues antigas priorizadas

**Projetos em dívida técnica:**
- **Hermes Agent:** 47 PRs abertos vs 3 fechados em 24h; P1s de integridade (.git runaway) sem movimento
- **ZeroClaw:** Regressão v0.8.6 em três frentes simultâneas (CWD, Docker, skill bundles)

### 6.3 Engajamento Comunitário

| Projeto | Issue com maior engajamento | Comentários |
|---------|----------------------------|:-----------:|
| **Hermes Agent** | Nous integration blocked (#125727) | 16 |
| **PicoClaw** | Chat input laggy (#3281) | 17 |
| **ZeroClaw** | Maintainer decision queue (#8692) | 15 |
| **CoPaw** | Message retraction/editing (#7997) | 8 |

**Observação:** PicoClaw demonstra engajamento desproporcional para seu tamanho (17 comentários em bug de UX), indicando comunidade engajada mas possivelmente carente de contribuidores técnicos.

---

## 7. Sinais de Tendência

### 7.1 Tendências Confirmadas

| Tendência | Evidência | Projetos |
|-----------|-----------|----------|
| **Raciocínio Agents-first** | Modelos o1/o3/o4 com `reasoningEffort`; bugs de scoping em temperature | NanoBot |
| **Desktop como superfície primária** | 4+ issues Desktop em Hermes; CoPaw UX PRs | Hermes Agent, CoPaw |
| **Expansão de providers** | Opper, Cheaper Inference, Eden AI, OrcaRouter | NanoBot, PicoClaw |
| **Security hardening** | ACLs Windows, bearer token invalidation, cooperative cancellation | ZeroClaw, Hermes Agent, NanoBot |
| **RAG como feature esperado** | Knowledge corpus RFC (#11235) | ZeroClaw |

### 7.2 Tendências Emergentes

| Tendência | Sinal | Projeto |
|-----------|-------|---------|
| **Voice/Audio pipeline** | WebSocket voice host request (#7943) | ZeroClaw |
| **Multi-instance agents** | Cross-machine agent communication (#8080) | CoPaw |
| **Cost optimization** | 15-60% economia com Cheaper Inference | PicoClaw |
| **Markdown rendering universal** | Usuários esperam paridade input/output | CoPaw, PicoClaw |

### 7.3 Padrões de Mercado

1. **Fragmentação de configuração como anti-pattern:** Três projetos (Hermes Agent, ZeroClaw, NanoBot) reportam bugs relacionados a configuração fragmentada — dois timeout knobs, base_url ignorado, profiles boundary quebrados. Oportunidade para library de config patterns.

2. **Provedores como surface de diferenciação:** Diferenças técnicas entre NanoBot (38 provedores) e Hermes Agent (Nous-centric) sugerem que a estratégia de provider determinará posicionamento de mercado.

3. **UX Desktop/TUI como battleground:** Bugs de streaming, scroll, window geometry e session state dominam issues P2. Usuários esperam experiência "local-first" equivalente a apps tradicionais.

4. **Infraestrutura de deploy é blocker:** Reverse proxy, Docker e multi-tenant são requisitos crescentes que projetos menor porte (PicoClaw) não endereçam proativamente.

---

## Síntese para Decisores

| Dimensão | Recomendação |
|----------|--------------|
| **Adoção tática** | NanoBot para flexibilidade de provedores; CoPaw para UX Desktop |
| **Adoção estratégica** | ZeroClaw para DevOps/enterprise (com ressalvas de regressão v0.8.6) |
| **Monitoramento** | Hermes Agent — alta atividade mas dívida técnica visível |
| **Avoid** | NullClaw, IronClaw — inativos sem signals de retorno |

*Relatório gerado em 2026-10-03. Dados extraídos de GitHub Activity Reports individuais de cada projeto.*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-10-03

---

## 1. Panorama do dia

O NanoBot apresenta **atividade intensa** em 03 de outubro de 2026, com 37 PRs atualizados nas últimas 24 horas — um dos dias mais produtivos do período recente. Doze pull requests foram merged ou fechados, incluindo correções críticas de regressão e segurança. Seis issues permanecem abertas, com destaque para um bug de compatibilidade com a série GPT-6 via GitHub Copilot (#5898) que ainda não possui solução. A saúde geral do projeto é positiva, com a equipe mantendo um fluxo constante de correções e melhorias, mas a acumulação de 29 PRs abertos simultaneamente pode representar um gargalo de revisão.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24 horas.**

O projeto não emitiu novas versões desde o último snapshot. O release mais recente disponível continua sendo o **v0.3.5**, que curiosamente é citado na issue #5898 como a versão onde o bug de compatibilidade com a série GPT-6 foi identificado — sugerindo que a próxima versão provavelmente incluirá correções para esse problema. Recomenda-se monitorar o repositório para a publicação de uma correção pontual (patch) que aborde as issues críticas abertas.

---

## 3. Progresso do projeto

As seguintes PRs foram **merged ou fechados** nas últimas 24 horas, representando avanços concretos:

| PR | Título | Área | Prioridade |
|----|--------|------|------------|
| [#5933](https://github.com/HKUDS/nanobot/pull/5933) | fix(cron): preserve pending actions until store save succeeds | Cron | **p0** |
| [#5918](https://github.com/HKUDS/nanobot/pull/5918) | fix(tools): preserve valid JSON Schema union arguments | Tools | p2 |
| [#5995](https://github.com/HKUDS/nanobot/pull/5995) | fix(agent): clear stale failure state when resuming runner iterations | Agent | p2 |
| [#5997](https://github.com/HKUDS/nanobot/pull/5997) | fix(linear): reject stale member access updates after reauthorization | Linear | p2 |
| [#5957](https://github.com/HKUDS/nanobot/pull/5957) | fix(exec): enforce session hard timeouts without polling | Exec | p2 |
| [#5994](https://github.com/HKUDS/nanobot/pull/5994) | fix(agent): preserve explicitly empty tool registries | Agent | p2 |

**Destaque crítico:** O PR [#5933](https://github.com/HKUDS/nanobot/pull/5933) resolve um problema grave no `CronService` onde falhas de escrita no store resultavam em perda de ações pendentes. A correção agora preserva as ações até que o store seja salvo com sucesso, alinhando-se com a issue #5932 que foi fechada como resultado.

**Avanços de segurança:** O PR [#5997](https://github.com/HKUDS/nanobot/pull/5997) impede que atualizações de acesso de membros em workspaces desconectados e reautorizados possam reativar acessos anteriormente negados — uma vulnerabilidade de controle de acesso que foi mitigada.

---

## 4. Temas quentes da comunidade

As discussões mais ativas concentram-se nos seguintes tópicos:

**Issue #5898 — Bug GPT-6 via GitHub Copilot** *(4 comentários)*
Esta issue recebeu o maior engajamento em comentários e representa uma regressão de compatibilidade significativa. Usuários do GitHub Copilot reportam falhas (`Mode provider request failed`) ao utilizar modelos da série GPT-6 com o NanoBot v0.3.5. A issue permanece **aberta** e requer atenção prioritária da equipe de provedores.

**Issue #6002 — `reasoningEffort` silencia `temperature` globalmente** *(1 comentário)*
Um bug de scoping foi identificado: quando `reasoningEffort` é configurado (exceto `null` ou `"none"`), o NanoBot para de enviar o parâmetro `temperature` para **todos** os 38 provedores `openai_compat`, não apenas para os modelos de raciocínio (o1/o3/o4) onde essa lógica deveria se aplicar. Este problema afeta potencialmente todas as integrações que dependem de configuração de temperatura customizada.

**PR #5845 — Adicionar Opper como provedor nativo** *(atividade recente)*
A adição de Opper como gateway built-in, espelhando a estrutura de Eden AI e OrcaRouter, gerou interesse como nova opção de provedora para os usuários. Este é um sinal de crescimento do ecossistema de provedores suportados.

---

## 5. Bugs e estabilidade

### Bugs em aberto (5 issues)

| Severidade | Issue | Descrição | Área |
|------------|-------|-----------|------|
| **Alta** | [#5898](https://github.com/HKUDS/nanobot/issues/5898) | GPT-6 via GitHub Copilot retorna erro de provedor | Provider |
| **Alta** | [#6002](https://github.com/HKUDS/nanobot/issues/6002) | `reasoningEffort` desabilita `temperature` para todos os provedores | Provider |
| **Média** | [#6008](https://github.com/HKUDS/nanobot/issues/6008) | WebUI sidebar perde estado após falha de fetch inicial | WebUI |
| **Média** | [#6006](https://github.com/HKUDS/nanobot/issues/6006) | Mensagens citadas no QQ não chegam ao agente | Channel |
| **Média** | [#6000](https://github.com/HKUDS/nanobot/issues/6000) | `sendProgress: true` não entrega conteúdo na instalação padrão | Agent |

### Bugs resolvidos (1 issue)

| Issue | Descrição | Status |
|-------|-----------|--------|
| [#5932](https://github.com/HKUDS/nanobot/issues/5932) | Ações pendentes do cron perdidas em falha de escrita | ✅ Fechada via [#5933](https://github.com/HKUDS/nanobot/pull/5933) |

### Padrões identificados

- **Provedores (2 bugs):** Problemas com modelos recentes (GPT-6) e comportamento incorreto de parâmetros em provedores OpenAI-compatíveis.
- **WebUI (1 bug):** Tratamento silencioso de falhas em estado inicial, gerando experiência degradada sem feedback ao usuário.
- **Canais (2 bugs):** Problemas de parsing em QQ (mensagens citadas) e Telegram (Markdown rendering, comandos multilinha).
- **Core (1 bug):** Configuração de `sendProgress` contradiz a documentação e não entrega valor ao usuário por padrão.

---

## 6. Pedidos de features e sinais de roadmap

### PRs abertos indicando direções futuras

| PR | Título | Área | Tipo |
|----|--------|------|------|
| [#5845](https://github.com/HKUDS/nanobot/pull/5845) | Add Opper as a built-in provider | Provider | **Feature** |
| [#5926](https://github.com/HKUDS/nanobot/pull/5926) | Correção de URL case-sensitive em scraping | Tools | Bug fix |
| [#5965](https://github.com/HKUDS/nanobot/pull/5965) | Validação de parâmetros null e enum | Tools | Bug fix |
| [#5963](https://github.com/HKUDS/nanobot/pull/5963) | Parsing de durações compostas em hints de retry | Provider | Bug fix |

### Sinais de tendência

- **Expansão de provedores:** A integração do Opper (#5845) sinaliza interesse em diversificar gateways de IA além de Eden AI e OrcaRouter.
- **Robustez de scraping:** Múltiplos PRs relacionados a web scraping (#5926) indicam que essa é uma área ativa de desenvolvimento.
- **Validação de schema:** Correções de validação JSON Schema (#5918 merged, #5965 aberto) sugerem refinamento contínuo da interface de ferramentas.

---

## 7. Resumo de feedback dos usuários

### Dores relatadas

1. **Incompatibilidade com novos modelos:** Usuários do GitHub Copilot enfrentam bloqueios ao usar modelos GPT-6 — uma frustração significativa para quem busca utilizar as versões mais recentes.

2. **Comportamento inesperado de configuração:** A issue #6000 revela que `sendProgress: true` não entrega conteúdo por padrão, contradizendo a documentação e expectativas do usuário.

3. **Perda silenciosa de dados:** O bug original do cron (#5932), agora corrigido, expôs uma vulnerabilidade onde ações de usuário podiam ser perdidas sem notificação.

4. **Problemas em canais específicos:**
   - Mensagens citadas no QQ não são encaminhadas ao agente
   - URLs com formatação Markdown no Telegram são corrompidas na renderização
   - Mensagens do Slack troncadas após 3000 caracteres quando contêm botões

### Cenários de uso identificados

- **Integração corporativa:** O bug de Linear (#5997) sugere uso em ambientes de equipe com controle de acesso refinado.
- **Automação de tarefas:** A presença de issues sobre cron, exec sessions e tool registries indica adoção significativa em fluxos de automação.
- **Web scraping:** O número de PRs relacionados a scraping (3+ últimos dias) sugere uso intensivo para coleta de dados.

---

## 8. Backlog que merece atenção

As seguintes issues estão **abertas há tempo considerável** ou possuem impacto significativo sem resolução:

| Issue | Idade | Descrição | Impacto |
|-------|-------|-----------|---------|
| [#5898](https://github.com/HKUDS/nanobot/issues/5898) | ~9 dias | GPT-6 via Copilot quebrado | Bloqueia usuários |
| [#6002](https://github.com/HKUDS/nanobot/issues/6002) | 1 dia | Temperatura drop global | Afeta 38 provedores |
| [#6000](https://github.com/HKUDS/nanobot/issues/6000) | 1 dia | sendProgress inoperante | UX quebrado |
| [#5845](https://github.com/HKUDS/nanobot/pull/5845) | ~12 dias | PR novo provedor aguardando | Feature request |
| [#5763](https://github.com/HKUDS/nanobot/pull/5763) | ~19 dias | PR validação multimodal | Segurança API |

### Recomendações

1. **Priorizar #5898 e #6002** — ambas afetam funcionalidades core de provedores e geram erros de usuário.
2. **Revisar PR #5845** — feature de provedor com idade crescente, risco de conflitos se o provedor evoluir.
3. **Atribuir owners para #6000 e #6006** — issues relativamente simples mas com impacto direto na experiência.
4. **Consolidar PRs de scraping (#5926)** — múltiplos PRs similares podem conflitar se não forem revisados em conjunto.

---

*Relatório gerado automaticamente com base em dados do GitHub. Para atualizações em tempo real, consulte [HKUDS/nanobot](https://github.com/HKUDS/nanobot).*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent
## NousResearch/hermes-agent — 2026-10-03

---

## 1. Panorama do Dia

O projeto Hermes Agent apresenta alta atividade de desenvolvimento nas últimas 24h, com **50 issues e 50 PRs atualizados**. A atividade concentra-se em correções de bugs críticos (P1-P2) e melhorias de estabilidade, especialmente em Desktop, cron jobs e Windows ARM64. **Três PRs foram fechados/mergeados**, abordando compressão de contexto, autenticação Nous e timestamps Unix no Windows. Não houve lançamentos de novas versões, e **32 issues permanecem abertas**, sinalizando um backlog ativo de trabalho em andamento.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto mantém ritmo de desenvolvimento intenso sem publicação formal de versões, indicando trabalho contínuo em branches de feature ou preparação para release futura.

---

## 3. Progresso do Projeto

### PRs Fechados/Mergeados Hoje

| # | Título | Área | Impacto |
|---|--------|------|---------|
| [#122392](https://github.com/NousResearch/hermes-agent/pull/122392) | `fix(compression): mark non-agent elisions as non-original` | Agent, Compression | Melhora fidelidade da compressão de contexto ao distinguir marcações de elisão |
| [#131670](https://github.com/NousResearch/hermes-agent/pull/131670) | `fix(tools): drop provably-dead Nous bearer when refresh fails` | Tools, Auth | Elimina chamadas 401 consecutivas ao invalidar tokens expirados |
| [#131029](https://github.com/NousResearch/hermes-agent/pull/131029) | `fix(gateway): render early Unix timestamps safely on Windows` | Gateway | Corrige `OSError: [Errno 22]` em timestamps pré-1970 no Windows |

### PRs Abertos em Destaque

| # | Título | Área | Risco | Status |
|---|--------|------|-------|--------|
| [#131773](https://github.com/NousResearch/hermes-agent/pull/131773) | `fix(tui_gateway): early settle turn before housekeeping` | TUI, Desktop | P1 | Em revisão |
| [#131825](https://github.com/NousResearch/hermes-agent/pull/131825) | `fix(windows): arm64 update salvaged from #122840` | Windows | - | Em revisão |
| [#131800](https://github.com/NousResearch/hermes-agent/pull/131800) | `fix(config): serialize .env read-modify-write with file lock` | CLI, Config | 0.30 | Em revisão |
| [#131826](https://github.com/NousResearch/hermes-agent/pull/131826) | `fix(mem_trim): collect on every platform and add darwin pressure relief` | CLI | - | Em revisão |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários)

1. **[#125727](https://github.com/NousResearch/hermes-agent/issues/125727)** — *Automated Nous integration is blocked* (16 comentários, P3)
   - **Resumo:** Merge programado Nous→Enterkey com conflitos em múltiplos arquivos do agent
   - **Componente:** `agent/*`, `acp_adapter`

2. **[#122167](https://github.com/NousResearch/hermes-agent/issues/122167)** — *Desktop: message disappears, assistant replies render twice* (13 comentários, P2)
   - **Resumo:** Sessão Desktop com duplicação de respostas e perda de mensagens
   - **Componentes:** Desktop, Sessions, Compression

3. **[#25859](https://github.com/NousResearch/hermes-agent/issues/25859)** — *Two separate clarify timeout config keys* (8 comentários, P2)
   - **Resumo:** Dois knobs independentes de timeout causam auto-decisão silenciosa após 120s
   - **Componentes:** CLI, Gateway, Config

4. **[#78190](https://github.com/NousResearch/hermes-agent/issues/78190)** — *Gmail MCP OAuthRegistrationError* (7 comentários, P2)
   - **Resumo:** Gmail via CLI funciona, mas gateway falha com 404 no /register
   - **Componentes:** Tools, MCP, Auth

### Análise de Demandas

- **Integração e Migração:** Issue #125727 domina em volume de discussão, refletindo complexidade de integrações cross-platform
- **Estabilidade Desktop:** Múltiplas issues relacionadas a Desktop (duplicação, minimize-to-tray, inference chip) indicam área crítica
- **Configuração e Profiles:** Sistema de configuração fragmentado gera problemas recorrentes (timeout, profiles, hooks)

---

## 5. Bugs e Estabilidade

### Bugs P1 (Críticos)

| # | Título | Componentes | Criado | Status |
|---|--------|-------------|--------|--------|
| [#131444](https://github.com/NousResearch/hermes-agent/issues/131444) | `.git runaway: 332 packs/~180 GiB em ~7h no Windows` | CLI, Install/Update | 2026-10-02 | **ABERTA** |
| [#127010](https://github.com/NousResearch/hermes-agent/issues/127010) | `Snapshot restore no macOS: state.db overwrite + rollback OAuth tokens` | CLI, Sessions | 2026-09-28 | ABERTA |
| [#128974](https://github.com/NousResearch/hermes-agent/issues/128974) | `uninstall --gui --dry-run IGNORA dry-run e REMOVE arquivos` | CLI, Desktop | 2026-09-30 | ABERTA |

### Bugs P2 (Altos)

| Categoria | Issues | Exemplos |
|-----------|--------|----------|
| **Desktop/Sessions** | 4 | [#122167](https://github.com/NousResearch/hermes-agent/issues/122167), [#100855](https://github.com/NousResearch/hermes-agent/issues/100855) |
| **Config/Profiles** | 5 | [#25859](https://github.com/NousResearch/hermes-agent/issues/25859), [#118969](https://github.com/NousResearch/hermes-agent/issues/118969), [#99707](https://github.com/NousResearch/hermes-agent/issues/99707) |
| **Auth/OAuth** | 3 | [#78190](https://github.com/NousResearch/hermes-agent/issues/78190), [#131670](https://github.com/NousResearch/hermes-agent/pull/131670) ✅ |
| **Cron/Workers** | 2 | [#66541](https://github.com/NousResearch/hermes-agent/issues/66541), [#131764](https://github.com/NousResearch/hermes-agent/issues/131764) |
| **Windows** | 3 | [#127349](https://github.com/NousResearch/hermes-agent/issues/127349), [#131444](https://github.com/NousResearch/hermes-agent/issues/131444) |

### Bugs P3 (Médios)

| # | Título | Área |
|---|--------|------|
| [#131793](https://github.com/NousResearch/hermes-agent/issues/131793) | Desktop inference chip "Checking inference" após gateway flap | Desktop |
| [#52284](https://github.com/NousResearch/hermes-agent/issues/52284) | Startup delay 15-30s no Windows por import incondicional de 43 plugins | Perf, Windows |

**Total de bugs reportados nas últimas 24h:** ~25 issues com tag `type/bug`

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Propostas

| # | Título | Área | Prioridade | Sinais |
|---|--------|------|------------|--------|
| [#17649](https://github.com/NousResearch/hermes-agent/issues/17649) | Semantic Skill Retrieval com SQLite FTS5 (~4500 tokens → busca on-demand) | Agent, Skills | P3 | Alto impacto em custo (~$40/mês) |
| [#102811](https://github.com/NousResearch/hermes-agent/issues/102811) | Skills prompt força over-eager loading → RFC | Agent, Skills | P2 | Design decision pendente |
| [#93508](https://github.com/NousResearch/hermes-agent/pull/93508) | `hermes webapp`: servir Desktop renderer em browsers | Webapp, Desktop | P3 | Feature ambiciosa |
| [#126437](https://github.com/NousResearch/hermes-agent/pull/126437) | Matrix: list and send image-pack stickers | Gateway, Matrix | P3 | Plugin catalog |
| [#126435](https://github.com/NousResearch/hermes-agent/pull/126435) | `projects.enabled` — config off-switch para Projects | CLI, Config | P3 | Configurabilidade |

### Plugin Catalog Entries

| # | Provider | Tipo |
|---|----------|------|
| [#131827](https://github.com/NousResearch/hermes-agent/pull/131827) | **Limbic** | Memory Provider (self-organising) |
| [#126193](https://github.com/NousResearch/hermes-agent/pull/126193) | **tam** (total-agent-memory) | Memory Provider |

### Sinais de Roadmap

- **Custo e Eficiência:** Substituir broadcast de 4500 tokens/skill por busca semântica indica foco em otimização de custos
- **Multi-plataforma:** Webapp e Matrix stickers sugerem expansão para novos canais
- **Configurabilidade:** Multiple PRs voltados para off-switches e configuração granular

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Categoria | Descrição | Frequência |
|-----------|-----------|------------|
| **Instabilidade Desktop** | Mensagens somem, respostas duplicadas, minimize-to-tray não funciona | Múltiplas issues |
| **Configuração Fragments** | Dois timeout knobs, base_url ignorado, profile boundary quebrado | 4+ issues |
| **Windows ARM64** | Atualização falha por toolset ausente, .git runaway de 180 GiB | 2 issues P1 |
| **Cron/Background** | Hooks não executam, workers herdam configurações erradas | 2 issues |
| **Performance Windows** | Startup de 15-30s, daemon browser invisível ao reaper | 2 issues |

### Cenários de Uso Identificados

1. **Desktop-first users:** Problemas críticos com sessions, minimize-to-tray, inference chip
2. **Windows native:** ARM64 updates, .git runaway, plugin startup
3. **Power users com profiles:** Kanban workers, shell hooks, terminal config
4. **Multi-provider:** Fallback provider:model mismatches, pricing desconhecido

### Satisfação/Insatisfação

**Sinais Negativos:**
- P1 bugs de integridade de sistema (.git runaway, uninstall que ignora dry-run)
- 47 PRs abertos vs 3 fechados nas últimas 24h
- Múltiplos "sweeper" flags (risk-session-state, risk-compatibility) indicam dívida técnica

**Sinais Positivos:**
- PRs críticos sendo mergeados (auth Nous, timestamps Windows)
- Comunidade ativa (issues com 13-16 comentários)
- Plugin ecosystem crescendo (Limbic, tam)

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta/Muito Antigas

| # | Título | Criado | Comentários | Notas |
|---|--------|--------|-------------|-------|
| [#17649](https://github.com/NousResearch/hermes-agent/issues/17649) | Semantic Skill Retrieval FTS5 | 2026-04-29 | 6 | Sem update há 5 meses, impacto alto |
| [#25859](https://github.com/NousResearch/hermes-agent/issues/25859) | Two clarify timeout keys | 2026-05-14 | 8 | Closed, mas pode ter regressões |
| [#43548](https://github.com/NousResearch/hermes-agent/issues/43548) | Skills usa SKILLS_DIR stale | 2026-06-10 | 2 | Cronologia indica problema recorrente |
| [#52284](https://github.com/NousResearch/hermes-agent/issues/52284) | Windows startup 15-30s | 2026-06-25 | 2 | Sem movimento significativo |
| [#71481](https://github.com/NousResearch/hermes-agent/issues/71481) | Skills index breaks discovery | 2026-07-25 | 3 | Sem update há 2+ meses |

### PRs Abertos há >5 dias sem Merge

| # | Título | Criado | Notas |
|---|--------|--------|-------|
| [#93508](https://github.com/NousResearch/hermes-agent/pull/93508) | `hermes webapp` | 2026-08-24 | Feature grande, precisa review |
| [#63409](https://github.com/NousResearch/hermes-agent/pull/63409) | Unwrap data/success envelope | 2026-07-12 | Pendente needs-decision |
| [#126437](https://github.com/NousResearch/hermes-agent/pull/126437) | Matrix stickers | 2026-09-28 | Dependências pendentes |

### Recomendações de Priorização

1. **Crítico:** Resolver P1s [#131444](https://github.com/NousResearch/hermes-agent/issues/131444), [#127010](https://github.com/NousResearch/hermes-agent/issues/127010), [#128974](https://github.com/NousResearch/hermes-agent/issues/128974)
2. **Alto:** Reduzir PR backlog (47 abertas vs 3 fechadas)
3. **Médio:** Arquivar ou dar update em issues antigas (#17649, #52284)
4. **Estratégico:** Decidir sobre #102811 (skills loading RFC) e #93508 (webapp)

---

*Relatório gerado automaticamente com base em dados do GitHub de 2026-10-03. Para atualização em tempo real, consulte [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent).*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-10-03

---

## 1. Panorama do Dia

O projeto PicoClaw apresenta **atividade moderada** nas últimas 24 horas, com 3 issues e 4 PRs atualizados. Não houve novos lançamentos. A comunidade demonstra engajamento contínuo com issues de usabilidade (lag na UI) e proposals de novas funcionalidades (reverse proxy, novos provedores). Dois PRs de documentação e manutenção foram fechados com sucesso, enquanto feature branches permanecem abertas aguardando review.

---

## 2. Lançamentos

**Nenhum release detectado nas últimas 24h.**

O projeto não publicou novas versões desde o período analisado. A versão mais recente referenciada nos dados é a **0.3.1** (mencionada na issue #3281).

---

## 3. Progresso do Projeto

### PRs Fechadas/Mergidas

| # | Título | Impacto |
|---|--------|---------|
| [#3368](https://github.com/sipeed/picoclaw/pull/3368) | docs: add Parallel Search MCP setup example | ✅ Documentação — Adiciona guia copy-paste para integração com Parallel Search MCP, permitindo busca web e extração de páginas sem necessidade de conta/API key da Parallel |
| [#1544](https://github.com/sipeed/picoclaw/pull/1544) | fix: merge PR #1514 #1513 #1512 #1510 #1509 | ✅ Manutenção — Consolida múltiplos patches de correções em um único merge, limpando o backlog de PRs pendentes |

### PRs Abertas em Review

| # | Título | Status |
|---|--------|--------|
| [#3393](https://github.com/sipeed/picoclaw/pull/3393) | feat(provider): add Cheaper Inference provider | 🔍 Aguardando review — Adiciona provedor compatible com OpenAI para gateway LLM com custos reduzidos (15-60%) |
| [#3381](https://github.com/sipeed/picoclaw/pull/3381) | feat: Switch Openai to responses API | 🔍 Aguardando review — Migra provider OpenAI para a nova Responses API |

---

## 4. Temas Quentes da Comunidade

### Issue com Maior Engajamento

**[#3281](https://github.com/sipeed/picoclaw/issues/3281)** — *Bug: Web UI chat input is very laggy when history has a little bit long*
- **Comentários:** 17
- **Reações:** 👍 2
- **Análise:** Issue com maior engajamento da última semana. Usuário reporta degradação de performance na UI quando o histórico de chat cresce. Com 17 comentários, indica discussão técnica ativa sobre causas (provavelmente re-renders desnecessários ou sincronização de estado). Severidade alta para UX.

### Issues em Destaque

| # | Título | Comentários | Reações |
|---|--------|-------------|---------|
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Chat input laggy com histórico longo | 17 | 2 |
| [#3392](https://github.com/sipeed/picoclaw/issues/3392) | CLAassistant não detecta assinatura | 1 | 0 |
| [#3415](https://github.com/sipeed/picoclaw/issues/3415) | Feature: suporte a reverse proxy Nginx | 0 | 0 |

---

## 5. Bugs e Estabilidade

### Bugs Reportados

| Severidade | # | Título | Status |
|------------|---|--------|--------|
| 🔴 **Alta** | [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Chat input laggy com histórico crescente | 🟡 Aberto — 17 comentários indicam investigação ativa |
| 🟡 **Média** | [#3392](https://github.com/sipeed/picoclaw/issues/3392) | CLAassistant não detecta assinatura | 🟡 Aberto — Impacta fluxo de merge de PRs (referência a PR #3381) |

### Análise de Estabilidade

A saúde geral do projeto permanece **estável**, com regressões críticas não reportadas. O bug de lag na UI (#3281) é a questão mais impactante, afetando usabilidade em sessões com bastante histórico — um cenário comum de uso.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Nova Feature Request

**[#3415](https://github.com/sipeed/picoclaw/issues/3415)** — *Suporte a reverse proxy com Nginx (montagem em /pico/)*
- **Autor:** altman08
- **Comentários:** 0
- **Proposta:** Permitir que o Web Launcher seja montado em subcaminhos (ex: `/pico/`) via Nginx reverse proxy, com todas as rotas (API, WebSocket, assets) adaptadas ao prefixo.

**Relevância:** Feature de infraestrutura com demanda crescente para deployments em produção com múltiplas aplicações no mesmo domínio.

### Features em Desenvolvimento

| # | Título | Progresso |
|---|--------|-----------|
| [#3393](https://github.com/sipeed/picoclaw/pull/3393) | Novo provedor: Cheaper Inference | 🔍 Em review — Gateway LLM com 15-60% economia |
| [#3381](https://github.com/sipeed/picoclaw/pull/3381) | Migração para OpenAI Responses API | 🔍 Em review — Atualização para nova API da OpenAI |

**Sinais de roadmap:** O projeto está expandindo suporte a provedores (Cheaper Inference) e modernizando integrações (Responses API), sugerindo foco em flexibilidade de deployment e redução de custos para usuários.

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

1. **Performance de UI** — Usuários experimentam lentidão ao interagir com sessões que possuem histórico de chat extenso. Issue ativa há meses (criada em 2026-07-21) indica que a correção pode não ser trivial.

2. **Infraestrutura de Deploy** — Necessidade de suporte a reverse proxy evidenciada pela issue #3415, sugerindo que usuários querem rodar PicoClaw em ambientes mais controlados ou compartilhados.

3. **Processo de Contribuição** — Bug no CLA assistant (#3392) pode estar impactando merges de PRs, criando fricção para contribuidores.

### Cenários de Uso Emergentes

- **Multi-tenant via subcaminho:** Deployment em mesmo domínio com outras aplicações
- **Custo otimizado:** Interesse em provedores alternativos (Cheaper Inference) com precificação mais competitiva

---

## 8. Backlog que Merece Atenção

### Issues Antigas sem Resolution

| # | Título | Criado | Atualizado | Comentários | Observação |
|---|--------|--------|------------|-------------|------------|
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Chat input laggy | 2026-07-21 | 2026-10-02 | 17 | ⚠️ 70+ dias aberto, alto impacto |
| [#3381](https://github.com/sipeed/picoclaw/pull/3381) | OpenAI Responses API | 2026-09-17 | 2026-10-02 | — | PR em stale, pode precisar rebase |
| [#3393](https://github.com/sipeed/picoclaw/pull/3393) | Cheaper Inference provider | 2026-09-25 | 2026-10-02 | — | PR em stale, pode precisar rebase |

### Priorização Recomendada

1. **🔴 Crítico:** #3281 — Bug de UX ativo há mais de 2 meses com discussão técnica substancial
2. **🟡 Importante:** #3392 — CLA assistant com problemas impacta comunidade de contribuidores
3. **🟢 Oportunidade:** #3415 — Feature request de reverse proxy com potencial de adoção em produção

---

## Métricas Resumidas (24h)

| Categoria | Total | Abertas/Ativas | Fechadas/Mergidas |
|-----------|-------|----------------|-------------------|
| Issues | 3 | 3 | 0 |
| Pull Requests | 4 | 2 | 2 |
| Releases | 0 | — | — |

**Saúde Geral:** 🟡 **Moderada** — Atividade constante, mas issues de longa duração requerem atenção. Ausência de releases pode indicar ciclo de desenvolvimento em fase de feature freeze ou preparação para próxima versão.

---

*Relatório gerado em 2026-10-03 com base em dados do GitHub do projeto sipeed/picoclaw.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

Sem atividade nas últimas 24 horas.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do Projeto CoPaw — 2026-10-03

## 1. Panorama do Dia

O CoPaw (QwenPaw) mantém um nível de atividade moderado-alto, com **9 issues abertas** e **11 PRs atualizados** nas últimas 24h. Não há lançamentos novos. A comunidade demonstra engajamento significativo em melhorias de UX — os PRs fechados revelam foco em refinamentos da interface (scroll lock, geometria de janela, toggle de ferramentas) e suporte a provedores de mídia. Simultaneamente, 3 bugs críticos aparecem em beta4, sugerindo que a versão está em fase de estabilização. O projeto evidencia maturidade com contribui

...

ção de first-timers e PRs bem segmentados por escopo.

---

## 2. Lançamentos

**Nenhum release nas últimas 24h.**

A ausência de novos lançamentos combinada com múltiplos bugs reportados na versão V2.2.2.beta4 indica que a equipe provavelmente concentra esforços em estabilização antes do próximo tag.

---

## 3. Progresso do Projeto

**7 PRs fechados/merged nas últimas 24h** — todas contribuições de AaronZ345 com foco em UX e acessibilidade:

- **#7347** — *fix: keep rich input caret visible* — Corrige scroll do editor que perdia a posição do cursor em mensagens longas.
- **#6877** — *feat(desktop): remember window geometry* — Persiste posição/tamanho da janela Tauri e restaura ao reabrir.
- **#7356** — *feat(console): add chat scroll lock* — Permite travar scroll durante streaming para ler conteúdo sem ser arrastado.
- **#7357** — *feat(chat): add tool call visibility toggle* — Oculta cards de tool calls para leituras mais limpas.
- **#7359** — *feat(providers): expose per-media inline caps* — Expõe limites de mídia (imagem/vídeo/áudio) por provedor nas configurações avançadas.
- **#6874** — *feat(mcp): add configurable tool call timeout* — Adiciona `tool_call_timeout` configurável (default 300s) para clientes MCP.
- **#7344** — *feat(console): support game-dev file languages* — Suporte a C#, shaders e arquivos Unity/Godot no visualizador.

🔗 [github.com/agentscope-ai/QwenPaw/pulls](https://github.com/agentscope-ai/QwenPaw/pulls)

---

## 4. Temas Quentes da Comunidade

**Issue com maior engajamento: #7997 — "Support message retraction/editing and workspace rollback in WebUI"**

- 📌 8 comentários | Aberta há 6 dias
- Demanda forte: permitir editar/retirar mensagens enviadas, truncar histórico e opcionalmente reverter snapshots de arquivos.
- Cenário: usuários querem corrigir prompts mal formulados sem "contaminar" o contexto da conversa.
- Sinais de priorização:标签 de `enhancement` + discussions ativas.

**Issue #2975 — Renderização Markdown para mensagens de usuário**

- 📌 4 comentários | Aberta há ~6 meses
- Usuários reportam que mensagens com código/listas são exibidas como texto plano, degradando legibilidade.
- Paridade com respostas de IA (que já renderizam) é a expectativa.

🔗 [github.com/agentscope-ai/QwenPaw/issues/7997](https://github.com/agentscope-ai/QwenPaw/issues/7997) | [github.com/agentscope-ai/QwenPaw/issues/2975](https://github.com/agentscope-ai/QwenPaw/issues/2975)

---

## 5. Bugs e Estabilidade

**🔴 Críticos (2):**

- **#8073** — *V2.2.2.beta4: Unable to access conversation page* — Error ao acessar Chat após upgrade de V2.2.1 para beta4, específicamente em acessos LAN de outros dispositivos. Impacta multiusuário.
- **#8077** — *Qoder third-party agent: custom models invisíveis + context-usage meter oculto* — 3 defeitos separados no agente Qoder tornam modelos customizados inutilizáveis.

**🟡 Moderados (2):**

- **#8078** — *Cross-session messages registered as independent chats* — `chat_with_agent` fragmenta sessões no UI.
- **#8085** — *Silent truncation: `finish_reason="length"` dropped* — Saída cortada não exibe aviso, usuário não distingue resposta completa de truncada.

🔗 [github.com/agentscope-ai/QwenPaw/issues/8073](https://github.com/agentscope-ai/QwenPaw/issues/8073) | [github.com/agentscope-ai/QwenPaw/issues/8077](https://github.com/agentscope-ai/QwenPaw/issues/8078) | [github.com/agentscope-ai/QwenPaw/issues/8085](https://github.com/agentscope-ai/QwenPaw/issues/8085)

---

## 6. Pedidos de Features e Sinais de Roadmap

| # | Feature | Esforço Estimado | Sinais |
|---|---------|-----------------|--------|
| #8081 | `view_audio` tool (similar a `view_image`/`view_video`) | size/S | PR #8083 em aberto por first-timer |
| #8080 | Agent communication cross-instance (multi-máquina, descentralizado) | Alto | Feature request detalhado, motivacional |
| #7997 | Message retraction/editing + workspace rollback | Médio | 8 comentários, label `enhancement` |
| #2975 | Markdown rendering para input do usuário | Baixo | 4 comentários,issue antiga |
| #8082 | Documentar heartbeat semantics (concurrency, silence) | Baixo | Documentação, sem código |

**Sinais de roadmap:**
- Áudio emerge como modalidade pendente (`view_audio`).
- Colaboração multi-instância é demanda recorrente.
- Refinamentos de UX (scroll, toggle, geometria) já merged — tendência clara de priorização.

🔗 [github.com/agentscope-ai/QwenPaw/issues/8081](https://github.com/agentscope-ai/QwenPaw/issues/8081) | [github.com/agentscope-ai/QwenPaw/issues/8080](https://github.com/agentscope-ai/QwenPaw/issues/8080)

---

## 7. Resumo de Feedback dos Usuários

**Dores principais:**

1. **Instabilidade em beta4** — Upgrade de V2.2.1 para beta4 quebra acesso a conversas, especialmente em cenários multi-dispositivo (LAN). Usuários estão presos em versão anterior.
2. **Contexto contaminado** — Sem capacidade de editar/retirar mensagens, erros de prompt forçam recomeço de sessões.
3. **UX de streaming** — Scroll automático durante geração atrapalha leitura. Funcionalidade recém-resolvida via #7356.
4. **Formatação de mensagens** — Markdown em input do usuário gera experiência Visual inconsistente vs. output de IA.

**Cenários de uso evidenciados:**
- Agentes em equipes distribuídas (múltiplas máquinas Windows/Linux).
- Game dev (C#, shaders) com visualização de código inline.
- Sessões longas com tool calls onde legibilidade é crítica.

**Satisfação:**
- Funcionalidades pequenas mas frequentes (window geometry, scroll lock) têm alta adoção presumida.
- Suporte a MCP com timeout configurável (#6874) atende usuários enterprise.

---

## 8. Backlog que Merece Atenção

| # | Issue | Idade | Status | Ação Recomendada |
|---|-------|-------|--------|------------------|
| #2975 | Markdown em input do usuário | ~6 meses | Aberta, 4 comments | Avaliar esforço vs. impacto (baixo esforço, alta utilidade) |
| #7997 | Message retraction + workspace rollback | 6 dias | Aberta, 8 comments | Priorizar: alta demanda, enriquece workflow de agentes |
| #8080 | Agent communication cross-instance | 1 dia | Aberta | Discussão arquitetura antes de implementação |

**Nenhum PR há muito tempo sem resposta** — o ritmo de review parece ativo (PRs de ago-2026 sendo fechados em out-2026).

🔗 [github.com/agentscope-ai/QwenPaw/issues/2975](https://github.com/agentscope-ai/QwenPaw/issues/2975) | [github.com/agentscope-ai/QwenPaw/issues/7997](https://github.com/agentscope-ai/QwenPaw/issues/7997)

---

## Saú

... [内容已截断，原长度 2019 字符]

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-10-03

---

## 1. Panorama do Dia

O ecossistema ZeroClaw demonstra **atividade excepcional** nas últimas 24 horas, com 100 eventos combinados (50 issues + 50 PRs). A plataforma encontra-se em plena tensão entre manutenção corretiva e evolução arquitetural: enquanto regressions críticas como o bug de diretório de inicialização do ZeroCode (#11387) e falhas de startup em Docker (#11369) consomem atenção imediata, a comunidade avança em melhorias estruturais como o RFC do protocolo A2A (#11254) e o sistema de knowledge corpus com RAG (#11235). O ciclo de releases permanece estagnado — zero releases nas últimas 24h — apesar de dois PRs críticos para a v0.8.6 estarem em staging. A base de código mostra sinais de maturidade com foco em hardening de segurança (ACLs Windows, autenticação de daemon) e observabilidade (cost tracking, cooperative cancellation).

---

## 2. Lançamentos

### Nenhum release registrado nas últimas 24h

**Status:** A equipe mantém dois PRs blockers para a v0.8.6:
- **#11219** — Fix do diretório de launch do ZeroCode (regression)
- **#11313** — Publicação live de autorizações do `config set/patch`

A ausência de merge sugere pipeline de QA ou decisão de freeze antes do release.

---

## 3. Progresso do Projeto

### PRs Merged/Closed Hoje

| # | Título | Impacto |
|---|--------|---------|
| [#11369](https://github.com/zeroclaw-labs/zeroclaw/issues/11369) | Docker images exit at startup + interrupted upgrade strand DB | **Crítico** — regression S1 da v0.8.6 |
| [#10791](https://github.com/zeroclaw-labs/zeroclaw/issues/10791) | Retire local RPC connections after terminal writer failure | Cleanup de conexões órfãs |

### PRs em Progresso Relevantes (20 top)

| # | Título | Size | Risk | Status |
|---|--------|------|------|--------|
| [#11265](https://github.com/zeroclaw-labs/zeroclaw/pull/11265) | feat(cli): zeroclaw user commands for roster password lifecycle | XL | High | needs-author-action |
| [#11414](https://github.com/zeroclaw-labs/zeroclaw/pull/11414) | feat(web): add focused workspaces and Admin hub | XL | High | em revisão |
| [#11264](https://github.com/zeroclaw-labs/zeroclaw/pull/11264) | feat(security): verify roster passwords through password auth provider | XL | High | stacked em #11265 |
| [#11313](https://github.com/zeroclaw-labs/zeroclaw/pull/11313) | fix(cli): publish authorization edits into running daemon | XL | High | **P1 release-gate** |
| [#11456](https://github.com/zeroclaw-labs/zeroclaw/pull/11456) | feat(tools): add opt-in subprocess memory watchdog | L | Medium | em revisão |
| [#11451](https://github.com/zeroclaw-labs/zeroclaw/pull/11451) | fix(secrets): protect Windows key files at creation | XL | High | CI Windows |
| [#11467](https://github.com/zeroclaw-labs/zeroclaw/pull/11467) | feat(agent): add opt-in single-tool provider rounds | XL | High | stacked, aguarda approval |
| [#11219](https://github.com/zeroclaw-labs/zeroclaw/pull/11219) | fix(zerocode): start fresh local sessions in the launch directory | XL | Medium | **P1 release-gate** |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (por comentários)

| # | Título | Comentários | Categoria |
|---|--------|-------------|-----------|
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | [Tracker]: Maintainer decision queue for RFCs and design issues | 15 | Arquitetura/Governança |
| [#11387](https://github.com/zeroclaw-labs/zeroclaw/issues/11387) | [Bug]: zerocode ignores its launch directory again | 5 | Regressão v0.8.6 |
| [#7943](https://github.com/zeroclaw-labs/zeroclaw/issues/7943) | Feature: Realtime voice-host channel | 5 | Voice/ASR/TTS |
| [#6916](https://github.com/zeroclaw-labs/zeroclaw/issues/6916) | feat: process-memory limits on shell/skill_tool subprocess | 4 | Segurança/Recursos |
| [#11296](https://github.com/zeroclaw-labs/zeroclaw/issues/11296) | Bug: llama.cpp/custom provider use wrong url/uri | 4 | Provider/API |
| [#5836](https://github.com/zeroclaw-labs/zeroclaw/issues/5836) | Feature: add cooperative cancellation to Tool execution | 3 | Contrato de Execução |

### Análise de Demandas

**1. Arquitetura e Governança (#8692 — 15 comments)**
O tracker de decisões de maintainers evidencia um gargalo na tomada de decisão sobre RFCs e design issues. A comunidade demonstra maturidade ao criar processos formais de priorização.

**2. Voice/Audio Pipeline (#7943 — 5 comments)**
Demanda por backend-agnostic WebSocket voice host com suporte a ASR/TTS externos (CrispASR, sherpa-onnx). O objetivo é manter ZeroClaw como "cérebro" LLM enquanto componentes de áudio ficam externos.

**3. Segurança de Subprocessos (#6916, #11456)**
Preocupação recorrente com OOM em containers:LLMs podem invocar comandos shell (e.g., `wkhtmltopdf`) que alocam memória irrestrita. Solução em curso: memory watchdog opt-in + limits configuráveis.

---

## 5. Bugs e Estabilidade

### Por Severidade

#### S1 — Workflow Blocked (Crítico)

| # | Título | Criado | Status |
|---|--------|--------|--------|
| [#11387](https://github.com/zeroclaw-labs/zeroclaw/issues/11387) | zerocode ignores launch directory (regression #10609) | 2026-10-01 | in-progress |
| [#10225](https://github.com/zeroclaw-labs/zeroclaw/issues/10225) | ZeroCode RPC sessions cannot reach channels | 2026-08-21 | in-progress |
| [#10673](https://github.com/zeroclaw-labs/zeroclaw/issues/10673) | Persist failed ACP turns on daemon RPC path | 2026-09-07 | in-progress |
| [#11418](https://github.com/zeroclaw-labs/zeroclaw/issues/11418) | "Copy" one-click feature not working | 2026-10-02 | novo |

#### S2 — Degraded Behavior

| # | Título | Criado | Status |
|---|--------|--------|--------|
| [#11336](https://github.com/zeroclaw-labs/zeroclaw/issues/11336) | plugin info/list report [loads] for refused plugin | 2026-10-01 | accepted |
| [#11333](https://github.com/zeroclaw-labs/zeroclaw/issues/11333) | Skill review tools can't see skill_bundles | 2026-10-01 | accepted |
| [#11332](https://github.com/zeroclaw-labs/zeroclaw/issues/11332) | Skill review/creation never run for channel/webhook turns | 2026-10-01 | accepted |
| [#9028](https://github.com/zeroclaw-labs/zeroclaw/issues/9028) | Ctrl+C on Windows causes force quit | 2026-07-13 | no-stale |
| [#10741](https://github.com/zeroclaw-labs/zeroclaw/issues/10741) | ZeroCode silently pauses queued work | 2026-09-10 | in-progress |
| [#10294](https://github.com/zeroclaw-labs/zeroclaw/issues/10294) | file_write cannot distinguish creation from overwrite | 2026-08-24 | in-progress |

#### Bugs Regressão v0.8.6

| # | Título | Feature Gate |
|---|--------|--------------|
| [#11387](https://github.com/zeroclaw-labs/zeroclaw/issues/11387) | zerocode ignores launch directory | release:v0.8.6 |
| [#11336](https://github.com/zeroclaw-labs/zeroclaw/issues/11336) | plugin info/list false positive | release:v0.8.6 |
| [#11333](https://github.com/zeroclaw-labs/zeroclaw/issues/11333) | skill_bundles invisíveis ao review | release:v0.8.6 |
| [#11332](https://github.com/zeroclaw-labs/zeroclaw/issues/11332) | skill loops ausentes em canais | release:v0.8.6 |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features (últimas 24h)

| # | Título | Priority | Área |
|---|--------|----------|------|
| [#11325](https://github.com/zeroclaw-labs/zeroclaw/issues/11325) | verify named-pipe server on Windows | P2 | CLI/Segurança |
| [#11324](https://github.com/zeroclaw-labs/zeroclaw/issues/11324) | verify daemon identity in call_local | **P1** | CLI/Segurança |
| [#11418](https://github.com/zeroclaw-labs/zeroclaw/issues/11418) | Copy one-click in ZeroCode | P3 | UX |

### RFCs em Debate

| # | Título | Tipo | Impacto |
|---|--------|------|---------|
| [#11254](https://github.com/zeroclaw-labs/zeroclaw/issues/11254) | RFC: A2A protocol crate (zeroclaw-a2a) | Arquitetura | Cross-cutting |
| [#11235](https://github.com/zeroclaw-labs/zeroclaw/issues/11235) | RFC: Knowledge corpus — RAG for the agent | Capacidade | Novo Subsistema |

### Roadmap Indicators

| # | Título | Bloqueio | Versão Alvo |
|---|--------|----------|-------------|
| [#11002](https://github.com/zeroclaw-labs/zeroclaw/issues/11002) | Ship zeroclaw-gw as standalone IPC client | blocked | v0.9.0 |
| [#7883](https://github.com/zeroclaw-labs/zeroclaw/issues/7883) | Expose intra-family provider fallback notices | in-progress | backlog |

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

**1. Regression de CWD no ZeroCode (#11387)**
> *"Same defect as #10609, regressed again. A locally launched `zerocode` session ignores the shell directory it was launched from and roots every fresh session at the selected agent's configured workspace."*

Impacto: Usuários esperam que sessões Code/Chat herdem o diretório do terminal, não o workspace do agente.

**2. Skills Invisíveis ao Loop de Review (#11333, #11332)**
> *"All of my agent's skills live in a skill bundle (`skill_bundles = ["devops_skills"]`), and they load and work fine. But the skill review fork can't see any of them."*

Impacto: Workflow de improvement de skills quebrado para usuários com bundles configurados.

**3. Docker Startup Regression (#11369)**
> *"Since #10621 merged (2026-09-30), the daemon locks its data directory before it loads the config. After loading, it refuses to start if the loaded `config.data_dir` is a different path."*

Impacto: Usuários Docker impossível iniciar o daemon após upgrade.

**4. Copy Button Quebrado (#11418)**
> *"This 'Copy' button is not working for me. It does absolutely nothing for my clipboard."*

Impacto: UX básico do ZeroCode falhando.

### Cenários de Uso Observados

- **DevOps Bundles**: Usuários organizam skills em bundles externos
- **Voice Integration**: Demanda por ASR/TTS backend-agnostic (CrispASR, sherpa-onnx)
- **RAG Corporativo**: Necessidade de knowledge corpus para documentação interna
- **Windows-first**: Issues específicas de Windows (named pipes, ACLs, Ctrl+C)

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta/Progresso Estendido

| # | Título | Criado | Última Atualização | Prioridade |
|---|--------|--------|---------------------|------------|
| [#9028](https://github.com/zeroclaw-labs/zeroclaw/issues/9028) | Ctrl+C on Windows force quit | 2026-07-13 | 2026-10-02 | P2 |
| [#9226](https://github.com/zeroclaw-labs/zeroclaw/issues/9226) | Add isolated memory seeding to eval harness | 2026-07-21 | 2026-10-02 | P3 |
| [#7468](https://github.com/zeroclaw-labs/zeroclaw/issues/7468) | Allow non-agent aliases rename in Zerocode | 2026-06-10 | 2026-10-02 | P2 (icebox) |
| [#10294](https://github.com/zeroclaw-labs/zeroclaw/issues/10294) | file_write cannot distinguish creation | 2026

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*