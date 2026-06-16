# Resumo diário do ecossistema de agentes de IA 2026-06-17

> Issues: 2 | PRs: 3 | Projetos cobertos: 7 | Gerado em: 2026-06-16 22:07 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório do Projeto NullClaw — 2026-06-17

---

## 1. Panorama do Dia

O projeto NullClaw apresenta uma atividade moderada nas últimas 24 horas, com **2 issues** e **3 pull requests** atualizados. Nenhum lançamento foi realizado no período. A atividade concentra-se em correções de bugs relacionados à autenticação (MS Teams, scheduler) e em uma feature de subagente cron. O estado geral sugere uma fase de estabilização e refinamento, com foco em segurança e robustez do sistema.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24h.**

O projeto não publicou novas versões desde a última release estável (v2026.4.17, conforme referenciada na issue #839).

---

## 3. Progresso do Projeto

Três PRs foram abertos/atualizados no período, nenhum ainda merged:

| PR | Título | Autor | Status |
|----|--------|-------|--------|
| [#959](https://github.com/nullclaw/nullclaw/pull/959) | fix(cron): persist paired token for scheduler tool access | vernonstonebaker | Aberto |
| [#958](https://github.com/nullclaw/nullclaw/pull/958) | fix(teams): accept lowercase `serviceurl` JWT claim | dtarandek | Aberto |
| [#783](https://github.com/nullclaw/nullclaw/pull/783) | feat(cron): cron subagent, run history, JSON output | yanggf8 | Aberto |

**Destaque:** O PR #959 aborda diretamente a issue #839 (scheduler sem acesso), proposing uma solução de persistência de token com criptografia ChaCha20-Poly1305. O PR #958 corrige validação de tokens JWT do Bot Framework da Microsoft Teams.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários)

| Issue | Título | Comentários | Reações |
|-------|--------|-------------|---------|
| [#952](https://github.com/nullclaw/nullclaw/issues/952) | Local model using ollama returns incomplete answers | 2 | 0 |
| [#839](https://github.com/nullclaw/nullclaw/issues/839) | bug: bit has no access to scheduler | 1 | 0 |

**Análise:** A issue #952 (respostas incompletas com Ollama) atraiu maior atenção da comunidade, indicando que a integração com modelos locais é um ponto sensível. A issue #839 sobre acesso ao scheduler possui um PR associado (#959) em resolução.

---

## 5. Bugs e Estabilidade

### Bugs reportados/atualizados

| Severity | Issue | Descrição |
|----------|-------|-----------|
| **Bug** | [#952](https://github.com/nullclaw/nullclaw/issues/952) | Modelo local via Ollama retorna respostas incompletas; agent não completa frases |
| **Bug** | [#839](https://github.com/nullclaw/nullclaw/issues/839) | Scheduler sem acesso ao sistema (token não persistido); rejeição 403 em MS Teams |

**Observação:** Ambos os bugs têm impacto direto na experiência do usuário. O bug #839 já possui PR de correção em análise (#959). O bug #952 aguarda investigação adicional.

---

## 6. Pedidos de Features e Sinais de Roadmap

### PR com feature significativa em aberto

- **[#783](https://github.com/nullclaw/nullclaw/pull/783)** — `feat(cron): cron subagent, run history, JSON output, security hardening`
  - Subagente cron com engine DB-backed
  - Tabela `cron_runs` para histórico
  - Worker `cron_run_queue` com operações atômicas
  - Tipos de job: skill, agent, shell
  - Offsets de timezone por job
  - CLI JSON output (`cron list --json`, `cron schedule --json`)

**Sinais de roadmap:** A feature de cron jobs robustos indica foco em automação e casos de uso de produção. A segurança reforçada (hardening) sugere preocupação com deployments enterprise.

---

## 7. Resumo de Feedback dos Usuários

### Dores identificadas

| Problema | Frequência | Impacto |
|----------|------------|---------|
| Respostas incompletas de modelos locais | 1 reporte | Alto (quebra de funcionalidade esperada) |
| Falha de autenticação em MS Teams | 1 reporte | Alto (bloqueia integração) |
| Scheduler sem acesso a ferramentas | 1 reporte | Crítico (impede uso de recursos) |

**Cenário de uso evidenciado:** Usuários tentando integrar Ollama com modelos locais (Gemma) estão enfrentando problemas de qualidade de resposta. Usuários corporativos com MS Teams enfrentam barreiras de autenticação.

---

## 8. Backlog que Merece Atenção

### Issues em aberto há >7 dias sem resolução

| Issue | Idade | Título | Status |
|-------|-------|--------|--------|
| [#839](https://github.com/nullclaw/nullclaw/issues/839) | ~60 dias | bug: bit has no access to scheduler | PR #959 pendente |
| [#783](https://github.com/nullclaw/nullclaw/pull/783) | ~71 dias | feat(cron): cron subagent | PR aberto, aguardando review |
| [#952](https://github.com/nullclaw/nullclaw/issues/952) | ~6 dias | Local model using ollama returns incomplete answers | Aguardando investigação |

**Recomendação:** O PR #783 (cron subagent) está aberto há 71 dias e representa uma feature significativa. Recomenda-se priorização de code review. A issue #952 deve ser investigada para identificar se é regressão ou incompatibilidade de versão do Ollama.

---

*Relatório gerado automaticamente com base nos dados do GitHub de [nullclaw/nullclaw](https://github.com/nullclaw/nullclaw).*

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo do Ecossistema de Agentes de IA Open Source

**Data de Referência:** 2026-06-17
**Projetos Analisados:** NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw/QwenPaw, ZeroClaw

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **saúde moderada com pontos críticos de atenção**. A maioria dos projetos encontra-se em fase de estabilização pós-feature, com foco em correções de bugs, segurança e experiência do usuário. Hermes Agent e ZeroClaw lideram em volume de atividade (50 issues/PRs cada), enquanto NullClaw opera em escala menor com foco em estabilidade. Os principais vetores de desenvolvimento convergente incluem: integração com provedores de modelos (Ollama, Claude, OpenRouter), canais de comunicação empresarial (Teams, Slack, Discord), automação via cron jobs, e segurança de autenticação OAuth. A plataforma PicoClaw destaca-se pela atenção urgente a 11 vulnerabilidades de segurança reportadas, enquanto CoPaw/QwenPaw enfrenta problemas críticos de estabilidade no Desktop (macOS ARM64). ZeroClaw apresenta a maior crise de estabilidade com 6 bugs S1 simultâneos e regressão em Slack/Discord.

---

## 2. Comparação de Atividade

| Projeto | Issues (Abertas/Fechadas) | PRs (Abertos/Merged) | Releases (24h) | Bugs Críticos Abertos | Saúde |
|---------|---------------------------|----------------------|----------------|----------------------|-------|
| **NullClaw** | 2 / 0 | 3 / 0 | 0 | 0 | 🟡 Estável |
| **NanoBot** | 4 / 4 | 9 / 13 | 0 | 1 | 🟢 Saudável |
| **Hermes Agent** | 44 / 6 | 44 / 6 | 0 | 3 (P1) | 🟠 Atenção |
| **PicoClaw** | 15 / 2 | 3 / 13 | 1 nightly | 0 | 🟡 Estável* |
| **IronClaw** | 31 / 19 | ~10 / 5 | 0 | 1 (Medium) | 🟢 Saudável |
| **CoPaw/QwenPaw** | 19 / 22 | 20 / 20 | 1 beta | 3 | 🟠 Crítico |
| **ZeroClaw** | 31 / ~12 | 27 / 23 | 0 | 6 (S1) | 🔴 Crítico |

*\*PicoClaw com 11 vulnerabilidades de segurança sem triagem*

**Análise por Volume de Atividade:**

- **Maior volume:** Hermes Agent e ZeroClaw (50+ atividades combinadas)
- **Maior eficiência de merge:** NanoBot (13 PRs merged com 9 abertos) e PicoClaw (13 merged com 3 abertos)
- **Maior taxa de bugs críticos:** ZeroClaw (6 S1) e CoPaw/QwenPaw (3 críticos)

---

## 3. Posicionamento do Projeto Principal (NullClaw)

### Vantagens Competitivas

NullClaw apresenta **foco técnico especializado** em três áreas distintas:

1. **Segurança de autenticação:** Correções recentes abordam JWT validation para MS Teams (PR #958) e persistência de tokens com ChaCha20-Poly1305 (PR #959)
2. **Scheduler robusto:** Feature de cron subagent com engine DB-backed (PR #783, 71 dias em desenvolvimento)
3. **Integração com modelos locais:** Suporte a Ollama com atenção às respostas incompletas

### Comparação com Pares

| Dimensão | NullClaw | NanoBot | Hermes Agent | ZeroClaw |
|----------|----------|---------|--------------|----------|
| **Escala de comunidade** | Pequena | Média | Grande | Grande |
| **Velocidade de entrega** | Lenta (3 PRs, nenhum merged) | Alta (13 merged/h) | Moderada | Alta |
| **Foco principal** | Estabilização | WebUI e integrações | Multi-plataforma | Regressões críticas |
| **Maturidade técnica** | Estável | Estável | Estável | Instável |

### Lacunas Identificadas

- **Ausência de release em 60+ dias** — últimos commits datados de 2026-04-17
- **Baixa velocidade de review** — PRs abertos há 60-71 dias sem merge
- **Comunidade pequena** — apenas 2 issues e 3 PRs nas últimas 24h

---

## 4. Focos Técnicos Compartilhados

### 4.1 Segurança de Autenticação e Canais

A maioria dos projetos investe em hardening de autenticação, especialmente para canais empresariais:

| Projeto | Foco de Segurança | Impacto |
|---------|------------------|---------|
| **NullClaw** | JWT validation Teams, token persistência ChaCha20 | Enterprise SSO |
| **Hermes Agent** | Sanitização de erros, webhooks validation (PR #6660, P1) | General security |
| **PicoClaw** | 11 vulnerabilidades (SSRF, CSRF, symlink race) | **Crítico** |
| **IronClaw** | OAuth Slack gate verificado, command sanitization | Enterprise |

### 4.2 Modelos Locais e Provedores Alternativos

Problemas recorrentes com Ollama e modelos locais indicam demanda crescente:

- **NullClaw:** Issue #952 — respostas incompletas com Ollama (13 comentários)
- **NanoBot:** PR #4371 — cache de system prompt para modelos locais
- **CoPaw/QwenPaw:** Issue #5233 — Ollama sem opções na UI
- **PicoClaw:** PR #3136 — suporte Gemini 3.5 snake_case

### 4.3 Automação e Cron Jobs

Feature transversal com implementações diversas:

- **NullClaw:** Subagente cron DB-backed com `cron_runs` table
- **NanoBot:** Automation WebUI com fila, pausa, retomadas
- **ZeroClaw:** Lock de claim/release para jobs duplicados (PR #6038)
- **CoPaw/QwenPaw:** Cron tasks com problemas (issues #5235, #5250)

### 4.4 Interface e Experiência do Usuário

| Problema | Projetos Afetados | Solução em Curso |
|----------|-------------------|------------------|
| Histórico de conversa incompleto | PicoClaw, NanoBot, IronClaw | Auto-compact, full history reads |
| Tool calls não aparecem | IronClaw, PicoClaw | Lifecycle signaling, timeline visibility |
| Feedback de aprovação opaco | IronClaw | Sanitized shell prompts, denial feedback |
| Transcription de áudio | NanoBot | WAV 16k mono pipeline |

---

## 5. Análise de Diferenciação

### 5.1 Por Arquitetura e Público-Alvo

| Projeto | Arquitetura | Público-Alvo |
|---------|-------------|--------------|
| **NullClaw** | Monolítica, focada em scheduler | Desenvolvedores avançados, automação |
| **NanoBot** | Modular com WebUI completa | Usuários finais via WhatsApp, devs |
| **Hermes Agent** | Multi-gateway (Signal, IRC, LINE) | Produtividade multi-canal |
| **PicoClaw** | Channels-first (Telegram, Feishu) | Mercados asiáticos (China/Taiwan) |
| **IronClaw** | Cloud-native com OAuth centralizado | Enterprise com Google Workspace |
| **CoPaw/QwenPaw** | Desktop Tauri + plugin ecosystem | Usuários que preferem UI nativa |
| **ZeroClaw** | Modular com WASM plugins | Operadores multi-agente |

### 5.2 Diferenças Técnicas Chave

**NanoBot** diferencia-se por:
- WebUI avançada com automations nativas
- Suporte a embeddings API completo
- Auto-compact por default (mudança de comportamento)

**Hermes Agent** diferencia-se por:
- Suporte a 8+ plataformas de mensagem (IRC, LINE, Nostr)
- Kanban system com epoch callbacks
- Model discovery automatizado para gateways

**PicoClaw** diferencia-se por:
- Ecossistema de hooks extensível (RegisterChannelSettings)
- Remote cron commands
- Suporte a Feishu/WeCom/LINE (mercado chinês)

**ZeroClaw** diferencia-se por:
- RFC-driven development (governança formal)
- A2A agent discovery (.well-known/agent-card.json)
- WASM plugin program planejado

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Projetos em Velocidade de Iteração Alta

| Projeto | PRs Merged/24h | Tendência |
|---------|----------------|-----------|
| **NanoBot** | 13 | 🟢 Acelerando — 5 bugs resolvidos em 1 dia |
| **PicoClaw** | 13 | 🟢 Estável — foco em robustness (panic recovery) |
| **ZeroClaw** | 23 | 🟢 Alto volume — mas 6 S1 em aberto |

### 6.2 Projetos em Consolidação de Qualidade

| Projeto | Status | Indicador |
|---------|--------|-----------|
| **NullClaw** | Estável mas lento | 0 releases em 60+ dias, PRs aguardando review |
| **Hermes Agent** | Manutenção ativa | 50 issues/PRs, mas 3 P1 sem resolução |
| **IronClaw** | Saudável com UX focus | Reborn WebUI em refinamento |

### 6.3 Projetos com Problemas de Maturidade

| Projeto | Problema Principal | Severidade |
|---------|--------------------|------------|
| **CoPaw/QwenPaw** | Crash loops macOS ARM64, context compaction freeze | 🔴 Crítica |
| **ZeroClaw** | Regressão v0.8.0 (Slack/Discord), 74 testes Windows falhando | 🔴 Crítica |
| **PicoClaw** | 11 vulnerabilidades sem acknowledgment | 🔴 Segurança |

### 6.4 Métricas de Engajamento Comunitário

| Projeto | Issue mais comentada | Comentários |
|---------|---------------------|-------------|
| **CoPaw/QwenPaw** | Context compaction freeze (#5218) | 13 |
| **NullClaw** | Ollama incomplete answers (#952) | 2 |
| **NanoBot** | Docker installer syntax error (#4360) | 6 |
| **Hermes Agent** | Windows gateway blank console (#38387) | 4 |
| **ZeroClaw** | Work Lanes RFC (#6808) | 11 |

---

## 7. Sinais de Tendência

### 7.1 Tendências de Mercado Extraídas

#### A) Demanda por Modelos Locais e Privacidade

**Evidências:**
- 3 projetos com problemas/feature requests para Ollama
- NanoBot: PR para evitar chamadas de rede durante token estimation (#3662)
- PicoClaw: Issue de proxy para modelos locais (#4366)

**Interpretação:** Usuários buscam controle sobre modelos, indicando tendência de self-hosted LLM.

#### B) Enterprise Readiness via OAuth e Multi-Channel

**Evidências:**
- IronClaw: 6+ issues sobre Google Calendar/Drive/Gmail OAuth
- Hermes Agent: Demanda por IRC, LINE, Nostr, QQ (paridade com forks)
- ZeroClaw: Slack/Discord regression é S1 blocker

**Interpretação:** O mercado enterprise quer agentes como hubs centralizados de comunicação.

#### C) Context Management como Diferenciador

**Evidências:**
- CoPaw: Headroom SDK para 60-95% redução de tokens (#5063)
- NanoBot: Auto-compact por default, digest por tokens não caracteres
- NullClaw: Persistent paired token para scheduler

**Interpretação:** Com custos de tokens significativos, gestão de contexto torna-se feature competitiva.

#### D) Segurança como Requisito de Primeira Classe

**Evidências:**
- PicoClaw: 11 vulnerabilidades reportadas em 1 semana
- Hermes Agent: 2 PRs de segurança P1/P2 em análise
- ZeroClaw: RFC para SBOM e supply-chain scanning
- IronClaw: OAuth URL gate, command sanitization

**Interpretação:** Projetos estão amadurecendo para produção, exigindo hardening de segurança.

#### E) Interoperabilidade Multi-Agente

**Evidências:**
- ZeroClaw: RFC .well-known/agent-card.json para A2A discovery
- NanoBot: Integração MetaVision AI com A2A/MCP
- Hermes Agent: LiteLLM/one-api auto-discovery

**Interpretação:** Emergência de ecossistema multi-agente solicita padrões de interoperabilidade.

#### F) WebUI vs TUI — Dual Interface Strategy

**Evidências:**
- NanoBot: Automation view no WebUI
- IronClaw: Reborn WebUI em desenvolvimento ativo
- ZeroClaw: Paridade zerocode ↔ gateway web como feature request
- CoPaw: Desktop Tauri com crash issues

**Interpretação:** Projetos reconhecem que diferentes perfis de usuário preferem interfaces distintas.

---

## 8. Recomendações

### Para Desenvolvedores Avaliando Ecossistema

1. **Para self-hosted com foco em privacidade:** Considerar NullClaw (segurança de tokens) ou NanoBot (embeddings API)
2. **Para enterprise multi-canal:** Hermes Agent ou IronClaw (OAuth maduro)
3. **Para mercados asiáticos:** PicoClaw (Feishu, WeCom, LINE)
4. **Para automação robusta:** Aguardar correção de ZeroClaw v0.8.1 antes de adoção

### Para Mantenedores de Projetos

1. **ZeroClaw:** Priorizar regressão Slack/Discord (S1) e CI Windows
2. **CoPaw/QwenPaw:** Resolver crash loops macOS ARM64 antes de próxima release
3. **NullClaw:** Review de PRs stale (71 dias) para manter comunidade engajada
4. **PicoClaw:** Triagem urgente das 11 vulnerabilidades — risco reputacional

---

*Relatório gerado em 2026-06-17. Dados sujeitos a alterações conforme atualização dos repositórios.*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-06-17

---

## 1. Panorama do dia

O projeto NanoBot mantém **atividade intensa e saudável** com 8 issues e 23 PRs atualizados nas últimas 24h. A equipe demonstrou forte capacidade de entrega: **13 PRs foram merged/fechados**, abrangendo correções de bugs críticos (timeout de streaming, duplicação de mensagens), melhorias de usabilidade (auto-compactação ociosa por padrão,解释了 Dream runs vazios) e funcionalidades novas (automations no WebUI, embeddings para API OpenAI). O volume de PRs abertos (9) permanece equilibrado, sinalizando pipeline saudável sem acúmulo de backlog. Nenhuma release foi publicada hoje, mas o ritmo de merge sugere que uma nova versão está próxima.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

O projeto segue em ritmo de desenvolvimento contínuo sem versionamento formalizado hoje. As contribuições merged sugerem que uma release pode estar em preparo para consolidar as múltiplas correções de estabilidade (stream idle timeout, proxy local, transcrição de áudio).

---

## 3. Progresso do projeto

### PRs fechados hoje (13):

| PR | Título | Impacto |
|----|--------|---------|
| [#3401](https://github.com/HKUDS/nanobot/pull/3401) | feat(api): add embeddings support for OpenAI-compatible providers | **Funcionalidade nova** — Adiciona `/v1/embeddings`, provedores OpenAI-compatible e Azure, cobertura de testes completa |
| [#4330](https://github.com/HKUDS/nanobot/pull/4330) | feat(webui): add automation management view | **Funcionalidade nova** — Seção Automations no WebUI com fila, detalhe, filtros, ordenação, edição, execução e pausa/retomada de automações de usuário |
| [#4368](https://github.com/HKUDS/nanobot/pull/4368) | Fix macOS installer for externally managed Python | **Estabilidade** — Corrige instalação emmacOS com Python gerenciado (PEP 668), adiciona fallback `~/.nanobot/venv` |
| [#4370](https://github.com/HKUDS/nanobot/pull/4370) | Enable idle auto-compact by default | **UX/Mudança de comportamento** — Ativa auto-compactação ociosa por padrão após 15 minutos (anteriormente 0=desabilitado) |
| [#4369](https://github.com/HKUDS/nanobot/pull/4369) | Explain empty Dream runs | **UX** — Substitui resposta opaca `/dream` sem histórico por explicação recuperável e ponteiro para auto-compact |
| [#4352](https://github.com/HKUDS/nanobot/pull/4352) | fix(context): cap recent-history digest by tokens, not characters | **Qualidade** — Corrige limitação por caracteres para limitação por tokens no digest de Recent History (problema com CJK/código) |
| [#4363](https://github.com/HKUDS/nanobot/pull/4363) | fix(providers): validate stream idle timeout config | **Estabilidade** — Helper centralizado `resolve_stream_idle_timeout_s()`, rejeita valores inválidos/incomuns |
| [#4358](https://github.com/HKUDS/nanobot/pull/4358) | fix(api): avoid duplicate user turn on empty-response retry | **Bug fix** — Resolve #4079, passa `persist_user_message=False` no retry de resposta vazia |
| [#4361](https://github.com/HKUDS/nanobot/pull/4361) | fix(providers): enable thinking for Kimi K2.7 models | **Provedor** — Adiciona Kimi K2.7 à allowlist de thinking, corrige payload inválido |
| [#4364](https://github.com/HKUDS/nanobot/pull/4364) | fix(webui): override wsUrl with local LAN IP when on dev server port 5173 | **Bug fix** — Corrige "Opening new chat..." travado ao acessar WebUI via IP LAN |
| [#4247](https://github.com/HKUDS/nanobot/pull/4247) | fix(webui): auto-compact transcript when file exceeds size limit | **Estabilidade** — Auto-compacta transcrições WebUI que excedem limite de 8MB |
| [#4365](https://github.com/HKUDS/nanobot/pull/4365) | docs: use pipe pattern for curl installer commands | **Documentação** — Substitui `sh -c "$(curl ...)"` por `curl ... | sh` (corrige instalação em Dockerfiles) |
| [#4355](https://github.com/HKUDS/nanobot/pull/4355) | chore: ignore bridge/node_modules | **Manutenção** — Adiciona `bridge/node_modules/` ao `.gitignore` |

### Destaque de PRs abertos (9):
- [#4373](https://github.com/HKUDS/nanobot/pull/4373) — Preserva contexto de delivery durante consolidação de memória
- [#4372](https://github.com/HKUDS/nanobot/pull/4372) — Corrige notificações MCP progress malformadas (regressão)
- [#4371](https://github.com/HKUDS/nanobot/pull/4371) — Adiciona breakpoint antes de Recent History para caching do prefixo de sistema
- [#4367](https://github.com/HKUDS/nanobot/pull/4367) — Desabilita proxy para endpoints locais, respeita proxy para cloud (relacionado a [#4366](https://github.com/HKUDS/nanobot/issues/4366))
- [#4353](https://github.com/HKUDS/nanobot/pull/4353) — Converte áudio para WAV 16k mono antes de STT (corrige transcriptions vazias no WhatsApp)
- [#3662](https://github.com/HKUDS/nanobot/pull/3662) — Evita chamadas de rede durante estimação de tokens (offline-friendly)
- [#4053](https://github.com/HKUDS/nanobot/pull/4053) — Mantém raízes read-only fora de caminhos de escrita

---

## 4. Temas quentes da comunidade

### Issues com maior engajamento (comentários + reações):

1. **[#4360](https://github.com/HKUDS/nanobot/issues/4360)** — `"end of file unexpected" during installer`
   - **Comentários: 6** | Status: OPEN
   - Bug no instalador em Docker container Debian 13 — erro de syntax em script pip
   - Autor: The-Markitecht | Criado: 2026-06-16
   - **Análise:** Problema crítico de DX que afeta novos usuários via Docker. Alto potencial de reprodutibilidade.

2. **[#4242](https://github.com/HKUDS/nanobot/issues/4242)** — Disabling dream.enabled still injects all chat history into system prompt
   - **Comentários: 1** | Status: OPEN
   - Cursor do Dream não avança quando feature está desabilitada, causando injeção excessiva de histórico
   - Autor: skyline75489 | Criado: 2026-06-08
   - **Análise:** Bug semântico sutil — feature funciona parcialmente, vazamento de contexto em produção.

3. **[#4362](https://github.com/HKUDS/nanobot/issues/4362)** — A2A/MCP Integration: MetaVision AI tools now discoverable
   - **Comentários: 1** | Status: CLOSED
   - Integração announcements — MetaVision AI Studio compatível com A2A e MCP, 7 ferramentas disponíveis
   - Autor: adminmetavision-rgb | Criado: 2026-06-16
   - **Análise:** Parceria estratégica, expande ecossistema de integrações.

4. **[#4374](https://github.com/HKUDS/nanobot/issues/4374)** — SOUL.md/USER.md read/write asymmetry em project workspaces
   - **Comentários: 0** | Status: OPEN
   - Arquivos de bootstrap lidos do projeto mas escritos no workspace default (assimetria)
   - Autor: maximilize | Criado: 2026-06-16
   - **Análise:** Bug de comportamento inconsistente na feature de workspaces de projeto (#4007).

---

## 5. Bugs e estabilidade

### Bugs reportados (4 issues abertas):

| Severidade | Issue | Descrição |
|------------|-------|-----------|
| 🔴 **Alta** | [#4360](https://github.com/HKUDS/nanobot/issues/4360) | Instalador aborta com Syntax Error em Debian 13 Docker (6 comentários — mais debatido) |
| 🟠 **Média** | [#4242](https://github.com/HKUDS/nanobot/issues/4242) | `dream.enabled=false` não previne injeção de histórico via Recent History |
| 🟠 **Média** | [#4374](https://github.com/HKUDS/nanobot/issues/4374) | SOUL.md/USER.md lidos do projeto mas escritos no workspace default |
| 🟡 **Menor** | [#4366](https://github.com/HKUDS/nanobot/issues/4366) | Servidores de modelo local precisam configuração de proxy (PR [#4367](https://github.com/HKUDS/nanobot/pull/4367) em aberto) |

### Correções de bugs fechadas hoje:
- [#4065](https://github.com/HKUDS/nanobot/issues/4065) → [#4363](https://github.com/HKUDS/nanobot/pull/4363) — Timeout de stream com valor malformado crashava
- [#4079](https://github.com/HKUDS/nanobot/issues/4079) → [#4358](https://github.com/HKUDS/nanobot/pull/4358) — Retry de resposta vazia duplicava mensagens do usuário
- [#4286](https://github.com/HKUDS/nanobot/issues/4286) — "sustained goal" context inesperado (resolvido)
- [#4364](https://github.com/HKUDS/nanobot/pull/4364) — WebUI travava em "Opening new chat..." via LAN
- [#4247](https://github.com/HKUDS/nanobot/pull/4247) — Transcript WebUI desaparecia acima de 8MB

**Métricas de estabilidade:** 5 bugs resolvidos hoje, 4 bugs novos abertos. Taxa de resolução favorável. Nenhuma regressão crítica reportada.

---

## 6. Pedidos de features e sinais de roadmap

### Features em desenvolvimento (PRs abertos):

1. **[#4371](https://github.com/HKUDS/nanobot/pull/4371)** — Breakpoint antes de Recent History para cache do sistema prefix
   - Otimização de performance — reduz recálculos de system prompt a cada turn

2. **[#4373](https://github.com/HKUDS/nanobot/pull/4373)** — Preservar delivery context durante consolidação de memória
   - Melhora de consistência de sessão

3. **[#3662](https://github.com/HKUDS/nanobot/pull/3662)** — Evitar chamadas de rede durante estimação de tokens
   - Feature de resiliência offline — merge pendente desde 2026-05-06

4. **[#4053](https://github.com/HKUDS/nanobot/pull/4053)** — Manter raízes read-only fora de caminhos de escrita
   - Feature de segurança/sandboxing

### Sinais de roadmap (via PRs merged):

| Sinal | evidência |
|-------|-----------|
| **Embeddings API** | [#3401](https://github.com/HKUDS/nanobot/pull/3401) merged — infraestrutura completa para `/v1/embeddings` |
| **Automations WebUI** | [#4330](https://github.com/HKUDS/nanobot/pull/4330) merged — UI de primeira classe para automações |
| **Auto-compact por padrão** | [#4370](https://github.com/HKUDS/nanobot/pull/4370) merged — mudança de comportamento default |
| **Transcrição robusta** | [#4353](https://github.com/HKUDS/nanobot/pull/4353) em revisão — WAV 16k mono como pipeline de áudio |

---

## 7. Resumo de feedback dos usuários

### Dores reportadas:

| Dor | Issue | Impacto |
|-----|-------|---------|
| Instalação quebra em Docker/Linux | [#4360](https://github.com/HKUDS/nanobot/issues/4360) | Alto — novo usuário não consegue começar |
| Histórico excessivo no system prompt | [#4242](https://github.com/HKUDS/nanobot/issues/4242) | Médio — custo de tokens, poluição de contexto |
| Transcript some na WebUI | [#4247](https://github.com/HKUDS/nanobot/pull/4247) *(corrigido)* | Médio — perda de conversa |
| Servidor local não funciona com proxy | [#4366](https://github.com/HKUDS/nanobot/issues/4366) | Médio — quebra para devs com rede corporativa |
| Assimetria read/write em workspaces | [#4374](https://github.com/HKUDS/nanobot/issues/4374) | Baixo-Médio — confusão de usuário |

### Feedback positivo:
- **[#4362](https://github.com/HKUDS/nanobot/issues/4362)** — Integração com MetaVision AI recebe boas-vindas da comunidade, demonstra adoção do padrão A2A/MCP
- A decisão de ativar auto-compact por padrão ([#4370](https://github.com/HKUDS/nanobot/pull/4370)) reflete demanda por configuração sensata out-of-box

### Padrões de uso identificados:
- Uso pesado via **WhatsApp** (voz + texto) — motivou correção de transcrição de .ogg/.opus
- Uso em **redes corporativas com proxy** — motivou PR #4367
- Uso multi-projeto via **WebUI workspaces** — feature relativamente nova com bugs infantis

---

## 8. Backlog que merece atenção

### Issues sem resposta há >7 dias:

| Issue | Criação | Status | Prioridade |
|-------|---------|--------|------------|
| [#4242](https://github.com/HKUDS/nanobot/issues/4242) — dream.enabled não previne injeção de histórico | 2026-06-08 | OPEN | 🟠 Alta — afecta custo e contexto |
| [#4374](https://github.com/HKUDS/nanobot/issues/4374) — SOUL.md/USER.md assimetria | 2026-06-16 | OPEN | 🟡 Média — regressão de feature nova |
| [#4366](https://github.com/HKUDS/nanobot/issues/4366) — proxy para modelos locais | 2026-06-16 | OPEN | 🟡 Média — DX para devs |

### PRs em aberto há >14 dias:

| PR | Criação | Status | Descrição |
|----|---------|--------|-----------|
| [#3662](https://github.com/HKUDS/nanobot/pull/3662) | 2026-05-06 | OPEN | Evitar rede durante estimação de tokens |
| [#4053](https://github.com/HKUDS/nanobot/pull/4053) | 2026-05-29 | OPEN | Read-only roots fora de write paths |

**Alerta:** O PR [#3662](https://github.com/HKUDS/nanobot/pull/3662) está aberto há **18 dias** sem merge. Trata-se de feature de resiliência offline (evita chamadas de rede para tiktoken). Recomenda-se triagem e decisão de accept/reject para evitar stale.

---

## Métricas resumidas do dia

| Métrica | Valor |
|---------|-------|
| Issues abertas | 4 |
| Issues fechadas | 4 |
| PRs abertos | 9 |
| PRs merged/fechados | 13 |
| Releases | 0 |
| Bugs críticos abertos | 1

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent
## NousResearch/hermes-agent — 2026-06-17

---

## 1. Panorama do Dia

O Hermes Agent registrou **atividade intensa** nas últimas 24h, com 50 issues e 50 PRs atualizados. Não houve lançamentos de novas versões. A comunidade demonstrou preocupação significativa com **bugs P1 críticos** relacionados a falhas na comunicação com provedores (OpenRouter HTTP 400, Anthropic tool calls em text blocks) e regressões de estabilidade em plataformas específicas (macOS segfault, Windows gateway). O projeto mantém alta engajamento com várias contribuições de segurança e melhorias de usabilidade em tramitação.

---

## 2. Lançamentos

**Nenhum release nas últimas 24h.** O último release estável permanece como referência. Equipe deve monitorar a fila de PRs prontos para merge que podem compor a próxima versão.

---

## 3. Progresso do Projeto

### PRs Mergeados/Fechados (6)

| # | Descrição | Impacto |
|---|-----------|---------|
| [#46360](https://github.com/NousResearch/hermes-agent/pull/46360) | Kanban epoch callback para workflows spiral/epoch | Autonomous task orchestration |
| [#43076](https://github.com/NousResearch/hermes-agent/pull/43076) | Cron: passa scripts shell para bash com caminhos POSIX | Compatibilidade Windows corrigida |
| [#47087](https://github.com/NousResearch/hermes-agent/pull/47087) | Normalização de números coreanos para Supertonic TTS | Melhoria de acessibilidade |
| [#47469](https://github.com/NousResearch/hermes-agent/pull/47469) | Backup: adiciona skills/plugins/scripts ao quick snapshot | Recuperação de desastre aprimorada |
| [#47162](https://github.com/NousResearch/hermes-agent/pull/47162) | ZAI model picker: merge lista curated com /v1/models | UX consistente de modelos |
| [#47009](https://github.com/NousResearch/hermes-agent/pull/47009) | /model picker respeita custom model.base_url | Configuração flexível |

### Destaques de PRs Abertos (Prioridade Alta)

- **[#47399](https://github.com/NousResearch/hermes-agent/pull/47399)** — Restaura headers `session_id`/`x-client-request-id` para cache routing no Codex (P1)
- **[#6660](https://github.com/NousResearch/hermes-agent/pull/6660)** — Sanitização de mensagens de erro e validação de webhooks (Security P1)
- **[#47474](https://github.com/NousResearch/hermes-agent/pull/47474)** — Corrige endpoint OAuth da Anthropic para `platform.claude.com` (P2)
- **[#47473](https://github.com/NousResearch/hermes-agent/pull/47473)** — Salva tool calls text-embedded no transporte Anthropic (P1)
- **[#47470](https://github.com/NousResearch/hermes-agent/pull/47470)** — Valida campo `command` em MCP servers para prevenir exfiltração (Security P2)

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| # | Título | Comentários | 👍 | Categoria |
|---|--------|-------------|----|-----------|
| [#8950](https://github.com/NousResearch/hermes-agent/issues/8950) | Adicionar canais: IRC, Google Chat, LINE, Nostr, Twitch, QQ | 4 | 2 | Feature/Gateway |
| [#10011](https://github.com/NousResearch/hermes-agent/issues/10011) | Auto-discover models de endpoints custom | 4 | 3 | Feature/CLI |
| [#16804](https://github.com/NousResearch/hermes-agent/issues/16804) | HTTP 400 empty body em todas requests OpenRouter | 4 | 0 | Bug P1 |
| [#38387](https://github.com/NousResearch/hermes-agent/issues/38387) | Windows gateway deixa console em branco | 4 | 1 | Bug P2 |
| [#47000](https://github.com/NousResearch/hermes-agent/issues/47000) | P12 desativou 23 Lifecycle-Scheduler-Jobs | 3 | 0 | SysOps P1 |

### Análise de Demandas

1. **Expansão de Plataformas de Mensagem** — Múltiplos usuários solicitam canais suportados pelo OpenClaw (IRC, LINE, Nostr, Twitch, Synology Chat, Tlon, QQ). Indicador claro de demanda por Parity com forks.

2. **Model Discovery Automatizado** — Crescente necessidade de integração com gateways auto-hospedados (LiteLLM, new-api, one-api). Usuários querem dinamismo na listagem de modelos.

3. **Incidentes SysOps** — P1/P2 sobre degradação de Personality 12 (Jobs desativados) e P1 Memory Compression (71.4% error rate). Usuários em produção reportando problemas sérios.

---

## 5. Bugs e Estabilidade

### P1 — Críticos

| # | Título | Plataforma | Status |
|---|--------|------------|--------|
| [#16804](https://github.com/NousResearch/hermes-agent/issues/16804) | HTTP 400 empty body OpenRouter | Todas | OPEN |
| [#47472](https://github.com/NousResearch/hermes-agent/issues/47472) | Anthropic tool calls em text blocks são dropados | Agent | OPEN |
| [#46789](https://github.com/NousResearch/hermes-agent/issues/46789) | Desktop macOS segfault (exit -11) | macOS | CLOSED |
| [#47475](https://github.com/NousResearch/hermes-agent/issues/47475) | Messages leaking entre sessões | Desktop | OPEN |

### P2 — Importantes

| # | Título | Plataforma/Componente |
|---|--------|----------------------|
| [#47464](https://github.com/NousResearch/hermes-agent/issues/47464) | P1 Memory-Compression error rate 71.4% | SysOps |
| [#47467](https://github.com/NousResearch/hermes-agent/issues/47467) | browser_vision bricks sessions com screenshots oversized | Browser/Vision |
| [#47456](https://github.com/NousResearch/hermes-agent/issues/47456) | UnicodeDecodeError no browser_tool Windows GBK/CJK | Windows |
| [#47439](https://github.com/NousResearch/hermes-agent/issues/47439) | macOS ASAR icon path crash after update | macOS Desktop |
| [#46260](https://github.com/NousResearch/hermes-agent/issues/46260) | Hermes installer falha em stage "desktop" | Windows |
| [#46866](https://github.com/NousResearch/hermes-agent/issues/46866) | Signal approval responses misrouted | Signal |
| [#41407](https://github.com/NousResearch/hermes-agent/issues/41407) | WhatsApp JID targets falham silenciosamente | WhatsApp |

### P3 — Observação

| # | Título | Componente |
|---|--------|------------|
| [#42187](https://github.com/NousResearch/hermes-agent/issues/42187) | Codex gpt-5.5 autoraise notice duplicado | Gateway |
| [#3506](https://github.com/NousResearch/hermes-agent/issues/3506) | Durable Feedback Routing via Memory/Skills | Agent |
| [#45768](https://github.com/NousResearch/hermes-agent/issues/45768) | Cron jobs devem ler memory por padrão | Cron |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features (últimas 24h)

| # | Título | Componente | Complexidade |
|---|--------|------------|--------------|
| [#47459](https://github.com/NousResearch/hermes-agent/issues/47459) | Parâmetro provider por chamada no TTS | TTS | P3 |
| [#47446](https://github.com/NousResearch/hermes-agent/issues/47446) | Agent-level pre-response hook para meta-workflow | Agent | P3 |
| [#29379](https://github.com/NousResearch/hermes-agent/issues/29379) | Native Canvas Mode para colaboração visual | TUI | P3 |
| [#40140](https://github.com/NousResearch/hermes-agent/issues/40140) | Hermes Desktop integrando com WSL existente | Desktop | P3 |
| [#11424](https://github.com/NousResearch/hermes-agent/issues/11424) | Suporte JMAP para integração email | Email | P3 |

### Sinais de Roadmap

1. **Paridade com OpenClaw** — Issue [#8950](https://github.com/NousResearch/hermes-agent/issues/8950) lista 8 canais de mensagem ausentes. Potencial feature de alta demanda.

2. **Canvas Collaborativo** — Proposta de modo visual persistente (#29379) sugere direção para workflows de planejamento compartilhado.

3. **Persistência de Contexto** — Feature de Kanban com epoch callbacks (#46360) e Durable Feedback Routing (#3506) indicam investimento em memória de longo prazo.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Categoria | Problema | Frequência |
|-----------|----------|------------|
| **Infraestrutura** | P12 com 23 jobs desativados, P1 com 71.4% error rate | Crítico |
| **Provedores** | OpenRouter quebrado, Anthropic OAuth endpoint migrado | Alto |
| **Multi-plataforma** | Windows console, macOS segfault, ASAR crashes | Alto |
| **UX** | Model picker quebrado para custom providers, memory inacessível em cron | Médio |
| **Performance** | browser_vision bricks sessions, Codex cache hit collapse | Alto |

### Cenários de Uso Identificados

- **Automação Enterprise** — SysOps incidentes em Personality 12 indicam uso em ambientes de produção com múltiplos agentes.
- **Desenvolvedores Self-hosted** — Necessidade de LiteLLM/one-api custom endpoints demonstra base de usuários advanced.
- **Produtividade Multi-canal** — Demanda por IRC, Signal, WhatsApp indica uso como hub central de comunicação.
- **Ambientes Restritos** — CJK encoding issues e Windows path handling revelam usuários em mercados asiáticos e corporativos.

### Satisfação

- CLI funciona bem (mesma máquina que Desktop macOS reportando CLI functional)
- Core de agent é estável para maioria dos usuários
- Kanban system gaining traction com múltiplos PRs de melhoria

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta/Atendimento

| # | Título | Criado | Dias | Prioridade |
|---|--------|--------|------|------------|
| [#3506](https://github.com/NousResearch/hermes-agent/issues/3506) | Durable Feedback Routing | 2026-03-28 | ~80 | P3 |
| [#11424](https://github.com/NousResearch/hermes-agent/issues/11424) | Suporte JMAP email | 2026-04-17 | ~60 | P3 |
| [#31993](https://github.com/NousResearch/hermes-agent/issues/31993) | Kanban queue states simplification | 2026-05-25 | ~22 | P3 |
| [#33480](https://github.com/NousResearch/hermes-agent/issues/33480) | Plugin slash commands truncados no Telegram | 2026-05-27 | ~20 | P3 |

### PRs Abertos de Alta Prioridade

| # | Título | Impacto |
|---|--------|---------|
| [#6660](https://github.com/NousResearch/hermes-agent/pull/6660) | Security: sanitização de erros + validação webhooks | Crítico |
| [#47399](https://github.com/NousResearch/hermes-agent/pull/47399) | Codex cache routing restoration | P1 |
| [#47473](https://github.com/NousResearch/hermes-agent/pull/47473) | Anthropic text-embedded tool calls salvage | P1 |
| [#47470](https://github.com/NousResearch/hermes-agent/pull/47470) | MCP command field security scan | P2 |

---

## Métricas Consolidada

| Indicador | Valor |
|-----------|-------|
| Issues ativas (24h) | 44 open / 6 closed |
| PRs ativos (24h) | 44 open / 6 closed |
| Releases (24h) | 0 |
| P1 bugs abertos | 3 |
| P2 bugs abertos | 7+ |
| PRs security | 2 (P1 + P2) |
| Engajamento médio (issues) | 1-4 comentários |

**Veredicto:** Projeto em **modo ativo de manutenção** com foco em estabilidade e segurança. Atenção imediata recomendada para P1 bugs (OpenRouter, Anthropic) e P2 SysOps incidents.

---

*Relatório gerado em 2026-06-17 com base em dados do GitHub NousResearch/hermes-agent*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-06-17

---

## 1. Panorama do Dia

O projeto PicoClaw apresenta alta atividade de desenvolvimento em 17/06/2026, com 15 issues e 16 PRs atualizados nas últimas 24h. A taxa de fechamento de PRs é notavelmente alta (13 de 16), indicando forte ritmo de integração. A base de código segue avançando com a versão nightly v0.2.9-nightly.20260616, e a comunidade está particularmente engajada em laporanear vulnerabilidades de segurança — 11 das 13 issues abertas são avisos de segurança reportados pelo mesmo autor (YLChen-007).

---

## 2. Lançamentos

### Nova Release
- **Nightly Build**: `v0.2.9-nightly.20260616.c1ff5aa6`
- **Release Note**: Build automatizado para a branch main, sem changelog formalizado ainda
- **Aviso**: Este é um build noturno e pode conter instabilidade — uso em produção desaconselhado

> ⚠️ **Nota de Migração**: Não há mudanças disruptivas documentadas nesta release. Usuários em versões stable devem aguardar changelog completo antes de migrar.

📎 [Comparativo com v0.2.9](https://github.com/sipeed/picoclaw/compare/v0.2.9...main) | [Nightly Build](https://github.com/sipeed/picoclaw/releases/tag/nightly)

---

## 3. Progresso do Projeto

### PRs Merged/Fechados (13 total)

| # | PR | Autor | Tipo | Impacto |
|---|-----|-------|------|---------|
| [#3137](https://github.com/sipeed/picoclaw/pull/3137) | feat: allow configured remote cron commands | jp39 | Feature | Permite canais remotos configurados em `tools.cron.command_allowed_remotes` |
| [#3120](https://github.com/sipeed/picoclaw/pull/3120) | feat(config): add RegisterChannelSettings hook | carlosprados | Feature | Extensibilidade para canais out-of-tree sem fork |
| [#3135](https://github.com/sipeed/picoclaw/pull/3135) | fix(telegram): use compositeChatID in Forum topics | ZOOWH | Bugfix | **Corrige envio de mensagens para tópicos corretos** |
| [#3132](https://github.com/sipeed/picoclaw/pull/3132) | fix: add panic recovery to core-path goroutines | SiYue-ZO | Robustness | Protege processo contra crash por goroutines em pânico |
| [#3127](https://github.com/sipeed/picoclaw/pull/3127) | fix: explicitly ignore Close() errors | chengzhichao-xydt | Code quality | Consistência em tratamento de erros em file descriptors |
| [#3129](https://github.com/sipeed/picoclaw/pull/3129) | fix(tts): explicitly ignore file.Close() error | chengzhichao-xydt | Code quality | Tratamento explícito em path de erro em TTS |
| [#3130](https://github.com/sipeed/picoclaw/pull/3130) | fix(seahorse): handle json.Marshal errors | chengzhichao-xydt | Bugfix | Retorna ErrorResult ao invés de string vazia |
| [#2990](https://github.com/sipeed/picoclaw/pull/2990) | fix(web): read full session history | yuxuan-7814 | Bugfix | Corrige visualização de histórico completo |
| [#2988](https://github.com/sipeed/picoclaw/pull/2988) | fix(agent): use summarize_token_percent | yuxuan-7814 | Bugfix | Compressão de contexto respeita configuração |
| [#2987](https://github.com/sipeed/picoclaw/pull/2987) | fix(channels): exclude tool_calls from filtering | yuxuan-7814 | Bugfix | tool_calls não são mais descartados em streaming |
| [#2983](https://github.com/sipeed/picoclaw/pull/2983) | fix(agent): retry empty llm response | afjcjsbx | Robustness | Retry em respostas semanticamente vazias |
| [#3096](https://github.com/sipeed/picoclaw/pull/3096) | docs: add PicoPaw banners | imguoguo | Docs | Atualização visual dos READMEs |

### PRs Abertos (3)

| # | PR | Autor | Tipo | Status |
|---|-----|-------|------|--------|
| [#3116](https://github.com/sipeed/picoclaw/pull/3116) | fix(pico): complete turn.done lifecycle signaling | afjcjsbx | Bugfix | Completa lifecycle para #2984 |
| [#3115](https://github.com/sipeed/picoclaw/pull/3115) | Fix inline data URL media extraction | jp39 | Bugfix | Corrige corrupção de histórico por URLs data: |
| [#3136](https://github.com/sipeed/picoclaw/pull/3136) | fix(gemini): set both camelCase and snake_case | ZOOWH | Bugfix | Suporte a Gemini 3.5 Flash Agentic |

---

## 4. Temas Quentes da Comunidade

### Issue com Maior Engajamento

**#2404** — [Feature: Add in config to send streaming HTTP request](https://github.com/sipeed/picoclaw/issues/2404)
- **Status**: Aberta (stale)
- **Autor**: OuSatoru
- **Comentários**: 12 | 👍: 1
- **Resumo**: Solicita configuração `"streaming": true` para enviar requisições HTTP streaming para backends LLM, similar ao cliente OpenAI Python
- **Análise**: Demanda legitima para parity com clientes OpenAI. 12 comentários indicam debate ativo sobre implementação. Aguarda resposta de mantenedores.

### Multi-Security Advisory Series (YLChen-007)

O usuário YLChen-007 reportou **11 vulnerabilidades de segurança** entre 09-16/06/2026:

| # | Vulnerabilidade | Severidade Estimada |
|---|-----------------|---------------------|
| [#3082](https://github.com/sipeed/picoclaw/issues/3082) | Feishu allow_from bypass | 🔴 Alta |
| [#3081](https://github.com/sipeed/picoclaw/issues/3081) | Approval hook symlink race | 🔴 Alta |
| [#3079](https://github.com/sipeed/picoclaw/issues/3079) | exec whitelist jq disclosure | 🟠 Média-Alta |
| [#3078](https://github.com/sipeed/picoclaw/issues/3078) | web_fetch SSRF via proxy | 🔴 Alta |
| [#3076](https://github.com/sipeed/picoclaw/issues/3076) | WeCom trigger bypass | 🟠 Média-Alta |
| [#3075](https://github.com/sipeed/picoclaw/issues/3075) | skills/ metadata injection | 🟠 Média-Alta |
| [#3074](https://github.com/sipeed/picoclaw/issues/3074) | web_fetch ISATAP bypass | 🟠 Média-Alta |
| [#3073](https://github.com/sipeed/picoclaw/issues/3073) | LINE webhook replay | 🟡 Média |
| [#3072](https://github.com/sipeed/picoclaw/issues/3072) | CSRF Launcher setup | 🔴 Alta |
| [#3071](https://github.com/sipeed/picoclaw/issues/3071) | WebSocket /reload abuse | 🟠 Média-Alta |
| [#3070](https://github.com/sipeed/picoclaw/issues/3070) | OneBot SSRF | 🔴 Alta |
| [#3068](https://github.com/sipeed/picoclaw/issues/3068) | MQTT allow_from spoofing | 🟠 Média-Alta |

> ⚠️ **Alerta**: Todas as 11 issues estão com tag `stale` e sem resposta de mantenedores — isso representa risco reputacional e de segurança. **Recomendação**: Priorizar triagem imediata.

---

## 5. Bugs e Estabilidade

### Bugs Fechados Hoje

| # | Bug | Severidade | Fix |
|---|-----|------------|-----|
| [#3134](https://github.com/sipeed/picoclaw/issues/3134) | su -c 'echo OK' retorna "No daemon is running" | 🟠 Média | Closed (resolução não especificada) |
| [#3110](https://github.com/sipeed/picoclaw/issues/3110) | Telegram ignora message_thread_id em Forum | 🟡 Baixa-Média | **PR #3135** corrigiu |

### Bugs em Aberto (Nenhum novo hoje)

---

### Indicadores de Estabilidade

| Métrica | Valor | Status |
|---------|-------|--------|
| Bugs fechados hoje | 2 | ✅ Positivo |
| PRs de robustez merged | 2 (#3132 panic recovery, #2983 retry) | ✅ Positivo |
| Goroutines protegidas | #3132 | ✅ Progresso |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Feature em Destaque

**#2404** — Streaming HTTP para LLMs
- Semelhante ao `stream=True` do cliente OpenAI Python
- Impacto: Permite melhor experiência de usuário com respostas parciais
- **Sinal de roadmap**: Suporte a streaming é demanda recorrente em agentes AI

### Features Merged Hoje

1. **Remote Cron Commands** ([#3137](https://github.com/sipeed/picoclaw/pull/3137))
   - Permite canais remotos configurados
   - Expande casos de uso para automação distribuída

2. **RegisterChannelSettings Hook** ([#3120](https://github.com/sipeed/picoclaw/pull/3120))
   - Suporte a canais out-of-tree
   - Facilita ecossistema de plugins terceiro

### Features Abertas (Stale)

- [#2404](https://github.com/sipeed/picoclaw/issues/2404) — Streaming HTTP config

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Dor | Issue | Contexto |
|-----|-------|----------|
| Telegram Forum envia para #General | [#3110](https://github.com/sipeed/picoclaw/issues/3110) | Usuários com grupos Telegram Forum não recebem respostas no tópico correto |
| Histórico mostra apenas última mensagem | [#2796](https://github.com/sipeed/picoclaw/issues/2796) (via #2990) | UX do Web UI comprometida |
| Compressão de contexto ignora configuração | [#2968](https://github.com/sipeed/picoclaw/issues/2968) (via #2988) | Administradores não conseguem tunar token limits |
| tool_calls perdidos em streaming | [#2958](https://github.com/sipeed/picoclaw/issues/2958) (via #2987) | Funcionalidade de tools intermitente |
| `su -c` não funciona | [#3134](https://github.com/sipeed/picoclaw/issues/3134) | Execução de comandos via agente falha |

### Feedback Positivo Indicado

- Comunidade ativa em reportar bugs específicos de canais (Telegram, Feishu, WeCom)
- Demanda por streaming demonstra expectativa de features avançadas

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta (Stale >7 dias)

| # | Título | Idade | Prioridade |
|---|--------|-------|------------|
| [#2404](https://github.com/sipeed/picoclaw/issues/2404) | Feature: Streaming HTTP | ~70 dias | 🔴 Alta |
| [#3082](https://github.com/sipeed/picoclaw/issues/3082) | Security: Feishu bypass | ~8 dias | 🔴 Crítica |
| [#3081](https://github.com/sipeed/picoclaw/issues/3081) | Security: Symlink race | ~8 dias | 🔴 Crítica |
| [#3079](https://github.com/sipeed/picoclaw/issues/3079) | Security: jq disclosure | ~8 dias | 🟠 Alta |
| [#3078](https://github.com/sipeed/picoclaw/issues/3078) | Security: SSRF proxy | ~8 dias | 🔴 Crítica |
| [#3076](https://github.com/sipeed/picoclaw/issues/3076) | Security: WeCom bypass | ~8 dias | 🟠 Alta |
| [#3075](https://github.com/sipeed/picoclaw/issues/3075) | Security: skills injection | ~8 dias | 🟠 Alta |
| [#3074](https://github.com/sipeed/picoclaw/issues/3074) | Security: ISATAP bypass | ~8 dias | 🟠 Alta |
| [#3073](https://github.com/sipeed/picoclaw/issues/3073) | Security: LINE replay | ~8 dias | 🟡 Média |
| [#3072](https://github.com/sipeed/picoclaw/issues/3072) | Security: CSRF | ~8 dias | 🔴 Crítica |
| [#3071](https://github.com/sipeed/picoclaw/issues/3071) | Security: WebSocket /reload | ~8 dias | 🟠 Alta |
| [#3070](https://github.com/sipeed/picoclaw/issues/3070) | Security: OneBot SSRF | ~8 dias | 🔴 Crítica |
| [#3068](https://github.com/sipeed/picoclaw/issues/3068) | Security: MQTT spoofing | ~8 dias | 🟠 Alta |

### PRs Abertos Sem Merge

| # | Título | Status |
|---|--------|--------|
| [#3116](https://github.com/sipeed/picoclaw/pull/3116) | fix(pico): complete turn.done lifecycle | Aguarda review |
| [#3115](https://github.com/sipeed/picoclaw/pull/3115) | Fix inline data URL media extraction | Aguarda review |
| [#3136](https://github.com/sipeed/picoclaw/pull/3136) | fix(gemini): snake_case support | Aguarda review |

---

## ⚠️ Recomendações Imediatas

1. **Triagem de Segurança (Urgente)**: 11 vulnerabilidades sem acknowledgement — recomenda-se resposta oficial e CVE tracking
2. **Feature #2404**: Feature request ativa há 70 dias com 12 comentários — decisão de roadmap necessária
3. **Testes de Regressão**: Vários bugs relacionados a Telegram Forum e streaming — expandir cobertura de testes

---

*Relatório gerado automaticamente com base em dados do GitHub de 2026-06-17. Métricas sujeitas a alterações conforme atualizações do repositório.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-06-17

## 1. Panorama do dia

O projeto IronClaw manteve **alta atividade de desenvolvimento** em 17 de junho de 2026, com 50 issues e 50 PRs atualizados nas últimas 24 horas. A distribuição de 31 issues abertas/ativas e 19 fechadas indica um fluxo saudável de resolução, com destaque para a plataforma Reborn WebUI como o principal foco de refinamento. Observa-se uma forte ênfase em **experiência do usuário (UX) e onboarding**, com múltiplos ajustes de interface e fluxos de autenticação OAuth. O time está investindo significativamente em robustez do agent loop, correções de estabilidade e testes end-to-end (codex). Não houve lançamentos oficiais (releases) no período, sinalizando fase de maturacao de funcionalidades antes de выпуска.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24 horas.**

O repositório encontra-se em período de desenvolvimento ativo sem tag de versão publicada recentemente. Todas as atividades permanecem no branch principal (`main`), com merges contínuos.

---

## 3. Progresso do Projeto

Os seguintes PRs representam avanços significativos merged/fechados hoje:

| PR | Descrição | Escopo |
|---|---|---|
| **#4858** | Fix: exibir detalhes sanitizados de comandos shell em prompts de aprovação e atividade ([nearai/ironclaw#4858](https://github.com/nearai/ironclaw/pull/4858)) | UX / Approval |
| **#4954** | Fix: superfície negação de approval-gate para o modelo em vez de cancelar o run ([nearai/ironclaw#4954](https://github.com/nearai/ironclaw/pull/4954)) | Agent Loop |
| **#4953** | Security: gate OAuth URL do Slack em DM pessoal verificado ([nearai/ironclaw#4953](https://github.com/nearai/ironclaw/pull/4953)) | Security / Slack |
| **#4995** | Benchmark: forward NEARAI_API_KEY para execuções via NEAR cloud ([nearai/ironclaw#4995](https://github.com/nearai/ironclaw/pull/4995)) | CI / DevOps |
| **#4841** | reborn: eliminar run-borking failures com explicação e retryable runs ([nearai/ironclaw#4841](https://github.com/nearai/ironclaw/pull/4841)) | Robustez |

**PRs em aberto de destaque:**

- **#4997**: Suporte para download de binários (PDF/PPTX/DOCX/XLSX) via google-drive como texto — [nearai/ironclaw#4997](https://github.com/nearai/ironclaw/pull/4997)
- **#4984**: Correção de atualizações de atividade de ferramentas falhadas na WebUI — [nearai/ironclaw#4984](https://github.com/nearai/ironclaw/pull/4984)
- **#4989**: Persistência de uso LLM no Engine V2 — [nearai/ironclaw#4989](https://github.com/nearai/ironclaw/pull/4989)
- **#4712**: Migração de configuração Slack para WebUI — [nearai/ironclaw#4712](https://github.com/nearai/ironclaw/pull/4712)
- **#4876**: Dependabot com 43 updates agrupados — [nearai/ironclaw#4876](https://github.com/nearai/ironclaw/pull/4876)

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários/reações)

| Issue | Título | Comentários | Status |
|---|---|---|---|
| **#4908** | Google Calendar mostra "Activate" após já estar ativo ([nearai/ironclaw#4908](https://github.com/nearai/ironclaw/issues/4908)) | 3 | CLOSED |
| **#4942** | Tool calls falhados não aparecem até re-fetch/reload ([nearai/ironclaw#4942](https://github.com/nearai/ironclaw/issues/4942)) | 2 | OPEN |
| **#4764** | Negar approval shell deixa tool invocation pendente sem feedback ([nearai/ironclaw#4764](https://github.com/nearai/ironclaw/issues/4764)) | 2 | OPEN |
| **#4761** | Agent para após falhas repetidas de tools em vez de recuperar ([nearai/ironclaw#4761](https://github.com/nearai/ironclaw/issues/4761)) | 2 | OPEN |
| **#4907** | Run falha após OAuth Google bem-sucedido em vez de retomar ([nearai/ironclaw#4907](https://github.com/nearai/ironclaw/issues/4907)) | 2 | OPEN |
| **#4881** | Adicionar Preview Deployments para PRs do IronClaw ([nearai/ironclaw#4881](https://github.com/nearai/ironclaw/issues/4881)) | 1 | OPEN |

### Análise dos temas

**1. Integrações Google (Calendar, Drive, Gmail) — 6 issues**  
Padrão recorrente de problemas com OAuth, reuso de autenticação e fluxo de activation. A extensão Google Calendar foi destaque negativo: o componente exibe status "ACTIVE" na página de Extensions enquanto o diálogo de configuração ainda mostra botão "Activate", causando confusão ([nearai/ironclaw#4908](https://github.com/nearai/ironclaw/issues/4908)). Além disso, autorização não é reutilizada entre conversas ([nearai/ironclaw#4913](https://github.com/nearai/ironclaw/issues/4913)).

**2. UX de Aprovações e Ferramentas — 4 issues**  
A denial de approvals do shell não fornece feedback ao usuário e deixa a invocation pendente ([nearai/ironclaw#4764](https://github.com/nearai/ironclaw/issues/4764)). Ferramentas falhadas não aparecem no timeline até reload ([nearai/ironclaw#4942](https://github.com/nearai/ironclaw/issues/4942)). Atividades de approval/denytool devem permanecer visíveis e ordenadas ([nearai/ironclaw#4977](https://github.com/nearai/ironclaw/issues/4977)).

**3. Automations — 3 issues**  
Automations recorrentes podem ficar permanentemente bloqueadas esperando approval ([nearai/ironclaw#4986](https://github.com/nearai/ironclaw/issues/4986)). Threads de runs de automations são difíceis de descobrir quando approval é requerido ([nearai/ironclaw#4987](https://github.com/nearai/ironclaw/issues/4987)).

**4. DevOps/Infraestrutura — 1 issue**  
Solicitação de Preview Deployments estilo Vercel para PRs ([nearai/ironclaw#4881](https://github.com/nearai/ironclaw/issues/4881)).

---

## 5. Bugs e Estabilidade

### Por Severidade

| Severidade | Qtd | Issues Relevantes |
|---|---|---|
| **Medium** | 1 | #4992 — SSO access mismatch pode falhar automations Railway antes da criação de thread ([nearai/ironclaw#4992](https://github.com/nearai/ironclaw/issues/4992)) |
| **Low/UX** | 8+ | Ver detalhes abaixo |

### Bugs Críticos/Medium

- **#4992** [OPEN] — Instâncias `local-dev` do Reborn em Railway criam automations agendadas, mas as execuções falham com "No thread attached" e "0% visible runs". **Risco: impacto em automations em produção.** ([nearai/ironclaw#4992](https://github.com/nearai/ironclaw/issues/4992))

### Bugs Low/UX (Onboarding e Interface)

- **#4942** [OPEN] — Tool calls falhados não aparecem no UI até reload manual ([nearai/ironclaw#4942](https://github.com/nearai/ironclaw/issues/4942))
- **#4764** [OPEN] — Negar shell approval não dá feedback e deixa tool pendente ([nearai/ironclaw#4764](https://github.com/nearai/ironclaw/issues/4764))
- **#4761** [OPEN] — Agent para após falhas repetidas de tools em vez de se recuperar ([nearai/ironclaw#4761](https://github.com/nearai/ironclaw/issues/4761))
- **#4907** [OPEN] — Run falha após OAuth Google completo em vez de retomar execução ([nearai/ironclaw#4907](https://github.com/nearai/ironclaw/issues/4907))
- **#4986** [OPEN] — Automation recorrente pode ficar bloqueada permanentemente esperando approval ([nearai/ironclaw#4986](https://github.com/nearai/ironclaw/issues/4986))
- **#4991** [OPEN] — Google Drive auth failures resultam em `operation_failed` sem retry ou gate AuthRequired ([nearai/ironclaw#4991](https://github.com/nearai/ironclaw/issues/4991))
- **#4762** [OPEN] — Falha em tool workflow causa inconsistência em mensagens follow-up e ordenação de atividade ([nearai/ironclaw#4762](https://github.com/nearai/ironclaw/issues/4762))

### Bugs Resolvidos Recentemente

- **#4908** [CLOSED] — Google Calendar mostrando "Activate" após já estar ativo (3 comentários, indicando complexidade)
- **#4857** [CLOSED] — NEAR AI provider incorretamente mostrado como "Active" em Settings limpa
- **#4852** [CLOSED] — Comando shell não visível no approval dialog (fixado em #4858)

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| Issue | Feature | Escopo | Link |
|---|---|---|---|
| **#4881** | Preview Deployments para PRs (experiência Vercel-like) | DevOps | [nearai/ironclaw#4881](https://github.com/nearai/ironclaw/issues/4881) |
| **#4985** | Persistir LLM usage para `/api/admin/usage` no Engine V2 | Admin/API | [nearai/ironclaw#4985](https://github.com/nearai/ironclaw/issues/4985) |
| **#4983** | Remover compatibilidade de flattening tool-message do NEAR AI | Technical Debt | [nearai/ironclaw#4983](https://github.com/nearai/ironclaw/issues/4983) |
| **#4960** | Settings + Tools permission API/UI (unstub) com display global-context | WebUI | [nearai/ironclaw#4960](https://github.com/nearai/ironclaw/issues/4960) |
| **#4959** | Global auto-approve setting com resolução por-turn approval (sem restart) | Core | [nearai/ironclaw#4959](https://github.com/nearai/ironclaw/issues/4959) |

### Sinais de Roadmap Identificados

1. **Multi-tenancy e Isolamento**: Issue #3890 adiciona testes de contrato de isolamento multi-tenant, sugerindo direção para implantações compartilhadas.
2. **Refinement de Engine V2**: #4985 e #4989 indicam investimento em observabilidade e persistência de métricas para nova arquitetura.
3. **Slack Integration Modernization**: #4712 move configuração Slack para WebUI com secret store — indica amadurecimento de integrações.
4. **Dogfooding Contínuo**: Issues #4879 e #4692 documentam findings de uso interno, revelando ciclo de melhoria orientada por uso real.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Categoria | Problema | Impacto | Link |
|---|---|---|---|
| **OAuth/Auth** | Fluxos Google (Calendar, Drive, Gmail) confusos, falham sem retry claro, não persistem entre conversas | Alto — quebra fluxo de trabalho do agente | [nearai/ironclaw#4908](https://github.com/nearai/ironclaw/issues/4908), [#4913](https://github.com/nearai/ironclaw/issues/4913), [#4991](https://github.com/nearai/ironclaw/issues/4991) |
| **Aprovações** | Usuários não entendem quando algo está pendente de approval, como negar, e o que acontece após negar | Alto — experience opaca | [nearai/ironclaw#4764](https://github.com/nearai/ironclaw/issues/4764), [#4987](https://github.com/nearai/ironclaw/issues/4987) |
| **Automations** | Dificuldade de descobrir runs de automations, visualizar status e histórico | Médio — automations são promessas não cumpridas do produto | [nearai/ironclaw#4980](https://github.com/nearai/ironclaw/issues/4980), [#4987](https://github.com/nearai/ironclaw/issues/4987), [#4988](https://github.com/nearai/ironclaw/issues/4988) |
| **Onboarding** | Novos usuários bloqueados de Extensions/Automations no primeiro uso; badges e estados confusos | Médio — atrito de adoção | [nearai/ironclaw#4793](https://github.com/nearai/ironclaw/issues/4793), [#4981](https://github.com/nearai/ironclaw/issues/4981) |
| **Transparência** | Falhas de tools não mostram contexto, runs parecem "borked" sem explicação | Médio — perda de confiança | [nearai/ironclaw#4761](https://github.com/nearai/ironclaw/issues/4761), [#4841](https://github.com/nearai/ironclaw/pull/4841) |

### Cenários de Uso em Evidência

- **Agente como assistente pessoal via Google Calendar**: Usuários tentam usar IronClaw para gerenciar calendário via chat, mas autenticacao e activation confundem.
- **Automations com ferramentas externas**: Criar automations que verificam GitHub periodicamente ou enviam Slack notifications — workflow completo mas UX fragmentada.
- **Shell commands em ambiente local**: Usuários avançados querem executar comandos shell com visibility e control — actualmente a aprovação é opaca.
- **Dogfooding interno**: Equipe usando IronClaw para trabalhar no próprio IronClaw — expõe problemas de setup, provider config e first-run.

---

## 8. Backlog que Merece Atenção

### Issues sem atividade recente (possível stagnation)

| Issue | Título | Criado | Atualizado | Status | Prioridade |
|---|---|---|---|---|---|
| **#4761** | Agent stops after repeated tool failures instead of recovering | 2026-06-11 | 2026-06-16 | OPEN | Alta — estabilidade |
| **#4762** | Failed tool workflow causes ordering inconsistency | 2026-06-11 | 2026-06-16 | OPEN | Média |
| **#4764** | Denying shell approval leaves pending + no feedback | 2026-06-11 | 2026-06-16 | OPEN | Alta — UX |
| **#4692** | Dogfooding findings 06/08-06/14 (epic) | 2026-06-10 | 2026-06-16 | OPEN | Meta — rastreamento |
| **#3890** | Multi-tenant isolation contract tests | 2026-05-22 | 2026-06-16 | OPEN | Média — infraestrutura |
| **#3947** | Event and scheduling parity coverage | 2026-05-23 | 2026-06-16 | OPEN | Média — testing |

### PRs Abandonados ou Estagnados

| PR | Título | Atualizado |

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório de Projeto: CoPaw (QwenPaw)
## Data de Referência: 2026-06-17

---

## 1. Panorama do Dia

O projeto CoPaw (QwenPaw) apresenta **alta atividade** em 17 de junho de 2026, com 41 issues e 40 PRs atualizados nas últimas 24 horas — um ritmo de desenvolvimento intenso e saudável. O balanceamento entre itens abertos (19 issues, 20 PRs) e fechados (22 issues, 20 PRs) sugere uma equipe responsiva que consegue absorver o volume de contribuições e feedbacks. A release beta v1.1.12-beta.1 demonstra foco em estabilidade (fix de segurança no keychain, hardening do CI desktop), enquanto a comunidade mantém forte engajamento com issues críticas como o freeze por contexto compaction e crashes no macOS ARM64. O ecossistema de plugins continua crescendo com PRs como DataPaw e HeadroomContextManager em pipeline.

---

## 2. Lançamentos

### v1.1.12-beta.1

**Data:** 2026-06-17 | [Release no GitHub](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.12-beta.1)

**Mudanças incluídas:**

| PR | Tipo | Descrição |
|----|------|-----------|
| [#5028](https://github.com/agentscope-ai/QwenPaw/pull/5028) | `fix(security)` | **Isola chave mestra do keychain por instalação.** Evita que múltiplas instalações do QwenPaw compartilhem credenciais, melhorando isolamento de segurança em ambientes multi-usuário. |
| [#5125](https://github.com/agentscope-ai/QwenPaw/pull/5125) | `fix(desktop)` | **Fortalece Tauri Windows CI contra falhas de fetch no crates.io.** Protege o pipeline de build desktop contra dependências Rust não disponíveis, reduzindo falhas intermitentes. |

**Notas de Migração:** Nenhuma breaking change identificada. A mudança de keychain é retrocompatível e não requer ação do usuário. Usuários Windows em ambientes CI/CD com cache local de crates.io podem notar pipelines mais resilientes.

---

## 3. Progresso do Projeto

### PRs Merged/Closed Hoje (Seleção de Maior Impacto)

| PR | Autor | Área | Impacto |
|----|-------|------|---------|
| [#5240](https://github.com/agentscope-ai/QwenPaw/pull/5240) | jinliyl | `perf(config)` | Remove deep copies desnecessárias no caching de configurações — melhora performance e reduz uso de memória durante load/retrieval de configs. |
| [#5247](https://github.com/agentscope-ai/QwenPaw/pull/5247) | nguyenthanhthe | `feat(coding)` | Formaliza "Ponytail Philosophy" como regras injetáveis + indexador de código zero-dependency para compreensão instantânea de codebases. |
| [#5222](https://github.com/agentscope-ai/QwenPaw/pull/5222) | zhijianma | `feat(console)` | Adiciona modo simples com navegação flat e lista de sessões ordenada por tempo de atualização — responde diretamente à crítica de UI #4904. |
| [#5226](https://github.com/agentscope-ai/QwenPaw/pull/5226) | qbc2016 | `fix(gemini)` | Sanitiza schemas de tools para evitar `400 INVALID_ARGUMENT` no function calling do Gemini — bug crítico para usuários do provider. |
| [#5228](https://github.com/agentscope-ai/QwenPaw/pull/5228) | qbc2016 | `fix` | Usa formatter para title generation e skill optimization, garantindo compatibilidade com todos os model providers (não só OpenAI-compatible). |
| [#5229](https://github.com/agentscope-ai/QwenPaw/pull/5229) | jinliyl | `fix(config)` | Garante deep copy de configurações cached — **corrige problema de config pollution reportado em [#5206](https://github.com/agentscope-ai/QwenPaw/issues/5206)** onde `agent.json` era silenciosamente sobrescrito. |
| [#5232](https://github.com/agentscope-ai/QwenPaw/pull/5232) | zhijianma | `feat(chat)` | Mostra mensagem de fallback quando output de resposta está vazio — melhora UX em edge cases. |
| [#5238](https://github.com/agentscope-ai/QwenPaw/pull/5238) | jinglinpeng | `fix(desktop)` | Repara dependências de plugins Tauri — mitiga o crash loop do Desktop em macOS ARM64 ([#5209](https://github.com/agentscope-ai/QwenPaw/issues/5209)). |
| [#5201](https://github.com/agentscope-ai/QwenPaw/pull/5201) | yutai78786 | `test(integration)` | Adiciona testes de integração para cron execution e tool API do Sprint 2.4, além de refatorar Mock LLM infrastructure. |

**Indicador de Saúde:** A quantidade de PRs de bug fix merged em um único dia (pelo menos 5) demonstra敏捷eza na resolução de problemas reportados.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (por comentários)

**1. [#5218](https://github.com/agentscope-ai/QwenPaw/issues/5218)** — **[Bug] 子Agent触发上下文压缩时QwenPaw进程冻结无响应**
- 🔥 **13 comentários** | Status: **OPEN** | Prioridade: **Crítica**
- **Resumo:** Quando um sub-agent dispara context compaction (compressão de contexto), o processo QwenPaw congela completamente e só recupera com restart manual. O PR [#5242](https://github.com/agentscope-ai/QwenPaw/pull/5242) já adiciona timeout protection ao `agent.reply()` em `_compact_context()`.
- **Sinal da Comunidade:** Usuários dependem fortemente de workflows multi-agent com compressão de contexto — este é um blocker para produção.

**2. [#5063](https://github.com/agentscope-ai/QwenPaw/issues/5063)** — **[Feature] Headroom como camada opcional de context compression (60-95% redução de tokens)**
- 💬 6 comentários | Status: **OPEN** | Tipo: **Enhancement**
- **Resumo:** Integração do Headroom SDK como plugin de compressão reversível para tool outputs, histórico de conversas, chunks RAG e conteúdos de arquivos. PR companion [#5244](https://github.com/agentscope-ai/QwenPaw/pull/5244) já está open.
- **Sinal da Comunidade:** Forte demanda por otimização de custo de tokens — indica que usuários estão operando em escala significativa.

**3. [#4625](https://github.com/agentscope-ai/QwenPaw/issues/4625)** — **[Bug] MiniMax-M2.5 thinking process returns XML format causing incompatibility**
- 💬 6 comentários | Status: **OPEN** | Severidade: **Alta**
- **Resumo:** Versões 1.1.7–1.1.8 retornam thinking process em formato XML que não é executado/instruído corretamente, causando interrupções severas.
- **Sinal da Comunidade:** Proliferação de modelos com outputs de reasoning demanda robustesse em parsing de formatos não-padrão.

**4. [#5161](https://github.com/agentscope-ai/QwenPaw/issues/5161)** — **[Question] Long conversation causes QwenPaw to stop responding**
- 💬 5 comentários | Status: **OPEN** | Tipo: **Question/Bug**
- **Resumo:** Após muitas rodadas ou contexto longo, QwenPaw para de responder completamente — possivelmente relacionado a [#5218] (context compaction freeze).
- **Sinal da Comunidade:** Conversations de longa duração são um caso de uso real que precisa de suporte robusto.

**5. [#5167](https://github.com/agentscope-ai/QwenPaw/issues/5167)** — **[Enhancement] Feishu CardKit streaming cards refresh slowly in long replies**
- 💬 5 comentários | Status: **CLOSED** | Tipo: **UX Enhancement**
- **Resumo:** Cards de streaming Feishu ficam perceptivelmente lentos em respostas longas, afetando usabilidade.
- **Resposta da Comunidade:** closed com resolução não especificada nos dados — requer follow-up.

---

## 5. Bugs e Estabilidade

### Bugs Reportados Hoje — Análise por Severidade

#### 🔴 Críticos (Impacto em Produção)

| Issue | Descrição | Severidade | Status | Ação |
|-------|-----------|------------|--------|------|
| [#5218](https://github.com/agentscope-ai/QwenPaw/issues/5218) | Processo congela durante context compaction por sub-agent | **Crítica** | OPEN | PR [#5242](https://github.com/agentscope-ai/QwenPaw/pull/5242) em curso (timeout protection) |
| [#5209](https://github.com/agentscope-ai/QwenPaw/issues/5209) | QwenPaw Desktop (Tauri) crash loop no macOS ARM64 — EXC_BAD_ACCESS (SIGSEGV) | **Crítica** | OPEN | PR [#5238](https://github.com/agentscope-ai/QwenPaw/pull/5238) merged — Tauri plugin deps repaired |
| [#5243](https://github.com/agentscope-ai/QwenPaw/issues/5243) | Frequentes SIGSEGV no macOS rastreados para ChromaDB Rust bindings — 48 crashes em 2 dias | **Crítica** | OPEN | PR [#5246](https://github.com/agentscope-ai/QwenPaw/pull/5246) open — add config overrides para disable ChromaDB |

#### 🟠 Altos (Degradam Significativamente)

| Issue | Descrição | Severidade | Status |
|-------|-----------|------------|--------|
| [#5208](https://github.com/agentscope-ai/QwenPaw/issues/5208) | "Assistant message count mismatch" com modelos que retornam reasoning blocks tipo "reasoning" ao invés de "thinking" | **Alta** | OPEN |
| [#4625](https://github.com/agentscope-ai/QwenPaw/issues/4625) | MiniMax-M2.5 thinking process retorna XML, quebrando compatibilidade (v1.1.7–1.1.8) | **Alta** | OPEN |
| [#5235](https://github.com/agentscope-ai/QwenPaw/issues/5235) | Cron scheduled tasks não executam no horário agendado — `last_run_at: null` | **Alta** | OPEN |
| [#5250](https://github.com/agentscope-ai/QwenPaw/issues/5250) | Cron tasks interrompem conversa principal injetando mensagens na thread | **Alta** | OPEN |

#### 🟡 Médios (UX/Edge Cases)

| Issue | Descrição | Severidade | Status |
|-------|-----------|------------|--------|
| [#5206](https://github.com/agentscope-ai/QwenPaw/issues/5206) | `load_agent_config()` retorna referência de cache causando poluição de config e sobrescrita de `agent.json` | **Média** | CLOSED — fix em [#5229](https://github.com/agentscope-ai/QwenPaw/pull/5229) |
| [#5214](https://github.com/agentscope-ai/QwenPaw/issues/5214) | DingTalk Stream channel falha silenciosamente após wake de laptop — asyncio event loop freeze | **Média** | CLOSED |
| [#5184](https://github.com/agentscope-ai/QwenPaw/issues/5184) | Local model providers não aparecem na UI em v1.1.11.post2 | **Média** | CLOSED |
| [#5233](https://github.com/agentscope-ai/QwenPaw/issues/5233) | Ollama model sem opções disponíveis para switch na UI | **Média** | CLOSED |
| [#4988](https://github.com/agentscope-ai/QwenPaw/issues/4988) | Session filename duplicado causa Windows MAX_PATH overflow | **Média** | CLOSED |

**Indicador de Estabilidade:** 7 de ~13 bugs reportados já foram closed hoje, demonstrando resposta rápida. No entanto, 3 bugs críticos (crash loops e freezes) permanecem open — estes precisam de atenção urgente antes da próxima release estável.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features em Pipeline

| PR/Issue | Descrição | Status | Sinais de Prioridade |
|----------|-----------|--------|---------------------|
| [#5244](https://github.com/agentscope-ai/QwenPaw/pull/5244) | **HeadroomContextManager** — compressão de contexto 60-95% tokens | OPEN | Alto interesse comunitário (#5063 com 6 comentários) |
| [#4622](https://github.com/agentscope-ai/Qwen

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-06-17

---

## 1. Panorama do Dia

O projeto ZeroClaw atravessa um dia de **atividade extremamente elevada** — 31 issues e 50 PRs atualizados nas últimas 24h, sem nenhum release novo. A comunidade está focada em estabilizar a versão 0.8.0: múltiplos bugs de severidade S1 (workflow bloqueado) foram reportados nas últimas horas, incluindo uma regressão nos binários pré-construídos que removeu recursos de Slack/Discord. Ao mesmo tempo, 12 PRs foram fechados com contribuições para i18n, canais, cron jobs e segurança. A proporção de 23 PRs fechados versus 27 abertos sugere um ciclo de merge ativo, embora a lista de issues de alta severidade em aberto demande atenção imediata.

---

## 2. Lançamentos

**Nenhum release hoje.** O projeto não publicou novas versões nas últimas 24h. A versão mais recente estável permanece em 0.8.0, que apresenta a regressão documentada em [#7787](https://github.com/zeroclaw-labs/zeroclaw/issues/7787) — binários pré-construídos shippam sem funcionalidades de Slack e Discord. Recomenda-se que operadores em produção considerem o downgrade para v0.7.5 enquanto a correção não é disponibilizada.

---

## 3. Progresso do Projeto

### PRs fechados nas últimas 24h (12 merges)

| # | Descrição | Impacto |
|---|---|---|
| [#6731](https://github.com/zeroclaw-labs/zeroclaw/pull/6731) | `feat(slack)`: nova opção de config `unfurl` para suprimir cards de preview de URLs | UX de Slack |
| [#6578](https://github.com/zeroclaw-labs/zeroclaw/pull/6578) | `fix(i18n)`: respostas de comandos de runtime de canais agora são localizadas via Fluent | Internacionalização |
| [#6630](https://github.com/zeroclaw-labs/zeroclaw/pull/6630) | `fix(channels/orchestrator)`: prompt de sistema byte-estável para prefix caching (#6360) | Performance de LLM (~12k tokens economizados por mensagem em canais) |
| [#6626](https://github.com/zeroclaw-labs/zeroclaw/pull/6626) | `fix(config)`: warning ao carregar `security.otp.gated_actions` com entries inválidos (#5810) | Segurança operacional |
| [#6861](https://github.com/zeroclaw-labs/zeroclaw/pull/6861) | `fix(runtime)`: detecção de MCP baseada em origem para `tool_filter_groups` | Funcionalidade MCP |
| [#6362](https://github.com/zeroclaw-labs/zeroclaw/pull/6362) | `fix(runtime)`: preserva texto plain-text do assistant antes de tool messages no context compressor | Qualidade de contexto |
| [#6910](https://github.com/zeroclaw-labs/zeroclaw/pull/6910) | `fix(shell)`: previne hang quando processos netos herdam handles de pipe no Windows | Estabilidade em Windows |
| [#6038](https://github.com/zeroclaw-labs/zeroclaw/pull/6038) | `fix(cron)`: lock de claim/release para prevenir execução duplicada de jobs | Confiabilidade de cron jobs |
| [#5742](https://github.com/zeroclaw-labs/zeroclaw/pull/5742) | Adiciona `MiniMax-AI/cli` como skill tap padrão na tabela da comunidade | Descoberta de skills |
| [#6278](https://github.com/zeroclaw-labs/zeroclaw/pull/6278) | `feat(channels/discord)`: treat reply-to-bot como mention implícita | UX de Discord |
| [#6297](https://github.com/zeroclaw-labs/zeroclaw/pull/6297) | `feat(channels)`: expõe eventos poll-vote / interactive-reply; adiciona `Channel::send_choice` | Suporte a WhatsApp/Signal |
| [#6318](https://github.com/zeroclaw-labs/zeroclaw/pull/6318) | `feat(hooks)`: novo hook `on_before_compaction` para notificação pré-compressão | Extensibilidade |

### PRs abertos de destaque (em revisão/need-author-action)

- [#7802](https://github.com/zeroclaw-labs/zeroclaw/pull/7802) — Doctor pane em zerocode (Audacity88, size L, alta activity)
- [#7678](https://github.com/zeroclaw-labs/zeroclaw/pull/7678) — Thread `CanvasStore` em WS chat e ACP sessions (singlerider, priority P1)
- [#7792](https://github.com/zeroclaw-labs/zeroclaw/pull/7792) — Resolve runtime profiles para direct turns (Audacity88)
- [#7361](https://github.com/zeroclaw-labs/zeroclaw/pull/7361) — RFC-6969: output routing via `send_via` + correções de voice (mov-xound-glitch, size XL, afetando 10+ canais)
- [#6693](https://github.com/zeroclaw-labs/zeroclaw/pull/6693) — Dream Mode para consolidação periódica de memória (JordanTheJet, size XL)

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários)

1. **[#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)** — **RFC: Work Lanes, Board Automation, and Label Cleanup** | 11 comentários
   - Autor: Audacity88 | Status: Accepted, rollout in progress
   - Proposta governança para rotas de trabalho sem sistema manual — cobertura de 0.8.0-beta-1 até 0.8.0. Demanda da comunidade por automação de board e label consistente.

2. **[#6970](https://github.com/zeroclaw-labs/zeroclaw/issues/6970)** — **Tracker: v0.8.1 integration/channel/provider/tool queue** | 3 comentários
   - Complementa #6489; focado em trabalho de integração, canal, provider, tool, runtime e config. Indica que a próxima versão já está em planejamento coordenado.

3. **[#7218](https://github.com/zeroclaw-labs/zeroclaw/issues/7218)** — **RFC: A2A agent discovery (.well-known/agent-card.json)** | 3 comentários
   - Define como funciona a descoberta de agentes A2A em instalações multi-agente. Fundamentação para interoperabilidade com sistemas externos. Prioridade estratégica para arquitetura.

4. **[#7675](https://github.com/zeroclaw-labs/zeroclaw/issues/7675)** — **RFC: Hardened CI pipeline — supply-chain scanning, provenance e SBOM** | 2 comentários
   - Proposto por ConYel: novo workflow `ci-security-hardened.yml` com scanning de cadeia de suprimentos, provenance e geração de SBOM. Resposta direta à crescente preocupação com segurança de dependências.

5. **[#7759](https://github.com/zeroclaw-labs/zeroclaw/issues/7759)** — **Feature: Decouple gateway WebSocket lifetime from agent turn** | 2 comentários
   - Separar o ciclo de vida do WebSocket do turno do agente — desconexões não devem cancelar turns em flight. Melhora significativa de resiliência para o gateway web.

### Análise de tendências

Há forte demanda por **governança e automação de processos** (#6808), **segurança de cadeia de suprimentos** (#7675), **interoperabilidade multi-agente** (#7218) e **melhorias no gateway web**. A comunidade demonstra maturidade ao formalizar RFCs para mudanças arquiteturais significativas.

---

## 5. Bugs e Estabilidade

### S1 — Workflow bloqueado (crítico)

| # | Bug | Canal afetado | Atualização |
|---|---|---|---|
| [#7756](https://github.com/zeroclaw-labs/zeroclaw/issues/7756) | native/MCP tools indisponíveis em turns OpenAI Responses/reasoning e Anthropic | Provider, runtime | 2026-06-16 |
| [#7796](https://github.com/zeroclaw-labs/zeroclaw/issues/7796) | Direct agent turns ignoram `runtime-profile.max_tool_iterations` | Runtime/daemon | 2026-06-16 |
| [#7787](https://github.com/zeroclaw-labs/zeroclaw/issues/7787) | **Regressão v0.8.0**: binários pré-construídos sem Slack/Discord | Canais Slack/Discord | 2026-06-16 |
| [#7753](https://github.com/zeroclaw-labs/zeroclaw/issues/7753) | Race condition de ordenação em persistência de sessão de canal | Channel, runtime | 2026-06-16 |
| [#5266](https://github.com/zeroclaw-labs/zeroclaw/issues/5266) | Código de pairing não exibido ao iniciar gateway em porta alternativa | Gateway, security | Atualizado 2026-06-16 |
| [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) | **74 falhas de teste em Windows** — comandos Unix-only, path semantics, console encoding | CI/tooling | Atualizado 2026-06-16 |

### S2 — Comportamento degradado

| # | Bug | Severidade parcial |
|---|---|---|
| [#7758](https://github.com/zeroclaw-labs/zeroclaw/issues/7758) | Documentação de configuração ilegível/inutilizável | Docs, config |
| [#6643](https://github.com/zeroclaw-labs/zeroclaw/issues/6643) | "Thoughts" vazam na mensagem final com GLM-5.1 | Provider:glm |
| [#7799](https://github.com/zeroclaw-labs/zeroclaw/issues/7799) | Sessões Code retomadas reabrem com transcript em branco | TUI/zerocode |
| [#7800](https://github.com/zeroclaw-labs/zeroclaw/issues/7800) | Keybindings enganosos ou inacessíveis, especialmente no macOS | TUI/zerocode |
| [#7795](https://github.com/zeroclaw-labs/zeroclaw/issues/7795) | `static_voice_peers` em cache na channel handle — violação latente de SSOT | Channel:Telegram |
| [#6407](https://github.com/zeroclaw-labs/zeroclaw/issues/6407) | Catálogos i18n gerados traduzem literais de código | Docs/i18n |

### Análise de estabilidade

**Alerta vermelho** para 6 issues S1 simultâneas. A regressão de Slack/Discord (#7787) é particularmente crítica por afetar binários oficiais de release. O cenário de testes Windows (#7462) expõe uma lacuna grave de CI — 74 testes falham rotineiramente sem detecção. Os times devem priorizar a correção do CI multi-plataforma e a regression do v0.8.0 antes de qualquer novo release.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features propostas (últimas 24h)

| # | Feature | Complexidade | Sinais de roadmap |
|---|---|---|---|
| [#7794](https://github.com/zeroclaw-labs/zeroclaw/issues/7794) | **Per-agent opt-in Dream Mode** + `/dream` command + Dreams view no gateway | Alta | Expansão de memória agent-scoped |
| [#7749](https://github.com/zeroclaw-labs/zeroclaw/issues/7749) | **Per-agent `prompt_injection_mode` override** | Média | Suporte a agentes "full" e "compact" coexistindo |
| [#7776](https://github.com/zeroclaw-labs/zeroclaw/issues/7776) | **Suporte free-form `ask_user` sobre WebSocket** | Média | Paridade gateway web |
| [#7757](https://github.com/zeroclaw-labs/zeroclaw/issues/7757) | **Gateway Skills page** deve refletir workspace/open-skills/plugin skills | Média | Completude do dashboard |
| [#7790](https://github.com/zeroclaw-labs/zeroclaw/issues/7790) | **Trazer surfaces do dashboard web para zerocode** | Média | Paridade TUI/web para operadores |
| [#7762](https://github.com/zeroclaw-labs/zeroclaw/issues/7762) | **Documentação de Cron** + возможность rodar cronjobs com modelo específico | Baixa | Usabilidade de cron |
| [#7801](https://github.com/zeroclaw-labs/zeroclaw/pull/7801) | **Sugerir porta disponível** em conflito de bind do gateway (PR) | Pequena | DX do CLI |

### Tracker de milestone v0.8.x

- **[#6970](https://github.com/zeroclaw-labs/zeroclaw/issues/6970)** — v0.8.1: queue de integração/canal/provider/tool
- **[#7314](https://github.com/zeroclaw-labs/zeroclaw/issues/7314)** — v0.8.2: programa de plugins WASM (WIT, host/dashboard infrastructure)
- **[#7685](https://github.com/zeroclaw-labs/zeroclaw/issues/7685)** — Cobertura de testes: follow-ups de 13 shards

### Sinais de direção estratégica

1. **Multi-agência e descoberta**: RFC #7218 (.well-known/agent-card.json) indica direção clara para arquiteturas multi-agente e interoperabilidade.
2. **Paridade de interfaces**: zerocode vs. gateway web é tema recorrente — a experiência terminal está sendo equalizada com o dashboard web.
3. **Segurança de cadeia de suprimentos**: RFC #7675 responde à pressão da indústria por SBOMs e proveniência.
4. **Canal Slack/Discord em regressão**: precisa ser consertado antes de v0.8.1.

---

## 7. Resumo de Feedback dos Usuários

### Dores reais reportadas

| Dor | Evidência | Severidade |
|---|---|---|
| **Impossível escrever config** | #7758: "It doesn't matter how good the code is if the documentation is crap." Syntax de config file é desconhecível. | S1 |
| **Slack quebrado no v0.8.0** | #7787: Downgrade para v0.7

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*