# Resumo diário do ecossistema de agentes de IA 2026-05-24

> Issues: 0 | PRs: 12 | Projetos cobertos: 7 | Gerado em: 2026-05-23 20:43 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

```json
{
  "report_generated_at": "2026-05-24",
  "project": "nullclaw/nullclaw",
  "report_type": "daily_project_status",
  
  "sections": {
    "panorama_do_dia": {
      "summary": "O projeto NullClaw apresenta alta atividade de desenvolvimento no dia 2026-05-24, com 12 pull requests atualizados nas últimas 24h, todos ainda em estado aberto aguardando merge. Não houve novos lançamentos, issues fechadas ou releases publicadas. A atividade concentra-se em melhorias de estabilidade (fixes), reforços de segurança, refatorações HTTP e expansão de provedores/funcionalidades. O projeto demonstra um fluxo saudável de contribuições com múltiplos autores ativos (raskevichai, vernonstinebaker, racribeiro, ncode, yanggf8, PierreLeGuen), sugerindo uma comunidade engajada.",
      "activity_metrics": {
        "prs_updated_24h": 12,
        "prs_open": 12,
        "prs_merged_closed": 0,
        "issues_updated_24h": 0,
        "releases_24h": 0
      }
    },
    
    "lancamentos": {
      "status": "sem_novos_lancamentos",
      "details": "Nenhuma release foi publicada nas últimas 24h. O projeto mantém sua versão estável atual sem alterações de versão."
    },
    
    "progresso_do_projeto": {
      "summary": "Não houve PRs merged ou fechados nas últimas 24h. Todos os 12 PRs atualizados permanecem em estado aberto, indicando que a atividade do dia foi exclusivamente de submissão e revisão inicial de código.",
      "prs_em_revisao": [
        {
          "number": 930,
          "title": "feat(telegram): include reply_to_message text in inbound context",
          "author": "raskevichai",
          "status": "OPEN",
          "impact": "Melhora contexto de mensagens no Telegram ao incluir texto de reply_to_message, fechando issue #916",
          "link": "https://github.com/nullclaw/nullclaw/pull/930"
        },
        {
          "number": 929,
          "title": "fix(tools/memory_list): default session_id to null so globals are visible",
          "author": "raskevichai",
          "status": "OPEN",
          "impact": "Corrige visibilidade de entradas globais de memória, fechando issue #917",
          "link": "https://github.com/nullclaw/nullclaw/pull/929"
        },
        {
          "number": 928,
          "title": "fix(channels): deliver subagent results to telegram in polling mode",
          "author": "raskevichai",
          "status": "OPEN",
          "impact": "Resolve desaparecimento silencioso de resultados de subagentes em bots Telegram, fechando issue #918",
          "link": "https://github.com/nullclaw/nullclaw/pull/928"
        },
        {
          "number": 924,
          "title": "fix(config): tolerate numeric items in channel allow-lists",
          "author": "raskevichai",
          "status": "OPEN",
          "impact": "Corrige silenciamento de contas Telegram com IDs numéricos, fechando issues #869 e #901",
          "link": "https://github.com/nullclaw/nullclaw/pull/924"
        }
      ]
    },
    
    "temas_quentes_da_comunidade": {
      "summary": "Não há métricas de comentários ou reações disponíveis nos dados fornecidos (undefined). Entre os PRs em destaque por escopo e impacto potencial, destacam-se: a refatoração HTTP para eliminar subprocessos curl (#881), o hardening de segurança em webhooks e cron (#907), e a feature de cron subagent com histórico (#783) — todos representam avanços significativos em áreas críticas do projeto.",
      "prs_destaque": [
        {
          "number": 907,
          "title": "Security harden webhooks, HTTP secrets, and cron shell jobs",
          "author": "racribeiro",
          "area": "Segurança",
          "scope": "Remoção de subprocessos curl com credenciais, exigência de allow_from explícito para Telegram/Discord/LINE",
          "link": "https://github.com/nullclaw/nullclaw/pull/907"
        },
        {
          "number": 881,
          "title": "refactor(http): remove runtime curl subprocesses",
          "author": "ncode",
          "area": "Arquitetura",
          "scope": "Migração completa de helpers HTTP baseados em curl para std.http nativos em Zig",
          "link": "https://github.com/nullclaw/nullclaw/pull/881"
        },
        {
          "number": 783,
          "title": "feat(cron): cron subagent, run history, JSON output, security hardening",
          "author": "yinggf8",
          "area": "Funcionalidade",
          "scope": "Motor de scheduler DB-backed, tabela cron_runs, worker cron_run_queue, tipos skill/agent/shell",
          "link": "https://github.com/nullclaw/nullclaw/pull/783"
        }
      ]
    },
    
    "bugs_e_estabilidade": {
      "summary": "O dia apresenta 5 correções de bugs submetidas, todas ainda em revisão. Os bugs abrangem: desaparecimento de resultados de subagentes Telegram, visibilidade de memória global, tolerância a IDs numéricos em allow-lists, e path security para macOS. Não há evidências de crashes ou regressões em produção reportadas.",
      "bugs_reportados": [
        {
          "number": 928,
          "severity": "high",
          "title": "Subagent results silently disappear in telegram polling mode",
          "description": "spawn-tool results never reach users in nullclaw channel start telegram sessions",
          "fix_in_progress": true,
          "link": "https://github.com/nullclaw/nullclaw/pull/928"
        },
        {
          "number": 929,
          "severity": "medium",
          "title": "Memory list doesn't return global entries when session_id is null",
          "description": "Usuários não conseguem visualizar entradas globais de memória armazenadas sem session_id",
          "fix_in_progress": true,
          "link": "https://github.com/nullclaw/nullclaw/pull/929"
        },
        {
          "number": 924,
          "severity": "medium",
          "title": "Accounts with numeric user IDs silently disappear from channel runtime",
          "description": "IDs numéricos em allow_from causam silenciamento de contas Telegram",
          "fix_in_progress": true,
          "link": "https://github.com/nullclaw/nullclaw/pull/924"
        },
        {
          "number": 925,
          "severity": "low",
          "title": "macOS workspace under /private/var/folders incorrectly blocked",
          "description": "Path security bloqueia workspaces legítimos em var/folders",
          "fix_in_progress": true,
          "link": "https://github.com/nullclaw/nullclaw/pull/925"
        },
        {
          "number": 891,
          "severity": "medium",
          "title": "Curl transport failures collapsed in provider health probes",
          "description": "Transport errors como CurlDnsError, CurlTlsError não são propagados corretamente",
          "fix_in_progress": true,
          "link": "https://github.com/nullclaw/nullclaw/pull/891"
        }
      ]
    },
    
    "pedidos_de_features_e_sinais_de_roadmap": {
      "summary": "Duas novas features foram submetidas: integração com provedor NEAR AI Cloud (#922) e inclusão de texto de reply_to_message no contexto Telegram (#930). A refatoração HTTP completa (#881) e a feature de cron subagent (#783) indicam direção clara de modernização da arquitetura e expansão de capacidades de automação.",
      "novas_features": [
        {
          "number": 930,
          "title": "feat(telegram): include reply_to_message text in inbound context",
          "author": "raskevichai",
          "impact": "Melhora compreensão contextual em conversas Telegram ao preservar histórico de replies",
          "link": "https://github.com/nullclaw/nullclaw/pull/930"
        },
        {
          "number": 922,
          "title": "feat(providers): add NEAR AI Cloud provider",
          "author": "PierreLeGuen",
          "impact": "Adiciona provedor nearai como OpenAI-compatible com catalog de modelos automático",
          "link": "https://github.com/nullclaw/nullclaw/pull/922"
        }
      ],
      "features_em_desenvolvimento": [
        {
          "number": 783,
          "title": "Cron subagent engine com histórico de execuções",
          "scope": "DB-backed scheduler, cron_runs history, worker queue, skill/agent/shell job types",
          "link": "https://github.com/nullclaw/nullclaw/pull/783"
        },
        {
          "number": 881,
          "title": "Migração completa de subprocessos curl para std.http nativo",
          "scope": "Providers, channels, gateway, tools, memory API, update, voice e SSE paths",
          "link": "https://github.com/nullclaw/nullclaw/pull/881"
        }
      ]
    },
    
    "resumo_de_feedback_dos_usuarios": {
      "summary": "Os dados disponíveis não incluem issues de usuários ou feedback direto. O padrão de issues citadas nos PRs (#916, #917, #918, #869, #901) indica reportes de: comportamento de resposta em grupo Telegram, visibilidade de memória global, perda de resultados de subagentes, e problemas com IDs numéricos em configurações. A comunidade demonstra foco em estabilidade e usabilidade em casos práticos de produção.",
      "insights_from_issues_closed_by_prs": [
        "#916: Usuários reportaram necessidade de contexto completo de replies no Telegram",
        "#917: Usuários não conseguiam visualizar memória global através de memory_list",
        "#918: Produtividade impactada por perda silenciosa de resultados de subagentes",
        "#869 e #901: Autores preferem IDs numéricos para allow_from (padrão Telegram API)"
      ]
    },
    
    "backlog_que_merece_atencao": {
      "summary": "Três PRs de alto impacto permanecem abertos há mais de uma semana sem merge: a refatoração HTTP (#881, 23 dias), o hardening de segurança (#907, 14 dias) e o cron subagent (#783, 47 dias). A falta de merges pode indicar necessidade de revisores adicionais ou dependências entre PRs que impedem a progressão.",
      "prs_pendentes_sem_merge": [
        {
          "number": 881,
          "title": "refactor(http): remove runtime curl subprocesses",
          "author": "ncode",
          "days_open": 23,
          "priority": "high",
          "reason": "Refatoração arquitetural crítica — migração para std.http nativo afeta múltiplos módulos",
          "link": "https://github.com/nullclaw/nullclaw/pull/881"
        },
        {
          "number": 907,
          "title": "Security harden webhooks, HTTP secrets, and cron shell jobs",
          "author": "racribeiro",
          "days_open": 14,
          "priority": "critical",
          "reason": "Hardening de segurança afeta superfície de ataque em produção",
          "link": "https://github.com/nullclaw/nullclaw/pull/907"
        },
        {
          "number": 783,
          "title": "feat(cron): cron subagent, run history, JSON output, security hardening",
          "author": "yinggf8",
          "days_open": 47,
          "priority": "medium",
          "reason": "Feature de automação significativa com impacto em casos de uso de produção",
          "link": "https://github.com/nullclaw/nullclaw/pull/783"
        }
      ]
    }
  },
  
  "overall_health_indicators": {
    "activity_level": "high",
    "maintenance_quality": "good",
    "security_focus": "elevated",
    "community_engagement": "healthy",
    "recommendations": [
      "Priorizar review dos PRs de segurança (#907) e refatoração HTTP (#881)",
      "Verificar dependências entre PRs que possam estar bloqueando merges",
      "Considerar atenção aos PRs abertos há mais de 2 semanas para evitar stale",
      "Avaliar necessidade de mais reviewers paraPRs de alto impacto"
    ]
  }
}
```

---

## Comparação entre projetos do ecossistema


# Relatório Comparativo — Ecossistema de Agentes de IA Open Source

**Data de referência:** 2026-05-24 | **Projetos analisados:** 7

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **duas velocidades distintas** de desenvolvimento neste período. Hermes Agent, IronClaw e ZeroClaw lideram em volume absoluto de atividade (50 PRs/50 issues por dia), sinalizando projetos em fase de desenvolvimento intensivo com equipes maiores. NanoBot destaca-se pela eficiência de entrega com 4 merges em 24h e ciclo de PRs saudável, demonstrando maturidade no processo de revisão. Os projetos NullClaw, PicoClaw e CoPaw operam em escala menor, porém com foco intensivo em estabilização e expansão de funcionalidades específicas. A segurança emerge como tema transversal — hardening de webhooks, credenciais e hooks framework são priorizados em múltiplos projetos simultaneamente. O Telegram consolidou-se como plataforma predominante de integração, com issues de estabilidade específica ao Telegram appearing em todos os projetos que o suportam.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs Atualizados | PRs Merged | Releases | Avaliação de Saúde |
|---------|-------------|-----------------|------------|----------|-------------------|
| **Hermes Agent** | 50 (6 fechadas) | 50 | 11 | 0 | ⚠️ **Alta atividade com instabilidade** — 6+ bugs P1 no gateway Telegram |
| **IronClaw** | 10 (0 fechadas) | 50 (21 merged) | 21 | 0 | ⚠️ **Desenvolvimento intensivo** — 3 issues de segurança pendentes, E2E falhando |
| **ZeroClaw** | 50 (12 fechadas) | 50 | ~4 | 0 (v0.8.0-beta-1) | ✅ **Processo saudável** — triagem ativa, PRs sendo fechados |
| **NullClaw** | 0 | 12 | 0 | 0 | ✅ **Comunidade engajada** — 6 autores ativos, 5 bugs em correção |
| **NanoBot** | 7 (2 fechadas) | 10 | 4 | 0 | ✅ **Excelente cadência** — 2 bugs resolvidos, 1 novo provider |
| **PicoClaw** | 6 | 11 | 6 | 1 (nightly) | ⚠️ **Stável com atenção** — bug crítico de 23 dias sem resposta |
| **CoPaw** | 11 (1 fechada) | 3 | 0 | 0 | ⚠️ **Crescimento recente** — 100% issues respondidas em <24h |

---

## 3. Posicionamento do Projeto Principal (NullClaw)

### Vantagens Competitivas

| Dimensão | NullClaw | Posição Relativa |
|----------|----------|------------------|
| **Comunidade ativa** | 6+ autores únicos em 24h | Acima da média — CoPaw (3), NanoBot (7) |
| **Qualidade de bugs** | 5 correções em progresso simultâneo | Alto engajamento em estabilidade |
| **Modernização técnica** | Refatoração HTTP std.http nativa (Zig) | Diferenciador arquitetural único |
| **Segurança** | Hardening proativo de webhooks/cron | Emparalelo com IronClaw (#907) |
| **Canais suportados** | Telegram, Discord, LINE | Foco em integração, não数量的 |

### Diferenças Técnicas

- **Stack em Zig**: Único projeto do ecossistema utilizando Zig para runtime, oferecendo binários menores e performance nativa
- **Arquitetura de subagentes**: Solução robusta para resultados de subagentes em polling mode (PR #928)
- **Gestão de memória global**: Visibilidade configurável de sessões (PR #929)
- **Modelo de credenciais**: Permit-list explícito por canal — abordagem mais restritiva que peers

### Tamanho e Engajamento da Comunidade

NullClaw apresenta **comunidade pequena porém altamente engajada** quando comparada aos projetos de escala Hermes/IronClaw. A ausência de PRs merged nas últimas 24h, porém com 12 submissões, indica que o projeto está em fase de submissão inicial — não há gargalo de review, mas necessidade de reviewers para evitar stale. Os 3 PRs de alto impacto pendentes há 14-47 dias (HTTP refactor, security hardening, cron subagent) representam risco de desmotivação de contribuidores se não houver movimento em breve.

---

## 4. Focos Técnicos Compartilhados

### Prioridades Transversais Identificadas

| Foco Técnico | Projetos Afetados | Evidência |
|--------------|-------------------|-----------|
| **Framework de Hooks/Lifecycle** | NanoBot, Hermes, IronClaw, CoPaw, NullClaw | 5+ issues/prs em 24h sobre hooks de sessão, tool-use e message lifecycle |
| **Segurança de Credenciais** | Hermes, IronClaw, NullClaw, ZeroClaw | Hardening de webhooks, path placeholders, silent-fallback resolution |
| **Estabilidade Telegram** | Hermes, NullClaw, PicoClaw, ZeroClaw | 10+ issues P1-P2 relacionadas a polling, topic binding e DM topics |
| **Memória de Longo Prazo** | NanoBot, CoPaw, IronClaw | Dream system, session archiving, durable backends (LibSQL/Postgres) |
| **Multi-provider** | NanoBot, PicoClaw, NullClaw, ZeroClaw | Expansão simultânea de provedores (Zhipu, DeepSeek, Azure Speech, NEAR AI) |
| **MCP (Model Context Protocol)** | CoPaw, Hermes, IronClaw | OAuth support, tool filtering, MCP marketplace — área crítica em CoPaw |

### Matriz de Relevância

```
Segurança Credenciais:     Hermes ████████████  IronClaw ██████████  NullClaw ███████  ZeroClaw ██████
Hooks/Lifecycle:          CoPaw ██████████    Hermes ██████████    IronClaw ██████    NanoBot ████
Estabilidade Telegram:    Hermes ████████████  ZeroClaw ███████    NullClaw █████     PicoClaw ███
Memória Longo Prazo:       IronClaw ██████████ NanoBot ████████    CoPaw ████         NullClaw ███
Multi-Provider:           PicoClaw ██████████  NanoBot ████████    NullClaw ████      ZeroClaw ████
MCP Protocol:             CoPaw ████████████  Hermes ██████        IronClaw █████
```

---

## 5. Análise de Diferenciação

### Por Arquitetura e Stack

| Projeto | Stack Principal | Abordagem de Arquitetura | Público-Alvo |
|---------|-----------------|-------------------------|--------------|
| **NullClaw** | Zig | Runtime leve, multi-canal com polling | Desenvolvedores que buscam performance |
| **NanoBot** | Python | Modular com BM25 router, providers flexíveis | Usuários com múltiplos provedores, eficiência de custo |
| **Hermes** | TypeScript | Plugin-architecture extensível | Times enterprise com integrações complexas |
| **PicoClaw** | Go | Binário único, feature flags para channels | Operadores que necessitam artefatos minimalistas |
| **IronClaw** | Rust | Sandbox híbrido (Docker + Command), Reborn initiative | Ambientes multi-tenant, compliance enterprise |
| **CoPaw** | Python | Plugin-first com marketplace MCP | Desenvolvedores que necessitam extensibilidade |
| **ZeroClaw** | Rust | 22 canais nativos, crate-based modularity | Organizações com necessidade multi-canal massiva |

### Por Estratégia de Mercado

**Eficiência de custo** (NanoBot): BM25 router reduzindo tokens em 60%, temperature por subagente — diferenciação clara para uso em produção com budgets restritos.

**Extensibilidade** (CoPaw, IronClaw): Marketplace de plugins e skills, hooks framework — posicionados para ecossistema de parceiros e extensões de terceiros.

**Estabilidade enterprise** (Hermes, IronClaw, ZeroClaw): Volume massivo de PRs e issues indica foco em robustez para deployment em produção em larga escala.

**Performance e minimalismo** (NullClaw, PicoClaw): Zig e Go respectivamente — binários menores, consumo reduzido de recursos, adequados para edge computing ou ambientes limitados.

---

## 6. Tração e Maturidade da Comunidade

### Indicadores de Iteração Rápida

| Projeto | Velocidade de Merge | Tempo de Resposta | Crescimento de Contribuidores |
|---------|--------------------|--------------------|-------------------------------|
| **NanoBot** | ⭐⭐⭐⭐⭐ Excelente — 4 merges/24h | <24h (2 bugs resolvidos) | 7 autores únicos — alto |
| **PicoClaw** | ⭐⭐⭐⭐ Bom — 6 merges/24h | Variável (bug #2742: 23 dias) | 10+ contributors |
| **ZeroClaw** | ⭐⭐⭐⭐ Bom — 12 itens fechados | Triagem ativa | Equipe distribuída |
| **Hermes** | ⭐⭐⭐ Moderado — 11 merges/50 PRs | Backlog de 6+ bugs P1 | Alto volume, mas sem resolution em P1s |

### Indicadores de Consolidação de Qualidade

| Projeto | Pattern | Evidência |
|---------|---------|-----------|
| **IronClaw** | Pre-release stabilization | 21 merges, mas 3 security issues pendentes + E2E falhando — maturando |
| **NullClaw** | Feature freeze aparente | 12 PRs submitted, 0 merged — aguardando review cycle |
| **CoPaw** | Crescimento jovem com resposta rápida | 100% issues <24h, mas 0 merges — fase de triagem |
| **Hermes** | Technical debt accumulation | 6+ bugs P1 Telegram sem resolução — risco de burnout |

### Ranking de Maturidade de Processo

1. **NanoBot** — Ciclo de feedback mais saudável, alta taxa de resolução
2. **PicoClaw** — Problema crônico (#2742) indica gargalo, mas merges fluem
3. **ZeroClaw** — Triagem ativa, mas versão beta com bugs críticos pendentes
4. **NullClaw** — Processo saudável, mas PRs de alto impacto estagnados
5. **IronClaw** — Desenvolvimento intensivo sem pausa de estabilização
6. **CoPaw** — Crescimento novo, sem merges ainda
7. **Hermes** — Volume alto mascarando problemas de estabilidade não resolvidos

---

## 7. Sinais de Tendência

### Tendências de Mercado Extraídas do Feedback

#### 1. **Consolidação do Telegram como Canal Primário**
*Evidência:* Hermes (10+ bugs P1-P2), NullClaw (polling mode, reply context), PicoClaw (channel startup), ZeroClaw (multiple issues) — todos investindo simultaneamente em estabilidade Telegram.

> **Implicação:** Projetos que não resolverem problemas de Telegram polling, topic binding e DM handling perderão competitividade em 2026H2.

#### 2. **Eficiência de Custo como Diferenciador Principal**
*Evidência:* NanoBot BM25 router (60% redução de tokens), temperature por subagent (JSON output vs brainstorming), multi-provider transparency — todas funcionalidades para reduzir custos operacionais.

> **Implicação:** Funcionalidades de cost-awareness (token metering, provider fallback inteligente, budget enforcement) serão expectáveis em 2026.

#### 3. **MCP (Model Context Protocol) em Expansão**
*Evidência:* CoPaw investindo em marketplace MCP e OAuth, Hermes em per-channel tool filtering, IronClaw em MCP credential routing.

> **Implicação:** MCP substituirá adapters custom como padrão de integração de ferramentas. Projetos sem suporte MCP perderão interoperabilidade.

#### 4. **Hooks/Lifecycle como Feature de Tabela**
*Evidência:* CoPaw (session/message lifecycle hooks), IronClaw (production hooks), NanoBot (hooks feature request #2182), Hermes (hook framework), NullClaw (cron subagent).

> **Implicação:** Hooks para SessionStart, PreToolUse, PostToolUse, SessionEnd serão feature parity expectation, não diferencial.

#### 5. **Segurança em Primeiro Plano**
*Evidência:* IronClaw (3 security issues em 24h), NullClaw (#907 security harden), Hermes (API redaction), ZeroClaw (silent-fallback hardening).

> **Implicação:** A adoção em cenários enterprise está forçando postura security-first. Credential handling, webhook hardening e sandboxing serão auditados por usuários corporativos.

#### 6. **Multi-Canal como Padrão, Não Exceção**
*Evidência:* ZeroClaw (22 canais), NullClaw (Telegram/Discord/LINE), PicoClaw (WeChat multi-conta em desenvolvimento), Hermes (Telegram + múltiplos gateways).

> **Implicação:** Arquiteturas que suportam 10+ canais simultâneos com configuração declarativa terão vantagem competitiva para deploys enterprise.

#### 7. **Memória Persistente e Longo Prazo**
*Evidência:* NanoBot (Dream system improvements), CoPaw (auto-summary on session end), IronClaw (durable predicate backends), Hermes (inherit_memory para subagentes).

> **Implicação:** Agentes stateless estão se tornando obsoletos. Memory persistence com durabilidade (LibSQL, Postgres) e estratégia de condensação serão diferenciadores.

---

## Síntese Executiva

| Dimensão | Líder | Seguidores | Opportunidade para NullClaw |
|----------|-------|------------|-----------------------------|
| **Volume de atividade** | Hermes/IronClaw/ZeroClaw | PicoClaw, NanoBot, NullClaw, CoPaw | Manter engajamento de 6 autores sem diluir foco |
| **Velocidade de entrega** | NanoBot | PicoClaw, ZeroClaw | Priorizar merge de PRs de alto impacto pendentes |
| **Estabilidade Telegram** | Nenhum (todos com issues) | — | Oportunidade de liderança resolvendo polling mode e subagent results |
| **Segurança** | IronClaw (proativo) | NullClaw (#907), Hermes, ZeroClaw | Manter paridade com IronClaw em hardening |
| **Eficiência de custo** | NanoBot (BM25 router) | CoPaw (token speed display) | Avaliar BM25 ou similar para routing de tools |
| **

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório de Projeto — NanoBot (HKUDS/nanobot)
**Data:** 2026-05-24 | **Período:** últimas 24h

---

## 1. Panorama do Dia

O NanoBot demonstra alta atividade de desenvolvimento hoje, com **7 issues e 10 PRs atualizados**. O ciclo de pull requests está particularmente intenso — **4 PRs foram merged/fechados**, indicando ritmo de entrega saudável. A plataforma está em plena evolução funcional com contribuições concentradas em três eixos: refinamento de memória de longo prazo, expansão de providers (OpenAI, Zhipu, Azure Speech) e ergonomia do sistema de ferramentas (spawn, exec, /skill). Nenhum release formal foi publicado, sinalizando que o projeto ainda está em fase de feature-completion sem tagging de versão formal para o período.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.** O projeto mantém sua atividade em branch de desenvolvimento, com mudanças acumuladas em PRs abertos e merges diretos em `main`. Não há notas de migração ou changelog release para este período.

> **Recomendação:** Considerar um release formal para estabilizar o conjunto de mudanças merged recentemente (memória, exec timeout, transcription apiBase) antes de acumular mais alterações quebrando a cadeia.

---

## 3. Progresso do Projeto

PRs fechados/merged com impacto direto:

| PR | Autor | Impacto |
|---|---|---|
| [#3952](https://github.com/HKUDS/nanobot/pull/3952) | chengyongru | **Melhoria de memória de longo prazo** — enhancements nos prompts do Dream System e Consolidator para memória MECE, atacando o problema de duplicação massiva entre `MEMORY.md` e `history.jsonl`. Resolve a "fome" do Dream (leitura única do `history.jsonl`). |
| [#3967](https://github.com/HKUDS/nanobot/pull/3967) | 04cb | **Fix de dois bugs críticos** — (1) remove limite de 600s no timeout configurável do `exec`, fechando #3595; (2) normaliza o `apiBase` de transcription para formato chat-style (Groq/OpenAI compat), fechando #3637. |
| [#3972](https://github.com/HKUDS/nanobot/pull/3972) | honjioxuan | **Melhoria de documentação** — substitui configuração `custom` do Xiaomi MiMo pelo provider nativo `xiaomi_mimo`, simplificando onboarding. |
| [#3971](https://github.com/HKUDS/nanobot/pull/3971) | JiajunBernoulli | **Novo provider** — adiciona suporte a geração de imagem via Zhipu (智谱), expandindo cobertura de provedores de imagem. |

**Avanço líquido:** Correções de estabilidade (+2 bugs resolvidos), nova capacidade de memória, novo provider de imagem. Ciclo de entrega robusto para um único dia.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engagement

| Issue | Tipo | Comentários | 👍 | Relevância |
|---|---|---|---|---|
| [#2182](https://github.com/HKUDS/nanobot/issues/2182) — Hooks feature (Claude Code/Copilot CLI style) | Feature Request | 2 | 2 | Alta — demanda recorrente de automação de lifecycle events (SessionStart, Pre/PostToolUse). Usuários querem hooks shell, HTTP e LLM prompts em eventos específicos. |
| [#3633](https://github.com/HKUDS/nanobot/issues/3633) — "Duplicate item found with id" com GPT | Bug | 1 | 0 | Crítica — causa crash e impede resume do agent loop quando GPT-5.5 retorna id duplicado. Afeta confiabilidade em produção. |

### PRs com maior potencial de impacto

| PR | Autor | Impacto Estratégico |
|---|---|---|
| [#3865](https://github.com/HKUDS/nanobot/pull/3865) — BM25-lite skill router | Krislu1221 | **Alta** — roteamento inteligente de skills por BM25 reduz system prompt em ~60% (de 3.000+ tokens para top-5 relevantes). Afeta custo, latência e qualidade de roteamento de ferramentas. |
| [#3968](https://github.com/HKUDS/nanobot/pull/3968) — `/skill` slash command | Endeavour-Yuan | **Média** — resolução de UX gap reportado em #3959; adiciona discoverabilidade de skills disponíveis. |
| [#3975](https://github.com/HKUDS/nanobot/pull/3975) — per-subagent temperature | 04cb | **Alta** — atende #3969; diferencia采样温度 por tarefa (0.0 para JSON, 0.7-1.0 para brainstorming), resolvendo uniformidade de saída dos subagentes. |

**Análise de demanda:** A comunidade está concentrando esforços em (1) **eficiência de tokens e custo** (BM25 router), (2) **customização granular de agentes** (temperature por subagente, hooks lifecycle) e (3) **estabilidade em produção** (bug de id duplicado, transcription config). O volume de issues sobre "dream system" e memória indica que a estratégia de memória de longo prazo está em evolução ativa.

---

## 5. Bugs e Estabilidade

### Bugs reportados/ativos

| Issue | Severidade | Estado | Descrição |
|---|---|---|---|
| [#3633](https://github.com/HKUDS/nanobot/issues/3633) | **Alta** | ABERTA | "Duplicate item found with id" — erro HTTP 400 do Codex/GPT ao chamar API; agent loop trava e não consegue resume. Investigação ativa desde 2026-05-05. |
| [#3637](https://github.com/HKUDS/nanobot/issues/3637) | **Média** | **FECHADA** | Transcription provider config não transparente — usuário configurava Groq + apiBase em formato incompatível. **Resolvido via #3967.** |

### Regressões ou problemas recorrentes

- **Timeout do `exec` (agora resolvido):** Limite de 600s bloqueava tarefas longas (downloads, scripts). **Fechado em #3967 via #3595.**
- **Transcription Groq config (resolvido):** apiBase em formato errado causava setups inválidos. **Normalizado em #3967.**

### Saúde geral de estabilidade

A taxa de resolução de bugs está boa — 2 de 2 issues fechadas hoje. Porém, **#3633 continua aberta há 18 dias** sem solução, indicando possível complexidade ou necessidade de reproduzir o ambiente. Este é o principal ponto de atenção em estabilidade.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em demanda (issues abertas)

| Issue | Autor | Prioridade Sinalizada | Descrição |
|---|---|---|---|
| [#2182](https://github.com/HKUDS/nanobot/issues/2182) | andrader | Alta (👍 2) | **Hooks system** — execução automática de shell commands/HTTP endpoints/LLM prompts em eventos lifecycle (SessionStart, PreToolUse, PostToolUse, etc). Inspirado em Claude Code/Copilot CLI. Potencial de ser feature diferenciadora. |
| [#2837](https://github.com/HKUDS/nanobot/issues/2837) | CHM5 | Média | **WhatsApp smart pause** — pausar bot por 12h quando humano real responde no chat. Caso de uso real de automação de atendimento. |
| [#3973](https://github.com/HKUDS/nanobot/issues/3973) | chxuan | Média-Alta | **Dream System hunger problem** — Dream depende exclusivamente de `history.jsonl` e não aprende em tempo real. Proposta de múltiplas fontes de memória. Alinhado com o trabalho de #3952. |
| [#3969](https://github.com/HKUDS/nanobot/issues/3969) | codeLong1024 | Alta | **spawn tool + temperature param** — subagentes herdam temperatura fixa (0.1), saída uniforme. Já **pronto para merge em #3975.** |

### PRs aguardando review (potencial de release)

- **[#3975](https://github.com/HKUDS/nanobot/pull/3975)** — per-subagent temperature → fecha #3969 ✅
- **[#3974](https://github.com/HKUDS/nanobot/pull/3974)** — OpenAI API type + extraBody config
- **[#3968](https://github.com/HKUDS/nanobot/pull/3968)** — `/skill` command
- **[#3865](https://github.com/HKUDS/nanobot/pull/3865)** — BM25 skill router (60% redução de tokens)
- **[#3970](https://github.com/HKUDS/nanobot/pull/3970)** — Azure Speech Voice-to-text
- **[#1443](https://github.com/HKUDS/nanobot/pull/1443)** — Heartbeat reasoning decoupling (em aberto desde 2026-03-02)

**Sinais de roadmap inferidos:** O projeto está convergindo para (1) memória de longo prazo mais inteligente, (2) multi-provider para audio (Azure, Groq transcription, Zhipu image gen), (3) controle granular de temperatura/ comportamento de subagentes, e (4) redução de cost-token via roteamento inteligente de skills.

---

## 7. Resumo de Feedback dos Usuários

### Dores reais identificadas

1. **Configuração de providers é opaca** (sandr1x via #3637): Usuários não conseguem visualizar/validar setups de transcription providers, gerando configurações inválidas silenciosas. Já corrigido.
2. **Saída de subagentes é uniforme demais** (codeLong1024 via #3969): Com temperatura fixa em 0.1, todas as saídas têm estilo idêntico — impede uso de agentes especializados para tarefas criativas vs. determinísticas.
3. **Skills são opacas para usuários finais** (via #3959 → #3968): Não há comandobuiltin para descobrir skills disponíveis; descoberta requer varredura manual de arquivos.
4. **Tarefas de longa duração são truncadas** (MARJORIESHA-pBAD via #3595): Timeout de 600s em exec tool corta downloads e scripts — resolvedor via #3967.
5. **Memória do Dream está "faminta"** (chxuan via #3973): Sistema de auto-melhoria lê apenas `history.jsonl` e não aprende em tempo real; redundância massiva de informações (mesmo dado aparece 10+ vezes).

### Cenários de uso emergentes

- **Atendimento WhatsApp híbrido** (#2837): bot automatizado que respeita intervenção humana e pausacomportamento por período configurable.
- **Pipeline multi-agente coordenado** (#3969 → #3975): spawn com temperatura customizada permite pipeline com agente "JSON parser" (temp=0.0) + agente "brainstormer" (temp=0.8) executando em paralelo.
- **BM25 routing para skills** (#3865): caso de uso de agentes com 30+ skills instaladas — antes injetava ~3.000 tokens por mensagem; BM25 limita a top-5 relevantes, reduzindo custo e latência significativamente.

### Satisfação geral

Tendência positiva. A comunidade está ativamente reportando bugs e features com contexto detalhado (snippet de código, cenário de uso, motivação). A taxa de resposta e merge de PRs está alta. A abertura de issues e PRs em sequência (ex: #3969 → #3975, #3595 → #3967) indica ciclo saudável de feedback-loop → implementação → review.

---

## 8. Backlog que Merece Atenção

### Issues antigas sem ação recente

| Issue | Criada | Atualizada | dias inativa | Prioridade |
|---|---|---|---|---|
| [#1443](https://github.com/HKUDS/nanobot/pull/1443) — Heartbeat decouple | 2026-03-02 | 2026-05-23 | 83 dias em aberto | Média — PR funcional, precisa review/merge |
| [#2182](https://github.com/HKUDS/nanobot/issues/2182) — Hooks feature | 2026-03-17 | 2026-05-23 | 68 dias desde criação | Alta — demanda validada com 👍2, sem resposta ainda |
| [#3633](https://github.com/HKUDS/nanobot/issues/3633) — Duplicate id GPT bug | 2026-05-05 | 2026-05-23 | 18 dias | **Alta — bug aberto há 18 dias, causa crash em produção** |

### PRs abandonados ou estagnados

Nenhum PR visivelmente abandonado. Porém, **[#1443](https://github.com/HKUDS/nanobot/pull/1443)** está em aberto há 83 dias com descrição e implementação aparentemente completas ("Heartbeat agent now reasons silently by default"). Precisaria avaliação de status.

### Priorização recomendada

1. **#3633** — Crítica. Bug de crash com GPT-5.5, 18 dias sem resolução. Requer triagem e reprodução de ambiente.
2. **#2182** — Hooks feature com alto potencial de diferenciação. Merece scoping técnico antes que comunidade implemente em forks.
3. **#1443** — PR pronto há 83 dias. Ou merge ou comunique blockers ao autor.
4. **#3865** — BM25 router resolve custo e latência para todos os usuários. Prioridade de review alta pelo impacto sistêmico.

---

## Métricas Resumidas (24h)

| Indicador | Valor |
|---|---|
| Issues abertas/ativas | 5 |
| Issues fechadas | 2 |
| PRs abertos | 6 |
| PRs merged/fechados | 4 |
| Releases | 0 |
| Bugs críticos abertos | 1 (#3633) |
| Features em demanda | 4+ |
| Novos providers merged | 1 (Zhipu) |
| Crescimento de contributors | 7 autores únicos nas últimas 24h |

**Veredicto de saúde:** O projeto está em excelente estado de atividade. Desenvolvimento acelerado, ciclo de PRs saudável, bugs sendo resolvidos. A principal preocupação é o bug #3633 (crash com GPT) que não deve passar de mais um ciclo sem atenção.

---

*Relatório gerado com base em dados GitHub do repositório HKUDS/nanobot — 2026-05-24*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-05-24

---

## 1. Panorama do dia

O Hermes Agent manteve altíssima atividade de engenharia em 23 de maio de 2026. Foram registradas **50 issues** (6 fechadas) e **50 PRs** (11 merged/fechadas), indicando uma base de contribuidores muito ativa. Nenhum release foi publicado no período, sinalizando trabalho em branch ou batch de changes pendente de publicação. A saúde geral do projeto reflete intenso desenvolvimento, com um volume significativo de bugs de estabilidade no gateway — particularmente na plataforma Telegram — e múltiplas PRs de segurança, usabilidade e extensibilidade sendo mescladas em paralelo.

---

## 2. Lançamentos

**Nenhum release publicado nas últimas 24h.** O projeto encontra-se em estado de desenvolvimento intensivo sem tag de versão released. Recomenda-se monitorar o repositório para o próximo tagged release, possivelmente aggregando mudanças de estabilidade no gateway Telegram, melhorias de segurança na API de gerenciamento remoto e atualizações de provedores.

---

## 3. Progresso do Projeto

As seguintes PRs foram **mescladas ou fechadas** no período, representando avanço tangível:

| PR | Autor | Componente | Sumário |
|---|---|---|---|
| [#31122](https://github.com/NousResearch/hermes-agent/pull/31122) | crisweber2600 | plugins | Adição do plugin **BMAD Symphony** com workflows de intake, story, run, proof, status e reset. Registra tools, hooks, CLI commands e slash commands. |
| [#31118](https://github.com/NousResearch/hermes-agent/pull/31118) | hermes-jurisnet | docs | Adição de contexto estratégico **JurisNet** em `AGENTS.md` para roteamento/prioritização de agentes no escopo Hernán/FalloBot. |

**PRs abertas de destaque** aguardando merge (indicam direção ativa do roadmap):

- [#31134](https://github.com/NousResearch/hermes-agent/pull/31134) — Consistente resolução de aliases de provider para configuração auxiliar per-task (joshuafielden43)
- [#31133](https://github.com/NousResearch/hermes-agent/pull/31133) — Indicador de digitação configurável por plataforma (haidong-ji)
- [#31119](https://github.com/NousResearch/hermes-agent/pull/31119) — **Segurança**: redação de identidade em respostas da API de gerenciamento remoto (to3tho)
- [#31129](https://github.com/NousResearch/hermes-agent/pull/31129) — Rate limits por modelo no credential pool com auto-healing fallback (PaTTeeL)
- [#31111](https://github.com/NousResearch/hermes-agent/pull/31111) — `inherit_memory` opt-in para subagents lidos de MEMORY.md (haran2001)

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários + reações)

**#29125** — Hermes não funciona via Claude CLI — **19 comentários, 7 👍**
[Link](https://github.com/NousResearch/hermes-agent/issues/29125)

O report mais engajado do período descreve falha na integração com Anthropic via Claude CLI ao selecionar modelo `claude-opus-4.7`. A comunidade demonstra forte interesse na compatibilidade cross-provider. Demanda: verificação de autenticação e resolução de token no setup do provider Anthropic.

**#20470** — Telegram DM topic binding não atualiza após compressão de contexto — **7 comentários, 7 👍**
[Link](https://github.com/NousResearch/hermes-agent/issues/20470)

Bug P1 no gateway: quando uma sessão atrelada a um Telegram DM topic faz split durante compressão de contexto, `session_store._entries` é atualizado com novo session ID, mas a tabela `telegram_dm_topic_bindings` não é sincronizada, causando loop de compressão pré-flight no próximo mensagem. Alto impacto para usuários avançados de Telegram.

**#7066** — Script de instalação bloqueado — **7 comentários, 2 👍**
[Link](://https://github.com/NousResearch/hermes-agent/issues/7066)

Install script fica travado ao resolver mirror Aliyun no Ubuntu Jammy. Problema recorrente de infraestrutura/deploy. Demanda: mirror mais resiliente ou detecção automática de mirror disponível.

**#22791** — Adicionar Infisical como backend de External Vault — **5 👍**
[Link](https://github.com/NousResearch/hermes-agent/issues/22791)

Feature request sub-issue de #3630. Comunidade solicita integração com Infisical como opção adicional de gerenciador de secrets (junta-se a HashiCorp Vault, AWS Secrets Manager, 1Password e Bitwarden). Indica maturidade do ecossistema plugin de secrets.

---

## 5. Bugs e Estabilidade

### P1 — Críticos (afetam produção)

| Issue | Componente | Descrição |
|---|---|---|
| [#20470](https://github.com/NousResearch/hermes-agent/issues/20470) | gateway/Telegram | Topic binding não atualizado após split de sessão por compressão |
| [#31086](https://github.com/NousResearch/hermes-agent/issues/31086) | gateway/Telegram | `_recover_telegram_topic_thread_id` sequestra DM topics novos para tópico anterior |
| [#30538](https://github.com/NousResearch/hermes-agent/issues/30538) | gateway/Telegram | DM topic recovery colapsa sessões paralelas em uma |
| [#30122](https://github.com/NousResearch/hermes-agent/issues/30122) | gateway/Telegram | 409 polling conflict persistente — PTB `network_retry_loop` racing com `_handle_polling_conflict` |
| [#30127](https://github.com/NousResearch/hermes-agent/issues/30127) | gateway/Telegram | Duplicate de #30122 |
| [#30350](https://github.com/NousResearch/hermes-agent/issues/30350) | agent | `NameError: _pool_may_recover_from_rate_limit` não definido após refactor |

### P2 — Significativos

| Issue | Componente | Descrição |
|---|---|---|
| [#29127](https://github.com/NousResearch/hermes-agent/issues/29127) | ACP | Syntax error no adapter ACP |
| [#31101](https://github.com/NousResearch/hermes-agent/issues/31101) | gateway/QQBot | `_read_events()` loop infinito após falha de reconnect |
| [#31049](https://github.com/NousResearch/hermes-agent/issues/31049) | gateway/plugins | Plugins não configurados fazem reconnect infinito ao invés de skip silencioso |
| [#18362](https://github.com/NousResearch/hermes-agent/issues/18362) | cli/gateway | `/busy` é `cli_only=True` mas onboarding sugere disponibilidade universal |
| [#29651](https://github.com/NousResearch/hermes-agent/issues/29651) | backend/local | Windows: `subprocess.Popen` double-pass de `creationflags` quebra terminal e write_file |
| [#30228](https://github.com/NousResearch/hermes-agent/issues/30228) | cli/tui | Dashboard --tui falha com `/usr` read-only |

### P3 — Bugs gerais

Issues P3 notáveis incluem: [#29125](https://github.com/NousResearch/hermes-agent/issues/29125) (provider/anthropic), [#11197](https://github.com/NousResearch/hermes-agent/issues/11197) (install.sh precisa xz-utils), [#31000](https://github.com/NousResearch/hermes-agent/issues/31000) (plugin OpenViking memory hook silenciosamente falhando), [#31043](https://github.com/NousResearch/hermes-agent/issues/31043) (CLI /new não refresh context_length após config change), e [#30957](https://github.com/NousResearch/hermes-agent/issues/30957) (FileNotFoundError no --tui).

---

## 6. Pedidos de Features e Sinais de Roadmap

O volume de feature requests indica direções claras de desenvolvimento:

**Extensibilidade e Integrações:**
- [Feature] Turn-level live time context para date/time awareness ([#10421](https://github.com/NousResearch/hermes-agent/issues/10421))
- [Feature] Adicionar Infisical como External Vault backend ([#22791](https://github.com/NousResearch/hermes-agent/issues/22791))
- [Feature] Custom subdirectories em skill linked_files discovery ([#30999](https://github.com/NousResearch/hermes-agent/issues/30999))
- [Feature] Opt-in reply_in_thread para Feishu @-mention replies ([#30990](https://github.com/NousResearch/hermes-agent/issues/30990))

**Melhorias de UX/CLI:**
- [Feature] User Approval before auto-saving skills ([#28762](https://github.com/NousResearch/hermes-agent/issues/28762))
- [Feature] /sessions slash command não funciona em CLI nem gateway ([#30353](https://github.com/NousResearch/hermes-agent/issues/30353))
- [Feature] Public termination endpoint para kanban runs ([#23762](https://github.com/NousResearch/hermes-agent/issues/23762))

**Comunicação entre Agents:**
- [Feature] Suporte a comunicação bidirecional em tempo real entre subagent e main agent ([#29063](https://github.com/NousResearch/hermes-agent/issues/29063))
- [Feature] `inherit_memory` para subagents ([#31111](https://github.com/NousResearch/hermes-agent/pull/31111) — PR aberta)

**Infraestrutura:**
- [Feature] Config key `terminal.docker_network` ausente ([#28806](https://github.com/NousResearch/hermes-agent/issues/28806))
- [Feature] Upgrade Node.js na Docker image ([#29120](https://github.com/NousResearch/hermes-agent/issues/29120))

**Sinal de roadmap**: A convergência de múltiplos issues sobre Telegram topic binding (5+ issues P1-P2 relacionados) sugere que uma refatoração estrutural do gerenciamento de sessions Telegram está na fila de trabalho.

---

## 7. Resumo de Feedback dos Usuários

**Dores recorrentes identificadas:**

1. **Instalação e setup:** Usuários enfrentam travamentos no install script ([#7066](https://github.com/NousResearch/hermes-agent/issues/7066)) e dependência oculta de `xz-utils` ([#11197](https://github.com/NousResearch/hermes-agent/issues/11197)). Isso gera frustração em primeira experiência.

2. **Consistência de features cross-platform:** Comandos como `/busy` e `/sessions` funcionam em CLI mas não em gateways, criando experiência fragmentada ([#18362](https://github.com/NousResearch/hermes-agent/issues/18362), [#30353](https://github.com/NousResearch/hermes-agent/issues/30353)).

3. **Telegram como plataforma crítica:** O conjunto de issues P1 sobre Telegram topic binding, polling conflicts e DM topic hijacking demonstra que a plataforma Telegram é um vetor de uso principal, mas ainda possui problemas de estabilidade em cenários de uso intenso.

4. **Model picker estatico:** Usuários NVIDIA enfrentam seleção de modelos retired da API NIM, sinalizando necessidade de live provider model discovery ([#30524](https://github.com/NousResearch/hermes-agent/pull/30524) — PR aberta aborda isso).

5. **Auto-saving de skills sem consentimento:** Usuários solicitam controle sobre o processo de auto-saving, indicando desejo de transparência e controle ([#28762](https://github.com/NousResearch/hermes-agent/issues/28762)).

**Satisfação inferred:** A alta taxa de engajamento (muitos 👍 em issues) e a velocidade de merge de PRs indicam uma comunidade ativa e engajada. Issues com 7+ 👍 ([#20470](https://github.com/NousResearch/hermes-agent/issues/20470), [#29125](https://github.com/NousResearch/hermes-agent/issues/29125)) demonstram que o projeto é amplamente adotado e que a comunidade reporta problemas com detalhamento.

---

## 8. Backlog que Merece Atenção

Issues sem resposta prolongada ou que requerem ação da maintainer team:

| Issue | Idade | Status | Prioridade | Razão para atenção |
|---|---|---|---|---|
| [#7066](https://github.com/NousResearch/hermes-agent/issues/7066) | ~43 dias | OPEN | P3 | Bloqueio de install script afeta onboarding de novos usuários |
| [#2833](https://github.com/NousResearch/hermes-agent/issues/2833) | ~60 dias | CLOSED | P2 | Docker mount conflict; verificar se regression tests existem |
| [#29125](https://github.com/NousResearch/hermes-agent/issues/29125) | ~4 dias | OPEN | P3 | Alto engajamento (19 comentários); provider integration com Claude CLI quebrado |
| [#10421](https://github.com/NousResearch/hermes-agent/issues/10421) | ~39 dias | OPEN | P3 | Feature request de time context; impacto na qualidade de respostas do agent |
| [#22791](https://github.com/NousResearch/hermes-agent/issues/22791) | ~15 dias | OPEN | P3 | Parceria estratégica com Infisical; possível sponsors/enterprise interest |
| [#23762](https://github.com/NousResearch/hermes-agent/issues/23762) | ~13 dias | OPEN | P3 | Endpoint de terminação para automação Kanban; alta utilidade operacional |
| [#29063](https://github.com/NousResearch/hermes-agent/issues/29063) | ~4 dias | OPEN | P3 | Comunicação bidirecional subagent/main agent; impacto em workflows complexos |

**Observação especial:** Há 5+ issues sobre Telegram topic binding classificados P1 que aparentam estar relacionados — [#20470](https://github.com/NousResearch/hermes-agent/issues/20470), [#30122](https://github.com/NousResearch/hermes-agent/issues/30122), [#30127](https://github.com/NousResearch/hermes-agent/issues/30127), [#30538](https://github.com/NousResearch/hermes-agent/issues/30538), [#31086](https://github.com/NousResearch/hermes-agent/issues/31086) — sinalizando possível necessidade de triagem consolidada para evitar trabalho duplicado.

---

*Relatório gerado em 2026-05-24 com base em dados do GitHub NousResearch/hermes-agent. Métricas referem-se às últimas 24 horas.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório de Projeto: PicoClaw — 2026-05-24

---

## 1. Panorama do dia

O projeto PicoClaw apresenta **alta atividade** nas últimas 24h com 17 itens atualizados (6 issues + 11 PRs). A saúde geral é positiva: 6 PRs foram merged/fechados, indicando fluxo de desenvolvimento contínuo. Uma nova nightly build (v0.2.9-nightly) foi publicada, sinalizando progressão ativa. As atividades revelam foco em **melhorias de providers** (DeepSeek, Discord), **correções de bugs críticos** (budget enforcement, channel startup) e **expansão de canais** (WeChat multi-conta, email nativo). A comunidade está engajada com 10+ contributors trabalhando em paralelo.

---

## 2. Lançamentos

### 📦 Nightly Build — v0.2.9-nightly.20260523.f09a7d67

**Status:** Automated build (use com cautela — não para produção)

| Detalhe | Info |
|---------|------|
| Commit | f09a7d67 |
| Branch | main |
| Comparativo | https://github.com/sipeed/picoclaw/compare/v0.2.9...main |

**Notas:**
- Esta é uma build automática diária sem changelog formal
- Inclui contribuições merged desde a última release estável v0.2.9
- Não há breaking changes documentados explicitamente
- Recomendado para testers e usuários que necessitam de features mais recentes

---

## 3. Progresso do Projeto

### PRs merged/fechados nas últimas 24h (6 total)

| PR | Autor | Tipo | Impacto |
|----|-------|------|---------|
| [#2931](https://github.com/sipeed/picoclaw/pull/2931) | hschne | fix(discord) | **Crítico** — Corrige download de attachments não-audio no Discord para pipeline de visão |
| [#2895](https://github.com/sipeed/picoclaw/pull/2895) | afjcjsbx | fix(seahorse) | **Crítico** — Implementa budget enforcement no fresh tail, resolve contexto excedido |
| [#2928](https://github.com/sipeed/picoclaw/pull/2928) | lc6464 | feat(openai_compat) | **Alto** — Mapeamento nativo de thinking fields do DeepSeek |
| [#2930](https://github.com/sipeed/picoclaw/pull/2930) | lc6464 | build(deps) | **Médio** — Bump golang.org/x/net para v0.55.0 (corrige govulncheck) |
| [#2835](https://github.com/sipeed/picoclaw/pull/2835) | bogdanovich | fix(agent) | **Médio** — Garante publication de resposta final após interim message |
| [#1838](https://github.com/sipeed/picoclaw/pull/1838) | jonahzheng | bugfix | **Baixo** — Correção de prompt no comando "picoclaw onboard" |

### Destaques de progresso:

- **🔧 Bug crítico resolvido (#2895):** O budget overflow no Seahorse Assembler foi corrigido. Mensagens com `FreshTailCount=32` não respectavam limites de contexto, causando `400 BadRequestError`. A correção enforce o budget em todos os paths de reconstrução.

- **📧 Suporte DeepSeek melhorado (#2928):** O `thinking_level` do PicoClaw agora mapeia corretamente para os campos `thinking` e `reasoning_effort` do DeepSeek, eliminando necessidade de `extra_body` manual.

- **🖼️ Discord attachments (#2931):** URLs CDN brutas de imagens/arquivos são agora baixadas e convertidas para `data:image/` base64, habilitando pipeline de visão funcional no Discord.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (últimas 24h)

| Issue | Tipo | Comentários | 👍 | Status | Link |
|-------|------|-------------|-----|--------|------|
| #2421 - Email como canal nativo | enhancement | 7 | 2 | Closed | [🔗](https://github.com/sipeed/picoclaw/issues/2421) |
| #2742 - Gateway inicia sem canais v0.2.8 | bug | 5 | 0 | Open | [🔗](https://github.com/sipeed/picoclaw/issues/2742) |
| #2834 - Tutorial update from source | feature | 3 | 0 | Closed | [🔗](https://github.com/sipeed/picoclaw/issues/2834) |

### Análise detalhada:

**🎯 Feature #2421 - Email como canal nativo (Closed)**
- **Demanda:** Usuários em ambientes corporativos/científicos que dependem de email como canal primário
- **Proposta:** Adicionar email como channel nativo, similar a Telegram/Discord
- **Resolução:** Issue foi fechada sem merge visible — possivelmente addressada de outra forma ou rejeitada com discussão
- **Sinal:** Há interesse significativo em canais não-chat para ambientes conservadores

**🐛 Bug #2742 - Gateway inicia sem canais (Open, Ativo)**
- **Severidade:** Alta — blocking issue na v0.2.8
- **Contexto:** Usuário Ubuntu 22.04 com Telegram configurado reporting canal não reconhecido
- **Possível causa:** Parsing de config.json ou validação de channels no startup
- **Ação necessária:** Maintainers precisam investigar e responder

---

## 5. Bugs e Estabilidade

### Bugs reportados nas últimas 24h (2 abertos)

| Bug | Severidade | Canal | Impacto |
|-----|------------|-------|---------|
| [#2742](https://github.com/sipeed/picoclaw/issues/2742) Gateway inicia sem canais | **Alta** | Channels | Bloqueia uso do Telegram |
| [#2880](https://github.com/sipeed/picoclaw/issues/2880) Permission denied ao criar diretório | **Média** | Android | App crash no Start Service |

### Detalhamento:

**🔴 Alta severidade — #2742**
> "gateway starts with no channels in v0.2.8"
- Configuração Telegram aparentemente válida não é reconhecida
- Environment: Ubuntu 22.04, Go 1.25.9, openrouter/tencent/hy3-preview
- Status: **Open desde 2026-05-01, sem resolution ainda**
- Risco: Usuários afetados não conseguem usar o gateway

**🟡 Média severidade — #2880**
> "Device: Xiaomi Pocophone F1, Android 10, v0.1.3"
- App falha ao criar `Downloads/picoclaw` apesar de permissões concedidas
- "All files access"也已 granted (acesso total concedido)
- Status: **Open desde 2026-05-16**
- Risco: Usuários Android legacy devices não conseguem inicializar

### Bugs corrigidos (confirmados via PRs):

| Fix | PR | Severidade original | Impacto |
|-----|----|--------------------|---------|
| FreshTail budget bypass | [#2895](https://github.com/sipeed/picoclaw/pull/2895) | 🔴 Alta | Context overflow em modelos com limite |
| Discord attachments | [#2931](https://github.com/sipeed/picoclaw/pull/2931) | 🟡 Média | Imagens não processadas em visão |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em desenvolvimento (PRs abertos)

| Feature | PR | Autor | Prioridade | Link |
|---------|-----|-------|------------|------|
| **WeChat multi-conta** | #2883 | jiegehere | Alta | [🔗](https://github.com/sipeed/picoclaw/pull/2883) |
| **Media attachments + Telegram rich** | #2856 | bogdanovich | Alta | [🔗](https://github.com/sipeed/picoclaw/pull/2856) |
| **Frontmatter tool policy filters** | #2838 | bogdanovich | Média | [🔗](https://github.com/sipeed/picoclaw/pull/2838) |
| **Line numbers + wrap toggle (code)** | #2933 | lc6464 | Baixa | [🔗](https://github.com/sipeed/picoclaw/pull/2933) |
| **Czech locale (cs)** | #2932 | KrtCZ | Baixa | [🔗](https://github.com/sipeed/picoclaw/pull/2932) |

### Análise de roadmap:

**🟢 Alta prioridade — WeChat multi-conta (#2883)**
- Suporte a múltiplas contas WeChat simultâneas
- Identificação dinâmica via prefixo `weixin_*` no config
- Interface frontend para channel management
- Status: PR aberto, aguardando review

**🟢 Alta prioridade — Media attachments + Telegram rich (#2856)**
- Abandona modelo text-only do tool `message`
- Permite payload semântico único com attachments
- Unifica fluxo entre Telegram e outros canais
- Abre caminho para rich media responses

**🟡 Medium — Frontmatter tool policy filters (#2838)**
- Extensão do `AGENT.md` frontmatter com `allow`/`deny` policies
- Suporte a glob patterns para tools e MCP servers
- Padroniza controle de permissions de forma declarativa

### Features fechadas (resolvidas):
- ✅ #2903 — Mapeamento thinking_level → DeepSeek (merged #2928)
- ✅ #2894 — Budget overflow no FreshTail (merged #2895)
- ✅ #2421 — Email como canal nativo (closed, sem merge visible)

---

## 7. Resumo de Feedback dos Usuários

### Padrões de dor identificados:

| Categoria | Feedback | Severidade | Issue |
|-----------|----------|------------|-------|
| **Startup/Funcionalidade** | Gateway não reconhece canais configurados | 🔴 Alta | #2742 |
| **Android permissions** | App crash ao criar diretório em Android 10 | 🟡 Média | #2880 |
| **Documentação** | Falta tutorial para upgrade/update do source | 🟡 Média | #2834 |
| **DeepSeek integration** | Thinking controls não mapeiam corretamente | 🟢 Baixa (resolvido) | #2903/#2928 |
| **Discord media** | Imagens não processadas pelo pipeline de visão | 🟢 Baixa (resolvido) | #2931 |

### Análise de satisfação:

**Satisfação positiva (indicadores):**
- Contribuições ativas: 11 PRs em 24h de múltiplos autores (lc6464, bogdanovich, hschne, afjcjsbx)
- Comunidade internacional: Czech locale PR demuestra expansão i18n
- Resolução rápida: PRs merged no mesmo dia de update (lc6464 merge em 2026-05-23)

**Dores persistentes:**
- Android legacy: Permissões de storage ainda problemáticas em Android 10+
- Channel startup: Configuração não reconhecida é issue recorrente (#2742)
- Onboarding: Usuários ainda precisam de tutorial para update manual

### Cenários de uso emergentes:
- **Email como canal primário** (#2421): Usuários corporativos/científicos
- **WeChat multi-conta**: Usuários profissionais com múltiplos contextos
- **DeepSeek como provider principal**: Crescimento de uso de reasoning models

---

## 8. Backlog que Merece Atenção

### Issues sem resposta há >7 dias

| Issue | Idade | Tipo | Status | Link |
|-------|-------|------|--------|------|
| #2742 - Gateway no channels | **23 dias** | bug | Open | [🔗](https://github.com/sipeed/picoclaw/issues/2742) |
| #2880 - Android permission | **8 dias** | bug | Open | [🔗](https://github.com/sipeed/picoclaw/issues/2880) |

### PRs aguardando review há >3 dias

| PR | Idade | Tipo | Status | Link |
|----|-------|------|--------|------|
| #2883 - WeChat multi-conta | **8 dias** | feat | Open | [🔗](https://github.com/sipeed/picoclaw/pull/2883) |
| #2856 - Media attachments | **13 dias** | feat | Open | [🔗](https://github.com/sipeed/picoclaw/pull/2856) |
| #2838 - Frontmatter policies | **15 dias** | feat | Open | [🔗](https://github.com/sipeed/picoclaw/pull/2838) |

### Recomendações de ação:

1. **🔴 Prioridade máxima:** Investigar #2742 (Gateway no channels) — 23 dias sem resposta
   - Afeta usuários ativos na versão estável atual (0.2.8)
   - Potencial blocking issue para novos adotantes

2. **🟡 Prioridade média:** Review do PR #2883 (WeChat multi-conta)
   - 8 dias停滞 — contributor pode estar esperando feedback
   - Feature parece bem estruturada (China market relevante)

3. **🟡 Prioridade média:** Responda #2880 (Android permissions)
   - Reconhecer bug e sinalizar timeline de correção
   - Usuário reporte detalhado pode acelerar debug

4. **🟢 Baixa:** PRs menores (#2933, #2932) em bom estado — contributors ansiosos por feedback
   - Code review inicial evitaria necessidade de rework

---

## Resumo Executivo

| Métrica | Valor | Status |
|---------|-------|--------|
| Atividade (24h) | 17 items | ✅ Alta |
| PRs merged | 6 | ✅ Boa cadência |
| Bugs open | 2 | ⚠️ Requer atenção |
| Features em pipeline | 5 | ✅ Roadmap saudável |
| Long-standing issues | 1 (>7dias) | ⚠️ Requer resposta |

**Saúde geral:** O projeto está em estado **saudável mas com pontos de atenção**. A comunidade está ativa, PRs estão fluindo, e bugs críticos estão sendo corrigidos. O backlog de bugs antiquity (#2742) e PRs waiting for review requerem atenção dos maintainers para manter momentum.

---

*Relatório gerado em 2026-05-24 • Fonte: github.com/sipeed/picoclaw*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-05-24

---

## 1. Panorama do Dia

O IronClaw apresenta altíssima atividade de desenvolvimento no dia de hoje. Nas últimas 24h, **50 PRs foram atualizados** (21 mergeados/fechados, 29 abertos) e **10 issues abertas/ativas** foram registradas — sem nenhum fechamento de issue, indicando que o fluxo de entrada de trabalho continua superando o ritmo de resolução. O ecossistema está fortemente concentrado na iniciativa **Reborn**, com múltiplos PRs de grande porte (XL) avançando em paralelo: expansão do framework de hooks para produção, backends duráveis para predicates (libSQL/Postgres), segurança de credenciais e refatoração de camadas de extensão. A ausência de releases novas sugere que a equipe está estabilizando o codebase antes de um próximo tagged release. Não há urgência operacional crítica, mas três issues de segurança estão pendentes de revisão.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto encontra-se em modo de desenvolvimento intensivo, com merge frequente de PRs mas sem corte de versão. Isso é consistente com uma fase de feature-work pesado antes de um possível release. A issue #3945 ([QA] `select_archive_for_arch()` and `download_binary_and_run_installer()` functions are broken in installer script for macOS/Linux since 0.26, a month ago) indica que a versão 0.26 introduziu uma regressão no installer que ainda não foi corrigida via release — usuários em macOS/Linux estão potencialmente afetados.

---

## 3. Progresso do Projeto

Três PRs de alto impacto foram fechados/mergeados nas últimas 24h:

| PR | Título | Tamanho | Escopo |
|---|---|---|---|
| [#3935](https://github.com/nearai/ironclaw/pull/3935) | Add Reborn skill management tools | XL | deps, docs |
| [#3900](https://github.com/nearai/ironclaw/pull/3900) | Add Docker sandbox command transport | XL | deps |
| [#3903](https://github.com/nearai/ironclaw/pull/3903) | Close Reborn production credential boundary gaps | L | docs, credential hardening |

**Avanços significativos:**

- **#3935** introduz capacidades de gestão de skills de primeira parte para Reborn (`builtin.skill_list`, `builtin.skill_install`, `builtin.skill_remove`), sem dependência de `skill_search`. Isso consolida o modelo de scoping de skills (global → tenant → user) no runtime de produção.
- **#3900** adiciona `DockerSandboxCommandTransport` para execução de processos em sandbox de tenant Reborn via daemon sandbox V1, mapeando `CommandExecutionRequest` para `execute_tool("shell", ...)`. Avança a estratégia de sandboxing híbrido (Docker + Command).
- **#3903** fecha lacunas de segurança na fronteira de credenciais de produção, adicionando `RuntimeCredentialTarget::PathPlaceholder` e roteamento de planos de credenciais MCP através de egresso de produção. Gera follow-up em #3917.

**PRs em aberto de destaque** (trabalho ativo que sinaliza direção):

- **#3938** — Hook framework ativado em produção (atrás de `HOOKS_ENABLED` flag, default OFF)
- **#3937** — Suite de paridade adversarial cross-backend para hooks (prova intercambiabilidade dos backends)
- **#3933** — `PostgresPredicateStateBackend` (durable backend PR 2/4)
- **#3936** — `LibSqlPredicateStateBackend` em crate própria (durable backend PR 3/4)
- **#3922** — `SecurityAuditSink` conectado ao handler de obrigações e deny paths de hooks
- **#3944** — Declarações de runtime credentials no manifest v2

---

## 4. Temas Quentes da Comunidade

### Issues com mais comentários
**#3889** ([Reborn] Add approval interaction service and product resolution routing) — 1 comentário

Esta issue é o desdobramento do issue #3094, que misturava trabalho de approval e auth. Com a pilha auth do Reborn mais limpa (via #3865, #3878, #3879) e a ponte de continuação em #3888, esta issue rastreia a fatia específica de approval para evitar a recriação de um fluxo paralelo de auth ou interaction. **Sinaliza que o módulo de approval interaction está entrando na fase de design ativo dentro da iniciativa Reborn.**

### PRs de maior atenção (pelo volume de trabalho ou escopo)

- **#3737** — Install tools and skills from IronHub (CLI, agent tools, gateway, live catalog) — XL, múltiplos escopos, DB MIGRATION. Este é o PR mais amplo da lista atual em termos de superfície impacted, tocando quase todos os módulos do sistema (agent, channels, tools, db, sandbox, hooks, ci, docs). A DB MIGRATION flag indica impacto estrutural no schema do banco. Qualquer revisão deve envolver owners de múltiplos módulos.
- **#1378** — Per-channel MCP and built-in tool filtering — XL, em desenvolvimento desde 2026-03-18. Este é um PR maduro de roteamento multi-canal que permite scoping de ferramentas MCP por canal (Slack, Telegram, web). A atualizá mais recente em 2026-05-23 sugere que ainda está ativo e em discussão/revisão.

---

## 5. Bugs e Estabilidade

### Regressão crítica reportada
**#3945** — `select_archive_for_arch()` e `download_binary_and_run_installer()` quebrados no installer script para macOS/Linux desde a versão 0.26 (há ~1 mês)
- Reportado por: `xkww3n`
- Commit afetado: `faf2ed4`
- Severidade: Alta (bloqueia instalação em sistemas Unix)
- Label: `[QA]`
- Sem comentários ainda — precisa de triagem imediata

### Falha recorrente de CI
**#3447** — Nightly E2E failed
- Reportado por: `github-actions[bot]`
- Workflow: Nightly E2E
- Run: https://github.com/nearai/ironclaw/actions/runs/26323246539
- Commit: `030cfeb0c259b2f9ffbedfe958a77c66fbacdda9`
- Jobs falhos: Full E2E / E2E (features)
- Atualizado pela última vez em 2026-05-23 04:27:23 UTC — significa que a falha ainda persiste ou foi re-triggerada. **Prioridade de investigação: Alta.** E2E nightly falhando significa que regressions de integração podem não ser detectadas.

### Issues de segurança pendentes de revisão
Três issues com label `security-review-required` foram abertas em 2026-05-23, todas pelo mesmo autor (`zmanian`):

1. **#3917** — Question: kill `RuntimeCredentialTarget::PathPlaceholder` or harden it?
   - PR gerador: #3903
   - Canal de leakage identificado: placeholders de path são estritamente piores que injeção via Header ou Query
   - Decisão pendente: remover antes de ship ou endurecer?

2. **#3915** — Pattern: default-to-no-op guardrails get silently bypassed (3 instâncias)
   - Padrão anti: `Option<_>` com default no-op causa bypass silencioso em produção
   - Afeta múltiplos PRs de integração Reborn
   - Risco: degradação silenciosa de segurança

3. **#3916** — Harden LocalFilesystem: honor `CAS::Absent` + durable writes (atomic rename + fsync)
   - Gaps identificados durante review de #3908 (`FilesystemCheckpointStateStore`)
   - Severidade: backend-level — deve ser corrigido no `LocalFilesystem`, não por store

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features em proposta/development

| Issue/PR | Descrição | Escopo | Sinal |
|---|---|---|---|
| [#3889](https://github.com/nearai/ironclaw/issues/3889) | Approval interaction service + product resolution routing | Reborn module | Próximo na fila Reborn pós-auth |
| [#3905](https://github.com/nearai/ironclaw/issues/3905) | Safe user-scoped tool installs | Extensions, Skills | Expansão do modelo de scoping |
| [#3946](https://github.com/nearai/ironclaw/issues/3946) | Split host-runtime production wiring validation out of services.rs | Host runtime | Refatoração de arquitetura — 3k-line threshold |
| [#3934](https://github.com/nearai/ironclaw/issues/3934) | Activate hook framework in production | Hooks, Reborn | Hooks avançando para GA |
| [#3924](https://github.com/nearai/ironclaw/issues/3924) | NoExposureGuard composition audit | Reborn, security | Refinamento de boundaries pós-#3767 |

### Temas de roadmap inferidos do pipeline de PRs

1. **Framework de Hooks para produção**: O trabalho pesado de 4 PRs (trait widening → Postgres backend → LibSQL backend → parity suite) indica que hooks estão se aproximando de disponibilidade para uso em produção. A ativação em #3938 está gated atrás de `HOOKS_ENABLED` (default OFF), sinalizando opt-in inicial.

2. **Credenciais de runtime no manifest v2**: #3944 introduz um schema formal para declaração de `runtime_credentials`, alinhando com o pipeline de hardenização de segurança em #3903, #3917.

3. **IronHub como marketplace**: #3737 está em desenvolvimento ativo e sinaliza que a distribuição de ferramentas e skills através do IronHub está se tornando um canal primário de consumo de capacidades.

4. **Roteamento multi-canal**: #1378 (em desenvolvimento há ~2 meses) endereça necessidade real de scoping por canal — indica que deploys multi-canal são um caso de uso importante.

---

## 7. Resumo de Feedback dos Usuários

**Feedback implícito via issues reportadas:**

- **Instalador quebrado (macOS/Linux)**: O reporte de `xkww3n` em #3945 indica que usuários Unix que tentam instalar via script curl estão encontrando falhas. O problema existe há ~1 mês (desde 0.26), sinalizando frustração potencial não documentada por outros usuários. Impacto direto na DX.

- **E2E falhando sistematicamente**: O bot de github-actions reportando falha em #3447 (e potencialmente em runs anteriores) indica que o pipeline de qualidade pode não estar detectando regressions — usuários internos ou testers provavelmente estão sendo impactados por CI/CD não confiável.

- **Segurança querendo ser reforçada**: A quantidade de issues de security-review (3 em 24h) pelo mesmo autor (`zmanian`) pode refletir um ciclo de hardening reativo ou proativo. Se for reativo, há uma curva de aprendizado ou gaps de design sendo descobertos. Se for proativo, indica maturidade de security mindset.

**Nenhum feedback explícito de usuários externos** foi registrado nas issues mais recentes — todas as issues são de contribuidores internos ou bots de CI. Isso pode significar:
- O projeto está em fase de desenvolvimento intensivo interno antes de exposição beta/externa
- Ou feedback externo está sendo capturado por canais fora do GitHub (Discord, support, etc.)

---

## 8. Backlog que Merece Atenção

### Issues sem resposta há tempo significativo

| Issue | Título | Criada | Atualizada | Dias sem resposta |
|---|---|---|---|---|
| [#3447](https://github.com/nearai/ironclaw/issues/3447) | Nightly E2E failed | 2026-05-10 | 2026-05-23 | ~14 dias de falha recorrente sem resolução |

### PRs com sinais de atenção

| PR | Título | Status | Observação |
|---|---|---|---|
| [#1378](https://github.com/nearai/ironclaw/pull/1378) | Per-channel MCP and built-in tool filtering | OPEN | Em desenvolvimento há ~2 meses — precisa de decisão sobre scope ou merge |
| [#3548](https://github.com/nearai/ironclaw/pull/3548) | Add DISABLE_TOOLS_LIST flag and security regression test | OPEN | Flag de configuração de segurança pendente de review |
| [#3669](https://github.com/nearai/ironclaw/pull/3669) | Engine v2: expose channel-supplied thread/response ids to tools | OPEN | Restaura contrato v1 — precisa de owner review |
| [#3590](https://github.com/nearai/ironclaw/pull/3590) | Telegram v2 inbound tracer | OPEN | Escopo definido, reply path stubado — clarification needed |

### Priorização recomendada para o time

1. **#3945** — Triagem urgente do installer quebrado (user impact)
2. **#3447** — Investigação de E2E nightly (confiança do pipeline)
3. **#3917** — Decisão sobre `PathPlaceholder` (bloqueia freeze de credenciais)
4. **#3915** — Endurecimento do padrão de default-to-no-op (security risk)
5. **#3916** — Correção de LocalFilesystem backend-level (technical debt)

---

*Relatório gerado em 2026-05-24 com base nos dados de atividade do GitHub (últimas 24h). Nenhuma release nova foi cortada; o projeto está em fase intensa de integração Reborn.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do Projeto CoPaw (QwenPaw) — 2026-05-24

---

## 1. Panorama do Dia

O projeto CoPaw (QwenPaw) apresenta **alta atividade comunitária** nas últimas 24h, com 11 issues atualizados e 3 PRs em aberto. A taxa de abertura de issues está elevada, com destaque para 2 bugs críticos na camada de Console UI e MCP, além de múltiplas solicitações de funcionalidades que reforçam a tendência de amadurecimento da plataforma. O projeto não registrou releases, porém PRs de primeira contribuição indicam进来了 novos contribuidores. A saúde geral permanece estável, com issues sendo triados e respondidos em menos de 24h.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

> A ausência de releases sugere que a equipe pode estar em ciclo de revisão ou preparando uma versão com as correções e features pendentes. Recomenda-se monitorar o repositório para anúncios iminentes.

---

## 3. Progresso do Projeto

### PRs em aberto (3)

| # | Título | Autor | Status |
|---|--------|-------|--------|
| [#4630](https://github.com/agentscope-ai/QwenPaw/pull/4630) | feat(mcp): enhance MCP management with marketplace, health check, and key validation | sunies | Aberto |
| [#4622](https://github.com/agentscope-ai/QwenPaw/pull/4622) | plugin(datapaw): add data-analysis plugin with 12 BI skills | EliasMei | Aberto |
| [#4638](https://github.com/agentscope-ai/QwenPaw/pull/4638) | feat(plugins): add session and message lifecycle hooks | jc200808 | Aberto |

**Destaque:**
- **#4638** implementa ganchos de ciclo de vida (*hooks*) para sessão e mensagens, alinhando-se diretamente com as solicitações da issue #4640 (auto-summary).
- **#4622** adiciona o plugin **DataPaw** com 12 habilidades de BI, ampliando o ecossistema de plugins.
- **#4630** introduz marketplace de MCP com monitoramento de saúde de conexão — funcionalidade aguardada pela comunidade.

> ⚠️ Nenhum PR foi merged/fechado nas últimas 24h. Todos estão em estado "OPEN" e em revisão.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento

| # | Título | Comentários | 👍 | Tipo |
|---|--------|-------------|----|------|
| [#4265](https://github.com/agentscope-ai/QwenPaw/issues/4265) | Leitura de diálogo causa exaustão de memória (CLOSED) | 5 | 0 | Bug |
| [#4644](https://github.com/agentscope-ai/QwenPaw/issues/4644) | Console UI: tool calls não exibidos até refresh | 3 | 0 | Bug |
| [#4635](https://github.com/agentscope-ai/QwenPaw/issues/4635) | Mobile-friendly client | 2 | 0 | Feature |

**Análise:**
- **Issue #4265 (RESOLVIDA):** Bug crítico de exaustão de memória durante leitura de logs de conversation — demonstrou falha sistêmica de gerenciamento de memória no pipeline de compressão. closed com 5 comentários, indicando resolução colaborativa.
- **Demanda crescente por UX mobile (#4635):** A necessidade de acesso mobile ao console demonstra que usuários estão adotando QwenPaw em cenários além do desktop.
- **Feature de token speed (#4647):** Solicitações de visibilidade de custos (tokens/segundo) indicam uso em ambientes enterprise com controle de budget.

---

## 5. Bugs e Estabilidade

### Bugs reportados nas últimas 24h (4)

| Severidade | # | Descrição | Impacto |
|------------|---|-----------|---------|
| 🔴 **Alta** | [#4644](https://github.com/agentscope-ai/QwenPaw/issues/4644) | Tool calls não exibidos no Console UI até refresh manual | Experiência do usuário degradada; sem logs de erro |
| 🔴 **Alta** | [#4643](https://github.com/agentscope-ai/QwenPaw/issues/4643) | MCP OAuth não suporta `client_secret` no token exchange | Impossibilita conexão com servidores MCP que requerem OAuth confidencial |
| 🟡 **Média** | [#4646](https://github.com/agentscope-ai/QwenPaw/issues/4646) | Schema sanitizer converte boolean keywords em objetos inválidos | Incompatibilidade com schemas MCP válidos |
| 🟡 **Média** | [#4641](https://github.com/agentscope-ai/QwenPaw/issues/4641) | `env set` não visível em subprocessos | Scripts que dependem de variáveis de ambiente falham silenciosamente |

**Tendencia:** 2 de 4 bugs estão relacionados ao **MCP (Model Context Protocol)**, evidenciando que essa é uma área crítica que necessita加固. Recomenda-se atenção prioritária da equipe.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features solicitadas (7)

| # | Título | Demanda |
|---|--------|---------|
| [#4635](https://github.com/agentscope-ai/QwenPaw/issues/4635) | Mobile-friendly client / console mobile | Acesso via navegador mobile |
| [#4647](https://github.com/agentscope-ai/QwenPaw/issues/4647) | Display token speed/usage info | Métricas visuais de custo e performance |
| [#4645](https://github.com/agentscope-ai/QwenPaw/issues/4645) | Remote daemon connection for Pet | Pet desktop conectado a daemon remoto |
| [#4642](https://github.com/agentscope-ai/QwenPaw/issues/4642) | Plugin extension framework + work directory | Extensibilidade non-intrusiva e seleção de diretório de trabalho |
| [#4640](https://github.com/agentscope-ai/QwenPaw/issues/4640) | Session end auto-summary (Pre-hook Memory Archiving) | Auto-arquivamento de decisões e踩坑经验 |
| [#4639](https://github.com/agentscope-ai/QwenPaw/issues/4639) | Duplicate: Session end auto-summary | — |

**Sinais de roadmap inferidos:**
1. **Arquitetura plugin mais flexível** (#4642) — o projeto está evoluindo de uma base monolítica para ecossistema extensível
2. **Memory/Context management** (#4640) — a memória do agent é uma dor recorrente
3. **Observabilidade** (#4647) — demanda por métricas de tokens indica uso em produção

---

## 7. Resumo de Feedback dos Usuários

### Dores reais identificadas

| Dor | Evidência | Severidade |
|-----|-----------|------------|
| **Instabilidade do Console UI** | "ferramentas não aparecem até refresh, sem erro algum" | 🔴 Alta |
| **Complexidade de extensão** | "precisa modificar código-fonte para Hooks/Tools/Channel" | 🟡 Média |
| **Fragmentação de memória** | "agent esquece de registrar após conclusão" | 🟡 Média |
| **Visibilidade de custos** | "não sei quantos tokens cada resposta consome" | 🟡 Média |
| **Fluxo OAuth quebrado** | "não consigo conectar com provedores que exigem client_secret" | 🔴 Alta |

### Cenários de uso emergentes

- **Uso mobile:** usuários tentando acessar QwenPaw via DingTalk, Feishu, QQ e navegadores mobile
- **Ambiente server-client:** daemon persistente em servidor + Pet client em máquina local (#4645)
- **Integração dados:** necessidade de plugins de análise (BI) confirmadas pelo PR #4622

---

## 8. Backlog que Merece Atenção

### Issues sem resposta prolongada

| # | Título | Criado | Atualizado | Dias inativo |
|---|--------|--------|-----------|--------------|
| — | Nenhuma issue com inatividade significativa identificada nas últimas 24h | — | — | — |

> ✅ **Bom sinal:** Todas as 11 issues atualizadas nas últimas 24h receberam interação recente (criação ou comentários), indicando triagem ativa pela equipe.

### Observação crítica

A issue **#4640** e **#4639** parecem ser duplicatas (mesmo título: "会话结束自动总结机制"). Recomenda-se consolidação para evitar fragmentação de讨论.

---

## Métricas Consolidado (2026-05-24)

| Indicador | Valor |
|-----------|-------|
| Issues abertas/ativas (24h) | 10 |
| Issues fechadas (24h) | 1 |
| PRs abertos (24h) | 3 |
| PRs merged/fechados (24h) | 0 |
| Novas releases | 0 |
| Taxa de resposta (issues < 24h) | 100% |
| Bugs críticos | 2 |
| Features solicitadas | 7 |

---

*Relatório gerado automaticamente com base nos dados públicos do GitHub — agentscope-ai/CoPaw (QwenPaw)*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório de Projeto — ZeroClaw (2026-05-24)

---

## 1. Panorama do Dia

O projeto ZeroClaw registrou **50 issues e 50 PRs atualizados nas últimas 24h**, demonstrando um nível de atividade **muito elevado**. Doze issues foram fechadas hoje (8 issues + 4 PRs closed), indicando triagem ativa do backlog. **Nenhuma release foi publicada**, sinalizando que a equipe permanece em ciclo de desenvolvimento intensivo semタグamento formal de versão — o que é consistente com a versão corrente `v0.8.0-beta-1`. A maior concentração de trabalho gira em torno do **subsistema de channels** (múltiplas correções e features), **runtime/provedores** e **infraestrutura de build/docs**. A quantidade de issues com标签 `status:blocked` e `needs-author-action` sugere gargalos de revisão por mantenedores.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

O projeto encontra-se em fase `beta` (v0.8.0-beta-1), e a ausência de release reforça que o foco atual é estabilização interna antes de um próximo tag. Issues como #6856 (schema v3 `show_tool_calls`) e #6862 (gateway SPA fallback quebrando dashboard) são indicativos de que correções relevantes ainda estão em fase de issue/PR e ainda não chegaram ao usuário final.

---

## 3. Progresso do Projeto

Os PRs **fechados/merged** nas últimas 24h representam avanços concretos:

| PR | Título | Impacto |
|----|--------|---------|
| [#6481](https://github.com/zeroclaw-labs/zeroclaw/pull/6481) | `feat(jira): add list_transitions, transition_ticket, create_ticket` | Adiciona três ações fundamentais para integração Jira — transição de tickets, listagem de transições disponíveis e criação de novos tickets. Enables workflows de automação de tarefas em ambiente corporativo. |
| [#6692](https://github.com/zeroclaw-labs/zeroclaw/pull/6692) | `docs: fix stale RUST_LOG targets` | Corrige documentação de logging com filtros de targets `zeroclaw` desatualizados, alinhando os exemplos ao layout atual de crates do workspace. Melhora significativamente a experiência de debugging para operadores. |
| [#6696](https://github.com/zeroclaw-labs/zeroclaw/pull/6696) | `docs: clarify translation sync policy` | Estabelece política clara de sincronização de traduções: markdown em inglês como fonte de verdade, `.po` churn pode ser diferido para PR dedicado. Reduz ruído em PRs de docs. |
| [#6843](https://github.com/zeroclaw-labs/zeroclaw/pull/6843) | `feat(orchestrator): expose message_id in agent channel context` | Expõe `message_id` no bloco de contexto por turno para o LLM, completando informações já disponíveis (`channel`, `reply_target`, `sender`). Melhora transparência para o modelo. |
| [#6691](https://github.com/zeroclaw-labs/zeroclaw/issues/6691) (closed) | `RUST_LOG docs use stale zeroclaw target filters` | Documentação de observabilidade corrigida para refletir estrutura real de crates. |

**PRs de destaque ainda abertos**, sinalizando trabalho ativo em progresso:

- [#6680](https://github.com/zeroclaw-labs/zeroclaw/pull/6680) — WeCom AI Bot WebSocket channel (size: XL, multi-canal, risco médio): adiciona canal WeCom com transporte WebSocket dedicado e protocolo específico — impacto em пользовательський досвід na China
- [#6866](https://github.com/zeroclaw-labs/zeroclaw/pull/6866) — Builds seletivos de canais via feature flags (size: L): permite compilação de canais específicos com `--no-default-features`, atendendo demandas por artifacts menores
- [#5652](https://github.com/zeroclaw-labs/zeroclaw/pull/5652) — Native extended thinking para Anthropic e Bedrock (size: L): upgrade significativo no sistema de raciocínio com budget nativo, benefeitando tarefas agentic complexas

---

## 4. Temas Quentes da Comunidade

Ordenados por volume de comentários nas últimas 24h:

### Issues com maior engajamento

| # | Título | Comentários | Análise |
|---|--------|-------------|---------|
| [#6856](https://github.com/zeroclaw-labs/zeroclaw/issues/6856) | `[Bug]: show_tool_calls missing from channel` | **5** | Regressão da funcionalidade `show_tool_calls` do schema v2 para v3. Usuários esperam opção equivalente para exibir detalhes de tool calls na resposta. Criticidade: P2, risk: medium — impacto na depuração e transparência. |
| [#6127](https://github.com/zeroclaw-labs/zeroclaw/issues/6127) | `gateway: silent-fallback hardening` | **4** | Follow-up de #6099 para endurecer resolução de credenciais no gateway-lado. Discussão técnica ativa sobre fail-loud vs sentinel split. P1, risk: high — segurança de credenciais. |
| [#5262](https://github.com/zeroclaw-labs/zeroclaw/issues/5262) | `Add ZeroClaw logo to official Agent Skills client list` | **3** | Demanda de visibilidade no ecossistema Agent Skills (agentskills.io). Proposta simples, baixa criticidade (P2), mas estratégica para adoção. |
| [#6724](https://github.com/zeroclaw-labs/zeroclaw/issues/6724) | `Channels supervisor crashloops when all channels have enabled=false` | **3** | Bug de usabilidade: quando usuário adiciona blocos de canais via dashboard mas não preenche credenciais, o supervisor entra em crashloop infinito (~2s). Severidade elevada para operadores. Status: `blocked` — precisa ação do autor. |
| [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) | `audit: track 153 commits lost in bulk revert c3ff635` | **2** | Auditoria de impacto pós-revert massivo (153 commits revertados em 2026-03-28). Comunidade busca transparência sobre o que foi perdido e plano de recuperação. |

### PRs com maior atenção

- [#6799](https://github.com/zeroclaw-labs/zeroclaw/pull/6799) — Migração do Signal para `AllowlistAspect` compartilhado (archetype A, parte de avaliação ICSE 2027): envolve 147 LOC refatoradas, padrão de design em discussão
- [#6512](https://github.com/zeroclaw-labs/zeroclaw/pull/6512) — Correções triplas no email channel (HTML rendering, subject threading, attachment path): PR substancial com 22 labels cobrindo todos os canais
- [#6840](https://github.com/zeroclaw-labs/zeroclaw/pull/6840) — Emoji reactions no Signal via `sendReaction`: feature pequena mas melhora experiência interativa

---

## 5. Bugs e Estabilidade

### Por Severidade

**S0 — Data Loss / Security Risk:**
- [#6558](https://github.com/zeroclaw-labs/zeroclaw/issues/6558) `[Bug]: providers error` — Provedor custom (Dashscope) retornando 405 Method Not Allowed; bloqueia uso de qwen3.5-plus. Status: `blocked`, `needs-author-action`.
- [#6063](https://github.com/zeroclaw-labs/zeroclaw/issues/6063) `[Bug]: web search 'openclaw' returns no results` — Web search tool falhando para buscas específicas. Necessária reprodução.

**S1 — Workflow Blocked:**
- [#6180](https://github.com/zeroclaw-labs/zeroclaw/issues/6180) `[Bug]: Cannot use llama-server services` — Erro "All providers/models failed" ao usar llama-cpp configurado via gateway WebSocket. Prioridade P1, `needs-repro`.
- [#6881](https://github.com/zeroclaw-labs/zeroclaw/issues/6881) `fix(email): ignore blank SMTP credential overrides` — Credenciais SMTP em branco sobrescrevem defaults IMAP, bloqueando workflow de email. Proposta de fix já registrada.

**S2 — Degraded Behavior:**
- [#6856](https://github.com/zeroclaw-labs/zeroclaw/issues/6856) — Tool call details não exibidos no schema v3 do channel (regressão de v2)
- [#6632](https://github.com/zeroclaw-labs/zeroclaw/issues/6632) `(cron): manual cron_run persists delivery failures as ok` — Best-effort announce failures mal persistidos no caminho manual
- [#6517](https://github.com/zeroclaw-labs/zeroclaw/issues/6517) `Context Overflow Causes Hallucination / Topic Drift` — Janela de contexto esgotando causa alucinações em conversas longas (Provedor: kimi, canal: Discord)
- [#6852](https://github.com/zeroclaw-labs/zeroclaw/pull/6852) — `LarkChannel` não implementa `request_approval()`, auto-denying approvals sem interação real

**S2 — Degraded Behavior (docs):**
- [#6691](https://github.com/zeroclaw-labs/zeroclaw/issues/6691) / [#6692](https://github.com/zeroclaw-labs/zeroclaw/pull/6692) — Filtros `RUST_LOG=zeroclaw...` desatualizados na documentação de observabilidade
- [#6694](https://github.com/zeroclaw-labs/zeroclaw/issues/6694) — `cargo mdbook sync` gera churn massivo em catálogos gettext para pequenas edições de docs

**P1 crítico:**
- [#6862](https://github.com/zeroclaw-labs/zeroclaw/issues/6862) `Gateway SPA fallback serves index.html for unimplemented /api/* routes` — Dashboard web quebra com `Unexpected token '<'` ao receber HTML fallback em vez de JSON para rotas não implementadas. Affects v0.8.0-beta-1.
- [#6180](https://github.com/zeroclaw-labs/zeroclaw/issues/6180) — Cannot use llama-server (P1, blocked)

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em Progress Ativo

| # | Feature | Status | Relevância |
|---|---------|--------|------------|
| [#6824](https://github.com/zeroclaw-labs/zeroclaw/issues/6824) | **TUI Agent Chat** (Ratatui-based) | `in-progress` | Interface terminal interativa com streaming, tool calls e prompts de approval — demanda de UX terminal |
| [#6820](https://github.com/zeroclaw-labs/zeroclaw/issues/6820) | **ACP protocol extensions** para diff/file-proposal | `in-progress` | Suporte a diffs lado a lado durante ciclos de approval de edição, habilitando TUI e web dashboard |
| [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) | **Decouple memory strategy via `MemoryStrategy` trait** | RFC, `blocked` | Arquitetura plugável de estratégias de memória — impacto no design de storage |
| [#6864](https://github.com/zeroclaw-labs/zeroclaw/issues/6864) | **Inverter dependência zeroclaw-channels → zeroclaw-runtime** | Proposta | Refatoração arquitetura de crates — mover orchestrator para runtime |
| [#6877](https://github.com/zeroclaw-labs/zeroclaw/issues/6877) | **`runtime_profiles.*.max_tool_iterations` sem efeito** | Bug/feature | `max_tool_iterations` só funciona em `[agents.*]`, não em `[runtime_profiles.default]` — precisa documentação ou correção |
| [#6729](https://github.com/zeroclaw-labs/zeroclaw/issues/6729) | **Capability flags** para `shared/` access e workspace escape | `accepted` | Flags por-agente para isolar workspaces — demanda de multi-tenant/segurança |
| [#6661](https://github.com/zeroclaw-labs/zeroclaw/issues/6661) | **Preserve committed streamed output during websocket steering** | `accepted` | Integridade de transcrição durante steering websocket — evita invalidação de texto já streamingado |
| [#6680](https://github.com/zeroclaw-labs/zeroclaw/pull/6680) | **WeCom AI Bot WebSocket channel** | Open (XL) | Canal WeCom via WebSocket — importante para mercado chinês |
| [#6866](https://github.com/zeroclaw-labs/zeroclaw/pull/6866) | **Selective channel builds** via feature flags | Open (L) | Compilação de canais específicos — artifacts menores |
| [#5652](https://github.com/zeroclaw-labs/zeroclaw/pull/5652) | **Native extended thinking** (Anthropic + Bedrock) | Open (L) | Raciocínio nativo com budget, significativamente melhor para tarefas agentic complexas |
| [#6065](https://github.com/zeroclaw-labs/zeroclaw/issues/6065) | **ZeroClaw MCP para Xcode** | Proposta | Integração Model Context Protocol com Xcode — caso de uso developer-focused |
| [#6060](https://github.com/zeroclaw-labs/zeroclaw/issues/6060) | **Pin 1.0 Refactor Tracking Issue** | Closed | Meta de consolidação: 94 open issues + 286 open PRs, merge cadence lenta. Consolidador de roadmap criado. |
| [#6715](https://github.com/zeroclaw-labs/zeroclaw/issues/6715) | **Delete unneeded branches** (>200 branches) | Proposta | Higiene de repositório — +200 branches já merged sem propósito |

### Padrões de Roadmap Identificáveis

1. **Arquitetura de channels em expansão**: 22 canais diferentes, com novos integrations (WeCom, Signal emoji, Lark approval) e refatoração de allowlist predicates
2. **Interface TUI nativa**: Investimento em chat interativo via Ratatui, diff/proposal protocol e UI de terminal — evidencia estratégia "CLI-first"
3. **Segurança reforçada**: silent-fallback hardening (#6127), capability flags (#6729), workspace isolation — reflexo de adoção em cenários corporativos
4. **Multi-provider e extended thinking**: Native reasoning com budget para Anthropic/Bedrock (#5652), novos provedores (NEAR AI Cloud #6842, llama-server #6180)

---

## 7. Resumo de Feedback dos Usuários

### Dores Realmente Reportadas

| Dor | Issue | Canal | Severidade |
|-----|-------|-------|------------|
| **Configuração de canais via dashboard gera crashloop** | [#6724](https://github.com/zeroclaw-labs/zeroclaw/issues/6724) | Todos | Alta — experiência de onboarding destruída |
| **Credenciais de provedores custom falham silenciosamente** | [#6127](https://github.com/zeroclaw-labs/zeroclaw/issues/6127) | Runtime/Gateway | Alta — segurança e debugging comprometidos |
| **Markdown enviado como texto plano em emails** | [#6512](https://github.com/zeroclaw-labs/zeroclaw/pull/6512) | Email | Média — experiência do destinatário degradada |
| **llama-cpp configurado não funciona** | [#6180](

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*