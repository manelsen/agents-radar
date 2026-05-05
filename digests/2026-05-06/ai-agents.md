# Resumo diário do ecossistema de agentes de IA 2026-05-06

> Issues: 1 | PRs: 6 | Projetos cobertos: 7 | Gerado em: 2026-05-05 21:01 UTC

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

**Data de referência:** 2026-05-06  
**Link do projeto:** [nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)

---

## 1. Panorama do Dia

O projeto NullClaw mantém atividade moderada com 6 PRs atualizados e 1 release publicada nas últimas 24h. A semana é marcada por uma correção crítica de DNS no Windows (#892) que endereça um problema de conectividade reportado na issue #890. Dois PRs de infraestrutura foram merged (#889, #888), consolidando a release v2026.5.4. A comunidade segue engajada com 1 issue aberta e 4 PRs em avaliação, indicando um pipeline saudável de desenvolvimento.

---

## 2. Lançamentos

### v2026.5.4 — Released em 2026-05-04/05
**PR:** [#888](https://github.com/nullclaw/nullclaw/pull/888) | **Compare:** [v2026.5.4](https://github.com/nullclaw/nullclaw/releases/tag/v2026.5.4)

**Changes incluídos:**

| PR | Autor | Descrição |
|----|-------|-----------|
| #830 | @DonPrus | v2026.4.17 |
| #831 | @manelsen | Suporte a Agent Skills RFC 0.2.0 + endurecimento do fetch de Web Skills |

**Notas:**
- Suporte ao novo RFC 0.2.0 de Agent Skills indica evolução na arquitetura de habilidades do agente.
- Reforço na segurança e robustez do mecanismo de busca de skills via web.

**Breaking Changes / Migração:** Nenhuma informada para esta release.

---

## 3. Progresso do Projeto

### PRs Fechados/Merged Hoje

| PR | Título | Impacto |
|----|--------|---------|
| [#889](https://github.com/nullclaw/nullclaw/pull/889) | Move GitHub workflows to nullbuilder | Migração de CI/CD para nullbuilder — padronização de infraestrutura de build |
| [#888](https://github.com/nullclaw/nullclaw/pull/888) | v2026.5.4 | Bump de versão e publicação da release |

**Avanços:**
- A migração de workflows para o nullbuilder representa um passo na consolidação do ecossistema de ferramentas internas, potencialmente simplificando a manutenção de pipelines de integração contínua.

### PRs Abertos em Progresso

| PR | Título | Status |
|----|--------|--------|
| [#892](https://github.com/nullclaw/nullclaw/pull/892) | fix(compat/net): real DNS resolution on Windows | ✅ Fecha #890 |
| [#878](https://github.com/nullclaw/nullclaw/pull/878) | fix(compat): use nanosleep on POSIX | Melhoria de compatibilidade POSIX |

---

## 4. Temas Quentes da Comunidade

### Issue em Destaque

**[#890](https://github.com/nullclaw/nullclaw/issues/890)** — *Windows: agent provider HTTP fails with `HostResolutionFailed` even with literal-IP base_url*  
- **Autor:** @fatihaziz | **Comentários:** 1 | **Reações:** 0  
- **Severidade:** Alta (bloqueia uso no Windows)  
- **Resumo:** No Windows, `nullclaw agent` falha em todas as chamadas a provedores com `HostResolutionFailed`, mesmo usando IP literal na `base_url`. O problema está no shim de pré-resolução DNS do NullClaw, não no curl bundled.

> A correção correspondente já foi proposta em [#892](https://github.com/nullclaw/nullclaw/pull/892) pelo mesmo autor.

### PR com Contexto Relevante

**[#885](https://github.com/nullclaw/nullclaw/pull/885)** — *feat(memory): Add NullClaw Data Governance Layer*  
- **Autor:** @sleep3r | **Tipo:** Hackathon (WB × OpenSource)  
- **Equipe:** Kalashnikov, Aslanyan, Perekhodkin  
- **Relevância:** Adiciona camada de governança de dados, indicando expansão do NullClaw para casos de uso mais complexos de gerenciamento de memória e compliance.

---

## 5. Bugs e Estabilidade

### 🟥 Bug Crítico (Impacto Bloqueante)

| # | Descrição | Severidade | Status |
|---|-----------|------------|--------|
| [#890](https://github.com/nullclaw/nullclaw/issues/890) | DNS resolution falha no Windows com `HostResolutionFailed` — agente inoperante | **Crítica** | PR aberto (#892) |

**Análise:** O bug afeta exclusivamente usuários Windows. O shim interno de DNS do NullClaw conflita com a stack de rede do sistema. O curl bundlado funciona corretamente, isolando o problema ao código Rust/Go do projeto.

### 🟨 Bugs em Fix

| # | Descrição | Severidade |
|---|-----------|------------|
| [#891](https://github.com/nullclaw/nullclaw/pull/891) | Preservar erros de transporte curl em health probes (DnsError, ConnectError, Timeout, TlsError, etc.) | Média |
| [#878](https://github.com/nullclaw/nullclaw/pull/878) | Thread.sleep usa nanosleep real no POSIX em vez de Io.sleep cooperativo | Baixa |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em Desenvolvimento

| # | Título | Tipo | Sinal de Roadmap |
|---|--------|------|------------------|
| [#885](https://github.com/nullclaw/nullclaw/pull/885) | NullClaw Data Governance Layer | Feature (Hackathon) | Expansão para compliance e gestão de dados sensíveis |
| [#892](https://github.com/nullclaw/nullclaw/pull/892) | Real DNS resolution on Windows | Bugfix | Suporte robusto a Windows |

### Sinais Observados

- **Agent Skills RFC 0.2.0:** A release v2026.5.4 traz suporte ao novo RFC, sugerindo que a arquitetura de habilidades (skills) do agente está em evolução ativa.
- **Data Governance:** A participação em hackathon com foco em governança de dados indica interesse da comunidade em casos de uso enterprise.

---

## 7. Resumo de Feedback dos Usuários

### Dor Reportada

**Windows inoperante** — Usuários Windows relatam que o agente não consegue se conectar a nenhum provedor de IA (OpenRouter, OpenAI-compatible). O erro `HostResolutionFailed` surge antes mesmo da requisição sair do binário, indicando falha em camada profunda de compatibilidade de rede.

**Cenário típico:**
```
nullclaw agent --provider openrouter
# → error(channel_loop): Agent error: error.AllProvidersFailed
#   (OpenRouter: OpenRouterApiError)
#   Root: HostResolutionFailed
```

### Satisfação Observada

- A comunidade responde rapidamente a bugs — o PR de correção (#892) foi aberto no mesmo dia do reporte (#890).
- Suporte a RFCs formalizados (como Agent Skills 0.2.0) indica maturidade no processo de design.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta/Estagnadas

| # | Título | Criada | Última Atualização | Prioridade |
|---|--------|--------|-------------------|------------|
| — | Nenhuma identificada nas últimas 24h | — | — | — |

### PRs Antigos Em Aberto

| # | Título | Criado | Idade Aproximada | Status |
|---|--------|--------|-----------------|--------|
| [#878](https://github.com/nullclaw/nullclaw/pull/878) | nanosleep on POSIX | 2026-04-30 | ~6 dias | Aberto |

**Nota:** O PR #878 está aberto há aproximadamente 6 dias sem atividade recente. Recomenda-se revisão para evitar estagnação.

---

## Indicadores de Saúde do Projeto

| Indicador | Valor | Avaliação |
|-----------|-------|-----------|
| Issues ativas (24h) | 1 | ✅ Saudável |
| PRs atualizados (24h) | 6 | ✅ Muito ativo |
| Releases (7 dias) | 1 | ✅ Regular |
| Tempo médio de resposta a bugs | <24h | ✅ Excelente |
| PRs em revisão prolongada | 1 (#878) | ⚠️ Atenção |

---

**Relatório gerado em:** 2026-05-06  
**Próxima atualização recomendada:** 2026-05-07

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo — Ecossistema Open Source de Agentes de IA

**Data de referência:** 2026-05-06  
**Projetos analisados:** NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw, ZeroClaw

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **saúde desigual em intensidade**, mas maturidade crescente em vectores comuns. Todos os sete projetos demonstram atividade substancial, com Hermes Agent e ZeroClaw liderando em volume absoluto (50 PRs/24h cada), enquanto CoPaw e NullClaw equilibram contribuição com estabilidade. O denominador comum é a **estabilização de conectividade multi-canal** (Telegram, WhatsApp, Discord) e a **gestão de memória/contexto** como desafio técnico dominante. O mercado bifurca-se entre projetos focados em **hardware heterogêneo e deployments locais** (PicoClaw, ZeroClaw) e plataformas orientadas a **enterprise e multi-tenant** (IronClaw, Hermes Agent). A ausência de releases formais na maioria dos projetos indica sprints de desenvolvimento intensivos semversionamento coordenado.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | Releases (7d) | PRs Abertos | Taxa Merge | Avaliação Geral |
|---------|:-----------:|:---------:|:-------------:|:-----------:|:----------:|:---------------:|
| **NullClaw** | 1 | 6 | 1 | 4 | ~50% | ✅ Saudável |
| **NanoBot** | 7 | 15 | 0 | 6 | 60% | ✅ Muito Ativo |
| **Hermes Agent** | 41 | 50 | 0 | 8 | 84% | ⚠️ Ativo mas tenso |
| **PicoClaw** | 17 | 24 | 1 (nightly) | 15 | 37% | ✅ Alto engajamento |
| **IronClaw** | 1 | 42 | 0 | 19 | 55% | ✅ Excelente |
| **CoPaw** | 10 | 10 | 0 | 9 | 10% | ⚠️ Equilibrado |
| **ZeroClaw** | 50 | 50 | 0 | 36 | 28% | ⚠️ Volume crítico |

**Destaque quantitativo:**
- **Maior throughput:** Hermes Agent (42 merged em 24h) e IronClaw (23 merged)
- **Maior backlog:** ZeroClaw (36 PRs abertos) e PicoClaw (15 PRs)
- **Release mais ativo:** NullClaw (v2026.5.4) — única release formal no período

---

## 3. Posicionamento do Projeto Principal

### Projetos em Posição de Liderança

**Hermes Agent** — Maior volume absoluto (50 PRs/24h), 21 plataformas documentadas, ecossistema mais diversificado de providers. Vantagem em escala de comunidade e variedadede deployment. **Risco:** Estoque de 4 issues P1 abertas indica debt técnico significativo.

**IronClaw** — Arquitetura mais sofisticada (Reborn event store, WASM security, HMAC/EIP-712/NEP-413). Diferencia-se por ser o único com sistema formal de contratos de persistência (PR #3257) e multi-chain credential signing. **Risco:** Gap crítico em crates.io (0.24.0 vs 0.27.0) compromete distribuição Rust.

**ZeroClaw** — Dashboard de fleet management (`/nodes`) e heartbeat tracking indicam foco enterprise. HMAC tool receipts (#6214) demonstra maturidade criptográfica. **Risco:** 36 PRs abertos e 10 bugs P1 simultâneos sugerem overcommitment.

### Projetos de Nicho Técnico

**NanoBot** — Liderança em canais alternativos (Feishu, SimpleX) e hardware Apple Silicon (mlx_lm). Session-Level Focus Tool (#3292, 9 comentários) sinaliza demanda não endereçada por concorrentes.

**PicoClaw** — Único projeto com suporte a LINE SDK v8 e hardware NXP i.MX93. Foco em ARM/Raspberry Pi Zero W diferencia de plataformas x86-centricas.

**CoPaw** — Semantic skill routing (#3117) addressa problema de escalabilidade em contexts longos — diferencial técnico no ranking de skills.

---

## 4. Focos Técnicos Compartilhados

### 4.1 Gestão de Memória e Contexto
| Projeto | Status | Abordagem |
|---------|--------|-----------|
| Hermes Agent | 🔴 Crítico | Múltiplas issues P1-P2 abertas (#14420, #20245) |
| PicoClaw | 🟡 Em progresso | PR #2774: "context and memory management", cache-aware infinite context |
| CoPaw | 🟡 Proposto | Agent Teams com memória cross-session |
| ZeroClaw | 🟡 Buggy | Context compression dropando `assistant(tool_calls)` (#6361) |
| NullClaw | 🟢 RFC | Agent Skills RFC 0.2.0 com endurecimento de fetch |

**Síntese:** O problema é universal. A fragmentação de soluções indica que a indústria ainda não converge para um modelo padrão de memória persistente.

### 4.2 Compatibilidade Windows
| Projeto | Bug | Severidade |
|---------|-----|------------|
| NullClaw | DNS resolution `HostResolutionFailed` | 🔴 Crítica |
| CoPaw | Skill registration + slow startup (#4043) | 🔴 P0 |
| CoPaw | `max_tokens=2048` hardcoded | 🔴 P0 |
| Hermes Agent | Chrome not found em Docker | 🟠 P2 |
| PicoClaw | Gateway abnormal com glm4.7 | 🟡 Alta |

**Síntese:** Windows é o ambiente mais problemático. A correção de DNS no NullClaw (#892) em <24h serve como benchmark de resposta.

### 4.3 Segurança de Canais
| Projeto | Foco | Feature |
|---------|------|---------|
| IronClaw | Multi-chain signing | HMAC/EIP-712/NEP-413/Solana |
| ZeroClaw | HMAC receipts reativação | Tool receipts criptográficos |
| IronClaw | Tirith pre-exec scanning | Análise de homograph attacks |
| PicoClaw | Sandbox bypass | `find /` enumeration fix (#2693) |
| NanoBot | Telegram allowlist | Enforce antes de resposta (#3629) |

**Síntese:** Segurança emerge como vertical madura, com IronClaw liderando em sofisticação (WASM runtime, multi-chain).

### 4.4 Onboarding e Provider Setup
| Projeto | Problema | Volume |
|---------|----------|--------|
| ZeroClaw | Fresh install falha com Ollama (#6123) | 17 comentários |
| Hermes Agent | Credential pool `${VAR}` literal (#20310) | P1 crítico |
| Hermes Agent | .env expansion falha | Fix P1 merged |
| ZeroClaw | Onboarding sugere OpenAI Codex errado (#6120) | P1 |

**Síntese:** Onboarding quebrado é gargalo de aquisição. ZeroClaw e Hermes lideram em problemas reportados.

---

## 5. Análise de Diferenciação

### 5.1 Por Público-Alvo

| Tier | Projetos | Características |
|------|----------|-----------------|
| **Enterprise/Multi-tenant** | IronClaw, ZeroClaw, Hermes Agent | Fleet management, multi-tenant identity, observability (LangSmith, Langfuse) |
| **Developer/Homelab** | PicoClaw, NanoBot | Hardware diverso, ARM, Raspberry Pi, multi-channel experimental |
| **Consumer/Desktop** | CoPaw, NullClaw | System tray, i18n, semantic routing, minimal footprint |

### 5.2 Por Arquitetura Técnica

| Dimensão | Diferenciador Principal |
|----------|------------------------|
| **Runtime** | IronClaw (WASM isolation) vs. others (process-based) |
| **Persistência** | IronClaw (event store dual-backend PostgreSQL/libSQL) vs. file-based (PicoClaw, CoPaw) |
| **Routing** | CoPaw (semantic embeddings) vs. keyword matching (NanoBot) vs. JSON-config (IronClaw) |
| **Segurança** | IronClaw (Tirith, HMAC multi-chain) vs. ZeroClaw (HMAC receipts) vs. NanoBot (SSRF guard) |

### 5.3 Por Ecossistema de Canais

| Projeto | Canais Prioritários | Status |
|---------|--------------------|--------|
| NanoBot | Feishu, SimpleX, Telegram, WhatsApp | ✅ Maturidade |
| ZeroClaw | WhatsApp Web, Telegram, Discord, Matrix | ⚠️ Bugs críticos |
| PicoClaw | Telegram, Discord, LINE, WhatsApp | ✅ Estável |
| Hermes Agent | 21 plataformas documentadas | ✅ Suporte geral |

### 5.4 Por Estratégia de Provider

| Projeto | Estratégia | Providers Notáveis |
|---------|------------|-------------------|
| Hermes Agent | Diversificação ativa | 21 plataformas, Grok 4.3, Gemini native, Brave Search |
| NullClaw | Minimalismo | OpenRouter, OpenAI-compatible |
| ZeroClaw | OpenAI-compatible fragile | Llama.cpp, MiniMax, vLLM (com bugs) |
| PicoClaw | Flexível com fallbacks | glm4.7, Qwen, Ollama, ElevenLabs, Gemini |

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração

| Ranking | Projeto | PRs Merged (24h) | Tempo de Resposta a Bugs |
|:-------:|---------|:----------------:|:------------------------:|
| 1 | Hermes Agent | 42 | <24h (fix P1 em horas) |
| 2 | IronClaw | 23 | ~24-48h |
| 3 | PicoClaw | 9 | <24h (SVG Telegram) |
| 4 | NanoBot | 9 | <24h (#3630 corrigido no mesmo dia) |
| 5 | NullClaw | 2 | <24h (#892 mesma data) |
| 6 | ZeroClaw | 14 | Variável (P1 #6123: 17 comentários, sem resolution) |
| 7 | CoPaw | 1 | Sem dado |

### 6.2 Qualidade de Processos

| Projeto | RFC Formal | Changelog | SemVer | Security Policy |
|---------|:----------:|:---------:|:------:|:---------------:|
| NullClaw | ✅ RFC 0.2.0 | ✅ Structured | ✅ Release tags | Não mencionado |
| NanoBot | ❌ | ✅ Implicit | ❌ | Não mencionado |
| Hermes Agent | ❌ | ✅ Implicit | ✅ Tags | ✅ Security contact |
| PicoClaw | ❌ | ✅ Nightly | ✅ v0.2.8 estável | Não mencionado |
| IronClaw | ❌ | ✅ Dual-backend docs | ❌ crates.io gap | Mencionado (Tirith) |
| CoPaw | ❌ | ✅ PR titles | ❌ | Não mencionado |
| ZeroClaw | ❌ | ✅ PR titles | ❌ | ✅ HMAC receipts |

### 6.3 Contribuidor Diversity

| Projeto | Novos Contribuidores (24h) | Contribuidor Principal | Concentração |
|---------|:--------------------------:|------------------------|:------------:|
| CoPaw | 6 | agentscope-ai core | 🟢 Saudável |
| NullClaw | 0 identificado | @DonPrus, @manelsen | 🟡 Misto |
| PicoClaw | 2+ (bogdanovich, afjcjsbx) | sipeed core | 🟢 Diversificado |
| IronClaw | 2 novos (recent) | nearai core | 🟡 Misto |
| ZeroClaw | Externos (Audacity88, theonlyhennygod) | zeroclaw-labs core | 🟢 Externos ativos |
| Hermes Agent | Não identificado | NousResearch core | ⚠️ Centralizado |
| NanoBot | Não identificado | HKUDS core | ⚠️ Centralizado |

---

## 7. Sinais de Tendência

### 7.1 Tendências Fortes (Sinalização Múltipla)

**1. Multi-Channel como Expectativa**
- 4/7 projetos priorizam robustez de canais (NanoBot, PicoClaw, ZeroClaw, Hermes)
- Demanda por roteamento por canal (IronClaw #1378: MCP e built-in tools por canal)
- **Implicação:** Agent que opera em apenas um canal será percebido como limitado

**2. Segurança como Feature de Diferenciação**
- IronClaw: Tirith scanning, multi-chain signing
- ZeroClaw: HMAC tool receipts reativados
- PicoClaw: Sandbox hardening (#2693)
- CoPaw: Non-loopback bind refusal (#4038)
- **Implicação:** Mercado enterprise exige security-by-default, não security-as-afterthought

**3. Hardware Heterogêneo**
- PicoClaw: Raspberry Pi Zero W, NXP i.MX93, ARM64
- ZeroClaw: Raspberry Pi + LXC containers
- NanoBot: Apple Silicon (mlx_lm)
- **Implicação:** LLMs locais em hardware de consumo são caso de uso real; projetos desktop-only perdem mercado

**4. Memory/Context Management**
- 4/7 projetos com issues ou features de memória
- CoPaw: Agent Teams com cross-session memory
- PicoClaw: Cache-aware infinite context
- Hermes Agent: Circuit breaker memory, Hindsight provider
- **Implicação:** Arquiteturas stateless estão sendo rejeitadas; persistência de estado é requisito

### 7.2 Tendências Emergentes (Sinalização Inicial)

**5. Semantic Routing de Skills**
- CoPaw (#3117): Embeddings-based skill filtering
- **Implicação:** Skeleton-key approach (todas skills disponíveis) cede lugar a routing inteligente

**6. Fleet Management e Observability**
- ZeroClaw: `/nodes` dashboard, heartbeat tracking
- IronClaw: Event store com audit trail
- Hermes Agent: LangSmith/Langfuse tracing
- **Implicação:** Deployments multi-instância são o novo target; dashboards de operação virão

**7. Enterprise Multi-Tenancy**
- IronClaw (#3253): Per-user identity resolution em relay channels
- Hermes Agent (#20405): Auth file compartilhado entre profiles
- **Implicação:** De agents pessoais para agents compartilhados em equipes

### 7.3 Tendências Inversas (Gaps Identificados)

**8. Windows como Second-Class Citizen**
- Todos os projetos com problemas Windows mais severos que Linux/macOS
- **Implicação:** Comunidade de developers é Windows-dominante; isso é barreira de entrada

**9. Onboarding Quebrado Universalmente**
- ZeroClaw, Hermes Agent, CoPaw todos com issues de setup
- **Implicação:** Foco em features excedeu investimento em experiência inicial

---

## 8. Síntese para Decisores

### Prioridade de Adoção por Caso de Uso

| Caso de Uso | Recomendação Primária | Alternativa |
|-------------|----------------------|-------------|
| Enterprise multi-tenant | **

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-05-06

---

## 1. Panorama do Dia

O NanoBot apresenta **alta atividade comunitária** em 06/05/2026, com 15 PRs atualizados e 7 issues tratadas nas últimas 24h. O projeto demonstra maturidade operacional através de múltiplos PRs de **bugfix e estabilidade** (Telegram watchdog, SSRF recovery, Feishu media path) todos merged no período. A comunidade também avança em **extensibilidade** com PRs abertos para SimpleX channel, LangSmith observability e multi-role agent squads. Nenhuma release foi publicada, indicando foco em estabilização da base existente. A proporção de 9 PRs fechados versus 6 abertos sugere um ciclo de review ativo.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.** O repositório permanece em estado pré-release ou em desenvolvimento contínuo sem tag formal.

---

## 3. Progresso do Projeto

Os seguintes PRs foram **merged/fechados** hoje, representando avanços concretos:

| PR | Autor | Alteração | Impacto |
|---|---|---|---|
| [#3635](https://github.com/HKUDS/nanobot/pull/3635) | Re-bin | Soften SSRF guard recovery | Elimina loops de retry após blocos SSRF, melhorando robustez |
| [#3629](https://github.com/HKUDS/nanobot/pull/3629) | kaseru | Telegram ignore unauthorized users | Segurança: enforce allowlist antes de qualquer resposta |
| [#3631](https://github.com/HKUDS/nanobot/pull/3631) | JiajunBernoulli | Dream cursor only on completed batches | Fecha #3630 — evita perda silenciosa de memória |
| [#3634](https://github.com/HKUDS/nanobot/pull/3634) | chengyongru | Limit concurrent subagent execution | Fecha #3611 — previne OOM em LLMs locais |
| [#3615](https://github.com/HKUDS/nanobot/pull/3615) | mrbob-git | Limit concurrent subagent (alternative impl) | Merge paralelo/aditivo ao #3634 |
| [#3620](https://github.com/HKUDS/nanobot/pull/3620) | chengyongru | Populate RunResult.tools_used/messages | SDK: dados agora expostos corretamente |
| [#3552](https://github.com/HKUDS/nanobot/pull/3552) | BarclayII | Feishu sender identity in prompt | Melhora diferenciação de usuários em grupos |
| [#3632](https://github.com/HKUDS/nanobot/pull/3632) | futurist | Absolute path for Feishu media files | Corrige transcription downstream |
| [#3480](https://github.com/HKUDS/nanobot/pull/3480) | boogieLing | Codex stream progress deltas | Restaura feedback incremental para canais |

**Destaque de progresso:** A convergência simultânea de 3 PRs (#3631, #3634, #3615) resolvendo o mesmo problema de subagentes concorrentes demonstra atenção da comunidade a **estabilidade em hardware de consumo**.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários)

**#3292 — Session-Level Focus Tool** (9 comentários) 🔥
> [Link](https://github.com/HKUDS/nanobot/issues/3292)

Proposta de feature request que busca implementar um "task board" persistente no agente, permitindo manter foco em tarefas principais mesmo após interrupções. Autor: `piliplaker`. Com 9 comentários, é a **issue mais discutida**, sinalizando demanda forte por capacidade de atenção sustentada em agentes LLM — um gap crítico para uso em produção.

**#3626 — Telegram polling silent hang** (2 comentários)
> [Link](https://github.com/HKUDS/nanobot/issues/3626)

Reportado por `WormW` sobre connections que morrem silenciosamente (NAT timeout, Wi-Fi roaming). Curiosamente, o mesmo autor submeteu **#3627** como PR de solução no mesmo dia, demonstrando ciclo報告→proposta rápido.

### PRs com maior potencial estratégico

**#3140 — LangSmith Integration** 
> [Link](https://github.com/HKUDS/nanobot/pull/3140)

Restaurar tracing LangSmith era esperado desde a issue #2493. Este PR promete "full pipeline observability" e satisfaz os quatro requisitos do Logging Contract — **significativo para adoção enterprise**.

**#3621 — Multi-role Agent Squad para HF Spaces**
> [Link](https://github.com/HKUDS/nanobot/pull/3621)

Facilita deployment na infraestrutura HuggingFace com orchestration scheme para trio Neo/Trinity/Sentinel — **relevante para makers e pesquisadores**.

---

## 5. Bugs e Estabilidade

### Bugs abertos (3)

| # | Severidade Aparente | Descrição | Canal |
|---|---|---|---|
| [#3633](https://github.com/HKUDS/nanobot/issues/3633) | **Alta** | "Duplicate item found with id" ao usar GPT-5.5 — bloqueia resume | Codex |
| [#3625](https://github.com/HKUDS/nanobot/issues/3625) | **Alta** | WhatsApp envia cada token como mensagem separada com `supports_progress_deltas=True` | WhatsApp |
| [#3584](https://github.com/HKUDS/nanobot/issues/3584) | **Média** | DeepSeek API 'reasoning_content' validation error em modelos deepseek-reasoner | DeepSeek |

### Bugs resolvidos hoje

| # | Problema | Solução |
|---|---|---|
| [#3630](https://github.com/HKUDS/nanobot/issues/3630) | `.dream_cursor` avançava em erros Phase 1, perdendo memória silenciosamente | PR [#3631](https://github.com/HKUDS/nanobot/pull/3631): só avança em batches completos |

**Análise:** O bug #3630 é particularmente insidioso — perda de memória sem notificação Telegram ou sinal `/dream-log`. A correção rápida (mesmo dia) demonstra bom tempo de resposta. O bug #3625 afeta用户体验 diretamente em WhatsApp e aguarda atenção.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em desenvolvimento (PRs abertos)

| # | Feature | Segmento | Estratégia |
|---|---|---|---|
| [#3621](https://github.com/HKUDS/nanobot/pull/3621) | Multi-role agent squad (HF Spaces) | Deployment | democratização |
| [#3486](https://github.com/HKUDS/nanobot/pull/3486) | SimpleX channel | Canais | privacidade (SIMPLEX) |
| [#3140](https://github.com/HKUDS/nanobot/pull/3140) | LangSmith integration | Observability | enterprise |
| [#3628](https://github.com/HKUDS/nanobot/pull/3628) | before_process hook | Extensibilidade | customization |
| [#3292](https://github.com/HKUDS/nanobot/issues/3292) | Session-Level Focus Tool | Core Agent | cognition |

### Sinais de roadmap

1. **Foco em estabilidade de canais**: Telegram watchdog (#3627), Feishu media (#3632), Telegram allowlist (#3629) — indica priorização de production-readiness.
2. **Extensibilidade via hooks**: #3628 (`before_process`) amplia pontos de customização para preprocessing de mídia.
3. **Consciência de hardware limitado**: Limite de subagentes concorrentes (#3634) responde a cenário real de desenvolvedores rodando local.

---

## 7. Resumo de Feedback dos Usuários

### Dores reportadas

| Dor | Issue | Contexto |
|---|---|---|
| Perda de memória silenciosa | #3630 | Agente "esquece" durante operações Dream sem aviso — afeta confiabilidade |
| Crash OOM em LLMs locais | #3611 | Usuários com hardware consumer (mlx_lm, Ollama) não conseguem usar subagentes |
| Telegram "vivo mas surdo" | #3626 | Bot continua enviando mas para de receber — diagnóstico difícil |
| WhatsApp spam de tokens | #3625 | Experiência degradada ao usar Codex provider |

### Cenários de uso inferidos

- **Agents locais**: pull #3634/#3615 indica base significativa de usuários em hardware Apple Silicon (mlx_lm) e Ollama.
- **Multi-canal**: coexistência de Telegram, WhatsApp, Feishu e SimpleX mostra portfólio diverso.
- **Enterprise watch**: LangSmith tracing (#3140) e allowlist Telegram (#3629) indicam uso em ambientes corporativos.

### Satisfação

Ciclo de resolução rápido para bugs críticos (ex: #3630 reportado e fixado em horas) sugere **comunidade responsiva**. PRs como #3620 (SDK RunResult) indicam atenção a developer experience.

---

## 8. Backlog que Merece Atenção

### Issues sem atividade recente ou sem resposta

| # | Título | Criado | Status | Urgência |
|---|---|---|---|---|
| [#3292](https://github.com/HKUDS/nanobot/issues/3292) | Session-Level Focus Tool | 2026-04-19 | Open, 9 comments | **Alta** — mais comentada |
| [#3584](https://github.com/HKUDS/nanobot/issues/3584) | DeepSeek reasoning_content error | 2026-05-01 | Open, 1 comment | **Média** — API breaking |
| [#3486](https://github.com/HKUDS/nanobot/issues/3486) | SimpleX channel PR | 2026-04-27 | Open | Aguarda review |
| [#3625](https://github.com/HKUDS/nanobot/issues/3625) | WhatsApp token spam | 2026-05-04 | Open, 0 comments | **Alta** — UX crítico |

### Recomendação de priorização

1. **#3625** — Bug de UX em WhatsApp sem comentários pode estar subestimado. Verificar se há duplicatas.
2. **#3633** — Erro de ID duplicado com GPT-5.5 pode indicar breaking change em API upstream (OpenAI Codex).
3. **#3292** — Feature request madura (17 dias, 9 comentários) merece decisão de Accept/Reject para sinalizar à comunidade.

---

**Fonte dos dados:** GitHub HKUDS/nanobot — 2026-05-06  
**Período analisado:** últimas 24h

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-05-06

---

## 1. Panorama do Dia

O projeto Hermes Agent registrou **alta atividade nas últimas 24h**, com 50 issues e 50 PRs atualizados. A taxa de resolução de PRs foi expressiva (42 merged/closed), evidenciando um ciclo de desenvolvimento ativo. Não houve lançamentos de novas versões, e o volume de issues abertas permanece significativo (41 ativas), com destaque para problemas recorrentes relacionados à memória/contextualização do agente, configuração Docker e manipulação de credenciais. A comunidade demonstra engajamento particular em bugs de estabilidade e em lacunas de documentação.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto encontra-se em período de desenvolvimento intensivo sem tag de versão publicada neste intervalo. Recomenda-se acompanhar o repositório para anúncios de próximos releases: [NousResearch/hermes-agent/releases](https://github.com/NousResearch/hermes-agent/releases)

---

## 3. Progresso do Projeto

### PRs Importantes Merged/Closed

| PR | Título | Prioridade | Impacto |
|----|--------|------------|---------|
| [#20328](https://github.com/NousResearch/hermes-agent/pull/20328) | `fix(cli): expand ${VAR} references in load_env to match python-dotenv` | **P1** | Corrige credential pool armazenando literais `${VAR}` em auth.json — problema crítico de autenticação |
| [#20326](https://github.com/NousResearch/hermes-agent/pull/20326) | `fix(cron): fail jobs when pre-run script fails instead of greenwashing as ok` | P2 | Melhora confiabilidade de cron jobs — agora falham corretamente quando scripts pré-execução falham |
| [#20410](https://github.com/NousResearch/hermes-agent/pull/20410) | `fix(kanban): unify failure counter across spawn/timeout/crash outcomes` | P3 | Fecha gap no circuit breaker — workers que timeout/crash agora incrementam contador, evitando loops infinitos |
| [#20403](https://github.com/NousResearch/hermes-agent/pull/20403) | `docs: refresh stale platform counts` | P3 | Atualiza contagem para 21 plataformas de mensageria na documentação |
| [#20404](https://github.com/NousResearch/hermes-agent/pull/20404) | `docs(skills): explain restoring bundled skills` | P3 | Melhora documentação sobre restore de skills |
| [#20407](https://github.com/NousResearch/hermes-agent/pull/20407) | `docs(docker): connect to local inference servers (vLLM, Ollama)` | P3 | Adiciona cookbook para conexão Docker com servidores de inferência locais |
| [#20409](https://github.com/NousResearch/hermes-agent/pull/20409) | `docs(docker): document API_SERVER_* env vars` | P3 | Documenta variáveis de ambiente do servidor API |

**Destaque:** A correção P1 em [#20328](https://github.com/NousResearch/hermes-agent/pull/20328) resolve um problema crítico onde variáveis de ambiente não eram expandidas corretamente, causando falhas silenciosas em autenticação.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários)

1. **[#14420](https://github.com/NousResearch/hermes-agent/issues/14420)** — `My agent was unable to give me an accurate answer based on the previous context`
   - **9 comentários** | Aberto | P2
   - **Resumo:** Usuário reporta que o agente Hermes não consegue manter contexto ou memória entre interações
   - **Demanda:** Funcionalidade robusta de memória/contextualização é criticamente importante para a experiência do usuário

2. **[#12703](https://github.com/NousResearch/hermes-agent/issues/12703)** — `error in Ollama cloud providers`
   - **5 comentários** | Aberto | type/bug
   - **Resumo:** Erros HTTP 400 em provedores cloud Ollama via Telegram
   - **Demanda:** Suporte mais robusto a provedores externos

3. **[#15697](https://github.com/NousResearch/hermes-agent/issues/15697)** — `Auto-launch failed: Chrome not found error when running hermes-cli with official Docker image`
   - **4 comentários** | Aberto | P2
   - **Resumo:** Erro ao usar ferramenta browser dentro do container Docker oficial
   - **Demanda:** Melhor integração Docker para ferramentas de browser

4. **[#20245](https://github.com/NousResearch/hermes-agent/issues/20245)** — `Agent has no memory function at all`
   - **3 comentários** | Closed | P3
   - **Resumo:** Usuário incapaz de fazer agente reter informações entre mensagens
   - **Status:** Closed (provavelmente duplicata ou não reproduzida)

### Padrões Identificados

| Tema | Volume | Tendência |
|------|--------|-----------|
| **Memória/Contexto** | Alto (múltiplas issues) | Crítico — afeta experiência core |
| **Docker/Container** | Moderado | Frequente — barreiras de entrada |
| **Credenciais/Auth** | Alto (após fix P1) | Em correção ativa |
| **MCP Servers** | Moderado | Problemas de estabilidade |

---

## 5. Bugs e Estabilidade

### Por Severidade

#### P1 (Críticos)

| Issue | Título | Status | Link |
|-------|--------|--------|------|
| #20250 | VS Code ACP prompt in-flight after compression timeout | OPEN | [Link](https://github.com/NousResearch/hermes-agent/issues/20250) |
| #20310 | credential pool stores literal ${VAR} — API key não expandido | OPEN | [Link](https://github.com/NousResearch/hermes-agent/issues/20310) |
| #20273 | Background review agent pode sobrescrever skills bundled via skill_manage | OPEN | [Link](https://github.com/NousResearch/hermes-agent/issues/20273) |
| #20001 | TUI compression cria ghost sessions com metadata incompleta | CLOSED | [Link](https://github.com/NousResearch/hermes-agent/issues/20001) |

#### P2 (Altos)

| Issue | Título | Status | Link |
|-------|--------|--------|------|
| #14420 | Agent unable to give accurate answer based on previous context | OPEN | [Link](https://github.com/NousResearch/hermes-agent/issues/14420) |
| #15697 | Chrome not found em Docker image oficial | OPEN | [Link](https://github.com/NousResearch/hermes-agent/issues/15697) |
| #20254 | profile list/show reporta Gateway stopped quando está rodando | OPEN | [Link](https://github.com/NousResearch/hermes-agent/issues/20254) |
| #20377 | Podman rootless: mkdir permission denied em /opt/data | OPEN | [Link](https://github.com/NousResearch/hermes-agent/issues/20377) |
| #20334 | hermes sessions delete deixa session_<id>.json orphaned | OPEN | [Link](https://github.com/NousResearch/hermes-agent/issues/20334) |
| #19243 | session_search returns empty após crash — orphaned session JSON | OPEN | [Link](https://github.com/NousResearch/hermes-agent/issues/19243) |

#### P3 (Médios)

| Issue | Título | Status | Link |
|-------|--------|--------|------|
| #18875 | Hindsight memory provider crash gateway quando client não instalado | OPEN | [Link](https://github.com/NousResearch/hermes-agent/issues/18875) |
| #20269 | MCP multi-server coroutine timeout causa event loop starvation | OPEN | [Link](https://github.com/NousResearch/hermes-agent/issues/20269) |
| #20316 | run_agent.py nunca chama should_compress_preflight() — LCM dead code | OPEN | [Link](https://github.com/NousResearch/hermes-agent/issues/20316) |

### Análise de Estabilidade

**Pontos de Atenção:**
- **Memória do Agente:** Múltiplas issues P1-P2 indicam problemas fundamentais com retenção de contexto
- **Container Runtime:** Docker e Podman apresentam issues de permissão e dependência de browser
- **MCP Servers:** Problemas de timeout e event loop podem afetar usuários com múltiplos servidores
- **Session Management:** Diversas issues sobre orphaning de arquivos e sessões incompletas

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Propostas

| Issue | Título | Prioridade | Link |
|-------|--------|------------|------|
| #20201 | Add route-level webhook debounce/coalescing | P3 | [Link](https://github.com/NousResearch/hermes-agent/issues/20201) |
| #20412 | Analytics — separate Input/Output token charts + per-model breakdown | P3 | [Link](https://github.com/NousResearch/hermes-agent/issues/20412) |
| #20350 | No version pinning for installed plugins in $HERMES_HOME | P3 | [Link](https://github.com/NousResearch/hermes-agent/issues/20350) |
| #20408 | feat: add Brave web search backend | P3 | [Link](https://github.com/NousResearch/hermes-agent/pull/20408) |

### PRs de Feature Abertos

| PR | Título | Prioridade | Link |
|----|--------|------------|------|
| #20420 | fix(security): redact sensitive tool output and require HERMES_-prefixed env vars in Langfuse plugin | OPEN | [Link](https://github.com/NousResearch/hermes-agent/pull/20420) |
| #20398 | feat(xai): add grok-4.3 to static fallback and context-length map | P3 | [Link](https://github.com/NousResearch/hermes-agent/pull/20398) |
| #20405 | feat(auth): HERMES_AUTH_FILE env var to share auth.json across profiles | P2 | [Link](https://github.com/NousResearch/hermes-agent/pull/20405) |

### Sinais de Roadmap

1. **Observabilidade:** Adição de suporte Langfuse com redações de segurança
2. **Provedores:** Suporte a Grok 4.3, Brave Search, Gemini native
3. **Auth Multi-profile:** Compartilhamento de auth.json entre perfis
4. **Plugin Management:** Sistema de versionamento e lock para plugins instalados
5. **Analytics:** Gráficos separados de Input/Output tokens

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Categoria | Descrição | Frequência | Impacto |
|-----------|-----------|------------|---------|
| **Memória quebrada** | Agente não retém informações entre sessões | Alta | Experiência core comprometida |
| **Docker pronto para uso** | Usuários新規 encontram erros ao usar imagem oficial com browser | Alta | Barreira de entrada |
| **Credenciais confusas** | .env com variáveis referenciais causa falhas silenciosas | Alta | Autenticação falha sem aviso |
| **Integração Ollama** | Problemas com provedores cloud e lokllm | Moderada | Usuários auto-hospedados frustrados |
| **MCP instável** | Timeouts e starvation em multi-server | Moderada | Usuários power-user afetados |

### Cenários de Uso Reportados

- **Uso pessoal:** Usuários esperam agente lembrar nome, preferências, contexto acumulado
- **Deploy Docker:** Containers em Podman com permissões restritivas
- **Auto-hospedagem:** Conexão com vLLM/Ollama local
- **Integração Telegram:** Uso via bots com providers externos
- **VS Code Extension:** Sessões ACP com compressão de contexto

### Satisfação/Insatisfação

**Positivo:**
- Comunidade ativa reportando bugs detalhadamente
- Correções P1 sendo addressed rapidamente (env expansion)
- Documentação sendo atualizada consistentemente

**Negativo:**
- Problemas de memória são recorrentes e frustrantes
- curva de setup Docker complexa para novatos
- Issues de segurança em plugins (skill overwrite, Langfuse output)

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta há >7 dias

| Issue | Título | Criado | Prioridade | Link |
|-------|--------|--------|------------|------|
| #14418 | tracking: provider modules refactor — Cycle 2 of transport/provider infrastructure | 2026-04-23 | P2 | [Link](https://github.com/NousResearch/hermes-agent/issues/14418) |
| #14402 | Broken memory user_id regression test imports nonexistent module | 2026-04-23 | P3 | [Link](https://github.com/NousResearch/hermes-agent/issues/14402) |
| #12703 | error in Ollama cloud providers | 2026-04-19 | type/bug | [Link](https://github.com/NousResearch/hermes-agent/issues/12703) |
| #12308 | More documentation required for connecting Docker compose Hermes to vLLM | 2026-04-18 | P3 | [Link](https://github.com/NousResearch/hermes-agent/issues/12308) |

### Issues Estancadas

| Issue | Título | Observação | Link |
|-------|--------|------------|------|
| #14420 | Agent unable to give accurate answer based on previous context | 9 comentários — necesita triagem formal | [Link](https://github.com/NousResearch/hermes-agent/issues/14420) |
| #15802 | API Server/WebUI path cannot surface dangerous command approval prompts | Problema de UX em caminhos não-interativos | [Link](https://github.com/NousResearch/hermes-agent/issues/15802) |

### Recomendações de Priorização

1. **Alta Prioridade:**
   - Resolver issues de memória/context (#14420, #20245, #18875)
   - Padronizar provider infrastructure (#14418)
   - Corrigir test de regressão quebrado (#14402)

2. **Média Prioridade:**
   - Melhorar documentação Docker (#12308)
   - Resolver integração Ollama (#12703)
   - Implementar version pinning de plugins (#20350)

3. **Documentação:**
   -many docs PRs foram fechados (salvage) — garantir que não há conflitos
   - Atualizar guias de providers com PRs recentes

---

## Métricas Resumidas

| Indicador | Valor (24h) | Tendência |
|-----------|-------------|-----------|
| Issues abertas/ativas | 41 | Estável |
| PRs abertos | 8 | Baixo |
| PRs merged/closed | 42 | Alto |
| Releases | 0 | — |
| P1 issues abertas | 4 | Requer atenção |
| P2 issues abertas | ~15 | Significativo |
| Issues com >5 comentários | 2 | Engajamento moderado |

---

**Relatório gerado em:** 2026-05-06  
**Fonte:** Dados GitHub NousResearch/hermes-agent (últimas 24h)  
**Próxima atualização recomendada:** 2026-05-07

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-05-06

---

## 1. Panorama do Dia

O ecossistema PicoClaw manteve alta atividade em 06/05/2026, com **17 issues e 24 PRs** atualizados nas últimas 24h — indicando intensificação do engajamento da comunidade. A release nightly **v0.2.8-nightly.20260505** chegou ao main com builds automatizados, sinalizando progresso contínuo em direção à próxima release estável. O projeto demonstra maturidade operacional com correções de bugs, melhorias de segurança e introduções de features sendo conduzidas simultaneamente. A proporção de PRs abertos (15) versus fechados/merged (9) sugere pipeline saudável de code review.

---

## 2. Lançamentos

### Release Ativa: `nightly` — v0.2.8-nightly.20260505.57459574

- **Tipo:** Automated build diário (nightly)
- **Status:** Instável — uso em produção desaconselhado
- **Changelog:** https://github.com/sipeed/picoclaw/compare/v0.2.8...main
- **Observação:** Não há breaking changes documentadas; trata-se de build de integração contínua.

> Não há releases formais (tagged) novas no período. O último release estável permanece **v0.2.8**.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados (9 total)

| # | Título | Impacto |
|---|--------|---------|
| [#2773](https://github.com/sipeed/picoclaw/pull/2773) | fix(agent): send SVG attachments as files | Correção crítica — SVG era enviado via path de imagem raster, causando falha em Telegram. Agora usa delivery de documento/arquivo. |
| [#2767](https://github.com/sipeed/picoclaw/pull/2767) | fix(seahorse): enforce target token thresholds for leaf summaries | Corrige lógica de aceitação em `generateLeafSummary` que não alcançava metas de compactação. |
| [#2520](https://github.com/sipeed/picoclaw/pull/2520) | fix: resolve cron task creation and execution failures | Resolve bug crônico de criação e execução de tarefas cron. |
| [#2470](https://github.com/sipeed/picoclaw/pull/2470) | Fix cron reminder phrasing and improve MCP tool visibility | Aprimora guidance de cron jobs e visibilidade de MCP tools em instâncias de longa duração. |
| [#2372](https://github.com/sipeed/picoclaw/pull/2372) | fix(config,providers): resolve api_key, model lookup, and fallback bugs | Correção multi-bug: aceita `api_key` legado (string singular), melhora fallbacks de `findMatches`, corrige erros 401. |
| [#2370](https://github.com/sipeed/picoclaw/pull/2370) | fix: tolerate whitespace in split marker from LLM output | Normaliza regex para markers `<| [SPLIT] |>` com espaços. |
| [#2369](https://github.com/sipeed/picoclaw/pull/2369) | feat: PicoWatch — trial monitoring menu bar app + WhatsApp status counter | Nova ferramenta de monitoramento (macOS) com contador de trials e notificações. |
| [#2364](https://github.com/sipeed/picoclaw/pull/2364) | fix: avoid restoring stale sessions with dangling tool calls | Previne sessões travadas após restart quando há tool-calls incompletos. |
| [#626](https://github.com/sipeed/picoclaw/pull/626) | feat: add generic bidirectional webhook channel | Adiciona channel webhook genérico com dois endpoints (`/v1/inbound`, `/v1/outbound`). |

### PRs Abertos com Alto Impacto

- **[#2760](https://github.com/sipeed/picoclaw/pull/2760)** — add provider-backed image generation tool: Tool `image_generate` disabled-by-default, integra com pipeline MediaStore existente.
- **[#2759](https://github.com/sipeed/picoclaw/pull/2759)** — Scope Seahorse retrieval tools to current session: Melhora isolamento de sessões em ferramentas de busca.
- **[#2758](https://github.com/sipeed/picoclaw/pull/2758)** — Fix Telegram media group album handling: Bufferiza albums multi-foto processando como uma única mensagem.
- **[#2762](https://github.com/sipeed/picoclaw/pull/2762)** — feat(agent): stop command: Implementa `/stop` builtin para abortar tasks ativas.
- **[#2491](https://github.com/sipeed/picoclaw/pull/2491)** — Add session management commands: `/status`, `/compact`, `/new`.
- **[#2693](https://github.com/sipeed/picoclaw/pull/2693)** — fix: block find / from bypassing workspace sandbox: **Correção de segurança crítica**.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários + reactions)

| # | Título | Comentários | Tipo | Relevância |
|---|--------|-------------|------|------------|
| [#2513](https://github.com/sipeed/picoclaw/issues/2513) | [BUG] gateway start abnormal | 8 | Bug/Canal | Gateway trava em `-public -no-browser` com glm4.7 |
| [#1757](https://github.com/sipeed/picoclaw/issues/1757) | [BUG] cron tasks causam channel error | 7 | Bug/Cron | Tarefas horárias falham em Raspberry Pi Zero W via Telegram |
| [#1950](https://github.com/sipeed/picoclaw/issues/1950) | [Feature] Streaming Output for Web Chat | 6 | Enhancement/Canal | Demanda antiga — streaming de output em web chat |
| [#2431](https://github.com/sipeed/picoclaw/issues/2431) | Tool execution failures devem reportar tool bloqueada | 4 | Enhancement/Tool | Melhora de logging para debugging de tools |
| [#2404](https://github.com/sipeed/picoclaw/issues/2404) | Add config to send streaming HTTP request | 4 | Enhancement/Provider | Suporte a streaming de requests HTTP para backends LLM |

### Análise de Demandas

- **Canais (Telegram, Discord, LINE):** Domínio com maior volume de issues — 5+ issues concentradas em bugs de mídia, album handling e grupos multi-usuário. A comunidade demonstra uso intenso em produção com múltiplos provedores de mensagem.
- **Provider/Configuração:** Usuários enfrentam fricção ao configurar modelos (API keys, streaming, fallbacks). O PR [#2372](https://github.com/sipeed/picoclaw/pull/2372) já aborda parte desses problemas.
- **Segurança:** Issue [#2688](https://github.com/sipeed/picoclaw/issues/2688) sobre sandbox bypass foi elevada com priority:high — requer atenção imediata.

---

## 5. Bugs e Estabilidade

### Por Severidade

#### 🔴 Alta Prioridade / Críticos

| # | Título | Domínio | Status | Notas |
|---|--------|---------|--------|-------|
| [#2688](https://github.com/sipeed/picoclaw/issues/2688) | Security: find / can enumerate paths outside workspace sandbox | Security/Tool | **OPEN** | Sandbox bypass permite enumeração de filesystem. PR [#2693](https://github.com/sipeed/picoclaw/pull/2693) em andamento. |
| [#2513](https://github.com/sipeed/picoclaw/issues/2513) | Gateway start abnormal | Canal | **OPEN** | 8 comentários — gateway trava com glm4.7 em modo público |
| [#2694](https://github.com/sipeed/picoclaw/issues/2694) | [BUG] failed to verify certificate: x509 | Provider | **OPEN** | Certificado inválido em Android ADB shell |

#### 🟡 Média Prioridade

| # | Título | Domínio | Status | Notas |
|---|--------|---------|--------|-------|
| [#1757](https://github.com/sipeed/picoclaw/issues/1757) | Cron tasks causam channel error | Cron/Canal | **OPEN** | 7 comentários — afeta Raspberry Pi Zero W |
| [#2702](https://github.com/sipeed/picoclaw/issues/2702) | Multi-user group channels: falta sender attribution | Canal/Agent | **OPEN** | Histórico sem identificação de remetente |
| [#2471](https://github.com/sipeed/picoclaw/issues/2471) | Neometron NVIDIA AI / Gemini models não funcionam | Provider/Docker | **CLOSED** | Reportado como configuração local — closed |
| [#2716](https://github.com/sipeed/picoclaw/issues/2716) | SVG files fail to send on Telegram | Canal | **CLOSED** | Corrigido em [#2773](https://github.com/sipeed/picoclaw/pull/2773) |

#### 🟢 Baixa / Resolvidos

| # | Título | Domínio | Status |
|---|--------|---------|--------|
| [#2726](https://github.com/sipeed/picoclaw/issues/2726) | generateLeafSummary acceptance criteria | Agent | **CLOSED** — Corrigido em [#2767](https://github.com/sipeed/picoclaw/pull/2767) |

### Resumo de Estabilidade

- **3 bugs críticos ativos** (incluindo security bypass)
- **2 bugs críticos resolvidos** no período (SVG Telegram, Seahorse token thresholds)
- Issues stale (sem atualização >14 dias): 10+ items marcados, sugerindo backlog de triagem

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Novas (Issues Abertas)

| # | Título | Domínio | Notas |
|---|--------|---------|-------|
| [#2775](https://github.com/sipeed/picoclaw/issues/2775) | Sub-agents herdam AGENT.md do root — causa confusão de identidade | Agent | Multi-agent architecture precisa injetar prompts específicos por role |
| [#2774](https://github.com/sipeed/picoclaw/issues/2774) | Adicionar suporte "context and memory management" (inspirado em magic-context) | Agent | Cache-aware infinite context, cross-session memory, background compression |
| [#2771](https://github.com/sipeed/picoclaw/issues/2771) | Melhorar confiabilidade e migração de config | Config | Config example desatualizado (V2 vs V3), UX gaps |
| [#2698](https://github.com/sipeed/picoclaw/issues/2698) | Adicionar suporte Mission Control (atualmente OpenClaw only) | Agent | Integração com projeto mission-control |
| [#2695](https://github.com/sipeed/picoclaw/issues/2695) | Documentar libpicolaw.so no Android release | Build/Docs | Falta documentação de API pública |
| [#2646](https://github.com/sipeed/picoclaw/issues/2646) | Tested on NXP i.MX93 EVK | Docs/Hardware | Reporte de compatibilidade ARM64 — ferramenta funciona |

### Features em PR (Pipeline)

- **Image Generation** ([#2760](https://github.com/sipeed/picoclaw/pull/2760)) — provider-agnostic, via MediaStore
- **Session Management Commands** ([#2491](https://github.com/sipeed/picoclaw/pull/2491)) — `/status`, `/compact`, `/new`
- **Dynamic MCP Headers** ([#2696](https://github.com/sipeed/picoclaw/pull/2696)) — headers por-request via context
- **Model Management com Provider Metadata** ([#2701](https://github.com/sipeed/picoclaw/pull/2701)) — normalização provider/catálogo

### Sinais de Roadmap

1. **Gestão de memória e contexto** emerge como tema recorrente (#2774, #2491, #2698) — possível foco em v0.3.x
2. **Multi-agent orchestration** precisa de trabalho (#2775, #2698) — herança de prompts e isolamento de sessões
3. **Expansão de channels** com LINE SDK v8 (#2413) e webhook genérico (#626) — modularidade de integrations
4. **Segurança** reforçada com sandbox fixes (#2693) e tool blocking (#2431)

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Categoria | Problema | Frequência |
|-----------|----------|------------|
| **Configuração de Providers** | API keys rejeitadas silenciosamente, modelos não encontrados, fallbacks quebrados | Alta — 3+ issues |
| **Canais (especialmente Telegram)** | Mídia falha (SVG, albums), erros em grupos multi-usuário, channel errors em cron | Alta — 5+ issues |
| **Estabilidade em Hardware Limitado** | Raspberry Pi Zero W apresenta crashes e timeouts | Média — 2+ reports |
| **Segurança do Sandbox** | `find /` expõe filesystem completo | Crítica — 1 report, priority:high |
| **Documentação/Android** | Falta documentação de `libpicolaw.so` para devs mobile | Baixa — 1 request |

### Cenários de Uso Observados

- **Agentes pessoais em hardware variado:** Desktop (Debian 13), ARM SBCs (RPi Zero W, NXP i.MX93)
- **Integração com LLMs:** glm4.7, Qwen/Dashscope, Ollama, ElevenLabs, Gemini
- **Canais populares:** Telegram (maior volume), Discord, LINE, WhatsApp (via PicoWatch)
- **Automação:** Cron jobs para tarefas horárias/diárias, MCP tools

### Indicadores de Satisfação

- Comunidade ativa reportando bugs detalhadamente (formato padronizado)
- Contribuições significativas de terceiros (bogdanovich, afjcjsbx, MichelSantos)
- MRs sendo merged com frequência (9 fechadas em 24h)

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta / Stale (>14 dias sem interação)

| # | Título | Criado | Status | Prioridade |
|---|--------|--------|--------|------------|
| [#2688](https://github.com/sipeed/picoclaw/issues/2688) | Security: sandbox bypass via find / | 2026-04-27 | **OPEN** | 🔴 **Alta** — security critical |
| [#2505](https://github.com/sipeed/picoclaw/pull/2505) | CLI: Improve embedding of workspace files | 2026-04-13 | **OPEN** | 🟡 Média |
| [#2490](https://github.com/sipeed/picoclaw/pull/2490) | CLI: Fix onboard advisory about config files | 2026-04-12 | **OPEN** | 🟡 Média |
| [#2413](https://github.com/sipeed/picoclaw/pull/2413) | refactor(line): use official LINE Bot SDK v8 | 2026-04-07 | **OPEN** | 🟢 Baixa |
| [#2695](https://github.com/sipeed/picoclaw/issues/2695) | Document libpicolaw.so in Android release | 2026-04-28 | **OPEN** | 🟢 Documentação |
| [#2698](https://github.com/sipeed/picoclaw/issues/2698) | Add Mission Control support | 2026-04-28 | **OPEN** | 🟡 Enhancement |

### Recomendações de Triagem

1. **[#2688](https://github.com/sipeed/picoclaw/issues/2688)** — Security bypass requer merge urgente do PR [#2693](https://github.com/sipeed/picoclaw/pull/2693). Se ainda não mesclado, é critical path.
2. **Stale labels** — ~10 issues marcadas `stale` sem resposta. Recomenda-se triagem de fechamento ou reassign para manter project board limpo.
3. **Config/UX issues** ([#2771](https://github.com/sipeed/picoclaw/issues/2771), [#2490](https://github.com/sipeed/picoclaw/pull/2490)) — impactam onboarding de novos usuários. Priorizar antes de próxima release.

---

## Indicadores de Saúde do Projeto

| Métrica | Valor | Avaliação |
|---------|-------|-----------|
| Issues ativas (24h) | 17 | 🟢 Alta |
| PRs atualizados (24h) | 24 | 🟢 Muito alta |
| Taxa de resolução (issues fechadas/ativas) | 4/13 = 31% | 🟡 Moderada |
| PRs merged (24h) | 9 | 🟢 Excelente |
| Bugs críticos abertos | 3 | 🟡 Requer atenção |
| Security issues | 1 (alta) | 🔴 Prioritário |
| Issues stale | ~10 | 🟡 Backlog inflado |

**Veredicto:** Projeto saudável com atividade intensa. главный риск — segurança (sandbox bypass) e stale backlog. Recomenda-se merge de #2693 imediatamente e triagem de issues antigas antes da v0.3.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-05-06

---

## 1. Panorama do dia

O IronClaw apresenta **atividade extremamente alta** nesta data, com 42 PRs atualizados em 24h — um ritmo notável mesmo para um projeto maduro. O trabalho está concentrado em três verticais principais: **finalização da arquitetura Reborn** (turn coordinator, event store backends, persistência de estado), **hardening de segurança** (assinatura de credenciais WASM, scanning pré-execução shell com Tirith) e **melhoria da documentação** (Docker, banco de dados, configuração). A issue mais crítica do dia é o desalinhamento entre as releases taggeadas no GitHub (0.25.0–0.27.0) e o que está publicado no crates.io (apenas 0.24.0), criando um problema de distribuição para consumidores downstream.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

### 📌 Problema Pendente de Distribuição
A issue [#3259](https://github.com/nearai/ironclaw/issues/3259) reporta que o repositório GitHub possui tags até `ironclaw-v0.27.0` (29/abr/2026), porém o crates.io **só tem a versão 0.24.0** disponível. Consumidores que puxam via Cargo estão pinned a uma versão de mais de um mês. Este é um gap operacional que precisa ser corrigido para garantir distribuição consistente.

---

## 3. Progresso do Projeto

Os seguintes PRs foram **merged/fechados** nas últimas 24h, representando avanços concretos:

| PR | Título | Escopo | Tamanho | Destaque |
|----|--------|--------|---------|----------|
| [#3260](https://github.com/nearai/ironclaw/pull/3260) | Salvage Docker Hub image fix | docs | S | Corrige referências `nearai/ironclaw` → `nearaidev/ironclaw` na documentação |
| [#3217](https://github.com/nearai/ironclaw/pull/3217) | Fix Docker Hub image name (#2963) | docs | S | Fecha issue #2963; contribuidor novo |
| [#3258](https://github.com/nearai/ironclaw/pull/3258) | Salvage database and configuration docs navigation | docs | XL | Promove páginas de Database e Configuration para navegação ativa |
| [#2948](https://github.com/nearai/ironclaw/pull/2948) | Add Database and Configuration pages to live navigation | docs | XL | Documentação completa do sistema dual-backend (PostgreSQL + libSQL) com 24 migrations |
| [#3235](https://github.com/nearai/ironclaw/pull/3235) | Unblock Live Canary auth lanes | tool/builtin, ci | L | Restaura testes de autenticação OAuth após mudança de contrato engine-v2 |
| [#3252](https://github.com/nearai/ironclaw/pull/3252) | Define turn coordinator public API | docs | L | Define contratos públicos de submit/resume/cancel/state para TurnCoordinator |
| [#3255](https://github.com/nearai/ironclaw/pull/3255) | Harden turn coordinator contracts | docs | M | Adiciona proteção contra completion/failure em runs com CancelRequested |
| [#3249](https://github.com/nearai/ironclaw/pull/3249) | Unblock main after reborn merge | ci | S | Corrige Windows clippy, espaço em disco, timeout de coverage (30→60min) |
| [#3240](https://github.com/nearai/ironclaw/pull/3240) | Per-request credential signing HMAC/EIP-712/NEP-413 | tool/wasm | XL | Fecha feature de assinatura de credenciais em runtime genérico |

**Avanços-chave:**
- ✅ Documentação Docker corrigida e em produção
- ✅ Documentação de Database/Config disponibilizada na navegação live
- ✅ Turn Coordinator API com contratos de cancelamento reforçados
- ✅ Autenticação Live Canary restaurada
- ✅ CI/CD estabilizado após merge da arquitetura Reborn

---

## 4. Temas Quentes da Comunidade

### PRs com atividade significativa (42 total, top 5):

1. **[#3257](https://github.com/nearai/ironclaw/pull/3257)** — `feat(reborn): add turn persistence contracts` (XL, docs)
   - Adiciona registros de persistência em nível de contrato para turns, runs, active locks, checkpoints e idempotência
   - Mantém metadata explícita de replay no turn store in-memory
   - Marco fundamental para a arquitetura Reborn

2. **[#1378](https://github.com/nearai/ironclaw/pull/1378)** — `feat(routing): per-channel MCP and built-in tool filtering` (XL, multi-escopo)
   - Sistema de roteamento JSON-configurável por canal
   - Filtra quais servidores MCP e ferramentas built-in são oferecidas ao LLM baseado no canal de entrada
   - Atende demanda por multi-channel deployments (Slack + Telegram + web)

3. **[#3256](https://github.com/nearai/ironclaw/pull/3256)** — `feat(wasm): credential signers for HMAC, EIP-712, NEP-413, Solana` (XL, high risk)
   - Adiciona 4 novas variantes de `CredentialLocation` para assinatura de credenciais
   - Runtime genérico com declaração de schemas via `capabilities.json`
   - Risco: HIGH — altera superfície de segurança de secrets/sandbox/dependencies

4. **[#3254](https://github.com/nearai/ironclaw/pull/3254)** — `feat(security): add tirith pre-exec scanning on interactive shell approval paths` (XL, high risk)
   - Integração com [Tirith](https://github.com/sheeki03/tirith), CLI de segurança Rust para análise de comandos shell
   - Detecta homograph/punycode attacks, Unicode confusables, etc.
   - Recurso diferenciado: proteção contra ameaças de conteúdo que regex deny-lists não capturam

5. **[#3253](https://github.com/nearai/ironclaw/pull/3253)** — `feat: multi-tenant relay channel with per-user identity resolution` (L, medium risk)
   - Resolve `sender_id` → `UserId` via PairingStore em cada evento relay
   - Cria `channel_identities` pairing entre Slack `authed_user_id` e usuário IronClaw
   - Suporte a multi-tenant com resolução de identidade por usuário

---

## 5. Bugs e Estabilidade

### Problemas Reportados:

| Severidade | Issue/PR | Descrição | Status |
|------------|-----------|-----------|--------|
| **Alta** | [#2963](https://github.com/nearai/ironclaw/issues/2963) | Docker Hub image `nearai/ironclaw:latest` não existe | ✅ FECHADO |
| **Alta** | [#3259](https://github.com/nearai/ironclaw/issues/3259) | crates.io desatualizado (0.24.0 vs 0.27.0 tags) | 🟡 ABERTO |

### Correções Aplicadas:
- **PR [#3249](https://github.com/nearai/ironclaw/pull/3249):** Corrige `No space left on device` em builds de coverage; ajusta timeout E2E de 30 para 60 minutos
- **PR [#3235](https://github.com/nearai/ironclaw/pull/3235):** Desbloqueia auth lanes do Live Canary após mudança de contrato engine-v2
- **PR [#3255](https://github.com/nearai/ironclaw/pull/3255):** Hardening do TurnCoordinator contra estados inválidos de cancelamento

### Observação de Estabilidade:
A taxa de sucesso de merges (23 fechadas vs 19 abertas) indica **ciclo de revisão saudável**. A estabilização do CI após merge do Reborn (#3249) é um indicador positivo de maturidade da arquitetura.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features em Desenvolvimento:

| PR | Feature | Escopo | Risco | Sinal de Roadmap |
|----|---------|--------|-------|------------------|
| [#3256](https://github.com/nearai/ironclaw/pull/3256) | Assinatura de credenciais (HMAC/EIP-712/NEP-413/Solana) | tool/wasm, secrets, sandbox | HIGH | Infraestrutura de segurança multi-chain |
| [#3254](https://github.com/nearai/ironclaw/pull/3254) | Tirith pre-exec scanning em shell interativo | security | HIGH | Defense-in-depth para tooling de terminal |
| [#3171](https://github.com/nearai/ironclaw/pull/3171) | Reborn event store backends (JSONL/PostgreSQL/libSQL) | docs, dependencies | medium | Persistência durável para audit trail |
| [#3253](https://github.com/nearai/ironclaw/pull/3253) | Multi-tenant relay channel com identity resolution | channel/web, db, pairing | medium | Suporte enterprise multi-tenant |
| [#3243](https://github.com/nearai/ironclaw/pull/3243) | Runtime policy vocabulary (PR 1/8) | host-api, config | medium | Sistema de presets e políticas efetivas |

### Demandas Identificadas:
- **Roteamento por canal** (#1378): multi-channel deployments precisam de scoping de ferramentas por canal — indica estratégia de plataformas cruzadas
- **Publishing crates.io** (#3259): processo de release precisa incluir publicação em registries — bottleneck operacional

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas:

1. **Confusão com Docker image** — [#2963](https://github.com/nearai/ironclaw/issues/2963) (magnusviri)
   > `pull access denied for nearai/ironclaw, repository does not exist`
   - **Impacto:** Usuários seguindo a documentação de instalação falham ao tentar puxar imagem
   - **Resolução:** Documentação atualizada para `nearaidev/ironclaw` — mitigado

2. **Versionamento desatualizado no ecosystem** — [#3259](https://github.com/nearai/ironclaw/issues/3259) (dacoldest)
   - Usuários via Cargo pinned a 0.24.0, sem acesso a features e security patches de 0.25.0–0.27.0
   - **Impacto:** Consome versão desatualizada de crates.io mesmo com updates disponíveis no repo

### Cenários de Uso Observados:
- **Multi-channel deployment:** Slack + Telegram + web (#1378)
- **Enterprise multi-tenant:** Resolução de identidade por usuário em relay channels (#3253)
- **Database production-ready:** 24 migrations, PostgreSQL + libSQL dual-backend (#2948, #3258)

### Satisfação/Insatisfação:
- ✅ Problema Docker resolvido rapidamente (2 semanas da issue ao merge)
- ⚠️ Publicação em crates.io não segue ritmo das tags GitHub — processo manual pode ser o gargalo

---

## 8. Backlog que Merece Atenção

### Issues/PRs sem resposta há >7 dias:

| Item | Tipo | Idade | Prioridade | Motivo |
|------|------|-------|------------|--------|
| Per-channel MCP routing | PR | Aprovado em 18/mar (49 dias) | Alta | XL scope, múltiplos escopos; precisa revisão de design |
| Reborn event store backends | PR | 5 dias | Alta | Arquitetura foundation — atrasos afetam toda a pilha |
| Native-isolated guardrails | PR | 5 dias | Alta | Memory substrate para Reborn |
| Runtime policy vocabulary | PR | 1 dia | Média | PR 1 de stack de 8 |
| Publish crates.io 0.25.0-0.27.0 | Issue | 1 dia | **Crítica** | Bloqueia distribuição para consumidores Cargo |

### Recomendações:
1. **Priorizar publishing crates.io (#3259)** — impacta usuários downstream imediatamente
2. **Revisar PRs de arquitetura Reborn (#3171, #3180)** — são foundation blocks para features dependentes
3. **Estabelecer processo automatizado de publish** — o gap 0.24.0 vs 0.27.0 sugere release manual como bottleneck

---

## Métricas de Saúde do Projeto

| Indicador | Valor | Avaliação |
|-----------|-------|-----------|
| PRs fechadas (24h) | 23 | 🟢 Excelente |
| PRs abertas (24h) | 19 | 🟢 Alta atividade |
| Issues fechadas (24h) | 1 | 🟢 Saúde stable |
| Issues abertas (24h) | 1 | 🟢 Baixa fricção |
| Releases (24h) | 0 | 🟡 Ritmo de release não acompanha tags |
| Contribuidores ativos | 4 core + 2 new | 🟢 Diversidade de contribuição |
| Bugs críticos | 1 (crates.io sync) | 🟡 Requer atenção |
| Features de segurança | 2 (HIGH risk) | 🟡 Revisão cuidadosa necessária |

**Veredito:** IronClaw está em **modo de hardening e estabilização** da arquitetura Reborn. A atividade intensa de PRs (42) com taxa de merge de 55% nas últimas 24h indica um sprint bem executado. O principal risco é o gap de distribuição em crates.io, que precisa ser resolvido para evitar fragmentação da base de usuários.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# 📊 Relatório do Projeto CoPaw — 2026-05-06

---

## 1. Panorama do Dia

O projeto CoPaw demonstra **saúde ativa e saudável** neste período. A atividade é robusta com 10 issues e 10 PRs atualizados nas últimas 24h, com distribuição equilibrada entre contribuições de primeira vez (6 PRs) e membros recorrentes. O foco atual está em **estabilidade multi-plataforma** (Windows), **segurança**, **i18n** (extensão para português brasileiro), e **features de UX** como geração de títulos de sessão por LLM. Nenhuma release foi publicada recentemente, indicando que o projeto está em fase de refinamento pré-lançamento.

---

## 2. Lançamentos

**Nenhum release detectado nas últimas 24h.**

O projeto permanece na versão `1.1.5.post1` (referenciada na issue #4042). A ausência de releases sugere que contribuições estão em pipeline de revisão antes do próximo tag.

---

## 3. Progresso do Projeto

### PR Merged/Closed

| PR | Título | Impacto |
|---|---|---|
| [#3829](https://github.com/agentscope-ai/QwenPaw/pull/3829) | `feat(chat): generate session titles asynchronously via LLM` | **UX aprimorada** — Substitui placeholders "primeiros 10 caracteres" por títulos gerados por modelo, eliminando confusão visual na gaveta de sessões do Console |

### PRs em Revisão de Alto Valor

| PR | Título | Impacto |
|---|---|---|
| [#3117](https://github.com/agentscope-ai/QwenPaw/pull/3117) | `Feat/semantic skill routing` | **Performance** — Routing semântico baseado em embeddings filtra skills irrelevantes, reduzindo consumo de tokens em contextos extensos |
| [#4009](https://github.com/agentscope-ai/QwenPaw/pull/4009) | `feat(i18n): add Brazilian Portuguese (pt-BR)` | **Expansão de mercado** — Suporte a pt-BR abre base lusófona |
| [#4041](https://github.com/agentscope-ai/QwenPaw/pull/4041) | `feat(cli-desktop): System tray startup (win32)` | **UX Windows** — Minimização para bandeja e auto-start |
| [#4038](https://github.com/agentscope-ai/QwenPaw/pull/4038) | `feat(cli): refuse non-loopback bind` | **Segurança** — Bloqueia exposição acidental do gateway HTTP em interfaces públicas |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| Issue | Título | Comentários | Tema Central |
|---|---|---|---|
| [#3224](https://github.com/agentscope-ai/QwenPaw/issues/3224) | **CoPaw Agent Teams** — 自进化多智能体协作团队 | **5** | Proposta ambiciosa de equipes auto-evolutivas de agentes guiados por linguagem natural. Usuário solicita transição de "manual" para "automático" no gerenciamento multi-agente. Indicador de demanda para casos de uso enterprise |
| [#2865](https://github.com/agentscope-ai/QwenPaw/issues/2865) | **Custom agent names/avatars** | **3** | Personalização visual do chat dialog via URL customizada — demanda básica de branding |
| [#3401](https://github.com/agentscope-ai/QwenPaw/issues/3401) | **OpenCode model connection bug** | **3** | Bug de conectividade com modelos gratuitos do OpenCode — impacto em novos usuários que testam sem API key |

### Análise de Demandas

- **Multi-agência e coordenação** emergem como tema quente, com proposta de evolução do modelo atual para equipes auto-organizáveis
- **I18n** ganha força com PR brasileiro em revisão
- **Segurança de arquivos e rede** são preocupações crescentes da comunidade

---

## 5. Bugs e Estabilidade

### Bugs Reportados (por Severidade)

| Severidade | Issue | Título | Plataforma | Status |
|---|---|---|---|---|
| 🔴 **P0** | [#4043](https://github.com/agentscope-ai/QwenPaw/issues/4043) | Windows: skill registration failure + slow startup | **Windows** | OPEN |
| 🔴 **P0** | [#4040](https://github.com/agentscope-ai/QwenPaw/issues/4040) | `max_tokens=2048` hardcoded — resposta truncada em providers compatíveis com Anthropic | Cross-platform | OPEN |
| 🟠 **P1** | [#4017](https://github.com/agentscope-ai/QwenPaw/issues/4017) | HEARTBEAT.md ativo: canal não reconecta após perda de rede | Cross-platform | OPEN |
| 🟠 **P1** | [#4042](https://github.com/agentscope-ai/QwenPaw/issues/4042) | DingTalk: race condition no lifecycle do event loop — notificação falha | macOS/ DingTalk | OPEN |

### Bugs Resolvidos

| Issue | Título | Conclusão |
|---|---|---|
| [#3401](https://github.com/agentscope-ai/QwenPaw/issues/3401) | Bug conexão OpenCode免费模型 | **CLOSED** — 3 comentários, pode indicar workaround ou fechamento por duplicata |

**⚠️ Alerta:** Issue #4043 agrupa múltiplos bugs P0 para Windows com sintomas de race condition na inicialização e falha de registration de skills.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Propostas

| Issue/PR | Título | Relevância Estratégica |
|---|---|---|
| [#3224](https://github.com/agentscope-ai/QwenPaw/issues/3224) | **CoPaw Agent Teams** — auto-evolução multi-agente | ⭐⭐⭐ Alta — diferenciação de mercado |
| [#2865](https://github.com/agentscope-ai/QwenPaw/issues/2865) | Custom agent names + avatars | ⭐⭐ Média — UX/ branding |
| [#4041](https://github.com/agentscope-ai/QwenPaw/pull/4041) | System tray para Windows | ⭐⭐ Média — UX desktop |
| [#3117](https://github.com/agentscope-ai/QwenPaw/pull/3117) | Semantic skill routing | ⭐⭐⭐ Alta — performance em uso com skills extensos |

### Sinais de Roadmap Inferidos

1. **Foco em plataformas desktop** — system tray Windows, diagnósticos Windows no doctor, melhorias de startup
2. **Escalabilidade de skills** — routing semântico addressa contexto limitado quando usuário instala muitas skills
3. **Multi-agência** — Agent Teams é direção ambiciosa mas alinhada com tendência do mercado de agentic AI

---

## 7. Resumo de Feedback dos Usuários

### Dores Documentadas

| Categoria | Descrição | Impacto |
|---|---|---|
| 🪟 **Windows UX** | "技能安装后未注册", lentidão na inicialização, ausência de system tray | Usuários Windows frustrados com experiência quebrada |
| 🔌 **Estabilidade de rede** | HEARTBEAT.md causa falha de reconexão; Telegram polling inconsistente | Agentes em produção com conexões instáveis |
| 🔒 **Segurança de arquivos** | `write_file` pode sobrescrever arquivos não-vazios silenciosamente | Usuários com workflows de automação em risco |
| 🤖 **Limites de modelos** | `max_tokens=2048` hardcoded impede uso de modelos com contexto longo | Usuários de providers compatíveis com Anthropic penalizados |

### Cenários de Uso em Evidência

- **Multi-canal Discord** — usuários business querem paralelizar tarefas entre canais
- **Integração DingTalk** — adoção em ambiente corporativo chino, exige robustez de notificações
- **Skills como extensibilidade** — ecosystem de skills é central para valor do produto

### Satisfação

- PR #3829 (títulos de sessão por LLM) fechado positivamente, indicando que demandas de UX são priorizadas
- Contribuições de primeira vez aumentam, sinal de comunidade saudável

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta há >7 dias

| Issue | Título | Criação | Comentários | Prioridade |
|---|---|---|---|---|
| [#3224](https://github.com/agentscope-ai/QwenPaw/issues/3224) | CoPaw Agent Teams | 2026-04-10 | **5** (discussão ativa) | 🔴 Alta |
| [#2865](https://github.com/agentscope-ai/QwenPaw/issues/2865) | Custom agent names/avatars | 2026-04-03 | **3** | 🟠 Média |
| [#1798](https://github.com/agentscope-ai/QwenPaw/issues/1798) | Discord多频道任务并行处理 | 2026-03-18 | **1** (closed recently) | 🟡 Baixa |

### PRs com Need Discussions

| PR | Título | Status |
|---|---|---|
| [#3117](https://github.com/agentscope-ai/QwenPaw/pull/3117) | Semantic skill routing | `need discussions` — requiere decisão arquitetural antes de merge |

### Recomendações

1. **Issue #3224** — Agent Teams é feature grande; requer triagem de projeto e roadmap visibility
2. **Issue #4043** — Bugs P0 agrupados no Windows precisam de owner designado
3. **PR #3117** — Decisão sobre arquitetura de routing semântico deve ser tomada para desbloquear revisão

---

## 📈 Métricas de Saúde do Projeto

| Indicador | Valor | Status |
|---|---|---|
| Issues ativas/fechadas (24h) | 6/4 | ✅ Equilibrado |
| PRs abertos/merged (24h) | 9/1 | ✅ Pipeline saudável |
| Contribuidores primeira vez (24h) | 6 | ⭐ Excelente |
| Bugs P0 aberto | 2 | ⚠️ Requer atenção |
| Features bloqueadas por discussões | 1 | 📌 Requer decisão |

---

*Relatório gerado em 2026-05-06 | Fonte: github.com/agentscope-ai/CoPaw (QwenPaw)*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-05-06

---

## 1. Panorama do Dia

O ecossistema ZeroClaw apresenta **alta atividade operacional** no curto prazo: 50 issues e 50 PRs atualizados nas últimas 24h, sem novos releases disponíveis. A dinâmica reflete um projeto em fase intensa de hardening — множественные correções de segurança em canais (WhatsApp, Telegram) e estabilização de funcionalidades críticas como context compression, HMAC tool receipts e dashboard. A proporção de 36 PRs abertos versus 14 fechados/merged sugere um pipeline saudável de contribuição, com reviewers ativos. O principal ponto de atenção é a concentração de bugs P1 em canais de comunicação e runtime, especialmente WhatsApp e onboarding.

---

## 2. Lançamentos

**Nenhum novo release nas últimas 24h.** O projeto não publicou versões durante este período. Isso não é necessariamente negativo — a atividade intensa de PRs (muitos de tamanho L/XL) sugere que o time está trabalhando em features que justificam um release coordenado, possivelmente em preparação para uma próxima versão.

---

## 3. Progresso do Projeto

Três PRs significativos foram fechados/merged nas últimas 24h:

| PR | Autor | Tamanho | Risco | Impacto |
|----|-------|---------|-------|---------|
| [#6214](https://github.com/zeroclaw-labs/zeroclaw/pull/6214) — Ativação de HMAC tool receipts | singlerider | L | high | Reativa receipts criptográficos para segurança de ferramentas (blocado desde #5168) |
| [#6354](https://github.com/zeroclaw-labs/zeroclaw/pull/6354) — Surface LID→phone resolution failures no WhatsApp | singlerider | XS | medium | Melhora visibilidade de falhas silenciosas no WhatsApp Web |
| [#6363](https://github.com/zeroclaw-labs/zeroclaw/pull/6363) — Recall autosaved conversation memories | Audacity88 | M | high | Corrige invisibilidade de memórias autosaved por mismatch de session_id |

O PR #6214 é particularmente relevante: a funcionalidade de HMAC tool receipts já havia sido implementada no core criptográfico (PR #5168), mas a wiring de ativação foi removida antes do merge. A reativação completa traz config struct, plumbing de contexto de canal, addendum de system-prompt e validação de resposta — um passo importante para a postura de segurança do agente.

---

## 4. Temas Quentes da Comunidade

**Issues mais comentadas (24h):**

1. **[#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123)** — `default_model` issue em fresh install · 17 comentários · Bug P1
   - Usuário (`rgnyldz`) reporta erro ao rodar `zeroclaw agent` em LXC container com Ollama em LXC separado. Onboarding configurado aparentemente falha na resolução do modelo default.
   - Discussão ativa indica possível interação entre configuração de provider e resolução de modelo durante inicialização do agente.

2. **[#4710](https://github.com/zeroclaw-labs/zeroclaw/issues/4710)** — Better LOGO · 9 comentários · Enhancement P2
   - thread maduro de design com imagens comparativas. O interesse da comunidade neste item é decorativo, mas reflete engajamento de longo prazo.

3. **[#5550](https://github.com/zeroclaw-labs/zeroclaw/issues/5550)** — Memory `session_id` mismatch · 6 comentários · Fechada
   - Bug de memória conversacional identificado e presumivelmente resolvido (PR #6363). Issue arquivada como closed.

4. **[#4846](https://github.com/zeroclaw-labs/zeroclaw/issues/4846)** — WhatsApp Web channel quebrado · 5 comentários · Bug P1
   - Erro de feature flag faltante (`whatsapp-web`). Contribuidor `atilavat` já tem PR em progresso.

**PRs quentes:**

- **[#6387](https://github.com/zeroclaw-labs/zeroclaw/pull/6387)** — Tool-approval back-channel via WsApprovalChannel · size M, risk high
  - Implementa canal de aprovação de ferramentas via WebSocket no gateway, permitindo que operadores humanos supervisionem tool calls dinamicamente. Mudança arquitetural significativa.

- **[#6392](https://github.com/zeroclaw-labs/zeroclaw/pull/6392)** — Nodes dashboard + device identification · size XL, risk high
  - Feature de fleet management: dashboard `/nodes` para visualização de todas as instâncias ZeroClaw com health, metadata e rename inline.

---

## 5. Bugs e Estabilidade

### Bugs P1 (críticos — workflow bloqueado ou comportamento degradado severo)

| Issue | Autor | Canal/Componente | Resumo |
|-------|-------|------------------|--------|
| [#6400](https://github.com/zeroclaw-labs/zeroclaw/issues/6400) | rikwade | runtime/daemon | Docker bind mount em `/zeroclaw-data` mascara web dashboard pré-buildado |
| [#6402](https://github.com/zeroclaw-labs/zeroclaw/issues/6402) | Nillth | cli | Completion bash entra em recursão infinita e crasha SSH session |
| [#6361](https://github.com/zeroclaw-labs/zeroclaw/issues/6361) | ralfbawg | provider/minimax | Context compression dropa `assistant(tool_calls)` para providers OpenAI-compatíveis, causando tool loops |
| [#6377](https://github.com/zeroclaw-labs/zeroclaw/issues/6377) | tidux | provider | Llama.cpp lança 500 em interações com tool usage |
| [#6399](https://github.com/zeroclaw-labs/zeroclaw/issues/6399) | vanbukin | provider/compatible | Custom provider envia paths de arquivos locais em vez de data URLs, quebrando multimodal |
| [#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) | rgnyldz | onboard/provider | Fresh install com Ollama externo falha no `default_model` |
| [#6120](https://github.com/zeroclaw-labs/zeroclaw/issues/6120) | tidux | onboard | Onboarding sugere OpenAI Codex para chave de API OpenAI |

### Bugs P1 de Segurança (WhatsApp Web)

| Issue | Autor | Severidade | Resumo |
|-------|-------|-----------|--------|
| [#6351](https://github.com/zeroclaw-labs/zeroclaw/issues/6351) | theonlyhennygod | S2 | Self-chat-mode trigger em todas mensagens `fromMe` → agente responde a contatos do operador |
| [#6350](https://github.com/zeroclaw-labs/zeroclaw/issues/6350) | theonlyhennygod | S2 | `allowed-numbers` ignorado para contatos LID → mensagens silenciosamente dropadas |

### Bugs P2 (degradados de comportamento)

- [#6360](https://github.com/zeroclaw-labs/zeroclaw/issues/6360) — Prompt caching não funciona via Telegram (funciona no CLI)
- [#6393](https://github.com/zeroclaw-labs/zeroclaw/issues/6393) — Documentação de Docker installation em chinês está incorreta
- [#6373](https://github.com/zeroclaw-labs/zeroclaw/issues/6373) — `web_search` não retorna nada em fresh install, `web_fetch` funciona

**Padrão identificado:** três bugs P1 concentram-se em providers compatíveis com OpenAI (Llama.cpp, MiniMax, vLLM custom), indicando possível fragilidade no adapter genérico. Dois bugs P1 em onboarding sugerem deuda técnica no wizard de configuração inicial.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features novas destacadas nas últimas 24h

| Issue | Autor | Prioridade | Resumo |
|-------|-------|-----------|--------|
| [#6378](https://github.com/zeroclaw-labs/zeroclaw/issues/6378) | BaroDevelopment | P2 | `allowed_channels` para Discord (paralelo a `allowed_rooms` do Matrix) |
| [#6394](https://github.com/zeroclaw-labs/zeroclaw/issues/6394) | ilteoood | P2 | GitHub action para validação de título de PR seguindo convensão `type(scope): description` |
| [#6391](https://github.com/zeroclaw-labs/zeroclaw/issues/6391) | theonlyhennygod | P2 | Heartbeat real para nodes — derivar Online/Stale/Offline de última mensagem WS |
| [#6345](https://github.com/zeroclaw-labs/zeroclaw/issues/6345) | theonlyhennygod | P1 | `reply-min-interval-secs` por canal para throttling de replies |
| [#6375](https://github.com/zeroclaw-labs/zeroclaw/issues/6375) | singlerider | P2 | Mecanismo V3 de env-var override para credentials e runtime knobs |
| [#6251](https://github.com/zeroclaw-labs/zeroclaw/issues/6251) | databillm | P2 | custo do modelo dentro da definição de provider |
| [#4853](https://github.com/zeroclaw-labs/zeroclaw/issues/4853) | jonathanhefner | P2 | Instalar skills de URI `.well-known` padronizado |

### Recortes significativos de PRs em progresso

| PR | Impacto | Detalhe |
|----|---------|---------|
| [#6385](https://github.com/zeroclaw-labs/zeroclaw/pull/6385) | Installer | `--preset minimal|full`, `--with/--without-gateway`, onboarding de 3 caminhos |
| [#6392](https://github.com/zeroclaw-labs/zeroclaw/pull/6392) | Dashboard | `/nodes` page para fleet management — health, metadata, rename |
| [#6370](https://github.com/zeroclaw-labs/zeroclaw/pull/6370) | Dashboard | Self-update flow no dashboard (extraído de `update.rs`) |
| [#6389](https://github.com/zeroclaw-labs/zeroclaw/pull/6389) | Channels | `reply_min_interval_secs` para TelegramConfig (0..3600s) |
| [#6101](https://github.com/zeroclaw-labs/zeroclaw/pull/6101) | WebUI | Hot-switch de modelo + preservação de contexto chat ao navegar |
| [#6339](https://github.com/zeroclaw-labs/zeroclaw/issues/6339) | Desktop | Universal binary (arm64 + x86_64) para macOS |

**Sinais de roadmap:** O projeto está convergindo para três eixos: (1) **multi-channel robustness** — throttle, permissions e segurança em WhatsApp/Telegram/Discord; (2) **fleet operations** — dashboard de nodes, heartbeat tracking, self-update; (3) **provider diversity** — suporte a providers não-Official (Llama.cpp, MiniMax, vLLM) com ferramentas completas.

---

## 7. Resumo de Feedback dos Usuários

### Dores recorrentes

- **Onboarding problemático:** múltiplos usuários enfrentam erros emfresh installs (Ollama, Llama.cpp, OpenAI Codex). O wizard de configuração parece falhar em cenários de provider não-padrão — `#6123`, `#6377`, `#6120`.
- **WhatsApp Web instável:** dois bugs de segurança simultâneos (`#6351`, `#6350`) indicam que o canal está em estado frágil. Usuários reportam silêncio de agende sem feedback de erro — UX perigoso.
- **Provider compatibility gaps:** context compression dropando tool_calls, multimodal falhando com paths locais, prompt caching inconsistente entre canais — padrão consistente de fragilidade no adapter OpenAI-compatible.

### Cenários de uso emergentes

- **Deploy heterogêneo:** usuários rodam ZeroClaw em Raspberry Pi (ARM) com LLM servers em máquinas separadas (x86/AMP); isso expõe gaps de compatibilidade que setupshomogêneos não revelam.
- **Fleet management的需求:** múltiplos PRs e issues atacando dashboard de nodes, heartbeat tracking e health monitoring — indica adoção em cenários multi-instância.

### Satisfação

- O PR #6214 (HMAC tool receipts) fecha uma lacuna de segurança antiga com applause implícito da comunidade (feature descrita na documentação como shipped).
- A atividade de PRs de contribuidores externos (Audacity88, theonlyhennygod, ilteoood, etc.) sugere saúde no ecossistema de contribuidores.

---

## 8. Backlog que Merece Atenção

### Issues com atividade significativa sem resolução

| Issue | Criação | Atualização | comentários | Estado | Risco |
|-------|---------|------------|------------|--------|-------|
| [#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) — default_model | 2026-04-26 | 2026-05-05 | 17 | open, needs-maintainer-review | medium |
| [#4710](https://github.com/zeroclaw-labs/zeroclaw/issues/4710) — LOGO | 2026-03-25 | 2026-05-05 | 9 | accepted | low |
| [#4846](https://github.com/zeroclaw-labs/zeroclaw/issues/4846) — WhatsApp Web | 2026-03-27 | 2026-05-05 | 5 | in-progress | medium |
| [#4853](https://github.com/zeroclaw-labs/zeroclaw/issues/4853) — .well-known skills | 2026-03-27 | 2026-05-05 | 2 | no-stale | medium |
| [#6001](https://github.com/zeroclaw-labs/zeroclaw/issues/6001) — gateway cost zero | 2026-04-22 | 2026-05-05 | 3 | in-progress | high |
| [#6182](https://github.com/zeroclaw-labs/zeroclaw/issues/6182) — HMAC receipts re-activate | 2026-04-28 | 2026-05-05 | 1 | in-progress, no-stale | high |

### PRs sem atualização aparente

| PR | Autor | Tamanho | Status | Concerns |
|----|-------|---------|--------|----------|
| [#6101](https://github.com/zeroclaw-labs/zeroclaw/pull/6101) — hot-switch model | songchao0421 | M | needs-author-action | Aguardando ação do autor há 11 dias |
| [#6384](https://github.com/zeroclaw-labs/zeroclaw/pull/6384) — session backend | singlerider | M | open | Consolidação de backend de sessões — precisa review |

### Recomendação de atenção imediata

1. **Priorizar review dos PRs de segurança WhatsApp (#6351, #6350)** — dois bugs de segurança simultâneos com impacto direto a contatos do operador.
2. **Atacar o cluster de bugs de provider** (#6361, #6399, #6377) — padrão sistemático no adapter OpenAI-compatible.
3. **Resolver onboarding** (#6123, #6377, #6120) — barreira de entrada que afeta novos usuários.

---

*Relatório gerado em 2026-05-06 com base em dados do GitHub de zeroclaw-labs/zeroclaw. Métricas: 50 issues, 50 PRs

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*