# Resumo diário do ecossistema de agentes de IA 2026-08-04

> Issues: 1 | PRs: 5 | Projetos cobertos: 7 | Gerado em: 2026-08-03 20:58 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório do Projeto NullClaw — 2026-08-04

---

## 1. Panorama do Dia

O projeto NullClaw apresenta **atividade moderada** nesta data, com 5 Pull Requests atualizados nas últimas 24h, indicando um fluxo de desenvolvimento constante. Duas PRs significativas foram merged (#965, #964), ambas relacionadas a **streaming de tool-calls em tempo real**, representando um avanço importante na arquitetura do agente. Não houve novos lançamentos, e apenas 1 issue aberta permanece ativa — um bug de autorização no scheduler que afeta configurações com hosts externos. A comunidade mantém foco em estabilidade e melhorias de conectividade, evidenciando pelo trabalho em andamento em proxies e requisições HTTP.

---

## 2. Lançamentos

**Nenhum release foi publicado nas últimas 24h.** O projeto não emitiu novas versões desde o período analisado. O último lançamento disponível foi anterior a esta data e deve ser verificado no repositório para histórico completo.

---

## 3. Progresso do Projeto

### PRs Merged/Fechadas Recentemente

**#965 — Structured streaming tool-call support for SSE parser** (CLOSED)  
Autor: mtdphn | Criado: 2026-06-18 | Atualizado: 2026-08-03  
🔗 https://github.com/nullclaw/nullclaw/pull/965

Implementa suporte estruturado para tool-calls durante streaming SSE, complementando a correção principal no `agent/root.zig`. Permite que ferramentas nativas e `tool_choice: "auto"` funcionem corretamente em requisições streaming, preservando deltas estruturados em `StreamChatResult`.

---

**#964 — Enable native API-level tool calls during streaming** (CLOSED)  
Autor: mtdphn | Criado: 2026-06-18 | Atualizado: 2026-08-03  
🔗 https://github.com/nullclaw/nullclaw/pull/964

Correção raiz que habilita tool-calls em nível de API durante streaming. Resolve problema crítico onde requisições streaming com ferramentas podiam perdertool-calls estruturados, permitindo respostas de ferramentas puramente streaming pelo Agent.

---

### Avanço Representado

Estas duas PRs, trabalhadas em conjunto, representam um **marco significativo** na capacidade de streaming do NullClaw:
- Suporte completo a tool-calls em ambiente de streaming
- Preservação de deltas estruturados em tempo real
- Capacidade de execução de ferramentas via streaming puro

---

## 4. Temas Quentes da Comunidade

### Issue com Maior Engajamento

**#915 — [bug] Problem with scheduler unauthorized** (OPEN)  
Autor: scabros | Criado: 2026-05-15 | Atualizado: 2026-08-03 | Comentários: 4 | 👍: 1  
🔗 https://github.com/nullclaw/nullclaw/issues/915

**Resumo:** Usuário reportando problema ao executar NullClaw em Ubuntu com Ollama externo (mesma rede) usando Qwen3.6:27b em RTX 3090. O LLM e tool-calling funcionam, mas o **scheduler não funciona** — nem no Telegram chat, nem em outras interfaces.

**Análise da Demanda:** Este é um bug de **prioridade média-alta** considerando:
- Tempo de existência: ~2.5 meses
- Ambiente específico com configuração de host externo
- Impacto direto na funcionalidade principal (scheduler)
- Múltiplos canais afetados (Telegram + outros)

A issue aguarda resposta da equipe de mantenedores.

---

## 5. Bugs e Estabilidade

### Issue Aberta (Bug Reportado)

| # | Título | Severidade | Status | Link |
|---|--------|------------|--------|------|
| 915 | Scheduler unauthorized com Ollama externo | **Média** | OPEN | [🔗](https://github.com/nullclaw/nullclaw/issues/915) |

**Detalhes:**
- **Ambiente:** Ubuntu + NullClaw + Ollama externo (mesma rede) + Qwen3.6:27b (RTX 3090)
- **Sintoma:** LLM funcional, tool-calling parcial funciona, mas scheduler completamente inoperante
- **Canais afetados:** Telegram chat e outros canais
- **Temporalidade:** Reportado há ~80 dias, última atualização em 2026-08-03

**Recomendações:**
1. Verificar configuração de credenciais para Ollama externo
2. Investigar se há problema de autenticação específico do scheduler
3. Considerar adicionar logs de debug para diagnóstico remoto

---

## 6. Pedidos de Features e Sinais de Roadmap

### PRs Abertas (Potenciais Features)

**#983 — fix(providers): use pinned curl path for proxied requests** (OPEN)  
Autor: ArcanePivot | Criado: 2026-08-03  
🔗 https://github.com/nullclaw/nullclaw/pull/983

Melhoria de segurança: roteia requisições POST de providers através de paths seguros de curl quando entradas pinned resolve estão disponíveis, mantendo credenciais fora de argv.

---

**#982 — fix(telegram): use curl transport for explicit proxies** (OPEN)  
Autor: ArcanePivot | Criado: 2026-08-03  
🔗 https://github.com/nullclaw/nullclaw/pull/982

Melhoria de conectividade: habilita transporte curl para API do Telegram quando proxy está configurado, com suporte a timeout por-request e fallback HTTP nativo para conexões diretas.

---

**#956 — [dependencies, docker] ci(deps): bump alpine from 3.23 to 3.24** (OPEN)  
Autor: dependabot[bot] | Criado: 2026-06-15  
🔗 https://github.com/nullclaw/nullclaw/pull/956

Atualização de dependência Docker: bump Alpine de 3.23 para 3.24 no grupo docker-images.

---

### Sinais de Roadmap Observados

Baseado na atividade recente, o roadmap aparenta priorizar:

1. **Estabilidade de conectividade** — Correções de proxy (#982, #983)
2. **Melhorias de streaming** — Tool-calls em tempo real (#965, #964) ✅ Merged
3. **Modernização de dependências** — Updates de container base (#956)

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Dor | Contexto | Severidade |
|-----|----------|------------|
| **Scheduler não funciona** | Configuração com Ollama externo + Telegram | 🔴 Alta |
| **Problemas com proxies** | Requisições via proxy precisam de transporte alternativo | 🟡 Média |

### Cenários de Uso Reportados

**Cenário 1:** Servidor local com GPU dedicada  
- Usuário: scabros
- Stack: Ubuntu + NullClaw + Ollama (rede local) + Qwen3.6:27b + RTX 3090
- Uso: Interação via Telegram
- Problema: Scheduler inoperante mesmo com LLM funcional

**Cenário 2:** Configuração com proxy explícito  
- Contexto: Integração com Telegram Bot API via proxy
- Necessidade: Suporte curl para conexões proxadas com timeout configurável

### Indicadores de Satisfação/Insatisfação

- **Positivo:** Tool-calling em streaming foi corrigido (indica comunidade ativa reportando)
- **Negativo:** Bug de scheduler sem resolução há ~80 dias
- **Neutro:** Atividade de desenvolvimento constante (5+ PRs em 24h)

---

## 8. Backlog que Merece Atenção

### Issues sem Resposta há Tempo

| # | Título | Criado | Atualizado | Dias Inativo | Prioridade |
|---|--------|--------|------------|--------------|------------|
| 915 | Scheduler unauthorized | 2026-05-15 | 2026-08-03 | ~80 dias | 🔴 Alta |

🔗 https://github.com/nullclaw/nullclaw/issues/915

**Observação:** Esta issue está aberta há ~80 dias e possui 4 comentários, indicando engajamento do usuário, mas ainda sem solução ou resposta definitiva da equipe.

---

### PRs Abertas sem Merge

| # | Título | Autor | Criado | Idade Est. |
|---|--------|-------|--------|------------|
| 983 | Pinned curl path for proxied requests | ArcanePivot | 2026-08-03 | <1 dia |
| 982 | Curl transport for explicit proxies | ArcanePivot | 2026-08-03 | <1 dia |
| 956 | Bump alpine 3.23→3.24 | dependabot[bot] | 2026-06-15 | ~50 dias |

🔗 https://github.com/nullclaw/nullclaw/pulls

---

## Métricas de Saúde do Projeto

| Indicador | Valor | Status |
|-----------|-------|--------|
| Issues abertas (24h) | 1 | 🟡 Moderado |
| PRs abertas (24h) | 3 | 🟢 Bom |
| PRs merged (24h) | 2 | 🟢 Bom |
| Releases (24h) | 0 | ⚪ Neutro |
| Bug crítico sem resposta | 1 | 🔴 Alerta |

---

## Próximos Passos Recomendados

1. **Prioridade Alta:** Investigar e resolver issue #915 (scheduler unauthorized)
2. **Revisar PRs:** Avaliar merges de #983 e #982 (correções de proxy)
3. **Dependências:** Processar PR #956 (update Alpine)
4. **Comunidade:** Fornecer feedback em #915 para manter usuário engajado

---

*Relatório gerado automaticamente com base nos dados do GitHub para nullclaw/nullclaw em 2026-08-04.*

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo — Ecossistema Open Source de Agentes de IA

**Data de Referência:** 2026-08-04
**Projetos Analisados:** NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw, ZeroClaw

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **saúde vigorosa com sinais de amadurecimento heterogêneo**. A semana de 04/08/2026 registra atividade massiva: mais de 250 PRs atualizados e 200+ issues em circulação collectively, com **dois releases significativos** (Hermes v0.20.0, ZeroClaw v0.8.4) e uma beta (CoPaw v2.1.0-beta.1). A convergência técnica é evidente: streaming de tool-calls, conectividade via proxy, resiliência de providers e persistência de memória surgem como temas transversais. Contudo, a fragmentação permanece — cada projeto adota filosofias distintas de arquitetura (Zig, Python, Rust) e modelos de negócio (Ollama-first vs. multi-provider). A quality velocity varia significativamente: enquanto CoPaw e NanoBot demonstram ciclo de release rápido com alta taxa de resolução, NullClaw e Hermes carregam bugs não resolvidos há semanas, sinalizando gargalos em triagem ou recursos.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | Releases | PRs Merged | Bugs P1-P2 Abertos | Saúde |
|---------|--------------|-----------|----------|------------|---------------------|-------|
| **NullClaw** | 1 | 5 | 0 | 2 | 1 (média) | 🟡 Moderada |
| **NanoBot** | 2 | 36 | 0 | 12 | 1 (P1) | 🟢 Boa |
| **Hermes Agent** | 50 | 50 | 1 (v0.20.0) | 2 | 8 (P1-P2) | 🟠 Atenção |
| **PicoClaw** | 8 | 7 | 0 | 5 | 2 (alta/crítica) | 🟡 Moderada |
| **IronClaw** | 37 | 50 | 0 | 5 | 9 (incl. 2 P1) | 🟠 Alta atividade |
| **CoPaw** | 22 | 50 | 1 (beta) | 6 | 4 (críticos) | 🟡 Pré-release |
| **ZeroClaw** | 50 | 50 | 1 (v0.8.4) | 9 | 6 (incl. 1 crítico) | 🟠 Consolidando |

**Observação:** Hermes Agent, IronClaw e ZeroClaw registram volume máximo (50 PRs/issues atualizados), indicando projetos de alta Maturity. NanoBot destaca-se em eficiência: 36 PRs atualizados com 12 merges em 24h.

---

## 3. Posicionamento do Projeto Principal

### Diferencial Técnico

| Projeto | Arquitetura | Foco Diferenciador | Tamanho Comunidade |
|---------|-------------|-------------------|---------------------|
| **Hermes Agent** | Base não especificada | Release massivo (v0.20.0: 3.650 commits, 1.400 PRs, 650+ contribuidores novos) | ⭐⭐⭐⭐⭐ Maior |
| **NanoBot** | Base não especificada | Multi-provider (DeepSeek, Gemini, Eden AI, ModelScope), Meta-Search Tool via RRF | ⭐⭐⭐⭐ |
| **ZeroClaw** | Rust | Security hardening (WASM runtime), A2A protocol, Chat Completions profile | ⭐⭐⭐⭐ |
| **IronClaw** | Base não especificada | Skill model-driven, Google OAuth unificado, Design System | ⭐⭐⭐ |
| **CoPaw** | Base não especificada | Model fallback com cooldown, Mission Mode, Desktop Tauri | ⭐⭐⭐ |
| **PicoClaw** | Base não especificada | Localização JP (968 linhas), Telegram topics, edge deployment | ⭐⭐ |
| **NullClaw** | Zig | Streaming tool-calls nativo, SSE parser estruturado | ⭐⭐ |

### Vantagens Competitivas

- **Hermes Agent:** Escala incomparável (3.650 commits/quarter), ecossistema de plugins em expansão (#64182 com 17 comentários)
- **ZeroClaw:** Postura de segurança proativa (RUSTSEC, WASM sandbox hardening)
- **NanoBot:** Flexibilidade de providers, feature de metasearch
- **NullClaw:** Diferenciação técnica via Zig — memória gerenciada com zero GC overhead, atraindo desenvolvedores performance-critical

---

## 4. Focos Técnicos Compartilhados

### Temas Transversais Identificados

| Foco Técnico | Projetos Afetados | Manifestação |
|--------------|-------------------|--------------|
| **Streaming de tool-calls** | NullClaw (#964, #965), Hermes, NanoBot | Suporte a deltas estruturados em SSE, replay de unsigned tool calls |
| **Resiliência de providers** | CoPaw (#6659), NanoBot (#5214, #5230), IronClaw | Fallback automático, cooldown, desconexão de race conditions |
| **Performance de histórico/memória** | PicoClaw (#3281), IronClaw (SessionDB WAL leak), CoPaw (MB-level payloads), ZeroClaw (persistent memory) | Renderização, leaks, compressão, archival |
| **Segurança de autenticação** | IronClaw (#7069), ZeroClaw (#1 XOR cipher, #9417 WhatsApp leak), NullClaw (#915 scheduler) | OAuth fragmentado, tokens expostos, credenciais em argv |
| **Proxy/Conectividade** | NullClaw (#982, #983), Hermes (#63755 streaming) | curl transport, timeout por-request, fallback nativo |
| **Mobile/Telegram UX** | IronClaw (#7072 Markdown cru, #7045 voice notes), PicoClaw (topics), Hermes (WhatsApp media) | Renderização, parsing, keyboard handling |

### Prioridade de Consolidação

A comunidade beneficiaria-se de soluções compartilhadas em:
1. **Padrão de fallback entre providers** — atualmente cada projeto reinventa
2. **Schema de streaming tool-call** — ausência de especificação cross-projeto
3. **Timeouts configuráveis por camada** — granularidade falta em todos

---

## 5. Análise de Diferenciação

### Por Público-Alvo

| Projeto | Público Primário | Modelo de Deploy |
|---------|------------------|------------------|
| **NullClaw** | Devs performance-sensitive, edge computing | Self-hosted com Ollama local |
| **NanoBot** | Usuários multi-cloud, desenvolvedores de plugins | Flexível (Docker, bare metal) |
| **Hermes Agent** | Organizações enterprise, power users | Desktop-first + headless |
| **IronClaw** | Usuários Google Workspace, equipes | Cloud-native, multi-canal |
| **CoPaw** | Usuários desktop Windows, desenvolvedores Python | Desktop Tauri, Conda-dependent |
| **PicoClaw** | Mercado japonês, edge (Raspberry Pi), Discord/Telegram | Lightweight, systemd |
| **ZeroClaw** | Segurança-conscious, Rust developers, multi-agent | WASM sandbox, A2A-ready |

### Por Filosofia Arquitetural

```
ZeroClaw (Rust)     ──► Sandbox isolation, WASM runtime, security-first
NullClaw (Zig)      ──► Performance-first, zero GC, SSE streaming nativo
Hermes Agent        ──► Monolith extensível, plugin registry maduro
NanoBot             ──► Provider-agnostic, modular providers layer
CoPaw               ──► Desktop UX focus, batch/orquestração multi-agent
PicoClaw            ──► Minimalismo, localization-first
IronClaw            ──► Skill-driven, model-generated capabilities
```

---

## 6. Tração e Maturidade da Comunidade

### Velocidade de Iteração

| Categoria | Projetos | Características |
|-----------|----------|----------------|
| **🚀 Expansão rápida** | Hermes Agent, IronClaw | +650 contribuidores/quarter, 1.400 PRs/quarter, alta birth rate de issues |
| **⚡ Consolidando com velocity** | NanoBot, CoPaw, ZeroClaw | Beta/stable releases frequentes, alta taxa de PR merge, regression focus |
| **🐢 Estável mas com debt** | NullClaw, PicoClaw | Atividade moderada, bugs antigos sem resposta, comunidade menor |

### Taxa de Resolução de Bugs

| Projeto | Bugs Resolvidos (24h) | Taxa | Observação |
|---------|----------------------|------|------------|
| **PicoClaw** | 5/8 | **62.5%** | Time responsive |
| **NanoBot** | 4 P1 (batch) | Excelente | 3 dias tempo médio |
| **CoPaw** | 6 PRs merged | Boa | Pré-release, ainda críticos |
| **NullClaw** | 2 PRs (features) | Baixa | Bug #915 sem resposta há 80 dias |
| **Hermes Agent** | 3 issues fechadas | Baixa | 8 P1-P2 backlog |

### Dívida Técnica Crítica

| Projeto | Issue | Idade | Risco |
|---------|-------|-------|-------|
| **ZeroClaw** | XOR cipher não criptografa (#1) | ~6 meses | 🔴 CRÍTICO — sem movimento |
| **NullClaw** | Scheduler unauthorized (#915) | ~80 dias | 🔴 Produtividade |
| **Hermes** | UTF-8 read_file regression | Regressão recente | 🔴 Daily use |
| **CoPaw** | Skill tags regressão (#6537) | Recente | 🟠 UX regression |

---

## 7. Sinais de Tendência

### Tendências de Mercado Extraídas

**1. Multi-Provider como Standard**
NanoBot (Eden AI, ModelScope, DeepSeek, Gemini), CoPaw (fallback automático), IronClaw (Google OAuth unificado) — a fragmentação de LLMs exige abstração robusta. **Implicação:** Providers como commodities; diferenciação em resiliência e routing.

**2. Streaming como Maturidade Mínima**
NullClaw (tool-calls streaming), Hermes (streaming deltas), IronClaw (status "Reconnecting" em chunks) — streaming de tool-calls é o novo baseline. **Implicação:** Requisições stateless streaming serão requisito de table stakes.

**3. Desktop como Portal de Onboarding**
IronClaw (blank slate na WebUI, E2E coverage), CoPaw (Tauri desktop, WebView2 crashes), PicoClaw (systemd gateway) — a primeira experiência determina adoção. **Implicação:** Investimento em UX de first-run deve aumentar.

**4. Segurança Post-Mortem**
ZeroClaw (XOR cipher, WASM diagnostics), Hermes (WhatsApp media size), IronClaw (Google services OAuth) — incidentes de segurança estão aparecendo em produção. **Implicação:** Security hardening será diferenciador para deployments enterprise.

**5. A2A e Multi-Agent como Próxima Fronteira**
ZeroClaw (#9106 A2A outbound client), IronClaw (skills model-driven), CoPaw (spawn_subagent) — arquiteturas de agentes colaborativos estão emergindo. **Implicação:** RFCs ativas em 3+ projetos indicam convergência para inter-operação.

**6. Localização e Mercados Emergentes**
PicoClaw (968 linhas JP), CoPaw (WeChat cron push) — projetos começam a mirar mercados fora do eixo anglófono. **Implicação:** i18n/l10n investment pode ser vantagem competitiva em APAC e EMEA.

---

## Síntese para Decisores

| Aspecto | Recomendação |
|---------|--------------|
| **Adoção** | Para projetos enterprise: Hermes Agent (escala) ou ZeroClaw (segurança). Para flexibilidad: NanoBot (providers) ou CoPaw (desktop). |
| **Contribuição** | NullClaw oferece entrada em Rust/Zig com baixa barreira. CoPaw/PicoClaw aceitam PRs de UX/localização. |
| **Monitoramento** | Acompanhar: regressions em NullClaw e CoPaw; security disclosures em ZeroClaw; Hermes v0.20.1 para fixes. |
| **Risk** | ZeroClaw #1 (XOR cipher) é showstopper para produção. CoPaw desktop crashes (#6647) afeta Windows users. |

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-08-04

---

## 1. Panorama do Dia

O projeto NanoBot registrou **alta atividade** em 04/08/2026, com **36 PRs atualizadas** e **2 issues** no período de 24 horas, demonstrando um ritmo de desenvolvimento intenso. Doze PRs foram **merged/fechadas**, cobrindo correções críticas de stability (gateway, providers, memory) e melhorias na WebUI. Nenhuma release foi publicada hoje, sugerindo que a equipe está consolidando o trabalho antes de um próximo lançamento. A composição mista de bugs (p1) e features indica equilíbrio entre manutenção e evolução do produto.

---

## 2. Lançamentos

**Nenhuma release publicada hoje.**

O repositório não registrou novas versões nas últimas 24 horas. Isso é consistente com o padrão de consolidação de PRs pendentes; a próxima tag kemungkinan besar mencakup perubahan dari PRs yang berhasil dimerge hari ini, terutama perbaikan p1 (gateway shutdown, DeepSeek, Gemini).

---

## 3. Progresso do Projeto

As seguintes PRs **merged/closed** representam avanços significativos:

| PR | Autor | Tema | Impacto |
|----|-------|------|---------|
| [#5215](https://github.com/HKUDS/nanobot/pull/5215) | arcdrake22 | `fix(gateway): close agent resources deterministically on stop` | Elimina asyncio teardown noise e stalls no shutdown. **Crítico para produção.** |
| [#5214](https://github.com/HKUDS/nanobot/pull/5214) | arcdrake22 | `fix(providers): keep DeepSeek reasoning items wire-valid` | Resolve deserialização JSON ao usar Responses API com conversas DeepSeek. |
| [#5230](https://github.com/HKUDS/nanobot/pull/5230) | arcdrake22 | `fix(providers): drop unsigned tool calls when replaying to Gemini` | Corrige `400 INVALID_ARGUMENT` em conversas multi-provider. |
| [#5227](https://github.com/HKUDS/nanobot/pull/5227) | chengyongru | `fix(webui): complete i18n audit` | Paridade de chaves, correção terminológica zh-CN/zh-TW, acessibilidade. |
| [#5228](https://github.com/HKUDS/nanobot/pull/5228) | chengyongru | `fix(webui): show actual local trigger messages` | Melhora UX de automações com trigger commands visíveis. |
| [#5229](https://github.com/HKUDS/nanobot/pull/5229) | chengyongru | `fix(webui): stabilize thread during IME input` | Corrige scroll jumping em IME (Chrome, mobile). |
| [#5226](https://github.com/HKUDS/nanobot/pull/5226) | chengyongru | `fix(webui): dismiss mobile keyboard after send` | Melhora experiência mobile com dismiss de teclado virtual. |
| [#5221](https://github.com/HKUDS/nanobot/pull/5221) | santhreal | `fix(memory): harden history tail read against invalid UTF-8` | Previne crash em histórico com emojis/multibyte characters. |
| [#5213](https://github.com/HKUDS/nanobot/pull/5213) | KDB-Wind | `fix(plugins): use uv when pip is unavailable` | Suporta instalação via `uv tool` (officially supported). |
| [#5222](https://github.com/HKUDS/nanobot/pull/5222) | santhreal | `fix(telegram): keep fenced code intact when language has special chars` | Suporta `c++`, `objective-c`, `html+django` sem corrupção. |
| [#1550](https://github.com/HKUDS/nanobot/pull/1550) | Mieluoxxx | `feat(codex): OAuth + custom Responses mode` | Suporte dual-mode para openai_codex provider. |
| [#4861](https://github.com/HKUDS/nanobot/pull/4861) | MVS-source | `feat(providers): add Eden AI` | Novo gateway OpenAI-compatible. |
| [#5038](https://github.com/HKUDS/nanobot/pull/5038) | Krislu1221 | `docs(providers): add ModelScope section` | Documentação completa do provider ModelScope. |
| [#5141](https://github.com/HKUDS/nanobot/pull/5141) | amir-rezaei | `fix(cron): validate expression syntax` | Fail-fast em schedules inválidos. |

**Destaque:** O contribuidor **arcdrake22** dominou as correções críticas de providers, enquanto **chengyongru** focou em UX/WebUI. O PR [#5215](https://github.com/HKUDS/nanobot/pull/5215) (gateway shutdown) é particularmente relevante para implantações de longa duração.

---

## 4. Temas Quentes da Comunidade

| PR/Issue | Tipo | Reações | Tema Principal |
|----------|------|---------|----------------|
| [#5234](https://github.com/HKUDS/nanobot/pull/5234) | PR (open, p1) | — | **Meta-Search Tool (mst-python)** — novo provider que agrega DuckDuckGo, Google, Brave, Bing via Reciprocal Rank Fusion |
| [#5233](https://github.com/HKUDS/nanobot/pull/5233) | PR (open, p2) | — | **Mattermost thread policies** — granularidade de group mentions em threads vs. canais |
| [#5204](https://github.com/HKUDS/nanobot/pull/5204) | PR (open, p1) | — | **Declarative Responses capabilities** — refactor central para routing, reasoning replay, compaction |
| [#5211](https://github.com/HKUDS/nanobot/pull/5211) | PR (open) | — | **Cross-session search e mentions** — busca em conversas anteriores via WebUI `@` palette |
| [#5231](https://github.com/HKUDS/nanobot/pull/5231) | PR (open) | — | **Dream idle session archival** — persiste sessões ociosas em `history.jsonl` |
| [#5235](https://github.com/HKUDS/nanobot/issues/5235) | Issue (open) | 👍 0 | **Opus 5 temperature bug** — `omit_temperature` não inclui `opus-5`; todas requests enviam temperature desnecessário |
| [#5190](https://github.com/HKUDS/nanobot/issues/5190) | Issue (closed) | 👍 0 | **MIME type text/plain** — frontend falhava ao carregar module scripts; **resolvido** |

**Análise:** A PR mais estratégica é a [#5234](https://github.com/HKUDS/nanobot/pull/5234) (mst-python). Ela introduz metasearch via RRF, potencialmente melhorando a qualidade de respostas com capacidade de reasoning. A [#5204](https://github.com/HKUDS/nanobot/pull/5204) é um refactor arquitetural importante que declarativiza capacidades de providers — foundational para escalabilidade.

---

## 5. Bugs e Estabilidade

### Prioridade 1 (Crítico/Impacto Alto)

| ID | Título | Status | Severidade |
|----|--------|--------|------------|
| [#5235](https://github.com/HKUDS/nanobot/issues/5235) | Opus 5 always rejected — `omit_temperature` missing `opus-5` | **OPEN** | 🔴 P1 |
| [#5230](https://github.com/HKUDS/nanobot/pull/5230) | Gemini rejects unsigned tool calls (cross-provider) | **OPEN** | 🔴 P1 (PR merge) |
| [#5214](https://github.com/HKUDS/nanobot/pull/5214) | DeepSeek reasoning items wire-invalid | **CLOSED** | 🔴 P1 (fixado) |
| [#5215](https://github.com/HKUDS/nanobot/pull/5215) | Gateway asyncio teardown on stop | **CLOSED** | 🔴 P1 (fixado) |
| [#5227](https://github.com/HKUDS/nanobot/pull/5227) | WebUI i18n audit | **CLOSED** | 🟡 P1 (melhoria) |

### Prioridade 2

| ID | Título | Status | Severidade |
|----|--------|--------|------------|
| [#5221](https://github.com/HKUDS/nanobot/pull/5221) | history.jsonl invalid UTF-8 crash | **CLOSED** | 🟡 P2 (fixado) |
| [#5222](https://github.com/HKUDS/nanobot/pull/5222) | Telegram fenced code corruption (`c++`, etc.) | **OPEN** (PR) | 🟡 P2 |
| [#5229](https://github.com/HKUDS/nanobot/pull/5229) | IME scroll jumping in WebUI | **CLOSED** | 🟢 P2 (fixado) |
| [#5226](https://github.com/HKUDS/nanobot/pull/5226) | Mobile keyboard not dismissed | **CLOSED** | 🟢 P2 (fixado) |

**Alerta:** A issue [#5235](https://github.com/HKUDS/nanobot/issues/5235) está **aberta e sem comentários**. Opus 5 foi released em 2026-07-24 e todas as requisições estão enviando `temperature` desnecessariamente, potencialmente degradando respostas. **Recomendação: priorizar fix.**

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Abertas (por priorização)

| PR | Título | Prioridade | Sinal de Roadmap |
|----|--------|------------|------------------|
| [#5234](https://github.com/HKUDS/nanobot/pull/5234) | Meta-Search Tool (mst-python) | **p1** | Expansão de providers de busca — consolida múltiplos motores |
| [#5233](https://github.com/HKUDS/nanobot/pull/5233) | Mattermost thread group policy | p2 | Suporte a workflows de comunidade/team |
| [#5211](https://github.com/HKUDS/nanobot/pull/5211) | Cross-session search e mentions | — | Persistência e descoberta de conversas |
| [#5231](https://github.com/HKUDS/nanobot/pull/5231) | Dream idle session archival | — | Agentes autônomos com memória de sessões ociosas |
| [#4861](https://github.com/HKUDS/nanobot/pull/4861) | Eden AI provider | p2 | Gateway multi-provider (ja merged) |
| [#1550](https://github.com/HKUDS/nanobot/pull/1550) | openai_codex dual-mode (OAuth + Responses) | — | Suporte a Codex com API custom |

**Tendência:** O roadmap aponta para:
1. **Multimodalidade de busca** — mst-python é a feature mais ambiciosa em aberto
2. **Persistência contextual** — cross-session search mostra foco em memória de longo prazo
3. **Granularidade de configuração** — policies por canal/thread (Mattermost)

---

## 7. Resumo de Feedback dos Usuários

### Issues Reportadas por Usuários

| Issue | Usuário | Problema | Sentimento |
|-------|---------|----------|------------|
| [#5235](https://github.com/HKUDS/nanobot/issues/5235) | whisperity | Opus 5 temperature bug — API rejeita config | 😠 Frustrado (bug antigo) |
| [#5190](https://github.com/HKUDS/nanobot/issues/5190) | amkile | MIME type text/plain — frontend não carrega | 😠 Crítico (build/ deploy) |

**Padrões identificados:**
- **Problemas de provider/model compatibility** — Opus 5 é recente (2026-07-24) e a lista de `omit_temperature` não foi atualizada. Indica gap no pipeline de QA para novos modelos.
- **Edge cases de deployment** — MIME type e `uv tool` sem pip são problemas de ambiente, não de código. Mostra diversificação deinstall methods.

### Satisfação Implícita
- As **13 PRs fechadas** com testes indicam que a codebase está sendo ativamente mantida e que contributors estão resolvendo bugs rapidamente.
- O **tempo de resposta em issues** é excelente (issue #5190 aberta em 2026-07-31, fechada em 2026-08-03 = 3 dias).

---

## 8. Backlog que Merece Atenção

| ID | Tipo | Título | Idade | Estado | Prioridade |
|----|------|--------|-------|--------|------------|
| [#5235](https://github.com/HKUDS/nanobot/issues/5235) | Issue | Opus 5 temperature bug | 1 dia | **OPEN, sem resposta** | 🔴 Alta |
| [#5204](https://github.com/HKUDS/nanobot/pull/5204) | PR | Responses capabilities (conflict) | 3 dias | **OPEN** | 🔴 Alta |
| [#5234](https://github.com/HKUDS/nanobot/pull/5234) | PR | mst-python provider | 1 dia | **OPEN** | 🔴 Alta |
| [#5222](https://github.com/HKUDS/nanobot/pull/5222) | PR | Telegram fenced code (c++, etc.) | 1 dia | **OPEN** | 🟡 Média |
| [#5233](https://github.com/HKUDS/nanobot/pull/5233) | PR | Mattermost thread policies | 1 dia | **OPEN** | 🟢 Baixa |

**Ação recomendada:**
1. **Responder [#5235](https://github.com/HKUDS/nanobot/issues/5235)** — bug afeta usuários de Opus 5 e está sem assignee.
2. **Resolver conflict em [#5204](https://github.com/HKUDS/nanobot/pull/5204)** — refactor arquitetural bloqueado.
3. **Review [#5234](https://github.com/HKUDS/nanobot/pull/5234)** — feature p1 com 1 dia de idade, tendência de merge rápido se passar em CI.

---

## Indicadores de Saúde do Projeto

| Métrica | Valor | Status |
|---------|-------|--------|
| PRs fechadas (24h) | 25 | ✅ Muito ativo |
| Bugs p1 resolvidos (24h) | 4 | ✅ Excelente |
| Issues p1 abertas | 1 | ⚠️ Requer atenção |
| Releases (24h) | 0 | ℹ️ Em consolidação |
| Tempo médio de resolução (amostra) | ~3 dias | ✅ Muito bom |
| Diversidade de contribuidores | 10+ | ✅ Saúde |

---

*Relatório gerado em 2026-08-04 com base em dados do GitHub HKUDS/nanobot. Métricas de último dia.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-08-04

---

## 1. Panorama do Dia

O projeto Hermes Agent mantém um alto nível de atividade em 4 de agosto de 2026, com 50 issues e 50 PRs atualizados nas últimas 24 horas. A versão v0.20.0 foi publicada ontem (2026-08-03), representando um release massivo com ~3.650 commits, ~1.400 PRs mesclados e 650+ contribuidores novos desde a v0.19.0. A comunidade demonstra engajamento significativo em questões de estabilidade (regressões em manipulação de arquivos e caminhos Windows) e em debates arquiteturais sobre expansão de plugins e roteamento de skills. O volume de PRs abertos (48) indica uma pipeline de desenvolvimento robusta, enquanto o número de issues fechadas (~1.200 desde a última versão) evidencia o ritmo acelerado de resolução de problemas.

---

## 2. Lançamentos

### v2026.8.3 — Hermes Agent v0.20.0

**Data de Publicação:** 3 de agosto de 2026  
**Tag:** `v2026.8.3`

| Métrica | Valor |
|---------|-------|
| Commits desde v0.19.0 | ~3.650 |
| PRs mesclados | ~1.400 |
| Arquivos alterados | ~5.200 |
| Linhas inseridas | ~559.000 |
| Linhas deletadas | ~405.000 |
| Issues fechadas | ~1.200 |
| Contribuidores | 650+ |

**Título Temático:** "The Herald Release" — referenciando Hermes como mensageiro dos deuses.

**Nota:** O changelog detalhado não foi incluído nos dados disponíveis. Recomenda-se consultar o [release page oficial](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.8.3) para lista completa de mudanças, breaking changes e notas de migração.

---

## 3. Progresso do Projeto

Das 50 PRs atualizadas nas últimas 24h, 2 foram mescladas/fechadas. Os PRs abertos mais relevantes indicam foco em:

### PRs em Destaque (Status Aberto)

| PR | Componente | Descrição | Prioridade |
|----|-----------|-----------|------------|
| [#77992](https://github.com/NousResearch/hermes-agent/pull/77992) | CI/Test | Adicionar lanes CI para macOS + Windows para testes OS-specific | P3 |
| [#65223](https://github.com/NousResearch/hermes-agent/pull/65223) | Gateway/WhatsApp | **Segurança:** Limitar tamanho de download de mídia inbound | P2 |
| [#77934](https://github.com/NousResearch/hermes-agent/pull/77934) | CLI/Install | Testes end-to-end para o caminho de update (Linux) | P2 |
| [#77996](https://github.com/NousResearch/hermes-agent/pull/77996) | Dashboard | Encaminhar requisições de refresh de modelos | P3 |
| [#63755](https://github.com/NousResearch/hermes-agent/pull/63755) | Agent/NVIDIA | Normalizar deltas de streaming em formato lista | P2 |
| [#74864](https://github.com/NousResearch/hermes-agent/pull/74864) | Relay | Evitar corrupção de escopo em turns concorrentes | P2 |
| [#54661](https://github.com/NousResearch/hermes-agent/pull/54661) | Gateway/Signal | Preservar IDs de grupos Signal em recuperação de sessão | P2 |
| [#77990](https://github.com/NousResearch/hermes-agent/pull/77990) | Tools/Memory | Rebaixar hits FTS de summary de compactação em discovery | P2 |
| [#77991](https://github.com/NousResearch/hermes-agent/pull/77991) | Agent | Aplicar guarda de loop sem progresso a todas as ferramentas | P3 |
| [#77993](https://github.com/NousResearch/hermes-agent/pull/77993) | Tools | Ferramenta `model_override` para switch de modelo por sessão | Feature |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (Comentários)

| Issue | Título | Comentários | 👍 | Link |
|-------|--------|-------------|-----|------|
| #64182 | Plugin Interface Expansion | 17 | 0 | [Link](https://github.com/NousResearch/hermes-agent/issues/64182) |
| #76886 | read_file regressão UTF-8 | 6 | 0 | [Link](https://github.com/NousResearch/hermes-agent/issues/76886) |
| #58546 | resolve_anthropic_token() preferencia OAuth | 6 | 0 | [Link](https://github.com/NousResearch/hermes-agent/issues/58546) |
| #67629 | Windows path absoluto falha | 5 | 0 | [Link](https://github.com/NousResearch/hermes-agent/issues/67629) |
| #22620 | Skill list bloat — context window | 5 | 0 | [Link](https://github.com/NousResearch/hermes-agent/issues/22620) |
| #75269 | SessionDB WAL readers leak | 5 | 0 | [Link](https://github.com/NousResearch/hermes-agent/issues/75269) |
| #77780 | lifecycle_guard null byte crash | 5 | 0 | [Link](https://github.com/NousResearch/hermes-agent/issues/77780) |
| #6296 | Mattermost COMMAND_REGISTRY | 2 | **12** | [Link](https://github.com/NousResearch/hermes-agent/issues/6296) |

### Análise dos Temas

**Plugin Interface Expansion (#64182)** — Com 17 comentários, esta é a issue de maior discussão. O issue serve como referência central para expandir a interface de plugins do agente, consolidando ideias da comunidade no Discord. Contribuidores com PRs enfileirados podem utilizar este roadmap para garantir estabilidade antes de submeter.

**Mattermost Integration (#6296)** — Embora com apenas 2 comentários, esta issue acumulou **12 reações positivas**, indicando forte demanda da comunidade por suporte a comandos slash no Mattermost mobile. A proposta é registrar o COMMAND_REGISTRY como comandos slash nativos com autocomplete.

**Skill List Bloat (#22620)** — Demanda recorrente por solução de roteamento vetorial ou lazy loading para skills, impactando diretamente o context window. Este é um sinal claro de que a arquitetura atual de skills precisa evoluir.

---

## 5. Bugs e Estabilidade

### Regressões e Bugs Críticos (P1-P2)

| Issue | Severidade | Título | Link |
|-------|-----------|--------|------|
| #60551 | **P1** | config.yaml: agent write guard + type coercion em list keys | [Link](https://github.com/NousResearch/hermes-agent/issues/60551) |
| #76886 | **P2** | read_file reporta UTF-8 válido como binário (regressão em 0.19.1) | [Link](https://github.com/NousResearch/hermes-agent/issues/76886) |
| #58546 | **P2** | resolve_anthropic_token() prefere OAuth sobre ANTHROPIC_API_KEY | [Link](https://github.com/NousResearch/hermes-agent/issues/58546) |
| #67629 | **P2** | search_files com caminhos Windows absolutos falha | [Link](https://github.com/NousResearch/hermes-agent/issues/67629) |
| #75269 | **P2** | SessionDB retém WAL readers, exaurindo RLIMIT_NOFILE | [Link](https://github.com/NousResearch/hermes-agent/issues/75269) |
| #77780 | **P2** | lifecycle_guard crash com null byte, quebra todos comandos terminal | [Link](https://github.com/NousResearch/hermes-agent/issues/77780) |
| #30405 | **P2** | delegate_task truncado é desconhecido pelo modelo | [Link](https://github.com/NousResearch/hermes-agent/issues/30405) |
| #77976 | **P2** | Busy-session no WhatsApp ignora pre_gateway_dispatch, dropa remetentes autorizados | [Link](https://github.com/NousResearch/hermes-agent/issues/77976) |

### Bugs P3 (Moderada)

- **Profile Isolation (#10376):** `--clone` copia arquivos de memória, agentes leem através de boundaries
- **Desktop Enter Key (#52952):** Enter envia mensagem sem suporte a newline (4 comentários, 2 👍)
- **vision_analyze (#53639):** Rejeita caminhos Unix no Windows com erro misleading
- **google-workspace setup (#14688):** Crash sob macOS system Python3
- **patch tool loops (#18426):** Criação de loops de conteúdo duplicado com uso repetido

### Nota de Segurança

- **Issue #77989:** npm audit reporta 6 high advisories em build-time (brace-expansion, undici). Já fechada com nota de que lockfile bump upstream resolverá.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features em Demandas

| Issue | Componente | Descrição | 👍 | Link |
|-------|-----------|-----------|-----|------|
| #6296 | Mattermost | COMMAND_REGISTRY como slash commands com autocomplete | 12 | [Link](https://github.com/NousResearch/hermes-agent/issues/6296) |
| #38519 | Desktop | Instalação frontend-only com conexão remote | 10 | [Link](https://github.com/NousResearch/hermes-agent/issues/38519) |
| #50662 | Desktop | Botão fechar minimiza para system tray | 0 | [Link](https://github.com/NousResearch/hermes-agent/issues/50662) |
| #51376 | Desktop | Minimizar para tray no close (duplicata de #50662) | 0 | [Link](https://github.com/NousResearch/hermes-agent/issues/51376) |
| #74981 | Desktop | Ambient reaction mode — trace colorido contínuo | 0 | [Link](https://github.com/NousResearch/hermes-agent/issues/74981) |
| #34743 | Discord | RFC: Kanban status projetado em Discord Forum tags | 0 | [Link](https://github.com/NousResearch/hermes-agent/issues/34743) |
| #26455 | Plugins/Langfuse | Expor profile_name como userId para observabilidade | 1 | [Link](https://github.com/NousResearch/hermes-agent/issues/26455) |

### Sinais de Roadmap Identificados

1. **Plugin Interface Expansion (#64182):** Roadmap comunitário em formação para v0.21+
2. **Skill Routing (#22620):** Necessidade de arquitetura vetorial/lazy loading
3. **Signal Features (#67495, #67595):** Read receipts e reply quotes — evolução contínua da plataforma
4. **Model Override Tool (#77993):** Permite switch de modelo por sessão sem delegação

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Categoria | Descrição | Impacto |
|-----------|-----------|---------|
| **Estabilidade de Arquivos** | Regressão em read_file afeta Obsidian notes e arquivos UTF-8 | Alto — uso diário |
| **Caminhos Windows** | Falhas em search_files e vision_analyze com caminhos Unix no Windows | Médio — desenvolvedores Windows |
| **Profile Isolation** | Memória e estado vazam entre profiles | Médio — multi-tenant |
| **Session State** | WAL readers não liberados exauri RLIMIT_NOFILE | Alto — cargas longas |
| **Desktop UX** | Enter não suporta newline, fechar sai ao invés de minimizar | Baixo-Médio — frustração recorrente |

### Cenários de Uso Identificados

- **Desenvolvimento Local:** Usuários com setup de múltiplas providers (Claude, Gemini, NVIDIA) enfrentam problemas de prioridade de API keys
- **WhatsApp como Gateway:** Integração DMs em uso produtivo, com problemas de segurança em busy-session
- **Sessões Longas:** Memory leaks em SessionDB indicam uso em tarefas de longa duração
- **Setup复杂:** Problemas com Google Cloud Vertex e outras providers não-canonicas

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta/Decisão há Tempo

| Issue | Idade Aproximada | Título | Status | Link |
|-------|------------------|--------|--------|------|
| #6296 | ~4 meses | Mattermost COMMAND_REGISTRY | Aberta, 12 👍 | [Link](https://github.com/NousResearch/hermes-agent/issues/6296) |
| #38519 | ~2 meses | Desktop frontend-only install | Aberta, 10 👍 | [Link](https://github.com/NousResearch/hermes-agent/issues/38519) |
| #22620 | ~3 meses | Skill list bloat | Aberta, 5 comentários | [Link](https://github.com/NousResearch/hermes-agent/issues/22620) |
| #10376 | ~4 meses | Profile isolation incompleta | Aberta, 4 comentários | [Link](https://github.com/NousResearch/hermes-agent/issues/10376) |
| #30405 | ~2.5 meses | Truncated delegate_task | Aberta, 2 comentários | [Link](https://github.com/NousResearch/hermes-agent/issues/30405) |
| #52952 | ~1.5 meses | Desktop Enter key | Aberta, 4 comentários, 2 👍 | [Link](https://github.com/NousResearch/hermes-agent/issues/52952) |

### PRs aguardando review/merge

| PR | Componente | Descrição | Idade |
|----|-----------|-----------|-------|
| #65223 | Gateway | Fix segurança WhatsApp media download | ~20 dias |
| #77934 | CLI | Testes end-to-end update path | <1 dia |
| #77993 | Tools | model_override tool | <1 dia |
| #77992 | CI | OS-specific test lanes | <1 dia |

---

## Métricas Consolidada do Dia

```
┌─────────────────────────────────────────────────────────────┐
│  Hermes Agent — Status 2026-08-04                          │
├─────────────────────────────────────────────────────────────┤
│  Issues Ativas:              47                             │
│  Issues Fechadas (24h):       3                             │
│  PRs Abertos:                48                             │
│  PRs Mesclados (24h):         2                             │
│  Releases (24h):              1 (v0.20.0)                   │
├─────────────────────────────────────────────────────────────┤
│  Bugs P1-P2 Abertos:         8                              │
│  Features com alta demanda:  2 (Mattermost, Frontend-only)  │
│  Regressões:                 1 (UTF-8 read_file)           │
│  Security Issues:            1 (WhatsApp media)            │
└─────────────────────────────────────────────────────────────┘
```

---

**Saúde Geral do Projeto:** O Hermes Agent demonstra vigoroso desenvolvimento com release massivo recente. A quantidade de bugs P2 (8) e regressões indica necessidade de foco em QA antes do próximo release. A comunidade está ativa em features de desktop e platform integrations. Recomenda-se priorização de: (1) regressão UTF-8, (2) leaks de SessionDB, (3) segurança WhatsApp media.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-08-04

---

## 1. Panorama do Dia

O projeto PicoClaw apresenta alta atividade de manutenção no dia de hoje, com **8 issues e 7 PRs** atualizadas nas últimas 24 horas, apesar de não haver novas releases. A atividade está concentrada em **correções de bugs críticos** (lag na WebUI, hang em loops de agentes, falhas de inicialização) e **melhorias de usabilidade** (localização em japonês, suporte a systemd, padrões de execução de comandos). O time de maintainers respondeu rapidamente a PRs — todas as 5 PRs fechadas/merged hoje representam contribuições externas já aceitas, indicando um pipeline saudável de code review.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24 horas.**

O projeto segue na versão **0.3.1** (referenciada em issues abertas). A última release formal não está presente nos dados de hoje, sugerindo que o desenvolvimento ativo está em branches de feature/correção antes do próximo tag.

---

## 3. Progresso do Projeto

### PRs Merged/Fechadas Hoje (5 total)

| # | PR | Autor | Descrição | Impacto |
|---|-----|-------|-----------|---------|
| [#3310](https://github.com/sipeed/picoclaw/pull/3310) | Feat/auto pr | j-v | Automação de criação de PRs pelo picoclanker | Produtividade do time |
| [#3313](https://github.com/sipeed/picoclaw/pull/3313) | Fix customAllowPatterns | j-v | Corrigeallow patterns não respeitados em `guardCommand` | Funcionalidade de segurança do exec |
| [#3273](https://github.com/sipeed/picoclaw/pull/3273) | Japanese localization | honbou | Adiciona 968 linhas de tradução `ja.json` + suporte dayjs | Acessibilidade para mercado japonês |
| [#3267](https://github.com/sipeed/picoclaw/pull/3267) | Fix scope bug (antigravity) | sarff | Corrige scope incorreto no refresh de token antigravity | Autenticação com providers alternativos |
| [#3202](https://github.com/sipeed/picoclaw/pull/3202) | Strip underscores in ID normalization | Osamaali313 | Garante que `NormalizeAgentID`/`NormalizeAccountID` respeitam regex `^[a-z0-9][a-z0-9_-]{0,63}$` | Consistência de IDs em roteamento |

**Destaque:** A PR [#3313](https://github.com/sipeed/picoclaw/pull/3313) resolve um bug onde `customAllowPatterns` era ignorado — `git push` e similares eram bloqueados mesmo quando configurados explicitamente. Correlaciona-se com a issue aberta [#3314](https://github.com/sipeed/picoclaw/pull/3314) (mesmo autor, mesma correção).

---

## 4. Temas Quentes da Comunidade

### Issues com Mais Reações/Discussão

| # | Título | Tipo | Reações | Comentários | Tendência |
|---|--------|------|---------|-------------|-----------|
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Web UI chat input laggy com histórico longo | Bug | 👍 1 | 2 | 🔴 Prioridade alta |
| [#3269](https://github.com/sipeed/picoclaw/issues/3269) | MCP server failure causa hang no agent loop | Bug | 👍 1 | 2 | 🔴 Impacto crítico |

### Análise dos Temas

**1. Lag na WebUI (#3281)**
O usuário `xpader` reportou que a caixa de input da WebUI fica "muito laggy" quando o histórico de chat cresce. Com **988 linhas de contexto possíveis**, isso indica um problema de **performance de renderização** no frontend React — provavelmente re-renders desnecessários ou virtualização faltante na lista de mensagens.

**2. Hang em MCP (#3269)**
A falha de conexão com servidor MCP causa **loop infinito** no agente, travando completamente o chat. Este é um bug de **resiliência** — o código não implementa timeout/retry com circuit breaker para integrações MCP externas.

**3. Suporte a Systemd (#3276)** — Closed
A issue de `honbou` sobre suporte a gateway systemd foi fechada, indicando que a feature foi aceita ou workarounds documentados foram fornecidos. Correlaciona-se com PRs de maturidade em deployment.

---

## 5. Bugs e Estabilidade

### Bugs Abertos (3 issues)

| # | Severidade | Título | Detalhes |
|---|-----------|--------|----------|
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | **Alta** | Lag no input da WebUI com histórico longo | UX degradada em sessões ativas |
| [#3269](https://github.com/sipeed/picoclaw/issues/3269) | **Crítica** | MCP failure causa hang no agent | Serviço completamente travado |
| [#3301](https://github.com/sipeed/picoclaw/issues/3301) | **Média** | /clear e auto-compression falham com dispatch rules | Funcionalidade parcialmente quebrada para，非默认 agente |

### Bugs Fechados Hoje (5 issues)

- [#3268](https://github.com/sipeed/picoclaw/issues/3268): `exec` tool agora aceita `action` opcional (default "run") — melhoria de DX
- [#3265](https://github.com/sipeed/picoclaw/issues/3265): Gateway não falha mais com canais não-configurados
- [#3264](https://github.com/sipeed/picoclaw/issues/3264): `SplitMessage` não entra mais em loop infinito com fenced code blocks

**Métricas de Estabilidade:** 5/8 bugs resolvidos nas últimas 24h = **taxa de resolução de 62.5%**, indicando responsiveness rápido do time.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features em PR Aberta

| # | Título | Autor | Descrição | Sinais de Roadmap |
|---|--------|-------|-----------|-------------------|
| [#3315](https://github.com/sipeed/picoclaw/pull/3315) | Topics em chats privados do Telegram | genuss | Suporta `IsTopicMessage` em bots privados com forum mode | Expansão de suporte a recursos Telegram |
| [#3314](https://github.com/sipeed/picoclaw/pull/3314) | Fix customAllowPatterns | j-v | Permite comandos como `git push` no allow list | Segurança configurável para exec tool |

### Features Fechadas/Implementadas

- **Suporte a Systemd (#3276)**: Indica foco em deployment server-side maduro
- **Localização Japonês (#3272 + #3273)**: Mercado APAC é prioridade de acessibilidade

### Sinais de Roadmap

1. **Resiliência de integrações externas**: Bugs de MCP e antigravity sugerem trabalho em robustez de providers LLM
2. **UX de chat de longa duração**: Issue de lag indica que gestão de contexto/history é área de melhoria
3. **Suporte multi-canal avançado**: Temas do Telegram e dispatch rules mostram amadurecimento de arquitetura

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Dor | Frequência | Contexto |
|-----|------------|----------|
| **Lag em sessões longas** | 1 report (crítico UX) | Usuários com histórico denso na WebUI |
| **Falhas silenciosas** | 1 report (crítico) | MCP server down causa silêncio total |
| **Configuração complexa** | 2 reports | Systemd integration, allow/deny patterns |
| **Dispatch rules incompleto** | 1 report | Funcionalidadebeta com edge cases |

### Cenários de Uso Refletidos nos Dados

- **Servidor headless (Ubuntu VM)**: `honbou` usa PicoClaw como gateway persistente com systemd
- **Raspberry Pi + Discord/Telegram**: `j-v` demonstra uso edge computing
- **Múltiplos agentes via dispatch**: Arquitetura de roteamento inteligente sendo adotada

### Satisfação/Insatisfação

**Positivo:**
- Manutenção ativa e responsive (PRs fechadas rapidamente)
- Comunidade contributing localization (#3273 — 968 linhas traduzidas)

**Negativo:**
- Bugs de estabilidade em produção (hang, lag)
- Documentação de features avanzadas (systemd, dispatch) pode ser insuficiente

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta/Atendimento Prolongado

| # | Idade | Título | Status | Urgência |
|---|-------|--------|--------|----------|
| [#3269](https://github.com/sipeed/picoclaw/issues/3269) | ~15 dias | MCP hang | **OPEN** | 🔴 Crítica |
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | ~14 dias | Web UI lag | **OPEN** | 🔴 Alta |
| [#3301](https://github.com/sipeed/picoclaw/issues/3301) | ~6 dias | Dispatch /clear bug | **OPEN** | 🟡 Média |
| [#3276](https://github.com/sipeed/picoclaw/issues/3276) | ~15 dias | Systemd support | CLOSED | N/A (resolvido) |

### Recomendações para Maintainers

1. **Priorizar #3269**: Hang em loop de agente é blocking — adicionar circuit breaker para MCP
2. **Investigar #3281**: Profiler no frontend para identificar gargalo de renderização
3. **Revisar #3315**: PR aberta de `genuss` sobre Telegram topics precisa de review

---

## Métricas Resumidas do Dia

| Indicador | Valor |
|-----------|-------|
| Issues ativas | 3 |
| Issues fechadas | 5 |
| PRs abertas | 2 |
| PRs merged/fechadas | 5 |
| Releases | 0 |
| Taxa de resolução de bugs | 62.5% |
| Contribuidores únicos hoje | ~7 |

---

*Relatório gerado automaticamente com base em dados GitHub do repositório [sipeed/picoclaw](https://github.com/sipeed/picoclaw).*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-08-04

---

## 1. Panorama do dia

O projeto IronClaw manteve alta atividade em 04/08/2026, com **37 issues e 50 PRs atualizados nas últimas 24h**, demonstrando vigoroso ritmo de desenvolvimento. **Nenhuma release foi publicada** no período, indicando que a equipe está em ciclo de consolidação antes do próximo lançamento. O dia foi marcado por dois **PRs de alta relevância fechando** (modelo de skill e migração de loop), além de **9 novos bugs** reportados pelo time de QA, incluindo 2 P1s críticos. O volume de issues abertas (28) sugere pipeline saudável, mas a concentração de bugs de UI/UX (Telegram, WebUI) e autenticação sinaliza necessidade de estabilização na experiência final.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

O PR de release mais recente ([#5598](https://github.com/nearai/ironclaw/pull/5598)) permanece aberto desde 03/07, contendo updates para `ironclaw_common` (0.4.2→0.5.0 com breaking changes), `ironclaw_safety` (0.2.2→0.2.3) e `ironclaw_skills` (0.3.0→0.4.0 com breaking changes). Sem novos releases hoje, a versão mais recente continua sendo a publicada anteriormente.

---

## 3. Progresso do projeto

### PRs fechados/merged hoje (destaque)

| PR | Título | Impacto |
|---|---|---|
| [#6968](https://github.com/nearai/ironclaw/pull/6968) | Instrument progressive-disclosure canary metrics | Captura métricas de uso token/cache/custo preservando compatibilidade com traces legacy |
| [#5981](https://github.com/nearai/ironclaw/pull/5981) | Reborn queued-message steering (turn-boundary races fixed) | Forward-port com correções de race conditions em fronteiras de turno |
| [#6991](https://github.com/nearai/ironclaw/pull/6991) | docs(research): pi agent harness deep dive | Documentação técnica do harness pi agent |
| [#7066](https://github.com/nearai/ironclaw/pull/7066) | ci: allowlist REBORN_COV_COLLECT | Desbloqueia PRs que tocam `tests/integration/*` |
| [#7047](https://github.com/nearai/ironclaw/pull/7047) | Install packages the catalog publishes | Corrige instalação de arquivos de skills (antes só SKILL.md era instalado) |

**PRs abertos de maior complexidade:**

- [#7064](https://github.com/nearai/ironclaw/pull/7064) — refactor WS3: move model gateway e tool disclosure para `loop_host` (XL, medium risk)
- [#7065](https://github.com/nearai/ironclaw/pull/7065) — refactor WS3: merge sandbox lane + flip `ironclaw_mcp` para contracts (XL, medium risk)
- [#7077](https://github.com/nearai/ironclaw/pull/7077) — **fix: uma autorização Google cobre todas as extensões sharing the account** (fecha [#7069](https://github.com/nearai/ironclaw/issues/7069))

---

## 4. Temas quentes da comunidade

### Issues com maior engajamento (comentários)

1. **[#6284](https://github.com/nearai/ironclaw/issues/6284)** — `[CLOSED]` Epic: error-recoverability endgame | 15 comentários
   - **Demanda:** Garantir que 100% dos erros mid-run sejam recuperáveis — o modelo sobrevive, vê, entende a causa, recebe turno para agir e nunca reporta falsamente sucesso.
   - **Status:** Fechado como concluído.

2. **[#6524](https://github.com/nearai/ironclaw/issues/6524)** — `[CLOSED]` Epic: Hermetic capability and journey testing platform | 4 comentários
   - **Demanda:** Criar plataforma de testes determinísticos que responda mecanicamente: "cada capability suportada e jornada crítica tem cobertura significativa?"
   - **Status:** Fechado.

3. **[#7060](https://github.com/nearai/ironclaw/issues/7060)** — Platform-owned WIT and extension package changes fail Reborn scope classifier | 2 comentários
   - **Demanda:** Mudanças em packages owned pela plataforma falham no classificador de scope do Reborn.
   - **Status:** Aberto, investigado.

4. **[#7069](https://github.com/nearai/ironclaw/issues/7069)** — Google services require repeated authentication | 1 comentário
   - **Demanda:** Serviços Google pedem autenticação separada mesmo após fluxo já completado — já possui PR fix em [#7077](https://github.com/nearai/ironclaw/pull/7077).

5. **[#6941](https://github.com/nearai/ironclaw/issues/6941)** — Epic: skills model-driven | 1 comentário
   - **Demanda:** Habilidades que o modelo pode criar, encontrar, escolher e usar de forma que realmente paguem — parte do epic maior #6565.

---

## 5. Bugs e estabilidade

### Bugs P1 — Críticos ( требующие немедленного внимания)

| Issue | Descrição | Link |
|---|---|---|
| #7069 | Google services pedem autenticação repetida após fluxo já completado | [Issue #7069](https://github.com/nearai/ironclaw/issues/7069) |
| #7074 | Multi-tool meeting research falha após retrieving calendar data (chama função indisponível) | [Issue #7074](https://github.com/nearai/ironclaw/issues/7074) |

### Bugs P2 — Importantes

| Issue | Descrição | Link |
|---|---|---|
| #7071 | Status "Reconnecting" aparece durante cada chunk de streaming | [Issue #7071](https://github.com/nearai/ironclaw/issues/7071) |
| #7075 | Agent ignora follow-up após run falhar e continua tarefa anterior | [Issue #7075](https://github.com/nearai/ironclaw/issues/7075) |
| #7073 | Agent expõe detalhes internos (tool names, routing) em respostas ao usuário | [Issue #7073](https://github.com/nearai/ironclaw/issues/7073) |
| #7072 | Mensagens Telegram renderizam Markdown cru ao invés de formatted text | [Issue #7072](https://github.com/nearai/ironclaw/issues/7072) |
| #7045 | Voice notes e stickers Telegram causam falha total no parse (InvalidExternalRef) | [Issue #7045](https://github.com/nearai/ironclaw/issues/7045) |

### Issues de QA/Segurança

| Issue | Descrição | Link |
|---|---|---|
| #7041 | WASM guest diagnostics podem expor secrets via runtime, model causes e tracing | [Issue #7041](https://github.com/nearai/ironclaw/issues/7041) |
| #7031 | Failed lazy delivery recovery não é retried dentro da lifetime do coordinator | [Issue #7031](https://github.com/nearai/ironclaw/issues/7031) |

**Total de bugs reportados hoje: 9** — maioria concentrada em autenticação, UI/UX e estabilidade de parsing. A presença de 2 P1s em menos de 24h indica necessidade de hotfix.

---

## 6. Pedidos de features e sinais de roadmap

### Epics ativos com alta prioridade

| Epic | Descrição | Link |
|---|---|---|
| Onboarding channel-first | Eliminar blank slate na primeira visita — WebUI abre com Guided experience para General Assistant | [#7044](https://github.com/nearai/ironclaw/issues/7044) |
| Configure via AI chat | Permitir configurar tools, channels e extensions via chat ao invés da WebUI | [#7046](https://github.com/nearai/ironclaw/issues/7046) |
| Design System + Storybook | Criar design system vivo com catalog, tokens e padrões para WebUI | [#7038](https://github.com/nearai/ironclaw/issues/7038) |
| Agent access to own docs | Dar ao agent acesso à documentação (`docs/reborn/`, `docs/extensions/`) para guiar configuração | [#6734](https://github.com/nearai/ironclaw/issues/6734) — **CLOSED** |

### E2E coverage requests

| Feature | Descrição | Link |
|---|---|---|
| First-Run LLM Onboarding E2E | Cover primeiro-run WebUI workflow sem LLM configurado | [#7054](https://github.com/nearai/ironclaw/issues/7054) |
| Project Lifecycle E2E | CRUD de projects, membership e isolamento | [#7055](https://github.com/nearai/ironclaw/issues/7055) |
| Automation Lifecycle E2E | Cover create→rename→pause→resume→delete | [#7056](https://github.com/nearai/ironclaw/issues/7056) |
| Close Critical E2E Coverage Gaps | Aggregate das três acima | [#7053](https://github.com/nearai/ironclaw/issues/7053) |

### Refactors arquiteturais (WS3/WS4)

| Issue | Descrição | Link |
|---|---|---|
| #7067 | Reborn lanes: replace ResourceGovernor com narrow reserve/reconcile/release port | [Issue #7067](https://github.com/nearai/ironclaw/issues/7067) |
| #7068 | Hosted MCP: omitted destructiveHint é lido como false, mas spec default é true | [Issue #7068](https://github.com/nearai/ironclaw/issues/7068) |

---

## 7. Resumo de feedback dos usuários

### Dores reais identificadas

1. **Autenticação fragmentada em serviços Google** ([#7069](https://github.com/nearai/ironclaw/issues/7069))
   - Usuários precisam completar OAuth flow múltiplas vezes para serviços que deveriam compartilhar token.
   - Impacto: experiência de setup dolorosa, fricção na ativação de capabilities.

2. **Blank slate na primeira experiência** ([#7044](https://github.com/nearai/ironclaw/issues/7044))
   - Novos usuários não sabem o que fazer ao abrir WebUI — não há guidance.
   - Impacto: adoção comprometida, alto abandono no onboarding.

3. **Telegram como canal degradado**
   - Mensagens renderizam Markdown cru ([#7072](https://github.com/nearai/ironclaw/issues/7072))
   - Voice notes e stickers quebram parse inteiro ([#7045](https://github.com/nearai/ironclaw/issues/7045))
   - Impacto: frustração para usuários Telegram-first.

4. **Agent "lost in the middle"** ([#7075](https://github.com/nearai/ironclaw/issues/7075), [#7073](https://github.com/nearai/ironclaw/issues/7073))
   - Após falha, agent continua execução em vez de atender nova pergunta.
   - Exposição de detalhes internos causa confusão.
   - Impacto: percepção de falta de controle pelo usuário.

5. **Métricas fictícias na UI** ([#6902](https://github.com/nearai/ironclaw/issues/6902) — CLOSED)
   - Projects page mostra "$0.00 spend", "0 failures" quando backend não fornece dados.
   - Impacto: quebra de confiança — já corrigido.

### Sinais positivos

- **E2E coverage expansion planejada** ([#7053](https://github.com/nearai/ironclaw/issues/7053)) indica investimento em qualidade de entrega.
- **Docs upgrade** ([#6970](https://github.com/nearai/ironclaw/pull/6970)) demonstra atenção à experiência do developer.
- PRs de refactor WS3/WS4 sugerem arquitetura em amadurecimento.

---

## 8. Backlog que merece atenção

### Issues sem resposta significativa (> 48h sem atividade, alta relevância)

| Issue | Status | Relevância | Link |
|---|---|---|---|
| #7038 Epic: Storybook + Design System | OPEN | Alta — UX estratégico | [Issue #7038](https://github.com/nearai/ironclaw/issues/7038) |
| #7068 Hosted MCP destructiveHint default mismatch | OPEN | Média — spec compliance | [Issue #7068](https://github.com/nearai/ironclaw/issues/7068) |
| #7067 ResourceGovernor dependency removal | OPEN | Alta — arquitetura WS3 | [Issue #7067](https://github.com/nearai/ironclaw/issues/7067) |
| #7041 WASM diagnostics secret exposure | OPEN | Crítica — segurança | [Issue #7041](https://github.com/nearai/ironclaw/issues/7041) |
| #7031 Lazy delivery retry gap | OPEN | Média — confiabilidade | [Issue #7031](https://github.com/nearai/ironclaw/issues/7031) |

### PRs aguardando review há mais tempo



</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório de Projeto — CoPaw (QwenPaw)
## Data: 2026-08-04

---

## 1. Panorama do Dia

O projeto CoPaw (QwenPaw) apresenta **alta atividade** em 04/08/2026, com 22 issues e 50 PRs atualizados nas últimas 24h. Foi publicada a release **v2.1.0-beta.1**, marcando o início do ciclo de testes para a próxima versão major. A comunidade demonstra engajamento significativo em múltiplas frentes: correções de regressões no Skill Pool, suporte a novos parâmetros de prompt caching para GPT-5.6, e melhorias na resiliência de rede do console. A base de código está em período pré-lançamento, com pelo menos 4 PRs de CI/release em resolução ativa.

---

## 2. Lançamentos

### v2.1.0-beta.1
| Atributo | Detalhe |
|----------|---------|
| **Tag** | `v2.1.0-beta.1` |
| **Tipo** | Beta (pré-lançamento) |
| **Deadline verificação** | 2026-08-03 14:35 UTC |
| **Status** | Em verificação de installation verification |

**Mudanças registradas no changelog:**
- **fix(chat):** Previne vazamento de identidade de canal stale em novos chats após reinicialização ([#6382](https://github.com/agentscope-ai/QwenPaw/pull/6382))
- **feat(inbox):** Anima sidebar inbox ao receber novas aprovações e adiciona badge colorido

**Notas de migração:** Não há breaking changes documentados nesta versão beta. Usuários em produção devem aguardar a versão stable.

🔗 [Release page](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.1.0-beta.1) | 🔗 [Issue de verificação #6656](https://github.com/agentscope-ai/QwenPaw/issues/6656)

---

## 3. Progresso do Projeto

### PRs Merged/Closed (últimas 24h)

| PR | Autor | Impacto | Link |
|----|-------|---------|------|
| **#6653** fix(ci): fence-aware section extraction | hanson-hex | Corrige real-behavior-proof que deletava blocos de código em Evidence sections | [#6653](https://github.com/agentscope-ai/QwenPaw/pull/6653) |
| **#6654** fix(ci): cap playwright below 1.62 | yutai78786 | Desbloqueia build desktop Tauri macOS (timeout de 10min resolvido) | [#6654](https://github.com/agentscope-ai/QwenPaw/pull/6654) |
| **#6579** fix(desktop): use bundled Python for script execution | cuiyuebing | Resolve problema de dependência de Python no desktop | [#6579](https://github.com/agentscope-ai/QwenPaw/pull/6579) |
| **#6203** fix(utils): bound and hide Windows tasklist liveness probe | Yigtwxx | Adiciona timeout e limites ao probe de liveness no Windows | [#6203](https://github.com/agentscope-ai/QwenPaw/pull/6203) |
| **#6609** Fix spawn subagent schema | mohitdebian | Corrige tipagem schema para `batch` como não-obrigatório | [#6609](https://github.com/agentscope-ai/QwenPaw/pull/6609) |
| **#6646** fix(ci): fetch PR body via API for fork PRs | BlackBox-Labs | Resolve falha de CI em PRs de forks (security restriction) | [#6646](https://github.com/agentscope-ai/QwenPaw/pull/6646) |

### PRs Abertos com Alto Impacto

| PR | Autor | Escopo | Link |
|----|-------|--------|------|
| **#6659** feat(providers): model fallback with cooldown | niuda-kok | Failover automático entre providers com cooldown | [#6659](https://github.com/agentscope-ai/QwenPaw/pull/6659) |
| **#6652** fix(mission): enforce max_iterations server-side | BlackBox-Labs | Impede loop infinito em Mission Mode (54+ sub-sessions → 20 configurados) | [#6652](https://github.com/agentscope-ai/QwenPaw/pull/6652) |
| **#6650** fix(skill): loading redundancy | Leirunlin | Separa list summaries de detail responses, reduz payloads MB-level | [#6650](https://github.com/agentscope-ai/QwenPaw/pull/6650) |
| **#6651** feat(files): file/folder management REST API | mautops | Adiciona 6 operações CRUD para Files page | [#6651](https://github.com/agentscope-ai/QwenPaw/pull/6651) |
| **#6595 + #6658** fix(agent_management): empty batch normalization | RerankerGuo / mohitdebian | Resolve 3-step failure chain em spawn_subagent | [#6595](https://github.com/agentscope-ai/QwenPaw/pull/6595) / [#6658](https://github.com/agentscope-ai/QwenPaw/pull/6658) |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários/reações)

| Issue | Tipo | Comentários | Tema Central | Link |
|-------|------|-------------|--------------|------|
| **#6537** | Bug | 11 | **Skill tags desaparecem após restart** — regressão de #3270, tags salvas via API mas perdidas no manifest reconciliation | [#6537](https://github.com/agentscope-ai/QwenPaw/issues/6537) |
| **#6649** | Feature | 8 | **GPT-5.6 prompt caching** — suporte a `prompt_cache_key`, `prompt_cache_options`, `prompt_cache_breakpoint` | [#6649](https://github.com/agentscope-ai/QwenPaw/issues/6649) |
| **#6588** | Bug | 6 | **spawn_subagent empty batch placeholder** — tratamento incorreto de `batch=[]` em single-task calls | [#6588](https://github.com/agentscope-ai/QwenPaw/issues/6588) |
| **#6160** | Question | 4 | **Python ambiente dedicado** — desktop app depende de Python global, usuários Conda sem path padrão | [#6160](https://github.com/agentscope-ai/QwenPaw/issues/6160) |
| **#6655** | Question | 3 | **Console channel não renderiza approval prompts** — comandos de alto risco causam timeout silencioso (300s) | [#6655](https://github.com/agentscope-ai/QwenPaw/issues/6655) |

### Análise dos Temas

**1. Persistência de configuração (Skill tags, #6537):** Usuários enfrentam perda de estado após restart — indicador de gap entre storage layer e manifest reconciliation. Regressão afeta fluxo de trabalho diário.

**2. Suporte a novos modelos (#6649):** Demanda por GPT-5.6 prompt caching demonstra que a comunidade quer赶上 (agregar) capacidades de novos provedores rapidamente. Feature touching Core/Backend, não frontend.

**3. UX multi-agente (#6621):** Usuário reporta 50+ rodadas de debugging antes de descobrir que Agents não se auto-invocam sem PROFILE.md. Documentação insuficiente ou mental model confuso — oportunidade de onboarding improvement.

**4. Resiliência de rede (#6633, #6635, #6655):** Padrão recorrente de payloads MB-level sem compressão vs timeouts fixos de 30s. Usuários em redes lentas ficam excluídos.

---

## 5. Bugs e Estabilidade

### Por Severidade

#### 🔴 Críticos (afetam produção / crash)

| Bug | Descrição | Impacto | Link |
|-----|-----------|---------|------|
| **#6608** | Shell commands bloqueiam sessão indefinidamente + orphan subprocesses | 1.5h de blockage, mensagens acumuladas | [#6608](https://github.com/agentscope-ai/QwenPaw/issues/6608) |
| **#6647** | Desktop UI totalmente preta quando WebView2 crasha (STATUS_IN_PAGE_ERROR) | Sem recovery path | [#6647](https://github.com/agentscope-ai/QwenPaw/issues/6647) |
| **#6612** | Incompatibilidade agentscope 2.0.4.post1 — proactive crashes + tool-permission deadlock | Integração quebrada | [#6612](https://github.com/agentscope-ai/QwenPaw/issues/6612) |
| **#6619** | "ToolCallBlock" has no field "extra_content" — crash em openai_chat_model_compat | Compatibilidade com agentscope | [#6619](https://github.com/agentscope-ai/QwenPaw/issues/6619) |

#### 🟠 Altos (regressões / UX quebrada)

| Bug | Descrição | Link |
|-----|-----------|------|
| **#6589** | execute_shell_command com saída massiva (10k+ linhas) congela UI | [#6589](https://github.com/agentscope-ai/QwenPaw/issues/6589) |
| **#6614** | WeChat cron push sempre falha (ret=-2, context_token expired) mas reporta success | [#6614](https://github.com/agentscope-ai/QwenPaw/issues/6614) |
| **#6625** | ACP delegate_external_agent retorna "completed without text output" em race condition | [#6625](https://github.com/agentscope-ai/QwenPaw/issues/6625) |
| **#6547** | Cursor UI mal posicionado em Coding Mode editor | [#6547](https://github.com/agentscope-ai/QwenPaw/issues/6547) |

#### 🟡 Médios (degradação, workarounds disponíveis)

| Bug | Descrição | Link |
|-----|-----------|------|
| **#6624** | Scroll auto-compress não triggera summarize_when_compact (apenas /compact manual funciona) | [#6622](https://github.com/agentscope-ai/QwenPaw/issues/6624) |
| **#6565** | execute_shell_command: newlines viram espaços fora de aspas (quebra comandos multi-linha) | [#6565](https://github.com/agentscope-ai/QwenPaw/issues/6565) |
| **#6633** | Skills pages falham em redes lentas (payload MB-level, timeout 30s) | [#6633](https://github.com/agentscope-ai/QwenPaw/issues/6633) |
| **#6635** | Console pages falham em redes lentas (mesma causa de #6633) | [#6635](https://github.com/agentscope-ai/QwenPaw/issues/6635) |

### Nota sobre Regressões

Issue **#6537** é marcada explicitamente como regressão de #3270 — indica necessidade de regression test suite para cobertura de persistência de skills.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Propostas (últimas 24h)

| Feature | Autor | Escopo | Impacto | Link |
|---------|-------|--------|---------|------|
| **GPT-5.6 prompt caching** | samluoabc | Core/Backend | Redução de latência e custo em multi-turn conversations | [#6649](https://github.com/agentscope-ai/QwenPaw/issues/6649) |
| **File drag-and-drop com leitura direta de path** | rerbin | Console (frontend) | Elimina upload/download desnecessário, reduz clutter em media/ | [#6642](https://github.com/agentscope-ai/QwenPaw/issues/6642) |
| **Organização de artefatos por tarefa** | rerbin | Backend | Substituir flat media/ por estrutura de diretórios por task_id | [#6643](https://github.com/agentscope-ai/QwenPaw/issues/6643) |
| **Model fallback com cooldown** | niuda-kok | Providers layer | Resiliência contra rate limits e timeouts — feature antiga (#2199) sendo re-proposta | [#6659](https://github.com/agentscope-ai/QwenPaw/pull/6659) |

### Sinais de Roadmap Inferidos

1. **Melhoria de UX de arquivos:** Demanda consistente (#6642, #6643) indica que a estrutura atual de media storage é um ponto de dor
2. **Resiliência de rede:** Issues #6633, #6635, #6655 todas apontam para o mesmo problema — compressão de payloads e timeouts configuráveis são candidatos naturais para roadmap
3. **Desktop enhancements:** PR #6645 ("Feat/os enhancements") com Full-screen, Dock, Spaces, Mission Control —，可见宏大的桌面体验路线图
4. **Multi-agent orchestration:** Issue #6621 expõe gap de documentação/onboarding para patterns de multi-agent

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Categoria | Descrição | Frequência | Issues |
|----------|-----------|------------|--------|
| **Perda de estado** | Configurações (skills, tags) não persistem após restart | Alta | #6537, #6160 |
| **Instabilidade de desktop** | WebView2 crashes, UI freezes, blocking shell commands | Crítica | #6608, #6647, #6589 |
| **Omissão de erros** | Ações reportam "success" mas falham silenciosamente | Alta | #6614 (WeChat), #6655 (Console approvals) |
| **Performance em redes limitadas** | Funcionalidades inteiras inacessíveis | Média | #6633, #6635 |
| **Curva de aprendizado multi-agent** | Padrões de invocação entre agents não intuitivos | Média | #6621 |

### Cenários de Uso Reportados

- **Desktop-first:** Usuários Windows com Conda, execução de scripts Python gerados por agents
- **Multi-agent orchestration:** 50+ rodadas de diálogo explorando padrões de coordenação
- **API automation:** Integrações Java/services via `POST /api/console/chat` necessitam de feedback estruturado (PR #5930)
- **Scheduled tasks:** Cron jobs para WeChat push — cenário business-critical com falha silenciosa

### Indicadores de Satisfação/Insatisfação

- **Positivo:** Comunidade ativa reportando bugs com dados de reprodução detalhados; PRs de first-time contributors (#6659, #6660, #6623)
- **Negativo:** Bugs de omissão (sucesso falso) erode confiança; regressões (#6537) indicam gaps em test coverage

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Em Espera

| Issue | Criação | Days Idle | Prioridade | Motivo |
|-------|---------|-----------|------------|--------|
| **#2199** Model fallback feature request | 2026-03-24 | ~130 dias | Alta | Feature antiga, novamente proposta em #6659 — precisa decisão de alinhamento |
| **#6160** Python ambiente dedicado | 2026-07-16 | 19 dias | Média | Pergunta de usuário sem resposta — PR #6579 pode resolver parcialmente |
| **#6621** Multi-agent guidance gap | 2026-08-01 | 3 dias | Média | Documentação insuficiente — flag para team de docs |
| **#6624** Scroll auto-compress | 2026-08-01 | 3 dias | Baixa | Desconhecido se é design ou bug — precisa triagem |

### PRs Blocked ou waiting-for-review

| PR | Status | Bloqueio | Link |
|----|--------|----------|------|
| **#5930** Structured run outcome for SSE | Open | Aguardando human review | [#5930](https://github.com/agentscope-ai/QwenPaw/pull/5930) |
| **#6302** Unify provider discovery/routing | Open | Aguardando | [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) |
| **#6645** OS enhancements | "Do not merge" | Draft/exploratório | [#6645](https://github.com/agentscope-ai/QwenPaw/pull/6645) |

### Recomendações Prioritárias

1. **Alta:** Resolver regressão de Skill tags (#6537) — impacto em fluxo diário
2. **Alta:** Aplicar PR #6650 (skill loading redundancy) para endereçar issues de rede lenta
3. **Alta:** Confirmar se PR #6579 resolve #6160 e comunicar ao usuário
4. **Média:** Triar #6624 como design decision ou bug antes do release v2.1.0 stable
5. **Média:** Consolidar feature fallback model (#2199 vs #6659) para evitar duplicate effort

---

*Relatório gerado automaticamente com base em dados do GitHub de [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw) em 2026-08-04. Dados incluem 22 issues e 50 PRs atualizados nas últimas 24h.*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-08-04

## 1. Panorama do Dia

O projeto ZeroClaw mantém **atividade intensa** nas últimas 24 horas, com 50 issues e 50 PRs atualizados. A versão **v0.8.4** foi liberada como release de manutenção e hardening, consolidando 262 commits de 49 colaboradores. O ecossistema demonstra foco em **segurança, estabilidade de canais e preparação para a v0.9.0**, com múltiplas RFCs em discussão avançada e PRs de correção de bugs críticos em curso. A comunidade está particularmente ativa em torno de arquiteturas de memória persistente, modo goal e integrações A2A.

---

## 2. Lançamentos

### v0.8.4
**Release de manutenção e hardening**

| Aspecto | Detalhes |
|---------|----------|
| **Commits** | 262 |
| **Contribuidores** | 49 |
| **Escopo** | Memory e SOP control planes, confiabilidade de providers e canais, hardening de sandbox e credenciais, desktop e pipeline de release |

**Destaques da release:**
- Expansão dos planos de controle de memória e SOP
- Aprimoramento de confiabilidade em providers e canais
- Fortalecimento de limites de sandbox e credenciais
- Melhorias no desktop e no pipeline de release

> ⚠️ **Nota:** A release também expôs o bug de MSRV no Containerfile (#[9690](https://github.com/zeroclaw-labs/zeroclaw/issues/9690)), que já possui PR de correção em curso.

---

## 3. Progresso do Projeto

### PRs Fechados/Merged Hoje

| PR | Descrição | Impacto |
|----|-----------|---------|
| **#9589** | Bump wasmtime para 47.0.3 (RUSTSEC-2026-0222) | 🔴 Segurança — corrige vulnerabilidade no runtime WASM |
| **#9616** | Expõe workspace paths para config set | 🟡 Configuração — permite gerenciamento via CLI |
| **#8969** | Hydrata contexto de threads Slack no primeiro interação | 🟢 UX — melhora contexto conversacional em Slack |

### PRs Abertos de Alto Impacto

| PR | Descrição | Prioridade |
|----|-----------|------------|
| **#9607** | Rotear CLI tools de codificação pelo runtime configurado | P1 |
| **#9691** | Alinhar StageX pins e MSRV para all-features builds | P1 |
| **#9402** | Evitar aninhamento Docker sandbox dentro de Docker runtime | P1 |
| **#9604** | Enforçar ownership de webhook alias Linq | P1 (Segurança) |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| Issue | Título | Comentários | Tipo |
|-------|--------|-------------|------|
| **#8603** | RFC: ZeroClaw Chat Completions profile | 15 | RFC |
| **#8303** | RFC: Goal mode v1 — bounded foreground Matrix work | 11 | RFC |
| **#8681** | [Tracker] Goal mode implementation split stack | 10 | Tracker |
| **#9106** | RFC: A2A outbound client (A2ATool) | 10 | RFC |
| **#9488** | RFC: Unified attachment architecture | 8 | RFC |
| **#8891** | [Tracker] Persistent memory - wire curation, relevance, operability | 7 | Tracker |
| **#9487** | RFC: Runtime-owned conversation sessions | 7 | RFC |

### Análise dos Temas

**🔵 Integração com Ecossistema OpenAI:**
A RFC #8603 busca expor capacidades do ZeroClaw via protocolo Chat Completions, possibilitando integração nativa com Open WebUI, LobeChat, Continue.dev, LangChain e outros clientes que esperam o protocolo OpenAI. Isso reduziria significativamente a barreira de adoção.

**🟡 Arquitetura Multi-Agente (A2A):**
As RFCs #9106 e #9487 indicam que o projeto está construindo uma arquitetura de interoperabilidade entre agentes, permitindo colaboração inter-agentes além dos canais tradicionais.

**🟢 Modo Goal:**
O tracker #8681 coordena a divisão da implementação de goal mode em PRs revisáveis, sinalizando amadurecimento da feature após a fase inicial em `feat/goal-mode`.

**🔴 Memória Persistente:**
O epic tracker #8891 (18 itens em aberto) coordena a paridade do subsistema de memória cross-session com runtimes concorrentes, indicando maturidade estratégica.

---

## 5. Bugs e Estabilidade

### Bugs P1 (Críticos/Altos)

| Issue | Descrição | Severidade | Status |
|-------|-----------|------------|--------|
| **#1** | XOR cipher não oferece criptografia real para secrets armazenados | 🔴 CRÍTICO | Aberto desde Fev/2026 |
| **#9690** | Containerfile StageX shipping rustc 1.95.0 abaixo do MSRV declarado (1.96.1) | 🔴 S1 | Em progresso — PR #9691 |
| **#9417** | WhatsApp Cloud request_approval vaza token de aprovação em falha/cancelamento | 🔴 S2 | Em progresso |
| **#7527** | macOS desktop app abre em branco ou sem janela | 🔴 S1 | Aguarda reprodução |
| **#9402** | Aninhamento Docker sandbox dentro de Docker runtime | 🔴 S1 | PR #9402 aberto |
| **#6157** | Nextcloud Talk usa API de mensagem de bot incorreta | 🟠 S3 | Bloqueado |

### Bugs P2 (Médios)

| Issue | Descrição | Status |
|-------|-----------|--------|
| **#9635** | Git subcommand não resolvido após global options no classificador de risco | PR #9635 aberto |
| **#9695** | Terminal markers não removidos de respostas streaming | PR #9695 aberto |
| **#9699** | chat_template_kwargs não forwarded ao request body OpenAI-compatible | PR #9699 aberto |

---

## 6. Pedidos de Features e Sinais de Roadmap

### RFCs em Destaque para v0.9.0+

| RFC | Feature | Prioridade | Notas |
|-----|---------|------------|-------|
| **#8603** | Chat Completions profile | P2 | Compatibilidade OpenAI SDK |
| **#8303** | Goal mode v1 | P2 | Trabalho bounded multi-turn |
| **#9106** | A2A outbound client | P2 | Inter-operação entre agentes |
| **#9488** | Unified attachment architecture | P2 | Consolidação web/canais |
| **#9487** | Runtime-owned conversation sessions | P2 | Gerenciamento de sessão |
| **#7759** | WebSocket lifetime decoupling | P1 | Turns em background |
| **#9397** | WhatsApp allowed_groups permit-none | P1 | Configuração de segurança |

### Sinais de Roadmap

- **v0.9.0 Auth & Security**: Tracker #7432 coordena hardening de autenticação, boundaries de gateway, A2A e multi-agente
- **Rust→Wasm Web UI**: RFC #8132 propõe eliminação do React/Vite em favor de framework Rust→Wasm
- **ZeroCode SOP Pane**: MVP de visibilidade de status em desenvolvimento (#9682, #9694)

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Categoria | Problema | Evidence |
|-----------|----------|----------|
| **Desktop (macOS)** | App não detecta permissões concedidas, abre em branco, janela some ao reiniciar | #[7527](https://github.com/zeroclaw-labs/zeroclaw/issues/7527) |
| **Telegram** | Mensagens não são claramente endereçadas ao assistente | #[6002](https://github.com/zeroclaw-labs/zeroclaw/issues/6002) |
| **Configuração** | Dificuldade em expor paths de workspace via config set | #[9616](https://github.com/zeroclaw-labs/zeroclaw/pull/9616) (corrigido) |
| **CLI Tools** | Ferramentas de codificação não usavam runtime configurado | #[9607](https://github.com/zeroclaw-labs/zeroclaw/pull/9607) (corrigido) |
| **CI/CD** | Builds all-features falhando há ~4 semanas | #[9690](https://github.com/zeroclaw-labs/zeroclaw/issues/9690) |

### Cenários de Uso Emergentes

- **Integração via Chat Completions**: Usuários querem usar ZeroClaw como backend drop-in para clientes OpenAI-compatíveis
- **Multi-agente**: Colaboração entre agentes ZeroClaw e externos via protocolo A2A
- **Memory cross-session**: Usuários desejam persistência de contexto além de sessões individuais

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta/Estagnadas

| Issue | Idade | Criticidade | Problema |
|-------|-------|-------------|----------|
| **#1** | ~6 meses | 🔴 CRÍTICO | Vulnerabilidade XOR cipher — **sem movimento** |
| **#8132** | ~1.5 meses | 🟡 Alta | RFC Rust→Wasm — aguardando author action |
| **#8367** | ~1.5 meses | 🟢 Média | RFC capability-aware docs — aguardando author action |
| **#7269** | ~meses | 🟡 Média | Tracked rustdoc warning gate (referenciado em #9545) |

### Recomendações para Maintainers

1. **🔴 Prioridade Absoluta**: #1 (XOR cipher) — vulnerabilidade crítica aberta há 6 meses
2. **🟠 Prioridade Alta**: #9690 + #9402 — problemas P1 com PRs aguardando review
3. **🟡 Manter Pipeline**: RFCs #8603, #8303, #9106 precisam de maintainer review
4. **🟢 Oportunidade**: Engage com RFCs bem elaboradas (#9487, #9488) para direction setting da v0.9.0

---

## Métricas Resumidas do Dia

| Indicador | Valor |
|------------|-------|
| Issues ativas (24h) | 50 (46 abertas, 4 fechadas) |
| PRs atualizados (24h) | 50 (41 abertos, 9 merged/fechados) |
| Novas releases | 1 (v0.8.4) |
| Bugs P1 abertos | 6 |
| RFCs em discussão | 12+ |
| Contemplados Contributors (release) | 49 |
| Commits na release | 262 |

---

*Relatório gerado automaticamente com base em dados do GitHub de zeroclaw-labs/zeroclaw em 2026-08-04.*

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*