# Resumo diário do ecossistema de agentes de IA 2026-07-10

> Issues: 0 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-07-09 21:18 UTC

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

**Data de Referência:** 2026-07-10

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **saúde robusta com 6 de 7 projetos em atividade intensa**, consolidando-se como alternativa viável a soluções proprietárias. Os projetos demonstram maturação acelerada, com foco convergente em estabilidade multi-canal, segurança de execução e otimização de custos de providers. A atividade combinada de **223 issues e 250+ PRs** em 24h sinaliza maturidade técnica avançada, enquanto a ausência de releases formais na maioria dos projetos indica ciclos de desenvolvimento intensivo pré-lançamento. O mercado fragmenta-se em nichos distintos: desde automação corporativa (IronClaw, Hermes) até assistentes pessoais multi-canal (NanoBot, PicoClaw), com ZeroClaw e CoPaw posicionando-se em segmentos intermediários de produtividade e personalização.

---

## 2. Comparação de Atividade

| Projeto | Issues Ativas | PRs Abertos | PRs Merged/24h | Releases/24h | Saúde | Severidade Crítica |
|---------|--------------|-------------|----------------|--------------|-------|-------------------|
| **NullClaw** | 0 | 0 | 0 | 0 | ⚪ Inativa | — |
| **NanoBot** | 12 | 17 | 5 | 0 | 🟢 Alta | 2 bugs P1 (loop, WhatsApp regression) |
| **Hermes Agent** | 46 | 45 | 5 | 0 | 🟡 Alta (backlog crescente) | 1 bug P1 (proxy, 95+ dias) |
| **PicoClaw** | 3 | 12 | 4 | 0 | 🟢 Alta | 2 bugs Alta (migration, Matrix reconnect) |
| **IronClaw** | 24 | 28 | 22 | 0 | 🟢 Alta | 1 bug P1 (Slack data leak) |
| **CoPaw** | 36 | 50 | 9 | 1 (v2.0.0-beta.5) | 🟡 Alta (beta instability) | 4 bugs Alta (loops, Docker) |
| **ZeroClaw** | 30 | 47 | 4 | 0 | 🟢 Alta | 2 bugs S1 (message loss, MCP filter) |

**Observações:**
- **IronClaw** apresenta maior eficiência de merge (22 PRs/24h), indicando equipe de revisão consolidada
- **CoPaw** é o único projeto com release formal, demonstrando disciplina de versioning
- **Hermes Agent** e **CoPaw** exibem backlog crescente (mais abertos que fechados), sugerindo gargalo de review
- **NullClaw** permanece inativo, requerendo avaliação de continuidade ou abandono do projeto

---

## 3. Posicionamento do Projeto Principal

### NanoBot — Referência de Estabilidade

| Dimensão | NanoBot | Posição Relativa |
|----------|---------|-----------------|
| **Maturidade de código** | Foco em estabilidade com 5 PRs merged focadas em segurança e regressões | 🟢 Lidera em disciplina de estabilidade |
| **Ecossistema de canais** | Docker args, Matrix, cron jobs, onboarding guiado | 🟢 Suporte maduro a deployment |
| **Segurança** | Bloqueio de symlink escapes, sandbox hardening | 🟢 Prioridade clara em isolamento |
| **Comunidade** | 23 issues + 22 PRs/24h, 5 PRs fechadas com autores diversos | 🟢 Alta participação |
| **Divergência** | Sem features experimentais de destaque, menor ambição de roadmap | 🟡 Conservadorismo pode limitar atratividade |

**Vantagens competitivas:**
- Deploy Docker production-ready com flexibilidade de customização
- Segurança de workspace isolado (exec tool) validada community
- Modelo de contribuição consistente sem acumulo de PRs stale

**Fragmentação identificada:** 5 PRs com conflitos de merge bloqueiam progresso, indicando necessidade de reformular processo de sincronização de branches.

---

## 4. Focos Técnicos Compartilhados

### Necessidades Transversais Identificadas

| Tema | Projetos Afetados | Evidência |
|------|------------------|-----------|
| **Streaming universal** | NanoBot, PicoClaw, Hermes, CoPaw | QQ channel (PicoClaw #3201), Feishu tables (Hermes #61647), streaming PRs em NanoBot |
| **Provider diversification** | NanoBot, Hermes, ZeroClaw | Eden AI (NanoBot), Z.AI fixes (Hermes), OpenAI-compatible endpoint (ZeroClaw) |
| **Auth/OAuth reliability** | IronClaw, Hermes | 6+ issues Slack em IronClaw, proxy P1 em Hermes (95 dias) |
| **Multi-agent/session management** | ZeroClaw, CoPaw, Hermes | Multi-tenant gateway (NanoBot #936), session controls (ZeroClaw #8894), subagents (Hermes #1006) |
| **Performance em sessões longas** | CoPaw, NanoBot, Hermes | 500KB crash (CoPaw #5479), token counting (Hermes), context compaction (IronClaw #5838) |
| **Sandbox/restrição de ambiente** | CoPaw, NanoBot | Toggle sandbox (CoPaw #5879), workspace isolation (NanoBot) |

**Análise de convergência:** A fragmentação de canais (Matrix, Slack, Feishu, DingTalk, QQ, SimpleX, Telegram, Discord, WhatsApp) gera dívida técnica significativa. Cada projeto implementa adapters proprietários, multiplicando superfície de bugs.

---

## 5. Análise de Diferenciação

### Matriz de Posicionamento Estratégico

```
                    ┌──────────────────────────────────────────────┐
                    │           COMPLEXIDADE OPERACIONAL             │
                    │                                              │
     Enterprise     │  IronClaw (Slack-first, auth complexa)       │
     / Autonomia   │  Hermes (multi-provider, desktop platform)    │
                    │                                              │
                    ├────────────────────────┬─────────────────────┤
                    │                        │                     │
     Produtividade  │  NanoBot (multi-canal, │  ZeroClaw (SOPs,    │
     / Produtividade│  estabilidade Docker)  │  local-first)      │
                    │                        │                     │
                    ├────────────────────────┴─────────────────────┤
                    │                                                │
     Acessibilidade │  CoPaw (UI customizável, Windows Tauri)      │
     / Experimentação│  PicoClaw (IoT/Edge, ARM, multi-canal)      │
                    │                                                │
                    └──────────────────────────────────────────────┘
                              ◄──────►
                         Simplicidade ◄─────► Recursos
```

### Perfil de Público-Alvo

| Projeto | Público Primário | Arquitetura-Chave | Diferenciador Principal |
|---------|-----------------|-------------------|------------------------|
| **NanoBot** | DevOps/infra, deploy Docker | Exec sandbox, cron jobs, Docker-native | Estabilidade de produção |
| **Hermes** | Empresas, uso desktop | Desktop app, plugin routing, Z.AI integration | Plataforma desktop completa |
| **PicoClaw** | IoT, gateways, usuários multi-canal | ARM support, LINE/Matrix/QQ | Mobile-first channels |
| **IronClaw** | Times, Slack-first | Approval workflows, notification system | Fluxos corporativos |
| **CoPaw** | Usuários power, Windows | Tauri UIA, sandbox toggle, themeable | Personalização desktop |
| **ZeroClaw** | Desenvolvedores, local-first | SOPs, memory curation, OpenAI compatibility | Interoperabilidade |

### Divergências Arquiteturais

| Aspecto | NanoBot/CoPaw | Hermes | IronClaw | ZeroClaw |
|---------|--------------|--------|----------|----------|
| **Runtime** | Python-first | Python + Rust components | Rust-centric | Rust-first |
| **Channel model** | Plugin per channel | Unified plugin selector | Extension unification (NEA-25) | Unified with git_forge |
| **Memory** | Basic embedding | Memory provider panel | Approval-gated | Curation/relevance pipeline |
| **Deployment** | Docker-centric | Desktop app + CLI | Cloud-native | Local-first capable |

---

## 6. Tração e Maturidade da Comunidade

### Indicadores de Velocidade de Iteração

| Projeto | PRs Fechados/24h | Issues Fechadas/24h | Taxa Fechamento | Classificação |
|---------|------------------|---------------------|-----------------|---------------|
| **IronClaw** | 22 | 8 | 0.36 PRs/issue | 🔴 Consolidando (22 PRs em 24h = sprint) |
| **CoPaw** | 9 | ~10 | 0.9 PRs/issue | 🟢 Beta ativo, foco em bugs |
| **NanoBot** | 5 | 11 | 2.2 PRs/issue | 🟢 Saudável, bugs resolved preemptivamente |
| **PicoClaw** | 4 | ~1 | 0.25 PRs/issue | 🟡 Estável mas lento |
| **ZeroClaw** | 4 | ~3 | 0.75 PRs/issue | 🟡 Processo, sem releases |
| **Hermes** | 5 | 4 | 0.8 PRs/issue | 🟡 Volume alto mas backlog cresce |

### Análise de Maturidade

**Fase de consolidação (disciplina de qualidade):**
- **NanoBot** — Foco em fechar bugs antes de features; regressões documentadas e corrigidas
- **PicoClaw** — Dependabot updates regulares, code review de segurança (write_file coaching)

**Fase de crescimento (volume de features):**
- **Hermes** — 50 PRs/24h, mas 46 issues abertas vs 4 fechadas indica desequilíbrio
- **CoPaw** — Beta 5 com bugs críticos (loops, Docker) sugere release prematura ou ambiciosa

**Fase de estabilização corporativa:**
- **IronClaw** — 22 PRs merged em 24h demonstra disciplina de review; mas 17 bugs P2 simultâneos indica dívida técnica acumulada

---

## 7. Sinais de Tendência

### Tendências de Mercado Extraídas

#### 1. Multi-Agent Orchestration Emerges
**Evidência:** NanoBot (#936), Hermes (#1006), ZeroClaw (multi-session), CoPaw (#5903)  
**Interpretação:** Demanda por gateways multi-tenant e controle de subagentes sinaliza adoção empresarial em escala. Arquiteturas mono-agente estão evoluindo para federadas.

#### 2. Interoperabilidade OpenAI-Compatível
**Evidência:** ZeroClaw (#8550), interesse em LM Studio (Hermes #61606)  
**Interpretação:** Clientes como Open WebUI e LobeChat forçam adaptação de protocolos. Quem não implementar endpoint OpenAI-compatível perderá base de usuários para competidores.

#### 3. Desktop como Plataforma Primária
**Evíssel:** Hermes (4+ PRs desktop), CoPaw (Tauri UIA), IronClaw (WebUI)  
**Interpretação:** A guerra CLI→GUI terminou. Usuários esperam interface desktop native com paridade de features. Mobile-first é residual.

#### 4. Privacy-First Channels Crescem
**Evidência:** SimpleX (NanoBot #240), local-first mode (ZeroClaw #5287), sandbox toggle (CoPaw #5879)  
**Interpretação:** Demanda por alternativas a WhatsApp/Telegram. Canais descentralizados (Matrix, SimpleX) ganham tração em comunidades técnicas.

#### 5. AI Cost Optimization
**Evidência:** Modelos por tarefa (NanoBot #912), Bedrock prompt caching (PicoClaw #3163), cron presets (NanoBot #4622)  
**Interpretação:** Feature requests de otimização de custos indicam base de usuários em produção com budgets definidos.

#### 6. Observabilidade e Diagnóstico
**Evidência:** IronClaw (failure taxonomy), ZeroClaw (observability tracker), Hermes (memory panel)  
**Interpretação:** Agentes em produção exigem debugging. Ferramentas de diagnóstico shift-left para UX developer.

#### 7. Breaking Changes Persistentes em v2.0
**Evidência:** CoPaw beta instável, IronClaw breaking changes (ironclaw_common 0.5.0), config migrations quebradas (PicoClaw #3206)  
**Interpretação:** Projetos subestimam custo de migração. v2.0 releases sem migration tools robustas geram churn de usuários.

---

## Recomendações Estratégicas

### Para Desenvolvedores
1. **Adotar NanoBot ou PicoClaw** para produção estável com channels diversificados
2. **Acompanhar Hermes** se foco desktop/enterprise é prioritário, mas evitar em produção até P1 proxy ser resolvido
3. **Experimentar ZeroClaw** para workflows SOP e integração local-first

### Para Decisores Técnicos
1. **Avaliar IronClaw com cautela** — 1 bug P1 de Slack data leak requer due diligence de segurança
2. **Evitar CoPaw v2.0 beta** para produção até loops e regressions serem resolvidos
3. **Priorizar projetos com OpenAI-compatible endpoints** para garantir flexibility de provider

### Para Investidores/Analistas
1. **NanoBot** demonstra maturidade operacional com disciplina de qualidade
2. **ZeroClaw** posiciona-se bem em tendência local-first e interoperabilidade
3. **NullClaw** requer decisão de continuidade ou aposentadoria do projeto

---

*Relatório gerado em 2026-07-10. Fontes: GitHub activity data dos repositórios referenciados. Análise limitada a atividades das últimas 24h e pode não refletir tendências de longo prazo.*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-07-10

## 1. Panorama do Dia

O projeto NanoBot apresenta alta atividade comunitária no dia de hoje, com **23 issues e 22 PRs atualizados** nas últimas 24 horas. Não houve lançamentos de novas versões, porém várias PRs de alta prioridade estão em revisão, incluindo correções para crashes e regressões críticas. A base de código demonstra maturidade com foco em estabilidade: 5 PRs foram merged/fechadas hoje, abordando desde configurações Docker até correções de rendering Markdown no Matrix. O estado geral indica um projeto ativo com manutenção contínua e boa saúde geral.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24 horas.**

O projeto não publicou novas versões neste período, indicando fase de codificação e preparação para o próximo ciclo de release.

---

## 3. Progresso do Projeto

### PRs Merged/Fechadas (5 total)

| PR | Descrição | Impacto |
|----|-----------|---------|
| [#4857](https://github.com/HKUDS/nanobot/pull/4857) | Add Dockerfile arg para sobrescrever dependências Python opcionais na build time | Melhoria na flexibilidade de deployment Docker |
| [#4859](https://github.com/HKUDS/nanobot/pull/4859) | fix(matrix): preservar fontes de imagem mxc no Markdown | Correção de regressão que quebrava imagens no Matrix |
| [#4629](https://github.com/HKUDS/nanobot/pull/4629) | fix(exec): bloquear escapes de symlink relativo no workspace | Correção de segurança no exec tool |
| [#4622](https://github.com/HKUDS/nanobot/pull/4622) | feat(cron): suporte a presets de modelo em jobs | Suporte a configuração de modelos por cron job |
| [#4855](https://github.com/HKUDS/nanobot/pull/4855) | feat(channels): adicionar fluxos de setup guiados | Melhoria na experiência de onboarding de canais |

### Destaques de Avanço

- **Segurança**: Bloqueio de symlink escapes no exec ([#4629](https://github.com/HKUDS/nanobot/pull/4629)) fortalece o isolamento do workspace
- **Deploy**: Dockerfile mais flexível com `NANOBOT_EXTRAS` ([#4857](https://github.com/HKUDS/nanobot/pull/4857))
- **UX**: Fluxos de setup guiados para canais e onboard ([#4855](https://github.com/HKUDS/nanobot/pull/4855))
- **Flexibilidade de IA**: Presets de modelo em cron jobs permitem otimização de custos ([#4622](https://github.com/HKUDS/nanobot/pull/4622))

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| Issue | Comentários | 👍 | Tema Principal |
|-------|-------------|----|----------------|
| [#912](https://github.com/HKUDS/nanobot/issues/912) | 5 | 3 | Suporte a configuração de modelos por tarefa |
| [#240](https://github.com/HKUDS/nanobot/issues/240) | 2 | 3 | Canal SimpleX Chat |
| [#1267](https://github.com/HKUDS/nanobot/issues/1267) | 6 | 0 | Provider Zhipu não funciona |
| [#4823](https://github.com/HKUDS/nanobot/issues/4823) | 4 | 0 | Regressão WhatsApp groups |
| [#954](https://github.com/HKUDS/nanobot/issues/954) | 4 | 1 | Progress streaming vaza tool calls |

### Análise das Demandas Principais

**1. Configuração de Modelos por Tarefa (#912)**  
Demanda recorrente para permitir diferentes LLMs para uso conversacional, ferramentas e browser use. Com 3 👍, indica necessidade real de usuários avançados que querem otimizar custos/performance por caso de uso.

**2. Canal SimpleX Chat (#240)**  
Solicitação de canal descentralizado e criptografado (sem telefone). Demonstra interesse da comunidade em alternativas privacy-first.

**3. Provider Zhipu (#1267)**  
Issue técnico com 6 comentários indica complexidade na integração de providers chineses. Usuários enfrentam problemas de balance/saldo.

---

## 5. Bugs e Estabilidade

### Bugs Reportados por Severidade

#### 🔴 Prioridade Alta (p1)

| Bug | Descrição | Link |
|-----|-----------|------|
| Endless loop em `complete_goal` | Tool parameter serialization mudou, agora parseia recap como string ao invés de JSON | [#4864](https://github.com/HKUDS/nanobot/issues/4864) |
| WhatsApp groups regression | Respostas chegam em todos os grupos após upgrade para 0.2.2 | [#4823](https://github.com/HKUDS/nanobot/issues/4823) |
| Zombie processes | Subprocessos não são reaped em todos os exit paths | [#4840](https://github.com/HKUDS/nanobot/pull/4840) |
| MCP reconnect crash | Crash ao reconectar streams HTTP expirados | [#4843](https://github.com/HKUDS/nanobot/pull/4843) |

#### 🟡 Prioridade Média (p2)

| Bug | Descrição | Link |
|-----|-----------|------|
| Missing commands | `nanobot onboard` e `nanobot webui` não existem após instalação com uv | [#4860](https://github.com/HKUDS/nanobot/issues/4860) |
| Media files unbounded growth | Arquivos Telegram/Discord nunca são deletados | [#896](https://github.com/HKUDS/nanobot/issues/896) |
| WebUI Docker build failure | package-lock.json dessincronizado | [#4863](https://github.com/HKUDS/nanobot/pull/4863) |

#### 🟢 Prioridade Baixa / Crônicas

| Bug | Descrição | Link |
|-----|-----------|------|
| Progress streaming vaza | Ferramentas internas expostas no chat | [#954](https://github.com/HKUDS/nanobot/issues/954) |
| Hallucinations no exec | Múltiplas alucinações com exec tool | [#937](https://github.com/HKUDS/nanobot/issues/937) |
| Builtin skills com restrictToWorkspace | Skills fora do workspace não funcionam | [#1138](https://github.com/HKUDS/nanobot/issues/1138) |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features em Desenvolvimento

| PR | Feature | Prioridade |
|----|---------|------------|
| [#4861](https://github.com/HKUDS/nanobot/pull/4861) | Eden AI como provider gateway (100+ modelos) | p2 |
| [#4853](https://github.com/HKUDS/nanobot/pull/4853) | Nano_timer tool (timezone, calendário) | p1 |
| [#4844](https://github.com/HKUDS/nanobot/pull/4844) | Sustained goals por runtime mode explícito | p1 |
| [#4769](https://github.com/HKUDS/nanobot/pull/4769) | Centralizar acesso runtime no WebUI | p1 |

### Feature Requests com Demanda

| Issue | Feature | 👍 | Potencial Roadmap |
|-------|---------|----|-------------------|
| [#912](https://github.com/HKUDS/nanobot/issues/912) | Modelos por tarefa (conversa/herramienta/browser) | 3 | Alta prioridade |
| [#936](https://github.com/HKUDS/nanobot/issues/936) | Multi-tenant gateway para múltiplos agentes | 0 | Escalabilidade |
| [#990](https://github.com/HKUDS/nanobot/issues/990) | Pre-handler hook para bypass de LLM | 0 | Otimização de custos |
| [#931](https://github.com/HKUDS/nanobot/issues/931) | Sandbox nativo para plugins não-confiáveis | 0 | Segurança |
| [#1006](https://github.com/HKUDS/nanobot/issues/1006) | Control plane MVP para subagentes | 0 | Operações |

### Sinais de Evolução do Roadmap

1. **Provider diversification**: Adição do Eden AI demonstra estratégia de multi-provider
2. **Operacionalização**: Foco em control plane e gestão de subagentes indica maturidade para uso enterprise
3. **Ferramentas core**: Nano_timer join toolbox de utilities standalone
4. **Isolamento de sessão**: Refatoração de exec session managers ([#4862](https://github.com/HKUDS/nanobot/pull/4862)) melhora estabilidade multi-thread

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Categoria | Descrição | Frequência | Issues |
|-----------|-----------|------------|--------|
| **Integração de Providers** | Problemas com Zhipu, balance/saldo, timeouts | Alta | [#1267](https://github.com/HKUDS/nanobot/issues/1267), [#935](https://github.com/HKUDS/nanobot/issues/935) |
| **WhatsApp Regressões** | Breaking changes em grupos após updates | Múltiplos | [#4823](https://github.com/HKUDS/nanobot/issues/4823), [#150](https://github.com/HKUDS/nanobot/issues/150) |
| **Hallucinations** | Agente gera respostas falsas com exec tool | Crítica | [#937](https://github.com/HKUDS/nanobot/issues/937) |
| **Onboarding** | Comandos mencionados não existem pós-instalação | Recorrente | [#4860](https://github.com/HKUDS/nanobot/issues/4860), [#4851](https://github.com/HKUDS/nanobot/issues/4851) |
| **Configuração** | Refresh de config não automatizável | Média | [#4851](https://github.com/HKUDS/nanobot/issues/4851) |

### Cenários de Uso Emergentes

- **Multi-agente**: Usuários pedindo gateway multi-tenant ([#936](https://github.com/HKUDS/nanobot/issues/936)) indica demanda enterprise
- **Automação**: Jobs cron com presets de modelo para automação de tarefas ([#4622](https://github.com/HKUDS/nanobot/pull/4622))
- **Canais alternativos**: SimpleX para privacy-conscious users ([#240](https://github.com/HKUDS/nanobot/issues/240))
- **Desktop Integration**: WebUI com native runtime access ([#4769](https://github.com/HKUDS/nanobot/pull/4769))

### Indicadores de Satisfação

- 5 PRs fechadas hoje com contribuições de diferentes autores
- Atividade consistente de ~20+ updates/dia
- Features com 👍 repetidos sugerem validação comunitária

---

## 8. Backlog que Merece Atenção

### Issues Antigas Sem Resolução

| Issue | Criado | Atualizado | Tema | Urgência |
|-------|--------|------------|------|----------|
| [#240](https://github.com/HKUDS/nanobot/issues/240) | 2026-02-07 | 2026-07-09 | SimpleX Chat channel | Média |
| [#896](https://github.com/HKUDS/nanobot/issues/896) | 2026-02-20 | 2026-07-09 | Media files unbounded growth | Alta |
| [#912](https://github.com/HKUDS/nanobot/issues/912) | 2026-02-20 | 2026-07-09 | Task-specific model config | Alta |
| [#931](https://github.com/HKUDS/nanobot/issues/931) | 2026-02-21 | 2026-07-09 | Native sandbox interface | Média |
| [#937](https://github.com/HKUDS/nanobot/issues/937) | 2026-02-21 | 2026-07-09 | Hallucinations no exec | Crítica |
| [#940](https://github.com/HKUDS/nanobot/issues/940) | 2026-02-21 | 2026-07-09 | AI Agent sem acesso ao filesystem | Alta |

### Recomendações de Priorização

1. **[#937](https://github.com/HKUDS/nanobot/issues/937)** - Hallucinations no exec tool: impacta usabilidade crítica do agente
2. **[#896](https://github.com/HKUDS/nanobot/issues/896)** - Crescimento ilimitado de mídia: risco de disco cheio em produção
3. **[#912](https://github.com/HKUDS/nanobot/issues/912)** - Modelos por tarefa: feature de alto valor com demanda validada
4. **[#940](https://github.com/HKUDS/nanobot/issues/940)** - Acesso ao filesystem: bloqueia criação de skills pelo próprio agente
5. **[#4823](https://github.com/HKUDS/nanobot/issues/4823)** - Regressão WhatsApp groups: quebra funcionalidade existente

### PRs Conflituosas que Precisam Resolução

| PR | Tema | Conflitos | Status |
|----|------|-----------|--------|
| [#4816](https://github.com/HKUDS/nanobot/pull/4816) | BaseException catch narrowing | 1 | Bloqueada |
| [#4769](https://github.com/HKUDS/nanobot/pull/4769) | WebUI runtime access | 1 | Bloqueada |
| [#4696](https://github.com/HKUDS/nanobot/pull/4696) | WebUI streaming markdown | 1 | Bloqueada |
| [#4661](https://github.com/HKUDS/nanobot/pull/4661) | File edit progress IDs | 1 | Bloqueada |
| [#4522](https://github.com/HKUDS/nanobot/pull/4522) | Repeated tool-call guard | 1 | Bloqueada |

**Nota**: 5 PRs com `conflict` tag requerem resolução de merge conflicts antes de avançar.

---

## Métricas Resumidas do Dia

| Métrica | Valor |
|---------|-------|
| Issues ativas | 12 |
| Issues fechadas | 11 |
| PRs abertas | 17 |
| PRs merged/fechadas | 5 |
| Releases | 0 |
| PRs p1 em progresso | 7 |
| PRs com conflitos | 5 |
| Issues com >3 👍 | 2 |

**Saúde Geral**: 🟢 Verde — Projeto ativo com manutenção consistente, múltiplas correções de estabilidade em andamento, e bom volume de contribuições comunitárias.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-07-10

## 1. Panorama do Dia

O projeto Hermes Agent apresenta **alta atividade** em 10 de julho de 2026, com 50 issues e 50 PRs atualizados nas últimas 24 horas. Não houve novos lançamentos, indicando que a comunidade está em ciclo de desenvolvimento intensivo sem releases formais publicadas. O volume de atividades sugere uma fase ativa de desenvolvimento, com destaque para correções críticas de bugs (P1/P2) e funcionalidades aguardando revisão. A proporção de 46 issues abertas versus 4 fechadas e 45 PRs abertos versus 5 mergeados indica backlog crescente, possivelmente por restrições de revisão.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24 horas.**

O projeto não publicou novas versões entre 2026-07-09 e 2026-07-10. Isso contrasta com o alto volume de atividade em issues e PRs, sugerindo que a equipe pode estar em processo de consolidação antes de um próximo release tag.

---

## 3. Progresso do Projeto

Cinco PRs foram mergeados ou fechados nas últimas 24 horas, conforme listado nos dados:

| PR | Título | Tipo | Impacto |
|----|--------|------|---------|
| [#60412](https://github.com/NousResearch/hermes-agent/pull/60412) | `hermes serve` headless refactor — port discovery sentinel mismatch | Bug fix (P2) | Corrige quebra do desktop app após `hermes update`; ajusta sentinel de `HERMES_DASHBOARD_READY` para `HERMES_BACKEND_READY` |
| [#61487](https://github.com/NousResearch/hermes-agent/issues/61487) | zai provider pool cascade-marks every key when one hits per-key quota | Bug fix (P2) | Resolve marcação indevida de credenciais no pool round_robin da Z.AI |
| [#61563](https://github.com/NousResearch/hermes-agent/issues/61563) | zai manual-pool routed to `/api/paas/v4` instead of `/api/coding/paas/v4` | Bug fix (P2) | Corrige roteamento de credenciais Z.AI Coding Plan para endpoint correto |
| [#38963](https://github.com/NousResearch/hermes-agent/issues/38963) | Desktop setup — hermes desktop strategy fail | Bug fix (P2) | Resolvido problema de inicialização no Windows 11 |
| [#61647](https://github.com/NousResearch/hermes-agent/pull/61647) | Feishu: render Markdown tables natively | Bug fix | Corrige rendering de tabelas Markdown na plataforma Feishu |

**Destaque:** As correções de Z.AI (#61487, #61563) indicam atenção recente ao provider Z.AI, provavelmente como parte de trabalho de estabilização do Coding Plan. A correção do sentinel em #60412 mostra que o refactor `hermes serve` headless (PR #55923) introduziu regressão que afetou o desktop app.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários + reações)

| # | Título | Comentários | 👍 | Tipo | Componente |
|---|--------|-------------|----|------|------------|
| [#41190](https://github.com/NousResearch/hermes-agent/issues/41190) | Unified plugin route selector para provider/model override por turno | 8 | 1 | Feature | agent, plugins |
| [#5454](https://github.com/NousResearch/hermes-agent/issues/5454) | Proxy support for LLM API calls | 7 | 2 | Bug (P1) | agent, provider |
| [#45736](https://github.com/NousResearch/hermes-agent/issues/45736) | Adjustable font size in Desktop GUI | 3 | **9** | Feature (P3) | desktop |
| [#3506](https://github.com/NousResearch/hermes-agent/issues/3506) | Durable Feedback Routing — Memory, Skills, Follow-Up | 3 | 0 | Feature (P3) | agent, tool/memory |
| [#11424](https://github.com/NousResearch/hermes-agent/issues/11424) | Support JMAP in email integration | 2 | 1 | Feature (P3) | gateway, platform/email |

**Análise:** O issue **#41190** sobre roteamento unificado de plugins é o que mais gera discussão, refletindo demanda por controle granular sobre modelos e providers em diferentes turnos de conversa. A issue **#5454** sobre suporte a proxy persiste como problema crítico (P1) há meses, indicando complexidade técnica. O maior número de 👍 (9) foi para **#45736**, sinalizando que acessibilidade visual no desktop é demanda popular da base de usuários.

---

## 5. Bugs e Estabilidade

### Bugs P1 (Críticos)

| # | Título | Componente | Status |
|---|--------|------------|--------|
| [#5454](https://github.com/NousResearch/hermes-agent/issues/5454) | Proxy support for LLM API calls | agent, provider | **Aberto há 95+ dias** — apenas Telegram adapter respeita proxy |

**P1 em destaque:** O issue #5454 permanece aberto desde abril, afetando usuários corporativos/VPN que não conseguem rotear chamadas de API através de proxy.

### Bugs P2 (Altos)

| # | Título | Componente | Observação |
|---|--------|------------|------------|
| [#39047](https://github.com/NousResearch/hermes-agent/issues/39047) | Auxiliary compression routes Gemini to Codex backend | agent | Provider-qualificado mal roteado |
| [#32766](https://github.com/NousResearch/hermes-agent/issues/32766) | computer_use tool fragilidade quebras auxiliary vision | agent, tools | Afeta fluxo de visão |
| [#60197](https://github.com/NousResearch/hermes-agent/issues/60197) | RuntimeError: Event loop is closed durante /exit | agent, tool/mcp | MCP server shutdown crash |
| [#41225](https://github.com/NousResearch/hermes-agent/issues/41225) | Background processes killed by SIGTERM no release() | tools, terminal | Afeta processos em background |
| [#55092](https://github.com/NousResearch/hermes-agent/issues/55092) | Bedrock empty tool result produz 400 | agent, provider/bedrock | Compatibilidade AWS Bedrock |
| [#61523](https://github.com/NousResearch/hermes-agent/issues/61523) | Memory drift guard false-positive com whitespace | tool/memory | Hard-lock em todas escritas |
| [#61636](https://github.com/NousResearch/hermes-agent/pull/61636) | Scheduler graceful delivery exemption (P1 na PR) | cron | Match de exit reasons no scheduler |

**Padrões identificados:** Vários bugs envolvem roteamento incorreto de modelos/providers (auxiliary, compression, vision), sugerindo dívida técnica na camada de resolução de providers. Bugs de estabilidade em event loops e processos background indicam fragilidade em ciclos de vida de sessões.

### Bugs de Plataforma

- **Windows/WSL:** [#61595](https://github.com/NousResearch/hermes-agent/issues/61595) — UnicodeDecodeError em GBK output; [#60412](https://github.com/NousResearch/hermes-agent/pull/60412) — desktop app launch quebrado (já corrigido)
- **Slack:** [#46990](https://github.com/NousResearch/hermes-agent/issues/46990) — session leak em Socket Mode
- **Feishu:** [#61643](https://github.com/NousResearch/hermes-agent/issues/61643) — tabelas Markdown não renderizam (já corrigido em [#61647](https://github.com/NousResearch/hermes-agent/pull/61647))
- **macOS:** [#39636](https://github.com/NousResearch/hermes-agent/issues/39636) — Vietnamese Telex IME dropando caracteres

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em Desenvolvimento (PRs Abertos)

| PR | Título | Componente | Potencial Impacto |
|----|--------|------------|-------------------|
| [#61173](https://github.com/NousResearch/hermes-agent/pull/61173) | Kanban — desktop plugin com dashboard-parity | desktop | **Alto** — nova interface Kanban no desktop |
| [#61645](https://github.com/NousResearch/hermes-agent/pull/61645) | HAEE — Hermes Agent Evolution Engine (auto-avaliação) | agent | **Alto** — sistema de auto-avaliação e melhoria |
| [#61606](https://github.com/NousResearch/hermes-agent/pull/61606) | LM Studio local model management | agent, cli | **Médio** — suporte a modelos locais via LM Studio |
| [#61633](https://github.com/NousResearch/hermes-agent/pull/61633) | Context Cockpit /visor no Desktop | plugins, desktop | **Médio** — dashboard glanceable de contexto |
| [#51020](https://github.com/NousResearch/hermes-agent/pull/51020) | Memory provider panel + full-config modal | cli, tool/memory, desktop | **Médio** — UI para configuração de memória |
| [#61632](https://github.com/NousResearch/hermes-agent/pull/61632) | Nika skill — workflow-runner delegation | agent, tool/skills | **Médio** — integração com Nika (Rust workflow runner) |
| [#61650](https://github.com/NousResearch/hermes-agent/pull/61650) | User-scoped execution artifacts | state | **Médio** — schema para artefatos de execução |
| [#55872](https://github.com/NousResearch/hermes-agent/pull/55872) | Agentic Entrepreneurship context primitive (+ae) | tools | **Médio** — novo primitivo de contexto |
| [#61648](https://github.com/NousResearch/hermes-agent/pull/61648) | Codex ultra reasoning support | agent, codex | **Médio** — suporte a reasoning `ultra` |
| [#61635](https://github.com/NousResearch/hermes-agent/pull/61635) | Slack auto-onboard + hot-reload channel bindings | platform/slack | **Baixo** — UX em Slack |
| [#61580](https://github.com/NousResearch/hermes-agent/pull/61580) | Skip npm install during update (perf) | cli | **Baixo** — otimização de update |
| [#61623](https://github.com/NousResearch/hermes-agent/issues/61623) | Add GPT-5.6 Sol/Terra/Luna ao catálogo OpenAI | cli, platform | **Médio** — atualização de catálogo |
| [#61526](https://github.com/NousResearch/hermes-agent/issues/61526) | Add Chinese (zh-Hans) locale para Desktop | desktop | **Médio** — i18n |
| [#11424](https://github.com/NousResearch/hermes-agent/issues/11424) | Support JMAP in email integration | gateway, platform/email | **Baixo** — protocolo alternativo a IMAP |

### Sinais de Roadmap

1. **Desktop como plataforma prioritária:** 4+ PRs focados em desktop (Kanban, Context Cockpit, Memory panel, locale zh-Hans), indicando investimento na experiência desktop.

2. **Autonomia e auto-melhoria:** O PR #61645 (HAEE) e a issue #3506 (Durable Feedback Routing) sugerem direção estratégica para Hermes "self-improving".

3. **Providers alternativos:** LM Studio, Nika, JMAP — diversificação de integrações além dos grandes provedores.

4. **Internacionalização:** Demanda por Chinese (zh-Hans) e Vietnamese IME (bug #39636) indicam base de usuários global crescente.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas (Issues Ativas)

| Dor | Issue | Severidade | Plataforma |
|------|-------|------------|------------|
| **Sem suporte a proxy corporativo** | [#5454](https://github.com/NousResearch/hermes-agent/issues/5454) | P1 | Todas |
| **Desktop não abre após update** | [#60412](https://github.com/NousResearch/hermes-agent/pull/60412) | P2 | Windows (corrigido) |
| **Processos em background morrem inesperadamente** | [#41225](https://github.com/NousResearch/hermes-agent/issues/41225) | P2 | Todas |
| **Fonte ilegível no Desktop em telas pequenas/HiDPI** | [#45736](https://github.com/NousResearch/hermes-agent/issues/45736) | P3 | Desktop |
| **Memória trava em writes (drift guard false-positive)** | [#61523](https://github.com/NousResearch/hermes-agent/issues/61523) | P2 | Todas |
| **GM-5.2 com context length errado (200K vs 1M)** | [#47970](https://github.com/NousResearch/hermes-agent/issues/47970) | P2 | Z.AI |
| **Typing em Vietnamese no Desktop perde caracteres** | [#39636](https://github.com/NousResearch/hermes-agent/issues/39636) | P3 | macOS Desktop |
| **Slack bot não sinaliza habilidade para novos canais** | [#61635](https://github.com/NousResearch/hermes-agent/pull/61635) | P3 | Slack |

### Cenários de Uso Emergentes

1. **Uso corporativo/VPN:** O bug de proxy (#5454) não resolvido há 3 meses indica base corporativa significativa.
2. **Uso em Desktop com sessões longas:** Context Cockpit (#61633) e Kanban (#61173) sugerem usuários em sessões prolongadas de trabalho.
3. **Integração com Slack (multi-canal):** Issues de Slack (#46990, #61635) indicam adoção em ambientes team.
4. **Usuários internacionais:** Demanda por zh-Hans e Vietnamese IME confirmam alcance global.

### Satisfação/Insatisfação Geral

**Sinais negativos:**
- Bug #5454 (proxy) aberto há 95+ dias sem resolução — frustração acumulada.
- Regressão do desktop app (#60412) indica risco em atualizações.
- Bugs recorrentes de roteamento de providers sugerem complexidade não dominada.

**Sinais positivos:**
- 9 👍 em #45736 (font size) demonstra engajamento positivo com desktop.
- Alta volumetria de PRs (50) indica comunidade ativa de contribuidores.
- Correções rápidas de bugs críticos (zai provider pool, Feishu tables) mostram responsiveness.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Estagnadas

| # | Título | Idade | Comentários | Prioridade | Nota |
|---|--------|-------|-------------|------------|------|
| [#5454](https://github.com/NousResearch/hermes-agent/issues/5454) | Proxy support for LLM API calls | ~95 dias | 7 | **P1** | Apenas Telegram respeita proxy — impacto corporativo |
| [#3506](https://github.com/NousResearch/hermes-agent/issues/3506) | Durable Feedback Routing | ~104 dias | 3 | P3 | Feature de memória/skill/request — potencial estratégico |
| [#11424](https://github.com/NousResearch/hermes-agent/issues/11424) | Support JMAP in email | ~85 dias | 2 | P3 | Proposta de usuário, sem detalhe técnico |
| [#41190](https://github.com/NousResearch/hermes-agent/issues/41190) | Unified plugin route selector | ~94 dias | 8 | P3 | Alta discussão — demanda real não endereçada |
| [#38963](https://github.com/NousResearch/hermes-agent/issues/38963) | Desktop setup fail | ~36 dias | 9

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório de Projeto: PicoClaw
## Data de Referência: 2026-07-10

---

## 1. Panorama do Dia

O projeto PicoClaw apresenta **alta atividade comunitária** nesta data, com 16 PRs e 3 issues atualizadas nas últimas 24 horas. A saúde geral é positiva: 4 PRs foram fechadas/merged (incluindo correções de estabilidade e updates de dependências), enquanto 12 PRs aguardam review — algumas com sinalização stale. Não houve releases novas, sugerindo que a equipe está em fase de consolidação pré-lançamento. A base de código permanece em manutenção ativa com foco em estabilidade (correções de bugs) e modernização de dependências via dependabot.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24 horas.**

O último release estável mencionado nos dados é **v0.2.9** (git 2992), referencedo na issue #3206. Não há notas de migração ou breaking changes disponíveis para este período.

---

## 3. Progresso do Projeto

### PRs Fechadas/Merged Hoje (4 total)

| # | PR | Autor | Descrição | Impacto |
|---|-----|-------|-----------|---------|
| #3226 | [fix(tools): stop write_file from coaching destructive overwrite](https://github.com/sipeed/picoclaw/pull/3226) | ACMYuechen | Remove orientação do modelo para sobrescrever arquivos existentes indevidamente | **Segurança/Erros** — previne comportamento perigoso do agente |
| #3171 | [fix(line): add ok checks for sync.Map type assertions in Send](https://github.com/sipeed/picoclaw/pull/3171) | chengzhichao-xydt | Adiciona verificações `ok` em type assertions de `sync.Map` no canal LINE | **Estabilidade** — previne potential panics |
| #3213 | [build(deps): bump aws-sdk config 1.32.25 → 1.32.27](https://github.com/sipeed/picoclaw/pull/3213) | dependabot[bot] | Atualização de dependência AWS SDK | **Manutenção** |
| #3207 | [build(deps): bump copilot-sdk 0.2.0 → 1.0.5](https://github.com/sipeed/picoclaw/pull/3207) | dependabot[bot] | Upgrade significativo do Copilot SDK (0.2.0 → 1.0.5) | **Manutenção/Melhoria** — nova versão major |

### Destaque de Progresso

A PR #3226 representa uma melhoria importante de UX/segurança: o tool `write_file` deixará de "ensinar" o modelo a sobrescrever arquivos, alinhando comportamento com práticas seguras de edição de arquivos.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Atividade

| # | Título | Comentários | 👍 | Tipo |
|---|--------|-------------|----|------|
| #3201 | [Feature] Support streaming output for QQ channel | 2 | 0 | Feature Request |
| #3206 | v2→v3 config migration fails with false 'unknown field(s)' | 1 | 0 | Bug |
| #3203 | [BUG] Matrix sync loop has no reconnection logic | 1 | 0 | Bug |

### Análise das Demandas

**#3201 — Streaming para Canal QQ:** A comunidade demonstra interesse em paridade de features entre canais. Telegram e Pico WebSocket já implementam `StreamingCapable`, mas QQ está defasado. Este é um **sinal de roadmap claro**: streaming incremental de respostas LLM token-by-token é demanda ativa.

**#3206 — Migração de Config v2→v3:** Bug de migração afeta usuários atualizando, com campos legítimos (`build_info`, `session.dm_scope`) sendo rejeitados como "desconhecidos". Impacto: **bloqueador de upgrade**.

**#3203 — Matrix sem Reconnect:** Problema de resiliência: após interrupção de rede, o loop `/sync` morre silenciosamente. Semanticamente crítico para implantações em produção com systemd.

---

## 5. Bugs e Estabilidade

### Bugs Reportados (3 issues)

| Severidade | # | Descrição | Status |
|------------|---|-----------|--------|
| **Alta** | #3206 | Migração v2→v3 falha com campos legítimos marcados como "desconhecidos" | Open, stale |
| **Alta** | #3203 | Matrix sync morre após interrupção de rede sem reconnect automático | Open, stale |
| **Média** | #3180 | CLI dropa batch inteiro de tool calls se apenas 1 for malformado | Open, stale (PR #3180 para fix) |

### Riscos de Estabilidade

- **Matrix Channel**: Ausência de reconnection logic representa risco de downtime silencioso em produção.
- **Config Migration**: Bloqueador de adoção para usuários v2 existentes.
- **CLI Tool Calls**: Comportamento "all-or-nothing" pode perder tool calls válidos por causa de 1 inválido.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Propostas

| # | Título | Autor | Descrição | Potencial Impacto |
|---|--------|-------|-----------|-------------------|
| #3201 | [Feature] Support streaming output for QQ channel | YsLtr | Streaming token-by-token para canal QQ | Alta — paridade entre canais |
| #3163 | [feat(bedrock)] Leverage Converse prompt caching via cache points | loafoe | Implementa prompt caching no AWS Bedrock via cache points | Média — otimização de custos/desempenho |
| #3118 | Add remote Pico WebSocket mode to picoclaw agent | jp39 | Modo remoto para comando `picoclaw agent` | Média — flexibilidade de deployment |
| #3115 | Fix inline data URL media extraction for generic tool output | jp39 | Corrige corrupção de histórico ao tratar URLs data: como anexos | Média — correção de comportamento incorreto |

### Sinais de Roadmap

1. **Streaming Universal**: A demanda por streaming em QQ (#3201) indica que a estratégia é ter todos os canais com capacidade de streaming. Telegram e WebSocket já têm; falta QQ e potencialmente outros.

2. **AWS Bedrock**: A PR #3163 sugere investimento em otimização de custos com prompt caching, feature que pode reduzir bills em ~10x para cache hits.

3. **Modularidade**: PR #3222 (refactor DeltaChat) e #3118 (remote WebSocket mode) indicam tendência de arquitetura modular e flexível.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Dor | Evidência | Severidade |
|-----|-----------|------------|
| **Migração quebrada v2→v3** | #3206: "Running `picoclaw status` (or any command that loads config) fails" | Crítica |
| **Matrix morre silenciosamente** | #3203: "silent death after network/server disruption" | Alta |
| **Prompt caching não funciona** | #3163: Implementação atual não suporta cache points da AWS | Média |
| **Copilot SDK desatualizado** | PR #3207: Upgrade de 0.2.0 → 1.0.5 mostra evolução necessária | Baixa-Manutenção |
| **Suporte ARMv7 ausente** | #3205: Raspberry Pi 3 B+ não suportado adequadamente | Média (IoT/Edge) |

### Cenários de Uso Emergentes

- **IoT/Edge Computing**: #3205 indica uso em Raspberry Pi com gateway 9router
- **Multi-canal**: Integração QQ, Matrix, Telegram, LINE demonstra foco em agregação de canais
- **Remote Agents**: #3118 adiciona flexibilidade para arquiteturas distribuídas

---

## 8. Backlog que Merece Atenção

### Issues/PRs sem Resposta ou Stale

| # | Tipo | Título | Idade | Prioridade | Ação Recomendada |
|---|------|--------|-------|------------|------------------|
| #3206 | Issue | v2→v3 config migration fails | ~8 dias | **Alta** | Triagem urgente — bloqueia upgrades |
| #3203 | Issue | Matrix sync loop has no reconnection | ~8 dias | **Alta** | Design de reconnection logic |
| #3205 | PR | 9router gateway + ARMv7 support | ~8 dias | **Média** | Review e merge (facilita IoT) |
| #3204 | PR | Restore Azure dependency freeze baseline | ~8 dias | **Média** | Verificar compliance de supply chain |
| #3180 | PR | Skip tool calls with invalid arguments | ~14 dias | **Média** | Review — corrige comportamento perigoso |
| #3163 | PR | Bedrock prompt caching | ~17 dias | **Média** | Review técnico —feature de custos |
| #3222 | PR | DeltaChat refactor (-320LOC) | ~7 dias | **Baixa** | Code review — cleanup valioso |

### Recomendações Imediatas

1. **#3206 e #3203** são bloqueadores de produção que precisam de triagem urgente
2. **PRs dependabot** (#3238, #3237, #3236, #3235) abertas hoje merecem merge rápido para manter dependências atualizadas
3. **#3226** (write_file coaching) foi fechada — verificar se foi mergeada ou revertida

---

## Métricas Resumidas (Últimas 24h)

| Métrica | Valor |
|---------|-------|
| Issues abertas/ativas | 3 |
| PRs abertas | 12 |
| PRs fechadas/merged | 4 |
| Releases | 0 |
| Taxa de atividade | **Alta** |
| Bugs de severidade alta | 2 |
| Features solicitadas | 1+ (streaming QQ) |

---

*Relatório gerado automaticamente com base em dados GitHub de 2026-07-10. Todos os links referenciam github.com/sipeed/picoclaw.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório de Projeto IronClaw — 2026-07-10

---

## 1. Panorama do Dia

O projeto IronClaw demonstra **alta atividade operacional** nas últimas 24h, com 32 issues e 50 PRs atualizados. Observa-se um volume significativo de **bugs relacionados a notificações, fluxos de autenticação (especialmente Slack) e estabilidade de execuções**, indicando que a equipe está em ciclo intenso de QA e estabilização. O trabalho de refatoração arquitetura NEA-25 (unificação de extensões) domina o pipeline de PRs, sugerindo progresso contínuo na consolidação do modelo de extensões. Não houve releases formais neste período, embora a release 0.29.1 (via #5598) tenha sido documentada anteriormente.

---

## 2. Lançamentos

**Nenhuma nova release** foi publicada nas últimas 24h.

A release mais recente documentada (detalhada em #5598) incrementa para:

| Crate | Versão Anterior | Nova Versão | Tipo de Mudança |
|-------|-----------------|-------------|-----------------|
| `ironclaw` | 0.24.0 | **0.29.1** | — |
| `ironclaw_common` | 0.4.2 | **0.5.0** | ⚠️ Breaking changes |
| `ironclaw_skills` | 0.3.0 | **0.4.0** | ⚠️ Breaking changes |
| `ironclaw_safety` | 0.2.2 | **0.2.3** | Compatível |

**Breaking changes em `ironclaw_common` 0.5.0:** O diff indica alterações na API de failure handling, potencialmente impactando integrações dependentes diretamente dessa crate.

---

## 3. Progresso do Projeto

### PRs Fechados/Merged (22 total nas últimas 24h)

| PR | Autor | Tamanho | Impacto | Link |
|----|-------|---------|---------|------|
| #5894 | serrrfirat | L | **Fix WebUI v2 live canary** — Corrige waits de resposta final do assistente em testes canary | [Ver PR](https://github.com/nearai/ironclaw/pull/5894) |
| #5861 | hanakannzashi | — | **Require IronLoop fix agents validação** — Garante que agentes validem fixabilidade antes de editar | [Ver PR](https://github.com/nearai/ironclaw/pull/5861) |
| #5827 | italic-jinxin | — | **Clean up orphaned v1 coverage fixtures** — Remove fixtures não utilizados | [Ver PR](https://github.com/nearai/ironclaw/pull/5827) |
| #5826 | italic-jinxin | — | **Remove legacy v1 coverage test binaries** — Elimina binaries de teste legados | [Ver PR](https://github.com/nearai/ironclaw/pull/5826) |
| #4338 | joe-rlo | — | **Fix misleading execution driver error** — Corrige erro enganoso em estado desconectado | [Ver PR](https://github.com/nearai/ironclaw/pull/4338) |
| #5504 | joe-rlo | — | **Fix routine creation hangs** — Resolve hang em criação de rotinas | [Ver PR](https://github.com/nearai/ironclaw/pull/5504) |
| #5706 | joe-rlo | — | **Fix sidebar raw UUID display** — Corrige exibição de UUID no sidebar | [Ver PR](https://github.com/nearai/ironclaw/pull/5706) |
| #5557 | joe-rlo | — | **Fix logs deep link** — Corrige carregamento de conversa via deep link | [Ver PR](https://github.com/nearai/ironclaw/pull/5705) |
| #5705 | joe-rlo | — | **Fix terminal icon toggle** — Adiciona opção de desabilitar ícone | [Ver PR](https://github.com/nearai/ironclaw/pull/5705) |

**Destaque de progresso:** A closure do issue #5504 (rotinas travando sem retorno) representa uma melhoria significativa na experiência do usuário, eliminando um dos bloqueios críticos de usabilidade.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários/reações)

| Issue | Título | Comentários | 👍 | Link |
|-------|--------|-------------|-----|------|
| #5553 | Approval notifications disappear | 4 | 0 | [Ver Issue](https://github.com/nearai/ironclaw/issues/5553) |
| #5701 | Activity panel hides tool details | 3 | 0 | [Ver Issue](https://github.com/nearai/ironclaw/issues/5701) |
| #5504 | Routine creation hangs *(CLOSED)* | 2 | 0 | [Ver Issue](https://github.com/nearai/ironclaw/issues/5504) |
| #5706 | Sidebar shows raw thread ID *(CLOSED)* | 2 | 0 | [Ver Issue](https://github.com/nearai/ironclaw/issues/5706) |
| #5557 | Logs deep link issues *(CLOSED)* | 2 | 0 | [Ver Issue](https://github.com/nearai/ironclaw/issues/5557) |
| #5705 | Terminal icon no disable option *(CLOSED)* | 2 | 0 | [Ver Issue](https://github.com/nearai/ironclaw/issues/5705) |
| #2601 | Feature: CLI/TUI for Managing Secrets | 1 | 0 | [Ver Issue](https://github.com/nearai/ironclaw/issues/2601) |
| #5838 | Context compaction error | 1 | 0 | [Ver Issue](https://github.com/nearai/ironclaw/issues/5838) |

### Análise de Demandas

**Padrão dominante:** O tema de **notificações e fluxo de aprovações** concentra o maior engajamento (4+ comentários em #5553), sinalizando uma dor recorrente na UX. A issue #5553 descreve que notificações de aprovação desaparecem ao clicar, comprometendo a capacidade do usuário de rastrear ações pendentes.

**Interesse em documentação:** A issue #2601 (CLI/TUI para Secrets) permanece aberta desde abril, indicando demanda por melhores práticas de autenticação não atendida pela documentação atual.

---

## 5. Bugs e Estabilidade

### Distribuição por Severidade

| Severidade | Count | Issues Críticas (P1) | Issues Altas (P2) | Issues Médias (P3) |
|------------|-------|----------------------|-------------------|-------------------|
| **P1** | 1 | #5877 (Slack delivery to wrong user) | — | — |
| **P2** | 17 | — | Maioria das issues abertas | — |
| **P3** | 7 | — | — | UI/navigation bugs |

### Bugs P1 (Críticos)

| Issue | Título | Impacto | Link |
|-------|--------|---------|------|
| **#5877** | Slack notification delivered to wrong user | **Vazamento de dados sensíveis** — Notificações enviadas a usuário não relacionado | [Ver Issue](https://github.com/nearai/ironclaw/issues/5877) |

> ⚠️ **Prioridade máxima:** Este bug representa falha de segurança/confidencialidade, requerendo correção emergencial.

### Bugs P2 (Altos) — Principais

| Issue | Título | Link |
|-------|--------|------|
| #5553 | Approval notifications disappear | [Ver](https://github.com/nearai/ironclaw/issues/5553) |
| #5701 | Activity panel hides tool details | [Ver](https://github.com/nearai/ironclaw/issues/5701) |
| #5838 | Context compaction error after tool execution | [Ver](https://github.com/nearai/ironclaw/issues/5838) |
| #5886 | Pending approval blocks subsequent runs | [Ver](https://github.com/nearai/ironclaw/issues/5886) |
| #5887 | Run hits max action limit and discards progress | [Ver](https://github.com/nearai/ironclaw/issues/5887) |
| #5878 | Revoked GitHub token produces misleading errors | [Ver](https://github.com/nearai/ironclaw/issues/5878) |
| #5882 | Repeated Slack reconnect breaks auth flow | [Ver](https://github.com/nearai/ironclaw/issues/5882) |
| #5880 | Slack auth completed externally not reflected in UI | [Ver](https://github.com/nearai/ironclaw/issues/5880) |
| #5883 | Generic model output error after successful tool | [Ver](https://github.com/nearai/ironclaw/issues/5883) |
| #5836 | Routine fails with "No thread attached" | [Ver](https://github.com/nearai/ironclaw/issues/5836) |
| #5885 | Approval notification opens action without message | [Ver](https://github.com/nearai/ironclaw/issues/5885) |
| #5884 | Routine loses credentials after token revocation | [Ver](https://github.com/nearai/ironclaw/issues/5884) |

### Bugs P3 (Médios)

| Issue | Título | Link |
|-------|--------|------|
| #5891 | "Last completed" shows active run timestamp | [Ver](https://github.com/nearai/ironclaw/issues/5891) |
| #5890 | Slack notifications use inconsistent sender | [Ver](https://github.com/nearai/ironclaw/issues/5890) |
| #5889 | "Load older messages" button non-functional | [Ver](https://github.com/nearai/ironclaw/issues/5889) |
| #5888 | Cannot delete old threads | [Ver](https://github.com/nearai/ironclaw/issues/5888) |
| #5879 | Stale error banner persists after success | [Ver](https://github.com/nearai/ironclaw/issues/5879) |

**Análise:** O cluster de bugs P2 em autenticação Slack (#5880, #5881, #5882) e gerenciamento de credenciais (#5878, #5884) indica necessidade de revisão do fluxo OAuth/ webhook Slack.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Feature Requests Abertas

| Issue | Título | Autor | Status | Link |
|-------|--------|-------|--------|------|
| #2601 | **CLI/TUI for Managing Secrets** | ek775 | Proposta (aberta desde 2026-04) | [Ver Issue](https://github.com/nearai/ironclaw/issues/2601) |
| #5897 | Decompose first-party skill activation module | serrrfirat | Tech Debt | [Ver Issue](https://github.com/nearai/ironclaw/issues/5897) |
| #5859 | Daily failure taxonomy report | pranavra99 | Observabilidade | [Ver Issue](https://github.com/nearai/ironclaw/issues/5859) |

### Sinais de Roadmap

1. **NEA-25 (Unified Extension Surfaces):** Stack de 7 PRs em progresso (#5833 → #5842 → #5839 → #5845 → #5847 → #5848 → #5849), consolidando modelo de extensões com superfície unificada (tools, channels, auth).

2. **Melhorias de Observabilidade:** PRs como #5859 (daily failure taxonomy) e #5844 (Computation section para system prompt) indicam foco em diagnóstico e controle de qualidade.

3. **Segurança de Credenciais:** A frequência de bugs de autenticação (#5878, #5884) e a feature request #2601 sugerem que um sistema mais robusto de gerenciamento de secrets está no radar.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Categoria | Descrição | Impacto | Frequência |
|-----------|-----------|---------|------------|
| **Notificações de aprovação** | Notificações desaparecem ou não aparecem; impossível rastrear aprovações pendentes | Alto | Múltiplas issues (#5553, #5885, #5886) |
| **Fluxo de autenticação Slack** | Reautenticação confusa, canais errados, mensagens duplicadas, estado quebrado após reconnect | Crítico | 6+ issues (#5880, #5881, #5882, etc.) |
| **Perda de contexto em runs longos** | Runs atingem limite de ações e descartam progresso; erros genéricos sem detalhe | Alto | #5887, #5883 |
| **UI/UX de atividade** | Painel de atividade não atualiza em tempo real, não mostra detalhes de tools | Médio | #5701 |
| **Gestão de threads** | Não é possível deletar threads antigos; deep links falham | Baixo | #5888, #5557 |

### Cenários de Uso Problemáticos

1. **Automação agendada com falha silenciosa:** Rotinas configuradas para executar periodicamente falham sem feedback claro (#5836, "No thread attached").

2. **Revogação de token não detectada:** Quando tokens externos (GitHub) são revogados, o sistema mostra erros enganosos em vez de solicitar reautenticação (#5878).

3. **Vazamento de notificações Slack:** Notificações entregues ao usuário errado (#5877) — risco de segurança.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta (requerem triagem)

| Issue | Título | Criado | Atualizado | Link |
|-------|--------|--------|------------|------|
| #2601 | CLI/TUI for Managing Secrets | 2026-04-18 | 2026-07-09 | [Ver](https://github.com/nearai/ironclaw/issues/2601) |
| #5838 | Context compaction error | 2026-07-08 | 2026-07-09 | [Ver](https://github.com/nearai/ironclaw/issues/5838) |
| #5836 | "No thread attached" on scheduled runs | 2026-07-08 | 2026-07-09 | [Ver](https://github.com/nearai/ironclaw/issues/5836) |
| #5897 | Decompose first-party skill activation module | 2026-07-09 | 2026-07-09 | [Ver](https://github.com/nearai/ironclaw/issues/5897) |
| #5859 | Daily failure taxonomy | 2026-07-09 | 2026-07-09 | [Ver](https://github.com/nearai/ironclaw/issues/5859) |

### PRs Abertos Críticos (em review)

| PR | Título | Tamanho | Risco | Link |
|----|--------|---------|-------|------|
| **#5899** | test(live-canary): QA 9 automation delivery probes | XL | medium | [Ver PR](https://github.com/nearai/ironclaw/pull/5899) |
| **#5898** | fix(reborn): Slack automations — per-trigger delivery targets, ID→name enrichment | XL | low | [Ver PR](https://github.com/nearai/ironclaw/pull/5898) |
| #5857 | perf(reborn): reduce API capacity pre-model latency | XL | low | [Ver PR](https://github.com/nearai/ironclaw/pull/5857) |
| #5831 | fix(webui): scope workspace and memory views | L | low | [Ver PR](https://github.com/nearai/ironclaw/pull/5831) |

> **Nota:** O PR #5898 aborda diretamente os bugs de Slack delivery (#5877, #5881), requerendo review prioritária.

---

## Métricas Resumidas

| Indicador | Valor |
|-----------|-------|
| Issues abertas/ativas | 24 |
| Issues fechadas (24h) | 8 |
| PRs abertos | 28 |
| PRs merged/fechados | 22 |
| Novas releases | 0 |
| Bugs P1 críticos | 1 |
| Bugs P2 altos | 17 |
| Bugs P3 médios | 7 |
| Features solicitadas | 1+ |

---

*Relatório gerado em 2026-07-10 com base em dados do GitHub — [nearai/ironclaw](https://github.com/nearai/ironclaw)*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do Projeto CoPaw — 2026-07-10

---

## 1. Panorama do dia

O projeto CoPaw (QwenPaw) apresenta **alta atividade** em 10 de julho de 2026, com 50 PRs e 36 issues atualizados nas últimas 24 horas. A release **v2.0.0-beta.5** foi publicada com correções para o sistema de eviction index no scroll. O desenvolvimento está fortemente focado em estabilização da versão 2.0, com múltiplos PRs de bugfix sendo merged — incluindo correções de segurança críticas (rm bypass), regressões em ferramentas (tool-call parsing) e cobertura de testes (Sprint 4.1 com 21 novos casos). A comunidade demonstra engajamento ativo, especialmente em issues de bugs de canais (Feishu, DingTalk, Matrix) e funcionalidades solicitadas para a UI.

---

## 2. Lançamentos

### v2.0.0-beta.5

**Changes:**
- **fix(scroll):** Corrige label de spans evicted no eviction index ([#5848](https://github.com/agentscope-ai/QwenPaw/pull/5848))
- **fix(scroll):** ancora o live turn com seam banner no eviction index ([PR #58](https://github.com/agentscope-ai/QwenPaw/pull/58))

**Análise:** Release menor focada em estabilidade do sistema de scroll/eviction. Sem breaking changes detectados.

> **Nota:** Esta é uma versão beta. Não há notas de migração específicas, mas usuários em beta 3/4 enfrentam issues documentados (ver seção 5).

---

## 3. Progresso do Projeto

### PRs Fechados/Merged Hoje (principais)

| PR | Descrição | Impacto |
|----|-----------|---------|
| [#5895](https://github.com/agentscope-ai/QwenPaw/pull/5895) | Sprint 4.1 — 21 casos de teste para `/api/tool-calls/*` e `/api/console/chat/task` | **Qualidade** — Cobertura de integração crítica |
| [#5899](https://github.com/agentscope-ai/QwenPaw/pull/5899) | Update docs para QwenPaw 2.0 | **Docs** — Manutenção da documentação |
| [#5905](https://github.com/agentscope-ai/QwenPaw/pull/5905) | Usa objeto Error estruturado no envelope para compatibilidade com frontend SDK | **Bugfix** — Corrige display de erros no chat |
| [#5866](https://github.com/agentscope-ai/QwenPaw/pull/5866) | Split rm detection/extraction para prevenir bypass `${HOME}` | **Segurança Crítica** — Fecha vetor #5090 |
| [#5841](https://github.com/agentscope-ai/QwenPaw/pull/5841) | Recupera argumentos JSON de tool-call com whitespace prefixado | **Bugfix** — Melhora robustez de tool calls |
| [#5810](https://github.com/agentscope-ai/QwenPaw/pull/5810) | Testes de regressão para sessões grandes (#5479) | **Qualidade** — 29 casos para helpers de chat |
| [#5812](https://github.com/agentscope-ai/QwenPaw/pull/5812) | Suite de unit tests para channels (176 casos) | **Qualidade** — Cobertura completa de canais |
| [#5813](https://github.com/agentscope-ai/QwenPaw/pull/5813) | 43 testes unitários para install/runtime/security | **Qualidade** — Regressão geral |
| [#5870](https://github.com/agentscope-ai/QwenPaw/pull/5870) | Default `preserve_thinking` para `false` | **Bugfix** — Previne loops de reasoning |
| [#5654](https://github.com/agentscope-ai/QwenPaw/pull/5654) | Surface DingTalk delivery failures | **Bugfix** — Melhora feedback em canais |

### PRs Abertos em Destaque

| PR | Descrição | Status |
|----|-----------|--------|
| [#5908](https://github.com/agentscope-ai/QwenPaw/pull/5908) | Reduce reasoning alignment log spam | Aberto — Fix para #5771 |
| [#5761](https://github.com/agentscope-ai/QwenPaw/pull/5761) | Surface malformed tool-call input to model | Aberto — Fix para #5717 |
| [#5739](https://github.com/agentscope-ai/QwenPaw/pull/5739) | Support selecting and auto-copying message text | Under Review — UX improvement |
| [#5692](https://github.com/agentscope-ai/QwenPaw/pull/5692) | Add reranker para memory search (reme0.4) | Under Review — Feature |
| [#5187](https://github.com/agentscope-ai/QwenPaw/pull/5187) | Windows desktop GUI automation com UIA + Tauri | Aberto — Feature aguardada |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

1. **[#2291](https://github.com/agentscope-ai/QwenPaw/issues/2291)** — Help Wanted: Open Tasks (64 comentários)
   - **Tipo:** Meta/Community
   - **Resumo:** Issue central de tarefas abertas para contribuidores. Prioridade P0-P2.
   - **Sinal:** Comunidade ativa em contribuições. Novas tarefas sendo mapeadas (ex: #5909 — Task 1: Configurable theme module).

2. **[#5757](https://github.com/agentscope-ai/QwenPaw/issues/5757)** — Bug: Feishu (飞书) não responde (13 comentários)
   - **Tipo:** Bug
   - **Resumo:** Canal Feishu funciona na primeira mensagem mas não responde em conversas subsequentes.
   - **Severidade:** Alta — Impacta canal oficial.

3. **[#5379](https://github.com/agentscope-ai/QwenPaw/issues/5379)** — Bug: Internal Server Error ao iniciar via Python (10 comentários)
   - **Tipo:** Bug
   - **Resumo:** Erro interno ao acessar interface web após instalação pip.
   - **Status:** Fechado — Corrigido presumivelmente.

4. **[#5879](https://github.com/agentscope-ai/QwenPaw/issues/5879)** — Feature: Toggle para desabilitar sandbox (6 comentários)
   - **Tipo:** Enhancement
   - **Resumo:** Demanda por opção de disable sandbox em ambientes confiáveis.
   - **Sinal de roadmap:** Feature request recorrente para 2.0.

5. **[#5797](https://github.com/agentscope-ai/QwenPaw/issues/5797)** — Feature: Toggle para popups de cron tasks (6 comentários)
   - **Tipo:** Enhancement
   - **Resumo:** Usuários querem controle granular sobre notificações de tarefas agendadas.
   - **Sinal:** Discussão sobre default toggle.

### Análise de Demandas

- **Canais de comunicação** dominam bugs reportados (Feishu, DingTalk, Matrix, Enterprise WeChat).
- **Sessões longas** e performance de UI são preocupações recorrentes (#5479 — 500KB crash).
- **Sandbox/restrição de ambiente** é ponto de friction significativo para power users.

---

## 5. Bugs e Estabilidade

### Bugs Críticos (Alta Severidade)

| Issue | Descrição | Status | Severidade |
|-------|-----------|--------|------------|
| [#5856](https://github.com/agentscope-ai/QwenPaw/issues/5856) | Tool_call structure lost during context compaction — 400 errors | **Aberto** | 🔴 Alta |
| [#5860](https://github.com/agentscope-ai/QwenPaw/issues/5860) | 2.0: Conversas perdidas e loops infinitos | **Aberto** | 🔴 Alta |
| [#5872](https://github.com/agentscope-ai/QwenPaw/issues/5872) | Docker: browser_use falha por dbus/Chromium | **Aberto** | 🔴 Alta |
| [#5906](https://github.com/agentscope-ai/QwenPaw/issues/5906) | 2.0b4: Anti-repetition trigger incorreto | **Aberto** | 🔴 Alta |
| [#5090](https://github.com/agentscope-ai/QwenPaw/issues/5090) | `${HOME}` bypass em rm detection | **Fechado** | ✅ Corrigido em #5866 |

### Bugs Médios

| Issue | Descrição | Status |
|-------|-----------|--------|
| [#5771](https://github.com/agentscope-ai/QwenPaw/issues/5771) | WARNING logs spamma console | **Aberto** — PR #5908 em review |
| [#5858](https://github.com/agentscope-ai/QwenPaw/issues/5858) | Assistant messages dropped silenciosamente | **Fechado** |
| [#5328](https://github.com/agentscope-ai/QwenPaw/issues/5328) | Deepseek agent trava em thinking | **Fechado** |
| [#5868](https://github.com/agentscope-ai/QwenPaw/issues/5868) | Matrix channel token auth falha | **Fechado** |
| [#5835](https://github.com/agentscope-ai/QwenPaw/issues/5835) | `/stop` causa cancelamento cruzado em DM | **Fechado** |

### Bugs Menores/UI

| Issue | Descrição |
|-------|-----------|
| [#5479](https://github.com/agentscope-ai/QwenPaw/issues/5479) | Sessões >500KB crasham frontend |
| [#5863](https://github.com/agentscope-ai/QwenPaw/issues/5863) | Imagens em Coding Session mostram binary |
| [#5893](https://github.com/agentscope-ai/QwenPaw/issues/5893) | Enterprise WeChat QR code falha (regex greedy) |
| [#5911](https://github.com/agentscope-ai/QwenPaw/issues/5911) | Windows AppContainer ignora SHELL configurado |

### Regressões Detectadas em 2.0 Beta

- **Loop de reasoning/infinite:** Issues [#5860](https://github.com/agentscope-ai/QwenPaw/issues/5860), [#5906](https://github.com/agentscope-ai/QwenPaw/issues/5906), [#5896](https://github.com/agentscope-ai/QwenPaw/issues/5896)
- **Contador de iterações:** Issue [#5896](https://github.com/agentscope-ai/QwenPaw/issues/5896) —計次 baseado em trigger anterior em vez de nova mensagem

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Solicitadas com Maior Demanda

| Issue | Descrição | Comentários | Potencial Roadmap |
|-------|-----------|-------------|-------------------|
| [#5879](https://github.com/agentscope-ai/QwenPaw/issues/5879) | Toggle para desabilitar sandbox | 6 | 🔥 Alta |
| [#5903](https://github.com/agentscope-ai/QwenPaw/issues/5903) | Grupos de sessões + import/export | 1 | 🔥 Alta |
| [#5711](https://github.com/agentscope-ai/QwenPaw/issues/5711) | Análise de短板 + roadmap comparativo | 4 | 📊 Estratégico |
| [#5909](https://github.com/agentscope-ai/QwenPaw/issues/5909) | Configurable theme/skin module (Task #1) | 1 | 🎨 UI |
| [#5900](https://github.com/agentscope-ai/QwenPaw/issues/5900) | MCP streamable_http auto-reconnect | 1 | 🔧 Infra |
| [#5187](https://github.com/agentscope-ai/QwenPaw/pull/5187) | Windows UIA automation via Tauri | — | 🔜 Em desenvolvimento |

### Features UX/Console

| Issue | Descrição |
|-------|-----------|
| [#5739](https://github.com/agentscope-ai/QwenPaw/pull/5739) | Select + auto-copy text em mensagens |
| [#5797](https://github.com/agentscope-ai/QwenPaw/issues/5797) | Toggle popup para cron tasks |
| [#4767](https://github.com/agentscope-ai/QwenPaw/issues/4767) | Token info por sessão |

### Sinais de Roadmap

1. **Stabilização 2.0:** Beta 5 lançada; ainda há bugs críticos em beta 4 (loops, iterações).
2. **Windows como prioridade:** PR #5187 (UIA automation) demonstra foco em desktop Windows.
3. **MCP enhancements:** Suporte a reconnect (#5900) e reranker para memory (#5692).
4. **UI/Console:** Tema customizável (#5909) e melhorias de sessão (#5903, #4767).

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais

| Categoria | Problema | Evidência |
|-----------|----------|-----------|
| **Sandbox restritivo** | Impossibilita tarefas básicas (ex: instalar libs Python) | [#5879](https://github.com/agentscope-ai/QwenPaw/issues/5879) |
| **Canais instáveis** | Feishu/DingTalk/Matrix apresentam falhas intermitentes | [#5757](https://github.com/agentscope-ai/QwenPaw/issues/5757), [#5868](https://github.com/agentscope-ai/QwenPaw/issues/5868) |
| **Performance em sessões longas** | Arquivos >500KB crasham frontend | [#5479](https://github.com/agentscope-ai/QwenPaw/issues/5479) |
| **2.0 imatura** | Loops infinitos, perda de contexto, contagem de iterações errada | [#5860](https://github.com/agentscope-ai/QwenPaw/issues/5860), [#5906](https://github.com/agentscope-ai/QwenPaw/issues/5906) |
| **Docker em produção** | browser_use não funciona em containers | [#5872](https://github.com/agentscope-ai/QwenPaw/issues/5872) |

### Cenários de Uso Reportados

1. **Agentes de monitoramento (cron):** Necessidade de controle granular de notificações.
2. **Desenvolvimento local:** Integração com IDEs (Deepseek hangs).
3. **Enterprise (WeChat, DingTalk, Feishu):** Canais corporativos com requisitos específicos.
4. **Sessões de coding estendidas:** Suporte a imagens, arquivos grandes.

### Feedback Positivo

- **Comunidade ativa:** Issue #2291 demonstra engajamento de contribuidores.
- **Respostas rápidas:** many issues getting PR fixes same day (ex: #5864, #5866).

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta >7 dias

| Issue | Título | Criado | Comentários |
|-------|--------|--------|-------------|
| [#5711](https://github.com/agentscope-ai/QwenPaw/issues/5711) | QwenPaw短板分析 + roadmap竞品 | 2026-07-01 | 4 |
| [#5797](https://github.com/agentscope-ai/QwenPaw/issues/5797) | Toggle popup cron tasks | 2026-07-06 | 6 |
| [#5771](https://github.com/agentscope-ai/QwenPaw/issues/5771) | WARNING log spam | 2026-07-04 | 4 |

### Issues Estratégicos Pendentes

| Issue | Prioridade | Motivo |
|-------|------------|--------|
| [#5711](https://github.com/agentscope-ai/QwenPaw/issues/5711) | 🔴 Alta | Roadmap formal solicitado pela comunidade |
| [#5879](https://github.com/agentscope-ai/QwenPaw/issues/5879) | 🔴 Alta | Feature request de alto impacto (sandbox) |
| [#5903](https://github.com/agentscope-ai/QwenPaw/issues

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-07-10

## 1. Panorama do Dia

ZeroClaw mantém alta atividade de desenvolvimento com **30 issues e 50 PRs atualizados nas últimas 24h**, indicando uma sprint intensa de features para a versão 0.8.3. O projeto não publicou releases formais hoje, mas há um volume significativo de PRs em progresso (47 abertos), incluindo changesets de alta complexidade (tamanho XL). Os temas dominantes incluem estabilidade de runtimes, observabilidade em canais, e melhorias no gateway web. A saúde geral é **boa**, com foco em bugs P1 e P2 que afetam fluxos críticos como ferramentas MCP e gerenciamento de sessões.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

O projeto encontra-se em fase de desenvolvimento ativo da versão 0.8.3, com trackers dedicados para runtime, gateway, e observabilidade (issues #8071, #8070, #8073). A versão atual estável permanece em **0.8.2** conforme rastreado na RFC de governança (#6808).

---

## 3. Progresso do Projeto

### PRs Merged/Fechados Hoje

| # | Título | Área | Impacto |
|---|--------|------|---------|
| [#8382](https://github.com/zeroclaw-labs/zeroclaw/pull/8382) | Persist embedding identity e auto-migrate vectors | memory | Corretivo de migração de modelos — resolve perda de vetores ao trocar provider/model |
| [#8867](https://github.com/zeroclaw-labs/zeroclaw/pull/8867) | Wrap SqliteMemory embedder in Arc + flush before assert | memory | Teste de estabilidade — wrapping thread-safe do embedder |
| [#8904](https://github.com/zeroclaw-labs/zeroclaw/pull/8904) | Dismiss transcript highlight on blank side clicks | zerocode | UX — fecha highlight ao clicar nas margens do transcript |
| [#8843](https://github.com/zeroclaw-labs/zeroclaw/pull/8843) | Keep remaining local gate divergence explicit | CI | Higienização de CI — documenta divergências pós-alignment |

### PRs Abertos de Maior Relevância

- **[#8590](https://github.com/zeroclaw-labs/zeroclaw/pull/8590)** — `feat(sop)`: Web visual authoring experimental com fan-in de canais e git_forge unificado (size: XL, risco alto)
- **[#8901](https://github.com/zeroclaw-labs/zeroclaw/pull/8901)** — `chore(repo)`: Strip comment bureaucracy across tree com gate em CI (size: XL)
- **[#8443](https://github.com/zeroclaw-labs/zeroclaw/pull/8443)** — `feat(matrix)`: Single-message progress drafts (size: XL)
- **[#8922](https://github.com/zeroclaw-labs/zeroclaw/pull/8922)** — `feat(zerocode)`: Escolha de sessão salva na abertura (size: XL)

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| # | Título | Comentários | Área |
|---|--------|-------------|------|
| [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) | RFC: Work Lanes, Board Automation, and Label Cleanup | 13 | Governance |
| [#6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699) | tool_filter_groups é no-op para MCP tools | 9 | runtime/tool |
| [#6034](https://github.com/zeroclaw-labs/zeroclaw/issues/6034) | User message loss em single/multi-turn | 8 | runtime/daemon |
| [#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) | Local-First Mode para small models | 4 + 2 👍 | agent/provider |
| [#8550](https://github.com/zeroclaw-labs/zeroclaw/issues/8550) | OpenAI-compatible chat completions endpoint | 4 | gateway |

### Análise de Demandas

1. **Governança e processso**: A RFC #6808 domina o debate com 13 comentários, propondo automação de work lanes e labels para reduzir trabalho manual de mantenedores.

2. **Interoperabilidade**: Demanda crescente por endpoints OpenAI-compatíveis (#8550) para integração com clientes como Open WebUI e LobeChat.

3. **Local-first**: O issue #5287 demonstra interesse em modos compactos para modelos locais, evitando prompt leakage — feature com potencial de adoção significativo.

---

## 5. Bugs e Estabilidade

### Bugs P1 (Críticos — Impacto Alto)

| # | Título | Severidade | Status | Link |
|---|--------|------------|--------|------|
| #6699 | tool_filter_groups no-op para MCP tools + prefix-check bug | S1 | accepted | [#6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699) |
| #6034 | User message loss em diálogos | S1 | accepted | [#6034](https://github.com/zeroclaw-labs/zeroclaw/issues/6034) |
| #8334 | skills install/list/remove target data_dir errado | S2 | in-progress | [#8334](https://github.com/zeroclaw-labs/zeroclaw/issues/8334) |
| #8915 | agent_start/agent_end nunca emitidos para channel turns | S2 | in-progress | [#8915](https://github.com/zeroclaw-labs/zeroclaw/issues/8915) |

### Bugs P2 (Degradados — Impacto Médio)

| # | Título | Severidade | Link |
|---|--------|------------|------|
| #8762 | Anthropic provider usa timeout fixo para turns longos | S2 | [#8762](https://github.com/zeroclaw-labs/zeroclaw/issues/8762) |
| #8578 | zerocode não termina processo ao falhar start | S3 | [#8578](https://github.com/zeroclaw-labs/zeroclaw/issues/8578) |
| #8648 | ZeroCode config editor trata `<unset>` como texto editável | S2 | [#8648](https://github.com/zeroclaw-labs/zeroclaw/issues/8648) |

### PRs Corretivos Recentes

- **[#8866](https://github.com/zeroclaw-labs/zeroclaw/pull/8866)** — Compartilha MCP registry entre heartbeat ticks (corrige leak de stdio servers)
- **[#7836](https://github.com/zeroclaw-labs/zeroclaw/pull/7836)** — Usa resolved agent config para strict_tool_parsing e parallel_tools
- **[#8845](https://github.com/zeroclaw-labs/zeroclaw/pull/8845)** — Rotas live model switch via config/set no zerocode
- **[#8918](https://github.com/zeroclaw-labs/zeroclaw/pull/8918)** — Redact Slack tokens no leak detector

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Prioritárias em Progresso

| # | Título | Área | Tracker | Link |
|---|--------|------|---------|------|
| #8891 | Persistent memory — wire curation/relevance/operability | memory | tracker | [#8891](https://github.com/zeroclaw-labs/zeroclaw/issues/8891) |
| #8860 | Per-Agent In-Flight Prompt Counter no dashboard | gateway | web | [#8860](https://github.com/zeroclaw-labs/zeroclaw/issues/8860) |
| #7543 | Multi-session support no gateway web chat | gateway | web | [#7543](https://github.com/zeroclaw-labs/zeroclaw/issues/7543) |
| #7831 | Discord channel interaction-surface parity | channel | tracker | [#7831](https://github.com/zeroclaw-labs/zeroclaw/issues/7831) |
| #8550 | OpenAI-compatible chat completions endpoint | gateway | enhancement | [#8550](https://github.com/zeroclaw-labs/zeroclaw/issues/8550) |

### Novas Features Hoje

- **[#8919](https://github.com/zeroclaw-labs/zeroclaw/issues/8919)** — Right-click context menu no ZeroCode (Copy action)
- **[#8894](https://github.com/zeroclaw-labs/zeroclaw/issues/8894)** — Session archiving e cleanup controls no ZeroCode
- **[#8915](https://github.com/zeroclaw-labs/zeroclaw/issues/8915)** — Emit agent_start/agent_end para todos os turn paths

### Trackers v0.8.3 Ativos

| # | Escopo | Link |
|---|--------|------|
| #8071 | Runtime execution, agent loop, tools, skills | [#8071](https://github.com/zeroclaw-labs/zeroclaw/issues/8071) |
| #8070 | Gateway, web, ZeroCode, onboarding | [#8070](https://github.com/zeroclaw-labs/zeroclaw/issues/8070) |
| #8073 | Observability, CI, docs, dependencies | [#8073](https://github.com/zeroclaw-labs/zeroclaw/issues/8073) |
| #8363 | Config-driven runtime policy, routing, tool access | [#8363](https://github.com/zeroclaw-labs/zeroclaw/issues/8363) |

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

1. **Fluxo de skills quebrado em multi-agent**: O comando `zeroclaw skills install` direciona para `data_dir` que runtimes multi-agent não carregam, impedindo o fluxo "pull a skill and use it" (#8334).

2. **Timeout fixo em provedores Anthropic**: Usuários em tarefas longas (síntese de documentos extensos) enfrentam falhas após ~120s mesmo com trabalho legítimo em progresso (#8762).

3. **Confusão de session management no ZeroCode**: Usuários reportam dificuldade em criar, retomar, e arquivar sessões — ausência de controles discoverable (#8894).

4. **Provider indisponível após adicionar no Quickstart**: Adicionar provider pelo dashboard não reflete imediatamente no chat, exigindo reset (#8094).

### Cenários de Uso em Alta

- **Integração local-first**: Usuários querem rodar modelos locais (Ollama) sem prompt bloat e sem vazamento de instruções internas (#5287).
- **Interoperabilidade OpenAI**: Clientes como Open WebUI e LobeChat não conseguem conectar via protocolo padrão (#8550).
- **SOPs (Standard Operating Procedures)**: Feature experimental com alto interesse — workflows determinísticos para agentes executarem tarefas passo a passo (#8590).

---

## 8. Backlog que Merece Atenção

### Issues Sem Atividade Recente (Potenciais Stale)

| # | Título | Criado | Última Atualização | Área |
|---|--------|--------|-------------------|------|
| #5287 | Local-First Mode para Small Models | 2026-04-04 | 2026-07-09 | agent/provider |
| #7828 | UTF-8 char-boundary safety audit | 2026-06-17 | 2026-07-09 | channel/tool |
| #8071 | Tracker v0.8.3 runtime | 2026-06-20 | 2026-07-08 | runtime |
| #8073 | Tracker v0.8.3 observability | 2026-06-20 | 2026-07-08 | CI/docs |

### Issues com Tag `needs-author-action` Pendentes

- [#8571](https://github.com/zeroclaw-labs/zeroclaw/issues/8571) — Delegate OAuth credential fallback fix
- [#8616](https://github.com/zeroclaw-labs/zeroclaw/issues/8616) — Skills always:true frontmatter restoration
- [#8684](https://github.com/zeroclaw-labs/zeroclaw/issues/8684) — Model fallback notice no runtime
- [#8679](https://github.com/zeroclaw-labs/zeroclaw/issues/8679) — SOP documentation expansion

### Recomendações de Priorização

1. **Crítico**: Resolver bugs P1 de message loss (#6034) e tool_filter_groups MCP (#6699) antes da 0.8.3.
2. **Alta**: Avançar feature de OpenAI-compatibility (#8550) para expandir base de usuários.
3. **Média**: Revisar backlog de session management (#8894, #7543) para melhorar UX do ZeroCode.
4. **Documentação**: Expandir guias de canais (Telegram #8825 merged, Slack pendiente) para onboarding.

---

*Relatório gerado automaticamente com base em dados do GitHub de 2026-07-10. Metodologia: análise de issues e PRs atualizados nas últimas 24h.*

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*