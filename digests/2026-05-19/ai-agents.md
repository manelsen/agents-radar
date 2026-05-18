# Resumo diário do ecossistema de agentes de IA 2026-05-19

> Issues: 1 | PRs: 1 | Projetos cobertos: 7 | Gerado em: 2026-05-18 21:07 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório do Projeto NullClaw — 2026-05-19

---

## 1. Panorama do dia

O projeto NullClaw apresenta **atividade reduzida** em 19 de maio de 2026, com apenas **2 itens de discussão aberta** nas últimas 24 horas. Não houve lançamentos de novas versões, e os principais fluxos de trabalho permanecem estáveis. A equipe está focada em duas discussões técnicas: uma sobre controle granular de memória FTS5 e outra sobre resolução DNS no Windows. O projeto demonstra saúde operacional básica, sem sinais de problemas críticos reportados.

---

## 2. Lançamentos

**Nenhum lançamento registrado nas últimas 24 horas.**

O projeto não publicou novas releases desde o período analisado. Para informações sobre versões anteriores, recomenda-se consultar a [página de releases](https://github.com/nullclaw/nullclaw/releases) do repositório.

---

## 3. Progresso do projeto

### PRs em progresso

| # | Título | Status | Autor | Atualização |
|---|--------|--------|-------|-------------|
| [#920](https://github.com/nullclaw/nullclaw/pull/920) | fix(net): fix Windows DNS resolution for non-localhost hostnames | ABERTO | chenhlSH | 2026-05-18 |

**Análise:** O PR #920 propõe correção crítica para plataformas Windows, resolvendo falha na função `getAddressList()` que retornava `UnknownHostName` para qualquer hostname não-localhost. Este é um **fix direcionado** que impacta conectividade com provedores remotos. Aguardando revisão e merge.

---

## 4. Temas quentes da comunidade

### Issues em destaque

| # | Título | Status | Comentários | 👍 |
|---|--------|--------|-------------|-----|
| [#919](https://github.com/nullclaw/nullclaw/issues/919) | Feature: Allow disabling automatic memory recall (FTS5) per-message | ABERTO | 0 | 0 |

**Análise da Issue #919:** A comunidade demonstra interesse em **controle granular sobre comportamento de memória**. A issue solicita:

- Parâmetros atualmente **hardcoded**:
  - `DEFAULT_RECALL_LIMIT = 5`
  - `MAX_CONTEXT_BYTES = 4000`
  - `SCOPED_RECALL_CANDIDATE_LIMIT = 64`
  - `GLOBAL_RECALL_CANDIDATE_LIMIT = 64`

- **Demanda central:** Permitir desabilitar enriquecimento de mensagens via FTS5+BM25 por mensagem, dando controle aos usuários sobre performance e custos de inferência.

**Observação:** A issue ainda não gerou discussão (0 comentários), indicando fase inicial de proposal. Recomenda-se que contribuidores e maintainers avaliem viabilidade técnica e impacto arquitetural.

---

## 5. Bugs e estabilidade

**Nenhum bug crítico reportado nas últimas 24 horas.**

O PR #920 menciona um problema **específico do Windows** já identificado:
- **Componente afetado:** `net.zig` → `getAddressList()`
- **Sintoma:** `HostResolutionFailed` para hostnames remotos
- **Severidade:** Média (afeta apenas ambiente Windows)
- **Status:** Correção em revisão via PR #920

---

## 6. Pedidos de features e sinais de roadmap

### Feature em discussão

**[#919](https://github.com/nullclaw/nullclaw/issues/919) — Desabilitar recall automático de memória FTS5 por mensagem**

**Justificativa de valor:**
- **Performance:** Redução de latência em mensagens que não necessitam contexto histórico
- **Custo:** Menor consumo de tokens em provedores de IA
- **Flexibilidade:** Adaptação a diferentes padrões de uso

**Parâmetros em jogo:**

| Parâmetro | Valor Atual | Uso |
|-----------|-------------|-----|
| `DEFAULT_RECALL_LIMIT` | 5 | Limite de resultados FTS5 |
| `MAX_CONTEXT_BYTES` | 4000 | Máximo de bytes de contexto |
| `SCOPED_RECALL_CANDIDATE_LIMIT` | 64 | Limite de candidatos por escopo |
| `GLOBAL_RECALL_CANDIDATE_LIMIT` | 64 | Limite global de candidatos |

**Potencial impacto no roadmap:** Esta feature pode sinalizar movimentação em direção a **controle de contexto por会话** e otimização de custos operacionais.

---

## 7. Resumo de feedback dos usuários

**Ausência de feedback direto registrado nas últimas 24 horas.**

Com 0 comentários na issue #919 e 1 PR ainda em revisão (#920), não há manifestações diretas de usuários finais no período analisado.

**Sinais indiretos:**
- A abertura da issue #919 sugere que **usuários avançados** estão explorando configurações de memória e buscam maior controle
- O fix Windows (#920) indica que a **base de usuários Windows** encontrou obstáculos práticos em produção

---

## 8. Backlog que merece atenção

### Items sem resposta recente

| # | Tipo | Título | Estado | Notas |
|---|------|--------|--------|-------|
| [#919](https://github.com/nullclaw/nullclaw/issues/919) | Feature | Allow disabling automatic memory recall (FTS5) per-message | ABERTA | Sem comentários — primeira interação em 2026-05-18 |
| [#920](https://github.com/nullclaw/nullclaw/pull/920) | Fix | fix Windows DNS resolution | ABERTO | Aguardando revisão — PR novo |

**Recomendação:** O PR #920 trata-se de um fix de **baixa complexidade mas alto impacto** para usuários Windows. Recomenda-se priorização na revisão. A issue #919, por ser uma feature request sem discussão, beneficiaria-se de um response inicial dos maintainers para validar direção técnica.

---

## Métricas consolidadas (últimas 24h)

| Indicador | Valor |
|-----------|-------|
| Issues abertas/ativas | 1 |
| Issues fechadas | 0 |
| PRs abertos | 1 |
| PRs merged/fechados | 0 |
| Releases | 0 |
| Comentários totais | 0 |
| Reações totais | 0 |

**Veredicto de saúde:** 🟡 **Moderado** — Atividade baixa mas consistente, sem indicadores negativos críticos. Atenção ao tempo de resposta em PRs e issues abertas.

---

*Relatório gerado automaticamente com base em dados públicos do GitHub. Última atualização: 2026-05-19.*

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo do Ecossistema de Agentes de IA Open Source

**Data de Referência:** 2026-05-19
**Projetos Analisados:** NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw, ZeroClaw

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **duas velocidades distintas** em 19 de maio de 2026. Projetos maduros como **Hermes Agent** e **IronClaw** operam em escala industrial com volumes de 50+ issues e PRs diários, sinalizando adoção em produção. Simultaneamente, iniciativas menores como **NullClaw** mantêm foco estratégico em features específicas (controle de memória FTS5) sem se dispersar. A convergência técnica mais evidente é o investimento em **persistência de memória** — Seahorse (PicoClaw), Mnemon (NanoBot) e Reborn (IronClaw) representam abordagens distintas para o mesmo problema fundamental de contexto entre sessões. A fragmentação de providers de IA (Gemini, MiniMax, SiliconFlow, Ant Ling, Qiniu) indica uma corrida pela interoperabilidade, enquanto issues críticas como RCE (CoPaw) e bugs de streaming (Hermes Agent) revelam que a segurança e estabilidade ainda são maturando em paralelo com a feature velocity.

---

## 2. Comparação de Atividade

| Projeto | Issues (open/closed) | PRs (open/merged) | Releases (24h) | Bugs Críticos | Saúde |
|---------|----------------------|-------------------|----------------|---------------|-------|
| **NullClaw** | 1 / 0 | 1 / 0 | 0 | 0 | 🟡 Moderada |
| **NanoBot** | 5 / 2 | 12 / 10 | 0 | 1 (WeChat) | ✅ Robusta |
| **Hermes Agent** | 42 / 8 | 48 / 2 | 0 | 4 (P1) | ⚠️ Estabilização |
| **PicoClaw** | 5 / 3 | 18 / 8 | 1 (nightly) | 2 (FreshTail, OAuth) | 🟡 Boa |
| **IronClaw** | — / — | — / — | 0 | 4 (alta severidade) | ⚠️ Progresso com blockers |
| **CoPaw** | 19 / 12 | — / 6 | 1 (v1.1.8-beta.1) | 1 (RCE) | 🟡 Moderada |
| **ZeroClaw** | 15 / 10 | 41 / 9 | 0 | 5 (high-risk) | 🟡 Moderada |

**Observações:**
- **Feature velocity mais alta:** Hermes Agent (50 PRs) e IronClaw (34 PRs)
- **Taxa de merge mais saudável:** NanoBot (10/12 PRs abertos = 83% closure rate)
- **Release cadence:** Apenas PicoClaw (nightly) e CoPaw (beta) publicaram versões

---

## 3. Posicionamento do Projeto Principal

### NanoBot como Referência de Saúde

O NanoBot demonstra o **equilíbrio mais saudável** entre atividade e qualidade:

| Dimensão | NanoBot | Diferencial |
|----------|---------|-------------|
| **Arquitetura** | Provider registry unificado para imagem | Reduz de ~8 arquivos para adicionar provider |
| **Comunidade** | 8-10 contributors ativos | Diversidade de autores (Re-bin, chengyongru, DreamSheeper2006) |
| **Responsividade** | Issue Docker resolvida em 24h | Post-morte rápido em bugs de documentação |
| **Roadmap** | Clear — multi-provider, memory persistente, enterprise | Comunicação transparente de prioridades |

### Projetos com Maturidade Industrial

**Hermes Agent** e **IronClaw** lideram em volume absoluto, mas carregam debt técnico:

- **Hermes Agent:** 4 bugs P1 simultâneos (streaming hang, vision fallback, Telegram routing, proxy chain) — projeto em modo救火 (firefighting)
- **IronClaw:** Blocker de crates.io (#3259) há 14 dias impede distribuição; 6 bugs de embeddings indicam dívida em componentecrítico

### Projeto de Nicho com Foco

**NullClaw** exemplifica estratégia diferente — volume baixo (1 issue, 1 PR) mas com discussão técnica densa sobre FTS5 e DNS Windows, sugerindo produto para ambientes específicos (provavelmente embedded ou Windows-centric).

---

## 4. Focos Técnicos Compartilhados

### 4.1 Persistência de Memória (Contexto Entre Sessões)

| Projeto | Abordagem | Status |
|---------|-----------|--------|
| **PicoClaw** | Seahorse — memória biologicamente inspirada (hipocampo) | ✅ Merged (#1919) |
| **NanoBot** | Integração Mnemon | ✅ Merged (#3888) |
| **IronClaw** | Reborn personal context policy | 🔄 Em desenvolvimento (#3721) |
| **Hermes Agent** | Kanban + OpenClaw integration | 🔄 Parcial |

**Análise:** Este é o problema #1 do ecossistema. Todos os projetos estão investindo em variações de memória de curto/longo prazo, indicando que a primeira geração de agentes "stateless" foi rejeitada pelo mercado.

### 4.2 Expansão de Providers de IA

| Provider | NanoBot | PicoClaw | ZeroClaw | Hermes |
|----------|---------|----------|----------|--------|
| Gemini | ✅ | — | — | ✅ |
| MiniMax | ✅ | — | — | — |
| SiliconFlow | — | ✅ | — | — |
| Ant Ling | ✅ | — | — | — |
| Qiniu | 🔄 | — | — | — |
| Morph | — | — | 🔄 | — |
| GitHub Models | — | — | 🔄 | — |

**Análise:** A fragmentação de providers é tanto oportunidade quanto risco — usuários querem escolha, mas cada provider novo introduz surface de bugs.

### 4.3 Infraestrutura de Deployment

| Problema | Projetos Afetados | Status |
|----------|-------------------|--------|
| Docker configs inconsistentes | NanoBot, PicoClaw | 🔄 Correção em curso |
| WebUI para remote/Docker | NanoBot, IronClaw, ZeroClaw | 🔄 Múltiplos PRs |
| bwrap sandbox failures | NanoBot | 🔄 Corrigido (#3875) |
| Tauri desktop | CoPaw, ZeroClaw | 🔄 Em desenvolvimento |

### 4.4 Canais de Integração

| Canal | NanoBot | PicoClaw | Hermes | CoPaw | ZeroClaw |
|-------|---------|----------|--------|-------|----------|
| WeChat | ✅ | — | — | ✅ | — |
| Telegram | ✅ | ✅ | ✅ | — | ✅ |
| Feishu | — | — | — | ✅ | — |
| Slack | — | — | — | — | ✅ |
| Matrix | — | — | — | — | ✅ |
| Server酱 | — | ✅ | — | — | — |

---

## 5. Análise de Diferenciação

### 5.1 Por Público-Alvo

| Segmento | Projetos | Características |
|----------|----------|-----------------|
| **Enterprise/Governance** | IronClaw, Hermes Agent | Auth robusto, audit logs, multi-tenant, TEE |
| **Desenvolvedores individuais** | NullClaw, PicoClaw | Foco em UX, memória avançada, canais diversificados |
| **Mercado Chinês** | NanoBot, PicoClaw, CoPaw | WeChat, Feishu, DingTalk, Server酱 |
| **Cross-platform** | ZeroClaw | FreeBSD, Linux, Docker, desktop Tauri |
| **Multi-turn agents** | Hermes Agent, IronClaw | Orquestração complexa, Kanban, cron jobs |

### 5.2 Por Arquitetura Técnica

| Abordagem | Projetos | Vantagens | Riscos |
|-----------|----------|-----------|--------|
| **Monolito modular (Zig)** | NullClaw | Performance, binário único | Ecossistema limitado de libs |
| **Stack Python/TypeScript** | NanoBot, CoPaw | Ecossistema maduro, contributors abundantes | Performance em edge |
| **Rust nativo** | IronClaw, ZeroClaw | Segurança de memória, performance | Curva de entrada alta para contributors |
| **Registry de providers** | NanoBot | Extensibilidade | Manutenção de múltiplas APis |
| **Biologicamente inspirado** | PicoClaw (Seahorse) | Diferenciação técnica | Complexidade de implementação |

### 5.3 Por Estratégia de Features

```
Hermes Agent ──── Orquestração multi-agente (Kanban, Quality Gates)
IronClaw ──────── Reborn WebUI v2, product-live runtime
NanoBot ───────── Multi-provider imagem, onboarding wizard
PicoClaw ──────── Streaming first-class, canais diversificados
CoPaw ─────────── Desktop app (Tauri), plugins ecosystem
ZeroClaw ──────── ACP sessions, capability flags, permissions
NullClaw ──────── Controle granular FTS5, Windows compatibility
```

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração

| Categoria | Projetos | Métrica |
|-----------|----------|---------|
| **Iteração rápida (feature-driven)** | NanoBot, PicoClaw | 8-10 PRs merged/dia |
| **Estabilização (bugfix-heavy)** | Hermes Agent, IronClaw | 2 PRs merged/dia, 4+ P1 bugs |
| **Maturidade inicial** | NullClaw, CoPaw | 0-1 PRs merged/dia, foco em UX |
| **Consolidação de dívida** | ZeroClaw | 9 PRs merged, 5 high-risk bugs |

### 6.2 Responsividade a Bugs Críticos

| Projeto | Bug | Tempo de Resposta | Abordagem |
|---------|-----|-------------------|-----------|
| **NanoBot** | Docker docs inconsistency | <24h | PR direto merged |
| **CoPaw** | Rate limiter global | ~48h | PR #4487 com refatoração |
| **ZeroClaw** | Skills install panic | <12h | PR #6682 merged |
| **Hermes Agent** | Vision fallback P1 | Em aberto há dias | Múltiplos P1 competindo por atenção |
| **IronClaw** | crates.io blocker | 14 dias | Blocado por CVEs externos |

### 6.3 Engajamento Comunitário

| Indicador | Líder | Observação |
|-----------|-------|------------|
| **Issues mais comentadas** | CoPaw (#2291) | 62 comentários — help wanted centralizado |
| **Features com thumbs-up** | PicoClaw (#2674) | 4 👍 — bug de OAuth confirmado |
| **Dívida técnica documentada** | Hermes Agent | 4 P1 simultâneos — visibility alta |
| **Longevidade de issues** | ZeroClaw (#1924) | ~3 meses — FreeBSD request |
| **Release cadence** | PicoClaw | Nightly builds automáticas |

### 6.4 Maturidade por Estágio

| Estágio | Projetos | Características |
|---------|----------|-----------------|
| **Produção estabelecida** | Hermes Agent, IronClaw | Volume alto, bugs críticos, necessidade de hardening |
| **Crescimento acelerado** | NanoBot, PicoClaw | Feature velocity alta, comunidade engajada |
| **Product-market fit inicial** | CoPaw, ZeroClaw | Beta releases, foco em estabilidade |
| **Conceito/early stage** | NullClaw | Volume baixo, feature específica |

---

## 7. Sinais de Tendência

### 7.1 Tendências de Produto

| Tendência | Evidência | Implicação |
|-----------|-----------|------------|
| **Memória persistente como feature obrigatória** | Seahorse, Mnemon, Reborn, Mnemon | Agentes stateless estão sendo rejeitados; usuários esperam continuidade |
| **Multi-provider como padrão** | 7+ providers em 3+ projetos | lock-in em provider único é considerado risco |
| **Desktop como vetor de crescimento** | Tauri em CoPaw, ZeroClaw | Usuários querem apps nativos além de CLI/Docker |
| **Enterprise readiness** | IronClaw TEE, Hermes auth | Mercado B2B está entrando no open source |
| **Canais regionalizados** | WeChat, Feishu, Server酱 | Ecossistema responde a mercados não-Ocidentais |

### 7.2 Tendências Técnicas

| Tendência | Evidência | Implicação |
|-----------|-----------|------------|
| **Streaming first-class** | PicoClaw (#2892), CoPaw (#4494) | Latência percebida é diferencial competitivo |
| **Refatoração de agentes monolith** | NanoBot #3892 (330→métodos), Hermes | Necessidade de manutenibilidade em escala |
| **Tool result referencing** | IronClaw #3720, Hermes | Interoperabilidade entre agentes e ferramentas |
| **Permission systems granulares** | ZeroClaw (#6767-#6765), IronClaw | Desktop apps exigem segurança OS-level |
| **Observabilidade integrada** | ZeroClaw OTel, Hermes TokenTelemetry | Operações em produção exigem telemetria |

### 7.3 Tendências de Comunidade

| Sinal | Observação |
|-------|------------|
| **Consolidação de issues duplicadas** | CoPaw: 3 issues sobre mesmo rate limiter |
| **Pedidos de FreeBSD/ARM** | ZeroClaw #1924, PicoClaw #2887 |
| **Documentation como gargalo** | NanoBot precisou de 5 correções Docker em dias |
| **Security maturity ascending** | RCE em CoPaw (#4470) reportado e endereçado rapidamente |
| **Requests por Não-Inglês** | Hermes WeChat STT routing, mercado Chinês em foco |

### 7.4 Recomendações para Decisores

1. **Para escolha de plataforma:** NanoBot oferece melhor equilíbrio saúde/velocidade; Hermes Agent para casos de uso enterprise com equipe de engineering dedicada para suportar debt técnico.

2. **Para contribuidores individuais:** PicoClaw e CoPaw oferecem entry barrier menor com comunidade receptiva (help wanted com 62+ comentários).

3. **Para embedded/cross-platform:** ZeroClaw demonstra foco em FreeBSD e permission flows; NullClaw é candidato para casos Windows-specific.

4. **Para roadmap planning:** Memória persistente, multi-provider abstraction e desktop apps são features onde o ecossistema está convergindo — evitar soluções proprietárias nesses domínios.

---

*Relatório gerado automaticamente com base nos resumos de atividade pública do GitHub. Última atualização: 2026-05-19.*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-05-19

---

## 1. Panorama do dia

O NanoBot apresenta **alta atividade de desenvolvimento** nas últimas 24h, com 22 PRs atualizados (10 merged/closed) e 7 issues processadas (5 abertas, 2 fechadas). A equipe demonstrou foco significativo em **infraestrutura de providers de imagem** (Gemini, MiniMax, registry unificado), melhorias no WebUI para deployments remotos/Docker, e refatorações internas no AgentRunner. Não houve lançamentos de novas versões. O ecossistema de provedores continua se expandindo, enquanto a documentação de deployment recebe atenção merecida após reports de inconsistências. A saúde geral do projeto permanece **robusta**, com contributors ativos e pipeline de merge saudável.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

O projeto está em momento de alta feature velocity no branch `main`, acumulando changes que provavelmente serão consolidados em uma futura versão (potencialmente v0.16 ou similar). Usuários em produção devem monitorar o canal `#releases` ou GitHub Releases.

---

## 3. Progresso do Projeto

### PRs Merged/Closed Relevantes

| # | Título | Impacto | Link |
|---|--------|---------|------|
| **#3892** | Refatorar `AgentRunner.run()` em métodos focados | **Alto** — Elimina método monolith de 330 linhas, introduz `RunContext` e `LoopAction` enum para melhor manutenibilidade | [PR #3892](https://github.com/HKUDS/nanobot/pull/3892) |
| **#3899** | Live file edit activity no WebUI | **Médio** — Adiciona eventos explícitos para `write_file`, `edit_file`, `notebook_edit` com contagens aproximadas e diffs finais | [PR #3899](https://github.com/HKUDS/nanobot/pull/3899) |
| **#3886** | Gemini image generation provider | **Alto** — Suporte oficial para Imagen 4 e Gemini Flash com validação de aspect-ratio | [PR #3886](https://github.com/HKUDS/nanobot/pull/3886) |
| **#3879** | MiniMax image generation provider | **Alto** — Provider adicional com suporte a reference images e aspect ratio | [PR #3879](https://github.com/HKUDS/nanobot/pull/3879) |
| **#3890** | Model Preset wizard para onboarding | **Médio** — Wizard interativo CRUD para presets de modelo, extraído de PR anterior | [PR #3890](https://github.com/HKUDS/nanobot/pull/3890) |
| **#3889** | Preservar newlines únicos no markdown do WebUI | **Baixo** — Adiciona plugin `remark-breaks` para renderização correta de comandos `/help` | [PR #3889](https://github.com/HKUDS/nanobot/pull/3889) |
| **#3875** | WebUI Docker config requirements e flags bwrap | **Médio** — Corrige docs que causavam 403 errors e falhas no bwrap sandbox | [PR #3875](https://github.com/HKUDS/nanobot/pull/3875) |
| **#3900** | Adicionar suporte a Ant Ling | **Médio** — Provider OpenAI-compatible registrado como `ant_ling` nativo | [PR #3900](https://github.com/HKUDS/nanobot/pull/3900) |

**Resumo técnico:** A arquitetura de providers de geração de imagem está sendo modernizada com um registry unificado (#3893 em andamento), reduzindo o acoplamento de ~8 arquivos para adicionar novos providers.

---

## 4. Temas Quentes da Comunidade

### Issues/PRs com Maior Engajamento

| # | Tipo | Título | Comentários | Análise |
|---|------|--------|-------------|---------|
| **#3863** | Bug (Open) | WeChat login não funciona | 5 | **Demanda crítica** — Usuários de canais WeChat bloqueados por "versão baixa" no QR code scan. Afeta fluxo de autenticação em produção. | [Issue #3863](https://github.com/HKUDS/nanobot/issues/3863) |
| **#3888** | Enhancement (Closed) | Integração com Mnemon para memória persistente | 1 | **Feature request atendido** — Mnemon resolve "esquecimento de contexto entre sessões", pedido recorrente da comunidade. | [Issue #3888](https://github.com/HKUDS/nanobot/issues/3888) |
| **#3873** | Bug (Closed) | Inconsistências nos docs Docker com v0.2.0 | 1 | **Documentação resolvida** — 5 inconsistências entre docs, docker-compose, Dockerfile e README causavam deploys quebrados. | [Issue #3873](https://github.com/HKUDS/nanobot/issues/3873) |
| **#3885** | Enhancement (Open) | Global switch para Dream system jobs | 1 | **Controle de configuração** — Usuários querem desabilitar cron de memory cleanup mesmo com memory skill desabilitado. | [Issue #3885](https://github.com/HKUDS/nanobot/issues/3885) |

### Tendências Observadas

1. **Expansão de providers** — Gemini, MiniMax, Ant Ling, Qiniu (em review), Manifest (em review) indicam estratégia de diversificação de LLM/imagem.
2. **Docker/WebUI deployment** — Múltiplos PRs (#3904, #3891, #3875) addressing remote access e containerization challenges.
3. **Segurança e isolamento** — Feature #3887 (autorização de comandos perigosos) e #3898 (restricted mode tool isolation) mostram maturidade em direção a multi-tenant.

---

## 5. Bugs e Estabilidade

### Bugs Abertos

| Severidade | # | Título | Impacto | Link |
|------------|---|--------|---------|------|
| 🔴 **Alta** | **#3863** | WeChat login falha com "versão baixa" | Bloqueia autenticação WeChat — ambiente produtivo afetado | [Issue #3863](https://github.com/HKUDS/nanobot/issues/3863) |
| 🟡 **Média** | **#3901** | X checking job preso em loop infinito | Agent hit maximum tool call iterations — jobs de monitoramento quebrados | [Issue #3901](https://github.com/HKUDS/nanobot/issues/3901) |
| 🟡 **Média** | **#3903** | MIME type hardcoded como PNG em image generation | Imagens podem ser retornadas com Content-Type incorreto (MiniMax, AIHubMix) | [Issue #3903](https://github.com/HKUDS/nanobot/issues/3903) |

### Bugs Resolvidos (Recent)

- **#3873** — Docs Docker e docker-compose com 5 inconsistências corrigidas ([PR #3875](https://github.com/HKUDS/nanobot/pull/3875))
- **#3889** — Newlines únicos não renderizados no WebUI markdown
- **#3894** — Tool Call events não exibidos após execução (filtro `phase == "start"` muito restritivo)

### Métricas de Estabilidade

- **Taxa de resolução de bugs (últimas 24h):** 2 bugs fechados / 1 bug aberto = 67% resolution rate
- **Bugs críticos pendentes:** 1 (WeChat login — bloqueia feature em produção)

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Propostas (Open)

| # | Título | Descrição | Estratégia | Link |
|---|--------|-----------|------------|------|
| **#3887** | Autorização de comandos perigosos | Permitir users autorizarem comandos bloqueados por `deny_patterns` (rm -rf, format, dd, etc.) | Safety override com confirmação | [Issue #3887](https://github.com/HKUDS/nanobot/issues/3887) |
| **#3885** | Global switch para Dream cron jobs | Config `dream.enabled: false` para não registrar Dream jobs mesmo com memory skill | Configuração granular | [Issue #3885](https://github.com/HKUDS/nanobot/issues/3885) |
| **#3847** | skill_load tool | Novo tool para previnir perda de conteúdo de skills em multi-turn conversations | Tool dedicado | [PR #3847](https://github.com/HKUDS/nanobot/pull/3847) |
| **#3898** | Restricted mode tool isolation | Sender context privilege, admin tools filtrados, workspace hiding em restricted mode | Multi-tenant security | [PR #3898](https://github.com/HKUDS/nanobot/pull/3898) |

### Features em Pipeline (Open PRs)

| # | Título | Status | Link |
|---|--------|--------|------|
| **#3893** | Provider registry para image generation | 🔄 Em review | [PR #3893](https://github.com/HKUDS/nanobot/pull/3893) |
| **#3568** | Manifest LLM router | 🔄 Em review | [PR #3568](https://github.com/HKUDS/nanobot/pull/3568) |
| **#3621** | Multi-role agent squad para HF Spaces | 🔄 Em review | [PR #3621](https://github.com/HKUDS/nanobot/pull/3621) |
| **#3643** | Qiniu provider | 🔄 Em review | [PR #3643](https://github.com/HKUDS/nanobot/pull/3643) |

### Sinais de Roadmap

1. **Multi-provider imagem** — Registry unificado em andamento; diversificação de provedores (Gemini, MiniMax, DALL-E, etc.)
2. **Memory persistente** — Integração oficial com Mnemon e configuração granular de Dream jobs
3. **Deployment enterprise** — HF Spaces production-ready, Docker improvements, restricted mode
4. **Onboarding** — Model Preset wizard para reduzir fricção inicial

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Categoria | Problema | Severidade | Evidência |
|-----------|----------|------------|-----------|
| **Canal WeChat** | Login QR code rejeita scan mesmo com WeChat atualizado | 🔴 Alta | Issue #3863 — 5 comentários, afeta produção |
| **Deploy Docker** | Docs inconsistentes causam 403 errors e bwrap failures | 🟡 Média | Issue #3873 — 1 comentário, mas múltiplos PRs de correção |
| **Cron Jobs X** | Job de monitoramento preso em loop infinito | 🟡 Média | Issue #3901 — novo, sem comentários ainda |
| **Memória** | Agentes "esquecem" contexto entre sessões | 🟢 Resolvido | Issue #3888 — integração Mnemon merged |

### Cenários de Uso Identificados

1. **Assistentes multi-turn com memória persistente** —Mnemon integração responde demanda real
2. **Deploy em containers (Docker/HF Spaces)** — WebUI bootstrap e bwrap sandbox são pontos de fricção
3. **Multi-provider imagem** — Usuários querem escolha de provider (Gemini, MiniMax, DALL-E, etc.)
4. **Autorização de comandos admin** — Ambientes controlados precisam override de safety guard

### Indicadores de Satisfação

- **Alta velocidade de merge** — 10 PRs closed/merged em 24h demonstra team's responsiveness
- **Comunidade ativa** — Contribuições de múltiplos autores (Re-bin, chengyongru, DreamShepherd2006, etc.)
- **Resposta rápida a bugs críticos** — Issue #3873 (docs Docker) opened 2026-05-17, resolved 2026-05-18

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta > 7 dias

| # | Título | Age | Prioridade | Ação Recomendada | Link |
|---|--------|-----|------------|------------------|------|
| **#3568** | Manifest LLM router | 19 dias | 🟡 Média | Needs maintainer review — architecture decision pendente | [Issue #3568](https://github.com/HKUDS/nanobot/issues/3568) |
| **#3621** | Multi-role agent squad para HF Spaces | 15 dias | 🟡 Média | Feature grande — precisa de feedback técnico | [Issue #3621](https://github.com/HKUDS/nanobot/issues/3621) |
| **#3643** | Qiniu provider support | 13 dias | 🟢 Baixa | Provider regional — review pode ser acelerado | [Issue #3643](https://github.com/HKUDS/nanobot/issues/3643) |
| **#3762** | Codex provider retry blank failures | 7 dias | 🟡 Média | Bug prático — test coverage incluido | [Issue #3762](https://github.com/HKUDS/nanobot/issues/3762) |

### PRs Estagnados

| # | Título | Age | Status | Bloqueio | Link |
|---|--------|-----|--------|----------|------|
| **#3568** | Manifest LLM router | 19 dias | Open | Review pendente | [PR #3568](https://github.com/HKUDS/nanobot/pull/3568) |
| **#3847** | skill_load tool | 4 dias | Open | Último update: 2026-05-18 | [PR #3847](https://github.com/HKUDS/nanobot/pull/3847) |

---

## Métricas Consolidada do Dia

| Indicador | Valor | Tendência |
|-----------|-------|-----------|
| Issues ativas (open) | 5 | Neutra |
| PRs abertos | 12 | Estável |
| PRs merged/closed | 10 | **Alta** |
| Bugs críticos abertos | 1 (WeChat) | Atenção |
| Releases | 0 | Sem mudanças |
| Contributors ativos (estimativa) | 8-10 | **Alta** |

---

**Conclusão:** O NanoBot demonstra **saúde de projeto sólida** com alta cadência de contribuições e pipeline de review ativo. As prioridades imediatas são: (1) resolver bug WeChat login (#3863), (2) completar review dos PRs de provider registry (#3893) e features pendentes (#3568, #3621), e (3) finalizar improvements de Docker/WebUI deployment. A direção técnica está clara — diversificação de providers, memory persistente, e enterprise deployment readiness.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent
## Data: 2026-05-19

---

## 1. Panorama do Dia

O projeto Hermes Agent apresenta **alta atividade** nas últimas 24h, com 50 issues e 50 PRs atualizados. Não houve lançamentos de novas versões, indicando foco em estabilização e correções. A base de issues abertas permanece volumosa (42 ativas), com concentração em bugs P1 e P2 nos componentes core (agent, gateway, CLI). A comunidade demonstra engajamento significativo em features de orquestração (Kanban, qualidade) e integrações multi-plataforma.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto não publicou novas versões desde o último período. Isso pode indicar que a equipe está em ciclo de QA antes de um próximo lançamento, ou que o foco atual é processamento do backlog de PRs.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados Recentemente

| # | Título | Componente | Impacto |
|---|--------|------------|---------|
| [#25879](https://github.com/NousResearch/hermes-agent/pull/25879) | fix(gateway): add codex runtime telegram alias | gateway, telegram | Correção de UX - comando `/codex-runtime` agora acessível via Telegram |
| [#25162](https://github.com/NousResearch/hermes-agent/issues/25162) | Azure Foundry Bearer Token auth | auth, config | **Feature implementada** - suporte a Microsoft Entra ID |

### PRs Abertos de Alto Impacto (prontos para merge ou em revisão)

| # | Título | Prioridade | Componente |
|---|--------|-----------|------------|
| [#14390](https://github.com/NousResearch/hermes-agent/pull/14390) | fix: estabilizar runtime e restaurar test suite verde | **P1** | agent, gateway |
| [#28190](https://github.com/NousResearch/hermes-agent/pull/28190) | fix(cli): empty credential pool entries | P2 | CLI, auth |
| [#28209](https://github.com/NousResearch/hermes-agent/pull/28209) | fix(langfuse): resolver erros de context detach | P3 | observability |
| [#28184](https://github.com/NousResearch/hermes-agent/pull/28184) | feat(nvidia): native reasoning_effort para NIM | P3 | provider/nvidia |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

1. **[#15895](https://github.com/NousResearch/hermes-agent/issues/15895)** - Google Gemini CLI causando 429 com quotas OK
   - **13 comentários, 3 👍** | P3 | comp/cli, provider/gemini
   - *Análise*: Bug crítico de rate limiting no provider Gemini CLI. A comunidade reporta que, mesmo com quotas显示 OK via `/gquotas`, o Hermes recebe erros 429. Afeta fluxo OAuth.

2. **[#524](https://github.com/NousResearch/hermes-agent/issues/524)** - Agent Migration System (importar configurações)
   - **4 comentários** | Feature Request
   - *Análise*: Demanda de alto valor - migração automática de configurações de Claude Code, Codex, Cursor, Aider, Roo Code. Usuários querem onboarding facilitado.

3. **[#28056](https://github.com/NousResearch/hermes-agent/issues/28056)** - Quality Gates com bounded retry
   - **4 comentários** | Feature Request | comp/agent, cron, plugins
   - *Análise*: Pattern recorrente em automação de agentes - necessidade de validação de saída antes de considerar task completa.

4. **[#21498](https://github.com/NousResearch/hermes-agent/issues/21498)** - max_output_tokens dropado silenciosamente
   - **6 comentários** | P2 | comp/agent, area/config
   - *Análise*: Bug de config normalizer causando comportamento inesperado - default de 2048 tokens quando deveria respeitar provider config.

---

## 5. Bugs e Estabilidade

### P1 - Críticos ( требующие atenção imediata)

| # | Título | Componente | Descrição |
|---|--------|------------|-----------|
| [#27555](https://github.com/NousResearch/hermes-agent/issues/27555) | vision fallback_chain quebrado | agent, tool/vision | `_resolve_single_provider()` passa kwargs errados, retorna `None` silenciosamente |
| [#28089](https://github.com/NousResearch/hermes-agent/issues/28089) | Chain of failures com proxy | CLI | Problemas com novo comando `hermes proxy providers` |
| [#28161](https://github.com/NousResearch/hermes-agent/issues/28161) | Streaming Anthropic causa hang 15min | agent, provider/anthropic | `_replace_primary_openai_client` chamado incorretamente em paths de stale/retry |
| [#28153](https://github.com/NousResearch/hermes-agent/issues/28153) | Telegram thread ID routing incorreto | gateway, platform/telegram | Replies "Done" podem ser roteados para sessão errada |

### P2 - Importantes

| # | Título | Componente |
|---|--------|------------|
| [#21498](https://github.com/NousResearch/hermes-agent/issues/21498) | max_output_tokens silenciosamente dropado | agent, config |
| [#23799](https://github.com/NousResearch/hermes-agent/issues/23799) | Memory leak: OpenClaw fleet respawnado por invocação | gateway, tool/mcp |
| [#24170](https://github.com/NousResearch/hermes-agent/issues/24170) | 5 bugs no computer_use toolset (macOS) | tools |
| [#25822](https://github.com/NousResearch/hermes-agent/issues/25822) | Gemini 503 não triggera fallback | agent, provider/gemini |
| [#28156](https://github.com/NousResearch/hermes-agent/issues/28156) | Bedrock+Claude: wizard aceita credenciais incompletas | CLI, provider/bedrock |

### P3 - Observações

- [#28181](https://github.com/NousResearch/hermes-agent/issues/28181) - Kanban workers em estado zombie após SIGTERM
- [#28137](https://github.com/NousResearch/hermes-agent/issues/28137) - Exceções de plugins silenciosamente engolidas
- [#28138](https://github.com/NousResearch/hermes-agent/issues/28138) - Logs de plugins invisíveis no gateway.log

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Propostas

| # | Título | Componente | Potencial Impacto |
|---|--------|------------|-------------------|
| [#524](https://github.com/NousResearch/hermes-agent/issues/524) | Agent Migration System | onboarding | **Alto** - reduz fricção de migração |
| [#28056](https://github.com/NousResearch/hermes-agent/issues/28056) | Quality Gates com bounded retry | agent, cron | **Alto** - automation reliability |
| [#26696](https://github.com/NousResearch/hermes-agent/issues/26696) | TokenTelemetry Plugin | plugins, dashboard | **Médio** - observabilidade multi-agente |
| [#27579](https://github.com/NousResearch/hermes-agent/issues/27579) | Idle-triggered context compression | agent | **Médio** - UX/speed improvement |
| [#13663](https://github.com/NousResearch/hermes-agent/issues/13663) | Smart reasoning_effort routing | agent, config | **Médio** - eficiência de tokens |

### Sinais de Evolução de Roadmap

- **Orquestração multi-agente**: Kanban profile-describer (#28210), quality gates (#28056)
- **Observabilidade**: TokenTelemetry (#26696), Langfuse fix (#28209)
- **Integrações expandidas**: Podman backend (#8391), NVIDIA NIM reasoning (#28184)
- **Platformas alternativas**: WeChat STT routing (#27300), email thread isolation (#27508)

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Categoria | Issue | Descrição |
|-----------|-------|-----------|
| **Provider reliability** | #15895, #25822 | Inconsistências com Google Gemini - rate limits e fallbacks |
| **Auth complexity** | #28140, #28156, #25162 | Configuração de credenciais confusa (empty pools, Bedrock IAM) |
| **Memory/Performance** | #23799, #7069 | Vazamento de memória com OpenClaw, loops infinitos com LLMs locais |
| **Telegram UX** | #28153, #6204 | Roteamento de replies, necessidade de "just do it" para executar |
| **Plugin discovery** | #28137, #28138 | Falhas de plugins invisíveis, logs de plugins não aparecem |

### Cenários de Uso Emergentes

1. **Human-in-the-loop via Telegram**: Workflows de handoff humano com problemas de roteamento
2. **Multi-agent orchestration**: Kanban + OpenClaw integration ainda imatura
3. **Enterprise auth**: Microsoft Entra ID, AWS IAM, Azure Foundry
4. **Non-English platforms**: WeChat com STT garbled para não-Chinês

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Ativas há >7 dias

| # | Título | Criado | Prioridade | Estado |
|---|--------|--------|-----------|--------|
| [#7069](https://github.com/NousResearch/hermes-agent/issues/7069) | Infinite retry loop com local LLM | 2026-04-10 | Bug | OPEN (1 comentário) |
| [#6204](https://github.com/NousResearch/hermes-agent/issues/6204) | Hermes precisa de "just do it" | 2026-04-08 | P2 | OPEN (1 comentário) |
| [#524](https://github.com/NousResearch/hermes-agent/issues/524) | Agent Migration System | 2026-03-06 | Feature | OPEN (4 comentários) |

### PRs P1 Sem Merge

| # | Título | Idade | Bloqueio |
|---|--------|-------|----------|
| [#14390](https://github.com/NousResearch/hermes-agent/pull/14390) | Estabilizar gateway runtime | ~25 dias | Test suite verde |

---

## Métricas Consolidada do Período

| Indicador | Valor |
|-----------|-------|
| Issues ativas (24h) | 42 |
| Issues fechadas (24h) | 8 |
| PRs abertos (24h) | 48 |
| PRs merged/fechados (24h) | 2 |
| Releases | 0 |
| P1 bugs abertos | 4 |
| Features de alto impacto | 2+ |

**Saúde Geral**: O projeto demonstra atividade saudável mas com acúmulo de bugs P1/P2 nos componentes core. Recomenda-se priorização da estabilização do gateway (#14390) e correção dos bugs de streaming (#28161) e vision fallback (#27555) antes do próximo release.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-05-19

## 1. Panorama do Dia

O projeto PicoClaw demonstra **alta atividade de desenvolvimento** em 19 de maio de 2026. Nas últimas 24h, foram registradas **8 issues** (5 abertas, 3 fechadas) e impressionantes **26 PRs** (18 abertos, 8 fechados/merged), indicando um ritmo de integração intenso. A release nightly `v0.2.8-nightly.20260518.0df050ff` foi publicada, mantendo o ciclo de builds automatizados. Os principais focos de atenção são: correções no subsistema **Seahorse** (memória biologicamente inspirada), adição de **novos canais** (Telegram Business/Guest, Server酱³ Bot, SiliconFlow) e melhorias no **streaming** de respostas. A comunidade demonstra forte engajamento, especialmente em torno de features para agentes de IA com memória avançada.

---

## 2. Lançamentos

### Nightly Build Ativo
| Item | Detalhe |
|------|---------|
| **Versão** | `v0.2.8-nightly.20260518.0df050ff` |
| **Tipo** | Automated nightly build |
| **Status** | ⚠️ May be unstable — use with caution |
| **Comparativo** | https://github.com/sipeed/picoclaw/compare/v0.2.8...main |

> **Nota de migração:** Esta é uma build noturna automatizada. Para ambientes de produção, recomenda-se utilizar releases estáveisTagged quando disponíveis.

---

## 3. Progresso do Projeto

### PRs Fechados/Merged Hoje (8 total)

| PR | Título | Impacto |
|----|--------|---------|
| [#2886](https://github.com/sipeed/picoclaw/pull/2886) | Chat detail visibility selector | **UI/UX** — Selector de 4 estados para visibilidade de reasoning e tool calls |
| [#2885](https://github.com/sipeed/picoclaw/pull/2885) | Add SiliconFlow provider support | **Provider** — Integração nativa como provider first-class (OpenAI-compatible) |
| [#2882](https://github.com/sipeed/picoclaw/pull/2882) | Independent code block copy/collapse | **UI/UX** — Controles independentes para blocos de código no chat web |
| [#2878](https://github.com/sipeed/picoclaw/pull/2878) | load_image config fix | **Bug Fix** — Permite configuração via `config.json` |
| [#2884](https://github.com/sipeed/picoclaw/pull/2884) | SiliconFlow provider request | **Feature Request** — Fechado via #2885 |
| — | Seahorse feature | **Feature** — Fechado via #1919 |

### PRs Abertos com Alto Impacto

| PR | Título | Prioridade |
|----|--------|------------|
| [#2895](https://github.com/sipeed/picoclaw/pull/2895) | **fix(seahorse): enforce budget on fresh tail** | 🔴 Crítica — Corrige overflow de contexto |
| [#2892](https://github.com/sipeed/picoclaw/pull/2892) | **Support streaming** | 🟡 Alta — Dual opt-in (providers + channels) |
| [#2853](https://github.com/sipeed/picoclaw/pull/2853) | ChatStream for pico channel | 🟡 Alta — Real-time token streaming |
| [#2696](https://github.com/sipeed/picoclaw/pull/2696) | MCP dynamic headers per-request | 🟡 Alta — Flexibilidade para integrações |
| [#2551](https://github.com/sipeed/picoclaw/pull/2551) | Channel identification standardization | 🟡 Arquitetural — Decoupling de nomes e tipos |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| Issue | Título | Comentários | 👍 | Sentimento |
|-------|--------|:-----------:|:--:|------------|
| [#1919](https://github.com/sipeed/picoclaw/issues/1919) | **[CLOSED] Seahorse - Biologically-inspired Memory System** | 11 | 0 | ✅ Resolvido — Feature aguardada |
| [#2674](https://github.com/sipeed/picoclaw/issues/2674) | Codex OAuth empty response | 4 | 4 | 🔴 Bug confirmado |
| [#2796](https://github.com/sipeed/picoclaw/issues/2796) | Histórico mostra só última mensagem | 3 | 0 | 🔴 UI Bug |
| [#2887](https://github.com/sipeed/picoclaw/issues/2887) | .deb RISC-V não funcional | 2 | 0 | 🔴 Platform Bug |

### Análise dos Temas

**🌟 Seahorse Memory System (Issue #1919)** — Closed com merge da feature:
> Sistema de memória biologicamente inspirado (nomeado do hipocampo). Inclui:
> - Memória de curto prazo para compactação lossless de contexto
> - Memória de longo prazo para consolidação
> - FreshTail protection para mensagens recentes
> - Budget enforcement para não exceder janela de contexto

**🔧 Providers & OAuth (Issue #2674)** — Bug confirmado com 4 thumbs-ups:
> O provider Codex OAuth retorna respostas vazias quando o backend ChatGPT envia `response.output_item.done`. Impacta usuários do ecossistema OpenAI/ChatGPT.

**💬 UX Chat (Issue #2796)** — Problema de usabilidade:
> Usuários relatam que ao revisar histórico de conversas, apenas a última mensagem do usuário é exibida. Esperam ver todas as mensagens para debugging e continuidade.

---

## 5. Bugs e Estabilidade

### 🔴 Críticos

| Issue | Descrição | Severidade | Status |
|-------|-----------|:----------:|:------:|
| [#2894](https://github.com/sipeed/picoclaw/issues/2894) | **FreshTail (32 msgs) ignora budget limit** — Causa 400 BadRequestError quando excede context window | **Alta** | 🔴 Aberto |
| [#2895](https://github.com/sipeed/picoclaw/pull/2895) | PR em aberto corrige #2894 | — | 🔴 PR Aberto |

### 🟡 Medios

| Issue | Descrição | Severidade | Status |
|-------|-----------|:----------:|:------:|
| [#2674](https://github.com/sipeed/picoclaw/issues/2674) | Codex OAuth retorna resposta vazia com streaming | **Média** | 🟡 Aberto |
| [#2796](https://github.com/sipeed/picoclaw/issues/2796) | Histórico não exibe mensagens intermediárias do usuário | **Média** | 🟡 Aberto |
| [#2887](https://github.com/sipeed/picoclaw/issues/2887) | .deb RISC-V não funciona com modelo OpenAI | **Média** | 🟡 Aberto |

### 🟢 Resolvidos Hoje

| Issue | Descrição |
|-------|-----------|
| [#2878](https://github.com/sipeed/picoclaw/issues/2878) | load_image não configurável via config.json — **FIXED** |
| [#1919](https://github.com/sipeed/picoclaw/issues/1919) | Seahorse memory system — **Feature Merged** |

### 🔧 Correções em Pipeline

| PR | Fixa | Descrição |
|----|------|-----------|
| [#2895](https://github.com/sipeed/picoclaw/pull/2895) | #2894 | Enforce budget em fresh tail e rebuild paths |
| [#2890](https://github.com/sipeed/picoclaw/pull/2890) | macOS | Resolve symlinks em cwdPath para validação |
| [#2826](https://github.com/sipeed/picoclaw/pull/2826) | #2749 | Resolve relative paths no exec tool safety guard |

---

## 6. Pedidos de Features e Sinais de Roadmap

### ✨ Novas Features Em Desenvolvimento

| PR | Feature | Canal/Domínio | Notas |
|----|---------|---------------|-------|
| [#2893](https://github.com/sipeed/picoclaw/pull/2893) | **Server酱³ Bot (SC3Bot)** | Channel | Polling + Webhook mode para notifications China |
| [#2891](https://github.com/sipeed/picoclaw/pull/2891) | **Reset to Factory Defaults** | CLI/API/UI | Backup de config + preservação de credenciais |
| [#2892](https://github.com/sipeed/picoclaw/pull/2892) | **Streaming Support** | Provider | Dual opt-in (model + channel) |
| [#2849](https://github.com/sipeed/picoclaw/pull/2849) | **Telegram Guest Mode** | Channel | Modo visitante com autenticação flexível |
| [#2845](https://github.com/sipeed/picoclaw/pull/2845) | **Telegram Business Mode** | Channel | Suporte a business updates do Telegram |
| [#2844](https://github.com/sipeed/picoclaw/pull/2844) | **Same-agent Final Turn Render** | Agent | Extra LLM pass após tool execution |
| [#2851](https://github.com/sipeed/picoclaw/pull/2851) | **Yocto/OpenEmbedded Layer** | Docs | meta-picoclaw para embedded Linux builds |
| [#2853](https://github.com/sipeed/picoclaw/pull/2853) | **ChatStream para Pico Channel** | Channel | Real-time token streaming via WebSocket |

### 📋 Features Solicitadas (Issues)

| Issue | Feature | Comentários | Prioridade |
|-------|---------|:-----------:|:----------:|
| [#2884](https://github.com/sipeed/picoclaw/issues/2884) | Native SiliconFlow provider | 0 | ✅ Closed via #2885 |
| [#2843](https://github.com/sipeed/picoclaw/issues/2843) | Same-agent final turn render | 1 | 🟡 PR #2844 aberto |

---

## 7. Resumo de Feedback dos Usuários

### ✅ Positivo

| Feedback | Fonte | Tema |
|----------|-------|------|
| Interesse em SiliconFlow provider nativo | [#2884](https://github.com/sipeed/picoclaw/issues/2884) | Provider diversity |
| Necessidade de Yocto/OpenEmbedded support | [#2851](https://github.com/sipeed/picoclaw/pull/2851) | Embedded deployment |
| Seahorse memory system bem recebido | [#1919](https://github.com/sipeed/picoclaw/issues/1919) | AI Agent capabilities |

### 🔴 Dores e Frustrações

| Dor | Impacto | Urgência |
|-----|---------|:--------:|
| **FreshTail ignora budget** — Causa crashes com 400 errors | Prod | 🔴 Alta |
| **Codex OAuth retorna vazio** — Integração ChatGPT quebrada | Prod | 🔴 Alta |
| **Histórico truncado** — Só mostra última mensagem | UX | 🟡 Média |
| **.deb RISC-V quebrado** — Platform support issue | Platform | 🟡 Média |
| **Configuração load_image** — Não funciona via config.json | Config | 🟢 Baixa (resolvido) |

### 💡 Necessidades Identificadas

1. **Resiliência de memória** — Usuários querem que o sistema de memória seja confiável e respeite limites de budget
2. **Multi-canal** — Telegram guest/business modes, Server酱³ Bot demonstram demanda por canais diversificados
3. **Streaming first-class** — Suporte a streaming em tempo real é requisitado para melhor UX
4. **Provider diversity** — SiliconFlow como provider nativo indica desejo de não depender só de OpenAI

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Stale (>7 dias sem atualização)

| Issue | Título | Criado | Atualizado | Status |
|-------|--------|--------|------------|:------:|
| [#2674](https://github.com/sipeed/picoclaw/issues/2674) | Codex OAuth empty response | 2026-04-26 | 2026-05-18 | 🔴 Aberto |
| [#2796](https://github.com/sipeed/picoclaw/issues/2796) | Histórico mostra só última mensagem | 2026-05-07 | 2026-05-18 | 🟡 Aberto |
| [#2887](https://github.com/sipeed/picoclaw/issues/2887) | .deb RISC-V não funciona | 2026-05-17 | 2026-05-18 | 🟡 Aberto |
| [#2843](https://github.com/sipeed/picoclaw/issues/2843) | Same-agent final turn render | 2026-05-10 | 2026-05-18 | 🟡 PR #2844 |
| [#2696](https://github.com/sipeed/picoclaw/pull/2696) | MCP dynamic headers | 2026-04-28 | 2026-05-18 | 🟡 PR Aberto |
| [#2551](https://github.com/sipeed/picoclaw/pull/2551) | Channel identification refactor | 2026-04-16 | 2026-05-18 | 🟡 PR Aberto |
| [#2239](https://github.com/sipeed/picoclaw/pull/2239) | Docker compose privileged | 2026-04-01 | 2026-05-18 | 🟢 Stale |

### ⚠️ Prioridade de Triagem

```
🔴 PRIORIDADE 1 (Triagem urgente):
   - #2674: Bug em produção (Codex OAuth)
   - #2894: Bug crítico (context overflow) — PR #2895 pronto
   
🟡 PRIORIDADE 2 (Review necessário):
   - #2796: UX issue
   - #2887: Platform issue
   - #2696: Feature importante para MCP
   
🟢 PRIORIDADE 3 (Manter no radar):
   - #2239: Docker enhancement (stale desde April)
```

---

## Métricas Resumidas do Dia

| Métrica | Valor | Tendência |
|---------|------:|:---------:|
| Issues abertas/ativas | 5 | — |
| Issues fechadas | 3 | ↑ |
| PRs abertos | 18 | ↑ |
| PRs fechados/merged | 8 | ↑↑ |
| Nova release | 1 (nightly) | — |
| Bugs críticos | 2 | ⚠️ |
| Features em desenvolvimento | 9+ | ↑↑ |

---

*Relatório gerado automaticamente com base nos dados do GitHub de 2026-05-19. Última atualização: 2026-05-19.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-05-19

## 1. Panorama do Dia

O projeto IronClaw apresenta **altíssima atividade** nas últimas 24h, com 32 issues e 34 PRs atualizados, porém sem novas releases. O foco dominante continua na arquitetura **Reborn**, com PRs importantes de infraestrutura sendo merged (tool result refs, profile resolver, boot TOML, idempotency guards). Observa-se uma crescente atenção a bugs de estabilidade em embeddings e regressões na UI (provider config, toast duplicado), além de issues de segurança e autenticação pendentes para a rollout do Reborn WebUI.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

> ⚠️ **Issue crítica em aberto:** [#3259](https://github.com/nearai/ironclaw/issues/3259) — `crates.io` permanece bloqueado na versão `0.24.0` enquanto o GitHub já etiquetou até `v0.27.0` (29/abr/2026), devido a CVEs no wasmtime 28.x. Downstream consumers estão pinned, aguardando publicação das versões 0.25.0–0.27.0.

---

## 3. Progresso do Projeto

PRs merged/fechados nas últimas 24h:

| PR | Título | Impacto |
|----|--------|---------|
| [#3720](https://github.com/nearai/ironclaw/pull/3720) | `[codex] verify durable tool result refs` | Adiciona validação tipada de `ToolResultReference` com paridade in-memory/libSQL/Postgres |
| [#3704](https://github.com/nearai/ironclaw/pull/3704) | `feat(reborn): boot TOML + provider catalog` | Implementa `config.toml` + `providers.json` para o binário standalone ironclaw-reborn |
| [#3717](https://github.com/nearai/ironclaw/pull/3717) | `[codex] Wire planned profile resolver in Reborn composition` | Corrige #3696, conecta resolver ao production turn coordinator |
| [#3694](https://github.com/nearai/ironclaw/pull/3694) | `fix(webui): add send-message idempotency replay guards` | Escopo de idempotência por caller context; rejeita reuso de `client_action_id` em outra thread com `409 Conflict` |
| [#3735](https://github.com/nearai/ironclaw/pull/3735) | `feat(product_workflow): expose get_run_state on RebornServicesApi facade` | Expõe 4ª fachada M2 para web handlers sem acoplamento ao `TurnCoordinator` |
| [#3679](https://github.com/nearai/ironclaw/pull/3679) | `feat(reborn): apply universal FS dispatch across consumer crates` | Stacked PR com 13 commits, +15.214/-929 LOC em 61 arquivos, aplicando `RootFilesystem` universal |
| [#3721](https://github.com/nearai/ironclaw/pull/3721) | `Gate Reborn personal context by run profile` | Adiciona `ResolvedRunProfile.personal_context_policy`, protege `USER.md` e `context/assistant-directives.md` |

---

## 4. Temas Quentes da Comunidade

| Issue | Título | Comentários | Destaque |
|-------|--------|-------------|----------|
| [#3692](https://github.com/nearai/ironclaw/issues/3692) | Reborn: add policy-gated personal identity and heartbeat prompt context | 6 | Superfície de identidade/context Adiciona `HostIdentityContextSource` e `LoopContextBundle.identity_messages`; diferida para WS-15 |
| [#3259](https://github.com/nearai/ironclaw/issues/3259) | Publish 0.25.0–0.27.0 to crates.io | 5 | Blocker de distribuição; CVEs no wasmtime pinned downstream |
| [#3622](https://github.com/nearai/ironclaw/issues/3622) | Reborn: verify internal tool-result completion evidence | 3 | WS17 prova path reply-only; adapter atual rejeita `result_refs` não vazios |
| [#3620](https://github.com/nearai/ironclaw/issues/3620) | Reborn: convert provider tool calls into `ParentLoopOutput::CapabilityCalls` | 3 | Provider stack tem tipos tool-call; gateway Reborn chama API text-only e rejeita `FinishReason::ToolCalls` |
| [#3698](https://github.com/nearai/ironclaw/issues/3698) | Reborn: build test/dry-run product-live runtime harness | 2 | Primeiro slice shippable do product-live cutover, sem trocar `chat_send_handler` ainda |
| [#3068](https://github.com/nearai/ironclaw/issues/3068) | **[Reborn Cutover Blocker]** Preserve brokered HTTP credential injection | 1 | Blocker de feature-parity; regressar V1 credential-injection é inaceitável |

**Análise:** A comunidade está concentrada na integração do Reborn, com debates técnicos intensos sobre conversão de tool calls, identidade pessoal e evidências de resultado. O blocker de crates.io (#3259) tem atenção elevada por impactar consumidores externos.

---

## 5. Bugs e Estabilidade

| Severidade | Issue | Descrição |
|------------|-------|-----------|
| 🔴 **Alta** | [#3447](https://github.com/nearai/ironclaw/issues/3447) | Nightly E2E failed — workflow `Full E2E / E2E (features)` falhou; run `26013574624` |
| 🔴 **Alta** | [#3729](https://github.com/nearai/ironclaw/issues/3729) | `tool_install(gmail)` negada pelo usuário mostra ❌ inicialmente, mas após refresh aparece ✅ com conteúdo `[ACTION FAILED]` / `denied: denied by user` |
| 🔴 **Alta** | [#3734](https://github.com/nearai/ironclaw/issues/3734) | Regressão v0.28.2: provider config não mostra controles de API Key e Fetch available models em Non-TEE |
| 🟡 **Média** | [#3756](https://github.com/nearai/ironclaw/issues/3756) | ANSI coloring quebra strings de log em byte arrays no `journald` — capturado por PR #3758 |
| 🟡 **Média** | [#3736](https://github.com/nearai/ironclaw/issues/3736) | Providers não configurados ainda mostram botão `Use` em agentes TEE |
| 🟡 **Média** | [#3743](https://github.com/nearai/ironclaw/issues/3743) | Settings Telegram: toast de sucesso aparece duplicado após approve pairing code |
| 🟢 **Baixa** | [#3755](https://github.com/nearai/ironclaw/issues/3755) | Hint `AuthFailed` OpenAI-specific em workspace embed loop, mas erro pode vir de NEAR AI/Bedrock |
| 🟢 **Baixa** | [#3754](https://github.com/nearai/ironclaw/issues/3754) | `/v1/v1/embeddings` duplica quando `base_url` já termina em `/v1` |
| 🟢 **Baixa** | [#3753](https://github.com/nearai/ironclaw/issues/3753) | Bedrock embeddings caem para check `OPENAI_API_KEY` em `ironclaw doctor` |
| 🟢 **Baixa** | [#3752](https://github.com/nearai/ironclaw/issues/3752) | `embed_batch` ignora check `max_input_length` por item |
| 🟢 **Baixa** | [#3751](https://github.com/nearai/ironclaw/issues/3751) | Providers desconhecidos routam silenciosamente para OpenAI |
| 🟢 **Baixa** | [#3750](https://github.com/nearai/ironclaw/issues/3750) | Bedrock embeddings ignoram configuração de modelo DB/TOML |

> PR [#3758](https://github.com/nearai/ironclaw/pull/3758) já aberto para corrigir ANSI colors via `NO_COLOR`, `RUST_LOG_STYLE=never`, `FORCE_COLOR=0`.

---

## 6. Pedidos de Features e Sinais de Roadmap

| Prioridade | Issue/PR | Descrição |
|------------|----------|-----------|
| 🔴 **P0** | [#3068](https://github.com/nearai/ironclaw/issues/3068) | **Reborn Cutover Blocker:** Preservar e generalizar brokered HTTP credential-injection |
| 🔴 **P0** | [#3698](https://github.com/nearai/ironclaw/issues/3698) + [#3702](https://github.com/nearai/ironclaw/issues/3702) | Build product-live runtime harness + framework de testes E2E binários |
| 🟡 **P1** | [#3615](https://github.com/nearai/ironclaw/issues/3615) | Auditar auth/security parity para Reborn WebUI Beta (bearer, OIDC, CSRF, CORS) |
| 🟡 **P1** | [#3630](https://github.com/nearai/ironclaw/issues/3630) | Definir DTO lifecycle para gate, cancel e resume no WebUI |
| 🟡 **P1** | [#3289](https://github.com/nearai/ironclaw/issues/3289) | Migrar secrets, OAuth e auth setup flows para Reborn |
| 🟡 **P1** | [#3287](https://github.com/nearai/ironclaw/issues/3287) | Migrar memory e workspace product surfaces |
| 🟢 **P2** | [#3548](https://github.com/nearai/ironclaw/pull/3548) | Adicionar `DISABLE_TOOLS_LIST` flag com security regression test |
| 🟢 **P2** | [#3669](https://github.com/nearai/ironclaw/pull/3669) | Expor `notify_thread_id` e `notify_response_id` para tools via `JobContext.metadata` |

**Sinais de roadmap:** O foco está em preparar a rollout do Reborn WebUI v2 com infraestrutura de product-live, credenciais brokered e test harness E2E como pilares críticos antes do cutover.

---

## 7. Resumo de Feedback dos Usuários

| Categoria | Descrição | Origem |
|-----------|-----------|--------|
| **Dores de estabilidade UI** | Regressão v0.28.2 removeu controles de API Key e Fetch models; tool_install falha exibe sucesso após refresh | Issues [#3734](https://github.com/nearai/ironclaw/issues/3734), [#3729](https://github.com/nearai/ironclaw/issues/3729) |
| **Dores de experiência de providers** | Providers não configurados mostram botão `Use` enganoso; Bedrock ignora settings de modelo; providers desconhecidos caem silenciosamente para OpenAI | Issues [#3736](https://github.com/nearai/ironclaw/issues/3736), [#3750](https://github.com/nearai/ironclaw/issues/3750), [#3751](https://github.com/nearai/ironclaw/issues/3751) |
| **Dores de observabilidade** | ANSI colors em logs quebram parsing no journald para operators | Issue [#3756](https://github.com/nearai/ironclaw/issues/3756) |
| **Satisfação implícita** | PRs de infraestrutura (#3720, #3704, #3717) indicam maturidade crescente do Reborn; idempotency guards em webui resolvem dores de duplicated submissions | PRs merged |
| **需求 críticas pendentes** | Blocker de cutover (#3068) e publishing crates.io (#3259) bloqueiam progresso de downstream | Issues abertas |

---

## 8. Backlog que Merece Atenção

| Tempo sem resposta | Issue | Motivo |
|--------------------|-------|--------|
| 🔴 **14 dias** | [#3259](https://github.com/nearai/ironclaw/issues/3259) — Publish 0.25.0–0.27.0 to crates.io | Blocker de distribuição pública; afeta todos os consumers Rust |
| 🔴 **20 dias** | [#3068](https://github.com/nearai/ironclaw/issues/3068) — Reborn Cutover Blocker: credential injection | Regressão inaceitável para cutover |
| 🟡 **5 dias** | [#3287](https://github.com/nearai/ironclaw/issues/3287) — Migrate memory/workspace | Migration P1 sem comentários |
| 🟡 **5 dias** | [#3289](https://github.com/nearai/ironclaw/issues/3289) — Migrate secrets/OAuth | Migration P1 sem comentários |
| 🟡 **5 dias** | [#3615](https://github.com/nearai/ironclaw/issues/3615) — Audit WebUI auth/security | P1 security audit sem comentários |
| 🟢 **9 dias** | [#3447](https://github.com/nearai/ironclaw/issues/3447) — Nightly E2E failed | CI quebrado; sem investigação pública |
| 🟢 **5 dias** | [#3548](https://github.com/nearai/ironclaw/pull/3548) — DISABLE_TOOLS_LIST flag | PR aguardando testes; sem updates |

---

## Resumo Executivo

| Dimensão | Status |
|----------|--------|
| **Atividade** | ✅ Muito alta (32 issues, 34 PRs em 24h) |
| **Releases** | ⚠️ Nenhuma; blocker em crates.io publishing |
| **Infraestrutura** | ✅ PRs críticos merged (tool refs, profile resolver, boot config, idempotency) |
| **Estabilidade** | 🔴 4 bugs alta severidade (E2E fail, regressões UI, tool_install display) |
| **Reborn Readiness** | 🟡 Progresso forte em composition, factory, WebUI v2 routes; cutover blockers pendentes |
| **Embedding Health** | 🔴 6 bugs baixa/média severidade; extração em PR #3739 em progresso |
| **Community Engagement** | 🟡 Alta em threads técnicas Reborn; baixa em issues P1 de migration |
| **Riscos prioritários** | 1) crates.io publishing (#3259), 2) E2E CI quebrado (#3447), 3) Reborn credential injection (#3068) |

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do Projeto CoPaw — 2026-05-19

## 1. Panorama do Dia

O projeto CoPaw (QwenPaw) manteve alto nível de atividade nas últimas 24h, com **31 issues** e **23 PRs** atualizados. Uma nova release **v1.1.8-beta.1** foi publicada, sinalizando continuidade no ciclo de desenvolvimento. A comunidade demonstrou engajamento significativo em issues de suporte (chat não responsivo), com múltiplos usuários reportando problemas similares que foram endereçados por PRs de bug fix. A release também incluiu melhorias no plan mode e correções no browser tool. O time demonstrou responsividade na resolução de bugs críticos, como o problema de rate limiter global que causava chat travado.

---

## 2. Lançamentos

### v1.1.8-beta.1
**Link:** https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.8-beta.1

#### Mudanças Registradas

| PR | Autor | Tipo | Descrição |
|----|-------|------|-----------|
| #4346 | @xieyxclack | chore | Bump de versão para 1.1.8b1 |
| #4198 | @yuanxs21 | feat | Reforço do plan reaffirm a partir da mensagem do usuário |

#### Breaking Changes
Nenhuma breaking change identificada nesta release beta.

#### Notas de Migração
- Release em estágio beta; não recomendado para produção.
-留意 plan mode可能会有行为变化，建议测试 antes de upgrade em ambientes críticos.

---

## 3. Progresso do Projeto

### PRs Fechados/Merged Hoje (6 total)

| PR | Autor | Tipo | Impacto | Link |
|----|-------|------|---------|------|
| **#4487** | @rayrayraykk | fix | **Resolveu #4469** — Substituiu rate limiter global por instância por modelo, eliminando "chat não responsivo" | [PR #4487](https://github.com/agentscope-ai/QwenPaw/pull/4487) |
| **#4489** | @qbc2016 | fix | Aumentou min `max_tokens` para 20, resolvendo InvalidParameter error em modelos como qwen3.5-omni-plus | [PR #4489](https://github.com/agentscope-ai/QwenPaw/pull/4489) |
| #4488 | @zhijianma | fix | Fez upgrade do `@agentscope-ai/chat` para 1.1.63, corrigindo SSE connection leak em navegação | [PR #4488](https://github.com/agentscope-ai/QwenPaw/pull/4488) |
| #4476 | @zhijianma | fix | Adicionou agregação de token usage por modelo | [PR #4476](https://github.com/agentscope-ai/QwenPaw/pull/4476) |
| #4479 | @xusuohan | feat | Adicionou provider octoken | [PR #4479](https://github.com/agentscope-ai/QwenPaw/pull/4479) |
| #4429 | @jinglinpeng | fix | Follow-up de backup restore trust, melhorando compatibilidade desktop e CORS | [PR #4429](https://github.com/agentscope-ai/QwenPaw/pull/4429) |

### PRs Abertos de Destaque

| PR | Autor | Tipo | Descrição | Link |
|----|-------|------|-----------|------|
| #3813 | @youngchan1988 | feat | **Desktop app via Tauri 2.x** — suporte nativo desktop em andamento | [PR #3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) |
| #4482 | @yuanxs21 | feat | Plugin download integrado ao website e Console manager | [PR #4482](https://github.com/agentscope-ai/QwenPaw/pull/4482) |
| #4493 | @lalaliat | perf | Batch append para inbox trace events, reduzindo I/O | [PR #4493](https://github.com/agentscope-ai/QwenPaw/pull/4493) |
| #4407 | @TheSh0e | feat | Skill companion para World Cup 2026 | [PR #4407](https://github.com/agentscope-ai/QwenPaw/pull/4407) |
| #4443 | @suntp | feat | Lightweight goal mode para sessões | [PR #4443](https://github.com/agentscope-ai/QwenPaw/pull/4443) |
| #4490 | @hongxicheng | fix | Graceful shutdown do WeChat poll thread com exponential backoff | [PR #4490](https://github.com/agentscope-ai/QwenPaw/pull/4490) |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| Issue | Tipo | Comentários | Link | Análise |
|-------|------|-------------|------|---------|
| **#2291** | enhancement/help wanted | **62** | [#2291](https://github.com/agentscope-ai/QwenPaw/issues/2291) | Help Wanted com lista de tarefas abertas (P0-P2); ponto central de contribuição comunitaria. Mantém-se ativo desde 2026-03-25. |
| **#4469** | bug | **17** | [#4469](https://github.com/agentscope-ai/QwenPaw/issues/4469) | Chat não responsivo com "três pontinhos"; **já resolvido via #4487** |
| **#4453** | question | **10** | [#4453](https://github.com/agentscope-ai/QwenPaw/issues/4453) | Questão similar a #4469; indica problema sistêmico no rate limiting |
| **#4051** | question | **8** | [#4051](https://github.com/agentscope-ai/QwenPaw/issues/4051) | Parsing de think content no DeepSeek v4 flash |
| **#4477** | bug | **7** | [#4477](https://github.com/agentscope-ai/QwenPaw/issues/4477) | WeChat iLink cron push failure — **prioridade alta**, sem retry logic |
| **#4474** | question | **6** | [#4474](https://github.com/agentscope-ai/QwenPaw/issues/4474) | Suporte a ChatGPT-5.5 |

### Análise de Demandas

**Padrões Identificados:**
1. **Chat unresponsive:** 3 issues relacionadas ao mesmo sintoma (RuntimeError no event loop + rate limiter)
2. **Windows GBK encoding:** Issue #4481 solicita solução sistêmica para problemas de encoding
3. **AGENTS.md loading:** Bug #4496 reportando template default em vez de conteúdo real após upgrade
4. **Console stream stalls:** Bug #4494 com streaming intermitente em sessões longas

---

## 5. Bugs e Estabilidade

### 🔴 Críticos

| Bug | Severidade | Descrição | Status | Link |
|-----|------------|-----------|--------|------|
| **#4470** | **CRÍTICA** | Plugin interface com vulnerabilidade RCE (execução de código remoto não autorizada) | **ABERTA** | [#4470](https://github.com/agentscope-ai/QwenPaw/issues/4470) |
| **#4477** | ALTA | WeChat iLink cron: context_token expira e retorna ret=-2, sem retry logic | ABERTA | [#4477](https://github.com/agentscope-ai/QwenPaw/issues/4477) |
| **#4485** | ALTA | Plugin tools não injetadas no Agent Toolkit — function calling não funciona para plugins custom | ABERTA | [#4485](https://github.com/agentscope-ai/QwenPaw/issues/4485) |

### 🟡 Moderados

| Bug | Severidade | Descrição | Status | Link |
|-----|------------|-----------|--------|------|
| **#4496** | MODERADA | AGENTS.md carrega template default em vez do arquivo do workspace após upgrade para 1.1.7 | ABERTA | [#4496](https://github.com/agentscope-ai/QwenPaw/issues/4496) |
| **#4494** | MODERADA | Console stream para no meio da geração com mensagem enganosa | ABERTA | [#4494](https://github.com/agentscope-ai/QwenPaw/issues/4494) |
| **#4448** / #4447 | MODERADA | Context compaction falha frequentemente ("missing ## header") | ABERTA | [#4448](https://github.com/agentscope-ai/QwenPaw/issues/4448) |
| **#4497** | MODERADA | Line breaks em Markdown tables não funcionam (3ª tentativa do usuário) | ABERTA | [#4497](https://github.com/agentscope-ai/QwenPaw/issues/4497) |
| **#4473** | MODERADA | get_token_usage tool não funciona corretamente | FECHADA | [#4473](https://github.com/agentscope-ai/QwenPaw/issues/4473) |

### 🟢 Resolvidos Recentemente

| Bug | Descrição | Fix Associado |
|-----|-----------|---------------|
| #4469 | Chat não responsivo (3 pontinhos) | #4487 — Rate limiter por modelo |
| #4484 | OpenAIProvider connection test não lê extra_headers | #4492 — PR em review |
| #4478 | Feishu "too frequent" error | Correlacionado a #4487 |

### Métricas de Estabilidade

| Indicador | Valor |
|-----------|-------|
| Issues abertas (ativas) | 19 |
| Issues fechadas (24h) | 12 |
| Taxa de resolução | 63% (12/19) |
| Bugs críticos abertos | 1 (RCE) |
| Regressões reportadas | 2 (#4496, #4494) |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Propostas

| Feature | Categoria | Link | Relevância |
|---------|-----------|------|-------------|
| **Tauri 2.x Desktop App** | Plataforma | [#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) | Estratégica — app nativo desktop |
| **Plugin Download Manager** | Plugins | [#4482](https://github.com/agentscope-ai/QwenPaw/pull/4482) | Distribuição oficial de plugins |
| **World Cup 2026 Companion Skill** | Skills | [#4407](https://github.com/agentscope-ai/QwenPaw/pull/4407) | Conteúdo Sazonal |
| **Deletar mensagens na conversa** | UI/Console | [#4437](https://github.com/agentscope-ai/QwenPaw/issues/4437) | UX — gerenciamento de contexto |
| **Dividir conversa (session split)** | UI/Console | [#4436](https://github.com/agentscope-ai/QwenPaw/issues/4436) | UX — gerenciamento de contexto |
| **Exibir contador de turns** | UI/Console | [#4435](https://github.com/agentscope-ai/QwenPaw/issues/4435) | UX — controle de contexto |
| **Goal Mode** | Core/Agent | [#4443](https://github.com/agentscope-ai/QwenPaw/pull/4443) | Novos modos de interação |
| **typer para CLI** | CLI | [#4472](https://github.com/agentscope-ai/QwenPaw/issues/4472) | Modernização da CLI |
| **Flathub/Flatpak installer** | Distribuição | [#4486](https://github.com/agentscope-ai/QwenPaw/issues/4486) | Linux deployment |
| **Feishu CardKit streaming** | Channels | [#4480](https://github.com/agentscope-ai/QwenPaw/pull/4480) | Melhora UX no Feishu |

### Sinais de Roadmap

**Indicações de Prioridade Futura:**
1. **Desktop app (Tauri)** — em desenvolvimento ativo (PR #3813)
2. **Gerenciamento de contexto** — 3 features correlacionadas (#4435, #4436, #4437) indicam demanda por controle de conversation history
3. **Plugin ecosystem** — distribuição oficial (#4482) + fix de toolkit (#4485)
4. **Multi-canal melhorias** — Feishu, WeChat em foco com streaming e error handling

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais

| Dor | Frequência | Impacto | Link |
|-----|------------|---------|------|
| **Chat não responde / "três pontinhos"** | ALTA | Crítico — bloqueia uso | [#4469](https://github.com/agentscope-ai/QwenPaw/issues/4469), [#4453](https://github.com/agentscope-ai/QwenPaw/issues/4453) |
| **WeChat cron push failures** | MÉDIA | Perda de notificações | [#4477](https://github.com/agentscope-ai/QwenPaw/issues/4477) |
| **DeepSeek think parsing** | MÉDIA | Respostas incompletas | [#4051](https://github.com/agentscope-ai/QwenPaw/issues/4051) |
| **Contexto muito longo sem controle** | ALTA | Custo de API | [#4435](https://github.com/agentscope-ai/QwenPaw/issues/4435), [#4436](https://github.com/agentscope-ai/QwenPaw/issues/4436) |
| **Encoding GBK no Windows** | CONTÍNUO | Usuários Windows CN | [#4481](https://github.com/agentscope-ai/QwenPaw/issues/4481) |

### Cenários de Uso Reportados

| Cenário | Feedback |
|---------|----------|
| **Chatbot multi-canal** | Usuários usando WeChat, Feishu, DingTalk simultaneamente |
| **Longa conversation** | Sessões com 10+ tool-call rounds têm problemas de streaming |
| **Deploy interno (LAN)** | Falha de ícone por CDN externo |
| **Plugin development** | Desenvolvedores tentando criar plugins custom enfrentam toolkit não injetado |
| **World Cup usage** | Skill de companion esperada para 2026 |

### Satisfação/Insatisfação

| Indicador | Observação |
|-----------|------------|
| **Suporte responsivo** | Time responde rapidamente a bugs críticos |
| **Comunidade ativa** | 62 comments em help wanted, indicando engajamento |
| **Fragmentação de issues** | Mesmo sintoma (#4469, #4453) reportado separadamente |
| **Regressões** | Upgrade para 1.1.7 quebrou AGENTS.md loading |
| **Escalabilidade** | Rate limiter global indica dívida técnica em arquitetura |

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta há Tempo

| Issue | Tempo | Tipo | Link | Urgência |
|-------|-------|------|------|----------|
| **#2908** | ~45 dias | bug | [#2908](https://github.com/agentscope-ai/QwenPaw/issues/2908) | Média — ícones CDN falham em LAN |
| **#3813** | ~25 dias | feat | [#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) | **Alta** — Desktop app |
| **#4051** | ~13 dias | question | [#4051](https://github.com/agentscope-ai/QwenPaw/issues/4051) | Média — DeepSeek parsing |

### PRs Pendentes de Review

| PR | Tempo Aberto | Autor | Link | Prioridade |
|----|--------------|-------|------|------------|
| #4492 | <1 dia | @Andrai985 | [#4492](https://github.com/agentscope-ai/QwenPaw/pull/4492) | **Alta** — fix extra_headers |
| #4495 | <1 dia | @lalaliat | [#4495](https://github.com/agentscope-ai/QwenPaw/pull/4495) | Média — cron validation |
| #4332 | ~5 dias | @hanson-hex | [#4332](https://github.com/agentscope-ai/QwenPaw/pull/4332) | Média — frontend tests |
| #4438 | ~3 dias | @weixizi | [#4438](https://github.com/agentscope-ai/QwenPaw/pull/4438) | Média — browser tabs |

### Ação Recomendada

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-05-19

---

## 1. Panorama do Dia

O ecossistema ZeroClaw registrou **alta atividade** em 19 de maio de 2026, com 25 issues e 50 PRs atualizados nas últimas 24 horas. A taxa de fechamento de issues está equilibrada (10 fechadas vs. 15 abertas), e 9 PRs foram merged ou fechados, indicando ritmo saudável de revisões. **Não houve releases**, sinalizando que a equipe está em ciclo de desenvolvimento intensivo antes de uma próxima versão. A comunidade demonstra forte engajamento em múltiplas frentes: correções críticas de CI, melhorias em skills/UX, e expansão de canais (Slack, Matrix, email). O volume de issues abertas com标签 de alta severidade (7 bugs classificados como `risk: high`) merece atenção imediata para garantir estabilidade da codebase.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24 horas.**

O projeto está em fase de maturação de changes para a próxima versão. Issues como `#6253` ("zeroclaw skills support and UX") sugerem que o release v0.7.6 está em preparação com tema focado em melhorias no subsystem de skills. Recomenda-se monitorar o repositório para announcements iminentes.

---

## 3. Progresso do Projeto

### PRs Merged/Closed Hoje

| # | PR | Impacto | Status |
|---|-----|---------|--------|
| [#6682](https://github.com/zeroclaw-labs/zeroclaw/pull/6682) | `fix(skills): run ClawHub install on the async runtime` | **Crítico** — corrige panic ao instalar skills do ClawHub | ✅ CLOSED |
| [#6616](https://github.com/zeroclaw-labs/zeroclaw/pull/6616) | `test(tools): cover Tavily search routing aliases` | Melhora cobertura de testes para Tavily | ✅ CLOSED |

### PRs Abertos de Destaque

| # | PR | Tamanho | Risco | Descrição |
|---|-----|---------|-------|-----------|
| [#6649](https://github.com/zeroclaw-labs/zeroclaw/pull/6649) | `feat(channels/acp): persist ACP sessions` | XL | HIGH | Adiciona `AcpSessionStore` SQLite-backed para persistência de sessões ACP |
| [#6736](https://github.com/zeroclaw-labs/zeroclaw/pull/6736) | `fix(runtime,channels): keep malformed tool protocol internal` | L | HIGH | Novo classifier para detectar e tratar tool-call protocols malformados |
| [#6675](https://github.com/zeroclaw-labs/zeroclaw/pull/6675) | `fix(runtime): add strict tool parsing mode` | M | HIGH | Adiciona `agent.strict_tool_parsing` para parsing nativo vs. fallback |
| [#6190](https://github.com/zeroclaw-labs/zeroclaw/pull/6190) | `feat(obs): instrument runtime memory ops with OTel GenAI spans` | L | MEDIUM | Instrumentação OpenTelemetry para operações de memória do runtime |
| [#6428](https://github.com/zeroclaw-labs/zeroclaw/pull/6428) | `feat(channels/slack): backfill thread context on first agent encounter` | M | MEDIUM | Thread context backfill para Slack |

**Nota:** O PR #6682 foi mergeado rapidamente após a issue #6681 reportar panic crítico — demonstrando resposta eficiente da comunidade a bugs bloqueantes.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| # | Título | Comentários | 👍 | Categoria |
|---|--------|-------------|-----|-----------|
| [#1924](https://github.com/zeroclaw-labs/zeroclaw/issues/1924) | FreeBSD platform support | 7 | 1 | Enhancement |
| [#6210](https://github.com/zeroclaw-labs/zeroclaw/issues/6210) | SkillForge emits non-schema fields inside [skill] block | 5 | 0 | Bug |
| [#6128](https://github.com/zeroclaw-labs/zeroclaw/issues/6128) | Add deny_unknown_fields to SkillMeta | 4 | 0 | Enhancement |
| [#6558](https://github.com/zeroclaw-labs/zeroclaw/issues/6558) | providers error com Qwen | 3 | 0 | Bug |
| [#5745](https://github.com/zeroclaw-labs/zeroclaw/issues/5745) | PDF support in tools | 2 | 0 | Feature |

### Análise de Demandas

**FreeBSD Support (#1924)** — Com 7 comentários, esta é a issue mais discutida. Usuários de servidores FreeBSD, jails e TrueNAS solicitam binários pré-compilados para eliminação de compilação manual. Este é um pedido de portabilidade de longa data.

**Skills System Improvements (#6128, #6210)** — A sequência de issues sobre `SkillMeta` com `deny_unknown_fields` demonstra foco da equipe em robustez de schema. O follow-up #6210 identifica campos não-conformes sendo emitidos pelo SkillForge, indicando trabalho contínuo em qualidade de código.

**PDF Support (#5745)** — Usuários querem que agentes ingiram PDFs diretamente (artigos acadêmicos, periódicos). Esta feature atenderia casos de uso em pesquisa e documentação técnica.

---

## 5. Bugs e Estabilidade

### Bugs Críticos (S0/S1 - risco: high)

| # | Severidade | Título | Status |
|---|-----------|--------|--------|
| [#6751](https://github.com/zeroclaw-labs/zeroclaw/issues/6751) | S0 | `pr-title` workflow nunca executou — startup_failure em todos os PRs desde #6396 | **OPEN** |
| [#6681](https://github.com/zeroclaw-labs/zeroclaw/issues/6681) | S1 | `zeroclaw skills install clawhub:*` panics (reqwest::blocking dentro de #[tokio::main]) | CLOSED (via #6682) |
| [#6756](https://github.com/zeroclaw-labs/zeroclaw/issues/6756) | S2 | `zeroclaw models list` falha para custom providers (doctor não lê api_key) | **OPEN** |
| [#6754](https://github.com/zeroclaw-labs/zeroclaw/issues/6754) | S2 | ACP bridge auto-pairing depende de código one-time-use frágil | **OPEN** |

### Bugs de Degraded Behavior (S2)

| # | Título | Status |
|---|--------|--------|
| [#6632](https://github.com/zeroclaw-labs/zeroclaw/issues/6632) | cron_run persiste failures como "ok" incorretamente | **OPEN** |
| [#6739](https://github.com/zeroclaw-labs/zeroclaw/issues/6739) | Cron timezone contract inconsistente entre tools, CLI e API | **OPEN** |
| [#6643](https://github.com/zeroclaw-labs/zeroclaw/issues/6643) | "Thoughts" mesclam na mensagem final usando GLM-5.1 | **OPEN** |
| [#6724](https://github.com/zeroclaw-labs/zeroclaw/issues/6724) | Channels supervisor crashloop com todos channels `enabled=false` | **OPEN** |
| [#6558](https://github.com/zeroclaw-labs/zeroclaw/issues/6558) | Provider error com custom endpoint da Qwen (405 Method Not Allowed) | **OPEN** |

### Bugs Medium/Low Risk

| # | Título | Status |
|---|--------|--------|
| [#6245](https://github.com/zeroclaw-labs/zeroclaw/issues/6245) | Tavily search provider não implementado (TODO stub) | CLOSED (via #6185) |
| [#6756](https://github.com/zeroclaw-labs/zeroclaw/issues/6756) | Model listing falha para custom providers | **OPEN** |
| [#6747](https://github.com/zeroclaw-labs/zeroclaw/issues/6747) | `amannn/action-semantic-pull-request` não executa (não está na allowlist) | CLOSED |

**⚠️ Alerta:** O bug #6751 (CI workflow quebrado) está impedindo validação automática de PR titles desde 2026-05-16, afetando a qualidade do merge workflow. Prioridade recomendada para investigação imediata.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features (enhancements de alta prioridade)

| # | Título | Risco | Prioridade | Área |
|---|--------|-------|------------|------|
| [#6253](https://github.com/zeroclaw-labs/zeroclaw/issues/6253) | Track: zeroclaw skills support and UX (v0.7.6) | MEDIUM | P1 | Skills |
| [#6729](https://github.com/zeroclaw-labs/zeroclaw/issues/6729) | Agent capability flags para shared/ access e workspace escape | LOW | P2 | Agent/Gateway |
| [#6661](https://github.com/zeroclaw-labs/zeroclaw/issues/6661) | Preserve committed streamed output durante websocket steering | HIGH | P2 | Runtime |
| [#6742](https://github.com/zeroclaw-labs/zeroclaw/issues/6742) | Add streaming payload tracing tests para --log-llm | LOW | P2 | Observability |
| [#6637](https://github.com/zeroclaw-labs/zeroclaw/issues/6637) | Clarify /api/events lifecycle event semantics | MEDIUM | P3 | Gateway |
| [#6760](https://github.com/zeroclaw-labs/zeroclaw/issues/6760) | Update Docker documentation para v0.7.5-debian | LOW | P3 | Docs |
| [#6715](https://github.com/zeroclaw-labs/zeroclaw/issues/6715) | Delete unneeded branches (200+ branches sem uso) | LOW | P3 | Repo hygiene |

### Provider Expansions

| # | Título | Provider | Status |
|---|--------|----------|--------|
| [#6439](https://github.com/zeroclaw-labs/zeroclaw/issues/6439) | Add Morph (Fast Apply) como model provider | Morph | IN-PROGRESS |
| [#6444](https://github.com/zeroclaw-labs/zeroclaw/issues/6444) | Add GitHub Models como model provider | GitHub Models | IN-PROGRESS |

### Desktop/Tauri Improvements (PRs abertos)

- [#6767](https://github.com/zeroclaw-labs/zeroclaw/pull/6767): Local Network permission revocation detection
- [#6766](https://github.com/zeroclaw-labs/zeroclaw/pull/6766): Full disk access permission flow
- [#6765](https://github.com/zeroclaw-labs/zeroclaw/pull/6765): Input monitoring permission flow
- [#6763](https://github.com/zeroclaw-labs/zeroclaw/pull/6763): Screen recording permission flow

**Sinal de roadmap:** A concentração de PRs em permission flows para Tauri indica foco em **segurança desktop** para a próxima versão. Combinado com a issue #6729 (capability flags), parece haver movimento em direção a um modelo de permissões mais granular.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

1. **FreeBSD Users (#1924):** Usuários de TrueNAS e FreeBSD estão impedidos de usar binários pré-compilados, sendo forçados a compilar do zero. Esta é uma barreira de adoção significativa para ambientes de servidor não-Linux.

2. **Skills Installation Broken (#6681):** O comando `zeroclaw skills install clawhub:*` estava completamente quebrado por uso incorreto de `reqwest::blocking` dentro do runtime async. Bug foi corrigido, mas destaca fragilidade no subsystem de skills.

3. **Model Providers Unreliable (#6558, #6756):** Usuários enfrentando erros com providers custom (Qwen) e problemas na listagem de modelos custom via `zeroclaw doctor`. A experiência de onboarding com providers alternativos precisa de hardening.

4. **Cron Semantics Confusing (#6632, #6739):** Usuários reportam comportamento inesperado em agendamento — failures sendo reportados como "ok" e inconsistência de timezone entre interfaces.

5. **Slack Thread Blindness (#6428):** Quando @mencionado no meio de uma thread, o agente só vê a mensagem detonadora, perdendo contexto do thread parent.

### Cenários de Uso Observados

- **Pesquisa acadêmica:** Usuários solicitam suporte a PDF para ingestar artigos científicos diretamente.
- **Ambientes heterogêneos:** FreeBSD, TrueNAS, múltiplos providers (GLM, Qwen, Ollama, Gemini) demonstram diversificação de ambientes de deployment.
- **Desktop productivity:** Features de permission flow indicam uso em contextos onde segurança de sistema é prioritária.

---

## 8. Backlog que Merece Atenção

### Issues Sem Atribuição ou Resposta Prolongada

| # | Título | Criado | Atualizado | Idade | Prioridade |
|---|--------|--------|------------|-------|------------|
| [#1924](https://github.com/zeroclaw-labs/zeroclaw/issues/1924) | FreeBSD platform support | 2026-02-26 | 2026-05-18 | ~3 meses | — |
| [#5745](https://github.com/zeroclaw-labs/zeroclaw/issues/5745) | PDF support in tools | 2026-04-15 | 2026-05-18 | ~1 mês | P2 |
| [#6252](https://github.com/zeroclaw-labs/zeroclaw/issues/6252) | error-path response parity for config patch | 2026-05-01 | 2026-05-18 | ~18 dias | P2 |
| [#6637](https://github.com/zeroclaw-labs/zeroclaw/issues/6637) | Clarify /api/events lifecycle semantics | 2026-05-13 | 2026-05-18 | ~6 dias | P3 |

### PRs Bloqueados ou Aguardando Ação

| # | Título | Status | Bloqueio |
|---|--------|--------|----------|
| [#6190](https://github.com/zeroclaw-labs/zeroclaw/pull/6190) | OTel GenAI spans instrumentation | **needs-author-action** | Depende de #6009 |
| [#6049](https://github.com/zeroclaw-labs/zeroclaw/pull/6049) | Gemini OAuth refresh fix | **superseded** | Aguardando replacement PR |
| [#6238](https://github.com/zeroclaw-labs/zeroclaw/pull/6238) | WeChat context_tokens persistence | OPEN | Review pendente |

### Recomendações

1. **#1924 FreeBSD:** Esta issue está aberta há ~3 meses com engajamento significativo. Considerar designação de mantenedor para avaliar viabilidade de build cross-platform.

2. **CI Health (#6751):** Workflow de PR title validation quebrado precisa ser restaurado para manter qualidade de commits.

3. **Skills UX (#6253):** Tracker para v0.7.6 está em status `accepted` — confirmar se existe timeline de release e comunicar à comunidade.

4. **Repository Hygiene (#6715):** 200+ branches órfãs poluem o repositório. Mesmo sendo baixa prioridade, impacto na manutenibilidade é significativo.

---

## Métricas Consolidada (24h)

| Categoria | Quantidade |
|-----------|------------|
| Issues abertas/ativas | 15 |
| Issues fechadas | 10 |
| PRs abertos | 41 |
| PRs merged/fechados | 9 |
| Releases | 0 |
| Bugs high-risk (open) | 5 |
| Features high-priority (open) | 2 |

**Saúde Geral:** 🟡 **Moderada** — Atividade saudável com múltiplos PRs de alta qualidade em review, mas bugs críticos de CI e provider reliability precisam resolução prioritária. A ausência de releases indica foco em estabilização antes do próximo tag.

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*