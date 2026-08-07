# Resumo diário do ecossistema de agentes de IA 2026-08-08

> Issues: 0 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-08-07 20:34 UTC

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

# Relatório Comparativo — Ecossistema de Agentes de IA Open Source

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **saúde fragmentada** nesta data. A maioria dos projetos encontra-se em fase de estabilização pré-release, com ZeroClaw, Hermes Agent e IronClaw liderando em volume de atividade (50 PRs/50 issues cada), enquanto NullClaw permanece completamente inativo. NanoBot destaca-se pelo foco em segurança e isolamento de sessões, Hermes Agent enfrenta crise de estabilidade no desktop app, e CoPaw recém-lançou beta.2 com regressões. Os temas transversais mais urgentes são: consumo descontrolado de tokens, bugs em canais de mensageria (especialmente WhatsApp), e necessidade de isolamento de sessões por razões de segurança e custo. Nenhum projeto publicou releases formais nas últimas 24h, indicando consolidação de código antes de lançamentos.

---

## 2. Comparação de Atividade

| Projeto | Issues Ativas | PRs Atualizados | PRs Merged | Releases | Saúde Geral |
|---------|:------------:|:---------------:|:----------:|:--------:|:-----------:|
| **NullClaw** | 0 | 0 | 0 | 0 | 🔴 Inativo |
| **NanoBot** | 10 | 21 | 11 | 0 | 🟢 Saudável |
| **Hermes Agent** | ~50 | ~50 | 2 | 0 | 🟡 Instável |
| **PicoClaw** | 4 | 14 | 2 | 0 | 🟡 Atenção |
| **IronClaw** | ~50 | ~50 | 20 | RC1 pendente | 🟢 Progresso |
| **CoPaw** | 19 | 49 | 22 | 1 (beta.2) | 🟡 Regressões |
| **ZeroClaw** | ~50 | ~50 | 5 | 0 | 🟢 Progresso |

**Análise**: IronClaw e CoPaw demonstram melhor throughput de PRs mergeados نسبیاً ao volume de atividade. Hermes Agent e CoPaw enfrentam crises de estabilidade com bugs P1/críticos abertos. NanoBot apresenta a relação mais equilibrada entre atividade e merges sem regressões críticas reportadas.

---

## 3. Posicionamento do Projeto Principal

### NanoBot — Referência de Estabilidade Relativa

| Dimensão | Avaliação | Evidência |
|----------|-----------|-----------|
| **Foco técnico** | Sandbox, multi-canal, isolamento | 4 PRs de segurança (#5279, #5283) + computer use (#4276) |
| **Velocidade** | Alta — 11 PRs mergeados em 24h | Throughput consistente sem degradação de qualidade aparente |
| **Maturidade de canal** | Telegram, WhatsApp, Matrix, Weixin | Bugs em WhatsApp (#5149) e Telegram (#5156) em aberto, mas addressed |
| **Segurança** | Diferencial claro | Per-session sandbox isolation em desenvolvimento ativo |
| **Comunidade** | Engajada — 10 comentários em #5266 | Issue de token consumption mobiliza discussão substantiva |

**Vantagem competitiva**: NanoBot é o único projeto com foco explícito em segurança de isolamento de sessões para canais não-WebUI. A combinação de computer use (#4276) + sandbox per-session (#5283) sugere direção para agentes desktop autônomos seguros — segmento ainda não coberto por concorrentes.

---

## 4. Focos Técnicos Compartilhados

### 4.1 Canal WhatsApp — Problema Transversal

| Projeto | Bug | Severidade | Status |
|---------|-----|:----------:|:------:|
| NanoBot | Audio sending quebrado | Alta | 5 comentários |
| PicoClaw | `client outdated (405)` — completamente não funcional | **Crítica** | PR #3320 pendente |

**Implicação**: Integração com WhatsApp via API oficial ou bibliotecasthird-party (whatsmeow) é frágil. Múltiplos projetos enfrentam problemas deversioning e protocolo simultaneamente.

### 4.2 Estabilidade de Sessões e Memória

| Projeto | Área | Issue/PR |
|---------|------|----------|
| Hermes Agent | Context compression → replay não-idempotente | #79278 (P1) |
| IronClaw | Memory não persiste entre conversas | #7185 → PR #7365 |
| NanoBot | Session isolation / workspace compartilhado | #5276, #5278, #5279 |
| ZeroClaw | ACP sessions: workspace vs CWD | #9536 |

**Implicação**: Gerência de memória de longo prazo é desafio arquitetural não resolvido. IronClaw e NanoBot investem diretamente; Hermes Agent e ZeroClaw mostram bugs derivados.

### 4.3 Consumo de Tokens e Custos

| Projeto | Manifestação | Severidade |
|---------|-------------|:----------:|
| **NanoBot** | "milhões de tokens em 2h" sem atividade | **Crítica** |
| **ZeroClaw** | Budget caps nunca disparam (Anthropic) | **P1** |
| **IronClaw** | Token accounting usa reference string length | P2 |

**Implicação**: O controle de custos é problema crítico do ecossistema. Sem monitoramento granular, deployments de produção enfrentam facturas imprevisíveis. NanoBot e ZeroClaw lideram em evidenciação do problema.

### 4.4 Desktop App — Hermes Agent em Crise

| Aspecto | Hermes Agent | NanoBot | ZeroClaw |
|---------|:------------:|:-------:|:--------:|
| Freeze/Unresponsive | P1 — 13 comentários | Não reportado | Não reportado |
| Memory leak | P2 — SWAP 100% | Não reportado | Não reportado |
| Scroll/streaming | P2 | Correções recentes | Não reportado |
| Windows regression | P3 | Correções recentes | Não reportado |

---

## 5. Análise de Diferenciação

### 5.1 Arquitetura e Público-Alvo

| Projeto | Arquitetura Principal | Público-Alvo |
|---------|----------------------|--------------|
| **NanoBot** | Multi-canal (Telegram/WhatsApp/Matrix/Weixin), sandbox por sessão, computer use | Operadores de bots multi-plataforma, desenvolvedores de automação |
| **Hermes Agent** | Desktop app + CLI + remote gateway (Android TLS), delegation stack | Usuários finais desktop-centric, developers de agents |
| **IronClaw** | Extensions, inspector, memory lanes, Reborn tool disclosure | Equipes enterprise, administradores de sistemas |
| **ZeroClaw** | Rust-native, OTel observability, SOP engine, web research delegate | DevOps, engenheiros de automação de infraestrutura |
| **CoPaw** | Plugin ecosystem, MCP, ReMe memory, Chinese providers | Mercado chinês (WeChat, DingTalk, Volcengine), developers |
| **PicoClaw** | Lightweight, goroutine-based (Go), multi-canal | Hardware limitado,edge deployments |

### 5.2 Estratégia de Recursos

| Projeto | Feature Estratégica | Estágio |
|---------|-------------------|---------|
| **NanoBot** | Computer use (screenshot + browser automation) | PR #4276 — 59 dias em revisão |
| **Hermes Agent** | Hermes Remote Host Gateway (TLS + Android) | PR #81315 — feature completa |
| **ZeroClaw** | Web research delegate + unificação de tools | PR #9833 — desenvolvimento ativo |
| **IronClaw** | Progressive tool disclosure (Reborn) | Ativada por default via feature flag |
| **CoPaw** | ReMe memory enhancement | PR #6772 — revisão pendente |
| **PicoClaw** | Concurrency hardening | Issue #3308 — code review |

### 5.3 Posicionamento de Mercado

```
NanoBot:     ████████████░░░░ Multi-canal + segurança
Hermes:      ████████████████  Desktop + remote + delegation
IronClaw:    █████████████░░░  Enterprise + observabilidade
ZeroClaw:    ███████████░░░░░  DevOps + Rust + SOPs
CoPaw:       ████████░░░░░░░░  Plugins + MCP + China market
PicoClaw:    █████░░░░░░░░░░░  Edge + Go + lightweight
```

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração

| Projeto | PRs Merged/24h | Idade Média PRs Abertos | Priorização |
|---------|:--------------:|:----------------------:|-------------|
| **CoPaw** | 22 | ~5 dias | 🟢 Ágil — release semanal |
| **IronClaw** | 20 | ~7 dias | 🟢 Consistente |
| **NanoBot** | 11 | ~5 dias | 🟢 Equilibrado |
| **ZeroClaw** | 5 | ~10 dias | 🟡 RFC-heavy |
| **Hermes Agent** | 2 | ~15 dias | 🟡 Code review lento |
| **PicoClaw** | 2 | ~20 dias (stale) | 🟡 Review bottleneck |

### 6.2 Contribuições Externas

| Projeto | PRs First-Time | Presença | Observação |
|---------|:--------------:|----------|------------|
| **CoPaw** | 5 contributors | Alta | Comunidade receptiva |
| **NanoBot** | Não especificado | Média | Discussão ativa |
| **IronClaw** | Não especificado | Média | Processos formais (RC1) |
| **ZeroClaw** | Não especificado | Alta | RFCs com 9-13 comentários |

### 6.3 Qualidade vs. Velocidade

| Projeto | Trade-off | Risco |
|---------|-----------|-------|
| **NanoBot** | Velocidade sem regressões aparentes | Baixo |
| **CoPaw** | Velocidade com regressões em beta.2 | Moderado — hotfix necessário |
| **Hermes Agent** | Velocidade baixa com bugs P1 abertos | Alto — desktop app unusable |
| **ZeroClaw** | Velocidade baixa mas RFCs maduros | Baixo — design antes de código |

---

## 7. Sinais de Tendência

### 7.1 Segurança e Isolamento como Requisito Fundamental

O isolamento de sessões emerge como **diferenciador arquitetural** em múltiplos projetos:

- **NanoBot**: Per-session sandbox isolation (#5283)
- **ZeroClaw**: Sandbox escape vectors (#9827), forbidden_paths hardening (#9815)
- **IronClaw**: Docker/Railway sandbox profiles (#7214)
- **Hermes Agent**: Security advisories via `uv audit` (#79618)

**Tendência**: O mercado move-se de "agentes poderosos" para "agentes seguros por default". Isolamento de filesystem, network e contexto entre sessões será requisito table-stakes.

### 7.2 Multi-Canal como Modo Operacional

Seis de sete projetos suportam múltiplos canais de comunicação, com bugs recorrentes em WhatsApp e Telegram. A tendência é:

- **Maturidade**: IronClaw, NanoBot — estabilidade razoável
- **Imaturidade**: PicoClaw (WhatsApp quebrado), CoPaw (Telegram ACL reset)
- **Crescimento**: Suporte a canais descentralizados solicitado (SimpleX, Tox — PicoClaw #3093)

### 7.3 Observabilidade e Custos

- **Token accounting** é problema crítico transversal (NanoBot, ZeroClaw, IronClaw)
- **OpenTelemetry** adoption em ZeroClaw (RFC #8933) e IronClaw (Inspector stats)
- **Tendência**: Deployments de produção exigem tracing, budgeting e audit trails

### 7.4 Computer Use como Próxima Fronteira

| Projeto | Feature | Estágio |
|---------|---------|---------|
| NanoBot | Screenshot + browser automation + keyboard/mouse | PR #4276 (59 dias) |
| ZeroClaw | Web research delegate + scraping hardening | PR #9833, #9831 |
| IronClaw | WASM tools via Nostr host functions | PR #7184 |

**Tendência**: Computer use é consenso estratégico, mas implementação madura ainda não existe. ZeroClaw avança com abordagem de delegação (sub-agente de busca), NanoBot com API nativa de automação.

### 7.5 Mercado Chinês em Expansão

| Projeto | Providers/Integrações |
|---------|---------------------|
| CoPaw | WeChat, DingTalk, Volcengine, Xiaomi MiMo, DashScope TTS |
| NanoBot | Weixin (protocol 2.4.6) |
| PicoClaw | WeChat audio |

**Tendência**: Ecossistema open source amplia suporte a infraestrutura chinesa, impulsionado por demanda de mercado e censura de APIs ocidentais.

### 7.6 CLI-first vs. Desktop-first

| Abordagem | Projetos | Implicação |
|-----------|----------|------------|
| **CLI-first** | ZeroClaw, IronClaw, PicoClaw | Servidores, automação,edge |
| **Desktop-first** | Hermes Agent | Usuário final desktop-centric |
| **Hybrid** | NanoBot, CoPaw | WebUI + canais + desktop optional |

**Tendência**: Divergência de mercado clara. CLI-first cresce emDevOps/infraestrutura; desktop-first em usabilidade final.

---

## Recomendações para Decisores

1. **Para deployments de produção**: Priorizar NanoBot ou IronClaw — melhor estabilidade de canal e foco em segurança
2. **Para automação de infraestrutura**: ZeroClaw — Rust-native, OTel, SOP engine maduro
3. **Para mercado chinês**: CoPaw — providers nativos e suporte a WeChat/DingTalk
4. **Evitar**: Hermes Agent (desktop app em crise), PicoClaw (WhatsApp quebrado, stale PRs)
5. **Monitorar**: NanoBot computer use (#4276) e ZeroClaw web research delegate (#9833) — representammudança de paradigma em automação de agentes

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-08-08

## 1. Panorama do Dia

O projeto NanoBot apresenta **alta atividade de desenvolvimento** na data de hoje, com 12 issues e 21 pull requests atualizados nas últimas 24 horas. A equipe demonstra foco significativo em **estabilidade de canais** (Telegram, Weixin, Matrix, WhatsApp) e **segurança/sandboxing de sessões**. Não houve novas releases publicadas, indicando que a base de código está em intenso trabalho de preparação para um próximo lançamento. A comunidade está ativamente engajada, com discussions substanciais sobre consumo de tokens e isolamento de sessões.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24 horas.**

O projeto nãoemitiu novas versões desde o período analisado. Isso sugere que a equipe está em fase de consolidação de múltiplas correções e features antes de um próximo tagged release.

---

## 3. Progresso do Projeto

### PRs Fechados/Merged Hoje (11 total)

| PR | Título | Impacto |
|---|---|---|
| [#5287](https://github.com/HKUDS/nanobot/pull/5287) | preserve global progress defaults | Padroniza comportamento de `sendProgress`/`sendToolHints` entre canais; adiciona teste de regressão para Mattermost |
| [#5268](https://github.com/HKUDS/nanobot/pull/5268) | stage out-of-media-root attachments | Corrige perda silenciosa de `media_urls` em refresh da WebUI para arquivos fora do media root |
| [#5263](https://github.com/HKUDS/nanobot/pull/5263) | harden Weixin protocol | Alinha com protocolo 2.4.6, melhora retry-aware HTTP handling e lifecycle notifications |
| [#5285](https://github.com/HKUDS/nanobot/pull/5285) | preserve newly created topic route | Fecha gap de rota/lista durante criação otimista de tópico na WebUI |
| [#5284](https://github.com/HKUDS/nanobot/pull/5284) | remove legacy session messages route | Limpa rota obsoleta `/api/sessions/{key}/messages` — refatoração de simplificação |
| [#5282](https://github.com/HKUDS/nanobot/pull/5282) | modernize dependency recovery | Atualiza documentação de instalação para comandos canônicos `nanobot plugins enable` |
| [#5281](https://github.com/HKUDS/nanobot/pull/5281) | keep activity text crisp | Melhora UX visual com gradients pointer-transparent no scrollport da WebUI |
| [#5277](https://github.com/HKUDS/nanobot/pull/5277) | expand model preset editor inline | Melhora ergonomia do editor de presets de modelo na interface |
| [#5280](https://github.com/HKUDS/nanobot/pull/5280) | archive short idle sessions for Dream | Garante que sessões curtas sejam visíveis para o sistema Dream |
| [#5272](https://github.com/HKUDS/nanobot/pull/5272) | preserve proactive channel delivery | **Correção de regressão crítica**: mantém notificações proativas durante trim de sessão |
| [#5231](https://github.com/HKUDS/nanobot/pull/5231) | archive idle sessions for Dream | Input para Dream a partir de sessões que anteriormente ficavam invisíveis |

**Destaque**: A quantidade de PRs de bugfix (p2) fechados indica foco em **estabilidade pré-release**, especialmente nos canais de mensageria.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| Issue | Título | Comentários | Tema Central |
|---|---|---|---|
| [#5266](https://github.com/HKUDS/nanobot/issues/5266) | Logs about token consumption | 10 | **Custo/Faturamento** — Usuário reporta consumo de "milhões de tokens em 2 horas" sem atividade |
| [#5149](https://github.com/HKUDS/nanobot/issues/5149) | no audio on WhatsApp | 5 | **Canal WhatsApp quebrado** — receiving funciona, sending não |
| [#5198](https://github.com/HKUDS/nanobot/issues/5198) | Not possible to change models in session | 3 | **UX/Model Selection** — limitação de switching de modelo por sessão |

### Análise dos Temas

**🔴 Token Consumption (#5266)**: Este é o tema mais urgente da comunidade. O usuário `knoppix2` reportou consumo massivo de tokens sem atividade visível, pedindo logging granular para rastrear chamadas. Com 10 comentários, há discussão ativa sobre causas e soluções. **Isso pode indicar loops de inferência, histórico não truncado corretamente, ou chamadas redundantes de tools.**

**🔴 WhatsApp Audio (#5149)**: Bug funcional que afeta canal popular. O bot recebe mas não envia áudios — problema de encoding ou path de entrega.

**🟡 Model Switching (#5198)**: Limitação de usabilidade reportada por `whisperity` — o modelo não pode ser trocado por sessão sem reconfigurar toda a instância.

**🟡 Session Isolation (#5276, #5278, #5283, #5279)**: Tema recorrente de segurança. A comunidade demonstra preocupação com isolamento de sessões e workspaces. Dois PRs de segurança estão abertos ([#5279](https://github.com/HKUDS/nanobot/pull/5279), [#5283](https://github.com/HKUDS/nanobot/pull/5283)).

---

## 5. Bugs e Estabilidade

### Bugs Abertos (Prioridade Alta)

| Issue | Severidade | Descrição | Status |
|---|---|---|---|
| [#5266](https://github.com/HKUDS/nanobot/issues/5266) | **Crítica** | Consumo excessivo de tokens (milhões/2h) | Em discussão ativa (10 comments) |
| [#5149](https://github.com/HKUDS/nanobot/issues/5149) | **Alta** | WhatsApp não envia áudios | 5 comentários |
| [#5256](https://github.com/HKUDS/nanobot/issues/5256) | **Alta** | `/goal` produz dezenas de replies repetidas | 1 comentário |
| [#5198](https://github.com/HKUDS/nanobot/issues/5198) | **Média** | Impossível trocar modelo por sessão | 3 comentários |

### Bugs Fechados/Corrigidos

| Issue | PR Associado | Descrição |
|---|---|---|
| [#5264](https://github.com/HKUDS/nanobot/issues/5264) | [#5268](https://github.com/HKUDS/nanobot/pull/5268) | `media_urls` nunca retornado para arquivos fora do media root |
| [#5273](https://github.com/HKUDS/nanobot/issues/5273) | [#5272](https://github.com/HKUDS/nanobot/pull/5272) | Session retention dropava mensagens proativas |

### Bugs em PR Aberto

| PR | Prioridade | Descrição |
|---|---|---|
| [#5156](https://github.com/HKUDS/nanobot/pull/5156) | p2 | Telegram polling pode travar silenciosamente após network blips |
| [#5286](https://github.com/HKUDS/nanobot/pull/5286) | p2 | Matrix: isolar thread sessions corretamente |

**⚠️ Alerta**: O bug de token consumption (#5266) requer atenção imediata da equipe. Se confirmado, pode afetar drasticamente custos de infraestrutura dos usuários.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em Desenvolvimento (PRs Abertos)

| PR | Feature | Importância |
|---|---|---|
| [#4276](https://github.com/HKUDS/nanobot/pull/4276) | **Model-agnostic computer use** (screenshot + mouse/keyboard + browser automation) | Estratégica — expõe controle de desktop/browser como tools nativas |
| [#5288](https://github.com/HKUDS/nanobot/pull/5288) | **Agent Plugins com CLI Apps** | Integração: unifica plugin format entre skills manuais e catalog |
| [#5252](https://github.com/HKUDS/nanobot/pull/5252) | **Temporary Chat Mode** | WebUI: conversas não-persistentes sob demanda |
| [#5283](https://github.com/HKUDS/nanobot/pull/5283) | **Per-session sandbox isolation** | Segurança: filesystem sandbox por sessão para canais não-WebUI |
| [#5289](https://github.com/HKUDS/nanobot/issues/5289) | **Telegram sticker support** | Canal: suporte a stickers e reactions agent-initiated |

### Novas Issues de Feature

| Issue | Título | Escopo |
|---|---|---|
| [#5290](https://github.com/HKUDS/nanobot/issues/5290) | Deduplicate atomic JSONL write idiom | Refatoração — 3 cópias do mesmo padrão |
| [#5275](https://github.com/HKUDS/nanobot/issues/5275) | Matrix: dedicated context para threads (como Discord/Slack) | UX de threading no Matrix |
| [#5274](https://github.com/HKUDS/nanobot/issues/5274) | Matrix: usar reply feature para mensagens | UX de reply no Matrix |

**📊 Sinais de Roadmap**: A combinação de `computer_use` (#4276) + `per_session_sandbox` (#5283) sugere direção para **autonomous desktop agents** com segurança de isolamento. Temporary chat (#5252) indica foco em **experiência de usuário casual**.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Categoria | Descrição | Frequência |
|---|---|---|
| **💸 Custo Inesperado** | Token consumption massivo sem atividade | Crítica (1 usuário reportou "milhões de tokens") |
| **📱 Canal Quebrado** | WhatsApp não envia áudios; Telegram para de receber após network issues | Alta |
| **🔒 Isolamento Insuficiente** | Sessões compartilham workspace, histórico acessível ao agente | Múltiplos relatórios de segurança |
| **🎛️ Flexibilidade Limitada** | Não consegue trocar modelo por sessão; logs de consumo indisponíveis | UX |

### Cenários de Uso Observados

- **Multi-canal**: Usuários integrando WhatsApp, Telegram, Matrix, Weixin simultaneamente
- **Agents Autônomos**: Subagents rodando em background com transcripts que precisam persistir
- **Desktop Control**: Interesse em computer use para automação
- **Dream Integration**: Sessões curtas precisam ser visíveis ao sistema de memory

### Satisfação/Insatisfação

| Aspecto | Sentimento | Detalhamento |
|---|---|---|
| WebUI | ✅ Positivo | Múltiplas melhorias de UX merged (5268, 5281, 5285, 5277) |
| Estabilidade de Canais | ⚠️ Preocupado | Bugs ativos em WhatsApp e Telegram; regressões corrigidas |
| Documentação | ✅ Melhorando | PR #5282 atualizou guias de instalação |
| Segurança | ⚠️ Atenção | Múltiplas issues e PRs sobre isolamento de sessões |

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta/Em Espera

| Issue | Idade | Prioridade | Motivo |
|---|---|---|---|
| [#5149](https://github.com/HKUDS/nanobot/issues/5149) — WhatsApp audio | ~10 dias | **Alta** | Bug funcional, 5 comentários, ainda open |
| [#5198](https://github.com/HKUDS/nanobot/issues/5198) — Model switching | ~8 dias | **Média** | Feature request, 3 comentários |
| [#5256](https://github.com/HKUDS/nanobot/issues/5256) — /goal loop | ~3 dias | **Alta** | Bug de loop, 1 comentário |

### PRs Abertos há Mais Tempo

| PR | Idade Aproximada | Importância |
|---|---|---|
| [#4276](https://github.com/HKUDS/nanobot/pull/4276) — computer use | ~59 dias | Estratégica |
| [#5156](https://github.com/HKUDS/nanobot/pull/5156) — Telegram polling | ~10 dias | p2 |
| [#5252](https://github.com/HKUDS/nanobot/pull/5252) — temporary chat | ~3 dias | Feature |

### Recomendações de Priorização

1. **🔴 Imediato**: Investigar #5266 (token consumption) — impacto financeiro direto
2. **🟠 Curto prazo**: Corrigir #5149 (WhatsApp audio) e #5156 (Telegram polling)
3. **🟡 Médio prazo**: Revisar PRs de segurança #5279 e #5283 para merge
4. **🟢 Longo prazo**: Feature #4276 (computer use) precisa de code review técnico

---

## Métricas Resumidas do Dia

| Métrica | Valor |
|---|---|
| Issues abertas/ativas | 10 |
| Issues fechadas | 2 |
| PRs abertos | 10 |
| PRs fechados/merged | 11 |
| Novas releases | 0 |
| Maior discussão | #5266 (10 comentários) |
| PR mais estratégico | #4276 (computer use) |
| Tema recorrente | Isolamento de sessões/segurança |

---

*Relatório gerado automaticamente com base nos dados do GitHub para HKUDS/nanobot em 2026-08-08.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent
## NousResearch/hermes-agent — 2026-08-08

---

## 1. Panorama do Dia

O Hermes Agent manteve um nível de atividade intenso nas últimas 24 horas, com **50 issues e 50 PRs atualizados**, evidenciando alta cadência de desenvolvimento. Não houve lançamentos de novas versões. A comunidade reportou uma série de bugs críticos (P1-P2), especialmente relacionados ao desktop app e à estabilidade de sessões, enquanto múltiplas PRs de features avançadas — como o gateway para Hermes Remote e a stack de delegação — seguem em revisão ativa. O projeto demonstra vitalidade, porém com pressões claras sobre estabilidade.

---

## 2. Lançamentos

### Sem releases nas últimas 24h

Nenhuma nova versão foi publicada. O último release estável identificado é **v0.20.0 ("The Herald Release")**, lançado em 2026-08-03, cujo upgrade para alguns usuários trouxe um **memory leak** em `relay_runtime.pop()` que está sendo rastreado em [#78993](https://github.com/NousResearch/hermes-agent/issues/78993).

---

## 3. Progresso do Projeto

### PRs fechadas/merged nas últimas 24h

| # | PR | Autor | Tipo | Destaque |
|---|-----|-------|------|----------|
| [#81309](https://github.com/NousResearch/hermes-agent/pull/81309) | `feat: personalize chat browser tabs` | PMC1776 | feature | Prefix títulos com profile/agent name; favicon colorido por perfil |
| [#51276](https://github.com/NousResearch/hermes-agent/issues/51276) (issue closed) | GLM-5.x rate-limit 429 bug | A0-42 | bug | Resolvido ou encerrado sem ação |

### PRs abertas de maior destaque

| # | PR | Autor | Tipo | Área | Destaque |
|---|-----|-------|------|------|----------|
| [#81315](https://github.com/NousResearch/hermes-agent/pull/81315) | `feat(remote): host gateway for Hermes Remote` | mustbearnold | feature | remote | Host side do contrato HRA-2026-001 — conecta app Android via TLS |
| [#80122](https://github.com/NousResearch/hermes-agent/pull/80122) | `fix(agent): handle auxiliary stream stalls` | StanleyStetson | bug | agent | Corrige "Permanent Session Death" — stalls de keep-alive e turn ghosting |
| [#76230](https://github.com/NousResearch/hermes-agent/pull/76230) | `feat(delegation): surface ready dependencies` | Xipong | feature | delegation | Camada final de stack 3-PRs para dependências entre turns |
| [#76229](https://github.com/NousResearch/hermes-agent/pull/76229) | `feat(delegation): route ready children` | Xipong | feature | delegation | Segunda camada do stack de delegação |
| [#76228](https://github.com/NousResearch/hermes-agent/pull/76228) | `refactor(delegation): persist child-scoped delivery state` | Xipong | refactor | delegation | Fundação de durability para child delivery |
| [#81313](https://github.com/NousResearch/hermes-agent/pull/81313) | `fix(desktop): prune dead session references` | DavidMetcalfe | bug | desktop | Remove IDs órfãos de localStorage após purge de sessões |
| [#79618](https://github.com/NousResearch/hermes-agent/pull/79618) | `fix(sec): clear uv audit findings` | ethernet8023 | security | tools | Resolve 13 advisories do `uv audit` e fecha caminhos de regressão |
| [#81308](https://github.com/NousResearch/hermes-agent/pull/81308) | `feat: add Perplexity provider` | thomasjustesq-dev | feature | plugins | Provider sonar com reparo de tool-schema |
| [#81310](https://github.com/NousResearch/hermes-agent/pull/81310) | `fix(cli): skip wrapper-side MCP discovery` | m1k3s0 | perf | cli | Elimina 3 cópias de stdio MCP na inicialização do TUI |
| [#81304](https://github.com/NousResearch/hermes-agent/pull/81304) | `fix(gemini): accept video_url media parts` | Tirth21896 | bug | vision | Suporte a `video_url` no Gemini adapter |

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários + reações)

| # | Título | Comentários | 👍 | Severidade | Componente |
|---|--------|:-----------:|:--:|:----------:|------------|
| [#63047](https://github.com/NousResearch/hermes-agent/issues/63047) | Desktop app unresponsive após ~5 mensagens no macOS 27 beta | 13 | 0 | P1 | desktop |
| [#79278](https://github.com/NousResearch/hermes-agent/issues/79278) | Context compression drop — side effect completa, agente replays | 9 | 0 | P1 | agent, compression |
| [#79543](https://github.com/NousResearch/hermes-agent/issues/79543) | Writer primitives, attempt fencing, public parity (SL3-alpha) | 7 | 0 | P3 | cron |
| [#79383](https://github.com/NousResearch/hermes-agent/issues/79383) | Goal turn markers, charge ledger, fallbacks (SL5) | 6 | 0 | P3 | cli, cron |
| [#75801](https://github.com/NousResearch/hermes-agent/issues/75801) | OpenCode Luna: finish_reason omitido → 4 fake continuations + desktop strip | 6 | 0 | P2 | agent, tui, desktop |
| [#71941](https://github.com/NousResearch/hermes-agent/issues/71941) | Delegated child context persiste em terminal snapshots compartilhadas | 6 | 0 | P2 | agent, terminal |
| [#78993](https://github.com/NousResearch/hermes-agent/issues/78993) | Memory leak: relay_runtime.pop() TypeError → SWAP 100% | 4 | 0 | P2 | gateway |
| [#53329](https://github.com/NousResearch/hermes-agent/issues/53329) | Non-git folders: duplicate lanes com mesmo sessions | 4 | 0 | P2 | tui, desktop |
| [#41457](https://github.com/NousResearch/hermes-agent/issues/41457) | Shell hooks não registrados no desktop/ACP — pre_tool_call ignorado | 3 | 0 | P2 | tui, acp |
| [#51276](https://github.com/NousResearch/hermes-agent/issues/51276) | GLM-5.x 429 rate-limit: curl funciona, Hermes não | 3 | 3 | P2 | agent, provider/zai |

### Análise dos temas quentes

**Desktop App em Crise:** A issue [#63047](https://github.com/NousResearch/hermes-agent/issues/63047) lidera em comentários (13) e denota frustração significativa — o app fica completamente não responsivo após ~5 mensagens, incluindo Settings. É um bug de **P1** que afeta usabilidade básica.

**Context Compression Perigoso:** [#79278](https://github.com/NousResearch/hermes-agent/issues/79278) descreve um bug onde a compressão de contexto durante execução de tool chain pode fazer o agente replayar steps não-idempotentes — risco de segurança funcional. Também **P1**.

**Roadmap Decomposition:** As issues [#79543](https://github.com/NousResearch/hermes-agent/issues/79543) e [#79383](https://github.com/NousResearch/hermes-agent/issues/79383) revelam o planejamento interno via slices (SL3-alpha, SL5), indicando trabalho ativo em primitives de writer e sistema de charge/fallbacks.

**Streaming Bugs:** A combinação de bugs em [#75801](https://github.com/NousResearch/hermes-agent/issues/75801) e [#78486](https://github.com/NousResearch/hermes-agent/issues/78486) mostra problemas recorrentes com streaming SSE e scroll automático no desktop.

---

## 5. Bugs e Estabilidade

### Bugs P1 (Críticos)

| # | Título | Componente | Status | Link |
|---|--------|------------|--------|------|
| #63047 | Desktop unresponsive após ~5 mensagens (macOS beta) | desktop | OPEN | [Issue](https://github.com/NousResearch/hermes-agent/issues/63047) |
| #79278 | Context compression drop em tool chain — replay não-idempotente | agent, compression | OPEN | [Issue](https://github.com/NousResearch/hermes-agent/issues/79278) |

### Bugs P2 (Altos)

| # | Título | Componente | Status | Link |
|---|--------|------------|--------|------|
| #75801 | OpenCode Luna: finish_reason omitido → fake continuations | agent, tui, desktop | OPEN | [Issue](https://github.com/NousResearch/hermes-agent/issues/75801) |
| #71941 | Delegated child context persiste em terminal snapshots | agent, terminal, delegate | OPEN | [Issue](https://github.com/NousResearch/hermes-agent/issues/71941) |
| #78993 | Memory leak: relay_runtime.pop() TypeError → SWAP 100% | gateway | OPEN | [Issue](https://github.com/NousResearch/hermes-agent/issues/78993) |
| #72421 | Azure Foundry auxiliary calls falham com HTTP 401 | agent, cli, auth | OPEN | [Issue](https://github.com/NousResearch/hermes-agent/issues/72421) |
| #53329 | Non-git folders: duplicate lanes | tui, desktop | OPEN | [Issue](https://github.com/NousResearch/hermes-agent/issues/53329) |
| #70266 | Check for updates verifica remote container em vez do Desktop app | desktop | OPEN | [Issue](https://github.com/NousResearch/hermes-agent/issues/70266) |
| #78405 | Hermes envia max_tokens=65536 ignorando config → compression loop | agent, openai, compression | OPEN | [Issue](https://github.com/NousResearch/hermes-agent/issues/78405) |
| #78190 | Gmail MCP: auth funciona no CLI, gateway falha OAuthRegistrationError | tools, mcp, auth | OPEN | [Issue](https://github.com/NousResearch/hermes-agent/issues/78190) |
| #71254 | Conversation switch mantém workspace folder obsoleto | desktop, windows | CLOSED | [Issue](https://github.com/NousResearch/hermes-agent/issues/71254) |
| #81292 | background/PTY processes leak file descriptors após exit | tools, terminal | CLOSED | [Issue](https://github.com/NousResearch/hermes-agent/issues/81292) |

### Bugs P3 (Médios)

| # | Título | Componente | Status | Link |
|---|--------|------------|--------|------|
| #79026 | Wake word inoperante em macOS ARM64 (ambos engines) | tool/tts | OPEN | [Issue](https://github.com/NousResearch/hermes-agent/issues/79026) |
| #79001 | Desktop boot 404s para sessões deletadas — localStorage órfão | desktop, sessions | OPEN | [Issue](https://github.com/NousResearch/hermes-agent/issues/79001) |
| #78482 | Desktop UI falha: ImportError DEFAULT_INDICATOR_STYLE (v0.20.0, Windows) | desktop, windows | OPEN | [Issue](https://github.com/NousResearch/hermes-agent/issues/78482) |
| #78486 | Chat view salta para bloco histórico enquanto assistant responde | desktop, windows | OPEN | [Issue](https://github.com/NousResearch/hermes-agent/issues/78486) |
| #80439 | hermes.desktop usa Exec path errado — KDE taskbar pinning quebrado | desktop, linux | OPEN | [Issue](https://github.com/NousResearch/hermes-agent/issues/80439) |
| #81297 | kanban --idempotency-key dedup em tasks completadas | cron | OPEN | [Issue](https://github.com/NousResearch/hermes-agent/issues/81297) |
| #78545 | Voice hotkey ctrl+b conflita com sidebar toggle (Windows) | tts, desktop, windows | OPEN | [Issue](https://github.com/NousResearch/hermes-agent/issues/78545) |
| #70797 | Test fails on macOS: literal /tmp vs canonical exemption | tool/terminal, tests | OPEN | [Issue](https://github.com/NousResearch/hermes-agent/issues/70797) |
| #81262 | Desktop remote mode: file upload Permission denied | desktop, gateway | OPEN (dup) | [Issue](https://github.com/NousResearch/hermes-agent/issues/81262) |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features P3 em discussão

| # | Título | Componente | Link |
|---|--------|------------|------|
| #79543 | Writer primitives, attempt fencing, public parity (SL3-alpha decomposition) | cron | [Issue](https://github.com/NousResearch/hermes-agent/issues/79543) |
| #79383 | Goal turn markers, charge ledger, fallbacks (SL5 decomposition) | cli, cron | [Issue](https://github.com/NousResearch/hermes-agent/issues/79383) |
| #53347 | Allow context_length abaixo de 64K — warn ao invés de hard failure | agent | [Issue](https://github.com/NousResearch/hermes-agent/issues/53347) |
| #46855 | Discord inbound reactions como confirmação/input signals | gateway, discord | [Issue](https://github.com/NousResearch/hermes-agent/issues/46855) |

### Features implementadas em PR

- **Hermes Remote Host Gateway** ([#81315](https://github.com/NousResearch/hermes-agent/pull/81315)) — contrato HRA-2026-001, app Android + TLS
- **Perplexity Provider** ([#81308](https://github.com/NousResearch/hermes-agent/pull/81308)) — sonar family com tool-schema repair
- **Chat Browser Tabs Personalization** ([#81309](https://github.com/NousResearch/hermes-agent/pull/81309)) — prefix por profile, favicon colorido
- **Delegation Stack 3-PRs** ([#76230](https://github.com/NousResearch/hermes-agent/pull/76230), [#76229](https://github.com/NousResearch/hermes-agent/pull/76229), [#76228](https://github.com/NousResearch/hermes-agent/pull/76228)) — surface ready dependencies, routing, persistência
- **Desktop UX Polish** ([#81303](https://github.com/NousResearch/hermes-agent/pull/81303)) — settings, capabilities, composer
- **Model/Reasoning Picker CLI-only** ([#76480](https://github.com/NousResearch/hermes-agent/pull/76480)) — extração do picker compartilhado

### Sinais de roadmap via decomposition slices

O uso de labels como `hermes-decomposition-slice: SL3-alpha`, `SL5` sugere um roadmap formal com slices numerados, cobrindo:
- **SL3-alpha:** Writer primitives, attempt fencing
- **SL5:** Goal turn markers, charge ledger, fallbacks

---

## 7. Resumo de Feedback dos Usuários

### Dores reais identificadas

1. **Desktop App Instável (macOS/Windows):** Usuários relatam freeze completo ([#63047](https://github.com/NousResearch/hermes-agent/issues/63047)), scroll automático durante resposta ([#78486](https://github.com/NousResearch/hermes-agent/issues/78486)), e falha de UI no Windows ([#78482](https://github.com/NousResearch/hermes-agent/issues/78482)). A v0.20.0 parece ter introduzido regressões significativas na experiência desktop.

2. **Memory Leaks em Produção:** O upgrade para v0.20.0 causou `TypeError` em `relay_runtime.pop()`, levando SWAP a 100% e bloqueando o event loop ([#78993](https://github.com/NousResearch/hermes-agent/issues/78993)). Cenário crítico para deployments longos.

3. **Problemas com Provedores Alternativos:** GLM-

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw
## Data: 08 de agosto de 2026 | github.com/sipeed/picoclaw

---

## 1. Panorama do Dia

O ecossistema PicoClaw demonstra **atividade intensa e saudável** nas últimas 24h, com 14 PRs atualizados e 4 issues em movimento. A atividade está concentrada em **manutenção de dependências** (6 PRs do Dependabot), **correções críticas** como o bump do whatsmeow para restaurar funcionalidade WhatsApp e otimizações de performance no agente. O projeto segue com **zero releases** este período, sugerindo foco em estabilização do backlog. A predominância de PRs `stale` indica processos de triagem em curso, com a comunidade aguardando reviews dos mantenedores.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24h.**

| Indicador | Status |
|-----------|--------|
| Releases este período | 0 |
| Tags registradas | Nenhuma |
| Releases pendentes de publicação | Desconhecido |

O projeto não publicou versões desde o último período de observação. Isso é consistente com um padrão de **desenvolvimento incremental via PRs** sem releases formais frequentes.

---

## 3. Progresso do Projeto

### PRs Mergeados/Fechados Recentemente

| # | Título | Impacto | Link |
|---|--------|---------|------|
| **#3291** | Dependabot: bump `github/github/copilot-sdk/go` 0.2.0 → 1.0.8 | Atualização crítica do SDK GitHub Copilot com mudanças significativas entre versões | [PR #3291](https://github.com/sipeed/picoclaw/pull/3291) |
| **#3289** | Dependabot: bump `pion/rtp` 1.10.2 → 1.10.5 | Patch de estabilidade para biblioteca de transporte RTP | [PR #3289](https://github.com/sipeed/picoclaw/pull/3289) |

### Análise de Avanços

- **SDK Copilot atualizado para v1.0.8**: Migração significativa que potencialmente introduz APIs atualizadas para integração com GitHub Copilot
- **pion/rtp patch**: Correções de bugs/falhas de segurança na biblioteca de streaming de mídia

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| # | Título | Comentários | 👍 | Tipo | Link |
|---|--------|-------------|----|------|------|
| **#3093** | [Feature] I need SimpleX or Tox | 6 | 1 | Feature Request | [Issue #3093](https://github.com/sipeed/picoclaw/issues/3093) |
| **#3308** | [BUG] Concurrency hazards, goroutine leaks, and memory/speed optimizations | 1 | 0 | Code Review/Bug | [Issue #3308](https://github.com/sipeed/picoclaw/issues/3308) |

### Análise dos Temas Principais

**🔴 Issue #3093 - SimpleX/Tox Gateway (6 comentários, Closed)**
> "I need gateway SimpleX or Wire or Tox"

- **Demanda**: Usuário solicita suporte a protocolos de comunicação descentralizados/anônimos
- **Status**: Issue fechada (stale), indicando baixa prioridade ou outside scope atual
- **Sinal**: Comunidadetem interesse em diversificar canais de comunicação além dos tradicionais

**🟡 Issue #3308 - Code Review: Concurrency Hazards (1 comentário)**
> "Concurrency hazards, goroutine leaks, and memory/speed optimizations in SeaHorse, Channel Manager, and Hooks"

- **Impacto**: Code review detalhado identificando problemas de concorrência em componentes centrais
- **Áreas afetadas**: SeaHorse, Channel Manager, Hooks
- **Potencial**: Issue com alto impacto técnico se for aceita a proposta

---

## 5. Bugs e Estabilidade

### Issues de Bug Reportadas

| # | Severidade | Título | Link |
|---|------------|--------|------|
| **#3308** | 🔴 Alta | Concurrency hazards, goroutine leaks, memory/speed optimizations | [Issue #3308](https://github.com/sipeed/picoclaw/issues/3308) |

### PRs de Correção Pendentes

| # | Severidade | Título | Impacto | Link |
|---|------------|--------|---------|------|
| **#3320** | 🔴 Crítica | fix(deps): bump whatsmeow para corrigir WhatsApp "client outdated (405)" | Restaura funcionalidade WhatsApp bloqueada | [PR #3320](https://github.com/sipeed/picoclaw/pull/3320) |
| **#3319** | 🟡 Moderada | fix(tools): honor exec timeout and boolean run options | Corrige configuração de timeout e booleanos | [PR #3319](https://github.com/sipeed/picoclaw/pull/3319) |
| **#3279** | 🟡 Moderada | fix(seahorse): prevent tool-call format leakage into LLM summaries | Corrige vazamento de formato em resumos | [PR #3279](https://github.com/sipeed/picoclaw/pull/3279) |
| **#3321** | 🟡 Moderada | fix(agent): move dynamic context after history para prefix caching | Otimização de performance via cache | [PR #3321](https://github.com/sipeed/picoclaw/pull/3321) |
| **#3283** | 🟢 Baixa | fix(dingtalk): support picture/image message inbound | Suporte a imagens DingTalk | [PR #3283](https://github.com/sipeed/picoclaw/pull/3283) |

### Análise de Estabilidade

**⚠️ Prioridade Crítica**: O PR #3320 corrige o **WhatsApp completamente não funcional** (`client outdated - 405`). Este é um bug que afeta diretamente usuários do canal WhatsApp.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| # | Título | Área | Impacto | Link |
|---|--------|------|---------|------|
| **#3307** | Session list/switch command para Telegram | Channels | Alta - Usabilidade multi-sessão | [Issue #3307](https://github.com/sipeed/picoclaw/issues/3307) |
| **#3302** | Suporte OAuth 2.1 para MCP servers | Security/Integrations | Média - Padrão moderno | [Issue #3302](https://github.com/sipeed/picoclaw/issues/3302) |

### PRs de Feature em Desenvolvimento

| # | Título | Área | Estágio | Link |
|---|--------|------|---------|------|
| **#3200** | Configurable default fallback chain para models | Models/UX | Revisão pendente | [PR #3200](https://github.com/sipeed/picoclaw/pull/3200) |
| **#3270** | DashScope TTS provider + WeChat audio | Audio/WeChat | Revisão pendente | [PR #3270](https://github.com/sipeed/picoclaw/pull/3270) |
| **#3271** | Atualização de default model names para 2026-07 | Providers | Revisão pendente | [PR #3271](https://github.com/sipeed/picoclaw/pull/3271) |

### Sinais de Roadmap

1. **Gestão de sessões**: A issue #3307 evidencia lacuna entre Web UI (com suporte completo) e canais de chat (Telegram, etc.) para listar/switch/delete sessões
2. **OAuth 2.1**: Demanda por padrão moderno de autenticação para integrações MCP
3. **TTS multilíngue**: Adição do DashScope como provedor TTS, diversificando opções de síntese de voz

---

## 7. Resumo de Feedback dos Usuários

### Padrões de Dor Identificados

| Dor | Evidência | Impacto |
|-----|-----------|---------|
| **Canais incompletos** | Issue #3307: Telegram não tem gestão de sessões como Web UI | Usuários multi-conta prejudicados |
| **WhatsApp quebrado** | PR #3320: Cliente retornando 405 "client outdated" | Usuários WhatsApp não conseguem usar |
| **Memory/RAM** | Issue #3308: "goroutine leaks, and memory/speed optimizations" | Usuários de hardware limitado |
| **Timeout não funciona** | PR #3319: exec tool ignora timeout configurado por-run | Automação não confiável |

### Cenários de Uso Emergentes

1. **Assistente pessoal em hardware barato**: Issue #3093 sugere uso como gateway de comunicação pessoal
2. **Multi-canal**: Necessidade de experiência consistente entre Web UI e canais (Telegram, WhatsApp, DingTalk, WeChat)
3. **Fallback inteligente**: PR #3200 aborda necessidade de cadeia de modelos quando primário falha

### Satisfação Geral

**🔍 Indicadores mistos:**
- 🔴 WhatsApp offline (crítico)
- 🟡 Performance/memória em hardware limitado
- 🟢 Novos canais sendo adicionados (DingTalk, WeChat)
- 🟢 Diversificação de providers (DashScope TTS)

---

## 8. Backlog que Merece Atenção

### Issues Antigas sem Resposta

| # | Idade | Título | Status | Link |
|---|-------|--------|--------|------|
| **#3093** | ~59 dias | [Feature] I need SimpleX or Tox | Closed (stale) | [Issue #3093](https://github.com/sipeed/picoclaw/issues/3093) |

### PRs em Estado Stale (Revisão Pendente)

| # | Idade Est. | Título | Prioridade | Link |
|---|------------|--------|------------|------|
| **#3283** | ~17 dias | fix(dingtalk): support picture/image message inbound | 🟢 | [PR #3283](https://github.com/sipeed/picoclaw/pull/3283) |
| **#3279** | ~18 dias | fix(seahorse): prevent tool-call format leakage | 🟡 | [PR #3279](https://github.com/sipeed/picoclaw/pull/3279) |
| **#3271** | ~19 dias | chore(providers): update default model names | 🟡 | [PR #3271](https://github.com/sipeed/picoclaw/pull/3271) |
| **#3270** | ~19 dias | feat: add DashScope TTS provider | 🟡 | [PR #3270](https://github.com/sipeed/picoclaw/pull/3270) |
| **#3200** | ~38 dias | feat(models): add configurable default fallback chain | 🟡 | [PR #3200](https://github.com/sipeed/picoclaw/pull/3200) |

### Recomendações de Triagem

1. **#3320 (WhatsApp)**: Aprovação urgente - resolve bug crítico
2. **#3319 (exec timeout)**: Aprovação prioritária - corrige automação
3. **#3321 (prefix caching)**: Revisar por impacto em performance
4. **#3270 (DashScope TTS)**: Feature que amplia mercado Chinês

---

## Métricas Consolidada do Período

| Métrica | Valor |
|---------|-------|
| Issues ativas | 4 |
| PRs em revisão | 12 |
| PRs mergeados | 2 |
| Releases | 0 |
| Bugs críticos | 1 (WhatsApp) |
| Features em pipeline | 3+ |
| Issues stale | 4 |

---

*Relatório gerado automaticamente com base em dados do GitHub de 2026-08-08.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório de Projeto: IronClaw — 2026-08-08

---

## 1. Panorama do Dia

O projeto IronClaw manteve alta atividade em 2026-08-08, com **50 issues e 50 PRs atualizados** nas últimas 24 horas. Não houve lançamentos de novas versões, indicando foco em estabilização e refatoração interna. A plataforma apresenta um volume significativo de bugs QA (particularmente relacionados a canais como Telegram e Slack) e uma frente ativa de melhorias no Inspector, autenticação e memory persistence. Otime de ciclo de PRs está saudável, com **20 PRs merged/fechados**, sugerindo boa capacidade de throughput da equipe core.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O último ciclo de releases está no branch `release/1.1.0-rc.1`, com backports ativos:
- **PR #7366** — fix(auth): omit empty OAuth scope on RC1 (backport crítico de credenciais)
- **PR #7269** — backport SSE reload retry storm fix to RC1

> *Recomendação:* Aguardar consolidação do RC1 antes de cutover para produção.

---

## 3. Progresso do Projeto

### PRs Merged/Closed de Destaque

| PR | Descrição | Impacto |
|----|-----------|---------|
| [#7361](https://github.com/nearai/ironclaw/pull/7361) | **fix(extensions): chat "connect account" dead-end** — sinaliza para o modelo quando Slack/JGitHub já estão conectados, evitando loop de OAuth infinito | Alta — resolve UX crítico |
| [#7363](https://github.com/nearai/ironclaw/pull/7363) | **fix(telegram): accept /pair as pairing-code alias** — permite `/pair <CODE>` além de `/start <CODE>` | Baixa — compatibilidade retroativa |
| [#6958](https://github.com/nearai/ironclaw/pull/6958) | **feat(reborn): enable progressive tool disclosure by default** — feature flag `REBORN_TOOL_DISCLOSURE` ativa por padrão | Alta — mudança comportamental |
| [#7278](https://github.com/nearai/ironclaw/pull/7278) | **feat(inspector): add activity timeline and turn navigation** — timeline ordenada de eventos por turn | Alta — observabilidade |
| [#7366](https://github.com/nearai/ironclaw/pull/7366) | **fix(auth): omit empty OAuth scope on RC1** — evita parâmetro `scope` vazio em OAuth requests | Média — estabilidade RC1 |

### PRs Abertos com Alto Impacto (XL/L)

| PR | Descrição | Risco |
|----|-----------|-------|
| [#7214](https://github.com/nearai/ironclaw/pull/7214) | feat(sandbox): Docker e Railway user-sandbox profiles | Medium |
| [#6938](https://github.com/nearai/ironclaw/pull/6938) | fix(skills): model chooses skill, not keyword scorer | Low |
| [#7157](https://github.com/nearai/ironclaw/pull/7157) | feat: explicit channel delivery tool (two-lane model) | Low |
| [#7359](https://github.com/nearai/ironclaw/pull/7359) | fix(auth): credentials ownership + stop reporting unestablished causes | Low |
| [#7365](https://github.com/nearai/ironclaw/pull/7365) | feat(memory): MEMORY.md prompt lane + save guidance (#7185) | Low |
| [#7228](https://github.com/nearai/ironclaw/pull/7228) | feat(webui): audited admin thread scraping | Low |
| [#7184](https://github.com/nearai/ironclaw/pull/7184) | feat: Nostr host functions para WASM tools | Low |
| [#7291](https://github.com/nearai/ironclaw/pull/7291) | feat(inspector): statistics, navigation, localization | Low |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários)

1. **[#7340](https://github.com/nearai/ironclaw/issues/7340)** — "No way to reset model settings to factory defaults" *(6 comentários)* — `OPEN`
   - **Demanda:** Usuário não consegue restaurar configurações padrão de provider/model após alteração.
   - **Sinal:** Falta UI para reset de preferências locais.

2. **[#6989](https://github.com/nearai/ironclaw/issues/6989)** — "Token accounting: hybrid provider-usage + tail estimates" *(4 comentários)* — `OPEN`
   - **Demanda:** Bug de estimação de tokens usa comprimento da *reference string* em vez do conteúdo referenciado.
   - **Sinal:** Problema de precisão em billing e成本核算.

3. **[#7317](https://github.com/nearai/ironclaw/issues/7317)** — "Doc-Truth Verification Pipeline" *(2 comentários)* — `OPEN`
   - **Proposta:** Pipeline automatizado para detectar drift entre código e documentação.
   - **Sinal:** Divergência documentada entre manifestos de extensão e docs — `#origin_gate_matrix` virou mandatório sem update de docs.

4. **[#7185](https://github.com/nearai/ironclaw/issues/7185)** — "Memory not reliably recalled across conversations" *(2 comentários)* — `OPEN`
   - **Demanda:** Fatos declarados em conversa A não são lembrados em conversa B.
   - **Correção em curso:** PR #7365 endereça as três causas raiz.

### Análise de Temas

- **Hallucination do agente em estado de canais:** Múltiplos bugs QA — agente reporta conexões existentes como ausentes (#7344, #7247), automation como ativas quando não são (#7246), e contagens incorretas (#7345).
- **Latência em modelos rápidos (DeepSeek):** Issue #7368 documenta que modelos com resposta rápida expõem bugs de feedback que eram mascarados por latência — particularmente em Telegram (#6643, #6644, #7364).
- **Memory persistence:** Frustração recorrente — `MEMORY.md` lane em desenvolvimento (#7365).

---

## 5. Bugs e Estabilidade

### Por Severidade (P1 — bug_bash)

| Bug | Canal | Status | Descrição |
|-----|-------|--------|-----------|
| [#6476](https://github.com/nearai/ironclaw/issues/6476) | Slack | CLOSED | `extension_activate` encoding error → model hallucina admin requirements |
| [#7292](https://github.com/nearai/ironclaw/issues/7292) | Geral | OPEN | Ferramenta instalada não pode ser usada; runner heartbeat error |
| [#7298](https://github.com/nearai/ironclaw/issues/7298) | Railway | OPEN | "Request failed before it could be sent" + lost contact with runner |
| [#7295](https://github.com/nearai/ironclaw/issues/7295) | Slack | OPEN | Agent envia DM para usuário errado |
| [#7074](https://github.com/nearai/ironclaw/issues/7074) | Geral | OPEN | Multi-tool meeting research falha após calendar data |
| [#7247](https://github.com/nearai/ironclaw/issues/7247) | GitHub | OPEN | Agent falsely claims GitHub is already connected |
| [#7246](https://github.com/nearai/ironclaw/issues/7246) | Geral | OPEN | Agent hallucina automation status sem verificar |
| [#7344](https://github.com/nearai/ironclaw/issues/7344) | Slack | OPEN | Slack ACTIVE mas agent não reconhece |
| [#7294](https://github.com/nearai/ironclaw/issues/7294) | Telegram | OPEN | Agent lembra rotina de Telegram de outro scope/thread |
| [#7340](https://github.com/nearai/ironclaw/issues/7340) | UI | OPEN | Sem forma de resetar settings de modelo para defaults |
| [#6590](https://github.com/nearai/ironclaw/issues/6590) | Windows | OPEN | `serve` falha com workspace/skill root overlap no Windows |

### P2 — Bugs Secundários

| Bug | Descrição |
|-----|-----------|
| [#7345](https://github.com/nearai/ironclaw/issues/7345) | Agent reporta 61 automations; UI mostra 50 |
| [#7346](https://github.com/nearai/ironclaw/issues/7346) | Emoji shortcodes renderizados como texto plano |
| [#7347](https://github.com/nearai/ironclaw/issues/7347) | Assistant gera múltiplas respostas duplicadas |

### Infraestrutura / Runner

| Bug | Descrição | Status |
|-----|-----------|--------|
| [#5456](https://github.com/nearai/ironclaw/issues/5456) | Routine runs falham com runner lease expiration (90s agressivo demais) | OPEN |
| [#7368](https://github.com/nearai/ironclaw/issues/7368) | Channel turns levam minutos em modelos DeepSeek-class (latência) | OPEN |
| [#7369](https://github.com/nearai/ironclaw/issues/7369) | Sem como capturar traces quando agent recebe erro | OPEN |

### Resumo de Estabilidade
- **Telegram:** 3 bugs P1 closed/resolvidos (#6475, #6643, #6644), 1 latência residual (#7368)
- **Slack:** 2 bugs P1 ainda abertos (#6476 closed, #7295, #7344)
- **Runner:** Leasing e heartbeat instáveis (#7292, #7298)
- **Memory:** Recall cross-conversation quebrado — correção em #7365

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Propostas

1. **[#7317](https://github.com/nearai/ironclaw/issues/7317)** — **Doc-Truth Verification Pipeline** *(proposta, 2 comentários)*
   - Pipeline para detectar breaking changes sem docs correspondentes.
   - **Sinal de roadmap:** Processo formal de release pode exigir validação de docs.

2. **[#7362](https://github.com/nearai/ironclaw/issues/7362)** — **i18n para failure summaries**
   - Mover 65 strings hardcoded de `ironclaw_host_api` para per-surface i18n.
   - **Sinal:** Internacionalização entering backlog.

3. **[#7166](https://github.com/nearai/ironclaw/issues/7166)** — **Tool disclosure follow-up epic (v1.2.0)**
   - Progressive tool disclosure como default seguro para Reborn.
   - **Sinal:** v1.2.0 em planejamento.

### Features em Desenvolvimento

| Feature | PR | Escopo |
|---------|----|--------|
| Sandbox profiles (Docker/Railway) | [#7214](https://github.com/nearai/ironclaw/pull/7214) | devops |
| Channel delivery tool (two-lane) | [#7157](https://github.com/nearai/ironclaw/pull/7157) | messaging |
| Nostr host functions para WASM | [#7184](https://github.com/nearai/ironclaw/pull/7184) | extensibility |
| Memory persistence (MEMORY.md lane) | [#7365](https://github.com/nearai/ironclaw/pull/7365) | agent |
| Inspector stats + localization | [#7291](https://github.com/nearai/ironclaw/pull/7291) | observability |
| Model escolhe skills (não keyword scorer) | [#6938](https://github.com/nearai/ironclaw/pull/6938) | agent |
| Admin thread scraping | [#7228](https://github.com/nearai/ironclaw/pull/7228) | webui/admin |

### Sinais de Prioridade
- **Memory/recall:** Dor de usuário recorrente — multiple issues + dedicated PR
- **Observabilidade:** Inspector em forte desenvolvimento (timeline, stats, localization)
- **Autenticação/Credenciais:** Refatoração em curso (#7359) + OAuth fixes (#7366)
- **Slack integration:** Bugs persistentes de reconhecimento de estado

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Cenário | Issue | Sentimento |
|---------|-------|------------|
| Reset de configurações de modelo | [#7340](https://github.com/nearai/ironclaw/issues/7340) | Frustração — "não consigo voltar ao padrão" |
| Memory não persiste entre conversas | [#7185](https://github.com/nearai/ironclaw/issues/7185) | Frustração — informação perdida entre

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório de Projeto — CoPaw (QwenPaw)

**Data de referência:** 2026-08-08
**Fonte:** github.com/agentscope-ai/CoPaw

---

## 1. Panorama do Dia

O projeto CoPaw (QwenPaw) apresenta alta atividade de desenvolvimento em 2026-08-08, com 30 issues e 49 PRs atualizados nas últimas 24 horas. A release **v2.1.0-beta.2** foi publicada recentemente, sinalizando o ciclo de desenvolvimento ativo. A comunidade reporta uma variedade de bugs críticos — incluindo loops infinitos, regressões de UI e problemas de estabilidade em canais (Telegram, WeChat) — enquanto 22 PRs foram merged/fechados, demonstrando capacidade de processamento significativo. O volumen de issues abertas (19 ativas) e PRs em aberto (27) indica backlog gerenciável, mas com demanda por triagem em bugs de severidade alta.

---

## 2. Lançamentos

### 🎯 v2.1.0-beta.2

| Tipo | Descrição | PR | Status |
|------|-----------|-----|--------|
| Bug fix (CI) | Fence-aware section extraction em real-behavior-proof | [#6653](https://github.com/agentscope-ai/QwenPaw/pull/6653) | Merged |
| Bug fix (checkpoints) | Restaura auto snapshots no bootstrap do web workspace | [#6](https://github.com/agentscope-ai/QwenPaw/pull/6) | Merged |

**Notas:**
- Esta release não introduz breaking changes aparentes.
- A comunidade já reporta issues relacionadas ao beta.2: problemas de seleção de texto ([#6797](https://github.com/agentscope-ai/QwenPaw/issues/6797)), regressão em toggles de arquivos custom persona ([#6785](https://github.com/agentscope-ai/QwenPaw/issues/6785)), e impossibilidade de submeter nova sessão durante execução de tarefa ([#6796](https://github.com/agentscope-ai/QwenPaw/issues/6796)).
- **Recomendação:** Priorizar hotfix para regressões UI identificadas.

---

## 3. Progresso do Projeto

### PRs Importantes Merged/Fechados (22 total)

| PR | Título | Impacto | Link |
|----|--------|---------|------|
| #6623 | fix(acp): prevent final text loss when notifications race prompt | Consistência de mensagens ACP | [PR #6623](https://github.com/agentscope-ai/QwenPaw/pull/6623) |
| #6564 | fix(memory): flush pending turns before compression | Estabilidade de memória/Scroll | [PR #6564](https://github.com/agentscope-ai/QwenPaw/pull/6564) |
| #6615 | fix(config): handle corrupted agent config and invalid JSON | Robustez de configuração | [PR #6615](https://github.com/agentscope-ai/QwenPaw/pull/6615) |
| #6688 | fix(plugins): isolate bare absolute imports per plugin namespace | Instalação de plugins (qwenpaw-creator) | [PR #6688](https://github.com/agentscope-ai/QwenPaw/pull/6688) |
| #6617 | fix(providers): honor Retry-After cap on streaming retry | Rate limiting correto | [PR #6617](https://github.com/agentscope-ai/QwenPaw/pull/6617) |

**Destaque:** PRs de contributors first-time (lllyfff, mohitdebian, cocoakekeyu, An-idd, jesseedcp) representam 5 dos PRs closed/merged, indicando saúde na aquisição de novos contribuidores.

---

## 4. Temas Quentes da Comunidade

### Issues/PRs com Maior Engajamento

| Issue/PR | Título | Comentários | Tipo | Link |
|----------|--------|-------------|------|------|
| #6116 | Doom loop: agent repeatedly triggers same tool call | 8 | Bug (CLOSED) | [Issue #6116](https://github.com/agentscope-ai/QwenPaw/issues/6116) |
| #6782 | Docker version plugin/app market mostrando "maintenance" | 8 | Bug (OPEN) | [Issue #6782](https://github.com/agentscope-ai/QwenPaw/issues/6782) |
| #6732 | MCP tools falham periodicamente | 6 | Bug (OPEN) | [Issue #6732](https://github.com/agentscope-ai/QwenPaw/issues/6732) |
| #6490 | Feature: Add Volcengine Agent Plan + Xiaomi MiMo API | 4 | Feature (OPEN) | [Issue #6490](https://github.com/agentscope-ai/QwenPaw/issues/6490) |
| #6772 | feat(memory): enhance ReMe configuration | N/A | Feature (OPEN) | [PR #6772](https://github.com/agentscope-ai/QwenPaw/pull/6772) |
| #6809 | fix(providers): sanitize Chat Completions for strict providers | N/A | Bug fix (OPEN) | [PR #6809](https://github.com/agentscope-ai/QwenPaw/pull/6809) |

**Análise:**
- **Doom loops** continuam sendo problema recorrente ([#6116](https://github.com/agentscope-ai/QwenPaw/issues/6116), [#6773](https://github.com/agentscope-ai/QwenPaw/issues/6773)), sugerindo necessidade de revisão sistêmica dos gates de proteção.
- **MCP tools** apresentam problema de失效 periódica ([#6732](https://github.com/agentscope-ai/QwenPaw/issues/6732)) — impacto direto na experiência de uso.
- **Mercado de plugins/apps** em Docker ([#6782](https://github.com/agentscope-ai/QwenPaw/issues/6782)) é problema crítico para distribuição.

---

## 5. Bugs e Estabilidade

### Problemas Críticos Reportados

| Severidade | Count | Exemplos |
|------------|-------|----------|
| **Crítica** | 4 | Loop infinito ([#6768](https://github.com/agentscope-ai/QwenPaw/issues/6768)), Trojan false positive ([#6775](https://github.com/agentscope-ai/QwenPaw/issues/6775)), Malware Bytes em Desktop Windows |
| **Alta** | 6 | MCP tools失效 ([#6732](https://github.com/agentscope-ai/QwenPaw/issues/6732)), Telegram ACL reset ([#6786](https://github.com/agentscope-ai/QwenPaw/issues/6786)), Gemini API schema error ([#6812](https://github.com/agentscope-ai/QwenPaw/issues/6812)) |
| **Média** | 8 | Regressões UI desktop mode, Plugin Windows incompatibilidades ([#6807](https://github.com/agentscope-ai/QwenPaw/issues/6807), [#6806](https://github.com/agentscope-ai/QwenPaw/issues/6806)) |
| **Baixa** | 5 | Feature requests, questions |

### Regressões Identificadas na v2.1.0-beta.2

1. **Desktop mode UI:** Seleção e cópia de texto não funciona — [PR #6802](https://github.com/agentscope-ai/QwenPaw/pull/6802), [PR #6801](https://github.com/agentscope-ai/QwenPaw/pull/6801)
2. **Profile toggle regression:** Arquivos .md custom não podem ser togglados — [Issue #6785](https://github.com/agentscope-ai/QwenPaw/issues/6785)
3. **Sessão bloqueada durante execução:** Não é possível submeter nova mensagem durante task — [Issue #6796](https://github.com/agentscope-ai/QwenPaw/issues/6796)

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| Feature | Issue | Prioridade | Link |
|---------|-------|------------|------|
| Volcengine Agent Plan + Xiaomi MiMo API providers | #6490 | Média | [Issue #6490](https://github.com/agentscope-ai/QwenPaw/issues/6490) |
| Chrome tab lifetime configurável | #6770 | Baixa | [Issue #6770](https://github.com/agentscope-ai/QwenPaw/issues/6770) |
| Qwen3.8-max-preview model support | #6285 | Média | [Issue #6285](https://github.com/agentscope-ai/QwenPaw/issues/6285) |
| Email management assistant (mailbox) | #6800 | Experimental | [PR #6800](https://github.com/agentscope-ai/QwenPaw/pull/6800) |
| OneBot media handling (voice/image) | #6715 | Média | [PR #6715](https://github.com/agentscope-ai/QwenPaw/pull/6715) |
| WeChat Chinese approval replies (允许/拒绝) | #6804 | Baixa | [PR #6804](https://github.com/agentscope-ai/QwenPaw/pull/6804) |

**Sinais de roadmap:**
- Expansão de providers (Volcengine, Xiaomi, qwen3.8-max)
- Melhorias em memória/embedding (ReMe enhancement - [PR #6772](https://github.com/agentscope-ai/QwenPaw/pull/6772))
- Suporte a email management agent

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais

| Problema | Impacto | Evidência |
|----------|---------|-----------|
| **Estabilidade Docker** | Alto | Plugin/app market indisponível — [Issue #6782](https://github.com/agentscope-ai/QwenPaw/issues/6782) |
| **MCP Tools** | Alto | Falham periodicamente, requer restart do container — [Issue #6732](https://github.com/agentscope-ai/QwenPaw/issues/6732) |
| **Loop infinito** | Crítico | Agente fica "travado" por horas — [Issue #6768](https://github.com/agentscope-ai/QwenPaw/issues/6768) |
| **Windows Installation** | Médio | NSIS errors ao atualizar (arquivos bloqueados) — [Issue #6810](https://github.com/agentscope-ai/QwenPaw/issues/6810) |
| **Desktop mode UX** | Médio | Double-click para abrir, sem text selection — [Issue #6790](https://github.com/agentscope-ai/QwenPaw/issues/6790) |
| **Telegram ACL reset** | Alto | Usuários aprovados perdem acesso ao iniciar nova task — [Issue #6786](https://github.com/agentscope-ai/QwenPaw/issues/6786) |

### Cenários de Uso Reportados

- **Agente de longo prazo:** Usuário reporta freeze após 30-40 minutos de inatividade ([Issue #6780](https://github.com/agentscope-ai/QwenPaw/issues/6780))
- **Multi-step tasks complexas:** Importação de dados financeiros causa loop infinito ([Issue #6768](https://github.com/agentscope-ai/QwenPaw/issues/6768))
- **Desenvolvimento de plugins:** qwenpaw-creator não funciona em Windows ([Issue #6806](https://github.com/agentscope-ai/QwenPaw/issues/6806), [#6807](https://github.com/agentscope-ai/QwenPaw/issues/6807))

### Feedback Positivo

- Usuário reporta amor pelo projeto e agradecimento ([Issue #6775](https://github.com/agentscope-ai/QwenPaw/issues/6775))
- Contribuições first-time indicam comunidade receptiva (5 PRs mergeados de novos contribuidores)

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta/Em Espera

| Issue | Título | Criado | Dias em Aberto | Prioridade |
|-------|--------|--------|----------------|------------|
| #6285 | qwen3.8-max-preview support | 2026-07-20 | ~19 dias | Média |
| #6490 | Volcengine + Xiaomi providers | 2026-07-27 | ~12 dias | Média |
| #6732 | MCP tools failure | 2026-08-06 | ~2 dias | Alta |
| #6768 | Infinite loop after task | 2026-08-06 | ~2 dias | Crítica |
| #6770 | Chrome tab lifetime config | 2026-08-06 | ~2 dias | Baixa |
| #6782 | Docker market maintenance | 2026-08-07 | ~1 dia | Crítica |
| #6786 | Telegram ACL reset | 2026-08-07 | ~1 dia | Alta |

### PRs Aguardando Review

| PR | Título | Criado | Status |
|----|--------|--------|--------|
| #6772 | ReMe memory enhancement | 2026-08-06 | OPEN |
| #6715 | OneBot media handling | 2026-08-05 | Under Review |
| #6564 | Memory flush before compression | 2026-07-30 | Under Review |
| #6623 | ACP notification race condition | 2026-08-01 | Under Review |

---

## 📊 Métricas Resumidas do Dia

| Indicador | Valor |
|-----------|-------|
| Issues ativas | 19 |
| Issues fechadas | 11 |
| PRs abertos | 27 |
| PRs merged/fechados | 22 |
| Novas releases | 1 (v2.1.0-beta.2) |
| Taxa de resolução (issues) | ~37% (11/30) |
| Bugs críticos em aberto | 2-3 |
| Novas features merged | ~8 |

---

## 🎯 Recomendações para Próximas 48h

1. **Hot

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-08-08

---

## 1. Panorama do dia

O ecossistema ZeroClaw demonstra **atividade intensa e saudável** nesta data, com 50 issues e 50 PRs atualizados nas últimas 24 horas. A taxa de fechamento de issues permanece moderada (5 de 50), indicando que a equipe está processando volume significativo de contribuições sem comprometer a qualidade das revisões. O projeto não registrou novos lançamentos, mas o pipeline de PRs está robusto com 47 pull requests em aberto, muitos dos quais representam avanços substanciais em áreas críticas como segurança, tooling e arquitetura. A comunidade demonstra foco em estabilidade — bugs de alta severidade (P1) estão sendo priorizados simultaneamente com evoluções arquiteturais de longo prazo, como evidenciado pelas múltiplas RFCs ativas e pela atividade coordenada em stacks de PRs.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24 horas.**

O projeto encontra-se em período de intensivo desenvolvimento pré-release, conforme indicam:
- A quantidade de PRs em aberto com标签 `size:XL` (múltiplos exemplos)
- A presença de PRs de refatoração com breaking changes (`#9013` com `refactor(config)!:`)
- RFCs em estágios avançados de discussão e aceitação

Recomenda-se monitorar os PRs #9833, #9828 e #9831 para eventuais inclusões na próxima versão, dado seu escopo de feature e a atividade recente de seus autores.

---

## 3. Progresso do Projeto

### PRs Closed/Merged nas Últimas 24h

| PR | Descrição | Impacto |
|----|-----------|---------|
| [#9386](https://github.com/zeroclaw-labs/zeroclaw/issues/9386) | Bug: Gemini API key vaza em URLs de erro — **RESOLVIDO** | Segurança crítica: chaves de API não eram sanitizadas em erros de transport |
| [#6055](https://github.com/zeroclaw-labs/zeroclaw/issues/6055) | Feature: Slack hydrate thread context from conversations.replies | Melhoria de UX em threads do Slack |
| [#8933](https://github.com/zeroclaw-labs/zeroclaw/issues/8933) | RFC aceito: Cross-turn conversation correlation para OTel | Infraestrutura de observabilidade (v1.41.0 semantic conventions) |
| [#9246](https://github.com/zeroclaw-labs/zeroclaw/issues/9246) | RFC aceito: Preserve Todo tracker config during ZeroCode migration | Compatibilidade durante migração de ownership |
| [#7232](https://github.com/zeroclaw-labs/zeroclaw/issues/7232) | RFC aceito: Structured Observability Enhancement | Refatoração de eventos e correlação OTel |

### Avanços Registrados em PRs Abertos (commits recentes)

- **#9833** — Novo `web_research` delegate: agente principal delega busca a sub-agente com limite de 8 chamadas/180s
- **#9828** — Config authoring com validação de patches JSON e previews de política aprovados pelo operador
- **#9827** — Correção de 3 vetores de escape de sandbox shell (cwd drop, sandbox wrap, etc.)
- **#9831** — Hardening de scraping: 500 chars/resultado, 16.000 chars total, renderer unificado para 6 backends
- **#9819** — Validação pixel-level de imagens para prevenir requisições com imagens corrompidas
- **#9536** — ACP sessions agora usam workspace do agente, não CWD do daemon (corrige path traversal)

---

## 4. Temas Quentes da Comunidade

### Issues/PRs com Maior Engajamento (comentários)

| Item | Tipo | Comentários | Tema Central |
|------|------|-------------|--------------|
| [#8933](https://github.com/zeroclaw-labs/zeroclaw/issues/8933) | RFC (CLOSED) | 13 | Observabilidade OTel cross-turn correlation |
| [#9246](https://github.com/zeroclaw-labs/zeroclaw/issues/9246) | RFC (CLOSED) | 12 | Migração de ownership do Todo tracker |
| [#5937](https://github.com/zeroclaw-labs/zeroclaw/issues/5937) | Feature | 12 | Unificação da arquitetura de providers e reqwest |
| [#8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424) | RFC | 10 | Padrões de caminhos forbidden workspace-relative + .zeroclawignore |
| [#8043](https://github.com/zeroclaw-labs/zeroclaw/issues/8043) | RFC | 9 | Aposentadoria do crate standalone aardvark-sys |

### Análise de Demandas

**Observabilidade e Telemetria** dominam o discourse com 13+12 comentários em RFCs fechadas, indicando maturidade do processo de design para:
- Cross-turn conversation correlation (OpenTelemetry semantic conventions v1.41.0)
- Rich events com correlação de traces
- Exportação de `gen_ai.conversation.id`

**Arquitetura de Providers** (#5937) demonstra necessidade de consolidação — código duplicado em reqwest e parâmetros de construção de modelos geram manutenção fragmentada.

**Segurança de Caminhos** (#8424) reflete demanda por proteção granular: usuários precisam bloquear arquivos internos do workspace (`.env`, `rust-toolchain.toml`) que atualmente escapam do `forbidden_paths`.

---

## 5. Bugs e Estabilidade

### Por Severidade

#### P1 — Críticos (impacto de workflow bloqueado)

| Issue | Descrição | Link |
|-------|-----------|------|
| #9816 | Anthropic provider reporta $0.00 spend — budget caps nunca disparam | [#9816](https://github.com/zeroclaw-labs/zeroclaw/issues/9816) |
| #9815 | `forbidden_paths` inacessível para paths sob allowed_roots | [#9815](https://github.com/zeroclaw-labs/zeroclaw/issues/9815) |
| #9805 | SOP auto-mode de cron triggers nunca executa, fica 'running' para sempre | [#9805](https://github.com/zeroclaw-labs/zeroclaw/issues/9805) |
| #9770 | `cron update` descarta silenciosamente mudanças em jobs declarativos | [#9770](https://github.com/zeroclaw-labs/zeroclaw/issues/9770) |
| #9811 | `/health` reporta canal Telegram saudável mesmo com 404 há 19h | [#9811](https://github.com/zeroclaw-labs/zeroclaw/issues/9811) |
| #9563 | Telegram não popula typed media envelope — attachments vazios | [#9563](https://github.com/zeroclaw-labs/zeroclaw/issues/9563) |

#### P2 — Degradados (impacto moderado)

| Issue | Descrição | Link |
|-------|-----------|------|
| #9786 | SOP.toml malformado é silenciosamente descartado | [#9786](https://github.com/zeroclaw-labs/zeroclaw/issues/9786) |
| #9656 | Indicador de typing roda durante wait de aprovação (Telegram) | [#9656](https://github.com/zeroclaw-labs/zeroclaw/issues/9656) |
| #9783 | `finish_run` aceita reason e descarta | [#9783](https://github.com/zeroclaw-labs/zeroclaw/issues/9783) |
| #9784 | SOP multi-step marcado failed sem audit event | [#9784](https://github.com/zeroclaw-labs/zeroclaw/issues/9784) |
| #9775 | OpenRouter streaming dropa provider_extra | [#9775](https://github.com/zeroclaw-labs/zeroclaw/issues/9775) |
| #9708 | Logs de stdout/stderr sem bound de tamanho | [#9708](https://github.com/zeroclaw-labs/zeroclaw/issues/9708) |

#### P3 — Menores / Testes

| Issue | Descrição | Link |
|-------|-----------|------|
| #9834 | Test failures intermitentes por estado global de processo | [#9834](https://github.com/zeroclaw-labs/zeroclaw/issues/9834) |
| #9832 | zeroclaw-hardware não compila com `--features hardware` (aarch64) | [#9832](https://github.com/zeroclaw-labs/zeroclaw/issues/9832) |
| #9821 | Cron tool nunca invocada, fallback para shell "crontab" | [#9821](https://github.com/zeroclaw-labs/zeroclaw/issues/9821) |
| #9820 | Calculator tool emite pseudo-sintaxe `<TOOLCALL>` em vez de chamada real | [#9820](https://github.com/zeroclaw-labs/zeroclaw/issues/9820) |

### Padrões Identificados

- **SOP engine**: 4 bugs independentes一指 engine de SOPs é área instável
- **Canal Telegram**: 3 bugs independentes一指 problemas recorrentes de integração
- **Segurança de paths/config**: 2 bugs de bypass，指 necessidade de auditoria de `is_path_allowed` e `sanitize_api_error`

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Registradas (últimas 24-48h)

| Issue | Feature | Link | Prioridade |
|-------|---------|------|------------|
| #9810 | RFC: Load Agent Plugins 1.0 (vendor-neutral standard) | [#9810](https://github.com/zeroclaw-labs/zeroclaw/issues/9810) | P2 |
| #9824 | Simplificar web-tool surface para 3 verbos (web_fetch, web_research, http_request) | [#9824](https://github.com/zeroclaw-labs/zeroclaw/issues/9824) | — |
| #9346 | RFC: Unified package/capability/config/runtime-state catalog contract | [#9346](https://github.com/zeroclaw-labs/zeroclaw/issues/9346) | P2 |
| #9780 | Cron-triggered SOPs precisam de capacidade HTTP | [#9780](https://github.com/zeroclaw-labs/zeroclaw/issues/9780) | P2 |
| #7130 | Restore `forbid(unsafe_code)` workspace-wide com aardvark-sys como carve-out | [#7130](https://github.com/zeroclaw-labs/zeroclaw/issues/7130) | P2 |

### Sinais de Roadmap Inferidos

1. **Modularização de Web Tools**: A consolidação de 5 tools em 3 (#9824) e a criação de `web_research` delegate (#9833) indicam direção clara de simplificação de superfície
2. **Padronização de Plugins**: Suporte a Agent Plugins 1.0 (#9810) pode indicar estratégia de ecossistema de extensões
3. **Catalog Unificado**: #9346 busca resolver fragmentation entre integrations, built-ins e plugins — projeto arquitetural de peso
4. **Segurança por Defualt**: Restrições de `unsafe_code` e hardening de paths sugerem push por posture de segurança

### PRs de Feature em Andamento

- **#9355** — Multi-tab support para web chat
- **#9353** — Múltiplas conversas independentes por agente (web)
- **#8443** — Matrix single-message progress drafts
- **#9822** — Telegram tool progress em drafts parciais
- **#8965** — Declarative skill auto-activation com provider switch

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Categoria | Dor | Evidência |
|-----------|-----|-----------|
| **Observabilidade de custos** | Orçamento/budget caps não funcionam com Anthropic | #9816: "daily/monthly budget caps can never fire" |
| **Confiabilidade de SOPs** | Runs ficam "running" para sempre, sem causa registrada | #9805, #9783, #9784 |
| **Segurança de configs** | forbidden_paths não funciona para paths internos | #9815: "is_path_allowed returns true at allowed-root check and never reaches forbidden-path loop" |
| **UX de Validação** | Erros silenciosos em SOP.toml e cron updates | #9786, #9770 |
| **Detecção de Vazamentos** | Endereços blockchain públicos bloqueados por heurística de entropia | #9825: "payment URLs undeliverable" |
| **In

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*