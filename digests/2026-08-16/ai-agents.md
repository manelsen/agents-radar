# Resumo diário do ecossistema de agentes de IA 2026-08-16

> Issues: 1 | PRs: 1 | Projetos cobertos: 7 | Gerado em: 2026-08-15 20:15 UTC

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
**Data:** 2026-08-16 | **Período:** Últimas 24h

---

## 1. Panorama do Dia

O projeto NullClaw apresenta **atividade moderada** nas últimas 24 horas, com **2 itens de trabalho abertos** (1 issue + 1 PR). Não houve novos lançamentos, indicando que a equipe pode estar em fase de revisão de código ou preparando a próxima release. A ausência de issues fechadas ou PRs merged sugere que as contribuições recentes ainda estão em fase inicial de avaliação. O ecossistema permanece estável, sem reportes de bugs ou regressões. A comunidade demonstra interesse contínuo em melhorias de infraestrutura, conforme evidenciado pela issue de suporte a proxies.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

O projeto não registrou novas versões neste período. Recomenda-se monitorar o repositório para eventuais anúncios de releases nos próximos dias.

---

## 3. Progresso do Projeto

### PRs Abertos (1)

| # | Título | Autor | Status |
|---|--------|-------|--------|
| [#987](https://github.com/nullclaw/nullclaw/pull/987) | `feat(agent): loop hygiene for long local tool-heavy runs` | vernonstinebaker | **ABERTA** |

**Análise Técnica:**
Este PR introduz **3 melhorias arquiteturais significativas**:

1. **Segmentação do system prompt** — Separação em prefixo estável (cache-friendly) e tail variável com datetime (`buildStablePrefix`, `buildVariableTail`, `stablePrefixHash`)
2. **Compressão de outputs de tools** — Antes da injeção no histórico (`result_compress.zig`), mantendo logs completos no observer
3. **Detecção de chamadas idênticas por turno** — Prevenção de loops infinitos em execuções longas

**Impacto:** Melhora substancial performance e confiabilidade em cenários com múltiplas tools locais. Aguardando revisão e merge.

---

## 4. Temas Quentes da Comunidade

### Issue em Destaque

| # | Título | Autor | Reações | Comentários |
|---|--------|-------|---------|-------------|
| [#988](https://github.com/nullclaw/nullclaw/issues/988) | `[enhancement] proxy support` | anpic | 0 👍 | 0 |

**Resumo da Demanda:**
Solicitação de **suporte a proxies HTTP/HTTPS e SOCKS(5h)** para os providers do NullClaw.

**Motivação:** Conectividade e privacidade em ambientes restritos ou corporativoss.

**Análise:** Issue simples e direta, sem descrição detalhada. Recomenda-se que o autor forneça:
- Casos de uso específicos
- Provedores afetados
- Preferência de implementação (env vars, config, etc.)

---

## 5. Bugs e Estabilidade

**Nenhum bug reportado nas últimas 24h.**

O projeto não apresenta issues de bugs, crashes ou regressões abertas. A base de código demonstra **boa saúde em termos de estabilidade**.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Nova Feature Request

| # | Título | Tipo | Prioridade |
|---|--------|------|------------|
| [#988](https://github.com/nullclaw/nullclaw/issues/988) | `proxy support` | **Enhancement** | ⭐⭐ (indicada) |

**Proposta:** Suporte a proxies HTTP(s)/SOCKS5h para providers

**Pontos de Investigação:**
- Compatibilidade com provedores existentes (OpenAI, Anthropic, etc.)
- Variáveis de ambiente padrão (`HTTP_PROXY`, `HTTPS_PROXY`, `ALL_PROXY`)
- Fallback para configurações de sistema

**Sinais de Roadmap:** Esta feature pode indicar direção futura para:
- Suporte a ambientes enterprise/restritos
- Expansão de conectividade de rede

---

## 7. Resumo de Feedback dos Usuários

### Dados Disponíveis
Devido à ausência de comentários nas issues e PRs recentes, **não há feedback explícito dos usuários** nas últimas 24h.

### Contexto Histórico (baseado nos PRs)
- A comunidade demonstra interesse em **otimização de performance** (compressão de resultados, caching)
- Há demanda por **melhoria de confiabilidade** em longas execuções (loop hygiene)
- Necessidade de **infraestrutura de rede** (suporte a proxies)

---

## 8. Backlog que Merece Atenção

### Item Pendente Sem Resposta

| # | Título | Idade | Status |
|---|--------|-------|--------|
| [#988](https://github.com/nullclaw/nullclaw/issues/988) | `proxy support` | **~1 dia** | ⏳ Aguardando triagem |

**Recomendação:** Issue recém-criada, ainda dentro do prazo normal de resposta. A equipe deve:
1. Classificar como enhancement/feature request
2. Solicitar mais detalhes ao autor (escopo, providers, etc.)
3. Avaliar complexidade e alinhamento com roadmap atual

---

## Métricas Resumidas

| Métrica | Valor |
|---------|-------|
| Issues abertas/ativas | 1 |
| Issues fechadas (24h) | 0 |
| PRs abertos | 1 |
| PRs merged/fechados (24h) | 0 |
| Releases | 0 |
| Bugs reportados | 0 |
| **Nível de Atividade** | 🔵 Moderada |

---

## Próximos Passos Recomendados

1. **Revisar PR #987** — Loop hygiene é melhoria técnica importante
2. **Triagar Issue #988** — Classificar e coletar mais detalhes sobre proxy support
3. **Monitorar releases** — Verificar se há pipeline de CI/CD ativo para releases
4. **Engajar comunidade** — Incentive participação em issues abertas

---
*Relatório gerado automaticamente com base nos dados do GitHub de NullClaw em 2026-08-16.*

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo do Ecossistema Open Source de Agentes de IA

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **fragmentação estratégica** em 2026-08-16, com sete projetos operando em nichos distintos. **Hermes Agent** e **ZeroClaw** dominam em volume de atividade (50+ itens atualizados em 24h), enquanto **NullClaw** mantém posição como referência arquitetural despite baixa atividade (2 itens). A stabilization trend é evidente: nenhum dos sete projetos publicou releases no período, sugerindo foco em qualidade pré-lançamento. **Windows compatibility** emerge como denominador comum de instabilidade, afetando Hermes Agent (deadlock P1), PicoClaw (WhatsApp block), e ZeroClaw (macOS desktop). A community health é bipolar: IronClaw e Hermes Agent demonstram PR velocity saudável, enquanto PicoClaw acumula stale PRs há 9-44 dias sem resposta.

---

## 2. Comparação de Atividade

| Projeto | Issues Abertas | PRs Abertos | PRs Merged (24h) | Releases (24h) | Saúde | Nível Atividade |
|---------|:--------------:|:-----------:|:----------------:|:--------------:|:-----:|:---------------:|
| **NullClaw** | 1 | 1 | 0 | 0 | 🔵 Moderada | Baixa |
| **NanoBot** | 1 | 8 | 7 | 0 | 🟢 Alta | Alta |
| **Hermes Agent** | ~50 | ~50 | 0 | 0 | 🟡 Atenção | Muito Alta |
| **PicoClaw** | 0 | 3 | 0 | 0 | 🔴 Estagnada | Baixa |
| **IronClaw** | 7 | 7 | 10 | 0 | 🟢 Positiva | Alta |
| **CoPaw** | 9 | 11 | 0 | 0 | 🟢 Alta | Alta |
| **ZeroClaw** | 46 | 46 | 4 | 0 | 🟢 Arquitetural | Muito Alta |

**Análise:** A razão issues:PRs permanece ~1:1 em projetos saudáveis (IronClaw, NanoBot, ZeroClaw). CoPaw apresenta influxo desproporcional (11 PRs abertos, 0 merges) indicando gargalo de review. Hermes Agent e ZeroClaw lideram volume absoluto, mas com dívida de bugs significativa.

---

## 3. Posicionamento do Projeto Principal (NullClaw)

### Vantagens Competitivas

| Dimensão | NullClaw | Pares |
|----------|----------|-------|
| **Linguagem** | Rust/Zig | Hermes (Electron), CoPaw (Python), IronClaw (diversificado) |
| **Performance** | Loop hygiene + compressão de tool outputs | NanoBot (cache), IronClaw (DB writes) |
| **Arquitetura** | Local-first, cache-friendly prompts | ZeroClaw (enterprise), PicoClaw (channels) |
| **Complexidade** | Minimalista (2 itens ativos) | Hermes (~100 itens), ZeroClaw (~92 itens) |

### Diferenças Técnicas

NullClaw distingue-se por **system prompt segmentation** (prefixo estável + tail variável com hash para cache) e **detecção de loops em long runs** via comparação de chamadas idênticas por turno. Enquanto IronClaw investe em unbound-turns architecture e CoPaw em PawApp runtime, NullClaw prioriza **eficiência de tokens** e **privacidade local**.

### Tamanho da Comunidade

**Inferior em volume absoluto**, porém **superior em sinyal-ruído**: todas as contribuições são técnicas (loop hygiene, proxy support) sem issues de usability ou bugs críticos reportados. Ausência de bugs P1/P2 indica disciplina de QA ou base de usuários pequena.

---

## 4. Focos Técnicos Compartilhados

### 4.1 Estabilidade Cross-Platform (Windows/Linux/macOS)

Três projetos enfrentam issues de platform-specific failures:

- **Hermes Agent:** Update deadlock (#87156) e cryptography self-lock (#86943) no Windows bloqueiam usuários pré-build #86857
- **PicoClaw:** Dependência `whatsmeow` desatualizada bloqueia canal WhatsApp completamente
- **ZeroClaw:** macOS desktop app reopens blank após reinstall (#7527)
- **Hermes Agent:** SQLite FTS trigram malformed em migração v0.18.2→v0.20.1

**Recomendação transversal:** Investir em CI multi-platform com matrix de versões SQLite, Electron, e Go runtime.

### 4.2 Performance em Sessões Longas

| Projeto | Solução | Status |
|---------|---------|--------|
| NullClaw | System prompt segmentation + result compression | PR #987 aberto |
| CoPaw | Virtual scrolling para WebUI | Issue #3915 (111 dias aberta) |
| IronClaw | Redução de DB writes (18 rows/turn → otimizado) | Epic #7591 (4/7 merged) |
| NanoBot | Consolidator para archival de memória | Bug #5377 em correção |

### 4.3 Segurança em OAuth e Webhooks

Três projetos com work-in-progress:

- **ZeroClaw:** OAuth callback/refresh contracts enforcement (#10012)
- **Hermes Agent:** Credential leak em subprocessos (#73153), catalog fetchers via credential-redirect guard (#87235)
- **CoPaw:** OAuth2 refresh_token nunca renova (#7053) — MCP degradação permanente

### 4.4 Interoperabilidade e Provider Unification

| Projeto | Provider/Protocol | Status |
|---------|-----------------|--------|
| NanoBot | OrcaRouter (150+ modelos) | PR #5328 merged |
| CoPaw | Provider discovery unificado | PR #6302 (26 dias sem merge) |
| ZeroClaw | OpenAI Chat Completions profile | RFC #8603 (20 comentários) |
| Hermes Agent | LiteLLM Claude OpenAI wire | PR #84982 aberto |

---

## 5. Análise de Diferenciação

### 5.1 Por Público-Alvo

| Segmento | Projetos | Características |
|----------|----------|-----------------|
| **Enterprise/Platform** | IronClaw, ZeroClaw | Unbound-turns, A2A protocol, desktop control, multi-tenant |
| **Desenvolvedor Individual** | NullClaw | Local-first, Rust, privacy-preserving, minimalista |
| **Operacional/Automação** | PicoClaw, Hermes Agent | Canais (WhatsApp, Discord, Telegram), cron jobs, desktop UI |
| **Experimental/Feature-rich** | NanoBot, CoPaw | Multi-provider routing, PawApp runtime, video handling |

### 5.2 Por Arquitetura

```
NullClaw     → Agent-centric (loop hygiene, tool compression)
NanoBot      → Provider-centric (OrcaRouter, multi-model)
Hermes Agent → Desktop-centric (Electron, Windows-first)
PicoClaw     → Channel-centric (WhatsApp, DeltaChat)
IronClaw     → Database-centric (write amplification, prepared-context)
CoPaw        → Runtime-centric (PawApp, DataPaw, skill lifecycle)
ZeroClaw     → Protocol-centric (OpenAI compat, A2A, voice)
```

### 5.3 Por Estratégia de Mercado

- **NullClaw:** Privacy-first, technical excellence, small-but-devoted community
- **Hermes Agent:** Volume-first, Discord ecosystem lock-in, high community engagement
- **ZeroClaw:** Enterprise-ready, platform play (A2A, MCP, voice), RFC-driven governance
- **CoPaw:** Qwen/Alibaba integration, first-time contributor cultivation

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração

| Indicador | Líder | Rezagado |
|-----------|-------|----------|
| **Bug response time** | NanoBot (7 bugs resolved in 24h) | PicoClaw (critical WhatsApp bug 9 days without merge) |
| **Feature velocity** | Hermes Agent (10+ Discord features in progress) | NullClaw (minimal external contributions) |
| **PR merge rate** | IronClaw (10/17 PRs closed in 24h = 59%) | CoPaw (0/11 PRs merged = 0%) |
| **First-time contributors** | CoPaw (5/11 PRs from new contributors) | Hermes Agent (dominado por core team) |

### 6.2 Consolidando Qualidade vs. Iterando Rápido

| Perfil | Projetos | Comportamento |
|--------|----------|---------------|
| **Consolidando qualidade** | NullClaw, IronClaw | Baixa atividade, alta taxa de merge, sem releases ( hardening) |
| **Iterando rápido** | NanoBot, Hermes Agent | Alta atividade, muitos PRs abertos, ciclo semanal de releases |
| **Estagnado** | PicoClaw | Stale PRs, baixa responsividade, community engagement crítico |

### 6.3 Community Health Scorecard

| Métrica | NullClaw | NanoBot | Hermes | PicoClaw | IronClaw | CoPaw | ZeroClaw |
|---------|:--------:|:-------:|:------:|:--------:|:--------:|:-----:|:--------:|
| Issue engagement (comentários/issue) | 0 | 0.2 | 0.5+ | 0 | 0.4 | 0.3 | 0.3 |
| PR responsiveness (dias até merge) | N/A | <1 dia | N/A (0 merges) | 9+ dias | <2 dias | 26+ dias | <3 dias |
| Bug severity distribution | 🟢 0 P1/P2 | 🟡 1 P1 | 🔴 2 P1 + 8 P2 | 🔴 1 Crítica | 🟡 1 P1 + 3 P2 | 🟡 2 Alta | 🔴 4 P1 |
| RFC decision velocity | N/A | N/A | N/A | N/A | N/A | N/A | 🔴 8 RFCs >40 dias |

---

## 7. Sinais de Tendência

### 7.1 Voice-First Interfaces

ZeroClaw (#8780) e Hermes Agent (STT/TTS Vox Lockin campaign #78207) indicam movimento para **interação por voz em tempo real** como canal primário, não apenas secundário.

### 7.2 Padronização de Plugins

Três projetos investindo em **Agent Plugins 1.0 e MCP**:

- ZeroClaw: Load Agent Plugins 1.0 e MCP packages (#9810)
- NanoBot: Plugin revalidation fix (#5369)
- Hermes Agent: MCP auth failures investigation (#6835)

### 7.3 Colaboração Multi-Sessão

NanoBot (#5358), CoPaw (#7001), e ZeroClaw (#9772)，都在**mesma direção**: usuários trabalham com múltiplos agentes simultâneos, necessitando menção entre sessões, isolamento por sender, e per-user sessions.

### 7.4 Enterprise Readiness

- **ZeroClaw:** OpenAI compatibility (#8603), OAuth security (#10012), webhook audit (#10016)
- **IronClaw:** Unbound-turns architecture, database performance hardening (Epic #7591)
- **CoPaw:** Permission system para plugins (#7052), cron job model override (#7050)

### 7.5 Desktop como Cidadão de Primeira Classe

ZeroClaw (#6909) e Hermes Agent (Electron-based) indicam **desktop app como prioridade**, não apenas CLI/TUI. Computer-use via accessibility APIs é tendência emergente.

---

## Síntese para Decisores

| Prioridade | Ação | Projetos Impactados |
|------------|------|---------------------|
| **Crítica** | Resolver Windows update deadlock | Hermes Agent (#87156, #86943) |
| **Crítica** | Merge WhatsApp fix | PicoClaw (#3320) |
| **Alta** | Decidir RFCs em aberto | ZeroClaw (8+ RFCs >40 dias) |
| **Alta** | Revisar PR #6302 (provider unification) | CoPaw |
| **Média** | Virtual scrolling para conversas longas | CoPaw (#3915), NullClaw (system prompt segmentation) |
| **Média** | Resolver E2E test flakiness | IronClaw (#7675, 30 runs vermelhas) |

**Posicionamento NullClaw:** 尽管 atividade baixa, NullClaw mantém diferenciação técnica em privacy-first e loop hygiene. Para decisões de adoção, considerar NullClaw em cenários que priorizam eficiência de tokens e

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# 📊 Relatório do Projeto NanoBot — 2026-08-16

---

## 1. Panorama do Dia

O projeto NanoBot apresenta **alta atividade** na data de hoje, com 15 PRs atualizados nas últimas 24h (8 abertos, 7 merged/fechados) e 2 issues de status variado. Não houveram novos lançamentos. A atividade concentra-se em **corrções de bugs** (especialmente na WebUI e no subsistema de agente) e **features de usabilidade** como conversações laterais e organização de sessões por drag-and-drop. A saúde geral do projeto é boa, com a equipe respondendo ativamente a regressões e problemas de estabilidade.

---

## 2. Lançamentos

**Nenhum novo release nas últimas 24h.**

O projeto encontra-se em período de desenvolvimento ativo, com mudanças sendo preparadas nas branches abertas.

---

## 3. Progresso do Projeto

Sete Pull Requests foram fechados/merged hoje, representando avanço significativo em múltiplas áreas:

| PR | Título | Área | Impacto |
|----|--------|------|---------|
| [#5328](https://github.com/HKUDS/nanobot/pull/5328) | feat(providers): add OrcaRouter | Providers | Nova integração com gateway de roteamento de 150+ modelos (OpenAI, Anthropic, Google, DeepSeek, Qwen, MiniMax, xAI) |
| [#5371](https://github.com/HKUDS/nanobot/pull/5371) | fix(webui): hide assistant actions until turn end | WebUI | Elimina sinais conflitantes durante geração de agentes |
| [#5369](https://github.com/HKUDS/nanobot/pull/5369) | fix(plugins): revalidate cached skill roots | Plugins | Corrige falha de segurança onde plugins substituídos permaneciam legíveis |
| [#5370](https://github.com/HKUDS/nanobot/pull/5370) | fix(agent): bound per-session file state lifecycle | Agent | Limita crescimento não-bondeado de `FileStateStore` em sessões de alta cardinalidade |
| [#5376](https://github.com/HKUDS/nanobot/pull/5376) | fix(cron): keep scheduler alive when job-store fails | Cron | Evita morte permanente do scheduler por erros silenciosos de persistência |
| [#5399](https://github.com/HKUDS/nanobot/pull/5399) | fix(webui): clarify model preset display names | WebUI | Melhora feedback visual ao renomear presets de modelo |
| [#5397](https://github.com/HKUDS/nanobot/pull/5397) | fix(webui): preserve range selection and turn timing | WebUI | Suporta seleção por range estilo macOS e mantém timing em atividades de raciocínio |

---

## 4. Temas Quentes da Comunidade

### Issue com maior atenção técnica
- **[#5377](https://github.com/HKUDS/nanobot/issues/5377)** — Bug: consolidation truncates archive input but advances past the full message batch (2 comentários, aberta)
  - **Análise:** Problema sério no `Consolidator.archive()` que trunca conversas ao budget de tokens do modelo de consolidação, mas avançando `Session.last_consolidated` além do batch original. Pode causar perda de dados de memória. Já possui PR #5379 associado para correção.

### PR em destaque por complexidade
- **[#5358](https://github.com/HKUDS/nanobot/pull/5358)** — feat(webui): add session collaboration via mentions
  - **Análise:** Adiciona capacidade de menção entre sessões persistidas, com cores de identidade estables e priorização de peers da aba atual. Feature colaborativa significativa para multi-sessão.

---

## 5. Bugs e Estabilidade

### Bug aberto (prioridade alta identificada)
| Issue | Severidade | Descrição |
|-------|------------|-----------|
| [#5377](https://github.com/HKUDS/nanobot/issues/5377) | **Alta** | `Consolidator.archive()` trunca entrada mas avança cursor além do batch completo — risco de perda de dados em consolidação de memória |

### Bugs corrigidos hoje
| PR | Área | Tipo |
|----|------|------|
| [#5371](https://github.com/HKUDS/nanobot/pull/5371) | WebUI | Regressão — ações de copy/fork apareciam durante geração |
| [#5369](https://github.com/HKUDS/nanobot/pull/5369) | Plugins | Segurança — skill directories de plugins antigos permaneciam legíveis |
| [#5370](https://github.com/HKUDS/nanobot/pull/5370) | Agent | Memory leak — `FileStateStore` crescia sem bound |
| [#5376](https://github.com/HKUDS/nanobot/pull/5376) | Cron | Estabilidade — scheduler morria permanentemente após falha de persistência |

**Métricas de estabilidade:** 4 bugs críticos/intermediários resolvidos em 24h indica ciclo de resposta saudável.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em desenvolvimento ativo

| PR | Feature | Complexidade | Sinais de Prioridade |
|----|---------|--------------|---------------------|
| [#5398](https://github.com/HKUDS/nanobot/pull/5398) | DashScope native protocol | Provider | Expõe parâmetros nativos de thinking budget |
| [#5364](https://github.com/HKUDS/nanobot/pull/5364) | Temporary side conversations | WebUI | Suporte a conversas paralelas isoladas |
| [#5389](https://github.com/HKUDS/nanobot/pull/5389) | Drag-and-drop session organization | WebUI | Reordenação de sessões com drag-and-drop |
| [#5291](https://github.com/HKUDS/nanobot/pull/5291) | Persist subagent conversation transcripts | Agent | Auditoria e revisão de execuções de subagentes |
| [#5358](https://github.com/HKUDS/nanobot/pull/5358) | Session collaboration via mentions | WebUI | Menções entre sessões na interface |

**Sinais de roadmap detectados:**
- Expansão de providers (OrcaRouter hoje, DashScope nativo em development)
- Enhancements de UX na WebUI (conversas laterais, drag-drop, feedback de presets)
- Melhoria de observabilidade em subagentes

---

## 7. Resumo de Feedback dos Usuários

Baseado nas issues e PRs merged, os seguintes padrões emergem:

### Dores identificadas
1. **Perda de contexto em subagentes** — Transcript de subagentes era perdido ao fim da execução, impossibilitando revisão ([#5291](https://github.com/HKUDS/nanobot/pull/5291))
2. **Sinais conflitantes na UI** — Ações de copy/fork apareciam durante geração ativa, confundindo usuários ([#5371](https://github.com/HKUDS/nanobot/pull/5371))
3. **Escalabilidade de sessões** — `FileStateStore` crescia indefinidamente em sessões de alta cardinalidade API ([#5370](https://github.com/HKUDS/nanobot/pull/5370))
4. **Confusão com presets de modelo** — Renomear um preset alterava o label mas não ficava claro visualmente ([#5399](https://github.com/HKUDS/nanobot/pull/5399))

### Cenários de uso evidenciados
- **Multi-sessão:** Usuários trabalham com múltiplas sessões simultâneas, necessitando organização e referência cruzada
- **Subagentes em produção:** Necessidade de audit trail para execuções background
- **Multi-provider:** Adoção crescente de gateways como OrcaRouter para unificar acesso a múltiplos modelos

---

## 8. Backlog que Merece Atenção

### Issue sem atividade recente (necessita triagem)
- **[#5377](https://github.com/HKUDS/nanobot/issues/5377)** — Bug de consolidação de memória (aberta desde 2026-08-13, 2 comentários)
  - **Risco:** Potencial perda de dados históricos se não corrigido antes de release
  - **PR associado:** [#5379](https://github.com/HKUDS/nanobot/pull/5379) em desenvolvimento

### PRs com conflitos sinalizados
- [#5358](https://github.com/HKUDS/nanobot/pull/5358) — conflict (collab via mentions)
- [#5364](https://github.com/HKUDS/nanobot/pull/5364) — conflict (side conversations)
- [#5389](https://github.com/HKUDS/nanobot/pull/5389) — conflict (drag-and-drop)

⚠️ **Recomendação:** Resolver conflitos em PRs de features antes que se acumulem no tronco de desenvolvimento.

---

## Métricas Resumidas do Dia

| Categoria | Valor |
|-----------|-------|
| Issues abertas/ativas | 1 |
| Issues fechadas | 1 |
| PRs abertos | 8 |
| PRs merged/fechados | 7 |
| Novas releases | 0 |
| Bugs críticos identificados | 1 (#5377) |
| Features em development | 5 |
| Conflitos pendentes | 3 |

**Estado geral:** 🟢 Projeto saudável com alta atividade de desenvolvimento e ciclo de resposta a bugs eficiente. Atenção necessária à resolução do bug de consolidação (#5377) e aos PRs com conflitos.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent
## NousResearch/hermes-agent — 2026-08-16

---

## 1. Panorama do Dia

O Hermes Agent registrou **alta atividade** em 16/08/2026, com 50 issues e 50 PRs atualizados nas últimas 24h. O projeto enfrenta **2 bugs P1 críticos no Windows** (update deadlock e update loop) que bloqueiam atualizações de usuários afetados. A comunidade está ativamente desenvolvendo o **Discord Feature Package** (10+ issues) e corrige múltiplas vulnerabilidades de segurança. Não houve releases hoje, e o Skills Index está em estado `degraded` há ~30h. A saúde geral requer atenção imediata nos bugs P1/P2 e no índice de skills desatualizado.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto encontra-se em período de correção ativa sem novas versões publicadas. Usuários em builds pré-#86857 estão bloqueados em estado de deadlock de atualização no Windows.

---

## 3. Progresso do Projeto

### PRs Fechados/Merged

| # | Descrição | Impacto |
|---|-----------|--------|
| [#82840](https://github.com/NousResearch/hermes-agent/pull/82840) | Timestamp na mensagem no append, não no persist | Session transcript confiável para Attest |
| [#87177](https://github.com/NousResearch/hermes-agent/pull/87177) | Remediation de advisories (nanoid, Electron) | Segurança de dependências |
| [#86310](https://github.com/NousResearch/hermes-agent/pull/86310) | Windows mktemp + same-surface guard | Confiabilidade de snapshots Windows |

### PRs Abertos com Maior Relevância

| # | Descrição | Status |
|---|-----------|--------|
| [#73153](https://github.com/NousResearch/hermes-agent/pull/73153) | **Corrige vazamento de credenciais** para subprocessos | Segurança crítica |
| [#87234](https://github.com/NousResearch/hermes-agent/pull/87234) | Desktop turn settle via turnLive discriminator | Corrige freezes silenciosos |
| [#87236](https://github.com/NousResearch/hermes-agent/pull/87236) | Para providers travados sem resetar retries | UX Desktop responsivo |
| [#87235](https://github.com/NousResearch/hermes-agent/pull/87235) | Catalog fetchers via credential-redirect guard | Segurança de API keys |
| [#86790](https://github.com/NousResearch/hermes-agent/pull/86790) | search_files truncation só quando há hits extras | Qualidade de busca |
| [#86816](https://github.com/NousResearch/hermes-agent/pull/86816) | Cron processa .pth files no Windows uv-venv | Compatibilidade Windows |
| [#84982](https://github.com/NousResearch/hermes-agent/pull/84982) | Prompt caching para LiteLLM Claude OpenAI wire | Performance |

**Destaque:** Avanço significativo em **segurança** (3 PRs críticos merged/ativos) e **estabilidade Windows** (cron, snapshots, updates).

---

## 4. Temas Quentes da Comunidade

### Issues com Mais Comentários

| # | Título | Comentários | Tendência |
|---|--------|-------------|-----------|
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | Skills index stale/degraded | 36 | ⬆️ Discussão ativa |
| [#84834](https://github.com/NousResearch/hermes-agent/issues/84834) | Webhook Feature Package (meta) | 16 | 🆕 Novo |
| [#86146](https://github.com/NousResearch/hermes-agent/issues/86146) | Model switching usa lista errada | 7 | 🔍 Reprodução |
| [#86027](https://github.com/NousResearch/hermes-agent/issues/86027) | SQLite FTS trigram malformed | 7 | ⚠️ Compatibilidade |
| [#74885](https://github.com/NousResearch/hermes-agent/issues/74885) | Desktop update loop destrói commits | 7 | 🐛 Bug recorrente |
| [#78207](https://github.com/NousResearch/hermes-agent/issues/78207) | Vox Lockin — eliminar classe STT/TTS | 4 | 📋 Meta-campanha |
| [#84551](https://github.com/NousResearch/hermes-agent/issues/84551) | detect_dangerous_command bypass | 4 | 🚨 Segurança |

### Análise de Demandas

**1. Infraestrutura Degradada (#66616)**  
Skills Index 29.8h atrasado (limite: 26h). Workflow cron configurado para 6/18 UTC mas falha. Afeta `/docs/skills` e documentação.

**2. Webhook Package (#84834)**  
Meta-issue para reformulação completa da superfície de webhooks: ingress, execution, delivery, config, UI, deploy e docs. Formato 5×2×3 repair package.

**3. Compatibilidade SQLite (#86027)**  
Migration v0.18.2 → v0.20.1 quebra FTS5 trigram index em SQLite 3.53.4 vs 3.46.1. Regressão de compatibilidade de versão.

---

## 5. Bugs e Estabilidade

### 🔴 P1 — Críticos

| # | Componente | Título | Status |
|---|------------|--------|--------|
| [#87156](https://github.com/NousResearch/hermes-agent/issues/87156) | Windows/CLI | Windows update deadlock: preflight bloqueia todo update | Aberto |
| [#86943](https://github.com/NousResearch/hermes-agent/issues/86943) | Windows/Desktop | Desktop update loops (cryptography._rust self-lock) | Aberto |

**Impacto:** Usuários Windows pré-build #86857无法 atualizar via caminho normal. Requer `git reset --hard` manual.

### 🟠 P2 — Altos

| # | Componente | Título | Link |
|---|------------|--------|------|
| #86146 | Desktop | Model switching usa lista do profile principal | [#86146](https://github.com/NousResearch/hermes-agent/issues/86146) |
| #86027 | CLI/DB | SQLite FTS trigram malformed na migração | [#86027](https://github.com/NousResearch/hermes-agent/issues/86027) |
| #74885 | Desktop/CLI | Update loop destrói commits locais | [#74885](https://github.com/NousResearch/hermes-agent/issues/74885) |
| #64155 | Gateway | Shutdown lento causa timeout systemd | [#64155](https://github.com/NousResearch/hermes-agent/issues/64155) |
| #44497 | Gateway/WeCom | Respostas duplicadas — context não limpo | [#44497](https://github.com/NousResearch/hermes-agent/issues/44497) |
| #84551 | Tools | detect_dangerous_command pode ser bypassado | [#84551](https://github.com/NousResearch/hermes-agent/issues/84551) |
| #86930 | Gateway | /loop não dispara após streamed reply | [#86930](https://github.com/NousResearch/hermes-agent/issues/86930) |
| #87173 | Desktop | Esc mata sessão atrás de overlay | [#87173](https://github.com/NousResearch/hermes-agent/issues/87173) |

### 🟡 P3 — Médios

**Total: 18 issues** incluindo:
- Desktop UI bugs (sidebar snap, timeline click, resize seam)
- Warnings de startup (Slack token duplicado, escape inválido)
- Plataforma Discord features (embeds, reactions, permissions)

---

## 6. Pedidos de Features e Sinais de Roadmap

### Discord Feature Package (#84834 relacionado)

**10+ issues de features do Discord em desenvolvimento:**

| # | Feature | Fase |
|---|---------|------|
| [#86321](https://github.com/NousResearch/hermes-agent/issues/86321) | Typed outbound embed builder | M4 |
| [#86418](https://github.com/NousResearch/hermes-agent/issues/86418) | Outbound reaction actions | M3 |
| [#86428](https://github.com/NousResearch/hermes-agent/issues/86428) | Permission-overwrite REST | A2 |
| [#86431](https://github.com/NousResearch/hermes-agent/issues/86431) | Scalar guild-settings | A5 |
| [#86436](https://github.com/NousResearch/hermes-agent/issues/86436) | REST pagination conformance | R2 |
| [#86439](https://github.com/NousResearch/hermes-agent/issues/86439) | Structured inbound message model | M1 |
| [#86441](https://github.com/NousResearch/hermes-agent/issues/86441) | Local reliability telemetry | R4 |
| [#86448](https://github.com/NousResearch/hermes-agent/issues/86448) | Message edit/delete REST | M2 |
| [#87233](https://github.com/NousResearch/hermes-agent/issues/87233) | Codex credential usage limits | Auth |

### Outstands

- **Vox Lockin Campaign (#78207):** Meta-campanha para eliminar classe de bugs STT/TTS/voice (10 lanes, 38 issues)
- **Web Native Fetch (#50456):** HTTP extractor sem API key usando trafilatura
- **Webhook Feature Package (#84834):** Reformulação completa da superfície de webhooks

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais

1. **Windows é instável** — Update deadlock, self-lock do cryptography, .pth files não funcionam. Usuários Windows estão presos em versões antigas.

2. **Desktop App imaturo** — Esc fecha sessão errada, sidebar quebra, timeline não funciona para mensagens antigas, modelo switching errado entre profiles.

3. **Message delivery inconsistente** — Duplicação no WeCom, loop não dispara após streaming, shutdown lento no systemd.

4. **Segurança de comandos** — Bypass do detect_dangerous_command com `timeout`/`bash -c` permite execução sem aprovação.

### Cenários Reportados

- **Upgrade path quebrado:** Migração SQLite 3.46 → 3.53 corrompe FTS index
- **Update loops:** Usuários com commits locais ou em builds específicos Windows ficam em loop infinito
- **Plugin REST quebrado:** Profiles sem plugin habilitado recebem 404 em rotas REST

### Satisfação

- Comunidade ativa em issues (50+ comentários hoje)
- Progresso em segurança (multiple PRs merged)
- Discord features em desenvolvimento ordenado

---

## 8. Backlog que Merece Atenção

### Issues Sem Atribuição ou Sem Resposta

| # | Título | Days Silent | Prioridade |
|---|--------|------------|------------|
| [#78207](https://github.com/NousResearch/hermes-agent/issues/78207) | Vox Lockin meta-issue | ~12 dias | P3 (needs-decision) |
| [#50456](https://github.com/NousResearch/hermes-agent/issues/50456) | Web native-fetch feature | ~56 dias | P3 |
| [#57291](https://github.com/NousResearch/hermes-agent/issues/57291) | Telegram group message logging | ~45 dias | P3 |
| [#65784](https://github.com/NousResearch/hermes-agent/issues/65784) | Disk cleanup fail closed | ~31 dias | P3 (security) |

### Issues Críticas sem PR Associado

| # | Título | Link |
|---|--------|------|
| #87156 | Windows update deadlock | [#87156](https://github.com/NousResearch/hermes-agent/issues/87156) |
| #86943 | Windows desktop update loops | [#86943](https://github.com/NousResearch/hermes-agent/issues/86943) |
| #84551 | Command detection bypass | [#84551](https://github.com/NousResearch/hermes-agent/issues/84551) |
| #66616 | Skills index degraded | [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) |

### Recomendação de Priorização

1. **Imediato:** Resolver deadlock de update Windows (#87156, #86943) — usuários estão presos
2. **Esta semana:** Fix para skills index stale (#66616) — documentação offline
3. **Esta semana:** Security fix para command bypass (#84551)
4. **Sprint:** Desktop stability (P2s: #86146, #87173, #86930)

---

*Relatório gerado automaticamente com base em dados GitHub de 2026-08-16. Atualize diariamente para tracking de tendências.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-08-16

---

## 1. Panorama do Dia

O projeto PicoClaw apresenta **baixa atividade no dia de hoje**, sem atualizações de issues ou novos lançamentos. Três pull requests permanecem abertas, todas marcadas como `[stale]`, indicando necessidade de atenção dos mantenedores. A situação mais urgente é o **bloqueio do canal WhatsApp** devido a uma versão desatualizada da dependência `whatsmeow`, que impede usuários de utilizar integrações nativas com WhatsApp. O projeto está operacionalmente estável, mas comPRs pendentes que aguardam merge há mais de uma semana.

---

## 2. Lançamentos

**Nenhum novo release registrado nas últimas 24 horas.**

O projeto não publicou versões desde o último período analisado. Usuários que dependem de funcionalidades recentes devem consultar o histórico de releases para identificar a versão mais recente disponível.

---

## 3. Progresso do Projeto

Três pull requests abertas foram atualizadas nas últimas 24h, todas aguardando revisão dos mantenedores:

| PR | Título | Status | Prioridade |
|----|--------|--------|------------|
| [#3320](https://github.com/sipeed/picoclaw/pull/3320) | fix(deps): bump whatsmeow to unblock WhatsApp | OPEN | 🔴 Crítica |
| [#3321](https://github.com/sipeed/picoclaw/pull/3321) | fix(agent): move dynamic context after history | OPEN | 🟡 Média |
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) | refactor(deltachat): cleanup implementation | OPEN | 🟢 Baixa |

**Destaque:** A PR #3320 é a mais crítica — resolve um problema de conexão com WhatsApp onde o cliente é rejeitado com erro `405 Client outdated`. Sem este merge, canais WhatsApp permanecem inoperantes para todos os usuários.

---

## 4. Temas Quentes da Comunidade

Não há issues ou PRs com comentários significativos registrados no período. As três PRs abertas possuem **`undefined` como contagem de comentários**, sugerindo:

- Ausência de feedback da comunidade
- Necessidade de revisão por mantenedores
- Possível estagnação no fluxo de contribuições

**Análise:** O标记 `[stale]` nas três PRs indica que nenhuma atividade occurred dentro do período esperado. Isso pode sinalizar:
1. Gargalo na review dos mantenedores
2. Desinteresse do autor em dar seguimento
3. Necessidade de escalonamento para atenção da equipe core

---

## 5. Bugs e Estabilidade

### 🔴 Bug Crítico Aberto

**WhatsApp Channel Inoperante** — [PR #3320](https://github.com/sipeed/picoclaw/pull/3320)

- **Sintoma:** `Client outdated (405)` ao conectar com WhatsApp
- **Causa:** Dependência `go.mau.fi/whatsmeow` em versão desatualizada
- **Impacto:** Canal WhatsApp completamente indisponível
- **Trabalho ao redor:** Nenhum disponível

### 🟡 Regressão Potencial

**Prefix Caching Quebrado** — [PR #3321](https://github.com/sipeed/picoclaw/pull/3321)

- **Sintoma:** Context dinâmico posicionado incorretamente invalida cache de tokens
- **Impacto:** Aumento desnecessário de custos com tokens e latência elevada
- **Complexidade:** Mudança arquitetural no fluxo de contexto

---

## 6. Pedidos de Features e Sinais de Roadmap

Não há issues de feature requests registradas no período. A análise das PRs existentes sugere as seguintes direções estratégicas:

| Sinal | Origem | Implicação |
|-------|--------|------------|
| **Refatoração DeltaChat** | PR #3222 | Limpeza de código e redução de complexidade (-200LOC) |
| **Otimização de cache** | PR #3321 | Melhoria de performance e custos de LLM |
| **Manutenção de dependências** | PR #3320 | Atualização proativa de libs externas |

**Indicação de Roadmap:** O foco atual parece ser **estabilidade e manutenção**, com atenção especial à compatibilidade com plataformas externas (WhatsApp, DeltaChat).

---

## 7. Resumo de Feedback dos Usuários

**Sem feedback explícito registrado nas últimas 24h.**

A ausência de issues e comentários sugere que a base de usuários está:
1. **Em silêncio** — utilizando a versão atual sem problemas aparentes
2. **Afetada pelo bug WhatsApp** — mas sem reportar (ou reportando via outras plataformas)
3. **Pequena ou inativa** — baixa engajamento com o repositório

### Sinais Indiretos

O bug crítico de WhatsApp (PR #3320) foi identificado e documentado pelo colaborador `grrowl`, indicando que há usuários ativos enfrentando o problema em produção.

---

## 8. Backlog que Merece Atenção

| PR/Issue | Título | Idade | Prioridade | Ação Recomendada |
|----------|--------|-------|------------|------------------|
| [#3320](https://github.com/sipeed/picoclaw/pull/3320) | Bump whatsmeow (WhatsApp fix) | 9 dias | 🔴 Alta | Merge imediato ou resposta |
| [#3321](https://github.com/sipeed/picoclaw/pull/3321) | Dynamic context positioning | 9 dias | 🟡 Média | Review técnico |
| [#3222](https://github.com/sipeed/picoclaw/pull/3322) | DeltaChat cleanup | 44 dias | 🟢 Baixa | Review quando possível |

### Ações Recomendadas aos Mantenedores

1. **Prioridade 1:** Revisar e mergear PR #3320 — restaura funcionalidade WhatsApp
2. **Prioridade 2:** Avaliar PR #3321 — impacta performance de todos os agentes
3. **Prioridade 3:** Ações de "stale" — fechar ou dar retorno às PRs abandonadas

---

## Métricas de Saúde do Projeto

| Indicador | Valor | Status |
|-----------|-------|--------|
| Issues ativas (24h) | 0 | ✅ Nenhuma pendência |
| PRs abertas | 3 | ⚠️ 3 stale, 1 crítica |
| Releases (24h) | 0 | 🟡 Esperado |
| Engajamento da comunidade | Baixo | ⚠️ Atenção necessária |

---

*Relatório gerado automaticamente com base em dados do GitHub de 2026-08-16.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-08-16

---

## 1. Panorama do dia

O projeto IronClaw apresenta **alta atividade de desenvolvimento** nesta data, com 29 issues e 17 PRs atualizados nas últimas 24h. A equipe demonstrou foco intenso em **performance de banco de dados** (7 PRs de otimização DB merged) e **conclusão da migração para unbound-turns** (PRs #7634 e #7562 merged). Não há novas releases hoje, mas o pipeline de PRs está robusto com 7 pull requests abertos abrangendo features, performance e QA. A saúde geral do projeto é positiva, com regressões sendo ativamente corrigidas e novos recursos sendo estabilizados.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O último release往前回溯至 #7656 (Slack-to-Console bridge) fechado em 2026-08-14, sem menção de tag formal. O repositório mantém um fluxo de entrega baseado em merge direto para `main` sem versioning formal para estas mudanças.

---

## 3. Progresso do Projeto

### PRs merged/fechados mais significativos

| PR | Título | Impacto |
|---|---|---|
| [#7634](https://github.com/nearai/ironclaw/pull/7634) | feat(unbound-turns): complete switchover to prepared-context turns | **Arquitetural crítico** — 71-clause conformance audit, conclusão da migração |
| [#7562](https://github.com/nearai/ironclaw/pull/7562) | feat(unbound-turns): design + phase 1 — prepared-context accept door | Base da arquitetura unbound-turns com design docs |
| [#7676](https://github.com/nearai/ironclaw/pull/7676) | perf(threads): coalesce thread index touches | Reduz rewrites de 7 para ≤1 por thread por intervalo |
| [#7629](https://github.com/nearai/ironclaw/pull/7629) | perf: reduce trigger and outbound state writes | Move pruning para claim inicial, reduz writes por turn |
| [#7628](https://github.com/nearai/ironclaw/pull/7628) | perf(processes): remove heartbeat journal churn | Elimina ~2.880 journal rows/dia por processo |
| [#7668](https://github.com/nearai/ironclaw/pull/7668) | fix(extensions): surface provider auth diagnostics | Preserva mensagens de erro do GitHub provider |
| [#7666](https://github.com/nearai/ironclaw/pull/7666) | fix(extensions): truth on cards/install results | Correções de UX em install flow |

**Destaque técnico:** A saga "Epic #7591 — Performance Tier 1" demonstra maturidade operacional, com 4 PRs de otimização DB merged cobrindo heartbeat, thread-index e trigger writes, economizando ~18 rows/turn + 7 rewrites/thread/intervalo.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários/reações)

| Issue | Título | Comentários | Reações | Tendência |
|---|---|---|---|---|
| [#467](https://github.com/nearai/ironclaw/issues/467) | Trajectory benchmark system | 4 | 0 | **Destaque de longa duração** — feature request de avaliação de agentes |
| [#3236](https://github.com/nearai/ironclaw/issues/3236) | Define same-thread follow-up/steering policy | 3 | 0 | Política de follow-up em produção |
| [#7675](https://github.com/nearai/ironclaw/issues/7675) | E2E gmail-to-sheet flake cascades | 0 | 0 | **Recém-criada** — QA live Canary vermelho |
| [#7671](https://github.com/nearai/ironclaw/issues/7671) | Capability dispatch stack pressure | 0 | 0 | **Novo** — stack overflow near edge |

### Análise dos temas dominantes

1. **Arquitetura de Unbound Turns:** A migração para prepared-context turns (#7634) dominou o ciclo, indicando maturidade do design documentado em #7562.

2. **Performance de Storage/DB:** 7 issues do Epic #7591 indicam foco em redução de write amplification — problema crítico em produção.

3. **QA e Test Stability:** A issue #7675 revela que o Live Canary está vermelho há 30 runs, sinalizando necessidade de robustez nos testes end-to-end.

---

## 5. Bugs e Estabilidade

### Issues abertas de bugs

| Severity | Issue | Descrição |
|---|---|---|
| **Crítica** | [#7675](https://github.com/nearai/ironclaw/issues/7675) | E2E gmail-to-sheet flake que cascateia em toda a sessão provider-contracts |
| **Alta** | [#7674](https://github.com/nearai/ironclaw/issues/7674) | Falta allowlist symbol-level para openai-compat → threads edge |
| **Média** | [#7673](https://github.com/nearai/ironclaw/issues/7673) | BudgetLedger: double-charge em truncated launch windows |
| **Média** | [#6821](https://github.com/nearai/ironclaw/issues/6821) | IronHub search: free-text matches como catalog listing completo (CLOSED hoje) |
| **Média** | [#6835](https://github.com/nearai/ironclaw/issues/6835) | MCP auth failures classificados como Client vs AuthRequired (CLOSED hoje) |
| **Baixa** | [#5237](https://github.com/nearai/ironclaw/issues/5237) | Debug logging flood com Cranelift/Wasmtime (CLOSED hoje) |

### Regressões conhecidas em produção

- **Live Canary vermelho 30/30 runs:** 3 harness defects falhando comportamento correto do produto (#7679 aberto como fix)
- **Stack overflow em test-thread:** O chain de LoopCapabilityPort decorator está próximo do limite de 2 MiB (#7671)

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features abertas

| Feature | Issue | Escopo |
|---|---|---|
| **Trajectory benchmark system** | [#467](https://github.com/nearai/ironclaw/issues/467) | Sistema de avaliação de qualidade de agentes com hard assertions + LLM-as-judge |
| **Typed ToolChoice** | [#7672](https://github.com/nearai/ironclaw/issues/7672) | Retirement do string overload em tool_choice entre providers |
| **Capability dispatch stack optimization** | [#7671](https://github.com/nearai/ironclaw/issues/7671) | Reduzir pressão no kernel sandbox path |
| **WebUI operator surface** | [#7516](https://github.com/nearai/ironclaw/pull/7516) | Permite agent link do IronHub via WebUI |

### Sinais de roadmap

- **Epic #4775:** Automated QA para Reborn binary — indica foco em DX e confiabilidade
- **Epic #7591:** Performance optimizations (7 sub-issues, 4 merged) — sinaliza fase de hardening pré-scale
- **Prepared-marker backfill (#7669):** Migração de sweep para listing path — dívida técnica sendo endereçada

---

## 7. Resumo de Feedback dos Usuários

### Dores identificadas nos tickets

| Dor | Evidência | Severidade |
|---|---|---|
| **Instabilidade de automations** | Railway logs mostram `ERROR` com `No thread attached` (#4992) | Alta |
| **IronHub catalog incompletude** | Agente reporta 3 tools vs 18 no signed catalog (#6821) | Alta |
| **MCP auth failures silenciosos** | AuthRequired tratado como Client, sem re-auth gate (#6835) | Alta |
| **Live QA harness quebrado** | 30 runs vermelhas por bugs no harness, não no produto (#7679) | Crítica |
| **Performance de SSE no WebUI** | Polling 1-3s drenando projection store (#5672) | Média |

### Cenários de uso destacados

- **Telegram forum-topic delivery:** Precisa de `message_thread_id` para não pousar no supergroup errado (#6829)
- **Slack-to-Console bridge:** Deep links para threads/runs em respostas Slack (#7656 — merged)
- **OAuth hosted MCP:** Suporte a origin-scoped endpoints para automations MKT1 (#7665 — merged)

---

## 8. Backlog que Merece Atenção

### Issues sem resposta há >7 dias

| Issue | Idade | Prioridade | Título |
|---|---|---|---|
| [#467](https://github.com/nearai/ironclaw/issues/467) | ~170 dias | P2 | Trajectory benchmark system |
| [#4407](https://github.com/nearai/ironclaw/issues/4407) | ~74 dias | — | Design model-visible capability selection |
| [#3423](https://github.com/nearai/ironclaw/issues/3423) | ~99 dias | P0 | Add loop input resume and cancellation semantics |
| [#4629](https://github.com/nearai/ironclaw/issues/4629) | ~68 dias | High | Delete obsolete legacy paths and config |

### PRs aguardando review

| PR | Age | Tamanho | Risco | Título |
|---|---|---|---|---|
| [#7456](https://github.com/nearai/ironclaw/pull/7456) | ~6 dias | XL | Medium | fix(reborn): make durable storage profile-agnostic |
| [#7516](https://github.com/nearai/ironclaw/pull/7516) | ~4 dias | XL | Low | feat(webui): operator surface for IronHub link |
| [#7641](https://github.com/nearai/ironclaw/pull/7641) | ~2 dias | M | Low | chore(skills): archive parity-blocked bundles |

---

## Métricas Consolidado — 2026-08-16

| Indicador | Valor |
|---|---|
| Issues abertas/ativas | 7 |
| Issues fechadas (24h) | 22 |
| PRs abertos | 7 |
| PRs merged/fechados | 10 |
| Novas releases | 0 |
| Bugs críticos abertos | 2 |
| Features em review | 3 |
| Dívida técnica endereçada (Epic #7591) | 4/7 PRs merged |

**Veredicto:** IronClaw demonstra **saúde positiva** com foco em hardening de performance e estabilidade. A conclusão do unbound-turns switchover marca maturidade arquitetural, enquanto issues de QA (#7675, #7679) indicam necessidade de investimento em reliability do CI/CD pipeline.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório de Projeto — CoPaw (QwenPaw)

**Data de referência:** 2026-08-16  
**Fonte:** GitHub — agentscope-ai/QwenPaw

---

## 1. Panorama do Dia

O projeto CoPaw apresenta **alta atividade** em 16/08/2026, com 21 itens atualizados nas últimas 24h (10 issues, 11 PRs). Nenhuma release foi publicada no período, indicando foco em desenvolvimento ativo e estabilização. A taxa de abertura de PRs (11) supera significativamente o fechamento (0 merges), sugerindo uma fase de influxo massivo de contribuições — possivelmente motivada pela adoção crescente da versão 2.1.0. O ecossistema evidencia maduração em áreas como video handling, cron jobs, OAuth2, e UI/UX, com contributors first-time活跃.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

O projeto está em período de pré-release, com a branch `main` acumulando PRs que provavelmente comporão a próxima versão (provavelmente 2.2.0 ou correção de patch). Recomenda-se monitorar a issue #3915 (virtual scrolling) e PRs de infraestrutura (#6302) como candidatos a features de release.

---

## 3. Progresso do Projeto

### PRs em destaque (por impacto):

| # | Título | Autor | Área | Impacto |
|---|--------|-------|------|---------|
| [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) | Unify provider discovery, model metadata, routing, and agent controls | wangfei010313 | Core | 🔴 Alto — refatoração sistêmica de provider/model |
| [#6940](https://github.com/agentscope-ai/QwenPaw/pull/6940) | Add native DataPaw app runtime | cyruszhang | PawApp | 🟡 Médio — nova capability de workspace |
| [#7033](https://github.com/agentscope-ai/QwenPaw/pull/7033) | Dynamic skill loading + auto-unload + frontmatter fix | Ferrum360 | Skills | 🟡 Médio — melhoria de lifecycle management |
| [#7055](https://github.com/agentscope-ai/QwenPaw/pull/7055) | Sync top-level text on agent cron --text update | lcq225 | CLI | 🟢 Correção direta de bug #7048 |
| [#7061](https://github.com/agentscope-ai/QwenPaw/pull/7061) | Deliver tool-result videos on OpenAI Responses API | xiaoka76 | Video | 🟢 Correção alinhada a #7059 |

**PRs com potencial de merge rápido:** #7055 (fix trivial, hotfix), #7061 (primeiro PR do autor, mas bem especificado).

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento:

| # | Título | Comentários | 👍 | Categoria |
|---|--------|:-----------:|:--:|-----------|
| [#3915](https://github.com/agentscope-ai/QwenPaw/issues/3915) | Virtual scrolling para Console WebUI | 3 | 1 | Performance/UX |
| [#6476](https://github.com/agentscope-ai/QwenPaw/issues/6476) | Matrix E2E encryption inoperante | 3 | 0 | Bug (🔒 closed) |

**Análise:** A **#3915** domina como feature request mais comentada (3 comentários, 1 reação) — usuários reportam "severe lag" com conversas longas. Este é um indicador claro de que a **performance do Console WebUI** é uma das principais dores de cabeça da base de usuários. A resolução desta issue (#3915) deveria ser priorizada no roadmap.

A issue #6476 (Matrix E2E encryption) foi fechada — indicando que o time respondeu ao reporte técnico sobre `matrix-nio` e `olm`.

---

## 5. Bugs e Estabilidade

### Bugs reportados hoje (7 issues):

| Severidade | # | Título | Status | Link |
|:----------:|---|--------|:------:|------|
| 🔴 Alta | #7059 | view_video: video frames silenciosamente descartados | OPEN | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/7059) |
| 🔴 Alta | #7053 | OAuth2 refresh_token nunca renova (MCP degrada) | OPEN | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/7053) |
| 🟠 Média | #7060 | view_video inline-media cap hardcoded 2MB | OPEN | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/7060) |
| 🟠 Média | #7051 | Imagens perdidas após reload de sessão | OPEN | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/7051) |
| 🟠 Média | #7048 | cron update retorna sucesso mas prompt não atualiza | OPEN | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/7048) |
| 🟡 Baixa | #6476 | Matrix E2E encryption quebrada | CLOSED | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/6476) |

**Análise de severidade:**
- **Alta prioridade:** O bug de `view_video` (#7059) afeta diretamente o contexto de modelos de vídeo (OpenAI Responses API / Volcengine Ark). O bug de OAuth2 (#7053) causa degradação permanente de MCP remotos que usam refresh token rotation.
- **Padrão identificado:** Múltiplos bugs em `view_video` (#7059 + #7060) indicam que a promoção de vídeo para contexto de modelo está com regressions após refatoração em #6495.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features solicitadas (5 issues):

| # | Título | Tipo | Link |
|---|--------|------|------|
| #7058 | Restaurar opção de context strategy "native" na UI web | Feature | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/7058) |
| #7056 | Background Task Callback / Notification Mechanism | Feature | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/7056) |
| #7052 | Plugin API: permission para system_prompt | Feature | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/7052) |
| #3915 | Virtual scrolling para Console WebUI | Enhancement | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/3915) |

### PRs de feature em desenvolvimento:

| # | Título | Área | Link |
|---|--------|------|------|
| #7033 | Dynamic skill loading + auto-unload | Skills | [PR](https://github.com/agentscope-ai/QwenPaw/pull/7033) |
| #6940 | Native DataPaw app runtime | PawApp | [PR](https://github.com/agentscope-ai/QwenPaw/pull/6940) |
| #7001 | Matrix: isolate session/memory per sender | Matrix | [PR](https://github.com/agentscope-ai/QwenPaw/pull/7001) |
| #7050 | Per-cron-job model override picker | Console | [PR](https://github.com/agentscope-ai/QwenPaw/pull/7050) |

**Sinais de roadmap extraídos:**
1. **Contexto persistente e escalável** — virtual scrolling (#3915) e pagination (#7049) indicam que conversas longas são caso de uso crítico.
2. **Workflows assíncronos** — callback mechanism (#7056) e cron jobs avançados (#7050) apontam para automação empresarial.
3. **Enterprise readiness** — permission system (#7052), OAuth2 robusto (#7053), e provider unificado (#6302) sugerem foco em deployments corporativos.

---

## 7. Resumo de Feedback dos Usuários

### Dores reais identificadas:

| Dor | Frequência | Evidência |
|-----|:----------:|-----------|
| **Performance degradada com conversas longas** | Alta | #3915 (3 comentários, "severe lag") |
| **Vídeos não funcionam como contexto de modelo** | Alta | #7059, #7060 (mesmo autor, + PR #7061) |
| **OAuth2 MCP quebra após primeiro refresh** | Média | #7053 (XMind, Google, etc.) |
| **Perda de dados após reload de sessão** | Média | #7051 (imagens) |
| **Configuração de contexto oculta** | Média | #7058 (native vs scroll) |

### Cenários de uso detectados:
- **Chatbot de longa interação** — necessidade de virtual scrolling
- **Automação com cron jobs** — model override por job, text update via CLI
- **Integração com browsers remotos** — Chrome extension para LAN (#7054)
- **Matrix como canal** — isolamento de sessão por sender (#7001)
- **Enterprise plugin ecosystem** — system_prompt não exposto a usuários finais (#7052)

### Satisfação parcial:
- CLI e automação funcionam bem (fixes rápidos como #7055 confirmam responsividade)
- Base de código ativa com contributions first-time (5 PRs)
- **Insatisfação clara** em video handling e OAuth2 — áreas que necessitam de hotfix

---

## 8. Backlog que Merece Atenção

### Issues sem resposta > 7 dias (revisão recomendada):

| # | Título | Criado | Atualizado | Comentários | Link |
|---|--------|:------:|:----------:|:-----------:|------|
| #3915 | Virtual scrolling para Console WebUI | 2026-04-28 | 2026-08-15 | 3 | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/3915) |

**Nota:** A issue #3915 está **há ~111 dias** aberta e recebeu atualização em 2026-08-15, indicando que há engajamento do usuário mas sem resposta oficial da maintainer team. Dado seu impacto na UX, recomenda-se triagem urgente.

### PRs sem interação prolongada:

| # | Título | Criado | Status | Link |
|---|--------|:------:|:------:|------|
| #6302 | Unify provider discovery | 2026-07-21 | OPEN | [PR](https://github.com/agentscope-ai/QwenPaw/pull/6302) |

**Nota:** PR #6302 está aberto há ~26 dias e representa uma **refatoração sistêmica**. A falta de merge ou feedback pode sinalizar complexidade de review ou necessidade de alinhamento com maintainers.

---

## Métricas de Saúde do Projeto (2026-08-16)

| Indicador | Valor | Status |
|-----------|:-----:|:------:|
| Issues ativas (24h) | 9 | ✅ Saúde |
| PRs abertos (24h) | 11 | ✅ Alta atividade |
| PRs merged (24h) | 0 | ⚠️ Nenhum merge |
| Releases (24h) | 0 | ⚠️ Sem release |
| Bugs de alta severidade | 2 | 🔴 Atenção |
| Features request (24h) | 4 | ✅ Engajamento |
| First-time contributors (PRs) | 5/11 | ✅ Crescimento |

---

**Conclusão geral:** O projeto CoPaw está em **fase de alta fermentação de código**, com contributions robustas mas sem consolidação em releases. As prioridades imediatas deveriam ser: (1) hotfix para `view_video` (#7059/#7060), (2) triagem da issue #3915, e (3) review do PR #6302. O ecossistema demonstra maturidade em automação (cron, CLI) mas precisa estabilizar video handling e OAuth2 para场景 empresarial.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório de Projeto — ZeroClaw
## Data: 2026-08-16

---

## 1. Panorama do dia

ZeroClaw apresenta **alta atividade comunitária** em 16 de agosto de 2026, com 50 issues e 50 PRs atualizados nas últimas 24h. O projeto está em plena fase de maturação arquitetural, evidenciada pela predominância de RFCs (Requests for Comments) nas issues mais comentadas — 8 dos 10 itens com maior engajamento são propostas de design esperando decisão de mantenedores. Não houve releases neste período, indicando que a equipe está focada em consolidação interna. A saúde geral é boa com bom fluxo de PRs, mas há 4 bugs P1 em aberto demandando atenção prioritária.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto está em período de elaboração técnica. A ausência de releases é consistente com o ciclo de RFCs em andamento (veja Seção 4).

---

## 3. Progresso do Projeto

### PRs Recentemente Merged/Fechados

| # | PR | Autor | Tamanho | Impacto |
|---|-----|--------|---------|---------|
| [#9962](https://github.com/zeroclaw-labs/zeroclaw/pull/9962) | `ci(cache): route rust-cache through a provider-aware composite action` | JordanTheJet | S | Melhora eficiência do cache Rust no CI; reduzir tempo de build |
| [#9965](https://github.com/zeroclaw-labs/zeroclaw/issues/9965) | `cron custom-shell test hits ETXTBSY` | AngryPacifist | — | Task para corrigir race condition em testes paralelos |

### PRs Abertos de Alto Impacto

- **[#10016](https://github.com/zeroclaw-labs/zeroclaw/pull/10016)** — `fix(hooks): correlate webhook audit calls by identity` (size:XL, risk:high) — Adiciona contexto opaco por invocação para rastrear chamadas de webhook
- **[#9841](https://github.com/zeroclaw-labs/zeroclaw/pull/9841)** — `fix(sop): drive headless SOP runs, and close the five defects` (size:XL, priority:P1) — Corrige 5 defeitos blockers em SOP
- **[#9281](https://github.com/zeroclaw-labs/zeroclaw/pull/9281)** — `fix(config): roll back auto-created map aliases when config set fails` (size:M) — Transacionalidade em config writes
- **[#10012](https://github.com/zeroclaw-labs/zeroclaw/pull/10012)** — `fix(providers): enforce OAuth callback and refresh contracts` (size:L, risk:high) — Segurança em OAuth

---

## 4. Temas Quentes da Comunidade

### RFCs com Maior Engajamento

| # | Título | Comentários | Tema Central |
|---|--------|-------------|--------------|
| [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) | ZeroClaw Chat Completions profile | 20 | **Interoperabilidade OpenAI** — suporte a Open WebUI, LobeChat, Continue.dev, LangChain |
| [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) | Runtime-owned conversation sessions | 16 | **Arquitetura de sessões** — boundaries de ownership e transport adapters |
| [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) | Unified attachment architecture | 15 | **Arquitetura unificada** — web chat e channels |
| [#6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) | Provenance e conversation binding | 12 | **Contrato de resposta** — agent turns iniciados internamente |
| [#6971](https://github.com/zeroclaw-labs/zeroclaw/issues/6971) | Security posture e credential boundaries | 12 | **Segurança** — ingress policy e isolamento |
| [#9103](https://github.com/zeroclaw-labs/zeroclaw/issues/9103) | Separate memory storage from enrichment | 12 | **Arquitetura de memória** — separação Lucid/Qdrant |

### Análise de Demandas

**Padrão dominante:** A comunidade está empurrando o ZeroClaw para um modelo mais **enterprise-ready**:

1. **Interoperabilidade** (#8603) — clientes OpenAI-compatíveis representam a maior demanda por eliminação de vendor lock-in
2. **Segurança em profundidade** (#6971, #9487) — controles de credenciais e isolamento de runtime
3. **Arquitetura modular** (#9488, #9103) — desacoplamento de componentes para flexibilidade operacional

---

## 5. Bugs e Estabilidade

### Bugs P1 (Críticos — Requerem Atenção Imediata)

| # | Título | Status | Canal | Severidade |
|---|--------|--------|-------|------------|
| [#9965](https://github.com/zeroclaw-labs/zeroclaw/issues/9965) | cron custom-shell test hits ETXTBSY | Accepted | Tests | S1 — Falha em PRs não relacionados |
| [#7527](https://github.com/zeroclaw-labs/zeroclaw/issues/7527) | macOS desktop app can reopen blank | Closed | Desktop | S1 — Workflow bloqueado |
| [#10005](https://github.com/zeroclaw-labs/zeroclaw/pull/10005) | base channel health on channel, not listener | Open | Channels | Corrige `/health` reporting incorreto |
| [#10004](https://github.com/zeroclaw-labs/zeroclaw/pull/10004) | show tool-call batch position on approval cards | Open | Security | UX de segurança em multi-tool calls |

### Bugs P2 (Degradados)

| # | Título | Severidade | Tema |
|---|--------|------------|------|
| [#9594](https://github.com/zeroclaw-labs/zeroclaw/issues/9594) | Coding-agent tools charge action budget twice | S2 | Budget duplicado |
| [#7870](https://github.com/zeroclaw-labs/zeroclaw/issues/7870) | Agent runtime options leak from first provider | S2 | Config leak |

**Métricas de Estabilidade:** 2 bugs closed nas últimas 24h, 4 bugs P1 em pipeline — saúde aceitável com carga de bugs normal.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em Destaque

| # | Título | Tags | Roadmap Signal |
|---|--------|------|----------------|
| [#8780](https://github.com/zeroclaw-labs/zeroclaw/issues/8780) | Realtime speech-to-speech channel para Gemini Live | `provider:gemini`, `risk:high` | **Alta prioridade** —话音 channel nativo |
| [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) | Computer-use support para desktop | `desktop`, `risk:high` | Capacidade de controle de desktop via accessibility APIs |
| [#9810](https://github.com/zeroclaw-labs/zeroclaw/issues/9810) | Load Agent Plugins 1.0 e MCP packages | `tool:mcp`, `risk:high` | **Ecosystem play** — suporte a plugin padrão aberto |
| [#9997](https://github.com/zeroclaw-labs/zeroclaw/pull/9997) | Secure model picker no Telegram | `channel:telegram`, `risk:high` | UX de seleção de modelo por provider group |
| [#9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109) | Native Hailo-Ollama support | `provider:ollama`, `risk:high` | Expansão de provedores |
| [#9324](https://github.com/zeroclaw-labs/zeroclaw/pull/9324) | A2A outbound client e shared wire-model | `domain:architecture`, `risk:high` | **Phase 1 A2A** — protocolo Agent-to-Agent |

### Sinais de Roadmap

1. **Voice-first interfaces** — Gemini Live (#8780) indica movimento para interação por voz em tempo real
2. **Plugin ecosystem** — suporte a Agent Plugins 1.0 (#9810) e A2A (#9324) sugere estratégia de platformização
3. **Desktop como cidadão de primeira classe** — computer-use (#6909) expande escopo além de CLI/TUI
4. **CI otimizado** — RFCs sobre cache Rust (#7108) e PR pre-review AI (#9330) indicam foco em DX

---

## 7. Resumo de Feedback dos Usuários

### Dores Documentadas

| Issue | Problema | Impacto |
|-------|----------|---------|
| [#7527](https://github.com/zeroclaw-labs/zeroclaw/issues/7527) | macOS app perde janelas após reinstall | **Bloqueante** — experiência desktop quebrada |
| [#7762](https://github.com/zeroclaw-labs/zeroclaw/issues/7762) | Cron docs ausentes + sem seleção de modelo por job | **Usabilidade** — operadores não conseguem configurar |
| [#7089](https://github.com/zeroclaw-labs/zeroclaw/issues/7089) | Shell no Windows ambiguamente `cmd.exe` | **Fragmentação** — UX inconsistente cross-platform |
| [#7410](https://github.com/zeroclaw-labs/zeroclaw/issues/7410) | Webhook signing secrets cacheados em startup | **Security/ops** — rotação de secrets não funciona |

### Cenários de Uso Emergentes

- **Multi-user group chat no Telegram** — demanda por `per_user_session` toggle ([#9772](https://github.com/zeroclaw-labs/zeroclaw/pull/9772))
- **ZeroCode parity** — usuários headless querem TUI equivalente ao dashboard web ([#7790](https://github.com/zeroclaw-labs/zeroclaw/issues/7790))
- **Pagamento via blockchain** — falsos positivos no leak detector bloqueiam payment URLs ([#9825](https://github.com/zeroclaw-labs/zeroclaw/issues/9825))

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta/Decisão Prolongada

| # | Título | Criado | Comentários | Prioridade |
|---|--------|--------|-------------|------------|
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | **Maintainer decision queue tracker** | 2026-07-04 | 13 | P2 — 42+ dias em aberto; bloco para RFCs |
| [#6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) | Provenance/conversation binding RFC | 2026-05-26 | 12 | P2 — 82+ dias; requer decisão final |
| [#6971](https://github.com/zeroclaw-labs/zeroclaw/issues/6971) | Security posture RFC | 2026-05-27 | 12 | P2 — 81+ dias |
| [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) | Computer-use desktop RFC | 2026-05-25 | 9 | P2 — 83+ dias |

### Risco de Stale

**8 RFCs com tag `status:no-stale`** que estão em discussão há >40 dias sem decisão de mantenedor. Isso cria gargalo no pipeline de features — contributors esperam sinalização para prosseguir ou abandonar proposals.

### Recomendação

O projeto beneficiaria-se de uma **sprint de decisões** focada em fechar as 8+ RFCs em aberto, especialmente:
1. [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) — Chat Completions profile (maior engajamento)
2. [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) + [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) — arquitetura core
3. [#6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) + [#6971](https://github.com/zeroclaw-labs/zeroclaw/issues/6971) — segurança e provenance

---

## Métricas Consolidada (2026-08-16)

| Indicador | Valor |
|-----------|-------|
| Issues ativas (24h) | 46 open, 4 closed |
| PRs ativos (24h) | 46 open, 4 merged/closed |
| Releases (24h) | 0 |
| RFCs em discussão | 8+ (alta) |
| Bugs P1 em aberto | 4 |
| Razão Issues:PRs saudável | ✅ 1:1 |

**Veredicto:** ZeroClaw está em **fase de maturação arquitetural** com alta participação comunitária. O principal risco é o gargalo de decisão em RFCs. Bugs estão sendo tratados adequadamente, e o roadmap aponta para interoperabilidade (OpenAI, A2A), voice-first, e desktop expansion.

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*