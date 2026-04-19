# Resumo diário do ecossistema de agentes de IA 2026-04-19

> Issues: 7 | PRs: 12 | Projetos cobertos: 7 | Gerado em: 2026-04-19 01:36 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório NullClaw — 2026-04-19

## 1. Panorama do Dia

O projeto NullClaw apresenta **alta atividade de desenvolvimento** nesta data, com 12 pull requests abertos nas últimas 24h e 7 issues atualizadas. Nenhum release foi publicado e nenhum PR foi merged, indicando que a base de código está em fase intensiva de integração de features. A contribuição mais notável vem do mantenedor `manelsen`, responsável por 8 dos 12 PRs, com foco em refinamentos do sistema de ferramentas, habilidades (skills) e configuração. Do lado da comunidade, há 6 issues abertas demandando atenção, com destaque para bugs de estabilidade e integrações pendentes.

---

## 2. Lançamentos

**Nenhum release publicado nas últimas 24h.**

O projeto não registrou novas versões ou tags. A ausência de releases pode indicar que as mudanças pendentes nos PRs ainda estão em revisão ou aguardando validação antes de uma下一个 versão ser cortada.

---

## 3. Progresso do Projeto

Nenhum PR foi merged ou fechado nas últimas 24h. Todos os 12 PRs abertos permanecem em revisão ativa:

| PR | Tema | Contribuidor |
|----|------|--------------|
| [#844](https://github.com/nullclaw/nullclaw/pull/844) | Progress hints para A2A stream (ferramentas assíncronas) | manelsen |
| [#843](https://github.com/nullclaw/nullclaw/pull/843) | Fix em config save durante onboard | manelsen |
| [#842](https://github.com/nullclaw/nullclaw/pull/842) | Flag `--workspace` para agent e gateway | manelsen |
| [#841](https://github.com/nullclaw/nullclaw/pull/841) | Flag `--skill` para ativar skill na inicialização | manelsen |
| [#840](https://github.com/nullclaw/nullclaw/pull/840) | Suporte a subdiretórios para skills | manelsen |
| [#838](https://github.com/nullclaw/nullclaw/pull/838) | Proxy E2EE pantalaimon para Matrix | manelsen |
| [#837](https://github.com/nullclaw/nullclaw/pull/837) | Carregamento externo de tool_customizations_file | manelsen |
| [#836](https://github.com/nullclaw/nullclaw/pull/836) | Priorização de ferramentas por trigger word | manelsen |
| [#835](https://github.com/nullclaw/nullclaw/pull/835) | Overrides de system_prompt e enabled em tools | manelsen |
| [#834](https://github.com/nullclaw/nullclaw/pull/834) | Schema de configuração para customização de tools | manelsen |
| [#770](https://github.com/nullclaw/nullclaw/pull/770) | REST Admin API (status, config, modelos, cron) | vernonstinebaker |
| [#411](https://github.com/nullclaw/nullclaw/pull/411) | Sistema completo de customização de ferramentas | qxo |

**Análise:** O portfólio de PRs forma um ciclo de entrega coeso — o PR #834 estabelece o schema base, #835 e #837 adicionam implementação, #836 e #411 extendem com priorização por trigger. Juntos, representam uma reformulação significativa da arquitetura de ferramentas do NullClaw.

---

## 4. Temas Quentes da Comunidade

| Issue | Título | Comentários | Reações |
|-------|--------|-------------|---------|
| [#354](https://github.com/nullclaw/nullclaw/issues/354) | Service stops after Homebrew upgrade | 3 | 0 |
| [#376](https://github.com/nullclaw/nullclaw/issues/376) | DingTalk só envia, não recebe mensagens | 3 | 0 |
| [#826](https://github.com/nullclaw/nullclaw/issues/826) | Como usar gateway com Tailscale | 2 | 0 |
| [#821](https://github.com/nullclaw/nullclaw/issues/821) | `nullclaw version` mostra "dev" | 3 | 0 |
| [#665](https://github.com/nullclaw/nullclaw/issues/665) | Erro NoResponseContent | 2 | 0 |
| [#623](https://github.com/nullclaw/nullclaw/issues/623) | Adicionar ddgs ao web_search | 1 | 0 |

**Análise das demandas:**
- **Problema de distribuição (#354):** Path hardcoded no LaunchAgent plist após upgrade via Homebrew quebra o daemon. Issue com 3 comentários e recorrência (data de criação: 2026-03-07).
- **Integração DingTalk (#376):** Usuário questiona limitação unilateral do canal DingTalk — apenas envio implementado, sem capacidade de receber replies. Configuração mostra `"send only"` no gateway log.
- **Documentação de infraestrutura (#826):** Solicitação de guia para rodar NullClaw gateway atrás de Tailscale, gerando erro `NotImplemented` no túnel.
- **Metadados de build (#821):** versão "dev" em builds de source é considerada inútil — foi **fechada** nesta janela, sugerindo correção incoming.

---

## 5. Bugs e Estabilidade

### Bugs abertos (5)

| Severidade | Issue | Resumo |
|------------|-------|--------|
| **Alta** | [#354](https://github.com/nullclaw/nullclaw/issues/354) | Homebrew upgrade quebra path do serviço — daemon para silenciosamente |
| **Alta** | [#408](https://github.com/nullclaw/nullclaw/issues/408) | Parser de JSON de tool call extrai `:` como nome da ferramenta em vez de `memory_recall` |
| **Média** | [#665](https://github.com/nullclaw/nullclaw/issues/665) | Erro `error.NoResponseContent` no assembly Windows |
| **Média** | [#821](https://github.com/nullclaw/nullclaw/issues/821) *(fechada)* | `nullclaw version` retorna "dev" sem informação útil |

**#354 — Homebrew Upgrade Path Breaking**
O bug mais crítico em termos de impacto ao usuário: upgrades via `brew upgrade nullclaw` quebram a instalação porque o plist do LaunchAgent mantém paths versionados para a célula antiga. Usuários Affected perdem funcionalidade sem feedback. A issue está aberta há ~43 dias com 3 comentários, sugerindo necessidade de atenção dos mantenedores.

**#408 — Tool Call JSON Parser Bug**
Vulnerabilidade no parser que extrai incorretamente `:` como tool name quando o LLM gera JSON válido. Afeta a execução de ferramentas como `memory_recall`, comprometendo a funcionalidade do agente.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Enhancement requests (2)

| PR/Issue | Tema | Contribuidor |
|----------|------|--------------|
| [#376](https://github.com/nullclaw/nullclaw/issues/376) | Implementar recebimento de mensagens no DingTalk | Lancernix |
| [#623](https://github.com/nullclaw/nullclaw/issues/623) | Adicionar biblioteca `ddgs` como opção de web_search | montvid |

### Features em desenvolvimento (via PRs)

A pipeline de PRs revela direção clara do roadmap:

1. **Customização de Ferramentas** (PRs #834, #835, #836, #837, #411) — Sistema robusto de triggers, prioridades e overrides de system_prompt
2. **Skills Avançadas** (PRs #840, #841) — Hierarquia de diretórios e ativação por linha de comando
3. **Admin API** (PR #770) — Interface REST para menubar apps e clientes mobile
4. **E2EE Matrix** (PR #838) — Suporte a pantalaimon para criptografia ponta-a-ponta
5. **A2A Streaming** (PR #844) — Progress callbacks para ferramentas assíncronas
6. **Workspace Múltiplo** (PR #842) — Flag `--workspace` para instâncias isoladas

**Sinais de direção:** O projeto está investindo fortemente em **flexibilidade de configuração**, **modularidade de ferramentas** e **ecossistema de integrações** (Matrix E2EE, DingTalk, Tailscale). A Admin API sugere ambitions de distribuição em múltiplas plataformas cliente.

---

## 7. Resumo de Feedback dos Usuários

### Dores reais identificadas

| Cenário | Problema reportado |
|---------|-------------------|
| **Usuários Homebrew (macOS)** | Upgrade quebra instalação sem warning — NullClaw simplesmente para de funcionar |
| **Desenvolvedores Debian** | Builds de source mostram "dev" como versão — debugging de incidentes fica difícil |
| **Usuários Tailscale** | Gateway não funciona com túnel — arquitetura de rede overlay não suportada |
| **Usuários DingTalk** | Configuração completa não funciona bidirecionalmente —只得 enviar，无法接收 |
| **Usuários Windows** | Assembly oficial gera `NoResponseContent` error — falha no fluxo de resposta |

### Padrão de satisfação/insatisfação

- **Insatisfação recorrente:** Problemas de distribuição (Homebrew) e metadados de versão geram frustração por falta de profissionalização
- **Satisfação implícita:** A comunidade continua engajada, abre issues detalhadas e contributing PRs complexas — sugere confiança no projeto mesmo com bugs
- **Gap de documentação:** Múltiplos requests (Tailscale, DingTalk) indicam que a documentação atual não cobre cenários de deployment avançados

---

## 8. Backlog que Merece Atenção

### Issues sem resposta prolongada

| Issue | Idade | Status | Prioridade |
|-------|-------|--------|------------|
| [#354](https://github.com/nullclaw/nullclaw/issues/354) — Homebrew path breaking | ~43 dias | OPEN | 🔴 Alta |
| [#376](https://github.com/nullclaw/nullclaw/issues/376) — DingTalk receive mode | ~42 dias | OPEN | 🟡 Média |
| [#408](https://github.com/nullclaw/nullclaw/issues/408) — JSON parser bug | ~40 dias | OPEN | 🔴 Alta |
| [#665](https://github.com/nullclaw/nullclaw/issues/665) — Windows NoResponseContent | ~29 dias | OPEN | 🟡 Média |
| [#623](https://github.com/nullclaw/nullclaw/issues/623) — ddgs web_search | ~32 dias | OPEN | 🟢 Baixa |

### Ações recomendadas

1. **#354 (Homebrew)** — Prioridade máxima. Bug quebra instalações em produção. Solução requer dynamic path resolution ou symlink management no install script.
2. **#408 (Parser)** — Bug crítico que corrompe tool execution. Precisa de regress test e patch de parser.
3. **#376 (DingTalk)** — Feature request maduro (~42 dias) que sinaliza demanda de mercado Chinês. Avaliarviabilidade de implementation.
4. **#770 (Admin API)** — PR aberta há 14 dias com boa proposta técnica. Avaliação de mantenedor pendente há 14 dias.

---

## Métricas do Dia

| Métrica | Valor |
|---------|-------|
| Issues ativas abertas | 6 |
| Issues fechadas | 1 |
| PRs abertos | 12 |
| PRs merged/fechados | 0 |
| Releases | 0 |
| Contributors ativos (PRs) | 3 (manelsen, vernonstinebaker, qxo) |
| Comment threads em discussão | 14+ |

---

*Relatório gerado automaticamente com base nos dados públicos do GitHub em 2026-04-19. Projetado para análise de saúde de projeto open source em agentes de IA.*

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo — Ecossistema de Agentes de IA Open Source

**Data de referência:** 2026-04-19

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source demonstra maturidade crescente com distintos vetores de especialização. **ZeroClaw** lidera em atividade absoluta e velocidade de releases (2 betas em 24h), enquanto **Hermes Agent** e **NanoBot** investem em estabilidade de providers e memória de longo prazo. Observa-se convergência em três frontes: (1) resiliência de autenticação com múltiplos providers, (2) sistemas de memória consolidation, e (3) observabilidade enterprise. A fragmentação de mercado é evidente: NullClaw prioriza modularidade de ferramentas, PicoClaw mira automação mobile/browser, e IronClaw foca segurança cross-tenant. O segmento Windows apresenta-se como frente técnica negligenciada pela maioria dos projetos, conforme evidenciado pelos 4 bugs críticos do CoPaw e problemas de instalação do PicoClaw.

---

## 2. Comparação de Atividade

| Projeto | Issues Ativas | PRs Abertos | PRs Fechados (24h) | Releases (24h) | Bugs Críticos | Saúde |
|---------|---------------|-------------|---------------------|-----------------|---------------|-------|
| **ZeroClaw** | 45 | 23 | 15 | **2** | 3 S1 | 🟢 Estável-Alta |
| **Hermes Agent** | ~25 | ~25 | 25 | 0 | 3 críticos | 🟢 Estável |
| **NanoBot** | 12 | 16 | ~38 | 0 | 0 P0 (resolvidos) | 🟢 Estável |
| **IronClaw** | 8 | 43 | 7 | 0 | 3 HIGH | 🟢 Estável |
| **NullClaw** | 6 | 12 | 0 | 0 | 2 alta | 🟡 Intensiva |
| **CoPaw** | 10 | 9 | 1 | 0 | 4 alta | 🟡 Moderada |
| **PicoClaw** | 11 | 5 | 3 | 1 nightly | 2 alta | 🟡 Estável |

**Destaque:** ZeroClaw apresenta throughput 4x superior ao segundo lugar (Hermes Agent) em merges por dia, sinalizando maturidade de processo CI/CD. NanoBot destaca-se pela resolução rápida de bugs P0 (2 fechados em 24h). NullClaw permanece em fase de integração sem nenhum merge, sugerindo gargalo de code review ou requisitos de validação rigorosos.

---

## 3. Posicionamento do Projeto Principal (ZeroClaw)

### Vantagens Competitivas

| Dimensão | ZeroClaw | Pares |
|----------|----------|-------|
| **Velocidade de releases** | 2 betas/24h | Hermes: 0, NullClaw: 0, IronClaw: 0 |
| **Throughput CI** | 15 merges/24h | NanoBot: 38 (mas 54 updates totais) |
| **Arquitetura** | 14 crates Rust modular | Monorepo ou Python menos segmentado |
| **Maturidade de processo** | RFC formal (#5577), governance documentado | Apenas NullClaw e Hermes possuem processo análogo |
| **Canais** | Signal, Telegram, Webhook com retry nativo | PicoClaw: DingTalk, Feishu; IronClaw: Telegram |

### Diferenças Técnicas Marcantes

- **Rust vs Python:** ZeroClaw, IronClaw e PicoClaw usam Rust para performance; Hermes, NanoBot, NullClaw, CoPaw usam Python
- **Workspace modular:** ZeroClaw restructurou em 14 crates especializadas; IronClaw implementa epic de feature boundaries (#2599)
- **i18n via Mozilla Fluent:** RFC #5787 em discussão — abordagem mais profissional que hand-rolled solutions
- **Multi-agent RFC:** Proposta #5890 postada hoje, indicando ambição de escala

### Tamanho e Engajamento da Comunidade

| Indicador | ZeroClaw | Hermes | NanoBot |
|-----------|----------|--------|---------|
| Issues + PRs atualizados (24h) | **86** | 100 | 81 |
| Engajamento (comentários top issue) | 15 | 16 | 13 |
| PRs first-time-contributors | NR | NR | NR |
| RFCs em discussão formal | 2 | 0 | 0 |

ZeroClaw não domina em volume absoluto (Hermes tem mais updates totais), mas demonstra superioridade em **processo estruturado** e **governança**, além de leadership em arquitetura modular.

---

## 4. Focos Técnicos Compartilhados

### 4.1 Resiliência de Autenticação Multi-Provider

Problemas recorrentes afetam **5 de 8 projetos**:

| Projeto | Bug/Issue | Provider Afetado |
|---------|-----------|------------------|
| Hermes Agent | #7893 (16 comments) | Gemini — múltiplas credenciais conflitantes |
| Hermes Agent | #12127 | Gemini API_KEY_INVALID |
| PicoClaw | #2578 | openai_compat — Authorization header ausente |
| PicoClaw | #2584 | DeepSeek retorna 401 com key válida |
| NanoBot | #3206 | Gemini provider API key error |
| NanoBot | #3251 (CLOSED) | config.json `${VAR}` não parseado |
| NullClaw | #408 | JSON parser extrai `:` como tool name |
| IronClaw | #2653 | Secrets: prefer keychain over env |

**Padrão identificado:** Providers Gemini e openai_compat são os mais problemáticos. A comunidade demanda lógica de precedência de credenciais mais explícita e validação de schema de configuração.

### 4.2 Sistemas de Memória e Context

| Projeto | Feature | Status |
|---------|---------|--------|
| NanoBot | Consolidation ratio configurável (0.1-0.95) | PRs #3281, #3285 competing |
| NanoBot | maybe_consolidate_by_tokens() vs AutoCompact | Discussão técnica (#3274) |
| Hermes Agent | compress_context como Tool nativa | Issue #12213 |
| NullClaw | Sistema completo de customização de ferramentas | PR #411, #834-#837 |
| CoPaw | AgentMemory com retrieval triplo (vector+BM25+KG) | PR #3565 |
| CoPaw | Refatoração auto-memory, auto-dream | PR #3548 |
| ZeroClaw | Dream Mode (background consolidation) | Feature #5849 |

**Convergência:** O setor reconhece que memory management é diferenciador competitivo. NanoBot e CoPaw lideram com arquiteturas de retrieval híbrido.

### 4.3 Observabilidade e DevOps

| Projeto | Feature | Prioridade |
|---------|---------|------------|
| NanoBot | Latência por stage (STT/LLM/TTS) | PR #3293 |
| NanoBot | On_start/on_stop lifecycle | PR #3291 |
| Hermes Agent | Detecção adaptativa de tema | PR #12337 |
| PicoClaw | OTel GenAI support | Issue #1731 |
| IronClaw | Gateway on_start/on_stop | Em epic #2599 |
| IronClaw | E2E tests hardened | PR #2656 |

**Sinal:** Demanda enterprise por observabilidade nativa (OpenTelemetry) emerge em PicoClaw, enquanto projetos estabelecidos implementam lifecycle hooks.

### 4.4 Questões de Distribuição e Instalação

| Projeto | Problema | Impacto |
|---------|----------|---------|
| NullClaw | Homebrew upgrade quebra path | Crítico — #354 há 43 dias |
| CoPaw | copaw init hang no Windows | Crítico — #2943 há 15 dias |
| CoPaw | WORKING_DIR migration .copaw → .qwenpaw | Alta — #3356 (19 comments) |
| CoPaw | Desktop.bat timeout 300s | Alta — #3555 |
| PicoClaw | Self-upgrade ausente | Enhancement #618 (9 comments) |
| ZeroClaw | Web dashboard não disponível out-of-box | S1 — #4866 |

**Padrão:** Instaladores e distribusi são ponto fraco共通 em todos os projetos. Homebrew (macOS) e Windows são plataformas mais negligenciadas que Linux.

---

## 5. Análise de Diferenciação

### 5.1 Por Público-Alvo

| Projeto | Público Primário | Característica |
|---------|------------------|----------------|
| **NullClaw** | Desenvolvedores avançados | Modularidade máxima, A2A streaming, E2EE Matrix |
| **NanoBot** | Usuários gerais | CLI simples, routing automático de modelos |
| **Hermes Agent** | Usuários multi-provider | Suporte extensivo a providers, slash commands |
| **PicoClaw** | Usuários mobile/China | Android, DingTalk, Feishu, browser automation |
| **IronClaw** | Enterprise/segurança | Cross-tenant security, multi-account credentials |
| **CoPaw** | Usuários Windows | Desktop app, Console web, bilíngue EN/ZH |
| **ZeroClaw** | Desenvolvedores/operadores | Rust, sandboxing, Signal, Docker-first |

### 5.2 Por Arquitetura Técnica

```
┌─────────────────────────────────────────────────────────────────┐
│                      ARQUITETURA                                 │
├──────────────┬──────────────┬──────────────┬─────────────────────┤
│    Rust      │   Python     │   Python     │     Rust            │
│  ZeroClaw    │  NanoBot     │  Hermes      │   IronClaw          │
│  PicoClaw    │  NullClaw    │  CoPaw       │                     │
│              │  (parcial)   │              │                     │
├──────────────┼──────────────┼──────────────┼─────────────────────┤
│ High perf    │ Flexibility  │ Ecosystem    │  Security-first     │
│ + Sandboxing │ + prototyping│ + providers   │  + enterprise       │
└──────────────┴──────────────┴──────────────┴─────────────────────┘
```

### 5.3 Por Specialização Vertical

| Área | Projetos Líderes | Gap |
|------|------------------|-----|
| **Memória avançada** | NanoBot, CoPaw | IronClaw, Hermes carecem de arquitetura similar |
| **Mercado chinês** | PicoClaw (Feishu, DingTalk) | NanoBot, Hermes sem integração |
| **Automação mobile** | PicoClaw (Android, Termux) | Nenhum competidor direto |
| **Segurança enterprise** | IronClaw (MT-2, keychain) | Gap em Hermes, NanoBot |
| **E2EE** | NullClaw (Matrix/pantalaimon) | Nenhum competidor |
| **Voice/STT** | ZeroClaw (Whisper.cpp) | PicoClaw, Hermes em desenvolvimento |

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração

| Ranking | Projeto | Métrica de Velocidade | Interpretação |
|---------|---------|------------------------|---------------|
| 🥇 | **NanoBot** | 38 PRs merged/closed em 24h | Velocidade extrema — possível team dedicado |
| 🥈 | **Hermes Agent** | 25 PRs merged/closed em 24h | Equipe robusta de manutenção |
| 🥉 | **ZeroClaw** | 15 PRs merged em 24h + 2 releases | Maturidade de processo CI/CD |
| 4 | **IronClaw** | 7 PRs merged em 24h | Estável mas não agressivo |
| 5 | **PicoClaw** | 3 PRs merged em 24h | Equipe menor mas consistente |
| 6 | **NullClaw** | 0 PRs merged em 24h | Fase de integração — aguardando validação |
| 7 | **CoPaw** | 1 PR merged em 24h | Gargalo de review |

### 6.2 Qualidade de Engajamento

| Projeto | Top Issue Comments | RFC/Processo Formal | Bug Resolution |
|---------|---------------------|---------------------|----------------|
| **Hermes Agent** | 16 (Gemini provider) | ❌ | Rápida (25 merges/24h) |
| **CoPaw** | 19 (Windows migration) | ❌ | Lenta (1 merge/24h) |
| **ZeroClaw** | 15 (Dashboard) | ✅ RFC #5787, #5890 | Rápida + releases |
| **NanoBot** | 13 (Memory system) | ❌ | Rápida (P0 resolvidos) |
| **NullClaw** | 3 (Homebrew) | ❌ | Estagnada (43 dias #354) |

**Insights:**
- **Hermes Agent** combina alto volume de issues com rápida resolução — Indicador de projeto healthy com users ativos reportando bugs
- **CoPaw** tem engajamento alto mas baixa velocidade de resposta — Gargalo de mantenedores
- **ZeroClaw** institucionalizou RFC process, diferenciando-se em governança

### 6.3 First-Time Contributors

| Projeto | Sinais de FTI |
|---------|---------------|
| NanoBot | 16 contributors ativos em PRs |
| CoPaw | 3 PRs de first-time-contributors em 24h |
| Hermes Agent | NR (indicado por diversidade de PRs) |
| PicoClaw | NR |
| NullClaw | Apenas 3 contribuidores ativos |

**ZeroClaw e Hermes** carecem de menção a FTI, sugerindo curva de entrada mais íngreme ou base de contribuidores madura fixa.

---

## 7. Sinais de Tendência

### 7.1 Tendências Fortes (>3 projetos)

| Tendência | Evidência | Implicação |
|-----------|-----------|------------|
| **LLMs locais/on-premise** | #12340 (Hermes), #3542 (CoPaw), #2583 (PicoClaw) — problemas com Ollama, gemma4, qwen3.5 | Crescimento de demanda por inference local para privacy/ custo |
| **Mercado asiático** | PicoClaw: Feishu, DingTalk; IronClaw: Aliyun (#1446); CoPaw: bilíngue EN/ZH | Expansão inevitável para providers chineses |
| **Memory architecture** | 4+ projetos com PRs/issues dedicados | Diferenciação técnica crítica em 2026 |
| **Observabilidade enterprise** | OTel em PicoClaw, latency metrics em NanoBot, lifecycle hooks em IronClaw/Hermes | Adoção corporativa requer métricas nativas |
| **Windows como segunda classe** | CoPaw: 4 bugs críticos; PicoClaw: desktop hang, init issues | Oportunidade para primeiro-mover em compatibilidade |

### 7.2 Tendências Emergentes (<3 projetos)

| Tendência | Projetos | Descrição |
|-----------|----------|-----------|
| **Multi-agent orchestration** | ZeroClaw (#5890), NanoBot (Discord bot-to-bot) | Escalonamento de uso para múltiplos agentes |
| **Auto-evolution/self-improvement** | Hermes (#11692), CoPaw (#3470) | Agentes que modificam próprio comportamento |
| **Meeting intelligence** | IronClaw (#91) — transcrição, diarization, follow-up | Pipeline de produtividade empresarial |
| **Desired-state planning** | Hermes (#12327) | User define goals, agent rastreia gap |
| **Dream mode/consolidation idle** | ZeroClaw (#5849), NanoBot (consolidate ratio) | Background learning durante inatividade |

### 7.3 Problemas Técnicos Recorrentes (Dívida Técnica)

| Problema | Frequência | Solução Demandada |
|----------|-----------|-------------------|
| Providers retornam 400 com malformed tool calls | Hermes (#11001), NullClaw (#408), ZeroClaw (#5813) | Robustness na parsing layer |
| Config `${VAR}` resolution | NanoBot (#3251),

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório de Projeto — NanoBot (HKUDS/nanobot)
## Data: 2026-04-19

---

## 1. Panorama do Dia

NanoBot mantém um ritmo de desenvolvimento intenso, com **27 issues e 54 PRs atualizados nas últimas 24h**. A taxa de fechamento de PRs é notável (38 merged/closed vs. 16 abertos), indicando uma equipe ativa revisando e integrando contribuições. Nenhuma release foi publicada hoje, mas várias funcionalidades importantes estão em pipeline aberto. Os temas dominantes giram em torno do **sistema de memória/consolidação**, **estabilidade de providers**, e **melhorias de observabilidade** (latência e profiling). A comunidade demonstra engajamento substancial, com issues de feedback detalhado e múltiplas propostas de features concorrentes.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

O projeto nãoemitiu novas versões desde o período analisado. Contributors estão focados em fechar PRs pendentes antes de um próximotag.

---

## 3. Progresso do Projeto

### PRs Fechados/Merged (8 mais relevantes)

| # | Título | Impacto |
|---|--------|---------|
| [#3271](https://github.com/HKUDS/nanobot/pull/3271) | fix(cli): respect sys.stdout.isatty() in stream renderer | Corrige poluição visual em containers Docker/exec - output misturado com escape sequences |
| [#3109](https://github.com/HKUDS/nanobot/pull/3109) | feat: add lightweight model router | Routing automático de tarefas simples para modelo barato (#3070) |
| [#3287](https://github.com/HKUDS/nanobot/pull/3287) | feat: add issue templates | Templates estruturados para bug reports e feature requests |
| [#3289](https://github.com/HKUDS/nanobot/pull/3289) | fix: prevent GitStore nested repos | Corrige criação de `.git` aninhado e sobrescrita de `.gitignore` |
| [#3112](https://github.com/HKUDS/nanobot/pull/3112) | fix(config): return provider default api base | Alinha resolução de config com construção runtime de providers |
| [#3125](https://github.com/HKUDS/nanobot/pull/3125) | fix: harden cron tool contract | Melhora mensagens de erro e validação do contrato cron |
| [#3281](https://github.com/HKUDS/nanobot/pull/3281) | feat(memory): make consolidate ratio configurable | Ratio de consolidação configurável via `consolidationRatio` (0.1-0.95) |
| [#3280](https://github.com/HKUDS/nanobot/pull/3280) | fix(discord): allow bot-to-bot messaging | Permite setups multi-agente no Discord (antes bloqueava todos os bots) |

### Destaque: Model Router (#3109)
Implementa routing automático baseado na natureza da tarefa — conversational simples vão para modelo barato, código/debugging/multi-tool continuam no modelo principal. Zero-dependency implementation.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| # | Título | Comentários | 👍 | Categoria |
|---|--------|-------------|----|-----------|
| [#3227](https://github.com/HKUDS/nanobot/issues/3227) | Limitações do sistema de memória em projetos longos | 13 | 4 | 🔴 Feedback |
| [#3206](https://github.com/HKUDS/nanobot/issues/3206) | Gemini provider API key error | 5 | 0 | 🐛 Bug |
| [#3274](https://github.com/HKUDS/nanobot/issues/3274) | maybe_consolidate_by_tokens() vs AutoCompact._archive() strategy | 4 | 0 | ❓ Question |
| [#3220](https://github.com/HKUDS/nanobot/issues/3220) | Infinite empty tool-call loop (bug + good first issue) | 4 | 0 | 🐛 Bug |

### Análise de Demandas

**#3227 — Sistema de Memória em Longa Escala** (HOT)
Usuário reportou limitações do pipeline `history.jsonl` → `MEMORY.md` + Dream para reter detalhes em sessões prolongadas. Issue com 13 comentários demonstra preocupação real da comunidade sobre escalabilidade. Já existem PRs concorrentes (#3285, #3281) abordando ratios configuráveis.

**#3274 — Duas Estratégias de Compressão**
Discussão técnica sobre `maybe_consolidate_by_tokens()` vs `AutoCompact._archive()` — ambas geram summaries mas com estratégias de injeção diferentes no prompt. Indica necessidade de unificação ou documentação clara.

**#3206 — Erro de Autenticação Gemini**
Multiple credentials no request indica problema de merge de config/environment variables. Bug affecta usability imediata.

---

## 5. Bugs e Estabilidade

### Por Severidade

#### 🔴 Alta Severidade (P0/P1)
| # | Título | Status | Impacto |
|---|--------|--------|---------|
| [#3251](https://github.com/HKUDS/nanobot/issues/3251) | config.json `${VAR}` syntax not parsed (P0) | CLOSED | Autenticação falha silenciosamente há 78+ horas |
| [#3220](https://github.com/HKUDS/nanobot/issues/3220) | Infinite empty tool-call loop | CLOSED | Gateway para de responder com APIs non-compliant |

#### 🟡 Média Severidade
| # | Título | Status | Impacto |
|---|--------|--------|---------|
| [#2804](https://github.com/HKUDS/nanobot/issues/2804) | DuckDuckGo hangs indefinitely | OPEN | Bloqueia processamento de sessão inteira |
| [#3256](https://github.com/HKUDS/nanobot/issues/3256) | Mid-stream truncation não é retry | CLOSED | Respostas parciais tratadas como sucesso |
| [#2980](https://github.com/HKUDS/nanobot/issues/2980) | GitStore nested repo init | CLOSED | Sobrescreve workspace .gitignore |

#### 🟢 Baixa Severidade / UX
| # | Título | Status | Impacto |
|---|--------|--------|---------|
| [#3265](https://github.com/HKUDS/nanobot/issues/3265) | Nanobot UI dumps cursor/spinner junk | OPEN | Poluição visual em non-TTY |
| [#3062](https://github.com/HKUDS/nanobot/issues/3062) | Can't access Windows Desktop files | CLOSED | Windows compatibility |

### Tendência
**Melhoria em estabilidade**: Bugs P0 anteriores (#3251 config parsing, #3220 infinite loop) foram fechados. Foco atual em edge cases de providers e memory consolidation.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em PRs Abertos (alta probabilidade de merge)

| # | Título | Objetivo | Alignamento |
|---|--------|----------|-------------|
| [#3293](https://github.com/HKUDS/nanobot/pull/3293) | Opt-in per-turn latency metrics | STT/LLM/TTS pipeline timing (#3257) | Observabilidade |
| [#3291](https://github.com/HKUDS/nanobot/pull/3291) | Gateway on_start/on_stop lifecycle | Notificações de startup/shutdown | DevOps |
| [#3290](https://github.com/HKUDS/nanobot/pull/3290) | MCP reconnect on ClosedResourceError | Resilience com Docker restart | Estabilidade |
| [#3268](https://github.com/HKUDS/nanobot/pull/3268) | Regex blocklist para channels_config | Bloquear modificações perigosas | Segurança |

### Features Solicitadas em Issues

| # | Título | Demanda | Potencial |
|---|--------|---------|-----------|
| [#3270](https://github.com/HKUDS/nanobot/issues/3270) | Configurable compaction ratio | 3 comments | ✅ Já em PR (#3285) |
| [#3027](https://github.com/HKUDS/nanobot/issues/3027) | Agent Checkpointing & Resume | Rescue long-running loops | 🔶 Medium |
| [#3292](https://github.com/HKUDS/nanobot/issues/3292) | Session-Level Focus Tool | Anchor attention across interruptions | 🔶 Medium |
| [#3282](https://github.com/HKUDS/nanobot/issues/3282) | Customize dream/skill drift | Controlar drift behavior | 🔶 Medium |
| [#2853](https://github.com/HKUDS/nanobot/issues/2853) | Gemini Sub Agent completion details | Melhor logging | 🟢 Low effort |

### Sinais de Roadmap Imerdiatos
1. **Memory consolidation** — Ratio configurável (0.1-0.95), múltiplas implementações competindo
2. **Observability** — Latência por stage em pipelines de voz
3. **Provider resilience** — Circuit breaker para Responses API fallback
4. **Queue bounds** — Prevenção de memory growth no message bus

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Categoria | Problema | Frequência | Sentimento |
|-----------|----------|------------|------------|
| **Memória/Context** | Sistema atual não retém detalhes em projetos longos | Alta | Frustrado mas construtivo |
| **Provider Errors** | Autenticação silenciosa, truncation sem retry | Média | Impaciente |
| **DevOps** | Sem feedback de lifecycle em systemd | Média | Demandando |
| **Discord/Canal** | Multi-agent setups bloqueados | Baixa | Técnico |
| **Uninstall/CLI** | Dificuldade de uninstall e cleanup | Baixa (1 user) | Frustrado |

### Cenários de Uso Emergentes
- **Voice pipelines** (STT → LLM → TTS) — Latência de 35-60s sendo investigada
- **Long-running agents** — Necessidade de checkpoint/resume
- **Multi-agent orchestration** — Discord bot-to-bot, sub-agents
- **Enterprise config** — Environment variable resolution em produção

### Satisfação Geral
**Positiva** — Issues de feedback (#3227) elogiam a codebase ("limpa, leve, fácil de explorar"). Bugs críticos estão sendo resolvidos rapidamente. Stack de contribuições saudável com ~16 contributors ativos em PRs.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta há >7 dias

| # | Título | Criado | Status | Prioridade |
|---|--------|--------|--------|------------|
| [#3047](https://github.com/HKUDS/nanobot/issues/3047) | Dream memory consolidation issues | 2026-04-11 | OPEN | 🔴 |
| [#2853](https://github.com/HKUDS/nanobot/issues/2853) | Gemini Sub Agent completion details | 2026-04-06 | OPEN | 🟡 |
| [#2709](https://github.com/HKUDS/nanobot/issues/2709) | Streaming required >10min error | 2026-04-01 | OPEN | 🟡 |
| [#2071](https://github.com/HKUDS/nanobot/issues/2071) | DuckDuckGo Web Search Not Working | 2026-03-15 | OPEN | 🟡 |

### PRs Abertos com Potencial

| # | Título | Criado | Age | Bloqueio |
|---|--------|--------|-----|----------|
| [#2526](https://github.com/HKUDS/nanobot/pull/2526) | Preserve user message/tool calls on /stop | 2026-03-26 | 24 dias | Needs review |
| [#3137](https://github.com/HKUDS/nanobot/pull/3137) | Unified manage_skill tool | 2026-04-14 | 5 dias | Needs review |

### Recomendações

1. **Triagem urgente**: #3047 (Dream consolidation) tem 2 comments mas nenhum movimento há 8 dias — impacto direto na estabilidade de memória
2. **Revisão de PRs antigos**: #2526 (~24 dias) resolve perda de contexto no /stop — feature valiosa dormindo
3. **Consolidação de PRs memory**: Dois PRs (#3285, #3281) implementam ratio configurável — unificar antes de merge
4. **DuckDuckGo**: #2071 e #2804 parecem relacionados — unificar investigação

---

## Métricas de Saúde do Projeto (2026-04-19)

| Indicador | Valor | Tendência |
|-----------|-------|-----------|
| Issues ativas (24h) | 12 | Neutra |
| PRs abertos | 16 | Neutra |
| PRs mergeados (24h) | ~38 | ✅ Positiva |
| Release activity | 0 | Neutra |
| Bug close rate | Alto | ✅ Positiva |
| Community engagement | Alto (13+ comments em issue) | ✅ Positiva |

---

*Relatório gerado automaticamente com base em dados GitHub de 2026-04-19. Para atualizações em tempo real, consulte [github.com/HKUDS/nanobot](https://github.com/HKUDS/nanobot).*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-04-19

---

## 1. Panorama do Dia

O Hermes Agent mantém um nível de atividade intenso, com 50 issues e 50 PRs atualizados nas últimas 24h. A equipe de manutenção demonstra forte ritmo de merges, com 25 PRs fechados/merged no período. Não há novas releases registradas. O estado geral do projeto reflete uma base de código ativa com foco em estabilização de provedores de IA, especialmente a integração com modelos Gemini/Google, além de melhorias incrementais em gateways e usabilidade. A saúde comunitária permanece robusta, com diversas issues de alta participação sinalizando demandas recorrentes.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.** O último ciclo de releases permanece sem movimento, sugerindo que a equipe pode estar em fase de acumulação de patches antes de um próximo tag.

---

## 3. Progresso do Projeto

### PRs Fechados/Merged Relevantes

| # | PR | Descrição | Impacto |
|---|-----|-----------|---------|
| [#12338](https://github.com/NousResearch/hermes-agent/pull/12338) | fix: Kimi provider slug mismatch | Resolve fallback silencioso ao trocar para modelo "Kimi For Coding" | 🔧 UX/Gateway |
| [#12337](https://github.com/NousResearch/hermes-agent/pull/12337) | fix: adaptive color scheme for light terminal | Detecção automática de background claro + seleção de tema | 🎨 Usabilidade |
| [#12336](https://github.com/NousResearch/hermes-agent/pull/12336) | fix: preserve dots in Bedrock inference-profile IDs | Evita HTTP 400 em perfis como `us.anthropic.claude-sonnet-4-5-...` | 🔧 Provider/AWS |
| [#12334](https://github.com/NousResearch/hermes-agent/pull/12334) | fix(gateway): slash commands never interrupt a running agent | ~27 comandos slash corrigidos para retornar "busy — /stop first" | 🐛 Estabilidade |
| [#12339](https://github.com/NousResearch/hermes-agent/pull/12339) | fix(gateway): close adapter resources when connect() fails | Elimina warnings de `Unclosed client session` e tasks leaked | 🐛 Recursos |
| [#12184](https://github.com/NousResearch/hermes-agent/pull/12184) | fix(gateway): cron cleanup on failure + session finalize guard | Corrige leak de daemon thread no shutdown | 🐛 Cron/Gateway |
| [#12298](https://github.com/NousResearch/hermes-agent/pull/12298) | feat(skills): add touchdesigner-mcp skill | Integração com TouchDesigner via twozero MCP (36 tools) | ✨ Integração |
| [#12332](https://github.com/NousResearch/hermes-agent/pull/12332) | fix(gateway): mark only still-running sessions resume_pending | Correção de regressão no drain-timeout | 🐛 Gateway |
| [#6100/#6056](https://github.com/NousResearch/hermes-agent/pull/6100) | fix(gateway/telegram): fall back to chat.id when from_user is None | Corrige lockout de usuários em DMs em edge cases | 🐛 Telegram |
| [#3072](https://github.com/NousResearch/hermes-agent/pull/3072) | feat(cli): support whole-word deletion in TUI | Alt+Backspace para deleção de palavra inteira | 🎨 CLI/TUI |

**Destaque:** A correção de ~27 slash commands interrompendo agentes em execução (#12334) representa um bug de UX significativo que estava presente há tempo. A detecção adaptativa de tema (#12337) resolve uma dor de longa data em terminais claros.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (Comentários + Reações)

| # | Título | Comentários | 👍 | Status | Tema |
|---|--------|-------------|----|--------|------|
| [#7893](https://github.com/NousResearch/hermes-agent/issues/7893) | HTTP 400 "Multiple authentication credentials" com Gemini | 16 | 0 | CLOSED | 🔴 Provedor Gemini |
| [#2706](https://github.com/NousResearch/hermes-agent/issues/2706) | Response truncated due to output length limit | 8 | 0 | CLOSED | 📏 Limites de output |
| [#12127](https://github.com/NousResearch/hermes-agent/issues/12127) | HTTP 400 API_KEY_INVALID com Google Provider | 6 | 2 | CLOSED | 🔴 Provedor Gemini |
| [#9782](https://github.com/NousResearch/hermes-agent/issues/9782) | nix-darwin / darwinModules support | 6 | 0 | CLOSED | 🛠️ Instalação/macOS |
| [#5472](https://github.com/NousResearch/hermes-agent/issues/5472) | send_message não targeting Discord session atual | 4 | 0 | OPEN | 💬 Discord/Gateway |
| [#11692](https://github.com/NousResearch/hermes-agent/issues/11692) | Receipts para self-improving agents | 4 | 0 | OPEN | 🧠 Auto-modificação |
| [#4983](https://github.com/NousResearch/hermes-agent/issues/4983) | Native Google GenAI Provider para Gemini | 4 | 2 | CLOSED | 🔴 Provider Feature |

### Análise de Demandas

**🔴 Gemini Provider Dominates:** 4 das top 7 issues mais comentadas são relacionadas a problemas com a integração nativa do Gemini. O tema #7893 (16 comentários) discute o erro "Multiple authentication credentials received" — indica que a lógica de credenciais está conflitando quando o usuário tem múltiplas fontes de API key (GEMINI_API_KEY e Vertex AI). Este é um padrão recorrente que sugere necessidade de refatoração na resolução de credenciais.

**📏 Limites de Contexto:** Issue #2706 (8 comentários) aborda truncamento de respostas por hitting max output tokens — a comunidade sinaliza que o rollback para último turn completo pode ser disruptivo.

**🛠️ macOS/Nix Ecosystem:** Issue #9782 demonstra demanda por suporte a nix-darwin, sinalizando base de usuários avançados em ambientes Nix.

---

## 5. Bugs e Estabilidade

### Por Severidade (baseado em impacto funcional)

| Severidade | Qtd | Exemplos |
|------------|-----|----------|
| 🔴 Crítica | 3 | Death spiral por 400 errors (#11001), malformed tool calls poisoning session (#4662), cron delivery failures silenciosos (#5861) |
| 🟠 Alta | 5 | Gemini API_KEY_INVALID (#12127, #12168), MiniMax tool call errors (#12167), HOME semantics em skill configs (#12260) |
| 🟡 Média | 8 | Discord session targeting (#5472), Kimi provider fallback (#12296), MCP OAuth path stripping (#11838) |
| 🟢 Baixa | 6 | Text legibilidade em terminal claro (#12330), TUI input whole-word deletion (#3072), suppressed_sources dead config (#7863) |

### Padrões de Bugs Identificados

1. **HTTP 400 como loop de morte (#11001):** Modelos não-OpenAI-compliant (ex: GLM via Ollama) retornam 400 em tool calls malformed → Hermes reenvia → loop infinito. Este é um bug de resiliência sistêmica.

2. **Credenciais conflituosas (#7893, #12127, #12168):** Usuários com múltiplas API keys (especialmente Gemini via AI Studio + Vertex) enfrentam erros de autenticação. O sistema de credential pool precisa de lógica de precedência mais explícita.

3. **Entrega de cron silenciosamente falha (#5861):** Jobs que executam mas falham em delivery (Discord/Telegram) são marcados "ok" — users perdem visibilidade de falhas em relatórios agendados.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features com Alto Potencial

| # | Título | Autor | 👍 | Descrição |
|---|--------|-------|----|-----------|
| [#12340](https://github.com/NousResearch/hermes-agent/issues/12340) | Make auto skill-save configurable | silvdoche | 0 | Remover hardcoded prompts de skill review que estressam LLMs locais em high context |
| [#12327](https://github.com/NousResearch/hermes-agent/issues/12327) | Desired-state planning engine | teknium1 | 0 | Motor de planejamento onde usuário define goals e Hermes rastreia gap current vs desired |
| [#12238](https://github.com/NousResearch/hermes-agent/issues/12238) | Built-in Automatic Backup & Version Control | salem221094 | 2 | Auto-backup nativo para ~/.hermes/ — memória, skills, histórico |
| [#12213](https://github.com/NousResearch/hermes-agent/issues/12213) | Add compress_context como Tool nativa | D-dracula | 0 | Expor /compress como tool que o agent pode chamar autonomamente |
| [#10656](https://github.com/NousResearch/hermes-agent/issues/10656) | Add script_skip_if_empty para cron | jneeee | 0 | Pular chamada LLM quando script retorna output vazio |

### PRs de Feature Abertos

| # | Título | Autor | Descrição |
|---|--------|-------|-----------|
| [#12117](https://github.com/NousResearch/hermes-agent/pull/12117) | feat: /notify HTTP endpoint | H1an1 | Webhook endpoint para push notifications externas (match alerts, webhooks) |
| [#12054](https://github.com/NousResearch/hermes-agent/pull/12054) | feat(api_server): per-merchant identity headers | apmzoom | Headers HTTP para multi-tenant deployments isolados |
| [#5723](https://github.com/NousResearch/hermes-agent/pull/5723) | feat(cli): add /caveman toggle | ZK-Snarky | Compressão de respostas (~75% menos tokens) via slash command |
| [#9846](https://github.com/NousResearch/hermes-agent/pull/9846) | Feat/termux install path | adybag14 | Instalação e bug fixes para Termux |
| [#9194](https://github.com/NousResearch/hermes-agent/pull/9194) | fix(deps): add hindsight-client as optional | jbotwell | Dependência opcional para NixOS/uv2nix/Docker builds |

**Sinais de Roadmap:** A feature #12340 (skill-save configurável) de teknium1 sugere atenção à experiência com LLMs locais. A #12327 (desired-state planning) indica expansão do escopo do agent para life management. A documentação adicionada em [#12335](https://github.com/NousResearch/hermes-agent/pull/12335) sobre vLLM/Ollama sinaliza foco em local inference.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Dor | Evidência | Impacto |
|-----|-----------|---------|
| **Instabilidade do Gemini Provider** | #7893 (16 comentários), #12127, #12168, #4983 | 🔴 Alta — users com setups legítimos não conseguem usar Gemini |
| **Contexto/token limits estressantes** | #2706, #12340 | 🟠 Média — frustração com truncamento e custos |
| **Edge cases em gateways quebram UX** | #5472 (Discord targeting), #5861 (silent cron failures), #6100 (Telegram DMs) | 🟠 Média — experiência imprevisível em plataformas |
| **Configuração Docker/complexa** | #12188, #9782 | 🟡 Média — barreira de entrada para container users |
| **LLMs locais estressados por prompts hardcoded** | #12340 | 🟡 Média — users de modelos locais queimam contexto desnecessariamente |

### Cenários de Uso Emergentes

1. **Agentes multi-provedores:** Usuários combinando Gemini, NVIDIA NIM, Ollama, MiniMax em setups híbridos.
2. **Agents de vida:** Issues como #11692 e #12327 sugerem uso expandido para planejamento pessoal.
3. **Deploy em Nix/Docker:** Maior sofisticação em ambientes de deployment containerizado.
4. **TouchDesigner integration:** Skills criativas (#12298) indicam uso em pipelines de visual/arte.

### Satisfação Geral

**Positiva:** Ritmo de manutenção alto, bugs críticos sendo endereçados rapidamente, diversificação de providers.
**Negativa:** Gemini provider continua problemático após múltiplos patches — indica dívida técnica na camada de autenticação. Silence em failures (#5861) erode confiança em automações críticas.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta/Ação Prolongada

| # | Título | Criado | Comentários | Status | Prioridade |
|---|--------|--------|-------------|--------|------------|
| [#11692](https://github.com/NousResearch/hermes-agent/issues/11692) | Receipts for self-improving agents | 2026-04-17 | 4 | OPEN | 🟠 Discussão técnica importante |
| [#5472](https://github.com/NousResearch/hermes-agent/issues/5472) | send_message targeting Discord session | 2026-04-06 | 4 | OPEN | 🟡 UX Discord quebrado |
| [#6133](https://github.com/NousResearch/hermes-agent/issues/6133) | TypeError: vars() on response objects | 2026-04-08 | 1 | OPEN | 🟠 Potencial crash intermitente |
| [#7863](https://github.com/NousResearch/hermes-agent/issues/7863) | suppressed_sources is dead config | 2026-04-11 | 1 | OPEN | 🟡 Configurabilidade quebrada |
| [#4662](https://github.com/NousResearch/hermes-agent/issues/4662) | Malformed persisted tool calls poison session | 2026-04-02 | 1 | OPEN | 🔴 Corrupção de estado |


</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório de Projeto: PicoClaw
## 📅 Data: 2026-04-19

---

## 1. Panorama do Dia

O projeto PicoClaw apresenta **alta atividade** no dia de hoje, com 11 issues atualizadas e 8 PRs em movimento. A equipe manteve um ritmo intenso de desenvolvimento com uma nova nightly build (v0.2.6-nightly.20260419) released. Observa-se uma preocupação crescente da comunidade com **questões de estabilidade**, especialmente no eixo de autenticação de providers (DeepSeek, OpenAI_compat), que representam 2 bugs críticos reportados nas últimas 24h. A comunidade demonstra interesse significativo em funcionalidades de automação (browser via CDP, Android) e melhorias de usabilidade para o mercado chinês.

---

## 2. Lançamentos

### 🌙 Nova Release: Nightly Build

| Versão | Tipo | Commit |
|--------|------|--------|
| **v0.2.6-nightly.20260419.6126ede9** | Nightly | `6126ede9` |

**Notas da Release:**
- Build automatizada para a versão de desenvolvimento
- ⚠️ **Aviso:** Esta build pode ser instável — uso em produção não recomendado
- **Changelog completo:** https://github.com/sipeed/picoclaw/compare/v0.2.6...main

**Observação:** Release de desenvolvimento contínuo sem breaking changes documentadas para esta nightly específica.

---

## 3. Progresso do Projeto

### PRs Fechados/Merged (3)

| PR | Título | Domínio | Contribuidor |
|----|--------|---------|--------------|
| [#2577](https://github.com/sipeed/picoclaw/pull/2577) | Adição de ferramenta de diff e arquivos de teste | tool, config | keep-me |
| [#2576](https://github.com/sipeed/picoclaw/pull/2576) | Atualização de PID e logs do gateway | agent, config | keep-me |
| [#2575](https://github.com/sipeed/picoclaw/pull/2575) | Refatoração do diff tool com validação de caminhos | tool, config | keep-me |

**Avanços trazidos:**
- ✅ Melhoria na ferramenta de comparação de arquivos com testes unitários
- ✅ Logs mais detalhados para debugging do gateway
- ✅ Refatoração do diff tool com tipagem mais robusta

### PRs Abertos em Destaque (5)

| PR | Título | Domínio | Status |
|----|--------|---------|--------|
| [#2410](https://github.com/sipeed/picoclaw/pull/2410) | Browser automation via Chrome DevTools Protocol (CDP) | agent, tool | Em revisão |
| [#2313](https://github.com/sipeed/picoclaw/pull/2313) | Multi-User Support, Security Hardening, Skills whitelisting | múltiplos | Em revisão |
| [#2551](https://github.com/sipeed/picoclaw/pull/2551) | Padronização de identificação de canais | channel, agent | Em revisão |
| [#2535](https://github.com/sipeed/picoclaw/pull/2535) | MCP slash commands e detalhes de ferramentas | agent, tool | Em revisão |
| [#2581](https://github.com/sipeed/picoclaw/pull/2581) | Recovery Codex output de mensagens streamadas | provider | Novo |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| Issue | Título | Comentários | 👍 | Prioridade | Link |
|-------|--------|-------------|----|------------|------|
| #618 | [Task] self-upgrade support | 9 | 2 | enhancement | [#618](https://github.com/sipeed/picoclaw/issues/618) |
| #292 | Feature: Android Device Automation & Remote Operations | 8 | 1 | roadmap | [#292](https://github.com/sipeed/picoclaw/issues/292) |
| #286 | Docs: Android via Termux guide | 8 | 2 | documentation | [#286](https://github.com/sipeed/picoclaw/issues/286) |

**Análise das Demandas:**

🔴 **Self-upgrade (#618):** A comunidade reforça a necessidade de auto-atualização do programa para distribuição via canais oficiais (deb, winget, opkg). Esta feature é considerada essencial para entrega contínua de patches de segurança.

📱 **Android Automation (#292):** Alto interesse em expandir PicoClaw para controle e automação de dispositivos Android, criando uma ponte entre LLMs e interfaces móveis — alinhado com tendência de agentes de IA mobile.

📖 **Documentação Termux (#286):** Forte demanda por guia de instalação no Android via Termux, indicando base significativa de usuários mobile.

---

## 5. Bugs e Estabilidade

### 🐛 Bugs Reportados (5 issues)

| Severidade | Issue | Descrição | Provider | Link |
|------------|-------|-----------|----------|------|
| **🔴 Alta** | #2578 | `openai_compat` não envia Authorization header — API key ignorada | openai_compat | [#2578](https://github.com/sipeed/picoclaw/issues/2578) |
| **🔴 Alta** | #2584 | DeepSeek retorna 401 mesmo com API key válida | DeepSeek | [#2584](https://github.com/sipeed/picoclaw/issues/2584) |
| **🟡 Média** | #2046 | PicoClaw não chama tool com LongCat API | LongCat | [#2046](https://github.com/sipeed/picoclaw/issues/2046) |
| **🟡 Média** | #2583 | qwen3.5 e gemma4 não funcionam com Ollama | Ollama | [#2583](https://github.com/sipeed/picoclaw/issues/2583) |
| **🟢 Baixa** | #2581 (PR) | Codex output recovery em streamed messages | Codex | [#2581](https://github.com/sipeed/picoclaw/pull/2581) |

**Análise de Padrões:**
- **3 de 5 bugs** envolvem providers de API — possível regressão no handler de autenticação
- **v0.2.6** está apresentando problemas consistentes de autenticação
- Recomenda-se atenção imediata da equipe ao sistema de headers de autenticação

---

## 6. Pedidos de Features e Sinais de Roadmap

### ✨ Novas Features (6 issues enhancement)

| Feature | Domínio | Prioridade | Sinais de Roadmap |
|---------|---------|------------|-------------------|
| OTel GenAI support (#1731) | observability | low | Enterprise adoption |
| Search API Fallback Chain (#2582) | tool | new | Resiliência |
| Feishu/Lark plugin optimization (#2580) | channel | new | Mercado chinês |
| Authula integration (#1067) | security | low | Multi-usuário |
| Browser automation via CDP (#2410) | tool | active PR | Automação web |
| MCP slash commands (#2535) | agent | active PR | Developer experience |

**Sinais de Mercado:**
- 📊 **Observabilidade enterprise:** Demanda por OpenTelemetry indica foco em adoção corporativa
- 🌏 **Mercado asiático:** Múltiplas issues relacionadas a usuários chineses e integração com Feishu
- 🔄 **Resiliência:** Falta de fallback em Search API revela gap de tolerância a falhas

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Dor | Evidência | Impacto |
|-----|-----------|---------|
| **Quebras de autenticação** | #2578, #2584 — providers falhando silenciosamente | Crítico |
| **Falta de auto-update** | #618 — distribuição manual é contraproducente | Alto |
| **Integração mobile fraca** | #292, #286 — Android como mercado negligenciado | Médio |
| **Segurança inexistente** | #1067 — framework "completamente aberto" | Alto |
| **Busca não resiliente** | #2582 — API quota exhaustion mata o fluxo | Médio |

### Cenários de Uso Reportados

- 🤖 **Agentes de IA para Android** — controle de dispositivos móveis via LLM
- 🌐 **Automação de browser** — tarefas web via Chrome DevTools
- 🏢 **Usuários enterprise** — necessidade de observabilidade e autenticação
- 📱 **Mercado chinês** — acesso sem proxy a funcionalidades locais

### Indicadores de Satisfação

| Indicador | Status |
|-----------|--------|
| Engajamento em issues | ✅ Alto (17+ comentários combinados nas top 3) |
| PRs em progresso | ✅ Sadio (5 abertos, 3 fechados em 24h) |
| Bugs críticos | ⚠️ Alerta (2 bugs de auth em aberto) |
| Documentação | ⚠️ Gap (guia Android solicitado há meses) |

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Estagnadas

| Issue | Idade | Status | Razão para Atenção |
|-------|-------|--------|-------------------|
| [#618](https://github.com/sipeed/picoclaw/issues/618) | ~2 meses | Aberta, 9 comentários | Feature essencial para release cycle |
| [#292](https://github.com/sipeed/picoclaw/issues/292) | ~2 meses | Roadmap | Automação mobile é diferencial competitivo |
| [#286](https://github.com/sipeed/picoclaw/issues/286) | ~2 meses | Documentação | Barreira de entrada para usuários mobile |
| [#1067](https://github.com/sipeed/picoclaw/issues/1067) | ~1.5 meses | Enhancement | Segurança é bloco para adoção enterprise |
| [#1731](https://github.com/sipeed/picoclaw/issues/1731) | ~1 mês | Enhancement | Observabilidade enterprise |

### Recomendações de Priorização

1. **🔴 Imediato:** Resolver bugs de autenticação #2578, #2584 — risco de experiência do usuário
2. **🟡 Curto prazo:** Planejar release de auto-update #618 — segurança e manutenção
3. **🟡 Curto prazo:** Documentação Android #286 — reduzir friction de onboarding
4. **🟢 Médio prazo:** Roadmap mobile #292 — capturar mercado Android

---

## Métricas Resumidas do Dia

| Métrica | Valor | Tendência |
|---------|-------|-----------|
| Issues ativas | 11 | ➡️ Estável |
| PRs em movimento | 8 | ✅ Saudável |
| Releases | 1 | ➡️ Normal |
| Bugs críticos | 2 | ⚠️ Atenção |
| Engajamento (comentários top 3) | 25 | ✅ Alto |

---

*Relatório gerado automaticamente para 2026-04-19. Dados extraídos de github.com/sipeed/picoclaw.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-04-19

## 1. Panorama do Dia

O IronClaw apresenta alta atividade de desenvolvimento nesta segunda-feira, com **50 PRs e 18 issues atualizados** nas últimas 24h. O projeto atravessa uma fase de refatoração significativa com o epic #2599 (gateway feature boundaries) avançando para seu quinto estágio, enquantoissues de estabilidade e segurança continuam sendo priorizados. Não houve releases formais, mas múltiplos PRs de alta prioridade estão em revisão, incluindo correções de segurança de credenciais cross-tenant (#2381) e refatorações do motor de rotinas (#2655). A base de código demonstra maturidade com testes E2E sendo continuamente endurecidos após refatorações recentes.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

O pipeline CI continua gerando branches de promoção para staging (`staging-promote/695e6fa1-24607103256` e `staging-promote/11f00698-24612972670`), indicando que mudanças estão sendo validadas automaticamente. A ausência de releases formais sugere foco em estabilização antes de cuts subsequentes.

---

## 3. Progresso do Projeto

### PRs fechadas/merged na janela (7)

| # | Título | Escopo | Tamanho | Status |
|---|--------|--------|---------|--------|
| [#2531](https://github.com/nearai/ironclaw/pull/2531) | fix(engine): FINAL-await support + runaway loop protection | engine, llm | L | **MERGED** |
| [#2656](https://github.com/nearai/ironclaw/pull/2656) | test(e2e): harden tab_button selector against strict-mode duplicates | testing | XS | **MERGED** |
| [#2570](https://github.com/nearai/ironclaw/pull/2570) | fix(engine): allow completed event-driven missions to re-fire | engine | L | **MERGED** |

**Destaques:**

- **#2531** introduz suporte a `await FINAL`/`FINAL_VAR` em scripts CodeAct e proteção contra loops runaway (max 5 erros consecutivos). Corrigiu problemas de tipografia em matching de skills.

- **#2656** resolve falha no Playwright strict mode que fazia o teste de jobs tab falhar com duplicatas de seletores após #2353.

- **#2570** permite que missões event-driven completadas re-dispararem, corrigindo "no self-improvement missions configured" no comando `/expected`.

### PRs abertas de destaque (selection)

- [#2647](https://github.com/nearai/ironclaw/pull/2647) — **ci(gateway): enforce platform/feature boundaries** (stage 5 do epic #2599) — Adiciona script de validação de fronteiras entre módulos
- [#2381](https://github.com/nearai/ironclaw/pull/2381) — **fix(security): remove cross-tenant credential fallbacks** — Corrigindo vulnerabilidade MT-2
- [#2617](https://github.com/nearai/ironclaw/pull/2617) — **feat(common): apply ExtensionName newtype** (PR 2/2) — Tipagem forte para extension_name/credential_name

---

## 4. Temas Quentes da Comunidade

### Issues com maior atividade (comentários/interações)

| # | Título | Estado | Comentários | Data |
|---|--------|--------|-------------|------|
| [#2636](https://github.com/nearai/ironclaw/issues/2636) | skill size limit error | OPEN | 1 | 2026-04-18 |
| [#91](https://github.com/nearai/ironclaw/issues/91) | feat: Meeting intelligence pipeline | OPEN | 1 | 2026-04-18 |
| [#2633](https://github.com/nearai/ironclaw/issues/2633) | Gateway: pre-existing correctness/perf issues | OPEN | 1 | 2026-04-18 |

**Análise:**

- **#2636 (skill size limit):** Usuário reporta que skills de 506KB são rejeitadas com limite de 65536 bytes. Afirma que "no similar project do this", indicando pressão por aumento do limite para uso corporativo.

- **#91 (Meeting Intelligence Pipeline):** Proposta de Feature P2 abrangendo gravação, transcrição com speaker diarization, e follow-up proativo. Escopo cross-cutting entre áudio, memória, rotinas e proatividade do agente — indica demanda por integração nativa de reuniões.

- **#2633:** Problemas de correção/perf обнаружены durante extração de platform layer (PR #2628). Indica dívida técnica sendo surfaced durante refatorações.

### Issues fechadas de destaque (10 fechadas)

- [#2410](https://github.com/nearai/ironclaw/issues/2410) — **[QA] Dashboard keeps refreshing and wiping contents** — BUG P1 de estabilidade no staging
- [#2482](https://github.com/nearai/ironclaw/issues/2482) — **Telegram group messages omit chat_type metadata** — BUG de comportamento em grupos
- [#2069](https://github.com/nearai/ironclaw/issues/2069) — **ownership(wasm): remove "default" credential fallback** — Segurança MT-2 resolvida
- [#1882](https://github.com/nearai/ironclaw/issues/1882) — **[HIGH] MCP server name validation lacks shell metacharacter protection** — Vulnerabilidade de injeção shell corrigida

---

## 5. Bugs e Estabilidade

### Issues de BUG em aberto (6)

| Severidade | # | Título | Escopo |
|------------|---|--------|--------|
| **HIGH** | [#2655](https://github.com/nearai/ironclaw/issues/2655) | sync_dispatched_runs never finalizes routine runs | agent/routine_engine |
| **HIGH** | [#2624](https://github.com/nearai/ironclaw/issues/2624) | test(e2e): Telegram E2E fails with 401 | testing |
| **HIGH** | [#2653](https://github.com/nearai/ironclaw/pull/2653) | fix(secrets): prefer keychain over env | setup, security |
| **MEDIUM** | [#2633](https://github.com/nearai/ironclaw/issues/2633) | Gateway correctness/perf issues | channel/web |
| **MEDIUM** | [#2624](https://github.com/nearai/ironclaw/issues/2624) | Telegram E2E fails | testing |
| **MEDIUM** | [#2654](https://github.com/nearai/ironclaw/issues/2654) | tracking: complete engine→AppEvent coverage | channel/web |

**Análise de severidade:**

- **🔴 #2655 (HIGH):** `sync_dispatched_runs` em `routine_engine.rs` não finaliza runs quando jobs ficam em estado pending. Impacta rastreamento de rotinas e pode causar memory leaks ou runs órfãs. Correlaciona com #2570 (recentemente fechado).

- **🔴 #2624 (HIGH):** E2E do Telegram continua falhando após múltiplas correções. Bot token validation retorna 401. Investigação em andamento.

- **🔴 #2653 (HIGH):** PR de segurança para secrets — TOCTOU-safe generate, keychain over env. Prioridade alinhada com MT-2.

### Bugs recentemente resolvidos

- **Dashboard refresh loop** (#2410) — Resolvido após QA em staging
- **Telegram group metadata** (#2482) — Resolvido
- **WASM auto-start inactive channels** (#2556) — Resolvido

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features em aberto

| # | Título | Escopo | Prioridade | Sinal |
|---|--------|--------|------------|-------|
| [#91](https://github.com/nearai/ironclaw/issues/91) | Meeting intelligence pipeline | agent, llm | P2 | Transcript + action items + follow-up |
| [#2599](https://github.com/nearai/ironclaw/issues/2599) | Epic: Enforce gateway feature boundaries | gateway, ci | Epic | Modularização + CI guardrails |
| [#2642](https://github.com/nearai/ironclaw/issues/2642) | support credential profiles for multiple accounts per service | auth, extensions | — | Multi-account por provider (Gmail, Notion) |
| [#2571](https://github.com/nearai/ironclaw/pull/2571) | feat(gateway): surface tool output previews | channel/web | XL | UI improvements |

### Análise de tendências de features

1. **Meeting intelligence (#91):** Demanda por integração nativa de reuniões indica foco em produtividade empresarial. Features: gravação desktop/mobile, transcrição com speaker diarization, extração de action items, follow-up proativo.

2. **Multi-account support (#2642):** Crescimento de uso multi-conta是企业需求 (Gmail, Google Drive, Notion). Currently single credential slot per service é limitante.

3. **Gateway UI improvements:**
   - Tool output previews (#2571) — Visualização de resultados de ferramentas
   - Approval queue tray (#2270) — Visibilidade cross-thread de pendências
   - Descriptive chat titles (#2348) — Melhor UX com títulos em vez de UUIDs

4. **Aliyun support (#1446):** PR XL adiciona provider para Aliyun BaiLian Coding Plan, sinal de expansão para mercado chinês.

---

## 7. Resumo de Feedback dos Usuários

### Dores reportadas

| Dor | Issue | Impacto |
|-----|-------|---------|
| **Limite de skill size muito restritivo** | #2636 | 506KB rejeitado, outros projetos não limitam |
| **Dashboard refreshing em loop (staging)** | #2410 | Uso QA bloqueado |
| **Telegram groups sem comportamento específico** | #2482 | Experience degradada em grupos |
| **NEARAI_AUTH_URL resolve falhando** | #1826 | Conexão a private.near.ai mesmo sem key |
| **Secrets store indisponível** | #1820 | Não consegue setar API keys (openroute) |

### Cenários de uso observados

- **Codificação assistente:** Uso com Aliyun, múltiplos models (DashScope compatibility)
- **Automação de rotinas:** Notificações normalizadas, jobs completados, follow-up
- **Integração multi-canal:** CLI, Web, Telegram, WASM channels
- **Enterprise auth:** OAuth matrix testing, credential profiles, keychain preference

### Satisfação

- Bugs P1 estão sendo resolvidos rapidamente (dashboard loop em staging)
- CI automation robusto (staging promotions automáticas)
- Múltiplas frentes de segurança sendo endereçadas (MT-2, shell injection)

### Insatisfação

- Limite de skill size parece artificialmente baixo para用例 corporativas
- E2E do Telegram ainda não estável após múltiplas rodadas de fix
- REPL auth matrix no macOS não confiável (PTY harness issue)

---

## 8. Backlog que Merece Atenção

### Issues sem resposta há >7 dias

| # | Título | Criado | Atualizado | Estado |
|---|--------|--------|------------|--------|
| [#91](https://github.com/nearai/ironclaw/issues/91) | Meeting intelligence pipeline | 2026-02-14 | 2026-04-18 | OPEN |
| [#1826](https://github.com/nearai/ironclaw/issues/1826) | NEARAI_AUTH_URL problem | 2026-03-31 | 2026-04-18 | CLOSED |
| [#1820](https://github.com/nearai/ironclaw/issues/1820) | Secrets store not available | 2026-03-31 | 2026-04-18 | CLOSED |
| [#1882](https://github.com/nearai/ironclaw/issues/1882) | MCP shell metacharacter | 2026-04-01 | 2026-04-18 | CLOSED |

### PRs abertas há >5 dias sem merge

| # | Título | Criado | Escopo | Risco |
|---|--------|--------|--------|-------|
| [#2348](https://github.com/nearai/ironclaw/pull/2348) | Descriptive chat titles | 2026-04-11 | L | medium |
| [#2347](https://github.com/nearai/ironclaw/pull/2347) | Orphaned approval gates | 2026-04-11 | M | low |
| [#2381](https://github.com/nearai/ironclaw/pull/2381) | Security: credential fallbacks | 2026-04-12 | L | medium |
| [#1446](https://github.com/nearai/ironclaw/pull/1446) | Aliyun Coding Plan | 2026-03-20 | XL | low |
| [#1470](https://github.com/nearai/ironclaw/pull/1470) | Routines notification normalization | 2026-03-20 | L | medium |

### Priorização recomendada

1. **#2655 (HIGH):** sync_dispatched_runs não finaliza — risco de runs órfãs
2. **#2624 (HIGH):** Telegram E2E falhando — bloqueia CI green
3. **#2636:** Skill size limit — pressão de usuário com argumento "outros projetos não limitam"
4. **#2642:** Multi-account credential profiles — demanda enterprise crescente
5. **#91:** Meeting intelligence — feature P2 com escopo complexo, merece roadmap clarity

---

## Resumo Executivo

| Métrica | Valor |
|---------|-------|
| Issues ativas | 8 |
| PRs abertas | 43 |
| PRs fechadas (24h) | 7 |
| Releases | 0 |
| Bugs HIGH abertos | 3 |
| Features EPIC ativas | 1 (#2599) |
| CI promotions | 2 |

**Saúde Geral:** 🟢 Estável com alta atividade. Bugs P1 estão sendo addressed rapidamente. Refatoração de gateway (#2599) progredindo bem. Atenção necessária para E2E Telegram e race condition em routine engine.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório de Projeto — CoPaw (QwenPaw)
**Data:** 2026-04-19
**Analista:** Open Source Project Analyst

---

## 1. Panorama do Dia

O projeto CoPaw (QwenPaw) apresenta alta atividade de desenvolvimento com **13 issues atualizadas e 10 PRs** nas últimas 24h. O repositório mantém um fluxo saudável de contribuições, com predominância de issues abertas (10) versus fechadas (3), indicando um pipeline ativo de priorização. A comunidade demonstra interesse forte em features de memória, melhorias no Console web UI e integrações locais (Ollama). Não houve releases formais no período, sugerindo foco em estabilização de funcionalidades já mergeadas.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24h.**

O projeto encontra-se em fase de desenvolvimento ativo sem versionamento formalizado neste período. A ausência de releases indica que o time可能在等待 contribuições se estabilizarem antes de cortar uma nova versão.

---

## 3. Progresso do Projeto

### PRs Mergeadas/Fechadas (1)

| PR | Descrição | Impacto |
|---|---|---|
| [#3561](https://github.com/agentscope-ai/QwenPaw/pull/3561) | Sincronização de branch fonte (同步源分支) | Manutenção do código base |

### PRs Abertas Destacadas

| PR | Descrição | Contribuidor | Potencial |
|---|---|---|---|
| [#3565](https://github.com/agentscope-ai/QwenPaw/pull/3565) | Adiciona `AgentMemory` como opção de `memory_manager_backend` com retrieval triplo (vector + BM25 + knowledge graph) | zhenai1314521 🆕 | **Alto** — Introduce capacidade de memória avançada |
| [#3558](https://github.com/agentscope-ai/QwenPaw/pull/3558) | Suporte a skills bilíngues (EN/ZH) com restruturação de diretórios | Leirunlin | **Médio** — Melhora experiência internacional |
| [#3559](https://github.com/agentscope-ai/QwenPaw/pull/3559) | Setup Vitest + testes unitários para Chat, API e componentes compartilhados | hanson-hex | **Médio** — Melhora coverage e qualidade |
| [#3548](https://github.com/agentscope-ai/QwenPaw/pull/3548) | Refatoração de memória e contexto: auto-memory, auto-dream, alinhamento com As2.0 | jinliyl | **Alto** — Melhora arquitetura de memória |
| [#3556](https://github.com/agentscope-ai/QwenPaw/pull/3556) | Adiciona `browser_args` e `executable_path` para browser_use | shadowabi | **Médio** — Flexibiliza configuração de browser |
| [#3553](https://github.com/agentscope-ai/QwenPaw/pull/3553) | Corrige crash do Console SSE com texto Unicode surrogado inválido | Prince-liu 🆕 | **Alto** — Estabilidade do Console |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (por comentários)

| Issue | Tipo | Comentários | Tema Principal |
|---|---|---|---|
| [#3356](https://github.com/agentscope-ai/QwenPaw/issues/3356) | Bug | 19 | WORKING_DIR persiste em `.copaw` após upgrade para `.qwenpaw` (Windows 11) |
| [#2943](https://github.com/agentscope-ai/QwenPaw/issues/2943) | Bug | 6 | `copaw init` trava no prompt "Security warning" no Windows (Python 3.13) |
| [#3470](https://github.com/agentscope-ai/QwenPaw/issues/3470) | Feature | 5 | Solicito de roadmap: auto-evolução de agentes (similar Hermes Agent) |
| [#3293](https://github.com/agentscope-ai/QwenPaw/issues/3293) | Feature | 3 | Habilidade de responder via voz em canais (DingTalk, Feishu, etc.) |

### Análise de Demandas

**Maior volume de issues recente:** bugs relacionados a ambiente Windows (4+ issues), indicando que o time deve priorizá-los. A issue de migration de `.copaw` para `.qwenpaw` (#3356) acumulou 19 comentários — mostra frustração com experiência de upgrade.

**Interesse estratégico:** A community demonstra curiosidade sobre capacidades de auto-evolução de agentes, sugerindo demanda para features de machine learning contínuo.

---

## 5. Bugs e Estabilidade

### Bugs Críticos (Abertos)

| Bug | Severidade | Descrição | Link |
|---|---|---|---|
| `#copaw init` hang | Alta | Trava indefinidamente no prompt de segurança Windows + Python 3.13 | [#2943](https://github.com/agentscope-ai/QwenPaw/issues/2943) |
| WORKING_DIR migration | Alta | Persiste em `.copaw` após fresh install em `.qwenpaw` | [#3356](https://github.com/agentscope-ai/QwenPaw/issues/3356) |
| Desktop hang | Alta | `QwenPaw Desktop.bat` trava em "Waiting for HTTP ready..." (300s timeout) | [#3555](https://github.com/agentscope-ai/QwenPaw/issues/3555) |
| Interrupções frequentes | Alta | Processo frequentemente interrompido no meio | [#3564](https://github.com/agentscope-ai/QwenPaw/issues/3564) |

### Bugs Médios (Abertos)

| Bug | Severidade | Descrição | Link |
|---|---|---|---|
| Ollama + VPN | Média | Modelos locais não funcionam com VPN proxy | [#3542](https://github.com/agentscope-ai/QwenPaw/issues/3542) |
| Output loss | Média | Perda de output após múltiplas chamadas Ollama | [#3562](https://github.com/agentscope-ai/QwenPaw/issues/3562) |
| Tool Call parsing | Média | Erro de parsing em custom llama.cpp backend | [#3560](https://github.com/agentscope-ai/QwenPaw/issues/3560) |

### Bugs Resolvidos (Recentemente Closed)

| Bug | Status | Link |
|---|---|---|
| Modelo delete em Provider | Closed ✅ | [#3545](https://github.com/agentscope-ai/QwenPaw/issues/3545) |

**⚠️ Alerta:** 4 bugs de alta severidade todos relacionados a ambiente Windows. Recomenda-se atenção imediata do time de QA.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Solicitadas Recentemente

| Feature | Impacto | Descrição | Link |
|---|---|---|---|
| Agent self-evolution | Estratégico | Roadmap request: capacidade de auto-evolução similar Hermes Agent | [#3470](https://github.com/agentscope-ai/QwenPaw/issues/3470) |
| Context usage display | Usabilidade | Ver consumo atual do contexto para decidir `compact` | [#3563](https://github.com/agentscope-ai/QwenPaw/issues/3563) |
| Bilíngue skills | Internacionalização | Dual language support para built-in skills | [#3558](https://github.com/agentscope-ai/QwenPaw/pull/3558) (já em PR) |
| Voice reply | Canal | Resposta por voz em canais (não apenas outputs de áudio) | [#3293](https://github.com/agentscope-ai/QwenPaw/issues/3293) |
| Console default agent | UI/UX | Permitir mudança de default agent no Console web | [#3557](https://github.com/agentscope-ai/QwenPaw/issues/3557) |
| Message filters | Console | Opções de filtragem para mensagens no Console channel | [#3544](https://github.com/agentscope-ai/QwenPaw/pull/3544) (já em PR) |

### Sinais de Roadmap Observados

- **Memory architecture** em evolução (PR #3548, #3565) — Indicativo de investimento em long-term memory
- **Semantic skill routing** (PR #3117) — Filtro por embedding para skills, reduzindo contexto
- **Routing UI end-to-end** (PR #3550) — Agente-aware routing com runtime refinements

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Categoria | Dor | Frequência |
|---|---|---|
| **Windows compatibility** | Bugs persistentes em Windows 11 (init hang, desktop hang, path migration) | 🔴 Alta |
| **Stability** | Interrupções frequentes e crashes | 🔴 Alta |
| **Ollama integration** | Problemas com proxy e multi-turn context loss | 🟡 Média |
| **Console parity** | Falta de funcionalidades do App no Console web | 🟡 Média |

### Cenários de Uso Emergentes

1. **Ambiente Windows-heavy** — A maioria dos bugs envolve Windows 11, sugerindo base de usuários significativa nessa plataforma
2. **Local models** — Demanda forte por integração com Ollama e modelos locais
3. **Produtividade** — Solicitudes de usage display e auto-compact indicam uso em workloads extended

### Pontos Positivos

- Funcionalidade de deletar modelos do Provider foi implementada (feedback atendido)
- Community aktif berkontribusi dengan PR berkualitas (Vitest, bilíngue skills, memory refactor)

---

## 8. Backlog que Merece Atenção

### Issues sem Resposta há Tempo

| Issue | Age | Título | Link |
|---|---|---|---|
| #2943 | 15 dias | `copaw init` hangs on "Security warning" (bug crítico) | [#2943](https://github.com/agentscope-ai/QwenPaw/issues/2943) |
| #3293 | 8 dias | Feature: resposta por voz em canais | [#3293](https://github.com/agentscope-ai/QwenPaw/issues/3293) |
| #3117 | 11 dias | Semantic skill routing (PR Under Review, precisa discussions) | [#3117](https://github.com/agentscope-ai/QwenPaw/pull/3117) |

### PRs em Revisão

| PR | Status | Bloqueia | Link |
|---|---|---|---|
| #3117 | Under Review, need discussions | Skill routing feature | [#3117](https://github.com/agentscope-ai/QwenPaw/pull/3117) |

---

## Resumo Executivo

| Métrica | Valor |
|---|---|
| Issues abertas/ativas (24h) | 10 |
| Issues fechadas (24h) | 3 |
| PRs abertas (24h) | 9 |
| PRs fechadas/merged (24h) | 1 |
| Releases | 0 |
| Bugs alta severidade | 4 |
| PRs first-time-contributor | 3 |

### Saúde do Projeto: 🟡 **MODERADA**

**Pontos de Atenção:**
- 4 bugs críticos no Windows não resolvidos
- 2 PRs estrategicamente importantes (memory, routing) em diferentes estágios de revisão

**Sinais Positivos:**
- 3 PRs de first-time-contributors em 24h indica comunidade saudável
- Convergência de 3+ PRs focadas em memory architecture
- Bug fix de surrogate text (estabilidade do Console) mergeado

**Recomendação:** Priorizar bugs Windows para próximo release, garantir review das PRs de memory para não perder momentum estratégico.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-04-19

---

## 1. Panorama do dia

O projeto ZeroClaw apresenta **alta atividade** nesta data, com 48 issues e 38 PRs atualizados nas últimas 24h. A equipe está finalizando a transição para o modelo de releases via GitHub App (eliminando PATs), com dois PRs fechados na pipeline de CI (#5888, #5860). Duas releases beta foram publicadas (v0.7.1 e v0.7.0), consolidando a maior reestruturação de workspace Cargo da história do projeto. O ecossistema de canais (Signal, Telegram, Webhook) está em evolução ativa, com PRs merged hoje cobrindo mídia, renderização markdown e retry logic. A comunidade demonstra preocupação crescente com segurança e isolamento de sandbox.

---

## 2. Lançamentos

### v0.7.1-beta.1049
Release de manutenção corrente com version bump e changelog atualizado — consolida os trabalhos de CI rationalisation iniciados em #5579.

### v0.7.0-beta.1047
**Breaking change estrutural:** reestruturação completa do codebase em workspace Cargo com 14 crates especializadas. Inclui novo schema de configuração com migração ao vivo. Este é o release mais significativo da história do projeto — qualquer upgrade de versões anteriores requer atenção à migração de configurações.

---

## 3. Progresso do Projeto

| PR | Status | Descrição | Impacto |
|---|---|---|---|
| [#5867](https://github.com/zeroclaw-labs/zeroclaw/pull/5867) | ✅ Merged | Bump versão 0.7.1 + CI rationalisation phase 1 | Libera pipeline de release bloqueado |
| [#5888](https://github.com/zeroclaw-labs/zeroclaw/pull/5888) | ✅ Merged | Remove PAT dependency de workflows de release | Elimina tokens pessoais do processo |
| [#5860](https://github.com/zeroclaw-labs/zeroclaw/pull/5860) | ✅ Merged | Split tag push de release creation | Corrige Immutable Releases error |
| [#5832](https://github.com/zeroclaw-labs/zeroclaw/pull/5832) | ✅ Merged | Signal: media attachments, marker wiring, inbound persistence | Habilita mídia no Signal |
| [#5826](https://github.com/zeroclaw-labs/zeroclaw/pull/5826) | ✅ Merged | Signal: render markdown como estilos nativos | Melhora legibilidade no Signal |
| [#5762](https://github.com/zeroclaw-labs/zeroclaw/pull/5762) | ✅ Merged | Strip native tool messages para providers com native_tool_calling=false | Corrige erro 400 em MiniMax |
| [#5801](https://github.com/zeroclaw-labs/zeroclaw/pull/5801) | ✅ Merged | CONVENTIONS.md com filosofia de desenvolvimento | Melhora onboarding de contribuidores |

**PRs abertos que merecem atenção:**
- [#5733](https://github.com/zeroclaw-labs/zeroclaw/pull/5733): Model quick-switcher + WebSocket persistente (size: M, needs-author-action)
- [#5868](https://github.com/zeroclaw-labs/zeroclaw/pull/5868): Whisper.cpp STT local atrás de feature flag (features diferenciadas)
- [#5874](https://github.com/zeroclaw-labs/zeroclaw/pull/5874): LLM reflection para SKILL.md generation (workflow enhancement)

---

## 4. Temas Quentes da Comunidade

### Issue com maior engajamento: #4866 — Web Dashboard unavailable
- **15 comentários** | Status: CLOSED
- Severidade: S1 (workflow blocked)
- Duas issues similares (#4866, #5348) convergiram. A correção faz parte da release v0.7.0.用户提供明确指引：`cd web && npm ci && npm run build`。

### RFC em discussão: #5787 — Substituir TOML i18n por Mozilla Fluent
- **4 comentários** | Tipo: RFC formal
- Proposta ambiciosa: eliminar hand-rolled i18n, remover docs traduzidas do repo, mover segurança E2EE para Wiki
- Requer 7-day discussion + vote por 2/3 dos core team (per #5577 §8.2)

### Feature request popular: #3642 — Docker image "full"
- **6 comentários** | 👍 3 | Prioridade: enhancement
- Atualmente features como WhatsApp ficam desabilitadas por default para economizar memória — barreira alta para novos usuários
- Oportunidade de experiência "one-click" para iniciantes

### Issue técnica complexa: #5719 — Docker bypass para native runtime
- **6 comentários** | Risk: HIGH | Reprodutor: Jason Perlow (InvestorClaw)
- Cenário: runtime.kind = "native" deveria bypass Docker, mas ainda executa em sandbox
- Impacta skills de finanças que requerem PYTHONPATH inline e padrões Python realistas

---

## 5. Bugs e Estabilidade

### 🔴 S1 — Workflow Blocked (Crítico)

| Issue | Descrição | Link |
|---|---|---|
| #5813 | Compaction ORPHANs tool_result blocks → Anthropic API 400, session bricked | [#5813](https://github.com/zeroclaw-labs/zeroclaw/issues/5813) |
| #5815 | Provider ignora [providers.models.llamacpp] — defaults sempre aplicados | [#5815](https://github.com/zeroclaw-labs/zeroclaw/issues/5815) |
| #5861 | voice-wake feature falha compilação em v0.6.9 (Arch Linux) | [#5861](https://github.com/zeroclaw-labs/zeroclaw/issues/5861) |

### 🟠 S2 — Degraded Behavior / Security-Affecting

| Issue | Descrição | Link |
|---|---|---|
| #5722 | Default shell sandbox bloqueia padrões Python reais | [#5722](https://github.com/zeroclaw-labs/zeroclaw/issues/5722) |
| #5809 | `git -C <path>` rejeitado — lowercasing args conflita com `-c` | [#5809](https://github.com/zeroclaw-labs/zeroclaw/issues/5809) |
| #5810 | `security.otp.gated_actions` aceita strings arbitrárias silenciosamente | [#5810](https://github.com/zeroclaw-labs/zeroclaw/issues/5810) |
| #5844 | Memory tem énfasis excessivo em cron jobs | [#5844](https://github.com/zeroclaw-labs/zeroclaw/issues/5844) |

### 🟡 S3 — Minor Issues

| Issue | Descrição | Link |
|---|---|---|
| #5536 | Embedding search: score percent não multiplicado por 100 | [#5536](https://github.com/zeroclaw-labs/zeroclaw/issues/5536) |
| #5862 | ZeroClaw não sugere usar `zeroclaw cron` para scheduling | [#5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862) |

---

## 6. Pedidos de Features e Sinais de Roadmap

### RFC Formal #5890 — Multi-agent UX flow
**Postado hoje (2026-04-19)** | Categoria: core, agent, config, type:rfc

Proposta fase 1 do design multi-agent. Status atual: Draft posted. Requer processo formal de 7 dias de discussão + vote.

### Feature #5849 — Dream Mode
**Periodic Memory Consolidation & Reflective Learning**

Proposta inovadora: ZeroClaw executa lightweight background process durante idle periods para consolidar memórias e atualizar knowledge structures. Autor: Svtter.

### Feature #5741 — Interactive channel approval
Implementar flow interativo para operações medium/high-risk. ApprovalManager atual não permite interatividade — produz auto-deny para operações que precisam de input humano.

### Feature #3642 — Docker image "full"
Unlocked features (WhatsApp, etc.) compiladas por default para reduzir barrier to entry.

### Roadmap signalado via PRs:
- **Provider extensibility**: whisper.cpp local STT (#5868), IMAP fallback (#5712)
- **CLI improvements**: manual release script (#5887), telegram bot commands auto-update (#5691)
- **Multi-channel enhancements**: Telegram replies (#5886), Webhook retry logic (#5838)

---

## 7. Resumo de Feedback dos Usuários

### Dores Críticas Reportadas

**1. Sandboxing excessivamente restritivo**
Múltiplos usuários (perlowja, Mohl) reportam que as políticas de segurança bloqueiam padrões legítimos:
- PYTHONPATH inline env var prefix syntax não funciona
- `git -C <path>` bloqueado por lowercasing
- Padrões Python realistas banidos do shell sandbox

> "Default shell sandbox configuration blocks all realistic Python skill patterns" — [#5722](https://github.com/zeroclaw-labs/zeroclaw/issues/5722)

**2. Config schema migration confusa**
O novo schema v2 quebrou configurações existentes (providers.models.llamacpp ignorado), causando regressões percebidas mesmo com schema version bump.

**3. Web dashboard missing post-install**
Dois reports independentes (#4866, #5348) indicam que o dashboard web não está disponível out-of-the-box. Mensagem de erro：`Build it with: cd web && npm ci && npm run build`

### Cenários de Uso Emergentes

- **Financial/skills development**: Jason Perlow construindo InvestorClaw (FINOS CDM 5.x compliant) como projeto pessoal
- **Cross-platform deployment**: Arm64 Linux (Hi3536AV100), OpenShift/K8s (#5880)
- **Signal messaging**: usuários requerem suporte a mídia e markdown nativo

### Satisfação Indicada

- 👍 3 no request de Docker "full" image indica demanda por experiência simplificada
- PRs merged com velocidade indicam comunidade ativa (10+ PRs fechados em 48h)
- RFC culture institucionalizada (#5577 governance) gera confiança em processo de decisão

---

## 8. Backlog que Merece Atenção

### Issues sem resposta há >7 dias (requerem triagem)

| Issue | Idade | Prioridade | Link |
|---|---|---|---|
| #3642 — Docker full image | ~35 dias | Enhancement | [#3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642) |
| #5720 — PYTHONPATH inline syntax broken | 5 dias | Bug, risk: high | [#5720](https://github.com/zeroclaw-labs/zeroclaw/issues/5720) |
| #5721 — prompt_injection_mode="full" não injeta skill prompts | 5 dias | Bug, runtime | [#5721](https://github.com/zeroclaw-labs/zeroclaw/issues/5721) |

### PRs com status "needs-author-action"

| PR | Risk | Descrição |
|---|---|---|
| [#5733](https://github.com/zeroclaw-labs/zeroclaw/pull/5733) | medium | Model quick-switcher + WebSocket |
| [#5691](https://github.com/zeroclaw-labs/zeroclaw/pull/5691) | medium | Telegram bot commands |
| [#5712](https://github.com/zeroclaw-labs/zeroclaw/pull/5712) | medium | IMAP polling fallback |

### Issues aguardando reprodução (#5577 §4.2)

- [#5720](https://github.com/zeroclaw-labs/zeroclaw/issues/5720):标记 `r:needs-repro`
- [#5719](https://github.com/zeroclaw-labs/zeroclaw/issues/5719):标记 `r:needs-repro`

---

## Métricas Sintéticas — 2026-04-19

| Indicador | Valor | Status |
|---|---|---|
| Issues ativas/abertas | 45 | 🟢 Alta |
| PRs abertos | 23 | 🟢 Ativo |
| PRs merged/fechados (24h) | 15 | 🟢 Excelente |
| Releases últimas 24h | 2 | 🟢 Pipeline saudável |
| Bugs S1 (críticos) | 3 | 🔴 Requer atenção |
| Bugs S2 (degraded) | 4 | 🟡 Requer triagem |
| RFCs em discussão | 2 | 🟢 Governança ativa |
| PRs waiting author | 3 | 🟠 Gargalo |

---

*Relatório gerado automaticamente. Dados extraídos de github.com/zeroclaw-labs/zeroclaw em 2026-04-19.*

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*