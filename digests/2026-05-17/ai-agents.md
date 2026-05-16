# Resumo diário do ecossistema de agentes de IA 2026-05-17

> Issues: 0 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-05-16 20:40 UTC

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

**Data de Referência:** 2026-05-17
**Escopo:** 7 projetos monitorados (1 inativo)

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **vigor excepcional** em 2026-05-17, com 6 de 7 projetos demonstrando atividade intensa. **ZeroClaw e Hermes Agent** lideram em volume absoluto (50 issues + 50 PRs cada), evidenciando bases comunitárias massivas e ciclos de desenvolvimento acelerados. **NanoBot, IronClaw e CoPaw** mantêm ritmo robusto com foco em arquitetura de próxima geração, enquanto **PicoClaw** opera em escala menor com estratégia de canais diversificada. A convergência técnica é notável: multi-canal (WeChat, Telegram, Signal), otimização de contexto/compactação, e isolamento multi-tenant emergem como necessidades universais. A saúde geral do ecossistema é **sólida**, embora CoPaw requeira atenção imediata devido a bugs críticos não triados.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | Releases | Saúde | Observações |
|---------|:-----------:|:---------:|:--------:|:-----:|-------------|
| **ZeroClaw** | 50 | 50 | 0 | ✅ Excelente | Sprint intensa; 11 PRs merged; 3 bugs críticos novos |
| **Hermes Agent** | 50 | 50 | 1 (v0.14.0) | ✅ Saudável | 808 commits, 633 PRs no release; 5 P1s pendentes |
| **NanoBot** | 7 | 26 | 1 (v0.2.0) | ✅ Saudável | 105 PRs + 20 contribuidores no release |
| **IronClaw** | 14 | 23 | 0 | ⚠️ Alerta | Reborn architecture; 1 P0 + 1 bug macOS crítico |
| **CoPaw** | 12 | 14 | 0 | 🔴 Crítica | 1 bug crítico (rate-limit queue flush); backlog não triado |
| **PicoClaw** | 5 | 4 | 1 (nightly) | ⚖️ Moderada | Bug Android crítico; regressão v0.2.8 |
| **NullClaw** | 0 | 0 | 0 | ⚫ Inativo | Projeto de referência sem atividade |

**Métricas agregadas do ecossistema (24h):**
- **138 issues** abertas/atualizadas
- **167 PRs** atualizados
- **3 releases** (2 formais + 1 nightly)
- **5 bugs críticos** reportados entre projetos

---

## 3. Posicionamento do Projeto Principal

### ZeroClaw — Líder em Volume e Funcionalidades

**Vantagens competitivas:**

| Dimensão | Vantagem | Evidência |
|----------|---------|-----------|
| **Escala comunitária** | 50 issues + 50 PRs/24h | Maior volume do ecossistema |
| **Arquitetura modular** | Skill system maduro, Dream Mode para memória | PRs #6693, #6667 |
| **Multi-plataforma** | Desktop app expanding para Windows/Linux | PR #6710 (L, alto risco) |
| **Observabilidade** | SSE logs restaurado + health pulse | PR #6553 |
| **Roadmap diversificado** | OAuth providers, PDF support, LSP | Issues bloqueadas aguardando maintainer |

**Diferenças técnicas:**
- **Gestão de skills** mais avançada que pares (toggle API, dashboard web, SkillImprover)
- **Memory consolidation** via "Dream Mode" — paradigma único
- **Ratatui REPL** em desenvolvimento para experiência terminal premium

**Tamanho da comunidade:** ~215 contribuidores no último release do ecossistema (Hermes v0.14.0); ZeroClaw não divulga publicamente, mas volume de PRs sugere base equivalente ou superior.

---

## 4. Focos Técnicos Compartilhados

Os sete projetos demonstram convergência em **cinco kebutuhan teknis** que transcendem implementações individuais:

### 4.1 Otimização de Contexto e Janela de Tokens

| Projeto | Feature | Impacto |
|---------|---------|---------|
| NanoBot | Remoção de contexto duplicado (#3859) | Economia de ~4000 tokens/turn |
| NanoBot | BM25-lite skill router (#3865) | Redução de ~60% no system prompt |
| CoPaw | Context compaction com fix de parsing (#4448) | Crítico — conversas longas |
| ZeroClaw | Context compressor drop reasoning_content (#6269) | Afeta modelos CoT (DeepSeek) |

**Análise:** Todos os projetos enfrentam o mesmo problema fundamental deLLM-based agents: accumulation de contexto esplode custos e degrada performance. A solução é multi-faceted (routing inteligente, compactação, deduplicação).

### 4.2 Multi-Canal de Comunicação

| Projeto | Canais | Status |
|---------|--------|--------|
| PicoClaw | WeChat multi-account | ✅ Lançado (#2881) |
| NanoBot | WeChat, Signal, Weixin | Em desenvolvimento (#3852) |
| Hermes Agent | Discord, Telegram (topics/forum) | Bugs críticos (#27100, #27012) |
| CoPaw | Telegram, QQ | UX fragmentada (#4451) |
| ZeroClaw | Channels supervisor | Crash loop bug (#6724) |

**Análise:** A estratégia de canais é universal, mas maturity varies. PicoClaw lider em WeChat multi-account; Hermes tem profundidade Telegram mas com bugs de routing.

### 4.3 Resiliência e Auto-Correção

| Projeto | Feature | Status |
|---------|---------|--------|
| NanoBot | LoopDetectHook + ReflectRetryHook (#3728) | PR aberto ~7 dias |
| Hermes Agent | Memory logging para leak detection (#27102) | Merged |
| CoPaw | CronManager concurrency fix (#4084) | PR aberto 10 dias |
| ZeroClaw | Gateway silent-fallback hardening (#6127) | Enhancement aberto |
| IronClaw | Planned-runtime composition (WS-14 a WS-17) | Progresso consistente |

**Análise:** A demanda por agentes autônomos que detectam e corrigem seus próprios erros é ubíqua. NanoBot está mais avançado com hooks dedicados.

### 4.4 Segurança e Multi-Tenancy

| Projeto | Feature | Severidade |
|---------|---------|------------|
| Hermes Agent | Per-user agent isolation (#21574) | RFC com 6 comentários |
| Hermes Agent | Prompt injection entre usuários | Bug de segurança |
| NanoBot | Secret reference support (#2172) | ✅ Fechado |
| ZeroClaw | Per-skill permissions (#5775) | Enhancement bloqueado |
| CoPaw | Rate-limit queue flush (#4449) | Bug crítico |

**Análise:** O ecossistema está amadurecendo de "single-user personal assistant" para "multi-tenant production platform." Hermes e ZeroClaw estão mais avançados nesta jornada.

### 4.5 Providers e Multi-Model

| Projeto | Providers | Features |
|---------|-----------|----------|
| CoPaw | Grok/xAI via OAuth (#4444) | Expandindo |
| Hermes Agent | xAI collections search (#27066) | Novo toolset |
| ZeroClaw | OAuth para Ollama Cloud, z.ai, Kimi (#5601) | Bloqueado |
| NanoBot | DeepSeek, MiMo via gateway (#3851) | Bugs corrigidos |

**Análise:** Diversificação de providers é estratégica. OAuth nativo é feature desejada para eliminar gerenciamento de API keys.

---

## 5. Análise de Diferenciação

### 5.1 Por Foco Primário

| Projeto | Foco Principal | Público-Alvo |
|---------|----------------|--------------|
| **NanoBot** | Eficiência de tokens + goals sustentáveis | Desenvolvedores otimizando custos |
| **Hermes Agent** | Integração Telegram + segurança multi-usuário | Usuários pessoais via Telegram |
| **IronClaw** | Arquitetura Reborn (production-grade) | Deployments enterprise |
| **CoPaw** | UX de chat + canais diversificados | Usuários finais chineses (QQ/WeChat) |
| **ZeroClaw** | Modularidade via skills + observabilidade | Desenvolvedores avançados |
| **PicoClaw** | Mobile-first + WeChat multi-account | Usuários Android chineses |

### 5.2 Por Arquitetura

```
┌─────────────────────────────────────────────────────────────────┐
│                    ESPECTRO ARQUITETURAL                        │
├──────────────────┬──────────────────┬──────────────────────────┤
│   EMBEDDED/LITE  │   BALANCED       │   ENTERPRISE/HEAVY        │
├──────────────────┼──────────────────┼──────────────────────────┤
│ NanoBot (Python) │ CoPaw (Python)    │ IronClaw (Rust?)         │
│ PicoClaw (Go)    │ Hermes (Python?)  │ ZeroClaw (Rust?)         │
├──────────────────┼──────────────────┼──────────────────────────┤
│ Baixa fricção    │ Produtividade     │ Escala, segurança,       │
│ deploy           │ extensibilidade   │ performance              │
└──────────────────┴──────────────────┴──────────────────────────┘
```

### 5.3 Diferenciação Técnica Chave

| Dimensão | Líder | Implícito |
|----------|-------|-----------|
| **Volume PRs/commits** | ZeroClaw + Hermes | Escala comunitária massiva |
| **Maturidade de canais** | PicoClaw | WeChat multi-account shipped |
| **Auto-correção** | NanoBot | LoopDetectHook em desenvolvimento |
| **Observabilidade** | ZeroClaw | SSE logs + health pulse |
| **Segurança multi-tenant** | Hermes | RFC formal + bugs ativos |
| **Mobile** | PicoClaw | Android-first, crash reporting |
| **Skills/Plugins** | ZeroClaw | Sistema mais maduro |

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração

| Projeto | PRs/24h | Tempo Médio Aberto | Velocidade |
|---------|:-------:|:------------------:|:----------:|
| **ZeroClaw** | 50 | ~3-4 dias | 🔴 Muito Rápida |
| **Hermes Agent** | 50 | ~5-7 dias | 🔴 Muito Rápida |
| **NanoBot** | 26 | ~2-3 dias | 🟠 Rápida |
| **IronClaw** | 23 | ~7-10 dias | 🟡 Moderada |
| **CoPaw** | 14 | ~6-10 dias | 🟡 Moderada |
| **PicoClaw** | 4 | ~5-8 dias | 🟢 Lenta |

### 6.2 Consolidação vs. Expansão

| Estratégia | Projetos | Comportamento |
|------------|----------|---------------|
| **Expansão rápida** | ZeroClaw, Hermes, NanoBot | Muitos PRs, releases frequentes, features novas |
| **Qualidade** | IronClaw, PicoClaw | PRs menores, foco em estabilidade, regressões |
| **Estável** | CoPaw | Alto volume mas backlog não triado — risco de tech debt |

### 6.3 Contribuidor Atividade

| Projeto | Novas Contributors | First-time PRs | Tendência |
|---------|:------------------:|:---------------:|-----------|
| **NanoBot** | 20 no v0.2.0 | Não especificado | 🟢 Crescendo |
| **Hermes Agent** | 215 no v0.14.0 | Não especificado | 🟢 Forte crescimento |
| **CoPaw** | 3 first-time | 3 em revisão | 🟡 Moderada |
| **ZeroClaw** | Não especificado | Ativo (dependabot) | 🟢 Sólida |

### 6.4 Gesundheit do Projeto

| Indicador | ZeroClaw | Hermes | NanoBot | IronClaw | CoPaw | PicoClaw |
|-----------|:--------:|:------:|:-------:|:--------:|:-----:|:--------:|
| **Bugs críticos abertos** | 3 | 5 (P1) | 2 | 1 | 1 | 1 |
| **Backlog >7 dias** | Moderado | Moderado | Mínimo | P0 crítico | Crescendo | Moderado |
| **Release cadence** | Alta | Muito alta | Alta | Baixa (pre-release) | Baixa | Nightly |
| **Pontos de dor críticos** | Onboarding | Docker/config | WebUI | macOS bug | Rate-limit | Android |
| **Score 24h** | ✅ 5/5 | ✅ 4.5/5 | ✅ 4.5/5 | ⚠️ 3.5/5 | 🔴 2.5/5 | ⚠️ 3/5 |

---

## 7. Sinais de Tendência

### 7.1 Tendências de Mercado Extraídas

#### 🔹 Tendência 1: De "Agente Único" para "Ecossistema Multi-Canal"
**Evidência:**
- Todos os 6 projetos ativos investem em múltiplos canais (Telegram, WeChat, Discord, Signal, QQ, Email)
- PicoClaw: WeChat multi-account shipped
- NanoBot: Signal support em PR
- CoPaw: Telegram + QQ com paridade de features em desenvolvimento

**Implicação:** Usuários esperam agentes que funcionam onde eles estão, não o contrário.

#### 🔹 Tendência 2: Otimização de Contexto como Necessidade de Produção
**Evidência:**
- BM25 routing (NanoBot): 60% redução em system prompt
- Context deduplication (NanoBot): 4000 tokens/turn economizados
- Context compaction (CoPaw, ZeroClaw): ativo com bugs
- Turn counter display (CoPaw): UI para monitoring

**Implicação:** LLMs com janelas de 1M+ tokens estão sendo usados, mas eficiência de contexto é crítica para custos e latência.

#### 🔹 Tendência 3: Auto-Correção e Resiliência como Features de Primeira Classe
**Evidência:**
- LoopDetectHook (NanoBot): detection + retry
- ReflectRetryHook (NanoBot): auto-correction
- Memory logging (Hermes): leak detection
- Dream Mode (ZeroClaw): memory consolidation
- Planned-runtime (IronClaw): composition for production

**Implicação:** Agentes que funcionam "set and forget" para longas sessões são demandados.

#### 🔹 Tendência 4: Segurança Multi-Tenant Emerge como Requisito Enterprise
**Evidência:**
- Hermes: RFC per-user isolation (#21574) com 6 comentários
- Hermes: Prompt injection entre usuários reportada
- ZeroClaw: Per-skill permissions
- CoPaw: Rate-limit queue isolation

**Implicação:** Uso em ambientes compartilhados (famílias, equipes, empresas) está crescendo, mas isolamento é imaturo.

#### 🔹 Tendência 5: Mobile-First para Mercados Não-Ocidentais
**Evidência:**
- PicoClaw: Android app com 4 issues + bug de permissões
- CoPaw: QQ channel (plataforma dominante na China)
- NanoBot: Weixin channel com bugs de login

**Implicação:** Mercados chinês e asiático são drivers de adoção mobile-first.

#### 🔹 Tendência 6: Providers Diversificados Reduzindo Lock-in
**Evidência:**
- CoPaw: Grok via OAuth PKCE
- Hermes: xAI collections search
- NanoBot: DeepSeek, MiMo, OpenRouter
- ZeroClaw: Ollama Cloud, z.ai, Kimi, MiniMax OAuth

**Implicação:** Nenhum provider domina; flexibilidade de switching é feature competitiva.

#### 🔹 Tendência 7: Skills/Plugins como Sistema Operacional de Agentes
**Evidência:**
- ZeroClaw: SkillImprover, skill_manage API, dashboard
- NanoBot: Skills system com routing
- IronClaw: ExtensionManifestV2

**Implicação:** Agentes evoluíram de "single-purpose" para "platforms" onde skills são adicionáveis.

---

### 7.2 Resumo Executivo para Decisores

| Stakeholder | Recomendação |
|-------------|--------------|
| **Desenvolvedores** | Priorizar ZeroClaw ou Hermes para projetos de produção; NanoBot para otimização de custos |
| **Decisores técnicos** | Observar IronClaw Reborn para arquitetura de próxima geração |
| **Produtos enterprise** | Aguardar maturação de multi-tenancy em Hermes e ZeroClaw |
| **Mercado chinês** | PicoClaw ou CoPaw para integração WeChat/QQ nativa |
| **Contribuidores** | CoPaw e IronClaw oferecem menor barreira de entrada com alto impacto |

---

*Relatório gerado automaticamente com base nos resumos de atividade do GitHub de 2026-05-17. Dados subjectivos a limitações dos resumos fornecidos.*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-05-17

---

## 1. Panorama do Dia

O projeto NanoBot apresenta **alta atividade de desenvolvimento** na data de hoje. Foram registradas **7 issues** e **26 PRs** atualizadas nas últimas 24 horas, com **1 nova release** (v0.2.0) marcando um marco significativo com 105 PRs mescladas e 20 novos contribuidores. A atividade de PRs indica forte momentum, com 16 PRs já mescladas/fechadas hoje. O release v0.2.0 introduz o sistema de **objetivos sustentáveis** (`/goal`), representando uma evolução arquitetural importante. Há alguns bugs ativos relacionados a WebUI, canais (Weixin) e bootstrap HTTP 500 que requerem atenção.

---

## 2. Lançamentos

### 🎉 v0.2.0 Released

**Link:** [HKUDS/nanobot Release v0.2.0](https://github.com/HKUDS/nanobot/releases/tag/v0.2.0)

**Destaques:**
- **105 PRs mescladas** nesta versão
- **20 novos contribuidores** incorporados ao projeto
- Novo comando `/goal` para marcar threads como objetivos sustentáveis
- Parâmetro `long_task` para manter objetivos ativos no Runtime Context
- Objetivo persiste durante compactação e chamadas longas de ferramentas

**Breaking Changes:** Não identificados no escopo dos dados. Recomenda-se verificar o changelog completo para eventuais alterações em APIs internas.

**Notas de Migração:** Desconhecidas no momento. Usuários atualizando devem testar o novo sistema de goals em ambientes de staging.

---

## 3. Progresso do Projeto

### PRs Importantes Mergidas/Fechadas Hoje

| PR | Título | Impacto |
|---|---|---|
| [#3851](https://github.com/HKUDS/nanobot/pull/3851) | Fix MiMo thinking control via gateway | Corrige controle de raciocínio para modelos MiMo através de provedores gateway |
| [#3859](https://github.com/HKUDS/nanobot/pull/3859) | Remove duplicate runtime context injection | Remove duplicação de contexto (economia de ~4000 tokens por turn) |
| [#3856](https://github.com/HKUDS/nanobot/pull/3856) | Extract checkpoint.py and turn_writer.py | Refatoração que reduz `loop.py` e melhora manutenibilidade |
| [#3858](https://github.com/HKUDS/nanobot/pull/3858) | Extract ContextBuilder.build_user_content() | API mais limpa para construção de conteúdo de usuário |
| [#3860](https://github.com/HKUDS/nanobot/pull/3860) | Update CLAUDE.md | Documentação atualizada com novos canais e providers |
| [#3861](https://github.com/HKUDS/nanobot/pull/3861) | Re-evaluate LLM timeout per goal state change | Corrige timeout para objetivos sustentáveis |
| [#3516](https://github.com/HKUDS/nanobot/pull/3516) | Automatic cleanup of expired sessions | Novo config `sessionCleanup` para limpeza automática |
| [#3461](https://github.com/HKUDS/nanobot/pull/3461) | Multi-agent mailbox channel plugin | Plugin de comunicação inter-agentes via filesystem |
| [#3853](https://github.com/HKUDS/nanobot/pull/3853) | Fix exec format URL parameters | Permite `format` em query strings sem bloquear |
| [#3223](https://github.com/HKUDS/nanobot/pull/3223) | Add spawn_status, spawn_cancel tools | Gerenciamento de subagentes via ferramentas |

**Avanços Técnicos Observados:**
- Melhoria significativa em eficiência de tokens (remoção de contexto duplicado)
- Expansão de capacidades multi-agente
- Melhoria em providers (MiMo, DeepSeek)
- Refatoração contínua para saúde de longo prazo do código

---

## 4. Temas Quentes da Comunidade

### Issues/PRs com Maior Engajamento

| # | Tipo | Título | Comentários | Análise |
|---|---|---|---|---|
| [#3790](https://github.com/HKUDS/nanobot/issues/3790) | Bug | WebUI会话打印内容显示错乱 | 12 | **Alta discussão.** Bug de renderização no WebUI que requer refresh. Provavelmente related a streaming de resposta. |
| [#2172](https://github.com/HKUDS/nanobot/issues/2172) | Feature | Support secret reference (security) | 5 | **Feature importante fechada.** Suporte a referências de secrets via `${VAR}` — melhoria de segurança significativa. |
| [#3728](https://github.com/HKUDS/nanobot/pull/3728) | Feature | LoopDetectHook and ReflectRetryHook | Em aberto | **Proposta robusta.** Sistema de auto-correção para loops e retries cegos — demanda real da comunidade. |
| [#3865](https://github.com/HKUDS/nanobot/pull/3865) | Feature | BM25-lite skill router | Em aberto | **Redução de ~60% no system prompt.** Solução elegante para escalabilidade de skills. |
| [#3852](https://github.com/HKUDS/nanobot/pull/3852) | Feature | Signal channel support | Em aberto | **Expansão de canais.** Integração com signal-cli demonstra estratégia de crescimento de plataforma. |

**Padrões Identificados:**
- Foco em **eficiência de tokens** e otimização de contexto
- Demanda forte por **auto-correção de agentes**
- Expansão de **canais de comunicação**
- Melhorias de **segurança** sendo priorizadas

---

## 5. Bugs e Estabilidade

### Issues Abertas (Bugs)

| # | Severidade | Título | Status | Link |
|---|---|---|---|---|
| #3857 | 🔴 Alta | bootstrap failed: HTTP 500 | Nova | [#3857](https://github.com/HKUDS/nanobot/issues/3857) |
| #3863 | 🔴 Alta | 微信不能Login | Nova | [#3863](https://github.com/HKUDS/nanobot/issues/3863) |
| #3790 | 🟡 Média | WebUI会话打印内容显示错乱 | Ativa (12 comments) | [#3790](https://github.com/HKUDS/nanobot/issues/3790) |
| #3870 | 🟡 Média | Docker build fails | Em PR | [#3870](https://github.com/HKUDS/nanobot/pull/3870) |

### Bugs Corrigidos/Relacionados

| # | Título | Link |
|---|---|---|
| #3845/#3851 | MiMo thinking control via gateway | [#3851](https://github.com/HKUDS/nanobot/pull/3851) |
| #3867 | OpenRouter reasoning.effort injection (follow-up) | [#3867](https://github.com/HKUDS/nanobot/pull/3867) |
| #3864 | Chinese rate-limit marker recognition | [#3864](https://github.com/HKUDS/nanobot/pull/3864) |
| #3853 | Format command em URL parameters | [#3853](https://github.com/HKUDS/nanobot/pull/3853) |

**Análise de Estabilidade:**
- 🔴 **2 bugs de alta severidade** requerem atenção imediata (HTTP 500 no bootstrap, login Weixin)
- A equipe está respondendo ativamente (PRs de fix já abertas)
- Padrão de bugs relacionados a **providers** (DeepSeek, MiMo, rate limits) indica área de investimento contínuo

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em Desenvolvimento

| # | Título | Sinais de Roadmap |
|---|---|---|
| [#3852](https://github.com/HKUDS/nanobot/pull/3852) | Signal channel support | Estratégia multi-canal |
| [#3728](https://github.com/HKUDS/nanobot/pull/3728) | LoopDetectHook + ReflectRetryHook | Agentes mais autônomos e resilientes |
| [#3865](https://github.com/HKUDS/nanobot/pull/3865) | BM25-lite skill router | Otimização de contexto/skills |
| [#3854](https://github.com/HKUDS/nanobot/pull/3854) | Peer roster via bootstrap | Multi-instância/orquestração |
| [#3846](https://github.com/HKUDS/nanobot/issues/3846) | Keep skill content in multi-turn | Melhoria de contexto de skills |
| [#3866](https://github.com/HKUDS/nanobot/pull/3866) | Expand secrets documentation | Documentação de segurança |

### Feature Fechada Importante

| # | Título | Link |
|---|---|---|
| #2172 | Support secret reference instead of plaintext | [#2172](https://github.com/HKUDS/nanobot/issues/2172) |

**Direções de Roadmap Inferidas:**
1. **Resiliência de agentes** — auto-correção, detecção de loops
2. **Escalabilidade** — BM25 routing, otimização de tokens
3. **Expansão de canais** — Signal, multi-instância
4. **Segurança** — secrets management, rate limit handling

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Categoria | Problema | Frequência |
|---|---|---|
| **Estabilidade** | HTTP 500 no bootstrap | Alta (1 usuário reportou) |
| **Canal Weixin** | Login falhando com mensagem "微信版本較低" | 1 usuário |
| **WebUI** | Conteúdo de chat se sobrepõe/descrição incorreta | 1 usuário (12 comentários = possível impacto maior) |
| **DeepSeek** | Mensagens null causando 400 errors | Documentado em PR |
| **Rate Limits** | Chinese providers retornando erros não reconhecidos | Documentado em PR |

### Cenários de Uso Identificados

- **Multi-instância em HF Spaces** — necessidade de peer discovery (#3854)
- **Segurança em produção** — secrets em plaintext é risco (#2172)
- **Agentes de longa execução** — timeout não ajustável era problema (#3861)
- **30+ skills instaladas** — prompt inflation é problema real (#3865)

### Indicadores de Satisfação

- **105 PRs em v0.2.0** com 20 novos contribuidores indica crescimento saudável
- Comunidade ativa em bugs (12 comentários em #3790)
- Feature requests sendo mergeadas rapidamente

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta há Tempo

**Não identificado no dataset atual.** As issues listadas parecem ter atualização recente.

### PRs Abertas há Tempo

| # | Título | Idade | Prioridade | Link |
|---|---|---|---|---|
| #3728 | LoopDetectHook + ReflectRetryHook | ~7 dias | Alta | [#3728](https://github.com/HKUDS/nanobot/pull/3728) |

### Issues Antigas Fechadas Recentemente

| # | Título | Link |
|---|---|---|
| #2172 | Support secret reference (feature request) | [#2172](https://github.com/HKUDS/nanobot/issues/2172) |
| #3845 | MiMo thinking control bug | [#3845](https://github.com/HKUDS/nanobot/issues/3845) |

---

## Métricas Resumidas

| Métrica | Valor |
|---|---|
| Issues ativas | 4 |
| Issues fechadas (24h) | 3 |
| PRs abertas | 10 |
| PRs mescladas/fechadas | 16 |
| Novas releases | 1 (v0.2.0) |
| Bugs de alta severidade | 2 |
| Features em desenvolvimento | 6+ |

**Saúde Geral: ✅ Saudável** — Alto volume de PRs com qualidade, bugs sendo tratados proativamente, roadmap claro com foco em resiliência e eficiência.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-05-17

---

## 1. Panorama do Dia

O projeto Hermes Agent mantém um ritmo de desenvolvimento intenso, com **50 issues e 50 PRs atualizados nas últimas 24 horas**. O release **v0.14.0** ("The Foundation Release") marca um marco significativo com 808 commits, 633 PRs mergeados e 215 contribuidores — demonstrando uma das semanas mais produtivas da história do projeto. A atividade comunitária permanece robusta com issues críticas sendo reportadas e corrigidas rapidamente, enquanto o time de mantenedores fecha PRs de forma consistente. O estado geral indica um projeto saudável e em expansão acelerada.

---

## 2. Lançamentos

### 🎉 v2026.5.16 — Hermes Agent v0.14.0

| Métrica | Valor |
|---------|-------|
| Commits desde v0.13.0 | 808 |
| PRs mergeados | 633 |
| Arquivos alterados | 1.393 |
| Linhas inseridas | 165.061 |
| Issues fechadas | 545 (12 P0, 50 P1) |
| Contribuidores | 215 (incluindo co-autores) |

**Destaque:** O release é denominado "The Foundation Release" e promete melhorias fundamentais de instalação e execução. Detalhes completos disponíveis em: [NousResearch/hermes-agent Releases](https://github.com/NousResearch/hermes-agent/releases)

**⚠️ Nota de Migração:** Usuários relatam problemas com o Docker image v0.14.0:
- Issue [#24698](https://github.com/NousResearch/hermes-agent/issues/24698): `python-telegram-bot` não está instalado na imagem Docker oficial
- Issue [#27100](https://github.com/NousResearch/hermes-agent/issues/27100): Telegram bot falha ao iniciar com flag `--user`

---

## 3. Progresso do Projeto

### PRs Mergeados/Fechados Hoje (Destaques)

| PR | Descrição | Impacto |
|----|-----------|---------|
| [#27112](https://github.com/NousResearch/hermes-agent/pull/27112) | `feat(gateway/discord): emit discord:message hook event for observers` | Permite que hooks observem mensagens Discord sem patch no daemon |
| [#27111](https://github.com/NousResearch/hermes-agent/pull/27111) | `fix(gateway): force process exit after gateway shutdown` | Corrige zombie processes após desligamento limpo |
| [#27101](https://github.com/NousResearch/hermes-agent/pull/27101) | `feat(cli): add /exit --delete flag` | Remove sessão SQLite e transcripts ao sair — caso de uso para privacidade |
| [#27102](https://github.com/NousResearch/hermes-agent/pull/27102) | `feat(gateway): periodic memory logging for leak detection` | Loga RSS/gc/threads a cada 5min para detecção de leaks |
| [#26972](https://github.com/NousResearch/hermes-agent/issues/26972) | Fix: Hermes Silently Drops EmbeddedResource Content Blocks from MCP | Corrige drop silencioso de blocos `EmbeddedResource` de servers MCP |

### PRs Abertos com Alto Impacto

| PR | Descrição | Status |
|----|-----------|--------|
| [#27114](https://github.com/NousResearch/hermes-agent/pull/27114) | `fix(gateway): synthetic/queued messages routed to wrong Telegram DM topic` | Aberto |
| [#27107](https://github.com/NousResearch/hermes-agent/pull/27107) | `fix: route Telegram DM topic deliveries correctly` | Aberto |
| [#27113](https://github.com/NousResearch/hermes-agent/pull/27113) | `feat(dashboard): allow trusted reverse-proxy Host headers` | Aberto |
| [#27108](https://github.com/NousResearch/hermes-agent/pull/27108) | `fix(run_agent): stamp session_type + parent_session_id on trajectory JSON` | Aberto |
| [#27098](https://github.com/NousResearch/hermes-agent/pull/27098) | `fix(send_message): add thread-not-found retry for Telegram forum topic sends` | Aberto |
| [#27073](https://github.com/NousResearch/hermes-agent/pull/27073) | `fix: reap dashboard and TUI child processes` | Aberto (P1) |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (Comentários + Reações)

| Issue | Título | Comentários | 👍 | Análise |
|-------|--------|-------------|-----|---------|
| [#21574](https://github.com/NousResearch/hermes-agent/issues/21574) | RFC: Per-user agent isolation and identity-based permission system | 6 | 0 | **Demanda crítica de segurança multi-usuário.** Usuário reporta prompt injection entre usuários no Telegram gateway — girlfriend conseguiu se passar por ele. |
| [#11430](https://github.com/NousResearch/hermes-agent/issues/11430) | Feature: Per-user memory isolation in group chats | 4 | 0 | **Isolamento de memória por usuário.** Memória persistente é global, causando confusão de identidades em group chats. |
| [#27013](https://github.com/NousResearch/hermes-agent/issues/27013) | Agents lose project context across session restarts | 2 | 0 | **Perda de contexto.** Agente "alucina" projeto errado após restart de sessão via Telegram. |

### Padrões de Demanda Identificados

1. **Isolamento e Multi-Tenancy:** Múltiplas issues (#21574, #11430, #27013) apontam para necessidade de isolamento de contexto, memória e identidade por usuário/sessão.

2. **Integração Telegram:** Sistema de topics/forum e DMs está gerando várias issues de roteamento e entrega.

3. **Segurança:** RFC de isolamento per-user é a issue com mais comentários — demonstra demanda real de uso em ambientes compartilhados.

---

## 5. Bugs e Estabilidade

### 🔴 P1 — Críticos (5 issues)

| Issue | Componente | Descrição | Link |
|-------|------------|-----------|------|
| #24698 | Docker/Gateway | `python-telegram-bot` não instalado na imagem Docker v0.13.0 | [Issue](https://github.com/NousResearch/hermes-agent/issues/24698) |
| #26804 | CLI/Config | `.env` é silenciosamente removido durante `hermes update` | [Issue](https://github.com/NousResearch/hermes-agent/issues/26804) |
| #27033 | Agent | Tool Result Contamination causa loop persistente de HTTP 400 | [Issue](https://github.com/NousResearch/hermes-agent/issues/27033) |
| #27012 | Gateway/Telegram | `send_message` falha ao entregar para Telegram forum topics | [Issue](https://github.com/NousResearch/hermes-agent/issues/27012) |
| #27100 | Docker/Telegram | Telegram bot falha no launch com flag `--user` no v0.14.0 | [Issue](https://github.com/NousResearch/hermes-agent/issues/27100) |

### 🟠 P2 — Altos (12+ issues)

| Issue | Componente | Descrição | Link |
|-------|------------|-----------|------|
| #27038 | Agent/Provider | Codex Responses API rejeita replayed messages com IDs longos | [Issue](https://github.com/NousResearch/hermes-agent/issues/27038) |
| #27020 | Gateway/Vision | Passthrough `/v1/chat/completions` não aplica `image_routing.py` | [Issue](https://github.com/NousResearch/hermes-agent/issues/27020) |
| #27008 | Agent/Provider | qwen3.6-plus usa fallback de 131K ctx вместо 1M | [Issue](https://github.com/NousResearch/hermes-agent/issues/27008) |
| #26979 | Agent/Security | Raw todo snapshots injetados após compressão podem causar injection | [Issue](https://github.com/NousResearch/hermes-agent/issues/26979) |
| #26942 | Gateway/Telegram | URLs xAI ephemeral 404 antes do `send_photo` — precisa cache | [Issue](https://github.com/NousResearch/hermes-agent/issues/26942) |

### 🟡 P3 — Medios (33 issues)

Incluem: bugs de UI, features ausentes, problemas de documentação, incompatibilidades menores.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Solicitadas por Prioridade

| Prioridade | Feature | Link | Descrição |
|------------|---------|------|-----------|
| P2 | Context preservation across restarts | [#27013](https://github.com/NousResearch/hermes-agent/issues/27013) | Agente perde contexto de projeto após restart de sessão |
| P2 | xAI collections search tool | [#27066](https://github.com/NousResearch/hermes-agent/pull/27066) | Novo toolset para search RAG via Responses API |
| P3 | Per-user memory isolation | [#11430](https://github.com/NousResearch/hermes-agent/issues/11430) | Isolamento de memória em group chats |
| P3 | Model allowlist for ollama-cloud | [#26980](https://github.com/NousResearch/hermes-agent/issues/26980) | Filtrar lista dinâmica de modelos |
| P3 | Native timezone support | [#26976](https://github.com/NousResearch/hermes-agent/issues/26976) | Timestamps em timezone do usuário |
| P3 | Docker network=none config | [#26962](https://github.com/NousResearch/hermes-agent/issues/26962) | Knob para isolar container |
| P3 | Delegation on/off switch | [#26963](https://github.com/NousResearch/hermes-agent/issues/26963) | Config para desabilitar subagent spawning |
| P3 | Slack Block Kit table rendering | [#26947](https://github.com/NousResearch/hermes-agent/issues/26947) | Renderização de markdown tables no Slack |

### Sinais de Roadmap

1. **Segurança Multi-Tenant:** RFC #21574 demonstra demanda para isolamento per-user — pode evoluir para feature oficial.
2. **Melhorias de Mensageria:** Telegram topics, forum groups, e DM routing são áreas de desenvolvimento ativo.
3. **Observabilidade:** PRs mergeados de memory logging e hook events indicam foco em debuggabilidade.
4. **Integração xAI:** Novo endpoint de collections search e suporte atualizado a X Premium subscriptions.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Categoria | Descrição | Frequência |
|-----------|-----------|------------|
| **Docker/Deploy** | Imagens oficiais com dependências faltando ou flags não funcionais | 🔴 Alta |
| **Config/Migração** | `.env`忽然删除 durante updates, migracje config falham silenciosamente | 🔴 Alta |
| **Telegram Integration** | Forum topics, DM routing, e entrega de mensagens com problemas recorrentes | 🟠 Média-Alta |
| **Segurança** | Prompt injection entre usuários em setups compartilhados | 🟠 Média |
| **Compressão de Contexto** | Raw todo snapshots podem causar comportamento inesperado pós-compressão | 🟡 Média |

### Cenários de Uso Identificados

1. **Uso Pessoal via Telegram:** Usuários rodando Hermes como assistente pessoal através do Telegram gateway — expõe problemas de isolamento entre usuários.
2. **Deploy em Docker:** Crescente adoção de deployment containerizado, revelando gaps entre desenvolvimento e imagens oficiais.
3. **Multi-Model:** Usuários alternando entre provedores (OpenAI, Anthropic, xAI, Qwen) — problemas de metadata e autenticação.
4. **Group Chats:** Múltiplos participantes interagindo com o mesmo agente — demandas de isolamento de contexto.

### Satisfação Geral

Baseado na atividade intensa (808 commits, 633 PRs mergeados em um ciclo) e engajamento comunitário (215 contribuidores), o projeto demonstra **alta Vitalidade e aceitação**. No entanto, issues P1 relacionadas a Docker e configuração indicam **pontos de atrito críticos** para novos usuários.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta há >3 dias

| Issue | Criado | Days Open | Prioridade | Link |
|-------|--------|-----------|------------|------|
| #21574 (RFC: Per-user isolation) | 2026-05-08 | 9 | P3 | [Issue](https://github.com/NousResearch/hermes-agent/issues/21574) |
| #11430 (Per-user memory isolation) | 2026-04-17 | ~30 | P3 | [Issue](https://github.com/NousResearch/hermes-agent/issues/11430) |
| #8278 (WhatsApp group allowlist) | 2026-04-12 | ~35 | P2 | [PR](https://github.com/NousResearch/hermes-agent/pull/8278) |
| #24676 (Gemini parallel function calls) | 2026-05-13 | 4 | P2 | [PR](https://github.com/NousResearch/hermes-agent/pull/24676) |
| #18840 (hermes update stuck) | 2026-05-02 | 15 | P2 | [Issue](https://github.com/NousResearch/hermes-agent/issues/18840) |

### PRs Antigos Sem Merge

| PR | Criado | Days Open | Descrição | Link |
|----|--------|-----------|-----------|------|
| #8278 | 2026-04-12 | ~35 | WhatsApp group allowlist | [PR](https://github.com/NousResearch/hermes-agent/pull/8278) |
| #24676 | 2026-05-13 | 4 | Gemini parallel function calls disambiguation | [PR](https://github.com/NousResearch/hermes-agent/pull/24676) |

---

## Métricas Resumidas do Dia

| Categoria | Valor |
|-----------|-------|
| Issues abertas/ativas | 46 |
| Issues fechadas | 4 |
| PRs abertos | 20 |
| PRs mergeados/fechados | 30 |
| Novas releases | 1 (v0.14.0) |
| Issues P1 em aberto | 5 |
| Issues P2 em aberto | ~12 |
| Contribuidores no release | 215 |

---

*Relatório gerado automaticamente com base nos dados do GitHub de [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) para 2026-05-17.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório de Projeto: PicoClaw

**Data de Referência:** 2026-05-17  
**Repositório:** [github.com/sipeed/picoclaw](https://github.com/sipeed/picoclaw)

---

## 1. Panorama do Dia

O projeto PicoClaw apresenta **atividade moderada** em 17 de maio de 2026, com 5 issues e 4 PRs atualizados nas últimas 24 horas. O destaque vai para o merge da feature de **suporte a múltiplas contas WeChat** (#2881), sinalizando evolução na arquitetura de canais. A versão nightly `v0.2.8-nightly.20260516.0df050ff` foi publicada automaticamente, mantendo o ritmo de desenvolvimento contínuo. O ecossistema mostra vitalidade com 4 issues abertas recentes, porém uma delas (#2880) reporta um bug crítico de permissão no Android que afeta experiência do usuário. A comunidade demonstra interesse em expansão de canais (email, WeChat) e melhorias de conectividade MCP.

---

## 2. Lançamentos

### 🌙 Nova Build Noturna

| Artefato | Versão | Data |
|----------|--------|------|
| Nightly Build | `v0.2.8-nightly.20260516.0df050ff` | 2026-05-16 |

**Changelog:** [v0.2.8...main](https://github.com/sipeed/picoclaw/compare/v0.2.8...main)

> ⚠️ **Aviso:** Esta é uma build automática potencialmente instável. Não recomendada para produção.

**Notas:**
- Release automatizada do branch `main`
- Pode incluir todas as contribuições merged nas últimas 24h (incluindo PR #2881)
- Sem breaking changes documentados explicitamente

---

## 3. Progresso do Projeto

### PRs Merged/Fechados Hoje

| # | Título | Tipo | Impacto |
|---|--------|------|---------|
| **#2881** | feat: 支持微信多账号配置 | Feature | **Alto** |

**Análise - PR #2881:**

Feature significativa que implementa **suporte a múltiplas contas WeChat** no PicoClaw:

- ✅ Interface frontend para gerenciamento de múltiplas contas
- ✅ Backend API com operações CRUD completas
- ✅ Gerenciamento de estado para cada conta
- ✅ Compatibilidade mantida com modo single-account existente
- ✅ Otimização de processamento de mídia para cenários multi-conta

**Links:**
- [PR #2881 - Merge](https://github.com/sipeed/picoclaw/pull/2881)
- [PR #2883 - Versão OPEN](https://github.com/sipeed/picoclaw/pull/2883) (reaberto ou paralelo)

---

### PRs Abertos em Progresso

| # | Título | Status | Prioridade |
|---|--------|--------|------------|
| #2883 | feat: 支持微信多账号配置 | OPEN | Alta |
| #2882 | feat(chat): add independent code block copy and collapse controls | OPEN | Média |
| #2835 | fix(agent): always publish final reply after interim message | stale | Alta |

---

## 4. Temas Quentes da Comunidade

### 🔥 Issues com Maior Engajamento

| # | Título | Comentários | 👍 | Status |
|---|--------|-------------|-----|--------|
| **#2421** | [Feature]: Add email as native channel | **6** | **1** | OPEN |
| #2742 | [BUG] gateway starts with no channels in v0.2.8 | 4 | 0 | OPEN |
| #2782 | [Feature] MCP client should support Streamable HTTP transport | 3 | 0 | **CLOSED** |

### Análise Detalhada

#### 📧 Issue #2421 - Email como Canal Nativo
**Link:** [github.com/sipeed/picoclaw/issues/2421](https://github.com/sipeed/picoclaw/issues/2421)

Demanda por **inclusão de email como canal nativo**, motivada por:
- Ambientes corporativos e científicos onde email é o canal primário
- Situações onde plataformas de chat convencionais são restritivas

**Sinal de Roadmap:** Alta prioridade para comunidade empresarial/científica.

---

#### 🔌 Issue #2782 - Suporte Streamable HTTP para MCP
**Link:** [github.com/sipeed/picoclaw/issues/2782](https://github.com/sipeed/picoclaw/issues/2782)

- **Status:** CLOSED ✅
- Problema identificado: Cliente MCP suporta apenas SSE (transporte legado)
- Solução necessária: Adotar Streamable HTTP (protocolo recomendado pela especificação MCP)
- Impacto: Conectividade com servidores MCP modernos (ex: mcp-go SDK)

> 🎯 **Indicação de progresso:** Issue foi fechada, sugerindo que o suporte pode ter sido implementado na nightly atual.

---

## 5. Bugs e Estabilidade

### 🐛 Bugs Reportados

| # | Severidade | Título | Ambiente |
|---|------------|--------|----------|
| **#2880** | **Crítica** | Permission denied ao criar diretório Downloads/picoclaw | Android 10 / MIUI 12 |
| #2742 | Alta | Gateway inicia sem canais na v0.2.8 | Ubuntu 22.04 |

### Detalhamento

#### 🔴 Issue #2880 - Crash ao Iniciar Serviço (Android)
**Link:** [github.com/sipeed/picoclaw/issues/2880](https://github.com/sipeed/picoclaw/issues/2880)

| Campo | Valor |
|-------|-------|
| Dispositivo | Xiaomi Pocophone F1 |
| Android | 10 (MIUI 12) |
| Versão PicoClaw | 0.1.3 |
| Permissões | Todas concedidas (incluindo "All files access") |

**Comportamento:** App crasha com `permission denied` ao criar `Downloads/picoclaw`

**Impacto:** Bloqueia uso em dispositivos Android afetados. Regressão provável relacionada a mudanças no handling de storage no Android 10+.

---

#### 🟠 Issue #2742 - Gateway Inicia sem Canais (v0.2.8)
**Link:** [github.com/sipeed/picoclaw/issues/2742](https://github.com/sipeed/picoclaw/issues/2742)

| Campo | Valor |
|-------|-------|
| Versão | 0.2.8 |
| Canal | Telegram |
| Go Version | 1.25.9 |

**Problema:** Gateway falha ao iniciar com configuração de canais válida.

**Impacto:** Afeta estabilidade em produção na versão latest. 4 comentários indicam reprodução por outros usuários.

---

## 6. Pedidos de Features e Sinais de Roadmap

### ✨ Novas Features Solicitadas

| # | Feature | Complexidade | Sinais de Prioridade |
|---|---------|--------------|----------------------|
| #2421 | Email como canal nativo | Alta | 6 comentários, 1 👍 |
| #2834 | Tutorial de update from source | Baixa | 2 comentários |
| #2882 | Controles de copy/collapse em code blocks | Média | PR aberto |

### Mapa de Rota Implícito

```
┌─────────────────────────────────────────────────────────────┐
│                    FOCO DO PROJETO                          │
├─────────────────────────────────────────────────────────────┤
│  Canais     │  Multi-conta (WeChat ✓), Email (solicitado)   │
│  MCP        │  Streamable HTTP (fechado ← em progresso)     │
│  UX/UI      │  Code blocks, permissões Android              │
│  DevEx      │  Update/upgrade path                          │
└─────────────────────────────────────────────────────────────┘
```

**Links:**
- [#2421 - Email channel](https://github.com/sipeed/picoclaw/issues/2421)
- [#2834 - Update from source](https://github.com/sipeed/picoclaw/issues/2834)
- [#2882 - Code block controls](https://github.com/sipeed/picoclaw/pull/2882)

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Dor | Severidade | Evidência |
|-----|------------|-----------|
| **Instabilidade no Android** | 🔴 Alta | #2880 - permissões negadas |
| **Regressão v0.2.8** | 🟠 Alta | #2742 - canais não iniciam |
| **Falta de documentação de upgrade** | 🟡 Média | #2834 - usuário perdido |

### Cenários de Uso Reportados

1. **Uso corporativo/científico:** Requerem email como canal primário (#2421)
2. **Multi-conta WeChat:** Necessidade de gerenciar múltiplas contas comercial (#2881/#2883)
3. **Servidores MCP modernos:** Conectividade limitada sem Streamable HTTP (#2782)
4. **Mobile-first:** Usuários Android enfrentando crashes (#2880)

### Indicadores de Satisfação

| Métrica | Valor | Observação |
|---------|-------|------------|
| Issues fechadas (24h) | 1 | #2782 (resolvida) |
| PRs mergeados (24h) | 1 | Feature WeChat multi-account |
| Engajamento médio | ~3 comentários/issue | Moderado |

---

## 8. Backlog que Merece Atenção

### Issues com Esteira de Tempo Prolongada

| # | Título | Criado | Dias Aberto | Prioridade |
|---|--------|--------|-------------|------------|
| **#2421** | Email como canal nativo | 2026-04-08 | **~39 dias** | 🔴 Alta |
| #2835 | Fix: publish final reply after interim | 2026-05-09 | ~8 dias | 🟠 Alta |
| #2834 | Tutorial update from source | 2026-05-09 | ~8 dias | 🟡 Média |

### Análise de Stale Issues

**Issue #2835** está marcada como `stale` sem resposta da maintainers:
> "Keep normal interactive final replies from being suppressed just because the same turn used the `message` tool earlier"

**Risco:** Bug de UX onde respostas finais são suprimidas indevidamente pode impactar experiência interativa.

---

## Métricas Consolidada do Dia

```
┌────────────────────────────────────────────────────────┐
│                 PicoClaw - 2026-05-17                  │
├────────────────────────────────────────────────────────┤
│  📊 Atividade (24h)                                    │
│     • Issues: 5 atualizadas (4 open, 1 closed)         │
│     • PRs: 4 atualizadas (3 open, 1 merged)            │
│                                                        │
│  🚀 Lançamentos                                        │
│     • 1 nightly build (v0.2.8-nightly.20260516)        │
│                                                        │
│  ✅ Resolvidos                                         │
│     • #2782 - MCP Streamable HTTP support              │
│     • #2881 - WeChat multi-account feature             │
│                                                        │
│  ⚠️ Em Aberto                                          │
│     • #2880 - Bug crítico Android permission           │
│     • #2742 - Regressão v0.2.8 canais                  │
│     • #2421 - Feature email channel (39d sem resposta)  │
│                                                        │
│  📈 Saúde do Projeto: 3.5/5 ⚖️                        │
│     (Ativo mas com bugs críticos pendentes)            │
└────────────────────────────────────────────────────────┘
```

---

**Próximos Passos Recomendados:**
1. Priorizar investigação do bug de permissões Android (#2880)
2. Analisar causa raiz da regressão de canais na v0.2.8 (#2742)
3. Responder ou engajar com feature request de email (#2421)
4. Avaliar PR #2835 antes que se torne tech debt

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-05-17

## 1. Panorama do Dia

O projeto IronClaw apresenta **alta atividade de desenvolvimento** em 17 de maio de 2026, com 14 issues e 23 PRs atualizados nas últimas 24 horas. A ênfase continua no **"Reborn"** — a próxima geração da arquitetura — com múltiplos PRs de trabalho pesado (XL) relacionados à composição de runtime, integração de product-live workflow e infraestrutura de contratos de entrada. sete PRs foram fechados/merged (incluindo marcos de workstream WS-14 a WS-17), demonstrando progresso consistente na pipeline de Reborn. Não houve releases formais hoje, e uma issue de bug crítico foi aberta para a versão macOS 0.28.2.

---

## 2. Lançamentos

**Nenhuma release foi publicada nas últimas 24 horas.**

O projeto encontra-se em fase de desenvolvimento intensivo da arquitetura Reborn, sem tagging de versão desde a última release estável (v0.28.2).

---

## 3. Progresso do Projeto

As seguintes PRs foram **merged/fechados** hoje, representando marcos significativos:

| PR | Escopo | Tamanho | Contribuidor |
|----|--------|---------|--------------|
| [#3653](https://github.com/nearai/ironclaw/pull/3653) | arch(ws-17): prove product live planned-runtime cutover | XL | core |
| [#3652](https://github.com/nearai/ironclaw/pull/3652) | arch(ws-16): wire live planned runtime composition | XL | core |
| [#3651](https://github.com/nearai/ironclaw/pull/3651) | arch(ws-14): register planned driver default path | L | core |
| [#3686](https://github.com/nearai/ironclaw/pull/3686) | fix(ws-13): ack drained inputs before cancel exit | L | core |
| [#3532](https://github.com/nearai/ironclaw/pull/3532) | Fix markdown_to_mrkdwn to avoid converting emphasis inside generated <url\|text> links | L | core |
| [#3707](https://github.com/nearai/ironclaw/pull/3707) | chore(deps): bump jsonwebtoken 9.3.1 → 10.3.0 | M | dependabot |
| [#3705](https://github.com/nearai/ironclaw/pull/3705) | chore(deps): bump rand 0.8.5 → 0.8.6 in /channels-src/wechat | XS | dependabot |

**Destaque:** O conjunto WS-14 a WS-17 representa uma cadeia de integrações que compõe o runtime planejado para produção, consolidando a arquitetura Reborn. A prova de cutover do product-live (#3653) é particularmente significativa como marco de funcionalidade.

---

## 4. Temas Quentes da Comunidade

As **issues com maior engajamento** nas últimas 24h:

| Issue | Tema | Comentários | 👍 |
|-------|------|-------------|-----|
| [#3036](https://github.com/nearai/ironclaw/issues/3036) | **[EPIC] Configuration-as-Code for IronClaw Reborn** | 4 | 1 |
| [#3616](https://github.com/nearai/ironclaw/issues/3616) | Reborn: wire production app/gateway/channel ingress to product live workflow | 4 | 0 |
| [#3692](https://github.com/nearai/ironclaw/issues/3692) | Reborn: add policy-gated personal identity and heartbeat prompt context | 3 | 0 |
| [#3698](https://github.com/nearai/ironclaw/issues/3698) | Reborn: build test/dry-run product-live runtime harness | 2 | 0 |

**Análise:** A issue [#3036](https://github.com/nearai/ironclaw/issues/3036) (Configuration-as-Code) lidera em engajamento como épico de longo prazo, sinalizando demanda por configuração declarativa de tenant blueprints e use-case harnesses. As issues de henrypark133 dominam a fila de trabalho de Reborn, todas com foco em product-live cutover e composição de runtime. A issue #3702 sobre o framework de testes E2E binary foi aberta hoje sem comentários ainda, indicando área que precisa de atenção.

---

## 5. Bugs e Estabilidade

**Bug de severidade crítica reportado hoje:**

- **[#3701](https://github.com/nearai/ironclaw/issues/3701)** — `v0.28.2 macOS prebuilt: gateway never binds despite config + doctor reporting it enabled`
  - **Reportado por:** sergeiest
  - **Última atualização:** 2026-05-16
  - **Status:** Aberto, 0 comentários
  - **Resumo:** O gateway não faz bind na versão pré-construída para macOS v0.28.2, mesmo com configuração correta e o comando `doctor` reportando que está habilitado.

**Problema de CI:**

- **[#3447](https://github.com/nearai/ironclaw/issues/3447)** — `Nightly E2E failed`
  - **Reportado por:** github-actions[bot]
  - **Workflow:** Nightly E2E
  - **Commit:** `201e2164f79a9226744e18ab8c6dddd0faa00a96`
  - **Run:** https://github.com/nearai/ironclaw/actions/runs/25952465897
  - **Falha:** Job "Full E2E / E2E (features)" falhou

**Análise:** O bug macOS (#3701) é recente e sem triagem — requer atenção imediata da equipe. A falha de E2E noturno pode impactar a confiança na base de código se não for resolvida.

---

## 6. Pedidos de Features e Sinais de Roadmap

**Novas features em desenvolvimento (PRs abertos):**

| PR | Feature | Escopo | Risk | Prioridade |
|----|---------|--------|------|------------|
| [#3695](https://github.com/nearai/ironclaw/pull/3695) | Consolidate Reborn composition root + ship live binary | arch/reborn | low | Epic |
| [#3704](https://github.com/nearai/ironclaw/pull/3704) | Boot TOML + provider catalog para standalone binary | reborn | low | Epic |
| [#3703](https://github.com/nearai/ironclaw/pull/3703) | Futureproof RebornRuntime surface para epic #3036 | arch/reborn | low | Epic |
| [#3683](https://github.com/nearai/ironclaw/pull/3683) | Host-owned HTTP ingress contracts | reborn | low | Arch |
| [#3688](https://github.com/nearai/ironclaw/pull/3688) | Project ProductAdapter from single ExtensionManifestV2 | reborn | low | Refactor |
| [#3679](https://github.com/nearai/ironclaw/pull/3679) | Universal FS dispatch across consumer crates | reborn, DB | medium | Feature |
| [#3548](https://github.com/nearai/ironclaw/pull/3548) | Add DISABLE_TOOLS_LIST flag + security regression test | agent, tool | medium | Security |
| [#1378](https://github.com/nearai/ironclaw/pull/1378) | Per-channel MCP and built-in tool filtering | agent, routing | medium | Feature |
| [#3122](https://github.com/nearai/ironclaw/pull/3122) | Support externally-provided tools in Responses API | web, llm | medium | Feature |

**Sinais de roadmap claros:**
- **Reborn como produto vivo** é o foco central: todas as issues de henrypark133 (#3616, #3692, #3698, #3620, #3622, #3696, #3700, #3699, #3697) convergem para este objetivo
- **Configuration-as-Code** (#3036) emerge como próximo épico pós-cutover
- **Segurança** (#3548) demonstra foco em features de hardening

---

## 7. Resumo de Feedback dos Usuários

**Nenhum feedback direto de usuários** foi registrado nas issues ou PRs das últimas 24h. Observações indiretas:

- **Usuários macOS v0.28.2** estão encontrando o bug de gateway não fazendo bind (#3701), indicando frustração operacional
- **A issue #3676** (documentação de secrets/WASM sandbox) sinaliza demanda por clareza na arquitetura de segurança, possivelmente motivada por avaliações de segurança externas

**Lacuna:** Não há issues de "user feedback" ou "user question" na fila ativa, sugerindo que o projeto está em fase de desenvolvimento interno intenso com usuários early-access ou beta.

---

## 8. Backlog que Merece Atenção

**Issues sem resposta há mais tempo ou que precisam de atenção:**

| Issue | Tema | Criado | Atualizado | Status | Prioridade |
|-------|------|--------|------------|--------|------------|
| [#3026](https://github.com/nearai/ironclaw/issues/3026) | Reborn cutover blocker: add config-driven production composition root | 2026-04-28 | 2026-05-16 | Aberta | **P0** |
| [#3036](https://github.com/nearai/ironclaw/issues/3036) | [EPIC] Configuration-as-Code for IronClaw Reborn | 2026-04-28 | 2026-05-16 | Aberta | P2 |
| [#1378](https://github.com/nearai/ironclaw/issues/1378) | Per-channel MCP and built-in tool filtering | 2026-03-18 | 2026-05-15 | PR aberto | Feature |
| [#3122](https://github.com/nearai/ironclaw/pull/3122) | Support externally-provided tools in Responses API | 2026-04-30 | 2026-05-16 | PR aberto | Feature |
| [#3447](https://github.com/nearai/ironclaw/issues/3447) | Nightly E2E failed | 2026-05-10 | 2026-05-16 | Aberta | Bug |

**Análise crítica:**
1. **#3026** é marcada P0 como Reborn cutover blocker há ~19 dias — precisa de movimento urgente
2. **#3701** (bug macOS) foi aberta hoje sem triagem — requer classificação de severidade
3. **#3702** (test framework plan) aberta hoje sem comentários — precisa de input da equipe
4. **#1378** está em aberto há ~60 dias — feature significativa que pode precisar de reavaliação de priorização

---

## Métricas Consolidada do Dia

| Métrica | Valor |
|---------|-------|
| Issues abertas/ativas | 14 |
| Issues fechadas | 0 |
| PRs abertos | 16 |
| PRs merged/fechados | 7 |
| Novas releases | 0 |
| PRs de tamanho XL | 9 |
| Issues P0 em aberto | 1 (#3026) |
| Bugs críticos | 1 (#3701 macOS) |
| Falhas de CI | 1 (Nightly E2E) |

---

*Relatório gerado automaticamente com base em dados do GitHub de 2026-05-17. Para mais detalhes, consulte [github.com/nearai/ironclaw](https://github.com/nearai/ironclaw).*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório de Projeto — CoPaw (QwenPaw)
**Data:** 2026-05-17 | **Período:** Últimas 24h

---

## 1. Panorama do dia

O CoPaw apresenta alta atividade de desenvolvimento nas últimas 24h, com **12 issues abertas e 14 PRs atualizados**, indicando um ritmo intenso de trabalho. Nenhum release foi publicado, e todas as 12 issues permanecem em estado aberto, sinalizando backlog acumulado de triagem. Dois PRs foram fechados (merged), enquanto a grande maioria dos PRs aguarda revisão — incluindo vários de contribuidores iniciantes. Os temas dominantes giram em torno de estabilidade (bugs de context compaction e rate-limit), UX de chat (contadores de turns, deletions, splitting de sessões) e expansão de canais (botões interativos para Telegram/QQ). A plataforma demonstra maturidade com correções de concorrência em cronjobs e refatorações de imports, mas ainda carece de release manager visível para consolidar o trabalho acumulado.

---

## 2. Lançamentos

**Nenhum release publicado nas últimas 24h.**

A ausência de release contrasta com o volume de PRs prontos para merge (especialmente os voltados a features como `/goal` mode, Grok/xAI provider, e fix de imports leves). Isso sugere que o ciclo de release pode estar em fase de planejamento ou que existe gargalo na aprovação final. **Recomendação:** Priorizar o merge das correções de estabilidade (#4448, #4449, #4084) e emitir hotfix se os bugs de context compaction e rate-limit afetarem usuários em produção.

---

## 3. Progresso do Projeto

### PRs fechados/merged (2)

| # | Título | Impacto |
|---|--------|---------|
| [#3246](https://github.com/agentscope-ai/QwenPaw/pull/3246) | feat(qq): add configurable instant acknowledgment message | Adiciona confirmação instantânea para QQ (canal que não suporta `show_typing`), melhorando feedback visual ao usuário |
| [#4387](https://github.com/agentscope-ai/QwenPaw/pull/4387) | feat(providers): allow custom base URL for Anthropic provider | Remove `freeze_url=True`, permitindo endpoints customizados — útil para proxies e deployments enterprise |

### PRs em destaque (em revisão ativa)

| # | Título | Relevância |
|---|--------|------------|
| [#4446](https://github.com/agentscope-ai/QwenPaw/pull/4446) | fix: keep runner package imports lightweight | Corretivo crítico — resolve imports pesados no `qwenpaw.app.runner` que puxavam toda a stack; facilita testes e ambientes parciais |
| [#4444](https://github.com/agentscope-ai/QwenPaw/pull/4444) | feat(providers): add xAI OAuth + Grok provider + image/video tool plugins | Expansão significativa — integra Grok via OAuth PKCE, adiciona plugins de imagem/vídeo |
| [#4443](https://github.com/agentscope-ai/QwenPaw/pull/4443) | feat: add lightweight goal mode | Nova capacidade — `/goal` com status/pause/resume/clear, injetado em turns normais sem mudar fluxo principal |
| [#4084](https://github.com/agentscope-ai/QwenPaw/pull/4084) | fix(crons): eliminate concurrency state leaks in CronManager | Corretivo de concorrência — elimina vazamento de estado entre runs paralelas, jobs deletados e ciclos start/stop |
| [#4223](https://github.com/agentscope-ai/QwenPaw/pull/4223) | fix(cron): implement soft delete to prevent zombie session resurrection | Resolve #4162 — impede que Crons carreguem sessões deletadas (zombie sessions) |

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento

| # | Título | Comentários | Reações | Tema |
|---|--------|-------------|---------|------|
| [#4448](https://github.com/agentscope-ai/QwenPaw/issues/4448) | [Bug] Context compaction fails (missing ## header) | 2 | 0 | Estabilidade |
| [#4450](https://github.com/agentscope-ai/QwenPaw/issues/4450) | Simplify approval commands: short aliases + session/always scopes | 1 | 0 | UX/Feature |
| [#4451](https://github.com/agentscope-ai/QwenPaw/issues/4451) | Interactive approval buttons for Telegram/QQ channels | 1 | 0 | UX/Channel |
| [#4449](https://agentscope-ai/QwenPaw/issues/4449) | [Bug] Model 429 Rate-Limit → zero-downtime reload clears message queue | 1 | 0 | **Crítico** |

### Análise dos temas dominantes

**1. Gestão de contexto (3 issues relacionadas):**
- Context compaction com falhas de parsing (#4448, #4447 — duplicados)
- Contador de turns para gerenciar context length (#4435)
- Split de sessão para evitar desperdício de tokens (#4436)
- Deleção seletiva de mensagens (#4437)

Padrão: **usuários enfrentam problemas de janela de contexto crescente**, tanto por bugs quanto por falta de ferramentas de controle. Isso é consistente com sistemas baseados em LLM que acumulam histórico.

**2. Expansão de canais (Telegram/QQ):**
- Botões interativos de aprovação (#4451) — unificar experiência com WebUI
- Confirmação instantânea em QQ (#3246 merged)

Padrão: **paridade de features entre canais** é demandada. QQ é o canal mais negligenciado (sem typing indicators nativos).

**3. Aprovações e comandos:**
- Aliases curtos para `/approve`/`/deny` (#4450)
- Botões interativos para approvals (#4451)

Padrão: **fricção de UX em workflows de aprovação** — usuários querem clicks, não digitação.

---

## 5. Bugs e Estabilidade

### 🟥 Crítico (Impacto em produção)

| # | Severidade | Título | Descrição |
|---|------------|--------|-----------|
| [#4449](https://github.com/agentscope-ai/QwenPaw/issues/4449) | **Crítica** | Rate-Limit 429 → zero-downtime reload esvazia queue | Quando um modelo recebe HTTP 429, o `zero_downtime_reload` destrói instâncias antigas e `UnifiedQueueManager.stop()` limpa **todos** os mensajes pendentes. Resultado: agente "congela" permanentemente para o usuário. Não é específico de um modelo — qualquer modelo pode causar o problema. |

### 🟧 Alto (Degradam funcionalidade)

| # | Severidade | Título | Descrição |
|---|------------|--------|-----------|
| [#4448](https://github.com/agentscope-ai/QwenPaw/issues/4448) | **Alta** | Context compaction fails (missing ## header) | Falha recorrente durante conversas longas. Afeta o Core/Backend. Aparece também em #4447 (possível duplicata). |
| [#4447](https://github.com/agentscope-ai/QwenPaw/issues/4447) | **Alta** | [Bug] Context compaction same error | Mesmo erro de parsing em compaction. Duplicata de #4448 — **sugere uma causa raiz única**. |

### Análise

- **2 bugs duplicados** de context compaction indicam problema de parsing de markdown (`## header`) no módulo de compactação
- **Bug de rate-limit** (#4449) é sistêmico: afeta a resiliência do sistema em cenários de sobrecarga de API, que são comuns em ambientes de produção
- **Nenhum bug foi fechado** nas últimas 24h — backlog de triagem está crescendo

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features propostas (11 issues abertas)

| # | Categoria | Título | Resumo |
|---|-----------|--------|--------|
| [#4450](https://github.com/agentscope-ai/QwenPaw/issues/4450) | UX | Simplify approval commands + scopes | Aliases (`/approve`, `/deny`) já existem em v1.1.7 mas não estão documentados; adicionar `/session`, `/always`, `/reset` |
| [#4451](https://github.com/agentscope-ai/QwenPaw/issues/4451) | UX/Channel | Interactive buttons for Telegram/QQ | Substituir prompts de texto por Inline Keyboards (Telegram) e cards (QQ) para approvals e múltipla escolha |
| [#4442](https://github.com/agentscope-ai/QwenPaw/issues/4442) | Feature | Add lightweight `/goal` mode | Modo leve para objetivos de sessão (diferente de `/mission`), mantém caminho normal e safeguards |
| [#4437](https://github.com/agentscope-ai/QwenPaw/issues/4437) | UX/Console | Delete individual messages in conversation | Permitir remoção de mensagens específicas sem limpar sessão inteira |
| [#4435](https://github.com/agentscope-ai/QwenPaw/issues/4435) | UX/Console | Display conversation turn count | Mostrar contador de turns + estimativa de tokens no chat UI |
| [#4436](https://github.com/agentscope-ai/QwenPaw/issues/4436) | UX/Console | Split part of conversation to new session | Transferir mensagens selecionadas para nova sessão |
| [#4441](https://github.com/agentscope-ai/QwenPaw/issues/4441) | Provider | One-click config for OpenCode/Go models | Configuração simplificada de novos providers |
| [#4439](https://github.com/agentscope-ai/QwenPaw/issues/4439) | Architecture | Plugin system for external memory (e.g., Hindsight) | Integração de sistemas de memória externos como plugins |
| [#4445](https://github.com/agentscope-ai/QwenPaw/issues/4445) | Architecture | Decouple runner package imports | Imports pesados bloqueiam testes e desenvolvimento parcial |

### Sinais de roadmap

1. **UX de conversa está amadurecendo** — todas as 3 features de gerenciamento de sessão (#4437, #4435, #4436) estão no Console (frontend), sinalizando investimento na interface web
2. **Paridade de canais é prioritária** — Telegram e QQ estão sendo elevados para atingir nível do WebUI
3. **Expansão de providers** — Grok/xAI (#4444) + OpenCode (#4441) mostram estratégia de diversificação de modelos
4. **Arquitetura modular** — PRs #4445, #4446 indicam foco em reduzir acoplamento para facilitar contribuições

---

## 7. Resumo de Feedback dos Usuários

### Dores reais identificadas

**1. Congelamento do agente (crítico)**
> *"Agent表現'冻结' — 永远在等待，无回复"*
- Quando o modelo recebe 429, o sistema não se recupera — limpa a fila e o usuário fica sem resposta
- Cenário: agentes de longa duração com múltiplos usuários simultâneos
- Impacto: perda de confiança no sistema de resiliência

**2. Context compaction não funciona**
- Usuários de conversas longas (v1.1.7) enfrentam falhas consistentes
- Erro de parsing indica que a compactação não consegue processar o formato de mensagens
- Impacto: estouro de contexto + elevação de custos de API

**3. Usuários não sabem usar comandos existentes**
> *"`/approve` 和 `/deny` 短命令已在 v1.1.7 中实现，但帮助文本和审批提示中未提及，用户不知道"*
- Feature exists but is invisible — problema de discovery
- Impacto: fricção desnecessária em workflows de aprovação

**4. QQ tem UX inferior**
- Sem typing indicators, prompts em texto puro
- Usuários precisam digitar comandos manualmente
- Impacto: experiência fragmentada entre canais

### Comentário positivo

- **First-time contributors ativos** — 3 PRs com label `first-time-contributor` em revisão, indicando crescimento da comunidade (system tray Windows, World Cup skill, system tray feature)

---

## 8. Backlog que Merece Atenção

### Issues sem resposta há >1 dia (todas criadas em 2026-05-16, 1 dia atrás)

| # | Tempo | Título | Status |
|---|-------|--------|--------|
| [#4449](https://github.com/agentscope-ai/QwenPaw/issues/4449) | ~1 dia | [BUG] Model 429 → zero-downtime reload clears queue | **Sem resposta — PRIORIDADE** |
| [#4448](https://github.com/agentscope-ai/QwenPaw/issues/4448) | ~1 dia | [Bug] Context compaction fails (missing ## header) | 2 comentários, precisa triagem |
| [#4447](https://github.com/agentscope-ai/QwenPaw/issues/4447) | ~1 dia | [Bug] Context compaction same error | Provável duplicata de #4448 |
| [#4441](https://github.com/agentscope-ai/QwenPaw/issues/4441) | ~1 dia | One-click config for OpenCode/Go | Pergunta sem resposta |

### PRs aguardando review há mais tempo

| # | Idade | Título | Status |
|---|-------|--------|--------|
| [#4041](https://github.com/agentscope-ai/QwenPaw/pull/4041) | ~12 dias | feat(cli-desktop): system tray startup item (win32 only) | `first-time-contributor`, Under Review |
| [#4084](https://github.com/agentscope-ai/QwenPaw/pull/4084) | ~10 dias | fix(crons): eliminate concurrency state leaks | Crítico para estabilidade |
| [#4223](https://github.com/agentscope-ai/QwenPaw/pull/4223) | ~6 dias | fix(cron): soft delete to prevent zombie sessions | Resolve #4162 |
| [#4407](https://github.com/agentscope-ai/QwenPaw/pull/4407) | ~3 dias | feat(skills): add worldcup match companion skill | `first-time-contributor` |

### Recomendações de triagem

1. **#4449** — Estabelecer Owner e comunicar workaround temporário (desabilitar zero-downtime-reload? timeout maior?)
2. **#4448/#4447** — Confirmar se são duplicatas; se sim, fechar uma e priorizar fix da causa raiz
3. **#4041, #4084, #4223** — PRs maduros (+6 dias) merecem review rápido ou feedback de bloqueios
4. **#4407** — World Cup skill parece pronto; verificar se testes passam e merge

---

## Métricas Resumidas (24h)

| Indicador | Valor |
|-----------|-------|
| Issues abertas/ativas | 12 |
| PRs abertos | 12 |
| PRs merged/fechados | 2 |
| Releases | 0 |
| Bugs críticos | 1 (#4449) |
| Bugs altos | 2 (#4448, #4447) |
| Features propostas | 9 |
| PRs first-time contributors | 3 (em revisão) |
| Tempo médio sem resposta | ~1 dia |

**Saúde geral:** 🔴 **Atenção necessária** — bugs críticos sem resposta, backlog crescente, nenhum release para consolidar trabalho acumulado.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-05-17

---

## 1. Panorama do Dia

O ecossistema ZeroClaw demonstra **atividade excepcionalmente alta** nas últimas 24 horas, com 50 issues e 50 PRs atualizados em um único dia — indicando uma sprint de desenvolvimento intensa. A distribuição de issues abertas (45) versus fechadas (5) sugere que a equipe está mais focada em receber contribuições do que em encerrar itens, enquanto nos PRs há 11 merged/fechados, sinalizando que o fluxo de integração está saudável. Três bugs críticos com potencial de crash ou regressão severa foram reportados no período, evidenciando que a base de usuários está expandindo e encontrando edge cases em produção. A ausência de releases novas pode ser um indicador de que a equipe está acumulando mudanças para um próximo milestone coordenado.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24 horas.**

O projeto não emitiu novas versões desde o último relatório. O último release observado упоминается na documentação como `v0.7.4` (reportado em #6659). Não há notas de migração ou breaking changes a documentar neste período.

---

## 3. Progresso do Projeto

As seguintes PRs foram **merged/fechadas** nas últimas 24 horas, representando avanço concreto:

- **#6553** — `fix(observability): restore broken SSE /logs stream; add build-stamped version and health pulse` (CLOSED)
  - Restaura o stream SSE de logs que estava quebrado, adiciona versão com build stamp e health pulse para deployments remote/Docker
  - Resolvedor: WareWolf-MoonWall | Tamanho: L | Severidade: High
  - [Link ao PR #6553](https://github.com/zeroclaw-labs/zeroclaw/pull/6553)

- **#6711** — `fix(service): use literal XML quotes in launchd plist template` (CLOSED)
  - Corrige template launchd no macOS que gerava aspas XML escapadas incorretamente, impedindo instalação via `install_macos`
  - Resolvedor: ozzyfly | Tamanho: XS
  - [Link ao PR #6711](https://github.com/zeroclaw-labs/zeroclaw/pull/6711)

- **#6690** — `fix(daemon): stop retrying gateway component on AddrInUse` (CLOSED)
  - Elimina loop infinito de retry quando gateway falha com AddrInUse, evitando flood de logs
  - Resolvedor: ozzyfly | Tamanho: XS
  - [Link ao PR #6690](https://github.com/zeroclaw-labs/zeroclaw/pull/6690)

**PRs abertos de destaque em progresso:**

- **#6710** — `[desktop] support for windows and linux for desktop app`
  - Expande suporte Tauri para Windows e Linux, incluindo modelo de permissões no Linux (Wayland/X11 + portal readiness)
  - Autor: Project516 | Tamanho: L | Alto risco
  - [Link ao PR #6710](https://github.com/zeroclaw-labs/zeroclaw/pull/6710)

- **#6700** — `feat(gateway): Add skills management API with enable/disable toggle and web dashboard`
  - Adiciona APIs de gerenciamento de skills e dashboard web para toggle
  - Autor: ilteoood | Tamanho: L | Alto risco
  - [Link ao PR #6700](https://github.com/zeroclaw-labs/zeroclaw/pull/6700)

- **#6693** — `feat(memory): add dream mode for periodic memory consolidation`
  - Introduce "Dream Mode" para consolidação periódica de memórias em insights core durante períodos de idle
  - Autor: JordanTheJet | Tamanho: L | Core, agent, config, daemon, runtime
  - [Link ao PR #6693](https://github.com/zeroclaw-labs/zeroclaw/pull/6693)

- **#6667** — `feat(skills): background review fork + skill_manage tool`
  - Fecha gap de integração do `SkillImprover` shipped em #4619, adiciona caller para `skill_improvement.enabled` ter efeito em runtime
  - Autor: JordanTheJet | Docs, agent, config, runtime, skills
  - [Link ao PR #6667](https://github.com/zeroclaw-labs/zeroclaw/pull/6667)

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários + reações):

| Issue | Tipo | Comentários | 👍 | Tema |
|-------|------|-------------|----|------|
| [#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) | Bug (CLOSED) | 18 | 0 | default_model issue on fresh install |
| [#2467](https://github.com/zeroclaw-labs/zeroclaw/issues/2467) | Enhancement (OPEN) | 5 | 0 | Webhook transforms |
| [#5601](https://github.com/zeroclaw-labs/zeroclaw/issues/5601) | Enhancement (OPEN) | 5 | 1 | OAuth para Ollama Cloud, z.ai, Kimi, MiniMax |
| [#6269](https://github.com/zeroclaw-labs/zeroclaw/issues/6269) | Bug (OPEN) | 4 | 0 | Context compressor drop reasoning_content |
| [#6127](https://github.com/zeroclaw-labs/zeroclaw/issues/6127) | Enhancement (OPEN) | 4 | 0 | gateway silent-fallback hardening |
| [#5882](https://github.com/zeroclaw-labs/zeroclaw/issues/5882) | Enhancement (OPEN) | 1 | 1 | Ratatui-based agent mode REPL |

**Análise dos temas quentes:**

A issue #6123 (default_model em fresh install) dominou a讨论 com 18 comentários antes de ser fechada, indicando que o onboarding continua sendo um ponto de dor significativo para novos usuários — especialmente em setups com LXC e Ollama remoto. A demanda por webhooks mais flexíveis (#2467, #3542 — ambas fechadas com implementação similar) revela que usuários profissionais querem integrar ZeroClaw em pipelines de automação e CI/CD. A ausência de OAuth nativo para provedores populares (#5601) é um entrave para adoção empresarial, pois gerenciar chaves API estáticas é operacionalmente custoso. O interesse pela REPL baseada em Ratatui (#5882) com 1 upvote demonstra que a experiência em terminal é valorizada pela comunidade de desenvolvedores.

---

## 5. Bugs e Estabilidade

### Bugs de alta severidade reportados nas últimas 24h:

**P1 — S1/S2 (workflow blocked / degraded behavior):**

- **#6269** — Context compressor drops `reasoning_content` from compressed assistant messages
  - Severidade: High | Provider: DeepSeek | Status: in-progress
  - Perda de `reasoning_content` em conversas longas pode quebrar modelos que dependem de chain-of-thought
  - [Link ao issue #6269](https://github.com/zeroclaw-labs/zeroclaw/issues/6269)

- **#6683** — `skill_manage patch` ignores cooldown — unbounded patches per skill
  - Severidade: High | Status: in-progress
  - Rate limit do SkillImprover não é respeitado, permitindo patches ilimitados
  - [Link ao issue #6683](https://github.com/zeroclaw-labs/zeroclaw/issues/6683)

- **#6173** — `model_switch` tool does not persist across turns; gateway/UI path ignored
  - Severidade: P1 | Status: blocked, needs-maintainer-review, accepted
  - Alternância de modelo não persiste entre turns, quebras de UX críticas
  - [Link ao issue #6173](https://github.com/zeroclaw-labs/zeroclaw/issues/6173)

**P2 — Bugs diversos:**

- **#6721** — `tool_search` not in `default_auto_approve` → deferred_loading+webhook hangs 120s
  - Severidade: High | Status: OPEN (0 comentários)
  - MCP deferred_loading + webhook sem interactive client causa timeout silencioso
  - [Link ao issue #6721](https://github.com/zeroclaw-labs/zeroclaw/issues/6721)

- **#6724** — Channels supervisor crashloops when all configured channels have `enabled=false`
  - Severidade: High | Status: OPEN (0 comentários)
  - Crash loop a cada ~2 segundos quando canais estão configurados mas desabilitados
  - [Link ao issue #6724](https://github.com/zeroclaw-labs/zeroclaw/issues/6724)

- **#6723** — Native OpenAI provider hardcodes 120s request timeout, ignores `timeout_secs` config
  - Severidade: High | Status: OPEN (0 comentários)
  - Only `OpenAiCompatibleProvider` respeita config; usuários de OpenAI nativo ficam presos a 120s
  - [Link ao issue #6723](https://github.com/zeroclaw-labs/zeroclaw/issues/6723)

**Bugs resolvidos/contornados recentemente:**

- **#6123** (CLOSED) — default_model issue | 18 comentários
- **#6399** (CLOSED) — Custom remote provider image paths | 4 comentários
- **#6659** (CLOSED) — No API for pushing notifications | 3 comentários
- **#6132** (CLOSED) — audit follow-up para skill prompts | 2 comentários

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features com maior potencial para próxima versão:

**Prioridade P1 — Em tracking para v0.7.6:**

- **#6253** — Track: zeroclaw skills support and UX (v0.7.6)
  - Coordenador de release theme para v0.7.6 focado em `zeroclaw skills`
  - Community input encouraged
  - [Link ao issue #6253](https://github.com/zeroclaw-labs/zeroclaw/issues/6253)

**Prioridade P2 — Enhancement pipeline:**

- **#5601** — Add subscription-native OAuth for Ollama Cloud, z.ai, Kimi, MiniMax
  - Status: blocked, needs-maintainer-review
  - Habilitaria autenticação sem gerenciar API keys estáticas para provedores populares
  - [Link ao issue #5601](https://github.com/zeroclaw-labs/zeroclaw/issues/5601)

- **#5607** — Add pre-hook skip gates for cron jobs and SOP triggers
  - Gate condicional para cron jobs (exit 0 → proceed, exit 10 → skip cleanly)
  - Status: blocked, needs-maintainer-review
  - [Link ao issue #5607](https://github.com/zeroclaw-labs/zeroclaw/issues/5607)

- **#5745** — PDF support in tools
  - Habilitaria agentes a ingerir e compartilhar dados de PDFs
  - Status: blocked, needs-maintainer-review
  - [Link ao issue #5745](https://github.com/zeroclaw-labs/zeroclaw/issues/5745)

- **#5907** — LSP support
  - Language Server Protocol para reduzir hallucinação em code agents
  - Status: blocked, needs-maintainer-review
  - [Link ao issue #5907](https://github.com/zeroclaw-labs/zeroclaw/issues/5907)

- **#5843** — Model-wise reasoning configuration
  - Separar `reasoning_enabled` e `reasoning_effort` de `[runtime]` para `[providers.models.<name>]`
  - Status: blocked, needs-maintainer-review
  - [Link ao issue #5843](https://github.com/zeroclaw-labs/zeroclaw/issues/5843)

- **#5882** — Ratatui-based agent mode REPL
  - REPL mais interativa similar a Claude Code ou Codex
  - Status: blocked, needs-maintainer-review
  - [Link ao issue #5882](https://github.com/zeroclaw-labs/zeroclaw/issues/5882)

- **#5775** — Per-skill security permissions (scoped `allow_scripts` e `allowed_commands`)
  - Currently global; scoped permissions melhorariam isolamento de skills
  - Status: blocked, needs-maintainer-review
  - [Link ao issue #5775](https://github.com/zeroclaw-labs/zeroclaw/issues/5775)

**Sinais de evolução arquitetural:**

- **#6165** — "prefer lighter ZeroClaw" — reduzir código dedicado para tools que podem ser implementadas via skills
  - Indica tendência de arquitetura mais modular e extensível via skill system
  - [Link ao issue #6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165)

- **#6074** — Audit: track 153 commits lost in bulk revert (c3ff635)
  - Recovery work em andamento; `--log-llm` restaurado em #6709
  - [Link ao issue #6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074)

---

## 7. Resumo de Feedback dos Usuários

### Dores reais identificadas:

| Dor | Issue | Severidade | Cenário |
|-----|-------|------------|---------|
| Onboarding quebrado em fresh install | #6123 | High | LXC + Ollama remoto; default_model não reconhecido |
| Contexto explode em conversas

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*