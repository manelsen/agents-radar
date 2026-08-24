# Resumo diário do ecossistema de agentes de IA 2026-08-25

> Issues: 2 | PRs: 1 | Projetos cobertos: 7 | Gerado em: 2026-08-24 20:23 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório do Projeto NullClaw

**Data de referência:** 2026-08-25
**Analista:** Analista de Projetos Open Source — Agentes de IA e Assistentes Pessoais

---

## 1. Panorama do Dia

O projeto NullClaw apresenta baixa atividade no período analisado, com 2 issues abertas e 1 pull request pendente nas últimas 24 horas. Não houve lançamentos de novas versões, releases ou PRs mescladas durante o período. As issues em aberto tratam de problemas funcionais significativos: uma relacionada à configuração de endpoints para instâncias auto-hospedadas do Firecrawl e outra sobre a ocultação do código de pareamento, indicando lacunas na experiência do desenvolvedor. O projeto mantém estado estável, porém sem evolução concreta no período.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24 horas.**

O projeto não publicou novas versões, binaries ou imagens Docker no período analisado. Esta ausência indica que o ciclo de release está em pausa ou que as últimas contribuições ainda não atingiram o critério de release.

---

## 3. Progresso do Projeto

**PRs processadas no período: 0**

Nenhuma pull request foi mesclada ou fechada nas últimas 24 horas. O projeto permanece sem evolução de código incorporada ao branch principal.

| PR | Status | Descrição |
|----|--------|-----------|
| [#956](https://github.com/nullclaw/nullclaw/pull/956) | ABERTA | Atualização de dependência Docker (alpine 3.23 → 3.24) via Dependabot |

**Destaque:** A PR #956, aberta pelo Dependabot em 2026-06-15, ainda aguarda revisão e mesclagem. A atualização trivial de versão Alpine no grupo docker-images permanece pendente há mais de 60 dias, sugerindo gargalo na revisão de dependências.

---

## 4. Temas Quentes da Comunidade

**Issues com maior atenção potencial:**

| Issue | Tipo | Reações | Comentários | Relevância |
|-------|------|---------|-------------|------------|
| [#993](https://github.com/nullclaw/nullclaw/issues/993) | Enhancement | 0 | 0 | **Alta** — Flexibilização de infraestrutura |
| [#992](https://github.com/nullclaw/nullclaw/issues/992) | Bug | 0 | 0 | **Alta** — Experiência do usuário |

### Análise das Demandas

**Issue #993 — Endereço do Firecrawl hardcoded:**
O usuário Crymfox reporta que o endpoint da API Firecrawl está fixado em `"https://api.firecrawl.dev/v1/search"` no código-fonte (`src/tools/web_search_providers/firecrawl.zig`). Esta limitação impede o uso de instâncias auto-hospedadas do Firecrawl, restringindo a adoção em cenários enterprise ou com requisitos de privacidade. A demanda demonstra interesse da comunidade em maior flexibilidade de infraestrutura e suporte a self-hosted.

**Issue #992 — Código de pareamento oculto:**
O usuário heredos descreve confusão sobre como obter o token de pareamento de 6 dígitos após a issue #535 ter removido o logging para stdout. O token existe apenas em memória, sem persistência em disco, criando uma barreira de configuração para novos usuários. Esta issue indica regressão na DX (experiência do desenvolvedor) e possivelmente documentação insuficiente sobre o novo fluxo de autenticação.

---

## 5. Bugs e Estabilidade

**Bugs reportados no período: 1**

| Severidade | Issue | Descrição | Impacto |
|------------|-------|-----------|---------|
| **Média** | [#992](https://github.com/nullclaw/nullclaw/issues/992) | Código de pareamento oculto e não persistido | Bloqueante para configuração inicial |

### Detalhamento

**Bug #992 — Fluxo de pareamento inacessível:**
O bug possui severidade **média** pois impede a configuração inicial do gateway API para novos usuários. A remoção do logging (referente à issue #535) criou uma regressão de usabilidade: o token existe apenas em memória durante a execução, sem mecanismo visível ou persistido para recuperação. Este cenário afeta diretamente novos onboardings e integrações.

**Recomendação de triagem:** Priorizar análise da issue #535 para entender o rationale da remoção do logging e determinar se o token deve ser exposto via stdout, gravado em arquivo temporário, ou apresentado via interface alternativa.

---

## 6. Pedidos de Features e Sinais de Roadmap

**Novas features solicitadas: 1**

| Feature | Issue | Autor | Complexidade Estimada |
|---------|-------|-------|----------------------|
| Endpoint configurável do Firecrawl | [#993](https://github.com/nullclaw/nullclaw/issues/993) | Crymfox | Baixa-Média |

### Análise

**Feature #993 — Firecrawl search endpoint configurável:**
A feature request demonstra demanda por flexibilidade de deployment. O autor sugere tornar o endpoint da API Firecrawl configurável via parâmetro, permitindo:

1. Uso de instâncias Firecrawl auto-hospedadas
2. Suporte a ambientes air-gapped
3. Customização para APIs compatíveis com mesmo formato

A implementação aparenta ser trivial (adição de variável de ambiente ou parâmetro de configuração), com impacto significativo na adoção enterprise e cenários de privacidade. Este pedido alinha-se com tendências de open source em oferecer suporte a self-hosted como diferencial competitivo.

**Sinais de roadmap:**
- Demanda por modularidade de provedores de busca
- Necessidade de suporte a infraestruturas auto-hospedadas
- Preferência por configurações externas ao código (config over code)

---

## 7. Resumo de Feedback dos Usuários

**Feedback coletado no período: 2 issues**

### Dores Identificadas

| Dor | Descrição | Severidade | Origem |
|-----|-----------|------------|--------|
| **Inacessibilidade do token** | Usuários não conseguem obter código de pareamento | Alta | #992 |
| **Rigidez de infraestrutura** | Incapacidade de usar Firecrawl em self-hosted | Média | #993 |

### Análise de Sentimento

O feedback indica **duas dores distintas**:

1. **DOR TÉCNICA (Bloqueante):** O bug de pareamento afeta diretamente a capacidade de uso do produto. Usuários novos ficam presos no setup inicial. O sentimento é de frustração ("confused about this issue for the past few days").

2. **DOR DE FLEXIBILIDADE (Moderada):** Usuários avançados buscam liberdade de deployment. O sentimento é de solicitação construtiva, demonstrando uso em contextos enterprise onde soluções auto-hospedadas são mandatórias.

**Observação:** Ambas as issues não possuem reações ou comentários, indicando que os problemas podem ser isolados ou que a comunidade está em período de baixa participação.

---

## 8. Backlog que Merece Atenção

**PRs e Issues sem atividade prolongada:**

| Item | Tipo | Criado | Última Atualização | Dias Inativo | Prioridade |
|------|------|--------|-------------------|--------------|------------|
| [#956](https://github.com/nullclaw/nullclaw/pull/956) | PR | 2026-06-15 | 2026-08-24 | ~70 dias | **Média** |

### Análise

**PR #956 — Atualização de dependência Docker (alpine 3.23 → 3.24):**
Esta PR do Dependabot está aberta há aproximadamente 70 dias sem mesclagem. Atualizações de imagens base em projetos ativos devem ser tratadas com prioridade por razões de:

- **Segurança:** Versões Alpine mais antigas podem conter CVEs
- **Manutenção:** PRs Dependabot expiram ou tornam-se conflitantes com o tempo
- **Automação:** Ignorar updates automáticos desmerece o sistema de dependências

**Recomendação:** Revisar e mesclar a PR #956 rapidamente, ou documentar rationale para rejeição caso a versão específica seja intencional.

---

## Indicadores de Saúde do Projeto

| Métrica | Valor | Avaliação |
|---------|-------|-----------|
| Issues abertas (24h) | 2 | Neutra |
| PRs abertas (24h) | 1 | Neutra |
| PRs mescladas (24h) | 0 | ⚠️ Estagnação |
| Releases (24h) | 0 | ⚠️ Sem evolução |
| Backlog crítico | 1 PR (70+ dias) | ⚠️ Requer ação |

---

## Recomendações para o Maintainer

1. **Alta prioridade:** Investigar e resolver a issue #992 (token de pareamento) — impacta onboarding de novos usuários
2. **Média prioridade:** Implementar feature #993 (endpoint configurável do Firecrawl) — demanda de mercado enterprise
3. **Imediata:** Revisar e mesclar PR #956 — atualização de segurança pendente há 70 dias
4. **Monitoramento:** Acompanhar se mais usuários reportam o problema de pareamento (#992) para determinar se é issue isolada ou problema sistêmico

---

*Relatório gerado automaticamente com base em dados públicos do GitHub para o repositório nullclaw/nullclaw. Última atualização dos dados: 2026-08-25.*

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo — Ecossistema Open Source de Agentes de IA

**Referência:** 2026-08-25 | **Projetos analisados:** 7

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **duas velocidades distintas** neste período. Quatro projetos — ZeroClaw, Hermes Agent, CoPaw e IronClaw — operam em modo de alta intensidade, com volumes de atividade que indicam ciclos de desenvolvimento semanal ou diário. Os demais — NanoBot, PicoClaw e NullClaw — mantêm ritmos moderados a baixos, com foco em estabilização pontual. Uma tendência transversal emerge: **o paradigma está migrando de "chatbot com ferramentas" para "agente operacional persistente**, capaz de automação scheduled, event-driven e multi-canal. Essa convergência aparece com clareza em ZeroClaw (cron routing, triggers), IronClaw (automations + hooks lifecycle), NanoBot (conditional triggers, task ledger) e CoPaw (webhook nativo, multi-agente teams).

---

## 2. Comparação de Atividade

| Projeto | Issues (abertas/ativas 24h) | PRs (abertos/ativos 24h) | PRs Mesclados (24h) | Releases (24h) | Saúde |
|---------|:---:|:---:|:---:|:---:|:---:|
| **ZeroClaw** | 50 | 50 | 7 | 0 | 🔴 Alta atividade — pipeline OIDC crítico |
| **Hermes Agent** | 50 | 50 | 3 | 0 | 🟠 Alta — 2 bugs P1 abertos |
| **CoPaw** | 31 abertas | 20 abertos | 29 | 1 | 🟢 Alta e saudável |
| **IronClaw** | 21 | 36 | 10 | 0 | 🟢 Alta — foco em dogfooding QA |
| **NanoBot** | 8 | 21 | 12 | 0 | 🟡 Moderada-Alta — estabilidade |
| **PicoClaw** | 2 | 3 | 2 | 0 | 🟡 Moderada — estável |
| **NullClaw** | 2 | 1 | 0 | 0 | 🔴 Estagnada |

**Notas:**
- CoPaw lidera em taxa de fechamento: 29 PRs mesclados contra 20 abertos — razão de 1,45, indicador de ciclo de review saudável.
- ZeroClaw e Hermes Agent registram volumes absolutos máximos (50/50), mas ZeroClaw fecha PRs em escala proporcional; Hermes Agent, com 50 PRs ativos e apenas 3 fechados, indica gargalo de review ou estratégia de empilhamento.
- NullClaw é o único projeto sem PR alguma mesclada no período — 70+ dias com a PR Dependabot #956 pendente.

---

## 3. Posicionamento do Projeto Principal

> **ZeroClaw** se destaca como o projeto com maior intensidade de desenvolvimento, maior ambição arquitetural e maior risco acumulado no período.

### Vantagens Competitivas do ZeroClaw

| Dimensão | Posição do ZeroClaw |
|----------|-------------------|
| **Segurança** | Único com implementação ativa de OIDC (RFC #8289, estágios 3–6), incluindo PKCE, principal-owned sessions e storage-level isolation. Diferencial real para enterprise. |
| **Automação** | Cron nativo com entrega por canal, triggers condicionais e tool-elicitation pre-turn — pipeline mais completo de automação event-driven. |
| **Provider diversity** | Suporte nativo a Crusoe Managed Inference, Hailo-Ollama, Azure OpenAI, Google TTS — sem dependência de provedor único. |
| **Volume de contributions** | 50 PRs e 50 issues em 24h — volume 2,5× maior que o segundo mais ativo. |

### Riscos Identificados

- **9 PRs OIDC empilhados em sequência de dependência** — bloqueio de review em qualquer ponto do pipeline tem efeito cascata.
- **Bug S0 de segurança (#10165):** `block_high_risk_commands` é bypassado por delegates independentes — risco de perda de dados em ambientes restritos.
- **17 testes Telegram com wall-clock timeout** — instabilidade em área de produção crítica.

### Diferenças Técnicas Fundamentais

| Aspecto | ZeroClaw | Hermes Agent | CoPaw | IronClaw |
|---------|----------|-------------|-------|----------|
| **Modelo de sessão** | Principal-owned, predicated deletes | Per-session storage RFC em discussão | Session isolation via workspace | Per-profile storage (profile-agnostic em progresso) |
| **Comunicação** | WebSocket/ACP (em transição p/ Chat Completions) | Desktop-first, gateway remotos | Multi-canal: Feishu, DingTalk, Console | WebUI-first com automations |
| **Automação** | Cron, conditional triggers, pre-turn elicitation | Cron, deadline layer (timeout unificado) | Webhook nativo (roadmap), task scheduling | Automations com run outcomes derivados de evidências |
| **Segurança** | OIDC completo com PKCE | Fleet update, OAuth fixes | OAuth2 token rotation | Credential bindings via iron-proxy |
| **Linguagem principal** | — | — | Python | Rust |

---

## 4. Focos Técnicos Compartilhados

Seis necessidades técnicas aparecem em **pelo menos três projetos distintos**, indicando maturização do ecossistema:

### 4.1 Persistência e Consistência de Sessões

Todos os projetos que evoluíram além do chatbot simples enfrentam o mesmo problema: **como manter estado de sessão de forma confiável**.

| Projeto | Abordagem |
|---------|-----------|
| **NanoBot** | SQLite FTS5 para busca de sessões (#5507) |
| **Hermes Agent** | RFC #93244: per-session storage com central pointer index — dois eventos de corrupção no mês |
| **ZeroClaw** | Principal-owned sessions com predicated storage deletes (#10265) |
| **IronClaw** | Profile-agnostic durable storage em progresso (#7456) |

**Síntese:** O modelo de sessão única global está sendo substituído por sessões por principal/usuário, com isolamento no nível de storage. Este é um problema fundamentalmente difícil que todos estão resolvendo em paralelo.

### 4.2 Observabilidade e Tracing

Três projetos investem simultaneamente em infraestrutura de diagnóstico:

| Projeto | Iniciativa |
|---------|-----------|
| **NanoBot** | Unified usage backend (#5481), typed LLMUsage contract (#5480), Langfuse tracing (#5520), stream timing (#5518) |
| **ZeroClaw** | Log-based dependencies, tracing subscriber, daemon diagnostics com error chain (#10232) |
| **IronClaw** | AfterTurn lifecycle hook + memory curation (#7765) |

**Síntese:** O ecossistema está convergindo para modelos de observação onde usage, timing e traces são tratados como dados estruturados tipados — não logs livres.

### 4.3 Memory Leak e Performance de Longo Prazo

| Projeto | Situação |
|---------|---------|
| **CoPaw** | Backend 20GB+ após 2 dias (v2.1.0, #7222); 150MB→580MB em 64 min (v1.1.12.post2, #5720) |
| **NanoBot** | TLS context reuse para eliminar latência de 10s em Codex (#5500) |
| **IronClaw** | Cache de system prefix corrigido para invalidação desnecessária (#7001) |
| **Hermes Agent** | Session history reload regression (#89346) após fix de DB scope |

**Síntese:** À medida que os agentes rodam por períodos mais longos (sessões de horas/dias vs. minutos), degradação de memória e acúmulo de estado estão se tornando problemas de primeira classe — similares a servidores de aplicação tradicionais.

### 4.4 Multi-Provider e Provider Diversity

| Projeto | Providers ou integrações solicitadas |
|---------|-------------------------------------|
| **NanoBot** | QwenCloud (#5350), AnySearch (#5505), Codex com TLS reuse |
| **ZeroClaw** | Hailo-Ollama (#9109), Crusoe Managed Inference (#9338), Google TTS |
| **CoPaw** | SiliconFlow DeepSeek V4, Qwen_Code, Anthropic/Gemini protocols |
| **NullClaw** | Firecrawl auto-hosted (endpoint configurável) |

**Síntese:** A diversificação de providers é uma demanda comunitária consistente, impulsionada porregulação (dados em território), custo (modelos mais baratos para tarefas específicas) e resiliência (fallback quando provedor primário falha).

### 4.5 Automação Persistent (Cron/Trigger/Scheduler)

| Projeto | Capacidades |
|---------|-------------|
| **ZeroClaw** | Cron nativo com delivery por canal, conditional triggers, tool-elicitation pre-turn |
| **NanoBot** | ConditionalTriggerRuntime (#5508), task ledger crash-safe (#5511), cron routing para canais configuráveis (#5513) |
| **IronClaw** | Automations com run outcomes derivados de evidências (#7650), AfterTurn lifecycle hooks (#7765) |
| **Hermes Agent** | Deadline layer de 4 fases (#85125) — timeout/hang unificado |

**Síntese:** A convergência mais significativa do ecossistema. O "agente operacional" está se consolidando como o modelo de produto predominante — um daemon persistente que executa ações em background, baseado em schedules ou eventos, não limitado a interações chat.

### 4.6 Security Hardening

| Projeto | Foco de segurança |
|---------|-----------------|
| **ZeroClaw** | OIDC completo, PKCE, principal isolation, Google TTS API key sensível (#10175) |
| **Hermes Agent** | Command guard em full access mode (#5501), MCP tool binding (#93898) |
| **IronClaw** | Sandbox credential bindings via iron-proxy (#7810), profile ownership via SSH |
| **PicoClaw** | Security credentials validados antes de config validation (#1929) — regressão corrigida |
| **CoPaw** | OAuth2 refresh token rotation (#7066) |

---

## 5. Análise de Diferenciação

### 5.1 Por Público-Alvo

| Projeto | Público-alvo primário | Posicionamento |
|---------|----------------------|----------------|
| **ZeroClaw** | Enterprise / DevOps | Agente operacional seguro com OIDC e automação robusta |
| **Hermes Agent** | Desenvolvedores avançados | IDE-like desktop agent com LSP integration e deadline layer |
| **CoPaw** | Equipes corporativas asiáticas | Multi-canal (Feishu, DingTalk) com memória de longo prazo |
| **IronClaw** | Usuários knowledge workers | Automations com sugestões contextuais e GSuite integration |
| **NanoBot** | Pesquisadores / desenvolvedores | Plataforma de experimentação com tracing e usage analytics |
| **PicoClaw** | Desenvolvedores embedded/CLI | Agente leve com foco em integração (Slack, Exa) |
| **NullClaw** | Nicho específico | Estável mas estagnado — sem diferenciação visível |

### 5.2 Por Arquitetura

```
                    ZERO CLAW
                   ┌──────────────┐
                   │ OIDC Layer   │
                   │ (PKCE, princ│
                   │  ipals)      │
                   └──────┬───────┘
                          │ WebSocket/ACP
        ┌─────────────────┼─────────────────┐
        ▼                 ▼                 ▼
   ┌─────────┐      ┌──────────┐     ┌──────────────┐
   │ NanoBot │      │Hermes Agt│     │   IronClaw   │
   │ Observa-│      │Deadline  │     │ Automations  │
   │ bility  │      │Layer     │     │ + hooks      │
   │ stack   │      │(timeout  │     │ lifecycle    │
   │         │      │ unific.) │     │              │
   └────┬────┘      └────┬─────┘     └──────┬───────┘
        │                │                  │
        └────────────────┴──────────────────┘
                         │
                    ┌────▼────┐
                    │CoPaw    │
                    │Multi-   │
                    │channel  │
                    │+ mem    │
                    └─────────┘

              PICO CLAW / NULL CLAW
                    (periferia)
```

### 5.3 Por Estágio de Maturidade

| Categoria | Projetos | Características |
|-----------|----------|-----------------|
| **Maduro e em aceleração** | ZeroClaw, IronClaw, CoPaw | Release cycles definidos, PRs em volume alto, features complexas sendo implementadas |
| **Maduro e estabilizando** | NanoBot | Volume moderado, foco em regression fixes e observabilidade — consolidando antes de release |
| **Ativo mas fragmentado** | Hermes Agent | Volume máximo com gargalo de review; 9 bugs P1/P2 + 2 eventos de corrupção de DB no mês |
| **Manutenção mínima** | PicoClaw | Bug fix + roadmap features; baixa atividade comunitária |
| **Estagnado** | NullClaw | Sem PRs fechadas, backlog de 70+ dias, nenhuma evolução concreta |

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração

| Projeto | PRs fechados (24h) | Razão close/open | Interpretação |
|---------|:------------------:|:----------------:|---------------|
| **CoPaw** | 29 | **1,45** | Ciclo de review saudável — contribuidores estão fechando mais do que abrindo |
| **IronClaw** | 10 | 0,28 | Volume alto de PRs abertos (36) sugere backlog significativo |
| **NanoBot** | 12 | 0,57 | Equilibrado — merges frequentes mantêm base limpa |
| **ZeroClaw** | 7 | 0,14 | 50 PRs abertos indica acúmulo — pipeline OIDC pode estar creando gargalo |
| **PicoClaw** | 2 | 0,67 | Razoável para volume baixo |
| **Hermes Agent** | 3 | 0,06 | Gargalo severo — 50 PRs abertos, 3 fechados |
| **NullClaw** | 0 | 0,00 | Sem movimento |

### 6.2 Engajamento Comunitário (Issues por Comentários)

| Projeto | Issue mais comentada | Comentários | Tema |
|---------|---------------------|:-----------:|------|
| **Hermes Agent** | #66616 (Skills index stale) | **90** | Infraestrutura interna degradada |
| **ZeroClaw** | #8603 (Chat Completions RFC) | **24** | Compatibilidade com ecossistema OpenAI |
| **CoPaw** | #6921 (Multi-step tasks param) | **11** | Bug de execução de plano |
| **IronClaw** | #7812 (Onboarding suggestions) | 3 | Permissões de ferramentas |
| **NanoBot** | #5350 (QwenCloud provider) | 2 | Provider diversity |
| **PicoClaw** | #806 (WebUI support) | 10 | UX accessibility |
| **NullClaw** | #993 / #992 | 0 | Infraestrutura / DX |

### 6.3 Índice de Manutenção Ativa

| Indicador | CoPaw | IronClaw | NanoBot | ZeroClaw | Hermes | PicoClaw | NullClaw |
|-----------|:-----:|:--------:|:-------:|:--------:|:------:|:--------:|:--------:|
| Release em 30d | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| PR aging >60d | 0 | 1 | 0 | 0 | 0 | 0 | **1** |
| Bugs P1/P2 abertos | 3 | 0 | 1 | **12** | **9** | 1 | 0 |
| Issue stale sem resposta | 0 | 1 | 0 | 0 | 0 | **2** | 0 |
| Bug de segurança reportado | 0 | 0 | 0 | **1 S0** | **1 S3** | 0 | 0 |

**Veredicto:** CoPaw é o

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-08-25

---

## 1. Panorama do Dia

O NanoBot apresenta **alta atividade de desenvolvimento** em 25/08/2026, com **21 PRs atualizados** e **8 issues abertas** nas últimas 24 horas. O projeto atravessa uma fase de refinamento centrada em **estabilidade, observabilidade e experiência do usuário**: múltiplas correções P2 para o WebUI (estados de streaming, reconexões, ordem de mensagens) e para o agent (timeouts, cleanup de tasks) foram merged, enquanto a infraestrutura de *usage tracking* e tracing foi significativamente fortalecida. Não houve releases formais, mas o volume de merges (12/21 PRs) indica um ciclo de integração saudável. A comunidade demonstra interesse crescente em automação avançada com 5 novas proposals de features relacionadas a *cron routing*, *task ledgers* e *conditional triggers*.

---

## 2. Lançamentos

**Nenhum release publicado nas últimas 24h.** O projeto nãoemitiu nova versão. Isso é consistente com o padrão de merge-first-review-later observado em PRs como #5481 e #5480, que indicam uma estratégia de desenvolvimento incremental sem标签 de versão oficial. Usuários em produção devem monitorar o branch `main` diretamente ou os PRs merged listados na seção 3.

> ⚠️ **Nota para mantenedores**: Embora não haja breaking change formal hoje, a refatoração do *usage contract* (#5480) e a adição do *unified usage backend* (#5481) representam mudanças internas significativas que podem afetar integrações de monitoramento baseadas em `LLMUsage`.

---

## 3. Progresso do Projeto

### PRs Merged/Closed (12 itens — principais)

| # | Título | Impacto | Link |
|---|--------|---------|------|
| **#5507** | `feat(session): SQLite FTS5 full-text search index` | **🔴 Alto** — Substitui linear scan por índice FTS5 para busca de sessões; resolve degradação de performance com histórico crescente | [PR #5507](https://github.com/HKUDS/nanobot/pull/5507) |
| **#5508** | `feat(gateway): add ConditionalTriggerRuntime` | **🔴 Alto** — Runtime de condições leve que evita LLM turns desnecessários em automação event-driven; "token-free" | [PR #5508](https://github.com/HKUDS/nanobot/pull/5508) |
| **#5481** | `feat(usage): add unified provider usage backend` | **🔴 Alto** — Backend unificado para registro de usage por provider, incluindo retries e fallbacks | [PR #5481](https://github.com/HKUDS/nanobot/pull/5481) |
| **#5480** | `refactor(providers): define typed LLM usage contract` | **🟡 Médio** — Contrato tipado `LLMUsage` imutável substituindo dicionários dinâmicos; normaliza tokens/cache em OpenAI, Anthropic e Bedrock | [PR #5480](https://github.com/HKUDS/nanobot/pull/5480) |
| **#5500** | `fix(codex): reuse TLS contexts across requests` | **🟡 Médio** — Cache de contextos TLS resolve latência de 10s em Codex provider; impacta todas as requisições | [PR #5500](https://github.com/HKUDS/nanobot/pull/5500) |
| **#5496** | `fix(agent): time out no-tools model requests` | **🟡 Médio** — Corrige regression: requests "no-tools" (malformed-call recovery, etc.) agora respeitam wall-clock timeout | [PR #5496](https://github.com/HKUDS/nanobot/pull/5496) |
| **#5506** | `fix(agent): honor selected project workspace` | **🟡 Médio** — WebUI expõe projeto selecionado como working directory ao modelo; preserva prompt-cache reuse | [PR #5506](https://github.com/HKUDS/nanobot/pull/5506) |
| **#5503** | `fix(webui): preserve causal message order (NAN-29)` | **🟡 Médio** — Garante ordenação por `turnSeq` mesmo com traces de ferramentas atrasados; previne inconsistência visual | [PR #5503](https://github.com/HKUDS/nanobot/pull/5503) |
| **#5502** | `fix(tui): preserve shell after Ctrl+C` | **🟡 Médio** — Melhora UX do terminal: Ctrl+C não derruba o shell durante dispatch | [PR #5502](https://github.com/HKUDS/nanobot/pull/5502) |
| **#5501** | `fix(exec): disable command guard in full access` | **🟠 Alto (Security)** — Remove command guard quando acesso é "full"; mantém SSRF e path guards em modes restritos | [PR #5501](https://github.com/HKUDS/nanobot/pull/5501) |
| **#5499** | `fix(tui): avoid saving empty sessions` | **🟢 Baixo** — Evita acumulação de sessões vazias em memória; bound draft state | [PR #5499](https://github.com/HKUDS/nanobot/pull/5499) |
| **#5517** | `test(exec): remove Windows process timing races` | **🟢 Baixo** — Testes de regressão para deterministic cleanup em Windows; cobre race condition no handshake child-ready | [PR #5517](https://github.com/HKUDS/nanobot/pull/5517) |

**Resumo quantitativo**: 12 PRs closed, 3 com impacto alto (features significativas), 1 de segurança. A bulk de merges indica foco em estabilidade pré-release.

---

## 4. Temas Quentes da Comunidade

### Issues com mais engajamento

| # | Título | Comentários | 👍 | Temas |
|---|--------|-------------|----|-------|
| **#5350** | Add backward-compatible QwenCloud provider path | 2 | 0 | Provider diversity, compatibilidade com APIs Qwen |
| **#5512** | WebUI stalls after Gateway restart | 1 | 0 | Estabilidade WebUI, streaming state |
| **#5516** | Telegram rich messages + streaming são mutuamente exclusivos | 0 | 0 | Canal Telegram, UX de mensagens |
| **#5513** | Route cron results to configurable channels | 0 | 0 | Automação, multi-canal |
| **#5511** | Crash-safe task ledger | 0 | 0 | Resiliência, persistência de estado |
| **#5510** | Zero-token conditional triggers | 0 | 0 | Eficiência, event-driven |
| **#5509** | Session search with FTS5 | 0 | 0 | Performance (já implementada em #5507) |
| **#5505** | Add AnySearch como provider | 0 | 0 | Provider diversity, busca web |

### Análise dos temas quentes

O engajamento comunitário concentra-se em **três grandes eixos**:

1. **Diversificação de providers (#5350, #5505)**: A comunidade deseja alternativas além do DashScope, especificamente QwenCloud (plataforma internacional) e AnySearch (busca web unificada). Isso reflete demanda por flexibilidade em ambientes regulatórios e geográficos distintos.

2. **Automação e resiliência (#5510, #5511, #5513)**: Cinco das oito issues são proposals de features de automação — cron routing, task ledgers, conditional triggers. A comunidade demonstra interesse forte em transformar o NanoBot em um **agente operacional persistent**, não apenas um chat.

3. **Experience parity entre canais (#5516, #5512)**: Problemas com Telegram e WebUI indicam fragmentação de comportamento entre diferentes interfaces, especialmente em streaming.

> 📌 **Sinal estratégico**: A combination de issues sobre "zero-token triggers" e "task ledger" sugere que o roadmap está convergindo para um **agent persistente de automação** — comparable a um "cron + webhook + LLM" unificado.

---

## 5. Bugs e Estabilidade

### Issues abertas (bugs)

| # | Severidade | Descrição | Link |
|---|-----------|-----------|------|
| **#5512** | 🟠 Alta | WebUI stalls em spinning state após Gateway restart — `isStreaming` nunca seta `false` | [Issue #5512](https://github.com/HKUDS/nanobot/issues/5512) |
| **#5516** | 🟡 Média | Telegram rich messages nunca rendem com streaming enabled (mutual exclusivity desde #4488) | [Issue #5516](https://github.com/HKUDS/nanobot/issues/5516) |

### Correções de bugs fechadas (regressões resolvidas)

| # | Problema corrigido | Regressão? | Link |
|---|--------------------|-----------|------|
| **#5514** (OPEN) | Clear stale stream state after reconnect | — | [PR #5514](https://github.com/HKUDS/nanobot/pull/5514) |
| **#5496** | Timeout em no-tools requests (malformed-call recovery, etc.) | ✅ Sim | [PR #5496](https://github.com/HKUDS/nanobot/pull/5496) |
| **#5500** | TLS context reuse em Codex (latência de 10s) | ✅ Sim | [PR #5500](https://github.com/HKUDS/nanobot/pull/5500) |
| **#5503** | Preservar causal message order no WebUI | ✅ Sim | [PR #5503](https://github.com/HKUDS/nanobot/pull/5503) |
| **#5502** | Shell preservation após Ctrl+C no TUI | ✅ Sim | [PR #5502](https://github.com/HKUDS/nanobot/pull/5502) |
| **#5501** | Command guard em full access mode (security fix) | ✅ Sim | [PR #5501](https://github.com/HKUDS/nanobot/pull/5501) |

### Análise de estabilidade

**Sinais positivos:**
- 5 bugs/regressões foram corrigidos via PR em 24h
- A refatoração de `#5480` (typed usage contract) melhora a detectabilidade de anomalias
- Tracing Langfuse em `#5520` (em aberto) promete melhor observabilidade

**Sinais de atenção:**
- `#5512` é um bug **ainda aberto** com severidade alta — WebUI stall pós-restart é user-blocking
- `#5516` expõe divário histórico entre streaming e rich messages no Telegram
- Padrão de "regression" em múltiplos PRs sugere necessidade de suite de testes mais robusta na área de agent/streaming

> 🔧 **Recomendação**: Priorizar merge do PR #5514 (fix WebUI reconnect state) antes da próxima release.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas proposals (8 issues abertas — todas são features)

| # | Feature | Complexidade Estimada | Link |
|---|---------|----------------------|------|
| **#5510** | Zero-token conditional triggers | 🟡 Média-Alta | [Issue #5510](https://github.com/HKUDS/nanobot/issues/5510) |
| **#5511** | Crash-safe task ledger (tasks.json) | 🟡 Média | [Issue #5511](https://github.com/HKUDS/nanobot/issues/5511) |
| **#5513** | Route cron results to configurable channels | 🟡 Média | [Issue #5513](https://github.com/HKUDS/nanobot/issues/5513) |
| **#5509** | Session search FTS5 | ✅ Já implementada em #5507 | [Issue #5509](https://github.com/HKUDS/nanobot/issues/5509) |
| **#5505** | AnySearch provider | 🟢 Baixa | [Issue #5505](https://github.com/HKUDS/nanobot/issues/5505) |
| **#5350** | QwenCloud provider path | 🟢 Baixa | [Issue #5350](https://github.com/HKUDS/nanobot/issues/5350) |

### PRs de feature em aberto (9 open PRs)

| # | Feature | Status | Link |
|---|---------|--------|------|
| **#5520** | Langfuse tracing no Codex provider | 🔵 Em revisão | [PR #5520](https://github.com/HKUDS/nanobot/pull/5520) |
| **#5519** | Compact single-pane chat header | 🔵 Em revisão | [PR #5519](https://github.com/HKUDS/nanobot/pull/5519) |
| **#5518** | Record provider stream timing | 🔵 Em revisão | [PR #5518](https://github.com/HKUDS/nanobot/pull/5518) |
| **#5515** | Observe session reply timeout task failures | 🔵 Em revisão | [PR #5515](https://github.com/HKUDS/nanobot/pull/5515) |
| **#5514** | Clear stale stream state after reconnect | 🔵 Em revisão | [PR #5514](https://github.com/HKUDS/nanobot/pull/5514) |
| **#5504** | Surface model retry status (NAN-34) | 🔵 Em revisão | [PR #5504](https://github.com/HKUDS/nanobot/pull/5504) |
| **#5495** | Native Linear agent channel | 🔵 Em revisão | [PR #5495](https://github.com/HKUDS/nanobot/pull/5495) |
| **#5430** | Release completed task groups | 🔵 Em revisão | [PR #5430](https://github.com/HKUDS/nanobot/pull/5430) |

### Sinais de roadmap

**Eixos estratégicos inferidos:**

1. **Observabilidade (tracing + usage)**: #5520 (Langfuse), #5518 (stream timing), #5504 (retry status) — o projeto está investindo em ferramentas de debugging e profiling
2. **Automação persistent**: #5510, #5511, #5513, #5508 (merged) — convergência para agent de operações
3. **Provider expansion**: #5350, #5505, #5520 — diversificação além de OpenAI/DashScope
4. **Multi-canal**: #5513, #5495 (Linear) — suporte a canais além de WebUI/TUI/Telegram
5. **Resiliência**: #5511, #5514 — persistência de estado através de restarts

> 📊 **Triangulação**: Se as trends de issues (#5510, #5511, #5513) e PRs merged (#5508, #5507) continuarem, a versão pós-0.x do NanoBot será primariamente um **agent de automação operacional** com forte ênfase em resiliência e observabilidade.

---

## 7. Resumo de Feedback dos Usuários



</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent
## Data de Referência: 2026-08-25

---

## 1. Panorama do Dia

O Hermes Agent mantém **alta atividade** com 50 issues e 50 PRs atualizados nas últimas 24h. O projeto não выпустил novas versões (0 releases), indicando foco em estabilização da base de código existente. Observa-se concentração de esforços em **resolução de bugs críticos** relacionados a sessões, gateways remotos e atualização de desktop — particularmente os itens P1 e P2 que tratam de regressões introduzidas recentemente. A comunidade demonstra engajamento significativo em issues arquiteturais, especialmente o tracking #85125 sobre deadline layer e o RFC #93244 sobre armazenamento por sessão.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto encontra-se em período de desenvolvimento intensivo sem tag de versão publicada. A ausência de releases sugere que as mudanças em andamento (especialmente as fases do #85125 e os fixes de estabilidade) ainda não atingiram maturidade suficiente para release formal.

---

## 3. Progresso do Projeto

### PRs Fechados/Merged Hoje

| PR | Título | Impacto |
|----|--------|---------|
| [#94190](https://github.com/NousResearch/hermes-agent/pull/94190) | `fmt(js): npm run fix auto-fix` | Manutenção: auto-fix de lint/formatting via bot |
| [#94185](https://github.com/NousResearch/hermes-agent/pull/94185) | `fix(lsp): retire dead clients and abort diagnostics waits after transport death (#85125 3b)` | **Melhoria de estabilidade**: Substitui clientes LSP mortos ao invés de cachear, resolvendo cenários de wedge |
| [#94188](https://github.com/NousResearch/hermes-agent/pull/94188) | `refactor(deadline): consolidate site-local tree-kills onto agent.deadline.kill_process_tree (#85125 4d)` | **Consolidação arquitetural**: Centraliza kill de processos no deadline layer |
| [#94186](https://github.com/NousResearch/hermes-agent/pull/94186) | `fix(computer-use): recreate CUA session after timeout with outcome-unknown surfacing (#85125 3b)` | **Melhoria de robustez**: Recria sessão CUA após timeout MCP, resolvendo #74799 |

### Avanços Principais

- **Deadline Layer (#85125)**: Progresso significativo nas fases 3b e 4d, com consolidação de mecanismos de timeout e kill de processos
- **Estabilidade de Sessões**: Fixes para problemas de session state introduzidos em #88734
- **Manutenção Automatizada**: Bot de auto-fix mantendo consistência de código

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| Issue | Comentários | Tema | Link |
|-------|-------------|------|------|
| #66616 | 90 | Skills index stale/degraded | [Issue #66616](https://github.com/NousResearch/hermes-agent/issues/66616) |
| #88584 | 26 | Automated integration blocked | [Issue #88584](https://github.com/NousResearch/hermes-agent/issues/88584) |
| #85125 | 19 | Unified deadline layer (arquitetura) | [Issue #85125](https://github.com/NousResearch/hermes-agent/issues/85125) |
| #91277 | 19 | Fleet update reliability | [Issue #91277](https://github.com/NousResearch/hermes-agent/issues/91277) |
| #93244 | 1 | RFC: Per-session storage (corrupção) | [Issue #93244](https://github.com/NousResearch/hermes-agent/issues/93244) |

### Análise de Demandas

**Skills Index Degraded (#66616)**: Com 90 comentários, é o issue mais debatido. O índice de skills está 29.8h desatualizado (limite: 26h). A comunidade discute soluções para o workflow `.github/workflows/skills-index.yml` que não está executando conforme cronograma.

**Automated Integration Blocked (#88584)**: 26 comentários sobre conflitos no merge cron/jobs.py entre Nous e Enterkey. Demonstra complexidade em integrações automatizadas multi-fork.

**Arquitetura de Deadline (#85125)**: 19 comentários sobre o tracking de 4 fases para eliminar classes de bugs timeout/hang estruturalmente. A comunidade colapsou 400+ issues relacionadas em 7 mecanismos. Este é um tema estratégico de longo prazo.

**Fleet Update Reliability (#91277)**: 19 comentários sobre a fragmentação de lógica de update entre plataformas — ~30 issues + ~15 PRs cada consertando um canto do mesmo problema.

---

## 5. Bugs e Estabilidade

### Bugs P1 (Críticos - 2 abertos)

| Issue | Severidade | Descrição | Link |
|-------|------------|-----------|------|
| #91277 | P1 | Fleet update reliability fragmentado | [Issue #91277](https://github.com/NousResearch/hermes-agent/issues/91277) |
| #89346 | P1 | Session history reload após #88734 | [Issue #89346](https://github.com/NousResearch/hermes-agent/issues/89346) |

**#89346 Detail**: Regressão causada pelo fix de DB scope em #88734. Gateway routing lê metadata da root store ao invés do profile correto, causando split session.

### Bugs P2 (Altos - 7 abertos)

| Issue | Área | Descrição | Link |
|-------|------|-----------|------|
| #93888 | Desktop/Gateway | Session restore fails com runtime ID em Remote Gateway | [Issue #93888](https://github.com/NousResearch/hermes-agent/issues/93888) |
| #92955 | CLI/Gateway | launchd KeepAlive respawn storm | [Issue #92955](https://github.com/NousResearch/hermes-agent/issues/92955) |
| #93032 | Windows | Managed-runtime repair bloqueado por lock no venv | [Issue #93032](https://github.com/NousResearch/hermes-agent/issues/93032) |
| #81484 | Desktop | "Load more" nunca aparece com pinned sessions | [Issue #81484](https://github.com/NousResearch/hermes-agent/issues/81484) |
| #84870 | Desktop | Session list mostra stale ROOT em vez de live tip | [Issue #84870](https://github.com/NousResearch/hermes-agent/issues/84870) |
| #93959 | Desktop | Branch creation hangs infinitamente | [Issue #93959](https://github.com/NousResearch/hermes-agent/issues/93959) |
| #93937 | Desktop | Gateway switcher leaks session ID | [Issue #93937](https://github.com/NousResearch/hermes-agent/issues/93937) |

### Bugs P2 Recentemente Closed

| Issue | Área | Descrição | Link |
|-------|------|-----------|------|
| #94177 | Gateway | Media image tags não inlined via OpenWebUI | [Issue #94177](https://github.com/NousResearch/hermes-agent/issues/94177) |
| #94070 | Tools/MCP | OAuth deadlock permanente após request cancelado | [Issue #94070](https://github.com/NousResearch/hermes-agent/issues/94070) |

### Bugs P3 (Médios - Relevantes)

| Issue | Área | Descrição | Link |
|-------|------|-----------|------|
| #94151 | Security | Unknown toolsets silenciosamente falha para FULL — write access | [Issue #94151](https://github.com/NousResearch/hermes-agent/issues/94151) |
| #94121 | Memory | Memory store recusa writes em legacy MEMORY.md | [Issue #94121](https://github.com/NousResearch/hermes-agent/issues/94121) |
| #94139 | Agent | codex_responses com tool_choice sem tools — 400 em xAI | [Issue #94139](https://github.com/NousResearch/hermes-agent/issues/94139) |

**⚠️ Alerta de Segurança (#94151)**: Argumento `-t none` silenciosamente produz FULL toolset, gerando write access não intencionado. Blast radius: write access.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Destacadas

| Issue | Área | Descrição | Link |
|-------|------|-----------|------|
| #85125 | Agent/Gateway | Unified deadline layer — 4 fases (arquitetural) | [Issue #85125](https://github.com/NousResearch/hermes-agent/issues/85125) |
| #93244 | Agent | RFC: Per-session storage com central pointer index | [Issue #93244](https://github.com/NousResearch/hermes-agent/issues/93244) |
| #81885 | Agent | Local cross-session messaging (intercom) | [Issue #81885](https://github.com/NousResearch/hermes-agent/issues/81885) |
| #92384 | Desktop | Combined multi-gateway Sessions view | [Issue #92384](https://github.com/NousResearch/hermes-agent/issues/92384) |
| #48375 | Desktop | Spellcheck no prompt input (👍 5) | [Issue #48375](https://github.com/NousResearch/hermes-agent/issues/48375) |
| #63924 | Vision | Native Webcam Integration (👍 0) | [Issue #63924](https://github.com/NousResearch/hermes-agent/issues/63924) |

### PRs de Feature Abertos

| PR | Título | Escopo | Link |
|----|--------|--------|------|
| #93898 | `feat(mcp): bind tool arguments to authenticated sessions` | Security/Trust gap | [PR #93898](https://github.com/NousResearch/hermes-agent/pull/93898) |
| #90963 | `fix(agent): classify Kimi K3 reasoning-replay 400 as retryable` | Provider support | [PR #90963](https://github.com/NousResearch/hermes-agent/pull/90963) |

### Sinais de Roadmap

1. **Arquitetura de Deadline (#85125)**: Projeto estrutural de 4 fases para eliminar classes inteiras de bugs timeout/hang. Avanço visível nos PRs merged hoje.
2. **Per-Session Storage (#93244)**: RFC para resolver corrupção de `state.db` compartilhado — dois eventos de corrupção em agosto.
3. **Fleet Management (#91277)**: Unificação de lógica de update multi-plataforma.
4. **Cross-Session Communication (#81885)**: Intercom entre sessões locais.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Categoria | Descrição | Evidência |
|-----------|-----------|-----------|
| **Atualização Quebrada** | Update de desktop/gateway/fleet falha regularmente | #91277, #93032, #94191, #94110 |
| **Sessões Instáveis** | Restore, branch, switch entre gateways出问题 | #93888, #89346, #93937, #93959, #84870 |
| **Windows** | Venv lock impede qualquer update | #93032 — "every hermes update fails and retries forever" |
| **Desktop** | Carregamento de sessões com pinned sessions impossibilita acesso a sessões antigas | #81484 |
| **Memory Store** | Legacy MEMORY.md rejeitado completamente | #94121 — "refuses all writes" |

### Cenários de Uso Reportados

- **Multi-gateway**: Usuários rodando múltiplos gateways remotos simultaneamente, necessidade de aggregate view (#92384)
- **SSH/Multi-profile**: Preservação de profile ownership através de SSH switches (#94192)
- **Long-running sessions**: Memory limits alcançados rapidamente (#5320 — 2200 char limit)
- **OpenWebUI Integration**: Images não renderizadas quando usado via OpenAI endpoint (#7895)

### Feedback Positivo Implícito

- Feature `/review` sendo adicionada ao Desktop com positividade (#94073)
- MCP session binding (#93898) resolving trust gap para shared agents
- Auto-fix bot (#94190) mantendo consistência

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Stalled

| Issue | Idade | Prioridade | Status | Link |
|-------|-------|------------|--------|------|
| #5320 | ~4 meses | P3 | Sem progresso visível | [Issue #5320](https://github.com/NousResearch/hermes-agent/issues/5320) |
| #48375 | ~2 meses | P3 | Sem movimento | [Issue #48375](https://github.com/NousResearch/hermes-agent/issues/48375) |
| #63924 | ~1 mês | P3 | Sem comentários | [Issue #63924](https://github.com/NousResearch/hermes-agent/issues/63924) |
| #7895 | ~4 meses | P3 | Sem solução proposta | [Issue #7895](https://github.com/NousResearch/hermes-agent/issues/7895) |

### Issues Arquiteturais Críticas

| Issue | Descrição | Risco | Link |
|-------|-----------|-------|------|
| #93244 | RFC para per-session storage — corrupção recorrente | **Alto** | [Issue #93244](https://github.com/NousResearch/hermes-agent/issues/93244) |
| #85125 | Deadline layer — 400+ issues timeout/hang | **Alto** | [Issue #85125](https://github.com/NousResearch/hermes-agent/issues/85125) |
| #91277 | Fleet update — ~30 issues + ~15 PRs | **Alto** | [Issue #91277](https://github.com/NousResearch/hermes-agent/issues/91277) |
| #66616 | Skills index degraded | **Médio** | [Issue #66616](https://github.com/NousResearch/hermes-agent/issues/66616) |

### Recomendações

1. **Priorizar #93244**: Dois eventos de corrupção em um mês — impacto produtivo real
2. **Atender #94151 (Security)**: Bug silencioso com blast radius de write access
3. **Resolver #66616**: Skills index degradado afeta documentação e DX
4. **Acelerar #91277**: Retorno rápido na experiência de update/resolução de issues fragmentadas

---

**Relatório gerado em: 2026-08-25**  
**Fonte: NousResearch/hermes-agent GitHub**

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-08-25

---

## 1. Panorama do Dia

O ecossistema PicoClaw apresenta **atividade moderada** em 25 de agosto de 2026. Nas últimas 24 horas, foram registradas 2 issues atualizadas e 3 PRs, com 2 pull requests fechados/mergeados — indicando que a equipe de manutenção continua processando o backlog de contribuições. Não houve lançamentos de novas versões, mas o projeto demonstra um ritmo estável de desenvolvimento com foco em correções de bugs e preparação de novas funcionalidades. Aissue de roadmap sobre WebUI continua atraindo atenção significativa da comunidade, enquanto um bug crítico relacionado ao Slack foi reportado recentemente.

---

## 2. Lançamentos

**Nenhum novo release nas últimas 24 horas.**

O projeto não registrou versões formalizadas no período analisado. Isso sugere que a equipe está em ciclo de desenvolvimento interno antes do próximo tag de release. Usuários em produção devem permanecer na última versão estável disponível.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados

| # | Título | Impacto | Link |
|---|--------|---------|------|
| **#1929** | `fix: apply security credentials before config validation in web handlers` | **Crítico** — Resolve falha ao salvar configuração via API quando credenciais estão em `.security.yml`. O handler validava campos antes de aplicar credenciais gerenciadas por segurança, causando erro `"channels.pico.token is required when pico channel is enabled"` mesmo com token corretamente configurado. | [PR #1929](https://github.com/sipeed/picoclaw/pull/1929) |
| **#1551** | `fix: merge PR #1428 #1422 #1417` | **Consolidação** — Une múltiplos PRs de correções pendentes em uma única proposta, limpando o backlog de contribuições e evitando conflitos futuros. | [PR #1551](https://github.com/sipeed/picoclaw/pull/1551) |

**Análise:** Ambos os PRs fechados abordam problemas de estabilidade e manutenção. O fix #1929 é particularmente relevante para usuários que dependem de configurações via API REST, representando uma regressão corrigida.

---

## 4. Temas Quentes da Comunidade

### Issue com Maior Engajamento

| # | Título | Reações | Comentários | Prioridade |
|---|--------|---------|-------------|------------|
| **#806** | `[Feature]: Add webUI support (Refactoring now)` | 👍 8 | 10 | **High / Roadmap** |

**Análise da Demanda:** A solicitação de interface web unificada (#806) permanece como a issue mais discusseda do projeto. O autor, Zepan, argumenta que a interface TUI atual, embora funcional, cria barreiras de entrada para usuários não técnicos. A propuesta visa desenvolver uma UI baseada em navegador para gerenciamento intuitivo de instâncias PicoClaw. Com 8 reações positivas e 10 comentários, há sinal claro de demanda da comunidade. O status indica que o refactoring está em andamento, sugerindo implementação futura.

**Ações Recomendadas:** A equipe de manutenção deve comunicar um roadmap claro para esta feature, dado seu alto impacto na adoção do projeto.

---

## 5. Bugs e Estabilidade

### Bug Reportado Recentemente

| # | Título | Severidade | Status |
|---|--------|------------|--------|
| **#3338** | `[BUG] Slack does not attach image media content` | **Alta** | Aberto (stale) |

**Detalhes Técnicos:**
- **Sintoma:** Uploads de mídia no Slack falham com erro `"file.upload.v2: file size cannot be 0"`
- **Causa Raiz:** O método `SendMedia` constrói `slack.UploadFileParameters` sem definir o campo `FileSize`, fazendo com que o SDK slack-go rejeite todos os uploads antes de qualquer chamada de rede
- **Versão Afetada:** picoclaw 0.3.x (inferido dos metadados)
- **Impacto:** Usuários que dependem de integração Slack para envio de imagens/arquivos estão incapazes de usar esta funcionalidade

**Ações Recomendadas:** Este bug deve ser priorizado para correção, pois afeta uma integração amplamente utilizada. A correção é relativamente direta — adicionar o campo `FileSize` durante a construção dos parâmetros de upload.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Nova Proposta Aberta

| # | Título | Tipo | Status |
|---|--------|------|--------|
| **#3299** | `Add native Exa web search provider` | Enhancement | Aberto (stale) |

**Resumo:** Proposta para adicionar Exa como provider nativo para ferramentas de busca web (`tools.web` / `web_search`). A implementação utilizaria a API `POST /search` do Exa com `type: "auto"` e `contents.highlights`, autenticando via header `X-Api-Key` e suportando os filtros existentes de range temporal (`d`/`w`/`m`/`y`).

**Sinais de Roadmap:**
- A issue #806 (WebUI) está marcada como **roadmap** e **high priority**, indicando direção estratégica do projeto
- A integração com Exa demonstra expansão das capacidades de busca, alinhando-se com tendências de agentes de IA

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Categoria | Evidência | Impacto |
|-----------|-----------|---------|
| **Barreira de entrada técnica** | Issue #806 — usuários não técnicos têm dificuldade com TUI | Moderado-Alto |
| **Integração Slack quebrada** | Issue #3338 — envio de mídia falha silenciosamente | **Alto** |
| **Configuração via API problemática** | PR #1929 — validação prematura causava erros | Moderado |

### Cenários de Uso Observados

1. **Usuários não técnicos** buscam uma alternativa à interface terminal (TUI) — demanda por acessibilidade
2. **Desenvolvedores e equipes** dependem de integrações com Slack para automação — robustez de integrações é crítica
3. **Administradores** configuram instâncias via API REST — confiabilidade da validação de configuração é essencial

### Tendência de Satisfação

A atividade recente sugere um projeto **estável mas em evolução**, com manutenção ativa. A ausência de releases nas últimas 24h pode gerar expectativa na comunidade, especialmente dado o engajamento na issue de WebUI.

---

## 8. Backlog que Merece Atenção

### Issues/PRs Sem Resposta há Tempo

| # | Tipo | Título | Status | Observação |
|---|------|--------|--------|------------|
| **#3338** | Bug | `Slack does not attach image media content` | Aberto (stale) | 1 comentário, sem resposta da equipe |
| **#3299** | Enhancement | `Add native Exa web search provider` | Aberto (stale) | Sem comentários da maintainers |

**Análise:** Duas issues críticas para a evolução do projeto estão em estado **stale** (sem atividade recente da equipe). O status "stale" indica que nenhuma atualização foi feita pela equipe de manutenção nos últimos dias, o que pode desmotivar contribuidores.

**Ações Recomendadas:**

1. **Priorizar triagem do bug Slack (#3338)** — Impacta funcionalidade de produção
2. **Avaliar viabilidade do PR #3299** — Feedback da equipe aceleraria decisão
3. **Comunicação proativa** — Mesmo uma resposta breve indicando "considerando para vX.Y" mantém comunidade engajada

---

## Métricas Consolidada (Últimas 24h)

| Indicador | Valor |
|-----------|-------|
| Issues abertas/ativas | 2 |
| Issues fechadas | 0 |
| PRs abertos | 1 |
| PRs merged/fechados | 2 |
| Novas releases | 0 |
| Issue com maior engajamento | #806 (8 👍, 10 💬) |
| Bug crítico pendente | #3338 (Slack media) |

---

**Relatório gerado em:** 2026-08-25  
**Fonte:** github.com/sipeed/picoclaw  
**Próxima atualização recomendada:** 2026-08-26

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-08-25

---

## 1. Panorama do Dia

O IronClaw manteve um alto nível de atividade nas últimas 24 horas, com **21 issues** e **36 PRs** atualizados. A equipe focou em闭幕 de trabalhos de dogfooding e QA (conforme o epic semanal #7843), além de progressos significativos em UX/webui e automações. Dez PRs foram fechados/merged, incluindo melhorias críticas no cache do sistema e no fluxo de sugestões onboarding. Não houve releases formais hoje, mas as contribuições indicam maturidade crescente do código-base, especialmente na estabilização de fluxos de UI e na arquitetura de automações.

---

## 2. Lançamentos

**Nenhum release nas últimas 24h.** O projeto não publicou novas versões formais hoje.last

---

## 3. Progresso do Projeto

### PRs fechados/merged hoje:

| PR | Título | Tamanho | Destaque |
|----|--------|---------|----------|
| [#7833](https://github.com/nearai/ironclaw/pull/7833) | feat(suggestions): generate over the user's no-approval, read-only tools | L | **Fechou #7812** — Sugestões agora são geradas com acesso às ferramentas conectadas do usuário, respeitando permissões de leitura |
| [#7857](https://github.com/nearai/ironclaw/pull/7857) | fix(webui): refresh conversations after starting suggestion | S | Corrige UX onde threads de sugestões não apareciam no painel lateral |
| [#7854](https://github.com/nearai/ironclaw/pull/7854) | fix(webui): remove Gateway v2 login eyebrow | S | Limpa UI legada do login |
| [#7001](https://github.com/nearai/ironclaw/pull/7001) | feat(loop): keep the cached system prefix byte-stable | XL | **Fechou #6985** — Corrige invalidação desnecessária de cache por nudges e timestamps |
| [#7794](https://github.com/nearai/ironclaw/pull/7794) | refactor(webui): shared page shell and loading primitives | L | Padroniza layout e skeletons em Automations, Extensions, Admin e Settings |
| [#7650](https://github.com/nearai/ironclaw/pull/7650) | feat(automations): derive run outcomes from runtime evidence | XL | Substitui julgamento semântico por avaliação determinística baseada em evidências |
| [#7795](https://github.com/nearai/ironclaw/pull/7795) | refactor(webui): migrate settings and admin notices | L | Centraliza notificações no componente InlineNotice |
| [#7844](https://github.com/nearai/ironclaw/pull/7844) | fix(ci): restore main coverage and WebUI checks | S | Recupera floors de coverage perdidos |
| [#7728](https://github.com/nearai/ironclaw/pull/7728) | fix(google-docs): add semantic editing tools | XL | Adiciona 4 capacidades semânticas ao Google Docs (inspeção, edição, tabelas, verificação) |
| [#7792](https://github.com/nearai/ironclaw/issues/7792) | Introduce shared page-shell and loading primitives | — | Issue de referência para refatoração de UI (merged como parte de #7794) |

### PRs abertos de destaque (arquitetura):

- [#7456](https://github.com/nearai/ironclaw/pull/7456) — **fix(reborn): make durable storage profile-agnostic** (XL, medium risk): Reorganiza namespaces de storage em `IRONCLAW_REBORN_HOME`
- [#7810](https://github.com/nearai/ironclaw/pull/7810) — **feat(sandbox): manifest-declared direct-exec credential bindings**: Permite CLIs credenciadas (ex: `gh`) sem expor tokens no ambiente
- [#7821](https://github.com/nearai/ironclaw/pull/7821) — **ci: single setup-rust composite**: Unifica toolchain e build profiles para eliminar drift local vs CI
- [#7765](https://github.com/nearai/ironclaw/pull/7765) — **feat(hooks): AfterTurn lifecycle point + memory curation** (phase 1 de #7770)

---

## 4. Temas Quentes da Comunidade

### Issues com mais engajamento (comentários + reação):

1. **[#7812](https://github.com/nearai/ironclaw/issues/7812)** — *"Onboarding suggestions: respect user-level tool permissions"*  
   - **Status:** Closed ✅  
   - **Comentários:** 3 | 👍: 0  
   - **Análise:** Demanda central para que sugestões sejam geradas com contexto real dos dados do usuário (ferramentas conectadas), não apenas ferramentas internas. **Resolvido com #7833.**

2. **[#7297](https://github.com/nearai/ironclaw/issues/7297)** — *"Error messages stack up in UI after every failed prompt"*  
   - **Status:** Open | Prioridade: P2  
   - **Comentários:** 2  
   - **Análise:** Bug de UX que degrada experiência em instâncias de QA. Usuários relatam acúmulo de mensagens de erro (service_unavailable, runner heartbeat failures) sem limpeza.

3. **[#7742](https://github.com/nearai/ironclaw/issues/7742)** — *"feat(automations): bound creation preflight and surface missing prerequisites"*  
   - **Status:** Closed ✅  
   - **Comentários:** 2  
   - **Análise:** Melhora arquitetura de automações distinguindo criação de execução, exigindo contrato claro antes de persistência.

4. **[#7845](https://github.com/nearai/ironclaw/issues/7845)** — *"Activating a suggested task fails to create/render its thread entry in the left panel"*  
   - **Status:** Open  
   - **Comentários:** 1  
   - **Análise:** Bug饭 UX relacionado ao fluxo de onboarding. Threads são criados mas não aparecem no sidebar até navegação manual. **Parcialmente corrigido em #7857.**

5. **[#7815](https://github.com/nearai/ironclaw/issues/7815)** — *"Epic: Onboarding suggestions: cumulative net-new work"*  
   - **Status:** Open | Epic  
   - **Comentários:** 1  
   - **Análise:** Epic agrega múltiplas melhorias no fluxo connect → suggest → thread. Integra trabalhos de #7693, #7694, #6994.

---

## 5. Bugs e Estabilidade

### Por severidade:

#### 🔴 Alta / P0-P1:
*(Nenhuma issue P0-P1 aberta diretamente)*

#### 🟡 Média / P2:
- **[#7297](https://github.com/nearai/ironclaw/issues/7297)** — *Error messages stack up in UI* (bug_bash_P2)  
  - Impacto: UI poluída com mensagens antigas após falhas; afeta percepção de estabilidade

#### 🟢 Baixa / P3+:
| Issue | Descrição | Impacto |
|-------|-----------|---------|
| [#7856](https://github.com/nearai/ironclaw/issues/7856) | MCP tool discovery skips camelCase tool names | Ferramentas podem não ser descobertas corretamente |
| [#7853](https://github.com/nearai/ironclaw/issues/7853) | Telegram personal account linking broken (missing tool) | Fluxo de setup incompleto |
| [#7842](https://github.com/nearai/ironclaw/issues/7842) | Generic "invalid result" error durante execução | Erro vago dificulta debug |
| [#7841](https://github.com/nearai/ironclaw/issues/7841) | Telegram setup dead-ends on "admin must configure" | Setup trava em estado inválido |
| [#7845](https://github.com/nearai/ironclaw/issues/7845) | Suggested task thread entry not rendered in sidebar | UX quebrada no onboarding |

### Análise de estabilidade:
- **CI/Main:** Issue [#7851](https://github.com/nearai/ironclaw/issues/7851) ("Fix main branch CI failures 20260824") foi aberta e fechada rapidamente. PR #7852 investigou falha E2E no T1, isolando ao profile change.
- **Benchmarking:** Issue [#7848](https://github.com/nearai/ironclaw/issues/7848) documenta 65 failures no officeqa suite, predominantemente erros de qualidade do modelo DeepSeek-V4-Flash em OCR.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features abertas:

1. **[#7855](https://github.com/nearai/ironclaw/issues/7855)** — *Add Italian language support*  
   - Solicitação de internacionalização (i18n) para expandir base de usuários

2. **[#7849](https://github.com/nearai/ironclaw/issues/7849)** — *feat(extensions): bundle an agent-first GSuite CLI*  
   - **Prioridade:** suggested_P1 | Scope: v1.4.0  
   - Melhora Google Workspace expondo CLI mais integrada ao agente (list Gmail retorna dados, não IDs)

3. **[#7853](https://github.com/nearai/ironclaw/issues/7853)** — *Telegram personal account linking*  
   - Ferramenta missing no setup flow; precisa implementar

4. **[#7825](https://github.com/nearai/ironclaw/issues/7825)** — *Sandbox egress auth: retire GitHub-specific carve-out*  
   - Generaliza iron-proxy recipes além de `gh`

5. **[#6774](https://github.com/nearai/ironclaw/issues/6774)** — *Document Gmail CLI-based setup in Extensions UI*  
   - Documentação de setup terminal para Gmail

### Sinais de roadmap (baseado em issues epic e parent):

- **v1.3.0:** Foco em automations (#7742 fechado), onboarding suggestions (#7815 epic)
- **v1.4.0:** GSuite CLI bundling (#7849), subagent background mode (#7818)
- **General:** Hooks lifecycle (#7765), AfterTurn point, memory curation

---

## 7. Resumo de Feedback dos Usuários

### Issues de feedback (x-ai-product-feedback):

| Issue | Tipo | Descrição |
|-------|------|-----------|
| [#7842](https://github.com/nearai/ironclaw/issues/7842) | Bug | *"Generic invalid result error during request execution"* |
| [#7841](https://github.com/nearai/ironclaw/issues/7841) | Bug | *"Telegram setup dead-ends on admin must configure"* |
| [#7840](https://github.com/nearai/ironclaw/issues/7840) | Enhancement | *"Slack: connect guidance gap"* — app não guia usuário a conectar Slack |

### Análise de dores:

1. **Setup/Telegram:** Usuários encontram dead-ends ao configurar integrações (Slack guidance, Telegram personal linking). Evidencia necessidade de wizards de setup mais robustos.

2. **Mensagens de erro:** Erros genéricos ("invalid result") frustram debug. Necessidade de erros mais descritivos.

3. **Gmail setup:** Usuários não encontram caminho para configurar Gmail via CLI, falta documentação in-app (issue #6774).

4. **Onboarding flow:** Após avanços em #7833 e #7857, ainda há gaps de UX (#7845) no painel lateral.

---

## 8. Backlog que Merece Atenção

### Issues abertas há >7 dias sem movimento:

| Issue | Criação | Atualização | Days Idle | Prioridade | Descrição |
|-------|---------|-------------|-----------|------------|-----------|
| [#6774](https://github.com/nearai/ironclaw/issues/6774) | 2026-07-28 | 2026-08-24 | ~27d | enhancement | Document Gmail terminal-based setup |
| [#7297](https://github.com/nearai/ironclaw/issues/7297) | 2026-08-06 | 2026-08-24 | ~18d | P2 | Error messages stack up in UI |
| [#6985](https://github.com/nearai/ironclaw/issues/6985) | 2026-08-01 | 2026-08-24 | ~23d | P0 | Cache mutating prompt prefix (**AGORA FECHADO via #7001**) |

### PRs grandes sem merge há >5 dias:

| PR | Criação | Tamanho | Risco | Status | Descrição |
|----|---------|---------|-------|--------|-----------|
| [#7456](https://github.com/nearai/ironclaw/pull/7456) | 2026-08-10 | XL | medium | OPEN | Durable storage profile-agnostic |
| [#7810](https://github.com/nearai/ironclaw/pull/7810) | 2026-08-21 | XL | low | OPEN | Sandbox credential bindings via iron-proxy |
| [#7821](https://github.com/nearai/ironclaw/pull/7821) | 2026-08-22 | XL | medium | OPEN | CI single setup-rust composite |
| [#7516](https://github.com/nearai/ironclaw/pull/7516) | 2026-08-12 | XL | low | OPEN | Operator surface for IronHub agent link |
| [#7765](https://github.com/nearai/ironclaw/pull/7765)

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do Projeto CoPaw — 25 de agosto de 2026

---

## 1. Panorama do Dia

O CoPaw (QwenPaw) mantém um ritmo de desenvolvimento intenso e saudável. Nas últimas 24 horas, o projeto registrou **50 issues atualizadas** (31 abertas, 19 fechadas) e **49 PRs atualizados** (20 abertos, 29 merged/fechados), acompanhados de **1 novo release** (v2.1.1-beta.2). A atividade reflete um ecossistema ativo, com forte foco em estabilidade (múltiplos bugs de memory leak e race conditions em correção) e em melhorias de experiência do usuário (agregação de mensagens, preload de skills, configuração por canal). A comunidade demonstra particular interesse em funcionalidades multi-agente e em resolver problemas de longa data, como a ausência de webhook e o isolamento entre sessões.

---

## 2. Lançamentos

### ✅ v2.1.1-beta.2

**Mudanças registradas no CHANGELOG:**

| # | Descrição | Autor | PR |
|---|-----------|-------|----|
| 1 | Adição de *artifacts* ao cartão de resposta do assistente no Console | @zhijianma | [#7161](https://github.com/agentscope-ai/QwenPaw/pull/7161) |
| 2 | Correção de entrega de vídeos de resultado de ferramentas na OpenAI Responses API | @xiaoka76 | [#7061](https://github.com/agentscope-ai/QwenPaw/pull/7061) |

**Observações:**
- Release beta focado em estabilidade do Console e integração com APIs externas.
- Não foram identificadas *breaking changes* ou notas de migração no escopo desta release.
- A adição de *artifacts* ao cartão de resposta indica evolução na visualização de conteúdo gerado.

---

## 3. Progresso do Projeto

### PRs Merge/Closed Relevantes (últimas 24h)

| PR | Tipo | Impacto | Link |
|----|------|---------|------|
| **#7234** | Bug fix | Restaura o job `optimize_index_cron` do ReMe, corrigindo acúmulo de slots BM25 órfãos e entradas de posting após deleção. | [PR #7234](https://github.com/agentscope-ai/QwenPaw/pull/7234) |
| **#7173** | Test fix | Repara seletores de células de ação dos agents e segue renomeação da API de diretório de projetos nos testes e2e. | [PR #7173](https://github.com/agentscope-ai/QwenPaw/pull/7173) |
| **#7248** | CI/CD | Deriva a versão de contorno do Docker automaticamente de `src/qwenpaw/__version__.py`, eliminando *hard-coding*. | [PR #7248](https://github.com/agentscope-ai/QwenPaw/pull/7248) |
| **#7247** | Bug fix | Corrige detecção de capacidade multimodal para modelos SiliconFlow DeepSeek V4. | [PR #7247](https://github.com/agentscope-ai/QwenPaw/pull/7247) |
| **#7245** | Chore | Remove lembrete de modo desktop do Console. | [PR #7245](https://github.com/agentscope-ai/QwenPaw/pull/7245) |
| **#6067** | Feature | Adiciona arquivos mais sensíveis e permite leitura global. | [PR #6067](https://github.com/agentscope-ai/QwenPaw/pull/6067) |
| **#7167** | Feature | Creator 1.1.0: provedores mainstream de imagem/vídeo, protocolos Anthropic/Gemini, dispatch de vídeo por diálogo, biblioteca expandida, cópia de projetos, uploads de 2GB e endurecimento de confiabilidade. | [PR #7167](https://github.com/agentscope-ai/QwenPaw/pull/7167) |
| **#7181** | Enhancement | Suporte a Qwen_Code como *third-party agent harness*. | [PR #7181](https://github.com/agentscope-ai/QwenPaw/pull/7181) |
| **#7230** | Enhancement | Compressão de contexto movida para execução em tempo ocioso (não durante tarefas ativas). | [PR #7230](https://github.com/agentscope-ai/QwenPaw/pull/7230) |

**Destaque:** A restauração do job de compactação de índice ReMe (#7234) endereça um problema de degradação de memória de longo prazo. O PR #7167 (Creator 1.1.0) representa a maior agregação de funcionalidades do período.

---

## 4. Temas Quentes da Comunidade

### Issues e PRs com Maior Engajamento

| # | Título | Tipo | Comentários | 👍 | Link |
|---|--------|------|:-----------:|:--:|------|
| #6921 | Multi-step tasks param sem aviso ao output "Now 2.1, 3.1..." | Bug | 11 | 0 | [Issue #6921](https://github.com/agentscope-ai/QwenPaw/issues/6921) |
| #6782 | Docker 2.0.1 — Plugin/App Market sempre em manutenção | Bug | 9 | 0 | [Issue #6782](https://github.com/agentscope-ai/QwenPaw/issues/6782) |
| #338 | Solicitar funcionalidade webhook | Enhancement | 8 | 1 | [Issue #338](https://github.com/agentscope-ai/QwenPaw/issues/338) |
| #7011 | Console stop request cancela sessão Feishu ativa | Bug | 8 | 0 | [Issue #7011](https://github.com/agentscope-ai/QwenPaw/issues/7011) |
| #3224 | CoPaw Agent Teams — colaboração multi-agente autoevolutiva | Enhancement | 7 | 0 | [Issue #3224](https://github.com/agentscope-ai/QwenPaw/issues/3224) |
| #5563 | Agregar respostas multi-step para evitar spam de mensagens | Enhancement | 6 | 0 | [Issue #5563](https://github.com/agentscope-ai/QwenPaw/issues/5563) |
| #7224 | Como integrar Aider CLI como agente | Question | 6 | 0 | [Issue #7224](https://github.com/agentscope-ai/QwenPaw/issues/7224) |
| #7085 | Configuração de modelo por canal | Enhancement | 5 | 0 | [Issue #7085](https://github.com/agentscope-ai/QwenPaw/issues/7085) |
| #5720 | Memory leak na v1.1.12.post2 | Bug | 5 | 0 | [Issue #5720](https://github.com/agentscope-ai/QwenPaw/issues/5720) |

### Análise das Demandas

**🔴 Problemas de estabilidade recorrentes:**
- Memory leaks em múltiplas camadas (v1.1.12.post2: ~5.5MB/min; backend longo prazo: até 20GB+) — [Issue #5720](https://github.com/agentscope-ai/QwenPaw/issues/5720), [Issue #7222](https://github.com/agentscope-ai/QwenPaw/issues/7222)
- Race conditions em sessões paralelas do Console — [Issue #7011](https://github.com/agentscope-ai/QwenPaw/issues/7011), [Issue #7231](https://github.com/agentscope-ai/QwenPaw/issues/7231)

**🟡 Melhorias de UX multi-agente:**
- Agentes param após planejar próxima ação sem executar ("Now 2.1, 3.1...") — [Issue #6921](https://github.com/agentscope-ai/QwenPaw/issues/6921)
- Agregação de mensagens fragmentadas durante execução de tarefas — [Issue #5563](https://github.com/agentscope-ai/QwenPaw/issues/5563)
- Compressão de contexto durante tarefas ativas causa interrupções — [Issue #7230](https://github.com/agentscope-ai/QwenPaw/issues/7230) ✅ corrigido

**🟢 Feature requests estratégicos:**
- **Webhook nativo** — [Issue #338](https://github.com/agentscope-ai/QwenPaw/issues/338) (aberta desde 2026-03-02, 8 comentários)
- **CoPaw Agent Teams** — colaboração multi-agente autoevolutiva por linguagem natural — [Issue #3224](https://github.com/agentscope-ai/QwenPaw/issues/3224)
- **Modelo por canal** — diferentes LLMs para Feishu, DingTalk, Console — [Issue #7085](https://github.com/agentscope-ai/QwenPaw/issues/7085)
- **Suporte a banco relacional** para armazenamento de sessões — [Issue #3425](https://github.com/agentscope-ai/QwenPaw/issues/3425)
- **Microsoft Teams como canal** — [Issue #3425](https://github.com/agentscope-ai/QwenPaw/issues/3425)

---

## 5. Bugs e Estabilidade

### Por Severidade

#### 🔴 Críticos (impacto produtivo)

| # | Descrição | Desde | Comentários | Link |
|---|-----------|-------|:-----------:|------|
| #7222 | Backend memory cresce sem limite → 20GB+ após 2 dias (v2.1.0) | 2026-08-23 | 3 | [Issue #7222](https://github.com/agentscope-ai/QwenPaw/issues/7222) |
| #7242 | Dashboard demora 6+ min para carregar com 74 agentes | 2026-08-24 | 2 | [Issue #7242](https://github.com/agentscope-ai/QwenPaw/issues/7242) |
| #6822 | Falha transitória de conexão MCP bloqueia conversa indefinidamente | 2026-08-08 | 2 | [Issue #6822](https://github.com/agentscope-ai/QwenPaw/issues/6822) |

#### 🟠 Altos (afeta fluxos principais)

| # | Descrição | Desde | Comentários | Link |
|---|-----------|-------|:-----------:|------|
| #6921 | Agente para após planejar ("Now 2.1, 3.1...") sem executar | 2026-08-12 | 11 | [Issue #6921](https://github.com/agentscope-ai/QwenPaw/issues/6921) |
| #5720 | Memory leak: 150MB → 580MB após 64 min (v1.1.12.post2) | 2026-07-02 | 5 | [Issue #5720](https://github.com/agentscope-ai/QwenPaw/issues/5720) |
| #7011 | Stop request do Console cancela sessão Feishu ativa | 2026-08-14 | 8 | [Issue #7011](https://github.com/agentscope-ai/QwenPaw/issues/7011) |
| #7231 | Mensagem enviada para sessão errada ao trocar abas/páginas | 2026-08-24 | 2 | [Issue #7231](https://github.com/agentscope-ai/QwenPaw/issues/7231) |
| #7210 | Ferramentas não injetadas no schema de funções do agente | 2026-08-21 | 2 | [Issue #7210](https://github.com/agentscope-ai/QwenPaw/issues/7210) |

#### 🟡 Médios

| # | Descrição | Desde | Comentários | Link |
|---|-----------|-------|:-----------:|------|
| #7136 | Nome de arquivo com caracteres não-ASCII aparece com mojibake codificado | 2026-08-19 | 2 | [Issue #7136](https://github.com/agentscope-ai/QwenPaw/issues/7136) |
| #7199 | `daily_paper` crash em PDFs com caracteres surrogados (U+D800–U+DFFF) | 2026-08-21 | 2 | [Issue #7199](https://github.com/agentscope-ai/QwenPaw/issues/7199) |
| #7121 | Teste flaky em macOS (sibling sessions) — nightly | 2026-08-18 | 2 | [Issue #7121](https://github.com/agentscope-ai/QwenPaw/issues/7121) ✅ closed |

**Nota:** A Issue #7237 ([PR #7237](https://github.com/agentscope-ai/QwenPaw/pull/7237)) endereça o problema de *session-identity races* com um fix no Console, indicando que a equipe está ativamente trabalhando nesses problemas.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em Revisão/Desenvolvimento

| PR | Feature | Escopo | Link |
|----|---------|--------|------|
| #7219 | Gráfico de tendência de LLM e tool-calls por agente no Token Usage | Console | [PR #7219](https://github.com/agentscope-ai/QwenPaw/pull/7219) |
| #6399 | Painel UI de configuração de reranker no ReMeLightMemoryCard | Console | [PR #6399](https://github.com/agentscope-ai/QwenPaw/pull/6399) |
| #7183 | Política de preload de Skills por workspace | Core | [PR #7183](https://github.com/agentscope-ai/QwenPaw/pull/7183) |
| #6960 | Importação de agentes de Codex e Qoder (instruções, skills, plugins, projetos) | Importação | [PR #6960](https://github.com/agentscope-ai/QwenPaw/pull/6960) |
| #7080 | Backend de memória de longo prazo opcional via PowerContext | Memória | [PR #7080](https://github.com/agentscope-ai/QwenPaw/pull/7080) |
| #7066 | Persistência de refresh_token rotacionado para OAuth2 (providers XMind etc.) | OAuth2 | [PR #7066](https://github.com/agentscope-ai/QwenPaw/pull/7066) |

### Sinais de Roadmap (Issues Abertas de Alta Prioridade)

| # | Feature | Justificativa Estratégica | Link |
|---|---------|--------------------------|------|
| #338 | **Webhook nativo** | Integração com sistemas externos; demanda antiga (aberta desde mar/2026) | [Issue #338](https://github.com/agentscope-ai/QwenPaw/issues/338) |
| #3224 | **CoPaw Agent Teams** | Colaboração multi-agente autoevolutiva por linguagem natural; diferenciação de mercado | [Issue #3224](https://

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-08-25

## 1. Panorama do dia

ZeroClaw apresenta altíssima atividade nas últimas 24h, com **50 issues e 50 PRs atualizados**, sem nenhuma release nova. A comunidade concentra esforços massivos na **implementação do milestone OIDC (RFC #8289, estágios 3–6)**, visível na sequência de PRs empilhados (#10248 → #10255 → #10259 → #10263 → #10265 → #10268 → #10270 → #10274 → #10275 → #10321). Doze bugs de severidade P1/P2 estão em progresso, incluindo um **bug de segurança de risco crítico** no bypass de `block_high_risk_commands` (#10165). A saúde geral do projeto é ativa, porém com risco de acúmulo de PRs empilhados e dependências pendentes de review.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.** O projeto está em ciclo de desenvolvimento intenso sem_TAG deVersionamento momentâneo, consistente com o período de integração de funcionalidades de segurança OIDC.

---

## 3. Progresso do Projeto

### PRs fechados/merged hoje (2)
| # | Título | Tipo | Contribuidor | Observação |
|---|--------|------|-------------|------------|
| [#9941](https://github.com/zeroclaw-labs/zeroclaw/pull/9941) | fix(cron): default cron delivery to the originating channel alias | bug fix | wromansky | Corrige entrega de cron para `channel type` em vez de `channel alias` |
| [#10190](https://github.com/zeroclaw-labs/zeroclaw/pull/10190) | [Bug]: Reasoning fallback classifier matches unrelated compound error clauses | bug fix | Audacity88 | Corrige classificador de fallback de reasoning em Azure OpenAI |
| [#10224](https://github.com/zeroclaw-labs/zeroclaw/pull/10224) | [Bug]: Custom provider 5xx errors are logged as duplicated escaped JSON | bug fix | Audacity88 | Remove duplicação de JSON em erros de provider OpenAI-compatible |
| [#10251](https://github.com/zeroclaw-labs/zeroclaw/issues/10251) | Repeat parallel runtime tests: telegram listen_* tests assert on wall-clock timeouts | test fix | MannXo | Follow-up de #9429 — testes Telegram flakiness |
| [#9590](https://github.com/zeroclaw-labs/zeroclaw/issues/9590) | [Bug]: Concurrent models refresh runs can lose cache entries | bug fix | Project516 | Corrige race condition no cache de modelos |
| [#10106](https://github.com/zeroclaw-labs/zeroclaw/issues/10106) | [Bug]: Exact proxy selectors reject supported transcription services | bug fix | Audacity88 | Permite transcrição via proxy |
| [#9942](https://github.com/zeroclaw-labs/zeroclaw/pull/9942) | fix(vi): report the withheld vi_verify tool through the config surface | bug fix | AngryPacifist | Melhora notificação de ferramenta retida |

### PRs abertos de destaque (pipeline OIDC — RFC #8289)

| # | Estágio | Título | Tamanho | Risco |
|---|---------|--------|---------|-------|
| [#10321](https://github.com/zeroclaw-labs/zeroclaw/pull/10321) | 5 | feat(security): browser PKCE and cross-surface enrollment API | XL | high |
| [#10275](https://github.com/zeroclaw-labs/zeroclaw/pull/10275) | 6 | refactor(security): retire Nevis/iam_policy com config shim | L | medium |
| [#10274](https://github.com/zeroclaw-labs/zeroclaw/pull/10274) | 5 | feat(gateway): route-layer auth com principal consumption | L | high |
| [#10270](https://github.com/zeroclaw-labs/zeroclaw/pull/10270) | 5 | feat(cli): browserless OIDC enrollment via device grant | M | medium |
| [#10268](https://github.com/zeroclaw-labs/zeroclaw/pull/10268) | 4 | feat(security): private principal memory com storage-level isolation | L | high |
| [#10265](https://github.com/zeroclaw-labs/zeroclaw/pull/10265) | 4 | feat(security): principal-owned sessions com predicated storage deletes | XL | high |
| [#10259](https://github.com/zeroclaw-labs/zeroclaw/pull/10259) | 3 | feat(security): enforce authenticated principals on RPC com native+peercred | XL | high |
| [#10255](https://github.com/zeroclaw-labs/zeroclaw/pull/10255) | 5 | feat(security): oidc.<alias> token-verification provider | L | medium |
| [#10248](https://github.com/zeroclaw-labs/zeroclaw/pull/10248) | 2 | feat(security): canonical principals and shared grant resolution | L | medium |

> ⚠️ **Atenção:** 9 PRs dependem de revisão e merge ordenado (empilhados). Qualquer bloqueio no pipeline de review pode causar efeitos cumulativos.

### Outros PRs relevantes abertos

| # | Título | Tipo | Contribuidor | Tamanho | Risco |
|---|--------|------|-------------|---------|-------|
| [#10325](https://github.com/zeroclaw-labs/zeroclaw/pull/10325) | feat(runtime): pre-turn tool-elicitation hints (2/2) | feature | mov-xound-glitch | — | — |
| [#10304](https://github.com/zeroclaw-labs/zeroclaw/pull/10304) | feat(docs): generate PR review policy zones | docs | JordanTheJet | L | low |
| [#10205](https://github.com/zeroclaw-labs/zeroclaw/pull/10205) | feat(android): add native tools and standalone app | feature | JordanTheJet | XL | high |
| [#9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109) | feat(providers): add native Hailo-Ollama support | feature | vadelma-agent | XL | medium |
| [#10177](https://github.com/zeroclaw-labs/zeroclaw/pull/10177) | fix(cron): make agent-scoped cron mutations atomic | bug fix | wromansky | S | high |
| [#9948](https://github.com/zeroclaw-labs/zeroclaw/pull/9948) | fix(cron): scope the cron tools to the calling agent | bug fix | wromansky | M | high |
| [#9338](https://github.com/zeroclaw-labs/zeroclaw/pull/9338) | feat(provider): add Crusoe Managed Inference | provider | chekolyn | S | medium |
| [#9963](https://github.com/zeroclaw-labs/zeroclaw/pull/9963) | feat(vi): add SD-JWT disclosure resolution and reference test vectors | feature | AngryPacifist | L | high |

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (por comentários)

| # | Título | Comentários | Status | Link |
|---|--------|------------|--------|------|
| [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) | RFC: ZeroClaw Chat Completions profile | **24** | OPEN | Proposta de compatibilidade com OpenAI Chat Completions (Open WebUI, LobeChat, Continue.dev, LangChain, etc.) — **RFC em status accepted** |
| [#7431](https://github.com/zeroclaw-labs/zeroclaw/issues/7431) | Feature: Add pre-turn tool elicitation hints | **6** | OPEN | Detecção de intents de roteamento em linguagem natural antes da chamada LLM |
| [#9512](https://github.com/zeroclaw-labs/zeroclaw/issues/9512) | Feature: Annotate each bespoke CI gate with issue/incident | **5** | OPEN | Convenção de documentação de gates CI customizados |

### Análise dos temas quentes

**1. Chat Completions API (#8603)** — Com 24 comentários, este é o RFC de maior atenção da comunidade. A demanda é por **compatibilidade com o protocolo OpenAI Chat Completions**, o que abriria ZeroClaw para um ecossistema massivo de clientes (Open WebUI, LobeChat, Continue.dev, Aider, LangChain, SDKs OpenAI). Isso representa uma **mudança estratégica de protocolo de comunicação** (de WebSocket/ACP para REST/Streaming).

**2. Pre-turn tool elicitation (#7431)** — Issue com 6 comentários sobre detecção de intent antes da chamada LLM principal, permitindo roteamento em linguagem natural. O PR #10325 (2/2) já está em.stack, indicando implementação em curso.

**3. CI gate annotations (#9512)** — Demanda de documentação de gates CI customizados para facilitar manutenção futura.

---

## 5. Bugs e Estabilidade

### Bugs P1 — Críticos (ação imediata recomendada)

| # | Título | Severidade | Status | Link |
|---|--------|------------|--------|------|
| [#10165](https://github.com/zeroclaw-labs/zeroclaw/issues/10165) | independent delegate bypasses `block_high_risk_commands` | **S0** (data loss / security) | in-progress | `rm` e outros comandos de alto risco passam pelo delegate mesmo com `risk_profile.block_high_risk_commands = true` |
| [#10257](https://github.com/zeroclaw-labs/zeroclaw/issues/10257) | cron update --command writes unused column on agent jobs | **S2** | in-progress | PATCH `/api/cron/:id` sobrescreve `payload` com `command` em vez de agregar — pode causar perda de config |
| [#10223](https://github.com/zeroclaw-labs/zeroclaw/issues/10223) | ZeroCode drops Ctrl+C and blocks input while reconnecting | **S1** (workflow blocked) | in-progress | Durante reconnect, input fica totalmente bloqueado — workflow do usuário interrompido |

### Bugs P2 — Degradados (alta prioridade)

| # | Título | Severidade | Status | Link | Área |
|---|--------|------------|--------|------|------|
| [#10068](https://github.com/zeroclaw-labs/zeroclaw/issues/10068) | Interactive agent session caps context at 32,000 tokens | S2 | in-progress | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/10068) | runtime/daemon |
| [#10073](https://github.com/zeroclaw-labs/zeroclaw/issues/10073) | Retire StoragePolicy::Rolling — performance regression | S2 | in-progress | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/10073) | observability/log |
| [#9812](https://github.com/zeroclaw-labs/zeroclaw/issues/9812) | Provider fallback carries primary's model id — never fires | S2 | stale | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/9812) | provider/router |
| [#10199](https://github.com/zeroclaw-labs/zeroclaw/issues/10199) | plugin egress connect-deadline cannot cancel blocking getaddrinfo | S2 | accepted | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/10199) | runtime:wasm |
| [#10237](https://github.com/zeroclaw-labs/zeroclaw/issues/10237) | Telegram reply-threads fragment conversation memory | S2 | open | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/10237) | channel:telegram |
| [#10232](https://github.com/zeroclaw-labs/zeroclaw/issues/10232) | Daemon diagnostics drop the underlying error chain | S2 | in-progress | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/10232) | runtime/daemon |
| [#10175](https://github.com/zeroclaw-labs/zeroclaw/issues/10175) | Mark Google TTS API key header as sensitive | S2 | in-progress | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/10175) | channel (security) |
| [#10249](https://github.com/zeroclaw-labs/zeroclaw/issues/10249) | Duplicate webhook handling logs raw caller-controlled idempotency keys | S3 | in-progress | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/10249) | gateway |
| [#10178](https://github.com/zeroclaw-labs/zeroclaw/issues/10178) | daemon socket ownership error does not identify active owner | S2 | in-progress | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/10178) | daemon/zerocode |
| [#10202](https://github.com/zeroclaw-labs/zeroclaw/issues/10202) | Records from log-based dependencies never reach tracing subscriber | S2 | in-progress | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/10202) | observability/log |
| [#10162](https://github.com/zeroclaw-labs/zeroclaw/issues/10162) | plugin install persists before config-entry seeding — cannot retry | S2 | in-progress | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/10162) | runtime/wasm |

### Issues de teste/infra (P2)

| # | Título | Status | Link |
|---|--------|--------|------|
| [#10272](https://github.com/zeroclaw-labs/zeroclaw/issues/10272) | correlate Hailo log assertions under parallel tests | in-progress | PR #9109 em revisão |
| [#10251](https://github.com/zeroclaw-labs/zeroclaw/issues/10251) | 17 telegram listen_* tests assert wall-clock timeouts | closed | Seguimento de #9429 |

> 📊 **Resumo de bugs:** 3

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*