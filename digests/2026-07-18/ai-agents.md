# Resumo diário do ecossistema de agentes de IA 2026-07-18

> Issues: 1 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-07-17 20:48 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório do Projeto NullClaw — 2026-07-18

---

## 1. Panorama do Dia

O projeto NullClaw apresenta **atividade extremamente baixa** em 18 de julho de 2026. Foi registrada apenas **1 issue atualizada** nas últimas 24 horas — e trata-se de um problema crítico não resolvido. Nenhum pull request foi modificado e nenhuma release foi publicada. O cenário atual é de **estagnação operacional**, com a equipe possivelmente focada na resolução de bugs em vez de desenvolvimento ativo de features.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24 horas.**

O projeto está sem atualizações de versão desde pelo menos o ciclo analisado. Recomenda-se monitorar a aba de releases do repositório para eventuais publicações emergenciais (hotfixes) relacionadas ao bug reportado.

---

## 3. Progresso do Projeto

**Nenhum PR merged ou fechado nas últimas 24 horas.**

A ausência de atividade em PRs indica que o ciclo de desenvolvimento está pausado ou concentrado em triagem de issues. Issues em aberto, como a #976 (crash em Telegram), podem estar sendo abordadas internamente antes de abertura de PRs públicos.

---

## 4. Temas Quentes da Comunidade

### Issue #976 — Crash crítico em mensagens Telegram (Inbound)

| Campo | Detalhe |
|-------|---------|
| **Título** | SIGSEGV on every inbound Telegram message — inbound worker thread spawned with a ~512 KB stack overflows |
| **Status** | 🟠 ABERTA |
| **Autor** | wonhotoss |
| **Criação** | 2026-07-16 |
| **Última atualização** | 2026-07-17 |
| **Comentários** | 2 |
| **Reações** | 👍 0 |
| **Severidade** | 🔴 Crítica |

**Análise:** Esta é a **única issue com atividade comunitária** no período. O bug afeta especificamente **plataformas aarch64 Linux** e causa crash (SIGSEGV) em **toda mensagem Telegram recebida**. O service em systemd (`Restart=always`) entra em **crash-loop**, dropando todas as mensagens — usuários não recebem resposta.

**Impacto:** Afeta diretamente a funcionalidade core de gateway Telegram do NullClaw. Usuários em arquiteturas ARM64 (Raspberry Pi, servidores ARM) estão completamente impossibilitados de receber mensagens.

🔗 [Ver Issue #976](https://github.com/nullclaw/nullclaw/issues/976)

---

## 5. Bugs e Estabilidade

### Bug Crítico em Andamento

| Severidade | Quantidade | Descrição |
|------------|------------|-----------|
| 🔴 **Crítica** | 1 | SIGSEGV em mensagens Telegram (aarch64) |
| 🟠 Alta | 0 | — |
| 🟡 Média | 0 | — |
| 🟢 Baixa | 0 | — |

**Bug #976 — Detalhamento:**
- **Plataforma:** Linux aarch64 (ARM64)
- **Versão afetada:** v2026.5.29
- **Sintoma:** Stack overflow (~512 KB) no worker thread de inbound Telegram
- **Comportamento:** Crash imediato → restart via systemd → nova mensagem → novo crash
- **Urgência:** ⬆️ **Alta** — Usuários em produção estão sendo impactados continuamente

---

## 6. Pedidos de Features e Sinais de Roadmap

**Nenhuma nova feature request registrada nas últimas 24 horas.**

O único item de destaque permanece a correção do bug de stack overflow. A comunidade não enviou novas demandas de funcionalidades, sugerindo que o foco atual é **estabilidade operacional** — não expansão de features.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Categoria | Descrição | Volume |
|-----------|-----------|--------|
| 🚨 **Estabilidade** | Crash em mensagens Telegram (aarch64) — completamente quebrado | 1 relato |
| 🔧 **Reprodução** | Bug 100% reprodutível em ambiente ARM64 Linux com `nullclaw gateway` | Confirmado |

**Cenário de uso afetado:** Usuários rodando NullClaw como **gateway Telegram em servidores ARM64** (possivelmente VPS ARM, SBCs como Raspberry Pi, ou instâncias AWS Graviton) estão com o **serviço completamente não-funcional**. O systemd tenta restartar infinitamente, mas cada mensagem inbound mata o processo.

**Satisfação geral:** ⬇️ **Em deterioração** — o bug impacta a usabilidade core do produto para um segmento de usuários (ARM64).

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta / Aguardando Triagem

| Issue | Título | Idade | Status | Comentários | Prioridade |
|-------|--------|-------|--------|-------------|------------|
| **#976** | SIGSEGV on every inbound Telegram message | ~2 dias | 🟠 ABERTA | 2 | 🔴 **Alta** |

**Análise:** A issue #976, embora com 2 comentários, **ainda está aberta e não atribuída a milestone**. Given that it's a crash-loop affecting production deployments, **precisa de triagem urgente** e atribuição a um milestone de hotfix.

⚠️ **Recomendações:**
1. Atribuir a issue #976 a um milestone de emergência (e.g., `v2026.7.x`)
2. Investigar alocação de stack para worker threads de Telegram
3. Considerar workaround documentado para usuários aarch64 (e.g., увеличение stack size via `systemd` override)

---

## Métricas Consolidada do Dia (2026-07-18)

```
┌─────────────────────────────────────┐
│         ATIVIDADE DO DIA            │
├─────────────────────────────────────┤
│  Issues abertas/ativas:    1        │
│  Issues fechadas:          0        │
│  PRs abertos:              0        │
│  PRs merged/fechados:       0        │
│  Releases:                 0        │
│  Comentários totais:       2        │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│       SAÚDE DO PROJETO              │
├─────────────────────────────────────┤
│  Atividade:         🟡 Baixa         │
│  Estabilidade:      🔴 Comprometida  │
│  Engagement:        🟢 Mínimo       │
│  Prioridade:        Bug #976        │
└─────────────────────────────────────┘
```

---

*Relatório gerado automaticamente com base nos dados do GitHub do NullClaw para 2026-07-18.*

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo do Ecossistema de Agentes de IA Open Source

**Data de Referência:** 2026-07-18  
**Projetos Analisados:** NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw, ZeroClaw

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **duas velocidades distintas** em 2026-07-18. Projetos como **ZeroClaw, Hermes Agent e IronClaw** mantêm ciclos de desenvolvimento intensos com 50+ atualizações diárias, indicando investimento substancial em engenharia e bases de contribuidores maduras. Em contraste, **NullClaw** demonstra estagnação operacional com atividade mínima e um bug crítico não resolvido há dias. A tendência dominante é a **maturação de funcionalidades core** (motores de reasoning, channels multi-plataforma) enquanto simultaneamente se endereçam problemas de **segurança de supply chain, OAuth e TLS** em múltiplos projetos — um tema transversal que reflete a profissionalização do ecossistema. A expansão de providers (Moonshot/Kimi, ModelScope, Vertex/Claude) e a demanda por controles granulares por conversa evidenciam um mercado em maturação acelerada.

---

## 2. Comparação de Atividade

| Projeto | Issues Ativas | PRs Atualizados | PRs Merged/24h | Releases | Saúde | Prioridade Técnica |
|---------|:-------------:|:---------------:|:--------------:|:--------:|:-----:|:-------------------|
| **ZeroClaw** | 50 | 50 | ~8 | 0 | 🟢 Alta | P1s bloqueadas (RUSTSEC, macOS) |
| **Hermes Agent** | 50 | 50 | 2 | 0 | 🟢 Alta | Multimodal crashes, Windows/WSL |
| **IronClaw** | 50 | 49 | 23 | 0 | 🟢 Alta (pré-v1) | Refatoração §4.3, legacy cleanup |
| **CoPaw** | 25 | 41 | 25 | **v2.0.0.post3** | 🟢 Alta | Desktop/Windows, MCP performance |
| **PicoClaw** | 4 | 12 | 2 | 0 | 🟡 Média-Alta | MQTT TLS (crítico), OAuth |
| **NanoBot** | ~0 | 11 | 4 | 0 | 🟡 Média | Moonshot/Kimi temperature overrides |
| **NullClaw** | 1 | 0 | 0 | 0 | 🔴 Baixa | SIGSEGV aarch64 (crítico) |

**Observação:** A distribuição revela um ecossistema com **poucos projetos em consolidação ativa** (ZeroClaw, Hermes, IronClaw) e uma **base diversificada de soluções especializadas** (PicoClaw em segurança de canais, CoPaw em Windows/Desktop, NanoBot em providers asiáticos).

---

## 3. Posicionamento do Projeto Principal

### ZeroClaw — Líder em Atividade e Recursos

**Vantagens Competitivas:**
- **Maior volume de issues e PRs** (50/50) indicando base de contribuidores mais ativa
- **RFCs formais** para funcionalidades de segurança (OIDC, supply chain signing, SLSA) — maturidade de processo
- **Suporte nativo a A2A Protocol** (#3566, 8 comentários, 7 👍) demonstrando foco em interoperabilidade
- **Governança clara** com transição documentada de mantenedor (@singlerider → @JordanTheJet)

**Diferenças Técnicas:**
- Arquitetura baseada em **Rust** com foco em segurança de memory (vs. Go/Python dos pares)
- **SLSA provenance** e hermetic builds como objetivos declarados
- **Air-gapped execution mode** planejado para ambientes restricted
- **Multi-agent routing** nativo com workspaces isolados

**Tamanho da Comunidade:**
- 43 issues abertas + 41 PRs em aberto simultaneamente
- 11 PRs merged recentemente com foco em documentação e CI
- Base de contribuidores distribuída com CODEOWNERS atualizado (44 entries reassignadas)

### Hermes Agent — Runner-Up em Volume

**Vantagens:**
- Foco em **Desktop app** e experiência TUI integrada
- Features inovadoras: **"Dreaming" memory consolidation** (#25309, 6 comentários)
- Suporte multi-provedor (OpenAI, Claude, Vertex) com AnthropicVertex SDK (#66522)

**Limitação:**
- 4+ bugs P2 específicos de Windows/WSL sem resolução — dívida técnica móvel

---

## 4. Focos Técnicos Compartilhados

### 4.1 Segurança de Canais e Autenticação (Transversal)

| Projeto | Foco | Severidade |
|---------|------|:----------:|
| **PicoClaw** | MQTT TLS: `InsecureSkipVerify: true` hardcoded (#3246) | 🔴 Crítica |
| **PicoClaw** | OAuth refresh race condition (#3241) | 🔴 Alta |
| **IronClaw** | Shell filesystem access em multi-tenant (#6170) | 🔴 Alta (fechada) |
| **ZeroClaw** | RUSTSEC advisories em rumqttc v0.25.1 (#5869) | 🔴 S1 BLOCKED |
| **CoPaw** | pip install UAC elevation (#6169) | 🔴 Crítica |

**Implicação:** A segurança de canais (MQTT, OAuth, filesystem) é tema **obrigatório** para todos os projetos comambição de produção.

### 4.2 Estabilidade Multi-Plataforma

| Plataforma | Projetos Afetados | Bug Count |
|------------|-------------------|:---------:|
| **Windows Native** | Hermes (5 bugs), CoPaw (3 bugs), ZeroClaw (macOS) | 9+ |
| **WSL2** | Hermes (spawn loops, KDE crashes) | 3+ |
| **ARM64/aarch64** | NullClaw (SIGSEGV stack overflow) | 1 (crítico) |

**Implicação:** Test coverage para Windows e WSL2 é **déficit estrutural** no ecossistema.

### 4.3 Provider Diversity e Configuração

| Provider | Projetos com Issues | Tipo de Problema |
|----------|--------------------|-------------------|
| **Moonshot/Kimi** | NanoBot (3 PRs de temperature fix) | API breaking changes |
| **ModelScope** | NanoBot (PR #4965 aberto) | Feature request |
| **Claude/Vertex** | Hermes (#66522), CoPaw (#6230) | Expansão de suporte |
| **Hermes-3** | CoPaw (#6230) | Reasoning engine |

**Implicação:** Mercados asiáticos (Kimi, ModelScope) e interoperabilidade com Claude são **vetores de diferenciação** em alta demanda.

### 4.4 Performance de Inicialização

| Projeto | Gargalo | Oportunidade |
|---------|---------|--------------|
| **CoPaw** | MCP drivers sequenciais: 40s → 5s | Paralelização |
| **CoPaw** | Burst de memória: 36 agents | Memory profiling |
| **NanoBot** | 7 PRs abertos, 4 merged | Throughput de review |

**Implicação:** **Startup time** é próximo vetor de otimização para multi-agent setups.

---

## 5. Análise de Diferenciação

### 5.1 Por Público-Alvo

| Projeto | Público Primário | Diferenciador |
|---------|------------------|---------------|
| **NullClaw** | Usuários ARM64/embedded | Foco em SBCs (Raspberry Pi) |
| **NanoBot** | Usuários asiáticos (Kimi, Qwen) | Localização zh-TW, ModelScope |
| **Hermes Agent** | Desenvolvedores e power users | Desktop app Electron, Codex ecosystem |
| **PicoClaw** | Operadores multi-canal | WhatsApp nativo, QQ, streaming parity |
| **IronClaw** | Desenvolvedores enterprise | Reborn architecture, WASM tools |
| **CoPaw** | Usuários Windows self-hosted | Docker/Desktop, computer-use Windows |
| **ZeroClaw** | Organizações security-conscious | OIDC, RBAC, air-gapped, A2A |

### 5.2 Por Arquitetura

| Arquitetura | Projetos | Trade-offs |
|-------------|----------|------------|
| **Rust-native** | ZeroClaw, IronClaw | Performance + memory safety, curva de contribuição |
| **Go** | NullClaw, PicoClaw | Simplicidade, binaries estáticos |
| **Python + Electron** | Hermes, CoPaw | DX para Python devs, cross-platform desktop |
| **TypeScript/JS** | NanoBot (webui) | Ecossistema web, localização |

### 5.3 Por Estágio de Maturidade

| Estágio | Projetos | Características |
|---------|---------|-----------------|
| **Pré-v1** | IronClaw (Reborn), CoPaw (v2.0) | Breaking changes, migration guides necessárias |
| **Estável** | PicoClaw (v0.2.9), NanoBot | Features congeladas, foco em bugs |
| **Consolidação** | Hermes Agent, ZeroClaw | Feature parity, security hardening |
| **Estagnado** | NullClaw | 1 issue ativa, zero PRs, bug crítico aberto |

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração

| Métrica | Líder | Seguidor | Laggard |
|---------|-------|----------|---------|
| **PRs merged/24h** | IronClaw (23) | CoPaw (25) | NullClaw (0) |
| **Issues fechadas/24h** | IronClaw (23) | CoPaw (10) | NullClaw (0) |
| **Release frequency** | CoPaw (v2.0.0.post3) | — | NullClaw, NanoBot (0) |

**Análise:** IronClaw e CoPaw estão em **ciclos de release curtos** com atividade semanal. ZeroClaw mantém volume alto mas sem releases formais recentes. NullClaw está em **risco de abandonware**.

### 6.2 Taxa de Resolução de Bugs

| Projeto | Bugs P1/P2 Abertos | Tempo Médio Estimado | Status |
|---------|:------------------:|:--------------------:|:------:|
| **ZeroClaw** | 4 P1 bloqueadas | Indefinido (upstream dependency) | 🔴 |
| **Hermes Agent** | 2 P1 + 15 P2 | 1-2 semanas | 🟡 |
| **CoPaw** | 4 P1 + 3 P2 | 3-5 dias | 🟢 |
| **IronClaw** | 0 P1 abertas | — | 🟢 |
| **PicoClaw** | 1 P1 + 1 P2 | 1 semana | 🟡 |
| **NanoBot** | ~1 P1 | 2-3 dias | 🟢 |
| **NullClaw** | 1 P1 (crítica) | >5 dias (sem activity) | 🔴 |

### 6.3 Maturidade de Processos

| Indicador | ZeroClaw | Hermes | IronClaw | CoPaw | NanoBot | PicoClaw | NullClaw |
|-----------|:--------:|:------:|:--------:|:-----:|:-------:|:--------:|:--------:|
| RFC process | ✅ Formal | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Milestone tracking | ✅ | ✅ | ✅ Epic | ✅ | ❌ | ❌ | ❌ |
| CODEOWNERS atualizado | ✅ 2026-07 | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| Security advisories | ✅ RUSTSEC | ❌ | ✅ | ❌ | ❌ | ✅ | ❌ |
| Breaking changes docs | ⚠️ PR pending | ✅ | ⚠️ PR pending | ✅ | ❌ | ⚠️ | ❌ |

**Conclusão:** ZeroClaw demonstra **maturidade organizacional superior** com RFCs formais, governança documentada e processo de security disclosure. IronClaw e CoPaw estão em trajetória de maturidade acelerada pré-v1.

---

## 7. Sinais de Tendência

### 7.1 Tendências de Mercado

| Tendência | Evidência | Implicação |
|-----------|----------|------------|
| **Memory persistence cross-session** | ZeroClaw (#8891 in progress), Hermes "Dreaming" (#25309), CoPaw ReMe Light (#6235) | Agentes "persistentes" são direção estratégica unânime |
| **Multi-provider flexibility** | NanoBot (ModelScope, Kimi K3), Hermes (Vertex/Claude), CoPaw (Hermes-3) | Lock-in em provider único é anti-pattern |
| **Controls per-conversation** | CoPaw (3+ feature requests), PicoClaw (per-channel settings) | Granularidade de configuração como diferencial UX |
| **Desktop as citizen de primeira classe** | Hermes (Playwright E2E), CoPaw (Tauri/Electron), ZeroClaw (macOS app) | "AI agent no desktop" supera "AI agent no terminal" |
| **Interoperability (A2A protocol)** | ZeroClaw (#3566, 7 👍), IronClaw (#6185 renames) | Ecossistema multi-agente é inevitável |
| **Security hardening mandatory** | Todos os projetos (TLS, OAuth, supply chain) | Ambientes enterprise exigem SOC2/ISO27001 readiness |

### 7.2 Tendências Técnicas

| Tendência | Projetos Pioneiros | Status |
|-----------|-------------------|:------:|
| **WASM-first plugins** | ZeroClaw (#8135 RFC) | Early stage |
| **Lazy MCP connections** | Hermes (#66473), CoPaw (#6193) | Performance optimization |
| **Streaming parity across channels** | PicoClaw (QQ streaming request), Telegram (NullClaw) | Feature parity em progresso |
| **Refactored channel architecture** | NanoBot (#4908), CoPaw (#6159) | Self-contained modules |
| **RootFilesystem abstraction** | IronClaw (§4.3) | Simplified storage layer |

### 7.3 Tendências de UX

| Tendência | Evidência | Prioridade |
|-----------|----------|:----------:|
| **Typing indicators** | PicoClaw WhatsApp (#3242) | Média-alta |
| **Real-time tool cards** | Hermes TUI (#66514) | Alta |
| **Graceful degradation** | Todos com "silently drops" bugs | Crítica |
| **Onboarding journeys** | IronClaw (#6174), CoPaw (#5919) | Média |
| **Deploy simplification** | NanoBot Render one-click (#4937) | Média |

---

## Recomendações para Decisores

1. **Para evaluaçào de plataforma:** Priorizar **IronClaw** (pre-v1, alto investment), **CoPaw** (release ativo, Windows focus) ou **ZeroClaw** (maturidade processual, security) conforme perfil de risco
2. **Para integraçào com ecossistema asiático:** **NanoBot** com suporte ModelScope/Kimi
3. **Para segurança enterprise:** **ZeroClaw** com RFCs de OIDC, RBAC e SLSA
4. **Evitar:** **NullClaw** sem resolução de bug crítico e atividade mínima — risco de abandonware

---

*Relatório gerado em 2026-07-18. Dados subjectivos a atrasos de indexação do GitHub.*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-07-18

## 1. Panorama do Dia

O projeto NanoBot apresenta **alta atividade de desenvolvimento** nas últimas 24h, com 11 PRs atualizados e 4 merges concluídos. O foco principal foi a **correção de bugs críticos relacionados ao provider Moonshot/Kimi** — três PRs independentes abordaram problemas de configuração de temperatura para os modelos kimi-k2.5 e kimi-k2.6, indicando uma necessidade de refatoração no gerenciamento de overrides de providers. A comunidade também demonstra interesse em expansão de funcionalidades, com PRs abertos para novo provider (ModelScope), novo modelo (Kimi K3) e melhorias na WebUI. Não houve lançamento de novas versões hoje.

---

## 2. Lançamentos

**Nenhum release publicado nas últimas 24h.**

O projeto está em período ativo de desenvolvimento com múltiplas mudanças aguardando merge antes do próximo tag.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados (4)

| # | Título | Autor | Impacto |
|---|--------|-------|---------|
| [#4962](https://github.com/HKUDS/nanobot/pull/4962) | `fix(providers): correct Moonshot kimi-k2.6 temperature override to 0.6` | QQQ300kuai | **Crítico** — Corrige override hardcoded que forçava temperature=1.0 em modelo que agora exige 0.6 |
| [#4967](https://github.com/HKUDS/nanobot/pull/4967) | `fix(providers): omit temperature for Moonshot Kimi K2.5/K2.6` | bingqilinweimaotai | **Crítico** — Remove envio de temperature para K2.5/K2.6, delegando seleção ao provider conforme modo de raciocínio |
| [#4958](https://github.com/HKUDS/nanobot/pull/4958) | `feat(webui): Improve zh-TW Traditional Chinese locale` | PeterDaveHello | Localização — Melhora qualidade da tradução para Traditional Chinese |
| [#4953](https://github.com/HKUDS/nanobot/pull/4953) | `feat(webui): support native folder picker bridges` | Re-bin | WebUI — Adiciona bridge para seletor de pastas nativo com autenticação por token |

**Avanços destacados:**
- **Stabilidade do provider Moonshot**: Os PRs #4962 e #4967 demonstram trabalho coordenado para resolver regressões nos modelos Kimi. A abordagem divergente (um fixa 0.6, outro omite temperature) pode indicar necessidade de unificação futura.
- **WebUI maturity**: Melhorias de localização e novos componentes de UI indicam maturização da interface.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento

**[#4968](https://github.com/HKUDS/nanobot/issues/4968)** — `[enhancement] Unbound cron jobs`
- **Autor:** wzrayyy | 4 comentários | 👍 0
- **Resumo:** Questiona a razão para impedir criação de cron jobs não-bound (unbound). A issue foi fechada, sugerindo que a funcionalidade foi tratada ou rejeitada.
- **Análise:** Indica demanda por maior flexibilidade em automação de tarefas agendadas.

**[#4961](https://github.com/HKUDS/nanobot/issues/4961)** — `[bug] Moonshot kimi-k2.6 requires temperature=0.6`
- **Autor:** SkyLeo-ozim | 0 comentários | 👍 0
- **Resumo:** Reportou que o registry hardcodava temperature=1.0 para kimi-k2.6, mas a API agora exige exatamente 0.6.
- **Status:** Fechada após fix em #4962.

### PRs em destaque com debates potenciais

| # | Título | Status | Notas |
|---|--------|--------|-------|
| [#4908](https://github.com/HKUDS/nanobot/pull/4908) | `refactor(channels): make built-in channels self-contained` | **OPEN (conflict)** | Refatoração significativa de arquitetura de channels — pode ter conflitos com outros PRs |
| [#4965](https://github.com/HKUDS/nanobot/pull/4965) | `feat(modelscope): add ModelScope provider support` | **OPEN** | Adicionaria provider para API OpenAI-compatible da ModelScope |
| [#4966](https://github.com/HKUDS/nanobot/pull/4966) | `feat: add Kimi K3 support` | **OPEN (p1)** | Suporte ao novo modelo com `reasoning_effort="max"` |

---

## 5. Bugs e Estabilidade

### Bugs Reportados/Corrigidos

| Severidade | # | Descrição | Status |
|------------|---|-----------|--------|
| **P1** | [#4961](https://github.com/HKUDS/nanobot/issues/4961) | Moonshot kimi-k2.6 rejeita temperature≠0.6 | ✅ Corrigido em #4962 |
| **P1** | [#4967](https://github.com/HKUDS/nanobot/pull/4967) | Temperatura incorreta para Kimi K2.5/K2.6 | ✅ Corrigido |
| **P1** | [#4925](https://github.com/HKUDS/nanobot/pull/4925) | `fix(agent): report hard context overflow clearly` | 🔄 Aberto |

### Análise de Regressões

O **provider Moonshot** apresenta **padrão de regressões recorrentes** relacionadas a mudanças de API — a comunidade precisou adaptar overrides de temperatura múltiplas vezes (de >=1.0 para ==0.6). Isso sugere:
1. Necessidade de mecanismo mais flexível para configuration de providers
2. Valor em testes de integração com APIs reais de providers

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Propostas

| # | Feature | Prioridade | Sinais de Roadmap |
|---|---------|------------|-------------------|
| [#4966](https://github.com/HKUDS/nanobot/pull/4966) | **Kimi K3 support** com `reasoning_effort="max"` | P1 | Próxima geração de modelos Kimi em desenvolvimento |
| [#4965](https://github.com/HKUDS/nanobot/pull/4965) | **ModelScope provider** (Qwen, DeepSeek, GLM, MiniMax) | P1 | Expansão de providers OpenAI-compatible |
| [#4937](https://github.com/HKUDS/nanobot/pull/4937) | **One-click deploy to Render** | P2 | Simplificação de deployment para usuários não-técnicos |
| [#4963](https://github.com/HKUDS/nanobot/pull/4963) | **Polish agent output e app discovery** | — | Melhoria de UX na WebUI |
| [#4964](https://github.com/HKUDS/nanobot/pull/4964) | **Apply image generation settings live** | — | Configuração dinâmica de image providers |

### Tendências Identificadas

1. **Expansão de providers**: ModelScope e Kimi K3 indicam foco em cobertura de modelos asiáticos
2. **DX (Developer Experience)**: Deploy simplificado (Render) e refatoração de channels (#4908)
3. **WebUI maturation**: Múltiplos PRs de UI simultâneos sugerem investimento em interface

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Dor | Issue/PR | Frequência |
|-----|----------|------------|
| Falhas silenciosas em requests Moonshot por config de temperature | #4961, #4967 | 🔴 Múltiplos usuários afetados |
| Contexto overflow sem feedback claro ao usuário | #4925 | 🟡 Workflow interrompido |
| Impossibilidade de criar cron jobs unbound | #4968 | 🟢 Investigação |

### Cenários de Uso Emergentes

- **Agents modulares**: Refatoração de channels (#4908) sugere demanda por arquiteturas de plugins
- **Deployment simplificado**: Render one-click (#4937) atende usuários querendo infra-as-code mínima
- **Localization**: Melhoria de zh-TW (#4958) indica base de usuários Sinophone ativa

---

## 8. Backlog que Merece Atenção

### Issues/PRs Importantes Sem Atividade Recente

| # | Tipo | Título | Última Atualização | Prioridade | Ação Recomendada |
|---|------|--------|---------------------|------------|------------------|
| [#4908](https://github.com/HKUDS/nanobot/pull/4908) | PR | `refactor(channels): make built-in channels self-contained` | 2026-07-17 | P1 | **Resolução de conflitos pendente** |
| [#4925](https://github.com/HKUDS/nanobot/pull/4925) | PR | `fix(agent): report hard context overflow clearly` | 2026-07-17 | P1 | Review aguardando |

### Observações

1. **#4908 (Channels refactor)** está marcado com `conflict` — resolução necessária antes de merge
2. **#4925** aborda UX de erros de contexto — merge beneficiaria experiência do usuário final
3. **#4968 (Unbound cron jobs)** foi fechada sem clear resolution — verificar se feature foi implementada em PR separado

---

## Métricas de Saúde do Projeto

| Indicador | Valor | Status |
|-----------|-------|--------|
| PRs abertos | 7 | 🟢 Normal |
| PRs fechados (24h) | 4 | 🟢 Ativo |
| Issues ativas | 0 | 🟢 sem acúmulo |
| Bugs P1 em aberto | ~1-2 | 🟡 context overflow |
| Conflitos em PRs | 2 | 🟡 Requer atenção |

---

*Relatório gerado em 2026-07-18 com base em dados do GitHub do repositório [HKUDS/nanobot](https://github.com/HKUDS/nanobot).*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>


# Relatório do Projeto Hermes Agent
## NousResearch/hermes-agent — 2026-07-18

---

## 1. Panorama do dia

O projeto apresenta **atividade intensa e sustentada** com 50 issues e 50 PRs atualizados nas últimas 24h, indicando uma base de contribuidores ativa. Não houve lançamentos de novas versões no período. O estado geral aponta para uma **fase de estabilização e refinamento**, com múltiplos bugs P1/P2 sendo investigados — particularmente relacionados a crashes em multimodalidade, Telegram polling e problemas de desktop em Windows — enquanto features inovadoras como "Dreaming" (consolidação automática de memória) e "MCP Smart Loading" sinalizam direções estratégicas de longo prazo. A taxa de issues fechadas (8/50) vs. abertas (42/50) sugere que a equipe está processando volume significativo de feedback, mas backlog de items pendentes permanece substancial.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto está em período de desenvolvimento ativo sem tags de versão publicadas neste intervalo. Contribuidores devem consultar a branch `main` diretamente para funcionalidades mais recentes.

---

## 3. Progresso do Projeto

### PRs Fechados/Merged (2)

| # | PR | Autor | Impacto |
|---|-----|-------|---------|
| **#65412** | fix(codex): stream app-server events to live clients | HaiderSultanArc | Corrige visibilidade de tool lifecycle em tempo real durante execuções `codex_app_server`, melhorando feedback visual no TUI e desktop |
| **#66514** | feat(codex): live TUI/desktop tool cards for app-server runtime | teknium1 | Implementa cards de ferramentas com eventos de lifecycle para superfícies de chat, proporcionando experiência consistente entre plataformas |

**Análise:** Ambos os PRs относятся ao ecossistema Codex, indicando foco em melhorar a experiência de debugging e monitoramento em runtimes avançados.

### PRs Abertos Relevantes (8)

| # | PR | Autor | Destaque |
|---|-----|-------|----------|
| **#66506** | fix: reject steer outside its active turn | brandonsmits | Previne vazamento de guidance entre turns — segurança de sessão |
| **#66524** | fix(tools): translate MSYS paths to Windows-native | stantheman0128 | Compatibilidade Windows/Git Bash para linters de shell |
| **#66523** | fix(browser): keep local Chromium headless on Windows Desktop | stantheman0128 | Elimina janela blank indesejada em automação de browser no Windows |
| **#66522** | feat(vertex): route Claude models through AnthropicVertex SDK | nickkpoon | Abre suporte a Claude no Vertex Model Garden via protocolo nativo |
| **#64980** | fix(lsp): bound language-server lifecycle safely | richkapp | Gerenciamento seguro de servidores LSP em gateways de longa duração |
| **#66373** | fix(ci): make tests, workflows, and attribution reliable under load | teknium1 | Auto-healing de flakes e melhoria de confiabilidade CI/CD |
| **#56261** | fix(update): keep trace upload compatible with transformers | stigrunar | Resolve conflito de dependência com huggingface-hub |
| **#65805** | Desktop E2E: Playwright suite with visual regression diffs | ethernet8023 | Suite completa de testes E2E para desktop Electron |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (por comentários)

| # | Título | Comentários | 👍 | Categoria |
|---|--------|-------------|----|-----------|
| **#25309** | 🌙 Dreaming — Automatic Background Memory Consolidation | 6 | 0 | Feature/Innovation |
| **#65384** | Desktop App creates new session on every message (non-default profile) | 6 | 0 | Bug/P2 |
| **#60144** | Desktop boot fails when MCP registration exceeds 15s timeout | 5 | 0 | Bug/P2 |
| **#66267** | Multimodal content list crashes interim processing (P1) | 4 | 0 | Bug/P1 |
| **#66360** | Codex app-server tool events never reach TUI (P2) | 3 | 0 | Bug/P2 |

### Análise das Demandas

**Feature #25309 — "Dreaming" Memory Consolidation** representa a ideia mais comentada: um sistema inspirado em ciclos de sono biológicos que consolida memórias de curto prazo em memória de longo prazo durante horas de baixa atividade. O conceito demonstra ambição de tornar o agente mais "inteligente" ao longo do tempo, similar a processos documentados pelo projeto OpenClaw.

**Bug #65384** expõe problema crítico de experiência: usuários com perfis customizados (ex: "coder") têm cada mensagem tratada como nova sessão, destruindo contexto conversacional. Este é um problema de regressão com impacto direto na produtividade.

---

## 5. Bugs e Estabilidade

### Por Severidade

#### P1 — Críticos (2 issues)

| # | Título | Impacto |
|---|--------|---------|
| **#66267** | Multimodal content list crashes interim processing and retries until API-call budget exhausted | Loop infinito de retry causando consumo total de budget de API após operações de visão/contexto |
| **#66377** | Telegram polling reconnect ladder stalls mid-way; gateway alive but silently dead | Gateway Telegram para de processar updates sem sinal de erro, exigindo restart manual |

#### P2 — Altos (15 issues)

| Área | Count | Exemplos |
|------|-------|----------|
| **Desktop** | 5 | Boot timeout Windows, session leak entre janelas, WSL spawn loop, project cwd loss |
| **Agent** | 4 | Empty assistant messages loop, system prompt hardcoded path, aux client cache, model switch |
| **TUI/Gateway** | 3 | Codex events bridge, dashboard profile write, Telegram SOUL.md |
| **Tools** | 2 | MSYS path translation, X11 computer_use crash KDE |
| **Cron/Plugins** | 1 | DST wall-clock shift |

#### P3 — Médios (13 issues)

Incluem: API key warnings indevidas, locale drift CI, plugin tab.position mismatch, skill/memory load timing, vision provider config, hermes update PATH resolution.

### Padrões Identificados

1. **Windows/WSL2**: 4+ bugs específicos da plataforma Windows, indicando necessidade de test coverage expanding
2. **Sessão/Estado**: Problemas recorrentes com gerenciamento de sessão, cache e contexto multi-janela
3. **MCP Servers**: Watchdog e timeout behaviors problemáticos em ambientes virtualizados

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Propostas (7)

| # | Título | Prioridade | Sinais Estratégicos |
|---|--------|------------|---------------------|
| **#25309** | 🌙 Dreaming — Automatic Background Memory Consolidation | P3 | Agente com memória de longo prazo auto-gerenciada |
| **#66473** | MCP Smart Loading — Lazy Connection, Tool Budget, Per-Session Scoping | P3 | Performance e eficiência de conexão MCP |
| **#66508** | Option to force skill and memory load at session start | P3 | Controle granular de comportamento inicial |
| **#66522** | Route Claude models through AnthropicVertex SDK | Feature | Expansão de provedores suportados |
| **#64654** | Pass assistant_response to pre_tool_call hook | P3 | Extensibilidade para plugins |
| **#65425** | scripts/check_locales.py — catch locale catalog drift in CI | P3 | Qualidade i18n |
| **#66415** | Boardstate phase 2: the Board in the desktop app | P3 | Feature parity desktop/web |

### Sinais de Roadmap

- **Modularidade**: Multiple issues pedindo carregamento on-demand de skills/memória/MCP
- **Multi-plataforma**: Telegram, Discord, Slack sendo tratados como cidadãos de primeira classe
- **Observabilidade**: dump de requests/responses para debugging, tool cards em tempo real
- **Performance**: Lazy connections, lifecycle bounds, CI reliability

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais

| Dor | Frequência | Impacto |
|-----|------------|---------|
| **Perda de contexto em Desktop** | Alta | Usuários com múltiplos perfis perdem histórico ao trocar modelo |
| **Instabilidade em Windows** | Alta | Boot failures, WSL spawn loops, KDE crashes |
| **Telegram gateway silêncioso** | Média | Usuários perdem mensagens sem feedback de erro |
| **Integração MCP problemática** | Média | Watchdog mata conexões saudáveis, timeouts curtos |
| **Linter path issues** | Baixa | Desenvolvedores Windows/Git Bash enfrentam falhas silenciosas |

### Cenários de Uso Reportados

1. **Desenvolvedores multi-perfil**: Usam perfis separados para coding, writing, general — esperam contexto isolado mas consistente
2. **Usuários Windows native**: Instalação direta sem WSL apresenta falhas inesperadas
3. **Operadores de gateway**: Long-running servers com LSP, MCP e múltiplas plataformas simultâneas
4. **Comunidade Codex**: Usuários avançados precisam de feedback visual em tempo real de tool execution

### Satisfação/Insatisfação

**Positivo:**
- Funcionalidades core de agente funcionam bem em setups padrão
- Desktop app tem UX bem trabalhada (exceto edge cases)
- Suporte a múltiplos provedores (OpenAI, Claude, Vertex) valorizado

**Negativo:**
- Edge cases em plataformas Windows e WSL causam frustração
- Bugs de sessão/contexto são especialmente dolorosos para workflow
- CI flakes e confiabilidade de testes geram atrito para contribuidores

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Stale (seleção)

| # | Título | Idade | Prioridade | Status Atual |
|---|--------|-------|------------|--------------|
| **#20815** | Dashboard shows API key warning for local providers with 'no-key-required' | ~70 dias | P3 | OPEN, 2 comments |
| **#49151** | Aux client cache does not invalidate on /model switch | ~28 dias | P2 | CLOSED |
| **#46732** | Desktop: failed/unsent messages leak across multiple windows | ~32 dias | P2 | OPEN |
| **#35953** | preserve mixed-case providers in Telegram model picker | ~47 dias | P3 | OPEN |

### Issues com Necessidade de Decisão

| # | Título | Decisão Pendente |
|---|--------|------------------|
| **#66473** | MCP Smart Loading | Arquitetura de lazy connection |
| **#66429** | Hermes empty assistant messages | Prioridade vs. outras correções |
| **#64654** | pre_tool_call hook com assistant_response | API design para extensibilidade |

### Recomendações

1. **Triagem Windows**: Priorizar os 4+ bugs P2 específicos de Windows antes do próximo release
2. **Testes Desktop E2E**: O PR #65805 (Playwright suite) deve ser priorizado para prevenir regressões
3. **Memory Consolidation**: A feature #25309 demonstra interesse da comunidade em agentes "persistentes" — considerar timeline de implementação
4. **CI Reliability**: O PR #66373 de auto-healing deve ser reviewado e merged para reduzir atrito de contribuidores

---

*Relatório gerado automaticamente com base em dados do GitHub de NousResearch/hermes-agent em 2026-07-18. Para atualizações em tempo real, consulte: https://github.com/NousResearch/hermes-agent*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-07-18

---

## 1. Panorama do dia

O projeto PicoClaw mantém alta atividade comunitária com **12 PRs e 4 issues atualizados nas últimas 24h**, indicando engajamento significativo de contribuidores. Não há lançamentos novos hoje. O estado geral aponta para uma fase de **maturidade técnica**, com foco em hardening de segurança (MQTT TLS, OAuth), otimizações de performance (alocações, escape XML) e expansão de canais (WhatsApp typing, QQ streaming). A ausência de releases recentes pode indicar que a equipe está em ciclo de revisão de PRs pendentes antes de um próximo tagged release.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24h.**

A última versão estável упоминаada nos dados é **v0.2.9** (git 2992), com migração v2→v3 em curso. O projeto parece estar em transição entre ciclos de release, potencialmente preparando **v0.3.x** dado que PRs recentes mencionam features como `chat.enableCodeWrap` introduzidas em v0.3.1.

> ⚠️ **Nota de migração pendente:** A issue [#3206](https://github.com/sipeed/picoclaw/issues/3206) reporta falha na migração de config v2→v3 (`unknown field(s): build_info, session.dm_scope`), afetando inclusive fresh installs da v0.2.9. Este é um blocker para adotantes.

---

## 3. Progresso do projeto

### PRs fechados/merged nas últimas 24h:

| # | PR | Impacto | Status |
|---|-----|---------|--------|
| [#3204](https://github.com/sipeed/picoclaw/pull/3204) | `fix(deps): restore Azure dependency freeze baseline` | **Segurança supply-chain** — Restaura versões frozen do Azure SDK (azcore v1.21.1, azidentity v1.13.1, MSAL v1.6.0) para alinhamento com checagens downstream | ✅ Closed |
| [#3180](https://github.com/sipeed/picoclaw/pull/3180) | `fix(cli): skip tool calls with invalid arguments` | **Robustez CLI** — Permite que tool calls válidos não sejam descartados quando há argumentos JSON inválidos no mesmo response | ✅ Closed |

### PRs abertos com potencial de merge:

| # | PR | Categoria | Prioridade |
|---|-----|-----------|------------|
| [#3246](https://github.com/sipeed/picoclaw/pull/3246) | `fix: security hardening (MQTT TLS, OAuth timeouts, bounded search)` | **Segurança crítica** — Remove `InsecureSkipVerify: true` hardcoded em MQTT; adiciona timeouts OAuth e limites de leitura | 🔴 Alta |
| [#3242](https://github.com/sipeed/picoclaw/pull/3242) | `feat(whatsapp): add native typing presence` | **UX Canal** — Implementa `TypingCapable` no WhatsApp nativo com refresh a cada 10s | 🟡 Média |
| [#3241](https://github.com/sipeed/picoclaw/pull/3241) | `fix(auth): make OAuth refresh provider-correct` | **Compatibilidade** — Corrige refresh OAuth para OpenAI (JSON) vs Google (form-encoded); adiciona mutex para race conditions | 🔴 Alta |
| [#3240](https://github.com/sipeed/picoclaw/pull/3240) | `feat(i18n): add Czech translations` | **Localização** — Adiciona `chat.enableCodeWrap` / `chat.disableCodeWrap` para locale cs | 🟢 Baixa |

---

## 4. Temas quentes da comunidade

### Issues com maior engajamento:

**#3201** — *Support streaming output for QQ channel*  
🔗 [sipeed/picoclaw#3201](https://github.com/sipeed/picoclaw/issues/3201)  
📊 3 comentários, 0 👍  
📅 Criado: 2026-07-01 | Atualizado: 2026-07-17  
💬 **Análise:** Request paraparalelo ao que Telegram e WebSocket já implementam (`StreamingCapable`). Usuários do QQ querem feedback token-by-token em vez de esperar resposta completa. A feature está marked como `stale` mas ainda atualizada, sugerindo interesse contínuo.

**#3206** — *v2→v3 config migration fails with false 'unknown field(s): build_info, session.dm_scope'*  
🔗 [sipeed/picoclaw#3206](https://github.com/sipeed/picoclaw/issues/3206)  
📊 2 comentários, 0 👍  
📅 Criado: 2026-07-02 | Atualizado: 2026-07-17  
💬 **Análise:** Bug blocker para migração. O campo `build_info` parece ser vestígio de versão anterior. community sente dor imediata em fresh installs.

**#3240** — *Add typing presence to WhatsApp native replies*  
🔗 [sipeed/picoclaw/issues/3240](https://github.com/sipeed/picoclaw/issues/3240)  
📊 1 comentário, 0 👍  
📅 Criado: 2026-07-10 | Atualizado: 2026-07-17  
💬 **Análise:** Correlacionado com PR #3242 (já aberto). A issue formaliza a demanda que foi implementada paralelamente.

**#3239** — *OAuth refresh requests use incompatible provider semantics and can race*  
🔗 [sipeed/picoclaw/issues/3239](https://github.com/sipeed/picoclaw/issues/3239)  
📊 1 comentário, 0 👍  
📅 Criado: 2026-07-10 | Atualizado: 2026-07-17  
💬 **Análise:** Issue técnica profunda. Reforça a necessidade do PR #3241 que já aborda o problema.

---

## 5. Bugs e estabilidade

### Por severidade:

| Severidade | # | Descrição | Impacto |
|------------|---|-----------|---------|
| 🔴 **Crítica** | [#3206](https://github.com/sipeed/picoclaw/issues/3206) | Migração v2→v3 quebra com `unknown field(s)` | Bloqueia upgrades de config |
| 🔴 **Alta** | [#3239](https://github.com/sipeed/picoclaw/issues/3239) | OAuth refresh race condition + provider incompatibility | Autenticação pode falhar intermitentemente |
| 🟡 **Média** | [#3240](https://github.com/sipeed/picoclaw/issues/3240) | WhatsApp sem typing presence | UX degradada em canais nativos |
| 🟡 **Média** | [#3201](https://github.com/sipeed/picoclaw/issues/3201) | QQ sem streaming output | Experiência LLM não-ótima para QQ |

### Correções merged:
- **#3180** — CLI tool calls com argumentos inválidos agora são tratados graciosamente
- **#3204** — Azure SDK baselines restaurados para compliance de supply-chain

---

## 6. Pedidos de features e sinais de roadmap

### Features requestadas:

| # | Feature | Canal/Pacote | Sinais de roadmap |
|---|---------|--------------|-------------------|
| [#3201](https://github.com/sipeed/picoclaw/issues/3201) | Streaming output para QQ | Canal QQ | Demonstrates gap vs Telegram/WebSocket |
| [#3240](https://github.com/sipeed/picoclaw/issues/3240) | Typing presence WhatsApp | `whatsapp_native` | PR #3242 já implementa |
| [#3193](https://github.com/sipeed/picoclaw/pull/3193) | Simplex channel type | Arquitetura canais | Adiciona tipo simplex para comunicação one-way |

### Refatorações e otimizações em PR:

| # | Tipo | Pacote | Objetivo |
|---|------|--------|----------|
| [#3245](https://github.com/sipeed/picoclaw/pull/3245) | Refactor | `pkg/skills/loader.go` | Single-pass `escapeXML` via `strings.NewReplacer` |
| [#3244](https://github.com/sipeed/picoclaw/pull/3244) | Refactor | `pkg/seahorse` | Single-pass `escapeXML` no summary assembly |
| [#3243](https://github.com/sipeed/picoclaw/pull/3243) | Refactor | `pkg/seahorse` | `strings.Builder` para helpers de compactação (O(n²)→O(n)) |
| [#3202](https://github.com/sipeed/picoclaw/pull/3202) | Bugfix | `pkg/routing/agent_id.go` | Strip underscoresleading/trailing em normalização de ID |

**Sinais de roadmap:**
- Ênfase em **segurança** (TLS MQTT, OAuth timeouts) sugere hardening release
- **Performance** em `seahorse` e `skills` indica otimização para conversas longas
- **Expansão de canais** (QQ streaming, simplex) mostra estratégia de parity entre plataformas

---

## 7. Resumo de feedback dos usuários

### Dores reais identificadas:

1. **Migração de config quebrada** (#3206)  
   *"Even on a fresh install of the latest release (v0.2.9)"* — Impacta novos adotantes, não apenas upgraders. Experiência de onboarding degradada.

2. **Feedback visual ausente no WhatsApp** (#3240)  
   *"Users see no feedback between sending a message and receiving the bot reply"* — Dor de UX clássica: silêncio = incerteza.

3. **Autenticação OAuth instável** (#3239)  
   Providers diferentes exigem formatos diferentes. Problema técnico com impacto direto em produção.

### Cenários de uso emergentes:

- **Multi-canal** com diferentes features parity (Telegram tem streaming, QQ não)
- **Integração enterprise** via Azure SDK (supply-chain checks sendo reforçados)
- **Operadores de WhatsApp nativo** precisam de presence indicators para parecerem "humanos"

### Satisfação/Insatisfação:

| Sentimento | Indicador |
|------------|-----------|
| 🔴 Frustração | Config migration blocking fresh installs |
| 🟡 Inquietação | OAuth race conditions em produção |
| 🟢 Apreciação implícita | Many PRs unsolicited de hardening e UX |

---

## 8. Backlog que merece atenção

### Issues sem resposta há >7 dias (stale risk):

| # | Issue | Criado | Atualizado | Dias inativo | Prioridade |
|---|-------|--------|------------|--------------|------------|
| [#3193](https://github.com/sipeed/picoclaw/pull/3193) | Added simplex channel type | 2026-06-27 | 2026-07-17 | ~21 dias | 🟡 Média |
| [#1951](https://github.com/sipeed/picoclaw/pull/1951) | Move installation scripts from docs repo | 2026-03-24 | 2026-07-17 | ~116 dias | 🟢 Baixa |

### PRs aguardando review há >7 dias:

| # | PR | Criado | Tema | Prioridade |
|---|-----|--------|------|------------|
| [#3246](https://github.com/sipeed/picoclaw/pull/3246) | Security hardening (MQTT TLS) | 2026-07-10 | 🔴 **Crítica** | **Urgente** |
| [#3241](https://github.com/sipeed/picoclaw/pull/3241) | OAuth refresh fix | 2026-07-10 | 🔴 **Alta** | **Alta** |
| [#3242](https://github.com/sipeed/picoclaw/pull/3242) | WhatsApp typing | 2026-07-10 | 🟡 Média | Média |
| [#3202](https://github.com/sipeed/picoclaw/pull/3202) | Strip underscores in ID | 2026-07-01 | 🟡 Média | Média |
| [#3243](https://github.com/sipeed/picoclaw/pull/3243) | strings.Builder refactor | 2026-07-10 | 🟢 Baixa | Baixa |

### Recomendações de ação:

1. **🔴 Prioridade máxima:** Review e merge do PR [#3246](https://github.com/sipeed/picoclaw/pull/3246) (MQTT `InsecureSkipVerify` é risco de segurança real)
2. **🔴 Alta prioridade:** Resolver issue [#3206](https://github.com/sipeed/picoclaw/issues/3206) (bloqueia novos usuários) e PR [#3241](https://github.com/sipeed/picoclaw/pull/3241) (OAuth race condition)
3. **🟡 Média:** Unificar efforts em streaming para QQ (issue #3201 + PRs relacionados)
4. **🟢 Manutenção:** Padronizar labels e limpar PRs stale (>30 dias sem activity)

---

*Relatório gerado automaticamente com base em dados GitHub de 2026-07-18. Métricas sujeitas a atrasos de indexação.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-07-18

---

## 1. Panorama do Dia

O projeto IronClaw apresenta **alta atividade** em 2026-07-18, com 50 issues e 49 PRs atualizados nas últimas 24h, indicando um ciclo de desenvolvimento intenso. A equipe está focada na fase final de preparação para o lançamento v1 do **Reborn** (nova arquitetura), evidenciada por múltiplos PRs de refatoração, renomes de crates e simplificação de arquitetura. Não houve releases formais neste período, embora 23 issues e 23 PRs tenham sido fechados, sugerindo progresso substancial na consolidação do código. A prioridade atual gira em torno de **segurança** (remoção de acesso ao filesystem via shell), **qualidade de ferramenta** e **limpeza de legado** antes do corte v1.

---

## 2. Lançamentos

### Nenhuma release formal registrada nas últimas 24h.

**Contexto:** O PR #5598 está em aberto desde 2026-07-03 com mudanças pendientes:
- `ironclaw_common`: 0.4.2 → 0.5.0 (⚠ breaking changes)
- `ironclaw_safety`: 0.2.2 → 0.2.3 (compatível)
- `ironclaw_skills`: 0.3.0 → 0.4.0 (⚠ breaking changes)
- `ironclaw`: 0.24.0 → 0.29.1

**Alerta de migração:** As versões 0.5.0 de `ironclaw_common` e 0.4.0 de `ironclaw_skills` contém breaking changes que exigirão atenção durante upgrade.

---

## 3. Progresso do Projeto

### PRs Fechados/Merged (23 total)

| PR | Título | Impacto |
|---|---|---|
| [#6200](https://github.com/nearai/ironclaw/pull/6200) | refactor(reborn): process stores over RootFilesystem, delete InMemoryProcess*Store (§4.3) | **Alto** — Elimina stores em memória para processos, migra para RootFilesystem |
| [#6197](https://github.com/nearai/ironclaw/pull/6197) | refactor(reborn): capability-lease store over RootFilesystem (§4.3) | **Alto** — Consolida store de autorização lease |
| [#6161](https://github.com/nearai/ironclaw/pull/6161) | fix(reborn): deliver plain-text WASM tool output | **Médio** — Corrige falha de decode JSON em tools WASM que retornam texto puro |
| [#5978](https://github.com/nearai/ironclaw/pull/5978) | Require read-before-edit and reject stale edits in reborn coding tools | **Alto** — Implementa proteção contra edições stale (semelhante ao Claude Code) |
| [#6173](https://github.com/nearai/ironclaw/pull/6173) | refactor(composition): extract runtime.rs inline test module (Phase 0) | **Baixo** — Melhora organização de código (~6.9k linhas extraídas) |

**Avanços-chave:**
- **Slice A da simplificação de arquitetura (§4.3)** está quase completo — stores de process, capability-lease e run-state migrando para RootFilesystem
- **Proteção contra race conditions** em ferramentas de edição (#5978) resolve problema crítico onde modelos editavam views desatualizadas

---

## 4. Temas Quentes da Comunidade

### Issues com Mais Comentários

| Issue | Título | Comentários | Tendência |
|---|---|---|---|
| [#2767](https://github.com/nearai/ironclaw/issues/2767) | Epic: Separate engine v2 capability background from callable tool schemas | 7 | **Fechada** — Separação de capabilities callable vs. background em engine v2 |
| [#2813](https://github.com/nearai/ironclaw/issues/2813) | engine-v2: add typed assistant content model for final vs internal tool-use text | 6 | **Fechada** — Modelo tipado para distinguir conteúdo final vs. interno |
| [#2835](https://github.com/nearai/ironclaw/issues/2835) | Tool discovery: add curated summaries for core built-ins | 3 | **Fechada** — Sumários curados para ferramentas built-in |
| [#4644](https://github.com/nearai/ironclaw/issues/4644) | Universal attachments across all channels | 2 | **Aberta** — Suporte a anexos em Reborn (prioridade P1 sugerida) |
| [#5331](https://github.com/nearai/ironclaw/issues/5331) | Tool-approval 'always' may not auto-approve | 2 | **Fechada** — Bug de auto-aprovação em engine v2 |

### Análise de Demandas

**1. Segurança multi-tenant (#6170):** Usuários em instâncias multi-tenant podem acessar filesystem via shell — **demanda urgente** que foi fechada recentemente.

**2. Suporte a anexos universais (#4644):** Bloqueador para experiência consistente entre v1 e Reborn. O caminho "Reborn"Currently dropa anexos silenciosamente.

**3. Preparação para v1 (#6198, #6201, #6080):** Epic de limpeza de legado e refatoração pré-v1 com múltiplas issues filhas rotuladas `refactoring`.

---

## 5. Bugs e Estabilidade

### Bugs Reportados (por severidade)

#### 🔴 Alta Severidade

| Issue | Descrição | Status |
|---|---|---|
| [#6170](https://github.com/nearai/ironclaw/issues/6170) | Usuários multi-tenant acessam filesystem via shell (ls -all irrestrito) | **Fechada** |
| [#5331](https://github.com/nearai/ironclaw/issues/5331) | Tool-approval 'always' pode não auto-aprovar chamadas subsequentes do mesmo tool (engine v2) | **Fechada** |

#### 🟡 Média Severidade

| Issue | Descrição | Status |
|---|---|---|
| [#4644](https://github.com/nearai/ironclaw/issues/4644) | Anexos silenciosamente descartados em Reborn; suporte inconsistente em v1 | **Aberta** |
| [#4278](https://github.com/nearai/ironclaw/issues/4278) | Crescimento ilimitado de conversation context em ENGINE_V2 (exhaustão de context window) | **Fechada** |

#### 🟢 Baixa Severidade (UI/UX)

| Issue | Descrição | Status |
|---|---|---|
| [#3618](https://github.com/nearai/ironclaw/issues/3618) | Debug panel stats travadas em 0 em engine v2 | **Fechada** |
| [#3465](https://github.com/nearai/ironclaw/issues/3465) | ENGINE_V2 chama repetidamente `tool_info` durante tool-use flows | **Fechada** |
| [#3464](https://github.com/nearai/ironclaw/issues/3464) | Falhas de tool calls renderizam inconsistentemente na Gateway UI | **Fechada** |
| [#3463](https://github.com/nearai/ironclaw/issues/3463) | Imagens geradas em Engine V2 não renderizam corretamente na Gateway UI | **Fechada** |

**Observação:** Todos os bugs de UI/reportados anteriormente estão fechados, indicando foco em estabilização antes do release v1.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features em Desenvolvimento

| PR | Feature | Escopo | Status |
|---|---|---|---|
| [#6140](https://github.com/nearai/ironclaw/pull/6140) | `github.get_job_logs` + SSRF-safe redirect egress | Agent/Reborn | **Aberta** (size: L) |
| [#6159](https://github.com/nearai/ironclaw/pull/6159) | Telegram channel extension (admin bot, DM entrypoint) | Channels | **Aberta** (size: XL) |
| [#6174](https://github.com/nearai/ironclaw/pull/6174) | Onboarding journey — keychain master key, two-prompt setup | CLI | **Aberta** (size: XL) |
| [#6185](https://github.com/nearai/ironclaw/pull/6185) | Promove `ironclaw` como comando canônico (reborn → ironclaw, legacy → ironclaw-v1) | CLI/Setup | **Aberta** (size: L) |

### Features Planejadas (Issues Abertas)

| Issue | Feature | Prioridade Sugerida | Observações |
|---|---|---|---|
| [#4644](https://github.com/nearai/ironclaw/issues/4644) | Universal attachments across all channels | **P1** | Bloqueador para experiência consistente |
| [#3577](https://github.com/nearai/ironclaw/issues/3577) | Track v1 ports para legacy channels | P2 | Guia de porting para Reborn |
| [#4181](https://github.com/nearai/ironclaw/issues/4181) | Carry legacy NEAR wallet login into WebChat v2 | — | Integração de autenticação |

### Sinais de Roadmap

1. **Renomeação de binários/crates** (#6185, #6201) indica preparação para corte v1
2. **Epic de limpeza de legado** (#6198) com label `refactoring` como query viva — trabalho deliberado pré-v1
3. **Arquitetura simplificada §4.3** em progresso (Slice A quase completo)

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Categoria | Problema | Evidência |
|---|---|---|
| **Segurança** | Acesso irrestrito ao filesystem em multi-tenant | Issue #6170 |
| **UX Canal Web** | Anexos não funcionam em Reborn | Issue #4644 |
| **Estabilidade Engine V2** | Auto-aprovação de tools não funciona como esperado | Issue #5331 |
| **Performance** | Context window exhaustion em conversas longas | Issue #4278 |

### Cenários de Uso Observados

- **Agentes de CI/QA:** Demanda por `github.get_job_logs` com redirect seguro (#6140)
- **Multi-tenant hosted:** Necessidade de sandboxing estrito (shell sem acesso host)
- **Onboarding self-hosted:** Usuários querem setup sem variáveis de ambiente (#6174)

### Satisfação/Insatisfação

**Positivo:**
- Engine v2 está amadurecendo (múltiplas issues de bugs de UI fechadas)
- Arquitetura de stores sendo consolidada

**Negativo:**
- Funcionalidades v1 (como anexos) dropadas silenciosamente em Reborn
- Falta de tracking de LLM usage em /api/admin/usage para Engine V2 (#4822)

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Estagnadas

| Issue | Título | Criado | Atualizado | Observação |
|---|---|---|---|---|
| [#4181](https://github.com/nearai/ironclaw/issues/4181) | Carry legacy NEAR wallet login into WebChat v2 | 2026-05-28 | 2026-07-17 | 0 comentários — aguardando priorização |
| [#6080](https://github.com/nearai/ironclaw/issues/6080) | Retire legacy runtime: delete legacy code | 2026-07-14 | 2026-07-17 | 0 comentários — depends on epic #6198 |
| [#3577](https://github.com/nearai/ironclaw/issues/3577) | Track v1 ports for legacy channels | 2026-05-13 | 2026-07-17 | P2 sugerida, baixa atividade |

### PRs Abertos que Precisam de Review

| PR | Tamanho | Risco | Aguardando |
|---|---|---|---|
| [#6185](https://github.com/nearai/ironclaw/pull/6185) | L | Medium | Review — renomeia binários para v1 |
| [#6159](https://github.com/nearai/ironclaw/pull/6159) | XL | Medium | Review — Telegram extension |
| [#6140](https://github.com/nearai/ironclaw/pull/6140) | L | Low | Review — GitHub integration |
| [#6174](https://github.com/nearai/ironclaw/pull/6174) | XL | Low | Review — onboarding journey |

### Recomendações

1. **Priorizar review de #6185** — bloqueador para release v1
2. **Definir escopo de #4644 (anexos universais)** — P1 sugerido mas semowner jelas
3. **Assignees para issues de autenticação (#4181)** — zero comentários indica possível esquecimento

---

## Saúde Geral do Projeto

| Métrica | Status |
|---|---|
| Atividade (issues/PRs/24h) | 🟢 Alta (50/49) |
| Bugs abertos de alta severidade | 🟢 0 (após fechamento de #6170 e #5331) |
| Preparação para v1 | 🟡 Em progresso (epic #6198 ativa) |
| Divisão de tanggung jawab | 🟢 Claras (core contributors: ilblackdragon, henrypark133, BenKurrek) |
| Dívida técnica | 🟡 Alta mas gerenciada (refactoring epic em curso) |

**Conclusão:** IronClaw está em **fase de maturação pré-v1**, com foco em segurança, estabilização do engine v2 e limpeza de código legado. A atividade intensa e o número de PRs de refatoração indicam investimento significativo em qualidade de código antes do lançamento oficial.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do Projeto CoPaw — 2026-07-18

---

## 1. Panorama do Dia

O CoPaw (QwenPaw) mantém um **ritmo de desenvolvimento intenso** com 25 issues e 41 PRs atualizados nas últimas 24h. A versão **v2.0.0.post3** foi publicada recentemente, trazendo correções para migração de drivers MCP e endurecimento dos workflows de CI. A comunidade está ativamente reportando bugs críticos — especialmente relacionados à plataforma Desktop e Windows — enquanto simultaneamente solicita novas funcionalidades como suporte a modelos Hermes e controles granulares por conversa. O volume de PRs abertos (16) e merged/fechados (25) indica uma equipe de manutenção responsiva e um pipeline de review saudável.

---

## 2. Lançamentos

### v2.0.0.post3 — Publicação Pós-Release

**Mudanças incluídas:**

| PR | Descrição |
|----|-----------|
| [#6091](https://github.com/agentscope-ai/QwenPaw/pull/6091) | **fix(mcp):** Migração de `${VAR}` em headers para refs de credenciais de ambiente durante a migração de drivers |
| CI Hardening | Reforço dos workflows desktop com remoção de código legado de verificação |

**Notas:**
- Esta é uma versão de manutenção corretiva, não introduz breaking changes
- Foco em estabilidade do driver MCP e robustez da pipeline de CI
- [Link da release](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.0.0.post3)

---

## 3. Progresso do Projeto

### PRs Merged/Fechados de Destaque (últimas 24h)

| PR | Status | Descrição | Impacto |
|----|--------|-----------|---------|
| [#6234](https://github.com/agentscope-ai/QwenPaw/pull/6234) | ✅ Closed | **fix: uso de import absoluto no entry point Tauri** — Resolve problema de PyInstaller executando como script top-level | **Desktop/Linux** |
| [#6220](https://github.com/agentscope-ai/QwenPaw/pull/6220) | ✅ Closed | **fix(token_usage):** Não persiste cache não inicializado no shutdown | **Estabilidade** |
| [#6218](https://github.com/agentscope-ai/QwenPaw/pull/6218) | ✅ Closed | **fix(runtime):** Passa `model_slot_override` da requisição HTTP para a factory de modelos | **Backend** |
| [#6217](https://github.com/agentscope-ai/QwenPaw/pull/6217) | ✅ Closed | **fix: modelo multimodal não-probed trata como fail-open** — Evita stripping de imagens | **Multimodalidade** |
| [#6216](https://github.com/agentscope-ai/QwenPaw/pull/6216) | ✅ Closed | **fix: expande shorthands regex para compatibilidade GBNF** — Resolve erro com ferramentas MCP (PubMed) | **MCP/Tools** |
| [#6204](https://github.com/agentscope-ai/QwenPaw/pull/6204) | ✅ Closed | **fix(utils):** Remove probe redundante de nvidia-smi em `get_vram_size_gb` | **Performance/Utils** |
| [#6198](https://github.com/agentscope-ai/QwenPaw/pull/6198) | ✅ Closed | **feat: bound multi-agent startup** — Limita concorrência na inicialização de múltiplos agentes | **Performance/Escalabilidade** |
| [#6170](https://github.com/agentscope-ai/QwenPaw/pull/6170) | ✅ Closed | **fix(browser):** Adiciona `MAX_WAITTIME` para automação de browser | **Ferramentas/Browser** |
| [#6159](https://github.com/agentscope-ai/QwenPaw/pull/6159) | ✅ Closed | **Refactor channel base:** Move settlement de token/context para BaseChannel | **Arquitetura/Channels** |

### PRs Abertos com Alto Potencial de Impacto

| PR | Descrição | Fase |
|----|-----------|------|
| [#6232](https://github.com/agentscope-ai/QwenPaw/pull/6232) | **perf(console):** Cache e compressão de assets estáticos | Aberto |
| [#6235](https://github.com/agentscope-ai/QwenPaw/pull/6235) | **feat(memory):** Rebuild manual de índice de memória para ReMe Light | WIP |
| [#6233](https://github.com/agentscope-ai/QwenPaw/pull/6233) | **Refactor channels:** Controles separados para display de tool call e resultado | Aberto |
| [#6225](https://github.com/agentscope-ai/QwenPaw/pull/6225) | **fix(desktop):** Shutdown graceful do backend sidecar | Aberto |
| [#6210](https://github.com/agentscope-ai/QwenPaw/pull/6210) | **Refactor:** Default loop como Agent Mode de primeira classe | Aberto |
| [#5187](https://github.com/agentscope-ai/QwenPaw/pull/5187) | **feat(computer-use):** Automação GUI Windows com UIA + Tauri | Em progresso |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (Comentários/Reações)

| Issue | Tipo | Comentários | Reações | Tema |
|-------|------|-------------|---------|------|
| [#6161](https://github.com/agentscope-ai/QwenPaw/issues/6161) | 🐛 Bug | 7 | 0 | **Windows: Admin rights após update** — QwenPaw Desktop não inicia sem privilégios de admin |
| [#5995](https://github.com/agentscope-ai/QwenPaw/issues/5995) | 🐛 Bug | 6 | 0 | **Mensagens dropadas silenciosamente** quando sessão está ocupada |
| [#6155](https://github.com/agentscope-ai/QwenPaw/issues/6155) | 🐛 Bug | 5 | 0 | **Problemas ao migrar de 1.x para 2.0** — Embedding, Auto-Memo, etc |
| [#5976](https://github.com/agentscope-ai/QwenPaw/issues/5976) | ✨ Enhancement | 4 | 0 | **Separação de tool call e resultado** no envio para canais |
| [#6231](https://github.com/agentscope-ai/QwenPaw/issues/6231) | ✨ Enhancement | 3 | 0 | **Múltiplas configurações para mesmo model ID** (ex: deepseek com/sem thinking) |
| [#6193](https://github.com/agentscope-ai/QwenPaw/issues/6193) | ⚡ Performance | 3 | 0 | **MCP drivers inicializam sequencialmente** — 40s vs 5s com paralelização |
| [#6227](https://github.com/agentscope-ai/QwenPaw/issues/6227) | ✨ Enhancement | 1 | 👍 1 | **Seleção granular de MCP por chat** com controle tool-level |

### Análise de Demandas

**Padrões identificados:**

1. **Questões de permissão/segurança (Windows):** Multiple reports sobre Admin privileges após update, indicando possível regressão na v2.0
2. **Controles por conversa:** Forte demanda por toggles granulares (MCP por chat, internet search por chat, reasoning depth)
3. **Performance de inicialização:** community identificou gargalo de 40s na inicialização de 8 MCP clients — oportunidade clara de otimização
4. **Migração 1.x → 2.0:** Usuários encontrando barriers ao upgrade, sugerindo necessidade de melhor documentação de migração

---

## 5. Bugs e Estabilidade

### Bugs Reportados (por Severidade)

#### 🔴 Críticos (Impacto Bloqueante)

| Issue | Descrição | Plataforma | Status |
|-------|-----------|------------|--------|
| [#6161](https://github.com/agentscope-ai/QwenPaw/issues/6161) | Desktop não inicia sem admin após Windows update | Windows | CLOSED (invalid) |
| [#6169](https://github.com/agentscope-ai/QwenPaw/issues/6169) | pip install força UAC elevation na v2.0.0.post2 | Windows | CLOSED |
| [#6219](https://github.com/agentscope-ai/QwenPaw/issues/6219) | Desktop mata backend forceiramente ao invés de shutdown graceful | Desktop | OPEN |

#### 🟠 Altos (Impacto Significativo)

| Issue | Descrição | Impacto |
|-------|-----------|---------|
| [#5995](https://github.com/agentscope-ai/QwenPaw/issues/5995) | Mensagens silenciosamente dropadas quando sessão está busy | Perda de dados |
| [#6003](https://github.com/agentscope-ai/QwenPaw/issues/6003) | Console não exibe mensagens vindas de canais mas as executa | UX |
| [#6202](https://github.com/agentscope-ai/QwenPaw/issues/6202) | Progressive render失效 no Desktop (20 skills máximo) | Desktop |
| [#6201](https://github.com/agentscope-ai/QwenPaw/issues/6201) | PubMed MCP causa erro no llama.cpp | MCP |

#### 🟡 Médios (Impacto Localizado)

| Issue | Descrição | Impacto |
|-------|-----------|---------|
| [#6144](https://github.com/agentscope-ai/QwenPaw/issues/6144) | Burst de memória durante startup multi-agente (36 agents) | Performance/Escalabilidade |
| [#5934](https://github.com/agentscope-ai/QwenPaw/issues/5934) | file:/// URI mal formatado em replay no Windows | Windows/Media |
| [#6193](https://github.com/agentscope-ai/QwenPaw/issues/6193) | MCP drivers sequenciais (40s → 5s potencial) | Performance |

### Status de Estabilidade

```
📊 Métricas de 24h:
├── Issues abertos: 15
├── Issues fechados: 10  
├── PRs abertos: 16
├── PRs merged/fechados: 25
└── Release: v2.0.0.post3 ✅
```

**Diagnóstico:** Taxa de fechamento de 40% para issues e 61% para PRs indica **saúde estável**. Bugs críticos relacionados a Windows/Desktop requerem atenção imediata — dois já foram marcados como "invalid" sem resolução clara.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas (últimas 24h)

| Issue | Feature | Complexidade Estimada | Sinais de Mercado |
|-------|---------|----------------------|-------------------|
| [#6230](https://github.com/agentscope-ai/QwenPaw/issues/6230) | **Suporte a família Hermes (Hermes-3, Nous-Hermes)** como reasoning engine secundário com memória cross-session | 🔴 Alta | Demanda por diversidade de modelos de reasoning |
| [#6229](https://github.com/agentscope-ai/QwenPaw/issues/6229) | **Seleção de profundidade de raciocínio (Light/Medium/Deep/Auto)** | 🟡 Média | Equilíbrio velocidade vs. thoroughness |
| [#6228](https://github.com/agentscope-ai/QwenPaw/issues/6228) | **Toggle por-chat para busca na internet** | 🟢 Baixa | Controles de privacidade/controle |
| [#6227](https://github.com/agentscope-ai/QwenPaw/issues/6227) | **Seleção granular de MCP por conversa** com controle tool-level | 🔴 Alta | Multi-tenancy/customização |
| [#6231](https://github.com/agentscope-ai/QwenPaw/issues/6231) | **Múltiplas configs para mesmo model ID** (ex: deepseek com/sem thinking) | 🟡 Média | Flexibilidade de uso |
| [#6162](https://github.com/agentscope-ai/QwenPaw/issues/6162) | **max_input_length automático** (leitura do context window da API) | 🟡 Média | Usabilidade |
| [#5919](https://github.com/agentscope-ai/QwenPaw/issues/5919) | **Config global para agentes** (não repetir config por agente) | 🟡 Média | DX/Produtividade |

### Alinhamento com Roadmap Observado

**Padrões temáticos:**
- **Personalização por conversa:** 3/7 features solicitadas (40%) envolvem controles granulares por chat
- **Multi-modelo:** Suporte a novas famílias de modelos (Hermes) indica expansão de ecossistema
- **Performance UX:** Cache, compressão e controles de reasoning depth = foco em experiência

**PRs em desenvolvimento que addressam features:**
- [#6232](https://github.com/agentscope-ai/QwenPaw/pull/6232) → Cache/compressão estáticos (UX performance)
- [#6235](https://github.com/agentscope-ai/QwenPaw/pull/6235) → Rebuild manual de índice (Flexibilidade)
- [#6233](https://github.com/agentscope-ai/QwenPaw/pull/6233) → Controles separados de tool call/result (UX canais)

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais Reportadas

| Dor | Frequência | Severidade | Exemplos |
|-----|------------|------------|----------|
| **Admin privileges no Desktop/Windows** | 🔴 Alta | Crítica | Issues [#6161](https://github.com/agentscope-ai/QwenPaw/issues/6161), [#6169](https://github.com/agentscope-ai/QwenPaw/issues/6169) |
| **Mensagens perdidas silenciosamente** | 🟠 Média-Alta | Alta | Issue [#5995](https://github.com/agentscope-ai/QwenPaw/issues/5995) |
| **Lentidão de inicialização (MCP)** | 🟡 Média | Média | Issue [#6193](https://github.com/agentscope-ai/QwenPaw/issues/6193) |
| **Migração 1.x → 2.0 problemática** | 🟡 Média | Média | Issue [#6155](https://github.com/agentscope-ai/QwenPaw/issues/6155) |
| **Shots de config repetitivos** | 🟢 Baixa | Baixa | Issue [#5919](https://github.com/agentscope-ai/QwenPaw/issues/5919), [#6231](https://github.com/agentscope-ai/QwenPaw/issues/6231) |

### Cenários de Uso Emergentes

1. **Multi-agente em produção:** Usuários rodando 36+ agentes simultaneamente — evidenciado pelo issue de burst de memória
2. **Self-hosting com bandwidth limitado:** Solicitação de cache/compressão ([#6205](https://github.com/agentscope-ai/QwenPaw/issues/6205), [#6232](https://github.com/agentscope-ai/QwenPaw/pull/6232))
3. **Modelos de reasoning avançados:** Hermes, deepseek-v4-pro com contexts de 1M tokens
4. **Automação Windows GUI:** Issue sobre computer-use com UIA indica casos de uso de automação desktop

### Satisfação/Insatisfação

**Pontos positivos percebidos:**
- ✅ Funcionalidade core estável para uso geral
- ✅ Console web funciona corretamente (exceto edge cases)
- ✅ Docker版 mais estável que Desktop

**Pontos de frustração:**
- ❌ Desktop app parece menos maduro que a versão Docker
- ❌ Questões de permissão UAC reintroduzidas na v2.0
- ❌ Falta de controles granulares por conversa

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta há >7 dias

| Issue | Criado | Dias | Prioridade | Tema |
|-------|--------|------|------------|------|
| [#5919](https://github.com/agentscope-ai/QwenPaw/issues/5919) | 2026-07-10 | 8 | 🟡 Média | Config global de agentes |
| [#5934](https://github.com/agentscope-ai/QwenPaw/issues/5934) | 2026-07-10 | 8 | 🟡 Média | file:/// URI no Windows |
| [#5976](https://github.com/agentscope-ai/QwenPaw/issues/5976) | 2026-07-11 | 7 | 🟡 Média | Tool call/result separation |
| [#5995](https://github.com/agentscope-ai/QwenPaw/issues/5995) | 2026-07-12 | 6 | 🔴 Alta | Mensagens dropadas |
| [#6003](https://github.com/agentscope-ai/QwenPaw/issues/6003) | 2026-07-13 | 5 | 🟠 Alta | Console não exibe mensagens |

### PRs Bloqueados ou Pendentes de Review

| PR | Criado | Tema | Bloqueio |
|----|--------|------|----------|
| [#5187](https://github.com/agentscope-ai/QwenPaw/pull/5187) | 2026-06-14 | Automação Windows

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>


# Relatório do Projeto ZeroClaw — 2026-07-18

---

## 1. Panorama do Dia

O projeto ZeroClaw mantém um **nível de atividade intenso**: 50 issues e 50 PRs atualizados nas últimas 24h, com 43 issues abertas e 41 PRs em aberto. A comunidade demonstra engajamento significativo em funcionalidades críticas como autenticação OIDC, multi-agent routing e segurança de supply chain. Nota-se uma transição importante na governança: o mantenedor @singlerider deixou o projeto em 2026-07-15, com @JordanTheJet assumindo como sucessor. Não houve releases nas últimas 24h. A saúde geral do projeto permanece ativa, mas com **múltiplas issues P1 e P2 bloqueadas** exigindo atenção prioritária.

---

## 2. Lançamentos

**Nenhum release nas últimas 24h.** O último release foi anterior a este período de relatório.

---

## 3. Progresso do Projeto

### PRs Merged/Closed Recentemente

| PR | Título | Impacto |
|----|--------|---------|
| [#9045](https://github.com/zeroclaw-labs/zeroclaw/pull/9045) | docs(architecture): document generated docs and localization lifecycles | Melhora documentação de processos de geração e localização |
| [#8896](https://github.com/zeroclaw-labs/zeroclaw/pull/8896) | ci(actions): narrow benchmark compile experiment | Otimiza CI com compilation mais rápida dos benchmarks |
| [#8882](https://github.com/zeroclaw-labs/zeroclaw/pull/8882) | test(api): cover escaped schema refs in properties | Adiciona regressão para refs de schema |
| [#8768](https://github.com/zeroclaw-labs/zeroclaw/pull/8768) | fix(zerocode): expose channel root settings | Melhora configurabilidade de canais no ZeroCode TUI |
| [#8558](https://github.com/zeroclaw-labs/zeroclaw/pull/8558) | feat(web): link skills to editor | Adiciona links de edição para skills no dashboard web |
| [#8426](https://github.com/zeroclaw-labs/zeroclaw/pull/8426) | chore(web): allow ZEROCLAW_GATEWAY_HOST env override | Facilita desenvolvimento remoto com Vite |
| [#8743](https://github.com/zeroclaw-labs/zeroclaw/pull/8743) | test(config): cover LinkedIn Schema V4 removal scope | Regressão para mudanças no schema do LinkedIn |
| [#8742](https://github.com/zeroclaw-labs/zeroclaw/pull/8742) | docs(sop): add no-toml syntax examples | Melhora documentação de SOPs |

**Destaque:** A transição de CODEOWNERS ([#9107](https://github.com/zeroclaw-labs/zeroclaw/pull/9107)) é crítica — remove 44 entradas do mantenedor departed @singlerider, redirecionando reviews para @JordanTheJet e novos contribuidores.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários + reações)

| Issue | Título | Comentários | 👍 | Categoria |
|-------|--------|:-----------:|:--:|-----------|
| [#8177](https://github.com/zeroclaw-labs/zeroclaw/issues/8177) | RFC: Supply chain signing (PGP, hermetic builds, SLSA) | 11 | 0 | Security/Architecture |
| [#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) | Per-sender RBAC for multi-tenant | 10 | 0 | Security/Multi-tenancy |
| [#3566](https://github.com/zeroclaw-labs/zeroclaw/issues/3566) | A2A (Agent-to-Agent) Protocol Support | 8 | **7** | Interoperability |
| [#2767](https://github.com/zeroclaw-labs/zeroclaw/issues/2767) | Multi-Agent Routing | 6 | **9** | Architecture |
| [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) | RFC: OIDC authentication provider | 7 | 0 | Security |
| [#6293](https://github.com/zeroclaw-labs/zeroclaw/issues/6293) | Air-gapped execution mode | 5 | 0 | Security/Architecture |
| [#8135](https://github.com/zeroclaw-labs/zeroclaw/issues/8135) | RFC: Wasm-first plugin runtime | 2 | 0 | Architecture/Plugin |

**Análise:** As demandas mais comentadas concentram-se em **segurança** (supply chain, OIDC, RBAC, air-gapped) e **arquitetura multi-agente** (A2A, routing). A issue de Multi-Agent Routing (#2767) tem o maior número de thumbs-up (9), indicando forte demanda da comunidade. O RFC de A2A Protocol (#3566) também demonstra interesse significativo em interoperabilidade com outros sistemas de agentes.

---

## 5. Bugs e Estabilidade

### 🔴 P1 — Críticos (S1 workflow blocked)

| Issue | Título | Severidade | Status |
|-------|--------|:----------:|--------|
| [#5869](https://github.com/zeroclaw-labs/zeroclaw/issues/5869) | RUSTSEC advisories cluster em rumqttc v0.25.1 (0049/0098/0099/0104/0134) | S1 | **BLOCKED** |
| [#8563](https://github.com/zeroclaw-labs/zeroclaw/issues/8563) | SOPs não disponíveis no chat do dashboard web | S1 | Accepted |
| [#8560](https://github.com/zeroclaw-labs/zeroclaw/issues/8560) | browser_open causa hang no agent turn (subprocess wait ilimitado) | S1 | **In Progress** |
| [#7527](https://github.com/zeroclaw-labs/zeroclaw/issues/7527) | macOS app não funciona (permissões não detectadas, crash) | S1 | **BLOCKED** |

### 🟡 P2 — Degraded Behavior

| Issue | Título | Severidade | Status |
|-------|--------|:----------:|--------|
| [#5628](https://github.com/zeroclaw-labs/zeroclaw/issues/5628) | Daemon auto-starts no boot, causa conflito de porta | S2 | Accepted |
| [#7521](https://github.com/zeroclaw-labs/zeroclaw/issues/7521) | file_read não decodifica charset non-UTF8 (cp1251/Latin-1) | S2 | Accepted |
| [#5269](https://github.com/zeroclaw-labs/zeroclaw/issues/5269) | Documentação de instalação incompleta | S2 | Accepted |

**⚠️ Alerta:** A vulnerabilidade de segurança em rumqttc (#5869) está **bloqueada** e não pode ser resolvida até que o upstream corrija o transitive dependency. Isso representa risco potencial para instalações em produção.

---

## 6. Pedidos de Features e Sinais de Roadmap

### RFCs em Andamento (Arquitetura)

| Issue | Título | Target | Prioridade |
|-------|--------|--------|:----------:|
| [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) | OIDC authentication provider support | v0.9.0 | P2 |
| [#7218](https://github.com/zeroclaw-labs/zeroclaw/issues/7218) | A2A agent discovery (.well-known/agent-card.json) | — | P2 |
| [#8177](https://github.com/zeroclaw-labs/zeroclaw/issues/8177) | Supply chain signing + SLSA provenance | — | P2 |
| [#8135](https://github.com/zeroclaw-labs/zeroclaw/issues/8135) | Wasm-first plugin runtime (default-on) | — | P2 |
| [#6293](https://github.com/zeroclaw-labs/zeroclaw/issues/6293) | Air-gapped execution mode com unix socket | — | P2 |
| [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) | Decouple memory lifecycle policy | — | P2 |

### Features Solicitadas

| Issue | Título | Status | Prioridade |
|-------|--------|--------|:----------:|
| [#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) | Per-sender RBAC para deployments multi-tenant | Accepted | P2 |
| [#3566](https://github.com/zeroclaw-labs/zeroclaw/issues/3566) | A2A Protocol Support nativo | Accepted | P2 |
| [#2767](https://github.com/zeroclaw-labs/zeroclaw/issues/2767) | Multi-Agent Routing (múltiplos agentes isolados) | Accepted | P2 |
| [#6378](https://github.com/zeroclaw-labs/zeroclaw/issues/6378) | Discord Bot responder apenas em canais específicos | Accepted | P2 |
| [#8891](https://github.com/zeroclaw-labs/zeroclaw/issues/8891) | **Tracker:** Persistent memory — wire curation/relevance/operability | **In Progress** | P2 |
| [#6641](https://github.com/zeroclaw-labs/zeroclaw/issues/6641) | Turn-level OTel trace correlation | **In Progress** | P2 |

**Sinais de Roadmap:** O tracker de persistent memory (#8891) está em progresso ativo, sugerindo foco em memória persistente cross-session para a próxima iteração. O ecossistema A2A/multi-agent parece ser direção estratégica clara.

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

1. **Instalação e primeira experiência:**
   - Documentação de instalação incompleta ([#5269](https://github.com/zeroclaw-labs/zeroclaw/issues/5269))
   - Falta documentação para cronjobs com modelo específico ([#7762](https://github.com/zeroclaw-labs/zeroclaw/issues/7762))

2. **Usabilidade de Canais:**
   - Discord bot responde em todos os canais sem controle ([#6378](https://github.com/zeroclaw-labs/zeroclaw/issues/6378))
   - macOS app completamente quebrado ([#7527](https://github.com/zeroclaw-labs/zeroclaw/issues/7527))

3. **Segurança e Multi-tenancy:**
   - Necessidade de RBAC por sender para servir múltiplos tenants ([#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982))
   - Vulnerabilidades RUSTSEC em dependência MQTT bloqueando upgrades ([#5869](https://github.com/zeroclaw-labs/zeroclaw/issues/5869))

4. **Funcionalidade Core:**
   - SOPs não carregam no dashboard web — workflow bloqueado ([#8563](https://github.com/zeroclaw-labs/zeroclaw/issues/8563))
   - browser_open causa hang — UX quebrada ([#8560](https://github.com/zeroclaw-labs/zeroclaw/issues/8560))
   - Leitura de arquivos com encoding não-UTF8 falha silenciosamente ([#7521](https://github.com/zeroclaw-labs/zeroclaw/issues/7521))

### Cenários de Uso Reportados

- **Desenvolvimento remoto:** Necessidade de rodar web dev server em máquina separada do gateway ([#8426](https://github.com/zeroclaw-labs/zeroclaw/pull/8426) — resolvido)
- **Multi-agente:** Usuários querem múltiplos agentes isolados com workspaces separados ([#2767](https://github.com/zeroclaw-labs/zeroclaw/issues/2767))
- **Interoperabilidade:** Conexão com agentes externos via protocolo A2A ([#3566](https://github.com/zeroclaw-labs/zeroclaw/issues/3566))
- **Ambientes air-gapped:** Execução offline com daemon companion ([#6293](https://github.com/zeroclaw-labs/zeroclaw/issues/6293))

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Bloqueadas por Longo Tempo

| Issue | Título | Criado | Atualizado | Status | Observação |
|-------|--------|--------|-----------|--------|------------|
| [#5869](https://github.com/zeroclaw-labs/zeroclaw/issues/5869) | RUSTSEC advisories em rumqttc | 2026-04-18 | 2026-07-17 | **BLOCKED** | Depende de upstream fix |
| [#6293](https://github.com/zeroclaw-labs/zeroclaw/issues/6293) | Air-gapped execution mode | 2026-05-03 | 2026-07-17 | **BLOCKED** | needs-author-action |
| [#7527](https://github.com/zeroclaw-labs/zeroclaw/issues/7527) | macOS app não funciona | 2026-06-12 | 2026-07-17 | **BLOCKED** | Sem solução ainda |
| [#8033](https://github.com/zeroclaw-labs/zeroclaw/pull/8033) | Onboarding spec-driven flow | 2026-06-20 | 2026-07-17 | **BLOCKED** | PR aguardando ação |


</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*