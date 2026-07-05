# Resumo diário do ecossistema de agentes de IA 2026-07-06

> Issues: 0 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-07-05 20:52 UTC

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

**Data de referência:** 2026-07-06  
**Projetos analisados:** 7 (NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw, ZeroClaw)

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source demonstra **saúde desigual** em 06/07/2026. Três projetos (Hermes Agent, IronClaw, ZeroClaw) lideram em volume de atividade com mais de 50 itens processados por dia, evidenciando comunidades maduras e ciclos de desenvolvimento acelerados. NanoBot mantém ritmo consistente com 15 PRs/dia, enquanto CoPaw apresenta alta proporção de bugs (69%) sugerindo fase de maturação instável. PicoClaw opera em modo de manutenção moderada, e NullClaw permanece inativo — possivelmente descontinuado ou em stand-by. A ausência quase universal de releases (7/7 projetos sem releases no período) indica que todas as comunidades estão em ciclos de consolidação pré-lançamento.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | PRs Merged | Releases | Avaliação de Saúde |
|---------|-------------|-----------|------------|---------|-------------------|
| **Hermes Agent** | 50 | 50 | 16 | 0 | 🟢 Excepcional |
| **IronClaw** | 5 | 33 | 6 | 0 | 🟢 Alta atividade |
| **ZeroClaw** | 22 | 50 | 1 | 0 | 🟢 Alta atividade |
| **NanoBot** | 1 | 15 | 2 | 0 | 🟡 Estável |
| **CoPaw** | 13 | 3 | 0 | 0 | 🟡 Bug-heavy |
| **PicoClaw** | 2 | 5 | 1 | 0 | 🟡 Manutenção |
| **NullClaw** | 0 | 0 | 0 | 0 | ⚫ Inativo |

**Métricas agregadas:**
- Volume total de atividade: **165+ itens processados**
- Taxa de release: **0%** (nenhuma release em 24h)
- Proporção média bugs/issues: **~35%** (CoPaw distorce com 69%)

---

## 3. Posicionamento do Projeto Principal (NanoBot vs. Pares)

### NanoBot — Diferencial Técnico

| Dimensão | NanoBot | Hermes Agent | IronClaw | ZeroClaw |
|----------|---------|--------------|----------|----------|
| **Arquitetura** | MCP-first, multi-agent | Hooks/ spill-to-disk | Rust-born, Reborn core | SOP-centric, Python |
| **Provedores IA** | OpenRouter, Anthropic, Claude Code | GLM-5.2, multi-provider | Multi-provider | Bocha AI, Bedrock, OpenAI compat |
| **Canal destaque** | Feishu, Telegram customizável | Feishu, Matrix | Slack OAuth migration | Matrix, multi-channel |
| **Foco segurança** | DNS pinning SSRF, OAuth env-var | — | Capability allowlist | Bearer token guards, policy OTel |
| **Volume (24h)** | 15 PRs | 100 itens | 38 itens | 72 itens |

### Vantagens Competitivas do NanoBot

1. **Maturidade MCP:** 3+ PRs relacionados a correções MCP simultâneas — indica priorização consciente de uma integração crítica para interoperability
2. **Flexibilidade de provedor:** Suporte a Claude Code OAuth via variável de ambiente demonstra atenção a workflows de desenvolvedores
3. **Subagent Manager:** Capacidade de override de modelo e resultado agregado posiciona NanoBot para cargas multi-agente enterprise
4. **Comunidade diversificada:** Contribuidores de múltiplas regiões (HK, Europa) indicam base internacional

### Fragilidades Relativas

- **Volume de contributors menor** que IronClaw (33 PRs) e Hermes (100 itens)
- **Nenhuma release** gera incerteza sobre timeline de disponibilização de features merged
- **Issue backlog** com PRs pendentes há 10-18 dias sem resposta

---

## 4. Focos Técnicos Compartilhados

### 4.1 Segurança de Gateway e Authentication

**Três projetos** investindo simultaneamente em hardening:

| Projeto | PR/Issue | Descrição |
|---------|----------|-----------|
| **NanoBot** | #4671 | DNS pinning para SSRF validation |
| **IronClaw** | #8690, #8044 | Gate `/model --agent` atrás de autorização |
| **ZeroClaw** | #8727 | Rejeitar tokens bearer vazios |
| **ZeroClaw** | #8726 | Bloquear env vars perigosas no TUI overlay |

**Interpretação:** A proliferação de vetores de ataque em agentes AI (SSRF, credential leakage, unauthorized access) está forçando investimento defensivo coordenado na indústria.

### 4.2 Multi-Channel e OAuth Migration

| Projeto | Canal | Status |
|---------|-------|--------|
| **IronClaw** | Slack | Migration 4/4 (breaking change OAuth) |
| **NanoBot** | Telegram | Request para API endpoint customizável (#4702) |
| **ZeroClaw** | Matrix | Single-message progress drafts |
| **CoPaw** | Feishu | Bug crítico: para após primeira mensagem |

**Interpretação:** A fragmentação de canais corporativos (Slack, Telegram, Feishu, Matrix) exige adapters robustos com suporte a autenticação moderna (OAuth2).

### 4.3 Compatibilidade Cross-Platform

| Projeto | Issue | Problema |
|---------|-------|----------|
| **NanoBot** | #4545 | Comandos falham no Windows PowerShell |
| **NanoBot** | #4694 | Layout WebUI quebra em mobile viewport |
| **CoPaw** | #5787 | Conteúdo truncado em mobile |
| **ZeroClaw** | #7911 | Android Termux não funciona |

**Interpretação:** Suposições Linux-centric permanecem arraigadas. A pressão por adoption em ambientes Windows/Android força refatorações.

### 4.4 Estabilidade de Integrações MCP/Provider

**Três projetos** lidando com crashes/instabilidade em integrações LLM:

- **NanoBot:** Generator crash on reconnect (#4441), exceptions não capturadas (#4701)
- **IronClaw:** Provider-corrupted JSON em tool-calls (#5665)
- **CoPaw:** Google Gemini embedding crash (#5782)

---

## 5. Análise de Diferenciação

### 5.1 Por Arquitetura

```
Hermes Agent ─── Hooks/Spill-to-disk ──> Alta extensibilidade, memory management
IronClaw ─────── Rust-born ─────────────> Performance, type safety, embedded-friendly
ZeroClaw ─────── SOP-centric ───────────> Workflow automation, enterprise-ready
NanoBot ──────── MCP-first ─────────────> Interoperability, multi-agent
CoPaw ────────── Qwen-integrated ───────> Ecossistema Alibaba, mobile-first
PicoClaw ─────── DeltaChat/Matrix ───────> E2EE, mensageria federada
NullClaw ─────── [inativo] ────────────── Descontinuado ou stand-by
```

### 5.2 Por Público-Alvo

| Projeto | Público Primário | Sinais |
|---------|-----------------|--------|
| **IronClaw** | Enterprise nearai/cloud | OAuth Slack, breaking changes, CI robusto |
| **ZeroClaw** | Desenvolvedores individuais e small teams | Termux, cross-platform, observabilidade |
| **NanoBot** | Multi-provider power users | OpenRouter, Claude Code, Feishu |
| **Hermes Agent** | Operadores de sistemas | Cron delivery, hooks, multi-agent |
| **CoPaw** | Usuários mobile/web | WebUI, timezone bugs, mobile layout |
| **PicoClaw** | Privacidade/segurança | vodozemac migration, E2EE |

### 5.3 Diferenciação Técnica Relevante

| Foco | Líder | Seguidor(es) | Implicação |
|------|-------|--------------|------------|
| **Volume de contributors** | Hermes Agent (16 merged/dia) | IronClaw, ZeroClaw | Capacidade de reviewer é bottleneck |
| **Segurança ativa** | ZeroClaw (3+ PRs segurança/dia) | NanoBot, IronClaw | Culture de security-first |
| **Multi-agent maduro** | NanoBot (subagent override) | Hermes (self-escalation) | Arquitetura de orquestração em construção |
| **Cross-platform** | ZeroClaw (Termux, Android) | NanoBot (Windows fix) | Mobile/embedded como vetor de crescimento |
| **Bug ratio saudável** | IronClaw (test coverage focus) | NanoBot, Hermes | QA investment diferencia maturidade |

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração

| Tier | Projeto | Itens/dia | Interpretação |
|------|---------|-----------|---------------|
| **🚀 Fast mover** | Hermes Agent | ~100 | Comunidade massiva, alta capacidade de review |
| **⚡ High velocity** | IronClaw, ZeroClaw | 38-72 | Projetos com investimento significativo de time |
| **📈 Consistent** | NanoBot | 16 | Ritmo sustentável, foco em qualidade |
| **🔧 Stabilizing** | CoPaw | 16 | Bug reports altos = base de usuários ativa |
| **🔄 Maintenance** | PicoClaw | 7 | Projeto maduro, baixa churn |
| **💤 Inactive** | NullClaw | 0 | Risco de abandono |

### 6.2 Indicadores de Maturidade

| Indicador | Melhor performer | Observação |
|-----------|------------------|-------------|
| **Test coverage culture** | IronClaw | 5+ PRs simultâneos de teste de integração |
| **Bug triagem rápido** | CoPaw | Resposta <24h a bugs reportados |
| **RFC process estruturado** | ZeroClaw | 3+ RFCs em andamento (#6165, #8462, #8603) |
| **Segurança como feature** | ZeroClaw | PRs dedicados a hardening |
| **Breaking changes gerenciadas** | IronClaw | Migration stack 4/4 documentada |
| **Onboarding robusto** | ZeroClaw (falha) | `config init` template quebrado = prioridade |

### 6.3 Dívida Técnica Identificada

| Projeto | Dívida | Risco |
|---------|--------|-------|
| **IronClaw** | CI E2E falhando há 40 dias (#4108) | Confiança em main branch |
| **NanoBot** | PRs P1 pendentes 10+ dias (#4545, #4671) | Segurança/compatibilidade |
| **CoPaw** | 69% bugs/issues | Qualidade de release |
| **ZeroClaw** | Config template quebrado (#8718) | Onboarding de novos usuários |
| **PicoClaw** | libolm não mantido (#3088) | Segurança E2EE |

---

## 7. Sinais de Tendência

### 7.1 Tendências Extraídas do Feedback

| Tendência | Projetos | Evidência |
|-----------|----------|-----------|
| **OAuth como padrão de autenticação** | IronClaw, NanoBot | Slack OAuth migration, Claude Code OAuth |
| **Multi-provider diversification** | NanoBot, Hermes, ZeroClaw | OpenCode, GLM-5.2, Bocha AI, Bedrock |
| **Cross-platform first-class** | NanoBot, ZeroClaw | Windows fixes, Android Termux |
| **Mobile/responsive design** | CoPaw, NanoBot, ZeroClaw | 3 projetos com issues mobile |
| **Enterprise features (multi-tenancy)** | CoPaw (#5780) | Feature request de gestão de equipes |
| **Observabilidade e OTel** | ZeroClaw | RFC #8462 sobre políticas OTel |
| **SOP/Workflow automation** | ZeroClaw | Epic tracker SOP milestone |
| **Memory/context management** | Hermes, CoPaw | Spill-to-disk, auto-memory turn states |

### 7.2 Padrões de Demandas Emergentes

```
┌─────────────────────────────────────────────────────────────┐
│  CORPORATE / ENTERPRISE                                     │
├─────────────────────────────────────────────────────────────┤
│  • OAuth Slack/Feishu/Telegram (autenticação segura)       │
│  • Multi-usuário / gestão de equipes (#5780)               │
│  • Controle de acesso granular (capabilities, allowlists)  │
│  • Proxy/custom endpoints corporativos                     │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  DEVELOPER EXPERIENCE                                        │
├─────────────────────────────────────────────────────────────┤
│  • Claude Code integration (#4699)                          │
│  • Windows compatibility (#4545)                           │
│  • Mobile responsive WebUI                                 │
│  • Offline mode (#5781)                                    │
│  • Clear error messages (#4698)                           │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  SECURITY / COMPLIANCE                                       │
├─────────────────────────────────────────────────────────────┤
│  • DNS pinning / SSRF prevention (#4671)                   │
│  • Credential protection (token guards, env vars)          │
│  • E2EE modernizado (vodozemac > libolm)                  │
│  • File access whitelist (#45291)                          │
└─────────────────────────────────────────────────────────────┘
```

### 7.3 Projeções para os Próximos 30-60 dias

| Projeto | Projeção | Condição |
|---------|----------|----------|
| **IronClaw** | Release com Slack OAuth v2 | Se CI E2E for corrigido |
| **ZeroClaw** | v0.8.3 com SOP milestone | Se #8718 (config template) for priorizado |
| **NanoBot** | Patch release com Windows fix + SSRF | Se PRs P1 forem reviewados |
| **CoPaw** | v2.0 com multi-usuário | Se bugs críticos (Feishu, mobile) resolvidos |
| **Hermes Agent** | Maior release do período | Base de código madura, alto volume |

---

## Conclusão

O ecossistema de agentes de IA open source em 2026-07-06 demonstra **fragmentação produtiva**: enquanto IronClaw, Hermes Agent e ZeroClaw lideram em volume e maturidade, NanoBot ocupa posição competitiva como arquitetura MCP-first com foco em interoperability. A tendência clara é de convergência para OAuth como padrão de autenticação, multi-provider como baseline, e cross-platform como requisito — não diferenciação. O maior risco sistêmico é a **ausência de releases em todos os projetos**, sinalizando que a indústria está em modo de consolidação técnica antes de compromissos de versionamento estável. Para adotantes enterprise, **IronClaw e ZeroClaw** oferecem trajetórias mais previsíveis; para ecossistemas centrados em interoperability e multi-agent, **NanoBot** representa alternativa viável com dívida técnica gerenciável.

---

*Relatório gerado em 2026-07-06 com base em dados de atividade comunitária dos repositórios GitHub analisados.*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>


# Relatório de Projeto NanoBot — 2026-07-06

**Repositório:** [HKUDS/nanobot](https://github.com/HKUDS/nanobot)  
**Período:** Últimas 24 horas

---

## 1. Panorama do Dia

O projeto NanoBot mantém alta atividade de desenvolvimento com **15 PRs atualizados** nas últimas 24h, dos quais **2 foram fechados/merged** e **13 permanecem abertos** em avaliação. O volume de PRs indica uma fase intensa de integração de features e correções. A atividade de issues permanece moderada com apenas 1 issue aberta, relacionada a uma solicitação de flexibilidade na configuração do canal Telegram. Não houve releases novas, sinalizando que o ciclo de版本 ainda não fechou para esta data. O tempo de resposta da comunidade permanece ativo, com contribuições de múltiplos autores (yu-xin-c, axelray-dev, hamb1y, entre outros).

---

## 2. Lançamentos

**Nenhum novo release registrado nas últimas 24 horas.**

O projeto não publicou versões novas neste período. Recomenda-se monitorar os PRs em fase final de review — especialmente correções de segurança P0/P1 — que podem acelerar um patch release.

---

## 3. Progresso do Projeto

### PRs Fechados/Merged (2)

| # | PR | Autor | Impacto |
|---|-----|-------|---------|
| [#4441](https://github.com/HKUDS/nanobot/pull/4441) | fix(mcp): force-close streamable_http generator on reconnect failure | michaelxer | **Crítico** — Resolve `RuntimeError` que causava crash no Gateway quando sessões MCP eram terminadas e o código de reconexão executava `_close_server`. Corrige instabilidade em ambientes com agentes MCP. |
| [#4699](https://github.com/HKUDS/nanobot/pull/4699) | fix(providers): add Anthropic OAuth with env-var-aware login/logout | axelray-dev | **Melhoria de DX** — Integração OAuth do Anthropic com suporte a variável de ambiente `CLAUDE_CODE_OAUTH_TOKEN`, melhorando experiência para desenvolvedores que usam Claude Code. |

### Destaque de Avanço Técnico

- **Segurança de rede:** O PR [#4671](https://github.com/HKUDS/nanobot/pull/4671) (open) implementa DNS pinning para validação SSRF, garantindo que web fetches e probes MCP usem IPs validados, eliminando vetores de ataque por DNS rebinding.
- **Subagent Manager:** Dois PRs ([#4623](https://github.com/HKUDS/nanobot/pull/4623), [#4624](https://github.com/HKUDS/nanobot/pull/4624)) ampliam controle de subagentes com override de modelo e modo de resultado agregado, indicando maturidade na arquitetura multi-agente.
- **Sandbox Exec:** O PR [#4625](https://github.com/HKUDS/nanobot/pull/4625) adiciona binds configuráveis para `bwrap`, permitindo exposição de diretórios de usuário (`~/.local/bin`, `~/.cargo/bin`) no sandbox — demanda comum em ambientes de desenvolvimento.

---

## 4. Temas Quentes da Comunidade

### Issue em Destaque

| # | Título | Reações | Comentários | Tendência |
|---|--------|---------|-------------|-----------|
| [#4702](https://github.com/HKUDS/nanobot/issues/4702) | [enhancement] Support custom API Base URL and request headers for Telegram Channel | 0 👍 | 0 | **Solicitação de flexibilidade** — Usuários precisam configurar endpoints Telegram customizados para ambientes corporativos ou proxies avançados. A issue menciona que o proxy atual resolve restrições de rede, mas não cobre cenários com API endpoints alternativos. |

### Análise de Demandas

A issue de Telegram (#4702) representa um **padrão recorrente** em projetos de agentes: necessidade de **customização de canais** além da configuração padrão. O crescimento de integrações corporativas (Feishu, Telegram, etc.) aumenta a pressão por configurabilidade flexível.

---

## 5. Bugs e Estabilidade

### Por Severidade

| Prioridade | # | Título | Status | Descrição |
|------------|---|--------|--------|-----------|
| **P0** | [#4671](https://github.com/HKUDS/nanobot/pull/4671) | fix: pin validated dns for ssrf checks | Open | **Segurança crítica** — Web fetches e probes MCP vulnerable a DNS rebinding attacks. Fix implementa DNS pinning. |
| **P1** | [#4545](https://github.com/HKUDS/nanobot/pull/4545) | fix(exec): default Windows commands to PowerShell | Open | **Compatibilidade Windows** — Comandos de linha única falhavam silenciosamente no Windows por rota incorreta via `cmd.exe`. |
| **P1** | [#4701](https://github.com/HKUDS/nanobot/pull/4701) | fix(mcp): prevent process crash on MCP tool call exceptions | Open | **Estabilidade MCP** — Exceções não capturadas no wrapper MCP causavam crash no agent loop. Agora captura `BaseException`. |
| **P1** | [#4700](https://github.com/HKUDS/nanobot/pull/4700) | fix: limit long MCP-derived tool names | Open | **Validação de API** — Nomes de tools derivados de MCP muito longos causam erro `'Invalid function name'` na API do modelo. |
| **P2** | [#4694](https://github.com/HKUDS/nanobot/pull/4694) | fix(webui): keep chat viewport and composer inside narrow viewports | Open | **UX mobile** — Layout WebUI estoura `100vw` em viewports estreitos, cortando conteúdo à esquerda. |
| **P2** | [#4698](https://github.com/HKUDS/nanobot/pull/4698) | fix(providers): standardize oauth_cli_kit error messages | Open | **UX consistente** — Mensagens de erro inconsistentes entre CLI e WebUI para provider OAuth. |

### Análise de Estabilidade

**3 bugs P1 abertos** representam foco prioritário:
- 2 relacionados a **segurança** (SSRF, crash)
- 1 relacionado a **compatibilidade Windows**

A quantidade de correções MCP (3 PRs) indica que esta integração ainda está em maturização.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Abertas

| # | Título | Prioridade | Autor | Área |
|---|--------|------------|-------|------|
| [#4763](https://github.com/HKUDS/nanobot/pull/4763) | feat(feishu): add new session divider and reasoning panel | — | chengyongru | Canal Feishu |
| [#4623](https://github.com/HKUDS/nanobot/pull/4623) | feat(subagent): allow spawn model override | — | yu-xin-c | Subagent Manager |
| [#4624](https://github.com/HKUDS/nanobot/pull/4624) | feat(subagent): add aggregated result mode | — | yu-xin-c | Subagent Manager |
| [#4620](https://github.com/HKUDS/nanobot/pull/4620) | add heartbeat trigger command | — | yu-xin-c | CLI/Gateway |
| [#4686](https://github.com/HKUDS/nanobot/pull/4686) | feat: support canonical opencode provider | P2 | hamb1y | Providers |
| [#4406](https://github.com/HKUDS/nanobot/pull/4406) | feat(web-search): add Serper.dev (Google Search API) provider | — | franciscomaestre | WebSearch |

### Tendências de Roadmap

1. **Multi-provider maturando:** Integração de OpenCode canônico (#4686) e novo provider Serper.dev (#4406) indica estratégia de diversificação de provedores de IA e busca.
2. **Subagent como cidadão de primeira classe:** Os PRs #4623, #4624 e #4620 mostram investimento em arquitetura multi-agente com controle granular de modelos e resultados.
3. **UX cross-platform:** Correções Windows (#4545) e mobile WebUI (#4694) indicam atenção a experiência em ambientes não-Linux.

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Dor | Evidência | Prioridade Implícita |
|-----|-----------|---------------------|
| **Inflexibilidade do Telegram** | Issue #4702 — necessidade de API base URL customizável para ambientes corporativos/proxy | Alta |
| **Quebras no Windows** | PR #4545 — `cd` entre drives falha, variáveis POSIX não funcionam em `cmd.exe` | Alta |
| **Instabilidade MCP** | PRs #4441, #4701 — crashes intermitentes e erros de generator em reconexões | Crítica |
| **UX Mobile inconsistente** | PR #4694 — layout WebUI quebra em viewports estreitos | Média |
| **Mensagens de erro confusas** | PR #4698 — desenvolvedores não entendem que precisam instalar `oauth-cli-kit` | Média |

### Cenários de Uso Emergentes

- **Uso corporativo com restrições de rede:** Proxy Telegram não é suficiente; necessidade de endpoints customizados.
- **Ambientes Windows como primeira classe:** O projeto está修正ando suposições Linux-centric no execution layer.
- **Desenvolvimento com Claude Code:** Suporte a variável de ambiente `CLAUDE_CODE_OAUTH_TOKEN` indica base de usuários usando Claude Code como driver.

---

## 8. Backlog que Merece Atenção

### Issues/PRs Sem Resposta há >7 dias

| # | Tipo | Título | Criado | Dias Inativo | Prioridade |
|---|------|--------|--------|--------------|------------|
| [#4406](https://github.com/HKUDS/nanobot/pull/4406) | PR | feat(web-search): add Serper.dev provider | 2026-06-18 | ~18 dias | Enhancement | 
| [#4545](https://github.com/HKUDS/nanobot/pull/4545) | PR | fix(exec): Windows PowerShell default | 2026-06-26 | ~10 dias | P1 Bug |

### Análise do Backlog

- **PR #4406 (Serper.dev)** está pendente há 18 dias sem atualização — representa uma feature relativamente direta (novo provider de busca) que pode estar aguardando review ou decisão de design sobre provedores de busca.
- **PR #4545 (Windows fix)** pendente há 10 dias com label P1 — o tempo de latência em bug de compatibilidade Windows pode impactar adoção em ambientes enterprise Windows.

### Recomendações

1. **Priorizar review de PRs P1** — bugs Windows (#4545) e segurança SSRF (#4671) merecem atenção imediata.
2. **Revisar PR #4406** — provider de busca pode ser baixa friction para merge se não houver dependências.
3. **Comunicar timeline de release** — ausência de releases nas últimas 24h pode gerar incerteza na comunidade sobre quando features merged serão disponibilizadas.

---

**Gerado em:** 2026-07-06  
**Próxima atualização recomendada:** 2026-07-07

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent
## NousResearch/hermes-agent — 2026-07-06

---

## 1. Panorama do Dia

O projeto Hermes Agent mantém **alta atividade** em 06/07/2026, com 50 issues e 50 PRs atualizados nas últimas 24 horas — demonstrando um ritmo intenso de desenvolvimento. Não houve novas releases, indicando que a equipe pode estar em ciclo de consolidação ou preparação para lançamento. Entre os destaques, observa-se convergência em dívida técnica (remoção massiva de `# noqa` comments) e avanços em features de orquestração multi-agente. Dois bugs de severidade P1 relacionados a cron delivery foram fechados, mas há evidências de problemas persistentes de estabilidade no gateway, especialmente em cenários de entrega de mensagens e reinicializações planejadas.

---

## 2. Lançamentos

**Nenhuma nova release registrada nas últimas 24h.**

A ausência de releases sugere que a base de código está em transição ou aguardando validação dos últimos merged PRs antes de um próximo tag.

---

## 3. Progresso do Projeto

### PRs Merged/Closed (16 total)

| # | PR | Descrição | Impacto |
|---|-----|-----------|---------|
| [#58881](https://github.com/NousResearch/hermes-agent/pull/58881) | fix(feishu): send WebSocket CLOSE frame on disconnect | Envia frame WebSocket CLOSE ao desconectar, evitando silêncio no Feishu após restart do gateway | **Alta** |
| [#20468](https://github.com/NousResearch/hermes-agent/pull/20468) | feat(hooks): spill oversized hook-injected context to disk | Contextos >10k chars agora são spillados para `$HERMES_HOME/hook_outputs/` com preview | **Média** |
| [#52750](https://github.com/NousResearch/hermes-agent/pull/52750) | feat(mcp): adopt mcp__server__tool naming convention | Adota convenção `mcp__<server>__<tool>` (double-underscore) — compatibilidade com Claude Code/Codex | **Alta** |
| [#58884](https://github.com/NousResearch/hermes-agent/pull/58884) | feat(providers): GLM-5.2 native reasoning_effort controls | Habilita controle nativo de `reasoning_effort` para GLM-5.2 via Z.AI | **Média** |
| [#35343](https://github.com/NousResearch/hermes-agent/pull/35343) | fix(mattermost): use per-call aiohttp ClientSession | Corrige `Timeout context manager should be used inside a task` em Mattermost | **Média** |
| [#52336](https://github.com/NousResearch/hermes-agent/pull/52336) | fix: remove dead f-string prefixes (216 sites) | Limpeza automática via `ruff F541` — sem alterações funcionais | **Baixa** |
| [#51489](https://github.com/NousResearch/hermes-agent/pull/51489) | chore(providers): remove dead cloudcode-pa quota-fallback branches | Remove código inalcançável após remoção de google-antigravity/gemini-cli | **Baixa** |
| [#18026](https://github.com/NousResearch/hermes-agent/pull/18026) | test(auxiliary): guard raw-URL plumbing for Anthropic-compat | Suite de regressão para endpoints compatíveis com Anthropic (MiniMax-CN, Kimi Coding) | **Média** |

### PRs Abertos Relevantes

| # | PR | Descrição |
|---|-----|-----------|
| [#59105](https://github.com/NousResearch/hermes-agent/pull/59105) | chore: add Hermes self-improvement safety gates | Adiciona gates de segurança MCP e skill bundle para auto-improvement |
| [#59101](https://github.com/NousResearch/hermes-agent/pull/59101) | Add local provider overlay | Adiciona `local` como provider first-class com `LOCAL_BASE_URL` — acesso sem API key para endpoints loopback/privados |
| [#59106](https://github.com/NousResearch/hermes-agent/pull/59106) | feat(web-search): add Yandex Search API provider | Novo provedor de busca via Yandex Cloud WebSearch API |
| [#56859](https://github.com/NousResearch/hermes-agent/pull/56859) | feat(optional-skills): add mind | Wrapper para skill `mind` — memória offline per-project, zero dependências, MIT |
| [#37176](https://github.com/NousResearch/hermes-agent/pull/37176) | feat(agent): opt-in recovery hook for wedged local inference backends | Hook configurável para recovery de backends locais que wedgam |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

1. **[#18080](https://github.com/NousResearch/hermes-agent/issues/18080)** — `📢 46 👍` — **Feature: Improved Themes for Dashboard**
   - **Status:** ABERTA | **Prioridade:** P3 | **Comentários:** 27
   - **Resumo:** Temas atuais (Midnight, Ember, Mono, Cyberpunk, Rose) apenas mudam esquema de cores. Usuários reclamam de fontes serif pequenas, peso leve e pouco contraste — ilegibilidade no dashboard.
   - **Análise:** Demanda recorrente de UX. A comunidade demonstra frustração significativa (46 👍). A solução proposta é expandir além de "color scheme" para incluir tipografia e contraste adequados.

2. **[#344](https://github.com/NousResearch/hermes-agent/issues/344)** — `📢 20 👍` — **Multi-Agent Architecture — Orchestration, Cooperation & Resilient Workflows**
   - **Status:** FECHADA | **Comentários:** 26
   - **Resumo:** Issue guarda-chuva para evoluir Hermes de sistema single-agent para arquitetura multi-agent com orquestração, cooperação, papéis especializados e workflows resilientes.
   - **Análise:** Este é o **tema estratégico central** do projeto. O fechamento indica que o roadmap de multi-agent está em execução ativa. Provavelmente subsumido em milestones maiores.

3. **[#7273](https://github.com/NousResearch/hermes-agent/issues/7273)** — `📢 5 👍` — **Feature: add runtime reasoning_effort tool**
   - **Status:** ABERTA | **Prioridade:** P3 | **Comentários:** 2
   - **Resumo:** Adicionar tool `reasoning_effort` para agentes ajustarem esforço de raciocínio "on the fly" durante a sessão, sem depender de slash commands do usuário.
   - **Conexão:** Correlaciona-se com [#50240](https://github.com/NousResearch/hermes-agent/issues/50240) (self-escalation mechanism).

---

## 5. Bugs e Estabilidade

### Bugs P1 — Críticos (2 fechadas hoje, evidências de problemas persistentes)

| # | Bug | Severidade | Status | Descrição |
|---|-----|------------|--------|-----------|
| [#58720](https://github.com/NousResearch/hermes-agent/issues/58720) | Cron delivery fails with `RuntimeError('cannot schedule new futures after interpreter shutdown')` | P1 | **CLOSED** | Cron jobs direcionados ao Telegram falham com erro de scheduling de futures após shutdown |
| [#58818](https://github.com/NousResearch/hermes-agent/issues/58818) | Planned-restart fires while cron delivery is in-flight — message silently dropped | P1 | **CLOSED** | Gateway reinicia durante entrega de cron output — mensagem perdida sem retry |

**⚠️ Alerta:** Mesmo fechadas, essas issues indicam vulnerabilidades no pipeline de message delivery. Recomenda-se monitorar regressões.

### Bugs P2 — Altos (4 abertos)

| # | Bug | Componente | Descrição |
|---|-----|------------|-----------|
| [#59089](https://github.com/NousResearch/hermes-agent/issues/59089) | ACP session/set_model reroutes to OpenRouter | comp/acp | Seleção explícita `provider:model` é silenciosamente redirecionada para OpenRouter |
| [#58908](https://github.com/NousResearch/hermes-agent/issues/58908) | Gateway tool dispatch returns fewer skills than fresh subprocess | comp/gateway | `_find_all_skills` retorna resultado divergente entre gateway em execução e novo processo Python |
| [#59020](https://github.com/NousResearch/hermes-agent/issues/59020) | Matrix DM auto-threading can make root /stop miss active runs | comp/gateway, platform/matrix | Com `MATRIX_DM_AUTO_THREAD=true`, `/stop` root pode perder runs ativos |
| [#59084](https://github.com/NousResearch/hermes-agent/issues/59084) | Out-of-band user interrupt messages lost when agent hits max output tokens | comp/agent | Mensagens de interrupt enviadas quando agente atinge max output tokens são perdidas |

### Bugs P3 — Médios (8 abertos, selecionados)

| # | Bug | Componente |
|---|-----|------------|
| [#46593](https://github.com/NousResearch/hermes-agent/issues/46593) | kanban worker exits rc=0 without calling `kanban_complete` | comp/cron |
| [#46782](https://github.com/NousResearch/hermes-agent/issues/46782) | No automatic recovery after desktop update handoff fails | comp/tui |
| [#58994](https://github.com/NousResearch/hermes-agent/issues/58994) | **[🔒 SECURITY]** Telegram adapter logs HTTPS_PROXY URL with embedded credentials at INFO | platform/telegram |
| [#58955](https://github.com/NousResearch/hermes-agent/issues/58955) | bug(gateway): _auto_continue_freshness_window lazy import causes ImportError crash-loop | comp/gateway |
| [#59097](https://github.com/NousResearch/hermes-agent/issues/59097) | Slack adapter routes async/cron deliveries to stale thread context | platform/slack |

**🔒 Segurança:** Issue [#58994](https://github.com/NousResearch/hermes-agent/issues/58994) merece atenção imediata — credenciais podem vazar em logs em produção.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Abertas Destacadas

| # | Feature | Componente | Descrição |
|---|---------|------------|-----------|
| [#50240](https://github.com/NousResearch/hermes-agent/issues/50240) | Self-escalation mechanism — dynamic thinking ON/OFF per turn | comp/agent | Permitir toggle dinâmico de reasoning por turno para otimizar custos em APIs pagas (2000-3000 tokens reasoning) |
| [#53113](https://github.com/NousResearch/hermes-agent/issues/53113) | Add `model_catalog.visible_models` config | comp/cli | Filtrar modelos no picker — actualmente exibe centenas de modelos não configurados |
| [#7273](https://github.com/NousResearch/hermes-agent/issues/7273) | Runtime `reasoning_effort` tool | comp/agent, comp/tools | Agentes ajustam próprio reasoning effort durante sessão |
| [#7209](https://github.com/NousResearch/hermes-agent/issues/7209) | Support `model.extra_body` passthrough | comp/agent, comp/cli, comp/gateway | Permitirarbitrary `extra_body` em config.yaml para CLI/gateway |
| [#45291](https://github.com/NousResearch/hermes-agent/issues/45291) | User-configurable file access whitelist | comp/tools, tool/file | Whitelist para operações de arquivo — mitigar acesso irrestrito ao filesystem |
| [#59088](https://github.com/NousResearch/hermes-agent/issues/59088) | Allow non-conflicting slash commands while agent is running | comp/cli | Executar `/yolo` e similares mesmo com agente ativo |
| [#59070](https://github.com/NousResearch/hermes-agent/issues/59070) | Expose `auxiliary_client` as one-shot delegate_completion tool | comp/agent, tool/delegate | Evitar overhead de agent-loop para trabalho de text-transform simples |
| [#59067](https://github.com/NousResearch/hermes-agent/issues/59067) | Pass `rule_key` through from `pre_tool_call` approve directive | comp/tools, comp/plugins | Permitir propagação de `rule_key` no hook de aprovação |

### Sinais de Roadmap

1. **Multi-Agent Architecture** (#344 closed) — Estratégia clara de evolução para orquestração
2. **Local Provider Support** (#59101 open) — Expansão para inference local/Tailscale/self-hosted
3. **Offline Memory** (#56859 open) — Capacidade per-project memory com zero dependências
4. **Yandex Search** (#59106 open) — Diversificação de provedores de busca

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Categoria | Issue | Feedback |
|-----------|-------|----------|
| **UX/Dashboard** | [#18080](https://github.com/NousResearch/hermes-agent/issues/18080) | *"The selection of fonts and colours is non-standard. Serif fonts, especially small and light font weight with little contrast makes the d..."* — 46 👍 |
| **Custo de API** | [#50240](https://github.com/NousResearch/hermes-agent/issues/50240) | Usuários de OpenRouter/OpenAI pagam 2000-3000 tokens de reasoning em cada chamada mesmo quando desnecessário — sem granularidade |
| **Segurança** | [#58994](https://github.com/NousResearch/hermes-agent/issues/58994) | Proxy credentials expostas em logs INFO — risco em produção com Infisical Agent Vault MITM |
| **Recuperação** | [#46782](https://github.com/NousResearch/hermes-agent/issues/46782) | Após falha de handoff de update desktop, usuário fica impossibilitado de launch ou reinstall |
| **Model Picker** | [#53113](https://github.com/NousResearch/hermes-agent/issues/53113) | Centenas de modelos não configurados visíveis poluem o picker |
| **Desktop** | [#40903](https://github.com/NousResearch/hermes-agent/issues/40903) | Hermes Desktop droppa mensagens intermediárias em multi-message turns — apenas a última é renderizada |

### Cenários de Uso Emergentes

- **Multi-step workflows com delegação** — Demanda por phase-based routing (#54839 closed)
- **In

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-07-06

---

## 1. Panorama do Dia

O projeto PicoClaw demonstra **atividade moderada** na data de hoje, com 5 PRs atualizadas e 2 issues processadas nas últimas 24 horas. A atividade concentra-se em **manutenção contínua**: duas issues de chore/pull request para Docker e configuração, um refactoring significativo no módulo deltachat (-320 LOC), e uma correção de bug relacionada à sobrescrita de arquivos. Nenhum release foi publicado, e a issue aberta de maior prioridade (#3088) — substituição de libolm por vodozemac — permanece aguardando contribuições externas. O projeto segue saudável, com manutenção ativa mas sem marcos de destaque hoje.

---

## 2. Lançamentos

**Nenhum release publicado nas últimas 24 horas.**

O projeto não registrou novas versões. O último release disponível pode ser consultado diretamente no repositório: [sipeed/picoclaw Releases](https://github.com/sipeed/picoclaw/releases).

---

## 3. Progresso do Projeto

### PR Closed/Retirada:
| # | Título | Impacto |
|---|--------|---------|
| [#3189](https://github.com/sipeed/picoclaw/pull/3189) | `fix(line): explicitly ignore resp.Body.Close() errors` | **Resolvido** — Limpeza de manejo de resposta HTTP no canal LINE (Reply API e helper `classifySDKError`). Corrigia vazamento de recursos em código existente. Status: stale/fechada. |

### PRs Abertas (merecem atenção para merge):
| # | Título | Complexidade | Prioridade |
|---|--------|--------------|------------|
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) | `refactor(deltachat): cleanup impl, documentation -320LOC` | Alta | ⭐ Refactoring significativo |
| [#3226](https://github.com/sipeed/picoclaw/pull/3226) | `fix(tools): stop write_file from coaching destructive overwrite` | Média | 🔧 Bug fix direto |
| [#3192](https://github.com/sipeed/picoclaw/pull/3192) | `chore(docker): bump goreleaser base images` | Baixa | 🔄 Atualização trivially |
| [#3191](https://github.com/sipeed/picoclaw/pull/3191) | `chore: remove duplicate build/ entry in .gitignore` | Baixa | 🔄 Cleanup config |

**Destaque:** A PR [#3222](https://github.com/sipeed/picoclaw/pull/3222) do contribuidor `trufae` é o item mais relevante em progresso — remove features legadas, atualiza referências para a lista oficial de relays, elimina configuração de email via senha, e renomeia `invite_link` → `join_invite_link`. Redução de ~320 linhas de código e melhoria de consistência.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento:

**#3088 — [Feature] use vodozemac instead of libolm** 🔥
- 📊 6 comentários, 2 reações 👍
- 🏷️ Labels: `help wanted`, `priority: high`
- 🔗 [Issue #3088](https://github.com/sipeed/picoclaw/issues/3088)
- **Resumo da demanda:** A comunidade solicita a substituição da biblioteca `libolm` (atualmente sem manutenção e considerada insegura) pelo `vodozemac`, que é a biblioteca oficial recomendada como sucessor. A proposta sugere tornar `libolm` opcional em tempo de compilação.

**Análise:** Esta issue representa uma demanda de **modernização de segurança**. O `libolm` é a biblioteca central para criptografia E2EE (end-to-end encryption) no Matrix. O `vodozemac` é o reemplazo em Rust mantido pela equipe do Matrix, com suporte ativo. A ausencia de manutenção do libolm é um risco de longo prazo. O fato de estar marcada como `help wanted` indica que a equipe principal reconhece a necessidade mas não tem capacidade interna para implementar — oportunidade para contribuidores externos.

---

## 5. Bugs e Estabilidade

### Issue Reportada (agora fechada):
| # | Título | Severidade | Status |
|---|--------|------------|--------|
| [#3150](https://github.com/sipeed/picoclaw/issues/3150) | `BUG: 它给自己整失忆了` ("It gave itself amnesia") | Desconhecida (stale) | ❌ Closed |

**Detalhe:** Issue reportada em 2026-06-19, 5 comentários, status stale/fechada. O título sugere um problema de perda de memória/contexto do agente. A fechamento como stale indica que não houve resposta da equipe ou do autor, não necessariamente que foi resolvida.

**Potencial preocupação:** Se a issue #3150 foi fechada sem resolução e marcada como stale, há risco de problema não investigado. Recomenda-se que contribuidores verifiquem se o bug foi silenciosamente resolvido ou se permanece aberto.

### Correção Em Progresso:
**#3226 — `fix(tools): stop write_file from coaching destructive overwrite`**
- 🔗 [PR #3226](https://github.com/sipeed/picoclaw/pull/3226)
- Corrigindo comportamento do tool `write_file` que "coaxava" o modelo de IA a sobrescrever arquivos existentes em vez de protegê-los.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Nova Feature em Destaque:
**#3088 — Substituir libolm por vodozemac**
- 🔗 [Issue #3088](https://github.com/sipeed/picoclaw/issues/3088)
- 🏷️ `priority: high`, `help wanted`
- **Sinal de roadmap:** Esta feature, se implementada, seria uma mudança arquitetural significativa (substituição de biblioteca de criptografia). A classificação como `high priority` indica que deve estar no roadmap de uma próxima versão major ou de segurança.

### Potenciais Indicadores de Roadmap (via PRs abertas):
| PR | Feature Implicada | Relevância |
|----|-------------------|------------|
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) | Deltachat redesign: invites, official relay list | Modularização e deprecação |
| [#3226](https://github.com/sipeed/picoclaw/pull/3226) | Comportamento mais seguro de tools de arquivo | UX/Segurança de IA |

---

## 7. Resumo de Feedback dos Usuários

### Sentimento Geral:
O feedback captado através das issues é **limitado** (apenas 2 issues total). Aissue #3150 (bug de "amnésia") sugere frustração com comportamento imprevisível do agente de IA. A issue #3088 demonstra preocupação com **segurança e manutenção** — usuários técnicos estão cientes dos riscos de bibliotecas não mantidas.

### Dores Identificadas:
| Dor | Origem | Severidade |
|-----|--------|------------|
| Comportamento imprevisível/perda de contexto | Issue #3150 | ⚠️ Alta (se reproduzível) |
| Dependência de libolm não mantido | Issue #3088 | 🔴 Crítica (segurança) |
| Ferramenta `write_file` encoraja sobrescrita | PR #3226 | 🟡 Média (UX) |

### Cenários de Uso Evidenciados:
- **Criptografia E2EE** (Matrix/deltachat) — issue #3088
- **Canais de mensageria** (LINE) — PR #3189
- **Gestão de memória por arquivo** (memory/MEMORY.md) — PR #3226

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta / Stale:

| # | Título | Criado | Atualizado | Prioridade | Link |
|---|--------|--------|------------|------------|------|
| #3150 | `BUG: 它给自己整失忆了` | 2026-06-19 | 2026-07-05 | ? | [🔗](https://github.com/sipeed/picoclaw/issues/3150) |

### Análise:
A issue #3150 foi fechada como `stale` com 5 comentários mas **sem resolução documentada**. Se o autor reportou um bug legítimo de perda de memória/contexto, este problema pode ainda existir no codebase. Recomenda-se:

1. **Triagem de #3150:** Verificar se o bug foi resolvido em PR posterior (ex: pode ter sido mitigado por #3226?).
2. **Issue #3088:** Atribuir um responsável ou publicar um roadmap de implementação para a substituição do libolm.
3. **Stale PRs:** As PRs #3192 e #3191 (do contribuidor `chengzhichao-xydt`) estão abertas desde 2026-06-27 e merecem review para não se tornarem stale.

---

## Métricas Resumidas (2026-07-06)

| Métrica | Valor |
|---------|-------|
| Issues abertas/ativas (24h) | 1 |
| Issues fechadas (24h) | 1 |
| PRs abertas (24h) | 4 |
| PRs merged/fechadas (24h) | 1 |
| Releases (24h) | 0 |
| Atividade total | **7 itens** |
| Issue mais engajada | #3088 (6 comentários, 2 👍) |
| PR mais significativa | #3222 (refactoring deltachat, -320 LOC) |

**Saúde Geral:** 🟢 **Estável** — Atividade moderada, nenhuma regressão crítica detectada, manutenção ativa de dependências e código. Atenção necessária à issue de segurança #3088 e à triagem da issue #3150.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório de Projeto — IronClaw
## nearai/ironclaw | 2026-07-06

---

## 1. Panorama do Dia

O IronClaw apresenta **atividade excepcionalmente alta** em 06/07/2026, com **33 PRs atualizados** e **5 issues** no período de 24h. A comunidade está focada em três vetores principais: (1) **conclusão da migração do Slack** do sistema de pairing codes legados para OAuth pessoal (stack 4/4 em progresso, PR #5646/#5645); (2) **fortalecimento da cobertura de testes** do Reborn com PRs de testes de integração cobrindo store de estado, contenção CAS, durability e APIs do WebUI v2; e (3) **melhorias na robustez do loop agentico** incluindo correção de JSON de tool-calls corrompidos por providers e quebra de loops repetitivos. Não houve releases formais, indicando trabalho preparatório para uma próxima versão. O build noturno E2E falhou, sinalizando necessidade de atenção à estabilidade do CI.

---

## 2. Lançamentos

### Nenhum release registrado nas últimas 24h

O projeto não publicou novas versões. Isso é consistente com o padrão observável: o trabalho atual está em PRs de feature (Slack OAuth stack 3/4 e 4/4) e refatorações que ainda não foram finalizadas. A ausência de releases sugere que a equipe está em fase de consolidação antes de um próximo tag.

---

## 3. Progresso do Projeto

### PRs Mergeados/Fechados (6)

| # | Título | Escopo | Observações |
|---|--------|--------|-------------|
| [#5637](https://github.com/nearai/ironclaw/issues/5637) | test(reborn): wiring-parity tripwire | Testing | Assegura que o harness de integração espelha a composição de produção |
| [#5604](https://github.com/nearai/ironclaw/pull/5604) | [codex] Remove Slack pairing flow in favor of OAuth setup | Slack, Channel, Tool | **Remoção do fluxo legado de pairing codes** — 121 arquivos modificados, mudança dominada por deleções. Estabelece Slack como channel com identidade via OAuth |
| [#4002](https://github.com/nearai/ironclaw/pull/4002) | build(deps): bump actions group | CI/Dependencies | Atualização de 16 dependências de GitHub Actions |

### Avanços Notáveis em PRs Abertos

**Slack Personal OAuth (Stack 3/4 → 4/4):**
- [#5645](https://github.com/nearai/ironclaw/pull/5645) — `feat(reborn): swap Slack pairing codes for personal OAuth` — Deleta artefatos de pairing (`slack_personal_binding_pairing{,_serve}.rs`, `slack_pairing_notifier.rs`) e integra o novo fluxo OAuth
- [#5646](https://github.com/nearai/ironclaw/pull/5646) — `feat(reborn-cli)!: reject legacy [slack] config fields` — **Breaking change** deliberado: `ironclaw-reborn serve` agora rejeita campos `[slack]` legados (`install_path`, `bot_token`) com rejeição no startup

**Cobertura de Testes Reborn (5 PRs simultâneos):**
- [#5659](https://github.com/nearai/ironclaw/pull/5659) — Corrige #5647: bridge meta-tools sobrevivem a allow-sets estreitos, com testes de regressão e trust-boundary
- [#5661](https://github.com/nearai/ironclaw/pull/5661) — CAS-contention coverage + fix de paridade InMemory store (#5467)
- [#5660](https://github.com/nearai/ironclaw/pull/5660) — Durability do FilesystemOutboundStateStore + PDF extraction
- [#5656](https://github.com/nearai/ironclaw/pull/5656) — Cobertura W5-SLACK-PAIR com `slack-v2-host-beta` no lane de integração
- [#5655](https://github.com/nearai/ironclaw/pull/5655) — W5-WEBUI-API-1: product API do WebUI v2 sobre RebornServices real
- [#5658](https://github.com/nearai/ironclaw/pull/5658) — Metric de cobertura agora conta testes crate-tier (9 crates com 0% reportado, todos com testes reais)

---

## 4. Temas Quentes da Comunidade

### Discussões com Maior Volume/Engajamento

**1. Slack Personal OAuth — Divergência de Escopo OAuth (#5650)**
- **Issue:** [nearai/ironclaw#5650](https://github.com/nearai/ironclaw/issues/5650)
- **Autor:** BenKurrek
- **Demanda:** As cinco capacidades `slack_user` (incluindo `search_messages` que é read-only) carregam o conjunto completo de 11 scopes incluindo `chat:write` — mesmo para operações que não precisam de escrita
- **Análise:** Questão de princípio de menor privilégio; impacta a confiança do usuário ao instalar o bot. Relacionado ao PR #5644 (revisão de `SLACK_PERSONAL_OAUTH_SETUP_SCOPES`)

**2. Bridged Tool Disclosure — Capacidade Allowlist (#5647)**
- **Issue:** [nearai/ironclaw#5647](https://github.com/nearai/ironclaw/issues/5647)
- **Autor:** henrypark133
- **Demanda:** Quando disclosure bridged defere um catálogo >32 ferramentas para bridge meta-tools, os IDs `ironclaw.*` sintéticos não fazem parte de nenhum capability set concedido
- **Ação:** PR #5659 já aberto como correção — indica prioridade alta dada a autoria de henrypark133

**3. Refatoração de Erros — 90 Sites de Silent Drop (#5662)**
- **PR:** [nearai/ironclaw#5662](https://github.com/nearai/ironclaw/pull/5662)
- **Autor:** ilblackdragon (core)
- **Demanda:** Converter `let _ = <fallible>` silenciosos em formas explícitas que revelam intenção, concentrados em `host_runtime`, `reborn_composition`, `hooks`
- **Impacto:** Melhora debuggability e adherence a `#[must_use]` patterns

---

## 5. Bugs e Estabilidade

### Falha de CI
- **[#4108](https://github.com/nearai/ironclaw/issues/4108)** — `Nightly E2E failed` (reportado por github-actions[bot])
  - **Severidade:** Alta
  - **Job falho:** Full E2E / E2E (features)
  - **Run:** [28729379670](https://github.com/nearai/ironclaw/actions/runs/28729379670)
  - **Commit:** 85c02c29fd6b3231e28f0abacb78fe06ebd2334c
  - **Status:** Aberto desde 2026-05-27 — indicar recorrência

### Problemas Abertos

| # | Título | Severidade | Notas |
|---|--------|------------|-------|
| [#5647](https://github.com/nearai/ironclaw/issues/5647) | Bridged tool disclosure + narrowed capability allowlist | **Alta** | Security-sensitive: bridge meta-tools são stripados incorretamente |
| [#5665](https://github.com/nearai/ironclaw/pull/5665) | Provider-corrupted tool-call argument JSON (PR) | **Média** | Providers OpenAI-compat (OpenRouter, DeepSeek) sangram XML nativo através da tradução |
| [#4108](https://github.com/nearai/ironclaw/issues/4108) | Nightly E2E failure | **Alta** | Falha recorrente (aberto há >1 mês) |

### Correções em Progresso

- **[#5659](https://github.com/nearai/ironclaw/pull/5659)** — `fix(reborn): bridge meta-tools survive narrowed allow-sets` — **Marcado como PRODUCTION CHANGE** com regress + trust-boundary tests

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Demandas Identificadas

**Issue #5650 — Per-Capability Scope Split para Slack OAuth**
- **Link:** [nearai/ironclaw#5650](https://github.com/nearai/ironclaw/issues/5650)
- **Proposta:** Separar scopes OAuth em read (3 scopes) vs write (11 scopes) como opt-in
- **Sinal de roadmap:** O trabalho em #5645/#5646 indica que a migração OAuth está em closing; variações de scope granular podem ser a próxima evolução

**PR #5666 — Repetition Breaker para Agentic Loop v1**
- **Link:** [nearai/ironclaw#5666](https://github.com/nearai/ironclaw/pull/5666)
- **Feature:** Nudge corretivo quando o agente entra em loop de tool-calls idênticos repetidos
- **Diferenciação:** Distinto do work em Reborn (#5287) que termina em falhas repetidas — este "nudges" em vez de parar
- **Nota:** Draft — posted for maintainer direction

**PR #5663 — Hardening de Prompt Context Assembly**
- **Link:** [nearai/ironclaw#5663](https://github.com/nearai/ironclaw/pull/5663)
- **Features:**
  - Compaction truncation
  - Drop de observabilidade
  - Opt-in instruction budget
- **Impacto:** Previne perda silenciosa de contexto e custo token unbounded por turno

### Sinais de Infraestrutura/Roadmap

- **[#5657](https://github.com/nearai/ironclaw/issues/5657)** — `Coverage scope: v1-only crates exempted` — Tracking issue para crates v1-only isentas do denominador de cobertura Reborn
- **[#5658](https://github.com/nearai/ironclaw/pull/5658)** — Métrica de cobertura agora é mais honesta (conta testes crate-tier)

---

## 7. Resumo de Feedback dos Usuários

> **Nota:** Os dados disponíveis refletem discussões internas da equipe (issues de henrypark133, BenKurrek) e automações (dependabot, github-actions). Não há feedback direto de usuários externos visível nos dados de 24h.

### Insights Extraídos das Issues Internas

| Tema | Sentimento | Contexto |
|------|------------|----------|
| **Segurança de capabilities** | Preocupação técnica | henrypark133 identificou gap no allowlist que pode expor capacidades além do necessário |
| **UX de OAuth Slack** | Melhoria desejada | BenKurrek sinaliza que o scope set atual é mais permissivo do que necessário |
| **Robustez de storage** | Testes revelam gaps | henrypark133 nota que `FilesystemOutboundStateStore` (2.5k linhas) tem zero coverage no tier de integração |
| **Contexto token** | Custo/prevenção de perda | abbyshekit identifica que contextos podem ser truncados silenciosamente |

### Issues com User-Facing Impact

- **[#5650](https://github.com/nearai/ironclaw/issues/5650):** Usuários que instalarem o bot Slack via OAuth届时 terão mais permissões do que o necessário (11 scopes vs ~3 para operações read-only)
- **[#5665](https://github.com/nearai/ironclaw/pull/5665):** Usuários de OpenRouter/NEAR AI Cloud podem ter tool-calls truncados ou com tags XML vazadas

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta/Estagnadas

| # | Título | Idade | Prioridade | Motivo |
|---|--------|-------|------------|--------|
| [#4108](https://github.com/nearai/ironclaw/issues/4108) | Nightly E2E failed | **~40 dias** (27/05) | **Alta** | Falha recorrente de CI não resolvida; impacta confidence no main |
| [#5657](https://github.com/nearai/ironclaw/issues/5657) | v1-only crates exempted from coverage | 1 dia | Baixa (tracking) | Documentação/exclusão deliberada, mas sem decisão explícita |

### PRs Abertos com Alto Impacto

| # | Título | Escopo | Status | Atenção Necessária |
|---|--------|--------|--------|-------------------|
| [#5645](https://github.com/nearai/ironclaw/pull/5645) | Slack pairing → OAuth swap | Breaking, Slack | Aberto | Precisa review + merge (stack 3/4) |
| [#5646](https://github.com/nearai/ironclaw/pull/5646) | Reject legacy [slack] config | Breaking, CLI | Aberto | Review de segurança para rejeição startup |
| [#5666](https://github.com/nearai/ironclaw/pull/5666) | Repetition breaker | Agent loop | Draft | Mantenedores devem direcionar |
| [#5665](https://github.com/nearai/ironclaw/pull/5665) | Provider JSON corruption fix | LLM | Aberto | Afeta OpenRouter/DeepSeek users |

### Métricas de Saúde do Projeto

| Indicador | Valor | Status |
|-----------|-------|--------|
| PRs atualizados (24h) | 33 | 🟢 Muito ativo |
| Issues atualizadas (24h) | 5 | 🟢 Normal |
| Releases (24h) | 0 | 🟡 Preocupação menor (trabalho em progresso) |
| CI/CD (Nightly E2E) | ❌ Falhando | 🔴 Requer atenção |
| Dependabot PRs | 4 abertos | 🟢 Saudável (atualizações de segurança) |
| PRs breaking change | 2 (Slack OAuth) | 🟡 Em revisão |

---

## Conclusão

O IronClaw demonstra **saúde de desenvolvimento alta** com volume de PRs excepcional (33/24h). Os pontos de atenção imediata são:

1. **🔴 Falha de CI (#4108)** — Nightly E2E falhando há ~40 dias
2. **🟡 Slack OAuth migration** — Breaking changes em stack final (4/4), precisa review e merge planejado
3. **🟡 Issue #5650** — Gap de menor privilégio no OAuth scope pode afetar confiança de usuários

**Recomendação:** Priorizar review dos PRs #5646 e #5645 para release planejado da migração OAuth, e investigar a falha recorrente do E2E noturno.

---

*Relatório gerado em 2026-07-06 com base em dados do GitHub nearai/ironclaw*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>


# Relatório de Projeto: CoPaw (QwenPaw)
**Data:** 2026-07-06  
**Repositório:** [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw)

---

## 1. Panorama do Dia

O projeto CoPaw apresenta alta atividade comunitária no dia de hoje, com **13 issues abertas/ativas** e **3 pull requests em aberto** nas últimas 24h. Não houve lançamentos de novas versões. A atividade concentra-se predominantemente em **reportes de bugs** (9 dos 13 issues), com ênfase em problemas de estabilidade na interface mobile, integração com canais externos (Feishu, Google) e bugs no backend de cron jobs. Três PRs estão em revisão, abordando correções críticas de timezone em cron jobs e thresholds de compressão no frontend. O tom geral dos relatórios indica uma base de usuários ativa, com demandas concentradas em usabilidade mobile e confiabilidade de integrações.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

O projeto mantém a versão **v1.1.12.post2** como estável atual, sem update de release durante o período analisado.

---

## 3. Progresso do Projeto

### PRs em Aberto (3)

| # | Título | Autor | Status | Impacto |
|---|--------|-------|--------|---------|
| [#5786](https://github.com/agentscope-ai/QwenPaw/pull/5786) | fix: three bug fixes (#5709, #5773, #5784) | yutai78786 | ABERTO | Corrige display de threshold de compressão no frontend; adiciona validação de `provider_id` ao buscar modelo ativo |
| [#5783](https://github.com/agentscope-ai/QwenPaw/pull/5783) | fix(crons): record run timestamps in job timezone | wananing | ABERTO | Resolve issue #5779 — timestamps de execução de cron agora usam timezone configurado no job |
| [#5777](https://github.com/agentscope-ai/QwenPaw/pull/5777) | feat(memory): add auto-memory turn state management | jinliyl | ABERTO | Adiciona `_auto_memory_turn_states` para gerenciamento de estado por sessão; refatora middleware para tracking granular |

**Análise:** Dois dos três PRs são correções de bugs reportados no mesmo dia, indicando ciclo rápido de resposta da equipe. O PR #5786 consolida três correções em uma única submissão, sugerindo priorização por eficiência de review.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários)

| # | Título | Comentários | Tipo | Link |
|---|--------|-------------|------|------|
| [#5770](https://github.com/agentscope-ai/QwenPaw/issues/5770) | Desejo para V2.0 — feature requests e expectativa da comunidade | 3 | Question | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5770) |
| [#5785](https://github.com/agentscope-ai/QwenPaw/issues/5785) | Seleção de pastas ocultas no modo coding | 3 | Enhancement | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5785) |
| [#5784](https://github.com/agentscope-ai/QwenPaw/issues/5784) | Threshold de compressão incorreto em modelos com provider_id duplicado | 3 | Bug | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5784) |
| [#5779](https://github.com/agentscope-ai/QwenPaw/issues/5779) | API de cron retorna UTC ao invés de timezone do job | 3 | Bug | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5779) |
| [#5790](https://github.com/agentscope-ai/QwenPaw/issues/5790) | Animação de loading persiste após resposta do Agent | 2 | Bug | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5790) |
| [#5787](https://github.com/agentscope-ai/QwenPaw/issues/5787) | Conteúdo truncado no mobile webui | 2 | Bug | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5787) |
| [#5757](https://github.com/agentscope-ai/QwenPaw/issues/5757) | Canal Feishu para de responder após primeira mensagem | 2 | Bug | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5757) |

**Análise:** O issue #5770 sobre V2.0 evidencia expectativa significativa da comunidade por uma nova versão major. Issues de UX mobile (#5787, #5790) e bugs em integrações com canais asiáticos (Feishu) dominam o engajamento, sugerindo base de usuários significativa在这些区域。

---

## 5. Bugs e Estabilidade

### Problemas Críticos Reportados

| Severidade | # | Descrição | Link |
|------------|---|-----------|------|
| **Alta** | #5757 | Canal Feishu deixa de responder após primeira mensagem (reproduzido em Docker e plataforma cloud) | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5757) |
| **Alta** | #5782 | Google Gemini embedding causa TypeError — fallback silencioso para busca por palavras-chave | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5782) |
| **Alta** | #5789 | Compressão de contexto crasha quando output do modelo excede maxLength do JSON Schema | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5789) |
| **Média** | #5787 | Interface mobile com conteúdo truncado na parte inferior (botões inacessíveis) | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5787) |
| **Média** | #5790 | Animação de loading persiste após conclusão da resposta do Agent | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5790) |
| **Média** | #5781 | Modo code offline não permite preview de arquivos (dependência de recursos online) | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5781) |
| **Média** | #5784 | Threshold de compressão incorreto quando modelo ID existe em múltiplos providers | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5784) *(PR #5786 em aberto)* |
| **Média** | #5779 | API de cron retorna timestamps em UTC ao invés do timezone configurado | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5779) *(PR #5783 em aberto)* |
| **Baixa** | #5788 | Lista de Skills exibe apenas 20 itens; scroll-to-load-more não funciona | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5788) |
| **Baixa** | #5774 | Google Gemini channel reporta erro no formato de endpoint | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5774) |

**Métricas de Estabilidade:** 9 bugs reportados / 13 issues = **69% do volume de activity** relacionado a bugs. A maioria dos bugs afeta integrações externas e interface mobile — áreas críticas para experiência do usuário em produção.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Enhancements e Feature Requests

| # | Título | Descrição | Link |
|---|--------|-----------|------|
| [#5785](https://github.com/agentscope-ai/QwenPaw/issues/5785) | Seleção de pastas ocultas no modo coding | Usuário solicita poder selecionar arquivos/diretórios com nomes iniciando em "." no modo coding | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5785) |
| [#5780](https://github.com/agentscope-ai/QwenPaw/issues/5780) | Gerenciamento multi-usuário para uso em equipe | Sistema atual não suporta添加团队成员; impossibilita políticas por usuário e controle de acesso granular | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5780) |

**Análise de Sinais de Roadmap:**
1. **Gestão de equipes (#5780):** Feature request com forte justificativa de negócio — indica uso em ambiente corporativo onde controle de acesso por usuário é obrigatório.
2. **V2.0 expectativa (#5770):** Discussão sobre features desejadas para próxima versão major.
3. **Modo coding offline (#5781):** Funcionalidade desejada para cenários sem conectividade.

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais Identificadas

| Categoria | Feedback | Issues |
|-----------|----------|--------|
| **Integração com canais asiáticos** | Canal Feishu não funciona após primeira mensagem; impacto direto na produtividade de equipes que dependem da ferramenta | #5757 |
| **Experiência Mobile** | UI mobile com problemas críticos de layout (conteúdo truncado, elementos inacessíveis); feedback negativo sobre responsividade | #5787 |
| **Confiabilidade de busca vetorial** | Fallback silencioso para busca por palavras-chave quando embedding falha — usuário não é notificado | #5782 |
| **Usabilidade do modo coding** | Não consegue trabalhar com arquivos ocultos; preview indisponível offline | #5785, #5781 |
| **Gestão de equipes** | Ausência de controle de acesso multi-usuário impede adoção corporativa | #5780 |

### Satisfação Observada
- Expectativa positiva para V2.0 indica base de usuários engajada e leal (#5770)
- PR #5777 (auto-memory turn state) sugere que usuários valorizam melhorias em memória contextual
- Rápida resposta da equipe a bugs (mesmo dia) demonstra saúde na governança do projeto

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou com Baixo Engajamento

| # | Título | Idade | Status | Prioridade |
|---|--------|-------|--------|------------|
| [#5789](https://github.com/agentscope-ai/QwenPaw/issues/5789) | Compressão de contexto crasha com JSON Schema maxLength | 1 dia | ABERTA | **Alta** — potencial de crash em produção |
| [#5788](https://github.com/agentscope-ai/QwenPaw/issues/5788) | Skills list não carrega mais de 20 itens | 1 dia | ABERTA | Média — UX impactante |
| [#5780](https://github.com/agentscope-ai/QwenPaw/issues/5780) | Multi-user account management | 1 dia | ABERTA | **Alta** — blocker para uso corporativo |

### Items sem Assignee ou PR Vinculado

| # | Título | Sem Assignee | Sem PR |
|---|--------|:---:|:---:|
| #5789 | Compressão de contexto crasha | ✅ | ✅ |
| #5788 | Skills list scroll | ✅ | ✅ |
| #5787 | Mobile content truncado | ✅ | ✅ |
| #5781 | Code mode offline preview | ✅ | ✅ |
| #5774 | Google Gemini endpoint error | ✅ | ✅ |

**Recomendação:** As issues #5789, #5787, e #5781 merecem atenção imediata da equipe, pois representam crashes ou problemas de usabilidade sem caminho claro de resolução. A issue #5780 (multi-usuário) deveria ser avaliada para inclusão no roadmap da V2.0 conforme discussão em #5770.

---

## Indicadores de Saúde do Projeto

| Indicador | Valor | Avaliação |
|-----------|-------|-----------|
| Issues abertas/ativas (24h) | 13 | 🔴 Alta demanda de suporte |
| PRs em aberto (24h) | 3 | 🟢 Ativo, em revisão |
| Releases (24h) | 0 | 🟡 Sem changesets |
| Proporção bugs/issues | 69% (9/13) | 🔴 Alta taxa de bugs |
| PRs open>3 dias sem activity | 0 | 🟢 Comunidade ativa |
| Tempo médio de resposta | <24h | 🟢 Excelente |

**Veredicto Geral:** O projeto demonstra **saúde operacional sólida** com tempo de resposta rápido a bugs reportados. Porém, a **alta proporção de bugs (69%)** e a **concentração em áreas críticas** (integração mobile, canais externos, estabilidade de busca vetorial) sugerem necessidade de investimento em QA automatizado e testes de regressão antes de futuros lançamentos. A expectativa para V2.0 representa uma oportunidade de agregar demandas corporativas (multi-tenancy, gestão de equipes) ao roadmap.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-07-06

## 1. Panorama do Dia

ZeroClaw manteve um ritmo intenso de atividade nas últimas 24 horas, com **22 issues** e **50 PRs** atualizados — sinais de uma comunidade engajada e de um pipeline de desenvolvimento ativo. Não houve lançamentos oficiais, indicando que a equipe está em fase de estabilização e revisão de mudanças antes da próxima release. Das issues fechadas, 5 foram resolvidas, enquanto 17 permanecem abertas, muitas com prioridade alta ou RFCs em andamento. O panorama geral aponta para um projeto saudável em ritmo acelerado de evolução, com foco em segurança, observabilidade e experiência do desenvolvedor.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24 horas.**

O projeto encontra-se em período pré-release, acumulando melhorias e correções no branch `master`. A próxima versão (provavelmente v0.8.3) está sendo preparad a conforme rastreado em [#8073](https://github.com/zeroclaw-labs/zeroclaw/issues/8073), que consolida trabalho de observabilidade, CI, docs e dependências.

---

## 3. Progresso do Projeto

### PRs Fechadas/Mergidas

| # | Título | Tipo | Risco | Contribuidor |
|---|--------|------|-------|--------------|
| [#8727](https://github.com/zeroclaw-labs/zeroclaw/pull/8727) | fix(gateway): reject empty bearer token in require_auth | Bug fix | High | wangmiao0668000666 |

**Destaque:** O PR [#8727](https://github.com/zeroclaw-labs/zeroclaw/pull/8727) adiciona uma camada de defesa-in-depth na autenticação do gateway, rejeitando tokens bearer vazios explicitamente. Aunque o código atual já retorne `false` para strings vazias, a adição de um guard explícito melhora a clareza e segurança do fluxo.

### PRs Abertas em Estado Avançado (prontas para merge ou em revisão)

| # | Título | Tipo | Tamanho | Risco | Observação |
|---|--------|------|---------|-------|------------|
| [#8443](https://github.com/zeroclaw-labs/zeroclaw/pull/8443) | feat(matrix): add single-message progress drafts | Enhancement | XL | High | Adiciona stream_mode="single_message" para Matrix |
| [#8313](https://github.com/zeroclaw-labs/zeroclaw/pull/8313) | feat(skills): default to compact injection, deprecate full mode | Enhancement | M | High | Altera comportamento padrão de injeção de skills |
| [#8655](https://github.com/zeroclaw-labs/zeroclaw/pull/8655) | refactor(zerocode): consolidate Code pane | Refactor | XL | High | Nova superfície de UI consolidada |
| [#8690](https://github.com/zeroclaw-labs/zeroclaw/pull/8690) | fix(channels): gate /model --agent behind per-sender authorization | Bug fix | M | High | Correção de segurança #8044 |
| [#8696](https://github.com/zeroclaw-labs/zeroclaw/pull/8696) | fix(runtime): enforce leading user-turn invariant | Bug fix | S | High | P1 — validação de turnos de usuário |
| [#8737](https://github.com/zeroclaw-labs/zeroclaw/pull/8737) | feat(tools): add Bocha AI web search provider | Enhancement | L | High | Provedor de busca para China continental |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários + atividade recente)

| # | Título | Tipo | Comentários | Prioridade | Status |
|---|--------|------|-------------|------------|--------|
| [#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) | RFC: Prefer a lighter ZeroClaw core through external integrations | RFC | 8 | P2 | In-progress |
| [#6715](https://github.com/zeroclaw-labs/zeroclaw/issues/6715) | [Feature]: Delete unneeded branches from main repository | Feature | 4 | P3 | Blocked |
| [#8462](https://github.com/zeroclaw-labs/zeroclaw/issues/8462) | RFC: Runtime Policy for OTel LLM and Tool Content | RFC | 4 | P2 | Closed ✓ |
| [#8251](https://github.com/zeroclaw-labs/zeroclaw/issues/8251) | Surface relationship memory as user-facing workflows | Feature | 3 | P2 | Closed ✓ |
| [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) | RFC: OpenAI Chat Completions compatibility adapter | RFC | 2 | P2 | Accepted |
| [#8720](https://github.com/zeroclaw-labs/zeroclaw/issues/8720) | [Support]: Disable cachePoint for Bedrock Nova 2 Lite | Support | 2 | P2 | Accepted |

**Análise:** A RFC [#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) é o tema mais discutido, refletindo desejo da comunidade por um core mais enxuto via integrações externas (MCP, skills, plugins). O RFC [#8462](https://github.com/zeroclaw-labs/zeroclaw/issues/8462) sobre observabilidade OTel foi fechado com 4 comentários — indico que a discussão amadureceu e a implementação pode estar próxima. A RFC [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) sobre compatibilidade com OpenAI Chat Completions mostra demanda por interoperability, especialmente para integrações com Open WebUI e LobeChat.

---

## 5. Bugs e Estabilidade

### Bugs P1 (Críticos —/workflow bloqueado)

| # | Título | Severidade | Status | Link |
|---|--------|------------|--------|------|
| [#8731](https://github.com/zeroclaw-labs/zeroclaw/issues/8731) | Stdio-based MCP servers accumulating as zombie processes | S2 | Accepted | Link |
| [#8560](https://github.com/zeroclaw-labs/zeroclaw/issues/8560) | browser_open hangs when launcher cannot open a window | S1 | Accepted | Link |
| [#8718](https://github.com/zeroclaw-labs/zeroclaw/issues/8718) | zeroclaw config init ships broken template, disabling transcription | S2 | Accepted | Link |

**Destaque:** O bug [#8718](https://github.com/zeroclaw-labs/zeroclaw/issues/8718) afeta novos usuários diretamente — o template de configuração gerado pelo `zeroclaw config init` é rejeitado pelo daemon, silenciosamente desabilitando a transcrição Whisper. Este é um problema de onboarding crítico que merece atenção imediata.

### Bugs P2 (High Risk)

| # | Título | Status | Link |
|---|--------|--------|------|
| [#8733](https://github.com/zeroclaw-labs/zeroclaw/issues/8733) | models.dev catalog discards model capabilities (e.g. vision) | Open | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/8733) |
| [#8722](https://github.com/zeroclaw-labs/zeroclaw/issues/8722) | High-entropy detector redacts legitimate filenames | In-progress | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/8722) |
| [#8645](https://github.com/zeroclaw-labs/zeroclaw/issues/8645) | Reload banner shows persistent drift for ZEROCLAW_* env secrets | Closed ✓ | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/8645) |

**Análise de Segurança:** Três PRs de segurança foram abertas hoje:
- [#8727](https://github.com/zeroclaw-labs/zeroclaw/pull/8727) — Token bearer vazio (defense-in-depth)
- [#8690](https://github.com/zeroclaw-labs/zeroclaw/pull/8690) — Gate /model --agent atrás de autorização (fix #8044)
- [#8726](https://github.com/zeroclaw-labs/zeroclaw/pull/8726) — Bloquear env vars perigosas no TUI overlay
- [#8741](https://github.com/zeroclaw-labs/zeroclaw/pull/8741) — Validar path de screenshot contra workspace policy

Isso demonstra foco ativo em hardening de segurança.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Destacadas

| # | Título | Prioridade | Status | Link |
|---|--------|------------|--------|------|
| [#8719](https://github.com/zeroclaw-labs/zeroclaw/issues/8719) | SOP routing: false `when` should advance to next step | P2 | Accepted | Link |
| [#8310](https://github.com/zeroclaw-labs/zeroclaw/issues/8310) | Schema V4 breaking cut: remove dead/inert/SaaS config surface | P2 | Accepted | Link |
| [#8676](https://github.com/zeroclaw-labs/zeroclaw/pull/8676) | feat(cron): expose per-cron-job uses_memory flag | Medium | Open PR | Link |
| [#8737](https://github.com/zeroclaw-labs/zeroclaw/pull/8737) | feat(tools): add Bocha AI web search provider | P2 | Open PR | Link |

### Trackers de Roadmap Ativos

- [#8288](https://github.com/zeroclaw-labs/zeroclaw/issues/8288) — **SOP milestone**: daemon-owned SOP control plane para 5/5 (epic tracker)
- [#8073](https://github.com/zeroclaw-labs/zeroclaw/issues/8073) — **v0.8.3 tracker**: observability, CI, docs, dependencies
- [#8583](https://github.com/zeroclaw-labs/zeroclaw/issues/8583) — **Tracker**: channel/source shared-boundary cleanup
- [#8736](https://github.com/zeroclaw-labs/zeroclaw/issues/8736) — **Task**: Track SOP authoring surface (feat/sop-authoring, PR #8590)

**Sinais de Roadmap:** A ênfase em SOP (Standard Operating Procedures), evidenciado por múltiplos issues e PRs ativos ([#8719](https://github.com/zeroclaw-labs/zeroclaw/issues/8719), [#8736](https://github.com/zeroclaw-labs/zeroclaw/issues/8736), [#8288](https://github.com/zeroclaw-labs/zeroclaw/issues/8288)), sugere que a próxima versão terá capacidades robustas de automação de fluxos de trabalho. Adicionalmente, a RFC [#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) sobre "core mais leve" indica uma direção arquitetural de longo prazo.

---

## 7. Resumo de Feedback dos Usuários

### Suporte e Dores Reportadas

| # | Título | Área | Status | Link |
|---|--------|------|--------|------|
| [#8720](https://github.com/zeroclaw-labs/zeroclaw/issues/8720) | Disable cachePoint for Bedrock Nova 2 Lite | Provider/Bedrock | Accepted | Link |
| [#7911](https://github.com/zeroclaw-labs/zeroclaw/issues/7911) | Android Termux Setup fails | Installation/Hardware | Blocked | Link |

**Análise de Sentimentos:**

1. **Dores de Configuração/Instalação:** O issue [#8718](https://github.com/zeroclaw-labs/zeroclaw/issues/8718) revela que novos usuários enfrentam onboarding quebrado silenciosamente — a transcrição não funciona sem feedback de erro claro. Combinado com o suporte ao Android Termux ([#7911](https://github.com/zeroclaw-labs/zeroclaw/issues/7911)), há demanda por experiência de primeiros passos mais robusta.

2. **Integrações de Provedores:** O suporte para Bedrock Nova 2 Lite ([#8720](https://github.com/zeroclaw-labs/zeroclaw/issues/8720)) e a nova adição do Bocha AI ([#8737](https://github.com/zeroclaw-labs/zeroclaw/pull/8737)) indicam diversificação geográfica de provedores, especialmente para mercados onde provedores ocidentais são bloqueados.

3. **UX de Skills:** A feature request [#7861](https://github.com/zeroclaw-labs/zeroclaw/issues/7861) (fechada) e o PR [#8313](https://github.com/zeroclaw-labs/zeroclaw/pull/8313) mostram que a comunidade valoriza transparência no comportamento de skills — especialmente quando scripts são ignorados por `allow_scripts=false`.

---

## 8. Backlog que Merece Atenção

### Issues Sem Atividade Recente (stale risk)

| # | Título | Prioridade | Criado | Última Atualização | Link |
|---|--------|------------|--------|---------------------|------|
| [#6715](https://github.com/zeroclaw-labs/zeroclaw/issues/6715) | Delete unneeded branches from repository | P3 | 2026-05-16 | 2026-07-05 | Link |
| [#7911](https://github.com/zeroclaw-labs/zeroclaw/issues/7911) | Android Termux Setup | P2 | 2026-06-18 | 2026-07

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*