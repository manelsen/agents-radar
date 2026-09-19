# Resumo diário do ecossistema de agentes de IA 2026-09-20

> Issues: 0 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-09-19 22:03 UTC

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

**Data de Referência:** 2026-09-20  
**Projetos Analisados:** 7 (incluindo referência NullClaw)

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **dois polos distintos de atividade** em 20 de setembro de 2026. De um lado, **ZeroClaw e Hermes Agent** lideram em volume de PRs e issues atualizados (50+ cada), sinalizando projetos em fase de maturação acelerada com foco em segurança e estabilidade. **NanoBot e CoPaw** ocupam o segundo nível de intensidade, com 28 e 17 itens atualizados respectivamente, concentrando-se em correções de bugs críticos e expansão de provedores. **IronClaw, PicoClaw e NullClaw** demonstram atividade reduzida, sugerindo ciclos de desenvolvimento mais longos ou equipes menores. A ausência quase total de releases formais em 24h indica que todo o ecossistema está em режим de integração de PRs pendentes, com novas versões provavelmente iminentes. O tema transversal mais emergente é **segurança** — três projetos (NanoBot, Hermes Agent, ZeroClaw) possuem bugs de severidade S0/P1 relacionados a bypasses de sandbox, approval gates e классификаторы de risco.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs Abertos | PRs Merged (24h) | Releases | Saúde | Bug Crítico |
|---------|--------------|-------------|------------------|----------|-------|-------------|
| **ZeroClaw** | 34 | ~50 | 0 | 0 | 🔴 S0×3 | Git bypass, unattended agents |
| **Hermes Agent** | 50 | ~50 | 41 | 0 | 🟡 Estável | Windows processos órfãos |
| **NanoBot** | 1 | 21 | 7 | 0 | 🟡 Moderada | Workspace symlink bypass (113d) |
| **CoPaw** | 10 | 7 | 0 | 0 | 🟡 Moderada | DeepSeek rejections (4×) |
| **IronClaw** | 0 | 2 | 0 | 0 | ⚪ Estável | Gmail/Calendar OAuth WebUI |
| **PicoClaw** | 1 | 0 | 1 | 0 | 🔴 Infra | TLS expirado (8d) |
| **NullClaw** | 0 | 0 | 0 | 0 | — | N/A (referência) |

**Observação:** ZeroClaw e Hermes Agent dominam em volume, mas nenhum projeto publicou releases formais. A taxa de merge do Hermes Agent (41 PRs/24h) é notavelmente superior aos pares.

---

## 3. Posicionamento do Projeto Principal

### ZeroClaw — Líder em Complexidade e Segurança

**Vantagens frente aos pares:**
- **Segurança mais madura:** Implementação de PKCE, enrollment cross-surface, e approval gates que outros projetos ainda estão projetando
- **Escala de operação:** 9 PRs XL simultâneos em pipeline, indicando equipe maior e capacidade de-parallelização
- **Roadmap documentado:** Tracker oficial de v0.8.6/v0.9.0 com fases claras, raro no ecossistema

**Diferenças técnicas:**
- Arquitetura baseada em **gateway separation** (Phase 3)
- Foco em **delegation e sub-agents** com visibilidade de progresso
- Sistema de permissões shell V1 (RFC #7155) em desenvolvimento ativo

**Tamanho da comunidade:**
- Volume de issues/PRs (50+ each/24h) indica **base de contribuidores ativa e diversificada**
- RFCs abertas em 2 dias demonstra maturidade de governança técnica

### Hermes Agent — runner-up em Volume

**Vantagens:**
- Maior taxa de merge do ecossistema (41 PRs/24h)
- Desktop Electron com plugin SDK wishlist
- Suporte a modelos locais via LM Studio

**Lacunas:**
- **Windows como cidadã de segunda:** 5 bugs Windows vs. foco predominante em macOS
- Integração Nous-Enterkey travada há meses (#88584, 120 comentários)

---

## 4. Focos Técnicos Compartilhados

### 🔴 Segurança — Preocupação Universal

| Projeto | Vulnerabilidade | Severidade |
|---------|-----------------|------------|
| **ZeroClaw** | Git write verbs bypass classifier via `-C`/`--git-dir` | S0 |
| **ZeroClaw** | `--attr-source` oculta subcomandos mutantes | S0 |
| **ZeroClaw** | Agentes unattended sem ApprovalManager | S0 |
| **NanoBot** | ExecTool workspace bypass via symlinks | P1 (113d sem fix) |
| **CoPaw** | Kimi-code ACP runner bypasses boundary checks | Crítica |
| **Hermes** | Path traversal em hint files (#116430) | P2 |

**Implicação:** O ecossistema está maduro o suficiente para ter problemas de sandboxing sofisticados (symlinks, opções git, path traversal), mas as correções estão atrasadas — especialmente NanoBot com bug P1 aberto há 113 dias.

### 📦 Expansão de Provedores — NanoBot, Hermes, CoPaw

| Projeto | Providers em desenvolvimento |
|---------|------------------------------|
| **NanoBot** | aimlapi.com, SenseNova (商汤日日新) |
| **Hermes** | Codex, LM Studio (local) |
| **CoPaw** | DeepSeek (com problemas de rejeição) |

**Padrão:** Demanda por integração com provedores não-anglofônicos (chineses) e gateways alternativos (aimlapi) indica mercado em fragmentação de provedores.

### 🖥️ Interface Web e UX — NanoBot, Hermes, CoPaw, ZeroClaw

Todos os quatro projetos principais possuem PRs/issues abertos relacionados a:
- Localização/i18n (NanoBot: 10 locales, Hermes: Persian BiDi)
- Recovery de erros de UI (CoPaw: React errors, Hermes: desktop)
- Settings unificados e ProviderPicker

---

## 5. Análise de Diferenciação

| Dimensão | ZeroClaw | Hermes Agent | NanoBot | CoPaw |
|----------|----------|--------------|---------|-------|
| **Foco primário** | Segurança enterprise, gateway separation | Desktop-first, cross-platform | Providers, WebUI | Agentes e console |
| **Público-alvo** | DevOps, SOC teams, múltiplos agentes | Desenvolvedores individuais | Usuários power multi-provider | Equipes com plugins |
| **Arquitetura** | Modular com RPC nativo + peercred | Electron desktop + TUI | Python + Bun webui | Python agents + console |
| **Dívida técnica** | PR queue XL (9×) | Windows bugs (5×) | Segurança (113d) | DeepSeek rejections (4×) |
| **Diferencial** | Shell V1 permissions, delegation | Plugin SDK, YouTube skill | Provider gateway | Agent console redesign |

**ZeroClaw** diferencia-se por ser o único projeto com arquitetura formal de gateway e RFCs ativas. **Hermes** é o único com estratégia desktop-first explícita. **NanoBot** tem a estratégia de provedores mais agressiva. **CoPaw** concentra-se em estabilidade de integração com provedores terceiros.

---

## 6. Tração e Maturidade da Comunidade

### Iteration Velocity (24h)

| Tier | Projeto | Merges | Indicador |
|------|---------|--------|-----------|
| 🥇 Rápido | Hermes Agent | 41 PRs | Consolidando qualidade |
| 🥈 Moderado | NanoBot | 7 PRs | Bug fixes + features |
| 🥉 Estagnado | CoPaw | 0 PRs | Bug reports sem resolution |
| ⚠️ Estagnado | ZeroClaw | 0 PRs | Queue de 9 XL PRs |
| 🔴 Crítico | PicoClaw | 1 PR | TLS expirado |

### Estabilidade Percebida

| Projeto | Tendência | Fatores |
|---------|-----------|---------|
| **Hermes Agent** | 📈 Consolidando | 41 merges, 12 issues fechadas, features estáveis |
| **NanoBot** | ➡️ Estável com dívida | 2 PRs de segurança merged, mas P1 de 113d |
| **CoPaw** | 📉 Fragilizado | 4 bugs críticos, 0 merges, 4 PRs abertas |
| **ZeroClaw** | ➡️ Complexo | Volume alto mas 3×S0 sem fix, 9×XL em queue |
| **IronClaw** | ➡️ Maturando | 2 PRs XL em revisão (~40d), foco em autenticação |

---

## 7. Sinais de Tendência

### 7.1 Fragmentação de Provedores de IA
**Evidência:**
- NanoBot: aimlapi.com (1000+ modelos), SenseNova
- CoPaw: DeepSeek rejeições constantes (indicam instabilidade de API)
- Hermes: Codex provider errors, LM Studio (local)

**Interpretação:** O mercado move-se para multi-provider heterogêneo. Usuários precisam de gateways abstratos, não vendor lock-in. NanoBot está posicionado para capturar esse mercado.

### 7.2 Segurança como Diferencial Competitivo
**Evidência:**
- 3 projetos com bugs S0/P1 simultâneos
- NanoBot: security PRs finally merged após meses
- ZeroClaw: Shell V1 permissions RFC

**Interpretação:** À medida que agentes operam em ambientes production (cron, heartbeat, unattended), a segurança deixa de ser feature e torna-se requisito table-stakes. ZeroClaw lidera nessa frente.

### 7.3 Desktop como Plataforma de Extensão
**Evidência:**
- Hermes: Desktop plugin SDK wishlist (9 comentários)
- Hermes: Electron hardening (#99784)
- IronClaw: IdentyClaw Passport para agents processless

**Interpretação:** O desktop emerge como plataforma intermediária entre CLI e cloud, com demanda por plugins, extensões e UI rica.

### 7.4 i18n e Mercados Não-Anglófonos
**Evidência:**
- NanoBot: 10 locales para agent activity
- Hermes: Persian BiDi com Vazirmatn
- NanoBot: SenseNova (provedor chinês)

**Interpretação:** A base de usuários está globalizando. Provedores chineses e localização de UI são diferenciadores crescentes.

### 7.5 Windows como Second-Class Citizen
**Evidência:**
- Hermes: 5 bugs Windows específicos
- ZeroClaw: clear_stale_tmp_packs() EACCES silenciado no Windows
- SSH Windows: limite de 8191 caracteres ignorado

**Interpretação:** O ecossistema é predominantemente macOS-first. Windows recebe menos atenção de QA, criando oportunidades para projetos que investirem em parity.

---

## Recomendações para Decisores

| Stakeholder | Recomendação |
|-------------|--------------|
| **Desenvolvedores** | Priorizem Hermes Agent para desktop-first; NanoBot para multi-provider flexibility |
| **DevOps/SOC** | Avaliem ZeroClaw para segurança enterprise, mas monitorem debt de 3×S0 |
| **Produtividade individual** | NanoBot e Hermes oferecem estabilidade similar; NanoBot tem mais providers |
| **Mercado asiático** | NanoBot com SenseNova é a única opção nativa disponível |
| **Evitar** | PicoClaw (TLS expirado + 8d sem resposta), CoPaw (4 bugs críticos sem merge) |

---

*Relatório gerado com base em dados agregados de GitHub em 2026-09-20.*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-09-20

---

## 1. Panorama do Dia

O projeto NanoBot apresenta alta atividade de desenvolvimento com **28 PRs atualizados nas últimas 24h** (21 abertos, 7 merged/fechados), indicando um ritmo intenso de entregas. Nenhum release foi publicado hoje. Um ponto de atenção é a **issue de segurança #4072** (bypass de workspace via symlinks relativos) que permanece aberta desde maio, aguardando correção. Dois PRs críticos de segurança (#4668 e #4667) foram finalmente merged após meses em aberto, reforçando a postura de segurança do projeto. A comunidade está ativamente expandindo provedores de IA (aimlapi.com, SenseNova) e refinando a interface web com melhorias de UX.

---

## 2. Lançamentos

**Nenhum release publicado nas últimas 24h.**

O projeto não emitiu novas versões. Os últimos lançamentos devem ser consultados no repositório GitHub diretamente.

---

## 3. Progresso do Projeto

Três PRs importantes foram fechados/merged nas últimas 24h:

### PRs Merged/Fechados

| # | Título | Severidade | Impacto |
|---|--------|------------|---------|
| [#4668](https://github.com/HKUDS/nanobot/pull/4668) | `fix: enforce message outbound policy` | **P1 / Security** | Adiciona hook de autorização antes do dispatch de ferramentas de saída; reforça `allow_from`/`group_allow_from` por canal; confina anexos de mídia ao workspace/media roots mesmo com restrição de workspace desabilitada. Fecha #4076. |
| [#4667](https://github.com/HKUDS/nanobot/pull/4667) | `fix: protect user skills from dream writes` | **P1 / Security** | Adiciona guarda de escrita Dream-only para skills do workspace; requer frontmatter `dream_managed: true` antes de Dream modificar skills existentes; skills criadas por Dream só são permitidas com `SKILL.md` inicial portando o marcador. Fecha #4075. |
| [#5816](https://github.com/HKUDS/nanobot/pull/5816) | `feat(webui): polish provider setup and unify settings controls` | Normal | Unifica logos de provedores com tiles compactos arredondados, remove halos brancos, padroniza estados de loading/error/disabled; aplica mesmo padrão de 32px ao longo da UI. |

**Análise:** O merge dos PRs de segurança (#4668, #4667) representa um marco importante, abordando vulnerabilidades críticas relacionadas a políticas de mensagens e proteção de skills. Ambos estavam abertos desde julho de 2026 e finalmente alcançaram merge.

---

## 4. Temas Quentes da Comunidade

Os PRs com maior engajamento nas últimas 24h refletem demandas concentradas em três eixos:

### Provedores e Ecossistema de Modelos

| # | Título | Autores | Destaque |
|---|--------|---------|----------|
| [#5666](https://github.com/HKUDS/nanobot/pull/5666) | `feat(providers): add aimlapi.com` | hugoaimlapi | Provedor gateway OpenAI-compatível com 1000+ modelos; parceria 50/50 revenue share oferecida. |
| [#5453](https://github.com/HKUDS/nanobot/pull/5453) | `feat(providers): add SenseNova (商汤日日新)` | morandot | Provedor chinês com modelos multimodal, deepseek-v4-flash, glm-5.2. |

### Interface Web e UX

| # | Título | Autores | Destaque |
|---|--------|---------|----------|
| [#5776](https://github.com/HKUDS/nanobot/pull/5776) | `feat(webui): add search to shared ProviderPicker` | nikkoxgonzales | Adiciona input de filtro/search ao ProviderPicker; afeta Models, Web search, Transcription, Image Generation. |
| [#5367](https://github.com/HKUDS/nanobot/pull/5367) | `feat(webui): localize agent activity` | ZhouJ-sh | Localiza labels de atividade do Agent em 10 locales; atualiza imediatamente ao trocar idioma da WebUI. |

### Canais de Comunicação

| # | Título | Autores | Destaque |
|---|--------|---------|----------|
| [#5606](https://github.com/HKUDS/nanobot/pull/5606) | `feat(email): filter by recipient alias` | tilladam | Filtra caixas postais compartilhadas por alias de destinatário. |
| [#4919](https://github.com/HKUDS/nanobot/pull/4919) | `feat(telegram): support custom Bot API base URL` | nolanchic | Permite Telegram apontar para servidor Bot API auto-hospedado ou gateway enterprise. |

---

## 5. Bugs e Estabilidade

### Issue de Segurança Aberta

| # | Título | Severidade | Status | Detalhes |
|---|--------|------------|--------|----------|
| [#4072](https://github.com/HKUDS/nanobot/issues/4072) | `Security: ExecTool restricted workspace can be bypassed through relative symlinks` | **Alta** | **OPEN** | `ExecTool` com `restrict_to_workspace=True` pode ler fora do workspace via symlink relativo dentro do workspace. O guarda de shell verifica texto de comandos e caminhos absolutos, mas não resolve symlinks relativos antes da execução no shell. Aberto em 2026-05-29; sem comentários ou thumbs-up. |

### Bugs Reportados em PRs (Prioridade P1-P2)

| # | Título | Severidade | Área | Problema |
|---|--------|------------|------|----------|
| [#5403](https://github.com/HKUDS/nanobot/pull/5403) | `fix(memory): use API-reported prompt tokens` | **P1** | Memory | Estimativa local via tiktoken subestima tokens de prompt em 30-50% para modelos modernos; consolidação nunca dispara mesmo quando a conversa excede a janela de contexto. |
| [#4819](https://github.com/HKUDS/nanobot/pull/4819) | `fix(memory): replace WeakValueDictionary` | P2 | Memory | Locks de consolidação podem ser coletados pelo GC, causando instabilidade de identidade. |
| [#4820](https://github.com/HKUDS/nanobot/pull/4820) | `fix(runtime): reject non-string web fetch URLs` | P2 | Runtime | Valores truthy não-string (ex: `123`) são forçados em assinaturas de cache, interferindo em lookups válidos. |
| [#5641](https://github.com/HKUDS/nanobot/pull/5641) | `fix(webui): iOS PWA tap and status-bar fixes` | P2 | WebUI | iOS Safari aplica `:hover` em toda a cadeia ancestral no primeiro tap; botões de ação internos não respondiam. |
| [#5748](https://github.com/HKUDS/nanobot/pull/5748) | `fix(recovery): persist partial tool progress` | P2 | Recovery | Checkpoints não persistiam progresso de ferramentas em limites de batch; resultados já completados podiam ser indistinguíveis de não executados após crash. |
| [#5257](https://github.com/HKUDS/nanobot/pull/5257) | `fix(agent): bound sustained-goal continuation` | P2 | Agent | Goals recorrentes sem condição terminal eram gravados como ativos eternamente; bound de continuação faltava. |
| [#5292](https://github.com/HKUDS/nanobot/pull/5292) | `fix(matrix): reply to room-level user event` | P2 | Matrix | Mensagens de sala Matrix eram enviadas como eventos top-level soltos; cliente nunca vinculava resposta ao evento do usuário. |
| [#5260](https://github.com/HKUDS/nanobot/pull/5260) | `fix(memory): ignore runtime files` | P2 | Memory | Arquivos runtime criados dentro de workspaces rastreados não eram ignorados; poluía armazenamento de memória. |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features em Desenvolvimento

| # | Título | Área | Descrição |
|---|--------|------|-----------|
| [#5817](https://github.com/HKUDS/nanobot/pull/5817) | `feat: add stable and source self-update flows` | Core | Adiciona `nanobot update` para PyPI estável e `--dev`/`--update-dev` para fonte com fast-forward-only; bootstrap Bun runtime verificado por SHA-256. |
| [#5352](https://github.com/HKUDS/nanobot/pull/5352) | `Add model provider removal controls` | WebUI | Adiciona mutação para remover configuração de provider; expõe controles de confirmação; previne remoção enquanto presets referenciam o provider. |
| [#5818](https://github.com/HKUDS/nanobot/pull/5818) | `chore: remove CLAUDE.md` | Docs | Remove arquivo `CLAUDE.md` do repositório. |

### Sinais de Roadmap Identificados

1. **Consolidação de Memória e Contexto:** PR #5403 (P1) indica que a estratégia de token estimation está falhando; a ser resolvido com consumo de tokens reportados pela API.
2. **Expansão de Provedores:** Interesse ativo em adicionar aimlapi.com (#5666) e SenseNova (#5453) — ambos em conflito/resolução.
3. **Sistema de Update:** A feature de auto-update (#5817) sinaliza maturidade do projeto em direção a distribuição profissional.
4. **Localização:** A feature de localização de atividade do agent (#5367) com 10 locales demonstra investimento em usabilidade internacional.

---

## 7. Resumo de Feedback dos Usuários

Com base nas issues e PRs disponíveis, os padrões de dor dos usuários incluem:

| Dor | Evidência | Prioridade |
|-----|-----------|------------|
| **Vulnerabilidade de workspace em ExecTool** | Issue #4072 — usuários que usam `restrict_to_workspace=True` para isolamento de segurança descobrem que symlinks relativos ignoram a restrição. | **Alta** |
| **Consolidação de memória não funciona** | PR #5403 — usuários com conversas longas reportam que a consolidação nunca dispara porque tiktoken subestima dramaticamente. | **Alta** |
| **UI Web instável em iOS PWA** | PR #5641 — usuários de iOS reportam necessidade de dois taps para interagir com sessões, frustrante em uso mobile. | **Média** |
| **Gestão de provedores confusa** | PR #5352 — usuários não conseguem remover providers configurados; sem controles na UI. | **Média** |
| **Provedores alternativos inacessíveis** | PR #5666, #5453 — comunidades não-anglofônicas e usuários de provedores regionais (SenseNova, aimlapi) desejam integração nativa. | **Média** |
| **Sustained goals travam** | PR #5257 — usuários com goals recorrentes ("me notifique diariamente") experimentam goals eternamente ativos sem bound. | **Média** |

---

## 8. Backlog que Merece Atenção

### Issue Sem Resposta há >3 meses

| # | Título | Criado | Atualizado | Dias em Aberto | Urgência |
|---|--------|--------|------------|----------------|----------|
| [#4072](https://github.com/HKUDS/nanobot/issues/4072) | `Security: ExecTool restricted workspace bypass via symlinks` | 2026-05-29 | 2026-09-19 | **113 dias** | **Crítica** |

**Nota:** Esta issue de segurança foi aberta há quase 4 meses sem comentários, thumbs-up ou atribuição. Considerando que PRs de segurança relacionados (#4668, #4667) acabaram de ser merged, existe risco de a mesma atenção não ter sido dada a este bypass de workspace.

### PRs Antigos (>60 dias) Ainda Abertos

| # | Título | Criado | Prioridade | Área |
|---|--------|--------|------------|------|
| [#4819](https://github.com/HKUDS/nanobot/pull/4819) | `fix(memory): replace WeakValueDictionary` | 2026-07-06 | P2 | Memory |
| [#4820](https://github.com/HKUDS/nanobot/pull/4820) | `fix(runtime): reject non-string web fetch URLs` | 2026-07-06 | P2 | Runtime |
| [#4919](https://github.com/HKUDS/nanobot/pull/4919) | `feat(telegram): custom Bot API base URL` | 2026-07-14 | P2 | Telegram |
| [#5257](https://github.com/HKUDS/nanobot/pull/5257) | `fix(agent): bound sustained-goal continuation` | 2026-08-05 | P2 | Agent |
| [#5260](https://github.com/HKUDS/nanobot/pull/5260) | `fix(memory): ignore runtime files` | 2026-08-05 | P2 | Memory |
| [#5292](https://github.com/HKUDS/nanobot/pull/5292) | `fix(matrix): reply to room-level user event` | 2026-08-08 | P2 | Matrix |
| [#5352](https://github.com/HKUDS/nanobot/pull/5352) | `Add model provider removal controls` | 2026-08-12 | P2 | WebUI |
| [#5367](https://github.com/HKUDS/nanobot/pull/5367) | `feat(webui): localize agent activity` | 2026-08-13 | P2 | WebUI |
| [#5403](https://github.com/HKUDS/nanobot/pull/5403) | `fix(memory): use API-reported prompt tokens` | 2026-08-16 | **P1** | Memory |
| [#5453](https://github.com/HKUDS/nanobot/pull/5453) | `feat(providers): add SenseNova` | 2026-08-20 | P2 | Providers |
| [#5606](https://github.com/HKUDS/nanobot/pull/5606) | `feat(email): filter by recipient alias` | 2026-08-30 | P2 | Email |
| [#5641](https://github.com/HKUDS/nanobot/pull/5641) | `fix(webui): iOS PWA fixes` | 2026-09-03 | P2 | WebUI |
| [#5666](https://github.com/HKUDS/nanobot/pull/5666) | `feat(providers): add aimlapi.com` | 2026-09-04 | P2 | Providers |

**Observação:** Há 13 PRs abertos há mais de 30 dias, incluindo um P1 (#5403). O PR #5403, que corrige consolidação de memória com tokens API, é particularmente crítico e está sem atenção há mais de um mês.

---

## Métricas Resumidas do Dia

| Indicador | Valor |
|-----------|-------|
| Issues abertas/ativas (24h) | 1 |
| PRs abertos (24h) | 21 |
| PRs merged/fechados (24h) | 7 |
| Releases novas | 0 |
| Issues de segurança abertas | 1 |
| PRs P1 em aberto | 1 (#5403) |
| PRs com merge

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent
## NousResearch/hermes-agent — 2026-09-20

---

## 1. Panorama do Dia

O projeto Hermes Agent mantém alta atividade de desenvolvimento em 20/09/2026, com **50 issues e 50 PRs atualizados nas últimas 24 horas**. Não houve lançamentos formais, mas a equipe fechou 12 issues e mergeou 41 PRs — indicando foco intenso em estabilização e entrega de features pendentes. A prioridade técnica do dia está na **resolução de bugs críticos de plataforma Windows** (processos órfãos, falhas de update, limites de linha de comando SSH) e na **resolução do bloqueio de integração Nous-to-Enterkey** (#88584, 120 comentários). O volume de PRs merged sugere preparação para uma próxima versão.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24 horas.**

O projeto está em fase de desenvolvimento ativo sem tag de versão formalizada no período analisado.

---

## 3. Progresso do Projeto

### PRs Fechados/Mergiados (Principais)

| # | Título | Tipo | Impacto |
|---|--------|------|---------|
| [#116050](https://github.com/NousResearch/hermes-agent/pull/116050) | `fix(kanban): order board done column by completion time` | Bug fix | Corrige ordenação invertida de cards concluídos no Kanban |
| [#99792](https://github.com/NousResearch/hermes-agent/pull/99792) | `fix(gateway): restart failed Windows launchers` | Bug fix | Torna launchers Windows observáveis e recuperáveis após saída inesperada |
| [#99786](https://github.com/NousResearch/hermes-agent/pull/99786) | `feat(media): add read-only YouTube account skill` | Feature | Adiciona skill para listar canais, assinaturas e playlists via YouTube Data API |
| [#99790](https://github.com/NousResearch/hermes-agent/pull/99790) | `fix(transcript): preserve display-only corrections safely` | Bug fix | Separa estado de transcript durável da projeção visível para correções |
| [#99787](https://github.com/NousResearch/hermes-agent/pull/99787) | `fix(mcp): persist explicit OAuth authorization` | Bug fix | Autorização OAuth explícita e durável entre dashboard, TUI e flows diretos |
| [#99784](https://github.com/NousResearch/hermes-agent/pull/99784) | `fix(desktop): deny renderer window-open side effects` | Security | Impede criação de janelas side-effect pelo renderer — hardening Electron |
| [#99785](https://github.com/NousResearch/hermes-agent/pull/99785) | `feat(lmstudio): manage local model memory` | Feature | Gerenciador de memória para modelos LM Studio locais |
| [#99802](https://github.com/NousResearch/hermes-agent/pull/99802) | `fix(desktop): retry late local backend startup` | Bug fix | Permite recuperação quando deadline expira antes do backend ficar pronto |
| [#99783](https://github.com/NousResearch/hermes-agent/pull/99783) | `fix(computer-use): align Windows targets with live schema` | Bug fix | Alinha interação Windows com schema de tokens e ignora janelas transitórias |

### PRs Abertos (Em Progresso)

| # | Título | Tipo | Prioridade |
|---|--------|------|------------|
| [#116430](https://github.com/NousResearch/hermes-agent/pull/116430) | `fix(agent): reject subdirectory hint files that resolve outside the tree` | Security | P2 |
| [#116431](https://github.com/NousResearch/hermes-agent/pull/116431) | `fix(update): a fleet on a descendant SHA discharges the restart obligation` | Bug fix | P2 |
| [#116432](https://github.com/NousResearch/hermes-agent/pull/116432) | `feat(desktop): majority-vote BiDi with Vazirmatn Persian font` | Feature (i18n) | P3 |
| [#116434](https://github.com/NousResearch/hermes-agent/pull/116434) | `fix(desktop): client-direct TTS synthesis carries a request timeout` | Bug fix | P3 |
| [#116436](https://github.com/NousResearch/hermes-agent/pull/116436) | `fix(tools): do not join wedged delegate workers on the interrupt path` | Bug fix | P2 |
| [#103174](https://github.com/NousResearch/hermes-agent/pull/103174) | `fix(tools): snapshot-scoped element actions + zero-delivery type verdict` | Bug fix | P2 |
| [#116054](https://github.com/NousResearch/hermes-agent/pull/116054) | `feat: private Telegram and Discord Bot Screen handoff` | Feature | P3 |

**Destaque de segurança:** [#116430](https://github.com/NousResearch/hermes-agent/pull/116430) — Correção de path traversal em hint files que resolvia symlinks fora da árvore do projeto.

---

## 4. Temas Quentes da Comunidade

### Issue com Maior Engajamento

**#88584** — Automated Nous integration is blocked (120 comentários)  
🔗 https://github.com/NousResearch/hermes-agent/issues/88584  
**Situação:** OPEN | **Severidade:** P3 | **Componentes:** `comp/cron`

O merge agendado Nous-to-Enterkey está travado por conflitos em `cron/jobs.py`. Nenhum release branch foi atualizado e o dashboard updater permanece na última versão testada do Enterkey. Workflow falhou em https://github.com/enterkey-io/hermes-agent/actions/runs/32057737491. Este é o issue com maior volume de discussão da base de dados.

### Issues em Destaque por Discussão

| # | Título | Comentários | Situação |
|---|--------|-------------|----------|
| [#88584](https://github.com/NousResearch/hermes-agent/issues/88584) | Nous integration blocked | 120 | OPEN |
| [#107307](https://github.com/NousResearch/hermes-agent/issues/107307) | Codex provider errors on Pro Full/Light | 19 | CLOSED |
| [#116305](https://github.com/NousResearch/hermes-agent/issues/116305) | Desktop plugin SDK wishlist | 9 | OPEN |
| [#62810](https://github.com/NousResearch/hermes-agent/issues/62810) | CLI exit-status compatibility | 8 | OPEN |
| [#34372](https://github.com/NousResearch/hermes-agent/issues/34372) | BlueBubbles duplicate processing | 7 | CLOSED |

**Análise:** A comunidade demonstra forte preocupação com:
1. **Integração de sistemas** — o bloqueio de Nous é o sintoma de dependência complexa entre branches
2. **Estabilidade de provedores** — erros de Codex afetam sessões de trabalho produtivo
3. **Desktop como plataforma** — desejo por SDK de plugins e customização

---

## 5. Bugs e Estabilidade

### P1/P2 — Críticos e Altos (Requerem Atenção Imediata)

| # | Título | Componentes | Plataforma | Notas |
|---|--------|-------------|------------|-------|
| [#116376](https://github.com/NousResearch/hermes-agent/issues/116376) | Windows: processo fica vivo após fechar janela | `comp/desktop` | Windows | SIGSEGV-like behavior |
| [#116375](https://github.com/NousResearch/hermes-agent/issues/116375) | Windows update aborta com `exit 4` | `comp/desktop`, `area/install-update` | Windows | Gate abre antes do hand-off script |
| [#116416](https://github.com/NousResearch/hermes-agent/issues/116416) | Gateway status false-negative no dashboard | `comp/cli`, `comp/gateway`, `comp/dashboard` | — | Em processos in-process |
| [#106682](https://github.com/NousResearch/hermes-agent/issues/106682) | `fleet_restart_pending` nunca limpo | `comp/cli`, `comp/gateway` | — | Warn "mixed sys.modules" em cada launch |
| [#62810](https://github.com/NousResearch/hermes-agent/issues/62810) | CLI exit-status: boolean True → exit 1 | `comp/cli` | — | Compatibilidade quebrada |
| [#115563](https://github.com/NousResearch/hermes-agent/issues/115563) | Windows "Already up to date" aborta exit 1 | `comp/cli`, `area/install-update` | Windows | atexit re-levanta exceção |
| [#116384](https://github.com/NousResearch/hermes-agent/issues/116384) | `clear_stale_tmp_packs()` não remove nada no Windows | `comp/cli` | Windows | Read-only files, EACCES silenciado |
| [#99943](https://github.com/NousResearch/hermes-agent/issues/99943) | Compressor context window 1M → 65,536 em cloud | `comp/agent` | Multi | Provedores cloud afetados |
| [#101880](https://github.com/NousResearch/hermes-agent/issues/101880) | Desktop crash (SIGSEGV) ao imprimir Google Doc | `comp/desktop` | macOS | 100% reprodutível |
| [#106716](https://github.com/NousResearch/hermes-agent/issues/106716) | SSH Windows: linha de comando > 8191 chars | `comp/desktop` | Windows | Limite do SO ignorado |
| [#116213](https://github.com/NousResearch/hermes-agent/issues/116213) | Cron preflight não resolve OAuth do credential_pool | `comp/cron`, `area/auth` | — | openai-codex com Hermes Cron |

### P3 — Médios

| # | Título | Componentes |
|---|--------|-------------|
| [#116305](https://github.com/NousResearch/hermes-agent/issues/116305) | Desktop plugin SDK wishlist |
| [#116270](https://github.com/NousResearch/hermes-agent/issues/116270) | `search_files` grep fallback retorna 0 para symlink |
| [#116395](https://github.com/NousResearch/hermes-agent/issues/116395) | BlueBubbles docs incompletos |

**Padrão identificado:** Forte concentração de bugs em **plataforma Windows** (5 issues) e **fluxos de update/instalação** (3 issues), sugerindo necessidade de investimento em testes E2E Windows.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Em Detalhe

**#116305** — Desktop plugin SDK wishlist  
🔗 https://github.com/NousResearch/hermes-agent/issues/116305  
**Autor:** teknium1 | **Comentários:** 9

O intake do catálogo de plugins de 2026-09-19 avaliou 12 plugins Desktop de um autor + 5 bundles adicionais. Todos passaram, mas a comunidade solicita SDK formal com:
- Hook system para composer draft
- Settings gateway
- Session list
- Sidebar integration
- Pill slot
- Typed bridge

**#100285** — User-defined tags para projects, kanban boards & cards  
🔗 https://github.com/NousResearch/hermes-agent/issues/100285  
**Comentários:** 1 | **Labels:** `type/feature`, `comp/cron`, `comp/desktop`, `area/sessions`

Capacidade de attaching meaningful classifications através de fronteiras de entidades — agrupar trabalho relacionado entre projects, boards e cards.

**#41431** — Custom model names per registered provider  
🔗 https://github.com/NousResearch/hermes-agent/issues/41431  
**Comentários:** 1 | **👍:** 1

Model picker e Settings mostram apenas modelos retornados pelo endpoint `model.options`. Usuários com OpenRouter (centenas de modelos) não conseguem acessar modelos não descobertos.

### Features Recentemente Fechadas (Indicam Direções Concluídas)

| # | Título |
|---|--------|
| [#83080](https://github.com/NousResearch/hermes-agent/issues/83080) | Custom Endpoints para image/video generation |
| [#85426](https://github.com/NousResearch/hermes-agent/issues/85426) | Auto-continue após falha temporária de provedor |
| [#95743](https://github.com/NousResearch/hermes-agent/issues/95743) | Authorization Code OAuth flow para OpenAI |
| [#98852](https://github.com/NousResearch/hermes-agent/issues/98852) | Botão "Retry in X hours" para limite de uso |
| [#99786](https://github.com/NousResearch/hermes-agent/pull/99786) | YouTube account skill (read-only) |
| [#99785](https://github.com/NousResearch/hermes-agent/pull/99785) | LM Studio memory manager |
| [#116432](https://github.com/NousResearch/hermes-agent/pull/116432) | Persian BiDi with Vazirmatn |

**Sinal de roadmap:** Forte foco em **customização de provedores**, **memória de modelos locais** e **internacionalização** (i18n).

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

1. **Produtividade interrompida por falhas de provedor**
   - [#107307](https://github.com/NousResearch/hermes-agent/issues/107307): "Codex provider errors on Pro Full and Pro Light interrupt Hermes work" — sessões de trabalho são perdidas
   - [#97548](https://github.com/NousResearch/hermes-agent/issues/97548): "Same provider works in Codex but stalls in Hermes" — experiência inconsistente

2. **Plataforma Windows como cidadã de segunda**
   - Múltiplos bugs de processo, update e SSH específicos de Windows
   - Usuários Windows enfrentam experiência instável comparada a macOS

3. **Contexto de modelos locais é truncado silenciosamente**
   - [#99943](https://github.com/NousResearch/hermes-agent/issues/99943): Janela de 1M tokens cai para 65,536 sem aviso —

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório de Projeto: PicoClaw

**Data de referência:** 2026-09-20  
**Repositório:** [sipeed/picoclaw](https://github.com/sipeed/picoclaw)  
**Resumo da atividade nas últimas 24h:** 1 issue aberta, 1 PR fechado/merged, 0 releases

---

## 1. Panorama do Dia

O projeto PicoClaw mantém atividade moderada nesta data, com 1 PR significativo fechado nas últimas 24h. O destaque negativo é a issue crítica #3377, reportada há 8 dias, indicando que o certificado TLS do domínio picoclaw.io expirou em 2026-09-10, deixando o site oficial inacessível. Esta é uma questão de alta prioridade que afeta diretamente a imagem e usabilidade do projeto. A equipe não publicou releases recentes, sugerindo foco em stabilização ou desenvolvimento de funcionalidades sob o radar.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

O projeto não registrou novos lançamentos neste período. Sem changelogs ou notas de migração para documentar.

---

## 3. Progresso do Projeto

### PRs fechados/merged recentemente

| # | Título | Autor | Tipo | Status |
|---|--------|-------|------|--------|
| [#1349](https://github.com/sipeed/picoclaw/pull/1349) | feat(qq): support parsing and replying to more attachment types | aishannon | enhancement | **CLOSED** |

**Análise do PR #1349:**

O PR #1349 traz melhorias significativas para o suporte a canais QQ, implementando:

1. **Suporte a emojis:** Parsing de estruturas de emoji dos canais QQ
2. **Tipos de mensagem expandidos:** Suporte para voz, imagem, vídeo e arquivos
3. **Upload e envio:** Capacidade de responder com anexos locais (upload antes do envio)
4. **Priorização de Markdown:** Tentativa de usar mensagens Markdown, com fallback adequado

**Impacto:** Este PR representa um avanço importante na interoperabilidade com a plataforma QQ, expandindo as capacidades de bots e automações que utilizam o PicoClaw como base.

---

## 4. Temas Quentes da Comunidade

### Issue com maior atenção

| # | Título | Autor | Status | Reações | Comentários |
|---|--------|-------|--------|---------|-------------|
| [#3377](https://github.com/sipeed/picoclaw/issues/3377) | TLS certificate for picoclaw.io expired on 2026-09-10 | dimonb | **OPEN** | 👍 1 | 1 |

**Análise:**

A issue #3377 é a única com atividade recente e merece atenção crítica:

- **Severidade:** CRITICAL (classificação do autor)
- **Problema:** Certificado TLS expirou em 2026-09-10 23:59:59 UTC
- **Impacto:** Site picoclaw.io completamente inacessível em todos os browsers e clientes TLS
- **Tempo desde o reporte:** 8 dias (criado em 2026-09-12)
- **Estado atual:** Ainda aberto e marcado como "stale"

Esta issue demonstra uma lacuna no gerenciamento de infraestrutura do projeto. A marcação "stale" combinada com 8 dias sem resolução coloca em questão os processos de monitoramento e resposta a incidentes críticos.

---

## 5. Bugs e Estabilidade

### Issue crítica ativa

| #3377 | TLS Certificate Expiration |
|--------|---------------------------|
| **Severidade** | CRITICAL |
| **Status** | OPEN |
| **Link** | [Issue #3377](https://github.com/sipeed/picoclaw/issues/3377) |

**Descrição do problema:**
O certificado SSL/TLS do domínio principal do projeto expirou, tornando o site https://picoclaw.io inacessível para todos os usuários. Browsers modernos recusam conexões a sites sem certificado válido, e clientes TLS/API também são afetados.

**Ações necessárias:**
1. Renovação imediata do certificado TLS
2. Verificação de configuração HTTPS no servidor
3. Implementação de monitoramento de expiração de certificados
4. Atualização da issue após resolução

**Riscos identificados:**
- Perda de visibilidade e credibilidade do projeto
- Impacto em links de documentação e recursos externos
- Potencial impacto em integrações que dependem do domínio

---

## 6. Pedidos de Features e Sinais de Roadmap

### Demanda identificada no PR #1349

O PR #1349 (agora fechado) indica direção estratégica para o projeto:

**Funcionalidades implementadas/solicitadas:**
- Suporte avançado a anexos multimídia em canais QQ
- Parsing inteligente de estruturas de mensagem
- Flexibilidade de resposta (Markdown com fallbacks)

**Sinais de roadmap:**
- Evolução contínua do suporte a plataformas de mensageria asiáticas
- Priorização de compatibilidade multimídia
- Estratégia de degradação graciosa (fallback de Markdown para texto simples)

---

## 7. Resumo de Feedback dos Usuários

### Dores reportadas

| Categoria | Problema | Severidade | Status |
|-----------|----------|------------|--------|
| Infraestrutura | Site offline por expiração de certificado | **CRITICAL** | Aberto há 8 dias |
| Funcionalidade | Acesso ao site e recursos oficiais | **CRITICAL** | Afeta todos os usuários |

**Análise:**
O único feedback recente da comunidade é o reporte da issue #3377, que embora técnico, representa uma dor significativa: **a impossibilidade de acessar informações oficiais do projeto**. Usuários que chegam ao repositório via GitHub ou ferramentas de busca não conseguem acessar o site oficial, documentação hospedada, ou possíveis recursos externos.

A falta de其他 feedback positivo ou negativo nas últimas 24h sugere que a comunidade está:
1. Reduzida em atividade
2. Afetada pela indisponibilidade do site
3. Ou em período de baixo engajamento

---

## 8. Backlog que Merece Atenção

### Issue sem resposta significativa

| # | Título | Idade | Prioridade | Status |
|---|--------|-------|------------|--------|
| [#3377](https://github.com/sipeed/picoclaw/issues/3377) | TLS certificate for picoclaw.io expired | **8 dias** | **CRITICAL** | OPEN, stale |

**Problema:** Esta issue foi criada em 2026-09-12 e, passados 8 dias, continua sem resolução. A marcação "stale" indica que não houve interação da equipe mantenedora recentemente, apesar da severidade crítica.

**Recomendação:** Priorizar resolução imediata desta issue, que envolve:
1. Renovar/instalar certificado TLS
2. Remover marcação "stale"
3. Atualizar a comunidade sobre o status

---

## Métricas Consolidada do Dia

| Métrica | Valor |
|---------|-------|
| Issues abertas/ativas (24h) | 1 |
| Issues fechadas (24h) | 0 |
| PRs abertos (24h) | 0 |
| PRs merged/fechados (24h) | 1 |
| Novas releases | 0 |
| Issues críticas abertas | 1 |

---

## Veredicto de Saúde do Projeto

| Aspecto | Status | Observação |
|---------|--------|------------|
| Atividade de código | 🟡 Moderada | 1 PR significativo fechado |
| Saúde do site/infra | 🔴 Crítica | TLS expirado há 10 dias |
| Resolução de issues | 🔴 Insuficiente | Issue crítica sem resposta há 8 dias |
| Liberções/releases | ⚪ Neutro | Sem atividade recente |
| Engajamento comunidade | ⚪ Neutro | Baixa atividade nas últimas 24h |

**Recomendação geral:** A prioridade imediata deve ser a resolução da issue #3377 (certificado TLS). O acúmulo de 8 dias sem resposta a uma issue crítica, marcado inclusive como "stale", representa risco reputacional e operacional significativo para o projeto.

---

*Relatório gerado automaticamente com base nos dados do GitHub de sipeed/picoclaw em 2026-09-20.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-09-20

---

## 1. Panorama do Dia

O IronClaw apresenta **baixa atividade nas últimas 24 horas**, sem novos commits de issues ou releases. Dois pull requests permanecem abertos, sinalizando desenvolvimento ativo em funcionalidades de autenticação (IdentyClaw Passport) e correção de bugs relacionados à configuração de provedores OAuth via interface web. O projeto mantém um estado estável de manutenção, com foco em refinamentos de extensibilidade e experiência de deployment.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24 horas.**

O projeto não publicou novas versões neste período. Recomenda-se monitorar o repositório para próximas publicações, especialmente considerando as PRs em tramitação que podem justificar um release de correção.

---

## 3. Progresso do Projeto

Dois PRs foram atualizados recentemente, indicando trabalho em andamento:

| PR | Status | Tipo | Escopo | Tamanho | Risco |
|---|---|---|---|---|---|
| [#7499](https://github.com/nearai/ironclaw/pull/7499) | ABERTO | Feature | docs, dependencies | XL | Low |
| [#8102](https://github.com/nearai/ironclaw/pull/8102) | ABERTO | Bugfix | extensions | — | — |

**Destaque:**
- **PR #8102** resolve um problema crítico de activation de extensões Gmail e Google Calendar quando configuradas via Web UI (não variáveis de ambiente). Este fix melhora a experiência de operadores em deployments de produção.
- **PR #7499** introduz um "host seam" para agentes IronClaw processless acessarem IdentyClaw Passport, incluindo um practitioner host kit em `deploy/identyclaw/`.

---

## 4. Temas Quentes da Comunidade

**Nenhuma issue ou PR com atividade de comentários/reações registrada nas últimas 24 horas.**

Os dois PRs abertos (#7499 e #8102) ainda não acumularam reações ou comentários, sugerindo que estão em fase inicial de revisão ou aguardando feedback dos mantenedores.

---

## 5. Bugs e Estabilidade

**Problema identificado via PR #8102:**

- **Bug:** Gmail e Google Calendar falham na ativação quando o cliente OAuth Google é configurado via Web UI (administrator configuration)
- **Sintoma:** OAuth completa com sucesso (consentimento, código, troca de token), mas a ativação falha com erro `Provider...`
- **Severidade:** Média — afeta operadores que preferem configuração via interface web
- **Status:** Correção em revisão via [PR #8102](https://github.com/nearai/ironclaw/pull/8102)

---

## 6. Pedidos de Features e Sinais de Roadmap

**Feature em desenvolvimento — PR #7499:**

O PR #7499 introduz:
- Host seam (`builtin.idcp`) para agentes processless chamarem IdentyClaw Passport sem shell ou extensão instalável
- Policy grant/AskAlways exemption integrada
- Practitioner host kit em `deploy/identyclaw/` (Node CLI + helper loopback em `:3921`)

**Sinais de roadmap:**
- Foco em extensibilidade e integração de autenticação
- Suporte a agentes sem processo (processless agents) como paradigma de deployment
- Ferramentas para practitioners (não desenvolvedores core)

---

## 7. Resumo de Feedback dos Usuários

**Nenhum feedback explícito de usuários registrado nas últimas 24 horas.**

Com base nos PRs em andamento, infere-se que:
- **Dores identificadas:** Configuração de extensões via Web UI não funciona corretamente (PR #8102)
- **Necessidade de mercado:** Agentes de IA que operem sem dependência de shell ou extensões locais (PR #7499)
- **Cenário de uso:** Deploy de assistentes pessoais com autenticação integrada via IdentyClaw Passport

---

## 8. Backlog que Merece Atenção

| Item | Tipo | Idade | Status | Prioridade |
|---|---|---|---|---|
| Host-mediated Passport integration | Feature | ~40 dias | ABERTO | Alta |
| Provider-instance readiness fix | Bugfix | 2 dias | ABERTO | Alta |

**Recomendação:** 
- Revisar e priorizar o merge de **#8102** para estabilizar a configuração via Web UI antes de下一个 release cycle.
- Acompanhar a evolução de **#7499** — trata-se de uma feature de tamanho XL que pode requerer code review substancial.

---

**Próxima atualização recomendada:** 2026-09-21

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do Projeto CoPaw — 2026-09-20

---

## 1. Panorama do Dia

O projeto CoPaw apresenta **alta atividade comunitária** em 20 de setembro de 2026, com 10 issues e 7 PRs atualizados nas últimas 24 horas, todos ainda em estado aberto. Não houve lançamentos de novas versões, indicando que a equipe está em ciclo de desenvolvimento ativo sem release pendente. A atividade concentrou-se em **correções de bugs críticos** no console e no pipeline de agentes (especialmente relacionados a rejeições de áudio e arquivos), além de avanços em funcionalidades para plugins e controle de aplicações. A ausência de PRs mescladas pode indicar que as contribuições estão em fase de revisão ou que há gargalos no processo de merge.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24 horas.**

O projeto não publicou novas versões desde o último período reportado. A versão mais recente permanece como **v2.2.1**, conforme indicada nos issues reportados pelos usuários.

> **Nota:** A ausência de releases não indica estagnação — a atividade intensa de PRs (#7889, #7886, #7885, #7887, #7874, #7880, #7875) sugere que a equipe está preparando patches e melhorias que podem ser incluídas em uma próxima versão.

---

## 3. Progresso do Projeto

Todas as 7 PRs registradas permanecem **abertas e em revisão**, sem merges ou fechamentos no período:

| PR | Título | Autor | Área | Status |
|---|---|---|---|---|
| [#7889](https://github.com/agentscope-ai/QwenPaw/pull/7889) | fix(console): recover from transient DOM-mutation render errors | TerebiSAMA | Console | Aberto |
| [#7886](https://github.com/agentscope-ai/QwenPaw/pull/7886) | fix(agents): handle unknown input_audio rejections | axelray-dev | Agents | Aberto |
| [#7885](https://github.com/agentscope-ai/QwenPaw/pull/7885) | fix(agents): retry after unsupported file payload errors | axelray-dev | Agents | Aberto |
| [#7887](https://github.com/agentscope-ai/QwenPaw/pull/7887) | fix(agents): handle unknown audio part rejections | lorenzozanee | Agents | Aberto |
| [#7874](https://github.com/agentscope-ai/QwenPaw/pull/7874) | feat(pawapp): redesign the SDK and app control plane | cyruszhang | PawApp | Aberto |
| [#7880](https://github.com/agentscope-ai/QwenPaw/pull/7880) | feat(plugins): add escalation-only tool policy hooks | yang0228 | Plugins | Aberto |
| [#7875](https://github.com/agentscope-ai/QwenPaw/pull/7875) | docs(pawapp): specify Creator create-video control plane | cyruszhang | Docs | Aberto |

**Destaques:**
- **Console (#7889):** Corrige erro de renderização que travava a interface permanentemente após falhas de chunks lazy-loaded — resposta direta ao issue #7888.
- **Agents (#7886, #7885, #7887):** Tríade de correções para rejeições de áudio/arquivo por provedores como DeepSeek, resolvendo cenários onde conversas ficavam permanentemente quebradas.
- **PawApp (#7874, #7875):** Avanço na redefinição do SDK e documentação do controle de aplicações, fortalecendo a arquitetura de plugins e integrações.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários + reações)

| Issue | Título | Comentários | 👍 | Severidade |
|---|---|---|---|---|
| [#7815](https://github.com/agentscope-ai/QwenPaw/issues/7815) | Console does not recover from a failed lazy page chunk load | 5 | 0 | Alta |
| [#7878](https://github.com/agentscope-ai/QwenPaw/issues/7878) | [Feature]: Expose a plugin-visible pre-tool-call policy hook | 3 | 0 | Média |
| [#7888](https://github.com/agentscope-ai/QwenPaw/issues/7888) | Chat page stuck on "Something went wrong" (insertBefore NotFoundError) | 2 | 0 | Alta |

**Análise:**
- **Issue #7815** é o mais comentado (5 comentários), indicando diskusições técnicas aprofundadas sobre o mecanismo de recovery de erros no Console. O bug afeta a navegação após falhas de lazy loading.
- **Issue #7878** representa uma demanda de arquitetura para exposição de hooks de governança, mostrando que a comunidade deseja extensibilidade no pipeline de ferramentas.
- **Issue #7888** tem atenção imediata — o autor reportou um bug crítico no mesmo dia, e já há PR #7889 como resposta, demonstrando resposta rápida da comunidade.

---

## 5. Bugs e Estabilidade

### Bugs Críticos (Afetam Funcionalidade Principal)

| Issue | Título | Componente | Data | Prioridade |
|---|---|---|---|---|
| [#7888](https://github.com/agentscope-ai/QwenPaw/issues/7888) | Chat page stuck on "Something went wrong" (React insertBefore NotFoundError) | Console | 2026-09-19 | 🔴 Crítica |
| [#7883](https://github.com/agentscope-ai/QwenPaw/issues/7883) | PDF serialized as nested file part → DeepSeek rejects (400 error) | Agents | 2026-09-19 | 🔴 Crítica |
| [#7876](https://github.com/agentscope-ai/QwenPaw/issues/7876) | DeepSeek rejects input_audio content part (422 "unknown variant") | Agents | 2026-09-19 | 🔴 Crítica |
| [#7882](https://github.com/agentscope-ai/QwenPaw/issues/7882) | OpenCode "free" models return 403 FreeTierError | Agents | 2026-09-19 | 🔴 Crítica |
| [#7815](https://github.com/agentscope-ai/QwenPaw/issues/7815) | Console does not recover from failed lazy chunk load | Console | 2026-09-16 | 🟠 Alta |

### Bugs de UI/UX

| Issue | Título | Componente | Data | Prioridade |
|---|---|---|---|---|
| [#7877](https://github.com/agentscope-ai/QwenPaw/issues/7877) | Session directory panel: only ~3 visible rows, "Recent Projects" always empty | Console | 2026-09-19 | 🟡 Média |
| [#7884](https://github.com/agentscope-ai/QwenPaw/issues/7884) | Chat history too short —用户体验差 | Console | 2026-09-19 | 🟡 Média |

### Bugs de Segurança/Governança

| Issue | Título | Componente | Data | Prioridade |
|---|---|---|---|---|
| [#7881](https://github.com/agentscope-ai/QwenPaw/issues/7881) | Kimi-code ACP runner bypasses boundary & destructive-command checks | Agents | 2026-09-19 | 🔴 Crítica |

**Resumo:** O projeto apresenta **4 bugs críticos** abertos, concentrados nos componentes de Agents (rejeição de arquivos/áudio por provedores) e Console (recovery de erros). A boa notícia é que 4 PRs (#7889, #7886, #7885, #7887) já addressam esses problemas, sugerindo resolução iminente.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Solicitadas

| Issue | Título | Área | Autor | Comentários |
|---|---|---|---|---|
| [#7878](https://github.com/agentscope-ai/QwenPaw/issues/7878) | [Feature]: Expose a plugin-visible pre-tool-call policy hook | Governance/Plugins | hxx0611 | 3 |
| [#7879](https://github.com/agentscope-ai/QwenPaw/issues/7879) | MCP OAuth configuration fails — missing client_id/resource for static Bearer Key servers | Channels | shaoQ-1 | 1 |

### Sinais de Roadmap

1. **PR #7874 — Redesign do SDK e controle de PawApps:** Introduz um "Host control plane" unificado para expor trabalho de domínio ao Main Chat com ações públicas/privadas, propriedade de tarefas duráveis e dispatch idempotente.
   
2. **PR #7880 — Escalation-only tool policy hooks:** Expõe hooks de governança pós-avaliação estática, permitindo que classificadores externos e checagens organizacionais participem sem monkey-patching.

3. **PR #7875 — Documentação do Creator create-video:** Especificação formal do controle de aplicações para criação de vídeos, indicando que a funcionalidade está amadurecendo.

**Potencial Próxima Versão:** As correções de bugs (#7889, #7886, #7885, #7887) e a feature de policy hooks (#7880) parecem candidatas a um **patch release (v2.2.2)** ou inclusion na próxima versão menor.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Categoria | Descrição | Frequência |
|---|---|---|
| **Estabilidade de Chat** | Páginas travam em "Something went wrong" sem recovery automático | Alta |
| **Integração com Provedores** | Modelos gratuitos marcados como disponíveis retornam 403; DeepSeek rejeita áudios/arquivos | Alta |
| **Histórico de Conversas** | Limite de histórico muito curto — usuários perdem contexto de discussões anteriores | Média |
| **UI do Painel de Diretório** | Área visível pequena (~3 linhas), campo "Recent Projects" sempre vazio | Média |
| **Configuração MCP** | Falha em OAuth handshake para servers com Bearer Key estático (ex: 企查查 QCC) | Baixa |

### Cenários de Uso Problemáticos

1. **Fluxo de trabalho interrompido:** Usuário abre conversa, envia arquivo de áudio, modelo DeepSeek rejeita → conversa permanentemente quebrada sem opção de recovery (#7876).
2. **Modelos gratuitos inúteis:** OpenCode oferece modelos "free" que sempre falham com 403, gerando frustração e desconfiança na plataforma (#7882).
3. **Navegação não confiável:** Após falha de chunk lazy-loaded, usuário fica preso na tela de erro até reload manual (#7815, #7888).

### Satisfação Geral

A comunidade demonstra **frustração com estabilidade**, especialmente em integrações com provedores externos (DeepSeek, OpenCode) e no console UI. No entanto, a **resposta rápida** da comunidade (PRs abertas no mesmo dia de issues reportados) indica um ecossistema saudável de contribuidores.

---

## 8. Backlog que Merece Atenção

### Issues Antigas Sem Resolução

| Issue | Título | Criado | Atualizado | Dias Aberto | Prioridade |
|---|---|---|---|---|---|
| [#7815](https://github.com/agentscope-ai/QwenPaw/issues/7815) | Console does not recover from failed lazy chunk load | 2026-09-16 | 2026-09-19 | 4 | 🔴 Alta |

### Issues Sem Atribuição ou Resposta

| Issue | Título | Comentários | Status |
|---|---|---|---|
| [#7881](https://github.com/agentscope-ai/QwenPaw/issues/7881) | Kimi-code ACP runner bypasses boundary checks | 1 | Aguarda triagem |
| [#7879](https://github.com/agentscope-ai/QwenPaw/issues/7879) | MCP OAuth handshake fails for Bearer Key servers | 1 | Aguarda triagem |
| [#7877](https://github.com/agentscope-ai/QwenPaw/issues/7877) | Session directory panel UI issues | 1 | Aguarda triagem |

### Recomendações

1. **Priorizar review de PRs:** As 4 correções de agentes (#7886, #7885, #7887, #7889) addressam bugs críticos e estão abertas — urgência em review/merge.
2. **Atribuir #7881:** Issue de segurança (bypass de checagens) precisa de atenção imediata de maintainer.
3. **Avaliar #7815:** Bug de recovery de 4 dias com 5 comentários — possivelmente pronto para merge via #7889.
4. **Considerar release patch:** Se as PRs de estabilidade forem approved, um **v2.2.2** resolveria 4+ bugs críticos reportados.

---

## Métricas de Saúde do Projeto (2026-09-20)

| Indicador | Valor | Status |
|---|---|---|
| Issues abertas/atualizadas (24h) | 10 | ⚠️ Alta atividade (possível dívida técnica) |
| PRs abertas/atualizadas (24h) | 7 | ✅ Fluxo de contribuição saudável |
| PRs merged (24h) | 0 | ⚠️ Nenhum merge no período |
| Releases (24h) | 0 | ℹ️ Sem release |
| Bugs críticos abertos | 4 | 🔴 Requer atenção imediata |
| PRs respondendo bugs críticos | 4 | ✅ Community responsive |
| PRs aguardando review | 7 | ⚠️ Potencial gargalo de review |

**Índice de Saúde Geral:** 🟡 **Moderado** — Atividade alta com resposta comunitária ativa, mas 4 bugs críticos em aberto sem resolução mergeada.

---

*Relatório gerado automaticamente com base nos dados do GitHub de [CoPaw/QwenPaw](https://github.com/agentscope-ai/QwenPaw) em 2026-09-20.*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-09-20

## 1. Panorama do Dia

O projeto ZeroClaw demonstra **alta atividade de desenvolvimento** na data de hoje, com 34 issues e 50 PRs atualizados nas últimas 24 horas — embora nenhuma release ou merge tenha sido concluído nesse período. A atenção está concentrada em três eixos principais: (1) **segurança** — com múltiplos bugs S0 relacionados a bypasses no classificador de risco do git e aprovação silenciosa em agentes não-interativos; (2) **melhorias em canais** — especialmente WhatsApp Web (linking quebrado, menções, imagens, thumbnails de PDF); e (3) **infraestrutura de segurança** — um batch massivo de PRs stacked para PKCE browser e enrollment cross-surface (#10321, #10263, #10259). A base de código está em estado de alta complexidade, com PRs de tamanho XL aguardando revisão.

---

## 2. Lançamentos

**Nenhuma release nas últimas 24 horas.**

O tracker oficial de roadmap ([#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)) indica que a **v0.8.6** (Phase 2 runtime) e a **v0.9.0** (Phase 3 gateway separation) estão em progresso ativo. Os PRs de segurança em stacking são pré-requisitos para essas versões. A ausência de releases hoje reflete a fase de integração dos PRs em revisão, não estagnação.

---

## 3. Progresso do Projeto

**Nenhum PR foi mergeado ou fechado nas últimas 24 horas.** Porém, a atividade preparatória é substancial. Os PRs mais significativos em estágio avançado de revisão:

| PR | Descrição | Tamanho | Status |
|---|---|---|---|
| [#10321](https://github.com/zeroclaw-labs/zeroclaw/pull/10321) | Browser PKCE + cross-surface enrollment API (stage 5) | XL | Accepted |
| [#10263](https://github.com/zeroclaw-labs/zeroclaw/pull/10263) | Compose principal tool selectors into agent sessions | XL | Accepted |
| [#10259](https://github.com/zeroclaw-labs/zeroclaw/pull/10259) | Enforce authenticated principals on RPC with native+peercred | XL | Accepted |
| [#10610](https://github.com/zeroclaw-labs/zeroclaw/pull/10610) | Implement shell V1 permission policy (RFC #7155 Phase 0+1) | XL | Needs author action |
| [#10525](https://github.com/zeroclaw-labs/zeroclaw/pull/10525) | Relay-terminated browser enrollment frontdoor (phase 1) | XL | Accepted |
| [#10592](https://github.com/zeroclaw-labs/zeroclaw/pull/10592) | Self-serve enrollment via `relay claim` | XL | Needs maintainer review |
| [#10480](https://github.com/zeroclaw-labs/zeroclaw/pull/10480) | Recover from rejected image requests | XL | Needs maintainer review |
| [#10351](https://github.com/zeroclaw-labs/zeroclaw/pull/10351) | Enforce execution-tree iteration budgets | XL | Needs maintainer review |
| [#9809](https://github.com/zeroclaw-labs/zeroclaw/pull/9809) | Support multiple models per provider profile | XL | Needs author action |

**Insight:** Há um acúmulo de ~9 PRs de tamanho XL simultaneamente em pipeline. A capacidade de revisão da equipe parece ser o gargalo atual.

---

## 4. Temas Quentes da Comunidade

Os topics com maior volume de discussão e participação:

### 🔴 Segurança do Shell e Git (3 bugs S0)
- [#9627](https://github.com/zeroclaw-labs/zeroclaw/issues/9627) — **git write verbs bypassam o classificador de risco** via opções globais `-C` / `--git-dir`. Severity S0.
- [#10966](https://github.com/zeroclaw-labs/zeroclaw/issues/10966) — **Git `--attr-source` pode ocultar** um subcomando mutante do classificador. Severity S0.
- [#10968](https://github.com/zeroclaw-labs/zeroclaw/issues/10968) — **Agentes não-interativos (cron, heartbeat, headless SOP) rodam sem ApprovalManager**, tornando aprovações de risco silenciosamente inertes. Severity S0.

### 📱 Canal WhatsApp Web — Múltiplos Defeitos Críticos
- [#8627](https://github.com/zeroclaw-labs/zeroclaw/issues/8627) — Device linking quebrado por novo gate passkey/SHORTCAKE do WhatsApp. **Priority p1**, S1. Aprovado mas sem solução.
- [#10972](https://github.com/zeroclaw-labs/zeroclaw/issues/10972) — Imagens recebidas como texto literal `[Image]`, inutilizando visão. S2.
- [#10973](https://github.com/zeroclaw-labs/zeroclaw/issues/10973) — Menções quebradas bidirecionalmente. S3.

### 🤖 RFCs Arquiteturais Recentes (2 RFCs abertas em 2 dias)
- [#10930](https://github.com/zeroclaw-labs/zeroclaw/issues/10930) — **RFC: One durable primitive for questions an agent asks a human**. Proposta de reutilizar o SOP approval gate para Durable Questions.
- [#10929](https://github.com/zeroclaw-labs/zeroclaw/issues/10929) — **RFC: Delivery receipts for outbound messages**. Proposta de identificadores para rastrear entrega de mensagens.

### 🧠 Provider e Cache
- [#10663](https://github.com/zeroclaw-labs/zeroclaw/issues/10663) — Anthropic cache markers TTL configurável (atualmente fixo em 5 min).
- [#10952](https://github.com/zeroclaw-labs/zeroclaw/issues/10952) — Seam sanitizers reescrevem reasoning dentro do envelope de tool-call, causando rejeição de replay pelo Anthropic.

---

## 5. Bugs e Estabilidade

### S0 — Segurança / Data Loss (3 bugs)

| Issue | Descrição | Link |
|---|---|---|
| #9627 | Git write verbs (push, commit, merge) ignoram o approval gate via `-C`/`--git-dir` | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/9627) |
| #10966 | `--attr-source` oculta subcomandos mutantes do classificador | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/10966) |
| #10968 | Agentes unattended sem ApprovalManager — aprovações de risco inertes | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/10968) |

**⚠️ Alerta:** Todos os três bugs S0 afetam o módulo de segurança/ sandbox e representam risco imediato em ambientes de produção. A equipe precisa priorizar esses fixes antes da próxima release.

### S1 — Workflow Blocked (1 bug)
- [#8627](https://github.com/zeroclaw-labs/zeroclaw/issues/8627) — WhatsApp Web device linking completamente bloqueado (Priority p1).

### S2 — Major Feature Broken / Degraded (8+ bugs)
- [#10972](https://github.com/zeroclaw-labs/zeroclaw/issues/10972) — Imagens WhatsApp não chegam ao modelo.
- [#10736](https://github.com/zeroclaw-labs/zeroclaw/issues/10736) — Pre-output stream failure ignora fallback non-streaming.
- [#10950](https://github.com/zeroclaw-labs/zeroclaw/issues/10950) — `cost.warn_at_percent` ignorado pelo runtime.
- [#10948](https://github.com/zeroclaw-labs/zeroclaw/issues/10948) — Interruption-scope keys colidem entre componentes.
- [#10667](https://github.com/zeroclaw-labs/zeroclaw/issues/10667) — ZeroCode duplica resposta streamada.
- [#10951](https://github.com/zeroclaw-labs/zeroclaw/issues/10951) — ZeroCode Config refresh duplicado após save.
- [#10977](https://github.com/zeroclaw-labs/zeroclaw/issues/10977) — WhatsApp Web sem `create_room`/`invite_user` implementados.

**Pull Request em progresso:** [#10964](https://github.com/zeroclaw-labs/zeroclaw/pull/10964) corrige o bug do refresh duplicado do ZeroCode Config.

### S3 — Degraded Behavior (1 bug)
- [#10973](https://github.com/zeroclaw-labs/zeroclaw/issues/10973) — Menções WhatsApp quebradas (resolvido).

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Aprovadas em Desenvolvimento

| Issue | Descrição | Link |
|---|---|---|
| #8046 | Telegram webhook mode opcional (alternativa ao long polling getUpdates) | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8046) |
| #10531 | Expor progresso de sub-agentes delegate ao parent (tool receipts, partial output) | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/10531) |
| #10663 | Configurable 1-hour TTL para Anthropic cache markers | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/10663) |
| #10891 | Carry channel provenance through runtime admission | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/10891) |
| #10962 | Forward tool result payloads over gateway `/ws/chat` stream | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/10962) |
| #10963 | Forward session identity to delegate sub-agents | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/10963) |

### Features Novas (últimas 24h)

| Issue | Descrição | Link |
|---|---|---|
| #10970 | Host-scoped admission control e per-agent resource bounds | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/10970) |
| #10969 | Jitter window para cron e heartbeat dispatch | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/10969) |
| #10979 (PR) | Implement `create_room` e `invite_user` para WhatsApp Web | [PR](https://github.com/zeroclaw-labs/zeroclaw/pull/10979) |
| #10980 (PR) | PDF thumbnail previews no WhatsApp Web | [PR](https://github.com/zeroclaw-labs/zeroclaw/pull/10980) |
| #10956 (PR) | Detect platform default shell | [PR](https://github.com/zeroclaw-labs/zeroclaw/pull/10956) |
| #10954 (PR) | Initialize PowerShell output as UTF-8 | [PR](https://github.com/zeroclaw-labs/zeroclaw/pull/10954) |
| #10640 (PR) | Passive Telegram group context | [PR](https://github.com/zeroclaw-labs/zeroclaw/pull/10640) |
| #10960 (PR) | `ZEROCLAW_CACHE_TTL` env var para cache TTL | [PR](https://github.com/zeroclaw-labs/zeroclaw/pull/10960) |
| #10959 (PR) | Sort tool specs para prompt-cache prefix estável | [PR](https://github.com/zeroclaw-labs/zeroclaw/pull/10959) |

**Sinais de Roadmap:**
- **Multi-model per provider** (#9809) é uma demanda consolidada.
- **Shell V1 permission policy** (#10610) avança como prioridade de segurança.
- **WhatsApp Web** está sendo ativamente melhorado com 4+ PRs/issues simultâneos.

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Categoria | Dor | Evidência |
|---|---|---|
| **Segurança** | Classificador de risco do git é bypassável por opções globais — risco S0 real | [#9627](https://github.com/zeroclaw-labs/zeroclaw/issues/9627), [#10966](https://github.com/zeroclaw-labs/zeroclaw/issues/10966) |
| **WhatsApp Web** | Canal completamente quebrado para novos dispositivos (passkey gate) | [#8627](https://github.com/zeroclaw-labs/zeroclaw/issues/8627) |
| **WhatsApp Web** | Imagens não funcionam — visão inutilizada | [#10972](https://github.com/zeroclaw-labs/zeroclaw/issues/10972) |
| **Agentes unattended** | Cron/heartbeat rodam sem aprovações de risco — silêncio perigoso | [#10968](https://github.com/zeroclaw-labs/zeroclaw/issues/10968) |
| **Cache de prompts** | Anthropic cache com TTL fixo de 5 min subótimo; sem controle | [#10663](https://github.com/zeroclaw-labs/zeroclaw/issues/10663), [#10960](https://github.com/zeroclaw-labs/zeroclaw/pull/10960) |
| **Delegate tooling** | Sem visibilidade de progresso de sub-agentes até conclusão | [#10531](https://github.com/zeroclaw-labs/zeroclaw/issues/10531) |
| **Gateway streaming** | Tool results não são forwardados no stream WebSocket | [#10962](https://github.com/zeroclaw-labs/zeroclaw/issues/10962) |
| **ZeroCode UI** | Refresh duplicado após save; duplicação de respostas streamadas | [#10964](https://github.com/zeroclaw-labs/zeroclaw/pull/10964), [#10667](https://github.com/zeroclaw-labs/zeroclaw/issues/10667) |
| **Resource contention** | Máquinas com muitos agentes degradam em estabilidade, não latência | [#10970](https://github.com/zeroclaw-labs/zeroclaw/issues/10970) |

### Cenários de Uso Emergentes
- **Multi-bot em grupos Telegram** — demanda por `passive_group_context` ([#10640](https://github.com/zeroclaw-labs/zeroclaw/pull/10640)).
- **WhatsApp Groups via `channel_room`** — necessidade de `create_room`/`invite_user` ([#10979](https://github.com/zeroclaw-labs/zeroclaw/pull/10979)).
- **Relay enrollment self-serve** — demanda por `relay claim` CLI ([#10592](https://github.com/zeroclaw-labs/zeroclaw/pull/10592)).

---

## 8. Backlog que Merece Atenção

### Issues Sem Atribuição ou Estagnadas

| Issue | Tempo Aberto | Descrição | Link |
|---|---|---|---|
| #8046 | **93 dias** | Telegram webhook mode — enhancement aceito, sem movimento | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8046) |
| #8627 | **80 dias** | WhatsApp device linking quebrado (Priority p1) | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8627) |
| #7432 | **~103 dias** | Tracker de v0.8.6 e v0.9.0 — progresso lento | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) |
| #8691 | **~78 dias** | ADR inventory tracker — sem progresso significativo | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8691) |
| #9649 | **~49 dias** | Test parity row — status "in-progress" mas mesmo título | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/9649) |

### PRs com Alto Impacto Aguardando Revisão

| PR | Dias em Review | Descrição | Link |
|---|---|---|---|
| #10321 | ~27 dias | PKCE + enrollment API (XL, accepted) | [PR](https://github.com/zeroclaw-labs/zeroclaw/pull/10321) |
| #10610 | ~16 dias | Shell V1 permission policy (XL, needs author action) | [PR](https://github.com/zeroclaw-labs/zeroclaw/pull/10610) |
| #9809 | ~44 dias | Multi-model per provider (XL, needs author action) | [PR](https://github.com/zeroclaw-labs/zeroclaw/pull/9809) |
| #10592 | ~17 dias | Relay claim CLI (XL, needs maintainer review) | [PR](https://github.com/zeroclaw-labs/zeroclaw/pull/10592) |
| #10480 | ~21 dias | Recover from rejected image requests (XL) | [PR](https://github.com/zeroclaw-labs/zeroclaw/pull/10480) |

---

## Saúde Geral do Projeto

| Indicador | Status | Observação |
|

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*