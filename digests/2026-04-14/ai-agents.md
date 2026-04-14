# Resumo diário do ecossistema de agentes de IA 2026-04-14

> Issues: 2 | PRs: 4 | Projetos cobertos: 7 | Gerado em: 2026-04-14 13:13 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório do Projeto NullClaw — 2026-04-14

---

## 1. Panorama do Dia

O projeto NullClaw apresenta **atividade moderada** em 14 de abril de 2026, com 2 issues e 4 pull requests atualizados nas últimas 24 horas. Não houve novos lançamentos. A atividade concentra-se em **correções de bugs** (3 PRs) e uma **feature significativa** (cron subagent). Do lado das issues, dois bugs foram reportados por usuários com cenários específicos — search capability e sub-agent com provedores customizados. O repositório demonstra manutenção ativa com foco em estabilidade e experiência do usuário.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24h.**

O projeto não publicou novas versões. Isso indica um período de preparação antes do próximo lançamento, possivelmente para incluir as correções de bugs abertas (PRs #813, #814, #815).

---

## 3. Progresso do Projeto

Três PRs de manutenção foram abertos hoje com foco em estabilidade:

| PR | Tipo | Autor | Destaque |
|----|------|-------|----------|
| [#814](https://github.com/nullclaw/nullclaw/pull/814) | fix | manelsen | Corrige bug de lifetime em named-agent provider resolution, evitando uso de provider após destruição do storage |
| [#813](https://github.com/nullclaw/nullclaw/pull/813) | fix | manelsen | Resolve problema no comando `nullclaw models refresh` aumentando budget de output para índices modernos |
| [#815](https://github.com/nullclaw/nullclaw/pull/815) | fix | manelsen | Melhora reporte de erros em web_search e adiciona guia de configuração para providers ausentes |

**Avanco principal:** O PR [#783](https://github.com/nullclaw/nullclaw/pull/783) (feat: cron subagent) continua em revisão ativa — representa uma funcionalidade significativa com scheduler DB-backed, histórico de execuções e hardened de segurança.

---

## 4. Temas Quentes da Comunidade

**Issue #812 — http_request bug** (2 comentários)
- *Link:* https://github.com/nullclaw/nullclaw/issues/812
- *Autor:* uMendex (novo usuário vindo de Picoclaw/ZeroClaw)
- *Contexto:* Usuário não consegue habilitar busca na internet apesar de seguir todos os exemplos
- *Relevância:* Indica problema recorrente com configuração de search provider — possivelmente UX deficitário na configuração inicial

**Issue #811 — Sub-agent com provedor OpenAI-compatível** (0 comentários)
- *Link:* https://github.com/nullclaw/nullclaw/issues/811
- *Autor:* reosablo
- *Contexto:* Falha ao comunicar com sub-agents via `--agent` CLI flag usando provedor customizado, com erro `error.CompatibleApiError`
- *Relevância:* Problema de integração com ecossistema de provedores alternativos

**Tensão identificada:** Há demanda clara por melhor documentação de configuração de provedores de busca e suporte a providers OpenAI-compatíveis em sub-agents.

---

## 5. Bugs e Estabilidade

### Bugs Reportados

| Issue | Severidade | Status | Descrição |
|-------|------------|--------|-----------|
| [#811](https://github.com/nullclaw/nullclaw/issues/811) | **Alta** | Aberta | Sub-agent falha ao conectar com provedores OpenAI-compatíveis customizados |
| [#812](https://github.com/nullclaw/nullclaw/issues/812) | **Média** | Aberta | Busca na internet não funciona após seguir exemplos da documentação |

### Análise

- **Bug #811** é crítico pois afeta caso de uso de extensibilidade com provedores alternativos — setor em crescimento na comunidade
- **Bug #812** indica possível gap entre documentação e comportamento real, impactando onboarding de novos usuários
- **Sinais positivos:** As correções nos PRs [#813](https://github.com/nullclaw/nullclaw/pull/813), [#814](https://github.com/nullclaw/nullclaw/pull/814) e [#815](https://github.com/nullclaw/nullclaw/pull/815) parecem abordar problemas subjacentes relacionados

---

## 6. Pedidos de Features e Sinais de Roadmap

### PR em Desenvolvimento

**[#783](https://github.com/nullclaw/nullclaw/pull/783) — Cron Subagent Engine** (yanggf8)
- Scheduler DB-backed com tabela `cron_runs` e worker `cron_run_queue`
- Tipos de job: skill, agent e shell
- Timezone offsets por job
- Output JSON para CLI: `cron list --json`, `cron schedule --json`
- Security hardening

**Sinal de roadmap:** A feature de cronjobs demonstra direção hacia automação e scheduled tasks — caso de uso corporativo relevante.

### Demanda Implícita

- Melhoria na UX de configuração de search providers (issue #812)
- Suporte robusto a provedores OpenAI-compatíveis em sub-agents (issue #811)

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Dor | Origem | Severidade |
|-----|--------|------------|
| "Internet search não funciona seguindo documentação" | uMendex (#812) | Média-Alta |
| "Sub-agent com provedor customizado falha com CompatibleApiError" | reosablo (#811) | Alta |

### Padrões

- **Onboarding deficiente:** Usuário novo (uMendex) enfrenta barreira imediata ao tentar feature core
- **Integração com ecossistema:** Usuário advanced (reosablo) enfrenta barreira ao estender com provedores alternativos
- **Satisfação com estrutura:** uMendex menciona que NullClaw "parece muito organizado" — percepção positiva do código base

---

## 8. Backlog que Merece Atenção

### Issue Sem Resposta

| Issue | Idade | Sem Comentários | Prioridade |
|-------|-------|-----------------|------------|
| [#811](https://github.com/nullclaw/nullclaw/issues/811) | 1 dia | Sim | **Alta** |

### Ação Recomendada

A issue [#811](https://github.com/nullclaw/nullclaw/issues/811) foi criada em 2026-04-13 e não recebeu resposta técnica. Dada a severidade alta (bloqueia uso de sub-agents com provedores customizados), recomenda-se triagem imediata pela equipe de manutenção.

---

## Saude Geral do Projeto

| Indicador | Status | Observacao |
|-----------|--------|------------|
| Atividade recente | 🟡 Moderada | 6 items em 24h |
| Releases recentes | 🔴 Parado | 0 nas ultimas 24h |
| Divida tecnica | 🟢 Baixa | PRs de fix em curso |
| Engagement comunidade | 🟡 Medio | 2 bugs reportados, 1 PR ativo |
| Tempo de resposta | 🟡 Atencao | Issue #811 sem resposta |

**Veredito:** Projeto ativo com manutencao responsiva. Recomenda-se priorizar release包含了 as correcoes #813, #814, #815 para enderecar bugs reportados e melhorar a experiencia de onboarding.

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo do Ecossistema Open Source de Agentes de IA

## Data de Referência: 2026-04-14

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **alta atividade transversal** em 14 de abril de 2026, com mais de 300 issues e 320 PRs consolidados entre os sete projetos monitorados. A maioria dos projetos encontra-se em fase de **estabilização pré-release** — NullClaw, IronClaw e PicoClaw preparam lançamentos contendo correções críticas de segurança e funcionalidades de multi-usuário. NanoBot destaca-se pelo melhor índice de resolução (72%), enquanto ZeroClaw apresenta o maior volume de bugs críticos (10 issues S0/S1). A tendência dominante é a convergência para **arquiteturas multi-canal** com suporte a provedores OpenAI-compatíveis, embora a fragmentação de configurações e a instabilidade em plataformas específicas (DingTalk, Matrix, WeChat) persistam como desafios comuns.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | Releases | Resolution Rate | Saúde Geral |
|---------|:------------:|:---------:|:--------:|:---------------:|:-----------:|
| **NanoBot** | 67 | 76 | 0 | **72%** ✅ | Excelente |
| **NullClaw** | 2 | 4 | 0 | N/A | Moderada |
| **Hermes Agent** | 50+ | 50+ | 0 | N/A | Alta (com atenção) |
| **PicoClaw** | 11 | 46 (16 merged) | 1 nightly | N/A | Pré-release |
| **IronClaw** | 50 | 50 | 0 | N/A | QA intensiva |
| **CoPaw/QwenPaw** | 47 | 44 | **2** ✅ | N/A | Transição de marca |
| **ZeroClaw** | 50 | 50 | 0 | N/A | ⚠️ Crítica |

**Observações:**
- NanoBot lidera em volume absoluto de atividade com a melhor taxa de resolução documentada
- CoPaw/QwenPaw é o único projeto com **release formalizada** (v1.1.1), demonstrando maturidade no ciclo de release
- ZeroClaw apresenta 10 bugs S0/S1 em aberto — o maior risco operacional do ecossistema
- PicoClaw segue com nightly builds automatizados, sinalizando disciplina de CI/CD

---

## 3. Posicionamento do Projeto Principal

### NanoBot — Líder em Volume e Maturidade Operacional

| Dimensão | NanoBot | Média do Ecossistema |
|----------|---------|----------------------|
| Atividade (issues+PRs) | **143** | ~43 |
| Resolution rate | **72%** | ~50% (estimado) |
| Integrações de canal | Slack, Feishu, Telegram, Matrix, Discord | 3-5 canais |
| Features em progresso | 7+ (SelfTool v2, LangSmith, model switching) | 2-3 |
| Bugs críticos abertos | **2** | 4-5 |

**Vantagens técnicas:**
- Suporte multi-canal mais maduro do ecossistema
- Pipeline de observabilidade completo (LangSmith) em desenvolvimento
- Compressão inteligente de contexto via LLM (#3142) — diferenciação técnica significativa
- Runtime model switching (#3135) sem restart do gateway

**Diferenças técnicas:**
- Arquitetura orientada a **gateway centralizado** com workers cron e heartbeat
- Storage de sessão em JSONL (`.jsonl`) com estratégia de rotação mencionada
- self-hosting prioritário (Ollama, vLLM, Home Assistant)

---

## 4. Focos Técnicos Compartilhados

Os sete projetos demonstram convergência em **cinco necessidades técnicas emergentes**:

### 4.1 Suporte Multi-Canal e Webhook
| Projeto | Status | Problemas Reportados |
|---------|--------|---------------------|
| Hermes Agent | 🔴 Crítico | 6+ bugs no adaptador DingTalk; Matrix não responde |
| IronClaw | 🟠 P2 | Google Sheets OAuth, Twitter/X, Telegram tool install |
| NanoBot | 🟢 Resolvido | Telegram streaming card (resolvido em #3133) |
| CoPaw/QwenPaw | 🔴 Alta | Feishu WebSocket crash multi-agente; WeChat truncado |
| ZeroClaw | 🔴 S0/S1 | Feishu ignora `mention_only`; Nextcloud Talk draft-update |

**Conclusão:** A integração com canais enterprise (DingTalk, Feishu, WeChat) é a área mais problemática do ecossistema. A padronização de adaptadores beneficiaria todos os projetos.

### 4.2 Custos de Tokens e Compressão de Contexto
- **NanoBot #2375:** Heartbeat sessions consomem **560k tokens/execução**
- **Hermes Agent:** 4 PRs simultâneos de compressor de contexto (#9665, #9666, #9669, #9661)
- **CoPaw:** Dashboard de estatísticas de tokens em desenvolvimento (#3365)
- **ZeroClaw:** História pruning em sessão (#5167)

**Conclusão:** A otimização de contexto é prioridade universal. Soluções baseadas em LLM para summarization (Hermes, NanoBot) são a tendência emergente.

### 4.3 Provedores OpenAI-Compatíveis
- **NullClaw #811:** Falha com provedores customizados via CLI `--agent`
- **NullClaw #812:** Busca na internet não funciona com config
- **NanoBot #2185:** Regressão com Gemini via OpenAI-compatible API
- **CoPaw/QwenPaw:** OpenRouter provider nativo com descoberta de modelos (#1192)
- **ZeroClaw:** Manifest Router provider (#5730)

**Conclusão:** A camada de abstração de provedores é frágil. Cada projeto implementa sua própria lógica de normalização com resultados inconsistentes.

### 4.4 Multi-Usuário e Isolamento de Segurança
| Projeto | Feature | Status |
|---------|---------|--------|
| PicoClaw | Multi-user + skills whitelisting | PR #2313 em revisão |
| IronClaw | Scope grants + cross-tenant isolation | PR #2381 (HIGH risk) |
| CoPaw | Memory per-user separation | Issue #352 (8 comentários) |
| ZeroClaw | Multi-instance config paths | Bug #5605 (S0) |

**Conclusão:** O isolamento multi-tenant é incipiente em todos os projetos, com risks de segurança documentados (IronClaw #2381, ZeroClaw #5528).

### 4.5 Cron Jobs e Tarefas Agendadas
- **NullClaw:** Cron subagent DB-backed em desenvolvimento (#783)
- **NanoBot:** Cron tasks com sessão própria (#3123)
- **PicoClaw:** Scheduled tasks falham (#2468) — PR #2520 em correção
- **CoPaw:** Scheduled task 422 error (#3379) — **resolvido**
- **ZeroClaw:** Trigger manual de cron (#5501) solicitado

**Conclusão:** A funcionalidade de scheduler está em estágio inicial com falhas frequentes. A padronização de padrões de execução (agente vs. shell) beneficiaria a interoperabilidade.

---

## 5. Análise de Diferenciação

### Por Arquitetura

| Projeto | Paradigma Arquitetural | Público-Alvo |
|---------|------------------------|--------------|
| **NullClaw** | Minimalista, CLI-first | Desenvolvedores avançados; extensibilidade via providers |
| **NanoBot** | Gateway centralizado + workers | Operações multi-canal; self-hosted |
| **Hermes Agent** | Plataforma adaptadora + compressor | Multi-plataforma enterprise; DingTalk/WeCom |
| **PicoClaw** | Skills registry + agent discovery | Usuários não-técnicos (roadmap WebUI) |
| **IronClaw** | Multi-tenant + OAuth nativo | Corporações; segurança cross-tenant |
| **CoPaw/QwenPaw** | Console-first + Mission Mode | Produtividade pessoal; modelos Qwen/Alibaba |
| **ZeroClaw** | Microkernel + WIT plugins | Desenvolvedores; arquitetura modular |

### Por Foco Estratégico

| Projeto | Diferenciador Principal | Métrica de Sucesso |
|---------|------------------------|-------------------|
| **NullClaw** | Extensibilidade de providers | Issue #811 resolvida |
| **NanoBot** | Observabilidade completa | LangSmith integration |
| **Hermes Agent** | Context window optimization | 4 PRs de compressor simultâneos |
| **PicoClaw** | Acessibilidade (WebUI) | Issue #806 (8 👍) |
| **IronClaw** | Segurança enterprise | PR #2381 merged |
| **CoPaw/QwenPaw** | Autonomia de agentes | Mission Mode (#3364) |
| **ZeroClaw** | Plugin ecosystem | WIT contracts (#5586) |

---

## 6. Tração e Maturidade da Comunidade

### Ranking de Engajamento (por volume de discussão)

| Posição | Projeto | Issue com Maior Discussão | Comentários |
|:-------:|---------|---------------------------|:-----------:|
| 1 | **CoPaw/QwenPaw** | Migração CoPaw→QwenPaw (#3288) | **32** |
| 2 | **NanoBot** | Heartbeat token cost (#2375) | 11 |
| 3 | **ZeroClaw** | Web dashboard unavailable (#4866) | 11 |
| 4 | **IronClaw** | HTTP tool routine error (#1676) | 10 |
| 5 | **Hermes Agent** | DingTalk multiple bugs | 6+ issues |

### Velocidade de Iteração

| Projeto | PRs Merged (24h) | Tempo de Ciclo Estimado | Fase |
|---------|:----------------:|:-----------------------:|------|
| **NanoBot** | 39 | Rápido | Expansão de features |
| **PicoClaw** | 16 | Moderado | Estabilização |
| **CoPaw/QwenPaw** | 20 | **Rápido** ✅ | Transição + feature |
| **ZeroClaw** | 8 | Moderado | Correção de bugs |
| **NullClaw** | 3 | Lento | Manutenção |
| **IronClaw** | 3 | Lento | QA pré-release |
| **Hermes Agent** | N/D | Variável | Correção de adaptadores |

**Observação:** CoPaw/QwenPaw demonstra a melhor velocidade de entrega com 20 merges + 2 releases em 24h, indicando equipe de tamanho adequado ou alta eficiência.

### Dívida Técnica Persistente

| Projeto | Issue Mais Antiga | Dias Aberto | Bloqueio |
|---------|-------------------|:-----------:|----------|
| **PicoClaw** | exec tool guardCommand (#1042) | **41** | Segurança |
| **IronClaw** | Onboard DB save (#846) | **35** | Onboarding |
| **ZeroClaw** | Better LOGO (#4710) | 20 | Design |
| **NanoBot** | Matrix channel (#1300) | **46** | Canal |
| **Hermes Agent** | Windows UnicodeDecodeError (#9633) | 1 | Windows |

---

## 7. Sinais de Tendência

### 7.1 Enterprise Multi-Channel como Expectativa
A demanda por DingTalk, Feishu, WeChat, Slack e Telegram simultaneamente indica que **agentes de IA são agora usados em contexto organizacional**, não apenas pessoal. A fragmentação de adaptadores (cada projeto reimplementa Channel API) é ineficiente.

### 7.2 Autonomia de Agentes de Longa Duração
- **CoPaw:** Mission Mode (#3364) — iteração autônoma
- **NullClaw:** Cron subagent com scheduler DB-backed
- **NanoBot:** SelfTool v2 para self-evolution

**Previsão:** O paradigma de "agente que executa tarefas de horas/dias" substituirá o modelo de "single-shot chat" em 6-12 meses.

### 7.3 Otimização de Contexto como Feature Competitiva
Com 3 projetos trabalhando simultaneamente em compressão de contexto, a capacidade de manter **conversas de 200+ rodadas** sem degradação será diferencial de mercado.

### 7.4 Self-Hosted e Local LLMs em Crescimento
- **PicoClaw:** Suporte a Intel OpenVINO (#2496)
- **NanoBot:** Ollama, vLLM, Home Assistant
- **ZeroClaw:** llama.cpp server (#5578)
- **CoPaw/QwenPaw:** OpenRouter + OpenCode providers

**Previsão:** A adoção de modelos locais (Qwen, Llama, DeepSeek) crescerá 40% em 2026, impulsionada por custo e privacidade.

### 7.5 Segurança Multi-Tenant é Requisito Emergencial
- IronClaw removendo fallbacks cross-tenant (#2381)
- PicoClaw com multi-user security hardening (#2313)
- CoPaw com memory per-user segregation (#352)

**Previsão:** O primeiro projeto a resolver isoladamente credenciais cross-user com **auditoria e RBAC** conquistará o mercado enterprise.

### 7.6 Transição de Marca como Risco de Retenção
CoPaw → QwenPaw demonstra que renomeação pode causar **fragmentação de comunidade** (32 comentários de migração). Projetos que alterarem nomes deberán investir heavily em tooling de migração.

---

## Recomendações Estratégicas

| Para | Recomendação | Prioridade |
|-----|--------------|:-----------:|
| **Decisores Técnicos** | Priorizar NanoBot ou CoPaw para novos projetos devido à velocidade de iteração e maturidade | Alta |
| **Desenvolvedores** | Contribuir para NullClaw se foco em extensibilidade de providers; evitar DingTalk no Hermes Agent | Média |
| **Empresas** | Aguardar IronClaw #2381 antes de deployment multi-tenant; monitorar PicoClaw #2313 | Alta |
| **Comunidade Open Source** | Propor SPEC unificado para Channel API e Provider normalization | Baixa (esforço colaborativo) |

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-04-14

---

## 1. Panorama do Dia

O projeto NanoBot apresenta **alta atividade comunitária** em 14 de abril de 2026, com 67 issues e 76 PRs atualizados nas últimas 24 horas. O índice de resolução de issues está excelente (~72%), demonstrando maturidade na operação do projeto. Não houve release formalizada, mas diversas PRs de recursos significativos foram merged, indicando avanço contínuo no nightly channel. A comunidade demonstra preocupação com **explosão de custo de tokens** em sessões heartbeat e regressões após upgrades de versão.

---

## 2. Lançamentos

**Nenhuma release formalizada nas últimas 24h.**

> ⚠️ **Observação crítica:** Issue [#2857](https://github.com/HKUDS/nanobot/issues/2857) reporta inconsistência de versão — `__init__.py` declara `0.4.1` enquanto `pyproject.toml` define `0.1.5`. Recomenda-se sincronização antes do próximo tagged release.

---

## 3. Progresso do Projeto

### PRs Merged/Closed Hoje

| PR | Título | Impacto |
|----|--------|---------|
| [#3138](https://github.com/HKUDS/nanobot/pull/3138) | feat(slack): resolve named message targets | Resolve targeting de canais/users via `#channel_name`, `@user` |
| [#3133](https://github.com/HKUDS/nanobot/pull/3133) / [#3134](https://github.com/HKUDS/nanobot/pull/3134) | fix(feishu): remove resuming + streaming card fallback | Corrige perda silenciosa de respostas longas no Feishu |
| [#2625](https://github.com/HKUDS/nanobot/pull/2625) | feat: add HTTP health endpoint on gateway | Facilita discovery e monitoring em produção |
| [#3087](https://github.com/HKUDS/nanobot/pull/3087) | docs(mcp): add GitHub MCP setup example | Melhora DX para integração GitHub |
| [#2390](https://github.com/HKUDS/nanobot/pull/2390) | docs(provider): standardize provider naming | Consistência: `volcengine_coding_plan`, `byteplus_coding_plan` |
| [#2161](https://github.com/HKUDS/nanobot/pull/2161) | feat(web): browser workspace, scoped topic cron, runtime settings | Funcionalidades web para nightly |

### PRs Abertas de Alto Impacto

| PR | Título | Status |
|----|--------|--------|
| [#2521](https://github.com/HKUDS/nanobot/pull/2521) | feat(agent): add SelfTool v2 for agent self-evolution | **Em revisão — feature flags** |
| [#2938](https://github.com/HKUDS/nanobot/pull/2938) | feat(api): support file uploads via JSON base64 e multipart | Suporte a uploads (imagens, PDFs, DOCX, XLSX) |
| [#3140](https://github.com/HKUDS/nanobot/pull/3140) | feat: restore full-featured LangSmith integration | Observabilidade completa restaurada |
| [#3145](https://github.com/HKUDS/nanobot/pull/3145) | fix(agent): persist cross-channel messages into target session history | Evita perda de contexto inter-canais |
| [#3142](https://github.com/HKUDS/nanobot/pull/3142) | feat(runner): add soft consolidation to `_snip_history` | Compressão inteligente de contexto via LLM |
| [#3135](https://github.com/HKUDS/nanobot/pull/3135) | feat: runtime model switching via `/model` e `/compact` | Troca de modelo sem restart do gateway |
| [#3137](https://github.com/HKUDS/nanobot/pull/3137) | feat(skills): unified `manage_skill` tool | CRUD unificado para skills |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

1. **[#2375](https://github.com/HKUDS/nanobot/issues/2375)** — Heartbeat session history causa **560k tokens por execução** (11 comentários)
   - **Severidade:** Crítica — impacto direto em custo de API
   - Cenário: tarefas heartbeat executadas a cada 30min acumulam logs massivos em `heartbeat.jsonl`
   - Demanda: necessidade de estratégia de truncamento ou exclusão de sessões heartbeat

2. **[#2760](https://github.com/HKUDS/nanobot/issues/2760)** — Retry amplification triplica carga upstream (10 comentários)
   - Stacked retries entre app-layer e provider SDK causam cascata de requisições
   - Requer configuração explícita de `retry_mode` ou desabilitar retries internos de SDK

3. **[#1300](https://github.com/HKUDS/nanobot/issues/1300)** — Canal Matrix não inicializa (9 comentários)
   - Erro na inicialização do canal Matrix
   - Usuários com setup Matrix prejudicados sem workaround claro

4. **[#2185](https://github.com/HKUDS/nanobot/issues/2185)** — Regressão com gemini-3-flash-preview após upgrade (8 comentários)
   - Upgrade de 0.1.4 → 0.1.4post5 quebra uso de modelos Gemini via OpenAI-compatible API
   - Indicador de breaking changes em provedores não-standard

5. **[#2588](https://github.com/HKUDS/nanobot/issues/2588)** — Home Assistant knowledge (6 comentários)
   - Usuários não conseguem usar tools com modelos Qwen para controle de Home Assistant
   - Comparação com OpenClaw (funcional lá, quebrado aqui)

---

## 5. Bugs e Estabilidade

### 🔴 Críticos

| Issue | Descrição | Severidade |
|-------|-----------|------------|
| [#2375](https://github.com/HKUDS/nanobot/issues/2375) | Heartbeat consome 560k tokens/execução | **Crítica** — custo financeiro |
| [#2828](https://github.com/HKUDS/nanobot/issues/2828) | DuckDuckGo search trava sistema inteiro | **Crítica** — estabilidade |
| [#2868](https://github.com/HKUDS/nanobot/issues/2868) | `exec` tool força bash no Windows | **Alta** — quebra platform |
| [#3143](https://github.com/HKUDS/nanobot/issues/3143) | LLM error code 1214 ("messages parameter illegal") | **Alta** — falha frequente |

### 🟡 Significativos

| Issue | Descrição |
|-------|-----------|
| [#1300](https://github.com/HKUDS/nanobot/issues/1300) | Canal Matrix não inicia |
| [#2185](https://github.com/HKUDS/nanobot/issues/2185) | Regressão gemini-3-flash-preview |
| [#2570](https://github.com/HKUDS/nanobot/issues/2570) | Ollama local retorna 404 — gateway não escuta porta |
| [#2559](https://github.com/HKUDS/nanobot/issues/2559) | Telegram streaming: `Message_too_long` |
| [#2713](https://github.com/HKUDS/nanobot/issues/2713) | Response speed degrades em post6 vs post4 |

### 🔧 Correções Recentes em Estabilidade

- **Telegram empty response:** [#100](https://github.com/HKUDS/nanobot/issues/100) — `BadRequest: Message text is empty` agora tratado
- **Feishu streaming card:** [#3133](https://github.com/HKUDS/nanobot/pull/3133) — removing resuming logic para evitar timeout

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features em Pipeline

| PR/Issue | Feature | Demanda |
|----------|---------|---------|
| [#2599](https://github.com/HKUDS/nanobot/issues/2599) | Official subagent configuration | Multi-model orchestration |
| [#3123](https://github.com/HKUDS/nanobot/issues/3123) | Cron tasks com sessão própria (não cron session) | User interaction pós-cron |
| [#2984](https://github.com/HKUDS/nanobot/issues/2984) | Automatic Context Compression | Lidar com contexto overflow |
| [#2602](https://github.com/HKUDS/nanobot/issues/2602) | HTTP Streaming Channel para multi-tenant | Escalabilidade |
| [#2685](https://github.com/HKUDS/nanobot/issues/2685) | Log rotation diário no gateway | Operações/produção |
| [#2849](https://github.com/HKUDS/nanobot/issues/2849) | Suporte a `${VAR}` environment variable syntax | DX para configuração |

### Features Implementadas (em progresso)

- **SelfTool v2** ([#2521](https://github.com/HKUDS/nanobot/pull/2521)) — auto-inspeção e modificação de runtime state
- **File upload API** ([#2938](https://github.com/HKUDS/nanobot/pull/2938)) — base64 + multipart
- **Runtime model switching** ([#3135](https://github.com/HKUDS/nanobot/pull/3135)) — `/model` e `/compact` commands
- **Soft context consolidation** ([#3142](https://github.com/HKUDS/nanobot/pull/3142)) — LLM-based summarization
- **LangSmith observability** ([#3140](https://github.com/HKUDS/nanobot/pull/3140)) — full tracing pipeline

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais

1. **Custo de tokens inesperado:** Heartbeat sessions acumulando logs e consumindo tokens em excesso ([#2375](https://github.com/HKUDS/nanobot/issues/2375))
2. **Incompatibilidade pós-upgrade:** Regressões ao migrar entre versões post4→post6 ([#2185](https://github.com/HKUDS/nanobot/issues/2185), [#2713](https://github.com/HKUDS/nanobot/issues/2713))
3. **DX fragmentado:** Configuração de providers não padronizada, falta de suporte a variáveis de ambiente
4. **Estabilidade em produção:** DuckDuckGo hang, Telegram streaming issues
5. **Integração com Home Assistant:** Ferramentas não funcionam com modelos Qwen locais

### Cenários de Uso Reportados

- **Automação corporativa:** Integração Feishu para equipes (China-based)
- **Multi-canal:** Telegram + Matrix + Slack + Discord simultaneamente
- **Self-hosted agents:** Ollama local, Home Assistant control
- **Multi-tenant gateways:** Docker-per-user deployments
- **Cron jobs:** Tarefas agendadas para monitoramento de email, clima, etc.

### Pontos Positivos (sinais de satisfação)

- Issue resolution rate alto (~72%)
- Comunidade ativa em múltiplos PRs simultâneos
- Contribuições de features significativas (SelfTool, LangSmith, model switching)

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta / Abandonadas

| Issue | Título | Tempo Sem Resposta | Prioridade |
|-------|--------|-------------------|------------|
| [#1300](https://github.com/HKUDS/nanobot/issues/1300) | Canal Matrix não funciona | ~46 dias | **Alta** |
| [#2185](https://github.com/HKUDS/nanobot/issues/2185) | Regressão Gemini | ~28 dias | **Alta** |
| [#2570](https://github.com/HKUDS/nanobot/issues/2570) | Ollama 404 local | ~18 dias | **Média** |
| [#2599](https://github.com/HKUDS/nanobot/issues/2599) | Subagents config | ~17 dias | **Média** |

### Recomendações para Maintainers

1. **Priorizar [#2375](https://github.com/HKUDS/nanobot/issues/2375):** Implementar truncamento ou filtro para sessões heartbeat
2. **Revisar [#1300](https://github.com/HKUDS/nanobot/issues/1300):** Matrix channel é feature request antiga com 9+ comentários sem triagem
3. **Investigar [#3143](https://github.com/HKUDS/nanobot/issues/3143):** Erro de "messages parameter illegal" indica problema de tokenização/chunking
4. **Padronizar versionamento:** Sincronizar [#2857](https://github.com/HKUDS/nanobot/issues/2857) antes do próximo release

---

## Saúde Geral do Projeto

| Indicador | Valor | Status |
|-----------|-------|--------|
| Issues fechadas (24h) | 48/67 (71.6%) | ✅ Excelente |
| PRs mergeadas (24h) | 39/76 (51.3%) | ✅ Bom |
| Releases (24h) | 0 | ⚠️ Sem tagged release |
| Bugs críticos abertos | 2 | ⚠️ Requer atenção |
| Features implementadas | 7+ em progresso | ✅dinâmica |

**Veredicto:** NanoBot demonstra saúde comunitária sólida com alta atividade de PRs e resolution rate. Os principais riscos são **estabilidade de produção** (DuckDuckGo hang, heartbeat tokens) e **regressões de upgrade**. O roadmap para nightly inclui features ambiciosas (SelfTool v2, LangSmith, model switching) que devem endereçar demandas de observabilidade e flexibilidade.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório Hermes Agent — 14 de Abril de 2026

## 1. Panorama do Dia

O ecossistema Hermes Agent apresenta **alta atividade de desenvolvimento** em 14 de abril de 2026, com 50+ PRs e dezenas de issues. O foco dominante são correções de bugs em adaptadores de plataformas (DingTalk, Slack, Matrix, WeCom), além de melhorias no compressor de contexto e configurações de plataforma. A comunidade está ativamente reportando problemas de estabilidade e sugerindo features, indicando um projeto maduro com base de usuários engajada.

---

## 2. Lançamentos

**Nenhum release formal registrado hoje.** O desenvolvimento segue em ritmo intenso com correções sendo merged diretamente na main branch.

> ⚠️ **Recomendação:** Dado o volume de mudanças, considera-se发布 uma versão patch (e.g., v1.x.y) para consolidar as correções de bugs dos adaptadores.

---

## 3. Progresso do Projeto

### PRs Importantes Merged/Closed

| PR | Título | Impacto |
|---|---|---|
| [#7444](https://github.com/NousResearch/hermes-agent/pull/7444) | Fix: opencode-zen model name + smart Discord threading | ✅ Corrigido |
| [#9643](https://github.com/NousResearch/hermes-agent/pull/9643) | Fix CLI: Add newline antes do closing stream box | ✅ Corrigido (CJK/emoji clipping) |
| [#8154](https://github.com/NousResearch/hermes-agent/pull/8154) | fix: add git to Dockerfile apt dependencies | ✅ Corrigido |

### PRs Abertos de Alto Impacto

| PR | Título | Status |
|---|---|---|
| [#9658](https://github.com/NousResearch/hermes-agent/pull/9658) | feat: add CrofAI provider (GLM 5.1, Kimi K2.5, DeepSeek V3.2) | 🆕 Novo provider |
| [#9667](https://github.com/NousResearch/hermes-agent/pull/9667) | feat(wecom): progressive native streaming | ✨ Enhancement |
| [#9670](https://github.com/NousResearch/hermes-agent/pull/9670) | fix: invalidate update check cache when HEAD moves | 🐛 Bug fix |
| [#9665](https://github.com/NousResearch/hermes-agent/pull/9665) | feat(compressor): preserve user messages verbatim | ✨ Enhancement |
| [#9661](https://github.com/NousResearch/hermes-agent/pull/9661) | feat(compressor): smart tool output collapse | ✨ Enhancement |
| [#9663](https://github.com/NousResearch/hermes-agent/pull/9663) | feat(compressor): structured action-log summary format | ✨ Enhancement |

---

## 4. Temas Quentes da Comunidade

### 🔥 DingTalk Adapter — Issue Central (#5037, #6986, #7005, #8811, #8816, #9149)

**Volume:** 6+ issues abertas, múltiplos PRs

**Demandas identificadas:**
- Múltiplos bugs críticos impedem processamento de mensagens
- `DingTalkStreamClient.start()` com wrapper incorreto de async
- `TimeoutError` e loops infinitos de reconexão
- Falta suporte a envio de arquivos/imagens
- Erro "No messaging platforms enabled" mesmo com DingTalk configurado

**Análise:** O adaptador DingTalk é atualmente a área mais problemático do projeto, com bugs que afetam usabilidade básica.

### 💬 Context Compression Improvements (#9666, #9669)

**Volume:** 4 PRs relacionados

**Demandas:**
- Preservar mensagens de usuário verbatim durante compressão
- Summary format estruturado (machine-parseable)
- Smart tool output collapse durante pruning
- Iterative compaction mantém topics antigos vivos

### 🔧 Configuração e Setup (#9635, #9636, #9657, #9655)

**Volume:** 4 issues relacionados

**Demandas:**
- `personalities` e `prefill_messages_file` no root-level ignorados pelo CLI
- Inconsistência entre schema canônico e loaders runtime

---

## 5. Bugs e Estabilidade

### Severidade: 🔴 Crítica

| Issue | Descrição | Plataforma |
|---|---|---|
| [#5037](https://github.com/NousResearch/hermes-agent/issues/5037) | DingTalk adapter múltiplos bugs — mensagens não processadas | DingTalk |
| [#6986](https://github.com/NousResearch/hermes-agent/issues/6986) | DingTalk adapter TimeoutError + loops infinitos | DingTalk |
| [#9571](https://github.com/NousResearch/hermes-agent/issues/9571) | GLM 5.1 reasoning content vazio (max_tokens=30) | Provider |
| [#9647](https://github.com/NousResearch/hermes-agent/issues/9647) | delegate_task ignora max_api_retries config | Core |

### Severidade: 🟠 Alta

| Issue | Descrição | Plataforma |
|---|---|---|
| [#7914](https://github.com/NousResearch/hermes-agent/issues/7914) | Matrix recebe mas não responde mensagens | Matrix |
| [#9633](https://github.com/NousResearch/hermes-agent/issues/9633) | UnicodeDecodeError em read_file no Windows | Windows |
| [#6572](https://github.com/NousResearch/hermes-agent/issues/6572) | Slack reaction_added "Unhandled request" warnings | Slack |

### Severidade: 🟡 Média

| Issue | Descrição | Plataforma |
|---|---|---|
| [#7143](https://github.com/NousResearch/hermes-agent/issues/7143) | Slack group messages não enviam | Slack |
| [#8293](https://github.com/NousResearch/hermes-agent/issues/8293) | Skills via symlink omitidos de skills_list | CLI |
| [#5109](https://github.com/NousResearch/hermes-agent/issues/5109) | launchd pode iniciar gateway duplicado | macOS |
| [#9641](https://github.com/NousResearch/hermes-agent/issues/9641) | Descrição errada para byterover em memory setup | CLI |

---

## 6. Pedidos de Features e Sinais de Roadmap

### ✨ Novas Features Propostas

| Issue/PR | Feature | Prioridade Estimada |
|---|---|---|
| [#9656](https://github.com/NousResearch/hermes-agent/issues/9656) | Echo transcript de voice message para usuário | Média |
| [#9645](https://github.com/NousResearch/hermes-agent/issues/9645) | Proactive check-ins configuráveis (off by default) | Média |
| [#9644](https://github.com/NousResearch/hermes-agent/issues/9644) | Provider/model selection para Media Creation | Alta |
| [#9628](https://github.com/NousResearch/hermes-agent/issues/9628) | Configurable message timestamp prefix | Baixa |
| [#9149](https://github.com/NousResearch/hermes-agent/issues/9149) | File/image sending para DingTalk | Alta |
| [#9431](https://github.com/NousResearch/hermes-agent/issues/9431) | Adicionar qrcode como dependência opcional para WeChat | Média |

### 🔮 Sinais de Roadmap

1. **Consolidação de adaptadores de plataforma** — múltiplas issues indicam necessidade de padronização
2. **Melhorias de context window** — 4 PRs de compressor em paralelo sugere foco em conversas longas
3. **Multi-provider para mídia** —用户提供者 inginham escolher provider para geração de mídia

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Categoria | Feedback | Frequência |
|---|---|---|
| **Setup Complexo** | "One-click installation" não funciona — WARNING de plataformas não habilitadas | 🔴 Alta |
| **Estabilidade DingTalk** | Mensagens recebidas mas nunca processadas, timeout e reloop | 🔴 Alta |
| **Configuração Inconsistente** | mesmo config.yaml funciona em gateway mas não CLI | 🟠 Média |
| **Windows compatibility** | Arquivos .txt não são lidos (encoding issue) | 🟠 Média |
| **macOS launchd** | Gateway inicia duplicado após restart | 🟡 Baixa |

### Cenários de Uso Reportados

- **Onboarding:** Usuários novos enfrentando барьеры na configuração inicial
- **Long-lived sessions:** Agent perde noção de data/hora após 24-48h
- **Multi-platform:** Usuários configurando DingTalk + Slack simultaneamente

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta / Abandono

| Issue | Idade | Título | Prioridade |
|---|---|---|---|
| [#9669](https://github.com/NousResearch/hermes-agent/issues/9669) | Hoje | Hermes-Agent technical exchange group | ⚠️ Não é bug |
| [#9027](https://github.com/NousResearch/hermes-agent/issues/9027) | 1 dia | Dependency audit: security fixes | 🔴 Alta |
| [#6621](https://github.com/NousResearch/hermes-agent/issues/6621) | 5 dias | mixture_of_agents dead model + max_tokens | 🟠 Alta |
| [#9631](https://github.com/NousResearch/hermes-agent/issues/9631) | Hoje | Iterative compaction summary issues | 🟡 Média |

### PRs Aguardando Review

| PR | Age | Título | Impacto |
|---|---|---|---|
| [#9658](https://github.com/NousResearch/hermes-agent/pull/9658) | Hoje | feat: CrofAI provider | 🟢 Adiciona modelos |
| [#9667](https://github.com/NousResearch/hermes-agent/pull/9667) | Hoje | feat(wecom): progressive streaming | 🟢 UX improvement |
| [#9670](https://github.com/NousResearch/hermes-agent/pull/9670) | Hoje | fix: update check cache invalidation | 🟢 UX fix |

---

## Conclusão: Saúde do Projeto

| Dimensão | Status | Notas |
|---|---|---|
| **Atividade** | ✅ Alta | 50+ PRs, dezenas de issues em um dia |
| **Estabilidade** | ⚠️ Atenção | Bugs críticos em DingTalk necessitam resolução urgente |
| **Community Engagement** | ✅ Excelente | Múltiplos contribuidores, issues bem documentados |
| **Technical Debt** | ⚠️ Moderado | Config schema inconsistencies, Windows compatibility |
| **Security** | 🔴 Atenção | Audit pending (#9027) — patches necessários |

**Recomendação Prioritária:** Priorizar review/merge dos PRs de DingTalk (#8811, #9149) e security audit (#9027) antes do próximo release.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório de Projeto: PicoClaw
**Data de Referência:** 2026-04-14 | **Fonte:** github.com/sipeed/picoclaw

---

## 1. Panorama do Dia

O projeto PicoClaw mantém um **ritmo de desenvolvimento intenso** com 46 PRs atualizados nas últimas 24h (16 merged/fechados) e 11 issues abertas. A atividade indica uma fase de estabilização pré-release, com múltiplas correções de bugs críticas em tramitação simultânea. Destaca-se a publicação do nightly build `v0.2.6-nightly.20260414.f82fe5a2`, sinalizando avanços na versão 0.2.6. A comunidade demonstra particular interesse em funcionalidades de agentes (roadmap de Phase 2) e melhorias de estabilidade em plataformas específicas como OpenWrt ARM64.

---

## 2. Lançamentos

### Release Mais Recente
| Item | Detalhes |
|------|----------|
| **Versão** | `nightly: v0.2.6-nightly.20260414.f82fe5a2` |
| **Tipo** | Automated nightly build |
| **Status** | ⚠️ Unstable - uso em produção desaconselhado |
| **Changelog** | [compare/v0.2.6...main](https://github.com/sipeed/picoclaw/compare/v0.2.6...main) |

**Notas:**
- Build automatizado do branch `main`
- Não há changelog formal detalhado para esta versão específica
- Recomenda-se acompanhar os PRs merged para identificar mudanças relevantes

---

## 3. Progresso do Projeto

### PRs Fechados/Merged Hoje (16 total)

| PR | Título | Impacto | Link |
|----|--------|---------|------|
| #2521 | Update WeChat QR code image | Documentation | [#2521](https://github.com/sipeed/picoclaw/pull/2521) |
| #2518 | Update wechat qrcode | Documentation | [#2518](https://github.com/sipeed/picoclaw/pull/2518) |
| #2516 | Disable scheduled sync-rebase trigger | CI/CD | [#2516](https://github.com/sipeed/picoclaw/pull/2516) |
| #2442 | Refactor skills registries + GitHub discovery | Skills infrastructure | [#2442](https://github.com/sipeed/picoclaw/pull/2442) |
| #2249 | Refactor inbound context routing session | Agent architecture | [#2249](https://github.com/sipeed/picoclaw/pull/2249) |
| #2489 | Reinitialize MCP and discovery tools after reload | Bug fix (regression) | [#2489](https://github.com/sipeed/picoclaw/pull/2489) |
| #2116 | Add load_image tool for local file vision | Vision capability | [#2116](https://github.com/sipeed/picoclaw/pull/2116) |
| #2512 | Use pnpm/action-setup in CI workflows | DevOps optimization | [#2512](https://github.com/sipeed/picoclaw/pull/2512) |

### PRs Abertos de Maior Relevância Técnica

| PR | Título | Domínio | Link |
|----|--------|---------|------|
| #2313 | Multi-User Support, Security Hardening, Skills whitelisting | Security | [#2313](https://github.com/sipeed/picoclaw/pull/2313) |
| #2503 | Agent loop support parallel processing | Agent architecture | [#2503](https://github.com/sipeed/picoclaw/pull/2503) |
| #1586 | Add Mattermost channel + gateway hardening | Channel integration | [#1586](https://github.com/sipeed/picoclaw/pull/1586) |
| #2496 | Add Intel OpenVINO Model Server support | Provider (LLM) | [#2496](https://github.com/sipeed/picoclaw/pull/2496) |

**Avanços Notáveis:**
- **Skills Registry v2 (#2442):** Refatoração para modelo multi-registry com suporte nativo a GitHub como fonte de skills
- **Bug fix crítico (#2489):** Correção de regressão onde MCP tools e BM25 discovery desapareciam após `/reload`
- **Load Image tool (#2116):** Capacidade de análise de imagens locais via pipeline MediaStore

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| Issue | Título | Tipo | 👍 | 💬 | Link |
|-------|--------|------|----|----|------|
| #806 | [Roadmap] Feature: Add webUI support | Enhancement (High Priority) | 8 | 8 | [#806](https://github.com/sipeed/picoclaw/issues/806) |
| #2148 | Phase 2: Agent Discovery → Delegation | Roadmap | 0 | 3 | [#2148](https://github.com/sipeed/picoclaw/issues/2148) |

### Análise de Demandas

**1. WebUI (#806) - 8 reactions, 8 comentários**
- **Demanda:** Interface web para reduzir barreira de entrada para usuários não-técnicos
- **Status:** Refactoring em andamento pelo autor Zepan
- **Relevância:** Feature estratégica para adoção em massa
- **Link:** [sipeed/picoclaw#806](https://github.com/sipeed/picoclaw/issues/806)

**2. Agent Discovery → Delegation Phase 2 (#2148)**
- **Demanda:** Implementação do plano de descoberta e delegação de agentes
- **Referência:** Counter-proposal para issue #1934
- **Link:** [sipeed/picoclaw#2148](https://github.com/sipeed/picoclaw/issues/2148)

**3. Integração com Provedores de Memória (#2515)**
- **Demanda:** Suporte a mem0, Supermemory, HydraDB
- **Autor:** omavashia2005
- **Link:** [sipeed/picoclaw#2515](https://github.com/sipeed/picoclaw/issues/2515)

**4. Segurança em acessos WebSocket de terceiros (#2499)**
- **Demanda:** Auth boundaries e política de compatibilidade para clientes externos
- **Link:** [sipeed/picoclaw#2499](https://github.com/sipeed/picoclaw/issues/2499)

---

## 5. Bugs e Estabilidade

### Issues Bug Reportadas Hoje (por severidade)

#### 🔴 Alta Severidade

| Issue | Título | Domínio | Criado | Link |
|-------|--------|---------|--------|------|
| #2468 | Scheduled Task Fails to Execute | Cron | 2026-04-10 | [#2468](https://github.com/sipeed/picoclaw/issues/2468) |
| #2488 | TCP connections fail on OpenWrt 23.05 ARM64 | Build/Config | 2026-04-12 | [#2488](https://github.com/sipeed/picoclaw/issues/2488) |
| #2513 | Gateway start abnormal | Channel | 2026-04-14 | [#2513](https://github.com/sipeed/picoclaw/issues/2513) |
| #2519 | Force setting workspace to default directory | Config/Tool | 2026-04-14 | [#2519](https://github.com/sipeed/picoclaw/issues/2519) |

#### 🟡 Média Severidade

| Issue | Título | Domínio | Criado | Link |
|-------|--------|---------|--------|------|
| #1042 | exec tool guardCommand method issue | Tool | 2026-03-04 | [#1042](https://github.com/sipeed/picoclaw/issues/1042) |

### Análise de Bugs Críticos

**#2468 - Tarefas Agendadas Falham**
```
ERR tool ... > Tool execution failed error="scheduling command execution is restricted to internal channels"
```
- **Problema:** Cron tasks não executam corretamente
- **PR Corretivo:** [#2520](https://github.com/sipeed/picoclaw/pull/2520) (fix: resolve cron task creation and execution failures)
- **Status:** PR aberto em 2026-04-14

**#2488 - Conexões TCP falham em OpenWrt ARM64**
- **Ambiente:** GL-BE9300 router, OpenWrt 23.05, aarch64
- **Sintoma:** launcher/gateway escutam mas não aceitam conexões
- **PR Corretivo:** [#2514](https://github.com/sipeed/picoclaw/pull/2514) (feat: add host overrides for launcher and gateway)
- **Status:** PR aberto com solução proposta

**#2519 - Escrita fora do Workspace**
- **Problema:** Sistema escreve em `/tmp` e outros diretórios externos
- **Impacto:** Centenas de erros "Command blocked by safety guard"
- **Demanda:** Forçar workspace como diretório padrão

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas (últimas 24h)

| # | Feature | Domínio | Prioridade | Link |
|---|---------|---------|------------|------|
| #2515 | Robust memory system (mem0, Supermemory, HydraDB) | Provider | Alta | [#2515](https://github.com/sipeed/picoclaw/issues/2515) |
| #2499 | Secure third-party WS access + versioned policy | Channel/Config | Alta | [#2499](https://github.com/sipeed/picoclaw/issues/2499) |
| #2493 | Multiple Feishu applications via separate configs | Channel | Média | [#2493](https://github.com/sipeed/picoclaw/issues/2493) |
| #2502 | `/btw` one-off side-question command | Agent | Média | [#2502](https://github.com/sipeed/picoclaw/pull/2502) |

### Tendências de Roadmap Identificadas

1. **Multi-Usuário e Segurança (#2313)**
   - Suporte a múltiplos usuários
   - Hardening de segurança
   - Skills whitelisting
   
2. **Expansão de Canais (#1586, #2493)**
   - Mattermost (PR #1586 em andamento)
   - Múltiplas instâncias Feishu

3. **Provedores de LLM (#2496)**
   - Suporte a Intel OpenVINO Model Server
   - Execução local em CPU/GPU/NPU Intel

4. **Melhorias de Agent Loop (#2503)**
   - Processamento paralelo de mensagens
   - Atualização de documentação

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Categoria | Problema | Frequência | Links |
|-----------|----------|------------|-------|
| **Segurança/Escopo** | Comandos bloqueados indevidamente pelo safety guard | Alta | [#1042](https://github.com/sipeed/picoclaw/issues/1042), [#2519](https://github.com/sipeed/picoclaw/issues/2519) |
| **Estabilidade de Plataforma** | Falhas em OpenWrt ARM64 | Relatada | [#2488](https://github.com/sipeed/picoclaw/issues/2488) |
| **Configuração** | Comportamento default de workspace inadequado | Relatada | [#2519](https://github.com/sipeed/picoclaw/issues/2519) |
| **Cron/Agendamento** | Tarefas agendadas não executam | Relatada | [#2468](https://github.com/sipeed/picoclaw/issues/2468) |

### Cenários de Uso Identificados

1. **Usuários não-técnicos** buscando interface web (WebUI)
2. **Deploy em routers** OpenWrt para automação residencial/corporativa
3. **Multi-conta** em plataformas como Feishu
4. **Integração corporativa** via Mattermost e Webhooks
5. **LLM local** com hardware Intel (OpenVINO)

### Observação Legal
- **#2506 - CLA irrelevante:** Contribuidor reporta que o Contributor License Agreement está entre contributor e "SAP", não com o projeto PicoClaw
- **Link:** [sipeed/picoclaw#2506](https://github.com/sipeed/picoclaw/issues/2506)

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta/Atendimento Prolongado

| # | Título | Criado | Dias | Status | Link |
|---|--------|--------|------|--------|------|
| #1042 | exec tool guardCommand method issue | 2026-03-04 | ~41 dias | Aberta | [#1042](https://github.com/sipeed/picoclaw/issues/1042) |
| #806 | Add webUI support (Refactoring) | 2026-02-26 | ~47 dias | Aberta (em progresso) | [#806](https://github.com/sipeed/picoclaw/issues/806) |

### PRs Bloqueados ou Aguardando Review

| # | Título | Criado | Domínio | Link |
|---|--------|--------|---------|------|
| #2313 | Multi-User Support, Security Hardening | 2026-04-03 | Security | [#2313](https://github.com/sipeed/picoclaw/pull/2313) |
| #1586 | Mattermost channel | 2026-03-15 | Channel | [#1586](https://github.com/sipeed/picoclaw/pull/1586) |
| #2496 | Intel OpenVINO support | 2026-04-13 | Provider | [#2496](https://github.com/sipeed/picoclaw/pull/2496) |

### Recomendações de Priorização

1. **🔴 Crítico:** Resolver issues de segurança e stability (#2468, #2488, #2513) - afetam produção
2. **🟠 Alto:** Avançar no roadmap de Agent Phase 2 (#2148) - demanda comunidade
3. **🟡 Médio:** Clarificar situação do CLA (#2506) - risco legal para contributors
4. **🟢 Normal:** Continuar desenvolvimento WebUI (#806) - estratégia de adoção

---

## Métricas Resumidas do Dia

| Métrica | Valor |
|---------|-------|
| **Issues abertas/ativas** | 11 |
| **PRs abertos** | 30 |
| **PRs merged/fechados** | 16 |
| **Novas releases** | 1 (nightly) |
| **Bugs críticos reportados** | 4 |
| **Novas features solicitadas** | 4 |
| **Issues >30 dias sem resolução** | 1 (#1042) |

---

*Relatório gerado automaticamente com base em dados do GitHub de 2026-04-14.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório de Projeto — IronClaw
## Data: 2026-04-14 | Fonte: github.com/nearai/ironclaw

---

## 1. Panorama do Dia

O IronClaw manteve um nível de atividade muito elevado nas últimas 24h, com **50 issues e 50 PRs atualizados**, embora nenhuma nova release tenha sido publicada. A atividade é impulsionada por uma grande campanha de QA no staging ("crab shack"), que gerou múltiplos bugs reportados entre 09 e 10 de abril (Google Sheets OAuth, Twitter/X, Telegram tool install, MCP, Web UI file uploads, instance lifecycle), sinalizando uma fase intensiva de pré-lançamento. Do lado de desenvolvimento, PRs de alta prioridade estão em revisão —涵盖 desde credenciais cross-tenant (segurança), scope grants (multi-usuário), até UX para novos usuários — indicando que a equipe está focada tanto em solidez operacional quanto em acessibilidade.

---

## 2. Lançamentos

**Nenhuma release publicada hoje.** Este é um período de concentração de PRs em staging antes de um próximo release, conforme indica o PR de auto-promotion #2455.

---

## 3. Progresso do Projeto

Os PRs merged/closed abaixo representam avanços tangíveis:

| # | PR | Resumo | Impacto |
|---|----|--------|---------|
| **#1819** | fix: image generation with nearai models | Corrigedupla construção de URL (`/v1/v1/...`) e atualiza fallback para `black-forest-labs/FLUX.2-klein-4B`; handling end-to-end de imagens geradas | 🔧 Estabilidade — Imagem |
| **#2454** | fix(patch): feishu pairing | Corrige ativação/refresh de canal WASM usando `user_id` request-scoped em vez de global; remove mapeamento fixo de secrets Feishu | 🔒 Segurança — Canais |
| **#2455** | chore: promote staging to `86a9d0bd-24396179464` | Auto-promotion CI batch `a53eac5c2…86a9d0bd` | 🚀 Infra — CI |

**PRs em destaque em revisão (review ativo):**

- **#2459** `[size: XL]` feat(ci): AI-first CI workflows — Haiku-based 2-agent review (quality + security) em todos os PRs. Este é um PR de infraestrutura transformador que pode acelerar a qualidade geral do projeto.
- **#2458** `[size: XL]` fix: restore issue-2402 v2 gate resume and action alias consistency — Correção de regressão no engine v2 onde `ActionResult` call pairing era perdido com `pending.call_id` vazio.
- **#2434** `[size: XL]` fix(gateway): persist user messages at send time (#2409) — Resolve race condition onde `loadHistory()` não encontrava mensagens ao trocar threads no gateway web.
- **#2315** `[size: L]` fix(ux): actionable auth errors and improved CLI help for novos usuários (#1852) — Inclui guidance provider-specific com env var name, signup URL e hint para `ironclaw onboard --step provider`. Coberto por 4 novos testes.
- **#2313** `[size: L]` fix(config): env vars take precedence over DB-persisted LLM settings (#1680) — Corrige ordem de precedência (12-factor: env > DB > default), afeta Railway e plataformas similares.
- **#2381** `[size: L]` fix(security): remove cross-tenant credential fallbacks (#2068, #2069, #2100) — Remove fallbacks de credencial cross-tenant; `user_id` de `job_owner_cache` com DB fallback. **Risco: HIGH**. Essencial para isolamento multi-tenant.
- **#2168** `[size: L]` feat(credentials): path-based credential matching para auth per-endpoint — Adiciona `path_patterns` em `CredentialMapping` para secrets scoped a diferentes URL paths no mesmo host.
- **#2328** `[size: L]` fix: prevent immediate requests creating missions — Evita que requests foreground one-shot sejam convertidos em missions/routines sem intent gate determinístico.
- **#2457** `[size: S]` fix(oidc): make audience claim optional para OIDC-proxying load balancers — Corrige regressão de #1798 que exigia `aud` claim mandatório, quebrando deployments atrás de OIDC-proxy.
- **#2379** `[size: L]` fix(mcp): normalize server names, fix UTF-8 truncation, skip auth when header set — Três bugs MCP corrigidos: normalização de nomes, truncamento UTF-8, e skip de auth quando header já presente.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários)

| # | Título | Comentários | Reações | Tema central |
|---|--------|:-----------:|:-------:|--------------|
| **#1676** | [bug] Still http tool routine has error! telegram bot only half works | 10 | 0 | 🔴 Tool HTTP falha em rotina do Telegram |
| **#2229** | [bug] Google Sheets OAuth blocked: Error 400 invalid_request | 6 | 0 | 🔴 OAuth Google Sheets QA |
| **#2230** | [bug] Twitter/X connection unavailable — MCP requires manual browser cookie extraction | 4 | 0 | 🟡 Integração Twitter/X QA |
| **#1852** | should make it easy to use | 4 | 0 | 🟠 UX para não-técnicos |
| **#846** | `onboard` fails with "Failed to save settings to database" | 4 | 0 | 🟠 Setup/Database onboarding |
| **#1673** | Feishu/Lark Channel Stuck in "Awaiting Pairing" State | 3 | 3 | 🟢 Feishu/Lark corrigido (#2454) |
| **#84** | feat: Agent system advanced features (multi-agent, streaming, thinking modes) | 3 | 0 | 🔵 Feature parity roadmap |
| **#76** | feat: Discord channel integration | 2 | 2 | 🔵 Feature parity canal Discord |

**Análise:** O tema dominante é a **falha recorrente do tool HTTP** (#1676, 10 comentários), onde o usuário reporta que "openclaw knows how to do this perfect from day 1 but ironclaw still fails due to tool issue". Este é um problema antigo (março) que ainda não foi totalmente resolvido. O segundo tema quente são as **integrações OAuth de terceiros** (Google Sheets, Twitter/X) que falham em QA no staging — sinalizando que a equipe está em fase de validação de integrações antes de release.

---

## 5. Bugs e Estabilidade

### Por severidade (baseado em labels `P1`, `P2`, `risk`, `bug`)

| Severidade | Issues | Descrição |
|:----------:|:------:|-----------|
| **🔴 P1** | **#2437** | `nearai_chat` does not normalize tool schemas antes de enviar ao provider — ferramentas com `oneOf`/`anyOf`/`allOf`/`enum` falham com HTTP 400. Afeta ferramentas críticas como `github`. |
| **🔴 P1** | **#2450** | Image generation API retorna 404 — Model 'flux-1.1-pro' not found. Afeta caso de uso central. |
| **🟠 P2** | **#2229** | Google Sheets OAuth Error 400 invalid_request. QA staging. |
| **🟠 P2** | **#2230** | Twitter/X MCP requer manual cookie extraction. QA staging. |
| **🟠 P2** | **#2233** | Telegram tool install falha — WASM artifact missing in tar.gz. QA staging. |
| **🟠 P2** | **#2283** | Web UI não suporta file uploads. QA staging. |
| **🟠 P2** | **#2284** | Staging agent instance morre após 1h de inatividade. QA staging. |
| **🟠 P2** | **#2234** | MCP activation falha com "External service error" em múltiplos serviços. QA staging. |
| **🟠 P2** | **#2447** | Engine v2 aceita plain-text model response como final sem tool evidence em requests explícitos. |
| **🟠 P2** | **#2232** | Routines dashboard mostra contagem errada — apenas 1 de 4 routines visível. QA staging. |
| **🟡 P3** | **#2406** | Pages Unresponsive dialog e black screen crashes. UI stability. |
| **🟡 P3** | **#1339** | Compilação falha em Raspberry Pi armv7. |
| **🟡 P3** | **#2419** | `ironclaw status` não reporta canais WASM ativos corretamente. |

**Bugs recorrentes/herdados (abertos há >14 dias):**
- **#1676** (19 dias): HTTP tool rotina Telegram —仍未 resolvido
- **#846** (35 dias): Onboard falha ao salvar settings no DB —仍未 resolvido
- **#564** (40 dias): LLM response parsing — `reasoning_content` leakage, unclosed think tag — **closed 2026-04-14** ✓

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features abertas com maior relevância estratégica

| # | Feature | Escopo | Sinais de Roadmap |
|---|---------|--------|-------------------|
| **#84** | Agent system advanced features: multi-agent routing, global sessions, streaming, thinking modes | `agent` | Prioridade P2-P3 conforme `FEATURE_PARITY.md`. Issue central do roadmap. |
| **#1609** | Admin management panel — web UI para users, workspaces, roles e usage monitoring | `scope: channel/web` | Depende de Issues #1, #2, #3. Necessita UI após API-only de management. |
| **#2360** | feat(browser): built-in browser tool com chromiumoxide CDP e AX-tree element refs | `tool/builtin` | Depende de #2357, #2358, #2359. Adicionaria capacidade de JS-rendered web interaction. |
| **#76** | Discord channel integration | `channel` | Feature parity P2. Gateway system tracking em #30. |
| **#2023** | Kubernetes runtime support (alternativa a Docker) | `scope: sandbox` | Usuários enterprise pedindo suporte K8s para instâncias long-running. |
| **#48** | Implementing a guardrails model (granite-guardian, llama-guard) | `agent` | Pergunta sobre vulnerabilidade a prompt injection. Discussão de segurança. |
| **#30** | Gateway System feature parity tracking com OpenClaw | `channel/web` | Meta de paridade com OpenClaw. 9 sub-features. |
| **#2448** | Multiline support on TUI | `tui` | PR #2449 implementando isso já em revisão. |

**Sinais claros de roadmap:**
1. **Multi-usuário e RBAC** estão sendo priorizados com scope grants (#2421), admin panel (#1609) e RBAC (#1, #2, #3).
2. **Browser automation** (#2360) indica movimento para além de HTTP APIs — interação com páginas JS-rendered.
3. **Kubernetes** (#2023) sugere estratégia cloud-native mais ampla.
4. **UX para não-técnicos** (#1852, sendo adressado por #2315) indica foco em adoção massiva.
5. **AI-first CI** (#2459) mostra ambição de usar o próprio IronClaw para revisar seu código.

---

## 7. Resumo de Feedback dos Usuários

### Dores reais identificadas

| Dor | Evidência | Impacto |
|-----|-----------|---------|
| **Tool HTTP instável para integrações** | #1676: "openclaw knows how to do this perfect from day 1 but ironclaw still fails" | Usuários migrando de OpenClaw não consegue reproduzir funcionalidade básica |
| **Não é fácil de usar** | #1852: "majority of users are not IT technicians... for users to configure they have to find out where..." | Barreira de adoção para non-technical users |
| **Integração Telegram problemática** | #1676, #2233: tool install e polling falham | Caso de uso popular bloqueado |
| **Credenciais de terceiros não funcionam** | #2229 (Google OAuth), #2230 (Twitter/X), #2233 (Telegram) | Funcionalidade QA no staging está falhando em integrações OAuth comuns |
| **Onboarding falha em setup** | #846: "Failed to save settings to database" na etapa final | Usuários novos não conseguem começar |
| **Instabilidade do staging** | #2284 (morte após 1h), #2406 (crashes) | Equipe de QA perdendo tempo com instabilidade do ambiente |
| **Segurança cross-tenant** | #2381 (PR): fallbacks permitiam cross-user credential access | Usuários multi-tenant em risco |

### Cenários de uso evidenciados

- **Automation de redes sociais**: Twitter digest summarizing posts → Telegram (via #2230)
- **Produtividade office**: Google Sheets OAuth automation (#2229)
- **Agentes pessoais multi-canal**: Telegram + Web UI simultaneously (#2426)
- **Image generation**: flux-1.1-pro API (#2450, #1819)
- **Household/family sharing**: cross-user scope grants (#2421)
- **DevRel automation**: multi-line TUI para задачи GitHub (#2448, #2449)

---

## 8. Backlog que Merece Atenção

Issues sem atividade significativa ou sem resposta, ordenadas por tempo em aberto:

| # | Título | Criado | Atualizado | Dias | Prioridade | Ação Recomendada |
|---|--------|--------|-----------|:----:|:---------:|-----------------|
| **#846** | `onboard` fails with "Failed to save settings to database" | 2026-03-10 | 2026-04-13 | **35** | 🟠 | Priorizar; bloqueia novos usuários |
| **#1339** | Compilação falha em Raspberry Pi armv7 | 2026-03-18 | 2026-04-13 | **27** | 🟡 | Avaliar suporte ARM ou documentar limitações |
| **#1676** | HTTP tool routine error — telegram bot fails | 2026-03-26 | 2026-04-14 | **19** | 🔴 | Corrigir ou community

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório de Projeto: CoPaw / QwenPaw
## Data: 14 de abril de 2026

---

## 1. Panorama do Dia

O projeto CoPaw/QwenPaw atravessa uma fase de **alta intensidade de atividade e transição de marca**. Nas últimas 24 horas, foram registradas **47 issues** e **44 PRs**, indicando uma velocidade de desenvolvimento robusta. A equipe está finalizando a transição de marca (CoPaw → QwenPaw) com 2 releases (v1.1.1-beta.2 e v1.1.1), e a comunidade demonstra preocupação significativa com o processo de migração, refletido em múltiplas issues e PRs dedicados. O fluxo de PRs está saudável com 20 merges/fechamentos, sinalizando entregas consistentes, especialmente em melhorias de performance (início da aplicação) e funcionalidades de agentes autônomos.

---

## 2. Lançamentos

### v1.1.1 — Release estável

| Categoria | Detalhes |
|-----------|----------|
| **Providers e Modelos** | **OpenRouter Provider**: Provider nativo com descoberta de modelos, navegação de séries e filtragem por modalidade e preço ([#1192](https://github.com/agentscope-ai/QwenPaw/pull/1192)) |
| **Providers e Modelos** | **OpenCode Provider**: Provider OpenAI-compatível integrado |
| **Melhorias de Console** | Melhorias no modal de gerenciamento de providers/modelos com tags de capacidade e busca de modelos |

> ⚠️ **Nota de migração**: Usuários migrando de CoPaw para QwenPaw enfrentam problemas com `WORKING_DIR` apontando para diretório antigo (`.copaw` vs `.qwenpaw`), conforme reportado em [#3356](https://github.com/agentscope-ai/QwenPaw/issues/3356). A documentação de migração é considerada insuficiente pela comunidade.

### v1.1.1-beta.2 — Beta

Release interno focado em refatoração do console para gerenciamento de modelos. Sem breaking changes documentados.

---

## 3. Progresso do Projeto

### PRs Merged/Closed (20 total nas últimas 24h)

| PR | Título | Impacto |
|----|--------|---------|
| [#3379](https://github.com/agentscope-ai/QwenPaw/pull/3379) | Fix scheduled task 422 error | Correção de regressão crítica no console |
| [#3372](https://github.com/agentscope-ai/QwenPaw/pull/3372) | Remove duplicated base64 data (Anthropic) | Resolve erro "exceeding max bytes" em chamadas Multimodal |
| [#3367](https://github.com/agentscope-ai/QwenPaw/pull/3367) | Fix Anthropic provider multimodal probe | Estabilidade em provedores multimodais |
| [#3358](https://github.com/agentscope-ai/QwenPaw/pull/3358) | Support URLs for viewing media | `view_image`/`view_video` agora suportam mídia online |
| [#3359](https://github.com/agentscope-ai/QwenPaw/pull/3359) | Message normalization for model switching | Preserva memória multimídia ao trocar modelos do mesmo provider |
| [#3295](https://github.com/agentscope-ai/QwenPaw/pull/3295) | Omit tool_choice=auto for vLLM | Compatibilidade com deployments vLLM sem `--enable-auto-tool-choice` |

### PRs Em Progresso (Under Review / Abertos)

| PR | Título | Destaque |
|----|--------|----------|
| [#3386](https://github.com/agentscope-ai/QwenPaw/pull/3386) | Perf: Application startup optimization | **Redução de tempo de startup de ~4.5s para ~0.05s** via lazy loading e inicialização paralela |
| [#3385](https://github.com/agentscope-ai/QwenPaw/pull/3385) | Agent CLI && Local Agent Template | Sistema extensível de templates de agentes |
| [#3364](https://github.com/agentscope-ai/QwenPaw/pull/3364) | Mission Mode — autonomous iterative agent | Inspirado em Anthropic's "Effective Harnes for Long-Running Agents" |
| [#3348](https://github.com/agentscope-ai/QwenPaw/pull/3348) | Clear chat history on /clear | UX improvement para comando de limpeza |
| [#3257](https://github.com/agentscope-ai/QwenPaw/pull/3257) | Render approve buttons for tool guard | Converte `/approve` em botões clicáveis |
| [#3365](https://github.com/agentscope-ai/QwenPaw/pull/3365) | Agent Statistics page | Dashboard de métricas: chats, tokens, chamadas LLM/tool/skill |
| [#3371](https://github.com/agentscope-ai/QwenPaw/pull/3371) | `qwenpaw doctor` CLI | Ferramenta de diagnóstico integrada |
| [#3340](https://github.com/agentscope-ai/QwenPaw/pull/3340) | ACP external agent delegation | Integração com agentes externos via ACP |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| Issue | Título | Comentários | Tema Principal |
|-------|--------|-------------|----------------|
| [#2291](https://github.com/agentscope-ai/QwenPaw/issues/2291) | 🐾 Help Wanted: Open Tasks | 56 | **Meta**: Guia de contribuição com tarefas P0-P2 |
| [#3288](https://github.com/agentscope-ai/QwenPaw/issues/3288) | CoPaw → QwenPaw smooth upgrade | 32 | **Migração**: Retenção de agentes, configs e memória |
| [#3356](https://github.com/agentscope-ai/QwenPaw/issues/3356) | WORKING_DIR still points to .copaw | 11 | **Bug**: Caminhos persistentes após upgrade |
| [#2301](https://github.com/agentscope-ai/QwenPaw/issues/2301) | Suggestions: auto-update, approve buttons, model switching | 9 | **Enhancement**: Várias melhorias UX solicitadas |
| [#352](https://github.com/agentscope-ai/QwenPaw/issues/352) | Memory per-user dimension separation | 8 | **Arquitetura**: Memória e skills isolados por usuário |

### Análise de Demandas

1. **Migração CoPaw → QwenPaw** (32 comentários): A comunidade exige documentação clara e tooling de migração. Muitos usuários não sabem distinguir os dois apps ou como migrar dados.

2. **Autonomia de Agentes** (#3364): Há demanda clara por agentes capazes de executar tarefas de longo prazo iterativamente (Mission Mode), sugerindo direcionamento estratégico.

3. **Isolamento multi-usuário** (#352): Skills e memórias atualmente globais; usuários solicitam segregação por agente/usuário, indicando uso em ambientes compartilhados.

4. **Performance UI** (#3352): Atraso de 3-5 segundos ao abrir a aplicação é complained repetidamente; alinhado com o PR #3386 em andamento.

---

## 5. Bugs e Estabilidade

### Bugs Reportados (por severidade inferred)

| Severidade | Issue | Descrição | Status |
|------------|-------|-----------|--------|
| 🔴 Alta | [#3331](https://github.com/agentscope-ai/QwenPaw/issues/3331) | Feishu WebSocket crash com cross-loop RuntimeError em ambiente multi-agente | ABERTA |
| 🔴 Alta | [#3312](https://github.com/agentscope-ai/QwenPaw/issues/3312) | Mac: após instalar 1.1.0, ambos copaw e qwenpaw falham — uso completamente bloqueado | ABERTA |
| 🔴 Alta | [#3322](https://github.com/agentscope-ai/QwenPaw/issues/3322) | Windows Desktop: tela em branco e freeze após instalação | ABERTA |
| 🔴 Alta | [#3277](https://github.com/agentscope-ai/QwenPaw/issues/3277) | JSON corruption em session state causa 422 permanente | ABERTA |
| 🟡 Média | [#3356](https://github.com/agentscope-ai/QwenPaw/issues/3356) | WORKING_DIR persiste apontando para .copaw após upgrade | ABERTA |
| 🟡 Média | [#3342](https://github.com/agentscope-ai/QwenPaw/issues/3342) | Status de modelo Ollama não atualiza (aparece disponível mesmo após deletar) | FECHADA |
| 🟡 Média | [#3369](https://github.com/agentscope-ai/QwenPaw/issues/3369) | WeChat: mensagens truncadas quando tool output precede texto | ABERTA |
| 🟡 Média | [#3370](https://github.com/agentscope-ai/QwenPaw/issues/3370) | Teste de conexão de modelo falha com erro de conexão | ABERTA |
| 🟡 Média | [#3183](https://github.com/agentscope-ai/QwenPaw/issues/3183) | `execute_shell_command` no Ubuntu reporta "comando não existe" (ls) | ABERTA |
| 🟡 Média | [#3344](https://github.com/agentscope-ai/QwenPaw/issues/3344) | "Failed to decrypt value" em tasks cron via WeChat | ABERTA |
| 🟢 Baixa | [#3350](https://github.com/agentscope-ai/QwenPaw/issues/3350) | Scroll Extremely laggy após 200+ rodadas de conversa | ABERTA |

### Bugs Corrigidos Recentemente

- **#3379**: Scheduled task 422 error → CORRIGIDO ✅
- **#3295**: vLLM 400 error com tool_choice=auto → CORRIGIDO ✅
- **#2873**: view_image não carrega dados de imagem (apenas文件名) → Em progresso via #3358

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Solicitadas

| Feature | Issue | Descrição | Sinais de Prioridade |
|---------|-------|-----------|----------------------|
| **Mission Mode** | [#3364](https://github.com/agentscope-ai/QwenPaw/pull/3364) | Agente autônomo iterativo para tarefas complexas de longa duração | **PR ativo** — alta prioridade |
| **File Rollback** | [#2590](https://github.com/agentscope-ai/QwenPaw/issues/2590) | Recuperação de arquivos deletados/acidentalmente sobrescritos | Task claimada de #2291 |
| **Auto Model Switching** | [#2301](https://github.com/agentscope-ai/QwenPaw/issues/2301) | Switch automático quando modelo falha ou atinge token limit | Solicitado 9+ vezes |
| **Skill Classification** | [#2961](https://github.com/agentscope-ai/QwenPaw/issues/2961) | Organização de skills em pastas/categorias por agente | 2 comentários |
| **Memory per User** | [#352](https://github.com/agentscope-ai/QwenPaw/issues/352) | Memória e skills segregados por usuário | 8 comentários, arsiteural |
| **Agent Statistics Dashboard** | [#3365](https://github.com/agentscope-ai/QwenPaw/pull/3365) | Métricas de uso: chats, tokens, LLM/tool/skill calls | PR em review |
| **Skill Scope Management** | [#2657](https://github.com/agentscope-ai/QwenPaw/issues/2657) | Skills públicos vs. agente-específicos | 3 comentários |
| **Code Signing** | [#3314](https://github.com/agentscope-ai/QwenPaw/issues/3314) | Assinatura do instalador Windows para remover alerta de segurança | 3 comentários |
| **qwenpaw doctor** | [#3371](https://github.com/agentscope-ai/QwenPaw/pull/3371) | CLI de diagnóstico de problemas | PR em review |

### Sinais de Direção Estratégica

- **Foco em autonomía**: Mission Mode (#3364) + Auto Model Switching indicam investimento em agentes de longa duração
- **Observabilidade**: Agent Statistics page (#3365) + `qwenpaw doctor` (#3371) demonstram preocupação com debuggabilidade
- **Multi-canal**: Bugs em Feishu (#3331), WeChat (#3369) e outras plataformas mostram ecossistema maduro com desafios de estabilidade

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais

| Dor | Evidência | Impacto |
|-----|-----------|---------|
| **Migração problemática** | #3288 (32 comentários), #3351, #3309, #3356 | Usuários presos em versões antigas ou com dados inconsistentes |
| **Instalação quebrada (Mac/Windows)** | #3312, #3322 | Bloqueio completo de uso em plataformas desktop |
| **Performance de inicialização** | #3352, feedback geral | 3-5s de atraso impacta experiência diária |
| **Memória global** | #352 | Ambientes multi-usuário não funcionam como esperado |
| **Scheduled tasks falhando** | #3176, #3379 | Funcionalidade core não confiável |

### Cenários de Uso Identificados

1. **Desenvolvimento de projetos de longa duração**: Usuários mantêm conversas de 200+ rodadas para iterar código V1→V2 sem perder contexto
2. **Multi-agente colaborativo**: A2A calls entre agentes; ambiente crítico para estabilidade (#3331)
3. **Integração com canais empresariais**: Feishu, WeChat, DingTalk para automação de workflows
4. **Modelos locais (Ollama/vLLM)**: Crescente adoção de LLMs self-hosted; compatibilidade instável (#3342)

### Indicadores de Satisfação

- **Alta atividade de contribution**: 47 issues + 44 PRs em 24h indica comunidade engajada
- **Primeiro-contribuidor PRs**: #2177 (ployts), #3295 (jilin6627-spec) indicam onboarding saudável
- **Features solicitadas implementadas**: Approve buttons (#3257), memory summarization cron (#2177) demonstram resposta rápida

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta há >3 dias

| Issue | Criado | Comentários | Estado | Prioridade |
|-------|--------|-------------|--------|------------|
| [#2301](https://github.com/agentscope-ai/QwenPaw/issues/2301) | 2026-03-25 | 9 | ABERTA | P1 |
| [#2590](https://github.com/agentscope-ai/QwenPaw/issues/2590) | 2026-03-30 | 6 | ABERTA | P1 |
| [#2873](https://github.com/agentscope-ai/QwenPaw/issues/2873) | 2026-04-03 | 4 | ABERTA | P2 |
| [#2961](https://github.com/agentscope-ai/QwenPaw/issues/2961) | 2026-04-05 | 2 | ABERTA | P2 |
| [#3176](https://github.com/agentscope-ai/QwenPaw/issues/3176) | 2026-04-09 | 4 | FECHADA | — |
| [#3183](https://github.com/agentscope-ai/QwenPaw/issues/3183) | 2026-04-10 | 2 | ABERTA | P2 |
| [#3314](https://github.com/agentscope-ai/QwenPaw/issues/3314) | 2026-04-13 | 3 |

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-04-14

---

## 1. Panorama do dia

O projeto ZeroClaw mantém um nível de atividade intenso, com **50 issues e 50 PRs atualizados nas últimas 24h**, consolidando-se como um repositório altamente dinâmico. Não houve lançamentos hoje, indicando foco em estabilização e refinamento. A base de usuários continua reportando bugs críticos — incluindo 5 issues classificadas como S0 (data loss / security risk) — enquanto a equipe de desenvolvimento avança em refatorações arquiteturais e correções de regressões. A taxa de atividade de PRs sugere forte engajamento da comunidade, com 8 merges nas últimas 24h sinalizando progresso constante na fila de review.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

O projeto não registrou novos releases hoje, comportamento alinhado com o padrão de desenvolvimento observado, onde releases são agrupadas após pencapaian de marcos significativos.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados hoje

| # | Título | Autor | Impacto |
|---|--------|-------|---------|
| [#5667](https://github.com/zeroclaw-labs/zeroclaw/pull/5667) | `feat(provider,channel): add streaming support for OpenRouter provider and draft-update support for Nextcloud Talk` | markuman | Resolve streaming bloqueante para OpenRouter (regressão de longa data) e habilita draft-update streaming para Nextcloud Talk |
| [#5167](https://github.com/zeroclaw-labs/zeroclaw/pull/5167) | `fix(session): session integrity, streaming refactor, history pruning` | singlerider | Corrigiu múltiplos vetores de corrupção de sessão — mensagens orfãs, respostas vazias do provider, quebra de tool_use/tool_result |
| [#5166](https://github.com/zeroclaw-labs/zeroclaw/pull/5166) | `feat(matrix): mention_only filtering, enhanced media handling, onboarding preservation` | singlerider | Adicionou filtragem por menção em rooms group, MIME-aware media handling e preservou valores de config no onboarding |
| [#5291](https://github.com/zeroclaw-labs/zeroclaw/pull/5291) | `gateway: add /api/channels for dashboard channel detail` | 52sanmao | Habilitou route `/api/channels` para suportar detalhe de canais no dashboard frontend |

### PRs abertos值得关注

- [#5727](https://github.com/zeroclaw-labs/zeroclaw/pull/5727) — `fix(matrix): restore encrypted media download and add outbound attachment support` — Restaura downloads de mídia encriptada em Matrix e implementa anexos outbound
- [#5730](https://github.com/zeroclaw-labs/zeroclaw/pull/5730) — `feat(providers): add Manifest Router as a provider option` — Novo provider com suporte a variáveis de ambiente `MANIFEST_API_KEY` e `MNFST_API_KEY`
- [#5517](https://github.com/zeroclaw-labs/zeroclaw/pull/5517) — `feat(config): forward-only schema versioning with V1→V2 migration` — Migração de schema de config (procurando feedback)
- [#5725](https://github.com/zeroclaw-labs/zeroclaw/pull/5725) — `fix(skills): pass allow_scripts through ReadSkillTool to skill loader` — Resolve #5697

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (por comentários)

| # | Título | Comentários | 👍 | Tendência |
|---|--------|-------------|-----|----------|
| [#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) | `[Bug]: Web dashboard is still not available` | **11** | 0 | 🟠 Crítico — persiste há 17 dias |
| [#4710](https://github.com/zeroclaw-labs/zeroclaw/issues/4710) | `[Feature]: A better LOGO of Zeroclaw` | 6 | 1 | 🔵 Discussão de brand/design |
| [#5584](https://github.com/zeroclaw-labs/zeroclaw/issues/5584) | `[Bug]: Duplicate consecutive assistant messages` | 5 | 0 | 🟠 Bug de comportamento degradado |
| [#5509](https://github.com/zeroclaw-labs/zeroclaw/issues/5509) | `feat(telegram): voice message transcription support` | 5 | 0 | 🟢 Feature gap vs OpenClaw |

**Análise:** A issue do web dashboard lidera em volume de discussão, sinalizando frustração acumulada. A demanda por suporte a mensagens de voz no Telegram (#5509) demonstra que a paridade de features com a contraparte TypeScript é uma expectativa da comunidade.

---

## 5. Bugs e Estabilidade

### S0 — Data Loss / Security Risk (5 issues)

| # | Título | Severidade | Atualização |
|---|--------|------------|-------------|
| [#5528](https://github.com/zeroclaw-labs/zeroclaw/issues/5528) | `[Bug]: Improper logic of email channel config` | S0 | 2026-04-14 |
| [#5542](https://github.com/zeroclaw-labs/zeroclaw/issues/5542) | `[Bug]: consecutive OOM in wsl2` | S0 | 2026-04-14 |
| [#5537](https://github.com/zeroclaw-labs/zeroclaw/issues/5537) | `[Bug]: Causes Persistent Error Loop` | S0 | 2026-04-14 |
| [#5605](https://github.com/zeroclaw-labs/zeroclaw/issues/5605) | `[Bug]: Default Configuration Path Issues in Multi-Instance Deployments` | S0 | 2026-04-14 |
| [#5672](https://github.com/zeroclaw-labs/zeroclaw/issues/5672) | `[Bug]: Feishu responds even when mention_only is enabled` | S0 | 2026-04-14 |

### S1 — Workflow Blocked (5 issues)

| # | Título | Severidade | Atualização |
|---|--------|------------|-------------|
| [#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) | `[Bug]: Web dashboard is still not available` | S1 | 2026-04-14 |
| [#5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600) | `[Bug]: Use kimi-code provider in streaming chat call tools` | S1 | 2026-04-14 |
| [#5578](https://github.com/zeroclaw-labs/zeroclaw/issues/5578) | `[Bug]: Zeroclaw doesn't talk to local llama.cpp server` | S1 | 2026-04-14 |
| [#5654](https://github.com/zeroclaw-labs/zeroclaw/issues/5654) | `[Bug]: using encryption for the config.json on telegram token` | S1 | 2026-04-14 |

**Análise:** 10 bugs de alta criticidade (S0+S1) requerem atenção imediata. Os problemas com provedores (Kimi, Groq, llama.cpp) sugerem inconsistências na camada de provider que precisam de investigação sistêmica.

---

## 6. Pedidos de Features e Sinais de Roadmap

| # | Título | Tipo | Comentários | Insight Estratégico |
|---|--------|------|-------------|---------------------|
| [#5509](https://github.com/zeroclaw-labs/zeroclaw/issues/5509) | `feat(telegram): voice message transcription support` | feature | 5 | Paridade com OpenClaw (TypeScript) |
| [#5649](https://github.com/zeroclaw-labs/zeroclaw/issues/5649) | `[Feature]: Clipboard paste & drag-and-drop image support in Web Chat UI` | enhancement | 2 | UX do web chat |
| [#5502](https://github.com/zeroclaw-labs/zeroclaw/issues/5502) | `[Feature]: Add allowed_tools configuration option to AgentConfig` | enhancement | 2 | Configuração declarativa de tools |
| [#5619](https://github.com/zeroclaw-labs/zeroclaw/issues/5619) | `[Feature]: Native OpenRouter provider routing support` | feature | 2 | Capacidade avançada de roteamento |
| [#5501](https://github.com/zeroclaw-labs/zeroclaw/issues/5501) | `[Feature]: trigger cron manually` | enhancement | 2 | DX para testing de cron jobs |
| [#5586](https://github.com/zeroclaw-labs/zeroclaw/issues/5586) | `Phase 1 D4: WIT interface files for Tool and Channel plugin contracts` | refactor | 3 | Arquitetura Microkernel |
| [#5617](https://github.com/zeroclaw-labs/zeroclaw/issues/5617) | `Phase 2 D5: Reduce all_tools_with_runtime to 10-12 core tools` | refactor | 2 | Arquitetura Microkernel |

**Sinais de Roadmap:** O projeto está em transição para arquitetura microkernel com WIT (WebAssembly Interface Types) para plugins. Issues #5586 e #5617 indicam progresso na Fase 1-2 dessa estratégia. A demanda por features de paridade com OpenClaw é recorrente.

---

## 7. Resumo de Feedback dos Usuários

### Dores principais identificadas

1. **Web Dashboard Inutilizável (#4866)** — Usuários não conseguem acessar a UI web ou Tauri app, bloqueando workflow completo. Frustração acumulada com 11 comentários e 17 dias sem resolução.

2. **Problemas com Provedores Locais (#5578)** — Usuários tentando conectar com llama.cpp server enfrentam delays de minutos e falhas. Barreira para adoption de modelos locais.

3. **Estabilidade em WSL2 (#5542)** — OOM consecutive导致 perda de dados. Usuários em ambiente Windows/WSL2 estão sendo impactados.

4. **Configuração Multi-Instance (#5605)** — Caminhos hardcoded `~/.zeroclaw/` impedem deploys com múltiplos perfis, limitando casos de uso profissional.

5. **Configuração de Email Quebrada (#5528)** — Lógica de config do canal email está incorreta, causando falhas em produção.

### Cenários de Uso Reportados

- **Agentes Telegram** — Demanda por suporte a mensagens de voz e comportamento correto de `mention_only`
- **Agentes Feishu** — Config de `ack_reactions` não funciona; `mention_only` ignorado
- **Desenvolvimento Local** — Compilação extremamente lenta (#5575) impacta eficiência de desenvolvimento
- **Busca Semântica** — Usuários solicitam ANN index para performance O(n) atual

---

## 8. Backlog que Merece Atenção

| # | Título | Idade | Status | Prioridade |
|---|--------|-------|--------|------------|
| [#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) | `[Bug]: Web dashboard is still not available` | 17 dias | OPEN | 🔴 Alta |
| [#4710](https://github.com/zeroclaw-labs/zeroclaw/issues/4710) | `[Feature]: A better LOGO of Zeroclaw` | 20 dias | OPEN | 🟡 Média |
| [#4862](https://github.com/zeroclaw-labs/zeroclaw/issues/4862) | `[Bug]: apps/tauri/gen/schemas/ not gitignored` | 18 dias | CLOSED | ✅ Resolvido |
| [#5356](https://github.com/zeroclaw-labs/zeroclaw/issues/5356) | `[Bug]: Canvas tool from channel server writes to separate CanvasStore` | 9 dias | OPEN | 🟠 S2 |

### Issues sem atividade recente (>7 dias sem resposta)

| # | Título | Atualizado | Comentários |
|---|--------|------------|-------------|
| [#5575](https://github.com/zeroclaw-labs/zeroclaw/issues/5575) | `fix(build): Extremely slow project compilation` | 2026-04-10 | 3 |
| [#5570](https://github.com/zeroclaw-labs/zeroclaw/issues/5570) | `enhancement: Faster SQLite memory vector search via ANN` | 2026-04-09 | 3 |
| [#5447](https://github.com/zeroclaw-labs/zeroclaw/issues/5447) | `enhancement: crate split the crate` | 2026-04-07 | 2 |

---

## Métricas de Saúde do Projeto

| Indicador | Valor | Status |
|-----------|-------|--------|
| Issues ativas (24h) | 48 | 🟢 Saudável |
| PRs abertos | 42 | 🟢 Fluxo ativo |
| PRs merged (24h) | 8 | 🟢 Progresso visível |
| Bugs S0/S1 pendentes | 10 | 🔴 Requer atenção urgente |
| Releases (24h) | 0 | 🟡 Sem lançamento, foco em estabilidade |
| Tempo médio de resposta em issues | ~4 dias | 🟡 Pode melhorar |

---

*Relatório gerado em 2026-04-14. Dados extraídos de github.com/zeroclaw-labs/zeroclaw.*

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*