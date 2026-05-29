# Resumo diário do ecossistema de agentes de IA 2026-05-30

> Issues: 3 | PRs: 12 | Projetos cobertos: 7 | Gerado em: 2026-05-29 21:49 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal


# Relatório do Projeto NullClaw — 2026-05-30

## 1. Panorama do Dia

NullClaw registrou atividade intensa nas últimas 24 horas com **12 PRs atualizados** (3 abertos, 9 merged/fechados) e **1 release publicada (v2026.5.29)**. Todos os 3 issues ativos no período foram resolvidos — todas relacionadas a bugs críticos de entrega de mensagens e contexto em canais específicos (Telegram, spawn de subagentes, e listagem de memória). A equipe mantém ritmo acelerado de entrega, com foco em estabilização de integrações multi-canal e melhorias em ferramentas internas.

---

## 2. Lançamentos

### 🚀 v2026.5.29 — Released 2026-05-29

**Mudanças incluídas:**
- **#888** — Atualização para `v2026.5.4`
- **#889** — Migração de GitHub workflows para `nullbuilder`
- **#896** — Adição de adapter nativo ACP stdio

> **PR de release:** [#938](https://github.com/nullclaw/nullclaw/pull/938)
> **Lista completa de changes:** [Release Notes no PR #888](https://github.com/nullclaw/nullclaw/pull/888)

⚠️ **Breaking changes:** Nenhuma relatada. Release focada em infraestrutura (workflows) e novo adapter stdio.

⚠️ **Notas de migração:** Não aplicáveis para esta versão.

---

## 3. Progresso do Projeto

| PR | Título | Tipo | Impacto |
|---|---|---|---|
| [#930](https://github.com/nullclaw/nullclaw/pull/930) | Telegram: incluir texto de `reply_to_message` no contexto | 🐛 Fix | Resolves #916 — permite que o agente leia o conteúdo da mensagem respondida |
| [#928](https://github.com/nullclaw/nullclaw/pull/928) | Entregar resultados de subagentes ao Telegram em modo polling | 🐛 Fix | Resolves #918 — corrige silêncio ao usar `spawn` tool |
| [#929](https://github.com/nullclaw/nullclaw/pull/929) | `memory_list`: default `session_id` para null | 🐛 Fix | Resolves #917 — restaura visibilidade de memórias globais |
| [#933](https://github.com/nullclaw/nullclaw/pull/933) | Adicionar métodos adicionais de gateway | ✨ Feat | Estende gateway com `/media/transcribe` e config unificada |
| [#934](https://github.com/nullclaw/nullclaw/pull/934) | LINE channel: fix routing e replyToken cache | 🐛 Fix | Implementa cache thread-safe de 30s para replyTokens |
| [#935](https://github.com/nullclaw/nullclaw/pull/935) | Nix: lockfiles atualizados para zig 0.16.0 | 🔧 Chore | Restaura builds Nix quebrados |
| [#925](https://github.com/nullclaw/nullclaw/pull/925) | Path security: permitir workspaces macOS sob `/private/var/folders` | 🐛 Fix | Corrige falsa negação em macOS |

**Destaque de progresso:** A sprint fechou 3 bugs críticos do Telegram que impactavam usabilidade real em produção, além de resolver problemas de compatibilidade com Nix e macOS.

---

## 4. Temas Quentes da Comunidade

### Discussões em destaque

| Item | Tipo | Comentários | Reações | Tópicos |
|---|---|---|---|---|
| [#940](https://github.com/nullclaw/nullclaw/pull/940) | PR (OPEN) | — | 0 | Provedores OpenAI-compatíveis customizados não são corretamente listados no menu `/models` |
| [#939](https://github.com/nullclaw/nullclaw/pull/939) | PR (OPEN) | — | 0 | Flag `compact_context` em `AgentConfig` nunca é lida — compactação sempre ocorre |

**Análise:** A comunidade reporta que provedores customizados (com `base_url` arbitrary) não funcionam corretamente no menu interativo de seleção de modelos. O bug faz com que apenas modelos Claude hardcoded sejam listados. O PR #939 resolve uma feature "morta" no código — a flag `compact_context` existe no schema mas nunca é respeitada em runtime, indicando necessidade de revisão de dívida técnica.

---

## 5. Bugs e Estabilidade

### ✅ Bugs resolvidos nas últimas 24h

| Issue | Severidade | Descrição | Status |
|---|---|---|---|
| [#918](https://github.com/nullclaw/nullclaw/issues/918) | **🔴 Crítica** | Resultados de `spawn` tool nunca chegam ao Telegram (silenciosamente perdidos) | ✅ Closed |
| [#916](https://github.com/nullclaw/nullclaw/issues/916) | 🟡 Média | Texto de `reply_to_message` não incluso no contexto do agente | ✅ Closed |
| [#917](https://github.com/nullclaw/nullclaw/issues/917) | 🟡 Média | `memory_list` nunca retorna entradas globais (`session_id=NULL`) | ✅ Closed |

**Análise de estabilidade:** Os 3 bugs fechados afetavam fluxos críticos:
- **Spawn tool + Telegram** era um caso de falha silenciosa completa em produção
- **Reply context** impactava compreensão de conversas em grupo
- **Memory list global** quebravam funcionalidades de memória compartilhada

Raiz comum: todos os bugs envolvem interações entre subsistemas (channel loop, subagent manager, database layer) indicando necessidade de testes de integração mais robustos.

---

## 6. Pedidos de Features e Sinais de Roadmap

### PRs em aberto com potencial de roadmap

| Item | Demanda | Complexidade | Prioridade inferred |
|---|---|---|---|
| [#940](https://github.com/nullclaw/nullclaw/pull/940) | Query dinâmica de `base_url` para provedores OpenAI-compatíveis customizados | Baixa | 🔴 Alta (fecha #936) |
| [#939](https://github.com/nullclaw/nullclaw/pull/939) | Respeitar flag `compact_context` em vez de compactar sempre | Baixa | 🟡 Média (fecha #937) |

**Sinais de roadmap:**
- Integração multi-provedor continua como foco (suporte a provedores arbitrary OpenAI-compatible)
- Configuração de comportamento de contexto está amadurecendo (flag `compact_context`)
- Gateway expõe mais métodos (transcrição de mídia, autenticação, hash de tokens)

---

## 7. Resumo de Feedback dos Usuários

### Dores relatadas (via issues fechadas)

1. **"Spawn cria subagente, executa corretamente, mas resultado NUNCA chega no chat"** (#918)
   - Cenário: usuários usando `spawn` tool em bots Telegram em produção
   - Impacto: fluxo completo falha silenciosamente — sem feedback de erro
   - Frustração: alta (problema recorrente múltiplos reporters)

2. **"Memórias globais não aparecem para o usuário"** (#917)
   - Cenário: `memory_store` sem `session_id` para criar entries compartilhadas
   - Impacto: funcionalidade de memória colaborativa não funciona
   - Usuário consegue salvar mas não consegue listar

3. **"Telegram não entende contexto de reply em grupo"** (#916)
   - Cenário: usuários respondem mensagens anteriores em grupos
   - Impacto: agente perde contexto conversacional em diálogos
   - Limitação em interações multi-turno em grupo

### Indicadores de satisfação
- ⏱️ Todas as 3 issues reportadas foram resolvidas no mesmo dia de criação (17-23 May → 29 May)
- 🔧 Community contributors (weissfl, raskevichai) reportam e contribuem com PRs diretamente
- 📈 9 PRs merged em 24h indica sehat de manutenção ativa

---

## 8. Backlog que Merece Atenção

### Issues/PRs em aberto há mais tempo

| Item | Tipo | Tempo em aberto | Prioridade | Nota |
|---|---|---|---|---|
| [#940](https://github.com/nullclaw/nullclaw/pull/940) | PR | 1 dia | 🔴 Alta | Depende de review — resolve bug de seleção de modelos |
| [#939](https://github.com/nullclaw/nullclaw/pull/939) | PR | 1 dia | 🟡 Média | Depende de review — flag morta em código |

### Observação sobre backlog
Ambos os PRs abertos são do mesmo dia e já têm descrição completa. Não há items "zumbis" no momento — o projeto demonstra healthy response time. Recomenda-se review dos PRs #940 e #939 para fechar os issues #936 e #937 respectively.

---

## Métricas Consolidada (2026-05-30)

| Indicador | Valor |
|---|---|
| Issues fechadas (24h) | 3 |
| PRs atualizados (24h) | 12 |
| PRs merged/fechados (24h) | 9 |
| Releases | 1 |
| PRs em aberto | 3 |
| Tempo médio de resolução (bugs hoje) | 1 dia |

**Veredicto de saúde:** 🟢 **Projeto saudável** — atividade intensa com alta taxa de resolução, foco em estabilidade de canais e ferramentas críticas. Recommendação: priorizar review dos PRs #940 e #939.

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo do Ecossistema Open Source de Agentes de IA

**Data de referência:** 2026-05-30 | **Horizonte:** Últimas 24h

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **saúde polarizada** em 30 de maio de 2026. Os sete projetos monitorados totalizam **291 PRs** e **161 issues** atualizadas em 24h, evidenciando ritmo intenso de desenvolvimento. A prioridade predominante é **estabilização de canais multi-mensagem** (Telegram, WhatsApp, Matrix, WeChat) e **hardening de segurança** — com três projetos (NanoBot, Hermes Agent, PicoClaw) conduzindo auditorias SSRF massivas simultaneamente. Observa-se convergência técnica em três vetores: multi-agência via spawn/delegate, memória persistente com compressão inteligente, e integração de provedores OpenAI-compatíveis. O mercado demonstra demanda clara por desktop embedding (Windows Tauri), orquestração de cron jobs, e pipelines de mídia com compressão configurável.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | PRs Merged | Releases | Saúde |
|---|---|---|---|---|---|
| **Hermes Agent** | 50 | 50 | 43 | 2 | 🟢 Excelente |
| **CoPaw** | 45 | 34 | — | 1 (beta) | 🟢 Positiva |
| **NanoBot** | 33 | 43 | 16 | 0 | 🟢 Positiva |
| **ZeroClaw** | 9 | 32 | 1 | 0 | 🟡 Ativa, instável |
| **IronClaw** | 22 | 50 | 21 | 0 | 🟡 Alta atividade, CI falhando |
| **PicoClaw** | 3 | 8 | 5 | 2 | 🟢 Estável e madura |
| **NullClaw** | 3 | 12 | 9 | 1 | 🟢 Excelente |

**Métricas consolidadas:**
- **Total de issues processadas:** 161
- **Total de PRs processados:** 291
- **Releases publicadas:** 6 (incluindo nightlies)
- **PRs de segurança merged/emandadas:** 26+ (NanoBot 8, Hermes 11, PicoClaw 1)
- **Bugs críticos resolvidos:** 15+

---

## 3. Posicionamento do Projeto Principal (NullClaw)

### Vantagens Competitivas

| Dimensão | NullClaw | Posição Relativa |
|---|---|---|
| **Velocidade de resolução** | 3 bugs críticos resolvidos em 1 dia (média) | 🟢 Líder em tempo de resposta |
| **Qualidade de releases** | Release focada com zero breaking changes | 🟢 Estabilidade comprovada |
| **Foco em UX** | Corrige silenciamento de spawn tool (fallback crítico) | 🟢 Diferenciação em experiência |
| **Debt técnico baixa** | Nenhum item "zombie" no backlog | 🟢 Manutenibilidade |

### Diferenças Técnicas

| Feature | NullClaw | Comparação |
|---|---|---|
| **Adapter stdio nativo** | ACP stdio adapter em v2026.5.29 | ⭐ Unique (NullClaw) |
| **Gateway extensível** | `/media/transcribe`, config unificada (#933) | Diferenciação de arquitetura |
| **Memory strategy** | `session_id=null` para globales; default robusto | Abordagem madura |
| **Build CI/CD** | Migração para nullbuilder | Automação de ponta |

### Tamanho da Comunidade

NullClaw apresenta **comunidade menor mas mais qualificada** — contributors como `weissfl` e `raskevichai` reportam bugs com PRs prontos, indicando base de power users. A ratio PRs merged/hora (9 em 24h) supera projetos com maior volume bruto.

---

## 4. Focos Técnicos Compartilhados

### 4.1 Segurança: SSRF e Hardening de Exec Tools

Três projetos conduzem auditorias paralelas de SSRF, indicando pressão regulatória ou incidente coordenado:

| Projeto | SSRF PRs | Escopo |
|---|---|---|
| Hermes Agent | 11 | Múltiplos arquivos core |
| NanoBot | 6+ | MCP HTTP/SSE bypass |
| PicoClaw | 1 | Tirith pre-exec scanner |

**Inferência:** O pattern SSRF em ferramentas de execução (exec, MCP, HTTP egress) é vulnerabilidade transversal no ecossistema. Recomenda-se que NullClaw conduza auditoria proativa similar.

### 4.2 Memória e Contexto

Todos os projetos enfrentam desafios de gestão de memória:

| Projeto | Issue | Descrição |
|---|---|---|
| **NanoBot** | #4044 | Short term memory loss em conversas multi-turno |
| **CoPaw** | #4795 | ChromaDB index cresce a 37GB, crashes |
| **NullClaw** | #917 | `memory_list` não retorna globais |
| **Hermes** | #34745 | Paginated memory request (roadmap) |

**Pattern:** A memória é tanto problema técnico (overflow, compactação) quanto de UX (percepção de perda por usuários). Soluções de paginação e busca por keywords emergem como consenso de roadmap.

### 4.3 Multi-Agência

Todos os projetos convergem para primitivas de spawn/subagent/delegate:

| Projeto | Feature | Status |
|---|---|---|
| **CoPaw** | `spawn_subagent` tool | ✅ Merged (#4806) |
| **NullClaw** | Spawn results ao Telegram | ✅ Fix (#928) |
| **ZeroClaw** | `channel_send` tool | 🔄 PR #6665 |
| **PicoClaw** | Agent-to-agent comm | 🔄 Issue #2929 |
| **Hermes** | Trigger loop spec | ✅ Merged |

**Convergência:** O padrão de sub-agente efêmero com comunicação cross-channel está se tornando commoditizado. Diferenciação move-se para **topologia de coordenação** (hierarquias, peer-to-peer, trust enrollment).

### 4.4 Integração Multi-Canal

**Canais mais problemáticos:**

| Canal | Projetos | Problemas |
|---|---|---|
| **Telegram** | NullClaw, ZeroClaw | Spawn results silenciosos, reply context |
| **WeChat** | NanoBot, PicoClaw | Limite de 10 mensagens, QR code desatualizado |
| **WhatsApp** | PicoClaw | Build arm64 sem suporte |
| **Matrix** | NanoBot | Unverified device warnings |
| **Feishu** | CoPaw | Thread reply, group session |

**Inferência:** A Abstração de canal é insuficiente — cada plataforma tem semânticas distintas de threading, authentication e rate limits que exigem adapters específicos.

---

## 5. Análise de Diferenciação

### 5.1 Por Público-Alvo

| Projeto | Público Primário | Diferenciação |
|---|---|---|
| **NullClaw** | Operadores de bots production-grade | Estabilidade multi-canal, adapters stdio |
| **Hermes** | Usuários enterprise com workflows complexos | Dashboard TUI, plugin ecosystem, cron loop |
| **CoPaw** | Developers coding + power users | Coding Mode, desktop pet, AgentScope 2.0 |
| **NanoBot** | Security-conscious operators | Auditoria de segurança contínua |
| **PicoClaw** | Usuários embarcados (Raspberry Pi) | Builds otimizados ARM, i18n completa |
| **IronClaw** | Enterprise Web3/NEAR ecosystem | OAuth, KMS, Notion/Slack MCP |
| **ZeroClaw** | Avançados que buscam features cutting-edge | Schema-Guided Reasoning, granular sandbox |

### 5.2 Por Arquitetura

| Arquitetura | Projetos | Implicações |
|---|---|---|
| **Monolito modular** | NullClaw, CoPaw | Deploy simples, coupling aceitável |
| **Microservices** | IronClaw | Reborn stack, scalability, complexity |
| **Plugin-driven** | Hermes, PicoClaw | Extensibilidade via MCP, versioning challenge |
| **Headless-first** | NanoBot, ZeroClaw | Cron jobs, WebSockets, API-first |

### 5.3 Por Estágio de Maturidade

| Estágio | Projetos | Indicadores |
|---|---|---|
| **🚀 Crescimento acelerado** | CoPaw, Hermes | 40-50 PRs/24h, breaking changes planejadas |
| **🟢 Consolidando** | NullClaw, PicoClaw | Releases estáveis, bugs pontuais |
| **🟡 Refatoração pesada** | IronClaw | Reborn stack, decomposition do monolito |
| **🔴 Turbulento** | ZeroClaw, NanoBot | Reverts massivos, 8 security issues simultâneas |

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Projetos Iterando Rapidamente

| Projeto | Indicadores | Análise |
|---|---|---|
| **Hermes Agent** | 43 PRs merged, 2 hotfixes, 11 security PRs em 24h | ⭐ Ritmo de hotfix impressionante — demonstra maturidade de CI/CD e process |
| **CoPaw** | 45 issues, breaking change planejada, 1st-time contributors | ⭐ Base diversificada crescendo; migração AgentScope 2.0 testará confiança |
| **IronClaw** | 50 PRs, extensões MCP em paralelo | ⭐ Atividade intensa de re-arquitetura; risco de fragmentação |

### 6.2 Projetos Consolidando Qualidade

| Projeto | Indicadores | Análise |
|---|---|---|
| **NullClaw** | 9 PRs merged, 3 bugs críticos resolvidos, tempo médio 1 dia | ⭐ Saúde excelente — prioriza estabilidade sobre volume |
| **PicoClaw** | 8 PRs, 2 releases, Tirith integration, Czech locale | ⭐ Maturidade demonstrada — features incrementais com baixa dívida |

### 6.3 Métricas de Engajamento Comunitário

| Projeto | Issues + Comentários | PRs | Contribuidor Dedicado |
|---|---|---|---|
| **NullClaw** | Low volume, high quality | 9 merged | weissfl, raskevichai |
| **NanoBot** | 33 issues, 43 PRs | 16 merged | hamb1y (security audit) |
| **Hermes** | 50 issues, 50 PRs | 43 merged | ErnestHysa (SSRF audit) |
| **CoPaw** | 45 issues, 34 PRs | Multiple 1st-time | rayrayraykk, hongxicheng |

**Insight:** A concentração de contributors especializados (hamb1y em segurança, ErnestHysa em SSRF) indica profissionalização do ecossistema. NullClaw distingue-se por contributors que reportam bugs com patches prontos — padrão de comunidade madura.

---

## 7. Sinais de Tendência

### 7.1 Tendências de Mercado Confirmadas

| Tendência | Evidência | Confiança |
|---|---|---|
| **Desktop embedding é mainstream** | CoPaw Tauri, CoPaw CLI bundled, PicoClaw builds ARM | 🔴 Alta — múltiplos projetos investindo |
| **Segurança é table stakes** | 3 projetos conduzindo auditorias SSRF simultâneas | 🔴 Alta — pressão regulatória ou incidentes |
| **Multi-agência é commoditizada** | 5+ projetos com spawn/subagent/delegate | 🟡 Alta — feature parity emergente |
| **Memory management como dor crônica** | 4 projetos com issues de memória | 🔴 Alta — problema técnico não resolvido |
| **MCP como padrão de extensibilidade** | Hermes, IronClaw, PicoClaw todos investindo | 🟢 Média — adoção acelerada |

### 7.2 Features Emergentes

| Feature | Projetos | Roadmap Signal |
|---|---|---|
| **Agent Teams (colaboração hierárquica)** | CoPaw (#3224), PicoClaw (#2929) | 🟡 Emergente |
| **Paginated Memory com keyword search** | Hermes (#34745), NanoBot (discussão) | 🟡 Emergente |
| **Schema-Guided Reasoning (output estruturado)** | ZeroClaw (#6998) | 🟡 Novo |
| **Granular sandbox policies** | ZeroClaw (#6996), PicoClaw (Tirith) | 🟡 Emergente |
| **Webhook retry com exponential backoff** | ZeroClaw (#5838) | 🟢 Maduro |
| **Model presets para switching rápido** | NanoBot (#3696), Hermes (#34824) | 🟡 Emergente |

### 7.3 Sinais de Warning

| Sinal | Projetos | Implicação |
|---|---|---|
| **Releases backlogged no crates.io** | IronClaw (gap 0.24.0→0.27.0) | Usuários em versão vulnerável |
| **Documentação desalinhada** | ZeroClaw, Hermes | Onboarding broken |
| **Nightly E2E falhando** | IronClaw (#4108) | Risco de regressão em production |
| **Revert massivo (153 commits)** | ZeroClaw (#6074) | Risco de sustentabilidade |
| **Builds sem suporte a canais** | PicoClaw (WhatsApp) | Friction para usuários embarcados |

---

## 8. Síntese e Recomendações

### Posição do Ecossistema

O ecossistema de agentes de IA open source está **maduro para consolidação**. Os projetos líderes (NullClaw, Hermes, CoPaw) demonstram padrões de engenharia comparáveis a produtos comerciais. A diferenciação move-se de features core para **ecossistema de plugins, experiência de developer, e suporte a plataformas emergentes** (embarcado, voice).

### Recomendação para NullClaw

1. **Conduzir auditoria SSRF** — O padrão de hardening observado em 3 projetos deve ser adotado proativamente.
2. **Review urgente de PRs #940 e #939** — Ambos fecham bugs de usabilidade (provedores customizados, flag morta).
3. **Avaliar feature de Agent Teams** — Demanda emergente em PicoClaw e CoPaw sinaliza direção de mercado.
4. **Monitorar arquitetura de memória** — Padrão de overflow (CoPaw 37GB, Hermes paginated requests) indica necessidade de solução robusta.

### Dashboard de Decisão

| Stakeholder | Ação Recomendada |
|---|---|
| **Operadores de produção** | Priorizar NullClaw ou PicoClaw (estabilidade) |
| **Enterprise com workflows complexos** | Hermes Agent (plugin ecosystem) |
| **Security-first operators** | NanoBot (auditoria contínua) |
| **Developers desktop** | CoPaw (coding mode, AgentScope 2.0) |
| **Usuários embarcados** | PicoClaw (builds ARM otimizados) |
| **Web3/NEAR ecosystem** | IronClaw (OAuth, MCP Notion/Slack) |

---

*Relatório gerado automaticamente com base em dados públicos do GitHub. Métricas sujeitas a alterações em tempo real.*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-05-30

---

## 1. Panorama do dia

O NanoBot apresenta um nível de atividade excepcionalmente elevado para esta data, com **43 PRs e 33 issues atualizados nas últimas 24 horas**. A maioria esmagadora das atividades consiste em correções de bugs e vulnerabilidades de segurança reportadas pelo contribuidor `hamb1y`, com uma resposta impressionantemente rápida da equipe em forma de PRs correspondentes. Nenhum lançamento novo foi feito hoje, indicando que o projeto está em fase intensiva de estabilização antes de uma próxima release. A saúde geral do projeto permanece positiva, com a comunidade demonstrando alta engajamento e a equipe mantendo resposta ágil às demandas.

---

## 2. Lançamentos

**Nenhum novo lançamento hoje.** O projeto não publicou releases nas últimas 24 horas, sugerindo que a equipe está acumulando mudanças para uma publicação coordenada que inclua as múltiplas correções de segurança e estabilidade em andamento.

---

## 3. Progresso do Projeto

As seguintes PRs foram fechadas (merged ou closed) hoje, representando avanços significativos:

| PR | Título | Impacto |
|---|---|---|
| [#3696](https://github.com/HKUDS/nanobot/pull/3696) | feat(config): add model presets for quick model switching | **Feature de alta importância** — Permite bundling de modelo + provider + parâmetros de geração, com failover automático e switching em runtime |
| [#4051](https://github.com/HKUDS/nanobot/pull/4051) | fix(exec): bypass cmd.exe for multi-line python -c on Windows | **Correção crítica Windows** — Resolve silêncio de código multi-linha em Windows usando PowerShell |
| [#4087](https://github.com/HKUDS/nanobot/pull/4087) | Refactor Docker Compose for environment-based gateway configuration | **DevOps** — Refatoração de configuração de gateway baseada em variáveis de ambiente |

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento

| Issue | Título | Comentários | Status |
|---|---|---|---|
| [#2772](https://github.com/HKUDS/nanobot/issues/2772) | Limite de 10 mensagens no WeChat | 7 | **CLOSED** |
| [#4044](https://github.com/HKUDS/nanobot/issues/4044) | short term memory loss | 4 | OPEN |
| [#3006](https://github.com/HKUDS/nanobot/issues/3006) | no warning when api-key in arrearage | 1 | **CLOSED** |
| [#4043](https://github.com/HKUDS/nanobot/issues/4043) | Config to disable document extraction | 1 | **CLOSED** |
| [#4042](https://github.com/HKUDS/nanobot/issues/4042) | MatrixChannel unverified device | 1 | OPEN |

**Análise:** A issue #2772 (limite WeChat) foi a mais comentada com 7 comentários, indicando demanda significativa de usuários que enfrentam limitações de contexto. A issue #4044 sobre "perda de memória de curto prazo" merece atenção especial — descreve um bug onde o bot faz uma pergunta, o usuário responde, e o bot não tem memória de ter feito a pergunta, quebrando a continuidade conversacional. Este é um problema de experiência do usuário de alta severidade.

---

## 5. Bugs e Estabilidade

### Security Issues (8 reportadas hoje)

| Issue | Título | Severidade |
|---|---|---|
| [#4078](https://github.com/HKUDS/nanobot/issues/4078) | OpenAI-compatible chat API accepts unauthenticated requests | **CRÍTICA** |
| [#4077](https://github.com/HKUDS/nanobot/issues/4077) | WebSocket token issue mints tokens without auth | **ALTA** |
| [#4074](https://github.com/HKUDS/nanobot/issues/4074) | MCP HTTP/SSE SSRF validation bypass | **ALTA** |
| [#4076](https://github.com/HKUDS/nanobot/issues/4076) | Message tool lacks outbound authorization | **ALTA** |
| [#4075](https://github.com/HKUDS/nanobot/issues/4075) | Dream can overwrite user skills | **ALTA** |
| [#4073](https://github.com/HKUDS/nanobot/issues/4073) | filesystem extra_allowed_dirs are writable | **MÉDIA** |
| [#4072](https://github.com/HKUDS/nanobot/issues/4072) | ExecTool workspace bypass via symlinks | **MÉDIA** |

**Resposta:** Todas as 8 security issues já têm PRs abertas correspondentes (4086, 4103, 4102, 4100, 4101, 4099, 4098). A equipe demonstrou capacidade notável de resposta rápida a vulnerabilidades reportadas.

### Bugs Funcionais (21 reportados hoje)

Categorizados por área:

| Área | Issues | Exemplos |
|---|---|---|
| **Stream/Chat handling** | 6 | [#4062](https://github.com/HKUDS/nanobot/issues/4062) WebSocket drop proactive, [#4063](https://github.com/HKUDS/nanobot/issues/4063) stream delta merging, [#4068](https://github.com/HKUDS/nanobot/issues/4068) Matrix buffer key collision |
| **Provider parsing** | 4 | [#4059](https://github.com/HKUDS/nanobot/issues/4059) OpenAI duplicate IDs, [#4060](https://github.com/HKUDS/nanobot/issues/4060) Anthropic missing type, [#4061](https://github.com/HKUDS/nanobot/issues/4061) text-format tool calls |
| **Session/Memory** | 4 | [#4066](https://github.com/HKUDS/nanobot/issues/4066) corrupted last_consolidated, [#4081](https://github.com/HKUDS/nanobot/issues/4081) duplicate cursors, [#4082](https://github.com/HKUDS/nanobot/issues/4082) cron session reuse |
| **Config/Validation** | 3 | [#4065](https://github.com/HKUDS/nanobot/issues/4065) invalid timeout crashes, [#4067](https://github.com/HKUDS/nanobot/issues/4067) silent fallback to defaults, [#4083](https://github.com/HKUDS/nanobot/issues/4083) PATH precedence |
| **Dispatch/Concurrency** | 3 | [#4080](https://github.com/HKUDS/nanobot/issues/4080) process_direct bypass, [#4064](https://github.com/HKUDS/nanobot/issues/4064) mid-turn context loss, [#4058](https://github.com/HKUDS/nanobot/issues/4058) tool-result orphan states |
| **Session storage** | 1 | [#4057](https://github.com/HKUDS/nanobot/issues/4057) key collision on disk |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Enhancements em aberto

| Issue | Título | Tipo |
|---|---|---|
| [#4043](https://github.com/HKUDS/nanobot/issues/4043) | Config to disable document extraction | Enhancement (**CLOSED**) |
| [#4042](https://github.com/HKUDS/nanobot/issues/4042) | MatrixChannel unverified device handling | Good first issue |
| [#4044](https://github.com/HKUDS/nanobot/issues/4044) | Short term memory loss | Bug (discussão ativa) |

**Análise de roadmap:** A feature de presets de modelo (#3696) que foi mergeada indica direção para configuração flexível. O pedido de disable de document extraction (#4043) foi fechado com implementação, sugerindo priorização de customização de pipeline de processamento. O issue de Matrix Channel (#4042) com tag "good first issue" indica área onde novos contribuidores são bem-vindos.

---

## 7. Resumo de Feedback dos Usuários

### Dores reportadas

| Dor | Frequência | Impacto |
|---|---|---|
| **Perda de memória conversacional** | Relatada com detalhes técnicos | **Alto** — Quebra experiência do usuário em conversas multi-turno |
| **Limite de 10 mensagens no WeChat** | 7 comentários + discussão ativa | **Médio** — limitation de context window afeta utilidade |
| **Sem warning de API key em atraso** | 1 report, fechado | **Médio** — Usuários ficam sem entender por que chat não responde |
| **Matrix unverified device warnings** | 1 report detalhado | **Médio** — Afeta experiência de usuários Element X |

### Cenários de uso emergentes

- **Integração WeChat** — Usuários precisam de controle sobre limites de contexto e manejo de tokens
- **Matrix/E2EE** — Crescimento de uso com clientes modernos (Element X) expõe gaps de implementação criptográfica
- **Configuração flexível** — Demanda por disable de features automáticas (document extraction) para workflows customizados
- **Operação headless** — Cron jobs, heartbeat e notifications precisam de robustez em cenários desconectados

### Satisfação

A rápida resposta da equipe às issues (múltiplos PRs no mesmo dia) gera confiança na manutenção do projeto. A presença de contribuidor `hamb1y` fazendo auditoria de segurança extensiva indica saúde do processo de desenvolvimento.

---

## 8. Backlog que Merece Atenção

### Issues sem resposta significativa (>24h sem interação)

| Issue | Título | Days Old | Prioridade |
|---|---|---|---|
| [#4042](https://github.com/HKUDS/nanobot/issues/4042) | MatrixChannel: unverified device | ~2 dias | Média |
| [#4044](https://github.com/HKUDS/nanobot/issues/4044) | short term memory loss | ~2 dias | **Alta** |
| [#4074](https://github.com/HKUDS/nanobot/issues/4074) | MCP HTTP/SSE SSRF | <1 dia | **Alta** |
| [#4075](https://github.com/HKUDS/nanobot/issues/4075) | Dream skill overwrite | <1 dia | **Alta** |
| [#4076](https://github.com/HKUDS/nanobot/issues/4076) | message tool outbound auth | <1 dia | **Alta** |
| [#4077](https://github.com/HKUDS/nanobot/issues/4077) | WebSocket token issue | <1 dia | **Alta** |
| [#4078](https://github.com/HKUDS/nanobot/issues/4078) | OpenAI API unauth | <1 dia | **Crítica** |

### PRs pendentes de merge

| PR | Título | Status | Bloqueia |
|---|---|---|---|
| [#4086](https://github.com/HKUDS/nanobot/pull/4086) | normalize IPv6-mapped IPv4 in SSRF | OPEN | Security fix |
| [#4103](https://github.com/HKUDS/nanobot/pull/4103) | Require auth for WebSocket token | OPEN | Security fix #4077 |
| [#4102](https://github.com/HKUDS/nanobot/pull/4102) | Authorize message tool outbound | OPEN | Security fix #4076 |
| [#4101](https://github.com/HKUDS/nanobot/pull/4101) | Enforce Dream skill ownership | OPEN | Security fix #4075 |
| [#4100](https://github.com/HKUDS/nanobot/pull/4100) | Reject unsafe MCP probes | OPEN | Security fix #4074 |
| [#4099](https://github.com/HKUDS/nanobot/pull/4099) | Keep filesystem extra roots read-only | OPEN | Security fix #4073 |
| [#4098](https://github.com/HKUDS/nanobot/pull/4098) | Fix exec workspace symlink guard | OPEN | Security fix #4072 |

### Recomendação

Há **7 PRs de segurança abertas** que precisam de revisão urgente para merge. O contribuidor `hamb1y` demonstrou qualidade de trabalho consistente (todas as correções parecem bem fundamentadas), mas review por outros mantenedores é necessário antes de deployar.

---

## Resumo Executivo

| Métrica | Valor |
|---|---|
| Issues ativas | 30 |
| PRs abertas | 27 |
| Security issues (24h) | 8 |
| Bugs reportados (24h) | 21 |
| PRs fechadas (24h) | 16 |
| Releases | 0 |
| Temas quentes | Memory loss, WeChat limits, Matrix E2EE |
| Saúde do projeto | **Positiva** — Alta responsividade, backlog gerenciável |

**Ação recomendada:** Priorizar review e merge dos 7 PRs de segurança pendentes antes do próximo release. A issue #4044 (short term memory loss) deve ser triada com urgência.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent
## Data: 2026-05-30

---

## 1. Panorama do Dia

O projeto **Hermes Agent** apresenta altíssima atividade em 30 de maio de 2026, com 50 issues e 50 PRs atualizados nas últimas 24h. A equipe respondeu a uma cadeia de regressões críticas nas versões 0.15.0 e 0.15.1 — particularmente no empacotamento de plugins e módulos Docker — lançando dois hotfixes em sequência (v0.15.1 e v0.15.2). O volume de PRs de segurança merged (11 pelo mesmo contribuidor) indica uma varredura proativa de vulnerabilidades SSRF em múltiplos pontos do codebase. A comunidade mantém engajamento intenso com issues de UI/Dashboard e integrações de plataforma liderando em discussões.

---

## 2. Lançamentos

### 🔖 v2026.5.29.2 — Hermes Agent v0.15.2
**Data:** 29 de maio de 2026  
**Tipo:** Patch de emergência

**Mudanças:**
- **Fix (packaging):** Adiciona manifestos `plugin.yaml` empacotados ao wheel e sdist — resolve o problema de plugins de plataforma não serem descobertos após instalação via pip.

> [Release v2026.5.29.2](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.5.29.2)

---

### 🔖 v2026.5.29 — Hermes Agent v0.15.1
**Data:** 29 de maio de 2026  
**Tipo:** Hotfix release  
**Estatísticas:** 28 commits · 21 merged PRs · 9 contribuidores

**Nota de migração:** Esta versão corrige o loop infinito no dashboard que afetou todos os usuários da v0.15.0. Atualização recomendada para quem está na versão anterior.

> [Release v2026.5.29](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.5.29)

---

## 3. Progresso do Projeto

### PRs de Segurança Merged (🔴 Alta Prioridade)
Onze PRs de hardening contra **SSRF (Server-Side Request Forgery)** foram mergeados hoje, indicando auditoria de segurança coordenada:

| PR | Arquivo | Severidade |
|----|---------|-----------|
| #34895 | `hermes_cli/models.py:2654` | HIGH |
| #34893 | `hermes_cli/models.py:767` | HIGH |
| #34884 | `tui_gateway/server.py:6416` | HIGH |
| #34889 | `tools/osv_check.py:150` | HIGH |
| #34886 | `hermes_cli/security_audit.py:290` | HIGH |
| #34890 | `optional-skills/health/nutrition_search.py:33` | HIGH |
| #34885 | `hermes_cli/security_audit.py:296` | HIGH |
| #34887 | `hermes_cli/runtime_provider.py:169` | HIGH |
| #34891 | `hermes_cli/nous_account.py:483` | HIGH |
| #34888 | `optional-skills/research/ro5_screen.py:16` | HIGH |
| #34892 | `agent/models_dev.py:293` | HIGH |
| #34883 | `optional-skills/blockchain/solana_client.py:106` | HIGH |
| #34876 | `optional-skills/devops/watch_http_json.py:84` | HIGH |
| #34877 | `optional-skills/devops/watch_github.py:126` | HIGH |
| #34878 | `hermes_cli/tools_config.py:606` | HIGH |
| #34880 | `optional-skills/productivity/telephony.py:261` | HIGH |
| #34874 | `hermes_cli/web_server.py:1859` | HIGH |
| #34882 | `optional-skills/blockchain/solana_client.py:144` | HIGH |

> Todos abertos por [@ErnestHysa](https://github.com/NousResearch/hermes-agent/pulls?q=author%3AErnestHysa)

---

### Outros PRs Relevantes

- **#31779** — fix(web_server): propagate --insecure flag to WebSocket security guards *(P2, OPEN)*
  - Resolveu 403 Forbidden em WebSockets quando dashboard exposto em não-loopback com `--insecure`.
  - Status: Aberto desde 2026-05-25.

- **#34967** — fix(gateway): clarify status session usage label *(OPEN)*
  - Renomeia "Tokens" → "Session usage (cumulative)" no `/status` do gateway para evitar confusão.

---

## 4. Temas Quentes da Comunidade

### 🔥 Issue #18080 — Improved Themes for Dashboard
**Status:** ABERTA | 💬 22 comentários | 👍 32  
**Prioridade:** P3 | **Categorias:** type/feature, comp/tui  
**Autor:** ogermer | Criado: 2026-04-30

Os cinco temas atuais (Midnight, Ember, Mono, Cyberpunk, Rose) apenas alteram paleta de cores, sem resolver problemas fundamentais de legibilidade. Críticas focam em:
- Fontes serif com peso leve e pouco contraste
- Seleção de tipografia não padronizada
- Acessibilidade deficiente

> [Issue #18080](https://github.com/NousResearch/hermes-agent/issues/18080)

---

### 💬 Issue #10143 — Topic-to-Profile Routing for Telegram
**Status:** ABERTA | 💬 10 comentários | **Prioridade:** P3  
**Categorias:** type/feature, comp/gateway, platform/telegram  
**Autor:** willy-scr | Criado: 2026-04-15

Permitir que um único bot Telegram despache mensagens de diferentes tópicos/threads para diferentes perfis Hermes — cada um com seu próprio modelo, skills, memória e system prompt.

> [Issue #10143](https://github.com/NousResearch/hermes-agent/issues/10143)

---

### ⚠️ Issue #27587 — Mattermost Interactive Button Approval
**Status:** ABERTA | 💬 4 comentários  
**Categorias:** type/feature, comp/gateway, P3  
**Autor:** bibendi | Criado: 2026-05-17

Fluxo `/approve` e `/deny` para comandos perigosos está quebrado no Mattermost — o gateway intercepta todos os comandos que começam com `/`, impedindo interações seguras.

> [Issue #27587](https://github.com/NousResearch/hermes-agent/issues/27587)

---

## 5. Bugs e Estabilidade

### 🔴 P1 — Críticos

| Issue | Descrição | Status |
|-------|-----------|--------|
| [#34071](https://github.com/NousResearch/hermes-agent/issues/34071) | Docker v0.15.0: stage2-hook.sh e main-wrapper.sh ausentes; container_boot removido — container crasha com código 127 | ABERTA |
| [#32646](https://github.com/NousResearch/hermes-agent/issues/32646) | fallback_providers não ativado quando 429 segue timeout recovery (provider zai/GLM) | ABERTA |
| [#32164](https://github.com/NousResearch/hermes-agent/issues/32164) | disk-cleanup pode deletar cron/jobs.json (registro vivo de tarefas cron) | **FECHADA** |
| [#34443](https://github.com/NousResearch/hermes-agent/issues/34443) | MCP TaskGroup crasha gateway quando qualquer servidor falha ao inicializar | **FECHADA** |
| [#34600](https://github.com/NousResearch/hermes-agent/issues/34600) | Config migration (v23→v24) limpa silenciosamente cron/jobs.json — 17 jobs perdidos | **FECHADA** |
| [#34966](https://github.com/NousResearch/hermes-agent/issues/34966) | MCP reload/gateway restart vaza processos — instâncias antigas nunca são mortas | ABERTA |

---

### 🟠 P2 — Importantes

| Issue | Descrição | Status |
|-------|-----------|--------|
| [#34701](https://github.com/NousResearch/hermes-agent/issues/34701) | Dashboard falha após update para 0.15.2: ModuleNotFoundError 'hermes_cli.dashboard_auth' | **FECHADA** |
| [#34511](https://github.com/NousResearch/hermes-agent/issues/34511) | Discord gateway não funciona em v0.15.1 (plugin.yaml ausente) | **FECHADA** |
| [#34576](https://github.com/NousResearch/hermes-agent/issues/34576) | Platform plugins (Discord, IRC, Teams, etc.) não descobertos no pip package | **FECHADA** |
| [#34775](https://github.com/NousResearch/hermes-agent/issues/34775) | Google Drive MCP server autentica mas dá timeout em todas as tools | **FECHADA** |
| [#34447](https://github.com/NousResearch/hermes-agent/issues/34447) | ntfy echo loop — replies do agent ecoam como mensagens incoming, criando espiral infinita | **FECHADA** |
| [#29849](https://github.com/NousResearch/hermes-agent/issues/29849) | Cronjob com no_agent=True ignora terminal.backend, executa localmente | ABERTA |
| [#34871](https://github.com/NousResearch/hermes-agent/issues/34871) | hermes mcp serve crasha com ModuleNotFoundError em pip install padrão | ABERTA |
| [#34645](https://github.com/NousResearch/hermes-agent/issues/34645) | TUI approval/clarify dialogs renderizam incompletamente no macOS | **FECHADA** |

---

### 🟡 P3 — Menores

| Issue | Descrição | Status |
|-------|-----------|--------|
| [#34480](https://github.com/NousResearch/hermes-agent/issues/34480) | s6-log lock collision em multi-container com /opt/data compartilhado | ABERTA |
| [#34514](https://github.com/NousResearch/hermes-agent/issues/34514) | hermes update usa latest main commit ao invés de latest tagged release | **FECHADA** |
| [#34491](https://github.com/NousResearch/hermes-agent/issues/34491) | check_for_updates() cache não invalidado após pip upgrade | **FECHADA** |

---

## 6. Pedidos de Features e Sinais de Roadmap

### ✨ Issue #34824 — Print Delegated Task Model at Start
**Autor:** shang-vikas | 💬 3 comentários | **Prioridade:** P3

- **Problema:** Usuário não tem visibilidade do modelo selecionado ao iniciar tarefa delegate
- **Necessidades:**
  - Análise de custo (track per-task model spend)
  - Monitoramento de qualidade
  - Debugging (validar lógica de seleção de modelo)

> [Issue #34824](https://github.com/NousResearch/hermes-agent/issues/34824)

---

### ✨ Issue #34745 — Paginated Memory with Keyword Search
**Autor:** johntika | 💬 2 comentários | **Prioridade:** P3

- **Problema:** Sistema de memória tem limite fixo de 2.200 caracteres — ao preencher, o agent summariza/comprime ou deleta entries, causando perda de contexto útil
- **Solução solicitada:** Memória paginada com busca por palavra-chave ("Memory Pages")

> [Issue #34745](https://github.com/NousResearch/hermes-agent/issues/34745)

---

### ✨ Issue #34786 — Automatic In-Provider Reasoning Fallback
**Autor:** Matrix6892 | 💬 1 comentário | **Prioridade:** P3

Quando usuário seleciona nível de raciocínio (e.g. `/reasoning high`) ou muda para modelo com semânticas diferentes, Hermes recebe HTTP 400. Solicitação: fallback automático dentro do mesmo provider quando API rejeita parâmetros de raciocínio.

> [Issue #34786](https://github.com/NousResearch/hermes-agent/issues/34786)

---

## 7. Resumo de Feedback dos Usuários

### 🔴 Dores Críticas Identificadas

1. **Instabilidade pós-update do Docker** — Usuários experimentando crashes completos do container ao atualizar da v0.14 para v0.15.0, com script de init faltante. Expectativa: atualização transparente, não quebra de ambiente.

2. **Plugins de plataforma quebrados no PyPI** — Integração com Discord, IRC, Teams, Google Chat, LINE, Mattermost, ntfy e SimpleX completamente não-funcionais após `pip install hermes-agent`. Perda de confiança na confiabilidade do pacote.

3. **Cron jobs sumindo silenciosamente** — Migration de config v23→v24 limpa jobs.json sem warning, afetando automações críticas. Impacto: usuários só percebem horas depois.

4. **MCP servers vazando memória** — Cada reload do gateway ou `/reload-mcp` spawna novos processos MCP sem matar os antigos. Acúmulo causa OOM em deployments com reloads frequentes.

---

### 🟡 Feedback Positivo e Funcionalidades Valoradas

- **Dashboard e TUI** continuam sendo área de foco intenso da comunidade (32 👍 na issue de temas)
- **Roteamento por tópico Telegram** (issue #10143) indica demanda por arquiteturas multi-tenant
- **Segurança proativa** — Avaralanche de 11 PRs de SSRF em um dia demonstra maturidade em resposta a vulnerabilidades

---

## 8. Backlog que Merece Atenção

### Issues sem resposta há >48h (prioridade P1-P2)

| Issue | Descrição | Prioridade | Idade |
|-------|-----------|------------|-------|
| [#32646](https://github.com/NousResearch/hermes-agent/issues/32646) | fallback_providers não ativado após timeout recovery | P1 | 4 dias |
| [#29849](https://github.com/NousResearch/hermes-agent/issues/29849) | no_agent=True cronjob ignora terminal.backend | P2 | 9 dias |
| [#34871](https://github.com/NousResearch/hermes-agent/issues/34871) | hermes mcp serve crasha em pip install padrão | P2 | 1 dia |

---

### PRs em Revisão há >3 dias

| PR | Descrição | Prioridade |
|----|-----------|------------|
| [#31779](https://github.com/NousResearch/hermes-agent/pull/31779) | --insecure flag propagation to WebSocket | P2 (5 dias) |

---

### Tendência de Regressões Empacotamento

Três issues críticas em 24h relacionadas a empacotamento (plugin.yaml, dashboard_auth, Docker scripts) indicam necessidade de:
- CI/CD mais robusto para testes de wheel/sdist
- Validação de módulos Python embaralhados no bundle
- Smoke tests pós-instalação pip

---

## Métricas Resumidas

| Categoria | Count |
|-----------|-------|
| Issues abertas/ativas | 26 |
| Issues fechadas (24h) | 24 |
| PRs abertos | 7 |
| PRs merged/fechados | 43 |
| Releases | 2 |
| PRs de segurança merged | 11 |
| P1 bugs abertos | 2 |
| P1 bugs fechados (resolvidos) | 4 |

---

*Relatório gerado automaticamente com base em dados GitHub de Hermes Agent em 2026-05-30.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório de Projeto — PicoClaw
**Data:** 2026-05-30 | **Fonte:** github.com/sipeed/picoclaw

---

## 1. Panorama do dia

O projeto PicoClaw apresenta alta atividade de desenvolvimento em 30/05/2026. Nas últimas 24h foram registradas **8 atualizações em PRs** (5 merged/fechadas, 3 abertas) e **3 issues atualizadas** (2 abertas, 1 fechada). O versionamento avançou com a publicação da versão estável **v0.2.9** e uma nova nightly build (**v0.2.9-nightly.20260529.85751492**), sinalizando ritmo acelerado de entrega. A comunidade segue ativa em múltiplas frentes — tradução, segurança, internacionalização e melhorias de usabilidade — com foco em robustez e cobertura de funcionalidades globais.

---

## 2. Lançamentos

### v0.2.9 — Released
> Tag: `v0.2.9` | Commit base: `f062cb41`

Principais mudanças incluídas:

| Commit | Descrição |
|--------|-----------|
| `1055e08` | Adição de seção MCP na UI web de configuração (#2770) |
| `bdaff5c` | Introdução de `pretty_print` e `disable_escape_html` como padrões em `tool_feedback` |
| `569939a` | Correção (changelog truncado na origem — possível fix de estabilidade) |

**Sem breaking changes declaradas** — treat as evolução incremental.

🔗 https://github.com/sipeed/picoclaw/releases/tag/v0.2.9

### Nightly Build — v0.2.9-nightly.20260529.85751492
> ⚠️ Aviso: *automated build — pode ser instável*

Refere-se ao estado mais recente da branch `main`, sem notas formalizadas.

🔗 https://github.com/sipeed/picoclaw/releases/tag/nightly

---

## 3. Progresso do Projeto

PRs merged/fechadas nas últimas 24h:

| # | Título | Tipo | Impacto |
|---|--------|------|---------|
| **#2877** | `feat(security): add optional tirith pre-exec scanning` | Segurança | Adiciona scanner de终端 threats via [Tirith](https://github.com/sheeki03/tirith) na shell tool — camada de defesa proativa |
| **#2932** | `feat(i18n): add Czech (cs) locale` | i18n | Cobertura completa: 792/792 strings — abrange MQTT, MCP, model catalog e turn-profile |
| **#2966** | `docs: update wechat qrcode` | Documentação | Atualização de QR code para canal WeChat |
| **#2961** | `build(deps): bump github.com/pion/rtp` | Dependência | Patch 1.10.1 → 1.10.2 |
| **#2960** | `build(deps): bump github.com/caarlos0/env/v11` | Dependência | Patch 11.4.0 → 11.4.1 |

**Destaque:** O PR #2877 substitui o #1932 (fechado anteriormente), demonstrando persistência na议题 de segurança. A integração do Tirith representa evolução na postura defensiva do exec tool.

🔗 https://github.com/sipeed/picoclaw/pulls?q=is%3Apr+updated%3A2026-05-29

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento

**#2625 — "Provide compiled builds with WhatsApp support"** 🔥
- **Status:** OPEN
- **Autor:** duckida | **Criado:** 2026-04-22 | **Atualizado:** 2026-05-29
- **Comentários:** 7 | **Reações:** 👍 1
- **Domínio:** enhancement, channel, build
- **Resumo:** Usuário enfrenta dificuldade em atualizar PicoClaw no Raspberry Pi Zero 2 porque o build arm64 padrão não inclui suporte a WhatsApp. Proposta: incluir flags de compilação para embutir WhatsApp no build default.

> A dor central: impossibilidade de atualização rápida (via script) quando o binário default não contempla o canal desejado.

🔗 https://github.com/sipeed/picoclaw/issues/2625

**#2929 — "Add first-class agent-to-agent communication"**
- **Status:** OPEN
- **Autor:** afjcjsbx | **Criado:** 2026-05-22 | **Atualizado:** 2026-05-29
- **Comentários:** 2 | **Reações:** 👍 1
- **Resumo:** Identifica gap no modelo de multi-agente: já existem `spawn`, `subagent` e `delegate`, mas falta camada peer-to-peer de comunicação. Este é um pedido estruturante para workflows cooperativos avançados.

🔗 https://github.com/sipeed/picoclaw/issues/2929

**#2351 — "Validate skill binary requirements before injecting into system prompt"**
- **Status:** CLOSED ✅
- **Comentários:** 3
- **Resumo:** Skills que declaram `metadata.nanobot.requires.bins` eram injetadas no system prompt mesmo sem os bins instalados, causando promessas falsas ao LLM. A fechamento indica implementação ou resolução.

🔗 https://github.com/sipeed/picoclaw/issues/2351

---

## 5. Bugs e Estabilidade

### PRs de fix abertas

**#2965 — `fix(tools): stop workspace guard misreading scheme-less URLs`** 🐞
- **Status:** OPEN
- **Autor:** maxmilian | **Atualizado:** 2026-05-29
- **Severidade:** Média
- **Resumo:** Quando `restrict_to_workspace` está ativo, o `guardCommand` interpretava URLs sem esquema (ex: `curl -s "wttr.in/Beijing?T"`) como caminhos absolutos, causando falsos bloqueios. Correção em curso.

🔗 https://github.com/sipeed/picoclaw/pull/2965

### Observações de estabilidade
- Nenhum crash novo reportado nas issues recentes.
- Issue #2351 (fechada) indicam problema de confiabilidade resolvido — validação de binários de skill antes de injeção no prompt.
- Dependências atualizadas (#2960, #2961) com patches minors — sem impacto funcional esperado.

**Saúde geral:** Estável. Não há indicadores de regressões ativas.

---

## 6. Pedidos de Features e Sinais de Roadmap

| # | Feature | Domínio | Prioridade | Sinal de roadmap? |
|---|---------|---------|------------|-------------------|
| #2625 | Builds arm64 com WhatsApp incluso | Build, Channel | Low | ⭐ Reforça necessidade de builds modulares/configuráveis por canal |
| #2929 | Comunicação agent-to-agent nativa | Multi-agent | Não definida | ⭐⭐ Alta relevância — alinha com evolução de arquitetura de agentes |
| #2964 | Compressão configurável de imagens inbound | Visão, Pipeline | Não definida | Reforça maturidade do pipeline de mídia — evita overflow em payloads |
| #2662 | Unificar tabela de vendors na documentação | Docs | Não definida | Melhora onboarding — indireto para adoção |

### Insights para roadmap
1. **Arquitetura de multi-agente** — O issue #2929 sinaliza demanda por primitivas mais sofisticadas de coordenação entre agentes. Esperável em versões futuras.
2. **Modularidade de builds** — #2625 evidencia necessidade de estratégia de build que permita incluir/excluir canais sem recompilar o core.
3. **Pipeline de mídia** — #2964 adiciona compressão em múltiplos níveis antes do payload — indica preocupação com eficiência de tokens/custos em用例 com alta volume de imagens.

---

## 7. Resumo de Feedback dos Usuários

### Dores identificadas

| Dor | Contexto | Prioridade percebida |
|-----|----------|----------------------|
| **Incompatibilidade de build com canal** | Raspberry Pi Zero 2 + WhatsApp: build padrão não suporta o canal | Média |
| **Promessas falsas de capabilities** | LLM afirma poder executar ações (screenshots) sem binários instalados | Alta (→ resolvida em #2351) |
| **Falsos positivos no workspace guard** | URLs válidos bloqueados pelo guard de workspace | Média |
| **Onboarding confuso** | Documentação de providers com redundância de informações | Baixa |

### Cenários de uso em destaque
- **Uso embarcado:** Raspberry Pi Zero 2 como plataforma de execução — necessidade de builds otimizados para ARM.
- **Multi-agente:** Usuários avançados explorando arquiteturas de spawn/subagent/delegate — demandam primitivas mais expressivas.
- **Canais de mensagens:** WhatsApp ainda representa cenário de uso real com barreiras de integração.

### Satisfação
- Atividade intensa (8 PRs/24h) indica comunidade engajada.
- Localização em tcheco (#2932) demonstra investimento em acessibilidade global.

---

## 8. Backlog que Merece Atenção

### Issues sem resposta significativa ou estagnadas

| # | Título | Criado | Atualizado | Estado | Observação |
|---|--------|--------|------------|--------|------------|
| **#2625** | WhatsApp builds | 2026-04-22 | 2026-05-29 | OPEN | 7 comentários, sem decisão clara sobre implementação — risco de perda de contributor |
| **#2929** | Agent-to-agent communication | 2026-05-22 | 2026-05-29 | OPEN | 2 comentários — precisa de resposta técnica sobre viabilidade arquitetural |

### PRs abertas com potencial impacto

| # | Título | Tipo | Urgência |
|---|--------|------|----------|
| **#2964** | Image input compression | Feature | ⭐⭐ Alta — evita overflow em payloads visuais |
| **#2965** | Workspace guard URL fix | Bug fix | ⭐⭐ Alta — false positives no segurança |
| **#2662** | Unify vendors docs | Documentation | Baixa — mas impacto em onboarding |

---

## Indicadores de Saúde do Projeto

| Indicador | Valor | Avaliação |
|-----------|-------|-----------|
| PRs closed (24h) | 5/8 | ✅ Muito ativo |
| Issues updated (24h) | 3 | ✅ Dentro do esperado |
| Releases (24h) | 2 | ✅ Ritmo saudável |
| Issues sem resposta >7d | ~2 | ⚠️ Atenção — ver backlog |
| Dependências atualizadas | 2 | ✅ Manutenção em dia |
| Cobertura i18n | Tcheco incluso | ✅ Expansão contínua |

**Veredicto geral:** PicoClaw demonstra saúde de projeto open source madura — atividade consistente, manutenção de dependências em dia, resolução de issues de estabilidade (workspace guard, validação de bins), e evolução incremental (MCP UI, compressão de imagem, segurança via Tirith). O backlog pede atenção em decisões arquiteturais (agent-to-agent, builds modulares) que podem definir a direção da v0.3.

---

*Relatório gerado automaticamente com base em dados públicos do GitHub. Última atualização: 2026-05-30.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-05-30

## 1. Panorama do Dia

O IronClaw apresenta **atividade muito intensa** nas últimas 24h, com 50 PRs atualizados e 22 issues processadas. A maior parte do trabalho concentra-se no **projeto Reborn** — nova geração da plataforma — com ênfase em autenticação OAuth, refatoração de credenciais, extensões MCP (Notion, NEAR AI, Slack) e consolidação do subsistema de auditoria de ferramentas. Não houve releases formais hoje; a versão mais alta publicada no crates.io continua sendo 0.24.0, apesar de tags git chegarem a 0.27.0, gerando um **gap de distribuição** que afeta consumidores downstream. A build nightly E2E falhou, sinalizando potenciais problemas de estabilidade na base principal.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

| Problema | Detalhes |
|----------|----------|
| [#3259](https://github.com/nearai/ironclaw/issues/3259) | **Gap crítico de distribuição**: tags Git alcançam `v0.27.0`, mas o crates.io só tem `0.24.0` (publicado em 2026-03-31). Consumidores downstream estão **bloqueados na versão 0.24.0** devido a CVEs no wasmtime 28.x. Impacto: médio-alto. Status: OPEN. |

---

## 3. Progresso do Projeto

### PRs merged/fechados hoje (6 issues closed, múltiplos PRs merged)

| PR | Escopo | Impacto |
|----|--------|---------|
| [#4240](https://github.com/nearai/ironclaw/pull/4240) | `docs`: especificação de resolução de entrega de comunicações | Define boundary resolver para preferências de comunicação persistidas por usuário |
| [#3874](https://github.com/nearai/ironclaw/pull/3874) | `docs`: spec do trigger loop (412 linhas) | Permite workflows de agentes acionados por cron em vez de mensagens humanas |
| [#4125](https://github.com/nearai/ironclaw/pull/4125) | Reborn auth interaction gate-resolution | Extrai dispatcher tipado para gates bloqueados — **manutenibilidade** |
| [#4179](https://github.com/nearai/ironclaw/pull/4179) | Google SSO para WebChat v2 | Migra comportamento v1 para superfície reborn-integration |
| [#4209](https://github.com/nearai/ironclaw/pull/4209) | Decompor `ironclaw_host_runtime/src/lib.rs` (1828 linhas) | Extração de módulos de egress antes do trabalho de credenciais |
| [#3748](https://github.com/nearai/ironclaw/pull/3748) | Refatorar builders de produção Reborn via factory | Elimina duplicação de caminhos de montagem de grafo de serviços |
| [#3094](https://github.com/nearai/ironclaw/pull/3094) | Adicionar ApprovalInteractionService e AuthInteractionService | Ponte para superfícies UX sem se tornar dependência de produto |

### Avanços significativos em aberto

- **Stack de auditoria de ferramentas**: PRs #4021–#4026 estão convergindo para fechar bypasses documentados em #4017. Após este merge, **toda execução de ferramentas** (chat, scheduler, routine, engine-v2) produz `ActionRecord` auditável.
- **OAuth consolidado**: #4174 já merged, com follow-ups em #4202 (limpeza de tokens callback crash-safe) e #4204 (GitHub + NEAR providers).
- **Extensões MCP**: #4228 (Notion) e #4223 (NEAR AI) em paralelo, expandindo o catálogo de extensões para Reborn.

---

## 4. Temas Quentes da Comunidade

### Issues/PRs com maior engajamento

| Item | Comentários | Tema Central |
|------|-------------|--------------|
| [#3259](https://github.com/nearai/ironclaw/issues/3259) | 11 | **Publicação crates.io bloqueada** — impacto direto em consumidores externos |
| [#3857](https://github.com/nearai/ironclaw/issues/3857) | 5 | Slack ProductAdapter MVP com credenciais pré-configuradas |
| [#3917](https://github.com/nearai/ironclaw/issues/3917) | 5 | **Segurança**: `RuntimeCredentialTarget::PathPlaceholder` — manter ou hardening? |
| [#3702](https://github.com/nearai/ironclaw/issues/3702) | 4 | Framework de testes binários E2E para Reborn |
| [#3281](https://github.com/nearai/ironclaw/issues/3281) | 3 | EventStreamManager para projection fanout durável |
| [#4176](https://github.com/nearai/ironclaw/issues/4176) | 3 | Wire auth consumers através de credenciais staged |
| [#4144](https://github.com/nearai/ironclaw/pull/4144) | — | Configuração de ativação de skills por regex |

### Análise de demandas

O padrão de issues mais comentadas revela **três vetores prioritários**:
1. **Distribuição e packaging** (#3259) — comunidade externa afetada por gaps de releases
2. **Segurança de credenciais** (#3917, #4222) — decisões de design sobre canais de injeção de secrets
3. **Reborn como plataforma** — extensibilidade via MCP, auth stateless, event streaming

---

## 5. Bugs e Estabilidade

### Falhas críticas

| Severidade | Item | Descrição |
|-------------|------|-----------|
| 🔴 **Crítica** | [#4108](https://github.com/nearai/ironclaw/issues/4108) | **Nightly E2E falhou** — workflow `Full E2E / E2E (extensions)` com commit `749f58441` |
| 🔴 **Crítica** | [#4237](https://github.com/nearai/ironclaw/issues/4237) | **PR #4234 quebra compilação** em `cargo test -p ironclaw_product_workflow` — trait/field additions não cobertos pela validação do PR |

### Bugs funcionais

| Severidade | Item | Descrição |
|-------------|------|-----------|
| 🟠 **Alta** | [#4241](https://github.com/nearai/ironclaw/issues/4241) | **KV Cache reuse quebrado**: Live Workspace Prompt Inputs invalidam cache entre turns de conversa |
| 🟡 **Média** | [#4022](https://github.com/nearai/ironclaw/pull/4022) | **Regressão**: erros HTTP de resposta do servidor agora abortam o agent run inteiro (regressão de #4014) |
| 🟡 **Média** | [#4226](https://github.com/nearai/ironclaw/issues/4226) | `cleaned_process_handoffs` cresce indefinidamente sem eviction |

### Vulnerabilidades em discussão

| Item | Status | Descrição |
|------|--------|-----------|
| [#3917](https://github.com/nearai/ironclaw/issues/3917) | **ABERTA** | `RuntimeCredentialTarget::PathPlaceholder` é canal estritamente pior que Header/Query — decisão pendente antes do ship |
| [#4222](https://github.com/nearai/ironclaw/issues/4222) | **ABERTA** | Material de credenciais HTTP não é zeroizado nos carriers de requisição (headers, URL, NetworkHttpTransport) |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em desenvolvimento ativo

| PR/Issue | Feature | Escopo |
|----------|---------|--------|
| [#4055](https://github.com/nearai/ironclaw/pull/4055) | **TrustEnrollment ceremony** | Máquina de estados (`Pending → Challenged → Verified → Active`) para registro de carteiras conectadas |
| [#4058](https://github.com/nearai/ironclaw/pull/4058) | **KMS fail-closed** | Proteção fail-closed na ship-gate custodial-mainnet |
| [#4228](https://github.com/nearai/ironclaw/pull/4228) | **Notion MCP para Reborn** | Port completo com reads, writes, comments, views, teams e users |
| [#4223](https://github.com/nearai/ironclaw/pull/4223) | **NEAR AI MCP para Reborn** | Capacidade `nearai.search` via runtime HTTP egress e credenciais staged |
| [#3857](https://github.com/nearai/ironclaw/issues/3857) | **Slack ProductAdapter MVP** | Suporte DMs, app mentions, roteamento via Reborn services |
| [#3281](https://github.com/nearai/ironclaw/issues/3281) | **EventStreamManager** | Projeção fanout durável para SSE, WebSocket, API subscribers |

### Sinais de roadmap

| Signal | Interpretação |
|--------|---------------|
| Forte foco em **Reborn auth consolidation** (#4215, #4202, #4204, #4176) | Autenticação unificada é bloco fundamental para GA |
| **Extensões MCP** sendo portadas em paralelo (#4228, #4223) | Ecossistema de extensões é prioritário para adoção |
| **Decomposição de monolito** (#4209 — 1828 linhas) | Technical debt sendo endereçada antes de features |
| Trigger loop spec (#3874) merged | Workflows agendados entrando no produto |

---

## 7. Resumo de Feedback dos Usuários

### Dores identificadas (via issues)

| Dor | Frequência | Impacto |
|-----|------------|---------|
| **Sem releases no crates.io** | 11 comentários | Consumidores externos bloqueados em versão vulnerável (0.24.0) |
| **Build E2E quebrada** | 1 ocorrência | Desconfiança na stability da base principal |
| **Compilação quebrada por PR merged** | 1 ocorrência | Processo de review não capturou break em crate dependente |

### Cenários de uso sinalizados

- **Desenvolvedores downstream** (via crates.io) precisam de releases frequentes e seguras
- **Equipes com GSuite** querem OAuth E2E integrado (WebUI v2)
- **Usuários Notion** aguardam integração MCP nativa

---

## 8. Backlog que Merece Atenção

### Issues sem resposta significativa (>3 dias sem atividade)

| Issue | Idade | Tema | Prioridade |
|-------|-------|------|------------|
| [#3281](https://github.com/nearai/ironclaw/issues/3281) | ~24 dias | EventStreamManager para Reborn | Alta (sugerida P0) |
| [#3094](https://github.com/nearai/ironclaw/issues/3094) | ~31 dias | Approval/Auth interaction services | Alta (sugerida P0) — **já merged** ✅ |
| [#3259](https://github.com/nearai/ironclaw/issues/3259) | ~25 dias | Gap de publicação crates.io | **Crítica** |
| [#3857](https://github.com/nearai/ironclaw/issues/3857) | ~9 dias | Slack ProductAdapter MVP | Média |

### Débitos técnicos pendentes

| Item | Descrição | Risco |
|------|-----------|-------|
| [#4206](https://github.com/nearai/ironclaw/issues/4206) | HTTP egress totalmente síncrono — precisa ser async E2E | Escalabilidade |
| [#4215](https://github.com/nearai/ironclaw/issues/4215) | PKCE math duplicado em `ironclaw_common::pkce` | Manutenibilidade |
| [#4209](https://github.com/nearai/ironclaw/issues/4209) | `ironclaw_host_runtime/src/lib.rs` com 1828 linhas | Violação de regra архитектурная (1500 linhas) |
| [#4026](https://github.com/nearai/ironclaw/pull/4026) | engine-v2 effect bridge ainda em rota de auditoria | Compliance |

---

## Métricas Resumidas do Dia

| Métrica | Valor | Tendência |
|---------|-------|-----------|
| Issues ativas/novas | 16 abertas, 6 fechadas | 🟢 Equilibrado |
| PRs abertos | 29 | 🟡 Alto volume |
| PRs merged | 21 | 🟢 Bom throughput |
| Releases | 0 | 🔴 Nenhuma |
| Falhas CI | 1 (Nightly E2E) | 🔴 Atenção |
| Bugs críticos | 2 | 🔴 Requer ação |
| Features em curso | 8+ | 🟢 Pipeline saudável |

---

**Conclusão**: O projeto IronClaw está em **fase de maturação intensiva do Reborn**, com alta atividade de engenharia em auth, extensões MCP e consolidação de auditoria. A falha na nightly E2E e o gap de releases no crates.io são os pontos mais urgentes a endereçar para manter a confiança da comunidade e a estabilidade operacional.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>



# Relatório de Projeto — CoPaw (QwenPaw)

**Data de referência:** 2026-05-30 | **Analista:** Relatório automático de atividade GitHub | **Horizonte:** Últimas 24h

---

## 1. Panorama do Dia

O projeto CoPaw (QwenPaw) mantém um alto nível de atividade com **45 issues e 34 PRs** atualizados nas últimas 24 horas, evidenciando uma semana de desenvolvimento intensa. A recém-lançada versão **v1.1.10-beta.1** marca o início de um ciclo de pré-release, enquanto a equipe prepara simultaneamente a **migração para o AgentScope 2.0** — uma breaking change de grande impacto. A comunidade reportou múltiplos bugs críticos (v1.1.9), especialmente relacionados a sessões, cron jobs e estabilidade no desktop Windows, ao mesmo tempo em que colaborações externas continuam aportando melhorias relevantes em canais (Feishu) e na interface do console. O volume de PRs abertos e a diversidade de contribuições indicam um projeto saudável, embora a carga de bugs na versão atual exija atenção.

---

## 2. Lançamentos

### 🆕 Nova Release: `v1.1.10-beta.1`

| Item | Detalhe |
|---|---|
| **Versão** | `v1.1.10-beta.1` |
| **Data** | 2026-05-29 |
| **PRs incluídos** | #4726, #4748 |
| **Mudanças** | Refinamento da seção de notícias do README e incremento de versão para v1.1.9; remoção do workflow redundante `unit-tests.yml` na infraestrutura de CI |

**Nota:** Esta é uma release de preparação. A versão `v1.1.9` permanece como release estável mais recente, enquanto a `v1.1.10-beta.1` sinaliza o início de um novo ciclo iterativo.

---

## 3. Progresso do Projeto

### PRs merged/fechados mais relevantes (últimas 24h)

| # | PR | Autor | Tipo | Destaque |
|---|---|---|---|---|
| **#4806** | `feat(agents): add spawn_subagent tool for ephemeral in-workspace sub-agent execution` | @rayrayraykk | Feature | Introduz ferramenta `spawn_subagent` para execução efêmera de sub-agentes no próprio workspace; complementa `chat_with_agent` (cross-workspace). Completa o trio de modos de colaboração. |
| **#4809** | `feat(providers): add OpenRouter app attribution headers for ranking visibility` | @rayrayraykk | Feature | Adiciona headers `X-OpenRouter-Title` e `X-OpenRouter-Categories` para rastreamento no leaderboard de coding do OpenRouter. |
| **#4801** | `fix(pet): Auto-install missing dependencies to resolve startup failure on v1.1.9` | @wangfei010313 | Bug fix | Corrige falha de inicialização do desktop pet no Windows v1.1.9 caused by missing `pyside6-essentials`. |
| **#4779** | `fix(tauri): add bundled desktop qwenpaw CLI` | @jinglinpeng | Bug fix | Embute CLI `qwenpaw` no pacote Tauri Desktop, corrigindo cron creation paths que caíam no `pip install`. |
| **#4805** | `fix(console): chatcode` | @zhaozhuang521 | Bug fix | Limpa abas do editor ao trocar projetos em Coding Mode, evitando arquivos do projeto antigo persistindo. |
| **#4728** | `fix(agents): preserve reasoning_content across file blocks` | @qbc2016 | Bug fix | Corrige desaparecimento silencioso de mensagens do assistant que continham blocos `[thinking, file]`. |
| **#4696** | `fix(coding): hide Windows git console windows` | @jinglinpeng | Bug fix | Elimina a janela preta `git.exe` que aparecia ao entrar em Coding Mode no Desktop Windows. |
| **#4708** | `feat(feishu): feishu thread reply` | @szetohoyan | Feature | Permite replies em threads/topics do Feishu usando a Reply API, mantendo contexto de conversa. |
| **#4742** | `refactor(feishu): restructure card system to match wecom/qq pattern` | @hongxicheng | Refatoração | Padroniza sistema de cards interativos do Feishu, alinhando com a estrutura de WeCom e QQ. |

**PR em destaque pela inovação:** [#4806](https://github.com/agentscope-ai/QwenPaw/pull/4806) — A introdução do `spawn_subagent` representa uma evolução significativa na arquitetura de multi-agentes, permitindo delegação efêmera de sub-tarefas dentro do próprio workspace com três modos de colaboração definidos.

---

## 4. Temas Quentes da Comunidade

### Issues e PRs com maior engajamento (comentários + reações)

| # | Título | Tipo | Comentários | 👍 | Relevância |
|---|---|---|---|---|---|
| **#4739** | `[Bug] Tool call hangs Agent: timeout or success → agent waits for user input instead of continuing` | Bug | 8 | 0 | **🔴 Crítico** — Agent entra em estado fantasma após tool call; quebra fluxo de automação. |
| **#4653** | `[Bug] 定时任务与用户消息共享session导致任务被中断` | Bug | 7 | 0 | Cron jobs compartilhando sessão com mensagens do usuário são interrompidos. |
| **#3224** | `[enhancement] Feature Request: CoPaw Agent Teams — 自然语言驱动的自进化多智能体协作团队` | Enhancement | 6 | 0 | **Visão de longo prazo** — Proposta ambiciosa de equipes de agentes auto-evolutivas lideradas por linguagem natural. |
| **#4712** | `[Bug] v1.1.9-beta.1版本，无法运行本地的一些CLI命令` | Bug | 6 | 0 | CLI tools locais (Feishu CLI, etc.) falham no desktop Windows; websocket não conecta. |
| **#4802** | `[Bug] 1.1.9版本，无法正常问答对话` | Bug | 6 | 0 | Interface trava após envio de mensagem; não recebe resposta. |
| **#4727** | `[Breaking Change] Migrate backend from AgentScope 1.x to AgentScope 2.0` | Breaking Change | 3 | 2 | **Mudança arquitetural** — Migração planejada com breaking changes significativos. |
| **#4789** | `[Feature] 希望qwenpaw也能像trae那样，可以每一个对话删除和回退` | Feature | 4 | 1 | **Demanda alta** — Usuário solicita Git-like undo/redo por conversa, similar ao Trae IDE. |
| **#4795** | `[Bug] 向量索引无限膨胀至 37G 导致 memory_search 崩溃` | Bug | 2 | 0 | **🔴 Severo** — ChromaDB index grows to 37GB in ~3 months; crashes `memory_search`. |

### Análise dos temas quentes

**1. Estabilidade do Agent após tool calls (#4739)** — Com 8 comentários, é a issue com maior engajamento. O problema afeta fluxos automatizados onde o agent deveria continuar após uma tool executar (sucesso, timeout ou erro), mas em vez disso entra em estado de espera silencioso. Este é um bug deUX crítico que impacta toda a experiência de automação.

**2. Cron jobs e gestão de sessão (#4653, #4649, #4818)** — Três issues separadas sobre problemas com cron jobs: compartilhamento de sessão que causa interrupções (#4653), jobs órfãos que continuam executando após remoção (#4649), e traces vazios quando `share_session=true` (#4818). Demonstram uma fragilidade recorrente na arquitetura de tarefas agendadas.

**3. Vision for Agent Teams (#3224)** — A feature request mais estratégica com 6 comentários. Proposta por @watsonagenda, pede equipes de agentes auto-evolutivas com criação dinâmica via linguagem natural, hierarquias flexíveis e mecanismos de auto-critica. Mostra que power users desejam ir além da colaboração manual entre agentes.

**4. Migração AgentScope 2.0 (#4727)** — Marcada como Breaking Change com 2 reações, esta é a mudança arquitetural mais significativa do ciclo. A equipe já está planejando a transição; usuários e contribuidores demonstram interesse moderado (3 comentários).

---

## 5. Bugs e Estabilidade

### Bugs reportados nas últimas 24h (por severidade)

#### 🔴 Críticos (impacto operacional severo)

| # | Bug | Versão | Sintoma | Status |
|---|---|---|---|---|
| **#4739** | Tool call hangs Agent | 1.1.9 | Agent espera input do usuário após tool call (sucesso/timeout/erro) | CLOSED |
| **#4795** | Vector index grows to 37GB, memory_search crashes | 1.1.9 | ChromaDB em `~/.qwenpaw/file_store/` infla sem controle; processo morre a cada 30min | OPEN |
| **#4792** | 后台流式输出的时候，整个电脑都异常卡顿 | 1.1.9 | Streaming de respostas longas causa freeze no sistema local (mouse inoperante) | OPEN |
| **#4802** | 无法正常问答对话 | 1.1.9 | Interface trava após envio de mensagem; resposta nunca chega | OPEN |

#### 🟠 Altos (impacto significativo)

| # | Bug | Versão | Sintoma | Status |
|---|---|---|---|---|
| **#4818** | Cron agent com `share_session=true` produz traces vazios | — | Agent não executa; traces vazios; duração 0.1-0.2s | OPEN |
| **#4791** | 服务重启时当前会话的最后几条消息丢失 | — | SIGTERM/restart systemd perde últimas mensagens do session | OPEN (wontfix) |
| **#4819** | 代码模式下无法切换对话 | v1.1.9 | Coding Mode: trocar conversa causa refresh global e retorno ao chat original | OPEN |

#### 🟡 Médios (impacto contido)

| # | Bug | Versão | Sintoma | Status |
|---|---|---|---|---|
| **#4807** | 每次升级之后，被禁用的内置技能又会重新变回启用 | 1.1.9→1.1.9 | Skills desabilitadas voltam a ativas após update; exige reconfiguração manual | OPEN |
| **#4713** | 切换页面后历史对话记录消失 | v1.1.9-beta.1 | Após navegar para outra página, histórico da conversa some; session não persistido | CLOSED |
| **#4800** | 输入/skills 第一次 não dispara;第二次 dispara com erro YAML | v1.1.9 desktop | Tab para autocompletar skills em novo diálogo falha com erro de indentação | OPEN |

### Padrões identificados

1. **Acúmulo de bugs na v1.1.9** — A versão atual concentra a maioria dos reports de bugs críticos, sugerindo necessidade de uma release de estabilização (v1.1.10).
2. **Cron jobs como área problemática** — Ao menos 4 issues distintas sobre comportamento incorreto de tarefas agendadas (interrupção, órfãos, traces vazios, não-disparo).
3. **Persistência de estado no Desktop** — Múltiplos bugs relacionados a sessões e histórico se perdendo entre navegações ou reinicializações.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features solicitadas (últimas 24h)

| # | Feature | Autor | Comentários | Potencial impacto |
|---|---|---|---|---|
| **#3224** | **CoPaw Agent Teams** — equipes de agentes auto-evolutivas lideradas por linguagem natural | @watsonagenda | 6 | 🔬 Roadmap de longo prazo; requer design de arquitetura multi-agente |
| **#4796** | Slash command `/skills` com autocompletar na entrada do chat | @rescodexa | 5 | ✅ PR #4810 em revisão implementa exatamente isso |
| **#4789** | Undo/redo por conversa (estilo Trae IDE) | @bcoooooooooooooooo | 4 + 1 👍 | 📋 Forte demanda de UX; envolve gerenciamento de histórico |
| **#4759** | Coding Mode: editor VSCode-compatible + import in-place de pastas | @ziyu-code | 2 | 📋 Melhora experiência de desenvolvimento |
| **#4804** | Prompt Section Registry para plugins injetarem seções no system prompt | @EliasMei | — | 🧩 Expansibilidade do sistema de plugins |
| **#4794** | Plugin uninstall hooks + skill provider API | @wangfei010313 | — | 🧩 Integração DataPaw; maturidade do sistema de plugins |
| **#4693** | Custom channels via plugin com UI de config schema-driven | @hongxicheng | — | 🧩 Plugin ecosystem expansion |

### Sinais de roadmap mais relevantes

1. **#4727 — Migração AgentScope 2.0:** Marcada como Breaking Change. Este é o principal esforço arquitetural em curso. Signals: a comunidade já demonstra preocupação com compatibilidade e a equipe está planejando a transição.

2. **#4810 — Slash skill suggestions:** PR já em revisão (#4810) que implementa autocomplete de skills no chat. Deve entrar na próxima versão.

3. **#4821 — Feishu group session sharing:** PR aberto para controle de sessão compartilhada em grupos Feishu (análogo ao WeCom). Demonstra priorização de canais de comunicação.

### Score de sinais para próximo release (v1.1.10)

| Feature | Sinais | Probabilidade |
|---|---|---|
| Slash skill autocomplete (#4796) | 5 comentários + PR em revisão | 🟢 Alta |
| Fixes de cron jobs (#4818, #4822) | 1-2 issues + PR | 🟢 Alta |
| Feishu group session (#4821) | PR aberto | 🟡 Média |
| Prompt Section Registry (#4804) | PR aberto | 🟡 Média |
| CoPaw Agent Teams (#3224) | 6 comentários, sem PR | 🔴 Baixa (roadmap) |

---

## 7. Resumo de Feedback dos Usuários

### Dores reais identificadas

**🖥️ Experiência Desktop Windows fragmentada:**
- Cron jobs tentam instalar via pip em vez de usar CLI bundled (#4773, #4779)
- Pet plugin não inicia por dependência faltante (#4801)
- Janelas de console git aparecem durante Coding Mode (#4696)
- External links no Tauri Desktop não funcionam (#4683)

> *"桌面版是因为没有将qwenpaw 写到环境变量中吗，总是找不到qwenpaw cron的指令，总是去pip install qwenpaw"* — @rescodexx

**🤖 Confiabilidade do Agent:**
- Tool calls que travam o agente e exigem restart manual (#4739)
- Mensagens que desaparecem ao trocar de página (#4713)
- Histórico perdido em restart (#4791 — wontfix reconhecido)

**📊 Escala e performance:**
- Índice vetorial do ChromaDB crescendo sem controle (37GB) e causando crashes (#4795)
- Streaming longo congela o PC cliente (não o servidor) (#4792)

**📅 Cron jobs imprevisíveis:**
- Tarefas agendadas compartilhando sessão com usuários ativos (#4653)
- Jobs órfãos executando indefinidamente após remoção (#4649)
- Traces vazios em cron agent (#4818)

### Cenários de uso emergentes

| Cenário | Frequência nos reports | Observação |
|---|---|---|
| **Automação desktop via cron** | Alta | Usuários configuram lembretes, scripts agendados; expectation de estabilidade |
| **Multi-agente com identidades separadas** | Média | Trabalhos vs. vida pessoal; agente default vs. sub-agentes |
| **Coding Mode como IDE secundário** | Crescente | Comparação com VSCode, Trae; demanda por produtividade |
| **Integração com apps externos** | Alta | Feishu, OneBot, WeCom; CLI tools locais; vector memory |

### Satisfação geral

| Indicador | Leitura |
|---|---|
| Volume de issues vs. PRs (45:34) | Comunidade ativa reportando bugs — sinal de engajamento |
| Issue #4789 recebeu 1 👍 | Feature request de UX com upvote, indicando demanda latente |
| PRs first-time contributors (#4708, #4794, #4804, #4801) | Ecossistema de contribuidores crescendo |
| Breaking Change #4727 com 2 👍 | Aceitação moderada; comunidade atenta mas não alarmada |

> **Tom geral:** Usuários demonstram frustração com a estabilização da v1.1.9 no Desktop Windows, mas o alto volume de PRs e a diversidade de contribuições indicam confiança na equipe. A demanda por features de produtividade (undo/redo, coding editor maduro) sinaliza base de power users em crescimento.

---

## 8. Backlog que Merece Atenção

### Issues antigas sem resolução ou sem resposta significativa

| # | Título | Criado | Atualizado | Comentários | Situação |
|---|---|---|---|---|---|
| **#3224** | CoPaw Agent Teams — equipes de agentes auto-evolutivas | 2026-04-10 | 2026-05-29 | 6 | 🟡 A

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-05-30

## 1. Panorama do Dia

O projeto ZeroClaw mantém **alta atividade de desenvolvimento** em 30 de maio de 2026, com 32 PRs e 9 issues atualizadas nas últimas 24h. O foco principal está na **corrreção de bugs críticos de integração multi-agente e canais** (Telegram, WhatsApp), além de avanços significativos na preparação da release beta-2 (v0.8.0). A comunidade demonstra preocupação com regressões derivadas de reverts massivos (#6074) e há debates intensos sobre arquitetura de sandbox e ferramentas. Não foram registradas novas releases, indicando que a equipe aguarda estabilização dos PRs em andamento antes do próximo tag.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

A última versão oficial continua sendo **v0.7.5**, enquanto a documentação e branch principal refletem a v0.8.0-beta-1 — uma discrepância reportada em [#6997](https://github.com/zeroclaw-labs/zeroclaw/issues/6997) como bloqueio de workflow para usuários e contribuidores.

> ⚠️ **Recomendação:** Priorizar alinhamento da documentação com a versão oficial ou clarifying notes de migração.

---

## 3. Progresso do Projeto

### PR Merged/Fechada Hoje

| PR | Descrição | Impacto |
|----|-----------|---------|
| [#5652](https://github.com/zeroclaw-labs/zeroclaw/pull/5652) *(CLOSED)* | `feat(provider): native extended thinking para Anthropic e Bedrock` | **Alto** — Adiciona reasoning budget nativo, melhorando substancialmente performance em tarefas agentic complexas. Suporta múltiplos providers. |

### PRs Abertas com Alto Engajamento

| PR | Descrição | Status |
|----|-----------|--------|
| [#6848](https://github.com/zeroclaw-labs/zeroclaw/pull/6848) | `feat(integration): zerocode TUI, RPC socket, DenyWithEdit, beta-2` | **Em revisão** — Base pretendida para v0.8.0-beta-2; marcado "DO NOT MERGE" seeking feedback. Cobertura massiva (30+ labels). |
| [#6665](https://github.com/zeroclaw-labs/zeroclaw/pull/6665) | `feat(agent): channel_send tool com default_target` | **Em revisão** — Fecha gap de delivery de mensagens outbound para canais via tool invocation. |
| [#6793](https://github.com/zeroclaw-labs/zeroclaw/pull/6793) | `nextcloud-talk: migrate → AllowlistAspect (archetype A)` | **Em revisão** — Parte de cadeia de 24 PRs para padronização de allowlists. |
| [#6775](https://github.com/zeroclaw-labs/zeroclaw/pull/6775) | `feat(tools): file_upload_bundle para multi-file uploads` | **Em revisão** — Extensão de #6773 para uploads multipart N-arquivos. |

---

## 4. Temas Quentes da Comunidade

### Discussões com Maior Volume

1. **#[6998](https://github.com/zeroclaw-labs/zeroclaw/issues/6998) — RFC: Schema-Guided Reasoning (SGR)**  
   *Proponente: mn13 | Comentários: 0 (nova)*  
   Proposta de generalização para output estruturado cross-provider. Supera #4760 como primeiro consumidor. Referencia prior art de vamplabAI e Abdullin.

2. **#[6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) — RFC: Granular sandbox policy**  
   *Proponente: rarean | Comentários: 0 (nova)*  
   Visa adicionar controle config-driven para restrições filesystem e network via Landlock, Bubblewrap ou Seatbelt.

3. **#[6825](https://github.com/zeroclaw-labs/zeroclaw/issues/6825) — Tracker: TUI UX**  
   *Proponente: singlerider | Comentários: 0 | Status: in-progress*  
   issues transversal de UX para interface terminal — theming, keybindings, acessibilidade.

### Análise de Demandas

- **Infraestrutura de Canais:** Múltiplos PRs (#7002, #7000, #7003, #6973) indicam investimento ativo em estabilidade de Telegram e WhatsApp.
- **Segurança/Tools:** Foco em defense-in-depth com PRs #6920, #6924, #6960 abordando filtros de ferramentas em tempo de execução.
- **Multi-agent:** Bug crítico #6699 sobre tool_filter_groups não funcional para MCP tools revela dívida técnica na configuração de agentes.

---

## 5. Bugs e Estabilidade

### Por Severidade

| Severidade | Qtd | Issues | Descrição |
|------------|-----|--------|-----------|
| **S1** (workflow bloqueado) | 2 | [#6999](https://github.com/zeroclaw-labs/zeroclaw/issues/6999), [#6997](https://github.com/zeroclaw-labs/zeroclaw/issues/6997) | Transcrição de voz Telegram falha silenciosamente; documentação desatualizada bloqueia onboarding |
| **S2** (degraded) | 1 | [#7001](https://github.com/zeroclaw-labs/zeroclaw/issues/7001) | TTS resolve provider do agente errado em configs multi-agente |
| **S3** (minor) | 1 | [#7005](https://github.com/zeroclaw-labs/zeroclaw/issues/7005) | Onboarding wizard com strings não-localizadas |
| **P1** (high risk) | 1 | [#6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699) | `tool_filter_groups` é no-op para MCP tools + sem integração com deferred_loading |

### PRs de Fix em Andamento

| PR | Bug Corrigido | Risco |
|----|---------------|-------|
| [#6986](https://github.com/zeroclaw-labs/zeroclaw/pull/6986) | CanvasStore não wireado em WS/ACP sessions | High |
| [#6983](https://github.com/zeroclaw-labs/zeroclaw/pull/6983) | Stream errors sem fall back apropriado | High |
| [#7002](https://github.com/zeroclaw-labs/zeroclaw/pull/7002) | TTS manager bindado ao agente errado | — |
| [#7000](https://github.com/zeroclaw-labs/zeroclaw/pull/7000) | transcription_provider não wireado no Telegram | — |
| [#6960](https://github.com/zeroclaw-labs/zeroclaw/pull/6960) | SecurityPolicy tool filter não aplicado em process_message() | High |

> 📌 **Nota:** 6 de 9 issues abertas hoje são bugs, indicando ciclo de QA reativo. A issue [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) sobre 153 commits perdidos em revert requer atenção para recuperação de histórico.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Proposed

| Issue | Descrição | Potencial Impacto |
|-------|-----------|-------------------|
| [#6998](https://github.com/zeroclaw-labs/zeroclaw/issues/6998) | Schema-Guided Reasoning (SGR) — output estruturado cross-provider | **Alto** — Padronizaria interação com múltiplos provedores |
| [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) | Granular sandbox policy (filesystem + network) | **Médio** — Reforço de segurança para execuções |
| [#7004](https://github.com/zeroclaw-labs/zeroclaw/pull/7004) | Base64 encoding opcional para file_read/write | **Funcional** — Manipulação de binários |
| [#5838](https://github.com/zeroclaw-labs/zeroclaw/pull/5838) | Retry logic com exponential backoff para webhooks | **Operacional** — Resiliência de integrações |

### Sinais de Roadmap

- **v0.8.0-beta-2** em preparação via [#6848](https://github.com/zeroclaw-labs/zeroclaw/pull/6848): TUI completo, RPC socket, DenyWithEdit approval
- **MCP Tools** é área crítica — [#6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699) expõe gaps na integração de deferred_loading
- **Migração de Allowlists** em curso — 24 PRs chain (#6793 → tip #6799)
- **Native thinking** feature merged (#5652) pode sinalizar direção de capacidades cognitivas

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Tema | Evidência | Impacto |
|------|-----------|---------|
| **Documentação defasada** | [#6997](https://github.com/zeroclaw-labs/zeroclaw/issues/6997): "documentation version does not match latest release" | S1 — Usuários seguem guides incompatíveis |
| **Voice/TTS quebrado** | [#6999](https://github.com/zeroclaw-labs/zeroclaw/issues/6999), [#7001](https://github.com/zeroclaw-labs/zeroclaw/issues/7001): falhas silenciosas em Telegram voice e multi-agent TTS | S1-S2 — Experience degradada para canais de voz |
| **Complexidade de config multi-agente** | [#7001](https://github.com/zeroclaw-labs/zeroclaw/issues/7001) expõe que `resolved_runtime_agent_alias()` escolhe "lexicographically-smallest" em vez do owner real | Config error-prone |
| **Regressões por reverts** | [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074): 153 commits perdidos — comunidade requer audit e recovery | Risco de sustentabilidade |

### Cenários de Uso Reportados

- **Onboarding de novos usuários** impactado por strings não-localizadas e documentação desalinhada
- **Operadores de canais Telegram/WhatsApp** enfrentando falhas silenciosas de voice sem logs claros
- **Desenvolvedores Nix** aguardando flake.nix refatorado (#5987)

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta/Progresso Prolongado

| Issue | Idade | Status | Prioridade | Ação Recomendada |
|-------|-------|--------|------------|------------------|
| **Audit de commits revertidos** | ~36 dias | in-progress | P2, High Risk | [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) — Acompanhar para garantir recovery dos 153 commits |
| **tool_filter_groups MCP bug** | ~14 dias | accepted | P1, High Risk | [#6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699) — Bug raiz para deferred_loading; delay agrava dívida técnica |
| **Webhook retry logic** | ~43 dias | em PR | Medium Risk | [#5838](https://github.com/zeroclaw-labs/zeroclaw/pull/5838) — PR parece madura; agendar review |
| **Native thinking merged** | ~49 dias | closed | — | [#5652](https://github.com/zeroclaw-labs/zeroclaw/pull/5652) — Promover a release ou cherry-pick para stable |

### Métricas de Saúde do Backlog

```
Issues em aberto (24h): 9
Issues P1/P2: 3 (33%)
PRs abertas (24h): 29
PRs com risk:high: 11 (38%)
Releases (7d): 0
```

---

## Conclusão

ZeroClaw demonstra **saúde de desenvolvimento ativa**, porém com **débito técnico concentrado** em bugs de configuração multi-agente e estabilidade de canais de voz. A preparação da v0.8.0-beta-2 (#6848) é o marco mais significativo em curso. **Recomenda-se priorização** de:

1. Correção de [#6999](https://github.com/zeroclaw-labs/zeroclaw/issues/6999) + [#7001](https://github.com/zeroclaw-labs/zeroclaw/issues/7001) (S1-S2, user-blocking)
2. Alinhamento de [#6997](https://github.com/zeroclaw-labs/zeroclaw/issues/6997) (documentação vs. release)
3. Progresso em [#6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699) (P1, tech debt crescente)
4. Resolução de [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) (153 commits em risco)

---

*Relatório gerado automaticamente com base em dados GitHub de 2026-05-30. Métricas sujeitas a alterações em tempo real.*

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*