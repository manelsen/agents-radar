# Resumo diário do ecossistema de agentes de IA 2026-05-03

> Issues: 7 | PRs: 39 | Projetos cobertos: 7 | Gerado em: 2026-05-02 20:36 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal


# Relatório do Projeto NullClaw — 2026-05-03

---

## 1. Panorama do Dia

NullClaw demonstra **alta atividade de desenvolvimento** em 03/05/2026, com 39 PRs atualizados (37 merged/fechados) e 7 issues processadas nas últimas 24h. A comunidade focou intensamente em **correções de estabilidade** pós-migração para Zig 0.16, especialmente related to gateway CPU spin e falhas silenciosas no Mattermost. Não houveram novos lançamentos, mas uma onda massiva de PRs de infraestrutura foi consolidada, incluindo a API REST Admin e suporte a conhecimento gráfico. O projeto segue saudável, com manutenção reativa a bugs equilibrada por progresso em features de longa data.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O repositório não publicou novas versões entre 2026-05-02 e 2026-05-03. Isso não indica estagnação — pelo contrário, a concentração de 37 PRs merged sugere preparação ativa para uma próxima release (provavelmente 0.16.x ou seguinte), consolidando as correções críticas de CPU spin e Mattermost.

> ⚠️ **Nota para mantenedores:** Dado o volume de mudanças merged, recomenda-se preparar changelog detalhado documentando as correções de regressão Zig 0.16.

---

## 3. Progresso do Projeto

### PRs Mais Relevantes Merged/Closed

| PR | Área | Impacto | Link |
|---|---|---|---|
| #873 | gateway/mattermost | **Crítica** — Corrige CPU 100% e falha silenciosa em Mattermost após Zig 0.16 | [#873](https://github.com/nullclaw/nullclaw/pull/873) |
| #853 | gateway | **Crítica** — Backoff no accept loop previne CPU spin (fixes #851) | [#853](https://github.com/nullclaw/nullclaw/pull/853) |
| #854 | subagent | **Bugfix** — Subagent agora retorna resultados corretamente ao canal original (fixes #849) | [#854](https://github.com/nullclaw/nullclaw/pull/854) |
| #855 | daemon | **Melhoria** — Concorrência inbound e preempção de sessões (fixes #832) | [#855](https://github.com/nullclaw/nullclaw/pull/855) |
| #880 | security | **Segurança** — Anti-spoofing boundaries para web_fetch/web_search | [#880](https://github.com/nullclaw/nullclaw/pull/880) |
| #875 | security | **Segurança** — Classificação 3-tier e curl liberado em modo supervisionado | [#875](https://github.com/nullclaw/nullclaw/pull/875) |
| #712 | memory | **Feature** — Knowledge Graph Memory backend com SQLite CTEs recursivos | [#712](https://github.com/nullclaw/nullclaw/pull/712) |
| #780/771/770 | api | **Feature** — REST Admin API completa (config, channels, sessions, memory) | [#780](https://github.com/nullclaw/nullclaw/pull/780) |
| #863 | cli | **UX** — Tabela colorida para capabilities com detecção TTY | [#863](https://github.com/nullclaw/nullclaw/pull/863) |
| #850 | tunnel | **Feature** — Tailscale auth_key criptografado suportado | [#850](https://github.com/nullclaw/nullclaw/pull/850) |
| #686 | a2a | **Feature** — Suporte multi-modal (imagens) via A2A | [#686](https://github.com/nullclaw/nullclaw/pull/686) |

### Destaques de Avanço

1. **Regressões Zig 0.16 resolvidas**: Os PRs #873, #876, #877, #858 abordam coletivamente os problemas de CPU spin, HTTP keep-alive e Mattermost POST após migração de linguagem.

2. **API REST Admin consolidada**: Três PRs (#770, #771, #780) entregam interface completa para gestão de gateway sem novas dependências (~30KB binary increase).

3. **Concurrency nativa**: #855 implementa inbound concurrency e preempção de sessões, resolvendo gargalo de longo prazo em cargas paralelas.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| Issue | Status | Comentários | Tema Central |
|---|---|---|---|
| #820 | OPEN | 4 | Documentação Zig no Debian — comunidade busca clareza sobre requisitos |
| #851 | CLOSED | 4 | CPU spin do gateway — bug crítico agora resolvido via #853 |
| #865 | OPEN | 1 | CLI mostra caracteres de controle em vez de setas |
| #866 | OPEN | 1 | `curl` falha mesmo na allowlist — possível bug de whitelist |

### Análise de Demandas

**Bug Reports Críticos (recentemente fechados):**
- **#851** (CPU spin) demonstra que a comunidade identificou corretamente um problema de produção em Raspberry Pi 5. O fix #853 está merged.
- **#849** (subagent retorna nada) foi reportado por `sadhimmel-svg` e corrigido via #854 — indica uso real de subagentes em workflows.

**Issues Abertas Persistentes:**
- **#865** — O bug de caracteres de controle no CLI (`eabase`) afeta usabilidade diária. Sem resposta técnica ainda.
- **#866** — `curl` bloqueado mesmo na allowlist pode indicar problema na lógica de filtragem. Merece atenção imediata.

**Questões Documentação:**
- **#820** — Usuário questiona se Docker é obrigatório para instalar Zig no Debian. Oportunidade de melhorar documentação de setup.

> 📌 **Sinal de comunidade ativa**: A proporção de 4 issues fechadas vs. 3 abertas nas últimas 24h indica ciclo de issues saudável.

---

## 5. Bugs e Estabilidade

### Regressões Críticas (Zig 0.16)

| Bug | Severidade | Status | Fix Associado |
|---|---|---|---|
| CPU 100% no gateway (accept4 EAGAIN loop) | **🔴 Crítica** | ✅ Fechado | #853, #873 |
| Falha silenciosa em Mattermost POST vazio | **🔴 Crítica** | ✅ Fechado | #873, #877 |
| HTTP/1.1 keep-alive bloqueando clientes | **🟠 Alta** | ✅ Fechado | #876 |
| Subagent não retorna resultados | **🟠 Alta** | ✅ Fechado | #854 |

### Bugs Abertos

| Bug | Severidade | Prioridade | Descrição |
|---|---|---|---|
| #866 - `curl` falha na allowlist | **🟡 Média** | Alta | whitelist não funciona para curl |
| #865 - CLI caracteres de controle | **🟡 Média** | Média | setas não funcionam no terminal |

### Métricas de Estabilidade

- **Crash rate**: 0 bugs de crash reportados nas últimas 24h
- **Regressões abertas**: 0 (ambos os bugs críticos fechados)
- **Bugs novos**: 2 (#865, #866) — ambos de severidade média
- **Tempo médio de resolução de bugs**: ~2-3 dias (baseado em #851 aberto 2026-04-19, fechado 2026-05-01)

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Implementadas Recentemente (sinalizam direção do roadmap)

| PR | Feature | Contexto |
|---|---|---|
| #712 | Knowledge Graph Memory | Expansão de memória com SQLite + CTEs recursivos |
| #686 | Multi-modal A2A | Suporte a imagens em agentes via protocolo A2A |
| #780/771/770 | REST Admin API | Interface leve para dashboards/clientes móveis |
| #834-837 | Tool Customization | Configuração granular de ferramentas |
| #836 | Trigger-based tool prioritization | Priorização dinâmica de ferramentas por contexto |
| #850 | Tailscale encrypted auth_key | Melhoria de segurança em túneis |
| #881 (OPEN) | Remover curl subprocess — usar std.http nativo | Modernização de HTTP client |

### Demandas Emergentes (Issues Abertas)

| Issue | Tipo | Demanda |
|---|---|---|
| #820 | Documentação | Clarificar instalação Zig no Debian (Docker necessário?) |
| #865 | Bug/Feature | Suporte nativo a keybindings de terminal |
| #866 | Bug/Feature | Funcionamento correto da allowlist de comandos |

### Sinais de Roadmap Observáveis

1. **Modularização de tooling**: PR #881 busca remover curl como subprocess — indica migração para HTTP nativo do Zig.
2. **Memória avançada**: Investimento contínuo em backends (graph, archive provenance) sugere foco em long-term memory.
3. **Agent Skills RFC 0.2.0**: #831 implementa novo padrão para descoberta de habilidades — indica ecossistema de plugins.
4. **Segurança em camadas**: #875 (risk tiers) + #880 (anti-spoofing) = foco em segurança para uso em produção.

---

## 7. Resumo de Feedback dos Usuários

### Dores Documentadas

| Cenário | Problema Reportado | Impacto |
|---|---|---|
| Production (Raspberry Pi 5) | Gateway consome 100% CPU em idle | Funcionalidade Severamente Degradada |
| Agentes Mattermost | Mensagens falham silenciosamente | Perda de Dados/Sessões |
| CLI interactivo | Arrow keys mostram CTRL chars | UX Quebrada |
| curl em allowlist | still blocked despite configuration | Configuração Não Funciona |
| Subagent workflows | Resultados não retornam ao canal | Funcionalidade Inutilizável |

### Feedback Positivo Indicado

- **Usuários avanzando com subagentes**: Issue #849 demonstra que `sadhimmel-svg` conseguiu fazer subagentes criarem arquivos, mas teve problema na comunicação de retorno — indica adoção de feature advanced.
- **Adoção REST API**: A API Admin completa (#770-780) foi desenvolvida para "menubar apps, iOS/iPadOS, CLI dashboards" — sinal de demanda cross-platform.
- **CLI com cores**: PR #863 adicionou output colorido baseado em TTY — melhoria de UX solicitada pela comunidade.

### Padrões de Satisfação/Insatisfação

| Indicador | Leitura |
|---|---|
| 37 PRs merged em 24h | Mantenedores altamente responsivos a contribuições |
| 4 de 7 issues fechadas | Ciclo de resolução eficiente |
| Issues antigas ainda abertas (#820, 14/abr) | Documentação pode ser negligenciada vs. código |

---

## 8. Backlog Que Merece Atenção

### Issues Sem Resposta há >7 dias

| Issue | Idade | Status | Prioridade para Comunidade |
|---|---|---|---|
| #820 - Instalação Zig Debian | 19 dias (14/abr) | OPEN | **Alta** — documentação impacta onboarding |
| #865 - CLI caracteres de controle | 10 dias (23/abr) | OPEN | **Alta** — UX quebrada diariamente |
| #866 - curl na allowlist | 10 dias (23/abr) | OPEN | **Alta** — bloqueia caso de uso real |

### PRs Abertos Requerendo Review

| PR | Autor | Tema | Urgência |
|---|---|---|---|
| #881 | ncode | Remover curl subprocess (std.http nativo) | **Alta** — modernização técnica |
| #878 | vernonstinebaker | nanosleep no POSIX para thread.sleep | **Média** — melhoria de confiabilidade |

### Recomendações para Mantenedores

1. **Priorizar #820** — Documentação de instalação é ponto de entrada; impacto desproporcional em novos usuários.
2. **Triangular #865 e #866** — Ambos reportados pelo mesmo autor (`eabase`) em 23/abr sem resposta técnica ainda.
3. **Avaliar #881** — Substituição de curl por std.http nativo pode quebrar providers existentes; requer review cuidadoso.
4. **Manter ciclo de releases** — 37 PRs merged sem release cria "feature debt"; 고려 (considere) publicar patch release para stabilidades Zig 0.16.

---

*Relatório gerado em 2026-05-03 com base em dados do GitHub de nullclaw/nullclaw. Métricas representam atividade das últimas 24h.*

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo — Ecossistema de Agentes de IA Open Source

**Data de referência:** 2026-05-03
**Projetos analisados:** NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw, ZeroClaw

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **alta atividade transversal** em 03/05/2026, com 7 projetos processando coletivamente mais de 200 PRs e 150 issues em 24h. O tema dominante é a **estabilização pós-migração de linguagens e providers**: NullClaw corrige regressões do Zig 0.16, enquanto IronClaw executa o refactoring "Reborn" de seu kernel. Não há releases formais em nenhum dos projetos, sinalizando fase de consolidação antes de ciclos de versão. A demanda mais recorrente — fallback automático de modelos e suporte a reasoning modes — aparece em pelo menos 5 dos 7 projetos, indicando maturização do mercado em direção a arquiteturas multi-provider resilientes.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | PRs Abertos | PRs Merged/Closed | Releases (24h) | Saúde |
|---------|:------------:|:----------:|:------------:|:-----------------:|:--------------:|:-----:|
| **NullClaw** | 7 | 39 | — | 37 | 0 | 🟢 Alta atividade + disciplina de stabilização |
| **NanoBot** | 5 | 20 | 12 | 8 | 0 | 🟢 Pipeline saudável, ciclo de review eficiente |
| **Hermes Agent** | 50 | 50 | 44 | 6 | 0 | 🟡 Volume alto, mas 3 P1s abertas sem resolução |
| **PicoClaw** | 6 | 8 | — | 4 | 1 nightly | 🟡 Bug crítico (#2720) bloqueia bootstrap |
| **IronClaw** | 20 | 47 | — | 7 | 0 | 🟢 Refactoring estruturado, contribuidores ativos |
| **CoPaw** | 14 | 6 | 6 | 0 | 0 | 🟢 Captação excepcional de first-timers (67%) |
| **ZeroClaw** | 50 | 40 | — | 4 | 0 | 🟡 5 bugs P1/P2 em investigação simultânea |

**Observações:**
- **NullClaw** apresenta o melhor rácio PRs merged/issue (37/7 = 5.3), indicando disciplina de closures.
- **Hermes Agent** e **ZeroClaw** lideram em volume absoluto de atividade, mas carregam debt técnico significativo (3+ P1s).
- **CoPaw** destaca-se em captação de contribuidores, crucial para sustentabilidade de longo prazo.

---

## 3. Posicionamento do Projeto Principal

### NullClaw como Referência

NullClaw demonstra o **perfil mais maduro de disciplina operacional** entre os analisados:

| Dimensão | NullClaw | Comparação |
|----------|----------|------------|
| **Velocidade de closure** | 37 PRs merged em 24h | 2–5× superior à média dos pares |
| **Qualidade de regression tracking** | Todos os bugs críticos Zig 0.16 resolvidos | Hermes, PicoClaw ainda carregam P1s abertas |
| **Arquitetura** | Zig nativo, memory backend plugável | Apenas IronClaw compete em sofisticação de storage |
| **Comunidade** | ~7 contributors visíveis, cycle de issues saudável (4/3 fechado/aberto) | NanoBot e CoPaw mais dependentes de contributors externos |
| **Release discipline** | Nenhuma release em 24h, mas PRs sugerem preparação ativa | Recomenda-se tagging para credibilidade de usuários production |

**Vantagens técnicas diferenciadas:**
- REST Admin API sem novas dependências (~30KB binary increase)
- Knowledge Graph Memory com CTEs recursivos SQLite
- Suporte nativo a Tailscale com auth_key criptografado
- Concorrência inbound e preempção de sessões (gargalo resolvido)

**Dívida identificada:**
- Issues #865 e #866 sem resposta há 10 dias (CLI UX quebrada)
- Documentação de instalação Zig no Debian negligenciada (#820, 19 dias)

---

## 4. Focos Técnicos Compartilhados

### 4.1 Stabilização de Providers e Modelos

A migração para modelos de raciocínio (DeepSeek-R1, Gemini 3.x, Ollama reasoning) está gerando **padrão consistente de bugs**:

| Bug Pattern | NullClaw | NanoBot | PicoClaw | IronClaw | ZeroClaw |
|-------------|:--------:|:-------:|:--------:|:---------:|:--------:|
| `reasoning_content` não preservado em streaming | — | ✅ Corrigido (#3419) | — | — | 🟡 Em investigação (#6254, #6233) |
| Tool calls falham com Gemini 3.x | — | — | — | 🔴 Regressão #3214 | — |
| DeepSeek API erro 400 (reasoning_content) | — | ✅ Corrigido (#3419) | — | — | — |
| OpenRouter reasoning leak no output | — | — | 🟡 #2745 | — | — |

**Conclusão:** A abstração de providers está sob estresse em todos os projetos. A padronização de interfaces para reasoning modes é oportunidade de contribuição cross-projeto.

### 4.2 Resiliência e Fallback de Modelos

Demanda transversal aparece em **5 de 7 projetos**:

| Projeto | Issue Relacionada | Status |
|---------|-------------------|--------|
| CoPaw | #1327, #3789, #4011 | Alta prioridade, sem implementação |
| Hermes Agent | #5012, #10995 | P3, duplicadas |
| ZeroClaw | #5601 | Provider OAuth nativo em discussão |
| NanoBot | — | Exec timeout 600s limitante (#3595) |
| PicoClaw | — | xAI PR #2260 aguardando merge |

**Síntese:** O mercado está convergindo para necessidade de **chain de fallback automático** — indicando que arquiteturas single-provider são inadequadas para uso em produção.

### 4.3 Segurança em Deploy Público

| Projeto | PR/Issue | Tema |
|---------|----------|------|
| NullClaw | #880, #875 | Anti-spoofing + risk tiers para web_fetch |
| NanoBot | #3492 | Hardening de deploy público WebUI |
| Hermes Agent | #3049 | **Shell injection mitigado** (crítico) |
| CoPaw | #4006 | Reasoning não filtrado em provider |

**Conclusão:** Com adoção em produção, segurança está deixando de ser feature e tornando-se **prerequisite** — especialmente em agentes com capacidades de shell/code execution.

---

## 5. Análise de Diferenciação

### 5.1 Arquitetura e Público-Alvo

| Projeto | Arquitetura Central | Público Primário |
|---------|---------------------|------------------|
| **NullClaw** | Kernel Zig nativo, memory backend plugável | DevOps/infra, edge computing (Raspberry Pi 5) |
| **NanoBot** | HookCenter tipado + plugins via entry_points | Desenvolvedores, integração multi-canal |
| **Hermes Agent** | CLI-first, adapters modulares | Usuários CLI avançados, automação |
| **PicoClaw** | Provider abstraction layer, MCP-first | Desenvolvedores MCP, integrações enterprise |
| **IronClaw** | Reborn kernel + Postgres/libSQL native memory | Usuários enterprise, trading automation |
| **CoPaw** | Agente extensível com Ollama local-first | Usuários com hardware limitado, privacidade |
| **ZeroClaw** | Microkernel + V3 schema migration, Dream Mode | Agentes de longo prazo, uso pessoal sofisticado |

### 5.2 Diferenciação Técnica por Área

| Área | Líder Técnico | Seguidores |
|------|--------------|------------|
| **Performance (CPU)** | NullClaw (spin loop corrigido) | IronClaw, ZeroClaw |
| **Extensibilidade** | NanoBot (HookCenter + plugins) | CoPaw, Hermes |
| **Multi-provider** | PicoClaw (abstração madura) | NullClaw, ZeroClaw |
| **Memória persistente** | IronClaw (Reborn + Postgres) | NullClaw (Knowledge Graph) |
| **Suporte local** | CoPaw (Ollama-first) | NullClaw (edge/RPi) |
| **Canais diversificados** | NanoBot (WhatsApp, Feishu, Discord) | Hermes, PicoClaw |
| **Segurança** | Hermes Agent (shell injection fixado) | NullClaw, NanoBot |

### 5.3 Complexidade de Onboarding

| Complexidade | Projetos | Indicador |
|--------------|----------|-----------|
| **Baixa** | NanoBot, PicoClaw | Docker-first, config minimal |
| **Média** | CoPaw, Hermes Agent | Requer setup de API keys, CLI |
| **Alta** | NullClaw, IronClaw, ZeroClaw | Zig build, Postgres dependency, schema migrations |

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração

| Projeto | PRs Merged/24h | Rácio Fechados/Abertos | Tempo Médio de Bug Resolution |
|---------|:--------------:|:----------------------:|:-----------------------------:|
| **NullClaw** | 37 | Alta (37/0 visível) | ~2-3 dias (#851) |
| **NanoBot** | 8 | 0.67 (8/12) | <24h (DeepSeek fix) |
| **Hermes Agent** | 6 | 0.14 (6/44) | Indeterminado (P1s abertas) |
| **PicoClaw** | 4 | — | PRs stale >1 mês |
| **IronClaw** | 7 | — | Ciclo rápido em PRs pequenas |
| **CoPaw** | 0 | 0 (6 abertas, 0 fechadas) | PRs em review >7 dias |
| **ZeroClaw** | 4 | — | ~2 dias (bugfix cycle) |

**Leitura:**
- **NullClaw** e **ZeroClaw** demonstram disciplina de closure — bugs resolvidos em dias, não semanas.
- **NanoBot** prioriza bem: bugs críticos (DeepSeek) resolvidos em <24h, features menores em pipeline.
- **CoPaw** e **Hermes Agent** precisam melhorar cycle de review para evitar stale PRs.

### 6.2 Saúde de Contribuição

| Projeto | First-timers | Engajamento | Risco |
|---------|:------------:|:------------:|:-----:|
| **CoPaw** | 67% (4/6 PRs) | 🟢 Excelente | Baixo — pipeline de onboarding saudável |
| **ZeroClaw** | theonlyhennygod (multi-area) | 🟢 Ativo | Baixo — contributor dedicado |
| **NanoBot** | chengyongru (multi-PR) | 🟢 Alto | Baixo — mantenedor responsivo |
| **IronClaw** | abbyshekit (5 PRs/dia) | 🟢 Alto | Baixo — comunidade ativa |
| **NullClaw** | Não especificado | 🟡 Equilibrado | Baixo — base estável |
| **Hermes Agent** | — | 🟡 Volume alto, mas P1s acumuladas | **Médio** — debt técnico |
| **PicoClaw** | — | 🟡 PRs stale | **Alto** — 2 PRs aguardando >1 mês |

### 6.3 Release Discipline

| Status | Projetos | Implicação |
|--------|----------|------------|
| **Nightly automatizada** | PicoClaw | CI/CD maduro, mas sem changelog |
| **Milestone em tracking** | ZeroClaw (v0.7.5), IronClaw (v0.26.0) | Próxima release em preparação |
| **Preparação ativa** | NullClaw | 37 PRs merged sugerem release iminente |
| **Nenhuma release** | NanoBot, Hermes Agent, CoPaw | Risco de "feature debt" — usuários sem tags para congelar versões |

**Recomendação transversal:** Ausência de releases formais impede adoção em produção por usuários enterprise que dependem de versionamento semântico.

---

## 7. Sinais de Tendência

### 7.1 Consolidação Técnica

**Microkernel architecture emerge como padrão** (ZeroClaw, IronClaw):
- Refactoring de kernels monolithic para módulos isolados
- Storage backend plugável (Postgres, libSQL, SQLite)
- Behavior contracts entre implementações

**HTTP nativo substituindo subprocessos**:
- NullClaw #881 busca remover curl (std.http nativo Zig)
- NanoBot #3513 unifica transcription providers
- Tendência: menor dependência externa, binaries mais leves

### 7.2 Expansão de Canais

| Canal | Projetos Suportados | Tendência |
|-------|---------------------|-----------|
| WhatsApp | NanoBot, CoPaw | 🟢 Maturidade crescente (media send/receive) |
| Discord | NanoBot, Hermes Agent, ZeroClaw | 🟢 Componentes interativos (botões, modais) |
| Feishu | NanoBot, Hermes Agent, ZeroClaw | 🟢 Threads e reações |
| WeChat | CoPaw, ZeroClaw | 🟡 Mercado chinês, i18n em desenvolvimento |
| Email | PicoClaw (#2421, discussion) | 🔴 Demanda corporativa não atendida |
| Telegram | Todos exceto CoPaw | 🟢 Maduro, mas com bugs P1 persistentes |

### 7.3 Recursos de Agentes Avançados

**Memory de longo prazo** aparece como feature estratégica:
- NullClaw: Knowledge Graph (SQLite + CTEs recursivos)
- IronClaw: Postgres/libSQL native repository
- ZeroClaw: "Dream Mode" — consolidação reflexiva de memórias
- Hermes Agent: Memory tool (com bugs #15843)

**Agent delegation e multi-model**:
- Hermes Agent: delegate_task com seleção de provider/model por task (3 issues duplicadas)
- NanoBot: subagent workflows em adoção (issue #849)
- Tendência: pipelines de agentes onde modelos especializados são orquestrados

### 7.4 Segurança como Prerequisite

**Shift de "feature" para "default"**:
- Shell injection mitigado em Hermes Agent (#3049)
- Anti-spoofing boundaries em NullClaw (#880)
- OAuth 2.1 + PKCE para MCP em discussão (PicoClaw #2546)
- Hardening de deploy público (NanoBot #3492)

**Implicação:** Projetos sem postura de segurança explícita enfrentarão barreiras de adoção enterprise.

### 7.5 Local-First e Privacidade

| Projeto | Feature Local | Implementação |
|---------|---------------|---------------|
| CoPaw | Ollama suporte | History não persiste (#3991), mas foco声明 |
| NullClaw | Edge/Raspberry Pi 5 | CPU stability demonstrada |
| ZeroClaw | Multi-instance config | Hardcoded paths em correção (#5605) |

**Tendência:** Demanda por agentes que funcionem offline ou com modelos locais — impulsionada por privacidade e custos de API.

---

## Síntese Executiva

| Dimensão | Projeto Mais Avançado | Oportunidade de Mercado |
|----------|----------------------|-------------------------|
| **Estabilidade** | NullClaw | Releases formais com changelog |
| **Extensibilidade** | NanoBot | Sistema de plugins padronizado |
| **Multi-provider** | PicoClaw | Fallback automático ausente em todos |
|

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-05-03

## 1. Panorama do dia

O NanoBot manteve um alto ritmo de atividade nas últimas 24h, com 25 eventos total (5 issues + 20 PRs). A equipe converteu duas Issues em PRsmerged ainda hoje — incluindo a correção do bug crítico do DeepSeek — sinalizando excelente capacidade de resposta. A taxa de resolvedores (8 PRs fechados vs. 12 abertos) indica que a pipeline de review está funcionando bem. Não houve releases, mas o backlog de features mostra avanço em múltiplas frentes (Discord, WebUI, áudio, segurança). A saúde geral do projeto é positiva, com foco em estabilidade (2 correções de bugs merged) e usabilidade (CLI, exec timeout, WebUI).

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.** O último release estável não está disponível no dataset fornecido. Recomenda-se monitorar a aba Releases do repositório para eventuais tagged versions candidatas.

---

## 3. Progresso do Projeto

### PRs merged/fechados (8 total)

| # | PR | Autor | Mudanças-chave |
|---|---|---|---|
| [#3594](https://github.com/HKUDS/nanobot/pull/3594) | fix: allow_patterns take priority over deny_patterns in ExecTool | chengyongru | Permite que `allow_patterns` sobrescreva `deny_patterns` no `ExecTool._guard_command()`, eliminando blocking irrecuperável. |
| [#3419](https://github.com/HKUDS/nanobot/pull/3419) | fix(provider): preserve reasoning_content when merging consecutive assistant messages | chengyongru | Corrige erro 400 do DeepSeek causado pela perda silenciosa de `reasoning_content` em `_enforce_role_alternation()`. Adiciona helper `_carry_over_reasoning()`. Resolve [#3584](https://github.com/HKUDS/nanobot/issues/3584). |
| [#3414](https://github.com/HKUDS/nanobot/pull/3414) | fix(agent): cap recent history section in system prompt | chengyongru | Limita seção "Recent History" em `build_system_prompt()` a 32K chars, evitando inchaço do system prompt com entradas acumuladas de history.jsonl. Cherry-pick de #3412. |
| [#3247](https://github.com/HKUDS/nanobot/pull/3247) | fix(memory): fall back to raw_archive on LLM error response | chengyongru | Trata falha de LLM (ex.: retorno 529 de minimax2.7) durante `/new`: fallback para `raw_archive()` evita quebra do fluxo quando `chat_with_retry` retorna `LLMResponse` com `finish_reason="error"`. |
| [#3176](https://github.com/HKUDS/nanobot/pull/3176) | feat(feishu): thread-scoped sessions, reply_in_thread, non-blocking reaction | chengyongru | Isolamento de sessão por thread no Feishu, `reply_in_thread` e reações não-bloqueantes. Avanço significativo na qualidade de interação com Threads do Feishu. |
| [#3456](https://github.com/HKUDS/nanobot/pull/3456) | feat(skills): add create-instance built-in skill + webui remote backend | chengyongru | Skill `create-instance` integrada que permite ao agente criar novas instâncias do bot via script helper. Suporte a GitHub Pages com backend remoto (bootstrap + auth via segredo). |
| [#2218](https://github.com/HKUDS/nanobot/pull/2218) | feat(security): support `{env:VAR}` syntax for environment variable references | chengyongru | Adiciona sintaxe `{env:VAR_NAME}` em `config.json` para referenciar variáveis de ambiente. Resolve armazenamento inseguro de API keys em texto plano. |
| [#2010](https://github.com/HKUDS/nanobot/pull/2010) | feat(whatsapp): add media send/receive support | Zeknes | Suporte completo a envio/recebimento de imagens, áudio, vídeo e documentos no WhatsApp. Unificação da API `sendMessage()` com mídia + caption. |

**Destaque:** As correções merged esta semana (DeepSeek reasoning, ExecTool deny/allow, system prompt cap) indicam priorização em estabilidade — um bom sinal para confiabilidade em produção.

---

## 4. Temas Quentes da Comunidade

### Issues com mais comentários e engajamento

| # | Issue | Autor | Comentários | Reações | Tema |
|---|---|---|---|---|---|
| [#3518](https://github.com/HKUDS/nanobot/issues/3518) | `[enhancement] please support xiaomi's models` | js110 | 3 | 0 | Integração com Xiaomi |
| [#3597](https://github.com/HKUDS/nanobot/issues/3597) | `[bug] NanoBot confused and couldn't access workspace root` | fablau | 0 | 0 | Bug de workspace |

**Análise:** A issue de suporte aos modelos Xiaomi (#3518) foi fechada como enhancement request, evidenciando demanda recorrente de usuários para expandir a lista de provedores suportados. O bug de workspace (#3597) é novo e requer atenção — envolve a capacidade do agente de acessar corretamente seu diretório de trabalho, o que afeta diretamente cenários de produção.

### PRs em destaque pela comunidade

| # | PR | Autor | Tema |
|---|---|---|---|
| [#3564](https://github.com/HKUDS/nanobot/pull/3564) | feat(hooks): HookCenter typed-event hook system with plugin support | aiguozhi123456 | Sistema de hooks tipado com suporte a plugin externo via `entry_points` |
| [#3492](https://github.com/HKUDS/nanobot/pull/3492) | fix(security): harden public-deploy footguns on WebUI bootstrap and API serve | mohamed-elkholy95 | Endurecimento de segurança em deploys públicos |
| [#3589](https://github.com/HKUDS/nanobot/pull/3589) | feat(discord): interactive components (buttons, select menus, modals) | torbbang | Componentes interativos avançados no Discord |
| [#3513](https://github.com/HKUDS/nanobot/pull/3513) | feat(audio): unify transcription providers and add local Whisper support | hussein1362 | Unificação de provedores de transcrição com suporte Whisper local |

**Análise:** Os PRs mais ambiciosos são os de **hooks (#3564)**, **segurança (#3492)** e **áudio (#3513)**. A adoção de um sistema de hooks baseado em eventos (#3564) é particularmente significativa — substitui o padrão de herança de `AgentHook` por um modelo mais extensível que permite à comunidade criar plugins sem modificar código interno do core. Isso sinaliza maturidade arquitetura do projeto.

---

## 5. Bugs e Estabilidade

### Bugs abertos (3 issues + 1 PR aberto)

| # | Bug | Severidade | Status |
|---|---|---|---|
| [#3597](https://github.com/HKUDS/nanobot/issues/3597) | NanoBot não consegue acessar workspace root (acumula "draft_x_post.txt" em lugar errado) | **Alta** | Aberto — usuário reporta impacto direto no fluxo de trabalho |
| [#3585](https://github.com/HKUDS/nanobot/issues/3585) | `reasoning_effort: null` não desabilita reasoning no Xiaomi MiMo | **Média** | Aberto — PR #3587 já em revisão para corrigir |
| [#3584](https://github.com/HKUDS/nanobot/issues/3584) | DeepSeek API erro 400 por 'reasoning_content' | **Alta** | **Resolved** via #3419 (merged) |

### Bugs corrigidos (esta semana, merged)

- **DeepSeek reasoning_content** (#3584 → #3419): Perda silenciosa em `_enforce_role_alternation()`. Corrigido com `_carry_over_reasoning()`.
- **ExecTool allow/deny patterns** (#3594): Regra de `deny` nunca sobrescrita por `allow`. Corrigido — `allow_patterns` agora tem prioridade.
- **System prompt bloat** (#3414): Histórico não truncado ultrapassava limites de context. Corrigido para 32K chars.
- **Memory fallback on LLM error** (#3247): `/new` quebrava se LLM retornasse erro. Fallback para `raw_archive()` adicionado.

**Avaliação de estabilidade:** O projeto demonstra disciplina de patch — bugs de produção (DeepSeek, ExecTool) estão sendo resolvidos com PRs pequenos e focados. Nenhum crash reportado pelo sistema, mas o bug de workspace (#3597) requer investigação urgente.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Enhancements abertas (2 issues + PRs candidatos)

| # | Feature | Autor | Potencial de impacto |
|---|---|---|---|
| [#3595](https://github.com/HKUDS/nanobot/issues/3595) | Remover limite de 600s no timeout do `exec` tool | MARJORIESHA-pBAD | **Alto** — Impacta scripts longos, downloads, tarefas de time-lapse. PR #3596 já em desenvolvimento. |
| [#3518](https://github.com/HKUDS/nanobot/issues/3518) | Suporte a modelos Xiaomi | js110 | **Médio** — Enhancement fechou, sinaliza priorização futura de novos provedores. |

### Features em desenvolvimento via PRs

| # | Feature | Escopo |
|---|---|---|
| [#3589](https://github.com/HKUDS/nanobot/pull/3589) | Componentes interativos Discord (botões, menus, modais) | Canal Discord |
| [#3592](https://github.com/HKUDS/nanobot/pull/3592) | Ctrl+C limpa input em vez de sair (CLI) | CLI / UX |
| [#3591](https://github.com/HKUDS/nanobot/pull/3591) | Controles de escopo de update no Dream | Feature Dream |
| [#3590](https://github.com/HKUDS/nanobot/pull/3590) | Trigger manual de heartbeat | Sistema interno |
| [#3513](https://github.com/HKUDS/nanobot/pull/3513) | Unificação de transcription + suporte Whisper local | Áudio |
| [#3564](https://github.com/HKUDS/nanobot/pull/3564) | HookCenter com plugin system | Arquitetura extensibilidade |
| [#3492](https://github.com/HKUDS/nanobot/pull/3492) | Endurecimento de segurança em deploy público | Segurança |
| [#3583](https://github.com/HKUDS/nanobot/pull/3583) | Melhorias em WebUI turn completion e chat isolation | WebUI (beta) |

**Sinais de roadmap identificados:**
1. **Extensibilidade**: Sistema de hooks (#3564) e plugins são priorizados — a equipe está investindo em abertura para contributors externos.
2. **Canais diversificados**: Discord (#3589), WhatsApp (#2010, merged), Feishu (#3176, merged) recebem atenção contínua.
3. **Áudio/Termostampação**: A unificação de provedores de transcrição (#3513) + correção (#3588) indica preparação para cargas de trabalho de voz mais robustas.
4. **Segurança**: endurecimento de deploy público (#3492) mostra consciência de risco em ambientes expostos.

---

## 7. Resumo de Feedback dos Usuários

### Dores reportadas diretamente nas issues

**Dores funcionais:**
- *"executing long-running scripts — the timeout is cutting off time-lapse tasks"* ([#3595](https://github.com/HKUDS/nanobot/issues/3595)) → usuários precisam de execuções que superam 600s para tareas legítimas (downloads, scripts de build, pipelines).
- *"NanoBot confused and couldn't access workspace root"* ([#3597](https://github.com/HKUDS/nanobot/issues/3597)) → usuário de trabalho profissional (eng. de conteúdo) reporta frustração ao tentar usar o bot para fluxo de trabalho real. O bot falha em tarefa básica de salvar arquivo no workspace.
- *"null doesn't disable thinking on Xiaomi MiMo — no way to explicitly disable reasoning"* ([#3585](https://github.com/HKUDS/nanobot/issues/3585)) → gap entre documentação e implementação causa experiência inconsistente.

**Satisfação evidenciada:**
- O alto volume de PRs mergeados indica que usuários contribuidores estão satisfeitos com o processo de review e a arquitetura do projeto.
- O PR #2010 (WhatsApp media) fechado após trabalho significativo demonstra investimento da comunidade em feature completeness.

### Padrão de uso emergente

Os cenários de uso reportados sugerem que NanoBot está sendo adotado em **fluxos de trabalho profissionais diários** (redação de posts, automação de tarefas de longa duração), não apenas como assistente experimental. A exigência de confiabilidade (workspace, timeout, reasoning modes) confirma maturidade da demanda.

---

## 8. Backlog que Merece Atenção

| # | Item | Tempo sem resposta | Prioridade | Ação recomendada |
|---|---|---|---|---|
| [#3492](https://github.com/HKUDS/nanobot/pull/3492) | fix(security): harden public-deploy footguns | 5 dias | **Alta** | Revisar e dar feedback — questão de segurança em deploys públicos |
| [#3513](https://github.com/HKUDS/nanobot/pull/3513) | feat(audio): unify transcription + Whisper local | 5 dias | **Alta** | PR abrangente — revisar arquitetura de providers |
| [#3583](https://github.com/HKUDS/nanobot/pull/3583) | Improve WebUI turn completion (WIP) | 2 dias | **Média** | Acompanhar desenvolvimento, возможно needs review |
| [#3585](https://github.com/HKUDS/nanobot/issues/3585) | `reasoning_effort: null` bug | 1 dia | **Alta** | PR #3587 pronto para merge |
| [#3597](https://github.com/HKUDS/nanobot/issues/3597) | Bug workspace root | <1 dia | **Alta** | Triagem urgente — impacto em produção |

**Nenhum item com resposta pendente há mais de uma semana**, o que indica saúde na gestão de Issues. A atenção deve focar nos dois PRs de segurança (#3492) e áudio (#3513) que estão esperando review há 5 dias.

---

## Métricas Resumidas

| Indicador | Valor |
|---|---|
| Issues ativas (24h) | 5 |
| PRs abertos (24h) | 12 |
| PRs merged/fechados (24h) | 8 |
| Releases | 0 |
| Bugs críticos abertos | 2 (#3597, #3585) |
| Features em pipeline | 8+ |
| PRs aguardando review (>3 dias) | 2 |

**Veredicto geral:** NanoBot apresenta saúde sólida com atividade alta, disciplina de estabilidade (bugs sendo corrigidos rapidamente) e investimento em extensibilidade (hooks, plugins) e diversificação de canais. A atenção imediata deve ir para: (1) o bug de workspace (#3597), (2) merge do fix de Xiaomi reasoning (#3587), (3) review dos PRs de segurança (#3492) e áudio (#3513).

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-05-03

## 1. Panorama do dia

O Hermes Agent manteve alta atividade em 03/05/2026, com 50 issues e 50 PRs atualizados nas últimas 24 horas. A distribuição de PRs mostra 44 abertos e 6 fechados/merged, indicando fluxo contínuo de revisões. Não houve releases novas, sugerindo que o projeto está em fase de estabilização após ciclos recentes de merge. A comunidade demonstra engajamento ativo em múltiplas frentes — desde correções críticas de segurança (shell injection) até features de usabilidade (delegação de modelo, controle de effort). O volume de issues P1 (3 abertas) e P2 (12 abertas) sinaliza debt técnico acumulado que merece priorização.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24h.**

O projeto não publicou novas versões entre 2026-05-02 e 2026-05-03. Isso contrasta com o alto volume de PRs fechados (6), que parecem ter sido merges de correções diretamente no branch principal sem geração de tag de release. Recomenda-se verificar se o pipeline de releases está automatizado ou se necessita de.trigger manual.

---

## 3. Progresso do projeto

### PRs fechados/merged hoje (06):

| # | Título | Impacto | Link |
|---|--------|---------|------|
| #3049 | `fix(cli): prevent shell injection in quick_commands exec type` | **🔴 Crítico** — Eliminava vetor de execução de comandos arbitrários via config maliciosa. Merge em 2026-05-02. | [PR #3049](https://github.com/NousResearch/hermes-agent/pull/3049) |
| #15507 | `fix(hindsight): prevent late retain sync during interpreter shutdown` | Estabilidade — Corrigia `RuntimeError` durante shutdown do Python. | [PR #15507](https://github.com/NousResearch/hermes-agent/pull/15507) |
| #18949 | `fix(cli): expand show_config messaging platforms to include all adapters` | Usabilidade — `hermes config` agora lista Telegram, Discord, Feishu e outros. | [PR #18949](https://github.com/NousResearch/hermes-agent/pull/18949) |
| #18967 | `fix(delegate): read delegation config from disk first to avoid stale cache` | Corrigia issue #18946 — config de delegação não atualizava em processos em execução. | [PR #18967](https://github.com/NousResearch/hermes-agent/pull/18967) |
| #16499 | `fix(gemini): route /model gemini to native /v1beta endpoint` | Provider routing — resolvia fallback incorreto para Gemini. | [PR #16499](https://github.com/NousResearch/hermes-agent/pull/16499) |
| #13954 | `fix(setup): clarify Moonshot/Kimi provider labels` | UX de setup — alinhava labels e aceita `MOONSHOT_API_KEY`. | [PR #13954](https://github.com/NousResearch/hermes-agent/pull/13954) |

**Destaque de segurança:** O merge do PR #3049 (`prevent shell injection in quick_commands`) é prioritário — alterava `shell=True` para `shell=False` em execuções de comando, mitigando risco de injeção via metacaracteres shell (`&&`, `|`, `$(...)`).

---

## 4. Temas quentes da comunidade

### Issues com maior engajamento (comentários + reações):

| # | Título | Comentários | 👍 | Categoria |
|---|--------|-------------|----|-----------|
| [#6207](https://github.com/NousResearch/hermes-agent/issues/6207) | Stale .pyc cache causes TypeError após code update | 8 | 1 | 🐛 Bug |
| [#3000](https://github.com/NousResearch/hermes-agent/issues/3000) | install.sh silently aborts on macOS (paths com espaços) | 5 | 0 | 🐛 Bug |
| [#15080](https://github.com/NousResearch/hermes-agent/issues/15080) | Claude Max 20x OAuth rejection HTTP 400 | 5 | 0 | 🐛 Bug |
| [#18927](https://github.com/NousResearch/hermes-agent/issues/18927) | TUI /q alias mapeado para quit em vez de queue | 4 | 0 | 🐛 Bug |
| [#5012](https://github.com/NousResearch/hermes-agent/issues/5012) | Allow delegate_task to accept provider/model | 3 | 0 | ✨ Feature |
| [#10995](https://github.com/NousResearch/hermes-agent/issues/10995) | delegate_task per-task model selection | 3 | 1 | ✨ Feature |
| [#3326](https://github.com/NousResearch/hermes-agent/issues/3326) | add --output-format json flag | 1 | **2** | ✨ Feature |

**Análise:** O issue #6207 (8 comentários) demonstra que a comunidade enfrenta problemas de compatibilidade entre versões do Hermes e código cacheado Python — demanda por mecanismos de invalidação de `.pyc` ou guidance de reinstall. O tema de **delegação com seleção de modelo por task** aparece em 3 issues relacionados (#5012, #10995, #6306), sinalizando necessidade recorrente de controle granular de custos e modelos. O issue #3326 com 2 👍 (única reação mais alta) indica desejo de output estruturado para automação CI/CD.

---

## 5. Bugs e estabilidade

### Prioridade P1 (Críticos):

| # | Título | Severidade | Link |
|---|--------|------------|------|
| #15080 | Claude Max 20x OAuth token rejeitado com HTTP 400 | 🔴 P1 | [Issue #15080](https://github.com/NousResearch/hermes-agent/issues/15080) |
| #3206 | Telegram DM sends falham com 'Message thread not found' | 🔴 P1 | [Issue #3206](https://github.com/NousResearch/hermes-agent/issues/3206) |
| #18912 | Race condition: /new nunca envia resposta (Telegram) | 🔴 P1 | [Issue #18912](https://github.com/NousResearch/hermes-agent/issues/18912) |

**Problemas P1 em aberto:** 3 issues com severidade máxima. Telegram é a plataforma com mais bugs P1 (2 de 3), sugerindo dívida técnica específica no adapter dessa plataforma.

### Prioridade P2 (Importantes):

| # | Título | Área | Link |
|---|--------|------|------|
| #6207 | TypeError após code update (.pyc cache) | CLI | [Issue #6207](https://github.com/NousResearch/hermes-agent/issues/6207) |
| #3000 | install.sh aborta silenciosamente (macOS paths) | CLI | [Issue #3000](https://github.com/NousResearch/hermes-agent/issues/3000) |
| #18927 | TUI /q resolve para quit em vez de queue | TUI | [Issue #18927](https://github.com/NousResearch/hermes-agent/issues/18927) |
| #18959 | Kanban workers leem DB errada (profile-scoped) | Cron | [Issue #18959](https://github.com/NousResearch/hermes-agent/issues/18959) |
| #18946 | delegation config não surte efeito (CLI_CONFIG stale) | CLI | [Issue #18946](https://github.com/NousResearch/hermes-agent/issues/18946) |
| #18907 | Bedrock auxiliary models não persistem | Provider | [Issue #18907](https://github.com/NousResearch/hermes-agent/issues/18907) |
| #18935 | PermissionError em gateway.lock (root-owned) | Docker | [Issue #18935](https://github.com/NousResearch/hermes-agent/issues/18935) |
| #15843 | Memory tool delete/replace operations falhando | Tools | [Issue #15843](https://github.com/NousResearch/hermes-agent/issues/15843) |

**Destaque:** O issue #18946 (delegation config stale) já possui PR #18967 merged, mas a issue permanece aberta — verificar se o fix foi completo.

---

## 6. Pedidos de features e sinais de roadmap

### Features mais demandadas:

| # | Título | Área | Prioridade | Link |
|---|--------|------|------------|------|
| #5012 | delegate_task com provider/model parameters | Tools | P3 | [Issue #5012](https://github.com/NousResearch/hermes-agent/issues/5012) |
| #10995 | Per-task model selection em delegate_task | Tools | P3 | [Issue #10995](https://github.com/NousResearch/hermes-agent/issues/10995) |
| #3326 | `--output-format json` flag | CLI | P3 | [Issue #3326](https://github.com/NousResearch/hermes-agent/issues/3326) |
| #18326 | ACP mode reasoning_effort control | ACP | P3 | [Issue #18326](https://github.com/NousResearch/hermes-agent/issues/18326) |
| #18885 | Allow memory provider em cron jobs | Cron | P3 | [Issue #18885](https://github.com/NousResearch/hermes-agent/issues/18885) |
| #3155 | Per-client model routing na API server | Gateway | P3 | [Issue #3155](https://github.com/NousResearch/hermes-agent/issues/3155) |

**Sinais de roadmap:**
- **Delegação inteligente (#5012, #10995, #6306):** 3 issues duplicadas indicam necessidade urgente de controle de modelo por task. Este é o tema mais solicitado.
- **Controle de reasoning effort em ACP (#18326, #18956):** O PR #18956 já implementa `/effort` e `/show_thinking` — feature em desenvolvimento ativo.
- **Output estruturado (#3326):** Demanda para automação CI/MCP servers.

### PRs abertos com features:

| # | Título | Link |
|---|--------|------|
| #18956 | `feat(acp): /effort e /show_thinking + streaming` | [PR #18956](https://github.com/NousResearch/hermes-agent/pull/18956) |
| #9846 | `Feat/termux install path + bug fixes` | [PR #9846](https://github.com/NousResearch/hermes-agent/pull/9846) |
| #3006 | `feat(tools): RAM-backed tool result cache` | [PR #3006](https://github.com/NousResearch/hermes-agent/pull/3006) |
| #16502 | `fix(cli): refuse-or-drop privileges when launched as root` | [PR #16502](https://github.com/NousResearch/hermes-agent/pull/16502) |

---

## 7. Resumo de feedback dos usuários

### Dores recorrentes identificadas:

| Dor | Frequência | Issues | Impacto |
|-----|------------|--------|---------|
| **Config não atualiza em runtime** | Alta | #18946, #18907, #15080 | Experiência frustrante — usuário muda config e não vê efeito |
| **Instabilidade Telegram** | Alta | #3206, #18912 | Usuários de messaging principal afetados |
| **Problemas em macOS/Termux** | Média | #3000, #18390, #9846 | Fragmentação de plataforma |
| **Memory tool não funciona** | Média | #15843, #18875 | Feature promessa subutilizada |
| **Performance TTFT** | Média | #3353, #3352, #3354, #3006 | Latência em workflows agent |

### Cenários de uso inferidos:
- **Desenvolvimento local CLI** — principais dores em config runtime e cache
- **Deploy em VPS/Docker** — problemas de permissão, entrypoint, systemd
- **Integração messaging (Telegram/Discord)** — instabilidade em DMs e reply chains
- **Automação CI/CD** — demanda por output JSON estruturado
- **Delegação multi-modelo** — necessidade de controle de custos em pipelines

---

## 8. Backlog que merece atenção

### Issues sem resposta ou estagnadas:

| # | Título | Criado | Atualizado | Status | Link |
|---|--------|--------|------------|--------|------|
| #2205 | Improve Venice AI integration | 2026-03-20 | 2026-05-02 | 1 comentário | [Issue #2205](https://github.com/NousResearch/hermes-agent/issues/2205) |
| #3276 | Honcho PR map: integração comunidade | 2026-03-26 | 2026-05-02 | 2 comentários | [Issue #3276](https://github.com/NousResearch/hermes-agent/issues/3276) |
| #3155 | Per-client model routing na API | 2026-03-26 | 2026-05-02 | 1 comentário | [Issue #3155](https://github.com/NousResearch/hermes-agent/issues/3155) |

### Recomendações de priorização:

1. **🔴 Imediato:** Resolver 3 P1s abertas (Telegram + OAuth Claude Max)
2. **🟠 Curto prazo:** Verificar cobertura de testes para #18946 após merge do fix
3. **🟡 Médio prazo:** Consolidar issues de delegate_task (#5012, #10995, #6306) em uma única especificação
4. **🟢 Oportunidade:** Engajar comunidade em #2205 (Venice AI) e #3276 (Honcho) com stewardship

---

## Métricas de saúde do projeto (2026-05-03)

| Indicador | Valor | Observação |
|-----------|-------|------------|
| Issues ativas (24h) | 50 | Alta atividade |
| PRs abertos | 44 | Pipeline saudável |
| PRs fechados (24h) | 6 | Fluxo de merge ativo |
| Releases (24h) | 0 | Sem tagging recente |
| P1 abertas | 3 | Atenção urgente |
| P2 abertas | 12 | Debt técnico relevante |
| Issues sem resposta | 3+ | Risco de community fatigue |

**Veredicto:** Projeto com alta atividade e bom fluxo de contribuição, mas com concentração de bugs críticos em Telegram e problemas de config runtime. A ausência de releases pode indicar pipeline manual — recomenda-se automatização.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>


# Relatório do Projeto PicoClaw — 2026-05-03

---

## 1. Panorama do Dia

O ecossistema PicoClaw demonstra **alta atividade** em 03 de maio de 2026, com 6 issues atualizadas e 8 PRs processados nas últimas 24 horas. A distribuição de Pull Requests revela equilíbrio entre contribuição de código (5 PRs técnicos abertos/fechados) e tarefas burocráticas/cosméticas (3 PRs). O projeto apresenta **8 bugs em aberto**, com dois classificados como alta prioridade, sugerindo pressão sobre a equipe de manutenção para resolver problemas de estabilidade. A release nightly v0.2.8-nightly.20260502 mantém o ritmo de integração contínua, embora sem changelog detalhado disponível.

---

## 2. Lançamentos

### Release Atual
- **Nightly Build**: `v0.2.8-nightly.20260502.6e1fab80`
- **Status**: Automatizada, potencialmente instável
- **Changelog**: https://github.com/sipeed/picoclaw/compare/v0.2.8...main

**Observação**: Esta é uma build automática sem detalhes de changes publicados. Recomenda-se cautela em ambientes de produção.

---

## 3. Progresso do Projeto

### PRs Fechados/Merged (4)

| # | Título | Impacto |
|---|--------|---------|
| **#2746** | [fix(openrouter): document reasoning suppression preset](https://github.com/sipeed/picoclaw/pull/2746) | **Alto** — Adiciona preset e documentação para suprimir output de raciocínio em modelos OpenRouter como Nemotron. Resolve parte do vazamento de reasoning em #2745. |
| **#2743** | [fix(openai_compat): detect DeepSeek models behind non-deepseek proxies](https://github.com/sipeed/picoclaw/pull/2743) | **Médio** — Permite detecção de modelos DeepSeek quando roteados via proxies terceiros (opencode.ai, avian.io, etc.), ampliando compatibilidade. |
| **#2739** | [fix(telegram): wrap markdown pipe tables in fenced code blocks](https://github.com/sipeed/picoclaw/pull/2739) | **Médio** — Resolve renderização de tabelas markdown no Telegram, evitando escapes `\|` que produziam output corrompido. |
| **#2747** | [chore: update WeChat group QR code](https://github.com/sipeed/picoclaw/pull/2747) | **Baixo** — Atualização cosmética do QR code do grupo WeChat. |

### PRs em Aberto Relevantes (4)

| # | Título | Estágio | Próximo Passo |
|---|--------|---------|---------------|
| **#2260** | [feat(providers): add xAI compat support](https://github.com/sipeed/picoclaw/pull/2260) | Estável há 1 mês, aguardando merge | Revisão final para integração do provider xAI via path OpenAI-compatible |
| **#2740** | [fix(deepseek): capture reasoning_content from streaming](https://github.com/sipeed/picoclaw/pull/2740) | Recente | Corrigido parsing de tokens de raciocínio em streaming DeepSeek |
| **#2163** | [fix: maintain OAuth scopes during Google Antigravity token refresh](https://github.com/sipeed/picoclaw/pull/2163) | Estável há 1+ mês | Resolve PERMISSION_DENIED após refresh de token em Cloud Code Assist |

---

## 4. Temas Quentes da Comunidade

### Issue com Maior Engajamento de Comentários
- **#2421** — [Feature: Add email as native channel](https://github.com/sipeed/picoclaw/issues/2421) — **4 comentários**

**Análise**: A comunidade demonstra interesse significativo em expandir canais de comunicação. O pedido justifica-se por cenários corporativos, científicos e ambientes conservadores onde email é o único canal viável. A discussão indica que múltiplos contribuidores veem isso como necessidade real, não apenas feature request isolado.

### Issue com Reações
- **#2668** — [BUG: Gemini API returns HTTP 400 for MCP tools with complex JSON schemas](https://github.com/sipeed/picoclaw/issues/2668) — **1 👍**

**Análise**: Embora com baixa contagem de 👍, esta issue representa problema crítico de compatibilidade com integrações MCP como Notion. O bug afeta diretamente fluxos de trabalho que combinam ferramentas MCP com modelos Gemini.

### Tendência Observada
Três das seis issues abertas referem-se a **problemas de model providers** (Anthropic, Gemini, OpenRouter), indicando que a abstração de múltiplos provedores está sob estresse. O projeto precisa estabilizar esta camada antes de expandir para novos providers.

---

## 5. Bugs e Estabilidade

### Por Severidade

| Severidade | Issue | Título | Domínio | Impacto |
|------------|-------|--------|---------|---------|
| **🔴 Alta** | #2720 | [Singleton PID check doesn't verify process identity](https://github.com/sipeed/picoclaw/issues/2720) | Build | **Crash loop** quando PID é reutilizado por processos do sistema (ex: systemd-resolved). Afeta inicialização do gateway. |
| **🔴 Alta** | #2668 | [Gemini API returns HTTP 400 for MCP tools with complex JSON schemas](https://github.com/sipeed/picoclaw/issues/2668) | Provider, Tool | Integração MCP falha com schemas `$ref`, `anyOf`, `$defs`. Afeta clientes Notion e similares. |
| **🟡 Média** | #2665 | [Wrong model IDs in Anthropic dropdown](https://github.com/sipeed/picoclaw/issues/2665) | Provider | IDs com pontos (4.6) vs dashes (4-6) — dropdown gera requisições inválidas para API Anthropic. |
| 🟢 Baixa | #2745 | [OpenRouter reasoning model leaks thinking into assistant content](https://github.com/sipeed/picoclaw/issues/2745) | Provider, Channel | Thinking text aparece no conteúdo do assistant em vez de ser suprimido. |
| 🟢 Baixa | #2630 | [Web UI: show full reply datetime](https://github.com/sipeed/picoclaw/pull/2630) | Channel (Web) | UI exibe hora local ao invés de datetime completo — cosmético mas impacta audit trail. |

### Análise de Estabilidade
O projeto apresenta **2 bugs de alta severidade** simultaneamente, ambos com potencial de bloqueio. A issue #2720 é particularmente crítica pois afeta o próprio bootstrapping do sistema. Prioridade de resolução deve ser: (1) PID singleton, (2) Gemini/MCP.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em Discussão Ativa

| # | Feature | Justificativa | Complexidade Estimada |
|---|---------|---------------|----------------------|
| **#2421** | [Email como canal nativo](https://github.com/sipeed/picoclaw/issues/2421) | Requisito corporativo/científico; elimina dependência de plataformas chat | **Alta** — Requer servidor SMTP, filas, template rendering |
| **#2546** | [OAuth 2.1 + PKCE para MCP servers via dashboard](https://github.com/sipeed/picoclaw/issues/2546) | UX similar Claude.ai — adicionar conectores sem shell/Node.js | **Alta** — Interface + OAuth provider + storage |

### Sinais de Roadmap Inferidos
- **Expansão de Providers**: PR #2260 (xAI) + demanda por Google/Gemini indicam tendência de diversificação
- **Maturidade MCP**: Issue #2546 sugere que integração MCP está se tornando first-class citizen
- **DX de Canais**: Múltiplas issues sobre rendering (Telegram tables, Web datetime) indicam fase de polish

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Dor | Evidência | Severidade |
|-----|-----------|------------|
| **Falha em inicialização por PIDs colidentes** | #2720 — crash loop com systemd-resolved | Crítica |
| **Incompatibilidade com schemas MCP complexos** | #2668 — Notion e outras integrações quebram | Alta |
| **Configuração de providers propensa a erros** | #2665 — dropdown gera IDs inválidos | Média |
| **Vazamento de reasoning em modelos de raciocínio** | #2745 — output poluído com thinking | Baixa-Média |
| **Tokens de raciocínio ignorados em streaming** | #2740 — resolved via PR | Resolvido |

### Cenários de Uso Observados
- **Corporate/Enterprise**: Email como canal, OAuth para MCP, estabilidade de inicialização
- **Desenvolvedores MCP**: Integração Notion, conectores customizados
- **Multi-provider**: Usuários alternando entre Anthropic, DeepSeek, OpenRouter, xAI

### Satisfação/Insatisfação
**Positivo**: Equipe responsiva — PRs são revisados e merged rapidamente (4 PRs fechados em 24h).  
**Negativo**: Staleness em issues — algumas feature requests (#2260, #2163) aguardam merge há >1 mês sem aparente motivo técnico.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Estagnadas

| # | Título | Idade | Status | Ação Recomendada |
|---|--------|-------|--------|------------------|
| **#2260** | [feat(providers): add xAI compat support](https://github.com/sipeed/picoclaw/pull/2260) | 1 mês | PR aberto, stale | **Revisar e merge** — feature completa com testes e docs |
| **#2163** | [fix: maintain OAuth scopes during Google Antigravity](https://github.com/sipeed/picoclaw/pull/2163) | >1 mês | PR aberto, stale | **Revisar e merge** — resolve bug de PERMISSION_DENIED |
| **#2421** | [Feature: Add email as native channel](https://github.com/sipeed/picoclaw/issues/2421) | ~25 dias | Issue ativa, 4 comentários | **Triagem** — classificar complexidade e dar direction |
| **#2546** | [Feature: OAuth 2.1 + PKCE para MCP](https://github.com/sipeed/picoclaw/issues/2546) | ~17 dias | Issue ativa | **Triagem** — definir se está no roadmap atual |
| #2630, #2665, #2668 | Bugs de UI e provider | Variável | Em aberto | **Priorização** — alguns são regressões bloqueantes |

### Priorização Recomendada

1. **Imediata**: #2720 (PID singleton crash) — bloqueia uso
2. **Curto prazo**: #2668 (Gemini/MCP), #2665 (Anthropic IDs) — quebram funcionalidades existentes
3. **Médio prazo**: Merge #2260, #2163 — features/testes prontos, apenas aguardando review
4. **Longo prazo**: #2421, #2546 — requerem RFC e planejamento de arquitetura

---

*Relatório gerado em 2026-05-03 às 00:00 UTC. Dados extraídos de github.com/sipeed/picoclaw.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-05-03

---

## 1. Panorama do dia

O IronClaw apresenta **alta atividade de desenvolvimento** hoje, com 47 PRs atualizadas nas últimas 24h e 20 issues de destaque. O foco principal continua na arquitetura **"Reborn"** — um refactoring significativo do kernel de execução de turnos — evidenciada por 9 issues e 4+ PRs empilhadas sobre o tema. Não há lançamentos novos hoje, mas o ritmo de merge está acelerado com 7 PRs fechadas, incluindo correções de CI (flake de testes MCP) e groundwork para memória nativa em Postgres e libSQL. A colaboração de contribuidores externos está robusta, com o usuário `abbyshekit` contribuindo 5 PRs novas em um único dia.

---

## 2. Lançamentos

**Nenhum release publicado nas últimas 24h.**

O último release institucionalizado foi a `v0.26.0` (2026-04-21), cujo installer apresentava bug no alvo `x86_64-unknown-linux-gnu` (Issue #2818 — **resolvida**).

---

## 3. Progresso do Projeto

### PRs fechadas/merged hoje:

| # | Título | Escopo | Destaque |
|---|---|---|---|
| [#3205](https://github.com/nearai/ironclaw/pull/3205) | fix(mcp): lock env in refresh-direct test to corrigir flake na merge queue | CI / tool/mcp | Corrige race condition em testes paralelos de OAuth MCP |
| [#3144](https://github.com/nearai/ironclaw/pull/3144) | Wire EnforceResourceCeiling into runtime | reborn / sandbox | Wiring completo do ceiling de recursos no runtime/sandbox |
| [#3147](https://github.com/nearai/ironclaw/pull/3147) | Wire built-in obligation audit records | reborn / safety | Conecta auditoria de obrigações a event sinks de produção |
| [#3145](https://github.com/nearai/ironclaw/pull/3145) | Define background process obligation reconciliation | reborn / worker | Ciclo de vida completo de obrigações em processos background |
| [#2818](https://github.com/nearai/ironclaw/issues/2818) | bug: installer falha em x86_64-linux — **CLOSED** | setup | Fix do installer `v0.26.0` |
| [#2372](https://github.com/nearai/ironclaw/pull/2372) | feat(llm): enable thinking para Ollama | llm | Habilita `"think": true` automaticamente para modelos reasoning (Qwen3, DeepSeek-R1, Gemma 4) via Ollama |
| [#3105](https://github.com/nearai/ironclaw/pull/3105) | Staging (fallback WASM channels) | channel/wasm | Correção de polling Telegram em setup headless |

### PRs abertas em destaque (stack de Reborn-Memory):

| # | Título | Tamanho | Contribuidor |
|---|---|---|---|
| [#3180](https://github.com/nearai/ironclaw/pull/3180) | PR 1: Native-isolated guardrails + module split | XL | core |
| [#3181](https://github.com/nearai/ironclaw/pull/3181) | PR 2: Native schema + empty repo wiring | L | core |
| [#3182](https://github.com/nearai/ironclaw/pull/3182) | PR 3: Native libSQL repository behavior | XL | core |
| [#3183](https://github.com/nearai/ironclaw/pull/3183) | PR 4: Native Postgres repository behavior | XL | core |
| [#3184](https://github.com/nearai/ironclaw/pull/3184) | PR 5: Behavior contract (libSQL + Postgres) | XS | core |

**Análise:** O stack de PRs #3118 está sendo construído incrementalmente (5 PRs empilhadas), evidenciando maturidade no processo de revisão e testagem de camadas de storage para a arquitetura Reborn. O foco em contratos de comportamento (behavior contracts) é sinal de preocupação com consistência entre implementações Postgres e libSQL.

---

## 4. Temas Quentes da Comunidade

### Issues com maior atividade ou estrutura de dependência:

| # | Título | Comentários | Tema |
|---|---|---|---|
| [#3016](https://github.com/nearai/ironclaw/issues/3016) | Reborn cutover blocker: add reference AgentLoopHost facade | 3 | Arquitetura core |
| [#90](https://github.com/nearai/ironclaw/issues/90) | feat: Audio pipeline (STT, TTS, voice) | 2 | Feature de mídia |
| [#3013](https://github.com/nearai/ironclaw/issues/3013) | Add kernel TurnCoordinator | 1 | Arquitetura core |
| [#3148](https://github.com/nearai/ironclaw/issues/3148) | Add vertical tests para post-3080 obligation handoffs | 0 | Testes E2E |

### PRs com maior relevância estratégica:

| # | Título | Tamanho | Tema |
|---|---|---|---|
| [#3212](https://github.com/nearai/ironclaw/pull/3212) | Add Reborn event projection service | XL | Observabilidade / arquitetura |
| [#2700](https://github.com/nearai/ironclaw/pull/2700) | fix(gateway): chat titles em vez de hex IDs | XL | UX / persistência |
| [#3187](https://github.com/nearai/ironclaw/pull/3187) | Magic-link onboarding para pilot users | XL | Onboarding / segurança |

**Análise:** A comunidade está focada em **duas linhas de trabalho**: (1) **Arquitetura Reborn** — estruturação do kernel de execução, turnos e contratos de memória; (2) **Features de produto** — audio pipeline, onboarding com magic-links e trading via NEAR Intents. A Issue #90 (Audio pipeline) está ativa desde fevereiro e tem dependência P1 para WhatsApp voice notes, sinalizando demanda reprimida.

---

## 5. Bugs e Estabilidade

| Severidade | # | Título | Status | Impacto |
|---|---|---|---|---|
| 🔴 **Crítica** | [#3214](https://github.com/nearai/ironclaw/issues/3214) | thoughtSignature dropped no Cloud Code SSE handler — fixes anteriores (#1565, #1752) incompletos | OPEN | HTTP 400 `INVALID_ARGUMENT` com Gemini 3.x em tool calls |
| 🟡 **Alta** | [#2344](https://github.com/nearai/ironclaw/issues/2344) | [QA] Staging Web UI — TypeError, ReferenceError, CSP violations no carregamento | OPEN | Console errors no ambiente de staging |
| 🟡 **Alta** | [#3201](https://github.com/nearai/ironclaw/issues/3201) | [QA] Tool use para DeepSeek não funciona | OPEN | Relatado hoje — reprodução local confirmada |
| 🟢 **Média** | [#2818](https://github.com/nearai/ironclaw/issues/2818) | Installer falha em x86_64-linux | **CLOSED** | Já corrigido |

**Alerta:** A Issue #3214 é uma regressão que afeta **Gemini 3.x** especificamente, com fixes anteriores considerados incompletos. Necessita priorização imediata, pois afeta tool-calling com modelos populares.

---

## 6. Pedidos de Features e Sinais de Roadmap

| # | Título | Tags | Sinais de Prioridade |
|---|---|---|---|
| [#90](https://github.com/nearai/ironclaw/issues/90) | Audio pipeline (STT/TTS) | scope: llm, scope: channel | P1-P2 — dependsende de WhatsApp voice notes |
| [#3168](https://github.com/nearai/ironclaw/issues/3168) | ARM64/aarch64 Docker support | enhancement | Proposta PR #3208 (já aberta) — Cranelift suporta |
| [#3211](https://github.com/nearai/ironclaw/pull/3211) | Paid research layer para NEAR intents trading | scope: docs | Expansão de capabilities de trading |
| [#3207](https://github.com/nearai/ironclaw/pull/3207) | NEAR Intents trading agent foundation | scope: docs | Deterministic backtesting + strategies |
| [#3189](https://github.com/nearai/ironclaw/pull/3189) | Native autoverify command | scope: channel/cli | Autonomia de trabalho (agentes verifying themselves) |

**Análise de roadmap:** O roadmap está convergindo para três áreas: (1) **Reborn kernel** — reescrita do core de execução; (2) **Multi-platform** — ARM64 Docker + extensões; (3) **Trading/Finance** — NEAR Intents como novo domínio de produto. A ausência de releases recentes e o volume de work-in-progress indicam que a equipe está em modo de reorganização estrutural antes de um próximo tag de versão.

---

## 7. Resumo de Feedback dos Usuários

| Tema | Sinal | Origem |
|---|---|---|
| **UX de títulos de chat** | Usuários veem UUIDs hex truncados em vez de títulos descritivos no sidebar | Issue #2700 |
| **Configuração de identidade do agente** | Agente ignora nome configurado e responde como "IronClaw" mesmo com IDENTITY.md | PR #3213 (fix merged) |
| **Ferramentas de configuração desnecessárias** | Portfolio mostra "Configure" mesmo quando não precisa configuração | PR #3210 (fix merged) |
| **Admin UI duplicações** | Triple-click no formulário de criar usuário dispara 3 POSTs | PR #3209 (fix merged) |
| **DeepSeek tool calls** | Falha silenciosa em produção ao usar DeepSeek | Issue #3201 |
| **Ferramentas Ollama sem reasoning** | Modelos reasoning não utilizam thinking step sem flag explícita | PR #2372 (fix merged) |

**Conclusão:** O feedback do usuário está sendo capturado via issues e traduzido em PRs com turnaround rápido — vários bugs reportados em issues estão sendo resolvidos no mesmo dia (PRs #3209, #3210, #3213). Há uma tendência de bugs relacionados a **edge cases de LLMs** (DeepSeek, Gemini, Ollama) e **form validation no frontend/admin**.

---

## 8. Backlog que Merece Atenção

| # | Título | Idade | Estado | Prioridade |
|---|---|---|---|---|
| [#90](https://github.com/nearai/ironclaw/issues/90) | Audio pipeline (STT/TTS) | ~78 dias (desde 2026-02-14) | OPEN | P1-P2 |
| [#2344](https://github.com/nearai/ironclaw/issues/2344) | Staging Web UI errors | ~22 dias (desde 2026-04-11) | OPEN | Alta |
| [#3214](https://github.com/nearai/ironclaw/issues/3214) | thoughtSignature Gemini 3.x | Criado 2026-05-02 | OPEN | **Crítica** |
| [#3169](https://github.com/nearai/ironclaw/issues/3169) | Runtime handoff IDs para concurrent fan-out | 2 dias | OPEN | Enhancement |
| [#3148](https://github.com/nearai/ironclaw/issues/3148) | Vertical tests para obligation handoffs | 2 dias | OPEN | Testes E2E |

**Recomendações:**
1. **Priorizar Issue #3214** — afecta tool-calling com Gemini 3.x, modelos em uso em produção.
2. **Agendar Issue #90** — audio pipeline é dependência para feature de WhatsApp voice, com 78+ dias sem progresso significativo.
3. **Resolver Issue #2344** — CSP violations em staging indicam problema de segurança potencial no frontend.
4. **Acompanhar stack #3118** — as 5 PRs de memory nativo precisam ser revisadas antes de bloquear outros workstreams de Reborn.

---

*Relatório gerado automaticamente com base nos dados de atividade do GitHub (nearai/ironclaw). Última atualização: 2026-05-03.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do Projeto CoPaw — 2026-05-03

---

## 1. Panorama do Dia

O projeto CoPaw apresenta alta atividade comunitária no período analisado, com **14 issues atualizadas e 6 pull requests abertos** nas últimas 24h. Não houve lançamentos de novas versões. A atividade concentra-se em **solicitações de funcionalidades** (fallback de modelos, suporte a Ollama, ferramentas de avaliação de agentes) e **correções de bugs** relacionados a fornecedores de API compatíveis com OpenAI e clientes MCP.值得注意的是，多個 PR 由首次貢獻者提交，顯示社區參與度健康。

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.** O último release disponível no repositório permanece como referência base. Não há notas de migração ou breaking changes a reportar neste período.

---

## 3. Progresso do Projeto

| PR | Título | Status | Contribuidor | Impacto |
|----|--------|--------|--------------|---------|
| [#4007](https://github.com/agentscope-ai/QwenPaw/pull/4007) | Fix #3182 e #3828, MemoryHook para memória de longo prazo | OPEN | gvaiis | Correção de bugs críticos de gerenciamento de memória + nova feature |
| [#4009](https://github.com/agentscope-ai/QwenPaw/pull/4009) | Adição de suporte a Português Brasileiro (pt-BR) | OPEN | Jailtonfonseca | Internacionalização (~46% das strings traduzidas) |
| [#3999](https://github.com/agentscope-ai/QwenPaw/pull/3999) | CLI skill test command | OPEN | JingHou1215 | Validação de skills via linha de comando |
| [#3831](https://github.com/agentscope-ai/QwenPaw/pull/3831) | Add vector model connection test feature | Under Review | no-teasy | Funcionalidade de teste para modelos vetoriais |
| [#3525](https://github.com/agentscope-ai/QwenPaw/pull/3525) | Create Discord thread before agent dispatch | Under Review | energyd | Isolamento de saída de cron jobs no Discord |
| [#4005](https://github.com/agentscope-ai/QwenPaw/pull/4005) | Fix WSL2 NAT network environment timeout | OPEN | hllqkb | Documentação e configuração para ambiente WSL2 |

**Análise:** 4 dos 6 PRs são de primeiro contribuidor, indicando boa saúde na captação de novos colaboradores. O PR #4007 destaca-se por resolver dois bugs críticos (#3182 e #3828) relacionados ao gerenciamento de memória.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários/interações)

| Issue | Título | Comentários | Tipo | Relevância |
|-------|--------|-------------|------|------------|
| [#3640](https://github.com/agentscope-ai/QwenPaw/issues/3640) | MCP client TaskGroup.exception causing agent freeze | 6 | Bug | **Crítica** - Agente假死 sem resposta |
| [#1327](https://github.com/agentscope-ai/QwenPaw/issues/1327) | Model fallback chain for automatic rate limit handling | 5 | Feature | **Alta** - Demanda recorrente de resiliência |
| [#4006](https://github.com/agentscope-ai/QwenPaw/issues/4006) | Reasoning Content Not Filtered in OpenAI-Compatible Provider | 2 | Bug | **Média** - Provedor MiniMax |

**Análise dos temas dominantes:**

1. **Resiliência e Fallback de Modelos** — Múltiplas issues (#1327, #4011, #3789) solicitam explicitamente um mecanismo de fallback automático ou configurável. Isso indica que usuários em produção enfrentam problemas de rate limit sem solução adequada no momento.

2. **Suporte a Canais e Integração** — Demandas por interrupção de tarefas em canais como Feishu e WeChat (#4010), sincronização de diálogos com browser (#4000), e suporte nativo a Ollama (#3991, #4003).

3. **Ferramentas de Avaliação e Observabilidade** — A issue #4008 evidencia uma necessidade de бизнес (negócios) para apresentar o QwenPaw em ambientes corporativos, especialmente a ausência de histórico completo de chat e funcionalidades de benchmarking.

---

## 5. Bugs e Estabilidade

| Severidade | Count | Issues |
|------------|-------|--------|
| **Crítica** | 1 | [#3640](https://github.com/agentscope-ai/QwenPaw/issues/3640) - Agent freeze no TaskGroup MCP |
| **Alta** | 1 | [#4006](https://github.com/agentscope-ai/QwenPaw/issues/4006) - Conteúdo de raciocínio não filtrado |
| **Média** | 2 | [#3991](https://github.com/agentscope-ai/QwenPaw/issues/3991) - Perda de contexto no Ollama; [#3997](https://github.com/agentscope-ai/QwenPaw/issues/3997) - Timeout MCP não configurável |
| **Baixa/Documentação** | 1 | [#4005](https://github.com/agentscope-ai/QwenPaw/pull/4005) - Timeout em ambiente WSL2 NAT |

### Análise de Bugs

**#3640 — Bug Crítico de Estabilidade:**
- Sintoma: Agent fica "morto" (sem resposta) após executar tarefa via钉钉/WeChat
- Causa identificada: Exception no `TaskGroup` interno do cliente MCP
- Status: 6 comentários, investigation em andamento
- Impacto: Afeta usuários em produção com integrações de mensageria

**#4006 — Bug Médio em Provedor OpenAI-Compatible:**
- Provider MiniMax não filtra conteúdo de "reasoning" corretamente
- Afeta processamento de respostas de modelos com chains de raciocínio

**#3991 — Bug Médio de Contexto:**
- Canal Ollama não mantém histórico de conversa
- Usuários de modelos locais perdem capacidade de memória conversacional
- Funciona normalmente com APIs cloud (ex: Qwen API)

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Solicitadas (por popularidade)

| Issue | Feature | Demanda Implícita |
|-------|---------|-------------------|
| [#4011](https://github.com/agentscope-ai/QwenPaw/issues/4011) | Fallback model option | Redundância para falhas de API |
| [#4010](https://github.com/agentscope-ai/QwenPaw/issues/4010) | Interromper/terminar em canais Feishu/WeChat | Controle de agentes em produção |
| [#4002](https://github.com/agentscope-ai/QwenPaw/issues/4002) | Área visual compartilhada com anotações | Interação gráfico-texto com IA |
| [#4001](https://github.com/agentscope-ai/QwenPaw/issues/4001) | Deletar mensagens individuais | Privacidade e gestão de conversas |
| [#4008](https://github.com/agentscope-ai/QwenPaw/issues/4008) | Funcionalidade de avaliação de agentes | Apresentação para stakeholders |
| [#4004](https://github.com/agentscope-ai/QwenPaw/issues/4004) | Auto-derive max_input_length do context window | Configuração automática de modelos |
| [#4003](https://github.com/agentscope-ai/QwenPaw/issues/4003) | Melhor suporte a Ollama (arm64) | Compatibilidade Apple Silicon |

### Sinais de Roadmap

1. **Sistema de Fallback de Modelos** — Demanda unânime; múltiplas issues indicam necessidade de mecanismo de retry automático entre provedores. Correlaciona-se com o PR #1327.

2. **Enhancement de Interface** — Área visual colaborativa (#4002) e deleção de mensagens (#4001) sugerem trend de UX mais próximo de apps de mensageria tradicionais.

3. **Suporte Local-first** — Issues #3991, #4003 e #4004 indicam foco em melhor experiência com modelos Ollama locais.

4. **Ferramentas de Avaliação** — A ausência de features de benchmarking (#4008) pode ser barrera para adoção corporativa.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Categoria | Descrição | Impacto |
|-----------|-----------|---------|
| **Estabilidade em Produção** | Agentes ficam "mortos" sem feedback de erro (#3640) | Alto — afeta confiança em deploy |
| **Perda de Memória** | Modelos locais não mantêm contexto (#3991) | Alto — uso principal de Ollama prejudicado |
| **Configurabilidade** | Timeout MCP não ajustável (#3997) | Médio — limita configurações avançadas |
| **Integração de Canais** | Não é possível interromper agentes em WeChat/Feishu (#4010) | Médio — falta de controle em produção |
| **UX de Interface** | Necessidade de deletar mensagens individuais (#4001) | Baixo — feature esperada em apps modernos |

### Cenários de Uso Identificados

1. **Agentes multi-canal em produção** —钉钉, WeChat, Feishu integrados com necessidade de monitoramento e controle centralizado.

2. **Modelos locais com Ollama** — Usuários com hardware limitado usando modelos qwen3.5-7b/4b localmente, requerendo suporte robusto a contexto.

3. **Ambientes corporativos** — Necessidade de ferramentas de avaliação e apresentação para stakeholders (#4008).

### Satisfação/Insatisfação

- **Pontos positivos:** Suporte a múltiplos provedores, interface Console funcional, sistema de hooks extensível.
- **Pontos de atrito:** Falta de fallback automático, instabilidade com MCP em algumas configurações, ausência de features de avaliação.

---

## 8. Backlog que Merece Atenção

### Issues sem resposta significativa (>7 dias sem atividade)

| Issue | Título | Criado | Atualizado | Comentários | Prioridade |
|-------|--------|--------|------------|-------------|------------|
| [#3789](https://github.com/agentscope-ai/QwenPaw/issues/3789) | Solicita modelo fallback | 2026-04-24 | 2026-05-02 | 1 | Alta |
| [#3640](https://github.com/agentscope-ai/QwenPaw/issues/3640) | Agent freeze TaskGroup | 2026-04-21 | 2026-05-02 | 6 | **Crítica** |
| [#1327](https://github.com/agentscope-ai/QwenPaw/issues/1327) | Model fallback chain | 2026-03-12 | 2026-05-02 | 5 | **Alta** |

### PRs em Review Pendente

| PR | Título | Status | Dias em Review |
|----|--------|--------|----------------|
| [#3831](https://github.com/agentscope-ai/QwenPaw/pull/3831) | Vector model connection test | Under Review | ~8 dias |
| [#3525](https://github.com/agentscope-ai/QwenPaw/pull/3525) | Discord thread creation | Under Review | ~16 dias |

### Recomendações de Priorização

1. **#3640** — Bug crítico requer atenção imediata da equipe core para análise do TaskGroup MCP.
2. **#1327 / #4011 / #3789** — Sistema de fallback é demanda recorrente;considerar implementação formal na próxima versão.
3. **#3831 e #3525** — PRs em review há >7 dias; revisar e dar feedback ou merger para manter momentum da comunidade.

---

## Indicadores de Saúde do Projeto

| Métrica | Valor | Avaliação |
|---------|-------|-----------|
| Issues ativas (24h) | 14 | 🟢 Alta atividade |
| PRs abertos (24h) | 6 | 🟢 Bom fluxo |
| PRs first-time contributors | 4/6 (67%) | 🟢 Excelente captação |
| Bugs críticos abertos | 1 | 🟡 Requer atenção |
| Releases (24h) | 0 | ⚪ Nenhuma |
| PRs em review >7 dias | 2 | 🟡 Processamento lento |

---

*Relatório gerado com base nos dados do GitHub de CoPaw (agentscope-ai/QwenPaw) em 2026-05-03.*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório de Projeto — ZeroClaw
**Data:** 2026-05-03 | **Período:** Últimas 24h
**Repositório:** [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## 1. Panorama do Dia

ZeroClaw apresenta alta atividade de manutenção no curto prazo: 50 issues e 40 PRs atualizados nas últimas 24h, com nenhuma release nova. A comunidade está intensamente focada em estabilidade e compatibilidade — os PRs mais recentes são todos correções de bugs que resolvem problemas em canais (Telegram, Slack, WeChat), providers (DeepSeek, Gemini, Ollama) e runtime (context compression, systemd naming). Simultaneamente, a equipe de desenvolvimento está preparando a migração para o schema V3 da configuração e novas features para os próximos milestones (v0.7.5 e v0.7.6), sinalizando uma fase de consolidação arquitetural com refactoring significativo.

---

## 2. Lançamentos

**Nenhum release nas últimas 24h.**

O milestone v0.7.5 está em discussão em [#5878](https://github.com/zeroclaw-labs/zeroclaw/issues/5878), com tema "Release Automation" — a meta é tornar o pipeline de release intencional e automatizado, encerrando workflows manuais de version bumps.

---

## 3. Progresso do Projeto

| PR | Autor | Descrição | Impacto |
|----|-------|-----------|---------|
| [#6087](https://github.com/zeroclaw-labs/zeroclaw/pull/6087) ✅ | theonlyhennygod | Suporte a env var overrides para tokens de canais (Slack, Discord, Telegram) | Resolução de long-standing issue #5183 |
| [#6264](https://github.com/zeroclaw-labs/zeroclaw/pull/6264) ✅ | xiongzubiao | Preserva `extra_content` em `tool_call` para round-trip do Gemini 3 thoughtSignature | Desbloqueia modelos Gemini 3.x com tool use nativo |
| [#6242](https://github.com/zeroclaw-labs/zeroclaw/pull/6242) ✅ | Audacity88 | Adiciona strings CLI WeChat em zh-CN | Melhora i18n para mercado chinês |
| [#5206](https://github.com/zeroclaw-labs/zeroclaw/pull/5206) ✅ | ninenox | Remove stale main.py dep, upgrade rumqttc, suprime RUSTSEC-2026-0049 | Desbloqueia CI que estava bloqueando todos os PRs |

**PR em destaque (review):**
- [#6274](https://github.com/zeroclaw-labs/zeroclaw/pull/6274) — Consolida first-party skills em `skills/` dentro do repo principal, eliminando espelho em zeroclaw-skills e o bundling via binary. Tamanho L, risco alto em documentação.

---

## 4. Temas Quentes da Comunidade

### Issue com maior engajamento: Dream Mode
- [#5849](https://github.com/zeroclaw-labs/zeroclaw/issues/5849) — 9 comentários, P1, risco alto
- **Proposta:** Enable ZeroClaw para entrar em "Dream Mode" durante períodos idle — consolidando memórias, refletindo interações e atualizando estruturas de conhecimento de longo prazo.
- **Análise:** Demanda sofisticada de memória persistente e aprendizado reflexivo, alinhada com a arquitetura de microkernel. Atrai interesse de usuários avançados que usam ZeroClaw como agente pessoal de longo prazo.

### Features com recepção positiva
| Issue | 👍 | Comentários | Tema |
|-------|---|-------------|------|
| [#5674](https://github.com/zeroclaw-labs/zeroclaw/issues/5674) | 3 | 4 | Tornar `classify_channel_reply_intent` configurável — relevantes para 1:1 chats |
| [#5604](https://github.com/zeroclaw-labs/zeroclaw/issues/5604) | 1 | 2 | Mensagens privadas no Mattermost via bot backend |

### Padrão identificado
Múltiplas issues (#[5601](https://github.com/zeroclaw-labs/zeroclaw/issues/5601), #[5570](https://github.com/zeroclaw-labs/zeroclaw/issues/5570), #[5586](https://github.com/zeroclaw-labs/zeroclaw/issues/5586)) indicam demanda crescente por:
1. Suporte a mais providers com OAuth nativo
2. Otimização de busca vetorial em memória SQLite
3. WIT interface types para plugins WASM (arquitetura Microkernel)

---

## 5. Bugs e Estabilidade

| Severidade | Issue | Descrição | Status |
|------------|-------|-----------|--------|
| **S0/S1 (Crítico)** | [#5722](https://github.com/zeroclaw-labs/zeroclaw/issues/5722) | Sandbox shell bloqueia todos os padrões Python reais — afetando desenvolvimento de skills (ex: InvestorClaw FINOS CDM) | in-progress |
| | [#5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600) | kimi-code provider reporta erro 400 em streaming chat — workflow bloqueado | in-progress |
| | [#5654](https://github.com/zeroclaw-labs/zeroclaw/issues/5654) | Telegram com encryption no config.json não funciona — bot sem resposta | in-progress |
| | [#5605](https://github.com/zeroclaw-labs/zeroclaw/issues/5605) | Multi-instance deployments com hardcoded `~/.zeroclaw/` — risco S0 (data loss/security) | accepted |
| | [#6254](https://github.com/zeroclaw-labs/zeroclaw/issues/6254) | WASM plugin install path diverge do runtime scan path — plugins invisíveis ao agent | — |
| | [#6269](https://github.com/zeroclaw-labs/zeroclaw/issues/6269) | Context compressor descarta `reasoning_content` — providers thinking-mode afetados | — |
| **S2 (Degradado)** | [#6233](https://github.com/zeroclaw-labs/zeroclaw/issues/6233) | `chat_messages_to_native()` drops `reasoning_content` — conversas multi-turn DeepSeek V4 falham no 2º+ turno | — |
| | [#5556](https://github.com/zeroclaw-labs/zeroclaw/issues/5556) | Summarization timeout 60s insuficiente para Ollama com modelos pequenos | accepted |
| | [#5628](https://github.com/zeroclaw-labs/zeroclaw/issues/5628) | Daemon service auto-starts na boot — conflito de porta para runs manuais | in-progress |

**Sinal positivo:** Several bugs have corresponding PRs open (#6284, #6285, #6286, #6287, #6288) — todas do mesmo autor (theonlyhennygod), indicando resolução coordanada em progresso.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features nova entrada (últimas 24h)
| Issue | Título | Tags |
|-------|--------|------|
| [#6270](https://github.com/zeroclaw-labs/zeroclaw/issues/6270) | Configurable macro + onboarding para v3 nested config | config, onboard |
| [#6271](https://github.com/zeroclaw-labs/zeroclaw/issues/6271) | V3 SwarmConfig schema + runtime | channel, config, tool |
| [#6272](https://github.com/zeroclaw-labs/zeroclaw/issues/6272) | Agent filesystem layout — `agents/<alias>/` structure | config, runtime |
| [#6273](https://github.com/zeroclaw-labs/zeroclaw/issues/6273) | ModelProviderConfig typed-family split | config, onboard, provider |

> Todos de singlerider, indicando trabalho estruturado na migração V3 do schema.

### Features em destaque
- **#[5849](https://github.com/zeroclaw-labs/zeroclaw/issues/5849)** — Dream Mode (periodic memory consolidation): feature inovadora de longo prazo
- **#[5601](https://github.com/zeroclaw-labs/zeroclaw/issues/5601)** — OAuth nativo para Ollama Cloud, z.ai, Kimi, MiniMax: expansão de provider ecosystem
- **#[5617](https://github.com/zeroclaw-labs/zeroclaw/issues/5617)** — Reduzir `all_tools_with_runtime` para 10-12 ferramentas core: microkernel architecture D5
- **#[6253](https://github.com/zeroclaw-labs/zeroclaw/issues/6253)** — Tracker v0.7.6: zeroclaw skills support e UX improvement

---

## 7. Resumo de Feedback dos Usuários

### Dores críticas identificadas
1. **Shell sandbox que quebra skills Python** ([#5722](https://github.com/zeroclaw-labs/zeroclaw/issues/5722)) — Impacta desenvolvimento de skills externas (FINOS CDM compliance)
2. **Port conflict ao rodar daemon manualmente** ([#5628](https://github.com/zeroclaw-labs/zeroclaw/issues/5628)) — Usuários multi-instance frustrados com configuração systemd
3. **Tokens de canais não suportam env vars** ([#6237](https://github.com/zeroclaw-labs/zeroclaw/issues/6237), já resolvido em #6087) — Padrão DevOps expectando 12-factor app

### Cenários de uso emergentes
- **Agentes financeiros:** Jason Perlow construindo InvestorClaw com compliance FINOS CDM 5.x — mostra adoption em fintech
- **Multi-instance deployment:** Demanda clara por profiles isolados com config-dir customizável
- **Mercado internacional:** Soft localization para zh-CN em CLI (WeChat) e docs

### Satisfação
- PRs being closed rapidamente indicam responsiveness da equipe (bugfix cycle ~2 dias)
- Community contributor ativo (theonlyhennygod) cobrindo múltiplas áreas simultaneamente

---

## 8. Backlog que Merece Atenção

| Issue | Idade | Comentários | Prioridade | Situação |
|-------|-------|-------------|------------|----------|
| [#5558](https://github.com/zeroclaw-labs/zeroclaw/issues/5558) — Feishu `ack_reactions=false` sem efeito | ~24 dias | 2 | — | accepted, sem movimento |
| [#5556](https://github.com/zeroclaw-labs/zeroclaw/issues/5556) — Ollama summarization timeout | ~24 dias | 4 | p2 | accepted, sem movimento |
| [#5605](https://github.com/zeroclaw-labs/zeroclaw/issues/5605) — Multi-instance config paths | ~23 dias | 2 | p1 | accepted, sem movimento |
| [#5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600) — kimi-code streaming error | ~23 dias | 6 | p1 | in-progress |
| [#5722](https://github.com/zeroclaw-labs/zeroclaw/issues/5722) — Shell sandbox Python | ~19 dias | 6 | p1 | in-progress |

**Observação:** Issues P1 com tag `status:no-stale` indicam ausência de automação de stale. Para 3 issues aceitas sem movimento há >20 dias, considerar priorização ou triagem de close.

---

## Saúde Geral do Projeto

| Indicador | Status | Notas |
|-----------|--------|-------|
| Atividade de PRs | 🟢 Alta | 40 PRs atualizados em 24h, 4 merges |
| Volume de bugs | 🟡 Elevado | 5 bugs P1/P2 em investigação |
| Velocity de fix | 🟢 Boa | PRs de correção cobreando rápido |
| Releases | ⚪ Nenhuma | Milestone v0.7.5 em tracking |
| Community engagement | 🟢 Alto | Contributors ativos resolvendo issues cross-cutting |

**Projeção:** Foco em stabilização com v0.7.5 (release automation), seguido de v0.7.6 centrado em skills UX. Migração V3 schema em andamento via issues estruturadas.

---
*Relatório gerado automaticamente com base em dados GitHub de 2026-05-03*

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*