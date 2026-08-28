# Resumo diário do ecossistema de agentes de IA 2026-08-28

> Issues: 0 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-08-28 03:58 UTC

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

# Relatório Comparativo do Ecossistema de Agentes de IA Open Source

**Data de referência:** 2026-08-28

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **dois padrões distintos de maturidade** neste momento. Por um lado, projetos como **IronClaw** e **NanoBot** demonstram saúde robusta com ciclos de desenvolvimento acelerados e releases consolidadas (v1.4.0 e预备 de nova versão respectivamente). Por outro, **Hermes Agent** e **CoPaw** enfrentam desafios de estabilidade em funcionalidades críticas — desktop app e startup — que indicam transição de fase de feature-parity para produção-grade. **ZeroClaw** destaca-se pelo volume de RFCs arquiteturais (15+), sinalizando foco em fundamentos de longo prazo. O ecossistema converge em três necessidades transversais: otimização de custos de inference, melhorias em memória de sessão e arquitetura de canais multi-plataforma.

---

## 2. Comparação de Atividade

| Projeto | Issues Ativas (24h) | PRs Abertos | PRs Merged (24h) | Releases (24h) | Saúde |
|---------|---------------------|-------------|------------------|----------------|-------|
| **NullClaw** | 0 | 0 | 0 | 0 | ⚪ Inativa |
| **NanoBot** | 2 | 19 | 9 | 0 | 🟢 Saúde robusta |
| **Hermes Agent** | 50 | 38 | 12 | 1 (v0.20.6) | 🟡 Ativa com P0s |
| **PicoClaw** | 3 | ~8 | ~5 | 0 | 🟡 Estável |
| **IronClaw** | 50 | 15 | 31 | 1 (v1.4.0 stable) | 🟢 Consolidada |
| **CoPaw** | 24 | ~30 | 19 | 0 | 🟠 Beta instável |
| **ZeroClaw** | 26 | 48 | 2 | 0 | 🟡 RFC-driven |

**Observações:**
- **IronClaw** apresenta a melhor ratio PR merged/opened (31/15), indicando disciplina de merge agressiva
- **ZeroClaw** tem o maior volume de PRs abertos (48) com baixa taxa de merge (2), sugerindo pipeline de revisão mais rigoroso ou gargalo
- **CoPaw** reporta bugs críticos (P0-equivalente) no beta 2.2.0b1 — startup de 4 minutos e event loop freeze de 118-135s

---

## 3. Posicionamento do Projeto Principal (IronClaw)

### Vantagens Competitivas

| Dimensão | IronClaw | Pares |
|----------|----------|-------|
| **Release cadence** | 1.4.0 stable promoveu em 24h | Hermes (0.20.6) mas com P0s |
| **Consolidação de PRs** | 81 commits agrupados semanticamente | NanoBot ainda pré-integração |
| **Arquitetura de notificação** | Inbox durável com gates acionáveis | Único no ecossistema |
| **Segurança integrada** | SHA-256 conflict detection, mTLS planned | ZeroClaw mais avançado (RFCs) |

### Diferenças Técnicas Marcantes

- **Memory system:** IronClaw implementa barreiras de compactação cumulativa (não resumos isolados), reduzindo custo de inference em threads longas (benchmark: $2.52 vs $10.31)
- **Gmail integration:** Conversão semântica HTML→Markdown com headers estruturados — abordagem mais opinada que PicoClaw/ZeroClaw
- **Sandbox vision:** RFC #7903 propõepersistent per-user Docker sandbox — arquitetura mais ambiciosa que execução inline dos pares

### Tamanho da Comunidade

Baseado em volume de issues/PRs e diversidadede contributors mencionados:
1. **Hermes Agent** — maior volume absoluto (50 issues, 50 PRs)
2. **IronClaw** — segunda maior base com disciplina de merge superior
3. **ZeroClaw** — third-place em volume, forte em RFCs
4. **NanoBot** — comunidade engajada mas menor escala
5. **CoPaw** —beta com comunidade ativa mas foco regional (DingTalk, WeCom)
6. **PicoClaw** — nicho IRC com base menor mas consistente

---

## 4. Focos Técnicos Compartilhados

### Necessidades Transversais Identificadas

| Tema | Projetos Afetados | Severidade |
|------|-------------------|------------|
| **Otimização de contexto/inference** | IronClaw, Hermes Agent, ZeroClaw, NanoBot | 🔴 Alta |
| **Arquitetura de memória de sessão** | NanoBot, ZeroClaw, IronClaw, CoPaw | 🔴 Alta |
| **Segurança de arquivos/sandbox** | ZeroClaw, CoPaw, NanoBot | 🔴 Alta |
| **Performance de desktop/TUI** | Hermes Agent, CoPaw | 🟠 Média-Alta |
| **Canais multi-plataforma** | Todos | 🟡 Média |
| **CLI scripting/automation** | Hermes Agent, NanoBot | 🟡 Média |

### Análise de Sobreposição

**Memory architecture** é o tema mais convergente — quatro projetos (NanoBot, ZeroClaw, IronClaw, CoPaw) estão rearchitectando subsistemas de memória simultaneamente:
- NanoBot: recall explícito via tool + backend plugável
- ZeroClaw: RFC #6850 para desacoplar lifecycle policy de storage
- IronClaw: barreiras de compactação cumulativa
- CoPaw: embedding recovery hardening

**Segurança de arquivos** aparece em três projetos:
- ZeroClaw: permissões 0o600 em temp files (#10409), validação de imagens (#9819)
- CoPaw: file protection inativa lendo /etc/passwd (#7362)
- NanoBot: path traversal em session handling (#5564)

---

## 5. Análise de Diferenciação

### Por Público-Alvo

| Projeto | Público Primário | Diferenciação |
|---------|------------------|---------------|
| **IronClaw** | Enterprise/teams | Notificações duráveis, Gmail semântico, sandbox persistente |
| **Hermes Agent** | Developers/power users | Desktop app, multi-plataforma (Discord, Telegram, CLI) |
| **NanoBot** | Pesquisadores/HKU | Refatoração agressiva de memória, TUI |
| **ZeroClaw** | Infraestrutura/segurança | RFCs arquiteturais, mTLS, WASM plugins |
| **CoPaw** | Mercado chinês | DingTalk, WeCom, QwenPaw Hub multi-tenant |
| **PicoClaw** | Nicho IRC/Unix | Minimalismo, IRCv3, lightweight |

### Por Arquitetura

```
ZeroClaw ──── RFC-driven ──── Long-term thinking
    │
    ├── Security: mTLS, sandbox granular
    └── Voice: Gemini Live, FunASR bridge

IronClaw ──── Product-driven ──── Ship fast
    │
    ├── Gmail semantic output
    ├── Notification inbox
    └── Compaction barriers

Hermes ─────── Desktop-first ──── User experience
    │
    ├── TUI/CLI maturity
    ├── Cross-platform integration
    └── Skills Hub (degradado)

NanoBot ─────── Research-grade ──── Experimental
    │
    ├── Memory architecture overhaul
    ├── Pluggable backends
    └── TUI multimodal

CoPaw ─────── Regional ─────────── Channel-specific
    │
    ├── DingTalk/WeCom/QQ
    └── Multi-tenant Hub

PicoClaw ───── Niche ───────────── Minimalist
    │
    └── IRC-focused, lightweight
```

---

## 6. Tração e Maturidade da Comunidade

### Projetos em Velocidade Máxima (Iteração Rápida)

| Posição | Projeto | Sinais de Velocidade |
|---------|---------|---------------------|
| 🥇 | **IronClaw** | 31 PRs merged em 24h, release 1.4.0 promoted, 81 commits consolidados |
| 🥈 | **Hermes Agent** | 12 PRs merged, v0.20.6 com ~525 PRs desde anterior |
| 🥉 | **NanoBot** | 9 PRs merged, 28 PRs atualizados — ciclo intenso de pré-release |

### Projetos em Fase de Consolidação (Qualidade)

| Projeto | Indicador de Consolidação |
|---------|---------------------------|
| **IronClaw** | Release stable promotion com changelog estruturado, benchmarking formal (PinBench) |
| **ZeroClaw** | 15+ RFCs em discussão madura, PRs size:XL em review rigoroso |
| **PicoClaw** | Atualização massiva de dependências (AWS SDK, Anthropic, mautrix), PR de UI pendiente |

### Projetos com Sinais de Atrito

| Projeto | Problema | Implicação |
|---------|----------|------------|
| **CoPaw** | Beta 2.2.0b1 com startup 4min + event loop freeze | Risco de adoção se não resolver antes GA |
| **Hermes Agent** | 2 P0s abertos (prompt-cache, system prompt null) | Custo direto em inference para usuários |
| **NanoBot** | Conflict em PRs com 15+ dias (#5379, #5396) | Backlog de merge technical debt |

---

## 7. Sinais de Tendência

### Tendências de Mercado Extraídas

**1. Multimodalidade além de texto → voz em tempo real**
- ZeroClaw: RFC #8780 (Gemini Live), PR #9740 (VoiceHost bridge FunASR/SenseVoice)
- IronClaw: RFC #7867 (Voice-to-text WebUI)
- CoPaw: Android input newline, browser integration
- *Implicação:* Voice-first interaction é próxima fronteira para agentes desktop/TUI

**2. Memória de longo prazo e contexto cross-session**
- NanoBot: pluggable memory backend, recall explícito
- IronClaw: cumulative compaction barriers
- ZeroClaw: RFC #6850, #9998 (persistent prompt attachments)
- CoPaw: embedding recovery hardening
- *Implicação:* Modelo de "memória do agente" está convergindo para arquiteturas onde memória é explicitamente gerenciada via tools, não injetada automaticamente

**3. Custo-eficiência como prioridade #1**
- IronClaw: benchmark mostra 4x diferença de custo ($2.52 vs $10.31)
- Hermes Agent: P0 sobre prompt-cache hits e prefix cache
- Todos os projetos com issues de "compactação de contexto"
- *Implicação:* Mercado sensibilizado a custo de inference; otimização de contexto é feature competitiva

**4. Multi-tenant e uso em equipe**
- CoPaw: QwenPaw Hub multi-tenant (#7318)
- IronClaw: persistent per-user sandbox (#7903)
- Hermes Agent: multi-profile com vazamento de estado
- *Implicação:* Transição de "assistente pessoal" para "plataforma de equipe" está em curso

**5. Segurança como feature de primeira classe**
- ZeroClaw: mTLS, RFCs de sandbox granular, permissions 0o600
- NanoBot: path traversal fix (#5564)
- CoPaw: file protection bypass (#7362)
- *Implicação:* Trust boundaries e isolamento de workspace são requisitos crescentes conforme uso corporativo

**6. Regionalização de canais**
- CoPaw: DingTalk, WeCom, QQ (mercado chinês)
- Hermes Agent: Discord, Telegram
- PicoClaw: IRCv3 (mercado Unix/legacy)
- *Implicação:* Ecossistema converge para suporte nativo a canais regionais como diferencial de adoção

---

## Síntese para Decisores

| Decisor | Recomendação |
|---------|--------------|
| **Adoção de projeto** | IronClaw para estabilidade enterprise; Hermes Agent para flexibilidade multi-plataforma; NanoBot para pesquisa/arquitetura de memória |
| **Contribuição** | ZeroClaw para impacto arquitetural; IronClaw para merge velocity; PicoClaw para entrada low-barrier |
| **Monitoramento** | CoPaw (estabilidade beta), Hermes Agent (P0s em produção), NanoBot (segurança) |
| **Evitar** | NullClaw (inativa), CoPaw para produção até GA 2.2.0 |

---

*Relatório gerado em 2026-08-28 com base nos resumos de atividade comunitária dos projetos NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw e ZeroClaw.*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-08-28

## 1. Panorama do dia

O NanoBot apresenta um dia de **alta atividade de desenvolvimento**, com 28 PRs atualizados e 2 issues abertas nas últimas 24h. A equipe demonstra foco intenso em **melhorias de memória e arquitetura de agentes**, com ao menos 5 PRs fechados/mergeados tratando de refatorações de memória, UI (TUI clipboard images) e estabilidade (concurrent subagents, request concurrency). A ausência de releases formais indica que o projeto está em intenso ciclo de pré-integração. Não há sinais de incidentes críticos ou regressões graves reportadas.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.** O repositório não registrou novas versões. A equipe está concentrada em consolidação de código — видимо, preparando a próxima versão.

---

## 3. Progresso do Projeto

Os seguintes PRs foram fechados/mergeados hoje:

| # | PR | Tipo | Impacto |
|---|-----|------|---------|
| [#5566](https://github.com/HKUDS/nanobot/pull/5566) | fix: queue concurrent subagents | bug/performance | ✅ Aumenta limite padrão de 1→4 subagentes concurrentes e implementa queueing em vez de rejeição |
| [#5572](https://github.com/HKUDS/nanobot/pull/5572) | fix(agent): default request concurrency to unlimited | bug/performance | ✅ Remove gargalo artificial em WebUI ao deixar concurrency ilimitada por default |
| [#5565](https://github.com/HKUDS/nanobot/pull/5565) | refactor(memory): decouple archival from provider state | refactor | 🔧 Extrai `MemoryArchiver` de `SessionManager`, melhorando separação de responsabilidades |
| [#5563](https://github.com/HKUDS/nanobot/pull/5563) | feat(tui): support pasting clipboard images | feature | ✨ Suporte a `Ctrl+V`/`Alt+V` para imagens no TUI composer |
| [#4346](https://github.com/HKUDS/nanobot/pull/4346) | fix(providers): mark stripped images as unviewable | bug | 🔒 Corrige vazamento de paths de imagens stripped |

**Destaque:** As melhorias de concurrency (#5566, #5572) são ganhos diretos de performance e estabilidade para ambientes com múltiplas requisições simultâneas.

---

## 4. Temas Quentes da Comunidade

### Issues com maior atividade

**[#5567](https://github.com/HKUDS/nanobot/issues/5567)** — *Feat: 飞书渠道应整合多轮回复 em单条流式卡片消息* (2 comentários)
- **Autor:** yrxeva
- **Resumo:** Usuários do canal Feishu (Lark) recebem múltiplas mensagens separadas (tool hints, progress, final reply) onde desejam uma única mensagem streaming. Pedem unificação para `1 usuário → 1 resposta` como modelo.
- **Análise:** Demanda de UX cross-channel consistente. Mostra que a arquitetura de streaming atual fragmenta a experiência em canais específicos.
- **Demanda:** Novo padrão de streaming card unificado no Feishu.

**[#5564](https://github.com/HKUDS/nanobot/issues/5564)** — *fix(session): prevent path traversal in session file handling*
- **Autor:** arena-ai-coding-agent[bot]
- **Resumo:** Vulnerabilidade de segurança: `session_id` não validado pode permitir path traversal (ex: `../../etc/passwd`) ao construir paths de arquivo em `session/manager.py`.
- **Análise:** Issue aberta por bot de segurança — requer atenção imediata.
- **Demanda:** Validação de `session_id` antes de construir paths.

### PRs com movimento relevante

**[#5575](https://github.com/HKUDS/nanobot/pull/5575)** — refactor(memory): remove consolidation ratio
- Remove configuração `consolidationRatio` e архивирует deterministicamente prefixos antigos mantendo os 8 mensajes mais recentes + user turn.

**[#5571](https://github.com/HKUDS/nanobot/pull/5571) + [#5570](https://github.com/HKUDS/nanobot/pull/5570)** — feat(memory): require explicit recall + pluggable recall backend
- Par de features que mudam fundamentalmente o modelo de memória: recall explícito via tool `recall_memory`, novo backend plugável.

**[#5568](https://github.com/HKUDS/nanobot/pull/5568) + [#5574](https://github.com/HKUDS/nanobot/pull/5574)** — refactor(agent) + refactor(providers)
- `AgentRunner` assume ownership de request fitting; introdução de `ProviderAttempt` imutável com rota explícita — mudança arquitetural significativa.

---

## 5. Bugs e Estabilidade

### Por severidade

| Severidade | Count | Exemplos |
|------------|-------|---------|
| **P1 (Crítica)** | 2 | [#5572](https://github.com/HKUDS/nanobot/pull/5572) *(já fechada)*, [#5571](https://github.com/HKUDS/nanobot/pull/5571) |
| **P2 (Alta)** | ~12 | [#5504](https://github.com/HKUDS/nanobot/pull/5504), [#5382](https://github.com/HKUDS/nanobot/pull/5382), [#5573](https://github.com/HKUDS/nanobot/pull/5573) |
| **Segurança** | 1 | [#5564](https://github.com/HKUDS/nanobot/issues/5564) — path traversal |

### Bugs em destaque

- **[#5382](https://github.com/HKUDS/nanobot/pull/5382)** — `os.replace()` crash no Windows com `PermissionError` durante heartbeat cron job. Confirmado 2x em logs.
- **[#5573](https://github.com/HKUDS/nanobot/pull/5573)** — OAuth tokens expirados no MCP não eram refreshados automaticamente, causando falhas em runtime.
- **[#5338](https://github.com/HKUDS/nanobot/pull/5338)** — Leitura falha do OAuth store sobrescrevia credenciais de outros servers.
- **[#5339](https://github.com/HKUDS/nanobot/pull/5339)** — WebUI podia persistir mensagens descartadas como chat normal.
- **[#4346](https://github.com/HKUDS/nanobot/pull/4346)** *(fechada)* — Vazamento de path de imagens strippadas pelo provider fallback.

**Média de idade dos bugs P2:** ~6-15 dias (indicando backlog ativo mas não estagnado).

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features abertas

| # | Feature | Descrição | Sinal estratégico |
|---|---------|-----------|-------------------|
| [#5561](https://github.com/HKUDS/nanobot/pull/5561) | spawn presets allowlist | Model presets por spawn atrás de `spawnPresets` allowlist | Configurabilidade avançada de spawn |
| [#5537](https://github.com/HKUDS/nanobot/pull/5537) | session focus persistente | Durable `focus` no session metadata sobrevivendo restarts | Continuidade conversacional |
| [#5563](https://github.com/HKUDS/nanobot/pull/5563) *(fechada)* | clipboard images no TUI | Suporte a colar imagens no composer TUI | Expansão de input multimodal |

### Evolução do modelo de memória

O conjunto de PRs [#5570](https://github.com/HKUDS/nanobot/pull/5570), [#5571](https://github.com/HKUDS/nanobot/pull/5571), [#5575](https://github.com/HKUDS/nanobot/pull/5575), [#5565](https://github.com/HKUDS/nanobot/pull/5565) forma um **grande refactor do subsistema de memória**:

1. `MemoryBackend` plugável (ingest/recall)
2. Recall explícito via tool — memória não é mais injetada automaticamente no system prompt
3. `MemoryArchiver` extraído de `SessionManager`
4. `consolidationRatio` removido em favor de archive determinístico

**Interpretação:** A equipe está movendo o projeto para um modelo de memória mais controlado e explícito, possivelmente preparando terreno para backends de memória customizáveis (vetorial, etc).

---

## 7. Resumo de Feedback dos Usuários

### Dores identificadas (via issues)

1. **UX fragmentada em canais (Feishu):** Usuários recebem múltiplas mensagens para uma única interação — experiência confusa. Issue [#5567](https://github.com/HKUDS/nanobot/issues/5567) captura essa dor.

2. **Concurrency restritiva:** WebUI sofria com gargalo de concurrency padrão muito baixo — [já corrigido](https://github.com/HKUDS/nanobot/pull/5572).

3. **Persistência de sessões deletadas:** Mensagens atrasadas recriavam sessões já deletadas — [em correção](https://github.com/HKUDS/nanobot/pull/5483).

### Sinais de satisfação

- Atividade intensa de PRs indica comunidade engajada
- Múltiplos contribuidores ativos (chengyongru, KDB-Wind, BearMett, etc.)
- Bugs sendo reportados e corrigidos com ciclo rápido

---

## 8. Backlog que Merece Atenção

| # | Tipo | Idade | Situação | Ação Recomendada |
|---|------|-------|----------|------------------|
| [#5382](https://github.com/HKUDS/nanobot/pull/5382) | bug (Windows) | ~15 dias | Open | Priorizar — crash confirmado em produção |
| [#5338](https://github.com/HKUDS/nanobot/pull/5338) | bug (OAuth) | ~17 dias | Open | Priorizar — risco de sobrescrita de credenciais |
| [#5379](https://github.com/HKUDS/nanobot/pull/5379) | bug (memory) | ~15 dias | Open (conflict) | Resolver conflitos para não estagnar |
| [#5339](https://github.com/HKUDS/nanobot/pull/5339) | bug (webui) | ~17 dias | Open | Revisão pendente |
| [#5564](https://github.com/HKUDS/nanobot/issues/5564) | security | 1 dia | Open | **Atenção imediata** — path traversal |
| [#5396](https://github.com/HKUDS/nanobot/pull/5396) | refactor (Pyright) | ~14 dias | Open (conflict) | Resolver conflitos |

---

## Métricas Consolidada do Dia

| Indicador | Valor |
|-----------|-------|
| Issues abertas/ativas | 2 |
| PRs abertos | 19 |
| PRs fechados/mergeados | 9 |
| Novas releases | 0 |
| Bugs P1 em aberto | 0 (1 corrigido) |
| Bugs P2 em aberto | ~12 |
| Issues de segurança | 1 |
| Features merged | 2 (TUI clipboard, subagent queueing) |

**Veredicto de saúde:** 🟢 **Projeto saudável.** Atividade intensa, ciclo de PRs rápido, bugs sendo fechados, e evolução arquitetural positiva no subsistema de memória. Atenção necessária para: (1) security issue #5564 e (2) conflitos em PRs com 15+ dias.

---

*Relatório gerado automaticamente com base nos dados do GitHub de [HKUDS/nanobot](https://github.com/HKUDS/nanobot) em 2026-08-28.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-08-28

---

## 1. Panorama do Dia

O projeto Hermes Agent mantém um nível de atividade muito intenso. Nas últimas 24 horas foram atualizadas **50 issues** (45 abertas/ativas, 5 fechadas) e **50 PRs** (38 abertos, 12 merged/fechados). A atividade recente é impulsionada pela release **v0.20.6** (v2026.8.27), que consolida ~525 PRs desde a v0.20.5 — sinalizando um ciclo de desenvolvimento acelerado. Entre os destaques negativos, dois bugs **P0** foram abertos hoje: um relacionado ao rebuild do histórico do Studio Bridge (que quebra prompt-cache hits) e outro sobre system prompts nulos em group chats (que força rebuilds constantes). A prevalência de issues sobre estabilidade de sessões e problemas no desktop app indica que a experiência do usuário final ainda é a principal dor do projeto.

---

## 2. Lançamentos

### v2026.8.27 — Hermes Agent v0.20.6

| Campo | Detalhe |
|---|---|
| **Data** | 27 de agosto de 2026 |
| **Tipo** | Patch release |
| **Tag** | `v2026.8.27` |
| **Consolidação** | ~525 PRs merged desde v0.20.5 |

**Mudanças incluídas:** Por se tratar de uma release de consolidação ("roll-up"), a v0.20.6 incorpora todas as correções e melhorias acumuladas no período. Isso inclui:

- Refinamentos no desktop app (resolução de problemas de boot, UI e estabilidade de sessões)
- Melhorias no CLI e fluxos de instalação (especialmente para Linux com uv e macOS)
- Correções no gateway e event loop
- Atualizações em providers e integrações (Discord, Telegram, MCP)

**Breaking changes:** Não identificadas. A release é descrita como estável para downstream consumers (Docker images, hosted deployments, fresh installs).

**Notas de migração:** Nenhuma breaking change documentada. Usuários de imagens Docker ou instalações managed podem fazer pull normal.

---

## 3. Progresso do Projeto

### PRs fechadas/merged nas últimas 24h

| # | PR | Tipo | Severidade | Impacto |
|---|---|---|---|---|
| [#96832](https://github.com/NousResearch/hermes-agent/pull/96832) | fix(cron): manual-run prompt não mais perdido no relay-fronted gateway | bug | P2 | **Crítico para automações** — o prompt transiente de `cronjob(action='run', prompt=...)` agora sobrevive ao relay-fronted gateway. Antes era silenciosamente descartado. |
| [#57687](https://github.com/NousResearch/hermes-agent/pull/57687) | fix(tui_gateway): close slash_worker on WS detach | bug | P2 | **Memória** — fecha subprocessos `slash_worker` (~13 MB cada) ao detach de sessão WebSocket, evitando leak até o TTL reaper. |
| [#96767](https://github.com/NousResearch/hermes-agent/pull/96767) | feat(config): add --quiet para config set | feature | P3 | **DX/Automação** — `hermes config set` agora aceita `--quiet`, permitindo scripting sem output. |
| [#96847](https://github.com/NousResearch/hermes-agent/pull/96847) | fmt(js): auto-fix lint | refactor | P3 | **Manutenção** — formatação automática via `npm run fix`, auto-merge após CI. |
| [#95596](https://github.com/NousResearch/hermes-agent/pull/95596) | re-land: dylib-complete macOS TCC interpreter anchor | feature | P2 | **macOS** — re-land do anchor libpython completo, atendendo aos critérios documentados após a reversão anterior. |

**Avanços-chave:**

- **Automação de cron jobs** agora é confiável em topologias relay-fronted (Hermes Cloud), um cenário de uso crítico para usuários enterprise.
- **Vazamento de memória** no TUI gateway был corrigido, melhorando a estabilidade em sessões longas.
- **Suporte a scripting** para `config set` remove uma fricção comum em fluxos automatizados.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários)

| # | Título | Comentários | 👍 | Severidade | Tema |
|---|---|---|---|---|---|
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | Skills index is stale or degraded | **109** | 0 | P3 | Index 29.8h old (limite 26h); Skills Hub quebrado |
| [#92095](https://github.com/NousResearch/hermes-agent/issues/92095) | hermes desktop writes broken .desktop Exec= on uv installs | **11** | 0 | P2 | symlink dereferencing no install Linux |
| [#52339](https://github.com/NousResearch/hermes-agent/issues/52339) | Terminal update leaves /Applications/Hermes.app stale | **9** | 1 | P2 | Split-brain state no macOS update |
| [#21889](https://github.com/NousResearch/hermes-agent/issues/21889) | feat(discord): add delete_message for cleanup_progress | **7** | 3 | P3 | Limpeza de mensagens de progresso no Discord |
| [#96183](https://github.com/NousResearch/hermes-agent/issues/96183) ✅ | Desktop Bot Chat stale messages after reopen | **5** | 0 | P2 | Mensagens offline não aparecem até restart (fechada) |

### Análise dos temas quentes

**🔴 Skills Hub degradado (#66616)** — Com 109 comentários, é o issue mais discutido. O índice de skills está 29,8h desatualizado (limite: 26h). A comunidade reporta que o Skills Hub em `/docs/skills` depende de `/docs/api/skills-index.json`, que é reconstruído por um workflow cron (6/18 UTC). O problema afeta a descoberta de skills e é classificado P3, mas o volume de comentários sugere impacto real na produtividade.

**🟡 Instalações Linux/uv quebradas (#92095, #90292)** — Dois issues separados (ambos P2) sobre o `.desktop` file gerado no Linux com uv. O `Exec=` aponta para o interpreter uv "bare" em vez do venv Python, causando falha silenciosa. Este é um problema de DX significativo para novos usuários Linux.

**🟡 Discord cleanup (#21889)** — Pedido de feature com 3 👍 pedindo `delete_message` para limpar indicadores de progresso. A gateway já suporta `cleanup_progress: true`, mas o Discord não implementa a deleção, poluindo canais com mensagens temporárias.

---

## 5. Bugs e Estabilidade

### Por severidade

#### P0 — Críticos (2 novos hoje)

| # | Título | Status | Detalhe |
|---|---|---|---|
| [#96348](https://github.com/NousResearch/hermes-agent/issues/96348) | Studio bridge history rebuild skips empty-content assistant messages | **OPEN** | Bridge reconstrui história e divide tool-call em duas rows,dropando tool results. Resultado: 0% prompt-cache hits em novos turns. |
| [#96570](https://github.com/NousResearch/hermes-agent/issues/96570) | Group chat sessions: stored system prompt is null every turn | **OPEN** | Sistema rebuilda prompt do zero a cada turn; prefix cache sempre erra. Impacto direto em custo e latência. |

#### P1 — Altos (2 novos hoje)

| # | Título | Status | Detalhe |
|---|---|---|---|
| [#96433](https://github.com/NousResearch/hermes-agent/issues/96433) | Desktop boot fails: READY sentinel lands on stderr → 90s timeout | **OPEN** | Rebind de `sys.stdout` no import de `tui_gateway.server` faz desktop timeout mesmo com backend saudável. |
| [#96851](https://github.com/NousResearch/hermes-agent/pull/96851) | fix(gateway): stop blocking the event loop | **OPEN (PR)** | Corrigir chamadas bloqueantes dentro `async def` que congelam o gateway inteiro. |

#### P2 — Medios (destaques)

| # | Título | Status | Detalhe |
|---|---|---|---|
| [#92095](https://github.com/NousResearch/hermes-agent/issues/92095) | .desktop Exec broken on uv installs | OPEN | Venv symlink dereference causa falha silenciosa no Linux |
| [#88858](https://github.com/NousResearch/hermes-agent/issues/88858) | MCP trust gate: readOnlyHint never detected | OPEN | Todo tool é classificado como write-capable com `trust: untrusted` |
| [#89157](https://github.com/NousResearch/hermes-agent/issues/89157) | Numbers display as ^[[57400u in Linux terminal | OPEN | Escape sequence incorreto para input numérico |
| [#96800](https://github.com/NousResearch/hermes-agent/issues/96800) | Desktop UI sluggish on AMD RDNA4 + Wayland | OPEN | Renderização lenta (não é latência de inferência) |
| [#96834](https://github.com/NousResearch/hermes-agent/issues/96834) | Workspace cwd persists globally across profiles | OPEN | cwd de um profile vaza para outro em conexões locais |

#### P3 — Baixos/cosméticos

| # | Título | Status | Detalhe |
|---|---|---|---|
| [#79265](https://github.com/NousResearch/hermes-agent/issues/79265) | Desktop logs stack trace for expected 404 | OPEN | poluição de logs com erros esperados |
| [#96780](https://github.com/NousResearch/hermes-agent/issues/96780) | Preview pane Browser tab close button overlaps label | OPEN | UI bug no desktop |

### Regressões recentes fechadas

- ✅ [#96183](https://github.com/NousResearch/hermes-agent/issues/96183) — Bot Chat stale messages after reopen
- ✅ [#96155](https://github.com/NousResearch/hermes-agent/issues/96155) — Native Responses preflight compression bug

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features abertas

| # | Título | Severidade | Área | Sinal estratégico |
|---|---|---|---|---|
| [#96692](https://github.com/NousResearch/hermes-agent/issues/96692) | Unified slash-command registry across all Hermes surfaces | P3 | CLI/Gateway/TUI/Desktop/Plugins | **Consolidação de DX** —Uma especificação para unificar comandos slash em todo o ecossistema. |
| [#96842](https://github.com/NousResearch/hermes-agent/pull/96842) | Configurable group chat round cap + model-aware limits | P3 | Desktop/Agent | **Controle de custo** — Limite configurável de rodadas por modelo, com guard de budget de tokens. |
| [#96858](https://github.com/NousResearch/hermes-agent/issues/96858) | Official mirror/update channel for China mainland users | P3 | Install/Update | **Expansão de mercado** — Proposta de espelhos oficiais para China, argumentando valor estratégico. |
| [#96795](https://github.com/NousResearch/hermes-agent/issues/96795) | Memory write governance — explicit-only writes and capacity warnings | P3 | Memory/Agent | **Governança de memória** — Controle nativo sobre writes de memória pelo agente. |
| [#33638](https://github.com/NousResearch/hermes-agent/issues/33638) | Project-scoped memory — filter MEMORY.md by cwd | P3 | Memory | **Context awareness** — Injeção seletiva de memória por projeto. |
| [#79139](https://github.com/NousResearch/hermes-agent/pull/79139) | Per-chat native-mention-only gating | P3 | Gateway/Multi-platform | **Segurança/Moderation** — Gating por chat para mention patterns. |

### Análise de sinais de roadmap

O volume de features ligadas a **custo e eficiência** (group chat round cap, memory governance, prompt-cache optimization) sugere que o time está priorizando escalabilidade de custo. A especificação de **slash-command unificado** (#96692) indica intenção de convergência de interfaces. O pedido de **mirror para China** (#96858) mostra demanda orgânica de mercado emergente — uma decisão estratégica que pode impactar distribuição.

---

## 7. Resumo de Feedback dos Usuários

### Dores reais identificadas

**1. Experiência de desktop instável no Linux/macOS**
- Instaladores Linux com uv geram `.desktop` broken (#92095, #90292)
- Desktop app no macOS apresenta race condition no stdout listener (#96792, #96433)
- UI sluggish em GPUs AMD RDNA4 + Wayland (#96800)
- Bot Chat não mostra mensagens offline até restart (#96183 — resolvido)

**2. Session state frágil em topologias avançadas**
- System prompt null em group chats → rebuild constante → custo ↑
- Workspace cwd vaza entre perfis em conexões locais (#96834)
- Profiles arquivados são recriados pelo cron ticker (#94590)

**3. Fluxos de automação quebrados**
- Prompt de cron manual-run perdido em relay-fronted (#96832 — resolvido)
- Cron delivery não chega no Discord em Hermes Cloud (#86249)
- `config set` não tem flag `--quiet` para scripting (#96767 — resolvido)

**4. Skills Hub degradado**
- Índice de skills 29.8h desatualizado (#66616) — Impacta descoberta e produtividade

### Cenários de uso em evidência

- **Uso multi-perfil**: Usuários com múltiplos perfis no desktop experimentam vazamento de estado entre perfis (cwd, sessões)
- **Group chat com modelos free**: Cenários com rodadas ilimitadas em modelos free, causando custos inesperados
- **Automação enterprise via relay**: Cron jobs e webhooks em topologias cloud relay apresentam gaps de delivery

---

## 8. Backlog que Merece Atenção

### Issues sem resposta ou estagnadas

| # | Título | Criado | Atualizado | Comentários | Severidade | Observação |
|---|---|---|---|---|---|---|
| [#33638](https://github.com/NousResearch/hermes-agent/issues/33638) | Project-scoped memory filter | 2026-05-28 | 2026-08-28 | 2 | P3 | Feature antiga (3 meses), sem movimento. Relevante para contexto de projeto. |
| [#21889](https://github.com/NousResearch/hermes-agent/issues/21889) | Discord delete_message for cleanup | 2026-05-08 | 2026-08-28 | 7 | P3 | Pedido antigo com 3 👍, backlogado. |
| [#74933](https://github.com/NousResearch/hermes-agent/issues/74933) | Hindsight rejects shared observation scope | 2026-07-30 | 2026-08-28 | 3 | P3 | Memory fragmentation; sem atenção aparente. |
| [#52339](https://github.com/NousResearch/hermes-agent/issues/52339) | Terminal update leaves Hermes.app stale | 2026-06-25 | 2026-08-28 | 9 | P2 | 2+ meses; macOS split-brain. |
| [#

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-08-28

---

## 1. Panorama do Dia

O projeto PicoClaw apresenta alta atividade de manutenção no dia de hoje, com **8 PRs atualizadas** e **3 issues** processadas nas últimas 24h. A atividade principal concentra-se em atualizações de dependências Go (AWS SDK, Anthropic SDK, mautrix) e merges de correções acumuladas. Uma PR aberta (#3347) propõe uma correção significativa para o problema de lentidão na interface web. Não houve lançamento de novas versões, e a issue ativa mais relevante (#3287) aguarda decisão sobre suporte a mensagens longas em IRC.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto não publicou novas versões desde o período analisado. Recomenda-se monitorar o repositório para eventuais publicações futuras.

---

## 3. Progresso do Projeto

### PRs Fechadas/Merged Relevantes

| # | Título | Status | Impacto |
|---|--------|--------|---------|
| [#1555](https://github.com/sipeed/picoclaw/pull/1555) | fix: merge PR #1390 #1389 #1383 #1381 | Fechada | Consolida múltiplas correções pendentes |
| [#1549](https://github.com/sipeed/picoclaw/pull/1549) | fix: merge PR #1448 #1447 #1446 #1444 | Fechada | Consolida múltiplas correções pendentes |
| [#3347](https://github.com/sipeed/picoclaw/pull/3347) | fix laggy interface | **Aberta** | Correção de performance na UI web |

### Atualizações de Dependências (via Dependabot)

Todas as 5 dependências Go foram atualizadas com seus novos patches:

- **aws-sdk-go-v2/service/bedrockruntime**: `1.53.3` → `1.57.1`
- **aws-sdk-go-v2/config**: `1.32.25` → `1.32.35`
- **aws-sdk-go-v2**: `1.42.0` → `1.43.4`
- **anthropic-sdk-go**: `1.55.1` → `1.62.0`
- **maunium.net/go/mautrix**: `0.27.0` → `0.29.0`

---

## 4. Temas Quentes da Comunidade

### Issue com Maior Engajamento

**[#3287](https://github.com/sipeed/picoclaw/issues/3287)** — [Feature] Better support long messages in IRC
- **Estado:** Aberta
- **Comentários:** 8
- **Autor:** superuser-does
- **Relevância:** Solicita que mensagens IRC longas (quebra automática em 512 bytes) sejam tratadas como uma mensagem coesa pelo PicoClaw.

> **Análise:** Este é o tema mais discutido da semana com 8 comentários. A demanda reflete uso real em ambientes IRCv3 onde a fragmentação de mensagens é comum.

### Issues Fechadas (Stale) com Potencial Roadmap

| # | Título | Status | Tema |
|---|--------|--------|------|
| [#3331](https://github.com/sipeed/picoclaw/issues/3331) | Support any model for /audio/transcriptions | Fechada (stale) | Flexibilidade de ASR |
| [#3330](https://github.com/sipeed/picoclaw/issues/3330) | Support dynamic model override in delegate/spawn/subagent tools | Fechada (stale) | Flexibilidade de agents |

---

## 5. Bugs e Estabilidade

### PR Aberta — Correção de Bug Crítico

**[#3347](https://github.com/sipeed/picoclaw/pull/3347)** — fix laggy interface
- **Autor:** iMilnb
- **Severidade:** Alta (impacta UX)
- **Descrição:** Corrige lentidão na interface web quando há muito texto na área de chat. Testado em desktop e mobile (navegador Brave).
- **Nota:** PR aberta, aguardando revisão.

### Observações de Estabilidade

- Todas as dependências foram atualizadas para versões mais recentes (incluindo correções de segurança nas libs AWS e mautrix).
- Não foram reportados crashes ou regressões nas últimas 24h.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Feature Request Ativa

**[#3287](https://github.com/sipeed/picoclaw/issues/3287)** — Suporte a mensagens longas no IRC
- **Cenário:** IRC tem limite de 512 bytes; mensagens longas são automaticamente divididas pelos clientes.
- **Demanda:** Tratar mensagens fragmentadas como uma única mensagem coesa.
- **Complexidade:** Intermediária (requer lógica de reagrupamento).

### Features com Demanda (Stale)

1. **Suporte a qualquer modelo para transcrição** ([#3331](https://github.com/sipeed/picoclaw/issues/3331))
   - Atualmente restrito a modelos "*-whisper-*"
   - Proposta: flag `whisper-transcription: true` no config

2. **Override dinâmico de modelo em delegate/spawn/subagent** ([#3330](https://github.com/sipeed/picoclaw/issues/3330))
   - Atualmente modelos são determinados estaticamente
   - Demanda por flexibilidade em tempo de chamada

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Dor | Evidência | Severidade |
|-----|-----------|------------|
| Interface web lenta com muito texto | [#3347](https://github.com/sipeed/picoclaw/pull/3347) | Alta |
| Fragmentação de mensagens IRC | [#3287](https://github.com/sipeed/picoclaw/issues/3287) | Média |
| Restrição a modelos Whisper para ASR | [#3331](https://github.com/sipeed/picoclaw/issues/3331) | Média |
| Falta de flexibilidade de modelo em agents | [#3330](https://github.com/sipeed/picoclaw/issues/3330) | Média |

### Cenários de Uso Identificados

- **Uso em IRC:** Usuários interagem via IRCv3 com o assistente de IA, gerando necessidade de tratar mensagens fragmentadas.
- **Flexibilidade de Modelos:** Usuários desejam trocar modelos de IA por necessidade de custo/performance ou uso de APIs proprietárias.
- **Transcrição de Áudio:** Demanda por usar modelos mais recentes além do Whisper para transcrição.

---

## 8. Backlog que Merece Atenção

### Issues sem Resposta há >30 dias

| # | Título | Criado | Estado | Prioridade |
|---|--------|--------|--------|------------|
| [#3331](https://github.com/sipeed/picoclaw/issues/3331) | Support any model for /audio/transcriptions | 2026-08-13 | Fechada (stale) | Medium |
| [#3330](https://github.com/sipeed/picoclaw/issues/3330) | Dynamic model override | 2026-08-13 | Fechada (stale) | Medium |
| [#3287](https://github.com/sipeed/picoclaw/issues/3287) | Long messages in IRC | 2026-07-22 | Aberta | Medium-High |

### Recomendações de Ação

1. **Revisar PR #3347** — Correção de UI com potencial impacto positivo na experiência do usuário.
2. **Reabrir/detalhar issues stale #3331 e #3330** — Features com demanda clara da comunidade, merecem planejamento de roadmap.
3. **Avaliar issue #3287** — 8 comentários indicam interesse significativo; definir escopo e viabilidade técnica.

---

**Relatório gerado em:** 2026-08-28  
**Fonte:** Dados GitHub do repositório [sipeed/picoclaw](https://github.com/sipeed/picoclaw)

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-08-28

---

## 1. Panorama do dia

O projeto IronClaw demonstra **atividade intensa e bem equilibrada** em 28 de agosto de 2026. Nas últimas 24h, 50 issues e 46 PRs receberam atualizações, com 31 PRs merged/fechados — evidenciando um ciclo de desenvolvimento saudável. O destaque do dia é a **promoção da release 1.4.0** após o RC da versão anterior, consolidando 81 commits de melhorias em notificação durável, compactação de contexto e correções de ferramentas. A comunidade debate ativamente problemas de performance em ferramentas (especialmente Gmail) e a arquitetura de sandbox persistentes para execução de agentes.

---

## 2. Lançamentos

### ✅ ironclaw-v1.4.0 (2026-08-27)
**Promovida de RC para stable via [PR #7957](https://github.com/nearai/ironclaw/pull/7957)**

**Mudanças desde a RC:**
- **Breaking changes:** Nenhum — a promoção preserva o scope completo do RC sem alterações de código
- **Notas de migração:** Não aplicável para upgrade da RC

**Destaques da release (81 commits desde v1.3.0):**
- **Inbox de notificações durável:** Publica resultados autoritativos e gates acionáveis em inbox por usuário, exposto pelo centro de notificações da WebUI ([PR #7900](https://github.com/nearai/ironclaw/pull/7900))
- **Falhas de automação pré-execução:** Notificações `RunFailed` publicadas quando automação falha permanentemente antes da submissão ([PR #7899](https://github.com/nearai/ironclaw/pull/7899))
- **Saída semântica Gmail:** Normalização de respostas `gmail.get_message` com conversão HTML→Markdown e headers semânticos ([PR #7944](https://github.com/nearai/ironclaw/pull/7944))
- **Barreira de contexto de compactação cumulativa:** Persistência de saídas de compactação como barreiras cumulativas em vez de resumos independentes ([PR #7954](https://github.com/nearai/ironclaw/pull/7954))
- **Rejeição de rewrites memory stales:** Hash SHA-256 para detecção de conflitos em `ironclaw.memory.write` ([PR #7907](https://github.com/nearai/ironclaw/pull/7907))
- **Fix Slack broadcast mention:** `app_mention` agora liberado do gate de subtipos ([PR #7941](https://github.com/nearai/ironclaw/pull/7941))

---

## 3. Progresso do Projeto

### PRs merged/fechados hoje (principais)

| PR | Tamanho | Escopo | Impacto |
|---|---|---|---|
| [#7957](https://github.com/nearai/ironclaw/pull/7957) | XS | Release | Promoção 1.4.0→stable |
| [#7944](https://github.com/nearai/ironclaw/pull/7944) | XL | Gmail | Saída semântica com HTML→Markdown |
| [#7954](https://github.com/nearai/ironclaw/pull/7954) | L | Threads | Compactação cumulativa |
| [#7907](https://github.com/nearai/ironclaw/pull/7907) | L | Memory | Proteção CAS para rewrites |
| [#7941](https://github.com/nearai/ironclaw/pull/7941) | XL | Slack | Broadcast mentions corrigidos |
| [#7904](https://github.com/nearai/ironclaw/pull/7904) | M | Tools | Confiabilidade do shell |
| [#7906](https://github.com/nearai/ironclaw/pull/7906) | L | Deps | 13 updates (uuid, base64, toml) |

**Avanços arquiteturais significativos:**
- **Cumulative compaction barriers** ([#7954](https://github.com/nearai/ironclaw/pull/7954)): Reduz contexto redundante em sessões longas, impactando diretamente custos de inference
- **Memory conflict detection** ([#7907](https://github.com/nearai/ironclaw/pull/7907)): Resolve race condition em rewrites de documentos
- **Gmail semantic output** ([#7944](https://github.com/nearai/ironclaw/pull/7944)): Melhora drasticamente a utilidade de emails HTML no contexto

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários)

**🔥 #7891** — `[bug, medium, performance]` **"perf(extensions): unprojected capability payloads + blind 24 KiB head-slice cost 14.3s of inference"**
- **7 comentários** | Autor: henrypark133
- **Problema crítico:** Duas chamadas `gmail.get_message` custaram **19.7s de turn**, sendo 19.2s apenas de inference
- **Causa raiz:** 49,152 bytes de MIME headers brutos injetados no prompt sem necessidade
- **Relevância:** Demonstra custo exponencial de inputs não otimizados em ferramentas de email
- [Link](https://github.com/nearai/ironclaw/issues/7891)

**🔥 #7824** — **"Context projection: Pi-style compaction barrier, structured summaries"**
- **4 comentários** | Autor: serrrfirat
- **Problema medido:** Thread history full replay custou **$10.31** vs baseline de **$2.52** (4x mais caro)
- **Benchmark:** 227.7M input tokens vs 55.1M no baseline (PinBench, 147 tasks)
- **Relevância:** Questão central de custo-eficiência do agente
- [Link](https://github.com/nearai/ironclaw/issues/7824)

**🔥 #6986** — `[p0, reborn, performance]` **"Cache: keep advertised tool array byte-identical"**
- **3 comentários** | Parte do programa pi-harness
- **Problema:** Progressive disclosure promove ferramentas deferidas mid-run, causando variação no array de ferramentas
- **Relevância:** Afeta caching e determinismo de respostas
- [Link](https://github.com/nearai/ironclaw/issues/6986)

**🔥 #7903** — `[high, epic]` **"Decision spike: persistent per-user sandboxed executor behind trusted host kernel"**
- **1 comentário** | Autor: serrrfirat
- **Proposta:** Mover executor canônico para sandbox Docker persistente
- **Relevância:** Arquitetura de segurança e isolamento
- [Link](https://github.com/nearai/ironclaw/issues/7903)

### PRs em revisão com atenção

| PR | Escopo | Status |
|---|---|---|
| [#7943](https://github.com/nearai/ironclaw/pull/7943) | CI: compile integration batches once | XL, medium risk |
| [#7961](https://github.com/nearai/ironclaw/pull/7961) | Telemetry: scoped tenant BI | XL, medium risk |
| [#7908](https://github.com/nearai/ironclaw/pull/7908) | Spike: canonical executor in persistent sandbox | XL, low risk |
| [#7958](https://github.com/nearai/ironclaw/pull/7958) | Learning: shared review router | XL, low risk |

---

## 5. Bugs e Estabilidade

### Bugs reportados (por severidade)

**🔴 Alta severidade / impactando produção:**

| Issue | Escopo | Descrição | Link |
|---|---|---|---|
| #7964 | MCP | Tool catalog grande publica **zero tools** ao invés de truncar | [Link](https://github.com/nearai/ironclaw/pull/7964) (PR aberto) |
| #7955 | Telegram | Erro genérico "Something went wrong" quando admin não configurou api_id/api_hash | [Link](https://github.com/nearai/ironclaw/issues/7955) |
| #7956 | Telegram | Comando /start mostra inventário ao invés de pairing notice | [Link](https://github.com/nearai/ironclaw/issues/7956) |

**🟡 Média severidade:**

| Issue | Escopo | Descrição | Link |
|---|---|---|---|
| #6590 | Windows | `serve` falha com "workspace root must not overlap default skill root" | [Link](https://github.com/nearai/ironclaw/issues/6590) |
| #7891 | Gmail | 49KB MIME headers geram 14s de inference desnecessária | [Link](https://github.com/nearai/ironclaw/issues/7891) |
| #7776 | Memory | `memory.write` pode sobrescrever writes concorrentes silenciosamente | [Link](https://github.com/nearai/ironclaw/issues/7776) (CLOSED - fix em #7907) |

**🟢 Baixa severidade / cosmetic:**

| Issue | Escopo | Descrição | Link |
|---|---|---|---|
| #7960 | Gmail | HTML complexity não enforceada durante construção DOM | [Link](https://github.com/nearai/ironclaw/issues/7960) |
| #7922 | Tools | `apply_patch` declarado como JSON-schema ao invés de grammar-constrained | [Link](https://github.com/nearai/ironclaw/issues/7922) |

**Ação recomendada:** Priorizar [PR #7964](https://github.com/nearai/ironclaw/pull/7964) para merge urgente — MCP servers retornando 0 ferramentas é falha silenciosa grave.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Epics e Features em discussão

**🎯 Roadmap: Self-learning pipeline**
- [Issue #7864](https://github.com/nearai/ironclaw/issues/7864) — **Epic: self-learning write pipeline — store memory from turns**
  - Observar eventos autorizados, classificar requests de memória, falhas, recuperações
  - Status: Em discussão ativa (1 comentário, 2026-08-27)

**🎯 Roadmap: Voice interface**
- [Issue #7867](https://github.com/nearai/ironclaw/issues/7867) — **Voice-to-text in WebUI composer**
  - WebUI atualmente keyboard-only; proposta de streaming de voz
  - Blocker identificado: não é tier de modelo, é UX

**🎯 Feature: Cross-conversation memory**
- [Issue #7276](https://github.com/nearai/ironclaw/issues/7276) — **Auto-promote useful conversation facts into durable memory**
  - Expectativa de usuários: info fornecida em conversa disponível em sessões futuras
  - Status: Em discussão (2 comentários)

**🎯 Feature: Persistent sandboxed executor**
- [Issue #7903](https://github.com/nearai/ironclaw/issues/7903) — **Decision spike: persistent per-user sandboxed executor**
  - Mover executor canônico para Docker sandbox persistente
  - Preserva boundary de autoridade, reduz plumbing host→sandbox

**🎯 Enhancement: Learned skill configuration**
- [PR #7920](https://github.com/nearai/ironclaw/pull/7920) (merged) — Configuração de learned-skill extraction nas Inference settings
  - Usuários agora podem habilitar feature que antes dependia de variável de ambiente não documentada

### Novas features merged hoje
- **Gmail semantic output** ([#7944](https://github.com/nearai/ironclaw/pull/7944)): HTML→Markdown, headers semânticos
- **GitHub file content decoding** ([#7963](https://github.com/nearai/ironclaw/pull/7963)): Base64 decode no producer
- **Slack broadcast mention fix** ([#7941](https://github.com/nearai/ironclaw/pull/7941)): `app_mention` liberado

---

## 7. Resumo de Feedback dos Usuários

### Dores reais identificadas

**1. Latência inesperada em ferramentas de email (crítica)**
- Usuários experimentando turns de **20 segundos** com Gmail
- Custo financeiro direto: $10.31 por 147 tasks em benchmark vs $2.52 baseline
- **Sentimento:** Frustração com custo-eficiência

**2. Configuração de features obscura**
- Learned-skill extraction invisível sem variável de ambiente
- [PR #7920](https://github.com/nearai/ironclaw/pull/7920) endereça isso — progresso positivo

**3. Integração Telegram problemático para admins**
- Erro genérico quando credenciais não configuradas (#7955)
- Fluxo de pairing confuso (#7956)
- **Sentimento:** Usuários novos abandonam durante setup

**4. Necessidade de memória persistente entre sessões**
- Expectativa: informações fornecidas em uma conversa disponíveis na próxima
- Realidade atual: transcripts ficam em namespace de thread curto-prazo
- [Issue #7276](https://github.com/nearai/ironclaw/issues/7276) captura isso como feature request

**5. Interface voice-first desejada**
- Comparação com Slack/Telegram que já suportam voice
- WebUI como outlier keyboard-only
- [Issue #7867](https://github.com/nearai/ironclaw/issues/7867)

### Positivos
- Notificação durável ([#7900](https://github.com/nearai/ironclaw/pull/7900)) bem recebida
- Compactação cumulativa ([#7954](https://github.com/nearai/ironclaw/pull/7954)) resolve problema de custo em threads longas
- GitHub tool improvements ([#7963](https://github.com/nearai/ironclaw/pull/7963), [#7965](https://github.com/nearai/ironclaw/pull/7965)) aumentam utilidade para desenvolvedores

---

## 8. Backlog que Merece Atenção

### Issues antigas sem resolução ou atenção recente

| Issue | Idade | Escopo | Por que merece atenção |
|---|---|---|---|
| [#6590](https://github.com/nearai/ironclaw/issues/6590) | **36 dias** | Windows/serve | Bloqueia desenvolvimento Windows local; sem comentários desde 2026-08-27 |
| [#2950](https://github.com/nearai/ironclaw/issues/2950) | **126 dias** | LLM/refactoring | Split de `normalize_schema_strict()` pendente; impacta manutenibilidade |
| [#7276](https://github.com/nearai/ironclaw/issues/7276) | **22 dias** | Memory/epic | Feature request com 2 comentários; espera-se mais debate antes de sprint |
| [#6986](https://github.com/nearai/ironclaw/issues/6986) | **27 dias** | Cache/p0 | Prioridade P0; 3 comentários; ainda em aberto |

### Issues aguardando review técnico

| Issue | Idade | Escopo | Status |
|---|---|---|---|
| [#7864](https://github.com/nearai/ironclaw/issues/7864) | 3 dias | Epic/learning | Aguardando input da comunidade |
| [#7867](https://github.com/nearai/ironclaw/issues/7867) | 3 dias | Voice/epic | Aguardando design proposal |

### PRs parados em review

| PR | Idade | Tamanho | Bloqueio |
|---|---|---|---|
| [#7943](https://github.com/nearai/ironclaw/pull/7943) | 1 dia | XL | CI/compilation batch; precisa review |
| [#7961](https://github.com/nearai/ironclaw/pull/7961) | 1 dia | XL | Telemetry; risco medium; precisa review |
| [#7908](https://github.com/nearai/ironclaw/pull/7908) | 2 dias | XL | Spike sandbox; decisão arquitetural pendente |

---

## Métricas de Saúde do Projeto

| Indicador | Valor | Status |
|---|---|---|
| Issues ativas (24h) | 30 | ✅ Saudável |
| PRs abertos (24h) | 15 | ✅ Equilibrado |
| PRs merged (24h) | 31 | ✅ Muito ativo |
| Release status | 1.4.0 stable | ✅ Atualizado |
| Bugs em produção | 3 críticas | ⚠️ Atenção |
| Backlog >30 dias | 2 issues | ✅ Controlado |

---

*Relatório gerado automaticamente com base em dados do GitHub de 2026-08-28. Para mais detalhes, consulte [nearai/ironclaw](https://github.com/nearai/ironclaw).*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório de Projeto — CoPaw (QwenPaw)
**Data de referência:** 2026-08-28
**Período analisado:** Últimas 24 horas

---

## 1. Panorama do Dia

O projeto apresenta **alta atividade comunitária** com 24 issues e 46 PRs atualizados nas últimas 24h. A ratio de PRs para issues (46:24) evidencia uma equipe de desenvolvimento ativa, com 19 PRs já merged/fechados. O release mais recente continua sendo o 2.2.0-beta.1, com **zero novos releases** hoje — indicando可能 fase de estabilização pré-release. As discussões mais quentes convergem para performance de startup (desktop/instalação), UX de canais (DingTalk, WeCom), e a chegada do **QwenPaw Hub multi-tenant** em 2.2.0. A taxa de resolução de issues está saudável, com 9 fechadas vs. 15 abertas ativas.

---

## 2. Lançamentos

### Nenhum novo release nas últimas 24h

O release mais recente permanece **v2.2.0-beta.1** conforme inferido das issues e PRs (ex: #7364 menciona `2.2.0b1`).

> ⚠️ **Atenção:** O ciclo de releases parece estar em fase de beta. Issues como #7360 (startup 4min) e #7363 (event loop freeze 118-135s) reportadas **no beta 2.2.0b1** indicam que a estabilização ainda está em curso antes do GA.

---

## 3. Progresso do Projeto

### PRs Merged/Closed nas últimas 24h (8 itens relevantes)

| PR | Tipo | Resumo | Impacto |
|----|------|--------|---------|
| [#7354](https://github.com/agentscope-ai/QwenPaw/pull/7354) | fix | Clarifica opção de limpeza de dados no desinstalador Windows (NSIS em 6 idiomas) | UX de desinstalação — reduz suporte |
| [#7343](https://github.com/agentscope-ai/QwenPaw/pull/7343) | fix | Preserva URLs `file://` durante normalização de mídia; cobertura para Unix, Windows, UNC e caminhos encoded | Compatibilidade filesystem |
| [#7353](https://github.com/agentscope-ai/QwenPaw/pull/7353) | fix | Preserva verificação de embedding ao trocar de agente | Estabilidade config de memória |
| [#7365](https://github.com/agentscope-ai/QwenPaw/pull/7365) | docs | Alinha documentação `.env` com design de datasource após #7190 | Documentação |
| [#7371](https://github.com/agentscope-ai/QwenPaw/pull/7371) | docs | Remove PawApp SDK proposal commitado indevidamente na `docs/` | Limpeza de codebase |
| [#7358](https://github.com/agentscope-ai/QwenPaw/pull/7358) | chore | Primeiro PR de contribuidor (CI triggered) | Comunidade |

### PRs Abertos com Alto Impacto

| PR | Tipo | Descrição | Estado |
|----|------|-----------|--------|
| [#7133](https://github.com/agentscope-ai/QwenPaw/pull/7133) | feat | **Integra ReMe 0.4.1.9** com embedding recovery hardening e plugin dependency adaption | Aberto, atualizado 2026-08-28 |
| [#7372](https://github.com/agentscope-ai/QwenPaw/pull/7372) | fix | Unifica runtime Python entre Tauri backend e helper bundled (python-build-standalone) | Aberto — pode resolver #7360/#7023 |
| [#7368](https://github.com/agentscope-ai/QwenPaw/pull/7368) | fix | File Guard permanece ativo em modo OFF; separa File Guard de Tool Guard approval | Segurança — fecha #7362 |
| [#7361](https://github.com/agentscope-ai/QwenPaw/pull/7361) | feat | Paginação de histórico de chat + virtualização do transcript | UX chat longo |
| [#7357](https://github.com/agentscope-ai/QwenPaw/pull/7357) | feat | Toggle de visibilidade de tool calls no chat | UX leitura |
| [#7356](https://github.com/agentscope-ai/QwenPaw/pull/7356) | feat | Chat scroll lock durante streaming | UX leitura |
| [#6874](https://github.com/agentscope-ai/QwenPaw/pull/6874) | feat | Timeout configurável para MCP tool calls (default 300s) | Estabilidade integrations |

---

## 4. Temas Quentes da Comunidade

### Issues com Mais Comentários/Reações

**🥇 #7318 — QwenPaw Hub Multi-tenant (10 comentários, 1 👍)**
> [Link](https://github.com/agentscope-ai/QwenPaw/issues/7318)
- **Tópico:** QwenPaw Hub edition multi-tenant chegando em 2.2.0
- **Demanda central:** Comunidade solicita forma melhor de rodar QwenPaw em equipe (vs. uso pessoal)
- **Discussão:** Feature multi-usuário e admin-managed skills (#2324 relacionado)
- **Sinal de roadmap:** Alto — é a principal discussão estratégica do momento

**🥈 #7298 — OpenSSL 3.0.x TLS Stack Bug (7 comentários, 0 👍)**
> [Link](https://github.com/agentscope-ai/QwenPaw/issues/7298)
- **Tópico:** Desktop (Tauri) e Docker shippam OpenSSL 3.0.x com Python 3.11 — DPI de carriers reseta handshakes
- **Severidade:** Alta — afeta conectividade em redes corporativas/ISP com DPI
- **Particularidade:** Desktop não tem workaround disponível

**🥉 #6083 — Desktop Workspace Access Button (5 comentários)**
> [Link](https://github.com/agentscope-ai/QwenPaw/issues/6083)
- **Tópico:** Usuários Desktop querem acesso rápido a arquivos do workspace sem sair da janela
- **Status:** Closed — possivelmente resolved

**🏅 #4865 — File Streaming Não Renderiza (4 comentários, 2 👍)**
> [Link](https://github.com/agentscope-ai/QwenPaw/issues/4865)
- **Tópico:** Geração de arquivos grandes parece "travar" na UI — sem streaming incremental
- **Status:** Closed — merged ou workaround disponível
- **Upvoted:** Indica demanda real de UX

### Temas Recorrentes Identificados

| Tema | Volume | Sentimento |
|------|--------|------------|
| Performance startup desktop (4-5min reported) | 4 issues | Negativo |
| File upload/navegação workspaces | 3 issues | Negativo |
| Channel bugs (DingTalk, WeCom) | 2 issues | Negativo |
| Deployment management UI | 2 issues | Neutro-positivo |

---

## 5. Bugs e Estabilidade

### Bugs Abertos Críticos/Altos

| # | Severidade | Título | Tempo Aberto | Impacto |
|---|-----------|--------|--------------|---------|
| [#7360](https://github.com/agentscope-ai/QwenPaw/issues/7360) | 🔴 **CRÍTICA** | Desktop startup ~4min (247s) no beta 2.2.0b1 | 1 dia | Usabilidade |
| [#7363](https://github.com/agentscope-ai/QwenPaw/issues/7363) | 🔴 **CRÍTICA** | Sync calls freeze event loop 118-135s startup + 126s por msg | 1 dia | Responsividade |
| [#7298](https://github.com/agentscope-ai/QwenPaw/issues/7298) | 🟠 **ALTA** | OpenSSL 3.0.x DPI resets TLS handshakes | 3 dias | Conectividade |
| [#7364](https://github.com/agentscope-ai/QwenPaw/issues/7364) | 🟠 **ALTA** | Zero-downtime reload reusa memory_manager fechado (2.2.0b1) | 1 dia | Memória |
| [#7023](https://github.com/agentscope-ai/QwenPaw/issues/7023) | 🟠 **ALTA** | Desktop blocks ~60s em "Installing managed Playwright Chromium" | 14 dias | Startup |
| [#7362](https://github.com/agentscope-ai/QwenPaw/issues/7362) | 🟠 **ALTA** | File protection inativa (lê /etc/passwd) | 1 dia | **Segurança** |
| [#7302](https://github.com/agentscope-ai/QwenPaw/issues/7302) | 🟡 **MÉDIA** | DingTalk envia mensagens vazias com unread | 2 dias | UX canal |
| [#7370](https://github.com/agentscope-ai/QwenPaw/issues/7370) | 🟡 **MÉDIA** | WeCom crash com base64 data URI (OSError 36) | <1 dia | Canal WeCom |
| [#7312](https://github.com/agentscope-ai/QwenPaw/issues/7312) | 🟡 **MÉDIA** | Windows execute_shell_command hangs em stdin herdado | 2 dias | Desktop Windows |
| [#7324](https://github.com/agentscope-ai/QwenPaw/issues/7324) | 🟡 **MÉDIA** | Scheduled task notifications missing (3 agents, 1 lost) | 2 dias | Cron notifications |

### Bugs Resolvidos/Closed (últimas 24h)

| # | Tipo | Título |
|---|------|--------|
| [#7324](https://github.com/agentscope-ai/QwenPaw/issues/7324) | bug | Scheduled task success push missing for agent2 |
| [#7297](https://github.com/agentscope-ai/QwenPaw/issues/7297) | question/bug | QQ restart loses conversation memory |
| [#7355](https://github.com/agentscope-ai/QwenPaw/issues/7355) | enhancement | Android browser newline → submit conflict |

### Análise de Severidade

```
🔴 Críticos (2):    Startup/freezes em beta 2.2.0b1
🟠 Altos (5):      TLS, memory leak, security bypass, Playwright, zero-downtime
🟡 Médios (4):     Channel bugs, Windows shell, notifications
🟢 Baixos (0):     —
```

> ⚠️ **Alerta de Segurança:** Issue [#7362](https://github.com/agentscope-ai/QwenPaw/issues/7362) reporta que file protection (supostamente feature de segurança) não está bloqueando leitura de `/etc/passwd`. PR [#7368](https://github.com/agentscope-ai/QwenPaw/pull/7368) já aberto para corrigir — **prioridade alta**.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Abertas em Destaque

| # | Feature | Comentários | Evidência de Demanda |
|---|---------|-------------|---------------------|
| [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) | **QwenPaw Hub multi-tenant** | 10 | Roadmap confirmado para 2.2.0 |
| [#6380](https://github.com/agentscope-ai/QwenPaw/issues/6380) | **Incremental updates** para HDD | 2 | 1.5h update = dor real |
| [#7316](https://github.com/agentscope-ai/QwenPaw/issues/7316) | Ferramenta para reduzir contexto via tool result filtering | 3 | Discussão arquitetura |
| [#7366](https://github.com/agentscope-ai/QwenPaw/issues/7366) | Deployment manager version display | 3 | Plataforma deploy |
| [#7355](https://github.com/agentscope-ai/QwenPaw/issues/7355) | Android input newline | closed | Mobilidade |
| [#7339](https://github.com/agentscope-ai/QwenPaw/issues/7339) | Disable auto-scroll em streaming | 1 | UI Desktop |
| [#7322](https://github.com/agentscope-ai/QwenPaw/issues/7322) | Upload para pasta correta (Knowledge Base) | 2 | Workspace UX |

### Features em PR (provável entrada em 2.2.0)

| PR | Feature | Status |
|----|---------|--------|
| [#7361](https://github.com/agentscope-ai/QwenPaw/pull/7361) | Chat pagination + virtualization | Aberto |
| [#7357](https://github.com/agentscope-ai/QwenPaw/pull/7357) | Tool call visibility toggle | Aberto |
| [#7356](https://github.com/agentscope-ai/QwenPaw/pull/7356) | Chat scroll lock | Aberto |
| [#6874](https://github.com/agentscope-ai/QwenPaw/pull/6874) | MCP configurable timeout | Aberto (desde 2026-08-10) |
| [#6399](https://github.com/agentscope-ai/QwenPaw/pull/6399) | Reranker UI config panel | Aberto (desde 2026-07-23) |

### Sinais de Roadmap

1. **Multi-tenant Hub** (#7318) — Confirma direção estratégica: de assistente pessoal para plataforma de equipe
2. **Performance startup** — Múltiplos reports e PRs (#7372, #7367) indicam foco em 2.2.x
3. **MCP maturity** (#6874) — Feature de timeout configurável sugere maturação do protocolo
4. **Chat UX** — 3 PRs simultâneos de UX (pagination, scroll lock, tool visibility) = ciclo de refinamento

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas (categorizadas por severidade percebida)

**🟥 Dores Críticas:**

1. **Startup do Desktop absurdamente lento** — Usuários relatam 4 minutos para iniciar (HDD e SSD afetados). Cenário: profissional precisa iniciar app rapidamente e enfrenta wait time inaceitável.
2. **File protection inativa** — Leitura de `/etc/passwd` indica falha de segurança percibida. Impacto: desconfiança em feature prometida.
3. **TLS em redes corporativas** — OpenSSL 3.0.x com DPI de carrier quebra conectividade. Cenário: usuário em rede empresarial/governo não consegue usar.

**🟧 Dores Altas:**

1. **Zero-downtime reload quebra memory_search** — Usuários

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-08-28

---

## 1. Panorama do Dia

O ecossistema ZeroClaw manteve intensidade elevada em 28 de agosto de 2026, com **26 issues atualizadas** e **50 PRs em circulação**. A atividade concentra-se em propostas arquiteturais (RFCs) relacionadas a sessões de runtime, canais de voz em tempo real e políticas de sandbox, sinalizando maturidade crescente do projeto. Não houve lançamentos hoje, indicando que a equipe prioriza estabilização e revisão de PRs de alto impacto. O pipeline inclui diversas correções de segurança pendentes de merge, incluindo resoluções para vazamento de arquivos temporários e validação de imagens multimodais.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24 horas.**

O último ciclo de releases permanece como marco de referência. A ausência de novos lançamentos hoje é consistente com o padrão de consolidação prévia a releases maiores, dado o volume de RFCs em fase de maturação (especialmente #9487, #8780, #9488).

---

## 3. Progresso do Projeto

### PRs Fechados/Mergidos Hoje

| # | PR | Resumo | Impacto |
|---|-----|--------|---------|
| [#10420](https://github.com/zeroclaw-labs/zeroclaw/pull/10420) | fix(skill): enforce release holds before squash merge | Reforça validação de holds de release antes de squash merge | Processual/CI |
| [#10392](https://github.com/zeroclaw-labs/zeroclaw/pull/10392) | fix(zerocode): keep SOP navigation responsive during refresh | Resolve latência na navegação SOP durante refresh | UX/ZeroCode |
| [#10409](https://github.com/zeroclaw-labs/zeroclaw/issues/10409) | fix(channels): secure temp file handling with 0o600 permissions | Corrige permissões de arquivos temporários (0o644 → 0o600) | **Segurança** |
| [#10142](https://github.com/zeroclaw-labs/zeroclaw/pull/10142) | feat(zerorelay): secure transport with blind relay and native mTLS | Avança transporte seguro com mTLS mutuário | **Segurança/Arquitetura** |
| [#9740](https://github.com/zeroclaw-labs/zeroclaw/pull/9740) | feat(channels): add VoiceHost WebSocket bridge | Adiciona bridge WebSocket para áudio externo (FunASR/SenseVoice) | **Canais/Voz** |
| [#9819](https://github.com/zeroclaw-labs/zeroclaw/pull/9819) | fix(multimodal): add pixel-level image validation | Validação completa de imagens para prevenir requisições falhadas | **Estabilidade** |
| [#10381](https://github.com/zeroclaw-labs/zeroclaw/pull/10381) | fix(security): resolve host launchers before workspace cwd | Resolve paths de launchers antes do workspace cwd | **Segurança** |
| [#10337](https://github.com/zeroclaw-labs/zeroclaw/pull/10337) | fix(tools): honor allowed roots for git operations | Autoriza operações git em raízes configuradas | **Segurança** |

### Destaque de Avanço

O PR [#10142](https://github.com/zeroclaw-labs/zeroclaw/pull/10142) (ZeroRelay secure transport) é particularmente relevante: implementa plano WSS mandatório com mTLS mútuo, CA por daemon e emissão CSR-only — um salto significativo na postura de segurança da comunicação entre componentes.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários)

| # | Título | Comentários | Tema Central |
|---|--------|-------------|--------------|
| [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) | RFC: Runtime-owned conversation sessions and transport surface adapters | 26 | Arquitetura de sessões/runtime |
| [#8780](https://github.com/zeroclaw-labs/zeroclaw/issues/8780) | RFC: Realtime speech-to-speech channel for Gemini Live | 21 | Canal de voz em tempo real |
| [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) | RFC: Unified attachment architecture for web chat and channels | 20 | Arquitetura unificada de anexos |
| [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) | RFC: Decouple memory lifecycle policy from storage backends | 20 | Política de ciclo de vida de memória |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | [Tracker]: Maintainer decision queue for RFCs | 14 | Coordenação de decisões |
| [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) | RFC: Granular sandbox policy — filesystem and network restrictions | 13 | Políticas de sandbox granulares |
| [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) | RFC: Computer-use support for desktop screen interaction | 11 | Interação com desktop/computer-use |
| [#9998](https://github.com/zeroclaw-labs/zeroclaw/issues/9998) | RFC: Session-scoped persistent prompt attachments | 9 | Anexos persistentes de prompt |

### Análise de Demandas

A comunidade demonstra forte interesse em **três eixos**:

1. **Arquitetura de runtime e sessões** — Os RFCs #9487 e #9998 indicam necessidade de melhor gestão de sessões e persistência de contexto, problema crítico para agentes que lidam com conversas longas.

2. **Canais multimodais e voz** — #8780 (Gemini Live) e #9740 (VoiceHost bridge) revelam demanda crescente por integração de áudio em tempo real.

3. **Segurança e sandboxing** — RFCs #6996, #6996 e as correções de segurança em PRs indicam foco constante em isolamento e permissões.

---

## 5. Bugs e Estabilidade

### Bugs Reportados por Severidade

| Severidade | # | Componente | Descrição |
|------------|---|------------|-----------|
| **S1** | [#10408](https://github.com/zeroclaw-labs/zeroclaw/issues/10408) | runtime/daemon | Segunda mensagem durante turno ativo inicia execução paralela → replies duplicados |
| **S1** | [#8720](https://github.com/zeroclaw-labs/zeroclaw/issues/8720) | provider/bedrock | CachePoint desabilitado para Bedrock Nova 2 Lite via config |
| **S1** | [#9591](https://github.com/zeroclaw-labs/zeroclaw/issues/9591) | channel | Registry de delivery não limpo ao recarregar canais (já Closed) |
| **S1** | [#10063](https://github.com/zeroclaw-labs/zeroclaw/issues/10063) | provider/compatible | Gateways compatíveis rejeitam blocos `image_url` em resultados de tools |
| **S2** | [#10408](https://github.com/zeroclaw-labs/zeroclaw/issues/10408) | runtime/daemon | Comportamento degradado com mensagens paralelas |
| **S3** | [#10327](https://github.com/zeroclaw-labs/zeroclaw/issues/10327) | channel:discord | Discord URL fallback relata falha parcial falsa de imagem (Closed) |

### Análise de Estabilidade

O bug S1 mais crítico é **[#10408](https://github.com/zeroclaw-labs/zeroclaw/issues/10408)**: mensagens simultâneas em uma mesma sessão disparam execuções paralelas, gerando trabalho duplicado. Este é um problema de **concorrência no daemon** que afeta diretamente a experiência do usuário.

O issue [#10409](https://github.com/zeroclaw-labs/zeroclaw/issues/10409) sobre permissões 0o600 em arquivos temporários foi identificado e está em correção — vulnerabilidade em sistemas compartilhados.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features (Issues Abertas)

| # | Título | Tags | Relevância |
|---|--------|------|------------|
| [#10419](https://github.com/zeroclaw-labs/zeroclaw/issues/10419) | Stream agent-loop tokens from POST /webhook (SSE) | enhancement, webhook | **Alta** |
| [#10244](https://github.com/zeroclaw-labs/zeroclaw/issues/10244) | Add agent deletion and bulk cleanup to ZeroCode | enhancement, agent, zerocode | **Média** |
| [#10138](https://github.com/zeroclaw-labs/zeroclaw/issues/10138) | Include Git Channel in zeroclaw:debian Docker image | enhancement, channel, ci | **Média** |

### Sinais de Roadmap

Os **RFCs em статус "accepted"** indicam direcionamento claro do roadmap:

| # | RFC | Status | Implicação |
|---|-----|--------|-------------|
| [#8780](https://github.com/zeroclaw-labs/zeroclaw/issues/8780) | Realtime speech-to-speech (Gemini Live) | **Accepted** | Próxima geração de canais de voz |
| [#9998](https://github.com/zeroclaw-labs/zeroclaw/issues/9998) | Session-scoped persistent prompt attachments | **Accepted** | Melhora de memória contextual |
| [#9990](https://github.com/zeroclaw-labs/zeroclaw/issues/9990) | Calibrate PR risk and security approval requirements | **Accepted** | Processo de contribução mais claro |
| [#9535](https://github.com/zeroclaw-labs/zeroclaw/pull/9535) | Anchor context compaction to model window ratio | **In Progress** | Melhor gestão de contexto por modelo |

A feature **[#10419](https://github.com/zeroclaw-labs/zeroclaw/issues/10419)** (streaming SSE via webhook) responde à necessidade deWorkersbaseados em Path A consumirem tokens incrementalmente — indica direção para integrações em tempo real.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Cenário | Issue | Impacto |
|---------|-------|---------|
| Imagens em resultados de tools falham com provedores compatíveis | [#10063](https://github.com/zeroclaw-labs/zeroclaw/issues/10063) | **Bloqueante** para workflows multimodais |
| `vision_model_provider` migrado não resolve credenciais | [#9651](https://github.com/zeroclaw-labs/zeroclaw/issues/9651) | Configuração de modelos vision problemática |
| Bedrock Nova 2 Lite com erros de cache aleatórios | [#8720](https://github.com/zeroclaw-labs/zeroclaw/issues/8720) | Uso de modelos AWS degradado |
| Mensagens paralelas duplicam respostas | [#10408](https://github.com/zeroclaw-labs/zeroclaw/issues/10408) | Confusão em conversas simultâneas |
| Não é possível deletar agentes via ZeroCode | [#10244](https://github.com/zeroclaw-labs/zeroclaw/issues/10244) | Limpeza de ambiente limitada |

### Cenários de Uso Emergentes

1. **Integração Android nativa** (PR [#10205](https://github.com/zeroclaw-labs/zeroclaw/pull/10205)): Indica demanda por experiência mobile standalone com ferramentas de acessibilidade.

2. **VoiceHost bridge** (PR [#9740](https://github.com/zeroclaw-labs/zeroclaw/pull/9740)): Suporte a ASR externo (FunASR/SenseVoice) para canais de voz customizados.

3. **ZeroRelay mTLS** (PR [#10142](https://github.com/zeroclaw-labs/zeroclaw/pull/10142)): Organizações exigem transporte seguro com autenticação mútua.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Estagnadas

| # | Título | Criado | Atualizado | Dias Inativo | Prioridade |
|---|--------|--------|-----------|--------------|------------|
| [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) | RFC: Decouple memory lifecycle policy | 2026-05-22 | 2026-08-27 | — | p2 |
| [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) | RFC: Computer-use desktop support | 2026-05-25 | 2026-08-27 | — | p2 |
| [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) | RFC: Granular sandbox policy | 2026-05-28 | 2026-08-27 | — | p2 |
| [#7822](https://github.com/zeroclaw-labs/zeroclaw/issues/7822) | RFC: WASM plugin lifecycle observers | 2026-06-17 | 2026-08-27 | — | p2 |

### Recomendações

1. **RFCs com 60+ dias de discussão** (#6850, #6909, #6996) — Recomendamos que mantenedores priorizem decisões finais ou rejeição explícita para desobstruir o backlog.

2. **PRs size:XL com needs-author-action** — [#10407](https://github.com/zeroclaw-labs/zeroclaw/pull/10407) (persistent prompt attachments) e [#10205](https://github.com/zeroclaw-labs/zeroclaw/pull/10205) (Android native) requerem atenção dos autores para avanzarem.

3. **Bug S1 [#10408](https://github.com/zeroclaw-labs/zeroclaw/issues/10408)** — Relatado em 2026-08-27, ainda sem atribuição. Dado impacto direto na experiência do usuário, merece triagem urgente.

---

## Métricas Resumidas (2026-08-28)

| Indicador | Valor |
|-----------|-------|
| Issues ativas | 19 |
| Issues fechadas (24h) | 7 |
| PRs abertos | 48 |
| PRs merged/fechados | 2 |
| Novas releases | 0 |
| RFCs em discussão | 15+ |
| Bugs S1 pendentes | 4 |
| PRs size:XL em curso | 8 |

**Saúde Geral:** O projeto demonstra vigor com alta atividade de PRs e RFCs maduros. A atenção deve voltar-se para estabilização dos bugs S1 e avanço dos RFCs accepted antes do próximo release.

---

*Relatório gerado automaticamente com base em dados do GitHub — ZeroClaw (zeroclaw-labs/zeroclaw)*

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*