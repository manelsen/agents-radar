# Resumo diário do ecossistema de agentes de IA 2026-09-30

> Issues: 1 | PRs: 1 | Projetos cobertos: 7 | Gerado em: 2026-09-29 23:22 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório do Projeto NullClaw — 2026-09-30

---

## 1. Panorama do Dia

O projeto NullClaw manteve atividade moderada em 30 de setembro de 2026. Uma PR foi fechada (v20260929), indicando progresso contínuo no ciclo de desenvolvimento, enquanto uma nova issue foi aberta propondo uma integração com o serviço MemCode para expansão das capacidades de memória do sistema. Não houve lançamentos formais registrados nas últimas 24h, embora a versão v20260929 tenha sido preparada para release.

---

## 2. Lançamentos

**Nenhum release formal registrado nas últimas 24h.**

A PR [#1014](https://github.com/nullclaw/nullclaw/pull/1014) prepara a versão v20260929 com as seguintes mudanças:

- **Provedor de busca web**: agora fixado ao provedor configurado pelo usuário
- **Correção Exa**: resolução de problema com headers `Content-Type` duplicados sendo rejeitados
- **Processamento de Markdown**: remoção de marcadores Markdown antes de respostas oficiais do QQ
- **Bump de versão**: preparação para tag v20260929

*Status*: PR fechada em 2026-09-29, aguardando validação do workflow de release.

---

## 3. Progresso do Projeto

**PR fechada:**

| PR | Autor | Resumo | Status |
|----|-------|--------|--------|
| [#1014 v20260929](https://github.com/nullclaw/nullclaw/pull/1014) | elwina | Pin busca web ao provedor configurado; correção Exa headers; strip Markdown em respostas QQ | CLOSED |

**Avanços entregue:**
- Melhoria na estabilidade da busca web com definição explícita de provedor
- Correção de bug que causava rejeição de requisições pelo Exa
- Aprimoramento na formatação de respostas oficiais

---

## 4. Temas Quentes da Comunidade

**Issue em destaque:**

| Issue | Autor | Tema | Comentários | Reactions |
|-------|-------|------|-------------|-----------|
| [#1015 Hosted MemCode engine](https://github.com/nullclaw/nullclaw/issues/1015) | vivekgupta-memcode | Memória remota cross-device | 0 | 0 |

**Análise:** A proposta de integração com MemCode representa uma demanda por **persistência de memória em múltiplos dispositivos**. O autor destaca que o projeto já possui arquitetura de engines de memória intercambiáveis, e a adição de uma opção remota permitiria sincronização sem aumento de storage local. A issue ainda não recebeu feedback da equipe.

---

## 5. Bugs e Estabilidade

**Nenhum bug reportado nas últimas 24h.**

A PR v20260929 corrige retroativamente:
- Rejeição de requisições pelo Exa devido a headers duplicados (bug corrigido)

**Métricas de estabilidade:**
- Issues abertas/ativas: 1
- Bugs críticos abertos: 0

---

## 6. Pedidos de Features e Sinais de Roadmap

**Feature request aberta:**

- **[#1015](https://github.com/nullclaw/nullclaw/issues/1015)** — *Hosted MemCode engine for nullclaw memory interface*

**Sinais de roadmap identificados:**
- Expansão de opções de storage de memória para além do ambiente local
- Suporte a sincronização cross-device via serviços remote
- Arquitetura modular de engines já preparada para extensões

A equipe não comentou ainda sobre viabilidade ou priorização.

---

## 7. Resumo de Feedback dos Usuários

**Feedback implícito detectado:**

A proposta de MemCode (#1015) sinaliza:
- **Desejo**: manter memórias selecionadas disponíveis entre dispositivos
- **Dor**: limitação de storage local em alguns runtimes
- **Cenário de uso**: usuários com múltiplas máquinas querendo continuidade de contexto

**Nível de engajamento**: Baixo — apenas 1 issue e 1 PR, zero comentários externos.

---

## 8. Backlog que Merece Atenção

| Issue/PR | Idade | Status | Prioridade |
|----------|-------|--------|------------|
| [#1015](https://github.com/nullclaw/nullclaw/issues/1015) | 1 dia | Aberta, sem resposta | ⚠️ Precisa triagem |

**Ação recomendada:**
- Avaliar viabilidade técnica da integração MemCode
- Fornecer feedback inicial ao autor (vivekgupta-memcode) para manter engajamento da comunidade

---

## Métricas Consolidada (24h)

| Métrica | Valor |
|---------|-------|
| Issues abertas | 1 |
| PRs merged/fechadas | 1 |
| Releases | 0 |
| Comentários totais | 0 |
| Bugs críticos | 0 |
| Engajamento (reações) | 0 |

**Veredicto de saúde:** 🟡 Projeto com atividade leve. Atenção necessária à comunicação com contribuidores externos.

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo — Ecossistema Open Source de Agentes de IA

**Data de corte:** 2026-09-30
**Projetos analisados:** NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw, ZeroClaw

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **duas velocidades distintas** em setembro de 2026. Projetos como NanoBot, IronClaw e ZeroClaw operam em alta intensidade — 50+ PRs por ciclo, múltiplas linhas de desenvolvimento paralelas — enquanto NullClaw e PicoClaw mantêm ritmo mais conservador, indicando fases de maturação ou equipes menores. A preocupação predominante é **estabilidade multiplataforma**: Windows é bloqueante em Hermes Agent, a Web UI degrada sob uso intenso em PicoClaw, e bugs de sessão/state management afetam Desktop apps em múltiplos projetos. Segurança emerge como tema crítico em ZeroClaw (3 bugs S0 reportados) e Hermes Agent (CVEs em js-yaml). O segmento de memória persistente e sincronização cross-device surge como demanda transversal — presente em NullClaw, ZeroClaw e IronClaw — sinalizando maturidade do用例 beyond chatbots simples.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs Ativos | PRs Merged | Releases | Avaliação de Saúde |
|---------|-------------|-----------|------------|----------|-------------------|
| **NullClaw** | 1 | 1 | 1 | 0 | 🟡 Atenção — engajamento externo baixo |
| **NanoBot** | 5 | 28 | 13 | 0 | 🟢 Forte — ciclo de entrega intenso |
| **Hermes Agent** | 50 | 50 | 4 | 0 | 🟡 Cuidado — blockers P0 + segurança |
| **PicoClaw** | 6 | 3 | 1 | 0 | ⚠️ Atenção — 3 bugs críticos em UI |
| **IronClaw** | 2 | 5 | 1 | 1 (v1.4.1) | 🟢 Sólido — release stable + PRs novos |
| **CoPaw** | 12 | 36 | 20 | 0 | 🟡 Razoável — 3 bugs críticos abertos |
| **ZeroClaw** | 27 | 50 | 2 | 0 | 🟠 Preocupante — 3 bugs S0 em security |

**Observações quantitativas:**
- **Maior throughput absoluto:** ZeroClaw (50 PRs) e Hermes Agent (50 PRs/50 issues)
- **Maior eficiência de merge:** NanoBot (13/28 = 46%) e CoPaw (20/36 = 56%)
- **Release cadence:** Apenas IronClaw publicou release formal (v1.4.1 com 2 correções críticas)
- **Concentração de bugs críticos:** PicoClaw (3/6 issues), Hermes Agent (P0s em Windows + security), ZeroClaw (3 S0 security)

---

## 3. Posicionamento do Projeto Principal

### NanoBot — Líder em Throughput de Desenvolvimento

**Vantagens frente aos pares:**
- **Refatoração arquitetural ambiciosa:** Migração de JSONL para SQLite transacional (#5943) resolve gargalo estrutural de sessões persistentes — diferencial técnico significativo que nenhum outro projeto demonstra neste estágio
- **Ecossistema MCP maduro:** Issue #5298 (budget-aware tool schemas) e PR #1759 (lazy loading) indicam pensamento sofisticado sobre custos de contexto, tema que será central em 2027
- **Cobertura multi-canal:** Telegram, WeChat, WebUI com políticas granulares — a proposta #5972/#5973 de per-topic policies é unique no ecossistema

**Tamanho da comunidade:** Alto engajamento (41 PRs, 13 merges) sugere contributor base ativa. Issue #5298 com 2 comentários indica comunidade pequena mas técnica.

### IronClaw — Referência em Estabilidade e Onboarding

**Vantagens frente aos pares:**
- **Release cadence disciplinado:** v1.4.1 promotion de RC2 demonstra pipeline de release maduro
- **Qualidade de PRs:** 3 contribuidores novos simultâneos (#8118, #8117, #8119) indica onboarding funcional e curva de entrada acessível
- **Roadmap alinhado com enterprise:** RFC #7889 (remote edge workers) endereça demanda real de operadores com infraestrutura distribuída — diferenciação clara para B2B

### ZeroClaw — Maior Complexidade, Maior Risco

**Posicionamento:** Foco explícito em segurança e multi-tenancy (OIDC, permission profiles, memory plane isolation). Feature flags para SaaS/CLI tools (#11221) e Schema V4 (#8754) indicam ambição de platformização.

**Risco:** 3 bugs S0 simultâneos em security/sandbox é indicativo de dívida técnica em pipeline de delegação de tools —可能要 audience adequado para adopters.

---

## 4. Focos Técnicos Compartilhados

### A) Persistência e Gerenciamento de Sessões

| Projeto | Abordagem | Status |
|---------|-----------|--------|
| **NanoBot** | Migração JSONL → SQLite | Em progresso (#5943) |
| **ZeroClaw** | Session persistence backend (IBM Db2) | PR #9254 adiado |
| **Hermes Agent** | Session history rollback bugs | P2 (#78010, #126091) |
| **CoPaw** | Transcript history paginado + durável | PR #7931 em revisão |

**Síntese:** Multiplos projetos investem em durability de sessão. A abordagem transacional (SQLite) de NanoBot parece mais madura que a estratégia de backend-pluggable de ZeroClaw.

### B) Memory Architecture e Cross-Device Sync

| Projeto | Feature | Estágio |
|---------|---------|---------|
| **NullClaw** | MemCode hosted engine (#1015) | Proposta |
| **ZeroClaw** | RFC: Knowledge graph como memory layer (#11053) | RFC |
| **ZeroClaw** | RFC: Knowledge corpus RAG (#11235) | RFC |
| **IronClaw** | Tool selection via embeddings turn-0 (#8119) | Implementação |

**Síntese:** Memória evolui de simple store para knowledge layer. A proposta de NullClaw (MemCode externo) e ZeroClaw (knowledge graph) representam abordagens divergentes — embedded vs. graph-based.

### C) Multi-Platform e Channel Integration

| Plataforma | Projetos com Suporte | Estado |
|------------|---------------------|--------|
| **Telegram** | NanoBot, CoPaw, Hermes Agent | Maduro em NanoBot/CoPaw; feature requests em Hermes |
| **Matrix** | Hermes Agent | PRs drafts (#126283, #126280) |
| **WeChat** | NanoBot | Issue #5900 (logs verbosos) |
| **QQ** | CoPaw, NullClaw | Bugs ativos em CoPaw (#7946) |
| **WhatsApp** | Hermes Agent, ZeroClaw | Bugs críticos em ambos (caption, media) |
| **Teams** | Hermes Agent | PR #128609 aberto |

**Síntese:** Telegram é o canal mais desenvolvido (NanoBot com per-topic policies, CoPaw com multi-bot). Teams e Matrix emergem como próxima wave de integração.

### D) Performance de Interface (Web UI / Desktop)

| Projeto | Problema | Severidade |
|---------|----------|------------|
| **PicoClaw** | Input laggy com histórico longo (#3281) | 🔴 Crítica |
| **PicoClaw** | Mensagens descartadas silenciosamente (#3408) | 🔴 Crítica |
| **Hermes Agent** | Session state rollback (31 msgs perdidas) (#78010) | P2 |
| **ZeroClaw** | Session resume restaura ambiente após revogação (#11197) | S0 |

**Síntese:** UI responsiveness e state management são dor transversal. PicoClaw é o caso mais agudo (3 bugs UI críticos em 24h).

---

## 5. Análise de Diferenciação

| Projeto | Público-Alvo Primário | Arquitetura Diferenciadora | Foco Estratégico |
|---------|----------------------|---------------------------|------------------|
| **NullClaw** | Usuários individuais multi-device | Engine de memória intercambiável | Simplicidade, portabilidade |
| **NanoBot** | Desenvolvedores power-user | SQLite transacional, subagents | Escalabilidade, multi-tenant |
| **Hermes Agent** | Usuários Windows + Matrix | Desktop-first Electron | Voice, platform parity |
| **PicoClaw** | Equipes técnicas | Subagent-driven development | Autonomia, escalabilidade |
| **IronClaw** | Operadores enterprise | Remote edge workers, opt-in features | Deploy distribuído, segurança |
| **CoPaw** | Usuários multi-canal (Telegram/QQ) | Cross-platform (Win/Linux) | Resiliência, integrations |
| **ZeroClaw** | Enterprise com compliance | Security-first, OIDC, memory isolation | Multi-tenancy, RAG |

**Observações:**
- **NullClaw e PicoClaw** compartilham sufixo "Claw" mas atendem necessidades distintas — NullClaw foca em memória, PicoClaw em autonomia de agentes
- **Hermes Agent vs. CoPaw** competem no mesmo espaço (multi-canal) mas Hermes tem mais issues de estabilidade
- **IronClaw e ZeroClaw** miram enterprise, mas IronClaw demonstra maturidade operacional (release cadence), enquanto ZeroClaw ainda enfrenta bugs S0

---

## 6. Tração e Maturidade da Comunidade

### Velocidade de Iteração

| Projeto | PRs/24h | Bugs Resolvidos (24h) | Release Cadence | Veredicto |
|---------|---------|----------------------|-----------------|-----------|
| **NanoBot** | 13 merged | 3 patches prontos | Nenhuma (pre-release) | 🔥 Iterando rápido, maturando |
| **CoPaw** | 20 merged | ~4 bugs fechados | Nenhuma (2.2.2b3/b4) | 🟢 Throughput alto |
| **Hermes Agent** | 4 merged | 0 bugs resolvidos | Nenhuma | 🟡 Volume alto, execução baixa |
| **IronClaw** | 1 merged | 0 bugs (estável) | v1.4.1 (ontem) | 🟢 Consolidando qualidade |
| **NullClaw** | 1 merged | 0 bugs | Nenhuma | 🟡 Baixa atividade |
| **PicoClaw** | 1 merged | 0 bugs | Nenhuma | 🟡 Needs momentum |
| **ZeroClaw** | 2 merged | 0 bugs | Nenhuma | 🟡 Security focus priority |

### Saúde da Comunidade

| Indicador | NanoBot | IronClaw | CoPaw | Hermes | PicoClaw | NullClaw | ZeroClaw |
|-----------|---------|----------|-------|--------|----------|----------|----------|
| Contribuidores novos (24h) | Moderado | **3 simultâneos** | Múltiplos | Baixo | 1 | 0 | Moderado |
| Issues respondidas <24h | ✅ | ✅ | ✅ | ⚠️ P0s abertas | ⚠️ | ❌ | ⚠️ |
| RFCs em discussão ativa | 1 (#5298) | 1 (#7889) | 0 | 0 | 0 | 0 | 3 |
| Backlog negligenciado | Baixo | **0 items** | #2359 (6 meses) | #68128 (70+ dias) | #440 (7 meses) | #1015 (1 dia) | #6105 (5 meses) |

**Ranking de maturidade comunitária:**
1. 🥇 **IronClaw** — release cadence + 0 backlog negligenciado + contribuidores novos
2. 🥈 **NanoBot** — throughput alto + bugs resolvidos rapidamente
3. 🥉 **CoPaw** — volume sólido, mas issue antiga #2359 sem resolução
4. **PicoClaw** — comunidade pequena, mas engajamento concentrado (mesmo autor em múltiplas issues)
5. **ZeroClaw** — volume alto, mas S0s em aberto indicam pressão de segurança
6. **Hermes Agent** — volume alto, mas 70+ dias sem resposta em #68128
7. **NullClaw** — menor volume, sem feedback externo ainda

---

## 7. Sinais de Tendência

### Tendência 1: Enterprise Adoption em Curso
**Evidência:**
- IronClaw RFC #7889 (remote edge workers) + OIDC consolidation
- ZeroClaw Schema V4 + permission profiles + memory plane isolation
- CoPaw #8015 (marketplace customizável para air-gapped/intranet)
- NanoBot multi-tenant via Telegram Topics

**Interpretação:** Multiple projetos movem simultaneamente para deployment em ambientes corporativos com requisitos de segurança, isolamento e escala distribuída. Este é um sinal de que o mercado está amadurecendo beyond early adopters individuais.

### Tendência 2: Context Economics como Prioridade
**Evidência:**
- NanoBot #5298 (budget model-visible MCP schemas)
- NanoBot #1759 (lazy loading de MCP tools, em conflito há meses)
- IronClaw #8119 (turn-0 tool selection via embeddings)
- PicoClaw #440 (context-window bounding + loop detection, 7 meses aberta)

**Interpretação:** A comunidade reconhece que custo de contexto (tokens, chamadas de ferramenta) é vetor de otimização prioritário. A abordagem de embeddings para ranking de tools (IronClaw) pode se tornar padrão.

### Tendência 3: Voice e Multi-Modal Emergindo
**Evidência:**
- Hermes Agent #127275 (STT hallucination filter + voice.barge_in)
- Hermes Agent SIMD compatibility (#128596)
- Hermes Agent browser_harness tool

**Interpretação:** Voice interaction ainda é capability early-stage. Hermes Agent demonstra investimento pioneiro, mas bugs como phantom turns e STT hallucinations indicam que a tecnologia precisa de maturação.

### Tendência 4: Fragmentação de Canais, Consolidação de Motores
**Evidência:**
- 7 projetos suportam diferentes subconjuntos de canais (Telegram, Matrix, WhatsApp, WeChat, QQ, Teams)
- 0 projetos possuem todos os canais
- NanoBot SQLite sessions, IronClaw tool selection, ZeroClaw security — cada projeto investe em um "motor" diferente

**Interpretação:** Não haverá "vencedor único" em canais —specialização é racionalgiven a complexidade de APIs proprietárias. Diferenciação virá de engine capabilities, não de cobertura de canais.

### Tendência 5: Web UI como Ponto de Dor Crítico
**Evidência:**
- PicoClaw: 3 bugs UI críticos em 24h (lag, sessões fantasma, mensagens perdidas)
- Hermes Agent: Desktop app com 60%+ das issues P2/P3
- CoPaw: Transcript history + font size requests

**Interpretação:** A experiência de interface web/desktop é o principal ponto de fricção para usuários. Bugs de UI têm impacto desproporcional na percepção de qualidade. Projetos que investirem em DX de interface terão vantagem competitiva.

---

## Recomendações para Decisores

| Decisor | Recomendação |
|---------|--------------|
| **Adotante empresarial** | Priorizar **IronClaw** (maturidade) ou **NanoBot** (feature completeness). Evitar Hermes Agent e ZeroClaw até resolução de blockers P0/S0. |
| **Contribuidor individual** | **NanoBot** oferece maior superfície de contribuição (28 PRs abertas). **IronClaw** para onboard rápido (3 PRs simultâneas de novos contribuidores). |
| **Pesquisador/Tecnólogo** | Acompanhar **NullClaw** (#1015 MemCode) e **ZeroClaw** (#11053 knowledge graph) para padrões de memória de próxima geração. |
| **Usuário multi-canal** | **CoPaw** para Telegram/QQ, **NanoBot** para Telegram/WeChat/WebUI. Ambos maduros para integração. |
| **Segurança-first** | Aguardar resolução de S0s em **ZeroClaw** antes de deploy em produção. Monitorar #128594 em Hermes Agent (js-yaml CVE). |

---

*Relatório gerado em 2026-09-30. Dados extraídos dos resumos de atividade da comunidade de cada projeto.*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-09-30

## 1. Panorama do Dia

O NanoBot apresenta alta atividade de desenvolvimento com **41 PRs atualizados nas últimas 24h**, dos quais 13 já foram merged/fechados, demonstrando um ritmo de entrega intenso. A equipe está focada em melhorar a estabilidade do sistema de mensagens (especialmente no Telegram e WebUI), refatorar a arquitetura de sessões para SQLite e corrigir bugs críticos relacionados à seleção de modelos e fallbacks. Nenhum release foi publicado hoje, indicando que a equipe está consolidando mudanças antes de um próximo版本. A comunidade demonstra interesse em features de granularidade fina para canais (como políticas por tópico no Telegram) e otimização de custos com ferramentas MCP.

---

## 2. Lançamentos

**Nenhum release publicado nas últimas 24h.**

A ausência de releases sugere que a equipe está na fase final de testes e revisão das múltiplas PRs abertas, possivelmente preparando um release coordenado que inclua:
- Refatoração de sessões para SQLite (#5943)
- Correções de modelos obsoletos (#5979)
- Melhorias no TUI e WebUI (#5980, #5982)
- Políticas granulares para Telegram (#5973, #5974)

---

## 3. Progresso do Projeto

### PRs Merged/Fechadas Hoje (13 total)

| # | Título | Impacto |
|---|--------|--------|
| [#5976](https://github.com/HKUDS/nanobot/pull/5976) | `fix(my): scope subagent snapshots to the current session` | **Segurança** — Garante que snapshots de subagentes ficam restritos à sessão canônica, impedindo acesso cross-session |
| [#5975](https://github.com/HKUDS/nanobot/pull/5975) | `refactor(tui): organize source by feature boundaries` | **Manutenibilidade** — Reorganiza código TUI em `app`, `client`, `composer`, `menus`, `platform`, `rendering`, `views` |
| [#4616](https://github.com/HKUDS/nanobot/pull/4616) | `fix(agent): route direct subagent results in-turn` | **Arquitetura** — Direciona resultados de subagentes diretos para a fila pendente do turno ativo |
| [#5811](https://github.com/HKUDS/nanobot/pull/5811) | `refactor(agent): persist subagent sessions through shared execution` | **Persistência** — Subagentes agora criam sessões `subagent:<task_id>` com metadados completos |
| [#5978](https://github.com/HKUDS/nanobot/pull/5978) | `fix(webui): hide provider models past OpenAI shutdown_date` | **UX** — Remove modelos descontinuados da seleção (duplicado de #5979) |

### Destaques Arquiteturais

A refatoração de sessões (#5943 em andamento) é a mudança mais significativa em curso: substitui JSONL por SQLite transacional como store autoritativo, removendo缓存 compartilhado mutável e isolando I/O de armazenamento do event loop.

---

## 4. Temas Quentes da Comunidade

### Issues com Mais Comentários

1. **[#5298](https://github.com/HKUDS/nanobot/issues/5298)** — Proposta: budget model-visible MCP schemas *(2 comentários)*
   - **Demanda:** Usuários com grandes conjuntos de ferramentas MCP buscam minimizar custos de contexto
   - **Análise:** A issue propõe tornar schemas de ferramentas visíveis apenas para modelos que têm budget disponível, evitando envio desnecessário paraLLM mais caros

2. **[#5900](https://github.com/HKUDS/nanobot/issues/5900)** — Silent context compaction *(1 comentário)*
   - **Demanda:** Reduzir verbosidade de logs no canal WeChat durante polling e compactação silenciosa
   - **Análise:** Usuários experientes preferem operações de manutenção invisíveis ao usuário

### PRs em Destaque (Alta Atividade)

| # | Título | Labels | Interesse |
|---|--------|--------|-----------|
| [#5973](https://github.com/HKUDS/nanobot/pull/5973) | `feat(telegram): per-chat and per-topic group policy overrides` | feature, channel | **Alto** — Resolve limitação real em grupos com fóruns |
| [#5983](https://github.com/HKUDS/nanobot/pull/5983) | `feat(webui): catalog-backed reasoning effort selection` | feature, webui | **Médio** — Melhora UX ao usar dados do catálogo |
| [#1759](https://github.com/HKUDS/nanobot/pull/1759) | `feat: Reduces MCP tool context overhead` | conflict | **Alto** — Lazy loading de ferramentas MCP (em conflito há meses) |

---

## 5. Bugs e Estabilidade

### Bugs Reportados Hoje

| Severidade | # | Descrição | Status |
|------------|---|-----------|--------|
| **P2** | [#5977](https://github.com/HKUDS/nanobot/issues/5977) | Model picker exibe modelos OpenAI já descontinuados (`gpt-5-chat-latest`, `gpt-5.3-chat-latest`) | **Fix pronto: #5979** |
| **P2** | [#5967](https://github.com/HKUDS/nanobot/issues/5967) | Fallback models ignorados quando provider retorna "insufficient credits" HTTP 400 | **Fix pronto: #5968** |
| **P2** | [#5780](https://github.com/HKUDS/nanobot/pull/5780) | Notificações de context compaction enviadas desnecessariamente | Em revisão |

### Análise de Severidade

- **P1:** Nenhum bug P1 reportado hoje
- **P2:** 3 bugs, todos com patches correspondentes em revisão
- **Tendencia:** A equipe está respondendo rapidamente a bugs, com tempo médio de patch < 24h

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Propostas

| # | Título | Área | Potencial Impacto |
|---|--------|------|-------------------|
| [#5972](https://github.com/HKUDS/nanobot/issues/5972) | Telegram per-chat e per-topic group policy | Canal | **Alto** — Permite bots atenderem diferentes grupos com políticas distintas |
| [#5974](https://github.com/HKUDS/nanobot/issues/5974) | Comando `/group` para gerenciar política de resposta | UI/Commands | **Médio** — Complemento à feature acima |
| [#5954](https://github.com/HKUDS/nanobot/pull/5954) | Agregar resultados concorrentes de subagentes | Subagentes | **Médio** — Melhora experiência com tarefas paralelas |
| [#5537](https://github.com/HKUDS/nanobot/pull/5537) | Persistir session focus entre turnos | Sessions | **Médio** — Adiciona continuidade conversacional |
| [#5902](https://github.com/HKUDS/nanobot/pull/5902) | Renomear tópico Telegram para título gerado | UX | **Baixo** — Melhoria cosmética |

### Sinais de Roadmap

1. **Eficiência de contexto MCP:** A issue #5298 e PR #1759 indicam foco em otimização de custos com ferramentas
2. **Granularidade por canal:** Telegram recebendo atenção especial para cenários multi-tenant
3. **WebUI como primeira classe:** Novas features de UI (#5983) mostram investimento em experiência do usuário

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Dor | Evidence | Impacto |
|-----|----------|---------|
| **Modelos indisponíveis no picker** | `#5977` — usuário perdeu sessão no Telegram ao selecionar `gpt-5-chat-latest` | Alto — experiência quebrada |
| **Fallbacks não funcionam** | `#5967` — agente "para de funcionar" mesmo com fallbacks configurados | Crítico — quebra de resiliência |
| **Notificações intrusivas de compactação** | `#5900`, `#5780` — usuários reclamam de mensagens "ruído" | Médio — UX degradada |
| **Logs verbosos no WeChat** | `#5900` — polling gera muito output | Médio — dificuldade de debugging |
| **Políticas únicas para todo o Telegram** | `#5972` — supergrupos com fóruns precisam de granularidade | Alto — limitação real de uso |

### Cenários de Uso Emergent

- **Multi-tenant via Telegram Topics:** Equipes querem bots ativos em tópicos de projeto mas silenciosos em tópicos de anúncio
- **Gerenciamento de custos MCP:** Usuários com muitas ferramentas buscam controle granular de budget
- **Sessões persistentes com foco:** Necessidade de continuidade sem re-explicar contexto

---

## 8. Backlog que Merece Atenção

### Issues Antigas Sem Resposta

| # | Título | Criado | Idade | Prioridade |
|---|--------|--------|-------|------------|
| [#1759](https://github.com/HKUDS/nanobot/pull/1759) | Reduces MCP tool context overhead with lazy loading | 2026-03-09 | ~6 meses | Alta (em conflito) |
| [#5537](https://github.com/HKUDS/nanobot/pull/5537) | feat(my): persist session focus across turns | 2026-08-25 | ~1 mês | Média |
| [#3292](https://github.com/HKUDS/nanobot/issues/3292) | (referenciado em #5537) | — | — | — |

### PRs em Conflito

| # | Título | Conflitos | Ação Recomendada |
|---|--------|-----------|------------------|
| [#1759](https://github.com/HKUDS/nanobot/pull/1759) | Lazy loading MCP tools | Sim | Resolver conflitos com `main` ou fechar como duplicado de #5298 |
| [#5954](https://github.com/HKUDS/nanobot/pull/5954) | Aggregate concurrent results | Sim | Rebase necessário |

### Recomendações

1. **Priorizar #1759:** Lazy loading de MCP tools resolve uma dor de custo significativa; reconciliar com #5298
2. **Revisar #5537:** Feature de focus de sessão está madura (~1 mês) e deve ser mergeada
3. **Limpar PRs duplicadas:** #5978 e #5979 são duplicados — manter apenas um
4. **Coordenar releases:** Com tantas mudanças pendentes (#5943, #5973, #5974, #5979), considerar release coordenado

---

## Métricas Resumidas (2026-09-30)

| Métrica | Valor | Tendência |
|---------|-------|-----------|
| Issues abertas/ativas (24h) | 5 | Estável |
| PRs abertas (24h) | 28 | Alta |
| PRs merged/fechadas (24h) | 13 | **Alta** |
| Releases | 0 | — |
| Taxa de resolução de bugs | 3/3 bugs com patch | **Excelente** |
| Backlog crítico | 1 PR em conflito (#1759) | Atenção necessária |

**Saúde Geral: 🟢 Forte** — Atividade alta, bugs respondidos rapidamente, features emPipeline maduro.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-09-30

---

## 1. Panorama do Dia

O projeto Hermes Agent apresenta **atividade intensa e sem novos lançamentos** na data de hoje. Com 50 issues e 50 PRs atualizados nas últimas 24 horas, a comunidade demonstra engajamento significativo. O volume de issues abertas (31) supera consideravelmente as fechadas (19), indicando backlog de triagem. Entre os temas predominantes, destacam-se bugs críticos de estabilidade no Desktop (Windows install impossibilitado, state.db pre-flight bloqueante, session state rollbacks) e vulnerabilidades de segurança em dependências JavaScript (js-yaml, undici). A plataforma Matrix gaining momentum com múltiplos PRs de feature em curso, enquanto a base de usuários Windows enfrenta obstáculos concretos de instalação e operação.

---

## 2. Lançamentos

### Nenhum novo release registrado nas últimas 24 horas.

O projeto não publicou versões tags hoje. O último release estável conhecido continua sendo o **v0.21.5+4084** (referenciado em issue de cronjob). Sem updates formais, usuários em produção permanecem na versão anterior.

**Recomendação**: Monitorar PRs de fix em estágio avançado (especialmente #128595 - pins rotativos e #128607 - snapshots grandes) para potencial release corretiva iminente.

---

## 3. Progresso do Projeto

### PRs Fechados/Mergidos Hoje (4 total)

| PR | Autor | Descrição | Impacto |
|----|-------|-----------|---------|
| **#127275** | OutThisLife | `fix(desktop): client-direct STT hallucination filter and voice.barge_in pref` | **Crítico - UX Voice** — Filtra alucinações do STT e adiciona pref de voice barge_in. Resolve phantom turns em conversas de voz no Desktop. |
| **#126324** | Ethan-Vex | Config check false warnings (issue relacionada) | **Baixo** — Validação de configuração emitia warnings falsos para dynamic-plugin platforms. |

### PRs Abertos com Maior Relevância Estratégica

| PR | Descrição | Estágio | Prioridade |
|----|-----------|---------|------------|
| **#128595** | `fix(pins): stop pinned sources from rotting silently` | Aberto | **P2 - Crítico** |
| **#124830** | `fix(cron): retain the execution ledger per job` | Aberto | **P2** |
| **#126283** | `feat(matrix): configure receipts and processing feedback` | Draft | **P3** |
| **#126280** | `feat(matrix): target cron rooms, aliases and threads` | Draft | **P3** |
| **#128594** | `fix: bump undici, yaml, vitest, js-yaml to clear npm audit advisories` | Aberto | **P3 - Segurança** |

**Destaque**: O PR **#128595** resolve a issue **#125350** (install Windows impossibilitado), abordando o problema sistêmico de pinnings obsoletos. Este é um dos PRs mais importantes para a base de usuários Windows.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (por comentários)

| # | Título | Comentários | 👍 | Status | Categoria |
|---|--------|-------------|----|-------|-----------|
| **#89995** | [Feature] Expose Bot Mode group chat rooms in web dashboard & gateway | **21** | 3 | OPEN | **Feature Request** |
| **#125350** | [Bug]: Fresh Windows install is impossible | **16** | 0 | OPEN | **Bug - Crítico** |
| **#122424** | package.json pins js-yaml@4.3.1 to known CVE ranges | **14** | 1 | OPEN | **Segurança** |
| **#122490** | [Bug]: bot-to-bot DM delivery runner inherits store python | **14** | 0 | OPEN | **Bug** |
| **#124583** | terminal tool: background hint references non-existent tool name | **13** | 0 | OPEN | **Bug** |

### Análise dos Temas

**1. Feature Request #89995 (21 comentários)**  
A comunidade demonstra forte interesse em expor salas de group chat do Bot Mode (atualmente restritas ao Electron renderer) no web dashboard e gateway. Esta é a **demanda de feature mais comentada**, sinalizando que usuários avançados querem paridade de funcionalidade entre plataformas. A proposta impacta arquitetura de plugins e componentes de gateway.

**2. Windows Install Blocker #125350 (16 comentários)**  
Issue P0 com impacto direto na aquisição de novos usuários. O install falha por: falta de bzip2, URLs 404 do ffmpeg, 403 de mirror, e rejeição do `-SkipSetup`. A alta atividade (16 comentários em 2 dias) indica frustração significativa.

**3. Vulnerabilidades de Segurança #122424**  
O package.json ancora `js-yaml@4.3.1` em range vulnerável (CVE GHSA-2883-xcg3-v3hh e GHSA-48c2-rrv3-qjmp). Esta issue **exige atenção imediata** da equipe de segurança. O PR #128594 já propõe bumps de undici, yaml, vitest e js-yaml.

**4. DM Delivery Bug #122490**  
Entregas bot-to-bot DM falham com `No module named 'ruamel'`, indicando que o runner herda um Python store sem dependências third-party. Afeta automações de cron e workflows cross-bot.

---

## 5. Bugs e Estabilidade

### Bugs por Severidade

#### **P0 - Críticos (bloqueantes)**

| # | Título | Componentes | Status |
|---|--------|-------------|--------|
| **#125350** | Fresh Windows install is impossible | CLI, Desktop, Windows | OPEN |
| **#122424** | js-yaml vulnerable to CVE ranges | Desktop, JavaScript | OPEN |

#### **P2 - Altos (impacto significativo)**

| # | Título | Área | Status |
|---|--------|------|--------|
| **#122490** | bot-to-bot DM runner inherits python sem deps | Tools, Cron | OPEN |
| **#122402** | Ubuntu build fails on python-olm (missing clang++) | CLI, Matrix, Linux | OPEN |
| **#127313** | Context menu hijacked by zone menu (regression ad2d4822e1) | Desktop | OPEN |
| **#121095** | browser_harness daemon leaks after browser_exec | Tools, Browser | OPEN |
| **#78010** | Session history rolled back (31 messages lost) | Desktop, Sessions | OPEN |
| **#126091** | Message duplication in long sessions | Desktop, Sessions | OPEN |
| **#128509** | Cronjob manual run reaped at turn end | Agent, Cron | OPEN |
| **#128601** | prompt.submit rejects title_preview from Desktop client | TUI, Desktop | OPEN |
| **#128543** | Cron context_from truncates answers with ## Response heading | Cron | OPEN |

#### **P3 - Médios**

| # | Título | Área | Status |
|---|--------|------|--------|
| **#124583** | Terminal tool hint references wrong tool name | Tools, Terminal | OPEN |
| **#81251** | /context reports "No active agent" in Desktop/TUI | TUI, Desktop | OPEN |
| **#128556** | /skin reports success when saving display.skin fails | CLI, Config | OPEN |
| **#128580** | Kanban workers die at spawn (isolated interpreter) | CLI, Cron | OPEN |

### Padrões Identificados

1. **Desktop App**: 60%+ das issues P2/P3 envolvem o Desktop Electron — state management, session state, rendering e context menus.
2. **Windows Platform**: Incompatibilidades recorrentes com Windows (install, WhatsApp bridge, job objects).
3. **Cron/Sessions**: Workflows de longa duração suffer from state reconciliation bugs e premature reaping.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| # | Título | Sinais de Demanda | Impacto |
|---|--------|-------------------|---------|
| **#89995** | Expose Bot Mode group chats in web dashboard | 21 comentários, 3 👍 | Alto |
| **#128609** | Teams: observe un-mentioned channel posts | PR aberto por peepers-rick | Médio |
| **#126283** | Matrix: configure receipts and processing feedback | PR Draft por iainlane | Médio |
| **#126280** | Matrix: target cron rooms, aliases and threads | PR Draft por iainlane | Médio |

### Sinais de Evolução do Roadmap

1. **Expansão Multi-Platform**: Integração Teams (#128609) e Matrix (#126283, #126280) em desenvolvimento ativo, indicando foco em interoperabilidade com protocolos de comunicação.

2. **Paridade Desktop-Web**: A issue #89995 evidencia demanda por equalizar funcionalidades entre Electron app e web dashboard — sugere roadmap de unificação.

3. **Voice/AI Features**: O PR #127275 (STT hallucination filter) e #128596 (SIMD compatibility) demonstram investimento em capabilities de voice interaction.

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais

| Dor | Frequência | Severidade | Evidência |
|-----|------------|------------|-----------|
| **Windows Install Impossível** | Alta | P0 | #125350 (16 comentários, 2 dias) |
| **Session State Bugs no Desktop** | Alta | P2 | #100675, #78010, #126091, #66661 |
| **Dependencies Outdated** | Média | P0/P2 | #122424, PR #128594 |
| **Cronjob Workflows Frágeis** | Média | P2 | #122490, #128509, #128543, #124830 |

### Cenários de Uso Reportados

**Cenário 1: Usuário Windows试图 instalar do zero**  
Resultado: Instalação bloqueada por dependências faltantes (bzip2), URLs quebradas (ffmpeg 404), e opções rejeitadas (SkipSetup). O usuário tentou por dias.

**Cenário 2: Conversa de voz no Desktop**  
Resultado: TTS da própria resposta é captado pelo microfone, transcrito, e resubmetido como input do usuário — criando phantom turns infinitos.

**Cenário 3: Split view + Bots panel**  
Resultado: O painel inativo começa a rebuildar a cada ~5 segundos, causando flashing constante da splash screen.

**Cenário 4: Cronjob manual durante agent turn**  
Resultado: Job é morto prematuramente com "owner exited before durable terminal state" após 1-2 segundos.

### Satisfação/Insatisfação

- **Insatisfação Alta**: Usuários Windows e Linux (especialmente Ubuntu 24.04) enfrentam blockers de instalação e update.
- **Insatisfação Média**: Usuários Desktop experimentam instabilidade em sessions longas e voice interactions.
- **Satisfação Implícita**: A comunidade continua reportando bugs detalhadamente e contributing PRs, indicando investimento no projeto.

---

## 8. Backlog que Merece Atenção

### Issues Antigas Sem Resolution (Needs Attention)

| # | Título | Criado | Comentários | Prioridade | Motivo |
|---|--------|--------|-------------|------------|--------|
| **#68128** | WhatsApp bridge spawn fails with WinError 5 | 2026-07-20 | 7 | P3 | 70+ dias aberto; plataforma Windows ignorada |
| **#81251** | /context reports "No active agent" in Desktop/TUI | 2026-08-07 | 5 | P2 | 50+ dias; routing gate não documentado |
| **#76244** | Backend hangs on SIGTERM, orphans on desktop quit | 2026-08-01 | 2 | P2 | 60+ dias; 1% dos quits causa orphan |
| **#75796** | Copying code block includes literal @url directives | 2026-08-01 | 1 | P2 | 60+ dias; quebra workflows de devs |

### PRs Abertos de Alto Impacto Sem Review

| # | Descrição | Prioridade | Estágio |
|---|-----------|------------|---------|
| **#128595** | Stop pinned sources from rotting | P2 | Needs Review |
| **#128607** | Allow large state snapshots to finish (timeout 30s→5min) | P2 | WIP |
| **#124830** | Retain execution ledger per job | P2 | Needs Review |
| **#128594** | Bump dependencies for security advisories | P3 | Needs Review |

### Recomendações de Priorização

1. **Imediato**: Revisar e merge do **#128594** (security) e **#128595** (Windows install).
2. **Curto prazo**: Atribuir owner para **#68128** (WhatsApp Windows) e **#81251** (context command).
3. **Médio prazo**: Consolidar fixes de state.db pre-flight (**#128607**, #124983) para release corretiva.

---

## Links de Referência

- **Repositório**: https://github.com/NousResearch/hermes-agent
- **Issue Windows Install**: https://github.com/NousResearch/hermes-agent/issues/125350
- **Feature Bot Mode**: https://github.com/NousResearch/hermes-agent/issues/89995
- **Security js-yaml**: https://github.com/NousResearch/hermes-agent/issues/122424
- **PR Security Bump**: https://github.com/NousResearch/hermes-agent/pull/128594
- **PR Windows Pins**: https://github.com/NousResearch/hermes-agent/pull/128595

---

*Relatório gerado em 2026-09-30. Dados extraídos das últimas 24 horas de atividade no GitHub.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-09-30

---

## 1. Panorama do Dia

O projeto PicoClaw apresenta **atividade moderada** nesta data, com 6 issues ativas e 3 pull requests registrados nas últimas 24h. Não houve lançamentos de novas versões. A atividade concentra-se predominantemente na **Web UI**, com múltiplos relatórios de bugs relacionados à experiência do usuário (lag no input, sessões fantasma, mensagens perdidas). O time está respondendo ativamente a issues críticas — todas as 6 issues mais recentes foram atualizadas em 2026-09-29, demonstrando engajamento contínuo da equipe.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.** O projeto mantém a versão estável 0.3.1 conforme referenceda na issue #3281, sem atualização de versionamento neste período.

---

## 3. Progresso do Projeto

### PR Merged/Closed

| # | Título | Autor | Impacto |
|---|--------|-------|---------|
| [#3337](https://github.com/sipeed/picoclaw/pull/3337) | Fix/mcp failure hangs agent loop | kuzmichus | **Crítico** — Resolve deadlock quando servidor MCP falha, restaurando responsividade do chat após erros de conexão |

### PRs Abertos

| # | Título | Autor | Status |
|---|--------|-------|--------|
| [#3410](https://github.com/sipeed/picoclaw/pull/3410) | fix(pico/web): surface steering queue state | racso2609 | Proposta de UX — expõe estado da fila de mensagens para eliminar perda invisível |
| [#3378](https://github.com/sipeed/picoclaw/pull/3378) | fix(auth): use configured scopes in RefreshAccessToken | sarff | Correção de escopo OAuth hardcoded |

**Análise:** O PR #3337 resolve um problema crítico de estabilidade onde falhas de conexão MCP causavam paralisação completa do agente. Os PRs abertos focam em UX da Web UI e configuração de autenticação OAuth.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| # | Título | Comentários | 👍 | Tendência |
|---|--------|-------------|----|-----------|
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Web UI chat input laggy with long history | 16 | 2 | 🟡 Ativo |
| [#440](https://github.com/sipeed/picoclaw/issues/440) | Replace hard iteration limit with context-window bounding | 7 | 0 | 🟡 Ativo |

**Análise #3281:** Este é o problema mais discutido atualmente. Relata que sessões de chat extensas causam lentidão extrema no campo de input da Web UI. Com 16 comentários, indica uma dor recorrente para usuários que mantêm conversas longas — possivelmente relacionado a re-renderização ineficiente ou gerenciamento de estado na interface.

**Análise #440:** A discussão técnica sobre limites de iteração (atualmente 20) revela necessidade de scalabilidade para tarefas complexas. A proposta de "context-window bounding" com loop detection sugere reestruturação fundamental do mecanismo de controle de agentes.

---

## 5. Bugs e Estabilidade

### Bugs Reportados (4 issues de alta prioridade)

| Severidade | # | Descrição | Impacto |
|------------|---|-----------|---------|
| 🔴 Alta | [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Input laggy em sessões longas | Usabilidade severamente degradada |
| 🔴 Alta | [#3407](https://github.com/sipeed/picoclaw/issues/3407) | Sessões fantasma somem da lista | Perda de contexto de conversação |
| 🔴 Alta | [#3408](https://github.com/sipeed/picoclaw/issues/3408) | Mensagens descartadas silenciosamente | Dados perdidos sem feedback |
| 🟡 Média | [#3409](https://github.com/sipeed/picoclaw/issues/3409) | Loop autônomo indesejado com scheduling | Comportamento inesperado em subagentes |

**Padrão identificado:** 3 dos 4 bugs estão na **Web UI** (`web/frontend`), indicando área crítica que requer atenção prioritária. A，三人都在 2026-09-29 — possível gatilho recente.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Propostas

| # | Título | Autor | Escopo |
|---|--------|-------|--------|
| [#3406](https://github.com/sipeed/picoclaw/issues/3406) | Web UI: indicadores claros, sessões separadas, archiving | racso2609 | UX Dashboard |
| [#440](https://github.com/sipeed/picoclaw/issues/440) | Context-window bounding + loop detection | drpedapati | Core Agent Engine |

**Análise:** A issue #3406 (mesmo autor de #3407, #3408) revela uma proposta consolidada de UX para a Web UI, incluindo:
- Indicador de processamento mais claro
- Separação de sessões manuais vs. canais
- Arquivamento de sessões

Isso sugere que **a Web UI como interface primária** é o foco de evolução do projeto.

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Categoria | Descrição | Frequência |
|-----------|-----------|------------|
| **Performance** | Lag em inputs com histórico longo | Múltiplos relatórios |
| **Confiabilidade de UI** | Perda de sessões e mensagens | 3 issues separadas |
| **Escalabilidade do Agent** | Limite de 20 iterações muito restritivo | 1 issue técnica |
| **Feedback de Sistema** | Ausência de indicadores de estado | Proposta em #3406 |

### Cenários de Uso Emergentes

- **Subagent-driven development**: Uso de subagentes em background (mencionado em #3409)
- **Sessões extensas**: Usuários mantendo conversas longas e complexas
- **Integração OAuth**: Configurações provider-specific sendo refinadas

**Sentimento:** ⚠️ **Atenção** — 4 bugs de usabilidade concentrados em 24h na Web UI. A funcionalidade core do agente parece estável (issue #3337 resolvida), mas a experiência da interface web precisa de refinamento urgente.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta há >7 dias

| # | Título | Criado | Comentários | Prioridade |
|---|--------|--------|-------------|------------|
| [#440](https://github.com/sipeed/picoclaw/issues/440) | Replace hard iteration limit | 2026-02-18 | 7 | 🟡 Esperando decisão de design |
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Input laggy with long history | 2026-07-21 | 16 | 🔴 Crítica |

### Recomendações

1. **#440** está aberta há **>7 meses** — requer decisão técnica sobre arquitetura de loop detection
2. **#3281** foi reportada em julho e continua ativa — impacto direto na experiência do usuário principal
3. **Web UI stack** (3 bugs + 1 feature request do mesmo autor em 2026-09-29) merece triage coordenado

---

## Métricas Consolidada

| Indicador | Valor |
|-----------|-------|
| Issues ativas (24h) | 6 |
| PRs novos/ativos (24h) | 3 |
| Releases (24h) | 0 |
| Bugs críticos | 3 |
| Engajamento (comentários) | 24 total |
| Saúde geral | ⚠️ Atenção — UX da Web UI |

---

*Relatório gerado em 2026-09-30 com base em dados do GitHub sipeed/picoclaw*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório de Projeto: IronClaw — 2026-09-30

---

## 1. Panorama do Dia

O projeto IronClaw apresenta alta atividade em 30 de setembro de 2026, impulsionado pela promoção da versão estável **1.4.1**. Foram registradas **5 PRs** atualizadas nas últimas 24h (1 merged, 4 abertas) e **2 issues** em discussão ativa. A comunidade demonstra foco em melhorias de tooling — especialmente na otimização de seleção de ferramentas via embeddings — além de avanços arquiteturais sobre workers remotos. O ciclo de releases segue saudável, com correção de bugs críticos (Google OAuth, Wasmtime) e entrada de contribuidores novos em três PRs simultâneas. A saúde geral do projeto permanece **sólida**, com baixa presença de bugs críticos reportados.

---

## 2. Lançamentos

### ✅ ironclaw-v1.4.1 — 2026-09-29

| Campo | Detalhe |
|---|---|
| **Versão** | 1.4.1 (estável) |
| **Promovida de** | 1.4.1-rc.2 (`b28154fcd52eb20915cd2fb055ec2a1a80d1b967`) |
| **Responsável** | henrypark133 (core) |

#### Mudanças incluídas

1. **Correção Google OAuth (extensões Gmail e Google Calendar)**
   - Extensões Google podem agora ser ativadas em deployments cujo operador fornece o client OAuth via Web UI — cenário anteriormente bloqueado.

2. **Atualização de segurança do Wasmtime**
   - Patch de segurança incorporated da dependência Wasmtime, garantindo conformidade com práticas de deployment seguro.

#### Breaking Changes
**Nenhuma.** Esta release é pura estabilização de release candidate — sem alterações de API pública.

#### Notas de Migração
Não se aplicam. Usuários da 1.4.1-rc.2 têm experiência idêntica à estável.

🔗 [github.com/nearai/ironclaw/releases/tag/ironclaw-v1.4.1](https://github.com/nearai/ironclaw/releases/tag/ironclaw-v1.4.1)

---

## 3. Progresso do Projeto

### PR Merged Hoje

| # | Título | Size | Escopo | Contribuidor |
|---|---|---|---|---|
| #8120 | chore(release): promote 1.4.1-rc.2 to 1.4.1 | L | ci, docs, dependencies | henrypark133 (core) |

**Impacto:** Promoveu o bundle de correções 1.4.1 para produção, consolidando o fix OAuth Google e o update de segurança Wasmtime. Atualizou lockfiles e changelogs raiz e público.

🔗 [github.com/nearai/ironclaw/pull/8120](https://github.com/nearai/ironclaw/pull/8120)

---

### PRs Abertas com Avanço Recente

| # | Título | Size | Escopo | Contribuidor | Status |
|---|---|---|---|---|---|
| #8119 | feat(loop-host): opt-in tool selection with embeddings | XL | docs, dependencies | CjS77 (new) | Aberta |
| #8118 | fix(cli): report effective config profile | M | — | changeroa (new) | Aberta |
| #8117 | fix(webui): restore focus after closing the command palette | M | docs | changeroa (new) | Aberta |
| #7988 | chore(agents): refresh codebase knowledge graph | XS | CI/Infrastructure | ironclaw-ci[bot] | Aberta |

**Destaques:**
- **#8119** é a implementação correspondente à issue #8113 — adiciona ranking de ferramentas por embeddings antes da primeira chamada de modelo, eliminando round-trip de `tool_search`. Tamanho XL indica impacto significativo no loop-host.
- **#8118 e #8117** são contribuições de **changeroa** (novo contribuidor) abordando DX (experience) do CLI e UX do WebUI, respectivamente — indicam saúde da curva de entrada para novos contribuidores.
- **#7988** é manutenção automatizada do codebase-graph; merge esperado sem review profunda.

🔗 [github.com/nearai/ironclaw/pulls](https://github.com/nearai/ironclaw/pulls?q=is%3Apr+updated%3A2026-09-29)

---

## 4. Temas Quentes da Comunidade

### Issue #7889 — RFC: extend scheduler/orchestrator com remote edge workers

| Campo | Valor |
|---|---|
| **Autor** | kvnloo |
| **Criação** | 2026-08-25 |
| **Última atualização** | 2026-09-29 |
| **Comentários** | 1 |
| **Reações** | 👍 0 |

**Resumo:** IronClaw já suporta jobs paralelos, workers locais, Docker sandbox workers, ferramentas WASM, credenciais por job, limites de recurso, rotinas e modelo de auditoria security-first. A lacuna identificada é que o pool de workers pertence a um único host. O RFC propõe estender o scheduler/orchestrator com **remote edge workers opt-in**, permitindo que operadores com múltiplas máquinas distribuam carga de workers.

**Análise:** Este é um **RFC maduro** (37 dias em discussão). A proposta busca resolver uma limitação real de escala horizontal — operadores que já possuem infraestrutura distribuída não conseguem aproveitá-la com IronClaw hoje. A presença de 1 comentário sugere que a comunidade está avaliando a proposal. Este tema tem potencial para ser um **driver significativo de adoção** em ambientes enterprise.

🔗 [github.com/nearai/ironclaw/issues/7889](https://github.com/nearai/ironclaw/issues/7889)

---

### Issue #8113 — Proposal: opt-in turn-0 tool selection (BM25F + embeddings)

| Campo | Valor |
|---|---|
| **Autor** | CjS77 |
| **Criação** | 2026-09-27 |
| **Última atualização** | 2026-09-29 |
| **Comentários** | 0 |
| **Reações** | 👍 0 |

**Resumo:** Antes da primeira chamada de modelo em uma conversa, rankear o catálogo de ferramentas autorizadas contra a mensagem do usuário ePUBLICAR as melhores-ranked up front — para que o modelo possa chamá-las diretamente, sem round-trip de `tool_search`. Tudo é opt-in e off-by-default via flag `RE...`.

**Análise:** Esta proposta já está **sendo implementada** em #8119 (PR aberta, mesmo autor). A abordagem BM25F + embeddings indica sofisticação técnica. O impacto prático é redução de latência em conversas que iniciam com tarefas bem-definidas (ex: "agende uma reunião amanhã às 14h"). Este é um **ganho de UX/perf que pode virar default** em versões futuras.

🔗 [github.com/nearai/ironclaw/issues/8113](https://github.com/nearai/ironclaw/issues/8113)

---

## 5. Bugs e Estabilidade

### Registros do Dia

| Severidade | Count | Observação |
|---|---|---|
| 🔴 Crítico | 0 | Nenhum bug crítico reportado |
| 🟠 Alto | 0 | Nenhum bug de alta severidade |
| 🟡 Médio | 0 | — |
| 🟢 Baixo | 0 | — |

**Análise:** Ausência de bugs reportados nas últimas 24h é um indicador positivo de **estabilidade regressiva**. O projeto demonstra maturidade operacional após a promoção da 1.4.1. Não há regressões conhecidas abertas.

> **Nota:** As correções da 1.4.1 (Google OAuth + Wasmtime) estavam em RC2 — nenhuma reportada após promoção.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em Desenvolvimento Ativo

| # | Feature | Escopo | Estágio | Impacto |
|---|---|---|---|---|
| #8119 | Tool selection via embeddings no turn-0 | loop-host | PR aberta (implementação) | 🔥 Alto — reduz latência inicial |
| #7889 | Remote edge workers opt-in | scheduler/orchestrator | RFC/Discussão | 🔥🔥 Alto — escala horizontal |

### Sinais de Roadmap

1. **Performance de inferência em primeiro turno** — evidenciado por #8113/#8119 (BM25F + embeddings). Prioridade clara do core team (CjS77 é contribuidor ativo em ambos).
2. **Escala distribuída** — RFC #7889 busca remover o gargalo de workers em host único. Parece alinhado com demandas enterprise.
3. **Onboarding de contribuidores novos** — três PRs simultâneas de contribuidores novos (#8119, #8118, #8117) indicam processo de onboarding funcional.

🔗 [github.com/nearai/ironclaw/issues?q=is%3Aissue+label%3Afeature+updated%3A2026-09-30](https://github.com/nearai/ironclaw/issues?q=is%3Aissue+label%3Afeature+updated%3A2026-09-30)

---

## 7. Resumo de Feedback dos Usuários

### Padrões Observáveis (via issues/PRs)

| Tema | Ocorrência | Sentimento |
|---|---|---|
| **Problema com ativação de extensões Google via OAuth UI** | 1 (fixado em 1.4.1) | 😤 Frustração — cenário bloqueante |
| **Melhoria emDX de CLI (config profile)** | 1 (fix em progresso) | 😐 Oportunidade de clareza |
| **UX do command palette (foco)** | 1 (fix em progresso) | 😐 Fricção menor |
| **Desejo de escala horizontal com edge workers** | 1 (RFC) | ✋ Demanda nyata de operadores |
| **Desejo de seleção inteligente de ferramentas** | 1 (proposta + impl.) | 👍 Acelera workflows |

### Análise de Sentimento

O feedback implícito é **majoritariamente positivo e construtivo**. As issues abertas indicam demandas de **escalabilidade** e **performance** — não reclamações de instabilidade. A correção do OAuth Google (que bloqueava um cenário real) demonstra que o time responde a dores concretas. A ausência de issues de bug críticas sugere satisfação com a base de estabilidade atual.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta há Tempo

| # | Título | Criação | Atualização | Dias Inativo | Prioridade |
|---|---|---|---|---|---|
| #7889 | RFC: remote edge workers | 2026-08-25 | 2026-09-29 | **36 dias** | 🔥 Alta — RFC |

### Análise

| Item | Status | Ação Recomendada |
|---|---|---|
| **#7889** | RFC em discussão ativa, última atualização 2026-09-29 (ontem) | ✅ Saudável — não é inativo. Última atualização indica que autor ou reviewers estão ativos. |

**Veredito:** Não há backlog de issues negligenciadas. O RFC #7889 tem update recente e discussão em curso. O projeto demonstra **gestão ativa de backlog**.

---

## Indicadores de Saúde do Projeto

| Indicador | Status | Tendência |
|---|---|---|
| Atividade de PRs (24h) | 5 PRs (1 merged) | 📈 Alta |
| Atividade de Issues (24h) | 2 issues (2 abertas) | ➡️ Normal |
| Bugs críticos abertos | 0 | ✅ Excelente |
| Novas releases | 1 (1.4.1) | ✅ Estável |
| Contribuidores novos | 3 PRs simultâneas | 📈 Crescente |
| Backlog negligenciado | 0 items | ✅ Saudável |

---

*Relatório gerado em 2026-09-30 com dados do GitHub de [nearai/ironclaw](https://github.com/nearai/ironclaw).*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do Projeto CoPaw — 2026-09-30

## 1. Panorama do Dia

O projeto CoPaw demonstra **alta atividade de desenvolvimento** nas últimas 24h, com 36 PRs e 12 issues atualizadas. A equipe mantém um ritmo intenso de correções, com **20 PRs mesclados/fechados**, indicando foco em estabilização da versão 2.2.x. Não houve novos lançamentos hoje, mas múltiplos PRs aguardam revisão, sugerindo preparação para uma próxima release. A comunidade demonstra engajamento ativo, especialmente em issues de bugs críticos (Telegram, Desktop, TaskTracker) e features de usabilidade.

---

## 2. Lançamentos

**Nenhuma nova release registrada nas últimas 24h.**

O projeto encontra-se em período pré-release (versão em desenvolvimento: 2.2.2b3/b4 visível nos issues). Recomenda-se monitorar o repositório para announcements oficiais.

---

## 3. Progresso do Projeto

### PRs Mesclados/Fechados (20 total)

| PR | Autor | Descrição | Impacto |
|----|-------|-----------|---------|
| [#8025](https://github.com/agentscope-ai/QwenPaw/pull/8025) | zhaozhuang521 | `fix(desktop): disable NSIS solid compression` | Reduz tamanho de instalação no Windows |
| [#8026](https://github.com/agentscope-ai/QwenPaw/pull/8026) | cuiyuebing | `fix(ci): cross-platform paths, sandbox cleanup, Windows terminal` | Melhoria de portabilidade CI/CD |
| [#8023](https://github.com/agentscope-ai/QwenPaw/pull/8023) | zhijianma | `fix(terminal): support high posix descriptors` | Corrigido limite FD_SETSIZE em Linux |
| [#8024](https://github.com/agentscope-ai/QwenPaw/pull/8024) | zhijianma | `fix(portability): reject invalid qoder timezones` | Estabilidade cross-platform |
| [#7773](https://github.com/agentscope-ai/QwenPaw/pull/7773) | j4Uq | `fix(telegram): consume /start handshake` | Telegram funciona corretamente após /start |
| [#7765](https://github.com/agentscope-ai/QwenPaw/pull/7765) | j4Uq | `fix(telegram): honor command addressing in mention gate` | Suporte multi-bot em grupos |
| [#7718](https://github.com/agentscope-ai/QwenPaw/pull/7718) | j4Uq | `fix(telegram): render approval-card markdown via HTML parse_mode` | Cards de aprovação legíveis no Telegram |

**Destaque:** Corretores primeiro contribuiidor `@j4Uq` fechou 3 PRs do Telegram com foco em UX e conformidade com a API.

---

## 4. Temas Quentes da Comunidade

### Issues/PRs com Maior Engajamento

| Item | Tipo | Comentários | Tema |
|------|------|-------------|------|
| [#7991](https://github.com/agentscope-ai/QwenPaw/issues/7991) | Issue | 3 | **TaskTracker zumbi** — contagem inconsistente de tarefas |
| [#2359](https://github.com/agentscope-ai/QwenPaw/issues/2359) | Issue | 3 | **HEARTBEAT_OK/CRON_OK** — controle de comportamento em heartbeat/cron |
| [#7946](https://github.com/agentscope-ai/QwenPaw/issues/7946) | Issue | 2 | **Replay de eventos QQ** — duplicação após reconnect |

### Análise de Demandas

1. **TaskTracker (#7991):** Bug crítico de bookkeeping — o contador de tarefas em execução diverge entre dashboard e API. Impacta monitoramento operacional.

2. **HEARTBEAT_OK/CRON_OK (#2359):** Feature request maduro (março/2026) solicitaparadigma similar ao OpenClaw para decisões de envio de conteúdo em eventos de heartbeat, melhorando eficiência de agentes cron.

3. **QQ Gateway (#7946):** Bug de duplicação de mensagens após reconnect —用户体验 crítico para usuários do protocolo QQ oficial.

---

## 5. Bugs e Estabilidade

### Issues Abertas de Bug (8 total)

| Severidade | Issue | Descrição |
|------------|-------|-----------|
| 🔴 Alta | [#7991](https://github.com/agentscope-ai/QwenPaw/issues/7991) | TaskTracker infla contagem de tarefas zumbis |
| 🔴 Alta | [#8036](https://github.com/agentscope-ai/QwenPaw/issues/8036) | Falhas de integração OpenAI — resume/credenciais |
| 🔴 Alta | [#8022](https://github.com/agentscope-ai/QwenPaw/issues/8022) | send_file_to_user polui contexto, causa 400 em todos os modelos |
| 🟡 Média | [#8035](https://github.com/agentscope-ai/QwenPaw/issues/8035) | Configurações de transcrição não salvam |
| 🟡 Média | [#8013](https://github.com/agentscope-ai/QwenPaw/issues/8013) | Download de skills grandes timeout em 30s |
| 🟡 Média | [#8011](https://github.com/agentscope-ai/QwenPaw/issues/8011) | Telegram HTML mishandles c++, nested fences |
| 🟡 Média | [#8034 PR](https://github.com/agentscope-ai/QwenPaw/pull/8034) | *PR* — Media inline sem bound por request (RerankerGuo) |
| 🟡 Média | [#8007 PR](https://github.com/agentscope-ai/QwenPaw/pull/8007) | *PR* — TaskTracker register after task exists (BeiMu-new) |

### Issues Fechadas (Bug Fixes)

- [#7946](https://github.com/agentscope-ai/QwenPaw/issues/7946) — Replay de eventos QQ ✅
- [#6252](https://github.com/agentscope-ai/QwenPaw/issues/6252) — Zoom no Desktop Linux ✅

**Tendencia:** Foco em estabilidade multi-canal (Telegram, QQ, Desktop) e integridade de contexto de conversação.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| # | Feature | Autor | Contexto |
|---|---------|-------|----------|
| [#8015](https://github.com/agentscope-ai/QwenPaw/issues/8015) | Marketplace customizável (Skill/Plugin) | qhxuezhou | Suporte a部署 air-gapped/intranet |
| [#7999](https://github.com/agentscope-ai/QwenPaw/issues/7999) | Ajuste de fonte no Desktop UI | hjfb42241-hub | Acessibilidade e alta DPI |

### PRs de Feature em Progresso

| # | Feature | Autor | Status |
|---|---------|-------|--------|
| [#7903](https://github.com/agentscope-ai/QwenPaw/pull/7903) | Community feed + inbox integrado | Osier-Yi | wip |
| [#7931](https://github.com/agentscope-ai/QwenPaw/pull/7931) | Transcript history paginado + durável | zhijianma | Em revisão |
| [#8020](https://github.com/agentscope-ai/QwenPaw/pull/8020) | Cooldown em fallback de modelos | wangfei010313 | Em revisão |

### Sinais de Roadmap

- **Enterprise/Intranet:** Marketplace customizável (#8015) indica demanda corporativa
- **Durabilidade:** Transcript history (#7931) sugere foco em confiabilidade de dados
- **Resiliência:** Cooldown em fallbacks (#8020) melhora disponibilidade

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

1. **TaskTracker inconsistente (#7991):** Usuários veem "2 tarefas em execução" no dashboard, mas API retorna 1. Confusão operacional.

2. **Integração OpenAI quebrada (#8036):** Credenciais de imagem não funcionam; resume falha com Kimi K3. Mensagens de erro genéricas ("本次执行未完成") dificultam debug.

3. **Download de skills grandes timeout (#8013):** Skills com 12.994 arquivos (80MB) falham aos 30s. Impacta experiência de onboarding.

4. **Zoom Desktop Linux quebrado (#6252 - fixado):** Usuários Linux não conseguiam ajustar zoom, afetando acessibilidade.

### Cenários de Uso Observados

- **Ambiente corporativo:** Deploy em redes isoladas requer marketplace customizável
- **Desktop-first:** Maior demanda por controles de UI (fonte, zoom)
- **Multi-plataforma:** Bugs específicos por OS (Windows terminal, Linux desktop, Telegram)

---

## 8. Backlog que Merece Atenção

### Issues Antigas Sem Resolução

| # | Criado | Issue | Status | Motivo |
|---|--------|-------|--------|--------|
| [#2359](https://github.com/agentscope-ai/QwenPaw/issues/2359) | 2026-03-26 | HEARTBEAT_OK/CRON_OK feature | **OPEN** (6 meses) | Feature request maduro, aguardando decisão de design |
| [#7991](https://github.com/agentscope-ai/QwenPaw/issues/7991) | 2026-09-26 | TaskTracker zumbi | **OPEN** (4 dias) | Bug crítico afetando dashboard |

### PRs Abertos Aguardando Revisão

| # | Descrição | Prioridade |
|---|-----------|------------|
| [#8001](https://github.com/agentscope-ai/QwenPaw/pull/8001) | Timeout tool results recoverable | Alta |
| [#8007](https://github.com/agentscope-ai/QwenPaw/pull/8007) | TaskTracker register after task exists | Alta |
| [#8027](https://github.com/agentscope-ai/QwenPaw/pull/8027) | Offload skill download to worker thread | Média |
| [#8028](https://github.com/agentscope-ai/QwenPaw/pull/8028) | Flag Office COM automation | Segurança |

---

## Indicadores de Saúde do Projeto

| Métrica | Valor | Status |
|---------|-------|--------|
| PRs últimos 7 dias (est.) | ~180+ | 🟢 Alta atividade |
| Issues fechadas/abertas | 4/8 | 🟡 Razoável |
| PRs merged (24h) | 20 | 🟢Excelente |
| Release cadence | Nenhuma (24h) | 🟡 Estável |
| Bugs críticos abertos | 3 | 🟠 Requer atenção |

**Recomendação:** Priorizar review dos PRs #8001, #8007, #8027 e #8028. O bug #7991 do TaskTracker merece atenção imediata devido ao impacto operacional.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-09-30

## 1. Panorama do dia

O projeto ZeroClaw apresenta **alta atividade de desenvolvimento** em 30 de setembro de 2026, com 27 issues e 50 PRs atualizados nas últimas 24 horas. Não houve lançamentos de novas versões, e o repositório demonstra maturidade operacional com foco em **segurança e estabilidade**: três bugs de severidade S0 (risco crítico de perda de dados/acesso não autorizado) foram reportados e estão em análise. A atividade concentra-se em correções de bugs de segurança, refatorações de configuração (Schema V4) e avanços em memória/agentes, evidenciando um ciclo de desenvolvimento ativo com múltiplas linhas de trabalho paralelas.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24 horas.**

O projeto encontra-se em fase de desenvolvimento intensivo, sem releases formais no período reportado. Issues como `#11081` (estado durável por instância) e a infraestrutura OIDC consolidada (`#11082`) indicam progresso significativo que pode culminar em release futura.

---

## 3. Progresso do Projeto

### PRs Recentemente Merged/Fechados

| PR | Título | Impacto |
|----|--------|---------|
| [#11260](https://github.com/zeroclaw-labs/zeroclaw/pull/11260) | `fix(config): stop clamping explicit context budgets to the 32k fallback stub` | **Crítico** — Corrige regressão que impedia uso de contextos maiores que 32k tokens mesmo com configuração explícita |
| [#9254](https://github.com/zeroclaw-labs/zeroclaw/pull/9254) | `feat(infra): IBM Db2 session-persistence backend` | **Adiado** — aguardando driver nativo IBM Db2 para implementação completa |

### Principais PRs Abertos com Alto Impacto

| PR | Título | Tamanho | Status |
|----|--------|---------|--------|
| [#11261](https://github.com/zeroclaw-labs/zeroclaw/pull/11261) + [#11262](https://github.com/zeroclaw-labs/zeroclaw/pull/11262) | Plugin update com substituição verificada e rollback | XL | Pilha em revisão |
| [#11068](https://github.com/zeroclaw-labs/zeroclaw/pull/11068) | `feat(channels): narrow channel turns by sender role` | XL | Em revisão — granularidade de controle de acesso |
| [#11221](https://github.com/zeroclaw-labs/zeroclaw/pull/11221) | Gating de tools SaaS/CLI atrás de feature flags | XL | Em revisão — redução de superfície de ataque |
| [#8754](https://github.com/zeroclaw-labs/zeroclaw/pull/8754) | Schema V4 cut completo (skills, tunables, summary_model) | XL | Em revisão — breaking change planejado |
| [#9809](https://github.com/zeroclaw-labs/zeroclaw/pull/9809) | Suporte a múltiplos modelos por provider profile | XL | Em revisão — flexibilidade de provider |
| [#9320](https://github.com/zeroclaw-labs/zeroclaw/pull/9320) | Cron agent jobs com wall-clock timeout | XL | Em revisão — estabilidade de jobs agendados |

---

## 4. Temas Quentes da Comunidade

### Issues/PRs com Maior Engajamento (por comentários)

| Issue/PR | Título | Comentários | Tema Central |
|----------|--------|-------------|--------------|
| [#8832](https://github.com/zeroclaw-labs/zeroclaw/issues/8832) | Plugin-owned Kanban board para trabalho de agentes | 10 | Workflow/agentes |
| [#10068](https://github.com/zeroclaw-labs/zeroclaw/issues/10068) | Sessão interativa caba em 32k tokens | 6 | Limite de contexto |
| [#6105](https://github.com/zeroclaw-labs/zeroclaw/issues/6105) | Agent sem contexto do cron job | 5 | Cron + contexto |
| [#11053](https://github.com/zeroclaw-labs/zeroclaw/issues/11053) | RFC: Knowledge graph como memória de primeira classe | 4 | Arquitetura de memória |
| [#8289](https://github.com/zeroclaw-labs/zeroclaw/issues/8289) | Tracker OIDC: principals canônicos e autenticação | 4 | Segurança/identidade |
| [#11197](https://github.com/zeroclaw-labs/zeroclaw/issues/11197) | Session resume restaura ambiente após revogação admin | 3 | **Segurança crítica** |
| [#11198](https://github.com/zeroclaw-labs/zeroclaw/issues/11198) | Delegated memory tools perdem escopo principal | 3 | **Segurança crítica** |

### Análise de Demandas

**Segurança predomina**: As issues com mais comentários técnicos (exceto `#8832`) envolvem vulnerabilidades de segurança, indicando vigilância da comunidade sobre integridade de sessões e controle de acesso.

**Arquitetura de memória em evolução**: `#11053` propõe evolução do knowledge graph de tool para memory layer, demonstrando amadurecimento conceitual do sistema de memória.

**Limitações de contexto persistem**: `#10068` e `#11260` indicam problemas contínuos com o handling de limites de contexto, aunque `#11260` já foi corrigido.

---

## 5. Bugs e Estabilidade

### Bugs Críticos (S0) — Requerem Atenção Imediata

| Issue | Severidade | Título | Componentes Afetados |
|-------|------------|--------|---------------------|
| [#11197](https://github.com/zeroclaw-labs/zeroclaw/issues/11197) | S0 | Session resume restaura ambiente após revogação admin | security/sandbox |
| [#11198](https://github.com/zeroclaw-labs/zeroclaw/issues/11198) | Delegated memory tools perdem escopo principal | memory |
| [#11239](https://github.com/zeroclaw-labs/zeroclaw/issues/11239) | Owned sessions acessam memory plane compartilhado | memory |
| [#11123](https://github.com/zeroclaw-labs/zeroclaw/issues/11123) | SOP executa com wildcards sem `tools:execute` | security/sandbox |

### Bugs Altos (S1-S2)

| Issue | Severidade | Título | Status |
|-------|------------|--------|--------|
| [#11126](https://github.com/zeroclaw-labs/zeroclaw/issues/11126) | S1 | Operações em fila retêm bypass de ownership revogado | Parcialmente corrigido por #10412 |
| [#10068](https://github.com/zeroclaw-labs/zeroclaw/issues/10068) | S2 | Sessão interativa limitada a 32k tokens | Aberto — contexto: 15,538/32,000 |
| [#6105](https://github.com/zeroclaw-labs/zeroclaw/issues/6105) | S2 | Agent sem contexto do cron job | Em progresso |
| [#11215](https://github.com/zeroclaw-labs/zeroclaw/issues/11215) | S2 | Tool calling falha no OpenCode Go | Endpoint não suporta campo `name` |
| [#11257](https://github.com/zeroclaw-labs/zeroclaw/issues/11257) | S2 | WhatsApp Web descarta captions de mídia | Channel behavior |
| [#11256](https://github.com/zeroclaw-labs/zeroclaw/issues/11256) | S3 | `initial_prompt` nunca enviado para transcrição | Minor — config vs. implementation |

### Análise de Estabilidade

**Padrão de vulnerabilidades identificadas**: Três S0 shares similarity — todas envolvem "escopo de principal" ou "plano de memória" sendo violado por ferramentas delegadas ou subagentes. Isso sugere necessidade de auditoria de segurança no pipeline de delegação de tools.

**Correção positiva**: `#11260` foi merged resolvendo o problema de clamping de contexto, demonstrando resposta rápida a bugs de configuração.

---

## 6. Pedidos de Features e Sinais de Roadmap

### RFCs Abertas (Indicadores de Roadmap)

| Issue | Título | Impacto | Comentários |
|-------|--------|---------|-------------|
| [#11053](https://github.com/zeroclaw-labs/zeroclaw/issues/11053) | RFC: Knowledge graph como memory layer de primeira classe | Arquitetura | 4 |
| [#11235](https://github.com/zeroclaw-labs/zeroclaw/issues/11235) | RFC: Knowledge corpus — RAG para o agent | RAG/Documentos | 1 |
| [#11254](https://github.com/zeroclaw-labs/zeroclaw/issues/11254) | RFC: A2A protocol crate (zeroclaw-a2a) | Protocolo multi-agente | 0 |

### Features em Desenvolvimento

| Issue/PR | Título | Domínio | Prioridade |
|----------|--------|---------|------------|
| [#8832](https://github.com/zeroclaw-labs/zeroclaw/issues/8832) | Plugin-owned Kanban board | Plugins/Workflow | P2 |
| [#8310](https://github.com/zeroclaw-labs/zeroclaw/issues/8310) | Schema V4: remoção de config inativa | Configuração | P2 |
| [#8754](https://github.com/zeroclaw-labs/zeroclaw/pull/8754) | Schema V4 cut completo (PR) | Configuração | P2 |
| [#9809](https://github.com/zeroclaw-labs/zeroclaw/pull/9809) | Múltiplos modelos por provider | Providers | P2 |
| [#10995](https://github.com/zeroclaw-labs/zeroclaw/issues/10995) | Plugin update com failure rollback | Plugins/CLI | P2 |
| [#11255](https://github.com/zeroclaw-labs/zeroclaw/issues/11255) | Salvar imagens WhatsApp no workspace | Channels | Feature |
| [#7824](https://github.com/zeroclaw-labs/zeroclaw/issues/7824) | WeCom proactive messaging | Channels | Icebox |

### Tendências de Roadmap

1. **Segurança e multi-tenancy**: OIDC (#8289), permission profiles, e isolamento de memory plane
2. **Flexibilidade de deployment**: Schema V4 (modularização), múltiplos modelos/providers
3. **Interoperabilidade**: RFCs A2A e RAG indicam direção hacia sistemas multi-agente
4. **UX de desenvolvimento**: ZeroCode enhancements (#10244, #10909, #10051)

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Categoria | Feedback | Issue |
|-----------|----------|-------|
| **Limite de contexto** | Sessão interativa ignora `max_context_tokens = 131072` e trava em 32k | [#10068](https://github.com/zeroclaw-labs/zeroclaw/issues/10068) |
| **Cron job sem memória** | Agent perde contexto ao executar via cron, não sabe que enviou mensagens anteriores | [#6105](https://github.com/zeroclaw-labs/zeroclaw/issues/6105) |
| **WhatsApp capta mídia sem caption** | Usuários enviam imagens com texto e agente recebe apenas placeholder | [#11257](https://github.com/zeroclaw-labs/zeroclaw/issues/11257) |
| **Transcrição incompleta** | `initial_prompt` configurado mas nunca utilizado pelo provedor Whisper | [#11256](https://github.com/zeroclaw-labs/zeroclaw/issues/11256) |
| **Config de cron via UI** | Editor de config não permite gravar schedules declarativas | [#11237](https://github.com/zeroclaw-labs/zeroclaw/issues/11237) |
| **Plugins desatualizados** | CLI de plugin não tem comando de update; reinstall não garante rollback | [#10995](https://github.com/zeroclaw-labs/zeroclaw/issues/10995) |

### Cenários de Uso Observados

1. **Agentes como assistentes proativos**: Usuários querem que agentes enviem lembretes via cron, mas atualmente perdem histórico
2. **Multi-provider**: Necessidade de usar múltiplos modelos (e.g., GPT-4 + Claude) no mesmo provider profile
3. **Integração WhatsApp Enterprise**: Captura de mídia + captions para workflow corporativo
4. **ZeroCode como IDE**: Usuários esperam undo/redo, select-all, e transcript como contexto

### Satisfação/Insatisfação

**Positivo**: 
- Stack OIDC merged e funcionando (#8289)
- Correção rápida de bugs de contexto (#11260)

**Negativo**:
- Bugs S0 de segurança em delegação de memory tools indicam gap em testing
- Integração WhatsApp ainda imatura (captions, downloads)
- Schema legacytech debt (#8310) requer breaking change para limpar

---

## 8. Backlog que Merece Atenção

### Issues Antigas Sem Progresso Recente

| Issue | Criado | Atualizado | Título | Observação |
|-------|--------|------------|--------|------------|
| [#6105](https://github.com/zeroclaw-labs/zeroclaw/issues/6105) | 2026-04-25 | 2026-09-29 | Agent sem contexto do cron | 5 meses — em progresso, mas lento |
| [#7824](https://github.com/zeroclaw-labs/zeroclaw/issues/7824) | 2026-06-17 | 2026-09-29 | WeCom proactive messaging | 3+ meses — icebox status |

### Issues Bloqueadas ou Dependentes

| Issue | Dependência | Título | Status |
|-------|-------------|--------|--------|
| [#9229](https://github.com/zeroclaw-labs/zeroclaw/pull/9229) | — | Ctrl+C state-aware | Bloqueada |
| [#9326](https://github.com/zeroclaw-labs/zeroclaw/pull/9326) | — | Signal Note to Self sync | Parking lot |
| [#10636](https://github.com/zeroclaw-labs/zeroclaw/pull/10636) | #10611 | ZeroCode effort controls | Stacked PR |

### Oportunidades de Contribuição

1. **Bugs S2 de baixa complexidade**: `#11257` (WhatsApp caption), `#11256` (initial_prompt), `#11237` (cron config)
2. **Features bem definidas**: `#10244` (agent deletion UI), `#11255` (WhatsApp workspace)
3. **RFCs sem 구현ação**: `#11235` (RAG), `#11254` (

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*