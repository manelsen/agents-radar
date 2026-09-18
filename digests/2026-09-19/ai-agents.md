# Resumo diário do ecossistema de agentes de IA 2026-09-19

> Issues: 0 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-09-18 22:11 UTC

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

**Data de Referência:** 2026-09-19  
**Projetos Analisados:** NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw, ZeroClaw

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source demonstra **saúde desigual** em 19 de setembro de 2026. Quatro projetos (NanoBot, Hermes Agent, CoPaw, ZeroClaw) mantêm intensidade de desenvolvimento elevada com pipeline robusto de PRs, enquanto dois (PicoClaw, IronClaw) operam em modo de manutenção moderada. A **segurança** emerge como tema transversal — três projetos reportam vulnerabilidades críticas em aberto. Observa-se bifurcação estratégica: metade dos projetos investe em **multi-canal/multi-plataforma** (Telegram, Discord, Feishu, WhatsApp), enquanto a outra mitadeprioriza **isolamento multi-tenant e arquitetura de plugins**. Nenhuma release estável foi publicada em 24h, sugerindo ciclo de desenvolvimento pré-release coordenado.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | Merges/Closes | Releases | Avaliação de Saúde |
|---------|-------------|-----------|---------------|---------|-------------------|
| **NullClaw** | 0 | 0 | 0 | 0 | 🔴 Inativo |
| **NanoBot** | 5 | 14 | 5 | 0 | 🟢 Alta — foco em estabilidade |
| **Hermes Agent** | 50 | 50 | 24 PRs + 15 issues | 0 | 🟡 Alta — 2 P1 security abertos |
| **PicoClaw** | 1 | 3 | 0 | 0 | 🟡 Moderada — 1 PR stale (78d) |
| **IronClaw** | 1 | 2 | 0 | 0 | 🟡 Estável — foco em OAuth/storage |
| **CoPaw** | 24 | 50 | 19 | **1 beta** | 🟢 Alta — 2 critical bugs |
| **ZeroClaw** | 17 | 50 | 4 | 0 | 🟡 Alta — 3 P1 security |

**Métricas Consolidadas do Ecossistema**

| Indicador | Total | Observação |
|-----------|-------|------------|
| Issues ativas (24h) | 98 | Distribuídas entre 6 projetos |
| PRs atualizados (24h) | 169 | Pipeline saudável |
| PRs merged (24h) | 28 | Conversão média de 16,6% |
| Releases | 1 | Apenas CoPaw publicou beta |
| Bugs críticos abertos | 7 | 3 security, 4 funcional |
| PRs stale (>45d) | 3 | PicoClaw #3222, CoPaw #6668, #6381 |

---

## 3. Posicionamento do Projeto Principal (NullClaw)

NullClaw serves as the **reference baseline** with zero recorded activity, indicating either a mature stable state requiring minimal intervention or potential monitoring gaps. Compared to peers:

| Dimensão | NullClaw | Média dos Peers | Posição |
|----------|----------|-----------------|---------|
| Atividade recente | 0 | 24 PRs/issue avg | 🔴 Abaixo |
| Issues críticas abertas | 0 | 1.2 avg | 🟢 Ausência de crises |
| Releases (30d) | ND | 1 projeto | Indefinido |
| Comunidade mensurável | Nenhuma | Moderada-Alta | 🔴 Necessita validação |

**Vantagens Potenciais:**
- Linha de base para benchmarking de comunidade
- Ausência de dívida técnica reportada

**Necessidades Identificadas:**
- Validação dehealthcheck de monitoramento
- Definição de gates de atividade mínima

---

## 4. Focos Técnicos Compartilhados

A análise revela **cinco desafios técnicos recorrentes** entre os projetos:

### 4.1 Segurança de Execução e Injeção

| Projeto | Issue | Severidade |
|---------|-------|------------|
| **Hermes Agent** | Authorization gates leak across profiles (#113270) | 🔴 Crítica |
| **CoPaw** | Prompt injection persistente em skill deletion (#7859) | 🔴 Crítica |
| **ZeroClaw** | Image markers promoted without provenance (#10908) | 🔴 S2 |
| **NanoBot** | Jev shell safeguard via OpenRouter Decisions API (#5815) | 🟡 Feature |

**Síntese:** O ecossistema enfrentaamcapsulangem ataque em trêsvetores — autorização cross-context, injeção de prompt em skills, e validação de conteúdo multimodal. A tendência é adotar validação de código gerado via APIs externas.

### 4.2 Multi-Canal e Paridade de Plataforma

| Projeto | Canais | Issue Principal |
|---------|--------|-----------------|
| **NanoBot** | Discord, Telegram, WebUI | Paridade de replyToMessage (#1663 — resolvido) |
| **Hermes Agent** | WhatsApp, Telegram, Feishu, Weixin | Groups não funcionam (#72529 — resolvido) |
| **PicoClaw** | Feishu | Bug de conexão (#3355) |
| **ZeroClaw** | Telegram (multi-bot groups) | Passive group context (#10640) |

**Síntese:** A fragmentação de implementações por plataforma gera inconsistências. A paridade total entre canais (Discord↔Telegram↔Feishu) permanece desafio não resolvido.

### 4.3 Gestão de Contexto e Memória

| Projeto | Problema | Impacto |
|---------|----------|---------|
| **CoPaw** | Base64 de view_image acumula sem limite (#7853) | Crash |
| **CoPaw** | ToolResultPruner pula mídia, causa overflow | Crash |
| **Hermes Agent** | Self-Improvement misclassifies stores (#30220) | P1 há 4 meses |
| **ZeroClaw** | Append-only session event history (RFC #10526) | Observabilidade |

**Síntese:** Sessões longas com ferramentas visuais expõem limitações fundamentais em gestão de contexto. Nenhum projeto demonstra solução madura.

### 4.4 Mobile/Touch UX

| Projeto | Issue |
|---------|-------|
| **NanoBot** | Session list requer dois toques (#5771), chat rows não tappable (#5805) |
| **CoPaw** | Console carrega antes do backend (#7841) |

**Síntese:** A otimização mobile é consistentemente negligenciada, com múltiplos projetos reportando problemas similares de interatividade touch.

### 4.5 Atualização e Restart

| Projeto | Problema |
|---------|----------|
| **NanoBot** | Follow-ups cancelados após gateway restart (#5808) |
| **Hermes Agent** | Gateway restart race, infinite loop (#91547); Windows gateway morre após update (#115165) |
| **ZeroClaw** | Cost.warn_at_percent ignorado (#10950) |

**Síntese:** Operações de lifecycle (update, restart) geram comportamento inconsistente cross-platform, especialmente em Windows e macOS.

---

## 5. Análise de Diferenciação

### 5.1 Por Foco Primário

| Projeto | Foco Principal | Arquitetura Distintiva |
|---------|----------------|----------------------|
| **NanoBot** | Estabilidade de WebUI e canais | Multi-canal com paridade Discord↔Telegram |
| **Hermes Agent** | Integração empresarial (Feishu, Weixin) | Multi-profile com authorization layer |
| **CoPaw** | Multi-tenant Hub e contexto longo | Qwen-first com slash commands unificados |
| **ZeroClaw** | Plugins WASM e governança | Arquitetura runtime pluginizada |
| **IronClaw** | Isolamento multi-tenant e OAuth | Profile-agnostic storage |
| **PicoClaw** | Provedores alternativos | opencode-go provider, DeltaChat refactor |

### 5.2 Por Público-Alvo

| Projeto | Público Primário | Indicadores |
|---------|------------------|-------------|
| **NanoBot** | Usuários finais multi-canal | Issues de UX, regressions |
| **Hermes Agent** | Enterprise (Teams, Feishu, WeChat) | Bugs Windows/ARM64, multi-profile |
| **CoPaw** | Equipes com Hub multi-tenant | Discussion #7318 com 30 comentários |
| **ZeroClaw** | Desenvolvedores de plugins | RFCs densos, архитектура WASM |
| **IronClaw** | Ambientes produtivos | OAuth Gmail/Calendar, durable storage |

### 5.3 Diferenciação Técnica

| Dimensão | NanoBot | Hermes Agent | CoPaw | ZeroClaw |
|----------|---------|--------------|-------|----------|
| **Segurança** | Jev safeguard (emergente) | Authorization gates (crítico) | Prompt injection (crítico) | Provenance validation (crítico) |
| **Plugins** | Não especificado | Buzz plugin system | Plugin sync freeze | WASM runtime (RFC) |
| **Contexto** | Cross-session fix | Memory misclassification | Base64 overflow | Event replay (RFC) |
| **Roadmap signal** | Mobile + Linear channel | Windows hardening | Multi-tenant Hub | Deterministic replay |

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração

| Projeto | PRs/24h | Conversão | Estilo |
|---------|---------|-----------|--------|
| **CoPaw** | 50 | 19 merges (38%) | 🚀 Fast mover — beta release ativo |
| **ZeroClaw** | 50 | 4 merges (8%) | 🚀 Pipeline pesado, pré-release |
| **Hermes Agent** | 50 | 24 merges (48%) | 🚀 Fast mover — alta atividade |
| **NanoBot** | 14 | 5 merges (36%) | ➡️ Estável — regressões em foco |
| **IronClaw** | 2 | 0 merges | ➡️ Conservative — 1 PR há 40d |
| **PicoClaw** | 3 | 0 merges | ➡️ Conservative — 1 PR há 78d |

**Leitura:** CoPaw, ZeroClaw e Hermes Agent representam o **frontier de inovação** com volumes altos de atividade. IronClaw e PicoClaw demonstram maturidade de manutenção.

### 6.2 Qualidade de Processo

| Indicador | Melhor Prática | Projetos em Compliance |
|-----------|----------------|------------------------|
| PRs stale >45d | Revisão ou closure | 🔴 3 projetos com PRs >45d |
| P1s >30d sem resolução | Escalonamento | 🔴 Hermes #30220 (4 meses) |
| Resposta a issues | <7 dias | 🟡 Variável |
| Changelog documentado | Em releases | 🟢 CoPaw beta documentado |

### 6.3 Engajamento Comunitário

| Projeto | Issue+Engajada | Tópico | Comentários |
|---------|----------------|--------|-------------|
| **Hermes Agent** | #88584 | Automated Nous integration blocked | 116 |
| **CoPaw** | #7318 | Multi-tenant Hub discussion | 30 |
| **ZeroClaw** | #8692 | Maintainer decision queue | 15 |
| **NanoBot** | #5798 | Cross-session bug | 1 |

**Leitura:** Hermes Agent e CoPaw demonstram comunidades **tecnicamente ativas** com discussões densas. NanoBot apresenta baixa barreira de entrada para reports, mas engajamento superficial.

---

## 7. Sinais de Tendência

### 7.1 Segurança como Filtro Primário

O ecossistema está convergindo para **hardening obrigatório**:

```
2026-Q3 → 2026-Q4 Tendência:
├── Validação de código gerado por IA (Jev, OpenRouter Decisions API)
├── Authorization layer multi-profile (Hermes Agent)
├── Prompt injection protection (CoPaw)
└── Provenance validation para multimodal (ZeroClaw)
```

**Implicação:** Projetos que não implementarem validação de conteúdo e authorization cross-context enfrentarão barreiras de adoção enterprise.

### 7.2 Multi-Tenant como Feature de Crescimento

Três projetos investem simultaneamente em isolamento multi-tenant:

| Projeto | Feature | Status |
|---------|---------|--------|
| **CoPaw** | Hub multi-tenant com permissões granulares | Roadmap 2.2.0 |
| **IronClaw** | Profile-agnostic durable storage | PR #7456 em revisão |
| **ZeroClaw** | Internal-principal envelope, cron separation | PR #10425 |

**Implicação:** A onda de SaaS multi-tenant está empurrando requisitos de isolamento para agentes desktop/self-hosted.

### 7.3 Plataforma Asiática como Mercado Prioritário

Atividade intensa em plataformas não-ocidentais:

| Plataforma | Projetos Ativos | Volume |
|------------|-----------------|--------|
| **Feishu/Lark** | Hermes Agent, PicoClaw, NanoBot | 7+ PRs/issues |
| **Weixin/WeChat** | Hermes Agent | 2+ PRs |
| **WhatsApp** | Hermes Agent, ZeroClaw | 3+ PRs |

**Implicação:** O mercado chinês e asiático de messaging enterprise representa vetor de crescimento significativo. Projetos sem estratégia Feishu/WeChat estarão restritos ao mercado ocidental.

### 7.4 Contexto Longo como Limitation Crítica

Todos os projetos enfrentam limitações similares em gestão de contexto:

| Sintoma | Projetos Afetados |
|---------|-------------------|
| Base64 overflow | CoPaw (#7853) |
| Memory misclassification | Hermes Agent (#30220) |
| Cross-session leaks | NanoBot (#5798) |
| Event fragmentation | ZeroClaw (#10526) |

**Implicação:** A gestão de contexto emerge como **diferenciador técnico** —谁能 resolver overflow de tokens e cross-session contamination tendrá ventaja competitiva.

### 7.5 Desktop como Canal Secundário

Investimentos em desktop UI/WebUI indicam mudança de paradigma:

| Projeto | Desktop Feature | Status |
|---------|-----------------|--------|
| **CoPaw** | Console grouping, collapse thought | Merged |
| **NanoBot** | WebUI catalog channels | Fixed |
| **Hermes Agent** | Toast position, streaming jitter | PRs open |
| **ZeroClaw** | ZeroCode Config editor | Bug reported |

**Implicação:** Desktop posiciona-se como **hub central** para agentes multi-canal, substituindo gradualmente interfaces proprietárias de Telegram/Discord.

---

## 8. Recomendações para Decisores

### Priorização Curto Prazo (0-30 dias)

| # | Ação | Projetos | Justificativa |
|---|------|----------|---------------|
| 1 | Resolver authorization gate leak | Hermes Agent | Risco de segurança crítico |
| 2 | Priorizar prompt injection fix | CoPaw #7864 | Proteção de dados de usuário |
| 3 | Revisar PRs stale >45d | PicoClaw, CoPaw | Dívida técnica acumulada |
| 4 | Validar NullClaw health | NullClaw | Linha de base ausente |

### Sinais de Monitoramento

| Indicador | Threshold | Ação |
|-----------|-----------|------|
| P1s abertos >7 dias | >2 | Escalonar para release freeze |
| PRs stale >45d | >3 | Revisão de backlog obrigatória |
| Regressão reportada | qualquer | Test coverage audit |
| Security issue | qualquer | Processo de disclosure |

---

## Apêndice: Matriz de Capacidades

| Capacidade | NanoBot | Hermes | CoPaw | ZeroClaw | IronClaw | PicoClaw |
|-----------|---------|--------|-------|----------|----------|----------|
| Multi-canal | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Multi-tenant | ❌ | ✅ | Roadmap | ✅ | ✅ | ❌ |
| WASM plugins | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ |
| Mobile UX | 🔴 | 🟡 | 🔴 | 🟡 | 🟢 | 🟢 |
| Security hardened | 🟡 | 🔴 | 🔴 | 🔴 | 🟡 | 🟢 |
| Context management | 🟡 | 🔴 | 🔴 | 🟡 | 🟢 | 🟢 |
| Enterprise (Feishu/WeChat) | 🟡 | ✅ | ❌ | 🟡 | ❌ | ✅ |

---

*Relatório gerado em 2026-09-19 com base em dados do GitHub dos projetos analisados.*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-09-19

## 1. Panorama do Dia

O projeto NanoBot apresenta **alta atividade de desenvolvimento** em 19 de setembro de 2026, com 14 PRs e 5 issues atualizadas nas últimas 24 horas. A equipe demonstra foco significativo em **estabilidade do WebUI e canais de comunicação** (Discord, Telegram), com múltiplas correções de bugs e refatorações em andamento. Não há lançamentos novos, mas cinco PRs foram merged/fechados com progresso tangível. O volume de atividade sugere uma fase intensiva de preparação para a próxima release, com atenção particular à experiência mobile e resiliência do sistema.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24 horas.**

O projeto não publicou novas versões desde o período analisado. A versão mais recente mencionada nos issues continua sendo **0.3.5**.

---

## 3. Progresso do Projeto

### PRs Merged/Fechadas (5 total)

| PR | Título | Impacto |
|---|---|---|
| [#5794](https://github.com/HKUDS/nanobot/pull/5794) | fix: cross-session response delivery in agent loop | **Crítico** — Corrige bug que fazia respostas aparecerem na sessão errada |
| [#5800](https://github.com/HKUDS/nanobot/pull/5800) | feat(discord): add replyToMessage parity with Telegram | Adiciona paridade de respostas nativas no Discord |
| [#5810](https://github.com/HKUDS/nanobot/pull/5810) | fix(webui): show all channels when only WebUI is enabled | Melhora UX do catálogo de canais |
| [#5812](https://github.com/HKUDS/nanobot/pull/5812) | fix(agent): run explicit recovery continuations | Melhora resiliência do sistema de recuperação |
| [#5495](https://github.com/HKUDS/nanobot/pull/5495) | feat(channels): add native Linear agent channel | **Feature grande** — Canal Linear com OAuth PKCE (fechado por conflito) |

### Destaque: Correção de Bug Crítico
O PR [#5794](https://github.com/HKUDS/nanobot/pull/5794) resolve um problema sério onde mensagens enviadas rapidamente em sessões diferentes podiam ter respostas direcionadas incorretamente. Este era um dos bugs reportados pelo usuário em [#5798](https://github.com/HKUDS/nanobot/issues/5798).

---

## 4. Temas Quentes da Comunidade

### Issues com Mais Atividade

| Issue | Título | Comentários | 👍 | Tendência |
|---|---|---|---|---|
| [#5798](https://github.com/HKUDS/nanobot/issues/5798) | [bug] 回复串会话问题 | 1 | 0 | 🔴 Em aberto - bug de cross-session |
| [#5771](https://github.com/HKUDS/nanobot/issues/5771) | Session list requires two taps on mobile | 1 | 0 | 🟡 Em aberto - UX mobile |
| [#5808](https://github.com/HKUDS/nanobot/issues/5808) | WebUI follow-ups canceled by /stop replay after gateway restart | 0 | 0 | 🔴 Em aberto - resiliência |

### Análise de Demandas

- **Cross-session bugs**: A comunidade reporta que o bug de respostas cruzadas (aparece em sessões erradas) foi introduzido na versão 0.3.5 e não existia na 0.3.0 — indica regressão que a equipe está corrigindo.
- **Experiência mobile**: Múltiplos issues relacionados a toques duplos e áreas de toque em dispositivos móveis — sinal de descuido na otimização touch.
- **Resiliência pós-reinício**: Usuários experimentam comportamento inesperado após reinicializações do gateway, sugerindo necessidade de melhor gerenciamento de estado.

---

## 5. Bugs e Estabilidade

### Bugs Reportados (por severidade)

#### 🔴 Alta Prioridade (2)
- **[#5798](https://github.com/HKUDS/nanobot/issues/5798)** — Respostas cruzando entre sessões (regressão da 0.3.5)
- **[#5808](https://github.com/HKUDS/nanobot/issues/5808)** — Follow-ups cancelados pelo /stop retornam após reinício do gateway

#### 🟡 Média Prioridade (3)
- **[#5771](https://github.com/HKUDS/nanobot/issues/5771)** — Session list requer dois toques no mobile
- **[#5806](https://github.com/HKUDS/nanobot/issues/5806)** — Discord: tarefas de reação permanecem após stop
- **[#1663](https://github.com/HKUDS/nanobot/issues/1663)** — Discord sem paridade de replyToMessage com Telegram ✅ Fechado

### Correções em Andamento (PRs)
| PR | Problema | Status |
|---|---|---|
| [#5807](https://github.com/HKUDS/nanobot/pull/5807) | Cleanup de reaction state no Discord | ✅ Merged |
| [#5809](https://github.com/HKUDS/nanobot/pull/5809) | Descartar journal de recovery de follow-ups parados | Aberto |
| [#5805](https://github.com/HKUDS/nanobot/pull/5805) | Mobile chat rows tappable | Aberto |
| [#5813](https://github.com/HKUDS/nanobot/pull/5813) | Limpar prompt de restart após reconnect | Aberto |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Propostas

| PR/Issue | Título | Complexidade | Sinal Estratégico |
|---|---|---|---|
| [#5815](https://github.com/HKUDS/nanobot/pull/5815) | feat(exec): add optional Jev shell safeguard | Alta | 🔒 Segurança de execução via IA |
| [#5811](https://github.com/HKUDS/nanobot/pull/5811) | refactor(agent): execute subagents through private sessions | Alta | 🏗️ Arquitetura de subagentes |
| [#5780](https://github.com/HKUDS/nanobot/pull/5780) | fix: stop sending context compaction notifications | Baixa | ⚙️ UX de notificações |

### Análise de Roadmap
- **Jev Shell Safeguard** (#5815): Integração com OpenRouter Decisions API para validação de comandos exec — indica direção para segurança de código gerado.
- **Linear Agent Channel** (#5495): Canal nativo com OAuth e webhooks assinatura, demonstrando expansão para ferramentas de produtividade.
- **Subagents via private sessions** (#5811): Refatoração arquitetural significativa para isolamento de contextos.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

1. **Regressão de estabilidade entre versões**
   - Usuário reporta: *"0.3.0 não tinha este problema"* — indica necessidade de melhores testes de regressão antes de releases.

2. **Experiência mobile deficitária**
   - Sessões não respondem ao primeiro toque.
   - Áreas de ação invisíveis bloqueiam interação.
   - Usuários iOS (iPhone Air, iOS 27) afetados.

3. **Gestão de estado pós-reinício**
   - Comportamento imprevisível após gateway restart.
   - Mensagens de "requires restart" persistem incorretamente.

4. **Rich messages no Telegram**
   - Espaços duplos necessários para quebras de linha em mensagens ricas — fricção técnica para desenvolvedores de bots.

### Cenários de Uso Identificados
- **Uso multi-sessão simultâneo**: Usuários mantêm múltiplas sessões ativas concurrently.
- **Integração Discord/Telegram**: Forte demanda por paridade de features entre canais.
- **WebUI como canal primário**: Usuários esperam que WebUI funcione como canal standalone sem ocultar configurações de outros canais.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta há Tempo

| Issue | Criado | Idade | Prioridade |
|---|---|---|---|
| [#1663](https://github.com/HKUDS/nanobot/issues/1663) | 2026-03-07 | ~6 meses | ✅ Fechado via PR #5800 |

**Observação**: A issue #1663 ficou aberta por aproximadamente 6 meses antes de ser resolvida. Nenhuma outra issue antiga permanece sem resposta no período analisado.

### PRs Abertos de Longa Duração

| PR | Criado | Idade | Status |
|---|---|---|---|
| [#5495](https://github.com/HKUDS/nanobot/pull/5495) | 2026-08-23 | ~4 semanas | Fechado por conflito |

### Recomendações para o Backlog

1. **Priorizar fix para cross-session** — Bug afeta funcionalidade core e há regressão documentada.
2. **Revisar test coverage mobile** — Múltiplos issues mobile indicam lacuna em testes touch.
3. **Documentar breaking changes** — Usuários notam diferenças entre 0.3.0 e 0.3.5; melhor changelog ajudaria.

---

## Métricas Resumidas do Dia

| Indicador | Valor | Tendência |
|---|---|---|
| Issues abertas/ativas | 4 | Neutra |
| Issues fechadas | 1 | ✅ Positiva |
| PRs abertos | 9 | Alta atividade |
| PRs merged/fechados | 5 | ✅ Progresso forte |
| Novas releases | 0 | Sem mudança |
| Bugs críticos em aberto | 2 | 🔴 Atenção |

---

**Fontes dos dados**: [github.com/HKUDS/nanobot](https://github.com/HKUDS/nanobot) — coletado em 2026-09-19

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-09-19

---

## 1. Panorama do Dia

O Hermes Agent manteve um **ritmo intenso de atividade** nas últimas 24 horas, com 100 objetos atualizados (50 issues + 50 PRs). Não houve novas releases, mas o projeto demonstrou **saúde operacional estável**: 15 issues foram fechadas e 24 PRs foram merged/fechadas, indicando resolução ativa de pendências. Entre os destaques do dia, chama atenção a **quantidade de issues de segurança** reportadas (especialmente a leak de authorization gates entre profiles) e uma **concentração de bugs P1 no componente gateway e plataformas** (WhatsApp, Telegram, Feishu, Weixin). A comunidade está particularmente ativa em debates sobre autenticação cross-profile e integração com plataformas asiáticas de messaging.

---

## 2. Lançamentos

**Nenhuma release foi publicada nas últimas 24 horas.**

O último release estável mencionado nos dados é a **v0.21.3** (referenciada em issues de Windows #115165 e ARM64 #115217). Não há changelog detalhado disponível nos dados analisados. Recomenda-se monitorar [a aba de releases](https://github.com/NousResearch/hermes-agent/releases) para sinais detagama de nova versão.

---

## 3. Progresso do Projeto

As seguintes PRs foram **merged/fechadas** nas últimas 24 horas, representando avanço concreto:

| PR | Tipo | Componente | Descrição |
|---|---|---|---|
| [#91567](https://github.com/NousResearch/hermes-agent/pull/91567) | feature | plugins (Buzz) | Continue mentioned reply threads; adiciona `thread_require_mention: true` para gating por reply |
| [#107385](https://github.com/NousResearch/hermes-agent/pull/107385) | bugfix | gateway/platforms/feishu | Drop `root_id` fallback; corrige thread_id para replies regulares — **resolve #20548** |
| [#36233](https://github.com/NousResearch/hermes-agent/pull/36233) | bugfix | gateway/platforms/feishu | Distingue quote replies de topic sessions em Feishu |
| [#42259](https://github.com/NousResearch/hermes-agent/pull/42259) | bugfix | gateway/platforms/feishu | Remove `root_id` de `reply_to_message_id` e thread_id fallback — **resolve #20548** |
| [#23758](https://github.com/NousResearch/hermes-agent/pull/23758) | bugfix | gateway/platforms/feishu | Evita criar thread incorreta ao referenciar mensagem do usuário |
| [#20562](https://github.com/NousResearch/hermes-agent/pull/20562) | bugfix | gateway/platforms/feishu | Evita threading de replies regulares em Feishu — **resolve #20548** |
| [#101096](https://github.com/NousResearch/hermes-agent/pull/101096) | bugfix | cli/backup | Backup exit non-zero quando incompleto; cron jobs não recebem false positives |

**Padrão de merge**: O projeto demonstra foco em **correções de threading no Feishu** (5 PRs relacionados a #20548 fechados em sequência) e **melhoria de confiabilidade do sistema de backup**. Não houve merges de features de alto impacto nas últimas 24h.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (por comentários)

**1. [#88584](https://github.com/NousResearch/hermes-agent/issues/88584) — "Automated Nous integration is blocked"**
- **116 comentários** | P3 | Aberta desde 2026-08-17 | Atualizada 2026-09-18
- **Resumo**: A merge agendada Nous-to-Enterkey tem conflitos em `cron/jobs.py`; o dashboard updater permanece na última release testada do Enterkey.
- **Análise**: Bug de integração interna entre branches/produtos da Nous Research. Alto volume de discussão (116 comments) sugere complexidade ou dependências não trivial. Label `invalid, comp/cron` indica componente específico.

**2. [#30220](https://github.com/NousResearch/hermes-agent/issues/30220) — "Background Self-Improvement Review misclassifies content"**
- **9 comentários** | P1 | Aberta desde 2026-05-22 | Atualizada 2026-09-18
- **Resumo**: O sistema `_spawn_background_review` (em `run_agent.py`) periodicamente faz fork de sub-agent para revisar conversas e salvar aprendizados em memory/skills, porém **misclassifica conteúdo entre memory/skill/user stores**.
- **Análise**: Bug de P1 (prioridade máxima) em memória e agente — afeta diretamente a capacidade de auto-aperfeiçoamento do Hermes. Status **OPEN** há ~4 meses sem resolução.

**3. [#98588](https://github.com/NousResearch/hermes-agent/issues/98588) — "False positive 'gateways may still be serving pre-update modules'"**
- **8 comentários** | P3 | Aberta desde 2026-08-30 | Atualizada 2026-09-18
- **Resumo**: `hermes update` emite warning falso quando gateway foi respawned por launchd (macOS) entre updates.
- **Análise**: UX problem em macOS,也不算 crítico mas gera confusão desnecessária.

---

## 5. Bugs e Estabilidade

### P1 — Críticos (ação imediata recomendada)

| Issue | Título | Componente | Status | Notas |
|---|---|---|---|---|
| [#80125](https://github.com/NousResearch/hermes-agent/issues/80125) | Weixin `ret=-2` misreported como rate limit | gateway/platforms/weixin | CLOSED | `context_token` missing; oculta causa real |
| [#20548](https://github.com/NousResearch/hermes-agent/issues/20548) | root_id fallback causa threading indevido | gateway/platforms/feishu | CLOSED | 5 PRs de fix merged |
| [#30220](https://github.com/NousResearch/hermes-agent/issues/30220) | Self-Improvement misclassifica stores | agent, memory, skills | **OPEN** | Há 4+ meses, P1 sem resolução |
| [#72529](https://github.com/NousResearch/hermes-agent/issues/72529) | WhatsApp group messages não reach gateway | gateway/platforms/whatsapp | CLOSED | DMs funcionam, groups não |
| [#83617](https://github.com/NousResearch/hermes-agent/issues/83617) | Space key engolida no dialog de rename | desktop | CLOSED | Workaround inexistente |
| [#63386](https://github.com/NousResearch/hermes-agent/issues/63386) | FTS index corruption em state.db (macOS) | cli, gateway | CLOSED | Afeta session search e handoff |
| [#91547](https://github.com/NousResearch/hermes-agent/issues/91547) | `gateway restart` race no port, infinite loop | cli, gateway | CLOSED | Sem API server após restart |
| [#103363](https://github.com/NousResearch/hermes-agent/issues/103363) | Telegram auto topic-rename broken após upgrade | gateway/platforms/telegram | CLOSED | Schema v2→v3 migration não triggers |
| [#105574](https://github.com/NousResearch/hermes-agent/issues/105574) | context-compressor clips tool-call args pre-send | agent, delegate | **OPEN** | Args JSON de subagents corrompidos |
| [#113270](https://github.com/NousResearch/hermes-agent/issues/113270) | **Authorization gates leak across profiles** | cli, gateway, cron, dashboard | **OPEN** | ⚠️ **Segurança** |
| [#115165](https://github.com/NousResearch/hermes-agent/issues/115165) | Windows: gateway restart morre com ImportError | cli, platform/windows | **OPEN** | Sem gateway após update |
| [#114209](https://github.com/NousResearch/hermes-agent/issues/114209) | no_agent cron jobs perdem env credentials | cron, auth | CLOSED | Regression de `3fe8e5e443` |

### P2 — Significativos

| Issue | Título | Componente | Status |
|---|---|---|---|
| [#60789](https://github.com/NousResearch/hermes-agent/issues/60789) | session_search ignora parâmetro `profile` | agent, cli | CLOSED |
| [#68055](https://github.com/NousResearch/hermes-agent/issues/68055) | `_secure_dir()` chmod em symlink derruba dirs compartilhados | cli, skills | **OPEN** |
| [#84997](https://github.com/NousResearch/hermes-agent/issues/84997) | Desktop streaming session scroll jitter | desktop, streaming | **OPEN** |
| [#115363](https://github.com/NousResearch/hermes-agent/issues/115363) | hermes update autostash sem restore | cli | **OPEN** |
| [#115311](https://github.com/NousResearch/hermes-agent/issues/115311) | Fleet restart incomplete no Windows | cli, gateway, windows | **OPEN** |
| [#115365](https://github.com/NousResearch/hermes-agent/issues/115365) | doctor/profile list esconde todos com config.yaml faltando | cli, profiles | **OPEN** |
| [#115217](https://github.com/NousResearch/hermes-agent/issues/115217) | MSIX installer hang em ARM64 Windows | desktop, windows | **OPEN** |

### P3 — Menores / Nice-to-have

| Issue | Título | Componente | Status |
|---|---|---|---|
| [#88584](https://github.com/NousResearch/hermes-agent/issues/88584) | Automated Nous integration blocked | cron | **OPEN** |
| [#98588](https://github.com/NousResearch/hermes-agent/issues/98588) | False positive update warning (macOS) | cli | **OPEN** |
| [#50745](https://github.com/NousResearch/hermes-agent/issues/50745) | Mobile App request | desktop | **OPEN** (duplicate) |
| [#114428](https://github.com/NousResearch/hermes-agent/issues/114428) | Links quebrados em docs | docs | CLOSED |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em Desenvolvimento (PRs Open)

| PR | Título | Componente | Impacto |
|---|---|---|---|
| [#115438](https://github.com/NousResearch/hermes-agent/pull/115438) | Browser credential vault opt-in (disabled by default) | agent, browser | **Segurança**: Vault é opt-in, não expõe senhas automaticamente |
| [#68844](https://github.com/NousResearch/hermes-agent/pull/68844) | WhatsApp allowlisted group intake (multi-member) | gateway, plugins, whatsapp | **UX**: Grupos allowlisted funcionam para não-DM-allowlisted |
| [#115447](https://github.com/NousResearch/hermes-agent/pull/115447) | Expose immutable agent turn context para plugins | agent, plugins | **API**: Plugins podem fazer atribuição sem capturar hook payloads |
| [#114411](https://github.com/NousResearch/hermes-agent/pull/114411) | Desktop: configure in-app toast position | desktop | **UX**: Top-left, top-right, bottom-left, bottom-right |
| [#78307](https://github.com/NousResearch/hermes-agent/issues/78307) | Lifecycle management para built-in memory | agent, memory | **Feature**: Inspection, health, deduplication, conflict detection |

### Sinais de Roadmap

- **Segurança como prioridade**: O PR [#115446](https://github.com/NousResearch/hermes-agent/pull/115446) (fix de authorization gate leak) sendo preparado às pressas indica foco em hardening de multi-profile.
- **Plataformas asiáticas**: Atividade intensa em WhatsApp, Weixin (WeChat), e Feishu — possivelmente prioridade de mercado.
- **Desktop maturation**: Issues de streaming (#84997), toast position (#114411), e mobile app (#50745) sugerem investimento na experiência desktop.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Categoria | Exemplos | Severidade |
|---|---|---|
| **Windows** | MSIX hangs em ARM64; gateway morre após update; fleet restart incompleto | P1-P2 |
| **macOS** | FTS corruption; false positive em update warning; loopback bind races | P1-P3 |
| **Multi-profile** | Authorization gates vazam entre profiles (⚠️ segurança) | **Crítica** |
| **Plataformas de Mensagens** | WhatsApp groups não funcionam; Telegram topic-rename quebrado; Feishu threading errado | P1 |
| **Confiabilidade de Update** | Autostash não restaura; gateway restart races; state.db corruption | P1-P2 |

### Cenários de Uso Identificados

1. **Usuários Windows com múltiplos profiles**: Afetados por bugs de update e restart que deixam o sistema sem gateway.
2. **Usuários de WhatsApp Business em grupo**: Grupo allowlisted não recebe mensagens se não estiver no DM allowlist — caso de suporte ao cliente bloqueado.
3. **Usuários de Teams/Enterprise (Feishu)**: Problemas de threading geram sessões duplicadas ou respostas no lugar errado.
4. **Ambientes compartilhados (skills via symlink)**: chmod 0700 em symlinks quebra permissões de diretórios compartilhados.

### Satisfação / Insatisfação

- **Positivo**: Resolução rápida de múltiplos bugs de Feishu (5 PRs em sequência) demonstra capacidade de response.
- **Preocupante**: Issue P1 de memória (#30220) aberta há 4+ meses sem resolução; bugs de Windows recorrentes em update.
- **Alerta**: Bug de segurança #113270 (authorization leak) reportada em 2026-09-16 e ainda **OPEN** — requer atenção imediata.

---

## 8. Backlog que Merece Atenção

### Issues Antigas Sem Resolução

| Issue | Idade | Prioridade | Título | Motivo de Atenção |
|---|---|---|---|---|
| [#30220](https://github.com/NousResearch/hermes-agent/issues/30220) | ~4 meses | **P1** | Background Self-Improvement misclassifies stores | Afeta feature core de auto-aprendizado; sem workaround |
| [#78307](https://github.com/NousResearch/hermes-agent/issues/78307) | ~2 meses | P2 | Lifecycle management para built-in memory | Feature request clara; sem ação |
| [#113270](https://github.com/NousResearch/hermes-agent/issues/113270) | 3 dias | **P2 (Segurança)** | Authorization gates leak across profiles | Exposição de segurança entre profiles |

### PRs Abertos Há Tempo

| PR | Idade | Prioridade | Título | Bloqueio |
|---|---|---|---|---|
| [#68844](https://github.com/NousResearch/hermes-agent/pull/68844) | ~2 meses | P3 | WhatsApp allowlisted group intake | Aguardando decisão (`needs-decision`) |
| [#106011](https://github.com/NousResearch/hermes-agent/pull/106011) | ~11 dias | P2 | Backup: consolidate reliable backups | Em revisão |
| [#101055](https://github.com/NousResearch/hermes-agent/pull/101055) | ~17 dias | P2 | Weixin: recycle send session after failures | Em revisão |

### Recomendação de Priorização

1. **🔴 Imediato**: Resolver [#113270](https://github.com/NousResearch/hermes-agent/issues/113270) (security) e [#115446](https://github.com/NousResearch/hermes-agent/pull/115446) (fix associado)
2. **🔴 Imediato**: Resolver [#30220](https://github.com/NousResearch/hermes-agent/issues/30220) — P1 aberto há 4 meses


</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório de Projeto: PicoClaw
**Data de Referência:** 2026-09-19 | **Repositório:** sipeed/picoclaw

---

## 1. Panorama do Dia

O projeto PicoClaw apresenta **atividade moderada** em 19 de setembro de 2026, com 4 itens atualizados nas últimas 24 horas (1 issue e 3 PRs). Não houve lançamentos de novas versões, mantendo o repositório em estado de manutenção e integração de contribuições. Os PRs em aberto indicam trabalho ativo em três áreas distintas: melhoria de performance da interface web, adição de suporte a novo provedor (OpenCode Go), e refatoração do módulo DeltaChat. A comunidade demonstra engajamento contínuo com reports de bugs e propostas de features.

---

## 2. Lançamentos

**Nenhum release nas últimas 24h.**

O projeto não publicou novas versões no período analisado. Recomenda-se monitorar a aba de releases do repositório para eventuais publicações futuras.

---

## 3. Progresso do Projeto

Três Pull Requests foram atualizados, porém **nenhum foi mergeado ou fechado** no período:

| PR | Título | Status | Áreas |
|----|--------|--------|-------|
| [#3347](https://github.com/sipeed/picoclaw/pull/3347) | fix laggy interface | OPEN | UI/Web |
| [#3371](https://github.com/sipeed/picoclaw/pull/3371) | feat(providers): add opencode-go provider | OPEN | Providers |
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) | refactor(deltachat): cleanup implementation | OPEN | Deltachat |

**Destaque:** O PR [#3347](https://github.com/sipeed/picoclaw/pull/3347) resolving interface laggy comportamento promete impacto direto na experiência do usuário, especialmente em sessões com grande volume de texto no chat.

---

## 4. Temas Quentes da Comunidade

### Issue em Destaque

| Issue | Título | Comentários | Reações |
|-------|--------|-------------|---------|
| [#3355](https://github.com/sipeed/picoclaw/issues/3355) | [BUG] 连接飞书报错 (Feishu connection error) | 2 | 0 👍 |

**Análise:** A issue #3355 reporta erro ao conectar ao canal Feishu (飞书), com o usuário fornecendo solução no próprio report. O problema está relacionado ao campo `channel_list.feishu.app_id` estar configurado incorretamente no `config.json`. Esta issue demonstra:

- 🔴 Bug de configuração com workaround disponível
- 📝 Comunidade ativa reportando e documentando soluções
- ⚠️ Necessidade de validação de schema mais robusta

---

## 5. Bugs e Estabilidade

### Bug Reportado

**[#3355](https://github.com/sipeed/picoclaw/issues/3355)** — Severidade: **Média**
- **Título:** Erro de conexão com Feishu
- **Ambiente:** picoclaw nightly-50-gbbf6893c, Go 1.25.13
- **Causa:** Campo desconhecido em `config.json`
- **Status:** ABERTA com workaround documentado

**Recomendação:** Verificar necessidade de merge de fix para validação de configuração ou atualização de documentação para evitar este erro.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Nova Feature em PR

**[#3371](https://github.com/sipeed/picoclaw/pull/3371)** — Provider OpenCode Go
- Adiciona provedor `opencode-go` dedicado
- Suporte automático a header `x-opencode-session`
- Roteamento inteligente baseado em ID do modelo

**Indicativos de roadmap:**
- Expansão de provedores suportados
- Suporte a sessões persistentes via headers customizados

### Refatoração em Progresso

**[#3222](https://github.com/sipeed/picoclaw/pull/3222)** — DeltaChat Refactor
- Remoção de features legadas (-200 LOC)
- Limpeza de fallbacks e testes desatualizados
- Melhores práticas de segurança (segredos no jsonrpc)

---

## 7. Resumo de Feedback dos Usuários

### Padrões Identificados

| Categoria | Evidência | Sentimento |
|-----------|-----------|------------|
| **Performance UI** | PR #3347 | 😤 Frustração com lag |
| **Integração Canais** | Issue #3355 | ⚠️ Problema de configuração |
| **Features Providers** | PR #3371 | ✅ Demanda por novos provedores |
| **Manutenibilidade** | PR #3222 | 📈 Apetite por código limpo |

**Dores principais:**
1. Interface web com lentidão em conversas extensas
2. Curva de aprendizado em configuração de canais

---

## 8. Backlog que Merece Atenção

### Issues/PRs Sem Resposta ou Stale

| Item | Tipo | Título | Atualizado | Idade |
|------|------|--------|------------|-------|
| [#3355](https://github.com/sipeed/picoclaw/issues/3355) | Issue | [BUG] 连接飞书报错 | 2026-09-18 | 18 dias |
| [#3371](https://github.com/sipeed/picoclaw/pull/3371) | PR | feat: opencode-go provider | 2026-09-18 | 11 dias |
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) | PR | refactor(deltachat) | 2026-09-18 | 78 dias |

**⚠️ Prioridade:** O PR #3222 está aberto há mais de 2 meses e pode precisar de rebase ou atenção dos mantenedores para revisão.

---

## Métricas Resumidas

| Indicador | Valor | Tendência |
|-----------|-------|-----------|
| Issues ativas (24h) | 1 | Neutro |
| PRs abertos (24h) | 3 | Neutro |
| Releases (24h) | 0 | Sem mudança |
| Issues abertas totais | ~3355 | — |
| PRs abertos totais | ~3371 | — |

---

**Próximos passos recomendados:**
1. Revisar e validar PR [#3347](https://github.com/sipeed/picoclaw/pull/3347) para melhoria de UX
2. Avaliar merge do PR [#3371](https://github.com/sipeed/picoclaw/pull/3371) para expandir provedores
3. Responder ou fechar PR [#3222](https://github.com/sipeed/picoclaw/pull/3222) após 78 dias aberto

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-09-19

---

## 1. Panorama do Dia

O projeto IronClaw apresenta **atividade moderada** nas últimas 24 horas, com 1 issue atualizada e 2 pull requests abertas. Não foram registradas novas releases, merges ou issues fechadas no período. O ecossistema mantém uma fila de PRs em desenvolvimento ativo (#8102 e #7456), enquanto a issue mais recente (#7537) sinaliza uma demanda por padronização de controle de thinking effort entre provedores LLM. A saúde geral do repositório permanece estável, sem indicadores de instabilidade ou regressões críticas reportadas.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24 horas.**

O projeto não publicou novas versões no período analisado. Usuários em produção devem continuar utilizando a última release estável disponível no repositório.

---

## 3. Progresso do Projeto

**Nenhum merge registrado nas últimas 24 horas.**

Duas pull requests permanecem abertas e em revisão ativa:

- **#8102** — *fix(extensions): resolve provider-instance readiness live, administrator configuration first* ([GitHub](https://github.com/nearai/ironclaw/pull/8102))  
  Corrige falha na ativação de Gmail/Google Calendar quando OAuth é configurado via Web UI em vez de variáveis de ambiente. A correção prioriza configuração administrativa live.

- **#7456** — *fix(reborn): make durable storage profile-agnostic* ([GitHub](https://github.com/nearai/ironclaw/pull/7456))  
  Refatora estrutura de storage para tornar pastas de estado, workspaces e logs independentes do perfil ativo, fortalecendo isolamento de tenancy em transições entre perfis.

---

## 4. Temas Quentes da Comunidade

A issue mais comentada do período:

- **#7537** — *feat(llm): generic per-request thinking/effort control* ([GitHub](https://github.com/nearai/ironclaw/issues/7537))  
  **Comentários:** 2 | **Reações:** 0  
  **Resumo da demanda:** Solicitação para implementar controle genérico de "thinking effort" por requisição LLM, com mapeamento nativo para cada provedor. O caso motivador é o DeepSeek V4 Flash via NEAR AI, que ficou verboso na versão 0731 checkpoint. A feature permitiria granularidade por requisição e default por modelo.

**Análise:** A issue demonstra interesse em padronização cross-provider para parâmetros de inferência, indicando maturidade do ecossistema LLM do projeto.

---

## 5. Bugs e Estabilidade

**Nenhum bug reportado nas últimas 24 horas.**

Não há issues abertas com标签 de bug ou regressão no período analisado. O sistema de CI/CD e os mecanismos de reporte de erros parecem operacionais.

---

## 6. Pedidos de Features e Sinais de Roadmap

**Novas features em discussão:**

- **#7537** — Controle genérico de thinking/effort por requisição ([GitHub](https://github.com/nearai/ironclaw/issues/7537))  
  - Escopo: LLM  
  - Subtemas: mapeamento provider-native, configuração por modelo default  
  - Potencial impacto: melhoria na qualidade de respostas e eficiência de tokens

**Sinais de roadmap inferidos:**
O PR #7456 (storage profile-agnostic) sugere foco em **isolamento multi-tenant** e **portabilidade de configuração** para implantações em produção.

---

## 7. Resumo de Feedback dos Usuários

Com base nas issues e PRs analisadas, os pontos de dor identificados são:

| Categoria | Descrição | Issue Relacionada |
|-----------|-----------|-------------------|
| **Configuração OAuth** | Incompatibilidade entre configuração via Web UI e variáveis de ambiente para Google APIs | #8102 |
| **Isolamento de dados** | Necessidade de storage persistente independente do perfil ativo | #7456 |
| **Qualidade LLM** | Respostas excessivamente verbosas de modelos específicos (DeepSeek) | #7537 |

**Satisfação:** Ausência de issues de crash ou reclamações críticas sugere base de usuários estável.

---

## 8. Backlog que Merece Atenção

| Issue/PR | Título | Status | Idade | Prioridade |
|----------|--------|--------|-------|------------|
| #7456 | fix(reborn): make durable storage profile-agnostic | ABERTA | ~40 dias | Alta |
| #7537 | feat(llm): generic per-request thinking/effort control | ABERTA | ~38 dias | Média |

**#7456** — Com 40 dias aberta e foco em segurança/storage, merece prioridade de review para estabilizar implantações multi-perfil.

---

## Métricas Consolidada do Dia

| Indicador | Valor |
|-----------|-------|
| Issues ativas (24h) | 1 |
| PRs abertas (24h) | 2 |
| Merges (24h) | 0 |
| Releases (24h) | 0 |
| Bugs críticos | 0 |
| Feature requests | 1 |

**Veredicto:** Projeto em ritmo de desenvolvimento estável, sem incidentes críticos. Atenção recomendada ao review do PR #7456.

---

*Relatório gerado automaticamente com base em dados do GitHub de 2026-09-19.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do Projeto CoPaw (QwenPaw)

**Data de Referência:** 2026-09-19  
**Fonte:** github.com/agentscope-ai/QwenPaw

---

## 1. Panorama do Dia

O projeto CoPaw/QwenPaw apresenta **alta atividade** em 19 de setembro de 2026, com 24 issues e 50 PRs atualizados nas últimas 24 horas. Foi publicada a versão **v2.2.2-beta.1**, trazendo melhorias no console e comandos slash unificados. O estado geral reflete um projeto saudável com **31 PRs abertos** e **16 issues ativas**, indicando desenvolvimento contínuo. Há的关注点是 **segurança** — uma falha de prompt injection crítica (#7859) e várias correções de bugs relacionadas a estabilidade do event loop e gerenciamento de contexto. A comunidade demonstra engajamento significativo em questões de arquitetura multi-tenant (Hub) e gerenciamento de contexto em sessões longas.

---

## 2. Lançamentos

### ✅ Nova Release: v2.2.2-beta.1

**Link:** https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.2.2-beta.1

| Mudança | Autor | PR |
|---------|-------|-----|
| `feat(console)`: Melhoria no histórico de chat agrupado | @zhaozhuang521 | #7665 |
| `feat(memory)`: Unificação dos comandos slash ReMe | @jinliyl | #7444 |
| `chore`: Bump de versão para 2.2.2b1 | @cuiyuebing | — |

**Notas:**
- **Tipo:** Beta (pré-release)
- **Breaking Changes:** Nenhuma identificada nesta release
- **Notas de Migração:** Não aplicáveis para versão beta

**Verificação de Instalação:**
- Issue #7849 registra o duty de verificação de instalação com deadline 2026-09-18 07:59 UTC
- Status dos checkpoints: [Pending — não disponível nos dados]

---

## 3. Progresso do Projeto

### PRs Recentemente Merged/Fechados (19 total nas últimas 24h)

| PR | Título | Tipo | Status |
|----|--------|------|--------|
| #7223 | Refresh DeepSeek catalog per vendor retirement | fix(providers) | ✅ CLOSED |
| #6316 | Feature: Agent-type cron jobs com especificação opcional de model | enhancement | ✅ CLOSED |
| #7813 | Console stream freezes com bare null literal | Bug fix | ✅ CLOSED |
| #7838 | recall_history_python não registrado silenciosamente | Bug fix | ✅ CLOSED |
| #7837 | User rows sem headline — scroll eviction index precisa chamar modelo | Bug fix | ✅ CLOSED |
| #7812 | Slash commands após startup agem na sessão fallback | Bug fix | ✅ CLOSED |
| #7570 | Pensamento do modelo colapsável após output | enhancement | ✅ CLOSED |
| #7845 | License recommendation para repositórios médicos | discussion | ✅ CLOSED |

**Avanços Principais:**

1. **Provider DeepSeek Atualizado (#7223):** Remoção de modelos descontinuados (deepseek-chat, deepseek-reasoner) e adição de família v4 conforme API vendor.

2. **Cron Jobs Flexíveis (#6316):** Agentes cron agora podem especificar modelo independente via `--model openai/gpt-4o-mini`.

3. **UX de Pensamento (#7570):** Cards de pensamento colapsáveis para modelos de forced-reasoning (GLM-5.x) — reduz clutter visual.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| Issue | Título | Comentários | 👍 | Categoria |
|-------|--------|-------------|----|----|
| **#7318** | QwenPaw Hub — Multi-tenant edition discussion | **30** | 4 | 🔥 Discussion |
| #7853 | ToolResultPruner pula mídia, causa overflow de contexto | 4 | 0 | Bug |
| #7859 | Prompt injection persistente em skill deletion | 4 | 0 | 🔥 Security |
| #7814 | Console SSE com bare null payload | 4 | 0 | Bug |
| #7840 | Plugins congelam toda instância por I/O síncrono | 4 | 0 | Bug |

### Análise das Demandas

**🔥 QwenPaw Hub (#7318):**  
A discussão mais ativa do dia demonstra forte demanda por **funcionalidades multi-tenant**. A comunidade solicita:
- Acesso multi-usuário com permissões granulares
- Skills admin-managed
- Central de compartilhamento de agentes e configurações

**Link:** https://github.com/agentscope-ai/QwenPaw/issues/7318  
*Próximos passos documentados: feature roadmap para 2.2.0*

---

## 5. Bugs e Estabilidade

### Bugs Críticos/Aéreos (Reportados em 24h)

| Severidade | Issue | Descrição | Impacto |
|------------|-------|-----------|---------|
| 🔴 **CRÍTICO** | #7859 | Prompt injection persistente instruindo exclusão de skills | Segurança — dados |
| 🔴 **CRÍTICO** | #7853 | Base64 de view_image acumula sem limite no contexto | Estabilidade — crash |
| 🟠 **ALTO** | #7840 | Plugins síncronos congelam event loop por 40s+ | Disponibilidade |
| 🟠 **ALTO** | #7859 PR #7864 | Correlato — proteção de diretórios contra injeção | Segurança |
| 🟡 **MÉDIO** | #7850 | Lost update em policy do driver durante reload | Consistência |
| 🟡 **MÉDIO** | #7866 | File-area tab mostra conteúdo pré-edição | UX |
| 🟡 **MÉDIO** | #7839 | Session sync falha com "database disk image is malformed" | Dados |
| 🟢 **BAIXO** | #7847 | Percent encoding em filenames pode enviar arquivo errado | Edge case |

### PRs de Correção Relacionados

| PR | Corrige | Status |
|----|---------|--------|
| #7864 | Proteção contra prompt injection em skills | 🔄 OPEN |
| #7854 | Lost update em driver policy | 🔄 OPEN |
| #7842 | Isolamento de hooks síncronos + watchdog | 🔄 OPEN |
| #7872 | Preserva requests interrompidos durante compaction | 🔄 OPEN |
| #7871 | Previne bypass de truncation por markers literais | 🔄 OPEN |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| Issue | Feature | Prioridade | Observação |
|-------|---------|------------|------------|
| **#7733** | Agent-autonomous context management — hand-off suave em eviction | enhancement | Token threshold é cego; agente sabe o que é live |
| **#6316** ✅ | Cron jobs com model opcional | feature | Já implementado |
| #7858 | Fix warnings de coroutine não-await em testes | Tests | Afeta detecção de bugs reais |

### Sinais de Roadmap (baseados em issues + PRs)

| Área | Sinais |
|------|--------|
| **Multi-tenant** | #7318 — Hub v2.2.0 confirmado |
| **Contexto** | #7733 — gestão autônoma por agente |
| **Segurança** | #7859, #7864 — proteção contra injeção |
| **Performance** | #7868 — caching de artefatos imutáveis |
| **Providers** | #6668 — prompt caching para OpenAI Responses |
| **Plugins** | #7842 — isolamento de event loop |

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Categoria | Descrição | Frequência |
|-----------|-----------|------------|
| 🔥 **Contexto estourando** | Sessões longas com ferramentas image-heavy acumulam base64 e crasham | 3+ reports |
| 🔥 **Freezes de UI** | Desktop carrega antes do backend estar pronto (#7841) | Vários Windows users |
| 🟠 **Prompt injection** | Usuários finais não afetados, mas admins reportam | 1 security researcher |
| 🟡 **Modelos quebrados** | OpenCode Go retorna MissingSessionID (#7599) | 1 user, API issue |
| 🟡 **Sincronização de arquivos** | File-area desatualizado após agent reescrever | 1 user |

### Cenários de Uso Observados

1. **Assistentes pessoais em equipes** — demanda por Hub multi-tenant
2. **Análise de código com ferramentas visuais** — base64 de screenshots acumula
3. **Plugins de terceiros** — casos de I/O síncrono bloqueante expostos
4. **Traditional Chinese Medicine (TCM)** — repositórios de skills médicas sendo publicados

### Satisfação Geral

| Métrica | Indicador |
|---------|-----------|
| Atividade | ✅ Alta (50 PRs, 24 issues/24h) |
| Engajamento | ✅ Sólido (30 comments em #7318) |
| Segurança | ⚠️ Alerta (1 critical bug + PR fix em revisão) |
| Estabilidade | ⚠️ 8 bugs reportados, múltiplos PRs abertos |

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Abandonadas

| Issue | Título | Criado | Status | Observação |
|-------|--------|--------|--------|------------|
| #7599 | OpenCode Go MissingSessionID | 2026-09-07 | OPEN (11d) | Sem comentários recentes — API issue? |
| #7841 | Console UI carrega antes do backend (Desktop) | 2026-09-17 | OPEN (2d) | Windows user report |

### PRs Estagnados

| PR | Título | Criado | Última Atualização | Bloqueio |
|----|--------|--------|-------------------|----------|
| #7211 | Prevent injected context from persisting | 2026-08-21 | 2026-09-18 | "Under Review" há 28d |
| #6668 | Support responses prompt caching | 2026-08-04 | 2026-09-18 | "Under Review" há 45d |
| #6381 | Avoid blocking on stale capabilities | 2026-07-23 | 2026-09-18 | "Under Review" há 57d |
| #7409 | Drop empty assistant text blocks | 2026-08-30 | 2026-09-18 | "Under Review" há 19d |

### Recomendações

1. **Revisar #7211, #6668, #6381, #7409** — PRs em "Under Review" há >15 dias merecem triagem ou closure
2. **Validar #7599** — Issue do usuário com API provider pode precisar de direcionamento
3. **Priorizar #7864** — Fix de segurança para prompt injection (#7859) está pronto para review

---

## Resumo Executivo

| Dimensão | Status | Tendência |
|----------|--------|-----------|
| 🔵 Atividade | Alta (50 PRs, 24 issues/24h) | ➡️ Estável |
| 🟢 Releases | 1 beta (v2.2.2-beta.1) | ➡️ Ciclo ativo |
| 🟠 Bugs Críticos | 2 (security + context overflow) | ⬆️ Alerta |
| 🔴 Tech Debt | PRs estagnados (>15d em review) | ⚠️ Atenção |
| 🟢 Comunidade | Engajada (discussion hub + multi-tenant) | ➡️ Positivo |

**Veredicto:** Projeto ativo e saudável, com desenvolvimento robusto de features e resposta rápida a bugs críticos. Atenção necessária em PRs em backlog e validação do fix de segurança (#7864).

---

*Relatório gerado automaticamente com base em dados do GitHub do CoPaw/QwenPaw em 2026-09-19.*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório de Projeto ZeroClaw — 2026-09-19

## 1. Panorama do Dia

O ecossistema ZeroClaw apresenta **alta atividade de desenvolvimento** neste dia, com 50 PRs atualizados e 17 issues no radar das últimas 24h. O projeto demonstra vigoroso progresso em múltiplas frentes técnicas: segurança (PKCE/browser enrollment), arquitetura de plugins WASM, e governança de canais. A ausência de releases novas indica que a equipe está em ciclo de preparação ou refatoração pesada antes do próximo tag. Os indicadores de saúde mostram **15 issues ativas em aberto**, com concentração em bugs de severidade P1 (3 bugs críticos em tratamento) e RFCs de alto impacto aguardando decisão de mantenedores. A razão de 50 PRs para 17 issues sugere pipeline saudável de merge, mas demanda review atenção.

---

## 2. Lançamentos

### Nenhuma release registrada nas últimas 24h

O projeto não publicou novas versões neste período. Isso é consistente com o padrão de trabalho pesado em branches (50 PRs em aberto) e pode indicar que a equipe está acumulando mudanças para uma release coordenada.

---

## 3. Progresso do Projeto

### PRs Closed/Merged Recentemente

| # | Título | Tipo | Risk | Status |
|---|--------|------|------|--------|
| [#10750](https://github.com/zeroclaw-labs/zeroclaw/pull/10750) | feat(plugins): govern channel plugin egress | enhancement | high | **CLOSED** |
| [#10719](https://github.com/zeroclaw-labs/zeroclaw/pull/10719) | fix(providers): preserve tool image references through normalization | bug | low | **CLOSED** |
| [#10292](https://github.com/zeroclaw-labs/zeroclaw/issues/10292) | Bug: ACP session tools cannot list or inspect Code sessions | bug | medium | **CLOSED** |
| [#9882](https://github.com/zeroclaw-labs/zeroclaw/issues/9882) | Image markers bypass content validation on run_model_query seam | bug | high | **CLOSED** |

### Análise dos Principais Avanços

**[#10750](https://github.com/zeroclaw-labs/zeroclaw/pull/10750)** — Governança de egresso de plugins de canal
- Restrutura a autorização de remetentes, publicação de webhooks e geração de daemon
- Preserva factories de `Arc<Component>` reconstruídas
- Marco significativo para a arquitetura de plugins runtime (issue [#8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850))

**[#9882](https://github.com/zeroclaw-labs/zeroclaw/issues/9882)** — Validação de image markers no seam direto
- Endereça bypass de validação de conteúdo reportado como S2 - degraded behavior
- Derivado de #9819 que endureceu o normalizador multimodal

**[#10719](https://github.com/zeroclaw-labs/zeroclaw/pull/10719)** — Preservação de referências de imagem em ferramentas
- Mantém caminhos absolutos e URLs HTTP(S) originais como texto de referência
- Resolve problema de rastreamento de imagens em resultados de ferramentas

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (Comentários)

| # | Título | Comentários | Tipo | Prioridade |
|---|--------|-------------|------|------------|
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | [Tracker]: Maintainer decision queue for RFCs and design issues | **15** | tracker | p2 |
| [#10526](https://github.com/zeroclaw-labs/zeroclaw/issues/10526) | RFC: Append-only session event history, deterministic state replay | **11** | rfc | p2 |
| [#4853](https://github.com/zeroclaw-labs/zeroclaw/issues/4853) | [Feature]: install skills from .well-known agent-skills discovery indexes | **8** | feature | p2 |
| [#8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850) | Move optional channels & tools from compile-time to runtime plugins | **4** | tracker | p2 |
| [#10292](https://github.com/zeroclaw-labs/zeroclaw/issues/10292) | ACP session tools cannot list Code sessions | **3** | bug | p2 |

### Análise dos Temas

**RFC #10526 — Append-only session event history**
Proposta de NiuBlibing para persistência de eventos de turno e replay determinístico de estado. O problema identificado é que fatos de execução ricos estão fragmentados entre `TurnEvent`s, logs, receipts de ferramentas, e estado local de processo. A solução proposta permite streams derivados de agentes e história determinística.

**RFC #10930 — One durable primitive for questions an agent asks a human**
JordanTheJet propõe unificar o mecanismo SOP approval gate como primitivo durável para perguntas agentes→humanos. Currently implementado corretamente, porém isolado.

**[#4853](https://github.com/zeroclaw-labs/zeroclaw/issues/4853)** — Agent Skills Discovery
 jonathanhefner lidera esforço para padronização `.well-known` URI para skills, com participação de Cloudflare e Vercel.

---

## 5. Bugs e Estabilidade

### Bugs P1 (Críticos — Em Progresso/Blockeados)

| # | Severidade | Título | Status | Risk |
|---|------------|--------|--------|------|
| [#10908](https://github.com/zeroclaw-labs/zeroclaw/issues/10908) | S2 | Image markers promoted to attachments without provenance | blocked | high |
| [#9882](https://github.com/zeroclaw-labs/zeroclaw/issues/9882) | S2 | Image markers bypass content validation on run_model_query | in-progress | high |
| [#10643](https://github.com/zeroclaw-labs/zeroclaw/issues/10643) | S2 | fail-closed approval enforcement for bounded child loop tools | in-progress | high |

**Análise:** A categoria "image markers" aparece em 3 bugs P1 relacionados, sugerindo dívida técnica na normalização multimodal. O problema central é que marcadores de imagem em texto de resultado de ferramentas estão sendo promovidos a anexos sem validação de proveniência — risco de segurança.

**Bugs P2 (Degradados — Recentemente Reportados)**

| # | Severidade | Título | Área |
|---|------------|--------|------|
| [#10952](https://github.com/zeroclaw-labs/zeroclaw/issues/10952) | S2 | Seam sanitizers rewrite signed reasoning inside tool-call envelope | provider:anthropic |
| [#10951](https://github.com/zeroclaw-labs/zeroclaw/issues/10951) | S2 | ZeroCode Config refreshes field list twice after saving | zerocode/tui |
| [#10950](https://github.com/zeroclaw-labs/zeroclaw/issues/10950) | S2 | cost.warn_at_percent warnings ignored by runtime | runtime/daemon |
| [#10948](https://github.com/zeroclaw-labs/zeroclaw/issues/10948) | S2 | interruption-scope keys collide across component boundaries | channel |

**Tendência:** 4 bugs S2 novos reportados em um único dia indica possível regressão ou mudança recente引发 instabilidade. Particularmente preocupante: `cost.warn_at_percent` funcionalmente quebrado pode afetar usuários com limites de orçamento.

---

## 6. Pedidos de Features e Sinais de Roadmap

### RFCs em Discussão

| # | Título | RFC | Área | Comentários |
|---|--------|-----|------|-------------|
| [#10526](https://github.com/zeroclaw-labs/zeroclaw/issues/10526) | Append-only session event history, deterministic state replay | sim | runtime | 11 |
| [#10930](https://github.com/zeroclaw-labs/zeroclaw/issues/10930) | One durable primitive for questions an agent asks a human | sim | agent | 2 |

### Novas Features Recém-Propostas

| # | Título | Escopo | Complexidade |
|---|--------|--------|--------------|
| [#10963](https://github.com/zeroclaw-labs/zeroclaw/issues/10963) | Forward session identity to delegate sub-agents | tool:delegate | arquivo delegate.rs |
| [#10962](https://github.com/zeroclaw-labs/zeroclaw/issues/10962) | Forward tool result payloads over gateway /ws/chat stream | gateway | WebSocket stream |

**Sinal de Roadmap:** O foco em `delegate` sub-agents e gateway streaming indica direção de producto para **composição multi-agente** e **observabilidade em tempo real**.

### PRs de Features de Alto Impacto (Open)

| # | Título | Área | Size | Risk |
|---|--------|------|------|------|
| [#10321](https://github.com/zeroclaw-labs/zeroclaw/pull/10321) | feat(security): browser PKCE + cross-surface enrollment API (#8289 stage 5) | security | XL | high |
| [#10407](https://github.com/zeroclaw-labs/zeroclaw/pull/10407) | feat(sessions): add persistent session prompt attachments | sessions | XL | high |
| [#10425](https://github.com/zeroclaw-labs/zeroclaw/pull/10425) | feat(runtime): internal-principal envelope and separated cron run outcomes (RFC #6954) | runtime | XL | high |
| [#9584](https://github.com/zeroclaw-labs/zeroclaw/pull/9584) | feat(cli): egress grant ceremony for plugin install/list | cli | XL | high |

---

## 7. Resumo de Feedback dos Usuários

### Sinais Extraídos dos Issues

**Dores Identificadas:**

1. **Fragmentação de estado de execução** — Usuários técnicos (NiuBlibing) reportam que fatos de execução estão "espalhados" entre múltiplos sistemas, dificultando debugging e replay.

2. **Observabilidade limitada no streaming** — eppofahmi reporta que clientes do gateway WebSocket não recebem payloads de resultado de ferramentas, apenas lifecycle frames.

3. **Configuração de custo não funcional** — Audacity88 identifica que `cost.warn_at_percent` não dispara warnings, afetando usuários com controle de orçamento.

4. **Dificuldade de descoberta de skills** — O pedido por `.well-known` URI standardization (#4853) indica demanda por ecossistema de skills mais descobrível.

### Cenários de Uso Emergentes

- **Multi-bot Telegram groups** — PR #10640 implementa passive group context para ambientes com múltiplos bots (rifuki).
- **Delegação encadeada** — Sessões delegadas não recebem identity context, limitando casos de uso de sub-agentes.
- **ZeroCode Config UX** — Double refresh após save impacta experiência do editor de configuração.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Stale

| # | Título | Criado | Atualizado | Gap |
|---|--------|--------|------------|-----|
| [#4853](https://github.com/zeroclaw-labs/zeroclaw/issues/4853) | install skills from .well-known indexes | 2026-03-27 | 2026-09-18 | **~6 meses** — feature grande, depende de padronização externa |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | Maintainer decision queue tracker | 2026-07-04 | 2026-09-17 | **~2.5 meses** — 15 comentários, precisa ação de mantenedor |
| [#8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850) | Move to runtime WASM plugins | 2026-07-08 | 2026-09-18 | **~2 meses** — arquitetura em progresso (#10750 merged) |

### Issues Blockeadas Aguardando Resolução

| # | Título | Bloqueio | Impacto |
|---|--------|----------|---------|
| [#10908](https://github.com/zeroclaw-labs/zeroclaw/issues/10908) | Image markers promoted without provenance | awaiting decisão de segurança | high risk |
| [#10772](https://github.com/zeroclaw-labs/zeroclaw/issues/10772) | zeroclaw-eval archive fixture independence | 1 comentário, sem mantenedor review | medium risk |

### Recomendações

1. **Priorize review do RFC #10526** — 11 comentários indicam alta demanda; a feature (deterministic replay) é diferenciadora.
2. **Revisite #4853** — 6 meses sem resolução; evaluate se ainda alinhado com estratégia ou deve ser closed.
3. **Acelere resolução de P1s de image markers** — 3 bugs relacionados sugerem necessidade de refatoração centralizada do normalizador multimodal.
4. **Mantenha comunicação no #8692** — 15 comentários sem decisão concrete pode frustrar contribuidores.

---

## Métricas de Saúde do Projeto

| Indicador | Valor | Status |
|-----------|-------|--------|
| Issues ativas (24h) | 15 | 🟢 Normal |
| PRs em aberto | 46 | 🟢 Pipeline saudável |
| Bugs P1 abertos | 3 | 🟡 Requer atenção |
| RFCs em discussão | 2 | 🟢 Engajamento saudável |
| Releases (24h) | 0 | 🟡 Pré-release ou pausa |
| PRs closed/merged (24h) | 4 | 🟢 Conversão ok |

**Veredicto Geral:** ZeroClaw demonstra **saúde estável com pressão de segurança**. A atividade de开发 é alta, mas a concentração de bugs P1 relacionados a validação de conteúdo multimodais sugere necessidade de atenção focada em hardening antes da próxima release.

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*