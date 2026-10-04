# Resumo diário do ecossistema de agentes de IA 2026-10-05

> Issues: 3 | PRs: 5 | Projetos cobertos: 7 | Gerado em: 2026-10-04 22:40 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório do Projeto NullClaw — 2026-10-05

---

## 1. Panorama do Dia

O projeto NullClaw apresenta **atividade moderada** em 5 de outubro de 2026, com 8 eventos totais no período de 24 horas. A equipe concentrou-se em **manutenção de estabilidade**: dois PRs críticos foram merged resolvendo problemas de output corrompido no CLI e fallback HTTP inseguro no Android. Três novas issues foram abertas, todas relacionadas a bugs em ambientes específicos (Termux, Docker, worktree Git). Não houve lançamentos de novas versões. A atividade é exclusivamente de um único mantenedor, vernonstinebaker, o que indica um projeto com Contributor Base reduzida mas manutenção ativa.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24 horas.**

O projeto não publicou tags ou releases no período analisado. O último release significativo mencionado nos PRs fechados (#966) data de junho de 2026, sugerindo um ciclo de release possibly trimestral ou orientado a necessidade.

---

## 3. Progresso do Projeto

### PRs Fechados/Merged

**#1006 — fix(cli): append streamed stdout instead of overwriting offset zero** ✅ MERGED
- **Impacto:** Corrigia corrupção visual em replies streamados (ex: "pong" com primeira linha corrompida no macOS).
- **Mudança técnica:** Substituiu escrita posicional no offset 0 por append, alinhando comportamento entre plataformas.
- **Link:** [nullclaw/nullclaw PR #1006](https://github.com/nullclaw/nullclaw/pull/1006)

**#966 — fix(http): secure buffered curl fallback on Android** ✅ MERGED
- **Impacto:** Resolveu `NameServerFailure` em Termux (aarch64-linux-android) ao garantir fallback completo para curl com preservação de headers `std.http`.
- **Mudança técnica:** Rota agora todo tráfego HTTP pelo curl quando std.http falha, não apenas parte.
- **Link:** [nullclaw/nullclaw PR #966](https://github.com/nullclaw/nullclaw/pull/966)

### PRs Abertos (em revisão)

**#1019 — test(http): pin byte-exact curl transport round-trips** 🔄 REVIEW
- Adiciona testes de integridade para payloads > 8 KiB, body preservation, entry point `fetchWithCurl` no Android, e detecção de state leaking entre chamadas.
- **Link:** [nullclaw/nullclaw PR #1019](https://github.com/nullclaw/nullclaw/pull/1019)

**#1021 — fix(hooks): clear inherited GIT_DIR before pre-push test run** 🔄 REVIEW
- Corrige #1020 — pre-push hook falhava em worktrees por herança de `GIT_DIR`.
- **Link:** [nullclaw/nullclaw PR #1021](https://github.com/nullclaw/nullclaw/pull/1021)

**#1004 — fix(providers): log scrubbed provider error bodies on non-2xx** 🔄 REVIEW
- Melhora debuggabilidade ao logar bodies de erro com secrets censurados e length cap.
- **Link:** [nullclaw/nullclaw PR #1004](https://github.com/nullclaw/nullclaw/pull/1004)

---

## 4. Temas Quentes da Comunidade

### Issue com maior engajamento de comentários

**#1018 — BUG: Termux — agent output silently corrupted** 💬 2 comentários
- Reportado por usuário de Termux em aarch64-linux-android.
- Comportamento: strings retornadas como fragmentos embaralhados, exit code 0, sem logs de erro.
- Implicação: Confiabilidade do agente em mobile/Android comprometida.
- **Link:** [nullclaw/nullclaw Issue #1018](https://github.com/nullclaw/nullclaw/issues/1018)

### Análise de Demandas

O padrão predominante nas discussions é **suporte multiplataforma deficiente**:
- Termux/Android: problemas de transporte HTTP e corrupção de output
- Docker: ownership de volumes incompatível com user namespace remapping
- Git worktree: variáveis de ambiente vazando entre contextos

**Sinalizacão:** A questão de root-owned volumes no Docker (#1017) pode impactar adoption em ambientes de produção containerizados.

---

## 5. Bugs e Estabilidade

### Bugs Reportados (3 issues abertas/ativas)

| # | Severidade | Título | Ambiente |
|---|-----------|--------|----------|
| #1017 | **Alta** | Docker gateway `AccessDenied` — `/nullclaw-data` root-owned | Docker |
| #1020 | **Média** | `.githooks/pre-push` falha em worktrees — `GIT_DIR` leak | Git worktree |
| #1018 | **Alta** (já fechada) | Agent output corrompido/silenciado | Termux/Android |

**Detalhamento:**

**#1017 — Docker AccessDenied** (ABERTA)
- `docker run` falha imediatamente com `AccessDenied`
- Causa: `/nullclaw-data` criado como `root:root`, mas processo roda como uid `65534` (nobody)
- Severidade elevada: Impede uso do container published diretamente
- **Link:** [nullclaw/nullclaw Issue #1017](https://github.com/nullclaw/nullclaw/issues/1017)

**#1020 — Git worktree pre-push failure** (ABERTA)
- Hook documentado como workflow oficial (`docs/nullclaw-maintainer-worktree-workflow.md`) está quebrado
- Variáveis `GIT_DIR` e `GIT_PREFIX` exportadas por `git push` em worktrees não são limpas
- Severidade média: Afeta fluxo de trabalho de mantenedores
- **Link:** [nullclaw/nullclaw Issue #1020](https://github.com/nullclaw/nullclaw/issues/1020)

**#1018 — Agent output corruption (Termux)** ✅ FECHADA
- PR associado #966 (merged) endereçava parcialmente o problema via curl fallback
- Pode ter sido resolved incidentalmente ou aguardando validação do reporter

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features em PR

**#1019 — Byte-exact HTTP transport tests**
- Não é feature, mas infraestrutura de testes que posibilitará future HTTP improvements com confiança
- Cobre: payloads > 8 KiB, Android entry point, state isolation

**#1004 — Scrubbed error logging**
- Melhora observabilidade em falhas de provider
- Feature de debugging que não muda comportamento externo

### Sinais de Roadmap Implícitos

A infraestrutura de testes (#1019) combinada com correções HTTP (#966, #1006) sugere **prioridade em confiabilidade de transporte cross-platform** para o próximo release cycle.

**Ausência notável:** Nenhuma feature request genuína aberta — todas as issues são bugs. Isso indica:
1. Produto maduro com features suficientes para scope atual
2. Necessidade de input externo/usuário para direcionar roadmap

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Dor | Severidade | Contexto |
|-----|------------|----------|
| Output de agente silenciosamente errado (exit 0) | Crítica | Termux/Android — confiança comprometida |
| Docker container não inicia | Alta | Produção/container — adoption blocker |
| Hook de pre-push não funciona no workflow documentado | Média | Mantenedores — DX degradado |
| Erros de provider invisíveis sem packet capture | Média | Debugging — operabilidade reduzida |

### Cenários de Uso Emergentes

1. **Uso mobile-first:** Termux/Android é ambiente real de produção para usuários (não apenas edge case)
2. **Containerização:** Docker não é opcional — imagem published precisa Just Work™
3. **Git worktree como workflow principal:** Documentação endossa, mas suporte está quebrado

### Satisfação/Insatisfação

**Insatisfação:** Alta, baseada na quantidade de bugs de "silence failure" onde sistema retorna exit 0 sem indicar problema. Usuários não conseguem confiar na output sem validação manual.

**Satisfação potencial:** O mantenedor responde rapidamente (todos os bugs abertos têm menos de 24h). A taxa de resolução aparente é boa.

---

## 8. Backlog que Merece Atenção

### Issues sem resposta há > 7 dias

**Nenhuma issue no dataset com age > 7 dias.**

Todas as 3 issues ativas (#1017, #1018, #1020) foram criadas e atualizadas em 2026-10-04 (últimas 24h), indicando responsividade adequada do mantenedor.

### PRs Abertos sem Merge (age indeterminada)

| # | Prioridade | Título | Status |
|---|------------|--------|--------|
| #1004 | Média | Log scrubbed provider error bodies | Em revisão |
| #1019 | Baixa | Byte-exact HTTP transport tests | Em revisão |
| #1021 | Alta | Clear GIT_DIR no pre-push | Em revisão (fix para #1020) |

### Recomendações

1. **#1017 (Docker AccessDenied)** — Priorizar: bloqueia usuários de produção
2. **#1021 (GIT_DIR clear)** — Priorizar: workflow documentado quebrado
3. **#1004 (Error logging)** — MERGE em breve: low-risk, alta utilidade

---

## Métricas Resumidas

| Métrica | Valor | Status |
|---------|-------|--------|
| Issues ativas | 2 | ⚠️ Requer atenção |
| PRs abertos | 3 | Em revisão |
| PRs fechados (24h) | 2 | ✅ Resolvidos |
| Releases (24h) | 0 | — |
| Bugs de severidade alta | 1 | #1017 Docker |
| Maintainer response time | < 24h | ✅ Excelente |

---

*Relatório gerado em 2026-10-05 com base em dados do GitHub de nullclaw/nullclaw.*

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo — Ecossistema de Agentes de IA Open Source

**Data de referência:** 2026-10-05  
**Projetos analisados:** 7 (NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw, ZeroClaw)

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **duas velocidades distintas** neste snapshot. De um lado, projetos como **NanoBot, ZeroClaw e Hermes Agent** operam em alta intensidade — dezenas de issues e PRs por dia, com pipelines de features ativos e comunidades engajadas. De outro, **NullClaw, IronClaw e parcialmente PicoClaw** transitam por fases de manutenção, com foco em estabilidade e correção de bugs críticos. Uma tendência transversal é a **priorização de confiabilidade multiplataforma**: independentemente do porte, todos os projetos enfrentam desafios de transporte HTTP, isolamento de containers e suporte mobile (Termux/Android). Nenhum projeto publicou releases formais nas últimas 24h, indicando sincronia de ciclo de release ou freeze de desenvolvimento.

---

## 2. Comparação de Atividade

| Projeto | Issues Abertas | PRs Abertos | PRs Fechados (24h) | Releases (24h) | Saúde Geral |
|---------|-----------------|-------------|---------------------|----------------|-------------|
| **NanoBot** | ~5 | ~15 | **17** | 0 | 🟢 Robusta |
| **ZeroClaw** | **42** | **50** | 3 | 0 | 🟡 Alta atividade — risco de backlog |
| **Hermes Agent** | **50** | **50** | 3 | 0 | 🟡 Alta atividade — bugs P1 críticos |
| **CoPaw** | **11** | 7 | 1 | 0 | 🔴 Alerta — 2 bugs críticos |
| **PicoClaw** | 4 | 2 | **7** | 0 | 🟢 Estável — foco em bug fixes |
| **NullClaw** | 3 | 3 | 2 | 0 | 🟢 Estável — manutenção ativa |
| **IronClaw** | 0 | 4 | 1 | 0 | ⚪ Manutenção mínima |

**Observação:** NanoBot lidera em produtividade de merges (17 PRs fechadas), enquanto Hermes Agent e ZeroClaw possuem os maiores volumes de backlog. CoPaw apresenta o menor ratio de resolução/abertura, sinalizando gargalo no processo de review.

---

## 3. Posicionamento do Projeto Principal

### NanoBot como referência de alta atividade

O **NanoBot** (HKUDS) se destaca pelo volume excepcional de contribuições e foco consistente em UX mobile — **7 PRs de mobile fechadas em um único dia**. Diferencia-se技术上 por:

- **Arquitetura multi-canal madura:** Integração ativa com WeChat, QQ, Telegram, Discord, Slack
- **Sistema de subagentes com controle granular:** Session-owned task messaging (#5985)
- **Infraestrutura de providers extensível:** 38 provedores openai_compat com suporte a reasoning models

**Vantagem competitiva:** A taxa de resolução rápida (17 merges/dia) sugere equipe dedicada ou automação robusta de CI, posicionando o NanoBot como solução pronta para produção em cenários de automação multi-canal.

### Hermes Agent como referência de complexidade

O **Hermes Agent** (NousResearch) apresenta o maior número de **bugs P1 críticos** (2 abertas) e o pipeline de atualização mais sofisticado — um bundle de 5+ PRs interdependentes reformulando o sistema de update com markers de liveness e locks atômicos.

**Vantagem competitiva:** Foco em reliability de update e multi-profile, indicando público-alvo enterprise com necessidades de deployment distribuído.

### Contraste com projetos menores

- **NullClaw** mantém saúde com contributor base reduzida (1 mantenedor), priorizando estabilidade sobre features
- **IronClaw** opera em modo de manutenção automática via dependabot, sem demanda comunitária visível
- **CoPaw** apresenta sinais de stress: 2 bugs críticos de memória/event-loop com idade >3 semanas sem resolução

---

## 4. Focos Técnicos Compartilhados

### 🔴 Confiabilidade de Transporte HTTP Multi-Plataforma

**Presente em:** NullClaw (#966), Hermes Agent (#132607), ZeroClaw (#11525)

Problemas de fallback HTTP, corrupção de output em streams e falhas de transporte em Android/Termux aparecem transversalmente. A causa raiz provável é a dependência de bibliotecas HTTP nativas com comportamentos inconsistentes entre plataformas.

**Ação implícita:** Pipeline de testes HTTP com byte-exact round-trips (#1019, NullClaw) como infraestrutura compartilhada.

### 🔴 Isolamento e Segurança de Sandbox

**Presente em:** Hermes Agent (#49578 — execute_code bypass), CoPaw (#7840 — plugins bloqueiam event loop), ZeroClaw (#10536 — macOS Seatbelt)

Três arquiteturas diferentes, mesmo problema: código executado escapa das restrições configuradas. CoPaw sofre com plugins sincronizados sem sandboxing; Hermes Agent com RPC Python bypass; ZeroClaw com configuração de segurança ignorada.

**Ação implícita:** necessidade de runtime isolation layer padronizado.

### 🟠 Gestão de Sessões e Persistência

**Presente em:** PicoClaw (#3403 — async tool results routing), Hermes Agent (#132509 — session rotation), ZeroClaw (#10673 — ACP turn persistence)

Rotas de sessões, entrega assíncrona de resultados e persistência de estado em reinícios emergem como requisitos comuns à medida que os agentes amadurecem para uso em produção.

### 🟡 Mobile-First como Caso de Uso Real

**Presente em:** NullClaw (Termux), NanoBot (mobile WebUI), ZeroClaw (Android/Termux quickstart)

Termux/Android não é mais edge case — é ambiente de produção documentado em múltiplos projetos. Isso implica:
- Necessidade de CI/CD para arquiteturas ARM64
- Testes de transporte HTTP em ambientes受限
- Suporte a filesystems com permissões restritivas

---

## 5. Análise de Diferenciação

| Dimensão | NanoBot | Hermes Agent | ZeroClaw | NullClaw | CoPaw |
|----------|---------|--------------|----------|----------|-------|
| **Público-alvo primário** | Automação multi-canal (WeChat, Slack) | Developers power-user e enterprise | Operadores com múltiplos agentes | CLI enthusiasts, mobile | Produtividade individual |
| **Arquitetura distintiva** | Subagentes por sessão, providers extensíveis | Sistema de update sofisticado, multi-profile | Runtime/gateway separation planejado | Minimalista, single-maintainer | Fork de QwenPaw, foco em UI |
| **Estratégia de features** | Mobile-first UX, canais | Confiabilidade e update | Local-first, multi-provider | Estabilidade do core | Bug fixes reativos |
| **Maturidade de comunidade** | Alta — 17 merges/dia | Alta — volume alto mas bugs críticos | Alta — 42 issues, contributors externos | Baixa — 1 mantenedor | Média — contributors ativos |
| **Risco técnico dominante** | Regressões em multi-canal | Segurança de sandbox (#49578) | Perda de dados em Config (#10495) | Adoption block em Docker | Memory leaks crônicos |

### Divergência Arquitetural

**NanoBot** aposta em extensibilidade horizontal (provedores, canais)  
**Hermes Agent** apuesta em robustez vertical (update pipeline, profiles)  
**ZeroClaw** apuesta em separação de responsabilidades (runtime/gateway)  
**CoPaw** demonstra dívida técnica em isolamento de plugins e memória

---

## 6. Tração e Maturidade da Comunidade

### Projetos em fase de consolidação de qualidade

| Projeto | Sinais de consolidação |
|---------|------------------------|
| **PicoClaw** | 7/7 PRs fechadas são bug fixes; ratio fix/feature de 7:2 indica maturidade de escopo |
| **NullClaw** | Contributor base reduzida mas responsivo (<24h); nenhum bug >7 dias sem resposta |
| **IronClaw** | Zero issues; 5/5 PRs são updates de dependências — software maduro sem demanda nova |

### Projetos em iteração rápida

| Projeto | Sinais de iteração |
|---------|-------------------|
| **NanoBot** | 17 merges/dia; 7 PRs mobile em 24h; PRs com labels claros (p2, feature) |
| **ZeroClaw** | 50 PRs abertos com tracker de release (v0.8.6, v0.9.0); 5+ contributors externos |
| **Hermes Agent** | 100+ itens atualizados/dia; P1 bugs sendo addressados; PR bundle de update |

### Projetos em stress

| Projeto | Sinais de stress |
|---------|-----------------|
| **CoPaw** | 2 bugs críticos >3 semanas; 1 PR "Under Review" há 6 semanas (#7299); média de 2-3 bugs/dia |
| **ZeroClaw** | 9 bugs P0/P1 abertos simultaneamente; 5+ PRs aguardando author action |

**Maturidade relativa:** PicoClaw ≈ IronClaw > NullClaw > NanoBot > Hermes Agent > ZeroClaw > CoPaw

---

## 7. Sinais de Tendência

### 7.1 Mobile-first não é mais opcional

Três projetos (NullClaw, ZeroClaw, NanoBot) reportam problemas ou features diretamente vinculados a Termux/Android. O uso de agentes de IA em dispositivos móveis é **caso de uso consolidado**, não experimental. Implicações:

- Necessidade de CI multi-arquitetura (arm64, aarch64)
- Testes de transporte HTTP em ambientes com restrições de rede
- Suporte a filesystems não-padrão

### 7.2 Isolamento de plugins é dívida técnica urgente

CoPaw (#7840), Hermes Agent (#49578) e ZeroClaw (#10536) apresentam vulnerabilidades de isolamento de forma independente. A ausência de sandboxing padronizado para extensões de agentes indica **lacuna arquitetural no ecossistema**. A correção provavelmente será feature competitiva nos próximos ciclos.

### 7.3 Multi-canal é expectatica baseline

NanoBot demonstra que integração com 5+ canais (WeChat, QQ, Telegram, Discord, Slack) é alcançável. Isso estabelece **expectativa de mercado**: agentes de IA em produção precisam de conectores de canal ready-to-use. Projetos sem suporte multi-canal enfrentam barreira competitiva.

### 7.4 Observabilidade como feature request recorrente

Três projetos (NanoBot #6029, CoPaw #8103, Hermes Agent #132607) recebem demandas por:
- Notificações de fallback de modelo
- Supressão de logs de manutenção em canais ativos
- Log de erros com secrets censurados

Isso indica que **agentes em produção geram confiança através de transparência**, não apenas de resultados.

### 7.5 Local-first emerge como demanda corporativa

ZeroClaw (#5287 — runtime profile local_small) e Hermes Agent (#38519 — desktop frontend standalone) sinalizam interesse em:
- Deployments edge/on-premise
- Separação UI/runtime
- Roteamento effort-based entre modelos locais e cloud

**Startups e enterprises** buscando privacidade de dados são público-alvo provável.

---

## Síntese para Decisores

| Prioridade | Ação | Projetos Relacionados |
|------------|------|----------------------|
| 🔴 Imediata | Corrigir bugs críticos de segurança/estabilidade | CoPaw (#7722, #7840), ZeroClaw (#10495, #10536) |
| 🟠 Curto prazo | Review de PRs estagnados (>4 semanas) | CoPaw (#7299), ZeroClaw (#5+ PRs), Hermes Agent (#5204) |
| 🟡 Médio prazo | Adotar práticas de isolamento de plugins | Ecossistema geral |
| 🟢 Oportunidade | Investir em mobile (Termux/Android) | NullClaw, ZeroClaw, NanoBot |

---

*Relatório gerado em 2026-10-05 com base em resumos de atividade comunitária dos repositórios GitHub.*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-10-05

---

## 1. Panorama do dia

O NanoBot apresenta um nível de atividade **muito elevado** nas últimas 24 horas, com 49 PRs atualizados e 5 issues processadas. A equipe focou intensamente em melhorias de UX para dispositivos móveis e correções de estabilidade na WebUI, com 12 PRs fechados hoje — a maioria addressing bugs de usabilidade mobile. O projeto demonstrou saúde geral robusta, com nenhuma regressão crítica reportada e um fluxo saudável de contribuições tanto em features quanto em correções.

---

## 2. Lançamentos

**Nenhum novo release nas últimas 24h.**

O projeto não publicou versões今天的。Release mais recente deve ser consultada diretamente no [repositório](https://github.com/HKUDS/nanobot/releases).

---

## 3. Progresso do projeto

### PRs fechadas/merged hoje (17 total)

| PR | Título | Impacto |
|----|--------|---------|
| [#5985](https://github.com/HKUDS/nanobot/pull/5985) | `feat(subagent): add session-owned task messaging and cancellation` | **Alto** — Adiciona controle de subagentes por sessão com criação, inspeção, cancelamento direcionado e observação de tarefas. Integração completa com WebUI para progresso e resultados. |
| [#6005](https://github.com/HKUDS/nanobot/pull/6005) | `fix(providers): preserve temperature for compatible reasoning models` | **Alto** — Corrige #6002. Resolve a perda silenciosa de `temperature` para todos os 38 provedores openai_compat quando `reasoning_effort` está ativo. Preserva temperatura para modelos compatíveis como Mistral. |
| [#6061](https://github.com/HKUDS/nanobot/pull/6061) | `fix(webui): dismiss mobile sidebar on current topic selection` | **Médio** — Corrige drawer que ficava aberto ao tocar tópico já selecionado em dispositivos móveis. |
| [#6059](https://github.com/HKUDS/nanobot/pull/6059) | `fix(webui): restore sidebar focus after submenu Escape` | **Médio** — Follow-up do #6058, restaurando foco ao botão de ação após Escape em submenus. |
| [#6058](https://github.com/HKUDS/nanobot/pull/6058) | `fix(webui): restore sidebar menu focus on Escape` | **Médio** — Mantém continuidade de teclado ao dispensar menus de ações da sidebar. |
| [#6056](https://github.com/HKUDS/nanobot/pull/6056) | `fix(webui): make sidebar actions discoverable on touch devices` | **Médio** — Torna botões de ação da sidebar visíveis em vez de depender de hover em dispositivos touch. |
| [#6055](https://github.com/HKUDS/nanobot/pull/6055) | `fix(webui): avoid automatic zoom when focusing mobile text fields` | **Médio** — Corrige zoom automático indesejado em campos de texto mobile, preservando tipografia desktop. |
| [#6054](https://github.com/HKUDS/nanobot/pull/6054) | `docs(memory): correct Git layout and history search example` | **Médio** — Corrige layout de diretório e exemplo de busca JSONL incremental no guia de memória. |
| [#6053](https://github.com/HKUDS/nanobot/pull/6053) | `fix(webui): fit session search above the mobile keyboard` | **Médio** — Ajusta layout da busca de sessão para evitar sobreposição com teclado virtual em iOS. |
| [#6052](https://github.com/HKUDS/nanobot/pull/6052) | `fix(webui): keep composer palettes inside the mobile viewport` | **Médio** — Corrige menus `@` e `/` que colapsavam para faixa fina ao abrir teclado em iOS. |
| [#6049](https://github.com/HKUDS/nanobot/pull/6049) | `fix(webui): keep edit diffs visible and distinguish file creation` | **Médio** — Restaura timeline splitting e distingue criação de edição de arquivos. |

---

## 4. Temas quentes da comunidade

### Issues com mais comentários e interesse

| Issue | Título | Analálise da Demanda |
|-------|--------|---------------------|
| [#6029](https://github.com/HKUDS/nanobot/issues/6029) | **[bug, priority: p2] Allow silent context compaction and suppress channel broadcasts for background idle/dream cycles** | **🔥 Alta demanda** — Users request que rotinas de manutenção (idle session checks, ciclos de dream/heartbeat) não enviem notificações "Compressing context…" para canais ativos. Relacionado ao #5900 (já fechado). |
| [#6031](https://github.com/HKUDS/nanobot/issues/6031) | **Notify chat channels when a fallback model serves a turn** | **🔥 Alta demanda** — Model failover funciona, mas canais (QQ, Telegram, Discord, Slack) não recebem sinal quando fallback é acionado. Já possui PR #6062 em aberto. |

### PRs em destaque com potencial de conflito

| PR | Situação |
|----|----------|
| [#5204](https://github.com/HKUDS/nanobot/pull/5204) | `refactor(providers): declare Responses capabilities` — **P1, com conflito** — Refatoração Declarativa de capacidades Responses para OpenAI, GitHub Copilot e DeepSeek. Requer atenção para resolução de conflitos. |

---

## 5. Bugs e estabilidade

### Issues de bug abertas

| Issue | Severidade | Descrição |
|-------|------------|-----------|
| [#6029](https://github.com/HKUDS/nanobot/issues/6029) | **p2** | Canal WeChat recebe notificações de compactação de contexto durante ciclos idle/dream |
| [#6009](https://github.com/HKUDS/nanobot/pull/6009) | **p2** | WebUI: estado da sidebar perdido após falha de fetch inicial |
| [#6024](https://github.com/HKUDS/nanobot/issues/6024) | — | CLI do Obsidian reporta "unable to find Obsidian" sob nanobot (XDG_RUNTIME_DIR) |

### Bugs corrigidos hoje

| PR | Bug |
|----|-----|
| [#6005](https://github.com/HKUDS/nanobot/pull/6005) | `reasoningEffort` silenciosamente removia `temperature` para 38 provedores |
| [#6049](https://github.com/HKUDS/nanobot/pull/6049) | Diffs de edição escondidos atrás de menu de detalhes em respostas completadas; criação de arquivos aparecia como "Edited" |
| [#6061](https://github.com/HKUDS/nanobot/pull/6061) | Sidebar mobile não fechava ao selecionar tópico atual |

**Estado geral de estabilidade:** ✅ Saudável. Nenhuma regressão crítica reportada. Bugs p2 tratados com pritoridade.

---

## 6. Pedidos de features e sinais de roadmap

### Novas features em desenvolvimento (PRs abertos)

| PR | Feature | Relevância |
|----|---------|------------|
| [#6057](https://github.com/HKUDS/nanobot/pull/6057) | `feat(webui): choose the chat for scheduled tasks` | **Alta** — Permite selecionar chat específico para tarefas agendadas, mudando binding de execução, turno gravado e rota de reply. |
| [#6062](https://github.com/HKUDS/nanobot/pull/6062) | `fix(channels): notify chat channels when a fallback model serves a turn` | **Alta** — Adiciona notificação a canais quando fallback de modelo é acionado (encerra #6031). |
| [#6060](https://github.com/HKUDS/nanobot/pull/6060) | `fix(documents): read cells beyond declared XLSX dimensions` | **Média** — openpyxl ignorava células fora do range declarado, agora extraídas corretamente. |
| [#5590](https://github.com/HKUDS/nanobot/pull/5590) | `fix: summarize persisted JSON tool results` | **Média** — Resume scalars e tamanhos de containers em resultados JSON grandes, preservando output completo. |
| [#5388](https://github.com/HKUDS/nanobot/pull/5388) | `feat(agent): budget model-visible MCP schemas` | **Média** — Adiciona budget opcional de bytes para schemas MCP, com seleção léxica determinística. |
| [#5387](https://github.com/HKUDS/nanobot/pull/5387) | `feat(telegram): support reusable sticker replies` | **Média** — Expõe file IDs de stickers e permite envio via canal outbound. |
| [#5386](https://github.com/HKUDS/nanobot/pull/5386) | `feat(mcp): preserve MCP Apps result metadata` | **Média** — Preserva metadata e resultados estruturados como `ToolResult.data` separado do texto. |

### Sinais de roadmap

- **Context compaction silenciosa**: Demanda consolidada (#5900, #6029) indica foco em automação de background menos intrusiva
- **Notificações de failover**: Feature request recorrente com PR pronto para merge (#6062)
- **Mobile-first**: 7 PRs mobile fechados hoje sugerem priorização de UX mobile
- **MCP深化**: Investimento contínuo em capacidades MCP (schemas budget, metadata preservation)

---

## 7. Resumo de feedback dos usuários

### Dores reportadas

| Dor | Manifestação | Status |
|-----|-------------|--------|
| **Notificações invasivas em background** | Usuários reportam mensagens "Compressing context…" durante ciclos idle/dream | 🔄 PR #6062 em desenvolvimento |
| **Falha silenciosa de model fallback** | Usuários recebem resposta de modelo diferente sem notificação em canais | 🔄 PR #6062 em desenvolvimento |
| **Log verboso no WeChat** | Polling logs poluem conversas do WeChat | 🔄 Correção integrada na issue #5900 |
| **XDG_RUNTIME_DIR não reaching CLI** | Integração Obsidian CLI quebra em ambiente nanobot | ⚠️ Issue #6024 reportada, sem resolution ainda |

### Cenários de uso evidenciados

- **Automação de background**: Idle session compaction, dream/heartbeat cycles
- **Multi-canal**: WeChat, QQ, Telegram, Discord, Slack — todos com expectativas de UX distintas
- **Produtividade developer**: Integração Obsidian, CLI tools, scheduled tasks
- **Model flexibility**: Failover entre provedores, reasoning models com temperature control

---

## 8. Backlog que merece atenção

### Issues/PRs sem resposta há tempo considerável

| Item | Tempo sem resposta | Prioridade | Ação Recomendada |
|------|-------------------|------------|------------------|
| [#5204](https://github.com/HKUDS/nanobot/pull/5204) | ~2 meses | **P1** | Resolver conflitos de merge. Refatoração de Responses capabilities bloqueia outros PRs |
| [#5388](https://github.com/HKUDS/nanobot/pull/5388) | ~2 meses | Média | Revisar e dar feedback sobre schema budget approach |
| [#5387](https://github.com/HKUDS/nanobot/pull/5387) | ~2 meses | Média | Avaliar compatibilidade com API Telegram atual |
| [#5386](https://github.com/HKUDS/nanobot/pull/5386) | ~2 meses | Média | Verificar se abordagem de metadata separation ainda é válida |
| [#5590](https://github.com/HKUDS/nanobot/pull/5590) | ~5 semanas | Média | Revisar implementação de summarization para JSON |

### Issues aguardando triagem

| Issue | Aguardando |
|-------|-----------|
| [#6024](https://github.com/HKUDS/nanobot/issues/6024) | Reprodução ouClarificação de ambiente (XDG_RUNTIME_DIR) |

---

## Métricas resumidas

| Indicador | Valor | Tendência |
|-----------|-------|-----------|
| PRs fechados hoje | 17 | ↑ Alta produtividade |
| Issues fechadas hoje | 3 | ↑ Saudável |
| PRs abertos com conflitos | 1 (#5204) | ⚠️ P1 atenção necessária |
| Bugs p2 abertos | 3 | → Normal |
| Features mobile | 7 PRs merged | ↑ Foco mobile-first |

---

**Relatório gerado em:** 2026-10-05  
**Fonte:** [github.com/HKUDS/nanobot](https://github.com/HKUDS/nanobot)

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent
## NousResearch/hermes-agent — 2026-10-05

---

## 1. Panorama do Dia

O projeto Hermes Agent mantém um **ritmo de atividade intenso** com 50 issues e 50 PRs atualizados nas últimas 24h. A ausência de novas releases indica que a equipe está em ciclo de estabilização e código review, não havendo publikasi de versão. As discussions mais ativas concentram-se em **corrções de bugs críticos de estabilidade de sessão** (P1) e em **melhorias no sistema de update**, com várias PRs interdependentes do pacote `hermes update`. A comunidade demonstra preocupação crescente com edge cases em Windows, gerenciamento de profiles, e segurança da ferramenta de execução de código. O backlog de issues abertas está em 44, sugerindo uma fila de triagem saudável mas com alguns itens antigos aguardando decisão.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

O projeto não emitiu novas versões neste período. Este é um dia de **desenvolvimento ativo sem versão**, típico de projetos em fase de feature freeze ou integração de mudanças críticas.

---

## 3. Progresso do Projeto

### PRs Mergeadas/Fechadas Recentemente

| # | Título | Tipo | Status |
|---|--------|------|--------|
| [#119344](https://github.com/NousResearch/hermes-agent/pull/119344) | fix(codex): durable issuer-scoped reasoning-replay disable + bounded proxy replay | bug | **CLOSED** |
| [#102622](https://github.com/NousResearch/hermes-agent/pull/102622) | feat(desktop): add per-zone background tints | feature | **CLOSED** |
| [#71368](https://github.com/NousResearch/hermes-agent/pull/71368) | fix: normalize model turn results | bug | **CLOSED** |

### PRs Abertas com Maior Progresso Esperado

| # | Título | Tipo | Área | Status |
|---|--------|------|------|--------|
| [#62088](https://github.com/NousResearch/hermes-agent/pull/62088) | feat(matrix): implement spec-correct threading and reply semantics | feature | plugins | **OPEN** |
| [#132365](https://github.com/NousResearch/hermes-agent/pull/132365) | fix(update): update marker v2 (owner liveness, no age ceiling) + checkout lock | bug | install-update | **OPEN** |
| [#132361](https://github.com/NousResearch/hermes-agent/pull/132361) | fix(update): make the git/ZIP swap a single crash-safe commit point | bug | install-update | **OPEN** |
| [#132338](https://github.com/NousResearch/hermes-agent/pull/132338) | fix(update): a killed Windows updater no longer strands paused gateways | bug | install-update | **OPEN** |
| [#132346](https://github.com/NousResearch/hermes-agent/pull/132346) | ci: real-update E2E gates every updater change; Windows crash cells | test | install-update | **OPEN** |
| [#132386](https://github.com/NousResearch/hermes-agent/pull/132386) | fix(update): after the commit point nothing fails hermes update (C3) | bug | install-update | **OPEN** |
| [#132509](https://github.com/NousResearch/hermes-agent/pull/132509) | fix(tui_gateway): stop the model-switch FK loss on a rotated session | bug | sessions | **OPEN** |

**Destaque:** O **pacote de PRs de update** (#132365 → #132361 → #132338 → #132386) representa uma **refatoração significativa** do sistema de atualização, introduzindo:
- Update markers com owner liveness via pid + creation time
- Lock de checkout atômico
- Commit point crash-safe único para swap git/ZIP
- Melhor tratamento de processos Windowspausados em updates interrompidos

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (por comentários)

| # | Título | Comentários | 👍 | Prioridade |
|---|--------|-------------|-----|------------|
| [#125727](https://github.com/NousResearch/hermes-agent/issues/125727) | Automated Nous integration is blocked | 23 | 0 | P3 (invalid) |
| [#132607](https://github.com/NousResearch/hermes-agent/issues/132607) | More 'web' toolset intersections leading to failed web_search | 11 | 0 | P3 |
| [#38519](https://github.com/NousResearch/hermes-agent/issues/38519) | Hermes Desktop frontend install only | 10 | **16** | P2 |
| [#102811](https://github.com/NousResearch/hermes-agent/issues/102811) | [RFC] Skills prompt forces over-eager skill loading | 6 | 0 | P2 |
| [#131711](https://github.com/NousResearch/hermes-agent/issues/131711) | fix(google-workspace): empty Gmail searches return non-JSON | 5 | 0 | P3 (closed) |

### Análise dos Temas

**🔥 Nous Integration (#125727)** — 23 comentários  
A integração automatizada Nous-to-Enterkey está bloqueada por conflitos em múltiplos arquivos do core do agent (`conversation_loop.py`, `context_compressor.py`, etc.). A issue está marcada como `invalid`, sugerindo que o problema é de ownership ou processo, não de código.

**🌐 Web Search Reliability (#132607)** — 11 comentários  
Usuários reportam que `hermes chat -t web` funciona, mas combinações com outras toolsets (browser, defaults) falham consistentemente. Afeta diretamente a usabilidade diária.

**💡 Desktop Frontend Standalone (#38519)** — 10 comentários, 16 👍  
A **segunda issue com mais reactions** do conjunto. Forte demanda por instalação isolada do frontend Desktop conectando a um agent remoto. Este é um sinal claro de **caso de uso enterprise/separação de responsabilidades**.

**📋 Skills Over-Loading RFC (#102811)** — 6 comentários  
Discussão arquitetural sobre a política "MUST load" no prompt builder. O comportamento atual causa carregamento excessivo de skills, potencialmente degradando performance.

---

## 5. Bugs e Estabilidade

### Bugs P1 (Críticos — Requerem Atenção Imediata)

| # | Título | Área | Status |
|---|--------|------|--------|
| [#132934](https://github.com/NousResearch/hermes-agent/issues/132934) | Compaction handoff republished as assistant reply (defeats summary) | compression | **OPEN** |
| [#132949](https://github.com/NousResearch/hermes-agent/issues/132949) | Ordinary instruction answered with only "[response interrupted]" | sessions | **OPEN** |

### Bugs P2 (Altos — Impacto Significativo)

| # | Título | Área |
|---|--------|------|
| [#89207](https://github.com/NousResearch/hermes-agent/issues/89207) | Truncated tool_call arguments silently replaced with {} |
| [#132935](https://github.com/NousResearch/hermes-agent/issues/132935) | /model --provider openai-codex mid-session switch silently fails (403) |
| [#31419](https://github.com/NousResearch/hermes-agent/issues/31419) | Windows asyncio subprocess misparses argv metacharacters in .cmd/.bat |
| [#54650](https://github.com/NousResearch/hermes-agent/issues/54650) | Cron scheduler ignores job profile — always runs as default identity |
| [#132883](https://github.com/NousResearch/hermes-agent/issues/132883) | Blank Slate setup leaves all bundled skills on disk |
| [#132862](https://github.com/NousResearch/hermes-agent/issues/132862) | LSP language server outlives Hermes parent (pyright orphans) |
| [#132778](https://github.com/NousResearch/hermes-agent/issues/132778) | Managed worker: Metal backend error retried forever |
| [#132958](https://github.com/NousResearch/hermes-agent/issues/132958) | Terminal tool timeout leaves process tree running on Windows |
| [#132953](https://github.com/NousResearch/hermes-agent/issues/132953) | Email on multiplexed secondary profile stuck at 'fatal' after reconnect |
| [#122813](https://github.com/NousResearch/hermes-agent/issues/122813) | gateway_state.json active_agents not persisted on cron job start/end |

### Bugs P3 (Médios)

| # | Título | Área |
|---|--------|------|
| [#49578](https://github.com/NousResearch/hermes-agent/issues/49578) | execute_code (Python) bypasses agent file edit restrictions (**Security**) |
| [#122445](https://github.com/NousResearch/hermes-agent/issues/122445) | Termux APT docs stale: stable channel 404s, canary key fingerprint mismatch |
| [#132920](https://github.com/NousResearch/hermes-agent/issues/132920) | `hermes cron list` doesn't report ALL cron jobs, only current profile |
| [#132943](https://github.com/NousResearch/hermes-agent/issues/132943) | disk-cleanup: parallel tool calls race on tracked.json |

### Bugs Recentemente Fechados

| # | Título | Nota |
|---|--------|------|
| [#131711](https://github.com/NousResearch/hermes-agent/issues/131711) | empty Gmail searches return non-JSON | ✅ Corrigido |
| [#79065](https://github.com/NousResearch/hermes-agent/issues/79065) | Desktop file attachments fail when workspace read-only | ✅ Corrigido |
| [#91264](https://github.com/NousResearch/hermes-agent/issues/91264) | Kanban goal-mode judge failures consume empty continuation turns | ✅ Corrigido |

**⚠️ Alerta de Segurança:** A issue [#49578](https://github.com/NousResearch/hermes-agent/issues/49578) reporta que `execute_code` (Python RPC) pode绕过 as restrições de edição de arquivos sensíveis configuradas em `patch` e `write_file`. Esta issue P3 requer priorização para correção.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| # | Título | Área | 👍 |
|---|--------|------|-----|
| [#38519](https://github.com/NousResearch/hermes-agent/issues/38519) | Hermes Desktop frontend install only (connect to remote agent) | desktop | **16** |
| [#42106](https://github.com/NousResearch/hermes-agent/issues/42106) | Add macOS Spotlight/Desktop launcher installer | desktop | 0 |
| [#132893](https://github.com/NousResearch/hermes-agent/issues/132893) | skill_linter: enforce Anthropic's updated skill authoring rules | skills | 0 |

### Sinais de Roadmap Identificados

1. **Instalação Standalone do Desktop Frontend** (#38519 — 16 👍)  
   Forte demanda por arquitetura cliente-servido onde o Desktop é apenas a interface, conectando-se a um agent já existente em outro host. Sugere interesse em **deployments distribuídos**.

2. **Gerenciamento Multi-Profile**  
   Issues como #132920 (cron list) e #54650 (cron profile) indicam que o sistema de profiles está em uso ativo, mas apresenta fricção em cenários de automação e multiplexação.

3. **Suporte a Providers Alternativos**  
   Issues de mid-session provider switching (#132935) e integrações com Ollama, MiniMax, OpenAI Codex demonstram necessidade de **abstração de provider mais robusta**.

4. **Melhorias no Sistema de Update**  
   O volume de PRs sobre update (#132365, #132361, #132338, #132386, #132345, #132346) indica investimento significativo em **confiabilidade do update pipeline**.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Dor | Frequência | Impacto |
|-----|------------|---------|
| **Web search não funciona** em combinações de toolsets | Múltiplos usuários | Alto — bloqueia caso de uso principal |
| **Cron jobs ignoram profiles** — rodam sempre como default | Usuários de automação | Alto — viola expectativas de isolamento |
| **Blank Slate não remove skills** — instalação "limpa" vem com 58 skills | Novos usuários | Médio — cria experiência confusa |
| **Termux docs desatualizadas** — canais stable 404, key fingerprint diverge | Usuários Android | Médio — bloqueia instalação |
| **Desktop connection flaps** — WS reconnect loop ~4/s, session reaped | Usuários Desktop | Alto — experiência unusable |
| **LSP servers orphans** — pyright acumumina ~845MB após exit | Usuários que usam LSP | Médio — vazamento de recursos |

### Cenários de Uso Observados

- **Uso CLI com profiles isolados** — multiple `SOUL.md`, skills e memories por profile
- **Automação via cron** — pipeline HDLS com source-crawl, vault-triage, deep-research
- **Desktop como frontend** — usuários querem separar frontend do agent runtime
- **Integração Telegram via plugins** — callback patterns precisam de registro centralizado
- **Ejecución de código assistida** — terminal tool com timeout e gestão de subprocess no Windows

### Satisfação/Insatisfação

**Satisfação:**
- `hermes chat -t web` funciona de forma confiável quando isolado
- Correções recentes como Gmail empty search (#131711) e model turn normalization (#71368) endereçam dores antigas

**Insatisfação:**
- Fragmentação de toolsets web/browser/crul
- Sistema de update ainda propenso a crash loops e estados inconsistentes
- Experiência multi-profile immatura — cron, email, e sessions não respeitam isolamento

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Aguardando Decisão

| # | Título | Criado | Atualizado | Comentários | Status |
|---|--------|--------|------------|-------------|--------|
| [#38519](https://github.com/NousResearch/hermes-agent/issues/38519) | Hermes Desktop frontend install only | 2026-06-03 | 2026-10-04 | 10 | **needs-decision** |
| [#102811](https://github.com/NousResearch/hermes-agent/issues/102811) | [RFC] Skills prompt over-eager loading | 2026-09-04 | 2026-10-04 | 6 | **needs-decision** |
| [#115097](https://github.com/NousResearch/hermes-agent/issues/115097) | Plugin-owned inline-keyboard callbacks have no registration point | 2026-09-18 | 2026-10-04 | 2 | **needs-decision** |
| [#132935](https://github.com/NousResearch/hermes-agent/issues/132935) | /model --provider mid-session switch fails silently | 2026-10-04 | 2026-10-04 | 2 | **needs-repro** |
| [#131711](https://github.com/NousResearch/hermes-agent/issues/131711) | empty Gmail searches return non-JSON | 2026-10-02 | 2026-10-04 | 5 | Closed ✅ |

### Issues Antigas sem Progresso Visível

| # | Título | Criado | Dias Aberto | Prioridade |
|---|--------|--------|-------------|------------|
| [#38519](https://github.com/NousResearch/hermes-agent/issues/38519) | Desktop frontend install only | 2026-06-03 | **124 dias** | P2 |
| [#31419](https

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-10-05

---

## 1. Panorama do Dia

O projeto PicoClaw apresenta **alta atividade de manutenção** nesta data, com 9 PRs atualizadas e 4 issues em acompanhamento nas últimas 24h. Não houve lançamentos de novas versões. A comunidade demonstra foco em **estabilidade e correções de bugs críticos** — 7 das 9 PRs fechadas/merged são correções de bugs, indicando um ciclo de qualidade ativo. O contributor `x1F916` lidera as contribuições recentes com 5 PRs de hotfix merged, enquanto issues relacionadas a canais (DingTalk, OneBot/QQ) dominam o backlog de problemas.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

A última versão estável упоминается nos relatórios de issues como **v0.3.1** (commit `2cf030d2`), onde foi reportado um panic recorrente no canal DingTalk. Este bug permanece aberto (Issue #3382), sugerindo que uma correção pode estar iminente.

---

## 3. Progresso do Projeto

### PRs Merged/Fechadas (7 total)

| # | Título | Impacto |
|---|--------|---------|
| [#3403](https://github.com/sipeed/picoclaw/pull/3403) | `fix(agent): deliver async tool results to the originating session` | **Crítico** — Corrigia entrega de resultados de ferramentas assíncronas para a sessão correta. Antes, resultados acumulavam na sessão padrão do agente. |
| [#3402](https://github.com/sipeed/picoclaw/pull/3402) | `fix(agent): resolve the owning agent in context managers` | **Moderado** — Corrigia uso do agente padrão em sessões roteadas para agentes não-padrão. Rebase de #3316. |
| [#3401](https://github.com/sipeed/picoclaw/pull/3401) | `fix(channels): make Reload synchronous and nil-safe` | **Crítico** — Resolvia 3 problemas no reload de canais: panic ao fazer Stop/Start em canal nil, race condition e possível deadlock. |
| [#3400](https://github.com/sipeed/picoclaw/pull/3400) | `fix(config): persist all api_keys and enabled flag of multi-key models` | **Moderado** — Corrigia persistência incompleta de chaves de API em modelos multi-key. Afetava migração de configurações v0/v1/v2. |
| [#3399](https://github.com/sipeed/picoclaw/pull/3399) | `fix(updater): select the matching 32-bit ARM release asset` | **Bug fix** — Corrigia instalação errada de assets arm64 em sistemas 32-bit ARM. |
| [#3353](https://github.com/sipeed/picoclaw/pull/3353) | `fix(channels): bound tool feedback animations` | **Melhoria** — Limitava animações de feedback de ferramentas a 5 minutos, prevenindo edições infinitas em mensagens de canal. |
| [#3233](https://github.com/sipeed/picoclaw/pull/3233) | `fix: Fix pr 3222 backward compat` | **Compatibilidade** — Mantinha compatibilidade retroativa com alterações anteriores. |

**Análise:** Todas as 7 PRs fechadas são **bug fixes**, demonstrando maturidade do projeto com foco em estabilidade. A concentração de PRs do mesmo autor (`x1F916`) sugere uma fase de refinamento antes de um próximo release.

---

## 4. Temas Quentes da Comunidade

### Issues com Mais Atividade

| # | Título | Comentários | Tipo |
|---|--------|-------------|------|
| [#3394](https://github.com/sipeed/picoclaw/issues/3394) | [BUG] Interface do robô QQ atualizou, mas canal QQ não同步 | 2 | Bug Report |
| [#3392](https://github.com/sipeed/picoclaw/issues/3392) | [BUG] CLAassistant does not detect signature | 2 | Bug Report |
| [#3395](https://github.com/sipeed/picoclaw/issues/3395) | [Feature] Make OneBot auto-ack reaction configurable | 1 | Feature Request |

### PR Aberta de Destaque

| # | Título | Tipo |
|---|--------|------|
| [#3381](https://github.com/sipeed/picoclaw/pull/3381) | `feat: Switch Openai to responses API` | ✨ New Feature |

**Análise:** A comunidade está **ativamente discutindo integrações com plataformas de chat** (QQ via OneBot, DingTalk). A migration para a OpenAI Responses API (#3381) representa uma mudança significativa que pode abrir caminho para novos recursos de IA. O pedido de configuação para reações automáticas do OneBot (#3395) e sua PR asociada (#3396) indicam demanda por granularidade de configuração — usuários querem controle sobre comportamentos automatizados.

---

## 5. Bugs e Estabilidade

### Issues Abertas (3)

| Severidade | # | Título | Channel/Área |
|------------|---|--------|--------------|
| 🔴 Alta | [#3382](https://github.com/sipeed/picoclaw/issues/3382) | DingTalk gateway panics on stream SDK reconnect | DingTalk |
| 🟡 Média | [#3394](https://github.com/sipeed/picoclaw/issues/3394) | Interface QQ atualizou, canal não sincronizou | OneBot/QQ |
| 🟡 Média | [#3392](https://github.com/sipeed/picoclaw/issues/3392) | CLAassistant não detecta assinatura | Integridade |

**Destaque — Issue #3382 (DingTalk Panic):**
```
"send on closed channel, client.go:161"
```
Este é um **bug recorrente** (mesmo problema reportado em #973). Afeta versão **v0.3.1** com `dingtalk-stream-sdk-go` v0.9.1. Severidade alta pois causa crash do gateway.

### Issue Fechada

| # | Título | Status |
|---|--------|--------|
| [#3382](https://github.com/sipeed/picoclaw/issues/3382) | DingTalk panic | Reaberta (stale) — ainda não resolvida |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| # | Título | Descrição | Viabilidade |
|---|--------|-----------|-------------|
| [#3395](https://github.com/sipeed/picoclaw/issues/3395) | OneBot auto-ack reaction configurável | Adicionar setting `reaction_enabled` para toggle de acknowledgements automáticos | ✅ PR #3396 draft |
| [#3381](https://github.com/sipeed/picoclaw/pull/3381) | Migrar para OpenAI Responses API | Atualizar provider OpenAI para usar nova API Responses (v2) | 🔄 Em revisão |

**Sinais de Roadmap:**
- **Canal OneBot:** Evolução para permitir customização granular de comportamentos automatizados.
- **Provider OpenAI:** Migration para Responses API indica alinhamento com新一代 modelos e capacidades de streaming melhoradas.
- **Multi-agent:** As correções de contexto (#3402, #3403) sugerem que suporte a múltiplos agentes está amadurecendo.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Dor | Frequência | Impacto |
|-----|------------|---------|
| **Panic em canais de terceiros** | 1 issue (mas recorrente) | Alto — derruba gateway |
| **Interface QQ desincronizada** | 1 report | Médio — quebra comunicação |
| **Reações automáticas indesejadas** | 1 request | Baixo — UX customization |
| **Config de API keys perdida** | Correção recente | Médio — frustração em migrações |

### Cenários de Uso Identificados

- **Robôs QQ via NapCat** — Configuração popular com OneBot channel
- **DingTalk em Stream Mode** — Uso empresarial com problemas de reconnect
- **CLAassistant integration** — Verificação de contribuições open source
- **Multi-agent routing** — Uso avançado com sessões roteadas

**Satisfação Geral:** A resposta rápida da comunidade (PRs merged em 1-2 dias após criação) e a ausência de releases nos últimos dias sugerem **fase de estabilidade** pré-release.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta >7 dias

| # | Título | Criado | Atualizado | Prioridade |
|---|--------|--------|------------|------------|
| [#3395](https://github.com/sipeed/picoclaw/issues/3395) | OneBot auto-ack reaction configurável | 2026-09-27 | 2026-10-04 | 🟡 Média |
| [#3394](https://github.com/sipeed/picoclaw/issues/3394) | QQ interface desincronizada | 2026-09-26 | 2026-10-04 | 🟡 Média |
| [#3392](https://github.com/sipeed/picoclaw/issues/3392) | CLAassistant não detecta signature | 2026-09-25 | 2026-10-04 | 🟡 Média |

### PRs Abertas Sem Merge

| # | Título | Criado | Estado | Blocker? |
|---|--------|--------|--------|----------|
| [#3381](https://github.com/sipeed/picoclaw/pull/3381) | Switch Openai to responses API | 2026-09-17 | Em revisão | ⚠️ API breaking change |
| [#3396](https://github.com/sipeed/picoclaw/pull/3396) | OneBot reaction toggle | 2026-09-27 | Draft | Não |

**Ação Recomendada:**
1. Priorizar **#3382** (DingTalk panic) — bug crítico recorrente
2. Revisar **#3381** (Responses API) — impacta todos os usuários OpenAI
3. Confirmar status de **#3394** — interface QQ pode ter breaking change upstream

---

## Métricas de Saúde do Projeto

| Indicador | Valor | Status |
|-----------|-------|--------|
| Issues ativas (24h) | 4 | ✅ Normal |
| PRs fechadas (24h) | 7 | ✅ Muito ativo |
| PRs abertas (24h) | 2 | ✅ Controlled |
| Releases (24h) | 0 | 🟡 Sem movimento |
| Ratio fix/feature | 7:2 | 🔧 Foco em estabilidade |
| Tempo médio de resposta | <24h | ✅ Comunidade responsiva |

---

*Relatório gerado em 2026-10-05 00:00 UTC — Dados do GitHub sipeed/picoclaw*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-10-05

---

## 1. Panorama do Dia

O projeto IronClaw apresenta **atividade de baixa intensidade** na data de hoje. Não há issues abertas ou fechadas nas últimas 24h, indicando ausência de novos relatos de bugs, perguntas ou discussões da comunidade. O único movimento registrado são **5 pull requests de dependências**, todos originados pelo dependabot[bot], sugerindo manutenção automatizada de bibliotecas Rust e GitHub Actions. Um desses PRs foi fechado (#8078), sinalizando progresso na atualização do ecossistema tokio. O projeto aparenta estar em **estado de manutenção tranquila**, sem crises ou bloqueios aparentes.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto não publicou novas versões hoje. Isso é consistente com o padrão de atividade observada — sem grandes mudanças mergiadas, não há material para release.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados Hoje

| PR | Título | Impacto |
|----|--------|---------|
| [#8078](https://github.com/nearai/ironclaw/pull/8078) | `chore(deps): bump tokio-ecosystem group (2 updates)` | ✅ **Closed** — Atualização de `tower-http` (0.7.0 → 0.7.1) e `tokio-tungstenite` no diretório raiz. |

**Análise:** A conclusão deste PR representa **melhoria de estabilidade e segurança**, embora seja uma atualização menor. Atualizações de `tower-http` frequentemente incluem patches de segurança ou correções de performance em middleware HTTP — relevante para um projeto de agentes AI.

### PRs Abertos (4 pendentes)

| PR | Escopo | Tamanho | Risco |
|----|--------|---------|-------|
| [#8123](https://github.com/nearai/ironclaw/pull/8123) | tokio-ecosystem (3 updates) | — | Low |
| [#8114](https://github.com/nearai/ironclaw/pull/8114) | everything-else (31 updates) | **XL** | Low |
| [#8103](https://github.com/nearai/ironclaw/pull/8103) | actions (8 updates) | — | Low |
| [#7834](https://github.com/nearai/ironclaw/pull/7834) | wasm (4 updates) | L | Medium |

**Observação:** O PR #8114 com 31 atualizações de dependências requer atenção, apesar do risco baixo —，此类 update bundles podem incluir breaking changes sutis que merecem review manual.

---

## 4. Temas Quentes da Comunidade

**Nenhuma issue ou PR com comentários/reações registrado nas últimas 24h.**

Os 5 PRs presentes têm `👍: 0` e `comentários: undefined`, indicando que não houve discussão significativa. Isso sugere:
- A comunidade está passiva ou em modo de férias
- Mudanças são rotineiras (atualizações de deps) e não requerem debate
- Não há conflitos ou divergências abertas

---

## 5. Bugs e Estabilidade

**Nenhum bug reportado nas últimas 24h.**

O dashboard não registra issues abertas ou fechadas, o que é um **sinal positivo de estabilidade** — não há novos bugs críticos, crashes ou regressões emergindo. Para um projeto Rust com componentes WebAssembly (#7834 — `wasmtime`, `wit-component`), essa quietude sugere que o código base está estável.

---

## 6. Pedidos de Features e Sinais de Roadmap

**Nenhuma feature request registrada nas últimas 24h.**

A ausência de issues novas impede visibilidade sobre demandas futuras. Recomenda-se análise histórica de issues para inferir direction — dados não disponíveis neste snapshot.

---

## 7. Resumo de Feedback dos Usuarios

**Nenhum feedback captado nas últimas 24h.**

Sem issues, comentários ou reações, não há dados para análise de sentiment dos usuários. O relatório está limitado à atividade de manutenção de infraestrutura.

---

## 8. Backlog que Merece Atenção

### PRs Abertos Antigos

| PR | Idade | Prioridade |
|----|-------|------------|
| [#7834](https://github.com/nearai/ironclaw/pull/7834) | **~43 dias** (desde 2026-08-23) | ⚠️ Atenção |

**Análise:** O PR #7834 atualiza dependências WebAssembly (`wasmtime`, `wit-component`, `wit-parser`) e está aberto há mais de um mês. Atualizações de WASM runtime podem ser críticas para features de sandboxing ou execução de código externo em agentes AI. Recomenda-se:
1. Verificar se há bloqueios (comentários, CI failures)
2. Avaliar necessidade de testes adicionais antes do merge
3. Considerar priorização para garantir compatibilidade com versões recentes do bytecode Alliance tooling

### Observação Geral

Os PRs de dependências restantes (#8123, #8114, #8103) são do dependabot e devem ser revisados periodicamente para evitar acúmulo de dívida de dependências. O PR #8114 com 31 pacotes merece review cuidadoso.

---

## Indicadores de Saúde do Projeto

| Métrica | Status | Observação |
|---------|--------|------------|
| Atividade de issues | 🟢 Saudável | Zero issues = zero problemas reportados |
| PRs de manutenção | 🟡 Rotina | 5/5 PRs são updates de deps (automação) |
| PRs aguardando merge | 🟡 Moderado | 4 abertos, nenhum bloqueio aparente |
| Tempo de resposta | ⚪ N/A | Sem interações comunitárias hoje |
| Estabilidade | 🟢 Forte | Sem bugs ou regressões reportadas |

---

*Relatório gerado em 2026-10-05. Dados limitados ao último período de 24h.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do Projeto CoPaw — 2026-10-05

---

## 1. Panorama do Dia

O projeto **CoPaw** (fork de QwenPaw) apresenta alta atividade de bug reports no dia de hoje, com **11 issues ativas** e **7 PRs em desenvolvimento**, porém **nenhuma release ou merge** foi realizada nas últimas 24h. A situação é marcadamente focada em **estabilidade e robustez**: múltiplos bugs críticos de vazamento de memória (#7722), congelamento por plugins (#7840), e falhas em funcionalidades de UI (#8105) dominam a fila de issues. A comunidade demonstra engajamento moderado com 22 comentários totalizados nas issues mais recentes. O pipeline de PRs está ativo com 6 contribuições abertas, incluindo um merge em revisão (#7299), sinalizando progresso em direção a uma possível release corretiva.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto não publicou novas versões desde o último registro disponível. As versões mais recentes mencionam **2.2.2b4** em issues de bugs, sugerindo que uma versão beta está em circulação, porém sem changelog formalizado.

> ⚠️ **Nota:** A ausência de releases formais pode impactar usuários em produção que dependem de versões estáveis.

---

## 3. Progresso do Projeto

### PR Merged/Closed (1)
| # | Título | Status | Impacto |
|---|--------|--------|---------|
| [#7299](https://github.com/agentscope-ai/QwenPaw/pull/7299) | `fix(console): reject conflicting chat payloads` | **CLOSED** (Under Review) | Corrige race condition onde payloads de chat conflitantes eram aceitos com HTTP 200 sem execução, causando perda de mensagens. |

### PRs Abertos em Desenvolvimento (6)

| # | Título | Tamanho | Contribuidor | Relevância |
|---|--------|---------|--------------|------------|
| [#8108](https://github.com/agentscope-ai/QwenPaw/pull/8108) | `fix(console): make lazy-route loading retryable after chunk failures` | S | LUOSENGWA | Recuperação de boot após falhas de rede/CDN |
| [#8107](https://github.com/agentscope-ai/QwenPaw/pull/8107) | `fix(plugins): sanitize pip subprocess env` | S | Tlrenhb | Corrige vazamento de `PIP_TARGET` em containers |
| [#7542](https://github.com/agentscope-ai/QwenPaw/pull/7542) | `feat(chats): add scroll-back message pagination` | XXXL | auwc | Feature Request prioritária — paginação de histórico |
| [#8096](https://github.com/agentscope-ai/QwenPaw/pull/8096) | `fix(providers): surface finish_reason length truncation` | S | wxhking | Melhoria de observabilidade em truncamento de respostas |
| [#7738](https://github.com/agentscope-ai/QwenPaw/pull/7738) | `fix(providers): filter unrecognized kwargs before OpenAI completions.create()` | — | lumenfield | Compatibilidade com middleware que injeta kwargs |
| [#8102](https://github.com/agentscope-ai/QwenPaw/pull/8102) | `fix(console): recover boot from failed entry loads with watchdog` | M | wxhking | Recuperação de boot após cache stale |

**Análise:** O PR #7542 (paginação de mensagens) representa a contribuição mais substancial em tamanho (XXXL), alinhando-se com a demanda frequente por gestão de contexto longo. Os PRs #8108 e #8102 formam um par que endereça resiliência do console em cenários de falha de rede.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (por comentários)

| # | Título | Comentários | Tipo | Prioridade |
|---|--------|-------------|------|------------|
| [#7722](https://github.com/agentscope-ai/QwenPaw/issues/7722) | Memory exhaustion compounds through three paths | 6 | Bug Crítico | 🔴 Alta |
| [#7840](https://github.com/agentscope-ai/QwenPaw/issues/7840) | Plugins share the host event loop — freezes instance | 5 | Bug Crítico | 🔴 Alta |
| [#7026](https://github.com/agentscope-ai/QwenPaw/issues/7026) | deepseek-v4-pro auto-injects chat_template_kwargs without extra_body | 3 | Bug | 🟡 Média |
| [#7599](https://github.com/agentscope-ai/QwenPaw/issues/7599) | MissingSessionID error with OpenCode GO models | 3 | Bug | 🟡 Média |

### Análise dos Temas

1. **Estabilidade de Memória e Eventos (#7722, #7840):** A comunidade demonstra preocupação significativa com a arquitetura de isolamento. O issue #7722 documenta três caminhos de exaustão de memória (buffers de stream, stacking de instâncias keep-alive, gate evasion), enquanto #7840 expõe a ausência de sandboxing para plugins sincronizados bloqueando o event loop. Juntos, sugerem uma dívida técnica em **isolamento e limites de recursos**.

2. **Integração com Provedores (#7026, #7599):** Questões de compatibilidade com APIs externas (deepseek-v4-pro, OpenCode GO) indicam gaps na camada de compatibilidade OpenAI.

3. **UX/UI do Console (#8094, #8105):** Bugs no boot splash e falha no fluxo de aprovação de ferramentas (#8105) representam fricção direta na experiência do usuário operacional.

---

## 5. Bugs e Estabilidade

### Bugs Críticos (Bloqueantes)

| # | Severidade | Título | Criado | Atualizado |
|---|------------|--------|--------|------------|
| [#7722](https://github.com/agentscope-ai/QwenPaw/issues/7722) | 🔴 Crítica | Memory exhaustion — 3 paths (stream buffers, keep-alive stacking, doom-loop evasion) | 2026-09-12 | 2026-10-04 |
| [#7840](https://github.com/agentscope-ai/QwenPaw/issues/7840) | 🔴 Crítica | Plugins freeze entire instance with synchronous calls | 2026-09-17 | 2026-10-04 |

**Impacto:** Ambos os bugs são de **longa duração** (>3 semanas desde criação) e **afetam deployments em produção**. #7722 foi atualizado em 2026-10-04, indicando atividade, porém permanece aberto.

### Bugs Altos (Degradação Significativa)

| # | Título | Área | Atualizado |
|---|--------|------|------------|
| [#7026](https://github.com/agentscope-ai/QwenPaw/issues/7026) | deepseek-v4-pro chat_template_kwargs injection error | Providers | 2026-10-04 |
| [#7599](https://github.com/agentscope-ai/QwenPaw/issues/7599) | MissingSessionID with OpenCode GO models | API Integration | 2026-10-04 |
| [#8094](https://github.com/agentscope-ai/QwenPaw/issues/8094) | Boot splash has no retry — stale WebView2 cache blocks boot | Console | 2026-10-04 |
| [#8092](https://github.com/agentscope-ai/QwenPaw/issues/8092) | Content-inspection false positives kill turns | Observability | 2026-10-04 |
| [#8105](https://github.com/agentscope-ai/QwenPaw/issues/8105) | Tool approval buttons — both approve/reject execute reject | UI | 2026-10-04 |
| [#8106](https://github.com/agentscope-ai/QwenPaw/issues/8106) | Plugin install fails in container — PIP_TARGET leak + stdlib shadowing | Plugins | 2026-10-04 |
| [#8101](https://github.com/agentscope-ai/QwenPaw/issues/8101) | Deep links `/chat/<id>` fail across agents | Navigation | 2026-10-04 |

### Regressões Identificadas

- **#8105:** Fluxo de aprovação de ferramentas completamente quebrado — impacto direto em workflows que dependem de gates manuais.
- **#8094/#8102:** Cache de WebView2 pós-update pode permanentemente bloquear o boot do console.

**Média de bugs por dia:** ~2-3 issues de bug abertas. A taxa de resolução não acompanha a abertura, sugerindo acúmulo de backlog.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Recém-Solicitadas

| # | Título | Tipo | Sinal Estratégico |
|---|--------|------|-------------------|
| [#8103](https://github.com/agentscope-ai/QwenPaw/issues/8103) | `notify user when daemon silently falls back to a different model` | Observability | Dashboarding e transparência para usuários |
| [#7542](https://github.com/agentscope-ai/QwenPaw/pull/7542) | `add scroll-back message pagination` | UX/Chat | Gestão de conversas longas |
| [#8104](https://github.com/agentscope-ai/QwenPaw/issues/8104) | `OpenCode API need new header x-opencode-session for each chat session` | API | Suporte a sessões multi-chat |

### Análise de Roadmap

1. **Observabilidade (#8103):** A demanda por notificações de fallback de modelo indica que a operação em produção com chains de fallback múltiplos é um caso de uso real e crescente. Este item deve ser priorizado para reduções de suporte.

2. **Gestão de Contexto (#7542):** A feature de paginação de mensagens históricas addressa uma dor real em sessões longas onde contexto é compactado. O PR em tamanho XXXL sugere complexidade, mas alto valor para retenção de usuários.

3. **Isolamento de Plugins (#7840, #8106):** A ausência de sandboxing é um risco arquitetural. Mesmo não sendo explicitamente uma "feature request", a comunidade está clamando por melhor isolamento — isto deve ser tratado como feature de robustez no roadmap.

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais

| Dor | Manifestação | Frequência | Severidade |
|-----|--------------|------------|------------|
| **Instabilidade em produção** | Memory leaks, freezes, OOM crashes | Múltiplos reports | 🔴 Crítica |
| **Falhas silenciosas** | Fallback de modelo sem notificação, truncated responses indistinguíveis | 2 issues separadas | 🟡 Média-Alta |
| **Incompatibilidade de plugins** | Plugins sincronizados bloqueiam tudo, falha de instalação em containers | 2 issues separadas | 🔴 Alta |
| **UX do Console** | Boot bloqueado, botões de aprovação quebrados, deep links falhando | 3+ issues | 🟡 Média |

### Cenários de Uso Reportados

- **DevOps em produção:** Usuários reportam cenários de fallback automático (12 modelos, 4 provedores) onde o modelo substituto é transparente — resultando em confusão sobre qual IA respondeu.
- **Container deployment com supervisord:** Ambiente isolado expõe bugs de environment que não aparecem em pip install padrão.
- **Telegram como canal:** Integração funcional, mas expõe falhas de content-inspection em gateways Ali-style.

### Índice de Satisfação Estimado

> ⚠️ **Alerta:** Com 7+ bugs críticos/altos abertos, incluindo memory leaks e freezes, a satisfação em deployments de produção está **comprometida**. A ausência de releases corretivas nas últimas 24h sugere gargalo no processo de review/merge.

---

## 8. Backlog que Merece Atenção

### Issues Antigas Sem Resposta ou Progresso

| # | Idade | Título | Status | Recomendação |
|---|-------|--------|--------|--------------|
| [#7026](https://github.com/agentscope-ai/QwenPaw/issues/7026) | ~7 semanas | deepseek-v4-pro chat_template_kwargs injection | Aberta, 3 comentários | Priorizar — bloqueia integração com provider específico |
| [#7722](https://github.com/agentscope-ai/QwenPaw/issues/7722) | ~3 semanas | Memory exhaustion (3 paths) | Aberta, 6 comentários | **Crítica** — requer triagem imediata |
| [#7840](https://github.com/agentscope-ai/QwenPaw/issues/7840) | ~2.5 semanas | Plugin event loop freeze | Aberta, 5 comentários | **Crítica** — risco arquitetural |

### PRs Enroscados em Review

| # | Idade | Título | Bottleneck |
|---|-------|--------|------------|
| [#7299](https://github.com/agentscope-ai/QwenPaw/pull/7299) | ~6 semanas | Reject conflicting chat payloads | Status: "Under Review" — não mergeado |
| [#7738](https://github.com/agentscope-ai/QwenPaw/pull/7738) | ~3 semanas | Filter unrecognized kwargs | Status: "Under Review" |

### Priorização Recomendada

1. **Imediata (0-7 dias):** Resolver ou assignar owner para #7722 e #7840. São bugs de estabilidade que afetam todos os usuários de produção.
2. **Curto prazo (7-14 dias):** Merge de #7299 (corrige race condition de chat) e #7738 (compatibilidade OpenAI).
3. **Médio prazo (14-30 dias):** Feature de observabilidade #8103 e paginação #7542 para melhorar experiência de uso longo.

---

## Métricas Consolidada — 2026-10-05

| Indicador | Valor | Tendência |
|-----------|-------|-----------|
| Issues abertas/ativas (24h) | 11 | → Estável |
| PRs abertos | 6 | → Estável |
| PRs merged/fechados (24h) | 1 | ↓ Queda |
| Releases | 0 | → Estável |
| Comentários totais (issues recentes) | 22 | ↑ Alta |
| Bugs críticos abertos | 2 | ⚠️ Alerta |
| Bugs altos abertos | 7 | ⚠️ Alerta |
| Tempo médio de resposta (issues) | >3 semanas | ⚠️ Alerta |

---

*Relatório gerado automaticamente com base nos dados do GitHub de [CoPaw/QwenPaw](https://github.com/agentscope-ai/QwenPaw) em 2026-10-05.*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-10-05

---

## 1. Panorama do Dia

O projeto ZeroClaw apresenta **alta atividade** nesta data, com 42 issues ativas e 50 PRs em desenvolvimento. Não houve lançamentos nas últimas 24h, mas três PRs foram merged/fechados. A comunidade está particularmente engajada em correções de segurança e estabilidade, com pelo menos **6 bugs classificados como P0/P1** exigindo atenção imediata — incluindo uma falha crítica de perda de dados na configuração e um problema de segurança no sandbox do macOS. O pipeline de features para as versões v0.8.6 e v0.9.0 continua em progresso ativo, com trackers bem definidos.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24h.** O projeto está em fase de preparação para as versões v0.8.6 e v0.9.0, conforme evidenciado pelo tracker [Issue #7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432).

> **Nota:** Os trackers de release indicam que v0.8.6 deve conter o trabalho restante de Phase 2 do runtime, e v0.9.0 a separação do gateway (Phase 3). Diversos PRs estão etiquetados com `release:v0.8.6`.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados nas últimas 24h (3 total)

Não há PRs explicitamente marcados como "merged" nos dados fornecidos. As métricas indicam 3 PRs com status atualizado para merged/fechado. Os PRs mais recentes mostram contribuições significativas em:

| PR | Título | Área | Tamanho | Status |
|---|---|---|---|---|
| [#11532](https://github.com/zeroclaw-labs/zeroclaw/pull/11532) | fix(runtime): cap the structured Agent system prompt | Runtime | S | Aberto |
| [#11530](https://github.com/zeroclaw-labs/zeroclaw/pull/11530) | fix(tunnel): publish WSS and enrollment via tailscale serve | Tunnel | XL | Aberto |
| [#11531](https://github.com/zeroclaw-labs/zeroclaw/pull/11531) | fix(tunnel): report the URL tailscale actually serves | Tunnel | XS | Aberto |
| [#11529](https://github.com/zeroclaw-labs/zeroclaw/pull/11529) | fix(zerocode): use local Linux clipboard writers | ZeroCode | XL | Aberto |

### PRs em Destaque (alto impacto potencial)

- **[#10768](https://github.com/zeroclaw-labs/zeroclaw/pull/10768)** — `feat(channels): add Sendblue iMessage/SMS channel` — Adiciona canal nativo para iMessage/SMS via Sendblue, permitindo uso em plataformas não-Apple. Tamanho XL.
- **[#10611](https://github.com/zeroclaw-labs/zeroclaw/pull/10611)** — `feat(providers): adapt Anthropic and Bedrock to adaptive-thinking Claude models` — Suporte para modelos Claude com pensamento adaptativo (tamanho XL).
- **[#9214](https://github.com/zeroclaw-labs/zeroclaw/pull/9214)** — `feat(eval): live execution mode with sandboxed tool surface` — Novo modo de avaliação com superfície de ferramentas em sandbox.
- **[#9320](https://github.com/zeroclaw-labs/zeroclaw/pull/9320)** — `fix(cron): bound agent job runs with a wall-clock timeout` — Correção crítica de cron jobs com timeout.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários)

| Issue | Título | Comentários | 👍 | Prioridade | Área |
|---|---|---|---|---|---|
| [#9965](https://github.com/zeroclaw-labs/zeroclaw/issues/9965) | Harden runtime-written executable test fixtures | 14 | 0 | P1 | Tests/Runtime |
| [#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) | Define local_small runtime profile | 9 | 2 | P2 | Runtime/Config |
| [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) | Tracker: Runtime and gateway delivery | 6 | 0 | P2 | Architecture |
| [#10495](https://github.com/zeroclaw-labs/zeroclaw/issues/10495) | Config::save() data loss | 5 | 0 | P0 | Config |
| [#11420](https://github.com/zeroclaw-labs/zeroclaw/issues/11420) | SQLite rewrites created_at on each turn | 4 | 0 | P1 | Memory/Runtime |

### Análise dos Temas

1. **Testes e Runtime (#9965)** — A issue com mais discussão (14 comentários) aborda o endurecimento de test fixtures que escrevem executáveis em ambiente paralelo. Este é um tópico técnico interno, indicando foco em qualidade.

2. **Perfis de Runtime Compactos (#5287)** — Feature request com 2 👍 foca em modo local para modelos pequenos, reduzindo "prompt bloat" e prevenindo vazamento de instruções internas. Sinais claros de demanda por usabilidade local-first.

3. **Arquitetura de Gateway (#7432)** — Tracker de longa duração para a separação gateway/runtime nas versões v0.8.6/v0.9.0. Evidencia roadmap técnico bem definido.

---

## 5. Bugs e Estabilidade

### Por Severidade

#### 🔴 P0 — Críticos (2 issues)

| Issue | Título | Severidade | Status |
|---|---|---|---|
| [#10495](https://github.com/zeroclaw-labs/zeroclaw/issues/10495) | Config::save() pode substituir config.toml por arquivo vazio | S0 - Data loss / Security | in-progress |
| [#11525](https://github.com/zeroclaw-labs/zeroclaw/issues/11525) | quickstart falha no Android/Termux | S1 - Workflow blocked | Aberto |

**#10495 — ANÁLISE:** Bug severo onde `Config::save()` substitui arquivo de 109KB por apenas 702 bytes, perdendo configuração de 25 agentes. Risco de segurança + perda de dados. Afeta todos os usuários com setups existentes.

**#11525 — ANÁLISE:** Falha ao criar agentes no Android 16/Termux. Impede onboarding em plataforma móvel crescente.

#### 🟠 P1 — Altos (7 issues)

- [#9965](https://github.com/zeroclaw-labs/zeroclaw/issues/9965) — Test fixtures de executáveis sob gate parallel
- [#11420](https://github.com/zeroclaw-labs/zeroclaw/issues/11420) — SQLite reescreve created_at, perdendo timestamps por mensagem
- [#10673](https://github.com/zeroclaw-labs/zeroclaw/issues/10673) — Falha persistir turns ACP no daemon RPC
- [#10876](https://github.com/zeroclaw-labs/zeroclaw/issues/10876) — gateway config writes não chegam à autoridade de auth
- [#10536](https://github.com/zeroclaw-labs/zeroclaw/issues/10536) — **macOS Seatbelt ignora allowed_roots para shell** ⚠️ Segurança
- [#10550](https://github.com/zeroclaw-labs/zeroclaw/issues/10550) — DNS resolution em skills HTTP

#### 🟡 P2 — Médios (20+ issues)

Incluindo:
- [#11416](https://github.com/zeroclaw-labs/zeroclaw/issues/11416) — Status "thinking" do Slack sumiu desde v0.8.5
- [#11484](https://github.com/zeroclaw-labs/zeroclaw/issues/11484) — ZeroCode desabilita safeguards contra ferramentas repetitivas
- [#11517](https://github.com/zeroclaw-labs/zeroclaw/issues/11517) — Web chat: reload perde prompt do usuário
- [#11515](https://github.com/zeroclaw-labs/zeroclaw/issues/11515) — Cost ledger descarta registros corrompidos

#### 🔵 P3 — Baixos

- [#10702](https://github.com/zeroclaw-labs/zeroclaw/issues/10702) — token-budget trimming para no limite
- [#11418](https://github.com/zeroclaw-labs/zeroclaw/issues/11418) — Feature "Copy" não funciona

### Alertas de Segurança

| Issue | Descrição | Risco |
|---|---|---|
| [#10536](https://github.com/zeroclaw-labs/zeroclaw/issues/10536) | macOS Seatbelt ignora allowed_roots configurados | High |
| [#10876](https://github.com/zeroclaw-labs/zeroclaw/issues/10876) | Writes de auth no gateway não chegam à autoridade | High |
| [#10495](https://github.com/zeroclaw-labs/zeroclaw/issues/10495) | Perda de config (dados + segurança) | High |
| [#10728](https://github.com/zeroclaw-labs/zeroclaw/issues/10728) | npm audit: vulnerabilidade js-yaml high | Medium |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em Desenvolvimento (in-progress)

| Issue | Título | Prioridade | Área |
|---|---|---|---|
| [#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) | Definir perfil runtime local_small compacto | P2 | Runtime |
| [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) | Tracker: Runtime e gateway delivery v0.8.6/v0.9.0 | P2 | Architecture |
| [#7951](https://github.com/zeroclaw-labs/zeroclaw/issues/7951) | Effort-based local/cloud model routing | P2 | Provider |
| [#8383](https://github.com/zeroclaw-labs/zeroclaw/issues/8383) | Mostrar contexto runtime ativo no ZeroCode Dashboard | P2 | ZeroCode |
| [#10892](https://github.com/zeroclaw-labs/zeroclaw/issues/10892) | Publicar gerações canônicas de config | P2 | Config |
| [#8527](https://github.com/zeroclaw-labs/zeroclaw/issues/8527) | Route grandes arquivos via attachments (icebox) | P2 | Channel |

### Sinais de Demanda do Mercado

1. **Local-first e privacidade (#5287, #7951)** — Forte interesse em modos locais para modelos pequenos, com roteamento automático entre local/cloud baseado em esforço. Indica demanda corporativa por edge computing.

2. **Melhor UX para canais (#8527)** — Pedido para enviar arquivos grandes via attachments em vez de texto, melhorando experiência em canais como Slack/Discord.

3. **ZeroCode improvements (#8383, #10301, #11492)** — Múltiplas issues pedindo melhor descoberta de ações, navegação de histórico e usabilidade em terminais SSH.

### PRs de Feature em Review

- [#10698](https://github.com/zeroclaw-labs/zeroclaw/pull/10698) — Guided cron schedule editor (web)
- [#10768](https://github.com/zeroclaw-labs/zeroclaw/pull/10768) — Sendblue iMessage/SMS channel
- [#11122](https://github.com/zeroclaw-labs/zeroclaw/pull/11122) — Native Discord replies e reply context

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Categoria | Descrição | Impacto |
|---|---|---|
| **Onboarding quebrado** | quickstart falha em Android/Termux, usuários não conseguem começar | Bloqueante |
| **Perda de configuração** | Config::save() sobrescreve config existente com arquivo vazio | Crítico - dados |
| **UX de terminal** | ZeroCode difícil de navegar via SSH, scroll não funciona, Copy não funciona | Degradado |
| **Integração Slack** | Status "thinking" sumiu, usuários não sabem se agente está trabalhando | Experiência |
| **Persistência web** | Reload durante turno perde prompt do usuário | Degradado |
| **Custos não granulares** | session_id de lifetime impede separar gastos por conversa | Observabilidade |

### Cenários de Uso Identificados

1. **ZeroCode em terminais remotos (SSH)** — Usuários querem usar Code pane para recuperação de sessões, mas UX é deficiente.
2. **Multi-plataforma** — Termux/Android emerge como caso de uso, indicando interesse mobile/tablet.
3. **Operadores com múltiplos agentes** — Config de 25 agentes indica deployments complexos.
4. **Avaliação de modelos** — Interesse em eval com sandbox (`#9214`).

### Indicadores de Satisfação/Frustração

- **Positivo:** Comunidade ativa (42 issues, 50 PRs), contribuidores externos (danperks, jstar0, vadelma-agent, IftekharUddin)
- **Frustrante:** Bugs de estabilidade em Config (P0), segurança em macOS, problemas de persistência
- **Neutro:** Features em "parking-lot" e "icebox" indicam priorização em discussão

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta/Progresso

| Issue | Título | Criado | Última Atualização | Status |
|---|---|---|---|---|
| [#9190](https://github.com/zeroclaw-labs/zeroclaw/issues/9190) | Provider API key rotation não aplica chaves alternativas | 2026-07-20 | 2026-10-04 | no-stale |
| [#7951](https://github.com/zeroclaw-labs/zeroclaw/issues/7951) | Effort-based local/cloud routing | 2026-06-19 | 2026-10-04 | parking-lot |
| [#8527](https://github.com/zeroclaw-labs/zeroclaw/issues/8527) | Route arquivos grandes via attachments | 2026-06-30 | 2026-10-04 | icebox |

### PRs Estagnados (stale-candidate / needs-author-action)

| PR | Título | Aguardando |
|---|---|---|
| [#10698](https://github.com/zeroclaw-labs/zeroclaw/pull/10698) | Guided cron schedule editor | Author action |
| [#10768](https://github.com/zeroclaw-labs/zeroclaw/pull/10768) | Sendblue iMessage/SMS channel | Author action |
| [#10504](https://github.com/zeroclaw-labs/zeroclaw/pull/10504) | Typed stop taxonomy | Author action |
| [#10611](https://github.com/zeroclaw-labs/zeroclaw/pull/10611) | Adaptive-thinking Claude models | Author action |
| [#9320](https://github.com/zeroclaw-labs/zeroclaw/pull/9320) | Cron bounded timeout | Author action |

### Recomendações Prioritárias

1. **🔴 Imediato:** Resolver #10495 (perda de config) e #11525 (onboarding Android)
2. **🟠 Esta semana:** Revisar PRs aguardando author action que estão em stale-candidate
3. **🟡 Esta release:** Garantir que tracker #7432 (v0.8.6) seja concluído com as correções de segurança (#10536, #10876)

---

## Métricas Resumidas

| Indicador | Valor | Observação |
|---|---|---|
| Issues ativas | 42 | Alta atividade |
| PRs em aberto | 47 | Pipeline robusto |
| PRs merged/fechados (24h) | 3 | Ritmo moderado |
| Releases (24h) | 0 | Preparando para v0.8.6 |
| Bugs P0/P1 | 9 | Requerem atenção urgente |
| Issues com alta discussão | 5+ | Comunidade engajada |
| PRs aguardando author | 5+ | Risco de estagnação |

---

*Relatório gerado automaticamente com base nos dados do GitHub de zeroclaw-labs/zeroclaw em 2026-10-05.*

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*