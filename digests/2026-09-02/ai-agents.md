# Resumo diário do ecossistema de agentes de IA 2026-09-02

> Issues: 0 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-09-01 22:19 UTC

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

# Relatório Comparativo do Ecossistema de Agentes de IA — 2026-09-02

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **dois padrões distintos de maturidade** em 02/09/2026. De um lado, **Hermes Agent, CoPaw e ZeroClaw** operam em modo de estabilização intensiva, acumulando bugs P0/P1 críticos relacionados a gerenciamento de sessões, state persistence e segurança de sandbox. Do outro, **NanoBot, IronClaw e PicoClaw** demonstram ciclos de desenvolvimento saudáveis com foco em UX, design system e extensibilidade multi-canal. **NullClaw** permanece inativo, sugerindo abandono ou hibernação do projeto. A ausência quase universal de releases formais nas últimas 24h indica que toda a indústria está priorizando estabilidade sobre features, com debt técnico acumulado em áreas de contexto persistente, streaming multi-plataforma e isolamento de agentes.

---

## 2. Comparação de Atividade

| Projeto | Issues (abertas/fechadas) | PRs (abertos/merged) | Releases (24h) | Bugs Críticos | Saúde |
|---------|:-------------------------:|:--------------------:|:--------------:|:-------------:|:-----:|
| **Hermes Agent** | 44/6 | 34/16 | 0 | 4 P0, 4 P1 | 🔴 Instável |
| **CoPaw** | 17/~14 | 18/15 | 1 (v2.2.0-beta.6) | 3 críticos | 🟡 Beta instável |
| **ZeroClaw** | ~34/3 | ~47/3 | 0 | 4 S0/S1 | 🟡 Arquitetural |
| **NanoBot** | 4/2 | 10/9 | 0 | 2 P2 | 🟢 Estável |
| **IronClaw** | 11/5 | 14/9 | 0 | 2 P1 | 🟢 Sólida |
| **PicoClaw** | 3/~1 | 3/1 | 0 | 1 alta | 🟡 Emergente |
| **NullClaw** | — | — | — | — | ⚫ Inativo |

**Nota:** Métricas de ZeroClaw estimadas a partir de "37 issues" e "50 PRs" atualizados (abertos + merged não discriminados).

---

## 3. Posicionamento do Projeto Principal

### NanoBot como Referência de Saúde

**NanoBot** emerge como o projeto com melhor relação atividade/estabilidade nesta análise, posicionando-se como referência de maturidade operacional:

**Vantagens frente aos pares:**
- **Taxa de merge de PRs de 47%** (9 de 19) vs. 3 de 50 em ZeroClaw (6%)
- **Bug P1 zero** — ausência de instabilidade sistêmica
- **Feature lifecycle disciplinado**: runtime-context ephemeral (#5615/#5619) evoluiu de issue → PR → merge em ciclo curto
- **Backlog respondido**: apenas 3 issues estagnadas vs. dezenas em Hermes/ZeroClaw

**Diferenças técnicas:**
- Arquitetura orientada a **runtime-context blocks** com suporte a opt-out de persistência — diferencial para dados sensíveis
- Foco em **tool primitives filesystem** (#5626 copy_file/move_file)填补 gap fundamental
- Suporte multi-canal (Feishu, WeChat, Telegram) com preview de documentos via iframe+srcdoc

**Tamanho da comunidade:**
- Atividade moderada mas consistente (6 issues, 19 PRs em 24h)
- 10 PRs abertos aguardando review indicam **demanda por features** superior à capacidade de review
- Issue #2061 (6 meses) expõe risco de priorização — funcionalidade básica (copy file) não resolvida

### IronClaw como Alternativa de Crescimento

**IronClaw** apresenta a segunda melhor saúde, com foco em **design system unificado (M3)** e otimização de performance:

- Redução de payloads GitHub API de **519KB para ~20KB** (PR #7996)
- CI parallelizado com nextest — tempo de build reduzido
- 4 bugs P1/P2 abertos vs. 8+ em Hermes — saúde significativamente superior

---

## 4. Focos Técnicos Compartilhados

A análise dos 7 projetos ativos revela **cinco desafios técnicos convergentes** que transcendem implementações individuais:

### 4.1 Gerenciamento de Estado e Persistência de Sessão

| Projeto | Problema Específico |
|---------|---------------------|
| Hermes Agent | `state.db` corruption — 11 incidentes em 18 dias (#90837) |
| Hermes Agent | Compression stall — 10min lock em sessões grandes (#99692) |
| CoPaw | Contexto perdido em conversas longas 160+ páginas (#7447) |
| ZeroClaw | SOPs não carregam silenciosamente por config default não honrado (#9779) |
| IronClaw | Docker sandbox não gravável em rootless (#8015) |

**Síntese:** A persistência de estado conversacional é o problema técnico mais recorrente, afetando 5 de 7 projetos. Não há consenso arquitetural sobre quando/como consolidar contexto.

### 4.2 Streaming e Compatibilidade Multi-Plataforma

| Projeto | Problema |
|---------|----------|
| Hermes Agent | Telegram streaming truncado (#98552) |
| Hermes Agent | Matrix gateway sem streaming com `m.replace` (#100708) |
| PicoClaw | MCP server failure causa agent loop hang (#3269) |
| NanoBot | SO_ACCEPTCONN não portátil em health check WebSocket (#5617) |

**Síntese:** Cada plataforma de mensagens (Telegram, Matrix, Discord, Feishu) exige adaptações específicas de streaming e protocolo.

### 4.3 Segurança e Isolamento de Agentes

| Projeto | Problema |
|---------|----------|
| ZeroClaw | Delegate tool ignora allowlist do parent (#8279) |
| ZeroClaw | Plugin WASM sem política de egress (#9395) |
| CoPaw | Shell line-continuation evade guardas (#7472 — corrigido) |
| CoPaw | Custom endpoint expõe API key em config.yaml (#57547) |

**Síntese:** A segurança de sandbox é preocupação crescente, especialmente em arquiteturas multi-tenant e plugin-based.

### 4.4 Otimização de Contexto e Memória

| Projeto | Foco |
|---------|------|
| NanoBot | Runtime-context ephemeral (opt-out de persistência) |
| ZeroClaw | Separação de authoritative storage vs. enrichment (#9103) |
| CoPaw | ReMe embedding com crash fatal em rebuild (#7446 — corrigido) |
| Hermes Agent | Prefix-cache invalidation on model switch (2%→99% cache miss) |

### 4.5 UX Multi-Canal e Design System

| Projeto | Foco |
|---------|------|
| IronClaw | Design System M3 com componentes compartilhados |
| PicoClaw | UX em grupos Telegram (reply threading, quoted documents) |
| NanoBot | TUI input preservation e WebUI first-run setup |
| CoPaw | Console streaming e dark mode |

---

## 5. Análise de Diferenciação

### 5.1 Posicionamento por Público-Alvo

| Projeto | Público-Alvo | Diferencial |
|---------|--------------|-------------|
| **Hermes Agent** | Equipes enterprise, Windows Desktop | Multi-profile (10 perfis), Kanban, Cron, OAuth |
| **CoPaw** | Usuários Qwen/DingTalk | ReMe memory, mobile draft, multi-agent |
| **ZeroClaw** | Desenvolvedores e operadores avançados | RFC-driven, WASM plugins, sandbox granular |
| **NanoBot** | Produtividade multi-canal | Feishu/WeChat nativo, filesystem primitives |
| **IronClaw** | Usuários Slack-centric | Design system, GitHub integration, dogfooding |
| **PicoClaw** | Edge computing, low-cost devices | Worker mode proposal, RISC-V/ARM |

### 5.2 Diferenças Arquiteturais

| Aspecto | Hermes Agent | ZeroClaw | NanoBot | IronClaw |
|---------|--------------|----------|---------|----------|
| **Extensibilidade** | Skills hub, MCP | WASM plugins | Tool primitives | Channels modular |
| **Estado** | state.db SQLite | SQLite + optional enrichment | Runtime-context blocks | Checkpoint state |
| **Testes** | E2E flaking (desabilitado) | CI canary (Slack) | Unit tests | nextest parallelizado |
| **Governança** | Issues + PRs | RFC process formal | Issues convencionais | Epic-driven |
| **Release cadence** | Nenhuma (bloqueado por E2E) | Nenhuma | Nenhuma | Nenhuma |

### 5.3 Matriz de Maturidade

```
                    Alta Estabilidade
                          │
    IronClaw ─────────────┼────────────── NanoBot
         │                │                     │
         │    🟡 Em       │                     │
         │    Consolidação│                     │
         │                │                     │
         ├────────────────┼─────────────────────┤
         │                │                     │
    PicoClaw              │              CoPaw
         │                │                │
         │      🔴 Alta   │     Estabilidade🔴
         │      Instabilidade
         │
         └────────────────┴──────────────────────────► Alta Complexidade
                   Hermes Agent         ZeroClaw
```

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Projetos em Iteração Rápida

| Projeto | PRs Merged/24h | Taxa | Sinal |
|---------|:--------------:|:----:|-------|
| **CoPaw** | 15 | ~45% | Ciclo beta acelerado, v2.2.0-beta.6 publicada |
| **NanoBot** | 9 | 47% | Feature delivery consistente |
| **IronClaw** | 9 | ~40% | Design system M3 em progresso |

### 6.2 Projetos em Consolidação de Qualidade

| Projeto | Situação | Sinal |
|---------|----------|-------|
| **Hermes Agent** | E2E desabilitado após 4/5 falhas | CI não confiável para releases |
| **ZeroClaw** | 13 RFCs em discussão | Foco em arquitetura, não features |
| **CoPaw** | 3 correções críticas merged | Regressões beta sendo endereçadas |

### 6.3 Indicadores de Maturidade da Comunidade

| Indicador | Melhor | Pior | Observação |
|-----------|:------:|:----:|------------|
| **Tempo de resposta a bugs críticos** | IronClaw (1 dia) | NanoBot (#2061: 6 meses) | Variação enorme |
| **Processo de governança** | ZeroClaw (RFC formal) | PicoClaw (informal) | ZeroClaw mais maduro |
| **Cobertura de testes** | CoPaw (+617 casos) | Hermes (E2E quebrado) | CoPaw investindo |
| **Segurança - patches** | CoPaw (guard bypass corrigido em 24h) | ZeroClaw (#8279: em progresso) | Variável |

---

## 7. Sinais de Tendência

### 7.1 Do Ecossistema

**1. Consolidação de Estabilidade > Features**

> 6 de 7 projetos sem release nas últimas 24h; Hermes Agent mantendo E2E desabilitado; CoPaw em ciclo beta de estabilização.

**Interpretação:** O mercado está em fase de "pay off debt técnico" após expansão rápida de features. Releases formais serão retomadas quando bugs P0/P1 forem resolvidos.

**2. RFC-Driven Development como padrão**

> ZeroClaw com 13+ RFCs ativas; IronClaw com Epic-driven design system; ambos processos estruturados de discussão arquitetural.

**Interpretação:** Comunidades maduras estão adotando RFCs como mecanismo de governança para decisões de longo prazo, evitando tech debt de soluções precipitadas.

**3. Multi-Agent e Sub-Agent Patterns**

> CoPaw reportando uso de "主agent+多子agent"; Hermes Agent com profile isolation; ZeroClaw com delegate tool.

**Interpretação:** O padrão de agentes hierárquicos está emergindo como necessidade real dos usuários, não apenas conceito acadêmico.

### 7.2 Do Feedback da Comunidade

**4. Demanda por Edge Computing**

> PicoClaw #3345: worker mode para 10-20MB devices; IronClaw dogfooding interno; múltiplas menções a Raspberry Pi, RISC-V.

**Interpretação:** Cresce interesse em deployment distribuído onde um PC forte coordena dispositivos de baixo custo — possível resposta a custos de inference.

**5. Preocupação com Segurança de Sandbox**

> ZeroClaw: 2 vulnerabilidades críticas abertas; CoPaw: bypass de guardas corrigido; Hermes Agent: OAuth credential stranding.

**Interpretação:** À medida que agentes ganham acesso a ferramentas (filesystem, HTTP, plugins), segurança de isolamento se torna requirement crítico, não opcional.

**6. Context Window Management como Prioridade**

> NanoBot: runtime-context ephemeral; Hermes: prefix-cache invalidation; CoPaw: perda de contexto em 160+ páginas; ZeroClaw: lifecycle policy separation.

**Interpretação:** Gestão inteligente de contexto está evoluindo de "coloque tudo no prompt" para políticas declarativas de retenção, expiração e opt-out.

**7. Canal Feishu/WeChat como Mercados Emergentes**

> NanoBot com features específicas para Feishu; CoPaw com DingTalk integration; PicoClaw com bug de config Feishu.

**Interpretação:** O ecossistema open source está expandindo além de Telegram/Discord para canais asiáticos, refletindo base de usuários global.

---

## Síntese para Decisores

| Stakeholder | Recomendação |
|-------------|--------------|
| **Dev teams avaliando adoção** | Priorizar **NanoBot** para estabilidade imediata; **IronClaw** para crescimento de longo prazo; evitar **Hermes Agent** até estabilização de E2E |
| **Contribuidores individuais** | Engajar em **ZeroClaw RFCs** (governança madura) ou **CoPaw beta** (impacto rápido em bugs críticos) |
| **Empresas enterprise** | Aguardar resolução de bugs P0 em **Hermes Agent** (#90837, #99692) antes de deploy production; considerar **IronClaw** se Slack-centric |
| **Pesquisadores/Edge** | Acompanhar **PicoClaw worker mode** (#3345) para dispositivos受限 |

---

*Relatório gerado a partir de dados públicos do GitHub em 2026-09-02. NullClaw inativo excluded de comparações quantitativas.*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# 📊 Relatório do Projeto NanoBot — 2026-09-02

**Repositório:** [HKUDS/nanobot](https://github.com/HKUDS/nanobot)  
**Período:** Últimas 24 horas

---

## 1. Panorama do Dia

O projeto NanoBot apresenta **alta atividade** no dia de hoje, com **6 issues** e **19 PRs** atualizados nas últimas 24 horas. O desenvolvimento está fortemente focado em **estabilidade do agente** (task groups, background tasks, runtime context) e **experiência do usuário** (WebUI setup flow, TUI input handling). Houve **9 PRs merged/fechados**, indicando boa velocidade de entrega, embora **10 PRs permaneçam abertos** aguardando review. Não foram lançadas novas versões hoje. A relação aberta/fechada de issues (4:2) sugere um backlog saudável de problemas sendo endereçados.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

O projeto está em ativo desenvolvimento sem tags de versão informadas no período. Equipe recomenda monitorar a branch `main` para acompanhar desenvolvimentos contínuos.

---

## 3. Progresso do Projeto

### PRs Merged/Closed (9 total)

| PR | Autor | Sumário | Impacto |
|----|-------|---------|---------|
| [#5622](https://github.com/HKUDS/nanobot/pull/5622) | DannyYTL | Corrige duplicação de SOUL/USER/MEMORY no prompt Dream | **Qualidade** — Elimina redundância de contexto na consolidação de memória |
| [#5619](https://github.com/HKUDS/nanobot/pull/5619) | xiexiahao | Suporte a runtime-context ephemeral (opt-out de persistência) | **Feature** — Fecha #5586; novo lifecycle para blocos de contexto |
| [#5615](https://github.com/HKUDS/nanobot/pull/5615) | linhongyu510 | Implementa `ephemeral` runtime context no agente | **Feature** — Complementa #5619 com suporte em Agent |
| [#5621](https://github.com/HKUDS/nanobot/pull/5621) | chengyongru | Preserva input digitado após submit no TUI | **UX** — Melhora experiência no terminal |
| [#5617](https://github.com/HKUDS/nanobot/pull/5617) | Krislu1221 | Corrige SO_ACCEPTCONN não-portátil no health check WebSocket | **Bug/Cross-platform** — macOS/BSD compatibility |
| [#5430](https://github.com/HKUDS/nanobot/pull/5430) | yu-xin-c | Libera task groups vazios após completion | **Performance/Memory** — Evita vazamento em AgentLoop |
| [#5604](https://github.com/HKUDS/nanobot/pull/5604) | LWT1212 | Documenta mutual exclusivity dos selectors em edit_file | **Docs** — Clarifica API contract |
| [#5569](https://github.com/HKUDS/nanobot/pull/5569) | chengyongru | Extrai tool execution boundary do AgentRunner | **Refatoração** — Separação de responsabilidades |
| [#5603](https://github.com/HKUDS/nanobot/pull/5603) | olesxg | Detecta turns que claim ações nunca executadas | **Feature/Test** — Fecha parte de #1697 |

### Destaque de Avanço
A **feature de runtime-context ephemeral** (#5615 + #5619) representa uma evolução significativa no controle de ciclo de vida de contexto, permitindo que blocos sejam visíveis apenas na requisição atual sem poluir o histórico persistente — útil para dados sensíveis ou temporários.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários + relevância)

| Issue | Título | Comentários | Tipo | Link |
|-------|--------|-------------|------|------|
| #2061 | Bug: Unable to Copy File Inside Workspace | 3 | Bug | [Link](https://github.com/HKUDS/nanobot/issues/2061) |
| #5251 | Enhancement: Add MCP Apps host support to WebUI | 3 | Enhancement | [Link](https://github.com/HKUDS/nanobot/issues/5251) |
| #5586 | Enhancement: Let runtime-context block opt out of history persistence | 1 | Enhancement | [Link](https://github.com/HKUDS/nanobot/issues/5586) |
| #5493 | Enhancement: Add HTML/.txt/.md document preview | 0 | Enhancement | [Link](https://github.com/HKUDS/nanobot/issues/5493) |

### Análise de Demandas

1. **Issue #2061 — Bug de Copy File:** Usuário reportando que o agente consegue ler/listar arquivos mas nunca executa a escrita. Afeta especificamente o canal Feishu. **Comunidade demonstra frustração** (issue aberta desde 2026-03-15).

2. **Issue #5251 — MCP Apps WebUI:** Demanda por expor resultados de ferramentas MCP como artefatos de UI (não apenas texto para o modelo). Integração com extensão `io.modelcontextprotocol/ui`. **Indica tendência de amadurecimento do ecossistema MCP**.

3. **Issue #5493 — Preview de Documentos:** Proposta de uso de iframe+srcdoc para preview seguro de HTML/txt/md nos canais (WeChat, Feishu, Telegram). **Feature request de usabilidade multi-canal**.

---

## 5. Bugs e Estabilidade

### Bugs Abertos

| Prioridade | Issue | Descrição | Link |
|------------|-------|-----------|------|
| **P1** | — | Nenhum bug P1 aberto | — |
| **P2** | #2061 | Copy file dentro do workspace não funciona (repetição infinita de read_file/list_dir) | [Link](https://github.com/HKUDS/nanobot/issues/2061) |
| **P2** | #5493 | Falta preview de documentos HTML/TXT/MD | [Link](https://github.com/HKUDS/nanobot/issues/5493) |

### Bugs Corrigidos (últimas 24h)

| PR | Descrição | Severidade |
|----|-----------|------------|
| [#5622](https://github.com/HKUDS/nanobot/pull/5622) | Dream prompt duplicando contexto SOUL/USER/MEMORY | Média |
| [#5617](https://github.com/HKUDS/nanobot/pull/5617) | SO_ACCEPTCONN não portátil em health check WebSocket | Média (cross-platform) |
| [#5621](https://github.com/HKUDS/nanobot/pull/5621) | Input do TUI perdido após submit | Baixa |
| [#5430](https://github.com/HKUDS/nanobot/pull/5430) | Task groups vazios não liberados (memory leak) | Baixa-Média |

### Status de Estabilidade
**Geral: Estável.** Não há bugs críticos ou regressions P1 reportadas. O foco atual é em bugs P2 de usabilidade e refinamento de edge cases. A equipe demonstra atenção a cross-platform compatibility (WebSocket) e memory management (task groups).

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features em Desenvolvimento (PRs Abertos)

| PR | Feature | Prioridade | Link |
|----|---------|------------|------|
| [#5626](https://github.com/HKUDS/nanobot/pull/5626) | Adicionar `copy_file` e `move_file` ao toolset | — | Adiciona primitivas filesystem ausentes |
| [#5625](https://github.com/HKUDS/nanobot/pull/5625) | Guide first-run AI setup no WebUI | — | Melhora onboarding |
| [#5620](https://github.com/HKUDS/nanobot/pull/5620) | Cron delivery configurável + batch archive | P2 | Fecha #5513; roteamento de resultados de cron jobs |
| [#5614](https://github.com/HKUDS/nanobot/pull/5614) | Streaming de mensagens rich no Telegram | — | Melhora UX em canais |
| [#5283](https://github.com/HKUDS/nanobot/pull/5283) | Per-session sandbox isolation (não-WebUI) | P2 | Isolamento de workspace por sessão |

### Sinais de Roadmap Identificados

1. **MCP Apps Integration (#5251):** Evolução do suporte MCP para UI artifacts — indica direção de amadurecimento do ecossistema de extensibilidade.

2. **Sandbox Isolation (#5283):** Recurso de segurança para multi-tenant — importante para deployments em produção.

3. **Filesystem Primitives (#5626):** Ausência de `copy_file`/`move_file` era gap conhecido; sua adição indica maturação do conjunto de ferramentas do agente.

4. **Cron Delivery Configurável (#5620):** Separação de jobs automatizados de conversas pessoais — demanda de usuários operacionais.

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Dor | Contexto | Evidence |
|-----|----------|----------|
| **File copy não funciona** | Workspace do agente | Issue #2061 — frustração com operação básica não completando |
| **Dificuldade de preview** | Canais de mensagem | Issue #5493 — necessidade de visualizar documentos inline |
| **Contexto poluído** | Histórico de sessão | Feature #5586 (resolvida) — dados temporários poluindo histórico |
| **Mix de automação e chat** | Cron jobs | Issue #5513 (resolvida) — ruído de automação em conversas pessoais |

### Cenários de Uso Emergent

- **Agente de produtividade:** Usuários esperam que o agente execute operações filesystem simples (copy, move) de forma confiável.
- **Canal Feishu/WeChat:** Forte uso em contextos asiáticos; necessidade de compatibilidade de features com这些 canais.
- **Automação operacional:** Cron jobs para health checks, reports — demanda por roteamento configurável.
- **Terminal (TUI):** Usuários avançados sentem falta de preservação de input.

### Satisfação Geral
**Moderada positiva.** A alta taxa de PRs mergeados (9 em 24h) sugere resposta ativa da equipe. Issues antigas (#2061, #2078) indicam alguns gaps de priorização.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta/Estagnadas

| Issue | Idade | Situação | Link |
|-------|-------|----------|------|
| #2061 | ~6 meses | Bug aberto, sem assignee claro | [Link](https://github.com/HKUDS/nanobot/issues/2061) |
| #2078 | ~6 meses | PR de refatoração Zalo abandonado? | [Link](https://github.com/HKUDS/nanobot/pull/2078) |
| #5251 | ~1 mês | Enhancement, sem update recente | [Link](https://github.com/HKUDS/nanobot/issues/5251) |

### Recomendações

1. **Priorizar #2061:** Bug crítico de functionality básica (copy file) aberto há 6 meses afeta usabilidade real.
2. **Revisar #2078:** PR de integração Zalo parece estagnado; necessidade de decisão (merge/close/requester).
3. **Avaliar #5251 (MCP Apps):** Feature de extensão com demanda clara; considerar para próximo milestone.

---

## Métricas Resumidas (24h)

| Indicador | Valor |
|-----------|-------|
| Issues abertas/ativas | 4 |
| Issues fechadas | 2 |
| PRs abertos | 10 |
| PRs mergeados/fechados | 9 |
| Novas releases | 0 |
| Bugs P1 | 0 |
| Features merged | 3 |
| Taxa de fechamento (issues) | 33% |
| Taxa de merge (PRs) | 47% |

---

*Relatório gerado automaticamente com base em dados do GitHub. Para atualizações em tempo real, consulte [HKUDS/nanobot](https://github.com/HKUDS/nanobot).*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-09-02

---

## 1. Panorama do dia

O Hermes Agent mantém **atividade muito alta** com 50 issues e 50 PRs atualizados nas últimas 24h. Não houve lançamentos hoje. A base de código apresenta **instabilidade significativa em áreas críticas**: múltiplos bugs P0/P1 relacionados a sessões (corrupção de state.db, stalls de compressão, rejeição de RPCs), além de problemas crônicos em plataformas (Windows update, streaming Telegram/Matrix, autenticação OAuth). A equipe está ativamente trabalhando em correções de compressão e realinhamento de testes E2E, sinalizando foco em estabilidade antes de novos recursos.

---

## 2. Lançamentos

**Nenhum release detectado nas últimas 24h.**

O projeto está sem releases formais no período. Isso é consistente com o padrão de correções de emergência sendo merged diretamente no `main` enquanto a estabilização de testes E2E (#100722) não permite um novo tag confiável.

---

## 3. Progresso do Projeto

### PRs fechados/merged mais relevantes

| # | Título | Impacto |
|---|---|---|
| [#100720](https://github.com/NousResearch/hermes-agent/pull/100720) | fix: re-disable e2e | **Bloqueio de CI** — reabilita guard que impede PRs de avançar |
| [#100722](https://github.com/NousResearch/hermes-agent/pull/100722) | Revert "ci: re-enable the Desktop E2E lane" | **Bloqueio de CI** — reverte re-enable após 4/5 runs falharem em `main` |
| [#97383](https://github.com/NousResearch/hermes-agent/pull/97383) | feat(redaction): registry-fed exact-value redaction | **Segurança** — adiciona máscara customizável via padrão JSON do operador |
| [#100712](https://github.com/NousResearch/hermes-agent/pull/100712) | fix(kanban): coalesce terminal timeout alerts | **UX** — reduz ruído de notificações duplicadas |

### PRs abertos aguardando merge

| # | Título | Prioridade |
|---|---|---|
| [#100633](https://github.com/NousResearch/hermes-agent/pull/100633) | fix(compression): keep sessions usable when summary models stall | **P1** — fallback determinístico quando summary worker trava |
| [#100725](https://github.com/NousResearch/hermes-agent/pull/100725) | fix(classifier): LiteLLM 429 → upstream_rate_limit | **P1** — reclassifica 429 do LiteLLM corretamente |
| [#100711](https://github.com/NousResearch/hermes-agent/pull/100711) | feat(agent): per-model OpenRouter routing, service tiers | **P3** — roteamento avançado para OpenRouter |
| [#100714](https://github.com/NousResearch/hermes-agent/pull/100714) | chore(deps): bump tornado 6.5.7 → 6.5.8 | **Segurança** — patch de dependência |

**Avanço principal:** A correção de compressão (#100633) é crítica para desbloquear sessões travadas. O ciclo de re-desabilitar E2E (#100720/#100722) indica que a infraestrutura de testes ainda não está madura para merge contínuo.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários)

1. **[#66616](https://github.com/NousResearch/hermes-agent/issues/66616)** — Skills index is stale or degraded | **137 comentários**  
   *Problema:* Índice de skills 29.8h desatualizado (limite 26h). Afeta o Skills Hub em `/docs/skills`.  
   *Análise:* Bug de automação CI/workflow, não impacto direto no usuário final, mas sinaliza débt técnico na pipeline de deploy.

2. **[#88584](https://github.com/NousResearch/hermes-agent/issues/88584)** — Automated Nous integration blocked | **52 comentários**  
   *Problema:* Rotina de merge Nous→Enterkey com conflitos em `cron/jobs.py`.  
   *Análise:* Questão interna de integração, não afeta usuários externos.

3. **[#90837](https://github.com/NousResearch/hermes-agent/issues/90837)** — Recurring state.db corruption | **14 comentários**  
   *Problema:* 11 incidentes de corrupção de state.db entre 02-20/08, com forensics detalhadas.  
   *Análise:* **Bug grave** — correlação eliminada com causas externas. Aponta para bug no gateway v2026.8.3. Ativo e em investigação.

4. **[#84220](https://github.com/NousResearch/hermes-agent/issues/84220)** — Desktop Home → new chat binds files pane to previous project | **14 comentários** (CLOSED)  
   *Resolvido* — bug de escopo de sessão no desktop.

5. **[#63717](https://github.com/NousResearch/hermes-agent/issues/63717)** — Windows Hermes Desktop update failures | **10 comentários** (CLOSED)  
   *Resolvido* — 7 causas raiz correlacionadas em atualizações Windows.

---

## 5. Bugs e Estabilidade

### P0 — Crítico (impacto em produção, sem workarounds)

| # | Título | Plataforma | Status |
|---|---|---|---|
| [#100336](https://github.com/NousResearch/hermes-agent/issues/100336) | Prefix-cache invalidation on model switch — 2%→99% cache miss | Agent/MCP | OPEN |
| [#90837](https://github.com/NousResearch/hermes-agent/issues/90837) | state.db corruption — 11 incidentes em 18 dias | Gateway | OPEN |
| [#99692](https://github.com/NousResearch/hermes-agent/issues/99692) | Compression never completes → 10-min stall + lock leak | Desktop/Agent | OPEN |
| [#98552](https://github.com/NousResearch/hermes-agent/issues/98552) | Telegram streaming truncated mid-delivery (falso positivo content_delivered) | Telegram | OPEN |

### P1 — Alto (impacto significativo, workarounds parciais)

| # | Título | Área | Status |
|---|---|---|---|
| [#100639](https://github.com/NousResearch/hermes-agent/issues/100639) | Session-scoped RPCs rejeitadas como "not in memory" após restart | Desktop/Sessions | OPEN |
| [#100339](https://github.com/NousResearch/hermes-agent/issues/100339) | Anthropic OAuth credentials strand sibling profiles após rotação | Agent/Auth | OPEN |
| [#99879](https://github.com/NousResearch/hermes-agent/issues/99879) | Routines executam atrasadas após downtime sem status de "missed" | Cron/Gateway | OPEN |
| [#97994](https://github.com/NousResearch/hermes-agent/issues/97994) | Profile DBs sem backup de emergência na atualização | Desktop/Profiles | OPEN |

### P2 — Médio (impacto em fluxos específicos)

- **[#100715](https://github.com/NousResearch/hermes-agent/issues/100715)** — Kanban worker crash com skills builtins
- **[#73032](https://github.com/NousResearch/hermes-agent/issues/73032)** — Discord auto-thread duplica threads e replies
- **[#83617](https://github.com/NousResearch/hermes-agent/issues/83617)** — Tecla espaço ingerível no dialog de renomear sessão
- **[#96925](https://github.com/NousResearch/hermes-agent/issues/96925)** — Copilot duplica tool calls após v0.20.6
- **[#100708](https://github.com/NousResearch/hermes-agent/issues/100708)** — Matrix gateway não streaming replies (sem m.replace)
- **[#100705](https://github.com/NousResearch/hermes-agent/issues/100705)** (CLOSED) — hermes.tool.progress quebra clientes OpenAI-strict

**Tabela de severidade:**

```
P0: 4 issues abertas
P1: 4 issues abertas  
P2: 8+ issues abertas
```

**Sinal de alerta:** A concentração de bugs P0/P1 em sessões (#90837, #99692, #100639, #100336) indica deuda técnica significativa no gerenciamento de estado. A ausência de releases sugere que a equipe está priorizando estabilização.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features mais votadas/comentadas

| # | Título | Área | Votos |
|---|---|---|---|
| [#12020](https://github.com/NousResearch/hermes-agent/issues/12020) | Toggle para desabilitar hermes.tool.progress em streaming | Streaming/OpenAI compat | 1 👍 |
| [#53347](https://github.com/NousResearch/hermes-agent/issues/53347) | Allow context_length abaixo de 64K com warning | Agent/Config | 1 👍 |
| [#88881](https://github.com/NousResearch/hermes-agent/issues/88881) | Labels customizáveis para modelos (alias disambiguation) | Desktop/Config | 0 👍 |
| [#77349](https://github.com/NousResearch/hermes-agent/issues/77349) | Multi-Agent Visual Workflow Orchestration (DAG) | Cron/Kanban | 0 👍 |
| [#47063](https://github.com/NousResearch/hermes-agent/issues/47063) | Kanban WebUI — DAG mode visibility indicators | Kanban/WebUI | 2 👍 |
| [#43418](https://github.com/NousResearch/hermes-agent/issues/43418) | Support YAML Workflow Execution | Agent/Skills | 0 👍 |
| [#99828](https://github.com/NousResearch/hermes-agent/pull/99828) | busy-terminal skill (screensaver fake coding) | Skills | — |

### Análise de sinais de roadmap

1. **Otimização de contexto:** A demanda por context_length < 64K (#53347) sinaliza interesse em deployments leves — potencial direcionamento para tiers de hardware.

2. **Workflows avançados:** Múltiplas requests (#77349, #47063, #43418) pedem DAGs, orquestração visual e YAML — a equipe já trabalha no sistema de cron/kanban, indicando evolução incremental.

3. **Compatibilidade OpenAI:** O issue #12020 busca toggle para tool.progress — indica tensão entre features proprietárias e compatibilidade de API.

4. **Diversidade de plataformas:** Issues de Matrix (#100708), Telegram (#98552), Discord (#73032) mostram investimento contínuo em gateways multi-plataforma.

---

## 7. Resumo de Feedback dos Usuários

### Dores recorrentes identificadas

**1. Estabilidade de sessões (crítico)**
> "state.db corrupted 11 times in 18 days... every external cause eliminated"
> "Compression never completes on very large sessions → 10 min stall on every message"
> "Session-scoped RPCs rejected as 'not in memory' after clean restart"

**2. Experiência Desktop (Windows)**
> "Windows Hermes Desktop update failures — 7 correlated root causes"
> "Space key is swallowed in the session rename dialog"
> "Desktop sessions land in wrong project with remote gateway"

**3. Autenticação multi-profile**
> "Anthropic OAuth credentials strand sibling profiles after first rotation"
> "Custom endpoint model provider places API key inside config.yaml" (segurança)

**4. Streaming e compatibilidade**
> "Telegram streaming finalized fails — message truncated well under 4096 chars"
> "Matrix gateway does not stream replies — no m.replace edits emitted"

### Cenários de uso mencionados

- **Teams multi-profile:** 10 perfis rodando como agent team local (Windows)
- **Resource-constrained hardware:** MacBook 16GB com Ollama
- **Automação corporativa:** Cron jobs, kanban, routines
- **Integração Discord/Telegram/Matrix:** Comunidades open source e suporte

**Satisfação estimada:** **Média-baixa** — a frequência de bugs P0/P1 e a falta de releases recentes indicam frustração. Usuários estão engajados (137 comentários em issues de automação), mas há demanda clara por estabilidade.

---

## 8. Backlog que Merece Atenção

### Issues sem resposta significativa (>7 dias sem interação da equipe)

| # | Título | Criado | Comentários | Prioridade |
|---|---|---|---|---|
| [#57547](https://github.com/NousResearch/hermes-agent/issues/57547) | Custom endpoint API key inside config.yaml (security) | 2026-07-03 | 1 | P3 |
| [#68239](https://github.com/NousResearch/hermes-agent/issues/68239) | kimi-coding auth stamps wrong base_url | 2026-07-20 | 2 | P2 |
| [#73032](https://github.com/NousResearch/hermes-agent/issues/73032) | Discord duplicate threads | 2026-07-28 | 3 | P2 |
| [#94748](https://github.com/NousResearch/hermes-agent/issues/94748) | vision keyless relay 401s | 2026-08-25 | 1 | P3 |
| [#90165](https://github.com/NousResearch/hermes-agent/issues/90165) | Web UI session counts stale | 2026-08-19 | 1 | P3 |

### Issues P1/P0 sem solução

| # | Título | Criado | Atualizado | Estado |
|---|---|---|---|---|
| [#90837](https://github.com/NousResearch/hermes-agent/issues/90837) | state.db corruption | 2026-08-20 | 2026-09-01 | OPEN (14 comments) |
| [#99692](https://github.com/NousResearch/hermes-agent/issues/99692) | Compression stall | 2026-08-31 | 2026-09-01 | OPEN |
| [#100336](https://github.com/NousResearch/hermes-agent/issues/100336) | Prefix-cache invalidation | 2026-09-01 | 2026-09-01 | OPEN (4 comments) |

**Recomendação:** A issue #90837 (state.db corruption) é a mais crítica — 11 incidentes documentados com forensics completas merecem resposta oficial da equipe, mesmo que seja para confirmar recebimento e priorizar.

---

## Métricas Resumo do Dia

| Indicador | Valor |
|---|---|
| Issues ativas (24h) | 50 |
| Issues abertas | 44 |
| Issues fechadas | 6 |
| PRs atualizados (24h) | 50 |
| PRs abertos | 34 |
| PRs merged/fechados | 16 |
| Releases | 0 |
| Bugs P0 abertos | 4 |
| Bugs P1 abertos | 4 |
| Features mais comentadas | #66616 (137), #88584 (52), #90837 (14) |

---

*Relatório gerado automaticamente com base nos dados do GitHub de [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) para 2026-09-02.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-09-02

---

## 1. Panorama do Dia

O projeto PicoClaw apresenta **atividade moderada** em 02/09/2026, com 3 issues e 4 pull requests atualizados nas últimas 24h. A equipe está focada em **correções de estabilidade e usabilidade** nos canais Telegram e Feishu, além de um bug crítico relacionado ao MCP server. Nenhum lançamento foi registrado hoje. O volume de atividade indica manutenção ativa, com destaque para correções de bugs e pequenas melhorias incrementais.

---

## 2. Lançamentos

**Nenhum novo release nas últimas 24h.**

O último período não trouxe versões taggeadas. A ausência de releases pode indicar trabalho em branch (`nightly`), o que é comum em projetos com ciclos de desenvolvimento ágeis. Recomenda-se monitorar o repositório para próximos releases potencialmente direcionados à estabilidade dos canais.

---

## 3. Progresso do Projeto

### PR Merged/Fechada:

| # | Título | Status | Impacto |
|---|--------|--------|---------|
| [#3299](https://github.com/sipeed/picoclaw/pull/3299) | Add native Exa web search provider | **CLOSED (stale)** | Adiciona integração nativa com Exa como provedor de busca web (`tools.web` / `web_search`). Suporta filtros de período (`d/w/m/y`) e autenticação via `X-Api-Key`. Este PR foi fechado com status *stale*, indicando possivelmente necessidade de rebase ou resolução de conflitos pendentes. |

### PRs Abertas em Revisão:

| # | Título | Área | Prioridade |
|---|--------|------|------------|
| [#3358](https://github.com/sipeed/picoclaw/pull/3358) | fix(agent): thread responses to originating question | Agente | Alta |
| [#3357](https://github.com/sipeed/picoclaw/pull/3357) | fix(telegram): treat replies as implicit mentions | Telegram | Alta |
| [#3356](https://github.com/sipeed/picoclaw/pull/3356) | fix(telegram): re-attach quoted documents | Telegram | Média |

**Análise:** As 3 PRs abertas são correções de UX/funcionalidade no canal Telegram, todas do mesmo autor (`hugodeco`). Juntas,，她们 abordam problemas de continuidade conversacional que afetam diretamente a experiência do usuário em grupos. A PR #3358 é particularmente relevante por corrigir o desancoramento de respostas em grupos, um problema que prejudica a legibilidade.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento:

| # | Título | Comentários | 👍 | Tendência |
|---|--------|-------------|----|-----------|
| [#3269](https://github.com/sipeed/picoclaw/issues/3269) | [BUG] MCP server failure → agent loop hang | **8** | 1 | Estável/ativo |
| [#3345](https://github.com/sipeed/picoclaw/issues/3345) | Proposal: lightweight worker mode | **1** | 0 | Novo |
| [#3355](https://github.com/sipeed/picoclaw/issues/3355) | [BUG] Feishu config error | **0** | 0 | Novo |

**Análise:** A issue **#3269** domina o engajamento com 8 comentários, refletindo preocupação da comunidade com **estabilidade em cenários de falha de conexão MCP**. Este é o principal ponto de dor, especialmente para deployments em produção. A proposta **#3345** (worker mode para edge computing) demonstra interesse em expandir casos de uso para dispositivos de baixo custo — um alinhamento estratégico com o hardware suportado.

---

## 5. Bugs e Estabilidade

### Bug Crítico:
| # | Severidade | Descrição |
|---|------------|-----------|
| [#3269](https://github.com/sipeed/picoclaw/issues/3269) | **🔴 Alta** | Falha de conexão MCP causa *hang* no agent loop, travando a interface de chat. Reportado em ambiente `nightly` com Go 1.25.11 e modelo Qwen3. Atualizado em 2026-09-01 com 8 comentários em análise. |

### Bugs Moderados:
| # | Severidade | Descrição |
|---|------------|-----------|
| [#3355](https://github.com/sipeed/picoclaw/issues/3355) | 🟡 Média | Erro de configuração Feishu: campo desconhecido `channel_list.feishu.app_id`. Configuração parece não compatibilizar com versão nightly atual (`go1.25.13`). |

**Observação:** Todos os bugs estão com flag `[stale]` ou foram atualizados recentemente, indicando que a equipe está ciente e potencialmente working on fixes.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Feature Proposta:
| # | Descrição | Viabilidade |
|---|-----------|-------------|
| [#3345](https://github.com/sipeed/picoclaw/issues/3345) | **Worker mode leve para edge computing** — suportar dispositivos com 10–20 MB disponíveis (RISC-V/ARM/MIPS, Raspberry Pi, Android antigo). Sugere arquitetura onde um PC mais forte coordena múltiplos workers distribuídos. | Estratégica. Alinha-se com missão do projeto (dispositivos low-cost). Necessita avaliação de arquitetura e priorização. |

**Sinais de Roadmap:**
- Ênfase em **estabilidade de canais** (Telegram, Feishu) indica foco em polish antes de features grandes.
- Manutenção ativa do suporte a múltiplos canais de comunicação.
- Integração com provedores de busca (Exa PR #3299) sugere expansão de capacidades de tooling.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas:
1. **Instabilidade em falhas de rede** — O bug de hang do agent loop (#3269) é recorrente e afeta usuários em produção.
2. **Problemas de configuração** — Usuários enfrentam erros com campos desconhecidos em `config.json`, especialmente em integrações com canais como Feishu.
3. **UX em grupos** — Respostas desconectadas da mensagem original e falta de tratamento de replies dificultam conversas em ambientes multi-usuário.

### Cenários de Uso Emergentes:
- **Edge computing distribuído** — desirejo crescente de usar PicoClaw em dispositivos heterogêneos de baixa potência, coordenados por uma máquina mais forte.
- **Integração empresarial** — Configuração de canais como Feishu indica adoção em contextos corporativos.

### Satisfação/Insatisfação:
- **Satisfação:** Atividade constante de PRs (mesmo em fim de semana/próximo Feriado) indica contribuição ativa.
- **Insatisfação:** Bugs com 8+ comentários sem resolution prolongada geram frustração. A presença de issues *stale* pode sinalizar gargalos de review.

---

## 8. Backlog que Merece Atenção

| # | Título | Idade | Motivo de Atenção |
|---|--------|-------|-------------------|
| [#3269](https://github.com/sipeed/picoclaw/issues/3269) | BUG: MCP hang | ~43 dias | Bug crítico com alto impacto em produção. 8 comentários indicam complexidade, mas precisa de timeline de resolução. |
| [#3299](https://github.com/sipeed/picoclaw/pull/3299) | Exa web search provider | ~37 dias | Feature fechada como *stale* — investimento pode ser perdido se não for revisado. |
| [#3345](https://github.com/sipeed/picoclaw/issues/3345) | Worker mode proposal | ~8 dias | Proposta estratégica que ainda não recebeu resposta da maintainers. Silêncio pode desmotivar contributors. |

**Recomendação:** Priorizar review da PR #3299 (Exa) e engajar na issue #3345 para sinalizar à comunidade que a proposta está sendo considerada.

---

## Métricas Resumidas (24h)

| Indicador | Valor |
|-----------|-------|
| Issues abertas/ativas | 3 |
| PRs abertas | 3 |
| PRs fechadas/merged | 1 |
| Releases | 0 |
| Bug crítico em aberto | 1 |
| Proposta estratégica sem resposta | 1 |
| PRs aguardando review | 3 |

---

*Relatório gerado automaticamente com base em dados do GitHub. Última atualização: 2026-09-02.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-09-02

## 1. Panorama do Dia

O IronClaw apresenta **alta atividade de desenvolvimento** nesta data, com 16 issues e 23 PRs atualizados nas últimas 24h. A equipe mantém foco em **consolidação do design system** (Epic #7781) e **qualidade** (Epic #8026 de dogfooding), com 9 PRs merged/fechados. Não há releases novas, indicando uma fase de preparação para a v1.4.1. A saúde geral do projeto é sólida, com melhorias de performance e UX sendo mergeadas consistentemente, embora bugs de escalabilidade (MCP catalog, Docker sandbox) ainda precisem de atenção.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto encontra-se em período pré-release, com trabalho ativo nas fases 2–3 do design system. A equipe está consolidação funcionalidades antes de um próximo tagged release.

---

## 3. Progresso do Projeto

### PRs Merged/Closed Hoje

| PR | Título | Impacto |
|----|--------|---------|
| [#7997](https://github.com/nearai/ironclaw/pull/7997) | feat(webui): show model capability icons across Inference | **Alto** — Exibe ícones de capacidades de modelos (texto, imagem input/output) nas superfícies de seleção. |
| [#8013](https://github.com/nearai/ironclaw/pull/8013) | ci: parallelize affected crate tests with nextest | **Alto** — Paraleliza testes de crates afetados com 4 processos, melhorando tempo de CI. |
| [#7998](https://github.com/nearai/ironclaw/pull/7998) | feat(llm): preserve NEAR AI model capabilities through discovery | **Alto** — Preserva capacidades input/output dos modelos NEAR AI via `list_model_catalog()`. |
| [#7996](https://github.com/nearai/ironclaw/pull/7996) | perf(github): compact repository list responses | **Médio** — Reduz payload de `github.list_repos` de 519KB para ~20KB (81→6 campos). Resolve #7986. |
| [#8028](https://github.com/nearai/ironclaw/pull/8028) | refactor(agent-loop): align state and stage ownership | **Médio** — Reorganiza módulos de checkpoint state em módulos coesos. |
| [#8027](https://github.com/nearai/ironclaw/pull/8027) | fix(live-qa): find Slack run by message identity | **Médio** — Corrigiu 33 falhas consecutivas no teste canary `qa_7d_slack_bug_message_trigger`. |
| [#8014](https://github.com/nearai/ironclaw/pull/8014) | fix(slack): preserve explicit mentions across callback dedup | **Médio** — Preserva menções explícitas em threads com callbacks duplicados. |
| [#7977](https://github.com/nearai/ironclaw/pull/7977) | fix(loop): terminate on dominant repeated output, cap interactive wall clock | **Alto** — Adiciona terminador para saída repetida dominante; evita runs de 70+ minutos. |
| [#7971](https://github.com/nearai/ironclaw/pull/7971) | feat(webui): render model capability tags | **Médio** — Tags de capacidade nos seletores de modelo. |

### Avanços Principais
- **UX/Design System**: Componentes compartilhados migrados para Settings, SearchField, Automations e Extension Configure
- **Performance**: Redução drástica de payloads em GitHub API e tool_search
- **Estabilidade CI**: nextest para parallelização de testes; correção do canary Slack

---

## 4. Temas Quentes da Comunidade

### Issues com Mais Atividade

| Issue | Título | Comentários | Análise |
|-------|--------|-------------|---------|
| [#7781](https://github.com/nearai/ironclaw/issues/7781) | Epic: Design System Phases 2–3 | 2 | **Epic central** consolidando DESIGN.md governance + theme reskin. Substitui #7733. |
| [#8025](https://github.com/nearai/ironclaw/issues/8025) | Bug: special characters in input | 1 | Usuários reportam stripping de caracteres especiais; possivelmente ligado a mudanças de encoding. |
| [#8012](https://github.com/nearai/ironclaw/issues/8012) | 47k-tool MCP catalog ingests but unreachable | 0 | **Problema de escalabilidade crítico**: catalogs >2k tools falham em `tool_search`. |

### PRs com Maior Complexidade (Size XL)

| PR | Título | Risk | Status |
|----|--------|------|--------|
| [#8010](https://github.com/nearai/ironclaw/pull/8010) | feat: session-event transport unification + web-app notifications | Medium | Open |
| [#8006](https://github.com/nearai/ironclaw/pull/8006) | feat(channels): durable progressive replies + Slack Agent UI | Low | Open |
| [#7984](https://github.com/nearai/ironclaw/pull/7984) | fix(tools): size tool_search replies to first-look envelope | Low | Open |
| [#7831](https://github.com/nearai/ironclaw/pull/7831) | ci(webui): publish Storybook to Chromatic | Medium | Open |

**Análise**: A comunidade demonstra forte interesse em **design system consistente** e **melhorias de canais** (Slack). O bug de MCP catalog (#8012) gera preocupação por impactar cenários enterprise.

---

## 5. Bugs e Estabilidade

### Bugs Abertos por Severidade

| Severidade | Issue | Título | Área |
|------------|-------|--------|------|
| **P1** | [#8012](https://github.com/nearai/ironclaw/issues/8012) | 47k-tool MCP catalog: tools unreachable via tool_search | tool |
| **P1** | [#8015](https://github.com/nearai/ironclaw/issues/8015) | Rootless Docker sandbox workspace not writable (UID/GID mismatch) | agent/sandbox |
| **P2** | [#8016](https://github.com/nearai/ironclaw/issues/8016) | CI: lock-free turn-state root test intermittent timeout | ci |
| **P2** | [#8025](https://github.com/nearai/ironclaw/issues/8025) | Special characters stripped from input | webui |
| **P2** | [#7986](https://github.com/nearai/ironclaw/issues/7986) | github.list_repos ships 81 raw fields (519KB) | **RESOLVIDO** via #7996 |

### Bugs Resolvidos Hoje

| Issue | Título | PR |
|-------|--------|-----|
| [#7986](https://github.com/nearai/ironclaw/issues/7986) | Performance: 519KB para listar 98 repos | [#7996](https://github.com/nearai/ironclaw/pull/7996) ✅ |
| [#7892](https://github.com/nearai/ironclaw/issues/7892) | Deferred tool found 15x, never invoked | Fix em [#7977](https://github.com/nearai/ironclaw/pull/7977) ✅ |
| #8027 (Slack run identity bug) | 33 falhas canary consecutivas | [#8027](https://github.com/nearai/ironclaw/pull/8027) ✅ |

**Saúde de Bugs**: 4 bugs P1/P2 abertos. 2 bugs críticos resolvidos nas últimas 24h. Taxa de resolução elevada.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| Issue | Título | Escopo | Sinal de Roadmap |
|-------|--------|--------|------------------|
| [#8019](https://github.com/nearai/ironclaw/issues/8019) | Migrate Automations status banners to InlineNotice | webui | **Design System v3 (M3)** |
| [#8018](https://github.com/nearai/ironclaw/issues/8018) | Replace native SettingsField with shared Input/Select | webui | **Design System v3 (M3)** |
| [#8017](https://github.com/nearai/ironclaw/issues/8017) | Adopt shared form/feedback in Extension Configure | webui | **Design System v3 (M3)** |
| [#8020](https://github.com/nearai/ironclaw/issues/8020) | Use shared SearchField for Workspace/Logs | webui | **Design System v3 (M3)** |
| [#8006](https://github.com/nearai/ironclaw/pull/8006) | Durable progressive replies + native Slack Agent UI | channels | **Slack Integration v2** |

### PRs Abertos Indicando Prioridades

| PR | Título | Provável Release |
|----|--------|------------------|
| [#8010](https://github.com/nearai/ironclaw/pull/8010) | Session-event transport + run notifications | v1.4.1 |
| [#7994](https://github.com/nearai/ironclaw/pull/7994) | DESIGN.md governance + Storybook guidelines | **Design System v3** |
| [#7831](https://github.com/nearai/ironclaw/pull/7831) | Publish Storybook to Chromatic | **Design System v3** |

**Sinais de Roadmap**:
- **Design System M3 Expressive** em ritmo acelerado (componentes compartilhados sendo adoptados massivamente)
- **Slack Agent UI** com progressive replies indicando evolução de canais
- **Testes paralelizados** (nextest) mejorando DX

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Dor | Frequência | Impacto | Issue |
|------|------------|---------|-------|
| **Payloads GitHub excessivos** | Relatado em produção | Alto — 519KB para 98 repos | [#7986](https://github.com/nearai/ironclaw/issues/7986) ✅ |
| **Runs intermináveis** (70min, 593 tool calls) | 1 caso production | Crítico | [#7892](https://github.com/nearai/ironclaw/issues/7892) ✅ |
| **Special characters em inputs** | 1 reporte | Médio | [#8025](https://github.com/nearai/ironclaw/issues/8025) |
| **Docker sandbox não gravável** (rootless) | 1 reporte QA | Médio | [#8015](https://github.com/nearai/ironclaw/issues/8015) |
| **MCP catalogs grandes não funcionam** | Enterprise | Crítico | [#8012](https://github.com/nearai/ironclaw/issues/8012) |

### Cenários de Uso Observados
- **Dogfooding interno** ativo (Epic #8026 em andamento)
- **Integração Slack** com 33 runs canary consecutivas monitorando estabilidade
- **Enterprise scenarios** com catalogs de 47k+ tools sendo testados

### Tendência de Satisfação
**Positiva** — A equipe demonstra resposta rápida a bugs críticos (Slack canary resolvido em 24h, payload GitHub otimizado). Issues de UX sendo addressed via design system unificado.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta > 3 dias

| Issue | Título | Idade | Prioridade |
|-------|--------|-------|------------|
| [#8012](https://github.com/nearai/ironclaw/issues/8012) | 47k-tool MCP catalog ingests but unreachable | 1 dia | **P1** — Escalabilidade crítica |
| [#8015](https://github.com/nearai/ironclaw/issues/8015) | Docker sandbox workspace not writable | 1 dia | **P1** — QA blocker |
| [#8016](https://github.com/nearai/ironclaw/issues/8016) | CI intermittent timeout | 1 dia | **P2** — Flaky test |
| [#8025](https://github.com/nearai/ironclaw/issues/8025) | Special characters bug | <1 dia | **P2** — Regression |
| [#7890](https://github.com/nearai/ironclaw/issues/7890) | Retire app.css Tailwind compat layer | 8 dias | **Média** — Design System |

### PRs Bloqueados ou Aguardando Review

| PR | Título | Bloqueio |
|----|--------|----------|
| [#8010](https://github.com/nearai/ironclaw/pull/8010) | Session-event transport unification | Review pendente |
| [#8006](https://github.com/nearai/ironclaw/pull/8006) | Slack Agent UI + progressive replies | Review pendente |
| [#7984](https://github.com/nearai/ironclaw/pull/7984) | Size tool_search replies | Review pendente |

### Recomendação de Prioridade

1. **#8012** (MCP catalog scalability) — Impacta diretamente usuários enterprise
2. **#8015** (Docker sandbox) — Blocker para QA local
3. **#8025** (Special characters) — Possível regression da última release

---

## Métricas Resumidas (2026-09-02)

| Métrica | Valor |
|---------|-------|
| Issues ativas | 11 |
| Issues fechadas (24h) | 5 |
| PRs abertos | 14 |
| PRs merged/closed (24h) | 9 |
| Bugs P1/P2 abertos | 5 |
| Bugs resolvidos (24h) | 3 |
| Novas releases | 0 |
| Engajamento (comentários) | Moderado — Epic Design System (#7781) lidera |

**Saúde Geral**: 🟢 **Sólida** — Atividade elevada, bugs críticos sendo resolvidos rapidamente, design system progredindo para M3. Atenção necessária em escalabilidade MCP e Docker sandbox.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do Projeto CoPaw (QwenPaw) — 2026-09-02

---

## 1. Panorama do Dia

O projeto QwenPaw manteve alto nível de atividade nas últimas 24h, com 31 issues e 33 PRs atualizados. A release **v2.2.0-beta.6** foi publicada com correções críticas de estabilidade, incluindo correção para o crash fatal no rebuild de índice de memória (#7446) e aprimoramentos nos testes de console (+617 casos). A comunidade reportou regressões significativas na série beta 2.2, particularmente relacionadas a perda de contexto em conversas longas e problemas de segurança no bypass de guardas. O time respondeu rapidamente com PRs de segurança merges (#7472) e correções de memória (#7468).

---

## 2. Lançamentos

### v2.2.0-beta.6
**Data:** 2026-09-01

**Mudanças registradas:**
- **fix(desktop):** Bundle ReMe entry-point plugins ([#7458](https://github.com/agentscope-ai/QwenPaw/pull/7458))
- **test(console):** Expansão de testes unitários — +617 casos, +10.61pp de cobertura de statements ([#7452](https://github.com/agentscope-ai/QwenPaw/pull/7452))

**Nota:** Release verificada automaticamente via workflow de release duty ([#7475](https://github.com/agentscope-ai/QwenPaw/issues/7475))

**Breaking Changes:** Nenhuma documentada nesta release.

---

## 3. Progresso do Projeto

### PRs Merge/Closed Importantes (últimas 24h)

| PR | Descrição | Impacto |
|----|-----------|---------|
| [#7472](https://github.com/agentscope-ai/QwenPaw/pull/7472) | **fix(governance):** Previne bypass de shell line-continuation em checks de路径 sensível | **🔴 Segurança** — Corrige brecha que permitia evadir guardas de segurança |
| [#7468](https://github.com/agentscope-ai/QwenPaw/pull/7468) | **fix(memory):** Inicia ReMe antes da configuração de modelo | **🟡 Estabilidade** — Resolve ProviderError em instalações fresh |
| [#7453](https://github.com/agentscope-ai/QwenPaw/pull/7453) | **fix(pack):** Bundle reme-ai Python core no PyInstaller | **🔴 Crítico** — Corrige crash de rebuild de índice (#7446) |
| [#7466](https://github.com/agentscope-ai/QwenPaw/pull/7466) | **fix(console):** Link Daily Paper para docs do QwenPaw | **🟢 UX** — Melhora consistência de documentação |
| [#7416](https://github.com/agentscope-ai/QwenPaw/pull/7416) | **feat(console):** Expõe toggle card_auto_layout para DingTalk | **🟢 Feature** — Expõe opção existente na UI |
| [#7432](https://github.com/agentscope-ai/QwenPaw/pull/7432) | **fix(config):** Expande ~ em dirs do workspace para agregação | **🟡 Backend** — Corrige path resolution |
| [#7439](https://github.com/agentscope-ai/QwenPaw/pull/7439) | **fix:** Screenshots salvos no diretório do projeto ativo | **🟢 UX** — Corrige caminho de output |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| Issue | Título | Comentários | Severidade |
|-------|--------|-------------|------------|
| [#7420](https://github.com/agentscope-ai/QwenPaw/issues/7420) | Tool results lost + doom-loop protection trigger | 8 | 🔴 Alta |
| [#7450](https://github.com/agentscope-ai/QwenPaw/issues/7450) | Sub-agent progress only queried on explicit user request | 5 | 🟡 Média |
| [#7417](https://github.com/agentscope-ai/QwenPaw/issues/7417) | Console stream mostra chunks duplicados | 5 | 🟡 Média |
| [#7443](https://github.com/agentscope-ai/QwenPaw/issues/7443) | Dangerous instructions evading guard | 4 | 🔴 Crítica |

**Análise:**
- **Segurança (#7443, #7472):** Usuários reportam que instruções perigosas conseguem evadir guardas via line-continuation — o PR #7472 já corrigiu essa brecha.
- **Agentes multi-subordinados (#7450):** Padrão de uso com "主agent+多子agent" revela que o agente principal só verifica progresso quando o usuário pergunta explicitamente, causando perceção de estagnação.
- **Perda de contexto (#7420, #7447):** Regressão crítica na 2.2.0-beta com perda de contexto antigo em conversas longas (160+ páginas), paralisando tarefas em andamento.

---

## 5. Bugs e Estabilidade

### 🔴 Críticos (，需 atenção imediata)

| Issue | Descrição | Status |
|-------|-----------|--------|
| [#7446](https://github.com/agentscope-ai/QwenPaw/issues/7446) | Embedding index rebuild falha com 500 — ReMe instance is None | **CLOSED** ✅ Corrigido em #7453 |
| [#7474](https://github.com/agentscope-ai/QwenPaw/issues/7474) | Custom provider falha ao carregar após merge de #7337 (max_tokens → max_output_length) | OPEN |
| [#7447](https://github.com/agentscope-ai/QwenPaw/issues/7447) | Contexto antigo perdido em conversas longas (regressão 2.2.0-beta) | OPEN |

### 🟡 Média Severidade

| Issue | Descrição | Status |
|-------|-----------|--------|
| [#7469](https://github.com/agentscope-ai/QwenPaw/issues/7469) | ReMe embedding job falha silenciosamente com Dependency accessed before start() | OPEN |
| [#7445](https://github.com/agentscope-ai/QwenPaw/issues/7445) | QwenPaw Hub falha ao conectar API local em alguns casos | OPEN |
| [#7467](https://github.com/agentscope-ai/QwenPaw/issues/7467) | loop.rubric força confirmação turn e esconde resposta no console | OPEN |

### 🟢 UI/cosméticos

| Issue | Descrição | Status |
|-------|-----------|--------|
| [#7471](https://github.com/agentscope-ai/QwenPaw/issues/7471) | MCP clients page renderiza fundo branco em dark mode | OPEN — PR #7473 em review |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Abertas com Alto Potencial

| PR/Issue | Feature | Subtipo | Status |
|----------|---------|---------|--------|
| [#6960](https://github.com/agentscope-ai/QwenPaw/pull/6960) | Import flow de outros agentes (Codex, Qoder) | Import/Export | OPEN |
| [#6399](https://github.com/agentscope-ai/QwenPaw/pull/6399) | UI de configuração de Reranker em ReMeLightMemoryCard | Memory | OPEN (Under Review) |
| [#5992](https://github.com/agentscope-ai/QwenPaw/pull/5992) | Per-session model overrides | Model Management | OPEN (Under Review) |
| [#7461](https://github.com/agentscope-ai/QwenPaw/issues/7461) | Support in-round queued events — injetar mensagens durante tool-execution | Agent UX | OPEN |
| [#7378](https://github.com/agentscope-ai/QwenPaw/pull/7378) | QwenPaw Mobile (Expo/React Native) | Platform | DRAFT |
| [#7163](https://github.com/agentscope-ai/QwenPaw/pull/7163) | Refine session thinking e model management | UX | OPEN |

### Sinais de Demanda Repetida
- **Custom providers desabilitáveis (#7455):** Usuários querem controle sobre provedores cloud bundled
- **Sidebar pinned icons (#7125):** UX quando sidebar colapsada — ícones de sessão fixos no topo
- **Auto Fin memory (#7441):** Scheduled long-term memory source em desenvolvimento

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais Identificadas

1. **Regressões na 2.2.0-beta:**
   - Perda de contexto em sessões longas (crítico para fluxos de trabalho com documentos extensos)
   - Doom-loop protection triggerado incorretamente (#7420)
   - Custom providers quebrados após migração de config

2. **UX de Agentes Multi-Subordinados:**
   - Baixa transparência no progresso de sub-tarefas
   - Usuários precisam perguntar explicitamente "como está o progresso?"
   - Modelo mental de "主agent+多子agent" funciona, mas comunicação interna é opaca

3. **Estabilidade de Desktop:**
   - Problemas com workspace bootstrap no Windows ACP agent (#7401)
   - Embedding/rebuild index crashando em desktop (já corrigido em #7453)

4. **Integração e Conectividade:**
   - Hub falhando em conectar APIs locais (#7445)
   - Custom provider loading após updates de configuração

### Cenários de Uso Reportados
- **Processamento de documentos longos:** 160+ páginas Word com OCR e formatação
- **Assistente de código:** Multi-agent com tarefas delegadas
- **Integração DingTalk:** Necessidade de cards widescreen (feature exposta em #7416)

---

## 8. Backlog que Merece Atenção

### Issues sem Resposta / Aguardando Triagem

| Issue | Idade | Descrição | Prioridade |
|-------|-------|-----------|------------|
| [#7379](https://github.com/agentscope-ai/QwenPaw/issues/7379) | 4 dias | PDF com >10 caracteres chineses no nome falha | 🟡 Média |
| [#7404](https://github.com/agentscope-ai/QwenPaw/issues/7404) | 3 dias | card_auto_layout não exposto na UI (já resolvido em #7416) | ✅ Closed |
| [#7428](https://github.com/agentscope-ai/QwenPaw/issues/7428) | 2 dias | GPL Pylint bundled desnecessariamente | 🟢 Baixa |
| [#7459](https://github.com/agentscope-ai/QwenPaw/issues/7459) | 1 dia | llama.cpp não carrega Spark-X2.5 GGUF | 🟡 Média |
| [#7476](https://github.com/agentscope-ai/QwenPaw/issues/7476) | 1 dia | Cron duplicado trigger causa backup duplo | 🟡 Média |

### PRs Estagnados (>7 dias sem движение)

| PR | Idade | Descrição | Status |
|----|-------|-----------|--------|
| [#7378](https://github.com/agentscope-ai/QwenPaw/pull/7378) | 5 dias | QwenPaw Mobile draft | DRAFT |
| [#7163](https://github.com/agentscope-ai/QwenPaw/pull/7163) | 13 dias | Session thinking refinement | OPEN |
| [#7348](https://github.com/agentscope-ai/QwenPaw/pull/7348) | 6 dias | Release notes v2.2.0 | OPEN |

---

## Indicadores de Saúde do Projeto

| Métrica | Valor | Tendência |
|---------|-------|-----------|
| Issues ativas (24h) | 17 | Neutra |
| PRs abertos (24h) | 18 | Alta |
| Taxa de fechamento (issues) | ~45% | Positiva |
| PRs merged (24h) | 15 | Alta |
| Releases (7 dias) | 1 (beta) | Em ciclo |

**Veredicto:** Projeto em fase ativa de desenvolvimento com ciclo de beta acelerado. Atenção necessária para regressões de estabilidade na 2.2.0-beta. Foco em segurança (guard bypass corrigido) e UX multi-agent.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-09-02

---

## 1. Panorama do Dia

O projeto ZeroClaw demonstra **alta atividade** nas últimas 24 horas, com 37 issues e 50 PRs atualizados. Não houve lançamentos de novas versões. A comunidade está profundamente envolvida em debates arquiteturais, com pelo menos 13 RFCs em discussão ativa — many addressing core system design decisions around session management, WASM plugin architecture, memory lifecycle, and security boundaries. Três bugs de alta severidade (p1) continuam em acompanhamento, incluindo uma vulnerabilidade de segurança no delegate tool e um bug crítico de configuração que pode sobrescrever arquivos do operador. A qualidade do código e a segurança aparecem como prioridades claras, com PRs de hardening e gates de CI em progresso.

---

## 2. Lançamentos

**Nenhum release nas últimas 24h.**

O projeto não publicou novas versões desde o período analisado. Para informações sobre lançamentos anteriores, recomenda-se consultar a aba [Releases do repositório](https://github.com/zeroclaw-labs/zeroclaw/releases).

---

## 3. Progresso do Projeto

### PRs Fechados/Merged (3)

| # | Título | Tipo | Tamanho | Link |
|---|--------|------|---------|------|
| #10392 | fix(zerocode): keep SOP navigation responsive during refresh | bug | L | [PR #10392](https://github.com/zeroclaw-labs/zeroclaw/pull/10392) |
| #10466 | fix(zerocode): reconcile lost prompt completion | bug | M | [PR #10466](https://github.com/zeroclaw-labs/zeroclaw/pull/10466) |
| #10448 | fix(providers): add compatible tool-result image policy | bug | M | [PR #10448](https://github.com/zeroclaw-labs/zeroclaw/pull/10448) |

**Destaques:**
- **PR #10392**: Resolve problema de responsividade na navegação de SOPs durante refresh, melhorando a experiência do ZeroCode.
- **PR #10466**: Corrige estado "Processing" persistente em panes do ZeroCode quando notificações terminais eram perdidas.
- **PR #10448**: Adiciona política de imagens em resultados de tools para providers compatíveis com OpenAI, resolvendo problemas de compatibilidade com gateways Anthropic.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (por comentários)

| # | Título | Comentários | Área | Link |
|---|--------|-------------|------|------|
| #9487 | RFC: Runtime-owned conversation sessions and transport surface adapters | 31 | Architecture | [Issue #9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) |
| #9488 | RFC: Unified file and attachment architecture | 25 | Architecture | [Issue #9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) |
| #6850 | RFC: Decouple memory lifecycle policy from storage backends | 24 | Memory | [Issue #6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) |
| #6996 | RFC: Granular sandbox policy — filesystem and network restrictions | 19 | Security | [Issue #6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) |
| #9103 | RFC: separate authoritative memory storage from optional enrichment | 17 | Architecture | [Issue #9103](https://github.com/zeroclaw-labs/zeroclaw/issues/9103) |

**Análise:** O engajamento da comunidade está fortemente concentrado em **RFCs arquiteturais**. Os cinco temas mais comentados tratam de design de sistema fundamental:
- **Sessões e transporte**: Refatoração profunda de como sessões de conversa são gerenciadas pelo runtime
- **Arquitetura de arquivos**: Unificação do tratamento de anexos e arquivos em superfícies de conversação
- **Política de memória**: Separação entre storage backends e lifecycle policy
- **Sandbox granular**: Restrições de filesystem e network com suporte a Bubblewrap, Landlock, Seatbelt
- **Armazenamento autoritativo vs. enriquecimento**: Separação de concerns entre storage e conectores

Estes RFCs indicam que a comunidade está madura e focada em escalabilidade e segurança de longo prazo, não apenas em features incrementais.

---

## 5. Bugs e Estabilidade

### Bugs P1 (Alta Severidade — Requerem Atenção Imediata)

| # | Título | Status | Severidade | Link |
|---|--------|--------|------------|------|
| #9779 | [Bug]: SOPs silently never load — sops_dir documented default not honoured | ACCEPTED | S0/S1 | [Issue #9779](https://github.com/zeroclaw-labs/zeroclaw/issues/9779) |
| #9395 | [Bug]: plugin wasi:http egress has no destination policy | IN-PROGRESS | S0 | [Issue #9395](https://github.com/zeroclaw-labs/zeroclaw/issues/9395) |
| #8279 | [Bug]: delegate bypasses parent's tool allowlist | ACCEPTED | S0 | [Issue #8279](https://github.com/zeroclaw-labs/zeroclaw/issues/8279) |
| #10495 | [Bug]: Config::save() can replace operator's populated config.toml | ACCEPTED | S0 | [Issue #10495](https://github.com/zeroclaw-labs/zeroclaw/issues/10495) |
| #10063 | [Bug]: Anthropic-backed compatible gateways reject image_url blocks | IN-PROGRESS | S1 | [Issue #10063](https://github.com/zeroclaw-labs/zeroclaw/issues/10063) |
| #10523 | [Bug]: Bootstrap file truncation at 6000 chars invisible to operator | OPEN | S2 | [Issue #10523](https://github.com/zeroclaw-labs/zeroclaw/issues/10523) |

**Bugs Críticos em Foco:**

1. **#9779 — SOPs não carregam silenciosamente**: Bug de configuração onde o daemon ignora o default documentado de `sops_dir`, fazendo SOPs nunca carregarem sem erro/warning/log. Afetacron e channels.

2. **#9395 — plugin wasi:http sem política de destino**: Vulnerabilidade de segurança identificada em auditoria. O plugin permite egress HTTP sem restrição de destino.

3. **#8279 — Delegate ignora allowlist de tools do parent**: Vulnerabilidade de segurança onde sub-agentes podem invocar tools que a política do parent excluiu.

4. **#10495 — Config::save() sobrescreve config.toml**: Bug sério onde `save()` pode substituir um config.toml de 109KB por arquivo de 702 bytes, perdendo configuração de 25 agents.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em Desenvolvimento Ativo

| # | Título | Tipo | Prioridade | Link |
|---|--------|------|------------|------|
| #9739 | multi-session panes with agent sidebar and quickstart | enhancement | — | [PR #9739](https://github.com/zeroclaw-labs/zeroclaw/pull/9739) |
| #9809 | support multiple models per provider profile | enhancement | — | [PR #9809](https://github.com/zeroclaw-labs/zeroclaw/pull/9809) |
| #10220 | add deterministic pre_hook precondition gate for cron | enhancement | p2 | [PR #10220](https://github.com/zeroclaw-labs/zeroclaw/pull/10220) |
| #9894 | implement add_reaction and remove_reaction (WhatsApp) | enhancement | p3 | [PR #9894](https://github.com/zeroclaw-labs/zeroclaw/pull/9894) |
| #8850 | Move optional channels & tools to runtime plugins | enhancement | p2 | [Issue #8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850) |

### RFCs com Potencial para Próximas Versões

| # | Título | Área | Risco | Link |
|---|--------|------|-------|------|
| #10076 | Composable WASM plugin runtime architecture | Architecture | HIGH | [Issue #10076](https://github.com/zeroclaw-labs/zeroclaw/issues/10076) |
| #6909 | Computer-use support for desktop screen interaction | Desktop | HIGH | [Issue #6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) |
| #9330 | AI-assisted PR pre-review and re-review | CI | HIGH | [Issue #9330](https://github.com/zeroclaw-labs/zeroclaw/issues/9330) |
| #10050 | Verbatim channel send over gateway without agent turn | Gateway | HIGH | [Issue #10050](https://github.com/zeroclaw-labs/zeroclaw/issues/10050) |

**Sinais de Roadmap Identificados:**
- **Extensibilidade via WASM**: Esforço contínuo para mover channels e tools de feature flags para plugins runtime
- **Multi-model providers**: Capacidade de hospedar múltiplos modelos por profile de provider
- **Desktop interaction**: Suporte a computer-use para interação com desktop
- **AI-assisted CI**: Ratificação do pipeline de PR review assistido por IA

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas nas Issues

| Categoria | Problema | Issue | Impacto |
|-----------|----------|-------|---------|
| **Configuração** | Default documentado não é honrar, SOPs falham silenciosamente | [#9779](https://github.com/zeroclaw-labs/zeroclaw/issues/9779) | Alto — usuário não sabe que SOPs não carregaram |
| **UX/CLI** | Instalação via nix run não funciona, precisa documentar alternativas | [#5269](https://github.com/zeroclaw-labs/zeroclaw/issues/5269) | Médio — degradação de DX |
| **Observabilidade** | Status banner mostra "Memory: none" quando sqlite está ativo | [#9896](https://github.com/zeroclaw-labs/zeroclaw/issues/9896) | Médio — informação enganosa |
| **Segurança** | Delegate tool permite bypass de allowlist | [#8279](https://github.com/zeroclaw-labs/zeroclaw/issues/8279) | Crítico |
| **Config** | Bootstrap files truncados em 6000 chars invisível ao operador | [#10523](https://github.com/zeroclaw-labs/zeroclaw/issues/10523) | Médio — operador perde contexto sem saber |

### Feedback Positivo Implícito
- **Manutenção ativa**: 50 PRs e 37 issues em 24h indica comunidade engajada
- **Processo RFC maduro**: 13+ RFCs em discussão ativa com revisões estruturadas
- **Responsividade**: Bugs aceitos rapidamente (ex: #9779 aceito em 26 dias)

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Estagnadas

| # | Título | Idade | Status | Link |
|---|--------|-------|--------|------|
| #5269 | validate and document the nix run installation path | ~5 meses | ACCEPTED | [Issue #5269](https://github.com/zeroclaw-labs/zeroclaw/issues/5269) |
| #7899 | OpenAI STT provider ignores env-based credentials | ~3 meses | ACCEPTED | [Issue #7899](https://github.com/zeroclaw-labs/zeroclaw/issues/7899) |

### PRs com Necessidade de Ação do Autor

| # | Título | Tamanho | Bloqueio | Link |
|---|--------|---------|----------|------|
| #9739 | multi-session panes with agent sidebar | XL | needs-author-action | [PR #9739](https://github.com/zeroclaw-labs/zeroclaw/pull/9739) |
| #9713 | expose token accounting on history-trim events | XL | needs-author-action | [PR #9713](https://github.com/zeroclaw-labs/zeroclaw/pull/9713) |
| #9894 | implement WhatsApp reactions | S | needs-author-action | [PR #9894](https://github.com/zeroclaw-labs/zeroclaw/pull/9894) |
| #9871 | resolve matrix homeserver | XS | needs-author-action | [PR #9871](https://github.com/zeroclaw-labs/zeroclaw/pull/9871) |

### Recomendações de Prioridade

1. **Urgente**: Resolver os 4 bugs P1/S0 em andamento (#9779, #9395, #8279, #10495)
2. **Alta**: Avançar PRs XL bloqueados por author-action (#9739, #9713)
3. **Média**: Documentar instalação nix (#5269) — aberto há 5 meses
4. **Contínua**: Manter processo de RFCs com revisões estruturadas

---

*Relatório gerado automaticamente com base nos dados do GitHub de 2026-09-02. Para informações mais recentes, consulte [github.com/zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw).*

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*