# Resumo diário do ecossistema de agentes de IA 2026-05-27

> Issues: 0 | PRs: 3 | Projetos cobertos: 7 | Gerado em: 2026-05-26 21:39 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal


# Relatório de Projeto NullClaw — 2026-05-27

---

## 1. Panorama do Dia

O projeto NullClaw apresenta hoje um cenário de **manutenção ativa sem incidentes críticos**. Nas últimas 24 horas, não houve atividade de issues (abertas ou fechadas), mas **3 pull requests foram abertos**, indicando trabalho contínuo em correções e funcionalidades. As PRs pendentes focam em infraestrutura Nix/Zig, melhorias no canal LINE e expansão de métodos do gateway — sinais de um projeto em desenvolvimento estável. A ausência de releases recentes e issues ativas sugere um período de estabilização ou preparação para próximo lançamento.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto não publicou novas versões desde o último período rastreado. Recomenda-se monitorar o repositório para eventual tag de release, caso a integração das PRs abertas (#933, #934, #935) resulte em novo versionamento.

---

## 3. Progresso do Projeto

**PRs abertas nas últimas 24h (3 total):**

| # | Título | Autor | Impacto |
|---|--------|-------|---------|
| [#935](https://github.com/nullclaw/nullclaw/pull/935) | fix(nix): updated lockfiles to work with zig 0.16.0 | Codom | **Crítico** — Restaura capacidade de builds Nix |
| [#934](https://github.com/nullclaw/nullclaw/pull/934) | fix(channels/line): fix sendMessage routing and implement replyToken cache | supersonictw | Melhoria de estabilidade |
| [#933](https://github.com/nullclaw/nullclaw/pull/933) | Add additional gateway methods | DonPrus | Expansão de funcionalidades |

**Destaque:**
- **PR #935** corrige build quebrado do Nix após atualização para Zig 0.16.0 — representa correção de infraestrutura essencial para contributors que usam Nix como ambiente de desenvolvimento/build.

---

## 4. Temas Quentes da Comunidade

**Sem issues com comentários ou reações significativas nas últimas 24h.**

A análise de PRs abertas indica que a comunidade está concentrada em:
- **Infraestrutura de build** (Zig 0.16.0 compatibility)
- **Integração com canais de mensageria** (LINE webhook handling)
- **Expansão de APIs Gateway** (métodos autenticados, transcrição de mídia)

Recomenda-se acompanhar estas PRs para detectar engajamento da comunidade nas próximas atualizações.

---

## 5. Bugs e Estabilidade

**Nenhum bug novo reportado nas últimas 24h.**

**Estado de estabilidade inferred:**
- Build Nix estava quebrado (agora com PR #935 em revisão) — severidade **alta** para ambiente Nix
- Issues de roteamento no canal LINE corrigidas em #934
- Nenhum crash ou regressão críticos identificados

---

## 6. Pedidos de Features e Sinais de Roadmap

**Novas funcionalidades em revisão (via PRs abertas):**

1. **Gateway Media Transcription** (`#933`)
   - `POST /media/transcribe` autenticado
   - Suporte a provedores STT configuráveis
   - Indica expansão do gateway como plataforma A2A

2. **ReplyToken Cache para LINE** (`#934`)
   - Implementação thread-safe com TTL de 30s
   - Armazenamento estático `[16]ReplyTokenData`
   - Sugere maturidade na integração com canais asiáticos (LINE popular em Taiwan, Japão, Tailândia)

3. **Suporte Zig 0.16.0** (`#935`)
   - Atualização de flake.lock com zig2nix compatível
   - Mantém projeto atualizado com ekosistem Zig

---

## 7. Resumo de Feedback dos Usuários

**Sem feedback direto coletado nas últimas 24h.**

**Insights inferidos dos PRs:**
- **Dores identificadas:** Builds Nix quebrados são barreira para contribution
- **Cenários de uso:** Integração com LINE para bots/webhooks; gateway como plataforma central
- **Satisfação:** A atividade contínua de múltiplos contribuidores (Codom, supersonictw, DonPrus) indica projeto ativo e atrativo

---

## 8. Backlog que Merece Atenção

| Item | Tipo | Status | Observação |
|------|------|--------|------------|
| [#935](https://github.com/nullclaw/nullclaw/pull/935) | PR | Aberta | lockfiles Zig 0.16.0 — atenção prioritária |
| [#934](https://github.com/nullclaw/nullclaw/pull/934) | PR | Aberta | ReplyToken cache LINE — requer review |
| [#933](https://github.com/nullclaw/nullclaw/pull/933) | PR | Aberta | Gateway methods — expansão significativa |

**Nenhuma issue antiga pendente identificada** nos dados das últimas 24h. Este é um indicador positivo de saúde do projeto — não há acúmulo de demandas não atendidas.

---

## Métricas de Saúde do Projeto (2026-05-27)

| Indicador | Valor | Avaliação |
|-----------|-------|-----------|
| Issues ativas (24h) | 0 | 🟢 Estável |
| PRs abertas (24h) | 3 | 🟢 Ativo |
| PRs merged (24h) | 0 | 🟡 Em pipeline |
| Releases (24h) | 0 | ⚪ Sem release |
| Bugs críticos | 0 | 🟢 Saudável |

---

*Relatório gerado automaticamente com base em dados do GitHub — 2026-05-27*

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo do Ecossistema de Agentes de IA — 2026-05-27

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **dois perfis distintos de maturidade** em 27 de maio de 2026. Por um lado, **Hermes Agent** e **IronClaw** lideram em volume de atividade com 50 PRs atualizados em 24h, sinalizando projetos em ritmo de hyper-growth com pipeline robusto de integração. Por outro, **NullClaw** e **NanoBot** demonstram ciclos mais controlados, focando em estabilização e correção de bugs críticos. O denominador comum é a **expansão multicanal** — Telegram, WeChat, LINE e Slack aparecem como integrações prioritárias em todos os projetos. Duas tendências emergem claramente: (1) a corrida hacia **computer-use** e controle de desktop (Codex-like capabilities) e (2) a convergência para **arquiteturas multi-agente** com subagentes especializados e message buses entre instâncias.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs Abertos | PRs Merged | Releases (24h) | Bugs Críticos | Avaliação |
|---------|--------------|-------------|------------|---------------|---------------|-----------|
| **Hermes Agent** | 50 (46 abertas) | 37 | 13 | 0 | 3 P1 | 🟡 Alta atividade — instabilidade CLI |
| **IronClaw** | 10 | 41 | 9 | 1 (v0.29.0) | 2 | 🟢 Hyper-growth com pressão |
| **ZeroClaw** | 7 | 32 | 9 | 0 | 2 S2 | 🟢 Estável, focado em qualidade |
| **CoPaw** | 27 | ~16 | 9 | 0 | 3 | 🟡 Desktop/macOS instável |
| **PicoClaw** | 7 | 8 | 13 | 1 nightly | 1 | 🟢 Ciclo saudável de entrega |
| **NanoBot** | 4 | 11 | 6 | 0 | 1 | 🟢 Bugfix rápido (24h cycle) |
| **NullClaw** | 0 | 3 | 0 | 0 | 0 | 🟢 Manutenção estável |

**Observações:**
- **IronClaw** e **Hermes Agent** dominam em volume absoluto de atividade
- **PicoClaw** apresenta a melhor taxa de merge (13 de 21 PRs = 62%)
- **NanoBot** demonstra ciclo de bugfix mais rápido documentado (<24h para critical fix)
- **NullClaw** está em modo de espera proposital — 0 issues, 3 PRs em revisão

---

## 3. Posicionamento do Projeto Principal

### IronClaw — Líder em Velocidade de Feature

**Vantagens frente aos pares:**
- Release mais recente (v0.29.0) com changelog tangível: WeCom, Responses API tools externas, download de logs
- Stack de **attested-signing** em desenvolvimento coordenado (10 PRs simultâneos) — diferencial em segurança on-chain
- Reborn como arquitetura dominante com 70%+ dos PRs relacionados
- 41 PRs abertos demonstra pipeline de integração saudável

**Diferenças técnicas:**
- Foco em **multi-chain custodial signing** para workflows on-chain
- Sandbox via Docker como backend para execução arbitrária de código
- Sistema de hooks third-party para extensibilidade controlada

**Tamanho da comunidade:**
- Volume de 50 PRs/24h indica contribuidores ativos significativos
- 2 security issues abertas preventivamente demonstra maturidade em security-first

### Hermes Agent — Maior Volume, Maior Instabilidade

**Vantagens:**
- 50 PRs + 50 issues atualizados = maior diversidade de contribuidores
- 13 PRs merged em 24h demonstra capacidade de integração
- Webwright browser automation skill adicionada

**Passivos:**
- 3 bugs P1 simultâneos na CLI/TUI
- Regressões em comandos core (/clear, /new) afetam experiência diária

---

## 4. Focos Técnicos Compartilhados

### 4.1 Integração Multicanal

Todos os projetos investem em canais de comunicação, com prioridades distintas:

| Canal | NanoBot | PicoClaw | CoPaw | IronClaw | ZeroClaw | NullClaw |
|-------|--------|----------|-------|----------|----------|----------|
| Telegram | ✅ Webhook mode | ✅ Guest + Business | — | — | ✅ | — |
| WeChat | — | ✅ Multi-conta | ✅ Poll crash | — | — | — |
| LINE | — | — | — | — | — | ✅ ReplyToken cache |
| Slack | — | — | — | ✅ MVP Request | — | — |
| Feishu | — | ✅ Dinâmico | ✅ | — | — | — |
| WeCom | — | — | — | ✅ v0.29.0 | — | — |

**Insight:** Telegram é o canal mais普及ado (4/7 projetos). WeChat aparece em 3 projetos, sinalizando foco no mercado asiático.

### 4.2 Computer-Use e Desktop Automation

| Projeto | Feature | Status |
|---------|---------|--------|
| **ZeroClaw** | computer-use support (Codex/Peekaboo-like) | ✅ Aceito, P2 |
| **Hermes Agent** | Webwright browser automation skill | ✅ Merged |
| **IronClaw** | Process sandbox (Docker backend) | ✅ PR #4072 |
| **NanoBot** | Workspace sandbox capability | ✅ PR #4007 |

**Insight:** A capacidade de automação de desktop é a próxima fronteira. ZeroClaw é o único com feature request aceita explicitamente (tela + mouse/keyboard).

### 4.3 Segurança e Extensibilidade

| Projeto | Foco | Implementação |
|---------|------|---------------|
| **IronClaw** | Attested-signing (10 PRs) | Custodial multi-chain |
| **ZeroClaw** | Composio per-action scoping | PR #6948 merged |
| **Hermes Agent** | Memory-context surface | Issue #31584 aberta |
| **CoPaw** | RBAC multi-usuário | Issue #4702 |

### 4.4 Memória e Contexto Persistente

| Projeto | Abordagem |
|---------|-----------|
| **NanoBot** | integrated_memory_framework (PR #2515 — 2 meses em aberto) com Mem0/Graphiti/Memobase |
| **Hermes Agent** | Hindsight memory provider (crashes sem client — issue #18876) |
| **CoPaw** | Context compaction + conversation artifacts |

**Insight:** NanoBot lidera em arquitetura de memória evoluída, mas a integração está estagnada há 2 meses.

---

## 5. Análise de Diferenciação

### 5.1 Arquitetura e Público-Alvo

| Projeto | Arquitetura | Público Primário |
|---------|-------------|------------------|
| **IronClaw** | Rust, Reborn, sandbox Docker | Enterprise, multi-chain, desenvolvedores avançados |
| **Hermes Agent** | Modular com skills/plugins | Desenvolvedores CLI power-users |
| **ZeroClaw** | Rust, TUI-first, Extism→wasmtime | Produtividade CLI, desenvolvedores |
| **PicoClaw** | Go, modular, multi-provider | Multi-model, desenvolvedores API |
| **NanoBot** | Python, memory-focused | Pesquisa, uso experimental |
| **CoPaw** | Multi-stack (desktop + web) | Usuários finais, enterprise |
| **NullClaw** | Nix/Zig, gateway-focused | Contribuidores Nix ecosystem |

### 5.2 Diferenciação Técnica

**IronClaw** diferencia-se por:
- Attested-signing para workflows on-chain
- Reborn como arquitetura nativa em vez de camada sobreposta
- Third-party hooks com modelo de contenção

**Hermes Agent** diferencia-se por:
- 50 issues + 50 PRs = maior diversidade de contribuidores
- Cron/scheduler integrado com provider awareness
- Voicebox TTS sidecar integration

**ZeroClaw** diferencia-se por:
- Email channel mais maduro (subject threading, attachment handling)
- RFC process estruturado (scheduler via orchestrator)
- Computer-use explicitamente em roadmap

**PicoClaw** diferencia-se por:
- Yocto/OpenEmbedded layer para embedded Linux
- RISC-V como plataforma soportada explicitamente
- Alta taxa de merge (62%)

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração

| Ranking | Projeto | Velocidade de Bugfix | Estabilidade |
|---------|---------|---------------------|--------------|
| 🥇 | **NanoBot** | <24h (orphan tool results #4006→#4011) | 🟢 Cycle documentado |
| 🥈 | **Hermes Agent** | Múltiplos P1 abertos simultaneamente | 🟡 Regressões recentes |
| 🥉 | **PicoClaw** | 13 PRs merged em 24h | 🟢 Taxa 62% |
| 4 | **IronClaw** | 9 merged + 41 abertos | 🟢 Pipeline robusto |
| 5 | **ZeroClaw** | PRs size:L pendentes 8-29 dias | 🟡 Review bottleneck |
| 6 | **CoPaw** | 9 merged, múltiplos bugs desktop | 🟡 Instabilidade macOS |
| 7 | **NullClaw** | Modo estabilização | 🟢 Ausência de issues |

### 6.2 Consolidação vs. Crescimento

| Consolidando Qualidade | Crescendo Ativamente |
|------------------------|----------------------|
| **NullClaw** (0 issues, foco em PRs) | **Hermes Agent** (50 PRs, 3 P1) |
| **NanoBot** (bugfix rápido, sem releases) | **IronClaw** (v0.29.0 + 41 PRs abertos) |
| **ZeroClaw** (2 S2 bugs, RFC estruturado) | **PicoClaw** (nightly builds, 13 merges) |

### 6.3 Backlog Crítico

| Projeto | Item Crítico | Idade | Impacto |
|---------|--------------|-------|---------|
| **IronClaw** | crates.io publishing (0.25-0.27) | 22 dias | Bloqueia consumidores Cargo |
| **Hermes Agent** | 3 P1 simultâneos na CLI | <24h | Usabilidade básica |
| **CoPaw** | macOS Tahoe 26.5 crash | <24h | Desktop production |
| **ZeroClaw** | DeepSeek-V4 API incompatibility | 33 dias | Provider broken |
| **NanoBot** | Memory framework (Mem0/Graphiti) | 60 dias | Roadmap blocking |

---

## 7. Sinais de Tendência

### 7.1 Tendências de Mercado Extraídas

**1. Computer-Use como Próxima Fronteira**
> "computer-use support (Codex/Peekaboo-like)" — ZeroClaw #6909 (aceito)
> "Add Webwright browser automation skill" — Hermes Agent #32622 (merged)
> "expose workspace sandbox capability" — NanoBot #4007 (em progresso)

**Interpretação:** A comunidade está convergindo para agentes com capacidade de automação de desktop. OpenAI Codex é a referência, mas implementações open source estão emergindo.

**2. Multi-Agente Orchestration**
> "enable cross agent messaging" — NanoBot #3992
> "Coder/Explorer/Planner subagent flavors" — IronClaw #4086
> "cross-instance messaging" — NanoBot

**Interpretação:** Arquiteturas de agente único estão evoluindo para orquestração de múltiplos agentes especializados. IronClaw com subagent flavors e NanoBot com message bus são sinais claros.

**3. Voice/Audio como Loops Fechados**
> "text-to-speech / voice output support" — NanoBot #4010
> "Voicebox sidecar TTS integration" — Hermes Agent #30675
> "Telegram audio content support" — CoPaw #1516 (resolvido)

**Interpretação:** Voz está saindo de feature request para implementação. O loop conversacional completo (text-in, voice-out) é demanda ativa em múltiplos projetos.

**4. Enterprise Readiness**
> "RBAC multi-usuário" — CoPaw #4702
> "Slack ProductAdapter MVP" — IronClaw #3857
> "Yocto layer for embedded" — PicoClaw #2851

**Interpretação:** A base de usuários está amadurecendo do piloto experimental para deployment corporativo. RBAC, multi-tenant e deployment profissional (Yocto, Docker, RISC-V) são sinais de empresarialização.

**5. Provider Diversity e Fallback**
> "per-task fallback_providers" — Hermes Agent #32411
> "fallback routing local→closed-source" — Hermes Agent #15176
> "OpenCode slim models" — CoPaw #4660

**Interpretação:** Resiliência via multi-provider é prioridade. Fallback automático e provider diversity reduzem vendor lock-in.

**6. Security como Primeira Classe**
> "Composio per-action scoping" — ZeroClaw #6948 (resposta a incidente)
> "SecretString unwrap" — IronClaw #4082 (security issue)
> "Memory-context surface" — Hermes Agent #31584

**Interpretação:** À medida que agentes ganham permissões elevadas, segurança defensiva ganha atenção. Per-action scoping e memory-context isolation são padrões emergentes.

### 7.2 Mapa de Oportunidades

| Oportunidade | Projetos com Demanda | Viabilidade |
|--------------|---------------------|-------------|
| Telegram webhook + voice | NanoBot, PicoClaw | Alta |
| Multi-agente orchestration | NanoBot, IronClaw | Alta |
| Computer-use/automation | ZeroClaw, Hermes, NanoBot | Média-Alta |
| Memory evolution (Mem0/Graphiti) | NanoBot | Média |
| Streaming HTTP config | PicoClaw | Alta |
| RISC-V / embedded deployment | PicoClaw | Média |

---

## Síntese Executiva

| Dimensão | Líder | Seguidor | Atrasado |
|----------|-------|----------|----------|
| **Volume de Atividade** | Hermes Agent / IronClaw | ZeroClaw / PicoClaw | NullClaw |
| **Velocidade de Bugfix** | NanoBot | PicoClaw | CoPaw |
| **Estabilidade** | NullClaw | PicoClaw | Hermes Agent |
| **Features Enterprise** | IronClaw | CoPaw | NullClaw |
| **Integração Multicanal** | PicoClaw | NanoBot / ZeroClaw | Hermes Agent |
| **Segurança** | IronClaw | ZeroClaw | CoPaw |
| **Roadmap de Computer-Use** | ZeroClaw | Hermes Agent | NanoBot |

**Recomendações para Desenvolvedores:**
1. **Para novos contribuidores:** NullClaw e NanoBot oferecem curvas de entrada mais suaves
2. **Para integração empresarial:** IronClaw e CoPaw com RBAC/multi-canal
3. **Para CLI power-users:** Hermes Agent e ZeroClaw com TUI madura
4. **Para embedded/IoT:** PicoClaw com Yocto/RISC-V support

**Recomendações para Projetos:**
1. **Hermes Agent:** Priorizar os 3 P1 antes do próximo release
2. **CoPaw:** Resolver crash macOS antes de advertising desktop support
3. **IronClaw

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>


# Relatório de Projeto — NanoBot (HKUDS/nanobot)

**Data de referência:** 2026-05-27  
**Fonte:** GitHub Activity (últimas 24h)

---

## 1. Panorama do Dia

O NanoBot apresenta alta atividade de desenvolvimento nas últimas 24h, com **17 PRs atualizados** e **4 issues** em discussão. A equipe está focada em estabilização (correção de bugs do histórico de conversas e transporte de providers) e em funcionalidades de próxima geração (colaboração entre agentes, sistema Dream reformulado e capacidades de sandbox). Não houve lançamentos oficiais hoje, indicando uma fase de consolidação antes de uma próxima release. A saúde geral do projeto é positiva, com resposta ativa a bugs e boa velocidade de merge em PRs fechados.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

O projeto nãoemitiu novas versões hoje. Isso sugere que a equipe está consolidando o código pendente antes de um próximo tag. Recomenda-se monitorar o repositório para upcoming releases nas próximas 48–72h.

---

## 3. Progresso do Projeto

### PRs Merged/Closed (6 total)

| # | Título | Impacto |
|---|--------|---------|
| [#3944](https://github.com/HKUDS/nanobot/pull/3944) | fix(webui): keep new chat during session refresh | **WebUI** — Corrige regressão onde chats recém-criados eram perdidos durante refresh da lista de sessões. Adiciona teste de regressão. |
| [#4011](https://github.com/HKUDS/nanobot/pull/4011) | Drop orphan tool results from session history | **Core** — Corrige problema crítico de tool results órfãos no histórico (abordado em issue #4006). Remove mensagens `role: "tool"` sem `tool_call_id` correspondente. |
| [#4009](https://github.com/HKUDS/nanobot/pull/4009) | fix(provider): handle blank Codex transport errors | **Provider** — Melhora tratamento de erros do provider Codex, expondo erros em branco que eram invisíveis ao usuário. |
| [#3996](https://github.com/HKUDS/nanobot/pull/3996) | feat(telegram): add webhook mode | **Channel** — Adiciona modo webhook opcional para Telegram (long polling permanece como default). |
| [#3981](https://github.com/HKUDS/nanobot/pull/3981) | [CI/CD] chore: enable WebUI ESLint | **DevEx** — Adiciona configuração ESLint para WebUI com regras conservadoras, melhorando consistência de código. |
| [#4004](https://github.com/HKUDS/nanobot/pull/4004) | fix(web): update Kagi search API integration | **Provider** — Atualiza integração com Kagi para API v1 atual, com autenticação Bearer e parsing corrigido. |

**Destaque:** A correção de orphan tool results (#4011) junto com a issue #4006 demonstra ciclo rápido de identificação → correção, essencial para estabilidade do agente em produção.

---

## 4. Temas Quentes da Comunidade

### Issues com Discussão Ativa

| # | Título | Comentários | Reações | Relevância |
|---|--------|-------------|---------|------------|
| [#3469](https://github.com/HKUDS/nanobot/issues/3469) | [bug] deepseek-v4 API error: reasoning_content | 2 | 0 | **Alta** — Bug de API com deepseek-v4 em multi-round thinking. Já fechado, mas demonstra dependência crítica de providers. |
| [#3973](https://github.com/HKUDS/nanobot/issues/3973) | Dream System: Hunger Problem & Lack of Real-time Learning | 0 | 0 | **Alta** — Sistema Dream tem limitações fundamentais: depende só de `history.jsonl` e não aprende em tempo real. PR #3990 addressa parte. |

### Análise de Demandas

1. **Sistema Dream em Redesign:** A issue #3973 expõe que o Dream System precisa de fontes de input mais ricas e capacidade de aprendizado contínuo. O PR #3990 já ataca isso com consolidação single-phase.

2. **Voice I/O:** A issue #4010 solicita text-to-speech paraoutput de voz em canais que suportam natively. Demonstra demanda por acessibilidade e experiência mais rica.

3. **Colaboração Multi-Agente:** PR #3992 implementa cross-instance messaging — funcionalidade aguardada pela comunidade.

---

## 5. Bugs e Estabilidade

### Bugs Reportados (3 issues abertas + 1 fechada)

| Severidade | # | Descrição |
|------------|---|-----------|
| **🔴 Crítica** | [#4006](https://github.com/HKUDS/nanobot/issues/4006) | Orphaned tool results no histórico — APIS estritas rejeitam requests; renderizador falha. **Já corrigido em #4011.** |
| **🟡 Média** | [#3469](https://github.com/HKUDS/nanobot/issues/3469) | deepseek-v4 `reasoning_content` error em multi-round thinking. **Status: Fechado.** |
| **🟡 Média** | [#3869](https://github.com/HKUDS/nanobot/pull/3869) | DeepSeek message hardening — null content causa 400 errors, "(empty)" placeholder vaza. **PR aberto.** |
| **🟢 Baixa** | [#4009](https://github.com/HKUDS/nanobot/pull/4009) | Blank Codex transport errors invisíveis. **Status: Fechado.** |

### Observação de Estabilidade

O projeto demonstra **ciclo rápido de bugfix** — o bug crítico de orphan tool results (#4006) foi identificado, reportado e corrigido (via #4011) em menos de 24h. Isso é um indicador saudável de maturidade do processo de development.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Propostas

| # | Título | Tipo | Potencial Impacto |
|---|--------|------|-------------------|
| [#4010](https://github.com/HKUDS/nanobot/issues/4010) | text-to-speech / voice output support | **Enhancement** | Alto — Adicionaria output de voz, fechando o loop conversacional em canais que suportam. |
| [#3973](https://github.com/HKUDS/nanobot/issues/3973) | Dream System: Hunger Problem & Real-time Learning | **Enhancement** | Alto — Sistema atual limitado a `history.jsonl`. Reformulação em curso em #3990. |
| [#3992](https://github.com/HKUDS/nanobot/pull/3992) | enable cross agent messaging | **Feature** | Alto — Message bus para múltiplas instâncias de agente se comunicarem. |
| [#4007](https://github.com/HKUDS/nanobot/pull/4007) | expose workspace sandbox capability | **Security** | Médio — Modelo de sandbox (off/application/system). Wire em AgentLoop e WebUI. |
| [#3968](https://github.com/HKUDS/nanobot/pull/3968) | /skill slash command | **UX** | Baixo — Listar skills habilitados. |
| [#4005](https://github.com/HKUDS/nanobot/pull/4005) | GitAgent Protocol support | **Integration** | Médio — Protocolo para agentes portáteis. Marcado como `invalid`. |

### Sinais de Roadmap

1. **Agent Collaboration:** PR #3992 demonstra interesse em arquiteturas multi-agente. Funcionalidades relacionadas em #3908 (peers_update event).

2. **Memory Evolution:** PR #2515 (integrated_memory_framework) propõe integração com Mem0, Graphiti e Memobase — sinal claro de direção para memória persistente.

3. **Voice/Audio:** Issue #4010 pode indicar direção para experiência multimodal completa.

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Dor | Evidence | Status |
|-----|----------|--------|
| **Session loss durante refresh** | Usuários perdiam chats novos no WebUI | ✅ Corrigido em #3944 |
| **Tool results órfãos quebram conversas** | API rejeita, renderizador falha | ✅ Corrigido em #4011 |
| **Erros de provider invisíveis** | deepseek-v4, Codex retornam erros em branco | 🔧 Em correção (#3869, #4009) |
| **Sessões MCP não reconectam** | `_mcp_connected` nunca resetado | 🔧 PR #4012 em aberto |

### Cenários de Uso Emergentes

1. **Multi-channel with voice:** Usuários queremagent em QQ, Telegram com voz de saída (#4010).
2. **Multi-agent orchestration:** Equipes queremnanobots cooperando (#3992, #3908).
3. **Production hardening:** Sandbox workspace para deployments seguros (#4007).

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Estagnadas

| # | Título | Criado | Atualizado | Idade | Prioridade |
|---|--------|--------|------------|-------|------------|
| [#2515](https://github.com/HKUDS/nanobot/pull/2515) | integrated_memory_framework | 2026-03-26 | 2026-05-26 | ~2 meses | 🔴 Alta |
| [#1443](https://github.com/HKUDS/nanobot/pull/1443) | decouple heartbeat reasoning from notification | 2026-03-02 | 2026-05-26 | ~3 meses | 🟡 Média |
| [#3869](https://github.com/HKUDS/nanobot/pull/3869) | DeepSeek message hardening | 2026-05-16 | 2026-05-26 | ~11 dias | 🟡 Média |

### Análise

- **PR #2515 (Memory Framework):** Pull request significativo (~2 meses em aberto) integrando Mem0/Graphiti/Memobase. Precisa de review técnico para merge ou feedback sobre direção.
- **PR #1443 (Heartbeat):** Mudança de comportamento default para heartbeat reasoning silencioso. Estagnado há ~3 meses — precisa decisão de merge ou closure.
- **PR #3869 (DeepSeek hardening):** Bloqueando problemas de API com deepseek-v4. Recomenda-se review prioritário dado impacto em produção.

---

## Métricas Consolidada do Dia

| Metric | Valor |
|--------|-------|
| Issues abertas/ativas | 3 |
| Issues fechadas | 1 |
| PRs abertos | 11 |
| PRs fechados/merged | 6 |
| Releases | 0 |
| Bugs críticos resolvidos | 1 |
| Features em desenvolvimento | 5+ |

**Veredicto:** Projeto em estado saudável de desenvolvimento ativo com foco em estabilidade (bug fixes rápidos) e inovações (multi-agente, voice I/O, memory evolution). Atenção recomendada para PRs estagnados (#2515, #1443).

---

*Relatório gerado automaticamente com base em dados do GitHub HKUDS/nanobot em 2026-05-27.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto — Hermes Agent
**Data de referência:** 2026-05-27
**Fonte:** NousResearch/hermes-agent · GitHub
**Período cobertor:** Últimas 24 horas

---

## 1. Panorama do dia

O Hermes Agent mantém um ritmo de atividade intenso no dia 27/05/2026, com **50 issues e 50 PRs atualizados** nas últimas 24h — indicativo de uma comunidade ativa e contribuidores bastante envolvidos. Das 50 issues, 46 permanecem abertas e 4 foram fechadas; dos 50 PRs, 37 estão abertos e 13 foram merged/fechados. **Nenhuma release foi publicada** no período. O projeto apresenta **três bugs classificados como P1 (críticos)**, todos relacionados à CLI/TUI e ao manipulador de comandos slash, o que comprometeria a usabilidade básica em múltiplas plataformas. Ao mesmo tempo, uma série de PRs de bugfix já foi fechada com correções alinhadas, demonstrando capacidade de resposta rápida. A ausência de releases recentes pode sinalizar um ciclo de estabilização antes de um próximo tagged release.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24 horas.**

A ausência de releases novas sugere que o projeto está consolidando conteúdo antes de uma próxima tagged version —abarco coerente com o volume de bugfixes pendentes e PRs abertos. Recomenda-se monitorar a branch principal para um potencial release iminente que aborde os P1s aberta

---

## 3. Progresso do projeto

### PRs merged/fechadosrecentemente

| # | Título | Escopo | Impacto |
|---|--------|--------|---------|
| [#32808](https://github.com/NousResearch/hermes-agent/pull/32808) | fix(cli): keep slash confirmation modal on app loop | `comp/cli` · **P1** | Corrige regres­são onde `/clear`, `/new`, `/reset`, `/undo` perdiam keystrokes para o composer em terminals POSIX. Fechada hoje. |
| [#23812](https://github.com/NousResearch/hermes-agent/pull/23812) | fix(gateway): reload MCP tools in cached agents + auto-reload watcher | `comp/gateway` · `tool/mcp` · **P2** | Corrige两点: sessões existentes mantinham tool lists stale após `/reload-mcp`, e adiciona watcher para auto-reload. |
| [#32815](https://github.com/NousResearch/hermes-agent/pull/32815) | fix(gateway): refresh cached agent tools on /reload-mcp | `comp/gateway` · `tool/mcp` · **P2** | Complemento a #23812 — garante que o tool list é de fato atualizado na sessão em execução, sem necessidade de `/new`. |
| [#32622](https://github.com/NousResearch/hermes-agent/pull/32622) | feat(skills): add Webwright browser automation skill | `tool/browser` · `tool/skills` · **P3** | Adiciona skill bundled de browser automation via Playwright; documenta workspace contract e verificação de critical-points. |
| [#32804](https://github.com/NousResearch/hermes-agent/pull/32804) | fix(cron): clarify schedule is required for create in tool schema | `comp/cron` · `provider/xai` · **P3** | Salvage de #32448 — deja la descripción y el JSON Schema conditional explícitos para que Grok deje de iterar. Resolve #32427. |
| [#23454](https://github.com/NousResearch/hermes-agent/pull/23454) | fix(cli): drive _prompt_text_input directly when off main thread | `comp/cli` · **P2** | Confirmação prompts para `/clear`, `/new`, `/undo`, `/reload-mcp` passam a exibir corretamente na CLI clássica. |
| [#32448](https://github.com/NousResearch/hermes-agent/pull/32448) | fix(cron): clarify schedule is required for create in tool schema | `comp/cron` · `provider/xai` · **P3** | Two-layer fix com description text y JSON Schema conditional para modelos Grok. |
| [#32427](https://github.com/NousResearch/hermes-agent/issues/32427) | cronjob tool fails to include required schedule parameter when using Grok | `comp/cron` · `provider/xai` · **P3** | Issue corrigida via #32804/#32448. |

**Síntese:** O trabalho do dia concentrou-se massivamente em **fixes de CLI e cronjob**, com foco particular na regressão dos comandos slash — um problema P1 que já contou com ao menos dois PRs fechados. A adição da Webwright skill (#32622) representa avanço funcional tangível para automation.

---

## 4. Temas quentes da comunidade

### Issues com maior engajamento

**#18080 — [Feature]: Improved Themes for Dashboard** *(19 comentários · 27 👍)*
📌 https://github.com/NousResearch/hermes-agent/issues/18080

Demanda recorrente e significativamente投票ada: os five temas atuais (Midnight, Ember, Mono, Cyberpunk, Rose) alteram apenas a paleta de cores, mas não abordam tipografia e contraste. Fontes serifadas miúdas com peso leve são cited como-barreira de legibilidade. Com quase três semanas de idade e quase 30 interações, este é o **issue não crítico mais engajado** do período. A comunidade está sinalizando claramente que _temas são mais do que cores_ — implica trabajo em design system e acessibilidade.

**#10421 — [Feature] Turn-level live time context for current date/time awareness** *(7 comentários · 4 👍)*
📌 https://github.com/NousResearch/hermes-agent/issues/10421

Solicitação de consciência temporal granular no nível de cada _turn_, não apenas no nível de sessão. Agentes carecem de noção fiável de "agora / hoje / dia da semana" sem chamada explícita de ferramenta. Este é um padrão recorrente em agent frameworks e pode afectar a qualidade de respostas contextuais, especialmente para tarefas de agendamento e recordatórios.

---

## 5. Bugs e estabilidade

### Prioridade 1 (Críticos)

| # | Título | Escopo | Descrição |
|---|--------|--------|-----------|
| [#22958](https://github.com/NousResearch/hermes-agent/issues/22958) | `/clear`, `/new`, `/reset`, `/undo` confirmation prompt leaks keystrokes | `comp/cli` · P1 | O prompt de confirmação não intercepta input — caracteres vão direto para o composer. Afeta Linux (v0.13.0). |
| [#23997](https://github.com/NousResearch/hermes-agent/issues/23997) | `enabled_toolsets` silently rejects MCP server names — MCP tools absent in cron sessions | `comp/tools` · `comp/cron` · `tool/mcp` · P1 | Validação aceita names sem warning, mas o registry nunca os inclui. Todo cron session com MCP fica sem tools. |
| [#32383](https://github.com/NousResearch/hermes-agent/issues/32383) | `/new`, `/clear`, `/reset` freeze permanently on Linux after fae815a (PR #30773) | `comp/cli` · P1 | Commit fae815adc inseriu guarda non-main-thread que causa deadlock permanente em Linux. |

> ⚠️ **Alerta:** Três bugs P1 abertos simultaneamente — dois na CLI e um no subsistema cron/MCP. #32808 foi fechado como fix, mas a interação com #32383 (freeze em Linux) requer validação independente.

### Prioridade 2 (Altos)

| # | Título | Escopo | Descrição |
|---|--------|--------|-----------|
| [#31435](https://github.com/NousResearch/hermes-agent/issues/31435) | tool message content must be string: plugin tools returning dict causam 400 upstream | `comp/agent` · `comp/plugins` · P2 | Dict возвращается por plugins como content de `role:"tool"`, violando spec OpenAI. |
| [#32207](https://github.com/NousResearch/hermes-agent/issues/32207) | `/clear` command freezes or bugs the terminal | `comp/cli` · P2 | Freeze completo no Windows 11/WSL após executar `/clear`. |
| [#32790](https://github.com/NousResearch/hermes-agent/issues/32790) | Hermes mislabels upstream 429 quota exhaustion as missing Codex credentials | `comp/gateway` · `provider/copilot` · P2 | Erro 429 "usage limit" é logado como credenciais faltando — diagnósticos incorretos. |
| [#31584](https://github.com/NousResearch/hermes-agent/issues/31584) | Treat memory-context as background context, not authoritative user-message content | `comp/agent` · `tool/memory` · P2 | Memória injetada pode ser tratada como input do usuário, criando surfacepara abuso. |
| [#32827](https://github.com/NousResearch/hermes-agent/issues/32827) | `same_tool_failure_warning` does not auto-escalate to block — unbounded retry-loop cost amplification | `bug` · **P1 (?)** | O mecanismo de warning incrementa contador mas não bloqueia após threshold — pode causar loops infinitos com custo acumulado. Não tem assigne nem comentários ainda. |

**Síntese:** A estabilidade da CLI/TUI é a maior área de dor no período, com freeze e regressões em comandos core. O bug de 429 mal classificado (#32790) afecta diretamente a experiência do Codex e a triagem de erros.

---

## 6. Pedidos de features e sinais de roadmap

### Novas demandas abertas hoje

| # | Título | Escopo | Descrição |
|---|--------|--------|-----------|
| [#32818](https://github.com/NousResearch/hermes-agent/issues/32818) | [EPIC] Premium Product SDD v0 — Hermes Assistant Platform | **Epic** | Criação de um produto premium: assistente operacional com memória persistente, voz em tempo real (LiveKit) e capacidade real de ação. Documento de visão e tese do produto. |
| [#32819](https://github.com/NousResearch/hermes-agent/issues/32819) *(referenciado)* | Premium Assistant Platform — Product Vision | — | Artefato da Epic #32818. |
| [#32821](https://github.com/NousResearch/hermes-agent/issues/32821) | MVP v0: smallest shippable premium assistant | **Feature** | Define o menor assistente shippable que ainda parece premium. |
| [#32823](https://github.com/NousResearch/hermes-agent/issues/32823) | Roadmap v0: phased execution plan and validation gates | **Feature** | Transforma SDD em roadmap com fases e validation gates. |
| [#32822](https://github.com/NousResearch/hermes-agent/issues/32822) | Operating model: SDD, ADRs, DoR/DoD e quality gates | **Feature** | Modelo operacional para construção disciplinada do produto. |
| [#32825](https://github.com/NousResearch/hermes-agent/pull/32825) | docs: add premium assistant platform v0 spec | **Docs/Epic** | Adiciona especificação da plataforma premium e links para issues de execução. |
| [#32411](https://github.com/NousResearch/hermes-agent/pull/32411) | feat(auxiliary): add per-task `fallback_providers` config for transparent failover | `comp/agent` · `area/config` · P2 | Adiciona chave `fallback_providers` a cada tarefa auxiliar (vision, compression, web_extract) com wrapper `_FailoverAuxiliaryClient`. |
| [#32802](https://github.com/NousResearch/hermes-agent/pull/32802) | feat: support Telegram guest messages | `comp/gateway` · `platform/telegram` · P2 | Subscribe ao tipo `guest_message` do Bot API 10.0 e roteia respostas via `answerGuestQuery`. |
| [#30675](https://github.com/NousResearch/hermes-agent/pull/30675) | feat: add Voicebox sidecar TTS integration | `comp/tools` · `tool/tts` · P3 | Adiciona toolset Voicebox (`voicebox_status`, `voicebox_speak`, `voicebox_transcribe`) via REST API localhost como provider alternativo de TTS. |
| [#32781](https://github.com/NounsResearch/hermes-agent/issues/32781) | [Feature]: Model name fields should be dropdowns sourced from /v1/models per provider | `comp/cli` · `comp/tui` · P3 | Substituir campos de texto livre por dropdowns populados dinamicamente via `/v1/models`. |
| [#26923](https://github.com/NousResearch/hermes-agent/issues/26923) | OAuth loopback login broken for remote/browser-based consoles (GCP, Codespaces, etc.) | `comp/cli` · `area/auth` · P3 | OAuth hardcoded `127.0.0.1` quebra fluxos em cloud shells remotos — precisa de redirect_uri configurável. |
| [#15176](https://github.com/NousResearch/hermes-agent/issues/15176) | [Feature]: Add fallback routing from local open-source models to closed-source models after repeated failures | `comp/agent` · `area/config` · P3 | Permite failover automático de modelos open-source locais (Ollama) para closed-source após falhas repetidas. Tem 2 👍. |

**Síntese:** O capítulo mais significativo do dia é a **Epic de Premium Assistant Platform (#32818)** — sinaliza que o projeto está em processo de definição de um produto premium de maior valor agregado, com memória persistente e voz em tempo real. parallelamente, a feature de `fallback_providers` por tarefa auxiliar (#32411) addresses uma demanda recorrente de resiliência. A integração Voicebox (#30675) demonstra estratégia de extensibilidade via sidecar.

---

## 7. Resumo de feedback dos usuários

| Tema | Frequência | Insight |
|------|-----------|---------|
| **Legibilidade dos temas (Dashboard)** | Alta (27 👍 em #18080) | Usuários reportam que temas atuais são decorativos — cores mudam, mas tipografia serifada miúda permanece ilegível. Sinaliza necessidade de design system mais robusto. |
| **Falhas em /clear, /new e comandos slash** | Alta (3 issues P1 + PRs fechados) | Usuários Linux e Windows estão enfrentando freezing e perda de keystrokes nos comandos slash mais básicos. Impacta diretamente a experiência diária. |
| **Consciência temporal do agente** | Moderada (#10421) | Usuários precisam que o agente saiba "hoje é terça-feira" sem chamada explícita de ferramenta — padrão esperado em agents modernos. |
| **Privacidade de dados (#32757)** | Emergente | Usuário do Nous Portal pergunta como garantir zero data retention com a configuração atual. Demonstra preocupação crescente com privacidade. |
| **Memory-context como surface de abuso (#31584)** | Técnica, mas relevante | O memory context pode ser tratado como input autoritativo do usuário — abuso potencial. A comunidade está a pensar em segurança defensiva. |

**Padrão central:** A experiência core da CLI/TUI está a sofrer com regressões recentes que impedem fluxos básicos (/clear, /new). Simultaneamente, há demandas crescentes por melhor legibilidade, consciência contextual e privacidade — indicando umユーザー base que está a amadurecer do piloto experimental para uso diária.

---

## 8. Backlog que merece atenção

> Issues ou PRs que estão abertos há múltiplos dias sem resposta significativa.

| # | Título | Age | Prioridade | Motivo da atenção |
|---|--------|-----|------------|-------------------|
| [#18876](https://github.com/NousResearch/hermes-agent/issues/18876) | Hindsight memory provider crashes gateway when hindsight-client not installed | Aberto desde 2026-05-02 (~25 dias) | P3 | Crash causing infinite Docker restart loop — fácil de mitigar com import check. Sem comentários além dos dois iniciais. |
| [#15176](https://github.com/NousResearch/hermes-agent/issues/15176) | Add fallback routing from local open-source models to closed-source after repeated failures | Aberto desde 2026-04-24 (~33 dias) | P3 | Feature com valor demonstrado (2 👍). Aguarda feedback de maintainer. |
| [#20957](https://github.com/NousResearch/hermes-agent/issues/20957) | Prompt caching not applied when using OpenRouter + Claude (`chat_completions` api_mode) | Aberto desde 2026-05-07 (~20 dias) | P2 | Afeta prompt caching com combinação popular. Somente 1 comentário. |
| [#26151](https://github.com/NousResearch/hermes-agent/issues/261

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>


# 📊 Relatório do Projeto PicoClaw — 2026-05-27

---

## 1. Panorama do Dia

O projeto PicoClaw demonstra **alta atividade de desenvolvimento** em 27 de maio de 2026. Nas últimas 24 horas, foram registradas 7 issues e 21 pull requests, com 13 PRs merged/fechados — indicando um ciclo de releases intenso. A release nightly `v0.2.9-nightly.20260526.ab6d3946` foi publicada, sinalizando progresso contínuo em direção à versão 0.2.9. A comunidade está ativamente resolvendo bugs de providers (termosus, WeChat, modelos Claude/OpenAI) e implementando melhorias em canais (Telegram guest mode, WeChat multi-conta, Feishu). Não há sinais de instabilidade crítica, embora bugs relacionados a RISC-V e OAuth exijam atenção.

---

## 2. Lançamentos

### 🌙 Nova Release: Nightly Build

| Item | Detalhe |
|------|---------|
| **Versão** | `v0.2.9-nightly.20260526.ab6d3946` |
| **Tipo** | Automated nightly build |
| **Changelog** | [v0.2.9...main](https://github.com/sipeed/picoclaw/compare/v0.2.9...main) |
| **Advertência** | Build automatizado, pode ser instável — uso em produção não recomendado |

**Observação:** Esta é uma build noturna automática. Não há changelog detalhado listado; para mudanças completas, consultar o compare link acima. Esta build indica que a equipe está preparando conteúdo para a versão 0.2.9 estável.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados nas Últimas 24h

| # | PR | Autor | Resumo | Impacto |
|---|-----|-------|--------|---------|
| #2843 | [Feature] same-agent final turn render | bogdanovich | Adiciona modo experimental de renderização final para turns com muitas interações de steering | Melhora qualidade de respostas em conversas complexas |
| #2829 | [Proposal] explicit async result delivery | bogdanovich | Política explícita de entrega de resultados async para spawns | Melhora controle de orquestração de subagentes |
| #2840 | fix: send steering final replies as new messages | bogdanovich | Corrige renderização de replies finais em steering chains | Evita sobreposição de mensagens |
| #2826 | fix: resolve relative paths in exec tool | yuxuan-7814 | Resolve paths relativos no guard de segurança do exec | Fecha #2749 — segurança do workspace |
| #2750 | fix: exec guard relative paths | Chris-dash-T4 | Corrige tratamento de paths relativos no scanner de paths | Segurança em comandos bash |
| #2647 | fix: enable web_search config YAML + DuckDuckGo default | yuxuan-7814 | Habilita configuração YAML e ativa DuckDuckGo por padrão | Fecha #2616 — configuração de busca web |
| #2883 | feat: 支持微信多账号配置 | jiegehere | Suporte a múltiplas contas WeChat | Multicanal para ecossistema WeChat |
| #2946 | fix(seahorse,session): preserve created_at | lc6464 | Persiste timestamps através do pipeline SeaHorse | Integridade de histórico |
| #2933 | feat(web): line numbers + wrap toggle | lc6464 | Adiciona números de linha e wrap toggle em code blocks | UX melhorada para desenvolvedores |
| #2849 | feat(telegram): add guest mode support | stolyarchuk | Modo guest para Telegram | Suporte a consultas sem autenticação |
| #2845 | feat(telegram): business mode support | stolyarchuk | Modo business para Telegram | Integração com Telegram Business API |
| #2846 | fix(feishu): dynamic channel name | Gowa2017 | Corrige nomes de canais Feishu dinâmicos | Suporte a múltiplas instâncias |
| #2851 | Docs: Yocto/OpenEmbedded layer (meta-picoclaw) | skrimby1 | Adiciona layer Yocto para embedded Linux | Implantação profissional em sistemas embarcados |

### Destaque de Avanço Técnico

O trabalho de **@bogdanovich** nesta semana está consolidando uma arquitetura mais robusta para agent orchestration com:
- Final turn rendering inteligente para conversas com múltiplos follow-ups
- Política clara de entrega de resultados async
- Correção de envio de mensagens em chains de steering

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| # | Título | Tipo | Comentários | 👍 | Link |
|---|--------|------|-------------|----|------|
| #2404 | Add streaming HTTP request config | Enhancement | 8 | 1 | [Issue](https://github.com/sipeed/picoclaw/issues/2404) |
| #2674 | Codex OAuth empty response with streaming | Bug | 6 | 4 | [Issue](https://github.com/sipeed/picoclaw/issues/2674) |
| #2887 | .deb on RISC-V not functional | Bug | 5 | 0 | [Issue](https://github.com/sipeed/picoclaw/issues/2887) |
| #2843 | same-agent final turn render (CLOSED) | Feature | 2 | 0 | [Issue](https://github.com/sipeed/picoclaw/issues/2843) |
| #2829 | explicit async result delivery policy (CLOSED) | Proposal | 2 | 0 | [Issue](https://github.com/sipeed/picoclaw/issues/2829) |

### Análise de Demandas

**🔴 Alta Prioridade — Streamings:**
- **Issue #2404**: A comunidade solicita há ~50 dias suporte a streaming HTTP para backends LLM. A comparação com o cliente OpenAI Python (`stream=True`) indica que este é um requisito essencial para parity com SDKs主流. Com 8 comentários, há discussão ativa sobre implementação.
  
- **Issue #2674**: O bug de OAuth com streaming no Codex está gerando frustração (4 👍). A resposta vazia com fallback "empty response" indica problema na parsing de eventos stream. Potencial regressão ou incompatibilidade de API.

**🟡 Suporte a Plataformas:**
- **Issue #2887**: .deb RISC-V quebrado com modelo OpenAI. Interessante notar que Go reporta versão `1.25.9`, sugerindo ambiente customizado ou cross-compilation problemático.

---

## 5. Bugs e Estabilidade

### Bugs Reportados (Últimas 24h)

| # | Bug | Severidade | Canal | Status | Link |
|---|-----|------------|-------|--------|------|
| #2674 | Codex OAuth empty response com streaming | 🔴 Alta | Provider | Aberto | [Issue](https://github.com/sipeed/picoclaw/issues/2674) |
| #2887 | .deb RISC-V não funcional | 🟠 Média | Deploy | Aberto | [Issue](https://github.com/sipeed/picoclaw/issues/2887) |
| #2943 | WeChat imagem → GLM-5 API error 1210 | 🟡 Baixa-Média | WeChat | Aberto | [Issue](https://github.com/sipeed/picoclaw/issues/2943) |
| #2944 | Termux X509 certificate errors | 🟡 Baixa | Deploy | Aberto | [Issue](https://github.com/sipeed/picoclaw/issues/2944) |

### Análise de Severidade

**🔴 #2674 — Crítica para usuários Codex:**
```
Mensagem: "The model returned an empty response. This may indicate a provider error 
or token limit."
```
- Usuários de Codex OAuth estão получая respostas vazias
- 4 👍 indica impacto em múltiplos usuários
- Causa raiz:似乎是 problema na handling de `response.output_item.done` em streaming

**🟠 #2887 — Plataforma:**
- .deb para RISC-V completamente não funcional
- Pode afectar IoT/embarcados com processadores RISC-V

**🟡 #2943 e #2944 — Recentemente reportados:**
- #2943: Bug de параметр com API de visão da Zhipu (GLM-5-Turbo) via WeChat
- #2944: SSL cert errors no Termux (PR #2949 já em progresso para corrigir)

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| # | Feature | Domínio | Comentários | Potencial Impacto | Link |
|---|---------|---------|-------------|-------------------|------|
| #2404 | Streaming HTTP config | Provider | 8 | 🔴 Alto | [Issue](https://github.com/sipeed/picoclaw/issues/2404) |
| #2551 | Standardize channel identification | Channel | — | 🟡 Médio | [PR](https://github.com/sipeed/picoclaw/pull/2551) |
| #2239 | Docker compose with privileged | Docker | — | 🟢 Baixo | [PR](https://github.com/sipeed/picoclaw/pull/2239) |

### PRs Abertos com Novas Funcionalidades

| # | Feature | Autor | Relevância | Link |
|---|---------|-------|------------|------|
| #2951 | Fix web_search function-type compatibility | yuxuan-7814 | Corrigir API errors | [PR](https://github.com/sipeed/picoclaw/pull/2951) |
| #2950 | FUNDING.yml for GitHub Sponsors | yuxuan-7814 | Sustentabilidade | [PR](https://github.com/sipeed/picoclaw/pull/2950) |
| #2948 | Skip temperature for claude-opus-4-7 | yuxuan-7814 | Compatibilidade modelo | [PR](https://github.com/sipeed/picoclaw/pull/2948) |
| #2947 | Fix claude-sonnet-4.6 model ID | yuxuan-7814 | Compatibilidade modelo | [PR](https://github.com/sipeed/picoclaw/pull/2947) |
| #2949 | Auto-detect Termux SSL cert path | yuxuan-7814 | Plataformas alternativas | [PR](https://github.com/sipeed/picoclaw/pull/2949) |

### Tendências de Roadmap Observadas

1. **Suporte a streaming** emerge como demanda mais votada/comentada — provavelmente prioridade para v0.2.9
2. **Model compatibility** está sendo ativamente corrigido (Claude, OpenAI)
3. **Multi-instância** de canais sendo padronizado (#2551)
4. **Deploy flexibility** melhorando (Yocto layer, Termux, RISC-V)

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Dor | Cenário | Impacto | Referência |
|-----|---------|---------|------------|
| **Respostas vazias em Codex OAuth** | Usuários usando ChatGPT backend via OAuth recebem respostas em branco | 🔴 Alto | [#2674](https://github.com/sipeed/picoclaw/issues/2674) |
| **RISC-V .deb quebrado** | Desenvolvedores em hardware RISC-V não conseguem usar OpenAI models | 🟠 Médio | [#2887](https://github.com/sipeed/picoclaw/issues/2887) |
| **X509 errors no Termux** | Usuários em Termux/chroot não conseguem fazer requisições HTTPS | 🟡 Baixo | [#2944](https://github.com/sipeed/picoclaw/issues/2944) |
| **WeChat image API errors** | Usuários WeChat enviando imagens recebem error 1210 da Zhipu | 🟡 Baixo | [#2943](https://github.com/sipeed/picoclaw/issues/2943) |

### Cenários de Uso Emergentes

1. **Embedded/IoT**: Yocto layer, RISC-V support requests indicam foco em deployment profissional
2. **Business**: Telegram business mode, guest mode satisfazem用例 corporativas
3. **Multi-channel**: WeChat multi-conta, Feishu dinâmico mostram adoção em ecossistemas enterprise
4. **Developer experience**: Line numbers, wrap toggle em código indicam público técnico

### Satisfação Geral

**Positivo:** Comunidade ativa, múltiplos PRs de qualidade sendo merged, documentação e funding infrastructure sendo adicionados.

**Áreas de atrito:** Bugs de streaming (Codex, streaming HTTP), compatibilidade de plataformas alternativas (Termux, RISC-V).

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Stale

| # | Título | Tipo | Criado | Atualizado | Dias Inativo | Prioridade | Link |
|---|--------|------|--------|------------|--------------|------------|------|
| #2239 | Docker compose privileged | Enhancement | 2026-04-01 | 2026-05-26 | ~55 dias | 🟡 | [PR](https://github.com/sipeed/picoclaw/pull/2239) |
| #2551 | Standardize channel identification | Refactor | 2026-04-16 | 2026-05-26 | ~41 dias | 🟡 | [PR](https://github.com/sipeed/picoclaw/pull/2551) |
| #2404 | Streaming HTTP config | Feature | 2026-04-07 | 2026-05-26 | ~50 dias | 🔴 | [Issue](https://github.com/sipeed/picoclaw/issues/2404) |
| #2674 | Codex OAuth empty response | Bug | 2026-04-26 | 2026-05-26 | ~31 dias | 🔴 | [Issue](https://github.com/sipeed/picoclaw/issues/2674) |

### Ações Recomendadas

| Prioridade | Ação | Justificativa |
|------------|------|---------------|
| 🔴 Alta | Priorizar #2404 (streaming HTTP) | 8 comentários, alta demanda da comunidade |
| 🔴 Alta | Investigar #2674 (Codex OAuth) | Bug crítico afeta fluxo de trabalho principal |
| 🟠 Média | Revisar #2887 (RISC-V) | Plataformas alternativas ganham tração |
| 🟡 Baixa | Acelerar #2943 e #2944 | Bugs específicos de integração, PRs já em progresso |

---

## 📈 Métricas Resumidas do Dia

| Métrica | Valor | Tendência |
|---------|-------|-----------|
| Issues ativas | 5 | Neutra |
| PRs abertos | 8 | Neutra |
| PRs mergeados | 13 | 🟢 Positiva |
| Novas releases | 1 (nightly) | 🟢 Positiva |
| Bugs críticos | 1 (#2674) | 🟡 Atenção |
| Features solicitadas | 1 alta prioridade (#2404) | 🟡 Atenção |

---

*Relatório gerado automaticamente para 2026-05-27 com base em dados do GitHub de [sipeed/picoclaw](https://github.com/sipeed/picoclaw).*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-05-27

## 1. Panorama do dia

O projeto IronClaw demonstra altíssima atividade nas últimas 24h, com 50 PRs atualizados (9 merged/fechados) e 10 issues em aberto. A release **v0.29.0** foi publicada ontem (2026-05-26), introduzindo suporte a WeCom e ferramentas externas na Responses API. O esforço principal concentra-se no **Reborn** — a nova arquitetura do agente — com múltiplos PRs paralelos para lifecycle, sandbox, signing e subagents. Dois issues de segurança foram abertos preventivamente, e um bug crítico de subagentes em background foi identificado e está sendo corrigido via PR. O volume de PRs abertos (41) sinaliza uma fase de intensificação de integração antes de um próximo release.

---

## 2. Lançamentos

### ✅ ironclaw-v0.29.0 (2026-05-26)
**Mudanças:**
| Área | Alteração |
|------|-----------|
| **Channels** | Adicionado suporte a **WeCom** via PR [#2394](https://github.com/nearai/ironclaw/pull/2394) |
| **Web** | Suporte a **ferramentas externas** na Responses API via PR [#3122](https://github.com/nearai/ironclaw/pull/3122) |
| **Gateway** | Adicionado **botão de download de logs** via PR [#3588](https://github.com/nearai/ironclaw/pull/3588) |

**Breaking changes:** Nenhuma identificada. Changes são aditivas.
**Notas de migração:** Não há. Recomenda-se atualizar para 0.29.0 para obter as novas integrações de canal e gateway.

> ⚠️ **Alerta:**尽管发布了0.25.0–0.27.0, o crates.io ainda só possui a versão 0.24.0 ([#3259](https://github.com/nearai/ironclaw/issues/3259)). Consumidores via Cargo estão pinned a uma versão antiga.

---

## 3. Progresso do Projeto

### PRs Mergeados/Fechados Hoje

| PR | Título | Tamanho | Escopo | Impacto |
|----|--------|---------|--------|---------|
| [#4075](https://github.com/nearai/ironclaw/pull/4075) | Stream Reborn reasoning projections | XL | agent, orchestrator | Projeções de raciocínio em tempo real no WebUI |
| [#4076](https://github.com/nearai/ironclaw/pull/4076) | Inject default Reborn system prompt | L | docs | Prompt sistêmico customizável para Reborn |
| [#3872](https://github.com/nearai/ironclaw/pull/3872) | Subagent spawn phase 4 verification | XL | docs, deps | Validação de production-readiness dos subagentes |
| [#4069](https://github.com/nearai/ironclaw/pull/4069) | Add credential recovery projections | XL | docs | Estados de recuperação de credenciais estabilizados |

### PRs em Andamento de Destaque

| PR | Título | Escopo | Riesgo | Relevância |
|----|--------|--------|--------|------------|
| [#4079](https://github.com/nearai/ironclaw/pull/4079) | Shared LLM config resolution for Reborn | dependencies | low | Padronização da configuração de provedores |
| [#4072](https://github.com/nearai/ironclaw/pull/4072) | Add Reborn process sandbox backend | sandbox, deps | medium | Execução arbitrária de código via Docker |
| [#4066](https://github.com/nearai/ironclaw/pull/4066) | Wire Reborn extension lifecycle registry | deps | low | Foundation para extensões third-party |
| [#3974](https://github.com/nearai/ironclaw/pull/3974) | Injected wallet provider + gate/resolve | deps | medium | PR 7/10 do substrate de attested-signing |
| [#3965](https://github.com/nearai/ironclaw/pull/3965) | ironclaw_chain_signing crate | deps | medium | PR 6/10 — custodial multi-chain signing |
| [#3899](https://github.com/nearai/ironclaw/pull/3899) | Reborn budgets: follow-ups E2E | channel, cli | medium | Cobertura completa de budgets e token usage |

**Observação:** O stack de **attested-signing** (PRs #3960–#3966) está em progresso coordenado de 10 PRs, indicando um esforço de segurança significativo para a pipeline de assinatura.

---

## 4. Temas Quentes da Comunidade

### Issues com Mais Atividade

| Issue | Título | Comentários | 👍 | Prioridade |
|-------|--------|-------------|----|------------|
| [#3259](https://github.com/nearai/ironclaw/issues/3259) | Publish 0.25.0–0.27.0 to crates.io | 10 | 0 | **Crítica** — downstream pinned a 0.24.0 |
| [#3857](https://github.com/nearai/ironclaw/issues/3857) | Slack ProductAdapter MVP | 4 | 0 | Alta — novo canal de integração |
| [#4085](https://github.com/nearai/ironclaw/issues/4085) | TenantSandboxProcessPort wiring | 1 | 0 | Alta — quebra composition tests em CI |
| [#3701](https://github.com/nearai/ironclaw/issues/3701) | macOS gateway never binds | 1 | 0 | Média — regressão macOS |

### Análise de Demandas

1. **Publicação no crates.io (#3259)** — 10 comentários indicam frustração real de consumidores. É o issue com mais atenção da comunidade. Downstream pinned a 0.24.0 por CVEs no wasmtime create impacto direto em segurança.

2. **Slack ProductAdapter MVP (#3857)** — Demanda por canal Slack pré-configurado com credenciais padrão e roteamento via Reborn. Sinaliza estratégia de expansão de canais.

3. **Subagent Flavors (#4086)** — Feature request recém-criada com 0 👍 mas já gerando PR associado (#4087). Adiciona `coder` e `explorer` flavors, demonstrando interesse em especialização de subagentes.

4. **EventStreamManager (#3809)** — Lane 8 do Reborn focado em timeline/replay para o WebUI. Demonstra foco em observabilidade e replay de runs.

---

## 5. Bugs e Estabilidade

### 🔴 Crítico
| Bug | Descrição | Impacto | Status |
|-----|-----------|---------|--------|
| [#4084](https://github.com/nearai/ironclaw/issues/4084) | Background subagent results never delivered to parent | Resultados de subagentes em background ficam "presos" — sem notificação ao parent. Parentes idle não sabem que o filho completou. | Fix em [PR #4089](https://github.com/nearai/ironclaw/pull/4089) |

### 🟡 Médio
| Bug | Descrição | Impacto | Status |
|-----|-----------|---------|--------|
| [#3701](https://github.com/nearai/ironclaw/issues/3701) | macOS prebuilt: gateway never binds | Regressão no macOS 0.28.2 — gateway não faz bind apesar de config habilitar. `ironclaw doctor` reporta habilitado incorretamente. | Investigação ativa |
| [#4085](https://github.com/nearai/ironclaw/issues/4085) | TenantSandboxProcessPort not wired in production builders | Composition tests falham permanentemente em CI, mascarando outros problemas. `production_runtime_policy()` usa TenantSandbox mas não wired a porta necessária. | Reportado em 2026-05-26 |

### 🟢 Baixo / Segurança
| Issue | Tipo | Descrição |
|-------|------|-----------|
| [#4082](https://github.com/nearai/ironclaw/issues/4082) | **Security** | `SecretString` é unwrapped para `String` em `src/tools/wasm/wrapper.rs:2803` — exibe secret em memória. |
| [#4081](https://github.com/nearai/ironclaw/issues/4081) | **Security** | `SignerApprovalGate` é `Option<>` e short-circuits com `Ok(())` se não instalado — pode ser inseguro se produção não configurar. |

> 📊 **Estatísticas de estabilidade:** 3 bugs aberto hoje, 2 são de segurança. 1 fix merged (background subagent). Não há indication de incidents ativos.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| Issue | Feature | Escopo | Sinais de Roadmap |
|-------|---------|--------|-------------------|
| [#4086](https://github.com/nearai/ironclaw/issues/4086) | Coder/Explorer/Planner subagent flavors | subagent | Arquitetura de flavors injetados via direction prompts (`.md`) e `CapabilityAllowSet` |
| [#3857](https://github.com/nearai/ironclaw/issues/3857) | Slack ProductAdapter MVP | channels | Canal Slack pré-configurado com DMs e app mentions via Reborn services |
| [#2394](https://github.com/nearai/ironclaw/pull/2394) (merged) | WeCom channel | channels | Expansão de canais de comunicação |
| [#3122](https://github.com/nearai/ironclaw/pull/3122) (merged) | Externally-provided tools in Responses API | web | Abertura da API para ferramentas externas |

### Sinais de Roadmap Extraídos

1. **Reborn como arquitetura dominante** — 70%+ dos PRs ativos são prefixados com `[reborn]` ou relacionados. Roadmap claramente centrado na migração para Reborn.

2. **Multi-chain signing (attested-signing)** — 10-PR substrate em desenvolvimento controlado. Timestamp de 2026-05-23 para o plano. Estratégico para integrações on-chain.

3. **Trigger loop design (#3874)** — Spec para iniciar workflows via cron triggers (agenda). Nova interface de automação mencionada.

4. **Extensibilidade third-party (#3951)** — Hooks para extensões third-party via `HOOKS_THIRD_PARTY_ENABLED` (default OFF). Modelo de "hook-only projection" de contenção.

5. **Process sandbox (#4072)** — Docker como primeiro backend para execução arbitrária de código em sandbox.

---

## 7. Resumo de Feedback dos Usuários

### Dores Documentadas

| Dor | Fonte | Severidade | Detalhamento |
|-----|-------|-----------|--------------|
| **Pinned a 0.24.0 no crates.io** | #3259 | 🔴 Crítica | Consumidores via Cargo impacted. Dependência do wasmtime 28.x com CVEs mantém max version baixa. |
| **Gateway não faz bind no macOS** | #3701 | 🟡 Média | Usuários macOS com prebuilt 0.28.2 não conseguem usar gateway local. `doctor` dá false positive. |
| **Resultados de background subagents perdidos** | #4084 | 🔴 Crítica | Productivity impact: agents em background completam silenciosamente. Usuários não sabem que tarefa terminou. |
| **CI mascara erros** | #4085 | 🟡 Média | Composition tests falham permanentemente — impossibilita detecção de novas regressões. |

### Cenários de Uso em Evidência

- **Uso multi-canal:** Integração com Slack, WeCom demonstrando foco em comunicadores enterprise.
- **Subagent orchestration:** Padrão de subagentes em background com completion observers indica arquitetura de agente complexo.
- **Extensibilidade:** Sistema de hooks e extensões WASM para third-party customization.
- **Signing attacks:** Multi-chain custodial signing para workflows on-chain.

### Satisfação Geral

> 📊 **Indicadores de saúde:**
> - 9 PRs fechados em 24h → alta produtividade de integração
> - 41 PRs abertos → pipeline robusto de features
> - 0 issues com >20 👍 (nenhum viralizou) → sem viralidade positiva mas também sem revolta
> - 2 bugs de segurança abertos hoje → equipe respondendo proativamente

**Tendência:** Positiva. Atividade intensa com foco em qualidade (security fixes, CI stability) concurrently com feature development.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta / Emmbeded

| Issue | Idade | Status | Relevância |
|-------|-------|--------|------------|
| [#3259](https://github.com/nearai/ironclaw/issues/3259) | 22 dias (desde 2026-05-05) | Aberta, 10 comentários | ⭐ **Crítica** — bloqueia consumidores |
| [#3701](https://github.com/nearai/ironclaw/issues/3701) | 11 dias (desde 2026-05-16) | Aberta, 1 comentário | 🟡 macOS user impact |
| [#3809](https://github.com/nearai/ironclaw/issues/3809) | 8 dias (desde 2026-05-19) | Aberta without comments | 📋 Reborn Lane 8 |
| [#3857](https://github.com/nearai/ironclaw/issues/3857) | 6 dias (desde 2026-05-21) | Aberta, 4 comentários | Slack MVP |

### PRs Antigos em Review

| PR | Idade | Tamanho | Bloqueios |
|----|-------|---------|-----------|
| [#3874](https://github.com/nearai/ironclaw/pull/3874) | 5 dias | XS | docs only |
| [#3951](https://github.com/nearai/ironclaw/pull/3951) | 4 dias | XL | Third-party hooks |
| [#3963](https://github.com/nearai/ironclaw/pull/3963) | 3 dias | XL | Attested-signing PR3/10 |
| [#3899](https://github.com/nearai/ironclaw/pull/3899) | 5 dias | XL | Budgets E2E |

### Recomendações Prioritárias

1. **🔴 Urgente:** Resolver [#3259](https://github.com/nearai/ironclaw/issues/3259) — publicar versões ao crates.io ou comunicar timeline.
2. **🔴 Urgente:** Priorizar review/merge do [PR #4089](https://github.com/nearai/ironclaw/pull/4089) (fix do background subagent).
3. **🟡 Alta:** Investigar e corrigir [#3701](https://github.com/nearai/ironclaw/issues/3701) (macOS gateway) antes do próximo release.
4. **🟡 Alta:** Resolver [#4085](https://github.com/nearai/ironclaw/issues/4085) (TenantSandboxProcessPort) — CI está cego.
5. **🟢 Média:** Auditar os 2 security issues ([#4082](https://github.com/nearai/ironclaw/issues/4082), [#4081](https://github.com/nearai/ironclaw/issues/4081)) — evitar regressões em produção.

---

## Resumo Executivo

| Métrica | Valor |
|---------|-------|
| **Release atual** | v0.29.0 (2026-05-26) |
| **Issues abertas (24h)** | 10 |
| **PRs abertos (24h)** | 41 |
| **PRs merged/fechados (24h)** | 9 |
| **Bugs críticos abertos** | 2 (incl. 1 security) |
| **Issues sem resposta >7 dias** | 4 |
| **Tone saúde** | 🟢 Positiva, com pressão em publicação crates.io e CI stability |

---

*Relatório gerado automaticamente com base em dados do GitHub de [nearai/ironclaw](https://github.com/nearai/ironclaw) para 2026-05-27.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# 📊 Relatório do Projeto CoPaw — 2026-05-27

---

## 1. 🌅 Panorama do Dia

O projeto **CoPaw** (agentscope-ai/CoPaw) apresenta alta atividade em 27 de maio de 2026, com **27 issues e 25 PRs atualizados nas últimas 24h**, sem novas releases. A atividade está concentrada no frontend/console (bugs de UI e timestamps) e no backend/core (providers, áudio Telegram, context compaction). nove issues foram resolvidas e 9 PRs merged/fechados, indicando progresso sólido em多重 frentes. Há sinais de problemas de estabilidade em desktop (macOS Tahoe 26.5 crash) e canais (WeChat poll thread crash), além de uma crescente demanda por recursos enterprise (RBAC, plugins, workflow de backup).

---

## 2. 🚀 Lançamentos

**Nenhuma release została publicada nas últimas 24h.**

O projeto encontra-se na versão **1.1.9b1** (referenciada na issue #4705, commit `81054baa`), sugerindo que uma release estável está em preparação. Não há informações de changelog disponíveis no período analisado.

---

## 3. ✅ Progresso do Projeto

### PRs Merged/Closed (9 total)

| # | PR | Descrição | Impacto |
|---|-----|-----------|---------|
| **#4694** [CLOSED] | `feat(website): downloads UI Refactoring and opt` | Refatoração e otimização da UI de downloads no site | Melhoria na experiência do usuário web |
| **#4695** [CLOSED] | `fix(chat): upgrade @agentscope-ai/chat` | Atualização de dependência para corrigir stop e tool display | Correção de bugs críticos na interface de chat |
| **#1896** [CLOSED] | `fix: support audio content using top-level data field` | Suporte a áudios/voces do Telegram via campo `data` | **Correção importante** — resolve problema de processamento de mensagens de voz |
| **#4383** [CLOSED] | `fix(audio): accept top-level audio data sources` | Aceita blocos de áudio com `data` no nível superior | Expande suporte a formatos de áudio Telegram e locais |
| **#4294** [CLOSED] | `fix(context): keep compacted history on user boundary` | Mantém histórico compactado Starting on user message | **Previne orphan messages** — resolve #3984 |
| **#4660** [CLOSED] | `feat(provider): slim OpenCode models to 8 intersection models` | Reduz lista de modelos OpenCode para interseção Zen ∩ Go | Evita erros de API ao trocar endpoints |
| **#4681** [CLOSED] | `fix(coding): standardize copy-to-chat refs` | Padroniza referências de código copiado para chat | Melhoria na usabilidade do Coding Mode |

---

## 4. 🔥 Temas Quentes da Comunidade

### Issues/PRs com Maior Engajamento (por comentários)

| # | Tipo | Título | Comentários | Link |
|---|------|--------|-------------|------|
| **#4644** | Bug | Console UI: tool calls often not displayed until page refresh | **18** | [Link](https://github.com/agentscope-ai/QwenPaw Issue #4644) |
| **#1516** | Bug | AudioContent not supported in Telegram channel | **9** | [Link](https://github.com/agentscope-ai/QwenPaw Issue #1516) |
| **#4680** | Bug | HELP，修改技能名后智能体不见了 | **7** | [Link](https://github.com/agentscope-ai/QwenPaw Issue #4680) |
| **#4662** | Feature | 增加界面上每句话的发送时间 | **5** | [Link](https://github.com/agentscope-ai/QwenPaw Issue #4662) |
| **#2216** | Feature | Built-in Skill/Tool Execution Tracking | **5** | [Link](https://github.com/agentscope-ai/QwenPaw Issue #2216) |
| **#4650** | Bug | Console UI: reasoning chain not displayed for GLM-5.1 | **5** | [Link](https://github.com/agentscope-ai/QwenPaw Issue #4650) |

**Análise:** O tema mais quente é o bug #4644 (18 comentários) sobre tool calls não exibidos no console UI até refresh. Este bug afeta diretamente a experiência do usuário e foi fechado nesta janela temporal, indicando resolução. Há também forte demanda por timestamps por mensagem (#4662) e rastreamento de execução de skills (#2216), ambos com PRs em progresso. A questão de áudio Telegram (#1516) foi resolvida com múltiplos PRs.

---

## 5. 🐛 Bugs e Estabilidade

### Bugs Reportados (por severidade inferred)

#### 🔴 Críticos (potencial crash/breakage)
| # | Bug | Descrição | Link |
|---|-----|-----------|------|
| **#4704** | app crashes after upgrading to macOS Tahoe 26.5 | SIGSEGV em `tokio-rt-worker` após update do macOS — afeta desktop bundle | [Link](https://github.com/agentscope-ai/QwenPaw Issue #4704) |
| **#4698** | WeChat poll thread crashes during workspace reload | `RuntimeError: Event loop is closed` após zero-downtime reload — Sem auto-recovery | [Link](https://github.com/agentscope-ai/QwenPaw Issue #4698) |
| **#4697** | Wechat poll thread crashes (duplicate) | Mesmo bug reportado por outro usuário | [Link](https://github.com/agentscope-ai/QwenPaw Issue #4697) |
| **#4705** | Mission Phase 2 keeps iterating after agent asks for user input | Loop infinito em Mission Mode — agent bloqueado mas iteração continua | [Link](https://github.com/agentscope-ai/QwenPaw Issue #4705) |

#### 🟠 Graves (funcionais)
| # | Bug | Descrição | Link |
|---|-----|-----------|------|
| **#4644** | Console UI: tool calls not displayed until page refresh | Ferramentas não aparecem em tempo real — zero logs de erro | [Link](https://github.com/agentscope-ai/QwenPaw Issue #4644) **(RESLVED)** |
| **#4666** | Models配置页面丢失且无法加载 | Config de models perdida após nova sessão, "Load failed" | [Link](https://github.com/agentscope-ai/QwenPaw Issue #4666) |
| **#4650** | Reasoning chain not displayed for GLM-5.1 | Thought chain ausente só para GLM-5.1 via OpenAI-compatible API | [Link](https://github.com/agentscope-ai/QwenPaw Issue #4650) |
| **#4670** | Download button on Files page delayed response | Botão de download não responde imediatamente | [Link](https://github.com/agentscope-ai/QwenPaw Issue #4670) |
| **#4006** | Reasoning Content Not Filtered in OpenAI-Compatible Provider | Conteúdo de reasoning vaza para o usuário em MiniMax | [Link](https://github.com/agentscope-ai/QwenPaw Issue #4006) |
| **#4687** | 切模型后 running 配置不会自动适配 | `max_iters` global não se adapta ao trocar modelos | [Link](https://github.com/agentscope-ai/QwenPaw Issue #4687) |

#### 🟡 Moderados (UI/UX)
| # | Bug | Descrição | Link |
|---|-----|-----------|------|
| **#4700** | Console build fails: missing "monaco-editor" type declarations | Build TypeScript falha em TabbedEditor.tsx | [Link](https://github.com/agentscope-ai/QwenPaw Issue #4700) |
| **#4642** | 插件扩展、工作目录和用户体验优化建议 | Limitações na extensibilidade de plugins | [Link](https://github.com/agentscope-ai/QwenPaw Issue #4642) |

---

## 6. ✨ Pedidos de Features e Sinais de Roadmap

### Features com Alto Engajamento

| # | Feature | Descrição | Link | Status |
|---|---------|-----------|------|--------|
| **#4662** | 增加界面上每句话的发送时间 | Timestamps por mensagem no chat (HH:mm:ss) | [Link](https://github.com/agentscope-ai/QwenPaw Issue #4662) | **PR #4699 em progresso** |
| **#2216** | Built-in Skill/Tool Execution Tracking | Tracking de sucesso, duração e erros de tools | [Link](https://github.com/agentscope-ai/QwenPaw Issue #2216) | Aberto |
| **#4703** | Native fork/rewind/regen for conversations | Fork, rewind e regenerate de conversas via UI nativa | [Link](https://github.com/agentscope-ai/QwenPaw Issue #4703) | Aberto |
| **#4702** | 考虑 RBAC 管理员 多用户 | Sistema RBAC multi-usuário para enterprise | [Link](https://github.com/agentscope-ai/QwenPaw Issue #4702) | Aberto |
| **#4676** | Add Conversation-Level Artifacts/Generated Files View | Visualizar arquivos gerados pelo agent na conversa | [Link](https://github.com/agentscope-ai/QwenPaw Issue #4676) | Aberto |
| **#4688** | Support non-standard provider params via extra_body | Permitir `enable_search` e params não-padrão | [Link](https://github.com/agentscope-ai/QwenPaw Issue #4688) | **PR #4689 em progresso** |
| **#4637** | Add customizable slash command shortcut menu | Menu de comandos customizável além dos 4-5 fixos | [Link](https://github.com/agentscope-ai/QwenPaw PR #4637) | Aberto |
| **#4678** | Full-backup is excessively slow (800+MB) | Otimização com parallelização e incremental backup | [Link](https://github.com/agentscope-ai/QwenPaw Issue #4678) | Aberto |

**Sinais de Roadmap:**
1. ** Enterprise Readiness**: Demanda clara por RBAC (#4702), multi-usuário, e backup otimizado (#4678)
2. **UX Avançada**: Fork/rewind de conversas (#4703), timestamp por mensagem (#4662)
3. **Observability**: Rastreamento de skill execution (#2216) e artfacts de conversation (#4676)
4. **Extensibilidade**: Plugin system aprimorado (#4642, #4693)

---

## 7. 📝 Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Categoria | Descrição | Frequência |
|-----------|-----------|------------|
| **Console UI Instável** | Tool calls não aparecem, reasoning chain some, congela | Alta — múltiplos bugs relacionados (#4644, #4650, #3849) |
| **Gestão de Configuração** | Skills perdem após rename (#4680), models somem após nova sessão (#4666), config global não adapta ao modelo (#4687) | Alta — experiência básica prejudicada |
| **Stabilidade Desktop** | Crash no macOS Tahoe 26.5 (#4704), WeChat não recupera após reload (#4698/4697) | Crítica — affecting production uso |
| **Descoberta de Funcionalidades** | 20+ comandos built-in ocultos sem documentação (#4637) | Média — onboarding deficiente |
| **Performance** | Backup lento em dados grandes (#4678) | Média — cases em produção |

### Cenários de Uso Observados
- **DesenvolvimentoLocal**: Coding Mode, Git integration, TabbedEditor
- **CanaisDiversificados**: Telegram (áudio), WeChat, Console, Desktop, Feishu
- **Multi-Model**: OpenAI-compatible APIs (Ollama, GLM, MiniMax, OpenCode, DashScope)
- **Enterprise**: Multi-usuário, RBAC, backup, deployment

### Satisfação/Insatisfação
- **Positivo**: Correção rápida de bugs críticos (áudio Telegram, context compaction) demonstra equipe responsiva
- **Negativo**: Bugs de UI recorrentes no console, problemas de estabilidade desktop/Mac affectam reputação

---

## 8. 📋 Backlog que Merece Atenção

### Issues Sem Resposta/Progresso há >3 dias

| # | Issue | Idade | Status | Link |
|---|-------|-------|--------|------|
| **#4680** | 技能名修改导致智能体丢失 | 1 dia | ⏳ Sem solução | [Link](https://github.com/agentscope-ai/QwenPaw Issue #4680) |
| **#4678** | Full-backup excessivamente lento | 1 dia | ⏳ Sem resposta | [Link](https://github.com/agentscope-ai/QwenPaw Issue #4678) |
| **#4006** | Reasoning Content Not Filtered em MiniMax | 25 dias | ⚠️ Estagnado | [Link](https://github.com/agentscope-ai/QwenPaw Issue #4006) |
| **#4642** | Plugin extension & UX optimization | 4 dias | ⏳ Sem resposta | [Link](https://github.com/agentscope-ai/QwenPaw Issue #4642) |

### PRs sob Review há >3 dias

| # | PR | Status | Link |
|---|-----|--------|------|
| **#4464** | feat(e2e): migrate python_e2e into CoPaw | Under Review (10 dias) | [Link](https://github.com/agentscope-ai/QwenPaw PR #4464) |
| **#4467** | Test security+agents Phase 1+2 | Under Review (10 dias) | [Link](https://github.com/agentscope-ai/QwenPaw PR #4467) |
| **#4615** | fix acp orphan process (first-time-contributor) | Under Review | [Link](https://github.com/agentscope-ai/QwenPaw PR #4615) |

---

## 🔑 Indicadores-Chave de Saúde

| Indicador | Valor | Avaliação |
|-----------|-------|-----------|
| Issues fechadas (24h) | 9/27 | ✅ Boa taxa de

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>


# Relatório de Projeto — ZeroClaw
**Data de referência:** 2026-05-27
**Fonte:** github.com/zeroclaw-labs/zeroclaw

---

## 1. Panorama do Dia

ZeroClaw registrou alta atividade de desenvolvimento nas últimas 24 horas, com **41 PRs atualizados** (32 abertos, 9 mergeados/fechados) e **7 issues ativas** sem novos fechamentos. A atividade concentra-se em três eixos principais: (1) consolidação do ecossistema de canais, com PRs de email e provedores sendo finalizados; (2) trabalho significativo em acessibilidade do TUI para teclados compactos; e (3) avanço em funcionalidades de segurança e tooling para agentes. A ausência de releases novas indica que a equipe mantém o foco em estabilizar a base de código antes de uma próxima versão. O volume de PRs de tamanho XL em aberto sugere que ciclos de merge mais longos estão em curso.

---

## 2. Lançamentos

**Nenhum release publicado nas últimas 24h.**

O projeto não emitiu novas versões no período. Isso é consistente com o padrão de consolidação observado — PRs críticos como `#6512` (email channel) e `#6772` (Windows transcoding) foram fechadosrecentemente, indicando que a equipe pode estar preparando um release de correção de bugs em breve.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados nas Últimas 24h

| # | Título | Impacto |
|---|--------|---------|
| [#6512](https://github.com/zeroclaw-labs/zeroclaw/pull/6512) | `fix(channels/email): html body rendering, subject threading, attachment path resolution` | Corrige 3 problemas crônicos no canal de email: subject hardcoded, markdown como plain text e falha em anexos zero-byte. Fecha múltiplos issues relacionados. |
| [#6901](https://github.com/zeroclaw-labs/zeroclaw/pull/6901) | `fix(providers): preserve full reqwest error chains in transport/log diagnostics` | Melhora diagnóstica de transporte em provedores — erros de timeout, DNS, TLS e conexão recusada agora têm mensagens claras. |
| [#6772](https://github.com/zeroclaw-labs/zeroclaw/pull/6772) | `fix(runtime): transcode Windows shell output from system code page to UTF-8` | Corrige output corrupto em shells Windows ao detectar `GetConsoleOutputCP()` e transcodificar adequadamente. |
| [#6948](https://github.com/zeroclaw-labs/zeroclaw/pull/6948) | `feat(composio): add per-action scoping via action_scopes config` | Adiciona controle granular de permissões no Composio, respondendo a incidente de segurança de maio/2026. |

### Destaque de Progresso

O PR [#6512](https://github.com/zeroclaw-labs/zeroclaw/pull/6512) é particularmente relevante — seu escopo multicanal (mais de 20 tags `channel:*`) demonstra integração profunda de correções que antes eram fragmentadas. Isso reduz a superfície de bugs no ecossistema de canais.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| # | Título | Comentários | Reactions | Tema Central |
|---|--------|-------------|-----------|--------------|
| [#6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059) | `[Bug]: Incompatible with DeepSeek-V4 API format` | 13 | 👍 4 | Incompatibilidade de API com thinking mode |
| [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) | `computer-use support (screen interaction)` | 3 | — | Capacidade de controle de desktop via agentes |
| [#6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) | `RFC: Route scheduled tasks through orchestrator` | 0 | — | Arquitetura de scheduler |

### Análise de Demandas

**DeepSeek-V4 API (#6059):** Com 13 comentários e status `in-progress`, esta é a issue de maior atenção comunitária. O problema envolve o "thinking mode" do DeepSeek-V4 que quebra o formato de API esperado. Afeta diretamente usuários do provedor DeepSeek com impacto S2 (degraded behavior). A label `priority:p1` e `risk:high` confirmam urgência.

**Computer-use (#6909):** Proposta para adicionar interação com desktop (screenshots, mouse/keyboard) similar ao OpenAI Codex. Marca `risk:high` e status `accepted` — indica que a direção é desejável, mas requer design cuidadoso por implicações de segurança.

**RFC de Scheduler (#6954):** Este RFC identifica uma causa raiz comum para 5 issues abertas (#6037, #6105, #6648, #6632, #6686) — o scheduler atual ignora o pipeline do orquestrador. A análise é técnica e estruturada.

---

## 5. Bugs e Estabilidade

### Bugs Reportados (por Severidade)

| Severidade | # | Título | Status |
|------------|---|--------|--------|
| **S2** | [#6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059) | DeepSeek-V4 API incompatibility (thinking mode) | `in-progress` |
| **S2** | [#6944](https://github.com/zeroclaw-labs/zeroclaw/issues/6944) | Interactive mode — system log lines printed inline | `open` |
| **Não classificada** | [#6950](https://github.com/zeroclaw-labs/zeroclaw/issues/6950) | TUI sem suporte a Alt+1-5 para teclados compactos | `open` |

### Regressões e Riscos

- **Canal email (#6512 fechado):** A correção recente resolve uma série de problemas de rendering — a equipe deve monitorar se não houve regressão em outros canais afetados pelo mesmo PR (20+ tags de canal).
- **Windows shell (#6772 fechado):** Correcção de transcoding pode ter impacto em outros contextos Windows que não o shell — monitorar.

### Observação

O bug [#6944](https://github.com/zeroclaw-labs/zeroclaw/issues/6944) sobre logs do sistema interferindo na saída conversacional em modo TTY representa regressão de usabilidade significativa para uso interativo — merece atenção para priorização.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Aceitas/Propostas

| # | Título | Tipo | Relevância Estratégica |
|---|--------|------|------------------------|
| [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) | computer-use support (Codex/Peekaboo-like) | `feature` | Alta — diferenciação de mercado |
| [#6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) | RFC: Scheduler via orchestrator pipeline | `rfc` | Alta — arquitetura, corrige 5 bugs |
| [#6943](https://github.com/zeroclaw-labs/zeroclaw/issues/6943) | RFC: Replace Extism with wasmtime component model | `rfc` | Média — simplificação de stack |
| [#6937](https://github.com/zeroclaw-labs/zeroclaw/issues/6937) | Document email attachment path validation | `docs` | Baixa — documentação |
| [#6951](https://github.com/zeroclaw-labs/zeroclaw/pull/6951) | Add `ChannelMessage::new` and `SendMessage::reply_to` constructors | `feature` | Média — ergonomia de API |

### Sinais de Roadmap

1. **Computer-use (#6909):** Aceito com `priority:p2` — indica planos de longo prazo para capacidade de desktop interaction.
2. **Plugin System (#6943):** RFC para substituir Extism por wasmtime diretamente — sinal de desejo de reduzir dependências externas.
3. **Security tooling (#6920):** PR em aberto para `allowed_tools`/`denied_tools` em execution time — defesa em profundidade para MCP.

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Dor | Issue de Origem | Impacto |
|-----|-----------------|---------|
| Incompatibilidade com DeepSeek-V4 | [#6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059) | Usuários com DeepSeek Pro/Flash não conseguem usar o provedor |
| Logs do sistema poluem output interativo | [#6944](https://github.com/zeroclaw-labs/zeroclaw/issues/6944) | Experiência degradada em `zeroclaw agent -a default` |
| TUI inacessível em teclados sem F-keys | [#6950](https://github.com/zeroclaw-labs/zeroclaw/issues/6950) | Usuários com Keychron/Logitech MX Mini não conseguem operar |
| Endpoints errados em SiliconFlow | [#6953](https://github.com/zeroclaw-labs/zeroclaw/pull/6953) | Usuários internacionais com API key rejeitada |
| Codex auth quebrado no onboarding | [#6908](https://github.com/zeroclaw-labs/zeroclaw/pull/6908) | Usuários Plus/Pro não conseguem autenticar via OAuth |

### Cenários de Uso Emergentes

- **Agentes de desktop (#6909):** Usuários solicitam capacidade similar ao Codex para automação de UI local — indica demanda por agentes mais autônomos.
- **Scheduler via orquestrador (#6954):** 5 bugs abertos compartilham causa raiz — comunidade identifica problema arquitetural recorrente.

### Satisfação

O merge do PR [#6512](https://github.com/zeroclaw-labs/zeroclaw/pull/6512) resolve dores antigas do canal email (assunto, markdown, anexos). O PR [#6948](https://github.com/zeroclaw-labs/zeroclaw/pull/6948) de segurança do Composio responde proativamente a incidente externo.

---

## 8. Backlog que Merece Atenção

### Issues sem Resposta há >7 dias

| # | Título | Criado | Status | Prioridade |
|---|--------|--------|--------|------------|
| [#6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059) | DeepSeek-V4 API incompatibility | 2026-04-24 | `in-progress` | P1 |
| [#6775](https://github.com/zeroclaw-labs/zeroclaw/pull/6775) | `file_upload_bundle` tool (L, high risk) | 2026-05-19 | `open` | — |
| [#6190](https://github.com/zeroclaw-labs/zeroclaw/pull/6190) | OTel GenAI spans instrumentation (L, medium) | 2026-04-28 | `open` | — |
| [#5450](https://github.com/zeroclaw-labs/zeroclaw/pull/5450) | IPv6 support in browser/web tools (S, medium) | 2026-04-07 | `open` | — |

### Issues Antigas com Labels `needs-author-action`

| # | Título | Criado | Notas |
|---|--------|--------|-------|
| [#5450](https://github.com/zeroclaw-labs/zeroclaw/pull/5450) | IPv6 support | 2026-04-07 | Aguarda ação do autor |
| [#6911](https://github.com/zeroclaw-labs/zeroclaw/pull/6911) | Runtime profile budgets fix | 2026-05-25 | Aguarda ação do autor |

### Recomendações

1. **#6059 (DeepSeek):** 33 dias em aberto com 13 comentários — manter ritmo de progresso, verificar se há trabalho bloqueante.
2. **#6775/#6190:** Ambos size:L com PRs aberto há 8-29 dias — revisar e priorizar review para evitar branch drift.
3. **#5450:** +50 dias em aberto com `needs-author-action` — considerar closing por inatividade se não houver resposta.

---

## Indicadores de Saúde do Projeto

| Indicador | Valor | Avaliação |
|-----------|-------|-----------|
| Atividade de PRs (24h) | 41 | 🟢 Alta |
| PRs fechados (24h) | 9 | 🟢 Bom ciclo de entrega |
| Releases (7d) | 0 | 🟡 Sem release recente |
| Bugs S2 em aberto | 2 | 🟡 Requer atenção |
| Issues aceitas para roadmap | 3 | 🟢 Direccionamento claro |
| PRs size:XL em aberto | 1 | 🟡 Pode indicar ciclo longo |

**Veredicto geral:** Projeto em atividade saudável com foco em estabilização. Bugs críticos estão sendo endereçados. A atenção deve virar para os PRs size:L pendentes de review e o bug S2 [#6944](https://github.com/zeroclaw-labs/zeroclaw/issues/6944) que afeta usabilidade interativa.

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*