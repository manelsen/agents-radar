# Resumo diário do ecossistema de agentes de IA 2026-08-30

> Issues: 0 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-08-29 22:12 UTC

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

# Relatório Comparativo do Ecossistema de Agentes de IA Open Source

**Data de referência:** 2026-08-30

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source demonstra maturização acelerada em 2026, com projetos consolidando suas bases de usuários enquanto enfrentam desafios compartilhados de escalabilidade e estabilidade. **ZeroClaw** e **Hermes Agent** lideram em volume de atividade, cada um processando ~50 atualizações em 24h, mas com philosophies distintas — ZeroClaw em estabilização pré-release e Hermes em alta rotatividade de issues. **NanoBot**, **IronClaw** e **CoPaw** apresentam trajetórias saudáveis de estabilização, enquanto **PicoClaw** se destaca em resiliência de canais com bug fixes críticos. O silêncio de **NullClaw** sugere，要么 projeto dormente ou em transição estratégica. O padrão emergente é a convergência para multi-provider, lifecycle hooks e otimização de contexto — problemas que toda a indústria está tentando resolver.

---

## 2. Comparação de Atividade

| Projeto | Issues Ativas | PRs Atualizados | PRs Merged/Closed | Releases (24h) | Saúde Geral |
|---------|---------------|-----------------|-------------------|----------------|------------|
| **ZeroClaw** | 20 | 50 | ~6 | 0 | 🟢 Estável (pre-release) |
| **Hermes Agent** | 47 | 50 | 2 PRs + 3 issues | 0 | 🟡 Backlog elevado |
| **NanoBot** | 2 | 11 | 5 | 0 | 🟢 Consolidando |
| **IronClaw** | 7 | 13 | 4 | 0 | 🟢 Otimização activa |
| **CoPaw** | 8 | 7 | 0 | 0 (beta em curso) | 🟡 Beta v2.2.0 |
| **PicoClaw** | 1 | 4 | 3 | 0 | 🟢 Bug fixes críticos |
| **NullClaw** | — | 0 | 0 | 0 | 🔴 Dormente |

**Observações críticas:**
- Hermes Agent apresenta **6% de taxa de resolução** de issues (3/50), indicando gargalo em review/triage
- PicoClaw lidera em eficiência de delivery com **75% dos PRs merged** (3/4)
- NanoBot demonstra disciplina de estabilização com foco em polish e não em features

---

## 3. Posicionamento do Projeto Principal

*Considerando os projetos ativos, **ZeroClaw** emerge como referência técnica pela profundidade de integrações e arquitetura.*

### Vantagens Comparativas

| Dimensão | ZeroClaw | Hermes | NanoBot | IronClaw |
|----------|----------|--------|---------|----------|
| **Extensibilidade** | A2A, VoiceHost, Gemini Live | Skills Hub, MCP | Multi-provider OAuth | Hooks lifecycle |
| **Segurança** | Sandbox granular, chacha20 fixes | Profile isolation | Rate-limiting | Encoded output gates |
| **Performance** | OpenRouter streaming | — | CLI streaming | Context projection |
| **Multi-canal** | Bluesky, Reddit, Telegram, Mattermost | Desktop, Telegram | WebUI, CLI | GitHub tools |
| **Comunidade** | 50 PRs/dia, alta engajamento RFC | 119 comments em issue stale | 4 autores ativos | 2 contribuidores-chave |

### Diferenças Técnicas Arquiteturais

- **ZeroClaw**: Orientado a protocolo (A2A), cryptography-first, Rust-based TUI
- **Hermes Agent**: Desktop-first, Electron-based, Cron jobs centralizados
- **NanoBot**: CLI-first com WebUI complementar, Python, agente nativo
- **IronClaw**: Extensible hooks, benchmarking-driven (PinchBench), Python/Go hybrid
- **CoPaw**: Multi-tenant Hub, Qwen-centric, ACP architecture

---

## 4. Focos Técnicos Compartilhados

### 4.1 Resiliência de Loop de Agent

| Projeto | Problema | Status |
|---------|----------|--------|
| PicoClaw | Loop infinito de `editMessageText` (+228k chamadas) | 🔴 Aberto |
| IronClaw | 593 tool calls em 70min sem terminação | 🔴 PR #7977 em revisão |
| Hermes | Falhas silenciosas Desktop em Linux | 🔴 P1 #51327 |
| NanoBot | Rate-limit state leak em sessões one-shot | 🟡 PR #5594 aberto |

**Padrão:** A ausência de circuit breakers e watchdog mechanisms é ubíqua.

### 4.2 Otimização de Contexto/Tokens

| Projeto | Problema | Impacto |
|---------|----------|---------|
| IronClaw | 4x aumento de custo ($2.52 → $10.31) | 227.7M vs 55.1M tokens |
| Hermes | Sempre excede context limits, crashes | P1 #57275 |
| NanoBot | Session compaction ownership | PR #5568 arquitetural |
| ZeroClaw | Schema validators recompilam | Performance P2 |

### 4.3 Segurança de Credenciais

- **ZeroClaw**: API key ElevenLabs exposta (S2, fix em #10433), chacha20 yanked (CI failure)
- **CoPaw**: CredentialNotFoundError em MCP legacy (#7301)
- **NanoBot**: OAuth catalog discovery para Grok/Codex/Copilot

### 4.4 Multi-Provider e Integrações

Todos os projetos investem em suporte multi-provider:
- **NanoBot**: OpenAI Codex, xAI Grok, GitHub Copilot
- **ZeroClaw**: AnySearch, Gemini, ElevenLabs, Bluesky
- **Hermes**: MiniMax M3, WorkBuddy, Kiro-ACP
- **CoPaw**: Ark API, DingTalk, PowerContext

---

## 5. Análise de Diferenciação

### 5.1 Por Público-Alvo

| Projeto | Público Primário | Indicação |
|---------|-----------------|-----------|
| **ZeroClaw** | DevOps/Enterprise | A2A, sandbox, multi-tenant |
| **Hermes Agent** | Usuários Desktop Linux/Mac | Desktop launcher, profiles |
| **NanoBot** | Desenvolvedores CLI | Terminal-first, streaming |
| **IronClaw** | Agências/Automação | GitHub tools, hooks |
| **CoPaw** | Corporativo Chinês | DingTalk, Ark API, Hub |
| **PicoClaw** | Bots multi-canal | Telegram, QQ, MCP |

### 5.2 Por Arquitetura

| Abordagem | Projetos | Exemplos |
|-----------|----------|----------|
| **Agent-first** | NanoBot, IronClaw | Foco em core loop, tools |
| **Platform-first** | ZeroClaw, Hermes | Channels, providers, gateway |
| **Desktop-first** | Hermes Agent | Electron, profiles |
| **CLI-first** | NanoBot, PicoClaw | Terminal experience |

### 5.3 Por Estágio de Maturidade

```
ZeroClaw     ████████████████░░░░  v0.8.5 (estabilização)
Hermes       ██████████████░░░░░░  variável (backlog alto)
NanoBot      ██████████░░░░░░░░░░  maturando (consolidação)
IronClaw     █████████░░░░░░░░░░░  otimização (benchmark-driven)
CoPaw        ████████████░░░░░░░░  beta (v2.2.0-beta.3)
PicoClaw     █████████░░░░░░░░░░░  estável (critical fixes)
NullClaw     ░░░░░░░░░░░░░░░░░░░  dormente
```

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração

| Projeto | Autores Ativos | PRs/dia | Issues/dia | Eficiência |
|---------|----------------|---------|------------|------------|
| **ZeroClaw** | 2+ (Audacity88, JordanTheJet) | ~6 merged | 20 | Alta |
| **Hermes Agent** | 4+ | 2 merged | 3 closed | **Baixa (4%)** |
| **NanoBot** | 5 (Re-bin dominant) | 5 merged | 2 | Alta |
| **IronClaw** | 2 (henrypark133, serrrfirat) | 4 merged | 7 | Alta |
| **CoPaw** | 3+ (AaronZ345, shadowabi) | 0 merged | 2 closed | Média |
| **PicoClaw** | ? | 3 merged | 1 | **Alta (75%)** |

### 6.2 Qualidade de Manutenção

| Indicador | ZeroClaw | Hermes | NanoBot | IronClaw |
|-----------|----------|--------|---------|----------|
| Backlog antigo (>7d) | Moderado (RFCs travados) | **Alto** (119 comments) | Baixo | Moderado |
| Bugs críticos abertos | 2 P1 | 3 P1 | 0 | 0 P1 |
| Release cadence | Semanal (v0.8.5) | Nenhuma (24h) | Nenhuma (consolidação) | Nenhuma |
| CI/CD health | Alertas chacha20 | Desconhecido | Saudável | Saudável |

### 6.3 Sinais de Maturidade

**Consolidando qualidade:**
- **NanoBot**: Foco em polish (WebUI, CLI streaming, documentation)
- **PicoClaw**: Critical bug fix merged em 24h, feature PR de i18n
- **IronClaw**: Benchmarking rigoroso (PinchBench), gates de segurança

**Iterando rapidamente:**
- **ZeroClaw**: 50 PRs/dia, múltiplos XL PRs em revisão
- **Hermes Agent**: Volume massivo, mas baixa resolução

---

## 7. Sinais de Tendência

### 7.1 Tendências de Produto

| Tendência | Evidência | Projetos |
|-----------|-----------|----------|
| **Multi-tenant/Hub** | QwenPaw Hub, ZeroClaw scoped telemetry | CoPaw, ZeroClaw |
| **A2A Protocol** | 7 👍 no tracker, Linux Foundation | ZeroClaw |
| **Voice/Speech** | VoiceHost, Gemini s2s, RealtimeVoiceProvider | ZeroClaw, Hermes, NanoBot |
| **Accessibility** | VoiceOver users issue (14 comments) | Hermes |
| **Memory persistente** | 7 itens em tracker, PowerContext backend | ZeroClaw, CoPaw |

### 7.2 Tendências Técnicas

| Área | Sinal | Implicação |
|------|-------|------------|
| **Context optimization** | 4x custo tokens em benchmark | Necessidade urgente de compaction |
| **Circuit breakers** | Loop infinito em 3 projetos | Padrão arsitektur必需 |
| **Multi-provider OAuth** | Grok/Codex/Copilot discovery | Commoditização de LLMs |
| **Sandbox granular** | RFC ativa com 16 comments | Segurança como feature |
| **Tool result referencing** | Issue P1 em IronClaw | Eliminar payload re-emission |

### 7.3 Tendências de Mercado

1. **Agent-to-Agent (A2A)**: Protocolo de interoperabilidade emerge como prioridade estratégica
2. **Enterprise-ready**: Multi-tenant, profiles, admin controls em todos os roadmaps
3. **Platform vs Agent**: Convergência para plataformas multi-canal vs agentes focados
4. **Benchmark-driven**: IronClaw normaliza medição de custo/performance como qualidade de engineering
5. **Accessibility**: Demanda real de usuários com deficiência em Herme's VoiceOver issue demonstra mercado inexplorado

---

## 8. Recomendações para Decisores

| Audiência | Recomendação |
|-----------|--------------|
| **Desenvolvedores** | Adotar IronClaw ou NanoBot para projetos novos — ambos com boa documentação e comunidade ativa. Evitar Hermes para produção devido a backlog de estabilidade. |
| **Empresas** | Avaliar ZeroClaw para integração enterprise (A2A, sandbox, multi-tenant). CoPaw para ecossistema Chinês (DingTalk, Ark). |
| **Contribuidores** | Priorizar PRs de circuit breakers e watchdog — necessidade ubíqua, alto impacto. Issues de accessibility representam oportunidade de diferenciação. |
| **Pesquisadores** | Acompanhar IronClaw (PinchBench), ZeroClaw (A2A RFC), Hermes (RealtimeVoiceProvider) como indicadores de direção técnica da indústria. |

---

*Relatório gerado em 2026-08-30. Dados agregados de 7 projetos do ecossistema open source de agentes de IA.*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório de Projeto: NanoBot — 30 de agosto de 2026

---

## 1. Panorama do dia

O ecossistema NanoBot apresenta **alta atividade de desenvolvimento** nesta data, com 11 PRs atualizados e 2 issues abertas nas últimas 24h. A equipe concentrou esforços na estabilização do sistema, com 5 PRs merged/fechados abordando correções em WebUI, CLI, ferramentas de agente e provedoras de modelo. Não houve lançamentos de nova versão, indicando um período de consolidação pré-release. O volume de PRs e a natureza das correções —涵盖 desde gerenciamento de sessões rate-limit até recuperação de erros em fluxos de streaming— sugerem maturidade crescente do projeto com foco em robustez operacional.

---

## 2. Lançamentos

### Sem releases nas últimas 24h

Nenhuma nova versão foi publicada. O último release disponível permanece como referência.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados (5 total)

| PR | Autor | Área | Resumo |
|-----|-------|------|--------|
| [#5599](https://github.com/HKUDS/nanobot/pull/5599) | Re-bin | CLI | Correção para streaming de logs do gateway no launcher WebUI — espelha novas linhas de log no terminal durante execução de `nanobot webui`, com recuperação segura para arquivos ausentes ou truncados |
| [#5596](https://github.com/HKUDS/nanobot/pull/5596) | Re-bin | Providers | Descoberta online de catálogos de modelos OAuth (OpenAI Codex, xAI Grok, GitHub Copilot) — torna Grok 4.6 o default com fallbacks para cenários offline |
| [#5595](https://github.com/HKUDS/nanobot/pull/5595) | Re-bin | WebUI | Oculta contadores de instalação do SkillHub — elimina metadados redundantes de "0 installs" que degradavam a experiência visual |
| [#5591](https://github.com/HKUDS/nanobot/pull/5591) | Re-bin | WebUI | Preserva grupos de painéis nomeados — corrige dissolução indevida de grupos ao deletar painéis, preservando títulos customizados |
| [#5560](https://github.com/HKUDS/nanobot/pull/5560) | Re-bin | CLI | Transforma `nanobot` no comando agent default — unifica entrada raiz com opções diretas (`-m`, `--workspace`, `--session`, etc.) sem duplicação de definições |

**Avanços-chave:**
- Experiência CLI melhorada com streaming de logs e comandos simplificados
- Integração mais robusta com provedores OAuth
- WebUI mais polida com gerenciamento correto de UI state

---

## 4. Temas Quentes da Comunidade

### Issue em destaque

**[#5592](https://github.com/HKUDS/nanobot/issues/5592) — edit_file: documentação não menciona exclusividade mútua dos seletores** (Bug/Documentação)
- **Autor:** 22373448
- **Situação:** Aberta desde 2026-08-29, sem comentários
- **Análise:** A documentação atual lista parâmetros (`occurrence`, `line_hint`, `replace_all`, `expected_replacements`) como disponíveis, mas não deixa claro que são mutuamente exclusivos. Isso causa mal-entendidos na utilização da ferramenta `edit_file` em [`nanobot/agent/tools/filesystem.py:906`](https://github.com/HKUDS/nanobot/blob/main/nanobot/agent/tools/filesystem.py#L906).
- **Relevância:** Baixa criticidade, mas impacta DX (Developer Experience) para novos contribuidores

---

## 5. Bugs e Estabilidade

### Issues Abertas (2)

| # | Título | Severidade | Área | Link |
|---|--------|------------|------|------|
| #5593 | Session message rate-limit state mantém sessões one-shot expiradas | 🔴 Alta | Agent | [#5593](https://github.com/HKUDS/nanobot/issues/5593) |

**Detalhamento #5593:**
O `SendSessionMessageTool` mantém um deque de timestamps por sessão fonte em `_sent_at`. Timestamps expirados só são removidos quando a mesma fonte envia novamente, causando vazamento de estado em sessões one-shot. Um PR companion ([#5594](https://github.com/HKUDS/nanobot/pull/5594)) já está aberto para correção.

| # | Título | Severidade | Área | Link |
|---|--------|------------|------|------|
| #5592 | edit_file documentation does not state that match selectors are mutually exclusive | 🟡 Média | Documentação | [#5592](https://github.com/HKUDS/nanobot/issues/5592) |

### PRs de Correção em Aberto (3)

| # | Título | Severidade | Área | Link |
|---|--------|------------|------|------|
| #5600 | close native reasoning on cancellation | 🔴 Alta | Agent | [#5600](https://github.com/HKUDS/nanobot/pull/5600) |
| #5594 | bound session message rate-limit state | 🔴 Alta | Agent | [#5594](https://github.com/HKUDS/nanobot/pull/5594) |
| #5597 | deliver provider retry waits as progress | 🟡 Média | Channels | [#5597](https://github.com/HKUDS/nanobot/pull/5597) |

**Detalhamento #5600:**
Quando uma requisição streaming é cancelada após início do native reasoning, `_request_model` sai por `CancelledError` antes da cleanup normal. O cliente recebe output de reasoning mas nunca recebe `reasoning_end`.

**Detalhamento #5597:**
`ChannelManager` descarta todos os `RetryWaitEvent` quando progress reporting está desabilitado, causando perda de informação de retry mesmo em caminhos opt-out.

### PR de Correção Fechado

| # | Título | Área | Link |
|---|--------|------|------|
| #5601 | roll back rejected message side effects | WebUI | [#5601](https://github.com/HKUDS/nanobot/pull/5601) |

Corrige mensagens WebUI rejeitadas que deixavam attachments salvos e subscriptions WebSocket órfãs, causando arquivos de mídia sem referência e conexões revogadas recebendo eventos.

---

## 6. Pedidos de Features e Sinais de Roadmap

### PRs Abertos com Características de Feature

| # | Título | Escopo | Link |
|---|--------|--------|------|
| #5568 | let runner own context compaction | Agent/Core | [#5568](https://github.com/HKUDS/nanobot/pull/5568) |

**Análise #5568:** Refatoração significativa que transfere ownership de request fitting para `AgentRunner`, executando consolidação de sessão antes de cada chamada de provider. Esta mudança permite que o Runner imponha tetos de input locais mesmo com compactação nativa do provider, habilitando futuras otimizações de context window.

### Melhorias de Documentação

| # | Título | Link |
|---|--------|------|
| #5598 | clarify edit_file selector exclusivity | [#5598](https://github.com/HKUDS/nanobot/pull/5598) |

Estado de `occurrence`, `line_hint` e `replace_all=true` como mutuamente exclusivos, alinhando documentação com validação runtime.

---

## 7. Resumo de Feedback dos Usuários

### Sinais Extraídos dos PRs e Issues

**Dores Identificadas:**

1. **Orphaned state em WebUI:** Usuários reportaram que rejeições de mensagem deixavam آثار جانبية (efeitos colaterais) como arquivos de mídia e subscriptions WebSocket órfãs. Problema resolvido em [#5601](https://github.com/HKUDS/nanobot/pull/5601).

2. **UX degradada por metadados vazios:** SkillHub retornava campo `installs` mesmo com dados esparsos, gerando "0 installs" repetitivo. Corrigido em [#5595](https://github.com/HKUDS/nanobot/pull/5595).

3. **Confusão com edit_file:** Desenvolvedores não conseguem entender quais parâmetros são compatíveis entre si na ferramenta de edição, levando a erros de uso. Endereçado em [#5598](https://github.com/HKUDS/nanobot/pull/5598) e [#5592](https://github.com/HKUDS/nanobot/issues/5592).

4. **Perda de títulos customizados:** Ao deletar painéis, grupos nomeados eram dissolvidos indevidamente, perdendo títulos definidos pelo usuário. Resolvido em [#5591](https://github.com/HKUDS/nanobot/pull/5591).

### Cenários de Uso Observados

- **Desenvolvimento CLI-first:** Ações em [#5560](https://github.com/HKUDS/nanobot/pull/5560) e [#5599](https://github.com/HKUDS/nanobot/pull/5599) indicam foco em experiência terminal nativa
- **Multi-provider:** Integração com OpenAI Codex, xAI Grok e GitHub Copilot maturing em [#5596](https://github.com/HKUDS/nanobot/pull/5596)
- **Operações de longo prazo:** Issues de rate-limiting e state management indicam uso em ambientes de produção com sessões persistentes

---

## 8. Backlog que Merece Atenção

### PRs em Aberto há >48h sem Activity Recente

| # | Título | Criado | Última Atualização | Link |
|---|--------|--------|---------------------|------|
| #5568 | let runner own context compaction | 2026-08-27 | 2026-08-29 | [#5568](https://github.com/HKUDS/nanobot/pull/5568) |

**Recomendação:** Este PR representa uma mudança arquitetural significativa que merece review prioritário. A transferência de ownership de context compaction para `AgentRunner` é foundational para futuras otimizações de performance.

### Issues sem Resposta

| # | Título | Criado | Comentários | Link |
|---|--------|--------|-------------|------|
| #5593 | Session message rate-limit state | 2026-08-29 | 0 | [#5593](https://github.com/HKUDS/nanobot/issues/5593) |
| #5592 | edit_file documentation | 2026-08-29 | 0 | [#5592](https://github.com/HKUDS/nanobot/issues/5592) |

Ambas têm PRs companions abertos, mas confirmação de triagem pela maintainer team aceleraria resolução.

---

## Métricas Resumidas

| Indicador | Valor |
|-----------|-------|
| Issues abertas/ativas | 2 |
| PRs abertos | 6 |
| PRs merged/fechados (24h) | 5 |
| Releases | 0 |
| Autores ativos | 4 (KDB-Wind, Re-bin, dajiaohuang, yu-xin-c, chengyongru) |

---

**Saúde Geral:** O projeto mantém trajetória positiva com foco em stabilização e polish. A ausência de releases indica preparação para marco futuro. Atenção recomendada para os PRs #5568 e #5600 que tratam de problemas de integridade de streaming e arquitetura de contexto.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-08-30

## 1. Panorama do Dia

O Hermes Agent mantém um nível de atividade muito intenso, com 50 issues e 50 PRs atualizados nas últimas 24h, porém **nenhuma release foi publicada** no período. O projeto apresenta um volume significativo de issues abertas (47 ativas) e uma taxa de merged/fechadas baixa (apenas 3 issues e 2 PRs closed/merged), sugerindo um acúmulo de backlog. Duas issues P1 críticas foram abertas nas últimas horas — uma sobre falhas silenciosas do Desktop em Linux e outra sobre ausência de backup nos bancos de dados de perfil durante atualizações. A comunidade demonstra engajamento elevado em questões de estabilidade (Skills index degradado, erros duplicados de provider) e em feature requests de acessibilidade e UX.

---

## 2. Lançamentos

**Nenhum release publicado nas últimas 24h.** O projeto não registrou novas versões no período.

> *Nota: A ausência de releases, combinada com o alto volume de issues ativas e PRs abertos, pode indicar que a equipe está em ciclo de preparação para uma futura release ou concentrando esforços em triagem e review.*

---

## 3. Progresso do Projeto

### PRs Closed/Merged (2 no período)

| PR | Autor | Descrição | Impacto |
|---|---|---|---|
| [#93132](https://github.com/NousResearch/hermes-agent/pull/93132) | kadiratesdev | `feat(cron): validate provider-model pairs at create/update time` | Adiciona validação de pares provider+model na criação/edição de cron jobs, evitando spam de drift alerts por credenciais inválidas |
| [#39228](https://github.com/NousResearch/hermes-agent/pull/39228) | ysnbytrk | `fix: surface MiniMax M3 in provider pickers` | Expõe o modelo MiniMax-M3 nos pickers de provider e adiciona testes de regressão para variantes do MiniMax |

### Destaque de PR Aberto com Alto Impacto

| PR | Autor | Descrição | Relevância |
|---|---|---|---|
| [#98165](https://github.com/NousResearch/hermes-agent/pull/98165) | liuhao1024 | `fix(gateway): suppress the duplicated provider-error status copy` | Corrigi a entrega dupla de erros de provider (#72131) — impacto direto na experiência do usuário em聊天 |
| [#94081](https://github.com/NousResearch/hermes-agent/pull/94081) | vadelma-agent | `fix(skills): ignore generated Python cache files in drift checks` | Elimina falsos positivos em `hermes skills diff` causados por `__pycache__` e `.pyc` |
| [#97309](https://github.com/NousResearch/hermes-agent/pull/97309) | caya8205-2 | `fix(gateway): resolve session storage from the key's profile` | Corrige leitura/escrita no banco de perfil errado em operações fora do escopo de runtime |
| [#94544](https://github.com/NousResearch/hermes-agent/pull/94544) | grandixximo | `fix(cli): stop prefixing uv base python on desktop entry Exec` | Resolve `ModuleNotFoundError` silencioso pós-update no Desktop Linux |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| # | Título | Comentários | Tipo | Análise |
|---|---|---|---|---|
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | Skills index is stale or degraded | **119** | Bug/P3 | Sonda de freshness automática falhou — índice 29.8h vs limite de 26h. Impacta o Skills Hub em `/docs/skills`. Problema recorrente com workflow de CI/CD. |
| [#88584](https://github.com/NousResearch/hermes-agent/issues/88584) | Automated Nous integration is blocked | **41** | Invalid/P3 | Conflitos em `cron/jobs.py` bloqueiam merge Nous→Enterkey. Indica fragilidade na automação de integração. |
| [#77111](https://github.com/NousResearch/hermes-agent/issues/77111) | [RFC] RealtimeVoiceProvider ABC — four competing duplex-voice PRs need an interface | **14** | Feature/P3 | 4 PRs competindo pela mesma integração de voz duplex. A comunidade pede design de ABC + orquestrador ao invés de fila de merge. 2 👍 |
| [#26689](https://github.com/NousResearch/hermes-agent/issues/26689) | Accessibility improvements for blind VoiceOver users | **14** | Feature/P3 | Usuário cego reporta UX muito difícil para screen-readers. 1 👍 — pedido legítimo de acessibilidade sem atenção aparentemente. |
| [#51327](https://github.com/NousResearch/hermes-agent/issues/51327) | Hermes Desktop silently fails from .desktop launcher when chrome-sandbox lacks setuid | **14** | Bug/P1 | Falha silenciosa em Linux quando `chrome-sandbox` não tem permissões 4755. Prioridade alta, impacto de experiência negativa severa. |

---

## 5. Bugs e Estabilidade

### Issues P1 Abertas (Críticas)

| # | Título | Severidade | Área | Link |
|---|---|---|---|---|
| [#51327](https://github.com/NousResearch/hermes-agent/issues/51327) | Desktop silently fails from .desktop launcher (chrome-sandbox setuid) | P1 | Desktop/Install | [Link](https://github.com/NousResearch/hermes-agent/issues/51327) |
| [#57275](https://github.com/NousResearch/hermes-agent/issues/57275) | Always exceeds context limits, crashes the models | P1 | Agent/Compression | [Link](https://github.com/NousResearch/hermes-agent/issues/57275) |
| [#97994](https://github.com/NousResearch/hermes-agent/issues/97994) | Pre-update state.db guard covers only root DB — profile databases get no emergency backup | P1 | Desktop/Profiles | [Link](https://github.com/NousResearch/hermes-agent/issues/97994) |

### Issues P2 em Destaque (Altas)

| # | Título | Área | Link |
|---|---|---|---|
| [#86207](https://github.com/NousResearch/hermes-agent/issues/86207) | After `hermes update`, dashboard keeps running stale code → Models page 500 | Desktop/Dashboard | [Link](https://github.com/NousResearch/hermes-agent/issues/86207) |
| [#72131](https://github.com/NousResearch/hermes-agent/issues/72131) | Provider errors delivered twice on adapters without send_or_update_status | Gateway/Telegram | [Link](https://github.com/NousResearch/hermes-agent/issues/72131) |
| [#93981](https://github.com/NousResearch/hermes-agent/issues/93981) | Desktop chat fails with non-loopback dashboard.public_url (WS token rejected) | Desktop/Auth | [Link](https://github.com/NousResearch/hermes-agent/issues/93981) |
| [#97202](https://github.com/NousResearch/hermes-agent/issues/97202) | Renderer reload orphans in-flight async delegations | Desktop/Agent | [Link](https://github.com/NousResearch/hermes-agent/issues/97202) |
| [#97208](https://github.com/NousResearch/hermes-agent/issues/97208) | Windows updater tries to stop Task Scheduler — Access denied, update aborts | CLI/Windows | [Link](https://github.com/NousResearch/hermes-agent/issues/97208) |
| [#90422](https://github.com/NousResearch/hermes-agent/issues/90422) | reasoning_effort: ultra triggers Response truncated after 4 continuation attempts | Agent/Config | [Link](https://github.com/NousResearch/hermes-agent/issues/90422) |

### Regressões e Padrões Recorrentes

- **Atualização e reinício**: Múltiplas issues (#86207, #97994, #94544) apontam para problemas no fluxo de update, sugerindo gaps no teste de upgrade path.
- **Sessões e estado**: Várias issues (#57275, #97202, #94872) envolvem sessões, state.db e reconciliação de sessões em background.
- **Falhas silenciosas**: Padrão observado em #51327 e #94544 — o Desktop falha sem feedback ao usuário, complicando diagnóstico.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features com Apoio da Comunidade

| # | Título | Tipo | Comentários | Sinal de Roadmap |
|---|---|---|---|---|
| [#77111](https://github.com/NousResearch/hermes-agent/issues/77111) | [RFC] RealtimeVoiceProvider ABC | Feature | 14 | Intenção clara de padronizar integrações de provider de voz — pode indicar roadmap de audio-first |
| [#26689](https://github.com/NousResearch/hermes-agent/issues/26689) | Accessibility improvements for blind VoiceOver users | Feature | 14 | Demanda real de acessibilidade — área negligenciada |
| [#67347](https://github.com/NousResearch/hermes-agent/issues/67347) | Guided picker for Subagent Model + Provider in Advanced Settings | Feature | 6 | UX improvement no Desktop/Dashboard |
| [#73990](https://github.com/NousResearch/hermes-agent/issues/73990) | Desktop — preserve scroll position when sending a message | Feature | 2 | Quality-of-life para leitura de conversas longas |
| [#98095](https://github.com/NousResearch/hermes-agent/issues/98095) | Display upstream provider hierarchy in the Hermes model picker | Feature | 1 | Melhora na transparência do modelo para gateways OpenAI-compatíveis |

### PRs de Feature em Andamento

| PR | Título | Link |
|---|---|---|
| #98080 | `feat(providers): add native WorkBuddy provider` | [Link](https://github.com/NousResearch/hermes-agent/pull/98080) |
| #95781 | `feat(desktop): Debug MCP server — native UI-debugging tools for LLM agents` | [Link](https://github.com/NousResearch/hermes-agent/pull/95781) |
| #98151 | `feat(kiro-acp): opt-in Kiro ACP provider on shared stdio transport` | [Link](https://github.com/NousResearch/hermes-agent/pull/98151) |
| #98164 | `feat(gateway): improve mobile messaging lifecycle` (Telegram/WhatsApp) | [Link](https://github.com/NousResearch/hermes-agent/pull/98164) |
| #98162 | `feat(gateway): add durable global AFK availability` | [Link](https://github.com/NousResearch/hermes-agent/pull/98162) |
| #98158 | `feat(desktop): add no-payload watchdog for stuck thinking spinner` | [Link](https://github.com/NousResearch/hermes-agent/pull/98158) |

> **Observação**: A diversidade de PRs de feature (WorkBuddy, Kiro-ACP, MCP debug, mobile messaging, AFK) indica expansão de plataforma e provider, alinhando-se a um roadmap de ecossistema aberto.

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais Reportadas

1. **Falha silenciosa do Desktop em Linux** (#51327): Usuários cliam no ícone e nada acontece. Nenhuma mensagem de erro. Diagnóstico difícil sem logs.
2. **Quebras de contexto e crashes de modelo** (#57275): Modelos de 32k a 256k sempre excedem limites, parando de responder. Nenhum compactador aciona.
3. **Skills index degradado** (#66616): Usuários do Skills Hub não conseguem acessar índice atualizado — 29.8h desatualizado vs limite de 26h.
4. **Integração Nous bloqueada** (#88584): Automação de merge está parada, afetando pipelines de CI/CD de contribuidores.
5. **Acessibilidade precária** (#26689): Usuário cego demonstra que o Hermes é funcionalmente difícil sem assistive technology.

### Cenários de Uso Identificados

- **Multi-profile installations**: Usuários com múltiplos perfis enfrentam problemas de state.db, reconciliação de sessões e wake-ups de backends dormentes.
- **Plataformas mobile (Telegram/WhatsApp)**: Crescente atenção a lifecycle de mensagens mobile (#98164).
- **Integração SSH e MCP**: `hermes mcp login` tem UX quebrada para fluxos SSH (#98118).
- **Gateways non-loopback**: Usuários em Tailscale/VPNover WireGuard enfrentam WS rejections (#93981).

### Satisfação e Insatisfação

| Indicador | Observação |
|---|---|
| Volume de issues | Alto (47 ativas) — sinaliza atividade, mas possivelmente backlog de triagem |
| Issues fechadas (24h) | Apenas 3 de 50 = 6% — taxa baixa de resolução |
| PRs merged (24h) | Apenas 2 de 50 = 4% — gargalo em review/merge |
| Reações (👍) | 3 issues com 👍 (max 2 em #77111) — baixo engajamento de "apoio" |
| Issues P1 abertas | 3 simultâneas — nível elevado de criticidade |

---

## 8. Backlog que Merece Atenção

### Issues Antigas com Atividade Recente (sem resolution há >30 dias)

| # | Título | Criado | Atualizado | Comentários | Prioridade | Link |
|---|---|---|---|---|---|---|
| #66616 | Skills index stale/degraded | 2026-07-18 | 2026-08-29 | 119 | P3 | [Link](https://github.com/NousResearch/hermes-agent/issues/66616) |
| #88584 | Automated Nous integration blocked | 2026-08-17 | 2026-08-29 | 41 | P3 | [Link](https://github.com/NousResearch/hermes-agent/issues/88584) |
| #51327 | Desktop silently fails (chrome-sandbox) | 2026-06-23 | 2026-08-29 | 14 | **P1** | [Link](https://github.com/NousResearch/hermes-agent/issues/51327) |
| #26689 | Accessibility for VoiceOver users | 2026-05-16 | 2026-08-29 | 14 | P3 | [Link](https://github.com/NousResearch/hermes-agent/issues/26689) |
| #67347 | Guided picker for Subagent Model | 2026-07-19 | 2026-08-29 | 6 | P3 | [Link](https://github.com/NousResearch/hermes-agent/issues/67347) |
| #52371 | `hermes kanban edit` cannot update task body | 2026-06-25 | 2026-08-29 | 4 | P3 | [Link](https://github.com/NousResearch/hermes-agent/issues/52371) |
| #57275 | Always exceeds context limits | 2026-07-02 | 2026-08-29 | 4 | **P1** | [Link](https://github.com/NousResearch/hermes-agent/issues/57275) |

### Priorização Recomendada

1. **#51327** e **#57275** (P

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw
## 📅 Data: 30 de agosto de 2026

---

## 1. 🌅 Panorama do Dia

O projeto PicoClaw demonstra **atividade moderada** em 30/08/2026, com 4 PRs atualizados nas últimas 24h contra apenas 1 issue aberta. Das 4 PRs atualizadas, **3 foram fechadas/merged**, indicando progresso significativo na entrega de funcionalidades. Não houve novos lançamentos hoje, e o repositório mantém um ticket crítico em aberto sobre comportamento infinito de edição de mensagens Telegram — uma questão de estabilidade que requer atenção. A maioria das atividades recentes envolveu resolução de problemas técnicos em integrações de canais (Telegram, QQ) e internacionalização.

---

## 2. 🚀 Lançamentos

### Nenhum lançamento registrado nas últimas 24h

| Release | Data | Mudanças |
|---------|------|----------|
| — | — | Sem releases recentes |

**Nota:** A ausência de releases pode indicar que o time está em ciclo de desenvolvimento ativo antes de um próximo tagged release, ou que as mudanças recentes ainda estão em fase de revisão.

---

## 3. 📈 Progresso do Projeto

Três PRs foram fechados/merged recentemente, trazendo avanços significativos:

### PRs Fechados/Merged

| # | Título | Impacto |
|---|--------|---------|
| [#3315](https://github.com/sipeed/picoclaw/pull/3315) | Support topics in private bot chats | **Alto** — Corrige reconhecimento de topics em chats privados com bots em modo forum |
| [#3337](https://github.com/sipeed/picoclaw/pull/3337) | Fix/mcp failure hangs agent loop | **Crítico** — Elimina deadlock do agent loop quando servidor MCP falha |
| [#1349](https://github.com/sipeed/picoclaw/pull/1349) | feat(qq): support parsing and replying to more attachment types | **Médio** — Adiciona suporte a emojis, voice, image, video, file no QQ Channel |

**Destaque principal:** O PR [#3337](https://github.com/sipeed/picoclaw/pull/3337) resolve um problema crítico onde falhas de conexão MCP causavam paralisação completa do chat — qualquer usuário ficava sem resposta até reinicialização manual.

---

## 4. 🔥 Temas Quentes da Comunidade

### Issue com maior engajamento recente

| # | Título | Comentários | Reações |
|---|--------|-------------|---------|
| [#3343](https://github.com/sipeed/picoclaw/issues/3343) | Tool feedback animation can edit a Telegram message indefinitely | 1 | 0 |

**Análise:** A issue #3343 destaca um bug severo de loop infinito na animação de feedback de ferramentas Telegram. O sistema gerou **+228.000 chamadas `editMessageText`** em questão de dias após um agent turn falhar, causando rate limiting no lado do Telegram. Este é um problema de **resiliência e tratamento de erros** — o agent não possui fallback quando uma animação de status entra em estado inconsistente.

### PR em revisão com atividade

| # | Título | Status |
|---|--------|--------|
| [#3348](https://github.com/sipeed/picoclaw/pull/3348) | i18n: complete Czech code wrap labels | Aberto |

**Análise:** PR de internacionalização (i18n) para idioma tcheco, indicando expansão de suporte multilíngue — demanda comum em projetos globais.

---

## 5. 🐛 Bugs e Estabilidade

### Issues abertas de estabilidade

| Severidade | # | Título | Tempo em aberto |
|------------|---|--------|-----------------|
| **🔴 Crítica** | [#3343](https://github.com/sipeed/picoclaw/issues/3343) | Tool feedback animation loops infinitely no Telegram | 8 dias |

**Detalhamento do bug crítico (#3343):**
- **Sintoma:** Animação de feedback continua chamando `editMessageText` a cada 3 segundos indefinidamente
- **Duração do incidente:** Vários dias até detecção
- **Impacto:** +228.000 requisições API ao Telegram
- **Consequência:** Rate limit servidor-side aplicado pelo Telegram
- **Causa raiz provável:** Falta de circuito breaker ou timeout na animação de status do agent

**Recomendação:** Este bug evidencia ausência de mecanismos de self-healing no loop de animação. Deve ser priorizado antes do próximo release.

### Issues fechadas relacionadas a bugs

| # | Título | Resolução |
|---|--------|-----------|
| [#3337](https://github.com/sipeed/picoclaw/pull/3337) | MCP failure hangs agent loop | ✅ Fix merged |

---

## 6. ✨ Pedidos de Features e Sinais de Roadmap

### PR aberto indicando nova demanda

| # | Título | Tipo | Indicação estratégica |
|---|--------|------|----------------------|
| [#3348](https://github.com/sipeed/picoclaw/pull/3348) | i18n: complete Czech code wrap labels | Internacionalização | Expansão de mercado CEI/Europa |

### Sinais de roadmap inferidos dos PRs fechados

1. **Suporte a topics em chats privados** — indica foco em compatibilidade com diferentes configurações de bots Telegram
2. **Suporte estendido a attachments QQ** — sinal de investimento no canal QQ/Discord-like
3. **Tratamento robusto de falhas MCP** — amadurecimento da arquitetura de plugins/agentes

---

## 7. 📢 Resumo de Feedback dos Usuários

### Padrões identificados

| Categoria | Evidência | Interpretação |
|-----------|-----------|---------------|
| **Dores técnicas** | Issue #3343 (loop infinito Telegram) | Usuários enfrentam indisponibilidade silenciosa quando agent entra em estado inconsistente |
| **Frustração com MCP** | PR #3337 (hang em falha MCP) | Integração com servidores externos é ponto de fragilidade percebido |
| **Satisfação com coverage** | PR #1349 (attachments QQ) | Usuários de QQ valorizamparidade de funcionalidades entre canais |

### Cenários de uso inferidos

- **Agentesmulti-canal:** PicoClaw é usado em produção gerenciando conversas via Telegram e QQ simultaneamente
- **Assistentes com plugins:** Arquitetura MCP indica uso de agentes com ferramentas externas customizadas
- **Bots forum/private:** Suporte a topics confirma uso em ambientes corporativos/comunitários

---

## 8. 📋 Backlog que Merece Atenção

### Issues/PRs antigos sem movimento recente

| # | Tipo | Título | Última atualização | Status |
|---|------|--------|-------------------|--------|
| [#3315](https://github.com/sipeed/picoclaw/pull/3315) | PR | Support topics in private bot chats | 2026-08-29 | Closed |
| [#3337](https://github.com/sipeed/picoclaw/pull/3337) | PR | Fix/mcp failure hangs agent loop | 2026-08-29 | Closed |
| [#3343](https://github.com/sipeed/picoclaw/issues/3343) | Issue | Tool feedback animation loops | 2026-08-29 | **Open** ⚠️ |

### Priorização recomendada

1. **🔴 Urgente:** Issue [#3343](https://github.com/sipeed/picoclaw/issues/3343) — Bug de loop infinito causandorate limits em produção
2. **🟡 Importante:** Adicionar circuit breaker ao sistema de animações de feedback
3. **🟢 Monitorar:** PR [#3348](https://github.com/sipeed/picoclaw/pull/3348) — Avaliar merge de i18n tcheco

---

## 📊 Métricas Consolidada (30/08/2026)

| Indicador | Valor | Tendência |
|-----------|-------|-----------|
| Issues abertas | 1 | Estável |
| PRs abertos | 1 | Estável |
| PRs fechados/merged | 3 | **Positiva** |
| Releases | 0 | Estável |
| Bugs críticos abertos | 1 | ⚠️ Requer ação |

---

*Relatório gerado automaticamente com base em dados do GitHub de sipeed/picoclaw*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório de Projeto: IronClaw — 2026-08-30

---

## 1. Panorama do Dia

O IronClaw apresenta **alta atividade de desenvolvimento** na data de hoje. Foram registradas **7 issues** e **13 PRs** atualizados nas últimas 24h, com **4 PRs merged/fechados** e **9 PRs em aberto**. Não há novas releases. Os principais temas em discussão giram em torno de **otimização de performance** — especialmente relacionados a ferramentas GitHub que retornam payloads excessivos — e **estabilidade do loop de execução** (terminação após outputs repetidos e wall clock). O contributor `henrypark133` lidera em volume de atividade, enquanto `serrrfirat` mantém foco em features estruturais de lifecycle e compactação. A saúde geral é positiva, com bugs críticos sendo endereçados proativamente.

---

## 2. Lançamentos

**Nenhum novo lançamento hoje.**

O projeto não registrou releases nas últimas 24h. O último ciclo de release permanece estável conforme a última versão distribuída.

---

## 3. Progresso do Projeto

### PRs Fechados/Merged Hoje

| PR | Título | Tamanho | Escopo | Impacto |
|----|--------|---------|--------|---------|
| [#7899](https://github.com/nearai/ironclaw/pull/7899) | feat(notifications): publish automation pre-run failures | XL | docs | Publicação de notificação `RunFailed` durável para falhas de automação antes da submissão de run |
| [#7982](https://github.com/nearai/ironclaw/pull/7982) | fix(tools): stop sending the model after a result_read budget it cannot reach | L | docs | Corrige mensagem de erro que apontava direção errada ao modelo; produção `13bad7f5` enfrentou 5 retries desnecessários |
| [#7979](https://github.com/nearai/ironclaw/pull/7979) | test(extensions): enforce encoded output ownership | XS | docs | Adiciona gate fail-closed para inventariar fronteiras de output codificado/criptografado |
| [#7980](https://github.com/nearai/ironclaw/pull/7980) | ci: validate integration group topology | L | — | Validação fail-closed de topologia de grupos de integração em Cargo |

### Destaque: Melhoria de Estabilidade do Loop

O PR [#7977](https://github.com/nearai/ironclaw/pull/7977) (em aberto, size: XL) busca **restaurar a terminação por output repetido** e impor um **wall clock cap interativo**. Desde que PR #7531 removeu o terminador digest-based (falsos positivos em polls idempotentes), uma produção run (`e3513a4e`) executou **593 chamadas de ferramenta em 70 minutos** sem progressão — evidenciando uma lacuna crítica de watchdog.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| Issue | Título | Comentários | Reações | Relevância |
|-------|--------|-------------|---------|------------|
| [#7824](https://github.com/nearai/ironclaw/issues/7824) | Context projection: Pi-style compaction barrier, structured summaries, overflow recovery | 5 | 0 | **Crítica**: Custo de input tokens cresceu 4x (227.7M vs 55.1M tokens) no PinchBench |
| [#7770](https://github.com/nearai/ironclaw/issues/7770) | Epic: hook the agent lifecycle | 4 | 0 | **Arquitetural**: Extensão do `ironclaw_hooks` para after-turn, before-turn, compaction e tool-result seams |
| [#7981](https://github.com/nearai/ironclaw/issues/7981) | perf(github, tools): list_repos payload = 64 tool calls, 3m01s | 3 | 0 | **Performance**: Resposta completa já presente após chamada #1; modelo emite 61 chamadas `builtin.result_read` desnecessárias |

### Análise

O tema mais urgente é **context projection e custo de tokens**. A issue #7824 documenta empiricamente que, em PinchBench (147 tasks), uma run atual consome **$10.31** vs **$2.52** do baseline — um aumento de **~4x no custo** por aumento de input tokens de 55.1M para 227.7M. A solução proposta envolve barreiras de compactação estilo Pi e recuperação de overflow, indicando que o replay de histórico completo está se tornando insustentável em escala.

A issue #7770 demonstra ambição de longo prazo: transformar "quando X acontece, faça Y" em registros de hooks ao invés de edições no core engine — modularidade e extensibilidade.

---

## 5. Bugs e Estabilidade

### Bugs Reportados (por Severidade)

| Severidade | Issue | Escopo | Descrição |
|------------|-------|--------|-----------|
| **P2** (suggested) | [#7981](https://github.com/nearai/ironclaw/issues/7981) | tool/builtin, extensions | `list_repos` gera 64 chamadas e 3m01s; resposta completa já disponível na chamada #1 |
| **P2** (suggested) | [#7986](https://github.com/nearai/ironclaw/issues/7986) | extensions | `list_repos` ships 81 campos brutos por repo (5,517 B cada); total 519,551 B para 98 repos; seam de projeção não utilizado |
| **P1** | [#7930](https://github.com/nearai/ironclaw/issues/7930) | tools | Modelo precisa re-emitir payloads verbatim em argumentos; sem suporte a citação por referência de resultados anteriores |
| — | [#7987](https://github.com/nearai/ironclaw/issues/7987) | llm | `flatten_top_level` reconstruí schema de whitelist fixa, descartando silenciosamente constraints não-proibidos |
| — | [#7989](https://github.com/nearai/ironclaw/pull/7989) (PR) | coding | `list_dir` não informa qual path não encontrou (erro opaco) |

### Análise de Estabilidade

**Problemas de performance dominam o backlog de bugs.** Três das cinco issues estão relacionadas a payloads excessivos em ferramentas GitHub e ausência de projeção/seams adequados. O bug #7987 é particularmente perigoso por ser **silencioso** — constraints de schema simplesmente desaparecem sem warning, teste ou diagnóstico, potencialmente introduzindo vulnerabilidades de segurança ou comportamento inesperado em provedores downstream.

A combinação de #7930 (referência a resultados) + #7981/#7986 (projeção de payload) + #7982 (já fixado, budget recovery) sugere uma linha de trabalho coesa em **otimização de tool result handling**.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em Desenvolvimento

| PR | Título | Escopo | Estágio |
|----|--------|--------|---------|
| [#7961](https://github.com/nearai/ironclaw/pull/7961) | feat(telemetry): add scoped tenant BI telemetry collection | dependencies | **Em revisão** (XL, risk: medium) |
| [#7958](https://github.com/nearai/ironclaw/pull/7958) | feat(learning): add shared review router | — | **Em revisão** (XL) |
| [#7978](https://github.com/nearai/ironclaw/pull/7978) | fix(compaction): bound cumulative summarizer input | — | **Em revisão** (L) |
| [#7984](https://github.com/nearai/ironclaw/pull/7984) | fix(tools): size tool_search replies to the first-look envelope | — | **Em revisão** (XL) |

### Sinais de Roadmap

1. **Telemetria multi-tenant (BI)** — PR #7961 introduz contratos de telemetria com scoped privacy, sugerindo preparação para escala enterprise ou multi-tenant.
2. **Learning review router** — PR #7958 substitui o skill-only `IRONCLAW_SKILL_LEARNING_MODEL` por um path provider-neutral, sinalizando maturização da feature de aprendizado.
3. **Agent lifecycle hooks** — Issue #7770 é épico de longo prazo para modularidade de eventos do agente.
4. **Tool result referencing** — Issue #7930 (P1) busca eliminar re-emissão de payloads, indicando necessidade de arquitetura mais eficiente para chained tool calls.

---

## 7. Resumo de Feedback dos Usuários

*(Com base em issues/PRs com descrição de dores de uso real)*

### Dores Documentadas

| Cenário | Dano | Evidência |
|---------|------|-----------|
| `list my github repos` ineficiente | **64 tool calls, 3m01s** para resposta já disponível | Produção run `13bad7f5`, thread `bd6800cd` |
| Loop infinito sem terminação | **593 tool calls em 70 minutos** sem progressão | Produção run `e3513a4e` (2026-08-27) |
| Custo de tokens explosivo | **4x aumento** ($2.52 → $10.31) em benchmark | PinchBench (147 tasks), DeepSeek-V4-Flash via OpenRouter |
| Model recovery após budget failure | **5 retries desnecessários** por mensagem ambígua | Produção run `13bad7f5`, mesmo thread |
| Falha de automação silenciosa | Usuário não recebe notificação de que run falhou antes de submissão | Issue #7873, agora addressed por PR #7899 |

### Insights Comportamentais

- **Usuários executam operações simples** ("list my github repos") que disparam cascatas inesperadas de tool calls.
- **O modelo faz polling excessivo** quando não consegue recovery de budget failures — evidenciando gap de tool-disclosure.
- **Produtividade comprometida** por loops sem watchdog; 70 minutos de execução sem output é UX crítica.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta/Atendimento Prolongado

| Issue | Idade | Status | Prioridade | Motivo de Atenção |
|-------|-------|--------|------------|-------------------|
| [#7824](https://github.com/nearai/ironclaw/issues/7824) | ~8 dias | OPEN | — | Custo de tokens 4x; impacto direto em OpEx |
| [#7770](https://github.com/nearai/ironclaw/issues/7770) | ~10 dias | OPEN | Epic | Arquitetura de extensibilidade; base para múltiplas features |
| [#7930](https://github.com/nearai/ironclaw/issues/7930) | ~3 dias | OPEN | **P1** | Referência a resultados eliminaria re-emissão de payloads |
| [#7986](https://github.com/nearai/ironclaw/issues/7986) | ~2 dias | OPEN | P2 (sugested) | 519 KB por listagem simples; low-hanging fruit de otimização |
| [#7987](https://github.com/nearai/ironclaw/issues/7987) | ~2 dias | OPEN | — | Bug silencioso de schema; potencial risco de segurança |

### Ações Recomendadas

1. **Priorizar #7930 (P1)** — Citação de resultados por referência eliminaria cascatas de tool calls observadas em #7981 e #7986.
2. **Triar #7987** — Bug silencioso de schema pode afetar integridade de tool calls em produção.
3. **Acelerar #7824** — O custo de 227.7M input tokens por run é insustentável em escala; a solução de compactação trará ganhos imediatos.
4. **Revisar #7977** — A terminação de loop por output repetido precisa ser restaurada para evitar execuções infinitas em produção.

---

*Relatório gerado automaticamente com base em dados do GitHub (github.com/nearai/ironclaw) — 2026-08-30*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do Projeto CoPaw — 2026-08-30

## 1. Panorama do Dia

O projeto CoPaw (QwenPaw) manteve um nível de atividade moderado-alto nas últimas 24h, com 10 issues e 7 pull requests atualizados. A comunidade demonstra engajamento significativo na discussão sobre o roadmap da versão 2.2.0, especialmente em torno do **QwenPaw Hub**, a nova edição multi-tenant aguardada. Não houve novos lançamentos正式izados, embora a versão beta v2.2.0-beta.3 esteja em fase de verificação pré-lançamento. Dois bugs críticos de estabilidade foram reportados — relacionados a credenciais MCP e blocos de texto vazios na API Ark — demandando atenção imediata da equipe.

---

## 2. Lançamentos

### Nenhum release正式izado nas últimas 24h

No entanto, o processo de pré-lançamento da versão **v2.2.0-beta.3** está em andamento:

- **Issue de verificação**: [#7394 — Release Duty QwenPaw v2.2.0-beta.3](https://github.com/agentscope-ai/QwenPaw/issues/7394) (2026-08-28/29)
- **Status**: Em verificação com 4 checkpoints de aprovação
- **Prazo**: 2026-08-28 19:17 UTC

> ⚠️ **Nota**: Esta versão beta contém as features discussedas no hub multi-tenant. Acompanhar a conclusão da verificação para previsão do release estable.

---

## 3. Progresso do Projeto

### PRs em destaque (abertos, aguardando merge)

| # | PR | Autor | Descrição | Impacto |
|---|-----|-------|-----------|---------|
| [#7401](https://github.com/agentscope-ai/QwenPaw/pull/7401) | `fix(acp): prevent Windows ACP agent stalls` | shadowabi | Resolve hang do agente ACP no Windows durante bootstrap do workspace | **Crítico (Windows)** |
| [#7356](https://github.com/agentscope-ai/QwenPaw/pull/7356) | `feat(console): add chat scroll lock` | AaronZ345 | Permite travar scroll durante streaming de respostas longas | UX |
| [#7357](https://github.com/agentscope-ai/QwenPaw/pull/7357) | `feat(chat): add tool call visibility toggle` | AaronZ345 | Alternância para mostrar/ocultar cards de tool calls | UX |
| [#6874](https://github.com/agentscope-ai/QwenPaw/pull/6874) | `feat(mcp): add configurable tool call timeout` | AaronZ345 | Timeout configurável por cliente MCP (default 300s) | Infraestrutura |
| [#7220](https://github.com/agentscope-ai/QwenPaw/pull/7220) | `fix(media): reject oversized image dimensions` | mikemikimike | Valida dimensões de imagem além do limite de bytes | **Bug fix** |
| [#7080](https://github.com/agentscope-ai/QwenPaw/pull/7080) | `feat: Add PowerContext memory backend` | kic635 | Backend opcional de memória de longo prazo | Feature |
| [#7403](https://github.com/agentscope-ai/QwenPaw/pull/7403) | `Update README` | tarscheong | Contribuição first-time-contributor | Documentação |

> **Observação**: Nenhum PR foi mergeado ou fechado nas últimas 24h — todos estão em revisão aberta.

---

## 4. Temas Quentes da Comunidade

### 🔥 Discussion em destaque

[**#7318 — QwenPaw Hub: Multi-tenant Edition para v2.2.0**](https://github.com/agentscope-ai/QwenPaw/issues/7318)  
- **Autor**: rayrayraykk | **Comentários**: 14 | **Reações**: 👍 1
- **Resumo**: O QwenPaw evolui de assistente pessoal para plataforma multi-usuário. O Hub permitirá gerenciamento centralizado de skills, acesso admin e implementação em equipe.
- **Demanda central**: A comunidade solicita uma solução para uso corporativo/colaborativo do assistente.

### 📊 Análise de engajamento

| Tipo | Quantidade | Issue mais comentada |
|------|------------|----------------------|
| Questions | 2 | #7318 (14 comentários) |
| Enhancements | 2 | #6770 (4 comentários) |
| Bugs | 2 | #7301 (3 comentários) |
| Features | 2 | #7398, #7404 (1 comentário cada) |
| Others | 2 | #7399, #7394 |

**Tendência**: Forte interesse em funcionalidades de colaboração e gerenciamento de equipe, sinalizando mudança de foco de uso individual para corporativo.

---

## 5. Bugs e Estabilidade

### 🐛 Bugs ativos (por severidade)

| Severidade | Issue | Descrição | Impacto |
|------------|-------|-----------|---------|
| **Alta** | [#7301](https://github.com/agentscope-ai/QwenPaw/issues/7301) | Migração legacy MCP deixa referência de credencial órfã — `CredentialNotFoundError` em toda nova sessão | **Quebra funcional** |
| **Alta** | [#7402](https://github.com/agentscope-ai/QwenPaw/issues/7402) | Blocos `output_text` vazios persistidos no histórico envenenam requisições subsequentes (API Ark retorna 400) | **Quebra funcional** |
| **Média** | [#7220](https://github.com/agentscope-ai/QwenPaw/pull/7220) *(PR)* | Imagens comprimidas abaixo do limite de bytes podem exceder limites de pixels de providers de visão | Edge case |
| **Média** | [#7401](https://github.com/agentscope-ai/QwenPaw/pull/7401) *(PR)* | Agente ACP no Windows congela durante workspace bootstrap | **Plataforma Windows** |

### ✅ Bugs fechados

- [**#6770** — Chrome tab lifetime configurável](https://github.com/agentscope-ai/QwenPaw/issues/6770): Enhancement fechado com 4 comentários
- [**#7400** — "搞错" (Closed as invalid)](https://github.com/agentscope-ai/QwenPaw/issues/7400): Issue inválida

---

## 6. Pedidos de Features e Sinais de Roadmap

### ✨ Novas features solicitadas

| # | Feature | Autor | Descrição | Potencial v2.2.0 |
|---|---------|-------|-----------|-----------------|
| [#7398](https://github.com/agentscope-ai/QwenPaw/issues/7398) | `/btw side-question command` | Marlin-Phone | Comando para perguntas laterais sem consumir contexto (estilo Claude Code v2.1.72) | 🔸 Possível |
| [#7404](https://github.com/agentscope-ai/QwenPaw/issues/7404) | `card_auto_layout` no Console DingTalk | kilowu | Expor opção de layout wide-screen para cards DingTalk | 🔸 Possível |
| [#7080](https://github.com/agentscope-ai/QwenPaw/pull/7080) | **PowerContext memory backend** | kic635 | Backend opcional de memória de longo prazo | ✅ Em revisão |

### 🔄 Features em discussão

- [**#7405** — Plan Mode](https://github.com/agentscope-ai/QwenPaw/issues/7405): Usuário questiona retorno do modo de planejamento visual, considerando snapshots insufficientes

### 📌 Sinais de roadmap identificados

1. **Multi-tenant/HUB** (#7318): Confirmado para v2.2.0
2. **Memory de longo prazo** (#7080): Backend alternativo em revisão
3. **Timeout configurável MCP** (#6874): Aprovado e em implementação
4. **UX Chat**: Toggle de tool calls (#7357) e scroll lock (#7356)

---

## 7. Resumo de Feedback dos Usuários

### Dores relatadas

| Dor | Issue | Frequência |
|-----|-------|------------|
| Erro de credenciais MCP em toda nova sessão | [#7301](https://github.com/agentscope-ai/QwenPaw/issues/7301) | Alta |
| Dificuldade de ler histórico durante streaming | [#7356](https://github.com/agentscope-ai/QwenPaw/pull/7356) | Média |
| Sobrecarga visual com tool calls | [#7357](https://github.com/agentscope-ai/QwenPaw/pull/7357) | Média |
| Lentidão/freeze no Windows ACP | [#7401](https://github.com/agentscope-ai/QwenPaw/pull/7401) | Alta |
| Falta de transparência no planejamento do modelo | [#7405](https://github.com/agentscope-ai/QwenPaw/issues/7405) | Baixa |

### Cenários de uso destacados

- **Uso corporativo**: Comunidade demonstra interesse em deployment multi-usuário (HUB)
- **Uso em equipe**: Gerenciamento centralizado de skills solicitado
- **Uso pessoal**: Usuários ainda valorizam transparência de ações (Plan Mode)

### Satisfação observada

- **Timestamp UTC como "design"**: Issue #7399 esclareceu que `datetime.now()` sem timezone é escolha arquitetural, não bug — comunidade aceitou a explicação
- **Release beta v2.2.0-beta.3**: Processo de verificação estruturado demonstra maturidade

---

## 8. Backlog que Merece Atenção

### Issues sem resposta prolongada

| # | Issue | Criado | Status | Prioridade |
|---|-------|--------|--------|------------|
| [#6770](https://github.com/agentscope-ai/QwenPaw/issues/6770) | Chrome tab lifetime configurável | 2026-08-06 | Closed | — |
| [#6874](https://github.com/agentscope-ai/QwenPaw/pull/6874) | MCP configurable timeout | 2026-08-10 | Open (PR) | 🔴 Alta |
| [#7080](https://github.com/agentscope-ai/QwenPaw/pull/7080) | PowerContext memory | 2026-08-17 | Open (PR) | 🟡 Média |

### Issues aguardando resposta da equipe

| # | Issue | Criado | Comentários | Status |
|---|-------|--------|-------------|--------|
| [#7398](https://github.com/agentscope-ai/QwenPaw/issues/7398) | /btw command | 2026-08-29 | 1 | Open |
| [#7404](https://github.com/agentscope-ai/QwenPaw/issues/7404) | card_auto_layout DingTalk | 2026-08-29 | 1 | Open |
| [#7405](https://github.com/agentscope-ai/QwenPaw/issues/7405) | Plan Mode question | 2026-08-29 | 1 | Open |

### Recomendação de ação imediata

1. **🔴 Crítico**: Resolver bugs [#7301](https://github.com/agentscope-ai/QwenPaw/issues/7301) e [#7402](https://github.com/agentscope-ai/QwenPaw/issues/7402) antes do release v2.2.0
2. **🟡 Prioridade**: Review e merge do PR [#7401](https://github.com/agentscope-ai/QwenPaw/pull/7401) para estabilidade Windows
3. **🔵 Monitorar**: Progresso do release beta v2.2.0-beta.3

---

## Métricas de Saúde do Projeto

| Indicador | Valor | Status |
|-----------|-------|--------|
| Issues ativas (24h) | 8 | 🟢 Normal |
| Issues fechadas (24h) | 2 | 🟢 Normal |
| PRs abertos (24h) | 7 | 🟢 Normal |
| PRs mergeados (24h) | 0 | 🟡 Atenção |
| Bugs críticos ativos | 2 | 🔴 Ação necessária |
| Features em pipeline | 5+ | 🟢 Saudável |
| Release em progresso | v2.2.0-beta.3 | 🟢 Em curso |

---

*Relatório gerado em 2026-08-30 com base em dados das últimas 24h do repositório agentscope-ai/CoPaw.*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-08-30

## 1. Panorama do Dia

O ecossistema ZeroClaw mantém um ritmo intenso de atividade com **50 PRs atualizados e 20 issues novas/ativas** nas últimas 24h, sem novos lançamentos formais. O projeto concentra esforços em três eixos críticos: **estabilidade da versão v0.8.5** (intake congelado, corte semanal em curso), **segurança** (fixes em canais e dependências) e **novos recursos de comunicação entre agentes** (A2A, Gemini Live, VoiceHost). A comunidade demonstra alta Engajamento com issues técnicas profundas (RFCs, trackers de arquitetura) e contributions de segurança relevantes — alguns PRs marcada como `do-not-merge` indicam trabalho em progresso sensitive. Dois alertas CI sobre crate `chacha20` puxado do registry exigem atenção imediata.

---

## 2. Lançamentos

**Nenhum release nas últimas 24h.**

O projeto encontra-se na **janela de estabilização da v0.8.5**, com intake congelado desde 2026-08-04 e weekly cuts programados até 2026-08-30. O tracker [#9459](https://github.com/zeroclaw-labs/zeroclaw/issues/9459) é a fonte oficial de verdade para itens do milestone.

---

## 3. Progresso do Projeto

| PR | Resumo | Impacto |
|---|---|---|
| [#10444](https://github.com/zeroclaw-labs/zeroclaw/pull/10444) | `fix(zerocode)`: decodifica SGR mouse events fragmentados | UX/TUI — corrige inserção indevida no composer |
| [#10443](https://github.com/zeroclaw-labs/zeroclaw/pull/10443) | `fix(zerocode)`: expõe falhas de limpeza de clipboard | Robustez operacional |
| [#10433](https://github.com/zeroclaw-labs/zeroclaw/pull/10433) | `fix(channels)`: marca API key do ElevenLabs como sensitive | **Segurança** — credential leak prevention |
| [#10428](https://github.com/zeroclaw-labs/zeroclaw/pull/10428) | `fix(deps)`: atualiza chacha20 0.10.0 → 0.10.2 | **Segurança CI** — resolve yanked crate |
| [#10064](https://github.com/zeroclaw-labs/zeroclaw/pull/10064) | `fix(channels/telegram)`: self-destruct de approval cards | UX — Telegram |
| [#10356](https://github.com/zeroclaw-labs/zeroclaw/pull/10356) | `feat(tools)`: adiciona AnySearch como provider web_search | Expansão de integrações |

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento

| Issue | Tema | Comentários | 👍 | Análise |
|---|---|---|---|---|
| [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) | RFC: Política granular de sandbox (filesystem + network) | 16 | 0 | Discussão técnica ativa sobre unificação de camadas de segurança (application vs. OS sandbox). Risco alto, em progresso, precisa review de maintainer. |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | Tracker: Fila de decisões de maintainers (RFCs/design) | 14 | 0 | Meta-processo crítico para destravar múltiplos RFCs aceitos mas pendentes de decisão oficial. |
| [#3566](https://github.com/zeroclaw-labs/zeroclaw/issues/3566) | **Tracker: Interoperabilidade A2A protocol** | 10 | **7** | Maior recepção da comunidade. Adicionar suporte nativo ao protocolo Agent2Agent (Linux Foundation) para comunicação cross-agent. Prioridade P2, alto impacto arquitetural. |
| [#8891](https://github.com/zeroclaw-labs/zeroclaw/issues/8891) | Tracker: Persistent memory — curadoria, relevância, operabilidade | 9 | 0 | Epic que coordena multi-PR para memória cross-session. Snapshot atual: 7 itens abertos. |

### PRs estratégicos em revisão

| PR | Tema | Tamanho | Status |
|---|---|---|---|
| [#9428](https://github.com/zeroclaw-labs/zeroclaw/pull/9428) | Requer autorização de sender para Bluesky e Reddit | **XL** | needs-author-action |
| [#9740](https://github.com/zeroclaw-labs/zeroclaw/pull/9740) | VoiceHost WebSocket bridge (FunASR/SenseVoice) | **XL** | needs-author-action |
| [#10430](https://github.com/zeroclaw-labs/zeroclaw/pull/10430) | Gemini speech-to-speech broker channel (PR1: daemon core) | **XL** | needs-author-action |
| [#9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109) | Hailo-Ollama native support | **XL** | do-not-merge |

---

## 5. Bugs e Estabilidade

### 🔴 Prioridade P1 (Críticos)

| Issue | Descrição | Severidade | Status |
|---|---|---|---|
| [#8539](https://github.com/zeroclaw-labs/zeroclaw/issues/8539) | **AgentEnd event missing cost_usd** — tanto CLI quanto agent path reportam `None` mesmo com tracking ativo | S2 (degraded) | Aberta, no-stale |
| [#10063](https://github.com/zeroclaw-labs/zeroclaw/issues/10063) | **Anthropic-backed gateways rejeitam image_url blocks** dentro de tool results — workflow bloqueado | S1 (workflow blocked) | In-progress, accepted |
| [#10427](https://github.com/zeroclaw-labs/zeroclaw/issues/10427) / [#10447](https://github.com/zeroclaw-labs/zeroclaw/issues/10447) | **CI: chacha20 yanked crate** — dois alertas consecutivos (28 e 29/ago) | CI failure | PR [#10428](https://github.com/zeroclaw-labs/zeroclaw/pull/10428) aberto como fix |

### 🟡 Prioridade P2 (Degradados)

| Issue | Descrição | Severidade | Status |
|---|---|---|---|
| [#10432](https://github.com/zeroclaw-labs/zeroclaw/issues/10432) | ElevenLabs TTS `xi-api-key` header **não marcado como sensitive** — leak em logs/erros | S2 | PR [#10433](https://github.com/zeroclaw-labs/zeroclaw/pull/10433) aberto |
| [#10437](https://github.com/zeroclaw-labs/zeroclaw/issues/10437) | **ZeroCode insere SGR mouse-wheel reports no composer** ao scrollar | S2 | PR [#10444](https://github.com/zeroclaw-labs/zeroclaw/pull/10444) aberto |
| [#10436](https://github.com/zeroclaw-labs/zeroclaw/issues/10436) | **OpenRouter streaming** corta respostas ativas no timeout total | S2 | Aberta |

### ✅ Bugs resolvidos nas últimas 24h

| Issue | Descrição |
|---|---|
| [#10429](https://github.com/zeroclaw-labs/zeroclaw/issues/10429) | Deepgram/OpenAI transcription silenciosamente descartava voice notes não-inglesas — **CLOSED** |
| [#10237](https://github.com/zeroclaw-labs/zeroclaw/issues/10237) | Telegram reply-threads fragmentavam memória em buckets por-thread — **CLOSED** |
| [#8309](https://github.com/zeroclaw-labs/zeroclaw/issues/8309) | Decisão sobre orphaned SkillForge engine — **CLOSED** |

---

## 6. Pedidos de Features e Sinais de Roadmap

### RFCs e Propostas Abertas

| Issue | Feature | Risco | Sinal de Prioridade |
|---|---|---|---|
| [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) | **Sandbox granular** — filesystem + network restrictions via Bubblewrap/Landlock/Seatbelt | HIGH | In-progress, needs-maintainer-review |
| [#10360](https://github.com/zeroclaw-labs/zeroclaw/issues/10360) | **Edge mesh doméstico** — pull workers com receipts assinados em múltiplos devices | HIGH | RFC fresca (25/ago) |
| [#10419](https://github.com/zeroclaw-labs/zeroclaw/issues/10419) | **SSE streaming** de tokens do agent-loop via `POST /webhook` | HIGH | Feature request ativa |
| [#10336](https://github.com/zeroclaw-labs/zeroclaw/issues/10336) | **AnySearch** como built-in provider de web_search | HIGH | Proposta + PR [#10356](https://github.com/zeroclaw-labs/zeroclaw/pull/10356) em paralelo |
| [#10195](https://github.com/zeroclaw-labs/zeroclaw/issues/10195) | **Schema validators** recompilam em toda resolução de config (performance) | HIGH | Task aceita |

### Trackers de Feature (Epics)

| Tracker | Escopo | Itens |
|---|---|---|
| [#3566](https://github.com/zeroclaw-labs/zeroclaw/issues/3566) | A2A protocol interoperability | Protocolo Linux Foundation |
| [#8891](https://github.com/zeroclaw-labs/zeroclaw/issues/8891) | Persistent memory parity | 7 itens (4 issues + 3 PRs) |
| [#10406](https://github.com/zeroclaw-labs/zeroclaw/issues/10406) | Gemini speech-to-speech broker | PR1 ([#10430](https://github.com/zeroclaw-labs/zeroclaw/pull/10430)) em revisão |
| [#9459](https://github.com/zeroclaw-labs/zeroclaw/issues/9459) | v0.8.5 stabilization line | Corte semanal em andamento |

---

## 7. Resumo de Feedback dos Usuários

### Dores documentadas em issues

1. **Transcrição quebrada para não-inglesas**: Usuários de Telegram em italiano relatam voice notes sempre descartadas silenciosamente — [#10429](https://github.com/zeroclaw-labs/zeroclaw/issues/10429) (resolvido).

2. **Context loss em Telegram reply-threads**: Usuários perdem contexto multi-turn quando respondem threads — [#10237](https://github.com/zeroclaw-labs/zeroclaw/issues/10237) (resolvido).

3. **Timeout agressivo em streaming OpenRouter**: Respostas longas são cortadas prematuramente, prejudicando casos de uso com modelos de reasoning — [#10436](https://github.com/zeroclaw-labs/zeroclaw/issues/10436).

4. **ZeroCode TUI com input de mouse corrupto**: Scroll gera caracteres SGR visíveis no composer, degradando experiência em terminais — [#10437](https://github.com/zeroclaw-labs/zeroclaw/issues/10437).

5. **Mattermost sem approval prompts**: Operators não conseguiam aprovar ações de IA na plataforma — PR [#10358](https://github.com/zeroclaw-labs/zeroclaw/pull/10358) aberto.

### Sinais positivos

- **A2A interoperability** (#3566) com 7 👍 demonstra demanda clara por comunicação cross-agent.
- Multiple PRs de **segurança** (API keys, subprocess isolation, cache permissions) indicam maturidade em práticas DevSecOps.
- Contribution ativa de **distinguished contributors** (Audacity88, JordanTheJet) sinaliza saúde da comunidade.

---

## 8. Backlog que Merece Atenção

### Issues sem resposta / stagnadas

| Issue | Tema | Idade | Risco | Motivo da atenção |
|---|---|---|---|---|
| [#10093](https://github.com/zeroclaw-labs/zeroclaw/issues/10093) | Isolar subprocessos de plugins instalados via manifest | 12 dias | **HIGH** | Do-not-merge; segurança crítica; precisa maintainer review |
| [#10091](https://github.com/zeroclaw-labs/zeroclaw/issues/10091) | Hardening de permissões do response cache | 12 dias | **HIGH** | Do-not-merge; mesma situação |
| [#9109](https://github.com/zeroclaw-labs/zeroclaw/issues/9109) | Hailo-Ollama native support | 44 dias | medium | Do-not-merge, size XL — decisão de aceite pendente |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | Fila de decisões de maintainers | 57 dias | medium | Meta-gargalo — sem resolução, RFCs ficam travadas |

### Priorização recomendada

1. **Revisar e aceitar/rejeitar PRs de segurança** ([#10093](https://github.com/zeroclaw-labs/zeroclaw/pull/10093), [#10091](https://github.com/zeroclaw-labs/zeroclaw/pull/10091)) — marcados `do-not-merge` sem explicação visível.
2. **Destravvar o tracker de decisões** ([#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)) — 14+ issues RFC/design esperando.
3. **Concluir CI fix do chacha20** — dois alertas consecutivos indicam processo de dependency management needs hardening.
4. **Revisar feature PRs size XL** antes do corte v0.8.5 — [#9428](https://github.com/zeroclaw-labs/zeroclaw/pull/9428) (segurança Bluesky/Reddit) e [#9740](https://github.com/zeroclaw-labs/zeroclaw/pull/9740) (VoiceHost) precisam decisão.

---

*Relatório gerado automaticamente com base nos dados do GitHub de 2026-08-30. Todas as links referenciam `github.com/zeroclaw-labs/zeroclaw`.*

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*