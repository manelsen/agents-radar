# Resumo diário do ecossistema de agentes de IA 2026-05-15

> Issues: 0 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-05-14 21:05 UTC

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

# Relatório Comparativo do Ecossistema Open Source de Agentes de IA

**Data de Referência:** 2026-05-15  
**Projetos Analisados:** NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw, ZeroClaw

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source demonstra vitalidade desigual em 15 de maio de 2026. Enquanto NullClaw permanece inativo, seis projetos mantêm desenvolvimento ativo com volumes significativos de issues e PRs — variando de 24 a 50 itens por período de 24h. A maioria dos projetos concentra-se em consolidação de funcionalidades de estabilidade (correção de bugs de sessão, memória e canais) em vez de lançamentos formais, indicando uma fase de maturidade. Observam-se duas tendências convergentes: (1) necessidade de gerenciamento de contexto multi-turn robusto, e (2) expansão de integrações multi-canal (Telegram, WeChat, Feishu, Discord). ZeroClaw apresenta saúde mais frágil com 6 bugs P1 abertos simultaneamente, enquanto CoPaw demonstra a cadência mais saudável de releases com v1.1.7 lançada. IronClaw destaca-se pela migração arquitetural mais ambiciosa (Reborn), enquanto NanoBot mantém a maior base de usuários com ~42,3k estrelas.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | Releases (24h) | PRs Merged | Saúde | Estrelas (est.) |
|---------|:------------:|:---------:|:--------------:|:----------:|:-----:|:---------------:|
| **NullClaw** | 0 | 0 | 0 | 0 | ⚪ Inativo | — |
| **NanoBot** | 21 | 24 | 0 | 7 | 🟢 Estável | ~42.3k |
| **Hermes Agent** | 50 | 50 | 0 | 3 | 🟡 Moderada | — |
| **PicoClaw** | 9 | 24 | 1 (nightly) | 0 | 🟡 Moderada | — |
| **IronClaw** | 50 | 50 | 0 | 3 | 🟡 Em Migração | — |
| **CoPaw** | 50 | 50 | 1 (v1.1.7) | 8 | 🟢 Estável | — |
| **ZeroClaw** | 24 | 50 | 0 | 6 | 🔴 Sob Pressão | — |

**Observações:**
- **ZeroClaw** é o único projeto em estado de saúde crítica, com 6 bugs P1 abertos simultaneamente
- **CoPaw** apresenta a melhor cadência de resolução (8 PRs merged + 10 issues fechadas em 24h)
- **NanoBot** mantém taxa de fechamento superior à de abertura (~110%), sinalizando disciplina de backlog
- **IronClaw** e **Hermes Agent** lideram em volume absoluto de atividade, mas concentração em PRs XL/L sugere ciclos de integração prolongados

---

## 3. Posicionamento do Projeto Principal (NanoBot)

### Vantagens Competitivas

| Dimensão | NanoBot | Análise |
|----------|---------|---------|
| **Tamanho da Comunidade** | ~42.3k estrelas | Maior base de usuários documentada entre os analisados |
| **Disciplina de Backlog** | Taxa close/open ~110% | Fecha mais issues do que abre — maturidade organizacional |
| **Suporte Multi-Canal** | Telegram, Feishu, MS Teams, Web | Cobertura mais ampla de canais corporativos |
| **Enterprise Readiness** | SSL config, file access control, model routing | Diferenciação clara para ambientes corporativos |

### Diferenças Técnicas Relevantes

- **Model Routing via Hooks (PR #3121):** Implementação de roteamento dinâmico de modelos sem alteração do core — arquitetura mais limpa que concorrentes que modificam código principal
- **CLI Tools (doctor, session management, /export):** Investimento temprano em Developer Experience
- **Foco em Persistência:** Commits recentes endereçam problemas de histórico de sessão e contexto após interrupção

### Fragmentação Técnica

NanoBot não apresenta sinais de migração arquitetural massiva (como IronClaw com Reborn), o que pode ser vantagem (estabilidade) ou limitação (dívida técnica acumulada). Issue #2880 (bug genérico estagnado há 38 dias) com 17 comentários indica necessidade de Improvement em triagem de bugs.

---

## 4. Focos Técnicos Compartilhados

### 4.1 Gerenciamento de Contexto e Memória

Três de sete projetos endereçam explicitamente problemas de contexto multi-turn:

| Projeto | Abordagem | Issue/PR Referência |
|---------|-----------|---------------------|
| **Hermes Agent** | Lossless Context Management (LCM) — DAG, pinning, forgetting | PR #6464 |
| **NanoBot** | Plan Tool + session management | PR #3791, #3773 |
| **CoPaw** | Backend ChromaDB → local Python; session lifecycle hooks | #4377, #4249 |
| **IronClaw** | Native storage layer (libsql + postgres) | PRs #3659-3661 |

**Análise:** A fragmentação de soluções sugere ausência de best practices consolidado. Cada projeto implementa sua própria abordagem de gerenciamento de contexto, indicando oportunidade para bibliotecas compartilhadas.

### 4.2 Multi-Canal e Integrações

| Canal | Projetos com Suporte |
|-------|---------------------|
| **Telegram** | NanoBot, Hermes Agent, PicoClaw, CoPaw, ZeroClaw, IronClaw |
| **WeChat/DingTalk** | NanoBot, CoPaw |
| **Feishu/Lark** | NanoBot, Hermes Agent |
| **Discord** | Hermes Agent, IronClaw |
| **Matrix** | Hermes Agent, ZeroClaw |
| **WhatsApp** | Hermes Agent |
| **MS Teams** | NanoBot |

**Padrão:** Telegram é o canal mais ubíquo (6/6 projetos ativos), seguido por Discord (2/6) e WeChat (2/6). A redundância sugere que integrações de Telegram são consideradas commodities.

### 4.3 Observabilidade e Developer Experience

| Área | Projetos Ativos | Features |
|------|-----------------|----------|
| **CLI Diagnostics** | NanoBot, CoPaw, ZeroClaw | `nanobot doctor`, `copaw app`, health checks |
| **Tracing (OTel)** | Hermes Agent, ZeroClaw | Turn-level trace correlation, span capture |
| **Logging/Redaction** | Hermes Agent, IronClaw | Secret redaction, channel failure logging |

**Tendência:** Observabilidade evolui de feature secundária para requisito de produção, especialmente em deployments multi-canal.

---

## 5. Análise de Diferenciação

### 5.1 Por Público-Alvo

| Projeto | Público Primário | Evidência |
|---------|------------------|-----------|
| **NanoBot** | Corporações enterprise (Windows, SSL proxies, múltiplos canais) | File access control (#3780), Feishu/Teams, SSL config |
| **CoPaw** | Desenvolvedores de automação (Browser Use, Chinese platforms) | Batch actions, WeChat/DingTalk, uv installer |
| **ZeroClaw** | Operadores de automação (cron jobs, skills, schedulers) | Cron output routing, skills framework, OTel |
| **Hermes Agent** | Usuários avançados/customizadores (plugins, themes) | L Butler, dashboard themes, holographic memory |
| **IronClaw** | Engenheiros de plataforma (migração arquitetural WASM) | Reborn architecture, ProductAdapter runtime |

### 5.2 Por Arquitetura

| Projeto | Paradigma Arquitetural | Implicação |
|---------|------------------------|------------|
| **IronClaw** | Modular WASM + Reborn | Maior flexibilidade de deployment, menor acoplamento |
| **PicoClaw** | V3 Configuration + OpenAI Responses API | Breaking changes iminentes; foco em modernização |
| **NanoBot** | Hooks-based extensibility | Extensível sem forking, mas com dívida técnica potencial |
| **CoPaw** | Lifecycle hooks + modular providers | Flexibilidade para providers customizados |

### 5.3 Matriz de Priorização Implícita

| Projeto | Estabilidade | Features | Segurança | UX |
|---------|:-----------:|:--------:|:---------:|:--:|
| **NanoBot** | 🟢 Alta | 🟡 Média | 🟡 Média | 🟡 Média |
| **Hermes Agent** | 🟡 Média | 🟢 Alta | 🟡 Média | 🟡 Média |
| **CoPaw** | 🟢 Alta | 🟢 Alta | — | 🟢 Alta |
| **ZeroClaw** | 🔴 Baixa | 🟡 Média | ⚠️ Crítica | — |
| **IronClaw** | 🟡 Média | 🟢 Alta | 🟢 Alta | — |
| **PicoClaw** | 🟡 Média | 🟡 Média | 🟡 Média | 🟡 Média |

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração

| Métrica | NanoBot | Hermes Agent | CoPaw | ZeroClaw |
|---------|:-------:|:------------:|:-----:|:--------:|
| **Issues fechadas (24h)** | ~11 | ~2-3 | ~10 | ~4 |
| **PRs merged (24h)** | 7 | 3 | 8 | 6 |
| **Release cadence** | Baixa (sem releases recentes) | Baixa | Alta (v1.1.7) | Baixa |
| **Dívida técnica visível** | 3+ stale (>30 dias) | 5+ issues antigas | Moderada | 6 P1 simultâneos |

**Ranking de Saúde:**
1. **CoPaw** — Maior velocidade + release ativo + bugs resolvidos proativamente
2. **NanoBot** — Disciplina de backlog + comunidade grande
3. **Hermes Agent** — Volume alto, mas ciclo de PRs XL/L pode indicar bottlenecks
4. **PicoClaw** — Atividade moderada, 0 PRs merged no período
5. **IronClaw** — Migração em curso, difícil avaliar saúde当下的
6. **ZeroClaw** — Crítico — 6 P1 abertos, vulnerabilidade TLS, baixa taxa de fechamento

### 6.2 Sinais de Confiança da Comunidade

| Indicador | NanoBot | Hermes Agent | CoPaw | ZeroClaw |
|-----------|:-------:|:------------:|:-----:|:--------:|
| **Issues com +5 comentários** | 3 | 4 | 4 | 4 |
| **Features com +3 reações** | 1 (#3070, #3689) | 1 (#18080, 17👍) | 1 (#3944) | 0 |
| **Bug reports detalhados** | ✅ Alta qualidade | ✅ Moderada | ✅ Alta | ✅ Moderada |
| **Contribuidores recorrentes** | chengyongru, shen-baise | ByteSide, sprmn24, dusterbloom | — | JordanTheJet |

### 6.3 Maturidade Organizacional

**NanoBot** demonstra maior maturidade organizacional com:
- Issue triaging visível (labels, priorização)
- PR #3121 (model routing) responde diretamente a issue #3070 — ciclo completo
- Equipe responsiva a bugs novos (ex.: #3790 recebido em 1 dia)

**CoPaw** demonstra maturidade técnica com:
- Release notes claros
- Breaking changes documentados
- Dependabot updates proativos (11 PRs processados)

**ZeroClaw** demonstra immaturidade organizacional:
- Vulnerabilidade TLS (#6657) aberta sem ação visível
- 6 P1 simultâneos indica sobrecarga ou subestimação
- Audit de 153 commits (#6074) em progresso há 17 dias

---

## 7. Sinais de Tendência

### 7.1 Tendências Extraídas do Feedback

| Tendência | Evidência | Implicação |
|-----------|-----------|------------|
| **Enterprise deployment** | SSL proxies, Windows file access, multi-tenant (NanoBot, IronClaw) | Mercado B2B é prioridade crescente |
| **Observabilidade como feature** | OTel tracing, span capture, CLI diagnostics | Diferenciação para operadores |
| **Model flexibility** | Roteamento dinâmico, Responses API, multi-provider | Commoditização de LLMs |
| **Skills/Plugins** | L Butler (Hermes), skills framework (ZeroClaw) | Extensibilidade como USP |
| **Browser automation** | Batch actions, file download (CoPaw) | Agentes como substitutes de RPA |

### 7.2 Padrões de Dor Comuns (Cross-Project)

| Dor | Projetos Afetados | Severidade |
|-----|-------------------|:----------:|
| **Perda de contexto ao interromper** | NanoBot, PicoClaw, CoPaw | 🟡 Média-Alta |
| **Bugs em canais específicos** | Todos | 🟡 Variável |
| **Configuração complexa** | IronClaw, PicoClaw | 🟡 Média |
| **Regressões após updates** | NanoBot, CoPaw, ZeroClaw | 🟡-Média |

### 7.3 Previsões de Curto Prazo (30-60 dias)

| Projeto | Previsão |
|---------|----------|
| **CoPaw** | Próximo release v1.2.x com foco em estabilidade de canais Chinese |
| **NanoBot** | Release 含 model routing e session management melhorado |
| **ZeroClaw** | v0.7.6 focada em skills pode não resolver P1 de estabilidade |
| **IronClaw** | Beta público do Reborn WebUI iminente |
| **Hermes Agent** | Dashboard rewrite (?) dado feedback de UI (#18080) |

### 7.4 Oportunidades de Mercado Identificadas

1. **Biblioteca compartilhada de gerenciamento de contexto** — Fragmentação atual é ineficiência
2. **Soluções de debugging para multi-canal** — Diagnóstico de falhas cross-platform
3. **Templates de deployment enterprise** — SSL, Windows, proxies são dores recorrentes
4. **Observabilidade plugável** — OTel como padrão, mas implementações proprietárias

---

## Nota Metodológica

Este relatório baseia-se exclusivamente em dados de GitHub das últimas 24h (2026-05-15) extraídos dos repositórios referenciados. Métricas de estrelas foram estimadas quando disponíveis (NanoBot: ~42.3k). Projetos sem dados de estrelas (NullClaw inativo) foram marcados como inativos ou excluded de comparações quantitativas. A ausência de dados financeiros ou de uso

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-05-15

---

## 1. Panorama do Dia

O projeto NanoBot apresenta **alta atividade** em 15 de maio de 2026, com 21 issues e 24 PRs atualizados nas últimas 24h. Não houve novos lançamentos, mas o desenvolvimento permanece intenso com 17 PRs abertos — incluindo avanços significativos em ferramentas de planejamento de tarefas, streaming de objetivos e gerenciamento de sessões via CLI. A base de ~42,3k estrelas continua atraindo contribuições diversas, desde correções de segurança até features de usabilidade corporativa. O ecossistema mostra maturidade com correções em múltiplos canais (Telegram, Feishu, MS Teams) e melhorias de infraestrutura (SSL, tokenizers locais).

---

## 2. Lançamentos

**Nenhum release nas últimas 24h.**

O projeto não publicou novas versões desde a última atualização. Isso indica foco em consolidação de PRs abertos antes de um próximotag.

---

## 3. Progresso do Projeto

### PRs Merged/Closed Recentemente (7)

| # | PR | Autor | Impacto |
|---|-----|-------|---------|
| [#3779](https://github.com/HKUDS/nanobot/pull/3779) | fix(agent): persist shortcut commands without polluting LLM context | chengyongru | Corrige persistência de comandos como `/help` e `/pairing` na história do WebUI |
| [#3775](https://github.com/HKUDS/nanobot/pull/3775) | fix(feishu): register no-op handlers for bot member events | chengyongru | Resolve erros "processor not found" ao adicionar/remover bots em grupos Feishu |
| [#3786](https://github.com/HKUDS/nanobot/pull/3786) | fix(telegram): wire transcription config fields | liflovs | Permite configuração de transcrição de áudio via config.json no Telegram |
| [#3783](https://github.com/HKUDS/nanobot/pull/3783) | fix(web): add ssl_verify config | HengWeiBin | Habilita operação atrás de proxies corporativos com SSL interceptado |
| [#3773](https://github.com/HKUDS/nanobot/pull/3773) | feat(cli): add doctor, session management, /export | shen-baise | Adiciona diagnóstico de saúde, gerenciamento e export de sessões |
| [#3483](https://github.com/HKUDS/nanobot/pull/3483) | docs: OpenCode Go provider entries | flyzstu | Documenta novo provedor OpenCode Go |
| [#3121](https://github.com/HKUDS/nanobot/pull/3121) | feat(agent): model routing via AgentHookContext | JiajunBernoulli | Implementa roteamento dinâmico de modelos via hooks |

**Destaque estratégico:** A merged do PR #3121 responde diretamente à issue #3070 (solicitação de roteamento de modelos estilo OpenRouter), permitindo seleção de modelos baseada em complexidade/tarefa sem modificar código core.

---

## 4. Temas Quentes da Comunidade

### Issues/PRs com Mais Comentários

| # | Tipo | Título | Comentários | Tendência |
|---|------|--------|-------------|-----------|
| [#2880](https://github.com/HKUDS/nanobot/issues/2880) | Issue | [BUG] 无论发什么消息都回复报错 | 17 | 🔴 Estagnada (stale) |
| [#3689](https://github.com/HKUDS/nanobot/issues/3689) | Issue | 中断会话丢失上一轮会话的聊天记录 | 5 | 🟢 Resolvida |
| [#3780](https://github.com/HKUDS/nanobot/issues/3780) | Issue | 支持更安全的文件访问控制 (Windows) | 3 | 🟡 Em análise |
| [#3070](https://github.com/HKUDS/nanobot/issues/3070) | Issue | 模型路由功能 (OpenRouter-like) | 3 | 🟢 Resolvida (PR #3121) |
| [#3791](https://github.com/HKUDS/nanobot/pull/3791) | PR | feat(agent): add plan tool | 0+ | 🔵 Em revisão |
| [#3788](https://github.com/HKUDS/nanobot/pull/3788) | PR | goal_state streaming, WebUI | 0+ | 🔵 Em revisão |

### Análise das Demandas

**Contexto de interrupção (#3689):** Usuários precisam que o bot lembre contexto e estado ao interromper tarefas. A resolved indicates que a feature de plano/progresso (PR #3791) pode endereçar isso diretamente.

**Roteamento de modelos (#3070):** A merged do PR #3121 implementa roteamento via hooks, permitindo economia de custos em tarefas simples — demanda recorrente em ambientes empresariais.

**Segurança corporativa Windows (#3780):** Pequenas empresas com servidores Windows sem sandbox precisam de controles de acesso a arquivos mais granulares que `restrictWorkspace` oferece.

---

## 5. Bugs e Estabilidade

### Bugs Abertos

| # | Severidade | Título | Canal | Status |
|---|------------|--------|-------|--------|
| [#2880](https://github.com/HKUDS/nanobot/issues/2880) | 🔴 Alta | Erro genérico em todas as mensagens | Geral | Stale (17 comentários) |
| [#3790](https://github.com/HKUDS/nanobot/issues/3790) | 🟡 Média | WebUI - display corrompido após update | WebUI | Novo |
| [#3760](https://github.com/HKUDS/nanobot/issues/3760) | 🟡 Média | deepseek-v4 reasoning_content 400 error | API | Closed |
| [#3754](https://github.com/HKUDS/nanobot/issues/3754) | 🟡 Média | Model ignora arquivos externos | Agent | Closed |
| [#3718](https://github.com/HKUDS/nanobot/issues/3718) | 🟡 Média | Stream output sem streamid (cron) | API | Novo |
| [#2920](https://github.com/HKUDS/nanobot/issues/2920) | 🟢 Baixa | Hardcoded fallback no MS Teams | Teams | Closed |

### Regressões Potenciais

**Issue #2880** requer atenção imediata — erro "无论发什么消息都回复报错" persiste mesmo após reinstall/clear, afetando experiência de novos usuários. O fato de estar stale (sem resposta do mantenedor) é preocupante.

**Issue #3790** — display corruption no WebUI após update para 5.13 indica possível quebra em renderização de markdown/streaming.

### Correções de Estabilidade Recentes

- [#3779](https://github.com/HKUDS/nanobot/pull/3779) — Persistência de comandos encurtados
- [#3775](https://github.com/HKUDS/nanobot/pull/3775) — Handler para eventos de membros em Feishu
- [#3786](https://github.com/HKUDS/nanobot/pull/3786) — Transcrição Telegram

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features em PRs Abertos

| # | Feature | Complexidade | Alinhamento Estratégico |
|---|---------|--------------|------------------------|
| [#3791](https://github.com/HKUDS/nanobot/pull/3791) | Plan Tool — decomposição de tarefas multi-step | Alta | ⭐ Core agent |
| [#3788](https://github.com/HKUDS/nanobot/pull/3788) | Goal state streaming + WebUI composer | Alta | ⭐ UX/Productivity |
| [#3460](https://github.com/HKUDS/nanobot/pull/3460) | LongTaskTool — loop ReAct meta | Alta | ⭐ Core agent |
| [#3785](https://github.com/HKUDS/nanobot/pull/3785) | OpenCode Go gateway | Média | Provedores |
| [#3769](https://github.com/HKUDS/nanobot/pull/3769) | nanobot doctor CLI | Média | DevEx |
| [#3774](https://github.com/HKUDS/nanobot/pull/3774) | Chat-native DM pairing | Média | Segurança |
| [#3777](https://github.com/HKUDS/nanobot/pull/3777) | Session management CLI | Baixa | DevEx |
| [#3778](https://github.com/HKUDS/nanobot/pull/3778) | /export slash command | Baixa | DevEx |

### Sinais de Roadmap Emergentes

1. **Agent Autonomy:** Plan Tool (#3791) + LongTaskTool (#3460) indicam foco em tarefas de longo prazo e autonomia.
2. **Observabilidade:** nanobot doctor (#3769), /insights (#3731) e streaming de progresso (#3698) sugerem push por debugging/improvements.
3. **Enterprise Readiness:** File access control (#3780), DM policy (#3768), SSL config (#3784) = mercado corporativo.
4. **Multi-Provider:** OpenCode Go gateway (#3785), roteamento dinâmico (#3121 merged) = flexibilidade de deployment.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Categoria | Descrição | Frequência | Issue |
|-----------|-----------|------------|-------|
| **Perda de contexto** | Ao interromper o bot, histórico se perde e ele "esquece" o que estava fazendo | Alta | [#3689](https://github.com/HKUDS/nanobot/issues/3689) |
| **Custo de modelos** | Usuários querem usar modelos baratos para tarefas simples | Alta | [#3070](https://github.com/HKUDS/nanobot/issues/3070) |
| **Segurança Windows** | Empresas Windows não têm sandbox, risco de manipulação de arquivos | Média | [#3780](https://github.com/HKUDS/nanobot/issues/3780) |
| **Erro enigmático** | Mensagens de erro não informativas ("processor not found", erros genéricos) | Média | [#2880](https://github.com/HKUDS/nanobot/issues/2880), [#3772](https://github.com/HKUDS/nanobot/issues/3772) |
| **Compatibilidade coder models** | Modelos de código (glm5, qwen3.5) causam erros de JSON format | Média | [#1998](https://github.com/HKUDS/nanobot/issues/1998) |
| **DM security** | Qualquer pessoa pode enviar DMs ao bot sem controle | Baixa | [#3768](https://github.com/HKUDS/nanobot/issues/3768) |

### Cenários de Uso Emergentes

1. **Análise de dados corporativa** — múltiplos usuários compartilhando memória e workspace
2. **Assistante pessoal multi-turn** — sessões longas com interrupções e retomada
3. **Deployment em infraestrutura restritiva** — proxies SSL, Windows servers

### Satisfação/Insatisfação

- 🟢 **Satisfeitos:** Funcionalidade core de agente, suporte a múltiplos canais
- 🟡 **Neutros:** Documentação de provedores (melhorando), CLI tools
- 🔴 **Insatisfeitos:** Mensagens de erro unhelpful, perda de contexto, setup enterprise

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta/Estagnadas

| # | Idade | Título | Prioridade | Recomendação |
|---|-------|--------|------------|--------------|
| [#2880](https://github.com/HKUDS/nanobot/issues/2880) | ~38 dias | [BUG] Erro genérico em todas as mensagens | 🔴 Alta | Triagem urgente — impacta novos usuários |
| [#1998](https://github.com/HKUDS/nanobot/issues/1998) | ~62 dias | Compatibilidade coder models | 🟡 Média | Verificar se ainda reproduz com versões atuais |
| [#2920](https://github.com/HKUDS/nanobot/issues/2920) | ~37 dias | Hardcoded fallback MS Teams | 🟡 Média | Closed mas pode precisar validação |
| [#2898](https://github.com/HKUDS/nanobot/issues/2898) | ~38 dias | Chamada报错 (erro call) | 🟡 Média | Sem detalhes suficientes para triagem |

### PRs Abertos Aguardando Review

| # | Idade | Título | Impacto | Bloqueadores |
|---|-------|--------|---------|--------------|
| [#3791](https://github.com/HKUDS/nanobot/pull/3791) | 1 dia | Plan Tool | ⭐⭐⭐ | None apparent |
| [#3788](https://github.com/HKUDS/nanobot/pull/3788) | 1 dia | Goal state streaming | ⭐⭐⭐ | Depends on #3791? |
| [#3774](https://github.com/HKUDS/nanobot/pull/3774) | 1 dia | Chat-native DM pairing | ⭐⭐ | Depends on #3779 |
| [#3741](https://github.com/HKUDS/nanobot/issues/3741) | 4 dias | Provider-hosted web search | ⭐⭐ | Nenhuma discussão |

---

## Métricas Resumidas

| Indicador | Valor | Tendência |
|-----------|-------|-----------|
| Issues ativas (24h) | 21 | → Estável |
| PRs ativas (24h) | 24 | → Estável |
| Releases (7 dias) | 0 | ↓ Sem release |
| Taxa close/open | 11/10 (~110%) | 🟢 Positivo |
| Issues stale (>30 dias) | 3+ | 🟡 Atenção |
| PR

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent
## NousResearch/hermes-agent — 2026-05-15

---

## 1. Panorama do Dia

O projeto Hermes Agent mantém um alto nível de atividade com **50 issues e 50 PRs atualizados nas últimas 24h**, indicando uma comunidade engajada e desenvolvimento contínuo. Não houve novos lançamentos hoje, mas o volume de atividade sugere preparação para uma próxima release. A distribuição entre bugs (P1-P3) e features (P3) permanece equilibrada, com destaque para problemas críticos P1 relacionados ao gateway e plataformas (Matrix, Discord, Gateway compression). Três PRs foram fechados com sucesso (todos duplicados), evidenciando contribuição ativa. O ecossistema de plugins L Butler continua sendo um foco de evolução, com múltiplas melhorias merged relacionadas a recuperação de erros e experiência do usuário.

---

## 2. Lançamentos

**Nenhum novo release nas últimas 24h.**

O projeto não publicou versões formais hoje. Dados os PRs abertos em stage (especialmente relacionados a correções críticas de P1), é provável que um release esteja em preparação para breve. Recomenda-se monitorar o repositório para announcement.

---

## 3. Progresso do Projeto

### PRs Fechados/Merged Hoje

| PR | Autor | Descrição | Impacto |
|----|-------|-----------|---------|
| [#25928](https://github.com/NousResearch/hermes-agent/pull/25928) | ByteSide | Email HTML signature via `EMAIL_SIGNATURE_HTML_FILE` | Funcionalidade esperada; marcação como duplicado indica trabalho paralelo |
| [#25927](https://github.com/NousResearch/hermes-agent/pull/25927) | ByteSide | WhatsApp E.164 → JID conversion para `send_message` | Resolve problema de envio para números telefônicos |
| [#25926](https://github.com/NousResearch/hermes-agent/pull/25926) | ByteSide | Docker: pre-install WhatsApp bridge node_modules | Corrige falha silenciosa de conexão WhatsApp em containers com `HERMES_UID` customizado |

### PRs Abertos de Destaque

| PR | Autor | Categoria | Descrição |
|----|-------|-----------|-----------|
| [#25904](https://github.com/NousResearch/hermes-agent/pull/25904) | sprmn24 | **P1 Security** | `fix(cron)`: log e redaction de secrets em falha — previne vazamento de API keys |
| [#25945](https://github.com/NousResearch/hermes-agent/pull/25945) | doublerebel | P2 Bug | Filtra items completed/cancelled na hidratação de todos |
| [#25947](https://github.com/NousResearch/hermes-agent/pull/25947) | sprmn24 | P2 Bug | Cron: log de falhas de resolução de canal — elimina entrega silenciosa a alvos inválidos |
| [#25940](https://github.com/NousResearch/hermes-agent/pull/25940) | liuhao1024 | P2 Bug | Remove sequences OSC-8 do welcome banner após `/clear`/`/reset` |
| [#6464](https://github.com/NousResearch/hermes-agent/pull/6464) | dusterbloom | P3 Feature | **Lossless Context Management (LCM)** — arquitetura plugin para ContextEngine com suporte a DAG, pinning e forgetting |
| [#23221](https://github.com/NousResearch/hermes-agent/pull/23221) | dusterbloom | P3 Bug | 4 correções no holographic memory (FTS5 sanitization, tokens hifenizados, Unicode) |
| [#25198](https://github.com/NousResearch/hermes-agent/pull/25198) | erhnysr | P2 Bug | **Telegram flood control**: mantém coalescing de progresso após `RetryAfter` |
| [#25555](https://github.com/NousResearch/hermes-agent/pull/25555) | erhnysr | P2 Bug | Pin Python version no `uv sync` para Windows — previne incompatibilidade com pywinpty |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (Comentários + Reactions)

| Issue | Tipo | P | Comentários | 👍 | Título |
|-------|------|---|-------------|-----|--------|
| [#18080](https://github.com/NousResearch/hermes-agent/issues/18080) | Feature | P3 | 9 | 17 | **Improved Themes for Dashboard** — currently hard to read |
| [#9792](https://github.com/NousResearch/hermes-agent/issues/9792) | Bug | P2 | 7 | 0 | hermes command not found após virtualenv migration |
| [#25594](https://github.com/NousResearch/hermes-agent/issues/25594) | Bug | P2 | 4 | 0 | Vision model detection missing para custom providers |
| [#25495](https://github.com/NousResearch/hermes-agent/issues/25495) | Bug | P1 | 4 | 1 | Matrix/Synapse broken na imagem Docker oficial |
| [#25833](https://github.com/NousResearch/hermes-agent/issues/25833) | Feature | P3 | 3 | 0 | Self-created skills: garantias de correção e consistência |

### Análise dos Temas Principais

**1. UI/UX do Dashboard (#18080)** — Com 17 👍, este é o issue mais votato. Usuários reclamam que os temas atuais (Midnight, Ember, Mono, Cyberpunk, Rose) usam fontes serif pequenas com pouco contraste, dificultando leitura. A demanda é por seleção de fontes configurável e contraste adequado. Este é um indicador claro de que a experiência visual do dashboard precisa de atenção.

**2. Compatibilidade de Providers (#25594, #9792)** — Problemas com virtualenv migration e detection de modelos vision para providers customizados revelam fragmentação entre diferentes ambientes de deployment.

**3. Plugin L Butler (#25833)** — A feature de auto-criação de skills carece de garantias mechanism-level. A comunidade reconhece o poder da funcionalidade mas exige robustez.

---

## 5. Bugs e Estabilidade

### Bugs P1 (Críticos — Requerem Atenção Imediata)

| Issue | Plataforma | Descrição | Status |
|-------|------------|-----------|--------|
| [#25495](https://github.com/NousResearch/hermes-agent/issues/25495) | Docker | Matrix/Synapse broken na imagem oficial — trava em "fixing ownership:1000" | Aberto |
| [#25921](https://github.com/NousResearch/hermes-agent/issues/25921) | Gateway | **Loop infinito de compressão** após session split — history do parent é reutilizado | Aberto |
| [#25935](https://github.com/NousResearch/hermes-agent/issues/25935) | Discord | Falha com HTTP 400 ao enviar imagens em formato não PNG/JPEG/GIF/WEBP ou misturadas com documentos | Aberto |

### Bugs P2 (Altos — Impacto Significativo)

| Issue | Componente | Descrição |
|-------|------------|-----------|
| [#9792](https://github.com/NousResearch/hermes-agent/issues/9792) | CLI/Docker | hermes command not found em shells externos após virtualenv |
| [#25594](https://github.com/NousResearch/hermes-agent/issues/25594) | Agent/Vision | HTTP 400 'text is not set' em modelos non-vision |
| [#25859](https://github.com/NousResearch/hermes-agent/issues/25859) | CLI/Gateway | Dois timeouts de clarify configurados independentemente causam auto-decide após 120s |
| [#25188](https://github.com/NousResearch/hermes-agent/issues/25188) | Telegram | Flood control para progress edits quebra coalescing — mensagens duplicadas |
| [#25886](https://github.com/NousResearch/hermes-agent/issues/25886) | Feishu/Lark | Botões de autorização em cards falham com error 200343 |
| [#25836](https://github.com/NousResearch/hermes-agent/issues/25836) | Telegram | Typing indicator desaparece no meio de respostas longas |
| [#18260](https://github.com/NousResearch/hermes-agent/issues/18260) | TUI | Status bar de context window não atualiza durante turns |
| [#14927](https://github.com/NousResearch/hermes-agent/issues/14927) | MCP Tools | Schema normalization deve reparar `additionalProperties` string |

### Bugs P3 (Médios)

- [#25848](https://github.com/NousResearch/hermes-agent/issues/25848): LiteLLM proxy: probing admin-gated `/v1/models` unconditional
- [#25939](https://github.com/NousResearch/hermes-agent/issues/25939): OSC-8 hyperlink garbage visível no welcome banner após `/clear`
- [#25910](https://github.com/NousResearch/hermes-agent/issues/25910): Dashboard mutations precisam de confirmação e audit records
- [#25276](https://github.com/NousResearch/hermes-agent/issues/25276): Open WebUI bootstrap precisa de warning de privacidade

**Prioridade de Correção Recomendada:** O loop infinito de compressão (#25921) e o Docker image quebrado (#25495) são os mais críticos para estabilidade.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Identificadas

| Issue | Componente | Descrição | Viabilidade |
|-------|------------|-----------|-------------|
| [#25840](https://github.com/NousResearch/hermes-agent/issues/25840) | Agent/Memory | **Branch Memory**: camada topic-based entre global e session history | Alta — arquitetura existe |
| [#25946](https://github.com/NousResearch/hermes-agent/issues/25946) | Gateway | **Mattermost tab** como alternativa a Slack/Notion — team messaging open source | Média — integração extensiva |
| [#12785](https://github.com/NousResearch/hermes-agent/issues/12785) | CLI | Headers/User-Agent configuráveis para APIs third-party ( Cloudflare WAF bypass) | Alta — simples e direto |
| [#25830](https://github.com/NousResearch/hermes-agent/issues/25830) | CLI | qrcode como dependência default | Baixa — issue usuário |
| [#25944](https://github.com/NousResearch/hermes-agent/pull/25944) | Email | HTML signature via arquivo (`EMAIL_SIGNATURE_HTML_FILE`) | **Merged/Closed** |

### Sinais de Evolução do Roadmap

1. **Provider Ecosystem Expansion**: xAI Coding Plan OAuth (#25941) demonstra tendência de ampliar provedoressupported.
2. **Memory Architecture**: LCM (#6464) + Branch Memory (#25840) indicam investimento em gestão de contexto mais sofisticada.
3. **Dashboard Maturity**: Issues de polling centralizado (#25911), bundle splitting (#25912) e QA automatizado (#25909) mostram foco em qualidade de UI.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Categoria | Problema | Evidência |
|-----------|----------|-----------|
| **UI/Dashboard** | Temas hard to read, contraste insuficiente | #18080 (17 👍) |
| **Deploy/Docker** | Quebras em imagens oficiais após updates, Hermes UID mismatch | #25495, #25942 |
| **Platforma: Telegram** | Flood control, typing indicator, progress coalescing | #25188, #25836 |
| **Platforma: WhatsApp** | Fails to connect silenciosamente em containers | #25926 (closed) |
| **Platforma: Discord** | Falha em formatos de imagem | #25935 |
| **Configuração** | Keys de configuração duplicadas causam comportamento inesperado | #25859 |
| **Privacidade** | Open WebUI bootstrap confunde usuários sobre coleta de dados | #25276 |
| **Integração** | Blocked por Cloudflare WAF por User-Agent padrão | #12785 |

### Cenários de Uso Emergentes

- **Multi-platform deployment**: Usuários rodam Hermes em Docker com múltiplos canais (Matrix, Telegram, Discord, Feishu, WhatsApp)
- **Branded mailboxes**: Deploy como conta de persona/on-call com assinatura HTML customizada
- **Self-hosted collaboration**: Mattermost como alternativa open source a Slack
- **Custom providers**: Integração com LiteLLM proxies e providers não-listados

### Indicadores de Satisfação

- 3 PRs independentes (mesmo autor) para WhatsApp e Email sugerem produção bem recebida
- Issues L Butler com 2-3 comentários indicam adoção ativa da feature
- Holographic memory bug fixes (#23221) com community validation demonstra confiança no plugin

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Baixa Atividade (Possível Negligência)

| Issue | Idade | P | Status | Link |
|-------|-------|---|--------|------|
| #9792 | ~30 dias | P2 | Aberto | [Link](https://github.com/NousResearch/hermes-agent/issues/9792) |
| #14927 | ~21 dias | P2 | Aberto | [Link](https://github.com/NousResearch/hermes-agent/issues/14927) |
| #12785 | ~25 dias | P3 | Aberto | [Link](https://github.com/NousResearch/hermes-agent/issues/12785) |
| #18260 | ~14 dias | P2 | Aberto | [Link](https://github.com/NousResearch/hermes-agent/issues/18260) |
| #18080 | ~15 dias | P3 | Aberto (hot) | [Link](https://github.com/NousResearch/hermes-agent/issues/18080) |

### PRs Antigos em Status Aberto

| PR | Idade | Descrição | Prioridade |
|----|-------|-----------|------------|
| [#6464](https://github.com/NousResearch/hermes-agent/pull/6464) | ~36 dias | Lossless Context Management (LCM) — feature architecture | P3, mas estratégico |
| [#13374](https://github.com/NousResearch/hermes-agent/pull/13374) | ~24 dias | TUI follow compression tips | P2 |
| [#133

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-05-15

**Repositório:** [sipeed/picoclaw](https://github.com/sipeed/picoclaw)  
**Período:** Últimas 24h

---

## 1. Panorama do Dia

O projeto PicoClaw mantém alta atividade com **24 PRs atualizados** e **9 Issues** no período, sinalizando desenvolvimento intenso. Uma nova **nightly build (v0.2.8-nightly.20260514)** foi publicada, indicando evolução contínua da versão 0.2.x. A comunidade demonstra preocupação com problemas de estabilidade — especialmente relacionados a sessões, histórico de conversas e integrações de provedores — enquanto simultaneamente impulsiona melhorias em streaming web, configuração V3 e integrações com canais como Telegram. O equilíbrio entre correções de bugs críticos (como race conditions em sessões e falhas de LLM sem retry) e adição de features novas sugere um projeto em fase de maturidade acelerada.

---

## 2. Lançamentos

### Nova Release

| Versão | Tipo | Data |
|--------|------|------|
| **v0.2.8-nightly.20260514.eb065307** | Nightly Build | 2026-05-14 |

**Changelog:** https://github.com/sipeed/picoclaw/compare/v0.2.8...main

> ⚠️ **Aviso:** Este é um build automatizado e pode ser instável. Use com cautela.

**Observações:**
- Trata-se de uma nightly build pré-definitiva da série v0.2.8
- Sem notas de migração formal — build ainda não estabilizado
- Recomenda-se acompanhamento do changelog para trackear mudanças antes da release oficial

---

## 3. Progresso do Projeto

### PRs Fechados/Merged (1)

Nenhum PR foi merged no período. Dos 24 PRs atualizados, todos permanecem em **estado OPEN**, sugerindo que a equipe está em fase de revisão/atraso na integração de mudanças.

### PRs em Destaque (Abertos)

| PR | Título | Domínio | Relevância |
|----|--------|---------|------------|
| [#2766](https://github.com/sipeed/picoclaw/pull/2766) | Sync documentation to V3 config format | Docs | **Alta** — Atualiza 26 arquivos para novo schema |
| [#2587](https://github.com/sipeed/picoclaw/pull/2587) | Add Pico web chat streaming and scroll UX | Frontend/UX | **Alta** — Streaming E2E e scroll melhorado |
| [#2551](https://github.com/sipeed/picoclaw/pull/2551) | Standardize channel identification | Arquitetura | **Alta** — Decoupling channel names de provider types |
| [#2779](https://github.com/sipeed/picoclaw/pull/2779) | Add topic group trigger overrides (Telegram) | Canal | **Média** — Flexibilidade para forum topics |
| [#2778](https://github.com/sipeed/picoclaw/pull/2778) | Add working summary tool feedback | UX/Agent | **Média** — Feedback progressivo em tempo real |
| [#2836](https://github.com/sipeed/picoclaw/pull/2836) | Fix PowerShell encoding bypass via iex injection | Segurança | **Crítica** — CVE potencial |

### Atualizações de Dependências (Automáticas)

Dependabot processou **11 PRs de atualização** em 14/05:
- **Frontend:** tailwindcss 4.3.0, typescript-eslint 8.59.3, prettier-plugin-tailwindcss 0.8.0, jotai 2.20.0, vite 8.0.13
- **Go:** telego 1.9.0, golang.org/x/net 0.54.0, gronx 1.19.7, larksuite/oapi-sdk-go/v3 3.7.5, modernc.org/sqlite 1.50.1

> 🔗 PRs: [#2872](https://github.com/sipeed/picoclaw/pull/2872), [#2871](https://github.com/sipeed/picoclaw/pull/2871), [#2870](https://github.com/sipeed/picoclaw/pull/2870), [#2869](https://github.com/sipeed/picoclaw/pull/2869), [#2868](https://github.com/sipeed/picoclaw/pull/2868), [#2866](https://github.com/sipeed/picoclaw/pull/2866), [#2867](https://github.com/sipeed/picoclaw/pull/2867), [#2865](https://github.com/sipeed/picoclaw/pull/2865), [#2864](https://github.com/sipeed/picoclaw/pull/2864), [#2863](https://github.com/sipeed/picoclaw/pull/2863)

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| Issue | Título | Comentários | Status |
|-------|--------|-------------|--------|
| [#629](https://github.com/sipeed/picoclaw/issues/629) | [BUG] Didn't retry if meet LLM call failed | **14** | 🟡 OPEN |
| [#2171](https://github.com/sipeed/picoclaw/issues/2171) | [Refactor] OpenAI Responses API migration | **11** | ✅ CLOSED |
| [#2702](https://github.com/sipeed/picoclaw/issues/2702) | [BUG] Multi-user group channels: sender attribution missing | **3** | 🟡 OPEN |
| [#2775](https://github.com/sipeed/picoclaw/issues/2775) | [Feature] Sub Agent role confusion from AGENT.md inheritance | **2** | 🟡 OPEN |

### Análise de Demandas

1. **Migração para OpenAI Responses API (#2171)** — Closed ✅
   - Demanda validada: comunidade concorda que Responses API é o caminho futuro
   - Implementação em andamento (provavelmente refletida nos PRs ativos)

2. **Retry em falhas de LLM (#629)** — OPEN
   - 14 comentários indicam frustração recorrente
   - Usuários experimentam HTTP 500 em tarefas longas sem retry automático
   - **Severidade:** Alta — impacto em reliability em produção

3. **Confusão de roles em Sub-Agents (#2775)** — OPEN
   - Problema arquitetural em multi-agent setup
   - Agentes filho (Planner, Builder, etc.) herdam AGENT.md do root, causando identidade incorreta
   - Demanda crescente por hierarquia de prompts separada

---

## 5. Bugs e Estabilidade

### Issues de Bug Reportadas (7 abertas)

| Severidade | Issue | Título | Canal/Domínio |
|------------|-------|--------|---------------|
| 🔴 Alta | [#629](https://github.com/sipeed/picoclaw/issues/629) | LLM call failed sem retry | Provider |
| 🔴 Alta | [#2721](https://github.com/sipeed/picoclaw/issues/2721) | Session history race (`tool_use_id` 400) | Provider/Agent |
| 🟡 Média | [#2702](https://github.com/sipeed/picoclaw/issues/2702) | Sender attribution missing em group channels | Channel |
| 🟡 Média | [#2859](https://github.com/sipeed/picoclaw/issues/2859) | Xiaomi MIMO integration errors | Provider (WeChat) |
| 🟡 Média | [#2798](https://github.com/sipeed/picoclaw/issues/2798) | PDF stream data error no Telegram | Channel/Telegram |
| 🟡 Média | [#2795](https://github.com/sipeed/picoclaw/issues/2795) | Histórico mostra só última mensagem | Session |
| 🟡 Média | [#2787](https://github.com/sipeed/picoclaw/issues/2787) | Mensagens sem timestamp individual | Session |

### Padrões Identificados

1. **Problemas de Session/Histórico** — 3 issues relacionadas (#2721, #2795, #2787)
   - Todos relacionados a estado de sessão e persistência de mensagens
   - Sugere dívida técnica em gerenciamento de estado

2. **Race Conditions** — Issue #2721 reaberta
   - Regressão confirmada em v0.2.5 após suposta correção em #704
   - **Atenção:** Problema persistente indica complexidade arquitetural

3. **Integrações de Canais** — Telegram (#2798), WeChat (#2859)
   - Problemas específicos de canal com mídia (PDF) e modelos alternativos
   - Incompatibilidades com formatos proprietários

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Solicitadas

| Issue | Título | Potencial Impacto |
|-------|--------|-------------------|
| [#2775](https://github.com/sipeed/picoclaw/issues/2775) | Sub Agent AGENT.md role inheritance | **Alto** — Arquitetura multi-agent |
| [#2779](https://github.com/sipeed/picoclaw/pull/2779) | Telegram topic group overrides | **Médio** — Controle fino de triggers |
| [#2587](https://github.com/sipeed/picoclaw/pull/2587) | Web chat streaming UX (PR) | **Alto** — Experiência web |

### Sinais de Roadmap Detectados

1. **V3 Configuration Format** — Confirmado via PR #2766
   - `api_key` → `api_keys` (array)
   - `channels` → `channel_list`
   - Documentação migrando ativamente

2. **OpenAI Responses API** — Closed #2171
   - Migração em progresso
   - Provavelmente será feature da v0.3.x

3. **Streaming E2E** — PR #2587 em desenvolvimento
   - Experiência web aprimorada
   - Feedback visual em tempo real via working summary (PR #2778)

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Dor | Cenário | Impacto |
|-----|---------|---------|
| **Falha sem retry** | Tarefas longas em produção com HTTP 500 | 🔴 Usuários perdem conversações |
| **Histórico incompleto** | Usuários verificam conversas passadas e veem só última mensagem | 🟡 Perda de contexto em multi-turn |
| **Role confusion** | Usuários multi-agent confundem identidade dos Sub-Agents | 🟡 Afeta qualidade de output |
| **PDF no Telegram** | Workflows com documentos falham em PicoClaw mas funcionam em OpenClaw | 🟡 Specificidade de implementação |

### Cenários de Uso Reportados

- **Multi-turn conversations via WeChat** — Xiaomi MIMO integração (#2859)
- **Grupos Discord com multi-usuário** — Atribuição de sender (#2702)
- **Telegram forum topics** — Controle de triggers (#2779)
- **Scheduled cron jobs** — Feedback indesejado (#2777)

### Satisfação/Insatisfação

- **Frustração acumulada** com issue #629 (14 comentários) sugere que retry mechanism é demanda antiga
- **Reabertura de #2721** indica que comunidade sente que bug não foi resolvido adequadamente
- **Atividade intensa de PRs** demonstra contributors ativos e interesse no projeto

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou "stale"

| Issue | Título | Criado | Status | Tempo |
|-------|--------|--------|--------|-------|
| [#629](https://github.com/sipeed/picoclaw/issues/629) | LLM call failed sem retry | 2026-02-22 | OPEN | ~3 meses |
| [#2171](https://github.com/sipeed/picoclaw/issues/2171) | OpenAI Responses API | 2026-03-30 | CLOSED | ~1.5 meses |
| [#2702](https://github.com/sipeed/picoclaw/issues/2702) | Sender attribution | 2026-04-28 | OPEN | ~17 dias |
| [#2775](https://github.com/sipeed/picoclaw/issues/2775) | Sub Agent role confusion | 2026-05-05 | OPEN | ~10 dias |
| [#2798](https://github.com/sipeed/picoclaw/issues/2798) | PDF Telegram | 2026-05-07 | OPEN | ~8 dias |
| [#2795](https://github.com/sipeed/picoclaw/issues/2795) | Histórico incompleto | 2026-05-07 | OPEN | ~8 dias |
| [#2787](https://github.com/sipeed/picoclaw/issues/2787) | Timestamps missing | 2026-05-06 | OPEN | ~9 dias |

### Priorização Recomendada

1. 🔴 **#629** — 3 meses sem resolução + 14 comentários = prioridade crítica
2. 🔴 **#2721** — Bug regressivo em produção, re-aberto recentemente
3. 🟡 **#2795** — Affecta usabilidade básica de histórico
4. 🟡 **#2775** — Arquitetura multi-agent será cada vez mais relevante

---

## Métricas Resumidas

| Indicador | Valor | Tendência |
|-----------|-------|-----------|
| Issues ativas | 7 | Neutra |
| Issues fechadas (24h) | 2 | — |
| PRs abertos | 23 | Alta |
| PRs merged (24h) | 0 | Baixa |
| Releases | 1 nightly | Constante |
| Bugs reportados | 7 | — |
| Features/enhancements | 2+ | — |
| Dependabot PRs | 11 | Alta |

---

**Nota:** Este relatório é baseado em dados de GitHub das últimas 24h. Para análise histórica ou comparativa, consultar relatórios anteriores.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>


# Relatório do Projeto IronClaw — 2026-05-15

---

## 1. Panorama do Dia

O IronClaw mantém uma atividade intensa no branch `reborn-integration`, com 50 issues e 50 PRs atualizados nas últimas 24h. O projeto avança na migração para a arquitetura **Reborn**, com trabalho coordenado em múltiplos módulos: host-kernel, inbound-workflow, events-streaming e channels WASM. Não houve lançamentos oficiais hoje, mas três PRs pequenos foram fechados (dois fixes de redactions e um revert), sinalizando disciplina de quality assurance. A grande maioria da atividade concentra-se em PRs abertos de tamanho XL/L, sugerindo um ciclo de integração pesado mas controlado.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

- A equipe mantém o foco em landar PRs no branch `reborn-integration` antes de taggar uma nova versão estável. Issues como [#2987](https://github.com/nearai/ironclaw/issues/2987) servem como tracker de release readiness.

---

## 3. Progresso do Projeto

### PRs fechados hoje

| PR | Título | Tamanho | Importância |
|----|--------|---------|-------------|
| [#3655](https://github.com/nearai/ironclaw/pull/3655) | `fix(reborn): redact loop response output` | XS | Redige conteúdo de resposta do modelo em `LoopModelResponse` sanitizado. |
| [#3656](https://github.com/nearai/ironclaw/pull/3656) | `fix(reborn): flag in-memory durable logs` | XS | Marca logs de eventos/auditoria em memória como componentes de wiring local. |
| [#3662](https://github.com/nearai/ironclaw/pull/3662) | Revert commit AGENTS.md (WIP, Copilot) | — | Revert de commit anterior relacionado a instruções do assistente Abound. |

### PRs abertos com maior impacto estrutural

| PR | Título | Escopo | Tamanho | Risco |
|----|--------|--------|---------|-------|
| [#3550](https://github.com/nearai/ironclaw/pull/3550) | `arch(ws-0)`: state, checkpoints, BoundedRing, CapabilityCallSignature | foundation | XL | medium |
| [#3551](https://github.com/nearai/ironclaw/pull/3551) | `arch(ws-1)`: strategy traits alpha | agent-loop | M | low |
| [#3552](https://github.com/nearai/ironclaw/pull/3552) | `arch(ws-2)`: strategy traits beta — batch, gate, recovery | agent-loop | XL | low |
| [#3573](https://github.com/nearai/ironclaw/pull/3573) | `feat(reborn)`: add ironclaw_hooks framework foundation | hooks | XL | medium |
| [#3566](https://github.com/nearai/ironclaw/pull/3566) | Add Reborn composition crate | runtime | XL | medium |
| [#3583](https://github.com/nearai/ironclaw/pull/3583) | Implement WASM ProductAdapter component runtime | channel/wasm | XL | medium |
| [#3659](https://github.com/nearai/ironclaw/pull/3659) | `feat(filesystem)`: collapse storage onto one unified mount fabric | db | XL | low |
| [#3660](https://github.com/nearai/ironclaw/pull/3660) + [#3661](https://github.com/nearai/ironclaw/pull/3661) | Port libsql + postgres backends to native put/get + native query + ensure_index | db | XL | low |
| [#3632](https://github.com/nearai/ironclaw/pull/3632) | `feat(reborn)`: add before-inbound policy seam | inbound | L | low |
| [#3575](https://github.com/nearai/ironclaw/pull/3575) | `refactor(crates)`: group workspace crates by domain | architecture | XL | medium |
| [#3617](https://github.com/nearai/ironclaw/pull/3617) | `feat(reborn)`: add product adapter runtime catalog | product | XL | medium |

**Destaque:** Os PRs [#3659](https://github.com/nearai/ironclaw/pull/3659)–[#3661](https://github.com/nearai/ironclaw/pull/3661) concluem a tríade de storage nativo (put/get com CAS + query/index) para libsql e postgres, eliminando o passthrough de bytes legados em 6 crates consumidoras. Este é um marco de infraestrutura significativo para a estabilidade do Reborn.

---

## 4. Temas Quentes da Comunidade

### Issues com mais comentários

1. **[#2987](https://github.com/nearai/ironclaw/issues/2987)** — `[EPIC] Track Reborn architecture landing strategy` — **44 comentários**  
   Tracker central do landing da arquitetura Reborn. Divide a entrega em PRs agrupados por módulo para evitar revisões massivas. Status: PR0 (contract freeze) e PRs de implementação agrupados concluídos; integração em curso.

2. **[#3022](https://github.com/nearai/ironclaw/issues/3022)** — `Reborn cutover blocker: add event substrate integration tests` — **9 comentários**  
   Testes de integração cross-service para o substrate de eventos, prerequisite para o cutover visível ao usuário. Risco: P1.

3. **[#3087](https://github.com/nearai/ironclaw/issues/3087)** — `[Reborn] Compose ironclaw_host_runtime services` — **4 comentários**  
   Composição de serviços de runtime com `HostRuntime`, `CapabilityHost`, `ExtensionRegistry`, `TrustAwareCapabilityDispatchAuthorizer`.

4. **[#3036](https://github.com/nearai/ironclaw/issues/3036)** — `[EPIC] Configuration-as-Code for IronClaw Reborn` — **3 comentários** — 1 reação 👍  
   Unificação de configuração declarativa: blueprints de tenants e harnesses de use-cases, substituindo `.env`, JSON de settings, e flags runtime sem schema/diff/audit.

5. **[#3266](https://github.com/nearai/ironclaw/issues/3266)** — `[Reborn] Define outbound egress and subscription policy` — **3 comentários**  
   Política de egresso e assinatura outbound via `EventProjectionService`, durable event store e turn coordinator.

### Demanda mais expressiva

A comunidade concentra-se em **duas frentes**: (a) finalização da infraestrutura do agente-loop (strategies, hooks, runtime presets) e (b) port de channels v1 para o Reborn ProductAdapter. A issue de Configuration-as-Code ([#3036](https://github.com/nearai/ironclaw/issues/3036)) recebeu a única reação thumbs-up entre as issues listadas, indicando que a dor de configurar via `.env` + workspace docs é real e compartilhada.

---

## 5. Bugs e Estabilidade

### Bugs reportados hoje

| Severidade | Issue | Título | Módulo |
|------------|-------|--------|--------|
| **P1** (blocker) | [#3022](https://github.com/nearai/ironclaw/issues/3022) | Falta de testes de integração no substrate de eventos bloqueia cutover Reborn | M5-events-streaming |
| **P1** (blocker) | [#3576](https://github.com/nearai/ironclaw/issues/3576) | Harvest de padrões de runtime/extension/security do `pi_agent_rust` | M4-host-kernel |
| **P2** | [#2902](https://github.com/nearai/ironclaw/issues/2902) | Telegram não funciona na instância NEAR Foundation | channel/telegram |
| **P2** | [#3584](https://github.com/nearai/ironclaw/pull/3584) (fix em PR) | Notificações de outcome de missão vazando na thread errada | mission |

### Correções de estabilidade fechadas hoje

- **[#3655](https://github.com/nearai/ironclaw/pull/3655):** Fix de redaction — respostas do modelo em `LoopModelResponse` não vazavam conteúdo para superfícies serializadas/debug. Evitou potencial exposição de credenciais.
- **[#3661](https://github.com/nearai/ironclaw/pull/3661):** Habilitação de query nativa + ensure_index em libsql e postgres — elimina race conditions e comportamento indefinido no storage layer.

**Alerta:** O regressão de Telegram ([#2902](https://github.com/nearai/ironclaw/issues/2902)) continua aberto há ~3 semanas. Este é o único bug com impacto direto em produção e sem fix merged.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features detectadas

| Issue | Feature | Prioridade | Escopo |
|-------|---------|------------|--------|
| [#3623](https://github.com/nearai/ironclaw/issues/3623) | Add BeforeInboundPolicy seam para ProductWorkflow | **P0** | M2-inbound-workflow |
| [#3624](https://github.com/nearai/ironclaw/issues/3624) | Definir DTO contract de inbound para WebUI | **P0** | M2-inbound-workflow |
| [#3607](https://github.com/nearai/ironclaw/issues/3607) | `[Reborn WebUI Beta]` owner-module tracker | **P1** | docs |
| [#3630](https://github.com/nearai/ironclaw/issues/3630) | Definir gate, cancel e resume DTO lifecycle | **P1** | M2-inbound-workflow |
| [#3629](https://github.com/nearai/ironclaw/issues/3629) | Add M2 facade contract tests com fake ports | **P1** | M2-inbound-workflow |
| [#3577](https://github.com/nearai/ironclaw/issues/3577) + [#3581](https://github.com/nearai/ironclaw/issues/3581), [#3582](https://github.com/nearai/ironclaw/issues/3582), [#3579](https://github.com/nearai/ironclaw/issues/3579) | Port de canais (Telegram, WeChat, Slack) para ProductAdapter | **P2** | channel |
| [#3572](https://github.com/nearai/ironclaw/issues/3572) | Estruturar ProductAdapters como componentes WASM em runtime separado | **P2** | channel/wasm |
| [#3524](https://github.com/nearai/ironclaw/issues/3524) + [#3523](https://github.com/nearai/ironclaw/issues/3523) | First-class loop hooks roadmap + framework | **P2** | agent/hooks |

### Sinais de roadmap

O esforço massivo em **Reborn WebUI Beta** (issues P0/P1 em 2026-05-14) indica que a equipe prioriza uma superfície web funcional no curto prazo. O roadmap de Channels WASM (Telegram v2, WeChat, Slack) está formalizado com guia de port dedicado, sinalizando uma estratégia de migração incremental da base de integrações v1.

---

## 7. Resumo de Feedback dos Usuários

**Nenhum feedback de usuário final reportado nas issues de hoje.** O único indicador de satisfação/insatisfação vem de:

- **Issue [#3036](https://github.com/nearai/ironclaw/issues/3036)** — 1 reação 👍 — Sinaliza que a experiência atual de configuração (`.env` + settings JSON + flags sem schema) é dolorosa para operadores.
- **Issue [#2902](https://github.com/nearai/ironclaw/issues/2902)** — Bug de Telegram em produção na instância NEAR Foundation, sem resposta há ~3 semanas — Indica falta de SLA de resposta em bugs de channels em produção.

**Lacuna identificada:** Não há issues de feedback de usuário típicas (bugs de UX, sugestões de produto) no conjunto de 50 issues mais recentes. Isso pode indicar que o projeto está em fase de desenvolvimento interno pesado, sem exposure público massivo, ou que issues de usuários são triadas em outro canal.

---

## 8. Backlog que Merece Atenção

| Issue | Título | Idade aprox. | Motivo da atenção |
|-------|--------|--------------|-------------------|
| [#2987](https://github.com/nearai/ironclaw/issues/2987) | EPIC Reborn landing strategy | ~18 dias | Tracker central de release — sem movimento concreto visível na activity list |
| [#3022](https://github.com/nearai/ironclaw/issues/3022) | Event substrate integration tests blocker | ~17 dias | Blocker P1 para cutover, 9 comentários mas nenhum PR linked |
| [#3118](https://github.com/nearai/ironclaw/issues/3118) | Build native Reborn memory storage/search service | ~15 dias | Substitui direção antiga; sem PR aberto ainda |
| [#2902](https://github.com/nearai/ironclaw/issues/2902) | Telegram broken on NEAR Foundation | ~22 dias | **Bug em produção sem fix, maior idade no backlog** |
| [#3039](https://github.com/nearai/ironclaw/issues/3039) | Reborn final integration PR reviewer checklist | ~17 dias | Apenas 1 comentário — indica que a final review PR ainda não está próxima |

**Recomendação de ação imediata:** Priorizar triagem e resposta na issue [#2902](https://github.com/nearai/ironclaw/issues/2902). É o item mais antigo com impacto direto em usuário e sem nenhuma atualização visível no histórico recente.

---

*Relatório gerado automaticamente com base em dados do GitHub de [nearai/ironclaw](https://github.com/nearai/ironclaw) em 2026-05-15. Dados incluem 50 issues e 50 PRs atualizados nas últimas 24h.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório de Projeto — CoPaw
## 📅 Data: 2026-05-15 | agentscope-ai/CoPaw

---

## 1. Panorama do Dia

O projeto CoPaw apresenta **alta atividade** em 2026-05-15, com 50 issues e 50 PRs atualizados nas últimas 24h. Uma nova versão (v1.1.7) foi lançada introduzindo funcionalidades relevantes para Browser Use (Batch Actions e File Download). O ritmo de desenvolvimento é intenso — 8 PRs foram fechados/merged e 10 issues resolvidas, com foco em estabilidade, canais (WeChat, DingTalk, OneBot, Telegram) e experiência do console web. A comunidade reporta diversos bugs críticos envolvendo workspace, multi-turn com ferramentas, e regressões de estabilidade (chromadb segfault, CDP timeout).

---

## 2. Lançamentos

### 🚀 v1.1.7 Released

**Breaking Changes:** Nenhuma informada para esta release.

**Mudanças:**

| Categoria | Feature | PR |
|-----------|---------|-----|
| **Tools & MCPs** | Browser Use — Batch Actions: Permite executar múltiplos passos de browser (navigate, click, type, screenshot, etc.) em uma única chamada de ferramenta | [#4139](https://github.com/agentscope-ai/QwenPaw/pull/4139) |
| **Tools & MCPs** | Browser Use — File Download: Download de arquivos por clique em elementos da página | (mesmo PR) |

**Migração:** Não há breaking changes informados. Usuários de Browser Use ganham immediately novas capacidades de automação batch e download sem alterações de configuração.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados (8 fechadas nas últimas 24h)

| # | PR | Tema | Impacto |
|---|-----|------|---------|
| [#4316](https://github.com/agentscope-ai/QwenPaw/pull/4316) | `fix(browser): bound external CDP connect` | Timeout 15s para conexões CDP externas; cleanup de Playwright driver | **Estabilidade** — resolve timeouts em Ubuntu |
| [#4381](https://github.com/agentscope-ai/QwenPaw/pull/4381) | `fix(cli): fail fast on occupied app port` | Fecha #2953 — app agora falha imediatamente se porta estiver ocupada | **UX** — elimina output confuso |
| [#4382](https://github.com/agentscope-ai/QwenPaw/pull/4382) | `fix(onebot): route cron group dispatches` | Roteamento de cron dispatches para grupos OneBot | **Canais** — corrige falha de cron para grupos |
| [#4377](https://github.com/agentscope-ai/QwenPaw/pull/4377) | `fix(memory): default auto backend to local` | Backend ChromaDB substituído por pure-Python local por padrão | **Estabilidade** — mitiga SIGSEGV em Linux (#3854) |
| [#4379](https://github.com/agentscope-ai/QwenPaw/pull/4379) | `fix(console): render table line breaks` | Fecha #2983 — quebras de linha em tabelas Markdown no console | **UX** — rendering corrigido |
| [#4384](https://github.com/agentscope-ai/QwenPaw/pull/4384) | `fix(console): order chats by latest activity` | Ordenação de sessões por `updated_at` em vez de data de criação | **UX** — fecha #2982 parcialmente |
| [#4388](https://github.com/agentscope-ai/QwenPaw/pull/4388) | `fix(channels): preserve raw final replies` | Normaliza respostas finais de canais WeChat/não-console | **Canais** — evita desaparecimento de replies |
| [#4386](https://github.com/agentscope-ai/QwenPaw/pull/4386) | `fix(console): preserve interrupted user messages` | Preserva mensagens de usuário mesmo após interrupção | **UX** — fecha #3114 |

**Destaque:** A equipe demonstrou velocidade excepcional fechando PRs críticos de estabilidade (chromadb crash → v1.1.7) e canais simultaneamente.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários)

| # | Tipo | Título | Coment. | Tendência |
|---|------|--------|---------|-----------|
| [#2953](https://github.com/agentscope-ai/QwenPaw/issues/2953) | Bug | `copaw app` mostra info errada ao iniciar | 7 | Aguardando fix (#4381 merged) |
| [#4314](https://github.com/agentscope-ai/QwenPaw/issues/4314) | Bug | MiMo thinking mode + tool calls retornam 400 | 7 | **Crítico** — regression v1.1.7b1 |
| [#3957](https://github.com/agentscope-ai/QwenPaw/issues/3957) | Bug | Agent workspace muda incorretamente via channel | 7 | **Crítico** — identidade混淆 |
| [#1516](https://github.com/agentscope-ai/QwenPaw/issues/1516) | Bug | AudioContent não suportado no Telegram | 6 | Longo — desde 2026-03-15 |
| [#4299](https://github.com/agentscope-ai/QwenPaw/issues/4299) | Bug | `write_file()` entra em loop infinito | 5 | Novo — 2026-05-14 |
| [#4300](https://github.com/agentscope-ai/QwenPaw/issues/4300) | Bug | Respostas duplicadas do agent | 5 | Novo — 2026-05-14 |
| [#4354](https://github.com/agentscope-ai/QwenPaw/issues/4354) | Bug | Leitura de Excel grande causa interrupção forçada | 4 | Novo — 2026-05-14 |
| [#3944](https://github.com/agentscope-ai/QwenPaw/issues/3944) | Feature | Excluir Heartbeat & Cron do Auto-Memory | 4 👍1 | Feature request recorrente |

**Análise de Demandas:**
- **3 bugs com 7 comentários cada** indicam problemas maduros que precisam de atenção prioritária
- A combinação MiMo + multi-turn + tool calls (#4314) sugere incompatibilidade de modelos com reasoning mode — potencial regressão da v1.1.7
- Workspace switching (#3957) é bug de segurança/identidade que pode afetar users com múltiplos agents

---

## 5. Bugs e Estabilidade

### 🔴 Críticos (afetam produção/processo principal)

| # | Bug | Severidade | Status |
|---|-----|-----------|--------|
| [#3957](https://github.com/agentscope-ai/QwenPaw/issues/3957) | Agent workspace muda para outro agent — identidade混淆 | **Alta** | OPEN — 7 comments |
| [#4314](https://github.com/agentscope-ai/QwenPaw/issues/4314) | MiMo thinking mode retorna 400 em multi-turn com tools | **Alta** | OPEN — 7 comments |
| [#3854](https://github.com/agentscope-ai/QwenPaw/issues/3854) | chromadb Rust binding SIGSEGV — 45+ crashes por sessão | **Alta** | OPEN — parcialmente mitigado por #4377 |

### 🟡 Importantes (funcionalidade degradada)

| # | Bug | Severidade | Status |
|---|-----|-----------|--------|
| [#1516](https://github.com/agentscope-ai/QwenPaw/issues/1516) | AudioContent não processado no Telegram | **Média** | OPEN — desde 2026-03-15 |
| [#4300](https://github.com/agentscope-ai/QwenPaw/issues/4300) | Respostas do agent duplicadas | **Média** | OPEN — 5 comments |
| [#4299](https://github.com/agentscope-ai/QwenPaw/issues/4299) | `write_file()` infinite loop com conteúdo longo | **Média** | OPEN — 5 comments |
| [#4354](https://github.com/agentscope-ai/QwenPaw/issues/4354) | Leitura de Excel grande causa interrupção | **Média** | OPEN — 4 comments |
| [#4205](https://github.com/agentscope-ai/QwenPaw/issues/4205) | Whisper offline não funciona mesmo configurado | **Média** | OPEN — 3 comments |

### 🟢 Resolvidos Recentemente

| # | Bug | Fix | Merged |
|---|-----|-----|--------|
| [#4360](https://github.com/agentscope-ai/QwenPaw/issues/4360) | CDP timeout no Ubuntu 26.04 | #4316 | ✅ |
| [#4018](https://github.com/agentscope-ai/QwenPaw/issues/4018) | `embedding_model_config` resetado após update | #4296 | ✅ |
| [#4323](https://github.com/agentscope-ai/QwenPaw/issues/4323) | `execute_shell_command` não herda PATH de `envs.json` | #4323 | ✅ |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features (últimas 24h)

| # | Feature | Descrição | Sinais de Prioridade |
|---|---------|-----------|---------------------|
| [#4315](https://github.com/agentscope-ai/QwenPaw/issues/4315) | Hot-reload knowledge + memory gap after restart | Agent precisa informar sobre config changes e ter contexto após reinício | 3 comments |
| [#4249](https://github.com/agentscope-ai/QwenPaw/issues/4249) | Session lifecycle hooks (`session.create`, `session.reset`) | Permitir custom logic ao criar sessões — memória, injeção de contexto | 3 comments |
| [#4057](https://github.com/agentscope-ai/QwenPaw/issues/4057) | Suporte a AgentScope tracing init na startup | Integrar `agentscope.init(tracing_url=...)` na inicialização | 3 comments |
| [#3944](https://github.com/agentscope-ai/QwenPaw/issues/3944) | Excluir Heartbeat & Cron do Auto-Memory | 1 👍 —feature request recorrente |
| [#3570](https://github.com/agentscope-ai/QwenPaw/issues/3570) | Paginação na lista "All Chats" | Performance com muitos chats | 3 comments |

### PRs Abertos com Features

| # | PR | Feature |
|---|-----|---------|
| [#4387](https://github.com/agentscope-ai/QwenPaw/pull/4387) | `feat(providers): allow custom base URL for Anthropic` | Permite base URL customizada (não mais bloqueado em api.anthropic.com) |
| [#4385](https://github.com/agentscope-ai/QwenPaw/pull/4385) | `feat(file): support line hash targeted edits` | Hash de linha para edições precisas |
| [#4391](https://github.com/agentscope-ai/QwenPaw/pull/4391) | `docs(quickstart): add uv tool install` | Adiciona `uv tool install` como opção de instalação |

**Sinais de Roadmap:** Ênfase em modularidade (hooks, lifecycle events), observabilidade (tracing), e flexibilidade de providers. A adição de UV como install path sugere foco em UX para developers.

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Dor | Cenário | Impacto |
|-----|---------|---------|
| **Estabilidade do backend de memória** | chromadb crash 45+ vezes por sessão em Linux | Usuários Linux abandonam vector search |
| **Quebras em canais** | WeChat, DingTalk, Telegram apresentam routing/rendering issues | Fragmentação da experiência multi-canal |
| **Confusão de identidade entre agents** | Workspace switching causa agente pensar que é outro | Problema crítico para multi-agent setups |
| **Regressão com modelos reasoning** | MiMo + tools causa 400 em multi-turn | Breaking para users de modelos com thinking |
| **write_file() falha com conteúdo longo** | Saídas extensas causam loops/bugs | Bloqueia tasks de geração de código |
| **Backup sem rotação** | Disco pode ficar cheio com backups acumulados | Risco operacional |
| **Embedding config resetado em updates** | `qwenpaw update` limpa config de embedding | Workflow quebrado pós-update |

### Satisfação

- Nova release v1.1.7 traz features desejadas (batch browser actions)
- Comunidade ativa reportando bugs — saúde do projeto
- Equipe responsiva fechando PRs rapidamente

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta há Muito Tempo

| # | Criado | Bug/Feature | Days Open | Priority |
|---|--------|-------------|-----------|----------|
| [#1853](https://github.com/agentscope-ai/QwenPaw/issues/1853) | 2026-03-19 | Support configurable base path (reverse proxy) | ~57d | Alta — quebrando deployments |
| [#1516](https://github.com/agentscope-ai/QwenPaw/issues/1516) | 2026-03-15 | AudioContent not supported in Telegram | ~61d | Média |
| [#3109](https://github.com/agentscope-ai/QwenPaw/issues/3109) | 2026-04-08 | DingTalk - suporte a mensagens citadas | ~37d | Média |
| [#3054](https://github.com/agentscope-ai/QwenPaw/issues/3054) | 2026-04-08 | OneBot cron não envia para grupos | ~37d | Média |
| [#3178](https://github.com/agentscope-ai/QwenPaw/issues/3178) | 2026-04-10 | Session list corruption causa 500 | ~35d | Alta |
| [#3254](https://github.com/agentscope-ai/QwenPaw/issues/3254) | 2026-04-10 | Console backend chat UUID missing (race condition) | ~35d | Alta |
| [#3173](https://github.com/agentscope-ai/QwenPaw/issues/3173) | 2026-04-09 | WeChat routing error + non-vision model乱码 | ~36d | Média |

### PRs Abertos Importantes (sem review ainda)

| # | PR | Tema | Age |
|---|-----|------|-----|
| [#4389](https://github.com/agentscope-ai/QwenPaw/pull/4389) | `fix(chat): recover invalid chats json` | Corrupção de chats.json — recuperação automática | <1d |
| [#4386](https://github.com/agentscope-ai/QwenPaw/pull/4386) | `fix(console): preserve interrupted user messages` | Preserva mensagens após interrupção | <1d |
| [#4378](https://github.com/agentscope-ai/QwenPaw/pull/4378) | `fix(console): support reverse proxy base path` | Suporte a URL prefix — fecha #1853 | <1d |
| [#4296](https://github.com/agentscope-ai/QwenPaw/pull/4296) | `fix(providers): annotate extra models from baseline` | Zhipu GLM vision aliases | ~2d |
| [#4339](https://github.com/agentscope-ai/QwenPaw/issues/4339) | `test: fix

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-05-15

## 1. Panorama do Dia

O projeto ZeroClaw apresenta alta atividade comunitária com **24 issues e 50 PRs atualizados nas últimas 24h**, porém sem novas releases. A saúde do projeto está **sob pressão** com **6 bugs P1 abertos**, incluindo dois bloqueios de workflow críticos relacionados a cron jobs e search tools no Telegram. A equipe demonstra maturidade no processo de triagem (maioria dos P1 com status aceito/in-progress), mas a taxa de abertura de issues ultrapassa significativamente a de fechamento. O pipeline de CI/CD apresenta vulnerabilidade TLS ativa que requer atenção imediata.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

O último release documentado é o **v0.7.5**, que aparece com frequência nas issues de regressão (#6646: web_search_tool e web_fetch não funcionam via Telegram). A versão v0.7.6 está em planejamento tracking (#6253), com tema definido: melhoria na experiência de skills.

---

## 3. Progresso do Projeto

### PRs Merged/Closed (6 total)

| PR | Descrição | Impacto |
|---|---|---|
| **[#6286](https://github.com/zeroclaw-labs/zeroclaw/pull/6286)** | `fix(channels/telegram): apply mention_only gate to photo, document, and voice updates` | Corrige regressão onde bot respondia mídia sem menção — **estabilidade em grupos Telegram** |
| **[#5540](https://github.com/zeroclaw-labs/zeroclaw/pull/5540)** | Harden memory recall and session resume | Melhoria de confiabilidade em memória e resiliência de sessões |
| **[#5557](https://github.com/zeroclaw-labs/zeroclaw/pull/5557)** | `fix(install): prevent CARGO_FEATURE_ARGS unbound variable on bash 3.2` | Compatibilidade com macOS/bash 3.2 — **DX improvement** |
| **[#6627](https://github.com/zeroclaw-labs/zeroclaw/pull/6627)** | `fix(provider): Stale tool-result images replay across later provider turns` | Resolve replay de imagens em histórico de provider |

### PRs Abertos em Destaque

| PR | Descrição | Status |
|---|---|---|
| **[#6656](https://github.com/zeroclaw-labs/zeroclaw/pull/6656)** | `perf(cron): persist run results in one transaction` — unifica writes de cron em uma transação SQLite | Em revisão |
| **[#6665](https://github.com/zeroclaw-labs/zeroclaw/pull/6665)** | `feat: add default_target config and daemon/CLI delivery injection` — relacionado ao fix de cron job output (#6647) | WIP |
| **[#6666](https://github.com/zeroclaw-labs/zeroclaw/pull/6666)** | `feat: separate IMAP/SMTP credentials` para email channel | Em revisão |
| **[#6515](https://github.com/zeroclaw-labs/zeroclaw/pull/6515)** | `fix(history-pruner): fixes #5636` — evita mensagens consecutivas de assistant pós-trim | Em revisão |
| **[#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074)** | **[CRÍTICO]** Audit: rastreamento de 153 commits perdidos em revert c3ff635 | Aguardando auditoria |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários)

| Issue | Título | Comentários | Relevância |
|---|---|---|---|
| **[#6647](https://github.com/zeroclaw-labs/zeroclaw/issues/6647)** | Cron job output not routed to configured channels | 4 | P1 bloqueia workflow — cron output só aparece no dashboard |
| **[#6269](https://github.com/zeroclaw-labs/zeroclaw/issues/6269)** | Context compressor drops reasoning_content | 4 | Impacta providers que dependem de reasoning (DeepSeek) |
| **[#6547](https://github.com/zeroclaw-labs/zeroclaw/issues/6547)** | homebrew merge fail | 4 | Release packaging —版本 0.7.5 não disponível no Homebrew |
| **[#6659](https://github.com/zeroclaw-labs/zeroclaw/issues/6659)** | No API for pushing notifications into gateway session | 3 | Integração backend de terceiros bloqueada |
| **[#6641](https://github.com/zeroclaw-labs/zeroclaw/issues/6641)** | Turn-level OTel trace correlation | 1 | Feature de observabilidade encadeada — segue #6009 |
| **[#6642](https://github.com/zeroclaw-labs/zeroclaw/issues/6642)** | Capture full prompt/completion on llm.call spans | 1 | Complemento de observabilidade — alinhado com Micra-io fork |

**Análise:** A comunidade demonstra foco em **observabilidade (OTel)** e **integração de cron jobs com canais**. O tema skills (#6253) mobiliza múltiplos contribuidores (JordanTheJet aparece em 4+ issues de skills). Falta de reações (thumbs up) sugere baixa votação mas alta urgência percebia.

---

## 5. Bugs e Estabilidade

### P1 — Bloqueio de Workflow (6 issues)

| Issue | Severidade | Componente | Link |
|---|---|---|---|
| Cron job output não entregue a canais (Telegram) | S1 | runtime/daemon | [#6647](https://github.com/zeroclaw-labs/zeroclaw/issues/6647) |
| web_search_tool e web_fetch não funcionam via Telegram em v0.7.5 | S1 | runtime/daemon | [#6646](https://github.com/zeroclaw-labs/zeroclaw/issues/6646) |
| CI Advisory scan falhou (TLS hostname verification desabilitada com Boring TLS) | Security | dependencies | [#6657](https://github.com/zeroclaw-labs/zeroclaw/issues/6657) |
| web_fetch allowed_private_hosts inútil para domínios que resolvem para IPs privados | S2 | tool/http_request, web_fetch | [#5122](https://github.com/zeroclaw-labs/zeroclaw/issues/5122) |
| Stale tool-result images replay | S2 | provider | [#6627](https://github.com/zeroclaw-labs/zeroclaw/issues/6627) — **já closed** |
| Context compressor drop reasoning_content | S2 | runtime/context compression | [#6269](https://github.com/zeroclaw-labs/zeroclaw/issues/6269) |

### P2 — Comportamento Degradado (8 issues)

| Issue | Componente | Link |
|---|---|---|
| Agente sem contexto do cron job executado | runtime/daemon | [#6105](https://github.com/zeroclaw-labs/zeroclaw/issues/6105) |
| cron session_target=main ainda roda em sessão isolada | runtime/cron | [#6648](https://github.com/zeroclaw-labs/zeroclaw/issues/6648) |
| mention_only=true não suprime respostas a mídia em grupos Telegram | channel:telegram | [#6229](https://github.com/zeroclaw-labs/zeroclaw/issues/6229) — **já closed** |
| Cron read-only queries hit writable path | cron:store | [#6654](https://github.com/zeroclaw-labs/zeroclaw/issues/6654) |
| Matrix channel vaza ~1 MB Pss por /admin/reload | channel:matrix | [#6651](https://github.com/zeroclaw-labs/zeroclaw/issues/6651) |
| Cron-scheduled webhook callbacks drop thread_id | channel:webhook | [#6634](https://github.com/zeroclaw-labs/zeroclaw/issues/6634) |
| SkillImprover/skill_manage só reconhecem SKILL.toml, não manifest.toml | skills | [#6645](https://github.com/zeroclaw-labs/zeroclaw/issues/6645) |
| Matrix channel leaks | channel:matrix | [#6651](https://github.com/zeroclaw-labs/zeroclaw/issues/6651) |

### Segurança

**⚠️ CRÍTICO:** Issue [#6657](https://github.com/zeroclaw-labs/zeroclaw/issues/6657) reporta que o scan advisory do CI falhou identificando vulnerabilidade TLS no crate `lettre 0.11.21`: *"TLS hostname verification disabled when using Boring TLS backend"*. Requer ação imediata da equipe de manutenção.

**⚠️ MODERADO:** Issue [#6064](https://github.com/zeroclaw-labs/zeroclaw/pull/6064) adiciona `ZEROCLAW_BYPASS_SHELL_POLICY` como environment variable para bypass de validação de shell — label indica "DO NOT MERGE", mas permanece aberto há 20 dias.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Abertas

| Feature | Prioridade | Área | Link |
|---|---|---|---|
| **v0.7.6 Skills Tracking** — melhoria em skills support e UX (CLI, loader, audit, install, sandbox, test harness) | P1 | skills | [#6253](https://github.com/zeroclaw-labs/zeroclaw/issues/6253) |
| Turn-level OTel trace correlation — aninhar spans sob single turn trace | P2 | observability | [#6641](https://github.com/zeroclaw-labs/zeroclaw/issues/6641) |
| Capture full prompt/completion via gen_ai.input.messages / gen_ai.output.messages | P2 | observability | [#6642](https://github.com/zeroclaw-labs/zeroclaw/issues/6642) |
| Telegram tool-call progress durante partial streaming | P2 | channel:telegram | [#6663](https://github.com/zeroclaw-labs/zeroclaw/issues/6663) |
| Preserve committed streamed output during websocket steering | High | gateway | [#6661](https://github.com/zeroclaw-labs/zeroclaw/issues/6661) |
| Install script support musl aarch64 linux com --prebuilt | P2 | scripts | [#6658](https://github.com/zeroclaw-labs/zeroclaw/issues/6658) |
| Define host-architecture policy para emulated installs | P3 | core | [#6653](https://github.com/zeroclaw-labs/zeroclaw/issues/6653) |
| API para push de notificações na gateway session | P1 | gateway | [#6659](https://github.com/zeroclaw-labs/zeroclaw/issues/6659) |

### Sinais de Roadmap

1. **v0.7.6 focado em Skills** — Issue [#6253](https://github.com/zeroclaw-labs/zeroclaw/issues/6253) convida input da comunidade sobre `zeroclaw skills`
2. **Observabilidade maturescendo** — Duas issues OTel em progresso (#6641, #6642) seguem trabalho anterior (#6009, #6190)
3. **Compatibilidade multiplataforma** — Suporte a musl/aarch64 e emulação de arquitetura indica foco em IoT/edge
4. **Streaming e UX Telegram** — Melhorias de UX em streaming (#6663) e websocket (#6661)

---

## 7. Resumo de Feedback dos Usuários

### Dores Críticas Reportadas

**Workflow Bloqueado:**
- *"Agent cron job results only appear in web dashboard Scheduled Jobs tab. No output is delivered to configured channels (Telegram)"* — [#6647](https://github.com/zeroclaw-labs/zeroclaw/issues/6647)
- *"web_search_tool and web_fetch not firing via Telegram channel in v0.7.5"* — [#6646](https://github.com/zeroclaw-labs/zeroclaw/issues/6646)

**Segurança:**
- *"web_fetch allowed_private_hosts list is essentially useless for domain names that resolve to private IPs"* — [#5122](https://github.com/zeroclaw-labs/zeroclaw/issues/5122)

**Instabilidade de Provider:**
- *"Context compressor drops reasoning_content from compressed assistant messages"* — impacta DeepSeek e providers com reasoning_content obrigatório — [#6269](https://github.com/zeroclaw-labs/zeroclaw/issues/6269)

**Regressões:**
- *"Stale tool-result images replay across later provider turns"* — imagens de tool results reaparecem em turns subsequentes — [#6627](https://github.com/zeroclaw-labs/zeroclaw/issues/6627)

### Cenários de Uso Identificados

1. **Agentes com cron jobs** — Scheduler de tarefas recorrentes com output para canais de mensagem
2. **Integração backend** — Push de notificações de sistemas externos para gateway session
3. **Multi-provider** — Suporte a LM Studio (OpenAI-compatible), DeepSeek, Gemini
4. **Operadores multi-tenant** — Gerenciamento de múltiplos agentes via Matrix

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta/Estagnadas

| Issue | Idade | Status | Link |
|---|---|---|---|
| **Audit de 153 commits revertidos** (c3ff635) | ~17 dias | in-progress | [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) |
| Security bypass (ZEROCLAW_BYPASS_SHELL_POLICY) | 20 dias | needs

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*