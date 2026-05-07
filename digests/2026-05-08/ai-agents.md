# Resumo diário do ecossistema de agentes de IA 2026-05-08

> Issues: 6 | PRs: 7 | Projetos cobertos: 7 | Gerado em: 2026-05-07 21:00 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório do Projeto NullClaw — 2026-05-08

---

## 1. Panorama do dia

O projeto NullClaw apresenta alta atividade no período analisado, com 6 issues e 7 PRs atualizados nas últimas 24h. O destaque vai para o merge de duas PRs significativas — a integração do `zig-qm-toolkit` e a correção do schema da Responses API — indicando progresso sólido em estabilidade e usabilidade. A comunidade está ativa em múltiplas frentes: documentação (setup Zig), correções de build, features para o canal Lark, e até um projeto de hackathon para camada de governança de dados. Nenhuma release foi publicada recentemente, sugerindo que a equipe está em fase de consolidação antes do próximo lançamento.

---

## 2. Lançamentos

**Nenhuma release nas últimas 24h.**

O projeto não publicou novas versões no período. Isso é consistente com o padrão de trabalho observável nas PRs abertas — várias melhorias estão em revisão e não devem estar prontas para distribuição oficial.

---

## 3. Progresso do Projeto

Duas PRs relevantes foram fechadas/merged hoje:

| PR | Autor | Resumo | Impacto |
|---|---|---|---|
| [#893](https://github.com/nullclaw/nullclaw/pull/893) | EugOT | Integração do `zig-qm-toolkit` (hooks, agents, skills, verify 4-tier) | **Alto** — Adiciona gestão centralizada de ferramentas Zig, aumentando modularidade e manutenibilidade |
| [#790](https://github.com/nullclaw/nullclaw/pull/790) | fakhriaunur | Correção do schema de tools na Responses API e tratamento de erros null | **Médio** — Resolve bugs críticos no provider OpenAI-compatible para o modo `api_mode=responses` |

A PR [#893](https://github.com/nullclaw/nullclaw/pull/893) é particularmente significativa por manter a compatibilidade com os arquivos `AGENTS.md` e `CLAUDE.md` existentes, minimizando quebra de contratos para usuários já estabelecidos.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento

| Issue | Comentários | 👍 | Tema |
|---|---|---|---|
| [#167](https://github.com/nullclaw/nullclaw/issues/167) | 10 | 1 | Comandos shell `curl` e `wget` hard-coded — **recém-fechada** |
| [#871](https://github.com/nullclaw/nullclaw/issues/871) | 7 | 0 | Bug crítico: `web_search` impraticável em dispositivos de baixo recurso |
| [#820](https://github.com/nullclaw/nullclaw/issues/820) | 5 | 0 | Como instalar Zig no Debian? — **sendo endereçada** |
| [#473](https://github.com/nullclaw/nullclaw/issues/473) | 2 | 1 | README desatualizado nos benchmarks (tamanho binário, memória) |

**Análise:** A issue [#167](https://github.com/nullclaw/nullclaw/issues/167) sobre comandos shell hard-coded gerou debate significativo (10 comentários), sinalizando uma demanda antiga que finalmente foi resolvida. A issue de `web_search` com 7 comentários indica preocupação recorrente sobre limitação a dispositivos poderosos. A documentação de setup Zig permanece como ponto de atrito para novos usuários.

---

## 5. Bugs e Estabilidade

### Bugs abertos

| Issue | Severidade | Descrição |
|---|---|---|
| [#871](https://github.com/nullclaw/nullclaw/issues/871) | **Crítica** | `web_search` impraticável em dispositivos de baixo recurso sem suporte direto ao DuckDuckGo. Requer API key externa ou alternativa viável. |
| [#887](https://github.com/nullclaw/nullclaw/pull/887) | **Média** | Build quebrado com Zig v0.16 em Windows/Linux — PR aberta para correção |

**Análise de severidade:** O bug [#871](https://github.com/nullclaw/nullclaw/issues/871) é etiquetado como crítico e impacta diretamente o caso de uso central do NullClaw: rodar em dispositivos baratos e com recursos limitados. A falta de suporte DuckDuckGo nativo força dependência de API externa, contradizendo a proposta de acessibilidade do projeto.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features novas (Issues)

| Issue | Autor | Feature |
|---|---|---|
| [#895](https://github.com/nullclaw/nullclaw/issues/895) | LiWeny16 | Config para desabilitar placeholder de typing no canal Lark |
| [#894](https://github.com/nullclaw/nullclaw/issues/894) | LiWeny16 | Config para responder a todas mensagens de grupo (não só @mentions) |

### Features em desenvolvimento (PRs abertas)

| PR | Autor | Feature |
|---|---|---|
| [#896](https://github.com/nullclaw/nullclaw/pull/896) | DonPrus | Adaptador nativo ACP stdio JSON-RPC — integração Agent Client Protocol |
| [#885](https://github.com/nullclaw/nullclaw/pull/885) | sleep3r | **Hackathon WB:** NullClaw Data Governance Layer |
| [#783](https://github.com/nullclaw/nullclaw/pull/783) | yanggf8 | Cron subagent, histórico de execuções, output JSON, hardening de segurança |

**Sinais de roadmap:** A PR [#896](https://github.com/nullclaw/nullclaw/pull/896) sobre ACP stdio adapter indica expansão para protocolos de interoperabilidade com agentes externos. A PR [#885](https://github.com/nullclaw/nullclaw/pull/885) de governança de dados sugere interesse em compliance e controle de dados — tema relevante para uso empresarial.

---

## 7. Resumo de Feedback dos Usuários

### Dores identificadas

1. **Barreira de entrada com Zig:** Instalação complexa no Debian sem documentação clara (issue [#820](https://github.com/nullclaw/nullclaw/issues/820)).
2. **Inviabilidade em dispositivos low-end:** Usuários com hardware limitado não conseguem usar `web_search` (issue [#871](https://github.com/nullclaw/nullclaw/issues/871)).
3. **Documentação de benchmark desatualizada:** Medições do README divergem da realidade atual, gerando confusão (issue [#473](https://github.com/nullclaw/nullclaw/issues/473)).

### Cenários de uso emergentes

- **Agentes interagindo em grupo (Lark):** Demandas por configurações flexíveis de comportamento em grupos indicam crescimento de uso em ambientes colaborativos.
- **Automação com cron:** A PR [#783](https://github.com/nullclaw/nullclaw/pull/783) com scheduler robusto aponta para adoção em tarefas de automação recorrente.
- **Integração com Workflows:** A PR [#897](https://github.com/nullclaw/nullclaw/pull/897) sobre documentação Zig sugere novos usuários chegando ao projeto.

---

## 8. Backlog que Merece Atenção

| Issue/PR | Idade | Status | Motivo da atenção |
|---|---|---|---|
| [#783](https://github.com/nullclaw/nullclaw/pull/783) | ~1 mês | Aberta | Cron subagent com alto valor funcional; sem comentários há tempo considerável |
| [#473](https://github.com/nullclaw/nullclaw/issues/473) | ~2 meses | Aberta | README com benchmark incorreto pode impactar percepção de novos usuários |
| [#820](https://github.com/nullclaw/nullclaw/issues/820) | ~3 semanas | Aberta | PR [#897](https://github.com/nullclaw/nullclaw/pull/897) endereça, mas PR está aberta há 1 dia sem merge |
| [#871](https://github.com/nullclaw/nullclaw/issues/871) | ~2 semanas | Aberta | Bug crítico labelado, mas sem resposta da equipe ainda |
| [#885](https://github.com/nullclaw/nullclaw/pull/885) | ~4 dias | Aberta | Hackathon com potencial estratégico; merece review da equipe |

**Prioridade sugerida:**
1. **#871** — Responder ao bug crítico ou etiquetar com milestone
2. **#897** — Review e merge para resolver documentação de setup
3. **#783** — Engajar com autor para feedback ou decisão de design

---

*Relatório gerado automaticamente com base nos dados do GitHub de nullclaw/nullclaw em 2026-05-08.*

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo — Ecossistema de Agentes de IA Open Source

**Data-base:** 2026-05-08 | **Projetos analisados:** 7

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta neste período um cenário de **duas velocidades distintas**: de um lado, projetos em fase de consolidação e maturidade (Hermes Agent, IronClaw, PicoClaw) que equilibram volume alto de atividade com disciplina de releases e qualidade de código; de outro, projetos em desenvolvimento intensivo (ZeroClaw, NullClaw) com pipeline robusto mas gargalos de revisão ou estabilidade. A tônica comum é a expansão de **suporte a múltiplos canais de mensageria** (Telegram, Discord, Slack, Feishu, WhatsApp, Matrix) e a necessidade de **resiliência em LLM providers** — tanto na estabilidade de requisições quanto na compatibilidade com modelos de reasoning. A ausência de releases formais em 5 dos 7 projetos nas últimas 24h sugere que a maioria das equipes está em ciclos de consolidação pré-lançamento.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | Releases (7d) | Bugs Críticos Abertos | Avaliação de Saúde |
|---|---|---|---|---|---|
| **Hermes Agent** | 50 (41 ativas, 9 fechadas) | 50 (37 abertos, 13 merged) | **v0.13.0** (864 commits, 295 contribuidores) | 2 P0/P1 (security: credential leakage, prompt injection) | 🟢 Consolidado |
| **IronClaw** | 24 (17 ativas, 7 fechadas) | 50 (21 abertos, 29 merged) | **v0.28.0** (Reborn reescrita) | 3 P1 (Telegram/Gmail auth) | 🟢 Saudável |
| **NanoBot** | 10 (4 abertas, 6 fechadas) | 32 (21 abertos, 11 merged) | Nenhuma | 1 crítica (WebSocket media drop) | 🟡 Bom, em monitoramento |
| **PicoClaw** | 35 (13 ativas, 22 fechadas) | 47 (30 abertos, 17 merged) | **v0.2.8-nightly** (build automatizada) | 2 alta (session race, voice transcription) | 🟡 Bom, com instabilidade |
| **CoPaw** | 50 (30 ativas, 20 fechadas) | 33 (11 abertos, 22 merged) | Nenhuma (último tag: v1.1.5.post2) | 1 alta (WeChat message loss) | 🟡 Ativo, foco em UX |
| **NullClaw** | 6 | 7 (2 merged) | Nenhuma | 1 crítica (`web_search` low-end) | 🟡 Fase de consolidação |
| **ZeroClaw** | 50 | 50 (0 merged) | Nenhuma | 8 P0/P1 (Matrix corruption, shell tool, Docker) | 🔴 Crítico — gargalo de revisão |

**Observação metodológica:** Os números de issues/PRs do ZeroClaw (50/50) representam volume total acumulado em triagem/revisão simultânea, não necessariamente novos eventos em 24h — o indicador mais revelador é que **0 PRs foram merged** no período, contrastando com os demais projetos.

---

## 3. Posicionamento do Projeto Principal (NullClaw)

NullClaw ocupa uma posição de **referência conceitual** no ecossistema, diferenciando-se dos pares por:

| Dimensão | Posicionamento do NullClaw | Comparação com Pares |
|---|---|---|
| **Linguagem/Stack** | Zig — primazia em performance e binários estáticos | Apenas NullClaw usa Zig; ZeroClaw/IronClaw usam Rust; demais usam Python/TypeScript |
| **Proposta de valor** | Agente leve para dispositivos de baixo recurso | Hermes, NanoBot, CoPaw focam em desktop/servidor; IronClaw em cloud enterprise |
| **Arquitetura de tools** | `zig-qm-toolkit` centralizado (hooks, agents, skills, verify 4-tier) — PR #893 | Unique: modularidade nativa em linguagem compilada vs. plugins dinâmicos |
| **Tamanho da comunidade** | 6 issues + 7 PRs/24h — menor volume | Hermes Agent domina em escala (295 contribuidores, 864 commits/release) |
| **Ciclo de releases** | Nenhuma release recente — consolidação pré-lançamento | IronClaw e Hermes publicam releases frequentes; ZeroClaw está estagnado |
| **Compatibilidade** | Manutenção de `AGENTS.md` e `CLAUDE.md` existentes | Pattern de migração amigável não observado nos pares |

**Pontos fortes frente aos pares:**
- Binários Zig oferecem footprint mínimo, atraindo nicho de dispositivos embarcados e IoT
- Arquitetura de toolkit 4-tier (hooks → agents → skills → verify) é mais opinionada que a de CoPaw ou PicoClaw
- Compatibilidade retroativa com contratos existentes minimiza atrito de migração

**Pontos de atenção:**
- Barreira de entrada com Zig: documentação de instalação no Debian é issue aberta há ~3 semanas (#820)
- Atividade de comunidade 4–8x menor que os líderes (Hermes, NanoBot, IronClaw)
- Bug crítico `web_search` em dispositivos low-end contradiz proposta central do projeto

---

## 4. Focos Técnicos Compartilhados

Cinco necessidades técnicas emergem transversalmente nos sete projetos:

### 4.1 Resiliência de WebSocket e Canais
| Projeto | Problema específico |
|---|---|
| **NanoBot** | 3 issues de WebSocket simultâneas — handshake failures (Windows/macOS), discard silencioso de mídia (#3674) |
| **PicoClaw** | Race conditions em session history desde v0.2.5; echo de mensagens em multi-channel |
| **IronClaw** | Falhas de auth em Telegram que causam estado terminal na conversation |
| **ZeroClaw** | Canal Matrix com corrupção silenciosa de sessions entre instâncias (#6487) |

**Síntese:** O padrão indica que à medida que projetos escalam para múltiplos canais, o gerenciamento de estado de sessão WebSocket/long-polling se torna o principal vetor de instabilidade.

### 4.2 Compatibilidade com Modelos de Reasoning
| Projeto | Status |
|---|---|
| **NullClaw** | Correção de schema na Responses API em modo `api_mode=responses` (PR #790) |
| **NanoBot** | Bug com DeepSeek-v4-flash (`reasoning_content` required after queries — #3665, fechado) |
| **PicoClaw** | Fallback para campos `thinking`/`reasoning` em DeepSeek-R1 via Ollama (PR #1858) |
| **IronClaw** | Correção de tool-calling para DeepSeek, Gemini e OpenRouter via clientes dedicados (PR #3326) |
| **CoPaw** | Parsing de `think_content` em DeepSeek; filtro de reasoning em provedores OpenAI-compatíveis |

**Síntese:** Modelos com reasoning chain explícito (DeepSeek-R1, Gemini, Claude extended thinking) exigem adaptações específicas de provider que não são cobertas pela compatibilidade genérica OpenAI — cada projeto está reinventando esse adapter localmente.

### 4.3 Multi-Canal e Provider-Agnostic
- **NanoBot:** PR #3486 (SimpleX), PR #3684 (WeChat), expansão de canais
- **PicoClaw:** Suporte a Feishu, Telegram, Slack, Discord com PRs simultâneas
- **IronClaw:** Epic #3031 de migração de surface de produto com adapters por canal
- **ZeroClaw:** Desktop-first como estratégico, WhatsApp Web, Matrix
- **CoPaw:** Discussion #280 sobre built-in skills/MCPs — fricção de setup como tema central

### 4.4 Interoperabilidade e Protocolos
| Projeto | Signal |
|---|---|
| **NullClaw** | PR #896 — ACP stdio JSON-RPC adapter (Agent Client Protocol) |
| **PicoClaw** | PR #2811 — Docker-backed MCP integration test framework |
| **CoPaw** | PlanNotebook (#3238) e skill testing CLI (#3999) |
| **ZeroClaw** | ACP sandbox review (#6516), TOTP gated commands (#5779) |

### 4.5 Persistência e Stores Duráveis
- **IronClaw** lidera com stores PostgreSQL/libSQL para run-state, session threads e capability leases
- **PicoClaw** enfrenta race conditions persistentes em session history
- **NanoBot** trabalha em persistência de `_last_summary` e correção de sessões corrompidas
- **CoPaw** resolve expiração de links de arquivos (#4047) e cleanup de sessions

---

## 5. Análise de Diferenciação

### Por Público-Alvo

| Projeto | Público primário | go-to-market |
|---|---|---|
| **NullClaw** | Desenvolvedores Zig, IoT, dispositivos embarcados | Niche performance-first |
| **Hermes Agent** | power users, deployers multi-canal | Corrida de feature, comunidade massiva |
| **IronClaw** | Enterprise, multi-workspace, NEAR ecosystem | Arquitetura Reborn, durabilidade |
| **NanoBot** | Desenvolvedores de agentes, pesquisadores | Estabilidade e CI robusto |
| **PicoClaw** | Operações multi-provedor em produção | Provider stacking, account rotation |
| **CoPaw** | Usuários finais chineses (WeChat, Feishu) | UX de console, integração Qwen |
| **ZeroClaw** | Desktop-native users, segurança | App Tauri, TOTP, sandbox |

### Por Arquitetura Técnica

| Projeto | Stack primário | Padrão arquitetural |
|---|---|---|
| **NullClaw** | Zig | Modular toolkit compilado |
| **Hermes Agent** | Python | Plugin-based com MCP, watchers |
| **IronClaw** | Rust | Actor-based com Reborn (host foundation) |
| **NanoBot** | Python | Agent core + gateway adapters |
| **PicoClaw** | Python/TypeScript | Provider strict compatibility mode |
| **CoPaw** | Python | Console-centric, skill registry |
| **ZeroClaw** | Rust | Tauri desktop, ACP protocol, sandbox |

### Por Estratégia de Feature

**Quem está expandindo canais:**
PicoClaw, NanoBot, IronClaw — todos investindo em novos canais simultaneamente.

**Quem está investindo em desktop:**
ZeroClaw (Tauri, menu bar, auto-update), NullClaw (CLI-first).

**Quem está maturando infraestrutura:**
IronClaw (Reborn), NanoBot (CI Ruff full coverage).

**Quem está estagnado:**
ZeroClaw (0 merges, 8 P0/P1, PRs aguardando review há >3 semanas).

---

## 6. Tração e Maturidade da Comunidade

### Ranking por Velocidade de Consolidação (PRs merged / PRs abertos)

| Posição | Projeto | Ratio | Interpretação |
|---|---|---|---|
| 1 | **IronClaw** | 29/21 ≈ **1.38** | Mergeia mais do que abre — equipe consolida o pipeline |
| 2 | **CoPaw** | 22/11 = **2.0** | Fecha o dobro do que abre — disciplina de close |
| 3 | **NanoBot** | 11/21 ≈ **0.52** | Fecha ~metade do que abre — ritmo sustentável |
| 4 | **PicoClaw** | 17/30 ≈ **0.57** | Aberto > fechado — volume de review alto |
| 5 | **NullClaw** | 2/7 ≈ **0.29** | Baixo volume, mas proporção okay para escala |
| 6 | **Hermes Agent** | 13/37 ≈ **0.35** | Volume muito alto, mas fluxo consistente |
| 7 | **ZeroClaw** | 0/50 = **0.0** | **Pipeline completamente estagnado** |

### Ranking por Maturidade de Release

| Posição | Projeto | Release | Qualidade |
|---|---|---|---|
| 1 | **Hermes Agent** | v0.13.0 — 864 commits, changelog formal, stats completas | ⭐⭐⭐ Production-ready |
| 2 | **IronClaw** | v0.28.0 — Reborn consolidado, breaking changes gerenciadas | ⭐⭐⭐ Production-ready |
| 3 | **PicoClaw** | v0.2.8-nightly — build automatizada, sem changelog formal | ⭐⭐ Nightly, uso com cautela |
| 4 | **CoPaw** | v1.1.5.post2 — release antigo, nenhum novo tag | ⭐ Aguardando consolidação |
| 5 | **NullClaw** | Nenhuma — fase de consolidação pré-release | ⭐ Aguardando milestone |
| 6 | **NanoBot** | Nenhuma — pipeline em revisão | ⭐ Aguardando milestone |
| 7 | **ZeroClaw** | Nenhuma — pipeline completamente estagnado | ⚠️ Sem visibility de release |

### Ranking por Qualidade de CI/Testing

| Projeto | Indicador de qualidade |
|---|---|
| **NanoBot** | Ruff linter full coverage (todas as regras F) — PR #3672 |
| **IronClaw** | E2E nightly em falha, mas vertical-slice tests em discussão ativa |
| **PicoClaw** | Contribuidor dominante `badgerbees` resolve bugs coordenados — coesão alta |
| **Hermes Agent** | 295 contribuidores, 588 PRs merged desde última release — maturidade de processo |
| **CoPaw** | Bug close rate de 67% em 24h — responsividade alta |
| **NullClaw** | Documentação de benchmark desatualizada (#473) — gap de DX |
| **ZeroClaw** | CI aparentemente não finalizou merges — possível gap de automação |

---

## 7. Sinais de Tendência

### T7.1 — Consolidação em vez de Expansão
A queda de releases formais em 5/7 projetos simultaneamente (NullClaw, NanoBot, CoPaw, ZeroClaw e parcialmente PicoClaw) indica que o ecossistema está em **fase de consolidação pós-rápida-iteração**. Os líderes (Hermes Agent, IronClaw) acabaram de publicar releases massivas e agora estabilizam. Os followers estão convergindo para o mesmo comportamento.

### T7.2 — Protocolos de Interoperabilidade como Diferencial
Três projetos (NullClaw com ACP stdio, PicoClaw com MCP integration framework, ZeroClaw com ACP sandbox) estão investindo em **camadas de protocolo abertas**. Isso sugere que o mercado está se movendo de "agente monolítico" para "agente como componente interoperável" — trend que favorece NullClaw por seu alinhamento com Agent Client Protocol.

### T7.3 — Segurança como Feature Track Independente
ZeroClaw (TOTP shell commands), IronClaw (secrets stores), PicoClaw (exec guard hardening), Hermes Agent (credential leakage P0) mostram que **hardening de segurança está se tornando disciplina separada** de features funcionais. Usuários corporativos (evidenciados em IronClaw e Hermes) são o driver primário.

### T7.4 — Reasoning Models forçam Refatorações de Provider
A fragmentação de campos (`reasoning_content`, `thinking`, `thought_signature`, `extended_thinking`) em modelos de reasoning está gerando **trabalho repetido em todos os projetos**. Nenhum projeto possui abstração agnóstica

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-05-08

---

## 1. Panorama do Dia

O NanoBot manteve um ritmo de desenvolvimento intenso em 08 de maio de 2026, com **32 PRs atualizados** (21 abertos, 11 merged/fechados) e **10 issues processadas** (4 abertas, 6 fechadas) nas últimas 24 horas. A atividade de PRs supera significativamente a de issues fechadas, indicando que a equipe está em modo de consolidação e preparação para release — embora nenhuma nova versão tenha sido publicada hoje. Observa-se uma concentração notável em correções de estabilidade (WebSocket, logging, manejo de sessões) e em melhorias de qualidade de código via CI. O projeto segue maduro, com alto volume de contribuições externas e nenhuma sinalização de crise.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24 horas.**

O repositório não registrou novas versões para 2026-05-08. A ausência de release é consistente com o padrão de consolidação observedo — a equipe está claramente revisando PRs pendentes e preparando integrações antes de um próximo tag.

> ℹ️ Para quem está aguardando features pendentes (e.g., Whisper local em #3513, SimpleX em #3486), ainda não há data confirmada de release. Acompanhem a aba "Releases" do repositório.

---

## 3. Progresso do Projeto

### PRs Merged/Fechadas Hoje (11 total)

| # | PR | Autor | Resumo do Impacto |
|---|-----|--------|-------------------|
| **#3660** | `fix(dream): restore cursor with memory state` | Jefsky | Resolve regressão em que o cursor do Dream não era restaurado junto com arquivos de memória em operações Git-backed. Adiciona teste de regressão e limpa problemas de lint no módulo de memória. |
| **#1835** | `Added support for sending arbitrary additional arguments to backend LLMs` | alekwo | Permite que usuários passem argumentos customizados (e.g., `"stream": false` para Ollama) nas requisições aos LLMs, habilitando melhor tool calling e configurações avanzadas. |
| **#3677** | `fix(api): remove enable_compression to restore real SSE streaming` | zhw415876999-prog | Remove o buffer de compressão HTTP do aiohttp que agrupava chunks SSE, restaurando streaming incremental em tempo real. Impacta diretamente a experiência do usuário final no frontend. |
| **#3672** | `chore(ci): Enable full ruff -F (all F rules) checks` | yorkhellen | Eleva a cobertura do linter Ruff de apenas F401/F841 para todas as regras F, capturando uma gama muito maior de problemas em stage de CI. |
| **#3678** | `refactor(logging): preserve tracebacks in remaining except blocks` | chengyongru | Substitui `logger.error` por `logger.exception` nos blocos `except` restantes, garantindo que stack traces sejam preservados para diagnóstico em produção. |

### Análise do Progresso

As PRs fechadas hoje，集中am em **três eixos**:

1. **Estabilidade e debugabilidade** (#3677, #3678) — melhoram significativamente a capacidade de diagnóstico em produção.
2. **Qualidade de código / CI** (#3672) — eleva a barra de qualidade com cobertura total de lint.
3. **Funcionalidades de agent** (#3660, #1835) — resolvem dores concretas de configuração de LLMs e restauram comportamento esperado do Dream.

---

## 4. Temas Quentes da Comunidade

### Issues com Mais Comentários (por engajamento)

| # | Título | Tipo | Comentários | Autor | Tema Central |
|---|--------|------|-------------|--------|--------------|
| **#3652** | `[enhancement] Can Dream be disabled?` | Feature | 2 | skyline75489 | Desejo de desabilitar completamente o módulo Dream via flag de configuração |
| **#3665** | `[bug] deepseek-v4-flash — reasoning_content error` | Bug | 2 | tomjuggler | API do DeepSeek rejeitando requisições por falta de `reasoning_content` em thinking mode |
| **#3650** | `[enhancement] Configure bot name and icon` | Feature | 1 | mraad | Personalização visual do bot (nome e ícone) em vez do padrão "nanobot is thinking..." |

### Análise dos Demandas

1. **Customização do bot (#3650)** — Marcada como `good first issue`, sinaliza que a experiência de branding é uma demanda recorrente. O autor propõe configuração via `config.json` (`"botName"`). Esta é uma feature de baixa complexidade técnica e alto valor percebido pelo usuário final.

2. **Desabilitar Dream (#3652)** — O módulo Dream tem comportamento opinativo; há interesse legítimo em desativá-lo para deployments mais minimalistas. A discussão sugere adição de flag `enabled` na configuração do Dream.

3. **DeepSeek-v4-flash (#3665)** — Bug de integração com API de reasoning, indicando que o Nanobot não está passando corretamente o campo `reasoning_content` em chamadas subseqüentes. Este tipo de bug tende a ser crítico para quem usa provedores de reasoning.

---

## 5. Bugs e Estabilidade

### Bugs Reportados Hoje (por severidade)

#### 🔴 Alta Severidade / Impacto Crítico

| # | Bug | Status | Canal | Impacto |
|---|-----|--------|--------|---------|
| **#3665** | deepseek-v4-flash: `reasoning_content` required after queries | CLOSED | LLM Integration | Falha após algumas consultas — API rejeita requisições |
| **#3681** | `Error calling LLM: timed out after 300s` | CLOSED | LLM Integration | Timeouts recorrentes no backend LLM |

#### 🟡 Média Severidade / Impacto Moderado

| # | Bug | Status | Canal | Impacto |
|---|-----|--------|--------|---------|
| **#3682** | WebSocket handshake failure | CLOSED | Gateway | Erros de abertura de handshake WebSocket |
| **#3683** | WebSocket cross-browser issue (Windows/macOS) | CLOSED | Gateway | Acesso ao gateway falha em browsers Windows/macOS, mas funciona em mobile |
| **#3674** | WebSocket channel silently drops media attachments | OPEN | WebSocket Channel | Anexos de mídia em mensagens WebSocket são descartados silenciosamente — o agent nunca os recebe |
| **#3604** | WhatsApp voice messages not downloading | CLOSED | WhatsApp | Mensagens de voz do WhatsApp não fazem download |

#### 🟢 Baixa Severidade / Correções de UX

| # | Bug | Status | Canal | Impacto |
|---|-----|--------|--------|---------|
| **#3670** | Runtime context prompt scaffolding leaks into persisted chat history | OPEN | Context/Memory | Scaffold de contexto vaza para histórico persistido/replayado |
| **#2132** | Runtime context metadata merged into user messages | CLOSED | Context | Metadados de contexto sendo injetados diretamente no conteúdo da mensagem do usuário |

### Visão Geral de Estabilidade

**Preocupação primária: WebSocket.** Três issues separadas (#3682, #3683, #3674) indicam problemas no subsistema WebSocket — de handshakes a descarte silencioso de mídia. Há PRs abertos atacando alguns desses problemas, mas aIssue #3674 continua **aberta e sem comentários**, representando risco de experiência degradada para clientes WebSocket.

**Observação positiva:** A equipe está respondendo rapidamente — todos os bugs WebSocket reportados ontem já estão fechados ou têm PR associado.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Novas Solicitadas

| # | Feature | Autor | Complexidade | Sinais de Roadmap |
|---|---------|--------|--------------|-------------------|
| **#3650** | Configure bot name and icon | mraad | Baixa | Boa candidate para milestone, marcado `good first issue` |
| **#3652** | Can Dream be disabled? | skyline75489 | Baixa | Configuração granular de módulos |
| **#3513** | Unify transcription providers + add local Whisper support | hussein1362 | Alta | Estratégia de "provider-agnostic" para áudio — indica direção de arquitetura |

### PRs Abertos com Potencial de Roadmap

| # | PR | Tema | Estratégia |
|---|-----|------|------------|
| **#3486** | `feat(channels): Adding SimpleX channel` | Novo canal de mensageria | Expansão de plataforma |
| **#1443** | `feat: decouple heartbeat reasoning from notification` | Heartbeat agent silencioso por padrão | UX/performance |
| **#3655** | `feat(cli): display model reasoning content during streaming` | Exibir reasoning content em tempo real | Debugging/UX |
| **#3642** | `feat(exec): allow custom bwrap bind mounts` | Sandbox configurável | Segurança/flexibilidade |
| **#1219** | Stock market analysis + code performance analysis skills | Skills de domínio específico | Extensibilidade |
| **#3622** | `feat(my): persist focus key to session metadata` | Persistência de estado do agent | Robustez de sessão |

### Análise de Roadmap

Os sinais convergem para **três direções estratégicas**:

1. **Multi-canal e Provider-Agnostic** — SimpleX (#3486), unificação de transcription (#3513), novos canais WeChat (#3684).
2. **Customização e UX** — Nome/ícone do bot (#3650), exibição de reasoning (#3655), toggle do Dream (#3652).
3. **Robustez e Sessionalidade** — Persistência de `_last_summary` (#3685, #3686), correção de sessões corrompidas (#3680), memória consolidada (#3687).

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

1. **WebSocket instável em desktop** — Usuários Windows e macOS reportam falhas de handshake (#3682, #3683), enquanto mobile funciona. Sinal de possível incompatibilidade de headers HTTP ou CORS em browsers desktop.

2. **Timeouts de LLM** — Erros recorrentes de "timed out after 300s" (#3681) sugerem problemas de conectividade ou configuração de timeout em ambientes Windows. O impacto é de UX degradada em produção.

3. **WhatsApp Voice quebrado** — O download de mensagens de voz não funciona (#3604), bloqueando um caso de uso específico.

4. **Media em WebSocket descartado** — Quando usuários anexam imagens/arquivos via WebSocket, o agent não os recebe (#3674). Problema silencioso, difícil de diagnosticar pelo usuário.

### Cenários de Uso Emergentes

- **Stock market analysis** (#1219) — Uso do bot como analista financeiro.
- **Voice integration** — Transcrição via Whisper, mensagens de voz WhatsApp.
- **Custom branding** — Deploys personalizados com nome/ícone próprio.

### Satisfação vs. Insatisfação

| Indicador | Status |
|-----------|--------|
| Atividade de PRs | ✅ Alta (32 atualizados, 11 merged) |
| Resposta a bugs | ✅ Rápida (bugs WebSocket fechados rapidamente) |
| Qualidade de código | ✅ Melhorando (CI Ruff full, logging normalizado) |
| Estabilidade WebSocket | ⚠️ Em monitoramento (3 issues relacionadas) |
| Cobertura de canais | ✅ Em expansão (SimpleX, WeChat, Matrix) |
| Documentação de features | ⚠️ Rooms for improvement (feature flags ainda não implementadas) |

---

## 8. Backlog que Merece Atenção

### Issues sem Resposta há >3 dias

| # | Título | Idade | Prioridade | Motivo da Urgência |
|---|--------|-------|------------|-------------------|
| **#3674** | WebSocket channel silently drops media from inbound messages | Criada 2026-05-07, 0 comentários | 🔴 Alta | Bug silencioso — usuários não sabem que mídia está sendo perdida |
| **#3670** | Runtime context prompt scaffolding leaks into persisted/replayed chat history | Criada 2026-05-06, 0 comentários | 🟡 Alta | Corrompe histórico de chat persistido; pode causar comportamento errático do agent |

### PRs Abertos com Alto Impacto e Sem Revisão

| # | PR | Impacto | Risco de Stale |
|---|-----|---------|----------------|
| **#3513** | `feat(audio): unify transcription providers + local Whisper` | Alto | Alto — feature grande, precisa de review antes de merge |
| **#3486** | `feat(channels): Adding SimpleX channel` | Alto | Médio — novo canal, pode conflitar com architecture decisions |
| **#1443** | `feat: decouple heartbeat reasoning from notification` | Médio | Baixo — já tem discussão, aguardando aprovação |
| **#1939** | `feat: skip heartbeat before llm call` | Médio | Médio — otimização, impacto em LLM providers com ToS restritivas |

### Recomendação Prioritária

> **⚠️ Ação recomendada para maintainers:** A Issue #3674 está aberta sem comentários e descreve um bug silencioso que afeta severamente a experiência de users com anexos via WebSocket. Dado que há PRs relacionados sendo fechados hoje, seria prudente priorizar triagem e resposta — mesmo que apenas para informar ao reporter que o bug está sob investigação.

---

**Links de Referência**
- Repositório: https://github.com/HKUDS/nanobot
- Issues em destaque: [#3674](https://github.com/HKUDS/nanobot/issues/3674), [#3670](https://github.com/HKUDS/nanobot/issues/3670), [#3652](https://github.com/HKUDS/nanobot/issues/3652)
- PRs críticos: [#3513](https://github.com/HKUDS/nanobot/pull/3513), [#3486](https://github.com/HKUDS/nanobot/pull/3486), [#3677](https://github.com/HKUDS/nanobot/pull/3677)

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-05-08

## 1. Panorama do Dia

O Hermes Agent manteve um nível de atividade intenso em 08 de maio de 2026. Nas últimas 24 horas, foram registradas **50 issues** (41 abertas/ativas, 9 fechadas) e **50 PRs** (37 abertos, 13 merged/fechados), indicando uma alta cadência de trabalho tanto na resolução de problemas quanto na entrega de funcionalidades. O projeto acaba de lançar a **v0.13.0 "The Tenacity Release"**, com 864 commits, 588 PRs merged e 295 contribuidores desde a versão anterior — demonstrando maturidade e crescimento contínuo da comunidade. Entre os destaques do dia, chama atenção a presença de **dois P0/P1 de segurança** (vazamento de credenciais e injeção de prompt), que requerem atenção imediata. A plataforma Telegram continua sendo a principal fonte de issues, refletindo sua posição como o principal canal de integração.

---

## 2. Lançamentos

### v2026.5.7 — Hermes Agent v0.13.0 "The Tenacity Release"
📅 **Data:** 7 de maio de 2026 | 🔗 [Release no GitHub](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.5.7)

**Estatísticas desde v0.12.0:**
- **864 commits** mergeados
- **588 PRs** incorporados
- **829 arquivos** modificados
- **128.366 linhas** inseridas
- **282 issues** fechadas (13 P0, 36 P1)
- **295 contribuidores** da comunidade (incluindo co-autores)

**Destaque temático:** O nome "The Tenacity Release" sugere foco em resiliência, finalização de tarefas e recuperação de falhas — temas recorrentes nas issues abertas. O changelog completo pode ser consultado na página oficial do release.

**Nota de migração:** Não foram informadas breaking changes explícitas, mas dado o volume de mudanças, recomenda-se teste cuidadoso em ambientes de staging antes de upgrade em produção.

---

## 3. Progresso do Projeto

### PRs Merged/Closed Recentemente

| # | PR | Descrição | Impacto |
|---|-----|-----------|--------|
| [#21507](https://github.com/NousResearch/hermes-agent/pull/21507) | `feat(mcp): add diagnostics doctor command` | Adiciona `hermes mcp doctor` para diagnóstico de servidores MCP, incluindo contagem de tools, classificação de falhas de auth/transport e orientação de próxima ação | **Alto** — facilita debugging |
| [#21492](https://github.com/NousResearch/hermes-agent/pull/21492) | `fix(mcp): unwrap platforms key in channels_list` | Corrige `channels_list` que sempre retornava 0 canais; root cause era iteração errada do diretório | **Médio** — bug funcional corrigido |
| [#21455](https://github.com/NousResearch/hermes-agent/pull/21455) | `fix(analytics): prevent silent token loss and add Claude 4.5–4.7 pricing` | Resolve subcontagem silenciosa de tokens sob carga concorrente; adiciona pricing de Claude 4.5–4.7 e expõe reasoning tokens na UI | **Alto** — precisão de analytics |
| [#21509](https://github.com/NousResearch/hermes-agent/pull/21509) | `fix: clear stale config context_length override on model switch` | Corrige retenção de context window do modelo anterior ao trocar via `/model` | **Médio** — saneamento de estado |

### PRs Abertos de Destaque (com potencial de merge)

| # | PR | Descrição | Prioridade |
|---|-----|-----------|------------|
| [#21499](https://github.com/NousResearch/hermes-agent/pull/21499) | `fix: filter shell snapshot functions by block, not by line` | Corrige `grep` line-based que deixava corpo de funções após filtrar nomes — causava erros em bash load | **P1** |
| [#20900](https://github.com/NousResearch/hermes-agent/pull/20900) | `feat(docker): bootstrap auth.json from env on first boot` | Permite seed de credenciais OAuth via `HERMES_AUTH_JSON_BOOTSTRAP` em containers | **P2** |
| [#21497](https://github.com/NousResearch/hermes-agent/pull/21497) | `feat(watchers): interval-polling watcher engine` | Adiciona `hermes watch` — polling pull-based com watermark dedup | **P3** |
| [#21500](https://github.com/NousResearch/hermes-agent/pull/21500) | `feat(trust): rule-based permission engine` | Camada declarativa de permissões em `~/.hermes/trust.json` com precedência allow/deny/ask | **P3** |
| [#21502](https://github.com/NousResearch/hermes-agent/pull/21502) | `feat(credbroker): credential broker subprocess with encrypted vault` | Subprocesso isolado com vault Fernet-encrypted e IPC via Unix socket | **P3** |
| [#18505](https://github.com/NousResearch/hermes-agent/pull/18505) | `fix(matrix): isolate room context and restore reliable inbound dispatch` | PR 1/3 da série Matrix — fundamentos de isolamento e dispatch confiável | **P1** |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários + reações)

1. **[#7237](https://github.com/NousResearch/hermes-agent/issues/7237)** — `Error: Response truncated due to output length limit` *(CLOSED)*  
   - **15 comentários, 4 reactions** — A issue mais comentada do período. Afeta CLI chat e gateways (Telegram/Discord/Slack) com respostas longas. **Status:** Fechada, indicando resolução em andamento ou já aplicada.

2. **[#20842](https://github.com/NousResearch/hermes-agent/issues/20842)** — Kanban migration fails: `no such column spawn_failures` *(CLOSED)*  
   - **5 comentários** — Falha de schema SQLite após auto-update. **Status:** Fechada.

3. **[#5729](https://github.com/NousResearch/hermes-agent/issues/5729)** — Telegram resolver failure caching + missing degraded-state detection *(OPEN)*  
   - **4 comentários** — O resolver do Telegram falha no boot antes da rede estar pronta, sem detecção de estado degradado. **P2 — Aguardando atenção.**

4. **[#10452](https://github.com/NousResearch/hermes-agent/issues/10452)** — Support multi Telegram bots for gateway routing *(OPEN)*  
   - **4 comentários** — Demanda real de deploys com múltiplos bots (ex: bot principal + bot dev/equipe). **P3 — Feature request.**

5. **[#9645](https://github.com/NousResearch/hermes-agent/issues/9645)** — Optional, Configurable Proactive Check-Ins *(OPEN)*  
   - **2 comentários, 3 reactions** — Feature que permite ao Hermes enviar follow-ups proativos. Desativado por padrão, budget-aware, rate-limited. **P3 — Boa aceitação da comunidade.**

6. **[#16525](https://github.com/NousResearch/hermes-agent/issues/16525)** — Expose `model_switch` as agent-callable tool *(OPEN)*  
   - **2 comentários, 2 reactions** — Permitir que o agente автономно roteie entre modelos baseado na complexidade da tarefa. **P3 — Alinha com visão de autonomia.**

7. **[#5394](https://github.com/NousResearch/hermes-agent/issues/5394)** — Thread-bound agent runtimes for Telegram topics *(OPEN)*  
   - **1 comentário, 4 reactions** — binding de threads Telegram a runtimes externos (Codex/Claude/Gemini), estilo OpenClaw. **P3 — Alta demanda estratégica.**

### Análise de Demandas

Os temas mais discutidos revelam três eixos:
- **Resiliência de plataforma:** Telegram é o canal com mais issues, especialmente related a reconnect, cold-boot e streaming.
- **Autonomia do agente:** Várias requests pedem que o Hermes tome decisões autonomous (model switch, proactive check-ins, tool routing).
- **Multi-tenancy:** Suporte a múltiplos bots, múltiplos profiles, workspaces isolados — indica adoção em cenários enterprise.

---

## 5. Bugs e Estabilidade

### P0 — Crítico (Imediato)

| # | Bug | Descrição | Status |
|---|-----|-----------|--------|
| [#20785](https://github.com/NousResearch/hermes-agent/issues/20785) | Credential leakage em chat e reasoning blocks | Agente vaza senhas, API keys e tokens em outputs — falha sistêmica de redaudit. Afeta todos os provedores. | **CLOSED** ✅ |

### P1 — Alto (Urgente)

| # | Bug | Descrição | Status |
|---|-----|-----------|--------|
| [#21467](https://github.com/NousResearch/hermes-agent/issues/21467) | `tui_gateway.slash_worker` subprocess leak | Cada uso de slash command no dashboard cria subprocess — ao usar 128 workers, box de 7.8GB entra em swap. | **OPEN** |
| [#21454](https://github.com/NousResearch/hermes-agent/issues/21454) | Re-running `install.sh` creates infinite-loop shim | Re-execução do script destrói entry point pip e cria bash shim circular — CLI hangs imediatamente. | **OPEN** |
| [#21425](https://github.com/NousResearch/hermes-agent/issues/21425) | Prompt injection em `_smart_approve()` | `command` e `description` são interpolados no prompt LLM sem delimitador estrutural — risco de injeção. | **OPEN** |
| [#17063](https://github.com/NousResearch/hermes-agent/issues/17063) | Gateway reconnect watcher para de retry após 20 tentativas | Para plataformas retryable (ex: Telegram), outage transitório vira permanente — requer restart manual. | **OPEN** |
| [#18086](https://github.com/NousResearch/hermes-agent/issues/18086) | Telegram Updater goes silent forever after network blip | `_handle_polling_network_error` esgota ladder de 10 tentativas e nunca mais refaz — similar a #17063. | **CLOSED** ✅ |

### P2 — Médio (Importante)

| # | Bug | Descrição | Status |
|---|-----|-----------|--------|
| [#5729](https://github.com/NousResearch/hermes-agent/issues/5729) | Telegram cold-boot resolver failure + missing degraded-state detection | Falha silenciosa antes da rede estar pronta. | **OPEN** |
| [#21498](https://github.com/NousResearch/hermes-agent/issues/21498) | `max_output_tokens` de provider custom é ignorado | Config normalizer dropa o parâmetro silenciosamente — modelo usa default mínimo de 2048 tokens. | **OPEN** |
| [#12607](https://github.com/NousResearch/hermes-agent/issues/12607) | Retryable reconnects stop after prolonged network loss | Similar a #17063 — mesmo root cause. | **OPEN** |
| [#12534](https://github.com/NousResearch/hermes-agent/issues/12534) | Docker sandbox não recebe `docker_forward_env` vars | Agents com CLIs que precisam de credenciais (vercel, firebase, gh) falham. | **OPEN** |
| [#21457](https://github.com/NousResearch/hermes-agent/issues/21457) | Root-mode install error with uv python path | Installer seta venv Python para path do root — usuários normais não conseguem rodar. | **OPEN** |
| [#21432](https://github.com/NousResearch/hermes-agent/issues/21432) | `os.kill(pid, 0)` raises SystemError on Windows | `get_running_pid()` crasha imediatamente no Windows 11. | **OPEN** |
| [#21474](https://github.com/NousResearch/hermes-agent/issues/21474) | MCP `channels_list` sempre retorna 0 | Schema mismatch com `channel_directory.json`. | **CLOSED** ✅ |

### P3 — Baixo (Cosmético/Edge Cases)

| # | Bug | Descrição | Status |
|---|-----|-----------|--------|
| [#21481](https://github.com/NousResearch/hermes-agent/issues/21481) | `hermes doctor` reports Gemini API key válido como inválido | Falso positivo no diagnóstico. | **OPEN** |
| [#21503](https://github.com/NousResearch/hermes-agent/issues/21503) | Kanban migration crash: `ALTER TABLE ADD COLUMN` não idempotente | Dispatcher falha em cada tick. | **OPEN** |
| [#21439](https://github.com/NousResearch/hermes-agent/issues/21439) | Telegram streaming usa `editMessageText` polling — flickering | Streaming lento causa visibilidade ruim. | **OPEN** |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features com Alta Demanda (Reações > 2)

| # | Feature | Descrição | 👍 |
|---|---------|-----------|----|
| [#5394](https://github.com/NousResearch/hermes-agent/issues/5394) | Thread-bound agent runtimes for Telegram topics | Superfície direta em topics Telegram com runtimes externos (Codex/Claude/Gemini). | 4 |
| [#9645](https://github.com/NousResearch/hermes-agent/issues/9645) | Optional, Configurable Proactive Check-Ins | Follow-ups proativos do Hermes — off por default, budget-aware. | 3 |
| [#16525](https://github.com/NousResearch/hermes-agent/issues/16525) | Expose `model_switch` as agent-callable tool | Roteamento autônomo por complexidade de tarefa. | 2 |
| [#18148](https://github.com/NousResearch/hermes-agent/issues/18148) | Runtime extension hooks (`transform_user_input`, `before_llm_call`, `intercept_tool_call`) | Hooks Python para interceptar/reescrever/bloquear comportamento do agente. | 1 |
| [#5906](https://github.com/NousResearch/hermes-agent/issues/5906) | Bittensor Wallet skill | Gerenciamento de wallet TAO (stake/unstake, delegação, subnet exploration). | 0 |

### Novas Features Arquivadas/Discussão

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-05-08

---

## 1. Panorama do Dia

O projeto PicoClaw demonstra **atividade intensa e saudável** neste período de 24 horas, com 82 eventos totais (35 issues + 47 PRs). O estado geral indica uma codebase em evolução ativa, com **13 issues abertas/ativas e 30 PRs em análise**, sugerindo uma frente de desenvolvimento robusta. A release nightly v0.2.8-nightly demonstra que o projeto mantém um ciclo de build contínuo. A maioria das issues fechadas foram resolvidas com as correções mergingadas entre 2026-04-01 e 2026-05-07, indicando um fluxo de review ativo. O cenário de bugs recentes (especialmente race conditions em session history e problemas de voice transcription) mostra demanda por maior robustez em cenários multi-usuário e multimídia.

---

## 2. Lançamentos

### Nova Release: Nightly Build

| Item | Detalhes |
|------|----------|
| **Versão** | `v0.2.8-nightly.20260507.788cda5c` |
| **Tipo** | Nightly Build automatizado |
| **Data** | 2026-05-07 |
| **Status** | ⚠️ Instável — uso em produção com cautela |

**Resumo:** Esta é uma build noturna do branch `main` (comparada com a tag `v0.2.8`). Por se tratar de um build automatizado, não há changelog formal documentado, apenas o link de diff disponível. Não foram reportados breaking changes específicos nesta release, mas por natureza nightly, pode conter regressions não testadas.

🔗 **Comparação de changelog:** https://github.com/sipeed/picoclaw/compare/v0.2.8...main

---

## 3. Progresso do Projeto

### PRs Recentes Fechadas/Merged (17 total, destaque para as mais impactantes)

| PR | Autor | Domínio | Impacto |
|----|-------|---------|---------|
| [#2504](https://github.com/sipeed/picoclaw/pull/2504) | jacrify | **audio/discord** | ✅ Corrigiu corrupção de frames Opus no decoder OGG — bug crítico que afetava transmissão de voz no Discord |
| [#2460](https://github.com/sipeed/picoclaw/pull/2460) | alexrexby | **tool/mcp** | ✅ Fix para envio de objeto vazio ao invés de `nil` em `CallTool` — resolvia incompatibilidade com MCP servers em TypeScript SDK (validação Zod) |
| [#2443](https://github.com/sipeed/picoclaw/pull/2443) | Pepelospalotes2005 | **provider/codex** | ✅ Melhorou handling de responses vazias para `gpt-5.4` via Codex/OpenAI OAuth |
| [#2091](https://github.com/sipeed/picoclaw/pull/2091) | badgerbees | **channel/feishu** | ✅ Resolveu false-negatives em detecção de @mention em grupos Feishu usando live bot name probing |
| [#2090](https://github.com/sipeed/picoclaw/pull/2090) | badgerbees | **channel/telegram** | ✅ Fix em streaming: eliminou drafts parciais persistentes e corrigiu roteamento em Forums/Topics |
| [#2089](https://github.com/sipeed/picoclaw/pull/2089) | badgerbees | **channel/slack** | ✅ Resolvido race condition de double-processing entre `message` e `app_mention` events |
| [#1858](https://github.com/sipeed/picoclaw/pull/1858) | badgerbees | **provider/ollama** | ✅ Adicionou fallback para campos `thinking`/`reasoning` — resolvia output perdido em modelos DeepSeek-R1 no Ollama |
| [#1854](https://github.com/sipeed/picoclaw/pull/1854) | badgerbees | **agent** | ✅ Sanitização occurrence-aware de tool_call_id — resolvia erros 400 Bad Request com Anthropic/Cerebras |
| [#1683](https://github.com/sipeed/picoclaw/pull/1683) | badgerbees | **provider** | ✅ Modo strict compatibility para providers OpenAI-compat (Ollama, vLLM, DeepSeek, Groq) |
| [#2298](https://github.com/sipeed/picoclaw/pull/2298) | badgerbees | **tool/exec** | ✅ Fail-closed hardening em script preflight — comandos ambíguos agora falham ao invés de pular validação |

**Análise:** O contributor `badgerbees` domina o volume de PRs mergeadas, com contribuições significativas em múltiplos domínios (channels, providers, agent, tools). Os PRs resolvem problemas antigos (stale标记adas) de forma coordenada.

---

### PRs Abertas em Review (30 abertas, destaque)

| PR | Autor | Domínio | Descrição |
|----|-------|---------|-----------|
| [#2814](https://github.com/sipeed/picoclaw/pull/2814) | bogdanovich | **tools/exec** | 🔧 Permite paths de script relativos no exec guard — resolve false positives em paths como `scripts/send_voice_reply_telegram.sh` |
| [#2793](https://github.com/sipeed/picoclaw/pull/2793) | bogdanovich | **tools** | 🔧 Fix para hidden tools sendo promotionadas no registry errado — afeta BM25SearchTool e RegexSearchTool |
| [#2790](https://github.com/sipeed/picoclaw/pull/2790) | bogdanovich | **agents** | 🔧 Passa `agent_id` do spawn tool para sub-turn execution — permite routing para agentes específicos |
| [#2758](https://github.com/sipeed/picoclaw/pull/2758) | bogdanovich | **telegram** | 🔧 Buffering de media groups/albums — processa albums como uma única mensagem |
| [#2813](https://github.com/sipeed/picoclaw/pull/2813) | mrigangha | **pid/gateway** | 🔧 Verifica identidade gateway antes de bloquear startup em stale PID |
| [#2811](https://github.com/sipeed/picoclaw/pull/2811) | afjcjsbx | **mcp** | ✨ Adiciona Docker-backed integration test framework + streamable HTTP alias para MCP |
| [#2719](https://github.com/sipeed/picoclaw/pull/2719) | loafoe | **channel/slack_webhook** | ✨ Novo canal `slack_webhook` output-only via Incoming Webhooks |

**Análise:** O contributor `bogdanovich` está liderando múltiplas correções críticas de ferramentas e canais. A PR #2811 representa uma melhoria significativa de infraestrutura de testes.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (por comentários)

| Issue | Tipo | Comentários | Título | Demanda Principal |
|-------|------|-------------|--------|-------------------|
| [#629](https://github.com/sipeed/picoclaw/issues/629) | 🐛 bug | 13 | LLM call failed não faz retry | Retry automático em HTTP 500 |
| [#2408](https://github.com/sipeed/picoclaw/issues/2408) | ✨ enhancement | 11 | LLM Account Stacking (Cartridge-Belt) | Rotação automática de API keys em rate limits |
| [#2171](https://github.com/sipeed/picoclaw/issues/2171) | ✨ enhancement | 10 | Migrar para OpenAI Responses API | Adoção da nova API recomendada |
| [#2468](https://github.com/sipeed/picoclaw/issues/2468) | 🐛 bug | 8 | Scheduled Task Fails to Execute | Comandos cron restritos a canais internos |
| [#1763](https://github.com/sipeed/picoclaw/issues/1763) | 🐛 bug | 8 | aarch64 .deb not install | Problema de instalação em ARM64 |
| [#1042](https://github.com/sipeed/picoclaw/issues/1042) | 🐛 bug | 8 | exec guardCommand problemas | Regex que bloqueia comandos legítimos com `../` |
| [#2465](https://github.com/sipeed/picoclaw/issues/2465) | ✨ feature | 7 | SMTP email channel | Envio de emails via SMTP para tasks agendadas |

### Análise das Demandas

1. **Resiliência de LLM (#629):** A comunidade demonstra forte demanda por mecanismos de retry mais robustos. Com 13 comentários, é a issue mais discutida — usuários experimentam hang em tasks longas quando o servidor retorna HTTP 500.

2. **Account Stacking (#2408):** Feature request popular para rotação automática de API keys, conceito de "cartridge-belt" de contas — demonstra necessidade real em produção com múltiplos providers/accounts.

3. **API Modernization (#2171):** Migrar do Chat Completions API para Responses API (recomendação oficial da OpenAI) — indica que o projeto busca manter compatibilidade com evoluções de API.

4. **Segurança/Tools (#1042):** Problema do guardCommand com regex simplista que bloqueia comandos legítimos (ex: `wttr.in/Beijing`). Demonstra tensão entre segurança (bloquear `../`) e UX.

---

## 5. Bugs e Estabilidade

### Issues Abertas com Prioridade

| Severidade | Issue | Título | Impacto |
|------------|-------|--------|---------|
| 🔴 **High** | [#2721](https://github.com/sipeed/picoclaw/issues/2721) | Session history race ainda reproduzindo em v0.2.5 — `tool_use_id` 400 | Race condition persistente desde v0.2.5, afeta API Anthropic Messages |
| 🔴 **High** | [#2817](https://github.com/sipeed/picoclaw/issues/2817) | Voice transcription succeed mas transcript não é passado ao LLM | LLM recebe `[voice]` ao invés de texto transcrito |
| 🟡 **Medium** | [#2702](https://github.com/sipeed/picoclaw/issues/2702) | Conversation history lacks sender attribution em multi-user groups | Atribuição histórica perdida em canais grupais |
| 🟡 **Medium** | [#2796](https://github.com/sipeed/picoclaw/issues/2796) | Histórico mostra apenas última mensagem do usuário | Compression de histórico afeta visualização do usuário |
| 🟡 **Medium** | [#1042](https://github.com/sipeed/picoclaw/issues/1042) | exec guardCommand com false positives | Bloqueio indevido de comandos legítimos |
| 🟢 **Low** | [#629](https://github.com/sipeed/picoclaw/issues/629) | LLM call failed não faz retry | Falta de retry em erros HTTP 500 |

### Bugs Recentemente Fechados (resolvidos entre 2026-04-01 e 2026-05-07)

| Issue | Domínio | Bug |
|-------|---------|-----|
| [#2377](https://github.com/sipeed/picoclaw/issues/2377) | tool/exec | ANSI control characters e Unicode bidi em terminal output |
| [#2472](https://github.com/sipeed/picoclaw/issues/2472) | tool | `list_dir` retorna "invalid argument" no Windows (path separator) |
| [#2478](https://github.com/sipeed/picoclaw/issues/2478) | agent/skill | Uso múltiplo de `/use <skill>` sobrescreve skills anteriores |
| [#2482](https://github.com/sipeed/picoclaw/issues/2482) | provider | Open weights models com OpenAI backend não funcionam em tool calls |
| [#2446](https://github.com/sipeed/picoclaw/issues/2446) | channel | Echo de mensagens em setup multi-channel com pending tasks |
| [#2447](https://github.com/sipeed/picoclaw/issues/2447) | channel | Apenas última mensagem processada em consecutivos |
| [#2464](https://github.com/sipeed/picoclaw/issues/2464) | channel/feishu | Mensagens sequenciais em Feishu — apenas última responde |

**Análise de Estabilidade:** O padrão de bugs fechados mostra foco em:
- **Canais:** Problemas de roteamento e estado em multi-channel setups
- **Ferramentas:** Path handling cross-platform e segurança de terminal
- **Providers:** Compatibilidade com modelos open weights

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features em Demandas

| Feature | Issue | Autor | Potencial Impacto |
|---------|-------|-------|------------------|
| **General Attachment Support** | [#348](https://github.com/sipeed/picoclaw/issues/348) | Zepan | 📦 Suporte a arquivos, docs e mídia em todos os canais — feature de alta prioridade |
| **LLM Account Stacking** | [#2408](https://github.com/sipeed/picoclaw/issues/2408) | tranthiphu56 | 🔄 Rotação automática de API keys — crítico para produção |
| **Dual HEAD Authentication** | [#2169](https://github.com/sipeed/picoclaw/issues/2169) | eastwoodnet | 🔐 Suporte a headers X-API-Key adicionais |
| **SMTP Email Channel** | [#2465](https://github.com/sipeed/picoclaw/issues/2465) | MaoJianwei | 📧 Canal output-only via email para reports agendados |
| **Multiple Feishu Apps** | [#2493](https://github.com/sipeed/picoclaw/issues/2493) | zuozhehao | 🏢 Multi-tenancy para apps Feishu |
| **MCP Secrets em .security.yml** | [#2444](https://github.com/sipeed/picoclaw/issues/2444) | dsus4wang | 🔒 Suporte a secrets em configs MCP |

### Indicadores de Roadmap

1. **Attachment Support (#348):** Issue antiga (2026-02-17) com alta prioridade — indica foco em expansividade de canais e tipos de conteúdo
2. **OpenAI Responses API (#2171):** Refatoração arquitetural significativa para modernizar integração com OpenAI
3. **Slack Webhook Channel (#2719 PR):** Expansão de canais output-only — indica diversificação de integrações de saída

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Dor | Manifestação | Severidade |
|-----|-------------|------------|
| **Instabilidade em tasks longas** | Tasks "hang" sem retry em HTTP 500 | 🔴 Alta |
| **Race conditions em session history** | Erros 400 persistem desde v0.2.5 | 🔴 Alta |
| **Path guards excessivamente agressivos** | Comandos legítimos bloqueados | 🟡 Média |
| **Cross-platform tool issues** | `list_dir` quebrado no Windows | 🟡 Média |
| **Multi-channel state bleeding** | Echo de mensagens entre canais | 🟡 Média |
| **Voice transcription broken** | Transcrição bem-sucedida mas não usada | 🟡 Média |

### Cenários de Uso Reportados

- **Produção com múltiplos providers:** Usuários precisam de rotação automática de API keys para rate limits/quotas
- **Grupos multi-usuário:** Atribuição de histórico em Discord/Feishu groups é crítica
- **Models open weights:** Interesse em usar modelos locais (mlx-lm, Ollama) com tool calling
- **Scheduled tasks + reporting:** Combinação de cron + SMTP para automação de reports

### Satisfação/Insatisfação

**Positivo:**
- Suporte a múltiplos canais (Telegram, Discord, Slack, Feishu) está maduro
- Provider ecosystem expanding (GitHub Copilot, OpenAI, SiliconFlow, Ollama)
- Community contributors ativos (badgerbees, bogdanovich)

**Negativo:**
- Persistence e session management ainda tem race conditions
- Edge cases em path handling geram frustração
- Documentação de authentication/configuração deficitária (#2439,

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-05-08

---

## 1. Panorama do dia

O projeto IronClaw apresenta **atividade excepcionalmente alta** neste período, com 50 PRs atualizados e 24 issues nas últimas 24h. A versão **v0.28.0** foi lançada ontem (07/05), consolidando a infraestrutura do **Reborn** — a grande reescrita arquitetural do sistema. O foco atual da equipe são migrações de superfície de produto, construção de adaptadores de canais e implementação de stores duráveis para PostgreSQL/libSQL. Bugs críticos de LLM providers (DeepSeek, Gemini, OpenRouter) foram resolvidos no PR #3326, mas falhas no E2E noturno e problemas de integração com Telegram/Gmail ainda demandam atenção.

---

## 2. Lançamentos

### ironclaw-v0.28.0
📦 **Release**: 2026-05-07 | [Release Notes](https://github.com/nearai/ironclaw/releases/tag/ironclaw-v0.28.0)

**Mudanças principais:**
- Substrato de integração Reborn aterrissou em `main`, incluindo:
  - **Host foundation crates** — infraestrutura base do runtime
  - **Capability host** — sistema de capacidades
  - **Runtime dispatcher** — despacho central
  - **Process lifecycle** — gerenciamento de ciclos de vida
  - **Filesystem, secrets, network** — primitivas de I/O e segurança
  - **Extension manifest registry** — registro de manifestos de extensões

**Crate versions atualizados:**
- `ironclaw`: 0.27.0 → 0.28.0
- `ironclaw_common`: 0.4.0 → 0.4.1 (✓ API compatible)

---

## 3. Progresso do Projeto

### PRs significativos merged/fechados hoje

| PR | Título | Escopo | Impacto |
|----|--------|--------|---------|
| [#3366](https://github.com/nearai/ironclaw/pull/3366) | fix(missions): auto-resume paused missions after gate resolution | agent, channel, db | Missões pausadas por OAuth agora retomam automaticamente |
| [#3378](https://github.com/nearai/ironclaw/pull/3378) | Wire durable run-state store selection | dependencies | Stores de PostgreSQL/libSQL para run-state disponíveis em composição |
| [#3379](https://github.com/nearai/ironclaw/pull/3379) | feat(threads): add durable session thread stores | docs, dependencies | Persistência de threads, mensagens e artefatos de summary |
| [#3368](https://github.com/nearai/ironclaw/pull/3368) | feat(reborn): add database capability lease stores | docs, dependencies | Stores duráveis para leases de capabilities |
| [#3349](https://github.com/nearai/ironclaw/pull/3349) | Add durable run-state database stores | docs, dependencies | RunStateApprovalStore atômico para persistência de approvals |
| [#3326](https://github.com/nearai/ironclaw/pull/3326) | fix(llm): route DeepSeek, Gemini, and OpenRouter through dedicated clients | agent, llm | **Corrige bugs críticos de tool-calling para 3 providers** |
| [#3377](https://github.com/nearai/ironclaw/pull/3377) | feat(reborn): add agent loop host facade contract | — | Contrato AgentLoopHost para driver-facing ports |
| [#3375](https://github.com/nearai/ironclaw/pull/3375) | test(reborn): add event stream manager facade | — |Facade EventStreamManager sobre serviços de runtime/audit |
| [#3369](https://github.com/nearai/ironclaw/pull/3369) | feat(reborn): add durable conversation state backends | docs, dependencies | Backends libSQL/Postgres para conversations, pairings, threads |
| [#3374](https://github.com/nearai/ironclaw/pull/3374) | (fix) multi-tenant workspace memory isolation | agent, workspace | Isolamento de memória por workspace/tenant corrigido |

### Pipeline ativo (PRs abertos de destaque)

- [#3366](https://github.com/nearai/ironclaw/pull/3366) — auto-resume de missões após gates (XL, risk: medium)
- [#3379](https://github.com/nearai/ironclaw/pull/3379) — session thread stores duráveis (XL, risk: low)
- [#3351](https://github.com/nearai/ironclaw/pull/3351) — ProductAdapter contract (PR 1/7 da stack)
- [#3364](https://github.com/nearai/ironclaw/pull/3364) — bug bash: restart modal, approval clarity, http defaults (L, risk: medium)

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento

| Issue | Título | Comentários | Tema |
|-------|--------|-------------|------|
| [#3067](https://github.com/nearai/ironclaw/issues/3067) | [TEST] Reborn: Add vertical-slice integration test suite | 27 | Cobertura E2E do Reborn |
| [#3022](https://github.com/nearai/ironclaw/issues/3022) | Reborn cutover blocker: add event substrate integration tests | 9 | Blocker para cutover do Reborn |
| [#3016](https://github.com/nearai/ironclaw/issues/3016) | Reborn cutover blocker: add reference AgentLoopHost facade | 7 | Contrato AgentLoopHost |
| [#3093](https://github.com/nearai/ironclaw/issues/3093) | [Reborn] Add EventProjectionService | 4 | Serviço de projeção de eventos |

### Análise das demandas

**1. Reborn como tema central (85% das issues/tagged)**
- A comunidade está trackeando ativamente os blockantes para o cutover do Reborn
- Issues de migração de superfície de produto (#3290, #3289, #3288, #3287, #3285) acumulam múltiplos related items
- Demanda clara por testes de integração vertical que provem o funcionamento através de entrypoints públicos

**2. Multi-workspace support (#3334)**
- Usuário solicita suporte a múltiplos workspaces Slack em uma única instância IronClaw
- Descreve cenário de channel-relay para multi-tenant
- 0 comentários — precisa de feedback da equipe

**3. LLM reasoning display (#3327)**
- Feature request para exibir `reasoning_content` do modelo na UI
- Integração com debug panel e persistência em DB
- PR #3326 já implementa a parte de routing, faltando a superfície UI

---

## 5. Bugs e Estabilidade

### Bugs reportados por severidade

| Severidade | Issue | Descrição | Status |
|------------|-------|-----------|--------|
| **🔴 P1** | [#3320](https://github.com/nearai/ironclaw/issues/3320) | IronClaw não continua após Gmail auth falhar | ABERTO |
| **🔴 P1** | [#3319](https://github.com/nearai/ironclaw/issues/3319) | Gmail Authentication falha (400) via Telegram | ABERTO |
| **🔴 P1** | [#3317](https://github.com/nearai/ironclaw/issues/3317) | Telegram setup não funciona localmente | ABERTO |
| **🟠 P2** | [#3225](https://github.com/nearai/ironclaw/issues/3225) | Gemini API-key falha tool-calling sem thought_signature | **RESOLVIDO** (#3326) |
| **🟠 P2** | [#3201](https://github.com/nearai/ironclaw/issues/3201) | Tool use para DeepSeek não funciona | **RESOLVIDO** (#3326) |
| **🟠 P2** | [#3274](https://github.com/nearai/ironclaw/issues/3274) | Data missing após upgrade 0.26.0 → 0.27.0 | ABERTO |
| **🟠 P2** | [#3229](https://github.com/nearai/ironclaw/issues/3229) | LLM provider fallback persiste no DB permanentemente | ABERTO |

### Falha no pipeline E2E

- [#3323](https://github.com/nearai/ironclaw/issues/3323) — **Nightly E2E failed** (v2-engine)
- Run: https://github.com/nearai/ironclaw/actions/runs/25475781496
- Status: cancelled

### Análise

**Tríade Telegram/Gmail é o principal risco de estabilidade:**
- 3 bugs P1 relacionados a Telegram + Gmail auth
- Usuário reportando que mesmo `/clear` não recupera a conversa
- Regressão funcional crítica — conversations ficam em estado terminal

**LLM routing bugs resolvidos:**
- Os bugs de DeepSeek/Gemini/OpenRouter eram causados por protocolo errado no `providers.json`
- Roteamento via cliente genérico OpenAI stripping campos específicos de cada provider
- Solução em #3326 indica necessidade de validação de configs de providers

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features abertas

| Issue | Feature | Prioridade | Escopo |
|-------|---------|-----------|--------|
| [#3334](https://github.com/nearai/ironclaw/issues/3334) | Multi-workspace support (Slack) | Alta | channel |
| [#3327](https://github.com/nearai/ironclaw/issues/3327) | Surface LLM reasoning content (UI thinking) | Média | llm, ui |
| [#3259](https://github.com/nearai/ironclaw/issues/3259) | Publish 0.25.0–0.27.0 to crates.io | Crítica | release |
| [#3333](https://github.com/nearai/ironclaw/issues/3333) | Production wiring and missing crates | Alta | reborn |

### Sinais de roadmap

**Reborn cutover blockers identificados:**
- Event substrate integration tests (#3022)
- AgentLoopHost facade (#3016)
- Vertical-slice test suite (#3067)
- Obligations handoff tests (#3148) — **RESOLVIDO**

**Migração de superfície de produto em andamento:**
O Epic #3031 está gerando múltiplas issues de migração:
- Missions, jobs, routines → MissionService boundaries
- Secrets, OAuth, auth → typed auth-flow services
- Extensions, skills, MCP, WASM → lifecycle/config/services
- Memory, workspace → Reborn memory services
- Channel adapters → ProductAdapter contract

**Database stores em construção:**
O Reborn está implementando stores duráveis para:
- SessionThreadService (libSQL/PostgreSQL)
- CapabilityLeaseStore
- RunStateApprovalStore
- Conversation state backends

---

## 7. Resumo de Feedback dos Usuários

### Dores críticas reportadas

**1. Telegram quebrou em produção (#2902, #3317, #3319, #3320)**
- Múltiplos usuários reportando falhas
- NEAR Foundation instance impactado
- Auth failures causam estado terminal na conversation
- Screenshots anexadas demonstrando crashes

**2. Upgrade causa perda de dados (#3274)**
- Usuário fez upgrade 0.26.0 → 0.27.0
- Chat tab não mostra dados inicialmente
- Projects tab mostra "Failed Threads Warning"
- Requer refresh manual

**3. Crates.io desatualizado (#3259)**
- Usuário downstream pinned a 0.24.0 por CVEs no wasmtime
- Repo tem até 0.27.0, mas crates.io só tem 0.24.0
- Bloqueio para consumers que puxam de crates.io

### Feedback positivo

**Atividade colaborativa alta:**
- Issue #3067 acumulou 27 comentários de discussão técnica
- Comunicação clara entre core contributors (serrrfirat, ilblackdragon, nickpismenkov)
- PRs com descrições detalhadas e contexto de relacionados

### Insights de uso

**Cenários observados:**
- Agentes de longa duração (missions) com gates de aprovação OAuth
- Multi-tenant via Telegram e Slack
- Integração com Gmail para workflow
- WASM extensions e MCP tools

---

## 8. Backlog que Merece Atenção

### Issues sem resposta há mais de 5 dias

| Issue | Título | Criado | Comentários |
|-------|--------|--------|-------------|
| [#2902](https://github.com/nearai/ironclaw/issues/2902) | Telegram not working for NEAR Foundation | 2026-04-23 | 1 |
| [#3067](https://github.com/nearai/ironclaw/issues/3067) | Reborn vertical-slice integration test suite | 2026-04-29 | 27 (ativo) |
| [#3022](https://github.com/nearai/ironclaw/issues/3022) | Event substrate integration tests | 2026-04-28 | 9 (ativo) |
| [#3016](https://github.com/nearai/ironclaw/issues/3016) | AgentLoopHost facade | 2026-04-28 | 7 (ativo) |

### Issues aguardando triagem/feedback

| Issue | Título | Status |
|-------|--------|--------|
| [#3334](https://github.com/nearai/ironclaw/issues/3334) | Multi-workspace support | ABERTO, 0 comentários |
| [#3259](https://github.com/nearai/ironclaw/issues/3259) | Publish 0.25.0–0.27.0 to crates.io | ABERTO, 1 comentário |
| [#3333](https://github.com/nearai/ironclaw/issues/3333) | Production wiring and missing crates | ABERTO, 1 comentário |

### Recomendações

1. **Priorizar tríade Telegram/Gmail** — 3 P1s abertos sobre mesmo fluxo
2. **Publicar versões no crates.io** — bloqueia downstream
3. **Responder #3334** — feature request legítimo sem feedback
4. **Investigar nightly E2E failure** — regressões podem estar entrando em main

---

## Métricas Resumo

| Indicador | Valor |
|-----------|-------|
| Issues ativas | 17 |
| Issues fechadas (24h) | 7 |
| PRs abertos | 21 |
| PRs merged/fechados (24h) | 29 |
| Novas releases | 1 (v0.28.0) |
| Bugs P1 abertos | 3 |
| Bugs resolvidos (24h) | 2 |
| PRs de documentação/dependências | 12 |
| PRs de feature (reborn) | 8 |

**Índice de saúde: 🟢 Saudável** — atividade muito alta, releases frequentes, bugs críticos sendo tracked ativamente. Atenção requerida para bugs Telegram/Gmail e publicação no crates.io.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do Projeto CoPaw — 2026-05-08

---

## 1. Panorama do dia

O CoPaw apresenta **alta atividade comunitária** com 50 issues e 33 PRs atualizados nas últimas 24h. Não houve lançamentos novos, mas o projeto mantém um fluxo robusto de correções e melhorias — 22 PRs foram merged/fechados, indicando bom ciclo de review. A base de usuários continua reportando problemas de estabilidade em canais (WeChat, Feishu) e UX-related issues (scroll lag, expiração de links,得多步驟 para adicionar modelos). O tom geral é de **manutenção ativa com foco em experiência do usuário e usabilidade**.

---

## 2. Lançamentos

**Nenhum release nas últimas 24h.** O último tag estável conhecido é v1.1.5.post2. A equipe está acumulando mudanças no pipeline de PRs sem tag formal.

---

## 3. Progresso do Projeto

### PRs Mergeados/Fechados (20 items, destaque nos mais relevantes):

| # | PR | Tipo | Contribuidor | Impacto |
|---|-----|------|--------------|---------|
| [#4091](https://github.com/agentscope-ai/QwenPaw/pull/4091) | Batch Enable/Disable skills | Enhancement | zhaozhuang521 | Resolve #3503 — adiciona botões em lote para habilidades |
| [#4089](https://github.com/agentscope-ai/QwenPaw/pull/4089) | Remove redundant URL prefix stripping | Bug fix | zhijianma | Relacionado a #4047 — corrige paths de preview de arquivos |
| [#4073](https://github.com/agentscope-ai/QwenPaw/pull/4073) | Respect custom name for default agent | Bug fix | CA-mambo | Resolve #3465 — agentes personalizados mantêm nomes customizados |
| [#4052](https://github.com/agentscope-ai/QwenPaw/pull/4052) | Solve duplicate rendering | Perf | zhaozhuang521 | Resolve #4023 — elimina re-renders duplicados no console |
| [#3911](https://github.com/agentscope-ai/QwenPaw/pull/3911) | Add GPT Image 2 tool plugin | Feature | rayrayraykk | Adiciona suporte a geração de imagens via GPT Image 2 |
| [#4085](https://github.com/agentscope-ai/QwenPaw/pull/4085) | Optimize language switching | Refactoring | zhaozhuang521 | Melhora UX de troca de idioma no console |

### PRs em Review (abertos para merge):

| # | PR | Tipo | Destaque |
|---|-----|------|----------|
| [#4095](https://github.com/agentscope-ai/QwenPaw/pull/4095) | feat(cli): add backup commands | Interface CLI para backups |
| [#3999](https://github.com/agentscope-ai/QwenPaw/pull/3999) | feat(skills): add cli skill test command | Teste de skills via linha de comando |
| [#3238](https://github.com/agentscope-ai/QwenPaw/pull/3238) | feat: add PlanNotebook support (experimental) | Planejamento de tarefas em agentes |

**Avanço significativo:** A refatoração do batch de skills (#4091) resolve uma dor recorrente de gerenciamento. O novo comando de backup CLI (#4095) indica maturidade operacional. O PlanNotebook (#3238) sugere direção de planejamento automático de tarefas.

---

## 4. Temas Quentes da Comunidade

### Issue com maior engajamento — [Discussion: Which Skills and MCPs Can Be Built-in?](https://github.com/agentscope-ai/QwenPaw/issues/280) (27 comentários)
**Status:** ABERTA | Criada: 2026-03-02

O projeto está discutindo quais Skills e MCPs devem vir pré-instalados para melhorar a experiência out-of-the-box. Há forte demanda por um **set inicial de capacidades** sem necessidade de configuração manual.

### Requests recorrentes agrupados por tema:

| Tema | Issues | Demanda |
|------|--------|---------|
| **Model provider expansion** | [#4030](https://github.com/agentscope-ai/QwenPaw/issues/4030), #3753 | Suporte a Vertex AI, Volcengine Coding Plan |
| **Workspace management** | [#3967](https://github.com/agentscope-ai/QwenPaw/issues/3967), [#4067](https://github.com/agentscope-ai/QwenPaw/issues/4067) | Separar configs de user workspace, path customizável |
| **MCP configuration** | [#3997](https://github.com/agentscope-ai/QwenPaw/issues/3997) | Timeout configurável para MCP clients |

**Sinal claro:** A comunidade quer menos fricção na configuração inicial — tanto em providers quanto em workspace setup.

---

## 5. Bugs e Estabilidade

### Bugs abertos (3 items críticos/medium)

| # | Bug | Severidade | Canal/Componente |
|---|-----|------------|------------------|
| [#4056](https://github.com/agentscope-ai/QwenPaw/issues/4056) | WeChat message loss under normal network | **High** | WeChat Channel |
| [#4051](https://github.com/agentscope-ai/QwenPaw/issues/4051) | DeepSeek think content parsing | **Medium** | Provider (DeepSeek) |
| [#4006](https://github.com/agentscope-ai/QwenPaw/issues/4006) | Reasoning content not filtered in OpenAI-compatible | **Medium** | Provider (MiniMax) |

### Bugs resolvidos nas últimas 24h (6 items)

- [#4059](https://github.com/agentscope-ai/QwenPaw/issues/4059) — Conversas longas não completam resposta (8 comentários) ✅
- [#3350](https://github.com/agentscope-ai/QwenPaw/issues/3350) — Scroll lag após 200+ rodadas ✅
- [#3573](https://github.com/agentscope-ai/QwenPaw/issues/3573) — Cron weixin KeyError ✅
- [#4047](https://github.com/agentscope-ai/QwenPaw/issues/4047) — Links de arquivos expiram após 1 dia ✅
- [#3976](https://github.com/agentscope-ai/QwenPaw/issues/3976) — Session cleanup mata tarefas em execução ✅
- [#3988](https://github.com/agentscope-ai/QwenPaw/issues/3988) — conda-pack conflit with pip ✅

**Análise:** Bug de mensagem loss no WeChat (#4056) é crítico — users reportam falta de resposta sem motivo aparente. A comunidade está reportando issues de streaming com modelos específicos (DeepSeek, MiMo) causando loops repetidos.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em demanda (issues abertas + thumbs up)

| # | Feature | 👍 | Componente |
|---|---------|-----|------------|
| [#4036](https://github.com/agentscope-ai/QwenPaw/issues/4036) | Too many steps to add a model | 0 | Console/Models |
| [#2235](https://github.com/agentscope-ai/QwenPaw/issues/2235) | Upgrade via web console | 1 | Console |
| [#4087](https://github.com/agentscope-ai/QwenPaw/issues/4087) | Enhance [File] module | 1 | Core |
| [#4088](https://github.com/agentscope-ai/QwenPaw/issues/4088) | Agent-to-agent session management | 0 | Core/Agents |
| [#4000](https://github.com/agentscope-ai/QwenPaw/issues/4000) | WeChat + browser sync + voice input | 0 | WeChat/Console |
| [#4008](https://github.com/agentscope-ai/QwenPaw/issues/4008) | Agent evaluation/benchmarking feature | 0 | Core |

### Potenciais próximas funcionalidades:

1. **Vertex AI Gemini provider** — demanda corporativa crescente para绕過 Google Developer API
2. **CLI skill testing** — melhoria DX para developers (#3999 em review)
3. **Backup CLI commands** — maturidade operacional (#4095 em review)
4. **PlanNotebook (experimental)** — planejamento automático de tarefas (#3238 em review)
5. **Batch operations para skills** — já mergeado, marcando evolução do console

---

## 7. Resumo de Feedback dos Usuários

### Dores principais identificadas:

**1. Estabilidade de canais (WeChat/Feishu)**
> "在微信里和智能体对话时，无法看到智能体在浏览器中的过程"
> "WeChat Channel Message Loss Under Normal Network Conditions"

**2. Escalabilidade de conversas longas**
> "页面进行超多轮对话后页面滚动变得特别卡"
> "对话内容太长后，似乎就无法正常回复"

**3. Complexidade de configuração**
> "Adding a new model is way too complicated. Too many clicks back and forth"

**4. Gerenciamento de workspace**
> "日常使用过程，会有大量文档读写，默认都是在agent的工作区...有很大概率会误删除，导致qwenpaw不能用了"

**5. Suporte a providers adicionais**
> "什么时候新增火山coding plan默认支持"

### Tendência de satisfação:
- **Aspectos positivos:** CLI funcional, canais ativos (Feishu, WeChat), comunidade responsiva
- **Aspectos negativos:** UX de configuração, estabilidade em conversas longas, expiração de tokens

---

## 8. Backlog que Merece Atenção

| # | Issue | Idade | Comentários | Status | Urgência |
|---|-------|-------|-------------|--------|----------|
| [#280](https://github.com/agentscope-ai/QwenPaw/issues/280) | Built-in Skills/MCPs discussion | ~66 dias | 27 | OPEN | **Alta** — impacto na experiência out-of-the-box |
| [#1502](https://github.com/agentscope-ai/QwenPaw/issues/1502) | Volcengine "Answers have stopped" | ~55 dias | 7 | CLOSED (bug) | Resolvido, mas validar implementação |
| [#1403](https://github.com/agentscope-ai/QwenPaw/issues/1403) | Feishu duplicate messages | ~56 dias | 6 | CLOSED | Resolvido |
| [#2235](https://github.com/agentscope-ai/QwenPaw/issues/2235) | Upgrade via web console | ~44 dias | 2 | OPEN | Média — demanda recorrente |
| [#3967](https://github.com/agentscope-ai/QwenPaw/issues/3967) | Workspace separation | ~8 dias | 4 | CLOSED | Resolvido |
| [#4088](https://github.com/agentscope-ai/QwenPaw/issues/4088) | Agent-to-agent session creation | 1 dia | 2 | OPEN | **Alta** — pode indicar bug/problema de design |

**Alertas específicos:**
- [#280](https://github.com/agentscope-ai/QwenPaw/issues/280) está aberta há 66 dias com alta engajamento — precisa de decisão de produto
- [#4056](https://github.com/agentscope-ai/QwenPaw/issues/4056) (WeChat message loss) é bug crítico sem resolução ainda

---

## Métricas de Saúde do Projeto

| Indicador | Valor | Interpretação |
|-----------|-------|---------------|
| Issues fechadas/ativas (24h) | 20/30 | **67% close rate** — saudável |
| PRs mergeados (24h) | ~15 | Fluxo de entrega ativo |
| Novos releases (7d) | 0 | Nenhuma release tag recente |
| Issues críticas abertas | 1 | WeChat message loss |
| PRs em review | ~8 | Pipeline saudável de features |

**Veredicto:** Projeto **ativo e saudável**, com ciclo de bugs responsivo. Foco em UX e estabilidade de canais seria beneficial para retenção.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-05-08

---

## 1. Panorama do Dia

O projeto ZeroClaw mantém altíssima atividade com **50 issues e 50 PRs atualizados nas últimas 24h**, sem nenhum lançamento ou merge realizado. A maioria esmagadora das mudanças permanece em revisão (PRs) ou aguardando triagem (issues). O estado atual revela um projeto em intensa fase de desenvolvimento e maturação, com pontos de atenção em **estabilidade (bugs P0/P1 críticos)**, **segurança** (shell tool, ACP sandbox, Docker) e **experiência do usuário** (desktop app, onboarding). Não houve nenhuma closure de PR ou issue — todo o movimento foi de criação e atualização, indicando um pipeline saudável mas com volume elevado demandando atenção dos mantenedores.

---

## 2. Lançamentos

**Nenhum release nas últimas 24h.** O projeto não publicou versões novas, releases de correção ou updates de segurança neste período.

---

## 3. Progresso do Projeto

**Nenhum PR merged ou fechado nas últimas 24h.** Todos os 50 PRs mostrados permanecem em estado `OPEN`, sinalizando que:

- O ciclo de revisão está ativo com diversas contribuições aguardando merge
- Não houve conclusões de feature branches ou correções estabilizadas
- O processo de CI/CD aparentemente não finalizou nenhuma integração

### PRs com potencial de impacto (em aberto):

| PR | Autor | Tamanho | Área | Descrição |
|---|---|---|---|---|
| [#5265](https://github.com/zeroclaw-labs/zeroclaw/pull/5265) | theonlyhennygod | XL | desktop/tauri | Menu bar chat agent com voz e upload de imagem — feature de desktop principal |
| [#5359](https://github.com/zeroclaw-labs/zeroclaw/pull/5359) | Jars44 | XL | provider/copilot | Integração nativa com GitHub Copilot |
| [#5892](https://github.com/zeroclaw-labs/zeroclaw/pull/5892) | Stealinglight | L | provider/runtime | Três blockers de produção: tool_choice, tool_use órfão e capability de visão |
| [#5652](https://github.com/zeroclaw-labs/zeroclaw/pull/5652) | Stealinglight | L | provider | Extended thinking nativo para Anthropic e Bedrock |
| [#5779](https://github.com/zeroclaw-labs/zeroclaw/pull/5779) | DjaPy | M | security | TOTP gate para comandos destrutivos do shell (fase 1) |

---

## 4. Temas Quentes da Comunidade

### Issues mais comentadas (por engajamento):

**#6360** — Prompt Caching não funciona no Telegram (2 comentários)  
Autor: edgarkech | Severidade: S2 | Tags: `channel:telegram`, `provider`, `agent:prompt`  
[Link](https://github.com/zeroclaw-labs/zeroclaw/issues/6360)  
O caching funciona via CLI mas falha no Telegram, indicando problema específico ao canal.

**#6434** — Shell tool recusada com `autonomy = "full"` (2 comentários)  
Autor: sam74S | Severidade: S1 (blocker) | Tags: `tool:shell`, `security`, `runtime`  
[Link](https://github.com/zeroclaw-labs/zeroclaw/issues/6434)  
Mesmo com configuração totalmente permissiva, `tool_dispatch` nunca chega ao runtime — quebra funcional crítica.

**#6472** — Gateway não consegue usar Postgres (2 comentários)  
Autor: hjh218 | Severidade: S2 | Tags: `memory:postgres`, `gateway`, `runtime`  
[Link](https://github.com/zeroclaw-labs/zeroclaw/issues/6472)  
Panic em runtime ao iniciar Postgres — nested Tokio runtime.

**#6487** — Channel instances de Matrix se corrompem mutuamente (1 comentário)  
Autor: singlerider | Severidade: S1 | Tags: `channel:matrix`, `security`, `priority:p0`  
[Link](https://github.com/zeroclaw-labs/zeroclaw/issues/6487)  
**Blocker crítico**: três defeitos interrelated no orchestrator e matrix.rs causam session corruption e dispatch incorreto.

### PRs com maior atenção:

- **#5265** (theonlyhennygod): Desktop menu bar com 7 tags de review necessárias, indicando feature grande e complexa
- **#5779** (DjaPy): TOTP gated_commands em revisão há semanas, fechando #3767
- **#5669** (TeoConnexioh): Correção de decrypt de secrets no Telegram — impacto direto em segurança

### Análise de demandas da comunidade:

1. **Desktop App é foco claro**: 7+ issues dedicado a features de menu bar, tray, auto-update, accessibility, crash reporting
2. **Segurança em destaque**: Shell tool, ACP sandbox, Docker image, secrets decryption — a comunidade está ativamente reportando vectores de risco
3. **Plugin Architecture**: Issue #6489 propõe unificar "Integrations" com "Plugins" em um catálogo unificado — sinal estratégico forte

---

## 5. Bugs e Estabilidade

### Severidade S0/S1 (Críticos — bloqueiam workflow):

| # | Bug | Canal/Área | Autor | Status |
|---|---|---|---|---|
| [#6487](https://github.com/zeroclaw-labs/zeroclaw/issues/6487) | Multi-alias channel instances se corrompem; sessions Matrix com state_dir compartilhado | `channel:matrix`, `channel:core` | singlerider | `status:accepted`, `priority:p0` |
| [#6434](https://github.com/zeroclaw-labs/zeroclaw/issues/6434) | Shell tool refusada com `autonomy = "full"` — `tool_dispatch` não chega ao runtime | `tool:shell`, `runtime` | sam74S | `status:accepted`, `priority:p1` |
| [#6500](https://github.com/zeroclaw-labs/zeroclaw/issues/6500) | Docker image `zeroclawlabs/tool-runner` não existe — risco S0 (segurança) | `docs`, `security.sandbox` | adoyle-h | `needs-maintainer-review`, `priority:p1` |
| [#6399](https://github.com/zeroclaw-labs/zeroclaw/issues/6399) | Custom provider envia paths de imagem local ao invés de data URLs — quebra multimodal | `provider:compatible` | vanbukin | `needs-maintainer-review`, `priority:p1` |
| [#6377](https://github.com/zeroclaw-labs/zeroclaw/issues/6377) | Llama.cpp retorna 500 em tool usage — deveria default para "responses" | `provider`, `onboard` | tidux | `needs-maintainer-review`, `priority:p1` |
| [#6516](https://github.com/zeroclaw-labs/zeroclaw/issues/6516) | ACP "cwd" locka agente fora dos seus próprios skill files | `security/sandbox` | tidux | `priority:p1` |

### Severidade S2 (Degraded behavior):

| # | Bug | Canal/Área | Autor | Status |
|---|---|---|---|---|
| [#6360](https://github.com/zeroclaw-labs/zeroclaw/issues/6360) | Prompt caching não funciona no Telegram | `channel:telegram` | edgarkech | `status:accepted` |
| [#6472](https://github.com/zeroclaw-labs/zeroclaw/issues/6472) | Gateway não consegue usar Postgres (nested runtime panic) | `memory:postgres` | hjh218 | `status:accepted` |
| [#6400](https://github.com/zeroclaw-labs/zeroclaw/issues/6400) | Docker bind mount shadowa web dashboard | `runtime/daemon` | rikwade | `needs-maintainer-review` |
| [#6410](https://github.com/zeroclaw-labs/zeroclaw/issues/6410) | google_workspace tool falha no Windows (.cmd não resolvido) | `tool:google-workspace` | BaroDevelopment | `needs-maintainer-review` |
| [#6402](https://github.com/zeroclaw-labs/zeroclaw/issues/6402) | Bash completion em loop infinito — crash de SSH session | `channel:cli` | Nillth | `status:in-progress` |

### Observações de estabilidade:

- **6 bugs P1/P0 ativos** simultaneamente — volume alto para uma release cycle
- **Canal CLI com bug in-progress** (#6402) — stack overflow em bash completion
- **Runtime panic recorrente** em Postgres (#6472) — nested Tokio
- **Docker security image missing** (#6500) — blocking para ambientes containerizados
- **Matrix channel com corruption silenciosa** (#6487) — risco de data loss em multi-agent

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features de alta prioridade (P1/P2) com signals fortes:

**Desktop App (macOS)** — Prioridade estratégica clara:
- [#6339](https://github.com/zeroclaw-labs/zeroclaw/issues/6339) Universal binary (arm64 + x86_64) para macOS
- [#6329](https://github.com/zeroclaw-labs/zeroclaw/issues/6329) Menu-bar tray items: quit, restart, dashboard, logs
- [#6327](https://github.com/zeroclaw-labs/zeroclaw/issues/6327) Channels overview parity (web → desktop)
- [#6499](https://github.com/zeroclaw-labs/zeroclaw/issues/6499) macOS UI control handlers: screenshot, click, keys, AX, AppleScript
- [#6332](https://github.com/zeroclaw-labs/zeroclaw/issues/6332) Auto-update via Tauri updater → GitHub releases
- [#6485](https://github.com/zeroclaw-labs/zeroclaw/issues/6485) Per-feature lazy permission prompts (Contacts, Calendar, etc.)

**Canais e Providers**:
- [#6371](https://github.com/zeroclaw-labs/zeroclaw/issues/6371) WhatsApp Web: `allowed_groups` allowlist (P1)
- [#6375](https://github.com/zeroclaw-labs/zeroclaw/issues/6375) V3 env-var override mechanism para credentials
- [#6416](https://github.com/zeroclaw-labs/zeroclaw/issues/6416) Onboarding validation: warn sobre incompatibilidades config/provider

**Arquitetura e Integrações**:
- [#6489](https://github.com/zeroclaw-labs/zeroclaw/issues/6489) **"Everything is a plugin"** — unified plugin catalog (Phased path from Integrations)
- [#6510](https://github.com/zeroclaw-labs/zeroclaw/issues/6510) Cron delivery mode: opção de enviar só mensagem final

### Sinais de roadmap emergentes:

1. **Desktop-first**: O contributor `theonlyhennygod` está liderando múltiplos PRs e issues de desktop — sugere prioridade de produto em direção ao app nativo
2. **Plugin unification**: Issue #6489 indica direção arquitetural de longo prazo — colapsar channels + providers + tools + plugins em catálogo unificado
3. **Security hardening**: TOTP para shell commands (#5779), ACP sandbox review (#6516), secrets decryption (#5669) — segurança como feature track
4. **Provider expansion**: Atomic Chat (#6513), Anthropic custom endpoints (#5088), Copilot (#5359), Ollama fixes (#6029) — diversificação de providers em progresso

---

## 7. Resumo de Feedback dos Usuários

### Dores reais identificadas:

**Instabilidade em produção:**
- Docker setup é broken (bind mount shadow, missing image)
- Postgres gateway falha com panic
- WhatsApp Web sem controle de grupos
- Llama.cpptool usage retorna 500

**Onboarding frustrante:**
- Configuração de providers é confusa (Llama.cpp não sabe defaultar para "responses")
- Chinese users reportam documentação de instalação Docker errada
- Custom Anthropic endpoint não coletável durante onboard
- Qwen custom model input bugado no TUI

**Desktop app incompleto:**
- Tray icon é "icon-only" sem ações de menu
- Crash reporting ausente
- Accessibility (VoiceOver) não auditado
- No auto-update mechanism

**Segurança em evolução:**
- ACP sandbox com cwd lockout
- Shell tool com TOTP apenas granularity-limited
- Secrets decryption incompleto (skipava bot_tokens)
- Google Workspace tool quebrado em Windows

### Cenários de uso emergentes:

- **Multi-agent**: Usuários querem rodar múltiplos agentes em canais diferentes (Matrix multi-instance)
- **Cron jobs com delivery inteligente**: Final message only vs. every turn
- **Plugin ecosystem**: Usuários querem extensibilidade unificada
- **Universal binary**: macOS users com máquinas Apple Silicon + Intel precisam de single artifact

### Satisfação/Insatisfação:

- **Insatisfação alta** com estabilidade de runtime e configuração de providers
- **Interesse alto** em desktop app (o contributor mais ativo é focado nisso)
- **Confiança baixa** na documentação (Docker install reportada como "tudo errado" para usuários chineses)

---

## 8. Backlog que Merece Atenção

### Issues sem resposta há > 3 dias (requerem triagem):

| # | Título | Prioridade | Tags | Criado | Status |
|---|---|---|---|---|---|
| [#6487](https://github.com/zeroclaw-labs/zeroclaw/issues/6487) | Multi-alias channel corruption (p0 blocker) | P0 | `channel:matrix`, `security` | 2026-05-06 | `needs-maintainer-review` |
| [#6500](https://github.com/zeroclaw-labs/zeroclaw/issues/6500) | Missing Docker image (security risk) | P1 | `docs`, `security` | 2026-05-07 | `needs-maintainer-review` |
| [#6371](https://github.com/zeroclaw-labs/zeroclaw/issues/6371) | WhatsApp allowed_groups | P1 | `channel:whatsapp`, `config` | 2026-05-04 | `needs-maintainer-review` |
| [#6373](https://github.com/zeroclaw-labs/zeroclaw/issues/6373) | web_search doesn't work on fresh install | P2 | `tool: web_search_tool` | 2026-05-04 | `needs-maintainer-review` |
| [#6410](https://github.com/zeroclaw-labs/zeroclaw/issues/6410) | google_workspace fails on Windows | P1 | `tool:google-workspace` | 2026-05-05 | `needs-maintainer-review` |

### PRs antigos aguardando ação do autor:

| # | PR | Área | Criado | Tags |
|---|---|---|---|---|
| [#5359](https://github.com/zeroclaw-labs/zeroclaw/pull/5359) | Copilot Integration | provider/copilot | 2026-04-05 | `needs-author-action` |
| [#5265](https://github.com/zeroclaw-labs/zeroclaw/pull/5265) | Desktop menu bar chat | desktop/tauri | 2026-04-03 | `needs-maintainer-review` |
| [#5300](https://github.com/zeroclaw-labs/zeroclaw/pull/5300) | Guard empty cargo feature args | installer | 2026-04-05 | `needs-author-action` |
| [#5669](https://github.com/zeroclaw-labs/zeroclaw/pull/5669) | Decrypt all secrets for Telegram | security/channel | 2026-04-12 | — |
| [#5892](https://github.com/zeroclaw-labs/zeroclaw/pull/5892) | Three production blockers | provider/runtime | 2026-04-19 | — |

### PRs em revisão há > 3 semanas sem closure:

- **#5075** (WhatsApp docs) — desde 2026-03-29
- **#5077** (Codex docs) — desde 2026-03-29
- **#5079** (Clippy fix) — desde 2026-03-29
- **#5120** (Memory clear reject) — desde 2026-03-29
- **#5121** (Mistral tool_call.id) — desde 2026-03-29
- **#5088** (Anthropic custom endpoint) — desde 2026-03-29

---

## Indicadores de Saúde do Projeto

| Indicador | Valor | Observação |
|---|---|---|
| Issues ativas (24h) | 50 | Volume muito alto — possivelmente stale tag não aplicada |
| PRs abertos | 50 | Pipeline robusto mas não está flowing |
| PRs merged (24h) | 0 | Gargalo de revisão |
| Releases (7d) | 0 | Nenhuma release detectada |
| Bugs P0/P1 | 8 | Volume crítico necessitando prior

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*