# Resumo diário do ecossistema de agentes de IA 2026-09-08

> Issues: 0 | PRs: 1 | Projetos cobertos: 7 | Gerado em: 2026-09-07 22:28 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório do Projeto NullClaw — 2026-09-08

## 1. Panorama do dia

O projeto **NullClaw** apresenta atividade extremamente limitada em 08 de setembro de 2026. Nas últimas 24 horas, não houve atualizações em issues e nenhuma release foi publicada. Apenas **1 Pull Request** foi atualizado, proveniente do Dependabot para atualização de dependência Docker. O projeto aparenta estar em estado de **hibernação ou manutenção mínima**, sem engajamento ativo da comunidade desenvolvedora no período recente.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O último ciclo de desenvolvimento não produziu versões novas, indicando possível estagnação ou transição de fase do projeto.

---

## 3. Progresso do Projeto

| PR | Status | Descrição | Impacto |
|----|--------|-----------|---------|
| [#956](https://github.com/nullclaw/nullclaw/pull/956) | **ABERTO** | Atualização do alpine de 3.23 para 3.24 no grupo docker-images | Manutenção de dependência Docker |

**Análise:** O PR aberto [#956](https://github.com/nullclaw/nullclaw/pull/956) é uma atualização automática do Dependabot para a imagem base Alpine Linux. Embora seja uma mudança menor (patch de versão), manter imagens Docker atualizadas é importante para segurança e compatibilidade. **Nenhum merge ocorreu nas últimas 24h.**

---

## 4. Temas Quentes da Comunidade

**Nenhuma issue ou PR com comentários significativos registrada nas últimas 24h.**

O projeto não demonstra atividade comunitária discursiva no momento, seja por meio de issues abertas, discussões técnicas ou feedback dos mantenedores.

---

## 5. Bugs e Estabilidade

**Nenhum bug ou regressão reportada nas últimas 24h.**

A ausência de issues abertas ou fechadas não necessariamente indica estabilidade total — pode refletir baixa vigilância ou testagem da base de código.

---

## 6. Pedidos de Features e Sinais de Roadmap

**Nenhum feature request registrado nas últimas 24h.**

Sem novos sinais de direção de roadmap ou demandas de funcionalidades emergentes.

---

## 7. Resumo de Feedback dos Usuários

**Sem feedback registrado.**

A comunidade não deixou comentários, issues de suporte ou reports de experiência nas últimas 24h.

---

## 8. Backlog que Merece Atenção

| Item | Tipo | Idade Estimada | Prioridade |
|------|------|----------------|------------|
| Revisão do PR #956 | Dependabot PR | ~85 dias em aberto | **Alta** |

### Análise do Backlog

O **PR #956** do Dependabot permanece aberto desde **15 de junho de 2026** (~85 dias). Esta pendência levanta preocupações:

1. **Dívida de manutenção:** Atualizações de segurança em imagens Docker são críticas para ambientes de produção
2. **Sinal de negligência:** A ausência de merges pode indicar que o projeto não está sendo ativamente mantido
3. **Recomendação:** Os mantenedores devem avaliar e priorizar este PR para garantir compliance de segurança

---

## Métricas Consolidada do Período

| Métrica | Valor |
|---------|-------|
| Issues abertas/ativas | 0 |
| Issues fechadas | 0 |
| PRs abertos | 1 |
| PRs merged/fechados | 0 |
| Releases | 0 |
| Comentários totais | 0 |

---

## Veredicto: Saúde do Projeto

> **⚠️ INDICADOR AMARELO — Atividade Mínima**

O projeto NullClaw demonstra **sinais de baixa manutenção** no período analisado. A ausência de atividade de issues, releases e merge de PRs — mesmo de atualizações automáticas de dependências — sugere que o projeto pode estar:

- Em fase de **hibernação/descontinuidade**
- Sem mantenedores ativos
- Em transição de propriedade ou arquitetura

**Recomendação:** Verificar diretamente com os mantenedores sobre o status do projeto e, caso utilize NullClaw em produção, considerar forks alternativos ou soluções alternativas para agentes de IA e assistentes pessoais.

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo — Ecossistema Open Source de Agentes de IA

## 2026-09-08

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA e assistentes pessoais demonstra **polarização significativa** no nível de atividade e maturidade. **Hermes Agent** e **ZeroClaw** lideram em volume de desenvolvimento (50+ items atualizados/24h), sinalizando projetos em fase de crescimento acelerado. **NanoBot** e **CoPaw** apresentam ritmo saudável com foco em estabilização pós-release. Em contraste, **NullClaw** e **PicoClaw** exibem sinais de hibernação ou manutenção mínima, enquanto **IronClaw** opera em modo de refinamento incremental. A principal preocupação transversal é a **estabilidade de sessões e persistência de dados** — um tema que aparece em 4 dos 7 projetos analisados.

---

## 2. Comparação de Atividade

| Projeto | Issues Ativas | PRs Abertos | PRs Merged (24h) | Releases (24h) | P1 Bugs | Saúde |
|---------|---------------|-------------|------------------|-----------------|---------|-------|
| **NullClaw** | 0 | 1 | 0 | 0 | 0 | 🔴 Hibernação |
| **NanoBot** | 1 | 15 | 8 | 0 | 0 | 🟢 Estável |
| **Hermes Agent** | 32 | 36 | 14 | 1 | 4 | 🟡 Regressões ativas |
| **PicoClaw** | 1 | 3 | 0 | 0 | 0 | 🟠 Manutenção |
| **IronClaw** | 1 | 5 | 0 | 0 | 0 | 🟢 Estável |
| **CoPaw** | 23 | 30 | 18 | 0 | 5 | 🟡 Regressões v2.2.0 |
| **ZeroClaw** | 28 | 47 | 1 | 0 | 11 | 🔴 Intensivo estabilidade |

**Observações:**
- **ZeroClaw** tem o maior volume de bugs P1 (11), indicando foco em estabilização
- **Hermes Agent** é o único com release no período (v0.21.1 patch)
- **CoPaw** lidera em merges (18/24h), demonstrando ritmo de entrega saudável
- **NullClaw** permanece em silêncio total há 85+ dias

---

## 3. Posicionamento do Projeto Principal

### Hermes Agent (NousResearch) — Líder em Volume

| Dimensão | Posicionamento |
|----------|----------------|
| **Comunidade** | Maior engajamento (75 comentários na issue #88584) |
| **Release cadence** | Patch releases frequentes (v0.21.1) |
| **Escopo** | Multi-plataforma (QQ Bot, Telegram, Zed, Desktop) |
| **Diferencial** | ACP protocol nativo, gateway integrado |
| **Bug total** | 14+ bugs P1-P2 em aberto |

**Vantagem competitiva:** Integração nativa com múltiplos canais de comunicação e arquitetura de gateway centralizada oferece menor atrito para deployments corporativos.

### ZeroClaw — Maior Pressão de Estabilidade

| Dimensão | Posicionamento |
|----------|----------------|
| **Volume** | 50 PRs/30 issues atualizados — segundo maior |
| **Bugs P1** | 11 bugs críticos (maior concentração) |
| **Foco** | Confiabilidade de sessões e cron |
| **Diferencial** | Perfil `local_small` com budget de 8k tokens |

**Diferença técnica:** ZeroClaw investe em eficiência de contexto (budget enforcement), enquanto Hermes Agent prioriza amplitude de integração.

---

## 4. Focos Técnicos Compartilhados

### 4.1 Persistência e Estabilidade de Sessões
**Afeta:** ZeroClaw (P1), Hermes Agent (P1), NanoBot (P2), CoPaw (P1)

```
ZeroClaw:  #9333 - Failed ACP turns desaparecem ao trocar sessão
Hermes:   #104653 - Mensagens duplicadas (gateway + agent flush)
NanoBot:   #5688 - Estado do provider invalidado após compactação
CoPaw:     #7579 - Respostas do modelo perdidas do contexto
```

**Recomendação transversal:** Implementar checkpoint de progresso antes de cualquier operación de state change.

### 4.2 Problemas de Provedores e Fallback
**Afeta:** Hermes Agent (#65038), NanoBot (#5675), ZeroClaw (#10674)

- `fallback_providers` ignorado em chains herdeiras
- Cache de prompt quebrado por trimming agressivo
- Timeout hardcoded (CoPaw: 30s não configurável)

### 4.3 UX Multi-Canal
**Afeta:** NanoBot (#5567), Hermes Agent (#32528), CoPaw (#7585)

- Fragmentação de mensagens em canais externos (Feishu, QQ, Telegram)
- Markdown tables não renderizam em Telegram
- Falta de feedback visual durante retries

### 4.4 Integração com Plataformas Asiáticas
**Afeta:** PicoClaw (#3365), Hermes Agent (#32528), NanoBot (#5567)

- QQ Bot: Authentication errors e chat_type mismatch
- Feishu: Multi-mensagem vs. cartão consolidado
- WeChat: Sync cursor e transcrição de voz (ZeroClaw #10688)

---

## 5. Análise de Diferenciação

| Projeto | Público-Alvo | Arquitetura | Foco Principal |
|---------|-------------|-------------|----------------|
| **Hermes Agent** | DevOps, automação corporativa | Gateway centralizado, ACP protocol | Multi-plataforma, integrations |
| **ZeroClaw** | Desenvolvedores avançados | Modular com ACP, daemon RPC | Eficiência de contexto, cache |
| **CoPaw** | Times multi-agente | Plugin-based, memory backend | Escalabilidade (74+ agents), dashboard |
| **NanoBot** | Usuários finais | WebUI + providers flexíveis | UX polish, reliability |
| **IronClaw** | Usuários internos | Benchmark/eval-focused | Qualidade de output, taxonomy |
| **PicoClaw** | Hardware ARM64, niche | Minimal, provider-agnostic | Suporte a new providers |
| **NullClaw** | — | — | Sem desenvolvimento ativo |

**Diferenciação clara:**
- **Hermes** vs **ZeroClaw**: Integração ampla vs. eficiência profunda
- **CoPaw** vs **NanoBot**: Multi-agente enterprise vs. single-user polish
- **IronClaw** opera em camada de avaliação, não diretamente em produção

---

## 6. Tração e Maturidade da Comunidade

### Projetos em Iteração Rápida

| Projeto | Indicadores |
|---------|-------------|
| **CoPaw** | 5 first-time contributors/24h, 18 merges, +245 unit tests |
| **Hermes Agent** | 75 comentários em issue única, 14 PRs merged |
| **NanoBot** | 8 merges, foco em UX — maduro e estável |

### Projetos em Consolidação de Qualidade

| Projeto | Indicadores |
|---------|-------------|
| **ZeroClaw** | 11 P1 bugs em aberto, ciclo de stabilization mode |
| **IronClaw** | 5 PRs de UX aguardando batch review |

### Projetos com Engajamento Decrescente

| Projeto | Indicadores |
|---------|-------------|
| **NullClaw** | PR #956 em aberto há 85 dias, sem atividade |
| **PicoClaw** | 2 PRs stale, 1 bug crítico sem resolução |

**Maturidade relativa (por volume de comunidade):**
```
Hermes Agent > CoPaw > ZeroClaw > NanoBot > IronClaw > PicoClaw > NullClaw
```

---

## 7. Sinais de Tendência

### 7.1 Exigência de Resiliência em Produção
O volume de bugs relacionados a **fallback de providers**, **persistência de sessões** e **cron delivery** indica que o mercado está migrando de protótipos para deployments unattended.

- ZeroClaw: Tracker P1 para "reliable agent delivery and cron outcome reporting" (#10685)
- Hermes: Bug P2 sobre D-Bus session sem systemd (#104893)
- NanoBot: Múltiplos PRs de model retry status (#5504)

### 7.2 Fragmentação de Canais como Dor Principal
Três projetos independentemente reportam problemas de **multi-mensagem vs. cartão consolidado** em canais asiáticos (Feishu, QQ, WeChat). Isso sugere demanda por **abstraction layer de messaging** que unifique comportamento cross-platform.

### 7.3 Eficiência de Contexto como Feature
ZeroClaw implementa `local_small` profile com teto de 8.000 caracteres — sinal de que **budget enforcement** será diferencial competitivo à medida que custos de inference crescem.

### 7.4 Modularização de Memória
CoPaw (#7613), ZeroClaw (multi-sessão #9739), e Hermes (plugin system) apontam para **arquiteturas plugin-based** como direção estratégica, permitindo backends de memória customizáveis.

### 7.5 Regressões como Risco Principal
CoPaw e Hermes enfrentam **regressões do último release major**, indicando que ciclos de release mais curtos (comunitários) sacrificam QA. Isso cria oportunidade para projetos com processos de regression testing mais robustos.

---

## Recomendação para Decisores

| Cenário | Projeto Recomendado | Justificativa |
|---------|-------------------|---------------|
| **Deploy corporativo multi-canal** | Hermes Agent | Integrações QQ, Telegram, Feishu maduras |
| **Maximizar contexto por custo** | ZeroClaw | Budget enforcement, cache otimizado |
| **Escala multi-agente** | CoPaw | Dashboard para 74+ agents, plugin system |
| **Usuário final polido** | NanoBot | UX refinada, WebUI madura |
| **Evitar:** | NullClaw, PicoClaw | Sem manutenção ativa |

**Próxima atualização recomendada:** 2026-09-09 para monitorar resolução de bugs P1 em ZeroClaw e regressões v2.2.0 em CoPaw.

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot
## Data: 2026-09-08 | Repositório: [HKUDS/nanobot](https://github.com/HKUDS/nanobot)

---

## 1. Panorama do Dia

O NanoBot apresenta **alta atividade de desenvolvimento** nesta data, com 23 PRs atualizados nas últimas 24h e 8 merges realizados. A atividade concentra-se em correções de bugs (especialmente regressões e problemas de performance) e melhorias na experiência do usuário na WebUI. Não houve lançamento de novas versões, mas o projeto demonstra maturidade operacional com foco em estabilidade. A issue aberta #5567 destaca uma demanda importante para consolidação de mensagens no canal Feishu.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto encontra-se em fase de consolidação de mudanças antes do próximo tag. Recomenda-se monitorar a branch principal para eventuais hotfixes.

---

## 3. Progresso do Projeto

### PRs Merged/Fechadas (8 total)

| # | PR | Autor | Impacto |
|---|-----|-------|---------|
| [#5690](https://github.com/HKUDS/nanobot/pull/5690) | docs: unificar instalação do personal agent com quick start | chengyongru | Melhora experiência de onboarding, unificando fluxos de instalação |
| [#5689](https://github.com/HKUDS/nanobot/pull/5689) | fix(webui): manter timer consistente após primeira saída | chengyongru | Corrige exibição incorreta do timer de trabalho |
| [#5688](https://github.com/HKUDS/nanobot/pull/5688) | fix(memory): invalidar estado do provider após compactação idle | chengyongru | Corrige bug onde sessões retomavam histórico antigo após archive |
| [#5504](https://github.com/HKUDS/nanobot/pull/5504) | fix(ui): exibir status de retry do modelo (NAN-34) | chengyongru | Melhora feedback visual sobre tentativas de reconexão do modelo |
| [#5685](https://github.com/HKUDS/nanobot/pull/5685) | fix(webui): retomar configuração incompleta do modelo no browser | chengyongru | Melhora UX ao manter setup do modelo na WebUI |
| [#5684](https://github.com/HKUDS/nanobot/pull/5684) | docs: atualizar README com galeria de features da WebUI | chengyongru | Melhora documentação visual do projeto |

### Destaque de Merge

**#5504** - Surface model retry status: Implementa exibição de countdown e progresso de retry diretamente na interface, melhorando significativamente a transparência operacional para usuários.

---

## 4. Temas Quentes da Comunidade

### Issue em Destaque

| # | Título | Comentários | Reações |
|---|--------|-------------|---------|
| [#5567](https://github.com/HKUDS/nanobot/issues/5567) | Feat: 飞书渠道应整合多轮回复为单条流式卡片消息 | 5 | 0 |

**Análise:** A issue #5567 propõe consolidar múltiplas mensagens do agente (tips de ferramentas, progresso, resposta final) em uma **única mensagem de cartão streaming** no canal Feishu. O problema atual é que usuários veem mensagens fragmentadas, degradando a experiência conversacional. Esta demanda reflete uma necessidade de UX mais polish em canais de terceiros.

### PRs com Maior Atividade Potencial

- **#5580** (fix(session): move persistence off event loop) - P1, impacta performance global do event loop
- **#5662** (feat(providers): send x-opencode-session header) - P1, alinhamento com API do OpenCode (deadline: 2026-09-06)

---

## 5. Bugs e Estabilidade

### Bugs Reportados/Abertos (por severidade)

| Prioridade | # | Descrição |
|------------|---|-----------|
| **P1** | [#5580](https://github.com/HKUDS/nanobot/pull/5580) | Session persistence bloqueia event loop, afetando conversas não relacionadas |
| **P2** | [#5692](https://github.com/HKUDS/nanobot/pull/5692) | Filtros glob recursivos falham em `find_files` e `grep` |
| **P2** | [#5675](https://github.com/HKUDS/nanobot/pull/5675) | Fallback de provider não funciona após deadline do runner |
| **P2** | [#5630](https://github.com/HKUDS/nanobot/pull/5630) | Arquivos Dream memory crescem sem limite, causando prompts inflados |
| **P2** | [#5691](https://github.com/HKUDS/nanobot/pull/5691) | Fórmulas matemáticas multiline com $ quebram renderização KaTeX |
| **P2** | [#5686](https://github.com/HKUDS/nanobot/pull/5686) | Cron callback causa CancelledError ao editar job store |

### Regressões Identificadas

- **#5630**: Remoção acidental do tamanho máximo em arquivos SOUL.md/USER.md/memory/MEMORY.md
- **#5675**: Model failover nunca tenta fallback quando primary call agotou deadline

**Métrica:** 6 bugs abertos, 4 P1/P2 com potencial de impacto significativo.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Propostas

| # | Feature | Autor | Prioridade |
|---|---------|-------|------------|
| [#5567](https://github.com/HKUDS/nanobot/issues/5567) | Consolidar respostas multi-turn em único cartão streaming (Feishu) | yrxeva | - |
| [#5611](https://github.com/HKUDS/nanobot/pull/5611) | Limitar reasoning replay ao turno mais recente do assistant | HUAN2022A | - |
| [#5602](https://github.com/HKUDS/nanobot/pull/5602) | Adicionar som de notificação ao completar turno (WebUI) | 0717lee | P2 |
| [#5547](https://github.com/HKUDS/nanobot/pull/5547) | Som de notificação opt-in quando turno completa | Flan246 | P2 |
| [#5662](https://github.com/HKUDS/nanobot/pull/5662) | Enviar header x-opencode-session para OpenCode | GUTYL | P1 |
| [#5628](https://github.com/HKUDS/nanobot/pull/5628) | Backend sandbox Seatbelt para macOS | LuckTerence | P2 |
| [#5607](https://github.com/HKUDS/nanobot/pull/5607) | Adicionar provider AnySearch (key-optional, quota anônima) | cleverLucky | P2 |
| [#5676](https://github.com/HKUDS/nanobot/pull/5676) | Seleção de target Desktop no CLI | Re-bin | - |

### Sinais de Roadmap

1. **Melhoria de UX em canais**: Consolidar múltiplas mensagens em fluxo único
2. **Performance**: Isolar I/O de sessão do event loop (P1)
3. **Notificações**: Sons de conclusão de turno becoming padrão na WebUI
4. **Providers**: Adição de novos provedores (OpenCode, AnySearch) e melhor tratamento de fallback

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

1. **Fragmentação de mensagens em canais externos** (#5567)
   - Usuários do Feishu recebem múltiplas mensagens separadas durante uma única interação
   - Impacto: Experiência conversacional degradada

2. **Timer inconsistente na WebUI** (já corrigido em #5689)
   - "Working for 13-15s" aparecia antes da primeira saída
   - Impacto: Confusão visual

3. **Setup de modelo perdido ao fechar WebUI prematuramente** (já corrigido em #5685)
   - Usuários eram redirecionados ao wizard de terminal
   - Impacto: Fricção no onboarding

4. **Falta de feedback durante retries de modelo** (corrigido em #5504)
   - Usuários não sabiam se sistema estava tentando reconectar
   - Impacto: Ansiedade do usuário

### Cenários de Uso em Destaque

- **Uso corporativo via Feishu**: Requer experiência mais polida com múltiplos canais
- **Desenvolvimento com modelos de fallback**: Necessidade de resiliência quando primary provider falha
- **Sessões longas**: Arquivos de memória podem crescer indefinidamente

---

## 8. Backlog que Merece Atenção

### Issues/PRs Sem Resposta há >7 dias

| # | Tipo | Título | Status | Atualizado |
|---|------|--------|--------|------------|
| [#5567](https://github.com/HKUDS/nanobot/issues/5567) | Issue | Consolidar respostas Feishu em cartão streaming | OPEN | 2026-09-07 |

### Issues Antigas com Atividade Recente

Nenhuma issue antiga demonstrou atividade adicional nas últimas 24h.

### PRs com Conflitos

| # | Título | Conflitos |
|---|--------|-----------|
| [#5580](https://github.com/HKUDS/nanobot/pull/5580) | fix(session): move persistence off event loop | ⚠️ |
| [#5602](https://github.com/HKUDS/nanobot/pull/5602) | feat(webui): add completion notification sound | ⚠️ |
| [#5547](https://github.com/HKUDS/nanobot/pull/5547) | feat(webui): play notification sound | ⚠️ |

**Recomendação:** Priorizar resolução de conflitos em #5580 (P1) e consolidar trabalho duplicado em notificações sonoras (#5602 e #5547).

---

## Métricas Resumidas do Dia

| Indicador | Valor |
|-----------|-------|
| Issues abertas/ativas | 1 |
| PRs abertos | 15 |
| PRs merged/fechados | 8 |
| Novas releases | 0 |
| Bugs P1-P2 abertos | 6 |
| Features em desenvolvimento | 8 |
| Conflitos em PRs | 3 |

---

*Relatório gerado em 2026-09-08 com base em dados do GitHub do NanoBot (HKUDS/nanobot).*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-09-08

---

## 1. Panorama do Dia

O projeto Hermes Agent mantém **atividade intensa** com 50 issues e 50 PRs atualizados nas últimas 24h, indicando uma sprint de desenvolvimento acelerada. O release **v0.21.1** foi taggeado como patch, sinalizando estabilização pós-desenvolvimento intensivo. Observa-se **concentração de bugs P1** na componentística de gateway, cron e sessões, enquanto a comunidade demonstra engajamento significativo em discussões de segurança (aprovals bypass, steer-marker injection) e integração multi-plataforma (QQ Bot, Telegram, Zed). A saúde geral é **moderada com regressões ativas** requerendo atenção urgente.

---

## 2. Lançamentos

### v2026.9.7 — Hermes Agent v0.21.1

| Campo | Detalhe |
|-------|---------|
| **Data** | 7 de setembro de 2026 |
| **Tipo** | Patch release |
| **Commit** | `6178e9f4eed8d99f4fc550add939d58c7bed6206` |
| **Escopo** | Rollup do main desde v0.21.0 |

**Mudanças incluídas:**
- Preparação de versão para deployments taggeados
- Notas completas e créditos diferidos para v0.22.0

**Breaking changes:** Nenhuma — patch backward-compatible.

**Notas de migração:** Não aplicável para patches.

🔗 [Release v2026.9.7](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.9.7) | 🔗 [PR #105374](https://github.com/NousResearch/hermes-agent/pull/105374)

---

## 3. Progresso do Projeto

### PRs Fechados/Merged (últimas 24h)

| PR | Título | Impacto |
|----|--------|---------|
| **#105374** | `chore: release v0.21.1 (2026.9.7)` | Liberação do patch para downstream consumers |
| **#104267** | `Feature: Add ublock origin (ad block) for desktop preview` | Funcionalidadenova — bloqueador de ads no preview desktop |

**Destaque estratégico:**
- **#104267** adiciona uBlock Origin Lite ao desktop preview, resolvendo dor de automação/browsing onde propagandas comprometiam tarefas. Inclui setting em configurações avançadas.

🔗 [Todos os PRs fechados](https://github.com/NousResearch/hermes-agent/pulls?q=is%3Apr+closed%3A%3A2026-09-07)

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários/reações)

| Issue | Comentários | 👍 | Tema Central |
|-------|-------------|----|--------------|
| **#88584** | 75 | 0 | Automated Nous integration bloqueada — merge conflict em `cron/jobs.py` |
| **#39609** | 12 | 1 | Bug: Tasks `--initial-status blocked` auto-promovidas para `ready` sem actor |
| **#65038** | 12 | 0 | `delegation.fallback_providers` ignorado — workers herdam fallback chain do parent |
| **#32528** | 10 | 0 | QQ Bot C2C: botões de aprovação sempre rejeitados como unauthorized |
| **#58135** | 6 | 0 | `is_container()` false-positives em hosts com Docker — quebra browser auto-launch |

**Análise das demandas:**
- **Integração Nous-Enterkey (#88584)**: Conflito técnico em cronograma de merge esperado, com workflow rodando em ambiente externo. Comunidade拭目以待.
- **Segurança de Aprovação (#104308)**: `approvals.deny` pode ser burlado via path rewrite — issue draft com 4 comentários, sinaliza preocupação com hardening de segurança.
- **QQ Bot Platform (#32528, #35760, #40655, #82501, #98100)**: Padrão de bugs duplicados indica problema arquitetural recorrente em `chat_type` mismatch (dm vs c2c).

🔗 [Issue #88584](https://github.com/NousResearch/hermes-agent/issues/88584) | 🔗 [Issue #39609](https://github.com/NousResearch/hermes-agent/issues/39609)

---

## 5. Bugs e Estabilidade

### P1 — Críticos (impactosevero)

| Issue | Componente | Descrição | Status |
|-------|------------|-----------|--------|
| **#104653** | gateway, agent | Mensagens do usuário persistidas **duas vezes** (gateway + agent flush) — `platform_message_id` NULL em uma row | OPEN |
| **#102589** | cron, gateway | `lifecycle_guard` abre `state.db` com raw `os.open()`, liberando POSIX locks → WAL split-brain | OPEN |
| **#105228** | tui, desktop | Erros em sessões new/existing no perfil default — `Profile '.hermes' does not exist` | OPEN |
| **#104893** | cron | Worker dispatch fail-closed sem D-Bus session em systemd hosts — 100% dos cron jobs falham | CLOSED |

### P2 — Importantes

| Issue | Componente | Descrição |
|-------|------------|-----------|
| **#39609** | cron | Auto-promotion de tasks blocked para ready sem actor |
| **#65038** | agent, tool/delegate | `falllation.fallback_providers` ignorado |
| **#32528** | gateway, qqbot | Aprovação C2C rejeitada (chat_type mismatch) |
| **#84672** | cron, skills | Scanners de conteúdo penalizam documentação de segurança |
| **#104402** | agent | Modelo reasoning com stale floor incorreto mata prefill em endpoints locais |
| **#105371** | agent, cli | Custom providers nomeados ignoram timeouts configurados |

### P3 — Observação

| Issue | Componente | Descrição |
|-------|------------|-----------|
| **#88584** | cron | Nous integration bloqueada |
| **#104308** | tools, terminal | `approvals.deny` burlável via path rewrite |
| **#105235** | gateway, tts | TTS streaming: primeira frase com threshold configurável |

**Regressões de Segurança:**
- **#81828** (P2): Steer-Marker pode ser auto-fabricado pelo modelo (prompt injection)

🔗 [Label: P1 bugs](https://github.com/NousResearch/hermes-agent/issues?q=is%3Aissue+P1) | 🔗 [Label: security](https://github.com/NousResearch/hermes-agent/issues?q=label%3Atype%2Fsecurity)

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em Desenvolvimento (PRs abertos)

| PR | Título | Área | Prioridade |
|----|--------|------|------------|
| **#105007** | Gate external delivery on session persistence | gateway, sessions | P3 |
| **#98307** | feat(bot-mode): Group Chat continuity, control, files | desktop, plugins | P3 |
| **#96933** / **#105246** | Streaming TTS first-sentence threshold configurável | tts, streaming | P3 |
| **#105378** | Folder-scoped project session queries | tui, desktop | P3 |
| **#104038** | Gate streamed responses before delivery | gateway | P3 |
| **#105376** | Kanban: workers can close gates they opened | kanban | P3 |

### Sinais de Roadmap

1. **Continuidade multi-device**: Bot Mode + Group Chat (#98307) indicam foco em experiência cross-platform
2. **Streaming TTS configurável**: Demanda por ajuste fino de latência perceptual
3. **Segurança de aprovação**: `approvals.deny` bypass (#104308) deve gerar hardening na próxima versão
4. **SQLite WAL hardening**: PR #105101 implementa fail-closed para writers vulneráveis

🔗 [PRs com label: enhancement](https://github.com/NousResearch/hermes-agent/pulls?q=is%3Apr+label%3Atype%2Ffeature) | 🔗 [PR #98307](https://github.com/NousResearch/hermes-agent/pull/98307)

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Categoria | Descrição | Frequência |
|-----------|-----------|------------|
| **Estabilidade de sessão** | Mensagens duplicadas, erros de profile, estado inconsistente | Alta |
| **QQ Bot** | Aprovação de comandos em DM sempre falha,用户体验 quebrado | Alta (duplicados) |
| **Docker detection** | `is_container()` false-positive quebra browser auto-launch | Média |
| **Custom providers** | Timeouts e chaves ignoradas em providers nomeados | Média |
| **Desktop UI** | Flash de compositor, foco roubado em typing | Média |
| **Headless install** | Bot Mode `message_agent` inacessível sem desktop app | Baixa |

### Cenários de Uso Identificados

- **Automação headless**: Usuários rodando em systemd sem D-Bus — cron jobs quebrados
- **Dev container workflows**: Hosts com Docker Desktop (cgroup v2) afetados por false-positive `is_container()`
- **Multi-profile**: Default profile `.hermes` causando path confusion entre basename e profile id
- ** Zed integration**: ACP model picker quebrado em Zed 1.18+ — adapter em API legada

### Satisfação Geral

**Mista** — comunidade ativa reportando bugs granulares, mas regressões P1 (especialmente session state) indicam pressão em estabilidade. Release rápido de v0.21.1 sugere resposta à demanda por patches.

🔗 [Issues com label: bug](https://github.com/NousResearch/hermes-agent/issues?q=is%3Aissue+label%3Atype%2Fbug)

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Estagnadas

| Issue | Idade | Comentários | Prioridade | Motivo |
|-------|-------|-------------|------------|--------|
| **#64494** | ~2 meses | 2 | P3 | Kanban runtime gate não pode ser habilitado via CLI — feature request neglicenciado |
| **#90451** | ~1 mês | 2 | P3 | Plugin installer rejeita manifest v2 mesmo com loader suportando |
| **#81828** | ~1 mês | 3 | P2 | Steer-Marker bypass por prompt injection — security review pendente |
| **#88584** | ~3 semanas | 75 | P3 | Nous integration bloqueada — discussão ativa mas sem resolução de merge |

### Recomendação de Triagem

1. **Alta prioridade**: Revisar **#81828** (segurança) e **#88584** (integração bloqueante)
2. **Média prioridade**: Resolver duplicados de QQ Bot (#32528, #35760, #40655, #82501, #98100) — consolidação em issue única recomendada
3. **Documentação**: **#105359** aponta gaps em Bot Mode docs — visibilidade para novos usuários

🔗 [Issues sem label](https://github.com/NousResearch/hermes-agent/issues?q=is%3Aissue+no%3Alabel+updated%3A%3C2026-09-01) | 🔗 [Oldest issues](https://github.com/NousResearch/hermes-agent/issues?q=is%3Aissue+sort%3Acreated-asc)

---

## Métricas Resumidas do Dia

| Métrica | Valor |
|---------|-------|
| Issues ativas | 32 |
| Issues fechadas | 18 |
| PRs abertos | 36 |
| PRs merged/fechados | 14 |
| Releases | 1 (patch) |
| P1 bugs ativos | 4 |
| P2 bugs ativos | 10+ |
| Features em PR | 6+ |
| Segurança (issues P2) | 1 (steer-marker) |

---

**Próximos passos recomendados:**
1. Priorizar triagem de P1s em session state e cron lifecycle
2. Consolidar bugs QQ Bot duplicados
3. Review de segurança em #81828 e #104308
4. Liberar v0.22.0 com notas completas de contributors

---
*Relatório gerado automaticamente em 2026-09-08 com base em dados do GitHub*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-09-08

---

## 1. Panorama do dia

O projeto PicoClaw apresenta baixa atividade no período de 24 horas, com apenas **1 issue ativa** e **3 pull requests abertos**, nenhum deles merged ou fechado recentemente. Os PRs #3353 e #3354 estão sinalizados como *stale*, indicando possível abandono ou necessidade de rebase. A issue mais relevante do dia (#3365) reporta um bug crítico de autenticação no canal QQ, afectando utilizadores em dispositivos como Orange Pi 3B. Não foram registadas novas versões, e o repositório mantém-se em modo de manutenção sem grandes avanços funcionais.

---

## 2. Lançamentos

**Nenhum lançamento registado nas últimas 24 horas.**

O último *nightly build* do projeto reporta a versão `0.3.1`, conforme verificado no issue #3365. Sem releases formais, recomenda-se monitorizar a branch `main` para alterações de dependências (nomeadamente `botgo v0.2.1` e `resty v2.17.1`) que possam introduzir regressões.

---

## 3. Progresso do projeto

**Nenhum PR merged ou fechado no período.**

Três PRs permanecem em revisão aberta:

| PR | Autor | Estado | Descrição |
|----|-------|--------|-----------|
| [#3370](https://github.com/sipeed/picoclaw/pull/3370) | ilya-bogin-keenable | Aberto | Adiciona Keenable como provider de pesquisa web |
| [#3354](https://github.com/sipeed/picoclaw/pull/3354) | linhongyu510 | Stale | Suporte a mensagens multiline IRCv3 (`draft/multiline`) |
| [#3353](https://github.com/sipeed/picoclaw/pull/3353) | linhongyu510 | Stale | Limita animações de feedback de ferramentas a 5 minutos |

Os PRs stale (#3353 e #3354) aguardam interação dos maintainers para *rebase* ou merge, o que pode indicar gargalos na revisão de código.

---

## 4. Temas quentes da comunidade

### Issue com maior engagement (últimas 24h):

**[#3365](https://github.com/sipeed/picoclaw/issues/3365)** — *"QQ channel fails with 401 'Authorization参数格式错误'"*
- **Autor:** crazysarah
- **Reações:** 👍 1
- **Comentários:** 1
- **Análise:** O problema está relacionado com a atualização de `botgo v0.2.1` combinada com `resty v2.17.1`, resultando em falha de autenticação no canal QQ. Este é um **bug funcional crítico** que impede utilizadores de interagirem via QQ, uma plataforma relevante para a comunidade sino-portuguesa. A dependência transitiva `resty` parece ter alterado o formato do cabeçalho `Authorization`, quebrando a integração existente.

### PRs com potencial impacto:

- **#3370** — Keenable web search: Introduz um novo provider que funciona sem API key (endpoint público), reduzindo a barreira de entrada para novos utilizadores.

---

## 5. Bugs e estabilidade

### Bug Crítico Reportado

| # | Título | Severidade | Plataforma | Dependência Culpa |
|---|--------|------------|------------|-------------------|
| [#3365](https://github.com/sipeed/picoclaw/issues/3365) | QQ channel 401 error | **🔴 Alta** | Orange Pi 3B (RK3566) | `botgo v0.2.1` + `resty >= v2.17` |

**Impacto:** Utilizadores com `picoclaw` nightly build (`0.3.1`) em dispositivos ARM64 ficam impossibilitados de utilizar o canal QQ. O erro indica máformatação do parâmetro `Authorization`, sugerindo quebra de compatibilidade retroativa na biblioteca `resty`.

**Recomendação:** Considerar *pin* da versão `resty` ou *downgrade* para `v2.16.x` até resolução formal.

---

## 6. Pedidos de features e sinais de roadmap

### Novos PRs de Features (últimas 24h)

| # | Feature | Autor | Complexidade | Nota |
|---|---------|-------|--------------|------|
| [#3370](https://github.com/sipeed/picoclaw/pull/3370) | Keenable web search provider | ilya-bogin-keenable | Baixa | Zero-config, API key opcional |
| [#3354](https://github.com/sipeed/picoclaw/pull/3354) | IRCv3 multiline messages | linhongyu510 | Média | Suporte `draft/multiline`, `batch`, `message-tags` |
| [#3353](https://github.com/sipeed/picoclaw/pull/3353) | Bounded tool feedback animations | linhongyu510 | Baixa | Limita lifecycle a 5 min, alinhado com Telegram |

**Análise de roadmap:**
- A adição do **Keenable** como provider web search pode indicar estratégia para diversificar fontes de pesquisa sem depender de APIs proprietárias (Google, Bing).
- O suporte a **IRCv3 multiline** mostra interesse em melhorar a interoperabilidade com servidores IRC modernos.
- A **limpeza de animações** reflete maturidade em *DX* (Developer Experience), mitigando *memory leaks* em sessões longas.

---

## 7. Resumo de feedback dos utilizadores

### Feedback direto (via GitHub)

**Issue #3365 — cazasarah:**
> *"Environment: Orange Pi 3B (RK3566, aarch64), picoclaw nightly (v0.3.1), botgo v0.2.1, resty v2.17.1 — channel QQ fails with 401 Authorization parameter format error."*

**Análise:**
- **Dores identificadas:** Incompatibilidade com atualizações de dependências externas; fragilidade na integração com plataformas asiáticas (QQ).
- **Cenário de uso:** Utilizadores em hardware ARM64 (Orange Pi) com builds nightly.
- **Satisfação:** Baixa — bug bloqueante sem workarounds conhecidos.

### Sinais implícitos
- PRs stale (#3353, #3354) sugerem que contribuições da comunidade podem estar a ser ignoradas, afectando moral de contribuidores.
- Ausência de releases formais pode gerar incerteza sobre estabilidade em produção.

---

## 8. Backlog que merece atenção

| # | Tipo | Título | Idade | Prioridade | Notas |
|---|------|--------|-------|------------|-------|
| [#3354](https://github.com/sipeed/picoclaw/pull/3354) | PR | IRCv3 multiline support | ~8 dias stale | ⚠️ Média | Requer rebase ou feedback dos maintainers |
| [#3353](https://github.com/sipeed/picoclaw/pull/3353) | PR | Bound tool feedback animations | ~8 dias stale | ⚠️ Média | Contribuição simples, merge rápido possível |
| [#3365](https://github.com/sipeed/picoclaw/issues/3365) | Issue | QQ channel 401 auth failure | 4 dias | 🔴 Alta | Dependência crítica `resty` perluça atenção |

**Recomendação:**
1. **Prioridade #1:** Resolver #3365 — fazer pin da versão `resty` ou adicionar *compatibility layer*.
2. **Prioridade #2:** Rever PRs stale #3353 e #3354 — contributors activos (linhongyu510) merecem feedback para manter *engagement*.
3. **Prioridade #3:** Avaliar merge de #3370 (Keenable) — feature de baixa fricção que adiciona valor sem risco.

---

*Relatório gerado automaticamente com base em dados do GitHub para 2026-09-08. Próxima actualização recomendada: 2026-09-09.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-09-08

---

## 1. Panorama do dia

O projeto IronClaw apresenta **atividade concentrada em melhorias de interface do usuário (webui)** no dia de hoje, com 5 pull requests abertos voltados à experiência do usuário em menus de comandos e cards de resultados. Nenhum PR foi merged ou fechado nas últimas 24 horas, indicando que a equipe está em fase de revisão ou que as mudanças ainda estão pendentes de aprovação. Aissue mais recente (#8081) trata de uma análise de taxonomy de falhas, sugerindo atenção contínua à qualidade dos benchmarks do agente. O projeto não teve releases nas últimas 24h, e o volume de atividade overall é **moderado e focado em refinamentos incrementais** — sem grandes features ou refatorações pendentes.

---

## 2. Lançamentos

**Nenhum novo release nas últimas 24h.**

---

## 3. Progresso do projeto

**Nenhum PR merged ou fechado nas últimas 24h.** Todos os 5 PRs atualizados permanecem em estado `OPEN`, aguardando merge:

| PR | Escopo | Tamanho | Risco | Status |
|----|--------|---------|-------|--------|
| [#8071](https://github.com/nearai/ironclaw/pull/8071) | webui: preservar altura dos cards de resultados | XS | low | OPEN |
| [#8070](https://github.com/nearai/ironclaw/pull/8070) | webui: alinhar metadados de slash-commands | XS | low | OPEN |
| [#8069](https://github.com/nearai/ironclaw/pull/8069) | webui: adicionar ações de dismiss | M | low | OPEN |
| [#8068](https://github.com/nearai/ironclaw/pull/8068) | webui: manter slash-command ativo visível | S | low | OPEN |
| [#8076](https://github.com/nearai/ironclaw/pull/8076) | assistant: distinguir canais compartilhados desconectados | — | — | OPEN |

**Interpretação:** A maioria esmagadora dos PRs em fila são **fixes de UX/webui**, todos de tamanho XS a M e risco baixo. O PR #8076 toca a camada de assistant/Slack, sendo a única alteração com impacto no backend. A ausência de merges pode indicar:
- Revisão em andamento
- Gate de qualidade/测试 antes de liberar
- Horário de cutoff dos dados pode não capturar merges recentes

---

## 4. Temas quentes da comunidade

**Nenhum PR ou issue com comentários ou reações registradas nas últimas 24h.**

| Item | Tipo | Comentários | 👍 | Observação |
|------|------|-------------|----|------------|
| [#8081](https://github.com/nearai/ironclaw/issues/8081) | Issue | 0 | 0 | Análise de taxonomy de falhas |
| [#8071](https://github.com/nearai/ironclaw/pull/8071) | PR | undefined | 0 | — |
| [#8070](https://github.com/nearai/ironclaw/pull/8070) | PR | undefined | 0 | — |
| [#8069](https://github.com/nearai/ironclaw/pull/8069) | PR | undefined | 0 | — |
| [#8068](https://github.com/nearai/ironclaw/pull/8068) | PR | undefined | 0 | — |
| [#8076](https://github.com/nearai/ironclaw/pull/8076) | PR | undefined | 0 | — |

**Análise:** O volume de engajamento (comentários/reações) está **estaticamente baixo**, o que pode refletir:
- PRs muito recentes (criados entre 2026-09-04 e 2026-09-06)
- Fixes internos/core com ciclo de revisão mais curto
- Ausência de discussão pública aberta no momento

---

## 5. Bugs e estabilidade

**1 issue aberta relacionada a bugs/qualidade:**

| # | Título | Severidade | Link |
|---|--------|------------|------|
| #8081 | Daily ironclaw failure taxonomy — 2026-09-07 | Informação | [GitHub](https://github.com/nearai/ironclaw/issues/8081) |

**Resumo:** Issue de natureza **analítica/monitoramento** — o autor (pranavraja99) reporta que a suite `officeqa` teve 42 failures, descritos como *"genuine model-quality numeric errors"* do modelo DeepSeek-V4-Flash. A issue serve como **tracking de saúde do benchmark**, não como bug report tradicional.

**Não há reports de crashes, regressões críticas ou falhas de estabilidade urgentes.** O projeto aparenta **saúde operacional estável** no momento.

---

## 6. Pedidos de features e sinais de roadmap

**Nenhum novo feature request aberto nas últimas 24h.** Porém, os PRs em fila sugerem direções de desenvolvimento:

| PR | Implicação para roadmap |
|----|-------------------------|
| [#8071](https://github.com/nearai/ironclaw/pull/8071) | Melhoria de layout em cards de resultados de comandos |
| [#8070](https://github.com/nearai/ironclaw/pull/8070) | UX responsiva para menu de slash-commands |
| [#8069](https://github.com/nearai/ironclaw/pull/8069) | Funcionalidade de dismiss em resultados de comandos |
| [#8068](https://github.com/nearai/ironclaw/pull/8068) | Melhoria de navegação por teclado no menu de comandos |
| [#8076](https://github.com/nearai/ironclaw/pull/8076) | Melhoria na distinção de canais desconectados no Slack |

**Interpretação:** O roadmap atual está **focado em ergonomia e acessibilidade da UI**, não em novos capabilities. Isso sugere uma fase de maturação do produto antes de grandes features.

---

## 7. Resumo de feedback dos usuários

**Não há feedback direto de usuários (comentários, issues de usuários externos) registrado nas últimas 24h.**

A issue #8081 é a fonte mais próxima de "feedback" — trata-se de uma análise interna de falhas de benchmark. O resumo indica que:
- O modelo DeepSeek-V4-Flash apresenta **erros numéricos de qualidade** na suite officeqa
- A taxa de failure (42/total) sugere área de melhoria em **precisão numérica** do agente

**Não há evidências de frustração de usuários externos ou churn signals no período analisado.**

---

## 8. Backlog que merece atenção

**Nenhuma issue ou PR com resposta pendente de longa duração identificada nas últimas 24h.** Todos os itens abertos têm `updated: 2026-09-07`, indicando atividade recente.

| Item | Idade (dias aprox.) | Última atualização | Prioridade potencial |
|------|---------------------|-------------------|----------------------|
| [#8071](https://github.com/nearai/ironclaw/pull/8071) | ~4 | 2026-09-07 | Review pendente |
| [#8070](https://github.com/nearai/ironclaw/pull/8070) | ~4 | 2026-09-07 | Review pendente |
| [#8069](https://github.com/nearai/ironclaw/pull/8069) | ~4 | 2026-09-07 | Review pendente |
| [#8068](https://github.com/nearai/ironclaw/pull/8068) | ~4 | 2026-09-07 | Review pendente |
| [#8076](https://github.com/nearai/ironclaw/pull/8076) | ~2 | 2026-09-07 | Review pendente |
| [#8081](https://github.com/nearai/ironclaw/issues/8081) | ~1 | 2026-09-07 | Aguardando triagem |

**Recomendações:**
- **PRs #8071, #8070, #8069, #8068** — todos do mesmo autor (italic-jinxin), mesma área (webui), mesma época. Sugere-se **batch review** para eficiência.
- **Issue #8081** — taxonomy de failures pode informar prioridades de QA; merece triagem para verificar se action items serão criados.

---

## Veredicto de Saúde do Projeto

| Indicador | Status | Observação |
|-----------|--------|------------|
| Atividade de código | ✅ Moderada | 5 PRs em fila, nenhum merged |
| Bugs críticos | ✅ Nenhum | Sem reports urgentes |
| Lançamentos | ⚠️ Nenhum | Sem updates em 24h |
| Engajamento comunidade | ⚠️ Baixo | Sem comentários/reações |
| Estabilidade | ✅ Estável | Sem sinais de regressão |

**Conclusão geral:** O projeto IronClaw está em **estado estável e maduro**, com atividade focada em refinamentos de UI. A ausência de merges pode ser uma janela de oportunidade para review e release下一个版本. A issue de taxonomy de failures (#8081) merece atenção estratégica para direcionar melhorias de qualidade do modelo.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório de Projeto CoPaw — 2026-09-08

## 1. Panorama do Dia

O ecossistema CoPaw (QwenPaw/AgentScope-Platform) registrou **alta atividade** em 07/09, com 39 issues e 48 PRs atualizados nas últimas 24h. Não houve novos lançamentos oficiais, mas o desenvolvimento está intenso: 18 PRs foram merged/fechados, indicando forte ritmo de entrega. A equipe respondeu rapidamente a bugs críticos — especialmente relacionados a regressões do v2.2.0 — enquanto a comunidade contribuiu com 5 PRs de first-time contributors. O estado geral é de **saúde positiva**, porém com preocupação crescente com bugs de estabilidade no último release.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O último release estável é o **v2.2.0** (publicado anteriormente), e as atividades atuais indicam preparativos para a próxima versão. A freeze de branch durante releases (#7603) foi implementada justamente para evitar o problema do beta.4.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados Hoje (18 total)

| # | PR | Impacto |
|---|-----|---------|
| [#6936](https://github.com/agentscope-ai/CoPaw/pull/6936) | `fix(providers): coerce string-typed tool args` | Corrige chamada de ferramentas MCP que convertiam strings numéricas incorretamente |
| [#7499](https://github.com/agentscope-ai/CoPaw/pull/7499) | `fix(console): unify nav icons` | Padronização visual da sidebar |
| [#7530](https://github.com/agentscope-ai/CoPaw/pull/7530) | `test(console): expand console unit tests (+245 casos)` | Cobertura de código aumentada em +5.02pp |
| [#7603](https://github.com/agentscope-ai/CoPaw/pull/7603) | `ci: freeze default-branch merges during releases` | **Critical fix**: impede merges acidentais durante releases |
| [#7561](https://github.com/agentscope-ai/CoPaw/pull/7561) | `refactor(memory): unify automatic memory lifecycle` | Breaking refactor no contrato do memory-manager |

**Destaque:** O PR #7603 resolve um problema operacional sério — durante o v2.2.0-beta.4, um PR foi merged no main enquanto o release ainda rodava. O pipeline é SHA-pinned, então os artefatos ficaram corretos, mas o risco de inconsistência foi eliminado.

---

## 4. Temas Quentes da Comunidade

### Issues com Mais Comentários

| # | Título | Comentários | Tipo | Análise |
|---|--------|-------------|------|---------|
| [#7505](https://github.com/agentscope-ai/CoPaw/issues/7505) | qwenpaw + LM Studio: client disconnect e retry em loop | **12** | Question | Usuário enfrentando instabilidade em setup LAN; possível problema de timeout/configuração de conexão |
| [#7576](https://github.com/agentscope-ai/CoPaw/issues/7576) | `RetryChatModel` hardcoded 32768 context fallback | **5** | Bug | Regressão no v2.1.0–v2.2.0; força todos os modelos a usar 32k tokens mesmo quando inadequado |
| [#7579](https://github.com/agentscope-ai/CoPaw/issues/7579) | Respostas do modelo "desaparecem" da contexto | **5** | Bug | **Severidade alta** — AI não "vê" próprias respostas, causando comportamento errático |
| [#7559](https://github.com/agentscope-ai/CoPaw/issues/7559) | 409 error ao enviar mensagem durante task em execução | **5** | Bug | Usuário espera queue automático; implementação atual rejeita |
| [#6820](https://github.com/agentscope-ai/CoPaw/issues/6820) | UI não exibe output do modelo até completion | **5** | Bug | UX problemático em streaming — já fechado |

**Padrão identificado:** Três dos cinco issues mais comentados são regressões ou problemas novos introduzidos no v2.2.0, indicando necessidade de atenção ao controle de qualidade antes do próximo release.

---

## 5. Bugs e Estabilidade

### Bugs Abertos Críticos/Altos

| # | Severidade | Título | Link |
|---|------------|--------|------|
| #7579 | 🔴 **Alta** | Respostas do modelo perdidas do contexto | [Link](https://github.com/agentscope-ai/CoPaw/issues/7579) |
| #7584 | 🔴 **Alta** | Contexto perdido → AI repetindo executa tool em loop | [Link](https://github.com/agentscope-ai/CoPaw/issues/7584) |
| #7567 | 🟠 **Alta** | Task mostra "parou" mas continua executando | [Link](https://github.com/agentscope-ai/CoPaw/issues/7567) |
| #7589 | 🟠 **Alta** | Heartbeat cron: feedback loop com duplicatas | [Link](https://github.com/agentscope-ai/CoPaw/issues/7589) |
| #7242 | 🟠 **Alta** | Dashboard leva 6+ minutos para carregar (74 agents) | [Link](https://github.com/agentscope-ai/CoPaw/issues/7242) |

### Bugs Abertos Médios

| # | Título | Link |
|---|--------|------|
| #7576 | RetryChatModel hardcoded context_size de 32768 | [Link](https://github.com/agentscope-ai/CoPaw/issues/7576) |
| #7597 | Imagem/PDF em tool result causa erro 400 | [Link](https://github.com/agentscope-ai/CoPaw/issues/7597) |
| #7587 | OpenAI-compatible provider recebe Cloudflare 403 | [Link](https://github.com/agentscope-ai/CoPaw/issues/7587) |
| #7585 | Markdown tables não renderizam no Telegram | [Link](https://github.com/agentscope-ai/CoPaw/issues/7585) |
| #7617 | PDF DataBlock quebra endpoints OpenAI-compat text-only | [Link](https://github.com/agentscope-ai/CoPaw/issues/7617) |

### PRs de Fix em Progresso

| # | Foco | Link |
|---|------|------|
| #7578 | Log exceptions em `_coordinator._drain()` | [Link](https://github.com/agentscope-ai/CoPaw/pull/7578) |
| #7610 | Prevenir chat submissions de bypassar a queue | [Link](https://github.com/agentscope-ai/CoPaw/pull/7610) |
| #7521 | Fold consumed thinking sob pressão de contexto | [Link](https://github.com/agentscope-ai/CoPaw/pull/7521) |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| # | Feature | Demanda | Link |
|---|---------|---------|------|
| #7588 | Restaurar input de caminho manual no seletor de diretório (v2.1.0) | 🟢 Alta | [Link](https://github.com/agentscope-ai/CoPaw/issues/7588) |
| #7601 | Permitir edição manual de caminho de working directory | 🟢 Alta | [Link](https://github.com/agentscope-ai/CoPaw/issues/7601) |
| #4077 | UI Font Scaling + File Path Hyperlinks | 🟡 Média | [Link](https://github.com/agentscope-ai/CoPaw/issues/4077) |
| #7570 | Feishu: auto-collapse de思考过程 após streaming | 🟡 Média | [Link](https://github.com/agentscope-ai/CoPaw/issues/7570) |

### PRs de Feature em Desenvolvimento

| # | Feature | Escopo | Link |
|---|---------|--------|------|
| #7616 | Migrate ADBPG e PowerContext para plugins | Plugin system | [Link](https://github.com/agentscope-ai/CoPaw/pull/7616) |
| #7613 | OpenViking long-term memory backend | Memory | [Link](https://github.com/agentscope-ai/CoPaw/pull/7613) |
| #6399 | Reranker UI config panel | UI/Config | [Link](https://github.com/agentscope-ai/CoPaw/pull/6399) |
| #7486 | Creator 1.1.2: notification bus, A/B compare, T2V/I2V/S2V | Creator Plugin | [Link](https://github.com/agentscope-ai/CoPaw/pull/7486) |
| #7609 | Expose skill versions e validate dependencies | Skills | [Link](https://github.com/agentscope-ai/CoPaw/pull/7609) |
| #7502 | Redesign sidebar e settings experience | UI/UX | [Link](https://github.com/agentscope-ai/CoPaw/pull/7502) |

**Sinais de roadmap:** A direção parece ser (1) modularização de memória para plugins, (2) melhoria de UX do sidebar e settings, e (3) robustez no handling de contexto e ferramentas.

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais Identificadas

1. **Regressões do v2.2.0** — Usuários relatam problemas que não existiam no v2.1.0:
   - Perda de contexto e respostas "desaparecendo" (#7579, #7584)
   - Seletor de diretório degradado (precisa clicar ao invés de digitar)
   - Timeout hardcoded de 30s não configurável

2. **Estabilidade em produção** — Escalabilidade questionável:
   - Dashboard com 74 agents leva 6+ minutos
   - Task "para" visualmente mas continua executando em background
   - Heartbeat cron gerando loop de mensagens duplicadas

3. **Integração com provedores externos:**
   - Cloudflare blocking em WUSRouter
   - LM Studio em LAN com disconnects frequentes
   - Telegram não renderiza markdown tables

4. **UX/UI:**
   - Usuários querem controle de working directory por texto
   - Pensamento longo de modelos ocupando tela (solicitação de collapse)

### Cenários de Uso Observados

- **Desktop Windows**: Principal plataforma mencionada — muitos bugs específicos de Windows (stdin, path handling)
- **Multi-agent deployment**: 74+ agents em instâncias únicas — stress test revela bottlenecks
- **Plugins e extensibilidade**: Crescente interesse em memory backends customizados e MCP tools

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Stale

| # | Idade | Título | Link |
|---|-------|--------|------|
| #2120 | ~5 meses | BiDi text rendering (Arabic + English) | [Link](https://github.com/agentscope-ai/CoPaw/issues/2120) |
| #4077 | ~4 meses | UI Font Scaling & File Links | [Link](https://github.com/agentscope-ai/CoPaw/issues/4077) |
| #3328 | ~5 meses | Extra sidebar toggle em zoom específicos | [Link](https://github.com/agentscope-ai/CoPaw/issues/3328) |

### PRs "Under Review" Pendentes

| # | Idade | Título | Link |
|---|-------|--------|------|
| #6399 | ~1.5 meses | Reranker UI config panel | [Link](https://github.com/agentscope-ai/CoPaw/pull/6399) |
| #7578 | ~2 dias | Fix exceptions logging | [Link](https://github.com/agentscope-ai/CoPaw/pull/7578) |

---

## Métricas de Saúde do Projeto

| Indicador | Valor | Status |
|-----------|-------|--------|
| Issues ativas (24h) | 23 | 🟢 Normal |
| PRs abertos (24h) | 30 | 🟢 Normal |
| PRs merged (24h) | 18 | 🟢 Bom ritmo |
| First-time contributors | 5 | 🟢 Crescente |
| Bugs críticos abertos | 5 | 🟡 Requer atenção |
| Releases (24h) | 0 | 🟡 Sem novidade |

---

**Recomendação geral:** Priorizar bug fixes do v2.2.0 antes de novo release, especialmente os relacionados a perda de contexto (#7579, #7584) que afetam a experiência core. O PR #7578 (logging de exceções em `_coordinator._drain()`) pode ajudar a diagnosticá-los mais rapidamente.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-09-08

---

## 1. Panorama do Dia

O projeto ZeroClaw demonstra **atividade intensa e consistente** na data de hoje, com 30 issues e 50 PRs atualizados nas últimas 24 horas. A equipe está fortemente concentrada em **estabilidade do runtime e confiabilidade de sessões**, evidenciada por múltiplos bugs P1 abertos relacionados a crashes, perda de dados de turnos e problemas de entrega. Não houve lançamentos de novas versões. A base de código reflete um ciclo de desenvolvimento ativo com **múltiplas contribuições externas** e PRs em diferentes estágios de revisão.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24 horas.**

O projeto encontra-se em um período de trabalho interno, sem distribuição de novas versões estáveis.

---

## 3. Progresso do Projeto

### PRs Fechados/Mergidos

| PR | Descrição | Impacto |
|---|---|---|
| [#10465](https://github.com/zeroclaw-labs/zeroclaw/pull/10465) | `feat(runtime): enforce compact local prompt budget` | Implementa perfil `local_small` com metadados compactos e teto de 8.000 caracteres no system-prompt. Promove eficiência em contextos limitados. |
| [#10703](https://github.com/zeroclaw-labs/zeroclaw/pull/10703) | `fix(providers): satisfy Windows Clippy for cache builder` | Correção trivial de linting para compatibilidade Windows. |

### PRs em Destaque (em revisão ativa)

| PR | Descrição | Status |
|---|---|---|
| [#10197](https://github.com/zeroclaw-labs/zeroclaw/pull/10197) | `fix(acp): persist interrupted turn progress` | Contribuidor: Audacity88. Checkpoint de progresso antes de encaminhar eventos. |
| [#10696](https://github.com/zeroclaw-labs/zeroclaw/pull/10696) | `fix(runtime): trim history to a low-water target instead of the cap` | Resolve #10674 — ajusta trimming de histórico para evitar re-trimming constante. |
| [#10611](https://github.com/zeroclaw-labs/zeroclaw/pull/10611) | `feat(providers): adapt Anthropic and Bedrock to adaptive-thinking Claude models` | Adaptação para modelos com pensamento adaptativo. |
| [#9739](https://github.com/zeroclaw-labs/zeroclaw/pull/9739) | `feat(zerocode): multi-session panes with agent sidebar` | Feature de multi-sessão em desenvolvimento ativo. |
| [#9283](https://github.com/zeroclaw-labs/zeroclaw/pull/9283) | `fix(tools): decompress gzip/brotli/deflate web_fetch responses` | Correção de dependência com implicações de segurança. |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| Issue | Título | Comentários | Tema Central |
|---|---|---|---|
| [#8720](https://github.com/zeroclaw-labs/zeroclaw/issues/8720) | Disable cachePoint for Bedrock Nova 2 Lite | 12 | Configuração de cache para provider AWS |
| [#10230](https://github.com/zeroclaw-labs/zeroclaw/issues/10230) | Daemon startup overflow during agent init | 6 | Estabilidade do runtime |
| [#9333](https://github.com/zeroclaw-labs/zeroclaw/issues/9333) | Failed ACP turns disappear after switching sessions | 4 | Persistência de sessões |
| [#10408](https://github.com/zeroclaw-labs/zeroclaw/issues/10408) | Second message starts parallel run | 3 | Concorrência de sessões |

**Análise:** A comunidade demonstra preocupação significativa com **perda de dados de sessões** (turns falhados/interrompidos) e **estabilidade do daemon**. A issue #8720 sobre cache de Bedrock revela uma necessidade de configuração mais granular para provedores AWS.

---

## 5. Bugs e Estabilidade

### Bugs P1 — Críticos ( workflow bloqueado / risco alto)

| Issue | Título | Severidade | Componente |
|---|---|---|---|
| [#10230](https://github.com/zeroclaw-labs/zeroclaw/issues/10230) | Daemon startup overflow during agent initialization | S1 | runtime/daemon |
| [#9333](https://github.com/zeroclaw-labs/zeroclaw/issues/9333) | Failed ACP turns disappear after session switch | S1 | channel (ACP) |
| [#10121](https://github.com/zeroclaw-labs/zeroclaw/issues/10121) | Partial turns disappear if process exits | S0 | zerocode/tui |
| [#10659](https://github.com/zeroclaw-labs/zeroclaw/issues/10659) | Budget-exceeded turn loses visible progress | S1 | zerocode/tui |
| [#10697](https://github.com/zeroclaw-labs/zeroclaw/issues/10697) | Transcript drops assistant text before tool call | S1 | zerocode/tui |
| [#10673](https://github.com/zeroclaw-labs/zeroclaw/issues/10673) | Persist failed ACP turns on daemon RPC path | S1 | channel (daemon RPC) |
| [#9940](https://github.com/zeroclaw-labs/zeroclaw/issues/9940) | Cron delivery channel unresolved | S2 | runtime/daemon |
| [#10674](https://github.com/zeroclaw-labs/zeroclaw/issues/10674) | History trimming defeats prompt caching | S1 | agent/runtim |

### Bugs P2 — Degradados de Comportamento

| Issue | Título | Componente |
|---|---|---|
| [#10667](https://github.com/zeroclaw-labs/zeroclaw/issues/10667) | ZeroCode duplicates streamed response | zerocode/tui |
| [#10670](https://github.com/zeroclaw-labs/zeroclaw/issues/10670) | heartbeat.target rejects composite key | runtime/daemon |
| [#10689](https://github.com/zeroclaw-labs/zeroclaw/issues/10689) | Telegram voice reply skipped when starts with `[` | channel:telegram |
| [#10688](https://github.com/zeroclaw-labs/zeroclaw/issues/10688) | WhatsApp voice notes never transcribed | channel:whatsapp |

**Síntese:** Padrão recorrente de **perda de estado em sessões** e **problemas de transcript**. A área `zerocode/tui` e `channel/ACP` concentra a maioria dos bugs críticos.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em Desenvolvimento

| Issue/PR | Título | Tipo | Prioridade |
|---|---|---|---|
| [#10684](https://github.com/zeroclaw-labs/zeroclaw/issues/10684) | Bootstrap launcher and release-target registry | Tracker | P2 |
| [#10685](https://github.com/zeroclaw-labs/zeroclaw/issues/10685) | Reliable agent delivery and cron outcome reporting | Tracker | P1 |
| [#10698](https://github.com/zeroclaw-labs/zeroclaw/pull/10698) | Add guided cron schedule editor | Web UI | — |
| [#10663](https://github.com/zeroclaw-labs/zeroclaw/issues/10663) | Configurable 1-hour prompt-cache TTL for Anthropic | Provider | P2 |
| [#10660](https://github.com/zeroclaw-labs/zeroclaw/issues/10660) | Third cache breakpoint on previous turn's last message | Provider | P2 |
| [#10606](https://github.com/zeroclaw-labs/zeroclaw/issues/10606) | Sanitize component errors in health responses | Security | P1 |
| [#10695](https://github.com/zeroclaw-labs/zeroclaw/issues/10695) | Refresh ZeroCode sessions changed by another client | UX | P2 |

**Sinais de Roadmap:** O foco próximo inclui:
1. **Confiabilidade de entrega** (cron, ACP) — tracker #10685
2. **Launcher independente** — tracker #10684
3. **Otimização de cache** — TTL configurável e breakpoints para Anthropic
4. **Multi-sessão** — PR #9739 em revisão

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Categoria | Problema | Frequência |
|---|---|---|
| **Perda de turnos** | Turns falhados desaparecem ao trocar de sessão | Múltiplas issues (#9333, #10121, #10673) |
| **Cache de prompt** | Trimming de histórico mata cache (P1 #10674) | Alto impacto |
| **Canal cron** | Entrega falha silenciosamente | Impacto em automação |
| **Stabilidade daemon** | Overflow em startup ou reload (#10230) | Crítico |
| **Transcrição WhatsApp** | Voice notes nunca transcritas | Canal específico |
| **Budget de custo** | Registros de custo agregados por sessão | Dificulta análise |

### Cenários de Uso Reportados

- **Operadores unattended**: Precisam de confirmação de que cronjobs executaram e entregaram (#10685)
- **Desenvolvedores multi-sessão**: Necessidade de ver mudanças de outras sessões em tempo real (#10695)
- **Usuários AWS**: Configuração granular de cache para Bedrock Nova 2 Lite (#8720)

---

## 8. Backlog que Merece Atenção

### Issues Sem Atividade Recente (>7 dias sem atualização)

| Issue | Título | Criado | Prioridade |
|---|---|---|---|
| [#9283](https://github.com/zeroclaw-labs/zeroclaw/issues/9283) | Decompress web_fetch responses | 2026-07-23 | Risco alto |
| [#9313](https://github.com/zeroclaw-labs/zeroclaw/issues/9313) | WeChat persist sync cursor | 2026-07-23 | Médio |
| [#9317](https://github.com/zeroclaw-labs/zeroclaw/issues/9317) | ZeroCode render transient frames | 2026-07-23 | Médio |
| [#9378](https://github.com/zeroclaw-labs/zeroclaw/issues/9378) | Persist failed/cancelled turn transcripts | 2026-07-26 | Médio |
| [#9410](https://github.com/zeroclaw-labs/zeroclaw/issues/9410) | Default command audit logging to disabled | 2026-07-26 | Segurança |
| [#9678](https://github.com/zeroclaw-labs/zeroclaw/issues/9678) | Harden Git shell policy arguments | 2026-08-02 | Segurança |

### PRs Aguardando Ação do Maintainer

| PR | Título | Status |
|---|---|---|
| [#9410](https://github.com/zeroclaw-labs/zeroclaw/pull/9410) | fix(security): default command audit logging | needs-maintainer-review |
| [#9739](https://github.com/zeroclaw-labs/zeroclaw/pull/9739) | feat(zerocode): multi-session panes | needs-maintainer-review |
| [#9378](https://github.com/zeroclaw-labs/zeroclaw/pull/9378) | fix(acp): persist failed/cancelled transcripts | needs-maintainer-review |
| [#10611](https://github.com/zeroclaw-labs/zeroclaw/pull/10611) | feat(providers): adaptive-thinking Claude | needs-maintainer-review |

---

## Métricas Resumidas

| Indicador | Valor | Tendência |
|---|---|---|
| Issues ativas | 28 | — |
| PRs abertos | 47 | — |
| Bugs P1 em aberto | 11 | ⚠️ Alto |
| Features em tracker | 2 | — |
| Releases (24h) | 0 | — |
| PRs merged (24h) | 1 | Baixo |

**Veredicto de Saúde:** O projeto está em **modo intensivo de estabilidade**. A concentração de bugs P1 relacionados a perda de sessões e transcript indica necessidade de foco em qualidade antes de novos recursos. A equipe demonstra capacidade de resposta rápida em issues críticas.

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*