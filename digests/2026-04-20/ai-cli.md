# Relatório diário da comunidade de ferramentas AI CLI 2026-04-20

> Gerado em: 2026-04-19 20:32 UTC | Ferramentas cobertas: 8

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/badlogic/pi-mono)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Comparação entre ferramentas

# Relatório Comparativo — Ecossistema AI CLI
## 2026-04-20

---

## 1. Panorama do Ecossistema

O ecossistema de ferramentas AI CLI apresenta um quadro de **maturidade fragmentada**: enquanto OpenCode e Qwen Code demonstram atividade semanal intensa com releases frequentes (2-3 por semana), Claude Code, Copilot CLI e Gemini CLI passam por fases de estabilização com prioridade em correção de bugs críticos. A semana é marcada por problemas de autenticação em massa no Qwen Code (erro 401 afeta ~10 issues simultâneas), regressões de segurança no OpenCode (sandbox evasion — já corrigida), e vazamentos de memória persistentes no Codex. A tendência comum é a convergência em direção a **observabilidade de custos** e **multi-agent orchestration**, sinais claros de que o mercado está amadurecendo para uso empresarial em escala.

---

## 2. Comparação de Atividade

| Ferramenta | Issues (24h) | PRs (24h) | Releases | Tendência | Saúde Geral |
|------------|--------------|-----------|----------|-----------|-------------|
| **Claude Code** | 50 | 10 | 0 | Estável → Bugs | 🟡 Consolidação |
| **OpenAI Codex** | ~15 highlighted | 15+ (Goal Mode stack) | 2 alpha | Progresso ativo | 🟢 Em movimento |
| **Gemini CLI** | 50 | 32 (total) | 0 | Refinamento | 🟢 Crescimento |
| **Copilot CLI** | 28 | 0 | 0 | Estagnada | 🟡 Sem momentum |
| **Kimi Code CLI** | ~15 | 3 | 0 | Moderada | 🟡 Correções |
| **OpenCode** | 50 | 50 | **2** (v1.14.17, v1.14.18) | **Líder em volume** | 🟢 Muito ativo |
| **Pi (pi-mono)** | ~12 | 10 | 0 (v0.3.0 em PR) | Progresso | 🟢 Evoluindo |
| **Qwen Code** | ~20 | 10 | **1 nightly** | **Iteration rápida** | 🟡 Auth crisis |

**Observações:**
- **OpenCode** domina em volume de atividade, refletindo sua posição de "hub agregador" de múltiplos provedores
- **Qwen Code** mantém ciclo nightly agressivo mesmo sob crise de autenticação
- **Copilot CLI** mostra inatividade em PRs (0 PRs atualizados), sugerindo ciclo de planejamento ou equipe reduzida

---

## 3. Direções de Features Compartilhadas

### 3.1 Observabilidade de Custos (Demanda Transversal)

A necessidade de **transparência em consumo de recursos** aparece em todas as comunidades analisadas:

| Ferramenta | Issue | Feature Solicitada |
|------------|-------|-------------------|
| Claude Code | #39187, #46897, #50863, #50883 | Indicador de context window + exposição de token/custo em hooks |
| Copilot CLI | #2827, #2828 | UI de rate limit contínua + sugestões práticas |
| OpenCode | Megathread #20695 | Memory tracking e heap snapshots |
| Qwen Code | #3447 | Compressão automática de contexto |

**Conclusão:** O mercado empresarial está empurrando todas as ferramentas para oferecer dashboards de custo, algo que antes era percebido como secundário.

### 3.2 Multi-Agent Orchestration

Todas as ferramentas que suportam subagentes enfrentam problemas similares:

| Ferramenta | Problema Reportado |
|------------|--------------------|
| Claude Code | Sub-agentes não podem usar tool `Agent` — padrão orchestrator quebrado (#46424) |
| Gemini CLI | Sub-agentes reportam "success" mesmo após MAX_TURNS (#22323) |
| Kimi Code CLI | Subagentes entram em loop infinito (#1927) |
| Qwen Code | Agent Swarm para spawn dinâmico de workers (#1816) |
| OpenCode | Multi-agent orchestration em workspaces isolados (#17994) |

**Conclusão:** A arquitetura multi-agente ainda está em fase experimental com problemas recorrentes de coordenação, contexto e loops infinitos.

### 3.3 Sistema de Permissões e Sandbox

| Ferramenta | Problema |
|------------|----------|
| Claude Code | Parse de comandos Bash compostos exige aprovação desnecessária (#16561) |
| Codex | Sandbox bwrap (Linux) solicita aprovação para todos os comandos (#14936) |
| Gemini CLI | CLI pede permissões repetidamente mesmo após "allow for all" (#24916) |
| OpenCode | Sandbox evasion vulnerability (já corrigida em #23423) |
| Gemini CLI | Replace execSync → execFileSync para evitar shell injection (#24760) |

**Conclusão:** Sandboxing é o campo mais maduro em termos de проблемas conhecidos, mas ainda há regressões e inconsistências cross-platform.

### 3.4 Git Worktrees e Workspace Flexível

| Ferramenta | Status |
|------------|--------|
| Claude Code | Cada worktree cria projeto isolado em `~/.claude/projects/` (#34437) |
| Codex | Não há como configurar localização de worktrees (#10599) |
| Kimi Code CLI | PR #1933 implementa `work_dir` override para subagentes ✅ |
| Qwen Code | /new não carrega AGENTS.md após create (#11532) |

---

## 4. Análise de Diferenciação

### Foco Estratégico por Ferramenta

| Ferramenta | Posicionamento | Público-Alvo | Arquitetura Técnica |
|------------|----------------|--------------|---------------------|
| **Claude Code** | Experiência premium + segurança | Desenvolvedores individuais e empresas que priorizam reliability | Tool-centric com emphasis em segurança de permissões |
| **OpenAI Codex** | Agente autônomo de longo prazo | Power users que precisam de persistence de objetivos | Goal Mode stack — modelo mantém estado de objetivos |
| **Gemini CLI** | Extensibilidade via plugins | Desenvolvedores que querem customizar comportamento | ACP protocol + hooks system |
| **Copilot CLI** | Confiabilidade de infraestrutura | Equipes que usam em pipelines CI/CD | HTTP/2 + retry logic (atualmente problemático) |
| **Kimi Code CLI** | Mercado sino-global | Usuários da região + integração com VSCode/Cursor | ACP protocol, suporte a ferramentas Alibaba |
| **OpenCode** | Provider-agnostic hub | Desenvolvedores multi-cloud/region | Suporta qualquer LLM via OpenRouter, LM Studio, Azure, etc. |
| **Pi (pi-mono)** | Meta-framework customizável | Desenvolvedores que querem construir seu próprio agent | Provider abstraction layer com suporte a TypeBox |
| **Qwen Code** | Iteração rápida + feature parity | Desenvolvedores que querem、最新 features rapidamente | CLI-first com expansão VSCode agresiva |

### Diferenciação Técnica Notável

| Diferenciação | Ferramentas que lideram |
|---------------|------------------------|
| **Goal Mode / Persistence** | Codex (stack de 5 PRs), Qwen Code (Agent Swarm) |
| **Provider Flexibility** | OpenCode (maior variedade), Pi (extensível) |
| **Enterprise Controls** | Qwen Code (`QWEN_HOME`, bare mode, slash command disable) |
| **Security Hardening** | Gemini CLI (execFileSync), OpenCode (sandbox fix) |
| **Speed of Iteration** | Qwen Code (nightly), OpenCode (2 releases/semana) |
| **UX Polish** | Claude Code (indicadores de contexto, hooks avançados) |

---

## 5. Tração e Maturidade da Comunidade

### Ranking de Atividade (Volume + Qualidade)

| Rank | Ferramenta | Score | Indicadores |
|------|------------|-------|--------------|
| 1 | **OpenCode** | ⭐⭐⭐⭐⭐ | 50 issues + 50 PRs + 2 releases/semana + security patch rápido |
| 2 | **Qwen Code** | ⭐⭐⭐⭐ | nightly releases + 10+ PRs + crise de auth mobilizou comunidade |
| 3 | **Claude Code** | ⭐⭐⭐⭐ | Issue #16561 com 142👍 + 50 issues em destaque + estabilidade |
| 4 | **Gemini CLI** | ⭐⭐⭐ | 32 PRs + 50 issues + PRs de segurança being reviewed |
| 5 | **Kimi Code CLI** | ⭐⭐⭐ | PR #1933 (work_dir) em desenvolvimento ativo |
| 6 | **Pi (pi-mono)** | ⭐⭐ | v0.3.0 em PR + 10 PRs + bugs críticos resolvidos |
| 7 | **OpenAI Codex** | ⭐⭐ | Stack de 5 PRs para Goal Mode + memory leak em progress |
| 8 | **Copilot CLI** | ⭐ | 0 PRs, 28 issues, nenhum release — ciclo estagnado |

### Maturidade Relativa

| Ferramenta | Estágio | Sinais de Maturidade |
|------------|---------|----------------------|
| **Claude Code** | Maduro | Foco em UX refinement, enterprise billing, estável em releases |
| **OpenAI Codex** | Intermediário | Arquitetura multi-agente em evolução, memory leaks indicam crescimento |
| **OpenCode** | Crescendo rapidamente | Segurança reactive, versionamento confuso (sinal de crescimento acelerado) |
| **Qwen Code** | Crescendo rapidamente | Feature parity agressiva, nightly releases, auth issues (crescimento) |
| **Copilot CLI** | Estagnado | Nenhum PR ou release em 24h, infraestrutura problemática não resolvida |
| **Gemini CLI** | Crescendo | Security PRs em review, extensões sendo desenvolvidas |
| **Kimi Code CLI** | Intermediário | ACP protocol amadurecendo, mas ainda estável |
| **Pi (pi-mono)** | Experimental | v0.3.0 ainda não released, foco em providers |

---

## 6. Sinais de Tendência

### 🔮 Tendências Extraídas do Feedback das Comunidades

#### 1. Enterprise Adoption Accelerating
A demanda transversal por **observabilidade de custos** (indicadores de context window, métricas de token, UI de rate limits) indica que o mercado está migrando de "developers individuais" para "equipes empresariales". Ferramentas que não oferecerem transparência de custos em breve serão barradas em ambientes enterprise.

#### 2. Goal-Directed Agents como Próximo Marco
O stack de **Goal Mode no Codex** (5 PRs) e o **Agent Swarm do Qwen** representam uma mudança de paradigma: de ferramentas reativas (respondendo a prompts) para agentes autônomos que mantêm objetivos ao longo de sessões longas. Isso requer:
- Persistence de estado
- Budget/budget stopping
- Resume handling
- Multi-agent coordination

#### 3. Provider Agnosticism como Padrão
O sucesso do OpenCode (maior volume de issues/PRs) demonstra que desenvolvedores querem **flexibilidade de provedor**. A tendência é que ferramentas se tornem interfaces para múltiplos LLMs, não tight-coupled a um único vendor.

#### 4. Cross-Platform Parity é Expectativa
Usuários de todas as comunidades reportam frustração quando features estão disponíveis em uma plataforma (ex: Windows) mas não em outras (macOS, Linux). A expectativa é **parity total** entre plataformas.

#### 5. Security como Feature, Não Afterthought
A sandbox evasion no OpenCode (#23423) e o execSync → execFileSync no Gemini mostram que segurança está deixando de ser opcional. Em ambientes cloud/enterprise, sandbox robustness é critério de compra.

#### 6. MCP (Model Context Protocol) como Commodity
O ACP do Gemini e o suporte a hooks em múltiplas ferramentas indicam que **MCP será padrão da indústria**. Ferramentas que não suportarem hooks/extensibilidade perderão developers.

---

## Resumo Executivo

| Insight | Ação Recomendada |
|---------|------------------|
| **OpenCode e Qwen Code lideram iteration speed** | Monitorar para identificar padrões de features que chegarão ao mercado |
| **Copilot CLI está estagnado** — risco de perda de market share | Não investir novo em integração Copilot CLI até reativação |
| **Todas as ferramentas enfrentam multi-agent problems** | Expectativa de breakthroughs em 2026 Q3-Q4 |
| **Auth 401 wave no Qwen Code** | Precedente para problemas de OAuth em geral — planejar mitigação |
| **Demanda por observabilidade de custos** | Priorizar feature se em desenvolvimento |

---

*Relatório gerado com base em resumos de comunidade de 8 ferramentas AI CLI em 2026-04-20.*

---

## Relatórios detalhados por ferramenta

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Destaques da comunidade Claude Code Skills

> Fonte: [anthropics/skills](https://github.com/anthropics/skills)

# Relatório de Destaques da Comunidade Claude Code Skills

**Período de análise:** até 2026-04-20  
**Fonte:** [anthropics/skills](https://github.com/anthropics/skills)

---

## 1. Ranking das Skills Mais Quentes

| # | PR | Skill/Feature | Autor | Estado |
|---|-----|---------------|-------|--------|
| 1 | [#514](https://github.com/anthropics/skills/pull/514) | document-typography | PGTBoos | OPEN |
| 2 | [#83](https://github.com/anthropics/skills/pull/83) | skill-quality-analyzer + skill-security-analyzer | eovidiu | OPEN |
| 3 | [#210](https://github.com/anthropics/skills/pull/210) | frontend-design (revised) | justinwetch | OPEN |
| 4 | [#486](https://github.com/anthropics/skills/pull/486) | ODT (OpenDocument) | GitHubNewbie0 | OPEN |
| 5 | [#723](https://github.com/anthropics/skills/pull/723) | testing-patterns | 4444J99 | OPEN |
| 6 | [#806](https://github.com/anthropics/skills/pull/806) | sensory (macOS AppleScript) | AdelElo13 | OPEN |
| 7 | [#541](https://github.com/anthropics/skills/pull/541) | docx fix: tracked changes w:id collision | Lubrsy706 | OPEN |

### Destaques:

**#514 — document-typography**  
Resolve problemas tipográficos recorrentes em documentos gerados por IA: *orphans* (palavras órfãs), *widows* (parágrafos incompletos) e desalinhamento de numeração. Alta relevância pois afeta toda geração de documentos.

**#83 — Meta Skills Analyzer**  
Adiciona duas skills meta para avaliar qualidade e segurança de outras skills. Avalia estrutura, documentação, testabilidade e padrões de segurança — extremamente útil para a padronização do ecossistema.

**#210 — frontend-design melhorado**  
Revisão para melhorar clareza e acionabilidade das instruções. Foco em tornar cada diretiva executável em uma única conversation.

**#486 — ODT Skill**  
Habilita criação, preenchimento e conversão de arquivos OpenDocument (.odt, .ods). Expande suporte a formatos open-source e ISO.

**#723 — testing-patterns**  
Cobbertura completa do stack de testing: Testing Trophy, padrões AAA, React Testing Library, E2E com Playwright.

---

## 2. Tendências de Demandas da Comunidade

As **Issues** revelam direções estratégicas esperadas pela base:

| Prioridade | Tema | Issue | Detalhes |
|------------|------|-------|----------|
| 🔴 Alta | **Compartilhamento organizacional** | [#228](https://github.com/anthropics/skills/issues/228) | Usuários pedem skill library corporativa com compartilhamento direto — processo atual exige upload manual |
| 🔴 Alta | **Bugs em run_eval.py** | [#556](https://github.com/anthropics/skills/issues/556) | Skills nunca disparam via `claude -p` (0% trigger rate) — bloqueia evaluation automatizado |
| 🟠 Média | **Duplicação de plugins** | [#189](https://github.com/anthropics/skills/issues/189) | `document-skills` e `example-skills` instalam conteúdo idêntico causando duplicatas |
| 🟠 Média | **Segurança / trust boundary** | [#492](https://github.com/anthropics/skills/issues/492) | Skills comunitárias sob namespace `anthropic/` induzem falsa confiança em permissões elevadas |
| 🟡 Baixa | **MCP como interface** | [#16](https://github.com/anthropics/skills/issues/16) | Proposta para expor Skills como MCP servers padronizados |

**Padrão identificado:** A comunidade busca **governança, reusabilidade enterprise e automação de evaluation** — mais do que novas skills de domínio.

---

## 3. Skills Promissoras Pendentes de Merge

PRs com maior potencial e atividade recente:

| PR | Skill | Atividade Recente | Potencial |
|----|-------|-------------------|-----------|
| [#541](https://github.com/anthropics/skills/pull/541) | DOCX tracked changes fix | Atualizado 2026-04-16 | **Crítico** — corrige corrupção de documentos |
| [#486](https://github.com/anthropics/skills/pull/486) | ODT skill | Atualizado 2026-04-14 | Alto — expande suporte a formatos |
| [#806](https://github.com/anthropics/skills/pull/806) | macOS automation (AppleScript) | Atualizado 2026-04-02 | Alto — automação nativa sem screenshot |
| [#374](https://github.com/anthropics/skills/pull/374) | x402 BSV micropayments | Atualizado 2026-04-01 | inovador — micropayments via linguagem natural |
| [#521](https://github.com/anthropics/skills/pull/521) | record-knowledge (persistência) | Atualizado 2026-03-09 | **Alto** — resolve perda de contexto entre sessões |

### Observação crítica:
O PR [#541](https://github.com/anthropics/skills/pull/541) trata um bug que causa **corrupção de documentos** — merece atenção urgente para merge.

---

## 4. Insight sobre o Ecossistema

> **"A comunidade precisa desesperadamente de ferramentas de governança (quality/security analyzers), avaliação automatizada (run_eval.py fix) e compartilhamento enterprise — não apenas de novas skills de domínio."**

O ecossistema está maduro para uma transição de **proliferação** para **qualidade e padronização**, com foco em infraestrutura de testes, segurança e colaboração organizacional.

---

# Relatório Diário da Comunidade Claude Code
## 2026-04-20

---

## 1. Destaques do Dia

O dia 19 de abril trouxe alta atividade de issues com 50 novos relatos, mas nenhuma release foi publicada. A comunidade demonstra grande interesse em melhorias de UX, especialmente indicadores de uso de context window e exposição de métricas de custo em hooks. Destaque para o issue #16561 sobre parsing de comandos Bash compostos, que já acumula 142 👍 e representa uma das solicitações mais votadas do ano.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

O último release estável permanece na versão 2.1.114, conforme documento na issue #50865. Recomenda-se acompanhar o repositório para updates futuros.

---

## 3. Issues em Evidência

### [#16561](https://github.com/anthropics/claude-code/issues/16561) — Parse compound Bash commands e permissions
**🏆 Issue mais impactante do dia | 142 👍 | 23 comentários**

O permission matcher atual avalia strings compostas (`&&`, `|`, `;`, `||`) como uma unidade, exigindo aprovação mesmo quando cada componente individual seria permitido. A comunidade reage fortemente (142 upvotes) pois impacta diretamente workflows de desenvolvedores que usam pipelines de comandos. Este é um enhancement com segurança envolvida (`area:security`).

### [#28765](https://github.com/anthropics/claude-code/issues/28765) — Push notifications para tarefas concluídas em remote-control
**35 👍 | 12 comentários**

Solicitação de notificações push quando tarefas completam em modo remote-control via app Claude. Relevante para desenvolvedores que usam múltiplas sessões tmux com Claude Code e precisam de feedback assíncrono quando backgrounded.

### [#34437](https://github.com/anthropics/claude-code/issues/34437) — Worktrees devem compartilhar diretório do projeto principal
**15 👍 | 7 comentários**

Git worktrees criam diretórios separados em `~/.claude/projects/`, fragmentando histórico de conversas e configurações. Issue importante para equipes que usam worktrees para trabalho paralelo em branches.

### [#50710](https://github.com/anthropics/claude-code/issues/50710) — Assinatura travada após expiração do cartão
**Bug crítico de billing | Atualizado em 2026-04-19**

Bug que impede re-assinatura ou atualização de método de pagamento após expiração do cartão. Reportado como `invalid` pelo autor, mas requer atenção da equipe de billing.

### [#50761](https://github.com/anthropics/claude-code/issues/50761) — Popup incorreto de limite de uso no macOS
**Bug macOS | Atualizado em 2026-04-19**

Usuários veem popup de limite atingido mesmo quando o dashboard mostra crédito disponível. Afeta experiência de billing diretamente.

### [#50582](https://github.com/anthropics/claude-code/issues/50582) — Update do macOS app falha no relaunch
**Bug crítico desktop | 3 comentários**

Após clicar para instalar update, o app fecha mas não instala nem reinicia. Usuários precisam download manual do site. Afeta diretamente a experiência de update.

### [#46424](https://github.com/anthropics/claude-code/issues/46424) — Agent tool indisponível para sub-agentes
**Impacta padrão arquitetural | 4 comentários**

Sub-agentes não podem usar tool `Agent`, bloqueando o padrão orchestrator. Bug crítico para quem implementa arquiteturas multi-agente no macOS.

### [#50865](https://github.com/anthropics/claude-code/issues/50865) — Shells órfãos re-disparam comandos em novas sessões
**Bug sessões | Atualizado 2026-04-19**

Shells de sessões anteriores persistem e re-disparam comandos automaticamente (ex: `xcodebuild` launch loop). Afeta usuários Apple Silicon com CLI e desktop app.

### [#39187](https://github.com/anthropics/claude-code/issues/39187) — Indicador de uso da context window
**Feature request recorrente | 3 comentários**

Sem indicador visual, usuários só percebem que contexto está cheio quando modelo começa a perder track ou precisa compactar. A mesma solicitação aparece em [#46897](https://github.com/anthropics/claude-code/issues/46897) para Windows, indicando demanda transversal.

### [#50681](https://github.com/anthropics/claude-code/issues/50681) — Remote-control retorna 400 error com imagens
**Bug API | Atualizado 2026-04-19**

Modo `--remote-control` falha com erro 400 quando mensagem contém imagem, mesmo funcionando em modo interativo normal. Problema de `cache_control` em bloco de texto vazio.

---

## 4. Progresso de PRs Importantes

| PR | Descrição | Status |
|----|-----------|--------|
| [#50672](https://github.com/anthropics/claude-code/pull/50672) | **docs(changelog): corrige nome da skill** — Corrige entrada do CHANGELOG 2.1.111 de `/less-permission-prompts` para `/fewer-permission-prompts`. Correção trivial mas importante para consistência de documentação. | OPEN |
| [#39043](https://github.com/anthropics/claude-code/pull/39043) | **Remove "retro-futuristic" do Frontend Design Skill** — Remove recomendação de estilo datado da skill. Sugere modernização de skills integradas. | OPEN |
| [#46095](https://github.com/anthropics/claude-code/pull/46095) | **Claude Mythos operating contract** — Contrato operacional para Veriflow immune system. Closed em 2026-04-19. | CLOSED |
| [#47895](https://github.com/anthropics/claude-code/pull/47895) | **Add Claude Mythos operating contract** — Nova versão aberta do PR acima. Integra contrato operacional com sistema Veriflow. | OPEN |
| [#50595](https://github.com/anthropics/claude-code/pull/50595) | **Fix duplicate imports** — Corrige imports duplicados e restaura classes. Mantém código base limpo. | OPEN |
| [#50578](https://github.com/anthropics/claude-code/pull/50578) | **Wrangler observability bootstrap** — Adiciona bootstrap de observabilidade para Wrangler. Relevante para monitoramento de performance. | OPEN |
| [#50565](https://github.com/anthropics/claude-code/pull/50565) | **Fix configuration** — Correção de configuração. | OPEN |
| [#50643](https://github.com/anthropics/claude-code/pull/50643) | **Ethos Aegis configuration templates** — Adiciona arquivos de configuração e templates para padronização de CI/CD e segurança. | OPEN |
| [#50638](https://github.com/anthropics/claude-code/pull/50638) | **Fix readme images** — Corrige imagens no README. | OPEN |
| [#50637](https://github.com/anthropics/claude-code/pull/50637) | **Goodshyt group patch 1** — Patch genérico do grupo Goodshyt. | OPEN |

**Observação:** A maioria dos PRs abertos vem do usuário `GoodshytGroup`, sugerindo contribuições de um novo contribuidor ou projeto relacionado.

---

## 5. Tendências de Pedidos de Features

### 5.1 Indicadores Visuais de Contexto e Custo
Múltiplos issues solicitam indicadores de context window:
- [#39187](https://github.com/anthropics/claude-code/issues/39187) — Indicador percentual na UI
- [#46897](https://github.com/anthropics/claude-code/issues/46897) — Mesma feature para Windows
- [#50863](https://github.com/anthropics/claude-code/issues/50863) — Expor contadores de tokens e custo em hooks/session
- [#50883](https://github.com/anthropics/claude-code/issues/50883) — Adicionar campos de uso de tokens em eventos `Stop` e `UserPromptSubmit`

**Direção clara:** A comunidade quer **transparência em tempo real** sobre consumo de recursos, tanto para evitar surpresas quanto para controle de custos em ambientes empresariais.

### 5.2 Melhorias de Acessibilidade e Input
- [#50870](https://github.com/anthropics/claude-code/issues/50870) — Delegar push-to-talk para API nativa do Windows (Voice Typing)
- [#50646](https://github.com/anthropics/claude-code/issues/50646) — Opção para usar PowerShell 5.1 como padrão no Windows

### 5.3 Ferramentas de Desenvolvimento
- [#50862](https://github.com/anthropics/claude-code/issues/50862) — `/tasks` slash command para visualizar checklist interno de tarefas
- [#16561](https://github.com/anthropics/claude-code/issues/16561) — Melhor parsing de comandos Bash compostos para permissions

### 5.4 Integração e Plugin System
- Hooks e plugins demandam mais dados de sessão (custo, tokens)
- Issues com schema validation para configurações enterprise (`managed-mcp.json`)

---

## 6. Pontos de Atenção para Desenvolvedores

### 🔴 Problemas Críticos

| Área | Issue | Impacto |
|------|-------|---------|
| **Desktop macOS** | [#50582](https://github.com/anthropics/claude-code/issues/50582) | Updates não funcionam — reinstalação manual obrigatória |
| **Billing** | [#50710](https://github.com/anthropics/claude-code/issues/50710) | Assinatura trava após expiração de cartão |
| **Remote-control** | [#50681](https://github.com/anthropics/claude-code/issues/50681) | Erro 400 ao enviar imagens |
| **Sessões macOS** | [#50865](https://github.com/anthropics/claude-code/issues/50865) | Shells órfãos disparam comandos automaticamente |

### 🟡 Bugs Recorrentes ou Regression

| Área | Issue | Plataforma | Observação |
|------|-------|------------|------------|
| **Usage limit popup** | [#50761](https://github.com/anthropics/claude-code/issues/50761) | macOS | Popup incorreto mesmo com crédito disponível |
| **Agent tool** | [#46424](https://github.com/anthropics/claude-code/issues/46424) | macOS | Indisponível para sub-agentes — padrão orchestrator quebrado |
| **Light mode ANSI** | [#40905](https://github.com/anthropics/claude-code/issues/40905) | macOS | Color7 conflitante entre código e UI |
| **Hookify plugin** | [#47868](https://github.com/anthropics/claude-code/issues/47868) | macOS | ImportError por estrutura de cache versionada |
| **Computer Use clicks** | [#50719](https://github.com/anthropics/claude-code/issues/50719) | macOS 26.4+ | Cliques bloqueados pela Dock (regressão) |

### 🟠 Limitações Arquiteturais

| Área | Issue | Descrição |
|------|-------|-----------|
| **Worktrees** | [#34437](https://github.com/anthropics/claude-code/issues/34437) | Cada worktree cria projeto isolado — fragmenta histórico |
| **Windows bash** | [#30165](https://github.com/anthropics/claude-code/issues/30165) | Bash crasha com MSYS2 no Windows |
| **Git URL schema** | [#39380](https://github.com/anthropics/claude-code/issues/39380) | Regex `\.git$` quebra Azure DevOps SSH URLs |

### 🟢 Recomendações para Contribuidores

1. **Issues duplicados:** Features de context window ([#39187](https://github.com/anthropics/claude-code/issues/39187), [#46897](https://github.com/anthropics/claude-code/issues/46897)) e cost/hooks ([#50863](https://github.com/anthropics/claude-code/issues/50863), [#50883](https://github.com/anthropics/claude-code/issues/50883)) podem ser consolidados.

2. **PRs de baixa qualidade:** Vários PRs do usuário `GoodshytGroup` não possuem descrição ou são patches genéricos — verificar antes de mesclar.

3. **Docs PR bem-vindo:** O PR [#50672](https://github.com/anthropics/claude-code/pull/50672) corrige typo no changelog — comunidade pode contribuir com melhorias de documentação.

---

## Resumo Executivo

| Métrica | Valor |
|---------|-------|
| Releases (24h) | 0 |
| Issues (total) | 50 |
| Issues destacadas | 10 |
| PRs abertos (24h) | 10 |
| PRs importantes | 3 |
| Tendência principal | Transparência de custos e UX improvements |

**Recomendação:** Focar atenção em issues de billing (#50710) e update do macOS (#50582) que afetam experiência de usuário paying. A tendência de features de "observability" (custo, tokens, context window) indica demanda crescente por controle de custos em ambientes enterprise.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# Relatório Diário da Comunidade OpenAI Codex
## 📅 Data: 2026-04-20

---

## 1. Destaques do Dia

O ecossistema Codex apresenta hoje intensa atividade com foco em **infraestrutura de agentes e experiência do usuário**. As principais novidades incluem o avanço do **Goal Mode** (stack de 5 PRs para ferramentas de persistência de objetivos), a correção de vazamentos de memória em processos MCP com 37GB acumulados, e a reformulação do sistema de permissões no Windows sandbox. A comunidade demonstra preocupação contínua com regressões de permissions em ambiente Linux e vazamentos de processos no macOS.

---

## 2. Lançamentos

**Versões Rust liberadas (últimas 24h):**

| Versão | Descrição |
|--------|----------|
| `rust-v0.122.0-alpha.12` | Atualização alpha mais recente da série 0.122 |
| `rust-v0.122.0-alpha.11` | Build anterior com correções intermediárias |

Ambas versões pertencem ao canal **alpha/preview**, indicando trabalho ativo em funcionalidades экспериментальні. Desenvolvedores que utilizam Codex via CLI ou extensões IDE baseadas em Rust devem acompanhar essas atualizações para validação antecipada.

---

## 3. Issues em Evidência

### 🔴 Crítico (Alto Impacto)

**[#14936](https://github.com/openai/codex/issues/14936) — Approval prompt mostrado para quase todos os comandos (Linux)**
- **Por:** nsrisakolkit | 49 comentários | 👍 20
- **Relevância:** Regressão crítica que quebra o fluxo de trabalho. O `bwrap` (sandbox Linux) solicita aprovação para comandos rotineiros, mesmo após selecionar "sim, não pergunte novamente".
- **Reação:** Issue ativa há ~1 mês, comunidade debate workarounds. Urgência elevada dado impacto em produtividade.

**[#12491](https://github.com/openai/codex/issues/12491) — MCP child processes não coletados: 1300+ zombies, 37GB memory leak**
- **Por:** rolldav | 13 comentários | 👍 3
- **Relevância:** Vazamento massivo de memória em ambiente Desktop. Processo pai não faz `wait()` nos filhos MCP, acumulando processos órfãos.
- **Reação:** Issue recente (fevereiro), gravidade reconhecida. Necessita fix urgente para usuários Desktop.

**[#17832](https://github.com/openai/codex/issues/17832) — Playwright MCP stdio processes still leak (regressão)**
- **Por:** RedesignedRobot | 7 comentários | 👍 0
- **Relevância:** Mesmo após fix #16895, processos Playwright continuam vazando (213 pares órfãos, 13.6 GB RSS).
- **Reação:** Regressão confirmada, comunidade aguardando correção definitiva.

### 🟡 Importante (Funcionalidade/UX)

**[#8648](https://github.com/openai/codex/issues/8648) — Codex responde mensagens anteriores em vez da mais recente**
- **Por:** BobbyWang0120 | 45 comentários | 👍 37
- **Relevância:** Bug de contexto em conversas longas, fazendo o modelo ignorar a última mensagem do usuário.
- **Reação:** Issue muito votada, comunidade reporta impacto em fluxos multi-turn.

**[#18258](https://github.com/openai/codex/issues/18258) — Computer Use plugin "unavailable" no macOS mesmo com arquivos existentes**
- **Por:** hhushhas | 26 comentários | 👍 27
- **Relevância:** Plugin-chave para automação desktop não funciona apesar de estar configurado.
- **Reação:** Workaround sugerido: verificar `features.apps = true` no config e reparar cache de plugins.

**[#16088](https://github.com/openai/codex/issues/16088) — Arquivo `.codex` vazio deixado em projetos sem estrutura prévia**
- **Por:** aprendendo-codex | 21 comentários | 👍 58
- **Relevância:** Issue de regressão no Windows/WSL, causa sujeira em projetos. Alto número de upvotes indica impacto amplo.
- **Reação:** Comunitty sugere problema ocorre ao iniciar thread em projetos sem `.codex`.

**[#10599](https://github.com/openai/codex/issues/10599) — Way to configure location of worktrees**
- **Por:** adnanjpg | 8 comentários | 👍 32
- **Relevância:** Enhancement pedido há meses: Git worktrees sempre criados em localização fixa, sem opção de customização.
- **Reação:** Comunidade demonstra necessidade real de controle sobre workspace.

### 🟢 Enhancement (Futuro)

**[#2379](https://github.com/openai/codex/issues/2379) — Undo/redo typing no prompt**
- **Por:** aehlke | 4 comentários | 👍 22
- **Relevância:** Feature básica de UX отсутствует: não há Cmd-Z/Shift-Cmd-Z para desfazer/redo texto inserido.
- **Reação:** Pedido antigo, comunidade solicita há ~8 meses.

**[#8758](https://github.com/openai/codex/issues/8758) — Image generation from codex (CLOSED)**
- **Por:** darrenoakey | 20 comentários | 👍 50
- **Relevância:** Feature request popular para gerar assets visuais durante codificação.
- **Reação:** Closed (provavelmente implementado ou backlogged).

---

## 4. Progresso de PRs Importantes

### 🚀 Feature: Goal Mode (Stack de 5 PRs)

| PR | Título | Relevância |
|----|--------|------------|
| [#18075](https://github.com/openai/codex/pull/18075) | Add goal mode model tools (3/5) | Introduz `get_goal`, `set_goal`, `update_goal` — ferramentas para modelo inspecionar/persisti objetivos |
| [#18076](https://github.com/openai/codex/pull/18076) | Add goal mode core runtime (4/5) | Implementa continuation prompts, token accounting, budget stopping, resume handling |
| [#18077](https://github.com/openai/codex/pull/18077) | Add goal mode TUI UX (5/5) | Finaliza experiência com `/goal` command, statusline indicators, snapshots |
| [#18591](https://github.com/openai/codex/pull/18591) | Surface parent thread status in side conversations | Exibe status do parent thread em side conversations — usuário não perde contexto |

**Impacto:** O Goal Mode representa uma evolução significativa para agentes autônomos, permitindo que o modelo mantenha e prossiga objetivos de longo prazo com controle de orçamento.

### 🔒 Segurança & Sandbox

**[#18443](https://github.com/openai/codex/pull/18443) — Do not grant Windows sandbox ACLs on USERPROFILE**
- **Relevância:** Corrige vulnerabilidade onde Codex aplicava ACLs de sandbox ao diretório completo do usuário no Windows.
- **Impacto:** Segurança e isolamento melhorados.

**[#18493](https://github.com/openai/codex/pull/18493) — Filter Windows sandbox roots from SSH config dependencies**
- **Relevância:** Completa a correção #18443, filtrando raízes SSH-owned do perfil.
- **Impacto:** Evita exposição indevida de arquivos SSH.

### 🐛 Correções de Bugs

**[#18392](https://github.com/openai/codex/pull/18392) — Fix hang on turn/interrupt**
- **Relevância:** Corrigia deadlock quando `turn/interrupt` era chamado em turns já completados.
- **Impacto:** Estabilidade em operações de interrupção.

**[#18580](https://github.com/openai/codex/pull/18580) — Avoid redundant memory enable notice**
- **Relevância:** Elimina notificação redundante de "Memories will be enabled" ao submeter state sem toggle real.
- **Impacto:** UX mais limpa no menu `/experimental`.

### ⚙️ Infraestrutura MCP

**Stack HTTP MCP Remoto (4 PRs sequenciais):**

| PR | Título | Função |
|----|--------|--------|
| [#18581](https://github.com/openai/codex/pull/18581) | [1/4] Add executor HTTP request protocol | Protocolo base para requests HTTP no executor |
| [#18582](https://github.com/openai/codex/pull/18582) | [2/4] Implement executor HTTP request runner | Implementação do runner no executor side |
| [#18583](https://github.com/openai/codex/pull/18583) | [3/4] Add executor-backed RMCP HTTP client | Cliente HTTP via executor |
| [#18584](https://github.com/openai/codex/pull/18584) | [4/4] Wire remote streamable HTTP MCP | Integração final do transporte |

**Impacto:** Habilita MCP streamable HTTP em ambiente remoto com placement de rede otimizado, sem adicionar APIs MCP-específicas no executor.

### 📦 Outros PRs Relevantes

**[#17286](https://github.com/openai/codex/pull/17286) — Prefix Compaction**
- **Relevância:** Preaquece compactação de prefixo em background, surfaceia substituições como "Context prefix compacted".
- **Impacto:** Melhor performance em contextos longos.

**[#18569](https://github.com/openai/codex/pull/18569) — feat(guardian): add review observability and trace propagation**
- **Relevância:** Instrumentação de analytics para review, usando nova pipeline.
- **Impacto:** Melhor observabilidade de uso.

**[#18586](https://github.com/openai/codex/pull/18586) — Restore active models catalog**
- **Relevância:** Substitui catalog antigo por conteúdo atual, atualiza model slugs.
- **Impacto:** Sincronização de modelos disponíveis.

---

## 5. Tendências de Pedidos de Features

A análise das issues revela direcionamentos claros:

| Categoria | Tendência | Issues Relacionadas |
|-----------|----------|---------------------|
| **🎨 Multimodal** | Geração de imagens integrada ao workflow de codificação | [#8758](https://github.com/openai/codex/issues/8758) |
| **🔔 Notificações Avançadas** | Eventos de aprovação, pauses, necessidade de input | [#3247](https://github.com/openai/codex/issues/3247) |
| **📝 UX Editor** | Undo/redo em prompts, teclas de atalho | [#2379](https://github.com/openai/codex/issues/2379) |
| **📁 Workspace Control** | Local customizável para worktrees Git | [#10599](https://github.com/openai/codex/issues/10599) |
| **🔄 Queue Operations** | Enfileirar comandos `/compact`, `/review`, `/fast` | [#14588](https://github.com/openai/codex/issues/14588), [#14286](https://github.com/openai/codex/issues/14286), [#14081](https://github.com/openai/codex/issues/14081) |
| **🤖 Multi-Agent** | Sistemas hierárquicos multi-agente | [#18557](https://github.com/openai/codex/issues/18557) |
| **⚙️ Updates** | Desabilitar updates automáticos do app | [#18546](https://github.com/openai/codex/issues/18546) |
| **📊 Telemetria IDE** | Retorno de usage telemetry na extensão | [#18512](https://github.com/openai/codex/issues/18512) |

**Observação:** Há demanda significativa por **controles de queue** (enfileiramento de comandos) e **configurabilidade de workspace**, indicando que desenvolvedores avançados buscam Codex como plataforma de automação extensível.

---

## 6. Pontos de Atenção para Desenvolvedores

### ⚠️ Regressões Críticas Ativas

1. **Sandbox Permission Loop (Linux)** — Issue [#14936](https://github.com/openai/codex/issues/14936)
   - **Dica:** Se afetado, considere downgradar para CLI 0.114.x ou utilizar workarounds de configuração shell.

2. **Memory Leaks em MCP (Desktop/macOS)** — Issues [#12491](https://github.com/openai/codex/issues/12491) e [#17832](https://github.com/openai/codex/issues/17832)
   - **Dica:** Monitore uso de memória em sessões longas. Reiniciar o app pode ser necessário temporariamente.

3. **Computer Use Unavailable (macOS)** — Issues [#18258](https://github.com/openai/codex/issues/18258) e [#18404](https://github.com/openai/codex/issues/18404)
   - **Workaround:** Verifique `~/.codex/config.toml` com `features.apps = true` e repare caminhos de cache.

### 🔄 Dores Recorrentes

| Problema | Frequência | Referências |
|----------|------------|-------------|
| Vazamento de processos MCP stdio | Alta | [#12491](https://github.com/openai/codex/issues/12491), [#17832](https://github.com/openai/codex/issues/17832) |
| Permissions re-solicitadas após "remember" | Alta | [#14936](https://github.com/openai/codex/issues/14936), [#6395](https://github.com/openai/codex/issues/6395) |
| Contexto em conversas longas (respostas antigas) | Média | [#8648](https://github.com/openai/codex/issues/8648), [#14063](https://github.com/openai/codex/issues/14063) |
| TUI freezes durante fan-out | Média | [#16688](https://github.com/openai/codex/issues/16688) |

### 💡 Demanda Frequente da Comunidade

- **Configurabilidade:** Local de worktrees, desabilitar updates, localização de cache
- **Operações Async:** Queue de comandos (`/compact`, `/review`)
- **Observabilidade:** Telemetria de uso, traces de review
- **MCP Remoto:** Suporte HTTP streamable para execuções remotas (em desenvolvimento)

### 📌 Ações Recomendadas

1. **Para quem usa Desktop/macOS:** Monitore memória; evite sessões MCP extremamente longas até fix dos leaks
2. **Para usuários Linux:** Aguarde fix do bwrap ou considere alternativas de sandbox
3. **Para desenvolvedores de plugins:** Acompanhe o stack de Goal Mode — APIs de objetivos permitirão novos padrões de agent design
4. **Para contributors:** PRs [#18581-#18584](https://github.com/openai/codex/pulls?q=is%3Aopen+is%3Apr+18581) são boa entrada para entender arquitetura MCP

---

*Relatório gerado automaticamente com base em dados GitHub — openai/codex | 2026-04-20*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Relatório Diário da Comunidade Gemini CLI
## 📅 2026-04-20

---

## 1. Destaques do Dia

O ecossistema Gemini CLI apresenta alta atividade de desenvolvimento com foco em **estabilidade e experiência do usuário**. Destaque para PRs de segurança importantes (substituição de execSync por execFileSync) e melhorias na experiência de extensão e reinicialização do CLI. A comunidade demonstra preocupação recorrente com comportamento de subagentes, permissões e detecção de ambiente SSH.

> **Nenhum release foi publicado nas últimas 24h**, indicando foco em refinamento antes de próximas versões.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24h.**

O time parece estar em fase de consolidação de PRs pendentes antes do próximo cut.

---

## 3. Issues em Evidência

### 🔴 Prioridade Alta

**[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** — AST-aware file reads, search, and mapping *(5 comentários)*  
*Autor: gundermanc | Criado: 2026-03-16*  
Exploração sobre ferramentas AST-aware para leituras mais precisas de métodos e navegação de codebase. Reduzir ruído em tokens e minimizar turns mal alinhados. Issue classificada como EPIC com acompanhamento por workstream-rollup.

**[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** — Subagent recovery after MAX_TURNS *(2 comentários, 2 👍)*  
*Autor: matei-anghel | Criado: 2026-03-13*  
Problema crítico: subagentes reportam `status: "success"` mesmo ao atingir limite máximo de turns, ocultando interrupções. Afeta confiança em análises de codebase investigator.

**[#24916](https://github.com/google-gemini/gemini-cli/issues/24916)** — Gemini CLI keeps asking permissions *(3 comentários)*  
*Autor: nikhilkapoor0919 | Criado: 2026-04-08*  
Permissões solicitadas repetidamente mesmo após "allow for all future sessions". Impacto direto na usabilidade diária.

**[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)** — Shell command execution stuck *(2 comentários, 2 👍)*  
*Autor: rnett | Criado: 2026-04-11*  
CLI trava em "Awaiting user input" após comandos shell simples terminarem. Problema recorrente e frustrante.

**[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)** — 400 error with > 128 tools *(0 comentários)*  
*Autor: gundermanc | Criado: 2026-03-30*  
CLI encontra erro 400 com mais de 400 ferramentas disponíveis. Questão de escalabilidade importante.

---

### 🟡 Prioridade Média

**[#23571](https://github.com/google-gemini/gemini-cli/issues/23571)** — Model creates tmp scripts randomly *(2 comentários)*  
*Autor: galz10 | Criado: 2026-03-23*  
Modelo gera scripts em diretórios aleatórios quando restrito de shell execution, criando overhead de limpeza.

**[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)** — Browser Agent ignores settings.json *(2 comentários)*  
*Autor: hsm207 | Criado: 2026-03-13*  
Browser Agent ignora configurações de `maxTurns` em settings.json, inconsistente com AgentRegistry.

**[#23582](https://github.com/google-gemini/gemini-cli/issues/23582)** — Subagents awareness of approval modes *(1 comentário, 1 👍)*  
*Autor: jerop | Criado: 2026-03-23*  
Subagentes não reconhecem modos ativos de aprovação (Plan Mode, Auto-Edit), causando conflitos em tool definitions.

**[#25218](https://github.com/google-gemini/gemini-cli/issues/25218)** — Table renders incrementally *(0 comentários)*  
*Autor: student-ankitpandit | Criado: 2026-04-12*  
Tabelas re-renderizam a cada chunk durante streaming, causando layout quebrado em screen readers. Acessibilidade afetada.

**[#25216](https://github.com/google-gemini/gemini-cli/issues/25216)** — Gemini failed on temporary path A:\ *(1 comentário)*  
*Autor: Florin-Di | Criado: 2026-04-12*  
Erro EISDIR ao executar em caminho temporário Windows (A:\). edge case de sistema de arquivos.

---

## 4. Progresso de PRs Importantes

### ✅ PRs Fechados Recentemente

| # | Título | Status | Impacto |
|---|--------|--------|---------|
| [#25455](https://github.com/google-gemini/gemini-cli/pull/25455) | docs: add For Beginners section to CONTRIBUTING.md | CLOSED | Melhora onboarding de contribuidores |
| [#24669](https://github.com/google-gemini/gemini-cli/pull/24669) | Alert autofix 10 | CLOSED | Correções automáticas de alertas |
| [#24664](https://github.com/google-gemini/gemini-cli/pull/24664) | feat(cli): add ACP host input requests | CLOSED | Caminho opt-in para ACP client responder ask_user |
| [#24665](https://github.com/google-gemini/gemini-cli/pull/24665) | feat(cli) fix copy mode | CLOSED | Corrige notificação e flickering em copy mode |
| [#24671](https://github.com/google-gemini/gemini-cli/pull/24671) | Allow parallel editing of same file | CLOSED | Remove race condition em edits simultâneos |
| [#24694](https://github.com/google-gemini/gemini-cli/pull/24694) | prevent PTY resource leak | CLOSED | **Crítico**: Evita zombies de terminal em exit |

### 🚧 PRs Abertos

| # | Título | Área | Prioridade | Descrição |
|---|--------|------|------------|-----------|
| [#25666](https://github.com/google-gemini/gemini-cli/pull/25666) | Akkr/gemma4 apr19 | — | P1 | Integração Gemma 4 (aberto hoje) |
| [#25663](https://github.com/google-gemini/gemini-cli/pull/25663) | Add hostname to footer status bar | core | — | Identificação de sessões SSH/VM/container |
| [#25662](https://github.com/google-gemini/gemini-cli/pull/25662) | fix: skip GEMINI.md directories (EISDIR) | core | P2 | Silently skip diretórios com nome GEMINI.md |
| [#25660](https://github.com/google-gemini/gemini-cli/pull/25660) | Add 'delete' alias for /extensions uninstall | extensions | — | Reduz fricção em desinstalação |
| [#25657](https://github.com/google-gemini/gemini-cli/pull/25657) | Add /restart slash command | core | P2 | Restart com resume de sessão |
| [#25654](https://github.com/google-gemini/gemini-cli/pull/25654) | Preserve extension rollback | extensions | P1 | Correção de update failures com rollback |
| [#25653](https://github.com/google-gemini/gemini-cli/pull/25653) | Copy extension examples to dist | cli | P1 | Corrige falha de `gemini extensions new` |
| [#25649](https://github.com/google-gemini/gemini-cli/pull/25649) | Strip CI_* env vars in dev mode | core | — | Previne hang em `npm run start` com CI_TOKEN |
| [#24760](https://github.com/google-gemini/gemini-cli/pull/24760) | Replace execSync with execFileSync | security | — | **Segurança**: evita shell injection |
| [#25163](https://github.com/google-gemini/gemini-cli/pull/25163) | Prevent restart loop on trust mismatch | core | P1 | Corrige loop infinito de restart |

---

## 5. Tendências de Pedidos de Features

### 📊 Análise de Padrões Emergentes

**1. Inteligência de Código (AST-aware Tools)**
- Issues [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) e [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)
- Comunidade demanda ferramentas que compreendam estrutura sintática para leituras mais precisas e navegação contextual.

**2. Gestão de Memória e Preferências**
- Issues [#22819](https://github.com/google-gemini/gemini-cli/issues/22819) e [#22809](https://github.com/google-gemini/gemini-cli/issues/22809)
- Rota global vs. project para memória, plus trigger proativo para escrita de preferências do usuário.

**3. Subagent Intelligence**
- Issues [#23582](https://github.com/google-gemini/gemini-cli/issues/23582), [#22323](https://github.com/google-gemini/gemini-cli/issues/22323), [#23897](https://github.com/google-gemini/gemini-cli/issues/23897)
- Melhor consciência de modos de aprovação, recovery behavior, e rejeições de tool calls.

**4. Experiência Multi-Ambiente**
- Issues [#24546](https://github.com/google-gemini/gemini-cli/issues/24546), [#24202](https://github.com/google-gemini/gemini-cli/issues/24202), [#25216](https://github.com/google-gemini/gemini-cli/issues/25216)
- Detecção de SSH, comportamento em containers/VMs, edge cases de caminhos Windows.

**5. UI/UX Refinements**
- Issues [#25218](https://github.com/google-gemini/gemini-cli/issues/25218), [#24470](https://github.com/google-gemini/gemini-cli/issues/24470), [#24943](https://github.com/google-gemini/gemini-cli/issues/24943)
- Renderização acessível, scroll suave em chats longos, layout de chamadas paralelas.

---

## 6. Pontos de Atenção para Desenvolvedores

### ⚠️ Dores Recorrentes Identificadas

| Categoria | Issue | Problema | Frequência |
|-----------|-------|----------|------------|
| **Permissões** | [#24916](https://github.com/google-gemini/gemini-cli/issues/24916) | CLI pede permissões repetidamente | 3+ reports |
| **Shell Hangs** | [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Travis após comandos terminarem | 2+ reports |
| **Tmp Scripts** | [#23571](https://github.com/google-gemini/gemini-cli/issues/23571) | Arquivos temporários em diretórios aleatórios | 1+ report |
| **PTY Leaks** | [#24694](https://github.com/google-gemini/gemini-cli/pull/24694) ✅ | Zombies em Ctrl+C | Corrigido |
| **SSH Text** | [#24202](https://github.com/google-gemini/gemini-cli/issues/24202) | Texto embaralhado via SSH | 1+ report |
| **Settings Ignored** | [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | Browser Agent ignora maxTurns | 1+ report |

### 🔧 Demandas Frequentes da Comunidade

1. **Slash Commands**: Novos comandos como `/restart` ([#25657](https://github.com/google-gemini/gemini-cli/pull/25657)) e aliases para `delete` ([#25660](https://github.com/google-gemini/gemini-cli/pull/25660))

2. **Detecção de Ambiente**: Funções para identificar SSH ([#24546](https://github.com/google-gemini/gemini-cli/issues/24546)) e stripping de CI_* vars ([#25649](https://github.com/google-gemini/gemini-cli/pull/25649))

3. **Extensões**: Melhoria em update flows ([#25654](https://github.com/google-gemini/gemini-cli/pull/25654)) e templates ([#25653](https://github.com/google-gemini/gemini-cli/pull/25653))

4. **Segurança**: Substituição de execSync por execFileSync ([#24760](https://github.com/google-gemini/gemini-cli/pull/24760)) - **recomendado revisar**

5. **Estabilidade de CI**: Model Steering Guidance não funciona em forks ([#24493](https://github.com/google-gemini/gemini-cli/issues/24493))

---

## 📌 Resumo Executivo

| Métrica | Valor |
|---------|-------|
| Releases (24h) | 0 |
| Issues atualizados (24h) | 50 |
| PRs atualizados (24h) | 32 |
| PRs fechados | 6 |
| PRs abertos | 26 |
| Issues P1 | 3 em destaque |

**Recomendação**: Priorizar review dos PRs de segurança ([#24760](https://github.com/google-gemini/gemini-cli/pull/24760)) e estabilidade ([#25654](https://github.com/google-gemini/gemini-cli/pull/25654), [#25649](https://github.com/google-gemini/gemini-cli/pull/25649)). Issues de permissões e shell hangs merecem atenção imediata da equipe.

---

*Relatório gerado automaticamente com base em dados do GitHub. Para atualizações em tempo real, consulte [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli).*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# Relatório Diário da Comunidade GitHub Copilot CLI
## 📅 Data: 20 de abril de 2026

---

## 1. Destaques do Dia

O dia de hoje não trouxe novas releases, mas foi marcado por intensa atividade em issues, especialmente relacionadas a **limitações de taxa (rate limits)** e problemas de experiência do usuário. A comunidade reportou 28 issues atualizadas nas últimas 24h, com destaque para problemas persistentes de display de uso de API, comportamento inadequado em caso de rate limits e dificuldades com a seleção de modelos. O tema central das reclamações continua sendo a confiabilidade do sistema de rate limiting e a necessidade de melhor feedback visual para os usuários.

---

## 2. Lançamentos

**Nenhuma release została publicada nas últimas 24 horas.**

O projeto encontra-se na versão mais recente documentada (`v1.0.32`), sem atualizações de versão no período analisado.

---

## 3. Issues em Evidência

### 3.1 [GPT-5.4 /model picker hides Extra High mesmo xhigh ainda funcionando](https://github.com/github/copilot-cli/issues/2725)
**Relevância:** 🔴 Alta | **Autor:** daideguchi | **👍 17 | 💬 22 comentários**

O picker de modelo para GPT-5.4 não exibe a opção "Extra High" na interface, mesmo quando essa configuração ainda funciona na prática (versão 1.0.27). Isso cria inconsistência entre o que o usuário vê e o que realmente está disponível. A comunidade demonstrou forte interesse, com 17 upvotes e 22 comentários, indicando que é um problema que afeta a experiência de uso regular.

---

### 3.2 [Strange rate limit message](https://github.com/github/copilot-cli/issues/2336)
**Relevância:** 🔴 Alta | **Autor:** laeubi | **👍 6 | 💬 17 comentários**

Um usuário reportou uma falha misteriosamente repentina durante execução de tarefa moderada, com mensagem de rate limit aparecendo após meio minuto de agente em background. Com 17 comentários, este issue demonstra que as mensagens de erro não estão sendo claras quanto ao motivo real da limitação, dificultando o diagnóstico por parte dos desenvolvedores.

---

### 3.3 [HTTP/2 GOAWAY race condition causa falhas em cascata](https://github.com/github/copilot-cli/issues/2421)
**Relevância:** 🔴 Alta | **Autor:** sjanoe123 | **👍 16 | 💬 6 comentários**

Issue crítico que consolida múltiplos relatórios (#1743, #1754, #2050, #2101, #2189) sobre uma race condition no pool de conexões HTTP/2. Quando um frame GOAWAY chega durante requisições em voo, o estado interno do pool é corrompido, causando desperdício silencioso de requisições premium. Com 16 upvotes, a comunidade reconhece a gravidade deste problema de infraestrutura.

---

### 3.4 [Implement proper HTTP retry logic for 429 responses](https://github.com/github/copilot-cli/issues/2760)
**Relevância:** 🔴 Alta | **Autor:** srijan-at-qwertystars | **👍 2 | 💬 6 comentários**

O CLI apresenta comportamento agressivo de retry ao receber HTTP 429 (Rate Limited), fechando a conexão e retentando imediatamente sem espera, criando loops de 20+ retentativas por minuto. Este problema consome recursos desnecessariamente e piora a experiência do usuário. A issue propõe implementação de backoff exponencial e delays apropriados.

---

### 3.5 [Rate Limit display is completely off](https://github.com/github/copilot-cli/issues/2839)
**Relevância:** 🟡 Média | **Autor:** laeubi | **👍 1 | 💬 2 comentários**

Usuário reporta que duas janelas CLI abertas mostram percentuais diferentes (0% vs 33%), enquanto o GitHub Settings indica 60.6% de uso. Este bug de sincronização de estado pode causar confusão e decisões erradas por parte dos desenvolvedores que confiam no display de uso.

---

### 3.6 [Rate limit aborts subagents](https://github.com/github/copilot-cli/issues/2840)
**Relevância:** 🟡 Média | **Autor:** Coekjan | **👍 1 | 💬 2 comentários**

Quando em rate limit e usando modelo automático, se o Copilot gera um subagente para trabalho paralelo, o subagente simplesmente emite "rate limited" e força o agente principal a refazer o trabalho. Isso representa perda de contexto e eficiência em workflows complexos.

---

### 3.7 [Weekly rate limiting](https://github.com/github/copilot-cli/issues/2828)
**Relevância:** 🟡 Média | **Autor:** jonmn | **👍 1 | 💬 2 comentários**

Solicitação de feature para incluir sugestões práticas quando o usuário atinge o rate limit semanal. Atualmente, a mensagem apenas informa o tempo de espera, sem oferecer caminhos alternativos como downgrade de modelo ou outras estratégias de contorno.

---

### 3.8 [Session token expired. Please resend your message](https://github.com/github/copilot-cli/issues/2818)
**Relevância:** 🟡 Média | **Autor:** Coekjan | **👍 4 | 💬 1 comentário**

Problema recorrente onde a sessão é abortada aleatoriamente com mensagem de token expirado, prejudicando especialmente tarefas de longo prazo executadas em modo autopilot. Com 4 upvotes, indica frustração significativa da comunidade com perda de contexto.

---

### 3.9 [Improve rate limit UI for all types of rate limit](https://github.com/github/copilot-cli/issues/2827)
**Relevância:** 🟡 Média | **Autor:** legendarykew | **👍 5 | 💬 2 comentários**

Feature request para melhorar a UI de rate limits, que atualmente só mostra indicadores quando o limite é atingido (bloqueio) ou avisos pontuais de 75%/90% do limite semanal. A comunidade solicita um painel de uso mais informativo e contínuo.

---

### 3.10 [Copilot Update Command Is Not Working desde 1.0.17](https://github.com/github/copilot-cli/issues/2583)
**Relevância:** 🟡 Média | **Autor:** znamenap | **👍 0 | 💬 8 comentários**

O comando `/update` ou `copilot update` não funciona corretamente desde a versão 1.0.17, afetando usuários Windows (via winget). Com 8 comentários, indica um problema regression que dificulta a atualização automática do CLI.

---

## 4. Progresso de PRs Importantes

**Nenhum Pull Request foi atualizado nas últimas 24 horas.**

Este período de baixa atividade em PRs pode indicar que a equipe está em ciclo de planejamento ou aguardando revisões pendentes. Recomenda-se monitorar o repositório para próximas movimentações.

---

## 5. Tendências de Pedidos de Features

### 5.1 🔧 Melhoria no Sistema de Rate Limiting
A esmagadora maioria das issues está relacionada a rate limits. A comunidade solicita:
- **Backoff exponencial** para retry de requisições 429
- **Display consistente** de uso de API em todas as sessões
- **Sugestões proativas** quando limites são atingidos
- **UI melhorada** para visualização contínua do consumo

### 5.2 🎨 Customização da Interface
- [Adicionar comando `/btw`](https://github.com/github/copilot-cli/issues/2078) (26 upvotes) - feature similar a outros CLIs
- [Suporte a temas customizados](https://github.com/github/copilot-cli/issues/2830) - paleta de cores personalizável
- [Postura comportamental separada da seleção de modo](https://github.com/github/copilot-cli/issues/2837)

### 5.3 🔌 Melhorias em MCP e Integração
- [Toggle de MCPs via interface](https://github.com/github/copilot-cli/issues/2805) - 类似 habilidades
- [Conexão com servidores MCP](https://github.com/github/copilot-cli/issues/2282) - problemas de conexão reportados

### 5.4 📊 Gestão de Sessões
- [Mostrar resumo da sessão inline](https://github.com/github/copilot-cli/issues/2330) - nome, recência, intent
- [Eventos dedicados para troca de agente](https://github.com/github/copilot-cli/issues/2838)

### 5.5 🗂️ Gerenciamento de Estado
- [Limpeza de pastas órfãs de estado de sessão](https://github.com/github/copilot-cli/issues/2836) - folders abandonadas em inicialização abortada

---

## 6. Pontos de Atenção para Desenvolvedores

### ⚠️ Problemas Críticos Identificados

| Problema | Severidade | Impacto |
|----------|------------|---------|
| Race condition HTTP/2 GOAWAY | 🔴 Crítica | Descarte silencioso de requisições premium |
| Retry agressivo em 429 | 🔴 Crítica | Loop infinito de retentativas |
| Rate limit persistente em Pro+ | 🔴 Crítica | Bloqueio total por horas |
| Expiração aleatória de token | 🟡 Alta | Perda de contexto em tarefas longas |

### 📋 Recomendações para Desenvolvedores

1. **Monitoramento de Rate Limits**: Implementar logging estruturado para identificar padrões de consumo e antecipar problemas de limite.

2. **Fallback de Modelo**: Dado o volume de issues sobre rate limits, considere implementar lógica de fallback automático mais agressiva ou oferece atalhos claros na UI para切换 de modelo.

3. **Testes de Estresse de Rede**: A race condition HTTP/2 merece atenção especial em cenários de rede instável ou alta concorrência.

4. **Validação de UI**: Issues como display inconsistente de porcentagem (0% vs 33%) indicam necessidade de revisão do gerenciamento de estado entre múltiplas instâncias do CLI.

5. **Documentação de Limites**: A comunidade demonstra confusão sobre os limites de API. Considerem publicar página com limites claros por tier de assinatura.

### 🔮 Observações Estratégicas

O padrão emergente nas issues sugere que a **experiência de rate limiting** é o maior ponto de fricção atual. Desenvolvedores que utilizam o Copilot CLI em produção devem:
- Implementar обработку errors robusta para cenários de limitação
- Considerar caches locais para reduzir chamadas de API
- Monitorar uso programaticamente para evitar hitting limits durante workflows críticos

---

**Última atualização:** 2026-04-20  
**Fonte:** [github.com/github/copilot-cli](https://github.com/github/copilot-cli)  
**Total de issues analisadas:** 28  
**PRs analisados:** 0

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Relatório Diário da Comunidade Kimi Code CLI
## 📅 Data: 2026-04-20

---

## 1. Destaques do Dia

O dia foi marcado por avanços significativos no gerenciamento de diretórios de trabalho para subagentes, com a abertura de uma issue complementar (#1936) ao PR #1933 que já implementa essa funcionalidade. A comunidade demonstra preocupação contínua com problemas de autenticação e estabilidade do protocolo ACP, além de surge/rem solicitações por funcionalidades de acessibilidade como entrada de voz.

**Links das issues em destaque:**
- [#1933 - feat(subagents): work_dir override](https://github.com/MoonshotAI/kimi-cli/pull/1933)
- [#1936 - complete work_dir override for Shell cwd](https://github.com/MoonshotAI/kimi-cli/issues/1936)
- [#1903 - Error code: 400](https://github.com/MoonshotAI/kimi-cli/issues/1903)

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24 horas.**

O último release estável continua sendo a versão 1.36.0, baseada nas informações das issues abertas.

---

## 3. Issues em Evidência

### 🔴 Alta Prioridade

**#1903 - [bug] Error code: 400**
- **Autor:** federicomalagoni | **Criado:** 2026-04-15 | **Atualizado:** 2026-04-19
- **Comentários:** 6 | ** 👍:** 0
- **Relevância:** Erro de API persistente affecting usuários macOS na versão 1.34.0. Com 6 comentários, é a issue com maior engajamento da comunidade nas últimas 24h, indicando um problema que afeta múltiplos usuários.
- **Link:** [MoonshotAI/kimi-cli Issue #1903](https://github.com/MoonshotAI/kimi-cli/issues/1903)

---

**#1939 - [bug] kimicode's acp protocol problem**
- **Autor:** feng-jin | **Criado:** 2026-04-19 | **Atualizado:** 2026-04-19
- **Comentários:** 2 | ** 👍:** 0
- **Relevância:** Problema na formatação de comandos ACProtocol. Afeta usuários que tentam usar `acpx` com argumentos. Reportado em ambiente Darwin 25.3.0 ARM64.
- **Link:** [MoonshotAI/kimi-cli Issue #1939](https://github.com/MoonshotAI/kimi-cli/issues/1939)

---

**#1927 - [bug] subagent infinite loop**
- **Autor:** feng-jin | **Criado:** 2026-04-18 | **Atualizado:** 2026-04-19
- **Comentários:** 1 | ** 👍:** 0
- **Relevância:** Bug crítico onde subagentes entram em loop infinito lendo o mesmo arquivo centenas de vezes. Afeta versão 1.36.0 em macOS 25.4.0 ARM64.
- **Link:** [MoonshotAI/kimi-cli Issue #1927](https://github.com/MoonshotAI/kimi-cli/issues/1927)

---

**#1931 - Subagent working directory inheritance (vinculada ao PR #1933)**
- **Autor:** zhuxixi | **Criado:** 2026-04-18 | **Atualizado:** 2026-04-19
- **Comentários:** 2 | ** 👍:** 0
- **Relevância:** Problema fundamental onde subagentes não herdam o diretório de trabalho quando o agente raiz usa `cd` em worktrees Git. **Já corrigido no PR #1933.**
- **Link:** [MoonshotAI/kimi-cli Issue #1931](https://github.com/MoonshotAI/kimi-cli/issues/1931)

---

### 🟡 Média Prioridade

**#1940 - [bug] Auth failure em VSCode/Cursor**
- **Autor:** Eglusaxie | **Criado:** 2026-04-19 | **Atualizado:** 2026-04-19
- **Comentários:** 0 | ** 👍:** 0
- **Relevância:** Falhas de autenticação quando Kimi Code é usado através de extensões VSCode (v0.5.3) e Cursor. Afeta ambiente de desenvolvimento popular.
- **Link:** [MoonshotAI/kimi-cli Issue #1940](https://github.com/MoonshotAI/kimi-cli/issues/1940)

---

**#1936 - Complete work_dir override para Shell (complementar ao PR #1933)**
- **Autor:** zhuxixi | **Criado:** 2026-04-19 | **Atualizado:** 2026-04-19
- **Comentários:** 1 | ** 👍:** 0
- **Relevância:** Issue técnica identificando que a Shell tool ainda usa `session.work_dir` em vez do `work_dir` sobrescrito, necessitando correção adicional após merge do PR #1933.
- **Link:** [MoonshotAI/kimi-cli Issue #1936](https://github.com/MoonshotAI/kimi-cli/issues/1936)

---

**#1873 - [enhancement] Instalação sem direitos admin**
- **Autor:** Greenplumwine | **Criado:** 2026-04-14 | **Atualizado:** 2026-04-19
- **Comentários:** 1 | ** 👍:** 0
- **Relevância:** Demanda corporativa importante: versões anteriores permitiam instalação sem privilégios administrativos, mas versões recentes não. Afeta ambientes Windows empresariais.
- **Link:** [MoonshotAI/kimi-cli Issue #1873](https://github.com/MoonshotAI/kimi-cli/issues/1873)

---

**#1938 - [enhancement] Push notifications para Kimi-CLI-Web**
- **Autor:** zpljd258 | **Criado:** 2026-04-19 | **Atualizado:** 2026-04-19
- **Comentários:** 0 | ** 👍:** 0
- **Relevância:** Feature request para notificar usuários quando tarefas web são concluídas, habilitando interação mobile contínua. Usuário usa macOS 26 + Safari.
- **Link:** [MoonshotAI/kimi-cli Issue #1938](https://github.com/MoonshotAI/kimi-cli/issues/1938)

---

**#1934 - Voice Input Mode**
- **Autor:** lucianalima777 | **Criado:** 2026-04-18 | **Atualizado:** 2026-04-18
- **Comentários:** 0 | ** 👍:** 0
- **Relevância:** Comparação com Claude Code: entrada de voz para interação hands-free, útil para brainstorming e sessões longas. Proposta bem estruturada com 3 modos sugeridos.
- **Link:** [MoonshotAI/kimi-cli Issue #1934](https://github.com/MoonshotAI/kimi-cli/issues/1934)

---

## 4. Progresso de PRs Importantes

### ✅ PR #1933 - feat(subagents): work_dir override
- **Autor:** zhuxixi | **Merge status:** ABERTO
- **Resumo:** Adiciona parâmetro `work_dir` opcional à ferramenta Agent, permitindo subagentes operarem em diretórios diferentes do agente raiz. Resolve Issue #1931.
- **Relevância:** ⭐⭐⭐ Funcionalidade aguardada para workflows com Git worktrees e projetos multifolder.
- **Link:** [MoonshotAI/kimi-cli PR #1933](https://github.com/MoonshotAI/kimi-cli/pull/1933)

---

### 🔄 PR #1935 - feat(hooks): updatedInput para command rewriting
- **Autor:** zoorpha | **Merge status:** ABERTO
- **Resumo:** Adiciona suporte para `hookSpecificOutput.updatedInput` no ciclo de vida PreToolUse hook, habilitando reescrita transparente de comandos.
- **Relevância:** ⭐⭐ Extensão pequena (34 linhas) mas poderosa para personalização de comportamento via hooks Beta.
- **Link:** [MoonshotAI/kimi-cli PR #1935](https://github.com/MoonshotAI/kimi-cli/pull/1935)

---

### 🔄 PR #1549 - feat(plugin): configurable compaction providers
- **Autor:** CanerKocak | **Merge status:** ABERTO (em desenvolvimento desde 2026-03-22)
- **Resumo:** Adiciona `loop_control.compaction_model` configurável, permitindo uso de modelo dedicado para compactação de contexto em vez de sempre reutilizar o modelo de chat ativo.
- **Relevância:** ⭐⭐⭐ Melhoria de performance para sessões longas com contexto extenso.
- **Link:** [MoonshotAI/kimi-cli PR #1549](https://github.com/MoonshotAI/kimi-cli/pull/1549)

---

## 5. Tendências de Pedidos de Features

Baseado nas issues abertas nas últimas 24h, a comunidade demonstra interesse nas seguintes direções:

### 🔧 Melhorias de Infraestrutura
| Feature | Issue | Descrição |
|---------|-------|-----------|
| **Instalação sem admin** | [#1873](https://github.com/MoonshotAI/kimi-cli/issues/1873) | Suporte para ambientes corporativos Windows/Linux restritos |
| **Diretório de trabalho flexível** | [#1931](https://github.com/MoonshotAI/kimi-cli/issues/1931), [#1936](https://github.com/MoonshotAI/kimi-cli/issues/1936) | Subagentes com herança/customização de work_dir |

### 📱 Experiência Cross-Platform
| Feature | Issue | Descrição |
|---------|-------|-----------|
| **Push notifications** | [#1938](https://github.com/MoonshotAI/kimi-cli/issues/1938) | Notificações para Kimi-CLI-Web e CLI para tarefas concluídas |
| **Voice input** | [#1934](https://github.com/MoonshotAI/kimi-cli/issues/1934) | Modo de entrada por voz similar ao Claude Code |

### 🐛 Estabilidade do Protocolo ACP
| Problema | Issue | Descrição |
|----------|-------|-----------|
| **ACP protocol parsing** | [#1939](https://github.com/MoonshotAI/kimi-cli/issues/1939) | Formatação de comandos com argumentos |
| **Infinite loops** | [#1927](https://github.com/MoonshotAI/kimi-cli/issues/1927) | Subagentes lendo arquivos repetidamente |

### 🔐 Autenticação
| Problema | Issue | Descrição |
|----------|-------|-----------|
| **Auth em IDEs** | [#1940](https://github.com/MoonshotAI/kimi-cli/issues/1940) | Falhas de autenticação em VSCode e Cursor |

---

## 6. Pontos de Atenção para Desenvolvedores

### ⚠️ Dores Recorrentes Identificadas

1. **Protocolo ACP instável**
   - Múltiplas issues (#1939) relatando problemas com formatação de comandos
   - Requer atenção urgente para consistência na interface ACProtocol

2. **Loop infinito em subagentes**
   - Issue #1927 demonstra bug severo onde subagentes ficam presos em leitura repetida
   - Afeta experiência de usuário em tarefas complexas

3. **Autenticação fragmentada**
   - Diferentes comportamentos de auth entre CLI nativa, VSCode e Cursor (#1940, #1903)
   - Necessidade de abstração consistente de provedores

### 📋 Demanda Frequente da Comunidade

1. **Suporte a instalações restritas** (#1873)
   - Corporações precisam de opção de instalação local sem sudo/admin
   - Competição direta com Claude Code em ambientes empresariais

2. **Melhoria de contexto e performance** (#1549)
   - Compaction model dedicável para sessões longas
   - Redução de custos de tokens em projetos extensos

3. **Acessibilidade e UX** (#1934, #1938)
   - Entrada de voz para hands-free interaction
   - Notificações push para continuidade mobile/async

### 🎯 Prioridades Recomendadas para Review

| Prioridade | Item | Link |
|------------|------|------|
| 🔴 Crítica | Investigar Error code 400 em macOS | [#1903](https://github.com/MoonshotAI/kimi-cli/issues/1903) |
| 🔴 Crítica | Corrigir loop infinito em subagentes | [#1927](https://github.com/MoonshotAI/kimi-cli/issues/1927) |
| 🟡 Alta | Completar work_dir override na Shell | [#1936](https://github.com/MoonshotAI/kimi-cli/issues/1936) |
| 🟡 Alta | Padronizar autenticação cross-IDE | [#1940](https://github.com/MoonshotAI/kimi-cli/issues/1940) |
| 🟢 Média | Avaliar feature voice input | [#1934](https://github.com/MoonshotAI/kimi-cli/issues/1934) |
| 🟢 Média | Planejar suporte non-admin install | [#1873](https://github.com/MoonshotAI/kimi-cli/issues/1873) |

---

*Relatório gerado automaticamente com base nos dados do GitHub do projeto MoonshotAI/kimi-cli em 2026-04-20.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# Relatório Diário da Comunidade OpenCode

## 📅 2026-04-20

---

## 1. Destaques do Dia

O ecossistema OpenCode recebeu dois lançamentos consecutivos (v1.14.17 e v1.14.18) com foco em estabilidade e confiabilidade. A versão mais recente **v1.14.18** restaurou o backend nativo do ripgrep para garantir buscas de arquivos consistentes. A comunidade demonstrou alta atividade com 50 issues e 50 PRs atualizados nas últimas 24h, incluindo o reporte e fechamento de uma **vulnerabilidade de segurança crítica** relacionada à evasão de sandbox.

---

## 2. Lançamentos

### v1.14.18
**Core:** Restauração do backend nativo ripgrep para garantir funcionamento confiável da busca de arquivos e listagem.

**Contribuidor:**
- [@ariane-emory](https://github.com/ariane-emory) — Documentou o flag CLI `--dangerously-skip-permissions` ([#23371](https://github.com/anomalyco/opencode/pull/23371))

### v1.14.17
**Core:**
- Preserva permissões executáveis antes de builds Docker quando artefatos perdem bits de execução
- Corrige reinstall desnecessário de plugins
- Usa `display: summarized` por padrão para Anthropic Bedrock Opus 4.7
- Detecta tipos de anexos pelo conteúdo (imagens e PDFs)

---

## 3. Issues em Evidência

### 🔴 [Memory Megathread](https://github.com/anomalyco/opencode/issues/20695)
**60 comentários | 36 👍**
> Centraliza relatórios de problemas de memória; equipe solicita heap snapshots para diagnóstico.
> ⚠️ **Importante:** Issues de memória afetam sessões longas e produtividade.

### 🐛 [qwen3-coder fails to call edit tool](https://github.com/anomalyco/opencode/issues/6918)
**43 comentários | 24 👍**
> Provider OpenRouter com qwen3-coder falha repetidamente ao chamar ferramenta edit.
> Afeta usuários de provedores alternativos específicos.

### 📖 [Custom provider docs incorrect](https://github.com/anomalyco/opencode/issues/5937)
**23 comentários | 12 👍**
> Documentação de provider personalizado está desatualizada/confusa após comando `/connect`.
> Problema de DX que dificulta onboarding de novos usuários.

### 🤖 [Multi-agent orchestration in isolated workspaces](https://github.com/anomalyco/opencode/issues/17994)
**19 comentários | 2 👍**
> Feature request para rodar "times" de agentes em workspaces isolados.
> Direciona o roadmap de automação em escala.

### ✨ [Allow to expand pasted text](https://github.com/anomalyco/opencode/issues/8501)
**17 comentários | 141 👍**
> Texto colado é resumido como `[Pasted ~1 lines]` — usuários querem expandir para edição.
> **Uma das features mais votadas** — indica necessidade real de UX.

### 📋 [AGENTS.md not loaded after /new](https://github.com/anomalyco/opencode/issues/11532)
**16 comentários | 10 👍**
> Comando `/new` não carrega AGENTS.md automaticamente, quebrando workflow de projetos documentados.
> Bug funcional que impacta fluxos de trabalho estabelecidos.

### 🔌 [Azure OpenAI Models not working](https://github.com/anomalyco/opencode/issues/22444)
**10 comentários | 4 👍**
> Todos os modelos Azure OpenAI falham após último update com erro "cannot".
> Problema de regression que afeta clientes enterprise.

### 🚨 [Security: Sandbox Evasion](https://github.com/anomalyco/opencode/issues/23423)
**2 comentários | 0 👍**
> Vulnerabilidade crítica reportada: potencial leitura arbitrária de arquivos e execução de comandos via prompt injection.
> **Status:** Fechada — mantenha-se atento a updates de segurança.

### ⚡ [YOLO Mode — Auto-Approve All Permissions](https://github.com/anomalyco/opencode/issues/11831)
**3 comentários | 19 👍**
> Mode para pular todos os prompts de permissão (respeitando rules explícitas).
> Feature muito solicitada por power users.

### 🔧 [Nix build broken due to missing prettier](https://github.com/anomalyco/opencode/issues/23256)
**2 comentários | 0 👍**
> Build Nix quebrado após adição de prettier em generate.ts — dev dependency missing.
> Impacta desenvolvedores Nix/NixOS.

---

## 4. Progresso de PRs Importantes

| PR | Autor | Tipo | Descrição |
|----|-------|------|-----------|
| [#23335](https://github.com/anomalyco/opencode/pull/23335) | @elonazoulay | Bug fix | Remove blocklist de IDs de modelo de variantes de raciocínio (deepseek, glm) |
| [#14307](https://github.com/anomalyco/opencode/pull/14307) | @MakonnenMak | Bug fix | Usa parentID matching ao invés de ordenação por ID para loop de prompts |
| [#21722](https://github.com/anomalyco/opencode/pull/21722) | @snatvb | Refactor | Melhorias significativas de UX e design da interface |
| [#23439](https://github.com/anomalyco/opencode/pull/23439) | @rmk40 | Bug fix | Trata `--continue` em diretórios sem sessões prévias (não trava mais) |
| [#23390](https://github.com/anomalyco/opencode/pull/23390) | @CasualDeveloper | Bug fix | Consome Enter corretamente em DialogPrompt e DialogExportOptions |
| [#6370](https://github.com/anomalyco/opencode/pull/6370) | @mickalpine | Feature | Habilita clipboard primário no Linux (corrige middle-click paste) |
| [#16200](https://github.com/anomalyco/opencode/pull/16200) | @coleeleavitt | Bug fix | Usa package.json name para identity de plugins file:// (fecha 5 issues) |
| [#18443](https://github.com/anomalyco/opencode/pull/18443) | @LucasSantana-Dev | Bug fix | Retry de respostas 429 mesmo quando provider marca como não-retryable |
| [#13854](https://github.com/anomalyco/opencode/pull/13854) | @mocksoul | Bug fix | Para streaming markdown/code após mensagem completar (TUI) |
| [#23289](https://github.com/anomalyco/opencode/pull/23289) | @ghost | Bug fix | Filtra entradas inválidas em auth list (fecha #22802) |

---

## 5. Tendências de Features

Com base nas issues mais votadas e comentadas, as **direções mais demandadas** pela comunidade são:

### 🎯 Automação e Agentes
- **Multi-agent orchestration** em workspaces isolados ([#17994](https://github.com/anomalyco/opencode/issues/17994))
- **Agent-teams** e coordenação de sub-agentes ([#15035](https://github.com/anomalyco/opencode/issues/15035))
- Exposição de metadata de execução de tools/subagentes ([#23421](https://github.com/anomalyco/opencode/issues/23421))

### ⚡ Performance e Estabilidade
- **Memory optimization** — megathread ativo com coleta de heap snapshots
- Suporte a modelos de reasoning (Qwen, Kimi K2.6)
- Integração com providers empresariais (Azure OpenAI, LM Studio)

### 🛠️ UX e Produtividade
- **Expandir texto colado** (141👍 — maior engajamento)
- **YOLO Mode** para auto-aprovar permissões (19👍)
- Numpad Enter key no TUI ([#17457](https://github.com/anomalyco/opencode/issues/17457))
- Mobile touch optimization ([#18767](https://github.com/anomalyco/opencode/pull/18767))

### 📦 Providers e Integrações
- Kimi K2.6 integration ([#22408](https://github.com/anomalyco/opencode/issues/22408))
- Custom provider docs mais claros ([#5937](https://github.com/anomalyco/opencode/issues/5937))
- Melhorias em OAuth multi-conta ([#9972](https://github.com/anomalyco/opencode/pull/9972))

---

## 6. Pontos de Atenção para Desenvolvedores

### ⚠️ Dores Recorrentes Identificadas

1. **Problemas de Memória** — [Megathread #20695](https://github.com/anomalyco/opencode/issues/20695)
   - Sessões longas causam vazamentos; equipe coletando heap snapshots

2. **Confusão de Versionamento**
   - Issues reportam saltos incompreensíveis (1.4.10 → 1.4.17 → 1.14.x)
   - Releases intermediários ausentes causam 404s em Homebrew/AUR

3. **Providers Específicos Quebrados**
   - Azure OpenAI: regression após update
   - LM Studio + Qwen3.5: streaming trunca em backticks
   - Nix: build quebrado por missing devDependency

4. **Segurança — Evasão de Sandbox** ([#23423](https://github.com/anomalyco/opencode/issues/23423))
   - Vulnerabilidade crítica reportada e fechada; verificar atualizações

5. **Plugins e Customização**
   - Custom commands não aparecem ([#18987](https://github.com/anomalyco/opencode/issues/18987))
   - MCP tools ignoram permission filtering ([#23045](https://github.com/anomalyco/opencode/issues/23045))
   - Plugins reinstallando desnecessariamente (v1.14.17)

### 📌 Ações Recomendadas

| Prioridade | Ação |
|------------|------|
| 🔴 Alta | Monitorar updates de segurança pós-#23423 |
| 🟡 Média | Testar fluxos com Azure OpenAI e LM Studio |
| 🟡 Média | Reportar heap snapshots se enfrentando memory issues |
| 🟢 Baixa | Contribuir com docs para custom providers |

---

*Relatório gerado automaticamente com base em dados do GitHub — anomalyco/opencode*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Relatório Diário da Comunidade Pi — 2026-04-20

---

## 1. Destaques do Dia

O dia foi marcado por **ativa correção de bugs críticos** relacionados à integração com provedores externos (Google Cloud Code Assist, AWS GovCloud Bedrock) e à estabilidade de sessões. A comunidade demonstrou foco em **melhorias de extensibilidade**, especialmente para provedores locais de LLM e configurações de OAuth. O lançamento da versão 0.3.0 está em curso via PR #3428, prometendo novas funcionalidades para a próxima release.

---

## 2. Lançamentos

Nenhuma release oficial foi publicada nas últimas 24h. O PR [#3428](https://github.com/badlogic/pi-mono/pull/3428) ("Feat/v.0.3.0") encontra-se em desenvolvimento, indicando que a versão será disponibilizada em breve.

---

## 3. Issues em Evidência

### 🔴 Alta Prioridade

**1. [#3214](https://github.com/badlogic/pi-mono/issues/3214) — Bug: cloud code assist API retorna erro 400 por schema meta-declarations**
- **Por que importa:** Afeta diretamente usuários do Google Cloud Code Assist que utilizam MCP tools, impedindo tool calls e quebrando workflows de desenvolvimento.
- **Reação:** 11 comentários da comunidade discutindo soluções, com PR de correção associado (#3412).
- **Status:** CLOSED ✓

**2. [#3344](https://github.com/badlogic/pi-mono/issues/3344) — Tool calls abortadas corrompem estado da conversa**
- **Por que importa:** Usuários que usam Ctrl+C durante tool calls ficam com sessões permanentemente inutilizáveis — erro crítico de usabilidade.
- **Reação:** 7 comentários, comunidade reportando impacts em diferentes ambientes.
- **Status:** CLOSED ✓

**3. [#3411](https://github.com/badlogic/pi-mono/issues/3411) — Bug: Claude models via Antigravity falham com anyOf/const/$schema**
- **Por que importa:** Problema similar ao #3214, afeta ferramentas como GitHub MCP Server e pi-lens que usam TypeBox unions.
- **Reação:** 2 comentários, já com PR de correção (#3410).
- **Status:** CLOSED ✓

### 🟡 Média Prioridade

**4. [#3208](https://github.com/badlogic/pi-mono/issues/3208) — Feature Request: Custom Thinking Levels per Model**
- **Por que importa:** Permitiria que diferentes modelos expusessem seus próprios níveis de thinking, melhorando UX.
- **Reação:** 6 👍 e 6 comentários, autor manifestando interesse em implementar.
- **Status:** OPEN — em progresso

**5. [#3357](https://github.com/badlogic/pi-mono/issues/3357) — Official local LLM provider extension**
- **Por que importa:** Facilitaria integração com llama.cpp, ollama e LM Studio através de fetch dinâmico da lista de modelos.
- **Reação:** 4 comentários discutindo abordagem técnica.
- **Status:** OPEN

**6. [#3407](https://github.com/badlogic/pi-mono/issues/3407) — Bug: custom system prompt placeholders não resolvidos**
- **Por que importa:** Placeholders como `${toolsList}` funcionam no prompt padrão, mas falham em prompts customizados — impede personalização avançada.
- **Reação:** 1 comentário reportando o bug.
- **Status:** OPEN

**7. [#3392](https://github.com/badlogic/pi-mono/issues/3392) — Add prompt caching support for opencode go qwen models**
- **Por que importa:** Estenderia caching de prompts para modelos Alibaba, melhorando performance e reduzindo custos.
- **Reação:** 2 comentários, implementação em andamento.
- **Status:** OPEN

### 🟢 Novas Issues

**8. [#3420](https://github.com/badlogic/pi-mono/issues/3420) — Add gpt-5.4-pro to openai-codex model catalog**
- **Por que importa:** Modelo gpt-5.4-pro suporta OAuth do Codex mas não está no catálogo Pi, gerando warnings.
- **Status:** OPEN

**9. [#3423](https://github.com/badlogic/pi-mono/issues/3423) — Session morre silenciosamente após tool call (pi-dashboard iOS)**
- **Por que importa:** Sessão termina sem erro ou follow-up,用户体验很差 em dispositivos móveis.
- **Status:** CLOSED

**10. [#2070](https://github.com/badlogic/pi-mono/issues/2070) — Printable characters from numpad não reconhecidos**
- **Por que importa:** Bug de input de teclado afeta usuários que dependem do numpad, retornando caracteres errados.
- **Reação:** 10 comentários, afetando diversos sistemas operacionais.
- **Status:** CLOSED ✓

---

## 4. Progresso de PRs Importantes

| # | PR | Autor | Descrição | Status |
|---|-----|--------|-----------|--------|
| 1 | [#3428](https://github.com/badlogic/pi-mono/pull/3428) | bhaskarmelkani | **Feat/v.0.3.0** — Nova versão com funcionalidades aguardadas | CLOSED |
| 2 | [#3412](https://github.com/badlogic/pi-mono/pull/3412) | vladlearns | **fix(provider): strip json schema meta keys** — Corrige erro 400 na cloud code assist API | CLOSED |
| 3 | [#3410](https://github.com/badlogic/pi-mono/pull/3410) | batuh007 | **fix(providers): sanitize tool schemas** — Remove anyOf/const/$schema para Claude via Google Code Assist | CLOSED |
| 4 | [#3409](https://github.com/badlogic/pi-mono/pull/3409) | Michaelliv | **feat(ai): allow overriding oauth callback bind host** — Adiciona `PI_OAUTH_CALLBACK_HOST` para configuração de OAuth | OPEN (draft) |
| 5 | [#3403](https://github.com/badlogic/pi-mono/pull/3403) | lexobe | **feat(coding-agent): support --agents-file context override** — Permite especificar arquivo de contexto customizado | CLOSED |
| 6 | [#3408](https://github.com/badlogic/pi-mono/pull/3408) | malammar | **feat(safe-guard): add 'remember for session' option** — Adiciona opção de lembrar confirmações por sessão | CLOSED |
| 7 | [#3402](https://github.com/badlogic/pi-mono/pull/3402) | wirjo | **fix(amazon-bedrock): pass model.baseUrl as endpoint** — Permite custom endpoints para Bedrock | CLOSED |
| 8 | [#3427](https://github.com/badlogic/pi-mono/pull/3427) | vegarsti | **fix(coding-agent): add OpenRouter attribution headers** — Adiciona headers para featured no OpenRouter rankings | OPEN (draft) |
| 9 | [#3417](https://github.com/badlogic/pi-mono/pull/3417) | rwachtler | **fix(coding-agent): avoid duplicate symlinked skills** — Deduplicação de skills via realpathSync | OPEN |
| 10 | [#3374](https://github.com/badlogic/pi-mono/pull/3374) | vekexasia | **fix(coding-agent): browser-safe /share viewer shortcuts** — Evita conflito de atalhos com browser | CLOSED |

**Observação:** O PR #3400 (feat amazon-bedrock) também foi fechado hoje, otimizando uso de tokens em Bedrock.

---

## 5. Tendências de Pedidos de Features

Com base nas issues analisadas, as **principais direções solicitadas pela comunidade** são:

### 🔹 Extensibilidade de Providers
- Suporte oficial a **LLMs locais** (ollama, llama.cpp, LM Studio) com fetch dinâmico de modelos ([#3357](https://github.com/badlogic/pi-mono/issues/3357))
- Adição de novos modelos ao catálogo: `gpt-5.4-pro` ([#3420](https://github.com/badlogic/pi-mono/issues/3420)), `qwen3.6:35b` ([#3418](https://github.com/badlogic/pi-mono/issues/3418))
- Suporte a **prompt caching** para mais famílias de modelos ([#3392](https://github.com/badlogic/pi-mono/issues/3392))

### 🔹 Configuração Flexível
- Customização de **thinking levels por modelo** ([#3208](https://github.com/badlogic/pi-mono/issues/3208))
- Arquivo de contexto customizável via CLI ([#3403](https://github.com/badlogic/pi-mono/pull/3403))
- OAuth callback host configurável ([#3396](https://github.com/badlogic/pi-mono/issues/3396))
- Named sessions na launch ([#3416](https://github.com/badlogic/pi-mono/issues/3416))

### 🔹 Melhorias de UX
- Spinner/indicator customizável por extensões ([#3413](https://github.com/badlogic/pi-mono/issues/3413))
- Opção "remember for session" em confirmações ([#3408](https://github.com/badlogic/pi-mono/pull/3408))
- Headers custom sticky/non-sticky options ([#3415](https://github.com/badlogic/pi-mono/issues/3415))

### 🔹 Integrações
- OpenRouter attribution headers para featured em rankings ([#3414](https://github.com/badlogic/pi-mono/issues/3414))
- Device code login para ChatGPT em headless ([#3424](https://github.com/badlogic/pi-mono/issues/3424))
- AWS GovCloud Bedrock support ([#3359](https://github.com/badlogic/pi-mono/issues/3359))

---

## 6. Pontos de Atenção para Desenvolvedores

### 🔴 Bugs Recorrentes Identificados

1. **Falhas em tool schemas com meta-declarations JSON Schema**
   - Problema afeta múltiplos provedores (Google Cloud Code Assist, Antigravity)
   - Causa: `$schema`, `anyOf`, `const` não são aceitos por certas APIs
   - **Solução em curso:** Strip dessas propriedades em tool definitions ([#3412](https://github.com/badlogic/pi-mono/pull/3412), [#3410](https://github.com/badlogic/pi-mono/pull/3410))

2. **Estado corrompido após abort de tool calls**
   - Ctrl+C durante tool calls causa estado permanentemente quebrado
   - Erro: `tool_use ids were found without tool_result blocks`
   - **Status:** Precisa de correção robusta

3. **Placeholders não resolvidos em prompts customizados**
   - `${toolsList}` e `${guidelines}` funcionam apenas no prompt padrão
   - **Impacto:** Impossibilita personalização avançada do system prompt

### 🟡 Dores Frequentes

| Problema | Impacto | Workaround |
|----------|---------|------------|
| Cursor de software visível em panes desfocados | UX em tmux | Aguardando fix |
| Scroll posiciona no topo ao redimensionar terminal (Windows) | Usabilidade Windows Terminal | Aguardando fix |
| Caracteres do numpad não reconhecidos | Input de teclado | Aguardando fix |
| Config folder fora do padrão XDG (Linux) | Conformidade Linux | Desejado há tempo |
| AWS GovCloud não funciona (prefixo `us-gov.`) | Usuários GovCloud | Parcialmente corrigido |

### 📋 Recomendações

- **Para usuários de Google Cloud Code Assist:** Atualizar para versão com PRs #3412 e #3410 mergeados
- **Para desenvolvedores de extensões:** Explorar nova API de `--agents-file` ([#3403](https://github.com/badlogic/pi-mono/pull/3403)) e `remember for session` ([#3408](https://github.com/badlogic/pi-mono/pull/3408))
- **Para integrações AWS:** Verificar PR #3402 que permite custom endpoints via `model.baseUrl`

---

*Relatório gerado automaticamente com base em dados do GitHub — badlogic/pi-mono*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Relatório Diário da Comunidade Qwen Code — 2026-04-20

---

## 1. Destaques do Dia

A release nightly `v0.14.5-nightly.20260419.a623655c8` trouxe melhorias significativas para o sistema de hooks em ACP e otimizações na UX do modo compacto. No campo de issues, observa-se uma **explosão de erros 401 de autenticação** — múltiplos usuários reportam falhas ao usar o Qwen Code via OAuth após login aparentemente bem-sucedido. A equipe respondeu ativamente com PRs voltados à diversificação de métodos de autenticação na extensão VSCode e à expansão de comandos slash para múltiplos modos de operação.

---

## 2. Lançamentos

### v0.14.5-nightly.20260419.a623655c8
**Changes:**
- `feat(acp)`: Adição de suporte completo a hooks para integração via ACP (por @DennisYu07, PR #3248)
- `feat`: Otimização da UX do modo compacto — atalhos, sincronização de configurações e segurança (por @chiga0, PR #3100)
- `feat(hooks)`: Adição de suporte a HTTP Hooks (detalhes parciais)

🔗 [Release no GitHub](https://github.com/QwenLM/qwen-code/releases/tag/v0.14.5-nightly.20260419.a623655c8)

---

## 3. Issues em Evidência

### 🔴 Alta Prioridade / many reports

#### 1. [Issue #3427 — Erro 401: "Authenticated error" após login bem-sucedido](https://github.com/QwenLM/qwen-code/issues/3427)
**Por que importa:** Usuário reporta que após login aparecer como "successful", todas as requisições retornam `401 invalid access token or token expired`. Comportamento idéntico aparece em ao menos **7 outras issues do dia** (#3418, #3435, #3425, #3449, #3446, #3443, #3440, #3432, #3452).
**Comunidade reagiu:** 4 comentários, 1 👍. Usuários indicam reinstalação não resolve. **Demanda clara por correção urgente.**

#### 2. [Issue #3203 — Ajuste na política de Free Tier do Qwen OAuth](https://github.com/QwenLM/qwen-code/issues/3203)
**Por que importa:** Proposta de redução drástica da quota gratuita de 1.000 para **100 requisições/dia**, com eliminação completa do tier gratuito até 20 de abril. Impacta diretamente toda a base de usuários.
**Comunidade reagiu:** 102 comentários — **a issue mais comentada do período**, com debate intenso sobre acessibilidade e modelos de negócio.

---

### 🟡 Feature Requests Relevantes

#### 3. [Issue #2134 — VS Code Extension: suportar todos os métodos de autenticação como a CLI](https://github.com/QwenLM/qwen-code/issues/2134)
**Por que importa:** Atualmente a extensão VSCode só suporta Qwen OAuth. A CLI oferece Coding Plan, API Key e opções personalizadas. Usuários corporativos precisam de parity.
**Comunidade reagiu:** 1 comentário, 1 👍. **Alta demanda** — resolvido pelo PR #3398 em desenvolvimento.

#### 4. [Issue #2786 — Agent não responde prompts urgentes durante "思维链" (chain-of-thought)](https://github.com/QwenLM/qwen-code/issues/2786)
**Por que importa:** Quando o agent está processando reasoning,inputs urgentes do usuário são ignorados até que o processamento completo termine. Em cenários de produção, isso causa atrasos críticos.
**Comunidade reagiu:** 2 comentários, 1 👍. Bug afeta fluxos de trabalho intenso.

#### 5. [Issue #1985 — Permitir toggle do Plan Mode na extensão VSCode](https://github.com/QwenLM/qwen-code/issues/1985)
**Por que importa:** O CLI permite ciclar pelos 4 modos de aprovação via `Shift+Tab`, incluindo Plan Mode. A extensão VSCode não oferecia essa funcionalidade.
**Comunidade reagiu:** 4 comentários — **RESOLVIDO** com merge do PR #2551, alcançando feature parity.

#### 6. [Issue #3447 — Contexto não comprime automaticamente ao encher](https://github.com/QwenLM/qwen-code/issues/3447)
**Por que importa:** Ao executar tarefas longas, o contexto cresce até lotar sem compressão automática. O comando `/compress` também falha. Usuários precisam reiniciar sessão para recuperar performance.
**Comunidade reagiu:** 0 comentários, 0 👍. Bug impacta sessões extensas.

#### 7. [Issue #1855 — Sessão OAuth persiste após alternar para Coding Plan API key](https://github.com/QwenLM/qwen-code/issues/1855)
**Por que importa:** Usuários que migram de OAuth para plano pago enfrentam erros 401 porque a sessão antiga não é invalidada corretamente.
**Comunidade reagiu:** 12 comentários — **RESOLVIDO**.

#### 8. [Issue #3205 — VSCode plugin não consegue.trigger hooks que o CLI sí consegue](https://github.com/QwenLM/qwen-code/issues/3205)
**Por que importa:** Divergência de comportamento entre CLI e extensão VSCode para triggers de hook.
**Comunidade reagiu:** 2 comentários — **RESOLVIDO**.

#### 9. [Issue #1816 — Agent Swarm: spawn dinâmico de workers paralelos](https://github.com/QwenLM/qwen-code/issues/1816)
**Por que importa:** Feature experimental que permite ao agent principal criar workers leves dinamicamente para processar tarefas simples em paralelo — melhoria significativa de throughput.
**Comunidade reagiu:** 1 comentário, 1 👍. **RESOLVIDO** via PR #2886.

#### 10. [Issue #3444 — Suporte para desabilitar slash commands via settings](https://github.com/QwenLM/qwen-code/issues/3444)
**Por que importa:** Administradores em ambientes multi-tenant/enterprise/sandbox precisam de mecanismo oficial para desabilitar comandos específicos por deployment.
**Comunidade reagiu:** 0 comentários, 0 👍. **RESOLVIDO** via PR #3445.

---

## 4. Progresso de PRs Importantes

| # | PR | Descrição | Status |
|---|-----|-----------|--------|
| 1 | [#3398](https://github.com/QwenLM/qwen-code/pull/3398) | Substituir OAuth por Coding Plan / API Key provider setup na extensão VSCode | ✅ Aberto |
| 2 | [#2592](https://github.com/QwenLM/qwen-code/pull/2592) | Suporte nativo ao `/export` session no VSCode Companion (0.15.0) | ✅ Aberto |
| 3 | [#3160](https://github.com/QwenLM/qwen-code/pull/3160) | PDF text extraction fallback e parsing de Jupyter notebooks | ✅ Aberto |
| 4 | [#3451](https://github.com/QwenLM/qwen-code/pull/3451) | Normalizar PATH do Windows para servidores MCP stdio | ✅ Aberto |
| 5 | [#2548](https://github.com/QwenLM/qwen-code/pull/2548) | Expor `/skills` como slash command com picker secundário no VSCode (0.15.0) | ✅ Aberto |
| 6 | [#3214](https://github.com/QwenLM/qwen-code/pull/3214) | Substituir crawler fdir por `git ls-files` + ripgrep fallback para autocomplete `@` mentions | ✅ Aberto |
| 7 | [#3448](https://github.com/QwenLM/qwen-code/pull/3448) | Adicionar modo `--bare` de startup para CI/scripted usage | ✅ Aberto |
| 8 | [#3450](https://github.com/QwenLM/qwen-code/pull/3450) | Preservar ordenação de mensagens em stream split no VSCode companion | ✅ Aberto |
| 9 | [#3377](https://github.com/QwenLM/qwen-code/pull/3377) | Phase 2 — slash command multi-mode expansion, ACP fixes e UX improvements | ✅ Aberto |
| 10 | [#2953](https://github.com/QwenLM/qwen-code/pull/2953) | Suporte a `QWEN_HOME` env var para personalizar diretório de config | ✅ Aberto |

### PRs Recentemente Fechados (últimas 24h)
- [#3434](https://github.com/QwenLM/qwen-code/pull/3434) — `feat(cli): add session recap with /recap and auto-show on return`
- [#2551](https://github.com/QwenLM/qwen-code/pull/2551) — `feat(vscode-companion): enable Plan Mode toggle and approval UI`

---

## 5. Tendências de Pedidos de Features

Analisando as issues abertas e fechadas, emergem 4 macro-tendências:

| Tendência | Descrição | Issues Relacionadas |
|----------|-----------|---------------------|
| **🔐 Diversificação de Auth** | Comunidade exige parity de autenticação entre CLI e extensão VSCode (Coding Plan, API Key, OAuth).several requests to remove dependency on OAuth-only flow. | #2134, #3398, #3203 |
| **⚡ Agentes Paralelos** | Forte interesse em features de spawn dinâmico de sub-agentes para paralelização de tarefas (Agent Swarm). | #1816, #2886 |
| **📦 Extensão VSCode Parity** | Demanda consistente por recursos do CLI disponíveis na extensão IDE — `/skills`, `/insight`, `/export`, Plan Mode. | #2592, #2548, #2593, #1985 |
| **🔧 Operacionalização Enterprise** | Requests para controles administrativos — desabilitar slash commands (#3444), variável `QWEN_HOME` (#2953), modo bare (#3448). | #3444, #2953, #3448 |

---

## 6. Pontos de Atenção para Desenvolvedores

### 🚨 Crítico: Onda de Erros 401 de Autenticação
Múltiplos usuários reportam o mesmo padrão: login reporta sucesso, mas todas as requisições falham com `401 invalid access token or token expired`. Afeta versões **0.13.1 a 0.14.5** em todos os sistemas operacionais. **Recomendação:** Priorizar investigação de regressions no fluxo de refresh/session token OAuth.

**Issues relacionadas:** #3427, #3418, #3435, #3425, #3449, #3446, #3443, #3440, #3432, #3452

### 🐛 Bugs Recorrentes Identificados

| Bug | Descrição | Issue |
|-----|-----------|-------|
| Auth 401 pós-login | Falha de autenticação após login "bem-sucedido" via OAuth | #3427, #3418, #3425... |
| Hooks não funcionam no VSCode | Inconsistência CLI vs IDE para triggers de hook | #3205 |
| Compressão de contexto falha | `/compress` não funciona; contexto não comprime automaticamente | #3447 |
| Interrupção de prompts urgentes | Agent ignora inputs do usuário durante processing chain-of-thought | #2786 |

### 📋 Demandas Frequentes da Comunidade

1. **Parity de features entre CLI e VSCode** — Muitos comandos disponíveis na CLI (Plan Mode, `/insight`, `/skills`, `/export`) precisam ser portados para a extensão IDE
2. **Suporte a PDF e Jupyter** — Modelos text-only não suportam PDF; `.ipynb` lido como JSON cru
3. **Compressão automática de contexto** — Falha em sessões longas; necessidade de restart manual
4. **Enterprise controls** — Configurações para desabilitar comandos, customizar `QWEN_HOME`, modo bare para CI
5. **Retry persistente** — Para pipelines CI/CD, transient errors (429, 529) não deveriam terminar tasks longas

---

*Relatório gerado em 2026-04-20 com base em dados do GitHub (últimas 24h). Para atualizações em tempo real, consulte [github.com/QwenLM/qwen-code](https://github.com/QwenLM/qwen-code).*

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*