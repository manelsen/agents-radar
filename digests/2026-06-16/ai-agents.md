# Resumo diário do ecossistema de agentes de IA 2026-06-16

> Issues: 3 | PRs: 1 | Projetos cobertos: 7 | Gerado em: 2026-06-15 22:14 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório do Projeto NullClaw — 2026-06-16

---

## 1. Panorama do Dia

O projeto NullClaw apresenta **atividade moderada** nesta terça-feira, com 3 issues abertas e 1 PR de dependência em aberto. A comunidade reporta dois problemas técnicos relevantes — um relacionado a *rate limiting* em configurações de output JSON e outro sobre respostas incompletas de modelos locais via Ollama — além de um pedido de enhancement para autenticação baseada em identidade no provider Azure OpenAI. **Não houve lançamentos nas últimas 24h**, e o único PR em curso é uma atualização automática de imagem Docker pelo Dependabot.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto encontra-se sem versões novas desde o último release estável. Recomenda-se monitorar o repositório para eventuais publicações, especialmente considerando a quantidade de issues em aberto que podem indicar preparativos para uma próxima versão corretiva.

---

## 3. Progresso do Projeto

**Nenhum PR foi mergeado ou fechado nas últimas 24h.**

O único movimento de PR registrado é:

| PR | Status | Descrição |
|-----|--------|-----------|
| [#956](https://github.com/nullclaw/nullclaw/pull/956) | ABERTO | Atualização de dependência: Alpine 3.23 → 3.24 (Docker) |

Este PR, aberto pelo Dependabot, representa uma atualização rotineira de segurança da imagem base Docker. **Não há blockers ou merges pendentes que indiquem progresso significativo no código principal do projeto.**

---

## 4. Temas Quentes da Comunidade

### Issues com maior potencial de impacto

| Issue | Tipo | Autor | Comentários | Reações | Relevância |
|-------|------|-------|-------------|---------|------------|
| [#957](https://github.com/nullclaw/nullclaw/issues/957) | Bug/Config | jacktang | 1 | 0 | Alta |
| [#952](https://github.com/nullclaw/nullclaw/issues/952) | Bug | bloodgroup-cplusplus | 1 | 0 | Alta |
| [#955](https://github.com/nullclaw/nullclaw/issues/955) | Enhancement | kunalk16 | 0 | 0 | Média |

### Análise das demandas

**#957 — Rate limit issue:** Usuário reporta que, ao utilizar NullClaw como runtime de agente sem memória e com output em formato JSON, recebe erros constantes de *"The config reader hit a rate limit."* A demanda centraliza-se em entender o mecanismo de *rate limiting* e como ajustar os limiares de configuração. **Este é o tema mais crítico do dia**, pois indica uma possível barreira para configurações comuns de agentes.

**#952 — Respostas incompletas com Ollama:** Bug reportado com modelo gemma via Ollama, onde o agente responde com sentenças truncadas/incompletas. A severidade é relevante pois envolve uso de modelos locais — cenário cada vez mais comum em ambientes de desenvolvimento e produção.

**#955 — Autenticação por identidade no Azure OpenAI:** Demanda de feature para suporte a `DefaultTokenCredential` (Azure Identity), eliminando necessidade de credenciais explícitas. Alinha-se com políticas de segurança corporativas que bloqueiam autenticação por chave API.

---

## 5. Bugs e Estabilidade

### Bugs reportados nas últimas 24h

| Severidade | Issue | Descrição | Status |
|------------|-------|-----------|--------|
| **Média** | [#957](https://github.com/nullclaw/nullclaw/issues/957) | Rate limit inesperado ao usar output JSON sem memória | ABERTO |
| **Média** | [#952](https://github.com/nullclaw/nullclaw/issues/952) | Modelo Ollama retorna respostas truncadas | ABERTO |

### Análise

**Não há crashes ou regressões críticas reportadas**, mas dois bugs de severidade média afetam cenários de uso relevantes:

1. **Rate limiting em configurações headless** — Parece ser um comportamento unintended quando o runtime opera sem memória e com output estruturado. Pode indicar que thresholds de rate limit não estão sendo respeitados adequadamente para casos de uso legítimos.

2. **Integração com Ollama** — Problemas de streaming/resposta incompleta sugerem possível incompatibilidade no tratamento de stream de tokens, especialmente com modelos menores como gemma.

**Recomendação:** Priorizar investigação do issue #957, pois impacta diretamente a configurabilidade do agente em cenários de produção.

---

## 6. Pedidos de Features e Sinais de Roadmap

| Issue | Tipo | Feature Solicitada | Alinhamento Estratégico |
|-------|------|--------------------|------------------------|
| [#955](https://github.com/nullclaw/nullclaw/issues/955) | Enhancement | Autenticação via Azure Identity (`DefaultTokenCredential`) | Alto — segurança + enterprise adoption |

### Análise

O pedido de suporte a **autenticação baseada em identidade para Azure OpenAI** é o único enhancement do dia. Os sinais de roadmap observáveis são:

- **Expansão enterprise:** Suporte a Azure Identity indica foco em adoção corporativa, onde políticas de segurança impedem uso de chaves API armazenadas.
- **Melhoria de DX (Developer Experience):** Eliminar necessidade de configuração manual de credenciais aumenta a adoção em ambientes de desenvolvimento.

**Ausência notável:** Não há pedidos de features nesta janela que indiquem novos casos de uso (ex.: multi-agentes, ferramentas, memória persistente), sugerindo foco atual em estabilidade e integração com provedores existentes.

---

## 7. Resumo de Feedback dos Usuários

### Dores relatadas

| Dor | Frequência | Contexto |
|-----|------------|----------|
| Rate limiting inesperado | 1 reporte | Configuração JSON + sem memória |
| Respostas incompletas de LLMs locais | 1 reporte | Ollama + gemma |
| Configuração complexa de autenticação | 1 reporte | Azure OpenAI |

### Cenários de uso observados

1. **Agente sem memória + JSON output** — Usuário tenta usar NullClaw como pipeline de transformação/comando, sem estado persistente.
2. **Modelos locais via Ollama** — Crescente adoção de LLMs locais para privacidade e custo, indicando diversificação do ecossistema de provedores.
3. **Azure enterprise** — Ambiente corporativo com políticas de segurança restritivas.

### Satisfação geral

**Neutro-negativo.** A presença de dois bugs técnicos (rate limit e respostas incompletas) somada à ausência de atividade de PR indica que o projeto pode estar em estado de resolução de issues ao invés de avanço ativo. A falta de releases recentes também sugere possible período de estabilização.

---

## 8. Backlog que Merece Atenção

### Issues sem resposta recente (prioridade de triagem)

| Issue | Idade | Status | Prioridade de Resposta |
|-------|-------|--------|------------------------|
| [#952](https://github.com/nullclaw/nullclaw/issues/952) | ~5 dias | ABERTO | **Alta** — Bug ativo |
| [#957](https://github.com/nullclaw/nullclaw/issues/957) | ~1 dia | ABERTO | **Alta** — Bug ativo |
| [#955](https://github.com/nullclaw/nullclaw/issues/955) | ~1 dia | ABERTO | **Média** — Enhancement |

### Recomendações

1. **#952 e #957 exigem resposta da equipe core** — Ambos são bugs funcionais que afetam cenários de uso documentados. A falta de reação em 5 dias (#952) pode impactar a confiança da comunidade.

2. **Considerar triagem ativa do backlog** — Issues mais antigas podem representar bugs não descobertos ou features solicitadas que nunca foram avaliadas.

3. **Atualização do CHANGELOG** — A ausência de releases recentes combined com issues abertas sugere que um release corretivo (patch) poderia melhorar a percepção de saúde do projeto.

---

## Indicadores de Saúde do Projeto

| Métrica | Valor Atual | Observação |
|---------|-------------|------------|
| Issues abertas/ativas (24h) | 3 | Atividade moderada |
| PRs mergeados (24h) | 0 | Sem progresso de código |
| Releases (24h) | 0 | Estagnação de versões |
| Tempo médio de resposta (amostra) | ~1 dia | Dentro do aceitável |
| Bugs ativos | 2 | Necessitam atenção |
| Enhancements pendentes | 1 | Feature requests em fila |

**Veredicto:** Projeto em modo de **monitoramento e resposta a issues**. Ausência de merges e releases sugere foco em estabilização. A comunidade reporta problemas técnicos concretos que merecem priorização para manter a saúde do ecossistema.

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo — Ecossistema de Agentes de IA Open Source

**Data de referência:** 2026-06-16 | **Projetos analisados:** 7

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **duas velocidades distintas de desenvolvimento** nesta janela de análise. Por um lado, **Hermes Agent, IronClaw, CoPaw e ZeroClaw** mantêm alta cadência de atividade com 50+ issues/PRs atualizados por dia, indicando equipes estruturadas e comunidades ativas. Por outro, **NullClaw e PicoClaw** operam em escala menor, com volumes moderados que sugerem projetos mais jovens ou com equipes reduzidas. O tema unificador é a **maturação operacional**: independentemente do tamanho, todos os projetos enfrentam desafios similares de estabilidade (tratamento de erros, memory leaks, vazamentos de dados) e integração com provedores de LLM. A ausência quase total de releases formais no período (apenas PicoClaw com nightly build) sinaliza que o ecossistema está em modo de estabilização e hardening, não de expansão rápida de features.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs Abertos | PRs Merged (24h) | Releases (24h) | Bugs Críticos Abertos | Avaliação de Saúde |
|---------|--------------|-------------|------------------|----------------|----------------------|-------------------|
| **NullClaw** | 3 | 1 | 0 | 0 | 2 | 🟡 Estagnação — modo monitoramento |
| **NanoBot** | 4 | 19 | 16 | 0 | 2 | 🟢 Maturação operacional — foco em robustez |
| **Hermes Agent** | 50 | 31 | 19 | 0 | 3 (incl. 3 security PRs pendentes) | 🟡 Atenção — regressões cross-platform |
| **PicoClaw** | 4 | 10 | 2 | 1 nightly | 1 (security advisory fechada) | 🟢 Estabilização — hardening ativo |
| **IronClaw** | 47 | 26 | 24 | 0 | 4 | 🟢 Desenvolvimento ativo — foco em Reborn |
| **CoPaw** | 50 | ~50 | 12 | 0 | 3 | 🟢 Positiva — gestão de contexto como tema central |
| **ZeroClaw** | 50 | ~50 | 3 | 0 | 1 S0 + 8 S2 | 🟡 Ativa com technical debt — RFCs em discussão |

**Observação quantitativa:** Os quatro projetos com maior volume (Hermes, IronClaw, CoPaw, ZeroClaw) processam coletivamente ~200 issues e ~200 PRs por dia, indicando ecossistema maduro com comunidades organizadas. Os três menores (NullClaw, NanoBot, PicoClaw) demonstram cadência diferente, com NanoBot apresentando melhor eficiência de merge (16 PRs fechadas com 19 abertas).

---

## 3. Posicionamento do Projeto Principal

### Líderes por Volume e Maturidade

**Hermes Agent** destaca-se como o projeto com maior volume absoluto de atividade (50/50) e a base mais diversificada de canais de integração (Telegram, Discord, Slack, Mattermost, Feishu, QQBot). Sua vantagem competitiva reside na cobertura multi-canal e no foco em features enterprise (liveness watchdog, audit). Porém, apresenta **risco reputacional** devido a 3 PRs de segurança pendentes há até 54 dias — uma janela de exposição que deveria mobilizar atenção imediata.

**IronClaw** diferencia-se pela arquitetura de extensões e pelo sistema "Reborn" de próxima geração, evidenciando ambição de plataforma. A taxa de merge de 24 PRs em 24h é a mais alta do ecossistema, sugerindo equipe altamente produtiva. O foco em OAuth e credenciais indica posicionamento enterprise claro.

**CoPaw (QwenPaw)** apresenta o pipeline de features mais sofisticado em termos de gestão de contexto, com múltiplas PRs abordando token usage, compressão e visualização de consumo. O novo driver abstrato Agent OS Driver (#5067) sugere estratégia de unificação de protocolos (MCP/A2A/ACP).

### Projetos em Posição Diferenciada

**NanoBot** demonstra a melhor relação PRs fechadas/abertas (16/19) do ecossistema, indicando disciplina de engenharia e foco em closure. Seu tema central de resiliência (dados corrompidos, payloads vazios, APIs incompatíveis) ressoa com usuários em produção.

**ZeroClaw** lidera em discussão arquitetural com RFCs ativas sobre compressão de contexto nativa, WebAssembly-first e multi-agent routing — sinalizando foco em escalabilidade de longo prazo.

**NullClaw** permanece em modo de resposta a issues com volume baixo, sugerindo projeto em fase inicial ou com comunidade reduzida.

---

## 4. Focos Técnicos Compartilhados

### 4.1 Tratamento de Erros e Resiliência de Dados

Todos os projetos sem exceção enfrentam desafios de **error handling robusto**:

| Projeto | Evidência |
|---------|-----------|
| PicoClaw | 7 PRs simultâneas do mesmo autor abordando `Close()` errors ignorados, type assertions sem checks, panic recovery |
| NanoBot | PRs para ignorar malformed history entries (#4315) e empty payloads (#4337) |
| Hermes | Fixes para loops infinitos de compressão (3 PRs P1 merged) |
| CoPaw | Regressões em downloads de anexos e memory leaks no cliente Windows |

**Implicação:** O ecossistema ainda não estabeleceu padrões consolidados de tratamento de erros em agentes de IA, especialmente em cenários de streaming e chamadas de ferramentas assíncronas.

### 4.2 Integração com Modelos Locais (Ollama)

Dois projetos reportam problemas similares com Ollama:

- **NullClaw (#952):** Respostas truncadas com modelo gemma via Ollama
- **Hermes (#43900, #46833):** Context silenciosamente capado em 4096 tokens + VRAM blowups com thinking models

**Implicação:** A adoção de LLMs locais está crescendo, mas as integrações apresentam fricção significativa. Este é um vetor de oportunidade para bibliotecas de abstração de providers.

### 4.3 Contexto e Gestão de Tokens

| Projeto | Issue Relacionada |
|---------|-------------------|
| CoPaw | 4 issues sobre compressão de contexto perdendo informação e estatísticas divergentes |
| Hermes | Bug #7237 (48 comentários) sobre truncamento de output por limite configurável |
| ZeroClaw | RFC #7673 sobre CompressionDecorator nativo |
| NullClaw | Rate limiting em configurações JSON sem memória |

**Implicação:** A gestão eficiente de contexto é o desafio técnico mais recorrente, afetando desde projetos menores (NullClaw) até os mais maduros (CoPaw). A variação de abordagens (compressão, limites configuráveis, caching) indica que não há consenso de arquitetura.

### 4.4 Segurança de Channels e Bridges

| Projeto | Issue/Security Advisory |
|---------|------------------------|
| PicoClaw | Security advisory #3069 — bypass de allowlist via reverse proxy |
| Hermes | 3 PRs de segurança pendentes (content injection, auth bypass, deps) |
| ZeroClaw | MCP bundles parseados mas nunca aplicados em runtime (#7733) |
| IronClaw | OAuth não persiste entre conversas (#4913) |

**Implicação:** A superfície de ataque em agentes multi-canal é significativa e ainda não está adequadamente protegida. A segurança de channels (webhooks, proxies, OAuth flows) merece atenção prioritária em todo o ecossistema.

---

## 5. Análise de Diferenciação

### 5.1 Por Público-Alvo

| Segmento | Projetos | Características |
|----------|----------|-----------------|
| **Enterprise/Compliance** | Hermes Agent, IronClaw, ZeroClaw | Audit tools, OAuth, observabilidade, multi-tenancy |
| **Desenvolvedores Individuais** | NullClaw, PicoClaw | Foco em DX, integrações pontuais, setups mais simples |
| **Mercado Chinês** | CoPaw, Hermes (parcial) | Canais XiaoYi, Yuanbao, Feishu; localização zh-CN |
| **Self-hosted/Privacidade** | NanoBot, Hermes, CoPaw | Suporte a Ollama, modelos locais, deployments on-premise |

### 5.2 Por Arquitetura

| Tipo Arquitetural | Projetos | Implicação |
|-------------------|----------|------------|
| **Monolítico expansível** | Hermes Agent | Base de código única com múltiplos canais/providers |
| **Plugin-driven** | IronClaw, CoPaw | Sistema de extensões como diferencial competitivo |
| **Microserviços/Modular** | ZeroClaw | Separação clara de gateway, runtime, channels |
| **Minimalista** | NullClaw, PicoClaw | Foco em core functionality, menos features |

### 5.3 Por Estratégia de Providers

| Estratégia | Projetos | Abordagem |
|------------|----------|-----------|
| **OpenAI-compatible first** | NanoBot, CoPaw | Abstração via API compatível |
| **Multi-provider parity** | Hermes, IronClaw | Suporte equalitário a múltiplos provedores |
| **Provider-extensibility** | ZeroClaw | Dispatcher de atribuição com spans observability |
| **Azure enterprise** | NullClaw | Foco em autenticação via Azure Identity |

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Ranking por Velocidade de Engineering

| Posição | Projeto | Métrica Destaque | Avaliação |
|---------|---------|------------------|----------|
| 1 | **IronClaw** | 24 PRs merged em 24h | Equipe altamente produtiva |
| 2 | **NanoBot** | 16/19 PRs fechadas | Disciplina de closure exemplar |
| 3 | **Hermes Agent** | 19/50 PRs atualizadas → merge | Bom turnover (38%) |
| 4 | **CoPaw** | 12 PRs fechadas + features arquiteturais | Equilíbrio features/stabilidade |
| 5 | **PicoClaw** | 2 PRs + 1 nightly release | Consistente mas em escala menor |
| 6 | **ZeroClaw** | 3 PRs fechadas (3/50) | Baixa taxa de closure, alta discussão |
| 7 | **NullClaw** | 0 PRs fechadas | Estagnação aparente |

### 6.2 Indicadores de Maturidade

| Indicador | Líder | Atrasado |
|-----------|-------|----------|
| **Security response** | PicoClaw (6 dias para advisory) | Hermes (54 dias para P1 security PR) |
| **Bug closure** | NanoBot (4 bugs críticos corrigidos) | NullClaw (0 bugs corrigidos) |
| **Release cadence** | PicoClaw (nightly builds) | Todos exceto PicoClaw (0 releases) |
| **RFC/documentation** | ZeroClaw (4 RFCs ativas) | NullClaw, PicoClaw (sem RFCs) |
| **Community engagement** | Hermes (48 comentários em 1 issue) | NullClaw (máx. 1 comentário) |

### 6.3 Sinais de Consolidação vs. Expansão

**Projetos em modo consolidação (foco em qualidade):**
- **NanoBot:** Fechando bugs de resiliência antes de expandir features
- **PicoClaw:** Hardening após security advisory
- **NullClaw:** Modo monitoramento sem avanço de código

**Projetos em modo expansão (features + qualidade):**
- **Hermes Agent:** P1 bugs + 3 security PRs + features enterprise simultaneamente
- **IronClaw:** Reborn + OAuth + extensões em paralelo
- **CoPaw:** Driver abstrato + BI plugin + context management
- **ZeroClaw:** RFCs arquiteturais + multi-agent routing

---

## 7. Sinais de Tendência

### 7.1 Tendências Confirmadas

**A. Adoção de LLMs locais como padrão secundário**
Ollama aparece em 3 dos 7 projetos com problemas reportados, indicando que a estratégia "cloud-first, local-fallback" está se tornando comum. Usuários querem privacidade e controle de custos, mas as integrações ainda apresentam fricção significativa.

**B. Multi-canal como expectativa, não diferencial**
Todos os projetos mantêm integrações com 3+ canais (Telegram, Discord, WhatsApp, Matrix, etc.). A diferenciação está na qualidade da integração (WebSocket vs. polling, OAuth persistente vs. por sessão).

**C. Observabilidade transitioning de nice-to-have para requirement**
AuditTool (NanoBot), Trace Commons onboarding (IronClaw), e demanda por Langfuse/OpenTelemetry (CoPaw) indicam que usuários enterprise exigem visibilidade de ações do agente.

**D. Context window como bottleneck principal**
Truncamento de respostas (#7237 Hermes, 48 comentários), compressão falhando (#5171 CoPaw), e rate limiting (#957 NullClaw) são as dores mais recorrentes. A gestão eficiente de contexto será o principal diferenciador de DX.

### 7.2 Tendências Emergentes

**A. Autenticação enterprise-ready**
O pedido de Azure Identity em NullClaw (#955) e os problemas de OAuth persistente em IronClaw (#4913) indicam que o ecossistema está amadurecendo para ambientes corporativos com políticas de segurança restritivas.

**B. WebAssembly como direção arquitetural**
ZeroClaw RFC #7674 propõe eliminar Node.js do build/runtime. Se concretizado, estabeleceria precedente para projetos menores e embedded.

**C. Multi-agent architectures**
ZeroClaw RFC #2767 (Multi-Agent Routing) e IronClaw (#4937, #4938 learning semantics) sinalizam movimento de agentes únicos para sistemas multi-agente com workspaces isolados.

**D. Compressão de contexto nativa**
ZeroClaw (#7673), CoPaw (#5063 integração Headroom), e Hermes (multiple compression fixes) indicam convergência para soluções de compressão built-in ao invés de reliance em provider context windows.

### 7.3 Recomendações para Decisores

| Decisor | Recomendação |
|---------|--------------|
| **Escolha de projeto para deployment** | Priorizar NanoBot (resiliência comprovada) ou Hermes (cobertura multi-canal). Evitar NullClaw até resolução de rate limiting. |
| **Contribuição open source** | IronClaw e CoPaw apresentam melhores oportunidades de entrada com PRs size S/M e equipes responsivas. |
| **Integração enterprise** | Hermes e IronClaw têm infraestrutura de observabilidade mais avançada. ZeroClaw oferece arquitetura mais modular. |
| **Self-hosted/privacidade** | Hermes e CoPaw têm suporte Ollama mais maduro. NanoBot demonstra melhor tratamento de edge cases. |
| **Roadmap watching** | ZeroClaw RFCs indicam direção estratégica de longo prazo. CoPaw Driver abstraction (#5067) pode se tornar padrão cross-projeto. |

---

**Veredicto geral:** O ecossistema está em fase de **maturação operacional**, transitando de protótipos funcionales para sistemas robustos para produção. A prioridade的一致性 em gestão de contexto, segurança de channels e error handling sugere que o mercado está convergindo para um conjunto comum de desafios técnicos que ainda não têm soluções padronizadas. Projetos que estabelecerem padrões claros在这些 áreas tendrán vantagem competitiva significativa nos próximos 12-18 meses.

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório de Projeto: NanoBot — 2026-06-16

---

## 1. Panorama do Dia

O projeto NanoBot apresenta **alta atividade de desenvolvimento** nas últimas 24h, com 35 PRs atualizados e 4 issues movimentadas. A equipe demonstra foco intenso em estabilidade e qualidade, com múltiplas correções de bugs merged (uso de tokens em APIs compatíveis, entries de histórico corrompidas, payloads vazios). Não houve lançamentos oficiais, e uma issue stale (`#4322`) sinaliza possível gargalo de review. O volume de PRs abertos (19) sugere pipeline saudável de features, enquanto 16 PRs fechados indicam ritmo acelerado de integração.

---

## 2. Lançamentos

**Nenhuma release oficial nas últimas 24h.**

O projeto não emitiu novas versões desde o período analisado. A última versão mencionada em issue (`v0.2.1`) continua como base estável para usuários em produção.

> 📌 *Recomendação*: Monitorar PRs prontos para merge que abordam bugs críticos (ex: `#4345`, `#4287`) para possível hotfix.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados (16 total)

| PR | Autor | Tema | Impacto |
|----|-------|------|---------|
| [#4310](https://github.com/HKUDS/nanobot/pull/4310) | michaelxer | **fix(api): forward real LLM usage em `/v1/chat/completions`** | Corrige metricagem de billing em integrações OpenAI-compatíveis |
| [#4315](https://github.com/HKUDS/nanobot/pull/4315) | yu-xin-c | **fix(memory): ignore malformed history entries** | Previne crashes ao ler históricos corrompidos externamente |
| [#4348](https://github.com/HKUDS/nanobot/pull/4348) | chengyongru | **fix(session): keep auto compact suffix on user turn** | Melhora qualidade de compactação de memória em conversas longas |
| [#4337](https://github.com/HKUDS/nanobot/pull/4337) | yu-xin-c | **fix(runner): ignore empty injected payloads** | Elimina mensagens em branco em injeções mid-turn |

**Destaque de progresso:**
- ✅ **Correção de API OpenAI** (`#4310`): Resolve zero-usage em `/v1/chat/completions` reportado em [#4309](https://github.com/HKUDS/nanobot/issues/4309)
- ✅ **Resiliência de memória** (`#4315` + `#4337`): Duas PRs fortalecem tolerância a dados malformados

---

## 4. Temas Quentes da Comunidade

### Issues com Engajamento

| Issue | Autor | Tema | Comentários | Status |
|-------|-------|------|-------------|--------|
| [#4287](https://github.com/HKUDS/nanobot/issues/4287) | glebov | Empty responses não disparam fallback entre modelos | 2 | 🟡 Aberta |
| [#4322](https://github.com/HKUDS/nanobot/issues/4322) | professionelle-hypnose | NameError: 'session_key' em context.py | 1 | 🔴 Stale |
| [#4345](https://github.com/HKUDS/nanobot/issues/4345) | BearMett | Image-strip fallback vaza file path ao modelo | 0 | 🟡 Aberta |

### PRs em Destaque (alta atividade)

| PR | Autor | Tema | Relevância |
|----|-------|------|------------|
| [#4320](https://github.com/HKUDS/nanobot/pull/4320) | bjoshuanoah | **feat(audit): AuditTool para observabilidade de ações do agente** | ⭐ Alta — nova capacidade de compliance |
| [#4330](https://github.com/HKUDS/nanobot/pull/4330) | chengyongru | **feat(webui): automations management view** | ⭐ Alta — UX para cron jobs |
| [#4344](https://github.com/HKUDS/nanobot/pull/4344) | chengyongru | **Refactor config and agent loop boundaries** | 🔧 Arquitetural — prepara extensibilidade |

**Análise:**
- **Observabilidade** é tema recorrente: `audit` (flag MC-486) e `automation view` indicam foco enterprise
- **Resiliência de imagens** domina issues de bug: vazamento de paths (`#4345`) e fallback incorreto (`#4287`)
- Issue stale `#4322` requer atenção para não degradar experiência de contribuidores

---

## 5. Bugs e Estabilidade

### Bugs Reportados (4 issues)

| Severidade | Issue | Descrição | Impacto |
|------------|-------|-----------|---------|
| 🔴 **Crítica** | [#4287](https://github.com/HKUDS/nanobot/issues/4287) | Empty model responses classificadas como "non-fallbackable" em DeepSeek | Falha deGraceful degradation em produção |
| 🔴 **Crítica** | [#4345](https://github.com/HKUDS/nanobot/issues/4345) | Image-strip fallback vaza `/tmp/...` paths no prompt ao modelo | Exposição de paths locais + comportamento incorreto |
| 🟡 **Média** | [#4322](https://github.com/HKUDS/nanobot/issues/4322) | `NameError: 'session_key' not defined` pós-merge em `fix/prompt-caching` | Block de branch do contribuidor |
| 🟢 **Baixa** | [#4309](https://github.com/HKUDS/nanobot/issues/4309) | `/v1/chat/completions` retorna `usage: 0` | **✅ Fix merged em #4310** |

### Correções Recentes de Estabilidade
- `#4310`: Encaminha uso real de tokens na API OpenAI
- `#4315`: Ignora entradas de histórico corrompidas sem crash
- `#4337`: Filtra payloads vazios em injeções mid-turn
- `#4348`: Mantém suffix de compactação em turns de usuário

**Métricas de Saúde:**
- 🔴 2 bugs críticos abertos
- 🟡 1 bug em branch (stale)
- ✅ 4 bugs críticos corrigidos nas últimas 24h

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Propostas

| PR | Autor | Feature | Alignamento Estratégico |
|----|-------|---------|-------------------------|
| [#4320](https://github.com/HKUDS/nanobot/pull/4320) | bjoshuanoah | **AuditTool** (config `tools.audit`) | Observabilidade / Compliance |
| [#4330](https://github.com/HKUDS/nanobot/pull/4330) | chengyongru | **WebUI Automations Surface** | UX / Produtividade |
| [#4357](https://github.com/HKUDS/nanobot/pull/4357) | franciscomaestre | **Cron "silent" jobs** (sem auto-delivery) | Operações / Monitoramento |
| [#4351](https://github.com/HKUDS/nanobot/pull/4351) | La-Volpe | **Better Mistral support** (strict params) | Provider parity |
| [#4350](https://github.com/HKUDS/nanobot/pull/4350) | IlyaGusev | **Keenable search provider** | Expansão de providers web |
| [#4313](https://github.com/HKUDS/nanobot/pull/4313) | La-Volpe | **WebUI/config.json parity** | DX / Consistência |

### Sinais de Roadmap Observados

1. **Observabilidade em primeiro plano**: AuditTool + Automation view sugerem posicionamento enterprise
2. **Operações headless**: Silent cron jobs indicam casos de uso DevOps/monitoring
3. **Provider maturity**: Melhorias em Mistral, Anthropic tool IDs (`#4356`), e novo provedor Keenable
4. **Bridge expansion**: Blue ticks para WhatsApp (`#4354`) e transcrição de áudio robusta (`#4353`)

> 📌 *Sinal de roadmap*: Foco em DX (developer experience) via config parity e WebUI, combinado com operacionalidade (audit, cron, observability)

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Tema | Feedback | Evidência |
|------|----------|-----------|
| **Fallback entre modelos** | DeepSeek retorna empty responses em horários de pico; agente não faz failover | [#4287](https://github.com/HKUDS/nanobot/issues/4287) |
| **Vazamento de paths** | Fallback de imagem expõe `/tmp/nanobot_img_xxx` no prompt | [#4345](https://github.com/HKUDS/nanobot/issues/4345) |
| **Billing broken** | API OpenAI-compatível retorna tokens zerados — impede metering | [#4309](https://github.com/HKUDS/nanobot/issues/4309) (✅ fixado) |
| **Merge conflicts** | Contribuidor preso com `NameError: session_key` pós-merge | [#4322](https://github.com/HKUDS/nanobot/issues/4322) |

### Cenários de Uso Emergentes

- **🤖 Telegram bot runtime** com DeepSeek comoLLM primário (v0.2.1)
- **📞 Bridge WhatsApp** com read receipts e transcrição de voz
- **⏰ Cron jobs agendados** com e sem delivery de resposta
- **🌐 Web search** com múltiplos providers (Keenable sendo avaliado)

### Satisfação/Insatisfação

| Indicador | Status |
|-----------|--------|
| Bugs críticos abertos | ⚠️ 2 (fallback + path leak) |
| PR cycle time | ✅ Rápido — 4 fixes críticos merged em 24h |
| Stale issues | ⚠️ 1 issue sem resposta há 3 dias |
| Feature pipeline | ✅ 6+ features em review |

---

## 8. Backlog que Merece Atenção

### Issues sem Resposta / Stale

| Issue | Idade | Autor | Tema | Prioridade |
|-------|-------|-------|------|------------|
| [#4322](https://github.com/HKUDS/nanobot/issues/4322) | **3 dias** | professionelle-hypnose | `session_key` undefined pós-merge | 🔴 Alta |
| [#4287](https://github.com/HKUDS/nanobot/issues/4287) | 6 dias | glebov | Empty response fallback | 🔴 Crítica |
| [#4345](https://github.com/HKUDS/nanobot/issues/4345) | 1 dia | BearMett | Path leak no image fallback | 🔴 Crítica |

### PRs Abertas Críticas para Release

| PR | Autor | Tema | Bloqueio |
|----|-------|------|----------|
| [#4346](https://github.com/HKUDS/nanobot/pull/4346) | BearMett | **fix(providers): mark stripped images as unviewable** | Closes #4345 🔴 |
| [#4303](https://github.com/HKUDS/nanobot/pull/4303) | michaelxer | **fix(mcp): close tracked generators** | Previne crash async |
| [#4352](https://github.com/HKUDS/nanobot/pull/4352) | waelantar | **fix(context): cap digest por tokens, não chars** | CJK/代码 tokenization |

### Recomendações para Maintainers

1. **🔴 Prioridade imediata**: Review de `#4346` (path leak) e `#4345` (crítico de segurança)
2. **🟡 Resolver stale**: Resposta em `#4322` para reengajar contribuidor
3. **🟢 Manter ritmo**: Merge de `#4320` (audit) e `#4330` (automations) fortaleceria proposta de valor enterprise

---

## Resumo Executivo

| Dimensão | Status | Observação |
|----------|--------|------------|
| **Atividade** | 🟢 Alta | 35 PRs, 4 issues em 24h |
| **Estabilidade** | 🟡 Atenção | 2 bugs críticos abertos; 4 fixes merged |
| **Releases** | ⚪ Nenhuma | Sem lançamentos no período |
| **Comunidade** | 🟡 Engajada | Stale issue precisa de resposta |
| **Roadmap signals** | 🟢 Positivo | Audit, automations, providers maturity |

**Veredicto**: Projeto em **fase de maturação operacional** — foco em robustez (bugs de fallback, vazamentos, dados corrompidos) e DX (WebUI parity, config boundaries). Bugs críticos requerem atenção imediata antes de próxima release.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-06-16

## 1. Panorama do dia

O projeto Hermes Agent manteve alta atividade nas últimas 24h, com 50 issues e 50 PRs atualizados, sem nenhum release novo. A comunidade está focada em estabilização: duas issues P1 críticas (loop de compressão de contexto e erro de contexto mínimo de 64k tokens) mobilizaram desenvolvedores, resultando em PRs já merged. No фронтенд, bugs de desktop (compilação macOS, segfaults) e UI (sidebar, updater path) dominam as discussões. O fluxo de PRs está saudável com 19 merges/fechamentos, indicando хороший ritmo de entrega.

---

## 2. Lançamentos

**Nenhum release publicado nas últimas 24h.** O projeto está em ciclo de desenvolvimento ativo sem tag de versão nova hoje.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados (destaques)

| # | Título | Impacto |
|---|--------|---------|
| [#40976](https://github.com/NousResearch/hermes-agent/pull/40976) | fix(agent): prevent infinite context compression loop with small windows | **P1** — Resolve loop infinito de compressão em configs com janela pequena |
| [#40888](https://github.com/NousResearch/hermes-agent/pull/40888) | fix(agent): break infinite context compaction loop when tail budget exceeds transcript | **P1** — Complementary fix para #40803 |
| [#40813](https://github.com/NousResearch/hermes-agent/pull/40813) | fix(compressor): count no-op compressions toward anti-thrashing guard | **P2** — Previne loops de throttle em ratio alto |
| [#46885](https://github.com/NousResearch/hermes-agent/pull/46885) | fix(mattermost): preserve thread-local delivery hygiene | **P3** — Corrige vazamento de progresso em canais flat |
| [#46700](https://github.com/NousResearch/hermes-agent/pull/46700) | fix(xiaomi): preserve Token Plan base URLs during auth recovery | **P2**** — Evita re-pinning incorreto após recovery |
| [#46681](https://github.com/NousResearch/hermes-agent/pull/46681) | fix(xiaomi): replay MiMo thinking on supported routes | **P2** — Consistente com capacidades do modelo |
| [#46673](https://github.com/NousResearch/hermes-agent/pull/46673) | fix(vision): respect MiMo tool-result media limits | **P2** — Fallback correto quando mídia unsupported |
| [#46664](https://github.com/NousResearch/hermes-agent/pull/46664) | fix(xiaomi): consolidate MiMo accounting and error recovery | **P3** — Preços e erros normalizados |
| [#28965](https://github.com/NousResearch/hermes-agent/pull/28965) | add GigaChat support (SSL bypass + OAuth auto-refresh) | **P3** — Novo provedor: Sberbank AI |
| [#46886](https://github.com/NousResearch/hermes-agent/pull/46886) | Feat/yandex gpt provider | **P3** — Novo provedor: Yandex GPT |

**Avanço significativo:** O time fechou 3 das 4 issues P1 relacionadas a loops infinitos de compressão de contexto. A plataforma está mais estável para usuários com上下文 ограниченные configs.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários + reações)

| # | Título | Comentários | 👍 | Categoria |
|---|--------|-------------|----|----|
| [#7237](https://github.com/NousResearch/hermes-agent/issues/7237) | Error: Response truncated due to output length limit | **48** | 6 | 🐛 Bug (P1) |
| [#24140](https://github.com/NousResearch/hermes-agent/issues/24140) | context window below minimum 64,000 tokens — Telegram down | **12** | 0 | 🐛 Bug (P1) |
| [#40187](https://github.com/NousResearch/hermes-agent/issues/40187) | hermes update / desktop fails to compile on macOS | **7** | 0 | 🐛 Bug (P2) |
| [#43900](https://github.com/NousResearch/hermes-agent/issues/43900) | Ollama models silently capped at 4096-token context | **6** | 0 | 🐛 Bug (P3) |
| [#6388](https://github.com/NousResearch/hermes-agent/issues/6388) | Telegram MarkdownV2 escape breaks bullet lists | **5** | 1 | 🐛 Bug (P2) |
| [#41222](https://github.com/NousResearch/hermes-agent/issues/41222) | Integrate Kanban Board into Desktop App | **3** | 2 | ✨ Feature |
| [#46833](https://github.com/NousResearch/hermes-agent/issues/46833) | Thinking models on Ollama truncate + VRAM blowups | **3** | 0 | 🐛 Bug (P3) |

### Análise de demandas

**Bug #7237** (48 comentários) é a issue mais debatida — usuários de CLI e gateways (Telegram/Discord/Slack) enfrentam truncamento de respostas longas. A discussions sugere que o limite de output não escala bem com modelos de longa saída. **Demanda clara:** necessidade de limite de output configurável por provider/modelo.

**Bug #24140** (12 comentários) revela frustração com validação rígida de context window. Modelos com 32k tokens estão sendo rejeitados porque Hermes exige 64k mínimo. Many users are effectively locked out of Telegram integration. **Sinal de product:** a política de context window mínimo pode estar criando barriers desnecessários.

**Feature #41222** (3 comentários, 2 👍) solicita integração nativa do Kanban Board no Desktop app. O uso separado via CLI é friction point para workflows multi-agente. **Indicação de roadmap:** demanda por unificação de interfaces.

---

## 5. Bugs e Estabilidade

### Por Severidade

#### P1 — Críticos (2 issues)

| # | Título | Status | Link |
|---|--------|--------|------|
| #7237 | Response truncated — output length limit | OPEN | [Issue](https://github.com/NousResearch/hermes-agent/issues/7237) |
| #24140 | context window below 64k — Telegram down | CLOSED | [Issue](https://github.com/NousResearch/hermes-agent/issues/24140) |

> **Análise:** #24140 foi fechada, mas #7237 continua aberta com 48 comentários — indica que a root cause pode não estar 100% resolvida.

#### P2 — Importantes (9 issues)

| # | Título | Componente | Link |
|---|--------|------------|------|
| #40187 | Desktop compilation fails on macOS | CLI/Desktop | [Issue](https://github.com/NousResearch/hermes-agent/issues/40187) |
| #6388 | Telegram MarkdownV2 bullet list escape | Gateway/Telegram | [Issue](https://github.com/NousResearch/hermes-agent/issues/6388) |
| #46789 | Desktop segfaults (exit -11) on macOS | TUI/Desktop | [Issue](https://github.com/NousResearch/hermes-agent/issues/46789) |
| #44888 | Shell commands truncated in approval prompt | TUI | [Issue](https://github.com/NousResearch/hermes-agent/issues/44888) |
| #46797 | disk i/o error after unclean shutdown (Docker) | Cron/Docker | [Issue](https://github.com/NousResearch/hermes-agent/issues/46797) |
| #46856 | Fallback resets every turn (no rate-limit cooldown) | Agent/OpenRouter | [Issue](https://github.com/NousResearch/hermes-agent/issues/46856) |
| #46883 | Failed update deletes running app binary | Desktop | [Issue](https://github.com/NousResearch/hermes-agent/issues/46883) |
| #46876 | Windows MSYS path resolution ghost tree | File Tools | [Issue](https://github.com/NousResearch/hermes-agent/issues/46876) |
| #46833 | Thinking models on Ollama + VRAM blowups | Ollama | [Issue](https://github.com/NousResearch/hermes-agent/issues/46833) |

> **Padrão identificado:** 3 issues P2 afetam desktop macOS (compilation, segfault, updater). Plataforma macOS parece ter regressões recentes.

#### P3 — Menores (11 issues)

Destaques: Ollama context cap silencioso (#43900), Desktop sidebar gap (#46881), Windows Node PATH (#46787), Kanban worker protocol violation (#46889), credential pool retry parser (#46891).

### Crashes Reportados

- **Segfault exit -11** em macOS Desktop (todas as ferramentas de processo) — [#46789](https://github.com/NousResearch/hermes-agent/issues/46789)
- **Ghost tree writes** no Windows após upgrade (MSYS paths) — [#46876](https://github.com/NousResearch/hermes-agent/issues/46876)

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features (últimas 24h)

| # | Título | Prioridade | Link |
|---|--------|------------|------|
| #41222 | Integrate Kanban Board into Desktop App | P3 | [Issue](https://github.com/NousResearch/hermes-agent/issues/41222) |
| #32574 | Gateway needs periodic liveness watchdog | P1 | [Issue](https://github.com/NousResearch/hermes-agent/issues/32574) |
| #46880 | Dual Sub-Agent Model Configuration (per task-type) | P3 | [Issue](https://github.com/NousResearch/hermes-agent/issues/46880) |
| #46877 | Support per-provider custom HTTP headers | P3 | [Issue](https://github.com/NousResearch/hermes-agent/issues/46877) |
| #46855 | Discord inbound reactions as confirmation/input | P3 | [Issue](https://github.com/NousResearch/hermes-agent/issues/46855) |
| #46884 | Sub-Agent Response Quality Gate | P3 | [Issue](https://github.com/NousResearch/hermes-agent/issues/46884) |
| #46875 | Chat/TUI match active dashboard theme | P3 | [Issue](https://github.com/NousResearch/hermes-agent/issues/46875) |
| #46813 | Japanese (ja-JP) localization support | P3 | [Issue](https://github.com/NousResearch/hermes-agent/issues/46813) ✅ CLOSED |

### Sinais de Roadmap

1. **Liveness watchdog para Gateway** (#32574, P1) — Falta de detecção de zombie connections afeta Discord, QQBot. Indicado como área negligenciada.

2. **Multi-model delegation** (#46880) — Usuários querem especialização de modelos por tipo de tarefa (código vs. pesquisa). Config atual só suporta um modelo global.

3. **Per-provider headers** (#46877) — Incompatível com kebutuhan API keys proprietary ou autenticação customizada por provedor.

4. **Qualidade de resposta de sub-agentes** (#46884) — Sem validação automática, agentes podem retornar output quebrado ao parent.

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais

| Dor | Frequência | Impacto |
|-----|------------|---------|
| Truncamento de respostas longas | Alta | Bloqueia uso em produção (CLI/Gateway) |
| Context window mínimo 64k muito rígido | Alta | Modelos 32k rejeitados, Telegram down |
| Desktop macOS quebrado (compile + runtime) | Média-alta | Impossibilita uso na plataforma |
| Ollama context silently capped | Média | Resulta em output incompleto sem warning |
| Windows path resolution regressions | Média | Writes caem em ghost trees |

### Cenários de Uso Reportados

- **Telegram como canal primário:** Muitos usuários dependem exclusivamente de Telegram, então qualquer break lá (#24140) é crítico.
- **Ollama self-hosted:** Comunidade local-first quer rodar tudo offline, mas encontra friction com context cap e thinking models.
- **macOS Desktop:** Usuários Apple estão sendo deixados de fora (compile + segfaults).

### Satisfação Geral

**Neutro-negativa.** As issues P1 e P2 estão mobilizando atenção, mas a quantidade de bugs de platform (macOS, Windows) sugere que testing cross-platform pode estar abaixo do ideal. O alto volume de issues fechadas (11 de 50) e PRs merged (19) indica que a equipe está responsiva, mas backlog de desktop apps precisa de atenção prioritária.

---

## 8. Backlog que Merece Atenção

### Issues sem resposta significativa (>3 dias sem atividade ou sem assignee)

| # | Título | Criado | Atualizado | Comentários | Link |
|---|--------|--------|------------|-------------|------|
| #7237 | Response truncated output length limit | 2026-04-10 | 2026-06-15 | 48 | [Issue](https://github.com/NousResearch/hermes-agent/issues/7237) |
| #6388 | Telegram MarkdownV2 bullet lists | 2026-04-09 | 2026-06-15 | 5 | [Issue](https://github.com/NousResearch/hermes-agent/issues/6388) |
| #32574 | Gateway liveness watchdog | 2026-05-26 | 2026-06-15 | 2 | [Issue](https://github.com/NousResearch/hermes-agent/issues/32574) |
| #40199 | Gateway status stale adapters | 2026-06-06 | 2026-06-15 | 1 | [Issue](https://github.com/NousResearch/hermes-agent/issues/40199) |
| #41429 | "Dumb down" any model (needs triage) | 2026-06-07 | 2026-06-15 | 1 | [Issue](https://github.com/NousResearch/hermes-agent/issues/41429) |

### PRs Abertos sem Merge (destaque)

| # | Título | Prioridade | Age | Link |
|---|--------|------------|-----|------|
| #32771 | fix(agent): wrap list-type untrusted content | **P1** Security | 20 dias | [PR](https://github.com/NousResearch/hermes-agent/pull/32771) |
| #42334 | security(deps): bump aiohttp + anthropic | **P1** Security | 8 dias | [PR](https://github.com/NousResearch/hermes-agent/pull/42334) |
| #14627 | fix(feishu): fail-closed on auth bypass | **P1** Security | ~54 dias | [PR](https://github.com/NousResearch/hermes-agent/pull/14627) |
| #46890 | fix(telegram): edit streamed previews as rich | P2 | 1 dia | [PR](https://github.com/NousResearch/hermes-agent/pull/46890) |

> ⚠️ **Alerta:** 3 PRs de segurança P1 estão abertos há 8-54 dias sem merge. #32771 e #14627 tratam de content injection e authentication bypass — devem ser priorizados.

---

## Indicadores de Saúde do Projeto

| Métrica | Valor | Status |
|---------|-------|--------|
| Issues ativas (24h) | 39 | ✅ Alta atividade |
| PRs abertos (24h) | 31 | ✅ Pipeline saudável |
| Taxa de fechamento (issues) | 22% (11/50) | ✅ Bom turnover |
| Taxa de merge (PRs) | ~38% (19/50) | ✅ Ritmo forte |
| Releases (24h) | 0 | ⚠️ Sem versão nova |
| P1 bugs abertos | 1 | ⚠️ Requer atenção |
| PRs segurança P1 pendentes | 3 | 🔴 Priorizar urgentemente |

**Recomendação executiva:** Priorizar merge dos 3 PRs de segurança (#32771, #42334, #14627) e investir em testing cross-platform desktop (macOS) para reduzir regressões na plataforma.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório de Projeto: PicoClaw
## 📅 Data: 2026-06-16 | Repositório: sipeed/picoclaw

---

## 1. Panorama do Dia

O projeto PicoClaw demonstra **alta atividade de desenvolvimento** em 16 de junho de 2026, com 12 PRs e 4 issues processadas nas últimas 24 horas. A equipe mantém um ciclo de releases consistente com um novo nightly build (v0.2.9-nightly.20260615) disponibilizado. Dois PRs de segurança foram merged abordando vulnerabilidades críticas no launcher e diagnósticos de bypass, indicando foco em hardening. A maioria dos PRs abertos são correções de código (error handling, type assertions, panic recovery), sugerindo uma fase de estabilização e polimento antes de uma próxima versão estável.

---

## 2. Lançamentos

### 🌙 Nova Release: nightly v0.2.9-nightly.20260615.13a38bd1

| Item | Detalhes |
|------|----------|
| **Tipo** | Nightly Build automatizado |
| **Versão** | v0.2.9-nightly.20260615.13a38bd1 |
| **Commit** | 13a38bd1 |
| **Changelog** | [Comparação v0.2.9...main](https://github.com/sipeed/picoclaw/compare/v0.2.9...main) |

**Nota:** Esta é uma build noturna não versionada. Usuários em produção devem aguardar releases estáveis. A build pode conter alterações não testadas integralmente.

---

## 3. Progresso do Projeto

### PRs Merged/Fechadas (2)

#### 🔒 PR #3126 — fix(web): improve launcher allowlist bypass diagnostics
**Autor:** lc6464 | **Data:** 2026-06-15  
**Impacto:** Segurança e observabilidade

Melhora os diagnósticos de bypass do allowlist do launcher, rastreando se `allow_localhost_bypass` foi omitido, explicitamente definido ou definido como `null`, emitindo logs mais claros no startup.

🔗 [Ver PR #3126](https://github.com/sipeed/picoclaw/pull/3126)

---

#### ✨ PR #3097 — feat: add shift-enter hint below chat composer
**Autor:** lc6464 | **Data:** 2026-06-15  
**Impacto:** UX/Web Interface

Adiciona dica visual de "Shift + Enter" abaixo do composer de chat na interface web quando o usuário digitou conteúdo, melhorando a descoberta de funcionalidades sem ocupar espaço no input.

🔗 [Ver PR #3097](https://github.com/sipeed/picoclaw/pull/3097)

---

### PRs Abertas em Destaque (10)

| PR | Título | Autor | Tipo |
|----|--------|-------|------|
| #3132 | fix: add panic recovery to core-path goroutines | SiYue-ZO | 🔴 Crítico |
| #2975 | feat(telegram): treat reply to bot message as mention | Jlan45 | ✨ Feature |
| #3047 | fix(web): restore full JSONL history for session detail | SutraHsing | 🔧 Fix |
| #3054 | fix(line): add ok checks for sync.Map type assertions | chengzhichao-xydt | 🔧 Fix |

**PR Crítico:** #3132 adiciona proteção defer-recover em goroutines em caminhos críticos de execução (execução de ferramentas, processadores de canal), evitando que um goroutine em pânico cause crash de todo o processo.

---

## 4. Temas Quentes da Comunidade

### Issue com Maior Engajamento

#### 🔴 Issue #2887 — [CLOSED] .deb version on RISC-V is not functional with OpenAI model
**Autor:** s0me0ne-unkn0wn | **Comentários:** 10 | **Criada:** 2026-05-17 | **Fechada:** 2026-06-15

Reporta que a versão .deb em RISC-V não funciona corretamente com modelos OpenAI (gpt-5.4-2026-03-05). issue com **10 comentários** indicando discussão substancial. Considerar verificar se há similaridades com issue #3125 (web_search tool).

🔗 [Ver Issue #2887](https://github.com/sipeed/picoclaw/issues/2887)

---

#### 🟡 Issue #3015 — [OPEN] QQ Channel Connection Failed on Windows
**Autor:** cuandada | **Comentários:** 3 | **Criada:** 2026-06-06 | **Atualizada:** 2026-06-15

Canal QQ falha ao iniciar no Windows com erro de timeout na recuperação de access token de bots.qq.com. Issue activa (stale flag) mas ainda em discussão.

🔗 [Ver Issue #3015](https://github.com/sipeed/picoclaw/issues/3015)

---

## 5. Bugs e Estabilidade

### 🔴 Crítico: Issue de Segurança Fechada

#### 🔒 Issue #3069 — [CLOSED] [Security] PicoClaw launcher `allowed_cidrs` bypass via reverse proxy
**Autor:** YLChen-007 | **Criada:** 2026-06-09 | **Fechada:** 2026-06-15

**Gravidade:** Security Advisory

O allowlist de CIDRs do launcher pode ser bypassado quando deployed atrás de um reverse proxy, pois o controle de acesso confia em `RemoteAddr` sem considerar cabeçalhos X-Forwarded-For ou similares.

🔗 [Ver Issue #3069](https://github.com/sipeed/picoclaw/issues/3069)

> **Mitigação relacionada:** PR #3126 melhorou diagnósticos para conscientizar sobre vector de ataque.

---

### 🟡 Bug Aberto: Falha Silenciosa

#### Issue #3125 — [OPEN] web_search tool fails silently when using Brave API key
**Autor:** Giordano10 | **Criada:** 2026-06-14 | **Atualizada:** 2026-06-14

Após migração de API keys para `.security.yml`, a ferramenta web_search (Brave API) parou de funcionar silenciosamente. O LLM formata corretamente a chamada JSON, mas o backend retorna "No results for: [query]" sem indicar falha real.

🔗 [Ver Issue #3125](https://github.com/sipeed/picoclaw/issues/3125)

---

### Bugs Estilísticos (PRs em Aberto)

Múltiplos PRs do autor chengzhichao-xydt endereçam **error handling inconsistente**:

| PR | Arquivo | Problema |
|----|---------|----------|
| #3059 | shell.go, http_retry.go | Close() errors ignorados implicitamente |
| #3128 | web.go (4 providers) | resp.Body.Close() após io.ReadAll |
| #3131 | registry.go | Type assertions sem checks |
| #3130 | tool_grep.go, tool_expand.go | json.Marshal errors descartados |
| #3129 | tts.go | file.Close() em path de erro |
| #3127 | file.go, filesystem.go | Close() em file descriptors |

> **Recomendação:** Consolidar múltiplos PRs de mesmo autor em uma única revisão de estilo para efficiency.

---

## 6. Pedidos de Features e Sinais de Roadmap

### ✨ Feature Merged

**PR #3097** — Hint visual Shift+Enter no composer  
*Indica foco em UX da interface web.*

---

### ✨ Feature em Revisão

#### PR #2975 — feat(telegram): treat reply to bot message as mention in group chats
**Autor:** Jlan45 | **Criada:** 2025-05-30 | **Atualizada:** 2026-06-15

Permite que usuários em grupos Telegram triggerm respostas do bot ao responder uma mensagem do bot (além de @mention). Requer `mention_only: true`.

🔗 [Ver PR #2975](https://github.com/sipeed/picoclaw/pull/2975)

---

### 🔧 Feature Request Implícita

#### PR #3047 — fix(web): restore full JSONL history for session detail

Implementa reader JSONL separado para detalhes de sessão que ignora `meta.Skip`, permitindo visualização de mensagens arquivadas em `GET /api/sessions/{id}` enquanto mantém paginação eficiente no endpoint de listagem.

🔗 [Ver PR #3047](https://github.com/sipeed/picoclaw/pull/3047)

---

### Sinais de Roadmap Observados

1. **Estabilidade de erros:** Múltiplos PRs de same autor indicam effort concertado em error handling robusto
2. **Resiliência:** PR #3132 adiciona panic recovery em goroutines críticas
3. **Segurança:** Foco em hardening após advisory #3069
4. **Multi-canal:** Melhorias em Telegram (PR #2975), QQ (Issue #3015), LINE (PR #3054)

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Categoria | Issue | Severidade | Descrição |
|-----------|-------|------------|-----------|
| **Integração RISC-V** | #2887 | Alta | .deb em RISC-V incompativel com OpenAI |
| **Platform Windows** | #3015 | Alta | Canal QQ quebra em Windows |
| **API Integration** | #3125 | Média | web_search retorna silêncio em vez de erro |
| **Segurança** | #3069 | Crítica | Bypass de allowlist em proxies |

### Cenários de Uso Identificados

1. **Deployment em RISC-V** com .deb packages — suporte incompleto
2. **Bots multi-canal** (QQ, Telegram, LINE) — estabilidade variável por plataforma
3. **Search tooling** com Brave API — problemas pós-migração de config
4. **Deploy com reverse proxy** — considerações de segurança não documentadas

### Tendência de Satisfação

**Mista com viés positivo.** Issues críticas (#3069) foram fechadas rapidamente (6 dias), indicando resposta ágil. however, issues de longa duração (RISC-V, 29 dias) sugerem gaps em testes de plataforma.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta/Estagnadas

| Issue | Título | Criada | Estado | Dias Aberta |
|-------|--------|--------|--------|-------------|
| **#3015** | QQ channel failure on Windows | 2026-06-06 | OPEN/stale | 10 |
| **#3125** | web_search silent failure | 2026-06-14 | OPEN | 2 |

### PRs Estagnadas (>7 dias sem atividade)

| PR | Título | Criada | Última Atualização | Status |
|----|--------|--------|-------------------|--------|
| **#2975** | Telegram reply as mention | 2026-05-30 | 2026-06-15 | stale |
| **#3054** | LINE sync.Map checks | 2026-06-08 | 2026-06-15 | stale |
| **#3059** | Ignore Close() errors | 2026-06-08 | 2026-06-15 | stale |
| **#3047** | JSONL history restore | 2026-06-07 | 2026-06-15 | stale |

---

## 📊 Métricas de Saúde do Projeto (Últimas 24h)

| Indicador | Valor | Status |
|-----------|-------|--------|
| Issues processadas | 4 | ✅ Saudável |
| PRs abertas | 10 | 📈 Alta atividade |
| PRs fechadas/merged | 2 | ✅ Fluxo consistente |
| Releases | 1 | ✅ Release contínuo |
| Security fixes | 1 | ⚠️ 1 advisory |
| Tempo médio de resposta | <1 dia | ✅ Responsivo |

---

## 🎯 Recomendações Prioritárias

1. **🔴 Prioridade Alta:** Revisar e testar PR #3132 (panic recovery) — impacto sistêmico
2. **🟡 Prioridade Média:** Issue #3125 — migração de .security.yml pode afetar outras tools
3. **🟡 Prioridade Média:** Consolidar PRs de error handling do autor chengzhichao-xydt
4. **🟢 Boas Práticas:** Resolver stale flags em PRs #2975, #3054 para manter contributors engajados

---

*Relatório gerado automaticamente para 2026-06-16. Dados extraídos de github.com/sipeed/picoclaw.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-06-16

## 1. Panorama do dia

O projeto IronClaw apresenta **alta atividade** nas últimas 24 horas, com 47 issues e 50 PRs atualizados. Não houve novos lançamentos, mas o desenvolvimento está intenso em múltiplas frentes: autenticação OAuth, sistema de credenciais, UX de extensões e infra de observabilidade. A equipe está focada em estabilizar o fluxo Reborn, especialmente em Approval/Denial flows e na experiência de onboarding de extensões. O tom geral indica uma fase de refinamento e consolidação de funcionalidades existentes.

---

## 2. Lançamentos

**Nenhum novo release nas últimas 24 horas.**

O último release registrado permanece `ironclaw: 0.29.1` (lançado anteriormente em #3708), que incluiu breaking changes em `ironclaw_common: 0.5.0` e updates em `ironclaw_skills: 0.4.0`. Nenhuma migração pendente foi introduzida hoje.

---

## 3. Progresso do Projeto

### PRs merged/fechados nas últimas 24h

| # | Título | Tamanho | Escopo |
|---|--------|---------|--------|
| [#4559](https://github.com/nearai/ironclaw/pull/4559) | feat(traces): agent-driven Trace Commons onboarding via invite link | XL | agent, channel/web |
| [#4936](https://github.com/nearai/ironclaw/pull/4936) | ci(bench): let /benchmark select the framework (--framework ironclaw-reborn) | S | ci |
| [#4588](https://github.com/nearai/ironclaw/pull/4588) | feat(reborn): observability seams — trajectory observer + LLM provider injection | XL | reborn |
| [#4827](https://github.com/nearai/ironclaw/pull/4827) | fix(host-runtime): accept empty body/body_base64 in builtin.http | M | host-runtime |
| [#4837](https://github.com/nearai/ironclaw/pull/4837) | feat(agent-loop): gated final-answer nudge (reborn empty/canned turn endings) | L | agent-loop |

**Destaques:**
- **#4559** introduz onboarding automatizado de Trace Commons via invite link, eliminando 15+ steps manuais anteriores
- **#4827** corrige bug que rejeitava requests HTTP GET com campos body vazios (problema comum com modelos LLM)
- **#4837** adiciona "nudge" final quando agente responde com conteúdo vazio ou repetitivo

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários)

| # | Título | Comentários | Status |
|---|--------|-------------|--------|
| [#4825](https://github.com/nearai/ironclaw/issues/4825) | Reborn: persist "always allow" approvals across threads | 3 | CLOSED |
| [#4908](https://github.com/nearai/ironclaw/issues/4908) | Google Calendar extension shows "Activate" after already active | 3 | OPEN |
| [#4907](https://github.com/nearai/ironclaw/issues/4907) | Run may fail after successful Google OAuth | 2 | OPEN |
| [#4880](https://github.com/nearai/ironclaw/issues/4880) | Automate Code Review and Review Comment Resolution | 2 | OPEN |
| [#4764](https://github.com/nearai/ironclaw/issues/4764) | Denying shell approval leaves tool invocation pending | 2 | OPEN |
| [#4761](https://github.com/nearai/ironclaw/issues/4761) | Agent stops after repeated tool failures | 2 | OPEN |

**Análise:** O tema central é a **estabilidade do fluxo de approvals** em Reborn. Usuários reportam que aprovações "always allow" não persistem entre threads, negações não cancelam corretamente execuções pendentes, e OAuths bem-sucedidos não retomam a execução original. Há também demanda por **automação de code review** (#4880), sugerindo que a base de código está crescendo e precisa de processos mais eficientes.

---

## 5. Bugs e Estabilidade

### Bugs críticos/alta severidade

| # | Título | Escopo | Status |
|---|--------|--------|--------|
| [#4907](https://github.com/nearai/ironclaw/issues/4907) | Run may fail after successful Google OAuth | OAuth, Reborn | OPEN |
| [#4764](https://github.com/nearai/ironclaw/issues/4764) | Denying shell approval leaves tool invocation pending | Approval flow | OPEN |
| [#4761](https://github.com/nearai/ironclaw/issues/4761) | Agent stops after repeated tool failures | Recovery | OPEN |
| [#4921](https://github.com/nearai/ironclaw/issues/4921) | Gmail extension run fails after successful authorization | Gmail | OPEN |
| [#4800](https://github.com/nearai/ironclaw/issues/4800) | GitHub tool invocations remain RUN after denial | GitHub | CLOSED |
| [#4759](https://github.com/nearai/ironclaw/issues/4759) | Workspace path duplicated when using relative paths | Workspace | CLOSED |

**Padrão identificado:** A maioria dos bugs envolve **estado persistente inconsistente** — ações de usuário (aprovar, negar, autenticar) não atualizam corretamente o estado interno do agente, deixando operações "presas" ou falhando em retomar.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas demands identificadas

| # | Título | Escopo | Prioridade |
|---|--------|--------|------------|
| [#4644](https://github.com/nearai/ironclaw/issues/4644) | Universal attachments across all channels | UX, Reborn | P1 sugerida |
| [#4937](https://github.com/nearai/ironclaw/pull/4937) | reborn(learning): WS-1 — memory learning semantics | Learning | Em progresso |
| [#4938](https://github.com/nearai/ironclaw/pull/4938) | reborn(learning): WS-2 — learning persona | Learning | Em progresso |
| [#4933](https://github.com/nearai/ironclaw/pull/4933) | feat(reborn): downloadable project files in WebChat v2 | UX | XL |
| [#4935](https://github.com/nearai/ironclaw/issues/4935) | Credentials are owner-scoped, not thread-scoped | OAuth, Architecture | Arquitetural |

**Sinais de roadmap:**
- **Sistema de Learning (#4937, #4938):** Workstreams ativos para memória e aprendizado do agente, indicando foco em "agente que aprende com erros"
- **Attachments universais (#4644):** Consolidação de formato de anexos entre canais v1/v2 e Reborn
- **Arquitetura de credenciais (#4939):** Refatoração para escopo owner, não thread-scoped

---

## 7. Resumo de Feedback dos Usuários

### Dores reais reportadas

**1. Onboarding de extensões fragmentado (#4886, #4890, #4908)**
> "After installing an extension, the Installed page may show: AUTH NEEDED. However, it is not always clear what setup step is required next."
- Usuários não sabem qual próximo passo após instalar extensão
- Status inconsistente (ATIVE vs "Activate" button simultaneamente)
- Fluxo disperso entre Registry, Installed, Configure e Chat

**2. Autenticação não persiste entre conversas (#4913)**
> "Google Calendar authorization appears to be stored successfully and the extension shows as ACTIVE, but opening a new conversation still requires the user to complete Google OAuth again."
- Experiência quebra-thread causa frustração
- Usuários precisam re-autenticar frequentemente

**3. Falta de feedback em ações de denial (#4764)**
> "When the builtin.shell approval dialog appears, click Deny. Expected: something. Actual: no user feedback."
- Usuários não sabem se negação foi processada
- Ferramenta permanece em estado pendente visualmente

**4. Regressões em automações (#4917)**
> "A newly created schedule (e.g. 'Echo 123 every minute') stays at SCHEDULED with 'No runs' forever and never fires."
- Funcionalidade prometida não funciona
- Sem indication clara do motivo da falha

---

## 8. Backlog que Merece Atenção

### Issues antigas sem movimento recente

| # | Título | Criado | Status | Prioridade |
|---|--------|--------|--------|------------|
| [#4644](https://github.com/nearai/ironclaw/issues/4644) | Universal attachments across all channels | 2026-06-09 | OPEN | P1 sugerida |
| [#4761](https://github.com/nearai/ironclaw/issues/4761) | Agent stops after repeated tool failures | 2026-06-11 | OPEN | Bug |
| [#4764](https://github.com/nearai/ironclaw/issues/4764) | Denying shell approval leaves tool pending | 2026-06-11 | OPEN | UX/UX |

### PRs aguardando review

| # | Título | Tamanho | idade |
|---|--------|---------|-------|
| [#4841](https://github.com/nearai/ironclaw/pull/4841) | reborn: no run-borking failures | XL | 3 dias |
| [#4671](https://github.com/nearai/ironclaw/pull/4671) | feat(reborn): extra-capabilities seam | L | 6 dias |
| [#4804](https://github.com/nearai/ironclaw/pull/4804) | feat(reborn): support Reborn operator log tail/follow | L | 4 dias |
| [#4820](https://github.com/nearai/ironclaw/pull/4820) | ci(test): shard legacy all-features tests | L | 4 dias |
| [#4821](https://github.com/nearai/ironclaw/pull/4821) | ci(test): shard ironclaw_webui_v2 Reborn tests | M | 4 dias |

**Recomendação:** Os PRs #4841 e #4671 são XL/M com baixa atividade de review. Priorizar review para desbloquear melhorias de estabilidade e extensibilidade.

---

## Métricas Resumidas

| Indicador | Valor | Tendência |
|-----------|-------|-----------|
| Issues ativas | 34 | Estável |
| PRs abertos | 26 | Estável |
| PRs fechados/merged | 24 | ⬆️ Alta taxa de close |
| Bugs críticos abertos | 4 | Atenção necessária |
| Releases | 0 | Sem mudanças |

**Saúde geral:** O projeto está em **fase ativa de desenvolvimento** com foco em estabilidade do produto Reborn. A alta taxa de PRs fechados indica equipe produtiva, mas o volume de bugs relacionados a Approval flows e OAuth sugere necessidade de investimento em testes E2E在这些 áreas。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório de Projeto — CoPaw (QwenPaw)
## Data: 2026-06-16 | Fonte: GitHub (agentscope-ai/QwenPaw)

---

## 1. Panorama do Dia

O projeto CoPaw (QwenPaw) apresenta **alta atividade** em 16 de junho de 2026, com 50 issues e 50 PRs atualizados nas últimas 24 horas. Doze PRs foram fechados/merged, demonstrando um ciclo de desenvolvimento ativo com resolução de pendências. Não houve novos lançamentos, mas a equipe está mantendo a frequência de merges. Os temas dominantes giram em torno de **estabilidade do cliente desktop**, **gestão de contexto/token**, e **experiência de integração com canais** (Feishu, XiaoYi). A saúde geral do projeto permanece positiva, com a equipe respondendo ativamente a bugs críticos e mantendo o pipeline de features em movimento.

---

## 2. Lançamentos

### Nenhuma release nas últimas 24h

A última versão estável é **v1.1.11.post2**. Recomenda-se monitorar issues críticas abertas contra essa versão (detalhadas na seção 5) antes de migração por parte de novos usuários.

---

## 3. Progresso do Projeto

### PRs Fechados/Merged (12 itens de destaque)

| # | Título | Tipo | Impacto |
|---|--------|------|---------|
| [#5192](https://github.com/agentscope-ai/QwenPaw/pull/5192) | fix(desktop): guard against Windows console crash | **Bug Fix** | Corrige crash em terminais Windows legados e self-kill commands — crítico para estabilidade desktop |
| [#4900](https://github.com/agentscope-ai/QwenPaw/pull/4900) | Decouple plugin loader initialization from agent startup | **Refactoring** | Resolve inicialização em ambientes frozen (PyInstaller/Tauri) — impacta lançamento desktop |
| [#4310](https://github.com/agentscope-ai/QwenPaw/pull/4310) | feat(console): show context usage | **Feature** | Exibe indicador de uso de contexto no chat header com níveis normal/warning/danger |
| [#5130](https://github.com/agentscope-ai/QwenPaw/pull/5130) | feat(chat): add per-turn token and context usage popover | **Feature** | Adiciona popover de uso de tokens por rodada no Console — complementa #4310 |
| [#4433](https://github.com/agentscope-ai/QwenPaw/pull/4433) | Add token usage info output in each conversation | **Feature** | Badge flutuante de TokenUsage + nota markdown sobre uso —feature UX completado |
| [#5123](https://github.com/agentscope-ai/QwenPaw/pull/5123) | feat(skill): Update skill-market, include qwenpaw platform | **Feature** | Adiciona endpoint do skill market e melhora UI com preview |
| [#5146](https://github.com/agentscope-ai/QwenPaw/pull/5146) | fix(skill): Improve skill-slash-inject and display | **Bug Fix** | Corrige exibição expandida de SKILL.md ao invocar slash command — fecha #5031 |
| [#5150](https://github.com/agentscope-ai/QwenPaw/pull/5150) | feat(yuanbao): add bot message filtering and env var support | **Feature** | Adiciona `accept_bot_messages` e suporte a variáveis de ambiente no canal Yuanbao |
| [#4602](https://github.com/agentscope-ai/QwenPaw/pull/4602) | feat(cron): isolated cron job within unified session | **Feature** | Permite cron jobs sem histórico e os exibe em sessão unificada |
| [#4495](https://github.com/agentscope-ai/QwenPaw/pull/4495) | fix(cron): return 422 for cron validation | **Bug Fix** | Melhora tratamento de erros de validação de cron job |
| [#5067](https://github.com/agentscope-ai/QwenPaw/pull/5067) | feat(driver): introduce Agent OS Driver | **Architecture** | Abstração unificada para capacidades externas (MCP/A2A/ACP) — impacto arquitetural significativo |
| [#4622](https://github.com/agentscope-ai/QwenPaw/pull/4622) | plugin(datapaw): add data-analysis plugin with 12 BI skills | **Plugin** | Novo plugin DataPaw com 12 habilidades de BI |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (por comentários)

| # | Título | Comentários | Status | Tendência |
|---|--------|-------------|--------|-----------|
| [#1911](https://github.com/agentscope-ai/QwenPaw/issues/1911) | [channel] 小艺 — integração com canal XiaoYi não funciona | **22** | OPEN | Problema recorrente desde 2026-03-20, sem resolução |
| [#5140](https://github.com/agentscope-ai/QwenPaw/issues/5140) | [Bug]: v1.1.11.post2附件下载还是有问题 (docx/pdf) | **6** | OPEN | Bug de regressão em downloads de anexos |
| [#5181](https://github.com/agentscope-ai/QwenPaw/issues/5181) | [Bug]: 插件依赖安装导致cmd窗口持续弹窗 | **5** | OPEN | Impacta experiência desktop em ambientes com rede instável |
| [#5063](https://github.com/agentscope-ai/QwenPaw/issues/5063) | [Feature]: Integrate Headroom as context compression layer | **4** | OPEN | Proposta interessante para redução de 60-95% em consumo de tokens |

### Análise das Demandas

**1. Canal XiaoYi (Huawei) — 22 comentários**
O issue mais antigo em atividade, criado em março de 2026, ainda sem resolução. O usuário implementou o canal mas recebe "开小差，网络拥堵" do lado da Huawei. Necesário suporte da equipe para debugging de integração com plataforma third-party.

**2. Gestão de Contexto e Token (múltiplos issues relacionados)**
- [#5171](https://github.com/agentscope-ai/QwenPaw/issues/5171) — compressão de contexto perde informação completamente
- [#5122](https://github.com/agentscope-ai/QwenPaw/issues/5122) — estatísticas de compressão não batem com API real
- [#5161](https://github.com/agentscope-ai/QwenPaw/issues/5161) — sistema para de responder em conversas longas
- [#5063](https://github.com/agentscope-ai/QwenPaw/issues/5063) — proposta de integração Headroom para compressão

Este é o **tema mais discutido**, refletindo demanda real por gestão eficiente de contexto em agentes com longas interações.

**3. Experiência Feishu CardKit**
- [#5167](https://github.com/agentscope-ai/QwenPaw/issues/5167) — streaming cards lentos em respostas longas

---

## 5. Bugs e Estabilidade

### Bugs Críticos (impacto alto / múltiplos afetados)

| Severidade | # | Descrição | Versão | Status |
|-------------|---|-----------|--------|--------|
| 🔴 **Crítico** | [#5181](https://github.com/agentscope-ai/QwenPaw/issues/5181) | Cmd windows popup infinito durante instalação de plugins com rede instável | v1.1.11.post2 | OPEN |
| 🔴 **Crítico** | [#5184](https://github.com/agentscope-ai/QwenPaw/issues/5184) | Local model providers não aparecem na UI | v1.1.11.post2 | OPEN |
| 🔴 **Crítico** | [#5138](https://github.com/agentscope-ai/QwenPaw/issues/5138) | Processo Windows cliente cresce continuamente até 90%+ memória | v1.1.11.post2 | CLOSED |
| 🟠 **Alto** | [#5140](https://github.com/agentscope-ai/QwenPaw/issues/5140) | Download de docx/pdf retorna erro 404 | v1.1.11.post2 | OPEN |
| 🟠 **Alto** | [#5199](https://github.com/agentscope-ai/QwenPaw/issues/5199) | Anexo binário ainda com problemas (regressão) | v1.1.11.post2 | CLOSED |
| 🟠 **Alto** | [#5162](https://github.com/agentscope-ai/QwenPaw/issues/5162) | Lógica de pensamento entra em loop infinito | - | OPEN |
| 🟡 **Médio** | [#5171](https://github.com/agentscope-ai/QwenPaw/issues/5171) | Compressão de contexto perde toda informação | v1.1.11 | OPEN |
| 🟡 **Médio** | [#5166](https://github.com/agentscope-ai/QwenPaw/issues/5166) | Python 3.13: Plugin TeamChat falha com `No module named 'imghdr'` | - | OPEN |
| 🟡 **Médio** | [#5122](https://github.com/agentscope-ai/QwenPaw/issues/5122) | Estatísticas de compressão divergem da carga real da API | v1.1.11 | OPEN |
| 🟡 **Médio** | [#5137](https://github.com/agentscope-ai/QwenPaw/issues/5137) | Config de busca de memória e vetor é perdida ao salvar | v1.1.11 | CLOSED |

### Observação Importante
A versão **v1.1.11.post2** apresenta um **padrão de regressões**, especialmente em funcionalidades do cliente desktop e downloads de anexos. Recomenda-se atenção da equipe de QA.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em Proposta/Aprovação

| # | Título | Tipo | Prioridade Indicada | Status |
|---|--------|------|---------------------|--------|
| [#5210](https://github.com/agentscope-ai/QwenPaw/pull/5210) | feat(cli): add `cron update` command | CLI Enhancement | Média | OPEN (first-time contributor) |
| [#5158](https://github.com/agentscope-ai/QwenPaw/pull/5158) | feat(console): add user input queue | UX | Alta | OPEN (Under Review) |
| [#5063](https://github.com/agentscope-ai/QwenPaw/issues/5063) | Integrate Headroom for context compression | Performance | Alta | OPEN |
| [#5103](https://github.com/agentscope-ai/QwenPaw/issues/5103) | Conversation queue + token stats + timestamps | UX | Alta | CLOSED |
| [#5164](https://github.com/agentscope-ai/QwenPaw/issues/5164) | Desktop system tray, auto-start, background service | Desktop | Média | CLOSED |
| [#5009](https://github.com/agentscope-ai/QwenPaw/issues/5009) | Roadmap para integração Langfuse/OpenTelemetry | Observability | Média | CLOSED |
| [#5088](https://github.com/agentscope-ai/QwenPaw/pull/5088) | Initial governance & sandbox interface | Architecture | Baixa | OPEN |

### Tendências de Roadmap Observadas

1. **Gestão de Contexto** — Proposta de integração Headroom (#5063) e múltiplos issues sobre compressão indicam foco em eficiência de tokens
2. **Desktop Experience** — Sistema tray, auto-start, e melhorias de startup (#5153) sugerem foco em usabilidade desktop
3. **Observabilidade** — Demanda por Langfuse/OpenTelemetry (#5009) reflete necessidade enterprise
4. **CLI Enhancement** — `cron update` (#5210) fecha gap de usabilidade em automação

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

**1. Estabilidade Desktop Windows**
> *"打开客户端后进程会持续增加，内存会占用到90%以上"*
> — [#5138](https://github.com/agentscope-ai/QwenPaw/issues/5138)

O cliente Windows tem problemas de **memory leak** e crash no console, afetando experiência de uso diário.

**2. Gestão de Contexto em Longas Conversas**
> *"当单个对话的轮

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>


# Relatório de Projeto ZeroClaw — 2026-06-16

## 1. Panorama do dia

ZeroClaw mantém um ritmo de atividade intenso com **50 issues e 50 PRs atualizados nas últimas 24h**, embora nenhuma release tenha sido publicada no período. A comunidade está focada em preparativos para as versões v0.8.1 e v0.9.0, com destaque para debates técnicos substanciais em RFCs sobre compressão de contexto nativa, pipeline CI reforçado e migração para WebAssembly-first. A saúde geral do projeto permanece ativa, mas há sinais de Technical Debt relevante — incluindo 153 commits perdidos em um revert anterior e múltiplas regressões sendo tratadas simultaneamente.

---

## 2. Lançamentos

**Nenhum release publicado nas últimas 24h.**

O projeto está em período de preparação para as versões v0.8.1 (features de integração, canais e ferramentas) e v0.9.0 (autenticação, segurança e mudanças de breaking change). Os trackers ativos são:

- **[#6970](https://github.com/zeroclaw-labs/zeroclaw/issues/6970)** — v0.8.1 integration/channel/provider/tool queue and history
- **[#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)** — v0.9.0 auth, security, gateway, and breaking-change queue and history

---

## 3. Progresso do Projeto

Três PRs foram fechados/merged nas últimas 24h, representando avanços concretos:

| PR | Escopo | Impacto |
|----|--------|---------|
| **[#7551](https://github.com/zeroclaw-labs/zeroclaw/pull/7551)** | `fix(gateway): fail fast on free-form ask_user for WS approval channel` | Resolveu o bug S1 onde `ask_user` falhava silenciosamente em sessões WebSocket do gateway. Corrigido por `chengzhichao-xydt`. |
| **[#1458](https://github.com/zeroclaw-labs/zeroclaw/issues/1458)** | Feature: Add support for local CA certificates | Merge concluído, habilitando usuários a especificarem uma CA raiz confiável para endpoints de inferência customizados. |
| **[#7542](https://github.com/zeroclaw-labs/zeroclaw/issues/7542)** (resolvido via #7551) | Bug: `ask_user` fails with "Channel closed before receiving a response" | Eliminado comportamento enganoso em sessões do dashboard web. |

**Destaque em PRs em aberto (atividade intensa):**

- **[#7748](https://github.com/zeroclaw-labs/zeroclaw/pull/7748)** `feat(providers): span attribution - route model provider calls through attribution dispatcher` (size: XL, risco alto) — Refatoração arquitetural que centraliza todas as chamadas ao `ModelProvider` através de um dispatcher de atribuição, com spans observability.
- **[#7492](https://github.com/zeroclaw-labs/zeroclaw/pull/7492)** `feat(cost): support cached input token pricing from OpenAI-compatible` (size: XL) — Suporte a `prompt_tokens_details.cached_tokens` para precificação precisa de tokens em cache.
- **[#7661](https://github.com/zeroclaw-labs/zeroclaw/pull/7661)** `feat(channels): recover Matrix room management` — Restaura API compartilhada para criação e convite de salas em canais Matrix.
- **[#7098](https://github.com/zeroclaw-labs/zeroclaw/pull/7098)** `feat(channel/mattermost): add optional WebSocket listener mode` — Migração de polling REST para WebSocket em Mattermost, reduzindo latência e carga HTTP.

---

## 4. Temas Quentes da Comunidade

**Issues com maior engajamento (comentários + reações):**

| # | Título | Comentários | 👍 | Categoria |
|---|--------|-------------|----|-----------|
| **[#2767](https://github.com/zeroclaw-labs/zeroclaw/issues/2767)** | Multi-Agent Routing | 6 | **9** | Feature/Roadmap |
| **[#1458](https://github.com/zeroclaw-labs/zeroclaw/issues/1458)** | Local CA certificates for custom inference | 8 | 0 | Feature (closed) |
| **[#6067](https://github.com/zeroclaw-labs/zeroclaw/issues/6067)** | Channel reply-intent precheck configurável | 5 | 0 | Feature |
| **[#7673](https://github.com/zeroclaw-labs/zeroclaw/issues/7673)** | RFC: Native context compression (CompressionDecorator) | 3 | 0 | RFC/Arquitetura |
| **[#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850)** | RFC: Decouple memory lifecycle policy | 3 | 0 | RFC/Arquitetura |

**Análise:** O interesse mais alto (9 👍) está no **Multi-Agent Routing** (#2767), que busca implementar workspaces isolados com múltiplos agentes e contas de canais por gateway — uma evolução arquitetural significativa inspirada no OpenClaw. As discussões técnicas concentram-se em RFCs de compressão de contexto e desacoplamento de política de memória, sinalizando foco em performance e escalabilidade.

---

## 5. Bugs e Estabilidade

**Por severidade (últimas 24h):**

### S0 - Crítico / Security Risk
| # | Título | Status |
|---|--------|--------|
| **[#551](https://github.com/zeroclaw-labs/zeroclaw/issues/551)** | Allow insecure https requests to OpenAI-compatible endpoints (self-signed certs) | OPEN, status:blocked |

### S1 - Workflow Blocked
| # | Título | Status |
|---|--------|--------|
| **[#7542](https://github.com/zeroclaw-labs/zeroclaw/issues/7542)** | `ask_user` fails in WS dashboard sessions | **CLOSED** (via #7551) |

### S2 - Degraded Behavior
| # | Título | Canal/Componente |
|---|--------|------------------|
| **[#7733](https://github.com/zeroclaw-labs/zeroclaw/issues/7733)** | mcp_bundles parsed but never enforced at runtime | tools, security |
| **[#7741](https://github.com/zeroclaw-labs/zeroclaw/issues/7741)** | skip response-cache hits for multimodal prompt markers | runtime |
| **[#7742](https://github.com/zeroclaw-labs/zeroclaw/issues/7742)** | refresh system prompt after tool dispatcher swap | runtime |
| **[#7740](https://github.com/zeroclaw-labs/zeroclaw/issues/7740)** | base missing-skill suggestions on effective tool set | runtime |
| **[#7739](https://github.com/zeroclaw-labs/zeroclaw/issues/7739)** | retry transient OAuth refresh failures (email) | channel:email |
| **[#7738](https://github.com/zeroclaw-labs/zeroclaw/issues/7738)** | stable UID fallback when Message-ID is missing (email) | channel:email |
| **[#6698](https://github.com/zeroclaw-labs/zeroclaw/issues/6698)** | Fluent locale files lag English app-string sources | runtime |
| **[#7038](https://github.com/zeroclaw-labs/zeroclaw/issues/7038)** | zeroclaw check websocket 401 despite valid auth | gateway |

**Observação:** Há uma concentração de bugs de gravidade S2 no runtime, especialmente relacionados a cache de resposta, dispatcher de ferramentas e sugestões de skills. A comunidade está respondendo ativamente — todos os bugs S2 foram abertos em 2026-06-15.

---

## 6. Pedidos de Features e Sinais de Roadmap

**Features aceitas / em progresso:**

| # | Título | Prioridade | Status |
|---|--------|-----------|--------|
| **[#2767](https://github.com/zeroclaw-labs/zeroclaw/issues/2767)** | Multi-Agent Routing | p2 | accepted |
| **[#6067](https://github.com/zeroclaw-labs/zeroclaw/issues/6067)** | Channel reply-intent precheck configurável | p2 | accepted |
| **[#6055](https://github.com/zeroclaw-labs/zeroclaw/issues/6055)** | Slack: hydrate thread context from conversations.replies | p2 | accepted |
| **[#6557](https://github.com/zeroclaw-labs/zeroclaw/issues/6557)** | Reconcile runtime model switching with provider structure | p2 | in-progress |
| **[#7749](https://github.com/zeroclaw-labs/zeroclaw/issues/7749)** | Per-agent prompt_injection_mode override | — | OPEN |
| **[#7743](https://github.com/zeroclaw-labs/zeroclaw/issues/7743)** | Support explicit target-profile authority for delegate handoffs | p2 | accepted |
| **[#7468](https://github.com/zeroclaw-labs/zeroclaw/issues/7468)** | Allow aliases to be renamed (TUI) | p2 | accepted |
| **[#7467](https://github.com/zeroclaw-labs/zeroclaw/issues/7467)** | More flexibility in edit strings (TUI) | p2 | accepted |

**RFCs em discussão (indicam direção estratégica):**

- **[#7673](https://github.com/zeroclaw-labs/zeroclaw/issues/7673)** — `CompressionDecorator`: wrapper de provider que comprime `ChatRequest` antes de enviar ao LLM
- **[#7675](https://github.com/zeroclaw-labs/zeroclaw/issues/7675)** — Pipeline CI reforçado com supply-chain scanning, proveniência e SBOM
- **[#7674](https://github.com/zeroclaw-labs/zeroclaw/issues/7674)** — Eliminar Node.js do build e runtime (WebAssembly-first)
- **[#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850)** — `MemoryStrategy` trait para desacoplar políticas de ciclo de vida de memória dos backends

**Sinais de roadmap:** A direção clara aponta para (1) multi-tenancy com multi-agent routing, (2) otimização de custo via compressão de contexto e cache de tokens, (3) segurança de supply-chain via CI reforçado, e (4) redução de dependências (Node.js → WASM).

---

## 7. Resumo de Feedback dos Usuários

**Dores reais identificadas:**

1. **Conectividade a endpoints customizados:** Usuários com certificados autoassinados não conseguem conectar a endpoints OpenAI-compatíveis (#551). O workaround atual não existe, classificando como S0.

2. **Latência em Mattermost:** O polling REST a cada 3 segundos é considerado inadequado; a comunidade solicita WebSocket nativo (#7098).

3. **Thread context em Slack:** Usuários precisam re-@mencionar o bot a cada mensagem em threads com `strict_mention_in_thread` habilitado, criando experiência fragmentada (#6055).

4. **Segurança de MCP bundles:** O campo `mcp_bundles` é parseado e exibido na configuração, mas nunca é aplicado em runtime, representando falha de isolamento de segurança (#7733).

5. **UX de edição no TUI:**setências como renomear aliases e navegar strings de edição são consideradas tediosas (#7468, #7467).

6. **Cache de resposta quebrado para multimodal:** Agentes que usam imagens收到的 respostas em cache podem receber saídas incorretas porque o cache não considera marcadores `[IMAGE:...]` (#7741).

**Satisfação:** O merge da feature de CA certificates (#1458) e a correção rápida do bug `ask_user` em WebSocket (#7542/#7551) demonstram responsiveness a dores críticas. A atividade intensa em RFCs indica que a comunidade sente que o projeto está evoluindo estrategicamente.

---

## 8. Backlog que Merece Atenção

| # | Título | Idade | Situação |
|---|--------|-------|----------|
| **[#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074)** | Audit: track 153 commits lost in bulk revert c3ff635 | ~2 meses | in-progress (Audacity88) |
| **[#5987](https://github.com/zeroclaw-labs/zeroclaw/pull/5987)** | feat(nix): add flake.nix | ~2 meses | OPEN, stale-candidate, needs-author-action |
| **[#7098](https://github.com/zeroclaw-labs/zeroclaw/pull/7098)** | feat(channel/mattermost): WebSocket listener | ~2 semanas | OPEN, stale-candidate, needs-author-action |
| **[#7081](https://github.com/zeroclaw-labs/zeroclaw/pull/7081)** | feat(memory): extend hygiene to prune daily/core DB rows | ~2 semanas | OPEN, stale-candidate |
| **[#7245](https://github.com/zeroclaw-labs/zeroclaw/pull/7245)** | fix(read_skill): plugin-bundled skills | ~10 dias | OPEN, needs-author-action |

**Prioridade de atenção:**

1. **#6074** — O revert de 153 commits precisa de auditoria de recuperação. Se commits valiosos foram perdidos, há risco de regressão sutil.
2. **#551** — Bug S0 sobre certificados autoassinados está "blocked" sem resolução visível, afetando usuários corporativos.
3. **PRs stale-candidate** — 4 PRs estão marcados como stale-candidate, sugerindo que precisam de revisões ou resposta dos mantenedores para não entrarem em estagnação.

---

*Relatório gerado em 2026-06-16 com base em dados do GitHub de zeroclaw-labs/zeroclaw.*

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*