# Resumo diário do ecossistema de agentes de IA 2026-09-15

> Issues: 4 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-09-14 22:55 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório do Projeto NullClaw — 2026-09-15

---

## 1. Panorama do Dia

NullClaw mantém um nível moderado de atividade com **4 issues abertas** nas últimas 24h e **nenhuma atividade de PR** ou release. O projeto segue em desenvolvimento contínuo com foco em **extensibilidade de provedores**: duas issues recentes (#997, #998) propõem integrações com serviços prepaid para busca web, sinalizando demanda por alternativas mais flexíveis de conectividade externa. A ausência de PRs merged sugere que o código-base está em um período de compilação de demandas da comunidade antes de uma próxima iteração.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto não publicou novas versões. A última atividade de release não foi informada neste período, indicando possivelmente um intervalo entre ciclos de publicação.

---

## 3. Progresso do Projeto

**Nenhum PR merged ou fechado nas últimas 24h.**

A base de código não recebeu contribuições mergeadas no período analisado. Isso pode indicar:
- Período de review/discussão de PRs pendentes
- Foco atual em planejamento de arquitetura (evidenciado pelas issues sobre provedores)

---

## 4. Temas Quentes da Comunidade

| Issue | Tema | Comentários | Reações |
|-------|------|-------------|---------|
| [#993](https://github.com/nullclaw/nullclaw/issues/993) | Firecrawl endpoint configurável | 2 | 0 |
| [#975](https://github.com/nullclaw/nullclaw/issues/975) | Adicionar provedor grok-cli | 2 | 0 |

### Análise

**Firecrawl como provedor configurável (#993):** Crymfox propõe tornar o endpoint da API Firecrawl (`https://api.firecrawl.dev/v1/search`) um parâmetro configurável em vez de hardcoded. A demanda reflete a necessidade de suportar **instâncias self-hosted** do Firecrawl, alinhando-se à filosofia de projetos open source que priorizam soberania de dados e infraestrutura privada.

**Integração grok-cli (#975):** yanggf8 sugere seguir o padrão existente de providers CLI (claude-cli, codex-cli, gemini-cli) para adicionar suporte ao Grok via CLI local. A abordagem de subprocesso já estabelecida em `src/provider_probe.zig:43` facilita essa implementação, indicando baixa complexidade técnica.

**Conclusão:** A comunidade está fortemente orientada a **extensibilidade de provedores**, tanto para busca web quanto para modelos de IA, sinalizando que o roadmap deve priorizar flexibilidade de integrações.

---

## 5. Bugs e Estabilidade

**Nenhum bug reportado nas últimas 24h.**

Não há issues classificadas como bug ou regressão no período. O projeto mantém estabilidade aparente sem falhas críticas reportadas.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Issues de feature (4 abertas)

| # | Título | Autor | Criado | Atualizado |
|---|--------|-------|--------|------------|
| [#998](https://github.com/nullclaw/nullclaw/issues/998) | Prepaid search hop quando DDG keyless não basta | iamalanlui | 2026-09-14 | 2026-09-14 |
| [#997](https://github.com/nullclaw/nullclaw/issues/997) | Prepaid Brave/Firecrawl via NullClaw web_search | iamalanlui | 2026-09-14 | 2026-09-14 |
| [#993](https://github.com/nullclaw/nullclaw/issues/993) | Firecrawl endpoint configurável | Crymfox | 2026-08-24 | 2026-09-14 |
| [#975](https://github.com/nullclaw/nullclaw/issues/975) | Adicionar provedor grok-cli | yanggf8 | 2026-07-11 | 2026-09-14 |

### Sinais de Roadmap

1. **Provedores de busca web alternativos (#997, #998):** Duas issues do mesmo autor (iamalanlui) propõem integração com [apifare](https://apipay.fly.dev/?origin=human-referral) — um serviço prepaid MCP — para resolver limitações de DuckDuckGo keyless em dispositivos fracos. Isso sugere demanda por:
   - Suporte a busca com custo previsível (modelo prepaid)
   - Redução de dependência de chaves de API proprietárias (Brave, Firecrawl)
   - Governança de uso via proxy/bearer token

2. **Expansão de provedores de IA (#975):** A adição do grok-cli seguiria o padrão de providers CLI já existente, mantendo consistência arquitetural.

3. **Self-hosting e flexibilidade (#993):** A demanda por endpoints configuráveis indica foco em **privacidade e controle** por parte dos usuários.

---

## 7. Resumo de Feedback dos Usuários

### Dores identificadas

| Dor | Frequência | Issue |
|-----|------------|-------|
| API endpoint Firecrawl hardcoded | 1 usuário (Crymfox) | #993 |
| Sem suporte a Grok via CLI | 1 usuário (yanggf8) | #975 |
| Limitações de DuckDuckGo keyless | 1 usuário (iamalanlui) | #998 |
| Necessidade de chaves de API externas | 1 usuário (iamalanlui) | #997 |

### Análise qualitativa

O feedback revela **três temas recorrentes**:

1. **Extensibilidade:** Usuários querem conectar provedores além dos oficialmente suportados (Firecrawl self-hosted, Grok, serviços prepaid)
2. **Custo e controle:** Há demanda por modelos de precificação mais previsíveis e governança de requisições externas
3. **Privacidade:** A busca por alternativas a provedores com keys obrigatórias sugere preocupação com dados sensíveis

### Satisfação/Insatisfação

- **Neutro:** Sem feedback negativo explícito sobre funcionalidades existentes
- **Positivo:** Issues são construtivas e propõem soluções (não apenas complaints)
- **Gaps:** Falta de discussão ativa (0 reações nas 4 issues) pode indicar baixa visibilidade ou que a comunidade ainda está descobrindo o projeto

---

## 8. Backlog que Merece Atenção

| Issue | Idade | Status | Prioridade | Motivo |
|-------|-------|--------|------------|--------|
| [#975](https://github.com/nullclaw/nullclaw/issues/975) — grok-cli provider | ~66 dias | Aberta | Média | Proposta alinhada com arquitetura existente; baixa complexidade; adicionaria valor |
| [#993](https://github.com/nullclaw/nullclaw/issues/993) — Firecrawl configurável | ~22 dias | Aberta | Alta | Requisito para self-hosting; impacto direto na flexibilidade do projeto |

### Recomendações

1. **Responder #975:** Mesmo com baixa complexidade, a issue está sem resposta por ~66 dias. Acknowledge do mantenedor motivaria o autor a submeter PR.
2. **Avaliar #997/#998 como tema unificado:** As duas issues sobre apifare/prepaid poderiam ser consolidadas em uma RFC (Request for Comments) para evitar trabalho duplicado e definir escopo.
3. **Documentar roadmap de provedores:** A comunidade demonstra interesse em expandir integrações. Um documento de arquitetura de provedores (como um ADR — Architecture Decision Record) ajudaria a direcionar contribuições.

---

## Métricas Resumidas

| Indicador | Valor |
|-----------|-------|
| Issues abertas/ativas (24h) | 4 |
| Issues fechadas (24h) | 0 |
| PRs merged/fechadas (24h) | 0 |
| Novas releases | 0 |
| Taxa de resposta a issues | 0% (0/4 com resposta de mantenedor) |
| Bugs críticos | 0 |
| Features request | 4 |

---

*Relatório gerado automaticamente com base nos dados públicos do GitHub de [nullclaw/nullclaw](https://github.com/nullclaw/nullclaw).*

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo — Ecossistema Open Source de Agentes de IA

**Período:** 2026-09-15  
**Projetos analisados:** NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw, ZeroClaw

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **duas velocidades distintas** neste período. Por um lado, projetos maduros como Hermes Agent, ZeroClaw e CoPaw operam em alta intensidade — 50+ eventos de PR/issue por dia, ciclos de release rápidos (Hermes Agent v0.21.3 consolidou 338 PRs) e governança ativa (ZeroClaw mantém dois RFCs em discussão). Por outro lado, NullClaw, PicoClaw e IronClaw encontram-se em modo de planejamento ou manutenção, com volumes modestos e problemas de estagnação (2 items stale em PicoClaw, 0% de resposta a issues em NullClaw). A **extensibilidade de provedores** emerge como demanda transversal — busca web, modelos de IA e canais de comunicação precisam de plugabilidade para atender cenários enterprise e self-hosted.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | Releases | Taxa de Fechamento | Saúde |
|---------|-------------|-----------|----------|---------------------|-------|
| **Hermes Agent** | 50 | 50 | ✅ v0.21.3 (338 PRs) | ~50% (workflow normal) | 🟢 Alta |
| **ZeroClaw** | 22 | 50 | Nenhuma | 50% (equilibrado) | 🟢 Alta |
| **CoPaw** | 45 | 50 | Nenhuma | 31% (14/45 fechadas) | 🟡 Moderada-Alta |
| **NanoBot** | 1 | 25 (11 merged) | Nenhuma | 44% | 🟡 Moderada |
| **NullClaw** | 4 | 0 | Nenhuma | 0% | 🟠 Baixa |
| **IronClaw** | 1 | 1 | Nenhuma | N/A | 🟡 Estável |
| **PicoClaw** | 1 | 2 | Nenhuma | ~33% (1/3 items) | 🔴 Estagnação |

**Observação:** Hermes Agent, ZeroClaw e CoPaw dominam o volume de atividade, representando >80% dos eventos combinados. PicoClaw apresenta sinais de alerta com 2 de 3 itens ativos em estado stale.

---

## 3. Posicionamento do Projeto Principal

### Hermes Agent (NousResearch) — Líder por Volume

**Vantagens competitivas:**
- Maior volume de contribuições (50/50 issues+PRs/dia)
- Release mais recente com consolidação massiva (338 PRs em um patch)
- Engajamento comunitário mais alto (100 comentários em issue única)
- Ecossistema mais diverso de integrações (Telegram Business, P2P federation, Matrix)

**Diferenças técnicas:**
- Arquitetura centrada em **gateway + desktop** com separação de componentes
- Sistema de memória com transcript revision CAS e idempotent compaction
- Foco em **sessões longas em produção** (sanitização, WAL, state.db)
- Billing integration nativa como feature core

**Tamanho da comunidade:**  
~10 contribuidores ativos com PRs mergeadas no período, plus ampla base de usuários reportando issues.

### ZeroClaw — Runner-up com Foco em Segurança

**Posicionamento:**
- Segunda maior atividade (72 eventos combinados)
- Único projeto com **3 issues de segurança ativas** (risk:high) em tratamento
- Governança RFC madura (2 RFCs simultâneos, um já aceito)
- Contributor JordanTheJet aparece em几乎 todos PRs do dia — alto concentration de effort

**Comparação direta com Hermes:**
| Aspecto | Hermes Agent | ZeroClaw |
|---------|--------------|----------|
| Releases | Frequentes (v0.21.x) | Estabilização v0.8.5 em curso |
| Bugs críticos | Billing, Desktop, WAL | Segurança (pairing, proxy, MIME) |
| Filosofia | Feature parity + performance | Hardening + configurabilidade |
| i18n | Não mencionado | Preparação llms.txt/llms-full.txt |

---

## 4. Focos Técnicos Compartilhados

### 4.1 Extensibilidade de Provedores (Transversal)

Três projetos manifestam demandas idênticas de provedor configurável:

| Projeto | Demanda | Contexto |
|---------|---------|----------|
| **NullClaw** | Firecrawl endpoint configurável (#993) | Self-hosted para soberania de dados |
| **NanoBot** | aimlapi.com provider (#5666) | 1000+ modelos, partnership potencial |
| **PicoClaw** | Keenable web search (#3370) | Zero API key para onboarding |

**Conclusão:** O mercado demanda arquiteturas de provider que priorizem **configurabilidade sobre hardcoding**, suporte a instâncias self-hosted e modelos prepaid.

### 4.2 Estabilidade de Cron/Automations

NanoBot e CoPaw investem heavily em reliability de scheduling:

- **NanoBot:** 3 PRs críticas de cron em 24h (defer timer rearming, preserve pending runs, past schedules)
- **CoPaw:** subAgent spawn timeout quebrado (#7678) — funcionalidade completamente inoperante

**Implicação:** Automations são consideradas feature core, mas a complexidade de edge cases (timezones, concurrency, persistence) é subestimada na implementação inicial.

### 4.3 Memória e Contexto Longo

| Projeto | Sintoma | Severidade |
|---------|---------|------------|
| **CoPaw** | Backend 20.7 GB após 2 dias (#7222) | 🔴 Crítica |
| **CoPaw** | Memory exhaustion 1MB/s → OOM (#7722) | 🔴 Crítica |
| **Hermes** | 98k tokens duplicatas por turno (#111205) | 🟠 Alta |
| **ZeroClaw** | DateTimeSection invalidates cache at midnight (#10858) | 🟡 Média |

**Padrão:** Problemas de memória são recorrentes em agentes com sessão longa, especialmente com retrieval augmentation e streaming.

### 4.4 Canais de Comunicação Enterprise

Três projetos abordam canais não-triviais:

| Canal | Projeto | Status |
|-------|---------|--------|
| **Feishu/Lark** | NanoBot | 🔴 Bug P1 — QR login quebrado |
| **QQ** | PicoClaw | 🔴 Bug stale — Auth 401 por incompatibilidade de dependência |
| **XMPP** | ZeroClaw | 🟢 Feature aceita, em desenvolvimento |
| **Telegram custom API** | NanoBot | 🟡 PR aberto ~63 dias |
| **Telegram Business** | Hermes | 🟡 PR aberto ~123 dias |

**Tendência:** Suporte a plataformas asiáticas (Feishu, QQ) e enterprise (Telegram self-hosted, XMPP) é diferencial competitivo.

---

## 5. Análise de Diferenciação

### 5.1 Por Público-Alvo

| Segmento | Projetos Dominantes | Características |
|----------|---------------------|-----------------|
| **Desenvolvedores individuais** | NullClaw, PicoClaw | Simplicidade, zero-config, CLI-centric |
| **Teams/Empresas** | Hermes, ZeroClaw, CoPaw | Multi-canal, auth, enterprise integrations |
| **Self-hosted/Home-lab** | PicoClaw, NanoBot, ZeroClaw | ARM64 support, XMPP, proxy compliance |

### 5.2 Por Arquitetura

| Arquitetura | Projetos | Vantagens |
|-------------|----------|-----------|
| **Mono-repo modular** | Hermes, CoPaw, NanoBot | Fácil cross-component changes |
| **Plugin-first** | CoPaw, NanoBot | Extensibilidade por ecosystem |
| **CLI-centric com provider abstraction** | NullClaw | Leveza, Zig implementation |
| **Security-hardened core** | ZeroClaw, IronClaw | Sandboxing, audit trails |

### 5.3 Por Prioridade de Roadmap

| Prioridade | Hermes | ZeroClaw | CoPaw | NanoBot |
|------------|--------|----------|-------|---------|
| **Estabilidade** | Billing/WAL | Security hardening | Memory management | Cron reliability |
| **Novos canais** | Telegram Business | XMPP | Channel-specific skills | Feishu fix |
| **Provider expansion** | — | AnySearch | Model failover | aimlapi |
| **Developer experience** | /init command | llms.txt docs | make-skill v2.1 | WebUI polish |

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Classificação por Velocidade de Iteração

```
VELOCIDADE ALTA ─────────────────────────────────────────────────────────
┌─────────────────────────────────────────────────────────────────────┐
│  Hermes Agent (50/50)    ZeroClaw (72)    CoPaw (95)               │
│  Release: v0.21.3        RFC process      Memory fixes priority    │
│  Billing, Desktop        Security, XMPP    Desktop auth             │
└─────────────────────────────────────────────────────────────────────┘

VELOCIDADE MODERADA ────────────────────────────────────────────────────
┌─────────────────────────────────────────────────────────────────────┐
│  NanoBot (26)                                                        │
│  Cron fixes, WebUI polish, Feishu P1 bug                            │
└─────────────────────────────────────────────────────────────────────┘

VELOCIDADE BAIXA ───────────────────────────────────────────────────────
┌─────────────────────────────────────────────────────────────────────┐
│  NullClaw (4)      PicoClaw (3)      IronClaw (2)                   │
│  Provider requests 2 stale items     MCP security hardening         │
│  0% response rate  Bug stale 11d    No external feedback            │
└─────────────────────────────────────────────────────────────────────┘
```

### 6.2 Indicadores de Maturidade

| Indicador | Hermes | ZeroClaw | CoPaw | NanoBot | NullClaw |
|-----------|--------|----------|-------|---------|----------|
| **Processo RFC/ADR** | ❌ | ✅ (2 ativos) | ❌ | ❌ | ❌ |
| **Bug SLA visible** | 🟡 P1/P2 definidos | 🟢 risk labels | 🟡 Prioridades | 🟡 P1/P2 | ❌ |
| **Release notes** | ✅ Detalhado | ✅ Automated | ❌ | ❌ | ❌ |
| **Docs atualizados** | ✅ README refresh | ✅ llms.txt | ❌ | ❟ | ❌ |
| **Stale management** | 🟡 ~44+ dias em PRs | 🟡 RFC old | 🟡 >7 dias sem resposta | 🟡 ~11 dias | 🟡 0% response |

### 6.3 Consolidação vs. Iteração

| Fase | Projetos | Evidência |
|------|---------|-----------|
| **Consolidação de qualidade** | Hermes Agent, CoPaw, NanoBot | Bugs P1/P2 sendo fechados, releases estáveis |
| **Iteração rápida** | ZeroClaw, CoPaw | 50+ PRs/dia, múltiplas áreas simultâneas |
| **Planejamento** | NullClaw, PicoClaw, IronClaw | Sprint plans, baixa atividade, estagnação |
| **Estabilização de release** | ZeroClaw (v0.8.5) | Freeze intake, weekly stabilization line |

---

## 7. Sinais de Tendência

### 7.1 Do Feedback das Comunidades

**1. Self-hosting e soberania de dados**  
Múltiplos requests por endpoints configuráveis (Firecrawl, Telegram Bot API, XMPP) indicam que usuários querem **controle sobre infraestrutura**, não apenas flexibility de provider.

**2. Modelo prepaid como alternativa a API keys obrigatórias**  
NullClaw #997/#998 e PicoClaw #3370 (Keenable zero-API-key) mostram demanda por **precificação previsível** e redução de atrito de onboarding.

**3. Enterprise como público crescente**  
- ZeroClaw: Discord role authorization, Docker sandbox configurável
- NanoBot: Feishu P1 bug (bloqueia onboarding enterprise)
- Hermes: P2P federation heartbeat (multi-device enterprise)

**4. i18n como feature esperada**  
NanoBot tem PR de Polish localization (#5767) com 2.033 mensagens — indica que **internacionalização** é barreira de adoção em mercados não-anglófonos.

**5. Segurança como requisito core**  
ZeroClaw mantém 3+ issues security:high ativas; IronClaw foca em MCP response leak diagnostics. A tendência é que **segurança não seja after-thought**.

### 7.2 Tendências Arquiteturais

| Tendência | Evidência | Implicação |
|-----------|-----------|------------|
| **Provider abstraction layer** | Todos os projetos com provider requests | Middleware pattern se tornará padrão |
| **Automation como feature parity** | Cron fixes em NanoBot, CoPaw | Scheduling robust é table stakes |
| **Memory management explícito** | CoPaw (ReMe, mem0), Hermes (CAS compaction) | Técnicas de gestão de contexto estão amadurecendo |
| **Desktop como hub vs. CLI-first** | Hermes, CoPaw investem em desktop auth | Experiência desktop será diferenciador |
| **LLM-ready documentation** | ZeroClaw llms.txt generation | Documentação para consumo por LLMs será convenção |

### 7.3 Recomendações Estratégicas

| Para... | Recomendação |
|---------|--------------|
| **NullClaw** | Priorizar resposta a issues (0% rate é anti-padrão); definir roadmap público |
| **PicoClaw** | Resolver bug QQ #3365 (11 dias stale) ou marcar como won't-fix; revisar dependências |
| **IronClaw** | Aumentar transparência; comunidade não consegue avaliar progresso |
| **NanoBot** | Priorizar PR #5666 (aimlapi partnership) e #4919 (Telegram enterprise) |
| **CoPaw** | Tratar memory exhaustion #7222/#7722 como P0 — impacta produção |
| **Hermes Agent** | Resolver billing #110912 (impacto financeiro) + chronic Desktop instability |
| **ZeroClaw** | Mergiar RFCs aceitos rapidamente; 3 security issues S1 requerem atenção imediata |

---

**Relatório compilado em 2026-09-15. Dados de: github.com/{nullclaw,HKUDS,nousresearch,sipeed,nearai,agentscope-ai,zeroclaw-labs}/{nullclaw,nanobot,hermes-agent,picoclaw,ironclaw,QwenPaw,zeroclaw}.**

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-09-15

---

## 1. Panorama do Dia

O NanoBot apresenta alta atividade de desenvolvimento no dia de hoje, com **25 PRs atualizados** nas últimas 24h — 11 já merged/fechados e 14 ainda em aberto. Arelease pipeline permanece estável (sem novas releases), sinalizando uma fase de consolidação de contribuições. O ecossistema de automações (cron) continua sendo o principal foco de correções, enquanto a WebUI recebe refinamentos UX significativos. Uma issue crítica antiga (#2804) sobre travamento do DuckDuckGo foi finalmente fechada, eliminando um ponto de instabilidade no pipeline de mensagens. O projeto demonstra saúde de代码 robusto, com 8 PRs de bug fixes fechadas hoje cobriendo estabilidade, regressões e edge cases de API.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24h.**

O projeto não emitiu novas versões desde o último período reportado. Mantenha o monitor de tags GitHub para a próxima release que provavelmente consolidará as múltiplas correções de cron e WebUI mergeadas hoje.

---

## 3. Progresso do Projeto

As seguintes PRs foram **merged/fechadas** hoje, representando avanços concretos:

| PR | Título | Área | Impacto |
|---|---|---|---|
| [#5686](https://github.com/HKUDS/nanobot/pull/5686) | fix(cron): defer timer rearming while jobs execute | Automations | **Crítico** — Evita `CancelledError` quando callbacks editam job store simultaneamente |
| [#5751](https://github.com/HKUDS/nanobot/pull/5751) | fix(cron): preserve pending runs when editing automation details | Automations | **Importante** — Corrige recomputação indevida de `next_run_at_ms` ao editar nome/instruções |
| [#5730](https://github.com/HKUDS/nanobot/pull/5730) | fix: stream internal model calls with idle timeouts | Provider/Core | **Estabilidade** — Resolve exhaustion de timeout em tasks internas (Dream) |
| [#5684](https://github.com/HKUDS/nanobot/pull/5684) | docs: refresh README with current WebUI feature gallery | Documentação | **Descoberta** — Adiciona tour visual do browser workbench |
| [#5734](https://github.com/HKUDS/nanobot/pull/5734) | fix(memory): clarify Dream prompt write permissions | Memory | **Permissão** — Define fronteira de escrita para Dream tasks |
| [#5743](https://github.com/HKUDS/nanobot/pull/5743) | fix(webui): simplify settings catalog controls and headings | WebUI | **UX** — Melhora navegação de Automations e Tasks |
| [#5760](https://github.com/HKUDS/nanobot/pull/5760) | fix(webui): adapt chat toolbar to available width | WebUI | **UX responsivo** — Adapta toolbar a diferentes larguras de workbench |
| [#5759](https://github.com/HKUDS/nanobot/pull/5759) | fix(webui): keep Markdown table source inline in file previews | WebUI | **UX** — Corrige rendering de tabelas em arquivos MD preview |

**Destaque:** O subsistema de automações (cron) acumulava pelo menos 3 bugs críticos — rearming indevido, recomputação de schedules e rejeição de jobs passados. Todos foram addressados em PRs separadas, sinalizando maturação da funcionalidade.

---

## 4. Temas Quentes da Comunidade

*Nota: As métricas de comentários não estavam disponíveis nos dados coletados. A análise baseia-se no volume e diversidade de PRs.*

### PRs em aberto com maior visibilidade técnica:

**#5768 — Fix Feishu QR verification URL** ([HKUDS/nanobot#5768](https://github.com/HKUDS/nanobot/pull/5768))
- **Área:** Canal Feishu
- **Prioridade:** P1
- **Demanda:** Corrigir fluxo de login via QR code que falha com "Link expired" mesmo quando escaneado em 5-10 segundos
- **Impacto:** Bloqueia onboarding de novos usuários no canal Feishu/Lark

**#5666 — Provider aimlapi.com** ([HKUDS/nanobot#5666](https://github.com/HKUDS/nanobot/pull/5666))
- **Área:** Provider/API Gateway
- **Prioridade:** P2
- **Demanda:** Adicionar aimlapi.com como provider OpenAI-compatível (1000+ modelos, 400k+ usuários)
- **Impacto:** Expande opções de modelos para usuários; parceria comercial potencial

**#4919 — Telegram custom Bot API base URL** ([HKUDS/nanobot#4919](https://github.com/HKUDS/nanobot/pull/4919))
- **Área:** Canal Telegram
- **Prioridade:** P2
- **Demanda:** Suportar self-hosted Bot API servers e enterprise gateways
- **Impacto:** Habilita uso corporativo em ambientes com proxies ou infra customizada

**#5750 — Stable per-invocation tool context** ([HKUDS/nanobot#5750](https://github.com/HKUDS/nanobot/pull/5750))
- **Área:** Ferramentas/Tooling
- **Prioridade:** P2
- **Demanda:** Expor `ToolInvocationContext` via ContextVar para implementadores de tools
- **Impacto:** API mais expressiva para tools personalizadas

---

## 5. Bugs e Estabilidade

### Issue Crítica Fechada ✅

**#2804 — DuckDuckGo web_search hang** ([HKUDS/nanobot#2804](https://github.com/HKUDS/nanobot/issues/2804))
- **Severidade:** Crítica
- **Status:** Fechada em 2026-09-14
- **Sintoma:** `asyncio.to_thread(ddgs.text, ...)` bloqueia indefinidamente, causando gateway unresponsive
- **Origem:** Reportada em 2026-04-05 (5 meses de vida útil)

### Bugs em Aberto (PRs P1/P2)

| PR | Bug | Severidade | Área |
|---|---|---|---|
| [#5768](https://github.com/HKUDS/nanobot/pull/5768) | QR onboarding Feishu "Link expired" | **P1** | Channel |
| [#5761](https://github.com/HKUDS/nanobot/pull/5761) | `edit_file` deletando newline após sufixo inline | P2 | Tools |
| [#5763](https://github.com/HKUDS/nanobot/pull/5763) | API retorna 413 para tipos inválidos em vez de 400 | P2 | API |
| [#5765](https://github.com/HKUDS/nanobot/pull/5765) | `stream: "false"` string tratada como truthy | P2 | API |
| [#5762](https://github.com/HKUDS/nanobot/pull/5762) | Cron aceita schedules passados mas nunca executa | P2 | Cron |
| [#5764](https://github.com/HKUDS/nanobot/pull/5764) | Fallback probes não serializados em half-open state | P2 | Provider |
| [#5601](https://github.com/HKUDS/nanobot/pull/5601) | Mensagens rejeitadas deixam side effects (attachments/WS) | P2 | WebUI |

**Análise:** A maioria dos bugs abertos são regressões ou edge cases de validação. Nenhum indica vulnerabilidade de segurança ou perda de dados — a qualidade geral é sólida.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em Review

**#5767 — Polish localization WebUI** ([HKUDS/nanobot#5767](https://github.com/HKUDS/nanobot/pull/5767))
- 1.536 mensagens comuns + 497 de painéis de configuração traduzidas
- Mantém English como fallback
- **Sinal:** Internacionalização (i18n) como prioridade contínua

**#4919 — Telegram custom Bot API base URL** ([HKUDS/nanobot#4919](https://github.com/HKUDS/nanobot/pull/4919))
- Suporte a self-hosted e enterprise gateways
- **Sinal:** Demanda corporativa por deploys customizados

**#5666 — Provider aimlapi.com** ([HKUDS/nanobot#5666](https://github.com/HKUDS/nanobot/pull/5666))
- Provedor agregado com 1000+ modelos
- **Sinal:** Estratégia de partnerships para expandir acesso a modelos

**#5750 — Stable per-invocation tool context** ([HKUDS/nanobot#5750](https://github.com/HKUDS/nanobot/pull/5750))
- ContextVar para `tool_call_id` e identity
- **Sinal:** API de extensibilidade para developers de tools customizadas

### Observações de Roadmap Implicitas
- **i18n:** Suporte a Polish (em progresso), indicando lista de lokalizações futura
- **Enterprise:** Custom endpoints para Telegram e Feishu sugerem foco B2B
- **Estabilidade Cron:** Investimento contínuo indica automations como feature core

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas (via Issues/PRs)

| Dor | Evidência | Severidade |
|---|---|---|
| **Login Feishu quebrado** | #5768 — QR code expira instantaneamente | **Alta** — bloqueia canal inteiro |
| **DuckDuckGo hang** | #2804 — gateway unresponsive em sessões ativas | **Alta** — resolved after 5 months |
| **Cron perde jobs** | #5686, #5751, #5762 — edge cases em scheduling | **Média** — afeta automações críticas |
| **Telegram sem suporte enterprise** | #4919 — não funciona com self-hosted Bot API | **Média** — bloqueia deployments corporativos |

### Cenários de Uso Emergent
- **Multi-channel onboarding** — Feishu, Telegram como canais legítimos
- **Automação avanzada** — cron com schedules complexos (interval, cron_expr, at)
- **Enterprise self-hosting** — infra customizada com API gateways internos

### Satisfação
- **Alta atividade de PRs** (25 em 24h) indica comunidade engajada
- **Tempo de resposta rápido** — bugs P1/P2 sendo addressados no mesmo dia
- **Documentação atualizada** — README refresh (PR #5684) sugere investimento em DX

---

## 8. Backlog que Merece Atenção

### Issues/PRs Sem Resposta / Stale

| Item | Tipo | Idade Estimada | Status | Ação Recomendada |
|---|---|---|---|---|
| #5666 aimlapi provider | PR Open | ~11 dias | Sem resposta visible | Review comercial + técnica |
| #4919 Telegram custom API | PR Open | ~63 dias | Em revisão | Priorizar para enterprise users |
| #5601 WebUI rollback side effects | PR Open | ~17 dias | Conflito reported | Resolver conflito para merge |
| #2804 DuckDuckGo hang | Issue Closed | 5 meses | ✅ Resolvida | — |

### Recomendações

1. **#5666 (aimlapi):** Avaliar viabilidade técnica e estratégico — partnership pode trazer novos usuários
2. **#4919 (Telegram):** Com 63 dias em aberto, merece review final — feature é bem definida
3. **#5601 (WebUI rollback):** Resolver conflito reported para liberar correção de side effects em produção

---

**Relatório gerado em:** 2026-09-15  
**Fonte:** github.com/HKUDS/nanobot  
**Total de eventos no período:** 26 (1 issue + 25 PRs)

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent
## Data: 15 de setembro de 2026

---

## 1. Panorama do Dia

O projeto Hermes Agent mantém um ritmo de atividade intenso com **50 issues e 50 PRs atualizados nas últimas 24 horas**. A release **v0.21.3** foi publicada ontem (14/09), consolidando ~338 PRs merged desde a v0.21.2 como um patch estável para consumidores downstream. A saúde geral do projeto permanece ativa, embora persistam problemas crônicos de estabilidade em áreas críticas comoDesktop, Gateway e sessão de estado. A comunidade demonstra alta engajamento, com issues debilling e integrações de plataforma gerando debates acalorados.

---

## 2. Lançamentos

### 🎉 Nova Release Publicada

**v2026.9.14 — Hermes Agent v0.21.3**  
📅 Data: 14 de setembro de 2026  
🔗 [Release no GitHub](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.9.14)

**Tipo:** Patch release  
**Escopo:** Consolidação de ~338 PRs merged desde v0.21.2

**Nota:** Esta tag existe para oferecer um release estável marcado para consumidores downstream (imagens Docker, Hermes Cloud, deployments Hospedados). A release inclui correções para o gate de sign-in do remote-gateway mentioned no issue #88584.

**Breaking Changes:** Nenhuma detectada nesta release.

**Notas de Migração:** Não há procedimentos de migração necessários para upgrade da v0.21.2 para v0.21.3.

---

## 3. Progresso do Projeto

### PRs Fechados/Merged Hoje

| # | Título | Autor | Tipo | Status |
|---|--------|-------|------|--------|
| [#67713](https://github.com/NousResearch/hermes-agent/pull/67713) | fix(agent): enforce completion reports and normalize content | whydoineedausername-huh | feature | CLOSED |
| [#111244](https://github.com/NousResearch/hermes-agent/pull/111244) | P5: Add durable transcript revision CAS and idempotent compaction publication | devinkuhn | feature | CLOSED |
| [#111243](https://github.com/NousResearch/hermes-agent/pull/111243) | P4: Define typed context-engine sanitation, compaction, and overflow decisions | devinkuhn | feature | CLOSED |
| [#111242](https://github.com/NousResearch/hermes-agent/pull/111242) | P2: Add a sanitation-aware host commit path that never invokes generic salvage | devinkuhn | feature | CLOSED |

### PRs Abertos de Destaque

| # | Título | Autor | Prioridade | Componentes |
|---|--------|-------|------------|-------------|
| [#111173](https://github.com/NousResearch/hermes-agent/pull/111173) | fix(tests): never resolve the operator's real Hermes home from a test | niuzhentian | **P1** | cli, area/profiles |
| [#111284](https://github.com/NousResearch/hermes-agent/pull/111284) | fix(packaging): sync uv exclude-newer lock metadata | KoNit-K | P2 | cli |
| [#111286](https://github.com/NousResearch/hermes-agent/pull/111286) | fix(update): reload the cached tools_config before post-pull migrations | liuhao1024 | P2 | cli, gateway |
| [#111283](https://github.com/NousResearch/hermes-agent/pull/111283) | fix(bot-mode): group follow-ups and late replies stay visible | teknium1 | P2 | desktop |
| [#76661](https://github.com/NousResearch/hermes-agent/pull/76661) | feat(gateway): P2P federation heartbeat | x7peeps | P3 | gateway |
| [#111045](https://github.com/NousResearch/hermes-agent/pull/111045) | feat(gateway): JSON-RPC wire validated end-to-end with Pydantic | alt-glitch | P3 | tui, desktop, dashboard |

**Destaque:** A infraestrutura de sanitização de transcript (#111242-244) foi concluída, melhorando a resiliência da compressão de contexto e publicações idempotentes — fundamentais para sessões longas em produção.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| # | Título | Comentários | 👍 | Prioridade |
|---|--------|-------------|----|------------|
| [#88584](https://github.com/NousResearch/hermes-agent/issues/88584) | Automated Nous integration is blocked | **100** | 0 | P3 |
| [#97681](https://github.com/NousResearch/hermes-agent/issues/97681) | Bot Group Chats should keep working after Desktop closes | **28** | 1 | P2 |
| [#109966](https://github.com/NousResearch/hermes-agent/issues/109966) | state.db: WAL generation handed off during fleet restart | **12** | 0 | P2 |
| [#87739](https://github.com/NousResearch/hermes-agent/issues/87739) | /hatch burns paid image requests retrying animation rows | **7** | 0 | P3 |

### Análise dos Temas

1. **#88584 — Integração Nous bloqueada (100 comentários):** Este é o issue mais comentado do período, indicando um conflito significativo na自动化 integração entre Nous e Enterkey. O problema está em `cron/jobs.py` e afeta o dashboard updater. A comunidade está aguardando resolução.

2. **#97681 — Bot Group Chats entre dispositivos:** Demanda por persistência de conversas entre bots em diferentes gateways quando o Desktop é fechado. Este é um caso de uso colaborativo Multi-Agente que demonstra a crescente adoção de Hermes para cenários complexos.

3. **#109966 — WAL de state.db em restart de fleet:** Bug crítico que pode bloquear novos openers por horas. O reporter já testou em commits recentes e confirmou que a cadeia de hand-off foi resolvida nas versões mais recentes.

---

## 5. Bugs e Estabilidade

### Por Severidade

#### 🔴 P1 — Crítico
| # | Título | Componentes | Status |
|---|--------|-------------|--------|
| [#98588](https://github.com/NousResearch/hermes-agent/issues/98588) | False positive 'gateways may still be serving pre-update modules' after launchd respawn | cli, gateway | OPEN |
| [#111173](https://github.com/NousResearch/hermes-agent/pull/111173) | fix(tests): never resolve operator's real Hermes home from test | cli, area/profiles | OPEN (PR P1) |

#### 🟠 P2 — Alto
| # | Título | Componentes |
|---|--------|-------------|
| [#110912](https://github.com/NousResearch/hermes-agent/issues/110912) | Nous Portal: deepseek-v4-flash billed at 11-13x listed price | agent, portal, billing |
| [#103483](https://github.com/NousResearch/hermes-agent/issues/103483) | muse-spark turns end mid-task on finish_reason=stop | agent |
| [#111231](https://github.com/NousResearch/hermes-agent/issues/111231) | Strict providers 400 on replayed tool history | agent, openai, nvidia |
| [#111174](https://github.com/NousResearch/hermes-agent/issues/111174) | Windows Telegram adapter hangs after burst of connect timeouts | gateway, telegram, windows |

#### 🟡 P3 — Médio
| # | Título | Componentes |
|---|--------|-------------|
| [#111205](https://github.com/NousResearch/hermes-agent/issues/111205) | Memory prefetch re-injects 49 duplicates (~98k tokens) | plugins, memory |
| [#111256](https://github.com/NousResearch/hermes-agent/issues/111256) | Model repeatedly calls nonexistent `shell` tool instead of `terminal` | agent, tools |
| [#111281](https://github.com/NousResearch/hermes-agent/issues/111281) | 'possible duplicate send' warning fires every turn | gateway |

### Bugs Crônicos Identificados

- **Billing/pagamento:** 2 issues ativas (#110912, #87248) relacionadas a erros de cobrança persistindo ou sendo cobrados incorretamente
- **Desktop/Gateway:** 4+ issues relacionados a timeouts, hanging states e problemas de atualização
- **Sessões:** Problemas de state persistence e WAL continuam aparecendo apesar de correções

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| # | Título | 👍 | Componentes | Notas |
|---|--------|----|-------------|-------|
| [#97681](https://github.com/NousResearch/hermes-agent/issues/97681) | Bot Group Chats should keep working after Desktop closes | 1 | gateway, desktop, sessions | **Alta demanda** — 28 comentários |
| [#51722](https://github.com/NousResearch/hermes-agent/issues/51722) | Add /init slash command — deep project scan & AGENTS.md auto-generation | 0 | cli | Inspirado em Claude Code |
| [#51515](https://github.com/NousResearch/hermes-agent/issues/51515) | Want to disable ↑ ↓ arrows pulling up old messages in chat | 0 | desktop | Acessibilidade |
| [#72485](https://github.com/NousResearch/hermes-agent/issues/72485) | Add font customization support (OpenDyslexic) | 0 | desktop | Acessibilidade — **CLOSED** |
| [#51532](https://github.com/NousResearch/hermes-agent/issues/51532) | Auto-include @mention on reply in Matrix rooms | 0 | gateway, matrix | UX para multi-agente |

### Features em Desenvolvimento (PRs Abertos)

| # | Título | Tipo | Componentes |
|---|--------|------|-------------|
| [#111287](https://github.com/NousResearch/hermes-agent/pull/111287) | feat(vault): stage generated credentials for secure signup | feature | agent, browser, auth |
| [#26654](https://github.com/NousResearch/hermes-agent/pull/26654) | Add Telegram Business delegated inbox support | feature | gateway, telegram |
| [#76661](https://github.com/NousResearch/hermes-agent/pull/76661) | feat(gateway): P2P federation heartbeat | feature | gateway |

**Sinais de Roadmap:**
- Suporte a **credenciais seguras** para signup automatizado (vault evolution)
- **Federação P2P** entre dispositivos Hermes (peer heartbeat)
- **Telegram Business** como canal adicional
- Ferramentas de **inicialização de projeto** similares a Claude Code

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Categoria | Descrição | Impacto |
|-----------|-----------|---------|
| 💰 **Billing incorreto** | deepseek-v4-flash cobrado 11-13x acima do preço listado após créditos esgotados | Alto — financeiro |
| 🖥️ **Desktop instável** | Preview timeout, billing bubbles persistentes, problemas após update | Alto — UX |
| 🗄️ **Database/WAL** | state.db bloqueia openers por horas em fleet restart | Crítico — disponibilidade |
| 🛠️ **Tool calling** | Modelo chama `shell` ao invés de `terminal`, quebras em mid-call | Médio — produtividade |
| 📝 **Memória** | 98k tokens de duplicatas injetados por turno | Crítico — custo/performance |

### Cenários de Uso Reportados

1. **Multi-agente colaborativo:** Bot Group Chats entre gateways em dispositivos diferentes
2. **Produção com Hindsight memory:** Memória prefetch com duplicatas massivas
3. **Desktop como hub:** Integração Desktop ↔ Gateway ↔ Plugins com falhas intermitentes
4. **Windows + Telegram:** Cenário edge com timeouts e reconnect loops

### Satisfação/Insatisfação

| Indicador | Observação |
|-----------|------------|
| 🔄 **Release frequente** | v0.21.3 consolida 338 PRs — comunidade ativa |
| ⚠️ **Bugs crônicos** | WAL, billing e Desktop persistem entre releases |
| 📈 **Engajamento** | 100 comentários em um único issue mostra comunidade ativa |
| 🐛 **Regressões** | P1 #98588 indica problemas em update flow |

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Estagnadas

| # | Título | Criado | Atualizado | Prioridade | Observação |
|---|--------|--------|------------|------------|------------|
| [#88584](https://github.com/NousResearch/hermes-agent/issues/88584) | Automated Nous integration blocked | 2026-08-17 | 2026-09-14 | P3 | 100 comentários, mas sem solução aparente |
| [#87739](https://github.com/NousResearch/hermes-agent/issues/87739) | /hatch burns paid image requests | 2026-08-16 | 2026-09-14 | P3 | 7 comentários, aguardando ação |
| [#81508](https://github.com/NousResearch/hermes-agent/issues/81508) | Nested Hermes inherits Kanban ownership | 2026-08-08 | 2026-09-14 | P3 | 3 comentários, processo nested problemático |
| [#51515](https://github.com/NousResearch/hermes-agent/issues/51515) | Disable ↑ ↓ arrows in chat | 2026-06-23 | 2026-09-14 | P3 | 2+ meses sem resolução (feature request) |
| [#51532](https://github.com/NousResearch/hermes-agent/issues/51532) | Auto-include @mention in Matrix | 2026-06-23 | 2026-09-14 | P3 | 2+ meses pendente |

### PRs Antigos Ainda Abertos

| # | Título | Criado | Prioridade | Idade |
|---|--------|--------|------------|-------|
| [#77077](https://github.com/NousResearch/hermes-agent/pull/77077) | test(state): close SessionDB handles for Windows | 2026-08-02 | P3 | ~44 dias |
| [#76661](https://github.com/NousResearch/hermes-agent/pull/76661) | feat(gateway): P2P federation heartbeat | 2026-08-02 | P3 | ~44 dias |
| [#77441](https://github.com/NousResearch/hermes-agent/pull/77441) | perf(gateway): cache pairing approved list | 2026-08-03 | P3 | ~43 dias |
| [#80888](https://github.com/NousResearch/hermes-agent/pull/80888) | fix(cli): delete git-installed plugins on Windows | 2026-08-07 | P3 | ~39 dias |
| [#26654](https://github.com/NousResearch/hermes-agent/pull/26654) | Add Telegram Business delegated inbox | 2026-05-15 | P3 | ~123 dias |

---

## Métr

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# 📊 Relatório de Projeto — PicoClaw

**Data de referência:** 2026-09-15
**Repositório:** [sipeed/picoclaw](https://github.com/sipeed/picoclaw)
**Visualização:** Analista Open Source — Agentes de IA e Assistentes Pessoais

---

## 1. 🌅 Panorama do Dia

O projeto PicoClaw apresenta **baixa atividade geral** nesta data. Não houve novos lançamentos nas últimas 24h, e o volume de contribuições permanece modesto — apenas 1 issue e 2 PRs atualizados no período. A issue aberta mais relevante trata de um problema de autenticação com canais QQ (erro 401), marcada como *stale*, o que indica possível falta de resposta da equipe. Uma PR de documentação do sprint v0.10.0 foi fechada com sucesso, sinalizando avanço no planejamento da próxima versão. Um pedido de feature para adicionar o provedor de busca web Keenable aguarda revisão e está em estado *stale* há mais de uma semana.

---

## 2. 🚀 Lançamentos

**Nenhum novo release nas últimas 24h.**

O projeto não publicou versões recentes. Isso é consistente com o ciclo de desenvolvimento evidenciado pela PR #3379, que detalha o plano de sprint v0.10.0 (trilhas 60–66), sugerindo que a equipe está em fase de planejamento e belum em fase de entrega de release.

---

## 3. 📈 Progresso do Projeto

### PR Fechada

| # | Título | Autor | Status | Link |
|---|--------|-------|--------|------|
| **#3379** | docs: v0.10.0 sprint plan | stpinkie | ✅ CLOSED | [GitHub](https://github.com/sipeed/picoclaw/pull/3379) |

**Análise:** A PR #3379 consolidou o design doc do sprint v0.10.0, expandindo o draft `.todo.md` em detalhes prontos para implementação. A ordem de implementação definida (60 → 65 → 61 → 62 → 63 → 64 → 66) indica uma sequência de dependências bem mapeada. A presença de deltas verificados contra o código demonstra maturidade no processo de planejamento. Este é um avanço significativo em organização, preparando o terreno para a próxima versão.

### PR Aberta (em revisão)

| # | Título | Autor | Status | Link |
|---|--------|-------|--------|------|
| **#3370** | feat(tools): add Keenable web search provider | ilya-bogin-keenable | 🔄 OPEN (stale) | [GitHub](https://github.com/sipeed/picoclaw/pull/3370) |

**Análise:** Proposta para adicionar Keenable (keenable.ai) como provedor de busca web. Destaque para a proposta de funcionamento **sem API key** em instalação limpa, usando endpoint público com header `X-Keenable-Title`. A feature reduz atrito de onboarding se aceita.

---

## 4. 🔥 Temas Quentes da Comunidade

### Issue com maior engajamento (única recente)

| # | Título | Reações | Comentários | Link |
|---|--------|---------|-------------|------|
| **#3365** | QQ channel fails with 401 "Authorization参数格式错误" | 👍 1 | 💬 2 | [GitHub](https://github.com/sipeed/picoclaw/issues/3365) |

**Análise:** Issue reportada por `crazysarah` em Orange Pi 3B (RK3566, aarch64) com picoclaw nightly (`0.3.1`). O problema envolve incompatibilidade entre `botgo v0.2.1` e `resty >= v2.17`, resultando em falha de autenticação em canais QQ. A issue está **stale** desde 2026-09-04 (11 dias), indicando risco de não resolução. Este é um bug funcional crítico que afeta integração com Tencent QQ — um caso de uso real em dispositivos ARM64. A severidade é **alta**, pois envolve uma dependência indireta (`resty`) atualizada que quebra comportamento existente.

---

## 5. 🐛 Bugs e Estabilidade

### Bug em Aberto

| Severidade | Issue | Descrição | Link |
|------------|-------|-----------|------|
| **🔴 Alta** | #3365 | Falha de autenticação 401 em canais QQ — causa raiz em `botgo v0.2.1` + `resty >= v2.17`. Afeta dispositivos ARM64 (Orange Pi 3B). | [GitHub](https://github.com/sipeed/picoclaw/issues/3365) |

**Observações:**
- Bug **funcional** (não crash, mas falha de integração)
- Regressão presumida por atualização de dependência indireta (`resty`)
- Status **stale** — sem resposta da equipe há 11 dias
- Impacto: usuários de QQ em ambientes de produção

**Recomendação:** Priorizar triagem e, se confirmado, considerar pin de versão do `resty` ou atualização do `botgo`.

---

## 6. ✨ Pedidos de Features e Sinais de Roadmap

### Feature Proposta

| # | Título | Autor | Link |
|---|--------|-------|------|
| **#3370** | feat(tools): add Keenable web search provider | ilya-bogin-keenable | [GitHub](https://github.com/sipeed/picoclaw/pull/3370) |

**Análise:** Integração com Keenable como provedor de busca web. Pontos de destaque:
- **Zero API key** para uso básico — melhoria significativa de UX
- Endpoint público (`POST /v1/search/public`) com header específico
- Expande ecossistema de ferramentas de busca disponíveis

**Sinais de roadmap derivados:**
- O sprint v0.10.0 (PR #3379) lista trilhas 60–66 — sugere expansão de ferramentas e funcionalidades de agentes
- A ausência de releases recentes pode indicar foco em planejamento de longo prazo

---

## 7. 📝 Resumo de Feedback dos Usuários

| Tipo | Detalhamento |
|------|--------------|
| **Dores identificadas** | Incompatibilidade de dependências quebrando integração com Tencent QQ; necessidade de trabalho manual para configurar provedores de busca (API keys). |
| **Cenários de uso** | Implantação em dispositivos ARM64 (Orange Pi 3B), integração com plataformas de mensageria chinesas (QQ), uso como agente de IA com ferramentas de busca web. |
| **Satisfação** | A documentação detalhada da PR #3379 sugere comunidade ativa em planejamento; proposta Keenable sem API key indica demanda por simplicidade. |
| **Insatisfação** | Bugs stale sem resposta (11 dias) impactam confiança; dependências indiretas atualizadas causam regressões silenciosas. |

---

## 8. 📋 Backlog que Merece Atenção

| # | Tipo | Título | Idade | Status | Prioridade | Link |
|---|------|--------|-------|--------|------------|------|
| **#3365** | 🐛 Bug | QQ channel fails with 401 "Authorization参数格式错误" | 11 dias | stale | 🔴 Alta | [GitHub](https://github.com/sipeed/picoclaw/issues/3365) |
| **#3370** | ✨ Feature | feat(tools): add Keenable web search provider | 8 dias | stale | 🟡 Média | [GitHub](https://github.com/sipeed/picoclaw/pull/3370) |

**Ações recomendadas:**

1. **#3365 — Triagem urgente:** Avaliar causa raiz, possivelmente adicionar constraint de versão para `resty` em `go.mod` ou atualizar `botgo` para versão compatível.

2. **#3370 — Revisão de feature:** Avaliar viabilidade da proposta Keenable. Se aceita, priorizar integração para melhorar proposta de valor do picoclaw como agente de IA.

---

## 📌 Indicadores de Saúde do Projeto

| Indicador | Status | Observação |
|-----------|--------|------------|
| Atividade de código (24h) | 🟡 Moderada | 1 PR fechada, 1 PR aberta, 1 issue aberta |
| Bugs em aberto (críticos) | 🟢 Baixo | 1 bug funcional, não crash |
| Estagnação (stale) | 🔴 Alerta | 2 itens stale sem resposta |
| Releases | 🟡 Estável | Nenhum release, mas plano v0.10.0 em andamento |
| Engajamento comunidade | 🟡 Moderado | 1 usuário reportou bug com detalhes, 1 contribuidor de feature |

**Saúde geral:** O projeto está em **modo planejamento** com sprint v0.10.0 em definição. A saúde operacional é aceitável, mas o acúmulo de itens stale (2 de 3 itens ativos) é um sinal de atenção — especialmente o bug de autenticação QQ que afeta usuários reais em produção.

---

*Relatório gerado em 2026-09-15. Dados extraídos de [github.com/sipeed/picoclaw](https://github.com/sipeed/picoclaw).*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-09-15

---

## 1. Panorama do dia

O projeto IronClaw mantém uma atividade moderada nas últimas 24 horas, com 1 issue aberta e 1 pull request em andamento. Não houve lançamentos de novas versões, releases ou decisões de roadmap significativas no período. A atividade concentra-se em diagnóstico de falhas diárias (Issue #8100) e refinamento de segurança no subsistema MCP (PR #8077). O projeto continua em fase de iteração interna, com foco em qualidade e estabilidade.

---

## 2. Lançamentos

**Nenhum novo release nas últimas 24 horas.**

O último período não registrou publicações de versões. O projeto segue em desenvolvimento ativo sem tags de release recentes — o que sugere que a equipe está em ciclo de preparação para uma próxima versão ou operando em branch de desenvolvimento contínuo.

---

## 3. Progresso do projeto

### PRs em destaque

**#8077** — `fix(mcp): classify response leak diagnostics`
- **Status:** ABERTO
- **Autor:** linhongyu510
- **Criado:** 2026-09-06 | **Atualizado:** 2026-09-14
- **Alvo:** Fechar #8009
- **Resumo:** Este PR implementa três mudanças no subsistema MCP:
  1. Centraliza o sentinel `response_leak_blocked` em `ironclaw_host_api::http`
  2. Ensina a lane MCP a classificar corretamente esse sentinel
  3. Preserva um reason distinto visível ao MCP, mantendo segurança no bloqueio de vazamentos

🔗 [nearai/ironclaw PR #8077](https://github.com/nearai/ironclaw/pull/8077)

**Análise:** Este PR representa uma melhoria de segurança importante no componente MCP (Model Context Protocol), resolvendo um problema de vazamento de diagnóstico entre host e cliente. A centralização do sentinel é uma boa prática arquitetural.

---

## 4. Temas quentes da comunidade

### Issue em destaque

**#8100** — `Daily ironclaw failure taxonomy — 2026-09-14`
- **Status:** ABERTA
- **Autor:** pranavraja99
- **Criado:** 2026-09-14 | **Atualizado:** 2026-09-14
- **Comentários:** 0 | **Reações:** 0
- **Resumo:** Análise diária de taxonomias de falha no IronClaw. A suite **officeqa** registrou 43 tarefas não-passantes, classificadas predominantemente como erros genuínos de qualidade do modelo (ex: DeepSeek-V4-Flash).

🔗 [nearai/ironclaw Issue #8100](https://github.com/nearai/ironclaw/issues/8100)

**Análise:** A issue serve como monitoramento contínuo de qualidade. A classificação "genuíno erro de modelo" indica que os benchmarks estão funcionando corretamente e identificando limitações reais dos modelos testados — não falhas do framework IronClaw em si. A ausência de comentários sugere que é uma issue de acompanhamento automático/robótica.

---

## 5. Bugs e estabilidade

### Status geral: Estável

Nenhuma issue de bug crítico foi aberta ou atualizada nas últimas 24 horas. 

O trabalho documentado em **#8077** trata de uma questão de segurança/diagnóstico (vazamento de resposta), não um crash ou regressão funcional. A natureza da mudança sugere um problema sutil de segurança que estava sendo mitigado proativamente.

**Métricas de estabilidade:**
- Issues abertas no dia: 1 (taxonomia de falhas — não bug)
- Bugs críticos reportados: 0
- Regressões identificadas: 0

---

## 6. Pedidos de features e sinais de roadmap

Nenhum pedido de feature explícito foi aberto ou atualizado nas últimas 24 horas.

**Sinais de roadmap inferidos:**
- O trabalho em **#8077** indica foco em **segurança do MCP** e refinamento de interfaces entre componentes
- As análises diárias de taxonomias de falha (**#8100**) sugerem um roadmap orientado por dados de qualidade de benchmarks
- A ISSUE #8009 (referenciada no PR) pode conter contexto adicional sobre prioridades de segurança

🔗 [nearai/ironclaw Issue #8009](https://github.com/nearai/ironclaw/issues/8009)

---

## 7. Resumo de feedback dos usuários

**Sem feedback explícito de usuários externos nas últimas 24 horas.**

- A issue #8100 é uma análise interna/automática de taxonomias de falha
- O PR #8077 foi aberto por um contribuidor (linhongyu510), não há comentários de revisores visíveis
- Nenhum 👍 ou comentário em issues recentes indica ausência de engajamento externo

**Conclusão:** O período analisado reflete trabalho interno de manutenção e segurança, sem Inputs diretos de usuários finais.

---

## 8. Backlog que merece atenção

### Issue sem atividade recente

**#8009** — `response leak diagnostics` (referenciada no PR #8077)
- **Status:** Provavelmente aberta (referenciada como "Closes #8009" no PR)
- **Última atividade:** Não especificada nos dados atuais
- **Relevância:** Alta — é o problema de segurança que motivou o PR #8077

🔗 [nearai/ironclaw Issue #8009](https://github.com/nearai/ironclaw/issues/8009)

**Recomendação:** Acompanhar a resolução de #8009 via merge de #8077. Uma vez fechada, verificar se a solução centralizada em `ironclaw_host_api::http` resolve completamente o problema de vazamento de diagnósticos.

---

## Resumo Executivo

| Métrica | Valor |
|---------|-------|
| Issues abertas/ativas (24h) | 1 |
| PRs abertas (24h) | 1 |
| Releases | 0 |
| Bugs críticos | 0 |
| Engajamento da comunidade | Baixo |

**Veredicto:** O IronClaw apresenta saúde estável no período analisado. A atividade concentra-se em segurança interna (MCP) e monitoramento de qualidade. Não há bloqueios, bugs críticos ou sinais de problemas urgentes. O projeto está em modo de refinamento contínuo.

---

*Relatório gerado em 2026-09-15 com base em dados do GitHub do repositório [nearai/ironclaw](https://github.com/nearai/ironclaw).*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório de Projeto — CoPaw (QwenPaw)
**Data:** 2026-09-15
**Horizonte de dados:** últimas 24h

---

## 1. Panorama do dia

O projeto CoPaw (QwenPaw) apresenta **alta atividade** nesta janela de 24h, com 45 issues e 50 pull requests atualizados — volumes típicos de um projeto em ritmo de desenvolvimento intenso. Não houve lançamentos formais, indicando que a equipe está em ciclo de maturação de contribuições antes da próxima release. A base de código concentra-se em correções de bugs críticos (memória, sessões, MCP), melhorias na interface (console/web) e refinos de estabilidade. A presença de PRs de segurança (autenticação desktop, hub) e de múltiplos bugs com severidade alta (memory exhaustion, session loss) sugere que a equipe prioriza confiabilidade operacional. O ecossistema de plugins e channels (Telegram, skill) continua em evolução ativa.

---

## 2. Lançamentos

**Nenhuma release oficial** foi publicada nas últimas 24h. O projeto permanece em ritmo de integração de PRs antes do próximo tag. Para追踪 o pipeline de releases, recomenda-se monitorar o branch `main` e o canal oficial do projeto.

---

## 3. Progresso do Projeto

Os seguintes PRs demonstram avanço concreto em áreas distintas do projeto:

| PR | Área | Descrição | Estágio |
|----|------|-----------|---------|
| [#7637](https://github.com/agentscope-ai/QwenPaw/pull/7637) | QwenPaw-Data | Integração do QwenPaw-Data app 0.3.0 como motor de análise gerenciado | Under Review |
| [#7704](https://github.com/agentscope-ai/QwenPaw/pull/7704) | Console | Move drawer de arquivos de chat para a lateral direita, resolvendo problemas de UX em telas pequenas | Under Review |
| [#7732](https://github.com/agentscope-ai/QwenPaw/pull/7732) | ACP | Corrigido fallback de permissões para opções ACP com IDs não-padrão (ex.: `approve_once`) | Ready for Human Review |
| [#7729](https://github.com/agentscope-ai/QwenPaw/pull/7729) | MCP | Reconhecimento de envelopes `jsonRpcError` não-padrão em servidores Java/Kotlin MCP | Open |
| [#7769](https://github.com/agentscope-ai/QwenPaw/pull/7769) | Desktop | Autenticação obrigatória para requisições API locais no host nativo (Windows Desktop) | Open |
| [#7748](https://github.com/agentscope-ai/QwenPaw/pull/7748) | Agent Loop | Preservação de warnings de loop e correção de budget/overflow recovery | Open |
| [#7753](https://github.com/agentscope-ai/QwenPaw/pull/7753) | Skill | Atualização do make-skill para v2.1 com validação de plano obrigatório antes de criação de drafts | Open |
| [#7766](https://github.com/agentscope-ai/QwenPaw/pull/7766) | Hub | Autenticação de requests de preview de arquivos via query string | Open |

**Destaque:** A convergência de PRs de segurança (#7769, #7766) indica atenção à postura de segurança do projeto.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários)

| Issue | Tipo | Comentários | Tema Central |
|-------|------|-------------|--------------|
| [#7709](https://github.com/agentscope-ai/QwenPaw/issues/7709) | Bug | 6 | Saída de tarefas agendadas não exibida / oculta no thinking |
| [#7678](https://github.com/agentscope-ai/QwenPaw/issues/7678) | Bug | 6 | subAgent spawn falha com timeout mesmo com timeout longo |
| [#7571](https://github.com/agentscope-ai/QwenPaw/issues/7571) | Question | 6 | Agente esquece configurações e ignora instruções de workspace |
| [#7660](https://github.com/agentscope-ai/QwenPaw/issues/7660) | Question | 4 | Instalação falha (sem detalhes visíveis) |
| [#7722](https://github.com/agentscope-ai/QwenPaw/issues/7722) | Bug | 4 | Exaustão de memória por três caminhos simultâneos (stream buffers, keep-alive, doom-loop) |
| [#7715](https://github.com/agentscope-ai/QwenPaw/issues/7715) | Bug | 4 | Daily Paper falha silenciosamente quando arxiv.org está inacessível |
| [#7739](https://github.com/agentscope-ai/QwenPaw/issues/7739) | Feature | 4 | Solicitar mover histórico de conversas para a lateral direita |
| [#7708](https://github.com/agentscope-ai/QwenPaw/issues/7708) | Bug | 4 | Configuração de modelo grande perdida durante uso |
| [#7724](https://github.com/agentscope-ai/QwenPaw/issues/7724) | Bug | 4 | Sessão inteira perdida após reinicialização de plugin |

### Análise de demandas

1. **Memória e estabilidade (crítico):** Três issues独立的内存问题 (#7222, #7722, #4354) indicam que o gerenciamento de memória é o principal ponto de dor — tanto em crescimento unbounded quanto em vazamentos em cenários específicos (PDFs com caracteres surrogados, contextos longos).

2. **Persistência de estado:** As issues #7708, #7724 e #7705 sugerem que configurações e sessões não estão sendo persistidas corretamente, especialmente após eventos de reload ou plugin restart.

3. **UX do console:** O pedido de mover o drawer de arquivos para a direita (#7739) e o PR #7704 que o implementa mostram que a experiência em dispositivos menores é uma prioridade comunitária.

4. **Integração MCP:** Bugs em servidores Java/Kotlin (#7728, #7729) e problemas de conexão desde 2.2.x (#7716) indicam que a compatibilidade com implementações MCP não-Python precisa de atenção.

---

## 5. Bugs e Estabilidade

### Severidade Alta (impacto operacional direto)

| Bug | Descrição | Impacto |
|-----|-----------|---------|
| [#7722](https://github.com/agentscope-ai/QwenPaw/issues/7722) | **Memory exhaustion** — três caminhos de vazamento: stream buffers, keep-alive instance stacking, doom-loop gate evasion. Crescimento ~1MB/s → OOM em horas | Crítico em produção |
| [#7222](https://github.com/agentscope-ai/QwenPaw/issues/7222) | **Memory unbounded** — backend chega a 20.7 GB após 2 dias de uso contínuo | Crítico em produção |
| [#7678](https://github.com/agentscope-ai/QwenPaw/issues/7678) | **subAgent spawn timeout** — todas as tarefas spawn falham, timeout não ajuda | Funcionalidade quebrada |
| [#7724](https://github.com/agentscope-ai/QwenPaw/issues/7724) | **Sessão perdida** — conversas completas desaparecem após restart de plugin | Perda de dados |
| [#7708](https://github.com/agentscope-ai/QwenPaw/issues/7708) | **Modelo perdido** — configuração de LLM some durante uso normal | Experiência degradada |

### Severidade Média (funcionamento degradado)

| Bug | Descrição | Impacto |
|-----|-----------|---------|
| [#7709](https://github.com/agentscope-ai/QwenPaw/issues/7709) | Saída de tarefas agendadas oculta no thinking | Usabilidade |
| [#7715](https://github.com/agentscope-ai/QwenPaw/issues/7715) | Daily Paper falha silenciosamente (sem proxy/config de fallback) | Funcionalidade |
| [#7716](https://github.com/agentscope-ai/QwenPaw/issues/7716) | MCP não conecta desde upgrade para 2.2.x | Integração |
| [#7745](https://github.com/agentscope-ai/QwenPaw/issues/7745) | Agent switch deleta lastChatIdByAgent | Navegação |

### Bugs fechados relevantes (resolvidos)

| Bug | Descrição | Observação |
|-----|-----------|------------|
| [#4220](https://github.com/agentscope-ai/QwenPaw/issues/4220) | auto_memory_interval não sincroniza índice vetorial | Corrigido |
| [#7199](https://github.com/agentscope-ai/QwenPaw/issues/7199) | daily_paper crash com caracteres surrogados U+D800–U+DFFF | Corrigido |
| [#4710](https://github.com/agentscope-ai/QwenPaw/issues/4710) | Inconsistência de timestamp entre MemoryNode e vector store | Corrigido |
| [#4354](https://github.com/agentscope-ai/QwenPaw/issues/4354) | Leitura de Excel grande causava interrupção forçada | Corrigido |

**Métricas de estabilidade:** Taxa de fechamento de bugs está ativa (14 de 45 issues fechadas = 31% em 24h), indicando que a equipe está respondendo ao backlog.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features solicitadas

| Feature | Issue | Demanda | Indicador |
|---------|-------|---------|-----------|
| Histórico na lateral direita | [#7739](https://github.com/agentscope-ai/QwenPaw/issues/7739) | Reduzir crowding em telas de 14" | PR #7704 em implementação |
| Channel-specific skills | [#7746](https://github.com/agentscope-ai/QwenPaw/issues/7746) | Habilidades restritas a channels específicos (DingTalk, Feishu, etc.) | feature request |
| Modelo failover config | [#7749](https://github.com/agentscope-ai/QwenPaw/issues/7749) | Documentação/clareza sobre故障切换配置 | documentação |
| Enhanced memory management | [#3995](https://github.com/agentscope-ai/QwenPaw/issues/3995) | Arquivamento automático de notas diárias e detecção de conflitos | feature request |
| Visual compaction melhorado | [#7703](https://github.com/agentscope-ai/QwenPaw/pull/7703) | Compressão visual mais estável com recall de batches de imagem | PR em revisão |

### Sinais de roadmap inferidos

1. **Melhoria de UI/UX do console** — múltiplos PRs (#7704, #7750, #7681, #7682, #7752) indicam foco em experiência do usuário web.
2. **Segurança reforçada** — PRs #7769 e #7766 mostram que a equipe está fortalecendo autenticação em desktop e hub.
3. **Suporte a implementações MCP diversas** — Java/Kotlin (#7729), além de melhorias gerais de resiliência de plugins (#7763).
4. **Ferramentas de desenvolvimento** — atualização do make-skill para v2.1 com workflow de planejamento obrigatório.

---

## 7. Resumo de Feedback dos Usuários

### Dores principais

1. **Instabilidade de memória em produção (#7222, #7722):** Usuários reportam que o backend consome memória de forma ilimitada, atingindo 20+ GB e causando travamentos. Este é o problema mais crítico em termos de impacto operacional.

2. **Perda de sessões e configurações (#7724, #7708, #7705):** Padrão recorrente onde conversas e modelos configurados desaparecem após eventos de reload ou plugin restart. Usuários relatam frustração por não conseguirem recuperar sessões.

3. **Esquecimento do agente (#7571):** Usuários reportam que o agente não mantém instruções de workspace e frequentemente "esquece" configurações explícitas, gerando resultados em caminhos incorretos.

4. **SubAgent quebrado (#7678):** A funcionalidade de spawn de subAgentes está completamente inoperante para múltiplos usuários, mesmo com timeouts extendidos.

### Cenários de uso observados

- **Desenvolvimento de plugins:** Usuários configuram workspaces dedicados, usam subAgent para tarefas auxiliares, e enfrentam problemas de isolamento de contexto.
- **Tarefas agendadas:** O plugin Daily Paper é popular, mas vulnerável a falhas de conectividade e caracteres especiais.
- **Uso em desktop (Windows/macOS):** A versão desktop apresenta bugs específicos de autenticação e persistência de estado.

### Satisfação

- A qualidade do produto em version 2.2.x é reconhecidamente alta, mas a estabilidade em uso prolongado precisa de melhoria.
- A comunidade está ativa em contribuições (PRs de primeiro contribuidor, e.g., #7773).
- O roadmap de memória (ReMe, mem0) gera interesse (#4208, #6840).

---

## 8. Backlog que Merece Atenção

### Issues sem resposta há >7 dias

| Issue | Criado | Tipo | Título | Prioridade |
|-------|--------|------|--------|------------|
| [#7678](https://github.com/agentscope-ai/QwenPaw/issues/7678) | 2026-09-11 | Bug | subAgent spawn timeout | **Alta** |
| [#7571](https://github.com/agentscope-ai/QwenPaw/issues/7571) | 2026-09-05 | Question | Agente esquece configurações | **Alta** |
| [#7660](https://github.com/agentscope-ai/QwenPaw/issues/7660) | 2026-09-10 | Question | Instalação falha | **Média** |
| [#7715](https://github.com/agentscope-ai/QwenPaw/issues/7715) | 2026-09-12 | Bug | Daily Paper falha silenciosamente | **Média** |
| [#7222](https://github.com/agentscope-ai/QwenPaw

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-09-15

## 1. Panorama do Dia

O projeto ZeroClaw mantém uma atividade intensa em 15 de setembro de 2026, com **22 issues e 50 pull requests atualizados nas últimas 24 horas**. A distribuição equilibrada entre issues abertas (11) e fechadas (11) indica um fluxo saudável de resolução de problemas. Não há novas releases hoje, mas múltiplos PRs de alta prioridade foram mergeados, concentrados em correções de segurança, estabilidade de canais e melhorias na experiência multimodal. A comunidade demonstra forte engajamento com dois RFCs ativos (#10549, #10366) e pelo menos três issues de segurança em tratamento urgente — todos com标签 `risk:high`.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24 horas.**

O tracker #9459 (v0.8.5 finite weekly stabilization line) permanece aberto, indicando que a estabilização da versão 0.8.5 está em andamento. O freeze de intake ocorreu em 04 de agosto de 2026, e a linha de corte semanal continua processando trabalho pronto sem aguardá-lo para cada marco. A página de milestones serve como fonte oficial para a lista completa de itens.

---

## 3. Progresso do Projeto

Os seguintes PRs foram fechados/mergeados nas últimas 24h, representando avanços significativos:

| PR | Título | Impacto |
|---|---|---|
| [#10307](https://github.com/zeroclaw-labs/zeroclaw/pull/10307) | fix(gateway): one shared pairing-code policy, stronger default | **Segurança** — Código de pareamento agora é configurável e mais forte (anteriormente 6 dígitos numéricos fixos) |
| [#10748](https://github.com/zeroclaw-labs/zeroclaw/pull/10748) | fix(channels): route every outbound HTTP through runtime proxy | **Segurança** — Garante que todos os canais respeitem a política de proxy do deployment |
| [#10747](https://github.com/zeroclaw-labs/zeroclaw/pull/10747) | refactor(channels): build every channel's transcription manager one way | **Qualidade** — Unifica lógica de transcrição entre 8 canais, eliminando 4 bugs recorrentes |
| [#10745](https://github.com/zeroclaw-labs/zeroclaw/pull/10745) | feat(security): make docker sandbox image configurable | **Configuração** — Permite customização da imagem do sandbox Docker |
| [#10589](https://github.com/zeroclaw-labs/zeroclaw/pull/10589) | feat(config): default multimodal.max_image_size_mb to 20 MiB ceiling | **UX** — Limite de imagem aumenta de 5 para 20 MiB, cobrindo fotos comuns de celular |
| [#10582](https://github.com/zeroclaw-labs/zeroclaw/pull/10582) | fix(runtime): decide attachment image markers by provider-loadable contract | **Estabilidade** — Validação de tipos MIME antes de enviar ao provider |
| [#9930](https://github.com/zeroclaw-labs/zeroclaw/pull/9930) | feat(rpc): add sops/run-detail returning full step results | **Observabilidade** — Novo RPC `sops/runs-detail` para diagnostics de SOP |
| [#10727](https://github.com/zeroclaw-labs/zeroclaw/pull/10727) | ci(release): compose X/Discord announcements from release notes | **Automação** — Anúncios de release mais descritivos e contextualizados |

**Destaque de Contribuidor:** JordanTheJet aparece como contributor destacado em praticamente todos os PRs fechados hoje, demonstrando participação consistente em múltiplas áreas (segurança, canais, CI, configuração).

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários)

| Issue | Título | Comentários | Categoria |
|---|---|---|---|
| [#10549](https://github.com/zeroclaw-labs/zeroclaw/issues/10549) | RFC: Simplify RFC voting by removing mandatory discussion windows | 10 | RFC/Governança |
| [#10366](https://github.com/zeroclaw-labs/zeroclaw/issues/10366) | RFC: Clarify PR review evidence and author-action boundaries | 8 | RFC/Processo |
| [#6613](https://github.com/zeroclaw-labs/zeroclaw/issues/6613) | [Feature]: Stronger pairing code than 6 numeric digits | 3 | Segurança (fechada) |
| [#10585](https://github.com/zeroclaw-labs/zeroclaw/issues/10585) | [Bug]: Log sink regression races migration tests | 3 | CI/Tests |

### Análise dos RFCs

Os dois RFCs abertos geram discussões substanciais:

1. **#10549** — Audacity88 propõe eliminar os períodos obrigatórios de discussão (48h para RFCs ordinários, 72h para excepcionais-unanimes), argumentando que na prática esses timers raramente produzem mais revisões. O RFC já tem 10 comentários e está em `status:in-progress`.

2. **#10366** — Também de Audacity88, este RFC adiciona um "expedited merge lane" para PRs que já possuem uma aprovação Core não-autor, checks verdes, sem findings não-resolvidos e sem discussões pendentes. Já está em `status:accepted` após debate de 8 comentários.

### Proposta de feature com potencial

[#10336](https://github.com/zeroclaw-labs/zeroclaw/issues/10336) propõe adicionar **AnySearch como provider built-in** para o `web_search_tool`. Embora com apenas 1 comentário, a proposta é bem estruturada com escopo limitado, sugerindo potencial para contribuição externa.

---

## 5. Bugs e Estabilidade

### Por Severidade

**S1 — Workflow bloqueado (crítico):**
| Issue | Título | Risk | Link |
|---|---|---|---|
| #10863 | Telegram retries rejected voice updates indefinitely | High | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/10863) |
| #10854 | Literal image marker in tool output promoted into malformed image | High | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/10854) |

**S2 — Comportamento degradado:**
| Issue | Título | Risk | Link |
|---|---|---|---|
| #10858 | DateTimeSection invalidates cached prefix at midnight | Medium | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/10858) |
| #10825 | Media placeholder delivered when non-vision model is in use | Medium | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/10825) |
| #10232 | Daemon diagnostics drop underlying error chain | Medium | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/10232) |

**S3 — Problemas menores:**
- [#10842](https://github.com/zeroclaw-labs/zeroclaw/issues/10842): Telegram reaction tool silently no-ops (trait default sem API call)
- [#10796](https://github.com/zeroclaw-labs/zeroclaw/issues/10796): ZeroCode chat input ignores Delete key
- [#10794](https://github.com/zeroclaw-labs/zeroclaw/issues/10794): Advisory Windows nextest test fails
- [#10585](https://github.com/zeroclaw-labs/zeroclaw/issues/10585): Log sink regression races migration tests

### Issues de Segurança em Aberto

Três issues de segurança com `domain:security` e `risk:high` requerem atenção:

1. [#10857](https://github.com/zeroclaw-labs/zeroclaw/issues/10857) — ZeroCode anexa imagens a sessões whose model has no vision capability, resultando em erro 400 do provider
2. [#10854](https://github.com/zeroclaw-labs/zeroclaw/issues/10854) — Marcadores `[IMAGE:...]` em output de tool são promovidos a imagens malformadas
3. [#10853](https://github.com/zeroclaw-labs/zeroclaw/issues/10853) — Follow-ups do header `x-opencode-session` (relacionado a #10603, #10604)

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features aceitas em progresso

| Issue | Título | Prioridade | Link |
|---|---|---|---|
| #9814 | feat(channels): native XMPP / Prosody channel | P2 | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/9814) |
| #9459 | Tracker: v0.8.5 finite weekly stabilization | P2 | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/9459) |
| #9971 | feat(channels): authorize Discord members by role | High | [Link](https://github.com/zeroclaw-labs/zeroclaw/pull/9971) |

### Novas demandas identificadas

1. **XMPP Channel (#9814)** — Feature request para suporte nativo a XMPP/Prosody/ejabberd, permitindo deployments leves e self-hosted. Interessante para usuários home-lab e low-resource. Já aceita (`status:accepted`).

2. **AnySearch como provider built-in (#10336)** — Proposta de contribuição externa com escopo limitado: adicionar provider `anysearch` ao routing existente do web-search.

### PRs abertos indicativos de direção

| PR | Título | Tamanho | Implicação |
|---|---|---|---|
| [#10840](https://github.com/zeroclaw-labs/zeroclaw/pull/10840) | feat(docs): generate llms.txt and llms-full.txt | L | Preparação paraLLM-readiness da documentação |
| [#10351](https://github.com/zeroclaw-labs/zeroclaw/pull/10351) | feat(runtime): enforce execution-tree iteration budgets | L | Controles de segurança para execução de agentes |
| [#9272](https://github.com/zeroclaw-labs/zeroclaw/pull/9272) | feat(anthropic): handle refusals with fallback notices | XL | Melhor tratamento de recusas da API Anthropic |
| [#9830](https://github.com/zeroclaw-labs/zeroclaw/pull/9830) | fix(browser): make full browser automation opt-in | M | Separação de browser_open e automação completa |

---

## 7. Resumo de Feedback dos Usuários

### Dores reportadas através de issues

| Dor | Issue | Severidade |
|---|---|---|
| **Segurança de pairing fraca** — 6 dígitos numéricos é insuficientemente seguro | #6613 (fechada) | P1 |
| **Imagens grandes são dropadas silenciosamente** — Limite de 5 MiB é menor que fotos comuns | #10589 (fechada via PR) | P2 |
| **Telegram reaction não funciona** — Usuários esperam feedback de reações | #10842 | P2 |
| **Delete key não funciona no chat** — Problema de UX básico | #10796 | P3 |
| **Daemons não informam erro completo** — Diagnostics dropam chain de erros | #10232 | P2 |

### Observações positivas (via PRs fechados)

- A comunidade valoriza as melhorias de **documentação** (mdbook, ADR, troubleshooting)
- O processo de **release automatizado** foi bem recebido
- Configurabilidade do **sandbox Docker** era demanda antiga

### Gaps de experiência

1. **Localization** — Issue #10789 solicita localização dos diagnósticos de startup do daemon (usando Fluent catalogue)
2. **Windows recovery** — Issue #10792 pede documentação mais clara para recovery após daemon reload refusal
3. **Documentação de arquitetura** — ADR #10562 define processo de exceções para holding crate

---

## 8. Backlog que Merece Atenção

### Issues sem resposta significativa (>7 dias sem atualização)

| Issue | Título | Criado | Última Atualização | Prioridade |
|---|---|---|---|---|
| [#9814](https://github.com/zeroclaw-labs/zeroclaw/issues/9814) | Native XMPP channel | 2026-08-07 | 2026-09-14 | P2 |
| [#9272](https://github.com/zeroclaw-labs/zeroclaw/pull/9272) | Anthropic refusals handling | 2026-07-23 | 2026-09-14 | — (PR) |
| [#9830](https://github.com/zeroclaw-labs/zeroclaw/pull/9830) | Browser automation opt-in | 2026-08-07 | 2026-09-14 | — (PR) |

### Issues aceitas sem movimento recente

| Issue | Título | Status | Link |
|---|---|---|---|
| #9459 | v0.8.5 stabilization tracker | `status:accepted` | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/9459) |
| #10366 | RFC PR review evidence | `status:accepted` | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/10366) |
| #9971 | Discord role authorization | Needs author action | [Link](https://github.com/zeroclaw-labs/zeroclaw/pull/9971) |

### Recomendações de priorização

1. **Urgente**: As 3 issues de segurança (S1) em aberto (#10863, #10854, #10857) — todas com `risk:high`
2. **Alta**: PR #10381 (security fix host launchers) — `risk:high`, aberto desde 2026-08-26
3. **Média**: Feature XMPP (#9814) — demanda de comunidade, sem movimento de triagem desde agosto

---

*Relatório gerado automaticamente com base nos dados do GitHub de zeroclaw-labs/zeroclaw para 2026-09-15. Próxima atualização recomendada: 2026-09-16.*

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*