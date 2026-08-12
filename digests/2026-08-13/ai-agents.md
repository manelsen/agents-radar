# Resumo diário do ecossistema de agentes de IA 2026-08-13

> Issues: 0 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-08-12 20:37 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

Sem atividade nas últimas 24 horas.

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo do Ecossistema Open Source de Agentes de IA

**Data de referência:** 13 de agosto de 2026
**Projetos analisados:** 7 (NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw, ZeroClaw)

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source demonstra **saúde bifurcada** em agosto de 2026. Seis dos sete projetos monitorados apresentam atividade intensa (23-50 items atualizados em 24h), com ZeroClaw, NanoBot e IronClaw liderando em volume. No entanto, a natureza dessa atividade diverge significativamente: enquanto **ZeroClaw e IronClaw** investem em estabilização e hardening de segurança, **NanoBot e CoPaw** aceleram entrega de features com ciclo de bugs P1 extremamente curto (<24h). **Hermes Agent** destaca-se pela preocupação com integridade estrutural (P0 de injeção de tags), enquanto **PicoClaw** apresenta sinais preocupantes de abandono relativo (issues stale há 24+ dias). A ausência completa de NullClaw sugere projeto em hiatus ou abandono.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | Releases | Avaliação | Tendência |
|---------|--------------|-----------|----------|-----------|-----------|
| **NullClaw** | 0 | 0 | 0 | 🔴 Inativo | Estagnado |
| **NanoBot** | 7 | 50 | 0 | 🟢 Muito ativo | Acelerando |
| **Hermes Agent** | — | 11 | 0 | 🟢 Ativo | Estabilizando |
| **PicoClaw** | 2 | 3 | 0 | 🟡 Moderado | Estagnando |
| **IronClaw** | 39 | 47 | 1 (v1.2.0-rc.2) | 🟢 Ativo | Estável |
| **CoPaw** | 26 | 42 | 1 (v2.1.0-beta.4) | 🟢 Muito ativo | Acelerando |
| **ZeroClaw** | 50 | 50 | 0 | 🟢 Muito ativo | Estabilizando |

**Métricas consolidadas:**
- **Volume total de atividade:** 124 issues + 203 PRs em 24h (excluindo NullClaw)
- **Releases em 24h:** 2 (IronClaw, CoPaw)
- **Bugs P1-P0 abertos:** 18+ distribuídos (NanoBot: 0 pendentes, IronClaw: 3 P1, ZeroClaw: 5 P1)
- **Taxa de resolução P1:** NanoBot (100% em 24h), Hermes Agent (P0 aberta), IronClaw (3 P1 ativas)

---

## 3. Posicionamento do Projeto Principal

### NanoBot como referência de velocidade

NanoBot demonstra o **ciclo de desenvolvimento mais ágil** do ecossistema, com 9 PRs mergeados em 24h e zero bugs P1 pendentes. Suas vantagens competitivas:

| Dimensão | NanoBot | Diferencial |
|----------|---------|-------------|
| **Segurança** | 4 patches em 24h | Proteção proativa de credenciais (URLs, Docker) |
| **Canais** | Matrix + WeChat nativos | Suporte corporativo/asiático maduro |
| **Providers** | DeepSeek V4 Pro + QwenCloud | Diversificação além de OpenAI |
| **Arquitetura** | Hooks auto-discovery via entry_points | Extensibilidade padronizada |
| **Velocidade** | ~27 PRs processados/dia | 3x mais rápido que a média |

### Comparação direta com pares

| Aspecto | NanoBot | IronClaw | CoPaw | ZeroClaw |
|---------|---------|----------|-------|----------|
| **Foco primário** | Velocidade + segurança | Telegram + automations | Multi-agent reliability | Multiplataforma + security |
| **Bugs P1 pendentes** | 0 | 3 | 0 | 5 |
| **Features em destaque** | CLI TypeScript, DeepSeek V4 | Linked-device auth, OMP | Per-session models, DataPaw | WebAuthn, LSP support |
| **Comunidade (PRs/dia)** | 50 | 47 | 42 | 50 |
| **Maturidade percebida** | Alta (fast-moving) | Alta (RC stable) | Beta (feature-rich) | Alta (security-focused) |

---

## 4. Focos Técnicos Compartilhados

### 4.1 Segurança e Isolamento
Todos os projetos demonstram preocupação com **hardening de segurança** simultaneamente:

| Projeto | Iniciativa de Segurança |
|---------|------------------------|
| **NanoBot** | Proteção de URLs com credenciais (#5258), cache no-store headers (#5359), sandbox Docker (#5320) |
| **Hermes Agent** | Injeção de tags P0 (#84807), tokens refresh HTTP (#84811), WS ticket binding (#84809) |
| **ZeroClaw** | Validação WebAuthn (#9781), RUSTSEC-2026-0221 (#9865), WebAuthn assertion data |
| **CoPaw** | Plugin security gap (#6916), cron job injection prevention |

**Conclusão:** O ecossistema está em modo de corrida para fechar vetores de ataque após vulnerabilidades similarmente classificadas em múltiplos projetos.

### 4.2 Resiliência de Execução
Problemas de **estado e recuperação** aparecem transversalmente:

| Projeto | Problema | Impacto |
|---------|----------|---------|
| **Hermes Agent** | Cron jobs travados após EMFILE (#70664, 20+ dias aberto) | Jobs permanentemente bloqueados |
| **CoPaw** | Sem recovery após network interruption (#6932) | Sessões órfãs |
| **PicoClaw** | MCP server failure causa hang (#3269) | Agent loop travado |
| **NanoBot** | Repetição aleatória de mensagens (#5327) | Loop de raciocínio errático |

### 4.3 Context Management e Histórico
Três projetos enfrentam desafios similares de **persistência e compressão**:

- **PicoClaw** (#3316): Context management não respeita histórico em agentes roteados
- **CoPaw** (#6926): Orphaning de 18-50% das rows de histórico por session_id errado
- **Hermes Agent** (#84808): Todos obsoletos sobrevivem após descarte de política de compressão

### 4.4 Multi-Canal
O suporte a **múltiplos canais de comunicação** é padrão no ecossistema:

| Canal | NanoBot | IronClaw | PicoClaw | CoPaw |
|-------|---------|----------|----------|-------|
| Matrix | ✅ Maduro | — | — | — |
| WeChat | ✅ Maduro | — | — | — |
| Telegram | — | ⚠️ Problemas críticos (9 bugs P1-P2) | ✅ Topics support | — |
| Discord | — | — | ✅ | — |
| Slack | — | ✅ (com bugs) | — | — |

---

## 5. Análise de Diferenciação

### 5.1 Por público-alvo

| Projeto | Público primário | Caso de uso central |
|---------|------------------|---------------------|
| **NanoBot** | Desenvolvedores avançados | Automação de triagem de issues, pipelines CI |
| **Hermes Agent** | Equipes de pesquisa | Experimentação com MoA/failover, prompt caching |
| **IronClaw** | Usuários finais (Telegram) | Automations cotidianas via bot |
| **CoPaw** | Power users | Multi-agent collaboration, workspace durável |
| **ZeroClaw** | Enterprise/Cross-platform | Integração multiplataforma com segurança corporativa |
| **PicoClaw** | Comunidade SiPeed | Bots para Discord/Telegram em pequena escala |

### 5.2 Por arquitetura técnica

| Projeto | Stack distintivo | Escolha técnica |
|---------|------------------|-----------------|
| **NanoBot** | Hooks auto-discovery (entry_points) | Extensibilidade plug-and-play |
| **Hermes Agent** | MoA + prompt cache | Arquitetura de ensemble |
| **IronClaw** | OMP core-tool contract | Padronização de ferramentas (read/write/edit/glob/grep) |
| **CoPaw** | DAG production + DataPaw runtime | Análise de dados durável |
| **ZeroClaw** | Rust-first (RUSTSEC tracking) | Segurança via type system |

### 5.3 Por estratégia de release

| Projeto | Estratégia | Implicação |
|---------|------------|------------|
| **NanoBot** | Continuous merge, sem tags | Fast-moving, difícil rastrear versões |
| **CoPaw** | Beta releases frequentes (v2.1.0-beta.x) | Feedback rápido, possível instabilidade |
| **IronClaw** | RC releases estáveis | Maturidade para produção |
| **ZeroClaw** | Patchs de segurança discretos | Foco em stabilização |

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Projetos em expansão acelerada

| Projeto | Sinais de crescimento |
|---------|----------------------|
| **NanoBot** | 50 PRs/dia, 9 mergeados em 24h, contributors primeiro-tempo PRs sendo mergeados |
| **CoPaw** | v2.1.0-beta.4 com 16 PRs fechados em 24h, features de colaboração (DataPaw, per-session models) |
| **IronClaw** | 39 issues + 47 PRs em 24h, automations e design system em desenvolvimento |

### 6.2 Projetos em modo konsolidação

| Projeto | Sinais | Ação recomendada |
|---------|-------|------------------|
| **ZeroClaw** | 5 P1 críticos abertos, RUSTSEC advisories, foco em security hardening | Priorizar triagem de P1s |
| **Hermes Agent** | P0 de injeção de tags, segurança de tokens, sem features net-new | Estabilização urgente |
| **PicoClaw** | Issues stale há 24+ dias, baixa atividade (3 PRs) | Reavivar ou archivar |

### 6.3 Maturidade comparativa

| Indicador | NanoBot | IronClaw | CoPaw | ZeroClaw |
|-----------|---------|----------|-------|----------|
| **Bugs P1 pendentes** | 0 | 3 | 0 | 5 |
| **Taxa de resolução** | <24h | 24-48h | <24h | Variável |
| **Processo de triagem** | Robusto | Robusto | Adequado | Em maturação |
| **SLA de resposta** | Excelente | Bom | Bom | Necessita melhoria |
| **Release cadence** | Informal | RC-based | Beta frequent | Security patches |

---

## 7. Sinais de Tendência

### 7.1 Tendência 1: Hardening de segurança transversal
**Evidência:** 4/6 projetos ativos com patches de segurança críticos simultaneamente (NanoBot, Hermes Agent, ZeroClaw, CoPaw). Vulnerabilidades compartilhadas incluem:
- Injeção de contexto (Hermes Agent P0)
- Exposição de credenciais via URLs (NanoBot, CoPaw)
- Validação de autenticação (ZeroClaw WebAuthn)

**Implicação:** O ecossistema está amadurecendo para produção, com foco em compliance e enterprise readiness.

### 7.2 Tendência 2: Multi-canal como table stakes
**Evidência:** NanoBot (Matrix/WeChat), IronClaw (Telegram/DOOM), PicoClaw (Discord/Telegram), ZeroClaw (Telegram). Cada projeto implementa múltiplos canais com levels variados de maturidade.

**Implicação:** Suporte a canais será commodity; diferenciação virá de **robustez** (IronClaw precisa urgentemente) e **features avançadas** (threads dedicadas, collaboration).

### 7.3 Tendência 3: Extensibilidade padronizada
**Evidência:** 
- NanoBot: Hooks auto-discovery via `pkgutil` + `entry_points`
- IronClaw: OMP core-tool contract padronizando 5 ferramentas
- CoPaw: MCP server support, custom channel plugins

**Implicação:** Ecossistema move-se para **padrões de plugin** que permitem extensibilidade sem forking,类似 a VSCode extension model.

### 7.4 Tendência 4: Multi-agent orchestration emergindo
**Evidência:**
- CoPaw: Per-session model overrides, multi-agent collaboration (#6925), DataPaw runtime
- Hermes Agent: MoA (Mixture of Agents) com prompt cache
- NanoBot: Auto-discovery de hooks

**Implicação:** Próxima fronteira é **coordinação de múltiplos agentes** — seja por sessão, por provider, ou por tarefa. CoPaw e Hermes Agent lideram nesta área.

### 7.5 Tendência 5: CLI renaissance
**Evidência:**
- NanoBot: CLI TypeScript nativa com OpenTUI (#4329)
- ZeroClaw: CLI cron jobs delivery fix (#9340)
- CoPaw: CLI prerelease selection (#6939)

**Implicação:** Interfaces de linha de comando estão sendo reconstruídas para melhor developer experience (DX), indicando que power users e desenvolvedores são público primário.

### 7.6 Tendência 6: Divergência de maturidade entre projetos
**Evidência:** 
- PicoClaw: Issues stale 24+ dias, 0 releases
- NanoBot: <24h de resolução P1, 50 PRs/dia
- IronClaw: 3 P1s Telegram abertas simultaneamente

**Implicação:** O ecossistema está se **estratificando** entre projetos com governança ativa (NanoBot, CoPaw, IronClaw) e projetos em risco de abandono (PicoClaw, NullClaw).

---

## 8. Recomendações Estratégicas

### Para desenvolvedores avaliando projetos

1. **Para automação e triagem:** NanoBot oferece maior velocidade de iteração e features mais recentes
2. **Para produção em Telegram:** Aguardar estabilização do IronClaw (v1.2.0-rc.2 lançada, 9 bugs Telegram P1-P2 pendentes)
3. **Para segurança enterprise:** ZeroClaw demonstra maturidade em RUSTSEC tracking e WebAuthn
4. **Para multi-agent research:** Hermes Agent (MoA architecture) ou CoPaw (per-session models)

### Para mantenedores

1. **IronClaw:** Priorizar Telegram QA antes de novas features linked-device
2. **PicoClaw:** Responder issues stale ou formalizar archivement
3. **ZeroClaw:** Atribuir owners para RUSTSEC advisories pendentes
4. **Hermes Agent:** Mergear P0 de injeção de tags urgentemente

---

*Relatório gerado em 2026-08-13. Dados consolidados de 7 repositórios GitHub. Frequência recomendada de atualização: semanal.*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Report — 2026-08-13

## 1. Panorama do dia

NanoBot demonstra **atividade intensa e saudável** em 13 de agosto de 2026, com 7 issues e 50 PRs atualizados nas últimas 24 horas. Das 27 operações de PRs, pelo menos 9 foram mergeadas, incluindo melhorias de segurança P1 críticas (proteção de credenciais, hardening Docker, proteção de URLs). Não houve releases formais, mas o ritmo de contribuições e a resolução de bugs de alta prioridade indicam um ciclo de desenvolvimento acelerado. A comunidade está particularmente engajada em melhorias de canais (Matrix, WeChat), provedores de IA (DeepSeek V4 Pro) e estabilidade de sessão.

---

## 2. Lançamentos

**Nenhuma release formal registrada nas últimas 24 horas.**

O projeto mantém um fluxo contínuo de merge de patches sem etiquetar versões formais. O último ciclo de features notáveis (#5362 — suporte DeepSeek V4 Pro, #5359 — hardening de segurança) ainda não foi empacotado em release tag.

---

## 3. Progresso do projeto

### PRs mergeadas/fechadas de destaque

| # | Título | Impacto | Prioridade |
|---|--------|---------|------------|
| [#5362](https://github.com/HKUDS/nanobot/pull/5362) | feat(providers): support DeepSeek V4 Pro Responses | Adiciona suporte ao modelo DeepSeek V4 Pro via Responses API nativa | P2 |
| [#5359](https://github.com/HKUDS/nanobot/pull/5359) | fix(security): harden WebUI caches and CLI app subprocesses | Marca respostas com tokens como `Cache-Control: no-store`; restringe service worker; migra cache v1→v2 | — |
| [#5329](https://github.com/HKUDS/nanobot/pull/5329) | fix(exec): guard bare and named-user home paths | Corrige bypass de workspace em `ExecTool` para `~`, `~user`, redirecionamentos `<~root/.bashrc` | P1 |
| [#5258](https://github.com/HKUDS/nanobot/pull/5258) | fix(web): keep credential-bearing URLs away from Jina reader | Impede que URLs com credenciais sejam enviadas ao Jina.ai; inspecta cadeias de redirect | P1 |
| [#5320](https://github.com/HKUDS/nanobot/pull/5320) | fix(docker): restore capabilities for privilege drop | Restaura 3 capabilities necessárias ao bootstrap mantendo `cap_drop: ALL` e `no-new-privileges` | P1 |
| [#5230](https://github.com/HKUDS/nanobot/pull/5230) | fix(gemini): preserve imported tool calls with signature fallback | Preserva assinaturas nativas do Gemini 3 em replays de function-calls | P1 |
| [#5218](https://github.com/HKUDS/nanobot/pull/5218) | fix(tools): treat redirection and grouping delimiters in ExecTool path guard | Fecha brecha POSIX em extração de caminhos com operadores de redirecionamento | P1 |
| [#5279](https://github.com/HKUDS/nanobot/pull/5279) | fix(session): store session history outside the agent workspace | Move histórico de sessões para `<config-dir>/sessions/` (fora do workspace exposto a ferramentas) | P2 |
| [#4878](https://github.com/HKUDS/nanobot/pull/4878) | feat(hooks): add auto-discovery mechanism for agent hooks | Auto-registro de hooks via `pkgutil` + `entry_points` (padrão existente de channels/tools) | P2 |

**Total de PRs fechadas/mergeadas: 9 das 27 operações nas últimas 24h rastreadas no conjunto de top-20.**

---

## 4. Temas quentes da comunidade

### Issues com maior engajamento

| # | Título | Comentários | Reações | Tema central |
|---|--------|-------------|---------|--------------|
| [#5327](https://github.com/HKUDS/nanobot/issues/5327) | Bug: Nanobot repeats multiple times the same message while reasoning | 11 | 0 | **Estabilidade do raciocínio** — bug de loop de repetição |
| [#5295](https://github.com/HKUDS/nanobot/issues/5295) | Bug: deploy with docker compose failed, permission denied | 5 | 0 | **DX / Deploy** — configuração Docker |
| [#4858](https://github.com/HKUDS/nanobot/issues/4858) | Refactor dynamic tool provider lifecycle out of AgentLoop | 2 | 0 | **Arquitetura** — separação de responsabilidades MCP |
| [#5275](https://github.com/HKUDS/nanobot/issues/5275) | [channels/matrix] reply in thread → contexto dedicado | 1 | 0 | **UX de canal Matrix** — threading |

**Análise:** A issue de maior atenção é o bug de repetição de mensagens (#5327), que gerou 11 comentários indicando frustração significativa de usuários. O bug foi fechado, mas a intensidade do discussion sinaliza necessidade de testes de regressão mais robustos para o loop de raciocínio.

### PRs com maior potencial de impacto

| # | Título | Status | Tema |
|---|--------|--------|------|
| [#4329](https://github.com/HKUDS/nanobot/pull/4329) | feat(cli): add native TypeScript terminal UI | ABERTA | **CLI nativa TypeScript/OpenTUI** — reconstrução completa da interface terminal |
| [#5358](https://github.com/HKUDS/nanobot/pull/5358) | feat(webui): add session collaboration via mentions | ABERTA | **Colaboração em sessão** — menções entre sessões WebUI |
| [#5342](https://github.com/HKUDS/nanobot/pull/5342) | feat(webui): redesign apps discovery | ABERTA (conflict) | **Redesign de descoberta de apps** com cache offline |
| [#5292](https://github.com/HKUDS/nanobot/pull/5292) | fix(matrix): reply to the room-level user event | ABERTA | **Matrix UX** — link de respostas ao evento original |

---

## 5. Bugs e estabilidade

### Por severidade

#### P0 — Críticos (0 ativos)

Nenhum bug P0 aberto.

#### P1 — Altos (4 issues/PRs ativos ou recentes)

| # | Descrição | Status | Canário |
|---|-----------|--------|---------|
| [#5327](https://github.com/HKUDS/nanobot/issues/5327) | Nanobot repete a mesma mensagem várias vezes durante raciocínio (aparece aleatoriamente) | **FECHADO** | Regressão no agent loop |
| [#5295](https://github.com/HKUDS/nanobot/issues/5295) | Docker Compose falha com `Permission denied` em `entrypoint.sh` | **FECHADO** | Configuração de deployment |
| [#5329](https://github.com/HKUDS/nanobot/pull/5329) | ExecTool: bypass de workspace com caminhos `~`, `~user`, redirecionamentos | **MERGED** | Segurança de execução |
| [#5258](https://github.com/HKUDS/nanobot/pull/5258) | WebFetch envia URLs com credenciais ao Jina.ai | **MERGED** | Segurança/privacidade |

**Nota:** Todos os bugs P1 do período foram resolvidos, demonstrando ciclo rápido de resposta a vulnerabilidades.

#### P2 — Medios (3 issues/PRs ativos)

| # | Descrição | Status |
|---|-----------|--------|
| [#5348](https://github.com/HKUDS/nanobot/issues/5348) | Tests de token-usage falham deterministicamente em janela de ~5h/dia (22:00–03:00 US Central) — conflito de timezone entre `record_token_usage()` (UTC) e configurações | **ABERTO** |
| [#5275](https://github.com/HKUDS/nanobot/issues/5275) | Matrix: "reply in thread" deveria criar contexto dedicado (estilo Discord/Slack) | **ABERTO** |
| [#5350](https://github.com/HKUDS/nanobot/issues/5350) | Enhancement: adicionar path compatível com QwenCloud além do DashScope existente | **ABERTO** |

---

## 6. Pedidos de features e sinais de roadmap

### Novas solicitações (últimas 24h)

| # | Título | Tipo | Sinais de roadmap |
|---|--------|------|-------------------|
| [#5350](https://github.com/HKUDS/nanobot/issues/5350) | Adicionar path compatível com QwenCloud junto ao DashScope existente | **Enhancement** | Expansão de provedores para mercado internacional |
| [#5275](https://github.com/HKUDS/nanobot/issues/5275) | Threads dedicadas no Matrix (como Discord/Slack) | **Feature request** | Maturidade em canais assíncronos |
| [#4329](https://github.com/HKUDS/nanobot/pull/4329) | CLI TypeScript nativa com OpenTUI | **Feature (WIP)** | Evolução da DX de linha de comando |

### Tendências de features em desenvolvimento

| Área | PRs abertos | Direção |
|------|-------------|---------|
| **WebUI** | 5 (collaboration, apps discovery, setup flows, particle background, turn cancellation) | Experiência de usuário e discovery |
| **Canais** | 3 (Matrix reply, WeChat token persist, setup flows) | Multi-canal e robustez |
| **Providers** | 1 (QwenCloud) + 1 merged (DeepSeek V4 Pro) | Diversificação de LLMs |
| **Segurança** | 2 mergeadas P1 + 1 draft OAuth | Hardening contínuo |

---

## 7. Resumo de feedback dos usuários

### Dores reportadas

| Dor | Ocorrência | Issue |
|-----|-----------|-------|
| **Comportamento errático do agent loop** — repetição aleatória de mensagens | 11 comentários | [#5327](https://github.com/HKUDS/nanobot/issues/5327) |
| **Falha de deploy com Docker Compose** — `Permission denied` | 5 comentários + 1 PR (fixado) | [#5295](https://github.com/HKUDS/nanobot/issues/5295) |
| **Inconsistência de timezone em token usage** — testes falham em janela diária | 1 issue aberta | [#5348](https://github.com/HKUDS/nanobot/issues/5348) |
| **Leak de URLs com credenciais para Jina** — sensibilidade a privacidade | 1 PR fixado | [#5258](https://github.com/HKUDS/nanobot/pull/5258) |

### Cenários de uso em evidência

- **Investigação automatizada de issues** — usuários utilizam Nanobot como agente de triagem
- **Deploy containerizado em produção** — Docker Compose como path principal
- **Multi-canal (Matrix + WeChat)** — usuários em ecossistemas corporativo/asiático
- **Sessões colaborativas** — menções entre sessões WebUI (feature em desenvolvimento)

### Satisfação

A velocidade de resolução de bugs P1 (mesmo dia) e o merge de 9+ PRs em 24h indicam **saúde de projeto ativa**. A abertura de features colaborativas (#5358) e CLI TypeScript (#4329) sugere que power users estão investindo no ecossistema.

---

## 8. Backlog que merece atenção

### Issues sem resposta significativa (>7 dias sem comentários)

| # | Título | Criado | Idade | Prioridade |
|---|--------|--------|-------|------------|
| [#4884](https://github.com/HKUDS/nanobot/issues/4884) | Security: WebFetch sends complete user URLs to Jina | 2026-07-11 | ~32 dias | **Segurança** (já fixado em #5258) |
| [#4858](https://github.com/HKUDS/nanobot/issues/4858) | Refactor dynamic tool provider lifecycle out of AgentLoop | 2026-07-09 | ~34 dias | **Arquitetura** (PR #4878 mergeado) |

**Nota:** Ambas as issues acima foram addressed por PRs subsequentes, mas não foram fechadas explicitamente — recomendação: realizar triagem de close.

### PRs com conflitos não resolvidos

| # | Título | Criado | Tema |
|---|--------|--------|------|
| [#5342](https://github.com/HKUDS/nanobot/pull/5342) | feat(webui): redesign apps discovery | 2026-08-11 | **Conflito** — needs rebase |
| [#5338](https://github.com/HKUDS/nanobot/pull/5338) | fix(mcp): preserve credentials when OAuth store read fails | 2026-08-11 | **Conflito** — needs rebase |

**Recomendação:** Resolver conflitos de merge nos PRs de UI (#5342) e MCP OAuth (#5338) para não bloquear features planejadas.

---

## Métricas de saúde do projeto (2026-08-13)

| Indicador | Valor | Avaliação |
|-----------|-------|-----------|
| Issues ativas | 3 | 🟢 Normal |
| PRs abertos | 23 | 🟢 Normal (pipeline ativo) |
| PRs mergeados/fechados (24h) | 27 | 🟢 Muito ativo |
| Bugs P1 pendentes | 0 | 🟢 Excelente |
| Security patches (24h) | 4 | 🟢 Fortalecimento contínuo |
| Releases | 0 | 🟡 Aguardando empacotamento de features |
| Envelope de atividade | Muito alto | Projeto em alta velocidade |

---

*Relatório gerado automaticamente com base em dados do GitHub do repositório [HKUDS/nanobot](https://github.com/HKUDS/nanobot).*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 12/08/2026

---

## 1. Panorama do Dia

O projeto Hermes Agent registrou **11 pull requests** na data de hoje, demonstrando um nível de atividade intenso e bem distribuído. Desse total, **3 foram fechados (merged ou duplicados)** e **8 permanecem abertos**, sinalizando um pipeline robusto de correções e melhorias. A atividade concentra-se em correções de bugs (type/bug), com destaque para issues de criticidade **P0** no componente agent e **P2** em múltiplos subsistemas (cron, gateway, compression, tools, desktop). Não foram registradas novas versões ou releases hoje. A saúde geral do projeto reflete uma equipe reativa a problemas de estabilidade e segurança, especialmente na esteira de funcionalidades de caching, tooling e autenticação.

---

## 2. Lançamentos

**Nenhum lançamento (release) foi registrado hoje.** Todos os PRs fechados foram correções diretamente merged ao branch principal ou marcados como duplicados de outras branches já em progresso. Isso indica que o projeto mantém um fluxo de entrega contínua via correções integradas, sem versionamento formal de novas funcionalidades neste momento.

---

## 3. Progresso do Projeto

Três PRs alcançaram estado fechado hoje, representando avanços concretos:

| PR | Título | Componente | Impacto |
|----|--------|------------|---------|
| [#84810](https://github.com/NousResearch/hermes-agent/pull/84810) | Preserve prompt-cache capabilities across MoA and failover | cache | Resolve lacuna agent-less em configurações MoA/failover, propagando TTL de cache e prefixo de sistema estável |
| [#84800](https://github.com/NousResearch/hermes-agent/pull/84800) | Serialize lazy installs with cross-process file lock + recheck | deps | Elimina race condition onde dois processos podiam executar `_venv_pip_install` simultaneamente no mesmo target; protege contra wipe ABI durante instalação ativa |
| [#84798](https://github.com/NousResearch/hermes-agent/pull/84798) | Reject tool calls missing schema-required arguments before dispatch | tools | Adiciona validação de campos obrigatórios antes de autorização/execução, impedindo tools com `required:["x"]` de executarem com `{}` |

**Avanço principal:** O trio de fixes fecha lacunas críticas de integridade (cache em arquiteturas complexas), concorrência (instalação segura) e validação (tool dispatch), todas de impacto direto na confiabilidade operacional.

---

## 4. Temas Quentes da Comunidade

### PRs com maior atenção implícita (P0/P2, componentes críticos):

- **[#84807](https://github.com/NousResearch/hermes-agent/pull/84807) — fix(agent): defang closing tags in raw content before trajectory interpolation** *(P0, comp/agent)*  
  **Análise:** Este é o issue mais crítico do dia. A vulnerabilidade permite que um modelo que emita texto como `</tool_call>` ou `</tool_response>` feche prematuramente o envelope estrutural, expondo conteúdo posterior como novo elemento. Isso pode causar injeção de trajetória, desvio de contexto ou exfiltração de dados entre sessões. A severidade P0 com tag `sweeper:risk-caching` indica risco de integridade de cache e possível comprometimento de estado.

- **[#84811](https://github.com/NousResearch/hermes-agent/pull/84811) — fix(dashboard-auth): never send refresh tokens to non-HTTPS revocation endpoints** *(comp/dashboard-auth)*  
  **Análise:** Questão de segurança direta: tokens de refresh sendo transmitidos em texto claro via HTTP. O problema é agravável por discovery docs mal configurados ou ataques de redirect. O risco aqui é leak de credenciais em trânsito.

- **[#84801](https://github.com/NousResearch/hermes-agent/pull/84801) — fix(gateway): keep colon-bearing conversations isolated** *(P2, comp/gateway)*  
  **Análise:** Problema de isolamento de sessões: conversas com `:` em identity components recebiam session keys ambíguas, causando compartilhamento involuntário de histórico entre chats distintos. Tag `sweeper:risk-session-state` confirma risco de vazamento de estado entre sessões.

### Demanda emergente:
Os PRs de **security** (#84811, #84809 — WS tickets não bound a endpoint) e **session isolation** (#84801) sugerem que a comunidade está pressionando por endurecimento de segurança e isolamento, especialmente em ambientes multi-tenant ou com identidades complexas.

---

## 5. Bugs e Estabilidade

### Por Severidade:

**P0 — Crítico:**
| PR | Título | Descrição | Risco |
|----|--------|-----------|-------|
| [#84807](https://github.com/NousResearch/hermes-agent/pull/84807) | Agent: defang closing tags | Modelos que emitem `</tool_call>` ou `</tool_response>` fecham envelopes de trajetória antecipadamente, permitindo injeção de elementos estruturais | Injeção de trajetória, desvio de contexto, exfiltração entre sessões |

**P2 — Importante:**
| PR | Título | Descrição | Risco |
|----|--------|-----------|-------|
| [#70664](https://github.com/NousResearch/hermes-agent/pull/70664) | Cron: release guard on execution claim failure | `_running_job_ids` guarda não liberada se `create_execution()` falhar (e.g., EMFILE), deixando jobs "already running — skipping" permanentemente | Jobs cron travados após falhas transitórias |
| [#84801](https://github.com/NousResearch/hermes-agent/pull/84801) | Gateway: colon-bearing conversations isolated | Sessões com `:` em identity resolves para mesma key, compartilhando histórico | Vazamento de histórico entre sessões distintas |
| [#84808](https://github.com/NousResearch/hermes-agent/pull/84808) | Compression: stop stale todos from outliving policy | Context compaction preserva todo ativo após descartar a política que o justificou | Agente pode continuar ação destrutiva após comprimção de contexto |
| [#84798](https://github.com/NousResearch/hermes-agent/pull/84798) | Tools: reject missing required arguments | Ferramentas com `required:["x"]` executavam com `{}` | Execução de tools sem argumentos obrigatórios |

**P3 — Menor:**
| PR | Título | Descrição |
|----|--------|-----------|
| [#84803](https://github.com/NousResearch/hermes-agent/pull/84803) | Gateway: YAML skins reset after restart | Skins customizados resetam para **nous** após restart do Desktop |
| [#84804](https://github.com/NousResearch/hermes-agent/pull/84804) | Desktop: stabilize virtual session scrolling | Virtualizador de sessões causa scroll instável com grid gap não medido |

### Análise de Estabilidade:
A predominância de P0/P2 indica que o projeto enfrenta problemas de **integridade estrutural** (injeção de tags), **isolamento de estado** (cron, gateway, compression) e **segurança de tokens** (dashboard-auth). A taxa de bugs relacionados a state management (session-state, cache, cron guards) é elevada, sugerindo necessidade de revisão arquitetura de gerenciamento de estado.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas demandas identificadas:

1. **WS Ticket Binding a Endpoint Path** — [#84809](https://github.com/NousResearch/hermes-agent/pull/84809)  
   *Feature implícita:* Bind de tickets WebSocket ao path do endpoint minted. Hoje tickets são aceitos em qualquer superfície WS, impedindo políticas por endpoint.  
   *Sinal de roadmap:* Autenticação granular para WS surfaces (console/PTY/events) pode estar em desenvolvimento.

2. **Percent-Encoding de Session Keys** — [#84801](https://github.com/NousResearch/hermes-agent/pull/84801)  
   *Feature implícita:* Versionamento e percent-encoding de session keys para conversas com caracteres especiais (`:`).  
   *Sinal de roadmap:* Suporte a identidades com caracteres não-ASCII ou reserved characters em componentes de identity.

3. **Lazy Install com Lock Cross-Process** — [#84800](https://github.com/NousResearch/hermes-agent/pull/84800)  
   *Feature implícita:* Mecanismo de serialização de instalações lazy com file lock + recheck in-lock.  
   *Sinal de roadmap:* Instalação de features sob demanda mais robusta em ambientes multi-processo.

### Ausências notáveis:
Não há PRs de features net-new visíveis hoje. O roadmap aparenta estar em modo de estabilização e segurança, sem expansões funcionais horizontais.

---

## 7. Resumo de Feedback dos Usuários

### Dores reais inferidas dos PRs:

| Dor | Evidência | Severidade |
|-----|-----------|------------|
| **Crash de cron jobs após falhas transitórias** | [#70664](https://github.com/NousResearch/hermes-agent/pull/70664) — EMFILE/gateway exhaustion causa lock permanente | Alta |
| **Reset de skins após restart** | [#84803](https://github.com/NousResearch/hermes-agent/pull/84803) — experiência de personalização frustante | Média |
| **Scroll instável no sidebar de sessões** | [#84804](https://github.com/NousResearch/hermes-agent/pull/84804) — UX degradada em sessões longas | Média |
| **Vazamento de histórico entre conversas com `:`** | [#84801](https://github.com/NousResearch/hermes-agent/pull/84801) — isolamento de dados comprometidos | Crítica |
| **Injeção de trajetória por tags maliciosas** | [#84807](https://github.com/NousResearch/hermes-agent/pull/84807) — risco de manipulação de contexto por output de modelo | Crítica |
| **Tokens de refresh em texto claro** | [#84811](https://github.com/NousResearch/hermes-agent/pull/84811) — risco de exfiltração de credenciais | Crítica |

### Cenários de uso em evidência:
- **Ambientes Windows** (sweeper:risk-platform-windows, platform/windows) — suporte multi-plataforma em atenção.
- **Desktop Client** — uso com skins customizados e virtualização de sessões.
- **Gateway multi-tenant** — isolamento de conversas e autenticação WS.

### Satisfação/Insatisfação:
A ausência de PRs com 👍 > 0 sugere baixa votação comunitária ativa. O alto volume de duplicados indica que a comunidade reporta issues de forma fragmentada. A segurança (dashboard-auth, injeção de tags) e isolamento (cron, session-state) são as áreas de maior frustração.

---

## 8. Backlog que Merece Atenção

### Issue sem resposta há >30 dias:

| Issue/PR | Título | Idade | Status | Prioridade |
|----------|--------|-------|--------|------------|
| [#70664](https://github.com/NousResearch/hermes-agent/pull/70664) | fix(cron): release guard on execution claim failure | ~20 dias (criado 24/07, ainda OPEN em 12/08) | Aberto | P2 |

**Análise:** Este é o issue mais antigo em aberto sem resolução. Envolve race condition em cron jobs que pode travar executores permanentemente. Sua idade sugere complexidade de reprodução ou dependência externa. Requer priorização imediata para evitar acúmulo de jobs travados em produção.

### PRs em aberto com severidade P0-P2 (>24h sem merge):

| PR | Título | Tempo Aberto | Prioridade |
|----|--------|--------------|------------|
| [#84807](https://github.com/NousResearch/hermes-agent/pull/84807) | Agent: defang closing tags | ~1 dia | **P0** |
| [#84811](https://github.com/NousResearch/hermes-agent/pull/84811) | Dashboard-auth: never send refresh tokens to non-HTTPS | ~1 dia | **P2** (Segurança) |
| [#84801](https://github.com/NousResearch/hermes-agent/pull/84801) | Gateway: colon-bearing conversations isolated | ~1 dia | P2 |
| [#84808](https://github.com/NousResearch/hermes-agent/pull/84808) | Compression: stop stale todos from outliving policy | ~1 dia | P2 |
| [#84809](https://github.com/NousResearch/hermes-agent/pull/84809) | Dashboard: bind WS tickets to endpoint path | ~1 dia | P2 |

### Recomendações:

1. **Priorize #84807 imediatamente** — P0 com risco de injeção de trajetória afeta integridade de todo o sistema.
2. **Revise #84811 com urgência** — Segurança de tokens em cleartext é vetor de ataque crítico.
3. **Acelere #70664** — Cron jobs travados acumulam em produção, causando degradação silenciosa.
4. **Monitore duplicação de esforços** — 3 dos 11 PRs fechados hoje eram duplicados, indicando que issues similares são reportados múltiplas vezes. Um processo de triagem mais rigoroso poderia canalizar energia para resoluções únicas mais robustas.

---

*Relatório gerado em 12/08/2026. Dados extraídos de 11 pull requests no repositório NousResearch/hermes-agent.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-08-13

## 1. Panorama do Dia

O projeto PicoClaw apresenta **atividade moderada** nesta data, com 2 issues abertas e 3 pull requests em revisão nas últimas 24 horas. Não houve lançamentos de novas versões, indicando um período de estabilização ou foco em testes. Os esforços atuais concentram-se em correções de bugs críticos (2 issues marcadas como stale) e adição de funcionalidades solicitadas pela comunidade (3 PRs abertos). O projeto mantém uma cadência regular de desenvolvimentos, com destaque para melhorias em context management, suporte a topics em bots Telegram e integração com provedor de busca Exa.

---

## 2. Lançamentos

**Nenhum novo release nas últimas 24 horas.**

O projeto não publicou versões recentes. Recomenda-se monitorar os PRs em aberto para antecipar a próxima release, que potencialmente incluirá correções de performance na Web UI e suporte expandido a plataformas de mensagens.

---

## 3. Progresso do Projeto

Não há PRs merged ou fechados nas últimas 24 horas. No entanto, **3 pull requests值得关注**:

| PR | Título | Status | Relevância |
|----|--------|--------|------------|
| [#3316](https://github.com/sipeed/picoclaw/pull/3316) | fix: routed-agent context management not respecting history, summarization, compression | Aberto | ⭐⭐⭐ Alta |
| [#3315](https://github.com/sipeed/picoclaw/pull/3315) | Support topics in private bot chats | Aberto | ⭐⭐ Média |
| [#3299](https://github.com/sipeed/picoclaw/pull/3299) | Add native Exa web search provider | Aberto | ⭐⭐ Média |

**Destaque:** O PR #3316 resolve um bug crítico onde agentes roteados por dispatch rules perdiam histórico de mensagens e não disparavam auto-compaction, impactando diretamente a experiência em canais Discord.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Interação

| Issue | Título | Comentários | 👍 | Prioridade |
|-------|--------|-------------|----|------------|
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Web UI chat input laggy com histórico longo | 4 | 1 | 🔴 Alta |
| [#3269](https://github.com/sipeed/picoclaw/issues/3269) | MCP server failure causa hang no agent loop | 4 | 1 | 🔴 Alta |

**Análise das Demandas:**

- **Issue #3281**: Usuários reportam lentidão severa no input da Web UI quando o histórico de chat cresce. A comunidade suspeita de ineficiência no re-render do componente ou ausência de virtualização de lista. Versão afetada: 0.3.1.
  
- **Issue #3269**: Quando o servidor MCP falha, o agent loop fica suspenso, causando freeze total da interface de chat. Este é um problema de resiliência que afeta ambientes de produção.

**Conclusão:** A comunidade está ativamente reportando problemas de estabilidade e performance, sinalizando necessidade urgente de patches corretivos.

---

## 5. Bugs e Estabilidade

### 🔴 Bugs Críticos (Impacto Alto)

| Issue | Descrição | Severidade | Status |
|-------|-----------|------------|--------|
| [#3269](https://github.com/sipeed/picoclaw/issues/3269) | Agent loop hang ao falhar conexão MCP server | Crítica | Aberto (stale) |
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Input laggy na Web UI com histórico extenso | Alta | Aberto (stale) |

**Nota:** Ambas as issues estão marcadas como *stale*, indicando falta de resposta da equipe nos últimos 30+ dias. Isso pode impactar a confiança da comunidade.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Funcionalidades em Desenvolvimento

| PR | Feature | Descrição | Plataforma |
|----|---------|-----------|------------|
| [#3299](https://github.com/sipeed/picoclaw/pull/3299) | Exa Web Search Provider | Integração nativa com API Exa para busca web | tools.web |
| [#3315](https://github.com/sipeed/picoclaw/pull/3315) | Topics em chats privados | Suporte a Telegram topics em bots privados com forum mode | Telegram |

**Sinais de Roadmap:**
- Expansão de provedores de busca (Exa como alternativa a provedores existentes)
- Melhoria na compatibilidade com recursos avançados do Telegram
- Correção de context management para agentes roteados

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Reportadas

1. **Performance da Web UI** — Usuários experimentam lag severo ao digitar em sessões com histórico moderado, comprometendo a usabilidade em conversas longas. O trabalho remoto e uso intensivo torna este problema particularmente frustrante.

2. **Resiliência de Integrações MCP** — Falhas em servidores MCP causam freeze total, sem graceful degradation. Usuários em ambientes de produção reportam necessidade de restart manual do serviço.

3. **Context Persistence em Agents Roteados** — Agentes configurados via dispatch rules não mantêm histórico entre sessões, contradizendo expectativas de agentes stateful.

### Cenários de Uso Identificados

- **Uso intensivo em Discord**: Agentes roteados por canal, com necessidade de memória persistente.
- **Bots Telegram com topics**: Casos de uso em grupos com forum mode ativo.
- **Integração com busca web**: Necessidade de search capability para agentes de pesquisa.

### Indicadores de Satisfação

- 0 novas releases = comunidade aguardando novidades
- 2 issues stale = risco de frustração por falta de resposta oficial
- 3 PRs novos = contributors ativos indicam investimento contínuo

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta há Muito Tempo

| Issue | Título | Criado | Atualizado | Dias Inativo |
|-------|--------|--------|------------|--------------|
| [#3269](https://github.com/sipeed/picoclaw/issues/3269) | MCP server failure → agent hang | 2026-07-20 | 2026-08-12 | ~24 dias |
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Web UI chat input laggy | 2026-07-21 | 2026-08-12 | ~23 dias |

### Recomendações

1. **Responder às issues stale** — Mesmo um comentário inicial ("investigando", "necessário mais informações") reduz a percepção de abandono.

2. **Priorizar PR #3316** — A correção de context management afeta vários usuários em produção; revisão expedited é recomendada.

3. **Estabelecer SLA de triagem** — Objetivo de primeira resposta em 7 dias para issues de severidade alta/crítica.

---

## Métricas Consolidada (Últimas 24h)

| Métrica | Valor |
|---------|-------|
| Issues abertas/ativas | 2 |
| Issues fechadas | 0 |
| PRs abertos | 3 |
| PRs merged/fechados | 0 |
| Releases | 0 |
| Taxa de atividade | Moderada |

---

*Relatório gerado automaticamente com base em dados do GitHub — github.com/sipeed/picoclaw*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-08-13

---

## 1. Panorama do Dia

O projeto IronClaw manteve um **nível de atividade elevado** em 12 de agosto, com **39 issues** e **47 PRs** atualizados nas últimas 24 horas. A equipe fechou **10 issues** e **16 PRs**, indicando forte ritmo de desenvolvimento. O destaque negativo é a **proliferação de bugs relacionados ao Telegram** (9 issues P1-P3 reportadas), sugerindo que a integração com esse canal necessita atenção imediata. A release `v1.2.0-rc.2` foi publicada ontem com correções críticas para Windows, e o pipeline de desenvolvimento avança em fronts importantes como automações estruturadas, design system e orquestração de ferramentas.

---

## 2. Lançamentos

### ironclaw-v1.2.0-rc.2
**Data:** 2026-08-12 | [Release no GitHub](https://github.com/nearai/ironclaw/releases/tag/ironclaw-v1.2.0-rc.2)

| Área | Mudança |
|------|---------|
| **Windows filesystem** | Correção: publication agora usa `atomic rename` nativo em vez de hard links, tolerando sincronizações de diretório não suportadas |
| **Secrets key** | Preservação da identidade da conta Windows para proteger a standalone secrets key |
| **Release smoke runs** | Garante isolamento correto durante validação |

**Breaking Changes:** Nenhuma. Release focada em estabilidade e correções de edge cases.

---

## 3. Progresso do Projeto

### PRs Closed/Merged Hoje (16 total)

| PR | Escopo | Impacto |
|----|--------|---------|
| [#7477](https://github.com/nearai/ironclaw/pull/7477) | channels | **Refatoração de ingress/reply/delivery** — normalização de canais na fronteira; código interno opera em estruturas neutras |
| [#7552](https://github.com/nearai/ironclaw/pull/7552) | ci | Tolerância a falhas de instalação do `sccache`; não falha CI em caso de outages |
| [#7305](https://github.com/nearai/ironclaw/pull/7305) | webui | Badge sutil para tool failures; reduz "agressividade visual" em runs recuperados |
| [#7525](https://github.com/nearai/ironclaw/pull/7525) | automations | Scheduled runs falham corretamente após exaustão de recovery |

### PRs Abertos com Maior Atividade

| PR | Escopo | Tamanho | Status |
|----|--------|---------|--------|
| [#7498](https://github.com/nearai/ironclaw/pull/7498) | Automation suggestion cards V1 | XL | Backend de cards de sugestões para home-screen |
| [#7516](https://github.com/nearai/ironclaw/pull/7516) | IronHub operator surface | XL | Interface WebUI para link de agentes |
| [#7491](https://github.com/nearai/ironclaw/pull/7491) | OMP core-tool contract | XL | Padronização de 5 ferramentas de coding: `read`, `write`, `edit`, `glob`, `grep` |
| [#7456](https://github.com/nearai/ironclaw/pull/7456) | Durable storage profile-agnostic | XL | Persistência de segurança envelope entre restarts |
| [#7464](https://github.com/nearai/ironclaw/pull/7464) | Telegram linked-device auth | XL | MTProto linked device com autenticação e ferramentas padrão |

---

## 4. Temas Quentes da Comunidade

### Issues com Mais Comentários

| Issue | Tema | Comentários | Urgência |
|-------|------|-------------|----------|
| [#7360](https://github.com/nearai/ironclaw/issues/7360) | Expandir stress coverage em built-in e durable write paths | 3 | Enhancement, epic |
| [#7407](https://github.com/nearai/ironclaw/issues/7407) | Executar `BatchPolicy::Parallel` batches **concurrentemente** | 3 | Closed ✅ |
| [#7554](https://github.com/nearai/ironclaw/issues/7554) | Custom MCP server mostra erro de validação | 1 | Bug |

**Análise:** A equipe está ativamente trabalhando na **orquestração paralela de ferramentas** (issue #7407 resolvida hoje) e na melhoria da cobertura de testes de stress. A issue de validação de MCP server (#7554) chegou ontem via Slack e requer atenção do time.

---

## 5. Bugs e Estabilidade

### Bugs P1 (Críticos)

| Issue | Descrição | Canal |
|-------|-----------|-------|
| [#7536](https://github.com/nearai/ironclaw/issues/7536) | Multi-user access quebrado — "Invalid secret" error | Todos |
| [#7535](https://github.com/nearai/ironclaw/issues/7535) | Telegram webhook não ativa após salvar configuração | Telegram |
| [#7538](https://github.com/nearai/ironclaw/issues/7538) | Telegram trava completamente ao receber GIF/sticker | Telegram |

### Bugs P2 (Altos)

| Issue | Descrição | Canal |
|-------|-----------|-------|
| [#7539](https://github.com/nearai/ironclaw/issues/7539) | Mensagens Telegram fora de ordem no WebUI | Telegram |
| [#7540](https://github.com/nearai/ironclaw/issues/7540) | Mensagens longas divididas e parcialmente perdidas | Telegram |
| [#7541](https://github.com/nearai/ironclaw/issues/7541) | Arquivos não enviados como anexo Telegram | Telegram |
| [#7542](https://github.com/nearai/ironclaw/issues/7542) | Agente não reconhece que está no Telegram | Telegram |
| [#7543](https://github.com/nearai/ironclaw/issues/7543) | Rotina executa mas mensagem não é entregue (1ª execução) | Telegram |
| [#7544](https://github.com/nearai/ironclaw/issues/7544) | Agente expõe reasoning interno ao usuário | WebUI |
| [#7545](https://github.com/nearai/ironclaw/issues/7545) | Erro ao consultar múltiplos tokens crypto | Geral |
| [#7451](https://github.com/nearai/ironclaw/issues/7451) | Agente pede credenciais incorretamente via Telegram | Telegram |
| [#7508](https://github.com/nearai/ironclaw/issues/7508) | GitHub MCP extensão com prompt confuso de verificação | Extensions |
| [#7547](https://github.com/nearai/ironclaw/issues/7547) | Instance upgrade falha no egress apply (staging) | Infra |
| [#7546](https://github.com/nearai/ironclaw/issues/7546) | Agente não reage a stickers Telegram | Telegram |

**Análise:** **9 de 11 bugs P2 são relacionados ao Telegram**, indicando necessidade urgente de QA e possibly revert/hold na feature de linked-device (#7464). O bug de multi-user (#7536) afeta diretamente a proposta de compartilhamento de instâncias.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Epics em Andamento

| Epic | Issue | Escopo |
|------|-------|--------|
| **Efficient model-directed tool orchestration** | [#7444](https://github.com/nearai/ironclaw/issues/7444) | Reduzir round trips do modelo com orquestração progressiva |
| **Storybook + AI-first Design System** | [#7038](https://github.com/nearai/ironclaw/issues/7038) | Phase 2: governance e guidelines (atualmente em #7042) |
| **Structured execution para automations** | [#7532](https://github.com/nearai/ironclaw/issues/7532) | Contratos de execução para scheduled triggers |

### Novas Features Solicitadas

| Issue | Feature | Origem |
|-------|---------|--------|
| [#7517](https://github.com/nearai/ironclaw/issues/7517) | Permitir staking path para login Google/GitHub | Cloud.near.ai |
| [#7537](https://github.com/nearai/ironclaw/issues/7537) | Controle genérico de thinking/effort por request | DeepSeek V4 Flash |
| [#7520](https://github.com/nearai/ironclaw/issues/7520) | Retirar superfícies WebUI legadas | Frontend cleanup |

**Sinais de roadmap:** O time está priorizando **estabilidade do Telegram** e **automations confiáveis**. A feature de "structured execution contracts" (#7548 em PR) sugere movimento em direção a workflows mais determinísticos.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Categoria | Problema | Impacto |
|-----------|----------|---------|
| **Telegram可靠性** | Agente trava, mensagens perdidas, fluxo fora de ordem | Alto — prejudica uso principal |
| **Multi-user** | Convite de usuários falha com "Invalid secret" | Crítico — bloqueia feature colaborativa |
| **Custom MCP** | Erro de validação impede adicionar servidor | Medium — experiência de onboarding |
| **Slack delivery** | Target não encontrado mesmo com Slack conectado | Medium — feature existente quebrada |
| **WebUI UX** | Mensagens de erro "agressivas" após recovery | Low — mas impacta percepção |

### Cenários de Uso Observados

1. **Routines via Telegram:** Usuários configuram automações para enviar summaries BTC via Telegram — primeira execução falha silenciosamente
2. **Cloud staking:** Novos usuários Google/GitHub não conseguem fazer stake para inference
3. **Files em Telegram:** Agente gera arquivo mas oferece link Markdown ao invés de anexo nativo

---

## 8. Backlog que Merece Atenção

### Issues Sem Atualização Recente (>7 dias sem activity)

| Issue | Título | Prioridade |
|-------|--------|------------|
| [#5508](https://github.com/nearai/ironclaw/issues/5508) | Slack delivery target not found | P2 (bug_bash) |
| [#6541](https://github.com/nearai/ironclaw/issues/6541) | WebUI constantly reconnecting | v1-launch-checklist |
| [#5503](https://github.com/nearai/ironclaw/pull/5503) | Google extension capabilities | XL, Experiment |

### Issues Anciãs Abertas

| Issue | Criada | Status | Notas |
|-------|--------|--------|-------|
| [#5503](https://github.com/nearai/ironclaw/pull/5503) | 2026-07-01 | Open (46 dias) | Experiment — Google extension capabilities |
| [#5508](https://github.com/nearai/ironclaw/issues/5508) | 2026-07-01 | Closed ✅ | — |
| [#6541](https://github.com/nearai/ironclaw/issues/6541) | 2026-07-23 | Open (21 dias) | WebUI reconnecting — UX importante |

### Recomendações

1. **Telegram:** Priorizar QA e potentially freeze de novas features até estabilização
2. **#6541:** "WebUI constantly reconnecting" está aberto há 21 dias sem resolução — impacta experiência v1
3. **#5503:** PR "Experiment" aberto há 46 dias precisa de decisão (close ou merge)

---

## Métricas Consolidada

| Indicador | Valor | Tendência |
|-----------|-------|-----------|
| Issues ativas (24h) | 39 | Neutra |
| PRs atualizados (24h) | 47 | Neutra |
| Taxa de fechamento (issues) | 25.6% (10/39) | Positiva |
| Taxa de merge (PRs) | 34.0% (16/47) | Positiva |
| Bugs P1 em aberto | 3 | ⚠️ Alerta |
| Bugs P2 em aberto | 9 | ⚠️ Alerta |
| Releases (7d) | 1 | Neutra |

---

*Relatório gerado em 2026-08-13 com dados de github.com/nearai/ironclaw*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do Projeto CoPaw — 2026-08-13

---

## 1. Panorama do Dia

O projeto CoPaw apresenta **alta atividade** em 13 de agosto de 2026. Nas últimas 24h, foram registradas 26 issues atualizadas (19 abertas, 7 fechadas) e 42 PRs (26 abertos, 16 merged/fechados), indicando um ritmo de desenvolvimento intenso com forte participação da comunidade. A release **v2.1.0-beta.4** foi publicada com correções de UI e documentação de ferramentas. A base de usuários continua reportando problemas críticos de estabilidade (crashes, dead loops, perda de histórico), enquanto novos contribuidores开始在向项目引入新功能和文档改进. No geral, o projeto demonstra saúde ativa, mas com áreas de atenção em confiabilidade e UX.

---

## 2. Lançamentos

### ✅ v2.1.0-beta.4 Released

**Link:** https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.1.0-beta.4

| Mudança | Autor | PR |
|---------|-------|-----|
| `fix(files):` repair previews and dark mode styling | @rayrayraykk | [#6915](https://github.com/agentscope-ai/QwenPaw/pull/6915) |
| `fix(tools):` correct read_file tool description | @AntiQuality | [#6898](https://github.com/agentscope-ai/QwenPaw/pull/6898) |
| `chore:` bump version to 2.1.0b4 | — | — |

**Análise:** Release menor com foco em correções pontuais de UI (dark mode) e precisão de documentação de ferramentas. Sem breaking changes. O prazo de verificação era 2026-08-12 16:16 UTC, conforme tracked em [#6946](https://github.com/agentscope-ai/QwenPaw/issues/6946).

**Nota:** A versão beta anterior (v2.1.0-beta.3) também teve verificação de instalação documentada em [#6914](https://github.com/agentscope-ai/QwenPaw/issues/6914).

---

## 3. Progresso do Projeto

### PRs Merged/Closed Hoje (16 total)

| PR | Descrição | Impacto |
|----|-----------|---------|
| [#6816](https://github.com/agentscope-ai/QwenPaw/pull/6816) | `fix(chats):` handle dict-like model responses | **Crítico** — Corrigiu `KeyError: '__aiter__'` que quebrava auto-titlegeneration. Root cause: `ChatResponse` herda `dict` e mapeia `__getattr__` para `__getitem__`. |
| [#6540](https://github.com/agentscope-ai/QwenPaw/pull/6540) | `fix(agents):` sanitize tool messages before model calls | **Estabilidade** — Previne orphan tool results de alcançar providers após compressão de contexto ou carregamento de estado legacy. Fixes #6407. |
| [#6937](https://github.com/agentscope-ai/QwenPaw/pull/6937) | `fix(creator):` DAG production hardening, vendor runtime bootstrap, fail-closed plugin packaging | **Infraestrutura** — Melhora pipeline de Creator, fecha gap de double billing e packaging inseguro. |
| [#6913](https://github.com/agentscope-ai/QwenPaw/pull/6913) | `fix(computer-use):` improve macOS element activation | **UX macOS** — Corrige dismissal de menus transitórios durante ativação de elementos. |
| [#6939](https://github.com/agentscope-ai/QwenPaw/pull/6939) | `fix(cli):` select prereleases from PyPI releases | **CLI** — Garante comportamento correto de `--prerelease` no update command. |
| [#6930](https://github.com/agentscope-ai/QwenPaw/pull/6930) | `fix(media):` prevent capability cache poisoning and preserve image versions | **Dados/Mídia** — Usa SHA-256 hashes ao invés de paths mutáveis; previne corruptão de imagens históricas. |
| [#6944](https://github.com/agentscope-ai/QwenPaw/pull/6944) | `chore:` update release notes for v2.1.0 | **Documentação** — Release notes atualizados. |

**Destaque técnico:** O PR [#6816](https://github.com/agentscope-ai/QwenPaw/pull/6816) representa uma correção de design fundamental no AgentScope — a herança de `dict` em `ChatResponse` causava comportamento inesperado em `hasattr()`.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (por comentários)

| Issue | Tipo | Comentários | Tema Central |
|-------|------|-------------|-------------|
| [#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921) | Bug | 5 | **Agente para após planejamento** — usuário reporta que múltiplos passos são planejados mas não executados sem input "continue". |
| [#6853](https://github.com/agentscope-ai/QwenPaw/issues/6853) | Bug | 5 | **prompts.py mente aos agentes** — documentação alega sync automático de digests para MEMORY.md, mas feature nunca foi implementada. |
| [#6928](https://github.com/agentscope-ai/QwenPaw/issues/6928) | Bug | 4 | **Histórico não scrolla + input field corruption** — dois bugs UX críticos no frontend. |
| [#6924](https://github.com/agentscope-ai/QwenPaw/issues/6924) | Question | 4 | **Custom channel plugins perderam configurator interativo** — regressão na extensibilidade. |
| [#6847](https://github.com/agentscope-ai/QwenPaw/issues/6847) | Question | 4 | **Antivírus mata QwenPaw** — possível falso positivo ou necessidade de code signing. |
| [#6826](https://github.com/agentscope-ai/QwenPaw/issues/6826) | Bug | 4 | **Tempo de resposta do assistente显示错误** — pensando 2min mas UI mostra segundos. PR [#6938](https://github.com/agentscope-ai/QwenPaw/pull/6938) em progresso. |
| [#6839](https://github.com/agentscope-ai/QwenPaw/issues/6839) | Bug | 4 | **MCP converte strings numéricas para numbers** — causa falha de validação. PR [#6936](https://github.com/agentscope-ai/QwenPaw/pull/6936) em progresso. |

### PRs com Maior Engajamento

| PR | Etiqueta | Destaque |
|----|----------|----------|
| [#6940](https://github.com/agentscope-ai/QwenPaw/pull/6940) | `first-time-contributor` | **DataPaw app runtime** — Introduz workspace nativo para análise durável via repo infra separado (QwenPaw-Data). |
| [#5869](https://github.com/agentscope-ai/QwenPaw/pull/5869) | `first-time-contributor` | **Slash command autocomplete universal** — Expõe comandos de sistema (`/new`, `/dream`, `/memorize`, etc.) em todos os UIs. |
| [#5992](https://github.com/agentscope-ai/QwenPaw/pull/5992) | — | **Per-session model overrides** — Permite LLMs diferentes por conversa sem mudar defaults globais. |
| [#6942](https://github.com/agentscope-ai/QwenPaw/pull/6942) | — | **Simplifica long-term memory guidance** — Remove exposição desnecessária de `MEMORY.md` e internals do Dream para agentes. Closes #6853. |

### Análise de Demandas

1. **Confiabilidade de Multi-Step Tasks (#6921, #6927):** Usuários reportam dead loops e pausas inexplicáveis em tarefas complexas com múltiplos agentes. Isso sugere necessidade de melhor error handling e recovery.

2. **UX/UI Frágil:** Problemas de scroll (#6928, #6951), timezone (#6948), e display de tempo (#6826) indicam dívida técnica no frontend.

3. **Extensibilidade (#6924, #6943):** A comunidade quer de volta configuradores interativos para plugins customizados — sinal de que o ecossistema de plugins está crescendo.

---

## 5. Bugs e Estabilidade

### Por Severidade

#### 🔴 Crítico (Impacto em Produção)

| Issue | Descrição | Status | Link |
|-------|-----------|--------|------|
| #6919 | **Crashes frequentes** — `console process/reply failed` com `channel.py:497` | Closed | [#6919](https://github.com/agentscope-ai/QwenPaw/issues/6919) |
| #6916 | **[SECURITY] Plugins podem criar cron jobs e injetar mensagens sem aprovação** | Open | [#6916](https://github.com/agentscope-ai/QwenPaw/issues/6916) |
| #6932 | **Sem recovery após network interruption** — `httpx.ConnectTimeout` persistente após restauração de rede | Open | [#6932](https://github.com/agentscope-ai/QwenPaw/issues/6932) |
| #6927 | **Dead loops com múltiplos sub-agents** | Open | [#6927](https://github.com/agentscope-ai/QwenPaw/issues/6927) |

#### 🟠 Alto (Funcionalidade Quebrada)

| Issue | Descrição | Status | Link |
|-------|-----------|--------|------|
| #6921 | Agente para após planejamento multi-step | Open | [#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921) |
| #6826 | Tempo de resposta do assistente显示错误 | Open (PR [#6938](https://github.com/agentscope-ai/QwenPaw/pull/6938) aberto) | [#6826](https://github.com/agentscope-ai/QwenPaw/issues/6826) |
| #6839 | MCP tool args convertendo strings para números | Open (PR [#6936](https://github.com/agentscope-ai/QwenPaw/pull/6936) aberto) | [#6839](https://github.com/agentscope-ai/QwenPaw/issues/6839) |
| #6926 | **sync.py orphaning 18-50% das rows de history** — usa session_id errado | Closed | [#6926](https://github.com/agentscope-ai/QwenPaw/issues/6926) |
| #6813 | **KeyError em title generation** — `consume_model_response` falhando | Closed (PR [#6816](https://github.com/agentscope-ai/QwenPaw/pull/6816)) | [#6813](https://github.com/agentscope-ai/QwenPaw/issues/6813) |

#### 🟡 Médio (Degradação Parcial)

| Issue | Descrição | Link |
|-------|-----------|------|
| #6928 | Histórico não scrolla + input field corruption | [#6928](https://github.com/agentscope-ai/QwenPaw/issues/6928) |
| #6951 | Scroll compression oculta mensagens anteriores | [#6951](https://github.com/agentscope-ai/QwenPaw/issues/6951) |
| #6883 | Notas em subfolders agrupadas sob data errada no Diary | [#6883](https://github.com/agentscope-ai/QwenPaw/issues/6883) |
| #6948 | Admin console mostra UTC ao invés de timezone configurado | [#6948](https://github.com/agentscope-ai/QwenPaw/issues/6948) |
| #6872 | Legacy sessions com mídia local falham ao carregar | [#6872](https://github.com/agentscope-ai/QwenPaw/issues/6872) |

### Análise de Estabilidade

**Problemas resolvidos hoje:**
- ✅ KeyError em title generation (#6813 → PR #6816)
- ✅ Orphaning de history rows (#6926)
- ✅ Crashes frequentes (#6919)
- ✅ Legacy media loading (#6872)

**Problemas críticos ainda abertos:**
- ⚠️ Security gap em plugins (#6916)
- ⚠️ Network recovery failure (#6932)
- ⚠️ Dead loops em multi-agent (#6927, #6921)

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| Issue | Descrição | Sinais de Roadmap |
|-------|-----------|-------------------|
| [#6917](https://github.com/agentscope-ai/QwenPaw/issues/6917) | **Agent inbox** — Capacidade de agents enviarem relatórios/mensagens para uma inbox fixa com unread indicators | Integração mais profunda agent→user communication |
| [#6925](https://github.com/agentscope-ai/QwenPaw/issues/6925) | **Multi-agent collaboration em uma janela** — Eliminar criação de múltiplas sessões ao colaborar | Melhor UX para workflows multi-agent |
| [#6929](https://github.com/agentscope-ai/QwenPaw/issues/6929) | **Folder-based conversations** — Trabalhar com pastas como base de contexto, similar a Codex/Trae | Integração tighter com workspace filesystem |
| [#6923](https://github.com/agentscope-ai/QwenPaw/issues/6923) | **LongHorizon-Harness integration** — Sugestão de usar AMAP-ML/LongHorizon-Harness para evitar state drift em tarefas longas | Foco em reliability de long-horizon tasks |

### PRs de Features em Progresso

| PR | Descrição | Etapa |
|----|-----------|-------|
| [#6940](https://github.com/agentscope-ai/QwenPaw/pull/6940) | **DataPaw app runtime** — Workspace nativo para análise de dados durável | `first-time-contributor` |
| [#5992](https://github.com/agentscope-ai/QwenPaw/pull/5992) | **Per-session model overrides** — Different LLMs per conversation | Under Review |
| [#5869](https://github.com/agentscope-ai/QwenPaw/pull/5869) | **Universal slash command autocomplete** — Comandos em todos os UIs | Under Review |
| [#6943

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório de Projeto — ZeroClaw
## Data: 13 de agosto de 2026

---

## 1. Panorama do Dia

ZeroClaw mantém **atividade intensa** com 50 issues e 50 PRs atualizados nas últimas 24h, indicando alta movimentação no repositório. O projeto apresenta **três bugs P1 críticos abertos** — falhas de 74 testes em Windows, output binário corrompido em `web_fetch`, e vulnerabilidade de validação WebAuthn — que demandam atenção imediata. A comunidade demonstra maturidade com 20 PRs em revisão simultânea, incluindo contribuições de contributors distinguidos como Audacity88, vrurg e JordanTheJet. **Sem novos lançamentos**, o foco está em estabilização e correções de segurança para a linha v0.8.x.

---

## 2. Lançamentos

**Nenhuma release została wydana nas últimas 24 horas.**

O projeto está em ritmo de estabilização pré-release, conforme evidenciado pelo PR [#9913](https://github.com/zeroclaw-labs/zeroclaw/pull/9913) que preserva a compatibilidade de injeção de skills através da v0.8.x, sugerindo preparação para v0.8.4.

---

## 3. Progresso do Projeto

### PRs Recentes Importantes

| PR | Título | Status | Tamanho | Contribuidor |
|----|--------|--------|---------|--------------|
| [#9913](https://github.com/zeroclaw-labs/zeroclaw/pull/9913) | fix(skills): preserve full injection default through v0.8.x | **OPEN** | S | Audacity88 |
| [#9781](https://github.com/zeroclaw-labs/zeroclaw/pull/9781) | fix(runtime): validate WebAuthn assertion data | **OPEN** | M | Audacity88 |
| [#9865](https://github.com/zeroclaw-labs/zeroclaw/pull/9865) | fix(deps): update event-listener for RUSTSEC-2026-0221 | **CLOSED** | XS | Audacity88 |
| [#9808](https://github.com/zeroclaw-labs/zeroclaw/pull/9808) | chore(deps): bump rust-all group (46 updates) | **OPEN** | L | dependabot[bot] |

### Principais Avanços

- **Segurança**: PR [#9781](https://github.com/zeroclaw-labs/zeroclaw/pull/9781) implementa validação de assertions WebAuthn, rejeitando dados com header menor que 37 bytes e vinculando ao RP ID configurado — correção crítica para autenticação.
- **Dependências**: PR [#9865](https://github.com/zeroclaw-labs/zeroclaw/pull/9865) fechou com sucesso a atualização do `event-listener` para corrigir RUSTSEC-2026-0221.
- **Estabilidade CLI**: PR [#9481](https://github.com/zeroclaw-labs/zeroclaw/pull/9481) suprime narração não-interativa em agents, melhorando experiência em daemon-owned runs.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| Issue | Título | Comentários | Prioridade | Área |
|-------|--------|-------------|------------|------|
| [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) | 74 test failures on Windows | 14 | P1 | CI/Tooling |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | Maintainer decision queue for RFCs | 13 | P2 | Architecture |
| [#8832](https://github.com/zeroclaw-labs/zeroclaw/issues/8832) | Plugin-owned Kanban board for agent work | 9 | P2 | Agent/Gateway |
| [#9101](https://github.com/zeroclaw-labs/zeroclaw/issues/9101) | Consolidate release attestation mechanisms | 9 | P1 | Security/CI |

### Análise de Demandas

**CI/CD Multiplataforma**: Issue [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) destaca 74 testes falhando em Windows por comandos Unix-only e path semantics — demanda antiga que agora recebe atenção prioritária com risco alto.

**Arquitetura de Agentes**: Issue [#8832](https://github.com/zeroclaw-labs/zeroclaw/issues/8832) propõe Kanban board pluginizado para coordenação de trabalho de agentes, indicando direção estratégica para automação.

**Proveniência de Releases**: Issue [#9101](https://github.com/zeroclaw-labs/zeroclaw/issues/9101) busca consolidar 3 mecanismos paralelos de assinatura (cosign, GitHub attestations, SLSA) em um fluxo unificado.

---

## 5. Bugs e Estabilidade

### Bugs P1 — Críticos (workflow bloqueado)

| Issue | Título | Severidade | Status |
|-------|--------|------------|--------|
| [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) | 74 test failures on Windows | S2 - degraded | accepted |
| [#9207](https://github.com/zeroclaw-labs/zeroclaw/issues/9207) | web_fetch returns garbage for compressed responses | S1 - blocked | in-progress |
| [#7527](https://github.com/zeroclaw-labs/zeroclaw/issues/7527) | macOS desktop app reopens blank | S1 - blocked | needs-author-action |
| [#9290](https://github.com/zeroclaw-labs/zeroclaw/issues/9290) | Windows installer fails with missing TaskDialogIndirect | S1 - blocked | accepted |
| [#9340](https://github.com/zeroclaw-labs/zeroclaw/issues/9340) | CLI cron jobs cannot deliver output | S1 - blocked | in-progress **(CLOSED)** |

### Bugs P2 — Impacto Médio

| Issue | Título | Severidade | Canal |
|-------|--------|------------|-------|
| [#9198](https://github.com/zeroclaw-labs/zeroclaw/issues/9198) | Discord typing indicator stuck after reload | S3 - minor | Discord |
| [#9202](https://github.com/zeroclaw-labs/zeroclaw/issues/9202) | zeroclaw desktop uses dead download URL | S3 - minor | Linux |

**Destaque Positivo**: Issue [#9340](https://github.com/zeroclaw-labs/zeroclaw/issues/9340) foi fechada — cron jobs criados via CLI agora terão delivery configurado corretamente.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features P1/P2 em Destaque

| Issue | Título | Complexidade | Área |
|-------|--------|---------------|------|
| [#9101](https://github.com/zeroclaw-labs/zeroclaw/issues/9101) | Consolidate release attestation | M | Security |
| [#5316](https://github.com/zeroclaw-labs/zeroclaw/issues/5316) | SearXNG + CAPTCHA detection for web search | P2 | Tool/Web |
| [#6998](https://github.com/zeroclaw-labs/zeroclaw/issues/6998) | Schema-validated memory consolidation | P2 | Memory |
| [#5907](https://github.com/zeroclaw-labs/zeroclaw/issues/5907) | Opt-in LSP support for ZeroCode | P2 | Tool |
| [#8078](https://github.com/zeroclaw-labs/zeroclaw/issues/8078) | RFC: zerocode local pre-submission gate | P2 | CI |

### Sinais de Roadmap

1. **Suporte a LSP** ([#5907](https://github.com/zeroclaw-labs/zeroclaw/issues/5907)): Busca reduzir alucinações em código gerado por agentes locais.
2. **Consolidação de Memória** ([#6998](https://github.com/zeroclaw-labs/zeroclaw/issues/6998)): Aborda fragilidade na consolidação JSON com fallback boundado.
3. **Pre-submission Gate** ([#8078](https://github.com/zeroclaw-labs/zeroclaw/issues/8078)): RFC ambicioso para validar contributions localmente antes de abrir PRs.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Categoria | Descrição | Impacto |
|-----------|-----------|---------|
| **Multiplataforma** | 74 testes falhando em Windows 11 (Simplified Chinese, CP 936) | Alto |
| **Desktop** | App macOS abre em branco ou sem janela após reinicialização | Alto |
| **Cron Jobs** | CLI cron jobs descartam output silenciosamente | Alto |
| **Web Fetch** | Dados binários corrompidos de responses comprimidos (gzip/brotli) | Alto |
| **Discord** | Indicador "typing" fica preso após reload do daemon | Médio |

### Cenários de Uso em Destaque

- **Colaboração em Grupo**: Issue [#9772](https://github.com/zeroclaw-labs/zeroclaw/pull/9772) aborda Telegram group sessions onde múltiplos usuários colaboram com o bot simultaneamente.
- **Provider Fallbacks**: PR [#9544](https://github.com/zeroclaw-labs/zeroclaw/pull/9544) garante que delegates honram roteamento configurado de providers.

---

## 8. Backlog que Merece Atenção

### Issues Sem Atribuição ou Bloqueadas

| Issue | Título | Criação | Comentários | Bloqueio |
|-------|--------|---------|-------------|----------|
| [#9899](https://github.com/zeroclaw-labs/zeroclaw/issues/9899) | triage RUSTSEC-2026-0247 (bitmaps unmaintained) | 2026-08-10 | 3 | **BLOCKED** |
| [#8367](https://github.com/zeroclaw-labs/zeroclaw/issues/8367) | Derived capability readiness | 2026-06-26 | 4 | BLOCKED |
| [#9511](https://github.com/zeroclaw-labs/zeroclaw/issues/9511) | Surface Semgrep as PR comment | 2026-07-28 | 2 | BLOCKED |
| [#6653](https://github.com/zeroclaw-labs/zeroclaw/issues/6653) | Host-architecture policy for emulated installs | 2026-05-14 | 7 | needs-author-action |
| [#9945](https://github.com/zeroclaw-labs/zeroclaw/issues/9945) | browser tool exposes only 16 of 100+ commands | 2026-08-12 | 2 | needs-maintainer-review |

### Ação Recomendada

1. **Crítico**: Atribuir owner para [#9899](https://github.com/zeroclaw-labs/zeroclaw/issues/9899) — advisory RUSTSEC pendente.
2. **Médio**: Resolver блokeios em [#8367](https://github.com/zeroclaw-labs/zeroclaw/issues/8367) e [#9511](https://github.com/zeroclaw-labs/zeroclaw/issues/9511) para desbloquear features de arquitetura.
3. **Monitorar**: Issue [#6653](https://github.com/zeroclaw-labs/zeroclaw/issues/6653) aberta há 3 meses sem resposta do autor.

---

## Métricas Consolidada (24h)

| Métrica | Valor |
|---------|-------|
| Issues abertas/ativas | 47 |
| Issues fechadas | 3 |
| PRs abertos | 41 |
| PRs merged/fechados | 9 |
| Bugs P1 críticos | 5 |
| Novas releases | 0 |
| Contributors ativos | ~15+ |

---

*Relatório gerado automaticamente com base em dados do GitHub de 2026-08-13.*

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*