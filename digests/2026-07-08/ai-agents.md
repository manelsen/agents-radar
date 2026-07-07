# Resumo diário do ecossistema de agentes de IA 2026-07-08

> Issues: 0 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-07-07 21:18 UTC

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

**Data de Referência:** 2026-07-08  
**Período Analisado:** Últimas 24 horas

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **alta atividade consolidada** em 08/07/2026, com seis dos sete projetos rastreados demonstrando desenvolvimento ativo. O tema central do período é **segurança**: múltiplos projetos enfrentam vulnerabilidades críticas relacionadas a autenticação (NanoBot com 4 security advisories, ZeroClaw com tool bypass e SSRF), indicando maturidade crescente mas também superfície de ataque em expansão. A estabilização de versões beta (CoPaw v2.0.0-beta.3) e releases de manutenção (IronClaw v0.29.1) sugerem que o ecossistema está em transição de feature velocity para consolidação de qualidade. A demanda por **self-hosted alternatives** (Hermes Agent com Mem0, NanoBot com Azure OpenAI) e **thin-client architectures** (Hermes Desktop) indica uma tendência de mercado para deployment flexível em cenários enterprise.

---

## 2. Comparação de Atividade

| Projeto | Issues Ativas | PRs Ativos | Releases (24h) | Bugs P1/Críticos | Saúde Geral |
|---------|:-------------:|:----------:|:--------------:|:---------------:|-------------|
| **NullClaw** | 0 | 0 | 0 | 0 | 🔴 Inativo |
| **NanoBot** | 12 | 28 | 0 | 4 security + 3 regressions | 🟠 Crítica |
| **Hermes Agent** | 50 | 50 | 0 | 3 P2 | 🟢 Estável |
| **PicoClaw** | 7 | 4 | 0 | 3 alta | 🟡 Moderada |
| **IronClaw** | 33 | 50 | 1 (v0.29.1) | 1 P1 | 🟢 Estável |
| **CoPaw** | 17 | 38 | 2 (beta + patch) | 4 críticos | 🟠 Atenção |
| **ZeroClaw** | 28 | 50 | 0 | 4 P1 | 🟠 Crítica |

**Observação:** IronClaw e Hermes Agent publicaram releases recentes, indicando maturidade no processo de versionamento. NanoBot e ZeroClaw acumulam vulnerabilidades de segurança não resolvidas, representando risco para adoção em produção.

---

## 3. Posicionamento do Projeto Principal

Para fins desta análise, identificamos **IronClaw** como projeto de referência pelo volume de atividade, release management disciplinado e amplitude de features:

### Vantagens Competitivas

| Aspecto | IronClaw | NanoBot | Hermes Agent |
|---------|----------|---------|-------------|
| **Release Management** | ✅ v0.29.1 com changelog completo | ❌ Última release >7 dias | ✅ v0.18.0 com tracking |
| **Segurança** | ✅ CI quality gate, PR reviews | 🔴 4 security advisories abertos | ✅ Approval gate em desenvolvimento |
| **Performance DB** | ✅ Pool de conexões libSQL (#5751) | 🟡 Stream stalled regressions | 🟡 Memory leaks reportados |
| **Multi-tenancy** | ✅ Slack OAuth em andamento | 🟡 Auth via API key | ✅ Remote onboarding RFC |
| **Cobertura de Testes** | ✅ E2E nightly (com falhas) | 🟡 Regression testing needed | 🟡 Casos isolados |

### Diferenças Técnicas Arquiteturais

- **IronClaw** adota arquitetura modular com packages separados (`ironclaw_common`, `ironclaw_skills`, `ironclaw_safety`), permitindo atualização granular de dependentes.
- **NanoBot** demonstra foco em interoperabilidade de provedores (Azure OpenAI, Feishu) com arquitetura orientada a plugins de canal.
- **Hermes Agent** prioriza deployment flexível com Mem0 self-hosted como diferenciador enterprise.

---

## 4. Focos Técnicos Compartilhados

### 4.1 Segurança de Autenticação e Autorização

| Projeto | Issue | Status |
|---------|-------|--------|
| **NanoBot** | Token leakage em WebUI bootstrap (#4825-4827) | 4 security advisories abertos |
| **ZeroClaw** | Tool bypass em skill-registered tools (#8787) | P1 aberto |
| **Hermes Agent** | Approval gate bypass em cron_mode (#60505) | P2 aberto |
| **IronClaw** | Insecure origin em clientActionId (#5694) | ✅ Merged |

**Padrão:** A descentralização de autenticação entre canais (Slack, WebUI, API) cria inconsistências de security model. Recomenda-se audit unificado.

### 4.2 Estabilidade de Canais e Integrações

| Canal | Projetos Afetados | Problema |
|-------|-------------------|----------|
| **WhatsApp** | NanoBot, Hermes Agent | Groups regression, allowFrom broken |
| **Telegram** | NanoBot, Hermes Agent | HTML parse_mode, routing profiles |
| **Slack** | IronClaw, NanoBot | OAuth migration, missing deps |
| **Matrix** | NanoBot, CoPaw | e2ee untrusted, streaming mode |

**Padrão:** Canais de mensagem representam a superfície de integração mais frágil. Cada projeto mantém integrações proprietárias resultando em debt técnico acumulado.

### 4.3 Memory e Persistência

| Projeto | Feature | Status |
|---------|---------|--------|
| **Hermes Agent** | Mem0 self-hosted (#55614, #51654) | ✅ Merged (4 PRs) |
| **CoPaw** | Auto memory search (#5820) | ✅ Merged |
| **ZeroClaw** | Hot-reload log persistence (#8816) | PR pronto |
| **NanoBot** | Feishu session dividers (#4763) | ✅ Merged |

**Padrão:** A capacidade de memória de longo prazo é diferenciador competitivo. Soluções self-hosted ganham tração em cenários enterprise com requisitos de privacy.

---

## 5. Análise de Diferenciação

### 5.1 Por Público-Alvo

| Segmento | Projeto Líder | Indicadores |
|----------|---------------|-------------|
| **Enterprise/Production** | Hermes Agent | Mem0 self-hosted, thin-client desktop, remote onboarding |
| **Developer/Automation** | IronClaw | SOP authoring, Reborn engine, GitHub integration |
| **Privacy/Federated** | PicoClaw, ZeroClaw | Deltachat, SimpleX requests, voice satellite |
| **Multi-Channel** | NanoBot | Feishu, WhatsApp, Telegram, Matrix, Slack |

### 5.2 Por Arquitetura

| Arquitetura | Projetos | Características |
|-------------|----------|------------------|
| **Monolito modular** | IronClaw | Packages separados, shared core |
| **Plugin-based** | NanoBot, CoPaw | Provider abstraction, channel plugins |
| **Runtime distribuído** | Hermes Agent | Local + remote execution, Mem0 backend |
| **Edge-first** | ZeroClaw | WASM, Inkbox channel, voice satellites |

### 5.3 Por Estratégia de Segurança

| Estratégia | Projeto | Implementação |
|------------|---------|---------------|
| **Gated runtime** | ZeroClaw | Confirmation tier (allow/ask/deny) |
| **Auth obrigatório** | NanoBot | Require API key for serve (#4669) |
| **Approval flow** | Hermes Agent | Approval gate com fail-closed |
| **Sandbox tool** | CoPaw | file_guard com bypass mitigations |

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração

| Projeto | PRs Merged (24h) | Velocidade | Fase |
|---------|:----------------:|:----------:|------|
| **IronClaw** | 11 | 🔴 Muito Alta | Feature velocity |
| **Hermes Agent** | 4 | 🟢 Alta | Feature velocity |
| **CoPaw** | 8 | 🟢 Alta | Beta stabilization |
| **ZeroClaw** | 9 | 🟢 Alta | Integration pre-release |
| **NanoBot** | 4 | 🟡 Moderada | Security firefighting |
| **PicoClaw** | 1 | 🟡 Baixa | Bug triage |
| **NullClaw** | 0 | 🔴 Nula | Estagnado |

### 6.2 Qualidade de Mantença

| Indicador | IronClaw | NanoBot | PicoClaw |
|-----------|:--------:|:-------:|:--------:|
| **Bugs P1 sem resposta >7 dias** | 1 (#3535, ~57 dias) | 0 | 2 (#3196, #3197, ~8 dias) |
| **Security issues triados** | ✅ | ❌ (4 advisories, 0 comentários) | N/A |
| **Release notes documentadas** | ✅ | ❌ | ❌ |
| **Processo de release formal** | ✅ | ❌ | ❌ |

### 6.3 Maturidade Relativa (Escala 1-5)

| Aspecto | IronClaw | Hermes | NanoBot | CoPaw | ZeroClaw | PicoClaw |
|---------|:--------:|:------:|:-------:|:-----:|:--------:|:--------:|
| **Documentação** | 4 | 3 | 2 | 3 | 3 | 2 |
| **Release management** | 5 | 4 | 1 | 3 | 2 | 1 |
| **Security posture** | 3 | 3 | 1 | 3 | 3 | 2 |
| **Test coverage** | 4 | 2 | 2 | 3 | 3 | 2 |
| **Community responsiveness** | 3 | 4 | 3 | 4 | 4 | 2 |
| **Maturidade geral** | **3.8** | **3.2** | **1.8** | **3.2** | **3.0** | **1.8** |

---

## 7. Sinais de Tendência

### 7.1 Enterprise Self-Hosted Emerge como Padrão

**Evidência:**
- Hermes Agent: 4 PRs dedicados a Mem0 self-hosted (#[55614](https://github.com/NousResearch/hermes-agent/pull/55614), #[51654](https://github.com/NousResearch/hermes-agent/pull/51654), #[52487](https://github.com/NousResearch/hermes-agent/pull/52487), #[60494](https://github.com/NousResearch/hermes-agent/pull/60494))
- Hermes Agent: RFC remote-client onboarding com 42 👍 (#38602)
- NanoBot: Azure OpenAI Responses API com web_search nativo (#3743)

**Implicação:** A dependência de serviços cloud para memória e orquestração está sendo ativamente reduzida. Expectativa de crescimento em soluções self-hosted para compliance e custo.

### 7.2 Thin-Client Desktop como Próxima Fronteira

**Evidência:**
- Hermes Agent: Desktop Client-Only Installation (#38602, 42 👍 — feature mais votada)
- Hermes Agent: Remote onboarding (#36970)
- CoPaw: Bundle Node runtime para ACP desktop (#5814)
- CoPaw: System tray, minimização para background tasks (#5312)

**Implicação:** Usuários enterprise querem a experiência Desktop com deployment centralizado. Overhead de bootstrap local é friction percebida.

### 7.3 Voice e Realtime Entrando no Roadmap

**Evidência:**
- ZeroClaw: Voicehost channel (#7943), Voice satellite (#7944), Gemini Live (#8780)
- ZeroClaw: Realtime speech-to-speech como feature aberta

**Implicação:** Voice interaction está evoluindo de experimento para feature table-stakes. Hardware diversity (ESP32, smartphone, PWA) indica ambição de deployment ubíquo.

### 7.4 Segurança como Surface Area Crítica

**Evidência:**
- NanoBot: 4 security advisories simultâneos sobre token bootstrap
- ZeroClaw: Tool bypass (#8787), SSRF (#8713 merged), RFC confirmation tier (#7155)
- CoPaw: file_guard bypass (`find -delete`, #5842)
- IronClaw: CI quality gate para segurança (#8753)

**Implicação:** Autonomia de agentes expande superfície de ataque exponencialmente. Security-by-design está se tornando diferencial competitivo.

### 7.5 Multi-Agent e Orchestration Descentralizada

**Evidência:**
- IronClaw: Subagent Thread Harness design doc (#5748)
- Hermes Agent: Telegram routing profiles (#40173)
- NanoBot: Sustained goals gated by runtime mode (#4833)
- ZeroClaw: SOP visual authoring com channel fan-in (#8590)

**Implicação:** O paradigma está evoluindo de agente único para ecossistemas de agentes especializados comunicando-se via canais federados.

---

## Síntese Executiva

| Prioridade | Ação | Projetos Impactados |
|------------|------|---------------------|
| **🔴 Crítica** | Triagem de security advisories e release de patches | NanoBot, ZeroClaw |
| **🟠 Alta** | Stabilização de canais (WhatsApp, Telegram) | NanoBot, Hermes Agent |
| **🟠 Alta** | Release management formalizado | NanoBot, PicoClaw |
| **🟡 Média** | Self-hosted memory/speech features GA | Hermes Agent, ZeroClaw |
| **🟡 Média** | Thin-client desktop availability | Hermes Agent, CoPaw |

**Recomendação para Decisores:** IronClaw demonstra a maturidade mais alta em release management e segurança de deployment. Hermes Agent lidera em inovação de deployment enterprise com self-hosted e thin-client. NanoBot apresenta risco elevado de adoção em produção devido a security advisories não resolvidos. Para novos projetos, considerar ZeroClaw pela arquitetura modular e roadmap de voice, ou Hermes Agent para self-hosted enterprise.

---

*Relatório gerado automaticamente com base em dados agregados dos repositórios GitHub em 2026-07-08. Métricas refletem atividade das últimas 24 horas.*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-07-08

---

## 1. Panorama do Dia

O NanoBot apresenta **alta atividade** em 08 de julho de 2026, com 12 issues e 28 PRs atualizados nas últimas 24h — indicando um sprint intenso de desenvolvimento. Três security advisories críticos relacionados à autenticação do WebUI foram abertos, e múltiplas regressões (WhatsApp, Telegram, CLI) precisam de atenção urgente. O projeto demonstra maturidade em governança de código com respostas rápidas a vulnerabilidades, mas o acúmulo de 6 issues de segurança simultâneas (incluindo DNS rebinding e token leakage) sugere necessidade de review de arquitetura de autenticação. A comunidade mantém ritmo saudável de merge: 4 PRs fechados/merged hoje, incluindo features importantes como provider-hosted web search e Feishu session dividers.

---

## 2. Lançamentos

**Nenhum release nas últimas 24h.**

O projeto não publicou novas versões desde o período reportado. Dados indicam que a versão em desenvolvimento estável é **0.2.2** (referenciada em issue #4823 sobre regressão do WhatsApp groups).

---

## 3. Progresso do Projeto

### PRs Fechados/Merged Hoje

| # | Título | Impacto | Link |
|---|--------|---------|------|
| **#4763** | Feishu: add new session divider | Melhora UX com divider visual em p2p `/new`; remove duplicação de "New session started." | [#4763](https://github.com/HKUDS/nanobot/pull/4763) |
| **#3743** | feat(provider): support provider-hosted web search | Habilita Azure OpenAI Responses API com `web_search` nativo como tool do provider | [#3743](https://github.com/HKUDS/nanobot/pull/3743) |
| **#3232** | refactor(agent): simplify task done-callback and snapshot pending keys | Cleanup de callbacks e restoration de chunks acidentalmente deletados; melhora legibilidade | [#3232](https://github.com/HKUDS/nanobot/pull/3232) |

**Análise:** Os merges focam em **qualidade de life** (Feishu), **interoperabilidade com provedores enterprise** (Azure OpenAI web search) e **manutenibilidade do core**. A feature de web search provider-hosted (#3743, em desenvolvimento desde 2026-05-11) finalmente completa um ciclo de 57 dias, indicando complexidade de integração.

---

## 4. Temas Quentes da Comunidade

### Issues com Mais Atividade (Comentários + Reações)

| # | Título | Tipo | Comentários | Link |
|---|--------|------|-------------|------|
| **#4013** | Error calling LLM: stream stalled for more than 90 seconds | bug/question | 6 | [#4013](https://github.com/HKUDS/nanobot/issues/4013) |
| **#4823** | whatsapp - groups regression | bug/regression | 3 | [#4823](https://github.com/HKUDS/nanobot/issues/4823) |
| **#4829** | aiohttp missing in slack dependencies | bug | 2 | [#4829](https://github.com/HKUDS/nanobot/issues/4829) |

### PRs com Maior Prioridade (P1)

| # | Título | Objetivo | Link |
|---|--------|----------|------|
| **#4837** | Guard .strip() on multimodal content and log prepare_call exceptions | Conserta crashes em mensagens multimodais e logging de tool errors | [#4837](https://github.com/HKUDS/nanobot/pull/4837) |
| **#4834** | WhatsApp group allowlist restoration | Restaura `allowFrom` para grupos após regressão post-0.2.2 | [#4834](https://github.com/HKUDS/nanobot/pull/4834) |
| **#4669** | Require api key for serve | Security: impede API server sem autenticação | [#4669](https://github.com/HKUDS/nanobot/pull/4669) |
| **#4830** | Fix missing aiohttp slack dependency | Conserta packaging para Slack plugin | [#4830](https://github.com/HKUDS/nanobot/pull/4830) |
| **#4833** | Gate sustained goals behind explicit runtime mode | Reestruturação de long-goal tools com gating dinâmico | [#4833](https://github.com/HKUDS/nanobot/pull/4833) |

**Análise:** A comunidade demonstra preocupação com **estabilidade de canais** (WhatsApp, Telegram, Slack) e **segurança do servidor API**. A concentração de 5 PRs P1 simultâneos sugere gargalo de review.

---

## 5. Bugs e Estabilidade

### 🔴 Críticos / Security (P1)

| # | Severidade | Título | Detalhes | Link |
|---|------------|--------|----------|------|
| **#4825** | Security | Unauthenticated localhost callers mint WebUI API tokens via `/webui/bootstrap` | Token minting sem auth em loopback | [#4825](https://github.com/HKUDS/nanobot/issues/4825) |
| **#4826** | Security | nanobot WebUI bootstrap issues API-capable bearer tokens to localhost | Similar a #4825, variante | [#4826](https://github.com/HKUDS/nanobot/issues/4826) |
| **#4827** | Security | Embedded WebUI bootstrap issues API bearer tokens to unauthenticated | Terceira variante do mesmo vetor | [#4827](https://github.com/HKUDS/nanobot/issues/4827) |
| **#4611** | Security | DNS rebinding TOCTOU in SSRF validation | `validate_url_target` não fixa IP resolvido | [#4611](https://github.com/HKUDS/nanobot/issues/4611) |
| **#4669** | Security | Require api key for serve (PR em review) | Exige API key antes do servidor iniciar | [#4669](https://github.com/HKUDS/nanobot/pull/4669) |

### 🟠 Regression / Bugs Comuns (P1)

| # | Severidade | Título | Detalhes | Link |
|---|------------|--------|----------|------|
| **#4823** | Regression | WhatsApp groups: responses em todos os grupos | allowFrom quebrado post-0.2.2 | [#4823](https://github.com/HKUDS/nanobot/issues/4823) |
| **#4800** | Bug | .strip() crash on multimodal messages | Conteúdo list-form causa TypeError | [#4800](https://github.com/HKUDS/nanobot/issues/4800) |
| **#4805** | Bug | suppress(Exception) swallows tool validation errors | Falhas silenciosas em prepare_call | [#4805](https://github.com/HKUDS/nanobot/issues/4805) |
| **#4013** | Bug | LLM stream stalled for 90s | Regressão do 0.1.5post2 → 0.2.0 | [#4013](https://github.com/HKUDS/nanobot/issues/4013) |

### 🟡 Melhorias de Estabilidade (P2)

| # | Severidade | Título | Link |
|---|------------|--------|------|
| **#4840** | P1 | Shell: reap zombie processes on all exit paths | [#4840](https://github.com/HKUDS/nanobot/pull/4840) |
| **#4839** | P1 | Telegram: HTML parse_mode for stream overflow | [#4839](https://github.com/HKUDS/nanobot/pull/4839) |
| **#4832** | P2 | CLI: handle CSI-u Shift+Enter | [#4832](https://github.com/HKUDS/nanobot/pull/4832) |

**Análise de Estabilidade:** O projeto apresenta **4 security advisories ativos** todos abertos em 2026-07-07, com 3 sendo variantes do mesmo problema de token bootstrap. Este é um padrão que requer ação imediata. As regressões de canais (WhatsApp, Telegram) afetam用户体验 crítico.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features em Desenvolvimento

| # | Título | Descrição | Link |
|---|--------|-----------|------|
| **#4833** | Gate sustained goals behind explicit runtime mode | Substitui long_task/complete_goal por tools dinâmicas injetadas via runtime mode | [#4833](https://github.com/HKUDS/nanobot/pull/4833) |
| **#4506** | MCP server idle timeout auto-kill | Watchdog para idle MCP servers com novo parâmetro `idle_timeout` | [#4506](https://github.com/HKUDS/nanobot/pull/4506) |
| **#4828** | WebUI file edit diff view | Unified diff com `difflib.unified_diff` e parsing frontend via `diff` package | [#4828](https://github.com/HKUDS/nanobot/pull/4828) |
| **#4771** | Support document attachments in WebUI | Attachment picker/drop/paste para PDFs além de imagens | [#4771](https://github.com/HKUDS/nanobot/pull/4771) |
| **#4430** | Configure web_fetch provider | Provider selection: auto, tavily, jina, readability | [#4430](https://github.com/HKUDS/nanobot/pull/4430) |

### Features Propostas pela Comunidade

| # | Título | Link |
|---|--------|------|
| **#4841** | Matrix: cross-signing / bot-initiated SAS verification | [#4841](https://github.com/HKUDS/nanobot/issues/4841) |
| **#3741** | Support provider-hosted web search (CLOSED — merged em #3743) | [#3741](https://github.com/HKUDS/nanobot/issues/3741) |

**Sinais de Roadmap:** O projeto está evoluindo para:
1. **Segurança reforçada** — autenticação obrigatória, gated runtime features
2. **Multimodalidade** — suporte a documentos e conteúdo não-texto
3. **Resiliência de MCP** — idle timeouts e reconnect isolation
4. **UX WebUI** — diff views, attachments, melhor prompt rail

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Tema | Frequência | Exemplos |
|------|------------|----------|
| **Quebras após update** | 🔴 Alta | #4013: upgrade 0.1.5post2 → 0.2.0 causa stream stalled; #4823: WhatsApp groups quebrado pós-0.2.2 |
| **Instabilidade de canais** | 🔴 Alta | Telegram parsing, WhatsApp group filtering, QQ reconnect loop |
| **Segurança do WebUI** | 🔴 Crítica | 3 security advisories sobre token leakage em localhost |
| **Crashes silenciosos** | 🟠 Média | #4805: suppress(Exception) esconde validação errors; #4800: multimodal crash |
| **SSRF vulnerabilidade** | 🟠 Média | #4611: DNS rebinding não mitigado em web fetch |

### Cenários de Uso Emergentes

1. **Multi-grupo WhatsApp** — Usuários em múltiplos grupos reportam spam de respostas (regressão)
2. **Enterprise integrations** — Azure OpenAI com web search nativo (feature completada)
3. **Matrix e2ee** — Bots aparecem "untrusted", sem caminho de verificação clean
4. **CLI interativo** — Shift+Enter regression causa raw escape dumps

### Satisfação Geral

**Mista a positiva para uso estável; negativa para quem atualizou recentemente.** A velocidade de resposta da comunidade é boa (3 issues fechadas hoje), mas o volume de security issues abertas simultaneamente (4) pode erodir confiança em deploys production.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta / Long-Standing

| # | Idade | Título | Status | Link |
|---|-------|--------|--------|------|
| **#4841** | 1 dia | Matrix: bot device shows as 'untrusted' | 0 comentários | [#4841](https://github.com/HKUDS/nanobot/issues/4841) |
| **#4840** | 1 dia | Shell: zombie processes (PR, 0 comments) | 0 comentários | [#4840](https://github.com/HKUDS/nanobot/pull/4840) |
| **#4825/26/27** | 1 dia | 3 security advisories sobre WebUI tokens | 0 comentários | [#4825](https://github.com/HKUDS/nanobot/issues/4825) |

### Conflitos de PRs (Bloqueando Merge)

| # | Idade | Título | Bloqueio | Link |
|---|-------|--------|----------|------|
| **#4822** | 1 dia | WebUI: preserve automation source on streamed replies | automation source | [#4822](https://github.com/HKUDS/nanobot/pull/4822) |
| **#4764** | 3 dias | MCP: isolate reconnect cancel scopes | gateway crash | [#4764](https://github.com/HKUDS/nanobot/pull/4764) |
| **#4506** | 13 dias | MCP idle timeout auto-kill | idle handling | [#4506](https://github.com/HKUDS/nanobot/pull/4506) |
| **#4430** | 17 dias | web_fetch provider config | provider selection | [#4430](https://github.com/HKUDS/nanobot/pull/4430) |

**Recomendação Prioritária:**
1. **Review/merge imediato** dos 3 security PRs (P1) — #4669, #4830, #4833
2. **Triagem de security advisories** — #4825, #4826, #4827, #4611
3. **Resolução de conflitos** em PRs com [conflict] tag antes do próximo release
4. **Confirmação de regression testing** para WhatsApp/Telegram antes de 0.2.3

---

*Relatório gerado automaticamente com base em dados GitHub de 2026-07-08. Todas as métricas refletem atividade nas últimas 24h.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-07-08

## 1. Panorama do Dia

O projeto **Hermes Agent** mantém uma atividade intensa e bem distribuída, com **100 eventos totais** (50 issues e 50 PRs) atualizados nas últimas 24h. O ecossistema Desktop apresenta o maior volume de problemas reports — especialmente no Windows — enquanto o componente Dashboard sofre com bugs críticos de autenticação básica (basic auth). Não houve releases oficiais registradas no período, e os PRs abertos demonstram foco em **estabilidade de subprocessos MCP**, **correções de memory leaks** e **suporte a self-hosted Mem0**. A comunidade está particularmente mobilizada em torno de features de instalação thin-client e conectividade remota, sinalizando uma demanda forte por arquiteturas de deployment mais flexíveis.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24h.** O último ciclo de版本foi a tag `v0.18.0` (v2026.7.1), referenciada em vários issues de bug do Dashboard. A ausência de releases no período sugere que a equipe pode estar em ciclo de estabilização ou preparando uma nova versão com foco em correções críticas.

---

## 3. Progresso do Projeto

### PRs Merged/Closed Hoje (16 total)

| # | PR | Tipo | Impacto |
|---|-----|------|---------|
| [#55614](https://github.com/NousResearch/hermes-agent/pull/55614) | `feat(mem0): add self-hosted dashboard support and remove list command` | Feature | Adiciona terceira conexão ao plugin Mem0 — modo self-hosted dashboard |
| [#51654](https://github.com/NousResearch/hermes-agent/pull/51654) | `feat(plugins/mem0): support customizable api url` | Feature | Permite conexão com instâncias self-hosted ou third-party Mem0 |
| [#52487](https://github.com/NousResearch/hermes-agent/pull/52487) | `fix(mem0): restore self-hosted support dropped by v3 refactor` | Bug Fix | Restaura `SelfHostedBackend` que conversa diretamente com FastAPI server via httpx |
| [#60494](https://github.com/NousResearch/hermes-agent/pull/60494) | `feat(mem0): add self-hosted mode to the setup wizard` | Feature | Wizard `hermes memory setup` agora oferece modo self-hosted — antes só Platform e OSS |

**Resumo:** O effort concentrado em **Mem0 self-hosted** representa um avanço significativo para usuários enterprise que não querem dependência da cloud.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| # | Título | Comentários | 👍 | Categoria |
|---|--------|:-----------:|:--:|-----------|
| [#7237](https://github.com/NousResearch/hermes-agent/issues/7237) | **[Bug] Response truncated due to output length limit** | 53 | 6 | **Bug Crítico** (já fechado) |
| [#38602](https://github.com/NousResearch/hermes-agent/issues/38602) | **[Feature] Desktop Client-Only Installation** | 10 | 42 | Feature Desktop |
| [#57868](https://github.com/NousResearch/hermes-agent/issues/57868) | **[Bug] Dashboard basic auth (password-only) crashes with 500** | 3 | 3 | Bug Dashboard |

### Análise das Demandas

1. **Desktop Thin-Client (#38602 — 42 👍):** A demanda mais votada do dia evidencia que usuários desejam instalar o Hermes Desktop como cliente ligero conectando a uma instalação remote. O bootstrap atual sempre inicializa o runtime local, o que cria overhead desnecessário em cenários de deployment centralizado.

2. **Remote Onboarding (#36970):** Complementar a #38602, este issue solicita onboarding fluido para que novos usuários conectem a Hermes já existente sem bootstrap duplicado — indica maturação do ecossistema para uso organizacional.

3. **Telegram Routing Profiles (#40173):** Unificar múltiplos perfis de agente em um único bot Telegram via `channel_profiles` — demanda de power users que gerenciam múltiplos chatbots.

---

## 5. Bugs e Estabilidade

### P1/P2 — Críticos e Altos

| # | Severidade | Título | Componente |
|---|:----------:|--------|------------|
| [#7237](https://github.com/NousResearch/hermes-agent/issues/7237) | P2 | Response truncated due to output length limit | CLI/Gateway |
| [#57868](https://github.com/NousResearch/hermes-agent/issues/57868) | P2 | Dashboard basic auth crashes with 500 on first page load | Dashboard |
| [#58810](https://github.com/NousResearch/hermes-agent/issues/58810) | P2 | Dashboard: 500 on unauthenticated `/` (auto-SSO redirects into OAuth) | Dashboard |
| [#55498](https://github.com/NousResearch/hermes-agent/issues/55498) | P2 | Dashboard: BasicAuthProvider crashes with NotImplementedError | Dashboard |
| [#58962](https://github.com/NousResearch/hermes-agent/issues/58962) | P2 | Sessions permanently stuck in Stream stale loop | Agent |
| [#60505](https://github.com/NousResearch/hermes-agent/issues/60505) | P2 | Approval gate: fail-closed option gap + permanent allowlist bypasses cron_mode deny | Security |
| [#60502](https://github.com/NousResearch/hermes-agent/issues/60502) | P2 | hermes -z one-shot: SIGABRT (exit 134) at teardown | CLI |
| [#45542](https://github.com/NousResearch/hermes-agent/issues/45542) | P2 | `.update-incomplete` marker causes infinite auto-recovery loop — self-locked | Windows/CLI |
| [#41219](https://github.com/NousResearch/hermes-agent/issues/41219) | P2 | Gateway event loop deadlock within 30-60s on Windows after first crash | Gateway/Windows |

### P3 — Médios

| # | Título | Componente |
|---|--------|------------|
| [#56747](https://github.com/NousResearch/hermes-agent/issues/56747) | **[Windows] Blank terminal console windows flash** | Desktop |
| [#38919](https://github.com/NousResearch/hermes-agent/issues/38919) | **CPU limitation on older MacBooks** | Desktop |
| [#60429](https://github.com/NousResearch/hermes-agent/issues/60429) | Hermes agent keeps violating rules (memory/skills) | Agent |
| [#30220](https://github.com/NousResearch/hermes-agent/issues/30220) | Background Self-Improvement Review misclassifies content | Agent/Memory |
| [#40173](https://github.com/NousResearch/hermes-agent/issues/40173) | Telegram routing to Hermes profiles | Gateway/Telegram |

**Alerta:** O bloco de **Dashboard basic auth** (3 issues duplicados) indica regressão crítica introduzida em v0.18.0 que bloqueia usuários com configuração password-only. O bug #60505 sobre approval gate também merece atenção de segurança urgente.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em Alta (por 👍)

| # | Feature | 👍 | Área |
|---|---------|:---:|------|
| [#38602](https://github.com/NousResearch/hermes-agent/issues/38602) | Desktop Client-Only Installation (thin-client) | 42 | Desktop |
| [#36970](https://github.com/NousResearch/hermes-agent/issues/36970) | First-class remote-client onboarding | 4 | Desktop |
| [#40173](https://github.com/NousResearch/hermes-agent/issues/40173) | Telegram channel_profiles routing | 3 | Gateway |
| [#45935](https://github.com/NousResearch/hermes-agent/issues/45935) | WhatsApp Cloud API message template support | 3 | WhatsApp |
| [#12658](https://github.com/NousResearch/hermes-agent/issues/12658) | Add named LLM model entities in config | 3 | Config |

### PRs de Feature Abertos

| # | Feature | Área |
|---|---------|------|
| [#60507](https://github.com/NousResearch/hermes-agent/pull/60507) | Sessions trace export + HF upload (`sessions export --format trace`) | CLI |
| [#60362](https://github.com/NousResearch/hermes-agent/pull/60362) | Per-session soul_override for API sessions | Agent |
| [#60458](https://github.com/NousResearch/hermes-agent/pull/60458) | Propagate dashboard auth identity to TUI agents | Dashboard/TUI |
| [#48070](https://github.com/NousResearch/hermes-agent/pull/48070) | French (fr) locale for Hermes Desktop | i18n |

**Sinais de Roadmap:** Foco claro em **multi-tenancy** (remote clients, channel routing), **observabilidade** (trace export para HF), e **internacionalização** (locale fr).

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais

1. **Instabilidade do Dashboard v0.18.0:** Usuários reportam crash completo do dashboard ao configurar autenticação básica (password-only), bloqueando acesso em produção. O redirect OAuth automático não funciona com provider password-only, gerando erro 500.

2. **Windows como cidadã de segunda:** Múltiplos bugs específicos de Windows — console windows piscando, event loop deadlock, path non-ASCII causando falha em `stage-native-deps.cjs`, e auto-update loop infinito com `.update-incomplete` marker. Indica dívida técnica em compatibilidade Windows.

3. **Subprocess MCP leaks:** Reportes de memory leaks severos (58.8 GB em 6 dias) em subprocess stdio, causando OOM cascade e webhook pauses. PR [#60509](https://github.com/NousResearch/hermes-agent/pull/60509) endereça todos os 4 paths de leak.

4. **Complexidade de deployment:** Usuários desejam modelos thin-client/desktop conectando a backends remotos, mas fluxo atual sempre bootstrapa runtime local — overhead e fricção para equipes.

### Cenários de Uso Observados

- **Business/Enterprise:** WhatsApp Cloud API para re-engagement fora da 24h window (#[45935](https://github.com/NousResearch/hermes-agent/issues/45935)) — demanda de uma loja de usinagem;
- **Multi-agent orchestration:** Telegram routing para múltiplos perfis/ personas (#[40173](https://github.com/NousResearch/hermes-agent/issues/40173));
- **Cron job reliability:** Cron sessions invisíveis no Desktop até gateway restart (#[43233](https://github.com/NousResearch/hermes-agent/pull/43233) em PR).

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta/Attended por >30 dias

| # | Título | Criado | Comentários | Prioridade |
|---|--------|--------|:-----------:|:----------:|
| [#7237](https://github.com/NousResearch/hermes-agent/issues/7237) | Response truncated due to output length limit | 2026-04-10 | 53 | P2 |
| [#20675](https://github.com/NousResearch/hermes-agent/issues/20675) | hermes debug

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-07-08

---

## 1. Panorama do Dia

O projeto PicoClaw manteve um ritmo de atividade moderado nas últimas 24 horas, com **7 issues e 4 PRs** atualizados. Não houve lançamentos de novas versões, indicando uma fase de estabilização ou desenvolvimento incremental. A maioria das atividades concentra-se em **resolução de bugs**, especialmente relacionados à integração com modelos de IA (Volcengine, OpenAI) e ferramentas OAuth. A issue #3157 (ferramenta Android ADB) foi mergeada, representando o único PR fechado no período. O projeto apresenta **5 issues abertas** que requerem atenção da equipe de mantenedores.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto não publicou novas versões desde o período analisado. A versão mais recente mencionada nos reports de bugs é **v0.2.9** e **v0.3.1** (para o issue #3232), sugerindo que há desenvolvimento ativo em versões mais recentes sem divulgação formal de changelog.

---

## 3. Progresso do Projeto

### PRs Fechados/Mergedos

| # | Título | Impacto |
|---|--------|---------|
| [#3157](https://github.com/sipeed/picoclaw/pull/3157) | feat: add Android ADB remote operations tool | **Alto** — Adiciona ferramenta experimental para operações remotas em dispositivos Android, incluindo listagem, screenshots, taps, swipes, input de texto e eventos de teclas. Não expõe shell arbitrário, indicando foco em segurança. |

### PRs Abertos (Em Progresso)

| # | Título | Tipo | Relevância |
|---|--------|------|------------|
| [#3226](https://github.com/sipeed/picoclaw/pull/3226) | fix(tools): stop write_file from coaching destructive overwrite | Bug fix | **Alta** — Corrige comportamento onde `write_file` induzia o modelo a sobrescrever arquivos existentes. Afeta a ferramenta genérica de memória (`memory/MEMORY.md`). |
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) | refactor(deltachat): cleanup implementation, -320LOC | Refatoração | **Média** — Remove features legadas, renomeia campos (`invite_link` → `join_invite_link`), remove configuração de email por senha (segurança). |
| [#3233](https://github.com/sipeed/picoclaw/pull/3233) | Fix pr 3222 backward compat | Bug fix | **Média** — Garante compatibilidade retroativa após refatoração do deltachat. |

**Análise:** A refatoração do deltachat (#3222) é significativa por reduzir 320 linhas de código, indicando efforts de simplificação técnica. O PR #3226 resolve um problema de UX onde o modelo era "orientado" a sobrescrever arquivos.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| # | Título | Comentários | 👍 | Categoria |
|---|--------|-------------|----|-----------|
| [#3093](https://github.com/sipeed/picoclaw/issues/3093) | [Feature] I need SimpleX or tox | 5 | 1 | **Feature Request** |
| [#3153](https://github.com/sipeed/picoclaw/issues/3153) | Volcengine Doubao Seed tool calls leak as text | 3 | 0 | Bug |
| [#3195](https://github.com/sipeed/picoclaw/issues/3195) | OpenAI GPT does not work on NanoKVM | 2 | 0 | Bug |

### Análise das Demandas

**#3093 — SimpleX/Tox como gateways alternativos:**
Esta issue foi fechada (provavelmente como duplicada ou `wontfix`), mas representa uma demanda clara por **privacidade e descentralização**. Usuários desejam alternativas a gateways tradicionais (Wire, Tox, SimpleX). Isso pode indicar um roadmap hacia suporte a protocolos federados ou mesh.

**#3153 — Vazamento de tool calls do Volcengine Doubao:**
Bugs de parsing de XML/tool calls são críticos pois comprometem a execução de ações autônomas. Afeta a versão v0.2.8 especificamente.

**#3195 — OpenAI GPT no NanoKVM:**
Interoperabilidade entre hardware (NanoKVM) e provedores de IA (GPT-5.4) quebrada com configuração padrão. Pode indicar文档 lacunas ou mudanças de API.

---

## 5. Bugs e Estabilidade

### Issues Abertas por Severidade

| Severidade | # | Título | Descrição |
|------------|---|--------|-----------|
| **Alta** | [#3153](https://github.com/sipeed/picoclaw/issues/3153) | Volcengine Doubao tool calls vazam como texto | Tool calls são retornados como `<seed:tool_call>` ao invés de executados. Afeta produto pago (Coding Plan). |
| **Alta** | [#3232](https://github.com/sipeed/picoclaw/issues/3232) | Rate limiting não funciona sem fallback | RPM config ignorado quando só `agents.defaults.model_name` está configurado (sem fallbacks). |
| **Média** | [#3195](https://github.com/sipeed/picoclaw/issues/3195) | GPT não funciona no NanoKVM | Configuração padrão não funciona com GPT-5.4 no novo hardware. |
| **Média** | [#3196](https://github.com/sipeed/picoclaw/issues/3196) | OAuth login quebrado (Codex/antygravity) | Autenticação OAuth não funciona — dois reports duplicados (#3196, #3197). |
| **Baixa** | [#3197](https://github.com/sipeed/picoclaw/issues/3197) | Mesmo que #3196 | Duplicata — indica possível widespread issue. |

### Issues Fechadas (Resolvidas)

| # | Título | Resolução |
|---|--------|-----------|
| [#3159](https://github.com/sipeed/picoclaw/issues/3159) | Tarefas repetitivas | Fechada como stale — possivelmente não reproduzível ou duplicada. |
| [#3093](https://github.com/sipeed/picoclaw/issues/3093) | SimpleX/Tox gateway | Fechada stale — feature request não priorizada. |

**Resumo de Estabilidade:** O projeto apresenta **3 bugs de alta prioridade** abertos, concentrados em integrações de API externas e rate limiting. A presença de 2 issues duplicadas (#3196, #3197) sugere falta de triagem timely.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Feature Requests Ativas

| # | Título | Status | Sinal de Roadmap |
|---|--------|--------|------------------|
| [#3093](https://github.com/sipeed/picoclaw/issues/3093) | SimpleX/Tox gateway | Closed/Stale | **Privacidade e descentralização** — Demanda por protocolos alternativos a Wire/Signal. |
| [#3157](https://github.com/sipeed/picoclaw/pull/3157) | Android ADB tool | **Merged** | **Suporte mobile** — Ferramenta experimental para controle de dispositivos Android. |

### Tendências Identificadas

1. **Expansão de integrações de IA:** Mais vendors sendo suportados (Volcengine, NanoKVM), indicando estratégia de agnosticismo de modelo.
2. **Segurança em primeiro plano:** PR #3222 remove autenticação por senha em favor de secrets via JSON-RPC.
3. **Suporte a dispositivos físicos:** Ferramenta ADB indica interesse em automação mobile.
4. **Federación e privacidade:** Demanda por SimpleX/Tox pode guiar future features.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Dor | Frequência | Contexto |
|-----|------------|----------|
| **Integração quebrada com provedores de IA** | Alta | Volcengine Doubao, OpenAI GPT no NanoKVM — configuraçõesser não funcionam out-of-the-box. |
| **Rate limiting inútil** | Alta | Usuários que configuram apenas um modelo sem fallbacks não têm controle de RPM. |
| **Autenticação OAuth falha** | Média | Codex e antygravity OAuth não funcionam (2 reports). |
| **Comportamento imprevisível de tarefas** | Baixa | Tarefas repetitivas reportadas em deepseek-v4. |

### Cenários de Uso Observados

- **Automação de desktop KVM:** NanoKVM como hardware novo sendo adotado.
- **Desenvolvimento mobile:** Ferramenta ADB experimental.
- **Chat federado:** Deltachat como canal de comunicação (refatoração em #3222).
- **Clientes enterprise:** Volcengine Coding Plan usado em produção.

### Satisfação Geral

**Tendência: Neutra a negativa no curto prazo.** Bugs de integração com provedores de IA (impactando experiência de usuário paying) e falhas de autenticação são problemas críticos. No entanto, a presença de PRs de qualidade (#3157, #3222, #3226) indica desenvolvimento ativo e responsivo.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta há Tempo

| # | Título | Idade | Prioridade | Motivo da Atenção |
|---|--------|-------|------------|-------------------|
| [#3196](https://github.com/sipeed/picoclaw/issues/3196) | OAuth login quebrado | ~8 dias | **Alta** | 2 usuários afetados (duplicata #3197), sem resposta da equipe. |
| [#3197](https://github.com/sipeed/picoclaw/issues/3197) | OAuth login quebrado | ~8 dias | **Alta** | Mesma issue, ainda sem triagem. |
| [#3153](https://github.com/sipeed/picoclaw/issues/3153) | Volcengine tool calls vazando | ~16 dias | **Alta** | Afeta produto pago; 3 comentários, sem fix ainda. |
| [#3232](https://github.com/sipeed/picoclaw/issues/3232) | Rate limiting | 1 dia | **Alta** | Bug funcional, recém-reportado. |

### PRs Bloqueados

| # | Título | Status | Bloqueio |
|---|--------|--------|----------|
| [#3233](https://github.com/sipeed/picoclaw/pull/3233) | Backward compat fix | Aberto | Aguardando review para merge da refatoração #3222. |
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) | Deltachat refactor | Aberto | Sem timeline de merge. |

### Recomendações para Mantenedores

1. **Triagem urgente:** Issues #3196 e #3197 estão há 8 dias sem resposta.
2. **Priorizar #3153:** Bug afeta ferramenta de produção (Volcengine Coding Plan).
3. **Review #3222/#3233:** A refatoração de 320 LOC está pronta; perluir para limpar o codebase.
4. **Documentar configuração de rate limiting:** Issue #3232 indica lacuna de documentação ou DX.

---

## Métricas Resumidas (2026-07-08)

| Métrica | Valor |
|---------|-------|
| Issues abertas/ativas | 5 |
| Issues fechadas | 2 |
| PRs abertos | 3 |
| PRs mergeados | 1 |
| Releases | 0 |
| Bugs alta prioridade | 3 |
| PRs aguardando review | 2 |

**Veredicto:** Projeto ativo mas com debt técnico em bugs de integração. A ausência de releases recentes e a presença de issues stale sugerem necessidade de sprint de triagem e release management.

---

*Relatório gerado automaticamente com base em dados do GitHub de [sipeed/picoclaw](https://github.com/sipeed/picoclaw) para 2026-07-08.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório de Projeto — IronClaw
**Data:** 2026-07-08 | **Repositório:** [nearai/ironclaw](https://github.com/nearai/ironclaw)

---

## 1. Panorama do dia

O projeto IronClaw apresenta alta atividade de desenvolvimento em 2026-07-07. Nas últimas 24 horas, foram registradas **33 issues atualizadas** (24 abertas, 9 fechadas) e **50 PRs** (39 abertos, 11 fechados/merged), indicando um ritmo intenso de trabalho. **Nenhuma release foi publicada** no período, embora a versão `0.29.1` do `ironclaw` tenha sido publicada recentemente via PR [#5598](https://github.com/nearai/ironclaw/pull/5598). O foco principal continua sendo a **refatoração do Slack OAuth** (stack 7/7) e a estabilização do motor Reborn, com atividades paralelas em performance do materializer de banco de dados e correções de bugs no front-end WebUI v2.

---

## 2. Lançamentos

### Release mais recente: v0.29.1
**PR:** [#5598](https://github.com/nearai/ironclaw/pull/5598) — `chore: release`

| Pacote | Versão Anterior | Nova Versão | Tipo de Mudança |
|---|---|---|---|
| `ironclaw_common` | 0.4.2 | **0.5.0** | ⚠️ Breaking API |
| `ironclaw_skills` | 0.3.0 | **0.4.0** | ⚠️ Breaking API |
| `ironclaw` | 0.24.0 | **0.29.1** | Múltiplas mudanças |
| `ironclaw_safety` | 0.2.2 | 0.2.3 | ✓ API compatível |
| `ironclaw_skill_learning` | 0.1.0 | 0.1.1 | ✓ API compatível |

**Nota:** AsQuebras de API em `ironclaw_common` e `ironclaw_skills` podem exigir adaptação de dependentes. Nenhuma nota de migração detalhada foi incluída no PR; consumidores devem revisar os changelogs internos antes de atualizar.

---

## 3. Progresso do Projeto

### PRs fechados/merged hoje

| PR | Título | Impacto |
|---|---|---|
| [#5751](https://github.com/nearai/ironclaw/pull/5751) | fix(filesystem): pool libSQL connections to stop concurrent-CAS SQLITE_MISUSE | **Crítico** — Corrige ~10% de falhas em turnos paralelos resolvendo vazamento de conexões libSQL sob CAS storms |
| [#5661](https://github.com/nearai/ironclaw/pull/5661) | test(reborn): CAS-contention + discard-tombstone coverage; fix #5467 | **Robustez** — Adiciona teste de contenção CAS real e corrige paridade do InMemory store |
| [#5698](https://github.com/nearai/ironclaw/pull/5698) | fix(bug_bash_P3): Surface tool permission save failures in WebUI v2 | **UX** — Falhas de salvamento de permissões agora são visíveis ao usuário |
| [#5554](https://github.com/nearai/ironclaw/pull/5554) | fix(bug_bash_P2): Mobile chat layout breaks with horizontal overflow | **UX Mobile** — Corrige scrollbar horizontal e overflow em dispositivos móveis |
| [#5694](https://github.com/nearai/ironclaw/pull/5694) | fix(bug_bash_P2): clientActionId() throws on insecure origins | **Segurança/Compat** — Restaura mutating requests em self-hosted HTTP |
| [#5696](https://github.com/nearai/ironclaw/pull/5696) | fix(bug_bash_P2): Hide unsupported operator-config fields from WebUI v2 | **UX** — Remove campos de configuração não suportados da UI |
| [#5572](https://github.com/nearai/ironclaw/pull/5572) | fix: HookedLoopCheckpointPort forwarding payloads | **Core** — Corrige falha em checkpoints com hooks habilitados |
| [#5722](https://github.com/nearai/ironclaw/pull/5722) | fix: gate-dispatch coverage lane unreachable at int tier | **Testes** — Habilita teste real de submit_inbound Approval/AuthResolution |

### Destaque: Correção de conexão libSQL (#[5751](https://github.com/nearai/ironclaw/pull/5751))
O bug #5466, que causava ~10% de falhas em runs concorrentes contra `FilesystemTurnStateStore`, foi finalmente resolvido. A causa raiz era a criação de uma **nova conexão SQLite para cada operação**, causando `SQLITE_MISUSE` sob contenção. A solução implementa **pooling de conexões libSQL**.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento

| Issue | Título | Comentários | Reações | Prioridade |
|---|---|---|---|---|
| [#5702](https://github.com/nearai/ironclaw/issues/5702) | GitHub integration fails with HTTP 403 | **4** | 0 | P2 |
| [#5747](https://github.com/nearai/ironclaw/issues/5747) | No way to unpair Slack | 2 | 0 | Reborn |
| [#5701](https://github.com/nearai/ironclaw/issues/5701) | Activity panel hides tool details during active run | 2 | 0 | P2 |
| [#5704](https://github.com/nearai/ironclaw/issues/5704) | Image preview becomes transparent during chat | 2 | 0 | P3 |
| [#5553](https://github.com/nearai/ironclaw/issues/5553) | Approval notifications disappear | 2 | 0 | P2 |

### Análise das demandas

**GitHub Integration HTTP 403 (#5702)** — Esta é a issue mais comentada do dia. O agente não consegue usar a integração GitHub para buscar ou criar issues, retornando `operation_failed` com HTTP 403. Usuários que dependem de automações baseadas em GitHub estão bloqueados. **Demanda crítica para correção.**

**Slack Unpairing (#5747)** — Usuários da Slack integration não têm como desfazer o pairing. O comando `/pair` informa "You're already connected" e a WebUI não oferece opção de disconnect para o mount built-in `slack-v2-host-beta`. **Problema de UX blocking.**

**Activity Panel (#5701)** — Durante runs ativos, o painel de Activity colapsa os detalhes das ferramentas em uma linha sumária ("Activity - N tools") sem mostrar quais ferramentas foram chamadas ou seus retornos. A atualização em tempo real também falha. **Impacto na depuração de automações.**

---

## 5. Bugs e Estabilidade

### Por Severidade

#### 🔴 P1 — Crítico
| Issue | Título | Status |
|---|---|---|
| [#3535](https://github.com/nearai/ironclaw/issues/3535) | UI Timestamps are incorrect for conversations | **OPEN** (desde 2026-05-12) |

#### 🟠 P2 — Alto
| Issue | Título | Status |
|---|---|---|
| [#5702](https://github.com/nearai/ironclaw/issues/5702) | GitHub integration fails with HTTP 403 | **OPEN** |
| [#5701](https://github.com/nearai/ironclaw/issues/5701) | Activity panel hides tool details during active run | **OPEN** |
| [#5553](https://github.com/nearai/ironclaw/issues/5553) | Approval notifications disappear | **OPEN** |
| [#5708](https://github.com/nearai/ironclaw/issues/5708) | Error banners displayed outside chat message stream | **OPEN** |
| [#3081](https://github.com/nearai/ironclaw/issues/3081) | Portfolio extension shows misleading "Configure" button | **OPEN** |
| [#4338](https://github.com/nearai/ironclaw/issues/4338) | Disconnected state shows misleading execution driver error | **OPEN** |
| [#5776](https://github.com/nearai/ironclaw/issues/5776) | Long-output prompt causes repeated model timeouts | **OPEN** |

#### 🟡 P3 — Médio
| Issue | Título | Status |
|---|---|---|
| [#5704](https://github.com/nearai/ironclaw/issues/5704) | Image preview becomes transparent during chat | **OPEN** |
| [#5705](https://github.com/nearai/ironclaw/issues/5705) | Terminal icon has no disable option | **OPEN** |
| [#5706](https://github.com/nearai/ironclaw/issues/5706) | Sidebar shows raw thread ID when lagging | **OPEN** |
| [#5557](https://github.com/nearai/ironclaw/issues/5557) | Logs deep link requires opening twice | **OPEN** |
| [#5419](https://github.com/nearai/ironclaw/issues/5419) | No option to rename an automation | **OPEN** |

### Observações de Estabilidade
- **Nightly E2E (#4108)** — O job de E2E noturno falhou novamente em 2026-07-07, especificamente em `E2E (web-regressions)`. Este é um problema recorrente que pode indicar regressões não detectadas antes do merge.
- **Performance DB (#5762)** — O materializer de row-store HST Postgres recuperou as gates de latência p95, mas o **throughput ainda está abaixo do high-water mark anterior**. O fix de starvation foi implementado, mas o materializer precisa ficar mais barato.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Propostas

| Issue/PR | Título | Escopo | Observação |
|---|---|---|---|
| [#5770](https://github.com/nearai/ironclaw/issues/5770) | Improve Reborn tool permission selects with custom dropdown | WebUI v2 | Request por dropdown customizado no lugar de `<select>` nativo; alinhamento visual com dark mode |
| [#5768](https://github.com/nearai/ironclaw/issues/5768) | Reborn Projects page has incomplete i18n coverage | WebUI v2 / i18n | Cobertura parcial de internacionalização; labels em inglês em interface em chinês |
| [#5741](https://github.com/nearai/ironclaw/issues/5741) | builtin.http.save can fail with OutputTooLarge | Tool/builtin | Request para lidar com respostas grandes sem falhar |
| [#5762](https://github.com/nearai/ironclaw/issues/5762) | perf(turns): recover row-store materializer throughput | Performance/DB | Melhorar throughput do materializer após fix de starvation |
| [#5781](https://github.com/nearai/ironclaw/pull/5781) | feat(stress): add API capacity workload | Stress Testing | Adiciona cenário `api-user-capacity` para fluxos completos de API user |

### Indicadores de Roadmap
1. **Slack OAuth Migration** — A stack 7/7 está em PRs abertos (#[5668](https://github.com/nearai/ironclaw/pull/5668), #[5670](https://github.com/nearai/ironclaw/pull/5670), #[5693](https://github.com/nearai/ironclaw/pull/5693)), indicando que a transição de pairing codes para OAuth pessoal está próxima de conclusão.
2. **pnpm Migration** — PR [#5729](https://github.com/nearai/ironclaw/pull/5729) move o frontend WebUI para pnpm, sinalizando padronização de tooling.
3. **Subagent Thread Harness** — PR [#5748](https://github.com/nearai/ironclaw/pull/5748) documenta o design de thread-harness para subagents, sugerindo evolução da arquitetura multi-agente.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Categoria | Descrição | Frequência |
|---|---|---|
| **Integração GitHub** | Bloqueio total da integração GitHub (HTTP 403) impede automações baseadas em issues/PRs | Múltiplos reportes |
| **Slack Pairing** | Impossibilidade de desfazer pairing no Slack é UX blocker significativo | Reportado |
| **Notificações de Aprovação** | Notificações desaparecem ao invés de persistir no histórico, confundindo usuários | Reportado |
| **Timestamps** | Horários incorretos em conversas causam confusão sobre chronology de mensagens | Aberto desde Mai/2026 |
| **Erro Genérico** | Falhas de timeout degeneram em "invalid result" sem causa raiz visível (#5776) | Reportado |

### Cenários de Uso Bloqueados
1. **Automação GitHub** — Usuários que dependem do agente para buscar/criar issues estão completamente bloqueados.
2. **Fluxo de Aprovação** — Notificações que desaparecem comprometem a UX de automações que requerem aprovação humana.
3. **Depuração de Runs** — O painel de Activity que não atualiza em tempo real dificulta o acompanhamento de runs longos.

### Satisfação
- A correção do bug de mobile layout (#5554) e a melhoria na visibilidade de erros de permissão (#5698) foram bem recebidas indiretamente pela comunidade.

---

## 8. Backlog que Merece Atenção

### Issues antigas sem resolução

| Issue | Título | Criada | Idade | Prioridade | Nota |
|---|---|---|---|---|---|
| [#3535](https://github.com/nearai/ironclaw/issues/3535) | UI Timestamps are incorrect | 2026-05-12 | **~57 dias** | P1 | Bug crítico de UX sem perhatian |
| [#3083](https://github.com/nearai/ironclaw/issues/3083) | Duplicate user creation | 2026-04-29 | **~70 dias** | P2 | **Fechada recentemente** ✓ |
| [#3081](https://github.com/nearai/ironclaw/issues/3081) | Portfolio "Configure" button misleading | 2026-04-29 | **~70 dias** | P2 | Aguardando ação |
| [#410

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório de Projeto — CoPaw (QwenPaw)

**Data de referência:** 2026-07-08  
**Período analisado:** Últimas 24 horas

---

## 1. Panorama do Dia

O projeto CoPaw (QwenPaw) manteve **alta atividade** em 07/07, com 17 issues e 38 PRs atualizados. A comunidade está claramente focada na estabilização da versão 2.0.0-beta.3, com ao menos 3 issues de release duty ativas e vários PRs de bug fixes merged. Destacam-se problemas críticos no frontend com sessões grandes, bugs de segurança no file_guard (bypass de `find -delete`), e uma release post (v1.1.12.post3) confirmando manutenção ativa da branch estável. O ecossistema de plugins e channels está em expansão com PRs significativos mergeados.

---

## 2. Lançamentos

### v2.0.0-beta.3
- **Status:** Beta — verificação de instalação em andamento ([Issue #5833](https://github.com/agentscope-ai/QwenPaw/issues/5833))
- **Mudanças documentadas no changelog:**
  - `fix(ci)`: proteção contra expansão vazia de `extra_flags` para bash 3.2 no macOS ([PR #5743](https://github.com/agentscope-ai/QwenPaw/pull/5743))
  - `feat(auth)`: proteção rate limiting multidimensional ([PR #5738](https://github.com/agentscope-ai/QwenPaw/pull/5738))

### v1.1.12.post3
- **Status:** Post-release — verificação concluída com sucesso ([Issue #5819](https://github.com/agentscope-ai/QwenPaw/issues/5819))
- **Natureza:** Patch de manutenção na branch estável 1.x

> **Nota:** Não foram identificadas breaking changes ou notas de migração nos dados disponíveis para esta release.

---

## 3. Progresso do Projeto

### PRs Merged/Closed Relevantes (últimas 24h)

| PR | Tipo | Impacto | Link |
|---|---|---|---|
| #5786 | Bug fix (3 correções) | Conserta match de modelo por id+provider_id, erro `agentscope_msg_to_message`, e `memory_interval` ([PR #5786](https://github.com/agentscope-ai/QwenPaw/pull/5786)) |
| #5820 | Feature | Auto memory search com accounting de uso e embeddings backend-specific ([PR #5820](https://github.com/agentscope-ai/QwenPaw/pull/5820)) |
| #4693 | Feature | Sistema de plugins com canais customizados e UI gerada por schema ([PR #4693](https://github.com/agentscope-ai/QwenPaw/pull/4693)) |
| #5832 | Feature | Remove modo default do session approval level ([PR #5832](https://github.com/agentscope-ai/QwenPaw/pull/5832)) |
| #5585 | Feature | Modo streaming no Matrix (similar Discord) ([PR #5585](https://github.com/agentscope-ai/QwenPaw/pull/5585)) |
| #5827 | Bug fix | Sanitiza `const` Schema fields para parâmetros Gemini tools ([PR #5827](https://github.com/agentscope-ai/QwenPaw/pull/5827)) |
| #5831 | Bug fix | Trata objetos `TextBlock` no offloader ([PR #5831](https://github.com/agentscope-ai/QwenPaw/pull/5831)) |
| #5837 | Chore | Bump versão para 2.0.0b4 — preparando próximo beta ([PR #5837](https://github.com/agentscope-ai/QwenPaw/pull/5837)) |

### PRs Abertos com Alto Impacto

| PR | Tipo | Descrição | Link |
|---|---|---|---|
| #5843 | Security Bug Fix | Detecta `find -delete` como comando perigoso (corrige bypass do file_guard) | [PR #5843](https://github.com/agentscope-ai/QwenPaw/pull/5843) |
| #5187 | Feature | Automação GUI Windows desktop com UIA + Tauri (computer-use) | [PR #5187](https://github.com/agentscope-ai/QwenPaw/pull/5187) |
| #5669 | Feature | Adiciona qwen3-rerank ao memory search | [PR #5669](https://github.com/agentscope-ai/QwenPaw/pull/5669) |
| #5814 | Feature | Bundle Node runtime para ACP desktop | [PR #5814](https://github.com/agentscope-ai/QwenPaw/pull/5814) |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários + reações)

1. **#5401 — Console crash com grandes históricos de tool-use**  
   - **Comentários:** 15 | **Status:** Aberta  
   - **Resumo:** Sessões com大量工具调用历史导致前端崩溃/白屏，无法渲染内容。 Root cause identificado: `agentscope_msg_to_message()` converte `tool_use` em `type: "data"` mas frontend só processa `type: "tool_use"`.  
   - **Análise:** Bug crítico de estabilidade no core frontend. Afeta usuários com sessões longas (common em coding agents).  
   - **Link:** [Issue #5401](https://github.com/agentscope-ai/QwenPaw/issues/5401)

2. **#5273 — v2.0.0 Pre-release Bug & Issue Tracker**  
   - **Comentários:** 10 | **Reações:** 👍 1 | **Status:** Aberta  
   - **Resumo:** Issue centralizada para tracking de bugs da pré-release 2.0.0.  
   - **Análise:** Hub de coordenação para transição para v2. Indica maturidade do processo de release.  
   - **Link:** [Issue #5273](https://github.com/agentscope-ai/QwenPaw/issues/5273)

3. **#5479 — Sessões >500KB causam erro de renderização**  
   - **Comentários:** 6 | **Status:** Aberta  
   - **Resumo:** Frontend crash ao abrir会话文件 grandes (>500KB). Proposta solução: carregamento progressivo.  
   - **Análise:** Correlaciona-se com #5401 — problema de performance do frontend com dados massivos.  
   - **Link:** [Issue #5479](https://github.com/agentscope-ai/QwenPaw/issues/5479)

4. **#5797 — Toggle para notificação de tarefas agendadas**  
   - **Comentários:** 4 | **Status:** Aberta  
   - **Resumo:** Usuários querem controle granular sobre弹出提醒 de tasks. Decisão anterior de desabilitar afetou negativamente alguns.  
   - **Análise:** Discussão sobre UX e defaults. Indica necessidade de configuração por usuário.  
   - **Link:** [Issue #5797](https://github.com/agentscope-ai/QwenPaw/issues/5797)

### PRs com Maior Engajamento (comentários implícitos por свежие correções)

| PR | Tema | Relevância |
|---|---|---|
| #5841 | Recovery de JSON whitespace-prefixed em tool-calls | Alto — melhora robustez de parsing |
| #5840 | Opção `show_file` no grep_search | Médio — UX improvement |
| #5836 | Detecção de caminhos locais no chat do Desktop | Alto — feature requests recorrente |
| #5834 | Suporte a pipe-separated literals no grep | Médio — bug fix de regressão |

---

## 5. Bugs e Estabilidade

### 🔴 Críticos (afetam funcionalidades core ou causam crashes)

| Issue | Descrição | Severidade | Link |
|---|---|---|---|
| #5401 | Console crash com tool-use history massivo | **Crítica** | [Issue #5401](https://github.com/agentscope-ai/QwenPaw/issues/5401) |
| #5479 | Sessões >500KB crasham frontend | **Crítica** | [Issue #5479](https://github.com/agentscope-ai/QwenPaw/issues/5479) |
| #5842 | `find -delete` bypassa file_guard (vulnerabilidade) | **Crítica** (Security) | [Issue #5842](https://github.com/agentscope-ai/QwenPaw/issues/5842) |
| #5829 | Windows AppContainer ACE pollui diretórios do sistema | **Crítica** | [Issue #5829](https://github.com/agentscope-ai/QwenPaw/issues/5829) |

### 🟠 Altos (regressões ou bugs significativos)

| Issue | Descrição | Link |
|---|---|---|
| #5789 | Context compression crash com JSON Schema maxLength | [Issue #5789](https://github.com/agentscope-ai/QwenPaw/issues/5789) |
| #5775 | Auto-memory interval não persiste (regression) — **CLOSED** | [Issue #5775](https://github.com/agentscope-ai/QwenPaw/issues/5775) |
| #5774 | Google Gemini channel报错 — **CLOSED** | [Issue #5774](https://github.com/agentscope-ai/QwenPaw/issues/5774) |
| #5759 | Plan mode lê mesmo arquivo 5+ vezes | [Issue #5759](https://github.com/agentscope-ai/QwenPaw/issues/5759) |

### 🟡 Medios (bugs com workarounds ou impacto limitado)

| Issue | Descrição | Link |
|---|---|---|
| #5788 | Skills list só mostra 20 items (scroll não funciona) | [Issue #5788](https://github.com/agentscope-ai/QwenPaw/issues/5788) |
| #5835 | `/stop` command afeta outros usuários em DM (isolamento) | [Issue #5835](https://github.com/agentscope-ai/QwenPaw/issues/5835) |
| #5785 | Não consegue selecionar pastas ocultas em coding mode — **CLOSED** | [Issue #5785](https://github.com/agentscope-ai/QwenPaw/issues/5785) |

> **Métricas de estabilidade:** 4 bugs críticos abertos, 2 bugs críticos fechados nas últimas 24h (taxa de resolução: 50%). A grande quantidade de crashes relacionados a sessões grandes indica dívida técnica em renderização/serialização de dados massivos.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Abertas

| Issue | Descrição | Sinais de Roadmap | Link |
|---|---|---|---|
| #5797 | Toggle para popup de tarefas agendadas | Configurabilidade por usuário | [Issue #5797](https://github.com/agentscope-ai/QwenPaw/issues/5797) |
| #5312 | Desktop: minimizar para system tray ao fechar | Feature de UX Desktop | [Issue #5312](https://github.com/agentscope-ai/QwenPaw/issues/5312) |
| #5821 | Granular `rejects_media` capability (por tipo) | Melhoria de robustês de canais | [Issue #5821](https://github.com/agentscope-ai/QwenPaw/issues/5821) |

### Features em Desenvolvimento (PRs Abertos)

| PR | Feature | Potencial Impacto | Link |
|---|---|---|---|
| #5187 | Windows GUI automation (UIA + Tauri) | Computer-use nativo Windows | [PR #5187](https://github.com/agentscope-ai/QwenPaw/pull/5187) |
| #5669 | qwen3-rerank no memory search | Melhoria de recall de memória | [PR #5669](https://github.com/agentscope-ai/QwenPaw/pull/5669) |
| #5836 | Detectar caminhos locais no chat e abrir explorer | UX Desktop melhorada | [PR #5836](https://github.com/agentscope-ai/QwenPaw/pull/5836) |
| #5826 | Avatar field em agent profile config | Customização de agentes | [PR #5826](https://github.com/agentscope-ai/QwenPaw/pull/5826) |
| #5814 | Bundle Node runtime para ACP desktop | Redução de fricção de setup | [PR #5814](https://github.com/agentscope-ai/QwenPaw/pull/5814) |

### Análise de Tendências

1. **Desktop é foco:** Múltiplas features (system tray, local path detection, Node runtime bundling) indicam investimento na experiência Desktop.
2. **Memory/RAG:** Emomentum com qwen3-rerank e auto memory improvements.
3. **Segurança:** O file_guard bypass highlight mostra atenção crescente à sandboxing.
4. **Multi-canal:** Sistema de plugins para channels (#4693 merged) prepara extensibilidade.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Categoria | Problema | Sentimento |
|---|---|---|
| **Estabilidade Frontend** | Sessões longas crasham — "rendering error" em >500KB ([#5479](https://github.com/agentscope-ai/QwenPaw/issues/5479)) | Frustração alta |
| **Segurança** | `find -delete` não bloqueado pelo file_guard ([#5842](https://github.com/agentscope-ai/QwenPaw/issues/5842)) | Preocupação |
| **UX/Defaults** | Decisões de design "um tamanho único" não funcionam —弹出提醒 desabilitado afetou quem precisava ([#5797](https://github.com/agentscope-ai/QwenPaw/issues/5797)) | Insatisfação |
| **Desktop UX** | "点关闭就直接退出了，想再使用还得重新启动" ([#5312](https://github.com/agentscope-ai/QwenPaw/issues/5312)) | Forte demanda |

### Cenários de Uso Emergentes

1. **Coding agents com sessões longas:** Múltiplas issues sobre arquivos grandes, repetição de leitura, tool history massivo.
2. **Desktop como app principal:** System tray, minimização, execução de tasks em background.
3. **Uso multi-usuário (DM):** Problema de isolamento em DingTalk DM — ([#5835](https://github.com/agentscope-ai/QwenPaw/issues/5835)).

### Feedback Positivo (implícito)

- Sistema de plugins para canais ([#4693](

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-07-08

## 1. Panorama do Dia

O projeto ZeroClaw apresenta alta atividade de desenvolvimento em 08/07/2026, com 50 PRs atualizados e 28 issues movimentadas nas últimas 24h. Não houve lançamentos de novas versões, indicando que a equipe está em ciclo de integração intensiva antes de um próximo release. Observa-se foco significativo em segurança (SSRF, multi-user auth, tool bypass) e performance (memory leaks em tool schemas e MCP), além de trabalhos em andamento em features de UX (SOP authoring, web dashboard, voice channels). A saúde geral do projeto é boa, mas com 4 bugs classificados como P1 demandando atenção prioritária.

---

## 2. Lançamentos

**Nenhum release nas últimas 24h.**

O projeto não publicou novas versões. Para context, o tracker [v0.8.3](https://github.com/zeroclaw-labs/zeroclaw/issues/8073) está em andamento, cobrindo observability, CI, docs e dependências. O release anterior (v0.8.2) foi referenciado em issues de UI.

---

## 3. Progresso do Projeto

### PRs Fechados/Merged (9 total)

| # | PR | Resumo | Impacto |
|---|-----|--------|---------|
| [#8818](https://github.com/zeroclaw-labs/zeroclaw/pull/8818) | Bump crossbeam-epoch 0.9.18→0.9.20 | Corrige RUSTSEC-2026-0204 (invalid pointer dereference) | 🔴 Segurança |
| [#8814](https://github.com/zeroclaw-labs/zeroclaw/pull/8814) | Fix 8757 channels clean | Limpa canais corretamente | 🟡 UX |
| [#8809](https://github.com/zeroclaw-labs/zeroclaw/pull/8809) | Add Global Settings entry to Channels | Melhora descobribilidade de configurações | 🟡 UX |

### PRs Abertos de Destaque (Work in Progress)

| # | PR | Resumo | Tamanho | Risco |
|---|-----|--------|---------|-------|
| [#8590](https://github.com/zeroclaw-labs/zeroclaw/pull/8590) | feat(sop): visual authoring | Editor visual SOP, channel fan-in, testes | XL | 🔴 High |
| [#8672](https://github.com/zeroclaw-labs/zeroclaw/pull/8672) | feat(security): multi-user auth | Auth providers, permission profiles, principal isolation | XL | 🔴 High |
| [#8384](https://github.com/zeroclaw-labs/zeroclaw/pull/8384) | feat(inkbox): native Inkbox channel | Email + SMS + Voice + iMessage com Quickstart | XL | 🔴 High |
| [#8817](https://github.com/zeroclaw-labs/zeroclaw/pull/8817) | Arc-share tool schemas | Elimina clone churn em tool schemas MCP | S | 🟢 |
| [#8816](https://github.com/zeroclaw-labs/zeroclaw/pull/8816) | Hot-reload log persistence | Resolve #8314 sem restart do daemon | S | 🟢 |
| [#8790](https://github.com/zeroclaw-labs/zeroclaw/pull/8790) | Sync Fluent locale catalogues | Sincroniza es, fr, ja, zh-CN | S | 🟢 |

---

## 4. Temas Quentes da Comunidade

### Issues com Mais Comentários (Top 5)

1. **[#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155)** — RFC: Per-execution confirmation tier para shell commands
   - 6 comentários | P1 | Security/Runtime
   - **Demanda**: Adicionar tier intermediário "ask" para comandos shell de alto risco (entre allow/deny), inspirado no Claude Code
   - **Análise**: RFC maduro com discussão ativa; representa mudança significativa no modelo de segurança

2. **[#7952](https://github.com/zeroclaw-labs/zeroclaw/issues/7952)** — Publish full-channel prebuilt assets
   - 5 comentários | P2 | **Blocked** (Needs-maintainer-review)
   - **Demanda**: Bundles prebuilt separados por canal para reduzir bundle default
   - **Análise**: Bloqueado aguardando revisão de mantenedor; impacto direto na DX de instalação

3. **[#8314](https://github.com/zeroclaw-labs/zeroclaw/issues/8314)** — Hot-reload log persistence config
   - 3 comentários | P2 | PR #8816 em andamento
   - **Demanda**: Reload de configurações de log sem restart
   - **Análise**: PR pronto para merge, feature de observability bem solicitada

4. **[#6970](https://github.com/zeroclaw-labs/zeroclaw/issues/6970)** — Tracker v0.8.1 integration queue (🔒 **CLOSED**)
   - 3 comentários | Tracker
   - **Status**: Concluído, marcando fila v0.8.1 como entregue

5. **[#6698](https://github.com/zeroclaw-labs/zeroclaw/issues/6698)** — Fluent locale files lag English
   - 3 comentários | P2 | Bug
   - **Demanda**: Locale zh-CN incompleto (falta `tools.ftl`)
   - **Análise**: Bug de i18n identificado; PR #8790 já corrige

### PRs com Maior Engajamento

- **[#8590](https://github.com/zeroclaw-labs/zeroclaw/pull/8590)** — SOP visual authoring: XL PR com 50+ labels, entrada Beta Testers
- **[#8672](https://github.com/zeroclaw-labs/zeroclaw/pull/8672)** — Multi-user auth: RFC #7141 implementado, 35+ labels, alta complexidade
- **[#8817](https://github.com/zeroclaw-labs/zeroclaw/pull/8817)** — Arc-share tool schemas: Resolve memory leak crítico #8642

---

## 5. Bugs e Estabilidade

### 🔴 P1 — Críticos (4 issues abertas + 2 fechadas)

| # | Bug | Severidade | Status | Link |
|---|-----|------------|--------|------|
| #8753 | CI: `rust_quality_gate.sh` não detecta falhas em member-crate test targets | S2 | Open | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8753) |
| #8642 | MCP/tool-schema cloning → unbounded RSS growth | S1 | Open, PR #8817 | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8642) |
| #8678 | `advance_step` sem run-status guard → bypass approval gate | S2 | 🔒 Closed | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8678) |
| #8675 | Malformed native tool-call arguments → provider 400 → empty reply | S1 | Open, PR #8749 | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8675) |
| #8804 | Skills prompt lista ferramentas incorretamente (MCP missing) | P1 | Open | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8804) |
| #8787 | Skill-registered tools bypass `allowed_tools/excluded_tools` | P1 | Open | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8787) |
| #8519 | wasmtime-wasi CVEs não rastreadas no audit (RUSTSEC drift) | High | In-Progress | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8519) |

### 🟠 P2 — S1/S2 (Degraded Behavior)

| # | Bug | Severidade | Link |
|---|-----|------------|------|
| #8794 | Parar agente mid-work apaga tool calls e thinking | S1 | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8794) |
| #8800 | Windows: processo morto deixa porta bindada, daemon não reinicia | S2 | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8800) |
| #6698 | Locale files zh-CN incompletos | S2 | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6698) |

### 🟡 P3/S3 — Minor

| # | Bug | Severidade | Link |
|---|-----|------------|------|
| #8791 | Sidebar com width incorreto causa scrollbar horizontal | S3 | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8791) |
| #8797 | bind-telegram referencia propriedade de config desconhecida | S3 | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8797) |
| #8810 | Documentação do Telegram está incorreta | S2 | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8810) |
| #8792 | Sidebar missing Skills navigation entry | S2 | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8792) |

**Análise de Estabilidade**: 7 bugs de severidade S1/S2/P1 em aberto. Prioridade imediata em: (1) memory leak #8642 — PR pronto, (2) CI quality gate #8753 — quebra silêncio em CI, (3) SSRF em file_download #8713 — PR merged, (4) skill tools bypass #8787 — segurança.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features P1/P2 em Desenvolvimento

| # | Feature | Status | Link |
|---|---------|--------|------|
| #7155 | RFC: Confirmation tier para shell + Claude Code-style pattern policy | Accepted | [RFC](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) |
| #7943 | Realtime voice-host channel (WS client, backend-agnostic) | Accepted | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/7943) |
| #7944 | Voice satellite (ESP32/smartphone/PWA) | Accepted | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/7944) |
| #8780 | Realtime speech-to-speech (Gemini Live) | Open | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8780) |
| #8314 | Hot-reload log persistence | Accepted, PR #8816 | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8314) |
| #7521 | file_read: charset detection (cp1251/Latin-1/Shift-JIS) | Accepted | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/7521) |

### Novas Features (Criadas em 07/07)

| # | Feature | Link |
|---|---------|------|
| #8815 | `skill_manage.create` action para agents criarem skills como bundles | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8815) 🔒 |
| #8803 | Collapse de steps intermediários no web dashboard chat | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8803) |
| #8798 | RFC: Consolidar /ws/chat e /acp em único wire protocol | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8798) |

### Trackers de Release

- **[#8073](https://github.com/zeroclaw-labs/zeroclaw/issues/8073)** — v0.8.3 tracker: observability, CI, docs, deps (P2, 0 comentários)
- **[#6970](https://github.com/zeroclaw-labs/zeroclaw/issues/6970)** — v0.8.1 tracker: 🔒 Closed

**Sinais de Roadmap**: 
- **Voice/Real-time** é direção clara: voicehost (#7943), satellite (#7944), Gemini Live (#8780) representam cluster de features para canais de voz
- **Security stack** maduro: multi-user auth (#8672) em PR XL, RFC confirmation tier (#7155) em discussão
- **SOP Authoring** (#8590) em beta tester stage — próximo marco funcional significativo

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Categoria | Issue | Feedback | Link |
|-----------|-------|----------|------|
| **Segurança Shell** | #7155 | Usuários demandam controle granular (allow/ask/deny) similar a Claude Code | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) |
| **Usabilidade

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*