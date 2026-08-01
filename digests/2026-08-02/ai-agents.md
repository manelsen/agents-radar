# Resumo diário do ecossistema de agentes de IA 2026-08-02

> Issues: 0 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-08-01 20:43 UTC

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

**Data de referência:** 2026-08-02  
**Projetos analisados:** 7 (NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw, ZeroClaw)

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **dois polos de intensidade**: ZeroClaw e Hermes Agent lideram em volume absoluto de atividade (50+ items/24h), indicando projetos em fase de crescimento acelerado e amplitude de features, enquanto NanoBot, IronClaw e CoPaw mantêm cadências elevadas com foco em estabilização pós-release. PicoClaw opera em modo de manutenção leve, e NullClaw permanece como referência estática. A tendência dominante é a convergência para **arquiteturas multi-provider** (integrações OrcaRouter, Exa, Mistral, NVIDIA NIM) e **separação de responsabilidades** (sessão/memória, inbound/outbound, provider/core), sugerindo que o mercado está amadurecendo de soluções monolíticas para plataformas extensíveis.

---

## 2. Comparação de Atividade

| Projeto | Issues (abertas/fechadas) | PRs (abertos/merged) | Releases (24h) | Avaliação de Saúde |
|---------|--------------------------|----------------------|----------------|--------------------|
| **NullClaw** | 0 / 0 | 0 / 0 | 0 | ⚫ Inativo |
| **NanoBot** | 1 / 4 | 12 / 13 | 0 | 🟢 Estável e ativo |
| **Hermes Agent** | 42 / 8 | 42 / 8 | 0 | 🟢 Alto engajamento |
| **PicoClaw** | 1 / 0 | 2 / 1 | 0 | 🟡 Manutenção leve |
| **IronClaw** | 24 / — | 31 / 5 | 0 | 🟢 Refatoração ativa |
| **CoPaw** | 14 / — | 14 / 1 | 0 | 🟡 Regressões críticas |
| **ZeroClaw** | 44 / 6 | 43 / 3 | 0 | 🟢 Matura + RFC pipeline |

**Observação:** Nenhum projeto publicou releases nas últimas 24h. ZeroClaw e IronClaw estão em preparação para releases significativas (v0.8.4 e WS2 completion, respectivamente).

---

## 3. Posicionamento do Projeto Principal

### NanoBot como referência de estabilidade

NanoBot destaca-se como o projeto com **melhor proporção de trabalho fechado**, com 13 PRs merged contra 12 abertos — indicando disciplina de merge e baixa acumulação de dívida técnica.

**Vantagens frente aos pares:**

| Dimensão | NanoBot | Hermes Agent | IronClaw | ZeroClaw |
|----------|---------|--------------|----------|----------|
| **Cadência de bug fixes** | 5 p1 merged/24h | 7 bugs P2 abertos | 4 P0 cache abertas | 3 S1-S2 WhatsApp |
| **Tempo de resposta** | <3 dias (média) | 4+ meses (cron, setup) | Em andamento | RFCs aceitas sem action |
| **Diversidade de contributors** | 8+ autores | Comunidade ativa | Core team | 15+ RFCs等待 decisão |
| **Release management** | Nenhuma release planejada | Sem release | Draft #5598 | v0.8.4 iminente |

**Diferenças técnicas:**

- **NanoBot:** Foco em resiliência de sessão (cursor persistence, cron state, session summary), rate limiting por canal, WebUI/CLI — público ideal: desenvolvedores e equipes operando múltiplos canais.
- **Hermes Agent:** Provider-first com Desktop app, cron jobs, e TUI — público ideal: usuários desktop que necessitam de interface nativa e multi-provider.
- **IronClaw:** Arquitetura baseada em contratos (ports/ports inversions) com refatoração em waves — público ideal: desenvolvedores Rust que precisam de extensibilidade profunda.
- **ZeroClaw:** Segurança-first com sandbox Landlock, RFC governance, e split microkernel — público ideal: operadores enterprise que exigem compliance e isolamento.

---

## 4. Focos Técnicos Compartilhados

Os sete projetos convergem em quatro áreas técnicas prioritárias:

### 4.1 Multi-Provider e Interoperabilidade

| Projeto | Provider News |
|---------|---------------|
| **Hermes Agent** | PR merged: Mistral AI provider plugin (#76391) |
| **NanoBot** | Rate limiting por sender (#5108), DeepSeek message hardening (#3869, ~78 dias aberto) |
| **PicoClaw** | PRs abertos: Exa web search, OrcaRouter OpenAI-compatible |
| **CoPaw** | PRs abertos: OrcaRouter, NVIDIA NIM |
| **IronClaw** | Feature request: OrcaRouter como built-in provider (#7009) |
| **ZeroClaw** | RFC: OpenAI Chat Completions adapter (#8603) — alta demanda |

**Padrão:** Integração horizontal de providers (OrcaRouter aparece em 4/7 projetos) indica que a diferenciação de modelo está se tornando commodity.

### 4.2 Gerenciamento de Memória e Sessão

| Projeto | Foco |
|---------|------|
| **NanoBot** | Cursor persistence em runs efêmeros (#5208), malformed session tolerance (#5201), cross-session search (#5211) |
| **ZeroClaw** | RFC: Separar conversation history de long-term memory (#9048), Lucid como storage vs enrichment |
| **CoPaw** | Auto-compression sem trigger summarize (#6624), memory placeholders com role correto (#6628) |
| **IronClaw** | Cache regressions P0 (prefix byte-stability, tool array byte-identity) |
| **Hermes Agent** | Time awareness consistente cross-surface (#76392) |

**Padrão:** A tensão entre contexto efêmero/compacto e persistência de memória curada é onipresente.

### 4.3 Shell Commands e Execução Segura

| Projeto | Issue |
|---------|-------|
| **CoPaw** | UI freeze com output massivo (#6589), timeout ignorado (#6608), nohup blocking (#6480) — 3 bugs separados |
| **NanoBot** | `wait_for` após truncamento (#5200), preserve execution targets |
| **ZeroClaw** | RFC: Camada de confirmação per-execution (#7155, P1) — padrão "allow/ask/deny" |

**Padrão:** Shell execution é subestimado em complexidade; CoPaw especificamente tem regressões severas.

### 4.4 Autenticação e Segurança de Canais

| Projeto | Foco |
|---------|------|
| **ZeroClaw** | Landlock sandbox, OAuth profiles, 2 bugs S1-S2 no WhatsApp |
| **NanoBot** | Trusted proxy bootstrap auth (#5210), rate limiting |
| **Hermes Agent** | Bearer gate em profile-serve (#76408) |

**Padrão:** Enterprise deployment requer autenticação lateral (east-west) e validação de canal.

---

## 5. Análise de Diferenciação

### 5.1 Por Público-Alvo

| Segmento | Projeto Principal | Características |
|----------|------------------|-----------------|
| **Desenvolvedores individuais** | NanoBot, PicoClaw | Setup rápido, CLI madura, WebUI simples |
| **Teams/Canais múltiplos** | NanoBot, Hermes Agent | Rate limiting, multi-channel adapters |
| **Desktop daily-driver** | Hermes Agent, CoPaw | TUI, wake word, global hotkeys |
| **Enterprise/Compliance** | ZeroClaw | Security RFCs, sandbox, secret management |
| **Desenvolvedores Rust** | IronClaw | Ports inversions, contrato-based architecture |
| **Extensibilidade profunda** | ZeroClaw, IronClaw | Plugin systems, A2A protocol |

### 5.2 Por Arquitetura

| Tipo Arquitetural | Projetos | Implicações |
|-------------------|----------|-------------|
| **Monolito extensível** | NanoBot, CoPaw, PicoClaw | Deployment simples, trade-off em granularidade |
| **Microkernel modular** | ZeroClaw | 18 crates publisháveis, isolamento de segurança |
| **Contrato-based** | IronClaw | Inversão de dependências, testabilidade |
| **Plugin-native** | Hermes Agent | Providers como plugins first-class |

### 5.3 Por Estratégia de Release

| Estratégia | Projetos | Observação |
|------------|----------|------------|
| **Continuous delivery** | NanoBot | 13 PRs merged/24h sem releases formalizadas |
| **Feature freeze + release** | IronClaw | Waves de refatoração agrupadas em release |
| **RFC-governed** | ZeroClaw | 12+ RFCs accepted indicam transparência de roadmap |
| **Bug-driven** | CoPaw | 5 bugs críticos simultâneos — postura reativa |

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração

| Projeto | Tempo médio de bug fix | Issues stale | Ritmo |
|---------|------------------------|--------------|-------|
| **NanoBot** | <3 dias (bugs críticos) | Baixo | 🟢 Consolidação rápida |
| **Hermes Agent** | 4+ meses (cron, setup) | Alto (#2788, #2736) | 🟡 Acúmulo crônico |
| **CoPaw** | 5-7 dias sem resposta | #6480, #6520 | 🟠 Riscos de confiança |
| **ZeroClaw** | Bugs S1-S2 em progresso | 15+ needs-maintainer-review | 🟡 Gargalo de decisão |
| **IronClaw** | Em andamento (P0s) | Baixo | 🟢 Equipe reativa |

### 6.2 Engajamento por Contribuidor

| Projeto | Padrão de contributors | Observação |
|---------|------------------------|------------|
| **NanoBot** | Re-bin, KDB-Wind, chengyongru, professionelle-hypnose | Diversificado, sem concentração |
| **Hermes Agent** | Community-driven | Long-standing requests resolvidos (#20859 Mistral) |
| **CoPaw** | AI-assisted reports + first-time contributors | PRs #6622 (OrcaRouter), #6302 (12 dias em review) |
| **ZeroClaw** | RFC-first culture | 16+ comentários em RFC #9048, 13 em #9127 |
| **IronClaw** | Core team dominant | WS waves sugerem controle centralizado |

### 6.3 Classificação de Maturidade

```
ESTÁGIO 1 (Experimental)  → NullClaw
ESTÁGIO 2 (Manutenção)  → PicoClaw
ESTÁGIO 3 (Crescimento) → CoPaw, Hermes Agent
ESTÁGIO 4 (Consolidação)→ NanoBot, IronClaw
ESTÁGIO 5 (Maturidade)  → ZeroClaw
```

---

## 7. Sinais de Tendência

### 7.1 Tendências de Mercado Extraídas

**1. Multi-Provider como baseline**
> OrcaRouter aparece em 4 projetos (NanoBot, PicoClaw, CoPaw, IronClaw) como provider proposto. A fragmentação de provedores LLM está sendo resolvida por routers middleware, não por integração direta.

**2. Separação memória/ação**
> RFC #9048 (ZeroClaw), #5211 (NanoBot), e issues de compaction em CoPaw indicam que o mercado reconhece a diferença entre histórico de conversa, memória curada, e contexto compactado.

**3. Enterprise security converge para sandbox**
> Landlock (ZeroClaw), trusted proxy auth (NanoBot), e OAuth profiles demonstram que deployment enterprise requer isolamento em nível de sistema operacional, não apenas aplicação.

**4. Desktop app como vector de adoção**
> Hermes Agent (font picker, notch indicator, deep links) e CoPaw (global hotkey, workspace shortcuts) investem em UX desktop para competir com Cursor/Raycast.

**5. RFC governance como mecanismo de confiança**
> ZeroClaw é o único projeto com processo formal de RFC (#8692 decision tracker). Isso sugere que para projetos maduros, governança transparente de roadmap é diferenciador competitivo.

**6. Shell commands são subestimados**
> CoPaw tem 3 bugs abertos sobre shell execution (UI freeze, timeout, nohup). Isso é sintomático de que a execução de comandos nativos em agents está sendo negligenciada como "feature simples".

### 7.2 Recomendações por Segmento

| Tomador de Decisão | Recomendação |
|--------------------|--------------|
| **Desenvolvedor individual** | Adotar NanoBot para prototipagem rápida; monitorar CoPaw para desktop UX |
| **Time de engenharia** | Avaliar ZeroClaw para compliance e IronClaw para extensibilidade Rust |
| **DevOps/Platform** | Acompanhar ZeroClaw v0.8.4 (crates.io publish) como referência de packaging |
| **Pesquisador/ML** | Hermes Agent para autoresearch (#5114) e Multi-agent orchestration |

---

**Conclusão:** O ecossistema demonstra maturidade crescente com convergência em problemas técnicos (multi-provider, memória/sessão, shell security), mas diverve em arquitetura (microkernel vs. monolito) e governança (RFC vs. bug-driven). ZeroClaw e Hermes Agent lideram em volume, enquanto NanoBot oferece o melhor track record de estabilização. O risco principal compartilhado é a acumulação de bugs críticos em projetos com alta cadência (CoPaw, Hermes Agent) sem resolução oportuna.

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-08-02

---

## 1. Panorama do Dia

O ecossistema NanoBot registrou alta atividade em 02/08/2026, com **25 PRs atualizados** e **5 issues processadas** nas últimas 24 horas. O ritmo de desenvolvimento permanece intenso: 12 pull requests estão abertos e 13 foram merged ou fechados, indicando um ciclo de kontribusições vigoroso. **Nenhuma release foi publicada**, sinalizando que a equipe pode estar preparando um lançamento agrupado com as múltiplas correções p1 em revisão. A saúde geral do projeto é positiva, com foco em estabilidade (correções de bugs críticos) e experiência do usuário (WebUI e sessão).

---

## 2. Lançamentos

**Nenhum lançamento registrado nas últimas 24h.**

O projeto não publicou novas versões, embora o volume de PRs p1 merged sugira preparação para uma release de manutenção. Recomenda-se acompanhar o repositório para announcements.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados de Destaque

| # | Título | Autor | Impacto |
|---|--------|-------|---------|
| [#5208](https://github.com/HKUDS/nanobot/pull/5208) | fix(dream): advance cursor when durable changes were made | professionelle-hypnose | **P1** — Corrige cursor do histórico que não avançava em runs efêmeros, evitando reprocessamento repetido |
| [#5183](https://github.com/HKUDS/nanobot/pull/5183) | fix(cron): preserve manual run completion state | yu-xin-c | **P1** — Protege store de cron durante execuções manuais e preserva status de conclusão |
| [#5153](https://github.com/HKUDS/nanobot/pull/5153) | fix(memory): handle non-string timestamp and missing role in raw_archive | santhreal | **P1** — Trata mensagens com timestamps inválidos ou campos `role` ausentes durante arquivamento |
| [#5200](https://github.com/HKUDS/nanobot/pull/5200) | fix(exec): preserve wait targets across response truncation | KDB-Wind | **P1** — Garante que `wait_for` funcione corretamente após truncamento de resposta |
| [#5201](https://github.com/HKUDS/nanobot/pull/5201) | fix(session): tolerate malformed persisted session summary | KDB-Wind | **P1** — Torna o sistema tolerante a resumos de sessão corrompidos no storage |
| [#5108](https://github.com/HKUDS/nanobot/pull/5108) | fix(channels): add per-sender message rate limiting | amplifierplus | **P1** — Implementa rate limiting por usuário/chat em adaptadores de canal — segurança e custo |
| [#5172](https://github.com/HKUDS/nanobot/pull/5172) | feat: preserve Responses reasoning state and compact context | chengyongru | Funcionalidade — Adota capacidades do Responses API (preserva reasoning e contexto compacto) |
| [#5209](https://github.com/HKUDS/nanobot/pull/5209) | refactor(webui): reuse sidebar selection highlight | Re-bin | UX — Extrai componente reutilizável para highlight da sidebar, eliminando flicker |
| [#5199](https://github.com/HKUDS/nanobot/pull/5199) | refactor(cli): narrow Pyright suppressions | KDB-Wind | Qualidade — Limpa supressões de tipagem para melhor manutenibilidade |
| [#3732](https://github.com/HKUDS/nanobot/pull/3732) | fix(providers): require api_base before local provider wins on keyword match | NearlCrews | Correção de regression — Evita sequestro silencioso de modelos cloud por providers locais |

**Resumo:** Cinco correções p1 wurden fechadas, abrangendo cron, memory, session e exec. Destaque para a correção de rate limiting em canais, que impacta diretamente custo e segurança em produção.

---

## 4. Temas Quentes da Comunidade

### Issues com Mais Comentários

| # | Título | Comentários | Status | Relevância |
|---|--------|-------------|--------|------------|
| [#5185](https://github.com/HKUDS/nanobot/issues/5185) | Nanobot returning tool calls code in responses | 4 | CLOSED | Bug crítico de vazamento de código de tool calls para usuários finais |
| [#5205](https://github.com/HKUDS/nanobot/issues/5205) | return "No module named ensurepip" when executing nanobot plugins enable feishu | 2 | CLOSED | Erro de dependência no plugin Feishu — impacto em deploys Linux |
| [#5198](https://github.com/HKUDS/nanobot/issues/5198) | Not possible to change models in a specific session | 1 | OPEN | Feature request importante — usabilidade do seletor de modelos |

### PRs Abertos com Maior Potencial de Impacto

| # | Título | Autor | Labels | Relevância |
|---|--------|-------|--------|------------|
| [#5211](https://github.com/HKUDS/nanobot/pull/5211) | feat(session): add cross-session search and mentions | Re-bin | feature | Permite busca entre sessões e menções `@` — grande melhoria de UX |
| [#5210](https://github.com/HKUDS/nanobot/pull/5210) | feat(webui): support trusted proxy bootstrap auth | concertypin | p1, security | Autenticação via Cloudflare Tunnel + Access —需求 de produção |
| [#5184](https://github.com/HKUDS/nanobot/pull/5184) | feat(webui): add Quick Chat and Temporary Chat | Re-bin | feature | Quick Chat persistente + Temporary Chat efêmero — novos modos de interação |
| [#5139](https://github.com/HKUDS/nanobot/pull/5139) | Fix: Preserve media paths during session consolidation | woaiwang | p1 | Corrige perda de caminhos de mídia ao arquivar sessões — dados de usuário em risco |

**Análise:** A comunidade demonstra forte interesse em **interoperabilidade entre sessões** (busca, menções) e **autenticação corporativa** (trusted proxy). O PR #5184 adiciona diferenciação clara entre conversas rápidas persistentes e temporárias — padrão esperado em IAs modernas.

---

## 5. Bugs e Estabilidade

### Bugs Fechados (4/5 issues)

| # | Severidade | Título | Tempo de Resolução |
|---|-----------|--------|---------------------|
| [#5185](https://github.com/HKUDS/nanobot/issues/5185) | **Alta** | Tool calls code exposto nas respostas | ~2 dias |
| [#5205](https://github.com/HKUDS/nanobot/issues/5205) | **Média** | `ensurepip` ausente no plugin Feishu | <1 dia |
| [#4801](https://github.com/HKUDS/nanobot/issues/4801) | **Alta** | KeyError em `message['role']` com sessões malformed | ~26 dias |
| [#5163](https://github.com/HKUDS/nanobot/issues/5163) | **Média** | Cron manual perde estado de conclusão | ~3 dias |

### Bug Aberto (1/5 issues)

| # | Severidade | Título | Status |
|---|-----------|--------|--------|
| [#5198](https://github.com/HKUDS/nanobot/issues/5198) | **Média** | Não é possível trocar modelos em uma sessão específica | OPEN — aguardando triagem |

### Regressões em Fix

- **#5200** — `wait_for` preservado após truncamento (p1, merged)
- **#5201** — Resumo de sessão malformed tolerado (p1, merged)
- **#5153** — Timestamps não-string e `role` ausente tratados (p1, merged)

**Métricas:** 4 bugs fechados, 1 aberto. O tempo médio de resolução de bugs parece adequado (< 3 dias para a maioria). A issue #4801 ficou aberta 26 dias, indicando possível complexidade.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Abertas

| # | Título | Autor | Sinais de Prioridade |
|---|--------|-------|----------------------|
| [#5211](https://github.com/HKUDS/nanobot/pull/5211) | Cross-session search e menções `@` | Re-bin | Feature completa, sem p1/p2 definido |
| [#5210](https://github.com/HKUDS/nanobot/pull/5210) | Trusted proxy bootstrap auth | concertypin | **P1**, security — deployments Cloudflare |
| [#5184](https://github.com/HKUDS/nanobot/pull/5184) | Quick Chat + Temporary Chat | Re-bin | Diferenciação de modos de conversa |
| [#5207](https://github.com/HKUDS/nanobot/pull/5207) | Model preset para subagents | professionelle-hypnose | **P2** — controle fino de spawn |
| [#5202](https://github.com/HKUDS/nanobot/pull/5202) | Model preset switching discoverable | chengyongru | **P2** — UX do seletor de modelos |
| [#5198](https://github.com/HKUDS/nanobot/issues/5198) | Trocar modelos por sessão | whisperity | Bug + feature request — UX |

### Tendências Identificadas

1. **Interoperabilidade de sessões** — busca, menções, títulos naturais
2. **Autenticação corporativa** — trusted proxy para Cloudflare, rate limiting
3. **Modos de chat** — persistente vs. efêmero
4. **Controle de modelo** — presets por sessão/subagent, UI descobrível

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Dor | Issue | Severidade |
|-----|-------|-----------|
| Código de tool calls aparece nas respostas ao usuário | [#5185](https://github.com/HKUDS/nanobot/issues/5185) | Crítica — experiência quebrada |
| Plugin Feishu não instala (`ensurepip`) | [#5205](https://github.com/HKUDS/nanobot/issues/5205) | Média — bloqueia integração |
| Não consegue trocar modelo em uma sessão ativa | [#5198](https://github.com/HKUDS/nanobot/issues/5198) | Média — UX limitante |
| Arquivamento de sessão perde mídia | [#5139](https://github.com/HKUDS/nanobot/pull/5139) | Crítica — perda de dados |

### Cenários de Uso Emergent

- **Deploys Linux com uv** — o bug `ensurepip` revela adoção em servidores Linux com gerenciador uv
- **Integração corporativa** — autenticação via Cloudflare Tunnel (PR #5210)
- **Autoscaling multi-canal** — rate limiting por sender (PR #5108) indica uso em ambientes com múltiplos usuários simultâneos

### Satisfação

O volume de PRs aceitos e a rapidez nas correções (1-3 dias) indicam **alta responsividade da equipe**. A comunidade contribui ativamente (múltiplos autores: Re-bin, chengyongru, KDB-Wind, professionelle-hypnose, etc.).

---

## 8. Backlog que Merece Atenção

### Issues/PRs Sem Resposta ou Estagnados

| # | Título | Idade | Situação | Ação Recomendada |
|---|--------|-------|----------|------------------|
| [#3869](https://github.com/HKUDS/nanobot/pull/3869) | fix(providers): DeepSeek message hardening | ~78 dias | OPEN, conflict | Revisar conflitos — mudança importante para usuários DeepSeek |
| [#4801](https://github.com/HKUDS/nanobot/issues/4801) | KeyError on malformed session entries | ~27 dias | CLOSED | Já resolvido, monitorar regressão |

### Priorização Sugerida

1. **#3869** — A correção de sanitização de mensagens para DeepSeek está aberta há ~78 dias com conflito. Afeta diretamente usuários da API DeepSeek (v4-pro/v4-flash). Recomenda-se **revisão urgente** ou encerramento do PR se substituído por outra abordagem.

2. **#5198** — O bug/feature request sobre troca de modelos por sessão está aberto sem feedback da equipe. Impacta UX significativamente.

3. **#5211** — Cross-session search é uma feature de alto valor estratégico que pode definir direção do produto.

---

## Métricas Resumidas do Dia

| Indicador | Valor |
|-----------|-------|
| Issues abertas/fechadas | 1 / 4 |
| PRs abertos/fechados | 12 / 13 |
| Releases | 0 |
| Bugs críticos fechados | 2 (incluindo tool calls exposto) |
| Correções p1 merged | 5 |
| Features p1 em revisão | 2 (#5210, #5139) |

**Saúde Geral:** 🟢 **Estável e ativo.** O projeto demonstra alta cadência de desenvolvimento, respostas rápidas a bugs críticos, e progresso em features estratégicas (sessões cruzadas, autenticação corporativa). Atenção ao PR #3869 (DeepSeek) que necessita resolução.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-08-02

---

## 1. Panorama do Dia

O projeto Hermes Agent registrou **alta atividade** em 02/08/2026, com 50 issues e 50 PRs atualizados nas últimas 24 horas, indicando uma comunidade engajada. Nenhuma release foi publicada, sugerindo que o desenvolvimento está focado em preparação para a próxima versão. A distribuição entre issues abertas (42) e fechadas (8) demonstra fluxo contínuo de trabalho, com 8 PRs merged/fechados — indicando que contributions estão sendo integradas ao codebase. Não há sinais de crises críticas emergenciais; a atividade está distribuída entre correções de bugs (P2-P3), features e refatorações. O ecossistema de providers, desktop app e CLI continuam sendo áreas de intenso desenvolvimento.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

O projeto encontra-se em período de desenvolvimento ativo sem tagging de versão nova. É recomendável acompanhar o repositório para announcements em: [NousResearch/hermes-agent/releases](https://github.com/NousResearch/hermes-agent/releases)

---

## 3. Progresso do Projeto

### PRs Merged/Closed Relevantes

| PR | Descrição | Impacto |
|----|-----------|---------|
| [#76408](https://github.com/NousResearch/hermes-agent/pull/76408) | `profile-serve`: bearer gate + bind em 172.x | Reforça segurança interna com API key separada para hops east-west e pinning de listener |
| [#76391](https://github.com/NousResearch/hermes-agent/pull/76391) | **feat(providers): Mistral AI provider plugin** | Provider oficial do Mistral AI como plugin nativo; resolve requests antigos (#42357, #20859, #61160) |
| [#76352](https://github.com/NousResearch/hermes-agent/issues/76352) | Bug: MCP tool result excede contexto | Corrigido com fallback após 3 tentativas de compressão |

### PRs Abertos de Destaque

| PR | Descrição | Componentes |
|----|-----------|-------------|
| [#76399](https://github.com/NousResearch/hermes-agent/pull/76399) | fix(file-tools): resolve V4A patch paths | Corrige resolução de caminhos em patches V4A |
| [#61160](https://github.com/NousResearch/hermes-agent/pull/61160) | feat(providers): adicionar Mistral AI | Integração nativa de provider Mistral via config |
| [#75833](https://github.com/NousResearch/hermes-agent/pull/75833) | fix(cron): harden runtime ownership | Recuperação e supervisão de jobs cron; separação de jobs.json e runtime.db |
| [#76392](https://github.com/NousResearch/hermes-agent/pull/76392) | fix(memory): time awareness consistente | Consciência temporal consistente entre CLI, TUI, gateway, cron e desktop |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| Issue | Título | 👍 | 💬 | Tema |
|-------|--------|----|----|------|
| [#20859](https://github.com/NousResearch/hermes-agent/issues/20859) | **Support for Mistral as LLM provider** | 24 | 11 | Maior demanda da comunidade; provider já tem voice models integrados |
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | Skills index está stale/degradado | 0 | 11 | Infraestrutura; índice com 29.8h (limite 26h) |
| [#2788](https://github.com/NousResearch/hermes-agent/issues/2788) | Cron jobs nunca executam | 0 | 9 | Funcionalidade core; falta logging útil |
| [#49529](https://github.com/NousResearch/hermes-agent/issues/49529) | PyPI 0.17.0 wheel install issues | 0 | 7 | Instalação; doctor false-positive + skills ausentes |
| [#5114](https://github.com/NousResearch/hermes-agent/issues/5114) | Autoresearch skill - autonomous git loop | 0 | 6 | Feature inovadora; experimentação autônoma ML |
| [#2736](https://github.com/NousResearch/hermes-agent/issues/2736) | Obsidian Vault como memória persistente | 0 | 6 | Integração; vault config existe mas não é lido |

### Análise de Demandas

A **maior demanda** da comunidade é a adição do **Mistral AI como provider LLM** (#20859), com 24 👍 — uma das mais votadas. O PR companion [#76391](https://github.com/NousResearch/hermes-agent/pull/76391) já foi merged, indicando resolução iminente. Outros temas recorrentes incluem:

- **Infraestrutura e tooling**: Skills index degradado, cron jobs com baixa observabilidade
- **Experiência de instalação**: Problemas com PyPI wheel e setup wizard
- **Integração avançada**: Obsidian vault, autoresearch autônomo, memória persistente
- **Providers alternativos**: Suporte a Ollama local (dashboard configura incorretamente [#76324](https://github.com/NousResearch/hermes-agent/issues/76324))

---

## 5. Bugs e Estabilidade

### Bugs Críticos (P1-P2) — 0 reportados nas últimas 24h

### Bugs de Alta Prioridade (P2) — 7 encontrados

| Issue | Descrição | Área | Status |
|-------|-----------|------|--------|
| [#75655](https://github.com/NousResearch/hermes-agent/issues/75655) | managed-runtime provisioning sempre falha; `uv sync` com flags conflitantes | CLI/Install | Aberta |
| [#69031](https://github.com/NousResearch/hermes-agent/issues/69031) | Gemini native v1beta: 401/400 auth errors | Agent/Gemini | Aberta |
| [#76255](https://github.com/NousResearch/hermes-agent/issues/76255) | openai-api sempre envia `reasoning.effort`, quebra modelos não-reasoning | Agent/OpenAI | Aberta |
| [#13024](https://github.com/NousResearch/hermes-agent/issues/13024) | setup wizard misclassifica providers configurados | CLI/Setup | Aberta |
| [#12865](https://github.com/NousResearch/hermes-agent/issues/12865) | `hermes mcp configure` não persiste lista vazia | CLI/MCP | Aberta |
| [#64780](https://github.com/NousResearch/hermes-agent/issues/64780) | Gateway model-switch não aguarda AsyncSessionDB | Gateway | Aberta |
| [#76324](https://github.com/NousResearch/hermes-agent/issues/76324) | Hermes Dashboard configura Ollama local incorretamente | Dashboard/Ollama | Aberta |

### Bugs de Prioridade Média (P3) — 20+ identificados

**Categorias mais afetadas:**
- **CLI**: config set corrompe keys com listas YAML [#76138](https://github.com/NousResearch/hermes-agent/issues/76138), cron nunca roda [#2788](https://github.com/NousResearch/hermes-agent/issues/2788)
- **Gateway**: home-channel notice não dispara após SIGTERM [#66087](https://github.com/NousResearch/hermes-agent/issues/66087), truncation de comandos em code blocks [#46941](https://github.com/NousResearch/hermes-agent/issues/46941)
- **Desktop**: Terminal update deixa `/Applications/Hermes.app` stale [#52339](https://github.com/NousResearch/hermes-agent/issues/52339)
- **Compressão**: Preflight compression abaixo do threshold bloqueia turns por 5-7 min [#76151](https://github.com/NousResearch/hermes-agent/issues/76151)

### Observações de Estabilidade

- **Skills index degradado** (#66616): Índice de 29.8h com limite de 26h — alerta automatizado pendente
- **PyPI 0.17.0 wheel**: Doctor false-positive e optional-skills ausentes — experiência de upgrade comprometida
- **Agent compression**: Introduz regressão de latência significativa com bloqueios de 300-430s

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Mais Solicitadas

| Issue | Feature | 👍 | Área | Potencial |
|-------|---------|----|------|-----------|
| [#20859](https://github.com/NousResearch/hermes-agent/issues/20859) | Mistral AI provider | 24 | Providers | **Alto** — PR já merged |
| [#5114](https://github.com/NousResearch/hermes-agent/issues/5114) | Autoresearch skill - loop autônomo git | 0 | ML/Research | **Médio** — feature inovadora |
| [#2736](https://github.com/NousResearch/hermes-agent/issues/2736) | Obsidian Vault como memória | 0 | Memory | **Médio** — integra third-party |
| [#34520](https://github.com/NousResearch/hermes-agent/issues/34520) | Expor fact_store tools | 0 | Plugins | **Médio** — compatibilidade |
| [#27604](https://github.com/NousResearch/hermes-agent/issues/27604) | Approval prompts com rationale | 0 | UX/CLI | **Médio** — segurança |
| [#70969](https://github.com/NousResearch/hermes-agent/issues/70969) | Nav section grouping no dashboard | 0 | Dashboard | **Baixo** — UI |

### PRs de Features Ativas

| PR | Feature | Componentes |
|----|---------|-------------|
| [#76395](https://github.com/NousResearch/hermes-agent/pull/76395) | Terminal font picker configurável | Desktop |
| [#76396](https://github.com/NousResearch/hermes-agent/pull/76396) | Notch wake indicator visual | Desktop |
| [#76397](https://github.com/NousResearch/hermes-agent/pull/76397) | MiniMax voice clone tools | TTS |
| [#76401](https://github.com/NousResearch/hermes-agent/pull/76401) | Open links from composer on hover | UI |
| [#76398](https://github.com/NousResearch/hermes-agent/pull/76398) | Open stored sessions from deep links | Desktop |

### Sinais de Roadmap

1. **MCP 2.0.0b2 migration** (#69931): Atualização do protocolo MCP — breaking change agendado para 2026-07-28
2. **Mistral AI**: Provider agora como plugin nativo (resolução de long-standing request)
3. **Desktop app**: Ênfase em UX com font picker, wake indicator e deep links
4. **Cron hardening**: Separação de state declarativo e runtime (#75833) — indica maturidade do subsystem
5. **Time awareness consistente**: Consolidação de datetime global (#76392) — alinhamento cross-surface

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais Reportadas

| Dor | Impacto | Exemplos |
|-----|---------|----------|
| **Instalação problemática** | Alto | PyPI wheel falhando (#49529), setup wizard errático (#13024), managed-runtime nunca builda (#75655) |
| **Providers instáveis** | Alto | Gemini 401/400 (#69031), OpenAI reasoning.effort quebrando (#76255), Ollama dashboard errado (#76324) |
| **Cron job sem visibilidade** | Médio | Nunca executam (#2788), sem logs úteis, restore de boards inexistente (#61908) |
| **Performance de compressão** | Alto | Preflight abaixo de threshold bloqueia por 5-7min (#76151) |
| **Skills index degradado** | Médio | 29.8h desatualizado; Docs de skills podem estar incorretos (#66616) |
| **Desktop stale state** | Médio | Terminal update não reflete no Hermes.app instalado (#52339) |

### Cenários de Uso Observados

- **Agents autônomos**: Usuários executando Hermes em loops de pesquisa/autoresearch sem tracking de resultados (#5114)
- **Multi-provider setups**: Configuração simultânea de Ollama local + cloud providers com problemas de detecção
- **Voice assistants**: Desktop app com wake word detection sendo refinado (notch indicator)
- **Team collaboration**: Kanban boards com kebutuhan restore/archive (#61908)
- **Holographic memory**: Cross-provider continuity de memória persistente (#34520)

### Satisfação Geral

A comunidade demonstra **engajamento ativo** (50 issues/PRs atualizados) mas há **frustração acumulada** com:
- Questões de instalação/setup que persistem entre versões
- Provider configuration sendo inconsistente entre CLI e dashboard
- Cron jobs como área negligenciada
- Performance de context compression sendo intrusiva

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Inativas

| Issue | Título | Criado | Status | Nota |
|-------|--------|--------|--------|------|
| [#20859](https://github.com/NousResearch/hermes-agent/issues/20859) | Mistral provider | 2026-05-06 | **Recentemente resolvido via #76391** | Closed loop |
| [#2788](https://github.com/NousResearch/hermes-agent/issues/2788) | Cron jobs nunca executam | 2026-03-24 | Aberta | 4+ meses sem resolução; P3 |
| [#2736](https://github.com/NousResearch/hermes-agent/issues/2736) | Obsidian Vault | 2026-03-24 | Aberta | 4+ meses; config block existe mas não é lido |
| [#5114](https://github.com/NousResearch/hermes-agent/issues/5114) | Autoresearch skill | 2026-04-04 | Aberta | 4 meses; feature de alto valor mas sem owner |
| [#13024](https://github.com/NousResearch/hermes-agent/issues/13024) | Setup wizard misclassifica | 2026-04-20 | Aberta | P2 — alta prioridade |
| [#12865](https://github.com/NousResearch/hermes-agent/issues/12865) | MCP configure empty list | 2026-04-20 | Aberta | P2 — 4 meses |
| [#34520](https://github.com/NousResearch/hermes-agent/issues/34520) | fact_store tools | 2026-05-29 | Aberta | 2+ meses; compatibilidade cross-provider |
| [#61160](https://github.com/NousResearch/hermes-agent/pull/61160) | Mistral provider PR | 2026-07-08 | Aberta | Aguardando merge (duplicado por #76391) |

### Recomendação de Priorização

1. **Crítico**: Corrigir P2s de providers (#76255, #69031, #76324) — afetam usuários em produção
2. **Alto**: Resolver installation/setup issues (#75655, #13024, #49529) — barreira de entrada
3. **Médio**: Cron hardening (#75833 já em PR) e observabilidade (#2788)
4. **Estratégico**: Avaliar ownership das features de 4+ meses (#2736, #5114) — podem precisar de champion interno

---

## Indicadores de Saúde do Projeto

| Métrica | Valor | Avaliação |
|---------|-------|-----------|
| Issues ativas (24h) | 42 | 🟢 Alta |
| PRs abertos (24h) | 42 | 🟢 Alta |
| PRs merged (24h) | 8 | 🟡 Moderada |
| Bugs P1-P2 abertos | 7 | 🟡 Atenção |
| Features aguardando | 10+ | 🟢 Pipeline saudável |
| Releases (7 dias) | 0 | 🟡 Em preparação |
| Engajamento comunitario | Alto (50+ items) | 🟢 Saudável |

---

*Relatório gerado automaticamente com base nos dados do GitHub de 2026-08-02. Para acompanhamento em tempo real: [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>


# Relatório do Projeto PicoClaw — 2026-08-02

---

## 1. Panorama do Dia

O projeto PicoClaw mantém atividade moderada de desenvolvimento. Nas últimas 24h, houve 3 atualizações em PRs e 1 issue registrada, sem novos lançamentos. A atividade concentra-se em expansões de providers e internacionalização, enquanto uma issue crítica sobre resiliência do Matrix sync permanece aberta e stale. O projeto demonstra manutenção ativa, porém com pontos de atenção em estabilidade de canais.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto não publicou novas versões. A versão estável atual permanece **v0.2.9**, referenciada na issue #3203.

---

## 3. Progresso do Projeto

### PR Merged/Closed

| # | Título | Status | Impacto |
|---|--------|--------|---------|
| [#3261](https://github.com/sipeed/picoclaw/pull/3261) | Add zh-TW locale and Traditional Chinese translations | **CLOSED** | Internacionalização do WebUI e documentação |

A PR de **PeterDaveHello** adicionou locale para Traditional Chinese (zh-TW), mejorando a experiência de usuários de Taiwan com terminologia consistente na interface e documentação. Este é um incremento de acessibilidade, não um feature crítico.

### PRs Abertas

| # | Título | Status | Prioridade |
|---|--------|--------|------------|
| [#3299](https://github.com/sipeed/picoclaw/pull/3299) | Add native Exa web search provider | OPEN | Medium |
| [#3309](https://github.com/sipeed/picoclaw/pull/3309) | Add OrcaRouter as OpenAI-compatible provider | OPEN | Medium |

Ambas as PRs expandem o ecossistema de providers:
- **Exa**: Oferece busca web nativa via API `POST /search` com highlights e filtros temporais (`d/w/m/y`)
- **OrcaRouter**: Adiciona router multi-vendor como provider OpenAI-compatible em `api.orcarouter.ai/v1`

---

## 4. Temas Quentes da Comunidade

### Issue com Maior Engajamento

| # | Título | 👍 | 💬 | Status |
|---|--------|----|----|--------|
| [#3203](https://github.com/sipeed/picoclaw/issues/3203) | Matrix sync loop has no reconnection logic | 2 | 7 | OPEN + stale |

**Análise**: Esta issue de **@weissfl** (criada em 2026-07-02, ativa até 2026-08-01) expõe um problema de resiliência significativo:

- **Problema central**: O loop de long-polling do Matrix (`/sync`) morre permanentemente após interrupção de rede ou reinício do homeserver
- **Impacto**: Sem reconnection logic, o processo principal permanece vivo, evitando que `Restart=on-failure` do systemd seja acionado
- **Estado**: Marcada como `stale`, indicando falta de resposta da equipe mantenedora
- **Demanda**: Lógica de reconexão automática com backoff exponencial ou healthcheck

**Reação da comunidade**: 7 comentários indicam interesse da comunidade em resolver este problema de estabilidade.

---

## 5. Bugs e Estabilidade

### Issue Crítica Aberta

| Severidade | # | Título | Link |
|------------|---|--------|------|
| **High** | #3203 | Matrix sync loop has no reconnection logic | [Link](https://github.com/sipeed/picoclaw/issues/3203) |

**Análise de Severidade**:
- **Impacto**: Afeta reliability em ambientes de produção com instabilidade de rede
- **Escopo**: Canal Matrix especificamente
- **Workaround atual**: Reinício manual do serviço
- **Recomendação**: Issue requer priorização — bug causa "silent death" sem notificação ao usuário

**Não há outras issues de bug registradas nas últimas 24h.**

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features em Review

| # | Título | Tipo | Relevância |
|---|--------|------|-------------|
| [#3299](https://github.com/sipeed/picoclaw/pull/3299) | Add native Exa web search provider | ✨ New feature | Alta |
| [#3309](https://github.com/sipeed/picoclaw/pull/3309) | Add OrcaRouter as OpenAI-compatible provider | ✨ New feature | Média |

**Sinais de direção do roadmap**:
1. **Diversificação de providers**: Padrão consistente de adição de providers alternativos (Exa, OrcaRouter)
2. **Expansão de busca web**: Exa como alternativa ao provider de busca existente
3. **Multi-vendor routing**: OrcaRouter indica tendência de suportar arquiteturas de roteamento entre modelos

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Dor | Origem | Gravidade |
|-----|--------|-----------|
| Falha silenciosa do canal Matrix após network disruption | Issue #3203 | **Alta** |

**Análise**: O usuário @weissfl relata que:
> "The Matrix channel's `/sync` long-polling loop dies permanently after any network disruption or homeserver restart. There is no automatic reconnection."

**Cenário de uso**: Usuários dependem do canal Matrix para comunicação contínua, e falhas não são detectadas automaticamente.

**Satisfação geral**: Não há indicadores de satisfação negativos além do bug reported. A aceitação de PRs de internacionalização sugere comunidade engajada.

---

## 8. Backlog que Merece Atenção

### Issues sem Resposta/Em Risco

| # | Título | Idade | Status | Prioridade |
|---|--------|-------|--------|------------|
| [#3203](https://github.com/sipeed/picoclaw/issues/3203) | Matrix sync loop has no reconnection logic | ~30 dias | stale + open | **Alta** |

**Recomendação para mantenedores**:
1. **Issue #3203** está há ~30 dias sem resposta da equipe, marcada como stale
2. Bug afeta usabilidade em produção e deve ser priorizado
3. A comunidade demonstra interesse (7 comentários)

### PRs Pendentes de Review

| # | Título | Idade | Status |
|---|--------|-------|--------|
| [#3299](https://github.com/sipeed/picoclaw/pull/3299) | Add native Exa web search provider | ~7 dias | open |
| [#3309](https://github.com/sipeed/picoclaw/pull/3309) | Add OrcaRouter as OpenAI-compatible provider | ~1 dia | open |

---

## Métricas de Saúde do Projeto

| Indicador | Valor | Status |
|-----------|-------|--------|
| Issues ativas | 1 | 🟡 Moderado |
| PRs abertas | 2 | 🟢 Saudável |
| Bugs críticos abertos | 1 | 🟠 Atenção |
| Releases (24h) | 0 | 🟡 Normal |
| Issues stale sem resposta | 1 | 🟠 Atenção |

**Veredicto**: Projeto em manutenção ativa, com atenção necessária em estabilidade do canal Matrix. A adição de providers demonstra evolução contínua, mas bugs de resiliência requerem priorização para saúde de longo prazo.

---

*Relatório gerado em 2026-08-02 com base em dados do GitHub do repositório sipeed/picoclaw.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>


# Relatório do Projeto IronClaw — 2026-08-02

## 1. Panorama do Dia

O projeto IronClaw apresenta **alta atividade** em 2026-08-02, com 24 issues e 31 PRs atualizados nas últimas 24 horas, embora **nenhuma release nova** tenha sido publicada. O foco predominante é a conclusão da **Wave 2 (WS2)** de refatoração arquitetural, com múltiplos PRs empilhados sendo mesclados sequencialmente, e o início do **programa de adoção pi-harness** para melhoria de cache e performance. Observa-se uma quantidade expressiva de issues P0/P1 relacionadas a regressões de cache que exigem atenção imediata da equipe core.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24 horas.**

O PR #5598 permanece aberto como rascunho de release, com mudanças pendentes nos crates `ironclaw_common` (0.4.2 → 0.5.0, com breaking changes), `ironclaw_safety` (0.2.2 → 0.2.3) e `ironclaw_skills` (0.3.0 → 0.4.0).

---

## 3. Progresso do Projeto

### PRs Merged/Fechados Hoje (5 items)

| # | Título | Impacto |
|---|--------|---------|
| [#6996](https://github.com/nearai/ironclaw/pull/6996) | ci(gates): close #6963 — inventory-driven discovery + fail-closed across path-keyed gates | **Crítico** — Corrigiu 8 defeitos nos CI gates que sobreviveram à refatoração WS10 |
| [#7002](https://github.com/nearai/ironclaw/pull/7002) | refactor(contracts): invert webui + openai_compat onto product_contracts (WS5) | **Arquitetural** — Inversão de portas para product_contracts; base para PRs subsequentes |
| [#6998](https://github.com/nearai/ironclaw/pull/6998) | refactor(contracts): invert extension_host's product-facing ports (WS2.1) | **Arquitetural** — Conclui WS2.1; extension_host agora implementa port definitions |
| [#6995](https://github.com/nearai/ironclaw/pull/6995) | docs(target-architecture): Wave 1 truth audit | **Documentação** — Reconciliou decision record com a realidade do main após WS1 completo |
| [#6761](https://github.com/nearai/ironclaw/pull/6761) | test: cover generic outbound registration | **Testes** — Adicionou teste de regressão para registro de outbound targets genérico |

### Destaque: Conclusão da Wave 1
A Wave 1 foi integralmente mesclada com 7 PRs (#6967, #6975, #6977, #6979, #6980, #6981, #6982), e o audit #6995 confirmou que a documentação está alinhada com o código em produção.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| # | Título | Comentários | Tipo |
|---|--------|-------------|------|
| [#6963](https://github.com/nearai/ironclaw/issues/6963) | Path-keyed CI gates — 8 defeitos identificados | 7 | 🔴 Bug/Gate |
| [#6974](https://github.com/nearai/ironclaw/issues/6974) | libSQL thread_store_writes pathology (p95 37-135s) | 2 | 🔴 Performance |
| [#6921](https://github.com/nearai/ironclaw/issues/6921) | Extract neutral contracts + seal evidence minting | 2 | 🟡 Refactoring |
| [#6978](https://github.com/nearai/ironclaw/issues/6978) | reborn-tests.yml workflow_dispatch failures | 1 | 🔴 CI/CD |
| [#6971](https://github.com/nearai/ironclaw/issues/6971) | Clarify "Tools" vs "Extensions" terminology | 1 | 🟢 Feature/UX |
| [#6854](https://github.com/nearai/ironclaw/issues/6854) | Extensions page uses "Reborn" branding instead of "Ironclaw 1.0" | 1 | 🔵 Branding |

### Análise das Demandas
1. **Qualidade de CI/CD (#6963, #6978)** — A comunidade reportou defeitos persistentes nos gates de CI, indicando necessidade de robustez nos processos de automação.
2. **Performance de database (#6974)** — O problema de libSQL com p95 de 37-135 segundos em casos tool-heavy é crítico para uso em produção.
3. **Branding e UX (#6971, #6854)** — Dois issues independentes sobre consistência de nomenclatura e marcação; indicam preocupação com comunicação externa.

---

## 5. Bugs e Estabilidade

### Por Severidade

| Severidade | Count | Issues |
|------------|-------|--------|
| **P0** | 4 | #6987, #6986, #6985, #6984 — Cache regressions (pi-harness) |
| **P1** | 3 | #6990 (compaction), #6989 (token accounting), #6988 (context budget) |
| **P2** | 5 | #6940 (IronHub 404), #6971, #6854, #6983, #6941 |
| **Bug (sem prioridade)** | 2 | #6974 (libSQL), #6903 (admin pagination) |

### Bugs Críticos

**#6974 — libSQL thread_store_writes pathology** ([link](https://github.com/nearai/ironclaw/issues/6974))
- *Severidade*: Performance crítica
- *Cenário*: Casos tool-heavy com p95 de 37-135 segundos após #6696
- *Status*: Em investigação ativa

**#6940 — IronHub skill CTA returns 404** ([link](https://github.com/nearai/ironclaw/issues/6940))
- *Severidade*: P2, funcional
- *Impacto*: Todos os CTAs do IronHub levam a 404; usuário não sabe quem é o dono

**#6903 — Admin users list cannot load beyond first page** ([link](https://github.com/nearai/ironclaw/issues/6903))
- *Severidade*: Funcional (RESOLVIDA)
- *Fix*: Merged em PR relacionado; issue fechada

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features

| # | Título | Complexidade | Área |
|---|--------|--------------|------|
| [#7009](https://github.com/nearai/ironclaw/issues/7009) | Add OrcaRouter as built-in LLM provider | M | LLM Providers |
| [#6993](https://github.com/nearai/ironclaw/issues/6993) | Backend wiring for OOBE automation-tasks prototype | M | WebUI |
| [#6983](https://github.com/nearai/ironclaw/issues/6983) | Add `hub` as alias for `ironhub` CLI subcommand | S | CLI |
| [#6941](https://github.com/nearai/ironclaw/issues/6941) | Epic: skills discovery and self-created skills | Epic | Skills/Agent |

### Sinais de Roadmap: Programa Pi-Harness Adoption

Oeprograma de adoção pi-harness (§7.3 do deep-dive) domina as issues P0/P1, indicando foco estratégico em **performance de cache e inferência**:

| # | Prioridade | Tema |
|---|------------|------|
| #6984 | P0 #1 | Cache breakpoints explícitos no Anthropic |
| #6985 | P0 #2 | Prompt prefix byte-estável |
| #6986 | P0 #3 | Tool array byte-idêntico |
| #6987 | P0 #4 | Regression test para cache prefix |
| #6988 | P1 #5 | Context budget dinâmico |
| #6989 | P1 #6 | Token accounting correto |
| #6990 | P1 #7 | Compaction sem poluir cache |

---

## 7. Resumo de Feedback dos Usuários

### Issues de Feedback Reportadas

| # | Título | Feedback |
|---|--------|----------|
| [#6940](https://github.com/nearai/ironclaw/issues/6940) | IronHub skill CTA 404 | *Usuário reportou que todos os botões CTA do IronHub estão quebrados* |
| [#6971](https://github.com/nearai/ironclaw/issues/6971) | Ferramentas vs Extensões | *Usuário pede clareza na terminologia do produto* |
| [#6854](https://github.com/nearai/ironclaw/issues/6854) | Branding "Reborn" vs "Ironclaw 1.0" | *Usuário notou inconsistência de marcação na página de extensões* |
| [#6983](https://github.com/nearai/ironclaw/issues/6983) | Alias `hub` para CLI | *Usuário preparando documentação de release precisa de alias* |

### Análise
O feedback usuário é predominantemente sobre **experiência de usuário e consistência**, não sobre funcionalidades core. Isso sugere que o produto está maduro em features, mas precisa de refinamento em comunicação e DX.

---

## 8. Backlog que Merece Atenção

### Issues Abertas há >3 dias sem movimento

| # | Título | Criado | Status | Observação |
|---|--------|--------|--------|------------|
| [#6854](https://github.com/nearai/ironclaw/issues/6854) | Branding Reborn vs Ironclaw 1.0 | 2026-07-29 | 🟡 Aberta | Baixa complexidade, alto impacto de marca |
| [#6903](https://github.com/nearai/ironclaw/issues/6903) | Admin pagination | 2026-07-30 | ✅ Fechada | — |
| [#6921](https://github.com/nearai/ironclaw/issues/6921) | Extract neutral contracts | 2026-07-30 | ✅ Fechada | — |

### Issues Arquiteturais Críticas em Aberto

| # | Título | Risco |
|---|--------|-------|
| [#7011](https://github.com/nearai/ironclaw/issues/7011) | extension_manager: 5 findings do WS2.4 split | 🔴 Precisa revisão |
| [#7008](https://github.com/nearai/ironclaw/issues/7008) | product_wire.rs em 1,923 linhas (excede large_file threshold) | 🟡 Arquitetural |
| [#7006](https://github.com/nearai/ironclaw/issues/7006) | Changed-coverage gate: steering-queue sem fault injection | 🟡 Test coverage |

---

## Indicadores de Saúde do Projeto

| Indicador | Valor | Avaliação |
|-----------|-------|-----------|
| Issues ativas (24h) | 24 | 🟢 Alta atividade |
| PRs atualizados (24h) | 31 | 🟢 Alta atividade |
| Releases (24h) | 0 | 🟡 Sem publicação |
| PRs empilhados WS2/WS5 | 6+ | 🟢 Progresso estrutural |
| Issues P0 em aberto | 4 | 🔴 Atenção imediata |
| Bugs críticos | 1 | 🟡 libSQL performance |

**Recomendação**: Priorizar resolução das 4 issues P0 de cache (#6984-#6987) antes do próximo ciclo de release, dado o impacto direto na experiência do usuário em produção.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório de Projeto: CoPaw (QwenPaw)

**Data do relatório:** 2026-08-02  
**Período analisado:** Últimas 24h  
**Repositório:** [github.com/agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw)  
**Plataforma:** QwenPaw (frontend AgentScope)

---

## 1. Panorama do dia

O projeto QwenPaw apresenta **alta atividade de desenvolvimento** em 2026-08-02, com 14 issues e 15 PRs atualizados nas últimas 24h. A dinâmica atual é marcada por um ciclo acelerado de correções de bugs críticos (especialmente relacionados à compatibilidade com agentscope 2.0.4.post1 e problemas de shell commands) simultaneamente ao avanço de features solicitadas pela comunidade. Não houve lançamentos de novas versões hoje. O padrão de múltiplos PRs de primeiros contribuidores indica um momento saudável de crescimento da base de contribuidores, mas a concentração de issues abertas sobre bugs de estabilidade (especialmente UI freezes e timeouts) sugere que a equipe está sob pressão para resolver regressões da versão 2.0.1.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

O projeto não emitiu novas versões no período analisado. A última release estável aparente é a **QwenPaw 2.0.1**, referenciada em múltiplas issues como a versão atual. A ausência de releases pode indicar que a equipe está focando em estabilizar a 2.0.1 antes de avançar para uma 2.0.2, dado o volume de bugs reportados.

---

## 3. Progresso do Projeto

### PRs Fechados/Merged

| # | PR | Descrição | Impacto |
|---|-----|-----------|---------|
| **#6598** | [fix(skills): preserve plugin-sourced skill tags](https://github.com/agentscope-ai/QwenPaw/pull/6598) | Resolve #6537 - Tags de skills originadas de plugins desapareciam ao reiniciar | **Alto** — Perda de configuração corrigida |

### PRs Abertos de Destaque

| # | PR | Descrição | Status |
|---|-----|-----------|--------|
| **#6629** | [fix(memory): trigger summarize on auto-compression](https://github.com/agentscope-ai/QwenPaw/pull/6629) | Corrige #6624 — Scroll auto-compression não disparava `summarize_when_compact` | Aberto |
| **#6628** | [fix(scroll): use SystemMsg for compressed memory placeholder](https://github.com/agentscope-ai/QwenPaw/pull/6628) | Corrige #6541 — Evita erro HTTP 400 em APIs DeepSeek caused by role=user em placeholder | Aberto |
| **#6630** | [fix(agents): report empty model response to user](https://github.com/agentscope-ai/QwenPaw/pull/6630) | Corrige #6601 — Modelo retornando resposta vazia era silenciado | Aberto |
| **#6620** | [fix(providers): relay Gemini thought_signature](https://github.com/agentscope-ai/QwenPaw/pull/6620) | Corrige #6619 — Crasha com `extra_content` em ToolCallBlock ao usar Gemini | PR estreito |
| **#6623** | [fix(acp): prevent final text loss when notifications race](https://github.com/agentscope-ai/QwenPaw/pull/6623) | Corrige #6625 — Perda de texto em delegate_external_agent | PR estreito |
| **#6302** | [feat: unify provider discovery and model routing](https://github.com/agentscope-ai/QwenPaw/pull/6302) | Refatoração massiva de provider discovery e controles de agente | Em revisão |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (por comentários)

| # | Título | Comentários | Tipo | Tendência |
|---|--------|-------------|------|-----------|
| **#6588** | [Bug: `spawn_subagent` single-task mode unusable](https://github.com/agentscope-ai/QwenPaw/issues/6588) | 4 | Bug | Ativo |
| **#6520** | [agent.json systematic corruption](https://github.com/agentscope-ai/QwenPaw/issues/6520) | 3 | Bug | Ativo |
| **#6589** | [execute_shell_command large output causes UI freeze](https://github.com/agentscope-ai/QwenPaw/issues/6589) | 3 | Bug | Ativo |
| **#6593** | [Feature: unified cleanup page](https://github.com/agentscope-ai/QwenPaw/issues/6593) | 2 | Enhancement | Novo |
| **#6480** | [nohup commands block agent](https://github.com/agentscope-ai/QwenPaw/issues/6480) | 2 | Bug | Ativo |
| **#6568** | [Feature: global hotkey floating input box](https://github.com/agentscope-ai/QwenPaw/issues/6568) | 2 | Enhancement | Novo |

### Análise de Demandas

1. **Proliferação de bugs de shell command** (Issues #6589, #6608, #6480): Três issues separadas sobre problemas com `execute_shell_command` — UI freeze com muita saída, timeout bypass, e blocking com nohup. Isso indica um ponto problemático sistêmico no módulo de execução de comandos.

2. **Dívida técnica de compatibilidade agentscope** (Issues #6612, #6619): A atualização de agentscope para 2.0.4.post1 introduziu breaking changes não previstas — crashes por tipo de Msg.content e deadlock de permissões de ferramentas.

3. **UX de multi-agent collaboration** (Issue #6621): Usuários não conseguem fazer Default Agent chamar outros Agents automaticamente sem manipulação manual de PROFILE.md. Documentação insuficiente.

4. **Feature requests de produtividade** (Issues #6593, #6568): Comunidade solicita global hotkey estilo Raycast e página unificada de limpeza de dados — indicam uso em longo prazo gerando acúmulo de dados.

---

## 5. Bugs e Estabilidade

### Bugs Críticos (Bloqueantes/High Priority)

| # | Título | Severidade | Descrição | Impacto |
|---|--------|------------|-----------|---------|
| **#6612** | [QwenPaw 2.0.1 incompatible with agentscope 2.0.4.post1](https://github.com/agentscope-ai/QwenPaw/issues/6612) | **Crítica** | Proactive crashes + tool-permission deadlock | Sistema quebrado com versão pinned |
| **#6619** | [ToolCallBlock missing extra_content field](https://github.com/agentscope-ai/QwenPaw/issues/6619) | **Crítica** | Crash ao usar Gemini com thought_signature | Qualquer requisição Gemini falha |
| **#6608** | [Long-running shell blocks feishu session for 1.5h](https://github.com/agentscope-ai/QwenPaw/issues/6608) | **Alta** | Timeout ignorado + subprocess órfão | Sessão fica completamente travada |
| **#6589** | [execute_shell_command massive output freezes UI](https://github.com/agentscope-ai/QwenPaw/issues/6589) | **Alta** | Render de stdout extenso bloqueia thread principal | UI completamente inutilizável |
| **#6520** | [agent.json systematic corruption](https://github.com/agentscope-ai/QwenPaw/issues/6520) | **Alta** | BOM, missing quotes, double-encoding em ~20+ campos | Sistema falha completamente |

### Bugs Médios/Modernos

| # | Título | Descrição |
|---|--------|-----------|
| **#6588** | [spawn_subagent batch parameter unusable](https://github.com/agentscope-ai/QwenPaw/issues/6588) | Schema força `batch` como required, mas single-task mode usa `batch=None` |
| **#6624** | [Auto-compression doesn't trigger summarize memory](https://github.com/agentscope-ai/QwenPaw/issues/6624) | Scroll eviction não dispara `summarize_when_compact` (apenas `/compact` manual funciona) |
| **#6625** | [ACP delegate returns "completed without text output"](https://github.com/agentscope-ai/QwenPaw/issues/6625) | Notificações racing com prompt response causam perda de texto |
| **#6626** | [Real behavior proof gate strips fenced Evidence](https://github.com/agentscope-ai/QwenPaw/issues/6626) | CI rejeita PRs com evidence em fenced blocks — stripping indevido |

### Tendência de Estabilidade

**Alerta:** Com 5 bugs críticos/altos abertos simultaneamente, o projeto atravessa um período de regressões. A causa raiz appears to be: (1) mudança de API do agentscope upstream sem adaptação adequada e (2) manejo insuficiente de edge cases em shell commands. A equipe está respondendo ativamente — 3 PRs de fix já abertos para bugs da lista.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| # | Título | Categoria | Potencial |
|---|--------|-----------|-----------|
| **#6593** | [Unified professional cleanup page](https://github.com/agentscope-ai/QwenPaw/issues/6593) | UX/System | **Alto** — Dívida técnica de dados acumulando |
| **#6568** | [Global hotkey for floating quick input (Raycast-style)](https://github.com/agentscope-ai/QwenPaw/issues/6568) | UX/Desktop | **Alto** — Padrão competitivo esperado |
| **#6627** | [Integration: loongsuite for tracing](https://github.com/agentscope-ai/QwenPaw/issues/6627) | Observability | **Médio** — Tracing/observabilidade |

### Novas Integrações em PR

| # | PR | Provider | Status |
|---|-----|----------|--------|
| **#6622** | [Add OrcaRouter as built-in provider](https://github.com/agentscope-ai/QwenPaw/pull/6622) | OrcaRouter | PR aberto (first-time contributor) |
| **#6526** | [Add NVIDIA NIM provider support](https://github.com/agentscope-ai/QwenPaw/pull/6526) | NVIDIA NIM | PR aberto |

### Sinais de Roadmap

1. **Provider ecosystem expansion:** Inclusão de OrcaRouter e NVIDIA NIM indica estratégia de ampliar base de modelos suportados.

2. **Desktop productivity features:** Global hotkey e workspace shortcut (PR #6306) sugerem foco em experiência desktop.

3. **Multi-agent orchestration:** Issue #6621 evidencia necessidade de documentação e UX mais clara para colaboração entre agentes.

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais Reportadas

| Dor | Evidência | Severidade Sentida |
|-----|-----------|-------------------|
| **Incompatibilidade com agentscope** | "Installing qwenpaw==2.0.1 together with agentscope==2.0.4.post1 breaks the proactive/memory-evolving subsystem" (#6612) | **Alta** — Blocker para upgrade |
| **Shell commands instáveis** | "nohup commands block agent" (#6480), "massive output freezes UI" (#6589), "1.5h blocking" (#6608) | **Alta** — Improdutividade diária |
| **Acúmulo de dados sem limpeza** | "日积月累会越来越臃肿，占用存储空间...混乱不堪加大的空间占用" (#6593) | **Média** — Usuários de longo prazo |
| **Falta de guia multi-agent** | "50+轮对话...才发现: Default Agent不会自动调用其他已创建的Agent" (#6621) | **Média** — Curva de aprendizado |

### Cenários de Uso Emergentes

1. **Uso desktop pesado:** Global hotkey requests indicam transição de uso web para desktop daily-driver.
2. **Long-running tasks:** Bloqueio por shell commands sugere uso em automação de servidor/DevOps.
3. **Multi-agent workflows:** Crescimento de uso colaborativo entre múltiplos agentes especializados.

### Satisfação Parcial

Os usuários estão ativamente engajados (múltiplos bugs reportados com root cause analysis detalhada) mas frustrados com regressões. O volume de "AI-assisted bug reports" (#6619 mentions Factory Droid) indica uso por usuários técnicos avançados.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta/Comentário da Equipe (Oldest First)

| # | Título | Criado | Comentários | Prioridade |
|---|--------|--------|-------------|------------|
| **#6480** | [nohup commands block agent](https://github.com/agentscope-ai/QwenPaw/issues/6480) | 2026-07-26 | 2 | **Alta** — 7 dias sem resposta da equipe |
| **#6520** | [agent.json systematic corruption](https://github.com/agentscope-ai/QwenPaw/issues/6520) | 2026-07-28 | 3 | **Alta** — 5 dias sem resposta da equipe |
| **#6627** | [how to use loongsuite to trace](https://github.com/agentscope-ai/QwenPaw/issues/6627) | 2026-08-01 | 1 | **Média** — Pergunta de documentação |

### PRs Aguardando Revisão/Merge

| # | PR | Idade | Bottleneck |
|---|-----|-------|------------|
| **#6302** | [Unify provider discovery and model routing](https://github.com/agentscope-ai/QwenPaw/pull/6302) | ~12 dias | Under Review |
| **#5490** | [Show tool-card images inline with gallery navigation](https://github.com/agentscope-ai/QwenPaw/pull/5490) | ~38 dias | Aberto |
| **#6306** | [Add workspace shortcut to sidebar](https://github.com/agentscope-ai/QwenPaw/pull/6306) | ~12 dias | Aberto |
| **#6203** | [Bound Windows tasklist liveness probe](https://github.com/agentscope-ai/QwenPaw/pull/6203) | ~17 dias | Ready for human review |

### Recomendações Prioritárias

1. **Resposta oficial em #6480 e #6520** — 5-7 dias sem feedback em bugs de alta severidade afeta confiança da comunidade.
2. **Merge de PRs de fix críticos** — #6620, #6623, #6629, #6630 são correções diretas de bugs reportados e devem ser priorizados para evitar acumulação de dívida.
3. **Alinhamento de versão agentscope** — Issue #6612 é bloqueante e precisa de decisão sobre pinning de versão ou adaptação de API.

---

## Métricas Resumidas (Últimas 24h)

| Indicador | Valor | Tendência |
|-----------|-------|-----------|
| Issues abertas/ativas | 14 | Neutra |
| PRs abertos | 14 | Neutra |
| PRs merged/fechados | 1 | — |
| Novas releases | 0 | — |
| Bugs críticos abertos | 5 | ⚠️ Atenção |
| PRs de primeiros contribuidores | 4 | ✅ Positivo |

---

*Relatório gerado automaticamente com base nos dados do GitHub de [CoPaw/QwenPaw](https://

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório de Projeto — ZeroClaw
**Data de referência:** 2026-08-02  
**Fonte:** github.com/zeroclaw-labs/zeroclaw

---

## 1. Panorama do Dia

O ecossistema ZeroClaw manteve alta atividade nas últimas 24 horas, com **50 issues e 50 PRs atualizados**, embora nenhuma release nova tenha sido publicada. A comunidade está focada em três eixos principais: (1) consolidação da segurança com RFCs sobre gerenciamento de credenciais, sandbox granular e UX de políticas; (2) refatoração arquitetural de memória, separando armazenamento autoritativo de conectores de enriquecimento; e (3) preparação para o lançamento v0.8.4, com публикация no crates.io após o split do microkernel. A proporção de issues abertas (44) versus fechadas (6) sugere um acúmulo saudável de trabalho em andamento, mas também sinaliza gargalos potenciais de review. Bugs de segurança no canal WhatsApp (severidade S1 e S2) demandam atenção imediata da equipe de manutenção.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24 horas.**

O PR [#9376](https://github.com/zeroclaw-labs/zeroclaw/pull/9376) (`chore(release): cut v0.8.4 — crates.io publishing, changelog, crate removals`) está em andamento e representa um marco significativo: é a primeira vez desde o split do microkernel (#5811) que o workspace será publicável no crates.io. O pacote raiz foi renomeado de `zeroclawlabs` para `zeroclaw`, permitindo `cargo install zeroclaw` consistente com o nome do binário. Ao todo, 18 crates serão publicados e 5 permanecerão internos.

---

## 3. Progresso do Projeto

### PRs fechadas/merged nas últimas 24h

| PR | Tipo | Destaque |
|----|------|----------|
| [#9114](https://github.com/zeroclaw-labs/zeroclaw/pull/9114) | `fix(runtime/security)` | Permite diversos devices e arquivos no sandbox Landlock, seguindo-se ao #9233 que forneceu a correção de caller-thread e propagação de erros. |
| [#9540](https://github.com/zeroclaw-labs/zeroclaw/pull/9540) | `test(memory)` | Endurece fixtures de timing do processo Lucid; testes de regressão validados em ARM64 macOS. |
| [#9482](https://github.com/zeroclaw-labs/zeroclaw/pull/9482) | `fix(tests)` | Torna fixtures do updater portáveis no Windows, usando `main_binary_name()` para gerar nomes de executável corretamente. |

### PRs abertas de destaque

- **[#8996](https://github.com/zeroclaw-labs/zeroclaw/pull/8996)** — `fix(goal): preserve running goals across daemon reload` (size:XL) — Corrige a transferência de ownership de goals em execução durante reload in-process, preventing perda de estado em reconfigurações.
- **[#9420](https://github.com/zeroclaw-labs/zeroclaw/pull/9420)** — `fix(anthropic): support stored OAuth profiles` — Adiciona `auth_mode = "oauth"` explícito para aliases Anthropic, resolvendo credenciais apenas de perfis armazenados nomeados.
- **[#8689](https://github.com/zeroclaw-labs/zeroclaw/pull/8689)** + **[#8746](https://github.com/zeroclaw-labs/zeroclaw/pull/8746)** — Pipeline de comandos `/goal` admission + stop self-resume loops.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (por comentários)

1. **[#9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048)** — RFC: Separate conversation history from agent-curated long-term memory (16 comentários)  
   **Análise:** A comunidade reconhece que o histórico de sessão (`MemoryCategory::Conversation`) e a memória de longo prazo curada pelo agente estão sendo misturados nos paths de runtime, gateway e autosave. A separação é considerada essencial para lifecycle management correto.

2. **[#9127](https://github.com/zeroclaw-labs/zeroclaw/issues/9127)** — RFC: Abstract a `KeySource` trait (13 comentários)  
   **Análise:** Pretende classificar material de chave mestra por fonte/forma de deployment. Dado que 93 campos com `#[secret]` são criptografados com ChaCha20-Poly1305 e 59 campos classificados com `#[credential_class]`, a abstração de `KeySource` é considerada uma melhoria de segurança importante.

3. **[#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)** — RFC: OpenAI Chat Completions compatibility adapter (12 comentários)  
   **Análise:** Alta demanda por compatibilidade com OpenAI API para permitir integração com Open WebUI, LobeChat e outras ferramentas que falam Chat Completions nativamente.

4. **[#8933](https://github.com/zeroclaw-labs/zeroclaw/issues/8933)** — RFC: Add cross-turn conversation correlation to OTel export (12 comentários)  
   **Análise:** OTel v1.41.0 define `gen_ai.conversation.id`; a proposta busca exportar conversation ID através de observer events para correlação cross-turn.

5. **[#9106](https://github.com/zeroclaw-labs/zeroclaw/issues/9106)** — RFC: A2A outbound client (A2ATool) (10 comentários)  
   **Análise:** Completar a especificação A2A: o inbound (A2AServer) já foi shipped em v0.8.2, mas o outbound permite colaboração inter-agente proactive, eliminando a dependência de channels como bridge.

### Signals de tendência

- **Segurança como tema central:** 5+ RFCs e bugs com tags `security`, `security:policy`, `security:secrets`, `domain:security` indicam priorização clara.
- **Multi-model/multi-provider:** RFCs sobre MoA (#8568), per-model capabilities (#7100), e Gemini Live (#8780) sugerem expansão de capacidades de provedor.
- **Observabilidade madura:** A ausência de OTel production-ready é reconhecida; RFCs #8933 e #7232 visam endereçar essa lacuna.

---

## 5. Bugs e Estabilidade

### Bugs de alta severidade (P1 / S1-S2)

| # | Título | Severidade | Status | Link |
|---|--------|------------|--------|------|
| #9348 | WhatsApp Web responde a todo DM/grupo sob `mode = business`; `allowed_groups` vazio permite todos | **S1** | in-progress | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/9348) |
| #9417 | WhatsApp Cloud `request_approval` vaza token de aprovação em falha | **S2** | in-progress | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/9417) |
| #9340 | CLI cron jobs têm `delivery.mode = "none"` hardcoded, descartando output | **P1** | in-progress | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/9340) |

### Bugs de média severidade (P2)

| # | Título | Severidade | Status | Link |
|---|--------|------------|--------|------|
| #6157 | Nextcloud Talk usa API de mensagem de bot incorreta | **S3** | in-progress | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6157) |
| #6724 | Signal/Voice Call com credenciais vazias causa crashloop do supervisor | **P3** | closed | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6724) |

### Análise

- **WhatsApp é o canal com maior instabilidade** no momento, com dois bugs de segurança abertos simultaneamente. O bug #9348 é particularmente crítico: um config "travado" se comporta como totalmente aberto, potencialmente expondo o agente a grupos não intencionais.
- **O bug de cron jobs (#9340)** é um problema de UX/devex que frustra usuários confiando em jobs agendados, pois runs são registrados como `ok` sem output, dificultando diagnóstico.
- **Bug #6724 foi resolvido** — canal closed nas últimas 24h.

---

## 6. Pedidos de Features e Sinais de Roadmap

### RFCs aceitas ou em progresso (sugere alta probabilidade de implementação)

| # | Título | Prioridade | Status | Link |
|---|--------|------------|--------|------|
| #9048 | Separar histórico de conversa de memória de longo prazo curada | P2 | accepted | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/9048) |
| #8933 | Correlação cross-turn no export OTel | P2 | accepted | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8933) |
| #8568 | Mixture-of-Agents (MoA) virtual model provider | P2 | closed | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8568) |
| #9106 | A2A outbound client (A2ATool) | P2 | no-stale | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/9106) |
| #8780 | Realtime speech-to-speech channel para Gemini Live | P2 | no-stale | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8780) |
| #8692 | Maintainer decision queue tracker | P2 | accepted | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) |

### Novas features propostas (alta demanda comunitária)

- **[#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155)** — RFC: Camada de confirmação per-execution para shell commands de alto risco (estilo Claude Code allow/ask/deny) — **P1, needs-maintainer-review**.
- **[#7100](https://github.com/zeroclaw-labs/zeroclaw/issues/7100)** — RFC: Per-model capability & context-window config (vision, context_window) — **P1, needs-maintainer-review**.
- **[#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)** — OpenAI Chat Completions compatibility adapter — demandado por integrações com Open WebUI e LobeChat.

### Sinais de roadmap

A ausência de releases novas e a concentração de RFCs accepted/in-progress indicam que **v0.8.4 será uma release focada em estabilidade e publicação crates.io**, com features substanciais (MoA, A2A outbound, memória separada) potencialmente earmarcadas para v0.9.x.

---

## 7. Resumo de Feedback dos Usuários

### Dores recorrentes identificadas

1. **Configuração de segurança não intuitiva:** RFCs como [#6971](https://github.com/zeroclaw-labs/zeroclaw/issues/6971) ("Security UX, runtime credential boundaries, and isolation defaults") e [#7897](https://github.com/zeroclaw-labs/zeroclaw/issues/7897) ("Apply security policy and channel config updates without full daemon reload") indicam que operadores têm dificuldade em entender e validar o estado de segurança ativo.

2. **Integração com ecossistema OpenAI:** A ausência de adapter Chat Completions força usuários a manter adaptadores customizados, aumentando fricção de onboarding.

3. **Escalabilidade de memória:** Issues [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850), [#9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048) e [#9103](https://github.com/zeroclaw-labs/zeroclaw/issues/9103) point to confusion about Lucid's role (backend vs. enrichment) e desejo de separação clara entre armazenamento autoritativo e conectores.

4. **Confirmação de shell commands:** Usuários querem granularidade entre "bloquear tudo" e "permitir tudo" para shell tool — o modelo atual de `auto_approve` wildcard é considerado inseguro por muitos.

### Cenários de uso emergentes

- **Colaboração inter-agente via A2A:** RFC #9106 indica interesse em ZeroClaw agents chamando outros agentes A2A-compliant de forma proactive.
- **Desktop computer-use:** RFC #6909 busca suportar controle de aplicações desktop locais via screen perception, atendendo casos de uso de automação de workstation.
- **Observabilidade production-ready:** Usuários querem correlação cross-turn em OTel para debugging em produção.

---

## 8. Backlog que Merece Atenção

### Issues sem atividade recente ou sem maintainer action

| # | Título | Criado | Última Atualização | Labels | Link |
|---|--------|--------|--------------------|--------|------|
| #6653 | RFC: Define host-architecture policy for emulated installs | 2026-05-14 | 2026-08-01 | `needs-maintainer-review`, P3 | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6653) |
| #8043 | RFC: Retire standalone aardvark-sys crate | 2026-06-20 | 2026-08-01 | `needs-maintainer-review`, P2 | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8043) |
| #8396 | RFC: Make wire protocol first-class in provider construction | 2026-06-27 | 2026-08-01 | `needs-maintainer-review`, P2 | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8396) |
| #6850 | RFC: Decouple memory lifecycle policy from storage backends | 2026-05-22 | 2026-08-01 | `needs-maintainer-review`, P2 | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) |
| #6157 | Nextcloud Talk wrong bot message API (bug desde 2026-04-27) | 2026-04-27 | 2026-08-01 | `needs-maintainer-review`, P2 | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6157) |

### Priorização recomendada

1. **Bugs de segurança WhatsApp (#9348, #9417)** — severidade S1/S2, risco imediato para operadores.
2. **RFCs accepted com `needs-maintainer-review`** — o tracker [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) existe para isso; usar para acelerar decisões.
3. **Issue #6157 aberta há ~3 meses** — bug funcional simples de API, pouco movimento sugere baixa prioridade ou dependência não documentada.
4. **RFCs P1 sem ação (#7155, #7100)** — ambas têm `needs-maintainer-review` desde junho; decisão de accept/reject/defer beneficiaria o roadmap.

---

## Indicadores de Saúde do Projeto

| Indicador | Valor | Observação |
|-----------|-------|------------|
| Issues ativas (24h) | 44 | Alta atividade |
| PRs abertas (24h) | 43 | Pipeline robusto |
| Releases (24h) | 0 | Preparação para v0.8.4 |
| RFCs em accepted/in-progress | 12+ | Pipeline saudável de features |
| Bugs P1/S1-S2 abertos | 3 | Atenção urgente em WhatsApp |
| Issues `needs-maintainer-review` | 15+ | Possível gargalo de review |
| Tempo médio de stale | N/A | Nenhuma issue marcada stale |

**Veredicto:** ZeroClaw demonstra um ecossistema maduro com alta atividade comunitária, foco claro em segurança e arquitetura, e um pipeline de releases iminente. O principal risco é o acúmulo de RFCs pendentes de decisão e bugs de segurança no canal WhatsApp que requerem resolução prioritária.

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*