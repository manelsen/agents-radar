# Resumo diário do ecossistema de agentes de IA 2026-09-24

> Issues: 17 | PRs: 21 | Projetos cobertos: 7 | Gerado em: 2026-09-23 22:37 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório do Projeto NullClaw — 2026-09-24

---

## 1. Panorama do Dia

NullClaw demonstra **atividade intensa e saudável** nesta data, com 17 issues e 21 PRs atualizados nas últimas 24 horas. O projeto está em plena fase de estabilização e hardening, evidenciada pela concentração de PRs focados em correções de crashes críticos (SIGSEGV, use-after-free, stack overflow) e melhorias de robustez para canais (Telegram, Discord, Matrix). Não houve releases formais, mas 8 PRs foram merged, indicando maturidade no fluxo de revisão. A comunidade demonstra interesse crescente em funcionalidades avançadas como MCP, subagentes e proveedores nativos (Anthropic, Grok). O backlog de 17 issues abertas requer priorização, especialmente as que envolvem crashes em produção.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24 horas.**

O projeto segue na versão **v2026.5.29** conforme mencionado em issues. A ausência de release formal sugere que as correções merged ainda estão em fase de agregação para um próximo tag. Recomenda-se monitorar o pipeline de CI/CD para antecipação de releases.

---

## 3. Progresso do Projeto

Oito PRs foram fechados/merged nas últimas 24 horas, representando avanços significativos em estabilidade e funcionalidades:

| PR | Título | Impacto |
|----|--------|---------|
| [#996](https://github.com/nullclaw/nullclaw/pull/996) | fix(mcp): bound stdio response waits | Resolve hang infinito do MCP stdio (#991) com timeout e cleanup de processos |
| [#985](https://github.com/nullclaw/nullclaw/pull/985) | fix(runtime): give agent turn path 16 MiB stack | Resolve SIGSEGV em mensagens Telegram (#976) — stack de 2MiB era insuficiente |
| [#978](https://github.com/nullclaw/nullclaw/pull/978) | discord: run typing thread on heavy runtime stack | Corrige crash ao iniciar typing indicator no Discord |
| [#980](https://github.com/nullclaw/nullclaw/pull/980) | fix(scheduler): persist paired token | Resolve falha de autenticação do scheduler (#839) |
| [#986](https://github.com/nullclaw/nullclaw/pull/986) | make SQLite memory database path configurable | Adiciona `memory.database_path` para implantações read-only |
| [#979](https://github.com/nullclaw/nullclaw/pull/979) | feat(memory): configurable auto-recall | Permite desabilitar/enconfigurar FTS5 recall (#919) |
| [#969](https://github.com/nullclaw/nullclaw/pull/969) | structured approval_request/response | Implementa fluxo de aprovação para ferramentas shell |
| [#981](https://github.com/nullclaw/nullclaw/pull/981) | feat(provider): add grok-cli provider | Adiciona suporte a xAI Grok CLI |

**Destaque técnico:** As correções de stack overflow (#985, #978) indicam que o projeto está refinando a gestão de memória e threads, um sinal positivo de maturidade.

---

## 4. Temas Quentes da Comunidade

As issues com maior engajamento (comentários + reações) revelam as principais dores dos usuários:

### Issues Mais Ativas

| Issue | Título | Comentários | 👍 | Categoria |
|-------|--------|-------------|----|-----------|
| [#871](https://github.com/nullclaw/nullclaw/issues/871) | web_search não funcional em dispositivos de baixo recursos | 8 | 0 | Bug/Funcionalidade |
| [#972](https://github.com/nullclaw/nullclaw/issues/972) | Telegram para de responder após tempo ocioso | 5 | 1 | Bug/Canal |
| [#915](https://github.com/nullclaw/nullclaw/issues/915) | Problema com scheduler unauthorized | 5 | 1 | Bug/Scheduler |
| [#976](https://github.com/nullclaw/nullclaw/issues/976) | SIGSEGV em cada mensagem Telegram (aarch64) | 4 | 0 | Bug/Crash |
| [#190](https://github.com/nullclaw/nullclaw/issues/190) | Subagent spawn | 3 | 0 | Feature Request |

### Análise de Demandas

1. **web_search (#871):** Usuários em dispositivos de baixo custo (Raspberry Pi, etc.) não conseguem usar busca web sem API key externa. A demanda por suporte direto ao DuckDuckGo (via `ddgs`) indica que a comunidade prioriza self-hosting e privacidade.

2. **Telegram idle (#972):** Canal morre após noite idle — PR #984 está em aberto para corrigir. Este é um bug de estabilidade significativo para implantações de longa duração.

3. **Scheduler auth (#915, #839):** Problema recorrente de autenticação do scheduler. Já há PRs merged (#980, #959) e em aberto (#959) abordando o problema.

---

## 5. Bugs e Estabilidade

### Bugs Críticos (Potential Service Outage)

| Issue | Severidade | Descrição | Status |
|-------|------------|-----------|--------|
| [#976](https://github.com/nullclaw/nullclaw/issues/976) | **CRÍTICA** | SIGSEGV em cada mensagem Telegram (aarch64) — crash-loop do serviço | **PR #985 merged** ✅ |
| [#972](https://github.com/nullclaw/nullclaw/issues/972) | **ALTA** | Telegram/Matrix silenciam após noite idle | PR #984 aberto |
| [#954](https://github.com/nullclaw/nullclaw/pull/954) | **ALTA** | Cron jobs "schedule once" falham silenciosamente (use-after-free) | PR #984 aberto |
| [#991](https://github.com/nullclaw/nullclaw/issues/991) | **MÉDIA** | MCP stdio pode pendurar indefinidamente | **PR #996 merged** ✅ |

### Bugs de Experiência do Usuário

| Issue | Severidade | Descrição |
|-------|------------|-----------|
| [#865](https://github.com/nullclaw/nullclaw/issues/865) | **MÉDIA** | CLI exibe caracteres CTRL em vez de interpretar setas |
| [#870](https://github.com/nullclaw/nullclaw/issues/870) | **MÉDIA** | Gateway consome 100% CPU em WSL2 idle |
| [#932](https://github.com/nullclaw/nullclaw/issues/932) | **BAIXA** | Docs especificam versão Zig inválida (0.15.2 → 0.16.0) |

**Métricas de Estabilidade:** 2 de 4 bugs críticos foram resolvidos nas últimas 24h. Restam 2 bugs de alta severidade (Telegram idle, cron silent fail) que afetam implantações de produção.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features com Maior Potencial de Inclusão

| Issue/PR | Feature | Justificativa | Complexidade Estimada |
|----------|---------|---------------|----------------------|
| [#624](https://github.com/nullclaw/nullclaw/issues/624) | Vision Pipeline (envio de imagens para agentes multimodais) | Feature esperada para agentes modernos | Média |
| [#631](https://github.com/nullclaw/nullclaw/issues/631) | GET /status endpoint para monitoramento | Necessário para dashboards e DevOps | Baixa |
| [#817](https://github.com/nullclaw/nullclaw/issues/817) | WeChat QR code login | Mercado chinês | N/A (questionamento) |
| [#623](https://github.com/nullclaw/nullclaw/issues/623) | Suporte ddgs para web_search | Alternativa sem API key para auto-hosteamento | Baixa |
| [#776](https://github.com/nullclaw/nullclaw/pull/776) | Documentação MCP, subagentes, skills | Cobertura de funcionalidades existentes | Documentação |

### Sinais de Roadmap

1. **Agentes Multimodais:** Issue #624 e PR #971 (native tool calls durante streaming) indicam direção para suporte visual.
2. **Provedores Nativos:** PR #962 documenta Anthropic nativo; PR #981 adiciona Grok — tendência de diversificar LLMs.
3. **Configurabilidade:** PRs #979, #986 mostram foco em flexibilidade (memória, recall, database path).
4. **Subagentes:** Issue #190 permanece em aberto — funcionalidade ainda em discussão.

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais

| Dor | Frequência | Impacto |
|-----|------------|---------|
| **Dependência de API keys externas** | Alta | Usuários de baixo recurso não conseguem usar web_search |
| **Instabilidade de canais (Telegram)** | Alta | Serviços morrem após idle, requerem restart manual |
| **Autenticação de scheduler** | Média | Funcionalidade agendada não funciona sem reason óbvia |
| **Stack overflow em threads** | Crítica (agora resolvida) | Crash completo em ARM64 |

### Cenários de Uso Identificados

1. **Self-hosting em hardware limitado:** Raspberry Pi, dispositivos ARM64, WSL2 — indica adoção por desenvolvedores individuais.
2. **Implantações de longa duração:** Gateway como systemd service com `Restart=always` — uso em produção.
3. **Multi-canal:** Telegram, Discord, Matrix, WeChat — comunidade diversificada geograficamente.

### Satisfação/Insatisfação

- **Positivo:** Resposta rápida da comunidade a bugs críticos (SIGSEGV resolvido em ~2 meses).
- **Negativo:** Funcionalidades básicas como scheduler autenticado permanecem quebradas por meses (#839 desde abril).
- **Neutro:** Documentação incompleta (MCP, subagentes) mas PRs em andamento (#776).

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta há >30 dias

| Issue | Criada | Dias Aberta | Prioridade | Motivo |
|-------|--------|-------------|------------|--------|
| [#190](https://github.com/nullclaw/nullclaw/issues/190) | 2026-03-01 | ~177 dias | Baixa | Subagent spawn — necesita decisão de roadmap |
| [#495](https://github.com/nullclaw/nullclaw/issues/495) | 2026-03-13 | ~165 dias | Baixa | Web channel com CloudFlare/nginx |
| [#767](https://github.com/nullclaw/nullclaw/issues/767) | 2026-04-04 | ~143 dias | Média | Anthropic API key — comunidade aguardando resposta |
| [#817](https://github.com/nullclaw/nullclaw/issues/817) | 2026-04-14 | ~133 dias | Baixa | WeChat QR — precisa clarificação |
| [#839](https://github.com/nullclaw/nullclaw/issues/839) | 2026-04-18 | ~129 dias | Alta | Scheduler access — PRs merged mas issue não fechada |

### PRs Abertos com Potencial de Merge

| PR | Título | Age (dias) | Status |
|----|--------|------------|--------|
| [#984](https://github.com/nullclaw/nullclaw/pull/984) | Telegram/Matrix poll failures aging | ~50 | Pronto para review |
| [#970](https://github.com/nullclaw/nullclaw/pull/970) | Handle arrow keys in agent REPL | ~87 | Aguardando review |
| [#962](https://github.com/nullclaw/nullclaw/pull/962) | Document native Anthropic provider | ~98 | Documentação |
| [#954](https://github.com/nullclaw/nullclaw/pull/954) | One-shot cron silent fail | ~103 | Bug fix crítico |
| [#776](https://github.com/nullclaw/nullclaw/pull/776) | Add MCP, subagents, skills docs | ~142 | Documentação necessária |

### Recomendações de Priorização

1. **Fechar issues duplicadas/resolvidas** (#839, #991) — limpo backlog.
2. **Review do PR #954** — cron silent fail é bug de produção.
3. **Decisão de roadmap #190** — subagentes precisam definição clara.
4. **Responder #767** — documentação foi adicionada (#962) mas issue permanece aberta.

---

## Métricas Resumidas (2026-09-24)

| Métrica | Valor |
|---------|-------|
| Issues abertas/ativas | 17 |
| PRs abertos | 13 |
| PRs merged/fechados (24h) | 8 |
| Releases | 0 |
| Bugs críticos resolvidos | 2 |
| Bugs críticos pendentes | 2 |
| Issues sem resposta (>30 dias) | 5 |
| PRs aguardando merge | 5+ |

**Saúde Geral:** ★★★★☆ (4/5) — Atividade intensa, bugs críticos sendo resolvidos, mas backlog de issues antigas e features pendentes de documentação merecem atenção.

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo — Ecossistema de Agentes de IA Open Source

**Data de referência:** 2026-09-24
**Projetos analisados:** NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw (QwenPaw), ZeroClaw

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta um **biombo de maturidade diversificada** nesta data. Três projetos — ZeroClaw, Hermes Agent e CoPaw — demonstram atividade intensa (35-50+ PRs/24h), evidenciando comunidades vigorosas em fase de estabilização técnica. Dois projetos, NullClaw e NanoBot, concentram esforços em hardening de memória e canais, sinalizando transição de features para reliability. PicoClaw e IronClaw operam em escala menor, com PicoClaw sofrendo crise de infraestrutura (certificado expirado) e IronClaw em modo de preparação de release. Nenhum projeto publicou releases formais nas últimas 24h, sugerindo ciclo de desenvolvimento sincronizado ou freeze pré-release. O tema unificador é **gestão de contexto e estabilidade de canais** — problemas que afetam transversalmente toda a vertical de agentes.

---

## 2. Comparação de Atividade

| Projeto | Issues Abertas | PRs Atualizados (24h) | PRs Merged (24h) | Releases | Avaliação de Saúde |
|---------|----------------|------------------------|------------------|---------|-------------------|
| **NullClaw** | 17 | 21 | 8 | 0 | ★★★★☆ Estável |
| **NanoBot** | 7 | 35 | 20 | 0 | ⚠️ Instável — compactação |
| **Hermes Agent** | 11 | 50 | 12 | 0 | ⚠️ Dívida técnica — Desktop |
| **PicoClaw** | 1 | 2 | 1 | 0 | 🔴 Crítica — infraestrutura |
| **IronClaw** | 0 | 2 | 0 | 0 | 🟡 Moderada — pré-release |
| **CoPaw/QwenPaw** | 17 | 24 | 9 | 0 | ⚠️ Bugs P0 ativos |
| **ZeroClaw** | 11 | 50 | 4 | 0 | ⚠️ Pressão QA — S0 ativos |

**Métricas consolidadas do ecossistema:**

| Indicador | Total |
|-----------|-------|
| Issues ativas | 64 |
| PRs abertos/ativos | 176+ |
| PRs merged (24h) | 54 |
| Releases publicadas | 0 |
| Bugs críticos (P0/S0) | 5 |
| Bugs de alta severidade | 9+ |

---

## 3. Posicionamento do Projeto Principal

### NullClaw como Referência

NullClaw apresenta o **melhor balance entre atividade e saúde** entre os pares analisados:

| Dimensão | NullClaw | vs. Média do Ecossistema |
|----------|----------|-------------------------|
| Taxa de merge | 8/21 PRs (38%) | ~15% (muitos PRs em revisão longa) |
| Bugs críticos resolvidos | 2/4 (50%) | NanoBot: 0/5; Hermes: 0/2 |
| Issues >30 dias sem resposta | 5 | CoPaw: 6+; PicoClaw: 1 (crítica) |
| Cobertura de canais | Telegram, Discord, Matrix, WeChat | Mais diversificado que Hermes (Desktop) e PicoClaw |
| Arquitetura de providers | Anthropic, Grok, MCP nativo | Igual ou superior à média |

**Vantagens competitivas técnicas:**

1. **Maturidade de stack trace**: Correção de stack overflow em ARM64 (#985) demonstra engenharia de sistemas profunda, diferenciando de projetos que ainda tratam此类 issues.
2. **Segurança de aprovação**: PR #969 implementa fluxo estruturado de aprovação para ferramentas shell, addressing o mesmo problema S0 que ZeroClaw (#10968) ainda não resolveu.
3. **Separabilidade de módulos**: Progresso em MCP, subagentes e providers nativos indica arquitetura plugável, superior ao acoplamento observado em Hermes Agent e CoPaw.

---

## 4. Focos Técnicos Compartilhados

A análise transversal revela **quatro desafios técnicos universais** neste momento do ecossistema:

### 4.1 Gestão de Memória e Contexto

| Projeto | Sintoma | Status |
|---------|---------|--------|
| **NanoBot** | Auto-compaction deadlock, tool results sobrevivem summarization, idle compaction quebra sessões curtas | 5 bugs P1/P2 abertos |
| **NullClaw** | Memory database path, FTS5 recall configurável | PRs merged (resolvido) |
| **CoPaw** | ToolResultPruner não corta mídia base64, compaction viola budget, scroll eviction perde turns | 4 bugs inter-relacionados |
| **ZeroClaw** | MarkdownMemory perde entries em writes concorrentes | Bug S0 — prioridade máxima |

**Padrão:** A gestão de contexto é o **problema técnico mais recorrente** do ecossistema. Cada projeto implementa compactação/summarização com edge cases distintos, sugerindo que não há solução canônica consolidada.

### 4.2 Estabilidade de Canais

| Canal | Projetos Afetados | Sintomas |
|-------|-------------------|----------|
| **Telegram** | NullClaw, NanoBot, Hermes | Idle death, duplicação, spam de notificações |
| **WhatsApp** | ZeroClaw, Hermes | TTS ignorado, markdown não renderizado, polls não funcionam |
| **Feishu** | Hermes, CoPaw | WebSocket sem reconnect, queue deadlock, reaction badges |
| **Discord** | NullClaw | Crash em typing indicator |
| **Matrix** | NullClaw | Silenciamento pós-idle |

### 4.3 Segurança em Automação

Dois projetos reportam independentemente o mesmo pattern: **turns não-interativos (cron, heartbeat, subagent) executam sem ApprovalManager**:

- **ZeroClaw** (#10968): Bug S0 — aprovação de ferramentas inerte em automações
- **NullClaw** (#969): PR merged — fluxo de aprovação estruturado para shell tools

### 4.4 Infraestrutura e CI/CD

| Projeto | Melhoria |
|---------|----------|
| **ZeroClaw** | 4 PRs de infraestrutura: rebuild de docs, checagem de notarização Apple, ordenação de dependências, bounded logs no Windows |
| **IronClaw** | Preparação de rc.2 com updates de segurança (wasmtime, rustls) |
| **CoPaw** | +3.28pp de coverage de testes (70.51% → 73.79%) |

---

## 5. Análise de Diferenciação

### Por Arquitetura e Foco

| Projeto | Arquitetura Primária | Público-Alvo | Diferenciação |
|---------|---------------------|--------------|---------------|
| **NullClaw** | Multi-canal (Telegram, Discord, Matrix, WeChat) + MCP | Self-hosters, devs individuais, Raspberry Pi | Robustez em hardware limitado, providers nativos diversificados |
| **NanoBot** | Codex-first, context compaction nativa | Usuários avançados, long-context tasks | Compactação inteligente, dashboard de uso granular |
| **Hermes Agent** | Desktop-first, fleet management | Teams, enterprise deployments | Refatoração massiva de Desktop, managed SSH fleet |
| **PicoClaw** | Phone pairing, build remote agent | Mobile-first, debugging colaborativo | gbr/1 protocol, monitoramento remoto |
| **IronClaw** | Virtual skill roots, multi-tenant | Enterprise (Google extension) | Isolamento de skills, security patches proativos |
| **CoPaw/QwenPaw** | Multi-tenant Hub, console unificado | Times, organizações | Admin-managed skills, multi-model routing |
| **ZeroClaw** | Agent lifecycle, PKCE auth, relay enrollment | Enterprise, high-security | Pre-turn tool hints, typed abort taxonomy |

### Por Estratégia de Provider

```
NullClaw     → [Anthropic, Grok, MCP] .................... Diversificação
NanoBot      → [Codex, IO Intelligence, +OpenAI compat] ... Inference-first  
CoPaw        → [Multi-model routing por tarefa] ........... Arquitetura flexível
ZeroClaw     → [PKCE + browser auth] ...................... Security-first
IronClaw     → [Google OAuth, WASM runtime] ............... Enterprise-ready
```

---

## 6. Tração e Maturidade da Comunidade

### Velocidade de Iteração

| Tier | Projetos | PRs merged/24h | Característica |
|------|----------|----------------|----------------|
| 🔥 Alta | NanoBot, Hermes, ZeroClaw | 12-20 | Fase de estabilização ativa, dívida técnica sendo paga |
| ✅ Média | NullClaw, CoPaw | 8-9 | Fluxo saudável, bugs críticos resolvidos |
| ⚠️ Baixa | PicoClaw, IronClaw | 0-1 | Freeze pré-release ou baixa base de contribuidores |

### Disciplina de Qualidade

| Projeto | Coverage/Testes | Bug Tracker | Maturidade |
|---------|-----------------|-------------|------------|
| **CoPaw** | +3.28pp em 24h (73.79%) | 17 issues fechadas | ⭐⭐⭐ Alta |
| **IronClaw** | N/A (release candidate) | 0 issues abertas | ⭐⭐⭐ Estável |
| **NullClaw** | N/A | Backlog limpo, 2 bugs críticos resolvidos | ⭐⭐⭐ Alta |
| **NanoBot** | N/A | 5 bugs P1 abertos simultaneamente | ⭐⭐ Instável |
| **ZeroClaw** | N/A | 2 bugs S0 sem movimento | ⭐⭐ Preocupante |
| **Hermes** | E2E suites em desenvolvimento | 12+ issues duplicação Desktop | ⭐ Estagnada |

### Riscos de Retenção de Contribuidores

| Risco | Projetos Afetados | Evidência |
|-------|-------------------|-----------|
| **Issue fatigue** | CoPaw (#2335 aberta há 6 meses) | P0 Feishu sem resolução |
| **Breaking changes** | NanoBot (#5881 — 0.3.5 quebra instâncias) | Regressão percebida |
| **Dívida técnica acumulada** | Hermes (12+ issues duplicação) | Sem resolução há 65-90 dias |
| **Infraestrutura abandonada** | PicoClaw (site offline 14 dias) | Certificado expirado |

---

## 7. Sinais de Tendência

### 7.1 Do Feature-Ware ao Reliability-Ware

O ecossistema transita coletivamente de **construção de features para hardening de produção**:

- 5/7 projetos sem releases nas últimas 24h
- Bugs de crashes, memory leaks e race conditions dominam backlogs
- Investimento em CI/CD (ZeroClaw: 4 PRs infraestrutura) e test coverage (CoPaw: +3.28pp)

**Implicação:** O mercado open source de agentes atingiu maturidade onde **confiabilidade > funcionalidade** para diferenciação competitiva.

### 7.2 Multi-Provider como Padrão

| Tendência | Projetos | Sinais |
|-----------|----------|--------|
| Diversificação de LLMs | NullClaw, NanoBot, CoPaw | Anthropic, Grok, Codex, IO Intelligence, OpenAI compat |
| A2A Protocol demand | CoPaw | Issue #7484: "A2A何时支持?" com 5 comentários |
| MCP maturity | NullClaw | Fix de hang infinito stdio (#996), docs em evolução |

**Implicação:** Providers lock-in está se tornando antipadrão. Arquiteturas que suportam multi-provider switching serão favorecidas.

### 7.3 Enterprise Features Emergindo

| Feature | Projetos | Evidência |
|---------|----------|-----------|
| Fleet management | Hermes, IronClaw | Managed SSH fleet, 14/14 cuts de refatoração |
| Multi-tenant Hub | CoPaw | 32 comentários na discussão do roadmap Hub |
| Observabilidade | NanoBot, ZeroClaw | Langfuse tracing, usage dashboards |
| Self-serve enrollment | ZeroClaw | Relay claim, PKCE cross-surface |

**Implicação:** A próxima onda de adoção será corporativo, demandando isolamento, billing granular e compliance.

### 7.4 Self-Hosting e Privacidade

| Evidência | Projeto | Feature |
|-----------|---------|---------|
| DuckDuckGo provider | NullClaw (#623) | web_search sem API key |
| Keenable provider | PicoClaw (#3370) | Busca web zero-config |
| Memory configurable | NullClaw (#979, #986) | Read-only deployments |

**Implicação:** Mercado de dispositivos limitados (Raspberry Pi, ARM64, WSL2) é significativo. Soluções zero-API-key attract this segment.

### 7.5 Voice e Multimodal Incipiente

| Projeto | Status | Comentário |
|---------|--------|------------|
| NanoBot | Issue #2152 (WhatsApp voice) | Fish Audio integration via patching |
| NullClaw | Issue #624 (Vision Pipeline) | Pipeline de visão em discussão |
| CoPaw | Issue #7733 | Agent-autonomous context eviction |

**Implicação:** Voice (STT/TTS) ainda é experimental, com integrações quebrando em updates. Multimodal visual está em roadmap mas não implementado.

---

## Síntese Executiva

| Dimensão | Líder | Tendência do Ecossistema |
|----------|-------|--------------------------|
| **Atividade** | NanoBot + Hermes + ZeroClaw (50 PRs/24h) | Fragmentado — 3 tiers distintos |
| **Saúde técnica** | NullClaw (★★★★☆) | Estabilidade > features |
| **Maturidade** | IronClaw, NullClaw | Preparação de release, cobertura de testes |
| **Risco** | PicoClaw (site down), ZeroClaw (S0 bugs) | Infraestrutura e segurança requerem atenção |
| **Comunidade** | CoPaw (32 comentários Hub), Hermes (14+ issues) | Engajamento enterprise crescente |

**Recomendação estratégica:** Para decisões de adoção ou investimento, NullClaw oferece o melhor risk-reward atual. Para integração enterprise de longo prazo, monitorar CoPaw (Hub multi-tenant) e Hermes (fleet management). Evitar PicoClaw até restauração de infraestrutura.

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-09-24

---

## 1. Panorama do Dia

O NanoBot manteve um ritmo de desenvolvimento intenso nas últimas 24 horas, com **35 PRs atualizados** (15 abertos, 20 merged/fechados) e **7 issues** processadas. A atividade concentra-se em correções de bugs críticos relacionados à compactação de contexto e gerenciamento de memória, além de melhorias na experiência do Linear Agent e adição de novo provedor IO Intelligence. Nenhuma release foi publicada. O volume de PRs sugere uma fase de estabilização pré-release, com forte foco em robustez operacional.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

O projeto não emitiu versões novas desde o corte temporal deste relatório. A última versão mencionada nos dados é a **0.3.5**, cuja nova regra de validação de diretório `_nanobot` está gerando atrito na comunidade (ver issue #5881 na seção 5).

---

## 3. Progresso do Projeto

### PRs Closed/Merged Hoje

| # | Título | Área | Prioridade | Destaque |
|---|--------|------|------------|----------|
| [#5871](https://github.com/HKUDS/nanobot/pull/5871) | feat(linear): improve native agent UX | linear | p2 | Suporte a Linear mentions, OAuth callback, botões e attachments |
| [#5883](https://github.com/HKUDS/nanobot/pull/5883) | fix(agent): preserve state for required Codex compaction | agent | p2 | Corrige problema onde summarization limpava estado antes da compactação nativa do Codex |
| [#5875](https://github.com/HKUDS/nanobot/pull/5875) | feat(providers): add IO Intelligence (io.net) provider | providers | p2 | Novo provedor oficial de inference da io.net |
| [#5813](https://github.com/HKUDS/nanobot/pull/5813) | fix(webui): clear stale restart prompt after reconnect | webui | p2 | Corrige prompt de restart persistindo após reconnect do browser |
| [#5851](https://github.com/HKUDS/nanobot/pull/5851) | feat(webui): add usage ranges, activity calendar and model breakdowns | webui | p2 | Dashboard expandida com ranges 7/30/365 dias e breakdowns por provider/model |
| [#5882](https://github.com/HKUDS/nanobot/pull/5882) | docs: correct context compaction behavior and document /compact | docs | — | Documentação corrigida sobre comportamento de compactação |
| [#5878](https://github.com/HKUDS/nanobot/pull/5878) | fix(agent): log mid-turn injected messages | agent | p2 | Melhora logging de mensagens injetadas mid-turn |
| [#5854](https://github.com/HKUDS/nanobot/pull/5854) | feat(webui): prompt commands and task panels (deferred) | webui | — | Deferred — em espera por design acordado |

**Avanços principais:**
- **UX Linear** (#5871): Integração mais robusta com Linear, incluindo OAuth e delegated issues.
- **Novo provedor** (#5875): IO Intelligence adicionado como provider oficial, ampliando opções de inference.
- **WebUI** (#5851): Dashboard de uso agora oferece granularidade temporal e breakdowns por modelo.
- **Docs** (#5882): Documentação de compactação corrigida para refletir comportamento real (idle compaction agora substitui conversa por resumo).

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| # | Título | Status | Comentários | 👍 | Tema Central |
|---|--------|--------|-------------|-----|--------------|
| [#2152](https://github.com/HKUDS/nanobot/issues/2152) | Native WhatsApp voice message support (STT + TTS) | CLOSED | 2 | 2 | Integração de voz via Fish Audio — solução standalone mas requer patching após updates |
| [#5870](https://github.com/HKUDS/nanobot/issues/5870) | Telegram: context compaction notice repeated | CLOSED | 3 | 0 | Bug de spam de notificações de compactação no Telegram |
| [#5879](https://github.com/HKUDS/nanobot/issues/5879) | Large read_file results abort turn after compaction | OPEN | 2 | 0 | Edge case crítico: tool results grandes sobrevivem summarization e excedem budget |
| [#5849](https://github.com/HKUDS/nanobot/issues/5849) | Auto-compaction deadlock: no token-budget guard | OPEN | 2 | 0 | Falha de design: auto-compaction não respeita token budget, causando deadlock |

### PRs com Maior Engajamento (por atividade reciente)

| # | Título | Área | Status | Tema |
|---|--------|------|--------|------|
| [#5847](https://github.com/HKUDS/nanobot/pull/5847) | feat(webui): unify session file and website previews | webui | OPEN | Preview unificado de arquivos e websites em painel lateral |
| [#5885](https://github.com/HKUDS/nanobot/pull/5885) | feat(memory): gate idle transcript replacement on token threshold | memory | OPEN | Idle compaction agora só substitui sessões acima de threshold de tokens |
| [#5520](https://github.com/HKUDS/nanobot/pull/5520) | feat(provider): langfuse tracing for codex | provider | OPEN (conflict) | Tracing Langfuse nativo para Codex |
| [#5405](https://github.com/HKUDS/nanobot/pull/5405) | feat(skills): support manual-only invocation | skills | OPEN | Skills com side effects podem ser desabilitadas para invocação pelo modelo |

**Análise:** A comunidade demonstra forte interesse em **(1)** integração de voz no WhatsApp (2+ 👍), **(2)** robustez do sistema de compactação de contexto (4 issues críticas abertas), e **(3)** UX unificada com previews e dashboards. O tema de "idle compaction" é recorrente e indica que a feature de summarização automática ainda não está madura.

---

## 5. Bugs e Estabilidade

### Por Severidade

#### 🔴 P1 (Crítico)

| # | Título | Status | Descrição |
|---|--------|--------|-----------|
| [#5870](https://github.com/HKUDS/nanobot/issues/5870) | Telegram: compaction notice repeated multiple times | CLOSED | Notificação "Context compacted." aparecia 6+ vezes no chat pessoal |
| [#5881](https://github.com/HKUDS/nanobot/issues/5881) | 0.3.5 exige _nanobot fora do workspace | OPEN | Nova validação rejeita start de instâncias quando `_nanobot/sessions` está dentro do workspace |
| [#5861](https://github.com/HKUDS/nanobot/pull/5861) | fix(tokens): warm fallback tokenizer in background | OPEN | Sem warmup do tokenizer, tokens estimados com UTF-8 byte estimates até pronto (p0 no PR) |

#### 🟠 P2 (Alta)

| # | Título | Status | Descrição |
|---|--------|--------|-----------|
| [#5879](https://github.com/HKUDS/nanobot/issues/5879) | Large read_file results abort turn after compaction | OPEN | Tool results grandes sobrevivem summarization mas ainda excedem budget → `ContextWindowExceededError` |
| [#5849](https://github.com/HKUDS/nanobot/issues/5849) | Auto-compaction deadlock: no token-budget guard | OPEN | `summarize_transcript` envia histórico completo sem proteção de budget |
| [#5884](https://github.com/HKUDS/nanobot/pull/5884) | fix(memory): prevent history compaction from overwriting concurrent appends | OPEN | Lock ausente em `compact_history()` permitia race condition com `_append_history_record` |
| [#5880](https://github.com/HKUDS/nanobot/pull/5880) | fix: recover oversized pending file reads after compaction | OPEN | Recupera de oversized pending reads pós-compaction (fix para #5879) |
| [#5780](https://github.com/HKUDS/nanobot/pull/5780) | fix: stop sending context compaction notifications | OPEN | Remove notificações automáticas de compaction visíveis (mantém para `/compact`) |

**Padrão identificado:** O sistema de **compactação automática de contexto** apresenta múltiplos pontos de falha inter-relacionados:
1. Sem token-budget guard (#5849)
2. Race conditions de escrita (#5884)
3. Tool results não consumidos extrapolam budget (#5879, #5880)
4. Notificações duplicadas no Telegram (#5870)
5. Estado do provider perdido antes de compactação nativa (#5883)

Isso sugere que a área de *memory management* precisa de revisão arquitetural.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features em Desenvolvimento

| # | Título | Área | Prioridade | Sinais de Demanda |
|---|--------|------|------------|-------------------|
| [#5885](https://github.com/HKUDS/nanobot/pull/5885) | Gate idle transcript replacement on token threshold | memory | p1 | Endereça regressão #5280 — sessões curtas ad-hoc precisam ser preservadas |
| [#5847](https://github.com/HKUDS/nanobot/pull/5847) | Unify session file and website previews | webui | — | UX mais fluida com tabs persistentes e preview unificado |
| [#5405](https://github.com/HKUDS/nanobot/pull/5405) | Support manual-only invocation for skills | skills | p2 | Skills de deployment/publicação precisam de modo explícito user-only |
| [#4551](https://github.com/HKUDS/nanobot/pull/4551) | Add isolated_session config for heartbeat | heartbeat | p2 | Permite heartbeat execution no mesmo chat session (contexto compartilhado) |
| [#5520](https://github.com/HKUDS/nanobot/pull/5520) | Langfuse tracing for codex | provider | p2 | Observabilidade para Codex (atualmente só OpenAI-compatible provider tinha) |
| [#5848](https://github.com/HKUDS/nanobot/pull/5848) | Deliver image results in replies | webui | — | Screenshots e imagens geradas entregue ao final de replies |

### Tendências de Roadmap Inferidas

1. **Robustez de memória/compactação** — Prioridade顯然, com múltiplos PRs corretivos
2. **WebUI mais rica** — Previews, dashboards de uso, comandos de prompt (deferred), entrega de imagens
3. **Observabilidade** — Langfuse tracing para Codex
4. **Skills mais flexíveis** — Modo manual-only, melhor controle de invocation
5. **Canais** — Linear UX, boot notifications WhatsApp, voz WhatsApp (Fish Audio)

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Reportadas

| Dor | Fonte | Impacto |
|-----|-------|---------|
| **Spam de notificações de compactação** | Issue [#5870](https://github.com/HKUDS/nanobot/issues/5870) | Experiência degradada no Telegram; usuário viu 6+ notificações repetidas |
| **Quebra de instâncias após upgrade 0.3.5** | Issue [#5881](https://github.com/HKUDS/nanobot/issues/5881) | Instâncias existentes não iniciam; exigência de mover `_nanobot` fora do workspace é contraintuitiva |
| **Sessões curtas perdidas por idle compaction** | Issue [#5280](https://github.com/HKUDS/nanobot/issues/5280) (referenciado em #5885) | Regressão afeta sessões ad-hoc; Dream não consegue ver conversas curtas |
| **Requer patching após cada update** | Issue [#2152](https://github.com/HKUDS/nanobot/issues/2152) | Integração WhatsApp via Fish Audio quebra com updates do core |
| **Histórico não retrievable pós-compaction** | Issue [#5290](https://github.com/HKUDS/nanobot/issues/5290) | Duplicação de código de escrita JSONL dificultava manutenção e rastreabilidade |

### Cenários de Uso Observados

- **Uso pessoal via Telegram**: Interação contínua com contexto longo → dependência de compactação estável
- **WhatsApp como canal secundário**: Usuários querem parity com Telegram (voz, notificações de boot)
- **Linear como plataforma de tasks**: Integração OAuth e delegated issues indica uso em ambiente corporativo
- **Multi-instância**: pelo menos 2 instâncias simultâneas observadas (issue #5881)

### Satisfação/Insatisfação

| Aspecto | Status |
|---------|--------|
| Core agent (codex, tools, memory) | ⚠️ Instável — múltiplos bugs P1/P2 abertos |
| WebUI | ✅ Em progresso — dashboards e previews em evolução |
| Integração Linear | ✅ Melhora contínua — #5871 fechado hoje |
| Canais (Telegram, WhatsApp) | ⚠️ Parcial — voz STT/TTS requer patching manual |
| Documentação | ⚠️ Desatualizada — #5882 corrigiu comportamento de compaction |

---

## 8. Backlog que Merece Atenção

### Issues Abertas Sem Atribuição ou Resposta

| # | Título | Criado | Atualizado | Dias Inativo | Prioridade | Observação |
|---|--------|--------|------------|--------------|------------|------------|
| [#5849](https://github.com/HKUDS/nanobot/issues/5849) | Auto-compaction deadlock | 2026-09-21 | 2026-09-22 | 2 | p1 | Bug crítico de design; nenhum assignee visível |
| [#5879](https://github.com/HKUDS/nanobot/issues/5879) | Large read_file aborts turn | 2026-09-23 | 2026-09-23 | 0 | p1 | Recém-criado; fix #5880 em aberto |
| [#5881](https://github.com/HKUDS/nanobot/issues/5881) | 0.3.5 workspace validation | 2026-09-23 | 2026-09-23 | 0 | p1 | Recém-criado; queixa de breaking change |

### PRs Abertos com Conflitos

| # | Título | Criado | Conflito | Risco |
|---|--------|--------|----------|-------|
| [#5520](https://github.com/HKUDS/nanobot/pull/5520) | langfuse tracing for codex | 2026-08-24 | YES | Stale — 30+ dias de idade |
| [#4551](https://github.com/HKUDS/nanobot/pull/4551) | isolated_session config | 2026-06-26 | YES | Stale — 90+ dias de idade |

### Recomendações de Priorização

1. **Resolução urgente**: #5881 (breaking change 0.3.5), #5849 (deadlock de compaction)
2. **Consolidação**: #5885 e #5884 resolvem problemas de design de idle compaction — devem ser mergeados ou rejeitados rapidamente
3. **Revival**: #5520 (Langfuse) precisa de rebase ou close — 30 dias com conflito
4. **Documentação**: Atualizar release notes da 0.3.5 para abordar problema de workspace (#5881)

---

## Resumo Executivo

| Dimensão | Status | Tendência |
|----------|--------|-----------|
| Atividade de código | 🔥 Alta (35 PRs/24h) | Estável |
| Bugs críticos abertos | ⚠️ 5 (P1) | Preocupante — sistema de compactação需 atenção |
| Releases | ❌ Nenhuma | Estagnado |
| Documentação | ⚠️ Corrigida recentemente (#5882) | Melhorando |
| Engajamento comunidade | ✅ Médio-alto | Stable |

**Veredicto:** O NanoBot está em fase de **estabilização técnica** com volume alto de PRs focados em corrigir edge cases do sistema de memória e compactação. A área mais crítica é *memory management*, que apresenta pelo menos 5 bugs inter-relacionados. A adição do provider IO Intelligence e melhorias na WebUI são positivos. A quebra de compatibilidade da versão 0.3.5 (#5881) requer atenção imediata da maintainer team para evitar frustração na base de usuários.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent
## Data: 2026-09-24

---

## 1. Panorama do Dia

O projeto Hermes Agent registrou **alta atividade** nas últimas 24 horas, com 50 issues e 50 PRs atualizados. Não houve novos lançamentos, mas o volume de atividades indica intensa iteração. O foco predominante permanece na **estabilidade do Desktop**, com múltiplos bugs de renderização duplicada e ordem de mensagens sendo addressed. A equipe mergeou PRs críticos de sessão e compressão, enquanto issues de **P0/P1** relacionadas a perda de dados e renderização após tarefas longas demandam atenção imediata.

---

## 2. Lançamentos

### Nenhuma release registrada nas últimas 24h

O projeto não publicou novas versões. O último ciclo de release aparentemente foi encerrado antes desta janela de análise.

---

## 3. Progresso do Projeto

### PRs Merged/Closed (3 destaques)

| PR | Descrição | Impacto |
|---|---|---|
| [#120374](https://github.com/NousResearch/hermes-agent/pull/120374) | **fix(tui_gateway)**: Aprovação respondida rapidamente não retorna mais em cada resume | ✅ Corrige ghost approvals persistentes após reconnect |
| [#119032](https://github.com/NousResearch/hermes-agent/pull/119032) | **fix(feishu)**: Badge indica progresso no bot, não no usuário | ✅ Elimina notificações de "digitando" para o próprio usuário |
| [#120289](https://github.com/NousResearch/hermes-agent/pull/120289) | **Resumed sessions** enviam `tools[]` byte-identical entre TUI, oneshot e gateway | ✅ Evita cache miss desnecessário em surface hops |

### PRs Abertos em Estágio Crítico

- [#120677](https://github.com/NousResearch/hermes-agent/pull/120677) — **fix(agent)**: Bloqueia artefatos de compressão em tool calls effectful (P1)
- [#120306](https://github.com/NousResearch/hermes-agent/pull/120306) — **fix(tui-gateway)**: Encerrar mid-tool não orfã mais processo tree
- [#120326](https://github.com/NousResearch/hermes-agent/pull/120326) — E2E test suites para profile isolation e transcript fidelity

### Série de Refatoração Desktop (14/14 cuts)

Andrexibiza lidera série massiva de extração de responsabilidades do `main.ts` do Desktop:
- Cuts 6-14 focam em **managed SSH fleet**, connection lifecycle e operational IPC
- PRs [#120711](https://github.com/NousResearch/hermes-agent/pull/120711) a [#120719](https://github.com/NousResearch/hermes-agent/pull/120719) avançam infraestrutura para fleet management

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| Issue | Título | Comentários | Tema Central |
|---|---|---|---|
| [#68927](https://github.com/NousResearch/hermes-agent/issues/68927) | Desktop: após tarefas longas, Enter persiste mas UI não renderiza | 14 | **UI freeze após long turns** |
| [#70108](https://github.com/NousResearch/hermes-agent/issues/70108) | Desktop renderiza replies duplicados intermitentemente | 13 | **Duplicação em streaming** |
| [#118670](https://github.com/NousResearch/hermes-agent/issues/118670) | Long streaming turn (178s, 4 tool calls) renderizado 2x ao vivo | 12 | **Session state race** |
| [#35060](https://github.com/NousResearch/hermes-agent/issues/35060) | Feature: `deliver` target configurável para watch_entities | 11 | **Home Assistant extensibilidade** |

### Padrão Identificado: Duplicação de Renderização Desktop

A comunidade reporta **consistentemente** bugs de mensagens duplicadas ou desaparecendo no Desktop. Há pelo menos **12 issues separadas** sobre duplicação de mensagens, todas classificadas com `sweeper:risk-session-state`. O denominador comum:

1. Turns longos com múltiplas tool calls
2. Compressão de contexto ativa
3. Session switching durante streaming
4. Provider switching em mid-conversation

---

## 5. Bugs e Estabilidade

### 🔴 P0 — Crítico

| Issue | Descrição | Status |
|---|---|---|
| [#119844](https://github.com/NousResearch/hermes-agent/issues/119844) | `config.yaml` insere silenciosamente espaços em scalars long double-quoted (ruamel re-folding) | **ABERTA** — impacta configuração de produção |
| [#120582](https://github.com/NousResearch/hermes-agent/issues/120582) | **Incidente produção real**: prune + compressão truncam variáveis em scripts de fleet, com evidência em state.db | **ABERTA** — dados loss confirmed |

### 🟠 P1 — Alto

| Issue | Descrição | Status |
|---|---|---|
| [#68927](https://github.com/NousResearch/hermes-agent/issues/68927) | Desktop: após long tasks, Enter persiste no backend mas UI não mostra user bubble | CLOSED |
| [#120677](https://github.com/NousResearch/hermes-agent/pull/120677) | **[PR]**: Bloqueia artefatos de compressão em effectful tool calls | ABERTA |
| [#120289](https://github.com/NousResearch/hermes-agent/pull/120289) | **[PR]**: Byte-identical tools[] em session resume | ABERTA |

### 🟡 P2 — Médio

**+20 issues** de severidade P2 concentradas em:

1. **Desktop rendering**: duplicação de mensagens, ordem incorreta, disappear after switch
2. **Session state**: ghost approvals, stale "Thinking", dropped prompts
3. **Streaming**: truncamento de respostas longas no Windows, flash and disappear (NVIDIA NIM)
4. **Compression**: args truncados, marker tail copying, context loss mid-session

### 🟢 P3 — Baixo

- [#35060](https://github.com/NousResearch/hermes-agent/issues/35060) — Feature request Home Assistant delivery target
- [#118619](https://github.com/NousResearch/hermes-agent/issues/118619) — Camofox VNC link não descoberto (PR [#118623](https://github.com/NousResearch/hermes-agent/pull/118623) em aberto)
- [#88798](https://github.com/NousResearch/hermes-agent/issues/88798) — i18n hardcoded strings em hermes-bots plugin

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Solicitadas

| Issue | Descrição | Demanda | Sinal de Prioridade |
|---|---|---|---|
| [#35060](https://github.com/NousResearch/hermes-agent/issues/35060) | `deliver` target configurável para `watch_entities`/`watch_domains` | Home Assistant → WhatsApp/Telegram/Signal | 11 comentários, P3 |
| [#120719](https://github.com/NousResearch/hermes-agent/pull/120719) | **Fleet management** no Desktop (managed SSH journey) | Capacidade medida de fleet via SSH | Parte da série 14/14 — **prioridade alta** |
| [#120721](https://github.com/NousResearch/hermes-agent/pull/120721) | Plugin catalog: storm-fusion-research | Panel research com MoA/Fusion fanout | Owner-submitted, novo |

### Direcionamentos Observados

- **Desktop refactoring em escala**: 14 PRs simultâneas de extração indicam foco em manutenibilidade
- **Fleet management**: SSH fleet com "measured capacity" e "reviewed targets" sugere produto enterprise
- **Compression reliability**: PRs P1 ativos mostram investimento em segurança de contexto

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais

1. **Desktop Unreliable em Long Sessions**
   > *"After a long-running Desktop conversation or a long tool/task turn, pressing Enter can submit the text to the backend while the Desktop UI fails to complete the visible submit transition"*
   — [#68927](https://github.com/NousResearch/hermes-agent/issues/68927)

2. **Incidente de Perda de Dados em Produção**
   > *"A long-running agent fleet session had patched scripts silently corrupted mid-session: variables truncated inside files the agent had already written"*
   — [#120582](https://github.com/NousResearch/hermes-agent/issues/120582)

3. **UX Fragmentada com Duplicação**
   > *"Desktop renders one logical assistant response as two separate assistant message bubbles"*
   — [#70108](https://github.com/NousResearch/hermes-agent/issues/70108)

### Cenários Críticos Reportados

- **Janela/Session switch durante turn**: duplica progresso (live + journal twins)
- **Mid-session LCM compaction**: renderer-only duplicação, store clean
- **Provider switch (NVIDIA NIM)**: resposta aparece e desaparece imediatamente
- **Branched session first message**: pode desaparecer silenciosamente, sessão nunca criada

### Satisfação Aparente

- **E2E tests em alta**: PR [#120326](https://github.com/NousResearch/hermes-agent/pull/120326) adiciona suites para bugs recorrentes — comunidade solicita regressão
- **Plugin ecosystem**: adição de storm-fusion-research ao catalog indica expansão

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta por >7 dias

| Issue | Idade | Título | Prioridade |
|---|---|---|---|
| [#117915](https://github.com/NousResearch/hermes-agent/issues/117915) | 3 dias | `compression.threshold_tokens` (256_000) silencia `model_thresholds` em 1M-window | P2 |
| [#118619](https://github.com/NousResearch/hermes-agent/issues/118619) | 3 dias | Camofox VNC link nunca descoberto (PR #118623 pronto) | P3 |
| [#119033](https://github.com/NousResearch/hermes-agent/issues/119033) | 2 dias | Feishu reaction badge notifica usuário em cada turn | P2 |

### Issues Estáveis sem Progresso

| Issue | Idade | Título | Status |
|---|---|---|---|
| [#50159](https://github.com/NousResearch/hermes-agent/issues/50159) | ~90 dias | Desktop stuck em "Thinking" após turn completar | CLOSED |
| [#46606](https://github.com/NousResearch/hermes-agent/issues/46606) | ~90 dias | Long assistant messages parcialmente desaparecem (Windows) | CLOSED |
| [#66710](https://github.com/NousResearch/hermes-agent/issues/66710) | ~65 dias | /moa silent failure no desktop GUI | CLOSED |

### Riscos de Regressão Identificados

- **12+ issues de duplicação de Desktop** — todas com `sweeper:risk-session-state` indicam dívida técnica acumulada
- **Compression artifacts** (PR [#120677](https://github.com/NousResearch/hermes-agent/pull/120677) em aberto) — pode afetar sessões ativas
- **ruamel YAML mutation** ([#119844](https://github.com/NousResearch/hermes-agent/issues/119844)) — silencioso, corrupto configuração em produção

---

## Indicadores de Saúde do Projeto

| Métrica | Valor | Avaliação |
|---|---|---|
| Issues ativas (24h) | 11 | ⚠️ Moderado |
| PRs abertas (24h) | 38 | ✅ Alta atividade |
| PRs merged/closed (24h) | 12 | ✅ Bom throughput |
| P0/P1 issues abertas | 2 | 🔴 Crítico |
| Release activity | 0 | ⚠️ Estável? |
| Issues de duplicação Desktop | 12+ | 🔴 Divida técnica |

---

**Conclusão**: O Hermes Agent apresenta **alta atividade de desenvolvimento** mas acumula **dívida técnica significativa no Desktop**, especialmente em renderização de sessão e compressão de contexto. A série de 14 PRs de refatoração sugere foco em preparação para fleet management enterprise. A ausência de releases nas últimas 24h pode indicar freeze pré-release ou ciclo de desenvolvimento contínuo.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# 📊 Relatório do Projeto PicoClaw — 2026-09-24

---

## 1. 🌅 Panorama do Dia

O projeto PicoClaw apresenta **atividade moderada** nas últimas 24 horas, com 1 issue crítica em aberto e 1 PR merged. O destaque negativo é a **indisponibilidade do site oficial** (picoclaw.io) devido à expiração do certificado TLS desde 2026-09-10, afetando todos os usuários. No front positivo, a integração do protocolo **Build Remote Agent (gbr/1)** foi finalizada, expandindo as capacidades de pareamento telefone-desktop. Não houveram novos lançamentos neste período.

---

## 2. 🚀 Lançamentos

**Nenhum novo release detectado nas últimas 24 horas.**

O último release registrado permanece sem informação detalhada nos dados disponíveis. Recomenda-se verificar a aba Releases no repositório para status mais recente.

---

## 3. 📈 Progresso do Projeto

### PR Merged/Closed

| # | Título | Status | Autor | Importância |
|---|--------|--------|-------|-------------|
| [#3344](https://github.com/sipeed/picoclaw/pull/3344) | Add Build Remote Agent phone pairing (gbr/1) | ✅ CLOSED | LinespottingPrivate | Alta |

**Análise:** Esta PR introduz o protocolo `gbr/1` para pareamento de agentes desktop com dispositivos móveis, permitindo que um celular "assista" ao agente em execução. A implementação requer:
- Instalação do `gbr-agent` v0.6.0+
- Pareamento via QR code ou código de 8 caracteres
- Conexão restrita a `http://127.0.0.1:8788` ou stdio

**Impacto:** Funcionalidade relevante para cenários de monitoramento remoto e debugging colaborativo.

### PR em Aberto

| # | Título | Status | Autor |
|---|--------|--------|-------|
| [#3370](https://github.com/sipeed/picoclaw/pull/3370) | feat(tools): add Keenable web search provider | 🔍 OPEN | ilya-bogin-keenable |

**Análise:** Adiciona Keenable (keenable.ai) como provedor de busca web, funcionando **sem API key** em instalação fresca. Requer apenas habilitação via `tools.web.keenable.enabled: true`.

---

## 4. 🔥 Temas Quentes da Comunidade

### Issue Crítica em Destaque

**[#3377 - CRITICAL: TLS certificate for picoclaw.io expired on 2026-09-10](https://github.com/sipeed/picoclaw/issues/3377)**

| Métrica | Valor |
|---------|-------|
| Status | 🔴 OPEN |
| Prioridade | CRITICAL |
| Autor | dimonb |
| Criado | 2026-09-12 |
| Atualizado | 2026-09-23 |
| Comentários | 2 |
| 👍 | 1 |

**Problema:** O certificado TLS do domínio oficial expirou em **2026-09-10 23:59:59 UTC**. Todos os navegadores e clientes TLS recusam a conexão.

**Demanda:** Renovação imediata do certificado para restaurar o acesso ao site do projeto.

**Urgência:** Considerando que o site está offline há **14 dias**, esta é a questão mais crítica para a saúde do projeto.

---

## 5. 🐛 Bugs e Estabilidade

### Severity: CRITICAL

| # | Título | Status | Criado | Atualizado |
|---|--------|--------|--------|------------|
| [#3377](https://github.com/sipeed/picoclaw/issues/3377) | TLS certificate expired - site down | 🔴 OPEN | 2026-09-12 | 2026-09-23 |

**Recomendação de ação:** Priorizar a renovação do certificado TLS do domínio picoclaw.io. Esta é a única questão de estabilidade reportada nas últimas 24h.

---

## 6. ✨ Pedidos de Features e Sinais de Roadmap

### Nova Feature em Revisão

**[#3370 - feat(tools): add Keenable web search provider](https://github.com/sipeed/picoclaw/pull/3370)**

**Resumo:**
- Adiciona Keenable (https://keenable.ai) como provedor `web_search`
- Funciona **sem API key** em instalação padrão
- Endpoint público: `POST /v1/search/public`
- Requer header `X-Keenable-Title`

**Sinais de Roadmap:**
- Crescente interesse em provedores de busca web alternativos
- Tendência de funcionalidades "zero-config" para onboarding mais fluido

**Status:** Aguardando review/merge. Nenhum comentário ainda.

---

## 7. 👥 Resumo de Feedback dos Usuários

### Feedback Explícito (Issue #3377)

**Dores reportadas:**
1. **Site oficial indisponível** — Impacta visibilidade e documentação do projeto
2. **Experiência degradada** — Usuários são bloqueados por todos os navegadores modernos
3. **Impacto na credibilidade** — Um site down por 14 dias afeta percepção de manutenção

**Cenário de uso afetado:**
- Novos usuários tentando acessar documentação/instruções
- Usuários existentes buscando recursos e links

**Sentimento:** Frustração moderada, evidenciada pelos 2 comentários e upvote.

---

## 8. 📋 Backlog que Merece Atenção

### Issues Sem Resposta Há Longo Tempo

| # | Título | Idade | Status | Prioridade |
|---|--------|-------|--------|------------|
| [#3377](https://github.com/sipeed/picoclaw/issues/3377) | TLS certificate expired | **14 dias** | 🔴 OPEN | CRITICAL |

**Análise:** Embora relativamente recente (14 dias), a issue do TLS certificate **requer resposta imediata**. Issues com +14 dias sem resposta geralmente indicam gargalos de triagem ou falta de mantenedores disponíveis.

**Ações recomendadas:**
1. ✅ Atribuir a issue a um mantenedor com acesso DNS/certificado
2. ✅ Comunicar status à comunidade
3. ✅ Considerar soluções temporárias (redirect, página estática)

---

## 📌 Resumo Executivo

| Indicador | Status | Observação |
|-----------|--------|------------|
| Atividade (24h) | ⚠️ Moderada | 1 issue, 2 PRs |
| Releases | ✅ Nenhuma | Sem mudanças |
| Bugs Críticos | 🔴 1 | Certificate TLS expirado |
| PRs Merged | ✅ 1 | Integração gbr/1 |
| PRs Abertos | 🔍 1 | Keenable provider |
| Saúde Geral | ⚠️ Preocupante | Site offline há 14 dias |

**Veredicto:** O projeto está **funcionalmente saudável em código**, mas sofre com **questão crítica de infraestrutura** (site offline). A comunidade demonstra interesse ativo (PRs sendo submetidas), mas a visibilidade do projeto está comprometida.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-09-24

## 1. Panorama do Dia

O projeto IronClaw apresenta **baixa atividade operacional** nesta terça-feira, sem issues registradas ou resolvidas nas últimas 24h. O ecossistema mantém dois Pull Requests em aberto: um relacionado à preparação da release `1.4.1-rc.2` com atualizações de dependências de segurança (wasmtime e rustls), e outro focado em melhorias na documentação de virtual skill roots. A ausência de issues e releases sugiere um período de estabilização antes do próximo candidate release.

---

## 2. Lançamentos

**Nenhuma release oficial registrada nas últimas 24h.**

| Release | Status | Detalhes |
|---------|--------|----------|
| — | — | Sem releases concretizadas |

O PR [#8110](https://github.com/nearai/ironclaw/pull/8110) indica que a versão `1.4.1-rc.2` está em preparação, mantendo o foco no Google extension OAuth readiness fix já presente na rc.1, com atualização de lockfile para `wasmtime 47.0.4` e `rustls 0.23.45` — ambas corrigindo vulnerabilidades identificadas no advisory database.

---

## 3. Progresso do Projeto

| PR | Título | Tipo | Impacto |
|----|--------|------|---------|
| [#8110](https://github.com/nearai/ironclaw/pull/8110) | chore(release): cut 1.4.1-rc.2 | Release prep | Atualiza dependências de segurança críticas |
| [#8109](https://github.com/nearai/ironclaw/pull/8109) | docs(skills): clarify scoped virtual skill roots | Documentação | Melhora DX para discovery de skills |

**Destaque:** A preparação da rc.2 demonstra atenção à segurança (atualização proativa de wasmtime e rustls), enquanto a documentação de skill roots contribui para reduzir fricção na adoção da plataforma.

---

## 4. Temas Quentes da Comunidade

**Nenhuma issue ou PR com comentários/reações significativos registrados nas últimas 24h.**

- Issues com atividade: **0**
- PRs com discussão ativa: **2** (ambas em estado inicial, sem feedback comunitário visível ainda)

A baixa carga de feedback pode indicar:
- Ciclo de revisão em andamento
- Projeto em fase de maturação da release candidate

---

## 5. Bugs e Estabilidade

**Nenhum bug reportado nas últimas 24h.**

O projeto aparenta estabilidade operacional. A atualização de dependências em preparação para rc.2 sugere postura preventiva quanto a vulnerabilidades conhecidas.

---

## 6. Pedidos de Features e Sinais de Roadmap

**Novas features identificadas nas últimas 24h:**

| PR | Feature | Escopo |
|----|---------|--------|
| [#8109](https://github.com/nearai/ironclaw/pull/8109) | Scoped Virtual Skill Roots | Documentação/MDX |

**Análise:** O PR #8109 clarifica o modelo de discovery de skills com três raízes configuradas (`/skills`, `/system/skills`, `/tenant-shared/skills`). Isso sugere:
- Evolução do modelo de isolamento multi-tenant
- Preocupação com clareza de trust assignment em ambientes compartilhados
- Potencial expansão de cenários de deploy (enterprise/tenant-shared)

---

## 7. Resumo de Feedback dos Usuários

**Sem feedback quantificável registrado nas últimas 24h.**

A ausência de issues abertas e a falta de comentários nos PRs indicam:
- Ciclo de feedback ainda não fechado
- Base de usuários possivelmente pequena ou em fase de avaliação
- Necessidade de monitorar próxima semana para validar engajamento

---

## 8. Backlog que Merece Atenção

| Item | Tipo | Idade | Prioridade | Observação |
|------|------|-------|------------|------------|
| Nenhum item identificado | — | — | — | Sem issues em aberto para rastrear |

**Recomendação:** Monitorar PRs #8110 e #8109 quanto a revisões pendentes, especialmente o PR de documentação (#8109) que pode beneficiar de validação da comunidade antes do merge.

---

## Métricas Consolidada do Dia

| Indicador | Valor |
|-----------|-------|
| Issues abertas/ativas | 0 |
| Issues fechadas | 0 |
| PRs abertos | 2 |
| PRs merged | 0 |
| Releases | 0 |
| Comentários totais | 0 |
| Reações (👍) | 0 |

**Índice de Saúde Geral:** 🟡 **Moderado** — Atividade baixa mas estado estável, com preparação de release em curso.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do Projeto CoPaw — 2026-09-24

---

## 1. Panorama do Dia

O ecossistema CoPaw (QwenPaw) manteve ritmo intenso de atividade nas últimas 24 horas, com 34 issues e 24 PRs atualizados, demonstrando alta dinâmica de desenvolvimento. A comunidade fechou 17 issues e 9 PRs, sinalizando progresso consistente no backlog. A distribuição equilibrada entre itens abertos e fechados sugere um fluxo saudável de triagem e resolução. Destacam-se discussions estratégicas sobre o QwenPaw Hub multi-tenant (issue #7318 com 32 comentários) e correções críticas de bugs no pipeline de ferramentas e gerenciamento de contexto. Não houve release formal publicada hoje, indicando que a equipe可能在 prepara o próximo release com base nas correções em andamento.

---

## 2. Lançamentos

**Nenhum release publicado nas últimas 24 horas.**

O projeto não publicou novas versões formais (release tags) no período. O último release estável mencionados nos issues é **v2.2.0/v2.2.1-beta**, com a versão beta mais recente referenciada como **v2.2.2-beta.3** no issue #7947. A ausência de release hoje contrasta com a alta atividade de PRs, sugerindo que a equipe está acumulando correções para um próximo release bundlado.

---

## 3. Progresso do Projeto

### PRs重要merged/closed hoje:

| # | Título | Status | Impacto |
|---|--------|--------|---------|
| [#7941](https://github.com/agentscope-ai/QwenPaw/pull/7941) | test(unit): batch-3 lock and portability tests cross-platform | ✅ CLOSED | Adicionou **47 arquivos de teste** com **2.720 casos novos**, elevando coverage de **70.51% para 73.79%** (+3.28pp, +4.200 statements) |
| [#7409](https://github.com/agentscope-ai/QwenPaw/pull/7409) | fix(agents): drop empty assistant text blocks | ✅ CLOSED | Elimina blocos de texto vazios em assistant turns que causavam replay de `output_text` com string vazia em sessões |
| [#7927](https://github.com/agentscope-ai/QwenPaw/pull/7927) | fix(web): replace html2text with markdownify | ✅ CLOSED | Substituiu dependência GPL-3.0 por MIT (markdownify) em `web_fetch`, melhorando compatibilidade de licenciamento |
| [#7563](https://github.com/agentscope-ai/QwenPaw/pull/7563) | fix(chat): distinguish model errors from transport failures | ✅ CLOSED | Separa erros de modelo de falhas de transporte, preservando mensagens de rede/autenticação em vez de convertê-las em prompts de configuração |
| [#7955](https://github.com/agentscope-ai/QwenPaw/pull/7955) | docs(website): add download provenance and usage policy | ✅ CLOSED | Clarificou que Downloads são builds open-source sob Apache 2.0, adicionando link ao repositório e página de Usage Policy |
| [#7952](https://github.com/agentscope-ai/QwenPaw/pull/7952) | fix(hub): distinguish invitation redemption failure reasons | ✅ CLOSED | Diferencia 5 causas distintas de falha em convite Hub (antes colapsadas em um único `PermissionError`) |
| [#7940](https://github.com/agentscope-ai/QwenPaw/pull/7940) | feat(console): refine sidebar interactions and persist avatars | ✅ CLOSED | Melhora navegação da sidebar com modos de collapsed/icon-only/detailed, suporte a arrastar e preservar avatares |

### PRs abertos em revisão:

| # | Título | Autor | Destaque |
|---|--------|-------|---------|
| [#7956](https://github.com/agentscope-ai/QwenPaw/pull/7956) | feat(console): optimize settings and sidebar | rayrayraykk | Organiza ferramentas por用途, suporte a 7 idiomas (CN, EN, JP, RU, PT-BR, ID, VI) |
| [#7930](https://github.com/agentscope-ai/QwenPaw/pull/7930) | fix(backup): snapshot SQLite sem releasing locks | niceIrene | Previne SIGBUS em backups online no Linux |
| [#7872](https://github.com/agentscope-ai/QwenPaw/pull/7872) | fix(scroll): preserve interrupted requests | niceIrene | Mantém requisições interrompidas visíveis no contexto após compactação |
| [#7874](https://github.com/agentscope-ai/QwenPaw/pull/7874) | feat(pawapp): redesign SDK and control plane | cyruszhang | Expõe domínio de trabalho com boundary público/privado, task ownership e idempotent dispatch |
| [#7960](https://github.com/agentscope-ai/QwenPaw/pull/7960) | fix(providers): recover after stalled stream cleanup | lorenzozanee | Bound de 60s em quarantine de providers travados, evitando deadlock |

---

## 4. Temas Quentes da Comunidade

### Issue com maior engajamento: **QwenPaw Hub Multi-Tenant Roadmap**
- **[#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318)** — QwenPaw Hub, the multi-tenant edition, released in 2.2.0: what should we build next?
  - **32 comentários** | 4 👍 | Criado: 2026-08-26 | Status: OPEN
  - **Análise:** Issue de discussão estratégica sobre a evolução do QwenPaw Hub. A comunidade respondeu pedindo: acesso multi-usuário, admin-managed skills, e deployment team-wide. Este é o termômetro mais claro das prioridades de usuário enterprise.

### Discussion calorosa sobre protocolo:
- **[#7484](https://github.com/agentscope-ai/QwenPaw/issues/7484)** — A2A何时支持? (5 comentários)
  - Pergunta direta sobre timeline de suporte a A2A (Agent-to-Agent protocol), revelando demanda por interoperabilidade além do MCP já implementado.

### Feature requests com potencial de roadmap:
- **[#7733](https://github.com/agentscope-ai/QwenPaw/issues/7733)** — Agent-autonomous context management (4 comentários)
  - Proposta para dar ao agent controle sobre eviction de contexto, evitando que compactação seja triggered puramente por threshold de tokens sem input do agent.

- **[#7062](https://github.com/agentscope-ai/QwenPaw/issues/7062)** — Per-agent reasoning_effort override (3 comentários)
  - Permite configurar "força de raciocínio" por agente/sessão ao invés de global por modelo.

---

## 5. Bugs e Estabilidade

### 🛑 P0 — Críticos (impacto em produção):

**1. Bug no Feishu WebSocket sem auto-reconnect**
- **[#2335](https://github.com/agentscope-ai/QwenPaw/issues/2335)** — WebSocket connection drops without auto-reconnect
  - Conexão longa (6-24h) cai e não reconecta automaticamente, causando silêncio total no canal Feishu.
  - **P0 crítico, reportado desde 2026-03-26, ainda aparece em discussions — indica possível não-resolução.**

**2. Feishu queue consumer deadlock**
- **[#7534](https://github.com/agentscope-ai/QwenPaw/issues/7534)** — queue consumer stays alive & stuck → session silently unresponsive
  - Consumer de alta prioridade (priority=10) trava após processar mensagem card, bloqueando queue sem exception, deixando sessão "morta".

### ⚠️ P1 — Significativos:

**3. RetryChatModel hardcoded 32768 context_size**
- **[#7576](https://github.com/agentscope-ai/QwenPaw/issues/7576)** — CLOSED
  - Fallback hardcoded força todos os modelos a 32.768 tokens, causando `CONTEXT_UNFIT` (>31.130 tokens) mesmo em modelos menores.

**4. ToolResultPruner não corta mídia base64**
- **[#7853](https://github.com/agentscope-ai/QwenPaw/issues/7853)** — view_image base64 acumula infinitamente
  - Apenas processa blocos `type=="text"`, ignorando `type=="data"` com imagens. Acumula em cada turno até estouro de contexto.

**5. Context compaction viola budget de providers**
- **[#7628](https://github.com/agentscope-ai/QwenPaw/issues/7628)** — Compaction pode exceder request budget do provider
  - Trigger baseado apenas no contexto vivo, não no request completo a ser enviado ao provider.

**6. ACP shutdown event loop leak**
- **[#7857](https://github.com/agentscope-ai/QwenPaw/issues/7857)** — Silent session cleanup skip + event loop leak
  - Fallback síncrono em `_shutdown_acp_services()` pode pular cleanup e deixar event loop não fechado.

**7. Scroll eviction perde user turn**
- **[#7836](https://github.com/agentscope-ai/QwenPaw/issues/7836)** — scroll drops user turn inside tool-heavy span
  - Estratégia `scroll` pode archivar user turns que estavam dentro de tool-heavy spans, dessincronizando histórico.

### 📌 P2 — Minor:

| Issue | Descrição |
|-------|-----------|
| [#7948](https://github.com/agentscope-ai/QwenPaw/issues/7948) | Console design quebra user input |
| [#7947](https://github.com/agentscope-ai/QwenPaw/issues/7947) | send_file_to_user não renderiza file card no Console |
| [#7959](https://github.com/agentscope-ai/QwenPaw/issues/7959) | Moonshot kimi-k3 rejeita MCP schemas com anyOf sem type |
| [#7767](https://github.com/agentscope-ai/QwenPaw/issues/7767) | Múltiplos bugs em guardrail-plugin: stale blob, cron misfire, on_acting never fires |
| [#7715](https://github.com/agentscope-ai/QwenPaw/issues/7715) | Daily Paper falha silenciosamente quando arxiv.org inacessível |
| [#7856](https://github.com/agentscope-ai/QwenPaw/issues/7856) | qwenpaw-pet 0.1.1 quebra tool approvals dropando argumento `actor` |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas demandas identificadas nas últimas 24h:

| # | Feature | Tipo | Sinais |
|---|---------|------|--------|
| [#7484](https://github.com/agentscope-ai/QwenPaw/issues/7484) | **A2A Protocol Support** | Protocol | Pergunta direta sobre timeline — MCP já suportado, A2A é next milestone |
| [#7733](https://github.com/agentscope-ai/QwenPaw/issues/7733) | **Agent-autonomous context management** | Core | Agente deveria participar das decisões de eviction |
| [#7062](https://github.com/agentscope-ai/QwenPaw/issues/7062) | **Per-agent reasoning_effort** | Configuration | Permite diferente "profundidade de pensamento" por agente |
| [#1010](https://github.com/agentscope-ai/QwenPaw/issues/1010) | **Multi-model routing por tarefa** | Architecture | Diferentes LLMs para diferentes tarefas em um mesmo agent |
| [#7613](https://github.com/agentscope-ai/QwenPaw/pull/7613) | **OpenViking memory plugin** | Plugin | Novo backend de memória com recall automático (PR em revisão) |

### Sinais do Hub Multi-Tenant (#7318):
- Admin-managed skills
- Multi-user access
- Team deployment
- Convite/billing granular (cf. PR #7952)

### Indicadores de UX/Console:
- Sidebar e settings optimization (PR #7956 — em draft, aguardando UX validation)
- Multi-tab authenticated chat terminal (PR #7861)
- Durable paginated transcript history (PR #7931)

---

## 7. Resumo de Feedback dos Usuários

### Dores crônicas recorrentes:

1. **Canal Feishu instável** — Múltiplos bugs reportados: WebSocket drop (#2335), queue consumer deadlock (#7534), filter config não funciona (#3037), concurrent execution serializa indevidamente (#2841). O canal Feishu aparece em ~6 issues, sugerindo debt técnico significativo.

2. **Contexto e tokens** — Problemas em cadeia: ToolResultPruner não corta mídia (#7853), compaction viola budget (#7628), scroll eviction perde turns (#7836), RetryChatModel hardcoded (#7576). O gerenciamento de contexto é claramente a área com mais bugs inter-relacionados.

3. **Experiência Desktop/Console** — Reportes de UI quebrando input (#7948), arquivos sem renderização (#7947), stale blobs em anexos (#7767). Usabilidade do Console ainda tem atritos significativos.

4. **Reliability em produção** — ACP event loop leak (#7857), stalled stream quarantine (#7960), SQLite backup locks (#7930) revelam edge cases em deploy de longa duração.

### Cenários de uso destacados:
- **Multi-tenant enterprise**: QwenPaw Hub para equipes (#7318)
- **Agentes pesquisadores**: Daily Paper cron job para arxiv (#7715)
- **Dev agents**: Ferramentas de arquivo, diff, log (#7836, #7853)
- **Multi-model orchestration**: Diferentes LLMs por tarefa (#1010)

### Satisfação inferred:
- 32 comentários na discussão do Hub indicam engajamento ativo
- PRs de comunidade (first-time contributors: #6854, #7613) mostram onboarding positivo
- Sprints de cobertura de teste (+3.28pp) indicam disciplina de qualidade

---

## 8. Backlog que Merece Atenção

### Issues sem resposta significativa (baixo engajamento mas potencialmente críticos):

| # | Título | Idade | Status | Prioridade |
|---|--------|-------|--------|------------|
| [#2335](https://github.com/agentscope-ai/QwenPaw/issues/2335) | Feishu WebSocket sem auto-reconnect | ~6 meses | OPEN | **P0** — nunca resolvido |
| [#3016](https://github.com/agentscope-ai/QwenPaw/issues/3016) | Instalação em servidor China Linux trava | ~5 meses | CLOSED | P2 — fechar ou documentar |
| [#3035](https://github.com/agentscope-ai/QwenPaw/issues/3035) | processor not found: im.message.reaction.created_v1 | ~5 meses | CLOSED | — |
| [#2710](https://github.com/agentscope-ai/QwenPaw/issues/2710) | Notificações locais não aparecem pós-tarefa | ~5 meses | CLOSED | — |
| [#3037](https://github.com/agentscope-ai/QwenPaw/issues/3037) | Feishu filter config não funciona | ~5 meses | CLOSED | — |
| [#2414](https://github.com/agentscope-ai/QwenPaw/issues/2414) | Dingtalk timeout + session collision | ~6 meses | CLOSED | — |

### Issues estratégicos sem movimento recente:

| # | Título | Comentários | Criado | Status |
|---|--------|-------------|--------|--------|
| [#7377](https://github.com/agentscope-ai/QwenPaw/issues/7377) | Agent Loop mode não persiste entre tasks | 6 | 2026-08-28 | OPEN |
| [#7848](https://github.com/agentscope-ai/QwenPaw/issues/7848) | — | — | — | — |
| [#7836](https://github.com/agentscope-ai/QwenPaw/issues/7836) | Scroll eviction lose user turns | 3 | 2026-09-17 | OPEN |

### PRs aguardando merge:

| # | Título | Age | Importância |
|---|--------|-----|-------------|
| [#7874](https://github.com/agentscope-ai/QwenPaw/pull/7874) | PawApp SDK redesign | ~5 dias | Alta — novo paradigma de extensibilidade |
| [#7931](https://github.com/agentscope-ai/QwenPaw/pull/7931) | Durable paginated transcript | ~2 dias | Alta — reliability de histórico |
| [#7613](https://github.com/agentscope-ai/Q

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório de Projeto ZeroClaw — 2026-09-24

## 1. Panorama do Dia

O ecossistema ZeroClaw demonstra **alta atividade de desenvolvimento** nas últimas 24 horas, com 50 PRs atualizados e 11 issues em discussão. Não houve lançamentos hoje, mas quatro PRs de infraestrutura crítica foram fechados (fixes de release e CI/CD). A codebase enfrenta um momento de consolidação técnica: bugs de segurança em componentes de runtime e channels estão em destaque, enquanto refatorações de grande escala — como a extração do módulo cron — continuam em revisão ativa. A distribuição de Issues mostra que a equipe prioriza corretamente vulnerabilidades de alto risco (S0/S1), especialmente no domínio de segurança e integridade de dados.

---

## 2. Lançamentos

**Nenhum release publicado nas últimas 24 horas.**

| Versão | Status | Observação |
|--------|--------|------------|
| — | Sem releases | Projeto em ciclo de preparação; PRs de infraestrutura fecham para viabilizar o próximo tag |

O tracker [Release efficiency and repeatable publication (#10814)](https://github.com/zeroclaw-labs/zeroclaw/issues/10814) coordena melhorias no pipeline de release, indicando foco em redução de tempo de build e validação antecipada (ex.: checagem de notarização Apple antes da compilação em [#10816](https://github.com/zeroclaw-labs/zeroclaw/pull/10816)).

---

## 3. Progresso do Projeto

### PRs fechados/merged hoje (4):

| PR | Escopo | Impacto |
|----|--------|---------|
| [#10818](https://github.com/zeroclaw-labs/zeroclaw/pull/10818) — `perf(docs): promote stable metadata without rebuilding` | CI/Docs | Elimina rebuild completo de 5 locales ao promover docs estáveis; reduz tempo de release |
| [#10816](https://github.com/zeroclaw-labs/zeroclaw/pull/10816) — `fix(release): check Apple notarization before compilation` | CI/Release | Descobre credenciais inválidas antes de compilar em múltiplas arquiteturas macOS |
| [#10815](https://github.com/zeroclaw-labs/zeroclaw/pull/10815) — `fix(release): order versioned dev dependencies before publication` | Cargo/Release | Corrige falha de publicação ao ordenar dependências de desenvolvimento por versão |
| [#10931](https://github.com/zeroclaw-labs/zeroclaw/pull/10931) — `fix(service): bound Windows task stdout and stderr logs` | Service/Windows | Substitui redireção `.cmd` por writer interno com limites de tamanho; previne growth descontrolado de logs |

### PRs abertos de destaque em revisão:

- **[#10557](https://github.com/zeroclaw-labs/zeroclaw/pull/10557)** — Extração do módulo `zeroclaw-cron` (11.386 linhas movidas via `git mv`). Requer maintainer review.
- **[#10321](https://github.com/zeroclaw-labs/zeroclaw/pull/10321)** — Browser PKCE + cross-surface enrollment API (Stage 5, supersedes #8672). Stack de 34 commits em review.
- **[#10621](https://github.com/zeroclaw-labs/zeroclaw/pull/10621)** — Coordenação de lifecycle mutations de agentes via autoridade centralizada de config.
- **[#10592](https://github.com/zeroclaw-labs/zeroclaw/pull/10592)** — Self-serve enrollment via `relay claim` para ZeroRelay.
- **[#10591](https://github.com/zeroclaw-labs/zeroclaw/pull/10591)** — MCP launcher com distribuição por plataforma.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários):

| Issue | Título | Comentários | Área |
|-------|--------|-------------|------|
| [#10922](https://github.com/zeroclaw-labs/zeroclaw/issues/10922) | WhatsApp Web ignora `suppress_voice` ao enfileirar TTS automático | 5 | Channel/WhatsApp |
| [#11052](https://github.com/zeroclaw-labs/zeroclaw/issues/11052) | Renderizar thematic breaks e setext headings para WhatsApp | 4 | Channel/WhatsApp |
| [#10968](https://github.com/zeroclaw-labs/zeroclaw/issues/10968) | Turns não-atendidos rodam sem ApprovalManager (risco S0) | 3 | Security/Agent |
| [#10985](https://github.com/zeroclaw-labs/zeroclaw/issues/10985) | Canal-started turns criam instâncias fresh, quebrando channel-backed tools | 3 | Gateway/API |
| [#11055](https://github.com/zeroclaw-labs/zeroclaw/issues/11055) | Daemon nunca registra channel-map factory | 2 | Runtime/Channels |

### Análise dos temas quentes:

**Canal WhatsApp é o maior ponto de fricção** — três issues no top 5 tratam de problemas no canal WhatsApp Web: `suppress_voice` ignorado, thematic breaks não renderizados, e `force_voice` não respeitado ([#11059](https://github.com/zeroclaw-labs/zeroclaw/issues/11059)). Há também demanda por pacing nativo de polls ([#11050](https://github.com/zeroclaw-labs/zeroclaw/issues/11050)). Isso sugere que a integração WhatsApp está em fase de maturação e recebendo uso real intenso.

**Segurança em turnos não-interativos** — [#10968](https://github.com/zeroclaw-labs/zeroclaw/issues/10968) expõe que `cron`, `heartbeat`, `headless SOP` e `spawn_subagent` executam sem `ApprovalManager`, tornando aprovações de ferramentas baseadas em risk-profile "silenciosamente inertes". Este é um bug S0 com risco de segurança赫然.

---

## 5. Bugs e Estabilidade

### Por Severidade:

| Severidade | Count | Exemplos |
|------------|-------|---------|
| **S0** (data loss / security) | 2 | [#10968](https://github.com/zeroclaw-labs/zeroclaw/issues/10968) (ApprovalManager ausente), [#10797](https://github.com/zeroclaw-labs/zeroclaw/issues/10797) (markdown backend perde dados em writes concorrentes) |
| **S1** (major degraded) | 0 | — |
| **S2** (minor degraded) | 4+ | [#10922](https://github.com/zeroclaw-labs/zeroclaw/issues/10922) (WhatsApp TTS), [#10985](https://github.com/zeroclaw-labs/zeroclaw/issues/10985) (channel tools em dashboard), [#11055](https://github.com/zeroclaw-labs/zeroclaw/issues/11055) (channel-map factory), [#11059](https://github.com/zeroclaw-labs/zeroclaw/issues/11059) (force_voice ignorado) |

### Bugs Críticos Sem Prioridade Definida:

| Issue | Descrição | Risco |
|-------|-----------|-------|
| [#10814](https://github.com/zeroclaw-labs/zeroclaw/issues/10814) | Tracker: Release efficiency | High (CI) |
| [#10797](https://github.com/zeroclaw-labs/zeroclaw/issues/10797) | MarkdownMemory perde entries em writes sobrepostos (S0, `priority:p1`) | High |
| [#10968](https://github.com/zeroclaw-labs/zeroclaw/issues/10968) | ApprovalManager ausente em turns não-interativos | High |

**Alerta de estabilidade:** O bug de `MarkdownMemory::store` ([#10797](https://github.com/zeroclaw-labs/zeroclaw/issues/10797)) pode causar perda silenciosa de dados em ambientes com alta concorrência. Recomenda-se mitigação imediata ou workaround documentado.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features (criadas nas últimas 24h):

| Issue | Título | Sinais de roadmap |
|-------|--------|-------------------|
| [#11075](https://github.com/zeroclaw-labs/zeroclaw/issues/11075) | Adicionar `agy_cli` — coding-CLI para Google Antigravity CLI | Expansão do ecossistema de agents (peer de codex_cli, claude_code, etc.) |
| [#11074](https://github.com/zeroclaw-labs/zeroclaw/issues/11074) | RFC: `search_routes` — hint-based routing para web_search_tool | Arquitetura de routing flexível por provider; espelha `[[model_routes]]` |

### Features em desenvolvimento ativo:

| PR | Área | Descrição |
|----|------|-----------|
| [#10325](https://github.com/zeroclaw-labs/zeroclaw/pull/10325) | Runtime | Pre-turn tool-elicitation hints (flag default-off, fail-closed) |
| [#10351](https://github.com/zeroclaw-labs/zeroclaw/pull/10351) | Runtime | Execução-tree iteration budgets |
| [#10698](https://github.com/zeroclaw-labs/zeroclaw/pull/10698) | Web | Guided cron schedule editor (5 campos vs raw text) |
| [#10504](https://github.com/zeroclaw-labs/zeroclaw/pull/10504) | Turn | Typed stop taxonomy para turn-path aborts |
| [#10583](https://github.com/zeroclaw-labs/zeroclaw/pull/10583) | Gateway | Upload de qualquer arquivo em `/api/upload` com marcadores RPC-parity |

### Tendências de roadmap observadas:
- **Multi-agent coordination**: lifecycle mutations centralizadas, execution budgets, typed abort taxonomy
- **Enhanced channels**: WhatsApp markdown rendering, native polls pacing, Telegram configurável
- **Developer experience**: CLI tools para agents externos (agy_cli), guided editors, transcript URL clickable
- **Security posture**: Browser PKCE, self-serve relay enrollment, bounded logs

---

## 7. Resumo de Feedback dos Usuários

*Nota: Os dados de issues/PRs representam a perspectiva de contribuidores e não feedback direto de usuários finais. Abaixo, inferências dos padrões de bugs e features.*

### Dores identificadas:

1. **Inconsistência de comportamento em canais** — Múltiplos bugs em WhatsApp (TTS, voice, polls, Markdown) indicam que usuários enfrentam surpresas quando o output do modelo contém elementos não-trivial (thematic breaks, голосовые команды, polls).

2. **Incompatibilidade entre pontos de entrada** — [#10985](https://github.com/zeroclaw-labs/zeroclaw/issues/10985) e [#11055](https://github.com/zeroclaw-labs/zeroclaw/issues/11055) revelam que ferramentas dependentes de canal (`poll`, `reaction`, `channel_room`, `ask_user`) quebram dependendo de como o turn foi iniciado (dashboard vs daemon vs webhook). Isso fragmenta a UX.

3. **Preocupação com segurança em automações** — O bug de ApprovalManager ausente ([#10968](https://github.com/zeroclaw-labs/zeroclaw/issues/10968)) sugere que operadores de automações (cron jobs, SOPs) podem estar executando ações não-autorizadas sem perceber.

4. **Perda de memória em alta concorrência** — [#10797](https://github.com/zeroclaw-labs/zeroclaw/issues/10797) é crítico para usuários que usam a memória como fonte de verdade.

### Cenários de uso emergentes:
- **Operadores de canais múltiplos**: Usuários com WhatsApp + Telegram paired simultaneamente reportam gaps de funcionalidade.
- **Desenvolvedores de tooling**: Demanda por CLI agents externos (Google Antigravity, Codex) como ferramentas de delegação.
- **Usuários de Slack avançado**: PR [#10622](https://github.com/zeroclaw-labs/zeroclaw/pull/10622) adiciona suporte a bot messages e workflow steps.

---

## 8. Backlog que Merece Atenção

### Issues sem atividade recente (>7 dias desde último comentário):

| Issue | Título | Days Silent | Prioridade |
|-------|--------|-------------|------------|
| [#10797](https://github.com/zeroclaw-labs/zeroclaw/issues/10797) | MarkdownMemory lose data on concurrent writes | ~11 dias | P1 / High |
| [#10814](https://github.com/zeroclaw-labs/zeroclaw/issues/10814) | Release efficiency tracker | ~11 dias | High |

### Issues com status `needs-maintainer-review` sem resposta:

| PR | Título | Autores |
|----|--------|---------|
| [#10557](https://github.com/zeroclaw-labs/zeroclaw/pull/10557) | Extract cron into zeroclaw-cron | JordanTheJet |
| [#10325](https://github.com/zeroclaw-labs/zeroclaw/pull/10325) | Pre-turn tool-elicitation hints | mov-xound-glitch |
| [#10351](https://github.com/zeroclaw-labs/zeroclaw/pull/10351) | Execution-tree iteration budgets | Audacity88 |
| [#10504](https://github.com/zeroclaw-labs/zeroclaw/pull/10504) | Typed stop taxonomy | vikng-dev |

### Recomendações de priorização:

1. **Urgente**: Resolver [#10797](https://github.com/zeroclaw-labs/zeroclaw/issues/10797) (perda de dados) e [#10968](https://github.com/zeroclaw-labs/zeroclaw/issues/10968) (security S0) — ambos S0/high-risk.
2. **Em revisão ativa**: Os PRs do JordanTheJet (cron extraction, bootstrap, relay claim, PKCE) representam trabalho significativo pronto para merge — facilitar reviews.
3. **WhatsApp channel**: Consolidar os 4+ bugs de WhatsApp em uma sprint de hardening antes do próximo release.

---

## Métricas Resumidas (24h)

| Indicador | Valor |
|-----------|-------|
| Issues abertas/ativas | 11 |
| PRs abertos | 46 |
| PRs fechados/merged | 4 |
| Releases | 0 |
| Bugs S0 (critical) | 2 |
| Bugs S2 (degraded) | 4+ |
| Features novas | 2 |
| Contributors ativos | ~8+ |

**Veredicto de saúde:** O projeto está em **estado saudável com pressão de quality assurance**. A alta atividade de PRs e o pipeline de infraestrutura em improvement são positivos. O principal risco é o acúmulo de bugs de segurança e integridade de dados (MarkdownMemory, ApprovalManager) que merecem atenção imediata antes do próximo release.

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*