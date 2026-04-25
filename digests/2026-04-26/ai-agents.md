# Resumo diário do ecossistema de agentes de IA 2026-04-26

> Issues: 4 | PRs: 1 | Projetos cobertos: 7 | Gerado em: 2026-04-25 20:33 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório de Projeto NullClaw
## Data: 26 de abril de 2026

---

## 1. Panorama do Dia

O projeto NullClaw apresenta **atividade moderada** em 26 de abril de 2026, com 4 issues atualizadas nas últimas 24 horas. O destaque negativo é a emergência de um bug crítico de **busy-loop no `accept4()`** que causa consumo de 100% de CPU em múltiplas plataformas (Raspberry Pi 5, WSL2), afetando diretamente a estabilidade do gateway. A equipe respondeu com a fusão de um PR de melhoria no `web_search` e mantém 3 issues abertas, sinalizando demanda reprimida por refinamento em pesquisa web e acessibilidade em dispositivos de baixo custo.

---

## 2. Lançamentos

**Nenhuma release nas últimas 24 horas.**

O projeto não registrou novos versionamentos. Mantém-se na versão **2026.4.17** conforme mencionado nas issues reportadas.

---

## 3. Progresso do Projeto

### PR Merged (#815)
**Título:** `fix(web_search): add setup guidance for missing providers` | 修复(web_search): 为缺失搜索提供方补充设置指引

| Campo | Detalhe |
|-------|---------|
| **Autor** | manelsen |
| **Status** | CLOSED (merged) |
| **Criado** | 2026-04-14 |
| **Última atualização** | 2026-04-25 |

**Resumo das mudanças:**
- Aprimoramento no relatório de erros do `web_search` quando nenhum provedor confiável está configurado
- Adição de guia de configuração apontando para `http_request.search_base_url` (SearXNG) e variáveis de ambiente esperadas para provedores hospedados
- Manutenção de contagem de falhas agregadas entre provedores

🔗 [nullclaw/nullclaw PR #815](https://github.com/nullclaw/nullclaw/pull/815)

**Impacto:** Melhora significativa na experiência do usuário ao configurar pesquisa web, reduzindo frustração com configuração inicial.

---

## 4. Temas Quentes da Comunidade

### Issue #812 - Problema Contínuo com http_request
| Métrica | Valor |
|---------|-------|
| **Status** | CLOSED |
| **Autor** | uMendex |
| **Comentários** | 7 |
| **Reações** | 👍 1 |
| **Tempo em aberto** | 12 dias |

**Análise:** Usuário migrou de Picoclaw/ZeroClaw reportando incapacidade de habilitar busca na internet. Issue foi fechada após 7 comentários, indicando resolução via community support ou direcionamento para configuração adequada.

🔗 [nullclaw/nullclaw Issue #812](https://github.com/nullclaw/nullclaw/issues/812)

---

## 5. Bugs e Estabilidade

### 🔴 Crítico

**Issue #851** - Gateway Busy-loop on accept4()
| Campo | Detalhe |
|-------|---------|
| **Status** | OPEN |
| **Autor** | Trez-zerT |
| **Ambiente** | Raspberry Pi 5 (8GB), Debian GNU/Linux 13 (trixie) aarch64 |
| **Impacto** | 100% de 1 core CPU em estado idle |
| **Sintoma** | `accept4()` chamado repetidamente retornando EAGAIN |

🔗 [nullclaw/nullclaw Issue #851](https://github.com/nullclaw/nullclaw/issues/851)

---

**Issue #870** - Accept4 busy loop (100% CPU) on WSL2
| Campo | Detalhe |
|-------|---------|
| **Status** | OPEN |
| **Autor** | weissfl |
| **Ambiente** | WSL2 (Windows 11), NullClaw 2026.4.17 |
| **Impacto** | 100% CPU continuamente mesmo em idle |
| **Observação** | Funcionalidade do Telegram bot mantida |

🔗 [nullclaw/nullclaw Issue #870](https://github.com/nullclaw/nullclaw/issues/870)

> ⚠️ **Alerta:** O mesmo bug de busy-loop `accept4()` aparece em **duas plataformas distintas** (Raspberry Pi ARM64 e WSL2 x86_64), sugerindo problema de código transversal ou sensibilidade ao ambiente de rede.

---

### 🟡 Moderado

**Issue #871** - web_search impraticável em dispositivos de baixo recurso
| Campo | Detalhe |
|-------|---------|
| **Status** | OPEN |
| **Autor** | uMendex |
| **Prioridade** | Crítica (conforme autor) |
| **Comentários** | 0 |
| **Reações** | 0 |

**Problema central:** `web_search` não é prático para o caso de uso declarado do NullClaw (dispositivos fracos, baratos, baixa capacidade).

**Opções atuais identificadas:**
1. Brave Search API (requer API key externa)
2. Provedores pagos (custos e complexidade)

**Demanda:** Suporte direto ao DuckDuckGo para reduzir dependência de API keys.

🔗 [nullclaw/nullclaw Issue #871](https://github.com/nullclaw/nullclaw/issues/871)

---

## 6. Pedidos de Features e Sinais de Roadmap

### Feature #871 (implícito)
**Tipo:** Demanda de funcionalidade nativa  
**Prioridade declarada:** Alta pelo usuário

O usuário claramente indica que o suporte nativo a **DuckDuckGo** é essencial para o posicionamento do NullClaw como solução para dispositivos IoT/embarcados. Esta é uma demanda que pode influenciar roadmap.

**Sinais de mercado:**
- Crescente interesse em agentes de IA que operem offline/low-resource
- Competição com projetos que já oferecem busca nativa sem configuração

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Dor | Severidade | Frequência | Origem |
|-----|------------|------------|--------|
| Busca na internet não funciona mesmo seguindo documentação | Alta | 2 usuários distintos | Issues #812, #871 |
| Gateway consome 100% CPU idle | **Crítica** | 2 plataformas | Issues #851, #870 |
| Complexidade na configuração de provedores de busca | Média | 1+ usuários | PR #815 (endereçado) |

### Cenários de Uso Reportados

1. **Migração de ecossistema:** uMendex vindo de Picoclaw/ZeroClaw, buscando paridade funcional
2. **Dispositivos embarcados:** NullClaw posicionado como solução para Raspberry Pi e similares
3. **Ambientes Windows/WSL2:** Usuários desenvolvendo em Windows com subsistema Linux

### Satisfação/Insatisfação

- **Insatisfação:** Alta com a experiência de configuração de `web_search`
- **Insatisfação:** Crítica com estabilidade do gateway em diferentes plataformas
- **Satisfação parcial:** Organização do projeto elogiada por uMendex

---

## 8. Backlog que Merece Atenção

### Issues sem resposta há tempo significativo

| Issue | Idade | Status | Prioridade |
|-------|-------|--------|------------|
| #871 | 1 dia | OPEN, 0 comentários | ⚠️ Alta |
| #870 | 1 dia | OPEN, 0 comentários | 🔴 Crítica |
| #851 | 7 dias | OPEN, 4 comentários | 🔴 Crítica |

**Recomendação:** As issues #870 e #851 (mesmo bug em plataformas diferentes) merecem **triagem imediata** da equipe, idealmente com acknowledgment público indicando que estão investigando. A falta de resposta pode desmotivar contribuidores.

---

## Métricas Consolidada (24h)

| Indicador | Valor |
|-----------|-------|
| Issues abertas/ativas | 3 |
| Issues fechadas | 1 |
| PRs abertas | 0 |
| PRs merged/fechadas | 1 |
| Novas releases | 0 |
| Bugs críticos | 2 |
| Demanda por features | 1 |

---

## Veredicto de Saúde do Projeto

| Dimensão | Status | Observação |
|----------|--------|------------|
| **Estabilidade** | 🟡 Alerta | Bug de CPU idle afeta experiência em plataformas populares |
| **Comunidade** | 🟢 Positivo | Engajamento de usuários migrando de outros projetos |
| **Desenvolvimento** | 🟢 Ativo | PRs sendo mergeados, issues sendo fechadas |
| **Roadmap clarity** | 🔴 Nebuloso | Sem releases recentes; demandas de features não priorizadas |

**Recomendação geral:** Priorizar correção do bug `accept4()` e clarificar roadmap de `web_search` para manter confiança da comunidade.

---

*Relatório gerado automaticamente com base em dados do GitHub de 26 de abril de 2026.*

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo — Ecossistema Open Source de Agentes de IA

**Data de Referência:** 26 de abril de 2026
**Projetos Analisados:** 8 repositórios principais do segmento

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source demonstra **saúde polarizada** em 26 de abril de 2026. Projetos como **Hermes Agent** e **ZeroClaw** lideram em volume de atividade com 50+ issues e PRs atualizados em 24h, indicando comunidades engajadas e ciclos de desenvolvimento acelerados. Simultaneamente, problemas transversais emergem: a integração com o **DeepSeek V4 em modo de raciocínio** apresenta falhas de compatibilidade em pelo menos 4 projetos, e vulnerabilidades de segurança (shell injection, SSRF, prompt injection) estão sendo corrigidas ativamente. A arquitetura **MCP (Model Context Protocol)** consolida-se como padrão de extensibilidade dominante, com múltiplos projetos investindo em suporte a prompts MCP, transport stdio e schemas de ferramentas. O segmento de **canais multi-plataforma** (Telegram, Feishu, Matrix, WhatsApp) representa o principal vetor de diferenciação competitiva entre os projetos.

---

## 2. Comparação de Atividade

| Projeto | Issues Ativas (24h) | PRs Atualizados | PRs Merged | Releases | Avaliação de Saúde |
|---------|:-------------------:|:---------------:|:----------:|:--------:|:-----------------:|
| **Hermes Agent** | 50 | 50 | 7 | 0 | 🟢 Alta — volume massivo, 4 PRs de segurança em curso |
| **ZeroClaw** | 50 | 47 | 10+ | 0 | 🟢 Alta — consolidação pré-v0.7.4, multi-agente em RFC |
| **IronClaw** | 6 | 28 | 2 | 0 | 🟡 Estável — canary failures demandam atenção |
| **NanoBot** | 8 | 27 | 6 | 0 | 🟢 Alta — 4 PRs de segurança + features multi-canal |
| **CoPaw** | 14 | 12 | 4 | 1 (patch) | 🟡 Alerta — bug crítico de persistência em investigação |
| **PicoClaw** | 7 | 21 | 12 | 1 (nightly) | 🟢 Alta — turnaround rápido em bugs críticos |
| **NullClaw** | 4 | — | 1 | 0 | 🟡 Alerta — bug de CPU idle crítico sem resposta da equipe |

**Métricas consolidadas do ecossistema:**

| Indicador | Total | Observação |
|-----------|-------|------------|
| Issues abertas/ativas | ~139 | Distribuídas entre 8 projetos |
| PRs em revisão | ~70 | Pipeline robusto de contribuições |
| Releases | 2 | Apenas patches/nightly — sem major releases |
| Bugs críticos abertos | ~12 | Concentrados em stability e segurança |
| PRs de segurança | 8+ | Prioridade transversal no ecossistema |

---

## 3. Posicionamento do Projeto Principal

### Hermes Agent (NousResearch)

**Vantagens competitivas:**

- **Maior volume de atividade** com 50 issues e 50 PRs atualizados em 24h
- **Foco explícito em segurança**: skill code safety scanner, input sanitizer com risk scoring, prompt injection detection shield
- **Integrações profundas**: Claude/Anthropic, DeepSeek, Browser Use, WHOOP health
- **Comunidade técnica**: 15+ 👍 em issues de autenticação indica base de usuários profissionais

**Diferenças técnicas:**
- Arquitetura orientada a TUI/CLI com extensões de automação (browser, health, cron)
- Pipeline de segurança proativo vs. reativo
- Suporte a deployment em VPS/Docker root como caso de uso primário

---

### ZeroClaw (zeroclaw-labs)

**Vantagens competitivas:**

- **Iniciativa multi-agente mais avançada**: RFC #5890 ativa, schema v3 em batch migration
- **Binary size otimizado**: ~5.1 MB kernel-only (vs. benchmarks anteriores de ~8.8 MB)
- **RBAC multi-tenant**: Demanda corporativa clara para isolamento per-sender
- **Pipeline i18n robusto**: Mozilla Fluent + mdBook multilocale

**Diferenças técnicas:**
- Schema-driven onboarding com idempotência
- Full-text search nativo com trigger FTS UPDATE em streaming
- ACP server como protocolo de interoperabilidade

---

## 4. Focos Técnicos Compartilhados

### 4.1 Integração DeepSeek V4 com Reasoning Content

O problema de `reasoning_content` aparece transversalmente:

| Projeto | Issue | Manifestação |
|---------|-------|--------------|
| **NanoBot** | #3443 | `reasoning` field vaza para conteúdo do usuário em parsing |
| **PicoClaw** | #2657 | Persistência canônica inconsistente após refresh |
| **Hermes Agent** | #15770 | `reasoning_content` ausente em mensagens de assistente |
| **ZeroClaw** | #6107 | Streaming de `reasoning_content` causa reject 400 em follow-ups |

**Recomendação técnica:** A comunidade necessita de um **padrão de facto** para manuseio de reasoning content em modelos de思考. Os projetos estão resolvendo o mesmo problema de forma isolada.

### 4.2 Segurança de Extensões e MCP

```
PRs de segurança em curso:
├── NanoBot #3366 — Shell injection em ExecTool
├── NanoBot #3252 — SSRF bypass (file://, gopher://)
├── NanoBot #3255 — Proteção de arquivos críticos (history.jsonl)
├── Hermes #10727 — Skill code safety scanner
├── Hermes #10730 — Input sanitizer (risk scoring)
└── Hermes #10731 — Prompt injection detection shield
```

**Análise:** 6+ PRs de segurança simultâneos indicam que a superfície de ataque em agentes de IA com tools está sendo ativamente explorada pela comunidade. A tendência é convergência para **defense-in-depth**: validação de input, sanitização de output, e detection shields.

### 4.3 Estabilidade Multi-Canal

| Canal | Projetos Afetados | Problema Principal |
|-------|:-----------------:|--------------------|
| **Telegram** | NanoBot, Hermes | Regressão de Markdown, políticas por grupo |
| **Matrix** | Hermes, IronClaw | Loops recursivos, native channel em desenvolvimento |
| **WhatsApp** | Hermes, ZeroClaw | Read receipts, broken channel |
| **Feishu** | NanoBot, Hermes | Suporte a Docs/Bitable, thread isolation |
| **MSTeams** | NanoBot | Threaded replies, pruning de refs obsoletos |

### 4.4 Suporte a Dispositivos e Deploy

| Ambiente | Projetos com Issues | Problema |
|----------|:------------------:|----------|
| **WSL2** | NullClaw, Hermes | Console unresponsive, PTY disconnect |
| **Raspberry Pi** | NullClaw | CPU busy-loop em idle |
| **Windows** | CoPaw, PicoClaw | Renderização, child-process console |
| **VPS/Docker root** | Hermes, IronClaw | Chromium flags, browser automation |
| **macOS** | NanoBot | LaunchAgent setup |

---

## 5. Análise de Diferenciação

### Matriz de Posicionamento

| Dimensão | Hermes Agent | ZeroClaw | NanoBot | PicoClaw | IronClaw | CoPaw | NullClaw |
|----------|--------------|----------|---------|----------|----------|-------|----------|
| **Foco primário** | Automação + Segurança | Multi-agente | Multi-canal empresarial | Web chat + providers | Engine v2 extensível | Desktop GUI | Gateway embarcado |
| **Público-alvo** | DevOps, power users | Enterprise, squads | Corporações (Feishu, Teams) | Usuários finais | Desenvolvedores de plugins | Usuários Windows | IoT/embarcados |
| **Complexidade de setup** | Média-alta | Alta | Baixa | Baixa | Alta | Baixa | Alta |
| **Velocidade de iteração** | 🔴 Rápida (50 PRs/dia) | 🔴 Rápida (47 PRs/dia) | 🟡 Média | 🟢 Muito alta (12 merged/dia) | 🟡 Média | 🟡 Média | 🟡 Baixa |
| **Maturidade de segurança** | Alta | Alta | Alta | Média | Média | Baixa | Baixa |
| **Suporte a providers** | OpenAI, Anthropic, DeepSeek | Ollama, DeepSeek, Custom | Múltiplos | OpenRouter, DeepSeek, Gemini, xAI | OpenAI-compatible | Qwen, Ollama | HTTP Request |
| **Arquitetura diferenciada** | TUI-first, browser automation | ACP protocol, schema v3 | Pipeline de channels | Web-first, nightly releases | WASM extensions | Tauri desktop | Lightweight gateway |

### Análise de Segmentos

**Segmento 1: Automação e Developer Experience**
- **Representantes:** Hermes Agent, PicoClaw
- **Características:** CLI/TUI rico, browser automation, integrations externas
- **Diferenciação:** Hermes foca em segurança proativa; PicoClaw em web chat UX

**Segmento 2: Enterprise e Multi-Canal**
- **Representantes:** NanoBot, ZeroClaw
- **Características:** Suporte a plataformas corporativas (Feishu, MSTeams, Matrix), RBAC, multi-tenancy
- **Diferenciação:** NanoBot prioriza canais de mensageria; ZeroClaw prioriza orquestração multi-agente

**Segmento 3: Extensibilidade e Plugins**
- **Representantes:** IronClaw, CoPaw
- **Características:** WASM-based, MCP como padrão de plugins, desktop integration
- **Diferenciação:** IronClaw foca em developers de plugins; CoPaw em usabilidade desktop

**Segmento 4: Embarcados e Low-Resource**
- **Representantes:** NullClaw
- **Características:** Raspberry Pi, WSL2, dispositivos IoT, busca web sem API keys
- **Diferenciação:** Único projeto focando explicitamente em constraints de hardware

---

## 6. Tração e Maturidade da Comunidade

### Ranking de Engajamento (por volume de issues + PRs + reações)

| Posição | Projeto | Score de Engajamento | Indicador Principal |
|:-------:|---------|:---------------------:|---------------------|
| 🥇 1 | **Hermes Agent** | Muito Alto | 50 issues + 50 PRs + 15 👍 em issue de autenticação |
| 🥈 2 | **ZeroClaw** | Muito Alto | 50 issues + 47 PRs + RFC multi-agente ativo |
| 🥉 3 | **NanoBot** | Alto | 27 PRs atualizados + 4 PRs de segurança simultâneos |
| 4 | **PicoClaw** | Alto | 12 PRs mergeados em 24h + nightly releases |
| 5 | **CoPaw** | Médio | 14 issues + release patch + demanda de desktop |
| 6 | **IronClaw** | Médio | 28 PRs + PRs XL de Matrix channel |
| 7 | **NullClaw** | Baixo | 4 issues + bug crítico sem resposta da equipe |

### Velocidade de Resolução de Bugs

| Projeto | Tempo Médio | Casos de Referência |
|---------|:-----------:|---------------------|
| **PicoClaw** | ~1-2 dias | DeepSeek reasoning, MCP arguments |
| **NanoBot** | 4-7 dias | Security patches (shell injection, SSRF) |
| **Hermes Agent** | <20 dias | Claude auth (issue #6475) |
| **CoPaw** | <24h | Approval system (v1.1.4.post2) |
| **NullClaw** | Sem resposta | accept4() busy-loop (7+ dias aberto) |
| **ZeroClaw** | Variável | Schema v3 em batch; Ollama tool_count há 38 dias |

### Qualidade de Resposta Comunitária

| Indicador | Melhor Performador | Pior Performador |
|-----------|:------------------:|:----------------:|
| Tempo de first response | CoPaw (<24h) | NullClaw (sem resposta em bugs críticos) |
| Transparência de roadmap | ZeroClaw (RFC pública) | NullClaw (sem clareza) |
| Frequência de releases | PicoClaw (nightly contínuas) | Hermes/ZeroClaw (sem releases 24h) |
| Comunicação de segurança | NanoBot/Hermes (PRs explícitos) | CoPaw (reports sem tracking) |

---

## 7. Sinais de Tendência

### 7.1 Segurança como Diferenciador de Primeira Classe

O volume de PRs de segurança (8+ simultâneos) e as features em desenvolvimento (skill scanner, input sanitizer, prompt injection shield) indicam que **hardening de segurança** está se tornando requisito table-stakes para agentes de IA em produção. A tendência é adoção de defense-in-depth com múltiplas camadas de validação.

### 7.2 MCP como Padrão de Extensibilidade

Três projetos (IronClaw, PicoClaw, Hermes) estão investindo simultaneamente em suporte MCP expandido:
- IronClaw: MCP prompts support, stdio activation fix
- PicoClaw: Complex JSON schemas com `$ref`, `anyOf`
- Hermes: MCP tool responses com ImageContent

**Prognóstico:** MCP está se consolidando como o "plugin system" dominante do ecossistema, substituindo abordagens proprietárias.

### 7.3 Multi-Agente como Próxima Fronteira

ZeroClaw lidera com RFC ativa (#5890) para multi-agent UX, complementada por:
- Delegate tool em PicoClaw (#2531)
- Cross-provider reasoning promotion em Hermes
- Session-level focus tool em NanoBot

**Prognóstico:** 2026 será o ano de **orquestração de agentes** —单个 projetos evoluindo para swarms e squads de IA.

### 7.4 DeepSeek V4 como Catalisador de Mudanças

A incompatibilidade de reasoning_content com DeepSeek V4 aparece em 4+ projetos, forçando:
- Padronização de histórico de mensagens
- Suporte a streaming de reasoning
- Políticas de fallback entre providers

**Prognóstico:** Providers com thinking mode (DeepSeek V4, Claude 3.7, etc.) estão definindo novos contratos de API que a comunidade open source precisa adotar rapidamente.

### 7.5 Desktop e GUI como Via de Adoção

CoPaw (Tauri 2.x), NanoBot (cross-platform channels), e a demanda por web UI em múltiplos projetos indicam que **experiência de usuário final** — além de CLI — é vetor de adoção crescente. Abarca:
- Model Management UI com browsing remoto
- Session replay e debugging visual
- Config persistence cross-platform

### 7.6 Internasionalização e Mercados Locais

Traduções de README (NanoBot zh-CN) e suporte a plataformas asiáticas (Feishu, Aliyun, LINE) indicam que o ecossistema está se expandindo para mercados fora da esfera anglófona. **Prognóstico:** Provedores regionais (ByteDance, Baidu, Naver) podem se tornar próximos targets de integração.

---

## Síntese Executiva

| Dimensão | Conclusão |
|----------|-----------|
| **Saúde geral** | Ecossistema saudável com polarização entre líderes (Hermes, ZeroClaw, NanoBot) e projetos em dificuldade (NullClaw, CoPaw) |
| **Prioridade técnica #1** | Harmonizar handling de reasoning_content para modelos de思考 (DeepSeek V4, Claude 3.7+) |
| **Prioridade técnica #2** | Consolidação de segurança (shell injection, SSRF, prompt injection) antes de próxima wave de adoção enterprise |
| **Oportunidade de mercado** | Multi-agente orchestration e suporte a plataformas asiáticas (Feishu, Aliyun) |
| **Risco sistêmico** | Baixa resposta da comunidade NullClaw pode indicar abandono ou falta de recursos — demanda de DuckDuckGo permanece sem resposta |
| **Trajetória** | Consolidação de MCP como padrão + segurança proativa + desktop GUI definindo próxima geração de agentes |

---

*Relatório gerado automaticamente com base em dados públicos do GitHub em 26 de abril de 2026.*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-04-26

---

## 1. Panorama do Dia

O NanoBot apresenta **alta atividade comunitária** em 26 de abril de 2026, com 8 issues e 27 PRs atualizados nas últimas 24 horas. A equipe mesclou 6 PRs significativos (incluindo suporte a documentos Office e tradução para chinês do README), enquanto 17 PRs permanecem abertos com foco em segurança, usabilidade e novas features. Não houve lançamentos de novas versões. O projeto demonstra maturidade operacional com pipeline robusto de security patches e evolução contínua de canais (Feishu, MSTeams).

---

## 2. Lançamentos

**Nenhum novo release nas últimas 24h.**

A ausência de releases pode indicar que a equipe está em ciclo de consolidação após a série de patches de segurança em andamento (ver Seção 3).

---

## 3. Progresso do Projeto

### PRs Merged/Fechados Hoje (6 itens)

| # | PR | Descrição | Impacto |
|---|-----|-----------|--------|
| [#2345](https://github.com/HKUDS/nanobot/pull/2345) | docs: add Chinese translation for README | Tradução completa do README para zh-CN com language switcher | Internacionalização — amplia alcance na comunidade chinesa |
| [#3176](https://github.com/HKUDS/nanobot/pull/3176) | feat(feishu): thread-scoped sessions | Isolamento de sessão por thread no Feishu, reply in thread, reações não-bloqueantes | Melhor experiência em grupos Feishu |
| [#3447](https://github.com/HKUDS/nanobot/pull/3447) | fix(msteams): send threaded replies via replyToId | Correção de replies em thread no MSTeams + pruning de refs obsoletos | Estabilidade do canal MSTeams |
| [#3336](https://github.com/HKUDS/nanobot/pull/3336) | feat(read_file): add DOCX, XLSX, PPTX support | Suporte a documentos Office via `extract_text()` | Expansão de capacidades de leitura de arquivos |
| [#2791](https://github.com/HKUDS/nanobot/pull/2791) | feat(agent): add ask user tool | Nova tool para pausar e solicitar confirmação/decisão do usuário com menus interativos no CLI | Interatividade e UX |
| [#3441](https://github.com/HKUDS/nanobot/pull/3441) | docs: add macOS LaunchAgent setup | Documentação de deployment via launchd plist no macOS | Operacionalidade em macOS |

**Destaque:** A convergência do PR #3176 (Feishu threads) e PR #3447 (MSTeams threading) indica foco da equipe em **experiência multi-canal em group chats**.

---

## 4. Temas Quentes da Comunidade

### Issues com Mais Comentários/Reações

| # | Título | Comentários | 👍 | Tema Principal |
|---|--------|-------------|----|----------------|
| [#2568](https://github.com/HKUDS/nanobot/issues/2568) | Telegram markdown rendering unreliable (v0.1.4.post6) | 3 | 0 | **Regressão** — rendering Markdown intermitente no Telegram |
| [#3292](https://github.com/HKUDS/nanobot/issues/3292) | Session-Level Focus Tool: Persistent Task Awareness | 2 | 0 | **Feature request** — "task board" mental para agentes |
| [#3309](https://github.com/HKUDS/nanobot/issues/3309) | Per-chat group policy overrides for Telegram | 1 | 1 | **RFC** — políticas por grupo no Telegram |
| [#3436](https://github.com/HKUDS/nanobot/issues/3436) | Call external agent (OpenCode/Codex) | 1 | 0 | **Enhancement** — delegar para agentes externos |

**Análise:** A issue #2568 sobre Markdown no Telegram representa **regressão funcional** com impacto direto em UX. A issue #3292 sobre "focus tool" reflete demanda por **memória de longo prazo e continuidade de tarefas** — tema estratégico para agents.

---

## 5. Bugs e Estabilidade

### Bugs Reportados (3 issues + patches relacionados)

| Severidade | # | Descrição | Status |
|------------|---|-----------|--------|
| **🔴 Alta** | [#3443](https://github.com/HKUDS/nanobot/issues/3443) | `reasoning` field vaza para conteúdo do usuário em `_parse()` não-streaming | **Aberto** — chain-of-thought exposto |
| **🔴 Alta** | [#2568](https://github.com/HKUDS/nanobot/issues/2568) | Rendering Markdown intermitente no Telegram (regressão v0.1.4.post6) | **Aberto** — impacto imediato |
| **🟡 Média** | [#3435](https://github.com/HKUDS/nanobot/issues/3435) | Falha de upload de mídia no canal WeCom | **Aberto** |
| **🟢 Baixa** | [#3433](https://github.com/HKUDS/nanobot/issues/3433) | Acúmulo de refs de conversa obsoletos no MSTeams | **Aberto** — já corrigido em #3447 |

### Patches de Segurança em Andamento (4 PRs)

| # | Título | Vulnerabilidade |
|---|--------|-----------------|
| [#3366](https://github.com/HKUDS/nanobot/pull/3366) | fix(security): prevent shell injection via path_append | **Shell injection** em ExecTool (não-Windows) |
| [#3252](https://github.com/HKUDS/nanobot/pull/3252) | fix(security): detect non-http schemes in SSRF scan | **SSRF** — bypass com `file://`, `gopher://` etc. |
| [#3255](https://github.com/HKUDS/nanobot/pull/3255) | fix(security): enforce history.jsonl/.dream_cursor | Proteção de arquivos críticos via filesystem layer |
| [#3445](https://github.com/HKUDS/nanobot/pull/3445) | fix(provider): prevent reasoning field leaking | Evita vazamento de chain-of-thought |
| [#3446](https://github.com/HKUDS/nanobot/pull/3446) | fix(provider): gate reasoning-to-content fallback | Controla fallback via flag `reasoning_as_content` |

**⚠️ Alerta:** 4 de 17 PRs abertos são relacionados a **segurança**. Prioridade crítica para merge.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| # | Título | Autor | Sinais de Roadmap |
|---|--------|-------|-------------------|
| [#3292](https://github.com/HKUDS/nanobot/issues/3292) | Session-Level Focus Tool: Persistent Task Awareness | piliplaker | **Memória cross-session** e anchoring de objetivos |
| [#3436](https://github.com/HKUDS/nanobot/issues/3436) | Call external agent (OpenCode/Codex integration) | jsapede | **Agentes externos/híbridos** |
| [#3437](https://github.com/HKUDS/nanobot/issues/3437) | RFC: On-demand heartbeat trigger for debugging | basil | **Ferramentas de debugging** |
| [#3408](https://github.com/HKUDS/nanobot/pull/3408) | feat(mgp): opt-in MGP sidecar | LarFii | **Memory Governance Protocol** — governança de memória |
| [#3403](https://github.com/HKUDS/nanobot/pull/3403) | feat(skills): add project-manager | Krislu1221 | **Isolamento por projeto** e continuidade |
| [#3303](https://github.com/HKUDS/nanobot/pull/3303) | spawn_status/spawn_cancel tools, domain loop detection | MuataSr | **Gestão de subagentes** |

**Tendência clara:** O ecossistema NanoBot está evoluindo para **memória persistente, governança e isolamento de contexto** — indicando amadurecimento de agentes para uso em produção.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

1. **Regressão no Telegram (#2568):** Usuários reportam comportamento "sometimes works, sometimes doesn't" no rendering Markdown — **inconsistência inaceitável** em produção.

2. **Vulnerabilidades expostas (#3366, #3252):** A comunidade identificou bypasses de segurança em shell commands — demonstra **vigilância ativa** da base de usuários.

3. **Fragmentação em canais group (#3309):** Administradores precisam de políticas por-chat para bots multi-grupo no Telegram — **caso de uso empresarial**.

4. **Vazamento de chain-of-thought (#3443):** Modelos com reasoning field expõem pensamento interno — **risco de confidencialidade**.

### Cenários de Uso Destacados

- **Multi-canal empresarial:** Integração Feishu e MSTeams em group chats (PRs #3176, #3447)
- **Ambiente local:** Suporte a Ollama/vLLM com desconexão de keepalive (#3444)
- **Produtividade:** ask_user tool (#2791) e project-manager skill (#3403)

**Satisfação:** A velocidade de resposta da equipe (PRs de segurança em 4-7 dias) e features de internacionalização (#2345) indicam **saúde comunitária positiva**.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta/Progresso

| # | Título | Criado | Dias | Prioridade |
|---|--------|--------|------|------------|
| [#2568](https://github.com/HKUDS/nanobot/issues/2568) | Telegram markdown rendering (regressão) | 2026-03-27 | ~30 dias | **🔴 Alta** |
| [#3292](https://github.com/HKUDS/nanobot/issues/3292) | Session-Level Focus Tool | 2026-04-19 | 7 dias | **🟡 Média-Alta** |
| [#3433](https://github.com/HKUDS/nanobot/issues/3433) | Prune stale MSTeams refs | 2026-04-24 | 2 dias | **🟢 Baixa** (já corrigido) |

### PRs Abertos com Potencial Impacto

| # | Título | Criado | Status | Observação |
|---|--------|--------|--------|------------|
| [#3366](https://github.com/HKUDS/nanobot/pull/3366) | Shell injection fix | 2026-04-21 | 5 dias | **Crítico** — aguardando review |
| [#3408](https://github.com/HKUDS/nanobot/pull/3408) | MGP sidecar | 2026-04-23 | 3 dias | Feature estratégica |
| [#3427](https://github.com/HKUDS/nanobot/pull/3427) | Session replay token budgeting | 2026-04-24 | 2 dias | Estabilidade em produção |

---

## Métricas Resumidas (2026-04-26)

| Indicador | Valor | Tendência |
|-----------|-------|-----------|
| Issues ativas (24h) | 8 | Neutra |
| PRs atualizados (24h) | 27 | ↑ Alta |
| PRs merged (24h) | 6 | ↑ Positiva |
| Releases (24h) | 0 | Neutra |
| Bugs críticos abertos | 2 | ⚠️ Atenção |
| PRs de segurança abertos | 4 | ⚠️ Prioridade |

**Veredicto:** NanoBot está em **estado saudável com alta atividade**. A ênfase em segurança (4 PRs) e estabilidade multi-canal demonstra maturidade. A regressão no Telegram (#2568) e os vazamentos de reasoning (#3443) requerem atenção imediata da equipe de desenvolvimento.

---

*Relatório gerado automaticamente com base em dados do GitHub para HKUDS/nanobot em 2026-04-26.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent
## NousResearch/hermes-agent — 2026-04-26

---

## 1. Panorama do dia

O Hermes Agent manteve alta atividade em 26 de abril de 2026, com **50 issues e 50 PRs atualizados nas últimas 24h**, indicando um ecossistema saudável e em constante evolução. O volume de PRs abertos (43) supera significativamente os fechados/merged (7), sugerindo que a base de código está acumulando contribuições pendentes de revisão. Não houve lançamentos de novas versões, mas o dia foi marcado pela **correção de bugs críticos** (como o problema de autenticação Claude/Anthropic) e pela abertura de PRs importantes para segurança e estabilidade. A comunidade demonstrou engajamento significativo, especialmente em issues envolvendo integrações com provedores (DeepSeek, Claude) e plataformas (WhatsApp, Slack, Matrix).

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24 horas.**

O projeto não publicou novas versões em 2026-04-26. Isso indica um período de consolidação de código antes de um próximo lançamento, ou que a equipe está focada em resolver o backlog de issues antes de cortar uma nova versão.

> **Recomendação:** Acompanhar o repositório para próximos releases em [NousResearch/hermes-agent/releases](https://github.com/NousResearch/hermes-agent/releases).

---

## 3. Progresso do Projeto

### PRs closed/merged nas últimas 24h

| PR | Descrição | Impacto |
|----|-----------|---------|
| [#15766](https://github.com/NousResearch/hermes-agent/pull/15766) | fix(tui): honor client copy shortcut over SSH | **UX/CLI** — Corrige atalhos de cópia no TUI quando conectados via SSH, resolvendo problema com Cmd+C sobre connections redirecionadas |
| [#15770](https://github.com/NousResearch/hermes-agent/pull/15770) | fix: pad reasoning_content on all DeepSeek assistant messages | **DeepSeek** — Garante compatibilidade com deepseek-v4-flash/pro ao adicionar `reasoning_content` em todas as mensagens de assistente (não apenas tool-calls) |

### PRs abertos com maior potencial de impacto

| PR | Descrição | Relevância |
|----|-----------|------------|
| [#7419](https://github.com/NousResearch/hermes-agent/pull/7419) | feat(health): phase 2/3 + KV integration | **Feature** — Coach de saúde diário com integração WHOOP, logging de hábitos e lembretes Telegram agendados |
| [#10726](https://github.com/NousResearch/hermes-agent/pull/10726) | feat: Browser Use integration | **Ferramentas** — Automação web orientada a tarefas via Browser Use (complementar ao browser_tool.py existente) |
| [#10727](https://github.com/NousResearch/hermes-agent/pull/10727) | feat: skill code safety scanner | **Segurança** — Detecção de shell injection e path traversal em skills |
| [#10730](https://github.com/NousResearch/hermes-agent/pull/10730) | feat: input sanitizer — risk scoring | **Segurança** — Scoring de risco para prompt injection, jailbreaks e exposição de PII |
| [#10731](https://github.com/NousResearch/hermes-agent/pull/10731) | feat: prompt injection detection shield | **Segurança** — Shield multilíngue com normalização unicode e detecção de sinais de crise |
| [#15771](https://github.com/NousResearch/hermes-agent/pull/15771) | fix(browser): inject --no-sandbox when running as root | **Estabilidade** — Corrige browser_navigate em VPS/Docker ao injetar flags necessárias para root |
| [#15769](https://github.com/NousResearch/hermes-agent/pull/15769) | fix(cron): drop stale env-var override | **Cron** — Evita que variáveis de ambiente stale sobrescrevam configuração persistente do provider |

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários + reações)

#### 🔥 #6475 — Erro de autenticação Claude/Anthropic subscription *(RESOLVIDO)*
- **Autor:** muskvc | **24 comentários** | **15 👍**
- **Link:** [Issue #6475](https://github.com/NousResearch/hermes-agent/issues/6475)
- **Resumo:** Mensagem "HTTP 400: You're out of extra usage" persistia após restart/re-login, indicando problema no tratamento de refresh tokens ou persistência de sessão.
- **Análise:** Este foi o issue mais engajado do dia, demonstrando que a integração com Claude/Anthropic é crítica para muitos usuários. A resolução fechada sugere que a equipe priorizou rapidamente este problema.

#### 💬 #3752 — Cron jobs de longa duração bloqueiam o scheduler
- **Autor:** apexscaleai | **4 comentários**
- **Link:** [Issue #3752](https://github.com/NousResearch/hermes-agent/issues/3752)
- **Resumo:** Jobs lentos executam inline dentro de `cron.scheduler.tick()` enquanto o lock está preso, causando atrasos em cascata.
- **Análise:** Problema de arquitetura que afeta reliability de automações agendadas. Classificado P2, merece atenção para não degradar experiência de uso de cron.

#### 💬 #10829 — Feature request: Suporte a Documentos e Bitable do Feishu
- **Autor:** jacobLiuzhenkang | **3 comentários**
- **Link:** [Issue #10829](https://github.com/NousResearch/hermes-agent/issues/10829)
- **Resumo:** Atualmente o adapter Feishu só suporta IM básico. A feature request pede suporte a edição de Wiki/Docs e integração com Bitable.
- **Análise:** Indica demanda por expansão da plataforma Feishu além de messaging, potencialmente aumentando base de usuários na China/Ásia.

---

## 5. Bugs e Estabilidade

### Prioridade 1 (Críticos)

| Issue | Descrição | Plataforma/Componente |
|-------|-----------|----------------------|
| [#10719](https://github.com/NousResearch/hermes-agent/issues/10719) | Context compression dropa silenciosamente todas as turns de conversa quando summary generation falha | Agent (compression) |
| [#15768](https://github.com/NousResearch/hermes-agent/issues/15768) | CLI não aceita input de API key durante setup no Ubuntu (terminal não responde) | CLI |
| [#15763](https://github.com/NousResearch/hermes-agent/issues/15763) | Matrix "Hall of Mirrors": eventos de sistema/bridge causam loops recursivos de pairing | Matrix gateway |
| [#15687](https://github.com/NousResearch/hermes-agent/issues/15687) | Codex Responses API 400: input_text inválido em mensagens de assistente | OpenAI/Codex |

### Prioridade 2 (Importantes)

| Issue | Descrição | Área |
|-------|-----------|------|
| [#15717](https://github.com/NousResearch/hermes-agent/issues/15717) | DeepSeek API 400: reasoning_content deve ser retornado em thinking mode | DeepSeek provider |
| [#15741](https://github.com/NousResearch/hermes-agent/issues/15741) | Cron path ainda emite HTTP 400 reasoning_content após fix #15213 | Cron + DeepSeek |
| [#15748](https://github.com/NousResearch/hermes-agent/issues/15748) | Cross-provider reasoning promotion vaza conteúdo stale para DeepSeek/Kimi | Agent (reasoning) |
| [#15201](https://github.com/NousResearch/hermes-agent/issues/15201) | Slack: mensagens anteriores não são acessadas após ser tagged em thread | Slack gateway |
| [#12952](https://github.com/NousResearch/hermes-agent/issues/12952) | custom keepalive transport quebra chatgpt codex backend | OpenAI/Codex |
| [#8785](https://github.com/NousResearch/hermes-agent/issues/8785) | context_length overrides não são aplicados consistentemente | Config/Agent |
| [#6055](https://github.com/NousResearch/hermes-agent/issues/6055) | WhatsApp read receipts não são enviados de volta | WhatsApp gateway |
| [#10755](https://github.com/NousResearch/hermes-agent/issues/10755) | CLI crash com OSError [Errno 5] no WSL2 quando PTY desconecta | CLI/WSL2 |
| [#10756](https://github.com/NousResearch/hermes-agent/issues/10756) | Interrupting agent durante MCP tool blocking causa hang infinito | CLI/MCP |
| [#10759](https://github.com/NousResearch/hermes-agent/issues/10759) | MCP tool responses com ImageContent são silenciosamente descartados | MCP tools |
| [#15743](https://github.com/NousResearch/hermes-agent/issues/15743) | Fallback provider ignora seu próprio base_url | Config/Fallback |

### Tema recorrente: DeepSeek reasoning_content

O problema de `reasoning_content` aparece em **4 issues separados** ([#15717](https://github.com/NousResearch/hermes-agent/issues/15717), [#15741](https://github.com/NousResearch/hermes-agent/issues/15741), [#15748](https://github.com/NousResearch/hermes-agent/issues/15748), [#15770](https://github.com/NousResearch/hermes-agent/pull/15770)), indicando que a implementação de thinking mode para DeepSeek V4 está com falhas persistentes em diferentes caminhos de código (chat normal vs. cron). A equipe parece estar trabalhando ativamente na correção via PR #15770.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features abertas com maior relevância

| Issue | Descrição | Prioridade | Sinais de demanda |
|-------|-----------|------------|-------------------|
| [#10829](https://github.com/NousResearch/hermes-agent/issues/10829) | Suporte a Feishu Wiki/Doc e Bitable | P3 | Mercado chinês, expansão de plataforma |
| [#10157](https://github.com/NousResearch/hermes-agent/issues/10157) | Warn on context_length mismatch após /model --global | P3 | UX, prevenção de erros de configuração |
| [#10805](https://github.com/NousResearch/hermes-agent/issues/10805) | Documentação para instalação de context engines third-party | P3 | Ecossistema de plugins, developer experience |
| [#6539](https://github.com/NousResearch/hermes-agent/issues/6539) | Enviar read receipts (blue ticks) no WhatsApp | P3 | Feature parity com app oficial |

### Sinais de tendência no PR pipeline

A análise dos PRs abertos revela foco em **segurança** (skill scanner, input sanitizer, prompt injection shield) e **automação de browser** (Browser Use integration). Isso sugere que o roadmap pode estar direcionando para:
1. **Hardening de segurança** após issues de prompt injection e credential handling
2. **Expansão de capacidades de automação** além de browser_navigate básico
3. **Integração mais profunda com plataformas** (health, Feishu docs)

---

## 7. Resumo de Feedback dos Usuários

### Dores reais identificadas

1. **Integração com Claude/Anthropic quebrada após uso inicial** — Usuários relatam que após funcionar inicialmente, a autenticação falha com "out of extra usage" mesmo após restart. Problema agora resolvido, mas expôs fragilidade no handling de tokens.

2. **Browser automation não funciona em VPS Linux root** — Cenário comum em produção (Hetzner, DigitalOcean). Chromium se recusa a iniciar sem `--no-sandbox`, causando timeout de `browser_navigate`. PR #15771 em andamento para corrigir.

3. **Matrix gera loops infinitos com eventos de bridge** — Usuários de Matrix experimentam "Hall of Mirrors" quando eventos de bridge system-level são tratados como requests de pairing legítimos. Bug P1 crítico para quem usa Matrix como gateway.

4. **Setup CLI trava ao pedir API key no Ubuntu** — Bug P1 que impede novos usuários de configurar o Hermes. Terminal não aceita input, Ctrl+V não funciona.

### Cenários de uso emergentes

- **Agents executando em VPS/Docker root** — Mais comum do que esperado, expõe vários pontos de fricção (browser, Chromium flags)
- **Integração com Codex/Codex Responses API** — Casos de uso de coding assistance estão crescendo, evidenciados por múltiplos issues sobre autenticação e transporte
- **Automação de health habits** — PR #7419 indica demanda por use cases além de chat/automation pura

### Indicadores de satisfação/insatisfação

| Indicador | Observação |
|------------|------------|
| 👍 15 em #6475 | Alta demanda por integração Claude funcional |
| 👍 1 em #15717, #15748 | Usuários afetados por DeepSeek thinking mode marcam como importantes |
| ⚠️ 0 👍 em vários bugs P2 | Possível subnotificação ou usuários aguardando fix sem reagir |

---

## 8. Backlog que Merece Atenção

### Issues sem resposta ou estagnadas

| Issue | Idade | Situação | Recomendação |
|-------|-------|----------|--------------|
| [#3752](https://github.com/NousResearch/hermes-agent/issues/3752) | ~28 dias | Aberta, sem comentários além do autor | Arquitetura de cron precisa de redesign; agendar discussão técnica |
| [#8785](https://github.com/NousResearch/hermes-agent/issues/8785) | ~13 dias | context_length overrides inconsistentes | Priorizar para não quebrar modelos custom |
| [#6055](https://github.com/NousResearch/hermes-agent/issues/6055) | ~18 dias | WhatsApp read receipts ausentes | Feature request antigo; considerar implementá-lo (#6539 relacionado) |
| [#10746](https://github.com/NousResearch/hermes-agent/issues/10746) | ~10 dias | Security review flagged | Revisar padrões de install script e secret handling antes de próxima release |
| [#10719](https://github.com/NousResearch/hermes-agent/issues/10719) | ~10 dias | P1 - compression dropa conversas | **Alta prioridade** - Perda silenciosa de dados é grave |

### PRs abertos há tempo significativo

| PR | Idade | Descrição | Status |
|----|-------|-----------|--------|
| [#7419](https://github.com/NousResearch/hermes-agent/pull/7419) | ~16 dias | Health integration com KV | Aguardando review |
| [#7446](https://github.com/NousResearch/hermes-agent/pull/7446) | ~16 dias | Heartbeats configuráveis por plataforma | Aguardando review |

---

## Conclusão

O Hermes Agent demonstra **saúde geral positiva** em 2026-04-26, com alta atividade de comunidade e progresso em múltiplas frentes simultâneas. Os **principais riscos** identificados são:

1. **Bugs P1 pendentes**: CLI setup travando (#15768), Matrix loops (#15763), e compression dropping dados (#10719)
2. **Padrões de regressão em DeepSeek reasoning**: Necessidade de unificar fix entre chat e cron paths
3. **Segurança**: Issues de prompt injection e credential handling requerem atenção antes de próxima major release

**Pontos fortes observados**:
- Resposta rápida a bugs críticos (Claude auth resolvido em <20 dias)
- Pipeline saudável de features de segurança
- Comunidade ativa reportando bugs específicos

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório de Projeto — PicoClaw
**Data de referência:** 2026-04-26  
**Fonte:** github.com/sipeed/picoclaw

---

## 1. Panorama do dia

O ecossistema PicoClaw manteve alta atividade em 26 de abril, com **21 PRs** e **7 issues** atualizados nas últimas 24 horas. O projeto demonstra maturidade operacional: 12 das 21 PRs foram fechadas ou mergeadas, indicando fluxo de revisão eficiente. A versão `v0.2.7-nightly.20260425` foi publicada como nightly build, sinalizando consolidação para a próxima release estável. Os temas dominantes hoje giram em torno de **estabilidade de provedores de IA** (DeepSeek, Gemini, xAI), **melhorias na UX do web chat** e **robustness de ferramentas MCP**.

---

## 2. Lançamentos

| Canal | Versão | Status |
|-------|--------|--------|
| Nightly | `v0.2.7-nightly.20260425.8d51d306` | ✅ Público |

### Detalhes da release

A nightly mais recente não constitui uma release estável, mas serve como artefato de integração contínua. Não há **breaking changes** documentadas nem notas de migração. O changelog completo está disponível em:

📎 https://github.com/sipeed/picoclaw/compare/v0.2.7...main

**Recomendação:** Equipes em produção devem permanecer na última tag estável (`v0.2.7`) até que uma nova release formal seja cortada.

---

## 3. Progresso do Projeto

### PRs fechadas/mergeadas hoje (12 itens)

| # | Título | Tipo | Domínio | Impacto |
|---|--------|------|---------|---------|
| #2657 | fix(reasoning): persist canonical history for DeepSeek and web chat | 🐞 Bug | provider, agent | Resolve inconsistência no web chat após refresh e falhas em follow-up com DeepSeek |
| #2666 | fix(mcp): send empty object instead of null for tool | 🐞 Bug | tool | Corrige falha de especificação em chamadas MCP com argumentos opcionais |
| #2660 | fix(tool-feedback): format tool args as JSON code blocks | 🐞 Bug | channel, tool | Melhora legibilidade do feedback de ferramentas |
| #2659 | fix: isolate thought bubble collapse state | 🐞 Bug | channel | Corrige estado compartilhado incorretamente entre bolhas de raciocínio |
| #2664 | fix(mcp): retry tool calls on lost HTTP sessions | 🐞 Bug | tool | Adiciona resiliência a timeouts de sessão MCP |
| #2654 | fix(launcher): hide windows child-process console flashes | 🐞 Bug | build | Elimina janela de console piscante no Windows |
| #2661 | feat: add thought visibility toggle | ✨ Feature | channel | Novo toggle na UI para mostrar/ocultar raciocínio do modelo |
| #2663 | feat: improve config save and restart feedback | ✨ Feature | channel, config | Feedback claro ao salvar configurações |
| #2667 | chore: update WeChat group QR code | 🔧 Chore | — | Atualização de assets de comunidade |
| #2570 | feat(seahorse): make fresh tail size configurable | ✨ Feature | agent, config | Torna configurável o tamanho do fresh tail do Seahorse |
| #2498 | fix(agent): preserve multiple armed /use skills | 🐞 Bug | agent | Permite múltiplos `/use` sem sobrescrita |
| #326 | Feature: Add PR concurrency to reduce redundant runs | ✨ Feature | ci | Reduz runs redundantes no CI/CD |

### Destaque de merged

**#2657** — A correção de persistência canônica do histórico para DeepSeek e web chat resolve simultaneamente dois problemas: (a) inconsistência de exibição após refresh da página e (b) falhas de follow-up em sessões com DeepSeek em modo de raciocínio. Este PR consolida a estratégia de armazenamento de `reasoning_content` junto com o conteúdo principal do assistant, padrão crítico para modelos que emitem reasoning.

📎 https://github.com/sipeed/picoclaw/pull/2657

**#2666 + #2600** — Em conjunto, resolvem o problema de envio de `null` vs `{}` em argumentos de ferramentas MCP. A issue #2600 foi aberta em 20/04 e resolvida em 5 dias, demonstrando turnaround rápido para bugs de integração MCP.

📎 https://github.com/sipeed/picoclaw/issues/2600  
📎 https://github.com/sipeed/picoclaw/pull/2666

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento

| # | Título | Comentários | Estado | Reações |
|---|--------|:-----------:|:------:|:-------:|
| #1790 | [BUG] openrouter free not working | 6 | CLOSED | 0 |
| #2600 | [BUG] null MCP arguments | 2 | CLOSED | 0 |
| #2671 | [Feature]模型提供商能否支持opencode? | 0 | OPEN | 0 |
| #2668 | [BUG] Gemini API returns HTTP 400 Bad Request for MCP tools with complex JSON schemas | 0 | OPEN | 0 |

### Análise das demandas

**#1790 — openrouter free não funciona**  
Reportado em 19/03 por Damian-o2, o bug foi fechado em 25/04 (~37 dias). O erro indica que o modelo `minimax-m2.5:free` não é válido na API da OpenRouter, evidenciando um problema de provider routing ou incompatibilidade de nomenclatura de modelos. O volume de comentários (6) é o maior entre as issues recentes, indicando necessidade de validação mais robusta na cadeia de provedores.

📎 https://github.com/sipeed/picoclaw/issues/1790

**#2671 — Suporte a OpenCode provider**  
Feature request em chinês solicitando suporte ao provedor OpenCode (modelos `zen` e `go`). Este é um indicador de que a comunidade está demandando diversificação de provedores além dos já suportados (OpenAI, Anthropic, Google, DeepSeek, xAI, etc.).

📎 https://github.com/sipeed/picoclaw/issues/2671

**#2672 — Structured tool call support no web chat** (PR aberta)  
Com 3 domínios afetados (channel, agent, tool), esta PR é a iniciativa mais ambiciosa do dia. Adiciona suporte a `tool_calls` estruturados nas mensagens do chat, preservando detalhes como blocos colapsáveis em vez de achatar a informação.

📎 https://github.com/sipeed/picoclaw/pull/2672

---

## 5. Bugs e Estabilidade

### Issues abertas (2)

| # | Severidade | Domínio | Título | Impacto |
|---|:----------:|---------|--------|---------|
| #2668 | 🔴 Alta | provider, tool | Gemini API returns HTTP 400 Bad Request for MCP tools with complex JSON schemas | **Quebra funcional** — modelos Gemini crasham ao usar ferramentas MCP com schemas complexos (`$ref`, `anyOf`) |
| #2671 | 🟡 Média | provider | Feature: Suporte a OpenCode | Demanda de feature, sem impacto imediato |

### Análise de #2668 (crítica)

O bug reportado por YoranBrault em 25/04 expõe uma incompatibilidade entre schemas JSON Schema draft-07/2019-09 (com referências `$ref`, `$defs`, `anyOf`) e a validação estrita de function-calling do Google Gemini. O erro HTTP 400 indica que o Gemini rejeita payloads que contêm estruturas que ele não consegue parsear ou validar. Este é um bug de **alta severidade** que afeta qualquer integração MCP (ex: Notion) com modelos Gemini.

📎 https://github.com/sipeed/picoclaw/issues/2668

### Bugs resolvidos hoje

| # | Tempo de resolução | Área |
|---|:-------------------:|------|
| #2648 | ~1 dia | DeepSeek — conteúdo de reasoning fora de ordem no histórico |
| #2650 | ~1 dia | DeepSeek — erros após chamadas de ferramenta em modo de raciocínio |
| #2615 | ~3 dias | Web Chat — inconsistência pós-refresh (regressão de #2449) |

**Maturidade de resposta:** O projeto demonstra capacidade de resolver bugs críticos (DeepSeek reasoning, MCP arguments) em ciclos de 1-5 dias, o que é ágil para um projeto de agentes de IA com múltiplas integrações.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em desenvolvimento (PRs abertas)

| # | Título | Domínios | Complexidade | Indicador estratégico |
|---|--------|:--------:|:------------:|------------------------|
| #2260 | feat(providers): add xAI compat support | provider, config | Média | Demanda por novos provedores |
| #2531 | feat(tools): add delegate tool for cross-agent task handoff | agent, tool | Alta | Expansão de arquitetura multiagente |
| #2672 | feat(pico): add structured tool call support to web chat | channel, agent, tool | Alta | UX/web chat |
| #2670 | feat(agent): add pretty_print and disable_escape_html options | agent | Baixa | DX (Developer Experience) |
| #2670 | feat(agent): add network error retry with configurable max retries | agent | Média | Resiliência operacional |
| #1780 | QQ connection stability | channel | Média | Estabilidade de canais legacy |

### Análise de roadmap

**xAI Provider (#2260)** — Integração do provedor xAI (Elon Musk) está em revisão há ~24 dias, sinalizando que a barreira de entrada para novos provedores está na validação de compatibilidade e não em esforço de implementação.

📎 https://github.com/sipeed/picoclaw/pull/2260

**Delegate Tool (#2531)** — Esta é uma PR de alta importância estratégica. Implementa handoff síncrono de tarefas entre agentes, satisfação do requisito D3 do Phase 2 plan. Indica que o projeto está avançando para cenários de orquestração multiagente.

📎 https://github.com/sipeed/picoclaw/pull/2531

**Retry with Backoff (#2669)** — Adiciona retries configuráveis com backoff exponencial para falhas de rede transient. Esta é uma melhoria de **confiabilidade operacional** que beneficia implantações em ambientes de rede instável.

📎 https://github.com/sipeed/picoclaw/pull/2669

---

## 7. Resumo de Feedback dos Usuários

### Padrões de dor identificados

| Dor | Evidência | Severidade |
|-----|-----------|:----------:|
| Instabilidade com DeepSeek em reasoning mode | Issues #2648, #2650 | 🔴 Alta |
| Falhas em integrações MCP com modelos Gemini | Issue #2668 | 🔴 Alta |
| UX do web chat (refresh, raciocínio visível) | PRs #2657, #2661, #2659 | 🟡 Média |
| Caracteres especiais escapados na saída de ferramentas | PR #2670 (relacionada) | 🟡 Média |
| Configuração de provedores (OpenCode request) | Issue #2671 | 🟢 Baixa |

### Cenários de uso emergentes

1. **Multi-provider fallback** — Usuários alternando entre OpenRouter, DeepSeek e Gemini reportam fricção quando modelos específicos não funcionam corretamente (evidenciado por #1790, #2648).
2. **Agentes de produção** — A demanda por retry com backoff (#2669) e stability de canais (#1780) indica adoção em cenários de produção contínua.
3. **Interoperabilidade MCP** — Schemas complexos de ferramentas (Notion, custom MCPs) expõem limitações na validação de function calling de alguns provedores.

### Satisfação

A velocidade de resolução de bugs (5 bugs fechados em 1 dia) e a выпуска de features de UX (#2661 toggle de pensamento, #2663 feedback de configuração) indicam atenção à experiência do usuário final. A ausência de queixas sobre documentação ou onboarding neste ciclo é um indicador positivo.

---

## 8. Backlog que Merece Atenção

### Issues abertas há mais tempo

| # | Idade | Título | Prioridade |
|---|:-----:|--------|:----------:|
| #1780 | ~38 dias | QQ connection stability | 🟡 Média |
| #1790 | ~38 dias | openrouter free not working | 🔴 Alta (fechada, verificar regressão) |
| #2163 | ~28 dias | maintain OAuth scopes during Google Antigravity token refresh | 🟡 Média |
| #2260 | ~24 dias | feat(providers): add xAI compat support | 🟡 Média |
| #2671 | 1 dia | Feature: OpenCode provider support | 🟡 Média |
| #2668 | 1 dia | Gemini API returns HTTP 400 | 🔴 Alta |

### Recomendações para mantenedores

1. **#2668 (crítica)** — Gemini + MCP com schemas complexos requer resolução priorizada. Considere sanitização de schemas antes de envio ou fallback para provedores compatíveis.

2. **#2671 (demanda)** — Avaliar viabilidade de integrar OpenCode como novo provedor, alinhando com a estratégia de diversificação evidenciada por #2260 (xAI).

3. **#2163 (segurança)** — OAuth scopes durante refresh de token é um tópico de segurança. Se ainda não revisado, deve receber atenção antes de fechar.

4. **#1780 (estabilidade)** — 38 dias sem movimento em PR de stability de canal QQ pode indicar necessidade de rebase ou abandono. Decisão de manutenção é necessária.

---

## Métricas de Saúde do Projeto (24h)

| Indicador | Valor | Tendência |
|-----------|:-----:|:---------:|
| Issues fechadas | 5 | ✅ Acima da média |
| PRs fechadas/mergeadas | 12 | ✅ Alta |
| PRs abertas | 9 | Neutra |
| Razão fechado/aberto (issues) | 5/2 = 2.5 | ✅ Saudável |
| Tempo médio de resolução (bugs) | ~2 dias | ✅ Ágil |
| Nova release | 1 nightly | ℹ️ Sem breaking changes |

---

**Próxima atualização recomendada:** 2026-04-27  
**Report gerado em:** 2026-04-26

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-04-26

---

## 1. Panorama do Dia

O projeto IronClaw apresenta **alta atividade de desenvolvimento** neste ciclo de 24h, com 28 PRs atualizados e 6 issues ativas. Dois bugs críticos de regressão foram identificados e estão sendo corrigidos simultaneamente: a falha de ativação de servidores MCP via stdio (#2923) e o sobrescrita do `llm_backend` no startup (#2946). A pipeline de canary detectou duas falhas em lanes de teste (provider-matrix e private-oauth), indicando possíveis problemas de regressão em provedores compatíveis com OpenAI. Dois PRs de alta prioridade foram mergeados, avançando a stabilização do engine v2 e correções no schema de ferramentas LLM.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto encontra-se em ciclo de desenvolvimento ativo sem tags formais de release no período analisado.

---

## 3. Progresso do Projeto

### PRs Mergeados/Fechados (2)

| # | Título | Escopo | Impacto |
|---|--------|--------|---------|
| [#2951](https://github.com/nearai/ironclaw/pull/2951) | fix llm tool schema shaping for near ai | llm, docs | Extraiu shared tool-schema shaping para `src/llm/tool_schema.rs`, mantendo comportamento estrito OpenAI/Codex no rig adapter e switchando NEAR AI para política `FlattenOnly` provider-safe. |
| [#2868](https://github.com/nearai/ironclaw/pull/2868) | engine-v2: make available_actions callable-only for blocked providers | agent, channel/web, tool, tool/builtin, tool/wasm, llm, extensions, docs | Cleanup de `available_actions()` — agora callable apenas para provedores bloqueados. Inclui work de #2869, #2876 e #2889. |

### Tendência de Merge
Os PRs fechados hoje focam em **estabilização do engine v2** e correções de schema LLM, sugerindo prioridade em preparação para próxima versão estável.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| # | Título | Comentários | 👍 | Tema |
|---|--------|-------------|----|------|
| [#2923](https://github.com/nearai/ironclaw/issues/2923) | Bug: stdio MCP activation fails | 2 | 1 | Bug crítico de transporte |
| [#78](https://github.com/nearai/ironclaw/issues/78) | feat: P3 messaging channels | 2 | 0 | Feature parity |
| [#2946](https://github.com/nearai/ironclaw/issues/2946) | Llm_backend overwritten on every start-up | 1 | 0 | Bug de configuração |

### PRs de Destaque

| # | Título | Tamanho | Risco | Escopo |
|---|--------|---------|-------|--------|
| [#2019](https://github.com/nearai/ironclaw/pull/2019) | feat: native Matrix channel | XL | high | agent, channel, db, llm, config, hooks, docs |
| [#2958](https://github.com/nearai/ironclaw/pull/2958) | feat(mcp): support MCP prompts | XL | medium | mcp, extensions, docs |

**Análise:** A comunidade demonstra forte interesse em:
1. **Expansão de canais** — Matrix nativo (#2019) e canais de mensageria P3 (#78)
2. **Profundamento MCP** — Suporte a prompts MCP (#2958) e fixes de segurança (#1941)
3. **Infraestrutura** — CLI de migração (#2728) e self-service secrets (#2754)

---

## 5. Bugs e Estabilidade

### Bugs Reportados (4)

| # | Severidade | Título | Status |
|---|-----------|--------|--------|
| [#2956](https://github.com/nearai/ironclaw/issues/2956) | **Alta** | Live canary failed: provider-matrix openai-compatible | Aberto |
| [#2955](https://github.com/nearai/ironclaw/issues/2955) | **Alta** | Live canary failed: private-oauth | Aberto |
| [#2923](https://github.com/nearai/ironclaw/issues/2923) | **Alta** | stdio MCP activation fails | PR #2960 aberto |
| [#2946](https://github.com/nearai/ironclaw/issues/2946) | **Média** | Llm_backend overwritten on every start-up | PR #2961 aberto |

### Análise de Regressões
- **Canary failures** nas lanes `provider-matrix` e `private-oauth` no commit `7404e7d` requerem atenção imediata — indicam possível regressão em autenticação OAuth ou compatibilidade de provedores.
- **2 PRs de fix já abertos** (#2960, #2961) com contributors externos (willamhou), sugerindo resolução rápida.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Propostas

| # | Título | Escopo | Prioridade |
|---|--------|--------|------------|
| [#2962](https://github.com/nearai/ironclaw/issues/2962) | Surface ACP agent request_permission calls to the user via web UI | agent, sandbox, extensions | Nova |
| [#2959](https://github.com/nearai/ironclaw/pull/2959) | Add dedicated web_fetch tool with secondary-model summaries | tool, tool/builtin, docs | Nova |

### Sinais de Roadmap

| # | Título | Escopo | Evidência |
|---|--------|--------|-----------|
| [#78](https://github.com/nearai/ironclaw/issues/78) | P3 messaging channels (iMessage, Matrix, LINE, Feishu, Teams) | channel/wasm | Feature parity document |
| [#2019](https://github.com/nearai/ironclaw/pull/2019) | Native Matrix channel | channel | PR XL em desenvolvimento |
| [#1446](https://github.com/nearai/ironclaw/pull/1446) | Add Aliyun Coding Plan support | llm | Pull request ativo |

**Indicadores de direção:**
- Expansão de canais de mensageria (Matrix como prioridade)
- Suporte a provedores asiáticos (Aliyun)
- Aprofundamento de capacidades MCP (prompts, autenticação)
- Self-service infrastructure (secrets, migração)

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Problema | Impacto | Evidência |
|----------|---------|-----------|
| **Transporte stdio MCP não funciona** | Usuários com servers MCP locais não conseguem ativar | #2923 — "stdio is wired end-to-end in v0.25.0 — the bug is strictly in the activation pre-flight" |
| **llm_backend reseta no startup** | Usuários com setups self-hosted (vLLM, LiteLLM) têm provider sobrescrito | #2946 — "overwriting both env vars and config.toml" |
| **Provider矩阵 compatible falha** | Usuários de provedores OpenAI-compatible受影响 | Canary failure #2956 |

### Padrões de Uso Emergentes
- **Self-hosted LLM setups** crescem — evidenciado por #2946 e necessidade de `api_key_required` handling
- **MCP como padrão de extensibilidade** — 3+ PRs/issues relacionados a MCP nesta semana
- **Segurança de extensões** — validação allowlist para server names (#1941)

---

## 8. Backlog que Merece Atenção

### Issues Antigas Sem Progresso Recente

| # | Título | Criado | Comentários | Urgência |
|---|--------|--------|-------------|----------|
| [#78](https://github.com/nearai/ironclaw/issues/78) | feat: P3 messaging channels | 2026-02-14 | 2 | Baixa — mas alinhado com roadmap Matrix |
| [#1120](https://github.com/nearai/ironclaw/pull/1120) | feat(prismer): add Prismer Cloud IM WASM channel | 2026-03-13 | 0 | Média — aguardando review |

### PRs Grandes Pendentes de Review

| # | Título | Tamanho | Risco | Contributer | Tempo em Aberto |
|---|--------|---------|-------|-------------|-----------------|
| [#2754](https://github.com/nearai/ironclaw/pull/2754) | feat(web): self-service user secrets | XL | high | core | ~6 dias |
| [#2728](https://github.com/nearai/ironclaw/pull/2728) | feat: Engine V2 migrate CLI | XL | medium | core | ~6 dias |
| [#2684](https://github.com/nearai/ironclaw/pull/2684) | feat(signing): integrate signet-core | XL | medium | willamhou | ~7 dias |
| [#1446](https://github.com/nearai/ironclaw/pull/1446) | feat: Aliyun Coding Plan support | XL | low | new | ~36 dias |
| [#2019](https://github.com/nearai/ironclaw/pull/2019) | feat: native Matrix channel | XL | high | devrandom | ~22 dias |

### Recomendações
1. **Priorizar review de #2960 e #2961** — resolvem bugs críticos reportados por usuários
2. **Verificar canary failures #2955/#2956** — bloqueiam deployments de produção
3. **Avançar #2019 (Matrix)** — alinhado com roadmap e alta demanda da comunidade
4. **Revisar #78** — feature parity documentado, mas sem movimento há 2 meses

---

**Gerado em:** 2026-04-26  
**Fonte:** [github.com/nearai/ironclaw](https://github.com/nearai/ironclaw)

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do Projeto CoPaw — 2026-04-26

---

## 1. Panorama do Dia

O projeto CoPaw (QwenPaw) manteve alta atividade em 26 de abril de 2026, com 14 issues e 12 pull requests atualizados nas últimas 24 horas. A equipe发布 uma correção urgente (v1.1.4.post2) para resolver um bug crítico no sistema de aprovação em canais. A comunidade reportou múltiplos problemas de estabilidade, especialmente relacionados à persistência de configurações e renderização no Windows. O desenvolvimento ativo continua com 8 PRs em aberto, incluindo melhorias significativas na interface de gerenciamento de modelos e suporte a desktop com Tauri 2.x.

---

## 2. Lançamentos

### 🎯 v1.1.4.post2 — Released 2026-04-25

| Tipo | Descrição | PR |
|------|-----------|-----|
| Bug Fix | Correção do sistema de approval não funcionando corretamente em channels | [#3832](https://github.com/agentscope-ai/QwenPaw/pull/3832) |

**Changelog completo:** https://github.com/agentscope-ai/QwenPaw/compare/v1.1.4.post1...v1.1.4.post2

**Notas de Migração:** Nenhuma quebra de compatibilidade esperada. Atualização de patch recomendada para todos os usuários.

---

## 3. Progresso do Projeto

### PRs Merged/Closed (4)

| # | Título | Tipo | Impacto |
|---|--------|------|---------|
| [#3832](https://github.com/agentscope-ai/QwenPaw/pull/3832) | fix: approval not working in channel | Bug Fix | ✅ Crítico - Funcionalidade de moderação restaurada |
| [#3833](https://github.com/agentscope-ai/QwenPaw/pull/3833) | chore: bump version to 1.1.4.post2 | Version Bump | Release management |
| [#3740](https://github.com/agentscope-ai/QwenPaw/pull/3740) | skills: add built-in agent audit workflow | Feature | Adiciona workflow de auditoria de agentes built-in (EN/CN) |
| [#2338](https://github.com/agentscope-ai/QwenPaw/pull/2338) | feat: persist UI language to server-side config | Feature (WIP Closed) | Reforço de persistência de preferências de idioma |

### PRs Abertos em Destaque (8)

| # | Título | Tipo | Estágio |
|---|--------|------|---------|
| [#3819](https://github.com/agentscope-ai/QwenPaw/pull/3819) | refactor Model Management Modal with browsable remote model list | UX Enhancement | Em revisão |
| [#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) | feat: add Tauri 2.x desktop app support | Desktop | Em revisão |
| [#3829](https://github.com/agentscope-ai/QwenPaw/pull/3829) | feat: generate session titles asynchronously via LLM | UX Enhancement | Novo |
| [#3831](https://github.com/agentscope-ai/QwenPaw/pull/3831) | Add vector model connection test feature | UX Enhancement | Novo |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (por comentários)

| # | Título | Tipo | Comentários | Reações |
|---|--------|------|:-----------:|:-------:|
| [#3824](https://github.com/agentscope-ai/QwenPaw/issues/3824) | Bug: Configurações de agente perdidas ao fechar/refresh | Bug | 4 | 0 |
| [#3826](https://github.com/agentscope-ai/QwenPaw/issues/3826) | Windows 1.1.4 não renderiza conteúdo | Question | 3 | 0 |
| [#3821](https://github.com/agentscope-ai/QwenPaw/issues/3821) | Backup nunca funciona | Question | 3 | 0 |
| [#3817](https://github.com/agentscope-ai/QwenPaw/issues/3817) | Configuração de modelo vetorial não persiste | Question | 3 | 0 |

**Análise:** O tema dominante é **persistência de configurações** — usuários relatam consistentemente que ajustes feitos na interface não sobrevivem a reinicializações ou refreshes. Este é um problema de UX crítico que afeta a experiência básica do produto.

---

## 5. Bugs e Estabilidade

### 🛑 Críticos

| # | Título | Severidade | Detalhes |
|---|--------|:----------:|----------|
| [#3824](https://github.com/agentscope-ai/QwenPaw/issues/3824) | Configurações perdidas após refresh/close | **Alta** | LLM, plan mode, memória de longo prazo não persistem |
| [#3828](https://github.com/agentscope-ai/QwenPaw/issues/3828) | config.json vs agent.json dessincronizados | **Alta** | Web UI mostra configurações "perdidas" |
| [#3795](https://github.com/agentscope-ai/QwenPaw/issues/3795) | Erros 422 MODEL_EXECUTION_FAILED frequentes | **Alta** | Ocorre em operações complexas |

### ⚠️ Moderados

| # | Título | Severidade | Detalhes |
|---|--------|:----------:|----------|
| [#3835](https://github.com/agentscope-ai/QwenPaw/issues/3835) | Não consegue renomear/deletar ACP agents | Média | WebUI |
| [#3827](https://github.com/agentscope-ai/QwenPaw/issues/3827) | Não consegue restaurar secrets | Média | Funcionalidade de backup |
| [#3836](https://github.com/agentscope-ai/QwenPaw/issues/3836) | browser_use não navega | Média | ERR_INTERNET_DISCONNECTED |

### 📉 Platform-Specific

| # | Título | Platform | Status |
|---|--------|----------|--------|
| [#3826](https://github.com/agentscope-ai/QwenPaw/issues/3826) | Conteúdo não renderiza, só moldura | Windows 10/2012 | Closed — workaround: usar 1.1.2 |
| [#3830](https://github.com/agentscope-ai/QwenPaw/issues/3830) | Console GUI lento e unresponsive | Windows | Investigação necessária |

---

## 6. Pedidos de Features e Sinais de Roadmap

### ✨ Novas Features Propostas

| # | Título | Descrição | Prioridade |
|---|--------|-----------|:----------:|
| [#3825](https://github.com/agentscope-ai/QwenPaw/issues/3825) | Injetar contexto por mensagem no shell tool | Permita que contexto dinâmico (room id, session id) alcance subprocessos | 🔵 |
| [#3820](https://github.com/agentscope-ai/QwenPaw/issues/3820) | Retry mechanism para dream_callback | Melhora resiliência da memória noturna | 🔵 |
| [#3823](https://github.com/agentscope-ai/QwenPaw/issues/3823) | API/CLI para backup automático | Solicitar endpoint REST ou comando CLI para automação | 🔵 |

### 🔄 Features em Desenvolvimento

| # | Título | Progresso | Observação |
|---|--------|-----------|------------|
| [#3117](https://github.com/agentscope-ai/QwenPaw/pull/3117) | Semantic skill routing | Under Review | Reduz consumo de tokens filtrando skills por relevância |
| [#3525](https://github.com/agentscope-ai/QwenPaw/pull/3525) | Discord thread creation antes dispatch | Under Review | Isola saída de cron jobs |
| [#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) | Tauri 2.x desktop app | Em revisão | Substitui Electron para desktop |

**Sinais de direção:** O roadmap indica foco em:
1. **Performance** — otimização de memória noturna, retry mechanisms
2. **Desktop** — migração para Tauri 2.x
3. **Automação** — API de backup, cron jobs mais robustos

---

## 7. Resumo de Feedback dos Usuários

### 😤 Dores Principais

| Categoria | Descrição | Frequência |
|-----------|-----------|:----------:|
| **Persistência de configs** | Usuários relatam que configurações "somem" após restart ou refresh. Problema afeta tanto configurações de agentes quanto de modelos vetoriais | 🔴 Alta |
| **Windows compatibility** | Usuários Windows reportam problemas de renderização e performance na versão 1.1.4 | 🟠 Média |
| **Backup quebrado** | Funcionalidade de backup nunca funciona — mostra loading por ~1 minuto e retorna | 🟠 Média |
| **MCP instabilidade** | MCP server causa freeze infinito em conversas | 🟠 Média |

### 😊 Feedback Positivo

- v1.1.4.post2 resolve problema crítico de approval em channels rapidamente
- Nova feature de audit workflow (PR #3740) bem recebida
- Iniciativa de adicionar testes (Vitest) demonstra maturidade do projeto

### 📊 Cenários de Uso Reportados

- **Deploy auto-hospedado**: Docker com network_mode: host + Ollama
- **Desktop**: Usuários Windows preferem console GUI
- **MCP integrations**: Bing Search, modelos locais via Ollama
- **Multi-agent**: Configurações de workspace com modelos vetoriais customizados

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta há Tempo

| # | Título | Criado | Idade | Prioridade |
|---|--------|--------|:-----:|:----------:|
| [#3795](https://github.com/agentscope-ai/QwenPaw/issues/3795) | MODEL_EXECUTION_FAILED frequente | 2026-04-24 | 2 dias | 🔴 Alta |
| [#3817](https://github.com/agentscope-ai/QwenPaw/issues/3817) | Config vetorial não persiste (Docker) | 2026-04-24 | 2 dias | 🔴 Alta |

### PRs em Longa Revisão

| # | Título | Criado | Idade | Status |
|---|--------|--------|:-----:|--------|
| [#3117](https://github.com/agentscope-ai/QwenPaw/pull/3117) | Semantic skill routing | 2026-04-08 | 18 dias | Under Review |
| [#2338](https://github.com/agentscope-ai/QwenPaw/pull/2338) | Persist UI language | 2026-03-26 | 31 dias | WIP Closed |
| [#3525](https://github.com/agentscope-ai/QwenPaw/pull/3525) | Discord thread creation | 2026-04-17 | 9 dias | Under Review |

---

## Métricas de Saúde do Projeto

| Indicador | Valor | Status |
|-----------|------:|:------:|
| Issues abertas (24h) | 13 | 🟢 |
| Issues fechadas (24h) | 1 | 🟢 |
| PRs abertos (24h) | 8 | 🟢 |
| PRs merged (24h) | 4 | 🟢 |
| Releases (24h) | 1 | 🟢 |
| Taxa de resolução (issues) | 7.1% | 🟡 |
| Tempo médio de resposta | <24h | 🟢 |

---

## Recomendação

**Prioridade imediata:** Resolver o problema de persistência de configurações (#3824, #3828, #3817) — afeta diretamente a usabilidade básica do produto e está gerando múltiplos reports duplicados.

**Próximos passos recomendados:**
1. Investigar root cause da dessincronização config.json/agent.json
2. Verificar compatibilidade Windows 1.1.4 (regressão de renderização)
3. Estabilizar funcionalidade de backup (#3821, #3827)
4. Avançar review de PRs críticos (#3819, #3813)

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-04-26

---

## 1. Panorama do dia

O projeto ZeroClaw apresenta **alta atividade** na data de hoje, com 50 issues e 47 PRs atualizados nas últimas 24h. Não houve novos lançamentos, embora o milestone v0.7.4 esteja em Tracking ativo. A comunidade demonstra foco em três eixos principais: (i) estabilidade do runtime — especialmente integrações com provedores como Ollama e DeepSeek-V4, (ii) evolução da infraestrutura multi-agente via RFC #5890 e schema v3 (#5947), e (iii) melhorias na experiência web UI. O volume de PRs em aberto (33) e a ausência de releases novas sugerem uma fase de consolidação pré-lançamento.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

| Release | Status | Observação |
|---------|--------|------------|
| — | — | Sem novos tags ou assets |

**Contesto:** O milestone `v0.7.4` está em rastreamento ativo ([#5877](https://github.com/zeroclaw-labs/zeroclaw/issues/5877)), com tarefas em aberto — incluindo a landing da skill `review-session`. O último release público foi a emergência v0.7.3 (que tratou de *broken tags blowout*, conforme #5877).

---

## 3. Progresso do projeto

### PRs abertos de maior impacto (por escopo)

| PR | Escopo | Tamanho | Risco | Destaque |
|----|--------|---------|-------|----------|
| [#5960](https://github.com/zeroclaw-labs/zeroclaw/pull/5960) | `onboard` | **XL** | medium | Rewrite completo do onboard — schema-driven, idempotente, DRY (8.534→múltiplos módulos) |
| [#5788](https://github.com/zeroclaw-labs/zeroclaw/pull/5788) | `i18n`, `docs` | **XL** | medium | Pipeline Mozilla Fluent + mdBook multilocale — quebrahandedly affecting todos os strings do runtime |
| [#6107](https://github.com/zeroclaw-labs/zeroclaw/pull/6107) | `agent/loop` | **M** | medium | Captura `reasoning_content` de streaming para DeepSeek V4 — corrige reject 400 em follow-ups |
| [#6035](https://github.com/zeroclaw-labs/zeroclaw/pull/6035) | `channels/acp` | — | **high** | Corrige formatação de output de tool calls no ACP server |
| [#6046](https://github.com/zeroclaw-labs/zeroclaw/pull/6046) | `memory` | — | low | Novo CLI `zeroclaw memory reindex` para backfill de embeddings NULL |
| [#5900](https://github.com/zeroclaw-labs/zeroclaw/pull/5900) | `infra` | — | low | `clear_messages` no `SessionBackend` — O(1) vs O(n²) para reset de sessão |

### PRs small-batch merged/fechados (limpeza e DX)

- [#6086](https://github.com/zeroclaw-labs/zeroclaw/pull/6086) — `allowed_path/allowed_paths` como aliases de `allowed_roots` (usabilidade de config)
- [#6098](https://github.com/zeroclaw-labs/zeroclaw/pull/6098) — Remove `tracker.rs` órfão de 566 linhas (dead code elimination)
- [#6109](https://github.com/zeroclaw-labs/zeroclaw/pull/6109) — Atualiza benchmark de binary size: ~8.8 MB → **5.1 MB** kernel-only
- [#6110](https://github.com/zeroclaw-labs/zeroclaw/pull/6110) — Corrige build badge (apontava para `ci-run.yml` inexistente)
- [#6106](https://github.com/zeroclaw-labs/zeroclaw/pull/6106) — Adiciona trigger FTS UPDATE para `sessions_fts` (full-text search não atualizava em streaming)
- [#6083](https://github.com/zeroclaw-labs/zeroclaw/pull/6083) — UI web: delete por mensagem, "Clear All", compact mode

---

## 4. Temas quentes da comunidade

### Issues e PRs com maior engajamento (comentários + reações)

| # | Tipo | Título | Comentários | Reações | Link |
|---|------|--------|-------------|---------|------|
| #4866 | bug | Web dashboard not available | **24** | 0 | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) |
| #5982 | feature | Per-sender RBAC for multi-tenant | 7 | 0 | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) |
| #5847 | bug | Document web_dist_dir & ZEROCLAW_WEB_DIST_DIR | 7 | 1 | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/5847) |
| #5947 | feature | schema v3 — batch breaking migrations | 6 | 0 | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/5947) |
| #6059 | bug | DeepSeek-V4 API incompatible | 6 | 1 | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6059) |
| #5459 | bug | Ollama hard-codes tool_count=0 | 3 | **4** | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/5459) |
| #4846 | bug | WhatsApp-Web Channel Broken | 4 | 1 | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/4846) |
| #5890 | rfc | Multi-agent UX flow — design | 5 | 0 | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/5890) |

**Análise dos temas quentes:**

1. **RBAC multi-tenant (#5982)** — Demanda real de ambientes produtivos: isolamento de workspaces, tool sets e rate limits por sender. Indica que ZeroClaw está sendo adotado em cenários corporativos/comerciais. Semelhante à issue #4846 (WhatsApp broken) indica que a base de usuários se diversifica em canais e permissões.

2. **Schema v3 (#5947)** — Merge blocker oficial. Todos os PRs pendentes de schema changes devem ser coordenados neste batch. Sinaliza que a API de config está em fase de maturação — breaking changes concentradas em um único ponto reduz impacto.

3. **DeepSeek-V4 (#6059, #6107)** — Incompatibilidade com thinking mode e follow-ups. O PR #6107 já aborda parte do problema (`reasoning_content`).用户的反馈 (SSDGADsss) indica uso ativo de DeepSeek-V4 em produção.

4. **Ollama native tool calling (#5459, #5962)** — A issue com **4 👍** é a mais votada do período. Corrigir `tool_count=0` é prioritário para quem usa Ollama localmente.

---

## 5. Bugs e estabilidade

### Por severidade

| Severidade | Descrição | Issue | Status | Link |
|------------|-----------|-------|--------|------|
| **S0** | ACP server not providing v1 schema (data loss/security) | #6100 | OPEN, blocked | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6100) |
| **S0** | Document web_dist_dir — variável sem documentação | #5847 | CLOSED | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/5847) |
| **S1** | Web dashboard not available | #4866 | CLOSED | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) |
| **S1** | WhatsApp-Web Channel Broken | #4846 | OPEN, in-progress | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/4846) |
| **S1** | No tool call found (custom provider) | #5941 | OPEN, in-progress | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/5941) |
| **S1** | Ollama Provider fails when tools needed | #5962 | OPEN | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/5962) |
| **S2** | DeepSeek-V4 incompatible (thinking mode) | #6059 | OPEN | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6059) |
| **S2** | install.sh não extrai web dashboard | #6096 | OPEN | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6096) |
| **S2** | Local image reading failed (skill path) | #6097 | OPEN | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6097) |
| **S2** | Cron UI blocked by security restrictions | #4857 | CLOSED | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/4857) |
| **S2** | --features rag-pdf silently disables PDF extraction | #6066 | CLOSED | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6066) |
| **S3** | Web UI Settings cursor misalignment | #6073 | OPEN | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6073) |
| **S3** | Dead duplicate tracker.rs (dead code) | #6094 | OPEN | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6094) |
| **S3** | Zeroclaw não sabe usar `zeroclaw cron` | #5862 | OPEN | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/5862) |

**Observações críticas:**
- **S0 #6100** — ACP server schema v1 ausente bloqueia clientes como `nori-cli`. Risco de segurança/interoperabilidade.
- **S1 Ollama (#5459, #5962)** — 2 issues S1 sobre o mesmo tema em paralelo; o bug `tool_count=0` é endêmico no provider.
- **S1 WhatsApp (#4846)** — Relacionado a feature flag `whatsapp-web` não habilitada por default no build. Documentação de build? O bug está em progresso.
- **S2 DeepSeek (#6059)** — Thinking mode da V4 quebra fluxo de tool calls; PR #6107 em curso mitiga `reasoning_content`.

---

## 6. Pedidos de features e sinais de roadmap

### Novas features em destaque

| # | Título | Escopo | Link | Sinal de roadmap |
|---|--------|--------|------|-----------------|
| #5982 | Per-sender RBAC for multi-tenant | `security` | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) | Multi-tenancy enterprise |
| #5890 | RFC: Multi-agent UX flow | `core`, `agent`, `config` | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/5890) | Iniciativa multi-agente v1 (#5891) |
| #5891 | Multi-agent v1 — tracker | `delegate`, `swarm`, `routing` | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/5891) | Consolidar issues do tema |
| #5947 | schema v3 — batch breaking migrations | `config` | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/5947) | Cleanup de API config |
| #6065 | ZeroClaw MCP to XCode | `enhancement` | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6065) | IDE integration |
| #6075 | Discord channel restrict to allowed_channels | `channel` | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6075) | Segurança multi-servidor |
| #6067 | Configurable reply-intent precheck (light model + timeout) | `channel` | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6067) | Performance de canais |
| #6077 | Clear agent chat window in Web UI | `gateway` | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6077) | UX web |
| #5318 | stream_mode=Partial: filtrar conteúdo de pensamento | `enhancement` | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/5318) | UX de streaming |
| #5930 | i18n prompt | `enhancement` | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/5930) | Internacionalização |

**Sinais de tendência:**
- **Multi-agente** é a maior iniciativa de features (#5890, #5891, #5982). A feature de RBAC per-sender é complementária.
- **i18n** avança via PR #5788 (Mozilla Fluent) — prompt i18n (#5930) pode se integrar nesse pipeline.
- **IDE integration** (XCode, #6065) sugere expansão além de CLI/chat para workflows de desenvolvimento.

---

## 7. Resumo de feedback dos usuários

### Dores reais reportadas

| Categoria | Manifestação | Evidência |
|-----------|-------------|-----------|
| **Onboarding quebrado** | Web dashboard não funciona out-of-the-box; `install.sh` não extrai assets; documentação de `web_dist_dir` inexistente | [#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866), [#6096](https://github.com/zeroclaw-labs/zeroclaw/issues/6096), [#5847](https://github.com/zeroclaw-labs/zeroclaw/issues/5847) |
| **Provider Ollama inútil para tool calling** | `tool_count=0` hard-coded — nenhum tool passa para modelos Ollama | [#5459](https://github.com/zeroclaw-labs/zeroclaw/issues/5459) (4 👍) |
| **Streaming UX imatura** | Conteúdo de "pensamento" aparece no stream quando não desejado; UI não tem como limpar erros | [#5318](https://github.com/zeroclaw-labs/zeroclaw/issues/5318), [#6077](https://github.com/zeroclaw-labs/zeroclaw/issues/6077) |
| **Segurança/confirmação em canais** | Ferramentas em `always_ask` silenciosamente negadas em Telegram; cron bloqueado na UI | [#2324](https://github.com/zeroclaw-labs/zeroclaw/issues/2324), [#4857](https://github.com/zeroclaw-labs/zeroclaw/issues/4857) |
| **DeepSeek-V4 incompatível** | Thinking mode causa reject 400 em follow-ups com tool calls | [#6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059) |

### Cenários de uso inferidos

- **Desenvolvedores locais** — usam Ollama, cron, web UI. Precisam de binaries pré-build funcionais (S2 #6096).
- **Usuários multi-canal** — Telegram, Discord, WhatsApp, Nextcloud Talk. Discord precisa de filtro de servidor (#6075); WhatsApp está quebrado (#4846).
- **Ambientes corporativos/enterprise** — pedem RBAC (#5982), multi-tenant isolation, ACP compliance (#6100).
- **Fluxo de IA + IDE** — caso de uso Xcode (#6065) indica interesse em usar ZeroClaw como copiloto de desenvolvimento.

---

## 8. Backlog que merece atenção

| # | Título | Criado | Atualizado | Comentários | Riscos |
|---|--------|--------|------------|-------------|--------|
| [#5890](https://github.com/zeroclaw-labs/zeroclaw/issues/5890) | RFC: Multi-agent UX flow | 2026-04-19 | 2026-04-25 | 5 | Sem decisão ainda; 7-day discussion period em curso |
|

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*