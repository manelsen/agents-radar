# Resumo diário do ecossistema de agentes de IA 2026-05-13

> Issues: 1 | PRs: 2 | Projetos cobertos: 7 | Gerado em: 2026-05-12 21:14 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório do Projeto NullClaw — 13/05/2026

---

## 1. Panorama do Dia

O projeto NullClaw apresenta **atividade moderada** em 13 de maio de 2026. Nas últimas 24 horas, foram registradas 1 nova issue aberta e 2 pull requests em andamento, sem nenhum merge ou release. A comunidade demonstra interesse em melhorias de estabilidade (especialmente no gateway Discord) e em funcionalidades de sincronização para workers. O projeto segue em desenvolvimento ativo, com foco em correções de estabilidade e expansão de funcionalidades de integração.

---

## 2. Lançamentos

**Nenhuma release została wydana nas últimas 24 horas.**

O projeto não publicou novas versões desde o último período. Recomenda-se monitorar o repositório para eventuais tags de release futuras.

---

## 3. Progresso do Projeto

### PRs em Andamento (2 pull requests abertas)

| # | Título | Autor | Área | Status |
|---|--------|-------|------|--------|
| [#912](https://github.com/nullclaw/nullclaw/pull/912) | `feat(gateway): synchronous /webhook for paired-token workers` | Kures | Gateway | 🟡 ABERTA |
| [#910](https://github.com/nullclaw/nullclaw/pull/910) | `fix(discord,websocket): gateway stability — watchdog, backoff, interrupt-safe stop, TLS leak fix` | vernonstinebaker | Discord/WebSocket | 🟡 ABERTA |

### Análise dos PRs

**#910 — Estabilidade do Gateway Discord**  
Este PR aborda **cinco correções críticas de estabilidade** para o gateway Discord, com testes de soak de 12 horas em quatro nós em três arquiteturas diferentes:
- macOS arm64
- Linux aarch64 (musl)
- Linux riscv64 (musl)
- Android aarch64

Correções incluídas: watchdog, backoff, interrupt-safe stop e TLS leak fix. Este é um PR significativo para ambientes de produção.

**#912 — Webhook Síncrono para Workers**  
Implementa endpoint `/webhook` síncrono para workers com paired-token, atendendo à Gap 3 ("Worker Endpoint for nullboiler Dispatch — HIGH PRIORITY") do documento `docs/integration-analysis.md`. Representa uma melhoria importante para arquiteturas de dispatch distribuído.

> ⚠️ **Nenhum PR foi merged/fechado** nas últimas 24h.

---

## 4. Temas Quentes da Comunidade

### Issue em Destaque

| # | Título | Autor | Tipo | Comentários | Reações |
|---|--------|-------|------|-------------|---------|
| [#913](https://github.com/nullclaw/nullclaw/issues/913) | a2a performance? | jacktang | 🔍 Investigação | 0 | 0 |

**Análise:** A issue #913 levanta uma preocupação técnica relevante: o usuário reportou que a implementação nativa de messaging/response do NullClaw apresenta performance superior à implementação do protocolo A2A. Este é um tema importante para:
- Usuários focados em baixa latência
- Arquiteturas de alta performance
- Decisões de design para integrações futuras

Recomenda-se que a equipe técnica avalie os benchmarks e documente os trade-offs entre as duas abordagens.

---

## 5. Bugs e Estabilidade

### Issues Abertas Recentes

| # | Severidade | Título | Área |
|---|------------|--------|------|
| [#913](https://github.com/nullclaw/nullclaw/issues/913) | 🔴 Não especificada | a2a performance? | A2A Protocol |

### Observações

- **Nenhum bug crítico foi fechado** nas últimas 24h.
- O PR #910 contém múltiplas correções de estabilidade para o gateway Discord, indicando que a equipe está ativamente trabalhando em melhorias de resiliência.
- A issue #913, embora não classificada, pode indicar uma regressão de performance no protocolo A2A que merece atenção.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Demandas

| # | Título | Tipo | Prioridade Implícita |
|---|--------|------|---------------------|
| [#913](https://github.com/nullclaw/nullclaw/issues/913) | a2a performance? | 🔍 Investigação/Feature | Alta (benchmarking) |

### Sinais de Roadmap Identificados

Através dos PRs em andamento, os seguintes temas emergem como prioridades:

1. **Worker Dispatch Síncrono** (PR #912)  
   - Endpoint `/webhook` para paired-token workers
   - Prioridade: HIGH (conforme `docs/integration-analysis.md`)

2. **Estabilidade Multi-Plataforma** (PR #910)  
   - Suporte consistente entre macOS, Linux (musl), RISC-V e Android
   - Crítico para implantações edge/IoT

3. **Otimização A2A** (Issue #913)  
   - Demanda por benchmarks oficiais
   - Potencial necessidade de otimização do protocolo

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Dor | Contexto | Prioridade |
|-----|----------|------------|
| Performance inferior do A2A vs messaging nativo | Comparação técnica entre abordagens | 🔴 Média-Alta |

### Cenários de Uso Identificados

Com base nos PRs e issues, os cenários de uso atuais incluem:

- **Integrações Discord/Mattermost** — estabilidade em produção multi-nó
- **Arquiteturas de Workers Distribuídos** — dispatch síncrono via webhook
- **Deploy em Edge/IoT** — suporte a arquiteturas ARM64, RISC-V64, Android

### Satisfação/Insatisfação

- **Aspecto positivo:** Comunidade ativa reportando issues técnicas detalhadas
- **Ponto de atenção:** Questão de performance A2A pode impactar usuários com requisitos de baixa latência

---

## 8. Backlog que Merece Atenção

### Issues Antigas sem Resposta

| # | Título | Criado | Dias em Aberto | Status |
|---|--------|--------|----------------|--------|
| — | Nenhuma identificada nas últimas 24h | — | — | — |

### Observações

Com base nos dados das últimas 24h, **não há evidências de issues antigas negligenciadas**. Todas as atividades são recentes (criadas entre 11 e 12 de maio de 2026).

---

## Métricas Consolidada (24h)

| Métrica | Valor |
|---------|-------|
| 🔵 Issues abertas/ativas | 1 |
| 🔴 Issues fechadas | 0 |
| 🟡 PRs abertos | 2 |
| 🟢 PRs merged/fechados | 0 |
| 🆕 Releases | 0 |
| 📊 Net activity | Neutra (sem progresso líquido) |

---

## Recomendações

1. **Prioridade Alta:** Avaliar issue #913 sobre performance A2A — pode afetar decisões arquiteturais de usuários
2. **Revisar PR #910:** As correções de estabilidade multi-plataforma são candidatas a merge rápido
3. **Acompanhar PR #912:** Feature de worker dispatch síncrono alinhada com roadmap documentado
4. **Considerar release:** Dado o volume de correções de estabilidade, uma release patch pode ser benéfica para usuários em produção

---

*Relatório gerado automaticamente com base em dados do GitHub — 2026-05-13*

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo — Ecossistema de Agentes de IA Open Source

**Data de Referência:** 2026-05-13 | **Projetos Analisados:** 7

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **dois perfis distintos de maturidade** em maio de 2026. De um lado, projetos como **ZeroClaw, Hermes Agent e IronClaw** demonstram atividade intensa (40-50+ PRs/24h) com foco em consolidação arquitetural e expansão de funcionalidades enterprise. De outro, **NanoBot e CoPaw** priorizam estabilidade de providers e UX multi-usuário, enquanto **NullClaw** mantém ritmo moderado focado em integrações específicas (Discord gateway). A tendência transversal é a **multi-canalidade** (Telegram, Discord, Matrix, WeChat, Feishu), com desafios recorrentes em autenticação OAuth e resiliência de providers.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | PRs Merged | Releases | Saúde | Prioridades Críticas |
|---------|:------------:|:---------:|:----------:|:--------:|:-----:|----------------------|
| **ZeroClaw** | 13 | 50 | 18 | 0 | 🟢 Alta | Discord media broken, onboarding Codex |
| **Hermes Agent** | 50 | 50 | 7 | 0 | 🔴 Atenção | Context window 64K bloqueia modelos legítimos |
| **IronClaw** | 29 | 50 | 9 | 1 (v0.28.1) | 🟡 Boa* | OAuth quebrado (Gmail/Sheets), E2E falhando |
| **CoPaw** | 31 | 39 | 26 | 1 (v1.1.7-beta) | 🟡 Média | DashScope 401, MCP 401 blocking |
| **NanoBot** | 8 | 18 | 11 | 0 | 🟢 Alta | DeepSeek V4 Flash broken (post3) |
| **PicoClaw** | 17 | 19 | 6 | 1 (nightly) | 🟡 Média | Sandbox bypass, PID crash loop |
| **NullClaw** | 1 | 2 | 0 | 0 | 🟢 Estável | A2A performance, gateway stability |

*\*IronClaw apresenta alta atividade mas 3 bugs P1 ativos relacionados a OAuth*

---

## 3. Posicionamento do Projeto Principal

### Hermes Agent (NousResearch) — Destaque por Volume

**Vantagens Competitivas:**
- Maior volume de issues/PRs (50/50) indica comunidade mais ativa
- Suporte nativo a múltiplos providers (Kimi, Groq, OpenRouter, Gemini)
- Feature de Kanban integrada com agentes

**Passivos Críticos:**
- Política de context window mínimo 64K rejeita modelos legítimos (MiniMax-M2.7 32K, Kimi K2 256K reportado como 32K)
- Telegram completamente inoperante para todos os usuários
- 11 bugs P2 ativos em canais e providers

**Diferencial Técnico:**
- Arquitetura de fallback/ failover (#24539) tratando 503/529 como failover imediato
- LanceDB hybrid memory plugin em desenvolvimento

### NanoBot (HKUDS) — Destaque em Maturidade

**Vantagens Competitivas:**
- Taxa de resolução impressionante: 61% dos PRs fechados em 24h
- Arquitetura multi-tenant madura (storage em `~/.nanobot/users/<ulid>/`)
- Plugin system para tools (#3729)

**Passivos:**
- DeepSeek V4 Flash completamente quebrado na versão post3 (3 issues em 24h)
- Perda de contexto ao interromper agente (#3689) impacta long-tasks

---

## 4. Focos Técnicos Compartilhados

### 4.1 Resiliência de Providers e Modelos

| Projeto | Status | Implicação |
|---------|--------|------------|
| **Hermes** | 🔴 Crítico | Context window policy bloqueia 3+ modelos populares |
| **CoPaw** | 🔴 Crítico | DashScope API key não carrega (401 universal) |
| **NanoBot** | 🔴 Crítico | DeepSeek V4 Flash quebrado em post3 |
| **IronClaw** | 🟠 Alto | Gmail OAuth falha com 400 |

**Ação Recomendada:** Padronizar detecção de capabilities de modelos e implementar fallback chains mais robustos.

### 4.2 Multi-Canalidade e Integração

| Canal | Projetos Afetados | Status |
|-------|-------------------|--------|
| **Telegram** | Hermes, PicoClaw, IronClaw, ZeroClaw | 🟠 Bugs ativos em 4/7 projetos |
| **Discord** | NullClaw, IronClaw, ZeroClaw | 🟡 Estabilidade em progresso |
| **Matrix** | Hermes, CoPaw | 🟡 Funcional, mas com issues |
| **WeChat/WeCom** | IronClaw, NanoBot, ZeroClaw | 🟢 Suporte crescendo |

### 4.3 Segurança e Sandbox

| Projeto | Vulnerabilidade | Severity | Status |
|---------|-----------------|----------|--------|
| **PicoClaw** | `find /` escapa sandbox (#2688) | 🔴 Crítica | PR #2693 em aberto |
| **PicoClaw** | PID check crash loop (#2720) | 🔴 Crítica | PR #2813 em aberto |
| **ZeroClaw** | Rate-limiting refatorado | ✅ Resolvido | 50 call sites consolidados |
| **IronClaw** | RustSec 2026-0114 (Wasmtime) | ✅ Corrigido | PR #3513 merged |

---

## 5. Análise de Diferenciação

### Perfil de Público-Alvo

| Projeto | Público Primário | Arquitetura | Escalabilidade |
|---------|------------------|-------------|-----------------|
| **Hermes Agent** | Desenvolvedores power-user | Monolito + plugins | Single-user avançada |
| **NanoBot** | Enterprise multi-usuário | Multi-tenant com ULID | Alta (IM integrations) |
| **IronClaw** | Corporações (Google Suite) | Reborn v2 architecture | Multi-agente |
| **ZeroClaw** | DevOps/Automação | Rust + channel-based | Edge/IoT |
| **PicoClaw** | Hardware limitado (RPi) | Leve + streaming | Embedded |
| **CoPaw** | Desktop/mobile users | Tauri + ACP SDK | Cross-platform |
| **NullClaw** | Comunidades Discord | Gateway-centric | Workers distributed |

### Diferenças Arquiteturais

**Rust vs Python:**
- **ZeroClaw, PicoClaw** → Rust para performance e segurança (memory safety)
- **NanoBot, Hermes, CoPaw, IronClaw** → Python para extensibilidade e DX

**Agent Loop Patterns:**
- **ReAct nativo** (NanoBot, Hermes)
- **Plugin-based** (ZeroClaw wrappers, CoPaw tool loader)
- **Reborn architecture** (IronClaw — nova arquitetura em desenvolvimento)

---

## 6. Tração e Maturidade da Comunidade

### Velocidade de Iteração

| Tier | Projetos | PRs/24h | Taxa Merge | Release Cycle |
|------|----------|:-------:|:----------:|:-------------:|
| **🚀 Rápido** | ZeroClaw, Hermes | 40-50 | ~35% | Contínuo |
| **📈 Ativo** | NanoBot, IronClaw, CoPaw | 18-39 | 50-61% | Semanal/Beta |
| **⚙️ Estável** | PicoClaw | 19 | 31% | Nightly |
| **🐢 Moderado** | NullClaw | 2 | 0% | Event-driven |

### Qualidade de Issue Tracking

| Projeto | Issues Críticas Respondidas | Tempo Médio | Score |
|---------|:----------------------------:|:-----------:|:-----:|
| **NanoBot** | ✅ Alta (3 bugs em 24h) | <24h | ⭐⭐⭐⭐ |
| **CoPaw** | ✅ Provider 401 blocking | ~24h | ⭐⭐⭐ |
| **Hermes** | ⚠️ Context window (10+ comments) | >48h | ⭐⭐ |
| **IronClaw** | ⚠️ OAuth (11 comments) | >72h | ⭐⭐ |
| **PicoClaw** | ✅ Sandbox bypass (3 comments) | <24h | ⭐⭐⭐ |

**Observação:** Hermes Agent e IronClaw acumulam bugs P1 com alta frustração comunitária (>10 comentários) sem resolução rápida.

---

## 7. Sinais de Tendência

### 7.1 Enterprise Multi-Tenancy

**Evidência:**
- NanoBot: Storage `~/.nanobot/users/<ulid>/` (#3749)
- CoPaw: Session lifecycle hooks propostos (#4249)
- IronClaw: Reborn architecture com isolamento

**Implicação:** Demanda crescente por agentes que sirvam múltiplos usuários simultâneos sem colisão de contexto/memória.

### 7.2 Diversificação de Providers

**Evidência:**
- Hermes: 10+ issues sobre Kimi, Gemini, Groq, OpenRouter
- ZeroClaw: RunPod ComfyUI image gen (#6555)
- CoPaw: Qwen-Image, Wan 2.7 plugins (#4248)

**Implicação:** Modelo de "abstração de provider" está se tornando commodity; diferenciação está em reliability e fallback chains.

### 7.3 Multimodalidade e Streaming

**Evidência:**
- PicoClaw: AWS Bedrock StreamingProvider (#2645)
- CoPaw: OAuth PKCE para MCP servers (#4256)
- NanoBot: `reasoning_content` streaming (#3655)

**Implicação:** Interfaces responsivas (SSE, streaming tokens) são expectativas mínimas em 2026.

### 7.4 Segurança como Feature

**Evidência:**
- PicoClaw: Sandbox bypass reportado como "crítica" (#2688)
- ZeroClaw: Refatoração massiva de rate-limiting (padronização)
- IronClaw: Wasmtime rustsec update

**Implicação:** Agentes executando código/arquivos localmente requerem posture de segurança rigorosa.

### 7.5 Mercado Chinês/Asiático

**Evidência:**
- NanoBot: DeepSeek V4, VolcEngine, WeCom
- IronClaw: WeChat metadata (#3386)
- ZeroClaw: Wecom channel request (63 dias em aberto)

**Implicação:** Alcance global requer suporte a plataformas mensagens chinesas e providers regionais.

---

## Síntese Executiva

| Ação | Responsável | Urgência |
|------|-------------|:--------:|
| Corrigir context window policy de 64K | **Hermes Agent** | 🔴 Crítica |
| Resolver OAuth flows (Gmail/Sheets) | **IronClaw** | 🔴 Crítica |
| Endereçar sandbox bypass | **PicoClaw** | 🔴 Crítica |
| Fix DashScope/DeepSeek providers | **CoPaw/NanoBot** | 🔴 Crítica |
| Padronizar fallback chains | **Todos** | 🟠 Alta |

**Recomendação Estratégica:** Projetos que resolverem primeiro os problemas de **provider reliability** e **multi-tenant isolation** capturarão adoção enterprise em 2026-H2. A fragmentação de bugs em canais (Telegram afetando 4/7 projetos) sugere oportunidade de abstração/shared library.

---

*Relatório gerado automaticamente — 2026-05-13*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-05-13

---

## 1. Panorama do Dia

NanoBot manteve alta atividade em 12 de maio de 2026, com **8 issues e 18 PRs atualizados** nas últimas 24h. O projeto demonstra maturidade técnica com **11 PRs fechados/mergeados**, incluindo refatorações significativas no sistema de ferramentas e autenticação multi-tenant. A comunidade demonstra interesse crescente em funcionalidades avançadas como fallback de modelos, streaming de reasoning e isolamento de sessões por tópico em canais como Feishu. Não houve novas releases publicadas, sugerindo que a equipe está consolidando contribuições recentes antes de um próximo release tag.

---

## 2. Lançamentos

### Nenhuma release publicada nas últimas 24h

O projeto está em período de consolidação de código. As próximas mudanças potencialmente inclusas em release:
- Sistema de presets de modelos com switching em runtime (#3714)
- Plugin architecture para ferramentas (#3729)
- Autenticação multi-tenant para WebUI (#3749)
- Suporte a fallback de modelos (#3756)

---

## 3. Progresso do Projeto

### PRs Fechados/Mergiados (11)

| PR | Título | Impacto |
|----|--------|---------|
| [#3749](https://github.com/HKUDS/nanobot/pull/3749) | feat(auth): multi-tenant WebUI accounts | Migração de single-tenant para multi-user com isolamento de estado em `~/.nanobot/users/<ulid>/` |
| [#3714](https://github.com/HKUDS/nanobot/pull/3714) | feat(config): ModelPresetConfig + runtime switching | Introduce named presets de modelos e switching atômico em runtime |
| [#3729](https://github.com/HKUDS/nanobot/pull/3729) | refactor(tools): plugin architecture | Migração de `AgentLoop._register_default_tools()` (~50 linhas) para padrão self-describing plugin (~25 linhas) com `ToolLoader` |
| [#3747](https://github.com/HKUDS/nanobot/pull/3747) | feat(feishu): topic_isolation config switch | Permite toggle de isolamento de sessão por tópico em grupos Feishu |
| [#3757](https://github.com/HKUDS/nanobot/pull/3757) | refactor(agent): remove ask_user tool | Remove `AskUserTool` e controle de fluxo baseado em exceção; modelo agora pergunta naturalmente no texto |
| [#3759](https://github.com/HKUDS/nanobot/pull/3759) | fix(webui): default to new chat + preserve scroll | Melhora navegação: página inicial blank ao carregar, preserva scroll em settings |
| [#3758](https://github.com/HKUDS/nanobot/pull/3758) | fix(provider): preserve Bedrock tool config | Resolve erro de API quando conversas têm histórico de tool calls sem tools ativos no turno atual |
| [#3751](https://github.com/HKUDS/nanobot/pull/3751) | fix(wecom): preserve real filename from SDK | Corrigido filename `unknown` ao enviar arquivos via WeCom |
| [#3738](https://github.com/HKUDS/nanobot/pull/3738) | fix(providers): VolcEngine supports_max_completion_tokens | Evita erro de API quando ambos `max_tokens` e `max_completion_tokens` são enviados |
| [#3635](https://github.com/HKUDS/nanobot/pull/3635) | fix(agent): soften SSRF guard recovery | SSRF retorna erro não-retryable ao invés de abortar runtime turn |
| [#3755](https://github.com/HKUDS/nanobot/pull/3755) | chore: remove dead code (vulture verified) | Remoção de 5 itens, 103 linhas identificadas via vulture → grep → coverage |

### Destaque: Arquitetura Multi-Tenant (#3749)
Transformação de storage de `~/.nanobot/` para `~/.nanobot/users/<ulid>/` representa mudança arquitetural significativa, permitindo que múltiplos usuários compartilhem o gateway enquanto mantêm estado isolado.

---

## 4. Temas Quentes da Comunidade

### Issues com Mais Engajamento

| Issue | Título | Comentários | Reações |
|-------|--------|-------------|---------|
| [#3744](https://github.com/HKUDS/nanobot/issues/3744) | session级别MEMORY功能请求 | 3 | 0 |
| [#3689](https://github.com/HKUDS/nanobot/issues/3689) | 中断会话丢失上一轮会话的聊天记录 | 2 | 0 |
| [#3692](https://github.com/HKUDS/nanobot/issues/3692) | feishu group topic 隔离支持开关 | 1 | 👍 1 |
| [#3753](https://github.com/HKUDS/nanobot/issues/3753) | deepseek-v4-flash reasoning_content error | 1 | 0 |
| [#3754](https://github.com/HKUDS/nanobot/issues/3754) | deepseek-v4-flash ignores external file content | 1 | 0 |

### Análise de Demandas

**TEMA 1: Gerenciamento de Memória Multi-Usuário (#3744)**
- **Problema:** Quando múltiplos usuários IM usam o mesmo agent, há colisão de arquivos `USER.md` e `MEMORY.md`
- **Contexto:** Questão sobre o papel do diretório `session/` no isolamento
- **Sinal:** Usuários enterprise precisam de isolamento de contexto por usuário/sessão
- **Prioridade:** Alta — indica adoção em ambientes multi-tenant

**TEMA 2: Perda de Contexto ao Interromper Sessão (#3689)**
- **Problema:** Ao interromper agent (ex:陷入循环), nanobot perde histórico e não consegue retomar tarefa
- **Impacto:** Usabilidade em tarefas de longo prazo severely impactada
- **Proposta:** Manter memória de estado ao interromper, incluindo steps executados

**TEMA 3: Fallback de Modelos (#3756 - PR em aberto)**
- PR introduz `fallback_models: list[str]` para chains de fallback automático
- Resolve instabilidade de modelos como codex gpt-5.5 na China Mainland (#3742)
- Prioridade: Alta para resiliência operacional

---

## 5. Bugs e Estabilidade

### Bugs Abertos (3)

| Severidade | Issue | Descrição |
|------------|-------|-----------|
| **Alta** | [#3760](https://github.com/HKUDS/nanobot/issues/3760) | deepseek-v4-flash + post3: reasoning_content 导致 400 error — primeiro turno já falha |
| **Alta** | [#3754](https://github.com/HKUDS/nanobot/issues/3754) | deepseek-v4-flash ignora conteúdo de arquivos externos, model "inventa" dados (ex: tabela periódica) |
| **Média** | [#3753](https://github.com/HKUDS/nanobot/issues/3753) | Mesmo bug de reasoning_content (closed — mas regressão?) |

### Análise: Problemas Recorrentes com DeepSeek V4 Flash

Três issues em 24h relacionadas ao mesmo modelo:
- `reasoning_content` injetado incorretamente via post3
- Modelo não respeita instruções de ler arquivos
- **Padrão:** Usuário renyizhongguo reportou 3 issues em sequência, indicando uso intensivo com DeepSeek V4

**Root Cause Provável:** Incompatibilidade entre `v0.1.5.post3` e API do DeepSeek V4, que mudou comportamento de `thinking_content`/`reasoning_content`.

**Workaround Atual:** Alternar para `deepseek-chat` ou desabilitar `thinking_style`.

### Bugs Corrigidos Recentemente

| Fix | Issue Relacionada | Impacto |
|-----|-------------------|---------|
| [#3751](https://github.com/HKUDS/nanobot/pull/3751) | #3737 | Arquivos WeCom não eram salvos com nome real |
| [#3758](https://github.com/HKUDS/nanobot/pull/3758) | — | Bedrock Converse rejeitava histórico de tool calls |
| [#3752](https://github.com/HKUDS/nanobot/pull/3752) | (fix PR) | .ogg de WhatsApp permanecia em media_paths após transcrição |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Solicitadas (Issues Abertas)

| # | Feature | Contexto | Potencial Impact |
|---|---------|----------|------------------|
| [#3744](https://github.com/HKUDS/nanobot/issues/3744) | MEMORY por session/thread | Multi-usuário IM | Alto |
| [#3689](https://github.com/HKUDS/nanobot/issues/3689) | Memória persistente em interrupção | Long-task agents | Alto |
| [#3742](https://github.com/HKUDS/nanobot/issues/3742) | `/model` slash command | Switch dinâmico provider/model | Médio |

### PRs de Features Abertos (7)

| PR | Feature | Status Review | Complexidade |
|----|---------|---------------|--------------|
| [#3460](https://github.com/HKUDS/nanobot/pull/3460) | LongTaskTool para multi-step agent tasks | Em revisão | Alta |
| [#3655](https://github.com/HKUDS/nanobot/pull/3655) | Display reasoning content during streaming | Em revisão | Média |
| [#3756](https://github.com/HKUDS/nanobot/pull/3756) | Model failover com fallback_models | Novo | Alta |
| [#3750](https://github.com/HKUDS/nanobot/pull/3750) | Atomic Chat como provider OpenAI-compatible | Proposta | Baixa |
| [#3761](https://github.com/HKUDS/nanobot/pull/3761) | WhatsApp typing indicator + emoji reaction | Novo | Baixa |
| [#3745](https://github.com/HKUDS/nanobot/pull/3745) | Stream tool progress SSE events | Em revisão | Média |
| [#3752](https://github.com/HKUDS/nanobot/pull/3752) | Clear media_paths após transcrição voice | Novo | Baixa |

### Sinais de Roadmap Detectados

1. **Agentic Long-Tasks:** PR #3460 adiciona `LongTaskTool` como meta-ReAct loop — indica direção para tarefas agentes de longa duração
2. **Observabilidade:** PR #3655 e #3745 adicionam streaming de reasoning e tool progress — foco em debuggabilidade
3. **Resiliência:** PR #3756 com fallback models addressa requisitos de produção
4. **UX Multi-Channel:** PR #3761 espelha Telegram UX no WhatsApp

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Dor | Frequência | Severidade | Issue |
|------|------------|------------|-------|
| Contexto perdido ao interromper agent | Múltiplos | Alta | #3689 |
| Colisão de memória entre usuários | Múltiplos | Alta | #3744 |
| Instabilidade de modelos (China mainland) | 1+ | Alta | #3742 |
| DeepSeek V4 Flash não funciona com post3 | 1 (power user) | Crítica | #3753, #3754, #3760 |

### Cenários de Uso Observados

1. **Multi-usuário IM:** Empresa precisa que múltiplos usuários WeChat/Feishu conversem com o mesmo agent sem interferência
2. **Tarefas de Longa Duração:** Testing automation onde agent pode entrar em loops, necessidade de interrupt/resume
3. **Ambientes com Instabilidade de Rede:** China mainland com modelos OpenAI/gpt-5.5 apresentando timeouts
4. **Leitura de Arquivos:** Agente lendo tabelas periódicas (element_single_lines.json) vs. grandes arquivos (四书直解.txt) — comportamento inconsistente

### Satisfação/Insatisfação

**Positivo:**
- Funcionalidade de topic isolation para Feishu (#3692 → #3747) bem recebida
- Correção de filename WeCom (#3737 → #3751) resolve dor real
- VolcEngine provider fix (#3738) addressa uso em produção

**Negativo:**
- DeepSeek V4 Flash broken em versão `post3` — regressions
- Memória multi-usuário é gap known mas não priorizado
- Interrupção de sessões ainda perde contexto

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta há >5 dias

| # | Título | Criado | Atualizado | Dias Inativo |
|---|--------|--------|------------|--------------|
| [#3689](https://github.com/HKUDS/nanobot/issues/3689) | 中断会话丢失上一轮会话的聊天记录 | 2026-05-08 | 2026-05-12 | 4 dias |
| [#3692](https://github.com/HKUDS/nanobot/issues/3692) | feishu group topic 隔离支持开关 | 2026-05-08 | 2026-05-12 | 4 dias |
| [#3460](https://github.com/HKUDS/nanobot/pull/3460) | LongTaskTool (PR) | 2026-04-26 | 2026-05-12 | 16 dias |
| [#3655](https://github.com/HKUDS/nanobot/pull/3655) | Display reasoning during streaming (PR) | 2026-05-06 | 2026-05-12 | 6 dias |

### Issues com Potencial de Impacto Alto

| Prioridade | Issue | Motivo |
|------------|-------|--------|
| 🔴 Crítica | [#3760](https://github.com/HKUDS/nanobot/issues/3760) | 3 issues em 24h sobre DeepSeek V4 — pode indicar quebra generalizada |
| 🟠 Alta | [#3744](https://github.com/HKUDS/nanobot/issues/3744) | Feature multi-usuário bloqueia adoção enterprise |
| 🟠 Alta | [#3689](https://github.com/HKUDS/nanobot/issues/3689) | Perda de contexto em interrupção — UX crítico |
| 🟡 Média | [#3742](https://github.com/HKUDS/nanobot/issues/3742) | Request de /model slash command — alinhado com PR #3756 |

### PRs Enteding Queue

1. **#3460 LongTaskTool** — 16 dias em revisão, feature complexa que requer feedback da equipe
2. **#3655 Reasoning Streaming** — 6 dias, UX enhancement que pode conflitar com trabalho em progresso
3. **#3756 Model Failover** — Alinha com #3742, sinergia potencial com #3714 (model presets já merged)

---

## Indicadores de Saúde do Projeto

| Métrica | Valor | Status |
|---------|-------|--------|
| Issues fechadas (24h) | 3/8 (37.5%) | 🟢 Saudável |
| PRs fechados (24h) | 11/18 (61%) | 🟢 Muito ativo |
| PRs abertos | 7 | 🟡 Precisa review |
| Releases (24h) | 0 | 🟡 Em consolidação |
| Bugs críticos abertos | 1 (reasoning_content) | 🔴 Requer atenção |
| Issues sem resposta >5 dias | 4 | 🟡 Monitorar |

---

*Relatório gerado em 2026-05-13 com base em dados do GitHub HKUDS/nanobot*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-05-13

## 1. Panorama do dia

O Hermes Agent apresenta alta atividade comunitária com **50 issues e 50 PRs atualizados nas últimas 24h**, indicando um dia de intenso trabalho. Dois bugs P1 estão causando interrupções críticas: o requisito mínimo de 64K tokens está rejeitando modelos legítimos (como MiniMax-M2.7 com 32K e Kimi K2 com 256K) e o Telegram está completamente inoperante. A taxa de resolução está moderada, com 4 issues e 7 PRs fechados/merged, demonstrando que a equipe está respondendo ativamente aos problemas mais urgentes.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto não publicou novas versões hoje. A versão mais recente visível nos dados é **v0.13.0 (2026.5.7)**, mencionada na issue #24544 sobre crashes no Homebrew.

---

## 3. Progresso do projeto

### PRs fechados/merged (7 total)

| # | PR | Componente | Impacto |
|---|-----|------------|---------|
| [#24526](https://github.com/NousResearch/hermes-agent/pull/24526) | fix(acp): plumb --skills through to ACP session preload | ACP, CLI, Skills | Permite que `hermes -s <skill> acp` pré-carregue skills corretamente na sessão ACP |
| [#24535](https://github.com/NousResearch/hermes-agent/pull/24535) | fix(api_server): stream reasoning deltas via reasoning_callback | API Server | Resolveu bug onde `reasoning.available` emitia texto final em vez de reasoning_content delta |
| [#24454](https://github.com/NousResearch/hermes-agent/pull/24454) | --daemon mode ignores --port flag | Plugins | Corrigido hardcoding de porta em modo daemon |

### PRs abertos de destaque

| # | PR | Componente | Relevância |
|---|-----|------------|------------|
| [#24543](https://github.com/NousResearch/hermes-agent/pull/24543) | fix(install): skip Microsoft Store python.exe stub | CLI, Install | Resolve falha de instalação em Windows 11 com alias do Microsoft Store |
| [#24542](https://github.com/NousResearch/hermes-agent/pull/24542) | fix(transports): propagate provider routing prefs to custom providers | Transports | Permite que provedores customizados (ex: Polza.ai) usem roteamento OpenRouter-style |
| [#24539](https://github.com/NousResearch/hermes-agent/pull/24539) | fix(fallback): eagerly fail over on overloaded providers | Agent, Fallback | Trata estado 503/529 como failover imediato, ignorando rotação de credenciais inútil |
| [#24536](https://github.com/NousResearch/hermes-agent/pull/24536) | fix(transports): parse Kimi K2 inline tool-call tokens | Agent, Kimi | Permite que Kimi K2 funcione corretamente via OpenRouter com toolsets esparsas |
| [#24257](https://github.com/NousResearch/hermes-agent/pull/24257) | feat(gateway): add DISCORD_REQUIRE_MENTION option | Gateway, Discord | Feature aguardando merge para evitar interrupções entre múltiplos agentes |

---

## 4. Temas quentes da comunidade

### Issues com maior engajamento (comentários + reações)

| # | Título | Tipo | Comentários | 👍 | Análise |
|---|--------|------|-------------|----|---------|
| [#5941](https://github.com/NousResearch/hermes-agent/issues/5941) | Add Searxng as default web search provider | Feature | 3 | **28** | **Maior interesse comunitário.** Demanda por alternativas open-source ao Firecrawl/Tavily. Usuário propõe modificar `web_tools.py` e adicionar reranker. |
| [#24140](https://github.com/NousResearch/hermes-agent/issues/24140) | All models rejected with "context window below minimum 64,000 tokens" | Bug (P1) | **10** | 0 | **Crítico.** Telegram completamente down. Afeta MiniMax-M2.7 e possivelmente outros modelos. |
| [#15895](https://github.com/NousResearch/hermes-agent/issues/15895) | google-gemini-cli causing 429 but gquota ok | Bug (P3) | 9 | 1 | Usuários enfrentando rate limiting mesmo com quotas disponíveis no gquota. |
| [#14853](https://github.com/NousResearch/hermes-agent/issues/14853) | Multi-Agent Discord channel collaboration | Feature (P3) | 6 | 1 | Setup multi-agente com 3 instâncias Hermes em canais Discord compartilhados sem visibilidade entre si. |
| [#22714](https://github.com/NousResearch/hermes-agent/issues/22714) | Matrix gateway: no in-band channel for per-message LLM orchestration | Bug (P1) | 5 | 0 | Deployments Matrix com Synapse 1.151.0 com limitações de orquestração em downstream dispatcher. |
| [#5352](https://github.com/NousResearch/hermes-agent/issues/5352) | Open WebUI - No Tool Progress? | Bug | 3 | 3 | Discussão sobre quando tool calls devem ser publicados durante execução. |

### Análise de tendências comunitárias

1. **Provedores alternativos em alta:** Múltiplas issues sobre Kimi, Gemini, Groq, OpenRouter — a comunidade demanda suporte mais robusto para provedores não-oficiais.
2. **Context window como barreira:** A política de mínimo 64K está causando frustração massiva — modelos populares estão sendo rejeitados.
3. **Multi-agente e colaboração:** Interesses crescentes em arquiteturas multi-instância (Discord, Matrix) com necessidade de coordenação.

---

## 5. Bugs e estabilidade

### Bugs P1 (Críticos) — 3 ativos

| # | Título | Plataforma | Impacto | Link |
|---|--------|------------|---------|------|
| [#24140](https://github.com/NousResearch/hermes-agent/issues/24140) | All models rejected with context window error | Telegram | **Telegram completamente down** — todos os usuários afetados | [Issue](https://github.com/NousResearch/hermes-agent/issues/24140) |
| [#22714](https://github.com/NousResearch/hermes-agent/issues/22714) | Matrix gateway: no in-band channel for orchestration | Matrix | Limitação arquitetural para dispatchers downstream | [Issue](https://github.com/NousResearch/hermes-agent/issues/22714) |
| [#24268](https://github.com/NousResearch/hermes-agent/issues/24268) | Wrong context length for kimi-k2.6 family (256K vs 32K reported) | Kimi | Bloqueia inicialização de agente com Kimi K2 via OpenRouter | [Issue](https://github.com/NousResearch/hermes-agent/issues/24268) |

### Bugs P2 (Altos) — 11 ativos

| # | Título | Componente | Link |
|---|--------|------------|------|
| [#24518](https://github.com/NousResearch/hermes-agent/issues/24518) | reasoning.available event carries final response text | API Server | [Issue](https://github.com/NousResearch/hermes-agent/issues/24518) *(já corrigido em #24535)* |
| [#10175](https://github.com/NousResearch/hermes-agent/issues/10175) | GPT-5 Responses sessions abort on invalid_encrypted_content | OpenAI | [Issue](https://github.com/NousResearch/hermes-agent/issues/10175) |
| [#21633](https://github.com/NousResearch/hermes-agent/issues/21633) | QQ Bot WebSocket silently dies — no reconnection | QQ Bot | [Issue](https://github.com/NousResearch/hermes-agent/issues/21633) |
| [#20739](https://github.com/NousResearch/hermes-agent/issues/20739) | Dashboard Chat tab unusable in Docker (4 compounding bugs) | TUI, Docker | [Issue](https://github.com/NousResearch/hermes-agent/issues/20739) |
| [#24298](https://github.com/NousResearch/hermes-agent/issues/24298) | Gateway repeat counter fires for distinct commands sharing prefix | Gateway | [Issue](https://github.com/NousResearch/hermes-agent/issues/24298) |
| [#24534](https://github.com/NousResearch/hermes-agent/issues/24534) | Kimi K2 native tool-call tokens leak as content | Agent, Kimi | [Issue](https://github.com/NousResearch/hermes-agent/issues/24534) *(PR #24536 em andamento)* |
| [#24523](https://github.com/NousResearch/hermes-agent/issues/24523) | custom:llmgateway tool calls fail when streamed | Agent | [Issue](https://github.com/NousResearch/hermes-agent/issues/24523) |
| [#24537](https://github.com/NousResearch/hermes-agent/issues/24537) | Hermes UI File Operations inconsistent and unpredictable | TUI, File-sync | [Issue](https://github.com/NousResearch/hermes-agent/issues/24537) |

### Bugs P3 (Médios) — 8 ativos

Incluem: Google Gemini CLI rate limiting (#15895), LM Studio conexão (#24510), Intel macOS CUA install (#24530), Homebrew ui-tui missing (#24544), Kanban workspace select regression (#24520), e mais.

---

## 6. Pedidos de features e sinais de roadmap

### Features com maior potencial de impacto

| # | Título | Componente | 👍 | Link |
|---|--------|------------|----|------|
| [#5941](https://github.com/NousResearch/hermes-agent/issues/5941) | Add Searxng as default web search provider | Web Tools | **28** | [Issue](https://github.com/NousResearch/hermes-agent/issues/5941) |
| [#14853](https://github.com/NousResearch/hermes-agent/issues/14853) | Multi-Agent Discord channel collaboration + history injection | Gateway, Discord | 1 | [Issue](https://github.com/NousResearch/hermes-agent/issues/14853) |
| [#13547](https://github.com/NousResearch/hermes-agent/issues/13547) | Add profile support to Hermes Dashboard | Dashboard | 2 | [Issue](https://github.com/NousResearch/hermes-agent/issues/13547) |
| [#24512](https://github.com/NousResearch/hermes-agent/issues/24512) | Add Groq provider (fast + free tier) | Provider | 0 | [Issue](https://github.com/NousResearch/hermes-agent/issues/24512) |
| [#24493](https://github.com/NousResearch/hermes-agent/issues/24493) | Per-model overrides for context_length and provider_routing | Config, Agent | 0 | [Issue](https://github.com/NousResearch/hermes-agent/issues/24493) |

### Features em desenvolvimento (PRs abertos)

| # | Título | Escopo | Link |
|---|--------|--------|------|
| [#24533](https://github.com/NousResearch/hermes-agent/pull/24533) | Add scheduled Kanban status for delayed follow-ups | Kanban | [PR](https://github.com/NousResearch/hermes-agent/pull/24533) |
| [#20661](https://github.com/NousResearch/hermes-agent/pull/20661) | Add hermes-tweet optional skill | Skills, Social | [PR](https://github.com/NousResearch/hermes-agent/pull/20661) |
| [#22075](https://github.com/NousResearch/hermes-agent/pull/22075) | feat(memory/lancedb): LanceDB hybrid memory plugin | Memory, Plugin | [PR](https://github.com/NousResearch/hermes-agent/pull/22075) |
| [#24257](https://github.com/NousResearch/hermes-agent/pull/24257) | Add DISCORD_REQUIRE_MENTION option (default: false) | Gateway, Discord | [PR](https://github.com/NousResearch/hermes-agent/pull/24257) |

### Sinais de roadmap observados

1. **Suporte a mais provedores:** Groq, Searxng, Kimi K2 nativo — o roadmap está expandindo ecossistema de provedores.
2. **Memory plugins:** LanceDB hybrid (vector + BM25 + Cross-Encoder) indica investimento em memória de longo prazo.
3. **Kanban mais robusto:** Status "scheduled", validação de runnable-state, proteção de skills pinned.
4. **Multi-agente:** Suporte a colaboração entre múltiplas instâncias Hermes em plataformas compartilhadas.

---

## 7. Resumo de feedback dos usuários

### Dores críticas reportadas

1. **Bloqueio por context window mínimo de 64K:**
   - *MiniMax-M2.7 (32K)* completamente rejeitado — [Issue #24140](https://github.com/NousResearch/hermes-agent/issues/24140)
   - *Kimi K2 (256K real)* reportado incorretamente como 32K — [Issue #24268](https://github.com/NousResearch/hermes-agent/issues/24268)
   - *Qwopus3.5_27B (46K)* também bloqueado — [Issue #10449](https://github.com/NousResearch/hermes-agent/issues/10449)
   - **Sentimento:** Frustração extrema — usuários pagantes sem acesso ao serviço

2. **Docker/TUI quebrado:**
   - Dashboard Chat tab inoperante devido a 4 bugs encadeados — [Issue #20739](https://github.com/NousResearch/hermes-agent/issues/20739)
   - Homebrew install crashando por ui-tui ausente — [Issue #24544](https://github.com/NousResearch/hermes-agent/issues/24544)
   - **Sentimento:** Experiência de onboarding degradada

3. **Provedores instáveis:**
   - Gemini CLI dando 429 mesmo com quotas disponíveis — [Issue #15895](https://github.com/NousResearch/hermes-agent/issues/15895)
   - QQ Bot WebSocket morrendo silenciosamente — [Issue #21633](https://github.com/NousResearch/hermes-agent/issues/21633)
   - GPT-5 Responses aborando em vez de degradação graciosa — [Issue #10175](https://github.com/NousResearch/hermes-agent/issues/10175)

### Cenários de uso emergidos

| Cenário | Descrição | Frequência |
|---------|-----------|------------|
| **Multi-agente em produção** | 3+ instâncias Hermes rodando em paralelo com perfis/personas distintas | Crescente |
| **Matrix como deployment** | Operações teams usando Matrix rooms como interface | Estável |
| **Ferramentas externas** | LM Studio local, OpenWebUI, Claude Code OAuth | Relatado |

---

## 8. Backlog que merece atenção

### Issues antigas sem resposta recente (>7 dias sem atualização)

| # | Título | Criado | Prioridade | Link |
|---|--------|--------|------------|------|
| [#5352](https://github.com/NousResearch/hermes-agent/issues/5352) | Open WebUI - No Tool Progress? | 2026-04-05 | Bug | [Issue](https://github.com/NousResearch/hermes-agent/issues/5352) |
| [#5941](

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-05-13

---

## 1. Panorama do Dia

O projeto PicoClaw demonstra **alta atividade** na data de hoje, com 17 issues e 19 pull requests atualizados nas últimas 24 horas. Uma nova build nightly (v0.2.8-nightly.20260512) foi publicada, indicando desenvolvimento contínuo. A comunidade está ativamente reportando bugs e propondo melhorias, com destaque para questões de segurança e estabilidade. O ritmo de merges é saudável, com 6 PRs fechados/merged, sugerindo um pipeline de revisão eficiente. A release nightly reflete o estado de desenvolvimento ativo da versão 0.2.8.

---

## 2. Lançamentos

### Release Disponível
- **Nightly Build**: `v0.2.8-nightly.20260512.777269b4`
- **Link**: https://github.com/sipeed/picoclaw/releases/tag/v0.2.8-nightly.20260512.777269b4

**Notas**:
- Build automatizada com base no commit `777269b4`
- Classificada como **instável** — uso em produção não recomendado
- Comparação com versão estável: https://github.com/sipeed/picoclaw/compare/v0.2.8...main

**Breaking Changes**: Nenhuma identificada nesta release nightly. Transitório para a versão 0.2.8.

**Notas de Migração**: Usuários da versão 0.2.6/0.2.7 migrando para 0.2.8 devem estar atentos a:
- Mudanças em configuração de canais (Issue [#2742](https://github.com/sipeed/picoclaw/issues/2742) reporta problemas com gateway iniciando sem canais)
- Atualizações no formato de configuração (Issue [#2771](https://github.com/sipeed/picoclaw/issues/2771))

---

## 3. Progresso do Projeto

### PRs Fechados/Merged Hoje

| PR | Título | Impacto |
|----|--------|--------|
| [#2852](https://github.com/sipeed/picoclaw/pull/2852) | docs: add evolution config controls | Documentação de auto-evolução do Agent |
| [#2854](https://github.com/sipeed/picoclaw/pull/2854) | docs: add LicheeRV-Claw AliExpress news | Atualização de hardware suportado |
| [#2505](https://github.com/sipeed/picoclaw/pull/2505) | CLI: Improve the embedding process of workspace files | Melhora no processo de embed de arquivos do workspace |
| [#2490](https://github.com/sipeed/picoclaw/pull/2490) | CLI: Fix onboard advisory about configuration files | Correção de avisos incorretos no onboarding |
| [#2758](https://github.com/sipeed/picoclaw/pull/2758) | fix(telegram): media group album handling | Melhoria no tratamento de álbuns de mídia no Telegram |
| [#2645](https://github.com/sipeed/picoclaw/pull/2645) | feat(bedrock): implement StreamingProvider | Suporte a streaming via AWS Bedrock |

**Destaque de Avanço**:
- **AWS Bedrock**: Implementação completa do `StreamingProvider` para streaming de tokens em tempo real via AWS ConverseStream API
- **Telegram**: Correção importante no tratamento de álbuns de mídia (preserva captions e ordena mídia corretamente)
- **Documentação**: Atualizações sobre controles de evolução do Agent e novo hardware

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (Comentários/Reações)

| Issue | Tipo | Comentários | Reações | Tema |
|-------|------|-------------|---------|------|
| [#2513](https://github.com/sipeed/picoclaw/issues/2513) | Bug | 9 | 0 | Gateway start abnormal |
| [#1950](https://github.com/sipeed/picoclaw/issues/1950) | Enhancement | 8 | 0 | Streaming Output for Web Chat |
| [#1757](https://github.com/sipeed/picoclaw/issues/1757) | Bug | 8 | 0 | Channel error em tasks cron |
| [#2404](https://github.com/sipeed/picoclaw/issues/2404) | Enhancement | 6 | 1 | Streaming HTTP requests |
| [#2444](https://github.com/sipeed/picoclaw/issues/2444) | Enhancement | 5 | 2 | Secrets MCP em .security.yml |

**Análise das Demandas**:

1. **Streaming de Respostas**: Há demanda clara para streaming output tanto em Web Chat ([#1950](https://github.com/sipeed/picoclaw/issues/1950)) quanto em requisições HTTP ([#2404](https://github.com/sipeed/picoclaw/issues/2404)), alinhado com a tendência de interfaces responsivas.

2. **Integração de Providers**: Multiple issues solicitam novos providers (Gemini Web Search via [#2763](https://github.com/sipeed/picoclaw/pull/2763), Xiaomi Mimo via [#2755](https://github.com/sipeed/picoclaw/pull/2755), Intel OpenVINO via [#2703](https://github.com/sipeed/picoclaw/pull/2703)).

3. **Segurança**: A Issue [#2688](https://github.com/sipeed/picoclaw/issues/2688) sobre sandbox bypass é crítica e já possui PR de correção ([#2693](https://github.com/sipeed/picoclaw/pull/2693)).

---

## 5. Bugs e Estabilidade

### Bugs Reportados por Severidade

#### 🔴 Alta Prioridade (2 issues)

| Issue | Título | Status | Link |
|-------|--------|--------|------|
| [#2720](https://github.com/sipeed/picoclaw/issues/2720) | Singleton PID check não verifica identidade do processo — crash loop | OPEN | [Issue](https://github.com/sipeed/picoclaw/issues/2720) / [PR#2813](https://github.com/sipeed/picoclaw/pull/2813) |
| [#2688](https://github.com/sipeed/picoclaw/issues/2688) | Security: `find /` pode enumerar caminhos fora do sandbox | OPEN | [Issue](https://github.com/sipeed/picoclaw/issues/2688) / [PR#2693](https://github.com/sipeed/picoclaw/pull/2693) |

**Análise**:
- **Issue #2720**: Gateway entra em loop de crash quando o PID é reutilizado por outro processo (ex: systemd-resolved). PR corretivo [#2813](https://github.com/sipeed/picoclaw/pull/2813) em aberto.
- **Issue #2688**: Falha de segurança no sandbox — `find /` ignora restrições de workspace. PR [#2693](https://github.com/sipeed/picoclaw/pull/2693) implementa correção.

#### 🟡 Média Prioridade (1 issue)

| Issue | Título | Status | Link |
|-------|--------|--------|------|
| [#2513](https://github.com/sipeed/picoclaw/issues/2513) | Gateway start abnormal | CLOSED | [Issue](https://github.com/sipeed/picoclaw/issues/2513) |

#### 🟢 Baixa Prioridade / Resolvidas

| Issue | Título | Status | Link |
|-------|--------|--------|------|
| [#2753](https://github.com/sipeed/picoclaw/issues/2753) | Build from source não gera launcher | OPEN | [Issue](https://github.com/sipeed/picoclaw/issues/2753) |
| [#2742](https://github.com/sipeed/picoclaw/issues/2742) | Gateway inicia sem channels em v0.2.8 | OPEN | [Issue](https://github.com/sipeed/picoclaw/issues/2742) |
| [#2694](https://github.com/sipeed/picoclaw/issues/2694) | Certificado x509 inválido | CLOSED | [Issue](https://github.com/sipeed/picoclaw/issues/2694) |

**Métricas de Estabilidade**:
- **Bugs abertos**: 8 (incluindo 2 críticos)
- **Bugs fechados**: 6 nas últimas 24h
- **Taxa de resolução**: ~43% (saudável)

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features em Progresso

| PR | Título | Proposta |
|----|--------|----------|
| [#2857](https://github.com/sipeed/picoclaw/pull/2857) | show unified diff para edit_file | Feedback visual de edições de arquivo |
| [#2858](https://github.com/sipeed/picoclaw/pull/2858) | allow quoted heredoc markdown bodies | Flexibilidade no exec tool |
| [#2856](https://github.com/sipeed/picoclaw/pull/2856) | support media attachments e Telegram rich delivery | [Issue #2855](https://github.com/sipeed/picoclaw/issues/2855) |
| [#2763](https://github.com/sipeed/picoclaw/pull/2763) | add Gemini web search provider | Provider de busca com grounding |
| [#2755](https://github.com/sipeed/picoclaw/pull/2755) | streaming reasoning_content e video support | Multimodalidade |
| [#2703](https://github.com/sipeed/picoclaw/pull/2703) | Intel OpenVINO Model Server support | LLM inference local |
| [#2781](https://github.com/sipeed/picoclaw/pull/2781) | reduce skill catalog token usage | Otimização de tokens |
| [#2491](https://github.com/sipeed/picoclaw/pull/2491) | Add session management commands: /status, /compact, /new | Gerenciamento de sessão |

### Features Solicitadas (Issues)

| Issue | Título | Reações | Prioridade |
|-------|--------|---------|------------|
| [#1950](https://github.com/sipeed/picoclaw/issues/1950) | Streaming Output for Web Chat | 0 | Low |
| [#2404](https://github.com/sipeed/picoclaw/issues/2404) | Add streaming HTTP request config | 1 | Enhancement |
| [#2625](https://github.com/sipeed/picoclaw/issues/2625) | Provide compiled builds com WhatsApp | 1 | Low |
| [#2771](https://github.com/sipeed/picoclaw/issues/2771) | Enhance Config Reliability e Migration | 0 | UX |
| [#2774](https://github.com/sipeed/picoclaw/issues/2774) | Context and memory management (cortexkit) | 0 | Enhancement |

**Sinais de Roadmap**:
1. **Multimodalidade**: Suporte a video e audio understanding em alta prioridade
2. **Providers diversificados**: Gemini, Xiaomi Mimo, Intel OpenVINO, AWS Bedrock (streaming)
3. **UX/Sessões**: Comandos de gerenciamento de sessão (/status, /compact, /new)
4. **Performance**: Redução de token usage no skill catalog
5. **Rich Media**: Suporte a anexos de mídia no message tool

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais Identificadas

| Categoria | Descrição | Frequência | Issues |
|-----------|-----------|------------|--------|
| **Estabilidade do Gateway** | Problemas ao iniciar gateway com canais | Alta | [#2513](https://github.com/sipeed/picoclaw/issues/2513), [#2742](https://github.com/sipeed/picoclaw/issues/2742) |
| **Build/Compilação** | Dificuldade em builds customizados | Média | [#2625](https://github.com/sipeed/picoclaw/issues/2625), [#2753](https://github.com/sipeed/picoclaw/issues/2753) |
| **Segurança** | Sandbox bypass via find/ls | Crítica | [#2688](https://github.com/sipeed/picoclaw/issues/2688) |
| **Configuração** | Formato de config defasado, migração confusa | Média | [#2771](https://github.com/sipeed/picoclaw/issues/2771) |
| **Cron/Agentes** | Channel errors em tasks agendadas | Média | [#1757](https://github.com/sipeed/picoclaw/issues/1757) |

### Cenários de Uso Reportados

1. **Agentes pessoais em Raspberry Pi**: Usuários executam PicoClaw em hardware limitado (RPi Zero 2) com WhatsApp e Telegram
2. **Busca web integrada**: Demanda por provedores de busca (Gemini, DuckDuckGo) integrados ao Agent
3. **LLMs locais**: Interesse em Intel OpenVINO para inferência local em CPU/GPU/NPU Intel
4. **Multi-canal**: Integração com Telegram, WhatsApp, e canais customizados

### Satisfação/Insatisfação

| Aspecto | Sentimento | Observação |
|---------|------------|------------|
| Documentação de hardware | Positivo | Issue [#2646](https://github.com/sipeed/picoclaw/issues/2646) confirma funcionamento em i.MX93 EVK |
| Processamento de mídia Telegram | Positivo | PRs [#2758](https://github.com/sipeed/picoclaw/pull/2758) e [#2856](https://github.com/sipeed/picoclaw/pull/2856) atendem demandas |
| Configuração de secrets MCP | Positivo | PR [#2444](https://github.com/sipeed/picoclaw/issues/2444) resolvido |
| Build padrão sem WhatsApp | Negativo | Usuários de RPi pedem builds com WhatsApp incluso |
| Onboarding/advisories | Negativo | Guias desatualizados desde v0.2.5 (corrigido em [#2490](https://github.com/sipeed/picoclaw/pull/2490)) |

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta há >14 dias (Stale)

| Issue | Título | Criado | Atualizado | Comentários | Severidade |
|-------|--------|--------|------------|-------------|------------|
| [#2771](https://github.com/sipeed/picoclaw/issues/2771) | Enhance PicoClaw Config Reliability | 2026-05-05 | 2026-05-12 | 2 | UX |
| [#2774](https://github.com/sipeed/picoclaw/issues/2774) | Context and memory management | 2026-05-05 | 2026-05-12 | 1 | Enhancement |
| [#2753](https://github.com/sipeed/picoclaw/issues/2753) | Build from source --> launcher não existe | 2026-05-03 | 2026-05-12 | 2 | Bug |
| [#2742](https://github.com/sipeed/picoclaw/issues/2742) | Gateway inicia sem channels em v0.2.8 | 2026-05-01 | 2026-05-12 | 2 | Bug |
| [#2688](https://github.com/sipeed/picoclaw/issues/2688) | Security: find / sandbox bypass | 2026-04-27 | 2026-05-12 | 3 | **Crítica** |
| [#2698](https://github.com/sipeed/picoclaw/issues/2698) | Mission Control support | 2026-04-28 | 2026-05-12 | 2 | Enhancement |
| [#2703](https://github.com/sipeed/picoclaw/pull/2703) | Intel OpenVINO support | 2026-04-28 | 2026-05-12 | PR | Feature |
| [#2720](https://github.com/sipeed/picoclaw/issues/2720) | PID check crash loop | 2026-04-30 | 2026-05-12 | 3 | **Crítica** |

### PRs em Aberto há >14 dias

| PR | Título | Criado | Atualizado | Prioridade |
|----|--------|--------|------------|------------|
| [#2763](https://github.com/sipeed/picoclaw/pull/2763) | add Gemini web search provider | 2026-05-04 | 2026-05-12 | Alta |
| [#2755](https://github.com/sipeed/picoclaw/pull/2755) | streaming reasoning_content e video | 2026-05-03 | 2026-05-12 | Alta |
| [#2703](https://github.com/sipeed/picoclaw/pull/2703) | Intel OpenVINO support | 2026-04-28 | 2026-05-12 | Média |
| [#2693](https://github.com/sipeed/picoclaw/pull/2693) | block find / sandbox bypass | 2026-04-27 | 2026-05-12 | **Crítica** |
| [#2647](https://github.com/sipeed/picoclaw/pull/2647) | web_search YAML support + DuckDuckGo | 2026-04-24 | 2026-05-12 | Média |
| [#2491](https://github.com/sipeed/picoclaw/pull/2491) | session management commands | 2026-04-12 | 2026-05-12 | Média |

### Recomendações para Maintainers

1. **Priorizar segurança**: Issue [#2688](https://github.com/sipeed/pic

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-05-13

---

## 1. Panorama do Dia

O projeto IronClaw demonstra **alta atividade** com 29 issues e 50 PRs atualizados nas últimas 24h. A versão 0.28.1 (lançada em 2026-05-11) trouxe integrações para Slack e WeChat. O esforço principal concentra-se no **Reborn** (nova arquitetura), com múltiplos PRs de infraestrutura sendo mesclados e issues de integração multi-canal (Telegram, Gmail, Slack) gerando atenção significativa. A estabilidade mostra sinais de stress em autenticações OAuth e fluxos V2, com 4 bugs P1/P2 ativos relacionados a falhas de autenticação e UI.

---

## 2. Lançamentos

### ironclaw-v0.28.1 (2026-05-11) — release mais recente

| Mudança | Descrição | PR |
|---------|-----------|-----|
| `pairing_approve` tool | Nova ferramenta para binding Slack via chat | [#3396](https://github.com/nearai/ironclaw/pull/3396) |
| WeChat registry metadata | Adicionado metadata para artefatos WeChat | [#3386](https://github.com/nearai/ironclaw/pull/3386) |

**Notas de Migração:** Nenhuma breaking change identificada nesta release. Usuários do Telegram devem notar que o onboarding automático pode não funcionar corretamente ([#3533](https://github.com/nearai/ironclaw/issues/3533)).

---

## 3. Progresso do Projeto

### PRs Merged/Fechados (últimas 24h)

| PR | Título | Impacto |
|----|--------|---------|
| [#3538](https://github.com/nearai/ironclaw/pull/3538) | Reborn: add first-party builtin tool capabilities (echo, time, json) | **Alto** — Capabilidades nativas integradas ao Reborn |
| [#3354](https://github.com/nearai/ironclaw/pull/3354) | Reborn: add telegram v2 payload normalization | **Alto** — Normalização de payloads Telegram v2 |
| [#3353](https://github.com/nearai/ironclaw/pull/3353) | Reborn: add native product adapter runner | **Alto** — Runner nativo para ProductAdapter |
| [#3352](https://github.com/nearai/ironclaw/pull/3352) | Reborn: add product adapter host auth and egress primitives | **Médio** — Autenticação HMAC para webhooks |
| [#3506](https://github.com/nearai/ironclaw/pull/3506) | Enforce installed-skill tool ceiling at dispatch | **Médio** — Seguridademelhorada para skills instalados |
| [#3505](https://github.com/nearai/ironclaw/pull/3505) | Envelope installed skill prompt context | **Médio** — Sandboxing de conteúdo de skills |
| [#3487](https://github.com/nearai/ironclaw/pull/3487) | Project loop model milestones to durable events | **Médio** — Eventos duráveis para milestones do loop |
| [#3509](https://github.com/nearai/ironclaw/pull/3509) | Cover active skill metadata ordering | **Baixo** — Cobertura de testes |
| [#3513](https://github.com/nearai/ironclaw/pull/3513) | Fix/wasmtime rustsec 2026 0114 | **Alto** — Atualização de segurança |

**Destaque:** A stack "ProductAdapter" para Telegram v2 está quase completa (PR 2-5/7 mesclados), preparando o terreno para a nova versão do canal Telegram.

---

## 4. Temas Quentes da Comunidade

### Issues/PRs com mais comentários

| Issue/PR | Título | Comentários | Tema Principal |
|----------|--------|-------------|----------------|
| [#2229](https://github.com/nearai/ironclaw/issues/2229) | Google Sheets OAuth blocked: Error 400 | 11 | 🔴 Auth/OAuth quebrado |
| [#3069](https://github.com/nearai/ironclaw/issues/3069) | Ship Reborn as separate binary | 4 | 🏗️ Arquitetura Reborn |
| [#3092](https://github.com/nearai/ironclaw/issues/3092) | Add reference AgentLoop implementations | 2 | 🏗️ Loop framework |
| [#3537](https://github.com/nearai/ironclaw/issues/3537) | Model memory as userland capability package | 0 | 📋 Roadmap memória |
| [#3524](https://github.com/nearai/ironclaw/issues/3524) | Reborn first-class loop hooks roadmap | 0 | 📋 Hooks framework |

**Análise:** O problema de OAuth do Google Sheets (#2229) domina a discussão da comunidade com 11 comentários, indicando frustração significativa. A arquitetura Reborn continua atraindo interesse estrutural, mas issues de roadmap têm baixa engagement público.

---

## 5. Bugs e Estabilidade

### 🔴 P1 - Críticos

| Issue | Título | Status | Severidade |
|-------|--------|--------|------------|
| [#3533](https://github.com/nearai/ironclaw/issues/3533) | Telegram in v0.28.1 não faz setup automático da UI | OPEN | bug_bash_P1 |
| [#2752](https://github.com/nearai/ironclaw/issues/2752) | onboard throws db error no provider step | OPEN | bug_bash_P1 |
| [#3320](https://github.com/nearai/ironclaw/issues/3320) | IronClaw Telegram não continua se Gmail auth falhou | OPEN | bug_bash_P1 |
| [#3319](https://github.com/nearai/ironclaw/issues/3319) | Gmail Authentication fails (400) from Telegram | OPEN | bug_bash_P1 |
| [#3535](https://github.com/nearai/ironclaw/issues/3535) | UI Timestamps incorretos para conversas | OPEN | bug_bash_P1 |

### 🟡 P2 - Altos

| Issue | Título | Status |
|-------|--------|--------|
| [#2229](https://github.com/nearai/ironclaw/issues/2229) | Google Sheets OAuth blocked (Error 400) | CLOSED |
| [#2991](https://github.com/nearai/ironclaw/issues/2991) | V2 approval flow broken: prompts confusos, routing errado | OPEN |
| [#2903](https://github.com/nearai/ironclaw/issues/2903) | Telegram response muito longa falha silenciosamente | CLOSED |

### 🔧 Infraestrutura

| Issue | Título | Status |
|-------|--------|--------|
| [#3447](https://github.com/nearai/ironclaw/issues/3447) | Nightly E2E failed | OPEN — falha recorrente |

**Alerta:** 3 bugs P1 estão relacionados a autenticação OAuth (Gmail/Google Sheets), sugerindo problema sistêmico no fluxo OAuth quando iniciado via Telegram.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Propostas

| Issue | Título | Tags | Prioridade |
|-------|--------|------|------------|
| [#3537](https://github.com/nearai/ironclaw/issues/3537) | Model memory as userland capability package | reborn, enhancement | Roadmap |
| [#3524](https://github.com/nearai/ironclaw/issues/3524) | Reborn first-class loop hooks roadmap | reborn, enhancement | Roadmap |
| [#3534](https://github.com/nearai/ironclaw/issues/3534) | Create a tool that downloads logs for debugging | — | Usabilidade |
| [#3515](https://github.com/nearai/ironclaw/issues/3515) | docs: wechat channel | scope: docs | Documentação |

### PRs Abertos Indicativos de Roadmap

| PR | Título | Scope |
|----|--------|-------|
| [#3540](https://github.com/nearai/ironclaw/pull/3540) | Envelope installed skill prompt context | reborn |
| [#3536](https://github.com/nearai/ironclaw/pull/3536) | Add deterministic instruction bundle builder | reborn |
| [#3503](https://github.com/nearai/ironclaw/pull/3503) | Add loop production readiness gate | reborn |
| [#3355](https://github.com/nearai/ironclaw/pull/3355) | Add telegram v2 product adapter tracer bullet | reborn, channel |

**Tendência:** O roadmap está fortemente orientado para a arquitetura **Reborn**, com foco em:
1. Hooks first-class para loops
2. Memory como capability package
3. Production readiness
4. Telegram v2 adapter

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Categoria | Descrição | Frequência |
|-----------|-----------|------------|
| **OAuth/Auth** | Usuários enfrentam erros 400 ao tentar autenticar Google Sheets/Gmail, especialmente via Telegram | 🔴 Alta |
| **Telegram Setup** | Onboarding do Telegram não funciona automaticamente na UI após update | 🔴 Alta |
| **Timestamps** | Mensagens mostram timestamps incorretos na interface | 🟡 Média |
| **UX Mobile** | Layout mobile não responsivo (<768px) é "cramped" | 🟡 Média (PR #3529 em progresso) |

### Cenários de Uso Identificados

- **Integração corporativa:** Google Sheets, Gmail, Slack para fluxos de trabalho empresariais
- **Multi-canal:** Telegram como interface primária de acesso
- **Desenvolvimento local:** Usuários locais não encontram UI web durante onboarding ([#3500](https://github.com/nearai/ironclaw/issues/3500))
- **Debugging:** Necessidade de ferramenta para download de logs ([#3534](https://github.com/nearai/ironclaw/issues/3534))

### Satisfação Observada

- WeChat e Slack bindings funcionando após v0.28.1
- Reborn estável para usuários avanzados (issues principalmente de contributors)

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Estagnadas

| Issue | Título | Idade | Prioridade |
|-------|--------|-------|------------|
| [#3500](https://github.com/nearai/ironclaw/issues/3500) | Local web UI is undiscoverable through onboarding | 2 dias | Medium |
| [#3499](https://github.com/nearai/ironclaw/issues/3499) | Slack sends raw Markdown instead of mrkdwn | 2 dias | Medium |
| [#3392](https://github.com/nearai/ironclaw/pull/3392) | fix memory search api document path (PR) | 5 dias | Low |
| [#2902](https://github.com/nearai/ironclaw/issues/2902) | Telegram não funciona para NEAR Foundation instance | 20 dias | Unknown |
| [#3447](https://github.com/nearai/ironclaw/issues/3447) | Nightly E2E failed (recorrente) | 3 dias | High |

### Recomendações

1. **OAuth Issues (P1):** Triangularizar causa raiz dos erros 400 em Gmail/Google Sheets — impacto direto na adoção corporativa
2. **Nightly E2E:** Regressão crítica bloqueando integração contínua — investigar urgentemente
3. **Telegram v2:** Completing the ProductAdapter stack (PR 1/7 and 6-7/7 restantes)
4. **Documentation:** Adicionar docs do WeChat channel ([#3515](https://github.com/nearai/ironclaw/issues/3515))

---

**Resumo da Saúde do Projeto:** 🟢 **Bom, com pontos de atenção**

- Atividade alta e saudável (50 PRs, 29 issues)
- Reborn architecture progredindo bem
- **Atenção necessária:** OAuth flows quebrados (3 P1s), E2E falhando, UX mobile

---

*Relatório gerado automaticamente com base em dados GitHub de 2026-05-13*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório de Projeto — CoPaw (QwenPaw)
**Data de referência:** 2026-05-13 | **Período:** últimas 24h

---

## 1. Panorama do Dia

O projeto CoPaw apresenta **alta atividade** nas últimas 24h, com 31 issues e 39 PRs atualizados — um dos dias mais intensos da semana. A release `v1.1.7-beta.1` marca o ritmo acelerado de iteração, focada em correção de providers e estabilidade geral. A comunidade demonstra forte engajamento em temas de autenticação de providers (DashScope, Volcano), gerenciamento de memória/sessão, e novas funcionalidades de desktop e cron. O volume de PRs abertos (13) e fechados (26) sugere uma equipe de manutenção ativa, embora alguns bugs críticos (provider config, MCP 401 blocking) ainda demandem atenção imediata.

---

## 2. Lançamentos

### ✅ v1.1.7-beta.1 Released

| Item | Detalhes |
|------|----------|
| **Versão** | `v1.1.7-beta.1` |
| **Data** | 2026-05-12 |
| **tipo** | Beta —预备正式 release |

**Mudanças incluídas:**

| PR | Autor | Descrição |
|----|-------|-----------|
| [#4169](https://github.com/agentscope-ai/QwenPaw/pull/4169) | @Nioolek | Correção de models no VOLCENGINE Provider |
| [#4196](https://github.com/agentscope-ai/QwenPaw/pull/4196) | @xieyxclack | Bump de versão para 1.1.7b1 |

**Breaking Changes:** Nenhuma detectada nesta release.

**Notas de migração:** Não aplicável para beta.

> **Avaliação:** Release de manutenção com foco em provider stability. Usuários do VOLCENGINE devem atualizar para corrigir falhas de API key.

---

## 3. Progresso do Projeto

### PRs Fechados/Merged (últimas 24h)

| PR | Título | Impacto |
|----|--------|---------|
| [#4248](https://github.com/agentscope-ai/QwenPaw/pull/4248) | Add Qwen-Image, Wan 2.7 plugins | ✨ **Alto** — Novos plugins de geração/edição de imagem via DashScope |
| [#4250](https://github.com/agentscope-ai/QwenPaw/pull/4250) | Refactor agent_stats & session file handling | 🔧 Médio — Limpeza de código técnico |
| [#2843](https://github.com/agentscope-ai/QwenPaw/pull/2843) | Fix browser idle watchdog self-cancel | 🐛 **Alto** — Corrige processo de browser que não saía após timeout |
| [#4197](https://github.com/agentscope-ai/QwenPaw/pull/4197) | Add async execution for delegate_external_agent | ✨ Médio — Suporte a workflows longos |
| [#3164](https://github.com/agentscope-ai/QwenPaw/pull/3164) | Refine browser start strategy & private mode | 🔧 Médio — Melhora inicialização do browser |
| [#3589](https://github.com/agentscope-ai/QwenPaw/pull/3589) | Adopt official ACP SDK & upgrade workflow | ✨ **Alto** — Upgrade da integração ACP com SDK oficial |
| [#3741](https://github.com/agentscope-ai/QwenPaw/pull/3741) | Polish ACP docs | 📖 Baixo — Documentação |

**Destaque principal:**
> **ACP SDK adoption** ([#3589](https://github.com/agentscope-ai/QwenPaw/pull/3589)) representa evolução significativa na arquitetura de agentes externos, padronizando a comunicação via SDK oficial.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (por comentários)

| # | Título | Comentários | Status | Categoria |
|---|--------|:-----------:|:------:|-----------|
| [#2429](https://github.com/agentscope-ai/QwenPaw/issues/2429) | Cron job com agent type retorna "I noticed that you have interrupted me" | **11** | Closed | ❓ Pergunta |
| [#4159](https://github.com/agentscope-ai/QwenPaw/issues/4159) | DashScope provider config correto mas api_key vazio (401) | **6** | Open | 🐛 **Bug Crítico** |
| [#3499](https://github.com/agentscope-ai/QwenPaw/issues/3499) | Acesso à página lento (API inconsistente) | **6** | Closed | 🐛 Bug |
| [#4220](https://github.com/agentscope-ai/QwenPaw/issues/4220) | auto_memory_interval não sincroniza índice vetorial | **4** | Open | 🐛 Bug |
| [#3969](https://github.com/agentscope-ai/QwenPaw/issues/3969) | FunctionCallOutput validation error (call_id=None) | **4** | Closed | 🐛 Bug |
| [#4185](https://github.com/agentscope-ai/QwenPaw/issues/4185) | Chat existente mas não abre com malformed tool_use | **4** | Closed | 🐛 Bug |

### Análise de Demandas

**🔴 Problemas de Provedores (Prioridade Alta)**
- DashScope API key não é lido em runtime → 401 universal
- Volcano Engine: parâmetro `thinking` não funciona para desligar deep-thinking
- **Impacto:** Bloqueia uso produtivo de múltiplos providers

**🔵 Gerenciamento de Memória/Sessão**
- Auto-memory summary não atualiza índice de busca → `memory_search` retorna vazio
- Sessões com tool_use malformado travam UI
- **Impacto:** Funcionalidade core de memória comprometida

**🟢 Funcionalidades Desktop e Cross-Platform**
- Links `file://` não abrem no macOS desktop
- Desktop client não abre links externos no navegador
- Mobile sidebar não colapsável
- **Impacto:** Experiência desktop/mobile incompleta

---

## 5. Bugs e Estabilidade

### 🐛 Bugs Abertos (Prioridade)

| Severidade | Issue | Descrição | Impacto |
|:-----------:|-------|-----------|---------|
| **🔴 Crítica** | [#4159](https://github.com/agentscope-ai/QwenPaw/issues/4159) | DashScope api_key vazio → 401 em todas as chamadas | Bloqueia provider inteiro |
| **🔴 Crítica** | [#4227](https://github.com/agentscope-ai/QwenPaw/issues/4227) | MCP 401 blocking — stream_http aguarda timeout | Bloqueia MCP server |
| **🟠 Alta** | [#4220](https://github.com/agentscope-ai/QwenPaw/issues/4220) | auto_memory_interval não sincroniza índice vetorial | memory_search quebrado |
| **🟠 Alta** | [#4251](https://github.com/agentscope-ai/QwenPaw/issues/4251) | Ack mirror loop em Matrix Team Room | Loop infinito em multi-agent |
| **🟠 Alta** | [#4244](https://github.com/agentscope-ai/QwenPaw/issues/4244) | shell_evasion_checks.newlines bloqueia multiline silenciosamente | Comandos legítimos falham |
| **🟡 Média** | [#3816](https://github.com/agentscope-ai/QwenPaw/issues/3816) | Links file:// não abrem no macOS desktop | UI desktop incompleta |
| **🟡 Média** | [#4239](https://github.com/agentscope-ai/QwenPaw/issues/4239) | Desktop client não abre links externos | Navegação quebrada |
| **🟡 Média** | [#4243](https://github.com/agentscope-ai/QwenPaw/issues/4243) | Browser não baixa arquivos | Funcionalidade web limitada |

### Correções Recentes de Bugs

| PR | Bug Corrigido | Status |
|----|---------------|:------:|
| [#2843](https://github.com/agentscope-ai/QwenPaw/pull/2843) | Browser idle watchdog não se cancelava | ✅ Fixado |
| [#4250](https://github.com/agentscope-ai/QwenPaw/pull/4250) | Session file handling refactored | ✅ Refatorado |
| [#4185](https://github.com/agentscope-ai/QwenPaw/issues/4185) | Chat corrompido por malformed tool_use | ✅ Closed |

> **Métricas de Estabilidade:** 15 bugs fechados nas últimas 24h vs. 7 abertos — **tendência positiva** de resolução.

---

## 6. Pedidos de Features e Sinais de Roadmap

### ✨ Novas Features Propostas

| # | Título | Status | Relevância Estratégica |
|---|--------|:------:|------------------------|
| [#4249](https://github.com/agentscope-ai/QwenPaw/issues/4249) | Add session lifecycle hooks (session.create, session.reset) | Open | 🔵 Alta — Extensibilidade |
| [#4211](https://github.com/agentscope-ai/QwenPaw/issues/4211) | Align multi_agent_collaboration com built-in inter-agent tools | Open | 🔵 Alta — UX multi-agent |
| [#4237](https://github.com/agentscope-ai/QwenPaw/issues/4237) | In-chat observability para shell commands (kill/extend timeout) | Open | 🔵 Alta — Debugging |
| [#4247](https://github.com/agentscope-ai/QwenPaw/issues/4247) | Streaming para Telegram e outros canais | Open | 🟢 Média — UX canais |
| [#4213](https://github.com/agentscope-ai/QwenPaw/issues/4213) | Paginação para conversas com milhões de tokens | Open | 🟢 Média — Performance |
| [#4228](https://github.com/agentscope-ai/QwenPaw/issues/4228) | Envio de arquivos grandes via Feishu | Open | 🟢 Média — Canais |

### PRs de Features em Desenvolvimento

| PR | Feature | Estágio | Destaque |
|----|---------|:-------:|----------|
| [#4256](https://github.com/agentscope-ai/QwenPaw/pull/4256) | OAuth 2.1 PKCE para MCP servers remotos | Open | Autenticação moderna para MCP |
| [#4210](https://github.com/agentscope-ai/QwenPaw/pull/4210) | Inbox + cron job otimizado | Open | Scheduler reaproveitado |
| [#4254](https://github.com/agentscope-ai/QwenPaw/pull/4254) | Browser activity tracking, crash monitoring, lifecycle | Open | Robustez browser automation |
| [#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) | Tauri 2.x desktop app support | Under Review | Desktop app nativo |
| [#4041](https://github.com/agentscope-ai/QwenPaw/pull/4041) | System tray startup item (Windows) | Under Review | Background agents |
| [#4198](https://github.com/agentscope-ai/QwenPaw/pull/4198) | Strengthen plan reaffirm from user message | Open | Security gate bypass fix |

### Sinais de Roadmap Inferidos

| Área | Sinal | Confiança |
|------|-------|:---------:|
| **Desktop** | Tauri 2.x + system tray = foco em app nativo | Alta |
| **MCP** | OAuth PKCE + 401 fix = suporte enterprise | Alta |
| **ACP** | SDK adoption em curso = multi-agent nativo | Alta |
| **Lifecycle** | Session hooks + plan reaffirm = operadores autônomos | Média |

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais Identificadas

| Dor | Descrição | Frequência |
|-----|-----------|:----------:|
| **🔴 Provider config quebrado** | Usuários não conseguem usar DashScope, Volcano, etc. — api_key não carrega | 🔴 Alta |
| **🔴 MCP 401 blocking** | Servidores MCP autenticados ficam completamente bloqueados | 🔴 Alta |
| **🟠 Memory search inútil** | Auto-memory写入文件 mas índice não atualiza → busca sempre vazia | 🟠 Média |
| **🟠 Desktop imaturo** | Links não abrem, sidebar quebrada, download não funciona | 🟠 Média |
| **🟡 UI lenta** | Conversas enormes (milhões de tokens) travam o frontend | 🟡 Baixa |

### Cenários de Uso Reportados

| Cenário | Sentimento | Issue |
|---------|:----------:|-------|
| Agente cron job para tarefas agendadas | 😤 Frustrado | [#2429](https://github.com/agentscope-ai/QwenPaw/issues/2429) |
| Gerenciamento de memória com busca semântica | 😤 Frustrado | [#4220](https://github.com/agentscope-ai/QwenPaw/issues/4220) |
| Desktop app (macOS/Windows) para uso standalone | 🤔 Neutro | [#3816](https://github.com/agentscope-ai/QwenPaw/issues/3816), [#4239](https://github.com/agentscope-ai/QwenPaw/issues/4239) |
| Multi-agent collaboration via Matrix | 😤 Frustrado | [#4251](https://github.com/agentscope-ai/QwenPaw/issues/4251) |
| Custom models + custom providers | 😤 Frustrado | [#4183](https://github.com/agentscope-ai/QwenPaw/issues/4183) |
| Plugins de imagem (Qwen-Image, Wan 2.7) | 😊 Satisfeito | [#4248](https://github.com/agentscope-ai/QwenPaw/pull/4248) |

### Satisfaction Score Estimada

| Dimensão | Score | Tendência |
|----------|:-----:|:---------:|
| Funcionalidade Core (agentes, tools) | ⭐⭐⭐☆☆ | → Estável |
| Providers (DashScope, OpenAI, etc.) | ⭐⭐☆☆☆ | 📉 Piorando (regressões) |
| Desktop/Mobile UX | ⭐⭐☆☆☆ | → Estável |
| Multi-agent/ACP | ⭐⭐⭐☆☆ | 📈 Melhorando (SDK adoption) |
| Documentação | ⭐⭐⭐⭐☆ | → Boa |
| **Geral** | **⭐⭐⭐☆☆** | → Neutro |

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Stale

| # | Título | Criado | Status | Prioridade |
|---|--------|--------|:------:|:----------:|
| [#3816](https://github.com/agentscope-ai/QwenPaw/issues/3816) | Links file:// não abrem no macOS desktop | 2026-04-24 | Open | 🟡 Média |
| [#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) | Tauri 2.x desktop (PR) | 2026-04-24 | Under Review | 🔵 Alta |
| [#4224](https://github.com/agentscope-ai/QwenPaw/pull/422

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-05-13

---

## 1. Panorama do Dia

O projeto ZeroClaw apresenta **alta atividade comunitária** em 13 de maio de 2026, com 50 PRs atualizados nas últimas 24h (18 merged/fechados) e 13 issues processadas (9 fechadas, 4 abertas). O ritmo de desenvolvimento é intenso, com pelo menos **8 PRs refatorando wrappers de rate-limiting** simultaneamente — indicando uma iniciativa coordenada de melhoria da arquitetura de ferramentas. Não houve releases novas, mas múltiplos PRs de tamanho médio/grande aguardam merge, sugerindo que uma release pode estar próxima. A comunidade demonstra foco em **estabilidade (bugs críticos de canais) e extensibilidade (Home Assistant, Wecom, SearXNG)**.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24h.**

O projeto encontra-se em período de intenso desenvolvimento ativo, com 32 PRs abertos aguardando revisão. O último período concentrou-se em:
- Correções de segurança (CA roots, temperatura Anthropic)
- Refatoração de wrappers de rate-limiting
- Correções de bugs em canais (Discord, Telegram, Matrix)
- Suporte a provedores de imagem (RunPod ComfyUI)

---

## 3. Progresso do Projeto

### PRs Merged/Fechados nas Últimas 24h

| # | Título | Tipo | Impacto |
|---|--------|------|---------|
| [#5772](https://github.com/zeroclaw-labs/zeroclaw/pull/5772) | Delegar rate-limiting para wrappers em glob_search e content_search | refactor | Reduz duplicação em ~50 call sites |
| [#4947](https://github.com/zeroclaw-labs/zeroclaw/pull/4947) | Aplicar RateLimitedTool+PathGuardedTool em search tools | refactor | Padroniza guards de segurança |
| [#4954](https://github.com/zeroclaw-labs/zeroclaw/pull/4954) | Delegar rate-limiting em network/skill tools | refactor | Consolida padrão em BrowserTool, HttpRequestTool, WebFetchTool, SkillTool |
| [#4953](https://github.com/zeroclaw-labs/zeroclaw/pull/4953) | Delegar rate-limiting em ClaudeCodeRunnerTool | refactor | Segue padrão estabelecido |
| [#4952](https://github.com/zeroclaw-labs/zeroclaw/pull/4952) | Delegar rate-limiting em AI CLI tools | refactor | Consolida GeminiCliTool, ClaudeCodeTool, CodexCliTool, OpenCodeCliTool |
| [#4949](https://github.com/zeroclaw-labs/zeroclaw/pull/4949) | Aplicar RateLimitedTool a Cron tools | refactor | CronAddTool, CronRemoveTool, CronUpdateTool |
| [#4948](https://github.com/zeroclaw-labs/zeroclaw/pull/4948) | Aplicar wrappers a PdfReadTool e ImageInfoTool | refactor | PdfReadTool com RateLimitedTool+PathGuardedTool; ImageInfoTool com PathGuardedTool |
| [#4828](https://github.com/zeroclaw-labs/zeroclaw/pull/4828) | Extrair rate-limiting e path-guard em wrappers (ShellTool) | refactor/security | Introduce `src/tools/wrappers.rs` como base da refatoração |

### Análise do Progresso

A **iniciativa de wrappers de rate-limiting** representa a conclusão de um esforço massivo de refatoração iniciado em 2026-03-27, que:
- Removeu ~50 call sites inline de guards duplicados
- Centralizou lógica de rate-limiting e path-guard em `RateLimitedTool` e `PathGuardedTool`
- Aplicou padrão consistente a ~30 ferramentas diferentes
- Melhorou manutenibilidade e segurança ao eliminar código duplicado

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (por comentários)

| # | Título | Comentários | Tipo | Prioridade |
|---|--------|-------------|------|------------|
| [#3090](https://github.com/zeroclaw-labs/zeroclaw/issues/3090) | Wecom (WxWork) channel support | 4 | enhancement | p2 |
| [#6097](https://github.com/zeroclaw-labs/zeroclaw/issues/6097) | Local image reading failed | 3 | bug | p2 |
| [#5316](https://github.com/zeroclaw-labs/zeroclaw/issues/5316) | Propose SearXNG search support | 3 | enhancement | p2 |
| [#6120](https://github.com/zeroclaw-labs/zeroclaw/issues/6120) | Onboarding escolhe Codex prompts para OpenAI API | 2 | bug | p1 |
| [#6422](https://github.com/zeroclaw-labs/zeroclaw/issues/6422) | cron_add: improve schedule parameter error message | 2 | bug | p2 |
| [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) | Audit 153 commits lost in bulk revert | 2 | enhancement | p2 |

### Análise das Demandas

1. **Suporte a Wecom (#3090)** — Demanda recorrente desde 2026-03-10 para adicionar canal WeChat Work/WeCom com suporte WebSocket e webhook. Indica interesse em mercado chinês/asiático.

2. **SearXNG como alternativa de busca (#5316)** — Proposta de privacidade foca adicionando motor de busca SearXNG e melhorias CAPTCHA para DuckDuckGo, atendendo usuários que priorizam privacidade.

3. **Auditoria de commits revertidos (#6074)** — Após revert c3ff635 que perdeu 153 commits, comunidade solicita processo formal de recuperação — indica maturidade em gestão de incidentes.

---

## 5. Bugs e Estabilidade

### Bugs Críticos (priority:p1)

| # | Severidade | Título | Status | Canal/Área |
|---|------------|--------|--------|------------|
| [#6120](https://github.com/zeroclaw-labs/zeroclaw/issues/6120) | S1 - workflow blocked | Onboarding escolhe Codex prompts para API key OpenAI | accepted | onboard/provider |
| [#6556](https://github.com/zeroclaw-labs/zeroclaw/issues/6556) | S2 - degraded | Discord media broken (imagens inbound nunca processadas) | no-stale | channel:discord |
| [#5453](https://github.com/zeroclaw-labs/zeroclaw/issues/5453) | S2 - degraded | WebSocket /ws/chat não processa marcadores [IMAGE:] | in-progress | runtime |

### Bugs de Alta Prioridade (priority:p2, risk:high)

| # | Severidade | Título | Status |
|---|------------|--------|--------|
| [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) | S2 - degraded | 153 commits perdidos em bulk revert | in-progress |
| [#6415](https://github.com/zeroclaw-labs/zeroclaw/issues/6415) | S2 - degraded | TTS desabilitado silenciosamente em stream_mode=partial | in-progress |
| [#6422](https://github.com/zeroclaw-labs/zeroclaw/issues/6422) | S3 - minor | cron_add: mensagem de erro não informativa | accepted |

### Bugs Fechados nas Últimas 24h (9)

- [#6347](https://github.com/zeroclaw-labs/zeroclaw/issues/6347) — Testes Telegram falham com default features
- [#6393](https://github.com/zeroclaw-labs/zeroclaw/issues/6393) — Erro na documentação de instalação Docker
- [#6359](https://github.com/zeroclaw-labs/zeroclaw/issues/6359) — labeler.yml não auto-label crates/**
- [#5687](https://github.com/zeroclaw-labs/zeroclaw/issues/5687) — rust-analyzer error
- [#6097](https://github.com/zeroclaw-labs/zeroclaw/issues/6097) — Leitura de imagens locais falhando

### Análise de Estabilidade

**Preocupações emergentes:**
- **Discord channel (#6556)** — Falha crítica afeta processamento de mídia inbound/outbound, com vazamento de marcadores. severity: high, risco de segurança.
- **WebSocket IMAGE markers (#5453)** — Imagens via WebSocket não funcionam, afetando agentes multimodais.
- **TTS silenciosamente desabilitado (#6415)** — Comportamento que viola princípio "fail loudly", pode surpreender usuários.

**Pontos positivos:**
- 9 bugs fechados nas últimas 24h indica ciclo de triagem ativo.
- Bugs de baixa severidade (S3) estão sendo endereçados (rust-analyzer, CI labeler, docs).

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features em PR Aberto

| # | Título | Tamanho | Risco | Área |
|---|--------|---------|-------|------|
| [#6464](https://github.com/zeroclaw-labs/zeroclaw/pull/6464) | Home Assistant tool para HA REST API | L | high | tool |
| [#6549](https://github.com/zeroclaw-labs/zeroclaw/pull/6549) | Add vision input support para Claude Code provider | L | medium | provider:claude-code |
| [#6555](https://github.com/zeroclaw-labs/zeroclaw/pull/6555) | Image gen RunPod ComfyUI | M | high | provider, cron |
| [#6525](https://github.com/zeroclaw-labs/zeroclaw/pull/6525) | Matrix: evitar threading de root timeline | S | medium | channel:matrix |
| [#6432](https://github.com/zeroclaw-labs/zeroclaw/pull/6432) | Tolerar migrations SQLite concorrentes | S | medium | memory |

### Features Solicitadas em Issues

| # | Título | Status | Área |
|---|--------|--------|------|
| [#3090](https://github.com/zeroclaw-labs/zeroclaw/issues/3090) | Wecom channel support (WebSocket + webhook) | accepted | channel:wecom |
| [#5316](https://github.com/zeroclaw-labs/zeroclaw/issues/5316) | SearXNG search + CAPTCHA detection DuckDuckGo | needs-maintainer-review | tool:web |

### Sinais de Roadmap

1. **Integração de casa inteligente (#6464)** — Home Assistant tool está em PR tamanho L, indicando investimento significativo em automação residencial.

2. **Suporte a provedores diversos (#6555)** — RunPod ComfyUI como provedor alternativo de geração de imagens mostra estratégia de diversificação.

3. **Multimodalidade (#6549)** — Suporte vision para Claude Code provider amplia casos de uso mobile/telegram.

4. **Canal WeCom (#3090)** — Duração de 2 meses sem merge pode indicar complexidade de implementação ou priorização.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Dor | Issue | Severidade | Evidência |
|------|-------|------------|-----------|
| Integração com OpenAI Codex quebrada | [#6120](https://github.com/zeroclaw-labs/zeroclaw/issues/6120) | S1 | Onboarding escolhe prompts errados para Codex |
| Discord não recebe/envia imagens | [#6556](https://github.com/zeroclaw-labs/zeroclaw/issues/6556) | S2 | ChannelMessage.attachments sempre vazio |
| TTS funciona só com stream_mode=off | [#6415](https://github.com/zeroclaw-labs/zeroclaw/issues/6415) | S2 | Comportamento silencioso confuso |
| Imagens locais não carregam via skills | [#6097](https://github.com/zeroclaw-labs/zeroclaw/issues/6097) | S2 | Paths locais não funcionam com API models |
| CI não labela mudanças em crates/** | [#6359](https://github.com/zeroclaw-labs/zeroclaw/issues/6359) | S3 | Contribuidores confundidos com labels ausentes |

### Cenários de Uso Emergentes

1. **Uso empresarial via WeCom** — Demanda por canal WeChat Work indica adoção corporativa em mercados asiáticos.
2. **Automação residencial** — PR #6464 de Home Assistant mostra interesse em controle de dispositivos IoT.
3. **Privacidade em buscas** — Issue #5316 sobre SearXNG reflete demanda por alternativas centradas em privacidade.
4. **Suscrições Codex** — Issue #6120 mostra usuários tentando usar ZeroClaw com OpenAI Codex (não apenas API padrão).

### Satisfação/Insatisfação

**Positivo:**
- comunidade ativa com 50 PRs em 24h
- ciclo de bugs rápido (9 fechados em 24h)
- refatoração de rate-limiting concluída com padrão consistente

**Negativo:**
- 153 commits perdidos em revert (#6074) — risco operacional
- bugs críticos em canais (Discord, Telegram, Matrix) afetam experiência multi-plataforma
- documentação de instalação Docker desatualizada (market chinês)

---

## 8. Backlog que Merece Atenção

### Issues sem Resposta há Longo Tempo

| # | Título | Criado | Atualizado | Dias Inativo | Prioridade |
|---|--------|--------|------------|--------------|------------|
| [#3090](https://github.com/zeroclaw-labs/zeroclaw/issues/3090) | Wecom channel support | 2026-03-10 | 2026-05-12 | ~63 dias | p2 |
| [#5316](https://github.com/zeroclaw-labs/zeroclaw/issues/5316) | SearXNG search support | 2026-04-05 | 2026-05-12 | ~38 dias | p2 |

### Issues com Status "needs-maintainer-review"

| # | Título | Área | Prioridade |
|---|--------|------|------------|
| [#5316](https://github.com/zeroclaw-labs/zeroclaw/issues/5316) | SearXNG search + CAPTCHA | tool:web | p2 |
| [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) | Audit 153 commits lost | ci | p2 |
| [#6347](https://github.com/zeroclaw-labs/zeroclaw/issues/6347) | Telegram tests fail | channel:telegram | p2 |

### PRs Aguardando Revisão há Tempo

| # | Título | Criado | Tamanho | Risco | Área |
|---|--------|--------|---------|-------|------|
| [#6464](https://github.com/zeroclaw-labs/zeroclaw/pull/6464) | Home Assistant tool | 2026-05-06 | L | high | tool |
| [#4944](https://github.com/zeroclaw-labs/zeroclaw/pull/4944) | Bundle wrapper migration | 2026-03-

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*