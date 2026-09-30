# Resumo diário do ecossistema de agentes de IA 2026-10-01

> Issues: 0 | PRs: 1 | Projetos cobertos: 7 | Gerado em: 2026-09-30 23:23 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório do Projeto NullClaw — 2026-10-01

---

## 1. Panorama do Dia

O projeto NullClaw apresenta **baixa atividade nas últimas 24 horas**, com zero issues registradas e uma única pull request aberta. O esforço de desenvolvimento concentra-se atualmente na **expansão de provedores de IA**, especificamente a adição do Cheaper Inference como gateway compatível com a API da OpenAI. Não houve lançamentos, merges ou fechamentos de PRs neste período, indicando uma fase de revisão e preparação de código para futura integração.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24 horas.**

O projeto não publicou novas versões, correções ou atualizações de documentação neste período.

---

## 3. Progresso do Projeto

### PRs Abertas/Em Progresso

| # | Título | Autor | Status | Impacto |
|---|--------|-------|--------|---------|
| [#1016](https://github.com/nullclaw/nullclaw/pull/1016) | feat(providers): add Cheaper Inference as an OpenAI-compatible gateway | aiapienthusiast | OPEN | Adição de provedor multi-lab |

**Análise:** A PR #1016 propõe a integração do **Cheaper Inference**, um gateway LLM compatível com a API OpenAI que unifica acesso a modelos de múltiplos laboratórios sob uma única API key. O padrão de implementação segue a estrutura do provider Eden AI (#990), sugerindo uma estratégia de **extensibilidade modular** para provedores de inferência.

---

## 4. Temas Quentes da Comunidade

**Nenhuma issue ou PR com atividade significativa de comentários/reações registrada nas últimas 24 horas.**

A comunidade não demonstrou engajamento discursivo neste período (zero comentários, zero reações 👍).

---

## 5. Bugs e Estabilidade

**Nenhum bug ou regressão reportado nas últimas 24 horas.**

O projeto não registrou incidentes de estabilidade, crashes ou falhas críticas no período analisado.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Feature em Revisão

**[#1016](https://github.com/nullclaw/nullclaw/pull/1016)** — Cheaper Inference Provider

- **Resumo:** Adição de gateway unificado para múltiplos laboratórios de IA
- **Padrão:** Segue arquitetura do Eden AI provider (#990)
- **Benefício:** Permite acesso a diversos modelos através de endpoint OpenAI-compatible com credencial única
- **Status:** Em revisão (aberto em 2026-09-30)

**Sinal de Roadmap:** A adição de múltiplos provedores OpenAI-compatíveis indica uma estratégia de **evitar lock-in** e oferecer flexibilidade de escolha de modelos aos usuários.

---

## 7. Resumo de Feedback dos Usuários

**Não há feedback explícito registrado nas últimas 24 horas.**

Ausência de issues abertas, comentários ou reações impede análise de satisfação/dor imediata dos usuários.

---

## 8. Backlog que Merece Atenção

**Nenhum item pendente de resposta identificado no período de 24 horas.**

---

## Métricas Consolidada (Últimas 24h)

| Métrica | Valor |
|---------|-------|
| Issues abertas/ativas | 0 |
| Issues fechadas | 0 |
| PRs abertas | 1 |
| PRs merged/fechadas | 0 |
| Releases | 0 |
| Comentários totais | 0 |
| Reações totais | 0 |

---

## Conclusão

O projeto NullClaw encontra-se em **estado de baixa atividade** no período analisado, com foco em revisão de código para integração de novo provedor de IA. A saúde geral do repositório permanece estável, sem report de bugs ou instabilidades. Recomenda-se monitorar a evolução da PR #1016 e avaliar oportunidades de engajamento da comunidade.

---

*Relatório gerado em 2026-10-01 com base em dados do GitHub de [nullclaw/nullclaw](https://github.com/nullclaw/nullclaw).*

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo — Ecossistema de Agentes de IA Open Source

**Data de Referência:** 2026-10-01  
**Projetos Analisados:** NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw, ZeroClaw

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **duas velocidades distintas** em 2026-10-01. De um lado, projetos maduros como **NanoBot, Hermes Agent, CoPaw e ZeroClaw** operam em ritmo intenso de desenvolvimento, com 21 a 50+ atividades diárias, evidenciando adoção real em produção. Do outro, **NullClaw e IronClaw** mostram sinais de baixa atividade que merecem monitoramento. O tema dominante é **estabilidade de integrações externas** — Feishu, Telegram, Discord e WhatsApp geram edge cases recorrentes que consomem volume significativo de bug fixes. Simultaneamente, questões de **segurança em ambientes multi-tenant** emergem como preocupação crítica em ZeroClaw, com 6 vulnerabilidades S0 ativas relacionadas a isolamento de memória entre agentes.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | Releases | Saúde | Velocidade |
|---------|--------------|-----------|---------|-------|------------|
| **ZeroClaw** | 41 | 50 | 0 | 🔴 Crítica | Sprint intenso |
| **Hermes Agent** | 50 | 50 | 0 | 🟡 Ativa | Sprint intenso |
| **CoPaw** | 21 | 41 | 1 (beta) | 🟢 Estável | Alta |
| **NanoBot** | 12 fechadas | 32 | 0 | 🟢 Sólida | Muito alta |
| **PicoClaw** | 1 | 5 | 0 | 🟢 Saudável | Moderada |
| **NullClaw** | 0 | 1 | 0 | ⚪ Quieta | Baixa |
| **IronClaw** | 0 | 1 | 0 | ⚪ Quieta | Mínima |

**Observações:**
- **ZeroClaw e Hermes Agent** lideram em volume de atividade, mas por razões distintas — ZeroClaw por crise de segurança, Hermes por dívida técnica em integrações Discord.
- **NanoBot** destaca-se pela eficiência: 12 bugs fechados em 24h indica equipe pequena mas altamente produtiva.
- **CoPaw** é o único projeto com release formal, demonstrando disciplina de版本.

---

## 3. Posicionamento do Projeto Principal

Para fins de análise comparativa, consideraremos **NanoBot** como referência central por apresentar o melhor equilíbrio entre atividade, maturidade e saúde do projeto.

### Vantagens Competitivas do NanoBot

| Dimensão | NanoBot | Pares |
|----------|---------|-------|
| **Taxa de resolução** | 12 bugs/dia | Hermes (分散ado em 50+ issues) |
| **Qualidade de documento** | PRs com análise de causa raiz | ZeroClaw (PRs técnicos sem contexto) |
| **Maturidade de testes** | Remoção de 703 LOC redundantes mantendo cobertura | CoPaw (feature bloat em beta) |
| **Arquitetura de estado** | SQLite transactions para sessão | Hermes (session-state fragmentado) |

### Lacunas Identificadas

- **Ausência de release tags** — nenhum dos projetos exceto CoPaw publicou versões formais, dificultando adoção enterprise.
- **Documentação de breaking changes** — múltiplos projetos mencionam migrations sem changelog estruturado.
- **Suporte a mobile** — ZeroClaw e Hermes lideram com roadmap de apps nativos, NanoBot não demonstra interesse.

---

## 4. Focos Técnicos Compartilhados

A análise revela **cinco desafios técnicos recorrentes** que atravessam o ecossistema:

### 4.1 Integração com Canais Externos

| Canal | Projetos Afetados | Problemas |
|-------|-------------------|-----------|
| **Feishu/Lark** | NanoBot, CoPaw | Notificações internas expostas, in-place edit ausente |
| **Telegram** | NanoBot | Long polling silencioso, timeout de NAT |
| **Discord** | Hermes Agent | 4 P0 bugs simultâneos em prompt identity e session-state |
| **WhatsApp Web** | ZeroClaw | Images não baixadas, captions dropados |

**Implicação:** Canais corporativos dominam o uso em produção. A complexidade de manter integrações resilientes está subestimada na arquitetura inicial dos projetos.

### 4.2 Gerenciamento de Sessão e Estado

```
Problema recorrente:
- Sessões não agrupam por projeto (Hermes, ZeroClaw)
- Cancelamento de sessão propaga indevidamente (NanoBot)
- Memória de subagentes vaza entre sessões (ZeroClaw S0)
```

### 4.3 Resiliência de Providers LLM

| Problema | Projetos | Impacto |
|----------|----------|---------|
| Fallbacks ignorados em credits insuficientes | NanoBot, CoPaw | Degradação silenciosa |
| Modelos de reasoning retornam vazio | Hermes (Ollama) | Feature quebrada |
| Timeout de tiktoken online | NanoBot | Latência em ambientes isolados |

### 4.4 Segurança em Ambientes Windows/Corporativos

| Vulnerabilidade | Projeto | Severidade |
|-----------------|---------|------------|
| Sandbox contornável via Office COM | CoPaw | S0 |
| Path traversal em session files | NanoBot | S0 (fechado) |
| Isolamento de memória entre agentes | ZeroClaw | 6× S0 ativas |
| Delegados Independentes ignoram block_high_risk | ZeroClaw | S0 |

### 4.5 UX de Interface (Web/TUI)

```
Padrão identificado:
1. Mensagens "desaparecem" silenciosamente (PicoClaw, CoPaw)
2. Erros não são expostos ao usuário (PicoClaw #3412)
3. Indicadores de estado são genéricos ("thinking...")
4. Timestamps com shift DST (NanoBot, CoPaw)
```

---

## 5. Análise de Diferenciação

### 5.1 Arquitetura e Filosofia

| Projeto | Arquitetura | Público-Alvo | Diferenciação |
|---------|-------------|--------------|---------------|
| **ZeroClaw** | Rust, multi-tenant nativo | Enterprise com RBAC | Segurança e isolamento como feature #1 |
| **NanoBot** | Python, SQLite-first | Desenvolvedores individuais | Resiliência e cobertura de testes |
| **Hermes Agent** | Electron + backend | Usuários Desktop cross-platform | Experiência desktop premium |
| **CoPaw** | Modular com reranker | Teams com memórias vetoriais | Advisor Mode + memória RAG |
| **PicoClaw** | Python, steering-first | Usuários multi-canal | Foco em controle granular via queue |
| **NullClaw** | Providers flexíveis | Cost-conscious | Unificação de LLMs via gateway |
| **IronClaw** | Near AI ecosystem | Near protocol users | Integração com infraestrutura web3 |

### 5.2 Estratégia de Providers

```
Enterprise-Ready (multi-provider robusto):
├── CoPaw — DeepSeek, OpenAI, Anthropic com fallback
├── NanoBot — Multiple providers com resiliência
└── Hermes — Cookie jar para sticky routing

Especializados:
├── NullClaw — Gateway unificado (Cheaper Inference)
└── IronClaw — Near ecosystem native
```

### 5.3 Posicionamento de Segurança

```
ZeroClaw: Segurança como produto (vulnerabilidades S0 sendo priorizadas ativamente)
CoPaw: Segurança como feature (sandbox Windows, segurança de instruções)
NanoBot: Segurança como higiene (path traversal fechado rapidamente)
Hermes: Segurança reativa (Windows installer quebrado há meses)
```

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração

| Categoria | Projetos | Indicadores |
|-----------|----------|-------------|
| **Iteração rápida + qualidade** | NanoBot | 12 bugs/dia, -703 LOC de teste redundante |
| **Iteração rápida + dívida** | Hermes, ZeroClaw | Volume alto mas 4-6 P0/S0 simultâneos |
| **Iteração moderada + maturidade** | CoPaw, PicoClaw | Releases formais, UX polish |
| **Baixa iteração** | NullClaw, IronClaw | Estagnação ou manutenção mínima |

### 6.2 Qualidade de Processos

| Projeto | Issues Respondidas | PRs em Review | Releases Formais |
|---------|-------------------|---------------|------------------|
| **CoPaw** | ✅ Alta | ✅ Ativo | ✅ Beta tags |
| **NanoBot** | ✅ Alta | ✅ Ativo | ❌ Nenhuma |
| **ZeroClaw** | 🟡 RFC tracker | 🟡 12+ PRs sem review | ❌ Nenhuma |
| **Hermes** | 🟡 Fragmentado | 🟡 Many open | ❌ Nenhuma |
| **PicoClaw** | ✅ Rápido (1 dia) | 🟡 PR antigo (3 meses) | ❌ Nenhuma |

### 6.3 Engajamento de долгосрочных Issues

| Projeto | Issue Mais Antiga | Status | Prioridade |
|---------|-------------------|--------|------------|
| Hermes Agent | #512 (Doom Loop Detection) | Aberta desde 2026-03 | P2, aguardando decisão |
| Hermes Agent | #3626 (Telegram polling) | ~5 meses | P1 (fechada 2026-10) |
| ZeroClaw | #5982 (Per-sender RBAC) | ~5 meses | P2, aceita |
| NanoBot | Session management issues | Recorrente | p2 contínuo |

---

## 7. Sinais de Tendência

### 7.1 Tendências de Mercado Extraídas

**1. Multi-Tenancy e RBAC como Requisito Enterprise**

> ZeroClaw: "Per-sender RBAC for multi-tenant agent deployments" (10+ comentários)  
> ZeroClaw: 6 vulnerabilidades S0 todas relacionadas a isolamento entre agentes

**Interpretação:** O mercado está evoluindo de agentes individuais para plataformas compartilhadas. Isolamento de memória, sessão e permissões deixa de ser nice-to-have.

**2. Mobile First-Party como Próxima Fronteira**

> Hermes Agent: "Native Android & iOS apps — two-way agent on phone"  
> ZeroClaw: PR #10205 "add native tools and standalone app" (Android)

**Interpretação:** A batalha por distribuição de agente está se movendo para o bolso do usuário. Desktop cede espaço para apps nativos com localização e aprovações por voz.

**3. RAG e Memória Vetorial como Padrão**

> ZeroClaw: RFC "Knowledge corpus — RAG for the agent"  
> CoPaw: ReRanker configurável, embedding reindex  
> Hermes: Doom Loop Detection (memória de chamadas)

**Interpretação:** Agentes stateless estão se tornando exceção. Memória persistente e retrieval context-aware é o novo baseline.

**4. Steerability e Controle de Usuário**

> PicoClaw: Queue de mensagens com MaxQueueSize, visibility de estado  
> NanoBot: `/goal` command durante turns ativos  
> CoPaw: Background tasks com notificação de conclusão

**Interpretação:** O paradigma evolui de "chatbot que responde" para "agente programável". O usuário quer interromper, redirecionar e inspecionar em tempo real.

**5. Resiliência de Integrações Externas Subestimada**

> Todas as issues de Feishu, Telegram, Discord e WhatsApp  
> NanoBot: 12 bugs fechados em 24h, maioria em canais  
> Hermes: 4 P0 simultâneos em Discord

**Interpretação:** A complexidade de manter integrações com APIs proprietárias (que mudam frequentemente) é consistentemente subestimada. Projetos estão pagando a dívida técnica acumulada.

### 7.2 Recomendações para Decisores

| Decisor | Recomendação |
|---------|--------------|
| **Escolha de projeto para adoção** | NanoBot para resiliência; CoPaw para memória avançada; ZeroClaw para segurança enterprise (quando S0 resolvido) |
| **Evitar** | Hermes para Windows production; NullClaw/IronClaw sem investigação de atividade |
| **Monitorar** | ZeroClaw v0.9.0 (segurança), Hermes mobile apps, CoPaw Advisor Mode |

---

**Conclusão:** O ecossistema de agentes de IA open source está em fase de transição — de projetos experimentais para plataformas de produção. A diferença entre líderes e rezagadores não é mais velocidade de features, mas capacidade de resolver problemas de isolamento, resiliência de integrações e controle de estado em ambientes compartilhados. Os próximos 12 meses definirão quais projetos conquistam a confiança do mercado enterprise.

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-10-01

---

## 1. Panorama do dia

O NanoBot apresenta alta atividade de desenvolvimento no período analisado. Foram fechadas 12 issues e processadas 32 PRs (24 merged/fechadas, 8 abertas), indicando um ritmo de trabalho intenso com foco em estabilidade e refinamento da experiência do usuário. Não houve novos lançamentos hoje. A maioria das atividades concentra-se em correções de bugs regressivos, melhorias na interface TUI/WebUI e refatorações de session management. O estado geral do projeto reflete uma fase madura de polimento, com atenção especial a edge cases em canais (Feishu, Telegram) e的日子 (p1: optional tool parameters em Responses; p2: 9 PRs em diferentes módulos). A saúde do projeto permanece sólida, com manutenção ativa e resposta rápida a reportes de bugs.

---

## 2. Lançamentos

**Nenhum release foi publicado nas últimas 24 horas.** O último marco de release não foi informado nos dados disponíveis. Recomenda-se monitorar a aba [Releases](https://github.com/HKUDS/nanobot/releases) do repositório para eventuais publicações futuras.

---

## 3. Progresso do projeto

### PRs merged/fechadas hoje (seleção de maior impacto)

| # | Título | Prioridade | Impacto |
|---|--------|------------|---------|
| [#5938](https://github.com/HKUDS/nanobot/pull/5938) | fix(providers): preserve optional tool parameters in Responses requests | **p1** | Corrige regressão que descartava configurações `strict` em schemas de tools, potencialmente tornando filtros MCP opcionais em obrigatórios. Correcção crítica para integrações com Linear. |
| [#5943](https://github.com/HKUDS/nanobot/pull/5943) | refactor(session): centralize state ownership in SQLite | **p1** | Substitui JSONL por transações SQLite para persistência de sessão, isolando I/O do event loop e resolvendo race conditions em metadata updates. |
| [#5993](https://github.com/HKUDS/nanobot/pull/5993) | refactor(agent): scope tool resources to session cancellation | — | Garante que cancelamento de sessão propaga para tools ativos, subagentes, processos shell e timers pendentes, preservando outras sessões. |
| [#5985](https://github.com/HKUDS/nanobot/pull/5985) | feat(subagent): add session-owned task messaging and cancellation | p2 | Adiciona capacidade de enviar instruções follow-up a subagentes, inspecionar resultados retidos e cancelar tarefas filhas individualmente. |
| [#5907](https://github.com/HKUDS/nanobot/pull/5907) | test: consolidate redundant coverage across the test suite | p2 | Removeu **703 linhas net** de testes redundantes em 34 arquivos, mantendo todos os 171 cenários originais ao parametrizar 46 grupos de testes Python. |
| [#5950](https://github.com/HKUDS/nanobot/pull/5950) | fix(tui): restore saved session history from canonical events | — | Resolveu transcript vazio ao reabrir sessões salvas via websocket ou `/sessions`, causado por mudança anterior em `/webui-thread`. |
| [#5966](https://github.com/HKUDS/nanobot/pull/5966) | fix(tui): keep overflow picker choices reachable | p2 | Garante acessibilidade de todos os itens filtrados em menus de seleção, cobrindo wrap-around, seleção por mouse pós-scroll e filtragem. |
| [#5958](https://github.com/HKUDS/nanobot/pull/5958) | fix(tui): keep unknown terminal themes readable | — | Corrige texto praticamente invisível em terminais claros quando temas não reportam OSC 10/11, usando valores default até tema ser conhecido. |
| [#5981](https://github.com/HKUDS/nanobot/pull/5981) | fix(tui): accept goal requests during active turns | p2 | Permite comando `/goal <task>` durante turns ativos; Enter envia imediatamente, Tab espera. |
| [#5996](https://github.com/HKUDS/nanobot/pull/5996) | docs: streamline project instructions and engineering constraints | p2 | Substitui repetições em AGENTS.md por links a documentos específicos e adiciona diretrizes de análise de causa raiz. |
| [#5780](https://github.com/HKUDS/nanobot/pull/5780) | fix: stop sending context compaction notifications | p2 | Torna notificações de autocompaction invisíveis ao usuário, mantendo-as para `/compact` via linha de comando. |
| [#5989](https://github.com/HKUDS/nanobot/pull/5989) | fix(webui): stop repairing completed Markdown | p2 | Elimina underscore sintético残余 após respostas de assistente causado por `Remend`. |
| [#5991](https://github.com/HKUDS/nanobot/pull/5991) | fix(webui): keep completed turns terminal across late events | p2 | Impede que broadcasts tardios de ACK com `active_turn_id` antigo reabram indicadores de processamento na WebUI. |
| [#5988](https://github.com/HKUDS/nanobot/pull/5988) | fix(cli): avoid duplicate WebUI config announcement | p2 | Corrige impressão duplicada de `Using config:` ao executar `nanobot webui --config …`. |
| [#5990](https://github.com/HKUDS/nanobot/pull/5990) | fix(webui): preserve TeX formula boundaries in streaming Markdown | — | Resolve equações LaTeX sendo divididas por splits de Setext heading ou linhas em branco dentro de `\[...\]`. |

---

## 4. Temas quentes da comunidade

### Issues com maior engajamento (comentários)

| # | Título | Comentários | Tema central |
|---|--------|-------------|--------------|
| [#5903](https://github.com/HKUDS/nanobot/issues/5903) | Feishu: hidden session-checkpoint marker delivered to user after idle compaction | **5** | Canal Feishu expõe marcadores internos de checkpoint de sessão ao usuário, indicando falha no pipeline de filtragem de mensagens. |
| [#5987](https://github.com/HKUDS/nanobot/issues/5987) | Numbers-only cannot be recognized in TUI debug-mode | **4** | Input numérico puro não é processado corretamente no modo debug TUI, enquanto caracteres alfabéticos funcionam. |
| [#3626](https://github.com/HKUDS/nanobot/issues/3626) | Telegram long polling silently hangs | **4** | Conexão de long polling do Telegram pode travar silenciosamente porTimeouts de NAT/ firewall, deixando bot incapaz de receber updates. |
| [#5956](https://github.com/HKUDS/nanobot/issues/5956) | Feishu sem in-place edit; compaction notice deveria ser desativável | **3** | Notificações de compaction enviadas ao canal de origem indevidamente; deveria haver opção de desativar. |

**Análise:** As issues mais comentadas refletem problemas recorrentes em canais específicos (Feishu e Telegram), sugerindo que integrações com plataformas externas geram edge cases complexos. A questão do Telegram (#3626, em aberto há ~5 meses) demonstra um bug de resiliência de rede que pode passar despercebido. As issues #5903 e #5956 compartilham o tema Feishu, indicando necessidade de padronizar o tratamento de notificações internas vs. mensagens de usuário naquele canal.

---

## 5. Bugs e estabilidade

### Issues de bug fechadas hoje

| # | Severidade | Descrição | Status |
|---|------------|-----------|--------|
| [#5903](https://github.com/HKUDS/nanobot/issues/5903) | **bug** | Feishu: marcador interno `"Continue the active task..."` exposto ao usuário após idle compaction. | ✅ Fechada |
| [#5987](https://github.com/HKUDS/nanobot/issues/5987) | **bug** | Números isolados não reconhecidos no modo debug TUI. | ✅ Fechada |
| [#3626](https://github.com/HKUDS/nanobot/issues/3626) | **bug** | Long polling Telegram para de receber updates sem erro aparente. | ✅ Fechada |
| [#5956](https://github.com/HKUDS/nanobot/issues/5956) | **bug** | Canal Feishu não possui capacidade in-place edit; notificações de compaction indevidas. | ✅ Fechada |
| [#5564](https://github.com/HKUDS/nanobot/issues/5564) | **security/bug** | Possível path traversal em session file handling via session ID malicioso (`../../etc/passwd`). | ✅ Fechada |
| [#5967](https://github.com/HKUDS/nanobot/issues/5967) | **bug** | Fallback models ignorados quando provider retorna "insufficient credits" (HTTP 400). | ✅ Fechada |
| [#5348](https://github.com/HKUDS/nanobot/issues/5348) | **bug** | Testes de token usage falham em janela de ~5h/dia (timezone UTC vs. configurada). | ✅ Fechada |
| [#3718](https://github.com/HKUDS/nanobot/issues/3718) | **bug** | Streaming de reminders cron sem streamid no servidor. | ✅ Fechada |
| [#3106](https://github.com/HKUDS/nanobot/issues/3106) | **bug** | GPT com scheduled tasks não produz resposta final; modelos alternativos funcionam. | ✅ Fechada |
| [#2084](https://github.com/HKUDS/nanobot/issues/2084) | **risk** | Risco de instâncias duplicadas quando agente reinicia outro nanobot sem detectar daemon existente. | ✅ Fechada |

### PRs de bug aberto(s) relevante(s)

| # | Prioridade | Descrição |
|---|------------|-----------|
| [#5997](https://github.com/HKUDS/nanobot/pull/5997) | p2 | fix(linear): rejeitar atualizações de acesso de membros desatualizadas após reautorização. |
| [#5995](https://github.com/HKUDS/nanobot/pull/5995) | p2 | fix(agent): limpar estado de falha obsoleto ao retomar iterações do runner. |
| [#5994](https://github.com/HKUDS/nanobot/pull/5994) | p2 (security) | fix(agent): preservar registries de tools explicitamente vazios — `write_file` podia ser executado apesar de desabilitado. |

**Diagnóstico de saúde:** A proporção de bugs relacionados a canais externos (Feishu, Telegram) é elevada. O bug de path traversal (#5564), ainda que fechado, tinha implicações de segurança. Peculiaridade: a issue #3106 sobre GPT + scheduled tasks pode indicar dependência de comportamento específico de provider, merecendo investigação de fallback robusto.

---

## 6. Pedidos de features e sinais de roadmap

### PRs de feature aberta(s)

| # | Título | Descrição | Sinais de roadmap |
|---|--------|-----------|-------------------|
| [#5941](https://github.com/HKUDS/nanobot/pull/5941) | feat(webui): connect to existing remote nanobot instances | Permite descobrir instâncias remotas já em execução via WebUI local (NAN-157). | **Integração servidor-local** para uso em ambientes híbridos. |
| [#5985](https://github.com/HKUDS/nanobot/pull/5985) | feat(subagent): add session-owned task messaging and cancellation | messaging direcionado a subagentes e cancelamento granular de tarefas filhas. | **Arquitetura multiagente** com isolamento de escopo por sessão. |
| [#5992](https://github.com/HKUDS/nanobot/pull/5992) | fix(providers): support scoped proxies across all backends | Expõe configuração de proxy para todos os providers, incluindo native backends e OAuth. | **Suporte corporativo** a infraestruturas com proxies autenticados (NAN-212). |

### Issues com demanda de feature

| # | Título | Sinais |
|---|--------|--------|
| [#3647](https://github.com/HKUDS/nanobot/issues/3647) | Suggestion: Use local tokenizer for estimating prompt tokens | Tokenização offline para evitar latência de rede em ambientes isolados. |
| [#5421](https://github.com/HKUDS/nanobot/issues/5421) | Question: should idle compaction preserve provider state? | Discussão de design sobre contrato de estado em operações de compactação assíncronas. |
| [#5990](https://github.com/HKUDS/nanobot/pull/5990) | fix(webui): preserve TeX formula boundaries in streaming Markdown (NAN-204) | Tratamento robusto de LaTeX em streaming — indica suporte a conteúdo técnico/científico. |

**Tendência de roadmap:** As features abertas convergem para três eixos:
1. **Infraestrutura distribuída** — conexão com instâncias remotas, proxies scoped.
2. **Multiagência** — subagentes com ciclo de vida próprio e isolamento de sessão.
3. **Resiliência de plataforma** — correção abrangente de integrações com canais e providers.

---

## 7. Resumo de feedback dos usuários

### Dores reportadas (issues recentes)

| Dor | Frequência | Exemplos |
|------|------------|---------|
| **Notificações de compaction intrusivas** | Alta | Usuários do Feishu (#5956, #5780) relatam mensagens de contexto compressado poluindo conversas. |
| **Invisibilidade de erros de polling** | Media | Telegram (#3626) pode ficar mudo sem qualquer indicador — administrador só percebe pela falta de resposta. |
| **Tokens de rede bloqueantes** | Media | tiktoken online causa delays de segundos em ambientes sem internet (#3647). |
| **Fallbacks não funcionam como esperado** | Media | Modelos de fallback são silenciosamente ignorados em "insufficient credits" (#5967). |
| **Configurações de proxy ausentes** | Baixa | Providers custom e OAuth sem opção de proxy corporativo (#5992). |
| **Risco de instâncias duplicadas** | Baixa | Reinício de instância por agente pode lançar processo duplicado sem detectar daemon (#2084). |

### Cenários de uso inferidos

- **Uso corporativo via Feishu/Lark** — evidenciado por múltiplas issues de canal e necessidade de proxy.
- **Bots Telegram em produção** — com requisitos de resiliência de rede e long polling.
- **Ambientes acadêmicos/técnicos** — evidenciado por issues de LaTeX e tokenização local.
- **Multi-instância e multiagente** — risco de duplicação e necessidade de subagentes sinalizam arquiteturas complexas.

**Índice de satisfação estimado:** A atividade massiva de correções (12 bugs fechados em 24h) sugere responsividade rápida, porém a recorrência de issues em canais externos pode indicar tech debt em integrações. A ausência de novas releases pode refletir estratégia de acumular correções antes de tagged release.

---

## 8. Backlog que merece atenção

### Issues sem resposta significativa ou abertas há longo tempo

| # | Idade | Título | Urgência | Motivo |
|---|-------|--------|----------|--------|
| [#3626](https://github.com/HKUDS/nanobot/issues/3626) | **~5 meses** | Telegram long polling silently hangs | **Alta** | Bug de resiliência de rede que pode passar despercebido em produção. |
| [#2084](https://github.com/HKUDS/nanobot/issues/2084) | **~7 meses** | Duplicate instance for same config risk | **Alta** | Risco de comportamento incorreto de agentes em ambiente multi-instância. |
| [#364

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-10-01

---

## 1. Panorama do Dia

O Hermes Agent mantém alta atividade de desenvolvimento com **50 issues e 50 PRs atualizados nas últimas 24h**, indicando uma sprint intensa. O projeto não registrou novas releases, mas há 2 PRs merged/fechados e 47 issues abertas/atreladas ao backlog ativo. A distribuição de severidade mostra concentração em bugs P2 (estabilidade, session-state, compatibilidade) e múltiplas correções P0 no pipeline, especialmente relacionadas à plataforma Discord. A comunidade demonstra engajamento contínuo, com issues acumulando讨论 (até 10 comentários), mas nenhuma issue com reação significativa — indicando demanda latente mais do que consenso urgente.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto está em período de desenvolvimento ativo sem tags de versão publicadas recentemente. Atualizações de versão anteriores mantêm o release `v0.21.5+4972.g7239625` conforme identificado em issues de Desktop.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados

| # | PR | Descrição | Impacto |
|---|-----|-----------|---------|
| [#108511](https://github.com/NousResearch/hermes-agent/pull/108511) | fix(providers): opt-in shared cookie jar for cookie-based LB sticky routing | Implementa jar de cookies compartilhado para provedores OpenAI-compatíveis atrás de load balancers sticky (nginx, Cloudflare) | **Conectividade** — resolve roteamento inconsistente em configurações de produção |
| [#129666](https://github.com/NousResearch/hermes-agent/issues/129666) | [CLOSED] Dashboard chat sidebar: 250ms sidecar/events reconnect loop | Corrige loop de reconexão no sidebar do dashboard que causava badge flapping entre `connecting`↔`live` | **UX Dashboard** — estabiliza indicador de conexão em tempo real |

### PRs Abertos de Alto Impacto

| # | PR | Descrição | Severidade |
|---|-----|-----------|------------|
| [#127208](https://github.com/NousResearch/hermes-agent/pull/127208) | fix(gateway): preserve prompt pins across synthetic goal/heartbeat/resume turns | Preserva pinos de prompt em turns sintéticos (goal/heartbeat/resume) | **P0** |
| [#128788](https://github.com/NousResearch/hermes-agent/pull/128788) | fix(discord): slash, /thread and voice turns carry message turn's prompt inputs | Corrige inputs de prompt em interações Discord | **P0** |
| [#128797](https://github.com/NousResearch/hermes-agent/pull/128797) | fix(relay): a relayed Discord interaction carries the text lane's chat/user labels | Mantém identidade de prompt em mensagens relayadas do Discord | **P0** |
| [#129032](https://github.com/NousResearch/hermes-agent/pull/129032) | fix(relay): keep Discord interaction prompt identity current | Atualiza identidade de prompt em interações Discord | **P0** |
| [#94367](https://github.com/NousResearch/hermes-agent/pull/94367) | Workflows: author and run agent graphs (opt-in plugin) | Sistema de workflows com grafos de agentes, gates, aprovações humanas | **P3 (needs-decision)** |
| [#129739](https://github.com/NousResearch/hermes-agent/pull/129739) | Add Writ to optional-mcps catalog | Catálogo de MCPs opcionais com políticas de commit-time | **P3** |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários)

| # | Título | Comentários | Reações | Componente | Análise |
|---|--------|-------------|---------|------------|---------|
| [#125727](https://github.com/NousResearch/hermes-agent/issues/125727) | Automated Nous integration blocked | 10 | 0 | comp/agent | Conflitos de merge em 10+ arquivos bloqueiam integração Nous→Enterkey — risco de dependência externa |
| [#127313](https://github.com/NousResearch/hermes-agent/issues/127313) | pane-body zone menu hijacks transcript right-click | 8 | 0 | comp/desktop | Regressão do commit `ad2d4822e1` — menu de contexto substitui copy/paste |
| [#122160](https://github.com/NousResearch/hermes-agent/issues/122160) | hermes_cli import triggers hermes_bootstrap re-exec | 8 | 0 | comp/cli | Windows: processos externos disparam re-execução indevida do bootstrap |
| [#122133](https://github.com/NousResearch/hermes-agent/issues/122133) | hermes update fails: duplicate plugin 'hermes-plugin-hindsight' | 6 | 0 | comp/cli, comp/plugins | Clone parcial via timeout deixa entries stale no workspace uv |
| [#106960](https://github.com/NousResearch/hermes-agent/issues/106960) | systemd dashboard inventoried as manual serve after update | 6 | 0 | comp/cli, comp/dashboard | Serviço systemd mal classificado após update — missing gateway discovery |

### Análise de Demandas

- **Desktop é o componente mais demandado**: 4 das 6 issues mais comentadas são relacionadas à interface desktop, indicando que a experiência Electron/macOS é área crítica.
- **Integração e deployment**: Conflitos de merge e problemas de atualização revelam complexidade na manutenção de múltiplas plataformas e plugins.
- **Sessões e estado**: Várias issues indicam problemas de `session-state` e `cwd=NULL`, afetando agrupamento e persistência de conversas.

---

## 5. Bugs e Estabilidade

### Por Severidade

#### P0 — Crítico (4 issues/PRs)

| # | Título | Componente | Risco |
|---|--------|------------|-------|
| [#128788](https://github.com/NousResearch/hermes-agent/pull/128788) | Discord slash/thread/voice turns lose prompt inputs | platform/discord | message-delivery, caching |
| [#128797](https://github.com/NousResearch/hermes-agent/pull/128797) | Discord relay carries wrong chat/user labels | platform/discord | session-state, caching |
| [#129032](https://github.com/NousResearch/hermes-agent/pull/129032) | Discord interaction prompt identity stale | platform/discord | session-state, caching |
| [#127208](https://github.com/NousResearch/hermes-agent/pull/127208) | Gateway loses prompt pins on synthetic turns | comp/gateway | session-state, message-delivery |

#### P2 — Alto (23 issues/PRs)

| Categoria | Count | Exemplos |
|-----------|-------|----------|
| **Session-state** | 7 | [#129731](https://github.com/NousResearch/hermes-agent/issues/129731), [#129666](https://github.com/NousResearch/hermes-agent/issues/129666), [#108205](https://github.com/NousResearch/hermes-agent/issues/108205), [#129443](https://github.com/NousResearch/hermes-agent/issues/129443) |
| **Compatibilidade/Install** | 5 | [#122160](https://github.com/NousResearch/hermes-agent/issues/122160), [#122133](https://github.com/NousResearch/hermes-agent/issues/122133), [#55004](https://github.com/NousResearch/hermes-agent/issues/55004), [#118070](https://github.com/NousResearch/hermes-agent/issues/118070) |
| **Desktop** | 4 | [#127313](https://github.com/NousResearch/hermes-agent/issues/127313), [#89732](https://github.com/NousResearch/hermes-agent/issues/89732), [#129640](https://github.com/NousResearch/hermes-agent/issues/129640) |
| **Performance** | 2 | [#127861](https://github.com/NousResearch/hermes-agent/issues/127861) (19s file search), [#128220](https://github.com/NousResearch/hermes-agent/pull/128220) |
| **Providers** | 3 | [#46131](https://github.com/NousResearch/hermes-agent/issues/46131) (Ollama reasoning), [#35946](https://github.com/NousResearch/hermes-agent/issues/35946) (Copilot token), [#122016](https://github.com/NousResearch/hermes-agent/issues/122016) |

#### P3 — Médio (10 issues)

Predominância de feature requests e bugs não-críticos em CLI, plugins, e UI desktop.

### Regressões Identificadas

| Commit | Descrição | Impacto |
|--------|-----------|---------|
| `ad2d4822e1` | feat(desktop): right-click zone menu | Regressão no context menu do transcript — [#127313](https://github.com/NousResearch/hermes-agent/issues/127313) |
| `7239625a` (~Sep 24) | Backend v0.21.5+4972 | Protocol mismatch no packaged Desktop — [#118070](https://github.com/NousResearch/hermes-agent/issues/118070) |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Destacadas

| # | Título | Componente | Votes | Notas |
|---|--------|------------|-------|-------|
| [#512](https://github.com/NousResearch/hermes-agent/issues/512) | Doom Loop Detection — Pause on Repeated Identical Tool Calls | comp/agent | 👍 1 | Inspirado em Kilocode — detecção após 3 chamadas idênticas; aguardando decisão |
| [#77952](https://github.com/NousResearch/hermes-agent/issues/77952) | Restore last selected session when switching profiles | comp/desktop | — | Feature de persistência de sessão por perfil |
| [#126292](https://github.com/NousResearch/hermes-agent/issues/126292) | Native Android & iOS apps — two-way agent on phone | comp/desktop, comp/gateway | — | Apps móveis first-party com location, aprovações, voz |
| [#116452](https://github.com/NousResearch/hermes-agent/issues/116452) | Kanban: pre-dispatch and pre-create plugin hooks | comp/plugins | — | Hooks para dispatch guards em automação |
| [#70732](https://github.com/NousResearch/hermes-agent/issues/70732) | Runtime i18n: hardcoded platform-adapter strings | i18n | — | Italian translations prontas; strings hardcoded em plataformas |
| [#68702](https://github.com/NousResearch/hermes-agent/issues/68702) | Dark Icons for the Hermes App | comp/desktop | — | Ícone dark mode para macOS |
| [#49777](https://github.com/NousResearch/hermes-agent/issues/49777) | Favorite models on top ⭐ | comp/cli, comp/tui | 👍 1 | Favoritar modelos na lista |

### Sinais de Roadmap

1. **Mobile first-party**: Demanda clara por apps Android/iOS nativos — [#126292](https://github.com/NousResearch/hermes-agent/issues/126292) com 2 comentários
2. **Agent robustness**: Doom Loop Detection (#512) e save-state soft-warning (#54153) indicam foco em confiabilidade de agentes autônomos
3. **Workflow automation**: PR #94367 em desenvolvimento — grafos de agent graphs como plugin opt-in
4. **i18n expansion**: Suporte a italiano (#70732) e preparação para mais locales

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Dor | Cenário | Frequência | Issue |
|------|---------|------------|-------|
| **Instabilidade em Docker split-container** | Gateway reportado "stopped" mesmo rodando | Múltiplos | [#73796](https://github.com/NousResearch/hermes-agent/issues/73796), [#78803](https://github.com/NousResearch/hermes-agent/issues/78803) |
| **Sessões não agrupam por projeto** | cwd=NULL em novas sessões; pile-up no topo | Recorrente desde Sep 8 | [#108205](https://github.com/NousResearch/hermes-agent/issues/108205) |
| **Respostas duplicadas em narration→tool→answer** | Desktop macOS arm64 | Relatado em 2026-09-30 | [#129731](https://github.com/NousResearch/hermes-agent/issues/129731) |
| **Windows installer falha com policy OS error 4551** | Durante venv setup | Consistente | [#55004](https://github.com/NousResearch/hermes-agent/issues/55004) |
| **Hermes update deixa plugins duplicados** | Clone timeout parcial | Intermitente | [#122133](https://github.com/NousResearch/hermes-agent/issues/122133) |
| **Ollama reasoning models retornam vazio** | Modelos como deepseek-r1, qwen3.5-claude-4.6 | Comum | [#46131](https://github.com/NousResearch/hermes-agent/issues/46131) |

### Cenários de Uso Reportados

- **Multi-gateway com Desktop**: Usuários com remote gateway + local "This device" enfrentam HUD sendo bootado contra gateway errado — [#129640](https://github.com/NousResearch/hermes-agent/issues/129640)
- **Kanban dispatcher unattended**: Dois operadores rodando 9 dispatch guards como patch core — [#116452](https://github.com/NousResearch/hermes-agent/issues/116452)
- **Group chat com @everyone**: Perda intermitente de reply de um membro em chats de 2 bots — [#129443](https://github.com/NousResearch/hermes-agent/issues/129443)

### Satisfação/Insatisfação

- **Alta insatisfação** em: Docker deployment, Windows install, Desktop session management
- **Demanda latente** em: Mobile apps, i18n, favoritar modelos
- **Engajamento moderado** em: Bug reports detalhados com root cause

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Sem Atribuição

| # | Título | Criado | Atualizado | Comentários | Prioridade |
|---|--------|--------|------------|-------------|------------|
| [#46131](https://github.com/NousResearch/hermes-agent/issues/46131) | Ollama reasoning models empty content | 2026-06-14 | 2026-09-30 | 4 | P2 |
| [#73796](https://github.com/NousResearch/hermes-agent/issues/73796) | Docker dashboard reports gateway stopped | 2026-07-29 | 2026-09-30 | 3 | P2 |
| [#78803](https://github.com/NousResearch/hermes-agent/issues/78803) | Dashboard restart gateway fails | 2026-08-04 | 2026-09-30 | 1 | P2 |
| [#55004](https://github.com/NousResearch/hermes-agent/issues/55004) | Windows installer fails OS error 4551 | 2026-06-29 | 2026-09-30 | 2 | P2 |
| [#77952](https://github.com/NousResearch/hermes-agent/issues/77952) | Restore session on profile switch | 2026-08-03 | 2026-09-30 | 5 | P3 |
| [#126292](https://github.com/NousResearch/hermes-agent/issues/126292) | Native mobile apps | 2026-09-28 | 2026-09-30 | 2 | P3 |
| [#512](https://github.com/NousResearch/hermes-agent/issues/512) | Doom Loop Detection | 2026-03-06 | 2026-09-30 | 4 | P2 (needs-decision) |

### PRs Abertos Sem Revisão

| # | Título | Criado | Severidade | Aguardando |
|---|--------|--------|------------|------------|
| [#94367](https://github.com/NousResearch/hermes-agent/pull/94367) | Workflows plugin | 2026-08-25 | P3 | needs-decision |
| [#59885](https://github.com/NousResearch/hermes-agent/pull/59885) | Auto-join Discord voice channel | 2026-07-06 | P3 | — |
| [#116452](https://github.com/NousResearch/hermes-agent/issues/116452) | Kanban plugin hooks | 2026-09-19 | P3 | needs-decision |

### Recomendações

1. **Priorizar P0 Discord**: 4 PRs de P0 no pipeline Discord precisam de revisão urgente — impacto em message-delivery e session-state.
2. **Atribuir owner para issues Docker**: Problemas recorrentes em split-container deployment sem resposta clara.
3. **Decidir Doom Loop Detection (#512)**: Feature request antigo com design inspirado em Kilocode —需要一个 decisão de roadmap.
4. **Revisar Windows installer (#55004)**: Bloqueio de instalação consistente no Windows — impacta adoção.
5. **Avaliar mobile strategy (#126292)**: Demanda por apps first-party pode demandar recursos significativos.

---

*Relatório gerado automaticamente com base em dados do GitHub de 2026-09-30 23:59 UTC. Próxima atualização: 2026-10-02.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-10-01

---

## 1. Panorama do Dia

O ecossistema PicoClaw apresenta **alta atividade de desenvolvimento** nesta data, com 6 PRs atualizados nas últimas 24h contra apenas 1 issue reportada. O foco atual está nitidamente na **melhoria da experiência do usuário na Web UI**, com três PRs do mesmo autor (racso2609) abordando visibilidade de estados, feedback de fila e indicadores de processamento. O projeto demonstra maturidade operacional, com uma release anterior (#1349) sendo finalizada no período, indicando ritmo consistente de entregas. Não houve lançamentos formais no período, mas o pipeline de merge está ativo.

---

## 2. Lançamentos

**Nenhum novo lançamento registrado nas últimas 24h.**

O release mais recente visível no período foi o **PR #1349** (feat(qq): suporte a parsing e reply de anexos), fechado/merged em 2026-09-30. Este PR representa uma melhoria significativa no canal QQ com suporte a emoji structures e mensagens de voz, imagem, vídeo e arquivo — funcionalidades que provavelmente estarão na próxima tag de release.

> **Nota:** Para追踪 mudanças de breaking changes, recomenda-se consultar a aba Releases oficial em [github.com/sipeed/picoclaw/releases](https://github.com/sipeed/picoclaw/releases).

---

## 3. Progresso do Projeto

### PR Fechado/Merged

| PR | Título | Impacto |
|----|--------|---------|
| [#1349](https://github.com/sipeed/picoclaw/pull/1349) | feat(qq): suporte a attachments (voice, image, video, file) | **Canal QQ** — Interoperabilidade ampliada com suporte completo a mídia e priorização de Markdown para replies |

### PRs Abertos de Alto Impacto

| PR | Título | Canal | Estágio |
|----|--------|-------|---------|
| [#3413](https://github.com/sipeed/picoclaw/pull/3413) | Global multi-channel session sidebar (Part 2-A) | Web UI | Aberto |
| [#3412](https://github.com/sipeed/picoclaw/pull/3412) | fix(agent): tornar turns falhas visíveis ao usuário | Agent Core | Aberto |
| [#3411](https://github.com/sipeed/picoclaw/pull/3411) | Honest, state-driven working indicator | Web UI | Aberto |
| [#3410](https://github.com/sipeed/picoclaw/pull/3410) | Surface steering queue state | Pico/Web | Aberto |

**Análise:** Há um esforço coordenado (referenciando issue #3406) para melhorar significativamente a transparência do estado da Web UI. O PR #3222 (refatoração DeltaChat, -200LOC) permanece aberto desde julho, sinalizando work-in-progress de cleanup técnico.

---

## 4. Temas Quentes da Comunidade

### Issue em Destaque

| Issue | Título | Comentários | Reações |
|-------|--------|-------------|---------|
| [#3408](https://github.com/sipeed/picoclaw/issues/3408) | Web UI: mensagens enviadas enquanto agent busy são enfileiradas invisivelmente e descartadas silenciosamente | 1 | 0 |

**Análise da Demanda:** Esta issue expõe um **problema de UX crítico**: o usuário não recebe feedback quando uma mensagem é enfileirada ou descartada. O problema foi identificado e três PRs corretivos (#3410, #3411, #3412) já estão em progresso pelo mesmo autor, demonstrando resposta rápida da comunidade. A ausência de reações pode indicar que poucos usuários到达 a testar funcionalidades avançadas de steering.

**Tensão identificada:** O trade-off entre `MaxQueueSize=10` e a falta de feedback visual cria uma experiência onde mensagens "desaparecem" sem explicação — erosão silenciosa de confiança.

---

## 5. Bugs e Estabilidade

### Bugs Reportados (1)

| Severidade | Issue | Descrição |
|------------|-------|-----------|
| **Alta** | [#3408](https://github.com/sipeed/picoclaw/issues/3408) | **Visibilidade de fila de steering**: Mensagens silenciosamente descartadas quando `MaxQueueSize=10` é atingido; sem UI feedback |

### Bugs em Correção (via PRs)

| PR | Bug | Status |
|----|-----|--------|
| [#3410](https://github.com/sipeed/picoclaw/pull/3410) | Falta de acknowledgement/confirmação ao enfileirar ou descartar mensagens | Aberto |
| [#3412](https://github.com/sipeed/picoclaw/pull/3412) | Erros de turn (`maybePublishError` → `formatProcessingError`) sendo dropados em 3 pontos diferentes | Aberto |

**Maturidade de Bug Tracking:** A ausência de issues de crash ou regressões é um indicador positivo. Os bugs ativos são de UX, não de estabilidade.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em Desenvolvimento

| PR | Feature | Prioridade Observada | Part of |
|----|---------|---------------------|---------|
| [#3413](https://github.com/sipeed/picoclaw/pull/3413) | Sidebar global multi-channel | **Alta** | #3406 |
| [#3411](https://github.com/sipeed/picoclaw/pull/3411) | Indicador de trabalho honesto e state-driven | **Alta** | #3406 |
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) | Cleanup DeltaChat (-200LOC), drop legacy features | **Técnica** | Manutenção |

### Sinais de Roadmap

O issue [#3406](https://github.com/sipeed/picoclaw/issues/3406) (referenciado em #3411, #3413) parece ser um **epic de melhoria da Web UI** com múltiplas partes:
- Parte 1: Indicador state-driven (PR #3411)
- Parte 2-A: Sidebar multi-channel (PR #3413)
- Correções associadas: Queue visibility (#3410), Error visibility (#3412)

**Interpolação:** O roadmap próximo parece focado em **transparência operacional** — mostrar ao usuário exatamente o que está acontecendo (estado do agent, fate das mensagens, erros).

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Dor | Contexto | Severidade |
|-----|----------|------------|
| **Mensagens "desaparecem"** | Durante turn em execução, mensagens enfileiradas não aparecem no chat; limite de fila não é comunicado | **Crítica para UX** |
| **Silêncio após erro** | Turns que falham sem produzir reply deixam usuário "staring at silence" | **Crítica para UX** |
| **Feedback genérico** | Indicador "thinking" usa frases rotativas canned que não refletem estado real | **Menor, mas irritante** |

### Cenários de Uso Emergentes

- **Uso multi-canal**: Issue #3406 e PR #3413 indicam que usuários estão utilizando múltiplos canais simultaneamente, demandando gestão unificada de sessões.
- **Steering ativo**: O próprio mecanismo de queue de mensagens (MaxQueueSize=10) sugere uso como **agente interativo/programável**, não apenas chatbot passivo.

### Satisfação Geral

**Mista a positiva.** O projeto está ativo e responsivo (1 dia de turnaround em issues), mas a área de UI precisa de polimento UX. A refatoração do DeltaChat (#3222) indica atenção contínua à estabilidade backend.

---

## 8. Backlog que Merece Atenção

### PRs sem atividade recente significativa

| PR | Título | Criado | Última Atualização | Estado | Observação |
|----|--------|--------|-------------------|--------|------------|
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) | refactor(deltachat): cleanup, -200LOC | 2026-07-03 | 2026-09-30 | Aberto | **3 meses** sem merge — pode precisar de review ou está em hold |
| [#1349](https://github.com/sipeed/picoclaw/pull/1349) | feat(qq): attachments | 2026-03-11 | 2026-09-30 | **Merged** | Pronto para release |

### Issues Antigas sem Resposta

| Issue | Criada | Dias Aberta | Nota |
|-------|--------|-------------|------|
| [#3408](https://github.com/sipeed/picoclaw/issues/3408) | 2026-09-29 | 2 dias | **Recém-reportada**, já em correção ativa |

---

## Métricas Consolidada — 2026-10-01

| Indicador | Valor | Tendência |
|-----------|-------|-----------|
| Issues abertas/ativas (24h) | 1 | Neutra |
| PRs abertos (24h) | 5 | **Alta atividade** |
| PRs merged/fechados (24h) | 1 | Normal |
| Releases (24h) | 0 | Sem alteração |
| Issues sem resposta >30d | 0 visíveis | Positivo |
| PRs em revisão >30d | 1 (#3222) | **Atenção** |

---

**Saúde Geral do Projeto: 🟢 Saudável com foco em UX**

O PicoClaw demonstra maturidade técnica com ritmo de desenvolvimento consistente. A área de maior atenção é a Web UI, onde uma iniciativa coordenada (#3406) está resolvendo problemas de transparência de estado. O backlog técnico (#3222) merece review para evitar bitrot.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório de Projeto: IronClaw

**Repositório:** [nearai/ironclaw](https://github.com/nearai/ironclaw)  
**Período:** 2026-10-01  
**Analista:** Sistema de Relatórios Open Source

---

## 1. Panorama do Dia

O projeto IronClaw apresenta **atividade mínima nas últimas 24 horas**, com zero issues abertas ou fechadas e nenhuma nova release. Uma única Pull Request foi atualizada — um trabalho de infraestrutura CI relacionado à atualização do grafo de conhecimento do codebase. O projeto parece estar em um período de baixa atividade ou em processo de estabilização, com manutenção routine sendo realizada por bots automatizados.

---

## 2. Lançamentos

**Status:** Nenhuma release nas últimas 24h

Não há informações sobre releases recentes. Recomenda-se verificar a aba [Releases do repositório](https://github.com/nearai/ironclaw/releases) para histórico completo.

---

## 3. Progresso do Projeto

| PR | Status | Tipo | Descrição |
|-----|--------|------|-----------|
| [#7988](https://github.com/nearai/ironclaw/pull/7988) | **ABERTA** | CI/Infrastructure | Refresh codebase knowledge graph |

**Análise:** O PR #7988 representa uma atualização automática do snapshot de bootstrap do "codebase-memory", gerada pelo workflow `Codebase Graph Refresh`. Este é um trabalho de **manutenção preventiva de infraestrutura**, não uma feature ou correção. Tamanho: XS, Risco: Low, Contribuidor: core team.

---

## 4. Temas Quentes da Comunidade

**Status:** Sem dados de issues ou PRs com alta interação

Não há informações disponíveis sobre issues ou PRs com volume significativo de comentários ou reações. Para análise completa, seria necessário acessar o histórico completo de interações da comunidade.

---

## 5. Bugs e Estabilidade

**Status:** Nenhum bug reportado nas últimas 24h

Zero issues abertas com标签 de bug, crash ou regressão. O projeto não registrou incidentes de estabilidade no período analisado.

---

## 6. Pedidos de Features e Sinais de Roadmap

**Status:** Sem novos pedidos de features nas últimas 24h

Nenhuma issue com label "enhancement" ou "feature request" foi criada ou atualizada. Não há sinais claros de direção de roadmap no período.

---

## 7. Resumo de Feedback dos Usuários

**Status:** Sem dados disponíveis

Não há issues de feedback abertas ou fechadas nas últimas 24h que permitam análise de dores, cenários de uso ou métricas de satisfação.

---

## 8. Backlog que Merece Atenção

**Status:** Verificação recomendada

Com baixa atividade recente, sugere-se revisar:
- Issues antigas sem resposta (buscar issues com `created:<2026-09-01` e `comments:0`)
- PRs em draft há mais de 30 dias
- Issues bloqueadas por dependências

**Link direto:** [nearai/ironclaw/issues](https://github.com/nearai/ironclaw/issues?q=is%3Aissue+is%3Aopen+no%3Aassignee)

---

## Métricas Resumidas

| Métrica | Valor |
|---------|-------|
| Issues abertas/ativas (24h) | 0 |
| Issues fechadas (24h) | 0 |
| PRs abertos (24h) | 1 |
| PRs merged/fechados (24h) | 0 |
| Novas releases | 0 |
| Issues com alta interação | 0 |

---

## Conclusão

O IronClaw apresenta um **período de baixa atividade** em 2026-10-01. A única ação notável é uma atualização de infraestrutura CI para manutenção do codebase-memory. **Recomenda-se**: monitorar se esta calmaria representa um ciclo normal do projeto ou um possível declínio de engagement. Para relatório mais robusto, expandir escopo temporal para 7-30 dias.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório de Projeto — CoPaw (QwenPaw)
**Data de referência:** 2026-10-01
**Repositório:** [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw)

---

## 1. Panorama do dia

O projeto CoPaw demonstra **alta atividade** em 30/09/2026, com 21 issues e 41 PRs atualizados nas últimas 24h. A release **v2.2.2-beta.4** foi publicada hoje, contendo ajustes de UI para o painel de configuração do reranker e incremento de versão. O estado geral reflete um projeto maduro em fase de estabilização de recursos, com volume significativo de **bug reports críticos** relacionados a integrações de provedores (DeepSeek, OpenAI, Anthropic), segurança em Windows e gerenciamento de sessões assíncronas. A comunidade demonstra engajamento ativo tanto em features quanto em correções.

---

## 2. Lançamentos

### v2.2.2-beta.4
| Item | Detalhe |
|------|---------|
| **Versão** | v2.2.2-beta.4 |
| **Tipo** | Beta |
| **Release page** | [v2.2.2-beta.4](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.2.2-beta.4) |

**Changes:**
- **feat:** Adicionado painel de configuração UI do reranker ao `ReMeLightMemoryCard` ([PR #6399](https://github.com/agentscope-ai/QwenPaw/pull/6399))
- **chore:** Bump de versão para 2.2.2b4 ([PR #7892](https://github.com/agentscope-ai/QwenPaw/pull/7892))
- **perf:** Split de dependências de chat no console

**Status:** Release duty em verificação de instalação — ver [Issue #8053](https://github.com/agentscope-ai/QwenPaw/issues/8053)

---

## 3. Progresso do Projeto

### PRs merged/fechados hoje

| PR | Descrição | Impacto |
|----|-----------|---------|
| [#8049](https://github.com/agentscope-ai/QwenPaw/pull/8049) | **fix(chats):** Resolve timezone por timestamp para evitar DST shifts em Msg timestamps | **Crítico** — corrige `_process_local_tz()` que congelava offset UTC, causando deslocamento de timestamps |
| [PRs em review](https://github.com/agentscope-ai/QwenPaw/pulls?q=is%3Aopen+is%3Apr+updated%3A2026-09-30) | Diversos PRs em diferentes estágios | Continuidade de features em andamento |

### PRs em destaque (por atividade)

| PR | Autor | Tamanho | Descrição |
|----|-------|---------|-----------|
| [#7569](https://github.com/agentscope-ai/QwenPaw/pull/7569) | AntiQuality | XXXL | **feat(modes):** Advisor Mode — pares de modelos advisor+worker para tarefas |
| [#8063](https://github.com/agentscope-ai/QwenPaw/pull/8063) | nattiini45 | L | **feat(console):** Notificar sessão pai quando background task finaliza |
| [#8062](https://github.com/agentscope-ai/QwenPaw/pull/8062) | RerankerGuo | M | **fix(memory):** Manter vetores de embedding saudáveis quando um chunk excede limite |
| [#8061](https://github.com/agentscope-ai/QwenPaw/pull/8061) | RerankerGuo | M | **feat(providers):** Permitir gateways customizados declararem OpenAI prompt cache params |
| [#8060](https://github.com/agentscope-ai/QwenPaw/pull/8060) | RerankerGuo | S | **fix(token-usage):** Contar cache tokens Anthropic no context meter |

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários/interação)

| Issue | Tipo | Comentários | Sumário |
|-------|------|-------------|---------|
| [#7011](https://github.com/agentscope-ai/QwenPaw/issues/7011) | Bug | 8 | Console stop request cancela sessão Feishu ativa sob múltiplas sessões UI |
| [#7443](https://github.com/agentscope-ai/QwenPaw/issues/7443) | Bug | 6 | Instruções perigosas conseguem evadir facilmente |
| [#8022](https://github.com/agentscope-ai/QwenPaw/issues/8022) | Bug | 4 | `send_file_to_user` gera file/image blocks + empty assistant message poluindo contexto — **reportado por agente IA** |
| [#7991](https://github.com/agentscope-ai/QwenPaw/issues/7991) | Bug | 4 | TaskTracker com entradas zumbis inflando `running_task_count` |

### Análise de demandas

**Segurança em destaque:** O issue [#7443](https://github.com/agentscope-ai/QwenPaw/issues/7443) sobre instruções perigosas evadindo sandbox demonstra preocupação contínua com a integridade do modo de segurança, especialmente no Windows com sandbox desabilitado ([#8002](https://github.com/agentscope-ai/QwenPaw/issues/8002)).

**Gerenciamento de sessões:** Questões sobre cancelamento de requisições ([#7011](https://github.com/agentscope-ai/QwenPaw/issues/7011)) e tarefas em background ([#8059](https://github.com/agentscope-ai/QwenPaw/issues/8059), [#8063](https://github.com/agentscope-ai/QwenPaw/pull/8063)) indicam necessidade de melhorias no lifecycle de sessões.

**Features mais solicitadas:**
- [Feature #7945](https://github.com/agentscope-ai/QwenPaw/issues/7945): Filtro para @todos/@ALL em IMs (Feishu, DingTalk, etc.)
- [Feature #7997](https://github.com/agentscope-ai/QwenPaw/issues/7997): Retração/edição de mensagens e rollback de workspace no WebUI

---

## 5. Bugs e Estabilidade

### Severidade Crítica (afetam produção/sessões)

| Issue | Descrição | Provedor/Componente | Link |
|-------|-----------|---------------------|------|
| #8064 | `send_file_to_user` com PDF quebra permanentemente sessão DeepSeek — requests subsequentes falham com 400 | DeepSeek | [Issue #8064](https://github.com/agentscope-ai/QwenPaw/issues/8064) |
| #8059 | Background tasks perdem task record (404) após conclusão; tasks finalizadas retornam resposta vazia | Background agents | [Issue #8059](https://github.com/agentscope-ai/QwenPaw/issues/8059) |
| #8022 | File/image blocks + empty assistant message poluem contexto, causando 400 persistente | Múltiplos | [Issue #8022](https://github.com/agentscope-ai/QwenPaw/issues/8022) |

### Severidade Alta (funcionalidade degradada)

| Issue | Descrição | Link |
|-------|-----------|------|
| #8042 | Tool output files (PDFs) são refeitos ao modelo, causando Internal error quando formato não suportado | [Issue #8042](https://github.com/agentscope-ai/QwenPaw/issues/8042) |
| #8040 | Embedding reindex incompleto — chunks CJK acima do limite de tokens silenciosamente dropam batch | [Issue #8040](https://github.com/agentscope-ai/QwenPaw/issues/8040) |
| #8047 | HTTP 422 com body plain-text (DBX MCP) não ativa streamable_http driver — Console 503 | [Issue #8047](https://github.com/agentscope-ai/QwenPaw/issues/8047) |
| #8035 | Transcription settings não consegue configurar `transcription_model` — provider switching quebra transcrição | [Issue #8035](https://github.com/agentscope-ai/QwenPaw/issues/8035) |
| #8002 | Windows auto mode + sandbox off permite Office COM `Quit()` fechar PowerPoint do usuário | [Issue #8002](https://github.com/agentscope-ai/QwenPaw/issues/8002) |

### Severidade Média

| Issue | Descrição | Link |
|-------|-----------|------|
| #7991 | TaskTracker zumbis inflando `running_task_count` | [Issue #7991](https://github.com/agentscope-ai/QwenPaw/issues/7991) |
| #8058 | `prompt_cache_key` rejeitado para providers OpenAI-compatíveis customizados | [Issue #8058](https://github.com/agentscope-ai/QwenPaw/issues/8058) |
| #8057 | Context meter subestima uso para Anthropic Messages (cache tokens não contados) | [Issue #8057](https://github.com/agentscope-ai/QwenPaw/issues/8057) |
| #8046 | `_process_local_tz()` congela UTC offset, causando shift de timestamps por delta DST | [Issue #8046](https://github.com/agentscope-ai/QwenPaw/issues/8046) |

### Bugs fechados hoje

| Issue | Descrição | Link |
|-------|-----------|------|
| #7011 | Console stop request cancelava sessão Feishu ativa | [Issue #7011](https://github.com/agentscope-ai/QwenPaw/issues/7011) |
| #7443 | Instruções perigosas evasivas | [Issue #7443](https://github.com/agentscope-ai/QwenPaw/issues/7443) |
| #7604 | LLM stream idle timeout hardcoded em 30s (v2.2.0) | [Issue #7604](https://github.com/agentscope-ai/QwenPaw/issues/7604) |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features em proposta

| Feature | Descrição | Cenário de uso | Link |
|---------|-----------|----------------|------|
| **Advisor Mode** | Modo de loop com par advisor+worker (modelo forte + barato) | Tarefas onde modelo baratp precisa de supervisão | [PR #7569](https://github.com/agentscope-ai/QwenPaw/pull/7569) |
| **Filtro @todos/@ALL** | Filtrar notificações de @everyone/@ALL em IMs | Evitar resposta desnecessária do agente a broadcasts | [Issue #7945](https://github.com/agentscope-ai/QwenPaw/issues/7945) |
| **Message retraction/rollback** | Editar/retrair mensagens e rollback de workspace no WebUI | Limpar contexto após erro ou reexecutar com correção | [Issue #7997](https://github.com/agentscope-ai/QwenPaw/issues/7997) |
| **PRD CRUD built-in** | Ferramenta nativa de gerenciamento de PRD com frontend | Substituir plugin existente por implementação nativa | [PR #4902](https://github.com/agentscope-ai/QwenPaw/pull/4902) |
| **Proxy para subprocessos** | Suporte a proxy para comandos subprocess (npm, pip, git) | Usuários WSL/corporativos/VPN | [PR #2505](https://github.com/agentscope-ai/QwenPaw/pull/2505) |

### Features em revisão/development

| Feature | Status | Link |
|---------|--------|------|
| `extraSystemPrompt` na API console chat | Under Review | [PR #4580](https://github.com/agentscope-ai/QwenPaw/pull/4580) |
| Auto-install WebView2 Runtime no Windows | Under Review | [PR #3120](https://github.com/agentscope-ai/QwenPaw/pull/3120) |
| Upload de arquivos locais via QQ rich media | Open | [PR #1619](https://github.com/agentscope-ai/QwenPaw/pull/1619) |

### Sinais de roadmap

- **Cache de prompts:** Melhorias contínuas em cache control para providers OpenAI-compatíveis ([#8058](https://github.com/agentscope-ai/QwenPaw/issues/8058), [#8061](https://github.com/agentscope-ai/QwenPaw/pull/8061))
- **Background agents:** Melhorias em lifecycle e notificação de tarefas ([#8059](https://github.com/agentscope-ai/QwenPaw/issues/8059), [#8063](https://github.com/agentscope-ai/QwenPaw/pull/8063))
- **Memory/Embedding:** Fallas em batching e limites de tokens sendo endereçadas ([#8040](https://github.com/agentscope-ai/QwenPaw/issues/8040), [#8062](https://github.com/agentscope-ai/QwenPaw/pull/8062))

---

## 7. Resumo de Feedback dos Usuários

### Dores reais identificadas

**1. Instabilidade em integrações de provedores**
Usuários reportam falhas persistentes em DeepSeek ([#8064](https://github.com/agentscope-ai/QwenPaw/issues/8064)), OpenAI ([#8036](https://github.com/agentscope-ai/QwenPaw/issues/8036)) e Anthropic ([#8057](https://github.com/agentscope-ai/QwenPaw/issues/8057)). A experiência é inconsistente — testes de conexão passam mas geração falha.

**2. Gerenciamento de sessões e background tasks**
Sessões são perdidas após completion de tasks background ([#8059](https://github.com/agentscope-ai/QwenPaw/issues/8059)), cancelamentos afetam sessões indevidamente ([#7011](https://github.com/agentscope-ai/QwenPaw/issues/7011)), e mensagens são perdidas ao trocar de página ([#1481](https://github.com/agentscope-ai/QwenPaw/pull/1481)).

**3. Limites de tamanho em operações**
Skills pools grandes (80MB+) causam timeout de 30s no frontend ([#8013](https://github.com/agentscope-ai/QwenPaw/issues/8013)), e rechunking de embeddings falha silenciosamente ([#8040](https://github.com/agentscope-ai/QwenPaw/issues/8040)).

**4. Segurança em Windows**
O sandbox do Windows pode ser contornado com Office COM ([#8002](https://github.com/agentscope-ai/QwenPaw/issues/8002)), levantando preocupações sérias para ambientes corporativos.

### Cenários de uso destacados

- **Multi-agente com workers background:** Manager dispatcha para worker via `submit_to_agent`, com verificação via `check_agent_task`
- **Canais corporativos:** Feishu, WeCom, Ding

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-10-01

---

## 1. Panorama do dia

O ecossistema ZeroClaw apresenta alta atividade de desenvolvimento com **41 issues e 50 PRs atualizados nas últimas 24h**, indicando um ciclo de desenvolvimento intenso. **Nenhuma release foi publicada no período**, sugerindo que a equipe está em fase de consolidação antes de um próximo lançamento (provavelmente v0.9.0, referenciada em múltiplas issues). O estado do projeto é marcado por **preocupações críticas de segurança**: múltiplas vulnerabilidades S0/S1 relacionadas a isolamento de agentes, escopo de memória e controles de acesso estão ativas e em progresso. A comunidade demonstra engajamento significativo em torno de issues de architecture e RFCs, com 15+ comentários em trackers de decisão de maintainers.

---

## 2. Lançamentos

### Nenhum release nas últimas 24h

O projeto não publicou versões novas neste período. A ausência de release contrasta com a intensa atividade de PRs, indicando que a base de código está em fase de maturação para uma futura release (identificada como **v0.9.0** em múltiplos PRs e issues).

---

## 3. Progresso do Projeto

### PRs em destaque (em revisão/ativo)

| # | Título | Tamanho | Risco | Status |
|---|--------|---------|-------|--------|
| [#11266](https://github.com/zeroclaw-labs/zeroclaw/pull/11266) | fix(memory): keep owned-session subagent and pipeline memory private | XL | 🔴 Alto | Aberto |
| [#11280](https://github.com/zeroclaw-labs/zeroclaw/pull/11280) | feat(gateway): serve health, TUI list, cost and event history through the core | XL | 🔴 Alto | Aberto |
| [#11293](https://github.com/zeroclaw-labs/zeroclaw/pull/11293) | fix(ci): ignore unread labels in the PR risk report's stale-metadata check | XS | 🔴 Alto | Aberto |
| [#10557](https://github.com/zeroclaw-labs/zeroclaw/pull/10557) | refactor(cron): extract cron into zeroclaw-cron and land the precondition gate | XL | 🔴 Alto | Aberto |
| [#11187](https://github.com/zeroclaw-labs/zeroclaw/pull/11187) | feat(composition): build DefaultCapabilities in the application layer | XL | 🔴 Alto | Aberto |
| [#10591](https://github.com/zeroclaw-labs/zeroclaw/pull/10591) | feat(bootstrap): add MCP launcher and its per-platform distribution | XL | 🔴 Alto | Aberto |
| [#10205](https://github.com/zeroclaw-labs/zeroclaw/pull/10205) | feat(android): add native tools and standalone app | XL | 🔴 Alto | Aberto |
| [#10084](https://github.com/zeroclaw-labs/zeroclaw/pull/10084) | fix(whatsapp-web): answer WhatsApp's passkey gate | XL | 🔴 Alto | Aberto |
| [#9827](https://github.com/zeroclaw-labs/zeroclaw/pull/9827) | fix(security): stop shell children from escaping their validated confinement | L | 🔴 Alto | Aberto |
| [#11278](https://github.com/zeroclaw-labs/zeroclaw/pull/11278) | fix(desktop): refuse in-app self-upgrade of a desktop-bundled kernel | M | 🟡 Médio | Aberto (pendente decisão J6c) |

**Análise**: O progresso técnico concentra-se em três eixos:
1. **Isolamento de segurança** — PRs #11266 e #9827 abordam vazamento de memória e escape de sandbox
2. **Arquitetura de gateway** — #11280 expande endpoints do core
3. **Extração de módulos** — #10557 move cron para crate dedicada

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários/reação)

| # | Título | Comentários | Prioridade | Tema |
|---|--------|-------------|------------|------|
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | [Tracker] Maintainer decision queue for RFCs and design issues | 15 | P2 | Governança |
| [#10366](https://github.com/zeroclaw-labs/zeroclaw/issues/10366) | RFC: Clarify PR review evidence, freshness warnings, and author-action boundaries | 10 | P2 | Processo/Revisão |
| [#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) | [Feature]: Per-sender RBAC for multi-tenant agent deployments | 10 | P2 | RBAC/Multi-tenant |
| [#10230](https://github.com/zeroclaw-labs/zeroclaw/issues/10230) | [Bug]: Daemon startup or reload can overflow during agent initialization | 7 | P1 | Estabilidade/Daemon |
| [#10165](https://github.com/zeroclaw-labs/zeroclaw/issues/10165) | [Bug]: independent delegate bypasses block_high_risk_commands | 7 | P1 | Segurança/Delegate |
| [#11235](https://github.com/zeroclaw-labs/zeroclaw/issues/11235) | RFC: Knowledge corpus — RAG for the agent | 2 | P2 | Arquitetura/RAG |

**Análise de Demandas**:
- **Governança**: A comunidade aguarda decisão de maintainers em RFCs (issue #8692 com 15 comentários)
- **RBAC Multi-tenant**: Demanda crescente por controle de acesso por remetente em deployments compartilhados
- **Revisão de PR**: Discussion sobre evidências de revisão e limites de ação do autor demonstra maturidade do processo

---

## 5. Bugs e Estabilidade

### Vulnerabilidades Críticas (S0/S1)

| # | Severidade | Título | Status | Link |
|---|------------|--------|--------|------|
| #9647 | **S0** | Knowledge graph has no per-agent attribution — any agent reads/mutates another agent's knowledge | 🔴 In Progress | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/9647) |
| #9646 | **S0** | Session/channel tools lack per-agent ownership scoping | 🔴 In Progress | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/9646) |
| #11198 | **S0** | Delegated memory tools lose principal scope | 🔴 Accepted | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/11198) |
| #11127 | **S0** | Session-data tools bypass principal ownership checks | 🔴 In Progress | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/11127) |
| #11123 | **S0** | SOP execution accepts wildcard tool selectors without tools:execute | 🔴 In Progress | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/11123) |
| #11126 | **S1** | Queued session operations retain revoked administrator ownership bypass | 🔴 In Progress | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/11126) |
| #10165 | **S0** | Independent delegate bypasses block_high_risk_commands | 🔴 In Progress | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/10165) |
| #10230 | **S1** | Daemon startup or reload can overflow during agent initialization | ✅ Closed | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/10230) |

### Bugs Funcionais (S2/S3)

| # | Severidade | Título | Status | Link |
|---|------------|--------|--------|------|
| #10975 | S2 | WhatsApp Web: inbound images not downloaded — vision unusable | 🔴 Closed | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/10975) |
| #11257 | S2 | WhatsApp Web drops caption of inbound images, videos, documents | 🔴 Accepted | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/11257) |
| #11256 | S3 | initial_prompt never sent to Groq/OpenAI transcription | 🔴 In Progress | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/11256) |
| #11294 | S1 | Flaky test: configure_refuses_an_incarnation_replaced_under_the_lock | 🆕 Novo | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/11294) |
| #9770 | S1 | cron update silently discards changes to declarative jobs | 🔴 Accepted | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/9770) |
| #11237 | S1 | config editor cannot write declarative cron schedule | 🔴 In Progress | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/11237) |

**Avaliação de Estabilidade**: O projeto enfrenta **8 vulnerabilidades S0 simultâneas**, todas relacionadas a falhas de isolamento entre agentes/memórias. Este é um padrão de risco significativo que demanda atenção prioritária. A questão #10230 (stack overflow) foi resolvida, mas a raiz do problema de inicialização permanece em avaliação.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Aceitas para v0.9.0

| # | Título | Prioridade | Área | Link |
|---|--------|------------|------|------|
| #5982 | Per-sender RBAC for multi-tenant agent deployments | P2 | Arquitetura/Segurança | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) |
| #8289 | [Tracker] OIDC milestone: canonical principals and inbound authentication | P2 | Segurança/Identidade | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8289) |
| #7432 | [Tracker] Runtime and gateway delivery - v0.8.6 and v0.9.0 | P2 | Arquitetura | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) |
| #11255 | Save inbound WhatsApp Web images to workspace | P1 | Canal/WhatsApp | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/11255) |
| #11235 | RFC: Knowledge corpus — RAG for the agent | P2 | Arquitetura/IA | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/11235) |
| #11001 | Complete local IPC coverage for an external gateway | P2 | Arquitetura | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/11001) |
| #10995 | Add verified plugin update with failure rollback | P2 | Plugins | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/10995) |
| #8907 | zerocode TUI: unified plugin/capability catalog pane | P2 | ZeroCode/TUI | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8907) |

### Sinais Emergentes
- **RAG para agentes**: Issue #11235 propõe Retrieval-Augmented Generation para documentação e referências
- **MCP Launcher**: PR #10591 adiciona suporte a MCP (Model Context Protocol)
- **Android nativo**: PR #10205 expande para plataforma Android com tools dedicadas

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Categoria | Descrição | Impacto | Issue |
|-----------|-----------|---------|-------|
| **Segurança Multi-tenant** | Agentes acessam dados uns dos outros | Crítico (S0) | #9647, #9646 |
| **WhatsApp Images** | Agente recebe "[Image]" ao invés de conteúdo visual | Alto (S2) | #10975, #11257 |
| **Cron Instável** | Updates de cron são silenciosamente descartados | Workflow (S1) | #9770 |
| **Daemon Overflow** | Startup/reload causa stack overflow | Workflow (S1) | #10230 ✅ |
| **Transcrição** | initial_prompt não é enviado a provedores | Minor (S3) | #11256 |

### Cenários de Uso Emergentes
- **Multi-tenant deployments**: Mercado exigindo isolamento entre agentes de diferentes clientes
- **Visão em WhatsApp**: Usuários esperam capacidade multimodal em canais mobile
- **Plugins/WASM**: Ecossistema de plugins amadurecendo (issue #10769)

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta/Ação Prolongada

| # | Título | Criado | Atualizado | Status | Link |
|---|--------|--------|-----------|--------|------|
| #7432 | [Tracker] Runtime and gateway delivery | 2026-06-09 | 2026-09-30 | Accepted (no-stale) | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) |
| #8289 | OIDC milestone tracker | 2026-06-24 | 2026-09-30 | Accepted (no-stale) | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8289) |
| #5982 | Per-sender RBAC | 2026-04-22 | 2026-09-30 | Accepted (no-stale) | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) |
| #8907 | zerocode TUI: unified plugin catalog | 2026-07-09 | 2026-09-30 | Blocked | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8907) |

### Análise de Risk Assessment

| Risco | PRs | Descrição |
|-------|-----|-----------|
| 🔴 **Alto** | 12+ | Múltiplos PRs e issues com `risk:high` em aberto |
| 🟡 **Médio** | 4+ | Bugs funcionais (WhatsApp, config, cron) |
| 🟢 **Baixo** | 1 | Teste flako isolado |

---

## Métricas de Saúde do Projeto

| Indicador | Valor | Avaliação |
|-----------|-------|-----------|
| Issues ativas (24h) | 36 | ⚠️ Elevada |
| PRs abertos (24h) | 50 | ⚠️ Elevada |
| Releases (24h) | 0 | 🔴 Nenhuma |
| Vulnerabilidades S0 abertas | 6 | 🔴 Crítico |
| Bugs S1 abertos | 5 | 🔴 Significativo |
| Issues aguardando maintainer | 1 (RFC #11235) | 🟡 Rastreável |
| PRs aguardando author action | 10+ | 🟡 Contributing |

---

**Conclusão Geral**: ZeroClaw demonstra alta atividade de desenvolvimento, mas enfrenta um **acúmulo de vulnerabilidades de segurança S0** relacionadas a isolamento de memória e controles de acesso entre agentes. A ausência de releases recentes sugere foco em consolidação antes da v0.9.0. Recomenda-se priorização imediata das issues de segurança (#9647, #9646, #11198, #11127, #11123) para não impactar a confiança em deployments multi-tenant.

---

*Relatório gerado em 2026-10-01. Dados: GitHub zeroclaw-labs/zeroclaw.*

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*