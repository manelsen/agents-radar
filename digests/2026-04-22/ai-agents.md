# Resumo diário do ecossistema de agentes de IA 2026-04-22

> Issues: 2 | PRs: 2 | Projetos cobertos: 7 | Gerado em: 2026-04-21 20:44 UTC

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
## Data: 2026-04-22

---

## 1. Panorama do dia

O projeto NullClaw apresenta **atividade moderada** em 22 de abril de 2026. Foram registradas 2 issues ativas e 2 pull requests abertos nas últimas 24h, sem nenhum merge ou release registrada no período. A atividade atual é concentrada em **manutenção de estabilidade**, com dois PRs em andamento abordando um bug crítico de consumo excessivo de CPU no gateway e um problema de compatibilidade com a migração para Zig 0.16. A comunidade demonstra engajamento significativo na issue #826 sobre integração com Tailscale (12 comentários), sugerindo demanda por documentação mais robusta.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24h.**

O projeto não publicou novas versões neste período. Isso é consistente com o padrão de trabalho em PRs abertos que ainda não foram merged.

---

## 3. Progresso do Projeto

| PR | Status | Autor | Descrição |
|----|--------|-------|-----------|
| [#853](https://github.com/nullclaw/nullclaw/pull/853) | ABERTO | manelsen | **fix(gateway): add accept-loop backoff** — Implementa backoff controlado no loop de accept para prevenir CPU spin caused by EAGAIN errors |
| [#858](https://github.com/nullclaw/nullclaw/pull/858) | ABERTO | jmylchreest | **fix(compat/net): use direct posix read/write in Stream** — Workaround para hang nos endpoints `/health` e `/ready` após migração Zig 0.16 |

**Análise:** Ambos PRs são **fixes críticos de estabilidade**. O PR #853 está diretamente vinculado à issue #851 (bug reportado), demonstrando resposta rápida da comunidade. O PR #858 ataca um problema de regressão introduzido pela migração para Zig 0.16 (commit `70d7f72`), causando CrashLoopBackOff em pods Kubernetes.

---

## 4. Temas Quentes da Comunidade

### Issue #826 — [documentation] How to use nullclaw gateway with Tailscale?
- **Autor:** eabase
- **Comentários:** 12 (mais ativa do período)
- **Status:** ABERTA
- **Link:** https://github.com/nullclaw/nullclaw/issues/826

**Resumo:** Usuário reporta erro `NotImplemented` ao tentar usar o gateway com Tailscale em VPS Debian. A questão acumulou 12 comentários, indicando:
- Demanda significativa por **documentação de integração** com ferramentas de rede (VPN mesh)
- Necessidade de clarificar requisitos de rede do gateway
- Possívelgap entre a documentação existente e casos de uso com Tailscale

---

## 5. Bugs e Estabilidade

| Issue | Severidade | Descrição |
|-------|------------|-----------|
| [#851](https://github.com/nullclaw/nullclaw/issues/851) | **ALTA** | Gateway em busy-loop consumindo ~100% de CPU core (Raspberry Pi 5, Debian trixie aarch64) |

**Detalhamento #851:**
- Bug investigado com `strace` — loop infinito em `accept4()` retornando EAGAIN
- Impacto: degradação de performance e consumo energético
- **PR corretivo associado:** #853 (já em review)
- Status: ABERTA, aguardando merge do fix

**Concern Secundário — Regressão Zig 0.16 (#858):**
- Endpoints de health/readiness param de responder sob carga
- Causa: falha identificada em `70d7f72` na migração para Zig 0.16
- Impacto em produção: CrashLoopBackOff em Kubernetes

---

## 6. Pedidos de Features e Sinais de Roadmap

**Nenhum feature request explícito registrado nas últimas 24h.**

**Sinais inferidos de demandas:**

| Sinal | Origem | Implicação |
|-------|--------|------------|
| Documentação de integração Tailscale | Issue #826 | Feature request implícito por melhores guias de deployment |
| Suporte a múltiplas redes | Issue #826 (12 comentários) | Usuários desejam flexibility em configurações de rede |
| Detecção automática de capacidades | Issue #851 | Gateway pode se beneficiar de fallback inteligente para sistemas onde `accept4()` retorna EAGAIN frequentemente |

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Dor | Frequência | Impacto |
|-----|------------|---------|
| **Integração de rede complexa** | Issue #826 (12 comments) | Usuários com dificuldade em configurar gateway com VPNs mesh (Tailscale) |
| **Consumo excessivo de CPU em idle** | Issue #851 | Degradação de performance em hardware específico (RPi 5) |
| **Regressões pós-migração Zig** | PR #858 | Quebra de health checks em ambientes Kubernetes |

### Cenários de Uso Reportados

- **Infraestrutura mista:** Usuários operando gateway em VPS Debian conectados via Tailscale
- **Edge computing:** Deploy em Raspberry Pi 5 com GNU/Linux Debian 13 (trixie)
- **Kubernetes production:** Health/readiness probes para orquestração de containers

### Indicadores de Satisfação/Insatisfação

- **Frustração moderada:** Issue com 12 comentários indica community-driven troubleshooting, mas sem resolução
- **Engajamento técnico:** Bug #851 investigado com `strace` demonstra users capacitados reportando com dados concretos
- **Pontos positivos inferidos:** Rapid response com PRs de fix antes de merge de release

---

## 8. Backlog que Merece Atenção

| Issue/PR | Idade | Prioridade | Motivo |
|----------|-------|------------|--------|
| [#826](https://github.com/nullclaw/nullclaw/issues/826) | 7 dias (criado 2026-04-15) | **ALTA** | 12 comentários sem resolução — documentação pendente |
| [#853](https://github.com/nullclaw/nullclaw/pull/853) | 3 dias (criado 2026-04-19) | **CRÍTICA** | Fix para bug de CPU spin — precisa de review rápido |
| [#858](https://github.com/nullclaw/nullclaw/pull/858) | 2 dias (criado 2026-04-20) | **ALTA** | Workaround para regressão Zig 0.16 em produção |

**Recommendation:** Priorizar review e merge dos PRs #853 e #858 para estabilizar a próxima release. Simultaneamente, issue #826 requer resposta da equipe com documentação ou workaround para integração Tailscale.

---

*Relatório gerado em 2026-04-22 com base em dados do GitHub do projeto [nullclaw/nullclaw](https://github.com/nullclaw/nullclaw).*

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo do Ecossistema Open Source de Agentes de IA

**Data de análise:** 2026-04-22
**Projetos analisados:** NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw/QwenPaw, ZeroClaw

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **dois padrões distintos de maturidade** em 22 de abril de 2026. Projetos como **NanoBot** (HKUDS), **PicoClaw** (Sipeed) e **IronClaw** (NearAI) demonstram ciclos de desenvolvimento intensos com mais de 40+ artefatos processados por dia, indicando adoption crescente e demanda ativa por features. Simultaneamente, observa-se convergência em três frontadas técnicas: (1) **segurança de execução** — shell injection, sandbox isolation e secrets management aparecem como prioridades críticas em múltiplos projetos; (2) **estabilidade de sessões** — corrupção de estado, recovery de contexto e compressão de histórico são dores recorrentes; e (3) **extensibilidade de canais** — Matrix, Telegram, Feishu, DingTalk e plataformas asiáticas (Weixin) recebem investimento significativo em três projetos independentes, sugerindo demanda de mercado. A dependência de **LiteLLM** emerge como fator de risco sistêmico após quarantine por vulnerabilidade de credential stealer, impulsionando migrações para SDKs nativos em pelo menos dois projetos.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | Fechadas/Merged | Releases (24h) | Saúde |
|---------|--------------|-----------|-----------------|----------------|-------|
| **NanoBot** | 70 | 41 | 61 issues + 27 PRs | v0.1.5.post2 | 🟢 Excelente |
| **IronClaw** | 50 | 50 | ~15 PRs | v0.26.0 | 🟢 Excelente |
| **Hermes Agent** | 50 | 50 | ~10 issues + 15 PRs | Nenhuma | 🟢 Saudável |
| **CoPaw/QwenPaw** | 50 | 39 | 29 issues + 18 PRs | v1.1.3-beta.2 | 🟡 Atenção |
| **PicoClaw** | 7 | 22 | 12 PRs | nightly (v0.2.6) | 🟢 Saudável |
| **ZeroClaw** | 25 | 50 | 3 PRs | Nenhuma | 🟡 Estável |
| **NullClaw** | 2 | 2 | 0 | Nenhuma | 🟡 Manutenção |

**Análise quantitativa:** NanoBot e IronClaw lideram em volume absoluto de artefatos processados, com taxas de resolução superiores a 65% em PRs. CoPaw apresenta alta atividade mas com **3 bugs P0 simultâneos no MCP Client**, indicando regressão crítica. NullClaw mantém atividade mínima compatível com projeto em fase de estabilização pós-release.

---

## 3. Posicionamento do Projeto Principal

*Considerando IronClaw e NanoBot como os projetos mais ativos e maduros:*

### IronClaw (NearAI)

**Vantagens competitivas:**
- Engine v2 com arquitetura flip para default, representando modernização tecnológica significativa
- Sandbox por projeto com cost tracking (v0.26.0) — diferencial para ambientes multi-tenant
- LLM-as-Judge integrado como segunda camada de segurança
- Hot-reload de providers em runtime

**Tamanho da comunidade:** 50 issues/PRs atualizados/dia indica base de contributors substancial; Bug Bash regular demonstra processo de QA maduro.

### NanoBot (HKUDS)

**Vantagens competitivas:**
- Suporte multi-canal mais amplo (Telegram, DingTalk, Feishu, WebUI, WebSocket)
- 12 novos contribuidores no último release — crescimento de comunidade forte
- LiteLLM em quarantine força migração para SDKs nativos, potencialmente mais seguro

**Diferenças técnicas:**
- IronClaw foca em sandbox e multi-tenancy enterprise; NanoBot em extensibilidade de canais e experiência de usuário
- PicoClaw diferencia-se por refatoração arquitetural do agent pipeline (loop → Pipeline stages)

---

## 4. Focos Técnicos Compartilhados

### 4.1 Segurança de Execução

| Projeto | Iniciativa de Segurança | Status |
|---------|------------------------|--------|
| NanoBot | Shell injection fix via `path_append` (#3366) | PR aberto — crítico |
| NanoBot | fsync sessions on graceful shutdown (#3369) | PR aberto — crítico |
| Hermes Agent | Audit trail SHA-256 hash-chain (#487) | 20 comentários |
| Hermes Agent | Secrets management tool (#410) | Feature request |
| ZeroClaw | Security patches: rand 0.9.4, picomatch 4.0.4 (ReDoS) | Merged |
| IronClaw | WASM credential injection em TEE (#1537) | Closed |

**Conclusão:** Shell injection e data loss prevention são preocupaciones universais. Pelo menos 4 projetos investindo simultaneamente em segurança indica maturidade do ecossistema e pressões regulatórias/de mercado.

### 4.2 Estabilidade de Sessões

| Projeto | Problema | Solução |
|---------|----------|---------|
| CoPaw | JSON corrompido em session state (race condition) | #3278 merged |
| PicoClaw | Histórico mostra apenas 1-2 mensagens (#2310) | Aberto 19 dias |
| NanoBot | Crescimento descontrolado de HISTORY.md (#1449) | Aberto |
| Hermes Agent | Compressão destrói sessões (#13576) | Aberto |

### 4.3 Infraestrutura de Canais

```
Matrix:     IronClaw (#2019), Hermes Agent (#12614), CoPaw
Telegram:   NanoBot, Hermes Agent, IronClaw, ZeroClaw
Feishu:     PicoClaw, CoPaw, ZeroClaw
Weixin:     PicoClaw (#2606)
DingTalk:   NanoBot (#3344), CoPaw
```

A fragmentação de canais sugere que **não há padrão dominante** e projetos estão responding a demandas geográficas específicas (mercado chinês em PicoClaw e CoPaw).

---

## 5. Análise de Diferenciação

| Dimensão | IronClaw | NanoBot | PicoClaw | Hermes Agent | CoPaw | ZeroClaw |
|----------|----------|---------|----------|--------------|-------|----------|
| **Posicionamento** | Enterprise multi-tenant | Agente pessoal multi-canal | Refatoração arquitetural | Privacidade/segurança | Mercado chinês | Onboarding/self-hosted |
| **Stack primária** | Rust | Python | Go | Python | Python | Rust |
| **Modelo de sandbox** | Sandbox por projeto | ExecTool isolation | channel isolation | Delegation model | MCP Client | native/docker |
| **Diferencial** | Cost tracking | Suporte Office | Agent pipeline refactor | i18n (CN) | AgentScope integration | TOML skills |
| **Público-alvo** | Corp/dev teams | Usuários individuais | Developers | Privacy-conscious | Mercado CN | Self-hosted enthusiasts |
| **Release cadence** | ~2 semanas | Alta (v0.1.5.post2) | nightly | Estável v0.8.0 | Beta (v1.1.3) | Estável |

**Observação estratégica:** A coexistência de abordagens (Rust vs Python, sandbox nativo vs container) indica que o mercado ainda não convergiu para um paradigma dominante. A diferenciação por geografia (projetos com suporte nativo para Weixin, DingTalk, Feishu) sugere oportunidades de consolidação.

---

## 6. Tração e Maturidade da Comunidade

### Iteration Velocity

| Categoria | Projetos | Característica |
|-----------|----------|----------------|
| **Iteração rápida** | NanoBot, PicoClaw, IronClaw | >40 artefatos/dia, releases frequentes |
| **Consolidação de qualidade** | Hermes Agent, NullClaw | Bugs críticos em review, foco em estabilidade |
| **Refatoração ativa** | ZeroClaw, PicoClaw | Rewrites significativos (onboard wizard, agent pipeline) |

### Debt Técnico Identificado

| Projeto | Dívida Técnica | Impacto |
|---------|---------------|---------|
| NanoBot | LiteLLM dependency (quarantine) | Migration forçada necessária |
| NanoBot | Prefix cache compatibility (#2463) | 28 dias em aberto |
| Hermes Agent | TUI freeze (2 issues P1) | Bloqueia uso produtivo |
| CoPaw | MCP Client stability (3 P0 simultâneas) | Regressão crítica |
| PicoClaw | Session persistence (19 dias) | Core functionality |

---

## 7. Sinais de Tendência

### 7.1 Tendências Confirmadas

1. **Descentralização de LLMs**: Model presets (#3358 NanoBot), hot-reload de providers (IronClaw), suporte multi-provider explícito indicam que a abstração de modelos está se tornando feature padrão.

2. **Segurança como feature de primeira classe**: Audit trail criptográfico, secrets management, fsync sessions e shell injection fixes em múltiplos projetos simultaneamente sugere que o mercado está respondendo a requisitos de compliance.

3. **Mercado asiático como driver de features**: Suporte nativo para Weixin, DingTalk, Feishu em pelo menos 3 projetos independentes; i18n para chinês em 2 projetos.

4. **MCP (Model Context Protocol) em expansão**: CoPaw investindo em semantic skill routing (#3117), /list e /show MCP commands em PicoClaw (#2535) — indica maturação do ecossistema MCP.

### 7.2 Sinais Emergentes

| Sinal | Projetos | Implicação |
|-------|----------|------------|
| Voice/SIP channels | CoPaw (#3449), Whisper transcription | Convergência para interfaces multimodais |
| Observabilidade | Token dashboard (PicoClaw #2217), latency_ms hook (NanoBot #3367) | Preparação para deploy em escala |
| Cross-device sync | CoPaw (#2301) | necessidade de continuidade de sessões |
| E2EE + TEE | Hermes Agent (#12201), IronClaw (#1537) | Privacidade avançada em demanda |

### 7.3 Riscos Sistêmicos

- **Dependência LiteLLM**: 4+ issues de erros com LiteLLM em NanoBot; quarantine (#2443) força migração. Projetos dependentes de litellm devem planar transição.
- **MCP Client immaturidade**: 3 bugs P0 simultâneos em CoPaw indicam que a implementação de MCP ainda não é production-ready.
- **Schema migrations**: ZeroClaw (#5947) e potencialmente outros projetos precisam de estratégia de migration para evitar breakages.

---

## Síntese Executiva

O ecossistema de agentes de IA open source está em **fase de maturação acelerada**, com dois padrões distintos: (1) projetos de alto volume (NanoBot, IronClaw) iterando rapidamente em features e consolidando comunidades; (2) projetos em refatoração (PicoClaw, ZeroClaw) investindo em arquitetura. As três prioridades técnicas convergentes — segurança, estabilidade de sessões e extensibilidade de canais — indicam que o mercado está resolvendo problemas fundamentais antes de avançar para features diferenciadas. O risco principal no curto prazo é a dependência de LiteLLM e a immaturidade do MCP Client. Oportunidades de consolidação existem na integração de canais asiáticos e na padronização de interfaces de segurança (audit trail, secrets management).

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-04-22

## 1. Panorama do Dia

O projeto NanoBot apresenta alta atividade de manutenção no período analisado. Foram processadas **70 issues** e **41 PRs** nas últimas 24 horas, com 61 issues fechadas e 27 PRs merged/fechadas — indicando um ritmo intenso de revisões e resolução de problemas. A release **v0.1.5.post2** trouxe 67 PRs merged e 12 novos contribuidores, expandindo suporte para Windows e Python 3.14. A base de código demonstra foco em estabilidade (security fixes, session persistence) e experiência do usuário (file attachments, analytics, model presets). Há ainda 9 issues abertas/atualizadas e 14 PRs em revisão, sinalizando pipeline saudável.

---

## 2. Lançamentos

### v0.1.5.post2 🐈
- **67 PRs merged** e **12 novos contribuidores**
- **Expansão de plataforma:** Suporte oficial para Windows e Python 3.14
- **Melhorias no `read_file`:** Funcionalidade de leitura de arquivos ampliada
- **Foco em estabilidade:** O release notes destaca que a versão anteriores focaram em auto-gerenciamento do agent; esta release prioriza **alcance e polimento**

> 📦 Release: https://github.com/HKUDS/nanobot/releases/tag/v0.1.5.post2

**Nota de migração:** Não há breaking changes documentados explicitamente, mas organizações que utilizam LiteLLM devem注意到 que a dependência foi "_quarantined_" (Issue #2443) — um alerta de segurança que pode exigir migração futura para SDKs nativos.

---

## 3. Progresso do Projeto

### PRs Fechadas/Merged Hoje (principais)

| PR | Autor | Tema | Impacto |
|---|---|---|---|
| [#3363](https://github.com/HKUDS/nanobot/pull/3363) | lahuman | Fix MiniMax reasoning split | Resolve `#3068` — habilita `reasoning_effort` no backend OpenAI-compatible da MiniMax |
| [#3336](https://github.com/HKUDS/nanobot/pull/3336) | aiguozhi123456 | Suporte DOCX, XLSX, PPTX | Extende `read_file` para documentos Office |
| [#3353](https://github.com/HKUDS/nanobot/pull/3353) | XJPeng12 | Fix workbook close em XLSX | Garante cleanup adequado com `try/finally` |
| [#3355](https://github.com/HKUDS/nanobot/pull/3355) | hussein1362 | Melhora renderização Markdown no Telegram | Suporte a listas numeradas, headers, formatação aninhada |
| [#3356](https://github.com/HKUDS/nanobot/pull/3356) | chengyongru | Retry reconhece erro 1302 da ZhiPu | Fallback automático funciona corretamente |
| [#3359](https://github.com/HKUDS/nanobot/pull/3359) | chengyongru | Intercepta comandos não-priority durante turno ativo | Evita injeção de comandos como `/new` no contexto LLM |
| [#3364](https://github.com/HKUDS/nanobot/pull/3364) | chengyongru | GIF demo no README | Melhora experiência visual para novos usuários |
| [#3365](https://github.com/HKUDS/nanobot/pull/3365) | anjorinjnr | Hook Analytics com PostHoc |tracking de 5 eventos: `message_sent`, `agent_responded`, etc. |
| [#3358](https://github.com/HKUDS/nanobot/pull/3358) | chengyongru | Model presets para troca rápida | `ModelPresetConfig` com bundled params (model, temp, reasoning_effort) |
| [#3347](https://github.com/HKUDS/nanobot/pull/3347) | XJPeng12 | Docs WebSocket para WebUI | Facilita onboarding de devs |
| [#1125](https://github.com/HKUDS/nanobot/pull/1125) | fengxiaohu | Comando `/model` no Telegram | Switch dinâmico de modelos por sessão |

### PRs Abertas em Destaque

| PR | Autor | Tema | Criticidade |
|---|---|---|---|
| [#3369](https://github.com/HKUDS/nanobot/pull/3369) | hussein1362 | fsync sessions on graceful shutdown | 🔴 Alta — previne data loss em VFS/NFS/FUSE |
| [#3366](https://github.com/HKUDS/nanobot/pull/3366) | yorkhellen | Previne shell injection via `path_append` | 🔴 Alta — security fix no ExecTool |
| [#3368](https://github.com/HKUDS/nanobot/pull/3368) | hussein1362 | Heartbeat com model override | 🟡 Média — permite usar modelo barato para heartbeats |
| [#3367](https://github.com/HKUDS/nanobot/pull/3367) | mihai-chiorean | Expor `latency_ms` no AgentHookContext | 🟡 Média — habilita métricas de observabilidade |
| [#2871](https://github.com/HKUDS/nanobot/pull/2871) | dmagyar | Canal web com SSE streaming | 🟢 Baixa — feature enhancement (UI) |
| [#3303](https://github.com/HKUDS/nanobot/pull/3303) | MuataSr | spawn_status/spawn_cancel tools | 🟡 Média — tooling para subagents |
| [#3332](https://github.com/HKUDS/nanobot/pull/3332) | wb213 | `/status` com breakdown de contexto | 🟢 Baixa — UX improvement |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários + reações)

**#2463 — [OPEN] Architectural issue: prompt prefix preservation** *(10 comentários)*
- **Problema central:** NanoBot persiste histórico de conversa em formato diferente do prompt prefix enviado ao modelo, criando conflito com cache de prefixo do OpenAI Pro
- **Implicação:** Pode impactar performance e custos para usuários de modelos com prefix caching
- **Status:** Aberta (stale) desde 2026-03-25
- 🔗 https://github.com/HKUDS/nanobot/issues/2463

**#161 — [CLOSED] Proposal: Replace LiteLLM with native SDKs** *(6 comentários, 8 👍)*
- **Proposta:** Substituir `litellm` por SDKs nativos (openai, anthropic, google-generativeai) para reduzir dependências e melhorar transparência
- **Motivação:** LiteLLM foi "_quarantined_" por conter credential stealer (Issue #2443)
- **Status:** Fechada, mas linked à Issue #2443
- 🔗 https://github.com/HKUDS/nanobot/issues/161

**#3107 — [CLOSED] Algumas sugestões** *(6 comentários)*
- Checkbox checklist com 7 sugestões, 2 já implementadas:
  - ✅ Status com contagem de tasks
  - ✅ Indicar availability de session history no system prompt
  - ❌ Suporte a `-model` via CLI
  - ❌ Timeout configurável para LLM requests
  - ❌ Fallback entre providers
  - ❌ Multi-custom provider config
- 🔗 https://github.com/HKUDS/nanobot/issues/3107

**#2389 — [OPEN] OpenWebUI como canal oficial?** *(3 comentários)*
- Demanda por integração com OpenWebUI
- 🔗 https://github.com/HKUDS/nanobot/issues/2389

**#3344 — [OPEN] DingTalk: arquivo não chega ao agent** *(2 comentários)*
- Upload de arquivo e @mention chegam como mensagens separadas, impedindo o agent de receber o arquivo
- 🔗 https://github.com/HKUDS/nanobot/issues/3344

---

## 5. Bugs e Estabilidade

### Regressões e Problemas Críticos

| Issue | Severidade | Problema | Status |
|---|---|---|---|
| [#3366](https://github.com/HKUDS/nanobot/pull/3366) | 🔴 **Crítica** | Shell injection via `path_append` no ExecTool (não-Windows) | **PR aberta — precisa review urgente** |
| [#3369](https://github.com/HKUDS/nanobot/pull/3369) | 🔴 **Crítica** | Data loss em filesystems com write-back caching (rclone VFS, NFS, FUSE) | **PR aberta — precisa review urgente** |
| [#2463](https://github.com/HKUDS/nanobot/issues/2463) | 🟡 **Alta** | Histórico de conversa não preserva prompt prefix exato — quebra prefix cache | Aberta (stale) |
| [#3068](https://github.com/HKUDS/nanobot/issues/3068) | 🟡 **Alta** | MiniMax `reasoning_effort` ignorado no backend OpenAI-compatible | ✅ Resolvida por #3363 |
| [#1236](https://github.com/HKUDS/nanobot/issues/1236) | 🟡 **Alta** | Mensagens do assistant não são adicionadas ao history array | Aberta desde 2026-02-26 |
| [#1833](https://github.com/HKUDS/nanobot/issues/1833) | 🟡 **Alta** | SIGTERM e shutdown abrupto sem reason | Fechada, sem resolução clara |

### Padrões Observados

- **LiteLLM issues:** Múltiplas issues de erros 400/500 com LiteLLM (#1157, #194, #1225, #128, #965, #942)
- **Provider-specific errors:** DeepSeek reasoning_content missing, ZhiPu rate-limit não reconhecido, Anthropic BadRequestError
- **Session management:** Crescimento descontrolado de HISTORY.md (#1449), arquivos de sessão estourando contexto (#2062)

---

## 6. Pedidos de Features e Sinais de Roadmap

### Funcionalidades Solicitadas (Prioridade Alta)

| Feature | Issue | Demanda | Sinais de Roadmap |
|---|---|---|---|
| **LiteLLM replacement** | #161, #2443 | Migrar para SDKs nativos ou alternatives | Alerta de segurança pode forçar movimento |
| **Observabilidade (Langfuse)** | #2189 | Tracing/logging/monitoring de LLM calls | #3367 adiciona `latency_ms` — possível integração futura |
| **Model switching via Telegram** | #1292, #1113 | Comando `/model` para trocar LLM em tempo real | ✅ Implementado em #1125 |
| **Fallback entre providers** | #3107 | Auto-switch para provider alternativo em falha | #3356 melhorou retry; #3358 adiciona presets |
| **Timeout configurável** | #3107 | LLM request timeout via config | Não implementado |
| **WebUI oficial** | #2871, #2389 | Canal web com SSE streaming | PR #2871 em progresso |
| **Spawn tool enhancements** | #3303 | Status e cancel de subagents | PR em revisão |

### Sinais de Direcionalidade

1. **Segurança reforçada:** Shell injection fix (#3366) e fsync sessions (#3369) indicam foco em production readiness
2. **Observabilidade:** Hook de latência (#3367) + PostHog analytics (#3365) sugerem preparado para deployment em escala
3. **Multi-provider:** Model presets (#3358) facilitam experimentação com diferentes LLMs
4. **UX de mensagens:** Markdown no Telegram (#3355), file attachments (#3361), context breakdown (#3332)

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

**📌 Session Management (crítica)**
> "在使用飞书的过程中...一个session/目录下feishu_id的文件越来越大, 最终撑爆上下文"

- Usuários precisam deletar arquivos de sessão manualmente para reiniciar conversas
- Crescimento descontrolado de HISTORY.md (#1449)
- **Necessidade:** Feature de "novo session" sem intervenção manual

**📌 Estabilidade de Provedores**
> "Anthropic provider stopped working, no config changes were made"

- Falhas intermitentes sem causa clara, especialmente com LiteLLM
- Fallback automático não funciona corretamente em alguns casos (#942)
- Timeout não configurável causa frustração em provedores instáveis

**📌 Descoberta de Funcionalidades**
> "I recently upgrade to the latest version of nanobot. When I now ask my bot to help create a skill, it states 'skill-creator tool is not available'"

- Usuários não sabem que ferramentas foram removidas/desabilitadas
- Falta de indicadores claros no system prompt sobre capabilities disponíveis

**📌 Shell Injection/SIGTERM**
> "我测试了不到半小时，已经两次出现这个消息并程序退出了"

- Crashes abruptos sem mensagens de erro descritivas
- Usuários em produção reportam instabilidade

### Cenários de Uso Emergentes

- **Agentes multi-session** em plataformas como Feishu (Lark) e DingTalk
- **Deploys em infraestrutura não-padrão** (rclone VFS, NFS, containers)
- **Experimentação com modelos** — DeepSeek reasoning, MiniMax, provedores chineses
- **Integração via WebUI/WebSocket** para custom frontends

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Stale

| Issue | Idade | Título | Prioridade |
|---|---|---|---|
| [#2463](https://github.com/HKUDS/nanobot/issues/2463) | ~28 dias | Architectural issue: prompt prefix preservation | 🔴 Alta |
| [#1236](https://github.com/HKUDS/nanobot/issues/1236) | ~56 dias | Assistant replies missing from history | 🟡 Alta |
| [#2389](https://github.com/HKUDS/nanobot/issues/2389) | ~30 dias | OpenWebUI como canal oficial? | 🟢 Média |
| [#3344](https://github.com/HKUDS/nanobot/issues/3344) | 1 dia | DingTalk file upload broken | 🟡 Média |

### PRs em Review com Impacto Alto

| PR | Tema | Urgência |
|---|---|---|
| [#3366](https://github.com/HKUDS/nanobot/pull/3366) | Shell injection fix | 🔴 Merge imediato |
| [#3369](https://github.com/HKUDS/nanobot/pull/3369) | fsync sessions on shutdown | 🔴 Merge imediato |
| [#2871](https://github.com/HKUDS/nanobot/pull/2871) | Web channel com SSE | 🟢 Feature growth |

### Debt Técnico Identificado

1. **LiteLLM dependency** — A "_quarantine_" (#2443) representa risco de segurança;替代方案 (#161) precisa ser priorizada
2. **Multi-provider abstraction** — Padrão inconsistente entre provedores (retry markers, error handling)
3. **Prefix cache compatibility** — Issue #2463 indica dívida arquitetural no histórico de conversas
4. **Session persistence** — Crescimento de arquivos sem estratégia de rotação ou compressão

---

## Indicadores de Saúde do Projeto

| Métrica | Valor | Avaliação |
|---|---|---|
| Issues fechadas (24h) | 61/70 | 🟢 Excelente — 87% resolved |
| PRs merged/fechadas (24h) | 27/41 | 🟢 Bom — 66% merged |
| Novos contribuidores (release) | 12 | 🟢 Muito bom — growth |
| PRs security-critical abertas | 2 | 🔴 Atenção — precisa review |
| Issues stale >14 dias | 4+ | 🟡 Atenção — triagemNeeded |
| Release velocity | v0.1.5.post2 | 🟢 Ativa — feature parity |

---

*Relatório gerado em 2026-04-22 com base em dados do GitHub do NanoBot (HKUDS/nanobot).*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-04-22

## 1. Panorama do dia

O projeto Hermes Agent apresenta **alta atividade** em 21 de abril de 2026, com 50 issues e 50 PRs atualizados nas últimas 24h. Não houve lançamentos de novas versões, mas o volume de PRs fechados (15) indica progresso contínuo na estabilização. A comunidade demonstra interesse forte em melhorias de segurança (audit trail, secrets management), suporte a plataformas (Matrix, Telegram, Slack) e correções de estabilidade no gateway e TUI. A taxa de Issues fechadas (10/50 = 20%) sugere que a equipe está ativa em triagem e resolução.

---

## 2. Lançamentos

**Nenhum release nas últimas 24h.** O projeto não publicou novas versões desde a última atualização. Os usuários permanecem na versão v0.8.0 (2026.4.8), conforme reportado em issues de diagnóstico (`hermes doctor`).

---

## 3. Progresso do Projeto

### PRs importantes merged/fechados hoje (15 total)

| # | Título | Impacto |
|---|--------|---------|
| [#13681](https://github.com/NousResearch/hermes-agent/pull/13681) | refactor(delegate): remove dead `delegation.default_toolsets` config key | Limpeza de código — remove config nunca utilizado |
| [#13569](https://github.com/NousResearch/hermes-agent/pull/13569) | feat(cli): add Chinese (Simplified) i18n support | **Localização** — ativa via `HERMES_CLI_LANG=zh` |
| [#13677](https://github.com/NousResearch/hermes-agent/pull/13677) | feat(image-gen): add GPT Image 2 to FAL catalog | **Novos modelos** — GPT Image 2 disponível em `fal-ai/gpt-image-2` |
| [#13676](https://github.com/NousResearch/hermes-agent/pull/13676) | fix(gateway): always inject reply-to pointer | **UX/Mensagens** — melhora desambiguação de replies |
| [#13674](https://github.com/NousResearch/hermes-agent/pull/13674) | skills(llama-cpp): HF Hub discovery workflow | **Skills** — reescrita do skill com workflows do HuggingFace |
| [#13642](https://github.com/NousResearch/hermes-agent/pull/13642) | improve llama.cpp skill | **Docs/Skills** — integração HF melhorada |
| [#12290](https://github.com/NousResearch/hermes-agent/issues/12290) | fix(mattermost): edit_message rejects finalize kwarg | **Plataforma** — corrige compatibilidade após merge do DingTalk |

**Destaque:** A adição de **suporte a Chinese i18n** (#13569) sinaliza foco em internacionalização, atendendo à base crescente de usuários chineses.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários + reações)

| # | Título | Comentários | 👍 | Categoria |
|---|--------|-------------|-----|-----------|
| [#487](https://github.com/NousResearch/hermes-agent/issues/487) | Feature: Cryptographic Audit Trail — SHA-256 Hash-Chain | 20 | 0 | 🔐 Segurança |
| [#410](https://github.com/NousResearch/hermes-agent/issues/410) | Feature: Secure Secrets Management Tool | 5 | 0 | 🔐 Segurança |
| [#8576](https://github.com/NousResearch/hermes-agent/issues/8576) | [security] WhatsApp bridge npm vulnerabilities | 2 | 1 | 🔐 Segurança |
| [#4595](https://github.com/NousResearch/hermes-agent/issues/4595) | Cron Job Results Should Be Observable | 1 | 3 | 📋 Features |

### Análise dos temas quentes

**1. Segurança e Auditoria (话题 #1)**
- A comunidade demonstra forte interesse em **infraestrutura de confiança**:
  - Audit trail criptográfico inspirado em OpenFang (#487, 20 comentários) — chain de hashes SHA-256 para logs imutáveis de ações do agente
  - Gerenciamento seguro de secrets (#410) — hoje secretos estão em texto plano em `~/.hermes/.env`
  - Vulnerabilidades npm no WhatsApp bridge (#8576) — alerta de segurança ativo

**2. Observabilidade de Cron Jobs (#4595, 3 👍)**
- Usuários querem que resultados de cron jobs sejam visíveis e interagíveis pelo agente principal — atualmente executados em sessões isoladas

**3. Suporte a Plataformas**
- Slack Block Kit (#8552, 3 👍) — migração de mrkdwn legacy para markdown moderno
- GHE Enterprise Server (#11442) — Copilot só funciona em github.com, não em instâncias corporativas

---

## 5. Bugs e Estabilidade

### Bugs críticos/alta severidade

| # | Severidade | Título | Plataforma/Componente |
|---|------------|--------|------------------------|
| [#13617](https://github.com/NousResearch/hermes-agent/issues/13617) | **High** | Terminal approval prompt freezes input | CLI/TUI |
| [#13618](https://github.com/NousResearch/hermes-agent/issues/13618) | **High** | TUI approval overlay freezes terminal | TUI |
| [#12614](https://github.com/NousResearch/hermes-agent/issues/12614) | **High** | Matrix bot doesn't receive messages on fresh setup | Matrix |
| [#11323](https://github.com/NousResearch/hermes-agent/issues/11323) | **High** | Gateway start/install fails on macOS (launchctl error) | macOS/Gateway |
| [#13631](https://github.com/NousResearch/hermes-agent/issues/13631) | **Medium** | Honcho rebuilds system prompt every N turns, invalidating KV cache | Agent/Core |

### Bugs mediums/baixa severidade

| # | Título | Componente |
|---|--------|------------|
| [#11312](https://github.com/NousResearch/hermes-agent/issues/11312) | Gateway working directory config not respected | Gateway |
| [#7475](https://github.com/NousResearch/hermes-agent/issues/7475) | GLM-4.7 model not found (glm-5 works) | Provider/GLM |
| [#13568](https://github.com/NousResearch/hermes-agent/issues/13568) | Local STT doesn't reuse CPU fallback after cuBLAS failure | STT/TTS |
| [#13626](https://github.com/NousResearch/hermes-agent/issues/13626) | Google-workspace skill unusable on Nix | Plugins/Nix |
| [#13577](https://github.com/NousResearch/hermes-agent/issues/13577) | TickTick skill not available in Telegram | Telegram/Skills |

### Regressão de compressão (#13576)
- Sessões ficam "100% inúteis" após summarização — `max_tokens: 2600` é insuficiente para comprimir 64k tokens

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em aberto com alto potencial

| # | Título | Justificativa estratégica |
|---|--------|---------------------------|
| [#13680](https://github.com/NousResearch/hermes-agent/pull/13680) | Configurable exhausted cooldown para credential pool | Reduz fallback cascades após rate limits |
| [#13647](https://github.com/NousResearch/hermes-agent/pull/13647) | Configurable models para memory/skill background reviews | Flexibilidade de custo/performance |
| [#12201](https://github.com/NousResearch/hermes-agent/pull/12201) | NEAR AI + Phala AI — TDX attestation + E2EE | **Privacidade** — attestation de hardware |
| [#11616](https://github.com/NousResearch/hermes-agent/issues/11616) | Ajuste de reconnect attempts por provider | Evita loops infinitos com providers instáveis |
| [#13089](https://github.com/NousResearch/hermes-agent/pull/13089) | Chinese tokenization para session_search | Busca em mandarim melhorada |
| [#13625](https://github.com/NousResearch/hermes-agent/issues/13625) | Chinese Localization for Hermes Agent CLI | Suporte a mercado chinês |

### Sinais de roadmap implícitos
- **Windows suporte** (#13597, #13598) — PRs em progresso com CI dedicado
- **Sessões cross-platform** (#13675) — atomic session persistence para ACP
- **Concurrent platform connection** (#13602) — gateway não bloqueia mais em timeouts

---

## 7. Resumo de Feedback dos Usuários

### Dores reais identificadas

| Categoria | Feedback | Frequência |
|-----------|----------|------------|
| 🖥️ **Terminal/TUI instável** | "Terminal freezes completely" em prompts de aprovação (#13617, #13618) | Alta |
| 📱 **Matrix não funciona** | Bot conecta mas não recebe mensagens em setup novo (#12614) | Média-alta |
| 🍎 **macOS gateway quebrado** | `launchctl bootstrap` falha com I/O error (#11323) | Média |
| 🔑 **Credenciais perdidas em subagentes** | `delegate_task` falha com 404 por falta de .env (#13678) | Média |
| 📦 **Skills não funcionam em Nix** | Google-workspace skill não instala deps (#13626) | Baixa |
| 📉 **Compressão destrói sessões** | Summarize gera sessões inúteis (#13576) | Alta |

### Cenários de uso em destaque

1. **Agentes de produção** — Audit trail (#487) e secrets management (#410) são prioritários para uso corporativo
2. **Mercado chinês** — Múltiplos issues sobre GLM models, Chinese i18n, e tokenização (#13089, #13625)
3. **Multi-plataforma** — Usuários querem Telegram, Discord, WhatsApp, Matrix, Slack, DingTalk, Feishu funcionando simultaneamente

---

## 8. Backlog que Merece Atenção

### Issues sem resposta / stalled

| # | Título | Criado | Status | Observação |
|---|--------|--------|--------|------------|
| [#4595](https://github.com/NousResearch/hermes-agent/issues/4595) | Cron Jobs should be observable | 2026-04-02 | Open (1 👍) | 19 dias sem resposta da equipe |
| [#7475](https://github.com/NousResearch/hermes-agent/issues/7475) | GLM-4.7 model not found | 2026-04-11 | Open | 10 dias, afeta usuários Z.AI/GLM |
| [#11616](https://github.com/NousResearch/hermes-agent/issues/11616) | Provider reconnection count | 2026-04-17 | Open | 4 dias, PR #13680 related |
| [#8576](https://github.com/NousResearch/hermes-agent/issues/8576) | WhatsApp npm vulnerabilities | 2026-04-12 | Open (1 👍) | **Segurança** — 9 dias sem triagem |

### Priorização recomendada

1. 🔴 **Crítico**: Corrigir freeze do TUI (#13617, #13618) — bloqueia uso produtivo
2. 🔴 **Crítico**: Resolver audit de npm vulnerabilities (#8576) — risco de segurança
3. 🟠 **Alta**: Matrix fresh setup (#12614) — experiência de onboarding quebrada
4. 🟠 **Alta**: macOS gateway (#11323) — quebra em Apple Silicon
5. 🟡 **Média**: Secrets management (#410) — demanda comunitária forte

---

## Métricas Resumidas (2026-04-21)

| Métrica | Valor |
|---------|-------|
| Issues ativas | 40 |
| Issues fechadas (24h) | 10 |
| PRs abertos | 35 |
| PRs merged/fechados | 15 |
| Novas releases | 0 |
| Issues de segurança abertas | 1+ (npm vulnerabilities) |
| Bugs alta severidade | 5 |
| Features em revisão (PR) | 8+ |

**Veredicto de saúde**: O projeto está **ativo e saudável**, com alta taxa de contribuição e resolução de issues. Áreas de atenção imediata: estabilidade do TUI/terminal, segurança do WhatsApp bridge, e experiência Matrix. O roadmap informal sugere foco em internacionalização (chinês) e privacidade (TDX/E2EE).

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório de Projeto — PicoClaw

**Data do relatório:** 2026-04-22
**Repositório:** [sipeed/picoclaw](https://github.com/sipeed/picoclaw)
**Versão de referência (nightly):** `v0.2.6-nightly.20260421.71c877a6`

---

## 1. Panorama do dia

O projeto PicoClaw manteve um patamar de atividade **muito elevado** em 22 de abril de 2026, com **22 PRs atualizados** nas últimas 24h — dos quais 12 já foram merged ou fechados — e **7 issues** registradas no mesmo período. A release nightly `v0.2.6-nightly.20260421` foi gerada automaticamente, sinalizando que a integração contínua segue ativa e saudável. A combinação de refatorações estruturais (pipeline do agent), melhorias em múltiplos canais (Weixin, Feishu, LINE) e correções de autenticidade indica que o projeto está em uma fase de **maturação acelerada**, com foco simultâneo em estabilidade e recursos. O volume de atividade sugere uma comunidade engajada e um ciclo de desenvolvimento intenso.

---

## 2. Lançamentos

### nightly — v0.2.6-nightly.20260421.71c877a6

| Campo | Detalhe |
|---|---|
| **Tag** | `nightly` (build automático) |
| **Commit** | `71c877a6` |
| **Comparativo** | [`v0.2.6...main`](https://github.com/sipeed/picoclaw/compare/v0.2.6...main) |
| **Aviso** | *Use with caution* — build não estabilizado |

**Observações:**

- Trata-se de uma **nightly build** com base no branch `main`, não uma release tagada formal. O aviso oficial "may be unstable" deve ser levado em conta em ambientes de produção.
- A presença de commits relevantes merged nas últimas 24h (detalhados na seção 3) indica que esta nightly já incorpora melhorias significativas em relação à última versão tagada `v0.2.6`.
- **Não há notas formais de migração** para esta build. Usuários em versões anteriores devem monitorar issues recentes (e.g., #2598 — regressão do WebUI na upgrade 0.2.4 → 0.2.6) antes de atualizar.

---

## 3. Progresso do Projeto

Resumo dos **PRs fechados/merged nas últimas 24h** e seu impacto:

| PR | Tipo | Título | Impacto |
|---|---|---|---|
| [#2613](https://github.com/sipeed/picoclaw/pull/2613) | 🐞 bug (go) | `chore(isolation): fix govet shadow declaration` | Corrige warnings de compilação no Windows; elimina shadowing de variável `err` em `platform_windows.go` |
| [#2611](https://github.com/sipeed/picoclaw/pull/2611) | ✨ enhancement | `add structed ui` | Adiciona UI estruturada (pendente revisão completa do título e descrição) |
| [#2608](https://github.com/sipeed/picoclaw/pull/2608) | ✨ enhancement (config) | `refactor(web): switch dashboard auth from tokens to passwords` | Migra autenticação do launcher dashboard de tokens reutilizáveis para senhas com hash bcrypt; migração automática de tokens legados |
| [#2607](https://github.com/sipeed/picoclaw/pull/2607) | ✨ enhancement (channel) | `feat(feishu): Add group chat trigger and random emoji response` | Adiciona opção `group_trigger.mention_only` e respostas com emojis aleatórios no Feishu |
| [#2605](https://github.com/sipeed/picoclaw/pull/2605) | 🐞 bug (web) | `fix(web): clean up restored chat transcripts and optimize chat UI` | Remove mensagens brutas de tool ao restaurar sessão; evita duplicação de resumos e otimiza renderização |
| [#2599](https://github.com/sipeed/picoclaw/pull/2599) | 🐞 bug (auth) | `fix(auth): canonicalize Google Antigravity provider and enhance credential management` | Resolve inconsistência de expiração de token reportada em #2550; normaliza chave `antigravity` → `google-antigravity` em `auth.json` |
| [#2601](https://github.com/sipeed/picoclaw/pull/2601) | 📖 documentation | `docs: update documentation for Gemini native protocol` | Atualiza documentação oficial do protocolo nativo Gemini |
| [#2595](https://github.com/sipeed/picoclaw/pull/2595) | ✨ enhancement (channel) | `feat(web): support list editing for channel array fields` | Adiciona edição via chips para campos array em configurações de canal (allow_from, allow_origins, etc.) |
| [#2537](https://github.com/sipeed/picoclaw/pull/2537) | ✨ enhancement (agent) | `feat(agent): add context usage ring indicator and /context command` | Adiciona comando `/context` que reporta contagem de mensagens, tamanho estimado do histórico e uso de tokens |
| [#2585](https://github.com/sipeed/picoclaw/pull/2585) | 🔨 refactor (agent) | `refactor(agent): Agent Looper refactor phase2 — restructure pipeline` | Refatoração séria:divide `loop.go` (~1500 linhas) em arquitetura Pipeline com arquivos `agent_*.go` e estágios `SetupTurn`, `CallLLM`, `ExecuteTools`, `Finalize` |
| [#2604](https://github.com/sipeed/picoclaw/pull/2604) | 📖 documentation | `docs: update wechat qrcode` | Atualiza QR code de contato WeChat na documentação |
| [#2343](https://github.com/sipeed/picoclaw/pull/2343) | 🐞 bug (provider) | `fix(antigravity): bump client version to 1.25.0 for gemini-3.1 model access` | Atualiza `antigravityVersion` de `1.15.8` para `1.25.0`, habilitando acesso a modelos `gemini-3.1-*` na API Cloud Code Assist |

**Destaques estratégicos:**

- **Refatoração do Agent (#2585):** A segunda fase do refactor do `loop.go` representa uma melhoria arquitetural significativa que facilitará manutenção, testes e extensão futura do pipeline de agentes.
- **Segurança (#2608):** A migração de tokens para senhas com bcrypt no dashboard é uma melhoria de segurança relevante para ambientes compartilhados.
- **Provider Google Antigravity (#2343 + #2599 + #2163):** Trilogy de PRs resolvendo problemas de autenticação, scopes OAuth e versionamento do cliente — indica foco do time em integração com Google Cloud Code Assist.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários)

| Issue | Tipo | Título | Comentários | Impacto |
|---|---|---|---|---|
| [#2367](https://github.com/sipeed/picoclaw/issues/2367) | 🐞 bug | `[BUG] O título da última tela permanece em chinês quando English é selecionado` | 4 | Bug de internacionalização (i18n); afetado em todas as sessões após mudança de idioma |
| [#2548](https://github.com/sipeed/picoclaw/issues/2548) | 🐞 bug | `[Error] Multiple authentication credentials received` | 4 | Configuração de provider/model no `config.json` gera erro de credenciais duplicadas |
| [#2310](https://github.com/sipeed/picoclaw/issues/2310) | 🐞 bug | `关于对话的历史记录显示问题` (Problema de exibição de histórico de chat) | 3 | Histórico de conversa persiste apenas 1-2 mensagens; crítico para demonstração e rastreamento |
| [#2217](https://github.com/sipeed/picoclaw/issues/2217) | ✨ enhancement | `[Feature] Dashboard de consumo de tokens para WebUI` | 2 | Demanda por visibilidade de custos de tokens por sessão/modelo |
| [#2598](https://github.com/sipeed/picoclaw/issues/2598) | 🐞 bug | `[BUG] After upgrading from 0.2.4 to 0.2.6, the web UI cannot display properly` | 2 | **Regressão crítica** após atualização; WebUI não carrega após upgrade de versão |
| [#2081](https://github.com/sipeed/picoclaw/issues/2081) | 🐞 bug | `Tool feedback preview escapes special characters as Unicode sequences` | 2 | Comandos shell no preview de tools mostram `\u0026` etc. em vez de `&`, `>`, `<` |
| [#2550](https://github.com/sipeed/picoclaw/issues/2550) | 🐞 bug | `Shouldn't picoclaw auth login --provider google-antigravity update the token expiration` | 0 | Bug de expiração de token no CLI (já resolvido em #2599) |

### PRs com maior engajamento

| PR | Tipo | Título | Impacto |
|---|---|---|---|
| [#2563](https://github.com/sipeed/picoclaw/pull/2563) | ✨ enhancement (web) | `feat(web): download files on frontend` | Suporte completo a anexos de arquivo no canal web; backend emite metadados estruturados e expõe mídia autenticada |
| [#2535](https://github.com/sipeed/picoclaw/pull/2535) | ✨ enhancement (agent) | `feat(commands): add MCP slash commands and tool details` | Adiciona `/list mcp` e `/show mcp <server>` — ergonomia significativamente melhorada para desenvolvedores que usam MCP |

**Análise temática:**

Três eixos se destacam na comunidade hoje:

1. **Persistência e recuperação de dados (#2310, #2598):** A perda de histórico de chat e a regressão do WebUI após upgrade indicam que o armazenamento de sessões e a migração de estado entre versões são pontos fracos percebidos. O PR #2605 mitigou parte do problema de restauração, mas a causa raiz do #2310 (dados gravados incompletos em disco) ainda está em aberto.

2. **Autenticação e providers (#2548, #2550, #2163, #2599):** A configuração de providers personalizados no `config.json` e a gestão de tokens OAuth são temas recorrentes. A canonicalização de `google-antigravity` em #2599 é um sinal de amadurecimento da API de autenticação.

3. **Experiência do desenvolvedor com MCP (#2535):** A adição de slash commands `/list mcp` e `/show mcp` representa uma melhoria de UX relevante para a comunidade que utiliza Model Context Protocol.

---

## 5. Bugs e Estabilidade

### Bugs em aberto (5 issues ativas)

| Severidade | Issue | Título | Dominínio | Dias aberto* |
|---|---|---|---|---|
| 🔴 **Alta** | [#2598](https://github.com/sipeed/picoclaw/issues/2598) | `[BUG] WebUI não funciona após upgrade de 0.2.4 para 0.2.6` | channel (web) | ~2 dias |
| 🔴 **Alta** | [#2310](https://github.com/sipeed/picoclaw/issues/2310) | `Histórico de chat mostra apenas 1-2 mensagens após fechar/reabrir` | channel | ~19 dias |
| 🟡 **Média** | [#2367](https://github.com/sipeed/picoclaw/issues/2367) | `Título da última tela permanece em chinês ao selecionar English` | config (i18n) | ~17 dias |
| 🟡 **Média** | [#2548](https://github.com/sipeed/picoclaw/issues/2548) | `[Error] Multiple authentication credentials received` | provider / config | ~6 dias |
| 🟡 **Média** | [#2081](https://github.com/sipeed/picoclaw/issues/2081) | `Tool feedback preview escapa caracteres especiais como Unicode` | tool | ~26 dias |

*\*Dias desde a criação*

### Bugs resolvidos nas últimas 24h

- **#2550** → Resolvido por [#2599](https://github.com/sipeed/picoclaw/pull/2599): Token de autenticação do Google Antigravity via CLI agora atualiza corretamente a expiração.
- **#2598** → Resolvido/fechado nas últimas 24h: O WebUI voltou a funcionar após upgrade.

**Avaliação de estabilidade:**

A saúde geral é **razoável**, com dois bugs de severidade alta em aberto — ambos relacionados a **persistência de estado** (histórico de chat e regressão pós-upgrade). O volume de PRs de bug fix fechados hoje (3+ bugs resolvidos) sugere uma resposta rápida da equipe. O bug #2310, com 19 dias em aberto e 3 comentários, merece atenção prioritária por tocar na funcionalidade core de sessões de chat.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features abertas

| PR/Issue | Título | Dominínio | Sinal estratégico |
|---|---|---|---|
| [#2217](https://github.com/sipeed/picoclaw/issues/2217) | `[Feature] Dashboard de consumo de tokens para WebUI` | channel (web) | ⚠️ Demanda por observabilidade e controle de custos — indica adoção em ambientes produtivos com múltiplos modelos |
| [#2563](https://github.com/sipeed/picoclaw/pull/2563) | `feat(web): download files on frontend` | channel (web) | 📦 Feature completa em revisão: downloads de arquivos enviados via `send_file` diretamente na UI web |
| [#2535](https://github.com/sipeed/picoclaw/pull/2535) | `feat(commands): add MCP slash commands and tool details` | agent / tool | 🛠️ Ecossistema MCP em expansão; ergonomia de linha de comando melhorada |
| [#2606](https://github.com/sipeed/picoclaw/pull/2606) | `feat: enhance Weixin channel support and configuration` | channel (Weixin) | 🌏 Suporte multi-instância para Weixin; indica foco em mercado chinês |
| [#2607](https://github.com/sipeed/picoclaw/pull/2607) | `feat(feishu): Add group chat trigger and random emoji response` | channel (Feishu) | 🌏 Melhoria de UX社交 em Feishu |
| [#2609](https://github.com/sipeed/picoclaw/pull/2609) | `refactor: support explicit provider field in model list entries` | provider / config | 🔧 Melhoria na API de configuração: provider explícito em entries da model_list |
| [#2610](https://github.com/sipeed/picoclaw/pull/2610) | `ci(release): support releasing from existing tag` | ci | 🏗️ Melhoria no workflow de release: releases a partir de tags existentes |

### Análise de roadmap

Os sinais de direção do projeto convergem para três eixos:

1. **Observabilidade (#2217):** A ausência de um dashboard de consumo de tokens é uma lacuna crítica para usuários em produção. A aceitação dessa issue sinaliza que o projeto está amadurecendo para além do uso em DIY/prototipagem.

2. **Ecosistema de canais (#2606, #2607, #2413):** Investments em Weixin, Feishu e LINE SDK indicam estratégia de diversificação de canais de comunicação, possivelmente em resposta a demandas do mercado asiático.

3. **Arquitetura do agente (#2535, #2585):** A combinação de refatoração do pipeline (loop → agent) e melhoria da ergonomia MCP (#2535) sugere que a equipe está preparando o terreno para capacidades de agente mais sofisticadas.

---

## 7. Resumo de Feedback dos Usuários

### Padrões de dor identificados

| Dor | Manifestação | Severidade |
|---|---|---|
| **Perda de histórico de conversa** | Usuários relatam que após fechar/abrir chat web, apenas 1-2 mensagens são recuperadas. Dados no sistema de arquivos também incompletos (#2310) | 🔴 Alta — impacta fluxo de trabalho real |
| **Regressão pós-upgrade** | Upgrade de 0.2.4 → 0.2.6 quebra WebUI, exigindo intervenção manual (#2598) | 🔴 Alta — erode confiança em atualizações |
| **Caracteres Unicode em preview** | Saída de ferramentas exibe `\u0026`, `\u003e` em vez de `&`, `>` — comandos shell ilegíveis (#2081) | 🟡 Média — UX de

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-04-22

## 1. Panorama do Dia

O IronClaw manteve altíssima atividade nas últimas 24h, com 50 issues e 50 PRs atualizados. O projeto encontra-se em fase de amadurecimento da engine v2, com múltiplos PRs de infraestrutura (flip para default, cost tracking, reliability recording) em paralelo. A release v0.26.0 trouxe sandbox por projeto com rastreamento de custos,标志着 um marco importante para multi-tenancy. Bugs Bash de pré-lançamento continuam gerando issues de QA, especialmente em canais web e Telegram.

---

## 2. Lançamentos

### ironclaw-v0.26.0 (2026-04-21)
**Mudanças Adicionadas:**

| # | Descrição | PRs |
|---|-----------|-----|
| Sandbox por projeto | Isolamento com lifecycle de missões e tracking de custos por projeto | [#2211](https://github.com/nearai/ironclaw/pull/2211), [#2660](https://github.com/nearai/ironclaw/pull/2660) |
| Hot-reload de provider | Recarregamento dinâmico da chain de provedores via settings | [#2673](https://github.com/nearai/ironclaw/pull/2673) |

**Sem breaking changes ou notas de migração nesta release.**

---

## 3. Progresso do Projeto

### PRs Merged/Closed Hoje

| PR | Tamanho | Escopo | Contribuidor | Destaque |
|----|---------|--------|--------------|----------|
| [#2790](https://github.com/nearai/ironclaw/pull/2790) | XS | e2e | core | Fix multi-tenant widget isolation + portfolio nudge recovery |
| [#2391](https://github.com/nearai/ironclaw/pull/2391) | — | OAuth | core | Fix typo `offlin` → `offline` no Google OAuth |
| [#614](https://github.com/nearai/ironclaw/pull/614) | XL | safety | new | **LLM-as-Judge**: avaliação semântica de tool calls antes da execução |

### PRs Abertos de Alto Impacto

| PR | Escopo | Status | Progresso |
|----|--------|--------|----------|
| [#2794](https://github.com/nearai/ironclaw/pull/2794) | tool/builtin | Aberto | Corrige dual source of truth entre ToolRegistry e CapabilityRegistry (v2) |
| [#2812](https://github.com/nearai/ironclaw/pull/2812) | channel/web | Aberto | Impede vazamento de reasoning interno no browser |
| [#2810](https://github.com/nearai/ironclaw/pull/2810) | setup | Aberto | Executa migrations quando onboarding reutiliza database existente |
| [#2807](https://github.com/nearai/ironclaw/pull/2807) | worker | Aberto | Introduz `finish_job` como path único de completude para jobs |
| [#2728](https://github.com/nearai/ironclaw/pull/2728) | cli | Aberto | CLI `migrate` para OpenClaw e Hermes |
| [#2367](https://github.com/nearai/ironclaw/pull/2367) | extensions, auth | Aberto | Unifica auth flows e live canary coverage |
| [#2019](https://github.com/nearai/ironclaw/pull/2019) | channel | Aberto | Channel nativo Matrix com E2EE opcional |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários)

| # | Título | Comentários | Status | Tendência |
|---|--------|-------------|--------|-----------|
| [#2285](https://github.com/nearai/ironclaw/issues/2285) | Web UI: refresh restaura thread errado | 7 | Closed ✅ | Resolvido em #2330 |
| [#2087](https://github.com/nearai/ironclaw/issues/2087) | IronClaw para de responder ao configurar Notion | 4 | Open | Problema recorrente com integrations |
| [#1537](https://github.com/nearai/ironclaw/issues/1537) | WASM credential injection falha em TEE | 4 | Closed ✅ | Corrigido, aguardando QA |
| [#2585](https://github.com/nearai/ironclaw/issues/2585) | Active missions não refletido no contador | 3 | Open | Bug Bash 4/17 |

### Análise de Demandas

**Problemas de Integração (Notion, Telegram, Google):**
- Issues [#2087](https://github.com/nearai/ironclaw/issues/2087), [#2731](https://github.com/nearai/ironclaw/issues/2731), [#773](https://github.com/nearai/ironclaw/issues/773), [#2729](https://github.com/nearai/ironclaw/issues/2729) indicam que integrações de terceiros ainda são ponto de dor
- Google OAuth com app não-verificado (#773) bloqueia adoção por usuários externos

**Epics Estratégicas:**
- [#2767](https://github.com/nearai/ironclaw/issues/2767): Rationalizar tool surfacing no engine v2 — modelo `opencode`-style
- [#2792](https://github.com/nearai/ironclaw/issues/2792): Eliminar state drift entre gateway e frontend
- [#2800](https://github.com/nearai/ironclaw/issues/2800): **Engine v2 default flip** — tracker central com 8 sub-PRs

---

## 5. Bugs e Estabilidade

### P1 — Críticos (ação imediata)

| # | Bug | Escopo | Reportado |
|---|-----|--------|-----------|
| [#2731](https://github.com/nearai/ironclaw/issues/2731) | Telegram renderiza como conversas separadas no Engine | channel/web, channel/wasm | Bug Bash 4/20 |
| [#2732](https://github.com/nearai/ironclaw/issues/2732) | Assistant sugere Brave Search em vez de busca interna | tool/builtin | Bug Bash 4/20 |
| [#2808](https://github.com/nearai/ironclaw/issues/2808) | Stop command falha em parar missão ativa via chat | agent | 2026-04-21 |

### P2 — Importantes (ação em breve)

| # | Bug | Escopo |
|---|-----|--------|
| [#2285](https://github.com/nearai/ironclaw/issues/2285) | Refresh restaura thread incorreto | channel/web |
| [#2585](https://github.com/nearai/ironclaw/issues/2585) | Contador de missões completed inconsistente | channel/web |
| [#2809](https://github.com/nearai/ironclaw/issues/2809) | Criação de projeto resulta em criação de missão | agent |
| [#2729](https://github.com/nearai/ironclaw/issues/2729) | Version mismatch após conectar Google Docs | channel/web |
| [#2730](https://github.com/nearai/ironclaw/issues/2730) | Mensagem duplicada + layout shift após Telegram connect | channel/wasm |

### Padrões Identificados

- **Bugs Bash**: 6 issues do Bug Bash 4/20 mapeadas (P1+P2), indicando sprint de QA ativo
- **Timeout**: Issue [#2540](https://github.com/nearai/ironclaw/issues/2540) (orchestrator timeout 307s) foi closed
- **502 Errors**: Issue [#1994](https://github.com/nearai/ironclaw/issues/1994) (Bad Gateway) closed após investigação

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features em Progresso

| # | Feature | Escopo | Status |
|---|---------|--------|--------|
| [#2791](https://github.com/nearai/ironclaw/issues/2791) | UI de "Report Issue" com estado scrubado | channel/web, safety | Open |
| [#2788](https://github.com/nearai/ironclaw/issues/2788) | Nome implícito de skill condicional | tool/builtin | Open |
| [#2787](https://github.com/nearai/ironclaw/issues/2787) | Contrato: deny message não dispara `user_signals_execution_intent` | agent, safety | Open |
| [#2799](https://github.com/nearai/ironclaw/issues/2799) | Migrar AppEvent String IDs para tipos novos | channel/web | Open |
| [#2813](https://github.com/nearai/ironclaw/issues/2813) | Typed assistant content model para final vs internal tool-use | agent | Open |

### Roadmap Indicado

| Initiative | Evidência |
|------------|-----------|
| **Engine v2 como default** | 8 PRs subindo em paralelo (infraestrutura de flip completa) |
| **Matrix channel nativo** | PR #2019 em revisão há 17 dias |
| **Dashboard TUI avançado** | PR #2343 com múltiplas features (panels, theme, codeblock renderer) |
| **Aliyun support** | PR #1446 em revisão há 32 dias |
| **LLM-as-Judge** | PR #614 merged — segunda camada de segurança via LLM |

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Categoria | Problema | Evidência |
|-----------|----------|-----------|
| **Integrações frágeis** | Notion, Telegram, Google Docs apresentam bugs recorrentes | Issues #2087, #2731, #2729, #773 |
| **UX de auth confusa** | OAuth não verificado no Google bloqueia usuários externos (#773) | Feedback direto |
| **State desync** | UI desvia do backend state sem reconciliação | Epic #2792 |
| **Sandbox/secrets** | Jobs usam secrets do owner, não do criador | Issue #2068 (Critical) |
| **Railway deployment** | Env vars não funcionam no template oficial | Issue #1680 |

### Cenários de Uso Reportados

- **Desenvolvedores self-hosted**: Problemas com Railway (#1680), WASM TEE (#1537)
- **Usuários de integrações**: Gmail, Calendar, Notion, Telegram com falhas de thread/auth
- **Missions-heavy users**: Contadores inconsistentes (#2585), stop command quebrado (#2808)

### Sinais de Satisfação

- Release v0.26.0 com sandbox + cost tracking foi bem recebida (1 dia após, 0 issues relacionadas)
- Bug Bash indica processo de QA ativo e responsivo

---

## 8. Backlog que Merece Atenção

### Issues Antigas Sem Resolution

| # | Criado | Título | Status | Espera |
|---|--------|--------|--------|--------|
| [#773](https://github.com/nearai/ironclaw/issues/773) | 2026-03-09 | GCP verification para Google OAuth | Open | **44 dias** |
| [#1446](https://github.com/nearai/ironclaw/pull/1446) | 2026-03-20 | Aliyun Coding Plan support (PR) | Open | **33 dias** |
| [#2019](https://github.com/nearai/ironclaw/pull/2019) | 2026-04-04 | Native Matrix channel (PR) | Open | **18 dias** |
| [#1680](https://github.com/nearai/ironclaw/issues/1680) | 2026-03-26 | Railway env vars não funcionam | Open | **27 dias** |
| [#2636](https://github.com/nearai/ironclaw/issues/2636) | 2026-04-18 | Skill size limit (max 65KB) | Open | **4 dias** |

### PRs em Review Há Tempo

| # | Título | Desde | Bloqueios |
|---|--------|-------|-----------|
| [#2019](https://github.com/nearai/ironclaw/pull/2019) | Native Matrix channel | 2026-04-04 | Feature importante |
| [#1446](https://github.com/nearai/ironclaw/pull/1446) | Aliyun support | 2026-03-20 | Mercado CN |
| [#2367](https://github.com/nearai/ironclaw/pull/2367) | Auth flows consolidation | 2026-04-12 | Segurança |

### Recomendações

1. **Priorizar #773** — OAuth não-verificado é blocker para aquisição de usuários externos
2. **Review de PRs longos** — Matrix (#2019) e Aliyun (#1446) podem perder momentum
3. **Triage #2636** — Limite de 65KB em skills pode ser muito restritivo para skills complexas

---

*Relatório gerado automaticamente com base em dados do GitHub de 2026-04-22. Todas as métricas refletem atividade das últimas 24h.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório de Projeto — CoPaw / QwenPaw
**Período:** 2026-04-22 | **Versão analisada:** github.com/agentscope-ai/CoPaw

---

## 1. Panorama do dia

O projeto CoPaw/QwenPaw apresenta **alta atividade comunitária** no período analisado: 50 issues e 39 PRs atualizados nas últimas 24h, com 18 PRs fechados/merged e 29 issues fechadas. A recém-lançada **v1.1.3-beta.2** traz correções de build para macOS desktop e atualização do AgentScope para 1.0.19, sinalizando maturidade na estabilização da linha 1.1.x. A comunidade demonstra forte engajamento em features de memória, contexto e canais (MCP, Matrix, SIP), além de bugs críticos de estabilidade em sessões e APIs — indicando um projeto em fase de refinamento pós-maturidade funcional.

---

## 2. Lançamentos

### 🚀 v1.1.3-beta.2
**Tag:** [`v1.1.3-beta.2`](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.3-beta.2) | **PRs contributors:** 2

| PR | Autor | Mudança |
|----|-------|---------|
| [#3620](https://github.com/agentscope-ai/QwenPaw/pull/3620) | @xieyxclack | Version bump para 1.1.3b2 |
| [#3622](https://github.com/agentscope-ai/QwenPaw/pull/3622) | @rayrayraykk | **Fix:** macOS desktop build |

**Notas de migração:** Nenhuma breaking change identificada. Correção pontual de build — usuários de macOS desktop que enfrentavam problemas de inicialização devem atualizar.

---

## 3. Progresso do Projeto

### PRs Merged/Closed em 2026-04-21

| PR | Status | Área | Descrição |
|----|--------|------|-----------|
| [#3631](https://github.com/agentscope-ai/QwenPaw/pull/3631) | ✅ Closed | Console/Plugin | Adiciona auto module registration no sistema de plugins da console |
| [#3649](https://github.com/agentscope-ai/QwenPaw/pull/3649) | ✅ Closed | Channels | Adiciona health check e restart API por canal individual — recuperação sem restart do agent inteiro |
| [#3655](https://github.com/agentscope-ai/QwenPaw/pull/3655) | ✅ Closed | Docs | Documentação Backup & Restore (zh + en) com cobertura de workspaces, settings, skill pool e secrets |
| [#3653](https://github.com/agentscope-ai/QwenPaw/pull/3653) | ✅ Closed | Docs/Roadmap | Atualização do roadmap do projeto |
| [#3654](https://github.com/agentscope-ai/QwenPaw/pull/3654) | ✅ Closed | Console UI | Fix de compatibilidade Ant Design v5 — `showSizeChanger` agora controlado corretamente em tabelas |
| [#3278](https://github.com/agentscope-ai/QwenPaw/pull/3278) | ✅ Closed | Session | **P0 fix:** Recuperação de JSON corrompido em session state files (race condition em writes concorrentes — `JSONDecodeError: Extra data`) |

**Destaque operacional:** O fix P0 em #3278 resolve um problema de disponibilidade crítico que impactava todas as sessões afetadas por corrupção de estado — merge representa ganho significativo de confiabilidade.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento

| Issue | Tipo | Comentários | Link |
|-------|------|-------------|------|
| **#2291** — Help Wanted: Open Tasks | enhancement | **59** | [GitHub](https://github.com/agentscope-ai/QwenPaw/issues/2291) |
| **#3356** — WORKING_DIR aponta para .copaw ao invés de .qwenpaw após upgrade | bug | **24** | [GitHub](https://github.com/agentscope-ai/QwenPaw/issues/3356) |
| **#2613** — 1.0新安装接入模型无法使用 | question | **12** | [GitHub](https://github.com/agentscope-ai/QwenPaw/issues/2613) |
| **#2301** — Sugestões de atualização, /approve button, auto model switching, self-reflection | enhancement | **10** | [GitHub](https://github.com/agentscope-ai/QwenPaw/issues/2301) |

**Análise de demandas:**

- **#2291** é o hub central de contribuições abertas — 59 comentários indicam comunidade ativa e engajada em contribuir código. A organização prioriza de P0→P2.
- **#3356** e **#2613** revelam **dor de migração** entre versões (`.copaw` → `.qwenpaw`) e problemas de primeiro uso com configuração de modelos —，这两个问题都已在4月21日关闭，表明团队积极响应用户问题。
- **#2301** consolida múltiplas sugestões de UX (botão /approve, auto model switch, self-reflection, cross-device sync) — sinaliza que a comunidade deseja um assistente cada vez mais autônomo e integrado.

---

## 5. Bugs e Estabilidade

### Issues de bug reportadas / atualizadas

| Severidade | Issue | Problema | Atualização |
|------------|-------|----------|-------------|
| 🔴 **P0** | [#3564](https://github.com/agentscope-ai/QwenPaw/issues/3564) | Console trava/morre durante uso frequente | OPEN, 2026-04-21 |
| 🔴 **P0** | [#3640](https://github.com/agentscope-ai/QwenPaw/issues/3640) | MCP Client TaskGroup exception causa agent freeze (sem errologado) | OPEN, 2026-04-21 |
| 🔴 **P0** | [#3642](https://github.com/agentscope-ai/QwenPaw/issues/3642) | MCP Client Console freeze / input unresponsive | OPEN, 2026-04-21 |
| 🟡 **P1** | [#3489](https://github.com/agentscope-ai/QwenPaw/issues/3489) | Anthropic-compatible API 400 BadRequestError (message format inválido) | OPEN, 2026-04-21 |
| 🟡 **P1** | [#2343](https://github.com/agentscope-ai/QwenPaw/issues/2343) | Embedding carregado bloqueia LLM (embedding funcional isoladamente) | CLOSED, 2026-04-21 |
| 🟡 **P1** | [#3468](https://github.com/agentscope-ai/QwenPaw/issues/3468) | Console session freeze, conteúdo some ao refresh | OPEN, 2026-04-21 |
| 🟡 **P1** | [#3040](https://github.com/agentscope-ai/QwenPaw/issues/3040) | Context compression não pode ser cancelada — UI trava | OPEN, 2026-04-07 |
| 🟢 **P2** | [#3435](https://github.com/agentscope-ai/QwenPaw/issues/3435) | Download URL duplicada (`/api/files/preview/api/files/preview`) | CLOSED, 2026-04-21 |
| 🟢 **P2** | [#3421](https://github.com/agentscope-ai/QwenPaw/issues/3421) | Figure preview perdido após tab switch no chat | CLOSED, 2026-04-21 |
| 🟢 **P2** | [#3651](https://github.com/agentscope-ai/QwenPaw/issues/3651) | Selector de paginação "XX条/页" não funcional | CLOSED, 2026-04-21 |

**Alerta de estabilidade:** MCP Client apresenta **3 issues P0 independentes** reportadas no mesmo dia relacionadas a freezes e TaskGroup exceptions. O componente MCP parece ter regressões críticas no estado atual do branch 1.1.x. A equipe precisa priorizar investigação unificada.

---

## 6. Pedidos de Features e Sinais de Roadmap

### PRs de feature em revisão (Under Review)

| PR | Área | Feature | Link |
|----|------|---------|------|
| **#3548** | Memory/Context | Rebuild completo do módulo de memória de longo prazo — interface `prompt + tools`, compatibilidade com As2.0 e backward com Reme legacy | [PR #3548](https://github.com/agentscope-ai/QwenPaw/pull/3548) |
| **#3117** | Skills | Semantic skill routing via embedding-based retrieval (top-k skills por query) | [PR #3117](https://github.com/agentscope-ai/QwenPaw/pull/3117) |
| **#3599** | UI/Agents | Per-agent model assignment na UI de settings (Provider → Model cascata) | [PR #3599](https://github.com/agentscope-ai/QwenPaw/pull/3599) |
| **#3449** | Channels | SIP voice channel com pyVoIP/LiveKit dual-mode, STT/TTS streaming | [PR #3449](https://github.com/agentscope-ai/QwenPaw/pull/3449) |
| **#3574** | Chat/Voice | Whisper-based transcription取代 Web Speech API para input de voz | [PR #3574](https://github.com/agentscope-ai/QwenPaw/pull/3574) |
| **#3346** | Session | File operation rollback (recuperação de arquivos deletados acidentalmente) | [PR #3346](https://github.com/agentscope-ai/QwenPaw/pull/3346) |
| **#3663** | Memory/Dream | Dream Log Output — registra logs do consolidation da memória | [Issue #3663](https://github.com/agentscope-ai/QwenPaw/issues/3663) |

**Sinais de roadmap:**
- **Módulo de memória** é a frente mais ativa (rebuild em #3548 + Dream Log em #3663) — memória de longo prazo está sendo redesenhada
- **Voice/SIP** avança com canal dedicado em #3449 e Whisper transcription em #3574
- **Skills routing** semântico em #3117 responde à demanda de contexto token efficiency levantada em #2301
- **Per-agent model assignment** fecha lacuna de UX para multi-modelo por agente

---

## 7. Resumo de Feedback dos Usuários

### Dores recorrentes identificadas

| Categoria | Descrição | Frequência |
|-----------|-----------|------------|
| **Migração v0→v1** | WORKING_DIR persiste em `.copaw` após upgrade limpo para `.qwenpaw` — usuários perdem workspaces | Alta (Issue #3356, 24 comentários) |
| **MCP instabilidade** | Freeze de agents ao ativar MCP Client — sem logs de erro claros | Crítica (3 issues P0 simultâneas) |
| **Context compaction** | Compressão de contexto falha frequentemente e não pode ser cancelada — sessão fica travada | Frequente (Issues #2047, #2356, #3040) |
| **File tool truncamento** | Leitura de arquivos é truncada, não auto-continua | Reportado (Issue #2500) |
| **Embedding + LLM** | Carregar embedding bloqueia LLM após uso — relação não resuelta | Relatado (Issue #2343) |
| **Memory growth** | MEMORY.md cresce sem gestão eficiente — performance degrada com uso intenso | Alto uso (Issue #2289) |
| **Multi-agent UX** | Trocar entre agentes requer abrir múltiplas páginas — interação poor | Feature request (Issue #2281) |

### Cenários de uso emergentes
- **Multi-provider** (MiniMax, Zhipu, Meituan) + **multimodal** (visión) demandados por usuários que consolidam múltiplos provedores
- **Cross-device sync** (web → QQ/WeChat mobile) solicitado para continuidade de sessões
- **Self-improvement loop** (auto-reflexão, self-evolution) desejado para assistentes cada vez mais personalizados

---

## 8. Backlog que Merece Atenção

### Issues sem resposta ou com resposta pendente

| Issue | Idade | Estado | Motivo da atenção |
|-------|-------|--------|-------------------|
| **#1881** — "提问后没有回复，AI已回复" | ~32 dias (2026-03-19) | OPEN | Sem resposta da equipe — usuário reporta silêncio após AI responder (pode indicar bug de renderização de eventos SSE) |
| **#3577** — Dependências do `browser_visible` skill | 3 dias | OPEN | Pergunta de onboarding sem resposta — onboarding quebrado |
| **#3613** — `send_file_to_user` skill quebra Anthropic API (tool return incluir `file`) | 2 dias | OPEN | Incompatibilidade entre skill e provider — pode ser breaking para usuários Anthropic |
| **#3663** — Dream Log Output | 1 dia | OPEN | Feature request pode competir com PR #3548 (memory rebuild) — precisa alinhamento de roadmap |

### PRs esperando review há mais tempo

| PR | Idade | Estado | Motivo |
|----|-------|--------|--------|
| **#3117** — Semantic skill routing | ~13 dias | Open, need discussions | Depende de alinhamento arquitetural sobre embedding strategy |
| **#3346** — File operation rollback | ~9 dias | Open, Under Review | Task #6 do roadmap oficial (#2291) |

**Recomendação:** A equipe deve priorize triagem de #1881 (bug silencioso) e #3613 (breaking com Anthropic). O PR #3548 (memory rebuild) está em revisão há 4 dias — dado seu impacto arquitetural, merece atenção acelerada para evitar concorrência com #3663.

---

*Relatório gerado em 2026-04-22 com base em dados do GitHub de CoPaw/QwenPaw. Métricas: 50 issues, 39 PRs atualizados nas últimas 24h.*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório de Projeto — ZeroClaw
**Data de emissão:** 2026-04-22 | **Período analisado:** últimas 24h

---

## 1. Panorama do Dia

ZeroClaw apresenta alta atividade comunitária, com 25 issues e 50 PRs atualizados no período, sinalizando um momento de intenso desenvolvimento. Três PRs de peso foram fechados (sandbox detection, OpenRouter extra_body, TOML prompts), enquanto 31 pull requests seguem em revisão, incluindo um rewrite completo do onboard wizard e correções de segurança no rand/picomatch. Nenhuma release foi publicada, e o projeto mantém foco em estabilidade (vários bugs de severidade S0-S1 resolvidos) e extensibilidade de canais/provedores.

---

## 2. Lançamentos

Nenhuma release publicada nas últimas 24h.

> **Nota:** O projeto não emitiu tag de versão no período. A última atividade concentra-se em kontribusiçãos pendentes de merge.

---

## 3. Progresso do Projeto

### PRs fechados/merged recentemente

| PR | Descrição | Impacto |
|----|-----------|---------|
| [#5904](https://github.com/zeroclaw-labs/zeroclaw/pull/5904) | `runtime.kind = "native"` agora é respeitado na auto-detecção de sandbox | Corrige comportamento contraditório — usuários que declaram intenção de execução nativa ainda tinham Docker selecionado |
| [#5623](https://github.com/zeroclaw-labs/zeroclaw/pull/5623) | OpenRouter: `extra_body` passthrough genérico | Resolve suporte a parâmetros arbitrários da API OpenRouter; fecha #5619 e #4646 |
| [#5972](https://github.com/zeroclaw-labs/zeroclaw/pull/5972) | Permite `prompts` dentro da seção `[skill]` no TOML | Skill metadata que antes era silenciosamente descartada agora é corretamente parseada |

### Destaques em aberto (review ativo)

- **[#5960](https://github.com/zeroclaw-labs/zeroclaw/pull/5960)** — Rewrite completo do onboard wizard (~8.5k → schema-driven orchestrator). Impacto arquitetural alto.
- **[#5971](https://github.com/zeroclaw-labs/zeroclaw/pull/5971)** — Patches de segurança: `rand` 0.9.4, `picomatch` 4.0.4 (ReDoS corrigido).
- **[#5705](https://github.com/zeroclaw-labs/zeroclaw/pull/5705)** — Session abort endpoint + streaming persistence incremental. Risk: high.

---

## 4. Temas Quentes da Comunidade

### Issues com maior volume de interação

| Issue | Tipo | Comentários | Síntese da demanda |
|-------|------|-------------|-------------------|
| [#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) | bug | 17 | Web dashboard indisponível persiste — afetando tanto UI web quanto app desktop Tauri |
| [#5937](https://github.com/zeroclaw-labs/zeroclaw/issues/5937) | enhancement | 4 | Refatoração do módulo providers: unificar reqwest builder e eliminar duplicação de código |
| [#5741](https://github.com/zeroclaw-labs/zeroclaw/issues/5741) | enhancement | 4 | Canal interativo de aprovação para operações medium/high-risk — fluxo atual auto-nega |
| [#5947](https://github.com/zeroclaw-labs/zeroclaw/issues/5947) | enhancement | 3 | **Merge blocker** — Schema v3 com migração coordenada de campos breaking (bump `CURRENT_SCHEMA_VERSION`) |

### Análise

A comunidade demonstra preocupação recorrente com o **web dashboard** (duas issues abertas sobre indisponibilidade em Docker e Tauri). O tema de **schema migrations** também gera mobilização, dado o status explícito de merge blocker. A refatoração de providers (#5937) refleja demanda por manutenção de longo prazo.

---

## 5. Bugs e Estabilidade

### Por severidade

**S0 — Risco de perda de dados / segurança:**
- [#5967](https://github.com/zeroclaw-labs/zeroclaw/issues/5967) — Linux Pre-built Installer compila da fonte inesperadamente (máquinas pequenas sobrecarregadas)
- [#5672](https://github.com/zeroclaw-labs/zeroclaw/issues/5672) — **[RESOLVIDO]** Feishu respondia mesmo com `mention_only` habilitado
- [#5847](https://github.com/zeroclaw-labs/zeroclaw/issues/5847) — Documentação faltante para `gateway.web_dist_dir`

**S1 — Workflow bloqueado:**
- [#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) — **[RESOLVIDO]** Web dashboard não disponível (Tauri + Web UI)
- [#5591](https://github.com/zeroclaw-labs/zeroclaw/issues/5591) — **[RESOLVIDO]** "Denied by user" em supervised mode via Telegram
- [#5962](https://github.com/zeroclaw-labs/zeroclaw/issues/5962) — Ollama Provider falha quando tools são necessárias
- [#5961](https://github.com/zeroclaw-labs/zeroclaw/issues/5961) — zeroclaw-desktop build falha no Windows 11
- [#5961](https://github.com/zeroclaw-labs/zeroclaw/issues/5961) — ACP mode não segue especificação de prompt (agentic.nvim)

**S2 — Comportamento degradado:**
- [#5670](https://github.com/zeroclaw-labs/zeroclaw/issues/5670) — **[RESOLVIDO]** Groq provider erro 400
- [#5634](https://github.com/zeroclaw-labs/zeroclaw/issues/5634) — **[RESOLVIDO]** Session persistence ignorado no web dashboard
- [#5948](https://github.com/zeroclaw-labs/zeroclaw/issues/5948) — ACP mode logs não-JSON causam erros no editor

**S3 — Issue menor:**
- [#5959](https://github.com/zeroclaw-labs/zeroclaw/issues/5959) — Web dashboard indisponível no Docker image (web/dist não copiado)

### Issues internos corrigidos (shaun0927)
- [#5823](https://github.com/zeroclaw-labs/zeroclaw/issues/5823) — `prune_history` Phase 1 colapsava tool groups indevidamente
- [#5822](https://github.com/zeroclaw-labs/zeroclaw/issues/5822) — OpenRouter stream_chat vazava conexão HTTP
- [#5824](https://github.com/zeroclaw-labs/zeroclaw/issues/5824) — `cron_run` reportava status=ok em silent drop

> **Síntese:** S0-S1 bugs tiveram resolução expressiva nas últimas 24h. S2 degradado e S3 menor permanecem em aberto.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features abertas

| Issue | Escopo | Observação |
|-------|--------|-----------|
| [#5951](https://github.com/zeroclaw-labs/zeroclaw/issues/5951) | onboard | Rewrites `onboard/wizard.rs` (8.5k LOC) para orchestrator schema-driven, idempotente — já com PR #5960 |
| [#5947](https://github.com/zeroclaw-labs/zeroclaw/issues/5947) | schema | Bump schema para v3 com migração batch de breaking changes — merge blocker |
| [#5937](https://github.com/zeroclaw-labs/zeroclaw/issues/5937) | providers | Unificar arquitetura de providers + reqwest client management |
| [#5899](https://github.com/zeroclaw-labs/zeroclaw/issues/5899) | tools | Expor session ID atual para ferramentas do agente |
| [#5956](https://github.com/zeroclaw-labs/zeroclaw/issues/5956) | docs | Documentar escopo de skill audit (checks estruturais, segurança de comandos no shell policy) |
| [#5979](https://github.com/zeroclaw-labs/zeroclaw/pull/5979) | channels | Opt-out reply-intent precheck + classifier mais leve |
| [#5705](https://github.com/zeroclaw-labs/zeroclaw/pull/5705) | gateway | Session abort endpoint + streaming persistence |

### Sinais de roadmap implícitos
- **Infraestrutura de channels:** Telegram commands auto-update, Matrix como canal de delivery, Feishu compliance
- **Provider extensibilidade:** OpenRouter routing, Ollama com tools, Gemini via OpenRouter
- **Estabilidade de schema:** Migração v3 sinaliza maturidade do config system

---

## 7. Resumo de Feedback dos Usuários

| Tema | Feedback recorrente |
|------|---------------------|
| **Web dashboard** | Usuários reclamam que dashboard não funciona após install padrão — tanto em Docker quanto no Tauri app. Mensagem "Build it with: cd web && npm ci && npm run build" aparece mesmo em setups oficiais. |
| **Canais de mensageria** | Telegram funciona bem mas precisa de auto-update de comandos. Feishu tem bug de mention_only. Matrix não entrega cron output. |
| **Onboarding** | Wizard de 8.5k LOC é difícil de manter; demanda por refatoração evidenciada. Usuários com config existente enfrentam comportamento não-idempotente. |
| **Providers** | OpenRouter缺少flexibilidade (sem `extra_body`). Ollama falha com tools. Groq retornava 400. |
| **Docker/sandbox** | Usuários Linux com máquinas pequenas reclamam de build from source com pre-built installer. Workspace bind-mout ausente no DockerSandbox. |

> **Tom geral:** Satisfação com funcionalidades core, frustração com setup inicial (dashboard, onboarding) e edge cases de canais/provedores.

---

## 8. Backlog que Merece Atenção

| Issue/PR | Status | Motivo da atenção | Tempo em aberto |
|----------|--------|------------------|-----------------|
| [#3361](https://github.com/zeroclaw-labs/zeroclaw/issues/3361) | closed | Matrix como delivery channel para cron — demandado desde 2026-03-12, agora resuelto | ~40 dias |
| [#4646](https://github.com/zeroclaw-labs/zeroclaw/issues/4646) | closed | Documentação faltante sobre stream=true com providers custom — solucionado por #5623 | ~27 dias |
| [#5372](https://github.com/zeroclaw-labs/zeroclaw/pull/5372) | open | Truncar payloads memory oversized no gateway — sem atenção de maintainer, precisa review | ~16 dias |
| [#5705](https://github.com/zeroclaw-labs/zeroclaw/pull/5705) | open | Session abort endpoint — risk: high, needs-maintainer-review, sem updates recentes | ~9 dias |
| [#5788](https://github.com/zeroclaw-labs/zeroclaw/pull/5788) | open | RFC: Mozilla Fluent para i18n — discussão arquitetural de longo prazo, sem momentum aparente | ~6 dias |

### Priorização recomendada

1. **CRÍTICO:** [#5967](https://github.com/zeroclaw-labs/zeroclaw/issues/5967) (S0 — installer compila da fonte) e [#5961](https://github.com/zeroclaw-labs/zeroclaw/issues/5961) (S1 — desktop build falha)
2. **ALTA:** [#5959](https://github.com/zeroclaw-labs/zeroclaw/issues/5959) (web dashboard Docker) e [#5847](https://github.com/zeroclaw-labs/zeroclaw/issues/5847) (docs web_dist_dir)
3. **MÉDIA:** [#5899](https://github.com/zeroclaw-labs/zeroclaw/issues/5899) (session ID exposure) e [#5956](https://github.com/zeroclaw-labs/zeroclaw/issues/5956) (skill audit docs)

---

*Relatório gerado automaticamente com base em dados do GitHub. Métricas de comunidade sujeitas a atrasos de sincronização.*

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*