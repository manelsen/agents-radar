# Resumo diário do ecossistema de agentes de IA 2026-05-10

> Issues: 3 | PRs: 3 | Projetos cobertos: 7 | Gerado em: 2026-05-09 20:39 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal


# Relatório de Projeto — NullClaw
**Data de referência:** 2026-05-10 | **Fonte:** github.com/nullclaw/nullclaw

---

## 1. Panorama do dia

NullClaw manteve um ritmo de atividade equilibrado em 2026-05-09/10. Três issues abertas foram registradas — todas relacionadas a bugs — enquanto dois PRs foram merged, agregando funcionalidades relevantes de infraestrutura (whitelist de HTTP inseguro e workflow Nix). A release nightly `nightly-20260509-5d533da` foi gerada com sucesso. O quadro geral indica um projeto ativo na fase de estabilização da série 2026.5.x, com regressões已知 sendo investigadas pela comunidade.

---

## 2. Lançamentos

### 🔹 NullClaw Nightly `nightly-20260509-5d533da`
**Data de build:** 2026-05-09 03:34:22 UTC  
**Commit:** [`5d533da`](https://github.com/nullclaw/nullclaw/commit/5d533da90dd0986edf190247c27655f969bdcb7d)  
**Workflow:** [Run #25590590011](https://github.com/nullclaw/nullclaw/actions/runs/25590590011)

- Build noturno padrão com base no último commit da branch principal.
- Sem changelog formal de features; atualizações de comportamento devem ser rastreadas via commits.

> **Nota:** Não há release tagged (semver) no período. Apenas o canal nightly foi gerado.

---

## 3. Progresso do Projeto

### PRs merged/fechadas (2)

#### #903 — `feat: add config to whitelist insecure http endpoints`
**Status:** CLOSED | **Autor:** w33ble | **Data:** 2026-05-09  
🔗 [PR #903](https://github.com/nullclaw/nullclaw/pull/903)

Adiciona configuração `http_request.allowed_insecure_domains` para permitir que agentes NullClaw se conectem a endpoints HTTP (não-HTTPS) mediante whitelist. Caso de uso principal: comunicação entre NullClaw e outros containers em stacks docker-compose.

- **Mudanças:**
  - Nova chave de configuração `http_request.allowed_insecure_domains: []`
  - Validação de domínio na camada de requisição HTTP antes do envio
  - Fallback seguro: nega por padrão; permite apenas domínios explicitamente listados

---

#### #796 — `ci: add Nix flake build workflow`
**Status:** CLOSED | **Autor:** jonathanhfmills | **Última atualização:** 2026-05-09  
🔗 [PR #796](https://github.com/nullclaw/nullclaw/pull/796)

Adiciona `.github/workflows/nix.yml` para build e smoke-test do Nix flake a cada push e PR.

- **Mudanças:**
  - Job CI `Test (nixos-latest)` rodando em `ubuntu-latest` (x86_64-linux)
  - Usa `cachix/install-nix-action` com flakes habilitado
  - Cache via `cache-nix-community`

> **Impacto:** Melhora a confiabilidade de builds Nix e permite que a comunidade Nix/Guix consuma NullClaw via `nix run`.

---

### PR em aberto notável

#### #885 — `[hackathon] feat(memory): Add NullClaw Data Governance Layer`
**Status:** OPEN | **Autor:** sleep3r | **Atualizado:** 2026-05-09  
🔗 [PR #885](https://github.com/nullclaw/nullclaw/pull/885)

PR preparado pela equipe **"Безопасность бэкофиса (DS)"** para o **WB × OpenSource Hackathon** no track NullClaw. Membros: Калашников А.Ю., Асланян А.А., Переходкин М.В.

Propõe uma camada de governança de dados no subsistema de memória, potencialmente cobrindo classificação, retenção e políticas de acesso a dados mantidos pelo agente.

- **Status:** Em revisão. Verificar se há comentários de mantenedores pendentes.

---

## 4. Temas Quentes da Comunidade

Não há issues ou PRs com comentários significativos no período de 24h. Todas as 3 issues abertas têm **0 comentários e 0 reações (👍)** — indicando que ainda não houve engajamento da comunidade na triagem.

| Issue | Tema | Sinais de demanda |
|---|---|---|
| #902 | Regressão de provider siliconflow | Usuários esperando paridade com 2026.4.9 |
| #901 | Telegram "not configured" incorreto | Usuários com config válida frustrados |
| #900 | `approval_request` não emitido | Quem implementa workflows supervisionados |

> **Alerta para mantenedores:** Issues sem resposta em ~24h podem gerar frustração. Recomenda-se ao menos um comentário de triage (acknowledgment ou labeling).

---

## 5. Bugs e Estabilidade

### 🔴 Regressão Crítica — Issue #902
🔗 [Issue #902](https://github.com/nullclaw/nullclaw/issues/902)

**Título:** `HostResolutionFailed` when using siliconflow provider (2026.4.9 funciona)

- **Severidade:** Alta — quebra de funcionalidade existente
- **Autor:** agiminds | **Criado/Atualizado:** 2026-05-09
- **Resumo:** Após upgrade para 2026.5.x, o provider `siliconflow` falha com `error.HostResolutionFailed`. Mesma configuração, token e rede funcionam corretamente na 2026.4.9.
- **Suspeita:** Refatoração do cliente HTTP/DNS na série 2026.5.x.
- **Impacto:** Todos os usuários do provider siliconflow bloqueados na 2026.5.x.

---

### 🟡 Bug de Configuração — Issue #901
🔗 [Issue #901](https://github.com/nullclaw/nullclaw/issues/901)

**Título:** `channel list` sempre mostra "not configured" para telegram apesar de config.json correta

- **Severidade:** Média — funcional, mas impede uso do canal
- **Autor:** NOTJuangamer10 | **Criado/Atualizado:** 2026-05-09
- **Resumo:** Telegram configurado corretamente em `config.json` e visível em `nullclaw config`, porém `nullclaw channel list` reporta "Telegram: not configured" e `nullclaw channel start telegram` aborta com "No messaging channel configured".
- **Testado em:** Releases v2026.4.17 (e presumidamente 2026.5.x).
- **Impacto:** Usuários que usam Telegram como canal de mensageria não conseguem iniciar.

---

### 🟡 Bug de Fluxo de Segurança — Issue #900
🔗 [Issue #900](https://github.com/nullclaw/nullclaw/issues/900)

**Título:** `approval_request` definido na spec mas nunca emitido — supervised mode falha em vez de solicitar

- **Severidade:** Média-Alta — quebra contrato de API e fluxo de segurança
- **Autor:** Jdad5150 | **Criado/Atualizado:** 2026-05-09
- **Resumo:** A spec `webchannel_v1` define um round-trip `approval_request` (core→ui) / `approval_response` (ui→core) para gating de execução de ferramentas arriscadas. A camada `SecurityPolicy.validateCommandExecution` até recebe o parâmetro `approved: bool`, mas nunca recebe um valor, causando falha em vez de prompting.
- **Impacto:** Funcionalidade de supervisão de segurança não operacional; comandos arriscados falham silenciosamente em vez de aguardarem aprovação.

---

### 📊 Resumo de Severidade

| # | Bug | Severidade | Status |
|---|---|---|---|
| #902 | HostResolutionFailed siliconflow | 🔴 Alta | Aberta |
| #900 | approval_request não emitido | 🟡 Média-Alta | Aberta |
| #901 | Telegram "not configured" | 🟡 Média | Aberta |

---

## 6. Pedidos de Features e Sinais de Roadmap

### PR #885 — NullClaw Data Governance Layer
🔗 [PR #885](https://github.com/nullclaw/nullclaw/pull/885)

- **Feature:** Camada de governança de dados no subsistema de memória
- **Origem:** WB × OpenSource Hackathon (equipe de 3 pessoas)
- **Sinais de roadmap:** Indica interesse crescente em conformidade, privacidade e controle de dados dentro de agentes NullClaw. Se aceito, pode sinalizar uma的方向 de produto focada em uso empresarial.

### Implicações de roadmap inferidas

| Demanda | Frequência no período | Interpretação |
|---|---|---|
| Conectividade HTTP insegura (hosts locais/docker) | #903 merged | Suporte a deployment local/containerizado |
| Camada de governança de dados | #885 em revisão | Casos de uso corporativo/regulados |
| Provider alternativo (siliconflow) | #902 (regressão) | Ecossistema multi-provider é crítico |
| Supervised mode / approval workflow | #900 (bug) | Modo seguro para produção é esperado |
| Integração Telegram | #901 (bug) | Canais de mensageria populares são prioridade |

---

## 7. Resumo de Feedback dos Usuários

### Dores identificáveis

1. **Medo de upgrade bloqueante (#902)**
   > *"Exact same config, token, network works perfectly in 2026.4.9."*
   - Usuário sente que a refatoração 2026.5.x quebrou funcionalidade estável. Gera desconfiança em atualizar.

2. **Inconsistência de status de canal (#901)**
   > *"Telegram is correctly configured in config.json and nullclaw config displays it correctly, but `channel list` always shows 'not configured'."*
   - Experiência de usuário confusa: interface de CLI contradiz saída de `config`. Falta de debugging info agravando o problema.

3. **Fluxo de aprovação quebrado (#900)**
   > *"supervised mode fails risky commands instead of prompting"*
   - Expectativa: comportamento de segurança interativo. Realidade: falha silenciosa. Risco de segurança e experiência degradada.

### Usos mencionados
- Providers de IA alternativos (siliconflow)
- Canais de mensageria (Telegram)
- Modo supervisionado de execução de ferramentas
- Deployment em containers Docker com comunicação inter-serviço
- Nix as a package manager

### Satisfação implícita
- O Nix workflow foi merged, indicando que a comunidade Nix está engajada e seus PRs são aceitos.
- A feature de whitelist HTTP inseguro foi aceita e merged rapidamente, sugerindo alinhamento com casos de uso reais.

---

## 8. Backlog que Merece Atenção

> As seguintes issues/PRs **não foram respondidas nos últimos 7 dias** e requerem atenção dos mantenedores:

### 🟠 Sem resposta — 5+ dias

| Item | Tipo | Título | Desde | Link |
|---|---|---|---|---|
| #885 | PR (Open) | [hackathon] feat(memory): Add NullClaw Data Governance Layer | 2026-05-04 | [PR #885](https://github.com/nullclaw/nullclaw/pull/885) |

### ⚠️ Ações recomendadas

1. **Issue #902** — Prioridade máxima. Triar como `bug` + `regression` + `priority:critical`. Investigar commit de refatoração HTTP/DNS. Considerar revert parcial se o impacto for amplo.

2. **PR #885** — Responder com feedback de review. PR de hackathon pode perder momentum se ficar parado. Ao menos classificar se está no escopo aceito.

3. **Issue #900** — Validar se o bug é de implementação faltante (`approval_request` nunca é emitido) ou se há um erro silencioso na lógica de gating.

4. **Issue #901** — Solicitar logs de debug (`--debug` flag) e versão exata testada para reproduzir.

---

**Fim do relatório — 2026-05-10**  
*Gerado automaticamente com base em dados públicos do GitHub.*

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo do Ecossistema de Agentes de IA Open Source

**Data de referência:** 2026-05-10  
**Projetos analisados:** NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw, ZeroClaw

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **dois perfis distintos de maturidade**: por um lado, projetos em **estabilização** (NullClaw) que priorizam qualidade sobre velocidade, e por outro, uma maioria em **sprint intensivo de desenvolvimento** com dezenas de PRs diários. A convergência técnica mais notável é o investimento massivo em **arquiteturas multi-agente** — ZeroClaw (v0.8.0), IronClaw (Reborn) e PicoClaw都在 independently convergindo para o mesmo paradigma. O mercado demanda insistentemente por **WebUIs nativas**, **suporte a múltiplos providers de IA**, e **políticas de segurança configuráveis**, enquanto bugs de regressão em conectividade HTTP/DNS e validação de providers sugerem que a interoperabilidade ainda é a principal fragilidade técnica do ecossistema.

---

## 2. Comparação de Atividade

| Projeto | Issues (ativas/fechadas 24h) | PRs (abertos/merged 24h) | Releases | Saúde | Velocidade |
|---------|------------------------------|--------------------------|----------|-------|------------|
| **NullClaw** | 3 / 0 | 3 / 2 | 1 nightly | 🟡 Estável | Baixa |
| **NanoBot** | 13 / 9 | 106 / 29 | 0 | 🟢 Forte | Muito alta |
| **Hermes Agent** | 50 / 25 | 24 / 26 | 0 | 🟢 Forte | Alta |
| **PicoClaw** | 10 / 2 | 14 / 9 | 1 nightly | 🟢 Forte | Alta |
| **IronClaw** | 22 / ~ | 15+ / 6 | 0 (PR #3388 pendente) | 🟡 Refatoração | Alta |
| **CoPaw** | 43 / ~ | 8 / 22 | 2 (v1.1.6, v1.1.6-beta.2) | 🟢 Forte | Alta |
| **ZeroClaw** | 50 / ~ | 35 / 2 | 0 | 🟡 Alerta | Média-alta |

**Observações:**
- **NanoBot** lidera em volume de PRs (29 merges/24h), indicando cadência de integração contínua excepcional
- **NullClaw** é o projeto mais discreto, em modo de estabilização da série 2026.5.x
- **IronClaw** concentra 15+ PRs abertos aguardando revisão, sugerindo gargalo de code review
- **CoPaw** é o único com **release formal** no período, demonstrando disciplina de versionamento

---

## 3. Posicionamento do Projeto Principal (NullClaw)

### Vantagens Competitivas

| Dimensão | NullClaw | Pares |
|----------|----------|-------|
| **Foco** | Estabilização e segurança | Hermes/NanoBot: feature velocity |
| **Toxicidade de bugs** | 3 bugs abertos, nenhum crítico | IronClaw: 2 bugs bloqueantes (#2949, #3436) |
| **Comunidade Nix** | PR #796 merged (workflow oficial) | Único com suporte Nix nativo |
| **Release discipline** | Nightly automatizada com tag determinístico | ZeroClaw: última release ausente do Homebrew |
| **Docker-first** | Suporte a HTTP inseguro via whitelist (#903) | CoPaw/PicoClaw: suporte implícito |

### Lacunas Identificadas

- **Zero bugs resolvidos em 24h** — taxa de resposta inferior à média do ecossistema
- **3 issues sem triagem** há ~24h, todas com 0 comentários
- **Ausência de WebUI** — demanda clara do mercado (NanoBot: 13👍, PicoClaw: PR #3709 em progresso)
- **Provider ecosystem limitado** — regressão no siliconflow (#902) expõe dependência frágil

### Tamanho da Comunidade

Baseado em volume de issues/PRs, NullClaw possui a **menor base de contribuidores ativos** entre os pares. A atividade concentrada sugere equipe core pequena com baixa ondulação externa. Isso pode ser estratégia intencional (controle de qualidade) ou sintoma de atrito.

---

## 4. Focos Técnicos Compartilhados

### 4.1 Multi-Agent Architecture
Todos os projetos estão investindo em capacidades de múltiplos agentes:

| Projeto | Feature | Status |
|---------|---------|--------|
| ZeroClaw | Per-alias workspaces, permissions | PR #6545 (XL, v0.8.0) |
| IronClaw | Reborn loop driver registry | 15+ issues filhas de #3107 |
| PicoClaw | Multi-agent discovery + spawn policies | PR #2158, #2830 merged |
| NanoBot | AgentLoop.from_config() | PR #3708 merged |

**Implicação:** O ecossistema está convergindo para um paradigma de **agentes orquestrados**, não孤立的 single-agent bots.

### 4.2 Provider Diversification
Regressões e bugs afetando múltiplos providers indicam fragilidade sistêmica:

| Provider | Projetos Afetados | Bug |
|----------|-------------------|-----|
| **DeepSeek** | Hermes (#22798), IronClaw (#3436), ZeroClaw (#6298) | Reasoning mode, empty tool_calls |
| **Siliconflow** | NullClaw (#902) | HostResolutionFailed |
| **OpenRouter** | PicoClaw (#2745), Hermes (#22809) | Thinking leak, header missing |
| **MiniMax** | Hermes (#6838), ZeroClaw (#6361) | Protocol errors, context drops |

**Implicação:** A camada de abstração de providers é技术上 madura mas fragile em bordes (reasoning modes, strict validation).

### 4.3 Segurança e Aprovação
Três projetos identificaram independently a mesma lacuna:

| Projeto | Issue | Descrição |
|---------|-------|-----------|
| NullClaw | #900 | `approval_request` nunca emitido em supervised mode |
| ZeroClaw | #6539 | Bypass de approval em sessões ACP/WebSocket diretas |
| CoPaw | #4112 | Tool-guard com Approve/Deny buttons (WeCom) — implementação |

**Implicação:** O mercado corporativo exige **gate de aprovação configurável**, mas a implementação varia amplamente.

### 4.4 Stability Issues Patterns
Bugs recorrentes em HTTP/DNS/timeouts:

- **NullClaw:** `HostResolutionFailed` após refatoração HTTP/DNS
- **ZeroClaw:** MCP HTTP/SSE timeout gaps (#6404)
- **CoPaw:** MCP orphan processes (18GB leak) — root cause similar

---

## 5. Análise de Diferenciação

### 5.1 Por Foco de Produto

| Projeto | Público Primário | Diferenciador Principal |
|---------|------------------|-------------------------|
| **NullClaw** | DevOps, containers | Nix-first, Docker compose ready |
| **NanoBot** | Desenvolvedores, power users | Refatoração agressiva, state machine |
| **Hermes Agent** | Usuários avançados, self-hosted | Provider diversity, cron/autonomy |
| **PicoClaw** | Enterprise, multi-agent | MCP ecosystem, xAI/Gemini providers |
| **IronClaw** | Enterprise, nearai users | Reborn architecture, durable state |
| **CoPaw** | Chinês, Windows users | Tauri 2.x desktop, Chinese localization |
| **ZeroClaw** | Multi-channel users | Matrix/Discord, multi-agent runtime |

### 5.2 Por Arquitetura

| Abordagem | Projetos | Trade-off |
|-----------|----------|-----------|
| **Monolito modular** | NullClaw, Hermes | Simples, porém difícil de estender |
| **State machine funcional** | NanoBot (#3715) | Testável, explícito, mais código inicial |
| **Plugin system** | PicoClaw (HookCenter), CoPaw (MCP) | Flexível, risco de fragmentação |
| **Contract-driven** | IronClaw (Reborn) | Type-safe, curva de adoção íngreme |
| **Database-first** | ZeroClaw (SQLite/Postgres/Lucid) | Persistência robusta, operacional overhead |

### 5.3 Por Estratégia de Release

| Estratégia | Projetos | Implicação |
|------------|----------|------------|
| **Nightly only** | NullClaw, PicoClaw | Rápido feedback, sem estabilidade garantida |
| **Rolling sem releases** | NanoBot, Hermes, IronClaw | Insegurança para production users |
| **Tagged releases** | CoPaw, (ZeroClaw - parcial) | Previsibilidade, disciplina de changelog |
| **Major version imminent** | IronClaw (#3388), ZeroClaw (v0.8.0) | Breaking changes inoming |

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração

```
NanoBot ████████████████████ 29 PRs merged/24h
CoPaw   ██████████           22 PRs closed/24h  
Hermes  ██████████           26 PRs merged/24h
PicoClaw ████                 9 PRs merged/24h
IronClaw ██                   6 PRs merged/24h
NullClaw █                    2 PRs merged/24h
ZeroClaw █                    2 PRs merged/24h
```

### 6.2 Qualidade de Bug Response

| Projeto | Taxa Resolução 24h | Backlog Crítico |
|---------|-------------------|-----------------|
| **NanoBot** | 77% (3 bugs críticos resolvidos) | 🟢 Baixo |
| **CoPaw** | ~70% (MCP leak resolvido, 2 críticos fechados) | 🟢 Baixo |
| **Hermes** | 77.8% (14/18 P2/P3 resolvidos) | 🟢 Baixo |
| **NullClaw** | 0% | 🟡 Crescendo |
| **ZeroClaw** | 2 bugs S0/S1 abertos | 🔴 Alerta |
| **IronClaw** | E2E falhou, regressões i18n | 🟡 Refatoração |

### 6.3 Maturidade Relativa

| Estágio | Projetos | Características |
|---------|----------|-----------------|
| **Consolidação** | CoPaw | Releases formais, changelog, onboarding文档 |
| **Estabilização** | NullClaw | Bug triage ativo, feature freeze |
| **Sprint pesado** | NanoBot, Hermes | Refatorações radicais, API instável |
| **Arquitertura nova** | IronClaw, ZeroClaw | Breaking changes planejadas |
| **Crescimento** | PicoClaw | Multi-agent emmaturing, community expanding |

---

## 7. Sinais de Tendência

### 7.1 Tendências Fortes (Sinalizadas por Múltiplos Projetos)

| Tendência | Evidência | Implicação |
|-----------|-----------|------------|
| **Multi-agent como default** | 4/7 projetos implementando independently | Monolithic agent = legacy dentro de 12 meses |
| **WebUI nativa** | NanoBot (13👍), PicoClaw (#3709), CoPaw (Tauri 2.x) | Clientes CLI-only perderão market share |
| **Provider abstraction** | Bugs em DeepSeek, OpenRouter, MiniMax afetando todos | Abstração frágil em edges; need for standardized contract |
| **Segurança configurável** | Approval workflows em 3 projetos | Compliance/enterprise não é opcional |
| **Docker/container-first** | NullClaw whitelist, PicoClaw MCP, Hermes multi-provider | Deployment story é diferenciador competitivo |

### 7.2 Tendências Emergentes (Sinais Fracos mas Significativos)

| Tendência | Sinal | Recência |
|-----------|-------|----------|
| **Governança de dados** | NullClaw #885 (hackathon team) | 1 projeto |
| **Skills/semantic routing** | CoPaw #3117, NanoBot #3722 | 2 projetos |
| **Nix as package manager** | NullClaw #796 merged | 1 projeto |
| **OAuth 2.1 + PKCE** | PicoClaw #2546 (stale) | 1 projeto |
| **Auto-update** | NanoBot #3421 RFC | 1 projeto |

### 7.3 Tendências em Declínio/Estagnação

| Feature | Status | Observação |
|---------|--------|-----------|
| **Providers "exóticos"** | Vários bugs abertos | siliconflow, opencode, Volcano Engine com instabilidade |
| **Single-channel deployment** | ZeroClaw, PicoClaw movendo para multi-channel | Demanda por integrações (Discord, Matrix, Telegram) |

---

## Síntese Executiva

| Dimensão | Líder | Desafiado | Tendência |
|----------|-------|-----------|-----------|
| **Velocidade de código** | NanoBot | — | ↗️ NanoBot acelerando |
| **Qualidade/Bug response** | Hermes, NanoBot | NullClaw, ZeroClaw | ↗️ Ecossistema melhorando |
| **Maturidade de release** | CoPaw | NanoBot, Hermes | ➡️ Estável |
| **Multi-agent readiness** | IronClaw, ZeroClaw | NullClaw | ↗️ Convergência em 2026 |
| **Segurança/Compliance** | Hermes, ZeroClaw | NanoBot | ↗️ Demanda crescente |
| **Comunidade engajada** | Hermes (50 items/24h) | NullClaw | ↘️ Disparidade crescente |

**Recomendações para Decisores Técnicos:**

1. **Para novos projetos:** Considerar NanoBot por velocidade ou CoPaw por maturidade, evitando NullClaw se WebUI ou provider diversity forem requisitos
2. **Para enterprises:** Hermes Agent ou IronClaw oferecem melhor alinhamento com requisitos de compliance e multi-provider
3. **Para infraestrutura/DevOps:** NullClaw (Nix/Docker) ou ZeroClaw (multi-channel) são escolhas especializadas
4. **Monitorar:** IronClaw v0.28.0 e ZeroClaw v0.8.0 — ambas representam quebras de API iminentes que podem afetar integrações existentes

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# 📊 Relatório do Projeto NanoBot — 2026-05-10

---

## 1. 🌅 Panorama do Dia

O projeto NanoBot mantém um **ritmo de atividade intenso**: 135 PRs atualizados nas últimas 24h (106 abertos, 29 merged/fechados) e 13 issues processadas, sinalizando uma sprint de desenvolvimento acelerada. A atividade concentra-se em **três eixos principais**: (1) refatoração interna do AgentLoop e sistema de estado, (2) expansão do ecossistema de plugins via HookCenter, e (3) polimento da WebUI built-in. Não houve releases formais no período, indicando que o time prioriza estabilização antes de tag. A proporção de issues fechadas (9/13) reflete um time ativo em triagem e resolução.

---

## 2. 🚀 Lançamentos

**Nenhuma release oficial registrada nas últimas 24h.** O repositório está em modo de desenvolvimento ativo com merges frequentes, sugerindo que uma release pode ser iminente após consolidação das branches de refatoração (#3715, #3714, #3708).

> ℹ️ *Aguardando tag de versão para oficializar as mudanças do AgentLoop.from_config() e ModelPresetConfig.*

---

## 3. 💻 Progresso do Projeto

### PRs Merged/Fechadas Hoje (29 total)

| # | PR | Autor | Destaque |
|---|-----|-------|---------|
| [#3715](https://github.com/HKUDS/nanobot/pull/3715) | refactor(loop): convert _process_message to functional state machine | chengyongru | Extraiu os 7 estados (`RESTORE → COMPACT → COMMAND → BUILD → RUN → SAVE → RESPOND`) em handlers separados; adicionou enum `TurnState`. **Melhoria significativa de manutenibilidade** |
| [#3708](https://github.com/HKUDS/nanobot/pull/3708) | refactor: introduce AgentLoop.from_config() | chengyongru | Centralizou inicialização de bus/provider/loop em método factory; eliminação de duplicação entre `serve`, `_run_gateway`, `agent` e `Nanobot` facade |
| [#3714](https://github.com/HKUDS/nanobot/pull/3714) | feat(config): add ModelPresetConfig | chengyongru | Introduz presets nomeados de modelo com switching atômico em runtime — feature 2/4 do roadmap de presets |
| [#3719](https://github.com/HKUDS/nanobot/pull/3719) | fix(utils): remove unreachable dead code | chengyongru | Corrigiu bug em `find_legal_message_start` (slice `messages[start:i+1]` sempre vazio — loop nunca executava); linked to [#3716](https://github.com/HKUDS/nanobot/issues/3716) |
| [#3705](https://github.com/HKUDS/nanobot/pull/3705) | fix(cli): handle retry-wait messages | eugenechae | Resolveu corrupção de terminal quando spinner de interactive CLI colide com mensagens de retry |
| [#3673](https://github.com/HKUDS/nanobot/pull/3673) | fix(websocket): pass media through _dispatch_envelope | ivelin | Corrigiu silenciamento de mídias (imagens/arquivos) em mensagens WebSocket; linked to [#3674](https://github.com/HKUDS/nanobot/issues/3674) |
| [#3680](https://github.com/HKUDS/nanobot/pull/3680) | fix: corrupted session files | Lumjiel | Adicionou sanity check para `last_consolidated` excedendo contagem de mensagens — **protege histórico contra corrupção** |
| [#3709](https://github.com/HKUDS/nanobot/pull/3709) | feat(webui): BYOK web search settings | Re-bin | Extendeu UI de configurações com controle segmentado para credenciais de Web Search (BYOK) |
| [#3534](https://github.com/HKUDS/nanobot/pull/3534) | docs: add CLAUDE.md for AI contributors | chengyongru | Adicionou guia de referência rápida e diretivas em `.agent/` para assistentes de IA contribuírem efetivamente |

### Evolução Arquitetural Relevante
As PRs #3708 → #3715 → #3714 formam uma **sequência de refatoração progressiva** que modulariza o AgentLoop, introduzindo state machine funcional e presets de modelo — base para future extensibility.

---

## 4. 🔥 Temas Quentes da Comunidade

### Issues com Maior Engajamento

| # | Título | 👍 | 💬 | Sentimento |
|---|--------|----|----|------------|
| [#2949](https://github.com/HKUDS/nanobot/issues/2949) | Feature Discussion: Should nanobot have its own WebUI? | 13 | 10 | 🔥 Forte demanda por UI nativa — community split entre "built-in" vs "3rd-party" |
| [#1922](https://github.com/HKUDS/nanobot/issues/1922) | I've created nanobot-webui — self-hosted management panel | 10 | 9 | 🎉 Boa recepção; já funcional com dashboard, chat, config e multi-usuário |
| [#3421](https://github.com/HKUDS/nanobot/issues/3421) | RFC: Should we add a `nanobot update` command? | 1 | 4 | 💡 Feature request pragmática; usuários querem auto-update |
| [#2389](https://github.com/HKUDS/nanobot/issues/2389) | OpenWebUI as official channel? | 0 | 4 | ❓ Integração com OpenWebUI solicitada |
| [#510](https://github.com/HKUDS/nanobot/issues/510) | Gateway not binding to 18790 | 0 | 5 | ⚠️ Bug de binding em Docker — resolvido |

### Análise de Demandas

**WebUI é o tema central.** A issue #2949 demonstra interesse massivo (13 👍, 10 comentários) e gerou a criação de um projeto paralelo ([nanobot-webui](https://github.com/Good0007/nanobot-webui)). Simultaneously, PR #3709 avança a WebUI built-in no servidor API, mostrando que o core team também está investindo nessa direção.

**Conclusão:** A comunidade sinaliza claramente que uma interface web nativa ou oficializada é essencial para adoção mainstream.

---

## 5. 🐛 Bugs e Estabilidade

### Bugs Reportados (por severidade)

| Severidade | # | Descrição | Status |
|------------|---|-----------|--------|
| 🟡 **Moderada** | [#3689](https://github.com/HKUDS/nanobot/issues/3689) | Interrupção de sessão perde contexto do turno anterior — bot não consegue找回 "测试" | 🟢 OPEN |
| 🟡 **Moderada** | [#3718](https://github.com/HKUDS/nanobot/issues/3718) | Cron reminders não incluem stream_id na saída streaming | 🟢 OPEN (PR [#3720](https://github.com/HKUDS/nanobot/pull/3720) pronto) |
| 🔴 **Bug real** | [#3716](https://github.com/HKUDS/nanobot/issues/3716) | Código morto em `find_legal_message_start`: loop nunca executa | ✅ CLOSED (via [#3719](https://github.com/HKUDS/nanobot/pull/3719)) |
| 🔴 **Bug real** | [#3674](https://github.com/HKUDS/nanobot/issues/3674) | WebSocket descarta campo `media` silenciosamente | ✅ CLOSED (via [#3673](https://github.com/HKUDS/nanobot/pull/3673)) |
| 🔴 **Bug real** | [#3680](https://github.com/HKUDS/nanobot/issues/3680) | Sessões corrompidas perdem histórico quando `last_consolidated` > message count | ✅ CLOSED (via [#3680](https://github.com/HKUDS/nanobot/pull/3680)) |

### Estabilidade Geral

O time demonstrou **resposta rápida a bugs críticos**: 3 bugs reais fechados no mesmo dia do relatório. A regressão do `_last_summary` (#3685 → revertida em #3710) mostra processo de review ativo.

---

## 6. ✨ Pedidos de Features e Sinais de Roadmap

### Novas Features Abertas

| # | Feature | 🔧 Componente | Sinais |
|---|---------|---------------|--------|
| [#3692](https://github.com/HKUDS/nanobot/issues/3692) | Toggle de isolamento por topic em grupos Feishu | Channel (Feishu) | Issue em chino — demanda regional forte |
| [#1012](https://github.com/HKUDS/nanobot/issues/1012) | Subagent profiles com tools/skills configuráveis | Core Agent | Feature antiga; sem progresso aparente |
| [#3722](https://github.com/HKUDS/nanobot/pull/3722) | Ferramenta instant_memory bypass | Tools | PR aberto; funcionalidade de memória |

### Sinais de Roadmap (via PRs em progresso)

| # | Feature | Progresso |
|---|---------|-----------|
| [#3564](https://github.com/HKUDS/nanobot/pull/3564) | HookCenter: sistema de hooks tipado com suporte a plugins via `entry_points` | 🔄 Em revisão |
| [#3558](https://github.com/HKUDS/nanobot/pull/3558) | Feishu reactEmoji allowlist dinâmico | 🔄 Em revisão |
| [#3712](https://github.com/HKUDS/nanobot/pull/3712) | Tratamento de sessões corrompidas (extensão de #3680) | 🔄 Em revisão |

### Potencial Próxima Release

Baseado na convergência de PRs, a **próxima versão deve incluir**:
- Model presets e switching atômico em runtime (#3714)
- Refatoração do AgentLoop em state machine (#3715)
- HookCenter para plugins externos (#3564)
- Suporte a stream_id em cron reminders (#3720)
- WebUI BYOK para Web Search (#3709)

---

## 7. 📝 Resumo de Feedback dos Usuários

### Dores Reportadas

| Dor | Frequência | Issue |
|-----|-----------|-------|
| **Perda de contexto ao interromper会话** | 1 report, mas impactante | [#3689](https://github.com/HKUDS/nanobot/issues/3689) — usuário reporta que bot "não lembra" o que estava fazendo ao ser interrumpido |
| **Binding Gateway falhando em Docker** | Historicamente 1+, agora resolved | [#510](https://github.com/HKUDS/nanobot/issues/510) |
| **Streaming >10min requer flag** | 1 report | [#2709](https://github.com/HKUDS/nanobot/issues/2709) — confusão com requisito de streaming |
| **Isolamento de topic Feishu inflexível** | 1 report regional | [#3692](https://github.com/HKUDS/nanobot/issues/3692) |

### Cenários de Uso Observados

- **Multi-canal**: Usuários integrando CLI, Telegram, WeChat, Discord, WebSocket simultaneamente
- **Self-hosted web management**: Surge demanda por painel admin completo ([nanobot-webui](https://github.com/Good0007/nanobot-webui))
- **Sessões longas**: Erro de streaming expõe necessidade de guidance sobre operações >10min
- **Memorização persistente**: Feature bypass de memória (#3722) sinaliza necessidade de controle granular

### Satisfação Geral

**Alta**, evidenciada por: 13 👍 em feature request de WebUI, 10 👍 para nanobot-webui, e 29 PRs merged em 24h demonstrando confiança da comunidade em contribuir.

---

## 8. 📋 Backlog que Merece Atenção

### Issues Sem Resposta ou Estagnadas

| # | Título | Criado | Estado | Ação Recomendada |
|---|--------|--------|--------|-----------------|
| [#1012](https://github.com/HKUDS/nanobot/issues/1012) | Add subagent profiles with configurable tools/skills | 2026-02-22 | OPEN, 1 💬 | 🔴 Prioridade: Feature antiga sem progress; definir escopo ou archivar |
| [#2389](https://github.com/HKUDS/nanobot/issues/2389) | OpenWebUI as official channel? | 2026-03-23 | CLOSED, 4 💬 | 🟡 Arquivar ou formalizar decisão |
| [#1333](https://github.com/HKUDS/nanobot/pull/1333) | Claude Code subscription provider (OAuth) | 2026-02-28 | CLOSED, sem revisão | 🟡 PR mergeado sem contexto de review; verificar completude |

### PRs Abertos com Alto Valor Estratégico

| # | PR | Autor | Prioridade |
|---|-----|-------|-----------|
| [#3564](https://github.com/HKUDS/nanobot/pull/3564) | HookCenter typed-event hook system | aiguozhi123456 | 🔴 Alta — habilita plugin ecosystem |
| [#3722](https://github.com/HKUDS/nanobot/pull/3722) | instant_memory bypass tool | OL-Arvind | 🟡 Média — feature de memória |
| [#3712](https://github.com/HKUDS/nanobot/pull/3712) | Corrupted session files fix | Lumjiel | 🟡 Média — robustez |

---

## 📌 Síntese Executiva

| Dimensão | Status | Tendência |
|----------|--------|-----------|
| **Atividade de código** | 🔥 Muito alta (29 PRs merged/24h) | ↗️ Acelerando |
| **Qualidade/Bugs** | 🟢 Estável (3 bugs críticos resolvidos) | ↗️ Melhorando |
| **Demandas community** | 🔥 WebUI, subagent profiles, auto-update | ↗️ Crescente |
| **Estabilidade releases** | 🟡 Nenhuma release em 24h | ➡️ aguardando consolidação |
| **Dívida técnica** | 🟢 Refatorações em curso (AgentLoop, Hooks) | ↘️ Reduzindo |

**Saúde geral: 🟢 Forte** — O projeto demonstra vigor com contributions intensos, resposta rápida a bugs e evolução arquitetural clara. Atenção warranted: priorização do roadmap de subagent profiles (#1012) e resolução do backlog de 2+ meses.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-05-10

---

## 1. Panorama do Dia

O projeto Hermes Agent registra **alta atividade** em 10 de maio de 2026, com **50 issues e 50 PRs** atualizados nas últimas 24 horas. A taxa de resolução está equilibrada — 25 issues fechadas contra 25 abertas/ativas, e 26 PRs merged/fechados contra 24 abertos. **Nenhuma release foi publicada**, indicando que o trabalho recente está em fase de integração antes do próximo versionamento. A comunidade demonstra engajamento significativo em funcionalidades de autonomia (cron jobs), integração com plataformas (Telegram, Matrix) e correções de estabilidade em múltiplos provedores (DeepSeek, Ollama, MiniMax, OpenRouter). O ritmo acelerado de PRs "salvage" indica que mantenedores estão consolidados correções de contribuidores para o tronco principal.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24 horas.**

O projeto não emitiu novas versões neste período. Recomenda-se monitorar o repositório para a próxima tag, dado o volume de PRs merged que sugerem preparo para um release imminent.

---

## 3. Progresso do Projeto

### PRs Importantes Merged/Fechados

| # | Título | Impacto | Link |
|---|--------|---------|------|
| #22809 | fix(openrouter): add x-grok-conv-id header for Grok | Corrige cache-affinity para modelos Grok via OpenRouter | [PR #22809](https://github.com/NousResearch/hermes-agent/pull/22809) |
| #22803 | fix(gateway): adopt unit's HERMES_HOME for --system CLI ops | Corrige detecção de status sob sudo para `gateway restart --system` | [PR #22803](https://github.com/NousResearch/hermes-agent/pull/22803) |
| #22793 | feat(gateway): add Telegram notification mode | Implementa modo de notificação silenciosa para Telegram | [PR #22793](https://github.com/NousResearch/hermes-agent/pull/22793) |
| #22805 | fix(model-metadata): align hy3-preview static fallback | Corrige context length de 256k para 256k (262144) | [PR #22805](https://github.com/NousResearch/hermes-agent/pull/22805) |
| #22796 | fix(email): send IMAP ID extension for 163 mailbox | Habilita suporte a caixas de e-mail 163/NetEase | [PR #22796](https://github.com/NousResearch/hermes-agent/pull/22796) |
| #22798 | fix(agent): extract thinking from content-list for DeepSeek V4 Pro | Desbloqueia sessões multi-turn com DeepSeek V4 Pro | [PR #22798](https://github.com/NousResearch/hermes-agent/pull/22798) |
| #22800 | fix(kanban): idempotent migration | Elimina crash ao reiniciar gateway com kanban dispatcher | [PR #22800](https://github.com/NousResearch/hermes-agent/pull/22800) |
| #22808 | perf(models_dev): cache-first lookup | Reduz latência de inicialização evitando rede desnecessária | [PR #22808](https://github.com/NousResearch/hermes-agent/pull/22808) |
| #22794 | fix(browser_tool): cloud provider resolution caching | Impede pinning permanente ao modo local após falha transitória | [PR #22794](https://github.com/NousResearch/hermes-agent/pull/22794) |
| #22792 | fix(auxiliary): rotate pooled auth after quota failures | Rotaciona credenciais exaustas em Codex compression | [PR #22792](https://github.com/NousResearch/hermes-agent/pull/22792) |
| #22799 | fix(agent): skip empty nudge with reasoning_content | Corrige nudge incorreto para modelos com split reasoning | [PR #22799](https://github.com/NousResearch/hermes-agent/pull/22799) |
| #22797 | fix(deps): declare youtube-transcript-api | Resolve ModuleNotFoundError no skill youtube-content | [PR #22808](https://github.com/NousResearch/hermes-agent/pull/22797) |

**Observação:** Todos os PRs fechados com prefixo "salvage" representam integrações de contribuições externas realizadas pelo mantenedor principal (@teknium1) ao tronco.

---

## 4. Temas Quentes da Comunidade

### Issues/PRs com Maior Engajamento (comentários + reações)

| # | Título | Tipo | Comentários | 👍 | Link |
|---|--------|------|-------------|-----|------|
| #5712 | True Autonomy - Automatically Inject Cron Results into Live Gateway | Feature | 7 | 7 | [Issue #5712](https://github.com/NousResearch/hermes-agent/issues/5712) |
| #6838 | Frequent RemoteProtocolError with MiniMax provider | Bug | 5 | 0 | [Issue #6838](https://github.com/NousResearch/hermes-agent/issues/6838) |
| #4319 | KV cache invalidation hurts local MoE models | Performance | 5 | 2 | [Issue #4319](https://github.com/NousResearch/hermes-agent/issues/4319) |
| #1583 | Mitigate plaintext secret exfiltration by adopting Varlock | Feature | 3 | 0 | [Issue #1583](https://github.com/NousResearch/hermes-agent/issues/1583) |
| #21867 | Cron doesn't work! | Bug | 3 | 0 | [Issue #21867](https://github.com/NousResearch/hermes-agent/issues/21867) |
| #22714 | Matrix gateway: no in-band channel for per-message LLM orchestration | Bug (P1) | 2 | 0 | [Issue #22714](https://github.com/NousResearch/hermes-agent/issues/22714) |
| #22573 | Native tools missing from all sessions, only MCP tools load | Bug (P1) | 1 | 0 | [Issue #22573](https://github.com/NousResearch/hermes-agent/issues/22573) |

### Análise das Demandas

1. **Autonomia Total (#5712)** — A feature request mais votada (7👍) propõe que resultados de cron jobs sejam automaticamente injetados em sessões de chat ativas do gateway, eliminando a necessidade de polling manual. Isso representa uma evolução significativa no paradigma de "agente autônomo em background".

2. **Desempenho Local MoE (#4319)** — Usuários com modelos MoE locais (Qwen3.5 35B, Mixtral) reportam degradação severa durante compressão de contexto. A demanda indica uma base de usuários avançados rodando Hermes em infraestrutura própria.

3. **Segurança de Secrets (#1583)** — A proposta de adoção do Varlock para substituir .env em texto puro reflete crescente preocupação com ataques de prompt injection e exfiltração de credenciais.

4. **Matrix Gateway (#22714, #22716)** — Dois issues P1 abertos no mesmo dia sobre limitações do gateway Matrix, sugerindo adoção ativa dessa plataforma e demanda por orquestração inline mais sofisticada.

---

## 5. Bugs e Estabilidade

### Por Severidade

#### P1 — Críticos (requerem atenção imediata)

| # | Título | Componente | Link |
|---|--------|------------|------|
| #22714 | Matrix gateway: no in-band channel for per-message LLM orchestration | gateway/platform/matrix | [Issue #22714](https://github.com/NousResearch/hermes-agent/issues/22714) |
| #22573 | Native tools missing from all sessions, only MCP tools load | agent/tools | [Issue #22573](https://github.com/NousResearch/hermes-agent/issues/22573) |

#### P2 — Altos (impactam fluxo principal)

| # | Título | Componente | Status | Link |
|---|--------|------------|--------|------|
| #6838 | RemoteProtocolError com MiniMax provider | agent/provider/minimax | OPEN | [Issue #6838](https://github.com/NousResearch/hermes-agent/issues/6838) |
| #21867 | Cron doesn't work! | cron | OPEN | [Issue #21867](https://github.com/NousResearch/hermes-agent/issues/21867) |
| #4319 | KV cache invalidation em modelos MoE locais | agent/compression | OPEN | [Issue #4319](https://github.com/NousResearch/hermes-agent/issues/4319) |
| #22212 | platform retry: rotate auth profiles within single retry | agent/auth | OPEN | [Issue #22212](https://github.com/NousResearch/hermes-agent/issues/22212) |
| #22013 | delegate_task bias toward Claude platforms | tools/delegate | **CLOSED** (fix: PR #22806) | [Issue #22013](https://github.com/NousResearch/hermes-agent/issues/22013) |
| #22548 | claude-cli custom provider timeout loops | agent/provider | **CLOSED** | [Issue #22548](https://github.com/NousResearch/hermes-agent/issues/22548) |
| #21946 | DeepSeek V4 Pro thinking content not persisted | agent/provider/deepseek | **CLOSED** (fix: PR #22798) | [Issue #21946](https://github.com/NousResearch/hermes-agent/issues/21946) |
| #22445 | Windows Kanban worker crashes with NoConsoleScreenBufferError | cli/kanban | OPEN | [Issue #22445](https://github.com/NousResearch/hermes-agent/issues/22445) |

#### P3 — Medios

| # | Título | Componente | Status | Link |
|---|--------|------------|--------|------|
| #22271 | 163 mailbox IMAP connection fails | gateway/email | **CLOSED** (fix: PR #22796) | [Issue #22271](https://github.com/NousResearch/hermes-agent/issues/22271) |
| #21811 | Empty-content nudge fires with reasoning_content populated | agent | **CLOSED** (fix: PR #22799) | [Issue #21811](https://github.com/NousResearch/hermes-agent/issues/21811) |
| #22686 | zsh completion invalid _arguments syntax | cli/completion | **CLOSED** (fix: PR #22802) | [Issue #22686](https://github.com/NousResearch/hermes-agent/issues/22686) |
| #21708 | kanban duplicate column on restart | gateway/kanban | **CLOSED** (fix: PR #22800) | [Issue #21708](https://github.com/NousResearch/hermes-agent/issues/21708) |
| #22563 | Memory pollution from irrelevant memories | agent/memory | **CLOSED** | [Issue #22563](https://github.com/NousResearch/hermes-agent/issues/22563) |
| #22705 | OpenRouter Grok prompt caching misses xAI header | agent/provider/openrouter | **CLOSED** (fix: PR #22809) | [Issue #22705](https://github.com/NousResearch/hermes-agent/issues/22705) |
| #22324 | browser_tool caches transient None | tools/browser | **CLOSED** (fix: PR #22794) | [Issue #22324](https://github.com/NousResearch/hermes-agent/issues/22324) |
| #22778 | Codex compression pinned to exhausted auth | agent/auxiliary | **CLOSED** (fix: PR #22792) | [Issue #22778](https://github.com/NousResearch/hermes-agent/issues/22778) |
| #22268 | hy3-preview context length test fails (256000 vs 262144) | agent/model_metadata | **CLOSED** (fix: PR #22805) | [Issue #22268](https://github.com/NousResearch/hermes-agent/issues/22268) |
| #22243 | youtube-content undeclared runtime dependency | tools/skills | **CLOSED** (fix: PR #22797) | [Issue #22243](https://github.com/NousResearch/hermes-agent/issues/22243) |
| #22346 | hermes doctor duplicate anthropic check fails | cli/doctor | **CLOSED** (fix: PR #22801) | [Issue #22346](https://github.com/NousResearch/hermes-agent/issues/22346) |
| #22737 | hermes tools does not install cua-driver | cli/tools | **CLOSED** | [Issue #22737](https://github.com/NousResearch/hermes-agent/issues/22737) |
| #22771 | Telegram: add notification mode | gateway/telegram | **CLOSED** (fix: PR #22793) | [Issue #22771](https://github.com/NousResearch/hermes-agent/issues/22771) |

**Taxa de Resolução P2/P3:** 14 de 18 bugs P2/P3 (77.8%) foram resolvidos nas últimas 24h, demonstrando alta capacidade de resposta do time.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Propostas

| # | Título | Descrição | Status | Link |
|---|--------|-----------|--------|------|
| #5712 | True Autonomy - Cron Results Injection | Injetar resultados de cron jobs automaticamente em sessões de chat ativas | OPEN | [Issue #5712](https://github.com/NousResearch/hermes-agent/issues/5712) |
| #1583 | Varlock for Secrets Management | Substituir .env plaintext por solução moderna de gerenciamento de secrets | OPEN | [Issue #1583](https://github.com/NousResearch/hermes-agent/issues/1583) |
| #22212 | Rotate Auth Profiles Within Single Retry | Rotacionar perfis de autenticação dentro de uma única sequência de retry | OPEN | [Issue #22212](https://github.com/NousResearch/hermes-agent/issues/22212) |
| #22451 | Document Google Chat Format 3 / Cloud Run relay | Documentar envelope Cloud Run relay suportado | OPEN | [Issue #22451](https://github

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-05-10

---

## 1. Panorama do Dia

O projeto PicoClaw demonstra **alta atividade** com 33 itens atualizados nas últimas 24h (10 issues + 23 PRs). A cadência de desenvolvimento é intensa, com 9 PRs merged/fechados hoje e 14 ainda abertos em revisão. A nightly build v0.2.8-nightly.20260509 indica desenvolvimento contínuo. A comunidade está ativamente discutindo melhorias em multi-agentes, políticas de ferramentas e transporte MCP, enquanto correções de bugs e features relacionadas a providers mantém o pipeline ocupado.

---

## 2. Lançamentos

### Nightly Build (v0.2.8-nightly.20260509.8508f806)
- **Build automatizado** para `main`
- Comparação: https://github.com/sipeed/picoclaw/compare/v0.2.8...main
- **Nota**: Este é um build noturno não estável; uso em produção desaconselhado.

> ⚠️ **Aviso**: Builds nightlies não devem ser utilizados em ambientes de produção.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados Hoje

| PR | Descrição | Impacto |
|---|---|---|
| [#2793](https://github.com/sipeed/picoclaw/pull/2793) | fix(tools): hidden tools promoted no registry correto | Corrige descoberta de ferramentas em subagentes |
| [#2790](https://github.com/sipeed/picoclaw/pull/2790) | fix(agents): roteamento do tool `spawn` para agente alvo | Permite spawn para agentes específicos com modelo/tools propios |
| [#2823](https://github.com/sipeed/picoclaw/pull/2823) | fix(agent): dismiss tool feedback quando outbound é skipado | Melhora UX em interações com tool `message` |
| [#2828](https://github.com/sipeed/picoclaw/pull/2828) | fix(agent): transcribe queued voice follow-ups | Corrige comportamento de notas de voz em sequência |
| [#2630](https://github.com/sipeed/picoclaw/pull/2630) | fix(web): full reply datetime + persistência no histórico | Melhora UI do chat web |
| [#2260](https://github.com/sipeed/picoclaw/pull/2260) | feat(providers): xAI compatibility support | Adiciona provider xAI via path OpenAI-compatible |
| [#2163](https://github.com/sipeed/picoclaw/pull/2163) | fix: Google Antigravity OAuth scopes | Corrige expiração de token em Cloud Code Assist |
| [#2158](https://github.com/sipeed/picoclaw/pull/2158) | feat(agent): Multi-agent discovery prompt | Injeta registry leve de agentes no system prompt |

**Destaque**: A feature de multi-agent discovery (#2158) representa um avanço significativo em arquiteturas de agentes múltiplos, introduzindo injeção de registry na Layer 1.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

**#2674** — Bug: Codex OAuth empty response (3 👍, 2 comentários)
- Link: https://github.com/sipeed/picoclaw/issues/2674
- Problema: Integração com ChatGPT backend via Codex OAuth retorna resposta vazia
- Impacto: Afeta usuários que usam `chatgpt.com/backend-api/codex`
- Status: Aberto, necesitas atenção

**#2421** — Feature: Add email as native channel (1 👍, 5 comentários)
- Link: https://github.com/sipeed/picoclaw/issues/2421
- Demanda: Canal de email nativo para ambientes corporativos/científicos
- Status: Aberto, discussão ativa

**#2546** — Feature: OAuth 2.1 + PKCE para MCP servers (4 comentários, stale)
- Link: https://github.com/sipeed/picoclaw/issues/2546
- Proposta: UX simplificada para adicionar MCP servers OAuth via dashboard (estilo Claude.ai)

### PRs em Destaque

**#2830** — fix(spawn): async delivery policy para resultados de subagentes
- Link: https://github.com/sipeed/picoclaw/pull/2830
- Resolve #2829 — evita reinjeção de resultados assíncronos no agente pai

**#2838** — feat(agent): frontmatter tool policy filters
- Link: https://github.com/sipeed/picoclaw/pull/2838
- Estende `AGENT.md` com allow/deny/glob para ferramentas e MCP servers

**#2763** — feat(providers): gemini web search provider
- Link: https://github.com/sipeed/picoclaw/pull/2763
- Adiciona Google Search via Gemini com citations

---

## 5. Bugs e Estabilidade

### Bugs Abertos

| Severidade | Issue | Descrição |
|---|---|---|
| 🔴 Alta | [#2674](https://github.com/sipeed/picoclaw/issues/2674) | Codex OAuth retorna resposta vazia com ChatGPT backend |
| 🟡 Média | [#2745](https://github.com/sipeed/picoclaw/issues/2745) | OpenRouter reasoning models vazam thinking para usuário |
| 🟡 Média | [#2665](https://github.com/sipeed/picoclaw/issues/2665) | ~~Model IDs com dots vs dashes no dropdown Anthropic~~ (RESOLVIDO) |
| 🟢 Baixa | [#2836](https://github.com/sipeed/picoclaw/pull/2836) | Fix de segurança PowerShell encoding bypass |

**Ação recomendada**: Priorizar #2674 — o bug afeta produtividade direta em integração popular.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Propostas

| # | Feature | Link | Sinais |
|---|---|---|---|
| #2837 | Allow/deny/glob tool policies em AGENT.md frontmatter | [Issue](https://github.com/sipeed/picoclaw/issues/2837) | Multi-agent setups precisam filtering granular |
| #2829 | Async result delivery policy para spawn | [Issue](https://github.com/sipeed/picoclaw/issues/2829) | Já implementado em #2830 |
| #2782 | MCP Streamable HTTP transport | [Issue](https://github.com/sipeed/picoclaw/issues/2782) | Suporte a novos MCP servers (Go SDK padrão) |
| #2834 | Tutorial "Update from source" | [Issue](https://github.com/sipeed/picoclaw/issues/2834) | Documentação insuficiente para upgrade |

### Features em Implementação

| # | Feature | Link | Progresso |
|---|---|---|---|
| #2770 | UI de configuração MCP no dashboard | [PR](https://github.com/sipeed/picoclaw/pull/2770) | Em revisão |
| #2788 | Timestamps por mensagem na API | [PR](https://github.com/sipeed/picoclaw/pull/2788) | Em revisão |
| #2832 | Fetch models + saved catalog (API web) | [PR](https://github.com/sipeed/picoclaw/pull/2832) | Em revisão |

**Sinais de roadmap**:
- Expansão de canais (email, Telegram album)
- Auth moderno (OAuth 2.1 + PKCE)
- Multi-agent sophistication (discovery, spawn, policies)
- Provider diversification (xAI, Gemini)

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

1. **Integração OAuth complexa**: Usuários precisam de autenticação OAuth simplificada para MCP servers sem conhecimento técnico (issue #2546)

2. **Transportes MCP limitados**: Servidores MCP novos (Go SDK) que usam Streamable HTTP não são compatíveis (issue #2782)

3. **Documentation gaps**: Usuários não sabem fazer upgrade manual (issue #2834)

4. **UX de providers inconsistente**: IDs de modelos com formato errado no dropdown Anthropic (agora corrigido)

5. **Problemas de streaming**: Codex OAuth + ChatGPT retornando respostas vazias

### Cenários de Uso Emergentes

- **Multi-agentes em produção**: Necessidade de políticas de ferramentas por agente
- **Search integrado**: Provedores de busca (Gemini, Google) como tool nativa
- **Ambientes corporativos**: Email como canal primário em setores conservadores

---

## 8. Backlog que Merece Atenção

### Issues com Estagnação (stale + sem atividade recente)

| # | Título | Link | Idade | Prioridade |
|---|---|---|---|---|
| #2546 | OAuth 2.1 + PKCE para MCP | [Issue](https://github.com/sipeed/picoclaw/issues/2546) | ~24 dias | Alta |
| #2745 | OpenRouter reasoning leak | [Issue](https://github.com/sipeed/picoclaw/issues/2745) | ~8 dias | Média |
| #2665 | Anthropic model IDs | [Issue](https://github.com/sipeed/picoclaw/issues/2665) | ~16 dias | ~~RESOLVIDO~~ |

### PRs Antigos Recentemente Mergeados

| # | Título | Link | Idade |
|---|---|---|---|
| #2260 | xAI provider support | [PR](https://github.com/sipeed/picoclaw/pull/2260) | ~38 dias |
| #2158 | Multi-agent discovery | [PR](https://github.com/sipeed/picoclaw/pull/2158) | ~42 dias |

---

## Indicadores de Saúde do Projeto

| Métrica | Valor | Status |
|---|---|---|
| Issues fechadas/hoy | 2/10 | ✅ Bom |
| PRs mergeados/hoy | 9/23 | ✅ Excelente |
| PRs em revisão | 14 | 🔄 Ativo |
| Bugs críticos abertos | 1 | ⚠️ Requer atenção |
| Propostas (issues + PRs) | 10+ | 🔬 Rico |

**Veredicto**: Projeto com saúde sólida, cadência de desenvolvimento alta, e comunidade engajada em features de próxima geração (multi-agent, novos providers, auth moderno). Atenção necessária ao bug #2674 e revitalização do issue stale #2546.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório de Projeto — IronClaw | 2026-05-10

---

## 1. Panorama do dia

O projeto IronClaw apresenta **alta atividade** nesta giornata. Foram registradas 22 issues atualizadas e 35 PRs — números que indicam uma cadência de desenvolvimento intensa, concentrada quase inteiramente na épica **Reborn** (modernização da arquitetura de agente). Nenhum release foi publicado nas últimas 24h, mas o PR #3388 (release bot) aguarda merge, sinalizando que uma versão está imminentemente pronta. Duas issues de bug foram abertas por usuários externos (i18n e routing de missões), e um E2E nightly falhou pela manhã. O contributor principal `serrrfirat` responde por uma fatia majoritária da atividade, refletindo um modelo de desenvolvimento centralizado em torno de uma equipe core pequena porém muito ativa.

---

## 2. Lançamentos

**Nenhum release publicado nas últimas 24h.**

O PR #3388 ([`chore: release`](https://github.com/nearai/ironclaw/pull/3388)) pela bot `ironclaw-ci` aguarda merge e já sinaliza mudanças de versão:

| Crate | Versão anterior | Nova versão |
|---|---|---|
| `ironclaw_common` | 0.4.1 | 0.4.2 |
| `ironclaw` | 0.24.0 | **0.28.0** |

A diferença de 4 pontos no versionamento menor de `ironclaw` sugere que a mudança pode incluir alterações significativas de API (deveria ser `0.25.x` se estritamente semver-compatible) — risco que merece atenção. O changelog não foi expandido nos dados disponíveis. **Sem notas de migração visíveis ainda.** Monitorar o merge deste PR para validar compatibilidade.

---

## 3. Progresso do Projeto

### PRs merged/fechados nas últimas 24h (6)

| # | PR | Tamanho | Contribuidor | Resumo |
|---|---|---|---|---|
| #3398 | [Compose Reborn text-only loop host ports](https://github.com/nearai/ironclaw/pull/3398) | XL | serrrfirat | Composição de portas de contexto, modelo, transcript e capability em `TextOnlyLoopHostPorts` com cobertura de integração |
| #3437 | [Avoid REPL auth retry race in E2E](https://github.com/nearai/ironclaw/pull/3437) | XS | serrrfirat | Corrige race condition no E2E de auth via REPL adicionando wait pós-token |
| #3430 | [Fix E2E auth and approval coverage](https://github.com/nearai/ironclaw/pull/3430) | M | serrrfirat | Emite status `AuthRequired` para gates inline e atualiza expectativas de E2E para contratos de gateway |
| #3422 | [docs(crates): add human crate map](https://github.com/nearai/ironclaw/pull/3422) | XS | serrrfirat | Mapa de crates agrupados por responsabilidade: contract, policy, runtime, durable state, product surface |
| #3412 | [fix(secrets): harden durable credential stores](https://github.com/nearai/ironclaw/pull/3412) | L | serrrfirat | Hardening de stores: lookups parametrizados, consumo atômico com `RETURNING`, transações exclusivas libSQL, serializáveis Postgres |
| #3099 | [Add Reborn transport adapter contract](https://github.com/nearai/ironclaw/pull/3099) | XL | zmanian | Adiciona `ironclaw_transport` com rotas tipadas, ingress/egress, registry lifecycle, health e bridge para v1 `Channel`s via `TransportAdapter` |

### PRs abertos aguardando revisão (15+)

Principais:
- [#3426](https://github.com/nearai/ironclaw/pull/3426) — Implementação do `ToolSurfaceService`/`CapabilityCatalog` para `HostRuntime::visible_capabilities` (L, reborn)
- [#3428](https://github.com/nearai/ironclaw/pull/3428) — `ProductWorkflow` + `InboundTurnService` facade (XL)
- [#3421](https://github.com/nearai/ironclaw/pull/3421) — Substrate de storage compartilhado em `ironclaw_storage` (L)
- [#3427](https://github.com/nearai/ironclaw/pull/3427) — `PersistentResourceGovernor` com stores JSON/libSQL/Postgres (XL)
- [#3414](https://github.com/nearai/ironclaw/pull/3414) — `SecretsStore` durável com criptografia (XL)
- [#3418](https://github.com/nearai/ironclaw/pull/3418) — Correção de routing de notifications de missão para thread de origem (L)
- [#3352](https://github.com/nearai/ironclaw/pull/3352) — Auth primitivo e egress para product adapter (XL)
- [#3131](https://github.com/nearai/ironclaw/pull/3131) — Trace Commons client para Reborn (XL)
- [#3101](https://github.com/nearai/ironclaw/pull/3101) — Composition root driven por config para produção (XL)
- [#3400](https://github.com/nearai/ironclaw/pull/3400) — `TextOnlyModelReplyDriver` (L)
- [#3303](https://github.com/nearai/ironclaw/pull/3303) — Cobertura E2E para reborn-memory com +1.690 LOC de testes (L)
- [#3298](https://github.com/nearai/ironclaw/pull/3298) — Hermetic local gate para CI (L)

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento

| # | Issue | Comentários | 👍 | Tipo | Link |
|---|---|---|---|---|---|
| #2949 | Platform download error para x86_64-unknown-linux-gnu | 4 | 0 | bug/user | [#2949](https://github.com/nearai/ironclaw/issues/2949) |
| #3107 | Define AgentLoopDriver e contract de loop profiles | 3 | 0 | enhancement | [#3107](https://github.com/nearai/ironclaw/issues/3107) |
| #3436 | DeepSeek API 400 em thinking mode | 0 | 1 | bug | [#3436](https://github.com/nearai/ironclaw/issues/3436) |

**Análise:**

- **Issue #2949** — Um usuário não consegue instalar via script de installer para Linux x86_64. A release page aparentemente não tem o asset correto. Este é um blocker para adoção. A issue tem 4 comentários, indicando que a equipe está discutindo a resolução. É a issue com maior engajamento de comments em 24h.

- **Issue #3107** — Epic card do tracker "Reborn" que rastreia a definição do `AgentLoopDriver` e do contract de run-class profiles. Serve como parent para ~15+ issues filhas (#3402, #3404, #3406, #3407, #3409, #3410, #3420, #3423, #3424, #3429, #3431, #3432, #3433, #3434, #3435), todas abertas simultaneamente. Este é o backbone da arquitetura Reborn.

- **Issue #3436** — DeepSeek retorna 400 quando `reasoning_content` é esperado em thinking mode. Única issue com upvote. Interessante que obteve 1 upvote mas zero comentários — pode indicar um problema emergente que outros usuários reconhecem sem contribuir com contexto ainda.

### Padrão de discussão

A esmagadora maioria das issues novas (#3431–#3435, #3429, #3424, #3423, #3420) são **subtarefas do epic Reborn** com tags `[reborn]` e parent tracking em #3107. Isso demonstra uma disciplina rigorosa de decomposition, mas também revela que o projeto está em fase de planejamento intensivo de implementação — muitas issues estão no backlog sem discussão ativa, esperando execução.

---

## 5. Bugs e Estabilidade

### Bugs reportados nas últimas 24h

| Severidade | # | Descrição | Link |
|---|---|---|---|
| **Alta** | #2949 | Instalador não tem asset para `x86_64-unknown-linux-gnu` — bloqueia instalação | [#2949](https://github.com/nearai/ironclaw/issues/2949) |
| **Alta** | #3436 | DeepSeek API 400 em reasoning mode — bloqueia provider | [#3436](https://github.com/nearai/ironclaw/issues/3436) |
| **Média** | #3425 | Regressão i18n — keys de tradução renderizam no lugar de textos | [#3425](https://github.com/nearai/ironclaw/issues/3425) |
| **Média** | #3415 | Resultados de missions postados na conversa errada | [#3415](https://github.com/nearai/ironclaw/issues/3415) |
| **Info** | #3323 | Nightly E2E falhou (web-regressions job) | [#3323](https://github.com/nearai/ironclaw/issues/3323) |

### Análise

- **#3425 — i18n regression** é particularmente relevante. A issue detalha keys específicas (`auth.title`, `auth.tagline`, `tab.chat`, `tab.memory`, etc.) sendo renderizadas em produção. Isso indica uma regressão real, não um flake, e está impactando a UI. Zero comentários — a equipe precisa triá-la.

- **#3323 (E2E failure)** foi Closed mas representa um alerta de estabilidade. O job `E2E (web-regressions)` falhou. O PR #3437 e #3430 parecem ser tentativas de corrigir a causa raiz (auth retry race e coverage). O close da issue sem comentário explicitando a root cause é uma lacuna de documentação.

- **Bug total em 24h: 5** — Volume normal para projeto maduro, mas com dois bloqueando funcionalidades core (install + provider).

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features abertas (últimas 24h)

O epico Reborn domina completamente o pipeline de features. As 15+ issues filhas de #3107 representam o roadmap técnico de curto/médio prazo:

**Arquitetura de Loop (blocos fundamentais):**
- [#3402](https://github.com/nearai/ironclaw/issues/3402) — Loop driver registry + validation (dependência de todos os outros)
- [#3404](https://github.com/nearai/ironclaw/issues/3404) — `TurnRunner` worker composition concreto
- [#3406](https://github.com/nearai/ironclaw/issues/3406) — Loop checkpoint state staging store
- [#3407](https://github.com/nearai/ironclaw/issues/3407) — `AgentLoopDriverHost` factory para text-only
- [#3409](https://github.com/nearai/ironclaw/issues/3409) — `LoopPromptPort` para prompt bundles host-owned
- [#3410](https://github.com/nearai/ironclaw/issues/3410) — v2 engine driver model adapter
- [#3420](https://github.com/nearai/ironclaw/issues/3420) — Capability effect adapter path nativo
- [#3423](https://github.com/nearai/ironclaw/issues/3423) — Input resume, interrupt, cancellation semantics
- [#3424](https://github.com/nearai/ironclaw/issues/3424) — `LoopExitApplier` com validação de evidências
- [#3429](https://github.com/nearai/ironclaw/issues/3429) — Loop production readiness validation

**Contexto e memória:**
- [#3434](https://github.com/nearai/ironclaw/issues/3434) — `InstructionBundleBuilder` determinístico
- [#3431](https://github.com/nearai/ironclaw/issues/3431) — `MemoryPromptContextService` adapter production
- [#3432](https://github.com/nearai/ironclaw/issues/3432) — `SkillContextService` trust-aware

**Testes e integração:**
- [#3433](https://github.com/nearai/ironclaw/issues/3433) — `HostManagedModelGateway` budget/credential/redaction tests

**Infraestrutura:**
- [#3419](https://github.com/nearai/ironclaw/issues/3419) — Shared storage substrate unificado (libSQL/Postgres)

### Signals de produto

Nenhum request externo de feature foi identificado nas últimas 24h. Todas as features abertas são de origem interna (equipe `nearai`). O PR #3418 corrige routing de missions — indica que o sistema de missions está em uso em produção e refinamentos de UX estão sendo feitos.

---

## 7. Resumo de Feedback dos Usuários

### Issues externas (não-core)

| # | Usuário | Problema | Link |
|---|---|---|---|
| #2949 | gittyhubert | Não consegue instalar via script — plataforma não suportada | [#2949](https://github.com/nearai/ironclaw/issues/2949) |
| #3436 | Serhioromano | DeepSeek quebra com reasoning mode habilitado | [#3436](https://github.com/nearai/ironclaw/issues/3436) |
| #3425 | sunglow666 | i18n regression em produção — UX degradada | [#3425](https://github.com/nearai/ironclaw/issues/3425) |
| #3415 | sunglow666 | Missions postam resultado na conversa errada | [#3415](https://github.com/nearai/ironclaw/issues/3415) |

### Análise de dores

1. **Onboarding quebrado** — O instalador falha para plataformas Linux comuns. A release page aparentemente não contém o asset esperado. Isso é um problema de release engineering urgente.

2. **Provider instabilidade** — DeepSeek como provider ainda não está estável para uso com reasoning/thinking modes. Interoperabilidade com provedores externos é uma área de fragilidade.

3. **UI

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do Projeto CoPaw — 2026-05-10

## 1. Panorama do dia

O projeto CoPaw (QwenPaw) mantém alto nível de atividade com **43 issues e 30 PRs** atualizados nas últimas 24h. A equipe релизи v1.1.6 e v1.1.6-beta.2, focando em diagnósticos Windows e correções de estabilidade. A comunidade demonstra engajamento significativo em questões de usabilidade (scroll lento em longas conversas, performance do webui) e integrações (MCP, channels, browser automation). O volume de PRs fechados (22) supera os abertos (8), indicando boa capacidade de merge e revisões ágeis.

---

## 2. Lançamentos

### v1.1.6 — Released
**Link:** https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.6

| Categoria | Alteração |
|-----------|-----------|
| **Agent System** | `qwenpaw doctor` agora verifica questões Windows-specific: long path support, PowerShell language mode e path length do working directory ([#4032](https://github.com/agentscope-ai/QwenPaw/pull/4032)) |
| **Agent Status API** | Introdução de API de status para agentes |

### v1.1.6-beta.2 — Released
**Link:** https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.6-beta.2

| Tipo | PR | Descrição |
|------|-----|-----------|
| fix | [#4134](https://github.com/agentscope-ai/QwenPaw/pull/4134) | Renomeia variável `channel` para `channel_name` no command dispatch |
| perf | [#4130](https://github.com/agentscope-ai/QwenPaw/pull/4130) | Skip chat history lookup para teclas não-arrow |

**Notas de migração:** Nenhuma breaking change identificada. Atualização recomendada para melhor estabilidade em Windows.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados Hoje (Destaques)

| PR | Tipo | Impacto | Link |
|----|------|---------|------|
| [#4152](https://github.com/agentscope-ai/QwenPaw/pull/4152) | **fix(mcp)** | **Correção crítica de memory leak** — Resolve acumulação de subprocessos MCP orphanados (18 GB RAM leak em 1.5 dias). Refatora `StdIOStatefulClient.close()` e `HttpStatefulClient.close()` para garantir cleanup correto do lifecycle task. | [#4105](https://github.com/agentscope-ai/QwenPaw/issues/4105) |
| [#4157](https://github.com/agentscope-ai/QwenPaw/pull/4157) | **fix(agent-config)** | Preserva config completa no save, previne nested config loss | [#4145](https://github.com/agentscope-ai/QwenPaw/issues/4145) |
| [#4153](https://github.com/agentscope-ai/QwenPaw/pull/4153) | **refactor(console)** | Extrai `QrcodeAuthBlock` component, corrige polling leak ao fechar drawer | — |
| [#4148](https://github.com/agentscope-ai/QwenPaw/pull/4148) | **perf(console)** | Para polling imediatamente após fechar drawer | — |
| [#4055](https://github.com/agentscope-ai/QwenPaw/pull/4055) | feat(channel) | Propaga user display name para context do agente (Feishu) | — |
| [#3149](https://github.com/agentscope-ai/QwenPaw/pull/3149) | feat(mcp) | Support listing tools para MCP | — |
| [#4074](https://github.com/agentscope-ai/QwenPaw/pull/4074) | feat(provider) | Permite Dashscope base URL selection no Console UI | — |
| [#4112](https://github.com/agentscope-ai/QwenPaw/pull/4112) | feat(WeCom) | Tool-guard interactive approval card com botões Approve/Deny | — |
| [#3928](https://github.com/agentscope-ai/QwenPaw/pull/3928) | fix(agent-tools) | Adiciona safe default timeout para `delegate_external_agent` | — |
| [#4168](https://github.com/agentscope-ai/QwenPaw/pull/4168) | docs | Adiciona "New Contributors" section (10 novos contribuidores) ao release notes v1.1.6 | — |

### PRs em Review (Importantes)

| PR | Tipo | Status | Descrição |
|----|------|--------|-----------|
| [#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) | feat | first-time-contributor | **Tauri 2.x desktop app support** — Substitui Electron-based app | 
| [#3525](https://github.com/agentscope-ai/QwenPaw/pull/3525) | feat(cron) | Under Review | Discord thread creation before agent dispatch | 
| [#4041](https://github.com/agentscope-ai/QwenPaw/pull/4041) | feat(cli-desktop) | first-time-contributor | System tray startup item (win32 only) | 
| [#3117](https://github.com/agentscope-ai/QwenPaw/pull/3117) | feat | need discussions | **Semantic skill routing** — Filtra skills por embedding-based retrieval | 

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| # | Título | Tipo | Comentários | Link |
|---|--------|------|-------------|------|
| #3350 | Página de超多轮对话后滚动变得特别卡 | question | 11 | [#3350](https://github.com/agentscope-ai/QwenPaw/issues/3350) |
| #4133 | 升级到v1.1.5.post2后，opencode模型提供商不能正常使用 | question | 10 | [#4133](https://github.com/agentscope-ai/QwenPaw/issues/4133) |
| #4165 | v1.1.6 Volcano Engine火山引擎模型配置有问题 | bug | 8 | [#4165](https://github.com/agentscope-ai/QwenPaw/issues/4165) |
| #4145 | 存在多个智能体时，智能体的运行配置无法持久保存 | bug | 8 | [#4145](https://github.com/agentscope-ai/QwenPaw/issues/4145) |
| #4164 | 有考虑在内置提示词加入中文提示词吗？ | question | 7 | [#4164](https://github.com/agentscope-ai/QwenPaw/issues/4164) |
| #3663 | Dream Log Output (梦境日志输出) | enhancement | 6 | [#3663](https://github.com/agentscope-ai/QwenPaw/issues/3663) |
| #4017 | 开启HEARTBEAT.md时，网络中断后无法自动重连 | bug | 6 | [#4017](https://github.com/agentscope-ai/QwenPaw/issues/4017) |
| #4051 | deepseek模型的think内容解析问题 | question | 6 | [#4051](https://github.com/agentscope-ai/QwenPaw/issues/4051) |

### Análise de Demandas

**🔹 Performance do Frontend (crítico):**
- Usuários relatam scroll极度卡顿 após 200+ rodadas de conversa ([#3350](https://github.com/agentscope-ai/QwenPaw/issues/3350))
- WebUI fica "巨卡" durante geração de respostas, afetando multitarefa ([#4108](https://github.com/agentscope-ai/QwenPaw/issues/4108))
- **Sinal:** Necessidade urgente de otimização de renderização/virtualização de histórico

**🔹 Integrações de Provider:**
- opencode provider quebrou após upgrade para v1.1.5.post2 ([#4133](https://github.com/agentscope-ai/QwenPaw/issues/4133))
- Volcano Engine config não funciona em v1.1.6 ([#4165](https://github.com/agentscope-ai/QwenPaw/issues/4165))
- DashScope api_key não é lido em runtime ([#4159](https://github.com/agentscope-ai/QwenPaw/issues/4159))

**🔹 Localização e UX:**
- Usuários pedem prompts em Chinês para modelos com Chinese thinking chain (DeepSeek, GLM) ([#4164](https://github.com/agentscope-ai/QwenPaw/issues/4164))
- Language switching não funciona no UI ([#4156](https://github.com/agentscope-ai/QwenPaw/issues/4156))

---

## 5. Bugs e Estabilidade

### Por Severidade

| Severidade | Qtd | Issues | Link |
|------------|-----|--------|------|
| **🔴 Crítico** | 2 | #4105 (MCP memory leak 18GB), #4159 (DashScope 401) | [#4105](https://github.com/agentscope-ai/QwenPaw/issues/4105), [#4159](https://github.com/agentscope-ai/QwenPaw/issues/4159) |
| **🟠 Alto** | 4 | #4133 (opencode provider), #4165 (Volcano config), #4145 (config persistence), #4123 (Windows console flash) | — |
| **🟡 Médio** | 6 | #4017 (HEARTBEAT reconnection), #4100 (MCP reconnect), #4155 (browser reuse), #3840 (XiaoYi replies), #4135 (Ollama error msg) | — |
| **🟢 Baixo** | 3 | #4156 (i18n), #4147 (LM Studio 500), #3827 (backup secrets) | — |

### Bugs Abertos Importantes

```markdown
🔴 #4105: Orphaned MCP processes (~18 GB RAM leaked over 1.5 days)
   Status: CLOSED via #4152

🔴 #4159: DashScope provider api_key vazio causa 401
   Impacto: Config correto mas API não funciona
   Status: OPEN

🟠 #4133: opencode provider quebrou em v1.1.5.post2
   Funcionava em v1.1.5, quebrou no post2
   Status: OPEN

🟠 #4165: Volcano Engine models falham conexão em v1.1.6
   Status: OPEN
```

### Bugs Resolvidos Hoje

| # | Título | Tempo de Resolução |
|---|--------|-------------------|
| #4105 | MCP memory leak | Fix merged via #4152 |
| #4145 | Agent config persistence | Fix merged via #4157 |
| #4017 | HEARTBEAT.md reconnection | CLOSED |
| #4099 | Hardcoded "Friday" agent name | CLOSED |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em Alta (por comentários/reações)

| # | Feature | Link | Sinal de Prioridade |
|---|---------|------|---------------------|
| #2307 | **Pluggable memory manager com ADBPG** (long-term memory) | [#2307](https://github.com/agentscope-ai/QwenPaw/issues/2307) | PR #2308 em desenvolvimento |
| #3663 | **Dream Log Output** — logs de consolidação de memória | [#3663](https://github.com/agentscope-ai/QwenPaw/issues/3663) | Discussão ativa |
| #3117 | **Semantic skill routing** — embedding-based skill filtering | [#3117](https://github.com/agentscope-ai/QwenPaw/pull/3117) | PR em review |
| #4138 | **Batch action support** em browser_use | [#4138](https://github.com/agentscope-ai/QwenPaw/issues/4138) | PR #4139 em review |
| #4160 | **Multi-Agent Routing** from single channel endpoint | [#4160](https://github.com/agentscope-ai/QwenPaw/issues/4160) | Integração canais |
| #4166 | **Inject timestamp in pre_reply context** | [#4166](https://github.com/agentscope-ai/QwenPaw/issues/4166) | Time awareness |
| #4113 | **Conversation deletion** | [#4113](https://github.com/agentscope-ai/QwenPaw/issues/4113) | +1 upvote |

### Novos PR

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-05-10

## 1. Panorama do Dia

O projeto ZeroClaw manteve uma atividade intensa nas últimas 24 horas, com **50 issues e 48 PRs atualizados**, evidenciando uma semana de alta produtividade. A equipe fechou **2 PRs importantes** relacionados a timeout policies e reply classifiers, demonstrando foco em estabilidade. Não houve lançamentos de novas versões, e **2 bugs de alta severidade** foram fechados — um sinal positivo para a saúde geral. Os esforços mais visíveis concentram-se no desenvolvimento do **multi-agent runtime (v0.8.0)** e em correções de segurança relacionadas a ferramentas de shell, indicando que o projeto está em fase de amadurecimento de funcionalidades críticas.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24 horas.**

O último release disponível continua sendo o **v0.7.5**, cuja ausência no Homebrew foi reportada em [#6547](https://github.com/zeroclaw-labs/zeroclaw/issues/6547). A equipe está ciente do problema de merge no homebrew-core (PR externo), mas isso não afeta releases internos.

---

## 3. Progresso do Projeto

### PRs Fechados/Merged (2)

| PR | Descrição | Impacto |
|----|-----------|---------|
| [#6191](https://github.com/zeroclaw-labs/zeroclaw/pull/6191) | `fix(channels): guard reply-intent classifier against meta-instruction echo` | Corrige echo间歇 do classificador de intent em respostas de canal — melhoria de qualidade de resposta |
| [#6405](https://github.com/zeroclaw-labs/zeroclaw/pull/6405) | `fix(tools): align MCP HTTP/SSE timeouts with tool-call budget` | Substitui timeout global do HTTP client por timeout por-request, alinhando MCP tool calls com o budget configurável |

### PRs Abertos de Destaque

| PR | Descrição | Status |
|----|-----------|--------|
| [#6545](https://github.com/zeroclaw-labs/zeroclaw/pull/6545) | `feat(runtime): #6272 multi-agent runtime` | **Tamanho XL, Risk HIGH** — Landing completo do multi-agent runtime com schema primitives, validators, migrations SQLite/Postgres/Lucid para v0.8.0 |
| [#6553](https://github.com/zeroclaw-labs/zeroclaw/pull/6553) | `fix(observability): restore broken SSE /logs stream` | Restaura stream SSE funcionalmente quebrado, adiciona health pulse e version build-stamped para Docker |
| [#6539](https://github.com/zeroclaw-labs/zeroclaw/pull/6539) | `fix(runtime): require shell approval in direct sessions` | **Segurança** — Garante que sessões ACP/WebSocket usem approval manager, evitando bypass na aprovação de shell |
| [#6546](https://github.com/zeroclaw-labs/zeroclaw/pull/6546) | `fix(agent): suppress tool protocol when no tools are available` | Melhora performance de modelos small/local suprimindo scaffolding desnecessário |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (por comentários)

| Issue | Título | Comentários | Tendência |
|-------|--------|------------|-----------|
| [#6530](https://github.com/zeroclaw-labs/zeroclaw/issues/6530) | **[Bug]: Build failure with matrix-sdk v0.16.0** | 3 | **BLOCKED** — Recursion limit overflow com channel-matrix feature |
| [#6378](https://github.com/zeroclaw-labs/zeroclaw/issues/6378) | **[Feature]: Discord Bot respond only in specific Discord channels** | 3 | Accepted — Alinhamento com padrão Matrix/Nextcloud Talk |
| [#6298](https://github.com/zeroclaw-labs/zeroclaw/issues/6298) | **Empty tool_calls array causing 400 on strict validators (DeepSeek, NVIDIA NIM)** | 3 | Accepted — Afeta providers com validação estrita |

**Análise:** A comunidade demonstra forte interesse em **integração de canais** (Discord, Matrix) e **compatibilidade com providers novos** (DeepSeek, Kimi). O bug de recursion limit (#6530) está bloqueado, indicando possível dependência externa do matrix-sdk.

---

## 5. Bugs e Estabilidade

### Bugs Abertos por Severidade

#### S0 — Data Loss / Security Risk
| Issue | Título | Prioridade |
|-------|--------|------------|
| [#6419](https://github.com/zeroclaw-labs/zeroclaw/issues/6419) | `WorkspaceManager fails to load profiles at Runtime startup` | **CRÍTICO** |

#### S1 — Workflow Blocked
| Issue | Título | Provider/Tema |
|-------|--------|--------------|
| [#6361](https://github.com/zeroclaw-labs/zeroclaw/issues/6361) | `context_compression drops tool_calls for OpenAI-compatible providers` | MiniMax |
| [#6433](https://github.com/zeroclaw-labs/zeroclaw/issues/6433) | `Heartbeat not working with Matrix channel` | Matrix |
| [#6551](https://github.com/zeroclaw-labs/zeroclaw/issues/6551) | `Non-leading system messages sent to OpenAI-compatible providers` | OpenAI-compatible |

#### S2 — Degraded Behavior (Selecionadas)
| Issue | Título | Provider/Tema |
|-------|--------|--------------|
| [#6298](https://github.com/zeroclaw-labs/zeroclaw/issues/6298) | `Empty tool_calls array causing 400 errors` | DeepSeek, NVIDIA NIM |
| [#6520](https://github.com/zeroclaw-labs/zeroclaw/issues/6520) | `Gemini CLI provider crashes — outdated argument syntax` | Gemini |
| [#6526](https://github.com/zeroclaw-labs/zeroclaw/issues/6526) | `SSE /api/events drops tool-call events` | Gateway SSE |
| [#6528](https://github.com/zeroclaw-labs/zeroclaw/issues/6528) | `Trust system CA for provider requests` | Core/SSL |

### Bugs Fechados (2)
| Issue | Título | Nota |
|-------|--------|------|
| [#6404](https://github.com/zeroclaw-labs/zeroclaw/issues/6404) | `MCP HTTP/SSE timeout gaps` | Merged via [#6405](https://github.com/zeroclaw-labs/zeroclaw/pull/6405) |
| [#6191](https://github.com/zeroclaw-labs/zeroclaw/issues/6191) | `Reply-intent classifier echo` | Merged |

**Métricas de Estabilidade:**
- **2 bugs críticos (S0/S1)** em aberto: WorkspaceManager e context_compression
- **9 bugs S2** em aberto, afetando providers (Gemini, DeepSeek, MiniMax) e canais (Matrix, Discord)
- Taxa de fechamento: 2 bugs resolvidos nas últimas 24h (boa resposta)

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Prioritárias (P1)

| Issue | Título | Status | Sinal de Roadmap |
|-------|--------|--------|-----------------|
| [#6272](https://github.com/zeroclaw-labs/zeroclaw/issues/6272) | `Multi-agent runtime: per-alias workspaces, permissions, shared resources` | **In Progress** | **v0.8.0 — core feature** |
| [#6345](https://github.com/zeroclaw-labs/zeroclaw/issues/6345) | `Per-channel reply-min-interval-secs (throttle outbound)` | In Progress | Controle de rate por canal |
| [#6253](https://github.com/zeroclaw-labs/zeroclaw/issues/6253) | `Track: zeroclaw skills support and UX (v0.7.6)` | Accepted | **v0.7.6 theme** |
| [#6522](https://github.com/zeroclaw-labs/zeroclaw/issues/6522) | `Web chat — tool approval UI for supervised-mode` | Accepted | Gateway UI enhancement |
| [#6518](https://github.com/zeroclaw-labs/zeroclaw/issues/6518) | `First-Class Support for OpenAI-Compatible Providers (Kimi K2.5)` | Needs Maintainer Review | Expansão de providers |

### Features Medium Priority (P2)

| Issue | Título | Status |
|-------|--------|--------|
| [#6339](https://github.com/zeroclaw-labs/zeroclaw/issues/6339) | `Universal binary (arm64 + x86_64) for macOS desktop` | Accepted |
| [#6329](https://github.com/zeroclaw-labs/zeroclaw/issues/6329) | `Menu-bar tray menu items (quit, restart, copy token)` | Accepted |
| [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) | `Audit: track 153 commits lost in bulk revert` | In Progress |

### Sinais de Roadmap Identificados
1. **v0.8.0** — Multi-agent runtime é a feature central; PR [#6545](https://github.com/zeroclaw-labs/zeroclaw/pull/6545) em desenvolvimento na branch `integration/v0.8.0`
2. **v0.7.6** — Tema de "skills UX" aparece em [#6253](https://github.com/zeroclaw-labs/zeroclaw/issues/6253)
3. **Desktop app** — Interesse em universal binary e menu-bar enhancements
4. **Expansão de providers** — Kimi K2.5, DeepSeek, NVIDIA NIM sendo priorizados

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Categoria | Descrição | Issues Relacionados |
|-----------|-----------|---------------------|
| **Build/Compilação** | Falhas de build com features específicas (Matrix channel) e no Windows full build | [#6530](https://github.com/zeroclaw-labs/zeroclaw/issues/6530), [#6280](https://github.com/zeroclaw-labs/zeroclaw/issues/6280) |
| **Provider Compatibility** | Providers novos (Kimi, DeepSeek, Gemini) com problemas de compatibilidade e validação | [#6298](https://github.com/zeroclaw-labs/zeroclaw/issues/6298), [#6518](https://github.com/zeroclaw-labs/zeroclaw/issues/6518), [#6520](https://github.com/zeroclaw-labs/zeroclaw/issues/6520) |
| **Context/Hallucination** | Overflow de contexto causa hallucinação/topic drift | [#6517](https://github.com/zeroclaw-labs/zeroclaw/issues/6517) |
| **Configuração** | Problemas com ZEROCLAW_CONFIG_DIR e schema_version em model_routing_config | [#6533](https://github.com/zeroclaw-labs/zeroclaw/pull/6533), [#6309](https://github.com/zeroclaw-labs/zeroclaw/issues/6309) |
| **Localization** | Mensagens em inglês mesmo com locale non-English configurado | [#6550](https://github.com/zeroclaw-labs/zeroclaw/pull/6550) — já em PR |

### Cenários de Uso Reportados
- **Discord em canais específicos** — Usuários querem granularidade de canais (similar a Matrix)
- **Multi-agent em workspaces isolados** — Necessidade de workspaces por alias, não global
- **Ferramentas de cron** — Melhoria em mensagens de erro para schedule strings
- **Desktop app universal** — Usuários macOS Intel ainda sem suporte nativo

---

## 8. Backlog que Merece Atenção

### Issues sem Resposta/Manutenção há Tempo

| Issue | Idade | Título | Prioridade |
|-------|-------|--------|------------|
| [#5833](https://github.com/zeroclaw-labs/zeroclaw/issues/5833) | ~23 dias | `feat(tools): session ownership model for destructive operations` | **P2, BLOCKED, Needs Maintainer Review** |
| [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) | ~16 dias | `audit: track 153 commits lost in bulk revert` | P2, In Progress |
| [#6279](https://github.com/zeroclaw-labs/zeroclaw/issues/6279) | ~8 dias | `Improve Release tag milestone triage selection criteria` | P2, Needs Maintainer Review |

### Issues Críticos Sem Ação Imediata

| Issue | Severidade | Título | Gap |
|-------|-----------|--------|-----|
| [#6419](https://github.com/zeroclaw-labs/zeroclaw/issues/6419) | **S0** | `WorkspaceManager fails to load profiles at Runtime startup` | Pode causar perda de dados |
| [#6517](https://github.com/zeroclaw-labs/zeroclaw/issues/6517) | S2 | `Context Overflow Causes Hallucination` | Afeta experiência em conversas longas |
| [#6528](https://github.com/zeroclaw-labs/zeroclaw/issues/6528) | S2 | `Trust system CA for provider requests` |SSL em providers custom |

---

## Métricas Resumidas

| Métrica | Valor | Tendência |
|---------|-------|-----------|
| Issues ativas | 49 | Estável |
| PRs abertos | 35 | Estável |
| Bugs S0/S1 | 3 | **Alerta** |
| Bugs fechados (24h) | 2 | ✅ Positivo |
| PRs merged (24h) | 2 | ✅ Positivo |
| Features P1 in-progress | 4 | 🔄 Bom sinal |
| Releases (24h) | 0 | Sem impacto |

---

*Relatório gerado automaticamente com base em dados do GitHub de 2026-05-10. Última atualização: 2026-05-09.*

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*