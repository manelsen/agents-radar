# Resumo diário do ecossistema de agentes de IA 2026-10-13

> Issues: 0 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-10-13 01:47 UTC

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

# Relatório Comparativo — Ecossistema de Agentes IA Open Source

**Data de corte:** 2026-10-13 | **Projetos analisados:** 7

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes IA open source apresenta **dois polos de intensidade distintos**: ZeroClaw, Hermes Agent e CoPaw lideram em volume de atividade, enquanto IronClaw e NullClaw operam em modo de manutenção ou silêncio. NanoBot e PicoClaw ocupam o espectro intermediário com foco em integração de canais e estabilidade. A tendência dominante é a **maturação de plataformas multiplataforma** — WhatsApp, Telegram, Feishu emergem como canais prioritários em múltiplos projetos. Simultaneously, a extensibilidade via plugins e MCP se consolida como requisito competitivo. Os projetos mais ativos investem em infraestrutura de distribuição (updates in-app, prebuilt packages) e observabilidade (tracing, logging, dashboards), indicando profissionalização do ecossistema rumo a deployment enterprise-ready.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | Releases (24h) | Saúde | Tendência |
|---------|:------------:|:---------:|:--------------:|:-----:|:---------:|
| **ZeroClaw** | 32 | 50 | 0 | 🟢 Excelente | ▲ Acelerando |
| **Hermes Agent** | 50 | 50 | 1 (v0.21.7) | 🟢 Boa | ▲ Estável-alta |
| **CoPaw** | 16 | 20 | 0 | 🟡 Estável | ▲ Pico de contributors |
| **NanoBot** | 0 | 34 | 0 | 🟢 Alta | ▲ Consistente |
| **PicoClaw** | 4 | 7 | 0 | 🟡 Moderada | ➡️ Decrescente |
| **IronClaw** | 1 | 0 | 0 | 🟡 Baixa | ➡️ Manutenção |
| **NullClaw** | 0 | 0 | 0 | 🔴 Inativa | — Estagnada |

**Métricas agregadas do ecossistema:** 103 issues + 161 PRs processados em 24h, 1 release. Taxa de fechamento média de ~55%, indicando pipeline saudável de review.

---

## 3. Posicionamento do Projeto Principal

### ZeroClaw como líder técnico

**Vantagens competitivas identificadas:**

| Dimensão | ZeroClaw | Hermes Agent | NanoBot |
|----------|---------|--------------|---------|
| **Volume de PRs** | 50 | 50 | 34 |
| **Segurança** | Bug de injeção shell corrigido ([#11188](https://github.com/zeroclaw-labs/zeroclaw/pull/11188)) | — | Compatibilidade com named connections |
| **Extensibilidade** | Plugin system com hot reload + rollback | Skills system | MCP presets |
| **Governança** | RFC process documentado (15 comments) | — | — |
| **Maturidade de features** | Memory persistence, A2A protocol | Desktop-first UX | Multi-channel (WhatsApp, Telegram) |

**Diferenças técnicas:**

- **ZeroClaw:** Arquitetura orientada a segurança com filesystem hardening, mTLS, identity scoping. RFC crate dedicado para A2A.
- **Hermes Agent:** Foco em Desktop app com onboarding redesenhado, tema customizável, connector cards.
- **NanoBot:** Hub multiplataforma com provider abstraction (OpenAI, OpenRouter, Codex), canal nativo de voz (transcrição Whisper).

**Tamanho de comunidade:** ZeroClaw e Hermes Agent lideram em volume absoluto. NanoBot demonstra crescimento orgânico rápido com ciclo de review de 1-2 dias por PR.

---

## 4. Focos Técnicos Compartilhados

### 4.1 Multi-Channel Communication

| Projeto | Canais Suportados | Status |
|---------|-------------------|--------|
| **NanoBot** | WhatsApp (PR #6152), Telegram (PR #4919), Feishu (fix #6157) | Expansão ativa |
| **PicoClaw** | Telegram (bug #3426), Feishu (#1676), OneBot (#3394, #3396) | Estabilização |
| **Hermes Agent** | Slack (P0 #96384 — broken), WhatsApp (logging #137538) | Bugfixing |
| **CoPaw** | Subprocess isolation para channels (PR #8187) | Arquitetura em refatoração |

**Convergência:** A necessidade de suportar múltiplos canais de comunicação (WhatsApp, Telegram, Slack, Feishu, QQ/OneBot) é transversal. Cada projeto implementa adapters independentes, sugerindo oportunidade de padronização via protocolo A2A.

### 4.2 Web Search & Providers

| Projeto | Providers Ativos | Roadmap |
|---------|------------------|---------|
| **NanoBot** | OpenRouter native images (PR #5718), named connections | Multi-provider |
| **CoPaw** | Tavily API key (PR #8204), Firecrawl (PR #8200) | Ecossistema aberto |
| **ZeroClaw** | Firecrawl provider (PR #11680) | Search routing |

**Convergência:** Liberalização de provedores de busca (Tavily, Firecrawl, Atlas Cloud) como demanda comunitária consistente.

### 4.3 Plugin System & Extensibilidade

| Projeto | Abordagem | Status |
|---------|-----------|--------|
| **ZeroClaw** | Hot reload + rollback + staged admission (PRs #11261-#11262) | Avanzado |
| **CoPaw** | Plugin isolation via subprocess (PR #8187) | Refatoração |
| **NanoBot** | MCP presets (FXMacroData #6068), WebUI extensions (#6187) | Emergente |
| **Hermes Agent** | Subagent lifecycle v1.1 (issue #133212) | Planejado |

**Convergência:** Isolamento de plugins e lifecycle management (load/unload/update) como requisito de produção.

### 4.4 Observabilidade & Debugging

| Projeto | Investimentos | Status |
|---------|---------------|--------|
| **Hermes Agent** | Langfuse tracing (PR #102755), session search NL (PR #100037) | Ativo |
| **ZeroClaw** | Cost dashboard UTC fix (PR #11695), cost warnings (PR #11692) | Estabilização |
| **NanoBot** | Web proxy settings UI consolidation | UI/UX |

---

## 5. Análise de Diferenciação

### 5.1 Por Público-Alvo

| Projeto | Público Primário | Público Secundário |
|---------|------------------|---------------------|
| **ZeroClaw** | Enterprise/devops | Desenvolvedores que precisam de agentes self-hosted |
| **Hermes Agent** | Usuários Desktop individuais | Equipes com workflows Slack |
| **NanoBot** | Desenvolvedores e power users | Organizações com infraestrutura multi-cloud |
| **CoPaw** | Usuários Windows | Desenvolvedores com GPU limitada |
| **PicoClaw** | Comunidades de língua chinesa (QQ/Telegram) | Desenvolvedores embedded |
| **IronClaw** | Pesquisadores de IA | Avaliadores de benchmarks |

### 5.2 Por Arquitetura

```
ZeroClaw        → Sandboxed execution, filesystem hardening, mTLS
Hermes Agent    → Desktop app monolítico, TUI, Mnemosyne memory
NanoBot         → Microserviços por canal, runtime multi-cloud
CoPaw           → Plugin-based com subprocess isolation
PicoClaw        → Lightweight bridge (MQTT-like para OneBot)
IronClaw        → Evaluation harness (stateless)
```

### 5.3 Por Estratégia de Features

| Estratégia | Projetos | Exemplos |
|------------|----------|----------|
| **Hub de providers** | NanoBot, CoPaw | Multi-provider abstraction, named connections |
| **Segurança-first** | ZeroClaw | Identity scoping, plugin verification, filesystem hardening |
| **UX-first** | Hermes Agent | Desktop onboarding, connector cards, theme picker |
| **Channel parity** | PicoClaw, NanoBot | Paridade de features entre Telegram/Feishu/WhatsApp |
| **Avaliação pura** | IronClaw | Taxonomy de falhas, benchmarking, sem produção |

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Projetos em Velocidade Máxima (Iteração Rápida)

| Projeto | Indicadores | Ciclo de Review |
|---------|-------------|-----------------|
| **ZeroClaw** | 50 PRs/24h, RFC process maduro | ~2-3 dias |
| **Hermes Agent** | v0.21.7 com 204 PRs consolidados | ~1-2 dias |
| **CoPaw** | 20 PRs com novos contribuidores (JuampiHernandez, Li-john1021) | Variável |

### 6.2 Projetos em Consolidação de Qualidade

| Projeto | Indicadores | Foco |
|---------|-------------|------|
| **NanoBot** | 19/15 PRs closed/abertos (56% taxa close), zero issues | Estabilidade, distribuição |
| **PicoClaw** | Bugfixes de compatibilidade cross-provider | Estabilidade de canais |
| **Hermes Agent** | 5 bugs P0/P1 simultâneos | Qualidade de produção |

### 6.3 Projetos em Modo Manutenção

| Projeto | Atividade | Preocupação |
|---------|-----------|-------------|
| **IronClaw** | 1 issue, 0 PRs | Baixa visibilidade, sem comunidade ativa |
| **NullClaw** | Zero atividade | Projeto reference sem desenvolvimento |

### 6.4 Dívida Técnica Crítica

| Projeto | Issue | Idade | Risco |
|---------|-------|-------|-------|
| **CoPaw** | Tool call 404 | 60+ dias | Bloqueio de streaming |
| **Hermes Agent** | Slack P0 (mensagens perdidas) | Variável | Churn de usuários |
| **ZeroClaw** | model_routing_config corruption (P1) | v0.8.5 | Config loss |
| **NanoBot** | PR conflicts (#6166, #6154, #5718) | 3 PRs | Bloqueio de distribuição |

---

## 7. Sinais de Tendência

### 7.1 Tendências de Mercado Validadas

| Tendência | Evidência | Intensidade |
|-----------|-----------|:------------:|
| **Multi-channel como commodity** | WhatsApp, Telegram, Slack, Feishu em 4/7 projetos | 🔴 Alta |
| **Enterprise deployment readiness** | In-app updates, prebuilt packages, hot reload, rollback | 🔴 Alta |
| **Extensibilidade via plugin/MCP** | 5/7 projetos com sistema de plugins ou MCP | 🟠 Média-Alta |
| **Observabilidade como feature** | Tracing, logging, dashboards de custo | 🟠 Média-Alta |
| **Windows como plataforma legítima** | Issues específicas Windows em CoPaw, ZeroClaw | 🟡 Média |
| **Web search diversification** | Tavily, Firecrawl, Atlas Cloud (3 projetos) | 🟡 Média |

### 7.2 Sinais Emergentes (Low Signal, High Potential)

| Sinal | Projeto | Interpretação |
|-------|---------|---------------|
| **Swarm orchestration** | ZeroClaw (#10025) | Multi-agent orchestration incipiente |
| **IoT/robótica** | CoPaw (#8189 — ESP32) | Expansão para hardware físico |
| **RAG como feature** | ZeroClaw (#11235) | Busca documental para operadores |
| **White-labeling** | Hermes Agent (#122339) | Customização branded para ISVs |

### 7.3 Desacoplamentos e Riscos

| Observação | Implicação |
|------------|------------|
| IronClaw sem comunidade visível | Benchmarking como nicho pode não escalar |
| ZeroClaw sem release formal | Preparação para v0.8.6 sugere release iminente — monitorar |
| Hermes Agent com P0 Slack não resolvido | Canal crítico quebrado pode causar churn enterprise |
| CoPaw com 60+ dias de bug de streaming | Dívida técnica pode sinalizar sobrecarga de maintainers |

---

## Recomendação Executiva

**Para decisores técnicos:**

- **ZeroClaw** é a escolha mais robusta para deployment enterprise se segurança e extensibilidade são prioritários.
- **NanoBot** oferece a melhor cobertura multi-channel com abstraction de providers.
- **Hermes Agent** é a melhor experiência Desktop individual, mas P0 do Slack é bloqueante para uso organizacional.

**Para desenvolvedores:**

- Priorizar PRs de distribuição em NanoBot (#6154, #6168) para acesso mais fácil.
- Monitorar ZeroClaw v0.8.6/v0.9.0 para features de memory persistente e A2A.
- Resolver conflitos de merge em NanoBot (#6166, #6154) para desbloquear pipeline.

---

*Relatório gerado em 2026-10-13 | Fonte: github.com (NullClaw, HKUDS/nanobot, NousResearch/hermes-agent, sipeed/picoclaw, nearai/ironclaw, agentscope-ai/CoPaw, zeroclaw-labs/zeroclaw)*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-10-13

## 1. Panorama do Dia

O NanoBot apresenta alta atividade de desenvolvimento nas últimas 24 horas, com **34 PRs atualizados** (15 abertos, 19 fechados/merged). Nenhuma nova release foi publicada e zero issues foram atualizadas, indicando foco exclusivo em contribuições de código. A atividade concentra-se em refatorações de runtime, melhorias na WebUI, expansão de canais (WhatsApp, Telegram) e correções de estabilidade. O projeto demonstra maturidade com ciclo de review ativo e colaboração distribuída entre múltiplos contribuidores.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24 horas.**

> Não há changelogs ou notas de migração para reportar neste período.

---

## 3. Progresso do Projeto

### PRs Closed/Merged (9 items relevantes)

| # | Título | Impacto |
|---|--------|---------|
| [#6176](https://github.com/HKUDS/nanobot/pull/6176) | `feat(skills)`: explain nanobot usage from bundled documentation | **Alto** — Adiciona skill `nanobot-document` para contextualizar respostas com documentação do usuário |
| [#6178](https://github.com/HKUDS/nanobot/pull/6178) | Feat/webui extensions | **Médio** — Suporte a extensões WebUI |
| [#3588](https://github.com/HKUDS/nanobot/pull/3588) | fix(transcription): convert non-WAV audio to 16kHz mono WAV | **Alto** — Corrige compatibilidade com backends Whisper self-hosted |
| [#6160](https://github.com/HKUDS/nanobot/pull/6160) | feat(images): reuse named connections and image request settings | **Alto** — Permite selecionar conexões nomeadas para geração de imagens |
| [#6172](https://github.com/HKUDS/nanobot/pull/6172) | refactor(agent): compose image tools in application runtimes | **Médio** — Limpa estado de `AgentLoop` movendo lógica para `ImageGenerationTool` |
| [#6157](https://github.com/HKUDS/nanobot/pull/6157) | fix(feishu): restore assistant creation and pairing recovery | **Médio** — Restaura fluxo de criação de assistentes Feishu |
| [#6162](https://github.com/HKUDS/nanobot/pull/6162) | fix(webui): keep settings restarts out of chat history | **Baixo** — Evita entradas vazias no histórico ao reiniciar |
| [#6161](https://github.com/HKUDS/nanobot/pull/6161) | fix(webui): place web proxy with web access settings | **Baixo** — Consolida configurações de proxy na UI |
| [#6180](https://github.com/HKUDS/nanobot/pull/6180) | Add Sol AI to Open Source Partners | **Baixo** — Documentação/parceria |

**Destaque:** A correção de transcription ([#3588](https://github.com/HKUDS/nanobot/pull/3588)) resolve problema de longa data (Maio/2026) relacionado à compatibilidade com `whisper.cpp` atrás de endpoints customizados.

---

## 4. Temas Quentes da Comunidade

### PRs em discussão ativa (15 abertas)

| # | Título | Temas |
|---|--------|-------|
| [#6168](https://github.com/HKUDS/nanobot/pull/6168) | integrate managed installs and recoverable in-app updates | **Atualizações gerenciadas** — Pipeline completo de updates com recovery |
| [#6154](https://github.com/HKUDS/nanobot/pull/6154) | prepare verified prebuilt preview candidates | **Distribuição** — Prebuilt packages para 5 alvos, sem necessidade de build frontend |
| [#6068](https://github.com/HKUDS/nanobot/pull/6068) | add FXMacroData MCP preset | **MCP Ecosystem** — Dados macroeconômicos (taxas, CPI, GDP) |
| [#6152](https://github.com/HKUDS/nanobot/pull/6152) | add WhatsApp Agent Platform channel | **Expansão de Canais** — Integração oficial WhatsApp API |
| [#4919](https://github.com/HKUDS/nanobot/pull/4919) | feat(telegram): custom Bot API base URL and extra headers | **Flexibilidade de deployment** — Suporte a servers Telegram self-hosted |
| [#6032](https://github.com/HKUDS/nanobot/pull/6032) | add configurable local trusted extension surface | **WebUI extensibility** — Extensions via `extension.json` manifest |
| [#5718](https://github.com/HKUDS/nanobot/pull/5718) | support OpenRouter native image generation API | **Provedores** — Mantém compatibilidade com geração de imagens via OpenRouter |
| [#6011](https://github.com/HKUDS/nanobot/pull/6011) | fix(providers): stream Codex image generation responses | **Bugfix SSE** — Corrige parsing de streaming HTTPX bufferizado |

**Análise:** O roadmap está fortemente orientado a **infraestrutura de distribuição** (in-app updates, prebuilt candidates) e **expansão de canais** (WhatsApp, Telegram custom). A comunidade demonstra interesse em MCP como padrão de extensibilidade.

---

## 5. Bugs e Estabilidade

### Correções applied nas últimas 24h

| Severidade | # | Problema | Solução |
|------------|---|----------|---------|
| **Alta** | [#3588](https://github.com/HKUDS/nanobot/pull/3588) | Transcrição falhava com backends Whisper self-hosted (não-16kHz mono WAV) | Conversão prévia para formato aceito |
| **Média** | [#6157](https://github.com/HKUDS/nanobot/pull/6157) | Criação de assistentes Feishu quebrada; recovery de pairing perdido | Restaura fluxo QR + tracking separado de delivery |
| **Média** | [#6011](https://github.com/HKUDS/nanobot/pull/6011) | Imagens Codex descartadas em disconnect/buffer | Streaming via `AsyncGenerator` sem buffer HTTPX |
| **Baixa** | [#6162](https://github.com/HKUDS/nanobot/pull/6162) | Restart via Settings criava entradas vazias no chat | Trata como controle transiente |

**Zero issues abertas** indica bom controle de regressions. Atentar para PRs com flag `conflict` ([#6166](https://github.com/HKUDS/nanobot/pull/6166), [#6154](https://github.com/HKUDS/nanobot/pull/6154), [#5718](https://github.com/HKUDS/nanobot/pull/5718)) — podem causar conflitos de merge.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas demandas identificadas

| # | Feature | Potencial Roadmap |
|---|---------|-------------------|
| [#6152](https://github.com/HKUDS/nanobot/pull/6152) | WhatsApp Agent Platform | Próxima versão: canal oficial WhatsApp |
| [#4919](https://github.com/HKUDS/nanobot/pull/4919) | Telegram custom Bot API server | Enterprise/self-hosted deployment |
| [#6068](https://github.com/HKUDS/nanobot/pull/6068) | FXMacroData MCP preset |财经 dados em tempo real |
| [#6103](https://github.com/HKUDS/nanobot/pull/6103) | CoreWeave Inference provider | Multi-cloud provider expansion |
| [#6168](https://github.com/HKUDS/nanobot/pull/6168) | Managed installs + recoverable updates | UX/DevOps: update system completo |
| [#6179](https://github.com/HKUDS/nanobot/pull/6179) | WebUI internal gallery (163 componentes) | DX: documentação de componentes |

**Tendência:** O projeto está convergindo para um **hub de IA pessoal multiplataforma** com foco em:
1. Multi-cloud/multi-provider
2. Canais de comunicação diversos
3. Update/distribution system robusto
4. Extensibilidade via MCP e plugins

---

## 7. Resumo de Feedback dos Usuários

*Baseado em descrições de PRs e issues do período.*

| Categoria | Feedback Implícito |
|----------|-------------------|
| **Dores de Deployment** | Necessidade de Telegram self-hosted (empresas), CoreWeave para GPU access |
| **UX/UI** | Component discoverability fraca na WebUI → galeria interna proposta |
| **Documentação** | Usuários pedindo "como configurar modelo" sem saber onde buscar → skill `nanobot-document` |
| **Estabilidade de Updates** | Usuários precisam de updates recuperáveis e prebuilt candidates |
| **Provedores** | named connections para imagens e providers; OpenRouter image gen compatibility |

**Satisfação:** O ciclo de review rápido (PRs abertos em 1-2 dias já em review) sugere comunidade engajada.

---

## 8. Backlog que Merece Atenção

### PRs sem activity há >7 dias (com potencial)

| # | Título | Age | Prioridade |
|---|--------|-----|------------|
| [#5718](https://github.com/HKUDS/nanobot/pull/5718) | OpenRouter native image generation API | ~34 dias | p2 |
| [#4919](https://github.com/HKUDS/nanobot/pull/4919) | Telegram custom Bot API | ~90 dias | p2 |
| [#6011](https://github.com/HKUDS/nanobot/pull/6011) | Stream Codex image responses | ~11 dias | p2 |

### Conflitos pendentes de resolução

| # | Impacto |
|---|---------|
| [#6166](https://github.com/HKUDS/nanobot/pull/6166) | Refatoração de runtime contracts — pode afetar múltiplos PRs |
| [#6154](https://github.com/HKUDS/nanobot/pull/6154) | Prebuilt candidates dependem de #5817 |
| [#5718](https://github.com/HKUDS/nanobot/pull/5718) | OpenRouter image gen com conflitos |

**Recomendação:** Resolver conflitos em [#6166](https://github.com/HKUDS/nanobot/pull/6166) e [#6154](https://github.com/HKUDS/nanobot/pull/6154) para desbloquear distribuição.

---

## Métricas de Saúde do Projeto

| Indicador | Valor | Status |
|-----------|-------|--------|
| PRs activity (24h) | 34 | 🟢 Alta |
| Issues activity (24h) | 0 | 🟡 Normal |
| Releases (24h) | 0 | 🟡 Normal |
| Taxa de close/ aberto | 19/15 (~56%) | 🟢 Sólida |
| PRs com conflito | 3 | 🟡 Monitorar |
| PRs em revisão prolongada (>30d) | 2 (#5718, #4919) | 🟠 Atenção |

---

*Relatório gerado em 2026-10-13 | Fonte: github.com/HKUDS/nanobot*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 13 de outubro de 2026

---

## 1. Panorama do dia

O projeto demonstra **alta atividade** com 50 issues e 50 PRs atualizados nas últimas 24h. A release v0.21.7 foi publicada ontem (11/10), consolidando ~204 PRs. O foco atual está na **experiência de primeiro uso do Desktop** — dois PRs de onboarding foram merged (#137417, #137526) e uma onda de PRs relacionados aguarda revisão. Entre os problemas abertos, destaca-se um bug P1 de recursão infinita no Desktop e um P0 no Slack com mensagens perdidas. A saúde geral é positiva, mas a carga de bugs P2 permanece significativa.

---

## 2. Lançamentos

### ✅ v0.21.7 — Hermes Agent
**Data:** 11 de outubro de 2026 | [Release #137XXX](https://github.com/NousResearch/hermes-agent/releases)

- **Tipo:** Patch release
- **Escopo:** Consolida ~204 PRs merged desde v0.21.6
- **Plataformas afetadas:** Desktop app (macOS Apple Silicon, Windows), Microsoft Store/MSIX, instalador, Docker, Hermes Cloud
- **Breaking changes:** Nenhuma declarada
- **Notas de migração:** Nenhuma necessária para quem já está em v0.21.x

> Esta release é o ponto de partida estável para a nova experiência de onboarding que está em desenvolvimento (PRs #137429, #137522, #137526).

---

## 3. Progresso do Projeto

### PRs merged/fechados hoje

| PR | Título | Tipo | Impacto |
|---|---|---|---|
| [#137526](https://github.com/NousResearch/hermes-agent/pull/137526) | Desktop `set_theme`: accent, modo e layout com picker cards | Feature | Permite ao agente controlar a aparência do Desktop via ferramenta |
| [#137417](https://github.com/NousResearch/hermes-agent/pull/137417) | Desktop accent sobrevive a reinicialização | Bug fix | Corrige persistência da cor de destaque após restart |
| [#137536](https://github.com/NousResearch/hermes-agent/pull/137536) | Auto-fix lint (bot) | Refactor | Limpeza automática de formatação JS |
| [#137535](https://github.com/NousResearch/hermes-agent/pull/137535) | Esconder toolsets desabilitados das warnings do doctor | Bug fix | Reduz ruído no output do `hermes doctor` |
| [#137537](https://github.com/NousResearch/hermes-agent/pull/137537) | Doctor: não prescrever setup para toolsets desabilitados | Bug fix | Alinha `hermes doctor` com `hermes tools list` |

### PRs abertos de destaque

| PR | Título | Prioridade | Status |
|---|---|---|---|
| [#137429](https://github.com/NousResearch/hermes-agent/pull/137429) | Backend de first-run onboarding | P2 | Aguarda review |
| [#137522](https://github.com/NousResearch/hermes-agent/pull/137522) | Desktop first-run onboarding chat e set_theme | P3 | Aguarda merge após #137429 |
| [#137420](https://github.com/NousResearch/hermes-agent/pull/137420) | Delete old agentic setup flow | P3 | Em revisão |
| [#137310](https://github.com/NousResearch/hermes-agent/pull/137310) | Move memory/skills guidance para volatile tier | P0 | Correção crítica de cache |
| [#137497](https://github.com/NousResearch/hermes-agent/pull/137497) | Fail-closed pre-delivery gate (re-port) | P3 | Feature de segurança clínica |

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários + reações)

| Issue | Título | Comentários | 👍 | Prioridade |
|---|---|---|---|---|
| [#121095](https://github.com/NousResearch/hermes-agent/issues/121095) | `browser_exec` deixa processos daemon órfãos | 12 | 0 | P2 |
| [#58226](https://github.com/NousResearch/hermes-agent/issues/58226) | Anthropic OAuth: uso reportado como 100% quando é ≤1% | 11 | 2 | P2 |
| [#122160](https://github.com/NousResearch/hermes-agent/issues/122160) | CLI import externo dispara re-exec do bootstrap | 9 | 0 | P2 |
| [#134890](https://github.com/NousResearch/hermes-agent/issues/134890) | Desktop: recursion depth exceeded após edit-and-resubmit | 3 | 0 | **P1** |
| [#96384](https://github.com/NousResearch/hermes-agent/issues/96384) | Slack: mensagens encaminhadas perdem texto e arquivos | 3 | 2 | **P0** |

### Análise dos temas quentes

**1. Browser automation (#121095)** — 12 comentários, indicando discussão ativa. Usuários relatam que `browser_harness.daemon` acumula processos stal e não tem timeout de inatividade. Este é um problema de **estabilidade de longo prazo** que pode impactar sessões que usam browser repetidamente.

**2. Billing/Anthropic (#58226)** — 11 comentários + 2 reações. A dashboard de uso está mostrando 100% quando o uso real é <1%. Problema de **confiança do usuário** — se o billing parece incorreto, há risco de churn.

**3. CLI bootstrap (#122160)** — 9 comentários. No Windows, processos Python externos estão sendo re-executados pelo bootstrap do Hermes indevidamente, causando `"No module named 'api'"`. Problema de **compatibilidade com workflows externos**.

**4. Desktop recursion (#134890)** — P1 com apenas 3 comentários, mas severidade maxima. `RecursionError` no agent build deferred após edit-and-resubmit. **Sem traceback logado**, dificultando diagnóstico.

**5. Slack P0 (#96384)** — 2 👍 + 3 comentários. Qualquer mensagem encaminhada no Slack perde conteúdo e anexos silenciosamente. Este é um **workflow crítico** (compartilhar alertas, escalar relatórios).

---

## 5. Bugs e Estabilidade

### Por severidade

#### P0 — Críticos (ação imediata necessária)

| Issue | Título | Status | Link |
|---|---|---|---|
| #96384 | Slack: mensagens encaminhadas perdem texto e arquivos | OPEN | [GitHub](https://github.com/NousResearch/hermes-agent/issues/96384) |
| #134890 | Desktop recursion depth exceeded pós edit-and-resubmit | OPEN | [GitHub](https://github.com/NousResearch/hermes-agent/issues/134890) |

#### P1 — Altos

| Issue | Título | Status | Link |
|---|---|---|---|
| #134890 | Desktop deferred agent build: RecursionError + sem traceback | OPEN | [GitHub](https://github.com/NousResearch/hermes-agent/issues/134890) |

#### P2 — Significativos

| Issue | Título | Área | Link |
|---|---|---|---|
| #121095 | Browser exec daemon processes stal | tools/browser | [GitHub](https://github.com/NousResearch/hermes-agent/issues/121095) |
| #58226 | Anthropic OAuth billing 100x inflation | billing | [GitHub](https://github.com/NousResearch/hermes-agent/issues/58226) |
| #122160 | CLI import externo: bootstrap re-exec no Windows | install | [GitHub](https://github.com/NousResearch/hermes-agent/issues/122160) |
| #136058 | Desktop `/focus` e `/verbose` não funcionam | desktop/tui | [GitHub](https://github.com/NousResearch/hermes-agent/issues/136058) |
| #137448 | `skill_manage` validação induz bypass e deleta skill | skills | [GitHub](https://github.com/NousResearch/hermes-agent/issues/137448) |
| #87036 | Sticky `reasoning_effort` sem clear/validação | config | [GitHub](https://github.com/NousResearch/hermes-agent/issues/87036) |
| #136713 | Dashboard re-attach destrói turn em execução | sessions | [GitHub](https://github.com/NousResearch/hermes-agent/issues/136713) |
| #135344 | Kanban dispatcher: workers macOS duplicados | cron | [GitHub](https://github.com/NousResearch/hermes-agent/issues/135344) |
| #137493 | Docker storage-opt cria container doomed | docker | [GitHub](https://github.com/NousResearch/hermes-agent/issues/137493) |
| #137512 | macOS 12 Monterey: Node v25+ falha com dyld | install | [GitHub](https://github.com/NousResearch/hermes-agent/issues/137512) |

#### Bugs fechados recentemente (resolvidos)

- **#137476** — `search_files` falha com ESRCH (closed 13/10)
- **#137230** — Update desabilita Mnemosyne por conflito ONNX (closed 12/10)
- **#132242** — Mnemosyne indisponível após update (closed 12/10)
- **#119704** — Telegram lazy install falha em mirrors pip (closed 12/10)
- **#79886** — Desktop profile rail esquece workspace (closed 13/10)

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features em discussão

| Issue | Título | Área | P | Link |
|---|---|---|---|---|
| #133212 | Subagent lifecycle v1.1: host-isolation transport | plugins | P3 | [GitHub](https://github.com/NousResearch/hermes-agent/issues/133212) |
| #137258 | Skills tracker: upstream bundles + user learning | skills | P3 | [GitHub](https://github.com/NousResearch/hermes-agent/issues/137258) |
| #57431 | API: ferramentas customizadas por requisição | gateway | P3 | [GitHub](https://github.com/NousResearch/hermes-agent/issues/57431) |
| #122339 | White-label: desabilitar seções de prompt branded | config | P3 | [GitHub](https://github.com/NousResearch/hermes-agent/issues/122339) |
| #135980 | Auto-remediação de skills no write cap | skills | P3 | [GitHub](https://github.com/NousResearch/hermes-agent/issues/135980) |

### Features em desenvolvimento (PRs abertos)

| PR | Título | Sinais de roadmap |
|---|---|---|
| [#137522](https://github.com/NousResearch/hermes-agent/pull/137522) | Desktop first-run onboarding | **Onboarding redesenhado** para UX moderna |
| [#137426](https://github.com/NousResearch/hermes-agent/pull/137426) | Connector cards no chat | **Gestão de conexões** via interface conversacional |
| [#137538](https://github.com/NousResearch/hermes-agent/pull/137538) | WhatsApp group log JSON-lines | **Observabilidade** para canais group |
| [#100037](https://github.com/NousResearch/hermes-agent/pull/100037) | Session search NL expansion fallback | **Busca semântica** em sessões |
| [#102755](https://github.com/NousResearch/hermes-agent/pull/102755) | Langfuse tracing por platform/trigger | **Observabilidade** avanzada com tags |
| [#137497](https://github.com/NousResearch/hermes-agent/pull/137497) | Fail-closed pre-delivery gate | **Segurança clínica** (re-port aguardado) |

### Sinais de direção estratégica

1. **Desktop-first**: A onda de PRs de onboarding (#137429, #137522, #137526) e connector cards indica foco em **experiência Desktop**.
2. **Observabilidade**: Tags Langfuse, WhatsApp logging, session search NL — investimento em **debugging e analytics**.
3. **Skills e agentes**: Subagent lifecycle, skills tracker, white-label sugerem **extensibilidade** como vetor de crescimento.

---

## 7. Resumo de Feedback dos Usuários

### Dores reais identificadas

| Tema | Descrição | Frequência |
|---|---|---|
| **Browser daemon stal** | Cada chamada `browser_exec` deixa processos órfãos, consumindo recursos | Relatado em #121095, recorrente |
| **Billing incorreto** | Dashboard mostra Anthropic 100% quando uso real <1% | Usuários com OAuth estão confusos |
| **Slack perde mensagens** | Mensagens encaminhadas perdem texto e anexos | Workflow crítico quebrado |
| **Desktop crashes** | RecursionError no agent build sem traceback | Sessões Desktop morrem silenciosamente |
| **Memory Mnemosyne** | Provider configurado mas ferramentas reportam "não inicializado" | Usuários de memória afetados |
| **macOS 12 incompatível** | Hermes não funciona em Monterey por Node >= v25 | Base de usuários antiga abandonada |
| **Skills approval deadlock** | Scanner bloqueia escritas que não podem ser aprovadas por humanos | Workflow de curadoria quebrado |

### Cenários de uso em evidência

- **Browser automation**: Integração com browser-use backend é crítica para workflows de navegação automatizada
- **Slack como canal**: Usuários dependem de encaminhamento de mensagens para alertas e escalação
- **Gestão de memória**: Mnemosyne é escolha popular, mas quebras após update geram frustração
- **Desktop como front-end**: Perfil, tema e onboarding são pontos de entrada para novos usuários

### Satisfação/Insatisfação

| Indicador | Observação |
|---|---|
| Reações negativas | Baixas (apenas 2 👍 em #58226, 2 👍 em #96384) — comunidade não reage muito, mas os que reagem apontam problemas críticos |
| Comentários em bugs | Alta (12 comentários em #121095, 11 em #58226) — usuários estão dispostos a debugar juntos |
| Bugs fechados rapidamente | Bom ritmo: 5 bugs closed nas últimas

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-10-13

---

## 1. Panorama do Dia

O projeto PicoClaw manteve atividade moderada em 12 de outubro, com **4 issues atualizadas** e **7 PRs** processados. A equipe focou em manutenção de estabilidade, com 6 PRs fechados incluindo melhorias em canais (Telegram, Feishu, OneBot) e correções de bugs em provedores OpenAI compatíveis. Nenhuma release foi publicada no período. Três issues permanecem abertas, incluindo um bug crítico no Telegram MarkdownV2 reportado no mesmo dia. O projeto segue saudável, com progresso consistente em bugs e features backlog.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

O projeto está em um período de desenvolvimento ativo sem tags formais de release. É recomendável monitorar a branch `main` para mudanças incrementais.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados (6 total)

| PR | Tipo | Descrição | Impacto |
|---|---|---|---|
| [#3396](https://github.com/sipeed/picoclaw/pull/3396) | Feature | Toggle opcional `reaction_enabled` para OneBot | Permite desabilitar reaccões automáticas de acknowledgement |
| [#1500](https://github.com/sipeed/picoclaw/pull/1500) | Enhancement | Logger com formato de tempo configurável via `config.json` | Maior flexibilidade para personalização de logs |
| [#1397](https://github.com/sipeed/picoclaw/pull/1397) | Bugfix | Carrega certificados CA do Termux para Android | Resolve falhas TLS em ambientes Termux |
| [#1509](https://github.com/sipeed/picoclaw/pull/1509) | Bugfix | Remove `extra_content` de tool calls para provedores não-Google | Compatibilidade com múltiplos provedores LLM |
| [#1676](https://github.com/sipeed/picoclaw/pull/1676) | Feature | Isolamento de threads e reply-in-thread para Feishu | Paridade com Telegram em conversas em grupo |
| [#1651](https://github.com/sipeed/picoclaw/pull/1651) | Bugfix | Melhor chunking HTML no Telegram preservando palavras | Evita quebras indevidas em mensagens formatadas |

### PR Aberto Importante

- **[#3381](https://github.com/sipeed/picoclaw/pull/3381)** — Migração do provedor OpenAI para a nova **Responses API**. Este é um change significativo que pode impactar usuários do provedor OpenAI direto.

---

## 4. Temas Quentes da Comunidade

### Issues com maior atenção

1. **[#3394](https://github.com/sipeed/picoclaw/issues/3394)** — Bug na integração QQ/OneBot
   - **Situação:** Aberta, stale
   - **Problema:** API do robô QQ foi atualizada mas o canal OneBot não reflete as mudanças
   - **Comentários:** 3 | **Reações:** 0
   - **Análise:** Indica necessidade de manutenção ativa no canal QQ/OneBot, especialmente para quem usa NapCat

2. **[#3392](https://github.com/sipeed/picoclaw/issues/3392)** — CLAassistant não detecta assinatura
   - **Situação:** Aberta, stale
   - **Comentários:** 3 | **Reações:** 0
   - **Análise:** Issue de processo/contribuição, afeta onboarding de novos contribuidores

3. **[#3395](https://github.com/sipeed/picoclaw/issues/3395)** — Feature request de configurabilidade de reactions
   - **Situação:** ✅ Fechada (implementada em #3396)
   - **Comentários:** 2
   - **Análise:** Demanda atendida — comunidade valorizou controle sobre comportamento automático

---

## 5. Bugs e Estabilidade

### Bugs Abertos

| Severidade | Issue | Descrição |
|---|---|---|
| **🔴 Alta** | [#3426](https://github.com/sipeed/picoclaw/issues/3426) | Telegram MarkdownV2 não escapa labels de links e texto de blockquote, causando fallback para plain-text |
| 🟡 Média | [#3394](https://github.com/sipeed/picoclaw/issues/3394) | Canal OneBot defasado com API QQ atualizada |
| 🟡 Média | [#3392](https://github.com/sipeed/picoclaw/issues/3392) | CLAassistant não detecta assinatura de CLA |

### Análise do Bug Crítico (#3426)

O bug reportado em 2026-10-12 afeta diretamente a renderização de mensagens no Telegram. Quando MarkdownV2 está habilitado:

1. Caracteres reservados em labels de links causam rejeição da API
2. Texto em blockquotes com caracteres especiais também falha
3. PicoClaw faz fallback para plain-text, **perdendo toda a formatação**

**Impacto:** Usuários com formatação avançada no Telegram podem ter experiência degradada. Recomendável priorizar.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Feature Closed (Addressed)

| Feature | PR | Status |
|---|---|---|
| Reações automáticas configuráveis no OneBot | [#3396](https://github.com/sipeed/picoclaw/pull/3396) | ✅ Implementada |

### Feature em Progress

| Feature | PR | Prioridade Indicada |
|---|---|---|
| Migrar para OpenAI Responses API | [#3381](https://github.com/sipeed/picoclaw/pull/3381) | Alta (refere-se a mudança de API oficial) |

### Sinais de Demanda

- **Suporte a múltiplos provedores robusto** — Correções recentes (#1509, #1397) indicam foco em compatibilidade cross-provider
- **Canais sociais diversos** — Feishu (#1676) e OneBot (#3396) em destaque, mostrando demanda por integração com plataformas asiáticas
- **Configurabilidade** — Logger configurável (#1500) e reactions toggle (#3396) mostram tendência de dar mais controle ao usuário

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Dor | Issue | Canal |
|---|---|---|
| Formatação perdida no Telegram | #3426 | Telegram |
| Falha TLS no Android Termux | #1397 (fix) | Android/Termux |
| Reações automáticas indesejadas | #3395 (fix) | OneBot/QQ |
| Tool calls rejeitados por provedores | #1509 (fix) | OpenAI-compatible |

### Cenários de Uso Identificados

- **Android Termux como servidor:** Usuários rodam PicoClaw em smartphones Android via Termux — exigindo caminhos de certificados específicos
- **QQ via NapCat:** Configuração comum no ecossistema OneBot, com sensibilidade a mudanças de API
- **Grupos multi-thread:** Usuários de Feishu precisam de isolamento de contexto entre threads

### Satisfação Geral

A atividade de PRs sugere **saúde positiva** — bugs reais estão sendo corrigidos e features solicitadas estão sendo implementadas. A issue #3395 foi aberta e fechada com solução em menos de 2 semanas, demonstrando responsividade.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta/Stale

| Issue | Criação | Dias Inativa | Prioridade |
|---|---|---|---|
| [#3392](https://github.com/sipeed/picoclaw/issues/3392) — CLA não detectado | 2026-09-25 | ~17 dias | Baixa |
| [#3394](https://github.com/sipeed/picoclaw/issues/3394) — API QQ desatualizada | 2026-09-26 | ~16 dias | Alta |

### Recomendação

**#3394** deve ser priorizada — afeta funcionalidade do canal OneBot/QQ, um dos mais utilizados em ambientes de língua chinesa. A equipe deveria avaliar se há necessidade de atualizar dependências ou adaptadores do protocolo NapCat.

**#3392** pode ser direcionada à documentação ou automação de setup de CLA para novos contribuidores.

---

## Métricas Resumidas (2026-10-12)

| Métrica | Valor |
|---|---|
| Issues ativas abertas | 3 |
| Issues fechadas | 1 |
| PRs abertos | 1 |
| PRs fechados/merged | 6 |
| Releases | 0 |
| Issues stale (>2 semanas) | 4 |
| Score de atividade | 🟢 Moderada-Alta |

---

*Relatório gerado automaticamente com base em dados do GitHub. Para atualizações em tempo real, consulte [sipeed/picoclaw](https://github.com/sipeed/picoclaw).*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-10-13

---

## 1. Panorama do Dia

O projeto IronClaw apresenta **atividade mínima** em 13 de outubro de 2026. Foi registrada apenas **1 issue aberta** nas últimas 24h, enquanto nenhuma pull request foi mergeada e nenhuma nova release foi publicada. O repositório permanece em estado de manutenção leve, sem alterações significativas no codebase. A equipe parece focada em monitoramento contínuo de taxonomy de falhas, conforme indica a issue aberta.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

O projeto não registrou выпуск de novas versões. Não há informações sobre versões pendentes de lançamento ou roadmaps de deployment iminente.

---

## 3. Progresso do Projeto

**Nenhuma PR merged ou fechada nas últimas 24h.**

O codebase permaneceu estático em termos de contribuições de código. A ausência de atividade de PRs indica um período de baixo engajamento de contribuidores ou завершение de um ciclo de desenvolvimento.

---

## 4. Temas Quentes da Comunidade

### Issue em Destaque

**#8135 — Daily ironclaw failure taxonomy — 2026-10-12** 🔥
- **Autor:** pranavraja99
- **Status:** OPEN
- **Criado/Atualizado:** 2026-10-12
- **Comentários/Reações:** 0 / 0
- **Link:** [nearai/ironclaw#8135](https://github.com/nearai/ironclaw/issues/8135)

**Resumo:** A issue documenta a análise diária de taxonomy de falhas do IronClaw. Entre os dados destacados:
- Suite **officeqa** analisada com 52 tarefas non-pass
- Identificação: todos os 52 casos são **erros genuínos de qualidade do modelo** (DeepSeek-V4-Flash não especificado completamente)
- Nenhuma exception ou bug de infraestrutura identificado

**Análise:** A comunidade está focada em **avaliação sistemática de desempenho de modelos**. A taxonomy de falhas sugere esforço contínuo de benchmark e melhoria de qualidade.

---

## 5. Bugs e Estabilidade

**Nenhum bug ou regressão reportada nas últimas 24h.**

O monitoramento de taxonomy indica **estabilidade do sistema** — não há reports de crashes, errors de infraestrutura ou regressões. Os 52 "non-pass" do officeqa são classificados como limitações de qualidade do modelo, não defeitos de código.

---

## 6. Pedidos de Features e Sinais de Roadmap

**Nenhuma nova feature request registrada nas últimas 24h.**

Não há indicadores de novas funcionalidades planejadas no curto prazo. O foco permanece em **avaliação e benchmarking** de agentes IA.

---

## 7. Resumo de Feedback dos Usuários

**Ausência de feedback direto nas últimas 24h.**

A única interação registrada (issue #8135) reflete interesse da equipe em **otimização de taxonomy de erros** para identificar padrões de falha entre modelos de IA. Este é um indicador de maturidade do projeto — shift de "resolver bugs" para "refinar qualidade de avaliação".

---

## 8. Backlog que Merece Atenção

| Issue | Título | Idade | Status | Observação |
|-------|--------|-------|--------|------------|
| #8135 | Daily ironclaw failure taxonomy — 2026-10-12 | 1 dia | OPEN | Única issue ativa; sem comentários — merece atenção da equipe |

**Nota:** A issue #8135 está sem interação há 24h. Recomenda-se que a equipe avalie a taxonomy apresentada e forneça feedback ou direcionamento ao autor.

---

## Indicadores de Saúde do Projeto

| Métrica | Status | Observação |
|---------|--------|------------|
| Atividade (issues/PRs) | 🟡 Baixa | Apenas 1 issue em 24h |
| Bugs abertos | 🟢 Estável | Nenhum reportado |
| Releases | 🔴 Inativa | Sem releases recentes |
| Engajamento | 🟡 Baixo | 0 comentários em issue ativa |
| Estabilidade | 🟢 Saudável | Sem regressões |

---

*Relatório gerado automaticamente com base em dados do GitHub de [nearai/ironclaw](https://github.com/nearai/ironclaw).*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório de Projeto — CoPaw (QwenPaw)
## Período: 13 de outubro de 2026

---

## 1. Panorama do Dia

O projeto CoPaw apresenta **alta atividade comunitária** em 13 de outubro de 2026, com 36 eventos totalizados nas últimas 24 horas (16 issues, 20 PRs). A proporção de PRs abertos (18) supera significativamente os merged/fechados (2), indicando um pico de contribuição, possivelmente impulsionado por PRs de novos contribuidores como JuampiHernandez (Firecrawl) e Li-john1021 (Tavily API key). Não há lançamentos registrados hoje. A saúde geral é positiva, com correções críticas em andamento — especialmente no ecossistema Windows e em workflows de aprovação de ferramentas — mas issues de estabilidade recorrentes (como ProviderManager.active_model não carregando) sugerem dívida técnica a ser priorizada.

---

## 2. Lançamentos

**Nenhum release detectado nas últimas 24 horas.**

O último release estável documentado nos dados é a versão **V2.2.2.beta4**, que aparece em múltiplos issues de regressão (ex.: #8073, #8105). A ausência de releases formais hoje pode indicar que a equipe está focada em estabilizar a beta antes de um release final.

> ⚠️ **Recomendação**: Monitorar issues abertos relacionados à v2.2.2-beta4 para avaliar se um hotfix é necessário antes de um release de produção.

---

## 3. Progresso do Projeto

### PRs Merged/Closed Hoje

| # | Título | Impacto |
|---|--------|---------|
| [#8188](https://github.com/agentscope-ai/QwenPaw/pull/8188) | fix(approval): preserve decisions and handle timeout races | **Crítico** — Corrige race condition onde aprovações eram perdidas, fazendo ferramentas sempre serem rejeitadas |
| [#4707](https://github.com/agentscope-ai/QwenPaw/pull/4707) | fix(tools): handle ToolResponse text blocks robustly | **Estabilidade** — Corrige crash ao acessar ToolResponse como atributos vs dicts |

### PRs Abertos de Alto Impacto (em revisão)

| # | Título | Tamanho | Relevância |
|---|--------|---------|------------|
| [#7565](https://github.com/agentscope-ai/QwenPaw/pull/7565) | feat(plugins): add clean unload and rollback-safe hot reload | XXXL | Altíssima — Refatoração do sistema de plugins com ledger de teardown |
| [#8187](https://github.com/agentscope-ai/QwenPaw/pull/8187) | feat(channels): extract channels into plugins with subprocess isolation | XXXL | Altíssima — Isolamento de canais em subprocessos para segurança |
| [#8137](https://github.com/agentscope-ai/QwenPaw/pull/8137) | feat(console): add "reduced effects" tier | L | Usabilidade — Tier de efeitos gráficos leves para GPUs integradas |
| [#8156](https://github.com/agentscope-ai/QwenPaw/pull/8156) | feat(api): add coding-cli management endpoints | L | Operações — Gestão de CLIs de código em containers worker |
| [#8204](https://github.com/agentscope-ai/QwenPaw/pull/8204) | feat(tools): optional Tavily API key via credential store | M | **Primeiro PR do contribuidor** Li-john1021 — libera quota paga do Tavily |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários)

| # | Título | Comentários | Tipo | Tendência |
|---|--------|-------------|------|-----------|
| [#7311](https://github.com/agentscope-ai/QwenPaw/issues/7311) | Bug v2.1.1b2 missing _qwenpaw_remote_backend — all tools broken | 5 | **Bug (CLOSED)** | Resolvido, mas indica problema de empacotamento recorrente |
| [#8174](https://github.com/agentscope-ai/QwenPaw/issues/8174) | web_search tavily provider sem configuração de API key | 4 | **Feature Request** | Alta demanda — já tem PR #8204 em andamento |
| [#7016](https://github.com/agentscope-ai/QwenPaw/issues/7016) | Ferramenta 调用404 (Tool call 404) | 4 | Bug | Persistente desde ago/2026 — pode indicar problema de estado de sessão |
| [#8073](https://github.com/agentscope-ai/QwenPaw/issues/8073) | V2.2.2.beta4 Unable to access conversation page | 3 | **Bug (CLOSED)** | Relacionado a acessos LAN — possível regressão de rede |
| [#8194](https://github.com/agentscope-ai/QwenPaw/issues/8194) | qwenpaw-creator startup aborts on Windows (stale PID) | 2 | Bug | Já tem fix #8196 aberto |

### Análise de Demandas

**Web Search**: A comunidade demonstra forte interesse em expandir provedores de busca (#8199 Firecrawl) e permitir chaves API customizadas (#8174). O PR #8204 (Tavily) e #8200 (Firecrawl) estão alinhados com essa demanda, sugerindo uma tendência de **liberalização do ecossistema de busca**.

**Console/UI**: Questões de performance (#8135 backdrop-filter), navegação (#8186 scrolling) e configuração (#8197 basename) indicam que a experiência web console está em evolução ativa. O PR #8137 propõe um tier "reduced effects" que pode ser particularmente relevante para implantações em hardware limitado.

**Estabilidade Windows**: Os issues #8194 e #8185 (log rotation) highlight uma lacuna detesting na plataforma Windows que merece atenção contínua.

---

## 5. Bugs e Estabilidade

### Por Severidade

#### 🔴 Críticos

| # | Título | Detalhes | Status |
|---|--------|----------|--------|
| [#7016](https://github.com/agentscope-ai/QwenPaw/issues/7016) | Tool call 404 | Sessões de streaming falham com 404 em `/api/tool-calls/{id}/offload` — problema desde ago/2026 | **Aberto há 60+ dias** |
| [#8173](https://github.com/agentscope-ai/QwenPaw/issues/8173) | Codex backend: conexão quebra após restart | Mensagens ficam em fila sem processamento; zombie "running" blocks recovery | Aberto |

#### 🟠 Altos

| # | Título | Detalhes |
|---|--------|----------|
| [#8175](https://github.com/agentscope-ai/QwenPaw/issues/8175) | ProviderManager.active_model não carrega + silenciamento de exceções | Service cron (dream) falha todas as noites; problema de inicialização silenciosa |
| [#8184](https://github.com/agentscope-ai/QwenPaw/issues/8184) | Doom-loop gate mata polling legítimo | Detecção de loop não distingue "agent travado" de "agent esperando background task" |

#### 🟡 Médios

| # | Título | Detalhes |
|---|--------|----------|
| [#8194](https://github.com/agentscope-ai/QwenPaw/issues/8194) | Startup hook aborta com stale PID no Windows | Já com fix #8196 |
| [#8202](https://github.com/agentscope-ai/QwenPaw/issues/8202) | Mensagem invisível em outros dispositivos até fim do turn | Problema de sincronização multi-device |
| [#8185](https://github.com/agentscope-ai/QwenPaw/issues/8185) | desktop.log nunca rotaciona no Windows | Sidecar tee handle quebra SafeRotatingFileHandler |
| [#8186](https://github.com/agentscope-ai/QwenPaw/issues/8186) | Console scroll snaps back após jump |anchor da conversa sobrescreve scroll manual por ~1.6s |

### Bugs Recorrentes Observados

- **Empacotamento**: Issue #7311 (módulo faltante `_qwenpaw_remote_backend`) foi fechado mas indica problema potencial no build/instalação
- **Aprovações**: O bug de race condition em aprovações (#8105) foi corrigido em #8188, mas evidencia fragilidade no workflow de aprovação

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| # | Título | Categoria | Sinal Estratégico |
|---|--------|-----------|-------------------|
| [#8174](https://github.com/agentscope-ai/QwenPaw/issues/8174) | Tavily API key configurável | **web_search** | Demanda de flexibilidade de provedores |
| [#8199](https://github.com/agentscope-ai/QwenPaw/issues/8199) | Firecrawl como provider de busca | **web_search** | Ecossistema de busca em expansão |
| [#8189](https://github.com/agentscope-ai/QwenPaw/issues/8189) | Integração ESP32 (similar Meta Muse) | **hardware** | Expansão para IoT/robótica — sinal de diversificação |
| [#8195](https://github.com/agentscope-ai/QwenPaw/issues/8195) | Delete/remove no model pool | **UI/Model Management** | Lacuna de CRUD em gerenciamento de modelos |
| [#7565](https://github.com/agentscope-ai/QwenPaw/pull/7565) | Plugin clean unload + hot reload | **architecture** | Maturidade de plugin system |
| [#8187](https://github.com/agentscope-ai/QwenPaw/pull/8187) | Channels como plugins isolados | **architecture** | Isolamento de segurança por subprocesso |

### PRs em Andamento que Indicam Direção

1. **Expansão de Providers**: Tavily (#8204), Firecrawl (#8200), Atlas Cloud (#6499) — diversificação de modelos e buscas
2. **Melhoria de UI**: "Reduced effects" tier (#8137), configurable basename (#8197), echo de mensagens (#8203)
3. **Resiliência**: Hot reload de plugins (#7565), isolamento de channels (#8187)

> 📌 **Sinais de Roadmap**: O projeto está investindo em (1) ecossistema de providers aberto, (2) resiliência de plugins e (3) experiência multiplataforma (Windows, hardware externo).

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Dor | Frequência | Issue(s) |
|-----|------------|----------|
| **Ferramentas quebradas no Windows** | Alta | #8194, #8185, #7311 |
| **Aprovações não funcionam** | Alta | #8105 (agora fixado em #8188) |
| **Sem visibilidade multi-device** | Média | #8202 |
| **GPU sobrecarregada por efeitos** | Média | #8135 |
| **Modelo não pode ser deletado** | Baixa | #8195 |
| **Polling legítimo bloqueado** | Baixa | #8184 |

### Cenários de Uso Identificados

1. **Multi-device collaboration**: Usuários esperam ver mensagens em tempo real entre web console e mobile app (#8202)
2. **Paid API quotas**: Usuários com Tavily pago não conseguem usar sua quota (#8174) — resolvido via #8204
3. **LAN deployments**: Configuração onde múltiplos dispositivos acessam serviços locais causa regressões (#8073)
4. **High-performance consoles**: Usuários com GPU integrada suffer com efeitos visuais (#8135) — demanda por tier "reduced effects"

### Satisfação Geral

**Positiva**: Correcções rápidas de bugs críticos (aprovação em #8188) e abertura para novos provedores indicam responsividade. A presença de PRs de primeiros contribuidores (#8204, #8200, #6499) sugere um ecossistema acolhedor.

**Preocupações**: Issues como #7016 (aberto há 60+ dias) e #8175 (falhas noturnas silenciosas) podem erodir confiança se não forem endereçados.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta / Longa Duração

| # | Título | Idade | Prioridade | Recomendação |
|---|--------|-------|------------|--------------|
| [#7016](https://github.com/agentscope-ai/QwenPaw/issues/7016) | Tool call 404 | **60+ dias** | 🔴 Alta | Investigar estado de sessão — parece problema de design |
| [#8175](https://github.com/agentscope-ai/QwenPaw/issues/8175) | ProviderManager.active_model não carrega | 2 dias | 🟠 Alta | Problema de inicialização silenciosa — pode afetar Muitos |
| [#8173](https://github.com/agentscope-ai/QwenPaw/issues/8173) | Codex backend desconecta após restart | 2 dias | 🟠 Alta | Zombies blocks recovery — risco de resource leak |
| [#7311](https://github.com/agentscope-ai/QwenPaw/issues/7311) | Módulo remoto faltante no empacotamento | ~50 dias | 🟡 Média | Closed mas pode recorrente — auditar pipeline de build |
| [#7565](https://github.com/agentscope-ai/QwenPaw/pull/7565) | Plugin hot reload | ~40 dias (PR) | 🟡 Média | PR grande precisa de review — arquitetura crítica |

### PRs Entedidos em Review

| # | Título | Idade | Tamanho | Bottleneck |
|---|--------|-------|---------|------------|
| [#7565](https://github.com/agentscope-ai/QwenPaw/pull/7565) | Plugin unload/rollback | ~40 dias | XXXL | Needs detailed review |
| [#8187](https://github.com/agentscope-ai/QwenPaw/pull/8187) | Channel isolation | 1 dia | XXXL | Sem descrição ainda |
| [#6499](https://github.com/agentscope-ai/QwenPaw/pull/6499) | Atlas Cloud provider | ~80 dias

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório de Projeto — ZeroClaw
## Data: 2026-10-13

---

## 1. Panorama do Dia

ZeroClaw mantém um ritmo de desenvolvimento intenso com **32 issues e 50 PRs atualizados nas últimas 24 horas**, demonstrando alta atividade comunitária. **Nenhuma release foi publicada** hoje, porém o pipeline de PRs mostra múltiplos merges relevantes — especialmente correções de segurança e estabilidade. O estado geral reflete uma codebase em fase madura de preparação para as versões v0.8.6 e v0.9.0, com foco em curingas de configuração, plugins eparação de plugins. A taxa de resolução de bugs é positiva: 4 issues fechadas e 10 PRs merged/fechados, sinalizando progresso contínuo na estabilização do runtime e gateway.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24 horas.**

O projeto está em período ativo de preparação para as里程碑 **v0.8.6** e **v0.9.0**, conforme indicado por trackers dedicados:

- [Issue #7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) — Runtime and gateway delivery tracker para v0.8.6/v0.9.0
- [Issue #11262](https://github.com/zeroclaw-labs/zeroclaw/pull/11262) — Plugin update com verificação (PR em curso, tagged v0.8.6)
- [Issue #11309](https://github.com/zeroclaw-labs/zeroclaw/pull/11309) — Quickstart com instalação de plugins (PR em curso, tagged v0.8.6)

---

## 3. Progresso do Projeto

### PRs Merged/Fechados Hoje

| # | Título | Impacto |
|---|--------|---------|
| [#11635](https://github.com/zeroclaw-labs/zeroclaw/pull/11635) | test(runtime): reuse immutable Docker executable fixtures | Testes — reduz criação redundante de executáveis |
| [#11684](https://github.com/zeroclaw-labs/zeroclaw/pull/11684) | docs(runtime): propose roster-bound pairing token placement exception | Documentação — propõe exceção para tokens de pareamento |
| [#11450](https://github.com/zeroclaw-labs/zeroclaw/pull/11450) | fix(runtime): recover delegate settlements after worker exit | **Crítico** — recupera settlements abandonados por workers mortos |
| [#11188](https://github.com/zeroclaw-labs/zeroclaw/pull/11188) | fix(parser): preserve browser and search tool semantics | **Segurança** — impede que browser/search sejam reescritos como shell |
| [#11695](https://github.com/zeroclaw-labs/zeroclaw/pull/11695) | fix(zerocode): count dashboard's By Period costs in UTC | UX — corrige inconsistência de fusos no dashboard de custos |

### PRs em Destaque em Curso (size:XL, alta complexidade)

- [PR #11262](https://github.com/zeroclaw-labs/zeroclaw/pull/11262) — `feat(cli): add zeroclaw plugin update with verified replacement` — Stackado em #11261 e #11236
- [PR #11261](https://github.com/zeroclaw-labs/zeroclaw/pull/11261) — `feat(plugins): replace an installed package through staged admission`
- [PR #11236](https://github.com/zeroclaw-labs/zeroclaw/pull/11236) — `fix(plugins): recover incomplete installs through plugin remove`
- [PR #11301](https://github.com/zeroclaw-labs/zeroclaw/pull/11301) — `fix(agents): share durable committed-rename recovery across CLI, gateway, and RPC` (P1)
- [PR #11309](https://github.com/zeroclaw-labs/zeroclaw/pull/11309) — `feat(quickstart): install and activate tool plugins from zeroclaw quickstart`

### PRs de Configuração (breaking changes em revisão)

- [PR #11394](https://github.com/zeroclaw-labs/zeroclaw/pull/11394) — Refuse Windows broad roots in filesystem channel
- [PR #11405](https://github.com/zeroclaw-labs/zeroclaw/pull/11405) — Refuse Linux broad roots in filesystem channel
- [PR #11406](https://github.com/zeroclaw-labs/zeroclaw/pull/11406) — Refuse macOS broad roots in filesystem channel
- [PR #11413](https://github.com/zeroclaw-labs/zeroclaw/pull/11413) — Refuse relative paths in the filesystem channel

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários)

| # | Título | Comentários | Tema Central |
|---|--------|-------------|--------------|
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | [Tracker]: Maintainer decision queue for RFCs and design issues | 15 | **Governança** — fila de decisões pendentes de maintainers |
| [#8891](https://github.com/zeroclaw-labs/zeroclaw/issues/8891) | [Tracker]: Persistent memory — wire curation, relevance, operability planes | 11 | **Memory** — coordenação de rollout de memória persistente cross-session |
| [#11254](https://github.com/zeroclaw-labs/zeroclaw/issues/11254) | RFC: A2A protocol crate (zeroclaw-a2a) | 9 | **Arquitetura** — crate dedicado para protocolo A2A |
| [#11235](https://github.com/zeroclaw-labs/zeroclaw/issues/11235) | RFC: Knowledge corpus — RAG for the agent | 6 | **Capacidades** — busca documental via RAG |
| [#10025](https://github.com/zeroclaw-labs/zeroclaw/issues/10025) | RFC: zeroclaw swarm — ephemeral agent swarms with TUI | 4 | **Roadmap** — swarms de agentes efêmeros |

### Análise dos Temas

**Governança e RFCs (#8692):** A comunidade demonstra maturidade com 15 comentários em um tracker de decisões de maintainers, indicando processo transparente de design.

**Memória Persistente (#8891):** Tracker ativo com 4 issues e 3 PRs追踪 — revela que a funcionalidade cross-session está próxima de paridade com peer agents.

**A2A Protocol (#11254):** RFC accepted com risco high — demonstra interoperabilidade futura com outros agentes.

**RAG (#11235):** Demanda por capacidade de buscar em documentação do operador, sugerindo uso corporativo crescente.

**Swarm (#10025):** RFC para orquestrar múltiplos agentes efêmeros com TUI estilo crush — indica ambição de escalabilidade multi-agente.

---

## 5. Bugs e Estabilidade

### Por Severidade

#### S1 — Workflow Bloqueado (1)
| # | Título | Status |
|---|--------|--------|
| [#11648](https://github.com/zeroclaw-labs/zeroclaw/issues/11648) | Web dashboard pairing input still limited to 6 digits after PairingCodePolicy default became 32 alphanumeric | OPEN — Usuário não consegue parear via web dashboard |

#### S2 — Degraded Behavior (5)
| # | Título | Status |
|---|--------|--------|
| [#11420](https://github.com/zeroclaw-labs/zeroclaw/issues/11420) | SQLite session backend rewrites created_at of every message on each turn | OPEN — Timestamps de mensagens são perdidos |
| [#11655](https://github.com/zeroclaw-labs/zeroclaw/issues/11655) | Core conflict supersede hides unrelated memories when recall has no vector scores | OPEN — Memórias irrelevantes são soft-hidden incorretamente |
| [#11623](https://github.com/zeroclaw-labs/zeroclaw/issues/11623) | ZeroCode drops pending ask_user prompt without replying | OPEN — Tool timeout de 600s sem feedback ao usuário |
| [#10331](https://github.com/zeroclaw-labs/zeroclaw/issues/10331) | recover terminal settlement intents abandoned by a dead worker | **CLOSED** — ✅ Recuperado via [#11450](https://github.com/zeroclaw-labs/zeroclaw/pull/11450) |
| [#11108](https://github.com/zeroclaw-labs/zeroclaw/issues/11108) | Preserve browser and search tool semantics instead of rewriting calls to shell | **CLOSED** — ✅ Corrigido via [#11188](https://github.com/zeroclaw-labs/zeroclaw/pull/11188) |

#### S3 — Minor Issues (3)
| # | Título | Status |
|---|--------|--------|
| [#11658](https://github.com/zeroclaw-labs/zeroclaw/issues/11658) | Web chat input doesn't regain focus after reply finishes | OPEN |
| [#11694](https://github.com/zeroclaw-labs/zeroclaw/issues/11694) | ZeroCode Cost tab mixes UTC and local-day totals | OPEN — **PR [#11695](https://github.com/zeroclaw-labs/zeroclaw/pull/11695) aberto** |
| [#11691](https://github.com/zeroclaw-labs/zeroclaw/issues/11691) | ZeroCode's paused-queue hint names ⌥P, which types π in macOS Terminal | OPEN |

### Bugs P1 Críticos em Progresso
| # | Título | Status |
|---|--------|--------|
| [#11606](https://github.com/zeroclaw-labs/zeroclaw/issues/11606) | model_routing_config upsert_agent rewrites entire config: fabricates risk/runtime profiles, drops fields | **IN PROGRESS** — Corrupção de config em v0.8.5 |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features (últimas 24h)

| # | Título | Domínio | Prioridade |
|---|--------|---------|------------|
| [#11679](https://github.com/zeroclaw-labs/zeroclaw/issues/11679) | zerocode obtains and stores its own bearer over mTLS plane | Segurança/Identity | P2 |
| [#11668](https://github.com/zeroclaw-labs/zeroclaw/issues/11668) | make gateway MAX_BODY_SIZE configurable | Gateway | — |
| [#11664](https://github.com/zeroclaw-labs/zeroclaw/issues/11664) | Level 5 Dark Factory Workflow | Arquitetura | — |
| [#11662](https://github.com/zeroclaw-labs/zeroclaw/issues/11662) | Separate Channels from Core | Arquitetura | — |
| [#11657](https://github.com/zeroclaw-labs/zeroclaw/issues/11657) | Configurable target category for turn consolidation | Memory | — |

### Features Accepted em Roadmap

| # | Título | Release Target | Tema |
|---|--------|----------------|------|
| [#11074](https://github.com/zeroclaw-labs/zeroclaw/issues/11074) | search_routes hint-based provider routing for web_search_tool | — | Multi-provider search |
| [#10573](https://github.com/zeroclaw-labs/zeroclaw/issues/10573) | Bind gateway pairing tokens to roster users for scoped remote principals | — | Identity/Access |
| [#9597](https://github.com/zeroclaw-labs/zeroclaw/issues/9597) | Make peer-agent turns durable and attributable | — | Agent loop |
| [#7692](https://github.com/zeroclaw-labs/zeroclaw/issues/7692) | feat(gateway): test router body limits and cron-run timeout wiring | — | Gateway tests |

### PR de Feature Novo Relevante
- [PR #11680](https://github.com/zeroclaw-labs/zeroclaw/pull/11680) — `feat(tools): add Firecrawl web search provider` — Provedor alternativo de busca web
- [PR #11692](https://github.com/zeroclaw-labs/zeroclaw/pull/11692) — `feat(runtime): surface cost warn_at_percent warnings in ZeroCode` — Melhora feedback de orçamento

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

**1. Problemas de Configuração e Persistência**
- SQLite reescreve `created_at` em cada turno, perdendo timestamps históricos ([#11420](https://github.com/zeroclaw-labs/zeroclaw/issues/11420))
- `model_routing_config upsert_agent` corrompe config.toml ao invés de fazer patch ([#11606](https://github.com/zeroclaw-labs/zeroclaw/issues/11606))
- Renomeação de agente pode deixar workspace/memory/cron em estado inconsistente ([#11301](https://github.com/zeroclaw-labs/zeroclaw/pull/11301))

**2. UX e Interface**
- Input de chat web não recupera foco após resposta ([#11658](https://github.com/zeroclaw-labs/zeroclaw/issues/11658))
- Aba de custos mistura UTC e horário local sem indicação ([#11694](https://github.com/zeroclaw-labs/zeroclaw/issues/11694))
- Atalhos de teclado com caracteres especiais (⌥P → π) causam confusão ([#11691](https://github.com/zeroclaw-labs/zeroclaw/issues/11691))

**3. Segurança**
- Dashboard web limita input de pareamento a 6 dígitos enquanto backend usa 32 caracteres ([#11648](https://github.com/zeroclaw-labs/zeroclaw/issues/11648))
- Browser/search tools são reescritos como shell, permitindo injeção ([#11108](https://github.com/zeroclaw-labs/zeroclaw/issues/11108)) — **✅ Corrigido**

**4. Experiência Multi-Agente**
- Setup multi-agente requer "config surgery" — sem orquestrador nativo ([#10025](https://github.com/zeroclaw-labs/zeroclaw/issues/10025))
- Guide de multi-agent está em local confuso na documentação ([#11088](https://github.com/zeroclaw-labs/zeroclaw/issues/11088))

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*