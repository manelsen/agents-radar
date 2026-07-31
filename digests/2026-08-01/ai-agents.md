# Resumo diário do ecossistema de agentes de IA 2026-08-01

> Issues: 0 | PRs: 1 | Projetos cobertos: 7 | Gerado em: 2026-07-31 20:58 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório do Projeto NullClaw — 2026-08-01

---

## 1. Panorama do Dia

O projeto **NullClaw** apresenta **baixa atividade nas últimas 24 horas**, sem abertura ou fechamento de issues e sem novos lançamentos. Apenas **1 pull request** foi atualizado no período, referente à adição de um novo provider para CLI do Grok (xAI). O repositório encontra-se em um estado de **manutenção estável**, sem reportes de bugs ou instabilidade, embora o volume de contribuições esteja aquém do pico histórico. A equipe de desenvolvimento continua focada em expandir a compatibilidade com provedores de IA externos.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24 horas.**

O projeto não emitiu novas versões desde o período anterior. Para informações sobre releases anteriores, recomenda-se consultar a [página de releases](https://github.com/nullclaw/nullclaw/releases) do repositório.

---

## 3. Progresso do Projeto

### PRs em Andamento (24h)

| # | Título | Status | Autor | Link |
|---|--------|--------|-------|------|
| #981 | feat(provider): add grok-cli provider for xAI Grok CLI | **ABERTA** | @valonmulolli | [Ver PR](https://github.com/nullclaw/nullclaw/pull/981) |

**Análise:**
O PR #981 propõe a adição de um novo provider `grok-cli` que delega requisições ao CLI local `grok` da xAI, seguindo o padrão **spawn-per-request** já utilizado pelos providers existentes (`codex-cli`, `gemini-cli`, `claude-cli`). O provider é classificado como **opcional**, exigindo que o binário `grok` esteja instalado e autenticado no ambiente do usuário.

**Impacto potencial:**
- Amplia a cobertura de provedores de IA no ecossistema NullClaw
- Mantém consistência arquitetural com providers similares
- Baixo risco de breaking changes por ser opcional

---

## 4. Temas Quentes da Comunidade

**Nenhuma issue ou PR com atividade significativa de comentários/reações registrada nas últimas 24 horas.**

O PR #981 apresenta **0 reações (👍)** e **comentários indefinidos**, sugerindo que a comunidade ainda não engajou ativamente na discussão. Este cenário pode indicar:
- Início recente da proposta (29/07/2026)
- Ausência de críticas ou objeções imediatas
- Necessidade de maior divulgação por parte do autor

---

## 5. Bugs e Estabilidade

**Nenhum bug reportado nas últimas 24 horas.**

O projeto demonstra **saúde estável** no que diz respeito a problemas técnicos. Não há issues abertas relacionadas a crashes, regressões ou comportamentos inesperados. A base de código permanece funcional para os providers atualmente suportados.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Destaque: Adição do Provider Grok-CLI (PR #981)

A contribuição mais significativa do período é a **proposta de integração com xAI Grok via CLI**. Este pedido sinaliza:

| Aspecto | Indicação |
|---------|-----------|
| **Expansão de ecossistema** | NullClaw busca cobrir múltiplos provedores de IA |
| **Padronização** | Segue arquitetura existente (spawn-per-request) |
| **Opcionalidade** | Não quebra funcionalidades existentes |

**Sinais de roadmap:**
- A equipe parece priorizar a **paridade de features** entre providers
- O padrão CLI-based demonstra interesse em **soluções leves e local-first**

---

## 7. Resumo de Feedback dos Usuários

**Dados limitados disponíveis no período.**

Com 0 issues fechadas e 0 issues abertas nas últimas 24h, não há feedback explícito de usuários para análise. O único dado disponível é o PR #981, cujo resumo indica:

> *"grok-cli is an **optional** provider: it requires the `grok` CLI to be installed and authenticated..."*

**Interpretação:** A abordagem opcional sugere que a equipe considera importantes a **não-intrusividade** e a **liberdade de escolha do usuário** quanto aos provedores.

---

## 8. Backlog que Merece Atenção

### Items sem atividade recente

| Tipo | Total | Observação |
|------|-------|------------|
| Issues abertas | 0 | Nenhuma pendente |
| PRs abertas | 1 | PR #981 em revisão |

**Prioridade de atenção:**

1. **PR #981 — grok-cli provider** ⏳ Aguardando revisão
   - Status: Aberto há ~3 dias
   - Ação recomendada: Revisão e feedback da comunidade/maintainers
   - Link: [nullclaw/nullclaw#981](https://github.com/nullclaw/nullclaw/pull/981)

---

## Métricas Consolidada (24h)

| Indicador | Valor | Status |
|-----------|-------|--------|
| Issues abertas/ativas | 0 | 🟢 Estável |
| Issues fechadas | 0 | — |
| PRs abertas | 1 | 🟡 Em progresso |
| PRs merged/fechadas | 0 | — |
| Releases | 0 | 🟢 Nenhuma nova |
| Bugs reportados | 0 | 🟢 Estável |

---

## Conclusão

NullClaw mantém um **patamar operacional estável** em 2026-08-01. A principal atividade concentrou-se no **PR #981**, que busca adicionar suporte ao provider Grok-CLI da xAI. Não há sinais de instabilidade, bugs críticos ou demandas urgentes da comunidade. A atenção deve voltar-se à **revisão e eventual merge** do PR em aberto, caso aprovado pelos maintainers.

---

*Relatório gerado automaticamente com base nos dados públicos do GitHub de [nullclaw/nullclaw](https://github.com/nullclaw/nullclaw).*

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo — Ecossistema de Agentes de IA Open Source

**Data de referência:** 2026-08-01  
**Fontes:** GitHub Activity Reports de cada projeto

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **dois padrões distintos de maturidade** em 2026-08-01. De um lado, NullClaw e PicoClaw operam em modo de manutenção estável com volume baixo de atividade, focando em compatibilidade e pequenos ajustes. Do outro, cinco projetos — NanoBot, Hermes Agent, IronClaw, CoPaw e ZeroClaw — demonstram intensa atividade de desenvolvimento com dezenas de issues e PRs por dia, indicando ciclos de desenvolvimento acelerados e comunidades engajadas.

A **segurança emerge como tema transversal**: três projetos (Hermes Agent, IronClaw, ZeroClaw) lidam com vulnerabilidades críticas de isolamento multi-tenant ou path traversal em um único período. Simultaneamente, observa-se consolidação arquitetural — múltiplos projetos investem em refatorações de storage (JSONL→SQLite, memory stacks) e sistemas de contexto, sugerindo uma fase de amadurecimento pós-MVP.

A **fragmentação de canais de comunicação** (WhatsApp, Weixin, Telegram, Slack, Discord, Feishu, IRC, DeltaChat) gera superfície de bugs diversificada, com cada integração apresentando edge cases únicos. Este padrão indica que a interoperabilidade com mensageiros é commoditizada, enquanto a diferenciação desloca-se para reliability, segurança e UX.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | Merges | Releases | Avaliação de Saúde |
|---------|-------------|-----------|--------|----------|-------------------|
| **NullClaw** | 0 | 1 | 0 | 0 | 🟢 Estável — modo manutenção |
| **NanoBot** | 5 | 17 | 7 | 0 | 🟡 Moderada — alta produtividade com gaps de triagem |
| **Hermes Agent** | 50 | 50 | N/D | 1 (v0.19.1) | 🟡 Moderada — bugs cross-platform críticos |
| **PicoClaw** | 2 | 3 | 0 | 0 | 🟡 Moderada — ritmo consistente |
| **IronClaw** | 29 | 50 | 10+ | 0 | 🟡 Moderada — rearquitetura ativa (Reborn) |
| **CoPaw** | 20 | 41 | 13 | 0 | 🟡 Moderada — alta capacidade de resposta |
| **ZeroClaw** | 20 | 50 | N/D | 0 | 🔴 Atenção — vulnerabilidade S0 em progresso |

**Observações:**

- **ZeroClaw, Hermes Agent e IronClaw** lideram em volume absoluto de atividade (50 PRs/24h), indicando equipes maiores ou comunidades mais ativas.
- **NullClaw** apresenta o menor volume, consistente com estratégia de manutenção de codebase estável.
- **NanoBot e CoPaw** destacam-se pela taxa de resolução: ambos fecharam >7 PRs em 24h, demonstrando capacidade de review eficiente.

---

## 3. Posicionamento do Projeto Principal

### Hermes Agent (NousResearch)

**Vantagens técnicas:**
- Maior volume de atividade documentado (50/50), indicando equipe de desenvolvimento robusta
- Ciclo de releases disciplinado (v0.19.1 consolidou 1.000+ PRs)
- Foco em segurança demonstrado por múltiplos PRs de vulnerabilidades em 24h

**Desvantagens:**
- 4 issues P1/P2 específicas do Windows — plataforma mais problemática
- Regressões persistentes (Desktop v0.19.0 removeu status indicators, issue #73211)
- Breaking change documentada (locale `es.ts` removido)

### NanoBot (HKUDS)

**Vantagens técnicas:**
- Migration arquitetural concluída (JSONL→SQLite) em 24h — velocidade notável
- Cobertura multi-canal líder (WhatsApp, Weixin, Slack, Termux, Windows)
- PR #5197 adiciona DeepSeek Responses API — diversificação de providers

**Desvantagens:**
- 3 bugs críticos sem triagem (>4 dias), especialmente WhatsApp audio
- PRs em conflito há 4-5 meses sem resolução (#1656, #1565, #1319)
- Sem releases — pipeline interrompido

### ZeroClaw

**Vantagens técnicas:**
- Tema de segurança mais urgente: vulnerabilidade S0 em webhook handlers (#9565)
- RFCs maduros com alto engajamento (13 comentários em #9048)
- Foco em interoperabilidade (A2A outbound, OpenAI compatibility) — diferenciação estratégica

**Desvantagens:**
- 3 bugs de segurança simultâneos em andamento
- 7 PRs de XL size aguardando review (Hindsight memory stack)
- Target de release v0.8.4 atrasado

---

## 4. Focos Técnicos Compartilhados

### 4.1 Segurança Multi-Tenant

Três projetos enfrentam vulnerabilidades de isolamento:

| Projeto | Vulnerabilidade | Severidade | Status |
|---------|-----------------|------------|--------|
| IronClaw | Cross-user memory leak (#6900) | **P0** | Aberta |
| IronClaw | Hosted-MCP metadata exposure (#6778) | **P1** | Aberta |
| Hermes Agent | Path traversal em manifest (#75494) | **SEC** | Corrigida |
| ZeroClaw | Webhook handlers sem fail-closed (#9565) | **S0** | In-progress |
| IronClaw | Home directory compartilhado (#6866) | P2 | Aberta |

**Implicação:** O padrão multi-tenant引入 vulnerabilidades estruturais quando runtimes de agente compartilham canais ou arquivos. Auditorias de isolamento tornam-se requisitos de produção.

### 4.2 Storage e Persistência

Três projetos refatoraram sistemas de armazenamento simultaneamente:

- **NanoBot:** JSONL → SQLite (PR #5173) — transacional, melhor pruning
- **ZeroClaw:** Hindsight memory stack (7 PRs) — backend HTTP nativo, tiers de memória
- **CoPaw:** Convergência Native/Scroll context (PR #6611) — unificação de protocolos

**Implicação:** A comunidade converge para abordagens transacionais e hierárquicas de memória/sessão, abandonando formatos flat como JSONL.

### 4.3 Compatibilidade de Providers e Modelos

| Projeto | Provider/PR | Relevância |
|---------|-------------|------------|
| NullClaw | Grok-CLI provider (#981) | CLI-based, opcional |
| NanoBot | DeepSeek Responses API (#5197) | Expansão de API |
| CoPaw | NVIDIA NIM provider (#6526) | Diversificação enterprise |
| Hermes Agent | Bug de roteamento Anthropic (#75613) | /chat/completions vs API nativa |
| ZeroClaw | OpenAI Chat Completions adapter (#8603) | RFC com 8 comentários |

**Implicação:** A fragmentação de APIs de provedores cria demanda por adapters e abstraction layers. RFCs com alto engajamento indicam que padronização de interfaces é necessidade comum.

### 4.4 UX Desktop e Multi-Plataforma

Problemas cross-platform aparecem em todos os projetos maiores:

- **Hermes Agent:** Windows update loop, desktop status indicators removidos, Linux .desktop launcher quebrado
- **CoPaw:** Desktop workspace access, shell output freeze, UI freezes
- **IronClaw:** Linux service install, instance deletion stuck
- **NanoBot:** Termux timezone, Windows MIME type
- **PicoClaw:** CPU usage no Firefox web

**Implicação:** A expansão para Desktop/WebUI aumenta exponencialmente a superfície de testes. Cada navegador e OS introduz edge cases únicos.

---

## 5. Análise de Diferenciação

### Por Arquitetura

| Projeto | Arquitetura Dominante | Padrão de Provider |
|---------|----------------------|---------------------|
| NullClaw | CLI-first, spawn-per-request | Local CLI executables |
| NanoBot | Multi-canal, SQLite backend | API clients |
| Hermes Agent | Gateway hooks, classifier contextual | API + fallback |
| PicoClaw | IRC-native, simplex channels | CLI + API |
| IronClaw | Reborn WS layers, contracts | Enterprise API |
| CoPaw | AgentScope integration, desktop-centric | AgentScope + API |
| ZeroClaw | Modular Rust, A2A-first | OpenAPI adapter |

### Por Público-Alvo

| Projeto | Público-Alvo | Indicação |
|---------|--------------|-----------|
| NullClaw | Desenvolvedores avançados, CLI enthusiasts | Minimalismo |
| NanoBot | Usuários multiplataforma, multi-mensageiro | Acessibilidade |
| Hermes Agent | Power users, Windows/Linux desktop | Produtividade |
| PicoClaw | Comunidades IRC, desenvolvedores de bots | Protocolos legacy |
| IronClaw | Enterprise, multi-usuário, hosted | Escalabilidade |
| CoPaw | Usuários Windows/Qwen, desktop-first | Consumer desktop |
| ZeroClaw | Desenvolvedores de agentes, integração A2A | Interoperabilidade |

### Diferenciação Estratégica Observada

**1. NanoBot** diferencia-se por **canal density** — suporta mais mensageiros que qualquer concorrente (WhatsApp, Weixin, Slack, Termux, Windows). Esta estratégia captura usuários que já utilizam esses canais.

**2. Hermes Agent** diferencia-se por **gateway hooks e auto-routing** — a proposta #5143 (Multi-Role Auto-Routing com 16 👍) indica que o projeto investe em inteligência de roteamento contextual entre modelos.

**3. ZeroClaw** diferencia-se por **A2A protocol e OpenAI compatibility** — a RFC #9106 (A2A outbound client) e #8603 (OpenAI adapter) posicionam o projeto como hub de interoperabilidade entre agentes.

**4. IronClaw** diferencia-se por **reliability contracts** — o épico #6284 (Error-recoverability endgame com 15 comentários) define um contrato rigoroso de 5 condições para erros mid-run, posicionando o projeto para uso crítico/enterprise.

**5. CoPaw** diferencia-se por **AgentScope integration** — o projeto é o único a investir profundamente na integração com o framework AgentScope, criando lock-in técnico para usuários desse ecossistema.

---

## 6. Tração e Maturidade da Comunidade

### Velocidade de Iteração

| Projeto | PRs Merged/24h | Taxa Fechamento | Velocidade |
|---------|----------------|-----------------|------------|
| **CoPaw** | 13 | 32% | ⭐⭐⭐⭐⭐ Muito Alta |
| **NanoBot** | 7 | ~40% | ⭐⭐⭐⭐ Alta |
| **IronClaw** | 10+ | ~20% | ⭐⭐⭐⭐ Alta |
| **Hermes Agent** | N/D | N/D | ⭐⭐⭐ Moderada |
| **PicoClaw** | 0 | 0% | ⭐⭐ Estagnada |
| **NullClaw** | 0 | 0% | ⭐ Mínimo |
| **ZeroClaw** | N/D | N/D | ⭐⭐⭐ Moderada |

### Maturidade de Processo

| Projeto | RFC Process | Backlog Ativo | Bugs Críticos |
|---------|-------------|---------------|--------------|
| **ZeroClaw** | ✅ Matura (6 RFCs >5 comentários) | ✅ Organizado | 🔴 1 S0 |
| **IronClaw** | ✅ Épicos estruturados | ✅ WS tracking | 🔴 1 P0 |
| **Hermes Agent** | ⚠️ Informal | ⚠️ Parcial | 🟡 3 P1 |
| **NanoBot** | ❌ Ausente | ❌ PRs em conflito | 🟡 2 Alta |
| **CoPaw** | ❌ Ausente | ⚠️ Parcial | 🔴 3 Críticos |
| **PicoClaw** | ❌ Ausente | ❌ Estagnado | 🟢 Nenhum |
| **NullClaw** | ❌ N/A | ❌ N/A | 🟢 Nenhum |

### Patterns de Maturidade

**Consolidação de Qualidade (NullClaw, PicoClaw):** Projetos em modo manutenção com baixa atividade indicam fase de consolidação pós-MVP. Não há pressão de features, foco em estabilidade.

**Iteração Rápida com Dívida Técnica (NanoBot, CoPaw):** Alta velocidade de merges coexiste com PRs em conflito há meses e bugs sem triagem. Indica crescimentoorgânico sem processos maduros de backlog grooming.

**Engenharia Disciplinada (IronClaw, ZeroClaw, Hermes Agent):** Épicos estruturados, RFCs com discussão ativa, e programa de rearquitetura (IronClaw Reborn) indicam maturidade organizacional. Bugs de segurança tratados com urgência apropriada.

---

## 7. Sinais de Tendência

### 7.1 Emergência de Padrões de Memória Hierárquica

**Sinal:** NanoBot (SQLite), ZeroClaw (Hindsight stack), CoPaw (Native/Scroll convergence) investem simultaneamente em storage transacional e tiers de memória.

**Interpretação:** A comunidade reconhece que o padrão JSONL flat de armazenamento de sessão não escala para agentes de longa duração. A tendência é architectures com:
- **Short-term:** Contexto transacional (SQLite)
- **Long-term:** Memória curada separada do histórico de conversa
- **Recall:** Filtros configuráveis por backend

**Implicação:** Projetos que não investirem em memória hierárquicaem 2026-2027届时 perderão competitividade em uso profissional.

---

### 7.2 Isolamento Multi-Tenant como Requisito de Produção

**Sinal:** IronClaw (3 bugs P0-P1 de isolamento), Hermes Agent (path traversal), ZeroClaw (webhook auth) — vulnerabilidades de segurança aparecem em todos os projetos comambientes multi-usuário.

**Interpretação:** À medida que agentes de IA migram de uso pessoal para deployments compartilhados (enterprise, hosted), o isolamento entre sessões e usuários torna-se requirement de segurança, não feature opcional.

**Implicação:** Arquiteturas que tratam isolamento como after-thought enfrentarão vulnerabilidades estruturais. Auditorias de segurança e gates de CI específicos para path traversal e state leakage tornam-se necessários.

---

### 7.3 Desktop App como Superfície Crítica de UX

**Sinal:** Hermes Agent (status indicators removidos), CoPaw (workspace access, shell freeze), IronClaw (admin deletion stuck), PicoClaw (CPU usage no Firefox) — problemas de desktop/WebUI dominam issues de usuário.

**Interpretação:** A promessa de "agente desktop all-in-one" colide com a realidade de múltiplas plataformas, navegadores e edge cases de rendering. A experiência desktop diferencia-se significativamente de CLI/TUI.

**Implicação:** A qualidade da Desktop app tornar-se-á vetor de diferenciação de usuário final. Bugs de desktop (UI freeze, shell timeout, workspace access) têm impacto direto na percepção de produto.

---

### 7.4 Compatibilidade OpenAI como On-Ramp para Adoção

**Sinal:** ZeroClaw RFC #8603 (OpenAI adapter com 8 comentários), Hermes Agent bug #75613 (Anthropic requests silenciosamente degradadas para /chat/completions), NanoBot PR #5197 (DeepSeek API).

**Interpretação:** A fragmentação de APIs de provedores (Anthropic, OpenAI, Google, DeepSeek, Grok, xAI) cria fricção de integração. A compatibilidade com cliente OpenAI (Open WebUI, LobeChat) funciona como on-ramp para novos usuários.

**Implicação:** Adapters que expõem interfaces OpenAI-compatíveis reduzirão switching costs e ampliarão base de usuários. A tendência é abstração de provider sobre API nativa.

---

### 7.5 A2A Protocol como Infraestrutura de Interoperabilidade

**Sinal:** ZeroClaw RFC #9106 (A2A outbound client), IronClaw PR #6930 (Register hosted MCP servers), NanoBot multi-channel (agentes conectados a múltiplos canais simultaneamente).

**Interpretação:** O ecossistema converge para agentes que orquestram outros agentes. O protocolo A2A (Agent-to-Agent) emerge como padrão para comunicação entre agentes, complementando MCP (Model Context Protocol).

**Implicação:** Projetos que suportarem A2A nativamente terão vantagem em cenários de multi-agente orchestration. A interoperabilidade entre agentes de diferentes fabricantes tornará o ecossistema mais modular.

---

### 7.6 Integração com Mensageiros como Commoditização

**Sinal:** Todos os projetos exceto NullClaw e PicoClaw investem em integrações com WhatsApp, Telegram, Slack, Weixin, Discord, Feishu. Cada projeto implementa seus próprios adapters.

**Interpretação:** A integração com mensageiros populares tornou-se expected feature, não diferenciador. A complexidade moveu-se da conectividade (já resolvida) para reliability (webhook auth, token refresh, audio handling).

**Implicação:** Diferenciação em canais de comunicação virá de reliability (uptime, error recovery) e não de disponibilidade de integrações. Bugs como "WhatsApp audio broken" (#5149 NanoBot) têm impacto desproporcional porque a feature é expected.

---

## 8. Síntese para Decisores

| Dimensão | Líder | Seguidor | Tendência |
|----------|-------|----------|-----------|
| **Velocidade de código** | CoPaw (13 merges/24h) | NanoBot (7 merges/24h) | Comunidades menores iteram mais rápido |
| **Maturidade de processo** | IronClaw, ZeroClaw | NanoBot, CoPaw | RFCs e épicos estruturados |
| **Segurança** | Hermes Agent, ZeroClaw | NanoBot | Vulnerabilidades multi-tenant universais |


---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório de Projeto — NanoBot
## Data: 2026-08-01 | Repositório: [HKUDS/nanobot](https://github.com/HKUDS/nanobot)

---

## 1. Panorama do dia

O NanoBot registrou **alta atividade** em 2026-08-01, com 5 issues atualizadas e 17 PRs no período de 24h. A equipe fez 7 merges/fechamentos de PRs, incluindo uma **migration crítica de storage (JSONL → SQLite)** e correções em canais (Weixin, Slack). Nenhum release foi publicado. A taxa de abertura de PRs (10 abertas) supera o fechamento (7 fechadas), indicando pipeline saudável de contribuições. A distribuição de bugs envolve canais (WhatsApp, Weixin), plataforma (Termux, Windows) e funcionalidades core (sessões, modelo). Três issues abertas aguardam triagem.

---

## 2. Lançamentos

**Nenhum release publicado nas últimas 24h.**

A ausência de releases interrompe um possível ciclo de publicação. Recomenda-se finalizar PRs com prioridade P1 em revisão para um patch release (e.g., `x.y.z`) que consolide:
- Correção de timezone para Termux ([#5189](https://github.com/HKUDS/nanobot/pull/5189))
- Estabilização do CI ([#5145](https://github.com/HKUDS/nanobot/pull/5145))
- Recuperação de estado Weixin ([#5196](https://github.com/HKUDS/nanobot/pull/5196))

---

## 3. Progresso do Projeto

### PRs Merged/Closed (7 total)

| # | PR | Autor | Impacto |
|---|-----|-------|---------|
| [#5173](https://github.com/HKUDS/nanobot/pull/5173) | `feat(session): migrate session storage from JSONL to SQLite` | chengyongru | **Alto** — Transactional migration, SQLite como store único, JSONL como rollback |
| [#5189](https://github.com/HKUDS/nanobot/pull/5189) | `fix(config): install timezone data on all platforms` | shixi-li | **Alto** — `tzdata` como fallback universal, suporte a Termux/minimal Linux |
| [#5145](https://github.com/HKUDS/nanobot/pull/5145) | `fix(ci): stabilize and speed up CI` | chengyongru | **Alto** — Handshake stdin-gated, batch installs, redução de flaky tests |
| [#5196](https://github.com/HKUDS/nanobot/pull/5196) | `fix(weixin): recover refreshed state after session expiry` | chengyongru | **Médio** — Corrige loop de errcode -14 após pause de 60min |
| [#4223](https://github.com/HKUDS/nanobot/pull/4223) | `fix(weixin): reload session state after pause expiry` | DreamShepherd2006 | **Médio** — Idem #5196 (mesmo bug, PR duplicado mergeado) |
| [#5193](https://github.com/HKUDS/nanobot/pull/5193) | `fix(webui): preserve user scroll ownership near tail` | chengyongru | **Médio** — UX de scroll no WebUI |
| [#5192](https://github.com/HKUDS/nanobot/pull/5192) | `fix(slack): scope channel thread openers to their own session` | pblocz | **Médio** — Threads Slack isoladas por sessão |

### Destaque técnico

A migration de JSONL para SQLite ([#5173](https://github.com/HKUDS/nanobot/pull/5173)) é a mudança arquitetural mais significativa do dia. Benefícios esperados:
- Leitura/escrita transacional (integridade de dados)
- Performance em listagem e pruning de sessões
- Redução de I/O em workspaces com muitas sessões

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários/interações)

| # | Título | Tipo | Comentários | Reações | Relevância |
|---|--------|------|-------------|---------|------------|
| [#5149](https://github.com/HKUDS/nanobot/issues/5149) | `[bug] no audio ?` | Bug | 3 | 0 | WhatsApp audio send broken |
| [#5195](https://github.com/HKUDS/nanobot/issues/5195) | `[bug][weixin] Re-scan QR login overwrites token` | Bug | 2 | 0 | Ja corrigido em #5196 |

### Análise

- **WhatsApp audio (#5149)**: Reportado há 3 dias, sem thumbs-up. Bug crítico funcional (não recebe áudio). Nenhum progresso visível — necesita triagem.
- **Model switching (#5198)**: Usuário reporta limitação de UI — não consegue trocar modelo por sessão. Este é um **sinal de roadmap** significativo (ver seção 6).

---

## 5. Bugs e Estabilidade

### Issues Abertas (3)

| # | Severidade | Título | Plataforma | Status |
|---|-----------|--------|------------|--------|
| [#5149](https://github.com/HKUDS/nanobot/issues/5149) | **Alta** | WhatsApp audio send broken | WhatsApp | Sem triagem |
| [#5198](https://github.com/HKUDS/nanobot/issues/5198) | **Alta** | Não é possível trocar modelos por sessão | Core | Reportado hoje |
| [#5190](https://github.com/HKUDS/nanobot/issues/5190) | **Média** | Module script MIME type error | Windows | PR #5191 em aberto |

### Issues Fechadas (2)

| # | Severidade | Título | Resolução |
|---|-----------|--------|-----------|
| [#5187](https://github.com/HKUDS/nanobot/issues/5187) | **Alta** | Não funciona no Termux (timezone) | Corrigido em [#5189](https://github.com/HKUDS/nanobot/pull/5189) |
| [#5195](https://github.com/HKUDS/nanobot/issues/5195) | **Alta** | Weixin token sobreposto após re-scan QR | Corrigido em [#5196](https://github.com/HKUDS/nanobot/pull/5196) |

### Análise de estabilidade

- **Taxa de resolução de bugs**: 2/5 (40%) em 24h — excelente velocidade de response.
- **Bugs críticos abertos**: 2 (WhatsApp audio + model switching) — requieren atenção imediata.
- **Superfície de bugs**: Plataformas diversas (Termux, Windows, WhatsApp, Weixin) indicam necessidade de matrix de testes mais robusta.

---

## 6. Pedidos de Features e Sinais de Roadmap

### PRs Abertos com features

| # | Título | Autor | Prioridade | Sinais |
|---|--------|-------|------------|--------|
| [#5197](https://github.com/HKUDS/nanobot/pull/5197) | `feat(providers): support DeepSeek Responses API` | chengyongru | P1 | Adição de provider,DeepSeek-v4-flash via Responses API |
| [#5184](https://github.com/HKUDS/nanobot/pull/5184) | `feat(webui): add Quick Chat and Temporary Chat` | Re-bin | — | UX de chat efêmero |
| [#5201](https://github.com/HKUDS/nanobot/pull/5201) | `fix(session): tolerate malformed persisted session summary` | KDB-Wind | P1 | Robustez de session store |
| [#5200](https://github.com/HKUDS/nanobot/pull/5200) | `fix(exec): preserve wait targets across response truncation` | KDB-Wind | P1 | Execução de código mais confiável |

### Sinais de roadmap da comunidade

1. **Model switching por sessão (#5198)**: Usuário reporta frustração com modelo fixo. A ausência de `/model` funcional por sessão é um gap de UX competitivo (compara com "Cloud SaaS AIs"). **Potencial feature P1.**
2. **Quick Chat / Temporary Chat (#5184)**: Feature de chat efêmero em revisão — cobre necessidade de conversas descartáveis sem persistência.

### Backlog de features antigas (abertas há meses)

| # | Título | Criado | Sinais |
|---|--------|--------|--------|
| [#1656](https://github.com/HKUDS/nanobot/pull/1656) | `fix(validation): handle None value in string schema validation` | 2026-03-07 | Validação de schemas |
| [#1565](https://github.com/HKUDS/nanobot/pull/1565) | `feat(session): add session export, import, search and stats commands` | 2026-03-05 | Gestão de sessões |
| [#1319](https://github.com/HKUDS/nanobot/pull/1319) | `feat: add skill status command` | 2026-02-28 | Diagnóstico de skills |

Essas 3 PRs estão abertas há 4-5 meses com flag `conflict` — necessidade de rebase/resolução.

---

## 7. Resumo de Feedback dos Usuários

### Dores reportadas

| Dor | Issue | Plataforma | Impacto |
|-----|-------|------------|---------|
| Áudio não enviado | [#5149](https://github.com/HKUDS/nanobot/issues/5149) | WhatsApp | Funcionalidade core quebrada |
| Não funciona em ambiente mobile | [#5187](https://github.com/HKUDS/nanobot/issues/5187) | Termux | Limita adoção em dispositivos não-root |
| Troca de modelo limitada | [#5198](https://github.com/HKUDS/nanobot/issues/5198) | WebUI | UX inferior a concorrência |
| JS modules não carregam | [#5190](https://github.com/HKUDS/nanobot/issues/5190) | Windows | Bloqueia WebUI no Windows |

### Cenários de uso inferidos

- **Uso pessoal multiplataforma**: Termux, Windows, dispositivos mobile — usuários querem rodar em qualquer lugar.
- **Integração com mensageiros**: WhatsApp e Weixin são canais críticos para adoção.
- **Customização por sessão**: Usuários avançados querem trocar modelos dinamicamente.

### Satisfação

A correção rápida de bugs de timezone ([#5189](https://github.com/HKUDS/nanobot/pull/5189)) e Weixin ([#5196](https://github.com/HKUDS/nanobot/pull/5196)) demonstra responsividade. A migration SQLite ([#5173](https://github.com/HKUDS/nanobot/pull/5173)) endereça necessidade de performance em workspaces com muitas sessões.

---

## 8. Backlog que Merece Atenção

### Issues/PRs sem resposta ou estagnadas

| # | Tipo | Título | Criado | Idade | Problema |
|---|------|--------|--------|------|----------|
| [#1656](https://github.com/HKUDS/nanobot/pull/1656) | PR | `fix(validation): handle None value in string schema` | 2026-03-07 | ~146 dias | Com flag `conflict`, sem rebase |
| [#1565](https://github.com/HKUDS/nanobot/pull/5197) | PR | `feat(session): add session export/import/search/stats` | 2026-03-05 | ~148 dias | Com flag `conflict`, feature valiosa estagnada |
| [#1319](https://github.com/HKUDS/nanobot/pull/1319) | PR | `feat: add skill status command` | 2026-02-28 | ~153 dias | Com flag `conflict` |
| [#5149](https://github.com/HKUDS/nanobot/issues/5149) | Issue | `[bug] no audio ?` | 2026-07-28 | ~4 dias | Sem triagem, bug crítico WhatsApp |
| [#5198](https://github.com/HKUDS/nanobot/issues/5198) | Issue | `Can't change models in specific session` | 2026-07-31 | ~1 dia | Sem triagem |

### Recomendações

1. **PRs com `conflict`**: Necessário triage de maintainers para rebase ou close. Feature de export/import de sessões (#1565) é alta valor.
2. **Bug WhatsApp audio (#5149)**: Priorizar triagem — impacto direto em canal popular.
3. **3 PRs P1 abertos** ([#5201](https://github.com/HKUDS/nanobot/pull/5201), [#5200](https://github.com/HKUDS/nanobot/pull/5200), [#5197](https://github.com/HKUDS/nanobot/pull/5197)): KDB-Wind e chengyongru com múltiplos PRs simultâneos — revisar e merge ou feedback rápido.

---

## Indicadores de Saúde do Projeto

| Indicador | Valor | Avaliação |
|-----------|-------|-----------|
| Issues abertas (ativas) | 3 | 🟡 Atenção |
| PRs abertas | 10 | 🟢 Pipeline saudável |
| PRs fechadas (24h) | 7 | 🟢 Alta produtividade |
| Taxa de resolução de bugs | 40% | 🟢 Boa responsividade |
| Releases (24h) | 0 | 🔴 Pipeline interrompido |
| PRs em conflito/estagnados | 3 | 🟡 Requer ação |

**Métrica geral**: Projeto em **saúde moderada** com alta atividade de código, mas com gaps de triagem em bugs críticos e backlog estagnado.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-08-01

---

## 1. Panorama do Dia

O projeto Hermes Agent demonstra **alta atividade** em 31 de julho de 2026, com 50 issues e 50 PRs atualizados nas últimas 24h. O lançamento do **v0.19.1** (v2026.7.30) consolida mais de 1.000 PRs mergeados desde o v0.19.0, sinalizando um ciclo de desenvolvimento intenso. A base de usuários enfrenta problemas críticos relacionados a **regressões no Windows** (update loop, plataforma desktop) e **instabilidade no Telegram/Bedrock**, enquanto a comunidade contribui ativamente com patches de segurança e melhorias de UX. O estado geral é de **saúde moderada** — o projeto está em plena evolução, mas bugs de estabilidade em plataformas principais exigem atenção imediata.

---

## 2. Lançamentos

### v2026.7.30 — Hermes Agent v0.19.1

| Campo | Detalhe |
|-------|---------|
| **Data de release** | 30 de julho de 2026 |
| **Tipo** | Patch release |
| **Consolidação** | ~1.000+ PRs mergeados desde v0.19.0 |
| **Destinatários** | Imagens Docker, deploys hospedados, instalações novas |

**Mudanças incluídas:**
- A release não detalha mudanças individuais — trata-se de um merge release para estabilizar o tag para consumidores downstream.
- Releases anteriores introduziram: refatoração de gateway hooks, novo classificador contextual, mecanismo de recuperação de misroute, e atualização de i18n que **removeu** o locale `es.ts` do desktop app.

**Breaking changes conhecidas:**
- A refatoração de i18n (v0.14.0+) removeu `es.ts`, afetando usuários hispanofalantes no desktop ([#68922](https://github.com/NousResearch/hermes-agent/issues/68922)).

**Notas de migração:**
- Usuários do Hermes Desktop que usam locale espanhol devem aguardar a restauração ([#68922](https://github.com/NousResearch/hermes-agent/pull/68922)) ou usar fallback inglês.
- A release inclui correção para o loop de update no Windows (commits `8c76fe19f80c96c1a462147c447a7666b826dd2` e solução complementar em [#75631](https://github.com/NousResearch/hermes-agent/pull/75631)).

---

## 3. Progresso do Projeto

### PRs importantes merged/fechados hoje

| PR | Autor | Impacto | Link |
|----|-------|---------|------|
| **#75494** (SECURITY) | ygd58 | Corrige path traversal em `distribution_owned` manifest entries — vulnerabilidade que permitia escapar do diretório do usuário via `skills/../../auth.json`. Security boundary fix. | [#75494](https://github.com/NousResearch/hermes-agent/pull/75494) |
| **#75599** | ygd58 | Previne rejeição silenciosa de busy-commands no gateway (Guard 2). Melhora robustez da fila de comandos. | [#75599](https://github.com/NousResearch/hermes-agent/pull/75599) |
| **#75613** | idanshalom2000-gif | Corrige roteamento de requests Anthropic para `/chat/completions` em vez da API nativa — silenciava a API key do console. P1, implementado no main. | [#75613](https://github.com/NousResearch/hermes-agent/pull/75613) |
| **#75640** | kangarooo | Feature: opção para reverter decisão "always/session" de comandos durante execução. | [#75640](https://github.com/NousResearch/hermes-agent/pull/75640) |
| **#75653** | ygd58 | Suplementa #75599 — corrige prefixo do `/goal` busy-command rejection path. | [#75653](https://github.com/NousResearch/hermes-agent/pull/75653) |

### PRs abertos com alto potencial de impacto

| PR | Autor | Componente | Descrição | Link |
|----|-------|------------|-----------|------|
| **#75631** | pipeblade | Desktop/Windows | Wrapper PowerShell opt-in para quebrar o loop de update no Windows — regressão do v0.19.1. | [#75631](https://github.com/NousResearch/hermes-agent/pull/75631) |
| **#75648** | xaviersudre | Plugins | Isola estado runtime de profiles em sessões Desktop/WebUI compartilhadas — problema de isolamento em runtimes de longa duração. | [#75648](https://github.com/NousResearch/hermes-agent/pull/75648) |
| **#66520** | ethernet8023 | CI | Migra GitHub Actions para runners auto-hosted via ARC no GKE — melhoria de infraestrutura eparity. | [#66520](https://github.com/NousResearch/hermes-agent/pull/66520) |
| **#75635** | Ahmett101 | Agent/Compression | Clampa bounds fora de faixa no context compressor (#75588) — P1, risco de indexação incorreta. | [#75635](https://github.com/NousResearch/hermes-agent/pull/75635) |
| **#75325** | RichardHojunJang | Discord/TTS | Voice barge-in conservador no Discord — feature aguardada pela comunidade. | [#75325](https://github.com/NousResearch/hermes-agent/pull/75325) |

**Síntese:** A equipe demonstra foco em **segurança** (#75494), **estabilidade cross-platform** (#75631, #75635) e **infraestrutura futura** (#66520). A colaboração de `ygd58` é particularmente notável com 3 PRs de segurança/robustez em um único dia.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários + reações)

| # | Título | Comentários | 👍 | Status | Link |
|---|--------|-------------|----|--------|------|
| **#24140** | Telegram down — todos modelos rejeitados com "context window below minimum 64,000 tokens" | 13 | 0 | CLOSED | [#24140](https://github.com/NousResearch/hermes-agent/issues/24140) |
| **#5143** | Multi-Role Auto-Routing via Gateway Hooks (v2 proposal) | 11 | 16 | OPEN | [#5143](https://github.com/NousResearch/hermes-agent/issues/5143) |
| **#52484** | Token Incinerator — Recursive Loop em delegate_task sem Max Depth Limit | 5 | 0 | OPEN | [#52484](https://github.com/NousResearch/hermes-agent/issues/52484) |
| **#73211** | Desktop v0.19.0 removeu status indicators | 3 | **4** | OPEN | [#73211](https://github.com/NousResearch/hermes-agent/issues/73211) |
| **#52952** | Enter key envia mensagem — sem suporte a newline no chat input | 3 | 2 | OPEN | [#52952](https://github.com/NousResearch/hermes-agent/issues/52952) |

### Análise das demandas

**Telegram down (#24140):** Incidente crítico que afetou **todos os usuários Telegram** simultaneamente. O erro indica que modelos com context window inferior a 64k tokens (como MiniMax-M2.7 com 32.768) foram rejeitados. closed com resolução, mas expõe fragilidade no provider selection fallback.

**Multi-Role Auto-Routing (#5143):** Com 16 👍, é a issue com **maior suporte da comunidade** entre as discutidas. O autor (`OlegB333`) reeds and significantly reworkou a proposta para alinhar com v0.14.0, indicando maturidade. Feature estratégica para o gateway — envolve classifiers contextuais e recovery de misroutes.

**Status indicators removidos (#73211):** 4 👍 com apenas 3 comentários — indica frustração silenciosa. Usuários dependem desses indicadores para monitorar contexto, YOLO status e ferramentas. Regressão no Desktop afeta workflow de power users.

**Enter key / newline (#52952):**用户反复抱怨的多行消息问题 — mesmo com apenas 3 comentários, o título sugere um problema recorrente ("recurring user frustration"). Impacta qualidade de mensagem em todos os idiomas.

---

## 5. Bugs e Estabilidade

### Por Severidade

#### P1 — Críticos (afetam produção em larga escala)

| # | Título | Componente | Link |
|---|--------|------------|------|
| **#24140** | Telegram completamente down — context window rejection | agent, provider/kimi, provider/minimax | [#24140](https://github.com/NousResearch/hermes-agent/issues/24140) |
| **#75613** | v0.19.1 Anthropic requests silenciosamente degradadas para /chat/completions | cli | [#75613](https://github.com/NousResearch/hermes-agent/issues/75613) |
| **#75588** | Compressor escaneia além das mensagens com short tool-only suffix | agent, compression | [#75588](https://github.com/NousResearch/hermes-agent/issues/75588) |

#### P2 — Altos (impacto significativo)

| # | Título | Componente | Link |
|---|--------|------------|------|
| **#52484** | Token Incinerator — loop recursivo infinito em delegate_task | agent, tool/delegate | [#52484](https://github.com/NousResearch/hermes-agent/issues/52484) |
| **#75556** | Windows update loop persiste apesar de fix em #75498 | desktop, windows | [#75556](https://github.com/NousResearch/hermes-agent/issues/75556) |
| **#66329** | Model picker agrupa sob "CUSTOM ENDPOINT" em vez do provider correto | cli | [#66329](https://github.com/NousResearch/hermes-agent/issues/66329) |
| **#75269** | SessionDB retém WAL readers de threads terminadas — exaure RLIMIT_NOFILE | agent, sessions | [#75269](https://github.com/NousResearch/hermes-agent/issues/75269) |
| **#75471** | GPT-5.6 on Bedrock Mantle emite scaffolding interno como texto | agent, provider/bedrock | [#75471](https://github.com/NousResearch/hermes-agent/issues/75471) |
| **#18004** | Cron inactivity timeout marca job como failed enquanto thread continua | cron | [#18004](https://github.com/NousResearch/hermes-agent/issues/18004) |
| **#75150** | TUI empty-bracketed-paste causa loop infinito de auto-attach de imagem (regressão) | tui, vision | [#75150](https://github.com/NousResearch/hermes-agent/issues/75150) |
| **#75598** | Múltiplos gateways conflitando com diferentes profiles no Windows | desktop, windows | [#75598](https://github.com/NousResearch/hermes-agent/issues/75598) |
| **#60081** | Windows enumeration para screen capture causa hang | tools, windows | [#60081](https://github.com/NousResearch/hermes-agent/pull/60081) |

#### P3 — Medios (impacto moderado)

| # | Título | Componente | Link |
|---|--------|------------|------|
| **#51327** | Hermes Desktop falha silenciosamente via .desktop launcher no Linux | desktop, linux | [#51327](https://github.com/NousResearch/hermes-agent/issues/51327) |
| **#73831** | Slack channel-list JSON array string silencia bot | plugins, slack | [#73831](https://github.com/NousResearch/hermes-agent/issues/73831) |
| **#62383** | Weixin iLink cron delivery falha com ret=-2 quando context_token expira | gateway, wecom | [#62383](https://github.com/NousResearch/hermes-agent/issues/62383) |
| **#64847** | /model no Feishu armazena Markdown-link no config.yaml | plugins, feishu | [#64847](https://github.com/NousResearch/hermes-agent/issues/64847) |
| **#73211** | Status indicators removidos no Desktop v0.19.0 | desktop | [#73211](https://github.com/NousResearch/hermes-agent/issues/73211) |
| **#74965** | Telegram albums splitados entre turns | plugins, telegram | [#74965](https://github.com/NousResearch/hermes-agent/issues/74965) |
| **#52954** | MCP Chrome DevTools usa guest profile — Cloudflare bloqueia | agent, tool/mcp | [#52954](https://github.com/NousResearch/hermes-agent/issues/52954) |
| **#52952** | Enter key envia mensagem sem newline | desktop | [#52952](https://github.com/NousResearch/hermes-agent/issues/52952) |
| **#52955** | CLI command para gerenciar pinned sessions | cli | [#52955](https://github.com/NousResearch/hermes-agent/issues/52955) |
| **#69727** | Conflito multi-sessão no browser simultâneo | agent, tool/browser | [#69727](https://github.com/NousResearch/hermes-agent/issues/69727) |

### Padrões identificados

1. **Windows é a plataforma mais problemática:** 4 issues P2/P3 específicas do Windows (update loop, gateway conflicts, screen capture).
2. **Plugin isolation é vulnerabilidade estrutural:** #75648 (PR aberto) endereça root cause — plugins mutam estado global em runtimes compartilhados.
3. **Regressões persistem:** #75150 é regressão de #23984, ainda no v0.19.1.
4. **Platform diversity stretching QA:** Telegram, Slack, Feishu, Weixin, Discord — cada platform plugin introduz edge cases únicos.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features com momentum

| # | Título | 👍 | Componente | Link |
|---|--------|----|------------|------|
| **#5143** | Multi-Role Auto-Routing via Gateway Hooks | **16** | gateway, config | [#5143](https://github.com/NousResearch/hermes-agent/issues/5143) |
| **#52554** | Floating "Quote" button no Desktop para texto selecionado | 1 | desktop | [#52554](https://github.com/NousResearch/hermes-agent/issues/52554) |
| **#52955** | CLI command `hermes sessions pinned` | 0 | cli, sessions | [#52955](https://github.com/NousResearch/hermes-agent/issues/52955) |
| **#18963** | Adicionar `skills` parameter para `delegate_task` | 0 | tools, delegate | [#18963](https://github.com/NousResearch/hermes-agent/issues/18963) |

### Features em PR

| PR | Título | Descrição | Link |
|----|--------|-----------|------|
| **#75630** | Local agents cron board | Dashboard para agents locais e cron jobs no Desktop | [#75630](https://github.com/NousResearch/hermes-agent/pull/75630) |
| **#75652** | browser_tabs + follow click-opened tab | Suporte a múltiplas abas no browser CDP | [#75652](https://github.com/NousResearch/hermes-agent/pull/75652) |
| **#75325** | Discord voice barge-in | Barge-in conservador para voz no Discord | [#75325](https://github.com/Nous

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório de Projeto: PicoClaw
## Período: 2026-08-01

---

## 1. Panorama do dia

O projeto PicoClaw apresenta atividade moderada em 01/08/2026, com **2 issues abertas** e **3 pull requests** em revisão nas últimas 24h. Não houve lançamentos de novas versões. A atividade concentra-se em melhorias de funcionalidades (IRC, modelos de IA) e refatorações técnicas. O projeto mantém um ritmo de desenvolvimento consistente, com contribuições voltadas para usabilidade e expansão de canais de comunicação.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto encontra-se sem publicações novas. Para informações sobre versões anteriores, recomenda-se consultar o [histórico de releases](https://github.com/sipeed/picoclaw/releases) do repositório.

---

## 3. Progresso do Projeto

### PRs em aberto mais recentes

| PR | Título | Autor | Status |
|----|--------|-------|--------|
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) | refactor(deltachat): cleanup implementation, documentation -200LOC | trufae | OPEN |
| [#3193](https://github.com/sipeed/picoclaw/pull/3193) | Added simplex channel type | dim | OPEN |
| [#3200](https://github.com/sipeed/picoclaw/pull/3200) | feat(models): add configurable default fallback chain | lc6464 | OPEN |

**Destaque:** O PR #3193 introduz um novo tipo de canal "simplex", ampliando as opções de integração do sistema.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento

**#3287** — [Feature] Better support long messages in IRC
- **Autor:** superuser-does
- **Comentários:** 2 | **Reações:** 0
- **Link:** [Issue #3287](https://github.com/sipeed/picoclaw/issues/3287)
- **Análise:** Demanda relevante para usuários de IRC que lidam com mensagens longas. O problema envolve limitação de 512 bytes do protocolo IRCv3 e fragmentação automática de mensagens.

**#3292** — [BUG] CPU usage too high when focus on input box
- **Autor:** Acdfmwaopuio
- **Comentários:** 1 | **Reações:** 0
- **Link:** [Issue #3292](https://github.com/sipeed/picoclaw/issues/3292)
- **Análise:** Bug de performance reportado por usuário com versão 0.3.1, ambiente Debian/Linux x64, utilizando Firefox via web. Potencial impacto na experiência do usuário.

---

## 5. Bugs e Estabilidade

| Severidade | Issue | Descrição | Link |
|------------|-------|-----------|------|
| **Média** | #3292 | Alto consumo de CPU ao focar input box na interface de chat | [Link](https://github.com/sipeed/picoclaw/issues/3292) |

**Observação:** Bug reportado em ambiente específico (web via Firefox). Requer investigação para determinar se é caso isolado ou regressão.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas solicitações

| ID | Feature | Link | Prioridade Observada |
|----|---------|------|---------------------|
| #3287 | Suporte melhorado para mensagens longas em IRC | [Link](https://github.com/sipeed/picoclaw/issues/3287) | Média |
| #3193 | Novo tipo de canal "simplex" | [Link](https://github.com/sipeed/picoclaw/pull/3193) | Em revisão |
| #3200 | Cadeia de fallback configurável para modelos de IA | [Link](https://github.com/sipeed/picoclaw/pull/3200) | Em revisão |

**Tendência identificada:** O roadmap mostra foco em:
- Expansão de canais de comunicação
- Melhorias em modelos de IA e fallbacks
- Tratamento robusto de protocolos legacy (IRC)

---

## 7. Resumo de Feedback dos Usuários

### Dores relatadas

1. **Fragmentação de mensagens em IRC**
   - Usuários precisam de tratamento unificado para mensagens longas divididas pelo protocolo
   - Impacto: Funcionalidade crítica para comunidades IRC

2. **Performance na interface web**
   - Alto consumo de CPU em cenários específicos
   - Impacto: Experiência degradada em navegadores desktop

3. **Limitações de configuração de modelos**
   - Necessidade de cadeias de fallback mais flexíveis
   - Impacto: Melhor resiliência em produção

### Cenários de uso em evidência

- Integração com provedores de IA (DeepSeek)
- Comunicação via múltiplos canais (IRC, DeltaChat, Simplex)
- Implantação em ambientes Linux Server

---

## 8. Backlog que Merece Atenção

### Itens sem atividade recente

| ID | Tipo | Título | Última Atualização | Link |
|----|------|--------|-------------------|------|
| #3222 | PR | Refatoração DeltaChat | 2026-07-31 | [Link](https://github.com/sipeed/picoclaw/pull/3222) |
| #3193 | PR | Canal Simplex | 2026-07-31 | [Link](https://github.com/sipeed/picoclaw/pull/3193) |
| #3200 | PR | Fallback chain para modelos | 2026-07-31 | [Link](https://github.com/sipeed/picoclaw/pull/3200) |

**Recomendação:** Os três PRs principais aguardam revisão e merge. Sugere-se priorização da refatoração DeltaChat (#3222) para limpeza técnica, seguida pela feature de fallback (#3200) e novo canal simplex (#3193).

---

## Métricas Consolidada (24h)

| Métrica | Valor |
|---------|-------|
| Issues abertas | 2 |
| Issues fechadas | 0 |
| PRs abertos | 3 |
| PRs mergeados | 0 |
| Releases | 0 |
| Total de comentários (issues) | 3 |

---

*Relatório gerado automaticamente com base nos dados do GitHub do projeto PicoClaw.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-08-01

---

## 1. Panorama do Dia

O IronClaw mantém um ritmo de desenvolvimento intenso, com **29 issues e 50 PRs atualizados nas últimas 24 horas**, demonstrando alta atividade tanto em feature work quanto em manutenção. Não houve lançamentos oficiais no período, mas o projeto está profundamente engajado em trabalhos de infraestrutura crítica — especificamente no programa "Reborn" de rearquitetura, com múltiples PRs de refatoração sendo mesclados. A saúde geral do projeto reflete um momento de maturação técnica, com foco em estabilidade, segurança e governança de código, enquanto issues de feedback de usuários reais continuam a iluminar problemas de usabilidade.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24 horas.**

O último release documentado é o PR #5598 (`ironclaw_common` 0.4.2 → 0.5.0, `ironclaw_safety` 0.2.2 → 0.2.3, `ironclaw_skills` 0.3.0 → 0.4.0), criado em 2026-07-03 e ainda em aberto. Este release trouxe **breaking changes** no `ironclaw_common`, exigindo atenção de migração para consumidores da API.

---

## 3. Progresso do Projeto

### PRs Fechados/Mesclados Hoje

| PR | Título | Impacto |
|----|--------|---------|
| [#6967](https://github.com/nearai/ironclaw/pull/6967) | Refactor(contracts): Complete turn vocabulary in host_api e retire turns shims (WS1.1) | **Alto** — Conclui a camada WS1.1 do programa Reborn, extraindo vocabulário neutro de turnos para `ironclaw_host_api` |
| [#6964](https://github.com/nearai/ironclaw/pull/6964) | Refactor(llm): Delete verified-dead half of reasoning module (WS8 closeout) | **Médio** — Limpeza de código morto no módulo de raciocínio, fechando tranche WS8 |
| [#6966](https://github.com/nearai/ironclaw/pull/6966) | CI: Unblock queue — histogram diff gate fix, wasmtime RUSTSEC bump, stale events floor | **Alto** — Desbloqueia a fila de CI com 3 correções críticas (gate de histograma, RUSTSEC, floor de eventos) |
| [#6932](https://github.com/nearai/ironclaw/pull/6932) | Chore(deps): Bump everything-else group (34 updates) | **Baixo** — Manutenção de dependências via Dependabot |
| [#4022](https://github.com/nearai/ironclaw/pull/4022) | Fix(tools): HTTP response error is recoverable (regression fix) | **Médio** — Corrige regressão onde erros HTTP abortavam runs de agente indevidamente |
| [#3942](https://github.com/nearai/ironclaw/pull/3942) | Refactor(trace): PilotAllowlist enum + caller-level error-branch tests | **Baixo** — Follow-up de #3738, migra strings para enum tipado |
| [#3952](https://github.com/nearai/ironclaw/pull/3952) | Feat(filesystem): TOCTOU-harden LocalFilesystem via fd-relative openat2 | **Alto** — Endurecimento de segurança TOCTOU para sistema de arquivos, protegendo recursos multi-tenant |
| [#6910](https://github.com/nearai/ironclaw/pull/6910) | Introduce shared Switch component for settings controls | **Baixo** — Componente UI compartilhado para consistência |
| [#6909](https://github.com/nearai/ironclaw/pull/6909) | Migrate Admin deletion flows to shared ConfirmDialog | **Baixo** — Padronização de diálogos de confirmação |
| [#6904](https://github.com/nearai/ironclaw/pull/6904) | Fix Logs page cannot load entries beyond latest page | **Baixo** — Corrige paginação de logs |
| [#6897](https://github.com/nearai/ironclaw/pull/6897) | Fix model gateway catch-all retries deterministic LLM errors | **Alto** — Elimina retry de 7 minutos para erros determinísticos |

### Destaque: Programa Reborn Avança

O programa de rearquitetura Reborn continua seu progresso sistemático:
- **WS1.1** concluído com vocabulário de turnos refatorado
- **WS8** fechado com exclusão de código morto
- **WS10** (mencionado em #6946) introduziu gates de CI path-keyed
- **WS11.3** em andamento com hotfixes de drift

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| Issue | Título | Comentários | Categoria |
|-------|--------|-------------|-----------|
| [#6284](https://github.com/nearai/ironclaw/issues/6284) | [EPIC] Error-recoverability endgame | **15** | Core Architecture |
| [#6963](https://github.com/nearai/ironclaw/issues/6963) | Path-keyed CI gates (8 silent + 2 loud) | **4** | CI/Infra |
| [#6524](https://github.com/nearai/ironclaw/issues/6524) | [EPIC] Hermetic capability and journey testing | **4** | Testing |
| [#6565](https://github.com/nearai/ironclaw/issues/6565) | [EPIC] Reliable Skill Discovery, Routing, Activation | **2** | Skills/Agent |
| [#6920](https://github.com/nearai/ironclaw/issues/6920) | Establish target-architecture baselines | **2** | Architecture |

### Análise dos Temas

1. **Error Recoverability (#6284)** — Com 15 comentários, esta é a issue com maior discussão. O épico define um contrato rigoroso: todo erro mid-run deve satisfazer 5 condições (sobrevive, modelo vê, causa é mostrada, modelo age, nunca reporta non-success). Este é um pilar fundamental para reliability do agente.

2. **CI Gates Integrity (#6963)** — A auditoria de gates path-keyed revelou 8 defeitos silenciosos e 2 barulhentos que bloqueiam a família git mv. Isto indica necessidade de hardening no pipeline de CI.

3. **Skills Discovery (#6565, #6941)** — A comunidade está ativamente particionando o épico de skill discovery em workstreams menores (#6941), reconhecendo que 21 critérios de aceitação em um único épico é impraticável.

---

## 5. Bugs e Estabilidade

### Por Severidade

#### P0 (Críticos)
| Issue | Título | Descrição |
|-------|--------|-----------|
| [#6900](https://github.com/nearai/ironclaw/issues/6900) | Cross-user memory leak | Canal compartilhado colapsa todos usuários no namespace do operador — **vazamento de memória entre usuários** |

#### P1 (Altos)
| Issue | Título | Descrição |
|-------|--------|-----------|
| [#6778](https://github.com/nearai/ironclaw/issues/6778) | Hosted-MCP: cross-user metadata exposure | Catálogos de ferramentas publicados por extension id, não por instalação — exposição entre usuários |
| [#6853](https://github.com/nearai/ironclaw/issues/6853) | Compaction leak matches poisoning context | Matches de scanner de leaks estão envenenando recovery de contexto |

#### P2 (Médios)
| Issue | Título | Impacto |
|-------|--------|---------|
| [#6974](https://github.com/nearai/ironclaw/issues/6974) | libSQL thread_store_writes pathology (p95 37-135s) | Gargalo de performance em stress cases tool-heavy |
| [#6973](https://github.com/nearai/ironclaw/issues/6973) | Postgres capacity regression (p95 3.74s → 12.0s) | Capacidade do Postgres regredida desde #6696 |
| [#6972](https://github.com/nearai/ironclaw/issues/6972) | New account email authentication not working | Auth por email não funciona para novas contas |
| [#6976](https://github.com/nearai/ironclaw/issues/6976) | Linux service install missing user lingering | Service install não habilita lingering, impedindo operação unattended |
| [#6752](https://github.com/nearai/ironclaw/issues/6752) | Instance deletion fails with "Loading your agents..." stuck | Deleção de instância trava em loop |
| [#6834](https://github.com/nearai/ironclaw/issues/6834) | Slack setup fails in IronClaw | Integração Slack não completa auth flow |
| [#6866](https://github.com/nearai/ironclaw/issues/6866) | Same home directory shared across all users | Isolamento de workspaces violado — privacidade |

#### Feedback Bugs
| Issue | Título |
|-------|--------|
| [#6940](https://github.com/nearai/ironclaw/issues/6940) | IronHub skill CTA returns 404 across all skills |
| [#6902](https://github.com/nearai/ironclaw/issues/6902) | Projects page displays fabricated metrics as real data |

### Padrões Identificados

1. **Segurança Multi-tenant**: 3 issues críticas (#6900, #6778, #6866) envolvem falhas de isolamento entre usuários — área que requer auditoria prioritária.
2. **Performance Regressions**: DB layer apresenta regressões significativas tanto em Postgres (#6973) quanto libSQL (#6974).
3. **Auth/Integration Brokenness**: Sistema de auth e integrações externas (Slack, Telegram, email) apresentam falhas funcionais.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Épicos em Andamento

| Issue | Título | Escopo |
|-------|--------|--------|
| [#6284](https://github.com/nearai/ironclaw/issues/6284) | Error-recoverability endgame | Agent Reliability |
| [#6524](https://github.com/nearai/ironclaw/issues/6524) | Hermetic capability and journey testing | Evaluation/E2E |
| [#6565](https://github.com/nearai/ironclaw/issues/6565) | Reliable Skill Discovery, Routing, Activation | Skills/Agent |
| [#6578](https://github.com/nearai/ironclaw/issues/6578) | Admin-Managed Agents as UserId Subjects | Identity/Tenant |
| [#6941](https://github.com/nearai/ironclaw/issues/6941) | Skills the model can find, choose, and use | Skills (sub-épico de #6565) |

### Novas Features Solicitadas

| Issue | Título | Justificativa |
|-------|--------|---------------|
| [#6939](https://github.com/nearai/ironclaw/issues/6939) | Migration tool for legacy agent (Hermes/Openclaw) | Usuários enfrentam switching costs altos; necessidade de portar setup e memória |
| [#6971](https://github.com/nearai/ironclaw/issues/6971) | Clarify "Tools" vs "Extensions" terminology | Confusão de usuários sobre nomenclatura do produto |
| [#6969](https://github.com/nearai/ironclaw/pull/6969) | Add /new, /stop, and /interrupt commands | Comandos de controle de task para WebUI, Slack e Telegram |

### PRs de Feature em Andamento

| PR | Título | Relevância |
|----|--------|------------|
| [#6831](https://github.com/nearai/ironclaw/pull/6831) | Standardized messaging framework (16 ops, 12-code error taxonomy) | Contratos de API internos |
| [#6930](https://github.com/nearai/ironclaw/pull/6930) | Register hosted MCP servers | Extensions/MCP |
| [#6975](https://github.com/nearai/ironclaw/pull/6975) | Extract ironclaw_loop_contracts (WS1.2) | Arquitetura Reborn |
| [#6973](https://github.com/nearai/ironclaw/pull/6973) | Recover Postgres API capacity | Performance |
| [#6952](https://github.com/nearai/ironclaw/pull/6952) | CI scope by affected area | Developer Experience |
| [#6780](https://github.com/nearai/ironclaw/pull/6780) | IronHub deep-link register/install gateway | Hub/Extensions |
| [#6938](https://github.com/nearai/ironclaw/pull/6938) | Model chooses skill, not keyword scorer | Skills UX |
| [#6745](https://github.com/nearai/ironclaw/pull/6745) | Make installed/agent-authored skills selectable/installable | Skills UX |

### Sinais de Roadmap

1. **Model-Centric Skill Selection**: Direção clara de mover decisão de skills do host para o modelo (#6938).
2. **Hermetic Testing**: Infraestrutura para coverage determinístico de capabilities e journeys (#6524).
3. **Admin Agents**: Necessidade de subjects não-humanos para automações (#6578).
4. **Legacy Migration**: Atenção à DX de migração para usuários existentes (#6939).

---

## 7. Resumo de Feedback dos Usuários

### Dores Documentadas

| Issue | Categoria | Dor |
|-------|-----------|-----|
| [#6972](https://github.com/nearai/ironclaw/issues/6972) | Auth | Autenticação por email não funciona para novas contas — bloqueia onboarding |
| [#6834](https://github.com/nearai/ironclaw/issues/6834) | Integration | Slack setup falha; auth flow não completa |
| [#6752](https://github.com/nearai/ironclaw/issues/6752) | UX | Deleção de instância trava e não permite re-login |
| [#6940](https://github.com/nearai/ironclaw/issues/6940) | Hub/UX | Links de CTA do IronHub retornam 404 — experiência quebrada |
| [#6939](https://github.com/nearai/ironclaw/issues/6939) | DX | Switching costs altos de legacy (Hermes/Openclaw) para IronClaw |
| [#6971](https://github.com/nearai/ironclaw/issues/6971) | Documentation | Terminologia "Tools" vs "Extensions" confunde usuários |
| [#6866](https://github.com/nearai/ironclaw/issues/6866) | Security/Privacy | Home directory compartilhado — workspaces visíveis a outros |
| [#6976](https://github.com/nearai/ironclaw/issues/6976) | Deployment | Service install não funciona unattended em VMs/servers |

### Padrões de Feedback

1. **Onboarding Quebrado**: Auth por email e setup inicial apresentam falhas funcionais que impedem novos usuários.
2. **Integrações Imaturas**: Slack integration não está production-ready.
3. **Isolamento de Tenant Questionável**: Usuários reportamviolações de privacidade e isolamento.
4. **Terminologia Opaca**: Nomenclatura inconsistente do produto causa confusão.

---

## 8. Backlog que Merece Atenção

### Issues Sem Atribuição ou Estagnadas

| Issue | Título | Tempo | Prioridade |
|-------|--------|-------|------------|
| [#6974](https://github.com/nearai/ironclaw/issues/6974) | libSQL pathology p95 37-135s | < 24h | P2 |
| [#6965](https://github.com/nearai/ironclaw/issues/6965) | ironclaw_product mis-bucketed | < 24h | Bug CI |
| [#6945](https://github.com/nearai/ironclaw/issues/6945) | Hook-isolation semantic sem regression test | < 24h | Testing Gap |
| [#6962](https://github.com/nearai/ironclaw/issues/6962) | Notion journeys sem E2E coverage | < 24h | Testing |
| [#6921](https://github.com/nearai/ironclaw/issues/6921) | Extract neutral loop contracts | 2 dias | Architecture |

### Áreas Críticas Requendo Ação

1. **Segurança Multi-tenant (#6900, #6778, #6866)**: 3 bugs de severidade P0-P1 envolvem falhas de isolamento. Recomendamos triagem urgente e fix antes do

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório de Projeto — CoPaw (QwenPaw)

**Data de referência:** 2026-08-01  
**Fonte:** github.com/agentscope-ai/CoPaw

---

## 1. Panorama do dia

O projeto CoPaw apresenta **alta atividade** em 2026-08-01, com 20 issues e 41 PRs atualizados nas últimas 24 horas. A equipe demonstrou capacidade notável de resposta rápida, com **13 PRs merged/fechados** addressing bugs críticos como o problema de compatibilidade com agentscope 2.0.4, falhas de transcrição de áudio em canais Feishu, e problemas de integridade de dados na UI de sessões. Não houve releases novas no período, sugerindo foco em estabilização da versão 2.0.1. A comunidade de contribuidores está ativa, com pelo menos 4 first-time contributors contributing neste período.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24 horas.**

O projeto permanece na versão 2.0.1 (Desktop/Windows) conforme indicado nas issues. Recomenda-se monitorar os PRs de compatibilidade (#6615) e a convergência das correções de shell command antes de uma potencial release corretiva.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados (13 total)

| PR | Título | Impacto |
|----|--------|---------|
| [#6615](https://github.com/agentscope-ai/CoPaw/pull/6615) | fix(agentscope): resolve compatibility and config loading issues | **Crítico** — Corrige crashes com agentscope 2.0.4.post1 |
| [#6528](https://github.com/agentscope-ai/CoPaw/pull/6528) | fix: resolve agent.json corruption | **Alto** — Previne corrupção em ambientes Windows |
| [#6609](https://github.com/agentscope-ai/CoPaw/pull/6609) | Fix spawn subagent schema | **Médio** — Habilita modo single-task do spawn_subagent |
| [#6610](https://github.com/agentscope-ai/CoPaw/pull/6610) | fix: shell command execution hangs and UI freezes | **Crítico** — Resolve freeze de 1.5h e travamento de UI |
| [#6573](https://github.com/agentscope-ai/CoPaw/pull/6573) | fix(audio): restore transcription for channel audio messages | **Alto** — Restaura transcrição para mensagens Feishu |
| [#6564](https://github.com/agentscope-ai/CoPaw/pull/6564) | fix(memory): flush pending turn markers before compress | **Médio** — Corrige perda de eventos early-session |
| [#6592](https://github.com/agentscope-ai/CoPaw/pull/6592) | fix(memory): flush Auto-Memory before Scroll context eviction | **Médio** — Garante completude da daily memory |
| [#6602](https://github.com/agentscope-ai/CoPaw/pull/6602) | Fix/issue 6558 session integrity | **Alto** — Preserva respostas ao trocar entre Chat/Code mode |
| [#6606](https://github.com/agentscope-ai/CoPaw/pull/6606) | fix(read_file): accept numeric string line ranges | **Baixo** — Melhoria de DX |
| [#6603](https://github.com/agentscope-ai/CoPaw/pull/6603) | fix(console): scope chat 100dvh override to touch devices | **Baixo** — UI fix para Desktop input box |
| [#6604](https://github.com/agentscope-ai/CoPaw/pull/6604) | docs(memory): explain ReMe self-evolving knowledge base | **Documentação** — Melhora clareza da arquitetura |
| [#6531](https://github.com/agentscope-ai/CoPaw/pull/6531) | fix(acp): add models field to new_session response | **Alto** — Habilita descoberta de modelos por clientes externos |

### Destaque: Refatoração de Contexto (#6611)

O PR [#6611](https://github.com/agentscope-ai/CoPaw/pull/6611) propõe convergência da estratégia Native/Scroll para um único protocolo de contexto, alinhado com o lifecycle do AgentScope 2.0. Este é um PR arquitetural significativo que pode reduzir inconsistências em state recovery e auto-memory.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários + reações)

| Issue | Título | Comentários | Tipo |
|-------|--------|-------------|------|
| [#6537](https://github.com/agentscope-ai/CoPaw/issues/6537) | Skill tags disappear on restart (regression) | 10 | Bug |
| [#6601](https://github.com/agentscope-ai/CoPaw/issues/6601) | QwenPaw 不报空响应错误 | 5 | Bug |
| [#6563](https://github.com/agentscope-ai/CoPaw/issues/6563) | CI workflow blocks all fork PRs | 5 | Bug (CI) |
| [#6083](https://github.com/agentscope-ai/CoPaw/issues/6083) | Desktop窗口增加工作区产出物快捷访问按钮 | 4 | Feature |
| [#6160](https://github.com/agentscope-ai/CoPaw/issues/6160) | 可以为QwenPaw配备独立Python运行环境吗？ | 4 | Question |

### Análise das Demandas

**Regressão de Skill Tags (#6537)** — Com 10 comentários, este é o issue mais discutido. Usuários reportam que tags definidas na Skill Pool UI desaparecem após restart, indicando um problema de sincronização entre a API `PUT /skills/pool/{name}/tags` e o manifest reconciliation no startup. Este é um bug de persistência de dados críticos para fluxo de trabalho.

**Empty Response Handling (#6601)** — Usuários reportam que sessões longas acumulam tool calls que preenchem a janela de contexto. Quando a resposta do modelo é vazia, o sistema não reporta erro, causando perda de responsividade. Este é um problema de resiliência em cenários de uso intensivo.

**Desktop Workspace Access (#6083)** — Forte demanda por accesso rápido a arquivos gerados pelo agent sem sair da Desktop app. Usuários não-técnicos sentem friction significativo ao navegar até `~/.qwenpaw/workspaces/<agent_id>` via Explorer.

---

## 5. Bugs e Estabilidade

### Por Severidade

#### 🔴 Críticos

| Issue | Descrição | Impacto | Link |
|-------|-----------|---------|------|
| #6614 | WeChat cron push nunca entrega (reporta success mas ret=-2) | 44M tokens queimados em retries | [#6614](https://github.com/agentscope-ai/CoPaw/issues/6614) |
| #6612 | Compatibilidade com agentscope 2.0.4.post1 causa crashes e deadlocks | Bloqueia atualização do framework | [#6612](https://github.com/agentscope-ai/CoPaw/issues/6612) |
| #6608 | Shell commands bypass timeout e bloqueiam sessão por 1.5h | Perda de produtividade do usuário | [#6608](https://github.com/agentscope-ai/CoPaw/issues/6608) |

#### 🟠 Altos

| Issue | Descrição | Impacto | Link |
|-------|-----------|---------|------|
| #6537 | Skill tags desaparecem após restart (regressão de #3270) | Perda de configuração persistente | [#6537](https://github.com/agentscope-ai/CoPaw/issues/6537) |
| #6589 | Large shell output causa UI freeze (dezenas de milhares de linhas) | Desktop app inutilizável | [#6589](https://github.com/agentscope-ai/CoPaw/issues/6589) |
| #6601 | Empty responses não reportadas em sessões longas | Experiência quebrada em uso real | [#6601](https://github.com/agentscope-ai/CoPaw/issues/6601) |
| #6558 | Mensagens perdidas ao trocar entre sessões/modos | Integridade de dados de chat | [#6558](https://github.com/agentscope-ai/CoPaw/issues/6558) |

#### 🟡 Médios

| Issue | Descrição | Link |
|-------|-----------|------|
| #6512 | Shell output truncado em >30KB | [#6512](https://github.com/agentscope-ai/CoPaw/issues/6512) |
| #6555 | Memory compression perde early-session events | [#6555](https://github.com/agentscope-ai/CoPaw/issues/6555) |
| #6544 | Feishu audio transcription falha silenciosamente | [#6544](https://github.com/agentscope-ai/CoPaw/issues/6544) |

### Nota sobre CI

O issue [#6563](https://github.com/agentscope-ai/CoPaw/issues/6563) reporta que o workflow `real-behavior-proof.yml` falha em **todos** os PRs de forks com "Resource not accessible by integration". Este é um blocker crítico para contribuição externa.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| Issue | Título | Prioridade Indicada | Link |
|-------|--------|---------------------|------|
| #6083 | Desktop: atalho para acessar workspace outputs | Alta (4 comentários) | [#6083](https://github.com/agentscope-ai/CoPaw/issues/6083) |
| #6160 | Python environment independente para Desktop | Média-Alta | [#6160](https://github.com/agentscope-ai/CoPaw/issues/6160) |
| #6260 | Colapsar thought process e mostrar resultado primeiro | Baixa (1 👍) | [#6260](https://github.com/agentscope-ai/CoPaw/issues/6260) |
| #6559 | Parent-child grouping para sessões forked | Média | [#6559](https://github.com/agentscope-ai/CoPaw/issues/6559) |
| #6593 | Página unificada de cleanup/limpeza de dados | Média | [#6593](https://github.com/agentscope-ai/CoPaw/issues/6593) |
| #6587 | Renomear "QwenPaw Desktop" para "QwenPaw" | Baixa | [#6587](https://github.com/agentscope-ai/CoPaw/issues/6587) |

### Sinais de Roadmap

1. **Desktop UX Consolidation** — Múltiplas issues (#6083, #6587, #6549) indicam necessidade de polimento da experiência desktop, sugerindo que a equipe pode estar planejando uma release focada em desktop.

2. **Provider Expansion** — O PR #6526 adiciona suporte a NVIDIA NIM provider, indicando estratégia de diversificação de provedores de modelos além do Qwen.

3. **Context Management Refactor** — O PR #6611 sinaliza uma rearchitecting significativa do sistema de contexto/scroll.

4. **Cleanup/Data Management** — A issue #6593 sobre espaço em disco e dados acumulados sugere ausência de ferramentas de lifecycle management.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

**1. Estabilidade em Uso Prolongado**
> "长会话可能因正常工具调用累积而逐渐逼近窗口上限" — Sessões longas perdem responsividade devido a tool call accumulation. (#6601)

**2. Desktop App Imatura para Produtividade**
> Usuários precisam sair da app para acessar arquivos gerados, indicando gap entre promessa de "all-in-one assistant" e realidade. (#6083)

**3. Perda Silenciosa de Dados**
> Skill tags, mensagens de sessão, e eventos de memória desaparecem sem notificação clara. Usuários só descobrem quando já é tarde. (#6537, #6558, #6555)

**4. CI Block for Contributors**
> "blocks **all** contributors from having their PRs pass CI" — Experiência frustrante para novos contribuidores. (#6563)

**5. Verbose Output Overwhelming**
> "思考和调用工具是否可以折叠起来... 结果却被淹没在执行的过程中" — Usuários querem foco no resultado, não no processo. (#6260)

### Cenários de Uso Emergentes

- **Data Analysis Pipelines:** Scripts que geram 15k+ caracteres de output (stock analysis, DB queries)
- **Long-term Agentic Workflows:** Sessões que atravessam múltiplas horas/dias com necessidade de persistência
- **Multi-channel Integration:** Feishu, WeChat, OneBot com requisitos específicos de rendering e transcription
- **Enterprise Desktop Deployment:** Usuários Windows com múltiplos ambientes Python (Conda), scaling requirements

---

## 8. Backlog que Merece Atenção

### Issues sem Resposta há >7 dias

| Issue | Título | Criado | Status | Link |
|-------|--------|--------|--------|------|
| #6083 | Desktop workspace quick access | 2026-07-14 | OPEN (4 comentários) | [#6083](https://github.com/agentscope-ai/CoPaw/issues/6083) |
| #6160 | Independent Python environment | 2026-07-16 | OPEN (4 comentários) | [#6160](https://github.com/agentscope-ai/CoPaw/issues/6160) |
| #6260 | Collapsible thought process | 2026-07-19 | OPEN | [#6260](https://github.com/agentscope-ai/CoPaw/issues/6260) |

### Issues com labels mas sem Triage

Recomenda-se atenção aos seguintes issues que apresentam labels de bug/enhancement mas não indicam assignee ou milestone:

- [#6614](https://github.com/agentscope-ai/CoPaw/issues/6614) — WeChat silent failure (crítico, 0 assignee)
- [#6608](https://github.com/agentscope-ai/CoPaw/issues/6608) — Shell timeout bypass (crítico, 0 assignee)
- [#6612](https://github.com/agentscope-ai/CoPaw/issues/6612) — Compatibility issue (crítico, 0 assignee)

### PRs em Review há >3 dias

| PR | Título | Status | Link |
|----|--------|--------|------|
| #6564 | fix(memory): flush pending turn markers | Under Review | [#6564](https://github.com/agentscope-ai/CoPaw/pull/6564) |
| #6543 | fix(onebot): clean text and send local media | Under Review | [#6543](https://github.com/agentscope-ai/CoPaw/pull/6543) |
| #6531 | fix(acp): add models field to new_session | Under Review | [#6531](https://github.com/agentscope-ai/CoPaw/pull/6531) |

---

## Indicadores de Saúde do Projeto

| Métrica | Valor | Observação |
|---------|-------|------------|
| Issues fechadas/abertas (24h) | 6/14 (30%) | Ritmo saudável de resolução |
| PRs merged/fechadas (24h) | 13/41 (32%) | Alta capacidade de review |
| First-time contributors | 4+ | Comunidade crescendo |
| Bugs críticos open | 3 | Necessita atenção imediata |
| Features com >3 comentários | 5 | Demanda validada pela comunidade |

**Conclusão:** O projeto demonstra saúde operacional com ciclo de resposta rápido a bugs, mas apresenta acumulo de issues de estabilidade (shell commands, memory persistence, desktop UX) que podem impactar satisfação do usuário em versões futuras se não priorizados.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-08-01

---

## 1. Panorama do Dia

O ecossistema ZeroClaw apresenta **alta atividade de desenvolvimento** nesta data, com 20 issues e 50 PRs atualizados nas últimas 24 horas. A comunidade está focada em três grandes frentes: a resolução de uma vulnerabilidade crítica de segurança nos webhooks do gateway (issue #9565), a continuação do "stack de memória Hindsight" (PRs #9063–#9069, parte 1/7 a 7/7), e a preparação para a release v0.8.4 com target date em 31/07/2026. Não houve lançamentos formais registrados, mas múltiplos PRs de segurança e dependências foram submetidos com urgência para mitigar CVEs e garantir a integridade do CI.

---

## 2. Lançamentos

### Releases Recentes
| Versão | Data | Status |
|--------|------|--------|
| **v0.8.3** | 2026-07-XX | Disponível (último release estável) |
| **v0.8.4** | Target: 31/07/2026 | Em manutenção — tracker em [#8357](https://github.com/zeroclaw-labs/zeroclaw/issues/8357) |
| **v0.8.5** | Em planejamento | Tracker em [#9459](https://github.com/zeroclaw-labs/zeroclaw/issues/9459) |

### Observações sobre Releases
- **Nenhum release formal** foi publicado nas últimas 24h.
- O tracker da v0.8.4 ([#8357](https://github.com/zeroclaw-labs/zeroclaw/issues/8357)) indica que a versão estava em feature-freeze com target date em **31 de julho de 2026** — hoje.
- A v0.8.3 introduziu **três mecanismos paralelos de atestado/provenance** (cosign, GitHub attestations, SLSA), o que motivou a RFC #9101 para consolidação.

---

## 3. Progresso do Projeto

### PRs Atualizados (Destaque para alterações mergeadas/fechadas)

| PR | Título | Tamanho | Impacto |
|----|--------|---------|---------|
| [#9589](https://github.com/zeroclaw-labs/zeroclaw/pull/9589) | fix(deps): bump wasmtime stack to 47.0.3 for RUSTSEC-2026-0222 | XS | **Segurança** — remedia CVE em wasmtime |
| [#9586](https://github.com/zeroclaw-labs/zeroclaw/pull/9586) | fix(security): waive RUSTSEC-2026-0222 (wasmtime) in audit | XS | **Segurança CI** — desbloqueia pipeline |
| [#9585](https://github.com/zeroclaw-labs/zeroclaw/pull/9585) | docs(maintainers): fix dead SLSA provenance link | XS | **Docs** — conserta link quebrado |
| [#9584](https://github.com/zeroclaw-labs/zeroclaw/pull/9584) | feat(cli): add the egress grant ceremony to plugin install | M | **Plugins** — estágio 3 da política de egress |
| [#9583](https://github.com/zeroclaw-labs/zeroclaw/pull/9583) | ci(lint): gate rustdoc warnings via config | XS | **CI** — endurece linting de docs |
| [#9578](https://github.com/zeroclaw-labs/zeroclaw/pull/9578) | fix(config): honour multimodal.max_images with clamping report | XS | **Config** — comportamento antes silencioso agora audível |
| [#9075](https://github.com/zeroclaw-labs/zeroclaw/pull/9075) | fix(doctor): persist model catalog to cache on models refresh | M | **CLI/Daemon** — corrige dead end do refresh |

### Stack de Memória Hindsight (7/7 PRs)
Os PRs [#9063](https://github.com/zeroclaw-labs/zeroclaw/pull/9063) a [#9069](https://github.com/zeroclaw-labs/zeroclaw/pull/9069) representam a **maior frente de trabalho** do período, todos marcados como `needs-author-action` e `size:XL`. Juntos implementam:
- Backend HTTP nativo Hindsight + config
- Tiers de memória compartilhada/sistema com autorização
- Ajuste de recall/injection com filtro configurável
- Consolidação, dedup e correção de retenção
- Performance async + streaming Telegram DM
- Dashboard com contagem por backend por-agente

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários/reações)

| # | Título | Comentários | Tipo | Prioridade |
|---|--------|-------------|------|------------|
| [#9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048) | RFC: Separate conversation history from agent-curated long-term memory | 13 | RFC | p2 |
| [#9127](https://github.com/zeroclaw-labs/zeroclaw/issues/9127) | RFC: Abstract a `KeySource` trait — classify master-key material | 10 | RFC | p2 |
| [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) | RFC: OpenAI Chat Completions compatibility adapter | 8 | RFC | p2 |
| [#9101](https://github.com/zeroclaw-labs/zeroclaw/issues/9101) | Consolidate release attestation mechanisms | 8 | CI/RFC | p1 |
| [#9106](https://github.com/zeroclaw-labs/zeroclaw/issues/9106) | RFC: A2A outbound client (A2ATool) | 7 | RFC | p2 |
| [#8568](https://github.com/zeroclaw-labs/zeroclaw/issues/8568) | [Feature]: Mixture-of-Agents (MoA) virtual model provider | 5 | Feature | p2 |
| [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) | RFC: Unified attachment architecture for web chat and channels | 4 | RFC | p2 |

### Análise dos Temas

1. **Arquitetura de Memória** (#9048): A comunidade demanda separação clara entre histórico de conversação (`MemoryCategory::Conversation`) e memória de longo prazo curada pelo agente. A issue destaca que o runtime, gateway e canais ainda misturam esses conceitos.

2. **Segurança de Credenciais** (#9127): Proposta de trait `KeySource` para classificar material de chave mestra por fonte/forma de deploy, evoluindo o sistema `#[secret]` e `#[credential_class]`.

3. **Compatibilidade OpenAI** (#8603): Clientes como Open WebUI, LobeChat e integrações customizadas não conseguem conectar via API OpenAI — apenas WebSocket/webhooks estão disponíveis.

4. **Attestation Consolidation** (#9101): A redundância de 3 mecanismos de assinatura (cosign, GitHub attestations, SLSA) em v0.8.3 causa duplicação de CI e 53 assets ao invés de ~20.

5. **A2A Outbound** (#9106): Agentes não conseguem chamar outros agentes A2A-proativos — apenas o servidor inbound (A2AServer) foi shipped em v0.8.2.

---

## 5. Bugs e Estabilidade

### Bugs Críticos (p0/p1) — Requerem Atenção Imediata

| # | Título | Severidade | Status | Atualizado |
|---|--------|------------|--------|------------|
| [#9565](https://github.com/zeroclaw-labs/zeroclaw/issues/9565) | **[S0] gateway webhook handlers do not fail closed** (WhatsApp Cloud, Linq, WATI) | **S0 - data loss / security risk** | in-progress | 2026-07-31 |
| [#9572](https://github.com/zeroclaw-labs/zeroclaw/issues/9572) | **[S2] debug gateway WebSocket turns overflow Tokio worker stack** | S2 - degraded | accepted | 2026-07-31 |
| [#9573](https://github.com/zeroclaw-labs/zeroclaw/issues/9573) | **[S2] cost pricing lookup fails for multiple aliases of same provider** | S2 - degraded | accepted | 2026-07-31 |
| [#9566](https://github.com/zeroclaw-labs/zeroclaw/issues/9566) | **[S2] uppercase allowed_commands never match on Unix** | S2 - degraded | in-progress | 2026-07-30 |
| [#9480](https://github.com/zeroclaw-labs/zeroclaw/issues/9480) | **[S2] content_search fails on Windows with external grep** | S2 - degraded | in-progress | 2026-07-28 |

### Bugs de Prioridade Média/baixa (p2/p3)

| # | Título | Severidade | Status |
|---|--------|------------|--------|
| [#9562](https://github.com/zeroclaw-labs/zeroclaw/issues/9562) | WebChat auto-scroll overrides manual scrolling during streaming | medium | accepted |
| [#9546](https://github.com/zeroclaw-labs/zeroclaw/issues/9546) | updater web-dist test depends on host installation state | low | accepted |
| [#9550](https://github.com/zeroclaw-labs/zeroclaw/issues/9550) | Update broken LinkedIn link on GitHub organization profile | low | accepted |

### Análise de Estabilidade
- **2 bugs de segurança** em andamento (webhook authentication + allowed_commands case-sensitivity).
- **3 bugs de regressão** aceptados/in-progress com impacto em produção (Tokio stack overflow, pricing lookup, grep path handling).
- A questão #9565 é **especialmente crítica** — três handlers de webhook dispatcham mensagens sem autenticação, representando vetor de ataque confirmado por inspeção de código.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features RFC (alto impacto)

| # | Título | Tipo | Prioridade | Needs Maintainer Review |
|---|--------|------|------------|-------------------------|
| [#9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048) | Separate conversation history from agent-curated memory | RFC | p2 | ✅ Sim |
| [#9127](https://github.com/zeroclaw-labs/zeroclaw/issues/9127) | Abstract `KeySource` trait for key material classification | RFC | p2 | ✅ Sim |
| [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) | OpenAI Chat Completions compatibility adapter | RFC | p2 | ✅ Sim |
| [#9106](https://github.com/zeroclaw-labs/zeroclaw/issues/9106) | A2A outbound client (A2ATool) | RFC | p2 | ✅ Sim |
| [#8568](https://github.com/zeroclaw-labs/zeroclaw/issues/8568) | Mixture-of-Agents (MoA) virtual model provider | Feature | p2 | ✅ Sim |
| [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) | Unified attachment architecture for web chat and channels | RFC | p2 | ✅ Sim |

### Refactors Acompanhados (roadmap de segurança)

| # | Título | Tipo | Prioridade | Relacionado a |
|---|--------|------|------------|---------------|
| [#9587](https://github.com/zeroclaw-labs/zeroclaw/issues/9587) | Require authenticated webhook ingress before agent dispatch | refactor | p1 | #9565 |
| [#9588](https://github.com/zeroclaw-labs/zeroclaw/issues/9588) | Make approval-prompt capability registry-owned | refactor | p2 | #9517 |

### Indicadores de Direção Estratégica
1. **Interoperabilidade**: A2A outbound (#9106) + compatibilidade OpenAI (#8603) indicam foco em integração com ecossistema de agentes.
2. **Segurança por design**: A refatoração de webhook (#9587) e trait KeySource (#9127) mostram evolução do modelo de ameaças.
3. **Multi-modelo**: MoA (#8568) sugere estratégia de agregação de múltiplos modelos.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Dor | Fonte | Issue |
|-----|-------|-------|
| **Vazamento de memória de sessão vs. memória curada** | Audacity88, comunidade | [#9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048) |
| **Sem compatibilidade com clientes OpenAI (Open WebUI, LobeChat)** | Usuários externos | [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) |
| **Vulnerabilidade de webhook em produção** (WhatsApp, Linq, WATI) | JordanTheJet (report) | [#9565](https://github.com/zeroclaw-labs/zeroclaw/issues/9565) |
| **Comandos com maiúsculas silenciosamente negados** | JordanTheJet (report) | [#9566](https://github.com/zeroclaw-labs/zeroclaw/issues/9566) |
| **Modelo catalog cache nunca persistido** | Operadores (via doctor) | [#9075](https://github.com/zeroclaw-labs/zeroclaw/pull/9075) |
| **Auto-scroll do WebChat impede leitura de histórico** | Mental-Vortex | [#9562](https://github.com/zeroclaw-labs/zeroclaw/issues/9562) |
| **Link LinkedIn quebrado na organização GitHub** | NerdyShawn | [#9550](https://github.com/zeroclaw-labs/zeroclaw/issues/9550) |

### Cenários de Uso Emergentes
- **Multi-agente**: Demanda por A2A outbound e Mixture-of-Agents indica uso em orquestração de agentes.
- **Integração empresarial**: Trait `KeySource` responde a necessidades de deploy em ambientes com HSM/KMS.
- **Provedores OpenAI-compatíveis**: Amplo interesse em conectar ZeroClaw a clientes não-WebSocket.

---

## 8. Backlog que Merece Atenção

### Issues sem Resposta/Estagnadas

| # | Título | Criado | Atualizado | Comentários | Prioridade |
|---|--------|--------|------------|-------------|------------|
| [#8357](https://github.com/zeroclaw-labs/zeroclaw/issues/8357) | v0.8.4 maintenance train | 2026-06-26 | 2026-07-31 | 0 | p2 |
| [#9459](https://github.com/zeroclaw-labs/zeroclaw/issues/9459) | v0.8.5 weekly non-breaking release | 2026-07-27 | 2026-07-31 | 0 | p2 |
| [#9480](https://github.com/zeroclaw-labs/zeroclaw/issues/9480) | content_search fails on Windows | 2026-07-28 | 2026-07-31 | 0 | p1 |
| [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) | Unified attachment architecture | 2026-07-28 | 2026-07-31 | 4 | p2 |
| [#9575](https://github.com/zeroclaw-labs/zeroclaw/issues/9575) | Warm OpenAI connections via /models | 2026-07-31 | 2026-07-31 | 1 | p2 |

### PRs Bloqueados/Aguardando Ação

| # | Título | Status | Bottleneck |
|----|--------|--------|------------|
| [#8996](https://github.com/zeroclaw-labs/zeroclaw/pull/8996) | fix(goal): preserve running goals across daemon reload | open, needs-author-action | Aguardando autor |
| [#9013](https://github.com/zeroclaw-labs/zeroclaw/pull/9013) | refactor(config)!: move TodoWrite display to zerocode | open, status:blocked | Bloqueado |
| [#9063–#9069](https://github.com/zeroclaw-labs/zeroclaw/issues/9063) | Stack Hindsight memory (7 PRs) | open, needs-author-action | Aguardando mantenedor |
| [#9037](https://github.com/zeroclaw-labs/zeroclaw/pull/9037) | fix(runtime): strip trailing provider terminal markers | open, needs-author-action | Aguardando autor |

### Recomendações para Mantenedores
1. **Priorizar #9565** — vulnerabilidade S0 requer merge imediato.
2. **Revisar stack Hindsight** — 7 PRs aguardam review

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*