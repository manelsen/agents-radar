# Resumo diário do ecossistema de agentes de IA 2026-07-20

> Issues: 0 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-07-19 20:40 UTC

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

**Data de Referência:** 2026-07-20  
**Projetos Analisados:** NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw, ZeroClaw

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **atividade intensa porém fragmentada** em 20 de julho de 2026. Projetos como **IronClaw** e **ZeroClaw** lideram em volume de PRs (50 cada), enquanto **NanoBot** demonstra maturidade operacional com 9 merges em 24h. Nenhum dos projetos publicou releases formais no período, sinalizando que toda a energia está concentrada em **estabilização pré-lançamento** e **refatoração arquitetural**. A saúde geral do ecossistema é positiva, com bugs sendo tratados rapidamente quando reportados, mas preocupa a persistência de issues críticas abertas há meses em projetos como Hermes Agent e a ausência de NullClaw em qualquer atividade. A tendência clara é de **consolidação interna** antes de distribuições públicas, com ênfase em robustez, memory management e suporte cross-platform.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | Merges | Releases | Saúde |
|---------|--------------|-----------|--------|----------|-------|
| **NullClaw** | 0 | 0 | 0 | 0 | ⚫ Inativa |
| **NanoBot** | 5 | 23 | 9 | 0 | 🟢 Excelente |
| **Hermes Agent** | 50 | 50 | 3 | 0 | 🟡 Alta tensão |
| **PicoClaw** | 4 | 3 | 0 | 0 | 🟠 Estável |
| **IronClaw** | 5 | 50 | 26 | Em progresso | 🟢 Reborn |
| **CoPaw** | 11 | 6 | 0 | 0 | 🟡 Ativa |
| **ZeroClaw** | 50 | 50 | 4+ | 0 | 🟡 Alta tensão |

**Observações:**
- **IronClaw** apresenta a melhor proporção de merges (26/50 = 52%), indicando ritmo de entrega acelerado durante rearquitetura "Reborn"
- **NanoBot** demonstra eficiência excepcional com 9 merges em apenas 23 PRs atualizados
- **Hermes Agent** e **ZeroClaw** têm volume alto mas baixa resolução (3-4 merges em 50 PRs cada)
- **NullClaw** permanece completamente inativa —可疑 como projeto de referência

---

## 3. Posicionamento do Projeto Principal

### NanoBot como Referência Operacional

| Dimensão | NanoBot | Comparação |
|----------|---------|------------|
| **Bug Fix Rate** | 4 bugs críticos fechados no mesmo dia | Superior a todos os pares |
| **Arquitetura** | Canais autossuficientes (refatoração concluída) | Diferenciador técnico |
| **Providers** | 9 PRs de providers mergeados | Mais diversificado |
| **Segurança** | P0 filesystem em revisão | Maturidade em handling |
| **Comunidade** | Issue antiga sem resolução (#1459) | Fraqueza identificada |

**Vantagens Competitivas:**
- Estrutura de canais modular que facilita extensibilidade
- Suporte a MQTT (#1631) indicando estratégia IoT
- Resposta a regressões dentro de 24h
- Integração Atlas Cloud (#4996) expandindo ecossistema de providers

**Diferenças Técnicas:**
- Foco em **bug fixing rápido** vs. Hermes Agent (features)
- Arquitetura de **canais isolados** vs. ZeroClaw (plugins WASM)
- Suporte **multi-channel** maduro (WhatsApp, GitStore, CLI)

---

## 4. Focos Técnicos Compartilhados

### Temas Emergentes em Múltiplos Projetos

| Tema | Projetos Afetados | Evidência |
|------|-------------------|-----------|
| **Memory Management** | Hermes, ZeroClaw, CoPaw | Issues sobre memória persistente, extração atômica, Obsidian Vault |
| **Performance Local Models** | Hermes (#4319), NanoBot (#1459) | MoE cache invalidation, lazy execution |
| **Cross-Platform** | PicoClaw, ZeroClaw, NanoBot | Windows UTF-8, Tauri zoom, CI testing |
| **Segurança/Tool Gating** | ZeroClaw (#7947 S0), IronClaw | Pipeline bypass, workspace validation |
| **Orquestração de Agentes** | CoPaw, Hermes, ZeroClaw | Multi-agent setups, workflows reutilizáveis |
| **Bug Fix Rápido** | NanoBot, IronClaw | Regressões fechadas no mesmo dia |

**Análise:** O ecossistema converge em quatro doras críticas:
1. **Latência e cache** em modelos locais (especialmente MoE)
2. **Memória cross-session** confiável
3. **Segurança em pipelines** com múltiplos agentes
4. **Experiência Windows** consistentemente negligenciada

---

## 5. Análise de Diferenciação

### Matrix de Posicionamento

| Projeto | Público-Alvo | Arquitetura | Diferenciador |
|---------|--------------|-------------|---------------|
| **NanoBot** | Enterprise/Multi-channel | Canais modulares | Bug fix speed, WhatsApp/MQTT |
| **Hermes Agent** | Pesquisadores/Local models | Desktop-centric | MoE optimization, Ollama native |
| **IronClaw** | Desenvolvedores Rust | Reborn v2 (Rust) | Performance, capability-result flip |
| **ZeroClaw** | Operadores avançados | Plugins WASM | ADR governance, OTel, multi-agent |
| **CoPaw** | Usuários Agentscope | Python-based | MCP parallel, CLI scriptable |
| **PicoClaw** | Lite deployments | Minimal | Provider normalization |

### Diferenças Arquiteturais Notáveis

**IronClaw (Rust):**
- Rearquitetura "Reborn" com `DeploymentConfig` central
- Capability-result flip para type safety
- Foco em **Developer Experience** (onboarding automático)

**ZeroClaw (TypeScript/Node):**
- Arquitetura de plugins WASM
- Governança via ADRs formalizados
- Integração OTel nativa
- Foco em **operadores de produção**

**Hermes Agent:**
- Desktop-first com Gateway opcional
- Suporte nativo Ollama via `/api/chat`
- Performance MoE como diferencial

**NanoBot:**
- Canais como packages autossuficientes
- Providers como serviços intercambiáveis
- Foco em **robustez operacional**

---

## 6. Tração e Maturidade da Comunidade

### Velocidade de Iteração

| Projeto | Issues Antigas (>3 meses) | Taxa de Resolução | Maturidade |
|---------|--------------------------|-------------------|------------|
| **NanoBot** | 1 (#1459) | 🔥 Alta (4 bugs/dia) | 🟢 Estável |
| **IronClaw** | 0 | 🔥 Alta (26 merges/dia) | 🟢 Crescendo |
| **ZeroClaw** | 7+ | 🟡 Moderada | 🟡 Estável |
| **Hermes Agent** | 7+ | 🟠 Baixa | 🟡 Estável |
| **CoPaw** | 0 | 🟡 Moderada | 🟢 Emergente |
| **PicoClaw** | 0 | 🟠 Lenta | 🟡 Emergnte |

### Indicadores de Maturidade

**Alta Maturidade:**
- **NanoBot:** Refatoração concluída, processo de bug fix rodado
- **IronClaw:** ADR system, release management, CI/CD cross-platform

**Maturidade Intermediária:**
- **ZeroClaw:** RFCs estruturados, mas backlog inflado
- **Hermes Agent:** Volume alto mas baixa resolução
- **CoPaw:** Comunidade ativa, PRs de first-time contributors

**Emergnte:**
- **PicoClaw:** Volume baixo mas estável
- **NullClaw:** Inativa — possível abandono ou rebranding

---

## 7. Sinais de Tendência

### Tendências de Mercado Extraídas

#### 1. **Multi-Agent Orchestration como Next Frontier**
- ZeroClaw (#9167), Hermes (#4335), CoPaw (#6163)都在讨论多代理设置
- RFCs para "Work Lanes" e "Background Agents" indicam demanda de produção
- **Sinal:** Mercados estão passando de chatbots para agentes autônomos

#### 2. **Memory Persistent é Bloco Crítico**
- 4+ projetos com issues sobre memória cross-session
- ZeroClaw tem 21 itens open em tracker de persistent memory
- Hermes Agent tem 3+ issues sobre Obsidian Vault e memory namespaces
- **Sinal:** Usuários precisam de contexto de longo prazo — agentes stateless não atendem

#### 3. **Local Models são Prioridade**
- Hermes Agent: discussão intensa sobre Ollama API native vs. OpenAI compat
- Hermes: P0 sobre KV cache invalidation em MoE
- NanoBot: issue sobre Codex 5.3 "lazy execution"
- **Sinal:** Privacidade e custo estão motivando adoção de modelos locais

#### 4. **Windows e Cross-Platform são Negligenciados**
- NanoBot: fix shims bun.cmd
- PicoClaw: SplitMessage hangs no Windows
- ZeroClaw: CI só Linux
- **Sinal:** A maioria dos devs roda Linux/Mac, mas mercado corporativo é Windows-first

#### 5. **Security em Pipelines é Blind Spot**
- ZeroClaw: S0 bypass de ToolAccessPolicy
- IronClaw: filesystem validation P0
- **Sinal:** À medida que agentes executam em produção, security se torna crítico

#### 6. **IoT/Automation como Vetor de Crescimento**
- NanoBot: MQTT channel mergeado
- ZeroClaw: Nextcloud Talk integration
- **Sinal:** Agentes não são só chatbots — automação física e doméstica está emergindo

---

## Resumo Executivo

| Insight | Implicação |
|---------|------------|
| **NanoBot lidera em maturidade operacional** | Bugs são fechados rapidamente; arquitetura modular é referência |
| **ZeroClaw e Hermes têm volume mas baixa resolução** | Backlog inflado pode causar churn de contribuidores |
| **IronClaw está em rearquitetura agressiva** | Release 0.29.1 em progresso pode consolidar posição |
| **Memory persistence é o maior GAP técnico** | Oportunidade de diferenciação para quem resolver primeiro |
| **Windows é cidadão de segunda** | Oportunidade para projetos que priorizarem suporte Microsoft |
| **NullClaw precisa de investigação** | Inatividade total questiona viabilidade como referência |

---

*Relatório gerado com base em dados GitHub de 2026-07-20. Análise cobre 7 projetos do ecossistema open source de agentes de IA.*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-07-20

---

## 1. Panorama do Dia

O NanoBot apresenta **atividade intensa** em 20 de julho de 2026, com **23 PRs atualizados** e **5 issues processadas** nas últimas 24h. A equipe concentrou-se em **bug fixes de alta prioridade (P1/P2)** com pelo menos **9 PRs fechados/mergeados**, abordando regressões críticas em canais, triggers, e providers. O esforço de refatoração em curso — especialmente a separação de canais em módulos autossuficientes — avança bem, com a segunda fase completada. Não houve releases novas, indicando fase de estabilização pré-lançamento.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.** O projeto mantém-se em período de desenvolvimento ativo sem distribuição de nova versão.

---

## 3. Progresso do Projeto

### PRs Fechados/Merged (9 total)

| PR | Título | Prioridade | Impacto |
|----|--------|------------|---------|
| [#4908](https://github.com/HKUDS/nanobot/pull/4908) | refactor(channels): make built-in channels self-contained | P1 | Completa separação de canais em pacotes autossuficientes sob `nanobot/channels/<channel>/` |
| [#4990](https://github.com/HKUDS/nanobot/pull/4990) | fix(triggers): reject deliveries to disabled channels | P1 | Fecha [#4991](https://github.com/HKUDS/nanobot/issues/4991) — previne triggers de executar em canais desabilitados |
| [#4834](https://github.com/HKUDS/nanobot/pull/4834) | fix(whatsapp): allow group ids in allowFrom | P1 | Restaura suporte a allowlist de grupos WhatsApp (regressão 0.2.2) |
| [#4904](https://github.com/HKUDS/nanobot/pull/4904) | fix(providers): fail over across provider failure domains | P1 | Implementa failover inteligente entre domínios de falha de providers |
| [#4979](https://github.com/HKUDS/nanobot/pull/4979) | fix(gitstore): resolve staged paths relative to workspace | P1 | Fecha [#4980](https://github.com/HKUDS/nanobot/issues/4980) — corrige inicialização quando workspace ≠ CWD |
| [#4986](https://github.com/HKUDS/nanobot/pull/4986) | fix(triggers): coerce null ms fields when loading local triggers | P1 | Trata `null` em timestamps de histórico de triggers |
| [#4994](https://github.com/HKUDS/nanobot/pull/4994) | fix(webui): resolve Windows package manager shims | — | Resolve shims `bun.cmd` no Windows para WebUI |
| [#4976](https://github.com/HKUDS/nanobot/pull/4976) | fix(cli-apps): decode subprocess output as UTF-8 | P2 | Fecha [#4975](https://github.com/HKUDS/nanobot/issues/4975) — corrige decodificação UTF-8 em Windows non-UTF8 |
| [#1631](https://github.com/HKUDS/nanobot/pull/1631) | feat(channels): add MQTT channel support | — | Adiciona canal MQTT com suporte a TLS, auth e pub/sub |

### Destaque Técnico

A refatoração de canais ([#4908](https://github.com/HKUDS/nanobot/pull/4908)) elimina acoplamento central e prepara a arquitetura para canais externos mais robustos.

---

## 4. Temas Quentes da Comunidade

### Issue em Destaque (Mais Comentários/Reações)

| Issue | Comentários | 👍 | Relevância |
|-------|-------------|----|------------|
| [#1459](https://github.com/HKUDS/nanobot/issues/1459) "nanobot with codex-5.3-codex is lazy and doesn't actually execute" | 6 | 2 | **Crítica** — NanoBot promete executar tarefas mas não as realiza |

**Análise:** Issue aberta desde 2026-03-03, com **6 comentários ativos** e **2 upvotes**. O usuário relata comportamento onde o bot lê arquivos mas não executa ações prometidas — possível problema com o modelo Codex 5.3 ou com a lógica de turn lifecycle.

### PR em Destaque (Maior Atividade)

| PR | Título | Comentários | Impacto |
|----|--------|-------------|---------|
| [#4963](https://github.com/HKUDS/nanobot/pull/4963) | feat(webui): polish agent output and app discovery | Alto | Refatoração de UI com linguagem unificada de logs de ferramentas |

**Sinal da comunidade:** Forte interesse em melhorias na WebUI e experiência visual do output de agentes.

---

## 5. Bugs e Estabilidade

### Regressões Reportadas

| Issue | Severidade | Status | Descrição |
|-------|------------|--------|-----------|
| [#4823](https://github.com/HKUDS/nanobot/issues/4823) | Alta | ✅ Fechada | WhatsApp groups respondem em todos os grupos (regressão 0.2.2) — **corrigida em [#4834](https://github.com/HKUDS/nanobot/pull/4834)** |
| [#4980](https://github.com/HKUDS/nanobot/issues/4980) | Alta | ✅ Fechada | GitStore falha com workspace ≠ CWD — **corrigida em [#4979](https://github.com/HKUDS/nanobot/pull/4979)** |
| [#4991](https://github.com/HKUDS/nanobot/issues/4991) | Alta | ✅ Fechada | Triggers reportam sucesso após canal desabilitado — **corrigida em [#4990](https://github.com/HKUDS/nanobot/pull/4990)** |

### Bugs Abertos

| Issue | Severidade | Descrição |
|-------|------------|-----------|
| [#1459](https://github.com/HKUDS/nanobot/issues/1459) | **Alta** | NanoBot não executa ações prometidas com Codex 5.3 |
| [#4987](https://github.com/HKUDS/nanobot/pull/4987) | **P0 (Segurança)** | Filesystem: validação de workspace vinculada a arquivos abertos — PR aberto para fix |

### Padrão Identificado

**4 de 5 issues fechadas hoje eram bugs** — o projeto demonstra resposta rápida a regressões, especialmente em canais e stores.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features em PR (14 abertas)

| PR | Título | Prioridade | Sinal Estratégico |
|----|--------|------------|--------------------|
| [#4996](https://github.com/HKUDS/nanobot/pull/4996) | Add Atlas Cloud provider support | P1 | Expansão de providers OpenAI-compatíveis |
| [#4963](https://github.com/HKUDS/nanobot/pull/4963) | feat(webui): polish agent output and app discovery | — | **Melhoria de UX** — linguagem unificada de logs |
| [#4625](https://github.com/HKUDS/nanobot/pull/4625) | feat(exec): allow extra bwrap bind roots | — | Suporte a diretórios de usuário no sandbox |
| [#1631](https://github.com/HKUDS/nanobot/pull/1631) | feat(channels): add MQTT channel support | — | **Expansão IoT** — canal pub/sub para dispositivos |

### Sinais de Roadmap

- **Providers:** Nova integração Atlas Cloud sugere estratégia multi-gateway
- **Canais:** MQTT em desenvolvimento indica foco em IoT/automação
- **WebUI:** Refatoração completa de output de agentes (#[4963](https://github.com/HKUDS/nanobot/pull/4963))
- **Segurança:** Fix P0 de filesystem em andamento

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Reportadas

| Categoria | Issue | Sintoma |
|-----------|-------|---------|
| **Execução de Agentes** | [#1459](https://github.com/HKUDS/nanobot/issues/1459) | "Lê mas não faz" — modelo promete ação mas não executa |
| **Canais** | [#4823](https://github.com/HKUDS/nanobot/issues/4823) | WhatsApp flood em grupos — spam indesejado |
| **Windows** | [#4975](https://github.com/HKUDS/nanobot/issues/4975) | Perda de output UTF-8 em locales não-UTF8 |
| **Workspaces** | [#4980](https://github.com/HKUDS/nanobot/issues/4980) | GitStore quebrado para configurações "não-padrão" |

### Cenários de Uso Indicados

- **WhatsApp corporativo** — grupos com controle de acesso
- **CLI tooling** — automação com subprocessos
- **Git-backed memory** — integração com workflows de development
- **IoT/automação** — suporte MQTT aguardando merge

### Satisfação/Insatisfação

**Positivo:** Resposta rápida a regressões (todas fechadas no mesmo dia)  
**Negativo:** Issue [#1459](https://github.com/HKUDS/nanobot/issues/1459) aberta há 4+ meses sem resolução — possível blind spot com modelos Codex

---

## 8. Backlog que Merece Atenção

### Issue Sem Resposta Prolongada

| Issue | Idade | Comentários | Risco |
|-------|-------|-------------|-------|
| [#1459](https://github.com/HKUDS/nanobot/issues/1459) "nanobot with codex-5.3-codex is lazy" | **~4 meses** | 6 | **Alto** — afecta experiência principal do agente |

**Recomendação:** Priorizar investigação do comportamento "lazy" com modelos Codex — impacto direto na proposta de valor do NanoBot.

### PRs Abertos de Alta Prioridade Sem Merge

| PR | Prioridade | Idade | Descrição |
|----|------------|-------|-----------|
| [#4987](https://github.com/HKUDS/nanobot/pull/4987) | P0 | <1 dia | fix(filesystem): bind workspace checks to opened files |
| [#4996](https://github.com/HKUDS/nanobot/pull/4996) | P1 | <1 dia | Add Atlas Cloud provider support |
| [#4993](https://github.com/HKUDS/nanobot/pull/4993) | P1 | <1 dia | refactor(agent): unify internal turn lifecycle |
| [#4989](https://github.com/HKUDS/nanobot/pull/4989) | P1 | <1 dia | fix(transcription): resolve env refs in transcription |

---

## Saúde Geral do Projeto

| Métrica | Status | Tendência |
|---------|--------|-----------|
| **Atividade de PRs** | 🔥 Alta (23) | ↑↑ |
| **Taxa de bug fix** | ✅ Excelente (4 bugs fechados) | ↑↑ |
| **Regressões** | ⚠️ 3+ reportadas recentemente | — |
| **Segurança (P0)** | 🔴 1 em aberto | Atenção |
| **Dívida técnica** | 📊 Refatoração de canais em progresso | ↓ |
| **Engajamento** | 💬 Issue antiga (#1459) sem resolução | ⚠️ |

---

*Relatório gerado automaticamente com base em dados GitHub de 2026-07-20.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-07-20

---

## 1. Panorama do Dia

O projeto Hermes Agent mantém **atividade intensa** com 50 issues e 50 PRs atualizados nas últimas 24h, evidenciando uma alta cadência de desenvolvimento. Não houve lançamentos oficiais no período, mas o foco está em **melhorias de estabilidade** (3 PRs fechados hoje) e **features跨平台** para Desktop e Gateway. A base de issues permanece majoritariamente aberta (49 abertas vs 1 fechada), sugerindo um fluxo de entrada de demandas superior ao de resolução. A comunidade demonstra particular interesse em **otimização de performance para modelos locais (MoE)**, **integração com múltiplas plataformas de mensagens** e **gestão de memória persistente**.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto não publicou novas versões no período. A ausência de releases pode indicar foco em refinamento interno ou preparação para uma versão maior.

---

## 3. Progresso do Projeto

Três PRs foram **merged/fechados** hoje, todos com foco em Desktop:

| PR | Tipo | Descrição | Impacto |
|----|------|-----------|---------|
| [#67671](https://github.com/NousResearch/hermes-agent/pull/67671) | Refactor | Tidy session-color pass — DRY/KISS improvements pós-merge | Limpeza de código, melhor manutenibilidade |
| [#67670](https://github.com/NousResearch/hermes-agent/pull/67670) | Fix/Bench | Correção `--spawn` quebrado por Vite 8 bin resolution + baseline real | Restaura benchmark funcional |
| [#67659](https://github.com/NousResearch/hermes-agent/pull/67659) | Feature | Expor metadata de eventos inbound para hooks de plugins | Permite plugins distinguirem eventos atuais de mensagens anteriores |

**PRs abertos com alta prioridade potencial:**

- [#67673](https://github.com/NousResearch/hermes-agent/pull/67673) — Kanban notifier independente do gateway dispatch (P3, Gateway)
- [#67674](https://github.com/NousResearch/hermes-agent/pull/67674) — Background work rail persistente no Desktop (P3)
- [#67675](https://github.com/NousResearch/hermes-agent/pull/67675) — Adição de locale Francês (fr-FR) no Desktop (P3)

---

## 4. Temas Quentes da Comunidade

**Issues com maior engajamento (comentários + reações):**

| Issue | Tipo | Tema | Comentários | 👍 | Link |
|-------|------|------|-------------|-----|------|
| #4505 | Bug/Feature | Otimização Ollama: API nativa `/api/chat` vs OpenAI-compatível | 13 | 2 | [Link](https://github.com/NousResearch/hermes-agent/issues/4505) |
| #3523 | Bug | Regressões no `hermes update` — git output silencioso e stashes desnecessários | 8 | 0 | [Link](https://github.com/NousResearch/hermes-agent/issues/3523) |
| #4431 | Feature | Per-topic/per-chat config overrides para gateway sessions | 1 | **9** | [Link](https://github.com/NousResearch/hermes-agent/issues/4431) |
| #4319 | **Performance** | KV cache invalidation em modelos MoE locais — rebuild desnecessário de system prompt | 6 | 2 | [Link](https://github.com/NousResearch/hermes-agent/issues/4319) |

**Análise:** A discussão mais técnica envolve **otimização de performance para modelos locais** (#4319, P0), com usuários reportando degradação severa durante sessões longas com Qwen3.5 35B e Mixtral via Ollama/vLLM. O interesse em **configuração por chat/tópico** (#4431) com 9 👍 indica demanda por personalização multi-tenant no gateway.

---

## 5. Bugs e Estabilidade

**Bugs reportados por severidade:**

### P0 — Crítico
| Issue | Componente | Descrição | Link |
|-------|------------|-----------|------|
| #4319 | Agent | KV cache invalidation em modelos MoE causa reprocessamento completo do contexto | [Link](https://github.com/NousResearch/hermes-agent/issues/4319) |

### P2 — Alto
| Issue | Componente | Descrição | Link |
|-------|------------|-----------|------|
| #4505 | Agent/Ollama | Endpoint OpenAI-compatível causa streaming sub-ótimo vs API nativa | [Link](https://github.com/NousResearch/hermes-agent/issues/4505) |
| #3523 | CLI | Regressões no `hermes update` — output silencioso e stashes desnecessários | [Link](https://github.com/NousResearch/hermes-agent/issues/3523) |
| #67600 | Desktop | Session sidebar vazia apenas para perfil `default` | [Link](https://github.com/NousResearch/hermes-agent/issues/67600) |
| #3525 | Agent | Cost estimation falha silenciosamente ($0.00 para todas sessões) | [Link](https://github.com/NousResearch/hermes-agent/issues/3525) |
| #4281 | Gateway | Sandbox execution não aplicado em sessões de plataformas de mensagens | [Link](https://github.com/NousResearch/hermes-agent/issues/4281) |

### P3 — Médio
- **#64810** — Desktop review pane mostra "No diff" no Windows (simple-git rejeita paths binários com espaços)
- **#11409** — CheckpointManager não cria snapshots em Gateway mode
- **#4751** — Bugs no Honcho quebram UX end-to-end
- **#4073** — `/config` é read-only no TUI

**Regressão de nota:** O bug #3523 introduzido pelo PR #3492 afeta diretamente a experiência de update do CLI, com output git invisível e stash automático desnecessário.

---

## 6. Pedidos de Features e Sinais de Roadmap

**Features mais votadas ou comentadas:**

| Feature | Área | 👍 | Link |
|---------|------|-----|------|
| Per-topic/per-chat config overrides | Gateway | 9 | [Link](https://github.com/NousResearch/hermes-agent/issues/4431) |
| Cross-platform session context sharing (CLI ↔ Telegram) | Agent/Gateway | 1 (6 comments) | [Link](https://github.com/NousResearch/hermes-agent/issues/4335) |
| Obsidian Vault como Persistent Shared Memory Layer | Memory | 0 (5 comments) | [Link](https://github.com/NousResearch/hermes-agent/issues/2736) |
| Memory Extraction (Atomic Facts) + Forgetting | Memory | 0 (3 comments) | [Link](https://github.com/NousResearch/hermes-agent/issues/678) |
| Autoresearch skill — autonomous git-based experiment loop | Skills | 0 (3 comments) | [Link](https://github.com/NousResearch/hermes-agent/issues/5114) |
| Profile-scoped memory namespaces | Memory | 0 (3 comments) | [Link](https://github.com/NousResearch/hermes-agent/issues/4726) |

**Novas features do dia:**
- [#67653](https://github.com/NousResearch/hermes-agent/issues/67653) — Browserbase: manter sessões cloud across turns (opt-in `browser.persist_across_turns`)
- [#67648](https://github.com/NousResearch/hermes-agent/issues/67648) — RFC: Bundled Perseus Vault como memory provider oficial
- [#4865](https://github.com/NousResearch/hermes-agent/issues/4865) — Comando `/diff` para ver mudanças da sessão atual

**Sinais de roadmap:** O alto interesse em **sessões cross-platform**, **memory namespaces por perfil** e **Obsidian Vault integration** sugere priorização futura de **persistência de contexto** e **multi-agent setups**.

---

## 7. Resumo de Feedback dos Usuários

**Dores reais identificadas:**

| Dor | Frequência | Descrição |
|-----|------------|-----------|
| Performance em modelos locais | Alta | Usuários MoE (Qwen3.5, Mixtral) sofrem degradação severa por rebuilds de system prompt |
| Fragmentação de plataforma | Média | Sessões CLI e Telegram são isoladas — usuário perde contexto ao trocar de plataforma |
| UX de configurações | Média | `/config` não permite modificações — workflow frustrante |
| Memory opaque | Média | Obsidian Vault configurado mas não funcional; hindsight integration confusa |
| Desktop instável | Média | Sidebar vazia no perfil default; review pane quebrado no Windows |

**Cenários de uso destacados:**
- **Multi-tenant gateway**: Usuários rodando múltiplos grupos Telegram com personalidades diferentes
- **Pesquisa autônoma**: Agentes executando loops de experimentação git
- **Cross-device**: "Continue on phone" via QR code (PR #67668 em progresso)

**Satisfação:** Issues antigas (Março-Abril) ainda sem resolução podem indicar insatisfação com tempo de resposta em features menos críticas.

---

## 8. Backlog que Merece Atenção

**Issues antigas sem resolução significativa (>3 meses):**

| Issue | Criação | Última Atualização | Componentes | Tema | Link |
|-------|---------|-------------------|-------------|------|------|
| #678 | 2026-03-08 | 2026-07-19 | Agent/Memory | Memory Extraction + Forgetting | [Link](https://github.com/NousResearch/hermes-agent/issues/678) |
| #2736 | 2026-03-24 | 2026-07-19 | Memory | Obsidian Vault integration | [Link](https://github.com/NousResearch/hermes-agent/issues/2736) |
| #2667 | 2026-03-23 | 2026-07-19 | Agent | Searchable archive de mensagens comprimidas | [Link](https://github.com/NousResearch/hermes-agent/issues/2667) |
| #2765 | 2026-03-24 | 2026-07-19 | Plugins | Hindsight plugin silent fail sem HINDSIGHT_API_URL | [Link](https://github.com/NousResearch/hermes-agent/issues/2765) |
| #3506 | 2026-03-28 | 2026-07-19 | Agent/Memory | Durable Feedback Routing | [Link](https://github.com/NousResearch/hermes-agent/issues/3506) |
| #3523 | 2026-03-28 | 2026-07-19 | CLI | Regressões hermes update | [Link](https://github.com/NousResearch/hermes-agent/issues/3523) |
| #3525 | 2026-03-28 | 2026-07-19 | Agent | Cost estimation failure | [Link](https://github.com/NousResearch/hermes-agent/issues/3525) |

**Análise:** 7+ issues do final de Março permanecem abertas, todas atualizadas recentemente (indicando atividade de discussão) mas sem merge ou close. Isso pode representar:
- Decisões de design pendentes (`needs-decision` em várias)
- Priorização de P0/P1 sobre P3
- Necessidade de triagem adicional pela equipe core

**Recomendação:** Considerar "adoption" ou close explícito das issues antigas para reduzir ruído no backlog.

---

## Métricas Resumidas do Período

| Métrica | Valor |
|---------|-------|
| Issues ativas (24h) | 50 |
| PRs atualizados (24h) | 50 |
| Releases | 0 |
| PRs merged/closed | 3 |
| Issues P0-P2 abertas | 7 |
| Features P3 abertas | 30+ |
| Issues com >5 comentários | 6 |

**Saúde geral:** Projeto altamente ativo com tensão entre volume de entrada de issues e capacidade de resolução. Performance de modelos locais e memory management emergem como temas dominantes.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório de Projeto: PicoClaw
## 📅 Data de Referência: 2026-07-20

---

## 1. Panorama do Dia

O projeto PicoClaw apresenta **atividade moderada** nas últimas 24 horas, com 7 items atualizados (4 issues e 3 PRs). Notably, nenhuma release foi publicada e nenhuma PR foi merged ou fechada, indicando um período de revisão e preparação. Das 4 issues reportadas, 1 foi resolvida (#3266), enquanto 3 permanecem abertas, incluindo dois bugs de estabilidade. As 3 PRs em aberto focam em correções de provedores e normalização de IDs, sugerindo foco em robustez técnica.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24 horas.**

O projeto encontra-se em período sem novas versões, o que pode indicar fase de estabilização ou preparação para próximo release cycle.

---

## 3. Progresso do Projeto

### PRs em Aberto

| # | Título | Autor | Foco | Link |
|---|--------|-------|------|------|
| #3251 | fix(providers): capture prompt cache token usage (Anthropic) | hydrogenbond007 | Provedor | [GitHub #3251](https://github.com/sipeed/picoclaw/pull/3251) |
| #3202 | fix(routing): strip underscores in ID normalization | Osamaali313 | Normalização | [GitHub #3202](https://github.com/sipeed/picoclaw/pull/3202) |
| #3267 | fix scope bug for refresh token | sarff | Autenticação | [GitHub #3267](https://github.com/sipeed/picoclaw/pull/3267) |

**Análise:** Nenhuma PR foi mergeada ou fechada hoje. As PRs abertas indicam trabalho ativo em:
- **Melhoria de telemetry** em provedores Anthropic (captura de cache tokens)
- **Padronização de IDs** seguindo regex `^[a-z0-9][a-z0-9_-]{0,63}$`
- **Correção de autenticação** em refresh tokens com escopo incorreto

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Interação

| # | Título | Status | Comentários | Link |
|---|--------|--------|-------------|------|
| #3252 | splitKnownProviderModel strips prefix incorrectly | 🟡 OPEN | 1 | [GitHub #3252](https://github.com/sipeed/picoclaw/issues/3252) |
| #3264 | SplitMessage hangs on fenced-code | 🟡 OPEN | 0 | [GitHub #3264](https://github.com/sipeed/picoclaw/issues/3264) |
| #3265 | Gateway fails with deltachat type error | 🟡 OPEN | 0 | [GitHub #3265](https://github.com/sipeed/picoclaw/issues/3265) |

**Destaque:** A issue #3252 sobre `splitKnownProviderModel` recebeu 1 comentário, indicando que a comunidade já está debatendo o comportamento esperado da função de parsing de modelos. Este é um tema relevante para integração de provedores.

---

## 5. Bugs e Estabilidade

### Issues Reportadas Hoje

| Severidade | # | Título | Status | Link |
|------------|---|--------|--------|------|
| 🟡 **Média** | #3264 | SplitMessage loop infinito em fenced-code | OPEN | [GitHub #3264](https://github.com/sipeed/picoclaw/issues/3264) |
| 🟡 **Média** | #3265 | Gateway crash com tipo deltachat desconhecido | OPEN | [GitHub #3265](https://github.com/sipeed/picoclaw/issues/3265) |
| 🟢 **Baixa** | #3252 | Prefix de provider removido incorretamente | OPEN | [GitHub #3252](https://github.com/sipeed/picoclaw/issues/3252) |

### Issue Resolvida

| # | Título | Link |
|---|--------|------|
| #3266 | Weixin channel: imagens passadas a modelo não-vision | [GitHub #3266](https://github.com/sipeed/picoclaw/issues/3266) |

**Alerta:** O bug #3264 (SplitMessage hangs) é **crítico para estabilidade** — loop infinito pode causar travamento de canais. Requer atenção prioritária.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Demanda Implícita Identificada

| Área | Descrição | Evidência |
|------|-----------|-----------|
| **Prompt Cache Telemetry** | Operadores precisam monitorar effectiveness do cache | PR #3251 |
| **Validação de Configuração** | Channel types não deveriam falhar startup se não configurados | Issue #3265 |
| **Parsing Robusto** | Melhor tratamento de edge cases em code blocks | Issue #3264 |

**Sinais de Roadmap:** O foco atual parece estar em **estabilidade de parsing e validação de configuração**, indicando preparação para release mais maduro.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Problema | Impacto | Link |
|----------|---------|------|
| Model IDs com alias de provider são mal parseados | Confusão em configurações avançadas | [#3252](https://github.com/sipeed/picoclaw/issues/3252) |
| Gateway falha sem motivo quando deltachat não está configurado | Setup unnecessarily breakable | [#3265](https://github.com/sipeed/picoclaw/issues/3265) |
| Autenticação falha silenciosamente em refresh token | Debugging difícil | [PR #3267](https://github.com/sipeed/picoclaw/pull/3267) |
| Mensagens com código são truncadas incorretamente | Experiência do usuário degradada | [#3264](https://github.com/sipeed/picoclaw/issues/3264) |

### Cenários de Uso Identificados
- **Integração multi-provider** com aliases conhecidos
- **Channelsassíncronos** (deltachat, weixin) com modelos específicos
- **Autenticação em camadas** com refresh tokens

---

## 8. Backlog que Merece Atenção

### Issues Antigas sem Resolução

| # | Título | Criado | Idade | Status | Link |
|---|--------|--------|-------|--------|------|
| #3251 | Anthropic prompt cache token capture | 2026-07-12 | 8 dias | 🟡 OPEN | [GitHub #3251](https://github.com/sipeed/picoclaw/pull/3251) |
| #3252 | splitKnownProviderModel bug | 2026-07-12 | 8 dias | 🟡 OPEN | [GitHub #3252](https://github.com/sipeed/picoclaw/issues/3252) |
| #3202 | ID normalization underscore fix | 2026-07-01 | 19 dias | 🟡 OPEN | [GitHub #3202](https://github.com/sipeed/picoclaw/pull/3202) |

**⚠️ Prioridade:** A PR #3202 está aberta há **19 dias** sem merge, sugerindo possible bottleneck na revisão de código. Recomenda-se triagem.

---

## Métricas Resumidas (24h)

| Indicador | Valor |
|-----------|-------|
| 📊 Issues abertas/ativas | 3 |
| ✅ Issues fechadas | 1 |
| 🔀 PRs abertas | 3 |
| 🔀 PRs merged/fechadas | 0 |
| 📦 Releases | 0 |
| 🔥 Issues críticas | 1 (#3264 - loop infinito) |

---

*Relatório gerado automaticamente com base em dados do GitHub de sipeed/picoclaw.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-07-20

## 1. Panorama do Dia

O projeto IronClaw apresenta **alta atividade** nesta data, com 50 PRs atualizados nas últimas 24h (24 abertos, 26 merged/fechados) e 5 issues abertas. O foco predominante está na continuação da iniciativa "Reborn" — uma rearquitetura abrangente que consolida o `DeploymentConfig` como peça central de composição, remove o runtime v1 obsoleto e implementa melhorias de performance no subsistema de turnos. A equipe principal demonstra ritmo acelerado de entrega, com múltiplos PRs core merged no mesmo dia. Não há novas releases formais, mas há uma release em andamento (PR #5598) atualizando múltiplos crates.

---

## 2. Lançamentos

**Release em progresso via PR #5598** (`chore: release`)

| Crate | Versão Anterior | Nova Versão | Tipo de Mudança |
|-------|-----------------|-------------|-----------------|
| `ironclaw_common` | 0.4.2 | 0.5.0 | ⚠️ Breaking |
| `ironclaw_safety` | 0.2.2 | 0.2.3 | ✓ Compatível |
| `ironclaw_skills` | 0.3.0 | 0.4.0 | ⚠️ Breaking |
| `ironclaw` | 0.24.0 | 0.29.1 | Compatível |

**Breaking changes em `ironclaw_common` 0.5.0:** Alterações incompatíveis na API do crate base. Desenvolvedores que utilizam `ironclaw_common` diretamente devem revisar a migração antes de atualizar.

**Link:** [nearai/ironclaw PR #5598](https://github.com/nearai/ironclaw/pull/5598)

---

## 3. Progresso do Projeto

### PRs Merged/Fechados Hoje (8 total identificados)

| # | PR | Descrição | Impacto |
|---|-----|-----------|---------|
| #6281 | `perf(turns): long-lived authority + remove redundant global commit_gate` | Remoção do mutex `commit_gate` global no `FilesystemTurnStateRowStore`. Refatoração pure latency/CPU sem alteração de semântica de durability. | 🔥 Performance |
| #6277 | `refactor(composition): enforcement axes become resolved policy values` | Fase 1 da consolidação do `DeploymentConfig`. Eixos de enforcement agora são valores resolvidos, não matches de perfil. | Arquitetura |
| #6282 | `refactor(composition): RebornBuildInput carries the DeploymentConfig` | Fase 4: `RebornBuildInput` agora carrega `DeploymentConfig` como dado, eliminando rederivação em cada consumidor. | Arquitetura |
| #6176 | `ci: build and validate Reborn release binaries across seven targets` | Pipeline de validação cross-target para binários Reborn com feature contract explícito. | DevOps/CI |
| #6283 | `refactor(reborn): Suspension::DependentRun carries the staged child result` | Estágio 1b do capability-result flip (§5.3). Vocabulary slice aditivo que fecha hazard verificado bloqueando o flip atômico. | Arquitetura |
| #6278 | `refactor(reborn): complete host-side gate reconstitution` | Estágio 0 do capability-result flip. Preparação sem alteração no loop-facing trait. | Arquitetura |

**Análise:** A semana está fortemente focada na rearquitetura "Reborn" com entregas incrementais bem definidas em fases. O PR #6281 representa ganho concreto de performance no subsistema crítico de turnos.

**Links:**
- [nearai/ironclaw PR #6281](https://github.com/nearai/ironclaw/pull/6281)
- [nearai/ironclaw PR #6277](https://github.com/nearai/ironclaw/pull/6277)
- [nearai/ironclaw PR #6282](https://github.com/nearai/ironclaw/pull/6282)
- [nearai/ironclaw PR #6176](https://github.com/nearai/ironclaw/pull/6176)
- [nearai/ironclaw PR #6283](https://github.com/nearai/ironclaw/pull/6283)
- [nearai/ironclaw PR #6278](https://github.com/nearai/ironclaw/pull/6278)

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| # | Título | Comentários | Autores | Tema |
|---|--------|-------------|---------|------|
| #6263 | `§4.3 final store consolidation: retire InMemoryTurnStateStore` | 5 | ilblackdragon | Refatoração/Reborn |
| #6274 | `Finish DeploymentConfig as the main composition config` | 2 | ilblackdragon | Arquitetura |
| #6158 | `Add zh-TW Traditional Chinese localization` | 2 | PeterDaveHello | Localização/i18n |

### Análise dos Temas

**1. Reborn Architecture (#6263, #6274, #6284):**
Três issues do core team `ilblackdragon`tratam de aspectos distintos da rearquitetura Reborn:
- **#6263**: Retirada do `InMemoryTurnStateStore` após consolidations anteriores (A1–A8). Documenta dívida técnica remanescente no ratchet de stores em memória.
- **#6274**: Finalização do `DeploymentConfig` como configuração central de composição ( Slice B do doc §4.4/§5.6/§5.11).
- **#6284**: Contrato de recuperabilidade de erros — "o modelo recupera de 100% dos erros que vê" — define terminal failure apenas para falhas genuínas irrecuperáveis.

**2. Internacionalização (#6158):**
Usuário externo (`PeterDaveHello`) propõe adição de locale zh-TW (Traditional Chinese), indicando demanda real de mercado APAC. O WebUI v2 atual suporta zh-CN mas não zh-TW, causando fallback inadequado para usuários com browser configurado em Traditional Chinese.

**Links:**
- [nearai/ironclaw Issue #6263](https://github.com/nearai/ironclaw/issues/6263)
- [nearai/ironclaw Issue #6274](https://github.com/nearai/ironclaw/issues/6274)
- [nearai/ironclaw Issue #6284](https://github.com/nearai/ironclaw/issues/6284)
- [nearai/ironclaw Issue #6158](https://github.com/nearai/ironclaw/issues/6158)

---

## 5. Bugs e Estabilidade

### Bug Reportado

| # | Severidade | Título | Reportado por | Status |
|---|------------|--------|---------------|--------|
| #6257 | **Média** | `"Invalid value (attachments.mime_type)" error when sending/generating PDF files` | sergeiest (Slack #x-ai-product-feedback) | 🟡 Aberto |

**Detalhes do Bug #6257:**
- **Cenário:** Tentativa de enviar e gerar arquivos PDF no IronClaw
- **Erro:** `Invalid value (attachments.mime_type)`
- **Suspeita:** Problema no handling de MIME type para anexos
- **Reportado via:** Slack (Michael Kelly),転 convertido em issue por sergeiest
- **Comentários:** 1 (em andamento de triagem)

**Impacto potencial:** Bloqueia geração de PDFs — funcionalidade essencial para fluxos de trabalho document-centric.

**Links:**
- [nearai/ironclaw Issue #6257](https://github.com/nearai/ironclaw/issues/6257)

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features em Progresso

| # | Título | Escopo | Status |
|---|--------|--------|--------|
| #6285 | `feat(reborn): frictionless local-dev onboarding (auto-provision serve, REPL model wizard, onboard launcher)` | Onboarding/UX Dev | 🟢 Aberto |
| #6284 | `reborn: error-recoverability endgame — the model recovers from 100% of the errors it sees` | Robustez/Resiliência | 🟢 Aberto |
| #6274 | `Finish DeploymentConfig as the main composition config` | Arquitetura | 🟢 Aberto |

### Análise de Roadmap

**Feature #6285** — "frictionless local-dev onboarding" é sinal claro de foco em DX (Developer Experience):
- Provisionamento automático de serve
- REPL model wizard interativo
- Onboard launcher end-to-end
- **Não requer setup manual de env vars**
- Mantém fail-closed para ambientes hosted/production

Esta feature indica priorização de onboarding para novos contribuidores/devices, sugerindo estratégia de expansão da base de usuários.

**Feature #6284** — Error recoverability contract define evolução do comportamento de erro:
- **(a)** Run sobrevive ao erro
- **(b)** Modelo vê o erro
- **(c)** Mensagem carrega causa + solução
- **(d)** Modelo recebe turno para agir

Isto configura um contrato explícito de robustez para a próxima versão major.

**Links:**
- [nearai/ironclaw PR #6285](https://github.com/nearai/ironclaw/pull/6285)
- [nearai/ironclaw Issue #6284](https://github.com/nearai/ironclaw/issues/6284)
- [nearai/ironclaw Issue #6274](https://github.com/nearai/ironclaw/issues/6274)

---

## 7. Resumo de Feedback dos Usuários

### Sinais Identificados

**Via Issues e PRs:**

| Fonte | Feedback | Interpretação |
|-------|----------|---------------|
| Slack #x-ai-product-feedback | PDF generation failures com `Invalid value (attachments.mime_type)` | 🔴 Blocker funcional para workflows document-centric |
| Issue #6158 | "users whose browsers prefer Traditional Chinese cannot select an appropriate locale" | 🟡 Incompatibilidade i18n causing UX fragmentação em mercado APAC |
| PR #6285 | "from-scratch run of `cargo build … && ironclaw-reborn onboard` hitting a chain of dead ends" | 🔴 DX friction para novos usuários/contributors |

### Conclusões

1. **Produtividade bloqueada:** Falha de PDF generation afeta casos de uso reais document-intensive.
2. **Mercado APAC desatendido:** Falta de zh-TW força fallback para zh-CN ou EN, potencialmente perdendo usuários.
3. **Barreira de entrada alta:** Onboarding manual com múltiplos dead ends dificulta aquisição de novos devs.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou com Baixa Atividade

| # | Título | Criado | Comentários | Idade | Prioridade |
|---|--------|--------|-------------|-------|------------|
| #6158 | `Add zh-TW Traditional Chinese localization` | 2026-07-16 | 2 | 4 dias | 🟡 Média |
| #6123 | `refactor(reborn): remove retired v1 runtime` | 2026-07-15 | 0 | 5 dias | 🔴 Alta |

### Análise

**Issue #6158** — Localization request de contribuidor externo (`PeterDaveHello`) aguarda resposta há 4 dias. Dado que a issue tem contexto claro, requisitos definidos e autor disposto a contribuir, mereceria:
- Triagem técnica (impacto no WebUI v2, esforço estimado)
- Decisão go/no-go para próxima release
- Potencialmente assign para contribuidor

**PR #6123** — Remove retired v1 runtime (XL scope, 25+ scopes afetados). Este é um dos PRs mais críticos da transição Reborn:
- Remove runtime v1 aposentado
- Converte root package em integration/parity harness
- Adiciona guardrails arquiteturais anti-regressão v1

Apesar da criticidade, não há comentários — sugerindo:
- Em revisão ativa pelo core team, ou
- aguardando merge sequence (possui dependências de PRs relacionados)

**Link:** [nearai/ironclaw Issue #6158](https://github.com/nearai/ironclaw/issues/6158) | [nearai/ironclaw PR #6123](https://github.com/nearai/ironclaw/pull/6123)

---

## Métricas Consolidada do Dia

| Indicador | Valor | Tendência |
|-----------|-------|-----------|
| Issues abertas/ativas (24h) | 5 | Neutra |
| PRs abertos (24h) | 24 | ↑ Alta |
| PRs merged/fechados (24h) | 26 | ↑ Alta |
| Releases novas | 0 | Neutra |
| Bugs reportados | 1 | Neutra |
| Features em desenvolvimento | 3+ | Alta |
| Proporção core/regular contributors | ~70% core | Concentração |

---

*Relatório gerado em 2026-07-20. Dados extraídos de github.com/nearai/ironclaw.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do Projeto QwenPaw (CoPaw) — 2026-07-20

---

## 1. Panorama do Dia

O projeto **QwenPaw** (CoPaw) apresenta alta atividade comunitária em 20 de julho de 2026. Foram registradas **11 issues atualizadas** nas últimas 24h (10 abertas, 1 fechada) e **6 Pull Requests** submetidos, com nenhum merge realizado. A atividade concentra-se em correções de bugs e features para a versão 2.0.0.post3, indicando maturidade do release atual com refinamentos em andamento. Não houve releases novas, sugerindo foco em estabilização da base de código atual.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

O último release estável permanece **v2.0.0.post3**, com dependência `agentscope 2.0.4.post1`. A ausência de novos lançamentos indica ciclo de QA antes da próxima versão.

---

## 3. Progresso do Projeto

**Nenhum PR mergeado/fechado nas últimas 24h.** Todos os 6 PRs abertos aguardam revisão:

| PR | Descrição | Status | Autor |
|----|-----------|--------|-------|
| [#6262](https://github.com/agentscope-ai/QwenPaw/pull/6262) | Copy one-click de configurações de agentes | OPEN | yuanxs21 |
| [#6259](https://github.com/agentscope-ai/QwenPaw/pull/6259) | Suporte CIDR na allowlist de hosts sem autenticação | first-time-contributor | dztyykxx |
| [#6195](https://github.com/agentscope-ai/QwenPaw/pull/6195) | Refatoração ring de contexto para indicador de uso | ready-for-human-review | yuanxs21 |
| [#6256](https://github.com/agentscope-ai/QwenPaw/pull/6256) | Configurabilidade do fallback quando sandbox indisponível | first-time-contributor | JOJOCrazy123 |
| [#6247](https://github.com/agentscope-ai/QwenPaw/pull/6247) | Catch OSError em `_saved_tool_refs` | OPEN | zealonexp |
| [#6251](https://github.com/agentscope-ai/QwenPaw/pull/6251) | CLI scriptable para leitura de environment | OPEN | wananing |

**Destaque:** O PR [#6259](https://github.com/agentscope-ai/QwenPaw/pull/6259) adiciona suporte a ranges CIDR IPv4/IPv6 para configuração `security.allow_no_auth_hosts`, resolvendo limitação operacional em redes corporativas.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários)

| Issue | Tema | Comentários | Link |
|-------|------|-------------|------|
| [#6193](https://github.com/agentscope-ai/QwenPaw/issues/6193) | MCP drivers inicializam sequencialmente (8x mais lento) | 4 | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6193) |
| [#6163](https://github.com/agentscope-ai/QwenPaw/issues/6163) | Workflow orquestração reutilizável com audit trail | 3 | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6163) |
| [#6240](https://github.com/agentscope-ai/QwenPaw/issues/6240) | Comentários de memória exibidos no chat | 3 | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6240) |
| [#6257](https://github.com/agentscope-ai/QwenPaw/issues/6257) | Múltiplas tool calls geram saída de thinking idêntica | 2 | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6257) |
| [#6246](https://github.com/agentscope-ai/QwenPaw/issues/6246) | `_saved_tool_refs` crash com OSError errno 36 | 2 | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6246) |

**Análise:** A issue [#6193](https://github.com/agentscope-ai/QwenPaw/issues/6193) sobre paralelização dos MCP drivers é a mais impactante — redução de ~40s para ~5s com 8 clientes. Este é um **hotfix crítico de performance** que deveria ter alta prioridade.

A issue [#6163](https://github.com/agentscope-ai/QwenPaw/issues/6163) representa demanda por **workflows reutilizáveis**, indicando que usuários avançados precisam de orquestração de agentes com rastreabilidade.

---

## 5. Bugs e Estabilidade

### Bugs Críticos

| Severidade | Issue | Descrição | Link |
|------------|-------|-----------|------|
| **Alta** | [#6246](https://github.com/agentscope-ai/QwenPaw/issues/6246) | Crash em `recall_history` com `OSError: [Errno 36]` — nome de arquivo muito longo em regex | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6246) |
| **Alta** | [#6255](https://github.com/agentscope-ai/QwenPaw/issues/6255) | `BadRequestError` durante chat — interrupção de uso | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6255) |

### Bugs Médios

| Issue | Descrição | Link |
|-------|-----------|------|
| [#6257](https://github.com/agentscope-ai/QwenPaw/issues/6257) | Thinking blocks idênticos para múltiplas tool calls na mesma rodada | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6257) |
| [#6258](https://agentscope-ai/QwenPaw/issues/6258) | Limite de max_output_tokens não funciona para modelo OpenAI | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6258) |
| [#6240](https://github.com/agentscope-ai/QwenPaw/issues/6240) | Comentários de memória aparecem no final do chat | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6240) |
| [#6261](https://github.com/agentscope-ai/QwenPaw/issues/6261) | Preview de arquivos não funciona offline — usa recursos online | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6261) |
| [#6252](https://github.com/agentscope-ai/QwenPaw/issues/6252) | Zoom com Ctrl+/- não funciona no modo desktop Linux (Tauri) | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6252) |

**Nota:** PR [#6247](https://github.com/agentscope-ai/QwenPaw/pull/6247) já propõe correção para o bug [#6246](https://github.com/agentscope-ai/QwenPaw/issues/6246), mas ainda não foi mergeado.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| Feature | Descrição | Prioridade Indicada | Link |
|---------|-----------|---------------------|------|
| **MCP Paralelo** | Inicialização paralela de drivers MCP (~8x speedup) | Alta — performance | [#6193](https://github.com/agentscope-ai/QwenPaw/issues/6193) |
| **Workflow Orquestração** | Fluxos reutilizáveis multi-step com audit trail | Média — enterprise | [#6163](https://github.com/agentscope-ai/QwenPaw/issues/6163) |
| **Per-Agent Memory Profiles** | Perfis de memória customizados por agente | Média — personalização | [#6263](https://github.com/agentscope-ai/QwenPaw/issues/6263) |
| **UI Result-First** | Colapsar思考/ferramentas, mostrar resultado primeiro | Média — UX | [#6260](https://github.com/agentscope-ai/QwenPaw/issues/6260) |
| **Copy Agent Config** | One-click copy de configurações de agente | Baixa — usabilidade | [#6262](https://github.com/agentscope-ai/QwenPaw/pull/6262) |
| **CLI Scriptable** | Reads de environment para scripts (get/list --json) | Baixa — DevOps | [#6251](https://github.com/agentscope-ai/QwenPaw/pull/6251) |

**Sinais de roadmap observados:**
- **Orquestração avançada:** A comunidade busca capacidades de workflow além de chat multi-agente básico
- **Performance crítica:** Otimização de inicialização MCP é demanda quente
- **UX refinamento:** Usuários querem interface focada em resultados, não em processo

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Categoria | Descrição | Frequência |
|-----------|-----------|------------|
| **Performance** | Inicialização lenta de MCP (40s para 8 clientes) | Crítica |
| **Estabilidade** | Crashes esporádicos com BadRequestError e OSError | Frequente |
| **UX/UI** | Interface poluída por outputs de ferramentas e pensamentos | Frequente |
| **Offline** | Funcionalidades dependentes de rede em ambiente offline | Relatado |
| **Configuração** | Falta de granularidade em memória por agente | Solicitado |

### Cenários de Uso Mencionados

- **Ambientes corporativos:** Necessidade de ranges CIDR para redes internas ([#6259](https://github.com/agentscope-ai/QwenPaw/pull/6259))
- **Companheiros digitais:** Agentes pessoais com diários cronológicos vs. técnicos com memória por tópico ([#6263](https://github.com/agentscope-ai/QwenPaw/issues/6263))
- **DevOps/Scripts:** Necessidade de reads programáticos do environment store ([#6251](https://github.com/agentscope-ai/QwenPaw/pull/6251))

---

## 8. Backlog que Merece Atenção

### Issues sem resposta prolongada

| Issue | Idade | Status | Link |
|-------|-------|--------|------|
| [#6163](https://github.com/agentscope-ai/QwenPaw/issues/6163) | 4 dias | OPEN (Feature request) | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6163) |
| [#6193](https://github.com/agentscope-ai/QwenPaw/issues/6193) | 4 dias | OPEN (Performance crítica) | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6193) |

### Issues fechadas recente

| Issue | Resultado | Link |
|-------|-----------|------|
| [#6240](https://github.com/agentscope-ai/QwenPaw/issues/6240) | Resolvida/fechada (comentários de memória) | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6240) |

### Recomendação de Prioridades

1. **Urgente:** Review e merge do PR [#6247](https://github.com/agentscope-ai/QwenPaw/pull/6247) — corrige crash crítico
2. **Alta:** Avaliar PR [#6193](https://github.com/agentscope-ai/QwenPaw/issues/6193) — impacto 8x em performance
3. **Média:** Planejar implementação de workflows orquestráveis ([#6163](https://github.com/agentscope-ai/QwenPaw/issues/6163))

---

## Métricas Resumidas do Dia

| Métrica | Valor |
|---------|-------|
| Issues abertas/ativas | 10 |
| Issues fechadas | 1 |
| PRs abertos | 6 |
| PRs mergeados | 0 |
| Releases | 0 |
| Bugs críticos reportados | 2 |
| Features solicitadas | 5+ |

---

*Relatório gerado automaticamente para 2026-07-20 com base em dados do GitHub.*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>


# Relatório do Projeto ZeroClaw — 2026-07-20

## 1. Panorama do dia

O ecossistema ZeroClaw mantém uma atividade intensa e saudável. Nas últimas 24 horas, foram registradas 50 interações em issues e 50 em pull requests, com uma proporção expressiva de itens abertos (42 issues, 46 PRs) contra apenas 8 e 4 fechamentos, respectivamente — indicando um pipeline robusto de entrada, mas também uma carga de revisão que demanda atenção dos mantenedores. Não houve lançamentos hoje, sinalizando possivelmente uma fase de maturação de mudanças antes da próxima release. A comunidade está profundamente engajada em questões arquiteturais de médio prazo (memória persistente, plugins WASM, separação de histórico), enquanto bugs de alta severidade como a configuração do Telegram e o bypass de tool gating recebem tratamento prioritário. O volume de ADRs e RFCs em curso sugere uma postura madura de governança técnica.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24 horas.**

O projeto não publicou novas versões hoje. Dado o volume ativo de PRs de refatoração (size:L e size:XL) e a quantidade de RFCs em andamento, é provável que a equipe esteja preparando uma nova versão beta ou release candidate para consolidação do ciclo 0.8.x.

---

## 3. Progresso do Projeto

As seguintes PRs representam avanços concretos merged ou em estágio avançado de revisão:

- **#9170** — *docs(agents): correct rename and deletion lifecycle* (Audacity88): Corrige a documentação de ciclo de vida de agentes para refletir as cascatas de rename e delete implementadas. Corresponde a uma demanda de consistência operacional documentada. [[PR #9170](https://github.com/zeroclaw-labs/zeroclaw/pull/9170)]

- **#9105** — *fix(memory): allow Lucid ARM cold starts, make timeouts configuráveis* (yanchenko): Aumenta o timeout do recall Lucid de 500ms para 3s e o de store de 800ms para 3s, resolvendo falhas de cold start em ARM AArch64. Impacto direto na resiliência em edge. [[PR #9105](https://github.com/zeroclaw-labs/zeroclaw/pull/9105)]

- **#8561** — *feat(channels/telegram): add multi_message streaming mode* (metalmon): Implementa `StreamMode::MultiMessage` para Telegram com `multi_message_delay_ms` configurável, alinhando o comportamento com Discord e Matrix. [[PR #8561](https://github.com/zeroclaw-labs/zeroclaw/pull/8561)]

- **#9181** — *fix(channels): send Nextcloud Talk replies via signed bot API* (perlowja): Corrige autenticação HMAC-SHA256 para Nextcloud Talk, abandonando bearer auth incorreto. [[PR #9181](https://github.com/zeroclaw-labs/zeroclaw/pull/9181)]

- **#9007** — *fix(runtime): trim structured history by whole turns* (Audacity88): Garante que o aparamento de histórico estruturado ocorra apenas em limites de turn inteiros, evitando orphan tool calls/results. [[PR #9007](https://github.com/zeroclaw-labs/zeroclaw/pull/9007)]

- **#9011** — *feat(zerocode): show active runtime context in dashboard* (Audacity88): Adiciona visibilidade do contexto de runtime ativo no dashboard ZeroCode. [[PR #9011](https://github.com/zeroclaw-labs/zeroclaw/pull/9011)]

- **#9163, #9167, #9168, #9132** — Documentação arquitetural: múltiplos ADRs propostos/aceitos cobrindo autoridade de memória (#9163), limites de runtime multi-agente (#9167), config apply live (#9168) e ciclo de vida de background work (#9132). [[ADR-010](https://github.com/zeroclaw-labs/zeroclaw/pull/9163)] [[ADR-011](https://github.com/zeroclaw-labs/zeroclaw/pull/9167)] [[ADR-012](https://github.com/zeroclaw-labs/zeroclaw/pull/9168)]

---

## 4. Temas Quentes da Comunidade

| Issue | Comentários | Tema |
|-------|-------------|------|
| [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) | 14 | RFC: Work Lanes, Board Automation, Label Cleanup |
| [#2079](https://github.com/zeroclaw-labs/zeroclaw/issues/2079) | 9 | GitHub como canal nativo (CLOSED) |
| [#6641](https://github.com/zeroclaw-labs/zeroclaw/issues/6641) | 8 | OTel trace correlation por turn |
| [#6378](https://github.com/zeroclaw-labs/zeroclaw/issues/6378) | 8 | Discord: restrict bot a canais específicos (CLOSED) |
| [#8891](https://github.com/zeroclaw-labs/zeroclaw/issues/8891) | 7 | Tracker: Persistent memory parity |
| [#9127](https://github.com/zeroclaw-labs/zeroclaw/issues/9127) | 7 | RFC: Abstract KeySource trait |
| [#6055](https://github.com/zeroclaw-labs/zeroclaw/issues/6055) | 7 | Slack: hydrate thread context on first mention |
| [#8505](https://github.com/zeroclaw-labs/zeroclaw/issues/8505) | 6 | **Bug P1:** Telegram não configura |
| [#9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048) | 6 | RFC: Separate conversation history from memory |
| [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) | 6 | RFC: Decouple memory lifecycle policy |

**Análise:** O tema dominante é a **arquitetura de memória** — três dos cinco itens mais comentados tratam diretamente de separação de histórico, política de ciclo de vida e paridade de memória persistente. Isso reflete uma dor real de usuários que precisam de memória cross-session robusta. O RFC de Work Lanes (#6808) domina com 14 comentários, indicando que a comunidade quer mais automação de triage e governança de projeto. A integração GitHub como canal nativo (#2079) foi fechada com resolução, sinalizando que essa demanda de longa data foi atendida.

---

## 5. Bugs e Estabilidade

### Prioridade P1 — Críticos

| Issue | Severidade | Descrição |
|-------|------------|-----------|
| [#8505](https://github.com/zeroclaw-labs/zeroclaw/issues/8505) | S1 — workflow blocked | Telegram channel não configura via quickstart/zerocode; bot não responde no TG |
| [#9117](https://github.com/zeroclaw-labs/zeroclaw/issues/9117) | S3 — minor | ZeroCode não inicia no Windows sem `ZEROCLAW_SOCKET` |
| [#8559](https://github.com/zeroclaw-labs/zeroclaw/issues/8559) | S1 — workflow blocked | Agentes param trabalho ao sair da janela de chat no dashboard web |
| [#7947](https://github.com/zeroclaw-labs/zeroclaw/issues/7947) | **S0 — security** | `execute_pipeline` ignora `ToolAccessPolicy` por agente (confused deputy) |

### Prioridade P2 — Degradados

| Issue | Severidade | Descrição |
|-------|------------|-----------|
| [#7808](https://github.com/zeroclaw-labs/zeroclaw/issues/7808) | S2 — degraded | CLI secret prompts não dão feedback após colar |

**Alerta de segurança:** #7947 é classificado como S0 com risco de segurança. O bypass de tool gating permite que um pipeline execute ferramentas que o agente não deveria ter acesso. Este item está `in-progress` e merece acompanhamento prioritário. [[Issue #7947](https://github.com/zeroclaw-labs/zeroclaw/issues/7947)]

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features com momentum alto (RFCs aceitas / trackers em progresso)

| Issue | Tipo | Descrição |
|-------|------|-----------|
| [#8891](https://github.com/zeroclaw-labs/zeroclaw/issues/8891) | Tracker | Persistent memory — wiring de curation, relevance e operability (21 itens open) |
| [#9127](https://github.com/zeroclaw-labs/zeroclaw/issues/9127) | RFC | Abstract `KeySource` trait para classificar material de chave-mestra |
| [#9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048) | RFC | Separar histórico de conversa de memória curada de longo prazo |
| [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) | RFC | Decouple memory lifecycle policy de storage backends |
| [#8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850) | RFC | Mover canais e ferramentas de feature flags para plugins WASM runtime |
| [#6641](https://github.com/zeroclaw-labs/zeroclaw/issues/6641) | Feature | OTel trace correlation aninhado por turn (llm.call/tool.call/memory.*) |
| [#6055](https://github.com/zeroclaw-labs/zeroclaw/issues/6055) | Feature | Slack: backfill thread context via `conversations.replies` |
| [#7539](https://github.com/zeroclaw-labs/zeroclaw/issues/7539) | Feature | llama.cpp model router para troca rápida de modelos |
| [#8600](https://github.com/zeroclaw-labs/zeroclaw/issues/8600) | Feature | Easy per-chat model switching para providers multi-model (👍 1) |
| [#5316](https://github.com/zeroclaw-labs/zeroclaw/issues/5316) | Feature | SearXNG como provider de busca + CAPTCHA detection para DDG |

### Novas demands emergentes

- **Voice host channel** (#7943): WS client backend-agnóstico para ASR/TTS em tempo real, alinhado com protocolo Wyoming.
- **Reload sem downtime** (#7897): Aplicar mudanças de política de segurança e config de canal sem reload do daemon.
- **Teste cross-platform** (#7461): CI em Windows e macOS, não apenas Linux.
- **Cron raw output** (#8438): `shell_output_format` para stdout puro em cron jobs.

---

## 7. Resumo de Feedback dos Usuários

### Dores recorrentes identificadas

1. **Configuração de canais é frágil** — Usuários relatam que `zeroclaw channels doctor` reporta canais não configurados mesmo após setup via quickstart, especialmente Telegram (#8505). Isso afeta diretamente a experiência inicial (onboarding) e é classificado como S1.

2. **Windows é cidadão de segunda** — O bug de socket (#9117) e a ausência de testes CI em Windows (#7461) indicam que a experiência Windows precisa de investimento. A issue do socket é S3, mas o padrão mais amplo de negligência cross-platform é um cheiro de code smell organizacional.

3. **Memória persistente não é confiável** — O tracker #8891 com 21 itens open demonstra que a comunidade reconhece a memória cross-session como incompleta. Usuários que dependem de contexto de longo prazo enfrentam inconsistências.

4. **Fluxo de trabalho em background é confuso** — Issues como #8559 (agente para ao sair do chat) e #7759 (WebSocket linka lifetime do turn) revelam que o modelo de execução em background não está claro para operadores. A documentação de background work lifecycle (#9132) é uma resposta direta.

5. **Tool gating é inseguro em pipelines** — A classificação S0 de #7947 é crítica: usuários que confiam em políticas de acesso por agente estão potencialmente expostos. Este é o item de maior risco percebido para segurança do ecossistema.

### Cenários de uso destacados

- **Agentes autônomos em background**: usuários querem que agentes continuem trabalhando após desconexão do chat (#7759, #8559).
- **Multi-agente com isolamento**: a arquitetura multi-agente (#9167) está sendo formalizada via ADR, sinalizando adoção em cenários de produção.
- **Privacidade de busca**: demanda por SearXNG (#5316) indica segmento de usuários técnico-privacidade que não quer depender de Google/DuckDuckGo.

---

## 8. Backlog que Merece Atenção

### Issues sem resposta ou estagnadas

| Issue | Idade aprox. | Prioridade | Status | Observação |
|-------|--------------|------------|--------|------------|
| [#5316](https://github.com/zeroclaw-labs/zeroclaw/issues/5316) — SearXNG + CAPTCHA detection | ~3 meses | P2 | `in-progress` | Volta recorrente; úteis para autônomos |
| [#6055](https://github.com/zeroclaw-labs/zeroclaw

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*