# Resumo diário do ecossistema de agentes de IA 2026-06-29

> Issues: 1 | PRs: 1 | Projetos cobertos: 7 | Gerado em: 2026-06-28 20:56 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal


# Relatório do Projeto NullClaw — 2026-06-29

---

## 1. Panorama do Dia

O projeto NullClaw demonstra **atividade moderada** em 29 de junho de 2026. O volume de atividade nas últimas 24h foi baixo: apenas **1 issue fechada** e **1 novo PR aberto**, sem releases. A comunidade permanece engajada em questões técnicas (como portabilidade para ESP32) e há um PR significativo em curso implementando um fluxo de aprovação estruturado para ferramentas do agente. O projeto mantém um pipeline de desenvolvimento ativo, embora o número absoluto de contribuições diárias seja reduzido — característico de projetos de nicho em agentes de IA.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto não publicou novas versões neste período. Sem notas de migração ou breaking changes a reportar.

---

## 3. Progresso do Projeto

### PRs merged/fechadas (últimas 24h)

| # | Título | Status | Autor | Impacto |
|---|--------|--------|-------|---------|
| — | Nenhuma PR merged/fechada | — | — | — |

### PR em destaque em revisão

- **[#969](https://github.com/nullclaw/nullclaw/pull/969)** — `feat(agent): structured approval_request / approval_response flow`
  - **Autor:** valonmulolli
  - **Criado:** 2026-06-28 | **Atualizado:** 2026-06-28
  - **Resumo:** Implementa um fluxo de aprovação em dois turnos para a ferramenta shell (e qualquer ferramenta que retorne `error.ApprovalRequired`). O fluxo funciona da seguinte forma: (1) a ferramenta levanta `error.ApprovalRequired` → o agente captura, armazena `PendingApproval` e emite evento `---approval---` via channel SSE; (2) o channel renderiza a UI de aprovação com os detalhes do tool call pendente para confirmação do usuário antes de prosseguir com a execução.
  - **Impacto:** Esta PR introduz um mecanismo de controle de segurança fundamental para execução de ferramentas por agentes, permitindo que operações potencialmente destrutivas (como shell commands) exigam aprovação explícita do usuário antes de serem executadas.

---

## 4. Temas Quentes da Comunidade

### Issues com mais atividade

| # | Título | Autor | Comentários | 👍 | Status |
|---|--------|-------|:-----------:|:--:|:------:|
| [#50](https://github.com/nullclaw/nullclaw/issues/50) | Can this run on an ESP32? | ngantrandev | 4 | 0 | CLOSED |

**Análise da Issue #50:**

A issue foi **fechada** em 2026-06-28, após discussão com 4 comentários. O autor pergunta sobre a viabilidade de executar o NullClaw em um microcontrolador ESP32. A pergunta reflete:

- **Demanda por portabilidade:** Usuários querem estender o NullClaw para dispositivos de borda (edge computing), IoT e cenários offline.
- **Exploração de limites de hardware:** A comunidade está testando os limites de onde o projeto pode operar.
- **Sinal de mercado:** O interesse em ESP32 sugere demanda por agentes de IA em ambientes com recursos limitados, energia constrained ou sem conectividade constante à nuvem.

---

## 5. Bugs e Estabilidade

**Nenhum bug reportado nas últimas 24h.**

Não foram registradas issues de bugs, crashes ou regressões no período. A ausência de reports é um indicador positivo de estabilidade no estado atual do codebase.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Feature em desenvolvimento

- **[#969](https://github.com/nullclaw/nullclaw/pull/969)** — Fluxo estruturado de aprovação para ferramentas do agente (em revisão).

### Sinais de roadmap detectados

| Sinal | Origem | Interpretação |
|-------|--------|---------------|
| Portabilidade para hardware embarcado | Issue #50 | Demanda por executar o agente em dispositivos com recursos limitados (ESP32) — possível direção para versões "lightweight" ou módulos de cross-compilation. |
| Controle de execução de ferramentas | PR #969 | Aprovação de ferramentas do tipo shell antes de execução — indica foco em **segurança e controle do agente**, possivelmente um bloco de construção para multi-agent scenarios. |

---

## 7. Resumo de Feedback dos Usuários

### Dores reais identificadas

| Dor | Evidência | Severidade |
|-----|-----------|:----------:|
| **Limitações de plataforma** | Issue #50 — "Can this run on an ESP32?" | Média-alta |
| **Necessidade de controle de segurança** | PR #969 — aprovação antes de execução de ferramentas shell | Alta |

### Cenários de uso em destaque

- **Uso embarcado/IoT:** Um segmento da comunidade busca executar NullClaw em microcontroladores ESP32, indicando interesse em cenários de automação física, robótica leve ou dispositivos de campo.
- **Execução segura de shell tools:** O PR de approval flow sugere que o projeto é usado em contextos onde a execução automática de comandos shell precisa ser mediada por um humano — compatível com cenários de DevOps assistido, automação de infraestrutura ou assistentes de desenvolvimento.

### Satisfação/Insatisfação

O volume de issues e a natureza das discussões sugerem uma comunidade **engajada mas técnica**, focada em resolver problemas de implementação e expandir o alcance do projeto. Não há sinais de insatisfação estrutural no período analisado.

---

## 8. Backlog que Merece Atenção

| # | Título | Autor | Criado | Atualizado | Dias sem resposta | Prioridade |
|---|--------|-------|--------|------------|:-----------------:|:----------:|
| [#50](https://github.com/nullclaw/nullclaw/issues/50) | Can this run on an ESP32? | ngantrandev | 2026-02-21 | 2026-06-28 | ~127 dias (closed) | — |

> **Nota:** A issue #50 foi criada em fevereiro de 2026 e permaneceu aberta por aproximadamente 127 dias antes de ser fechada. Este tempo de resolução longo pode indicar um backlog histórico que deve ser monitorado. Issues futuras de portabilidade podem se beneficiar de uma resposta inicial mais rápida para manter o engajamento da comunidade.

---

## Métricas de Resumo — 2026-06-29

| Indicador | Valor |
|-----------|------:|
| Issues abertas/ativas (24h) | 0 |
| Issues fechadas (24h) | 1 |
| PRs abertas (24h) | 1 |
| PRs merged/fechadas (24h) | 0 |
| Releases (24h) | 0 |
| Bugs reportados (24h) | 0 |
| Engagement total (comentários) | ~4 |

**Veredicto geral:** NullClaw apresenta um estado **estável e em desenvolvimento moderado**. A atenção deve se concentrar no review e eventual merge da PR #969 (approval flow), que representa uma evolução significativa na arquitetura de segurança do agente. A questão de portabilidade para hardware embarcado (Issue #50) sinaliza uma direção de expansão que pode merecer posicionamento explícito no roadmap do projeto.

---

## Comparação entre projetos do ecossistema


# Relatório Comparativo — Ecossistema de Agentes de IA Open Source

## 2026-06-29

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source demonstra **saúde robusta com polarização de maturidade**. Projetos consolidados como **Hermes Agent**, **IronClaw** e **ZeroClaw** operam em escala industrial (50+ PRs/24h), enquanto **NullClaw** e **PicoClaw** mantêm nicho técnico com desenvolvimento mais enxuto. A tendência dominante é a convergência para **segurança multi-camada** (approval flows, capability policies, MCP scoping) e **operação distribuída** (multi-agente, A2A delegation, cross-platform sessions). Interoperabilidade entre canais (Telegram, Matrix, WhatsApp, iMessage) emerge como requisito tabelado, enquanto debates sobre WASM como substrate para plugins indicam disputa arquitetural aberta.

---

## 2. Comparação de Atividade

| Projeto | Issues (abertas/fechadas 24h) | PRs (abertos/merged 24h) | Releases | Avaliação de Saúde |
|---------|:-----------------------------:|:------------------------:|:--------:|:------------------:|
| **Hermes Agent** | 50 atualizadas | 50 atualizadas | 0 | 🟢 Muito Ativo |
| **ZeroClaw** | 50 atualizadas | 50 atualizadas | 0 | 🟢 Muito Ativo |
| **IronClaw** | 9 processadas | 25/25 | **1** (v0.29.1) | 🟢 Muito Ativo |
| **NanoBot** | 7/7 | 6/10 | 0 | 🟢 Muito Ativo |
| **CoPaw** | 4 atualizadas | 4 abertas | 0 | 🟡 Moderado |
| **PicoClaw** | 1 fechada | 1/1 | 0 | 🟡 Moderado |
| **NullClaw** | 0/1 | 1/0 | 0 | 🟡 Baixo Volume |

**Observações:**
- Apenas **IronClaw** publicou release formal (v0.29.1) no período — todas as demais operam em regime de integração contínua.
- **ZeroClaw** e **Hermes Agent** lideram em volume absoluto, indicando equipes de desenvolvimento maiores ou alta adoção.
- **NullClaw** apresenta volume mínimo, característico de projetos de nicho ou em fase inicial.

---

## 3. Posicionamento do Projeto Principal

### Hermes Agent (NousResearch)

| Dimensão | Posição | Vantagem Competitiva |
|----------|---------|----------------------|
| **Multi-plataforma** | Liderança clara | Suporte nativo a CLI, Desktop (Windows/Linux), Telegram, iMessage, Slack, Mattermost, QQBot, Feishu |
| **Segurança** | Avançada | IDOR patching em curso (#52355), autenticação cross-provider |
| **Comunidade** | Maior volume | 50 issues/PRs por ciclo — 7× superior à média do ecossistema |
| **Provider support** | Mais diversificado | Mistral (16 👍), Claude via Bedrock, DeepSeek, GCP Vertex |

**Diferenciação técnica:** Hermes Agent prioriza **abstração de provider** e **continuidade cross-device** — o feature request #8366 (cross-platform session handoff) com 6 👍 indica demanda reprimida por unificação de experiência entre plataformas.

---

### IronClaw (nearai)

| Dimensão | Posição | Vantagem Competitiva |
|----------|---------|----------------------|
| **Multi-tenancy** | Liderança | Capability Policy com Owner/Admin/Member — produto maduro |
| **Crates modulares** | Arquitetura superior | ironclaw_common, ironclaw_skills, ironclaw_safety — composabilidade |
| **Release cadence** | Mais disciplinado | v0.29.1 com changelog formal e notas de migração |
| **Performance** | Foco declarado | PR #5149 resolve ~25.8k tokens/turn com 91 tools |

**Diferenciação técnica:** IronClaw é o único projeto com **release notes estruturadas** e **gestão de breaking changes** via versioning semântico de crates — sinal de maturidade organizacional que os demais projetos não demonstram.

---

### ZeroClaw (zeroclaw-labs)

| Dimensão | Posição | Vantagem Competitiva |
|----------|---------|----------------------|
| **Plugin system** | Experimental | WASM com wasmtime/wasip2 — substrate mais sofisticado que Extism |
| **Security CI** | Mais completo | Semgrep, CodeQL, cargo-audit, Trivy — cobertura abrangente |
| **SOP engine** | Arquitetura única | Standard Operating Procedures com step routing e contract substrate |
| **Multi-tenancy** | Enterprise-ready | Per-agent environment variables, runtime_context/runtime_secrets |

**Diferenciação técnica:** ZeroClaw investe em **programabilidade via SOP** e **security hardening CI** — posiciona-se para uso enterprise com requisitos de compliance (SOC2, air-gapped).

---

## 4. Focos Técnicos Compartilhados

### 4.1 Segurança de Execução de Ferramentas

| Projeto | Abordagem | Status |
|---------|-----------|--------|
| **NullClaw** | Approval flow em dois turnos com `error.ApprovalRequired` | PR #969 em revisão |
| **NanoBot** | Validação de cada segmento shell contra allowPatterns | PR #4562 em revisão |
| **IronClaw** | Capability Policy com approval por ferramenta | GA em v0.29.1 |
| **ZeroClaw** | MCP scoping per-agent, .ignore mechanism | Issues #7733 (P1), #8424 |

**Análise:** A execução de ferramentas shell/search sem mediação humana é identificada como **vulnerabilidade transversal**. Todos os projetos estão implementando controles em camadas (allowlisting, approval gates, capability policies).

---

### 4.2 Multi-Agente e Delegação

| Projeto | Feature | Estado |
|---------|---------|--------|
| **NanoBot** | A2A native delegation com depth guard | PR #4571 |
| **Hermes Agent** | delegate_task com per-turn spawn cap | PR #54420 |
| **CoPaw** | Multi-agent via Matrix — loop detection | Issue #5204 (resolvida) |
| **ZeroClaw** | SOP step routing com typed route resolution | PR #8430 |

**Análise:** O padrão **supervisor → specialized agents** emerge como consenso arquitetural. A diferenciação está na profundidade de controle (depth guard, spawn caps) e nos mecanismos de comunicação (A2A nativo vs Matrix bridge).

---

### 4.3 Operações Cross-Platform

| Projeto | Canais | Status |
|---------|--------|--------|
| **Hermes Agent** | 8+ (CLI, Desktop, Telegram, iMessage, Slack, Mattermost, QQBot, Feishu) | Mais maduro |
| **NanoBot** | 4+ (WebUI, WeChat, Telegram, Feishu) | Buggy (streaming) |
| **ZeroClaw** | WhatsApp, email, SMS, iMessage (Inkbox) | PR #8384 em curso |
| **NullClaw** | Channel SSE genérico | Arquitetura base |

**Sinais de mercado:** A fragmentação de canais exige **abstrações de transporte** (SSE, WebSocket, polling) e **adaptação de conteúdo** (rich messages Telegram, voice-first channels). A demanda por **text-to-speech output** (NanoBot #4010, 2 👍) indica que voice-native channels estão amadurecendo.

---

### 4.4 Otimização de Contexto e Custos

| Projeto | Problema | Solução |
|---------|----------|---------|
| **IronClaw** | ~25.8k tokens/turn com 91 tools | PR #5149 progressive disclosure |
| **NanoBot** | Prompt cache invalidation contínua (#4222) | PR #4568 partial fix |
| **ZeroClaw** | JSONL fsync no hot path | PR #8439 offload async |
| **NullClaw** | Portabilidade ESP32 | Discussão inicial |

**Análise:** O custo de inference é **preocupação universal**. A técnica de progressive disclosure de ferramentas (disclosure parcial baseada em necessidade) aparece em múltiplos projetos independentemente — possível convergência de melhores práticas.

---

## 5. Análise de Diferenciação

### 5.1 Por Público-Alvo

| Público | Projeto Ideal | Justificativa |
|---------|---------------|---------------|
| **Enterprise com compliance** | ZeroClaw | Security CI completo, air-gapped pricing, .ignore mechanism |
| **Multi-plataforma consumer** | Hermes Agent | Maior número de canais, session handoff em desenvolvimento |
| **Desenvolvedores Rust/embeddable** | IronClaw | Crates modulares, versioning semântico |
| **Multi-agente assíncrono** | NanoBot | A2A delegation nativa, subdirectory skills |
| **Nicho técnico embedded/edge** | NullClaw | Portabilidade ESP32 em discussão |
| **Integrações protocolares** | PicoClaw | Foco em WebSocket clients, turn completion signals |

---

### 5.2 Por Arquitetura Técnica

| Arquitetura | Projetos | Características |
|-------------|----------|-----------------|
| **Plugin WASM** | ZeroClaw | wasmtime/wasip2 — mais flexível, mais complexo |
| **Crates Rust modulares** | IronClaw | ironclaw_common, ironclaw_skills, ironclaw_safety |
| **Agentscope adapter** | CoPaw | Wrapper sobre framework externo |
| **Channel-based SSE** | NullClaw | Minimalismo,approval flow como feature central |
| **Skill registry** | NanoBot | Subdirectory skills, cached registry offline |
| **SOP engine** | ZeroClaw | Procedimentos como cidadãos de primeira classe |

---

### 5.3 Por Estágio de Maturidade

| Estágio | Projetos | Indicadores |
|---------|----------|-------------|
| **Produção estável** | Hermes Agent, IronClaw | Releases formais, security patches priorizados, múltiplos contributors |
| **Feature-mature, hardening** | NanoBot, ZeroClaw | Muitas features, foco em bugs e segurança |
| **Nicho técnico** | NullClaw, PicoClaw | Volume baixo, features específicas |
| **Migração ativa** | CoPaw | Agentscope 2.0, cobertura de testes em construção |

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração

| Tier | Projetos | PRs/24h | Tempo de resposta a bugs |
|------|----------|:--------:|:------------------------:|
| **Velocidade alta** | Hermes Agent, ZeroClaw, IronClaw | 25-50 | <48h para P2 |
| **Velocidade moderada** | NanoBot | 10 | ~semana |
| **Velocidade baixa** | CoPaw, NullClaw, PicoClaw | 1-4 | Variável |

---

### 6.2 Qualidade de Processos

| Projeto | Release Notes | Security Disclosures | Breaking Changes Docs | Stale Management |
|---------|:-------------:|:-------------------:|:---------------------:|:----------------:|
| **IronClaw** | ✅ Formal | ✅ CVE tracking | ✅ Notas de migração | ✅ Ativo |
| **ZeroClaw** | ⚠️ Tracker-based | ✅ Multiple CI jobs | ⚠️ In progress | ✅ Ativo |
| **Hermes Agent** | ❌ Ausente | ⚠️ Ad hoc | ⚠️ Inferred | ⚠️ Parcial |
| **NanoBot** | ❌ Ausente | ⚠️ Ad hoc | ❌ Não documentado | ⚠️ Parcial |
| **NullClaw** | ❌ Ausente | ❌ Não estruturado | ❌ Não documentado | ❌ Ausente |
| **PicoClaw** | ❌ Ausente | ❌ Não estruturado | ❌ Não documentado | ⚠️ Parcial |
| **CoPaw** | ❌ Ausente | ❌ Não estruturado | ❌ Não documentado | ⚠️ Parcial |

**IronClaw** é o único projeto com disciplina de release comparável a projetos open source maduros (semantic versioning, changelog, notas de migração).

---

### 6.3 Divisão de Contribuições

| Projeto | Concentração | Observação |
|---------|--------------|------------|
| **IronClaw** | ~60% core team | Issue #4108 com 33 dias sem resolução — dependência de contributors core |
| **ZeroClaw** | ~70% external | PRs de 15+ autores diferentes — comunidade ativa |
| **Hermes Agent** | ~80% external | 50 PRs de contributors variados |
| **NanoBot** | ~60% external | PRs de múltiplos autores |
| **CoPaw** | ~80% core (hanson-hex) | Sprint-driven, contribuidor principal |
| **NullClaw** | ~90% single author | Projeto de nicho com baixa diversificação |
| **PicoClaw** | ~70% external | Colaboração de 2-3 autores |

---

## 7. Sinais de Tendência

### 7.1 Tendências Fortes (Multiplos Projetos)

| Tendência | Evidência | Implicação |
|-----------|-----------|------------|
| **Segurança como feature primária** | Approval flows (NullClaw, IronClaw), shell validation (NanoBot), MCP scoping (ZeroClaw), IDOR patching (Hermes) | Mercados enterprise e devs experientes priorizam controle sobre conveniência |
| **Multi-agente nativo** | A2A (NanoBot), delegate_task (Hermes), SOP routing (ZeroClaw), Matrix bridging (CoPaw) | Padrão supervisor-specialist se consolida; loops e delegação infinita são problemas recorrentes |
| **Context optimization** | IronClaw (~25.8k tokens), NanoBot (prompt caching), ZeroClaw (async logging) | Custos de inference são barreira real; disclosure progressivo de ferramentas é best practice emergente |
| **Cross-platform continuity** | Hermes session handoff, NanoBot multi-channel, ZeroClaw Inkbox | Usuários esperam experiência unificada entre dispositivos — feature competitive critical |
| **Voice-native channels** | NanoBot TTS (#4010), Hermes iMessage, ZeroClaw iMessage/SMS | Voz como output é missing piece em canais que suportam nativamente |

---

### 7.2 Tendências Emergentes (Projetos Isolados)

| Tendência | Projeto | Evidência | Potencial |
|-----------|---------|-----------|-----------|
| **WASM como plugin substrate** | ZeroClaw | Debate Extism → wasmtime/wasip2 (#6943) | Se resolver trade-offs, pode se tornar standard |
| **Portabilidade embedded** | NullClaw | Issue #50 (ESP32) | Mercado IoT/edge — nicho mas crescente |
| **Capability Policy como produto** | IronClaw | Owner/Admin/Member com REST surface | RBAC para agentes pode se tornar commodity |
| **SOP como primitivo** | ZeroClaw | SOP step routing, contract substrate | Procedimentos versionados como citizen de primeira classe |
| **Two-stage retrieval** | CoPaw | Reranker dedicado para memória (#5588) | Memória de longo prazo requer arquitetura dedicada |

---

### 7.3 Oportunidades de Mercado Inferidas

| Oportunidade | Evidência | Projetos Impactados |
|--------------|-----------|---------------------|
| **Agentes para NAS/home lab** | Hermes #15290 (permission denied Docker) | Hermes, ZeroClaw |
| **Multi-tenant isolation** | ZeroClaw #7733 (MCP scoping silent no-op) | ZeroClaw, IronClaw |
| **Windows parity** | ZeroClaw #7462 (74 test failures), Hermes console flash | ZeroClaw, Hermes |
| **Enterprise observability** | Hermes #6642 (telemetry, 2 anos de backlog) | Hermes, IronClaw |
| **Offline/air-gapped deployment** | ZeroClaw #8380 (pricing catalog + cost RPC) | ZeroClaw, IronClaw |

---

## 8. Recomendações

### Para Desenvolvedores

1. **Adotar disclosure progressivo de ferramentas** — padrão emergente em IronClaw e NanoBot; reduz tokens e melhora latência.
2. **Implementar approval flows** — transversal ao ecossistema; NullClaw oferece referência arquitetural.
3. **Considerar SOP como primitivo** — ZeroClaw demonstra viabilidade; alto poder expressivo para automação.

### Para Decisores Técnicos

1. **ZeroClaw e IronClaw** lideram em postura de segurança e maturidade organizacional — melhores para enterprise.
2. **Hermes Agent** oferece maior cobertura de canais com menor formalismo — melhor para prototipagem.
3. **NanoBot** é a melhor referência para multi-agente com delegação nativa — estado intermediário entre protótipo e produção.

### Para Investidores/Produtos

1. **Voice output** é a missing piece com maior demanda latente — NanoBot #4010, Hermes iMessage.
2. **Cross-platform session continuity** bloqueia adoção em cenários mobile-first — Hermes #8366.
3. **Enterprise self-hosting** (NAS, Docker) é barreira de entrada — documentação de permissões e guias de deployment são diferenciadores.

---

*Relatório gerado em 2026-06-29 com base em dados agregados de 7 projetos do ecossistema open source de agentes de IA.*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-06-29

**Repositório:** [HKUDS/nanobot](https://github.com/HKUDS/nanobot)  
**Período:** Últimas 24 horas

---

## 1. Panorama do Dia

O projeto NanoBot apresenta **alta atividade** neste período, com 30 itens atualizados (7 issues + 23 PRs). O volume de PRs merged/fechados (10) demonstra bom ritmo de entrega, enquanto 6 das 7 issues permanecem abertas, sinalizando demandas pendentes. A atividade é concentrada em melhorias de estabilidade (WebUI, streaming, session handling), segurança (shell validation), e funcionalidades esperadas pela comunidade (voice output, A2A delegation, subdirectory skills). Não houve release hoje, e o trabalho se concentra em refinamentos incrementais sobre a base existente.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

O projeto segue em desenvolvimento ativo sem publicação de nova versão. Usuários em produção devem acompanhar o branch `main` para correções críticas.

---

## 3. Progresso do Projeto

O período trouxe **10 PRs merged/fechados**, cobrindo correções importantes e funcionalidades solicited:

| PR | Título | Tipo | Destaque |
|---|---|---|---|
| [#4504](https://github.com/HKUDS/nanobot/pull/4504) | Skills em subdiretórios | Feature | Permite organização hierárquica em `~/.nanobot/workspace/skills/` |
| [#4565](https://github.com/HKUDS/nanobot/pull/4565) | Limpar streaming travado após reconnect | Bugfix | Resolve #4500 (Bug 2 e 3) — streaming travado e stop button |
| [#4566](https://github.com/HKUDS/nanobot/pull/4566) | Reparar arquivos legacy-stem corrompidos | Bugfix | Recupera sessões que eram silenciosamente descartadas |
| [#4569](https://github.com/HKUDS/nanobot/pull/4569) | Hardening de tool-call contra respostas malformadas | Bugfix | Proteção contra crashes causados por relays upstream |
| [#4542](https://github.com/HKUDS/nanobot/pull/4542) | Entregar imagens MCP como artifacts | Feature | Evita serialização desnecessária de payloads base64 |
| [#4564](https://github.com/HKUDS/nanobot/pull/4564) | Guardar APIs públicas contra store indisponível | Bugfix | Robustez em cenários de cron/scheduler |
| [#2120](https://github.com/HKUDS/nanobot/pull/2120) | Documentação de contributors | Docs | Adiciona CONTRIBUTORS.md e links no README |
| [#4575](https://github.com/HKUDS/nanobot/pull/4575) | Adicionar guidelines do repositório | Docs | Melhora onboarding de contribuidores |

**PRs ainda abertos com potencial de merge iminente:**

- [#4570](https://github.com/HKUDS/nanobot/pull/4570) — Override de modelo por subagente no spawn (implementa #4231)
- [#4571](https://github.com/HKUDS/nanobot/pull/4571) — Delegação nativa A2A com depth guard (implementa #4179 parcialmente)
- [#4581](https://github.com/HKUDS/nanobot/pull/4581) — Redução de uso de contexto/tokens por turno
- [#4562](https://github.com/HKUDS/nanobot/pull/4562) — **[Segurança]** Validação de cada segmento shell contra allowPatterns

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento

| Issue | Título | Reações | Comentários |
|---|---|---|---|
| [#4010](https://github.com/HKUDS/nanobot/issues/4010) | Feature: text-to-speech / voice output | 👍 2 | 2 |
| [#4500](https://github.com/HKUDS/nanobot/issues/4500) | WebUI self-restart streaming bug | 0 | 2 (closed) |

**Análise — #4010 (Text-to-Speech):** Esta é a issue com maior engajamento do período. A proposta pede que NanoBot "feche o loop conversacional" adicionando saída de voz em canais que suportam nativamente (ex: Telegram, WhatsApp). Já existe entrada de voz; falta a saída. A discussão envolve trade-offs entre latência, qualidade e compatibilidade de plataforma. É uma demanda de usabilidade significativa para canais voice-native.

### PRs值得关注 (prestar atenção)

- [#4581](https://github.com/HKUDS/nanobot/pull/4581) — **Redução de contexto/token**: Impacto direto em custos e viabilidade com modelos de contexto limitado. Se aprovado, é uma melhoria de eficiência com alto valor prático.
- [#4568](https://github.com/HKUDS/nanobot/pull/4568) — **Correção de cache de prefixo**: Implementa metade de #4222, tentando manter o prefix cache "quente" evitando drift no replay window.

---

## 5. Bugs e Estabilidade

### Bugs reportados (ativas)

| Issue | Severidade | Canal | Descrição |
|---|---|---|---|
| [#4222](https://github.com/HKUDS/nanobot/issues/4222) | **Alta** | Core | max_messages truncation + microcompact invalidam prefix/prompt caching continuamente |
| [#3938](https://github.com/HKUDS/nanobot/issues/3938) | **Média** | Feishu/Telegram | Várias mensagens em sequência disparam múltiplas execuções em group chats |

### Bugs resolvidos (closed)

- **#4500 (Bug 2 e 3)** — Streaming travado após self-restart e stop button reportando "No active task" — corrigido em [#4565](https://github.com/HKUDS/nanobot/pull/4565)
- **#4500 (Bug 1)** — Não detalhado, mas presente na issue original

### Observação de segurança

O PR [#4562](https://github.com/HKUDS/nanobot/pull/4562) aborda uma vulnerabilidade no `exec.allowPatterns` onde comandos encadeados podiam passar na allowlist (ex: `echo allowlisted && touch /tmp/evil`). A correção valida cada segmento shell individualmente. Este é um **fix crítico de segurança** que deve ser priorizado no próximo release.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features solicitadas (últimas 24h)

| Issue/PR | Feature | Motivação | Complexidade Estimada |
|---|---|---|---|
| [#4010](https://github.com/HKUDS/nanobot/issues/4010) | Voice output / TTS | Fechar loop conversacional em canais voice-native | Média-Alta |
| [#4231](https://github.com/HKUDS/nanobot/issues/4231) | Parâmetro `model` no spawn | Overrides de modelo por subagente | Baixa (já implementada em #4570) |
| [#3938](https://github.com/HKUDS/nanobot/issues/3938) | Message buffering/debounce | Group chats com múltiplos envios rápidos | Média |
| [#4580](https://github.com/HKUDS/nanobot/issues/4580) | Suporte a conda/virtualenv | Subprocessos em ambientes virtuais | Média |
| [#4579](https://github.com/HKUDS/nanobot/issues/4579) | Timestamps na sidebar + export MD | UX do WebUI para power users | Baixa |

### Features em implementação

- **A2A Peer Delegation** ([#4571](https://github.com/HKUDS/nanobot/pull/4571)) — Permite equipes de agentes (Supervisor → Researcher → Writer) com depth guard contra delegação infinita. Representa evolução significativa na arquitetura de multiagente.
- **Per-subagent model override** ([#4570](https://github.com/HKUDS/nanobot/pull/4570)) — Resolve o pattern bloqueante de subagentes herdando obrigatoriamente o modelo do pai.

**Sinais de roadmap:** A direção atual aponta para:
1. **Multiagência robusta** (A2A, spawn com override)
2. **Otimização de custo** (redução de tokens via compactação inteligente)
3. **Estabilidade de streaming** (problemas recorrentes no WebUI e WeChat)
4. **Suporte a canais voice** (TTS como missing piece)

---

## 7. Resumo de Feedback dos Usuários

### Dores relatadas

1. **Voice-first channels incompletos** — NanoBot entende voz mas não fala de volta. Emoticons e feedback de "processing" são substitutes precários em canais que nativamente suportam áudio.

2. **Group chats não escalam** — Usuários em grupos compartilhados (Feishu, Telegram) enfrentam múltiplas execuções quando alguém envia mensagens em sequência. Não há debounce.

3. **Subagentes inflexíveis** — A impossibilidade de escolher modelo diferente para subagentes bloqueia patterns como "pesquisa com modelo grande, execução com modelo pequeno".

4. **Prompt caching ineficaz** — O problema de cache invalidado continuamente (#4222) aumenta custos e latência em sessões longas.

5. **Setup OAuth confuso** — Usuários que desejam usar apenas provedores OAuth não tinham caminho claro para definir o provider principal durante setup.

### Cenários de uso observados

- **Multi-plataforma:** Feishu, Telegram, WeChat, WebUI — cada canal tem quirks de streaming e rate limiting.
- **Multiagente:** Crescimento de demanda por padrões Supervisor-Researcher-Writer.
- **Ambientes corporativos:** Necessidade de virtualenvs (conda) para subprocessos em setups enterprise.

---

## 8. Backlog que Merece Atenção

### Issues sem activity recente (stale risk)

| Issue | Título | Criado | Último Update | Prioridade |
|---|---|---|---|---|
| [#3938](https://github.com/HKUDS/nanobot/issues/3938) | Message buffering para group chats | 2026-05-20 | 2026-06-28 | Média |
| [#4222](https://github.com/HKUDS/nanobot/issues/4222) | Prefix cache invalidation | 2026-06-06 | 2026-06-28 | **Alta** |

### PRs aguardando review

| PR | Título | Criado | Estado | Ação Recomendada |
|---|---|---|---|---|
| [#4562](https://github.com/HKUDS/nanobot/pull/4562) | Security fix — shell validation | 2026-06-26 | OPEN | **Review prioritário** |
| [#4581](https://github.com/HKUDS/nanobot/pull/4581) | Reducing context/token usage | 2026-06-28 | OPEN | Review + merge |
| [#4571](https://github.com/HKUDS/nanobot/pull/4571) | A2A native delegation | 2026-06-28 | OPEN | Review + merge |
| [#4570](https://github.com/HKUDS/nanobot/pull/4570) | Per-subagent model override | 2026-06-28 | OPEN | Review + merge |

### Recomendações

1. **Segurança primeiro:** O PR [#4562](https://github.com/HKUDS/nanobot/pull/4562) corrige vulnerabilidade de allowlist bypass — deve ser revisado e mergeado com urgência.

2. **Cache de prefixo:** A issue [#4222](https://github.com/HKUDS/nanobot/issues/4222) tem PR parcial ([#4568](https://github.com/HKUDS/nanobot/pull/4568)), mas ainda falta a correção do microcompact. Completar esta correção impacta diretamente custos de inference.

3. **Voice output:** A issue [#4010](https://github.com/HKUDS/nanobot/issues/4010) tem o maior engajamento da comunidade — recomenda-se avaliar viabilidade técnica e possivelmente designar um champion.

4. **Group chat debounce:** Issue [#3938](https://github.com/HKUDS/nanobot/issues/3938) está open há ~40 dias sem implementação — pode ser boa candidates para external contribution ou issue de "help wanted".

---

*Relatório gerado automaticamente com base em dados do GitHub de 2026-06-29. Todas as datas e links referem-se ao repositório [HKUDS/nanobot](https://github.com/HKUDS/nanobot).*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>


# Relatório de Projeto: Hermes Agent
## NousResearch/hermes-agent — 2026-06-29

---

## 1. Panorama do Dia

O projeto Hermes Agent demonstra **atividade intensa e multifacetada** em 28 de junho de 2026, com 50 issues e 50 PRs atualizados nas últimas 24 horas — indicando alta velocidade de desenvolvimento. A base de código apresenta um **fluxo saudável de contribuições**, com PRs进来了 cobrindo desde correções de segurança críticas até features solicitadas pela comunidade. A **ausência de releases formais** sugere que o time pode estar em período de estabilização pré-release ou em ciclo de integração contínua. Destaque para a **correção urgente do bug de flashing de console no Windows** (#54417) que foi merged rapidamente, evidenciando priorização de experiência do usuário desktop. A comunidade demonstra forte engajamento em issues de **portabilidade cross-platform** e **estabilidade de plugins**.

---

## 2. Lançamentos

### Nenhuma release registrada nas últimas 24h

O projeto não publicou novas versões, tags ou releases formais entre 2026-06-28 e 2026-06-29. Isso é consistente com o padrão de desenvolvimento ativo observado, onde mudanças são merged diretamente na branch principal antes de um版本 oficial.

> **Nota:** Releases anteriores devem ser consultadas em [NousResearch/hermes-agent/releases](https://github.com/NousResearch/hermes-agent/releases) para histórico de changelog e notas de migração.

---

## 3. Progresso do Projeto

### PRs Importantes Merged/Fechados

| PR | Título | Impacto | Link |
|---|---|---|---|
| **#54417** ✅ | fix(windows): cover remaining console-flash spawn legs | **Crítico/UX** — Elimina flashing de janelas de console no Desktop Windows durante spawns de subprocessos, cobrindo slash-worker, git bash fallbacks, browser probes e node version checks | [#54417](https://github.com/NousResearch/hermes-agent/pull/54417) |
| #54425 (open) | fix(aux): preserve provider identity for resolved endpoints | **Middleware** — Corrige roteamento MoA quando runtime resolution retorna provider + base_url | [#54425](https://github.com/NousResearch/hermes-agent/pull/54425) |
| #54431 (open) | fix(agent): unpin anthropic to 0.112.0 so Bedrock Claude works | **AWS/Bedrock** — Remove pin restritivo que bloqueava Claude em Bedrock com autenticação bearer-token | [#54431](https://github.com/NousResearch/hermes-agent/pull/54431) |
| #52355 (open) | security(gateway): scope /resume and /sessions to caller's origin | **Segurança P1** — Corrige vulnerabilidade IDOR que permitia enumeração e acesso cross-origin a sessões | [#52355](https://github.com/NousResearch/hermes-agent/pull/52355) |
| #54414 (open) | fix(gateway): align resume index with session list | **UX/Sessions** — Resolve off-by-one entre `/resume` e `/sessions` que causava seleção de sessão errada | [#54414](https://github.com/NousResearch/hermes-agent/pull/54414) |
| #54420 (open) | fix(delegation): add per-turn spawn cap | **Estabilidade** — Previne loops descontrolados de `delegate_task` que consumiam 44+ sessões sequenciais | [#54420](https://github.com/NousResearch/hermes-agent/pull/54420) |
| #54424 (open) | Security: Fix 36 vulnerabilities in dependencies | **Segurança** — Atualiza dependências vulneráveis; 99.67% pass rate em 33,895 testes | [#54424](https://github.com/NousResearch/hermes-agent/pull/54424) |

### Avanços por Área

| Componente | PRs | Status |
|---|---|---|
| **Windows Desktop** | 2+ | 🔴 Prioridade máxima — console flash sendo corrigido |
| **Gateway/Sessions** | 3+ | 🟡 Segurança e UX em revisão |
| **Delegation/Agent** | 2+ | 🟢 Estabilidade sendo reforçada |
| **Slack Integration** | 1 | 🟢 Feature de plan cards nativa |
| **Mattermost** | 1 | 🟢 Reply mode YAML bridge |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comments + reactions)

#### 🔥 #15290 — Docker Permission Denied on NAS (8 comentários, 6 👍)
**Problema crítico de deployment:** Usuários de NAS (UGreen DX4600 rodando UGOS Pro) enfrentam `Errno 13 Permission denied` ao tentar escrever em `/opt/data/config.yaml` mesmo com container Docker privilegiado.

> 📎 [Issue #15290](https://github.com/NousResearch/hermes-agent/issues/15290)

**Análise:** Este é um problema de **DX (Developer Experience)** que afeta usuários não-técnicos tentando self-host. A severidade P2 e alta recepção indicam necessidade de guia de permissões mais claro ou automação de ownership.

---

#### 🔥 #8366 — Cross-Platform Session Handoff (7 comentários, 6 👍)
**Feature request de alta demanda:** Usuários querem continuidade de sessão entre CLI, Telegram e iMessage — hoje cada plataforma tem sessão isolada.

> 📎 [Issue #8366](https://github.com/NousResearch/hermes-agent/issues/8366)

**Análise:** Este é o **feature request orgânico mais debatido**, indicando que a base de usuários está crescendo em múltiplas plataformas simultaneamente. A implementação impactaria diretamente retenção e satisfação.

---

#### 🔥 #49858 — iMessage Sidecar Silent Death Spiral (7 comentários)
**Bug de resiliência:** Quando o Photon sidecar (Node.js subprocess) crasha, o adapter entra em loop de reconnect sem respawn automático.

> 📎 [Issue #49858](https://github.com/NousResearch/hermes-agent/issues/49858)

**Análise:** Problema de **observabilidade e recovery automático**. A classificação com `sweeper:risk-message-delivery` indica impacto direto em confiabilidade de mensagens.

---

#### 🔥 #20859 — Mistral Provider Support (2 comentários, 16 👍)
**Maior número de reactions overall:** 16 usuários votaram a favor de adicionar Mistral como provider nativo.

> 📎 [Issue #20859](https://github.com/NousResearch/hermes-agent/issues/20859)

**Análise:** Mistral tem base de usuários significativa. A integração é relativamente simples dado que voice models já existem. Este é um **sinal forte de roadmap**.

---

## 5. Bugs e Estabilidade

### Por Severidade (P0-P1 Críticos em destaque)

| # | Severidade | Título | Componente | Link |
|---|---|---|---|---|
| **#52355** | 🔴 **P1 + Security** | IDOR em /resume e /sessions permite cross-origin session hijacking | Gateway | [#52355](https://github.com/NousResearch/hermes-agent/pull/52355) |
| **#54220** | 🔴 **P0** | Windows Desktop: console windows flash em subprocess spawns | Desktop/Windows | [#54220](https://github.com/NousResearch/hermes-agent/issues/54220) |
| #51384 | 🟠 P2 | SSH backend autentica com chave errada quando ssh-agent oferece múltiplas identidades | Terminal/SSH | [#51384](https://github.com/NousResearch/hermes-agent/issues/51384) |
| #15290 | 🟠 P2 | Docker permission denied em NAS durante setup | Docker/Config | [#15290](https://github.com/NousResearch/hermes-agent/issues/15290) |
| #32678 | 🟠 P2 | GCP Vertex AI connection falha com 404 usando drivers 'gcp' e 'rest' | Provider/GCP | [#32678](https://github.com/NousResearch/hermes-agent/issues/32678) |
| #31435 | 🟠 P2 | Plugin tools retornando dict causam 400 upstream (Z.ai error 1210) | Agent/Plugins | [#31435](https://github.com/NousResearch/hermes-agent/issues/31435) |
| #53773 | 🟠 P2 | TUI WebSocket disconnecta durante delegate_task longo (9 min timeout) | Gateway/TUI | [#53773](https://github.com/NousResearch/hermes-agent/issues/53773) |

### Padrões Identificados

1. **Windows Desktop**: 4+ bugs específicos de platform/windows, incluindo console flash, chinese text truncation e browser startup probes
2. **Plugin Architecture**: 3+ bugs relacionados a third-party plugins sendo silenciosamente desabilitados ou falhando
3. **Provider Integration**: Problemas recorrentes com autenticação e endpoints em DeepSeek, GCP Vertex, MiniMax VLM

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Merging/Open

| # | Feature | Component | P | Link |
|---|---|---|---|---|
| **#54230** | Mattermost live-thinking bubble + reply_mode YAML bridge | Gateway/Mattermost | P3 | [#54230](https://github.com/NousResearch/hermes-agent/pull/54230) |
| **#54426** | Expor provider-aware model options via API | API | P3 | [#54426](https://github.com/NousResearch/hermes-agent/pull/54426) |
| **#54429** | Render tool progress como native Slack plan/task cards | Slack | P3 | [#54429](https://github.com/NousResearch/hermes-agent/pull/54429) |
| **#54415** | Spanish i18n para Dashboard e Desktop | i18n | P3 | [#54415](https://github.com/NousResearch/hermes-agent/pull/54415) |
| **#54422** | Handle custom-provider model switch confirmations | Desktop/Billing | P2 | [#54422](https://github.com/NousResearch/hermes-agent/pull/54422) |

### Demandas Emergentes (issues abertas recentes)

| # | Feature Request | 👍 | Link |
|---|---|---|---|
| **#20859** | Suporte a Mistral como LLM provider | **16** | [#20859](https://github.com/NousResearch/hermes-agent/issues/20859) |
| **#8366** | Cross-Platform Session Handoff (CLI ↔ Telegram ↔ iMessage) | 6 | [#8366](https://github.com/NousResearch/hermes-agent/issues/8366) |
| **#6642** | Unified telemetry + analytics (latency, cost, completion rates) | 1 | [#6642](https://github.com/NousResearch/hermes-agent/issues/6642) |

### Sinais de Roadmap

1. **Multi-plataforma**: Crescimento orgânico de demanda por unificação de sessões entre CLI, Desktop, Telegram, iMessage, Slack, QQBot, Feishu
2. **Observabilidade**: Feature de telemetry (#6642) com 2 anos de backlog — indica necessidade de dashboard analítico
3. **Provider Expansion**: Mistral, Copilot GPT-5.x integration sendo refinado
4. **i18n**: Expansão de locales (espanhol em progresso, mais por vir)

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

#### Deployment Self-Hosted
- **NAS Users**: Dificuldade com permissões Docker em sistemas Linux-based NAS (UGOS Pro, Synology, QNAP)
- **Windows Users**: Experiência poluída por console windows piscando durante operações normais

> 📎 [Issue #15290](https://github.com/NousResearch/hermes-agent/issues/15290) | [Issue #54220](https://github.com/NousResearch/hermes-agent/issues/54220)

#### Produtividade Multi-Dispositivo
- Usuários precisam continuar conversas entre desktop e mobile (Telegram/iMessage)
- Perda de contexto ao trocar de plataforma é **frustração recorrente**

> 📎 [Issue #8366](https://github.com/NousResearch/hermes-agent/issues/8366)

#### Confiabilidade de Plugins
- Third-party web search plugins são silenciosamente desabilitados
- iMessage sidecar morre e não recupera automaticamente

> 📎 [Issue #31873](https://github.com/NousResearch/hermes-agent/issues/31873) | [Issue #49858](https://github.com/NousResearch/hermes-agent/issues/49858)

#### Billing/Cost Awareness
- Usuários precisam de confirmação ao trocar para providers custom/não-rastreáveis
- Falta visibilidade de custos por sessão ou provider

> 📎 [PR #54422](https://github.com/NousResearch/hermes-agent/pull/54422)

### Cenários de Uso Reportados

| Cenário | Contexto | Problema |
|---|---|---|
| **DevOps/NAS Home Lab** | Deploy em NAS doméstico via Docker | Permissão negada em config.yaml |
| **Commuter Workflow** | CLI no desktop → Telegram no ônibus | Sem continuidade de sessão |
| **Windows Power User** | Uso diário do Desktop App | Console windows piscando interfere |
| **Enterprise GCP** | Claude via Vertex AI em organização | 404 em endpoints autenticados |
| **iMessage Power User** | Comunicação via Photon/iMessage | Sidecar morre e não recupera |

### Indicadores de Satisfação

- **Alta receptividade** a features de cross-platform (6+ 👍 em 2 semanas)
- **Atendimento responsivo** a bugs de estabilidade (P2 addressed em <48h)
- **Comunidade ativa** com 50 issues/PRs atualizados em 24h

---

## 8. Backlog que Merece Atenção

### Issues Antigas Sem Resolution (por idade e impacto)

| # | Idade | Título | Severidade | Motivo de Atenção |
|---|---|---|---|---|
| **#6642** | ~2 anos | Unified telemetry + analytics | P3 | Feature request recorrente, alto valor para monitoramento |
| **#8366** | ~2.5 meses | Cross-Platform Session Handoff | P3 | Alta demanda comunitária, impacto em retenção |
| **#12938** | ~2 meses | Terminal crontab inconsistent output | P2 | Closed mas pode ter regressão, precisa verificação |
| **#23286** | ~1.5 meses | DeepSeek stream retry credential loss | P2 | Afeta reliability de provider popular |
| **#31435** | ~1 mês | Plugin tools returning dict → 400 | P2 | Breaking para ecossistema de plugins |
| **#31873** | ~1 mês | check_web_api_key() silencia third-party plugins | P3 | DX issue, comunidade de plugins afetada |

### PRs em Review há >3 dias (risco de stale)

| # | Título | Status | Urgência |
|---|---|---|---|
| #52355 | Security: scope /resume and /sessions to caller's origin | Open | 🔴 **P1 Security — precisa review urgente** |
| #54420 | fix(delegation): add per-turn spawn cap | Open | 🟠 P2 — prevenção de loops |
| #54424 | Security: Fix 36 vulnerabilities in deps | Open | 🟡 P3 — boa prática, mas extensa |

---

## Indicadores de Saúde do Projeto

| Métrica | Valor | Status |
|---|---|---|
| **Atividade (24h)** | 50 issues + 50 PRs | 🟢 Muito Ativo |
| **Segurança (P1)** | 1 IDOR vulnerability open | 🔴 Requer atenção imediata |
| **Windows Support** | 4+ bugs ativos | 🟠 Precisa melhoria |
| **Feature Pipeline** | 10+ PRs open, múltiplos de alto valor | 🟢 Sadio |
| **Comunidade** | Alto engajamento em issues cross-platform | 🟢 Positivo |
| **Release Activity** | Nenhuma release em 24h | ⚪ Neutro — integração contínua |

---

**Relatório gerado em:** 2026-06-29  
**Fonte:** [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)  
**Período de análise:** Dados atualizados em 2026-06-28/29

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>


# Relatório do Projeto PicoClaw — 2026-06-29

---

## 1. Panorama do dia

O projeto PicoClaw apresenta **atividade moderada** na data de hoje. Uma issue foi fechada e uma feature significativa (compressão de imagens) foi mergeada, demonstrando progresso contínuo no pipeline de visão. Há uma PR aberta introduzindo canais simplex, sinalizando expansão da arquitetura de comunicação. A ausência de releases formais indica que o projeto está em fase de desenvolvimento ativo sem versionamento iminente.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24 horas.**

O projeto não publicou novas versões neste período. O último ciclo de desenvolvimento aparenta estar focado em merge de features internas sem tag formal de release.

---

## 3. Progresso do projeto

### PR Mergeada

| PR | Título | Autor | Status |
|----|--------|-------|--------|
| [#2964](https://github.com/sipeed/picoclaw/pull/2964) | Feat/image input compression | afjcjsbx | ✅ Fechada/Merged |

**Análise:** A PR adiciona **compressão configurável de imagens** no pipeline de visão do PicoClaw. Anteriormente, imagens inbound eram limitadas apenas por `max_media_size` sem política de compressão multinível. Esta mudança otimiza payloads enviados ao modelo, potencialmente reduzindo latência e custos de API em cenários com imagens de alta resolução.

### PR Aberta em Revisão

| PR | Título | Autor | Status |
|----|--------|-------|--------|
| [#3193](https://github.com/sipeed/picoclaw/pull/3193) | Added simplex channel type | dim | 🔄 Em revisão |

**Análise:** Introduz um **novo tipo de canal simplex**, expandindo as opções de comunicação do protocolo. Representa uma evolução arquitetural na forma como canais são definidos e utilizados.

---

## 4. Temas quentes da comunidade

### Issue de maior engajamento

| Issue | Título | Comentários | Reactions |
|-------|--------|-------------|-----------|
| [#2984](https://github.com/sipeed/picoclaw/issues/2984) | Add explicit turn completion signal for Pico WebSocket clients | 4 | 👍 2 |

**Análise:** A issue fechada propõe um **sinal explícito de conclusão de turno** para clientes WebSocket do protocolo Pico. O problema identificado: clientes externos recebem eventos fragmentados (`message.create`, `message.update`, `typing.start`, `typing.stop`) sem uma forma determinística de saber quando o agente terminou completamente o processamento de uma mensagem.

**Demanda subjacente:** Consumidores do protocolo precisam de um `turn_complete` ou equivalente para sincronização confiável, especialmente em integrações com interfaces externas e fluxos multi-turn.

---

## 5. Bugs e estabilidade

**Nenhum bug ou regressão reportado nas últimas 24 horas.**

A atividade limitada de issues combinadas com PRs em bom estado sugere **estabilidade corrente** no codebase. Não há indicadores de crashes ou problemas de produção documentados no período.

---

## 6. Pedidos de features e sinais de roadmap

### Feature em desenvolvimento

**PR #3193 — Added simplex channel type**  
*Autor: dim | Aberta desde 2026-06-27*

Esta PR sinaliza possível expansão da arquitetura de comunicação para incluir **canais simplex** (comunicação unidirecional), útil em cenários de streaming unidirecional ou pipelines de eventos onde feedback reverso não é necessário.

### Feature recém-implementada

**PR #2964 — Compressão de imagens**  
*Autor: afjcjsbx | Merged em 2026-06-28*

Introduz política de compressão configurável, melhorando a eficiência do pipeline de visão.

### Sinal de roadmap via issue

**Issue #2984 — Turn completion signal**  
*Autor: Brook-sys | Fechada*

A implementação de um sinal explícito de conclusão pode indicar prioridade futura para **melhoria do protocolo WebSocket** e experiência de desenvolvedores que consomem o protocolo Pico.

---

## 7. Resumo de feedback dos usuários

### Dores identificadas

Com base nas interações:

| Dor | Origem | Severidade |
|-----|--------|------------|
| Falta de sinal determinístico de fim de turno | Issue #2984 | 🔴 Alta — bloqueia integrações confiáveis |
| Ausência de compressão configurável em imagens | PR #2964 | 🟡 Média — impacto em performance/custos |

### Cenários de uso evidenciados

- **Clientes WebSocket externos** precisam sincronização precisa com o estado do agente
- **Integrações de visão** requerem controle granular sobre qualidade/tamanho de imagens
- **Arquiteturas de comunicação** estão evoluindo para suportar diferentes padrões (simplex vs duplex)

### Satisfação geral

A taxa de resolução de issues (1 fechada hoje) e merge de features sugere **saúde positiva** do projeto com resposta ativa à comunidade.

---

## 8. Backlog que merece atenção

### Issues antigas sem resolução recente

| Issue | Título | Criada | Atualizada | Comentários |
|-------|--------|--------|------------|-------------|
| [#2984](https://github.com/sipeed/picoclaw/issues/2984) | Turn completion signal | 2026-06-02 | 2026-06-28 | 4 |

**Nota:** Esta issue foi fechada, mas o status `[stale]` indica que ficou sem atividade por período considerável antes do fechamento. A natureza técnica da feature (sinal de protocolo) pode requerer **validação adicional** antes de implementação definitiva.

### PRs em limbo

| PR | Título | Criada | Status |
|----|--------|--------|--------|
| [#2964](https://github.com/sipeed/picoclaw/pull/2964) | Image compression | 2026-05-28 | Fechada/Merged |
| [#3193](https://github.com/sipeed/picoclaw/pull/3193) | Simplex channel | 2026-06-27 | Aberta |

**Recomendação:** A PR #3193 está aberta há 2 dias sem comentários registrados. Atenção da comunidade seria benéfica para validar o design do novo tipo de canal.

---

## Indicadores de Saúde do Projeto

| Métrica | Valor | Avaliação |
|---------|-------|-----------|
| Issues fechadas (24h) | 1 | ✅ Positivo |
| PRs mergeadas (24h) | 1 | ✅ Positivo |
| PRs abertas em revisão | 1 | 🔄 Em curso |
| Bugs reportados | 0 | ✅ Estável |
| Releases | 0 | 📋 Sem tag formal |
| Engajamento (comentários) | 4 | 🟡 Moderado |

---

*Relatório gerado automaticamente com base em dados do GitHub — sipeed/picoclaw*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>


# Relatório do Projeto IronClaw — 2026-06-29

## 1. Panorama do dia

O IronClaw apresenta **alta atividade de desenvolvimento** com 50 PRs atualizados nas últimas 24h (metade aberta, metade merged/fechada) e 9 issues processadas. O foco dominante permanece na feature **Capability Policy** para o stack Reborn, com 6 issues do epic #5261 fechadas hoje. A versão 0.29.1 foi releaseada com breaking changes em crates principais. Um alarme persiste com a falha recorrente do E2E noturno (#4108), e a dependência de contribuidores core é elevada dado o volume de PRs simultâneos.

---

## 2. Lançamentos

**Nova versão releaseada:** [PR #5311](https://github.com/nearai/ironclaw/pull/5311)

| Crate | Versão Anterior | Nova Versão | Tipo de Mudança |
|-------|-----------------|-------------|-----------------|
| `ironclaw_common` | 0.4.2 | **0.5.0** | ⚠️ Breaking changes |
| `ironclaw_skills` | 0.3.0 | **0.4.0** | ⚠️ Breaking changes |
| `ironclaw` | 0.24.0 | **0.29.1** | Minor com breaking upstream |
| `ironclaw_safety` | 0.2.2 | 0.2.3 | ✓ API compatível |
| `ironclaw_skill_learning` | 0.1.0 | 0.1.1 | Patch |

### Notas de migração
- **⚠️ ironclaw_common 0.4.2 → 0.5.0**: Breaking changes — consumidores precisam revisar a API antes de atualizar.
- **⚠️ ironclaw_skills 0.3.0 → 0.4.0**: Breaking changes no contrato de skills.

---

## 3. Progresso do projeto

### PRs fechadas/merged hoje (destaques)

| PR | Título | Tamanho | Impacto |
|----|--------|---------|---------|
| [#5388](https://github.com/nearai/ironclaw/pull/5388) | fix reborn google oauth decode and preview host login | L | Corrige autenticação Google SSO após bump do `jsonwebtoken` 10.x; canonicaliza URLs de login para preview domains |
| [#5386](https://github.com/nearai/ironclaw/pull/5386) | docs(reborn-itest): Slice 9 — descope embeddings fake | XS | Descoping: não existe seam de embeddings para fakear — economia de esforço |
| [#5387](https://github.com/nearai/ironclaw/pull/5387) | test(reborn): slice 4 — URL-keyed HTTP matcher | L | Melhora ergonomia do framework de integração com matchers por URL/método |

### Avanços significativos

- **Capability Policy (Epic #5261)**: 6 issues fechadas cobrindo:
  - REST surface administrativa de 4 dimensões ([#5268](https://github.com/nearai/ironclaw/issues/5268))
  - Delta store + PolicyResolver com enforcement de config/identity/approval ([#5273](https://github.com/nearai/ironclaw/issues/5273))
  - Resolvedor de disponibilidade no dispatch seam ([#5267](https://github.com/nearai/ironclaw/issues/5267))
  - Papel de usuário DB-backed Owner>Admin>Member ([#5266](https://github.com/nearai/ironclaw/issues/5266))

---

## 4. Temas quentes da comunidade

### Issues com mais atividade

| Issue | Título | Comentários | Reações | Tendência |
|-------|--------|-------------|---------|-----------|
| [#5272](https://github.com/nearai/ironclaw/issues/5272) | REST-created local users (capability-policy) | 2 | 0 | Fechada — prerequisíto para testes manuais |
| [#5268](https://github.com/nearai/ironclaw/issues/5268) | Admin REST surface (four dimensions) | 1 | 0 | Fechada — interface de grant admin |
| [#5261](https://github.com/nearai/ironclaw/issues/5261) | [EPIC] Reborn capability policy | 1 | 0 | Fechada — tracking epic completo |

### Análise de demandas
- **Capacidade administrativa fina**: A comunidade está claramente focada em entregar controle granular de permissões por usuário (Owner/Admin/Member), com superfície REST administrativa.
- **Testabilidade**: Várias issues mencionam "testável por mão" e "DB-wired local e2e" — indicativo de necessidade de validação manual antes de automação completa.

---

## 5. Bugs e estabilidade

### Falha de E2E Noturno (Alarme ativo)

| Item | Detalhes |
|------|----------|
| **Issue** | [#4108](https://github.com/nearai/ironclaw/issues/4108) — Nightly E2E failed |
| **Reportado por** | github-actions[bot] |
| **Última atualização** | 2026-06-28 04:47:20 UTC |
| **Run** | [#28311379145](https://github.com/nearai/ironclaw/actions/runs/28311379145) |
| **Job falho** | Full E2E / E2E (features) |

⚠️ **Status**: Falha recorrente — issue aberta desde 2026-05-27. Requer atenção prioritária.

### PRs de bug em aberto (hoje)

| PR | Título | Risco | Prioridade |
|----|--------|-------|------------|
| [#5338](https://github.com/nearai/ironclaw/pull/5338) | surface real failure detail instead of generic "invalid_input" | Low | Alta — experiência do usuário |
| [#5306](https://github.com/nearai/ironclaw/pull/5306) | ask-each-time approval resume loop | Low | Média |
| [#5297](https://github.com/nearai/ironclaw/pull/5297) | stale gate projection rows in WebUI stream | Low | Média — streaming UX |
| [#5252](https://github.com/nearai/ironclaw/pull/5252) | persist Slack host conversation bindings | Low | Média |

---

## 6. Pedidos de features e sinais de roadmap

### Nova feature request

| Issue | Título | Status | Sinal de roadmap |
|-------|--------|--------|------------------|
| [#5385](https://github.com/nearai/ironclaw/issues/5385) | Add Capability Policy | 🟢 Aberta | Consolidação da policy de 3 tipos de usuário (owner/admin/member) via env variables |

### PRs de features em desenvolvimento

| PR | Título | Tamanho | Escopo |
|----|--------|---------|--------|
| [#5149](https://github.com/nearai/ironclaw/pull/5149) | Context management — progressive tool disclosure | XL | Reduz ~91 tool schemas por chamada de 25.8k tokens → resolve timeouts |
| [#5390](https://github.com/nearai/ironclaw/pull/5390) | FailureLane classifier + two-bucket enforcement | L | Classificador de falhas + invariante de dois buckets |
| [#3737](https://github.com/nearai/ironclaw/pull/3737) | feat(ironhub): install tools and skills from IronHub | XL | DB MIGRATION — capacidade de instalar tools/skills via CLI e agent em runtime |
| [#5354](https://github.com/nearai/ironclaw/pull/5354) | Add Reborn WebUI v2 live QA canary | XL | Canary lane com Playwright para QA live |

### Sinais de roadmap
1. **Performance de contexto**: PR #5149 busca reduzir token usage dramático (~25.8k tokens por turn com ~91 tools)
2. **IronHub marketplace**: #3737 indica direção de monetização/distribuição de tools
3. **Capability Policy GA**: Issue #5385 indica necessidade de produto mínimo viável para política de usuários

---

## 7. Resumo de feedback dos usuários

### Dores identificadas (via issues/PRs)

| Dor | Evidência | Severidade |
|-----|-----------|------------|
| **Timeouts por excesso de contexto** | PR #5149: 4× reenvio de ~91 tool schemas ≈ 25.8k tokens por turn | 🔴 Crítica |
| **Falha silenciosa com mensagem genérica** | PR #5338: "driver protocol error" sem detalhe real | 🟡 Média |
| **E2E noturno quebrado** | Issue #4108: testes de regressão não rodam | 🔴 Crítica |
| **CDN runtime dependencies** | Issue #5236: carga de deps externos (esm.sh, jsDelivr, Google Fonts) | 🟡 Média |

### Cenários de uso emergentes
- **Barcelona Hackathon**: PR #4787 indica fork para estabilidade em hackathon — comunidade busca path de onboarding mais robusto
- **Slack pairing hardening**: PR #5362 focado em UX de emparelhamento de contas

---

## 8. Backlog que merece atenção

### Issues sem resposta há >7 dias

| Issue | Título | Criado | Dias aberto | Prioridade |
|-------|--------|--------|-------------|------------|
| [#4108](https://github.com/nearai/ironclaw/issues/4108) | Nightly E2E failed | 2026-05-27 | **33** | 🔴 Crítica |
| [#3737](https://github.com/nearai/ironclaw/pull/3737) | feat(ironhub) | 2026-05-17 | **43** | 🟡 Média |

### PRs aguardando review há tempo prolongado

| PR | Título | Criado | Tamanho | Bloqueio? |
|----|--------|--------|---------|-----------|
| [#3737](https://github.com/nearai/ironclaw/pull/3737) | feat(ironhub): install tools from IronHub | 2026-05-17 | XL | DB MIGRATION |
| [#4787](https://github.com/nearai/ironclaw/pull/4787) | Barcelona Hackathon fork | 2026-06-12 | XL | [NO MERGE] — comunidade |
| [#4002](https://github.com/nearai/ironclaw/pull/4002) | build(deps): bump actions group | 2026-05-24 | L | ⚠️ 36 dias |

---

## Métricas resumidas do dia

| Indicador | Valor | Tendência |
|-----------|-------|-----------|
| Issues ativas | 2 | Neutra |
| PRs abertas | 25 | Estável |
| PRs merged/fechadas | 25 | ↑ Alta |
| Releases | 1 (v0.29.1) | ↑ Nova |
| Falhas ativas | 1 (#4108) | 🔴 Persistente |
| Novas features | 1 issue (#5385) | → Entrada backlog |

---

*Relatório gerado em 2026-06-29. Dados de github.com/nearai/ironclaw.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>


# Relatório do Projeto CoPaw — 2026-06-29

---

## 1. Panorama do Dia

O projeto CoPaw (QwenPaw) registrou **atividade moderada** em 29 de junho de 2026, com 4 issues e 4 pull requests atualizados nas últimas 24 horas. Nenhum merge ou release foi realizado hoje, indicando uma fase de preparação e revisão de código. A atividade concentra-se em testes de unidade para a adaptação ao Agentscope 2.0 e em reports de bugs e features 由 comunidade. O volume de Issues abertas (3) supera as fechadas (1), sinalizando backlog acumulado de demandas pendentes de triagem.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24 horas.**

O projeto não publicou novas versões hoje. As últimas atividades de release precisam ser consultadas no histórico do repositório para contexto temporal.

---

## 3. Progresso do Projeto

Nenhum PR foi merged ou fechado nas últimas 24 horas. No entanto, 4 PRs permanecem abertos com evolução significativa:

### PRs em destaque

| # | Título | Autor | Escopo | Casos de teste |
|---|--------|-------|--------|----------------|
| [#5423](https://github.com/agentscope-ai/QwenPaw/pull/5423) | test(unit): crons module unit tests — W1 sprint | hanson-hex | 51 casos | Agentscope 2.0 |
| [#5422](https://github.com/agentscope-ai/QwenPaw/pull/5422) | test(unit): chats module unit tests — W2 sprint | hanson-hex | 38 casos | Agentscope 2.0 |
| [#5581](https://github.com/agentscope-ai/QwenPaw/pull/5581) | test(unit): app-infra backend unit tests | hanson-hex | 31 casos | Agentscope 2.0 |
| [#5586](https://github.com/agentscope-ai/QwenPaw/pull/5586) | fix(context): prioritize runtime model over static config | zorrofox1121 | Bugfix | Contexto de conversão |

**Análise:** O time está focado em **consolidação de testes** para a migração para Agentscope 2.0 (`agentscope==2.0.2`). Os PRs #5423, #5422 e #5581 representam um esforço coordenado de cobertura de testes com **120+ casos de teste** distribuídos em 3 sprints. O PR #5586 é uma contribuição de primeiro contribuidor que corrige a lógica de threshold de compactação de contexto.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento

| # | Título | Tipo | Comentários | Status |
|---|--------|------|-------------|--------|
| [#5204](https://github.com/agentscope-ai/QwenPaw/issues/5204) | Dois QwenPaw Agents via Matrix陷入无限循环 | Bug | 3 | ✅ Fechada |
| [#5589](https://github.com/agentscope-ai/QwenPaw/issues/5589) | Input box: adicionar múltiplas skills continuamente | Enhancement | 1 | 🔵 Aberta |
| [#5588](https://github.com/agentscope-ai/QwenPaw/issues/5588) | Memory search com Reranker para two-stage retrieval | Feature | 1 | 🔵 Aberta |
| [#5587](https://github.com/agentscope-ai/QwenPaw/issues/5587) | Qwen-Image Tool install error | Bug | 1 | 🔵 Aberta |

### Análise das demandas

**Issue #5204 (Fechada):** Resolvido problema crítico de **loop infinito entre dois Agents via Matrix** — cada mensagem de saída de um Agent despertava o outro, criando um ciclo de retroalimentação sem fim. Esta issue demonstra preocupação com cenários multi-agent e a necessidade de mecanismos de break no runtime.

**Issue #5588:** Demanda por **two-stage retrieval** na memória — embedding (粗筛) + Reranker dedicado (精排). O usuário aponta que o `enable_llm_rerank` do reME service está desabilitado por padrão, indicando oportunidade de ativar ou Documentar essa funcionalidade.

---

## 5. Bugs e Estabilidade

### Bugs reportados nas últimas 24h

| # | Severidade | Título | Impacto |
|---|------------|--------|---------|
| [#5587](https://github.com/agentscope-ai/QwenPaw/issues/5587) | 🔴 Alta | Qwen-Image Tool install error | Instalação de ferramenta quebrada |
| [#5204](https://github.com/agentscope-ai/QwenPaw/issues/5204) | 🔴 Alta | Loop infinito entre Agents via Matrix | **Resolvida** — comportamento multi-agent |

**Análise:** A issue #5204 foi **fechada hoje**, indicando resolução do bug de loop infinito. A issue #5587 reporta erro de instalação do Qwen-Image Tool na versão v1.1.12.post2 — requer investigação urgente do pipeline de build ou dependências.

### Observação sobre estabilidade
A presença de bugs relacionados a **instalação de ferramentas** e **comunicação entre agents** sugere áreas críticas que merecem cobertura de testes mais robusta — alinhado com o esforço de testes em andamento (seção 3).

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features solicitadas

| # | Título | Prioridade implícita | Sinais de roadmap |
|---|--------|---------------------|-------------------|
| [#5589](https://github.com/agentscope-ai/QwenPaw/issues/5589) | Input box: adicionar múltiplas skills sem re-digitação `/` | UX/Usabilidade | Melhoria na UI de skills |
| [#5588](https://github.com/agentscope-ai/QwenPaw/issues/5588) | Memory search com Reranker dedicado (two-stage retrieval) | 🔴 Alta | Evolução da arquitetura de memória |
| [#5586](https://github.com/agentscope-ai/QwenPaw/pull/5586) | Runtime model priorizado sobre config estático | Bugfix/UX | Configuração dinâmica por sessão |

### Análise de tendência

1. **Melhoria de UX:** A issue #5589 sinaliza demanda por workflows de skill mais fluidos — possível候选 para sprint de UI.
2. **Arquitetura de memória:** A demanda por two-stage retrieval (#5588) indica que o记忆库 está crescendo e a召回 simples por embedding não é mais suficiente. Isso pode indicar um roadmap de longo prazo para Search/Retrieval.
3. **Configuração dinâmica:** O PR #5586 (já em revisão) endereça um problema de DX onde mudanças de modelo via dropdown não se refletem no contexto — forte sinal de que a configuração por sessão é uma prioridade.

---

## 7. Resumo de Feedback dos Usuários

### Dores identificadas

| Dor | Contexto | Frequência |
|-----|----------|------------|
| Loop infinito entre agents | Comunicação Matrix multi-agent |🐛 Crítica (resolvida) |
| Instalação de ferramentas quebrada | Qwen-Image Tool |🐛 Crítica (ativa) |
| Workflow de skills tedioso | Input box com `/` |⚠️ Usabilidade |
| Recuperação de memória imprecisa | Busca por embedding apenas |⚠️ Escalabilidade |

### Cenários de uso emergentes

- **Multi-agent via Matrix:** Usuários estão explorando arquiteturas com múltiplos agents autônomos comunicando-se via Matrix — indica adoção para casos de uso complexos (agentes colaborativos, delegation).
- **Memory as long-term knowledge base:** A demanda por Reranker (#5588) indica que o sistema está sendo usado como base de conhecimento persistente, não apenas como chat transacional.

### Satisfação geral
A resolução rápida do bug #5204 demonstra capacidade de resposta a bugs críticos. No entanto, bugs de instalação (#5587) e a ausência de releases recentes podem indicar technical debt no pipeline de CI/CD.

---

## 8. Backlog que Merece Atenção

### Issues antigas sem resolução ou sem resposta

| # | Idade | Título | Prioridade |
|---|-------|--------|------------|
| [#5204](https://github.com/agentscope-ai/QwenPaw/issues/5204) | ~14 dias | Loop infinito entre Agents via Matrix | ✅ Resolvida |
| #5162 | Referenciado | ReAct死循环 (single agent) | ⚠️ Relacionado |
| #4967 | Referenciado | ReAct死循环 (single agent) | ⚠️ Relacionado |
| #4873 | Referenciado | Subagent轮询问题 | ⚠️ Relacionado |

### Análise

A issue #5204 foi fechada com resolução, mas referencia issues ancestrais (#5162, #4967, #4873) sobre loops de agents. Recomenda-se verificar se a solução aplicada em #5204 endereça também os padrões identificados nas issues relacionadas, evitando regressões.

### Recomendações de atenção

1. **Triagem de #5587:** Bug de instalação do Qwen-Image Tool em produção — requer priorização imediata.
2. **Revisão de #5586:** PR de primeiro contribuidor com boa descrição — revisar e dar feedback para manter engajamento.
3. **Avaliação de #5588:** Feature request com proposta arquitetural detalhada — avaliar viabilidade e纳入 roadmap.

---

**Gerado em:** 2026-06-29  
**Fonte:** GitHub CoPaw (agentscope-ai/QwenPaw)  
**Período:** Últimas 24 horas

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>


# Relatório de Projeto — ZeroClaw
## Data: 2026-06-29

---

## 1. Panorama do Dia

O projeto ZeroClaw mantém **alta atividade** em 2026-06-29, com **50 issues e 50 PRs atualizados nas últimas 24h**, sem novas releases. A atividade concentra-se em preparativos para as versões **v0.8.3** (runtime, agent loop, tools, observability) e **v0.9.0** (auth, security hardening, gateway). A comunidade debate ativamente governança (RFC #6808) e arquitetura de plugins WASM, enquanto múltiplos PRs de segurança (Semgrep, CodeQL, cargo-audit, Trivy) avançam em paralelo. Bugs de estabilidade (Windows test failures, MCP enforcement, heartbeat engine) competem por atenção com features estratégicas como SOP step routing e o novo canal Inkbox.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

| Versão | Status | Notas |
|--------|--------|-------|
| — | Sem novas releases | Projeto em intenso desenvolvimento pré-release para v0.8.3 |

**Observação:** O último release estável permanece em **v0.8.1**, com a追踪 #8071, #8073 e #8363 coordenando o trabalho restante para v0.8.3.

---

## 3. Progresso do Projeto

### PRs Fechados/Merged Hoje

| PR | Autor | Tamanho | Impacto |
|----|-------|---------|---------|
| [#8029](https://github.com/zeroclaw-labs/zeroclaw/pull/8029) | JordanTheJet | M | **Fix provider:** distingue credenciais OpenAI Codex ausentes vs expiradas — comportamento crítico para auth em produção |
| [#8275](https://github.com/zeroclaw-labs/zeroclaw/pull/8275) | klonuo | XS | **Fix Scoop manifest:** adiciona `zerocode.exe` ao PATH — usability para usuários Windows via Scoop |
| [#7996](https://github.com/zeroclaw-labs/zeroclaw/pull/7996) | hfut-GYH | — | **Won't fix:** feature de cleanup de arquivos temporários rejeitada com justificativa |

### PRs Abertos de Alto Impacto

| PR | Autor | Tamanho | Risco | Destaque |
|----|-------|---------|-------|----------|
| [#8368](https://github.com/zeroclaw-labs/zeroclaw/pull/8368) | singlerider | XL | High | **Plugin system rewrite:** wasmtime component-model host para tool/channel/memory — substitui PRs #7928 e #8144 |
| [#8384](https://github.com/zeroclaw-labs/zeroclaw/pull/8384) | dimavrem22 | XL | High | **Novo canal Inkbox:** email + SMS + voice + iMessage nativo com Quickstart onboarding |
| [#7361](https://github.com/zeroclaw-labs/zeroclaw/pull/7361) | mov-xound-glitch | XL | High | **RFC-6969:** per-turn output routing via `send_via` + voice delivery fixes |
| [#8420](https://github.com/zeroclaw-labs/zeroclaw/pull/8420) | Nillth | XL | High | **SOP step schema enforcement** na engine boundary — evolução do sistema de procedures |
| [#8430](https://github.com/zeroclaw-labs/zeroclaw/pull/8430) | Nillth | XL | High | **SOP step routing:** replace advancement linear com typed route resolution |
| [#8416](https://github.com/zeroclaw-labs/zeroclaw/pull/8416) | Nillth | L | High | **SOP step contract substrate:** EPIC E substrate com schema validation |
| [#8380](https://github.com/zeroclaw-labs/zeroclaw/pull/8380) | perlowja | L | High | **Offline pricing catalog + cost RPC** para ambientes air-gapped |
| [#8428](https://github.com/zeroclaw-labs/zeroclaw/pull/8428) | Audacity88 | L | High | **Skills plugin suggestions** from cached registry — offline registry support |
| [#8157](https://github.com/zeroclaw-labs/zeroclaw/pull/8157) | ConYel | S | High | **Semgrep + CodeQL** static analysis para PR gate e master |
| [#8129](https://github.com/zeroclaw-labs/zeroclaw/pull/8129) | ConYel | XS | High | **cargo-audit** no PR gate + sync advisory ignores |
| [#8168](https://github.com/zeroclaw-labs/zeroclaw/pull/8168) | ConYel | S | High | **Trivy container scanning** para PR e release images |
| [#8439](https://github.com/zeroclaw-labs/zeroclaw/pull/8439) | wangmiao0668000666 | M | Medium | **Log perf:** move JSONL fsync off async hot path para melhor throughput |
| [#8427](https://github.com/zeroclaw-labs/zeroclaw/pull/8427) | Leuca | M | High | **WhatsApp location pin support** nativo |
| [#8326](https://github.com/zeroclaw-labs/zeroclaw/pull/8326) | Super-Cabbage | XS | Medium | **Fix UTF-8 BOM stripping** em config.toml — usability Windows |

---

## 4. Temas Quentes da Comunidade

### Issues/PRs com Maior Engajamento

| Item | Tipo | Comentários | Tópico |
|------|------|-------------|--------|
| [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) | RFC | 12 | **Work Lanes, Board Automation, Label Cleanup** — governança e workflow de desenvolvimento |
| [#6360](https://github.com/zeroclaw-labs/zeroclaw/issues/6360) | Bug | 4 | **Prompt caching não funciona via Telegram** — degradação de performance em canal popular |
| [#6943](https://github.com/zeroclaw-labs/zeroclaw/issues/6943) | RFC | 4 | **Deconflict Plugin System Goals** em FND-001 — arquitetura WASM/plugin |
| [#2128](https://github.com/zeroclaw-labs/zeroclaw/issues/2128) | Bug | 4 | **Cron/heartbeat envia texto "NO_REPLY" literal** — bug de UX em automações |
| [#8226](https://github.com/zeroclaw-labs/zeroclaw/issues/8226) | Feature | 4 | **Per-agent environment variables** — multi-tenancy para MCP e process lanes |

### Análise dos Temas

**1. Governança e Workflow (#6808)**
O RFC de Work Lanes é o item mais comentado, refletindo preocupação da comunidade com a **escalabilidade do processo de desenvolvimento**. A proposta busca automatizar board management e reduzir trabalho manual dos mantenedores. Status: `accepted`, rollout in progress para v0.8.0-beta-1 → v0.8.1.

**2. Arquitetura de Plugins (#6943)**
A comunidade debate intensamente a substituição de Extism por `wasmtime` com `wasm-wasip2`. A issue aponta compromissos mutuamente exclusivos no FND-001, indicando necessidade de decisão técnica para a Phase 2 D2.

**3. Multi-Tenancy e Configuração (#8226)**
Demanda por `runtime_context` e `runtime_secrets` blocks indica que o projeto está amadurecendo para cenários enterprise, onde múltiplos agentes compartilham instâncias MCP.

---

## 5. Bugs e Estabilidade

### Bugs de Alta Severidade (P1 / S2)

| Issue | Severidade | Status | Descrição | Link |
|-------|------------|--------|-----------|------|
| #7462 | P1, S2 | Accepted | **74 test failures no Windows** — comandos Unix-only, path semantics, console encoding | [Issue #7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) |
| #7733 | P1, S2 | In Progress | **mcp_bundles não é enforced em runtime** — scoping per-agent é silent no-op (security-relevant) | [Issue #7733](https://github.com/zeroclaw-labs/zeroclaw/issues/7733) |
| #8386 | P1, S2 | Accepted | **SQLite default sem embedding model** — hybrid search degrada silenciosamente para keyword-only | [Issue #8386](https://github.com/zeroclaw-labs/zeroclaw/issues/8386) |

### Bugs de Média Severidade (P2 / S2)

| Issue | Status | Descrição | Link |
|-------|--------|-----------|------|
| #6360 | Closed | Prompt caching não funciona via Telegram | [Issue #6360](https://github.com/zeroclaw-labs/zeroclaw/issues/6360) |
| #2128 | In Progress | Cron/heartbeat envia "NO_REPLY" literal em vez de suprimir resposta | [Issue #2128](https://github.com/zeroclaw-labs/zeroclaw/issues/2122) |
| #8366 | In Progress | Heartbeat engine lê HEARTBEAT.md do data_dir em vez do agent workspace | [Issue #8366](https://github.com/zeroclaw-labs/zeroclaw/issues/8366) |
| #7800 | Accepted | Code help/keybindings enganosos ou inacessíveis, especialmente no macOS | [Issue #7800](https://github.com/zeroclaw-labs/zeroclaw/issues/7800) |
| #8432 | In Progress | Package publish tokens falham tardiamente sem push access | [Issue #8432](https://github.com/zeroclaw-labs/zeroclaw/issues/8432) |

### Análise de Estabilidade

**Preocupações críticas:**
- **Windows compatibility (#7462):** 74 testes falhando não capturados pelo CI (que só roda Linux) representa risco de regressão significativo para base de usuários Windows.
- **Security silent no-op (#7733):** O campo `mcp_bundles` é parseado mas ignorado em runtime, criando uma vulnerabilidade de isolamento que pode expor dados entre agentes em ambientes multi-tenant.
- **Default inconsistency (#8386):** SQLite como default sem prompt de embedding model causa degradação silenciosa de search quality, afetando experiência de novos usuários.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em Destaque por Prioridade

| Feature | Prioridade | Risco | Descrição | Link |
|---------|------------|-------|-----------|------|
| RFC #6808: Work Lanes & Board Automation | P2 | Medium | Governança e automação de board | [Issue #6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) |
| RFC #6943: Plugin System Deconflict | P2 | High | Substituição Extism → wasmtime/wasip2 | [Issue #6943](https://github.com/zeroclaw-labs/zeroclaw/issues/6943) |
| #8226: Per-agent Environment Variables | P2 | High | `runtime_context` e `runtime_secrets` blocks | [Issue #8226](https://github.com/zeroclaw-labs/zeroclaw/issues/8226) |
| #7952: Full-channel Prebuilt Assets | P2 | High | Publish bundle opcional com todos os canais | [Issue #7952](https://github.com/zeroclaw-labs/zeroclaw/issues/7952) |
| #8379: WhatsApp Passive Group Context | P2 | High | Opt-in para armazenar mensagens grupais como contexto | [Issue #8379](https://github.com/zeroclaw-labs/zeroclaw/issues/8379) |
| #8057/8056: Security CI Jobs | P2 | High | CodeQL, npm audit, cargo outdated, Trivy, SBOM | [Issue #8057](https://github.com/zeroclaw-labs/zeroclaw/issues/8057), [Issue #8056](https://github.com/zeroclaw-labs/zeroclaw/issues/8056) |
| #8415: Telegram Bot API 10.1 Rich Messages | P2 | Medium | Melhor UX com tabelas e formatação rica | [Issue #8415](https://github.com/zeroclaw-labs/zeroclaw/issues/8415) |
| #8424: .ignore File Mechanism | P2 | High | Proteção de arquivos sensíveis via `.ignore` | [Issue #8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424) |
| #8396: Wire-Protocol-First Provider Model | P2 | High | RFC para reorganizar provider model por `wire_api` | [Issue #8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396) |

### Sinais de Roadmap

**v0.8.3 (em desenvolvimento):**
- Runtime execution, agent loop, tools, skills — [Tracker #8071](https://github.com/zeroclaw-labs/zeroclaw/issues/8071)
- Config-driven runtime policy, routing, tool access — [Tracker #8363](https://github.com/zeroclaw-labs/zeroclaw/issues/8363)
- WASM plugin program — [Tracker #7314](https://github.com/zeroclaw-labs/zeroclaw/issues/7314)
- Observability, CI, docs, dependencies — [Tracker #8073](https://github.com/zeroclaw-labs/zeroclaw/issues/8073)
- SOP daemon control plane — [Tracker #8288](https://github.com/zeroclaw-labs/zeroclaw/issues/8288)

**v0.9.0 (planning):**
- Auth, security hardening, gateway, breaking changes — [Tracker #7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) (111 open items)

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Dor | Frequência | Impacto | Issue |
|-----|------------|---------|-------|
| **Prompt caching não funciona via Telegram** | Média | Performance degradada em canal popular | [#6360](https://github.com/zeroclaw-labs/zeroclaw/issues/6360) |
| **Windows test failures não detectados pelo CI** | Alta | Confiança em releases comprometida | [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) |
| **MCP scoping é silent no-op** | Alta | Risco de segurança em multi-tenant | [#7733](https://github.com/zeroclaw-labs/zeroclaw/issues/7733) |
| **Keybindings enganosos no macOS** | Média | UX inconsistente | [#7800](https://github.com/zeroclaw-labs/zeroclaw/issues/7800) |
| **SQLite default sem embedding model** | Alta | Search degrada silenciosamente | [#8386](https://github.com/zeroclaw-labs/zeroclaw/issues/8386) |


</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*