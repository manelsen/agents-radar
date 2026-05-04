# Resumo diário do ecossistema de agentes de IA 2026-05-05

> Issues: 3 | PRs: 4 | Projetos cobertos: 7 | Gerado em: 2026-05-04 21:04 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal


# Relatório do Projeto NullClaw — 2026-05-05

---

## 1. Panorama do dia

O projeto NullClaw mantém um nível de atividade moderado nas últimas 24 horas, com 3 issues e 4 PRs atualizados. A atividade concentra-se principalmente em melhorias de compatibilidade (build Zig v0.16), hardening de segurança (sandbox e probe) e uma feature de governança de dados originada de hackathon. Nenhuma release foi publicada no período. A comunidade demonstra foco em usabilidade em dispositivos de baixo recurso e em robustez do sistema de sandbox, indicando uma maturing phase do projeto.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

O projeto não publicou novas versões neste período. Para contexto, a ausência de releases pode indicar que o time está em ciclo de preparação para uma próxima versão, dado o volume de PRs em aberto.

---

## 3. Progresso do Projeto

### PR merged/fechada hoje

| # | Título | Status | Relevância |
|---|--------|--------|------------|
| [#884](https://github.com/nullclaw/nullclaw/pull/884) | Fix/add crit tests | ✅ FECHADA | **Alta** |

**Análise:** O PR #884 de @DonPrus adiciona cobertura crítica de testes Zig para contratos de runtime de alto risco, incluindo ownership, lifecycle, security, routing, parser e registry. A adição de testes em áreas de segurança e parsing indica foco em estabilidade e redução de regressões — um sinal saudável de maturação do projeto.

### PRs abertas merecendo atenção

| # | Título | Autor | Relevância |
|---|--------|-------|------------|
| [#887](https://github.com/nullclaw/nullclaw/pull/887) | Fix build with zig v0.16 for win/linux | qxo | **Alta** |
| [#883](https://github.com/nullclaw/nullclaw/pull/883) | probe: resolve executable before spawning child process | mark-os | **Alta** |
| [#885](https://github.com/nullclaw/nullclaw/pull/885) | [hackathon] NullClaw Data Governance Layer | sleep3r | **Média** |

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários)

| # | Título | Comentários | 👍 | Severidade |
|---|--------|-------------|----|------------|
| [#871](https://github.com/nullclaw/nullclaw/issues/871) | [bug] web_search impraticável em dispositivos de baixo recurso | **5** | 0 | 🔴 Crítica |
| [#882](https://github.com/nullclaw/nullclaw/issues/882) | sandbox: default para Landlock, parar de sondar ferramentas externas | **2** | 0 | 🟡 Média |
| [#886](https://github.com/nullclaw/nullclaw/issues/886) | [enhancement] opção para mostrar raciocínio/thinking | **0** | 0 | 🟢 Baixa |

**Análise:** A issue #871 lidera em engajamento com 5 comentários, revelando uma **dor real**: o `web_search` atual depende de Brave Search API (requer chave externa) ou Bing Custom Search, ambos inadequados para execução em dispositivos fracos e baratos. A comunidade запросивает suporte direto a DuckDuckGo como alternativa lightweight. Esta é uma demanda de UX-critical que impacta diretamente o caso de uso central do NullClaw.

A issue #882 busca otimizar a inicialização do sandbox eliminando o probing de ferramentas externas (firejail, bwrap, docker) via child processes, o que tem causado problemas recorrentes.

---

## 5. Bugs e Estabilidade

### Bugs reportados

| # | Título | Criado | Severidade | Status |
|---|--------|--------|------------|--------|
| [#871](https://github.com/nullclaw/nullclaw/issues/871) | web_search impraticável em low-resource devices | 2026-04-25 | 🔴 **Crítica** | Aberta (5 comments) |

**Análise:** A issue #871, embora aberta desde 25/04, permanece ativa com atualizações recentes (04/05) e 5 comentários, indicando discussão em andamento. O bug é descrito como "Critical" pelo autor e impacta o caso de uso primário do projeto: execução em dispositivos barato/low-resource. A dependência de APIs externas com chaves é incompatível com o modelo de uso offline/privado.

**Riscos identificados:**
- Regressão de compatibilidade com o caso de uso "offline-first" do NullClaw
- Barreira de entrada para novos usuários sem API keys

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features solicitadas

| # | Título | Autor | Tipo | Sinais de roadmap |
|---|--------|-------|------|-------------------|
| [#886](https://github.com/nullclaw/nullclaw/issues/886) | Opção para mostrar raciocínio/thinking | darklight9811 | Enhancement | UX/Transparency |
| [#882](https://github.com/nullclaw/nullclaw/issues/882) | Sandbox com Landlock como default | mark-os | Enhancement | Segurança + Performance |
| [#885](https://github.com/nullclaw/nullclaw/pull/885) | Data Governance Layer | sleep3r | Feature | Conformidade/Enterprise |

**Análise de sinais de roadmap:**

1. **UX/Transparency (#886):** Demanda por feedback visual durante tarefas longas (citado caso: MCP Outlook rodando por 30 minutos sem output). Indica necessidade de modo verbose/debug.

2. **Segurança + Performance (#882):** A sugestão de Landlock como default no Linux demonstra foco em security hardening e redução de overhead de inicialização.

3. **Enterprise/Dados (#885):** A Data Governance Layer originada de hackathon (WB × OpenSource) sugere ambitions de mercado corporativo/enterprise para NullClaw — governança, compliance e auditoria de dados processados por agentes.

---

## 7. Resumo de Feedback dos Usuários

### Dores reais identificadas

**1. Usabilidade em dispositivos fracos (#871)**
> *"web_search is currently not usable in a practical way for the intended NullClaw use case: running on weak, cheap, low-resource devices."*
— uMendex

O feedback indica um **gap entre a proposta de valor** (agente leve, offline) **e a implementação atual** (dependência de APIs externas).

**2. Falta de transparência durante execução (#886)**
> *"Running outlook mcp, and tell to read my emails, its being running for 30 minutes and its not displaying anything in the terminal. I dont know what is doing or if its stuck."*
— darklight9811

Usuários experimentam **frustração por falta de feedback em tempo real**, especialmente em tarefas de longa duração com MCP servers externos.

**3. Overhead de inicialização (#882)**
O probing de sandbox tools a cada startup gera **latência desnecessária** e pode causar comportamentos imprevisíveis.

### Cenários de uso emergentes

- Agentes de IA processando emails (MCP Outlook) por períodos prolongados
- Execução em hardware limitado (Raspberry Pi, dispositivos embarcados)
- Casos de uso enterprise com requisitos de governança de dados

---

## 8. Backlog que Merece Atenção

### Issues antigas sem resolução ou resposta recente

| # | Título | Criado | Atualizado | Dias desde criação | Prioridade |
|---|--------|--------|------------|-------------------|------------|
| [#871](https://github.com/nullclaw/nullclaw/issues/871) | web_search impraticável | 2026-04-25 | 2026-05-04 | **10 dias** | 🔴 Alta |

**Análise:** A issue #871 está aberta há 10 dias com discussão ativa (5 comentários), mas sem resolução. Este é o item mais crítico do backlog — impacta diretamente a proposta de valor do NullClaw (execução em low-resource devices).

### PRs em draft/aberto há mais tempo

| # | Título | Criado | Status | Notas |
|---|--------|--------|--------|-------|
| [#885](https://github.com/nullclaw/nullclaw/pull/885) | Data Governance Layer | 2026-05-04 | Aberto (draft?) | Originada de hackathon, verificar viabilidade |

---

## Indicadores de Saúde do Projeto

| Métrica | Valor | Indicador |
|---------|-------|--------|
| Issues ativas | 3 | 🟢 Normal |
| PRs abertos | 3 | 🟢 Normal |
| PRs merged (24h) | 1 | 🟢 Positivo |
| Releases (24h) | 0 | 🟡 Neutro |
| Bugs críticos | 1 | 🟡 Atenção |
| Feature requests | 3 | 🟢 Engajamento saudável |

**Veredicto geral:** O projeto NullClaw apresenta saúde moderada. A atividade de PRs indica desenvolvimento ativo, com foco em estabilidade (#884) e compatibilidade (#887). O principal ponto de atenção é a issue #871 — a dependência de APIs externas para web_search que conflita com o caso de uso core. A comunidade demonstra interesse em evoluções para enterprise (governança de dados) e UX (transparência de reasoning).

---

*Relatório gerado automaticamente com base em dados do GitHub de nullclaw/nullclaw — 2026-05-05*

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo — Ecossistema de Agentes de IA Open Source

**Data-base:** 2026-05-05 | **Projetos analisados:** 7

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **dois padrões distintos de maturidade** neste período. Por um lado, projetos como **ZeroClaw, PicoClaw e Hermes Agent** operam em regime de alto volume — 50+ e 30+ interações diárias — sinalizando adoption massiva e pressão de feature requests. Por outro, **NullClaw e IronClaw** mantêm ritmo mais controlado, focando em estabilidade e qualidade antes de escalar. A dominante preocupação transversal é **resiliência multi-provider**: failover automático, fallbacks de API e suporte a modelos locais (LM Studio, Ollama) aparecem em ao menos 5 dos 7 projetos. Segurança emerge como tema urgente — 3 vulnerabilidades P0 no Hermes, 2 bugs críticos no PicoClaw (incluindo sandbox bypass), e 1 disclosure S0 no ZeroClaw. O ecossistema está claramente em transição de "funcionalidade" para "confiança", com cada projeto tentando equilibrarambição de features com robustez operacional.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | PRs Merged | Releases | Saúde Geral | Bugs Críticos |
|---------|-------------|-----------|------------|----------|-------------|--------------|
| **NullClaw** | 3 | 4 | 1 | 0 | 🟢 Moderada | 1 (web_search) |
| **NanoBot** | 7 | 18 | 11 | 0 | 🟢 Boa | 0 |
| **Hermes Agent** | 50 | 50 | 27 | 0 | 🔴 Instável | 6 P0 (3 security) |
| **PicoClaw** | 30 | 64 | 43 | 0 | 🟡 Atenção | 2 |
| **IronClaw** | 2 | 10 | 1 | 0 | 🟢 Estável | 0 |
| **CoPaw** | 14 | 21 | 15 | 0 | 🟢 Boa | 1 (HTTP gateway) |
| **ZeroClaw** | 50 | 50 | 5 | 0 | 🟡 Atenção | 4 (S0-S1) |

**Observação:** Volume de activity não correlaciona diretamente com saúde. Hermes e ZeroClaw lideram em interação mas carregam vulnerabilidades críticas sem resolução. PicoClaw apresenta melhor taxa de resolução (43 PRs merged em 64 atualizados). IronClaw e NullClaw mostram disciplina de integração mais conservadora.

---

## 3. Posicionamento do Projeto Principal

### Vantagens Competitivas por Projeto

| Projeto | Diferenciador Técnico | Público-Alvo | Tamanho Comunidade |
|---------|----------------------|--------------|-------------------|
| **NullClaw** | Offline-first, Zig-built, sandbox hardening | Dispositivos low-resource, privacidade | ⭐ Pequena mas engajada |
| **NanoBot** | Failover chain multi-provider, WhatsApp voice | Operadores multi-provider, desenvolvedores | ⭐⭐ Média |
| **Hermes Agent** | Multi-canal (Telegram/Discord/Matrix), cron jobs | Usuários finais, automação de comunicação | ⭐⭐⭐ Grande |
| **PicoClaw** | FreeRide (modelos gratuitos), TTS/ASR, WhatsApp groups | Usuários consciente de custo, comunidades | ⭐⭐⭐ Grande |
| **IronClaw** | Reborn architecture (event store), WASM tools, Web3 | Enterprise, desenvolvedores avançados | ⭐⭐ Média-alta |
| **CoPaw** | Windows native, Docker-first, Qwen integration | Desenvolvedores Windows, pesquisadores | ⭐ Média |
| **ZeroClaw** | Schema v3, multi-tenant RBAC, Jira/Matrix/WhatsApp | Enterprise, operações cross-canal | ⭐⭐⭐⭐ Muito grande |

**Análise de Pares:** ZeroClaw diferencia-se por escala de features enterprise (RBAC, audit trail, Jira integration) e volume de comunidade. Hermes Agent lidera em conectividade multi-canal. PicoClaw vence em custo-benefício com FreeRide. NullClaw ocupa nicho de privacidade/offline que nenhum outro projeto endereça diretamente.

---

## 4. Focos Técnicos Compartilhados

### Necessidades Emergentes em Múltiplos Projetos

**1. Resiliência Multi-Provider (5/7 projetos)**
| Projeto | Status |
|---------|--------|
| NanoBot | PR #1163 merged — LLM fallback chain |
| NullClaw | Issue #871 — busca offline-compatible |
| PicoClaw | PR #2603 — FreeRide para modelos gratuitos |
| Hermes | Issue #7494 — Remote Ollama connectivity |
| ZeroClaw | DeepSeek-V4, Bedrock, temperature regressions |

**2. Segurança e Sandbox (4/7 projetos)**
| Projeto | Problema |
|---------|----------|
| Hermes Agent | 3 vulnerabilidades P0 ativas (credenciais, /proc bypass) |
| PicoClaw | Sandbox bypass via `find /` (#2688) |
| CoPaw | HTTP gateway sem auth (#4037) |
| IronClaw | HMAC tool receipts em desenvolvimento (#6214) |

**3. Modelos Locais e Privacidade (3/7 projetos)**
| Projeto | Feature |
|---------|---------|
| PicoClaw | LM Studio Easy Connect (#28) |
| Hermes | Ollama remote endpoint (localhost-only bug) |
| NullClaw | Offline-first como core value prop |

**4. Feedback Visual e Observabilidade (3/7 projetos)**
| Projeto | Problema |
|---------|----------|
| NullClaw | Thinking/reasoning transparency (#886) |
| Hermes | TUI crashes, status bar duplication |
| PicoClaw | Progress indicators para execuções longas |

---

## 5. Análise de Diferenciação

### Matriz de Posicionamento

```
                    Enterprise/Complexo
                           ▲
                           │
         IronClaw          │         ZeroClaw
    (Web3, WASM,           │      (RBAC, Multi-tenant,
     Event Store)          │       Jira, Schema v3)
                           │
                           │
    Desenvolvedores ───────┼────────────────
    Avançados              │         │
                           │         │
         CoPaw             │    Hermes Agent
    (Windows native,       │  (Multi-canal,
     Qwen, Docker)         │   Cron, Matrix)
                           │
                           │
                           ▼
                    Uso Final/Consumidor
─────────────────────────────────────────────────────────
              Custo Zero          ▲         💰 Enterprise
                           ───────┼───────
                           │      │
                    NullClaw      │   PicoClaw
               (Offline-first,     │ (FreeRide,
                Low-resource)       │  TTS/ASR)
                           │      │
                           ▼      │
                      NanoBot     │
                  (Failover chain,│
                   WhatsApp voice)│
```

### Diferenças Arquiteturais Chave

| Aspecto | NullClaw | PicoClaw | Hermes | ZeroClaw |
|---------|----------|----------|--------|----------|
| **Linguagem** | Zig | Python? | Python | Python |
| **Segurança** | Landlock sandbox | Sandbox bypass (ativo) | Vulnerabilidades P0 | Context spillage S0 |
| **Provider Model** | Offline-first | FreeRide rotation | Multi-gateway | Schema v3 aliasing |
| **Canais** | Limitado | WhatsApp groups | Matrix, Discord, Telegram | Matrix, WhatsApp, Jira |
| **Estratégia de Release** | Conservative | High-velocity merges | Regression-prone | Feature-gated |

---

## 6. Tração e Maturidade da Comunidade

### Velocidade de Iteração vs. Qualidade

| Projeto | Velocidade | Qualidade | Veredicto |
|---------|------------|-----------|-----------|
| **PicoClaw** | 🔥 Alta (43 PRs/24h) | 🟡 Regressões (auth bug) | Entrega rápida, dívida técnica |
| **NanoBot** | 🔥 Alta (11 PRs/24h) | 🟢 Boa | Equilíbrio saudável |
| **Hermes Agent** | 🔥 Alta (27 PRs/24h) | 🔴 Pobre (6 P0) | Technical debt acumulado |
| **ZeroClaw** | 🔥 Alta (50+ interações) | 🟡 Estagnada (S0 sem movimento) | Volume sem profundidade |
| **CoPaw** | 🟡 Média (15 PRs/24h) | 🟢 Boa (5 first-timers) | Crescimento saudável |
| **IronClaw** | 🟢 Controlada (1 merge/24h) | 🟢 Forte | Maturidade, integra devagar |
| **NullClaw** | 🟢 Baixa (1 merge/24h) | 🟢 Forte | Foco em estabilidade |

### Indicadores de Maturidade

| Indicador | Líder | Seguidor |
|-----------|-------|----------|
| **Security response** | CoPaw (resposta imediata) | Hermes (3 P0 sem fix) |
| **First-time contributors** | CoPaw (5/24h) | IronClaw (0) |
| **Release cadence** | Nenhum (todos em consolidação) | — |
| **Feature stability** | IronClaw (Reborn gated) | PicoClaw (regressões) |
| **Bug backlog age** | ZeroClaw (S0 há 29 dias) | NanoBot (responsivo) |

---

## 7. Sinais de Tendência

### Tendências de Mercado Extraídas

**1.Offline-First como Diferenciador (NullClaw)**
> *"web_search is currently not usable in a practical way for the intended NullClaw use case: running on weak, cheap, low-resource devices."*
— uMendex

O gap entre promessa (agente leve) e implementação (dependência de APIs cloud) gera demanda reprimida por soluções verdadeiramente offline. Mercado potencial: emergentes, privacidade, IoT.

**2.Enterprise Multi-Tenant (ZeroClaw, IronClaw)**
Feature requests por RBAC por sender (#5982), tenant blueprints (#3036), e audit trails indicam que o ecossistema está migrando de "ferramenta de desenvolvedor" para "plataforma corporativa".

**3.Custo Zero como Estratégia (PicoClaw, NanoBot)**
FreeRide rotation (#2603) e failover chain (#1163) demonstram que otimização de custo é prioritária para a base de usuários — não apenas hobbyists, mas operators reais gerenciando budgets.

**4.Multi-Canal como Maturidade (Hermes, ZeroClaw, PicoClaw)**
Integração com Matrix, WhatsApp, Telegram, Discord, Slack, WeChat e Nextcloud indica que agentes não são mais "chatbots" — são hubs de comunicação empresarial.

**5.Segurança como Bloqueador (Todos)**
Vulnerabilidades simultâneas em 4/7 projetos (Hermes P0 triplo, PicoClaw sandbox bypass, CoPaw HTTP gateway, ZeroClaw context spillage) revelam que o ecossistema está crescendo mais rápido do que a segurança pode acompanhar.

**6.Local LLM como Necessidade (PicoClaw #28, Hermes #7494)**
LM Studio Easy Connect com 17 comentários e Ollama remote endpoint com 6 comentários indicam que a comunidade quer alternatives a APIs cloud — privacidade, custo, e controle.

---

## Recomendações Estratégicas

| Público | Recomendação |
|---------|-------------|
| **Desenvolvedores** | Priorizem NullClaw para privacidade; NanoBot para resiliência; Hermes para multi-canal |
| **Empresas** | Avaliem ZeroClaw (enterprise features) e IronClaw (Web3, multi-tenant) com cautela — ambos em transição arquitetural |
| **Operadores** | NanoBot ou PicoClaw para balancear custo e confiabilidade; evitarem Hermes v0.12.0 até patch |
| **Contribuidores** | CoPaw demonstra melhor recepção a first-timers; IronClaw integra devagar mas código maduro |

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>


# Relatório do Projeto NanoBot — 2026-05-05

---

## 1. Panorama do Dia

O projeto NanoBot apresenta **alta atividade** nas últimas 24h, com 18 PRs atualizados e 7 issues, embora nenhuma release tenha sido publicada. A equipe principal demonstra foco em **confiabilidade e resiliência** — foram merged 7 PRs de correções críticas, incluindo fallback de modelos, segurança do agent e compatibilidade com canais de mensageria. No front de issues, a comunidade sinaliza demanda urgente por **failover automático de providers/modelos** e documentação de provedores personalizados.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.** O último tag estável é `v0.1.5.post3` (referenciado em issues abertas).

---

## 3. Progresso do Projeto

### PRs Merged/Closed Hoje (11)

| PR | Descrição | Impacto |
|----|-----------|---------|
| [#3616](https://github.com/HKUDS/nanobot/pull/3616) | Backfill `reasoning_content` para DeepSeek-V4 | **Estabilidade** — corrige erro crítico em Windows com exec tool |
| [#3613](https://github.com/HKUDS/nanobot/pull/3613) | Previne falsos positivos de safety guard e perda de mensagens streaming | **Confiabilidade** — ajusta regex de workspace e fluxo de streaming |
| [#3612](https://github.com/HKUDS/nanobot/pull/3612) | Adiciona comando `provider logout` | **UX/CLI** — permite reautenticação limpa de OAuth |
| [#3607](https://github.com/HKUDS/nanobot/pull/3607) | Suporte a download de mensagens de voz no WhatsApp | **Canal** — habilita áudio para LLMs |
| [#1163](https://github.com/HKUDS/nanobot/pull/1163) | LLM fallback chain em erros retriáveis (Timeout/503/502/429) | **Resiliência** — chain de fallback entre modelos |
| [#3281](https://github.com/HKUDS/nanobot/pull/3281) | Torna taxa de consolidação de memória configurável | **Customização** — `consolidationRatio` (0.1–0.95) |
| [#3254](https://github.com/HKUDS/nanobot/pull/3254) | Popula `RunResult.tools_used` e `RunResult.messages` | **SDK** — visibilidade de ferramentas/mensagens no facade |
| [#3548](https://github.com/HKUDS/nanobot/pull/3548) | Reverte PR #3543 (feishu streaming card) | **Rollback** — reverte mudança problemática |
| [#3091](https://github.com/HKUDS/nanobot/pull/3091) | Suporte a `base_url` custom para Tavily | **Flexibilidade** — permite proxies/mirrors |
| [#3080](https://github.com/HKUDS/nanobot/pull/3080) | Custom provider support + workspace command loading | **Extensibilidade** — openai-compatible providers |
| [#1154](https://github.com/HKUDS/nanobot/pull/1154) | Implementa canal Mezon | **Canais** — novo canal de mensageria |

---

## 4. Temas Quentes da Comunidade

### Maior engagement (comentários + reações)

| Item | Tipo | Comentários | 👍 | Tema Central |
|------|------|-------------|-----|--------------|
| [#3376](https://github.com/HKUDS/nanobot/issues/3376) | Issue | 13 | 1 | **Failover automático de providers/models** — o issue mais comentado do dia |
| [#3292](https://github.com/HKUDS/nanobot/issues/3292) | Issue | 7 | 0 | **Session-Level Focus Tool** — persistência de foco entre interrupções |

### Análise

**Failover de providers** (#3376) é a demanda mais urgente. O usuário `1723229` reporta que nanobot não faz switch entre providers configurados ao encontrar timeout, 429, 5xx ou indisponibilidade — apenas retry interno ao mesmo provider. A comunidade claramente precisa de **tolerância a falhas em nível de provider**, não apenas retry. O PR #1163 (agora merged) implementa fallback chain, mas o issue #3376 sugere que ainda há lacunas para cenários multi-provider.

**Focus Tool** (#3292) propõe analogia com "quadro mental de tarefas" humano — quando interrompido, retorna à tarefa principal. O PR #3622 já implementa persistência de focus key via session metadata.

---

## 5. Bugs e Estabilidade

### Issues de Bug Abertas

| Severidade | Issue | Descrição | Link |
|------------|-------|-----------|------|
| **Alta** | #3618 | `'model is not available in your region'` (403) — afetou tarefas agendadas de 25/abr a 04/mai | [Link](https://github.com/HKUDS/nanobot/issues/3618) |
| **Média** | #3554 | `reasoning_content` error no DeepSeek-V4 com exec tool (Windows) — **já corrigido em #3616** | [Link](https://github.com/HKUDS/nanobot/issues/3554) |
| **Média** | #2804 | DuckDuckGo `web_search` bloqueia sessão indefinidamente | [Link](https://github.com/HKUDS/nanobot/issues/2804) |

### Issues de Bug Fechadas

- **#2804** — web_search via DuckDuckGo bloqueava pipeline de mensagens
- **#2665** — reautenticação OpenAI Codex (resolvido via CLI logout em #3612)
- **#3554** — DeepSeek-V4 `reasoning_content` (corrigido em #3616)

### Análise de Severidade

O bug **#3618** é crítico: GLM-4 (智谱) indisponível por ~10 dias sem fallback automático. Isso corrobora o tema quente de #3376. Recomenda-se priorizar implementação de provider failover robusto.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Request (Issues Abertas)

| Feature | Descrição | Prioridade Indicada | Link |
|---------|-----------|---------------------|------|
| Failover automático | Switch entre providers/models em exceção | 🔴 Alta (13 comments) | [#3376](https://github.com/HKUDS/nanobot/issues/3376) |
| Focus Tool | Memória de tarefa persistente entre interrupções | 🟡 Média-alta | [#3292](https://github.com/HKUDS/nanobot/issues/3292) |
| Documentação MiMo | Guia para Xiaomi token plan | 🟢 Documentação | [#3617](https://github.com/HKUDS/nanobot/issues/3617) |

### PRs Abertos com Features

| Feature | Descrição | Link |
|---------|-----------|------|
| Hallucinated tool-call guard | Detecta klaim de ação sem tool call correspondente | [#3624](https://github.com/HKUDS/nanobot/pull/3624) |
| `toolHintMaxLength` configurável | Controla truncagem de hints de ferramentas | [#3623](https://github.com/HKUDS/nanobot/pull/3623) |
| Focus key persistido em session | Complementa #3292 | [#3622](https://github.com/HKUDS/nanobot/pull/3622) |
| Multi-role agent squad para HF Spaces | Gatekeeper, Neo/Trinity/Sentinel orchestration | [#3621](https://github.com/HKUDS/nanobot/pull/3621) |
| MCP ImageContent support | Renderização de imagens em respostas MCP | [#2438](https://github.com/HKUDS/nanobot/pull/2438) |

### Sinais de Roadmap

1. **Resiliência multi-provider** é o tema dominante — failover chain (#1163 merged) + provider-level switch (#3376 em aberto)
2. **Segurança proativa** — HallucinatedToolCallGuard (#3624) adiciona camada defensiva
3. **MCP深化** — suporte a ImageContent (#2438) amplia casos de uso com ferramentas visuais
4. **HuggingFace Spaces** — orchestration de multi-agents indica estratégia de deployment

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Dor | Frequência | Evidência |
|-----|------------|-----------|
| **Sem fallback automático** | 🔴 Alta | #3376 (13 comments), #3618 (crash de 10 dias) |
| **DuckDuckGo bloqueia sessão** | 🟡 Média | #2804 |
| **Reautenticação OAuth complicada** | 🟢 Baixa | #2665 (resolvido com logout CLI) |
| **Documentação de providers custom** | 🟢 Baixa | #3617 |

### Cenários de Uso Emergentes

- **Multi-provider empresarial**: usuário `1723229` opera com múltiplos provedores como estratégia de custo/confiabilidade
- **Voice message via WhatsApp**: demanda por понимание de áudio (endereçado em #3607)
- **Xiaomi MiMo token plan**: novo caso de uso com API OpenAI-compatible

### Satisfação

- CLI `provider logout` (#3612) gerou feedback positivo — resolução tangível de #2665
- Consolidação configurável (#3281) — control granular sobre compressão de memória

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Em Espera

| Issue | Idade | Status | Motivo da Atenção |
|-------|-------|--------|-------------------|
| [#3292](https://github.com/HKUDS/nanobot/issues/3292) Focus Tool | ~16 dias | Aberta, 7 comments | Feature request de alto valor, PR #3622 em progresso |
| [#2804](https://github.com/HKUDS/nanobot/issues/2804) DuckDuckGo hang | ~30 dias | Fechada (?) | Bug de estabilidade pode não estar 100% resolvido |
| [#2438](https://github.com/HKUDS/nanobot/pull/2438) MCP ImageContent | ~42 dias | Aberta | Extensão significativa para tooling visual |

### Recomendação de Triagem

| Prioridade | Item | Ação Sugerida |
|------------|------|---------------|
| 🔴 Alta | [#3376](https://github.com/HKUDS/nanobot/issues/3376) Failover | Avaliar se #1163 resolve parcialmente; comunicar timeline à comunidade |
| 🟡 Média | [#2804](https://github.com/HKUDS/nanobot/issues/2804) | Confirmar se hang do DuckDuckGo foi mitigado; fechar ou dar follow-up |
| 🟢 Baixa | [#3617](https://github.com/HKUDS/nanobot/issues/3617) | PR #3619 já implementa; fechar após merge |

---

## Métricas Resumidas (2026-05-05)

| Indicador | Valor |
|-----------|-------|
| PRs atualizados | 18 (7 abertos, 11 closed) |
| Issues atualizadas | 7 (4 abertas, 3 fechadas) |
| Releases | 0 |
| Issue com maior engagement | #3376 (13 comentários) |
| PR merged de maior impacto | [#3616](https://github.com/HKUDS/nanobot/pull/3616) (DeepSeek reasoner fix) |
| Tema dominante | **Resiliência multi-provider / failover** |

---

*Relatório gerado automaticamente com base em dados do GitHub. Para mais detalhes, consulte [github.com/HKUDS/nanobot](https://github.com/HKUDS/nanobot).*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-05-05

---

## 1. Panorama do Dia

O projeto Hermes Agent registrou **atividade intensa** em 05/05/2026, com 50 issues e 50 PRs atualizados nas últimas 24 horas — indicando alta mobilização da comunidade e da equipe de desenvolvimento. A versão v0.12.0, lançada em 30/04/2026, apresenta **regressões críticas** que impedem o arranque do CLI em macOS e Linux devido a um keybinding inválido com `prompt_toolkit`, o que gerou uma enxurrada de issues P0 e múltiplos PRs concorrentes tentando corrigir o mesmo problema. Paralelamente, **três issues de segurança P0** foram abertas e demandam atenção imediata: vazamento de credenciais via session capture, exposição de chaves de API em gateways Telegram/Discord, e bypass do blocklist de variáveis de ambiente via `/proc/environ`. O ritmo de merges foi expressivo (27 PRs fechados/merged), mas a qualidade de integração aparente é questionável — múltiplos PRs idênticos para o mesmo bug signalizam necessidade de melhor coordenação.

---

## 2. Lançamentos

**Nenhuma nova release registrada nas últimas 24 horas.**

- A versão mais recente continua sendo **v0.12.0** (2026-04-30), que introduziu a regressão do keybinding `c-S-c` (veja Issues #19894, #19896, #19903).
- A ausência de uma release corretiva é uma lacuna crítica, dado o número de issues P0 abertas.

> **Recomendação:** Priorizar a release de uma patch version (v0.12.1) corrigindo o keybinding e as três vulnerabilidades de segurança abertas.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados Hoje (27 total)

| # | PR | Descrição | Impacto |
|---|-----|-----------|---------|
| #19907 | `fix(cli): remove invalid ctrl-shift-c keybinding` | Remove o `@kb.add('c-S-c')` que causava crash no startup | **🔴 Crítico** — corrige P0 |
| #19905 | `fix: remove invalid Ctrl+Shift+C keybinding` | Mesma correção, abordagem ligeiramente diferente | **🔴 Crítico** — corrige P0 |
| #19296 | `docs: clarify session_search auxiliary model docs` | Atualiza docstrings desatualizadas sobre summarization | 🟢 Documentação |

### PRs Abertos com Alto Impacto

| # | PR | Descrição | Status |
|---|-----|-----------|--------|
| #19906 | `fix: remove invalid Ctrl+Shift+C keybinding` | Remove keybinding + adiciona regressão de validação | Aberto |
| #19899 | `fix(cli): wrap c-S-c keybinding in try/except` | Wrapping defensivo em vez de remoção | Aberto |
| #19895 | `fix(cli): guard c-S-c key binding with try/except` | Alternativa com guard clause | Aberto |
| #19902 | `fix(cli): remove invalid 'c-S-c' key binding crashing TUI` | Mais uma remoção | Aberto |
| #16225 | `fix(api-server): bound exposed and accepted models` | Limita exposição de modelos a catálogo configurado | Aberto |
| #19900 | `feat(cron): add Matrix room/alias/thread targeting` | Paridade de targeting com Telegram/Discord | Aberto |
| #19888 | `feat(transport): plumb reasoning_effort to NVIDIA NIM` | Suporte a reasoning effort para NVIDIA NIM | Aberto |
| #19790 | `docs: clarify fallback provider config path` | Corrige documentação conflitante sobre fallback | Aberto |

**Análise:** Há **4+ PRs concorrentes** tentando corrigir o mesmo bug do keybinding — sinal de falta de coordenação ou de bounty/assignação. Apenas 2 foram merged, ambos propondo remoção do binding. A abordagem de remoção parece ser a winning strategy, mas a multiplicidade de PRs indica risco de conflitos de merge.

---

## 4. Temas Quentes da Comunidade

### Issues com Mais Comentários (por volume de discussão)

| # | Título | Comentários | Reações | Tema Central |
|---|--------|-------------|---------|--------------|
| **#19894** | macOS: hermes crashes at startup — Invalid key c-S-c | 6 | 0 | **Regressão crítica v0.12.0** |
| **#7494** | Remote Ollama endpoint not working — only connects via localhost | 6 | 0 | **Conectividade/TNS** |
| **#14420** | Agent unable to give accurate answer based on previous context | 5 | 0 | **Memória e contexto** |
| **#19280** | Terminal resize causes status bar duplication on macOS | 4 | 0 | UI/TUI em macOS |
| **#19897** | Security: HERMES_REDACT_SECRETS off-by-default exposes API keys | 3 | 0 | **Segurança P0** |
| **#4427** | Security: Subprocess env blocklist bypassed via /proc/environ | 3 | 0 | **Segurança P0** |

**Análise dos Temas:**

1. **Bug do keybinding (#19894, #19896, #19903)** é o tema mais quente — 3 issues P0 abertas no mesmo dia sobre o mesmo problema. A comunidade está ativamente reportando, mas também há confusão (macOS vs. Linux, mesma causa).

2. **Conectividade remota com Ollama (#7494)** tem 6 comentários e é um problema recorrente — o agente não consegue conectar a instâncias remotas, apenas localhost. Afeta usuários em setups distribuídos.

3. **Perda de contexto (#14420)** — agente não consegue manter contexto entre interações, especialmente relevante para usuários não-anglofônicos (cenario demonstra conversa em chinês com "Lembre meu nome é 小明"). Indica possível bug no gerenciamento de memória/contexto.

4. **Segurança (#19897, #4427)** — apesar de P0, cada um tem apenas 3 comentários, sugerindo que a comunidade ainda não absorveu a gravidade. O issue #19897 descreve exposição ativa de API keys em chats de usuários — risco imediato.

---

## 5. Bugs e Estabilidade

### 🔴 Prioridade P0 (Críticos — afetam disponibilidade/segurança)

| # | Bug | Severidade | Plataforma | Status | Link |
|---|-----|-----------|------------|--------|------|
| #19894 | Crash no startup — key `c-S-c` inválido | P0 | macOS | OPEN | [Issue #19894](https://github.com/NousResearch/hermes-agent/issues/19894) |
| #19903 | Crash no startup — key `c-S-c` inválido | P0 | macOS | OPEN | [Issue #19903](https://github.com/NousResearch/hermes-agent/issues/19903) |
| #19896 | Crash no startup — key `c-S-c` inválido | P0 | Linux | OPEN | [Issue #19896](https://github.com/NousResearch/hermes-agent/issues/19896) |
| #19897 | HERMES_REDACT_SECRETS off-by-default expõe API keys em Telegram/Discord | P0 | Gateway | OPEN | [Issue #19897](https://github.com/NousResearch/hermes-agent/issues/19897) |
| #4427 | Blocklist de env vars pode ser bypassado via /proc/environ | P0 | All | OPEN | [Issue #4427](https://github.com/NousResearch/hermes-agent/issues/4427) |
| #19845 | Session capture vaza credenciais em plaintext para session_*.json | P0 | Agent | OPEN | [Issue #19845](https://github.com/NousResearch/hermes-agent/issues/19845) |

**Análise P0:** Três issues de segurança P0 simultâneas representam risco reputacional e de adoção. A exposição de API keys via session files (#19845) é particularmente grave para ambientes de produção.

### 🟠 Prioridade P1 (Altos)

| # | Bug | Descrição | Link |
|---|-----|-----------|------|
| #19822 | Discord: mensagens não entregues quando tasks auxiliares executam após resposta pronta | [Issue #19822](https://github.com/NousResearch/hermes-agent/issues/19822) |
| #19785 | `hermes mcp add` silently launcha chat em vez de registrar servidor MCP | [Issue #19785](https://github.com/NousResearch/hermes-agent/issues/19785) |

### 🟡 Prioridade P2 (Médios)

| # | Bug | Descrição | Link |
|---|-----|-----------|------|
| #7494 | Remote Ollama endpoint não funciona — apenas localhost | [Issue #7494](https://github.com/NousResearch/hermes-agent/issues/7494) |
| #14420 | Agente não consegue responder baseado em contexto anterior | [Issue #14420](https://github.com/NousResearch/hermes-agent/issues/14420) |
| #19280 | Terminal resize causa duplicação de status bar em macOS | [Issue #19280](https://github.com/NousResearch/hermes-agent/issues/19280) |
| #14744 | `vision_analyze` falha em Ollama Cloud por fallback para modelo não-vision | [Issue #14744](https://github.com/NousResearch/hermes-agent/issues/14744) |
| #19798 | `read_file` retorna conteúdo numerado que corrompe arquivos ao reescrever | [Issue #19798](https://github.com/NousResearch/hermes-agent/issues/19798) |
| #19861 | `claw migrate` produz `api_mode: chat_completions` para byoky-anthropic | [Issue #19861](https://github.com/NousResearch/hermes-agent/issues/19861) |
| #19543 | Web UI chat não auto-refresca novas mensagens | [Issue #19543](https://github.com NousResearch/hermes-agent/issues/19543) |
| #19821 | QQ Bot WebSocket morre silenciosamente após 18+ horas | [Issue #19821](https://github.com/NousResearch/hermes-agent/issues/19821) |

### 🟢 Prioridade P3 (Menores/Resolvidos)

| # | Bug | Status | Link |
|---|-----|--------|------|
| #19824 | Reduzir ruído de logs `aclose()` async-generator | CLOSED | [Issue #19824](https://github.com/NousResearch/hermes-agent/issues/19824) |
| #19823 | Reduzir ruído de logs `Task was destroyed but it is pending` | CLOSED | [Issue #19823](https://github.com/NousResearch/hermes-agent/issues/19823) |
| #16115 | `doctor` reporta falta de GITHUB_TOKEN mesmo com `gh auth` ativo | CLOSED | [Issue #16115](https://github.com/NousResearch/hermes-agent/issues/16115) |
| #15701 | Discord: anexos mistos podem ser mal classificados como texto | CLOSED | [Issue #15715](https://github.com/NousResearch/hermes-agent/issues/15701) |
| #15989 | TUI falha quando cwd contém package `utils/` | CLOSED | [Issue #15989](https://github.com/NousResearch/hermes-agent/issues/15989) |
| #16068 | Auto-continue configurável ao atingir max tool-call iterations | CLOSED | [Issue #16068](https://github.com/NousResearch/hermes-agent/issues/16068) |

**Análise de Estabilidade:** A v0.12.0 é a release mais problemática desde o histórico recente — 6 bugs P0, sendo 3 de segurança. O volume de bugs P2 também é elevado (8 issues), sugerindo que a release não passou por teste de regressão adequado. Por outro lado, 5 issues P3 foram fechadas, indicando que a equipe está ativa em dívida técnica menor.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Novas Abertas

| # | Feature | P | Descrição | Link |
|---|---------|---|-----------|------|
| #19816 | Session state não escrito em state.db até fim da sessão | P3 | Agencias de longo prazo invisíveis para tooling externo | [Issue #19816](https://github.com/NousResearch/hermes-agent/issues/19816) |
| #19818 | Continuação de sessão após max_turns não linkada ao thread original | P3 | Continuações ficam órfãs — sem parent session ID | [Issue #19818](https://github.com/NousResearch/hermes-agent/issues/19818) |
| #19809 | Per-channel profile routing para Discord (single bot) | P3 | Reduz N bots para N perfis em 1 bot | [Issue #19809](https://github.com/NousResearch/hermes-agent/issues/19809) |
| #19852 | Split navigation para new vs returning users | P3 | UX do landing page | [Issue #18080](https://github.com/NousResearch/hermes-agent/issues/19852) |
| #18080 | Temas melhorados para Dashboard | P3 | Cores e fontes mais legíveis | [Issue #18080](https://github.com/NousResearch/hermes-agent/issues/18080) |

### Features em PR

| # | Feature | Descrição | Link |
|---|---------|-----------|------|
| #19900 | Matrix cron room/alias/thread targeting | Paridade com Telegram/Discord | [PR #19900](https://github.com/NousResearch/hermes-agent/pull/19900) |
| #19888 | Plumb `reasoning_effort` para NVIDIA NIM | Suporte a modelos reasoning na NVIDIA NIM | [PR #19888](https://github.com/NousResearch/hermes-agent/pull/19888) |
| #18944 | TinyFish web search and extract backend | Novo backend de busca web | [PR #18944](https://github.com/NousResearch/hermes-agent/pull/18944) |
| #9846 | Termux install path e bug fixes | Suporte nativo a Termux | [PR #9846](https://github.com/NousResearch/hermes-agent/pull/9846) |
| #10565 | Native Windows PowerShell install | Instalação nativa Windows sem WSL | [PR #10565](https://github.com/NousResearch/hermes-agent/pull/10565) |

**Sinais de Roadmap:**

1. **Observability de agents de longa duração** (#19816, #19818) — indica adoção para cargas de trabalho agentic persistent, não apenas chat interativo.
2. **Multi-tenant Discord** (#19809) — comunidade quer usar um bot para múltiplos perfis/personalidades.
3. **Expansão de plataformas** — Matrix, Windows nativo, Termux sinalizam estratégia multi-plataforma.
4. **NVIDIA NIM como provedor de primeira classe** — reasoning effort é feature requisitada.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

**🔴 Crash total do produto (v0.12.0):**
Usuários macOS e Linux reportam que Hermes **nem chega ao prompt** — crash imediato após o banner de boas-vindas. Isso é uma experiência de first-run catastrófica. "Just started with today when I update" — ou seja, funcionava antes. [Issues #19894, #19896]

**🟠 Setup distribuído quebr

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>


# Relatório do Projeto PicoClaw — 2026-05-05

---

## 1. Panorama do Dia

O projeto PicoClaw apresenta **alta atividade** em 05 de maio de 2026, com 30 issues e 64 PRs atualizados nas últimas 24 horas. A taxa de resolução de issues foi significativa (16 fechadas vs. 14 abertas), e 43 PRs foram merged/fechados, indicando um ciclo de desenvolvimento saudável. **Não houve releases formais** no período, sugerindo que as mudanças estão em consolidação para um próximo versionamento. A comunidade demonstra engajamento ativo em funcionalidades de áudio (TTS/ASR), ferramentas de busca web alternativas e gerenciamento de sessões. Notavelmente, dois bugs críticos de estabilidade (autenticação e segurança) foram reportados no mesmo dia, demandando atenção imediata da equipe.

---

## 2. Lançamentos

### Nenhuma release oficial nas últimas 24h

O projeto não publicou novas versões entre 2026-05-04 e 2026-05-05. Isso representa uma **oportunidade de consolidação** antes de um próximo release, dado o volume de PRs fechados recentemente.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados Relevantes (Últimas 24h)

| PR | Título | Impacto | Link |
|----|--------|---------|------|
| **#2603** | FreeRide tool — rotação automática de modelos OpenRouter gratuitos | Adiciona fallback inteligente para modelos livres, melhorando resiliência | [#2603](https://github.com/sipeed/picoclaw/pull/2603) |
| **#2336** | Fix thinking level resolution from model refs | Corrige bug onde configuração de thinking era ignorada em modelos referenciados | [#2336](https://github.com/sipeed/picoclaw/pull/2336) |
| **#2333** | Structured context compression (6-phase algorithm) | Implementa compressão de contexto inteligente com proteção de budget de tokens | [#2333](https://github.com/sipeed/picoclaw/pull/2333) |
| **#2332** | SkillManager para criação dinâmica de skills | Adiciona CRUD completo para gerenciamento de skills pelo agente | [#2332](https://github.com/sipeed/picoclaw/pull/2332) |
| **#2670** | Pretty print e disable_escape_html para tool feedback | Corrige display de caracteres especiais (`&&` vs `\u0026`) em ferramentas | [#2670](https://github.com/sipeed/picoclaw/pull/2670) |
| **#2329** | WhatsApp GroupTrigger support | Adiciona controle de menção em grupos WhatsApp, alinhando com Telegram | [#2329](https://github.com/sipeed/picoclaw/pull/2329) |
| **#2284** | WhatsApp proxy support (native + bridge) | Habilita funcionamento em redes com restrições de acesso | [#2284](https://github.com/sipeed/picoclaw/pull/2284) |
| **#2731** | AWS SDK dependency bump | Atualização de segurança/mantutenção | [#2731](https://github.com/sipeed/picoclaw/pull/2731) |

**Destaque:** O PR #2603 (FreeRide) representa um avanço significativo em autonomia, permitindo que o agente navegue automaticamente entre provedores OpenRouter gratuitos quando um limite é atingido.

---

## 4. Temas Quentes da Comunidade

### Issues/PRs com Maior Engajamento

#### 🔥 Issue #1648 — TTS/ASR Support (CLOSED, 24 comentários)
A adição de suporte a Text-to-Speech e Automatic Speech Recognition foi um dos temas mais discutidos. Um PR relacionado (#1642) já implementa funcionalidade similar, mas ainda não foi integrado ao gateway.

> *"Add flexible voice interaction capabilities to PicoClaw"* — lxowalle

[Issue #1648](https://github.com/sipeed/picoclaw/issues/1648)

#### 🔥 Issue #28 — LM Studio Easy Connect (OPEN, 17 comentários)
Solicitação recorrente para conexão simplificada com LM Studio, permitindo uso de modelos locais com interface amigável. Muitos usuários buscam alternativas para rodar LLMs localmente.

> *"i'm posting this requesting someone who has better skills than my self to make an easy way to connect too LM Studio"* — Franzferdinan51

[Issue #28](https://github.com/sipeed/picoclaw/issues/28)

#### 🔥 Issue #2578 — Authorization header missing no openai_compat (CLOSED, 13 comentários)
Bug crítico que causava drop silencioso de credenciais, afetando todos os provedores baseados em HTTP. Já resolvido.

[Issue #2578](https://github.com/sipeed/picoclaw/issues/2578)

---

## 5. Bugs e Estabilidade

### 🛑 Bugs Críticos Reportados em 2026-05-05

| Severidade | Issue | Descrição | Impacto | Link |
|------------|-------|-----------|---------|------|
| **🔴 CRÍTICO** | #2769 | Autenticação falha com chaves API válidas (401 em Groq, OpenRouter, Nvidia) | Bloqueia acesso a múltiplos provedores em stable e nightly | [#2769](https://github.com/sipeed/picoclaw/issues/2769) |
| **🔴 CRÍTICO** | #2688 | **Segurança:** `find /` permite enumeração de caminhos fora do workspace sandbox | Exposição de arquivos sensíveis do sistema | [#2688](https://github.com/sipeed/picoclaw/issues/2688) |
| **🟡 ALTA** | #2742 | Gateway inicia sem canais na v0.2.8 | Funcionalidade principal inoperante | [#2742](https://github.com/sipeed/picoclaw/issues/2742) |
| **🟡 ALTA** | #2690 | Gateway inicia sem canais na v0.2.7 (também QQ channel) | Idem para versão anterior | [#2690](https://github.com/sipeed/picoclaw/issues/2690) |
| **🟡 ALTA** | #2590 | Serviço não inicia no Android app (libpicoclaw.so error) | Mobilidade comprometida | [#2590](https://github.com/sipeed/picoclaw/issues/2590) |
| **🟡 ALTA** | #2753 | Launcher não existe ao compilar do source | Experiência de desenvolvimento impactada | [#2753](https://github.com/sipeed/picoclaw/issues/2753) |
| **🟢 MÉDIA** | #1757 | Channel error ao usar cron tasks hourly | Automação de tarefas afetada | [#1757](https://github.com/sipeed/picoclaw/issues/1757) |
| **🟢 MÉDIA** | #2046 | PicoClaw não chama tool com LongCat API | Provedor específico inoperante | [#2046](https://github.com/sipeed/picoclaw/issues/2046) |

### Análise

Dois bugs críticos simultâneos exigem atenção imediata:
1. **Bug de autenticação (#2769):** Afeta múltiplos provedores主流, sugerindo regressão em manipulação de headers
2. **Vulnerabilidade de segurança (#2688):** Bypass do sandbox por `find /` é problema grave que requer patch urgente

A família de bugs "Gateway starts with no channels" (#2742, #2690) nas versões 0.2.7 e 0.2.8 indica possível regressão no parsing de configuração.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Funcionalidades Solicitadas

| Prioridade | Issue/PR | Feature | Sinais de Mercado |
|------------|----------|---------|-------------------|
| ⭐⭐⭐ | #28 | LM Studio Easy Connect | Demanda por IA local em alta |
| ⭐⭐⭐ | #1648 | TTS/ASR Support | Interface por voz é tendência |
| ⭐⭐ | #618 | Self-upgrade support | Maturidade operacional esperada |
| ⭐⭐ | #2232 | SerpAPI integração | Busca web gratuita cada vez mais restrita |
| ⭐⭐ | #2582 | Web search API fallback chain | Resiliência ante rate limits |
| ⭐⭐ | #2491 (PR) | Session management commands (/status, /compact, /new) | UX para sessões longas |
| ⭐ | #2691 (PR) | get_current_time tool | Utilidade básica requisitada |
| ⭐ | #2261 | Zalo Chat channel | Mercado vietnamita |

### PRs Abertos com Potencial de Merge

| PR | Feature | Status | Link |
|----|---------|--------|------|
| **#2763** | Gemini web search provider | OPEN | [#2763](https://github.com/sipeed/picoclaw/pull/2763) |
| **#2647** | DuckDuckGo default + YAML config para web_search | OPEN | [#2647](https://github.com/sipeed/picoclaw/pull/2647) |
| **#2679** | ChatGPT OAuth fix | OPEN | [#2679](https://github.com/sipeed/picoclaw/pull/2679) |
| **#2581** | Recover Codex output from streamed events | OPEN | [#2581](https://github.com/sipeed/picoclaw/pull/2581) |

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais Identificadas

| Categoria | Descrição | Exemplos |
|-----------|-----------|----------|
| **🔧 Estabilidade de Provider** | Usuários enfrentam falhas imprevisíveis ao trocar entre provedores ou modelos | #2769, #2674, #2718 |
| **🛡️ Segurança e Sandbox** | Preocupação com isolamento inadequado de ferramentas | #2688 |
| **📱 Mobilidade** | Android app com problemas de inicialização | #2590 |
| **🌐 Localidade** | Desejo de rodar modelos localmente (LM Studio) | #28 |
| **⏱️ Feedback Visual** | Ausência de indicação de progresso em execuções longas | #571 |
| **📦 Distribuição** | Falta de mecanismo de auto-update | #618 |

### Cenários de Uso Emergentes

1. **Agentes de IA locais:** Usuários buscam alternatives para APIs cloud, especialmente para privacidade e custo
2. **Integração corporativa:** Demanda por OTel (#1731) e autenticação (#1067) indica uso em ambiente empresarial
3. **Automação multi-canal:** Issues relacionadas a cron tasks (#1757) e múltiplos canais mostram uso em workflows complexos

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Em Espera (Stale)

| Issue | Título | Tempo desde última atualização | Prioridade | Link |
|-------|--------|--------------------------------|------------|------|
| #2688 | **Segurança:** find / enumeration | ~1 dia | 🔴 CRÍTICA | [#2688](https://github.com/sipeed/picoclaw/issues/2688) |
| #2769 | Auth fails com API keys válidas | ~1 dia | 🔴 CRÍTICA | [#2769](https://github.com/sipeed/picoclaw/issues/2769) |
| #28 | LM Studio Easy Connect | ~3 meses | ⭐⭐⭐ | [#28](https://github.com/sipeed/picoclaw/issues/28) |
| #1757 | Channel error com cron | ~2 meses | 🟡 | [#1757](https://github.com/sipeed/picoclaw/issues/1757) |
| #2046 | Tool call com LongCat API | ~1.5 meses | 🟡 | [#2046](https://github.com/sipeed/picoclaw/issues/2046) |
| #2582 | Web search fallback chain | ~17 dias | ⭐⭐ | [#2582](https://github.com/sipeed/picoclaw/issues/2582) |
| #2675 | Raspberry Pi / Pi Zero 2W support | ~9 dias | ⭐ | [#2675](https://github.com/sipeed/picoclaw/issues/2675) |

---

## Métricas de Saúde do Projeto (2026-05-05)

| Indicador | Valor | Status |
|-----------|-------|--------|
| Issues ativas (24h) | 14 | 🟢 Normal |
| Issues fechadas (24h) | 16 | 🟢 Bom (taxa 53%) |
| PRs abertos | 21 | 🟢 Normal |
| PRs merged/fechados | 43 | 🟢 Muito ativo |
| Novos releases | 0 | 🟡 Em consolidação |
| Bugs críticos abertos | 2 | 🔴 Requer ação |
| Issues stale | 27/30 (90%) | 🟡 Necessita triagem |
| Segurança披露s | 1 | 🔴 Urgente |

---

## Recomendações para a Equipe

1. **Imediato:** Investigar e corrigir os dois bugs críticos (#2769, #2688)
2. **Curto prazo:** Resolver regressão de inicialização de canais nas versões 0.2.7/0.2.8
3. **Médio prazo:** Priorizar PR #2763 (Gemini search) e #2647 (DuckDuckGo default) para próximo release
4. **Longo prazo:** Roadmap de TTS/ASR (#1648) e self-upgrade (#618) demonstram demanda por maturidade operacional

---

*Relatório gerado automaticamente com base em dados GitHub de 2026-05-05 00:00–23:59 UTC.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>


# Relatório do Projeto IronClaw — 2026-05-05

## 1. Panorama do Dia

O projeto IronClaw apresenta **alta atividade** nesta terça-feira, com 10 PRs atualizados e 2 issues novas nas últimas 24h. O esforço está concentrando no **lançamento progressivo do "Reborn"** — a nova arquitetura do sistema — com múltiplos PRs de grande porte (#3230, #3171, #3212) tramitando simultaneamente. A única PR mergeada foi a #2390 (fix de visão OpenAI), sinalizando que a equipe está em modo de integração pesada. Não há releases novas, mantendo-se o padrão de entrega por trás de feature gates.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24h.**

O projeto continua em fase de desenvolvimento intensivo, com changes landing diretamente em `main` (ver PR #3230) antes de qualquer cutover público. A estratégia de "default-off/internal" permite acumulação de funcionalidades para um release coordenado.

---

## 3. Progresso do Projeto

### PRs Fechadas/Mergiadas

| # | Título | Escopo | Impacto |
|---|--------|--------|---------|
| [#2390](https://github.com/nearai/ironclaw/pull/2390) | Fix: default image detail to 'auto' for OpenAI-compatible vision | agent, workspace, ci, docs | **Corrige crash** em provedores OpenAI-compatíveis; resolve #2378 |

### PRs Abertas de Alto Impacto

| # | Título | Escopo | Risk | Status |
|---|--------|--------|------|--------|
| [#3230](https://github.com/nearai/ironclaw/pull/3230) | feat(reborn): land Reborn substrate into main | reborn, ci | medium | Integração em andamento |
| [#3171](https://github.com/nearai/ironclaw/pull/3171) | Add Reborn event store backends | reborn, docs, dependencies | medium | Backends PostgreSQL/libSQL/JSONL |
| [#3212](https://github.com/nearai/ironclaw/pull/3212) | Add Reborn event projection service | reborn, docs, dependencies | medium | Projeções de eventos para RunStatusProjection |
| [#3157](https://github.com/nearai/ironclaw/pull/3157) | fix(engine): inline gate await for Tier 0+1 | engine, ci | low | Corrige RuntimeError em CodeAct scripts |
| [#3235](https://github.com/nearai/ironclaw/pull/3235) | test(e2e): unblock Live Canary auth lanes | ci | medium | Desbloqueia testes de OAuth quebrados desde 2026-05-01 |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

**[#3036](https://github.com/nearai/ironclaw/issues/3036)** — `[EPIC] Configuration-as-Code for IronClaw Reborn` | 👍 1 | 💬 3

> **Demanda:** Operadores precisam de configuração declarativa via "tenant blueprints" e "use-case harnesses". Hoje há mistura de `.env`, workspace docs, settings JSON, extensões e flags — sem schema, sem diff, sem audit trail.
>
> **Análise:** Esta é uma demanda de **DX (Developer Experience)**成熟. O EPIC busca unificar a experiência de configuração em um sistema coeso, o que indica preparação para adoção mais ampla.

**[#3090](https://github.com/nearai/ironclaw/issues/3090)** — `[Reborn] Add ToolSurfaceService and CapabilityCatalog` | 👍 0 | 💬 3

> **Demanda:** Criar serviço que computa a "superfície" de ferramentas/capacidades visível ao modelo, mantendo controle de autoridade no host.
>
> **Análise:** Refinamento arquitetural do Reborn para separar *visibilidade* de *autoridade* — princípio de segurança fundamental.

### PRs com Maior Complexidade

| # | Título | Size | Escopo |
|---|--------|------|--------|
| [#3240](https://github.com/nearai/ironclaw/pull/3240) | feat(wasm): per-request credential signing (HMAC, EIP-712, NEP-413) | XL | tool/wasm, secrets, sandbox, dependencies |
| [#1666](https://github.com/nearai/ironclaw/pull/1666) | feat: wechat channel | XL | agent, channel/wasm, extensions, llm |
| [#1549](https://github.com/nearai/ironclaw/pull/1549) | feat: Slack Socket Mode for NAT-friendly connectivity | XL | agent, channel/wasm, extensions |

---

## 5. Bugs e Estabilidade

### Issue de Bug Reportada

| # | Título | Severidade | Status | Notas |
|---|--------|------------|--------|-------|
| [#2378](https://github.com/nearai/ironclaw/issues/2378) | Image vision fails with OpenAI-compatible providers | **Crítica** (já resolvida) | Fix merged em #2390 | `detail: None` causava erro em provedores compatíveis |

### Problemas de CI/Infra Identificados

| # | Título | Severidade | Status | Notas |
|---|--------|------------|--------|-------|
| [#3235](https://github.com/nearai/ironclaw/pull/3235) | Live Canary auth lanes falhando há 3+ dias | **Alta** | Fix em revisão | Tests em `test_v2_auth_oauth_matrix.py` quebrados desde engine-v2 callable-only contract change |
| [#3157](https://github.com/nearai/ironclaw/pull/3157) | CodeAct scripts falham com `RuntimeError: execution paused by gate` | **Média** | Fix em revisão | Path async convertia `GatePaused` em erro ao invés de pausar |

**Recomendação:** Priorizar merge do #3235 para restaurar confiabilidade do pipeline de Canary.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

1. **[#3240](https://github.com/nearai/ironclaw/pull/3240) — Credential Signing para WASM**
   - Adiciona `HmacSignedHeader`, `Eip712SignedHeader`, `Nep413SignedHeader`
   - Declaração de schemas via `capabilities.json`
   - **Sinais:** Demanda por integração com Web3/NEP standards

2. **[#3036](https://github.com/nearai/ironclaw/issues/3036) — Configuration-as-Code (EPIC)**
   - Blueprints para tenants + use-case harnesses
   - **Sinais:** Preparação para multi-tenant e deployment enterprise

3. **[#1666](https://github.com/nearai/ironclaw/pull/1666) — WeChat Channel**
   - QR login, long-poll, outbound messages, typing indicators
   - **Sinais:** Expansão para mercados asiáticos

4. **[#1549](https://github.com/nearai/ironclaw/pull/1549) — Slack Socket Mode**
   - WebSocket bridge (sem tunnel público)
   - **Sinais:** Facilitação de deployment em redes restritivas

5. **[#3239](https://github.com/nearai/ironclaw/pull/3239) — SECURITY.md**
   - Documentação de política de segurança
   - **Sinais:** Maturidade em governance open source

### Arquitetura Reborn (Emerging Theme)

O cluster de PRs (#3171, #3212, #3230, #3090, #3036) indica que **Reborn** é o foco principal do roadmap:
- Event store com backends duráveis
- Event projection service
- ToolSurfaceService + CapabilityCatalog
- Configuration-as-Code

---

## 7. Resumo de Feedback dos Usuários

**Dores Identificadas:**

| Problema | Fonte | Severidade |
|----------|-------|------------|
| Configuração fragmentada (.env + docs + JSON + flags) | #3036 | Alta — fricção de onboarding |
| Visão OpenAI quebrada em provedores compatíveis | #2378/#2390 | Alta — feature-breaking |
| CodeAct scripts travam em gates de approval | #3157 | Média — UX ruim |
| Autenticação OAuth falhando no canary | #3235 | Alta — desconfiança no CI |

**Cenários de Uso Observados:**
- Agentes multicanal (WeChat, Slack em desenvolvimento)
- Integração com APIs Web3 (assinaturas EIP-712/NEP-413)
- CodeAct scripting para automação
- Deployment enterprise multi-tenant (via blueprints)

**Satisfação Geral:** Projeto em **crescimento ativo**, com foco em stabilização da arquitetura Reborn antes de release público. A estratégia "default-off" sugere maturização cuidadosa.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta > 5 dias

| # | Título | Criado | Atualizado | Prioridade |
|---|--------|--------|------------|------------|
| [#1549](https://github.com/nearai/ironclaw/pull/1549) | Slack Socket Mode | 2026-03-21 | 2026-05-03 | Alta — 45 dias em aberto |
| [#1666](https://github.com/nearai/ironclaw/pull/1666) | WeChat Channel | 2026-03-26 | 2026-05-04 | Alta — 40 dias em aberto |

### PRs Críticas sem Merge

| # | Título | Age | Bloqueio |
|---|--------|-----|----------|
| [#3235](https://github.com/nearai/ironclaw/pull/3235) | Unblock Live Canary auth | 2 dias | CI quebrado |
| [#3157](https://github.com/nearai/ironclaw/pull/3157) | Fix gate await em CodeAct | 4 dias | UX quebrado |

---

## Indicadores de Saúde do Projeto

| Métrica | Valor | Status |
|---------|-------|--------|
| PRs abertas | 9 | ⚠️ Volume alto (carga de review) |
| Issues abertas | 2 | ✅ Normal |
| Releases (24h) | 0 | ⚠️ Ciclos longos |
| Bugs críticos abertos | 0 | ✅ Zero bugs ativos |
| PRs antigas (>14 dias) | 2 | ⚠️ #1549, #1666 |

---

**Próximos Hitos Prováveis:**
1. Merge de #3235 para restaurar CI canary
2. Land do Reborn substrate via #3230
3. Cutover público do Reborn (futuro release)

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do Projeto CoPaw — 2026-05-05

---

## 1. Panorama do Dia

O projeto CoPaw (QwenPaw) demonstra **alta atividade comunitária** em 05/05/2026. Foram registradas **14 issues abertas** e **21 PRs** atualizados nas últimas 24h, com destaque para **5 PRs de first-time-contributors** em revisão. Não houve lançamentos, indicando que a equipe está em ciclo de consolidação. A comunidade apresenta demandas concentradas em três eixos: **estabilidade de sessão/streaming**, **segurança do HTTP gateway**, e **experiência de onboarding**. O volume de PRs fechados (15) sugere um pipeline saudável de merge, embora algumas issues aguardem triagem há mais de uma semana.

---

## 2. Lançamentos

**Nenhum release detectado nas últimas 24h.**

O projeto não publicou novas versões. Isso pode indicar:
- Foco em estabilidade antes de release
- Ciclo de release mais longo (provavelmente mensal ou por milestone)

> **Recomendação:** Consultar milestones abertas em [QwenPaw milestones](https://github.com/agentscope-ai/QwenPaw/milestones) para antecipar próxima versão.

---

## 3. Progresso do Projeto

### PRs Merge/Closed Recentemente

| # | Título | Escopo | Impacto |
|---|--------|--------|---------|
| [#1508](https://github.com/agentscope-ai/QwenPaw/pull/1508) | fix(provider): add full dependencies to Docker image | Docker | Adiciona extras "full" e corrige 7 packages não declarados |
| [#763](https://github.com/agentscope-ai/QwenPaw/pull/763) | fix(imessage): surface channel errors to Console UI | iMessage | Exibe erros de canal silenciosos no UI |
| [#756](https://github.com/agentscope-ai/QwenPaw/pull/756) | fix(providers): use max_completion_tokens for OpenAI | Azure OpenAI | Corrige connection test para GPT-5/o-series |
| [#4028](https://github.com/agentscope-ai/QwenPaw/pull/4028) | fix(chat,shell): resolve stop mismatch and enforce workspace venv | Stability | Corrige 2 bugs reportados em #4027 |
| [#4026](https://github.com/agentscope-ai/QwenPaw/pull/4026) | feat(security): prevent write_file overwriting non-empty files | Security | Guardian contra sobrescrita acidental |
| [#2374](https://github.com/agentscope-ai/QwenPaw/pull/2374) | fix(chat): recover reconnect stream and preserve history order | Chat UI | Melhora resiliência de reconexão |

### PRs em Review

| # | Título | Escopo | Status |
|---|--------|--------|--------|
| [#3729](https://github.com/agentscope-ai/QwenPaw/pull/3729) | fix(desktop): use Win32 API for taskbar icon | Windows | WIP |
| [#3829](https://github.com/agentscope-ai/QwenPaw/pull/3829) | feat(chat): generate session titles asynchronously via LLM | UX | Under Review |
| [#4032](https://github.com/agentscope-ai/QwenPaw/pull/4032) | feat(doctor): add Windows environment diagnostics | CLI | First-time contributor |

**Avanço principal:** Foco em hardening de estabilidade (session interruption, venv detection, reconnect streams) e segurança básica (write_file guardian, channel errors).

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (por comentários/reação)

| # | Tipo | Título | Comentários | Tema Central |
|---|------|--------|-------------|--------------|
| [#3988](https://github.com/agentscope-ai/QwenPaw/issues/3988) | Bug | conda-pack <=0.7.1 conflicts with pip install | 3 | Build/packaging |
| [#4023](https://github.com/agentscope-ai/QwenPaw/issues/4023) | Question | 输入框卡顿的非常厉害！ | 3 | Performance UI |
| [#4024](https://github.com/agentscope-ai/QwenPaw/issues/4024) | Enhancement | 有计划借鉴下Hermes的机制进行升级qwenpaw么 | 3 | Arquitetura/LTM |
| [#4027](https://github.com/agentscope-ai/QwenPaw/issues/4027) | Bug | 会话中断偶发失效 + skills Python解释器 | 2 | Stability |
| [#4020](https://github.com/agentscope-ai/QwenPaw/issues/4020) | Enhancement | 对 MEMORY/AGENTS/SOUL 文件强制只读 | 2 | Security/Robustness |

### Análise de Demandas

1. **Build/Packaging (#3988):** Conflito entre conda-pack e pip-upgrade durante packaging Windows. Impacta distribuição.
2. **Performance UI (#4023):** Input box lag intenso — possível regressão de streaming ou problema de event loop.
3. **Arquitetura (#4024):** Comunidade requestionando estratégia de upgrade/memória de longo prazo inspirado em Hermes.
4. **Estabilidade (#4027):** Já имеет PR #4028 associado — alta prioridade.

> **Sinal forte:** Issue #4037 (HTTP gateway sem auth) possui apenas 1 comentário mas severidade **crítica de segurança** — merece atenção imediata.

---

## 5. Bugs e Estabilidade

### Bugs Reportados (por severidade estimada)

| Severidade | # | Título | Descrição |
|------------|---|--------|-----------|
| **Crítica** | [#4037](https://github.com/agentscope-ai/QwenPaw/issues/4037) | HTTP gateway unauthenticated by default | Expõe `execute_shell_command` sem auth, binding em non-loopback |
| **Alta** | [#4034](https://github.com/agentscope-ai/QwenPaw/issues/4034) | Streaming models (MiMo/DeepSeek) cause ReAct loop repeat | Duplicação de respostas e tool calls repetidos |
| **Alta** | [#4033](https://github.com/agentscope-ai/QwenPaw/issues/4033) | MCP tool timeout hardcoded 30s | Timeout fixo ignora `HttpStatefulClient.timeout` configurável |
| **Média** | [#4027](https://github.com/agentscope-ai/QwenPaw/issues/4027) | Session interruption failure + venv mismatch | 2 bugs de estabilidade — já com PR #4028 |
| **Média** | [#4025](https://github.com/agentscope-ai/QwenPaw/issues/4025) | Debian 12 vs 13 GLIBC on ARM64 | llama.cpp falha em ARM64 por GLIBC 2.36 vs 2.37 |
| **Média** | [#3988](https://github.com/agentscope-ai/QwenPaw/issues/3988) | conda-pack + pip conflict | Build Windows falha com pip-upgrade durante conda-pack |

### Regressões Potenciais Identificadas

- **Streaming consistency:** Modelos MiMo/DeepSeek apresentam comportamento diferente de Qwen3.6-Plus — investigar delta de streaming handler.
- **UI Lag (#4023):** Question isolado pode indicar padrão emergente.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features (Issues)

| # | Título | Complexidade | Relevância |
|---|--------|--------------|------------|
| [#4030](https://github.com/agentscope-ai/QwenPaw/issues/4030) | Add Vertex AI Gemini provider | Alta | Integração enterprise |
| [#4029](https://github.com/agentscope-ai/QwenPaw/issues/4029) | Add one-shot cron jobs via `--at <iso-datetime>` | Média | Usabilidade CLI |
| [#4031](https://github.com/agentscope-ai/QwenPaw/issues/4031) | Multi-agent context loss + polling blockage | Alta | Arquitetura multi-agent |
| [#4020](https://github.com/agentscope-ai/QwenPaw/issues/4020) | Read-only protection for MEMORY/AGENTS/SOUL | Média | Safety |
| [#4036](https://github.com/agentscope-ai/QwenPaw/issues/4036) | Adding model requires too many steps | Baixa | UX onboarding |
| [#4022](https://github.com/agentscope-ai/QwenPaw/issues/4022) | Save workspace config to subfolder | Baixa | Organização |

### Sinais de Roadmap

1. **Enterprise integration (#4030):** Vertex AI = demanda corporativa (IAM, billing, regional routing).
2. **Multi-agent architecture (#4031):** Problema estrutural de context/session — pode demandar redesign de session model.
3. **Security hardening (#4020, #4037):** Padrão de "tool guard" emergente (veja PR #4026) — provável adoção de framework de guardians.
4. **UX simplification (#4036, #4029):** Comunidade sinaliza fricção no onboarding — oportunidade de redesign.

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais Reportadas

| Dor | Frequência | Impacto |
|-----|------------|---------|
| Input box lag/freeze | 1 reporte, mas detalhado | UX crítico |
| Model setup friction | 1 reporte detalhado | Onboarding |
| Session interruption instability | 1 reporte com 2 issues | Produtividade |
| ARM64 compatibility | 1 reporte | Deploy Linux |
| Docker image missing deps | Histórico (PR #1508) | Dev experience |

### Cenários de Uso Observados

- **Desktop Windows:** Taskbar icon issue (PR #3729 em WIP)
- **Enterprise Docker:** Missing full dependencies resolvido
- **Multi-provider:** Vertex AI request (#4030) indica expansão para Google Cloud
- **Multi-agent:** Contexto entre agentes ainda problemático (#4031)

### Satisfação/Insatisfação

**Positivo:**
- Comunidade ativa em PRs (5 first-time-contributors em 24h)
- Resposta rápida da equipe em issues de segurança

**Negativo:**
- UI lag (#4023) sem resposta官方 ainda
- Modelo setup muito complexo (#4036)
- Multi-agent collaboration instável (#4031)

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Sem PR Associado (>3 dias)

| # | Título | Idade | Prioridade | Motivo |
|---|--------|-------|------------|--------|
| [#4037](https://github.com/agentscope-ai/QwenPaw/issues/4037) | HTTP gateway unauthenticated | 1 dia | **Crítica** | Security disclosure |
| [#4023](https://github.com/agentscope-ai/QwenPaw/issues/4023) | Input box lag | 1 dia | **Alta** | UX regression |
| [#4034](https://github.com/agentscope-ai/QwenPaw/issues/4034) | Streaming repeat with MiMo/DeepSeek | 1 dia | **Alta** | Model compatibility |
| [#4033](https://github.com/agentscope-ai/QwenPaw/issues/4033) | MCP timeout hardcoded | 1 dia | **Média** | Config inflexibility |
| [#4030](https://github.com/agentscope-ai/QwenPaw/issues/4030) | Vertex AI provider | 1 dia | **Média** | Enterprise request |
| [#4025](https://github.com/agentscope-ai/QwenPaw/issues/4025) | Debian 12 ARM64 GLIBC | 1 dia | **Média** | Platform support |
| [#3988](https://github.com/agentscope-ai/QwenPaw/issues/3988) | conda-pack conflict | 5 dias | **Média** | Build tooling |

### PRs Envelope (Long-Polling ou Abandoned Risk)

| # | Título | Status | Risco |
|---|--------|--------|-------|
| [#3729](https://github.com/agentscope-ai/QwenPaw/pull/3729) | Win32 taskbar icon | WIP | Abandono se não reviewado |
| [#2374](https://github.com/agentscope-ai/QwenPaw/pull/2374) | reconnect stream recovery | Under Review | Estagnado |

### Recomendação de Triagem Imediata

1. **[#4037](https://github.com/agentscope-ai/QwenPaw/issues/4037)** — Security: Responder com timeline de fix
2. **[#4023](https://github.com/agentscope-ai/QwenPaw/issues/4023)** — Reproduzir e确认 se é regressão
3. **[#4034](https://github.com/agentscope-ai/QwenPaw/issues/4034)** — Investigar streaming handler delta

---

## Métricas Resumo (2026-05-05)

| Métrica | Valor | Tendência |
|---------|-------|-----------|
| Issues abertas/ativas | 14 | Neutra |
| PRs abertos | 6 | Neutra |
| PRs fechados/merged | 15 | **Positiva** |
| First-time contributors | 5 | **Alta** |
| Releases | 0 | N/A |
| Security disclosures | 1 | **Atenção** |
| Bugs críticos | 2 | **Atenção** |

---

*Relatório gerado automaticamente com base em dados GitHub de QwenPaw. Próxima atualização: 2026-05-06.*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório de Projeto ZeroClaw — 2026-05-05

## 1. Panorama do dia

O projeto ZeroClaw mantém alto volume de atividade com 50 issues e 50 PRs atualizados nas últimas 24h, indicando uma comunidade ativa e desenvolvimento intenso. Não houve novos lançamentos, mas o foco permanece na estabilização da próxima grande versão (v0.8.0), evidenciada pelo PR #6266 de migração de schema. A base de código concentra esforços em quatro áreas críticas: segurança (RBAC multi-tenant, HMAC tool receipts), provedores de modelos (DeepSeek-V4, Bedrock, temperature fields), canais (Matrix, WhatsApp, Nextcloud Talk) e ferramentas (Jira, Skills). O estado geral sugere um projeto saudável mas com dívida técnica acumulada — 7 issues classificadas como P1 estão abertas, incluindo uma falha de segurança (S0) de context spillage.

## 2. Lançamentos

**Nenhum release registrado nas últimas 24h.**

O projeto não publicou novas versões. O último ciclo de lançamento está em preparação através de branches de integração (`integration/v0.8.0`), com o PR #6266 (#6266) coordenando changesets massivos incluindo schema v3, channel aliasing e model-provider aliasing. A ausência de releases recentes pode indicar foco em estabilização pré-lançamento.

## 3. Progresso do projeto

O merge activity nas últimas 24h foi significativo com **5 PRs fechados/merged**:

| PR | Descrição | Impacto |
|----|-----------|---------|
| [#6046](https://github.com/zeroclaw-labs/zeroclaw/pull/6046) | `feat(memory): expose zeroclaw memory reindex CLI` | Nova CLI para reindexar embeddings NULL em migrations — fecha #5646 |
| [#6116](https://github.com/zeroclaw-labs/zeroclaw/pull/6116) | `fix(jira): support API v2 server mode` | Suporte a Jira Server/Data Center com Bearer token sem email — **P1 resolved** |
| [#6263](https://github.com/zeroclaw-labs/zeroclaw/pull/6263) | `fix: hands learned facts hashset` | Substituição de Vec por HashSet eliminando O(n²) loop — performance e correção |
| [#6261](https://github.com/zeroclaw-labs/zeroclaw/pull/6261) | `feat(cron): add WhatsApp to supported delivery channels` | WhatsApp adicionado como canal de entrega para cron jobs |
| [#6356](https://github.com/zeroclaw-labs/zeroclaw/pull/6356) | `fix(runtime/cost): WARN once per (provider, model) pair on missing pricing` | Log de warning para providers sem pricing catalog (OpenAI/Anthropic/Google only) |

**PRs em progresso de destaque:**
- [#6266](https://github.com/zeroclaw-labs/zeroclaw/pull/6266) — Schema v3 migration (branch `integration/v0.8.0`)
- [#6214](https://github.com/zeroclaw-labs/zeroclaw/pull/6214) — Activate HMAC tool receipts wiring
- [#6159](https://github.com/zeroclaw-labs/zeroclaw/pull/6159) — Record cost and token usage on every gateway turn

## 4. Temas quentes da comunidade

| Issue | Tópicos de discussão | Comentários | Reações |
|-------|---------------------|-------------|---------|
| [#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) — `default_model` issue on fresh install | Configuração de Ollama em LXC, onboarding falha com erro após setup inicial | 15 | 0 |
| [#6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059) — DeepSeek-V4 API incompatibility | Modo "thinking" incompatível com formato V4-Pro/V4-Flash; providers: deepseek | 8 | 2 |
| [#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) — Per-sender RBAC multi-tenant | Feature request para isolamento de workspaces, tool sets, rate limits entre user classes | 7 | 0 |
| [#6153](https://github.com/zeroclaw-labs/zeroclaw/issues/6153) — Matrix voice transcription failed | Transcrição de áudio falha com formato não suportado no Element client | 6 | 0 |

**Análise:** A comunidade demonstra forte interesse em **configuração de providers** (Ollama, DeepSeek, OpenAI-compatible) e **multi-tenant isolation**. O issue de default_model (#6123) lidera em discussão com 15 comentários — indicative de onboarding UX problemático. A feature de RBAC (#5982) tem potencial para ser diferenciador competitivo em deployments empresariais.

## 5. Bugs e estabilidade

### Severidade S0-S1 (Críticos — 4 issues ativas)

| Issue | Título | Severidade | Risk | Status |
|-------|--------|------------|------|--------|
| [#5415](https://github.com/zeroclaw-labs/zeroclaw/issues/5415) | Context spillage from chat to schedule | **S0** | high | blocked |
| [#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) | default_model issue on fresh install | S1 | medium | needs-repro |
| [#6180](https://github.com/zeroclaw-labs/zeroclaw/issues/6180) | Cannot use llama-server services | S1 | medium | needs-repro |
| [#6120](https://github.com/zeroclaw-labs/zeroclaw/issues/6120) | Onboarding: choosing Codex prompts for OpenAI API key | S1 | medium | — |

> ⚠️ **Alerta:** [#5415](https://github.com/zeroclaw-labs/zeroclaw/issues/5415) é classified como **S0 - data loss / security risk** — context de chat Discord vaza para scheduled execution. Bug bloqueado sem movimento significativo desde 2026-04-06.

### Severidade S2 (Degraded — 7 issues)

- [#6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059) — DeepSeek-V4 API incompatibility (P1, high risk)
- [#6156](https://github.com/zeroclaw-labs/zeroclaw/issues/6156) — Nextcloud Talk model request cancelled after ~5sec
- [#6147](https://github.com/zeroclaw-labs/zeroclaw/issues/6147) — Anthropic temperature shape issue (regression potential)
- [#6095](https://github.com/zeroclaw-labs/zeroclaw/issues/6095) — Bedrock 400 "temperature deprecated" for opus-4-7
- [#6105](https://github.com/zeroclaw-labs/zeroclaw/issues/6105) — Agent no context of cron job it runs

### Issues resolvidas (fechadas hoje)

| Issue | Razão de fechamento |
|-------|---------------------|
| [#6364](https://github.com/zeroclaw-labs/zeroclaw/issues/6364) | duplicate — Impossible to complete onboard with custom endpoint |
| [#5613](https://github.com/zeroclaw-labs/zeroclaw/issues/5613) | Jira auth failure — PR [#6116](https://github.com/zeroclaw-labs/zeroclaw/pull/6116) resolved |

**Métricas de estabilidade:**
- 47 issues abertas/ativas | 3 fechadas nas últimas 24h
- 7 bugs P1 ativos (3 S0-S1 críticos)
- 2 bugs P2 resolvidos via PR

## 6. Pedidos de features e sinais de roadmap

### Features em desenvolvimento

| PR/Issue | Feature | Prioridade | Sinal de roadmap |
|----------|---------|-----------|-----------------|
| [#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) | Per-sender RBAC multi-tenant | P2, high risk | Enterprise deployment roadmap |
| [#6214](https://github.com/zeroclaw-labs/zeroclaw/pull/6214) | Activate HMAC tool receipts | — | Security hardening |
| [#6140](https://github.com/zeroclaw-labs/zeroclaw/issues/6140) | Hybrid skills + WASM tools | P2, high risk | Plugin architecture evolution |
| [#6266](https://github.com/zeroclaw-labs/zeroclaw/pull/6266) | Schema v3 migration + aliasing | — | **v0.8.0 milestone** |
| [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) | Audit: 153 commits lost in revert c3ff635 | P2, high risk | Recovery/blocker para v0.8.0 |

### Novas features identificadas (últimas 24h)

- [#6253](https://github.com/zeroclaw-labs/zeroclaw/issues/6253) — **v0.7.6 tracker:** melhorar `zeroclaw skills` support e UX
- [#6279](https://github.com/zeroclaw-labs/zeroclaw/issues/6279) — Melhorar Release tag milestone triage com critérios time-based
- [#6150](https://github.com/zeroclaw-labs/zeroclaw/issues/6150) — Fast channel-native memory clear command (`/clear`)
- [#6067](https://github.com/zeroclaw-labs/zeroclaw/issues/6067) — Configurable reply-intent precheck (light model + timeout)

**Sinais de direção:**
- Plugin ecosystem em expansão (WASM, skills)
- Multi-tenant enterprise features ganhando tração
- Schema v3 indica ruptura com retrocompatibilidade — migração necessária

## 7. Resumo de feedback dos usuários

### Dores recorrentes reportadas

1. **Onboarding quebrado com providers custom** — Múltiplos usuários falham ao configurar Ollama, OpenAI-compatible endpoints, e Codex. #[6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123), #[6180](https://github.com/zeroclaw-labs/zeroclaw/issues/6180), #[6120](https://github.com/zeroclaw-labs/zeroclaw/issues/6120) — onboarding é o principal ponto de fricção.

2. **Incompatibilidade com modelos newest** — DeepSeek-V4 (#6059) e claude-opus-4-7 em Bedrock (#6095) causam falhas bloqueantes. Usuários que tentam usar modelos latest enfrentam erros.

3. **Channel-specific frustrations:**
   - Matrix: transcrição de voz quebrada
   - Nextcloud Talk: requests cancelados após 5s com LLMs lentos
   - Discord/Telegram: não há comando nativo para limpar memória

4. **Segurança e isolamento** — Contexto vaza entre chat e scheduled execution (#5415). Usuários empresarial estão pedindo RBAC por sender.

### Cenários de uso emergentes

- **Deployments em containers (LXC)** — Issue #6123 evidencia popularidade de setups containerizados com providers em containers separados
- **Multi-provider fallback** — Configurações com múltiplos providers (gateway-a, gateway-b) com fallbacks customizados
- **Cron + WhatsApp** — Demanda por automação via WhatsApp crescendo (#[6230](https://github.com/zeroclaw-labs/zeroclaw/pull/6230), #[6261](https://github.com/zeroclaw-labs/zeroclaw/pull/6261))

### Satisfação vs Insatisfação

- **Alto:** Comunidade ativa (50 PRs/50 issues atualizados), manutenção responsiva de bugs críticos (Jira API v2)
- **Baixo:** Onboarding ainda problemático, segurança em pontos críticos (context spillage S0 sem movimento há ~30 dias)

## 8. Backlog que merece atenção

### Issues sem resposta há > 7 dias (alta severidade)

| Issue | Título | Days Idle | Prioridade | Bloqueador |
|-------|--------|----------|-----------|------------|
| [#5415](https://github.com/zeroclaw-labs/zeroclaw/issues/5415) | Context spillage S0 | ~29 dias | P1 | **v0.8.0?** |
| [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) | Audit: 153 commits lost in revert | ~11 dias | P2 | v0.8.0 blocked |
| [#6132](https://github.com/zeroclaw-labs/zeroclaw/issues/6132) | Extend manifest prompt audit to scan [skill].prompts | ~9 dias | P1 | Security |
| [#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) | Per-sender RBAC | ~13 dias | P2 | Feature parity |

### PRs aguardando review/merge

| PR | Tamanho | Risco | Status |
|----|---------|-------|--------|
| [#6266](https://github.com/zeroclaw-labs/zeroclaw/pull/6266) | — | — | `DO NOT MERGE` (v0.8.0 batch) |
| [#6214](https://github.com/zeroclaw-labs/zeroclaw/pull/6214) | S | medium | needs-maintainer-review |
| [#6159](https://github.com/zeroclaw-labs/zeroclaw/pull/6159) | M | medium | needs-author-action |
| [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) | — | high | **Audit recovery** |

---

**Conclusão geral:** ZeroClaw demonstra saúde de projeto com alta atividade de PRs e issues, mas apresenta três áreas de risco que merecem atenção imediata: (1) bug S0 de context spillage sem movimento há 29 dias, (2) regressão de temperature fields em múltiplos providers, e (3) onboarding UX problemático que bloqueia novos usuários. O roadmap v0.8.0 está em preparação com schema v3, mas o bulk revert recovery (#6074) pode atrasar o milestone. A comunidade está ativamente engajada — 50+ interações em 24h — sinalizando um projeto vibrante com potencial de crescimento.

---
*Gerado em 2026-05-05 | Dados: GitHub zeroclaw-labs/zeroclaw*

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*