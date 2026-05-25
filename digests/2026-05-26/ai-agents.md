# Resumo diário do ecossistema de agentes de IA 2026-05-26

> Issues: 1 | PRs: 2 | Projetos cobertos: 7 | Gerado em: 2026-05-25 21:01 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

**Relatório do Projeto NullClaw – 2026‑05‑26**

---

### 1. Panorama do dia  
O projeto NullClaw manteve um nível de atividade **modesto** nas últimas 24 h: apenas **1 issue** e **2 pull requests** sofreram atualizações. Não houveram novos lançamentos, confirmado pela ausência de releases. O cenário é de **manutenção pontual** e **desenvolvimento incremental**, com um bug de documentação aguardando correção e uma Nova funcionalidade (gateway de mídia) em análise inicial.

---

### 2. Lançamentos  
**Nenhuma release foi publicada neste período.**  
A última versão estável do projeto permanece a mesma, e não há informações sobre mudanças iminentes. Qualquer atualização do tipo “breaking change” ou nota de migração poderá ser incluída assim que uma nova tag for criada.

---

### 3. Progresso do projeto  

| # | Tipo | Título | Status | Impacto |
|---|------|--------|--------|---------|
| [#931](https://github.com/nullclaw/nullclaw/pull/931) | Dependência (Docker) | `ci(deps): bump busybox from 1.37 to 1.38 in the docker‑images group` | **Merged** | Atualização do componente Busybox nos Docker‑images, melhorandovulnerabilidade conhecidasegurança e compatibilidade com imagens de contenedor. |

- **Importância:** Mantém o pipeline de CI alinhado com a versão mais recente do Busybox, reduzindo potenciais probleknown CVEs.  
- **Processo:** O PR foi automaticamente gerado pelo Dependabot e mergeado sem conflitos, demonstrando uma prática saudável de automação de dependências.

---

### 4. Temas quentes da comunidade  

| # | Tipo | Título | Comentários | 👍 |
|---|------|--------|------------|---|
| [#932](https://github.com/nullclaw/nullclaw/issues/932) | Issue (Bug) | **[bug] Invalid Zig version in docs** | 0 | 0 |
| [#933](https://github.com/nullclaw/nullclaw/pull/933) | PR (Feature) | **Add media gateway support** | 0 | 0 |

- **Análise:** Nenhuma das contribuições acumulou **`comentários`** ou **`reações`**, indicando baixa engajamento da comunidade no momento.  
- **Observação:** Embora o PR #933 proponha uma funcionalidade nova (gateway de mídia + transcrição), ainda não recebeu revisões ou feedback, sugerindo que a equipe ainda não iniciou a avaliação técnica.

---

### 5. Bugs e estabilidade  

**Issue #932 – “[bug] Invalid Zig version in docs”**  
- **Resumo:** A documentação da página *Getting Started* cita **Zig 0.15.2** como requisito, porém a compilação falha porque um símbolo (`std.Io.Dir`) foi introduzido apenas no **Zig 0.16.0**.  
- **Severidade:** **Moderada** – impede novos usuários de construirem o projeto conforme as instruções oficiais.  
- **Ação necessária:** Atualizar a documentação para refletir a versão mínima **Zig 0.16.0** (ou superior) e, idealmente, adicionar uma verificação no script de build que alerte sobre versão incompatível.  
- **Link:** [#932](https://github.com/nullclaw/nullclaw/issues/932)

---

### 6. Pedidos de features e sinais de roadmap  

**PR #933 – “Add media gateway support”**  
- **Principais alterações propostas:**  
  1. Endpoint autenticado `POST /media/transcribe` para clientes gerenciados pelo NullHub, com suporte a provedores STT configuráveis.  
  2. Extensão do handling de JSON do *wizard* para incluir objetos de configuração para **gateway**, **A2A**, **memory** e **media‑audio**.  
  3. Armazenamento de tokens de pareamento do gateway como *hashes* e adição de timeout para gerenciamento de sessões.  
- **Relevância para o roadmap:** Sinaliza interesse em expandir o NullClaw para cenários de **transcrição de mídia** e **comunicação entre serviços** (A2A). A feature, se accepted, pode se tornar parte de uma futura versão 0.x que priorize integrações de mídia.  
- **Link:** [#933](https://github.com/nullclaw/nullclaw/pull/933)

---

### 7. Resumo de feedback dos usuários  

| Fonte | Feedback |
|-------|----------|
| **Issue #932** (nulldoubt) | **Dor:** Instruções desatualizadas impedem onboarding. O usuário tenta compilar com Zig 0.15.2 e encontra erro de símbolo ausente. **Impacto:** Frustração inicial e possível abandono do projeto. |
| **PR #933** (DonPrus) | **Proposta:** Integração de mídia via gateway e transcrição. **Cenário de uso:** Plataformas que necessitam de transcrição automatizada e gerenciamento de tokens de API. **Satisfação potencial:** A adição de suporte a STT pode ampliar o caso de uso para assistentes de voz. |

**Insights:** O principal ponto de dor atual é a **documentação incorreta sobre requisitos de versão**, que afeta diretamente novos adotantes. O novo PR representa uma **demanda de expansão funcional**, ainda não validada pela equipe.

---

### 8. Backlog que merece atenção  

| # | Tipo | Prioridade | Motivo |
|---|------|------------|--------|
| [#932](https://github.com/nullclaw/nullclaw/issues/932) | Bug | **Alta** | Documentação incompatível com a versão atual do Zig; precisa de correção imediata para não bloquear usuários. |
| **#933** | Feature (PR) | **Média** | Proposta interessante para gateway de mídia, porém sem revisão. Agendar *code review* e avaliação de impact on arquitetura antes de aceitar/fechar. |
| **[#931](https://github.com/nullclaw/nullclaw/pull/931)** *(já resolvido)* | Dependência | **Baixa** | Apenas manutenção; já merged. |

**Ações sugeridas:**  
1. **Atualizar a página “Getting Started”** com `Zig ≥ 0.16.0`.  
2. **Agendar review técnica** para o PR #933 (avaliar segurança do armazenamento de tokens e compatibilidade com a arquitetura existente).  
3. **Manter rotina de Dependabot** (já em prática) para evitar acúmulo de atualizações de dependências.

---

**Conclusão geral:** O NullClaw está em **estado de manutenção leve**, com um bug crítico de documentação e uma proposta de feature nova aguardando revisão. O projeto demonstra práticas saudáveis de automação (Dependabot), mas necesita de maior interação da comunidade para validar novos recursos.

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo — Ecossistema Open Source de Agentes de IA

**Data de referência:** 2026-05-26
**Projetos analisados:** NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw, ZeroClaw

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source demonstra maturidade crescente com polarização clara entre projetos **orientados a features** (NanoBot, CoPaw, ZeroClaw) e **orientados a estabilidade** (NullClaw, IronClaw). A convergência temática em segurança de tools, multi-canal messaging e integração de providers de IA indica maturação do mercado, enquanto a ausência de releases stably em 5 de 7 projetos sugere ciclo de consolidação pré-lançamento. A demanda por UI/TUI ricas, memory arquitetures e cross-agent orchestration emerge como denominador comum — сигнализируя que a próxima geração de agentes priorizará **experiência persistent e colaborativa** sobre execução isolated.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | Releases (24h) | Bugs Críticos | Saúde |
|---------|--------------|-----------|----------------|---------------|-------|
| **NanoBot** | 5 | **119** | 0 | 2 resoltos, 1 reportado | 🟢 Robusta |
| **ZeroClaw** | 50 | 50 | 0 | 6 S1, 6 S2 abertos | 🔴 Pressão alta |
| **Hermes Agent** | 50 | 50 | 0 | 8 P1/P2 | 🟠 Atenção requer |
| **CoPaw** | 42 | 44 | 1 beta | 3 P0, 3 P1 | 🟠 Estável mas crítico |
| **IronClaw** | 22 | 50 | 0 | 2 altos + 2 security | 🟡 Moderada |
| **PicoClaw** | 8 | 8 | 1 nightly | 3 blockers | 🟡 Reativa |
| **NullClaw** | 1 | 2 | 0 | 1 bug docs | ⚪ Manutenção leve |

**Observação:** O volume abosluto de atividade (NanoBot com 119 PRs) não implica superior saúde — ZeroClaw com 100 items possui 12 bugs P1/P2 ativos, indicando dívida técnica significativa.

---

## 3. Posicionamento do Projeto Principal

Avaliando pelo volume de atividade e diversidade de avanços, **NanoBot** lidera em velocidade de iteração:

| Dimensão | NanoBot | IronClaw | CoPaw |
|----------|---------|----------|-------|
| **Architecture** | Modular providers + AgentLoop refactoring | Rust-based Reborn + attended-signing | Tauri desktop + Console UI |
| **Community velocity** | 119 PRs/24h | 50 PRs/7dias | 44 PRs/24h |
| **Roadmap signals** | Multi-agent, cross-messaging | Attested-signing multi-tenant | Desktop maturity, plugin ecosystem |
| **Pain points** addressats | Loop detection, streaming | Discord CPU, publication gap | Console UI regressions |
| **Maturidade de código** | Alta — 6+ anos | Alta — Rust robusto | Média — transição desktop |

**Vantagens técnicas do NanoBot frente aos pares:**
- **`AgentLoop single-phase consolidation`** elimina análise separada de Dream, simplificando arquitetura
- **Provider-first design** com 8+ providersをサポート (StepFun, OpenRouter, Kagi) — extensibilidade comprovada
- **CLI/MCP unification** via protocolo `agent-app.v1` предлагает padronização cross-plataforma

**IronClaw diferencia-se com:**
- **Rust-first** implementação entrega segurança de памяти e performance
- **Attested-signing** para KMS multi-tenant — caso de uso enterprise diferenciado
- **OAuth/GSuite native integration** — posicionamento para ambientes corporativos

---

## 4. Focos Técnicos Compartilhados

| Tema | Projetos afetados | Manifestação |
|------|-------------------|--------------|
| **Loop detection em tools** | NanoBot, ZeroClaw | Usuários reportam chamadas idênticas repetidas (`grep`, `list_dir`); guardrails insuficientes |
| **Streaming output** | NanoBot, PicoClaw, CoPaw, Hermes | Rendering chunk-based causa refresh excessivo (PowerShell, terminal) |
| **Memory/information dumping** | CoPaw, Hermes, ZeroClaw | Sistemas registram sem sintetizar; falta correlation e reminder |
| **Security hardening de tools** | IronClaw, ZeroClaw, Hermes | Bypass de `ToolDispatcher`, allowed_private_hosts restritivo, sandbox blocks legítimos |
| **Provider compatibility** | PicoClaw, NanoBot, ZeroClaw | API breaking changes (Anthropic type, OpenAI reasoning_effort, Zhipu GLM-5) |
| **Documentation vs. realidade** | NullClaw, Hermes | Versões incompatíveisocumentadas impedem onboarding |
| **Docker/containerização** | Hermes, IronClaw | HERMES_UID permissions, entrypoint.sh gaps, path inconsistencies |
| **Cross-agent orchestration** | NanoBot, ZeroClaw | Crescente demanda por messaging entre instâncias, subagent concurrency |

**Padrão emerguente:** A fragmentação de **framework de security** (sandbox, allowed_tools, path validation) indica necessidade de specificação de interface común entre projetos.

---

## 5. Análise de Diferenciação

| Projeto | Foco primário | Público-alvo | Arquitetura distintiva |
|---------|---------------|--------------|----------------------|
| **NanoBot** | Extensibilidade de providers e multi-agent | Desenvolvedores que querem controle fino | Modular provider registry + AgentLoop |
| **ZeroClaw** | Estabilidade e channel expansion | Operadores multi-canal (Mastodon, SMS, WeChat) | Plugin-architecture + WebSocket |
| **Hermes Agent** | Multi-platform messaging integrations | Usuários enterprise (WhatsApp, Telegram, Discord) | Platform-native plugins + auth integration |
| **CoPaw** | Desktop experience e IDE-like coding | Usuários não-técnicos wantting GUI | Tauri + Web Console |
| **IronClaw** | Security signing e enterprise KMS | Mercado financeiro e compliant environments | Rust + Reborn + Attested-signing |
| **PicoClaw** | Channel integrations China-centric | Usuários WeChat/Server酱 | Lightweight + channel-specific APIs |
| **NullClaw** | Minimal viable core | niche early adopters | Zig-based minimalism |

**Análise de público:**

- **ZeroClaw, Hermes, PicoClaw** competem no mesmo espaço de integradores multi-canal, com abordagens distintas: ZeroClaw prioriza extensibilidade (Mastodon, Twilio), Hermes prioriza plataforma nativa (WhatsApp bridge bundling), PicoClaw prioriza mercado chinês (WeChat, Server酱).

- **NanoBot vs. CoPaw** representam dois paradigmas de UX: CLI-first parametrizável vs. GUI-first acessível.

- **IronClaw** ocupanicho distinct com **attested-signing** — nenhum dos demais projetos possui feature comparável. Diferenciação de alto valor para regulated industries.

---

## 6. Tração e Maturidade da Comunidade

| Projeto | Padrão de tração | Indicador de maturidade |
|---------|------------------|------------------------|
| **NanoBot** | 🚀 **Velocidade extrema** — 119 PRs/24h, ciclo rápido de merge/close | Maduro: bug #3999 merged hours após reporte; rotina Dependabot estabelecida |
| **CoPaw** | 📈 **Release cadence activo** — v1.1.9-beta.1 publicado | Em transição: Console UI com bugs crónicos indica dívida de UX, mas ciclo de beta aktif |
| **IronClaw** | ⏸️ **Consolidação de feature** — Attested-signing em fases 1-10 | Maduro: Rust + 3 minor releases defasadas sugerem processo de release conservador |
| **Hermes Agent** | 📊 **Volume estável** — 50/50 issues/PRs sem release | Em maturação: múltiplos PRs de segurança simultâneos indica postura defensiva saudável |
| **ZeroClaw** | 📉 **Dívida técnica acumulada** — 12+ bugs P1/S1 abertos | Pressão: community velocidade alta mas bugs nãocontrolados; gap de release preocupa |
| **PicoClaw** | 🔄 **Bug-fix reativo** — PRs abertos no mesmo dia que reportes | Imaturo: 3 issues blockers (model config) sugerem falta de smoke tests |
| **NullClaw** | ⏸️ **Manutenção episódica** — 1-2 items/24h | Dormante: comunidade pequena; proposta #933 sem revisão há dias |

**Conclusão de maturidade:**

| Tier | Projetos | Características |
|------|----------|-----------------|
| **Consolidando** | NanoBot, IronClaw | Velocidade controlada, bug tracking فعّال, release process robusto |
| **Iterando rápido** | CoPaw, Hermes | Alta atividade, mas bugs P0 persistindo por releases múltiplos |
| **Dívida técnica** | ZeroClaw | Comunidade ativa, mas 12 bugs P1+S1 indica velocidade > qualidade |
| **Reativo** | PicoClaw | Bugs blockers emergem reactionariamente; need smoke tests |
| **Dormante** | NullClaw | Atividade mínima; proposta de feature sem revisão |

---

## 7. Sinais de Tendência

### Tendências confirmadas pelo ecossistema

1. **Multi-canal não é mais diferencial — é expectativa**
   - 5 de 7 projetos incluem integrations Telegram/Discord/WhatsApp
   - Demanda por canais emergentes: Mastodon (#6423), Twilio SMS (#6427), Server酱 (#2893)
   - **Implicação:** Ferramentas de deployment cross-canal serão commoditizadas; diferenciação virá de DX e reliability

2. **Security de sandbox emerge como campo de batalha**
   - 4 projetos reportam issues com sandbox blocking legítimo uso (ZeroClaw #5722, IronClaw #4017, PicoClaw #1042, Hermes #410)
   - Nenhum projeto possui especificação formal de interface de sandbox
   - **Implicação:** Existe oportunidade de Spec first — um "Sandbox Security Spec for AI Agents" poderia beneficiar todo o ecossistema

3. **Memory não é storage — usuários querem sintetização**
   - CoPaw (#4652), Hermes (#23402), ZeroClaw (#6722) todos reportam "memory is just dumping data"
   - **Implicação:** A próxima wave de features será sobre *memory with correlation e retrieval augmented generation (RAG)*

4. **Provider fragmentation cria dívida de manutenção**
   - APIs mudam breaking sem notice (Claude type, reasoning_effort, Zhipu GLM-5)
   - PicoClaw, NanoBot, ZeroClaw gastam energia em compatibilidade de provider
   - **Implicação:** Abstraction layers (tipo OpenAI-compatible API) são necessárias mas insufficient; projetos precisarão de provider test suites automatizados

5. **Loop/cycle detection é problema não-resolvido**
   - NanoBot closed #3985 como invalid, mas #3986 demonstra demanda real
   - ZeroClaw com 6+ bugs S1 incluindo tool loops
   - **Implicação:** Soluções arquitetónicas (não apenas guardrails) jsou necessárias — e.g., mandatory retry budgets, alternative tool suggestion

6. **Desktop e TUI são território inexplorado com alto potencial**
   - CoPaw (Tauri) e IronClaw (WebUI v2) apostam em interfaces desktop
   - NanoBot tem PR TUI (#2155) aberto há 70+ dias
   - **Implicação:** Usuários não-técnicos preferem GUI sobre CLI; primeira empresa a resolver "40s startup + ícone errado + sem feedback visual" captures market share

7. **Attested-signing differentiation para enterprise**
   - IronClaw é único com KMS multi-tenant e TrustEnrollment
   - Demanda de mercado financeiro documentada (#5722 FINOS CDMs)
   - **Implicação:** Para regulated industries, segurança de signing supera feature richness

---

**Conclusão executiva:** O ecossistema está em青春期 — alta atividade mas sem consolidatação. NanoBot líder em velocidade, IronClaw líder em sofisticação enterprise, CoPaw líder em desktop experience. A maior oportunidade estratégica é **padronizar segurança de sandbox e loop detection** — problemas que afetam 5 projetos simultaneamente sem solução comparável. Projetos com dívida técnica (ZeroClaw, PicoClaw) devem priorizar smoke tests e CI antes de expandir features.

---

*Relatório gerado automaticamente com base em resumos de comunidade de 2026-05-26.*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>


# 📊 Relatório de Projeto — NanoBot
## HKUDS/nanobot | 2026-05-26

---

## 1. Panorama do Dia

O projeto NanoBot mantém um nível de atividade **muito elevado** nesta data, com 119 PRs atualizados nas últimas 24h (sendo 108 abertos e 11 fechados/merged) e 5 issues processadas. A atividade de PRs sugere uma fase intensa de desenvolvimento, com múltiplas frentes sendo abordadas simultaneamente — desde correções de estabilidade até features conceituais como messaging entre agentes e novos providers de API. A ausência de releases novas indica que o código está em consolidação antes de um próximo tag. A saúde geral do projeto é **robusta**, com correções críticas sendo merged rapidamente (como a do bug #3999 sobre goals sustentados).

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto está em modo de desenvolvimento ativo sem publicação de versões neste período. O alto volume de PRs sugere que uma release pode estar em preparação para os próximos dias.

---

## 3. Progresso do Projeto

As seguintes PRs foram **merged/fechados** hoje, representando avanços concretos:

| PR | Título | Impacto |
|---|---|---|
| [#3999](https://github.com/HKUDS/nanobot/pull/3999) | fix(agent): prevent runner from exiting while sustained goal is active | **Crítico** — Corrigiu regressão onde agentes saíam prematuramente durante tarefas de longo prazo (`long_task`). Afetava o comando `/goal`. |
| [#3988](https://github.com/HKUDS/nanobot/pull/3988) | feat(providers): add Step Plan support | **Novo provider** — Adicionou suporte dedicado ao StepFun Step Plan subscription, expandindo opções de provedor de IA. |
| [#3991](https://github.com/HKUDS/nanobot/pull/3991) | feat(apps): unify CLI apps and MCP | **Arquitetural** — Unificou interfaces CLI Apps e MCP em uma experiência compartilhada com protocolo `agent-app.v1`. |
| [#3978](https://github.com/HKUDS/nanobot/pull/3978) | fix(agent): propagate maxConcurrentSubagents config | **Configuração** — Corrigiu bug onde `maxConcurrentSubagents` sempre usava valor hardcoded (1) ignorando config do usuário. |
| [#3867](https://github.com/HKUDS/nanobot/pull/3867) | fix(providers): inject OpenRouter `reasoning.effort` for thinking models | **Follow-up crítico** — Correção adicional para controle de thinking em modelos MiMo via OpenRouter. |
| [#3850](https://github.com/HKUDS/nanobot/pull/3850) | docs(contributing): warn that `ruff format` predates codebase | **DX** — Melhorou experiência de contribuição evitando diff massivo desnecessário. |

**Destaque de arquitetura:** O PR [#3990](https://github.com/HKUDS/nanobot/pull/3990) (ainda aberto) propõe refatoração significativa do Dream para **single-phase consolidation** via AgentLoop, eliminando análise separada e consolidando responsabilidades — sinaliza evolução architectural importante.

---

## 4. Temas Quentes da Comunidade

### Issues com maior atenção ou discussão potencial:

**[#3986](https://github.com/HKUDS/nanobot/issues/3986)** — Loop detection & rate limiting para ferramentas gerais
- **Situação:** Closed (provavelmente duplicata ou integrada ao PR #3985)
- **Demanda:** Usuários enfrentam loops de ferramentas (ex: `grep` repetido, `list_dir` em burst) não cobertos pelo `repeated_external_lookup_error` atual
- **Sinal:** Necessidade de guardrails mais abrangentes

**[#4005](https://github.com/HKUDS/nanobot/pull/4005)** — GitAgent Protocol support
- **Situação:** Aberta, 0 comentários
- **Proposta:** Adicionar suporte ao GAP (GitAgent Protocol) para agentes portáveis e descobríveis
- **Alcance:** Protocolo aberto para interoperabilidade de agentes

**[#3992](https://github.com/HKUDS/nanobot/pull/3992)** — Cross-agent messaging
- **Situação:** Aberta
- **Proposta:** Mensageria entre instâncias de agentes via shared message bus
- **Potencial:** Abre cenários de multi-agente orchestration

---

## 5. Bugs e Estabilidade

### Bugs resolvidos hoje:

| Severidade | Issue | Descrição |
|---|---|---|
| 🔴 **Alta** | [#3999](https://github.com/HKUDS/nanobot/pull/3999) | Runner saía com `stop_reason="completed"` mesmo com goal sustentado ativo via `/goal` |
| 🟠 **Média** | [#3978](https://github.com/HKUDS/nanobot/pull/3978) | Config `maxConcurrentSubagents` ignorada — sempre usava default de 1 |
| 🟠 **Média** | [#4002](https://github.com/HKUDS/nanobot/pull/4002) | Modelos (Kimi 2.6 via OpenRouter) retornavam apenas tokens de reasoning, sem `content` ou `tool_calls` — fallbacks não funcionavam |

### Bug reportado aberto:

| Severidade | Issue | Descrição |
|---|---|---|
| 🟡 **Potencial** | [#3995](https://github.com/HKUDS/nanobot/issues/3995) | Streaming output em PowerShell causa换行 forçado e "terminal刷屏" (refresh excessivo) |

---

## 6. Pedidos de Features e Sinais de Roadmap

| Feature | Issue/PR | Solicitante | Notas |
|---|---|---|---|
| StepFun native ASR | [#4000](https://github.com/HKUDS/nanobot/issues/4000) | morandot | Provider de transcrição nativo Step Plan (API diferente do Whisper-style atual) |
| Weather como skill de exemplo | [#3958](https://github.com/HKUDS/nanobot/issues/3958) | mraad | "Lean and mean" — mover weather para exemplos, não built-in |
| Content block "type" obrigatório | [#3993](https://github.com/HKUDS/nanobot/issues/3993) | mraad | Anthropic requer `type` em todos os content blocks |
| Telegram webhook mode | [#3996](https://github.com/HKUDS/nanobot/pull/3996) | outlook84 | Adiciona suporte a webhook ao invés de long polling |
| TUI interativo | [#2155](https://github.com/HKUDS/nanobot/pull/2155) | xbunax | Interface TUI para uso em terminal |
| Cycle detection v2 | [#2271](https://github.com/HKUDS/nanobot/pull/2271) | flobo3 | Detecção de loops em chamadas de ferramentas |

**Sinais de roadmap observados:**
- Expansão de providers (StepFun, Kagi, OpenRouter)
- Evolução para multi-agente (cross-messaging, subagent concurrency)
- Refatoração do Dream (single-phase AgentLoop)
- Melhorias de DX (TUI, documentação, tooling)

---

## 7. Resumo de Feedback dos Usuários

### Dores relatadas:

1. **Loop behavior de LLMs** — Usuários reportam modelos repetindo chamadas idênticas de ferramentas sem estratégia alternativa. Cenários incluem: `grep` sem matches repetido N vezes, `list_dir` em burst de 3 segundos, `read_file` falhando e readicionando o mesmo path. O `repeated_external_lookup_error` só cobre busca web, deixando ferramentas genéricas desprotegidas.

2. **Terminal刷屏 (refresh excessivo)** — Em PowerShell, o streaming de思考过程 causa rendering anormal com换行 forçado a cada chunk, degradando significativamente a experiência visual.

3. **MaxConcurrentSubagents ignorado** — Usuários configurando concurrency higher que 1 não viam efeito, frustração com controle de paralelismo de subagentes.

4. **Goals sustentados completando prematuramente** — Usuários usando `/goal` para tarefas de longa duração tinham o agente terminando antes do esperado quando o LLM gerava texto final sem chamar `complete_goal`.

### Cenários de uso emergentes:
- **Voice/ASR**: Usuários Step Plan precisam de transcrição nativa (não disponível atualmente)
- **Multi-agent**: Crescente interesse em orquestração de múltiplas instâncias com message bus compartilhado
- **TUI**: Usuários querem interação mais rica em terminal que o CLI atual

---

## 8. Backlog que Merece Atenção

| Item | Link | Situação | Nota |
|---|---|---|---|
| TUI para nanobot | [#2155](https://github.com/HKUDS/nanobot/pull/2155) | **Aberta desde 2026-03-17** | Proposta antiga (~70 dias), adiciona TUI ao terminal |
| Tool cycle detection | [#2271](https://github.com/HKUDS/nanobot/pull/2271) | **Aberta desde 2026-03-19** | Ciclo de ~68 dias sem progress visível |
| Heartbeat reasoning decoupling | [#1443](https://github.com/HKUDS/nanobot/pull/1443) | **Aberta desde 2026-03-02** | ~85 dias em aberto, recurso de 3 meses |
| Loop guard v2.0 | [#3985](https://github.com/HKUDS/nanobot/pull/3985) | **Closed as invalid** | Closed sem merge, mas demanda real existe (cf. #3986) |

**⚠️ Atenção especial:**
- **PRs abertos há >60 dias** (#2155, #2271, #1443) precisam de triagem ou decisão de accept/reject para manter comunidade engajada
- **Loop detection** tem demanda clara de múltiplos usuários mas a implementação recente (#3985) foi marcada inválida — risco de fragmentação de esforço

---

## Métricas Resumidas

| Indicador | Valor | Status |
|---|---|---|
| PRs nas últimas 24h | 119 (11 fechados) | 🔵 Muito ativo |
| Issues nas últimas 24h | 5 (2 fechadas) | 🟢 Normal |
| Releases | 0 | 🟡 Em preparação |
| Bugs críticos resolvidos | 2 | 🟢 Saúde boa |
| Features em progresso | 8+ | 🔵 Pipeline robusto |
| Backlog antigo (>60d) | 3 PRs | 🟠 Requer atenção |

---

*Relatório gerado automaticamente com base em dados GitHub de 2026-05-26. Para informações adicionais, consulte [github.com/HKUDS/nanobot](https://github.com/HKUDS/nanobot).*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-05-26

## 1. Panorama do Dia

O projeto Hermes Agent mantém alta atividade comunitária com **50 issues e 50 PRs atualizados nas últimas 24h**, indicando engajamento intenso tanto em reports de bugs quanto em contributions. **Nenhuma release nova** foi publicada, sugerindo que a equipe está em ciclo de consolidação antes de um próximo lançamento. O repositório apresenta **35 issues abertas/ativas** e **46 PRs em aberto**, com 4 PRs fechados/merged no período. A comunidade demonstra foco em **estabilidade operacional** (especialmente Docker e plataforma) e em **segurança**, com múltiplos PRs de segurança sendo processados simultaneamente.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto encontra-se em período pré-release, acumulando contribuições que provavelmente serão incluídas em uma próxima versão. Recomenda-se monitorar o repositório para announcement de lançamento imminent.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados

| PR | Autor | Descrição | Impacto |
|---|---|---|---|
| [#15460](https://github.com/NousResearch/hermes-agent/pull/15460) | briandevans | **fix(platform/whatsapp)**: bundle whatsapp-bridge.js no pacote gateway para instalações pip/Nix encontrarem o daemon | P1 |
| [#32203](https://github.com/NousResearch/hermes-agent/pull/32203) | anoosa1 | **fix(nix)**: adiciona whatsapp-bridge no package Nix | P2 |
| [#32237](https://github.com/NousResearch/hermes-agent/pull/32237) | teknium1 | **fix(tts)**: previne double [pause] em tags de speech automático xAI | P3 |

### PRs em Destaque em Aberto

| PR | Autor | Componente | Descrição | Prioridade |
|---|---|---|---|---|
| [#32250](https://github.com/NousResearch/hermes-agent/pull/32250) | AhmetArif0 | gateway | **Security fix**: use `secure_parent_dir` em google_chat `_write_private_json` | Security |
| [#32244](https://github.com/NousResearch/hermes-agent/pull/32244) | AhmetArif0 | memory | **Security fix**: aplica permissões 0600 em arquivos de config dos plugins de memória contendo API keys | Security |
| [#32238](https://github.com/NousResearch/hermes-agent/pull/32238) | AhmetArif0 | tools/file | **Security fix**: estende bloqueio de leitura /proc para smaps, smaps_rollup, numa_maps, mem | P2 |
| [#32251](https://github.com/NousResearch/hermes-agent/pull/32251) | thebryce15 | kanban | **feat**: adiciona shim de DB Postgres para Kanban | Feature |
| [#30125](https://github.com/NousResearch/hermes-agent/pull/30125) | DevDocXIII | agent | **fix(fallback)**: base_url dedup, APITimeoutError exclusion, background health check | P2 |
| [#21470](https://github.com/NousResearch/hermes-agent/pull/21470) | thaenor | agent | **fix(compressor)**: skip compression quando summary inflaria contexto | P2 |

**Avanço significativo:** Três PRs de segurança simultâneos indicam atençãoredobrada à postura de segurança do projeto. A integração com Postgres para Kanban (#32108, #32251) representa evolução arquitetural importante.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| Issue | Comentários | 👍 | Tema |
|---|---|---|---|
| [#503](https://github.com/NousResearch/hermes-agent/issues/503) | 8 | 1 | Platform-Native Rich Interactions — Inline Keyboards e Structured UI |
| [#410](https://github.com/NousResearch/hermes-agent/issues/410) | 7 | 6 | Secure Secrets Management Tool — API Key Ingestion e Scoped Access |
| [#23402](https://github.com/NousResearch/hermes-agent/issues/23402) | 7 | 1 | Docker HERMES_UID permissions com Dashboard chat |
| [#476](https://github.com/NousResearch/hermes-agent/issues/476) | 6 | 2 | Agent Mode System — Persona + Tool Scoping + Behavioral Constraints |
| [#417](https://github.com/NousResearch/hermes-agent/issues/417) | 5 | 0 | Pokémon Playing Skill — Headless GBA/GB Emulation |

### Análise de Demandas

**Segurança em Destaque:** A issue [#410](https://github.com/NousResearch/hermes-agent/issues/410) (Segredos) apresenta **6 reações**, indicando alta demanda comunitária por management seguro de credenciais. Isto se alinha com os PRs de segurança ativos.

**Rich Interactions:** A issue [#503](https://github.com/NousResearch/hermes-agent/issues/503) demanda UI rica para plataformas (Telegram, Discord, Slack, WhatsApp) — indica que usuários esperam experiências mais interativas além de texto plano.

**Docker/Containerização:** Duas issues de Docker (#23402, #27221) com alta atividade sugerem que部署 em containers é caso de uso predominante, requerendo atenção à configuração de UID e permissões.

---

## 5. Bugs e Estabilidade

### Por Severidade

**P1 (Crash/Bloqueante) — 1 item**
- [#29391](https://github.com/NousResearch/hermes-agent/issues/29391) **[Telegram]**: Após update para 0.14, `python-telegram-bot` não está instalado — plataformas Telegram completamente inoperantes para afetados.

**P2 (Grave) — 7 itens**
- [#23402](https://github.com/NousResearch/hermes-agent/issues/23402) Docker + HERMES_UID: permissions issue com Dashboard chat
- [#27221](https://github.com/NousResearch/hermes-agent/issues/27221) `entrypoint.sh` missing chown para ui-tui/ e gateway/
- [#31049](https://github.com/NousResearch/hermes-agent/issues/31049) Platform plugins sem credenciais entram em loop de reconexão infinito
- [#32221](https://github.com/NousResearch/hermes-agent/issues/32221) **AIAgent.init** realiza I/O network síncrono bloqueante durante construção — severo impacto em performance para agentes efêmeros
- [#32207](https://github.com/NousResearch/hermes-agent/issues/32207) `/clear` congela terminal no Windows 11/WSL
- [#32156](https://github.com/NousResearch/hermes-agent/issues/32156) Long-session context e memory instability com Open WebUI
- [#24782](https://github.com/NousResearch/hermes-agent/issues/24782) Subagent fallback usa base_url do parent em vez do fallback

**P3 (Moderado) — 4 itens**
- [#31736](https://github.com/NousResearch/hermes-agent/issues/31736) Kanban dispatcher abre conexões SQLite WAL a cada tick — pressão em FD/WAL
- [#31668](https://github.com/NousResearch/hermes-agent/issues/31668) Hermes + Anthropic models falham com rate limit/extra usage
- [#32220](https://github.com/NousResearch/hermes-agent/issues/32220) delegate_task subagent costs nunca são persistidos ao DB — memória apenas
- [#32223](https://github.com/NousResearch/hermes-agent/issues/32223) Kimi K2 modelos falham com HTTP 400 "cannot specify both 'thinking' and 'reasoning_effort'"

### Análise de Estabilidade

**Ponto Crítico:** O bug P1 de Telegram (#29391) afeta diretamente usuários em produção após upgrade. Combinado com os bugs de Docker (#23402, #27221), há risco de experiência degradada em容器 deployments.

**Dívida Técnica:** O bug de I/O síncrono em AIAgent.init (#32221) representa "architectural violation" identificado via cProfile, sugerindo necessidade de refactoring assíncrono.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Abertas com Maior Engajamento

| Feature | Status | Motivação |
|---|---|---|
| [#503](https://github.com/NousResearch/hermes-agent/issues/503) Platform-Native Rich Interactions | Aberta | UI rica (inline keyboards, execution plans) para Telegram/Discord/Slack/WhatsApp |
| [#410](https://github.com/NousResearch/hermes-agent/issues/410) Secure Secrets Management | Aberta | Gestão segura de API keys com scoped access e redaction |
| [#476](https://github.com/NousResearch/hermes-agent/issues/476) Agent Mode System | Aberta | Unificar personality e toolsets com behavioral constraints |
| [#417](https://github.com/NousResearch/hermes-agent/issues/417) Pokémon Playing Skill | Aberta | Headless GBA/GB emulation com AI gameplay |
| [#14425](https://github.com/NousResearch/hermes-agent/issues/14425) Heartbeat/Progress Notifications | Aberta | Feedback durante long-running tools |

### Sinais de Roadmap

1. **Segurança em primeiro plano**: Múltiplos PRs de security em paralelo indicam foco em hardening
2. **Postgres Integration**: PRs para Kanban PostgreSQL (#32251) sugerem expansão além de SQLite
3. **UI/UX Ricos**: Demanda clara por interações ricas além de texto plano
4. **Performance**: Issues de compressor e sync I/O sugerem otimizações de contexto
5. **Observabilidade**: Demanda por heartbeat notifications e diagnostics (#32246)

**Potencial próxima versão:** Consolidar segurança + Postgres + fixes Docker críticos.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas (Pain Points)

| Categoria | Descrição | Frequência |
|---|---|---|
| **Docker Permissions** | HERMES_UID causa kepemilakan arquivos e UI quebrada | Múltiplos reports |
| **Zero Feedback** | Long-running tasks mostram silêncio absoluto — usuário不确定 se algo está rodando | Alta |
| **Telegram Quebrado** | Upgrade 0.12→0.14 quebra Telegram completamente | Bloqueante |
| **Memory Instability** | Long-sessions causam context growth, compression failures e repeated memory errors | Campo real |
| **Secrets Exposure** | Credenciais em plaintext em ~/.hermes/.env representam risco | Alta |

### Cenários de Uso Observados

- **Container Deployment**: Unraid, Synology, Railway — alta adoção em containers
- **Multi-Platform Messaging**: Telegram, Discord, Slack, WhatsApp, Feishu
- **Long-Running Projects**: Open WebUI + local API para trabalhos estendidos
- **Developer Orchestration**: cProfile benchmarking para engines de orquestração

### Satisfação/Insatisfação

| Indicador | Estado |
|---|---|
| Engajamento comunitário | ✅ Alto (50+ items atualizados/24h) |
| Bugs P1 ativos | ⚠️ Crítico (Telegram quebrado em 0.14) |
| Security posture | ✅ Em melhoria (3 PRs simultâneos) |
| Feature demand | ✅ Forte (rich interactions, secrets management) |

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Há Muito Inativas

| Issue | Tempo Inativo | Prioridade | Tema |
|---|---|---|---|
| [#32236](https://github.com/NousResearch/hermes-agent/issues/32236) | <1 dia | P2 | Cron skill index scoped incorrectly — bug funcional |
| [#32232](https://github.com/NousResearch/hermes-agent/issues/32232) | <1 dia | P3 | Implement LexyOS Seven UI shell — feature request ambígua |

### Issues EstAGNadas (>7 dias sem resposta)

| Issue | Criado | Days | Tema |
|---|---|---|---|
| [#24695](https://github.com/NousResearch/hermes-agent/issues/24695) | 2026-05-13 | ~13 dias | Per-model compression settings — feature request válida |
| [#20353](https://github.com/NousResearch/hermes-agent/issues/20353) | 2026-05-05 | ~21 dias | `no_agent=True` cron jobs silenciam failure — UX issue |

### Recomendações Executivas

1. **Responder #32236** — bug funcional em cron com skill scoping pode causar comportamento inesperado emprodução
2. **Priorizar #29391** — P1 Telegram quebrado precisahotfix urgente
3. **Avaliar #410 e #503** — high-engagement features que poderiam ser roadmap items
4. **Health check em Docker** — issues #23402 e #27221 indicam dívida técnica em containerização

---

## Indicadores de Saúde do Projeto

| Métrica | Valor | Status |
|---|---|---|
| Issues ativas (24h) | 50 | 🟢 Alta |
| PRs em revisão (24h) | 50 | 🟢 Alta |
| PRs mergeados (24h) | ~4 | 🟡 Moderada |
| Bugs P1/P2 abertos | 8 | 🔴 Requer atenção |
| Releases (24h) | 0 | ⚪ Aguardando |
| Security PRs | 3 simultâneos | 🟢 Positivo |

---

*Relatório gerado automaticamente com base em dados GitHub de 2026-05-26. Para informações detalhadas, consulte [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent).*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório de Projeto — PicoClaw

**Data de referência:** 2026-05-26

---

## 1. Panorama do Dia

A atividade do projeto nas últimas 24 horas foi **moderada a intensa**, com 8 issues e 8 pull requests atualizados, sinalizando desenvolvimento contínuo. A noite de lançamento `v0.2.9-nightly.20260525` mantém o ciclo de builds noturnos, sem indicar uma release estável iminente. Notable que três PRs com correções urgentes foram abertos no mesmo dia —all relacionados a bugs de configuração de modelos e validação de PID— o que sugere que a equipe está reagindo rapidamente a regressions recentes. Dos 7 issues abertos, ao menos 3 possuem prioridade alta ou impacto em funcionalidades críticas (PID check, histórico de chat, integração WeChat).

---

## 2. Lançamentos

### Nightly Build: `v0.2.9-nightly.20260525.ab6d3946`

| Campo | Detalhe |
|---|---|
| **Versão** | `v0.2.9-nightly.20260525` |
| **Hash Git** | `ab6d3946` |
| **Natureza** | Automated build — **não recomendado para produção** |
| **Comparativo** | `https://github.com/sipeed/picoclaw/compare/v0.2.9...main` |

Não há ChangeLog detalhado para esta versão noturna. A natureza automatizada sugere foco em validação contínua do branch `main` vs. publicação de features finalizadas. Recomenda-se cautela para ambientes de produção.

---

## 3. Progresso do Projeto

Cinco PRs novos foram abertos no período, sendo que trêsAddress issues de bugs críticos:

| PR | Autor | Descrição | Related Issue |
|---|---|---|---|
| #2942 | LegendAlessandro-Liguori | Usa ID de modelo cannonical com hifens para entrada padrão claude-sonnet | #2941 |
| #2940 | LegendAlessandro-Liguori | Omite parâmetro `temperature` para `claude-opus-4-7` (deprecated pela API) | #2939 |
| #2813 | mrigangha | Verifica identidade do gateway antes de bloquear startup por PID stale | #2720 |
| #2893 | dtapps | Adiciona suporte ao canal **Server酱³ Bot (SC3Bot)** | — |
| #2781 | cstroie | Reduz token usage do skill catalog em iterations e turns subsequentes | — |

Nenhum PR foi merged/fechado no período, indicando que a equipe ainda está em fase de revisão ou que os Pull requests awaiting review.

**Destaque técnico:** O PR #2781 aborda um problema de eficiência ao enviar o skill catalog XML em toda LLM request, o que pode representar economia significativa de tokens em cenários de uso intenso.

---

## 4. Temas Quentes da Comunidade

| Issue | Comentários | 👍 | Tensão |
|---|---|---|---|
| #1042 | 14 | 2 | **guardCommand** rejeita comandos válidos por regex ingênua |
| #1950 | 10 | 0 | Streaming output para Web Chat (agora fechada) |

### Análise:

**#1042 — Bug no exec tool (14 comentários):** O debate mais ativo do dia gira em torno do `guardCommand`, método responsible por validar se comandos respeitam `restrict_to_workspace`. Aqueixa central: uma regex simplista interpreta a query `wttr.in/Beijing?T` como um path `../../../../Beijing?T`, bloqueando o comando. Este problema afeta **múltiplos skills que usam URLs absolutas** em seus comandos, gerando falsos positivos de segurança. A discussão de 14 comentários indica uma solução mais sofisticada do regex necessário — potencialmente afetando o design de segurança do core.

**#1950 — Streaming para Web Chat:** Encerrada com 10 comentários, esta issue solicitava output streaming para Web Chat. Dado que foi closed, é possível que o PR #2853 (ChatStream support) endereça parcial ou totalmente esta demanda, mas confirm that there is future work needed.

### Demanda emergente: Suporte a múltiplos canais e integrações

Três issues e PRs simultaneous abordam integrações:
- Canal **Server酱³ Bot** (China-centric) — PR #2893
- Canal **WeChat com Zhipu GLM-5** — Issue #2943 (falha de API)
- Canal **Weixin com envio de imagens** — Issue #2943 (mesmo tema)

---

## 5. Bugs e Estabilidade

### Alta Severidade

| Issue | Prioridade | Descrição | Status |
|---|---|---|---|
| #2720 | **High** | Singleton PID check não verifica identidade do processo — PID reutilizado causa crash loop | **Aberta** com PR #2813 propondo correção |
| #2939 | **Blocker** | `claude-opus-4-7` retorna HTTP 400 porque `temperature` é deprecated | **Aberta** com PR #2940 propondo correção |
| #2941 | **Blocker** | Config default escreve model ID com pontos (`claude-sonnet-4.6`) — API rejeita | **Aberta** com PR #2942 propondo correção |

Issue #2720 representa um **risco operacional real**: em ambientes Linux onde o PID é reutilizado (ex.: `systemd-resolved`), o gateway pode falhar ao iniciar sem motivo aparente, causando confusão diagnóstica.

### Média Severidade

| Issue | Descrição |
|---|---|
| #1042 | `guardCommand` bloqueia comandos legítimos por regex imprecisa |
| #2887 | `.deb` em RISC-V não funcional com modelo OpenAI |
| #2796 | Histórico de chat mostra apenas última mensagem do usuário |
| #2943 | Envio de imagem via WeChat causa erro 1210 na API Zhipu GLM-5 |
| #2890 | Validação de path falha em macOS por inconsistência de symlinks (`/var` → `/private/var`) |

**Observação:** O bug de histórico (#2796) afeta diretamente a experiência do usuário, expondo a informação compressão de prompts também no frontend — uma regressão de UX.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em Desenvolvimento (PRs abertos)

| PR | Descrição | Sinais de Roadmap |
|---|---|---|
| #2893 | Canal Server酱³ Bot — polling e webhook | Expansão de canais China-centric |
| #2853 | ChatStream para canal pico — streaming real-time via WebSocket | Funcionalidade de streaming em tempo real |
| #2696 | Headers dinâmicos por-request via contexto MCP | Suporte a autenticação personalizada em pipelines MCP |

### Needs Triage

| Issue | Feature |
|---|---|
| #1950 | Streaming output para Web Chat (encerrada, mas sem menção de implementação) |
| #2796 | Histórico completo de mensagens (bug + feature request implícita) |

### Análise de Roadmap

O projeto demonstra foco em:
1. **Resiliência operacional** (PID check, path validation)
2. **Suporte a provedores de IA** (correções de API compatibility)
3. **Expansão de canais** (WeChat, Server酱, WebSocket streaming)

A ausência de milestones documentados públicamente limita análise de alinhamento estratégico.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Dor | Frequência | Impacto |
|---|---|---|
| Configuração inicial falha com modelos Claude | 2 issues (#2941, #2939) | Bloqueia first-time experience |
| Gateway não inicia após crash (PID ghost) | 1 issue (#2720) + 1 comment | Produção crítica |
| Histórico de chat incompleto | 1 issue (#2796) | UX diária — usuário não consegue revisar conversas |
| Integração WeChat com imagens quebrada | 1 issue (#2943) | Utilização real na China |

### Padrões Identificados

**Problema de DX (Developer Experience):** Três issues (#2941, #2939, #2887) indicam que a configuração out-of-the-box não funciona corretamente com APIs externas após mudanças destas APIs. Isso suggere necessidade de **testes de smoke tests contra APIs reais** ou documentação de breaking changes mais proativa.

**Cenário de uso utama identificado:** Agentes de IA integrado a plataformas de mensagem chinesas (WeChat, Server酱) — possivelmente o maior público-alvo ativo do projeto.

### Satisfação General

A comunidade demonstra **engajamento técnico substancial** — issue de regex (#1042) com 14 comentários e PRs de correçãoopeningwithin hours de reportes indicam maturidade. No entanto, a prevalência de bugs blocking em features core (model config, streaming) pode impactar adoção por novos usuários.

---

## 8. Backlog que Merece Atenção

| Issue/PR | Idade | Status | Motivo |
|---|---|---|---|
| #1042 | ~82 dias | Aberta | Bug de segurança com regex causará mais falsos positivos se não endereçado |
| #2796 | ~19 dias | Aberta | Impacto direto na UX — usuário perde acesso a histórico |
| #2853 | ~15 dias + stale | Aberto | Feature de streaming crítico para Web Chat interativo |
| #2893 | ~8 dias + stale | Aberto | Canal Server酱 pode ser importante para mercado Chinês |
| #2887 | ~9 dias | Aberto | .deb RISC-V quebrado — arcabouço de platform compatibility |
| #2943 | <1 dia | Aberta | Integração WeChat com ZhipuAPI — falha blockers em produção |

### Priorização Recomendada

```
🔴 Crítico:  #2720 (PID crash) → #2813 pronto para merge
🔴 Crítico:  #2939 + #2941 → PRs #2940 + #2942 prontos para merge
🟠 Alta:     #1042 (guardCommand regex)
🟠 Alta:     #2796 (chat history display)
🟡 Média:    #2853 (streaming WebSocket)
🟡 Média:    #2943 (WeChat + Zhipu vision API)
```

---

## Links de Referência

- Repositório: https://github.com/sipeed/picoclaw
- Releases: https://github.com/sipeed/picoclaw/releases
- Issues em destaque:
  - #1042: https://github.com/sipeed/picoclaw/issues/1042
  - #2720: https://github.com/sipeed/picoclaw/issues/2720
  - #2796: https://github.com/sipeed/picoclaw/issues/2796
  - #2943: https://github.com/sipeed/picoclaw/issues/2943
- PRs em destaque:
  - #2813: https://github.com/sipeed/picoclaw/pull/2813
  - #2940: https://github.com/sipeed/picoclaw/pull/2940
  - #2942: https://github.com/sipeed/picoclaw/pull/2942
  - #2853: https://github.com/sipeed/picoclaw/pull/2853

---

*Relatório gerado automaticamente com base em dados do GitHub de 2026-05-26. Para informações mais detalhadas, consultar as ferramentas de Analytics nativas do GitHub.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-05-26

## 1. Panorama do dia

O IronClaw apresenta alta atividade de desenvolvimento em 2026-05-26, com 50 PRs atualizados e 22 issues nos últimos 7 dias de interação. O foco dominante continua na integração **Reborn** (novas lanes, WebUI, OAuth, GSuite), na pilha de **attested-signing** (10 PRs em progresso), e no **subagent spawn** (fases 0-4 simultâneas). A estabilidade recebe atenção com issues sobre tool-dispatch bypass e Discord CPU spike. Não há releases novas — a última publicação em crates.io (0.24.0) está defasada em relação aos tags GitHub (0.27.0).

---

## 2. Lançamentos

**Nenhum release publicado nas últimas 24h.**

| Indicador | Status |
|---|---|
| Releases GitHub (último) | `ironclaw-v0.27.0` — 2026-04-29 |
| crates.io (máximo) | `0.24.0` — 2026-03-31 |
| Gap de versão | **3 minor releases atrás** |

A defasagem entre GitHub tags e crates.io é uma preocupação ativa. A issue [#3259](https://github.com/nearai/ironclaw/issues/3259) reporta que consumidores downstream estão presos à 0.24.0 devido a CVEs no wasmtime 28.x. Nenhum release hoje significa que este gap persiste.

---

## 3. Progresso do Projeto

### PRs fechados/merged nas últimas 24h

| PR | Título | Escopo | Riscos |
|---|---|---|---|
| [#4056](https://github.com/nearai/ironclaw/pull/4056) | Classify Reborn runtime failures for recovery | core | low |
| [#4049](https://github.com/nearai/ironclaw/pull/4049) | Add tenant sandbox broker affordances | docs | low |
| [#3973](https://github.com/nearai/ironclaw/pull/3973) | add gsuite core handlers | deps | low |
| [#3971](https://github.com/nearai/ironclaw/pull/3971) | add google oauth protocol helpers | auth | low |
| [#3972](https://github.com/nearai/ironclaw/pull/3972) | cover gsuite handler shapes | tests | low |
| [#3970](https://github.com/nearai/ironclaw/pull/3970) | map gsuite port phases | docs | low |
| [#3867](https://github.com/nearai/ironclaw/pull/3867) | Subagent spawn phase 0 prerequisite | core | low |

**Destaque:** O ciclo de GSuite porting (fases 1-4) foi concluído em 2026-05-25, consolidando handlers nativos Calendar/Gmail em `ironclaw_first_party_extensions`. O PR #4056 adiciona `CapabilityFailureDisposition` para tratar falhas de runtime Reborn com better recovery context.

### PRs em aberto de maior porte (XL)

- **#4007** — Enable Reborn local yolo host access (`--confirm-host-access`)
- **#4012** — Realign Reborn lifecycle UX contracts
- **#4061** — webui v2 static port
- **#3868-#3872** — Subagent spawn fases 1-4 (draft)
- **#3960/#3961** — Attested-signing PR1/10 e PR2/10 (SigningProvider trait + ApprovedTxHash core)

---

## 4. Temas Quentes da Comunidade

### Issues com mais comentários

| Issue | Título | Comentários | Tags |
|---|---|---|---|
| [#3259](https://github.com/nearai/ironclaw/issues/3259) | Publish 0.25.0–0.27.0 to crates.io | **9** | downstream, security |
| [#3857](https://github.com/nearai/ironclaw/issues/3857) | Lane 10: Slack ProductAdapter MVP | **4** | reborn |
| [#3702](https://github.com/nearai/ironclaw/issues/3702) | binary-E2E test framework plan | **4** | reborn, testing |
| [#4017](https://github.com/nearai/ironclaw/issues/4017) | Chat tool calls bypass ToolDispatcher::dispatch | **3** | security, audit |
| [#3811](https://github.com/nearai/ironclaw/issues/3811) | Wire Reborn-native product auth | **2** | reborn, auth |

**Análise:** A publication gap em crates.io (#3259) é o tema mais discutido — 9 comentários indicam forte pressão da comunidade downstream. O security bypass em #4017 (chat tool execution sem ActionRecord) gera preocupação pelo impacto em audit trail e per-channel tool filtering.

### PRs mais comentados (indisponível nos dados — "undefined")

Os PRs listados na tabela principal mostram todos comentários como `undefined`, sugerindo que a coleta de dados pode não ter captado a contagem real. Recomenda-se verificar diretamente no GitHub para validação.

---

## 5. Bugs e Estabilidade

### Issues de bug aberto

| Issue | Severidade | Área | Status |
|---|---|---|---|
| [#4030](https://github.com/nearai/ironclaw/issues/4030) | Alta | Discord WASM channel | tokio workers 100% CPU, replies param |
| [#3447](https://github.com/nearai/ironclaw/issues/3447) | Alta | CI/E2E | Nightly E2E failed (commit 030cfeb0) |
| [#4017](https://github.com/nearai/ironclaw/issues/4017) | **Alta** (security) | Tool execution | bypass de dispatch sem ActionRecord |
| [#4019](https://github.com/nearai/ironclaw/issues/4019) | Alta | Tool execution | Convensões de segurança ignoradas |

**Destaque de estabilidade:** O issue #4030 (Discord stops replying com tokio pinned em 100% CPU) é um problema de produção crítico — ocorreu em ambiente local com systemd service. O nightly E2E failure (#3447) no commit `030cfeb0` pode estar relacionado.

**Alerta de segurança:** #4017 e #4019 indicam que o bypass de `ToolDispatcher::dispatch` no interactive chat path é um problema sistêmico, não isolado — a root cause envolve "conventions" sendo violadas sem enforcement durável.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features abertas (últimas 24h)

| Issue | Título | Área | Prioridade |
|---|---|---|---|
| [#4051](https://github.com/nearai/ironclaw/issues/4051) | Attested-signing: multi-tenant operational model | signing | tracking |
| [#4053](https://github.com/nearai/ironclaw/issues/4053) | Harden custodial-mainnet KMS fail-closed guard | signing | P0 |
| [#4052](https://github.com/nearai/ironclaw/issues/4052) | TrustEnrollment ceremony + wallet trust registration | signing | tracking |
| [#4042](https://github.com/nearai/ironclaw/issues/4042) | Complete tenant sandbox process capabilities | reborn | P1 |
| [#4043](https://github.com/nearai/ironclaw/issues/4043) | Credit/Rate Limit Transparency | UX | — |
| [#4034](https://github.com/nearai/ironclaw/issues/4034) | Custom Telegram API Host | channel/Telegram | — |
| [#4059](https://github.com/nearai/ironclaw/issues/4059) | Enrich model-visible Reborn runtime errors | reborn | — |

**Sinais de roadmap:**
- **Attested-signing** avança para modelo multi-tenant com KMS fail-closed (#4053) e TrustEnrollment (#4052) — indica maturidade da feature para produção.
- **Reborn tenant sandbox** em fase de hardening de capabilities (#4042) — próximo passo: workspace execution seguro.
- **Telegram custom host** (#4034) sinaliza demanda por self-hosted deployments — alinhado com privacidade e sovereign infra.
- **Credit/rate limit transparency** (#4043) indica problemas de onboarding e documentação insuficiente sobre consumo de API.

---

## 7. Resumo de Feedback dos Usuários

### Dores identificadas

| Cenário | Problema Reportado | Issue |
|---|---|---|
| Onboarding/setup | Usuários.confundem se requests falhados consomem credits ou rate limits | [#4043](https://github.com/nearai/ironclaw/issues/4043) |
| Produção | Discord para de responder enquanto IronClaw continua ativo com CPU 100% | [#4030](https://github.com/nearai/ironclaw/issues/4030) |
| Deploy | Necessidade de Telegram API server customizado (self-hosted) | [#4034](https://github.com/nearai/ironclaw/issues/4034) |
| Downstream | Defasagem de 3 versões em crates.io bloqueia consumo via Cargo | [#3259](https://github.com/nearai/ironclaw/issues/3259) |

**Síntese:** Usuários experimentam frustração em três eixos: (1) **opacidade de billing/credits**, (2) **estabilidade em produção** (especialmente Discord), e (3) **flexibilidade de deployment** (Telegram self-hosted). A publication gap em crates.io é o problema mais estrutural —下游 consumers não conseguem consumir atualizações de segurança.

---

## 8. Backlog que Merece Atenção

### Issues sem atividade significativa ou aguardando resposta

| Issue | Título | Criado | Atualizado | Gap |
|---|---|---|---|---|
| [#1378](https://github.com/nearai/ironclaw/issues/1378) | Per-channel MCP and built-in tool filtering | 2026-03-18 | 2026-05-25 | ~2 meses (ativo) |
| [#3590](https://github.com/nearai/ironclaw/pull/3590) | Telegram v2 inbound tracer (webhook → ledger) | 2026-05-13 | 2026-05-25 | 13 dias |
| [#3807](https://github.com/nearai/ironclaw/issues/3807) | WebUI beta route/tool surface path (Lane 7) | 2026-05-19 | 2026-05-25 | 7 dias |
| [#3613](https://github.com/nearai/ironclaw/issues/3613) | WebUI beta acceptance test | 2026-05-14 | 2026-05-25 | 12 dias |

**Alerta de backlog:** O PR #1378 (per-channel tool filtering) está em revisão há ~2 meses com tamanho XL e risco médio. É uma feature de roteamento multi-canal — atrasa a entrega de isolamento per-channel. O Telegram v2 inbound tracer (#3590) também aguarda merge há 13 dias.

---

## Métricas Resumidas do Dia

| Métrica | Valor |
|---|---|
| Issues ativas/abrias | 18 |
| Issues fechadas | 4 |
| PRs abertos | 31 |
| PRs merged/fechados | 19 |
| Releases | 0 |
| Bugs críticos abertos | 2 (#4030, #3447) |
| Security issues | 2 (#4017, #4019) |
| Features trackeadas | 7 novas |

**Saúde geral:** 🟡 Moderada — alta atividade de desenvolvimento ( Reborn, attested-signing, subagent), mas estabilidade de produção precisa de atenção (Discord CPU, E2E failures) e publication gap persiste.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório de Projeto: CoPaw — 2026-05-26

## 1. Panorama do Dia

O CoPaw apresenta **alta atividade** em 26 de maio de 2026, com 42 issues e 44 PRs atualizados nas últimas 24 horas. A equipe manteve um ritmo de fechamento intenso (28 issues + 32 PRs merged/fechados), evidenciando maturidade no fluxo de trabalho. O release **v1.1.9-beta.1** foi publicado, introduzindo reload automático da página pós-instalação de plugins. Os esforços concentram-se na estabilização da Console UI (múltiplos bugs de display reportados), expansão de testes de integração e avanços no desktop app via Tauri 2.x. A comunidade demonstra engajamento significativo com issues de bugs críticos (chat history, tool calls) e features solicitadas há bastante tempo (timestamps, memory system).

---

## 2. Lançamentos

### v1.1.9-beta.1
**Publicação:** 2026-05-25  
**Commit:** `agentscope-ai/QwenPaw#4589`

| Mudança | Autor | PR |
|---------|-------|-----|
| Bump de versão para 1.1.9b1 | @zhijianma | [#4589](https://github.com/agentscope-ai/QwenPaw/pull/4589) |
| **feat(console):** Reload da página quando plugin é instalado/desinstalado com sucesso | @zhaozhuang521 | [#4588](https://github.com/agentscope-ai/QwenPaw/pull/4588) |

**Notas:**
- **Breaking changes:** Nenhuma identificada.
- **Migração:** Apenas release beta; usuários em produção devem permanecer em v1.1.8.post1.
- O reload automático da página elimina necessidade de refresh manual pós-instalação de plugins, melhorando UX.

---

## 3. Progresso do Projeto

### PRs Merged/Closed (24h)

| PR | Tipo | Impacto | Link |
|----|------|---------|------|
| **#4578** | feat | Introduz **Coding Mode** — IDE in-browser estilo VS Code com file management, Git, terminal integrado e system prompt especializado | [#4578](https://github.com/agentscope-ai/QwenPaw/pull/4578) |
| **#4668** | refactor | Validação de `plugin.json` via Pydantic com schema formal; anteriormente `KeyError` obscuro em campos faltantes | [#4668](https://github.com/agentscope-ai/QwenPaw/pull/4668) |
| **#4665** | fix | Corrige colisão de `conversation_id` no store de webhooks DingTalk DM — múltiplas conversas compartilhavam mesmo webhook | [#4665](https://github.com/agentscope-ai/QwenPaw/pull/4665) |
| **#4667** | feat | Adiciona **tool_guard interativo com keyboard buttons** no canal QQ, seguindo padrão arquitetural do WeCom | [#4667](https://github.com/agentscope-ai/QwenPaw/pull/4667) |
| **#4667** | feat | Card de aprovação interativo com botões de teclado no QQ channel | [#4667](https://github.com/agentscope-ai/QwenPaw/pull/4667) |
| **#4599** | fix | Suporte a **dark mode no pet import drop zone** — zona previously invisível em dark mode | [#4599](https://github.com/agentscope-ai/QwenPaw/pull/4599) |
| **#4379** | fix | Renderização de **line breaks em tabelas Markdown** com `<br>` — issue #2983 | [#4379](https://github.com/agentscope-ai/QwenPaw/pull/4379) |
| **#4391** | docs | Adiciona opção de instalação via `uv tool install qwenpaw` no Quick Start | [#4391](https://github.com/agentscope-ai/QwenPaw/pull/4391) |
| **#4671** | perf | Dark mode para Coding Mode + correções menores | [#4671](https://github.com/agentscope-ai/QwenPaw/pull/4671) |

### PRs em Destaque (Under Review / Open)

| PR | Tipo | Status | Descrição | Link |
|----|------|--------|-----------|------|
| **#3346** | feat(session) | Open, Under Review | **Suporte a rollback de operações de arquivo** — recovering arquivos deletados acidentalmente | [#3346](https://github.com/agentscope-ai/QwenPaw/pull/3346) |
| **#4669** | feat(desktop) | Open | **Tauri auto-updater** — registra `tauri-plugin-updater` com comandos de update check/install | [#4699](https://github.com/agentscope-ai/QwenPaw/pull/4699) |
| **#4622** | plugin | Open, Under Review | **DataPaw plugin** — 12 habilidades BI para análise de dados | [#4622](https://github.com/agentscope-ai/QwenPaw/pull/4622) |
| **#4674** | test | Open | **Expansão de testes de integração (Sprints 1.1+1.2)** + redesign de CI gate com cobertura E2E | [#4674](https://github.com/agentscope-ai/QwenPaw/pull/4674) |
| **#4673** | fix | Open (first-time contributor) | **Corrige newline handling em comandos shell Unix** — multi-line commands não eram interpretados corretamente | [#4673](https://github.com/agentscope-ai/QwenPaw/pull/4673) |
| **#4660** | feat(provider) | Open, Under Review | Reduz modelos OpenCode para **8 modelos de interseção (Zen ∩ Go)** | [#4660](https://github.com/agentscope-ai/QwenPaw/pull/4660) |
| **#4433** | feat | Open, Under Review | **Token usage info** por conversa — badge no header, usage note em markdown, números consistentes pós-reload | [#4433](https://github.com/agentscope-ai/QwenPaw/pull/4433) |
| **#4267** | feat(security) | Open, Under Review | **File whitelist + sandbox-exec para macOS** — pre-hook mechanism para shell commands | [#4267](https://github.com/agentscope-ai/QwenPaw/pull/4267) |
| **#3729** | fix(desktop) | Open, Under Review | **Win32 API para ícone correto no taskbar Windows** — corrige Python icon default | [#3729](https://github.com/agentscope-ai/QwenPaw/pull/3729) |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| # | Título | Comentários | Status | Tema Central |
|---|--------|-------------|--------|--------------|
| **#4620** | Chat history disappeared | 12 | CLOSED | **Bug crítico:** Histórico de chat desaparece ao trocar sessão; existente há bastante tempo |
| **#4644** | Tool calls not displayed until page refresh | 9 | OPEN | **UX/Debugging:** Console UI não exibe tool calls em tempo real (exceto `read_file`); sem logs de erro |
| **#4653** | Scheduled tasks interrupted by user messages | 4 | OPEN | **Race condition:** Cron jobs compartilham session com mensagens do usuário, causando interrupção |
| **#4650** | Reasoning chain not displayed for GLM-5.1 | 4 | OPEN | **Compatibilidade de provider:** Chain de raciocínio invisível apenas para GLM-5.1 via newapi |
| **#4652** | Memory system needs summarization/correlation/reminder | 3 | OPEN | **Enhancement:** Sistema de memória "só registra, não aprende" — falta总结-关联-提醒 |
| **#4662** | Add timestamp to each message | 3 | OPEN | **Feature request:** Timestamp preciso por mensagem na UI |

### Análise de Demandas

1. **Console UI é o maior ponto de dor** — 3 dos 5 issues mais comentados относятся a problemas de display (tool calls, reasoning chain, chat history). Usuários enfrentam black box sem feedback visual durante execução de agentes.

2. **Memory system saturado** — Múltiplos usuários reportam que o sistema de memória degenerou para "information dumping" sem síntese, state tracking ou cross-referencing temporal.

3. **Sessões e tasks conflitam** — O design atual de session sharing entre scheduled tasks e mensagens interativas cria race conditions quebrecam jobs em progresso.

4. **Windows UX degradada** — Ícone errado, startup lento (40s+), e falta de feedback visual durante inicialização criam má impressão no desktop.

---

## 5. Bugs e Estabilidade

### Bugs Abertos (Alta Prioridade)

| Severidade | # | Descrição | Componentes | Link |
|------------|---|-----------|-------------|------|
| **P0** | #4620 | Chat history desaparece ao trocar sessão | Console | [#4620](https://github.com/agentscope-ai/QwenPaw/issues/4620) |
| **P0** | #4644 | Tool calls não aparecem em tempo real (exceto `read_file`) | Console (Frontend) | [#4644](https://github.com/agentscope-ai/QwenPaw/issues/4644) |
| **P0** | #4653 | Cron jobs interrompidos por mensagens de usuário | Core/Backend (session) | [#4653](https://github.com/agentscope-ai/QwenPaw/issues/4653) |
| **P1** | #4650 | Reasoning chain invisível para GLM-5.1 via OpenAI-compatible API | Console (Frontend), Provider | [#4650](https://github.com/agentscope-ai/QwenPaw/issues/4650) |
| **P1** | #4675 | File block em assistant message quebra `reasoning_content` injection permanentemente | Core/Backend (formatter) | [#4675](https://github.com/agentscope-ai/QwenPaw/issues/4675) |
| **P1** | #4666 | Models config page falha ao criar nova sessão | Console (Frontend) | [#4666](https://github.com/agentscope-ai/QwenPaw/issues/4666) |

### Bugs Recentemente Closed (com análise)

| # | Descrição | Status Final | Observação |
|---|-----------|--------------|------------|
| #4640 | MCP client TaskGroup exception causando agent freeze | CLOSED, invalid | User reporta freeze sem logs; considerado "working as designed" |
| #3445 | MCP config via GUI não passado para ReMe module | CLOSED, invalid | Arquitetura de dois sistemas MCP internos identificada; docs aguardando atualização |
| #2751 | Anthropic API rejeita `type: "file"` em content blocks | CLOSED, bug | `send_file_to_user` retornava type inválido; workaround documentado |
| #4497 | Line breaks em tabelas Markdown não funcionam | CLOSED, bug | Fix merged em #4379 |
| #4556 | Voice transcription usa Web Speech API ao invés do Whisper configurado | CLOSED, bug | Provider configurado era ignorado na prática |

### Tendência de Estabilidade

**Conclusão:** Console UI apresenta regressões de display que afetam debugging e UX. Core backend relativamente estável, mas issues de session management e MCP integration requerem atenção. O pattern de "working as designed" com muitos bugs pode indicar need de documentação ou edge case clarification.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Solicitadas (Votação Implícita por Comentários)

| # | Feature | Impacto | Status | Link |
|---|---------|---------|--------|------|
| #4662 | **Timestamps por mensagem** na Console UI | Alta (UX/Debugging) | OPEN | [#4662](https://github.com/agentscope-ai/QwenPaw/issues/4662) |
| #4652 | **Memory system com resumo/correlação/lembretes** | Alta (Core UX) | OPEN | [#4652](https://github.com/agentscope-ai/QwenPaw/issues/4652) |
| #4433 | **Token usage info** visível por conversa | Média (Observability) | Under Review | [#4433](https://github.com/agentscope-ai/QwenPaw/pull/4433) |
| #3346 | **File operation rollback** (recuperar arquivos deletados) | Média (Resiliência) | Under Review | [#3346](https://github.com/agentscope-ai/QwenPaw/pull/3346) |

### Sinais de Roadmap Identificados

1. **Desktop experience maturation:**
   - Auto-updater via Tauri (#4669)
   - Ícone correto no Windows (#3729)
   - Redução de startup time (#4158, #4664)

2. **Enterprise features:**
   - Sistema de controle de acesso unificado com whitelist/blacklist (#4565 merged)
   - File whitelist com sandbox para macOS (#4267)

3. **Plugin ecosystem expansion:**
   - DataPaw plugin com 12 BI skills (#4622)
   - Validação formal de plugin.json via Pydantic (#4668)

4. **Observability:**
   - Token usage tracking por sessão (#4433)
   - Timestamps em mensagens (#4662)

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Categoria | Descrição | Evidência |
|----------|-----------|-----------|
| **Black box debugging** | Usuários não conseguem acompanhar execução de agentes — tool calls invisíveis, reasoning chain desaparecendo, zero logs | Issues #4644, #4650, #2751 |
| **Memory is useless** | Sistema de memória "solta" informação sem organização; problemas recorrentes porque sistema não aprende | Issue #4652 |
| **Desktop feels "beta"** | Ícone errado, 40s de startup, sem feedback visual — experiência abandona impressão de "Python script" | Issues #4631, #4158, #4664, #3405 |
| **Scheduled tasks are unreliable** | Cron jobs morrem silenciosamente quando usuário envia mensagem | Issue #4653 |
| **Session state fragile** | Criar nova sessão perde configurações de Models completamente | Issue #4666 |

### Cenários de Uso Reportados

- **Agente pessoal multi-canal:** Usuários integrando DingTalk, Discord, Telegram com configurações complexas de providers
- **Automação corporativa:** Scheduled tasks para reminders (ex: "育儿经验提醒")
- **Coding agent:** Demanda por IDE-like interface crescente (feature #4578 em alta)
- **Enterprise security:** Necessidade de file whitelisting e sandboxing em ambientes controlados

### Satisfação/Insatisfação

**Positivo:**
- Release cycle ativo e responsivo
- Contribuições de first-time contributors (Unix shell fix #4673)
- Console UI evoluindo (Coding Mode, dark mode)

**Negativo:**
- Bugs críticos de display persistindo por múltiplos releases
- Documentação de arquitetura MCP insuficiente
- Experiência desktop ainda imatura comparada a web

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Estagnadas

| # | Título | Criado | Atualizado | Status | Prioridade |
|---|--------|--------|------------|--------|------------|
| #3390 | 太容易出错，期待能早日修复 | 2026-04-14 | 2026-05-25 | CLOSED (invalid) | — |
| #2584 | 代码结构有点乱 | 2026-03-30 | 2026-05-25 | CLOSED (invalid) | — |
| #4102 | Screenshots constantemente comprimidas no contexto | 2026-05-07 | 2026-05-25

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório de Projeto — ZeroClaw

**Data de referência:** 2026-05-26
**Janela de análise:** últimas 24 horas

---

## 1. Panorama do Dia

ZeroClaw mantém uma atividade intensa e bem-distribuída: 50 issues e 50 PRs atualizados nas últimas 24h, com 9 issues fechadas e 17 PRs merged/fechados — indicando fluxo de trabalho saudável tanto em resolução de problemas quanto em integração de código. A comunidade está particularmente ativa em debates de governança (RFC #6808 sobre Work Lanes), correções de bugs de segurança e estabilidade (MCP tools, cron routing, sandbox), e expansão de canais de comunicação (Mastodon, Twilio SMS, computer-use). Não houve lançamentos de novas versões, e o projeto segue em ciclo de maturação com forte foco em estabilidade e DX.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto não publicou novas versões neste período. A ausência de releases pode indicar foco em estabilização interna antes de um próximo tag — especialmente considerando a quantidade de PRs bloqueados e em revisão.

---

## 3. Progresso do Projeto

### PRs fechados/merged relevantes

| PR | Título | Impacto |
|----|--------|---------|
| [#6515](https://github.com/zeroclaw-labs/zeroclaw/pull/6515) | `fix(history-pruner): fixes #5636` | Resolve erro 1214 do provedor Z.AI com GLM-5 após trim preemptivo de contexto — **bug S1 resolvido** |
| [#6901](https://github.com/zeroclaw-labs/zeroclaw/pull/6901) | `fix(providers): preserve full reqwest error chains` | Melhora significativamente a capacidade de debug de falhas de transporte em provedores Anthropic/OpenRouter — **DX e observabilidade** |
| [#6752](https://github.com/zeroclaw-labs/zeroclaw/pull/6752) | `fix(ci): unblock pr-title workflow` | Substitui ação externa por validador local, desbloqueando merge de PRs — **correção de CI** |
| [#6867](https://github.com/zeroclaw-labs/zeroclaw/pull/6867) | `fix(setup): align Windows minimal install` | Corrige artefato de 26MB para ~6MB esperado em `--minimal` — **regressão Windows corrigida** |

### PRs abertos de destaque em progresso

| PR | Título | Tamanho | Status |
|----|--------|---------|--------|
| [#6933](https://github.com/zeroclaw-labs/zeroclaw/pull/6933) | `feat(gateway): preserve websocket steering transcript` | XL | Aberto |
| [#6611](https://github.com/zeroclaw-labs/zeroclaw/pull/6611) | `feat(file-rotation): add zeroclaw-file-rotation crate` | XL | Bloqueado (needs-author-action) |
| [#6911](https://github.com/zeroclaw-labs/zeroclaw/pull/6911) | `fix(agent): resolve runtime profile budgets` | XS | Aberto |
| [#6918](https://github.com/zeroclaw-labs/zeroclaw/pull/6918) | `feat(config): generalize #[secret] via SecretField trait` | — | Aberto |

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários + reações)

1. **[#4710](https://github.com/zeroclaw-labs/zeroclaw/issues/4710)** — Feature: A better LOGO of Zeroclaw
   - **10 comentários, 2 👍** — Maior engajamento da janela. Proposta de redesign visual com debate ativo sobre identidade da marca. Status: `blocked` + `needs-author-action` + `accepted`.
   - **Análise:** Desejo comunitário por profissionalização da identidade visual; parece estar pausado por inação do autor original.

2. **[#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)** — RFC: Work Lanes, Board Automation, and Label Cleanup
   - **6 comentários** — RFC de governança propondo lanes de PR automatizados e reorganização de labels para simplificar triagem.
   - **Análise:** Indica cansaço da comunidade com processos manuais de manutenção; alto valor estratégico se aprovado.

3. **[#6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699)** — Bug: `tool_filter_groups` é no-op para MCP tools reais
   - **6 comentários** — Bug de prefix-check em `crates/zeroclaw-runtime/src/agent/loop_.rs:149`; afecta `deferred_loading` também.
   - **Análise:** Problema técnico profundo afectando configurabilidade de ferramentas MCP — prioridade P1.

4. **[#5722](https://github.com/zeroclaw-labs/zeroclaw/issues/5722)** — Default shell sandbox blocks Python skills (CLOSED)
   - **6 comentários, JÁ FECHADO** — Reportado por Jason Perlow (CDMs FINOS); impactava desenvolvimento de skills de portfólio. Resolvido em conjunto com #6515.
   - **Análise:** Bug de alto impacto real em caso de uso profissional; comunidade de finanças/open banking a observar.

5. **[#6883](https://github.com/zeroclaw-labs/zeroclaw/issues/6883)** + **[#6914](https://github.com/zeroclaw-labs/zeroclaw/issues/6914)** — RFCs de refatoração de canal e segurança
   - Propostas de construtor compartilhado de `SendMessage` e imposição de `allowed_tools`/`denied_tools` no loop do agente.
   - **Análise:** Sinais de amadurecimento de arquitetura — melhoria de manutenibilidade.

---

## 5. Bugs e Estabilidade

### Por Severidade

#### 🔴 S1 — Funcionalidade Quebrada (Priority P1)

| Issue | Título | Status | Link |
|-------|--------|--------|------|
| #5636 | Z.AI provider retorna 1214 com glm-5-turbo | `in-progress` | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/5636) |
| #6302 | Gemini 400 — `assistant tool_call` antes de `user` (history invariant) | `in-progress` | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6302) |
| #5122 | `web_fetch` — `allowed_private_hosts` inútil para domínios com IPs privados | `accepted` | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/5122) |
| #6472 | Gateway não consegue usar PostgreSQL (runtime panic) | `in-progress` | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6472) |
| #6647 | Cron job output não é roteado para canais configurados | `accepted` | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6647) |
| #6923 | OpenAI Codex OAuth não funciona com `providers.models.openai.<alias>` | `open` | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6923) |

#### 🟠 S2 — Comportamento Degradado (Priority P1-P2)

| Issue | Título | Status | Link |
|-------|--------|--------|------|
| #6699 | `tool_filter_groups` não funciona para MCP tools reais | `accepted` | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6699) |
| #6721 | `tool_search` não está em `default_auto_approve` → hangs de 120s | `accepted` | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6721) |
| #5962 | Ollama Provider falha quando tools são necessárias | `in-progress` | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/5962) |
| #6254 | WASM plugin install path diverge do runtime scan path | `accepted` | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6254) |
| #6878 | Bubblewrap falha no Fedora 43 por falta de `/lib64` | `accepted` | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6878) (CLOSED) |
| #6912 | Mensagens de imagem Telegram travam reply-intent precheck | `CLOSED` | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6912) |

#### 🟡 S3 — Problemas Menores / DX

| Issue | Título | Status | Link |
|-------|--------|--------|------|
| #6889 | reqwest errors mostram só mensagem topo, escondendo causa raiz | `CLOSED` (via PR #6901) | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6889) |
| #6722 | `MemoryConfig.rerank_enabled/threshold` declarados mas sem consumidor | `accepted` | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6722) |
| #6836 | `setup.bat --minimal` produz 26MB em vez de ~6MB | `CLOSED` (via PR #6867) | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6836) |

**Observação:** O volume de bugs P1 abertos (6 S1 + 6 S2) representa pressão significativa sobre a equipe de manutenção. A correlação entre `deferred_loading` + MCP tools (#6699, #6721) e a estabilidade do runtime é um padrão recorrente.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features com alta prioridade ou risco

| Issue | Título | Tipo | Link |
|-------|--------|------|------|
| #6914 | `enforce allowed_tools / denied_tools` no main agent loop | Enhancement | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6914) |
| #6909 | computer-use support (screen interaction como Codex/Peekaboo) | Enhancement | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) |
| #6489 | "Everything is a plugin" — unificação Integrations → plugin catalog | Enhancement | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6489) |
| #6253 | Track: zeroclaw skills support e UX (v0.7.6) | Feature Track | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6253) |

### Extensões de canal e integração

| Issue | Título | Tipo | Link |
|-------|--------|------|------|
| #6423 | Add Mastodon (ActivityPub) channel | Enhancement | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6423) |
| #6427 | Add Twilio SMS channel | Enhancement | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6427) |
| #6456 | Add Arcee AI as model provider | Enhancement | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6456) |
| #5630 | Native extended thinking support para Anthropic | Feature | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/5630) (CLOSED) |

### RFCs em discussão

| Issue | Título | Link |
|-------|--------|------|
| #6808 | RFC: Work Lanes, Board Automation, and Label Cleanup | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) |
| #6883 | RFC: Shared reply-message constructor on SendMessage | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6883) |

**Análise de sinais:** A direção do roadmap aponta para (1) unificação de plugins, (2) expansão multi-canal (fediverse, SMS, computer-use), (3) robustez de segurança de tools e (4) suporte a providers diversificados (Arcee AI). O track de v0.7.6 sobre skills indica foco em ecossistema deextensibilidade.

---

## 7. Resumo de Feedback dos Usuários

### Dores reais identificadas

1. **Configuração de sandbox bloqueia skills Python realistas** ([#5722](https://github.com/zeroclaw-labs/zeroclaw/issues/5722))
   - *Contexto:* Usuário desenvolvendo skill de análise de portfólio FINOS CDM 5.x; sandbox padrão impede padrões comuns.
   - *Sentimento:* Frustração com barreira de entrada em ambiente profissional.

2. **Fediverse isolation** ([#6423](https://github.com/zeroclaw-labs/zeroclaw/issues/6423))
   - *Contexto:* Usuários que vivem no Mastodon não têm canal de comunicação com ZeroClaw.
   - *Sentimento:* Desejo de portabilidade entre ecossistemas.

3. **DNS rebinding / segurança de `allowed_private_hosts`** ([#5122](https://github.com/zeroclaw-labs/zeroclaw/issues/5122))
   - *Contexto:* Administradores com domínios `.local` ou infra interna estão bloqueados.
   - *Sentimento:* Segurança excessivamente restritiva prejudica casos legítimos.

4. **Debugging de providers é opaco** (endereçado parcialmente por [#6901](https://github.com/zeroclaw-l

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*