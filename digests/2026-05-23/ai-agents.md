# Resumo diário do ecossistema de agentes de IA 2026-05-23

> Issues: 0 | PRs: 2 | Projetos cobertos: 7 | Gerado em: 2026-05-22 21:05 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório do Projeto NullClaw — 2026-05-23

---

## 1. Panorama do Dia

O projeto NullClaw manteve atividade limitada nas últimas 24 horas, sem novos commits, issues ou releases registradas. Duas pull requests permanecem abertas (#891 e #878), ambas de responsabilidade do mantenedor principal `vernonstinebaker`, indicando foco em refinamentos de estabilidade e compatibilidade POSIX. O repositório encontra-se em estado de manutenção ativa, com pipeline de PRs em andamento mas sem movimentação recente de merge ou fechamento.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24 horas.**

O projeto não publicou novas versões desde o último período analisado. Recomenda-se monitorar as PRs abertas para identificar quando os patches atingirão status de merge e potencialmente comporão uma próxima release.

---

## 3. Progresso do Projeto

Nenhuma PR foi mergeada ou fechada nas últimas 24 horas. Contudo, as seguintes PRs permanecem em revisão ativa:

### PR #891 — `fix(providers): preserve curl probe transport failures`
- **Status:** OPEN
- **Autor:** vernonstinebaker
- **Atualizado:** 2026-05-22
- **Resumo:** Preserva erros de transporte do curl no path compatível com OpenAI usado em health probes do provedor, retornando diretamente erros específicos (`CurlDnsError`, `CurlConnectError`, `CurlTimeout`, `CurlTlsError`, `CurlReadError`, `CurlWriteError`, `CurlWaitError`, `CurlFailed`) em vez de colapsá-los.
- **Impacto:** Melhora a granularidade de diagnóstico em falhas de conexão, permitindo melhor identificação de problemas de rede e TLS.

### PR #878 — `fix(compat): use nanosleep on POSIX in thread.sleep to actually suspend OS thread`
- **Status:** OPEN
- **Autor:** vernonstinebaker
- **Atualizado:** 2026-05-22
- **Resumo:** Substitui `std_compat.thread.sleep()` por `nanosleep` real do POSIX, abandonando o cooperative yield do `std.Io.sleep()` sob `std.Io.Threaded`. Mantém o path baseado em scheduler para Windows/WASI.
- **Impacto:** Correção de comportamento de thread que afeta diretamente a precisão de sleeping em ambientes Unix-like, relevante para workloads que dependem de timing preciso.

**Link:** [github.com/nullclaw/nullclaw/pulls](https://github.com/nullclaw/nullclaw/pulls)

---

## 4. Temas Quentes da Comunidade

**Nenhuma issue ou PR com comentários ou reações registradas nas últimas 24 horas.**

As duas PRs abertas (#891 e #878) não apresentam contagem de comentários ou thumbs-up, sugerindo ausência de debate comunitário significativo no período. O projeto aparenta ter baixa participação externa, com contribuições centralizadas no mantenedor principal.

---

## 5. Bugs e Estabilidade

**Nenhum bug reportado nas últimas 24 horas.**

A ausência de issues abertas ou fechadas indica estabilidade no período imediato. As PRs em aberto sugerem foco em correções de comportamento (nanosleep) e precisão de erro (transport failures), não em correções de crash ou regressões críticas.

---

## 6. Pedidos de Features e Sinais de Roadmap

**Nenhuma issue de feature request registrada nas últimas 24 horas.**

O estado atual do repositório não revela sinais claros de roadmap. As PRs em aberto sugerem que a direção imediata envolve:
- **Melhoria de observabilidade:** Tratamento granular de erros de rede/TLS
- **Compatibilidade POSIX aprimorada:** Implementação nativa de `nanosleep`

**Link:** [github.com/nullclaw/nullclaw/issues](https://github.com/nullclaw/nullclaw/issues)

---

## 7. Resumo de Feedback dos Usuários

**Sem dados de feedback registrados nas últimas 24 horas.**

Não há issues, comentários ou interações de usuários que permitam extrair dores ou cenários de uso recentes. A análise fica limitada ao escopo técnico das PRs em aberto.

---

## 8. Backlog que Merece Atenção

| # | Tipo | Título | Status | Atualizado | Observação |
|---|------|--------|--------|------------|------------|
| #891 | PR | preserve curl probe transport failures | OPEN | 2026-05-22 | Sem revisão externa; aguardando merge |
| #878 | PR | use nanosleep on POSIX in thread.sleep | OPEN | 2026-05-22 | Sem revisão externa; aguardando merge |

**Recomendação:** Ambas as PRs estão abertas há 18-23 dias sem movimentação visível de reviewers externos. Recomenda-se acionar processo de code review ou integração contínua para validar os patches e avanzar o pipeline de releases.

**Link:** [github.com/nullclaw/nullclaw/pulls?q=is%3Apr+is%3Aopen+sorted%3Aupdated-desc](https://github.com/nullclaw/nullclaw/pulls?q=is%3Apr+is%3Aopen+sorted%3Aupdated-desc)

---

*Relatório gerado automaticamente com base em dados do GitHub de 2026-05-23. Para atualizações em tempo real, consulte [github.com/nullclaw/nullclaw](https://github.com/nullclaw/nullclaw).*

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo do Ecossistema de Agentes de IA Open Source

**Data:** 2026-05-23 | **Projetos analisados:** 7 | **Metodologia:** Aggregação de métricas GitHub 24h

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **duas velocidades distintas** em 23 de maio de 2026. Por um lado, projetos maduros como **ZeroClaw (47 PRs/24h)** e **Hermes Agent (50 PRs + 50 issues/24h)** operam em ritmo de alta intensidade, evidenciando bases comunitárias activas e investimento contínuo. Por outro, **NullClaw** encontra-se em modo de manutenção passiva, sem atividade de código visível, indicando possível abandono ou transição de mantenedor. A média de atividade entre os 7 projetos revela um ecossistema saudável com **~25 PRs e ~24 issues processados por dia**, impulsionado por temas convergentes: estabilização de canais de mensageria, expansão de provedores de IA, e introdução de interfaces TUI. A taxa de resolução de bugs críticos é elevada (2-3 bugs críticos resolvidos por dia nos projetos mais ativos), sugerindo maturidade nos processos de triagem e code review.

---

## 2. Comparação de Atividade

| Projeto | Issues Ativas | Issues Fechadas (24h) | PRs Abertos | PRs Merged (24h) | Releases (24h) | Avaliação Saúde |
|---------|---------------|------------------------|-------------|------------------|----------------|-----------------|
| **ZeroClaw** | 28 | — | — | — | 0 | 🟢 Alta atividade + foco |
| **Hermes Agent** | 47 | 3 | 34 | 16 | 0 | 🟡 Alto volume + acúmulo |
| **IronClaw** | 20 | 7 | 30 | 20 | 0 | ⚠️ Ativo + falha CI |
| **CoPaw** | 17 | 7 | 12 | 10 | 0 | 🟢 Bom equilíbrio |
| **NanoBot** | 4 | 3 | 7 | 12 | 0 | 🟢 Muito ativo |
| **PicoClaw** | — | — | 7 | 12 | 1 nightly | 🟢 Muito ativo |
| **NullClaw** | 0 | 0 | 2 | 0 | 0 | 🔴 Manutenção |

**Observações críticas:**
- **ZeroClaw** lidera em volume absoluto de PRs atualizados (47), com 4 bugs S1 abertos exigindo atenção imediata
- **Hermes Agent** apresenta o maior desequilíbrio (47 abertas vs 3 fechadas), sinalizando possível gargalo de triagem
- **NullClaw** é o único projeto sem atividade registável, indicando possível abandono ou reestruturação
- **PicoClaw** é o único projeto com release formal (nightly v0.2.8), demonstrando disciplina de entrega contínua

---

## 3. Posicionamento do Projeto Principal

### Análise por Tier

**Tier 1 — Líderes de Volume (ZeroClaw, Hermes Agent, IronClaw)**
Estes três projetos dominam em volume de contribuições, com 100+ artefatos (issues + PRs) processados diariamente. **ZeroClaw** destaca-se pela amplitude de canais suportados (WhatsApp, Telegram, Slack, Discord, Matrix) e pelo foco em governança comunitária (RFC #6808). **Hermes Agent** apresenta a maior diversificação de integrações (Claude CLI, Google Workspace multi-conta) e investe pesadamente em segurança e isolamento. **IronClaw** distingue-se pela arquitetura **Reborn** (M1-M10 lanes) e pela sofisticação técnica (Rust + SQLite para state management).

**Tier 2 — Especialistas de Domínio (NanoBot, PicoClaw, CoPaw)**
Estes projetos apresentam ciclos de desenvolvimento mais focados. **NanoBot** concentra-se em provedores de geração de imagem (OpenAI, Codex, Ollama) e CLI Apps. **PicoClaw** prioriza estabilidade de canais (Matrix+Telegram) e comunicação agent-to-agent. **CoPaw** demonstra profundidade em localization (zh-CN, zh-TW, multi-idioma) e integração com ecossistemas asiáticos (WeChat, DingTalk).

**Tier 3 — Manutenção (NullClaw)**
Com apenas 2 PRs em aberto e zero atividade de código, NullClaw encontra-se em estado de manutenção mínima. As PRs abertas (#891, #878) aguardam merge há 18-23 dias sem revisão externa, sugerindo centralização excessiva de ownership no mantenedor principal `vernonstinebaker`.

### Diferenças Técnicas Arquiteturais

| Dimensão | ZeroClaw | Hermes Agent | IronClaw | NanoBot |
|----------|----------|--------------|----------|--------|
| **Linguagem principal** | Go | Python | Rust | Python |
| **Paradigma** | CLI-first | Agent-centric | Multi-tenant | Plugin-based |
| **Modelo de estado** | SQLite + Unix socket | PostgreSQL | SQLite (crane) | JSON files |
| **Estratégia de release** | Continuous nightly | Tag-based | Tag-based | Rolling |
| **Canais prioritários** | Multi-canal (6+) | Claude CLI + Google | WebUI v2 | CLI + WebUI |
| **Diferenciação** | ACP protocol | Trusted execution | Reborn architecture | Image gen providers |

---

## 4. Focos Técnicos Compartilhados

### 4.1 Estabilização de Canais de Mensageria
Pelo menos **5 projetos** enfrentam problemas similares com integrações de plataforma:

- **WhatsApp**: Bugs de QR code (ZeroClaw #6847), problemas de delivery (CoPaw #4521)
- **Telegram**: Topic binding após context compression (Hermes Agent #20470), vision provider ignorado (ZeroClaw #6841), timestamps por mensagem (PicoClaw #2788)
- **Matrix**: allow_from filter quebrado (PicoClaw #2815, #2816), sender identity não injetada

**Implicação:** A padronização de integrações multi-canal permanece como desafio transversal. Recomenda-se exploração de middlewares partilhados ou adoption de protocolos como o ACP (ZeroClaw) que abstractizam diferenças entre plataformas.

### 4.2 Memória e Contexto de Longo Prazo
Três projetos demonstram foco em gestão de contexto:

- **NanoBot** (#3952): MECE memory consolidation para reduzir duplicação em MEMORY.md
- **NanoBot** (#3846): Manter skill content em multi-turn sem reload
- **CoPaw** (#4620): Chat history disappeared — perda de dados
- **Hermes Agent** (#25839): Context compression gerando loops com Telegram

**Implicação:** A gestão de memória histórica é um diferenciador competitivo. Projetos que resolverem este problema de forma confiável (semperda, sem bloat, sem latência) conquistarão vantagem significativa.

### 4.3 Provedores de IA — Diversificação
A expansão de provedores é tema unificador:

| Projeto | Provedores Recentes |
|---------|---------------------|
| NanoBot | OpenAI image gen, Codex, Ollama image gen |
| ZeroClaw | Jina AI web_search (10M req gratuitas) |
| PicoClaw | DeepSeek thinking fields, OpenAI-compatible path |
| Hermes Agent | OpenCode Zen provider, Claude CLI integration |
| IronClaw | Google OAuth (Calendar, Gmail) |

**Implicação:** A guerra por provedores sugere commoditização de modelos base. O diferenciador está na qualidade das integrações (auth, fallback, rate limiting) e não na quantidade de opções.

### 4.4 Segurança — Vulnerabilidades Reveladas
Dois projetos divulgaram fixes de segurança:

- **NanoBot** (#3928): SSRF em web_fetch via redirect não validado — corrigido com validação de targets
- **PicoClaw** (#2815): allow_from filter inoperante no Matrix — potencialmente permitia acesso não autorizado
- **Hermes Agent** (#25839): Sistema impersonando usuário para modificar skills sem consentimento

**Implicação:** A superfície de ataque em agentes AI expande-se com cada feature nova. Investimento em security review automatizado (Tirith pre-exec scanner em PicoClaw #2877) é tendência emergente.

---

## 5. Análise de Diferenciação

### 5.1 Por Público-Alvo

| Segmento | Projetos Dominantes | Características |
|----------|--------------------|------------------|
| **Enterprise/Multi-tenant** | IronClaw, Hermes Agent | OAuth, isolation, cloud sync, compliance |
| **Developers/Power Users** | ZeroClaw, PicoClaw | TUI, Unix socket, plugin architecture |
| **Produtividade Pessoal** | NanoBot, CoPaw | Multi-canal leve, CLI apps, cron triggers |
| **Mercados Verticais (CHN)** | CoPaw | WeChat, DingTalk, Dingding integration |

### 5.2 Por Arquitetura Técnica

**ZeroClaw — Protocol-Centric**
Foco em ACP (Agent Communication Protocol) como camada de interoperabilidade. A TUI (#6823-#6826) visa separar a experiência do daemon subjacente, permitindo deployment headless/cloud-hosted. Diferencia-se pela extensão de protocolo para diff/file-proposal (#6820).

**IronClaw — Architecture-First**
A abordagem Reborn (#3611-#3898) segmenta o sistema em lanes funcionais (M1-M10), permitindo desenvolvimento paralelo sem acoplamento. O crate `ironclaw_auth` (#3865) centraliza credenciais. Diferencia-se pela tipagem forte (schema `WebChatV2EventFrame`) e SQLite-backed job state.

**NanoBot — Plugin-Centric**
CLI-Anything registry (#3963) permite instalação de apps externos sem fork. Diferencia-se pela estratégia lean (weather skill como example #3958) e BM25-lite skill router (#3865) para compressão de system prompt em ~60%.

**PicoClaw — Channel-Stable**
Prioriza canais de mensageria sobre funcionalidades de agente. Diferencia-se pelo agente-to-agente communication (#2929) e Tirith scanner (#2877). A feature de per-message timestamps (#2788) atende necessidades de debugging.

**CoPaw — Localization-First**
Suporte nativo a 5+ idiomas na WebUI (#3964, #3962) e integrações profundas com ecossistema corporativo chinês. Diferencia-se pelo Tauri desktop app (#3813) e DataPaw plugin (#4622).

**Hermes Agent — Integration-Heavy**
Integrações amplas com Claude CLI, Google Workspace multi-conta (#15602, 9 👍), Discord, Telegram. Diferencia-se pela Trusted Browser Operator MCP (#30600) e glassmorphism UI (#30595).

### 5.3 Por Estratégia de Crescimento

- **ZeroClaw**: Governança + comunidade — RFC #6808 para automação de board
- **IronClaw**: Plataforma enterprise — Google Extensions (6 fases simultâneas)
- **NanoBot**: Ecossistema de plugins — CLI Apps registry
- **CoPaw**: Mobile-first — Responsive WebUI (#4635), Tauri desktop
- **Hermes Agent**: Integrações horizontais — máximo de plataformas suportadas

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração (PRs Merged/24h)

```
ZeroClaw        ████████████████████  (estimado 15-20)
IronClaw        ██████████████████░░  20
Hermes Agent    ████████████████░░░░  16
NanoBot         █████████████░░░░░░░  12
PicoClaw        █████████████░░░░░░░  12
CoPaw           ██████████░░░░░░░░░░  10
NullClaw        ░░░░░░░░░░░░░░░░░░░  0
```

### 6.2 Taxa de Resolução de Bugs Críticos

| Projeto | Bugs Críticos Resolvidos (24h) | Taxa |
|---------|-------------------------------|------|
| NanoBot | 2 (WebUI conversation close, image 400) + 1 security | 🟢 100% |
| PicoClaw | 2 (Matrix allow_from, sender identity) | 🟢 100% |
| CoPaw | 1 (Gemini ValidationError) | 🟢 100% |
| Hermes Agent | 0 P1 resolvida em 24h | 🔴 Críticos acumulando |
| ZeroClaw | 1 (Windows shell output) | 🟡 Parcial |

### 6.3 Qualidade de Processos

**Projetos com governance madura:**
- **ZeroClaw**: RFC documentado (#6808), board automation proposta, 5 PRs aguardando autor-action
- **IronClaw**: Arquitetura documentada em lanes, PR phasestracked, E2E tests mandatory

**Projetos com dívida processual:**
- **Hermes Agent**: 47 issues abertas vs 3 fechadas — desequilíbrio de triagem
- **NullClaw**: 0 code review externo em PRs abertas há 18-23 dias
- **CoPaw**: Issue #3984 (orphan messages) sem assign há 22 dias

### 6.4 Engajamento Comunitário (Comentários + Reactions)

| Projeto | Issue de Maior Engajamento | Engajamento Total |
|---------|----------------------------|-------------------|
| Hermes Agent | #7237 (Response truncated) | 37 (33 comments + 4 👍) |
| NanoBot | #3884 (WebUI conversation close) | 6 comments |
| CoPaw | #4620 (Chat history disappeared) | 12 comments |
| ZeroClaw | #6808 (RFC Work Lanes) | 4 comments |
| PicoClaw | #2625 (WhatsApp ARM builds) | 7 (6 comments + 1 👍) |

**Observação:** Hermes Agent demonstra o ecossistema mais engajado em volume absoluto, mas a concentração de issues sem resolução indica gargalo de mantenedor.

---

## 7. Sinais de Tendência

### 7.1 TUI como Diferenciador de Power Users
Três projetos investem simultaneamente em interfaces de terminal:

- **ZeroClaw** (#6823-#6826): Tracker TUI com Ratatui, Unix socket, JSON-RPC 2.0
- **CoPaw** (#3813): Tauri 2.x desktop app
- **PicoClaw** (#2788): Per-message timestamps para debugging TUI

**Sinal:** A experiência de terminal está a evoluir de raw output para interfaces rich-client com streaming, theming e keybindings customizáveis.

### 7.2 Multi-Agent Architecture Amadurecendo
O conceito de subagentes/agent-to-agent ganha tração:

- **IronClaw**: 4+ PRs de subagent spawn em phases (#3867, #3868, #3872)
- **PicoClaw**: Issue #2929 (agent-to-agent communication peer)
- **NanoBot**: CLI Apps como extensão de agent capabilities

**Sinal:** A comunidade reconhece que agentes únicos têm limitações. A composição de agentes emerge como primitive arquitetural.

### 7.3 Image Generation como Feature Table Stakes
Todos os projetos com atividade alta integraram ou estão integrando geração de imagens:

- NanoBot: OpenAI, Codex, Ollama (3 provedores em 24h)
- PicoClaw: Media attachments + Telegram rich delivery (#2856)
- Hermes Agent: Vision enrichment para non-vision

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-05-23

---

## 1. Panorama do dia

O NanoBot apresenta um nível de atividade significativamente elevado nas últimas 24 horas, com **19 PRs atualizados** (7 abertos, 12 merged/fechados) e **7 issues processadas** (4 abertas/ativas, 3 fechadas). O projeto demonstra vigoroso ritmo de desenvolvimento, com destaque para a integração de **CLI Apps** via registry CLI-Anything, expansão de provedores de geração de imagens (OpenAI, Codex, Ollama) e melhorias na interface WebUI multilíngue. Não houve releases formais no período, sugerindo que as mudanças estão em fase de consolidação antes de um próximo versionamento.

---

## 2. Lançamentos

**Nenhuma release formal registrada nas últimas 24 horas.**

O projeto não publicou tags ou releases期间的版本公告 nos últimos dias. Esse padrão indica que o ciclo de lançamento pode estar em preparação ou que as contribuições estão sendo acumuladas para uma versão unificada. Recomenda-se monitorar o repositório para anúncios iminentes.

---

## 3. Progresso do Projeto

### PRs Merged/Fechadas (12 total) — Avanços Principais

| PR | Autor | Título | Impacto |
|---|---|---|---|
| [#3946](https://github.com/HKUDS/nanobot/pull/3946) | HaisamAbbas | Add Ollama image generation support | Adiciona suporte nativo a geração de imagens via `/api/generate` do Ollama, com suporte a auth bearer e execução local. |
| [#3954](https://github.com/HKUDS/nanobot/pull/3954) | ZegWe | Add OpenAI and Codex provider support | Integra OpenAI e Codex como provedores de geração de imagens, roteando OAuth via Responses API. |
| [#3929](https://github.com/HKUDS/nanobot/pull/3929) | HaisamAbbas | Unify image provider HTTP handling | Unifica requisições HTTP para MiniMax e AIHubMix, além de documentar URLs base do Gemini. |
| [#3963](https://github.com/HKUDS/nanobot/pull/3963) | Re-bin | feat(cli): add CLI Apps for CLI-Anything integrations | Introduce a capability surface para CLI Apps via registry oficial, permitindo instalação de apps externos. |
| [#3965](https://github.com/HKUDS/nanobot/pull/3965) | Re-bin | test(cli): cover CLI Apps on Windows CI | Torna testes de CLI Apps independentes de plataforma via mock, habilitando CI em Windows. |
| [#2364](https://github.com/HKUDS/nanobot/pull/2364) | BorisTsang | Prevent cron job self-duplication | Correção crítica de bug onde cron jobs se auto-duplicavam ao injetar diretiva anti-recursão. |
| [#3928](https://github.com/HKUDS/nanobot/pull/3928) | Hinotoi-agent | [security] validate redirect targets | Fecha brecha SSRF em `web_fetch` — valida targets de redirect antes de requisições outbound. |
| [#3964](https://github.com/HKUDS/nanobot/pull/3964) | yu-xin-c | Fill WebUI locale keys (es, fr, id, ko, vi) | Preenche chaves de localização ausentes para 5 novos idiomas na WebUI. |
| [#3962](https://github.com/HKUDS/nanobot/pull/3962) | yu-xin-c | Fill zh-TW and ja locale keys | Preenche localizações faltantes em Chinês (Taiwan) e Japonês. |
| [#3961](https://github.com/HKUDS/nanobot/pull/3961) | Yuxin-Lou | fix: dedupe Responses replay item ids | Garante IDs únicos em replay items para evitar rejeição de conversas resumidas pelo Codex. |
| [#3960](https://github.com/HKUDS/nanobot/pull/3960) | chengyongru | refactor: remove deprecated patch mode | Remove modo diff unificado deprecated, mantendo apenas array estruturado `edits`. |
| [#3957](https://github.com/HKUDS/nanobot/pull/3957) | Re-bin | fix: avoid misleading file edit counters | Remove placeholders obsoletos de edição e evita contadores enganosos no diff. |

---

## 4. Temas Quentes da Comunidade

### Issues/PRs com maior engajamento

| Issue/PR | Título | Comentários | 👍 | Tema Central |
|---|---|---|---|---|
| [#3884](https://github.com/HKUDS/nanobot/issues/3884) | WebUI conversation closes after first response | 6 | 0 | **Bug crítico UX** — Conversações na WebUI fecham após primeira resposta, afetando usabilidade. |
| [#3846](https://github.com/HKUDS/nanobot/issues/3846) | Keep skill content in multi-turn conversations | 4 | 1 | **Melhoria de memória** — Skill definitions devem persistir em conversas multi-turn sem reload repetido. |
| [#3959](https://github.com/HKUDS/nanobot/issues/3959) | /skill list disabled skills | 4 | 0 | **Bug de configuração** — Skills desabilitados aparecem no `/skill` list, falha de filtragem. |
| [#3028](https://github.com/HKUDS/nanobot/issues/3028) | Heartbeat cria cron jobs duplicados | 3 | 0 | **Bug de lógica** — Heartbeat já é cron, mas ao disparar cria novo cron — resulta em duplicação. |
| [#1443](https://github.com/HKUDS/nanobot/pull/1443) | Decouple heartbeat reasoning from notification | — | 0 | **Arquitetura** — Separar reasoning silencioso do heartbeat, apenas `message` tool deliveries. |

### Análise de Demandas

O tema mais recorrente é a **gestão de cron jobs e heartbeat**, com pelo menos 3 issues/PRs relacionados (#3028, #2364, #1443). A comunidade demonstra preocupação com a robustez do sistema de memória de longo prazo (#3952) e a expansão do ecossistema de plugins via CLI Apps.

---

## 5. Bugs e Estabilidade

### Issues Reportadas (por severidade)

#### 🔴 Alta Severidade

| Issue | Título | Status | Detalhes |
|---|---|---|---|
| [#3884](https://github.com/HKUDS/nanobot/issues/3884) | WebUI fecha conversa após primeira resposta | CLOSED | Bug em gateway WebSocket — conversation encerra após first response. |
| [#3956](https://github.com/HKUDS/nanobot/issues/3956) | Tool results com `list` content causam 400 no Anthropic API | CLOSED | Leitura de imagens via `read_file` gera blocos que invalidam API calls subsequentes. |
| [#3028](https://github.com/HKUDS/nanobot/issues/3028) | Heartbeat duplica cron jobs | OPEN | Sistema de heartbeat cria定时任务 redundantes durante execução. |

#### 🟡 Média Severidade

| Issue | Título | Status | Detalhes |
|---|---|---|---|
| [#3959](https://github.com/HKUDS/nanobot/issues/3959) | /skill lista skills desabilitados | OPEN | Config `disabledSkills` ignorado no comando `/skill`. |
| [#3928](https://github.com/HKUDS/nanobot/pull/3928) | SSRF em redirect do web_fetch | CLOSED (security fix) | Validada redirect targets antes de requisição outbound — **foi corrigido**. |

### Observações

Três bugs foram **resolvidos no período** (#3884, #3956, #2364), indicando resposta rápida do time. A regressão SSRF (#3928) foi tratada como security fix e mergeada rapidamente. Permanecem 2 bugs abertos de severidade alta que merecem priorização.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Propostas

| Issue/PR | Título | Tipo | Sinal Estratégico |
|---|---|---|---|
| [#3958](https://github.com/HKUDS/nanobot/issues/3958) | Weather Skill como example | enhancement | **Estratégia lean** — Migrar weather skill para example folder para reduzir built-in footprint. |
| [#3941](https://github.com/HKUDS/nanobot/issues/3941) | Add Image Generation Support for Ollama | enhancement | **Diversificação de provedores** — Já implementado via PR #3946. |
| [#3846](https://github.com/HKUDS/nanobot/issues/3846) | Keep skill content in multi-turn | enhancement | **Otimização de contexto** — Reduzir reload de skills por turno. |
| [#3946](https://github.com/HKUDS/nanobot/pull/3946) | Ollama image generation (merged) | feature | ✅ Completed — Integração nativa Ollama `/api/generate`. |
| [#3568](https://github.com/HKUDS/nanobot/pull/3568) | Add Manifest LLM router support | feature | **Novo provider** — Manifest como gateway integrado (`mnfst_` prefix). |
| [#3776](https://github.com/HKUDS/nanobot/pull/3776) | nanobot doctor diagnostic command | CLI enhancement | **DevEx** — Comando diagnóstico com 10 checks automatizados. |
| [#3865](https://github.com/HKUDS/nanobot/pull/3865) | BM25-lite skill router | performance | **Compressão system prompt ~60%** — Routing de skills via BM25 ao invés de listar todos. |
| [#3952](https://github.com/HKUDS/nanobot/pull/3952) | Dream + Consolidator prompts (MECE) | memory system | **Redução de duplicação** — Endereça bloat em MEMORY.md e history.jsonl. |

### Sinais de Roadmap

1. **Expansão de provedores**:OLLAMA, OpenAI Codex, Manifest integrados ou em desenvolvimento.
2. **CLI Apps ecosystem**: A feature CLI-Anything (#3963, #3965) sinaliza estratégia de extensibilidade via registry.
3. **Otimização de prompts**: BM25 skill router (#3865) e MECE memory consolidation (#3952) indicam foco em eficiência de tokens.
4. **Developer experience**: Comando `nanobot doctor` (#3776) e testes cross-platform (#3965) mostram investimento em DX.

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Cenário | Problema Reportado | Impacto |
|---|---|---|
| **WebUI com WebSocket** | Conversation fecha após first response (#3884) | Usabilidade básica comprometida |
| **Leitura de imagens** | API 400 errors ao usar `read_file` com imagens (#3956) | Funcionalidade de multimodalidade com falhas |
| **Configuração de skills** | `disabledSkills` ignorado no `/skill` (#3959) | Usuários não conseguem desabilitar skills unwanted |
| **Heartbeat** | Duplicação de mensagens de heartbeat (#3028) | Experiência irritante, spam de notificações |

### Padrões de Uso Observados

- **Multi-turn conversations**: Usuários esperam que habilidades persistam contexto (#3846).
- **Local models**: Forte demanda por suporte a provedores locais (Ollama) para image generation.
- **Cross-platform**: Necessidade de compatibilidade Windows/Linux para CLI Apps.

### Satisfação

A comunidade demonstra **engajamento ativo** — 19 PRs em 24h é indicativo de base contribuidora saudável. A rápida resolução de bugs críticos (#3884, #3956) e a implementação de múltiplos provedores sugerem satisfação com o ritmo de evolução do projeto.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta / Aguardando Ação (Stale)

| Issue | Título | Criado | Dias Inativa | Prioridade |
|---|---|---|---|---|
| [#3028](https://github.com/HKUDS/nanobot/issues/3028) | Heartbeat cria cron jobs duplicados | 2026-04-11 | ~42 dias | 🔴 Alta |
| [#3568](https://github.com/HKUDS/nanobot/pull/3568) | Add Manifest LLM router support | 2026-04-30 | ~23 dias | 🟡 Média |
| [#3846](https://github.com/HKUDS/nanobot/issues/3846) | Keep skill content in multi-turn | 2026-05-15 | ~8 dias | 🟡 Média |
| [#3865](https://github.com/HKUDS/nanobot/pull/3865) | BM25-lite skill router | 2026-05-16 | ~7 dias | 🟡 Média |
| [#3776](https://github.com/HKUDS/nanobot/pull/3776) | nanobot doctor command | 2026-05-14 | ~9 dias | 🟢 Baixa |
| [#3959](https://github.com/HKUDS/nanobot/issues/3959) | /skill list disabled skills | 2026-05-22 | ~1 dia | 🟡 Média |

### Recomendações

1. **#3028 — Bug heartbeat** (42 dias): Mesmo após merge de #2364, a issue original continua aberta. Verificar se a correção resolve completamente o problema reportado.
2. **#3568 — Manifest provider**: PR está em aberto há 23 dias. Avaliar necessidade de review ou feedback.
3. **#3846 — Multi-turn skills**: Feature request com 1 upvote e 4 comentários. Alinhar com trabalho de memória (#3952) para evitar retrabalho.

---

## Métricas Síntese

| Indicador | Valor (24h) | Tendência |
|---|---|---|
| Issues abertas/ativas | 4 | Neutra |
| Issues fechadas | 3 | Positiva |
| PRs abertos | 7 | Neutra |
| PRs merged/fechados | 12 | **Alta** ⬆️ |
| Bugs críticos resolvidos | 2 | Positiva |
| Security fixes | 1 | Positiva |
| Novas releases | 0 | Neutra |

---

*Relatório gerado automaticamente com base nos dados do GitHub de [HKUDS/nanobot](https://github.com/HKUDS/nanobot) para 2026-05-23.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-05-23

---

## 1. Panorama do dia

O Hermes Agent apresenta **alta atividade comunitária** em 23/05/2026, com 50 issues e 50 PRs atualizados nas últimas 24h. Não houve lançamentos de novas versões. A distribuição de Issues ativas (47 abertas vs. 3 fechadas) sugere acúmulo de demandas não resolvidas, enquanto 16 dos 50 PRs foram merged/fechados, indicando fluxo de desenvolvimento ativo. Os temas dominantes giram em torno de **bugs críticos na integração de plataformas** (Telegram, Discord, WhatsApp) e **questões de segurança e isolamento** que requerem atenção prioritária.

---

## 2. Lançamentos

**Nenhum release** registrado nas últimas 24h. O projeto não publicou novas versões desde o período analisado. Usuários em produção devem monitorar o repositório para próximos anúncios.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados Hoje (16 total)

| PR | Tipo | Componente | Descrição |
|----|------|------------|-----------|
| [#25993](https://github.com/NousResearch/hermes-agent/pull/25993) | Bug fix | Gateway, Vision | Melhora formato de enriquecimento de visão para modelos não-vision (CLOSED) |
| [#30596](https://github.com/NousResearch/hermes-agent/pull/30596) | Feature | Plugins, Memory | Adiciona observabilidade e higiene de memória ao Subconscious (CLOSED) |
| [#2121](https://github.com/NousResearch/hermes-agent/pull/2121) | Bug fix | API | Ignora chaves placeholder em verificações de ativação de provider (CLOSED) |
| [#2651](https://github.com/NousResearch/hermes-agent/pull/2651) | Feature | Agent | Adiciona provider OpenCode Zen com fetch live de modelos (CLOSED) |

### PRs Abertos de Destaque (34 abertas)

- ** [#30597](https://github.com/NousResearch/hermes-agent/pull/30597)** — `feat(runtime)`: Adiciona canal de aprovação confiável para operator com primitives de runtime, SQLite-backed job/approval state e scheduler. Potencial marco para automação supervisionada.
- **[#30603](https://github.com/NousResearch/hermes-agent/pull/30603)** — `feat(gateway)`: Integra credential manager no gateway init path, eliminando I/O redundante em cada mensagem.
- **[#30599](https://github.com/NousResearch/hermes-agent/pull/30599)** — `fix(lazy-deps)`: Resolve falha de `hermes update` em Python PEP 668 (Debian 12+, Ubuntu 23.04+).
- **[#30595](https://github.com/NousResearch/hermes-agent/pull/30595)** — `feat(ui)`: Implementa design system "Nebula Frost" com glass primitives no dashboard.
- **[#30600](https://github.com/NousResearch/hermes-agent/pull/30600)** — `feat`: Adiciona Universal Browser Operator MCP para automação web.
- **[#18366](https://github.com/NousResearch/hermes-agent/pull/18366)** — `fix`: Torna `/busy` disponível em plataformas gateway (Telegram, Discord).

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários + reações)

| Issue | Tipo | Comentários | 👍 | Título |
|-------|------|-------------|-----|--------|
| [#7237](https://github.com/NousResearch/hermes-agent/issues/7237) | Bug | 33 | 4 | Response truncated due to output length limit *(RESOLVIDA)* |
| [#29125](https://github.com/NousResearch/hermes-agent/issues/29125) | Bug | 11 | 4 | Hermes does not work through Claude CLI |
| [#15602](https://github.com/NousResearch/hermes-agent/issues/15602) | Feature | 4 | 9 | Google Workspace skill: multi-account support |
| [#20470](https://github.com/NousResearch/hermes-agent/issues/20470) | Bug (P1) | 5 | 7 | Telegram DM topic binding não atualiza após context compression |
| [#5200](https://github.com/NousResearch/hermes-agent/issues/5200) | Docs | 4 | 5 | Context Files: documented behavior doesn't match code |
| [#20510](https://github.com/NousResearch/hermes-agent/issues/20510) | Feature | 3 | 6 | Cloud Sync for All Hermes Configurations Across Devices |

### Análise de Demandas

1. **Integração com Claude CLI (#29125)**: Usuários enfrentam problemas ao usar Hermes via Claude Pro/Max subscription — barreira de adoção para usuários Anthropic.
2. **Multi-account Google Workspace (#15602)**: Forte demanda comunitária (9 👍) indica que profissionais com contas pessoais e corporativas estão sendo penalizados pelo design single-account.
3. **Cloud Sync (#20510)**: Usuários multi-device reclamam da ausência de sincronização de configurações — indica necessidade de experiência cross-platform.

---

## 5. Bugs e Estabilidade

### Issues P1 (Críticas) — 4 abertas

| Issue | Componente | Título | Atualização |
|-------|------------|--------|-------------|
| [#20470](https://github.com/NousResearch/hermes-agent/issues/20470) | Gateway, Telegram | Telegram DM topic binding não atualizado após context compression — causa loop de compressão | 2026-05-22 |
| [#27555](https://github.com/NousResearch/hermes-agent/issues/27555) | Agent, Vision | `fallback_chain` quebrado — kwargs errados em `_resolve_single_provider` | 2026-05-22 |
| [#25839](https://github.com/NousResearch/hermes-agent/issues/25839) | Agent, Skills | Sistema se passa por usuário, permitindo modificação não consentida de skills | 2026-05-22 |
| [#30538](https://github.com/NousResearch/hermes-agent/issues/30538) | Gateway, Telegram | DM topic recovery colapsa sessões paralelas em uma só | 2026-05-22 |

### Issues P2 (Altas) — 8 abertas

- **[#23975](https://github.com/NousResearch/hermes-agent/issues/23975)** — Context compression interrompida por mensagens gateway
- **[#23609](https://github.com/NousResearch/hermes-agent/issues/23609)** — `/model` picker ignora live fetch para todos os api_key providers
- **[#25822](https://github.com/NousResearch/hermes-agent/issues/25822)** — Gemini 503 não dispara fallback provider
- **[#30565](https://github.com/NousResearch/hermes-agent/issues/30565)** — Discord tools invisíveis quando token está em `.env`
- **[#30558](https://github.com/NousResearch/hermes-agent/issues/30558)** — Installer trava em Debian com packages para autoremove
- **[#30586](https://github.com/NousResearch/hermes-agent/issues/30586)** — macOS launchd hardcoded `gui/` quebra para SSH-only
- **[#20369](https://github.com/NousResearch/hermes-agent/issues/20369)** — Skills criados no SSH sandbox ao invés da máquina host
- **[#18362](https://github.com/NousResearch/hermes-agent/issues/18362)** — `/busy` cli_only mas onboarding sugere uso universal

### Issues P3 (Médias) — 35 abertas

Incluem bugs de UI (TUI, Kanban, Dashboard scroll), problemas de docs, features menores e issues de plataforma.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features (P3, emergentes)

| Issue | Componente | Título | 👍 |
|-------|------------|--------|-----|
| [#3491](https://github.com/NousResearch/hermes-agent/issues/3491) | Tool, TTS | MLX Whisper local STT para macOS/Apple Silicon | 0 |
| [#25979](https://github.com/NousResearch/hermes-agent/issues/25979) | Tool, Skills | Microsoft 365 Calendar + To Do via Graph API | 0 |
| [#30587](https://github.com/NousResearch/hermes-agent/issues/30587) | Cron | Adaptive retry com model escalation e notificação owner | 0 |
| [#30585](https://github.com/NousResearch/hermes-agent/issues/30585) | Agent, Docker | Profile isolation via Docker | 0 |
| [#20510](https://github.com/NousResearch/hermes-agent/issues/20510) | Config | Cloud Sync de configurações cross-device | 6 |
| [#30555](https://github.com/NousResearch/hermes-agent/issues/30555) | Agent | Parent session messages persistidas antes de compressão | 0 |

### Tendências de Roadmap Indicadas

1. **Isolamento e Segurança**: Multiple issues pedindo profile isolation (#30585), trusted approval channels (PR #30597), e a issue de segurança #25839 sugerem foco em multi-tenancy e controle de permissões.
2. **Apple Silicon**: Demanda por MLX Whisper local indica base de usuários macOS crescendo.
3. **Microsoft Ecosystem**: Proposta de skill Outlook/Graph sugere competição direta com Google Workspace.
4. **Cloud/Enterprise**: Cloud sync e observabilidade (#30596 closed) indicam direção enterprise.

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais Reportadas

| Categoria | Descrição | Frequência |
|-----------|-----------|------------|
| **Estabilidade de Platformas** | Integração instável com Telegram, Discord, WhatsApp — especialmente em cenários multi-sessão | Alta |
| **UX Cross-Platform** | Falta de sincronização de configurações, habilidades de conta única, problemas em SSH-only | Alta |
| **Documentação** | Comportamento documentado diverge do código (AGENTS.md/SOUL.md) | Média |
| **Terminal/CLI** | Terminal blinking, problemas de instalação em Debian, macOS launchd | Média |
| **Vision/Auxiliary** | Fallback quebrado, resposta truncada, modelos non-vision não aproveitam enriquecimento | Média |

### Cenários de Uso Identificados

- **Profissionais multi-conta**: Usuários com contas Google pessoais e corporativas não conseguem acessar ambas simultaneamente.
- **SSH/Headless**: Usuários em servidores remotos ou Mac headless enfrentam barreiras de instalação e gateway.
- **Grupos WhatsApp**: O bot não deveria responder em certas situações mas currently envia spam diagnóstico.
- **Apple Silicon**: Usuários macOS querem STT local eficiente via MLX, não via faster-whisper.

### Satisfação/Insatisfação

- **Satisfação**: Comunidade ativa (50+ issues/PRs), PRs sendo mergeados, features sendo implementadas.
- **Insatisfação**: Acúmulo de 47 issues abertas vs. 3 fechadas em 24h, bugs P1 não resolvidos, documentação defasada.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Stale

| Issue | Idade | Tipo | Prioridade | Título |
|-------|-------|------|------------|--------|
| [#282](https://github.com/NousResearch/hermes-agent/issues/282) | ~80 dias | Bug | - | Terminal blinking *(fechada recently)* |
| [#3491](https://github.com/NousResearch/hermes-agent/issues/3491) | ~56 dias | Feature | P3 | MLX Whisper STT |
| [#5200](https://github.com/NousResearch/hermes-agent/issues/5200) | ~48 dias | Docs | P3 | Context Files mismatch |
| [#18362](https://github.com/NousResearch/hermes-agent/issues/18362) | ~22 dias | Bug | P2 | `/busy` cli_only |

### Issues Críticas Sem Resolução Visível

1. **[#20470](https://github.com/NousResearch/hermes-agent/issues/20470)** — Telegram DM topic binding (P1, 5 comments, 7 👍) — desde 2026-05-06
2. **[#25839](https://github.com/NousResearch/hermes-agent/issues/25839)** — Segurança: system impersonates user (P1) — desde 2026-05-14
3. **[#27555](https://github.com/NousResearch/hermes-agent/issues/27555)** — Vision fallback broken (P1) — desde 2026-05-17

### Recomendações de Priorização

1. **Imediata**: Resolver issues P1 de Telegram e segurança (#20470, #25839, #27555, #30538)
2. **Curto prazo**: Documentação (#5200), Claude CLI integration (#29125), multi-account Google (#15602)
3. **Médio prazo**: Cloud sync (#20510), MLX Whisper (#3491), profile isolation (#30585)

---

*Relatório gerado em 2026-05-23. Dados extraídos de NousResearch/hermes-agent. Para atualizações em tempo real, consulte [github.com/nousresearch/hermes-agent](https://github.com/NousResearch/hermes-agent).*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório de Projeto — PicoClaw
**Data:** 2026-05-23 | **Repository:** [sipeed/picoclaw](https://github.com/sipeed/picoclaw)

---

## 1. Panorama do dia

O projeto PicoClaw registra um nível de atividade **muito elevado** nas últimas 24h, com 19 PRs atualizados e 10 issues processadas. A atividade de código foi intensa, com 12 PRs fechados (incluindo múltiplos merges de fixes e atualizações de dependências) e 7 PRs abertos aguardando revisão — sinal de um ciclo saudável de desenvolvimento. A release nightly v0.2.8-nightly.20260522.5bbebb5f foi gerada automaticamente, mantendo o ritmo de entrega contínua. Entre os destaques, há progresso significativo em estabilidade de canais (Telegram, Matrix), melhorias de sessões e novas capacidades de mensageria e agentes. Não foram reportados crashes críticos novos.

---

## 2. Lançamentos

### 🚨 Nova Release: Nightly Build
- **Versão:** `nightly-20260522.5bbebb5f` ([v0.2.8-nightly](https://github.com/sipeed/picoclaw/releases/tag/v0.2.8-nightly.20260522.5bbebb5f))
- **Status:** Automatizada — potencialmente instável
- **Changelog completo:** https://github.com/sipeed/picoclaw/compare/v0.2.8...main

> **Nota:** Esta é uma nightly build automática. Não há breaking changes documentados específicos dessa build. Recomenda-se uso em ambientes de desenvolvimento/testes. A última release estável permanece `v0.2.8`.

---

## 3. Progresso do Projeto

### PRs Merged/Closed (últimas 24h)

| # | PR | Descrição | Impacto |
|---|-----|-----------|---------|
| #2930 | [bump golang.org/x/net → v0.55.0](https://github.com/sipeed/picoclaw/pull/2930) | Corrige `govulncheck` findings em `HtmlToMarkdown` | 🔒 Segurança / Dependência |
| #2788 | [feat(session): per-message timestamps](https://github.com/sipeed/picoclaw/pull/2788) | Adiciona `created_at` individual por mensagem na API de sessões | ✨ Funcionalidade |
| #2827 | [fix: allow_from ID parsing](https://github.com/sipeed/picoclaw/pull/2827) | Corrige parsing de MXIDs com `@` no filter Matrix | 🐛 Bug fix |
| #2822 | [fix(subturn): dismiss child tool feedback](https://github.com/sipeed/picoclaw/pull/2822) | Gerencia lifecycle de feedback visual de subagentes | 🐛 Bug fix |
| #2814 | [fix(tools): relative script paths](https://github.com/sipeed/picoclaw/pull/2814) | Permite paths relativos em `scripts/*.sh` no exec guard | 🐛 Bug fix |
| #2794 | [fix(agents): preserve origin context](https://github.com/sipeed/picoclaw/pull/2794) | Preserva contexto original em async follow-ups | 🐛 Bug fix |
| #2791 | [fix(telegram): preserve topic context](https://github.com/sipeed/picoclaw/pull/2791) | Mantém metadata de tópico Telegram em replies | 🐛 Bug fix |
| #2789 | [fix(channels): configurable throttle](https://github.com/sipeed/picoclaw/pull/2789) | Torna `animation_interval_secs` configurável | ⚙️ Configuração |
| #2756 | [fix(telegram): topic context](https://github.com/sipeed/picoclaw/pull/2756) | Preserva `TopicID` em respostas finais | 🐛 Bug fix |
| #2921 | [bump gronx](https://github.com/sipeed/picoclaw/pull/2921) | Dependência cron atualizada | 📦 Dependência |
| #2923 | [bump line-bot-sdk](https://github.com/sipeed/picoclaw/pull/2923) | Atualização SDK LINE | 📦 Dependência |
| #2914 | [feat: request-scoped context policies](https://github.com/sipeed/picoclaw/pull/2914) | Adiciona `turn_profile` global via `agents.defaults` | ✨ Funcionalidade |

**Análise:** O volume de merges é notável — 12 PRs em 24h. Há um foco claro em **estabilidade de canais** (Telegram + Matrix) e **corretudes de sessão**. A feature de timestamps por mensagem (#2788) atenderá uma demanda antiga do frontend. O PR #2914 introduz um mecanismo global de políticas de contexto que pode ser um bloco de construção para funcionalidades futuras.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento

| # | Título | Tipo | Comentários | 👍 | Status |
|---|--------|------|-------------|----|--------|
| [#2625](https://github.com/sipeed/picoclaw/issues/2625) | [Feature] Provide compiled builds with WhatsApp support | enhancement | 6 | 1 | OPEN |
| [#2785](https://github.com/sipeed/picoclaw/issues/2785) | ToolFeedbackAnimator — feishu só mostra primeira tool call | bug | 3 | 0 | CLOSED |
| [#2744](https://github.com/sipeed/picoclaw/issues/2744) | Android v0.2.8 — cannot access any data from tabs | bug | 3 | 0 | CLOSED |
| [#2820](https://github.com/sipeed/picoclaw/issues/2820) | Support non-destructive fresh-session reset | feature | 2 | 1 | CLOSED |
| [#2351](https://github.com/sipeed/picoclaw/issues/2351) | Validate skill binary requirements before injection | enhancement | 2 | 0 | OPEN |
| [#2929](https://github.com/sipeed/picoclaw/issues/2929) | Add first-class agent-to-agent communication | task | 1 | 0 | OPEN |

### Análise

**🔝 #2625 — WhatsApp Builds (maior engajamento):** Usuário precisa de builds ARM64 com WhatsApp incluso para Raspberry Pi Zero 2. A proposta é usar compiler flags para incluir suporte. Este é um pedido de **distribuição/package management** que afeta portability. Tem 6 comentários — a comunidade demonstra interesse em variantes de build.

**🔝 #2929 — Agent-to-Agent Communication:** Novo issue com proposta de camada de comunicação peer-to-peer entre agentes. Descreve que `spawn`/`subagent`/`delegate` já existem, mas carecem de primeiro-nível de comunicação. Este é um **sinal de roadmap** significativo — indica que a arquitetura multiagente está amadurecendo.

**🔝 #2820 — Non-destructive reset:** closed com merged, mas evidencia uma **dolor point** real: o comando `/clear` é destrutivo demais para workflows de produção onde histórico é valioso.

**🔝 #2351 — Skill binary validation:** Skills com `metadata.nanobot.requires.bins` são injetadas mesmo sem os bins instalados. Isso causa LLM fazendo promessas que falham runtime — problema de **UX e confiabilidade**.

---

## 5. Bugs e Estabilidade

### Bugs Reportados (últimas 24h)

| Severidade | # | Bug | Canal | Status |
|------------|---|-----|-------|--------|
| 🟡 Média | [#2744](https://github.com/sipeed/picoclaw/issues/2744) | Android v0.2.8 — cannot access any data from tabs | Android | CLOSED |
| 🟡 Média | [#2817](https://github.com/sipeed/picoclaw/issues/2817) | Voice transcription succeed mas LLM recebe `[voice]` | Telegram/Groq | CLOSED |
| 🔴 Alta (Impacto Matrix) | [#2816](https://github.com/sipeed/picoclaw/issues/2816) | Matrix sender identity não injetada no contexto | Matrix | CLOSED |
| 🔴 Alta (Segurança) | [#2815](https://github.com/sipeed/picoclaw/issues/2815) | `allow_from` filter não funciona no Matrix | Matrix | CLOSED |
| 🟡 Média | [#2787](https://github.com/sipeed/picoclaw/issues/2787) | Mensagens de sessão sem timestamp individual | API | CLOSED |
| 🟢 Baixa | [#2785](https://github.com/sipeed/picoclaw/issues/2785) | Feishu só mostra primeira tool call message | Feishu | CLOSED |

### Análise de Estabilidade

**Matrix com problemas críticos resolvidos:** Dois bugs de alta severidade no canal Matrix (#2816, #2815) foram fechados neste período. Ambos envolvem o `allow_from` filter e injeção de contexto — problemas que potencialmente permitiam mensagens não-authorizadas ou comportamento incorreto. O PR #2827 ([fix allow_from parsing](https://github.com/sipeed/picoclaw/pull/2827))地址 a raiz do problema (parsing de MXIDs com `@` e `:`).

**Voice transcription bug (#2817):** Transcrição via Groq Whisper completa mas texto não é substituído no payload — LLM recebe placeholder. Isso indica uma quebra na pipeline de middleware de voz. Closed neste período.

**Android regression (#2744):** Usuário reporta impossibilidade de acessar dados em abas no Android v0.2.8. Closed — possivelmente resolvido em nightly.

**Nota de alerta:** Todos os bugs reportados foram fechados no período, o que sugere **alta taxa de resolução** mas também pode indicar que muitos issues foram marcados como stale sem resolução completa. Recomenda-se verificar a calidad das resoluções.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Abertas

| # | Feature | Domínio | Prioridade | Comentários |
|---|---------|---------|-----------|-------------|
| [#2625](https://github.com/sipeed/picoclaw/issues/2625) | Builds com WhatsApp support para ARM64 | channel (WhatsApp) | low | 6 |
| [#2351](https://github.com/sipeed/picoclaw/issues/2351) | Validar requirements binários de skills | skill | — | 2 |
| [#2929](https://github.com/sipeed/picoclaw/issues/2929) | Agent-to-agent communication (peer) | agents | — | 1 |

### PRs de Features em Progresso

| # | PR | Descrição | Estágio |
|---|-----|-----------|--------|
| [#2856](https://github.com/sipeed/picoclaw/pull/2856) | Media attachments + Telegram rich delivery | Rich media no tool `message` | OPEN |
| [#2877](https://github.com/sipeed/picoclaw/pull/2877) | Optional Tirith pre-exec scanning | Scanner de segurança em shell tool | OPEN |
| [#2906](https://github.com/sipeed/picoclaw/pull/2906) | Message bus backpressure handling | Resiliência sob carga | OPEN |
| [#2928](https://github.com/sipeed/picoclaw/pull/2928) | DeepSeek thinking fields mapping | Provider OpenAI-compat | OPEN |
| [#2662](https://github.com/sipeed/picoclaw/pull/2662) | Unify vendors table in providers docs | Documentação | OPEN |

### Sinais de Roadmap

1. **Multiagência amadurecendo:** Issue #2929 solicita comunicação peer-to-peer entre agentes. O PR #2914 ([request-scoped context policies](https://github.com/sipeed/picoclaw/pull/2914)) já adiciona blocos de construção com `agents.defaults.turn_profile`.

2. **Rich media em expansão:** PR #2856 está演进 para incluir media attachments no tool `message`, eliminando necessidade de combinar primitivos low-level. Isso sugere direção para experiência de entrega mais rica.

3. **Segurança em shell tools:** PR #2877 introduce Tirith — scanner local pré-execução que detecta ameaças em nível de conteúdo. Este é um movimento proativo de segurança.

4. **Resiliência operacional:** PR #2906 aborda backpressure no message bus — indica preocupação com comportamento sob alta carga, comum em deployments de produção.

5. **Deeper provider support:** PR #2928 mapeia campos de thinking do DeepSeek via OpenAI-compatible path — evidência de expansão contínua de provedores.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Dor | Evidência | Impacto |
|-----|-----------|---------|
| **Builds sem WhatsApp para ARM** | Issue #2625: usuário em Raspberry Pi Zero 2 não consegue updates rápidos com WhatsApp incluso | Mobilidade / Deploy edge |
| **Reset destrutivo de sessão** | Issue #2820: `/clear` deleta histórico valioso — workflows de produção prejudicados | Operações |
| **Skills fazem promessas falsas** | Issue #2351: LLM claims capabilities sem bins instalados | Confiança / UX |
| **Timestamps de sessão imprecisos** | Issue #2787: frontend usa `updated` do session para todas mensagens | Usabilidade |
| **Voice transcription não funciona end-to-end** | Issue #2817: LLM recebe `[voice]` placeholder | Funcionalidade voz |
| **Matrix sem controle de acesso funcional** | Issues #2815, #2816: `allow_from` broken + sender ID missing | Segurança/Canal |

### Cenários de Uso Observados

- **Usuários móveis/edge:** Raspberry Pi Zero 2 com ARM64 — necessidade de builds portáveis
- **Multiagência produtiva:** Sessões persistentes com contexto histórico entre agentes
- **Voice-first workflows:** Transcrição via Groq Whisper integrada ao pipeline LLM
- **Teams/Enterprise:** Uso de canais Matrix e Feishu com controles de acesso

### Satisfação Geral

**Positiva:** A velocidade de resposta da equipe é alta — 12 PRs fechados em 24h. Bugs críticos de Matrix foram addressed rapidamente. A feature de timestamps por mensagem (merged em #2788) atiende diretamente a uma dor de UX.

**Areas de atenção:** 
- Validação de skills (#2351) ainda aberta — usuários estão confiando em funcionalidades advertised que não funcionam
- Voice transcription (#2817) closed mas o bug é recorrente em pipelines de voz
- Android regression (#2744) pode indicar fragilidade na plataforma mobile

---

## 8. Backlog que Merece Atenção

### Issues sem resposta ou stale há tempo considerável

| # | Título | Age | Prioridade | Status | Atenção |
|---|--------|-----|-----------|--------|---------|
| [#2351](https://github.com/sipeed/picoclaw/issues/2351) | Validate skill binary requirements | ~48d | enhancement | OPEN | ⚠️ Alta — afeta confiança |
| [#2625](https://github.com/sipeed/picoclaw/issues/2625) | WhatsApp compiled builds for ARM64 | ~31d | enhancement | OPEN | ⚠️ Média — comunidade engajada |
| [#2929](https://github.com/sipeed/picoclaw/issues/2929) | Agent-to-agent communication | <1d | task | OPEN | 🔍 Roadmap |

### PRs Abertos há tempo considerável

| # | PR | Age | Estágio | Atenção |
|---|-----|-----|--------|---------|
| [#2877](https://github.com/sipeed/picoclaw/pull/2877) | Tirith pre-exec scanning | ~8d | OPEN | ⚠️ Segurança — aguardando review |
| [#2856](https://github.com/sipeed/picoclaw/pull/2856) | Media attachments + Telegram rich | ~12d | OPEN | 🔍 Funcionalidade — aguardando review |
| [#2906](https://github.com/sipeed/picoclaw/pull/

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório de Projeto — IronClaw
## Data: 2026-05-23 | Analista: Open Source AI Agent

---

## 1. Panorama do Dia

O projeto IronClaw apresenta **alta atividade** em 23 de maio de 2026, com 27 issues e 50 PRs atualizados nas últimas 24h. O desenvolvimento está concentrado na arquitetura **Reborn**, com múltiplos módulos (M1-WebUI, M2-Inbound Workflow, M4-Host Kernel) avançando em paralelo. Não houve lançamentos hoje, mas 20 PRs foram merged/fechados, indicando progresso significativo. A infraestrutura de autenticação OAuth para Google Extensions está em Phase 1-6, enquanto o sistema de subagentes avança com 4 fases simultâneas. Um failure no nightly E2E foi reportado pelo GitHub Actions, sugerindo necessidade de atenção à estabilidade.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24h.**

O projeto mantém um ritmo de desenvolvimento nightly sem tags formais de release neste período, típico de fase de integração intensa.

---

## 3. Progresso do Projeto

### PRs Fechados/Merged (últimas 24h)

| PR | Descrição | Impacto |
|----|-----------|---------|
| [#3876](https://github.com/nearai/ironclaw/pull/3876) | Typed WebUI v2 event stream schema | ✅ Adiciona schema `WebChatV2EventFrame` para output SSE tipado e seguro para browser |
| [#3861](https://github.com/nearai/ironclaw/pull/3861) | Reborn skill activation selector | ✅ Seletor de ativação explícita de skills como extensão first-party |
| [#3803](https://github.com/nearai/ironclaw/issues/3803) | Lane 3: wire secrets/egress substrate | ✅ Composição de produção para secrets e tools nativas/MCP |
| [#3623](https://github.com/nearai/ironclaw/issues/3623) | Add BeforeInboundPolicy seam | ✅ Seam beta-critical para WebUI v2 policy-check |
| [#3611](https://github.com/nearai/ironclaw/issues/3611) | Minimal native WebChat v2 routes | ✅ Rotas nativas: create thread, send message, get timeline |
| [#3626](https://github.com/nearai/ironclaw/issues/3626) | Bind WebUI caller to TurnScope | ✅ Bind de escopo canônico para tenant/user/thread |
| [#3625](https://github.com/nearai/ironclaw/issues/3625) | WebUI idempotency ledger | ✅ Ledger para evitar duplicação de turns/mensagens |
| [#3610](https://github.com/nearai/ironclaw/issues/3610) | Preserve typed filesystem errors | ✅ Preserva detalhes tipados em `ProcessError::Filesystem` |

**Destaque:** O PR [#3876](https://github.com/nearai/ironclaw/pull/3876) é crítico para a WebUI Beta, renderizando `ProductOutboundEnvelope` em eventos tipados sem expor metadados de roteamento ao browser.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários)

| Issue | Comentários | Tema |
|-------|-------------|------|
| [#3013](https://github.com/nearai/ironclaw/issues/3013) | 8 | TurnCoordinator para cutover blocker do Reborn |
| [#3702](https://github.com/nearai/ironclaw/issues/3702) | 4 | Framework de testes binary-E2E para Reborn |
| [#3623](https://github.com/nearai/ironclaw/issues/3623) | 3 | BeforeInboundPolicy seam (CLOSED) |
| [#3803](https://github.com/nearai/ironclaw/issues/3803) | 2 | Secrets/egress composition |
| [#3798](https://github.com/nearai/ironclaw/issues/3798) | 2 | Design: subagent spawn |
| [#3094](https://github.com/nearai/ironclaw/issues/3094) | 2 | Approval/auth interaction services |
| [#3280](https://github.com/nearai/ironclaw/issues/3280) | 2 | ProductWorkflow facade |

### PRs com Maior Engajamento

| PR | Tamanho | Tema |
|----|---------|------|
| [#3865](https://github.com/nearai/ironclaw/pull/3865) | XL | Product auth contracts — novo crate `ironclaw_auth` |
| [#3867](https://github.com/nearai/ironclaw/pull/3867) | XL | Subagent spawn phase 0 prerequisite |
| [#3868](https://github.com/nearai/ironclaw/pull/3868) | XL | Subagent spawn phase 1 contracts |
| [#3872](https://github.com/nearai/ironclaw/pull/3872) | XL | Subagent spawn phase 4 verification |
| [#3899](https://github.com/nearai/ironclaw/pull/3899) | XL | Reborn budgets follow-ups |
| [#3893-3898](https://github.com/nearai/ironclaw/pulls?q=is%3Apr+is%3Aopen+Phase+Google) | XL | Google Extensions Phases 1-6 (OAuth, Calendar, Gmail) |

### Análise de Demandas

**Arquitetura Reborn:** A comunidade está ativamente discutindo e implementando a nova arquitetura. O foco está em:
- Turn coordination e admission control
- Separação de concerns entre product adapters e host services
- Ciclo de vida de credenciais e OAuth

**Subagentes:** O design documentado em [#3798](https://github.com/nearai/ironclaw/issues/3798) está sendo implementado em 4+ fases paralelas, indicando alta prioridade.

**Google Extensions:** 6 fases de PRs simultâneas demonstram investimento pesado em integração com Google Calendar e Gmail via OAuth.

---

## 5. Bugs e Estabilidade

### Falha de CI/CD

| Item | Severidade | Detalhes |
|------|------------|----------|
| [#3447](https://github.com/nearai/ironclaw/issues/3447) | 🔴 Alta | **Nightly E2E failed** — workflow "Full E2E / E2E (v2-engine)" falhou no commit `030cfeb0` |

**Recomendação:** Investigar falha no E2E v2-engine antes de merges de alta severidade.

### Issues de Estabilidade Abertos

| Issue | Severidade | Módulo | Problema |
|-------|------------|--------|----------|
| [#3884](https://github.com/nearai/ironclaw/issues/3884) | 🔴 P0 | Auth Lifecycle | Token refresh e credential cleanup lifecycle |
| [#3883](https://github.com/nearai/ironclaw/issues/3883) | 🔴 P0 | Auth Lifecycle | Credential recovery e account-selection |
| [#3882](https://github.com/nearai/ironclaw/issues/3882) | 🔴 P0 | Auth Lifecycle | Manual token secure-submit interactions |
| [#3881](https://github.com/nearai/ironclaw/issues/3881) | 🔴 P0 | Auth Lifecycle | OAuth start e callback routes |
| [#3891](https://github.com/nearai/ironclaw/issues/3891) | 🟡 Alta | Approval | Durable approval-policy port antes de AlwaysAllow |
| [#3875](https://github.com/nearai/ironclaw/issues/3875) | 🟡 Alta | Subagents | Blocking spawn parent recovery after child completion |

**Nota:** Todas as issues de auth lifecycle (Steps 4-6) têm dependências circulares que requerem coordenação cuidadosa.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas (últimas 24h)

| Issue | Escopo | Descrição |
|-------|--------|-----------|
| [#3873](https://github.com/nearai/ironclaw/issues/3873) | Trigger Loop | **Scheduled (cron) triggers** para workflows Reborn — "every morning at 8am, summarize my unread mail" |
| [#3857](https://github.com/nearai/ironclaw/issues/3857) | Lane 10 | **Slack ProductAdapter MVP** com credenciais pré-configuradas |
| [#3806](https://github.com/nearai/ironclaw/issues/3806) | Lane 6 | **GitHub WASM** capability path |
| [#3805](https://github.com/nearai/ironclaw/issues/3805) | Lane 5 | **Notion MCP** capability path |
| [#3886](https://github.com/nearai/ironclaw/issues/3886) | WebUI | **Port static WebUI v2** para Reborn WebChat ingress |
| [#2117](https://github.com/nearai/ironclaw/issues/2117) | ironclaw-bridge | **Local file/MCP bridge daemon** para deployments cloud-hosted |

### Sinais de Roadmap

1. **Trigger Loop:** A issue [#3873](https://github.com/nearai/ironclaw/issues/3873) introduz conceito de "synthetic inbound messages" via cron, expandindo IronClaw de reativo para proativo.

2. **Extensões Terceiras:** Lane 5 (Notion MCP) e Lane 6 (GitHub WASM) indicam estratégia de capability catalog para ferramentas externas.

3. **Slack Integration:** Lane 10 com ProductAdapter MVP sugere expansão multi-canal além de WebUI.

4. **Local Bridge:** Issue [#2117](https://github.com/nearai/ironclaw/issues/2117) (1 👍) aborda caso de uso enterprise para Obsidian vaults e diretórios locais.

---

## 7. Resumo de Feedback dos Usuários

> **Nota:** Dados limitados diretamente dos usuários neste período. Inferências baseadas em issues e PRs:

### Dores Identificadas

| Dor | Fonte | Impacto |
|-----|-------|---------|
| **Acesso a arquivos locais via cloud** | [#2117](https://github.com/nearai/ironclaw/issues/2117) | Blocker para vaults Obsidian, diretórios locais |
| **Credenciais expostas em transcripts** | [#3882](https://github.com/nearai/ironclaw/issues/3882) | Segurança: tokens não devem passar por chat/modelo |
| **Falhas no nightly E2E** | [#3447](https://github.com/nearai/ironclaw/issues/3447) | Confiança na base de código |
| **Filesystem errors stringificados** | [#3610](https://github.com/nearai/ironclaw/issues/3610) | Dificulta classificação de erros downstream |

### Cenários de Uso em Evidência

- **Agentes proativos:** Necessidade de triggers cron (resumo matinal de emails)
- **Multi-produto:** Integração Google (Calendar, Gmail), Slack, Notion, GitHub
- **Enterprise:** Deploy cloud com acesso a recursos locais
- **Subagentes:** Cenários de spawn bloqueante com recuperação

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Stale

| Issue | Idade | Status | Prioridade |
|-------|-------|--------|------------|
| [#2117](https://github.com/nearai/ironclaw/issues/2117) | ~46 dias | Aberta | Enhancement (1 👍) |
| [#2394](https://github.com/nearai/ironclaw/pull/2394) | ~40 dias | Aberta | WeChat Enterprise channel |
| [#3013](https://github.com/nearai/ironclaw/issues/3013) | ~25 dias | Fechada | Cutover blocker (foi addressed) |

### PRs em Draft por Período Prolongado

| PR | Dias Aberto | Fase | Status |
|----|-------------|------|--------|
| [#3867](https://github.com/nearai/ironclaw/pull/3867) | 1 dia | Phase 0 | Draft |
| [#3868](https://github.com/nearai/ironclaw/pull/3868) | 1 dia | Phase 1 | Draft |
| [#3872](https://github.com/nearai/ironclaw/pull/3872) | 1 dia | Phase 4 | Draft |
| [#2394](https://github.com/nearai/ironclaw/pull/2394) | ~40 dias | WeCom | Aberto |

### Recomendações

1. **Priorizar review dos PRs de subagent spawn** ([#3867](https://github.com/nearai/ironclaw/pull/3867), [#3868](https://github.com/nearai/ironclaw/pull/3868), [#3872](https://github.com/nearai/ironclaw/pull/3872)) — são dependências para múltiplas features.

2. **Resolver failure E2E** ([#3447](https://github.com/nearai/ironclaw/issues/3447)) antes de novos merges de alta severidade.

3. **Avaliar issue #2117** (ironclaw-bridge) — demanda real de enterprise com 1 👍 e 1 comentário.

4. **Avançar Google Extensions Phases 1-6** — representam investimento significativo e estão em PRs drafts simultâneos.

---

## Métricas Resumidas do Dia

| Métrica | Valor |
|---------|-------|
| Issues ativas | 20 |
| Issues fechadas | 7 |
| PRs abertos | 30 |
| PRs merged/fechados | 20 |
| Novas releases | 0 |
| Falhas de CI | 1 |
| Issues P0/P1 abertas | ~15 |
| PRs XL em draft | 8+ |

**Saúde Geral:** ⚠️ **Em desenvolvimento ativo com instabilidade controlada** — alta produtividade em features, mas falha de E2E requer atenção. O projeto está em fase de integração pesada da arquitetura Reborn.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do Projeto CoPaw — 2026-05-23

---

## 1. Panorama do Dia

O projeto CoPaw mantém alto nível de atividade com **24 issues e 22 PRs atualizados nas últimas 24h**, sem novas releases. A comunidade demonstra engajamento significativo em bugs críticos (como histórico de chat desaparecido e parsing de think content) e em melhorias de usabilidade (customização de comandos slash, controle de acesso unificado). A taxa de fechamento está saudável com 7 issues e 10 PRs resolvidos, indicando fluxo de desenvolvimento ativo.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto não publicou novas versões neste período. As últimas atividades concentram-se em contribuições pendentes de merge e issues em discussão.

---

## 3. Progresso do Projeto

### PRs Closed/Merged (10 total)

| PR | Título | Impacto |
|----|--------|---------|
| [#4621](https://github.com/agentscope-ai/QwenPaw/pull/4621) | fix(gemini): map max_tokens to max_output_tokens | **Crítico** — Corrige crash com ValidationError para Gemini/Gemma |
| [#4627](https://github.com/agentscope-ai/QwenPaw/pull/4627) | fix(WeChat): replace instance-level token invalid flag with per-request | **Estabilidade** — Resolve blocking cross-request interference |
| [#4618](https://github.com/agentscope-ai/QwenPaw/pull/4618) | fix(WeChat): skip subsequent sends when context_token invalid | **Estabilidade** — Melhora tratamento de tokens inválidos no WeChat |
| [#4626](https://github.com/agentscope-ai/QwenPaw/pull/4626) | fix(qwenpaw-pet): fix pet stuck in Done state | **UX** — Corrige animação travada em conversas consecutivas |
| [#4600](https://github.com/agentscope-ai/QwenPaw/pull/4600) | fix(DingTalk): decode percent-encoded Chinese filenames | **i18n** — Corrige nomes de arquivo chineses corrompidos |
| [#4434](https://github.com/agentscope-ai/QwenPaw/pull/4434) | feat(cron): add option to clear context before running | **Produtividade** — Toggle para resetar contexto em tarefas cron |
| [#4636](https://github.com/agentscope-ai/QwenPaw/pull/4636) | feat(chat): add customizable slash command shortcut menu | **UX** — Permite customizar menu de comandos `/` |
| [#4395](https://github.com/agentscope-ai/QwenPaw/pull/4395) | test(security): cover tool guard utilities | **Qualidade** — Cobertura de testes para segurança |
| [#4623](https://github.com/agentscope-ai/QwenPaw/pull/4623) | style(console): update the skill market page | **UI** — Melhorias na página de marketplace de skills |

### Destaque: Fixes de Estabilidade WeChat
Os PRs [#4627](https://github.com/agentscope-ai/QwenPaw/pull/4627) e [#4618](https://github.com/agentscope-ai/QwenPaw/pull/4618) abordam problemas crônicos com tokens de sessão WeChat que bloqueavam envios subsequentes. A refatoração de flag instance-level para per-request representa melhoria arquitetural significativa.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários + reações)

| Issue | Título | Comentários | Tipo |
|-------|--------|-------------|------|
| [#4620](https://github.com/agentscope-ai/QwenPaw/issues/4620) | Chat history disappeared | 12 | **Bug Crítico** |
| [#4051](https://github.com/agentscope-ai/QwenPaw/issues/4051) | deepseek模型的think内容解析问题 | 10 | Bug (Closed) |
| [#4474](https://github.com/agentscope-ai/QwenPaw/issues/4474) | 现在支持chatgpt-5.5吗？ | 8 | Question |
| [#4607](https://github.com/agentscope-ai/QwenPaw/issues/4607) | NO_PROXY配置没生效 | 6 | Bug |

### Análise dos Temas Principais

**1. Perda de Histórico de Chat (#4620) — 12 comentários**
Issue crítico reportado por `duwey` na versão v1.1.8.post1. Usuários perdem mensagens do histórico ao alternar sessões. Afeta experiência de usuário gravemente. Reproduzível com screenshots incluidas.

**2. Parsing de Think do DeepSeek (#4051) — 10 comentários, Closed**
Problema de parsing do campo `think` no DeepSeek v4 flash resultando em respostas vazias ou presas no thinking tag. Resolvido ou em resolução (issue fechada).

**3. Suporte a ChatGPT-5.5 (#4474) — 8 comentários**
Usuários questionam suporte ao novo modelo da OpenAI. Indica demanda por rápida adoção de novos modelos. Community manager respondeu?

**4. Proxy NO_PROXY (#4607) — 6 comentários**
Variável de ambiente `NO_PROXY` não funciona corretamente na v1.1.8, causando tráfego indesejado por proxy.

---

## 5. Bugs e Estabilidade

### Bugs Abertos por Severidade

**🔴 Críticos (afetam fluxo principal)**

| Issue | Título | Impacto |
|-------|--------|---------|
| [#4620](https://github.com/agentscope-ai/QwenPaw/issues/4620) | Chat history disappeared | Perda de dados de conversa |
| [#4625](https://github.com/agentscope-ai/QwenPaw/issues/4625) | MiniMax-M2.5 retorna XML em vez de executar skills | Quebra de funcionalidade de agentes |
| [#4556](https://github.com/agentscope-ai/QwenPaw/issues/4556) | Voice transcription ignora Whisper configurado | Usa Web Speech API nativa ao invés do provider |

**🟠 Altos (afetam canais/integrações)**

| Issue | Título | Impacto |
|-------|--------|---------|
| [#4607](https://github.com/agentscope-ai/QwenPaw/issues/4607) | NO_PROXY não funciona | Proxy indesejado em todas requisições |
| [#4616](https://github.com/agentscope-ai/QwenPaw/issues/4616) | Dream awakening task error (WeChat) | Erro em task específica sem configuração WeChat |
| [#4521](https://github.com/agentscope-ai/QwenPaw/issues/4521) | HTTP API WeChat retorna sucesso sem entregar |ghost message problem |
| [#3984](https://github.com/agentscope-ai/QwenPaw/issues/3984) | context_check causa mensagens órfãs | UI mostra mensagens sem par usuário |

**🟡 Médios (UX/visual)**

| Issue | Título |
|-------|--------|
| [#4619](https://github.com/agentscope-ai/QwenPaw/issues/4619) | Inconsistências visuais no Web UI |
| [#4631](https://github.com/agentscope-ai/QwenPaw/issues/4631) | Ícone Python no lugar do ícone CoPaw Desktop |

### Bugs Recentemente Fechados
- [#4605](https://github.com/agentscope-ai/QwenPaw/issues/4605) — ValidationError em Gemini/Gemma (já fixado via [#4621](https://github.com/agentscope-ai/QwenPaw/pull/4621))
- [#4586](https://github.com/agentscope-ai/QwenPaw/issues/4586) — Filename encoding DingTalk (já fixado via [#4600](https://github.com/agentscope-ai/QwenPaw/pull/4600))
- [#4612](https://github.com/agentscope-ai/QwenPaw/issues/4612) — WeChat send_file_to_user instável (relacionado a [#4627](https://github.com/agentscope-ai/QwenPaw/pull/4627))

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em Desenvolvimento (PRs Abertos)

| PR | Título | Votes/Engajamento |
|----|--------|-------------------|
| [#4637](https://github.com/agentscope-ai/QwenPaw/pull/4637) | Customizable slash command menu | Alta demanda (issue #4633) |
| [#4628](https://github.com/agentscope-ai/QwenPaw/pull/4628) | Plugin export/download as ZIP | Útil para backup e sharing |
| [#4565](https://github.com/agentscope-ai/QwenPaw/pull/4565) | Unified access control system | Reforço de segurança multi-canal |
| [#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) | Tauri 2.x desktop app support | Desktop app nativo |
| [#4630](https://github.com/agentscope-ai/QwenPaw/pull/4630) | MCP marketplace com health check | Expansão de integrações |
| [#4622](https://github.com/agentscope-ai/QwenPaw/pull/4622) | DataPaw — data-analysis plugin | 12 habilidades BI |
| [#4580](https://github.com/agentscope-ai/QwenPaw/pull/4580) | Support extraSystemPrompt in console chat API | Context injection via API |

### Novas Features Solicitadas (Issues)

| Issue | Título | Demanda |
|-------|--------|---------|
| [#4634](https://github.com/agentscope-ai/QwenPaw/issues/4634) | Window size/position memory | Usabilidade desktop |
| [#4635](https://github.com/agentscope-ai/QwenPaw/issues/4635) | Mobile Responsive Design para WebUI | Usuários mobile |
| [#4624](https://github.com/agentscope-ai/QwenPaw/issues/4624) | Per-model LLM retry/concurrency config | Produção multi-modelo |
| [#4617](https://github.com/agentscope-ai/QwenPaw/issues/4617) | Remote Playwright endpoint para browser_use | Deploy em containers |
| [#4632](https://github.com/agentscope-ai/QwenPaw/issues/4632) | Reliable multi-line text write tool | Skill development |
| [#4613](https://github.com/agentscope-ai/QwenPaw/issues/4613) | Plugin agent hook support (register_agent_hook) | Plugin ecosystem |

### Sinais de Roadmap

1. **Desktop Nativo**: PR #3813 (Tauri) indica direção para app desktop standalone
2. **Plugin Ecosystem**: Diversos PRs de plugins (DataPaw, LightRAG integration) sugerem foco em extensibilidade
3. **MCP Expansion**: PR #4630 adiciona marketplace de MCP servers
4. **Access Control**: PR #4565 implementa sistema unificado de controle de acesso
5. **Multi-model Support**: Issue #4624 evidencia necessidade de config granular por modelo

---

## 7. Resumo de Feedback dos Usuários

### Dores Realçando Problemas

**🔴 Perda de Dados e Confiabilidade**
- *"Switch to a session and sometimes cannot find all chat history"* — #4620
- *"图片根本没有收到"* (imagem nunca chega) — #4612
- *"QwenPaw 返回成功消息, 但是微信实际却没有收到"* — #4521

**🟠 Incompatibilidades de Modelo**
- *"当前模型不支持多模态"* mas API suporta — #3707
- *"使用MiniMax-M2.5 的模型时，思考过程返回 XML格式"* — #4625
- *"ChatGPT-5.5...配置了好像不行"* — #4474

**🟡 UX e Descoberta**
- *"QwenPaw 有 20+ built-in commands, 但用户不知道它们存在"* — #4633
- *"左上角图标显示的是python的图标"* — #4631
- *"窗口都会重置为默认的 1280×800"* — #4634

### Cenários de Uso Identificados

1. **Produção Multi-modelo**: Usuários rodando MiniMax M2.7 + M2.5 simultaneamente com necessidades de rate limiting distintas
2. **Plugins Especializados**: Knowledge base (LightRAG), Data Analysis (DataPaw), BI skills
3. **Canais Corporativos**: DingTalk, WeChat iLink, Matrix com necessidade de ACL granular
4. **Automação via Cron**: Tarefas agendadas precisam de contexto limpo

### Satisfação/Insatisfação

**Pontos Positivos Indicados por Contribuições Ativas:**
- 22 PRs em 24h demonstra comunidade engajada
- Diversidade de contribuições (first-time contributors em múltiplos PRs)
- Resposta rápida a bugs críticos (fix de Gemini em <24h)

**Áreas de Frustração:**
- Bugs recorrentes em canais (WeChat/DingTalk)
- Modelos novos não suportados rapidamente
- Histórico de chat instável

---

## 8. Backlog que Merece Atenção

### Issues sem Resposta/Estagnadas

| Issue | Título | Idade | Status |
|-------|--------|-------|--------|
| [#4051](https://github.com/agentscope-ai/QwenPaw/issues/4051) | deepseek think parsing | ~16 dias | Closed, mas aguardando validação |
| [#3707](https://github.com/agentscope-ai/QwenPaw/issues/3707) | MiniMax image support | ~31 dias | Closed com workaround? |
| [#3984](https://github.com/agentscope-ai/QwenPaw/issues/3984) | context_check orphan messages | ~22 dias | **Sem assign ou milestone** |

### Issues Antigas com Alto Impacto

| Issue | Título | Idade | Prioridade |
|-------|--------|-------|------------|
| [#3984](https://github.com/agentscope-ai/QwenPaw/issues/3984) | context_check splitting messages | 22 dias | Alta — afeta integridade de dados |
| [#3707](https://github.com/agentscope-ai/QwenPaw/issues/3707) | MiniMax multimodal | 31 dias | Média — feature request |
| [#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) (PR) | Tauri desktop | ~29 dias | Estratégica — longo review |

### Recomendações de Priorização

1. **#4620** (Chat history disappeared) — Bug crítico com 12 comentários, precisa triagem imediata
2. **#4625** (MiniMax XML format) — Afeta execução de skills, quebra experiência principal
3. **#3984** (Orphan messages) — Problema de integridade de dados silencioso
4. **#4624** (Per-model config) — Feature request de produção com stakeholder claro

---

## Métricas Resumidas (24h)

| Métrica | Valor |
|---------|-------|
| Issues abertos/ativos | 17 |
| Issues fechados | 7 |
| PRs abertos | 12 |
| PRs fechados/merged | 10 |
| Releases | 0 |
| Engajamento total (comentários) | ~60+ |
| Contributors ativos | 15+ (estimado) |

**Índice de Saúde**: 🟢 **Bom** — Atividade alta, taxa de resolução saudável, sem acumulação de issues antigos críticos.

---

*Relatório gerado em 2026-05-23 08:00 UTC com base em dados do GitHub.*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-05-23

---

## 1. Panorama do Dia

O ecossistema ZeroClaw apresenta **alta atividade** nas últimas 24 horas, com 28 issues e 47 PRs atualizados. A prioridade imediata recai sobre **bugs de Severidade S1** (workflow bloqueado): problemas no canal WhatsApp (QR não aparece), Telegram (provider de visão ignorado silenciosamente) e Slack (token de bot sem suporte a variáveis de ambiente). Paralelamente, há um **concentrado de trabalho na interface TUI**, com uma dúzia de issues e PRs em progresso na branch `integration/zeroclaw-tui`, sinalizando um ciclo de desenvolvimento focado na experiência do terminal. A comunidade também demonstra maturidade em governança, com um RFC sobre Work Lanes e automação de board em discussão ativa.

---

## 2. Lançamentos

**Nenhum release nas últimas 24 horas.** O projeto não emitiu novas versões no período, embora a atividade de PRs e issues sugira que a branch `integration/zeroclaw-tui` pode estar se aproximando de um merge significativo para master.

---

## 3. Progresso do Projeto

### PRs Merged/Fechadas Recentemente

| # | Título | Impacto |
|---|--------|---------|
| [#6772](https://github.com/zeroclaw-labs/zeroclaw/pull/6772) | fix(runtime): transcode Windows shell output from system code page to UTF-8 | **Crítico** — resolve garbling de saída em consoles Windows não-UTF-8 (GBK, Shift_JIS, etc.), impactando usuários chineses e japoneses. |
| [#6833](https://github.com/zeroclaw-labs/zeroclaw/pull/6833) | feat: add Jina AI as web_search provider | Adiciona provedor alternativo de busca com 10M requisições gratuitas, sem cartão de crédito. |
| [#6845](https://github.com/zeroclaw-labs/zeroclaw/pull/6845) | fix(channels/whatsapp-web): convert LID to phone reply target | Corrige replies de DM no WhatsApp que eram silenciosamente descartados quando o JID usava formato LID. |

### PR Aberto em Destaque (Em Integração)

- [#6848](https://github.com/zeroclaw-labs/zeroclaw/pull/6848) — **Integration/zeroclaw tui**: Branch de integração que consolida múltiplas features TUI (chat, UX, ACP bridge, onboarding). Meta: unificar o trabalho fragmentado dos issues #6823–#6826 em um único PR stacking.

---

## 4. Temas Quentes da Comunidade

### Issues/PRs com Maior Engajamento

**1. [RFC: Work Lanes, Board Automation, and Label Cleanup](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)** — 4 comentários  
Proposta de governança para automatizar o roteamento de trabalho via PR lanes e rules de board, reduzindo carga manual de mantenedores. Rev. 1, com targeting para `0.80-beta1`.

**2. [bug: tool_filter_groups is a no-op for real MCP tools](https://github.com/zeroclaw-labs/zeroclaw/issues/6699)** — 6 comentários  
Bug de alto risco com duas falhas distintas: prefix-check incorreto no filtro de dispatch e falta de integração com deferred_loading. Considerado P1 pela severidade.

**3. [ ACP protocol extensions for diff/file-proposal](https://github.com/zeroclaw-labs/zeroclaw/issues/6820)** — 2 comentários, em progresso  
Extensão do protocolo ACP para permitir diffs lado a lado e counter-propostas durante ciclos de aprovação de edição de arquivos. Habilitará TUI e web dashboard.

---

## 5. Bugs e Estabilidade

### Severidade S1 — Workflow Bloqueado (4 issues P1)

| # | Problema | Canal/Área | Status |
|---|----------|------------|--------|
| [#6847](https://github.com/zeroclaw-labs/zeroclaw/issues/6847) | Canal WhatsApp não exibe QR na onboarding | `channel:whatsapp` | Acceptado |
| [#6841](https://github.com/zeroclaw-labs/zeroclaw/issues/6841) | `vision_provider` ignorado — imagens seguem para `providers.fallback` | Telegram | Acceptado |
| [#6844](https://github.com/zeroclaw-labs/zeroclaw/issues/6844) | `bot_token` do Slack não aceita variável de ambiente (regressão) | Slack | Acceptado |
| [#6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699) | `tool_filter_groups` inoperante para MCP tools reais (prefix bug) | Agent, MCP | Acceptado |

### Severidade S2 — Comportamento Degradado

- [#6836](https://github.com/zeroclaw-labs/zeroclaw/issues/6836): `setup.bat --minimal` produz ~26 MB em vez de ~6 MB esperados no Windows.
- [#6801](https://github.com/zeroclaw-labs/zeroclaw/issues/6801): `purge_namespace` deleta por `category` em vez de `namespace` no SQLite memory (closed, em progresso).
- [#6856](https://github.com/zeroclaw-labs/zeroclaw/issues/6856): `show_tool_calls` ausente no schema v3 do canal.
- [#6813](https://github.com/zeroclaw-labs/zeroclaw/issues/6813): Teste de dispatch paralelo com threshold de wall-clock frágil.

### Correção Importante Merged

[#6772](https://github.com/zeroclaw-labs/zeroclaw/pull/6772) resolve issue [#6704](https://github.com/zeroclaw-labs/zeroclaw/issues/6704) — saída do shell garbled em code pages Windows não-UTF-8 — usando `GetConsoleOutputCP()` para transcodificação runtime.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Feature TUI — Temas Dominantes

O cluster mais significativo de trabalho é a **interface de terminal (TUI)**, com pelo menos 8 issues e PRs interconectados:

- **[#6826](https://github.com/zeroclaw-labs/zeroclaw/issues/6826)** — Tracker: ZeroClaw TUI — binário standalone via Unix socket.
- **[#6824](https://github.com/zeroclaw-labs/zeroclaw/issues/6824)** — Tracker: TUI Agent Chat — renderização streaming com Ratatui.
- **[#6825](https://github.com/zeroclaw-labs/zeroclaw/issues/6825)** — Tracker: TUI UX — theming, keybindings, acessibilidade.
- **[#6823](https://github.com/zeroclaw-labs/zeroclaw/issues/6823)** — Tracker: TUI ACP Bridge — cliente JSON-RPC 2.0 sobre Unix socket.
- **[#6837](https://github.com/zeroclaw-labs/zeroclaw/issues/6837)** — Runtime RPC dispatch + Unix socket transport.
- **[#6817](https://github.com/zeroclaw-labs/zeroclaw/issues/6817)** — Session-scoped runtime overrides sem reload do daemon.
- **[#6818](https://github.com/zeroclaw-labs/zeroclaw/issues/6818)** — Flag `--ephemeral` para daemon com auto-terminate.
- **[#6819](https://github.com/zeroclaw-labs/zeroclaw/issues/6819)** — Protocolo de upload de arquivos/anexos via RPC.

### Novas Features Solicitadas

| # | Feature | Área | Risco |
|---|---------|------|-------|
| [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) | `MemoryStrategy` trait para desacoplar política de memória do backend | Memory, Runtime | High |
| [#6827](https://github.com/zeroclaw-labs/zeroclaw/issues/6827) | Suporte a jina.ai como provedor de web_search | Tool: web | Medium |
| [#6807](https://github.com/zeroclaw-labs/zeroclaw/issues/6807) | Endpoint customizável para API do Telegram | Telegram | Medium |
| [#6810](https://github.com/zeroclaw-labs/zeroclaw/issues/6810) | Feature e support matrix pública | Docs | Low |
| [#6859](https://github.com/zeroclaw-labs/zeroclaw/issues/6859) | Testes comportamentais para code-page Windows | Tests, Shell | Medium |

### Sinais de Roadmap

- **0.80-beta1** é referenciado no RFC de governança (#6808).
- A feature matrix (#6810) atenderá à demanda antiga de roadmap público (#3839).
- TUI aparece como prioritária para "power users, headless servers, e enclave deployments".

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

**Onboarding e configuração:**
> "Hi ZeroClaw team, First of all thanks for all the hardwork done here. Greatly appreciated. Best tool out there. Wishing way more stars. I am facing an issue at the time to onboard whatsapp channel, after com..." — [@MushiTheMoshi](https://github.com/zeroclaw-labs/zeroclaw/issues/6847)

- **WhatsApp onboarding quebrado** — QR code não aparece, bloqueando novos usuários.
- **Windows build inflado** — `setup.bat --minimal` produz 4x o tamanho esperado, frustando desenvolvedores Windows.

**Usabilidade de canais:**
- Slack não aceita `bot_token` via variável de ambiente, causando rejeição em ambientes containerizados.
- Telegram ignora `vision_provider` configurado, fazendo imagens irem para fallback incorreto.
- Discord: thread/forum posts invisíveis ao agente quando mencionados no meio de conversas.

**Usabilidade geral:**
- Falta `show_tool_calls` no schema v3, removendo visibilidade que existia na v2.
- `tool_filter_groups` não funciona para MCP tools, contradizendo a documentação.
- Memory `purge_namespace` opera na coluna errada, potencialmente deletando dados incorretos.

### Feedback Positivo

O tom dos relatórios inclui Appreciation explícita ("Best tool out there"), sugerindo alta satisfação geral apesar dos bugs.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Estagnadas

| # | Título | Criado | Idade | Prioridade |
|---|--------|--------|-------|------------|
| [#6158](https://github.com/zeroclaw-labs/zeroclaw/issues/6158) | zeroclaw-channels não compila com `--no-default-features` | 2026-04-27 | ~25 dias | P2 |
| [#6428](https://github.com/zeroclaw-labs/zeroclaw/pull/6428) | feat(channels/slack): backfill thread context on first agent encounter | 2026-05-06 | ~17 dias | — |
| [#6481](https://github.com/zeroclaw-labs/zeroclaw/pull/6481) | feat(jira): list_transitions, transition_ticket, create_ticket | 2026-05-06 | ~17 dias | — |
| [#5987](https://github.com/zeroclaw-labs/zeroclaw/pull/5987) | feat(nix): flake.nix com rust app + web ui | 2026-04-22 | ~31 dias | High |
| [#6009](https://github.com/zeroclaw-labs/zeroclaw/pull/6009) | feat(obs): enrich OTel tool spans | 2026-04-22 | ~31 dias | Medium |

### Problemas Processuais

- **RFC #6808** propõe automação de board para endereçar o volume de issues sem mantenedor.
- **Issue #6158** (compilação sem features) aberta há ~25 dias sem assignment — risco de regressão sustentável.
- **PRs com `needs-author-action`** (#6606, #6842, #6428, #5987, #6481) indicam gargalo de revisão ou feedback pendente do autor.

---

## Indicadores de Saúde do Projeto

| Indicador | Valor | Observação |
|-----------|-------|------------|
| Issues ativas (24h) | 28 | Alta atividade |
| PRs atualizados (24h) | 47 | Muito alto volume |
| Releases (24h) | 0 | Nenhuma emissão |
| Bugs S1 abertos | 4 | Atenção urgente necessária |
| Features em progresso (TUI) | 8+ | Foco claro de desenvolvimento |
| RFCs em discussão | 1 | Maturidade de governança |
| PRs aguardando autor | 5 | Possível gargalo de revisão |

**Conclusão:** ZeroClaw demonstra saúde vigorosa com alta atividade de comunidade e desenvolvimento focado. A prioridade imediata deve ser a resolução dos 4 bugs S1 (WhatsApp, Telegram, Slack, MCP) e o avanço do stack de integração TUI. O RFC de governança, se aceito, pode reduzir a pendência de issues não atribuídas que atualmente satura o board.

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*