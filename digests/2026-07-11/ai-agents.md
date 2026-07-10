# Resumo diário do ecossistema de agentes de IA 2026-07-11

> Issues: 2 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-07-10 21:02 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal


# Relatório do Projeto NullClaw — 2026-07-11

---

## 1. Panorama do Dia

O projeto NullClaw manteve uma atividade moderada em 11 de julho de 2026, com **2 issues abertas** registradas nas últimas 24h e **zero PRs merged ou fechado**. Nenhum release foi publicado no período. A comunidade reportou dois problemas em aberto: um bug crítico de estabilidade no canal Telegram (idle timeout após períodos de inatividade) e uma vulnerabilidade de segurança no mecanismo de autenticação A2A por bearer token. O projeto encontra-se em estado de manutenção reativa, sem avanços de código mergeados no período analisado.

---

## 2. Lançamentos

**Nenhum release publicado nas últimas 24h.**

O projeto não registrou atividade de release no período. Recomenda-se monitorar o repositório para eventuais publicações relacionadas à correção dos bugs reportados (issues #972 e #974).

---

## 3. Progresso do Projeto

**Nenhuma PR merged ou fechada nas últimas 24h.**

O período analisado não apresenta contribuições mergeadas ao código base. A ausência de atividade de PR pode indicar:
- Foco da comunidade em reportar e discutir issues ao invés de implementar;
- Período de avaliação/validação de contribuições pendentes.

---

## 4. Temas Quentes da Comunidade

### Issue com maior repercussão técnica: **#972** — Telegram channel stop respond after idle time
- **Autor:** i11010520
- **Criado:** 2026-06-30 | **Atualizado:** 2026-07-10
- **Comentários:** 2 | **Likes:** 0
- **Link:** [nullclaw/nullclaw Issue #972](https://github.com/nullclaw/nullclaw/issues/972)

**Análise:** Issue aberta há 11 dias com interação recente (2 comentários). O problema descreve um bug de estabilidade onde o canal Telegram do agente deixa de responder após períodos de inatividade noturna, embora o backend continue operando normalmente. O diagnóstico inicial indica que o problema pode estar na camada de reconnect/heartbeat do cliente Telegram, não no núcleo do NullClaw.

### Issue crítica de segurança: **#974** — Shared bearer A2A route allows cross-caller task/context reuse
- **Autor:** N0zoM1z0
- **Criado:** 2026-07-10 | **Atualizado:** 2026-07-10
- **Comentários:** 0 | **Likes:** 0
- **Link:** [nullclaw/nullclaw Issue #974](https://github.com/nullclaw/nullclaw/issues/974)

**Análise:** Issue de segurança recém-reportada (1 dia) que expõe uma falha no mecanismo de autenticação A2A. O problema: embora `/a2a` seja protegido por bearer token, a seleção de task/session authority é feita por task ID e `contextId` fornecidos pelo chamador. Isso permite que usuários com bearer válido leiam e reutilizem contexto de outros usuários (Alice/Bob scenario descrito no relatório). **Severidade potencial: ALTA** — requer ação imediata.

---

## 5. Bugs e Estabilidade

| Severidade | Issue | Descrição | Status | Prioridade |
|------------|-------|-----------|--------|------------|
| **ALTA** | #974 | Vulnerabilidade de autenticação A2A — reutilização de contexto entre usuários | OPEN | 🔴 Crítica |
| **MÉDIA** | #972 | Canal Telegram para de responder após idle prolongado | OPEN | 🟡 Importante |

### Detalhamento:

**#974 — Security Bug (CRÍTICA):**
O bug permite que dois usuários (Bob e Alice) compartilhando um bearer token válido executem:
1. Leitura do histórico de tasks um do outro
2. Reutilização de `contextId` para receber respostas destinadas ao outro usuário

**Mitigação sugerida:** Implementar validação de ownership no nível do task ID antes de servir dados, não confiando apenas no bearer token para isolamento de sessão.

**#972 — Stability Bug:**
Comportamento observado: o cliente Telegram se torna irressponsivo após ~8-16h de idle, mesmo com o backend NullClaw operacional. Diagnóstico diferencial necessário:
- Problema no reconnect automático do SDK Telegram
- Timeout de WebSocket/polling
- Configuração de keep-alive inadequada

---

## 6. Pedidos de Features e Sinais de Roadmap

**Nenhuma feature request aberta nas últimas 24h.**

A ausência de FRs no período sugere que a comunidade está mais focada em estabilidade do que em novas funcionalidades. O padrão de issues reportadas indica demandas implícitas:

1. **Resiliência de canais:** Necessidade de mecanismos robustos de reconnect para integrações externas (Telegram, etc.)
2. **Isolamento de sessão A2A:** Reforço de segurança em comunicações agent-to-agent

---

## 7. Resumo de Feedback dos Usentes

### Dores identificadas:

| Dor | Origem | Severidade |
|-----|--------|------------|
| **Indisponibilidade do Telegram após idle** | #972 | Afeta usuários com agentes que operam em horários imprevisíveis ou com baixa frequência de mensagens |
| **Vazamento de contexto entre usuários A2A** | #974 | Afeta deployments multi-tenant; risco de compliance/GDPR |

### Cenários de uso inferidos:
- **Deploy em produção em cloud (EC2):** Issue #972 reportada de instância EC2, indicando uso em ambiente cloud
- **Comunicação A2A entre agentes:** Issue #974 indica arquitetura distribuída com múltiplos agentes NullClaw se comunicando via protocolo A2A

---

## 8. Backlog que Merece Atenção

### Issues sem resposta há >7 dias:

| Issue | Título | Criado | Dias Aberto | Prioridade |
|-------|--------|--------|-------------|------------|
| **#972** | Telegram channel stop respond after idle time | 2026-06-30 | **11 dias** | 🟡 Alta |
| **#974** | NullClaw shared bearer A2A route allows cross-caller... | 2026-07-10 | **1 dia** | 🔴 Crítica |

### Recomendação de priorização:

1. **IMEDIATO:** #974 — A vulnerabilidade de segurança requer triage e possível hotfix
2. **CURTO PRAZO:** #972 — Bug de estabilidade afeta UX em produção

---

## Métricas Consolidada do Período

| Métrica | Valor |
|---------|-------|
| Issues abertas/ativas (24h) | 2 |
| Issues fechadas (24h) | 0 |
| PRs abertas (24h) | 0 |
| PRs merged/fechadas (24h) | 0 |
| Releases (24h) | 0 |
| Taxa de resolução | 0% |
| Issues críticas pendentes | 1 (segurança) |

---

*Relatório gerado automaticamente com base nos dados públicos do GitHub. Última atualização: 2026-07-11.*

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo — Ecossistema de Agentes de IA Open Source

**Data de Referência:** 2026-07-11 | **Projetos Analisados:** 7 | **Analista:** Sênior de Ecossistema Open Source

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source demonstra **duas velocidades distintas** neste período. De um lado, projetos como **NanoBot, Hermes Agent, IronClaw, QwenPaw e ZeroClaw** mantêm ritmo intenso de desenvolvimento, com 30-50+ atividades diárias e múltiplos PRs mergeados. Do outro, **NullClaw** permanece em modo de manutenção reativa, sem contributions mergeadas e com vulnerabilidades críticas pendentes. O panorama geral revela um ecossistema amadurecendo em três eixos simultâneos: **segurança** (hardening de autenticação em todos os projetos), **estabilidade de canais** (Telegram, WhatsApp, Slack) e **performance de modelos locais** (Ollama, LM Studio). A release mais significativa do período é **QwenPaw v2.0.0**, que representa uma reformulação arquitetural completa.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs Ativos | PRs Merged (24h) | Releases | Saúde | Indicador Crítico |
|---------|:------------:|:----------:|:----------------:|:--------:|:-----:|-------------------|
| **NanoBot** | 7 | 25 | 6 | 0 | 🟢 Alta | Security: `/restart` sem auth |
| **Hermes Agent** | 50 | 50 | 4 | 0 | 🟢 Alta | Credential leak em redirects |
| **IronClaw** | 32 | 50 | 18 | 0 | 🟢 Alta | 6 bugs P1-P2 (Slack) |
| **QwenPaw** | 43 | 49 | 26 | **3** | 🟢 Alta | Sandbox Windows quebrado |
| **ZeroClaw** | 27 | 50 | 7 | 0 | 🟢 Alta | 2 bugs S0 (skill-review, Xiaomi) |
| **PicoClaw** | 2 | 17 | 1 | 0 | 🟡 Média | 5 PRs security pendentes |
| **NullClaw** | 2 | 0 | 0 | 0 | 🔴 Baixa | Vulnerabilidade A2A (CRÍTICA) |

**Síntese:** QwenPaw lidera em volume absoluto de atividade e é o único com releases formais (v2.0.0 stable). NullClaw apresenta o pior indicadores de saúde, com 0 PRs mergeados e vulnerabilidade de segurança aberta há 1 dia sem triagem.

---

## 3. Posicionamento do Projeto Principal

### Análise por Projeto

**NanoBot (HKUDS)** — Foco em modularidade de subagentes e ergonomia de CLI. Diferencia-se por suportar override de modelo por subagente (PR #4623) e cron jobs com presets de modelo. Público-alvo: desenvolvedores avançados que precisam de arquiteturas multi-agente com controle granular.

**Hermes Agent (NousResearch)** — Plataforma mais madura em integrações (Slack, WhatsApp, Gemini, LM Studio). PR #62292 permite roteamento para instâncias LM Studio owned. Foco em desktop app e CI/CD. Público: usuários enterprise que precisam de canais múltiplos.

**QwenPaw (Agentscope-AI)** — Único com release major (v2.0.0) e reformulação arquitetural completa. Baseado em AgentScope 2.0 Runtime. Foco em memória persistente (ReMe 0.4) e observabilidade (Langfuse). Público: desenvolvedores chineses e mercados asiáticos.

**ZeroClaw** — Mais focado em segurança e hardening. 7 PRs de security merged, incluindo HTTP headers e per-sender authz. Preparação ativa para v0.9.0 com breaking changes. Feature ambiciosa: SOP web authoring. Público: power users e cenários de automação crítica.

**IronClaw (NearAI)** — Foco intenso em UX/WebUI e design system. 18 PRs merged demonstra maturidade de processo. Slack é área problemática (6 bugs separados). Público: usuários que priorizam interface web sobre CLI.

**PicoClaw (Sipeed)** — Nicho edge/IoT (Raspberry Pi, ARMv7, Docker). Go-based com foco em canais (WhatsApp, Matrix, MQTT). 5 PRs de segurança pendentes indicam dívida técnica. Público: desenvolvedores de IoT e automação residencial.

**NullClaw** — Menor atividade. Problema estratégico: vulnerabilidade de segurança crítica sem resposta. Modo reativo sem contribuições ativas. Necessita intervención urgente de mantenedores.

---

## 4. Focos Técnicos Compartilhados

### 4.1 Segurança de Autenticação (Prioridade Universal)

Todos os projetos apresentam issues de segurança neste período:

| Projeto | Vulnerabilidade | Severidade |
|---------|-----------------|:-----------:|
| **NullClaw** | A2A bearer token permite cross-caller context reuse (#974) | 🔴 CRÍTICA |
| **NanoBot** | `/restart` command sem autorização (#4776) | 🔴 CRÍTICA |
| **Hermes Agent** | Credential headers vazam em redirects 3xx (#60421) | 🔴 CRÍTICA |
| **ZeroClaw** | Per-sender authz em `/model --agent` (#8044) | ✅ Corrigido |
| **PicoClaw** | MQTT TLS verification desabilitada (#3246) | 🔴 Crítica |
| **IronClaw** | Multiple Slack auth issues | 🟠 Alta |
| **QwenPaw** | MCP allow/deny policies ignoradas (#5947) | 🔴 CRÍTICA |

**Síntese:** Padrão recorrente — autenticação é tratada como secundária e implementada sem validação de contexto (caller ID, ownership). Recomenda-se que todos os projetos implementem validação explícita de authorization além de authentication.

### 4.2 Estabilidade de Canais (Telegram/WhatsApp/Slack)

| Canal | Projetos Afetados | Problemas Reportados |
|-------|:-----------------:|----------------------|
| **Telegram** | 4/7 | Idle timeout (NullClaw #972), multi-image append (ZeroClaw #5514), command menu limit (ZeroClaw #8950) |
| **WhatsApp** | 2/7 | Websocket timeout (PicoClaw #3178), typing presence (PicoClaw #3240) |
| **Slack** | 2/7 | DM enviado para canal errado (IronClaw #5943), disconnect quebrado (IronClaw #5834), thread context (Hermes #23141) |

**Padrão identificado:** Canais externos são fonte consistente de instabilidade. Problemas recorrentes incluem: reconexão após idle, delivery confirmation, e context threading.

### 4.3 Performance com Modelos Locais (Ollama/LM Studio)

| Projeto | Problema | Impacto |
|---------|----------|---------|
| **NanoBot** | Prompt prefix não preservado para caching (#4867) | +60s por turno |
| **Hermes** | Prompts excessivamente grandes para locais (#61265) | Stalls de minutos |
| **ZeroClaw** | `hash_value` aloca árvore JSON inteira (#8936) | RSS leak |

**Síntese:** Inferência local está sendo adotada por usuários que priorizam privacidade, mas tooling ainda não está otimizado. Caching e token minimization são necessidades não endereçadas.

---

## 5. Análise de Diferenciação

| Dimensão | NanoBot | Hermes | QwenPaw | ZeroClaw | IronClaw | PicoClaw | NullClaw |
|----------|:-------:|:------:|:-------:|:--------:|:--------:|:--------:|:--------:|
| **Foco Principal** | Subagentes modulares | Multi-channel | Runtime v2.0 | Security hardening | WebUI/Design | Edge/IoT | — |
| **Arquitetura** | CLI-first | Desktop + CLI | AgentScope-based | Modular Rust | Web-centric | Go-native | — |
| **Público-Alvo** | Devs avançados | Enterprise multi-channel | Mercados asiáticos | Power users | Web-first users | IoT/Edge | — |
| **Maturidade** | 🟢 Estável | 🟢 Estável | 🟡 Transição (v2.0) | 🟢 Estável | 🟢 Estável | 🟡 Crescendo | 🔴 Estagnado |
| **Releases (30d)** | 0 | 0 | **3** | 0 | 0 | 0 | 0 |
| **Feature Distinctiva** | Model override por subagente | LM Studio routing | ReMe memory | SOP web authoring | Design system | ARMv7 builds | — |
| **Technical Debt** | Baixa | Moderada | Alta (breaking changes) | Moderada | Baixa | Alta (security) | Crítica |

**Observação:** NullClaw não demonstra foco diferenciador claro no período analisado. Seus dois issues ativos (Telegram idle, A2A security) são problemas genéricos já abordados por outros projetos com mais recursos.

---

## 6. Tração e Maturidade da Comunidade

### Velocidade de Iteração (PRs Merged/24h)

```
QwenPaw:      ████████████████████████████████ 26 (release-driven)
IronClaw:     ███████████████████ 18 (stabilization)
ZeroClaw:     ███████ 7 (security/feature mix)
NanoBot:      ██████ 6 (feature development)
Hermes:       ████ 4 (bug fixes)
PicoClaw:     █ 1 (single focus)
NullClaw:     0 (estagnado)
```

### Distribuição de Severidade de Bugs

| Projeto | Críticos (S0-S1) | Altos (S2/P1-P2) | Médios | Ratio Crítico/Total |
|---------|:----------------:|:----------------:|:------:|:--------------------:|
| **ZeroClaw** | 2 | 5 | 4 | 18% |
| **QwenPaw** | 2 | 3 | 5 | 20% |
| **NanoBot** | 1 | 2 | 2 | 20% |
| **Hermes** | 2 | 8+ | 10+ | ~12% |
| **IronClaw** | 0 | 6 | 6 | 0% |
| **NullClaw** | 1 | 1 | 0 | 50% |
| **PicoClaw** | 0 | 2 | 1 | 0% |

**Análise:** IronClaw demonstra maturidade superior com zero bugs críticos no período, apesar de alta atividade. QwenPaw e ZeroClaw mostram ratio crítico elevado, esperado em projetos em transição (v2.0) ou preparação para breaking changes (v0.9.0).

### Indicadores de Saúde Comunitária

| Indicador | NanoBot | Hermes | QwenPaw | ZeroClaw | IronClaw | PicoClaw | NullClaw |
|-----------|:-------:|:------:|:-------:|:--------:|:--------:|:--------:|:--------:|
| PRs externos | ✅ Alta | ✅ Alta | ✅ Alta | ✅ Alta | ✅ Alta | ✅ Moderada | ❌ Nenhuma |
| Issues respondidas | ✅ Rápido | ✅ Rápido | ✅ Rápido | ✅ Rápido | ✅ Rápido | ⚠️ Lento | ❌ Nenhuma |
| PRs stale | ⚠️ 3 | — | — | ⚠️ 5 | — | ⚠️ 5 | N/A |
| Bugs >7 dias sem resposta | 0 | 0 | 0 | 3 | 0 | 0 | 2 |

---

## 7. Sinais de Tendência

### 7.1 Tendências de Mercado Extraídas

**T1: Model Provider Diversity**
4+ projetos reportam issues de integração com providers não-OpenAI (Xiaomi, Qwen, Gemini, Amazon Bedrock). Usuários estão adotando modelos regionais e especializados, sinalizando fragmentação do mercado de modelos e necessidade de abstraction layers robustas.

**T2: Local Inference como Padrão para Privacidade**
Performance issues com Ollama/LM Studio indicam adoção significativa de inference local. Usuários com 32GB+ VRAM estão dispostos a aceitar latência em troca de privacidade e custo zero de API.

**T3: Agent-to-Agent (A2A) Communication Emergent**
ZeroClaw (#8590), NanoBot (#4571), e NullClaw (#974) demonstram que comunicação inter-agente está sendo adotada, mas mecanismos de segurança e isolation ainda são imaturos. Oportunidade para padrões de facto.

**T4: Desktop Applications Maturing**
Hermes Agent, IronClaw e QwenPaw investem significativamente em desktop apps. Isso sugere que o mercado está evoluindo de CLI-tools para aplicações com UX integrado, atendendo usuários não-técnicos.

**T5: Security como First-Class Concern**
7 projetos com vulnerabilidades críticas simultâneas indica que segurança foi tratada como after-thought na maioria das implementações. Expectativa de que próximos ciclos de release priorizem hardening.

**T6: Breaking Changes como Estratégia de Evolução**
QwenPaw v2.0.0 com breaking changes radicais demonstra que refatoração completa pode ser estratégia viável quando accompanied de migração guides. ZeroClaw preparando v0.9.0 com breaking changes similar.

### 7.2 Recomendações para Desenvolvedores

1. **Adotar Ollama/OpenAI-compatible como target primário** — base de usuários significativa
2. **Implementar validação de ownership além de authentication** — padrão de vulnerabilidade recorrente
3. **Priorizar reconnect logic para canais externos** — fonte consistente de bugs
4. **Considerar desktop-first para novos projetos** — tendência de mercado
5. **Investir em design systems** — IronClaw e QwenPaw demonstram ROI em consistência de UI

### 7.3 Observações para Decisores

- **QwenPaw** é o único projeto com release discipline, sugerindo maturidade organizacional superior
- **ZeroClaw** demonstra melhor posture de security, apesar de bugs críticos em aberto
- **NullClaw** está em risco de becoming abandoned project se não houver intervenção
- **PicoClaw** ocupa nicho edge/IoT com baixa competição, oportunidade de specialização

---

*Relatório gerado com base em dados públicos do GitHub de 2026-07-11. Métricas subjectivas baseadas em análise comparativa dos relatórios de projeto.*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório de Projeto — NanoBot (HKUDS/nanobot)
**Data de referência:** 2026-07-11  
**Analista:** Analista de Projetos Open Source — Agentes de IA

---

## 1. Panorama do Dia

O projeto NanoBot apresenta **alta atividade de desenvolvimento** em 11 de julho de 2026, com 42 PRs e 9 issues atualizadas nas últimas 24 horas. O período foi marcado pelo **fechamento de 6 PRs relevantes** (subagent model override, cron model presets, edit_file line hints, WebUI enhancements, CLI fix) e pela **abertura de novos PRs de features** (long_task gating, hooks auto-discovery, channel guided setup). Três issues requerem atenção imediata: um **problema de segurança crítico** no comando `/restart` e dois bugs de usabilidade (comandos ausentes e prompt prefixo para caching com Ollama). A base de código está em plena evolução, com forte foco em modularidade de subagentes e otimização de performance.

---

## 2. Lançamentos

### 🚫 Nenhuma release nas últimas 24h

O projeto não publicou novas versões neste período. Não há notas de migração ou breaking changes a serem reportadas.

---

## 3. Progresso do Projeto

### PRs Fechadas/Merged (6 itens)

| # | Título | Impacto | Link |
|---|--------|---------|------|
| #4623 | `feat(subagent): allow spawn model override` | Permite especificar modelo diferente por subagente via parâmetro `model` no tool `spawn`. Resolve limitação reporteda em #4231. | [PR #4623](https://github.com/HKUDS/nanobot/pull/4623) |
| #4622 | `feat(cron): support job model presets` | Adiciona suporte a `model_preset` em jobs cron com persistência e propagação de metadados. Fecha #4378. | [PR #4622](https://github.com/HKUDS/nanobot/pull/4622) |
| #4635 | `fix(tools): enforce exact edit_file line hints` | Trata `line_hint` como guarda de consistência exata, rejeitando edits sem match de `old_text` na linha indicada. Melhora confiabilidade do benchmark de edição. | [PR #4635](https://github.com/HKUDS/nanobot/pull/4635) |
| #4876 | `feat(webui): guide queued prompt with second Enter` | Permite ao usuário guiar prompt enfileirado durante resposta ativa com segundo Enter deliberado. | [PR #4876](https://github.com/HKUDS/nanobot/pull/4876) |
| #4877 | `feat(webui): highlight file previews and diffs` | Adiciona syntax highlighting com Prism em diffs unificados, preservando line numbers e backgrounds add/delete. | [PR #4877](https://github.com/HKUDS/nanobot/pull/4877) |
| #4832 | `fix(cli): handle CSI-u Shift+Enter` | Corrige regressão no handling de Shift+Enter em terminais CSI-u após remoção intencional na PR #4614. | [PR #4832](https://github.com/HKUDS/nanobot/pull/4832) |

**Síntese:** O período demonstrou foco em **ergonomia de subagentes** (model override), **automação via cron** (model presets), **confiabilidade de ferramentas de edição** e **refinamento da WebUI**.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários/reações)

| # | Título | Comentários | Tipo | Link |
|---|--------|-------------|------|------|
| #4253 | `support overriding model per conversation` | 6 | enhancement, feature request | [Issue #4253](https://github.com/HKUDS/nanobot/issues/4253) |
| #4867 | `Preserve exact prompt prefix to enable caching in Ollama` | 3 | enhancement | [Issue #4867](https://github.com/HKUDS/nanobot/issues/4867) |
| #4634 | `Improve edit_file target disambiguation` | 2 | closed | [Issue #4634](https://github.com/HKUDS/nanobot/issues/4634) |
| #4231 | `Add model parameter to spawn tool for subagent model override` | 2 | enhancement | [Issue #4231](https://github.com/HKUDS/nanobot/issues/4231) |
| #4860 | `no such command "onboard" or "webui"` | 2 | bug, stale | [Issue #4860](https://github.com/HKUDS/nanobot/issues/4860) |
| #4776 | `Security: /restart command has zero authorization` | 1 | security | [Issue #4776](https://github.com/HKUDS/nanobot/issues/4776) |

### Análise das Demandas

**🔹 Model Override por Conversação (#4253)**  
O usuário `rombert` trabalha com dois presets de modelo (OpenRouter para performance, LlamaCPP local para privacidade) e precisa alterná-los conforme requisitos de privacidade/sensibilidade temporal. Atualmente, apenas configuração global está disponível. A feature request tem 6 comentários indicando debate ativo sobre a melhor abordagem de UI/UX.

**🔹 Caching com Ollama (#4867)**  
O usuário `The-Markitecht` reporta que Nanobot adiciona **60 segundos extras por turno** ao chamar Ollama, tornando modelos locais "totalmente inutilizáveis" com 32 GB de VRAM. Este é um **problema de performance crítico** para usuários de inference local — a causa provável é a falta de preservação do prefixo exato do prompt, impedindo caching no lado do servidor Ollama.

**🔹 Regressão de Comandos CLI (#4860)**  
O usuário `justTravis` reporta que após instalação via `uv tool install`, os comandos `nanobot onboard` e `nanobot webui` mencionados na documentação não existem. Isso sugere uma **regressão de documentação ou inconsistência entre README e CLI real**.

---

## 5. Bugs e Estabilidade

### Bugs Abertos (3 itens)

| Severidade | # | Título | Impacto | Link |
|------------|---|--------|---------|------|
| 🔴 **CRÍTICA** | #4776 | `/restart` command has zero authorization | Qualquer usuário pareado pode causar DoS reiniciando o processo inteiro. Comand dispatch ocorre ANTES da aquisição do session lock. | [Issue #4776](https://github.com/HKUDS/nanobot/issues/4776) |
| 🟡 **ALTA** | #4860 | Missing commands "onboard" or "webui" | Usuários novos não conseguem onboarding via CLI. Instalação via `uv tool install` parece funcional, mas comandosdocumentados estão ausentes. | [Issue #4860](https://github.com/HKUDS/nanobot/issues/4860) |
| 🟡 **ALTA** | #4867 | Prompt prefix não preservado para caching Ollama | Adiciona ~60s por turno em inference local, inutilizando o bot com modelos locais. Performancekiller para usuários auto-hospedados. | [Issue #4867](https://github.com/HKUDS/nanobot/issues/4867) |

### Bugs Corrigidos/Fechados (2 itens)

| # | Título | Status | Link |
|---|--------|--------|------|
| #4634 | `edit_file` wrong-occurrence failures dominate exact edit benchmark | ✅ Fechada (PR #4635 merged) | [Issue #4634](https://github.com/HKUDS/nanobot/issues/4634) |
| #4835 | WebUI landing message sent to unrelated existing chat | ✅ Fechada | [Issue #4835](https://github.com/HKUDS/nanobot/issues/4835) |

### Regressões Resolvidas

| # | Título | Descrição | Link |
|---|--------|-----------|------|
| #4832 | Shift+Enter dumping raw escapes | Regressão introduzida na PR #4614 corrigida. | [PR #4832](https://github.com/HKUDS/nanobot/pull/4832) |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Feature Requests (3 itens)

| # | Título | Resumo | Potencial Impacto | Link |
|---|--------|--------|-------------------|------|
| #4253 | Model override per conversation | Alternar entre presets de modelo (e.g., OpenRouter vs LlamaCPP local) baseado em privacidade/urgência. | **Alto** — multipropósito | [Issue #4253](https://github.com/HKUDS/nanobot/issues/4253) |
| #4378 | Cron level model/preset | Permitir que cron jobs especifiquem modelo/preset diferente do agent principal. | **Alto** — já implementado em PR #4622 | [Issue #4378](https://github.com/HKUDS/nanobot/issues/4378) |
| #4872 | Dream should only create git commits if productive | Evitar commits vazios em runs não-produtivas. | **Médio** — qualidade de vida | [Issue #4872](https://github.com/HKUDS/nanobot/issues/4872) |

### PRs Abertas de Features (principais)

| # | Título | Descrição | Prioridade | Link |
|---|--------|-----------|------------|------|
| #4879 | `feat(long_task): gate sustained-goal behind opt-in flag` | Bloquear interação do usuário durante long tasks. Novaflag `opt-in` desativa comportamento default. | p2 | [PR #4879](https://github.com/HKUDS/nanobot/pull/4879) |
| #4878 | `feat(hooks): add auto-discovery mechanism` | Adicionar registro de hooks via pkgutil scanning + entry_points, sem necessidade de wiring manual. | p2 | [PR #4878](https://github.com/HKUDS/nanobot/pull/4878) |
| #4855 | `feat(channels): add guided setup flows` | Produto: surface de setup guiado para Channels com validação, links oficiais e config segura. Adiciona Feishu assistant instances. | - | [PR #4855](https://github.com/HKUDS/nanobot/pull/4855) |
| #4571 | `feat(subagent): native A2A peer delegation` | Mecanismo Agent-to-Agent nativo para equipes de agentes (Supervisor → Researcher → Writer) com cross-delegation depth guard. | p2, conflict | [PR #4571](https://github.com/HKUDS/nanobot/pull/4571) |
| #4588 | `optimization: reducing context/input tokens` | Compaction de outputs de comandos antes de inputar ao contexto (JSON, diffs, lint, logs). | p2, conflict | [PR #4588](https://github.com/HKUDS/nanobot/pull/4588) |

### Sinais de Roadmap

1. **Modularidade de Subagentes:** Modelo override por subagente (#4623 closed), aggregated result mode (#4624 open), native A2A delegation (#4571 open) indicam direção clara para arquiteturas multi-agente.
2. **Performance & Caching:** O problema com Ollama (#4867) sinaliza necessidade de suporte a prompt caching, reforçado pela PR #4588 de token reduction.
3. **Hooks System:** Auto-discovery (#4878) mostra tendência de pluggabilidade expandida.
4. **Enterprise/Channels:** Guided setup flows (#4855) e suporte Feishu indicam foco em canais enterprise.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Dor | Evidência | Severidade |
|-----|-----------|------------|
| **Performance inaceitável com Ollama local** | +60s por turno, inutiliza modelos locais com 32GB VRAM (#4867) | Crítica |
| **Segurança do /restart** | Qualquer usuário pareado pode restartar processo — risco de DoS (#4776) | Crítica |
| **Onboarding broken** | Comandos documentados (`onboard`, `webui`) não existem após instalação uv (#4860) | Alta |
| **Flexibilidade de modelo limitada** | Não consegue alternar entre presets de privacidade/performance por conversa (#4253) | Média-Alta |
| **Commits desnecessários do Dream** | Gera commits vazios em runs improdutivas, poluindo histórico (#4872) | Média |

### Cenários de Uso Observados

1. **Desenvolvedor multi-preset:** Alterna entre OpenRouter (capaz, rápido) e LlamaCPP local (privado, barato) baseado na tarefa.
2. **Usuário local/privacidade:** Roda modelos localmente via Ollama com 32GB VRAM, valoriza privacidade e custo zero de API.
3. **Automação enterprise:** Cron jobs para tarefas recorrentes com necessidade de modelo específico por contexto.
4. **Teams de agentes:** Supervisor delegando para Researcher e Writer em pipeline de pesquisa-escrita.

### Satisfação/Insatisfação

- **Positivo:** Comunidade ativa (42 PRs/24h), respostas rápidas a bugs (WebUI landing message fixado), features solicitadas implementadas (subagent model override, cron presets).
- **Negativo:** Regressões de documentação (comandos ausentes), performance crítica não resolvida com Ollama, vulnerabilidade de segurança em `/restart`.

---

## 8. Backlog que Merece Atenção

### Issues sem Resposta ou Stale (requer triagem)

| # | Título | Idade | Status | Prioridade | Link |
|---|--------|-------|--------|------------|------|
| #4776 | Security: /restart zero authorization | 5 dias | Aberta | **Crítica** | [Issue #4776](https://github.com/HKUDS/nanobot/issues/4776) |
| #4860 | Missing commands onboarding | 2 dias | Aberta, stale | **Alta** | [Issue #4860](https://github.com/HKUDS/nanobot/issues/4860) |
| #4867 | Ollama caching prefix | 1 dia | Aberta | **Alta** | [Issue #4867](https://github.com/HKUDS/nanobot/issues/4867) |
| #4253 | Model override per conversation | 33 dias | Aberta | Alta | [Issue #4253](https://github.com/HKUDS/nanobot/issues/4253) |
| #4205 | Mailbox-backed subagent results | 36 dias | Aberta, conflict | Média | [PR #4205](https://github.com/HKUDS/nanobot/pull/4205) |

### PRs Abertas com Conflitos (requer resolução)

| # | Título | Conflitos | Impacto | Link |
|---|--------|-----------|---------|------|
| #4205 | Add mailbox-backed subagent results | Sim | Arquitetura subagent | [PR #4205](https://github.com/HKUDS/nanobot/pull/4205) |
| #4588 | Optimization: reducing context tokens | Sim | Performance | [PR #4588](https://github.com/HKUDS/nanobot/pull/4588) |
| #4571 | Native A2A peer delegation | Sim | Multi-agent | [PR #4571](https://github.com/HKUDS/nanobot/pull/4571) |

---

## Métricas Resumidas (24h)

| Métrica | Valor | Tendência |
|---------|-------|-----------|
| Issues abertas/ativas | 7 | Neutra |
| Issues fechadas | 2 | — |
| PRs abertas | 25 | Estável |
| PRs fechadas/merged | 17 | **Alta** (6 merges significativos) |
| Releases | 0 | — |
| Bugs críticos abertos | 1 |

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-07-11

## 1. Panorama do Dia

O Hermes Agent manteve um **alto nível de atividade** nas últimas 24 horas, com 50 issues e 50 PRs atualizados, embora **nenhuma release tenha sido publicada**. A equipe concentrou-se em correções de bugs críticos — especialmente relacionados a autenticação de provedores (GitHub Copilot, Gemini), estabilidade do terminal e problemas de rede no dashboard — enquanto a comunidade debateu intensamente questões de desempenho com modelos locais e a rejeição de mensagens pela API Codex. O estado geral indica um projeto saudável, com contribuição ativa, mas com pendências de estabilidade em componentes de desktop e integrações com provedores.

---

## 2. Lançamentos

**Nenhum release publicado nas últimas 24 horas.**

O projeto está em fase de desenvolvimento intensivo semtaggem de versão, o que sugere que correções e features estão sendo acumuladas para uma próxima release.

---

## 3. Progresso do Projeto

Foram **4 PRs fechados** nas últimas 24 horas, todos direcionados a correções de bugs em componentes críticos:

| PR | Título | Área | Relevância |
|----|--------|------|------------|
| [#23141](https://github.com/NousResearch/hermes-agent/pull/23141) | fix(slack): refresh thread context for top level message | Slack | Corrige falha em contexto de threads Slack; importante para workflows de investigação |
| [#23674](https://github.com/NousResearch/hermes-agent/pull/23674) | fix: fallback auto auxiliary auth failures | Agent | Resolve regressão em autenticação auxiliary; preserva comportamento estrito quando provider é explícito |
| [#42863](https://github.com/NousResearch/hermes-agent/pull/42863) | fix(cron): respect per-job messaging opt-in | Cron | Melhora granularidade de configuração de jobs cron; habilita `send_message` apenas para jobs autorizados |
| [#20718](https://github.com/NousResearch/hermes-agent/pull/20718) | fix(send-message): accept WhatsApp JID targets | WhatsApp | Adiciona suporte a JIDs WhatsApp (LID, phone, group); corrige fallback incorreto para home-channel |

**PRs abertos com alta prioridade técnica:**

| PR | Título | Área | Impacto |
|----|--------|------|---------|
| [#60421](https://github.com/NousResearch/hermes-agent/pull/60421) | security(providers): strip credential headers on cross-host redirects | Agent/Security | **P1** — Impede vazamento de API keys em redirects 3xx; vulnerabilidade de segurança em `fetch_models` |
| [#62296](https://github.com/NousResearch/hermes-agent/pull/62296) | fix(desktop): remove old .js files | Desktop | Resolve conflito de arquivos TS/JS legados bloqueando atualização de clientes desktop |
| [#62292](https://github.com/NousResearch/hermes-agent/pull/62292) | feat(lmstudio): route requests to Hermes-owned model instances | Agent/Desktop | Permite roteamento de requisições LM Studio para instâncias gerenciadas pelo Hermes |
| [#60707](https://github.com/NousResearch/hermes-agent/pull/60707) | feat(ci): wire up JS/TS tests in CI | CI/CD | Integra testes TypeScript/JavaScript no pipeline CI; corrige falhas preexistentes |

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários + reações)

| Issue | Título | Comentários | 👍 | Tema Central |
|-------|--------|:-----------:|:--:|--------------|
| [#27038](https://github.com/NousResearch/hermes-agent/issues/27038) | Codex Responses API rejects replayed assistant message items with long `id` fields | 9 | 0 | **API Compatibility** — Rejeição de mensagens com IDs longos no replay de sessões |
| [#61265](https://github.com/NousResearch/hermes-agent/issues/61265) | Hermes sends extremely large prompts to local OpenAI-compatible models | 5 | 1 | **Performance** — Prompts excessivos causam stalls de minutos em modelos locais |
| [#23524](https://github.com/NousResearch/hermes-agent/issues/23524) | Feature: support per-cron reasoning effort overrides | 4 | 0 | **Flexibilidade** — Habilitar configuração de raciocínio por job cron |
| [#25246](https://github.com/NousResearch/hermes-agent/issues/25246) | copilot_auth.py fallback causes false positive for Copilot availability | 3 | 1 | **UX/Auth** — Token `gh` обычный misinterpreted como Copilot |
| [#49002](https://github.com/NousResearch/hermes-agent/issues/49002) | gh auth token auto-promoted to Copilot provider; pollutes model picker | 2 | 1 | **UX/Auth** — Polluição do seletor de modelos com entradas inválidas |

### Análise dos temas dominantes

1. **Autenticação e Provedores (Crítico):** Três issues relacionadas à سوء interpretação de tokens de autenticação entre GitHub (`gh`) e Copilot, causando UX confuso e entradas fictícias no model picker.

2. **Desempenho de Modelos Locais:** Issue #61265 recebe atenção significativa — prompts gerados pelo Hermes estão sendo considerados excessivamente grandes, causando stalls mesmo com modelos já carregados.

3. **API Compatibility:** A issue #27038 sobre a API Codex demonstra desafio de compatibilidade ao re-renderizar sessões com items de mensagens que contêm IDs extensos.

---

## 5. Bugs e Estabilidade

### Por Severidade

#### P1 — Críticos (Poucos, mas urgentes)

| Issue | Título | Área | Status |
|-------|--------|------|--------|
| [#27038](https://github.com/NousResearch/hermes-agent/issues/27038) | Codex Responses API rejects replayed assistant messages | Agent/OpenAI | OPEN |
| [#60421](https://github.com/NousResearch/hermes-agent/pull/60421) | Credential headers leak on cross-host redirects | Agent/Security | OPEN (PR) |

#### P2 — Altos (Requirem atenção prioritária)

| Issue | Título | Área | Reproduzível |
|-------|--------|------|:------------:|
| [#61265](https://github.com/NousResearch/hermes-agent/issues/61265) | Hermes sends extremely large prompts to local models | Agent/Perf | ✅ Reportado |
| [#25246](https://github.com/NousResearch/hermes-agent/issues/25246) | copilot_auth fallback false positive | CLI/Auth | ✅ Reportado |
| [#55551](https://github.com/NousResearch/hermes-agent/issues/55551) | Groq STT missing language parameter | STT | ✅ Reportado |
| [#42674](https://github.com/NousResearch/hermes-agent/issues/42674) | Background process notify leaks into wrong TUI session | TUI/Gateway | ✅ Reportado |
| [#62171](https://github.com/NousResearch/hermes-agent/issues/62171) | npm 12 breaks Hermes Desktop on Linux | Desktop/Docker | ✅ Reportado |
| [#62175](https://github.com/NousResearch/hermes-agent/issues/62175) | Dashboard leaks CLOSE_WAIT sockets (~40/day) | Dashboard | ✅ Reportado |
| [#62152](https://github.com/NousResearch/hermes-agent/issues/62152) | model.context_length override leaks to wrong sessions | Agent/Config | ✅ Reportado |
| [#62259](https://github.com/NousResearch/hermes-agent/issues/62259) | Gemini live model discovery fails | Agent/Gemini | ✅ Reportado |

#### P3 — Médios e Baixos (Diversos)

- **Desktop:** Issues de UI stale (#61820), falta de controles de áudio (#58130), npm 12 incompatibilidade (#62171), configuração Honcho não descobrível (#61642 — CLOSED)
- **Terminal:** CWD deletado quebra sandbox (#62169), typing indicator fantasma no BlueBubbles (#31534)
- **Gateway/Dashboard:** CLOSE_WAIT sockets (#62175), Kanban sem cards (#61897 — CLOSED)
- **Config/CLI:** SSH clone exits 0 sem clonar (#62132), api_key_env ignorado silenciosamente (#62254)
- **Plugins:** Twilio SMS não usa MessagingServiceSid (#62279 — PR aberto), Discord buttons ilegíveis (#62291 — PR aberto)

### Padrões de Bugs Identificados

1. **Leaks de Estado:** Múltiplos casos de vazamento de configuração entre sessões (context_length, notify_on_complete, Copilot token)
2. **Autenticação Inconsistente:** Provedores estão sendo automaticamente inferidos de credenciais não relacionadas
3. **Performance com Modelos Locais:** Hermes gerando prompts excessivos para modelos locais, contradizendo o objetivo de eficiência

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em demandadas com maior potencial estratégico

| Feature | Issue/PR | Prioridade | Signals de Roadmap |
|---------|----------|:----------:|-------------------|
| **Per-cron reasoning effort overrides** | [#23524](https://github.com/NousResearch/hermes-agent/issues/23524) | P3 | Indica necessidade de granularidade em automação; alinhado com customização de agentes |
| **Expose model parameter on delegate_task** | [#56891](https://github.com/NousResearch/hermes-agent/issues/56891) | P3 | **CLOSED** — Já implementado; demonstra demanda por roteamento dinâmico de modelos |
| **Desktop audio playback controls** | [#58130](https://github.com/NousResearch/hermes-agent/issues/58130) | P3 | UX do desktop amadurecendo; necessidade de controles familiares |
| **HTTP message append API** | [#41152](https://github.com/NousResearch/hermes-agent/issues/41152) | P3 | Casos de uso B2B (Teams adapter, feedback loops); demonstra adoção enterprise |
| **LM Studio native routing** | [#62292](https://github.com/NousResearch/hermes-agent/pull/62292) | P3 | **PR ABERTO** — Suporte a modelos locais auto-gerenciados |
| **First launch: install vs connect** | [#62293](https://github.com/NousResearch/hermes-agent/pull/62293) | P3 | **PR ABERTO** — Simplifica onboarding; reduz suposição de execução local |
| **Per-call model selection via delegate_task** | [#56891](https://github.com/NousResearch/hermes-agent/issues/56891) | P3 | Permite economia via modelos baratos para tarefas triviais |

### Sinais de Produto

1. **Desktop amadurecendo:** Muitas issues de UX, controls de áudio, primeira execução, e UI stale indicam foco em experiência desktop
2. **Enterprise adoption:** HTTP API para append de mensagens, integrações Teams, Twilio compliance (A2P 10DLC)
3. **Multi-provider complexity:** Problemas recorrentes com descoberta de modelos e autenticação sugerem necessidade de documentação e UX mais claros

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Categoria | Descrição | Evidência |
|----------|-----------|-----------|
| **Autenticação Confusa** | Usuários não conseguem distinguir tokens `gh` regulares de Copilot, resultando em UI poluída e mensagens de erro crípticas | Issues #25246, #49002 |
| **Modelos Locais Problemáticos** | Desempenho disappointente com Ollama/OpenAI-compatíveis; prompts grandes causam stalls | Issue #61265, #61850 |
| **Desktop Imaturo** | Configurações não descobríveis, UI stale, falta de controles básicos de áudio | Issues #61642, #61820, #58130 |
| **Documentação Insuficiente** | Gemini API vs subscription confunde usuários; Honcho mal documentado | Issue #61642, PR #62295 (docs) |
| **Instabilidade de Rede** | Dashboard acumulando sockets CLOSE_WAIT leva a crash por EMFILE em ~5 dias | Issue #62175

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório de Projeto: PicoClaw — 2026-07-11

---

## 1. Panorama do dia

O projeto PicoClaw apresenta **alta atividade comunitária** nesta data, com 18 PRs e 3 issues atualizadas nas últimas 24h, embora nenhuma nova release tenha sido publicada. A comunidade demonstra foco em **estabilidade e segurança** — destaque para PRs de hardening (MQTT TLS, OAuth) e atualização do toolchain Go. O canal WhatsApp continua sendo área prioritária de desenvolvimento, com ao menos 3 PRs/issues dedicados hoje (typing presence, websocket reconnect). A proporção de 17 PRs abertos vs. 1 merged indica backlog significativo pendente de revisão.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

O projeto não emitiu novas versões hoje. A ausência de releases pode indicar que a equipe está em ciclo de consolidação pré-lançamento ou aguardando maturação do pipeline de PRs pendentes.

---

## 3. Progresso do Projeto

### PR Merged/Fechado Hoje

| # | PR | Descrição | Impacto |
|---|-----|-----------|---------|
| [#3179](https://github.com/sipeed/picoclaw/pull/3179) | `fix(whatsapp): reconnect after websocket drops` | Reconexão automática do websocket WhatsApp após falhas de leitura; deadlines e ping/pong handlers para detecção de conexões obsoletas | **🔴 Crítico** — resolve crash/impossibilidade de receber mensagens |

### PRs Abertos de Alto Impacto

| # | PR | Descrição | Status |
|---|-----|-----------|--------|
| [#3248](https://github.com/sipeed/picoclaw/pull/3248) | `fix: bump Go to 1.25.12` | Atualização do toolchain para corrigir vulnerabilidades `GO-2026-5856` (crypto/tls) e `GO-2026-4970` (os) | **🔴 Urgente** — segurança stdlib |
| [#3246](https://github.com/sipeed/picoclaw/pull/3246) | `fix: security hardening` | TLS verification no MQTT (antes desabilitado), timeouts OAuth, bounded search reads | **🔴 Crítico** — múltiplas falhas de segurança |
| [#3241](https://github.com/sipeed/picoclaw/pull/3241) | `fix(auth): OAuth refresh provider-correct` | Corrige refresh token para provedores OpenAI (JSON) vs. form-encoded genérico; race condition no refresh | **🟡 Alto** — estabilidade OAuth |
| [#3242](https://github.com/sipeed/picoclaw/pull/3242) | `feat(whatsapp): typing presence` | Adiciona indicador "digitando" no WhatsApp com refresh a cada 10s | **🟢 Média** — UX melhoria |
| [#2937](https://github.com/sipeed/picoclaw/pull/2937) | `Feat: agent collaboration` | Barramento de comunicação inter-agentes com mailboxes, threads isoladas e permissões | **🟡 Alto** — feature arquitetural significativa |

---

## 4. Temas Quentes da Comunidade

### Issue com Maior Atenção

| # | Título | Comentários | Reações | Análise |
|---|--------|-------------|---------|---------|
| [#3178](https://github.com/sipeed/picoclaw/issues/3178) | WhatsApp Websocket Timeout | 2 | 0 | Bug reportado com ambiente detalhado (v0.2.9, Go 1.25.11, DeepSeek-v4-pro, Docker/launchpad). Já **CLOSED** com PR [#3179](https://github.com/sipeed/picoclaw/pull/3179) associado. |

### Demanda Consistente: WhatsApp Channel
Pelo menos **4 PRs/issues** envolvem o canal WhatsApp:
- Typing presence nativo ([#3240](https://github.com/sipeed/picoclaw/issues/3240), [#3242](https://github.com/sipeed/picoclaw/pull/3242))
- Websocket reconnect ([#3179](https://github.com/sipeed/picoclaw/pull/3179) — merged)
- Timeout handling ([#3178](https://github.com/sipeed/picoclaw/issues/3178) — closed)

**Sinal**: comunidade investindo em robustez e UX do canal WhatsApp.

---

## 5. Bugs e Estabilidade

### Bugs Reportados Hoje

| # | Severidade | Título | Detalhes |
|---|------------|--------|----------|
| [#3178](https://github.com/sipeed/picoclaw/issues/3178) | 🔴 Alta | WhatsApp Websocket Timeout | Timeout durante conexão WebSocket com WhatsApp em ambiente Docker/launchpad. **Já resolvido.** |
| [#3239](https://github.com/sipeed/picoclaw/issues/3239) | 🟡 Média | OAuth refresh incompatível entre provedores | OpenAI espera JSON; provedores genéricos enviam form-encoded. Race condition no refresh simultâneo. |

### Falhas de Segurança Identificadas (via CI)

| Vulnerabilidade | Componente | Status |
|-----------------|------------|--------|
| `GO-2026-5856` | `crypto/tls` | PR [#3248](https://github.com/sipeed/picoclaw/pull/3248) pendente |
| `GO-2026-4970` | `os` | PR [#3248](https://github.com/sipeed/picoclaw/pull/3248) pendente |
| MQTT InsecureSkipVerify hardcoded | `pkg/channels/mqtt` | PR [#3246](https://github.com/sipeed/picoclaw/pull/3246) pendente |

**Recomenda-se priorizar merge dos PRs de segurança antes da próxima release.**

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Propostas

| # | Título | Descrição | Relevância |
|---|--------|-----------|------------|
| [#3240](https://github.com/sipeed/picoclaw/issues/3240) | Add typing presence to WhatsApp native replies | Indicador de digitação durante processamento de respostas | UX crítica para canais WhatsApp |
| [#3193](https://github.com/sipeed/picoclaw/pull/3193) | Added simplex channel type | Novo tipo de canal simplex (envio apenas) | Extensibilidade de canais |
| [#3200](https://github.com/sipeed/picoclaw/pull/3200) | Configurable default fallback chain | Cadeia configurável de modelos fallback com UI e persistência | Flexibilidade multi-modelo |
| [#2937](https://github.com/sipeed/picoclaw/pull/2937) | Agent collaboration | Comunicação inter-agentes com mailboxes e threads isoladas | **Feature arquitetural maior** |
| [#3205](https://github.com/sipeed/picoclaw/pull/3205) | 9router gateway support + ARMv7 | Suporte a gateway 9router + build ARMv7 para Raspberry Pi 3 B+ | IoT/Edge deployment |

### Sinais de Roadmap
- **Internacionalização ativa**: PR [#3247](https://github.com/sipeed/picoclaw/pull/3247) adiciona Tcheco
- **Refatorações de performance**: múltiplos PRs (#3243, #3244, #3245) otimizam alocações com `strings.Builder` e `NewReplacer`
- **Consolidação de canais**: PR [#3222](https://github.com/sipeed/picoclaw/pull/3222) limpa implementação DeltaChat (-320 LOC)

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Dor | Ocorrência | Issue/PR Associada |
|-----|------------|-------------------|
| WhatsApp "silencioso" — sem feedback durante processamento | 1 usuário | [#3240](https://github.com/sipeed/picoclaw/issues/3240) |
| Websocket desliga e não reconecta automaticamente | 1 usuário | [#3178](https://github.com/sipeed/picoclaw/issues/3178) — **resolvido** |
| OAuth token refresh falha com OpenAI (form vs. JSON) | 1 usuário | [#3239](https://github.com/sipeed/picoclaw/issues/3239) |
| Incompatibilidade com gateways OpenAI-compatíveis (9router) | 1 usuário | [#3205](https://github.com/sipeed/picoclaw/pull/3205) |
| Falta de build ARMv7 para Raspberry Pi | 1 usuário | [#3205](https://github.com/sipeed/picoclaw/pull/3205) |

### Cenários de Uso Identificados
- **Edge/IoT**: Raspberry Pi 3 B+ com Docker (9router gateway)
- **Canais múltiplos**: WhatsApp, Matrix (via mautrix), DeltaChat, MQTT
- **Multi-provider**: OpenAI, Google OAuth, DeepSeek, provedores OpenAI-compatíveis

**Satisfação implícita**: o número de PRs de contribuições externas indica comunidade ativa, mas todas as issues têm 0 👍, sugerindo baixa votação (pode indicar novo report ou comunidade pequena).

---

## 8. Backlog que Merece Atenção

### Issues/PRs Sem Resposta há Tempo

| # | Tipo | Título | Idade | Observação |
|---|------|--------|-------|------------|
| [#1951](https://github.com/sipeed/picoclaw/pull/1951) | PR | Move installation scripts from docs repo | ~3 meses | Enhancement de build; sem comentários recentes |
| [#2937](https://github.com/sipeed/picoclaw/pull/2937) | PR | Agent collaboration | ~45 dias | Feature grande; status "stale"? (última atualização 2026-07-10) |
| [#3165](https://github.com/sipeed/picoclaw/pull/3165) | PR | Recover Seed XML tool calls | ~16 dias | Sem comentários; aguardando review |
| [#3179](https://github.com/sipeed/picoclaw/pull/3179) | PR | **Merged** | — | Já resolvido ✅ |
| [#3193](https://github.com/sipeed/picoclaw/pull/3193) | PR | Simplex channel type | ~13 dias | Aguardando review |

### PRs com Tag `stale` (risco de abandono)

| # | Título | Criado | Última Atualização |
|---|--------|--------|---------------------|
| [#3211](https://github.com/sipeed/picoclaw/pull/3211) | eslint bump (Dependabot) | 2026-07-02 | 2026-07-10 |
| [#3208](https://github.com/sipeed/picoclaw/pull/3208) | mautrix bump (Dependabot) | 2026-07-02 | 2026-07-10 |
| [#3200](https://github.com/sipeed/picoclaw/pull/3200) | Default fallback chain | 2026-07-01 | 2026-07-10 |
| [#3193](https://github.com/sipeed/picoclaw/pull/3193) | Simplex channel | 2026-06-27 | 2026-07-10 |
| [#3165](https://github.com/sipeed/picoclaw/pull/3165) | Seed XML recovery | 2026-06-24 | 2026-07-10 |

**Recomendação**: revisar PRs stale antes do próximo ciclo de release; múltiplos são contributions externas que podem ser perdidas.

---

## Métricas Resumidas do Dia

| Indicador | Valor |
|-----------|-------|
| Issues abertas/ativas | 2 |
| Issues fechadas | 1 |
| PRs abertos | 17 |
| PRs merged/fechados | 1 |
| Novas releases | 0 |
| PRs de segurança/dependências pendentes | 5 |
| PRs com stale tag | 5 |
| Issues com 0 👍 | 3 (100%) |

**Saúde geral**: 🟡 **Moderada** — alta atividade mas backlog de 17 PRs + 5 security fixes pendentes requer atenção da maintainer team.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório de Projeto: IronClaw
**Data de Referência:** 2026-07-11 | **Fonte:** github.com/nearai/ironclaw

---

## 1. Panorama do Dia

O projeto IronClaw apresenta alta atividade de desenvolvimento em 11 de julho de 2026, com 32 issues e 50 PRs atualizados nas últimas 24 horas. A equipe demonstra foco intenso em estabilização do runtime Reborn — 18 PRs foram merged/fechados, indicando ritmo de integração saudável. Não houve lançamentos formais (releases) no período, porém o PR #5598 documenta a versão 0.29.1 de `ironclaw_common`. A comunidade reporta 6 bugs P1-P2 críticos relacionados principalmente à integração Slack, enquanto a equipe de desenvolvimento avança em refatorações de error handling (#5662) e correções de CI (#5876). O índice de issues abertas/ativas (26) sugere um backlog gerenciável, mas com concentração em bugs de UI e problemas de integração.

---

## 2. Lançamentos

### Nenhum novo release nas últimas 24 horas

**Observação:** O último release documentado foi #5598, que incrementa `ironclaw` de 0.24.0 para 0.29.1, incluindo:
- `ironclaw_common`: 0.4.2 → 0.5.0 (⚠ breaking changes)
- `ironclaw_safety`: 0.2.2 → 0.2.3 (compatível)
- `ironclaw_skills`: 0.3.0 → 0.4.0 (⚠ breaking changes)

**Links:** [PR #5598 - chore: release](https://github.com/nearai/ironclaw/pull/5598)

---

## 3. Progresso do Projeto

### PRs Fechados/Merged (18 total)

| PR | Descrição | Impacto |
|----|-----------|---------|
| [#5921](https://github.com/nearai/ironclaw/pull/5921) | Backfill de testes de regressão para capability-guard (integração) | Estabilidade |
| [#5876](https://github.com/nearai/ironclaw/pull/5876) | Resolve race condition no Postgres CAS delete/recreate e flaky tests | Infraestrutura |
| [#5837](https://github.com/nearai/ironclaw/issues/5837) | 🔴 **Fechado** — Corrige botões "Open run/Logs" não clicáveis | UX |
| [#5835](https://github.com/nearai/ironclaw/issues/5835) | 🔴 **Fechado** — Remove botão "Jump to latest" desnecessário | UX |
| [#5708](https://github.com/nearai/ironclaw/issues/5708) | 🔴 **Fechado** — Move error banners para fluxo inline do chat | UX |
| [#5828](https://github.com/nearai/ironclaw/issues/5828) | Remove referências obsoletas aos testes v1 coverage | Manutenção |
| [#4640](https://github.com/nearai/ironclaw/issues/4640) | 🔴 **Fechado** — Corrige list_events do Google Calendar (timeMin/orderBy) | Funcionalidade |
| [#5747](https://github.com/nearai/ironclaw/issues/5747) | 🔴 **Fechado** — Adiciona como desvincular Slack no host-beta | Funcionalidade |

### PRs Abertos de Alto Impacto

| PR | Descrição | Tamanho | Risco |
|----|-----------|---------|-------|
| [#5957](https://github.com/nearai/ironclaw/pull/5957) | Fix Slack removal, OAuth activation, stale tool recovery | XL | medium |
| [#5895](https://github.com/nearai/ironclaw/pull/5895) | Fix compaction failures após tool results | L | low |
| [#5954](https://github.com/nearai/ironclaw/pull/5954) | RunFailureReason funnel foundation (phase 1/4) | XL | low |
| [#5931](https://github.com/nearai/ironclaw/pull/5931) | Report Reborn inference cost (canary) | XL | medium |
| [#5499](https://github.com/nearai/ironclaw/pull/5499) | WASM tool install from zip + credentials provision | XL | low |
| [#2872](https://github.com/nearai/ironclaw/pull/2872) | Real-time token streaming through provider chain | XL | medium |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários)

1. **#5948** — *"Assistant incorrectly reports GitHub extension as activated"* — 5 comentários | P3
   - Relata que o assistente afirma extensão GitHub ativa quando está apenas "INSTALLED"
   - [Link](https://github.com/nearai/ironclaw/issues/5948)

2. **#5747** — *"No way to unpair Slack on built-in host-beta"* — 3 comentários | Closed
   - Problema de usabilidade resolvido: não havia como desvincular Slack
   - [Link](https://github.com/nearai/ironclaw/issues/5747)

3. **#5891** — *"'Last completed' displays active run timestamp"* — 2 comentários | P3
   - Confusão visual: campo mostra execução em andamento em vez da última concluída
   - [Link](https://github.com/nearai/ironclaw/issues/5891)

4. **#5741** — *"builtin.http.save fails with OutputTooLarge"* — 2 comentários | Open
   - Ferramenta de salvar páginas falha com erro genérico em vez de tratar resposta grande
   - [Link](https://github.com/nearai/ironclaw/issues/5741)

5. **#5836** — *"Routine fails with 'No thread attached'"* — 2 comentários | P2
   - Rotinas agendadas falham sistematicamente; 0% de sucesso
   - [Link](https://github.com/nearai/ironclaw/issues/5836)

### PRs com Maior Engajamento

1. **#5662** — Refactor de error handling em 90 locais do codebase
   - [Link](https://github.com/nearai/ironclaw/pull/5662)

2. **#5957** — Follow-up crítico para ciclo de vida do Slack
   - [Link](https://github.com/nearai/ironclaw/pull/5957)

3. **#5950** — Exposição de capability-port para testes de integração
   - [Link](https://github.com/nearai/ironclaw/pull/5950)

---

## 5. Bugs e Estabilidade

### 🔴 Prioridade 1 (Críticos)

| Issue | Descrição | Status |
|-------|-----------|--------|
| [#5943](https://github.com/nearai/ironclaw/issues/5943) | Slack DM action posta no canal atual em vez de DM do usuário | Open |
| [#5955](https://github.com/nearai/ironclaw/issues/5955) | Multistep workflows com sub-agents falham após tool-call limit | Open |

### 🟠 Prioridade 2 (Altos)

| Issue | Descrição | Status |
|-------|-----------|--------|
| [#5836](https://github.com/nearai/ironclaw/issues/5836) | Rotinas agendadas falham com "No thread attached" | Open |
| [#5834](https://github.com/nearai/ironclaw/issues/5834) | Slack disconnect request rejeitado incorretamente pelo agent | Open |
| [#5885](https://github.com/nearai/ironclaw/issues/5885) | Approval notification abre ação sem mostrar mensagem | Open |
| [#5707](https://github.com/nearai/ironclaw/issues/5707) | Rotina creation expõe detalhes de implementação | Open |
| [#5879](https://github.com/nearai/ironclaw/issues/5879) | Error banner persiste após resposta bem-sucedida | Open |
| [#5946](https://github.com/nearai/ironclaw/issues/5946) | Assistant muta Google Sheet antes de verificar trigger disponível | Open |
| [#5945](https://github.com/nearai/ironclaw/issues/5945) | Run falha após longa execução multi-tool com erro genérico | Open |
| [#5944](https://github.com/nearai/ironclaw/issues/5944) | Slack DM delivery falha silenciosamente (reporta sucesso) | Open |
| [#5883](https://github.com/nearai/ironclaw/issues/5883) | Erro genérico após execução bem-sucedida de ferramenta | Open |

### 🟡 Prioridade 3 (Médios)

| Issue | Descrição | Status |
|-------|-----------|--------|
| [#5948](https://github.com/nearai/ironclaw/issues/5948) | Extension status incorretamente reportado como ativado | Open |
| [#5891](https://github.com/nearai/ironclaw/issues/5891) | "Last completed" mostra timestamp de run ativo | Open |
| [#5889](https://github.com/nearai/ironclaw/issues/5889) | Botão "Load older messages" não funcional | Open |
| [#5418](https://github.com/nearai/ironclaw/issues/5418) | Mensagens aparecem fora de ordem após tool activity | Open |
| [#5888](https://github.com/nearai/ironclaw/issues/5888) | Não é possível deletar threads antigos | Open |
| [#5947](https://github.com/nearai/ironclaw/issues/5947) | Thread deletion requer refresh para refletir no UI | Open |

### Indicadores de Estabilidade

- **CI/CD:** PR #5876 resolve race conditions e flaky tests no main branch
- **Compaction:** PR #5895 corrige falhas de compaction após resultados de ferramentas
- **Test Coverage:** PR #5921 adiciona pins de regressão para capability-guard misfire
- **Regression Risk:** Issue #5958 alerta para falta de wall-clock bound no loop executor store I/O

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em Desenvolvimento

| PR | Descrição | Escopo |
|----|-----------|--------|
| [#5084](https://github.com/nearai/ironclaw/pull/5084) | **Redesign da página Automations** — Rebase completo no novo design system | WebUI |
| [#5563](https://github.com/nearai/ironclaw/pull/5563) | **Design system tokens + /playground** — Base para AI implementar melhorias autônomas | WebUI |
| [#5565](https://github.com/nearai/ironclaw/pull/5565) | **Onboarding/NUX demo** — Intent handoff, OAuth entry, chat-first workspace, mock Vercel | Gateway |
| [#5499](https://github.com/nearai/ironclaw/pull/5499) | **WASM tool install from zip** — Admin pode importar ferramentas via REST | Funcionalidade |
| [#2872](https://github.com/nearai/ironclaw/pull/2872) | **Token streaming real-time** — Suporte a OpenRouter, Groq e compatíveis | LLM/Provider |
| [#5954](https://github.com/nearai/ironclaw/pull/5954) | **RunFailureReason funnel** — Sistema de classificação de falhas (phase 1/4) | Core |

### Novas Demandas de Features

| Issue | Descrição | Tipo |
|-------|-----------|------|
| [#5938](https://github.com/nearai/ironclaw/issues/5938) | Unificar dropdown styling com componente SelectMenu compartilhado | UI/Consistência |
| [#5935](https://github.com/nearai/ironclaw/issues/5935) | Retire v1 runtime e remova legacy `src/` code | Technical Debt |
| [#5953](https://github.com/nearai/ironclaw/issues/5953) | Channel disconnect em extension removal quebrado para extensões genéricas | Bug/Funcionalidade |
| [#5958](https://github.com/nearai/ironclaw/issues/5958) | Loop executor store I/O sem wall-clock bound | Technical Debt |
| [#5640](https://github.com/nearai/ironclaw/issues/5640) | RecordingSecurityAuditSink gap no integration harness | Testing/Parity |

### Sinais de Roadmap

- **Design System First:** Investimento explícito em design tokens (#5563) para enable AI implementar melhorias sem design review
- **WASM-based Tools:** Arquitetura de ferramentas configuráveis (#5499) em andamento
- **Error Classification:** Funil de RunFailureReason (#5954) indica foco em DX e debuggabilidade
- **Streaming:** O PR #2872 em desenvolvimento há ~3 meses sinaliza prioridade em latência

---

## 7. Resumo de Feedback dos Usuários

### Dores Críticas Reportadas

1. **Integração Slack quebrada em múltiplos pontos:**
   - DM enviado para canal errado (#5943)
   - DM delivery falha silenciosamente (#5944)
   - Desconexão não funciona (#5834, #5747)
   - [Links: #5943](https://github.com/nearai/ironclaw/issues/5943) | [#5944](https://github.com/nearai/ironclaw/issues/5944) | [#5834](https://github.com/nearai/ironclaw/issues/5834)

2. **UX de Rotinas não confiável:**
   - Execuções agendadas falham 100% (#5836)
   - Status "Last completed" mostra informação incorreta (#5891)
   - Botões de ação não funcionam (#5837 — resolved)
   - [Links: #5836](https://github.com/nearai/ironclaw/issues/5836) | [#5891](https://github.com/nearai/ironclaw/issues/5891)

3. **Confiança em respostas do Assistant:**
   - Extension status incorretamente reportado (#5948)
   - Assistant modifica recursos antes de verificar disponibilidade (#5946)
   - Erro genérico após operações bem-sucedidas (#5883)
   - [Links: #5948](https://github.com/nearai/ironclaw/issues/5948) | [#5946](https://github.com/nearai/ironclaw/issues/5946) | [#5883](https://github.com/nearai/ironclaw/issues/5883)

### Padrões de Uso Emergentes

- **Automations multistep** com sub-agents estão sendo adotadas, revelando limites de tool-call (#5955)
- **Saves de páginas web** são um caso de uso comum (issue #5741 sobre OutputTooLarge)
- **Long-running workflows** com 34+ tool calls estão sendo executados, expondo limites de provider (#5945)

### Satisfação Parcial

- Error banners saíram do fluxo do chat (#5708 — resolved) ✅
- Google Calendar events agora ordenados corretamente (#4640 — resolved) ✅
- Capacidade de desvincular Slack foi adicionada (#5747 — resolved) ✅

---

## 8. Backlog que Merece Atenção

### Issues Sem Comentários (Potenciais Abandonos)

| Issue | Descrição | Criado | Prioridade |
|-------|-----------|--------|------------|
| [#5955](https://github.com/nearai/ironclaw/issues/5955) | Multistep workflows falham com sub-agents | 2026-07-10 | P1 |
| [#5953](https://github.com/nearai/ironclaw/issues/5953) | Channel disconnect quebrado para extensões genéricas | 2026-07

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório de Projeto: QwenPaw (Agentscope-AI)
## Data: 2026-07-11

> **Nota:** Os dados fornecidos referem-se ao repositório **QwenPaw** (`agentscope-ai/QwenPaw`), não ao repositório CoPaw. O relatório foi elaborado com base nos dados reais disponíveis.

---

## 1. Panorama do Dia

O projeto atravessa um momento de **alta atividade e transição significativa**, marcando o lançamento da versão **v2.0.0 estável** após um extenso período de beta-testing. Nas últimas 24 horas, foram registradas **43 issues** (20 abertas, 23 fechadas) e **49 PRs** (23 abertos, 26 merged/fechados), indicando uma comunidade extremamente ativa. O lançamento stable da v2.0.0 trouxe consigo uma reformulação arquitetural profunda (Runtime 2.0 baseado em AgentScope 2.0), gerando tanto entusiasmo quanto novos bugs a serem resolvidos. A equipe demonstra responsividade rápida, com múltiplas correções sendo submetidas no mesmo dia de seus relatórios.

---

## 2. Lançamentos

### 🏷️ v2.0.0 (Estável)
**Link:** https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.0.0

| Categoria | Alterações |
|-----------|------------|
| **Core Architecture** | **Runtime 2.0**: Refatoração completa do kernel baseado em AgentScope 2.0 |
| **PRs de referência** | [#5078](https://github.com/agentscope-ai/QwenPaw/pull/5078), [#4846](https://github.com/agentscope-ai/QwenPaw/pull/4846), [#5018](https://github.com/agentscope-ai/QwenPaw/pull/5018) |

### 🏷️ v2.0.0-beta.7
**Link:** https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.0.0-beta.7
- Atualização de copy e visuais do website para QwenPaw 2.0 ([#5940](https://github.com/agentscope-ai/QwenPaw/pull/5940))
- Correção: propagação de `session_id` em tarefas de sumarização do ReMe ([#5938](https://github.com/agentscope-ai/QwenPaw/pull/5938))

### 🏷️ v2.0.0-beta.6
**Link:** https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.0.0-beta.6
- Testes unitários para módulo de channels ([#5812](https://github.com/agentscope-ai/QwenPaw/pull/5812))
- Correção de estado de erro em tool results via envelope passthrough

---

## 3. Progresso do Projeto

### PRs Mergeados/Fechados Hoje (Destaques)

| PR | Autor | Descrição | Impacto |
|----|-------|-----------|---------|
| [#5942](https://github.com/agentscope-ai/QwenPaw/pull/5942) | cuiyuebing | Bump version to v2.0.0 | 🎯 Release blocker |
| [#5940](https://github.com/agentscope-ai/QwenPaw/pull/5940) | yuluo1007 | Atualização do website para QwenPaw 2.0 | Branding/Marketing |
| [#5938](https://github.com/agentscope-ai/QwenPaw/pull/5938) | jinliyl | Propagar session_id em tarefas de sumarização | **Memória/Correção crítica** |
| [#5937](https://github.com/agentscope-ai/QwenPaw/pull/5937) | cuiyuebing | Refinamento do formato de news | Documentação |
| [#5936](https://github.com/agentscope-ai/QwenPaw/pull/5936) | rayrayraykk | Reverte PR #5923 (injeção de timestamp) | **UX/Correção de regressão** |
| [#5932](https://github.com/agentscope-ai/QwenPaw/pull/5932) | cuiyuebing | Atualização de documentação para v2.0 | Documentação |

### PRs Abertos em Review (Destaques)

| PR | Autor | Descrição | Status |
|----|-------|-----------|--------|
| [#5953](https://github.com/agentscope-ai/QwenPaw/pull/5953) | niceIrene | Padronização de hint de truncamento para tool results | Aberto |
| [#5949](https://github.com/agentscope-ai/QwenPaw/pull/5949) | wananing | Aplicação imediata de políticas de acesso MCP | **Fix para #5947** |
| [#5931](https://github.com/agentscope-ai/QwenPaw/pull/5931) | ustc-mkh | Sandbox restrito baseado em tokens para Windows | Segurança |
| [#5692](https://github.com/agentscope-ai/QwenPaw/pull/5692) | lecheng2018 | Adição de reranker para busca de memórias (ReMe 0.4) | Enhancement de memória |
| [#5726](https://github.com/agentscope-ai/QwenPaw/pull/5726) | wangfei010313 | Fallback de visão para modelos text-only | Multimodal |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (Comentários)

| Issue | Tipo | Comentários | Link |
|-------|------|-------------|------|
| Console crash com tool-use history | Bug | 15 | [#5401](https://github.com/agentscope-ai/QwenPaw/issues/5401) |
| Migração para AgentScope 2.0 | Breaking Change | 12 | [#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727) |
| Tracker de bugs v2.0.0 pre-release | Tracking | 11 | [#5273](https://github.com/agentscope-ai/QwenPaw/issues/5273) |
| Erro de validação em armbian | Bug | 7 | [#3549](https://github.com/agentscope-ai/QwenPaw/issues/3549) |
| Request de API Kimi code | Enhancement | 6 | [#3437](https://github.com/agentscope-ai/QwenPaw/issues/3437) |

### Análise de Demandas

**🔴 Crítico (Alta Prioridade):**
- **Console crash** ([#5401](https://github.com/agentscope-ai/QwenPaw/issues/5401)): Frontend trava ao renderizar sessões com histórico extenso de tool calls. Afeta diretamente a usabilidade para power users.
- **MCP access policy** ([#5947](https://github.com/agentscope-ai/QwenPaw/issues/5947)): Configurações de "allow/deny" para sub-ferramentas não estão sendo respeitadas, comprometendo controles de segurança.

**🟡 Funcionalidade:**
- **Session grouping** ([#5903](https://github.com/agentscope-ai/QwenPaw/issues/5903)): Demanda recorrente por organização de conversas em grupos com import/export — indica maturidade do produto e necessidade de gestão de escala.
- **KaTeX support** ([#5453](https://github.com/agentscope-ai/QwenPaw/issues/5453)): Usuários pedindo suporte a renderização LaTeX para casos de uso técnicos/científicos.

**🟢 UX/Interface:**
- **Theme customization** ([#5909](https://github.com/agentscope-ai/QwenPaw/issues/5909)): Proposta de design para módulo de temas customizáveis — sinal de amadurecimento do produto.

---

## 5. Bugs e Estabilidade

### 🔴 Bugs Críticos (Impacto Alto)

| Bug | Descrição | Severidade | Link |
|-----|-----------|------------|------|
| Desktop shell sandbox explode | pwsh recursivo + 20GB RAM após upgrade | **Crítica** | [#5951](https://github.com/agentscope-ai/QwenPaw/issues/5951) |
| MCP allow/deny失效 | Políticas de acesso a sub-ferramentas ignoradas | **Crítica** | [#5947](https://github.com/agentscope-ai/QwenPaw/issues/5947) |
| Console crash (tool-use history) | Frontend crashes com `type: "data"` content | **Alta** | [#5401](https://github.com/agentscope-ai/QwenPaw/issues/5401) |
| Auto-memory crash | `No module named 'agentscope.tool._builtin._scripts'` | **Alta** | [#5952](https://github.com/agentscope-ai/QwenPaw/issues/5952) |
| Embedding 400 em CJK | Truncagem por caracteres ao invés de tokens | **Alta** | [#5950](https://github.com/agentscope-ai/QwenPaw/issues/5950) |

### 🟡 Bugs Médios

| Bug | Descrição | Link |
|-----|-----------|------|
| Tool call lost em context compaction | Causa 400 errors e mismatch de contagem | [#5856](https://github.com/agentscope-ai/QwenPaw/issues/5856) |
| Anti-repetition falsa触发 | Doom loop sem conversa real | [#5906](https://github.com/agentscope-ai/QwenPaw/issues/5906) |
| Contagem de iterações incorreta | Max iterations baseado em turno anterior | [#5896](https://github.com/agentscope-ai/QwenPaw/issues/5896) |
| PRD.json formato inválido | Loop de erro sem como recuperar | [#5918](https://github.com/agentscope-ai/QwenPaw/issues/5918) |

### Correções Ativas em Progresso

- **#5949** (wananing): Fix para policies MCP — aplicação imediata de updates
- **#5953** (niceIrene): Padronização de truncamento de tool results

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| Feature | Descrição | Indicador de Demanda | Link |
|---------|-----------|---------------------|------|
| **Session Grouping + Import/Export** | Agrupamento de conversas + backup | 🔥 Alta | [#5903](https://github.com/agentscope-ai/QwenPaw/issues/5903) |
| **KaTeX Rendering** | Suporte a fórmulas LaTeX no console | 💬 2 comentários | [#5453](https://github.com/agentscope-ai/QwenPaw/issues/5453) |
| **Upgrade Guide v2** | Documentação de breaking changes | 💬 1 comentário | [#5948](https://github.com/agentscope-ai/QwenPaw/issues/5948) |
| **Theme/Skin Module** | Customização visual do produto | Design proposal | [#5909](https://github.com/agentscope-ai/QwenPaw/issues/5909) |

### Sinais de Roadmap Observados

1. **Modularização de Interface**: Multiple PRs (#5909, #5931) indicam tendência hacia arquitetura mais modular
2. **Observabilidade**: PR #5922 adiciona tracking avançado via Langfuse — caminho para métricas enterprise
3. **Memory Enhancement**: ReMe 0.4 com reranker (#5692) mostra investimento contínuo em memória persistente
4. **API Automation**: PR #5930 adiciona structured outcomes ao SSE — indica foco em integração programmatic

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais Reportadas

**🚨 Problemas de Estabilidade (v2.0.0):**
> "升级到最新版 QwenPaw 桌面壳（desktop shell）后，沙箱实现存在严重且无法关闭的问题" — [#5951](https://github.com/agentscope-ai/QwenPaw/issues/5951)

- Sandbox Windows quebrado impede uso da aplicação desktop
- Breaking changes da v2.0.0 sem guia claro de migração
- Regressões em funcionalidades que funcionavam em v1.1.x

**📝 Problemas de Integração com Canais:**
> "之前用过openclaw，对接飞书用的插件很方便...但现在用QWENPAW，发现各种问题" — [#3432](https://github.com/agentscope-ai/QwenPaw/issues/3432)

- Usuários migrando de outras plataformas encontram dificuldades
- Configuração de canais (Feishu, DingTalk) não intuitiva

**🔧 Problemas de Localização (Chinese Windows):**
> "On Chinese Windows (cp936/GBK), nvidia-smi output contains non-text bytes that cause UnicodeDecodeError" — [#5927](https://github.com/agentscope-ai/QwenPaw/pull/5927)

- Falta de compatibilidade com encoding GBK
- Afeta instalações na China e mercados asiáticos

### Aspectos Positivos (Enthusiasticos)

**✨ v2.0.0 Released!**
> "V2.0.0正式版本,终于发布了!" — [#5945](https://github.com/agentscope-ai/QwenPaw/issues/5945)
- Expectativa alta pela nova versão
- Novidades como Agent OS, Terminal UI, Scroll Context, Loop Engineering

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta / Abandonadas

| Issue | Idade | Status | Link |
|-------|-------|--------|------|
| Erro ValidationError em armbian | ~85 dias | CLOSED (sem solução clara) | [#3549](https://github.com/agentscope-ai/QwenPaw/issues/3549) |
| Request API Kimi code | ~87 dias | CLOSED (sem implementação) | [#3437](https://github.com/agentscope-ai/QwenPaw/issues/3437) |
| Conexão WeCom intermitente | ~86 dias | CLOSED (sem resolução) | [#3502](https://github.com/agentscope-ai/QwenPaw/issues/3502) |
| Feature hide top bar | ~83 dias | CLOSED | [#3571](https://github.com/agentscope-ai/QwenPaw/issues/3571) |

### Recomendações

1. **Revisitar Issues Fechadas sem Resolução**: Diversas issues Chinese-user-critical foram fechadas sem solução explícita (ex: [#3432](https://github.com/agentscope-ai/QwenPaw/issues/3432), [#3502](https://github.com/agentscope-ai/QwenPaw/issues/3502))
2. **Priorizar Migration Guide**: Demanda clara por documentação de upgrade v1→v2 ([#5948](https://github.com/agentscope-ai/QwenPaw/issues/5948))
3. **Stabilização do Desktop Shell**: Sandbox Windows quebrado é bloqueador crítico ([#5951](https://github.com/agentscope-ai/QwenPaw/issues/5951))
4. **Revisão de MCP Access Policy**: Recurso de segurança importante com bug ativo ([#5947](https://github.com/agentscope-ai/QwenPaw/issues/5947))

---

## Métricas Resumidas do Dia

| Métrica | Valor |
|---------|-------|
| **Issues atualizadas** | 43 (20 abertas, 23 fechadas) |
| **PRs atualizados** | 49 (23 abertos, 26 merged/fechados) |
| **Novas releases** | 3 (v2.0.0 stable + 2 betas) |
| **Bugs críticos abertos** | 5 |
| **Novas features request** | 4 |
| **Comunidade ativa** | Sim (múltiplos PRs de contribuidores novos) |

---

*Relatório gerado em 2026-07-11 com base em dados do

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório de Projeto — ZeroClaw
## Data de referência: 2026-07-11

---

## 1. Panorama do Dia

O projeto ZeroClaw manteve uma atividade intensa no período de 24 horas analisado, com **27 issues e 50 PRs atualizados**, demonstrando alta produtividade da comunidade. Não houve novos lançamentos, mas **7 PRs foram merged/fechados**, incluindo melhorias importantes de segurança e usabilidade. O estado geral reflete um projeto saudável em fase ativa de desenvolvimento, com 20 issues abertas em tratamento e 43 PRs em revisão — indicando uma pipeline robusta de contribuições. Diversos bugs de severidade alta (p1) estão em progresso, como o panic no skill-review (#8654) e vazamento de processos MCP (#5903 já fechado). A comunidade demonstra foco em estabilidade (v0.8.3) e preparação para a grande versão v0.9.0 com hardening de segurança.

---

## 2. Lançamentos

**Nenhum novo release nas últimas 24 horas.**

O projeto não publicou versões neste período. Os últimos trabalhos concentram-se em:
- **v0.8.3**: Trackers ativos para observability, CI, docs e dependências ([#8073](https://github.com/zeroclaw-labs/zeroclaw/issues/8073))
- **v0.9.0**: Coordenação de auth, security hardening, gateway e mudanças quebrativas ([#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432))

---

## 3. Progresso do Projeto

### PRs Merged/Fechados (7 total)

| # | Título | Impacto |
|---|--------|--------|
| [#8676](https://github.com/zeroclaw-labs/zeroclaw/pull/8676) | Expose `uses_memory` flag em CLI, tools e gateway API | **Alto** — Expõe campo existente do modelo CronJob nas interfaces imperativas |
| [#8829](https://github.com/zeroclaw-labs/zeroclaw/pull/8829) | Add default HTTP security response headers | **Alto** — Fecha 11 de 13 findings de segurança (hardening do gateway) |
| [#8859](https://github.com/zeroclaw-labs/zeroclaw/pull/8859) | Add human-run Testing section com A/B recipe | **Processo** — Melhora templates de PR e guia de testes para contribuidores |
| [#5903](https://github.com/zeroclaw-labs/zeroclaw/issues/5903) | MCP stdio child processes leak (issue fechada) | **Crítico** — Corrige vazamento de processos orphans por tick de heartbeat |
| [#8044](https://github.com/zeroclaw-labs/zeroclaw/issues/8044) | Harden /model --agent scope with per-sender authz | **Segurança** — Adiciona autorização por remetente ao override de modelo |
| [#8397](https://github.com/zeroclaw-labs/zeroclaw/issues/8397) | Expose `uses_memory` flag in CLI | **Usabilidade** — Feature request fulfilled |
| [#7809](https://github.com/zeroclaw-labs/zeroclaw/issues/7809) | Channel turns ignore runtime-profile strict/parallel flags | **Corretivo** — Corrigeフラグ being ignored |

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários + atividade recente)

| # | Título | Comentários | Tags | Análise |
|---|--------|-------------|------|---------|
| [#5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862) | zeroclaw não sabe que pode usar `zeroclaw cron` | 13 | bug, agent, cron | **Débito cognitivo do agente** — O agente não reconhece ferramenta disponível. Indica necessidade de melhor auto-descoberta de capacidades. Prioridade p2, status blocked. |
| [#5514](https://github.com/zeroclaw-labs/zeroclaw/issues/5514) | Telegram: imagens subsequentes fazem append indevido | 6 | bug, channel:telegram | **UX degradado** — Usuários que enviam múltiplas imagens recebem múltiplas respostas. Afeta experiência básica no Telegram. |
| [#6672](https://github.com/zeroclaw-labs/zeroclaw/issues/6672) | `reasoning_content` não propagado com Xiaomi thinking mode | 5 | bug, provider, high risk | **Integração de provider** — Modelos Xiaomi com thinking mode não funcionam corretamente. Severidade S0. |
| [#5262](https://github.com/zeroclaw-labs/zeroclaw/issues/5262) | Add ZeroClaw logo to Agent Skills client list | 5 | enhancement, closed | **Visibilidade** — Já fechado. Melhora presença do projeto no ecossistema Agent Skills. |

### PRs em destaque (maior complexidade/impacto)

| # | Título | Tamanho | Tags | Análise |
|---|--------|---------|------|---------|
| [#8590](https://github.com/zeroclaw-labs/zeroclaw/pull/8590) | Web visual authoring (SOP) + git_forge unified forge | **XL** | SOP, web, experimental | **Feature ambiciosa** — Standard Operating Procedures com authoring visual e ferramenta git_forge unificada. Atrai poder usuário avançado. |
| [#8905](https://github.com/zeroclaw-labs/zeroclaw/pull/8905) | Per-agent in-flight prompt counter no dashboard | **M** | gateway, observability | **Observabilidade** — Adiciona visibilidade de turns em execução por agente, útil para debugging e monitoramento. |
| [#8561](https://github.com/zeroclaw-labs/zeroclaw/pull/8561) | Telegram multi_message streaming mode | **XL** | channel:telegram | **UX Telegram** — Modo streaming multi-mensagem com delay configurável, igualando Discord/Matrix. |
| [#8784](https://github.com/zeroclaw-labs/zeroclaw/pull/8784) | Split-history loop contract (PR-1 of #7846 rework) | **L** | refactor, runtime | **Refatoração crítica** — Recontratação de histórico do loop do agente. Fundamental para v0.9.0. |

---

## 5. Bugs e Estabilidade

### Severidade Crítica (p1 / S0-S1)

| # | Título | Severidade | Status | Descrição |
|---|--------|------------|--------|-----------|
| [#8654](https://github.com/zeroclaw-labs/zeroclaw/issues/8654) | skill-review fork panics → SIGSEGV | S0 / p1 | **in-progress** | Fork do skill-review crasha com slice out-of-range em `skills/review.rs:159`, causando SIGSEGV no daemon. **用户 impact:** Pod inteira cai após turno com muitas tools. |
| [#6672](https://github.com/zeroclaw-labs/zeroclaw/issues/6672) | `reasoning_content` não propagado em Xiaomi thinking | S0 | blocked | Models Xiaomi (mimo-v2.5, mimo-v2.5-pro) com thinking mode não forwarding reasoning_content entre turns. |
| [#5903](https://github.com/zeroclaw-labs/zeroclaw/issues/5903) | MCP stdio child processes leak | p1 / high | **CLOSED** | ✅ Corrigido — Vazamento de processos orphan por heartbeat tick. |
| [#8044](https://github.com/zeroclaw-labs/zeroclaw/issues/8044) | /model --agent sem per-sender auth | p1 / high | **CLOSED** | ✅ Corrigido — Qualquer remetente podia alterar modelo de todos. |

### Severidade Alta (p2 / S2)

| # | Título | Severidade | Status | Descrição |
|---|--------|------------|--------|-----------|
| [#5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862) | Agente não sabe que pode usar cron | p2 | blocked | Self-awareness do agente. |
| [#6558](https://github.com/zeroclaw-labs/zeroclaw/issues/6558) | providers error com qwen | p3 | blocked | Erro 405 em provider custom qwen. |
| [#6517](https://github.com/zeroclaw-labs/zeroclaw/issues/6517) | Context overflow → hallucination | p2 | blocked | Janela de contexto cheia causa alucinações. |
| [#8936](https://github.com/zeroclaw-labs/zeroclaw/issues/8936) | loop_detector deep-clone JSON tree | S2 | open | **Performance** — `hash_value` aloca cópia completa da árvore JSON a cada tool call. Afeta RSS em turns tool-heavy. |
| [#8934](https://github.com/zeroclaw-labs/zeroclaw/issues/8934) | Gemini function calls fail | S1 | open | Gemini API retorna "Function call is missing a thought". |
| [#8950](https://github.com/zeroclaw-labs/zeroclaw/issues/8950) | Telegram setMyCommands rejeitado (BOT_COMMANDS_TOO_MUCH) | p2 | open | Menu de comandos não registra quando tools+skills+builtins > 100. |
| [#8952](https://github.com/zeroclaw-labs/zeroclaw/issues/8952) | Streamed narration duplicada com whitespace | S2 | open | Narração duplicada quando turn text tem whitespace leading/trailing. |
| [#8929](https://github.com/zeroclaw-labs/zeroclaw/issues/8929) | Streamed narration duplicada quando texto é trimado | S2 | open | Similar a #8952. |

### Bugs Recentemente Corrigidos

- **#8676, #8397** — Flag `uses_memory` exposta ✅
- **#8829** — HTTP security headers no gateway ✅
- **#7809** — Channel turns ignorando strict/parallel flags ✅
- **#8760** — Daemon-owned agent output no stdout ✅

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features (Issues abertas hoje)

| # | Título | Tipo | Análise de Roadmap |
|---|--------|------|-------------------|
| [#8933](https://github.com/zeroclaw-labs/zeroclaw/issues/8933) | Add `gen_ai.conversation.id` para OTel export | enhancement | **Observabilidade** — Melhora correlação de sessão cross-turn em traces. Provavelmente targeting v0.8.3. |
| [#8677](https://github.com/zeroclaw-labs/zeroclaw/issues/8677) | Add `uses_memory` checkbox na web gateway | enhancement | ✅ Closed — Já merged via #8676. |

### Evidências de Roadmap

| Tracker | Versão | Tema | Issues abertas |
|---------|--------|------|----------------|
| [#8073](https://github.com/zeroclaw-labs/zeroclaw/issues/8073) | v0.8.3 | Observability, CI, docs, deps | ~10 tracked items |
| [#8363](https://github.com/zeroclaw-labs/zeroclaw/issues/8363) | v0.8.3 | Config-driven runtime policy, routing | ~15 tracked items |
| [#8290](https://github.com/zeroclaw-labs/zeroclaw/issues/8290) | multi-user | Per-principal isolation + per-sender authz | Epic tracking |
| [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) | v0.9.0 | Auth, security, gateway, breaking changes | 111 open items |

### Sinais de Demanda
- **Telegram**: 3 issues ativas (#5514, #8950, #8810) indicam foco em estabilidade do canal
- **Provider diversity**: Issues com Xiaomi (#6672), Qwen (#6558), Gemini (#8934), Amazon Bedrock (#8925) mostram necessidade de melhor compatibilidade
- **UX/TUI**: 3 issues ZeroCode (#8945, #8944, #8926) indicam área em desenvolvimento ativo
- **SOP/Automação**: PR #8590 com beta testers invitados sugere feature estratégica

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Categoria | Issue | Sintoma | Frequência |
|-----------|-------|---------|------------|
| **Estabilidade Telegram** | #8950, #5514 | Menu de comandos não funciona; múltiplas imagens geram múltiplas respostas | 2+ reports |
| **Performance runtime** | #8936, #8934 | Vazamentos de memória; função calls falham | Impacto em produção |
| **Usabilidade agente** | #5862, #6517 | Agente não descobre capabilities; alucinações | User experience degradada |
| **Integração providers** | #8925, #6558 | Amazon Bedrock não conecta; Qwen retorna 405 | Bloqueia adoção |
| **TUI/ZeroCode** | #8945, #8944 | Text replacements e seleção de texto não funcionam | macOS UX quebrado |

### Cenários de Uso Observados
- **Automação com cron**: Usuários tentando schedules (ex: "8:00 PM daily") — evidenciam caso de uso forte de scheduled tasks
- **Multi-image Telegram**: Agentes sendo usados com upload de imagens — caso de uso visual
- **Long context conversations**: Context overflow em sessões longas — evidencia uso em tarefas prolongadas
- **Provider diversity**: Usuários tentam múltiplos providers (Bedrock, Qwen, Xiaomi, Gemini) — heterogeneidade de deployment

### Satisfação/Insatisfação
- **Positivo**: Merge rápido de `uses_memory` (#8676) e security hardening (#8829) mostra responsiveness
- **Negativo**: Bugs de severidade S0-S1 (#8654, #6672) em blocked status indicam necessidade de priorização
- **Neutral**: Demanda por beta testers do SOP (#8590) mostra ambição mas risco de feature creep

---

## 8. Backlog que Merece Atenção

### Issues sem resposta há >30 dias (stale-candidate)

| # | Título | Criado | Atualizado | Comentários | Prioridade |
|---|--------|--------|------------|-------------|------------|
| [#5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862) | zeroclaw não sabe que pode usar cron | 2026-04-18 | 2026-07-10 | 13 | p2 |
| [#6558](https://github.com/zeroclaw-labs/zeroclaw/issues/6558) | providers error com qwen | 2026-05-10 | 2026-07-10 | 4 | p3 |
| [#6517](https://github.com/zeroclaw-labs/zeroclaw/issues/6517) | Context overflow hallucination | 2026-05-07 | 2026-07-10 | 2 | p2 |

### PRs Bloqueados

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*