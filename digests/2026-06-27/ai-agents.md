# Resumo diário do ecossistema de agentes de IA 2026-06-27

> Issues: 1 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-06-26 21:14 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal


# Relatório de Projeto: NullClaw
## Período: 2026-06-27

---

## 1. Panorama do Dia

O projeto NullClaw apresenta **atividade muito baixa** no período analisado. Apenas **1 issue foi atualizada** nas últimas 24h, sem movimentação em pull requests ou novos lançamentos. O repositório mantém 1 issue aberta relacionada a um bug crítico de build em plataformas Android/Termux (aarch64), que permanece sem resolução há mais de 2 meses. O ecossistema indica estagnação temporária, possivelmente relacionada ao período ou à maturidade do projeto.

---

## 2. Lançamentos

**Nenhum release nas últimas 24h.**

O último release mencionado pelo usuário foi **v2026.4.17** (abril de 2026), indicando um intervalo de ~2 meses sem atualizações de versão. Recomenda-se verificar a branch principal para confirmar se há work-in-progress para próximas releases.

---

## 3. Progresso do Projeto

**Nenhum PR merged ou fechado nas últimas 24h.**

A ausência de atividade em PRs pode indicar:
- Fase de discussão/preparação de kontribusições
- Projeto em modo de manutenção
- Período de baixa contribuição da comunidade

---

## 4. Temas Quentes da Comunidade

### Issue em Destaque

| # | Título | Autor | Comentários | Reactions |
|---|--------|-------|-------------|-----------|
| [#868](https://github.com/nullclaw/nullclaw/issues/868) | [bug] zig build fails on Android/Termux (aarch64) with AccessDenied on options.zig linkat | NOTJuangamer10 | 3 | 0 👍 |

**Análise:** Issue aberta desde 2026-04-23 (65 dias), atualizada em 2026-06-26. O problema afeta usuários em dispositivos móveis (Xiaomi Redmi Note 9 rodando LineageOS 22.2 com Termux), indicando demanda por portabilidade para ARM64. A ausência de reactions sugere baixa urgência percebida pela comunidade, mas o bug é **bloqueante** para o target Android/Termux.

---

## 5. Bugs e Estabilidade

| Severidade | Count | Issues |
|------------|-------|--------|
| **Crítica** | 1 | [#868](https://github.com/nullclaw/nullclaw/issues/868) - Build falha em aarch64 |
| Alta | 0 | - |
| Média | 0 | - |
| Baixa | 0 | - |

### Detalhe do Bug Crítico

**[#868](https://github.com/nullclaw/nullclaw/issues/868)** - Build falha em Android/Termux com `AccessDenied` ao linkar `options.zig`

- **Ambiente:** LineageOS 22.2, Termux, Zig 0.16.0, aarch64
- **Erro:** `failed to link temporary file into '.z...'`
- **Impacto:** Impossibilita build em dispositivos ARM64 móveis
- **Status:** Aberto há 65 dias, 3 comentários (provavelmente triagem/debugging)

**Recomendação:** Priorizar resolução ou atribuir triagem clara para evitar acúmulo de issues não resolvidas.

---

## 6. Pedidos de Features e Sinais de Roadmap

**Nenhum novo feature request nas últimas 24h.**

A ausência de FRs pode indicar:
- Projeto maduro com features suficientes para o momento atual
- Falta de comunicação sobre roadmap futuro
- Comunidade pequena/atrelada a contribuições internas

---

## 7. Resumo de Feedback dos Usuários

### Feedback Identificado

| Tipo | Origem | Tema | Sentimento |
|------|--------|------|------------|
| Bug report | NOTJuangamer10 (Issue #868) | Compatibilidade Android/Termux | Negativo ⚠️ |

**Análise:** O único feedback identificado demonstra **frustração com barreira de portabilidade**. O usuário investiu tempo reportando ambiente detalhado (dispositivo, SO, shell, arch, versões), indicando alto engajamento. A demora na resolução pode gerar churn em usuários mobile.

---

## 8. Backlog que Merece Atenção

### Issues sem resposta há >30 dias

| # | Título | Criado | Atualizado | Dias Inativo | Prioridade |
|---|--------|--------|------------|--------------|------------|
| [#868](https://github.com/nullclaw/nullclaw/issues/868) | Bug: zig build fails on Android/Termux (aarch64) | 2026-04-23 | 2026-06-26 | 1 dia* | 🔴 Alta |

*A issue foi atualizada ontem (2026-06-26), mas permanece aberta há ~65 dias no total.

**Recomendação para Maintainers:**
1. **Priorizar [#868](https://github.com/nullclaw/nullclaw/issues/868)** - Bug de build em platform crítica
2. Considerar atribuir labels de "help wanted" ou "good first issue" se precisar de contribuições externas
3. Comunicar timeline de resolução aos usuários afetados

---

## Métricas Resumidas do Período

| Métrica | Valor |
|---------|-------|
| Issues abertas/ativas (24h) | 1 |
| Issues fechadas (24h) | 0 |
| PRs abertas (24h) | 0 |
| PRs merged/fechadas (24h) | 0 |
| Releases (24h) | 0 |
| Nível de atividade | 🔴 Muito Baixo |

---

*Relatório gerado em 2026-06-27 com base em dados do GitHub do projeto [nullclaw/nullclaw](https://github.com/nullclaw/nullclaw).*

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo do Ecossistema de Agentes de IA Open Source

**Data de Referência:** 2026-06-27  
**Projetos Analisados:** NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw (QwenPaw), ZeroClaw

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source demonstra **duas velocidades distintas** em 2026-06-27. Por um lado, **cinco projetos mantêm atividade intensa** (NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw, ZeroClaw) com volumes de 50+ PRs/issues atualizados em 24h, indicando ciclos de desenvolvimento acelerado e comunidades engajadas. Por outro, **NullClaw apresenta estagnação completa**, sinalizando possível abandono ou transição de foco. Observa-se convergência em três vetores técnicos: (1) endurecimento de segurança com ênfase em bypass de exec e supply chain, (2) expansão de canais de comunicação (Telegram, WhatsApp, DingTalk, Slack) e (3) features de plataforma como plugin systems e multi-tenant capability. A maioria dos projetos está em fase pré-release, sugerindo que 2026下半 é o período de maturação do ecossistema.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | Releases (24h) | PRs Merged | Saúde | Tendência |
|---------|--------------|-----------|----------------|------------|-------|-----------|
| **NullClaw** | 1 | 0 | 0 | 0 | 🔴 Crítica | Estagnação |
| **NanoBot** | 28 | 48 | 0 | 6 | 🟡 Moderada | Crescendo |
| **Hermes Agent** | 50 | 50 | 0 | 0 | 🟠 Atenção | Estável-alta |
| **PicoClaw** | 5 | 18 | 0 | 14 | 🟢 Boa | Consolidando |
| **IronClaw** | 34 | 50 | 0 | ~10 | 🟢 Boa | Acelerando |
| **CoPaw** | 30 | 50 | **1** (v2.0.0-beta.1) | 25 | 🟢 Boa | Transicionando |
| **ZeroClaw** | 50 | 50 | **1** (v0.8.2) | 4 | 🟢 Boa | Madurando |

**Observações:**
- **NullClaw** é outlier negativo com apenas 1 issue ativa e zero PRs — projeto em modo de manutenção ou abandono
- **CoPaw e ZeroClaw** são únicos com releases formais, indicando maturidade superior
- **IronClaw e Hermes Agent** lideram em volume absoluto de atividade
- **PicoClaw** demonstra melhor taxa de merge (14/18 PRs), indicando disciplina de code review

---

## 3. Posicionamento do Projeto Principal (IronClaw)

### Vantagens Competitivas

| Dimensão | IronClaw | Posição Relativa |
|----------|----------|------------------|
| **Volume de atividade** | 34 issues + 50 PRs/24h | 🟢 Líder junto com Hermes/ZeroClaw |
| **Segurança** | NoExposureGuard, AuthorizedDispatchRequest, capability policy | 🟢 Avançado — foco em multi-tenant enterprise |
| **Arquitetura** | Reborn v2 + Engine v2, CodeAct com shims Pythonic | 🟢 Diferenciado — coexecução de stacks |
| **Infraestrutura de testes** | PinchBench, ClawBench, E2E with mock-LLM | 🟢 Superior — benchmark-driven development |
| **Roadmap** | Browser automation via Chrome+CDP, Configuration-as-Code | 🟢 Longo prazo — diferenciação estratégica |

### Diferenças Técnicas Significativas

- **Capability Dispatcher** com prova de dispatch exigida — modelo de segurança mais rigoroso que allowlists simples
- **Epic de browser automation** com perfis criptografados e CDP nativo em Rust — caso de uso unique no ecossistema
- **Delta store** libSQL-backed para resolução de capabilities — arquitetura distribuída-ready
- **Dependabot massivo** (47 updates agrupadas) — gestão proativa de dívida técnica

### Tamanho da Comunidade

Baseado na atividade de 24h, IronClaw possui a **terceira maior base de contribuidores** (atrás de Hermes Agent e ZeroClaw em volume, mas com contributors mais diversos — 10+ autores distintos observados). A presença de dogfooding intenso (issues de `sunglow666` indicando uso em produção) sugere adoção real.

---

## 4. Focos Técnicos Compartilhados

### 4.1 Endurecimento de Segurança

Seis de sete projetos enfrentam vulnerabilidades de bypass em exec tools ou canais:

| Projeto | Vulnerabilidades de Segurança Reportadas |
|---------|------------------------------------------|
| **NanoBot** | 7 issues de segurança (MCP bypass, exec.allowPatterns bypass, malicious PyPI package) |
| **Hermes Agent** | Memory-context leak, role impersonation, ASGI path gating |
| **PicoClaw** | SSRF via ISATAP IPv6 literals (já corrigido via #3143) |
| **IronClaw** | NoExposureGuard, capability policy hardening |
| **ZeroClaw** | SBOM generation, SLSA, supply chain signing RFC |
| **CoPaw** | Sanitização de schemas com `type: "null"` |

**Conclusão:** Bypass de allowlist em exec tools é o **problema de segurança mais prevalente** no ecossistema.

### 4.2 Estabilidade Multi-Plataforma

| Plataforma | Projetos Afetados | Tipo de Problema |
|------------|-------------------|-------------------|
| **Windows** | NanoBot | Restart, background, shell inconsistencies |
| **macOS** | Hermes Agent | launchd restart, Ollama 503 |
| **Android** | NullClaw, PicoClaw | Build failure, service crash |
| **NixOS** | Hermes Agent | python-telegram-bot ausente |
| **Docker** | PicoClaw, NanoBot | WebSocket timeouts, process orphans |

### 4.3 Expansão de Canais

Demanda consistente por novos canais de comunicação:

| Canal | Projetos com Issues/PRs |
|-------|------------------------|
| **Telegram** | Hermes Agent, PicoClaw, IronClaw (4+ issues em cada) |
| **WhatsApp** | PicoClaw (websocket stability) |
| **DingTalk** | ZeroClaw (streaming support request) |
| **Slack** | CoPaw (feature request #5152 — closed) |
| **DeltaChat** | PicoClaw (PR #3063 em progresso) |
| **Feishu/飞书** | CoPaw, PicoClaw |

### 4.4 Features de Plataforma

| Feature | Projetos com Implementação |
|---------|---------------------------|
| **Plugin System** | NanoBot (#4558), IronClaw (capability policy), ZeroClaw (Wasm-first) |
| **Per-session Model** | NanoBot (#4555), Hermes Agent (Claude Code integration) |
| **TTS/Voice Output** | NanoBot (#4560), Hermes Agent (QQ bot TTS) |
| **Audit Trail** | Hermes Agent (SHA-256 hash-chain), ZeroClaw (SBOM) |
| **Browser Automation** | IronClaw (CDP + Chrome), CoPaw (browser_use integration) |

---

## 5. Análise de Diferenciação

### 5.1 Por Público-Alvo

| Projeto | Público Primário | Evidência |
|---------|------------------|-----------|
| **IronClaw** | Enterprise multi-tenant | Capability policy, admin REST surface, Delta store, multi-identity browser |
| **ZeroClaw** | IoT/Edge + Enterprise | Wasm-first runtime, WASI hardware access (GPIO/I2C), SLSA compliance |
| **NanoBot** | Desenvolvedores individuais | Crawl4AI, TTS, exec tool flexível, minimal Docker footprint |
| **Hermes Agent** | Usuários macOS/Apple | iMessage (Photon), Telegram focus, Desktop app |
| **CoPaw** | Usuários não-técnicos | Desktop app maduro, splash screen, graceful shutdown |
| **PicoClaw** | Multi-canal operators | WhatsApp, Telegram, OneBot, DeltaChat — todos simultaneamente |
| **NullClaw** | Desconhecido | Projeto estagnado — público original indefinido |

### 5.2 Por Arquitetura Técnica

| Arquitetura | Projetos | Implicação |
|-------------|----------|------------|
| **Wasm-first** | ZeroClaw | Portabilidade universal, sandboxing forte, eliminação de Node.js |
| **AgentScope 2.x** | CoPaw | Modularidade via framework dedicado |
| **Reborn + Engine v2** | IronClaw | Coexecução de stacks legacy e novo |
| **Go nativo** | PicoClaw | Performance, binário único, cross-compile fácil |
| **Zig** | NullClaw | Systems programming, targeting mobile (estagnado) |

### 5.3 Por Estratégia de Release

| Estratégia | Projetos | Comportamento |
|------------|----------|---------------|
| **Continuous delivery** | IronClaw, Hermes, NanoBot | Merges frequentes, sem tags formais |
| **Beta/release candidates** | CoPaw | v2.0.0-beta.1 com breaking changes documentadas |
| **Semantic versioning** | ZeroClaw | Releases formais com changelog (v0.8.2) |
| **Estagnado** | NullClaw | Última release há 2 meses |

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração

| Projeto | PRs Merged/24h | Taxa de Merge | Velocidade |
|---------|----------------|---------------|------------|
| **CoPaw** | 25 | ~50% | 🟢 Muito alta —beta launch |
| **PicoClaw** | 14 | ~78% | 🟢 Alta — disciplina de review |
| **IronClaw** | ~10 | ~20% | 🟡 Moderada — many WIP PRs |
| **NanoBot** | 6 | ~12% | 🟡 Moderada — high WIP ratio |
| **ZeroClaw** | 4 | ~8% | 🟡 Moderada — focus on big PRs |
| **Hermes Agent** | 0 | 0% | 🔴 Estagnado em review |
| **NullClaw** | 0 | N/A | 🔴 Inativo |

### 6.2 Maturidade Organizacional

| Indicador | Projetos Maduros | Projetos Em Desenvolvimento |
|-----------|------------------|---------------------------|
| **Release notes formais** | ZeroClaw, CoPaw | IronClaw, Hermes |
| **Roadmap público** | ZeroClaw (RFCs), IronClaw (epics) | NanoBot, Hermes |
| **Segurança processual** | SBOM, SLSA, CVE tracking (ZeroClaw, IronClaw, NanoBot) | PicoClaw, CoPaw |
| **Test infrastructure** | IronClaw (benchmarks, E2E), CoPaw (playwright) | Hermes, NullClaw |
| **Breaking changes docs** | CoPaw v2.0 migration guide | Outros — informal |

### 6.3 Concentração de Contribuição (Bus Factor Signal)

| Projeto | Contribuidor Principal | % de PRs | Risco |
|---------|------------------------|----------|-------|
| **NanoBot** | dajiaohuang | ~70% | 🔴 Alto |
| **CoPaw** | wananing, nguyenthanhthe | ~50% combinado | 🟡 Médio |
| **PicoClaw** | Alix-007, chengzhichao-xydt | ~60% combinado | 🟡 Médio |
| **IronClaw** | Diversos | Distribuído | 🟢 Baixo |
| **ZeroClaw** | Diversos | Distribuído | 🟢 Baixo |
| **Hermes Agent** | Indefinido | — | 🟠 Desconhecido |

---

## 7. Sinais de Tendência

### 7.1 Tendências de Mercado Extraídas

**1. Segurança como requisito fundamental (não diferencial)**
> 7 vulnerabilidades críticas em NanoBot, memory-context leak em Hermes, SSRF em PicoClaw, supply chain em ZeroClaw.

O ecossistema está aprendendo que exec tools e canais de comunicação são vetores de ataque primários. A tendência é para **capability-based security** (IronClaw), **allowlist com bypass protection** (NanoBot), e **SBOM + SLSA compliance** (ZeroClaw).

**2. Multi-canal como expectation baseline**
> PicoClaw, Hermes Agent, CoPaw, e IronClaw investem simultaneamente em Telegram, WhatsApp, DingTalk, Feishu, Discord, Slack.

Usuários esperam agentes que operem onde eles estão — não o contrário. A diferenciação futura será **qualidade de implementação por canal** (streaming, attachments, threading) e não quantidade de canais.

**3. Enterprise readiness em desenvolvimento**
> Capability policy (IronClaw), Wasm-first runtime (ZeroClaw), per-user authentication (IronClaw), SLSA compliance (ZeroClaw).

O próximo fronteira é **adoção corporativa**, que exige multi-tenant isolation, audit trails, SLSA compliance, e IdP integration. Projetos sem roadmap nesta direção provavelmente serão superados.

**4. Voice e output diversity**
> TTS em NanoBot (#4560), QQ bot TTS em Hermes, streaming messages em DingTalk (ZeroClaw).

Além de texto, agentes estão se tornando **interfaces multimodais**. A tendência é suporte a voice output (TTS), streaming de respostas longas, e agregação de mensagens em tempo real.

**5. Browser automation como diferenciador estratégico**
> IronClaw epic #2355: Persistent multi-identity browser via Chrome + CDP com perfis criptografados.

A capacidade de navegar, autenticar, e manter sessões web é vista como **diferenciador de longo prazo**. A arquitetura Rust+CDP de IronClaw posiciona o projeto para este cenário.

**6. Plugin systems para extensibilidade**
> NanoBot (#4558), IronClaw (capability policy), ZeroClaw (Wasm-first plugins).

A comunidade quer agentes como **plataformas**, não aplicações fixed-function. A tendência é para plugin systems baseados em capabilities e não apenas em scripts.

### 7.2 Projeções para Próximos 6 Meses

| Tendência | Confiança | Timeline |
|-----------|-----------|----------|
| **Consolidação de 2-3 projetos dominantes** | Alta | 2026-Q3 |
| **Adoção enterprise grows** | Alta | 2026-Q3/Q4 |
| **Primeiro "killer app" emerge** | Média | 2026-Q4 |
| **Mergers ou forks de projetos estagnados** | Alta | 2026-Q3 |
| **Padronização de capability-based security** | Média | 2026-Q4 |
| **NullClaw abandonado ou relançado** | Alta | 2026-Q3 |

---

## 8. Recomendações

### Para Desenvolvedores Escolhendo Plataforma

1. **Para projetos greenfield:** Considerar **IronClaw** (segurança mature, comunidade ativa) ou **ZeroClaw** (Wasm-first, enterprise-ready)
2. **Para integração rápida:** **NanoBot** (high velocity, many integrations) com atenção à segurança
3. **Para desktop-first:** **CoPaw** (v2.0-beta, UX maduro)
4. **Para multi-canal operator:** **PicoClaw** (melhor disciplina de código)

### Para Projetos do Ecossistema

1. **NullClaw:** Decisão estratégica necessária — relançar com nova visão ou arquivar
2. **Hermes Agent:** Priorizar review de PRs de segurança (bloqueados há dias)
3. **NanoBot:** Diversificar contribuidores para reduzir bus factor
4. **Todos:** Adoptar SBOM + SLSA como padrão de facto

---

*Relatório gerado em 2026-06-27 com base em dados públicos do GitHub. Métricas são instantâneas e refletem atividade de 24h.*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>


# Relatório do Projeto NanoBot — 2026-06-27

---

## 1. Panorama do Dia

O projeto NanoBot demonstra **altíssima atividade** nas últimas 24h, com 28 issues e 48 PRs atualizados. A equipe de desenvolvimento está em ritmo intenso de contribuições, com 6 PRs já merged/fechados e 42 aguardando review. Observa-se um foco significativo em **segurança** (7 issues de vulnerabilidades relacionadas ao exec tool e MCP), **suporte a plataforma Windows** (4 bugs críticos sobre comportamento de restart e shell) e **expansão de funcionalidades** (plugin system, TTS, Crawl4AI, per-session models). A ausência de releases novas indica que a equipe está consolidando contribuições antes de um próximo versionamento.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

O projeto não emitiu novas versões desde ontem. A concentração de PRs abertos (42) sugere que um release está sendo preparado com múltiplas features e correções acumuladas.

---

## 3. Progresso do Projeto

### PRs Recentemente Merged/Fechados (6)

| # | Título | Autor | Status | Impacto |
|---|--------|-------|--------|---------|
| [#4550](https://github.com/HKUDS/nanobot/pull/4550) | fix(cron): use per-run session key | dajiaohuang | CLOSED | Corrige vazamento de contexto entre execuções cron |
| [#4549](https://github.com/HKUDS/nanobot/pull/4549) | feat(heartbeat): add model_override | dajiaohuang | CLOSED | Permite heartbeat com modelo mais barato |
| [#4548](https://github.com/HKUDS/nanobot/pull/4548) | feat(api): require api_key | dajiaohuang | CLOSED | Paridade de segurança com WS gateway |
| [#4547](https://github.com/HKUDS/nanobot/pull/4547) | fix(gateway): self-heal state file PID | dajiaohuang | CLOSED | Conserto de --background no Windows |
| [#4546](https://github.com/HKUDS/nanobot/pull/4546) | fix(restart): use subprocess.Popen | dajiaohuang | CLOSED | Compatibilidade com nssm no Windows |
| [#4545](https://github.com/HKUDS/nanobot/pull/4545) | fix(exec): default to PowerShell | dajiaohuang | CLOSED | Shell consistente no Windows |

### PRs em Aberto Destacáveis (20 principais)

| # | Título | Autor | Impacto |
|---|--------|-------|---------|
| [#4561](https://github.com/HKUDS/nanobot/pull/4561) | feat(web): Crawl4AI web fetch | dajiaohuang | Feature: suporte a Crawl4AI |
| [#4560](https://github.com/HKUDS/nanobot/pull/4560) | feat(tools): TTS tool | dajiaohuang | Feature: voice output |
| [#4559](https://github.com/HKUDS/nanobot/pull/4559) | feat(tools): agent_delegate | dajiaohuang | Feature: delegação para agentes externos |
| [#4558](https://github.com/HKUDS/nanobot/pull/4558) | feat(plugins): plugin system | dajiaohuang | Feature: sistema de plugins |
| [#4557](https://github.com/HKUDS/nanobot/pull/4557) | perf(runner): parallel tool calls | dajiaohuang | Performance: execução paralela |
| [#4556](https://github.com/HKUDS/nanobot/pull/4556) | feat(dream): model_override | dajiaohuang | Feature: override para Dream |
| [#4555](https://github.com/HKUDS/nanobot/pull/4555) | feat: per-session model preset | dajiaohuang | Feature: modelo por conversa |
| [#4554](https://github.com/HKUDS/nanobot/pull/4554) | fix(memory): block Dream duplicates | michaelxer | Bugfix: skills duplicadas |
| [#4553](https://github.com/HKUDS/nanobot/pull/4553) | feat(heartbeat): channel delivery | dajiaohuang | Feature: roteamento fixo |
| [#4552](https://github.com/HKUDS/nanobot/pull/4552) | feat: reasoning effort escalation | dajiaohuang | Feature: escalação de reasoning |
| [#4551](https://github.com/HKUDS/nanobot/pull/4551) | feat(heartbeat): isolated_session | dajiaohuang | Feature: sessão compartilhada |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários + reações)

| # | Título | Autor | 💬 | 👍 | Categoria |
|---|--------|-------|----|----|-----------|
| [#660](https://github.com/HKUDS/nanobot/issues/660) | Ultra-lightweight vs Node.js dep | besoeasy | 12 | 5 | Bug/Claims |
| [#2439](https://github.com/HKUDS/nanobot/issues/2439) | **Malicious code in PyPI** | xiaomukuaier | 6 | 4 | **CRITICAL Security** |
| [#143](https://github.com/HKUDS/nanobot/issues/143) | Filesystem tools bypass workspace | skhsu4321 | 3 | 4 | Security |
| [#4253](https://github.com/HKUDS/nanobot/issues/4253) | Per-conversation model override | rombert | 4 | 0 | Feature |
| [#2231](https://github.com/HKUDS/nanobot/issues/2231) | Plugin system request | andrader | 4 | 0 | Feature |

### Análise dos Temas

1. **Branding vs Realidade (#660)**: Usuários questionam a claim "ultra-lightweight" vs dependência Node.js no Dockerfile. Este é um tema recorrente que afeta a percepção do projeto.

2. **Vulnerabilidades Críticas (#2439)**: Code malicioso encontrado no pacote PyPI `nanobot-ai` v0.1.4.post5 — prioridade máxima.

3. **Extensibilidade**: Demanda clara por plugin system (#2231) e delegação para agentes externos (#3436), indicando que usuários querem NanoBot como plataforma.

---

## 5. Bugs e Estabilidade

### Issues de Segurança (7 total — PRIORIDADE CRÍTICA)

| # | Severidade | Título |
|---|------------|--------|
| [#2439](https://github.com/HKUDS/nanobot/issues/2439) | **CRITICAL** | Malicious data-exfiltration in PyPI package |
| [#4519](https://github.com/HKUDS/nanobot/issues/4519) | Alta | MCP enabledTools Scope Bypass |
| [#4514](https://github.com/HKUDS/nanobot/issues/4514) | Alta | exec.allowPatterns whitelist bypass |
| [#4515](https://github.com/HKUDS/nanobot/issues/4515) | Alta | exec.allow_patterns comment-tail bypass |
| [#4516](https://github.com/HKUDS/nanobot/issues/4516) | Alta | ExecTool allowlist wrapper bypass |
| [#4520](https://github.com/HKUDS/nanobot/issues/4520) | Alta | exec.allowPatterns bypass via API |
| [#4073](https://github.com/HKUDS/nanobot/issues/4073) | Média | extra_allowed_dirs treated as writable roots |
| [#143](https://github.com/HKUDS/nanobot/issues/143) | Média | Filesystem tools bypass restrict_to_workspace |

### Bugs Funcionais (4)

| # | Severidade | Título |
|---|------------|--------|
| [#4511](https://github.com/HKUDS/nanobot/issues/4511) | Alta | Windows: --background state file inconsistency |
| [#4513](https://github.com/HKUDS/nanobot/issues/4513) | Alta | Windows: /restart com nssm service manager |
| [#4544](https://github.com/HKUDS/nanobot/issues/4544) | Média | Windows: exec inconsistente cmd.exe vs PowerShell |
| [#4539](https://github.com/HKUDS/nanobot/issues/4539) | Média | Telegram messages not rendering on web |

### Análise

Há um **padrão claro de problemas no Windows** (4 issues) e **vulnerabilidades no exec tool** (6 bypasses). A equipe já respondeu com PRs corretivos para todos os bugs Windows (#4545-#4547).

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Solicitadas (por impacto potencial)

| # | Título | 👍 | Status | Roadmap Signal |
|---|--------|----|--------|----------------|
| [#2231](https://github.com/HKUDS/nanobot/issues/2231) | Plugin system | 0 | PR #4558 open | **Alta probabilidade** |
| [#4010](https://github.com/HKUDS/nanobot/issues/4010) | Text-to-speech output | 1 | PR #4560 open | **Alta probabilidade** |
| [#2700](https://github.com/HKUDS/nanobot/issues/2700) | Crawl4AI support | 0 | PR #4561 open | **Alta probabilidade** |
| [#4253](https://github.com/HKUDS/nanobot/issues/4253) | Per-conversation model | 0 | PR #4555 open | **Alta probabilidade** |
| [#4419](https://github.com/HKUDS/nanobot/issues/4419) | Reasoning effort escalation | 0 | PR #4552 open | **Alta probabilidade** |
| [#3436](https://github.com/HKUDS/nanobot/issues/3436) | External agent delegation | 0 | PR #4559 open | **Média probabilidade** |
| [#4508](https://github.com/HKUDS/nanobot/issues/4508) | ask_clarification tool | 0 | Open | Needs design |

### Sinais de Evolução do Produto

1. **Extensibilidade**: Plugin system, agent delegation — indica movimento para plataforma
2. **Voice/Output**: TTS suportado (edge-tts, macOS say, espeak-ng, Windows SAPI)
3. **Flexibilidade de Modelo**: Per-session models, heartbeat-specific models, Dream overrides
4. **Performance**: Parallel tool execution trusting LLM judgment

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Dor | Evidência | Severidade |
|-----|-----------|------------|
| **Segurança do exec tool** | 6 vulnerabilidades de bypass | Crítica |
| **Package malicioso no PyPI** | #2439 | Crítica |
| **Problemas no Windows** | 4 issues sobre restart, background, shell | Alta |
| **Inconsistência de branding** | #660 questiona "ultra-lightweight" | Média |
| **Limitações de modelos** | #4253 quer alternar modelos por contexto | Média |

### Cenários de Uso Emergentes

1. **Privacidade variável**: Usuários alternando entre modelos locais (llamacpp) e cloud (openrouter) por requisitos de privacidade (#4253)
2. **Multi-canal**: Heartbeat deliveries sendo esperados no canal correto (#4418, #1899)
3. **Agentes externos**: Desejo de integrar Claude Code, Codex, opencode como backends (#3436, #3024)
4. **Automação com cron**: Jobs silenciosos que só reportam quando necessário (#4357)

### Satisfação

A comunidade demonstra **alta confiança** ao contribuir com código — 20 PRs substanciais em 24h. As features propostas têm overlap com necessidades reais documentadas em issues.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Stale

| # | Título | Criado | Atualizado | Status |
|---|--------|--------|------------|--------|
| [#660](https://github.com/HKUDS/nanobot/issues/660) | Ultra-lightweight claim vs Node.js | 2026-02-14 | 2026-06-26 | Open (needs triagem) |
| [#143](https://github.com/HKUDS/nanobot/issues/143) | Filesystem tools bypass | 2026-02-05 | 2026-06-26 | Stale/Closed |
| [#1899](https://github.com/HKUDS/nanobot/issues/1899) | Heartbeat session isolation | 2026-03-11 | 2026-06-26 | Open (PR #4551 em curso) |

### Issues com Feature Requests Importantes Pendentes

| # | Título | Prioridade |
|---|--------|------------|
| [#4082](https://github.com/HKUDS/nanobot/issues/4082) | Cron jobs reuse session context (CRITICAL — PR #4550 merged) | ✅ Resolvido |
| [#3436](https://github.com/HKUDS/nanobot/issues/3436) | Call external agents (PR #4559 open) | ✅ Em progresso |
| [#3024](https://github.com/HKUDS/nanobot/issues/3024) | Claude Code Remote Session (PR #4559 open) | ✅ Em progresso |
| [#4010](https://github.com/HKUDS/nanobot/issues/4010) | TTS voice output (PR #4560 open) | ✅ Em progresso |

### Recomendação de Prioridade

1. **Imediata**: #2439 — pacote PyPI comprometido requer comunicação pública e CVE
2. **Esta semana**: Consolidar PRs de segurança (#4514, #4515, #4516, #4520) em release
3. **Este release**: Windows fixes (#4544, #4545, #4546, #4547) + feature drops (#4558, #4560, #4561)

---

## Métricas Resumidas

| Métrica | Valor |
|---------|-------|
| Issues ativas (24h) | 19 |
| Issues fechadas (24h) | 9 |
| PRs abertos (24h) | 42 |
| PRs merged/fechados (24h) | 6 |
| Novas releases | 0 |
| Security issues | 7 |
| Windows-related issues | 4 |
| Features em PR | 11 |
| Bus factor signal | Alto (dajiaohuang responsável por ~70% dos PRs) |

---

*Relatório gerado automaticamente com base nos dados do GitHub de 2026-06-27*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>


# Relatório do Projeto Hermes Agent — 2026-06-27

## 1. Panorama do Dia

O Hermes Agent manteve **alta atividade comunitária** nas últimas 24h, com 50 issues e 50 PRs atualizados. **Nenhum release foi publicado**, indicando que a base de código está em fase de estabilização pré-lançamento. Observa-se uma **concentração significativa de problemas P1** (7 bugs críticos), especialmente no gateway Telegram e na área de autenticação/ billing com provedores Anthropic. A segurança recebe atenção especial com ao menos 4 PRs de segurança em aberto. O projeto demonstra saúde operacional moderada, com backlog ativo mas sem progresso visível em merges nas últimas 24h.

---

## 2. Lançamentos

**Nenhum release nas últimas 24h.**

O projeto está sem atividade de release desde o período analisado. Recomenda-se monitorar o repositório para eventuais hotfixes urgentes que possam surgir da acumulação de bugs P1.

---

## 3. Progresso do Projeto

**Nenhum PR mergeado ou fechado nas últimas 24h.** Todos os 50 PRs listados permanecem em estado `OPEN`.

尽管没有合并，今天提交的几个 PR parecem ser **candidatos a merge iminente**, dado seu foco em correções críticas:

| PR | Descrição | Área | Relevância |
|----|-----------|------|------------|
| [#53222](https://github.com/NousResearch/hermes-agent/pull/53222) | Corrige vazamento de `<memory-context>` em canais externos (#40170) | Memory/Security | **Crítica** — endereça bug de segurança |
| [#53267](https://github.com/NousResearch/hermes-agent/pull/53267) | Suporte a tokens Codex com escopo de automação | Auth | **Alta** — melhora integração |
| [#53270](https://github.com/NousResearch/hermes-agent/pull/53270) | Flag `allow_silent` por job para briefing/report recorrentes | Cron | **Média** — qualidade de vida |
| [#53264](https://github.com/NousResearch/hermes-agent/pull/53264) | Endurecimento SMTP e caminhos de entrega cron | Email | **Média** — estabilidade |
| [#53266](https://github.com/NousResearch/hermes-agent/pull/53266) | Suprime loops exatos de heartbeat no Discord | Discord | **Média** — estabilidade |

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários + reações)

| Issue | Título | Comentários | 👍 | Área | Insight |
|-------|--------|-------------|-----|------|---------|
| [#487](https://github.com/NousResearch/hermes-agent/issues/487) | **Cryptographic Audit Trail — SHA-256 Hash-Chained Action Log** | 25 | 0 | Feature | Demanda por **trazabilidade e accountability** em ações de agente — inspirado em OpenFang (Rust). Feature complexa, mas com forte justificativa de segurança. |
| [#38240](https://github.com/NousResearch/hermes-agent/issues/38240) | Skills index is stale or degraded | 17 | 0 | Bug/P3 | **Degradação automatizada** do índice de skills — afeta integridade da documentação. |
| [#42006](https://github.com/NousResearch/hermes-agent/issues/42006) | macOS launchd restart failure | 7 | 0 | Bug/P1 | Problema específico de macOS que afeta **atualizações em produção**. |
| [#29325](https://github.com/NousResearch/hermes-agent/issues/29325) | Telegram polling 409 Conflict | 7 | 0 | Bug/P2 | Conflito de polling Telegram em **ambiente macOS**. |
| [#25839](https://github.com/NousResearch/hermes-agent/issues/25839) | **Security: System impersonates user role** | 6 | 0 | Security/P1 | ⚠️ **Vulnerabilidade grave** — agente pode modificar skills sem consentimento. |
| [#27047](https://github.com/NousResearch/hermes-agent/issues/27047) | NixOS: python-telegram-bot not installed | 3 | **4** | Bug/P2 | **Maior reação** do período — usuários Nix querem suporte robusto. |

### Análise de Demandas

**Segurança emerge como tema central:**
- Issue [#25839](https://github.com/NousResearch/hermes-agent/issues/25839) com 6 comentários sobre impersonificação de role
- Issue [#40170](https://github.com/NousResearch/hermes-agent/issues/40170) sobre vazamento de contexto de memória para usuários finais
- Múltiplos PRs de segurança em revisão (ASGI path gating, redações de erros, WebSocket origins)

**Telegram domina como plataforma problemática:**
- 4+ issues relacionadas a problemas de polling, streaming e freeze
- Plataforma requer atenção prioritária na estabilização

**Integração Anthropic com problemas recorrentes:**
- 3 issues sobre OAuth, billing e rate limits com Claude Code

---

## 5. Bugs e Estabilidade

### 🔴 Críticos (P1) — 7 issues

| Issue | Título | Plataforma | Status | Impacto |
|-------|--------|------------|--------|---------|
| [#42006](https://github.com/NousResearch/hermes-agent/issues/42006) | launchd restart falha sem bootout | macOS | OPEN | Atualizações quebram gateway |
| [#25839](https://github.com/NousResearch/hermes-agent/issues/25839) | System impersonates user role | Agent | CLOSED | Modificação não autorizada de skills |
| [#40691](https://github.com/NousResearch/hermes-agent/issues/40691) | Telegram Gateway freezes após polling conflict | Telegram | OPEN | Parada completa de roteamento |
| [#39219](https://github.com/NousResearch/hermes-agent/issues/39219) | Installer stuck em "Build desktop app" | Desktop | OPEN | Instalação bloqueada |
| [#25935](https://github.com/NousResearch/hermes-agent/issues/25935) | Discord image attachments falham | Discord | OPEN | Falha em anexos de imagem |
| [#40170](https://github.com/NousResearch/hermes-agent/issues/40170) | Memory-context leak para customers | Gateway | OPEN | **Vazamento de dados sensíveis** |
| [#53175](https://github.com/NousResearch/hermes-agent/issues/53175) | Gateway event loop dies (zombie) | Telegram | OPEN | 16 crashes em 30h |

### 🟠 Altos (P2) — 15+ issues

**Desktop/Build (3 issues):**
- [#46781](https://github.com/NousResearch/hermes-agent/issues/46781), [#46742](https://github.com/NousResearch/hermes-agent/issues/46742), [#46720](https://github.com/NousResearch/hermes-agent/issues/46720) — Falhas de build por `@assistant-ui/tap` export mismatch

**Autenticação/Billing Anthropic (3 issues):**
- [#40014](https://github.com/NousResearch/hermes-agent/issues/40014) — Claude Code OAuth ainda consome credits pay-per-token
- [#53212](https://github.com/NousResearch/hermes-agent/issues/53212) — HTTP 429 por "monthly spend limit"
- [#47260](https://github.com/NousResearch/hermes-agent/issues/47260) — Créditos extras ainda consumidos após rollback

**Plataforma/Conectividade:**
- [#29325](https://github.com/NousResearch/hermes-agent/issues/29325) — Telegram polling 409 Conflict
- [#49858](https://github.com/NousResearch/hermes-agent/issues/49858) — iMessage sidecar death spiral sem respawn
- [#45770](https://github.com/NousResearch/hermes-agent/issues/45770) — Telegram Rich Message streaming não funciona
- [#27047](https://github.com/NousResearch/hermes-agent/issues/27047) — NixOS: python-telegram-bot ausente
- [#6351](https://github.com/NousResearch/hermes-agent/issues/6351) — Ollama retorna HTTP 503 no macOS
- [#9705](https://github.com/NousResearch/hermes-agent/issues/9705) — Azure AI Foundry HTTP 422

### 🟡 Médios (P3) — 15+ issues

Incluem problemas de UI desktop, cron/Kanban, QQ bot TTS, e integrações menores.

### Análise de Estabilidade

**Regressões de gateway Telegram** representam o maior risco operacional. A issue [#53175](https://github.com/NousResearch/hermes-agent/issues/53175) reporta 16 crashes em 30h — indica instabilidade séria em produção.

**Build do Desktop** apresenta regressão bloqueante afeta novos usuários e atualizações.

**Autenticação Anthropic** precisa de correção urgente para evitar cobrança indevida de créditos.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em Desenvolvimento (PRs)

| PR | Feature | Área | Prioridade | Status |
|----|---------|------|------------|--------|
| [#8427](https://github.com/NousResearch/hermes-agent/pull/8427) | **Vertex AI provider para Gemini** | Provider | P3 | OPEN |
| [#37864](https://github.com/NousResearch/hermes-agent/pull/37864) | Kanban card workspace terminal-first | Dashboard | P3 | OPEN |
| [#39009](https://github.com/NousResearch/hermes-agent/pull/39009) | Desktop custom provider setup | Desktop | P3 | OPEN |
| [#53268](https://github.com/NousResearch/hermes-agent/pull/53268) | Agent-callable standing goal tool | Agent | P3 | OPEN |

### Features Solicitadas (Issues)

| Issue | Feature | Justificativa | Área |
|-------|---------|---------------|------|
| [#487](https://github.com/NousResearch/hermes-agent/issues/487) | **Cryptographic Audit Trail** (Merkle Hash-Chain) | Trazabilidade, compliance, anti-tampering | Agent |
| [#9404](https://github.com/NousResearch/hermes-agent/issues/9404) | Honcho session-write dedup + metadata stripping | Padronização com openclaw-honcho | Plugins |
| [#32863](https://github.com/NousResearch/hermes-agent/issues/32863) | Honcho PR map cleanup | Consolidação de PRs duplicados | Plugins |

### Sinais de Roadmap

1. **Multi-provider expansion**: Vertex AI em desenvolvimento, sinaliza tendência de diversificação de provedores
2. **Segurança como prioridade**: Hash-chain audit trail, gating de memória, proteção de contexto
3. **Desktop maturity**: Custom providers, terminal-first UX indicam foco em experiência desktop
4. **Observabilidade**: Demanda por audit trails sugere necessidade de ferramentas de compliance

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Categoria | Problema | Frequência | Severidade |
|-----------|----------|------------|------------|
| **Autenticação Anthropic** | OAuth não funciona corretamente com Team/Max plans; cobra créditos errados | Alta | P1-P2 |
| **Gateway Telegram** | Congelamentos, zombie state, polling conflicts | Alta | P1 |
| **Desktop Build** | Instalação trava; rebuilds falham | Média-Alta | P2 |
| **macOS/NixOS** | Problemas específicos de plataforma em launchd e instalação Nix | Média | P1-P2 |
| **iMessage (Photon)** | Sidecar crash sem recuperação automática | Média | P2 |
| **Memory leak** | Contexto interno exposto a usuários finais | Baixa (mas crítica) | P1 |

### Cenários de Uso Identificados

1. **Uso corporativo com Claude Max/Team**: Usuários enfrentam problemas de billing ao usar Hermes como interface para planos corporativos
2. **Ambiente macOS com atualizações**: Atualizações do Hermes quebram gateway local sem recuperação automática
3. **NixOS como plataforma**: Usuários Nix enfrentam dependências quebradas após upgrades
4. **Desktop como primary interface**: Crescente demanda por features que funcionam bem no app desktop

### Satisfação/Insatisfação

**Insatisfação elevada** em:
- Autenticação Anthropic (billing incorreto)
- Estabilidade do gateway Telegram
- Build do desktop app

**Interesse elevado** em:
- Audit trail criptográfico (25 comentários)
- Suporte NixOS (4 reações)
- Vertex AI provider

---

## 8. Backlog que Merece Atenção

### Issues sem resposta significativa (>7 dias sem atividade)

| Issue | Título | Criado | Dias Inativo | Prioridade | Ação Recomendada |
|-------|--------|--------|--------------|------------|------------------|
| [#487](https://github.com/NousResearch/hermes-agent/issues/487) | Cryptographic Audit Trail | 2026-03-06 | ~112 dias | Feature | Avaliar escopo e considerar endorsement ou rejeição |
| [#6351](https://github.com/NousResearch/hermes-agent/issues/6351) | Ollama HTTP 503 macOS | 2026-04-09 | ~79 dias | P2 | Needs-repro — solicitar mais contexto ou fechar |
| [#9404](https://github.com/NousResearch/hermes-agent/issues/9404) | Honcho dedup + stripping | 2026-04-14 | ~74 dias | P3 | Issue antiga, revisar relevância atual |
| [#9705](https://github.com/NousResearch/hermes-agent/issues/9705) | Azure AI Foundry 422 | 2026-04-14 | ~74 dias | P2 | Verificar se ainda reproduzível |
| [#11081](https://github.com/NousResearch/hermes-agent/issues/11081) | QQ bot TTS 401 | 2026-04-16 | ~72 dias | P2 | Platform específica — triagem needed |
| [#42454](https://github.com/NousResearch/hermes-agent/issues/42454) | Photon SDK NXDOMAIN | 2026-06-08 | ~19 dias | P3 | Closed — monitorar se resolved |
| [#38240](https://github.com/NousResearch/hermes-agent/issues/38240) | Skills index degraded | 2026-06-03 | ~24 dias | P3 | Automação degradada — verificar workflow |

### PRs Antigos em Aberto

| PR | Título | Criado | Prioridade | Status |
|----|--------|--------|------------|--------|
| [#8427](https://github.com/NousResearch/hermes-agent/pull/8427) | Vertex AI provider | 2026-04-12 | P3 | Aprovado? Em revisão há ~76 dias |
| [#37839](https://github.com/NousResearch/hermes-agent/pull/37839) | Dashboard ASGI auth gating | 2026-06-03 | P2 | Security fix — prioritizar review |
| [#37890](https://github.com/NousResearch/hermes-agent/pull/37890) | Redact audio errors | 2026-06-03 | P2 | Security fix — prioritizar review |

### Recomendações

1. **Triage urgente**: 7 bugs P1 precisam de atenção imediata — risco de estabilidade em produção
2. **Review de segurança**: 4 PRs de segurança aguardam merge — vulnerabilidades expostas
3. **Cleanup de backlog**: Issues de abril/março sem atualização merecem triagem (fechar, priorizar ou delegar)
4. **Comunicação**: Ausência de releases + alta issue activity sugere necessidade de comunicação sobre roadmap

---

*Relatório gerado em 2026-06-27 com base em dados do GitHub NousResearch/hermes-agent*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>


# Relatório do Projeto PicoClaw
## Data: 2026-06-27 | Fonte: github.com/sipeed/picoclaw

---

## 1. Panorama do Dia

O projeto PicoClaw manteve **alta atividade de desenvolvimento** em 26 de junho de 2026, com **14 PRs fechados/merged** e **4 PRs abertos** nas últimas 24 horas. A equipe focou em **higiene de código** (tratamento explícito de erros de `Close()` e `resp.Body.Close()` em múltiplos módulos), **correções de segurança** (bloqueio de SSRF via ISATAP IPv6 literals) e **estabilidade de canais** (websocket do WhatsApp). A atividade de issues permaneceu moderada com 5 issues total, incluindo 1 feature request de alta prioridade e 2 bugs críticos em plataformas específicas. O projeto demonstra saúde operacional sólida sem releases formais pendentes.

---

## 2. Lançamentos

**Nenhuma release formal została emitida nas últimas 24 horas.**

O projeto não publicou novas versões entre 26 e 27 de junho de 2026. O último ciclo de releases parece estar em fase de preparação, considerando o alto volume de PRs de manutenção sendo merged.

---

## 3. Progresso do Projeto

### PRs Mergeados/Fechados Hoje (14 total)

| # | PR | Autor | Impacto |
|---|-----|-------|---------|
| [#3181](https://github.com/sipeed/picoclaw/pull/3181) | `fix(gateway): guard startup info assertions` | Alix-007 | Estabilidade do gateway com fallback para dados ausentes/malformados |
| [#3143](https://github.com/sipeed/picoclaw/pull/3143) | `fix(web): block private IPv4 embeds in ISATAP literals` | lc6464 | **Correção de segurança SSRF** - fecha bypass no `web_fetch` |
| [#3179](https://github.com/sipeed/picoclaw/pull/3179) | `fix(whatsapp): reconnect after websocket drops` | Alix-007 | Reconexão automática após falhas de leitura no WhatsApp |
| [#3180](https://github.com/sipeed/picoclaw/pull/3180) | `fix(cli): skip tool calls with invalid arguments` | Alix-007 | Tratamento robusto de argumentos malformados em CLI |
| [#3172](https://github.com/sipeed/picoclaw/pull/3172) | `fix: explicitly ignore Close() errors in error paths` | chengzhichao-xydt | Higiene de código em 4 arquivos, 8 call sites |
| [#3170](https://github.com/sipeed/picoclaw/pull/3170) | `fix(agent): close base64 encoder on io.Copy error path` | chengzhichao-xydt | Prevenção de vazamento de recursos |
| [#3183](https://github.com/sipeed/picoclaw/pull/3183) | `fix(onebot): explicitly ignore resp.Body.Close() error` | chengzhichao-xydt | Limpeza de websocket no OneBot |
| [#3184](https://github.com/sipeed/picoclaw/pull/3184) | `fix(channels): explicitly ignore resp.Body.Close() errors` | chengzhichao-xydt | Higiene em Pico e WhatsApp channels |
| [#3185](https://github.com/sipeed/picoclaw/pull/3185) | `fix(updater): explicitly ignore resp2.Body.Close() error` | chengzhichao-xydt | Caminho de download de checksums |
| [#3186](https://github.com/sipeed/picoclaw/pull/3186) | `fix(membench): explicitly ignore resp.Body.Close() error` | chengzhichao-xydt | Loop de retry no cliente LLM |
| [#3187](https://github.com/sipeed/picoclaw/pull/3187) | `test(utils): explicitly ignore resp.Body.Close() errors` | chengzhichao-xydt | Cobertura de testes em pkg/utils |
| [#3188](https://github.com/sipeed/picoclaw/pull/3188) | `fix(health): explicitly ignore json.Encode errors` | chengzhichao-xydt | Handler de health server |

**Destaque:** Tema recorrente de "higiene de erro" com **7 PRs** dedicados ao tratamento explícito de erros de `Close()` em paths de erro, indicando esforço consciente de padronização de código.

### Atualizações de Dependências (via Dependabot)

| Dependência | De → Para | Impacto |
|-------------|-----------|---------|
| `github.com/github/copilot-sdk/go` | 0.2.0 → 1.0.4 | [#3177](https://github.com/sipeed/picoclaw/pull/3177) |
| `github.com/mymmrac/telego` | 1.9.0 → 1.10.0 | [#3176](https://github.com/sipeed/picoclaw/pull/3176) |
| `fyne.io/systray` | 1.12.1 → 1.12.2 | [#3175](https://github.com/sipeed/picoclaw/pull/3175) |
| `github.com/line/line-bot-sdk-go/v8` | 8.20.0 → 8.20.1 | [#3174](https://github.com/sipeed/picoclaw/pull/3174) |
| `modernc.org/sqlite` | 1.51.0 → 1.53.0 | [#3173](https://github.com/sipeed/picoclaw/pull/3173) |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

**#3088 - Feature Request: use vodozemac instead of libolm** [🔴 Alta Prioridade]
- **Link:** https://github.com/sipeed/picoclaw/issues/3088
- **Reações:** 2 👍 | **Comentários:** 3
- **Resumo:** Substituir `libolm` (biblioteca de criptografia Matrix, abandonada e insegura) por `vodozemac`, sua substituta oficial. O autor propõe tornar libolm opcional em tempo de compilação.
- **Análise:** Demanda legítimo de modernização de segurança. Libolm está sem manutenção ativa há anos, representando risco potencial para comunicações criptografadas.

**#3094 - Bug: Duplicate messages com async subagents** [✅ Fechado]
- **Link:** https://github.com/sipeed/picoclaw/issues/3094
- **Comentários:** 3
- **Resumo:** Ao usar `spawn` para tarefas assíncronas, mensagens duplicadas chegam em canais (Feishu/Telegram) - uma crua do subagente e outra formatada pelo agente principal.
- **Status:** Issue fechada em 26/06/2026, indicando que a correção foi implementada ou o problema foi resolvido.

---

## 5. Bugs e Estabilidade

### Issues Abertas (4)

| # | Tipo | Severidade | Descrição | Plataforma |
|---|------|------------|-----------|------------|
| [#3150](https://github.com/sipeed/picoclaw/issues/3150) | Bug | **Alta** | "它给自己整失忆了" - Agent "perde memória"/esquece contexto | Genérico |
| [#3182](https://github.com/sipeed/picoclaw/issues/3182) | Bug | **Crítica** | Não consegue iniciar serviço no Android | Android |
| [#3178](https://github.com/sipeed/picoclaw/issues/3178) | Bug | **Alta** | WhatsApp WebSocket Timeout | WhatsApp/Docker |
| [#3088](https://github.com/sipeed/picoclaw/issues/3088) | Feature | **Alta** | Substituir libolm por vodozemac | Segurança |

### Análise de Bugs Abertos

**🔴 Crítica - Android (#3182)**
- Reportado em 26/06/2026 por Monessem
- Serviço não inicia no Android, com screenshot anexada
- Permissões completas conceduídas
- Status: 0 comentários ainda

**🔴 Alta - WhatsApp WebSocket (#3178)**
- Reportado em 26/06/2026 por Jh123x
- Timeout de websocket ao conectar WhatsApp
- Ambiente: Docker com launchpad, deepseek-v4-pro
- PR [#3179](https://github.com/sipeed/picoclaw/pull/3179) já aberto para reconexão automática

**🔴 Alta - Perda de Memória (#3150)**
- Issue stale com 3 comentários
- Agente "perde memória" durante conversas longas
- Requer investigação do estado interno do agente

---

## 6. Pedidos de Features e Sinais de Roadmap

### Feature Request Aberta

**#3088 - use vodozemac instead of libolm** [🔴 Prioridade Alta]
- **Link:** https://github.com/sipeed/picoclaw/issues/3088
- **Autor:** pbsds
- **Reações:** 2 👍

**Proposta:**
1. Substituir `libolm` por `vodozemac` (implementação Rust oficial)
2. Tornar `libolm` opcional em tempo de compilação para migração gradual
3. Melhorar postura de segurança do projeto

**Impacto:** Alteração de dependência de criptografia Matrix pode afetar backwards compatibility.

### Feature em Desenvolvimento

**#3063 - feat: add deltachat gateway** [🟡 Em Progresso]
- **Link:** https://github.com/sipeed/picoclaw/pull/3063
- **Autor:** trufae
- **Status:** Aberto desde 08/06/2026, atualizado em 26/06
- **Resumo:** Adicionar suporte ao protocolo Delta Chat (email-based messenger)

**Sinais de Roadmap:**
- Foco em **estabilidade de canais** (WhatsApp, OneBot, Pico, DeltaChat)
- **Modernização de dependências** (Go SDK updates)
- **Higiene de código** como prioridade consistente

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Dor | Issue | Plataforma | Frequência |
|-----|-------|------------|------------|
| Mensagens duplicadas em canais | #3094 | Feishu/Telegram | Intermitente |
| Timeout de websocket | #3178 | WhatsApp/Docker | Frequente |
| Falha ao iniciar no Android | #3182 | Android | Constante |
| Perda de contexto/memória | #3150 | Genérico | Intermitente |

### Cenários de Uso Identificados

1. **Agentes assíncronos com spawn** - Usuários reportam problemas de duplicação de mensagens
2. **Multi-canal** - PicoClaw operando simultaneamente em WhatsApp, Telegram, Feishu, OneBot
3. **Deploy Docker** - Usuários utilizando launchpad em containers Docker
4. **Mobile** - Android como cliente alternativo (com problemas reportados)

### Satisfação/Insatisfação

**Positivo:**
- Comunidade ativa com PRs de manutenção
- Correções de segurança sendo addressed rapidamente (#3143 - SSRF)
- Dependências mantidas atualizadas (Dependabot ativo)

**Negativo:**
- Bugs de estabilidade em plataformas mobile (#3182)
- Problemas recorrentes com websockets de canais
- Questões de memória/contexto em sessões longas

---

## 8. Backlog que Merece Atenção

### Issues Antigas Sem Resolução

| # | Issue | Idade | Status | Prioridade | Ação Necessária |
|---|-------|-------|--------|------------|-----------------|
| [#3088](https://github.com/sipeed/picoclaw/issues/3088) | vodozemac substitution | ~18 dias | Aberta | Alta | Decisão de roadmap + implementação |
| [#3150](https://github.com/sipeed/picoclaw/issues/3150) | Perda de memória | ~8 dias | Aberta + Stale | Alta | Investigação do estado do agente |
| [#3182](https://github.com/sipeed/picoclaw/issues/3182) | Android crash | <1 dia | Aberta | Crítica | Triagem + reprodução |
| [#3178](https://github.com/sipeed/picoclaw/issues/3178) | WhatsApp timeout | <1 dia | Aberta | Alta | PR #3179 em review |

### PRs Abertos Aguardando Merge

| # | PR | Autor | Impacto | Urgência |
|---|-----|-------|---------|----------|
| [#3179](https://github.com/sipeed/picoclaw/pull/3179) | fix(whatsapp): reconnect after websocket drops | Alix-007 | Estabilidade WhatsApp | Alta |
| [#3180](https://github.com/sipeed/picoclaw/pull/3180) | fix(cli): skip tool calls with invalid arguments | Alix-007 | Robustez CLI | Média |
| [#3063](https://github.com/sipeed/picoclaw/pull/3063) | feat: add deltachat gateway | trufae | Novo canal | Baixa |

---

## Métricas Consolidada do Dia

| Indicador | Valor |
|-----------|-------|
| Issues abertas/ativas | 4 |
| Issues fechadas | 1 |
| PRs abertos | 4 |
| PRs fechados/merged | 14 |
| Novas releases | 0 |
| Dependências atualizadas | 5 |
| Bugs críticos | 2 (Android, WhatsApp) |
| Features em desenvolvimento | 1 (DeltaChat gateway) |

**Saúde Geral:** 🟢 **Saudável** - Alta atividade de manutenção, correções de segurança em dia, backlog gerenciável. Atenção necessária para bugs Android e WhatsApp.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>


# Relatório do Projeto IronClaw — 2026-06-27

---

## 1. Panorama do Dia

O IronClaw manteve altíssima atividade em 26 de junho, com **34 issues e 50 PRs atualizados** em 24h — volume consistente com o padrão recente do projeto. Nenhum release foi publicado, indicando que o time está em ciclo de desenvolvimento intensivo sem corte de versão estável. O foco dominante do dia foi a estabilização do stack **Reborn**: bugs de approval, automações e UI concentraram a atenção, enquanto a infraestrutura de segurança e capacidade avançou via PRs grandes. A saúde geral é boa, mas há múltiplos bugs de UX no Reborn v2 que precisam atenção antes de um potencial release estável.

---

## 2. Lançamentos

**Nenhum release publicado nas últimas 24h.**

O projeto segue sem tag de release nova. Isso é consistente com a estratégia atual: trabalho intenso em feature branches (Reborn, capability policy, engine v2) com merges frequentes para `main` antes de um corte formal.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados Notáveis

| # | PR | Tamanho | Escopo | Resumo |
|---|-----|---------|--------|--------|
| [#3890](https://github.com/nearai/ironclaw/pull/3890) | Add Reborn multi-tenant isolation contract tests | XS | docs | Cobertura de contrato para isolamento multi-tenant: workspace/projeto, attachments, event cursors. |
| [#3767](https://github.com/nearai/ironclaw/pull/3767) | Add lean host NoExposureGuard service | XL | dependencies | Guard de vazamento de dados text/JSON/HTTP com boundary-aware sanitization. |
| [#3766](https://github.com/nearai/ironclaw/pull/3766) | Seal dispatch authority with AuthorizedDispatchRequest | L | channel/cli, tool/builtin | Arquitetura de segurança: `CapabilityDispatcher` agora exige prova de dispatch, não aceita payload cru. |
| [#3703](https://github.com/nearai/ironclaw/pull/3703) | Futureproof RebornRuntime surface for epic #3036 | XL | reborn | Refatoração do input/runtime/CLI tree para suportar Configuration-as-Code. |
| [#3277](https://github.com/nearai/ironclaw/pull/3277) | Salvage allowed_chat_ids for Telegram | L | docs | Filtro de grupos Telegram via `allowed_chat_ids` no config. |
| [#2854](https://github.com/nearai/ironclaw/pull/2854) | Add CodeAct host shims and gated rich result objects | XL | agent | Camada de shims Pythonic para CodeAct com rollout controls via A/B. |
| [#2810](https://github.com/nearai/ironclaw/pull/2810) | Run migrations when onboarding reuses a database | M | setup | Fix crítico: migrações rodam antes de sair do step 1 quando reutiliza PostgreSQL ou libSQL existente. |
| [#2761](https://github.com/nearai/ironclaw/pull/2761) | Strengthen Milestone 0 replay and black-box evals | XL | test | Suite de replay expandida + black-box scoring de comportamento observável. |
| [#2728](https://github.com/nearai/ironclaw/pull/2728) | Add Engine V2 migrate CLI for OpenClaw and Hermes | XL | channel/cli, config | CLI `ironclaw migrate` com adapters para OpenClaw e Hermes, feature-gated. |

### PRs Abertos de Destaque

| # | PR | Tamanho | Risco | Resumo |
|---|-----|---------|-------|--------|
| [#5362](https://github.com/nearai/ironclaw/pull/5362) | Remove WebUI chat connect shortcut | XL | low | Remove detector de shortcut de channel-connect do WebUI v2; mantém API wrapper intacta. |
| [#5354](https://github.com/nearai/ironclaw/pull/5354) | Add Reborn WebUI v2 live QA canary | XL | medium | Canary lane com Playwright + integrações live LLM/ferramentas. |
| [#5346](https://github.com/nearai/ironclaw/pull/5346) | Align Reborn runtime tool surface | XL | low | Alinhamento de wiring runtime/family com necessidades de browser coverage. |
| [#5344](https://github.com/nearai/ironclaw/pull/5344) | Capability-policy engine — delta store + resolver | XL | medium | Delta store libSQL-backed + resolver para identity/config/approval (epic #5261). |
| [#5265](https://github.com/nearai/ironclaw/pull/5265) | Env-configurable turn-runner concurrency | XL | low | Variáveis de ambiente para controlar knobs de concorrência do Reborn turn-runner (0=unlimited). |

---

## 4. Temas Quentes da Comunidade

### Issues com Mais Comentários

| # | Título | Comentários | Status | Tema Central |
|---|--------|-------------|--------|--------------|
| [#5009](https://github.com/nearai/ironclaw/issues/5009) | Slack OAuth live path parity com DMs (security) | 2 | CLOSED | Segurança OAuth Slack — gating estrutural para `authorization_url` no path triggered. |
| [#5283](https://github.com/nearai/ironclaw/issues/5283) | "Approve & always allow" não persiste para nearai.web_search | 2 | CLOSED | Bug de persistência de approval — configurado Follow global mas não salva "always allow". |
| [#5331](https://github.com/nearai/ironclaw/issues/5331) | Tool-approval 'always' pode não auto-aprovar próxima chamada do mesmo tool (engine v2) | 1 | OPEN | Bug de aprovação automática em engine v2 — primeira vez funciona, segunda falha. |
| [#2355](https://github.com/nearai/ironclaw/issues/2355) | Epic: persistent multi-identity browser via Chrome + CDP | 1 | OPEN | **Epic de browser automation**: navegação, autenticação, sessões persistentes com perfis criptografados. |

### Análise de Demandas

O volume de comments é baixo (máximo 2), refletindo que issues são frescas ou técnicas. Os temas de maior interesse percebido:

1. **Tool Approval Flow (Reborn v2)** — Aprovação "always" não persiste, "ask each time" falha com erro de auth, negar approval ainda dispara requests subsequentes. O fluxo de approval é claramente a área mais problemática do Reborn hoje.

2. **Automations (Reborn v2)** — Múltiplas issues: criação para após planning (#5320), timeout antes de completar (#5322), lease expira (#5323), schedule sem timezone (#5319), falha com "No thread attached" (#5276). A feature de automação tem pelo menos 5 bugs abertos.

3. **Capability Policy / Multi-tenant** — Epic #5261 avançando via PR #5344. A comunidade demonstra interesse em admin REST surface (#5268) e REST-created users (#5272).

4. **Epic de Browser Automation (#2355)** — Recebeu atualização em 26/06. Arquitetura definida: built-in Rust tool usando CDP, múltiplas identidades, perfis criptografados. Este é um diferenciador estratégico de longo prazo.

---

## 5. Bugs e Estabilidade

### Por Severidade

**🔴 Alta Severidade**

| # | Bug | Escopo | Resumo |
|---|-----|--------|--------|
| [#5276](https://github.com/nearai/ironclaw/issues/5276) | Scheduled automation falha com "No thread attached" (0% success) | Reborn | Run criado no schedule mas nunca linkado à conversa — automation inteiramente quebrada. |
| [#5331](https://github.com/nearai/ironclaw/issues/5331) | Tool-approval 'always' não auto-aprova segunda chamada | Reborn, engine v2 | Bug intermitente em engine v2 — confiança média, pode ser flaky. |
| [#5196](https://github.com/nearai/ironclaw/issues/5196) | "Ask each time" falha com authorization error + loop de approval | Reborn | Aprova dialog aparece, usuário aprova, ferramenta falha, novo pedido de approval — loop infinito. |

**🟡 Média Severidade**

| # | Bug | Escopo | Resumo |
|---|-----|--------|--------|
| [#5323](https://github.com/nearai/ironclaw/issues/5323) | Automation creation falha por runner lease expire | Reborn | Lease expira antes do workflow completar — race condition de leasing. |
| [#5322](https://github.com/nearai/ironclaw/issues/5322) | Automation creation dá timeout antes de completar | Reborn | Criação de automation trava com timeout — workflow muito longo ou leak. |
| [#5320](https://github.com/nearai/ironclaw/issues/5320) | Automation request para após planning sem criar automation | Reborn | Planning responde mas não invoca tools ou cria automation — fluxo quebrado. |
| [#5337](https://github.com/nearai/ironclaw/issues/5337) | Wasm-channel OAuth setup não consegue auth_url na primeira configuração | wasm, channel | Channel auth descriptor nunca é seeded — OAuth flow impossível em fresh config. |
| [#5332](https://github.com/nearai/ironclaw/issues/5332) | Coverage --all-features habilita forward-feature gates involuntariamente | ci, reborn | Teste de isolamento de memória falha por gating estrutural — segurança adiada. |

**🟢 Baixa Severidade**

| # | Bug | Escopo | Resumo |
|---|-----|--------|--------|
| [#5333](https://github.com/nearai/ironclaw/issues/5333) | Composer mantém mensagem visível brevemente após envio | Reborn, UI | UX menor: input não limpa imediatamente após send. |
| [#5289](https://github.com/nearai/ironclaw/issues/5289) | Run termina com "driver protocol error" genérico após invalid_input | Reborn | Erro real escondido atrás de mensagem genérica — debug difícil. |
| [#5227](https://github.com/nearai/ironclaw/issues/5227) | Run failure messages anexadas à turn errada | Reborn | Mensagem de erro aparece na turn errada — timeline enganosa. |
| [#5319](https://github.com/nearai/ironclaw/issues/5319) | Automation criada em UTC sem confirmação de timezone | Reborn | Schedule mostra UTC mas Next Run mostra hora local — confuso. |

### Falha de CI

**[#4108](https://github.com/nearai/ironclaw/issues/4108)** — Nightly E2E failed (2026-06-26 04:44 UTC). Falha no job `Full E2E / E2E (features)`. Reportado por `github-actions[bot]`. Issue aberta desde 2026-05-27 — **falha recorrente**.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| # | Feature | Escopo | Resumo | Sinal Estratégico |
|---|---------|--------|--------|-------------------|
| [#2355](https://github.com/nearai/ironclaw/issues/2355) | **Persistent multi-identity browser via Chrome + CDP** | agent, sandbox | Navegação web persistente, autenticação, sessões criptografadas | Diferenciador de longo prazo; arquitetura Rust/CDP definida |
| [#5261](https://github.com/nearai/ironclaw/issues/5261) | **[EPIC] Reborn capability policy: admin-shared tools & skills com per-user auth** | reborn, capability | Continuação de #4628 — ferramentas e skills compartilhadas com autenticação por usuário | Multi-tenant enterprise-ready; PR #5344 em andamento |
| [#5268](https://github.com/nearai/ironclaw/issues/5268) | Admin REST surface (4 dimensões) + REST action catalog | reborn, capability | Interface REST para grant manual por admin; UI futura | Camada de controle para enterprise |
| [#3036](https://github.com/nearai/ironclaw/issues/3036) | Configuration-as-Code para Reborn | reborn | Tenant blueprints e use-case harnesses | Infraestrutura DevOps/enterprise (PR #3703 já preparou superfície) |

### Sinais de Roadmap Inferidos

1. **Reborn v2 como stack principal**: Todas as issues de bugs são `Reborn` — o time está estabilizando a nova UI antes de弃 (depreciar) a legacy.
2. **Engine v2 em paralelo**: Issues mencionam `engine v2` como escopo separado — sugere estratégia de coexecução.
3. **Dependabot massivo (#5271)**: 47 updates de dependências agrupadas — dívida técnica sendo gerenciada proativamente.
4. **Test infrastructure**: E2E tests com mock-LLM harness (#5329), Playwright canary (#5354), benchmarks PinchBench/ClawBench (#5350, #5221) — investimento em DX e qualidade.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

**Approval Flow Quebrado (impacto alto)**
> "When a tool is configured as **Ask each time**, the approval dialog appears as expected. However, after clicking **Approve**, the tool fails with an `authorization` error and the assistant asks for authorization again."

— [#5196](https://github.com/nearai/ironclaw/issues/5196), `sunglow666`

Este é o cenário mais crítico de UX: o usuário faz a ação correta (aprova) mas recebe erro e precisa aprovar de novo — pode gerar desconfiança e abandono.

**Automations Não Funcional**
> "A scheduled automation fails every run with **'No thread attached'**. The run record is created on schedule but is never linked to a conversation thread, so it errors with no output and the automation shows a 0% success rate."

— [#5276](https://github.com/nearai/ironclaw/issues/5276), `loopstring`

Automação é feature central do produto. Taxa de sucesso 0% é falha de confiança severa.

**Persistência de Settings**
> "'Approve & always allow' is not persisted for nearai.web_search" — mesmo com global OFF, a opção "Follow global" não salva "always allow" corretamente.

— [#5283](https://github.com/nearai/ironclaw/issues/5283), `sunglow666`

Padrão: múltiplas issues de `sunglow666` indicam que a pessoa está dogfooding intensamente o Reborn v2 e reportando bugs em sequência.

### Padrões de Uso Observados

- **Dogfooding tracking**: Issue #5119 é referenciada como tracking — o time está usando ativamente o Reborn em produção.
- **Prompt típico**: "Create an automation that checks every 2 hours for new commits in nearai/ironclaw" — indica que a base de usuários está tentando usar IronClaw como monitor de si mesmo.
- **Benchmark-driven development**: Issues de benchmark (#5350, #5221, #5315) mostram que o time usa PinchBench/ClawBench para guiar decisões técnicas.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Estagnadas

| # | Título | Criado | Atualizado | Status | Prioridade |
|---|--------|--------|------------|--------|------------|
| [#4108](https://github.com/nearai/ironclaw/issues/4108) | Nightly E2E failed | 2026-05-27 | 2026-06-26 | OPEN | 🔴 **Alta** — falha recorrente há ~30 dias |
| [#5221](https://github.com/near

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>


# Relatório do Projeto CoPaw (QwenPaw)
## Data: 2026-06-27 | Análise das Últimas 24h

---

## 1. Panorama do Dia

O projeto **QwenPaw** atravessa uma fase de alta atividade e transição significativa. Nas últimas 24 horas, foram registradas **30 issues** e **50 PRs**, indicando uma comunidade extremamente engajada. O destaque vai para o lançamento da primeira versão beta da família **v2.0.0** (`v2.0.0-beta.1`), marcando a migração ativa do AgentScope 1.x para 2.x. A maioria esmagadora das atividades está concentrada em **correções de bugs** (especialmente relacionados à estabilidade do desktop e canais de comunicação), **features de usabilidade** (agregação de mensagens, streaming de arquivos) e **adaptações à nova versão do AgentScope**. O volume de PRs mergeados (25) supera o de issues fechadas (9), evidenciando que o time está priorizando a entrega de código sobre o backlog de issues.

---

## 2. Lançamentos

### 🚀 Nova Release: v2.0.0-beta.1

| Item | Detalhes |
|------|----------|
| **Versão** | v2.0.0-beta.1 |
| **Tipo** | Beta público — desenvolvimento ativo |
| **Data de publicação** | 2026-06-26 |
| **Status** | ⚠️ **Não recomendado para produção** |

**Mudanças documentadas:**
- `refactor: migrate agent` — refatoração central do módulo de agentes para o AgentScope 2.0

**⚠️ Avisos importantes:**
- Contém **breaking changes** em relação à série 1.x
- Pode apresentar **instabilidade**
- Direcionado a **desenvolvedores e early adopters**
- A versão do AgentScope foi atualizada para **2.0.3** ([PR #5576](https://github.com/agentscope-ai/QwenPaw/pull/5576))

**PRs de suporte ao v2.0:**
- [[PR #5568] Fix official plugin installation failures on QwenPaw 2.0](https://github.com/agentscope-ai/QwenPaw/pull/5568)
- [[PR #5440] Post-merge bugs fix (Ponytail cleanup)](https://github.com/agentscope-ai/QwenPaw/pull/5440)

---

## 3. Progresso do Projeto

### PRs Mergeadas/Fechadas Relevantes (Últimas 24h)

| PR | Autor | Tipo | Impacto |
|----|-------|------|---------|
| [#5577](https://github.com/agentscope-ai/QwenPaw/pull/5577) | wananing | Feature | Adiciona `aggregate_message_replies` para evitar spam de mensagens em canais |
| [#5575](https://github.com/agentscope-ai/QwenPaw/pull/5575) | wananing | Feature | Torna o debounce de mensagens sem texto configurável por canal |
| [#5574](https://github.com/agentscope-ai/QwenPaw/pull/5574) | mynameyi | Bug Fix | Refresh automático do chat quando canal externo completa processamento |
| [#5297](https://github.com/agentscope-ai/QwenPaw/pull/5297) | nguyenthanhthe | Feature | **Batch test e batch delete** de modelos no painel de gerenciamento |
| [#5436](https://github.com/agentscope-ai/QwenPaw/pull/5436) | nguyenthanhthe | Feature | **Drag-and-drop de arquivos** na área de envio do chat |
| [#5153](https://github.com/agentscope-ai/QwenPaw/pull/5153) | wangfei010313 | Perf | Replicou otimização de startup instantâneo do Tauri para o cliente pywebview |
| [#5265](https://github.com/agentscope-ai/QwenPaw/pull/5265) | nguyenthanhthe | Bug Fix | Shutdown graceful no desktop + correção do ciclo de vida do Tauri |
| [#5570](https://github.com/agentscope-ai/QwenPaw/pull/5570) | jinglinpeng | Bug Fix | **Elimina storm de processos** `pip install` e backends órfãos no desktop (relacionado a [#5550](https://github.com/agentscope-ai/QwenPaw/issues/5550)) |
| [#5569](https://github.com/agentscope-ai/QwenPaw/pull/5569) | wangfei010313 | UX | Splash screen branded elimina tela branca de 5-30s no desktop |
| [#5536](https://github.com/agentscope-ai/QwenPaw/pull/5536) | C1-BA-B1-F3 | Bug Fix | Elimina processos Chrome renderer órfãos após `browser_use.stop()` |
| [#5557](https://github.com/agentscope-ai/QwenPaw/pull/5557) | wananing | Feature | **Timeout configurável** para heartbeat (default: 300s, antes: 120s fixo) |
| [#5549](https://github.com/agentscope-ai/QwenPaw/pull/5549) | wananing | Bug Fix | Sanitiza schemas de ferramentas com campos `type: "null"` |
| [#5515](https://github.com/agentscope-ai/QwenPaw/pull/5515) | sanfran1068 | Feature | Ativa capacidades beta mais recentes do `@agentscope-ai/chat` UI |
| [#5559](https://github.com/agentscope-ai/QwenPaw/pull/5559) | zhaozhuang521 | Perf | Melhoria de performance em troca de sessão |

### Destaque de Progresso

**Usabilidade Desktop:** Melhorias massivas no startup e lifecycle do desktop app — splash animado, eliminação de tela branca e shutdown graceful ([#5569](https://github.com/agentscope-ai/QwenPaw/pull/5569), [#5265](https://github.com/agentscope-ai/QwenPaw/pull/5265)).

**Experiência de Chat:** Funcionalidades de UX aguardadas pela comunidade — agregação de replies, drag-and-drop de arquivos, refresh automático de chats de canais externos.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (por comentários)

| # | Título | Tipo | Comentários | Status |
|---|--------|------|-------------|--------|
| [#5262](https://github.com/agentscope-ai/QwenPaw/issues/5262) | Built-in skills desabilitadas reativam após upgrades | Bug | 12 | ✅ CLOSED |
| [#5379](https://github.com/agentscope-ai/QwenPaw/issues/5379) | Internal Server Error ao iniciar após instalação pip | Bug | 7 | 🔴 OPEN |
| [#5563](https://github.com/agentscope-ai/QwenPaw/issues/5563) | Agregar respostas multi-step para evitar spam de mensagens | Feature | 5 | 🔴 OPEN |
| [#5480](https://github.com/agentscope-ai/QwenPaw/issues/5480) | Console: mensagens longas com排版错乱 | Bug | 5 | ✅ CLOSED |
| [#5550](https://github.com/agentscope-ai/QwenPaw/issues/5550) | Plugin SSH: loop de instalação + processos órfãos | Bug | 4 | 🔴 OPEN |
| [#5401](https://github.com/agentscope-ai/QwenPaw/issues/5401) | Console crasha com históricos grandes de tool-use | Bug | 4 | ✅ CLOSED |
| [#4865](https://github.com/agentscope-ai/QwenPaw/issues/4865) | Streaming de conteúdo ao gerar arquivos (não-recomendado) | Enhancement | 3 | 🔴 OPEN |

### Análise de Demandas Emergentes

**1. Spam de Mensagens Agent (#5563)** — Um pedido de feature com 5+ comentários e uma PR correlata ([#5577](https://github.com/agentscope-ai/QwenPaw/pull/5577)) já em progresso. A comunidade demanda que agentes multi-step agreguem respostas em vez de enviar mensagens fragmentadas uma a uma. **Sinal claro de roadmap.**

**2. Erro de Inicialização Post-Instalação (#5379)** — 7 comentários, usuários não conseguem usar a aplicação após instalação via pip. Problema crítico de DX (developer experience) que precisa de atenção imediata.

**3. Estabilidade do Desktop (#5550)** — Loop de instalação de dependências de plugins e processos backends órfãos no macOS Desktop. Já possui PR fix ([#5570](https://github.com/agentscope-ai/QwenPaw/pull/5570)) mergeada, mas a issue continua aberta — possívelmente aguardando validação do usuário.

---

## 5. Bugs e Estabilidade

### Bugs Abertos (Por Severidade Estimada)

| Severidade | # | Título | Canário | Link |
|-------------|---|--------|---------|------|
| 🔴 **Crítica** | #5379 | `get_remote_addr(transport)` Internal Server Error na instalação | Inicialização bloqueada | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5379) |
| 🔴 **Crítica** | #5550 | Plugin SSH: storm de `pip install` + backends órfãos | Memory leak no desktop | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5550) / [PR Fix](https://github.com/agentscope-ai/QwenPaw/pull/5570) ✅ |
| 🟠 **Alta** | #5328 | Agent trava durante thinking com DeepSeek | Agentes improdutivos | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5328) |
| 🟠 **Alta** | #5543 | `type: "null"` em schemas causa falha em relés de terceiros | Incompatibilidade API | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5543) / [PR Fix](https://github.com/agentscope-ai/QwenPaw/pull/5549) ✅ |
| 🟠 **Alta** | #5573 | DeepSeek V4 thinking: dois tipos de erros 400 | Modelos indisponíveis | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5573) |
| 🟡 **Média** | #5539 | Heartbeat hard-coded timeout 120s | Tarefas agendadas falham | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5539) / [PR Fix](https://github.com/agentscope-ai/QwenPaw/pull/5557) ✅ |
| 🟡 **Média** | #5541 | Ollama não acessa modelos cloud | Provedor quebrado | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5541) |
| 🟡 **Média** | #5561 | Mensagens longas via 飞书 bot não são entregues | Canal Feishu quebrado | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5561) |
| 🟡 **Média** | #5554 | 企业微信: arquivos não disparam resposta do bot | Canal WeChat quebrado | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5554) / [PR Fix](https://github.com/agentscope-ai/QwenPaw/pull/5575) ✅ |
| 🟢 **Baixa** | #5558 | 企业微信: botão de enviar permanece disabled após upload | UX degradada | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5558) |

### Bugs Recentemente Fechados (Validação)

| # | Título | Observação |
|---|--------|------------|
| [#5262](https://github.com/agentscope-ai/QwenPaw/issues/5262) | Built-in skills reativam após upgrade | 12 comentários antes do close |
| [#5480](https://github.com/agentscope-ai/QwenPaw/issues/5480) | Console:排版错乱 em mensagens longas | CSS layout recalculation缺失 |
| [#5401](https://github.com/agentscope-ai/QwenPaw/issues/5401) | Console crasha com tool-use history grande | Falha no render de `type: "data"` |
| [#5474](https://github.com/agentscope-ai/QwenPaw/issues/5474) | YAML front matter inválido em Skill ZIP | Succeso falso + occupation de namespace |
| [#5556](https://github.com/agentscope-ai/QwenPaw/issues/5556) | Dependência `reme-ai 0.4.0.4` não publicada no PyPI | Instalação de fonte falha |

### Tabela de Bugs por Canal

```
Desktop App      : ████████░░  Crítico (storm de processos, tela branca)
DeepSeek         : ██████░░░░  Alto (thinking hangs, erros 400)
Canais (Feishu)  : ████░░░░░░  Médio (mensagens longas não entrega)
Canais (WeChat)  : ████░░░░░░  Médio (arquivos não disparam resposta)
Plugin SSH       : ████████░░  Crítico (memory leak loop — fixado)
Ollama           : ████░░░░░░  Médio (cloud models inacessíveis)
Console/Web      : ████░░░░░░  Médio (crashes com histórico grande)
```

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas (Últimas 24h)

| # | Feature | 👍 | Comentários | Link | Sinal de Roadmap |
|---|---------|----|-------------|------|-----------------|
| #5563 | Agregar respostas multi-step do agent | 0 | 5 | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5563) | 🔥 **Alta prioridade — PR #5577 em progresso** |
| #5572 | **Fallback automático de modelos** (quota/expirar → trocar) | 0 | 1 | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5572) | 💡 **Feature estratégica** |
| #5152 | Suporte a **Slack** como canal | 0 | 2 | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5152) | ✅ **Closed — em

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>


# Relatório do Projeto ZeroClaw — 2026-06-27

---

## 1. Panorama do Dia

O ecossistema ZeroClaw apresenta **alta atividade** neste ciclo de 24h, com 50 issues e 50 PRs atualizados. A comunidade está fortemente engajada em melhorias de segurança (supply chain, SBOM, SLSA), refatoração de runtime (Wasm-first, delegate mode) e qualidade de vida (session TTL, shell configurável). A release v0.8.2 trouxe recursos de A2A agent discovery e skills melhoradas, e o pipeline de CI/CD está em evolução ativa com jobs de segurança e SBOM. O projeto demonstra maturidade operacional, mas há bloqueios em RFCs críticos aguardando revisão de mantenedores.

---

## 2. Lançamentos

### 🎉 v0.8.2

**Data:** 2026-06-26 | [Release no GitHub](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.8.2)

**Destaques:**

| Área | Mudança |
|------|---------|
| **A2A Agent Discovery** | Suporte a descoberta de agente para agente (interoperabilidade) |
| **Skills Registry** | Registros extras configuráveis pelo usuário + opções tipadas para slash commands |
| **Segurança de Plugins** | Endurecimento across plugins e channels |
| **Canal Improvements** | Aprimoramentos generalizados em channels |

**Breaking Changes:** Nenhuma documentada nesta release.

**Notas de Migração:** Não há sinal de breaking changes significativos; upgrade direto é recomendado.

---

## 3. Progresso do Projeto

### PRs Merged/Closed Hoje

| # | Título | Impacto | Link |
|---|--------|---------|------|
| **#8146** | fix(observability): CLI one-shot loses telemetry and token totals on exit | **Crítico** — Corrigiu perda de telemetria e totais de tokens em execuções one-shot | [PR #8146](https://github.com/zeroclaw-labs/zeroclaw/pull/8146) |
| **#8158** | ci(workflows): add CycloneDX SBOM generation for Rust and npm | **Estratégico** — Implementou RFC #7675 Phase 2, Job 4 — transparência na supply chain | [PR #8158](https://github.com/zeroclaw-labs/zeroclaw/pull/8158) |
| **#8299** | test(channels): cover allowlist wildcard matcher short-circuit | Testes de regressão para matcher de allowlist | [PR #8299](https://github.com/zeroclaw-labs/zeroclaw/pull/8299) |
| **#8300** | test(discord): cover custom id kind escaping | Testes de regressão para escaping de custom-id no Discord | [PR #8300](https://github.com/zeroclaw-labs/zeroclaw/pull/8300) |

### PRs Abertos de Destaque

| # | Título | Tamanho | Risco | Link |
|---|--------|---------|-------|------|
| **#8338** | feat(channels): ACP elicitation Phase 1 — multiple-choice via elicitation/create | **XL** | 🔴 Alto | [PR #8338](https://github.com/zeroclaw-labs/zeroclaw/pull/8338) |
| **#8033** | feat(onboard): two-path onboard tree wired end to end (LLM + deterministic) | **XL** | 🔴 Alto | [PR #8033](https://github.com/zeroclaw-labs/zeroclaw/pull/8033) |
| **#7954** | feat(zerocode): add agent rename dashboard flow | L | 🔴 Alto | [PR #7954](https://github.com/zeroclaw-labs/zeroclaw/pull/7954) |
| **#8237** | feat(acp): add opt-in MCP support for standalone ACP sessions | S | 🔴 Alto | [PR #8237](https://github.com/zeroclaw-labs/zeroclaw/pull/8237) |

**Análise:** A ênfase em SBOM, telemetria e onboarding indica foco em profissionalização do projeto para uso corporativo.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| # | Título | Comentários | Status | Link |
|---|--------|-------------|--------|------|
| **#6808** | RFC: Work Lanes, Board Automation, and Label Cleanup | **11** | 🟡 In Progress | [Issue #6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) |
| **#8177** | RFC: Supply chain signing — hardware PGP, hermetic builds, SLSA | **8** | 🔴 Blocked | [Issue #8177](https://github.com/zeroclaw-labs/zeroclaw/issues/8177) |
| **#8238** | [Feature]: Independent delegate mode for specialist handoffs | **4** | 🟡 In Progress | [Issue #8238](https://github.com/zeroclaw-labs/zeroclaw/issues/8238) |
| **#8226** | [Feature]: Per-agent custom environment variables | **4** | 🟡 Accepted | [Issue #8226](https://github.com/zeroclaw-labs/zeroclaw/issues/8226) |
| **#8170** | RFC: In-app upgrade with optional supervised restart | **3** | 🟡 In Progress | [Issue #8170](https://github.com/zeroclaw-labs/zeroclaw/issues/8170) |

### Análise de Demandas

1. **Governança e Processos (#6808):** A comunidade quer automação de work lanes e labels — indica necessidade de reduzir carga operacional dos mantenedores.

2. **Segurança de Supply Chain (#8177):** RFC robusto com PGP hardware-backed, multi-party quorum e SLSA — reflexo direto das exigências de conformidade corporativa moderna.

3. **Arquitetura de Agentes (#8238, #8226):** Forte interesse em isolamento de especialistas e variáveis de ambiente por agente — evidência de adoção em cenários multi-tenant.

4. **UX/Dashboard (#8170):** Usuários querem upgrade in-app com restart supervisionado — indica maturidade do produto e necessidade de DX melhor.

---

## 5. Bugs e Estabilidade

### Bugs Reportados (por Severidade)

| Severidade | # | Título | Status | Link |
|------------|---|--------|--------|------|
| **P1 / S0** | **#8312** | fill-translations leak-repair leaves stale translations-map entries | 🟢 Aberto | [Issue #8312](https://github.com/zeroclaw-labs/zeroclaw/issues/8312) |
| **P1** | **#8054** | System prompt tool-availability mismatch across entry points | 🔴 Blocked | [Issue #8054](https://github.com/zeroclaw-labs/zeroclaw/issues/8054) |
| **P2 / S1** | **#5866** | Telegram bot ignores replies when mention_only=true | ✅ Closed | [Issue #5866](https://github.com/zeroclaw-labs/zeroclaw/issues/5866) |
| **P2 / S0** | **#8094** | Anthropic provider added in Quickstart unavailable in chat until reset | 🟡 Aberto | [Issue #8094](https://github.com/zeroclaw-labs/zeroclaw/issues/8094) |
| **P2 / S2** | **#8047** | ReadSkillTool looks in data_dir but skills live in agent workspace | 🟢 Aberto | [Issue #8047](https://github.com/zeroclaw-labs/zeroclaw/issues/8047) |
| **P2 / S2** | **#8366** | Heartbeat engine reads HEARTBEAT.md from data_dir instead of agent workspace | 🟢 Aberto | [Issue #8366](https://github.com/zeroclaw-labs/zeroclaw/issues/8366) |
| **P3 / S3** | **#8275** | Scoop manifest does not register zerocode | 🟢 Aberto | [Issue #8275](https://github.com/zeroclaw-labs/zeroclaw/issues/8275) |

### Análise

- **Dados silenciosos e vazamentos (#8312):** Bug de severidade alta —可能导致泄露 de texto via write_po. Requer atenção imediata.
- **Path inconsistency (#8047, #8366):** Padrão recorrente — ferramentas e engine leem paths incorretos. Sugere auditoria sistêmica de resolução de caminhos.
- **Provider state (#8094):** Bug S0 — provider adicionado no quickstart não aparece no chat sem reset. Experiência de onboarding quebrada.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em Progresso para v0.8.3

| # | Feature | Área | Link |
|---|---------|------|------|
| **#8071** | v0.8.3 runtime, agent, tools, and execution stability tracker | Runtime/Agent | [Issue #8071](https://github.com/zeroclaw-labs/zeroclaw/issues/8071) |
| **#8362** | v0.8.3 channel adapter behavior and interaction parity tracker | Channels | [Issue #8362](https://github.com/zeroclaw-labs/zeroclaw/issues/8362) |

### Novas Features Solicitadas

| # | Título | Sinais de Demanda | Link |
|---|--------|-------------------|------|
| **#8303** | RFC: Goal mode for bounded autonomous session work | Sessões duráveis até conclusão/pausa/cancelamento/falha | [Issue #8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) |
| **#8228** | DingTalk channel streaming message support | Latência em longas respostas — UX crítica | [Issue #8228](https://github.com/zeroclaw-labs/zeroclaw/issues/8228) |
| **#8138** | Support OpenRouter model fallbacks array | Resiliência a downtime de modelos | [Issue #8138](https://github.com/zeroclaw-labs/zeroclaw/issues/8138) |
| **#7849** | Discord mention-triggered thread mode | Organização de conversas em servidores grandes | [Issue #7849](https://github.com/zeroclaw-labs/zeroclaw/issues/7849) |
| **#8076** | Local username/password AuthProvider (IdP-less) | Autenticação local sem OIDC/SSH | [Issue #8076](https://github.com/zeroclaw-labs/zeroclaw/issues/8076) |

### RFCs Arquiteturais em Andamento

| # | Título | Status | Link |
|---|--------|--------|------|
| **#8135** | Wasm-first plugin runtime — default-on, capability enforcement | 🔴 Blocked | [Issue #8135](https://github.com/zeroclaw-labs/zeroclaw/issues/8135) |
| **#8132** | Replace React/Vite web UI with Rust→Wasm framework | 🟡 Aberto | [Issue #8132](https://github.com/zeroclaw-labs/zeroclaw/issues/8132) |
| **#8187** | Capability-gated WASI hardware host functions for plugins | 🟡 Aberto | [Issue #8187](https://github.com/zeroclaw-labs/zeroclaw/issues/8187) |

**Sinais de Roadmap:** A direção clara é Wasm-first (eliminar Node.js), capacidades para hardware (GPIO, I2C), e autenticação flexível. O projeto está se posicionando para IoT/edge e cenários enterprise.

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Dor | Evidência | Impacto |
|-----|-----------|---------|
| **Latência em DingTalk** | Usuários esperam streaming, recebem resposta completa após geração | 🔴 Crítico para canais |
| **Configuração de modelos frágil** | Provider não persiste após quickstart; fallback de modelos inacessível | 🟡 Onboarding quebrado |
| **Paths inconsistentes** | Skills, heartbeat e ferramentas leem de diretórios errados | 🟡 DX e confiabilidade |
| **CI local fraco** | "zerocode pre-submission gate" RFC para garantir contributor bar local | 🟡 Processo de contribuição |
| **SkillForge órfão** | Feature merged mas não wired — investimento desperdiçado | 🟡 Gestão de features |

### Cenários de Uso Emergentes

- **Multi-agente especializado** com delegates independentes e variáveis por agente
- **Deploy self-hosted com upgrade in-app** via dashboard web
- **IoT/edge** com WASI hardware access (GPIO, I2C, USB)
- **Supply chain enterprise** com SLSA, cosign e SBOM

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Bloqueadas há Tempo

| # | Título | Criado | Estado | Link |
|---|--------|--------|--------|------|
| **#6754** | ACP bridge auto-pairing should not depend on one-time-use code | 2026-05-18 | Accepted | [Issue #6754](https://github.com/zeroclaw-labs/zeroclaw/issues/6754) |
| **#8309** | SkillForge (#144) is orphaned — wire up or remove? | 2026-06-25 | 🔴 Blocked | [Issue #8309](https://github.com/zeroclaw-labs/zeroclaw/issues/8309) |
| **#8135** | Wasm-first plugin runtime RFC | 2026-06-22 | 🔴 Blocked | [Issue #8135](https://github.com/zeroclaw

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*