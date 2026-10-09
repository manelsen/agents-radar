# Resumo diário do ecossistema de agentes de IA 2026-10-10

> Issues: 0 | PRs: 1 | Projetos cobertos: 7 | Gerado em: 2026-10-09 23:46 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório do Projeto NullClaw — 2026-10-10

---

## 1. Panorama do Dia

O projeto NullClaw apresenta **atividade reduzida** em 10 de outubro de 2026. Nenhuma issue foi aberta ou fechada nas últimas 24 horas, indicando baixo volume de reportes de bugs ou solicitações. Foi registrada **1 pull request aberta** (#1052) relacionada à documentação de um exemplo de integração com Parallel Search MCP. Sem lançamentos recentes, o projeto encontra-se em período de maturação sem mudanças de código ativas. A saúde geral sugere estabilidade operacional, mas com pouca visibilidade de desenvolvimentos em curso.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24 horas.**

O projeto não publicou novas versões, binários ou tags. Recomenda-se monitorar o repositório para eventuais hotfixes ou anúncios de versões planejadas.

---

## 3. Progresso do Projeto

### PRs Recentes

| # | Título | Status | Autor | Impacto |
|---|--------|--------|-------|---------|
| [#1052](https://github.com/nullclaw/nullclaw/pull/1052) | docs: add optional Parallel Search MCP example | **OPEN** | georgeatparallel | Documentação |

**Análise:** A PR #1052 propõe adicionar um exemplo de integração opcional com Parallel Search usando o transporte HTTP nativo do NullClaw. A mudança permite aos usuários utilizar `mcp_parallel_web_search` ou `mcp_parallel_web_fetch` sem necessidade de chave de API Parallel ou bridge local. O merge aguardará revisão dos mantenedores.

> ⚠️ *Esta PR ainda não foi mergeada. Nenhuma outra atividade de código foi registrada hoje.*

---

## 4. Temas Quentes da Comunidade

**Nenhuma issue ou PR com atividade significativa de comentários ou reações registrada nas últimas 24 horas.**

O ecossistema permanece quieto em termos de discussão aberta. Recomenda-se revisar issues anteriores com alta interação para identificar padrões de demanda recorrente.

---

## 5. Bugs e Estabilidade

**Nenhum bug ou regressão reportado nas últimas 24 horas.**

| Severidade | Count |
|------------|-------|
| Crítica | 0 |
| Alta | 0 |
| Média | 0 |
| Baixa | 0 |

O painel de issues limpo indica boa estabilidade ou baixo volume de testes/usuários ativos reportando problemas.

---

## 6. Pedidos de Features e Sinais de Roadmap

**Sem novos pedidos de features nas últimas 24 horas.**

A PR #1052, embora seja documentação, sinaliza interesse da comunidade em **expandir integrações MCP (Model Context Protocol)** nativas, eliminando dependências externas (como bridges locais). Este é um indicador potencial de direção de roadmap: facilitar conectores "plug-and-play" via HTTP nativo.

---

## 7. Resumo de Feedback dos Usuários

**Sem feedback explícito registrado nas últimas 24 horas.**

A ausência de issues fechadas ou abertas impede análise de dores atuais. Dados históricos sugerem que a documentação e exemplos práticos (como o da PR #1052) são valorizados pela comunidade, visto que a contribuição foi aceita e aberta para revisão.

---

## 8. Backlog que Merece Atenção

### Issues/PRs Sem Resposta (Stale)

| Tipo | ID | Título | Última Atualização | Observação |
|------|-----|--------|-------------------|------------|
| PR | [#1052](https://github.com/nullclaw/nullclaw/pull/1052) | docs: add optional Parallel Search MCP example | 2026-10-09 | Aguardando revisão |

**Recomendação:** Revisar e avaliar a merge da PR #1052 para manter engajamento do contribuidor `georgeatparallel`. Issues antigas (pré-2026) podem necessitar triagem para limpeza do backlog.

---

## Resumo Executivo

| Indicador | Status |
|-----------|--------|
| Atividade de Issues | 🟢 Estável (0) |
| Atividade de PRs | 🟡 Moderada (1 aberta) |
| Releases | 🔴 Nenhuma |
| Bugs Reportados | 🟢 Nenhum |
| Feedback de Usuários | ⚪ Indefinido |

**Veredicto:** NullClaw opera em modo de baixa atividade. A prioridade imediata é revisar a PR #1052 e definir estratégia para potenciais integrações MCP nativas. Sem novos lançamentos ou bugs, o projeto demonstra estabilidade, mas requer comunicação ativa para manter comunidade engajada.

---

*Relatório gerado automaticamente com base em dados do GitHub de 2026-10-10.*

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo — Ecossistema de Agentes AI Open Source

**Data de Referência:** 2026-10-10

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes AI open source apresenta **duas velocidades distintas** de desenvolvimento. De um lado, **ZeroClaw, Hermes Agent e NanoBot** mantêm ritmo intenso de atividade (40–50 eventos diários), sinalizando projetos em fase de crescimento acelerado e expansão de funcionalidades. De outro, **NullClaw e IronClaw** operam em modo de baixa atividade ou estagnação, com NullClaw demonstrando estabilidade operacional mas sem novos desenvolvimentos, enquanto IronClaw apresenta silêncio total. **CoPaw** se destaca pela severidade de seus bugs abertos — incluindo uma vulnerabilidade de RCE — mas mantém engajamento comunitário elevado. A ausência quase universal de releases formais nas últimas 24h indica que a maioria dos projetos está acumulando mudanças para ciclos de publicação futuros, sugerindo maturidade em gestão de pipeline, não negligência.

---

## 2. Comparação de Atividade

| Projeto | Issues (abertas/fechadas/24h) | PRs (abertos/merged/24h) | Releases (24h) | Avaliação de Saúde |
|---------|-------------------------------|---------------------------|----------------|-------------------|
| **ZeroClaw** | 19/3 | 50/1 | 0 | 🔴 P1 bugs abertos; 6 RFCs ativas; fase de desenvolvimento intensivo |
| **Hermes Agent** | 50 | 50 | 0 | 🟡 2 P0 críticos fechados; 3 P0/P1 abertos; regressões Python |
| **NanoBot** | 11 | 31 (11 merged) | 0 | 🟡 Bug crítico DeepSeek resolvido em <24h; refatoração SQLite P1 em conflito |
| **CoPaw** | 13/6 | 22/13 | 0 | 🔴 RCE aberta (#8153); múltiplos bugs críticos/altos; alta responsividade |
| **PicoClaw** | 4 (2 abertas) | 6 (5 merged) | 0 | 🟡 TLS expirado (crítico); build Android quebrado; atualização ativa de deps |
| **NullClaw** | 0 | 1 | 0 | 🟢 Estável; PR de documentação aguardando review |
| **IronClaw** | 0 | 0 | 0 | ⚪ Sem atividade registrada |

**Observação:** O volume de PRs abertos (150+ somando ZeroClaw, Hermes e NanoBot) indica backlog significativo de código não revisado. A ausência de releases em todos os projetos sugere preparação coordenada para下一个 ciclo de publicação.

---

## 3. Posicionamento do Projeto Principal

**Recomendação de Priorização para Engajamento:**

| Rank | Projeto | Justificativa |
|------|---------|---------------|
| 1 | **ZeroClaw** | Maior volume de PRs (50) + RFCs ativas + sinais de roadmap claros (A2A, RAG, search routing). comunidade engajada com 15+ comentários em trackers de decisão. |
| 2 | **NanoBot** | Demonstra responsividade excepcional (bug DeepSeek resolvido em <24h por dois PRs independentes). refatoração SQLite (#5943) addressa race conditions críticas. |
| 3 | **CoPaw** | Atividade intensa com foco em segurança (RCE aberta requer atenção). expansões de i18n indicam estratégia de mercado internacional. |

**Diferenças Técnicas Observadas:**

| Dimensão | ZeroClaw | Hermes Agent | NanoBot |
|----------|----------|--------------|---------|
| **Stack primária** | Rust | Python | Python |
| **Infraestrutura de estado** | SQLite (em refatoração) | Não especificado | JSONL → SQLite (em progresso) |
| **Modelo de deployment** | TUI + Desktop | Desktop + Gateway | Multi-canal (Telegram, Slack, WhatsApp, QQ, Feishu) |
| **Foco de bugs** | Memory leaks, silenciosos drops | Compatibilidade Python, Desktop macOS | Providers AI, race conditions |
| **Roadmap signals** | A2A, RAG, multi-provider search | Distribuição Windows (MSIX), memory consolidation | Enterprise providers (Vertex, CoreWeave), computer use |

---

## 4. Focos Técnicos Compartilhados

### 4.1 Estabilidade de Estado e Sessão

Três projetos enfrentam desafios similares com gerenciamento de estado:

- **ZeroClaw** (#11420): SQLite reescreve `created_at` a cada turno — impacto em auditoria
- **NanoBot** (#5943): JSONL compartilhado causa race conditions — refatoração P1 em andamento
- **Hermes Agent** (#130909, #126167): Cache de compactação e prompt pins precisam preservação em eventos sintéticos

**Ação recomendada:** Compartilhar padrões de design para persistência de sessão entre projetos. A transição de JSONL para SQLite aparece como padrão emergente.

### 4.2 Segurança de Credenciais e Permissões

Preocupação transversal identificada em **Hermes Agent** e **ZeroClaw**:

- Hermes: PR #135877 (scope de credenciais em restart), múltiplos PRs de segurança abertos
- ZeroClaw: Glob patterns para `file_read` (#11592), watchdog de memória para subprocessos (#11456)
- CoPaw: **RCE via MCP Driver (#8153)** — severidade crítica

**Alerta crítico:** A vulnerabilidade RCE em CoPaw (#8153) permite execução como root com malware de mineração. Este é o único incidente de segurança de alta severidade reportado no período.

### 4.3 Integração Multi-Provedor de AI

Demanda consistente por diversificação de provedores:

| Projeto | Providers em desenvolvimento |
|---------|------------------------------|
| NanoBot | Claude on Vertex AI (#5955), CoreWeave (#6103), Z.AI split (#3207) |
| ZeroClaw | Opper provider EU (#11584), subagent em rotas específicas (#11577) |
| PicoClaw | Atualização Anthropic SDK 1.55.1→1.74.0 (via Dependabot) |

**Tendência:** A comunidade busca **redução de dependência de provedores únicos**, especialmente para deployments enterprise que requerem compliance com provedores de nuvem específicos.

### 4.4 Compatibilidade com Python 3.11–3.13

**Hermes Agent** fechou dois P0s relacionados a compatibilidade Python:

- `#135827`: Falta `from __future__ import annotations` causava crash
- `#135587`: `typing.Generator` requer 3 argumentos após autofix de linter

**Implicação:** Projetos Python devem auditrar uso de type hints e imports de typing para garantir compatibilidade com Python 3.11+.

---

## 5. Análise de Diferenciação

### 5.1 Por Público-Alvo

| Segmento | Projetos Dominantes | Indicadores |
|----------|--------------------|-------------|
| **Enterprise/Deploy complexo** | ZeroClaw, NanoBot | RFCs A2A/RAG, Vertex AI, CoreWeave, self-hosted Bot API, Tailscale gateway |
| **Desktop/Usuário final** | Hermes Agent, CoPaw | Distribuição MSIX, Tauri vs Electron, avatar animado, customização UI |
| **Mobile/Multi-canal** | NanoBot | Telegram, Slack, WhatsApp, QQ, Feishu — todos com issues ativas |
| **Developer-focused** | NullClaw | Documentação de integração MCP, foco em exemplo de transporte HTTP |
| **Manutenção/Mínimo** | IronClaw, NullClaw | Baixa atividade, foco em estabilidade, não expansão |

### 5.2 Por Arquitetura

```
ZeroClaw:     Rust → performance + safety | SQLite state | CLI-first + desktop
Hermes:       Python → extensibilidade     | Desktop + Gateway | Plugin ecosystem
NanoBot:      Python → multi-channel       | Session state migration | Provider routing
CoPaw:        Tauri2/Electron → desktop    | Memory plugin | i18n expansion
PicoClaw:     Go → lightweight              | Web gateway | Matrix/LINE integration
NullClaw:     Não especificado             | MCP native transport | Documentation focus
```

### 5.3 Por Estratégia de Recursos

| Estratégia | Projetos | Evidência |
|------------|----------|----------|
| **Provedores cloud-native** | NanoBot | Vertex AI, CoreWeave, Z.AI, self-hosted API |
| **On-premise/self-hosted** | NanoBot, Hermes | Custom Bot API URL, Tailscale deployment |
| **Modelos locais** | CoPaw | QwenPaw 27B/35B-A3B, OpenViking memory plugin |
| **Interoperabilidade** | ZeroClaw | RFC A2A crate, search_routes hint-based routing |
| **Minimalismo** | NullClaw | Integração MCP via HTTP nativo, sem bridges |

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Projetos em Expansão Rápida

| Projeto | Sinais de Crescimento | Métricas |
|---------|----------------------|----------|
| **ZeroClaw** | 6 RFCs ativas, 50 PRs abertos, P1 bugs aceitos | ~7 meses para feature #1541 (sender_id) merged; backlog RFC de 3-6 meses |
| **NanoBot** | 8 contributors ativos, 42 eventos/dia, bug fix <24h | Crescimento de canais (Telegram features 3 PRs simultâneos) |
| **CoPaw** | 35 PRs atualizados, 13 issues fechadas | Feature requests de i18n (espanhol), GPU tier effects |

### 6.2 Projetos em Consolidação de Qualidade

| Projeto | Sinais de Estabilização | Status |
|---------|------------------------|--------|
| **Hermes Agent** | Fechou 2 P0s Python, múltiplos PRs de segurança | Regressões Desktop macOS/Windows indicam dívida técnica em cross-platform |
| **PicoClaw** | 5 PRs Dependabot merged, foco em segurança de deps | TLS expirado (#3377) marca descuido de infraestrutura; build Android quebrado |
| **NullClaw** | Estável, baixa atividade | Estagnação pode indicar abandono ou maturidade completa |

### 6.3 Responsividade de Mantenedores

| Projeto | Tempo de Resposta | Observação |
|---------|------------------|------------|
| **NanoBot** | <24h para bug crítico | DeepSeek web_search resolvido por dois PRs independentes simultâneos |
| **CoPaw** | Múltiplos PRs merged diariamente | 13 issues fechadas em 24h |
| **ZeroClaw** | PRs aguardando ação do autor | Mantenedores revisando; PRs estagnados por responsabilidade do autor |
| **PicoClaw** | Stale issues | TLS expirado sem resolução há 30+ dias |

---

## 7. Sinais de Tendência

### 7.1 Enterprise Adoption Em Aceleração

**Evidência:**

- RFCs de RAG e A2A em ZeroClaw indicam demanda corporativa por assistentes "enterprise-ready"
- Provedores enterprise (Vertex AI, CoreWeave, self-hosted Bot API) em desenvolvimento ativo no NanoBot
- Deploy via Tailscale documentado em field report (#135867 do Hermes)

**Implicação:** O ecossistema está amadurecendo além de protótipos hobbyists para deployments corporativos com requisitos de compliance, segurança e controle de custos.

### 7.2 Heterogeneidade de Providers como Padrão

**Evidência:**

- NanoBot: 5+ provedores em desenvolvimento simultâneo (Claude, Vertex, CoreWeave, Z.AI)
- ZeroClaw: Opper provider + subagent em rotas específicas
- Demanda por `search_routes` hint-based routing em ZeroClaw

**Implicação:** A estratégia de "single provider" está cedendo lugar a arquiteturas que permitem roteamento dinâmico baseado em tipo de query, custo, latência e disponibilidade.

### 7.3 Desktop como Plataforma Prioritária (com ressalvas)

**Evidência:**

- Hermes Agent: MSIX 404, Smart App Control blocks executável — Windows distribution quebrado
- Hermes Agent: Desktop app macOS regression — update handoff recusado
- CoPaw: Migrar de Tauri2 para Electron para Kylin Linux V10
- Hermes: Solicitações de chat width configurável, avatar animado

**Implicação:** A experiência Desktop ainda não atingiu maturidade cross-platform. A fragmentação de frameworks (Tauri vs Electron) e sistemas operacionais indica que a equipe de cada projeto precisa escolher prioridades de distribuição.

### 7.4 Preocupação com UX Não-Invasiva

**Evidência:**

- Hermes: `idle_compact_after_seconds` nunca dispara — memória desperdiçada
- NanoBot: Mensagens de compactação poluem conversas (#6029)
- CoPaw: `view_audio` tool solicitada para parity com `view_image`

**Implicação:** A comunidade está refinando o equilíbrio entre agentes "presentes" e "intrusivos". Ferramentas de background maintenance (heartbeat, dream cycles) precisam ser silenciosas por padrão.

### 7.5 Segurança Como Dívida Técnica Emergente

**Evidência:**

- CoPaw: RCE via MCP Driver (#8153) — severity: **critical**
- Hermes: multidict 6.7.1 com CVE-2026-104874 (memory leak)
- PicoClaw: Atualização de `golang.org/x/crypto` para 0.57.0 (patch)

**Implicação:** A rápida expansão de funcionalidades (MCP, plugins, computer use) está introduzindo superfície de ataque que precisa de hardening. Recomenda-se audit annual de dependências e revisão de segurança de plugins third-party.

### 7.6 Internacionalização como Fator de Mercado

**Evidência:**

- CoPaw: PR #8161 para paridade de locale (id/ja/pt-BR/ru/vi) + feature request #8160 para espanhol
- NanoBot: Formatação de locale JSON Chinês Simplificado/Tradicional
- CoPaw: Suporte Feishu (plataforma empresarial chinesa)

**Implicação:** O mercado está expandindo para além de inglês/chinês. Espanhol representa oportunidade de mercado significativo, enquanto suporte a plataformas como Feishu indica foco em mercados enterprise asiáticos.

---

## Recomendações para Decisores

| Prioridade | Ação | Projetos Relevantes |
|------------|------|---------------------|
| **Crítica** | Addressar RCE em CoPaw (#8153) — vulnerabilidade de segurança com exploit ativo | CoPaw |
| **Alta** | Resolver TLS expirado em PicoClaw — impacto na credibilidade do projeto | PicoClaw |
| **Alta** | Priorizar review de PRs de segurança em Hermes Agent (CVE em multidict) | Hermes Agent |
| **Média** | Resolver conflitos de refatoração SQLite em NanoBot (#5943) — bloqueia estabilidade | NanoBot |
| **Média** | Engajar com RFCs de ZeroClaw — oportunidade de influenciar roadmap enterprise | ZeroClaw |
| **Estratégica** | Avaliar padrões de state management (JSONL→SQLite) para possível convergência | Todos |

---

*Relatório gerado em 2026-10-10 com base em dados de atividade comunitária dos repositórios GitHub de NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw e ZeroClaw.*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-10-10

## 1. Panorama do dia

O ecossistema NanoBot apresenta alta atividade de desenvolvimento em 10 de outubro de 2026, com 42 eventos totais distribuídos entre issues (11) e pull requests (31). A prioridade técnica do dia concentra-se na resolução de bugs críticos relacionados a provedores de IA — especialmente a correção do `web_search` do DeepSeek que causava falhas em todas as mensagens — e no avanço de refatorações estruturais como a centralização de estado de sessão em SQLite (#5943). O canal Telegram destaca-se como o maior polo de evolução funcional, com três PRs simultâneos para álbum de imagens, detecção de mídia remota e suporte a API customizada. A atividade comunitaria permanece intensa, com 8 contributors ativos em PRs abertos e nenhum release novo registrado nas últimas 24h.

---

## 2. Lançamentos

**Nenhum novo release detectado nas últimas 24 horas.**

O projeto mantém a versão v0.3.5 como atual, referenciada em múltiplas issues de bug reportadas (ex.: #5898, #6084). A ausência de releases pode indicar que as correções pendentes — incluindo o patch para web_search do DeepSeek — estão em fase de validação antes do próximo tag.

---

## 3. Progresso do Projeto

### PRs fechados/merged nas últimas 24h (11 total)

| # | PR | Autor | Resumo do avanço |
|---|-----|-------|------------------|
| #5204 | `feat(models): declare request APIs for providers and presets` | chengyongru | Sistema declarativo que permite que provedores customizados e presets de modelo declarem quais APIs de requisição suportam (Chat Completions vs. Responses API), eliminando o risco de roteamento incorreto para modelos Responses-only. |
| #6104 | `fix(providers): strip hosted web_search tools from Chat Completions requests` | Apageoflove | Corrige #6085: remove ferramentas `web_search` hospedadas do corpo de requisições Chat Completions, restaurando funcionalidade do DeepSeek quando web search estava ativo. |
| #6086 | `fix(providers): drop hosted web_search tool from Chat Completions extra_body` | drakeo338 | Solução complementar para o mesmo bug #6085, garantindo que entradas `{"type": "web_search"}` em `extra_body` sejam filtradas antes do envio. |
| #1541 | `feat: pass sender_id to agent context for sender identification` | skiyo | Adiciona `sender_id` ao contexto de runtime passado ao modelo de IA, habilitando identificação de diferentes remetentes em cenários de chat em grupo (especialmente Feishu/Lark). |
| #6119 | `chore(linear): format Chinese locale JSON` | chengyongru | Formata arquivos de locale JSON em Chinês Simplificado e Tradicional com indentação de dois espaços, melhorando a manutenibilidade de traduções. |
| #6117 | `docs(agents): add interface copywriting guidance` | chengyongru | Adiciona `.agent/copywriting.md` com diretrizes de copywriting para interface, vinculado ao `AGENTS.md`. |

**Principais avanços técnicos:**
- **Resolução do bug de web_search do DeepSeek** — dois PRs independentes convergiram para a mesma correção, indicando urgência comunitária.
- **Declaração explícita de APIs por provedor (#5204)** — melhoria arquitetural de longo prazo que previne erros de roteamento em provedores customizados.
- **Identificação de remetentes em grupo (#1541)** — feature等了 7 meses (aberta em 2026-03-05) finalmente merged.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários/reações)

| # | Título | Comentários | Status | Relevância |
|---|--------|-------------|--------|------------|
| #5898 | `[bug] gpt-6 model series through Github Copilot` | 4 | CLOSED | Usuários enfrentando erros de provider com a série GPT-6 via Copilot; impacto em produtividade de desenvolvedores. |
| #6029 | `[bug, p2] Silent context compaction & suppress channel broadcasts` | 3 | CLOSED | Demanda por background cycles não intrusivos; indica que notificações de sistema poluem conversas de usuários. |
| #6084 | `[bug] Slack: compaction notices post as two permanent messages` | 3 | OPEN | Usuários do Slack recebem mensagens duplicadas de compactação, degradando a experiência em DMs idle. |

### PRs com maior atenção

| # | Título | Prioridade | Status | Análise |
|---|--------|------------|--------|---------|
| #5943 | `refactor(session): centralize state ownership in SQLite` | P1 | OPEN (conflict) | Maior refatoração do dia; substitui JSONL por transações SQLite para estado de sessão, eliminando race conditions e removendo I/O do event loop. Crítico para estabilidade em produção. |
| #5955 | `feat(providers): add Claude on Vertex AI` | P2 | OPEN (conflict) | Demanda por acesso a modelos Claude via Google Vertex AI; expande opções de deployment enterprise. |
| #6091 | `feat(apps): add managed computer use with Cua Driver` | P2 | OPEN | Integração de Computer Use com driver desktop; representa evolução para automação de desktop nativo. |

**Tendência identificada:** A comunidade demonstra forte interesse em **provedores alternativos** (Vertex AI, CoreWeave, Z.AI) e **refinamento de UX de canais** (Telegram, Slack, WhatsApp). O tema de "background cycles silenciosos" (#6029) reflete demanda por agentes menos intrusivos em ambientes de trabalho.

---

## 5. Bugs e Estabilidade

### Bugs reportados/ativos (por severidade)

#### 🔴 Alta Severidade / P1
| # | Bug | Canal/Área | Impacto | Status |
|---|-----|-------------|---------|--------|
| #5943 | Estado de sessão com race conditions | Session/Core | JSONL compartilhado entre turn execution e metadata updates causa inconsistências; risco de perda de checkpoint em crashes. | OPEN (refatoração em progresso) |

#### 🟡 Média Severidade / P2
| # | Bug | Canal/Área | Impacto | Status |
|---|-----|-------------|---------|--------|
| #6084 | Slack exibe duas mensagens de compactação | Slack | Notificações duplicadas em DMs idle poluem conversas; experiência degradada. | OPEN |
| #6120 | WhatsApp replay filter nunca dispara | WhatsApp | Timestamp em milissegundos (neonize) comparado com segundos (`time.time()`); replay protection inoperante. | OPEN |
| #6122 | DeepSeek `reasoning_effort="minimal"` envia controles contraditórios | Providers | `reasoning_effort="minimal"` + `thinking.type="disabled"` causa comportamento indefinido na API DeepSeek. | OPEN |
| #6123 | Telegram classifica mídia remota incorretamente por query string | Telegram | URLs como `card.jpg?width=672` são tratadas como documento em vez de foto, impedindo agrupamento em álbum. | OPEN (fix: #6124) |

#### 🟢 Baixa Severidade / Funcional
| # | Bug | Canal/Área | Impacto | Status |
|---|-----|-------------|---------|--------|
| #6006 | Mensagens citadas no QQ nunca chegam ao agente | QQ | Quoted messages não são transmitidas; agentes não conseguem contexto de respostas a citações. | CLOSED |
| #5898 | GPT-6 via GitHub Copilot retorna erro de provider | Providers | Modelo não reconhecido pelo gateway; quebra autenticação Copilot. | CLOSED |
| #6085 | DeepSeek websearch torna LLM calls inutilizáveis | Providers | Toggle de websearch insercia `web_search` em Chat Completions, causando erro de desserialização. | CLOSED (fix: #6104, #6086) |

**Observação de estabilidade:** O bug de `web_search` (#6085) afetou potencialmente todos os usuários do DeepSeek com web search habilitado e foi resolvido por dois PRs simultâneos. O estado de sessão centralizado em SQLite (#5943) é a preocupação técnica mais significativa em aberto.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features solicitadas (últimas 24h)

| # | Feature | Canal/Área | Relevância Estratégica |
|---|---------|------------|-------------------------|
| #6121 | Enviar múltiplas imagens como álbuns no Telegram | Telegram | Melhora UX em agentes que geram múltiplas imagens; alinhado com boas práticas da API Telegram. |
| #6111 | Workspace picker: drive list, folder creation e atalhos no Windows | WebUI | Melhora experiência de workspace em Windows; indica base de usuários desktop Windows. |
| #5983 | Seleção de reasoning effort via catalog de provider | WebUI | Substitui campo de texto livre por seleção baseada em capacidades declaradas do modelo; UX-first. |
| #6091 | Managed computer use com Cua Driver | Apps | Expande capacidades de automação de desktop; differentiation competitive. |
| #6118 | Opt-in completion review para goals e child tasks | Agent | Adiciona checkpoint de validação para tarefas com entregáveis concretos; robustez em agentes autônomos. |

### Features em desenvolvimento ativo (PRs abertos)

| # | Feature | Prioridade | Sinais de Roadmap |
|---|---------|------------|-------------------|
| #5955 | Claude on Vertex AI | P2 | Provedores enterprise em expansão; alinhamento com ecossistema Google Cloud. |
| #3207 | Z.AI CN/Global/Coding Plan providers | P2 | Split de provedor único em múltiplos; reflete rebranding Zhipu → Z.AI. |
| #6103 | CoreWeave Inference provider | P2 | Documentação de provedor custom; incentivo a deployments GPU-optimized. |
| #4919 | Custom Bot API base URL para Telegram | P2 | Suporte a self-hosted Bot API servers; caso de uso enterprise/privado. |
| #6014 | Keenable MCP preset | P2 | Expansão de MCP (Model Context Protocol) com provedor de search. |

**Direção de roadmap implícita:** O projeto está investindo em **(1) diversificação de provedores enterprise** (Vertex AI, CoreWeave, Z.AI), **(2) refinamento de canais de messaging** (Telegram, Slack, WhatsApp, QQ), e **(3) automação avançada** (computer use, recovery de sessões). A ausência de features mobile-first ou de voz indica foco em usuários desktop/enterprise.

---

## 7. Resumo de Feedback dos Usuários

### Dores relatadas

1. **Invasividade de notificações de sistema** — Usuários reportam que mensagens de "Compressing context…" e "Context compacted" perturbam conversas, especialmente em DMs idle com `idleCompactAfterMinutes` habilitado. Issue #6029 (closed) originou feature request para supressão, indicando problema recorrente.

2. **Incompatibilidade com modelos novos** — A série GPT-6 via GitHub Copilot (#5898) não é reconhecida, e modelos com suporte Responses API (#5896) causam erro 500 em endpoints `/chat/completions`. Usuários experimentais enfrentam bloqueios ao adotar modelos recém-lançados.

3. **UX fragmentada em WhatsApp** — O filtro de replay inoperante (#6120) permite que mensagens antigas sejam re-processadas, causando confusão em conversas ativas. Combinado com a falta de agrupamento de mídia, a experiência WhatsApp parece menos polida que Telegram.

4. **Mensagens citadas no QQ ignoradas** — Usuários do QQ dependem de contexto de citações para respostas contextualizadas; a falha (#6006, closed) impediu esse fluxo de trabalho.

### Cenários de uso evidenciados

- **Agentes de background maintenance**: Idle checks, heartbeat cycles, dream cycles — indicando uso como assistente persistente.
- **Multi-channel deployment**: Issues de Slack, Telegram, WhatsApp, QQ e Feishu confirmam base de usuários distribuída.
- **Enterprise deployment**: Demanda por Vertex AI, CoreWeave, self-hosted Bot API servers, e workspaces Windows sugere adoption em contextos corporativos.
- **Computer use**: Feature #6091 em desenvolvimento indica interesse em automação de desktop via Cursor/Claude's CUA.

### Satisfação/Insatisfação

- **Positivo**: Correções rápidas de bugs críticos (web_search resolvido em <24h por dois PRs independentes); documentação de novos provedores (CoreWeave).
- **Negativo**: Regressões de compatibilidade com modelos novos; UX de notificações intrusivas; ausência de releases formais com changelog.

---

## 8. Backlog que Merece Atenção

### Issues antigas sem movimento recente

| # | Issue | Criada | Atualizada | Dias inativa | Prioridade | Nota |
|---|-------|--------|------------|---------------|------------|------|
| #5898 | GPT-6 via GitHub Copilot | 2026-09-24 | 2026-10-09 | 1 dia | Bug | Closed, mas root cause pode afetar outros modelos Copilot. |
| #5896 | OpenAI Responses API para opencode | 2026-09-24 | 2026-10-09 | 1 dia | Feature | Closed, mas padrão Responses API pode gerar mais issues similares. |
| #3207 | Split Zhipu em Z.AI providers | 2026-04-16 | 2026-10-09 | ~6 meses | Feature | PR aberto desde abril; conflito pode indicar complexidade de migração. |
| #1541 | sender_id para contexto do agente | 2026-03-05 | 2026-10-09 | ~7 meses | Feature | Finalmente merged; caso exemplar de issue de longa duração. |
| #4919 | Custom Bot API base URL Telegram | 2026-07-14 | 2026-10-09 | ~3 meses | Feature | PR aberto com conflito; demanda enterprise sem resolução. |

### PRs com conflitos ou estagnados

| # | PR | Conflito desde | Impacto |
|---|-----|----------------|---------|
| #5943 | refactor(session): centralize state ownership in SQLite | Não especificado | **Crítico** — refatoração P1 para estabilidade; conflitos indicam complexidade de merge. |
| #5955 | feat(providers): add Claude on Vertex AI | Não especificado | Expansão de provedores enterprise; conflitos podem bloquear adoption. |
| #3207 | split zhipu into Z.AI providers | Desde abertura (06 meses) | Rebranding pendente; clientes Zhipu China podem estar impacted. |

### Recomendações de priorização

1. **Resolver conflitos do #5943** — Refatoração de estado de sessão é P1 e bloqueia melhorias de estabilidade.
2. **Revisitar #4919** — Suporte a self-hosted Telegram API tem 3 meses de backlog e atende demanda enterprise.
3. **Monitorar regressões de Responses API** — Padrão novo (#5896 closed) pode gerar mais issues de compatibilidade com provedores Chat Completions-only.
4. **Documentar estratégia de releases** — Ausência de releases formais nas últimas 24h, combinada com v0.3.5 referenciada em bugs, sugere necessidade de comunicação mais frequente de changelog.

---

*Relatório gerado em 2026-10

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-10-10

---

## 1. Panorama do Dia

O Hermes Agent mantém uma atividade intensa no período analisado, com **50 issues e 50 PRs atualizados nas últimas 24h**, indicando uma comunidade altamente engajada. Não houve novos lançamentos oficiais, mas o ritmo de desenvolvimento permanece robusto. A base de código apresenta **2 bugs críticos fechados** relacionados a compatibilidade com Python 3.11–3.13, além de **3 issues P0/P1 abertas** que requerem atenção imediata. A distribuição Desktop para Windows e a estabilidade do gateway lideram as preocupações da comunidade.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24h.**

O projeto não publicou novas versões no período analisado. Isso pode indicar uma fase de estabilização ou preparação para um próximo lançamento.

---

## 3. Progresso do Projeto

### PRs Recentemente Fechados/Mergidos

| # | PR | Descrição | Impacto |
|---|-----|-----------|---------|
| [#132294](https://github.com/NousResearch/hermes-agent/pull/132294) | fix(tools): keep already-sent tool schemas byte-identical | Resolve problema de cache com schemas de tools MCP, preservando prefixos de conversa | **P0** — Evita regeneração desnecessária de schemas |
| [#135869](https://github.com/NousResearch/hermes-agent/pull/135869) | fix(desktop): require explicit dependency consent for forced plugin reinstalls | Adiciona checkbox para aprovação de dependências Python ao forçar reinstall de plugins | Segurança e UX |
| [#135827](https://github.com/NousResearch/hermes-agent/issues/135827) | Bug closed: context_engine.py crashes on Python 3.11–3.13 | Falta `from __future__ import annotations` causava crash em classes com anotações autorreferenciais | **P0** — Compatibilidade Python |
| [#135587](https://github.com/NousResearch/hermes-agent/issues/135587) | Bug closed: gateway fails to import on Python 3.11/3.12 | `typing.Generator` requer 3 argumentos; autofix de linter quebrou importação | **P1** — Blocker para gateway |

### PRs Abertos de Alto Impacto

| # | PR | Descrição | Prioridade |
|---|-----|-----------|-----------|
| [#135877](https://github.com/NousResearch/hermes-agent/pull/135877) | fix(update): scope a restarted sibling profile to its own credentials | Evita que `hermes update` reinicie profile vizinho com credenciais do updater | **P2, Security** |
| [#130909](https://github.com/NousResearch/hermes-agent/pull/130909) | fix(gateway): preserve compaction summary cache prefix | Preserva conteúdo gerado por compactação sem adicionar novo prefixo de timestamp | **P0, Performance** |
| [#126167](https://github.com/NousResearch/hermes-agent/pull/126167) | fix(gateway): preserve prompt pins across synthetic turns | Mantém prompt pins em eventos sintéticos (steer, goal, heartbeat) | **P0** |
| [#107025](https://github.com/NousResearch/hermes-agent/pull/107025) | feat(memory): opt in to unattended consolidation | Permite consolidation automática de MEMORY.md e USER.md em background | **P2** |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários + reações)

1. **[#133992](https://github.com/NousResearch/hermes-agent/issues/133992)** — macOS Desktop update hand-off recusa próprio hermes update (24 comentários, 👍 3)
   - **Severidade:** P2
   - **Demanda:** Regression que impede atualizações do Desktop app em macOS; `hermes update` recusa lock do próprio hand-off
   - **Impacto:** Usuários macOS não conseguem atualizar via interface Desktop

2. **[#131859](https://github.com/NousResearch/hermes-agent/issues/131859)** — Cannot open PR via API: CreatePullRequest permission error (17 comentários, 👍 0)
   - **Severidade:** P2, Bloqueada
   - **Demanda:** Criação de PRs via API falha para contas específicas com erro de permissão
   - **Impacto:** Desenvolvedores não conseguem contribuir via fork

3. **[#108335](https://github.com/NousResearch/hermes-agent/issues/108335)** — 1Password browser-vault fill omite --vault (9 comentários, 👍 0)
   - **Severidade:** P3
   - **Demanda:** Preenchimento de senhas falha com autenticação service-account no 1Password CLI
   - **Impacto:** Usuários 1Password com service accounts não conseguem auto-fill

4. **[#55287](https://github.com/NousResearch/hermes-agent/issues/55287)** — Add configurable chat width setting (7 comentários, 👍 3)
   - **Severidade:** P3, Needs Decision
   - **Demanda:** Usuários querem controlar largura do chat no Desktop app (~780px fixo é muito estreito)
   - **Sinal de roadmap:** Feature de customização de UI

5. **[#79357](https://github.com/NousResearch/hermes-agent/issues/79357)** — idle_compact_after_seconds never fires in gateway mode (7 comentários, 👍 2)
   - **Severidade:** P2
   - **Demanda:** Compactação de contexto por inatividade nunca dispara; watchdog reseta `_last_activity_ts` antes da checagem
   - **Impacto:** Memória desnecessária em sessões gateway

### Análise de Tendências

- **macOS e Desktop** são áreas de atenção prioritária (3+ issues P2 relacionadas)
- **Segurança de credenciais** aparece em múltiplos PRs (#135877, #135868, #135879)
- **Compatibilidade com Python 3.11–3.13** foi resolvida mas deixa rastro de dívida técnica
- **Integração Tailscale/Gateway** tem demanda real de produção (#135867)

---

## 5. Bugs e Estabilidade

### P0 — Críticos (Impedem uso)

| # | Bug | Descrição | Status |
|---|-----|-----------|--------|
| [#135587](https://github.com/NousResearch/hermes-agent/issues/135587) | gateway fails to import on Python 3.11/3.12 | `typing.Generator` precisa 3 args; autofix quebrou importação | **FECHADO** |
| [#135827](https://github.com/NousResearch/hermes-agent/issues/135827) | context_engine.py crashes on Python 3.11–3.13 | Falta `__future__ import annotations` | **FECHADO** |

### P1 — Alto Impacto

| # | Bug | Descrição |
|---|-----|-----------|
| [#130909](https://github.com/NousResearch/hermes-agent/pull/130909) | Preserve compaction summary cache prefix (PR aberto P0) |
| [#126167](https://github.com/NousResearch/hermes-agent/pull/126167) | Preserve prompt pins across synthetic turns (PR aberto P0) |

### P2 — Significativos (Regressões e Falhas)

| # | Bug | Componente | Link |
|---|-----|-----------|------|
| #133992 | macOS Desktop update handoff recusa próprio update | CLI, Desktop | [Issue #133992](https://github.com/NousResearch/hermes-agent/issues/133992) |
| #131859 | CreatePullRequest permission error na API | Auth | [Issue #131859](https://github.com/NousResearch/hermes-agent/issues/131859) |
| #48523 | convert_messages não remove metadata interno — causa 400 | Gateway, Sessions | [Issue #48523](https://github.com/NousResearch/hermes-agent/issues/48523) |
| #79357 | idle_compact_after_seconds nunca dispara | Gateway, Compression | [Issue #79357](https://github.com/NousResearch/hermes-agent/issues/79357) |
| #135795 | multidict 6.7.1 com CVE-2026-104874 no uv.lock | Dependencies | [Issue #135795](https://github.com/NousResearch/hermes-agent/issues/135795) |
| #135699 | Telegram retryable-fatal deixa gateway zombie por dias | Telegram, Gateway | [Issue #135699](https://github.com/NousResearch/hermes-agent/issues/135699) |
| #135872 | computer_use element clicks recusados em cua-driver 0.34 | Tools, Computer Use | [Issue #135872](https://github.com/NousResearch/hermes-agent/issues/135872) |

### P3 — Moderados

| # | Bug | Descrição |
|---|-----|-----------|
| #108335 | 1Password browser-vault fill falha com service-account |
| #125477 | /goal continuation rows com display_kind NULL |
| #135788 | Windows fresh catalog plugin install crash (FileNotFoundError) |
| #135659 | scripts/run_tests.sh quebrado no mac |
| #135835 | computer_use no GNOME/Mutter Wayland: surfaces inacessíveis |

### Alerta de Segurança

**[#135795](https://github.com/NousResearch/hermes-agent/issues/135795)** — `uv.lock` bloqueado em multidict 6.7.1 com **CVE-2026-104874** (reference leak na C extension, memória cresce sem limite). Fix disponível em 6.9.1. **Prioridade: P2, Dependencies.**

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Propostas

| # | Feature | Descrição | Sinais de Demanda |
|---|---------|-----------|-------------------|
| [#55287](https://github.com/NousResearch/hermes-agent/issues/55287) | Configurable chat width setting | Controle de largura do chat no Desktop | 3 👍, feature request de UI |
| [#87574](https://github.com/NousResearch/hermes-agent/issues/87574) | Animated desktop avatar / companion plugin | Avatar animado que reage ao estado do agente | Plugin SDK demonstrado |
| [#135867](https://github.com/NousResearch/hermes-agent/issues/135867) | Field report + patterns para phone→Tailscale→gateway | 5 padrões para deployment Windows + Android | 2 👍, relatório de produção |
| [#130226](https://github.com/NousResearch/hermes-agent/issues/130226) | Async-delegation completions wake parent on api_server | UX gap: delegate async não retoma parent no gateway | 1 👍, UX improvement |
| [#134976](https://github.com/NousResearch/hermes-agent/pull/134976) | feat(catalog): add hermes-muse companion assembly | Catálogo: nova assembly community "hermes-muse" | Meta Muse inspired |

### Features em Desenvolvimento

| # | PR | Feature | Progresso |
|---|-----|---------|-----------|
| [#107025](https://github.com/NousResearch/hermes-agent/pull/107025) | feat(memory): opt in to unattended consolidation | Background memory consolidation | Aberto |
| [#119472](https://github.com/NousResearch/hermes-agent/pull/119472) | feat(cron): run /goal prompts as bounded loops | Scheduled goals via GoalManager | Aberto |
| [#135870](https://github.com/NousResearch/hermes-agent/pull/135870) | feat(skills): allow writes into skill's own subdirectories | Habilita escrita em steps/, checks/, etc. | Aberto |
| [#125601](https://github.com/NousResearch/hermes-agent/issues/125601) | Request signed Windows package (MSIX) | Distribuição oficial Windows com SAC | Aberto |

### Sinais de Roadmap

1. **Distribuição Desktop para Windows** é demanda aberta (#125601) — MSIX retorna 404, Hermes.exe bloqueado por Smart App Control
2. **Customização de UI** aparece em múltiplas solicitações (chat width, avatar animado)
3. **Integração mobile** via Tailscale (#135867) é caso de uso real documentado
4. **Memory management** recebe atenção com unattended consolidation

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Reportadas

| Dor | Detalhamento | Impacto |
|-----|-------------|--------|
| **Atualização Desktop macOS quebrada** | Usuários macOS não conseguem atualizar via app; fallback para CLI | Experiência degradada em macOS |
| **Criação de PRs via API falha** | Contribuidores não conseguem abrir PRs de forks | Barreia contribuição open source |
| **Windows sem package oficial** | MSIX 404, executável bloqueado por SAC | Usuários Windows sem distribuição confiável |
| **Tests quebrados no macOS** | `scripts/run_tests.sh` falha em clones fresh | Onboard de devs macOS impactado |
| **CVE em dependência não resolvida** | multidict 6.7.1 com memory leak no lock | Risco de segurança em produção |

### Cenários de Uso Observados

- **Production deployment**: Android + Tailscale + Hermes gateway + Termux como work node (Windows 11)
- **Desktop companion**: Plugin avatar animado demonstrado via SDK
- **Community assemblies**: hermes-muse (inspirado em Meta Muse) em desenvolvimento
- **Bot Mode group rooms**: Novos threads como sessões de membros isolados

### Satisfação/Insatisfação

| Aspecto | Sentimento |
|---------|-----------|
| Compatibilidade Python | **Insatisfeito** — 2 P0s de compatibilidade fechados |
| Desktop macOS | **Insatisfeito** — Regression de update |
| Integração Windows | **Insatisfeito** — Sem package assinado |
| Segurança de credenciais | **Positivo** — Múltiplos PRs de segurança abertos |
| Performance de gateway | **Preocupado** — Cache compaction e prompt pins |

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Sem Atribuição

| # | Issue | Criado | Dias Inativo | Prioridade | Link |
|---|-------|--------|-------------|-----------|------|
| #79357 | idle_compact_after_seconds never fires | 2026-08-05 | ~65 dias | P2 | [Issue #79357](https://github.com/NousResearch/hermes-agent/issues/79357) |
| #48523 | convert_messages doesn't strip metadata | 2026-06-18 | ~114 dias | P2 | [Issue #485

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-10-10

---

## 1. Panorama do Dia

O projeto PicoClaw apresenta **atividade moderada** nas últimas 24 horas, com 4 issues e 6 pull requests atualizados. O cenário é marcado pela **resolução de vulnerabilidades de dependências** (5 PRs de versionamento automatizados pelo Dependabot) e pela **emergência de um incidente crítico**: o certificado TLS do site oficial expirou em 10/09, deixando o domínio `picoclaw.io` inacessível. Duas issues abertas demandam atenção imediata — uma sobre build Android com falha em resolução DNS e outra com pedido de suporte a reverse proxy via Nginx. O projeto não registrou novas releases.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O último ciclo de atividade de releases aparenta estar pausado, embora a atualização massiva de dependências (5 PRs Dependabot) sugira preparação para uma futura publicação de versão com patches de segurança e compatibilidade.

---

## 3. Progresso do Projeto

Cinco pull requests foram fechados/merged nas últimas 24h, todos relacionados à **atualização de dependências Go**:

| PR | Dependência | De | Para | Impacto |
|----|-------------|-----|------|---------|
| [#3389](https://github.com/sipeed/picoclaw/pull/3389) | `golang.org/x/crypto` | 0.53.0 | 0.57.0 | Patch de segurança crypto |
| [#3388](https://github.com/sipeed/picoclaw/pull/3388) | `github.com/modelcontextprotocol/go-sdk` | 1.6.1 | 1.8.0 | Suporte a novas features MCP |
| [#3387](https://github.com/sipeed/picoclaw/pull/3387) | `github.com/anthropics/anthropic-sdk-go` | 1.55.1 | 1.74.0 | Atualização API Anthropic |
| [#3386](https://github.com/sipeed/picoclaw/pull/3386) | `maunium.net/go/mautrix` | 0.27.0 | 0.31.0 | Melhorias integração Matrix |
| [#3385](https://github.com/sipeed/picoclaw/pull/3385) | `github.com/line/line-bot-sdk-go/v8` | 8.20.1 | 8.22.0 | Patch SDK LINE |

**Avanço**: Manutenção de dependências em dia, crucial para segurança e compatibilidade contínua com provedores de API (Anthropic, Matrix, LINE).

---

## 4. Temas Quentes da Comunidade

### Issue com maior engajamento

| Issue | Título | Comentários | 👍 | Status |
|-------|--------|-------------|----|----|
| [#3377](https://github.com/sipeed/picoclaw/issues/3377) | TLS certificate for picoclaw.io expired | 4 | 2 | CLOSED (stale) |

**Análise**: A expiração do certificado TLS do site oficial é o tema mais comentado. A issue, marcada como stale, foi criada em 12/09 e reportada como CRITICAL. A comunidade demonstra frustração com a indisponibilidade do site, que afeta todos os visitantes. O fato de estar marcada como "stale" sem resolução levanta preocupações sobre manutenção.

### Issue de destaque técnico

| Issue | Título | Comentários | 👍 | Status |
|-------|--------|-------------|----|--------|
| [#3391](https://github.com/sipeed/picoclaw/issues/3391) | Pico channel splits multi-line input | 2 | 0 | CLOSED (stale) |

**Análise**: Bug que quebra UX ao enviar mensagens multi-linha (código, poesia) como mensagens separadas. Interessante para usuários técnicos que usam o cliente mobile TUI.

---

## 5. Bugs e Estabilidade

### Bug Crítico Aberto (2026-10-09)

**[#3420](https://github.com/sipeed/picoclaw/issues/3420)** — Android build: pure-Go (CGO_ENABLED=0) binaries fail DNS resolution

- **Severidade**: Alta (build oficial Android quebrado)
- **Sintoma**: `dial udp 127.0.0.1:53: connect: connection refused`
- **Impacto**: Gateway não consegue alcançar endpoints externos (ex: `/models`)
- **Componentes afetados**: `libpicoclaw-web.so`, `libpicoclaw.so`

**Recomendação**: Prioridade alta para triagem e correção.

### Bug Fechado (stale)

**[#3391](https://github.com/sipeed/picoclaw/issues/3391)** — Pico channel splits multi-line input into multiple messages

- **Status**: Closed (stale)
- **Severidade**: Média
- ** workaround possível**: Usuários precisam escapar newlines manualmente

---

## 6. Pedidos de Features e Sinais de Roadmap

### Feature Request Aberto (2026-10-02)

**[#3415](https://github.com/sipeed/picoclaw/issues/3415)** — Suporte a reverse proxy Nginx com path prefix `/pico/`

- **Autor**: altman08
- **Proposta**: Adicionar parâmetro ao Web Launcher para permitir deploy sob subpath
- **Cenário**: Necessidade de hospedar PicoClaw em `https://example.com/pico/` via Nginx
- **Complexidade**: Requer mudanças em múltiplos componentes (frontend, backend, WebSocket)

**Análise**: Demanda comum em ambientes enterprise/deploy. Sugere que o projeto está sendo adotado em cenários de infraestrutura mais complexos.

### Feature PR Aberta (2026-10-01)

**[#3414](https://github.com/sipeed/picoclaw/pull/3414)** — feat(agent): add wall-clock turn time budget

- **Autor**: racso2609
- **Feature**: Novo parâmetro `agents.defaults.turn_time_budget_seconds`
- **Benefício**: Previne loops infinitos de agents; força resumo conciso quando budget excedido

**Análise**: Feature de robustez para agentes AI, relevante para uso em produção. Status: stale (precisa review).

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Dor | Issue | Evidência |
|-----|-------|-----------|
| **Site oficial indisponível** | [#3377](https://github.com/sipeed/picoclaw/issues/3377) | Certificado TLS expirado há ~30 dias |
| **Build Android quebrado** | [#3420](https://github.com/sipeed/picoclaw/issues/3420) | Usuários Android não conseguem usar gateway |
| **Multi-line input quebrado** | [#3391](https://github.com/sipeed/picoclaw/issues/3391) | UX degradada para usuarios mobile TUI |

### Cenários de Uso Emergentes

- **Deploy corporativo via Nginx**: Demanda por reverse proxy ([#3415](https://github.com/sipeed/picoclaw/issues/3415))
- **Controle de custos em agents**: Necessidade de budgets por turno ([#3414](https://github.com/sipeed/picoclaw/pull/3414))

### Indicadores de Satisfação/Insatisfação

- 🔴 **Crítico**: Indisponibilidade do site afeta primeira impressão de novos usuários
- 🟡 **Moderado**: Issues sendo marcadas como "stale" podem indicar gargalo em triagem/manutenção
- 🟢 **Positivo**: Atualização ativa de dependências demonstra atenção à segurança

---

## 8. Backlog que Merece Atenção

### Issues sem resposta / stale

| # | Título | Criado | Atualizado | Prioridade |
|---|--------|--------|------------|------------|
| [#3377](https://github.com/sipeed/picoclaw/issues/3377) | TLS certificate expired (CRITICAL) | 2026-09-12 | 2026-10-09 | 🔴 **Urgente** |
| [#3391](https://github.com/sipeed/picoclaw/issues/3391) | Multi-line input bug | 2026-09-24 | 2026-10-09 | 🟡 Média |
| [#3415](https://github.com/sipeed/picoclaw/issues/3415) | Nginx reverse proxy support | 2026-10-02 | 2026-10-09 | 🟡 Média |
| [#3414](https://github.com/sipeed/picoclaw/pull/3414) | Wall-clock turn budget (PR) | 2026-10-01 | 2026-10-09 | 🟡 Média |

### Ação Recomendada

1. **Renovar certificado TLS** do domínio `picoclaw.io` — impacto imediato na credibilidade do projeto
2. **Triagar issue #3420** — build Android oficial está quebrado
3. **Review PR #3414** — feature de robustez aguardando merge
4. **Avaliar priorização de #3415** — indica adoção em ambientes enterprise

---

## Métricas Resumidas (2026-10-10)

| Indicador | Valor |
|-----------|-------|
| Issues ativas abertas | 2 |
| Issues fechadas (24h) | 2 |
| PRs abertos | 1 |
| PRs merged/fechados | 5 |
| Novas releases | 0 |
| Issues stale/críticas | 1 (TLS expirado) |
| Bugs críticos abertos | 1 (Android DNS) |

---

*Relatório gerado automaticamente com base em dados do GitHub do repositório [sipeed/picoclaw](https://github.com/sipeed/picoclaw).*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

Sem atividade nas últimas 24 horas.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório de Projeto CoPaw — 2026-10-10

---

## 1. Panorama do dia

O projeto CoPaw apresenta **alta atividade no dia de hoje**, com 35 pull requests atualizados (22 abertos, 13 merged/fechados) e 19 issues processadas (13 abertas, 6 fechadas). Não houve novas releases publicadas nas últimas 24h. O ecossistema continua em intensa evolução, com foco em correções de bugs críticos, melhorias de estabilidade e expansão de funcionalidades internacionais. A equipe demonstrou responsividade, com múltiplas correções de segurança e bugs de usabilidade sendo merged rapidamente. A ausência de releases pode indicar que a equipe está acumulando mudanças para um próximo lançamento coordenado.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

A última atividade de release identificada foi o PR #8121, que prepara o **QwenPaw Creator 2.0.1**, mas ainda se encontra em estado aberto. Recomenda-se monitorar a página de releases do repositório para o próximo anúncio oficial.

---

## 3. Progresso do Projeto

### PRs Merged/Closed Mais Relevantes

| PR | Título | Impacto | Link |
|----|--------|---------|------|
| [#8136](https://github.com/agentscope-ai/CoPaw/pull/8136) | fix(media): preserve EXIF orientation during image resizing | Corrige bug de orientação de imagens após redimensionamento, garantindo que imagens rotacionadas cheguem corretamente aos modelos. | [#8136](https://github.com/agentscope-ai/CoPaw/pull/8136) |
| [#8010](https://github.com/agentscope-ai/CoPaw/pull/8010) | fix(agents): recover from media payload rejections | Permite recuperação de sessões que falharam após rejeição de mídia, impedindo que o contexto contaminado bloqueie conversas futuras. | [#8010](https://github.com/agentscope-ai/CoPaw/pull/8010) |
| [#8055](https://github.com/agentscope-ai/CoPaw/pull/8055) | fix(skills): offload pool download copy and sweep orphan stages | Resolve problema de download inline de skills grandes (~80MB/13k arquivos) no event loop, movendo operações para background. | [#8055](https://github.com/agentscope-ai/CoPaw/pull/8055) |
| [#8089](https://github.com/agentscope-ai/CoPaw/pull/8089) | fix(console): support terminal identity over LAN HTTP | Corrige falha de renderização em origens LAN HTTP ao usar `crypto.randomUUID()` indisponível fora de secure context. | [#8089](https://github.com/agentscope-ai/CoPaw/pull/8089) |
| [#8155](https://github.com/agentscope-ai/CoPaw/pull/8155) | feat(local-models): update QwenPaw-Flash 9B, 27B and 35B-A3B | Adiciona recomendações de modelos locais para 27B e 35B-A3B, expandindo suporte a hardware de maior capacidade. | [#8155](https://github.com/agentscope-ai/CoPaw/pull/8155) |
| [#8130](https://github.com/agentscope-ai/CoPaw/pull/8130) | fix(console): keep only the page title in settings headers | Unifica visualização de páginas de settings, eliminando fragmentação visual de múltiplas zonas. | [#8130](https://github.com/agentscope-ai/CoPaw/pull/8130) |
| [#8141](https://github.com/agentscope-ai/CoPaw/pull/8141) | fix(qwenpaw-data): keep UI host types package-local | Corrige build de release do QwenPaw-Data removendo dependência circular com código-fonte do console. | [#8141](https://github.com/agentscope-ai/CoPaw/pull/8141) |
| [#8081](https://github.com/agentscope-ai/CoPaw/pull/8081) | feat: Add view_audio built-in tool | Fecha feature request adicionando ferramenta equivalente a `view_image`/`view_video` para áudio. | [#8081](https://github.com/agentscope-ai/CoPaw/pull/8081) |

### PRs Abertos de Alto Impacto

| PR | Título | Status | Link |
|----|--------|--------|------|
| [#7565](https://github.com/agentscope-ai/CoPaw/pull/7565) | feat(plugins): add clean unload and rollback-safe hot reload | Aberto (XXXL) | Implementa caminho de unload limpo e hot reload seguro para plugins, evitando rebuild de workspaces ativos. |
| [#7931](https://github.com/agentscope-ai/CoPaw/pull/7931) | feat(chat): add durable paginated transcript history | Aberto (XXXL) | Adiciona armazenamento SQLite por sessão com catalog routing, cursores e paginação durável. |
| [#8161](https://github.com/agentscope-ai/CoPaw/pull/8161) | fix(i18n): complete locale parity for id/ja/pt-BR/ru/vi | Aberto (XXXL) | Corrige drift de catálogos de tradução e extrai locale maps compartilhados. |
| [#7613](https://github.com/agentscope-ai/CoPaw/pull/7613) | feat(memory): add OpenViking memory plugin | Aberto | Adiciona backend de memória com recall automático e ferramenta `memory_search`. |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários)

| Issue | Título | Comentários | Link |
|-------|--------|-------------|------|
| [#8134](https://github.com/agentscope-ai/CoPaw/issues/8134) | [Bug]: Chat history relacionada à janela de contexto do LLM | 10 | Denúncia de perda de histórico de chat, possivelmente não relacionada à janela de contexto. |
| [#8040](https://github.com/agentscope-ai/CoPaw/issues/8040) | [Bug]: embedding reindex incomplete - chunks CJK falham silenciosamente | 5 | Problema recorrente (#5950) onde chunks CJK acima do limite de tokens dropam batches inteiros. |
| [#8120](https://github.com/agentscope-ai/CoPaw/issues/8120) | [Bug]: Falhas frequentes de carregamento de página | 4 | Afeta múltiplos dispositivos; muito impactante para UX. |
| [#7599](https://github.com/agentscope-ai/CoPaw/issues/7599) | [Bug]: MissingSessionID com opencode go (CLOSED) | 4 | Já fechado com resolução. |

### Análise de Demandas

**Internacionalização em destaque:** A comunidade demonstra forte interesse em expansão de idiomas (#8160 - espanhol, #7809 - i18n para tool approval cards), indicando mercado em expansão para regiões hispanofalantes e necessidade de adequação a contextos multilíngues.

**Segurança crítica reportada:** A issue #8153 reporta RCE via MCP Driver, gerando preocupação significativa. Este tema deve ser priorizado pela equipe de manutenção.

**Performance do console:** A issue #8135 denuncia uso elevado de GPU com backdrop-filter, especialmente visível em iGPU, sugerindo necessidade de uma camada de efeitos reduzidos para hardware limitado.

---

## 5. Bugs e Estabilidade

### Bugs Abertos (por severidade)

#### 🔴 Críticos

| Issue | Descrição | Link |
|-------|-----------|------|
| [#8153](https://github.com/agentscope-ai/CoPaw/issues/8153) | **RCE via MCP Driver** — Configuração do MCP Driver permite execução de código arbitrário como root, resultando em植入 de malware de mineração. Severidade: Segurança crítica. | [#8153](https://github.com/agentscope-ai/CoPaw/issues/8153) |
| [#8009](https://github.com/agentscope-ai/CoPaw/issues/8009) | **Imagem oversized corrompe sessão permanentemente** — Imagens rejeitadas por providers contaminam o contexto, fazendo todas as requisições subsequentes falharem. | [#8009](https://github.com/agentscope-ai/CoPaw/issues/8009) |

#### 🟠 Altos

| Issue | Descrição | Link |
|-------|-----------|------|
| [#8120](https://github.com/agentscope-ai/CoPaw/issues/8120) | **Falhas frequentes de carregamento de página** — Afeta múltiplos dispositivos; muito impactante para UX. | [#8120](https://github.com/agentscope-ai/CoPaw/issues/8120) |
| [#8158](https://github.com/agentscope-ai/CoPaw/issues/8158) | **Resposta final do assistente renderiza como bolha vazia** — Quando modelo emite Scroll headline como bloco final standalone. | [#8158](https://github.com/agentscope-ai/CoPaw/issues/8158) |
| [#8147](https://github.com/agentscope-ai/CoPaw/issues/8147) | **Console crash após troca de agente** — `crypto.randomUUID is not a function` (v2.2.2b4). Já fechado. | [#8147](https://github.com/agentscope-ai/CoPaw/issues/8147) |
| [#8134](https://github.com/agentscope-ai/CoPaw/issues/8134) | **Chat history desaparece inexplicavelmente** — Usuários reportam perda total de histórico. | [#8134](https://github.com/agentscope-ai/CoPaw/issues/8134) |

#### 🟡 Médios

| Issue | Descrição | Link |
|-------|-----------|------|
| [#8143](https://github.com/agentscope-ai/CoPaw/issues/8143) | **Spam de erros SVG no console** — 22 erros por sessão por atributo `width`/`height` com valor "small". | [#8143](https://github.com/agentscope-ai/CoPaw/issues/8143) |
| [#8150](https://github.com/agentscope-ai/CoPaw/issues/8150) | **Feishu: imagens em mensagens post são descartadas silenciosamente** — Direção inbound (oposto de #2792). | [#8150](https://github.com/agentscope-ai/CoPaw/issues/8150) |
| [#8040](https://github.com/agentscope-ai/CoPaw/issues/8040) | **Embedding reindex incompleto com chunks CJK** — Recorrência de #5950. | [#8040](https://github.com/agentscope-ai/CoPaw/issues/8040) |
| [#8129](https://github.com/agentscope-ai/CoPaw/issues/8129) | **Redimensionamento de imagens perde orientação EXIF** — Já fechado via #8136. | [#8129](https://github.com/agentscope-ai/CoPaw/issues/8129) |

### Bugs Recentemente Fechados (resolvidos)

| Issue | Descrição | Link |
|-------|-----------|------|
| [#8073](https://github.com/agentscope-ai/CoPaw/issues/8073) | Unable to access conversation page (v2.2.2.beta4) | [#8073](https://github.com/agentscope-ai/CoPaw/issues/8073) |
| [#7599](https://github.com/agentscope-ai/CoPaw/issues/7599) | MissingSessionID com opencode go | [#7599](https://github.com/agentscope-ai/CoPaw/issues/7599) |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| Issue | Feature | Relevância | Link |
|-------|---------|------------|------|
| [#8160](https://github.com/agentscope-ai/CoPaw/issues/8160) | **Adicionar espanhol (es) como idioma de interface** | Idiomas atuais: zh, en, ja, ru, pt-BR, id, vi. Espanhol expandiria mercado significativamente. | [#8160](https://github.com/agentscope-ai/CoPaw/issues/8160) |
| [#8152](https://github.com/agentscope-ai/CoPaw/issues/8152) | **Adicionar campo de备注 (notas) ao adicionar contas no Hub** | Melhoria de gestão para administradores de múltiplas contas. | [#8152](https://github.com/agentscope-ai/CoPaw/issues/8152) |
| [#8142](https://github.com/agentscope-ai/CoPaw/issues/8142) | **Migrar de Tauri2 para Electron para compatibilidade com Kylin Linux V10** | Kylin V10 não suporta Tauri2; Electron garantiria compatibilidade. | [#8142](https://github.com/agentscope-ai/CoPaw/issues/8142) |
| [#8148](https://github.com/agentscope-ai/CoPaw/issues/8148) | **Reasoning fold/microcompaction nunca dispara em modelos com context_size grande** | Modelos com janelas grandes (100K-200K tokens) nunca ativam pressão de compactação. | [#8148](https://github.com/agentscope-ai/CoPaw/issues/8148) |
| [#8135](https://github.com/agentscope-ai/CoPaw/issues/8135) | **Adicionar tier de "efeitos reduzidos" oficial para GPU** | backdrop-filter pesado (12-28px) mantém GPU ocupada especialmente em iGPU. | [#8135](https://github.com/agentscope-ai/CoPaw/issues/8135) |

### Features Em Progresso

| PR | Feature | Link |
|----|---------|------|
| [#8161](https://github.com/agentscope-ai/CoPaw/pull/8161) | Paridade de locale para id/ja/pt-BR/ru/vi e extração de UI locale maps | [#8161](https://github.com/agentscope-ai/CoPaw/pull/8161) |
| [#7613](https://github.com/agentscope-ai/CoPaw/pull/7613) | Plugin de memória OpenViking | [#7613](https://github.com/agentscope-ai/CoPaw/pull/7613) |
| [#8081](https://github.com/agentscope-ai/CoPaw/pull/8081) | Ferramenta view_audio (já closed/merged) | [#8081](https://github.com/agentscope-ai/CoPaw/pull/8081) |

### Indicadores de Roadmap

1. **Modularidade e segurança de plugins:** O PR #7565 (clean unload + rollback-safe hot reload) sugere foco em estabilidade de ecossistema de plugins.
2. **Persistência de histórico:** O PR #7931 (durable paginated transcript) indica evolução para conversas mais longas e recupera.
3. **Suporte a modelos locais expandido:** O PR #8155 demonstra comprometimento com modelos on-premise (27B, 35B-A3B).
4. **Suporte a plataforma Linux:** A issue #8142 pode sinalizar reavaliação de framework desktop.

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais Reportadas

| Categoria | Problema

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-10-10

---

## 1. Panorama do Dia

ZeroClaw mantém um nível de atividade muito elevado: **50 PRs** e **19 issues** foram atualizados nas últimas 24 horas, com apenas **1 PR merged/fechado** e **3 issues fechadas**. A comunidade demonstra engajamento intenso, com 6 RFCs ativas e múltiplas discussões arquiteturais em curso. Não há lançamentos registrados no período, sugerindo que a equipe aguarda maturação das mudanças abertas antes de um próximo release. O estado geral indica um projeto em **fase de desenvolvimento intensivo**, com foco em estabilidade (bugs P1 abertos) e extensibilidade (RFCs para A2A, RAG, search routing).

---

## 2. Lançamentos

**Nenhum release publicado nas últimas 24 horas.**

O projeto não registrou novas versões no período. Dado o volume de atividade, é provável que a equipe esteja preparando um release acumulado contendo correções de bugs críticos (como os bugs P1 do SQLite backend e do tracking de custos OpenRouter) e features aceitas via RFC.

---

## 3. Progresso do Projeto

### PRs em destaque (abertos)

| # | Título | Autor | Tamanho | Risco | Resumo |
|---|--------|-------|---------|-------|--------|
| [#11466](https://github.com/zeroclaw-labs/zeroclaw/pull/11466) | `feat(config)`: report per-target application results | Audacity88 | XL | Alto | Registra o último resultado de aplicação para cada alvo configurado, permitindo diagnóstico granular de configurações de runtime. |
| [#11456](https://github.com/zeroclaw-labs/zeroclaw/pull/11456) | `feat(tools)`: add opt-in subprocess memory watchdog | Audacity88 | XL | Médio | Adiciona `shell_max_memory_mb` em `RuntimeProfileConfig`, medindo e parando processos shell que excedam o limite. |
| [#11617](https://github.com/zeroclaw-labs/zeroclaw/pull/11617) | `fix(agent)`: close steering channel before turn finishes | Audacity88 | M | Médio | Fecha o canal de steering antes do fim do turno, evitando race conditions entre o gateway socket e `session/steer`. |
| [#11637](https://github.com/zeroclaw-labs/zeroclaw/pull/11637) | `fix(providers)`: stop charging JPEG coefficient planes | GaijinSystems | M | — | Corrige cobrança de planos de coeficientes JPEG para frames progressivos e baseline, alinhando com alocação real do zune-jpeg 0.5.15. |
| [#11619](https://github.com/zeroclaw-labs/zeroclaw/pull/11619) | `fix(zerocode)`: requeue message refused as SESSION_BUSY | Audacity88 | M | Médio | Reenfileira mensagens recusadas com `SESSION_BUSY` ao invés de descartá-las, preservando entrada do usuário. |
| [#11584](https://github.com/zeroclaw-labs/zeroclaw/pull/11584) | `feat(providers)`: add Opper model provider | Felixkw12 | M | Médio | Adiciona provider `opper` — gateway OpenAI-compatible hospedado na EU, com autenticação bearer automática. |
| [#11577](https://github.com/zeroclaw-labs/zeroclaw/pull/11577) | `feat(runtime)`: run subagent on operator-declared model route | alucryd | M | Alto | Permite que `spawn_subagent` utilize `model_hint` para rotas específicas, herdando identidade e políticas do agente pai. |
| [#11592](https://github.com/zeroclaw-labs/zeroclaw/pull/11592) | `feat(security)`: add glob patterns for file_read filtering | jxxralf | S | Alto | Adiciona filtragem por padrão glob para `file_read`, permitindo controles mais granulares sobre acesso a arquivos. |
| [#11571](https://github.com/zeroclaw-labs/zeroclaw/pull/11571) | `fix(web)`: keep in-flight prompt during hydration | joalvaradon | L | Médio | Preserva o prompt em andamento quando a hidratação do chat substitui o estado local, evitando perda de entrada do usuário. |
| [#11494](https://github.com/zeroclaw-labs/zeroclaw/pull/11494) | `refactor(zerocode)`: isolate client message queue ownership | Audacity88 | L | Médio | Centraliza ownership da fila de mensagens, IDs, capacidade e estado de pausa em um `MessageQueue` privado. |

**Avanços esperados:**
- Maior segurança com watchdog de memória para subprocessos e filtros glob para leitura de arquivos.
- Melhor experiência ZeroCode com reenfileiramento robusto e isolamento de fila de mensagens.
- Extensibilidade via novo provider Opper e subagentes em rotas específicas.
- Telemetria melhorada com resultados por alvo e correções de custo.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários/reação)

| # | Título | Comentários | Prioridade | Domínio |
|---|--------|-------------|------------|---------|
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | [Tracker]: Maintainer decision queue for RFCs | 15 | P2 | Arquitetura |
| [#9887](https://github.com/zeroclaw-labs/zeroclaw/issues/9887) | Downscale oversized images instead of dropping | 6 | P2 | Segurança/Arquitetura |
| [#11420](https://github.com/zeroclaw-labs/zeroclaw/issues/11420) | SQLite rewrites `created_at` on every turn | 6 | P1 | Runtime |
| [#11254](https://github.com/zeroclaw-labs/zeroclaw/issues/11254) | RFC: A2A protocol crate | 5 | P2 | Arquitetura |
| [#11204](https://github.com/zeroclaw-labs/zeroclaw/issues/11204) | OpenRouter spend shows $0.00 | 4 | P1 | Runtime/Provider |
| [#11235](https://github.com/zeroclaw-labs/zeroclaw/issues/11235) | RFC: Knowledge corpus — RAG | 3 | P2 | Segurança/Arquitetura |
| [#11074](https://github.com/zeroclaw-labs/zeroclaw/issues/11074) | RFC: search_routes hint-based routing | 3 | P2 | Arquitetura |

### Análise das demandas comunitárias

1. **RFCs em pauta (15+3+5+3 = 26 comentários somados):** A comunidade demonstra forte interesse em evoluções arquiteturais:
   - **A2A Protocol (#11254):** Expansão do modelo wire e superfície de descoberta inbound, sugerindo ambição de interoperabilidade com outros agentes.
   - **RAG/Knowledge corpus (#11235):** Busca por capacidade de documentação retrieval, indicando demanda corporativa por assistentes "enterprise-ready".
   - **Search routing (#11074):** customização de provedores por tipo de busca (fontes primárias vs. corroboração).

2. **Trackers de decisão (#8692):** Com 15 comentários, a comunidade clama por transparência no processo de aceitação/rejeição de RFCs, evidenciando maturidade na governança open source.

3. **Segurança de imagens (#9887):** Proposta de downscale ao invés de rejeição, equilibrando experiência do usuário com limites de multimodal.

---

## 5. Bugs e Estabilidade

### Bugs P1 (críticos/bloqueantes)

| # | Título | Severidade | Status | Impacto |
|---|--------|------------|--------|--------|
| [#11420](https://github.com/zeroclaw-labs/zeroclaw/issues/11420) | SQLite rewrites `created_at` on every turn | S2 (degradado) | Aberto | Perdição de timestamps por mensagem; afeta diagnóstico e auditoria |
| [#11204](https://github.com/zeroclaw-labs/zeroclaw/issues/11204) | OpenRouter cost tracking shows $0.00 | S2 (degradado) | Aceito | Gastos invisíveis no dashboard; risco financeiro |

### Bugs P2 (degradados)

| # | Título | Severidade | Status | Impacto |
|---|--------|------------|--------|--------|
| [#11612](https://github.com/zeroclaw-labs/zeroclaw/issues/11612) | Re-running approved shell command aborts agent loop | S2 | Aberto | Aborta sessão ACP inesperadamente |
| [#11623](https://github.com/zeroclaw-labs/zeroclaw/issues/11623) | ZeroCode drops `ask_user` prompt silently | S2 | Aberto | Perguntas ao usuário desaparecem; timeout após 600s |
| [#11618](https://github.com/zeroclaw-labs/zeroclaw/issues/11618) | ZeroCode drops queued message on SESSION_BUSY | Medium | Aberto | Entrada do usuário perdida silenciosamente |
| [#11614](https://github.com/zeroclaw-labs/zeroclaw/issues/11614) | `map_key_sections` leaks memory on every call | S1 | Aberto | Crescimento ilimitado de memória do daemon |
| [#11632](https://github.com/zeroclaw-labs/zeroclaw/issues/11632) | WebKitWebProcess repaints at 100% GPU idle | S2 | Aberto | Consumo excessivo de recursos no desktop Linux |
| [#11484](https://github.com/zeroclaw-labs/zeroclaw/issues/11484) | ZeroCode Agent disables repetitive-tool safeguards | S2 | Em progresso | Risco de loops infinitos de ferramentas |

### Bugs fechados no período

| # | Título | Severidade | Resolução |
|---|--------|------------|-----------|
| [#11180](https://github.com/zeroclaw-labs/zeroclaw/issues/11180) | Teste flaky em `Parallel Runtime Test` | S1 | Fechado |
| [#11371](https://github.com/zeroclaw-labs/zeroclaw/issues/11371) | MCP nested object serializado como string | S2 | Fechado (release:v0.8.6) |
| [#10741](https://github.com/zeroclaw-labs/zeroclaw/issues/10741) | ZeroCode pausa trabalho após resposta normal | S2 | Fechado (follow-up) |

**Análise:** ZeroCode (TUI) concentra múltiplos bugs de estabilidade (4 issues abertas), sugerindo necessidade de investimento em testes de integração e validação de edge cases na interface. O bug de memory leak (#11614) em `map_key_sections` é particularmente urgente para ambientes de longa execução.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features abertas

| # | Título | Tipo | Risco | Sinal de roadmap |
|---|--------|------|-------|------------------|
| [#11620](https://github.com/zeroclaw-labs/zeroclaw/issues/11620) | Show message times in ZeroCode transcript | Feature | — | Usabilidade ZeroCode |
| [#11613](https://github.com/zeroclaw-labs/zeroclaw/issues/11613) | Cost ledger drops `total_tokens` (Gemini reasoning) | Bug/Enhancement | — | Suporte a novos modelos com tokens ocultos |
| [#11638](https://github.com/zeroclaw-labs/zeroclaw/issues/11638) | [Tracker]: Restore stable community entry points | Tracker | — | Infraestrutura/DevEx |
| [#11254](https://github.com/zeroclaw-labs/zeroclaw/issues/11254) | RFC: A2A protocol crate | RFC | Alto | Interoperabilidade de agentes |
| [#11235](https://github.com/zeroclaw-labs/zeroclaw/issues/11235) | RFC: Knowledge corpus (RAG) | RFC | Alto | Enterprise RAG readiness |
| [#11074](https://github.com/zeroclaw-labs/zeroclaw/issues/11074) | RFC: search_routes hint-based routing | RFC | Alto | Multi-provedor para busca |

### Análise de sinais de roadmap

1. **Interoperabilidade (#11254):** A RFC do A2A crate indica ambição de ZeroClaw se posicionar como plataforma de agentes interoperáveis, não apenas assistente standalone.

2. **RAG Enterprise (#11235):** A demanda por retrieval de documentos sugere foco em casos de uso corporativo onde o operador possui bases de conhecimento proprietárias.

3. **Multi-provedor busca (#11074):** Permite estratégia de provedores por tipo de query — primárias vs. corroboração — indicando maturidade na estratégia de uso de múltiplos provedores.

4. **Observabilidade ZeroCode (#11620):** A feature de timestamps no transcript é simples mas de alto impacto para debugging de sessões complexas.

---

## 7. Resumo de Feedback dos Usuários

### Dores reportadas

1. **Perda silenciosa de entrada (#11618, #11623):** Usuários reportam que mensagens e perguntas são descartadas sem feedback, causando frustração e perda de contexto. Cenário típico: usuário digita uma pergunta enquanto um comando longo executa; a pergunta desaparece.

2. **Custo invisível (#11204):** Operadores relatam surpresa ao descobrir que o dashboard de custos mostra $0.00 após 90+ requests e 2.1M tokens — risco de surpresa billing e incapacidade de otimizar gastos.

3. **Timestamps ausentes (#11620):** Em sessões com múltiplos eventos concorrentes (prompts automáticos, recusas, tool calls longos), é impossível determinar a sequência temporal — dificultando debugging e auditoria.

4. **Memory leak em produção (#11614):** Usuários em ambientes de longa execução observam crescimento ilimitado de memória, eventualmente exigindo restart do daemon.

### Cenários de uso emergentes

- **Behavioral safety testing:** Issue #11612 reportada por DefuzeX/KUMA, indicando uso de ZeroClaw como substrate para testes de segurança de agentes.
- **Subagentes em rotas específicas (#11577):** Padrão de decomposição de tarefas em subagentes especializados, sugerindo adoção em pipelines complexos.
- **Desktop Linux (Tauri/Wayland):** Bug de GPU #11632 indica base de usuários Linux desktop ativa, com expectativas de performance.

---

## 8. Backlog que Merece Atenção

### Issues sem resposta significativa (>7 dias sem interação ou mantenedor)

| # | Título | Criado | Atualizado | Comentários | Prioridade | Risco |
|---|--------|--------|------------|-------------|------------|-------|
| [#11204](https://github.com/zeroclaw-labs/zeroclaw/issues/11204) | OpenRouter cost tracking | 2026-09-27 | 2026-10-09 | 4 | P1 | Alto |
| [#11254](https://github.com/zeroclaw-labs/zeroclaw/issues/11254) | RFC: A2A protocol | 2026-09-29 | 2026-10-09 | 5 | P2 | Alto |
| [#11235](https://github.com/zeroclaw-labs/zeroclaw/issues/11235) | RFC: RAG | 2026-09-29 | 2026-10-09 | 3 | P2 | Alto |
| [#11074](https://github.com/zeroclaw-labs/zeroclaw/issues/11074) | RFC: search_routes | 2026-09-23 | 2026-10-09 | 3 | P2 | Alto |
| [#11484](https://github.com/zeroclaw-labs/zeroclaw/issues/11484) | ZeroCode repetitive-tool safeguards | 2026-10-03 | 2026-10-09 | 2 | P2 | Médio |
| [#11613](https://github.com/zeroclaw-labs/zeroclaw/issues/11613) | Cost ledger token undercount | 2026-10-08 | 2026-10-09 | 3 | — | — |

### PRs aguardando ação do autor

| # | Título | Status | Ação necessária |
|---|--------|--------|-----------------|
| [#11572](https://github.com/zeroclaw-labs/zeroclaw/pull/11572) | Fix ACP plan persistence failures | Needs-author-action | kkkhs |
| [#11577](https://github.com/zeroclaw-labs/zeroclaw/pull/11577) | Subagent on model route | Needs-author-action | alucryd |
| [#11584](https://github.com/zeroclaw-labs/zeroclaw/pull/11584) | Add Opper provider | Needs-author-action | Felixkw12 |
| [#11592](https://github.com/zeroclaw-labs/zeroclaw/pull/11592) | Glob patterns for file_read | Needs-author-action | jxxralf |

### Priorização recomendada

1. **Urgente:** Bug P1 #11204 (custo invisível) e #11420 (timestamps SQLite) — impacto financeiro e de observabilidade.
2. **Alta:** Memory leak #11614 — estabilidade em produção.
3. **Média:** RFC

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*