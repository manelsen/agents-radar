# Resumo diário do ecossistema de agentes de IA 2026-07-29

> Issues: 0 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-07-28 21:02 UTC

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

## 2026-07-29

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source demonstra **alta vitalidade** em 29/07/2026, com seis dos sete projetos monitorados apresentando atividade intensa nas últimas 24h. A exceção é NullClaw, que permanece sem movimento. IronClaw, Hermes Agent e ZeroClaw lideram em volume absoluto de eventos, enquanto NanoBot destaca-se pela taxa de correção de regressões (15+ PRs simultâneos). A ausência de releases formais em todos os projetos sinaliza uma fase de **estabilização coletiva** antes de ciclos de entrega iminentes. Os temas convergentes — gerenciamento de sessão, multi-canalidade, segurança criptográfica e extensibilidade via plugins — revelam maturização acelerada do ecossistema em direção a plataformas de produção.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | Releases | Saúde | Destaque |
|---------|-------------|-----------|----------|-------|----------|
| **NullClaw** | 0 | 0 | 0 | 🔴 Inativo | Sem movimento |
| **NanoBot** | 7 | 39 | 0 | 🟡 Moderada | 5 PRs merged, 34 abertos; 7 bugs P1 ativos |
| **Hermes Agent** | 50 | 50 | 0 | 🟡 Atenção | 12 bugs P2 em aberto; 7 issues >60 dias |
| **PicoClaw** | 4 | 10 | 0 | 🟡 Triagem | 6 PRs + 6 issues stale; 1 release formal |
| **IronClaw** | 50 | 50 | 0 | 🟢 Forte | 17 issues fechadas; 8 PRs coordinated em attested-signing |
| **CoPaw** | 19 | 45 | 0 | 🟡 Crítica | 3 bugs críticos Windows; 2.1.0b1 em preparo |
| **ZeroClaw** | 50 | 50 | 0 | 🟡 Complexa | 3 bugs S1; 5 correções de segurança; RFCs ativos |

**Observação crítica:** Nenhum projeto publicou releases no período, indicando sincronização de ciclos de entrega ou foco exclusivo em estabilização.

---

## 3. Posicionamento do Projeto Principal

Para fins de análise, considera-se **NanoBot** como referência principal por apresentar o relatório mais detalhado e Balanced activity-to-quality ratio.

### Vantagens Competitivas do NanoBot

| Dimensão | Diferencial |
|----------|-------------|
| **Extensibilidade** | Unified Extension Platform (#5098) e Skill Marketplaces (#5116) em P1 — ecossistema plugável mais desenvolvido |
| **Multi-canal** | Suporte a LINE (#5115) cobrindo Japão, Taiwan, Tailândia e Indonésia — expansão geográfica ativa |
| **DX (Developer Experience)** | Diagnóstico inline de startup (#5110), resource aliases (#5131), image-aware presets (#5148) |
| **Automação CI** | Melhorias concretas em velocidade e precisão de PR path detection (#5145, #5144) |

### Comparação Técnica com Pares

| Aspecto | NanoBot | Hermes Agent | IronClaw | ZeroClaw |
|---------|---------|--------------|----------|----------|
| **Arquitetura de plugins** | Extensions + Skills | Plugins + Skills | Extension lifecycle + IronHub | WASM plugins (em migração) |
| **Sessão/Estado** | Session consolidation (com bugs) | Session leases + auto-reset (crítico) | Attested signing (refatoração) | Runtime-owned sessions (RFC) |
| **Segurança** | Não especificada | Não especificada | Attested-signing infrastructure | Path traversal, timing attacks, leak detectors |
| **Canais** | WhatsApp, LINE (dev) | Telegram, Discord, Feishu | Slack, Telegram | WhatsApp, Telegram, Bluesky, Reddit, Slack |
| **Python 3.14** | — | Incompatibilidade P2 | — | — |

### Tamanho da Comunidade

| Projeto | Indicadores de Volume |
|---------|----------------------|
| **IronClaw** | 50/50 issues+PRs; 8 PRs coordinated; épicos de arquitetura |
| **Hermes Agent** | 50/50; 7 issues >60 dias; 12 bugs P2 |
| **ZeroClaw** | 50/50; RFCs com 8+ comentários; 5 correções segurança |
| **NanoBot** | 39 PRs; 7 issues; 5 merged em 24h |
| **CoPaw** | 45 PRs; 19 issues; 3 bugs críticos Windows |
| **PicoClaw** | 10 PRs; 4 issues; stale backlog significativo |

---

## 4. Focos Técnicos Compartilhados

### 4.1 Gerenciamento de Sessão

Problema universal com variações:

| Projeto | Sintoma | Severidade |
|---------|---------|------------|
| Hermes Agent | Auto-reset descarta contexto; leases acumulam e bloqueiam | P2 (12 bugs) |
| NanoBot | Session locks não liberados (memory leak); output unbound | 7+ regressions |
| IronClaw | turn-state store latch degradation | Crítico |
| ZeroClaw | Agent idle sem status terminal; config flush race | S2 |
| CoPaw | approval_level não propaga para sub-sessions; MCP reconnect | Alta |

**Síntoma coletivo:** A complexidade de gerenciar estado efêmero em agentes de longa execução excede as abstrações atuais.

### 4.2 Multi-Canalidade e Integração de Plataformas

Todos os projetos com exceção de NullClaw enfrentam desafios de integrações fragmentadas:

| Canal | NanoBot | Hermes | PicoClaw | IronClaw | ZeroClaw |
|-------|---------|--------|----------|----------|----------|
| WhatsApp | Bug áudio (P1) | — | — | — | allowed_groups RFC |
| Telegram | — | rich_messages não propagado | — | Live-canary gate | inbound decline UX |
| Discord | — | Anexos canal errado | — | — | Bluesky, Reddit auth |
| Feishu | — | Mensagens duplicadas | Áudio/vídeo nativo | — | — |
| LINE | Em dev | — | — | — | — |
| DingTalk | — | — | Preview bug | — | — |
| Slack | — | — | — | Profiles compartilhados | Lifecycle progress |

### 4.3 Segurança Criptográfica

| Projeto | Foco | Status |
|---------|------|--------|
| **PicoClaw** | libolm → vodozemac migration | 10 comentários, high priority |
| **IronClaw** | Attested-signing infrastructure (8 PRs) | Em desenvolvimento ativo |
| **ZeroClaw** | Path traversal, timing attacks, leak detectors | 5 correções recentes |
| **CoPaw** | Agent isolation (privacidade entre bots) | Feature request |

### 4.4 Extensibilidade e Plugin Architecture

| Projeto | Abordagem | Maturidade |
|---------|-----------|------------|
| **NanoBot** | Unified Extension Platform + Skills Marketplace | P1, em review |
| **IronClaw** | Extension lifecycle + IronHub | Avançada (épicos concluídos) |
| **ZeroClaw** | WASM plugins (compile-time → runtime) | RFC #8850 |
| **Hermes** | Desktop SDK + Kanban plugin | P3 |
| **CoPaw** | computer_use desktop, browser SDK | Em dev |

### 4.5 Estabilidade e QA

| Projeto | Pattern | Implicação |
|---------|---------|------------|
| **NanoBot** | 7+ regressões simultâneas | Release iminente ou refatoração agressiva |
| **Hermes** | 12 bugs P2; 7 issues >60 dias | Backlog de estabilização |
| **CoPaw** | Corrupção sistemática JSON; Windows installer loop | Critical stack |
| **ZeroClaw** | Global mutex poisoning (flaky tests); SIGSEGV | Architectural debt |

---

## 5. Análise de Diferenciação

### 5.1 Por Foco Técnico

| Projeto | Especialização | Público-Alvo |
|---------|----------------|--------------|
| **IronClaw** | Multi-tenant, attested-signing, Railway/libSQL | Enterprise; operadores com compliance requirements |
| **ZeroClaw** | Segurança defensiva; WASM extensibility; SOP operators | DevOps; segurança; automação corporativa |
| **NanoBot** | Multi-canal messaging; DX; extensibilidade | Desenvolvedores; multi-plataforma messaging |
| **Hermes** | Desktop/TUI; CI/MCP automação; skills | Desenvolvedores locais; automação CLI |
| **CoPaw** | Desktop automation; computer_use; NVIDIA NIM | Power users; automação Windows/macOS |
| **PicoClaw** | E2EE; Feishu/DingTalk; LM Studio | Privacy-focused; desenvolvedores Chineses |
| **Hermes Agent** | Cross-platform messaging (Telegram/Discord/Feishu); Python 3.14 | Multi-canal ops; CI pipelines |

### 5.2 Por Público-Alvo

| Segmento | Projetos Otimizados | Funcionalidades-chave |
|----------|---------------------|----------------------|
| **Enterprise/Compliance** | IronClaw, ZeroClaw | Attested signing, multi-tenant, security hardening |
| **Desenvolvedores individuais** | Hermes, CoPaw, NanoBot | Desktop use, CI integration, extensibility |
| **Mercados Regionais** | PicoClaw (China), NanoBot (Linha+SEA) | Feishu, DingTalk, LINE |
| **Automação Corporativa** | ZeroClaw (SOP), Hermes (CI/MCP) | JSON output, skill discovery, operator cancellation |

### 5.3 Por Arquitetura

| Tipo | Projetos | Características |
|------|----------|----------------|
| **Monolítico modular** | NanoBot, Hermes | Core maduro; plugins via extensions/skills |
| **Microserviços coordenados** | IronClaw | ironclaw_common/safety/skills separation; Railway deployment |
| **Plugin-first** | ZeroClaw | WASM runtime; compile-time features em migração |
| **Desktop-centric** | CoPaw | Tauri; computer_use; native automation |
| **Canal-first** | PicoClaw | E2EE; múltiplos mensageiros comprimidos |

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração

| Projeto | PRs/dia | Merged/dia | Taxa Merge | Avaliação |
|---------|---------|------------|------------|-----------|
| **NanoBot** | 39 | 5 | 12.8% | 🟢 Produtiva |
| **CoPaw** | 45 | 9 | 20% | 🟢 Saudável |
| **IronClaw** | 50 | ~17 | ~34% | 🟢 Muito produtiva |
| **Hermes Agent** | 50 | 4 | 8% | 🟡 Gargalo |
| **ZeroClaw** | 50 | ~5 | ~10% | 🟡 Processos pesados |
| **PicoClaw** | 10 | 3 | 30% | 🟢 Baixo volume, alto impacto |

### 6.2 Consolidação de Qualidade

| Projeto | Indicador | Status |
|---------|-----------|--------|
| **IronClaw** | 17 issues fechadas em bloco coordenado | Consolidando épicos de arquitetura |
| **NanoBot** | 5 releases merged; 15+ regressões em paralelo | Preparando release |
| **PicoClaw** |anthropic_messages com cache_control | Feature madura |
| **ZeroClaw** | 5 correções de segurança em 24h | Resposta rápida a vulnerabilidades |

### 6.3 Dívida Técnica Visível

| Projeto | Issues Stale | Issues >60 dias | Backlog Crítico |
|---------|-------------|-----------------|-----------------|
| **Hermes Agent** | Não especificado | 7 | 12 bugs P2 |
| **PicoClaw** | 6 issues + 6 PRs | Não especificado | Android não inicia |
| **CoPaw** | Mínimo | 1 (>7 dias) | 3 bugs críticos Windows |
| **ZeroClaw** | 1 tracker ativo | 2 | 3 bugs S1 |
| **NanoBot** | 1 stale | 0 | 7 bugs P1 |

### 6.4 Engajamento Comunitário

| Projeto | Issue com maior engajamento | Tema |
|---------|---------------------------|------|
| **NanoBot** | #5000 (5 comentários) | Multi-agent collaboration |
| **Hermes Agent** | #4667 (9 reações) | Auto-discover skills locais |
| **PicoClaw** | #3088 (10 comentários) | libolm → vodozemac |
| **IronClaw** | #6284 (15 comentários) | Error-recoverability contract |
| **ZeroClaw** | #9127 (8 comentários) | KeySource trait abstraction |
| **CoPaw** | #6461 (2 reações) | Agent isolation |

---

## 7. Sinais de Tendência

### 7.1 Arquiteturais

| Tendência | Evidência | Implicação |
|-----------|-----------|------------|
| **Plugins como runtime** | ZeroClaw #8850, NanoBot #5098 | Binários menores; features toggleáveis; ecossistema de terceiros |
| **Attested/verifiable execution** | IronClaw 8 PRs, ZeroClaw security fixes | Demanda por auditabilidade em produção |
| **Multi-agent nativo** | NanoBot #5000, CoPaw #6461/#6509 | Evolução além de delegation simples |
| **Runtime-owned sessions** | ZeroClaw #9487, Hermes session issues | Desacoplamento de transporte e estado |

### 7.2 De Mercado

| Tendência | Evidência | Implicação |
|-----------|-----------|------------|
| **Expansão geográfica** | NanoBot LINE (SEA), PicoClaw Feishu/DingTalk | Mercados emergentes como alvo |
| **Privacidade como diferencial** | PicoClaw E2EE, CoPaw agent isolation | Regulações GDPR-like impulsionam demanda |
| **Desktop automation** | CoPaw computer_use, Hermes desktop SDK | Agentes como生产力 tools |
| **Enterprise readiness** | IronClaw multi-tenant, ZeroClaw SOP operators | Do-it-yourself para operações |

### 7.3 Técnicas

| Tendência | Evidência | Implicação |
|-----------|-----------|------------|
| **Prompt caching** | PicoClaw #3228 anthropic_messages | Otimização de custos em LLMs |
| **CI/CD integration** | Hermes #3326 JSON output, NanoBot CI fixes | Agentes como componentes de pipeline |
| **Provider diversification** | CoPaw NVIDIA NIM, ZeroClaw Hailo-Ollama | Não-dependência de OpenAI/Anthropic |
| **Python 3.14 breaking changes** | Hermes Agent #58596 | Necessidade de CI em versões preview |

### 7.4 Observações Finais para Decisores

1. **IronClaw e ZeroClaw** representam o estado-da-arte em arquitetura enterprise-grade, com investimentos significativos em segurança e multi-tenant.

2. **NanoBot** destaca-se em DX e multi-canal para mercados diversificados, posicionando-se como plataforma de extensibilidade.

3. **Hermes Agent e CoPaw** focam em experiência de desenvolvedor individual e automação desktop, respectivamente.

4. **PicoClaw** mantém foco em privacidade E2EE com adoção de bibliotecas modernas (vodozemac).

5. **NullClaw** requer investigação sobre motivo de inatividade — risco de abandono ou reestruturação.

6. **Python 3.14** emerge como alerta de compatibilidade transversal; projetos devem estabelecer testing em versões preview.

---

*Relatório gerado em 2026-07-29. Dados agregados de NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw e ZeroClaw.*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-07-29

---

## 1. Panorama do Dia

NanoBot apresenta **alta atividade de desenvolvimento** em 29/07/2026, com 39 PRs atualizados e 7 issues registradas nas últimas 24h. O projeto demonstra maturidade operacional com múltiplas correções de regressão em progresso (15+ PRs com tag `[regression, fix]`), indicando uma base de código ativa sob refatoração contínua. A atividade concentrou-se em **estabilidade do core**, **extensibilidade da plataforma** e **experiência multi-canal**, com 5 PRs já merged/closed e 34 ainda abertos aguardando review.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24h.**

O último release estável permanece como baseline para migrações. Equipe sinalizou foco em correções P1 antes do próximo tag de versão.

---

## 3. Progresso do Projeto

### PRs Merged/Closed Recentemente (5 total)

| # | Título | Impacto | Link |
|---|--------|---------|------|
| **#5145** | `fix(ci): stabilize and speed up CI` | Melhora significativa no tempo de CI com handshake stdin-gated e batch de dependências | [PR #5145](https://github.com/HKUDS/nanobot/pull/5145) |
| **#5144** | `fix(ci): scope PR path detection to head changes` | CI mais precisa para PRs, evitando falsos positivos de mudanças na base | [PR #5144](https://github.com/HKUDS/nanobot/pull/5144) |
| **#5143** | `fix(webui): animate reasoning drawer transitions` | UX refinada com animações sincronizadas (600ms ease-out) | [PR #5143](https://github.com/HKUDS/nanobot/pull/5143) |
| **#5142** | `fix(webui): open threads at latest message` | Melhora navegação em conversas restauradas, convergência exata de scroll | [PR #5142](https://github.com/HKUDS/nanobot/pull/5142) |
| **#5110** | `feat(config): add actionable startup diagnostics and WebUI recovery` | Diagnóstico inline de ambiente, modelo e provider com recovery guidance | [PR #5110](https://github.com/HKUDS/nanobot/pull/5110) |

### PRs Abertos de Alto Impacto (em review)

| # | Título | Prioridade | Link |
|---|--------|------------|------|
| **#5098** | `feat(extensions): add unified extension platform` | P1 | [PR #5098](https://github.com/HKUDS/nanobot/pull/5098) |
| **#5116** | `feat(webui): add skill marketplaces and management` | P1 | [PR #5116](https://github.com/HKUDS/nanobot/pull/5116) |
| **#5115** | `feat(channels): add LINE Messaging API channel` | P1 | [PR #5115](https://github.com/HKUDS/nanobot/pull/5115) |

---

## 4. Temas Quentes da Comunidade

### Issue com Maior Engajamento

| # | Título | Comentários | Reações | Link |
|---|--------|-------------|---------|------|
| **#5000** | `[enhancement] Proposal: evolve the current subagent system toward multi-agent collaboration` | 5 | 0 | [Issue #5000](https://github.com/HKUDS/nanobot/issues/5000) |

**Análise:** Proposta substantiva do usuário `bingqilinweimaotai` questionando a arquitetura atual de subagentes como "delegação de tarefas em background" vs. true multi-agent system. Issue detalha ausência de identidades persistentes, estado compartilhado e comunicação inter-agente. **Sinal claro de demanda para evolução da arquitetura** que pode influenciar roadmap de médio prazo.

### Issue Secundária Relevante

| # | Título | Comentários | Link |
|---|--------|-------------|------|
| **#5** | `uv install` | 7 | [Issue #5](https://github.com/HKUDS/nanobot/issues/5) |

Issue fechada após 7 comentários com discussão técnica sobre atualização de documentação para usar `uv` como package manager (3 👍). Precedente para adoção de `uv` como recommended installation method.

---

## 5. Bugs e Estabilidade

### Regressões Críticas (P1) — 7 issues/bugs ativos

| # | Tipo | Descrição | Severidade | Status | Link |
|---|------|-----------|------------|--------|------|
| **#5118** | Bug | Session consolidation droppa paths de media em `media[]` — arquivos se tornam irrecuperáveis após archive | Crítica | Aberta + 2 PRs em curso | [Issue #5118](https://github.com/HKUDS/nanobot/issues/5118) |
| **#5133** | Bug | `finish_reason='length'` com tool_calls é mal-roteado para retry vazio ao invés de length recovery | Alta | Aberta | [Issue #5133](https://github.com/HKUDS/nanobot/issues/5133) |
| **#5149** | Bug | Audio não é enviado via WhatsApp (recebimento funciona) | Alta | Aberta | [Issue #5149](https://github.com/HKUDS/nanobot/issues/5149) |
| **#5138** | Tracking | MCP SDK v2 migration: cancel-scope teardown errors e stdout protocol pollution | Média-Alta | Track issue | [Issue #5138](https://github.com/HKUDS/nanobot/issues/5138) |

### PRs de Correção de Regressão Em Progresso

| # | Componente | Problema Corrigido | Link |
|---|------------|-------------------|------|
| **#5155** | pairing | `null` approved map causa `AttributeError` | [PR #5155](https://github.com/HKUDS/nanobot/pull/5155) |
| **#5154** | providers | Itens primitivos em Responses API causam `TypeError` em `vars()` | [PR #5154](https://github.com/HKUDS/nanobot/pull/5154) |
| **#5153** | memory | Timestamps não-string causam crash em `_format_messages` | [PR #5153](https://github.com/HKUDS/nanobot/pull/5153) |
| **#5147** | pairing | Falha transitória de leitura apaga todos os approved senders | [PR #5147](https://github.com/HKUDS/nanobot/pull/5147) |
| **#5146** | webui | Keys de token-usage malformadas falham todas as requests de settings | [PR #5146](https://github.com/HKUDS/nanobot/pull/5146) |
| **#5151** | agent | Session locks não são liberados, causando memory leak | [PR #5151](https://github.com/HKUDS/nanobot/pull/5151) |
| **#5150** | exec | Session output não é bound, risco de OOM em streams longas | [PR #5150](https://github.com/HKUDS/nanobot/pull/5150) |

**Análise:** Padrão de 7+ regressões simultâneas sugere ciclo de release iminente ou refatoração agressiva em andamento. A diversidade de componentes afetados (pairing, providers, memory, webui, agent, exec) indica necessidade de QA mais robusto.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em Desenvolvimento Ativo

| # | Feature | Escopo | Link |
|---|---------|--------|------|
| **#5098** | Unified Extension Platform | Native Python extension boundary — preenche gaps que skills/MCP não cobrem | [PR #5098](https://github.com/HKUDS/nanobot/pull/5098) |
| **#5116** | Skill Marketplaces | Discover view combinando skills.sh e SkillHub, trending lists, sparklines de install | [PR #5116](https://github.com/HKUDS/nanobot/pull/5116) |
| **#5115** | LINE Messaging API Channel | Adição do mensageiro popular em Japão, Taiwan, Tailândia e Indonésia | [PR #5115](https://github.com/HKUDS/nanobot/pull/5115) |
| **#5131** | Stable Resource Path Aliases | Resource view em `<config-dir>/resources/<view-id>/` com aliases para agent/media/package | [PR #5131](https://github.com/HKUDS/nanobot/pull/5131) |
| **#5148** | Image-Aware Model Presets | Tri-state `supportsImageInput` handling, migração de agents.defaults para presets nomeados | [PR #5148](https://github.com/HKUDS/nanobot/pull/5148) |

### Demandas da Comunidade (Issues Abertas)

| # | Demanda | Viabilidade | Link |
|---|---------|-------------|------|
| **#5000** | Evolução para multi-agent collaboration com identidades persistentes e estado compartilhado | Complexa, requer RFC | [Issue #5000](https://github.com/HKUDS/nanobot/issues/5000) |

**Sinais de Roadmap:** Foco واضح em (1) extensibilidade via extensions + skill marketplace, (2) cobertura multi-canal (LINE), (3) DX melhorias com resource aliases e image-aware presets. Multi-agent collaboration permanece como demanda não endereçada no curto prazo.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| # | Problema | Contexto | Link |
|---|----------|----------|------|
| **#1332** | Consumo excessivo de tokens ("hello" = 5k tokens, instalação de skills = 30k tokens) | Usuário reclamou do custo; issue marcada stale mas demonstra frustração com efficiency | [Issue #1332](https://github.com/HKUDS/nanobot/issues/1332) |
| **#5** | Necessidade de instruções mais rápidas para instalação | Solicitação para documentar `uv install` (mais rápido e estável que pip) | [Issue #5](https://github.com/HKUDS/nanobot/issues/5) |
| **#5149** | Áudio não funciona no WhatsApp | Bug funcional em canal estabelecido | [Issue #5149](https://github.com/HKUDS/nanobot/issues/5149) |

### Cenários de Uso Evidenciados

- **Multi-canal messaging:** WhatsApp, LINE (em desenvolvimento), múltiplas plataformas
- **Skills e extensibilidade:** Marketplace de skills, extensões nativas Python
- **Agent collaboration:** Usuários avançados desejam padrões multi-agente além de delegation

**Satisfação Geral:** Comunidade ativa reportando bugs específicos com logs detalhados, indicando uso em produção e confiança no projeto para reportar issues.

---

## 8. Backlog que Merece Atenção

### Issues sem Resposta ou Stale

| # | Título | Idade | Estado | Prioridade | Link |
|---|--------|-------|--------|------------|------|
| **#5000** | Multi-agent collaboration proposal | 9 dias | Aberta, 0 👍 | Estratégica | [Issue #5000](https://github.com/HKUDS/nanobot/issues/5000) |
| **#5138** | Track MCP SDK v2 migration | 1 dia | Aberta | Média | [Issue #5138](https://github.com/HKUDS/nanobot/issues/5138) |
| **#5133** | Bug: finish_reason='length' misrouted | 1 dia | Aberta, sem comentários | Alta | [Issue #5133](https://github.com/HKUDS/nanobot/issues/5133) |
| **#5149** | Bug: no audio on WhatsApp | 1 dia | Aberta, 0 👍, 0 comentários | Alta | [Issue #5149](https://github.com/HKUDS/nanobot/issues/5149) |

### PRs Abertos Sem Atribuição Visível

| # | Título | Idade | Prioridade | Link |
|---|--------|-------|------------|------|
| **#5131** | Stable resource path aliases | 1 dia | P1 | [PR #5131](https://github.com/HKUDS/nanobot/pull/5131) |
| **#5098** | Unified extension platform | 3 dias | P1 | [PR #5098](https://github.com/HKUDS/nanobot/pull/5098) |

---

## Indicadores de Saúde do Projeto

| Métrica | Valor | Avaliação |
|---------|-------|-----------|
| PRs fechados/abertos (24h) | 18/21 | 🟢 Equilibrado |
| Bugs P1 abertos | 7 | 🟡 Atenção (ciclo de release?) |
| Features P1 em dev | 5 | 🟢 Pipeline saudável |
| Issues respondidas (<48h) | 4/7 | 🟡 Poderia melhorar |
| Releases (24h) | 0 | 🟡 Pipeline de delivery pausado |

---

*Relatório gerado em 2026-07-29. Dados extraídos de github.com/HKUDS/nanobot.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent
## Data: 2026-07-29

---

## 1. Panorama do Dia

O projeto Hermes Agent mantém um **nível de atividade intenso**, com 50 issues e 50 PRs atualizados nas últimas 24h. A comunidade demonstra engajamento significativo em bugs de estabilidade — especialmente relacionados a sessões, plataformas (Telegram, Discord, Feishu) e ferramentas de visão — além de crescente interesse em funcionalidades de usabilidade como chat temporário e backup incremental. **Não houve lançamentos hoje**, indicando que o time pode estar em fase de estabilização antes de uma próxima release.

---

## 2. Lançamentos

### Nenhuma release nas últimas 24h

O projeto está sem release desde o corte de dados. Recomenda-se monitorar o repositório para announcements de versão.

---

## 3. Progresso do Projeto

### PRs fechados/merged hoje

| PR | Tipo | Descrição | Impacto |
|----|------|-----------|---------|
| [#73580](https://github.com/NousResearch/hermes-agent/pull/73580) | Feature | `/compress` RPC timeout configurável via `config.yaml` | Permite uso com LLMs locais mais lentos sem falhas prematuras |

### PRs abertos hoje (destaques)

| PR | Tipo | Descrição | Prioridade |
|----|------|-----------|------------|
| [#73570](https://github.com/NousResearch/hermes-agent/pull/73570) | Bug fix | Corrige defaults do Gemini para `gemini-3.6-flash` (descontinuação do 2.5) | P2 |
| [#73639](https://github.com/NousResearch/hermes-agent/pull/73639) | Performance | Corrige FTS UPDATE triggers causando I/O saturado | P3 |
| [#73641](https://github.com/NousResearch/hermes-agent/pull/73641) | Bug fix | Race condition em transcript rewrite/rewind | P2 |
| [#68222](https://github.com/NousResearch/hermes-agent/pull/68222) | Feature | Generaliza ACP client para qualquer agente compatível | P4 |
| [#61173](https://github.com/NousResearch/hermes-agent/pull/61173) | Feature | Kanban como primeiro plugin do Desktop SDK | P3 |

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários + reações)

| Issue | Comentários | 👍 | Tema |
|-------|-------------|-----|------|
| [#12857](https://github.com/NousResearch/hermes-agent/issues/12857) | 7 | 0 | **Auto-reset descarta contexto** — session reset não persiste parent session ID |
| [#25837](https://github.com/NousResearch/hermes-agent/issues/25837) | 6 | 0 | **Imagens oversized bloqueiam sessão** — visão inline sem validação de pixels |
| [#58596](https://github.com/NousResearch/hermes-agent/issues/58596) | 5 | 3 | **Python 3.14 quebra DaemonThreadPoolExecutor** — atributo `_initializer` removido |
| [#68920](https://github.com/NousResearch/hermes-agent/issues/68920) | 5 | 0 | **Leak de session leases** — `max_concurrent_sessions` bloqueia novas sessões |
| [#17091](https://github.com/NousResearch/hermes-agent/issues/17091) | 4 | 0 | **Suporte i18n para menu de comandos Telegram** |
| [#3326](https://github.com/NousResearch/hermes-agent/issues/3326) | 3 | 5 | **Flag `--output-format json`** para saída estruturada (CI/MCP) |
| [#4667](https://github.com/NousResearch/hermes-agent/issues/4667) | 2 | 9 | **Auto-discover de skills locais** do diretório `.claude/skills/` |

### Análise dos temas quentes

**Dores técnicas recorrentes:**
- Gerenciamento de sessão (auto-reset, leases, deleção) — [Issues #12857](https://github.com/NousResearch/hermes-agent/issues/12857), [#68920](https://github.com/NousResearch/hermes-agent/issues/68920), [#44117](https://github.com/NousResearch/hermes-agent/issues/44117)
- Integração com plataformas (Telegram, Discord, Feishu) — [Issues #20899](https://github.com/NousResearch/hermes-agent/issues/20899), [#12174](https://github.com/NousResearch/hermes-agent/issues/12174), [#21651](https://github.com/NousResearch/hermes-agent/issues/21651)
- Compatibilidade com Python 3.14 — [Issue #58596](https://github.com/NousResearch/hermes-agent/issues/58596) (3 👍, maior reação da comunidade)

**Demandas de usabilidade:**
- Saída JSON para automação ([#3326](https://github.com/NousResearch/hermes-agent/issues/3326), 5 👍)
- Chat temporário/incognito ([#52341](https://github.com/NousResearch/hermes-agent/issues/52341), 2 👍)
- Skills locais auto-discover ([#4667](https://github.com/NousResearch/hermes-agent/issues/4667), 9 👍 — **segunda maior reação**)

---

## 5. Bugs e Estabilidade

### Por severidade (P1-P2 — Críticos/Altos)

| Bug | Severidade | Componente | Descrição |
|-----|------------|------------|-----------|
| [#58596](https://github.com/NousResearch/hermes-agent/issues/58596) | P2 | tools/delegate | **Python 3.14 incompatível** — `DaemonThreadPoolExecutor` quebrado |
| [#12857](https://github.com/NousResearch/hermes-agent/issues/12857) | P2 | gateway | **Auto-reset descarta contexto** — parent session ID nunca persistido |
| [#25837](https://github.com/NousResearch/hermes-agent/issues/25837) | P2 | tools/vision | **Imagens >8000px bloqueiam sessão** — erro não-retryable da Anthropic |
| [#68920](https://github.com/NousResearch/hermes-agent/issues/68920) | P2 | cli/tui | **Session leases acumulam** — novas sessões bloqueadas |
| [#44117](https://github.com/NousResearch/hermes-agent/issues/44117) | P2 | cli/desktop | **Não consegue deletar sessões** no profile default |
| [#72908](https://github.com/NousResearch/hermes-agent/issues/72908) | P2 | gateway/telegram | **`rich_messages: true` não propagado** para TelegramAdapter |
| [#41662](https://github.com/NousResearch/hermes-agent/issues/41662) | P2 | gateway/cron | **Windows: cron para após crash** — `os.kill(pid,0)` falho |

### Bugs P3 (Médios)

| Bug | Componente | Descrição |
|-----|------------|-----------|
| [#21751](https://github.com/NousResearch/hermes-agent/issues/21751) | plugins/memory | Base64 inline em payloads corrompe extração Hindsight |
| [#21651](https://github.com/NousResearch/hermes-agent/issues/21651) | plugins/feishu | Mensagens antigas re-reproduzidas após restart do gateway |
| [#12174](https://github.com/NousResearch/hermes-agent/issues/12174) | plugins/discord | Anexos ignoram `thread_id` e postam no canal pai |
| [#42682](https://github.com/NousResearch/hermes-agent/issues/42682) | tools/skills | Skills arquivados marcados como "user-modified" bloqueiam sync |
| [#54817](https://github.com/NousResearch/hermes-agent/issues/54817) | gateway/telegram | Streaming draft auto-selecionado causa flicker nas bolhas |

### Issues fechadas hoje (bugs resolvidos)

| Issue | Descrição |
|-------|-----------|
| [#20899](https://github.com/NousResearch/hermes-agent/issues/20899) | Imagens Telegram visíveis ao modelo mas não como anexos |
| [#30178](https://github.com/NousResearch/hermes-agent/issues/30178) | LM Studio context_length regredido para 64K |
| [#68313](https://github.com/NousResearch/hermes-agent/issues/68313) | Telegram draft streaming quebrado na v0.19.0 |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features mais votadas

| Feature | 👍 | Área | Descrição |
|---------|-----|------|-----------|
| [#4667](https://github.com/NousResearch/hermes-agent/issues/4667) | 9 | skills | Auto-discover de skills em `.claude/skills/` do projeto |
| [#3326](https://github.com/NousResearch/hermes-agent/issues/3326) | 5 | cli | Flag `--output-format json` para query estruturada |
| [#52341](https://github.com/NousResearch/hermes-agent/issues/52341) | 2 | agent | Chat temporário/incognito |
| [#69268](https://github.com/NousResearch/hermes-agent/issues/69268) | 1 | agent | Backup incremental para `state.db` (2.4GB+) |

### Features em desenvolvimento (PRs abertos)

| PR | Área | Descrição |
|----|------|-----------|
| [#68222](https://github.com/NousResearch/hermes-agent/pull/68222) | acp | Cliente ACP generalizado para agentes compatíveis |
| [#61173](https://github.com/NousResearch/hermes-agent/pull/61173) | desktop | Kanban como plugin SDK de referência |
| [#71054](https://github.com/NousResearch/hermes-agent/pull/71054) | i18n | Cobertura Arabic completa + RTL |

### Possíveis indicadores de roadmap

- **Compatibilidade Python 3.14** — [Issue #58596](https://github.com/NousResearch/hermes-agent/issues/58596) pode forçar release corretiva
- **Desktop SDK maturity** — Plugin Kanban sendo usado como referência
- **Multi-agente** — Generalização ACP indica direção de ecossistema

---

## 7. Resumo de Feedback dos Usuários

### Dores recorrentes identificadas

| Categoria | Sintomas reportados |
|-----------|---------------------|
| **Gerenciamento de sessão** | Usuários perdem contexto após reset automático; sessões travam com `max_concurrent_sessions`; impossibilidade de deletar sessões no profile default |
| **Ferramentas de visão** | Sessões permanentemente quebradas após envio de imagem grande (>8000px) — erro irreversível |
| **Plataformas de mensagens** | Telegram: imagens visíveis mas não anexáveis; Discord: anexos postados no canal errado; Feishu: mensagens duplicadas após restart |
| **Integração com modelos** | LM Studio ignora context_length configurado; Gemini defaults desatualizados |
| **Python 3.14** | Funcionalidades concorrentes completamente quebradas (delegate, async, skills hub, memory sync) |

### Cenários de uso destacados

- **Automação CI/MCP**: Usuários precisam de saída JSON estruturada para pipelines ([#3326](https://github.com/NousResearch/hermes-agent/issues/3326))
- **Desenvolvedores locais**: LLM servers mais lentos falham com timeout fixo de 120s ([#73580](https://github.com/NousResearch/hermes-agent/pull/73580) — já corrigido)
- **Uso multi-sessão**: Session leases acumulam e bloqueiam novas sessões, especialmente no Desktop/TUI
- **Backup de dados crescentes**: DB SQLite de 2.4GB sem backup incremental viável ([#69268](https://github.com/NousResearch/hermes-agent/issues/69268))

---

## 8. Backlog que Merece Atenção

### Issues antigas sem resolução significativa

| Issue | Criada | Atualizada | Dias | Prioridade | Tema |
|-------|--------|------------|------|------------|------|
| [#12857](https://github.com/NousResearch/hermes-agent/issues/12857) | 2026-04-20 | 2026-07-28 | ~100 | P2 | Auto-reset descarta contexto |
| [#25837](https://github.com/NousResearch/hermes-agent/issues/25837) | 2026-05-14 | 2026-07-28 | ~76 | P2 | Imagens oversized bloqueiam sessão |
| [#21751](https://github.com/NousResearch/hermes-agent/issues/21751) | 2026-05-08 | 2026-07-28 | ~82 | P3 | Base64 inline corrompe Hindsight |
| [#21651](https://github.com/NousResearch/hermes-agent/issues/21651) | 2026-05-08 | 2026-07-28 | ~82 | P3 | Feishu replay stale messages |
| [#26183](https://github.com/NousResearch/hermes-agent/issues/26183) | 2026-05-15 | 2026-07-28 | ~75 | P2 | Feishu auth usa user_id vs open_id |
| [#49773](https://github.com/NousResearch/hermes-agent/issues/49773) | 2026-06-20 | 2026-07-28 | ~39 | P2 | memory_monitor heartbeat nunca inicia |
| [#42682](https://github.com/NousResearch/hermes-agent/issues/42682) | 2026-06-09 | 2026-07-28 | ~50 | P2 | Skills sync bloqueado por archiving |

### Issues com regressão confirmada

| Issue | Descrição | Nota |
|-------|-----------|------|
| [#54817](https://github.com/NousResearch/hermes-agent/issues/54817) | Telegram draft streaming flicker | Regressão da v0.19.0 (The Quicksilver Release) |
| [#30178](https://github.com/NousResearch/hermes-agent/issues/30178) | LM Studio context_length | Regressão desde v0.14.0 — **já fechada, verificar se realmente resolvida** |

---

## Indicadores de Saúde do Projeto

| Métrica | Valor | Observação |
|---------|-------|------------|
| Issues ativas (24h) | 46 | Atividade alta |
| PRs abertos (24h) | 46 | Pipeline saudável |
| PRs fechados (24h) | 4 | Baixa taxa de merge |
| Releases (24h) | 0 | Nenhuma release — possível fase de estabilização |
| Bugs P2 em aberto | ~12 | **Preocupante** — muitos bugs altos sem resolução |
| Issues >60 dias | ~7 | Backlog significativo |

**Recomendação**: O time deve priorizar a resolução dos bugs P2 de session management e Python 3.14 compatibility, que representam riscos de estabilidade para a base de usuários.

---

*Relatório gerado em 2026-07-29 com base em dados do GitHub NousResearch/hermes-agent*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 29 de julho de 2026

---

## 1. Panorama do dia

O projeto PicoClaw demonstra **atividade intensa** em 29/07/2026, com 14 eventos totais nas últimas 24h. O volume de PRs (10) supera significativamente as issues (4), indicando foco em desenvolvimento e consolidação de features. Das 10 PRs, 3 foram merged/fechadas — todas relacionadas a correções de bugs em integrações (Feishu, Anthropic Messages) e resoluções de modelo. A codebase permanece sem releases formais recentes, e **nenhum marco de lançamento foi definido**. A presença marcante de issues stale indica necessidade de triagem operacional pela equipe.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24h.**

O projeto não publicou versões formais no período analisado. A ausência de releases limita a visibilidade sobre o roadmap de distribuição e sugere que o desenvolvimento segue em ritmo de integração contínua sem ciclos de entrega formalizados.

---

## 3. Progresso do Projeto

Três PRs foram fechadas/merged nas últimas 24h, todas representando avanços concretos em estabilidade e funcionalidade:

| PR | Autor | Tema | Impacto |
|----|-------|------|---------|
| [#3256](https://github.com/sipeed/picoclaw/pull/3256) | AaronZ345 | **Fix Feishu**: envio de áudio/vídeo com tipos nativos | Mensagens de mídia agora reproduzem nativamente no Feishu em vez de downloads genéricos |
| [#3228](https://github.com/sipeed/picoclaw/pull/3228) | AayushGupta16 | **Fix Anthropic Messages**: SystemParts com cache_control | Habilita prompt caching no provider anthropic_messages; melhora eficiência de tokens |
| [#3254](https://github.com/sipeed/picoclaw/pull/3254) | fabdelgado | **Fix Agent**: resolução de modelo verbatim preferida | Resolve ambiguidade em fallbacks de modelo; comportamento mais previsível |

### Destaque Técnico
A PR #3228 é particularmente significativa — o provider `anthropic_messages` agora suporta `cache_control` por bloco, eliminando uma limitação que impedia usuários de beneficiarem-se da economia de tokens da API Anthropic.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento

| Issue | Comentários | Reações | Tema |
|-------|-------------|---------|------|
| [#3088](https://github.com/sipeed/picoclaw/issues/3088) | 10 | 👍 2 | **Substituir libolm por vodozemac** (segurança) |
| [#3182](https://github.com/sipeed/picoclaw/issues/3182) | 5 | — | Bug crítico Android: serviço não inicia |
| [#3255](https://github.com/sipeed/picoclaw/issues/3255) | 2 | — | Preview de chat DingTalk mostra "PicoClaw" em vez do conteúdo |

### Análise das demandas

**#3088 — Segurança como prioridade máxima**: A comunidade sinaliza com 10 comentários a necessidade de migrar de `libolm` (não mantido, vulnerável) para `vodozemac`. A issue está marcada como `[priority: high]` e `[help wanted]`, indicando que a equipe reconhece a urgência mas precisa de contribuidores externos para implementar a mudança.

**#3182 — Experiência Android degradada**: O bug impede que usuários Android iniciem o serviço, com screenshot e logs anexados. Com 5 comentários e status `[stale]`, há risco de abandono da issue sem resolução.

---

## 5. Bugs e Estabilidade

### Issues abertas (ativos)

| Issue | Severidade | Descrição | Status |
|-------|------------|-----------|--------|
| [#3182](https://github.com/sipeed/picoclaw/issues/3182) | **Alta** | Android: serviço não inicia, sem ação do usuário | `[stale]` — atenção necessária |

### Issues fechadas (resolvidas hoje)

| Issue | Tipo | Descrição |
|-------|------|-----------|
| [#3255](https://github.com/sipeed/picoclaw/issues/3255) | Bug | Preview DingTalk mostrava texto fixo "PicoClaw" em vez da mensagem real |
| [#3300](https://github.com/sipeed/picoclaw/issues/3300) | Bug | Ferramenta `read_file` ausente causava deadlock em cada对话 |

### Observação sobre stale
As issues #3182, #3255 e PRs #3280, #3279, #3256, #3254, #3251 estão marcadas `[stale]`, sugerindo que não houve interação da equipe nos últimos 30+ dias. Isso pode impactar a percepção da comunidade sobre responsividade.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em desenvolvimento (PRs abertas)

| PR | Autor | Feature | Relevância |
|----|-------|---------|------------|
| [#3299](https://github.com/sipeed/picoclaw/pull/3299) | kesku | **Provedor nativo Exa para busca web** | Integração `tools.web` com API Exa (`/search`, highlights, filtros de data) |
| [#3200](https://github.com/sipeed/picoclaw/pull/3200) | lc6464 | **Cadeia de fallback configurável de modelos** | UI para definir modelo padrão + fallbacks + reordenação |
| [#3259](https://github.com/sipeed/picoclaw/pull/3259) | developerisnow | Atualização da descrição para paralelozação | Documentação/marketing |
| [#1951](https://github.com/sipeed/picoclaw/pull/1951) | lc6464 | Mover scripts de instalação do docs repo | Infraestrutura de deploy |

### Features solicitadas (issues)

| Issue | Demanda | Viabilidade |
|-------|---------|-------------|
| [#3088](https://github.com/sipeed/picoclaw/issues/3088) | vodozemac como替代 de libolm | Requer refatoração de criptografia E2EE |
| [#3182](https://github.com/sipeed/picoclaw/issues/3182) | Suporte Android estável | Bug a ser corrigido |

### Tendência de Roadmap
A adição de Exa como provedor nativo de busca (#3299) e a cadeia de fallback de modelos (#3200) sugerem foco em **flexibilidade de provedores** e **resiliência operacional** para a próxima versão.

---

## 7. Resumo de Feedback dos Usuários

### Dores relatadas

1. **Instabilidade Android (#3182)**: Usuários não conseguem iniciar o serviço, comprometendo caso de uso mobile. Screenshot e logs indicam falha em ambiente Android real.

2. **Segurança do Olm (#3088)**: Comunidade expressa preocupação com dependência de biblioteca não mantida e com vulnerabilidades conhecidas. Dez comentários indicam mobilização significativa.

3. **Experiência DingTalk (#3255)**: Preview de conversa mostra "PicoClaw" em vez do conteúdo — impacta UX em ambiente corporativo onde a primeira impressão da mensagem é crucial.

4. **Deadlock por tool missing (#3300)**: Usuários tentando separar regras em `RULES.md` enfrentavam travamento total por falta da ferramenta `read_file`.

### Cenários de uso identificados

- **Agentes com system prompts complexos**: Usuários tentam modularizar prompts em arquivos separados (RULES.md)
- **Busca web nativa**: Demanda por provedores além dos padrões (Exa)
- **Fallback inteligente de modelos**: Operadores precisam de resiliência quando modelo primário falha
- **Integração multi-canal**: Feishu, DingTalk, Android —fragmentação de integrações gera bugs específicos

---

## 8. Backlog que Merece Atenção

### Issues sem resposta prolongada

| Issue | Idade | Tema | Prioridade |
|-------|-------|------|------------|
| [#3088](https://github.com/sipeed/picoclaw/issues/3088) | ~50 dias | vodozemac/libolm | **Alta** |
| [#3182](https://github.com/sipeed/picoclaw/issues/3182) | ~33 dias | Bug Android | **Alta** |
| [#1951](https://github.com/sipeed/picoclaw/pull/1951) | ~127 dias | Scripts de instalação | Baixa (backlog infra) |

### PRs abertas há longo prazo

| PR | Idade | Tema | Status |
|----|-------|------|--------|
| [#1951](https://github.com/sipeed/picoclaw/pull/1951) | ~127 dias | Move install scripts | Aguardando review |
| [#3200](https://github.com/sipeed/picoclaw/pull/3200) | ~28 dias | Default fallback chain | Aguardando review |

### Recomendações de triagem

1. **#3088**: Avaliar viabilidade técnica e considerar designação de mantenedor ou community champion para coordenar implementação
2. **#3182**: Reproduzir bug Android com ambiente controlado; considerar archivar se não reproduzível
3. **#1951**: PR antiga de chores — revisar escopo e decidir merge ou close

---

## Métricas Resumidas (24h)

| Indicador | Valor |
|-----------|-------|
| Issues abertas/ativas | 1 |
| Issues fechadas | 3 |
| PRs abertas | 7 |
| PRs merged/fechadas | 3 |
| Novas releases | 0 |
| Issues stale | 6 |
| PRs stale | 6 |

**Saúde geral**: O projeto mantém atividade saudável de代码贡献, mas apresenta sinais de dívida de triagem (6 issues + 6 PRs stale). A ausência de releases formais e o acúmulo de items sem resposta recentizam o risco de desengajamento da comunidade.

---

*Relatório gerado automaticamente com base em dados do GitHub — github.com/sipeed/picoclaw*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-07-29

---

## 1. Panorama do Dia

O projeto IronClaw manteve um **ritmo de desenvolvimento intenso** em 2026-07-29, com 50 issues e 50 PRs atualizados nas últimas 24 horas. A atividade concentrou-se em três eixos principais: (1) a consolidação da infraestrutura de *attested-signing* em uma série de 8 PRs coordinated, (2) o fechamento coordenado de 17 issues pertencentes a múltiplos épicos de arquitetura (extensões, canais, jornadas críticas), e (3) a correção de bugs críticos de estabilidade no ambiente Railway/libSQL. Nenhuma release foi publicada no período, e o volume de issues abertas (33) versus fechadas (17) sinaliza uma taxa de resolução robusta de 34%. A saúde geral do projeto permanece ativa, porém com incidentes de estabilidade em produção que demandam atenção imediata.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24 horas.**

O último release documentado (#5598) foi criado em 2026-07-03 e ainda não foi merged.见他:

> **Release iminente** — [PR #5598](https://github.com/nearai/ironclaw/pull/5598) — `ironclaw_common` 0.4.2 → 0.5.0 (breaking changes), `ironclaw_safety` 0.2.2 → 0.2.3, `ironclaw_skills` 0.3.0 → 0.4.0. Atenção: `ironclaw_common` contém mudanças de API que quebram compatibilidade — revisar notas de migração antes de upgrade.

---

## 3. Progresso do Projeto

### 3.1 Issues Fechadas (17 fechadas / 50 atualizadas)

O projeto fechou hoje um **bloco coordenado de 17 issues** pertencentes a cinco épicos de arquitetura, todas pertencentes ao escopo de multi-tenant e multi-canal:

| Issue | Épico Pai | Tema |
|-------|-----------|------|
| [#6518](https://github.com/nearai/ironclaw/issues/6518) | #6487 | Release gates e publicação de saúde de jornadas críticas |
| [#6517](https://github.com/nearai/ironclaw/issues/6517) | #6487 | Mapeamento de jornadas críticas para camadas de evidência |
| [#6516](https://github.com/nearai/ironclaw/issues/6516) | #6487 | Catálogo canônico de jornadas críticas e ownership |
| [#6512](https://github.com/nearai/ironclaw/issues/6512) | #6486 | Política de precedência de extensões e UX de usuário bloqueado |
| [#6511](https://github.com/nearai/ironclaw/issues/6511) | #6486 | API/UI de publicação e governança de extensões para tenants |
| [#6509](https://github.com/nearai/ironclaw/issues/6509) | #6486 | Vinculação de credenciais por usuário com configuração gerenciada |
| [#6508](https://github.com/nearai/ironclaw/issues/6508) | #6485 | Sincronização de eventos de provider e histórico canônico |
| [#6507](https://github.com/nearai/ironclaw/issues/6507) | #6485 | Proveniência de canal e contexto externo no WebUI |
| [#6506](https://github.com/nearai/ironclaw/issues/6506) | #6485 | Contrato de binding canônico de conversa externa |
| [#6502](https://github.com/nearai/ironclaw/issues/6502) | #6484 | Migração de ferramentas Slack para perfis operacionais compartilhados |
| [#6501](https://github.com/nearai/ironclaw/issues/6501) | #6484 | Opt-in de manifesto e conformidade para operações de mensageria |
| [#6500](https://github.com/nearai/ironclaw/issues/6500) | #6484 | Perfis e schemas neutros de operações de mensageria |
| [#6497](https://github.com/nearai/ironclaw/issues/6497) | #6483 | Ciclo de vida Telegram e release gate de live-canary |
| [#6729](https://github.com/nearai/ironclaw/issues/6729) | #6481 | Normalização de persistência de instalação de extensões |
| [#6730](https://github.com/nearai/ironclaw/issues/6730) | #6482 | Capacidades de lifecycle do provider de memória e registro de ferramentas |

**Avanço significativo:** O conjunto de issues fechadas representa a **conclusão de múltiplos épicos de arquitetura** relacionados a tenancy, canais (Slack/Telegram), jornadas críticas e extensão lifecycle — indicando maturidade在这些 domínios.

### 3.2 PRs em Desenvolvimento

#### Consolidação de Attested-Signing (8/8 grupos em progresso)

A infraestrutura de *attested signing* está sendo consolidada em uma stack de 8 PRs:

| PR | Grupo | Tamanho | Risco | Tema |
|----|-------|---------|-------|------|
| [#6748](https://github.com/nearai/ironclaw/pull/6748) | 1/8 | XL | Medium | Substrate core — provider trait, canonical bytes, grant store + ledger |
| [#6749](https://github.com/nearai/ironclaw/pull/6749) | 2/8 | XL | Medium | Turns attested gate + custodial chain signing |
| [#6755](https://github.com/nearai/ironclaw/pull/6755) | 3/8 | XL | Medium | External wallet providers — injected, NEAR redirect, WalletConnect |
| [#6769](https://github.com/nearai/ironclaw/pull/6769) | 4/8 | XL | Low | Attested signer-continuation runtime + composition seam |
| [#6809](https://github.com/nearai/ironclaw/pull/6809) | 5/8 | XL | Medium | Durable PostgreSQL + libSQL attested stores |
| [#6811](https://github.com/nearai/ironclaw/pull/6811) | 6/8 | XL | Low | Provider registration + request_signature gate raise |
| [#6813](https://github.com/nearai/ironclaw/pull/6813) | 7/8 | XL | Low | Multi-tenant isolation, trust registration, KMS ship-gate |
| [#6818](https://github.com/nearai/ironclaw/pull/6818) | 8/8 | XL | Low | Ledger clear-signing product — intent, review, ceremony, sidecar |
| [#6822](https://github.com/nearai/ironclaw/pull/6822) | Ingress | XL | Low | Attested gate/resolve on capability-dispatch model |

**Significância:** Este é um **refactoring arquitetural crítico** que unifica o sistema de assinaturas atestadas, eliminando dependência de criptografia no turn layer e introduzindo invariantes aplicados no nível do banco de dados.

#### IronHub para Reborn

- [#6754](https://github.com/nearai/ironclaw/pull/6754) — **Port do fluxo de instalação IronHub para Reborn** (XL, Low). Substitui #4479, reescrito contra 903 commits de divergência. Integra com o novo `ironclaw_extension_host`.

#### Correções de Estabilidade

- [#6824](https://github.com/nearai/ironclaw/pull/6824) — Fix runner: para de fazer retry silencioso em falhas de model-stage que não podem succeed. Fecha WS1 do épico #6284.
- [#6826](https://github.com/nearai/ironclaw/pull/6826) — Fix LLM: para de ler rate limits como auth failures, e para de fazer retry em modelos faltantes (WS5 do #6284).
- [#6745](https://github.com/nearai/ironclaw/pull/6745) — Fix Reborn: skill bodies nunca foram injetados e skills instaladas/autoradas pelo agente não eram utilizáveis.

#### Testes e Cobertura

- [#6827](https://github.com/nearai/ironclaw/pull/6827) — Test E2E: deriva writes do provider-world de manifests de produção (WS3 do #6524).
- [#6828](https://github.com/nearai/ironclaw/pull/6828) — Test E2E: gate no generic extension webhook ingress (WS8 do #6524).
- [#6823](https://github.com/nearai/ironclaw/pull/6823) — Test integration: gate persistence backends on inventory coverage (WS4 do #6524).

---

## 4. Temas Quentes da Comunidade

### 4.1 Issues com Mais Comentários

| Issue | Comentários | Reações | Status | Tema |
|-------|-------------|---------|--------|------|
| [#6284](https://github.com/nearai/ironclaw/issues/6284) | **15** | 0 | OPEN | **[EPIC] Error-recoverability endgame** — contrato de recoverability para 100% dos erros |
| [#6524](https://github.com/nearai/ironclaw/issues/6524) | 3 | 0 | OPEN | **[EPIC] Hermetic capability and journey testing platform** — cobertura determinística |
| [#6820](https://github.com/nearai/ironclaw/issues/6820) | 1 | 0 | OPEN | IronHub busca URL não-assinada quando descoberta falha (trust boundary) |
| [#6814](https://github.com/nearai/ironclaw/issues/6814) | 1 | 0 | OPEN | Third-party skills ainda disparam denylist de conteúdo por "API key" |
| [#6810](https://github.com/nearai/ironclaw/issues/6810) | 1 | 0 | OPEN | Progressive tool disclosure como default-on |

### 4.2 Análise dos Temas

**#6284 — Error-Recoverability Endgame (prioridade alta, 15 comentários)**

Este épico concentra a maior atenção da comunidade e define um **contrato de recoverability** com cinco cláusulas:
- (a) o run sobrevive ao erro
- (b) o modelo vê o erro
- (c) o que o modelo vê carrega a causa *e* o que faria a operação succeed
- (d) o modelo recebe uma vez para agir sobre isso
- (e) nenhum não-sucesso é reportado como sucesso

**Implicação:** Este é um trabalho de **fundação de confiabilidade** que afetará fundamentalmente como o IronClaw lida com falhas em produção. As correções parciais já merged (#6824, #6826) são entregas WS1 e WS5 deste épico.

**#6524 — Hermetic Testing Platform (3 comentários)**

O épico busca responder mecanicamente: *"Cada capacidade suportada e jornada crítica de usuário tem cobertura determinística significativa?"* O trabalho está em andamento com WS3, WS4, e WS8 já em PR.

---

## 5. Bugs e Estabilidade

### 5.1 Por Severidade

| Prioridade | Issue | Descrição | Link |
|------------|-------|-----------|------|
| **P1** | #6805 | Instância Railway retorna `service_unavailable` intermitentemente (~a cada 30 min) | [Link](https://github.com/nearai/ironclaw/issues/6805) |
| **P1** | #6804 | Deploy de agente falha com `sysbox-mgr connection refused` no staging | [Link](https://github.com/nearai/ironclaw/issues/6804) |
| **Crítico** | #6815 | turn-state store entra em estado degradado permanente após flush failure (requer restart) | [Link](https://github.com/nearai/ironclaw/issues/6815) |
| **P2** | #6806 | Automations não aparecem no web chat — usuário precisa navegar manualmente | [Link](https://github.com/nearai/ironclaw/issues/6806) |
| **Trust Boundary** | #6820 | IronHub reach for unsigned catalog URL — confiança violada | [Link](https://github.com/nearai/ironclaw/issues/6820) |
| **Bug** | #6814 | Third-party skills disparam prompt content denylist com "API key" na descrição | [Link](https://github.com/nearai/ironclaw/issues/6814) |
| **Bug** | #6821 | IronHub search free-text retorna matches como listagem completa do catálogo | [Link](https://github.com/nearai/ironclaw/issues/6821) |
| **Design** | #6807 | `NetworkTargetPattern` não tem validador de host-pattern aplicado no tipo | [Link](https://github.com/nearai/ironclaw/issues/6807) |

### 5.2 Análise de Incidentes

**🔴 #6815 — turn-state store latch degradation (CRÍTICO)**

Este é

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do Projeto CoPaw — 2026-07-29

## 1. Panorama do dia

O projeto CoPaw (também referenciado como QwenPaw) apresenta **alta atividade de desenvolvimento** em 29 de julho de 2026. Nas últimas 24 horas, 19 issues e 45 pull requests foram atualizados, indicando um ciclo de desenvolvimento intenso. Não há novas releases publicadas, mas múltiplos PRs críticos aguardam revisão, incluindo correções para bugs de estabilidade (corrupção de JSON, erros de instalação Windows, truncamento de saída) e funcionalidades aguardadas (isolamento de agentes, automação de desktop). A comunidade demonstra engajamento significativo, especialmente em topics relacionados a privacidade multi-agente e suporte a provedores NVIDIA NIM.

---

## 2. Lançamentos

**Nenhum release detectado nas últimas 24 horas.**

O projeto permanece na versão **2.0.1** (Desktop), com preparativos em curso para a versão **2.1.0b1** conforme evidenciado no PR #6532 que ajusta a verificação de compatibilidade de plugins para suportar o pré-release.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados Recentemente

| PR | Título | Impacto |
|----|--------|---------|
| [#6495](https://github.com/agentscope-ai/QwenPaw/pull/6495) | fix(video): deliver video data to models | **Crítico** — Corrigia bug onde `view_video` reportava sucesso mas vídeos nunca chegavam ao LLM |
| [#6514](https://github.com/agentscope-ai/QwenPaw/issues/6514) | execute_shell_command large output truncation | Feature request closed — Corrigido o truncamento de saídas >30KB |
| [#6473](https://github.com/agentscope-ai/QwenPaw/issues/6473) | Plugin "Agent Kanban" fails to install | Bug resolvido — Plugin instalável novamente |

### PRs Abertos com Alto Impacto (Under Review/Pronto para Merge)

| PR | Título | Destaque |
|----|--------|----------|
| [#6535](https://github.com/agentscope-ai/QwenPaw/pull/6535) | fix(cloudpaw): accept mission verification kwargs | Corrigiria o TypeError no `/mission` (issue #6533) |
| [#6536](https://github.com/agentscope-ai/QwenPaw/pull/6536) | fix(chats): clean up persisted data on deletion | Limpeza adequada de dados ao deletar chats |
| [#6528](https://github.com/agentscope-ai/QwenPaw/pull/6528) | fix: resolve agent.json corruption | Corrigiria corrupção sistêmica em `agent.json` (issue #6520) |
| [#6531](https://github.com/agentscope-ai/QwenPaw/pull/6531) | fix(acp): add models field to new_session | Permitiria descoberta de modelos por clientes externos |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Atenção

**🔴 Privacidade e Isolamento de Agentes (2 issues, 2 👍 combined)**

- [#6461](https://github.com/agentscope-ai/QwenPaw/issues/6461) — "希望能实现智能体完全隔离的功能" (Feature: Agent Isolation)
  - **Destaque:** Usuário reportou que agentes em diferentes QQ bots conseguem acessar memória um do outro, expondo dados privados
  - **Reações:** 2 👍

- [#6509](https://github.com/agentscope-ai/QwenPaw/issues/6509) — "支持Sub Agent之间的隔离机制" (Sub Agent Isolation)
  - **Destaque:** Subagentes podem se chamar mutuamente via CLI — indesejável em cenários multiusuário

**🟡 Corrupção Sistêmica de Configuração**

- [#6520](https://github.com/agentscope-ai/QwenPaw/issues/6520) — "agent.json systematic corruption: BOM, missing quotes, double-encoding"
  - **Destaque:** 20+ campos corrompidos causando falha completa do sistema
  - **Solução PR:** [#6528](https://github.com/agentscope-ai/QwenPaw/pull/6528) aberto por contributor

**🟠 Truncamento de Saída Shell**

- Issues duplicadas ([#6512](https://github.com/agentscope-ai/QwenPaw/issues/6512), [#6513](https://github.com/agentscope-ai/QwenPaw/issues/6513), [#6514](https://github.com/agentscope-ai/QwenPaw/issues/6514))
  - **Destaque:** Comandos gerando >30KB são truncados, causando perda de logs/relatórios

---

## 5. Bugs e Estabilidade

### Críticos (Impacto Alto)

| Issue | Descrição | Severidade |
|-------|-----------|------------|
| [#6534](https://github.com/agentscope-ai/QwenPaw/issues/6534) | Windows Installer NSIS "still running" loop — instalação impossível | 🔴 Crítica |
| [#6533](https://github.com/agentscope-ai/QwenPaw/issues/6533) | `/mission` command TypeError — `verification_instructions` | 🔴 Crítica |
| [#6520](https://github.com/agentscope-ai/QwenPaw/issues/6520) | agent.json corruption — sistema não inicia | 🔴 Crítica |

### Altos (Degradação Significativa)

| Issue | Descrição | Severidade |
|-------|-----------|------------|
| [#6524](https://github.com/agentscope-ai/QwenPaw/issues/6524) | MCP backend restart — cliente não reconecta automaticamente | 🟠 Alta |
| [#6505](https://github.com/agentscope-ai/QwenPaw/issues/6505) | Mission Mode spawns unbounded sub-sessions — consume credits infinamente | 🟠 Alta |
| [#6506](https://github.com/agentscope-ai/QwenPaw/issues/6506) | approval_level (OFF) não herda para sub-sessions | 🟠 Alta |
| [#6324](https://github.com/agentscope-ai/QwenPaw/issues/6324) | Model response truncation (MiniMax-M3) | 🟠 Alta |

### Médios (Regressões)

| Issue | Descrição | Severidade |
|-------|-----------|------------|
| [#6537](https://github.com/agentscope-ai/QwenPaw/issues/6537) | Skill tags desaparecem após restart (regressão de #3270) | 🟡 Média |
| [#6510](https://github.com/agentscope-ai/QwenPaw/issues/6510) | Chinese paths URL-encoded em canais Feishu | 🟡 Média |
| [#6529](https://github.com/agentscope-ai/QwenPaw/issues/6529) | ACP new_session missing models field | 🟡 Média |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features com Alta Demanda

**🟢 Automação de Desktop Nativa**
- [#6424](https://github.com/agentscope-ai/QwenPaw/pull/6424) — `computer_use` para Windows e macOS (acesso via Tauri)
  - Status: PR aberto, em desenvolvimento ativo

**🟢 Isolamento de Sub-Agentes e Sessões**
- [#6461](https://github.com/agentscope-ai/QwenPaw/issues/6461) — Opção para "完全隔离" (isolamento total entre agentes)
- [#6509](https://github.com/agentscope-ai/QwenPaw/issues/6509) — UUID para separar contextos de sessões

**🟢 Suporte a Novos Provedores**
- [#6526](https://github.com/agentscope-ai/QwenPaw/pull/6526) — NVIDIA NIM provider (first-time contributor)
- [#6398](https://github.com/agentscope-ai/QwenPaw/pull/6398) — Reranker support para ReMe memory search
- [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) — Safe model discovery infrastructure

**🟡 Melhorias de UX/UI**
- [#6403](https://github.com/agentscope-ai/QwenPaw/issues/6403) — RobotFramework syntax highlighting no IDE ✅ Closed
- [#6456](https://github.com/agentscope-ai/QwenPaw/pull/6456) — Visual Compact context compression

**🟡 Infraestrutura**
- [#6269](https://github.com/agentscope-ai/QwenPaw/pull/6269) — Workspace checkpoint management via Git
- [#6151](https://github.com/agentscope-ai/QwenPaw/pull/6151) — Background tool call offload com controles frontend
- [#6276](https://github.com/agentscope-ai/QwenPaw/pull/6276) — Unified browser SDK

---

## 7. Resumo de Feedback dos Usuários

### Dores Críticas Identificadas

1. **Instabilidade em Produção Windows**
   - Corrupção de `agent.json` afeta múltiplos campos sistematicamente
   - Instalador NSIS entra em loop infinito
   - Chinese paths são URL-encoded incorretamente

2. **Privacidade e Segurança**
   - Agentes em diferentes bots conseguem acessar memória uns dos outros
   - approval_level não propaga para sub-sessions

3. **Limitação Técnica**
   - Saída de comandos shell >30KB é truncada
   - Vídeos não são entregue ao modelo (agora corrigido em #6495)
   - MCP session não sobrevive a restarts do servidor

### Cenários de Uso Reportados

- **Multi-bot QQ:** Deploy de agentes separados para work (single-chat) e community support (group-chat)
- **Análise de Dados:** Scripts gerando relatórios de 500+ linhas para análise de ações
- **Desenvolvimento Local:** Usuários tentando buildar localmente sem saber versão Node.js requerida

### Satisfação/Insatisfação

| Aspecto | Sentimento |
|---------|------------|
| Core AI functionality | Positivo (memória, agentes, ferramentas) |
| Estabilidade Windows | ⚠️ Preocupante (múltiplos bugs críticos) |
| Plugin ecosystem | ⚠️ Problemas de compatibilidade recentes |
| Documentação | Needs improvement (dev install omit test extra) |

---

## 8. Backlog que Merece Atenção

### Issues sem Resposta >3 dias

| Issue | Título | Days Silent |
|-------|--------|-------------|
| [#6324](https://github.com/agentscope-ai/QwenPaw/issues/6324) | Model response truncation (MiniMax-M3) | 7+ dias |
| [#6461](https://github.com/agentscope-ai/QwenPaw/issues/6461) | Agent isolation feature | 4+ dias |

### PRs Blocked ou Dependentes

| PR | Bloqueio | Prioridade |
|----|----------|------------|
| [#6157](https://github.com/agentscope-ai/QwenPaw/pull/6157) (Chrome Extension) | Depende de #6276 (Unified Browser) | Média |
| [#6504](https://github.com/agentscope-ai/QwenPaw/pull/6504) | Unify project directories | Review pendente |

### Issues Críticas Requerendo Triagem

| Issue | Título | Recomendação |
|-------|--------|--------------|
| [#6534](https://github.com/agentscope-ai/QwenPaw/issues/6534) | Windows Installer loop | Assignee needed |
| [#6533](https://github.com/agentscope-ai/QwenPaw/issues/6533) | /mission TypeError | PR #6535 pronto para merge |

---

## Métricas Resumidas (24h)

| Categoria | Valor |
|-----------|-------|
| Issues abertas/ativas | 13 |
| Issues fechadas | 6 |
| PRs abertos | 36 |
| PRs merged/fechados | 9 |
| Novas releases | 0 |
| Bugs críticos abertos | 3 |
| Features requests abertas | 4+ |

---

**Relatório gerado em:** 2026-07-29  
**Fonte:** GitHub CoPaw/QwenPaw activity data

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-07-29

## 1. Panorama do Dia

O ecossistema ZeroClaw mantém um alto ritmo de atividade com **100 eventos combinados** (50 issues + 50 PRs) nas últimas 24h, sem novos lançamentos. A comunidade está focada em duas frentes principais: **segurança defensiva** (correções de path traversal, timing attacks e leak detectors) e **evangelização de arquitetura** (RFCs sobre traits de plugins, sessões de conversação e OAuth). Do ponto de vista operacional, bugs críticos de estabilidade (flaky tests, race conditions, SIGSEGV) coexistem com trabalho substancial de feature development, sugerindo uma fase de maturação晚了 do runtime.

---

## 2. Lançamentos

**Nenhuma release nas últimas 24h.** O projeto não emitiu nova versão entre 2026-07-28 e 2026-07-29. O último release train permanece em `0.8.3` conforme informações de contexto.

---

## 3. Progresso do Projeto

### PRs Mergeadas/Fechadas Recentemente

| # | PR | Tamanho | Descrição |
|---|----|---------|-----------|
| **#9413** | [fix(runtime): fail closed on unresolved Docker workspace roots](https://github.com/zeroclaw-labs/zeroclaw/pull/9413) | S | Bloqueio fail-closed para paths Docker não resolvidos, impedindo escapes de bind mount via prefix checks lexicais. |
| **#9234** | [fix(web): render reasoning-only turns instead of hanging silently](https://github.com/zeroclaw-labs/zeroclaw/pull/9234) | M | Web chat agora commit messages mesmo quando modelo retorna apenas `reasoning_content`, eliminando silêncio em modelos de reasoning. |
| **#9461** | [fix(plugins): preserve detail and hint at wit/v0 drift on plugin instantiation failures](https://github.com/zeroclaw-labs/zeroclaw/pull/9461) | XS | Melhora diagnóstico de drift entre WIT vendorizado e host, exibindo detalhes encadeados do wasmtime. |

**Avanços processuais:** A correção em [#9479](https://github.com/zeroclaw-labs/zeroclaw/pull/9479) (zeroclaw-plugins lib tests sob wasmtime) endereça uma lacuna de cobertura que existia desde a introdução do feature gate `plugins-wasmtime`. Juntamente com [#9513](https://github.com/zeroclaw-labs/zeroclaw/pull/9513) (testes end-to-end de legacy auth profile store), o projeto está fortalecendo打了个 its regression suite em áreas críticas de migração.

---

## 4. Temas Quentes da Comunidade

### Issues/PRs com Maior Engajamento (comentários)

| # | Título | Comentários | Tipo | Link |
|---|--------|-------------|------|------|
| **#9127** | RFC: Abstract a `KeySource` trait — classify master-key material | **8** | RFC (OPEN) | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/9127) |
| **#9357** | cargo test -p zeroclaw-runtime --lib fails in 19/20 runs (global mutex poisoning) | **6** | Bug (CLOSED) | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/9357) |
| **#8654** | skill-review fork panics → SIGSEGV after tool-heavy turn | **5** | Bug (OPEN) | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8654) |
| **#8850** | Move optional channels & tools from compile-time flags to runtime WASM plugins | **4** | RFC (OPEN) | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8850) |
| **#9397** | RFC: Treat empty WhatsApp Web `allowed_groups` as permit-none | **3** | RFC (OPEN) | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/9397) |
| **#9462** | zeroclaw-plugins lib unit tests never execute in CI | **3** | Bug (OPEN) | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/9462) |

**Análise:** O RFC #9127 sobre `KeySource` domina o debate com 8 comentários, indicando que a classificação de material de chaves-mestras por fonte/deployment é uma decisão de design com implicações profundas para o modelo de segurança. O bug #9357 (testes flaky com mutex poisoning) foi fechados após 6 comentários — possivelmente por work-around — mas o padrão de "global mutex poisoning" é um smell arquitetural recorrente. A proposta #8850 de migrar features compile-time para plugins WASM reflete a direção de shrink do binário default e é coerente com a estratégia de runtime extensibility.

---

## 5. Bugs e Estabilidade

### Por Severidade

#### S1 — Workflow Bloqueado (2 bugs ativos)

| # | Título | Tags | Link |
|---|--------|------|------|
| **#9474** | auth profile store fails to load — `model_provider` required with no migration | `security:secrets`, `provider:openai` | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/9474) |
| **#9425** | Running SOP jobs have no operator cancellation path | `tool:sop`, `web` | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/9425) |
| **#9492** | `auth refresh` dead-ends when external client rotated OpenAI-Codex refresh token | `provider:openai`, `security:secrets` | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/9492) |

> ⚠️ **Alerta:** Três bugs de severidade S1 coexistem. #9474 é regressão pura (renomeação de campo sem migração). #9425 é ausência de feature essencial para web operators. #9492 é race condition com token rotate externo — o store tem stale snapshot.

#### S2 — Comportamento Degradado (5 bugs ativos)

| # | Título | Tags | Link |
|---|--------|------|------|
| **#9284** | config flush can overwrite concurrent writes | `runtime`, `config` | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/9284) |
| **#8654** | skill-review fork panics → SIGSEGV | `runtime`, `skills` | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8654) |
| **#8758** | Agent returns idle after context exhaustion without terminal status | `agent`, `runtime` | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8758) |
| **#8760** | keep daemon-owned agent output out of daemon stdout | `runtime`, `zerocode` | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8760) |
| **#9465** | inbound channel message declined produces only a reaction, no text | `channel:telegram`, `channel:core` | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/9465) |

#### Correções de Segurança Recentes (5 PRs)

| # | Título | Risco | Link |
|---|--------|-------|------|
| **#9428** | fix(channels): require sender authorization for Bluesky and Reddit | High | [PR](https://github.com/zeroclaw-labs/zeroclaw/pull/9428) |
| **#9384** | fix(security): resolve shell command path arguments to block symlink escapes | High (S0) | [PR](https://github.com/zeroclaw-labs/zeroclaw/pull/9384) |
| **#9472** | fix(vi): stop registering vi_verify as a model-callable tool | High | [PR](https://github.com/zeroclaw-labs/zeroclaw/pull/9472) |
| **#9110** | fix(lark): use constant_time_eq for verification_token comparison | High | [PR](https://github.com/zeroclaw-labs/zeroclaw/pull/9110) |
| **#9486** | [Bug]: High-entropy detector redacts Solana wallet addresses | High | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/9486) |

> **Nota:** O leak detector de alta entropia (#9486) está falso-positivando endereços Solana em canais Telegram — um sinal de que as regex heuristics de detecção de secrets precisam de tunagem por domain/script.

---

## 6. Pedidos de Features e Sinais de Roadmap

### RFCs em Debate Aberto

| # | Título | Prioridade | Link |
|---|--------|------------|------|
| **#9127** | Abstract `KeySource` trait — classify master-key material | P2 | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/9127) |
| **#8850** | Move optional channels/tools to runtime WASM plugins | P2 | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8850) |
| **#9487** | Runtime-owned conversation sessions + transport surface adapters | P2 | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) |
| **#9488** | Unified attachment architecture for web chat and channels | P2 | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) |
| **#9397** | Treat empty WhatsApp Web `allowed_groups` as permit-none | P1 | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/9397) |
| **#9464** | Anthropic stored-profile OAuth alias contract | P1 | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/9464) |
| **#9323** | Define execution-tree iteration budget ownership | P2 | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/9323) |
| **#9330** | AI-assisted PR pre-review and re-review | P2 | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/9330) |

### Features em Desenvolvimento Ativo

| # | PR | Tamanho | Link |
|---|----|---------|------|
| **#8486** | feat(gateway): add OpenAI chat completions endpoint | XL | [PR](https://github.com/zeroclaw-labs/zeroclaw/pull/8486) |
| **#9109** | feat(providers): add native Hailo-Ollama support | XL | [PR](https://github.com/zeroclaw-labs/zeroclaw/pull/9109) |
| **#8985** | feat(slack): show visible lifecycle progress | XL | [PR](https://github.com/zeroclaw-labs/zeroclaw/pull/8985) |
| **#9319** | refactor(runtime): seal engine tool registry as ScopedToolRegistry | XL | [PR](https://github.com/zeroclaw-labs/zeroclaw/pull/9319) |
| **#9476** | feat(sop): add authenticated operator cancellation | L | [PR](https://github.com/zeroclaw-labs/zeroclaw/pull/9476) |

**Sinal de roadmap:** A convergência de #8850 (plugins WASM), #9487 (runtime-owned sessions), #9488 (unified attachments) e #9319 (ScopedToolRegistry) indica uma **refatoração arquitetural de segunda ordem** visando desacoplar transport layer, plugin system e session lifecycle do core runtime. Esta é a direção mais coerente com maturidade de plataforma.

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas nos Issues

| Dor | Evidência | Severidade |
|-----|-----------|------------|
| **Credenciais órfãs após migração de campo** | #9474: stores de auth pré-rename não carregam | S1 |
| **Shell escapa workspace via symlinks** | #9384: path traversal bypassing file-write policy | S0 (corrigido) |
| **Tokens OAuth rotativos causam dead-end** | #9492: refresh token single-use + external rotation | S1 |
| **Agent fica mudo sem status terminal** | #8758: contexto esgotado sem reason clara | S2 |
| **SOP jobs não canceláveis via dashboard** | #9425: operador não consegue abortar | S1 |
| **Endereços Solana censurados errôneamente** | #9486: detector de entropia amplia false positives | S2 |
| **Binário grande = recompilar pra cada canal** | #8850: compile-time features como antipattern | Evolução |

### Cenários de Uso Emergentes

- **Uso multi-canal**: Issues como #9465, #9397, #9428 evidenciam que usuários operam ZeroClaw em WhatsApp, Telegram, Bluesky, Reddit e Slack simultaneamente, com políticas de autorização granulares por canal.
- **SOP workflows operados por humanos**: A ausência de cancelamento (#9425) é sintoma de SOP sendo usado em produção por operadores (não apenas automação).
- **Providers heterogêneos**: Hailo-Ollama (#9109), Anthropic OAuth (#9464), OpenAI Codex (#9492) mostram diversificação de backends além dos gigantes.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta / Stale Candidates

| # | Título | Criado | Atualizado | Link |
|---|--------|--------|-----------|------|
| **#8858** | [Tracker]: Audit existing drift surfaces across codebase | 2026-07-08 | 2026-07-27 | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8858) |
| **#8758** | Agent returns idle without terminal status | 2026-07-06 | 2026-07-28 | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8758) |
| **#

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*