# Resumo diário do ecossistema de agentes de IA 2026-09-06

> Issues: 0 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-09-05 21:50 UTC

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

# Relatório Comparativo: Ecossistema de Agentes de IA Open Source

**Data de referência:** 2026-09-06

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **duas velocidades distintas de desenvolvimento** neste período. Por um lado, ZeroClaw, Hermes Agent e NanoBot demonstram alta cadência de entrega com 50+ PRs atualizadas em 24h, evidenciando comunidades ativas e times dedicados. Por outro, PicoClaw mantém ritmo moderado focado em consolidação de PRs menores, enquanto NullClaw permanece inativo. A tendência dominante é a **estabilização pós-expansão**: projetos maduros como ZeroClaw (v0.8.5) e Hermes Agent investem em hardening de segurança e resolução de bugs P1, enquanto emergentes como CoPaw ainda navegam pela migração de APIs e bugs de configuração. O mercado indica maturação em infraestruturas de canais (Telegram, WhatsApp, IRC) e crescentes investimentos em multi-tenant e funcionalidades colaborativas.

---

## 2. Comparação de Atividade

| Projeto | Issues Abertas | PRs Abertas | PRs (24h) | Releases (7d) | Saúde |
|---------|----------------|-------------|-----------|---------------|-------|
| **NullClaw** | 0 | 0 | 0 | 0 | 🔴 Inativo |
| **NanoBot** | 2 | 9 | 16 PRs atualizadas, 7 merges | 0 | 🟢 Estável |
| **Hermes Agent** | ~50 | ~50 | 50 atualizadas | 0 | 🟡 Crítico |
| **PicoClaw** | 1 | 1 | 5 | 0 | 🟢 Consolidação |
| **IronClaw** | 3 | 5 | 5 | 0 | 🟢 Boa |
| **CoPaw** | ~10 | ~4 | 14 issues + PRs | 0 | 🟡 Atenção |
| **ZeroClaw** | ~42 | ~50 | 92 total | **v0.8.5** | 🟢 Matura |

**Observação:** Hermes Agent apresenta volume alto de atividade mas com **7 bugs P1 ativos** — maior concentração de criticidade do ecossistema. ZeroClaw é o único projeto com release formal neste período.

---

## 3. Posicionamento do Projeto Principal

*Considerando ZeroClaw como projeto de referência devido à release recente e maior volume de atividade.*

### Vantagens Competitivas

| Aspecto | ZeroClaw | Hermes Agent | NanoBot |
|---------|----------|--------------|---------|
| **Arquitetura** | RFC-driven com 10+ proposals ativas | Modular com skills hub | Foco em contexto/compaction |
| **Segurança** | Sandbox multi-provider (Bubblewrap, Landlock, Seatbelt) | Desktop isolated | Session isolation |
| **Canais** | 10+ canais documentados | Desktop-first, WhatsApp | WebUI/TUI |
| **Comunidade** | 73 contribuidores (v0.8.5) | Alta volumen, baixa resolução | Equipe HKUDS ativa |

### Diferenças Técnicas

- **ZeroClaw**: Abordagem enterprise com WASM plugins, políticas granulares de sandbox, e RFCs formais para governança arquitetural.
- **Hermes Agent**: Foco em automação de workflows (Kanban, cron) com menor atenção a estabilidade de desktop — 6 bugs P1/P2 em Desktop.
- **NanoBot**: Especialização em gerenciamento de contexto e memory compaction, com diferencial em UX de developer (dev mode warnings).

### Tamanho da Comunidade

| Projeto | Indicador de Engajamento |
|---------|-------------------------|
| **ZeroClaw** | RFC com 33+ comentários, 73 contribuidores/release |
| **Hermes Agent** | Issue #66616 com 162 comentários (skills index) |
| **CoPaw** | Issue #7318 com 23 comentários (hub multi-tenant) |
| **PicoClaw** | Issue #3287 com 10 comentários (IRC) |

---

## 4. Focos Técnicos Compartilhados

### 4.1 Estabilidade de Sessões e Estados

Múltiplos projetos enfrentam desafios similares com gerenciamento de estado:

| Projeto | Problema | Severidade |
|---------|----------|------------|
| **NanoBot** | Session revival após descarte (#5589) | 🔴 P1 |
| **Hermes Agent** | Remote/VPS session load lento (#70445) | 🟠 P2 |
| **CoPaw** | Agent "esquece" configurações de workspace (#7571) | 🟡 Moderada |
| **IronClaw** | Lógica condicional de pairing vs channel state (#8074) | 🟡 Média |

### 4.2 Multi-Channel e UX de Integração

| Projeto | Canal Crítico | Problema |
|---------|--------------|----------|
| **NanoBot** | Feishu | Fragmentação de mensagens (3+ cards) |
| **Hermes Agent** | WhatsApp | Group messages não chegam ao gateway |
| **PicoClaw** | IRC | Suporte a mensagens >512 bytes |
| **ZeroClaw** | Telegram | Aprovals cards e sessões compartilhadas |

### 4.3 Hardening de Segurança e Isolamento

Trez projetos mencionam explicitamente investimentos em sandbox/segurança:

- **ZeroClaw**: Políticas granulares sandbox, WASM runtime
- **Hermes Agent**: Desktop isolated gateway
- **NanoBot**: Ephemeral runs SDK isolation

### 4.4 Observabilidade e Debugging

| Projeto | Issue | Impacto |
|---------|-------|---------|
| **CoPaw** | Exception swallowing em `_coordinator.py` (#7572) | Debugging impossível |
| **ZeroClaw** | TTS sintetiza Markdown verbatim (#10626) | UX degradada |
| **NanoBot** | Langfuse tracing expansão (#5520) | Tracing incompleto |

---

## 5. Análise de Diferenciação

### 5.1 Público-Alvo

| Projeto | Segmento Primário | Diferencial |
|---------|-------------------|-------------|
| **ZeroClaw** | Enterprise/Self-hosted | Segurança, WASM plugins, RFC governance |
| **Hermes Agent** | power users, automação | Kanban, cron, skills hub |
| **NanoBot** | Desenvolvedores | Context compaction, DX tooling |
| **CoPaw** | Equipes (roadmap 2.2.0) | Multi-tenant hub, Advisor mode |
| **IronClaw** | Usuários Telegram | UX onboarding, pairing flow |
| **PicoClaw** | Usuários IRC legacy | Protocolo antigo, interoperabilidade |

### 5.2 Arquitetura e Escolhas Técnicas

| Aspecto | ZeroClaw | Hermes Agent | NanoBot | CoPaw |
|---------|----------|--------------|---------|-------|
| **Modelo de plugins** | WASM com APIs tipadas | Skills hub | MessageBus | Skill v2 workflow |
| **Gerência de contexto** | File/attachment unified | Dream memory files | Context compaction | Advisor + worker |
| **Threading** | Multi-provider sandbox | Cron jobs | Async I/O offloop | Tool call timeout |
| **Governança** | RFC formal (Rev.N) | Issues massivas | PRs pequenas | Discussion-driven |

### 5.3 Estratégia de Qualidade

- **ZeroClaw**: Estabilização pós-release com S1/S2/S3 classification
- **Hermes Agent**: Alta tolerate de bugs P1 — 7 críticos abertos simultaneamente
- **NanoBot**: Foco em p1/p2 com resolução rápida (regressão #5630 identificada)
- **IronClaw**: Resolução acelerada de UX (2 bugs em 24h)

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração

| Projeto | PRs Merged (24h) | Velocity | Estágio |
|---------|------------------|----------|---------|
| **NanoBot** | 7 | Alta | 🔄 Iteração rápida |
| **ZeroClaw** | 4 | Alta | 🔄 Consolidando |
| **PicoClaw** | 4 | Moderada | 🔄 Batch consolidation |
| **IronClaw** | 2 | Normal | ✅ Qualidade |
| **Hermes Agent** | 1 | Baixa | ⚠️ Backlog crítico |
| **CoPaw** | 0 (3 issues fechadas) | Normal | 🔄 Planejamento |

### 6.2 Backlog Health

| Projeto | Issues Antigas (>7d) | Conflitos em PR | Indicador |
|---------|----------------------|-----------------|-----------|
| **Hermes Agent** | 7+ (inclui bug de maio #26744) | N/A | ⚠️ Backlog estagnado |
| **ZeroClaw** | 7 PRs bloqueadas | 4+ | 🟡 RFC Dependency |
| **NanoBot** | 5 | 4 | 🟡 Conflitos pendentes |
| **CoPaw** | PR #6874 (26 dias em review) | N/A | 🟡 Aguardando merge |
| **IronClaw** | Nenhuma antiga | N/A | ✅ Backlog groomed |

### 6.3 Maturidade Relativa

```
ZeroClaw ████████████░░ Matura (v0.8.5, RFC governance)
NanoBot  ██████████░░░░ Estável (7 merges/24h)
IronClaw ██████████░░░░ Estável (UX fast resolution)
CoPaw    ████████░░░░░ Evoluindo (roadmap 2.2.0)
Hermes   ██████░░░░░░░ Crítico (7 P1 ativos)
PicoClaw ██████░░░░░░░ Consolidação (batch merges)
NullClaw ░░░░░░░░░░░░░ Inativo
```

---

## 7. Sinais de Tendência

### 7.1 Tendências de Mercado Extraídas

| Tendência | Evidência | Projetos |
|-----------|-----------|----------|
| **Multi-tenant enterprise** | Hub multi-tenant em discussão (CoPaw), RFC sessions (ZeroClaw) | CoPaw, ZeroClaw |
| **Segurança de sandbox** | WASM runtime, Landlock, Bubblewrap | ZeroClaw, Hermes |
| **Context window management** | Compaction, memory limits, budget standardization | NanoBot, CoPaw |
| **Multi-channel unificado** | Consolidar saída em streaming cards, resolver grupos | NanoBot, Hermes, ZeroClaw |
| **CLI + Desktop parity** | Desktop remote sessions, VPS workflows | Hermes, IronClaw, CoPaw |
| **Observabilidade** | Langfuse tracing, exception handling, TTS output | NanoBot, CoPaw, ZeroClaw |

### 7.2 Padrões de Produto Emergentes

1. **Advisor/Worker Patterns**: CoPaw introduz "Advisor Mode" com tandem de modelos (forte+barato), tendência de otimização de custo.
2. **RFC-driven Architecture**: ZeroClaw demonstra maturidade com 10+ RFCs formais, possivelmente copiado por outros projetos.
3. **Skill Versioning**: CoPaw (#7557) evidencia necessidade de gestão de versões de skills em fleets.
4. **Protocol Legacy Support**: PicoClaw investe em IRC >512 bytes, indicando mercado de interoperabilidade com sistemas legados.

### 7.3 Riscos Sistêmicos

| Risco | Impacto | Projetos Afetados |
|-------|---------|-------------------|
| **GIL pressure em event loops** | UI freeze 51s (Hermes) | Hermes Agent |
| **Memory leaks em sessões** | Crescimento ilimitado (NanoBot, CoPaw) | NanoBot, CoPaw |
| **Exception swallowing** | Debugging impossível (CoPaw) | CoPaw |
| **Desktop instability** | OOM crash-loops (Hermes) | Hermes Agent |

---

## Síntese para Decisores

| Prioridade | Recomendação |
|------------|--------------|
| **Adoção Production** | ZeroClaw (maturidade, segurança) ou IronClaw (estabilidade UX) |
| **Experimentação** | CoPaw (Advisor mode, multi-tenant roadmap) |
| **Contribuição** | NanoBot (alta velocity, 7 merges/24h) ou PicoClaw (entrada acessível) |
| **Evitar** | Hermes Agent (7 P1 ativos), NullClaw (inativo) |

---

*Relatório gerado em 2026-09-06. Dados agregados dos repositórios GitHub de NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw e ZeroClaw.*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# 📊 Relatório do Projeto NanoBot — 2026-09-06

---

## 1. 🌅 Panorama do Dia

O NanoBot apresenta **alta atividade de desenvolvimento** nesta data, com 16 PRs atualizados nas últimas 24h e 7 merges realizados — indicando um ritmo de entrega consistente. Não há lançamentos formais esta semana, mas o time está focado em **estabilidade e refinamento**: múltiplas PRs de refatoração e otimização foram finalizadas, incluindo melhorias no sistema de contexto, comportamento de sessão e UX do WebUI. O pipeline mantém 9 PRs abertas, algumas com conflitos pendentes de resolução. Uma regressão crítica (p1) relacionada a sessões descartadas permanece em revisão, demandando atenção imediata para garantir a integridade do estado do agente.

---

## 2. 🚀 Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto não publicou novas versões neste período. A ausência de releases indica que o time está em fase de consolidação do código antes do próximo tag, possivelmente aguardando a resolução dos conflitos pendentes nas PRs p1.

---

## 3. 💻 Progresso do Projeto

### PRs Merged/Closed (7)

| # | PR | Tipo | Prioridade | Resumo |
|---|-----|------|------------|--------|
| #5670 | [Unificar notificações runtime entre clientes](https://github.com/HKUDS/nanobot/pull/5670) | refactor | p2 | Migração completa para MessageBus em notificações locais e entrega em canais |
| #5672 | [Remover checks obsoletos](https://github.com/HKUDS/nanobot/pull/5672) | test | p2 | Limpeza de testes sem consumidores em produção |
| #5671 | [Skip WebUI bundle check em dev](https://github.com/HKUDS/nanobot/pull/5671) | fix | p2 | Correção do warning falso em modo desenvolvimento com Vite |
| #5669 | [Documentar derived context budget](https://github.com/HKUDS/nanobot/pull/5669) | docs | p2 | Adiciona 4 linhas ao reference explicando o cálculo de `contextBlockLimit` |
| #5667 | [Remover helpers e state não utilizados](https://github.com/HKUDS/nanobot/pull/5667) | refactor | p2 | Limpeza de código residual de refactors anteriores |
| #5668 | [Remover context block budget override](https://github.com/HKUDS/nanobot/pull/5668) | refactor | p2 | Padroniza cálculo de budget: `contextWindowTokens - maxTokens - 1024` |
| #5656 | [Tornar context compaction visível](https://github.com/HKUDS/nanobot/pull/5656) | feat | p2 | Adiciona comando `/compact`, eventos de lifecycle e indicadores visuais no WebUI/TUI |

**Destaque:** A PR #5656 traz uma melhoria significativa de UX, permitindo que usuários visualizem e controlem manualmente a compactação de contexto, complementada pela #5668 que padroniza o gerenciamento de memória.

---

## 4. 🔥 Temas Quentes da Comunidade

### Issue com maior engajamento

**[#5567 — Feat: Integração de múltiplas mensagens em único card no Feishu](https://github.com/HKUDS/nanobot/issues/5567)**  
- **Status:** Aberta | **Criação:** 2026-08-27 | **Atualização:** 2026-09-04  
- **Comentários:** 4 | **Reações:** 0  
- **Resumo:** Usuários do canal Feishu relatam experiência fragmentada — o agente envia múltiplas mensagens (progresso, tooltips, resposta final) que deveriam ser consolidadas em **um único card streaming**. A proposta é manter o padrão `1 mensagem usuário → 1 resposta agente`.

**Análise:** Esta issue tem 4 comentários indicando discussão ativa sobre design. O problema afeta diretamente a experiência em um canal específico, mas a solução proposta (consolidar em streaming card) pode beneficiar outros canais com padrão similar.

### Observações

- Nenhuma PR desta data atingiu número expressivo de reações ou comentários.
- A discussão técnica concentra-se na issue #5567, sugerindo priorização futura para experiência multi-canal.

---

## 5. 🐛 Bugs e Estabilidade

### Bug Crítico (p1)

**[#5589 — Session revival após descarte](https://github.com/HKUDS/nanobot/pull/5589)**  
- **Status:** Aberta (com conflito)  
- **Severidade:** p1 | **Criação:** 2026-08-28  
- **Problema:** Quando uma sessão é descartada, tasks pendentes na fila de automação ainda publicam mensagens no message bus global durante o cleanup, potencialmente reativando sessões supostamente mortas.

### Bugs de Alta Prioridade (p2)

| # | Bug | Canal | Problema |
|---|-----|-------|----------|
| [#5674](https://github.com/HKUDS/nanobot/issues/5674) | Agent para ao receber timeout específico do Nvidia NIM | Provider | Mensagens de erro do provider são tratadas como output do modelo, causando falha total |
| [#5580](https://github.com/HKUDS/nanobot/pull/5580) | Persistência bloqueando event loop | Session | I/O síncrono em operações de sessão bloqueia conversas paralelas |
| [#5630](https://github.com/HKUDS/nanobot/pull/5630) | Dream memory files sem limite de tamanho | Agent | Arquivos SOUL.md/USER.md/MEMORY.md crescem sem bound após PR #5622 |
| [#5664](https://github.com/HKUDS/nanobot/pull/5664) | Cache de summaries sem bound | Agent | `AutoCompact._summaries` usa dicionário ilimitado |

**Regressão identificada:** A PR #5630 documenta que a correção do bug de duplicação do system-prompt ( #5622) removeu acidentalmente o mecanismo de size cap, permitindo crescimento ilimitado de arquivos de memória.

---

## 6. ✨ Pedidos de Features e Sinais de Roadmap

### Novas Features em Progresso

**[#5520 — Langfuse tracing para Codex](https://github.com/HKUDS/nanobot/pull/5520)**  
- **Status:** Aberta | **Prioridade:** p2 | **Autor:** akinolur  
- **Descrição:** Adiciona tracing nativo via Langfuse SDK para o provider Codex (que não usava o truque de swap do provider OpenAI-compatível). Geração separada para requisição principal e compactação.

### Feature Proposta

**[#5567 — Streaming card consolidado para Feishu](https://github.com/HKUDS/nanobot/issues/5567)**  
- **Proposta:** Unificar saída de `send_delta()` e `send()` em um único card streaming no canal Feishu
- **Impacto:** Melhoraria significativa de UX em canal específico

### Sinais de Roadmap Inferidos

| Área | Indicador |
|------|-----------|
| Observabilidade | Tracing Langfuse em expansão para outros providers |
| Performance de I/O | Esforço contínuo para mover persistência para threads separadas (#5580) |
| Gestão de memória | Limpeza de budget de contexto e cache ilimitados |
| DX | Melhorias em dev mode (#5671) e visibilidade de operações (#5656) |

---

## 7. 📝 Resumo de Feedback dos Usuários

### Dores Identificadas

| Problema | Contexto | Impacto |
|----------|----------|---------|
| **Fragmentação de mensagens no Feishu** | Agent envia 3+ mensagens separadas por interação | Experiência confusa para usuários do canal |
| **Agent trava com timeout do Nvidia NIM** | Erro específico do provider não tratado corretamente | Falha total após timeout |
| **Crescimento ilimitado de memória** | Arquivos Dream crescem sem controle | Degradação de performance em sessões longas |
| **Sessões "ressuscitando" após descarte** | Mensagens pendentes publicadas após cleanup | Estado inconsistente do agente |

### Cenários de Uso Reportados

- **Uso corporativo multi-canal:** Usuários integram o NanoBot via Feishu para workflows de equipe
- **Provedores enterprise:** Utilização com Nvidia NIM e Codex em ambientes de produção
- **Desenvolvimento SDK:** Usuários do `Nanobot.run(ephemeral=True)` esperam isolamento de estado

### Indicadores de Satisfação

- **Média de 👍 em issues abertas:** 0 (nenhuma reação upvote)
- **Engajamento em comments:** Issue #5567 com 4 comentários indicando discussão ativa
- **Ritmo de merges:** 7 PRs fechadas em 24h demonstra alta throughput

---

## 8. 📋 Backlog que Merece Atenção

### Issues/PRs sem resposta há >7 dias

| # | Tipo | Título | Criação | Idade | Prioridade |
|---|------|--------|---------|-------|------------|
| [#5471](https://github.com/HKUDS/nanobot/pull/5471) | PR | SDK ephemeral runs não respeita isolamento de estado | 2026-08-21 | ~15 dias | normal |
| [#5504](https://github.com/HKUDS/nanobot/pull/5504) | PR | Retry status não exibido na UI | 2026-08-24 | ~12 dias | p2 (conflito) |
| [#5520](https://github.com/HKUDS/nanobot/pull/5520) | PR | Langfuse tracing para Codex | 2026-08-24 | ~12 dias | p2 |
| [#5573](https://github.com/HKUDS/nanobot/pull/5573) | PR | OAuth token refresh no MCP | 2026-08-27 | ~9 dias | p2 |
| [#5567](https://github.com/HKUDS/nanobot/issues/5567) | Issue | Feishu streaming card consolidado | 2026-08-27 | ~9 dias | feature |

### PRs com Conflitos Pendentes

| # | PR | Conflitos | Impacto |
|---|-----|-----------|---------|
| [#5580](https://github.com/HKUDS/nanobot/pull/5580) | Session I/O offloop | Sim | Bloqueio de event loop |
| [#5630](https://github.com/HKUDS/nanobot/pull/5630) | Dream memory guardrails | Sim | Crescimento ilimitado |
| [#5589](https://github.com/HKUDS/nanobot/pull/5589) | Stop session revival | Sim | Regressão p1 |

**Recomendação:** As 3 PRs com conflitos envolvem modificações de base no sistema de sessões e memória. A resolução de conflitos deve ser priorizada para desbloquear as correções de estabilidade.

---

## 📌 Métricas Resumidas

| Indicador | Valor |
|-----------|-------|
| PRs abertas | 9 |
| PRs merged/closed (24h) | 7 |
| Issues abertas | 2 |
| Bugs p1 ativos | 1 |
| Bugs p2 ativos | 5 |
| Releases (7 dias) | 0 |
| Conflictos em PRs | 4 |

---

*Relatório gerado automaticamente com base em dados do GitHub — [NanoBot/HKUDS](https://github.com/HKUDS/nanobot)*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent
## NousResearch/hermes-agent — 2026-09-06

---

## 1. Panorama do Dia

O projeto Hermes Agent mantém alta atividade com 50 issues e 50 PRs atualizados nas últimas 24h. A plataforma está em modo de estabilização intensiva, com pelo menos 6 bugs classificados como **P1 (críticos)** em aberto — incluindo deadlocks em cron jobs, OOM crash-loops no Desktop e problemas de delivery em WhatsApp group. Não houve releases nas últimas 24h, indicando foco em consolidação da base de código antes do próximo tag. A comunidade demonstra preocupação crescente com a degradação do skills index e com a arquitetura de sessões remotas/VPS.

---

## 2. Lançamentos

**Nenhum release nas últimas 24h.**

O último release estável referenciado nos dados é a versão `0.21.0` (mencionada em [#102283](https://github.com/NousResearch/hermes-agent/issues/102283)), porém sem publicação formal de changelog neste período.

---

## 3. Progresso do Projeto

### PRs Fechados/Merged

| # | PR | Tipo | Impacto |
|---|-----|------|---------|
| [#64456](https://github.com/NousResearch/hermes-agent/pull/64456) | feat(telegram): option to ignore messages that @mention humans | Feature | Adiciona configuração `ignore_human_mentions` para Telegram, resolvendo #64388 — permite que bots ignorem menções a humanos em grupos |

### PRs Abertos de Destaque (ativos em 2026-09-05)

| # | PR | Tipo | Área | Relevância |
|---|-----|------|------|------------|
| [#103910](https://github.com/NousResearch/hermes-agent/pull/103910) | feat(curator): content-preservation rule and lossy-merge audit | Feature | Implementa regra de preservação de conteúdo e auditoria determinística para passes de consolidação do curator, alinhado à pesquisa acadêmica arXiv:2607.26637 |
| [#103915](https://github.com/NousResearch/hermes-agent/pull/103915) | feat: add opt-in per-turn reasoning escalation | Feature | Adiciona override temporário de raciocínio por turno, atrelado ao par provider/model, com reset automático |
| [#103916](https://github.com/NousResearch/hermes-agent/pull/103916) | fix: surface staged skill proposals in background review summaries | Bug | Corrige omissão de skill-write proposals pendentes nas sínteses de background review |
| [#103908](https://github.com/NousResearch/hermes-agent/pull/103908) | Support native Gemini video URL content parts | Bug | Restaura suporte a partes de vídeo URL para o adaptador Gemini nativo |
| [#103683](https://github.com/NousResearch/hermes-agent/pull/103683) | fix(desktop): bridge remote gateway WebSockets through main process | Bug | Resolve conexão TLS com CAs privadas/homelab no Desktop Linux |
| [#103907](https://github.com/NousResearch/hermes-agent/pull/103907) | Fix Kanban worker completion after tool guardrail halts | Bug | Permite que workers Kanban emitam completion mesmo após halt por guardrail |

---

## 4. Temas Quentes da Comunidade

### Issue com Maior Engajamento

[**#66616** — Skills index is stale or degraded (162 comentários)](https://github.com/NousResearch/hermes-agent/issues/66616)  
- **Severidade:** P3 | **Tags:** type/bug, tool/skills  
- **Resumo:** Sonda automatizada de freshness detectou que o índice está 29.8h desatualizado (limite: 26h). O Skills Hub depende de `/docs/api/skills-index.json` reconstruído por workflow cron.
- **Análise:** Este é um problema de infraestrutura crítica que afeta a experiência do usuário final. A comunidade demonstra frustração significativa com o tempo de resolução.

### Outras Issues de Alto Engajamento

| # | Título | Comentários | Severidade | Área |
|---|--------|-------------|------------|------|
| [#78647](https://github.com/NousResearch/hermes-agent/issues/78647) | Repo-wide godfile eradication: residual 2K tasks | 81 | P3 | refactor/agent |
| [#88584](https://github.com/NousResearch/hermes-agent/issues/88584) | Automated Nous integration is blocked | 68 | P3 | cron |
| [#97681](https://github.com/NousResearch/hermes-agent/issues/97681) | Bot Group Chats should keep working after Desktop closes | 23 | P2 | gateway/desktop |

### Tendências Identificadas

1. **Debates sobre arquitetura de godfiles** — Issue #78647 sugere uma epic de refatoração significativa que ainda deixa 2K tarefas residuais após esforço prévio.
2. **Integração cron/Nous** — Preocupação com conflitos recorrentes em `cron/jobs.py` que bloqueiam automações de integração.
3. **Sessões remotas/VPS** — Múltiplas issues correlacionadas (#70445, #97740, #103900) indicam problemas sistêmicos na arquitetura de sessões distribuídas.

---

## 5. Bugs e Estabilidade

### 🔴 P1 — Críticos (requerem atenção imediata)

| # | Título | Área | Descrição |
|---|--------|------|-----------|
| [#58576](https://github.com/NousResearch/hermes-agent/issues/58576) | web_server event loop stalls up to 51s (GIL pressure) | desktop/tui | UI congela por até ~51s sob carga pesada de agente |
| [#98022](https://github.com/NousResearch/hermes-agent/issues/98022) | hermes update catch-up fleet restart re-fires forever | cli | Receipt corrompido causa restart infinito do fleet |
| [#100401](https://github.com/NousResearch/hermes-agent/issues/100401) | cron fire-claim heartbeat deadlocks | cron | Jobs >60s são mortos como "Interrupted by shutdown" mesmo sem shutdown |
| [#69180](https://github.com/NousResearch/hermes-agent/issues/69180) | Desktop renderer OOM crash-loop on empty chat | desktop | App consome memória explosivamente, crasha em ~7 min |
| [#72529](https://github.com/NousResearch/hermes-agent/issues/72529) | WhatsApp group messages never reach gateway | gateway/whatsapp | DMs funcionam, grupos não |
| [#96925](https://github.com/NousResearch/hermes-agent/issues/96925) | Copilot duplicates tool calls after v0.20.6 | agent/copilot | Duplicação de tool calls com warnings recorrentes |
| [#103786](https://github.com/NousResearch/hermes-agent/issues/103786) | Windows gateway-retry blocks Electron main thread (AppHangB1) | desktop/windows | App hang no Windows com dados WebSocket não lidos (~900 KB) |

### 🟠 P2 — Altos (impacto significativo)

| # | Título | Área |
|---|--------|------|
| [#63964](https://github.com/NousResearch/hermes-agent/issues/63964) | background curator loops on skill_manage patch errors |
| [#70445](https://github.com/NousResearch/hermes-agent/issues/70445) | Desktop remote/VPS session load slow, cancels on navigate |
| [#97740](https://github.com/NousResearch/hermes-agent/issues/97740) | Bot Mode sticky Stop holds invisible, rooms go silent |
| [#103840](https://github.com/NousResearch/hermes-agent/issues/103840) | state.db recovery resurrects orphan FTS5 shadow tables |
| [#103904](https://github.com/NousResearch/hermes-agent/issues/103904) | Cron next_run drifts to UTC, fires 2h late in Europe/Warsaw |
| [#102283](https://github.com/NousResearch/hermes-agent/issues/102283) | Windows Desktop update hand-off stalls, zombie process |
| [#103277](https://github.com/NousResearch/hermes-agent/issues/103277) | config set reports success but settings remain false |

### 🟡 P3 — Médios

| # | Título | Área |
|---|--------|------|
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | Skills index stale/degraded |
| [#103747](https://github.com/NousResearch/hermes-agent/issues/103747) | Windows Desktop updater progress window spins forever |
| [#26744](https://github.com/NousResearch/hermes-agent/issues/26744) | Kanban dashboard silently fails on blocked transition |
| [#103870](https://github.com/NousResearch/hermes-agent/issues/103870) | RuntimeWarning: coroutine '_watch_stdio_children' was never awaited |
| [#95529](https://github.com/NousResearch/hermes-agent/issues/95529) | Plugin-registered toolsets falsely warned as Unknown |

**Resumo de Estabilidade:** 7 bugs P1 ativos representam risco crítico para produção. Áreas mais afetadas: Desktop (6 issues P1/P2), Cron (3 issues P1/P2), e Gateway/WhatsApp (2 issues P1).

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em Discussão

| # | Título | Área | Status | Notas |
|---|--------|------|--------|-------|
| [#80791](https://github.com/NousResearch/hermes-agent/issues/80791) | Curator: content-preservation rule + lossy-merge audit | agent/skills | PR #103910 em progresso | Baseado em arXiv:2607.26637 |
| [#80790](https://github.com/NousResearch/hermes-agent/issues/80790) | Readiness-annotated skill index (executability gating) | agent/skills | Proposta | Impedir oferta de skills não executáveis |
| [#42852](https://github.com/NousResearch/hermes-agent/issues/42852) | Richer terminal output styling | cli | PR #103911 em progresso | Syntax highlighting e colorização |
| [#97681](https://github.com/NousResearch/hermes-agent/issues/97681) | Bot Group Chats should keep working after Desktop closes | gateway/desktop | Em progresso | Requer conexão de foundation a produção |
| [#44110](https://github.com/NousResearch/hermes-agent/pull/44110) | feat(auth): add --manual-paste to Spotify PKCE login | cli/auth | Proposta | Para VPS/SSH remotos |
| [#100655](https://github.com/NousResearch/hermes-agent/issues/100655) | Opt-in pre-lifecycle boundary for external applications | agent/cli | Investigando | Requer decisão de maintainer |
| [#103909](https://github.com/NousResearch/hermes-agent/pull/103909) | Honor terminal CWD overrides and enforce safe roots | terminal | Proposta | Port de safeguards do sandbox |

### Sinais de Roadmap Inferidos

1. **Consolidação de arquitetura de sessões remotas** — Multiple PRs e issues indicam foco em estabilizar Desktop + gateway distribuído
2. **Melhoria de tooling CLI** — Features de estilo, auth, e utilitários de terminal em discussão
3. **Automação de manutenção de skills** — Curator com auditoria determinística e gating de executabilidade
4. **Suporte a plataformas** — Destaque para Windows (múltiplas issues) e WhatsApp (group messaging)

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Categoria | Descrição | Severidade |
|-----------|-----------|------------|
| **Estabilidade Desktop** | Crash loops, hangs, OOM crashes tornam a aplicação inutilizável | 🔴 Crítica |
| **Experiência Windows** | Problemas de update, TLS, e hang persistente no Electron | 🔴 Alta |
| **Sessões Remotas** | Carregamento lento (20s+), cancelamento ao navegar, loops infinitos | 🟠 Significativa |
| **WhatsApp** | Group messages não chegam ao gateway; first-contact LID senders rejeitados | 🟠 Significativa |
| **Cron/Agendamento** | Timezone drift (2h), deadlocks em jobs >60s | 🟠 Significativa |
| **Skills Index** | Índice desatualizado impacta o Skills Hub | 🟡 Moderada |

### Cenários de Uso Problemáticos

1. **Desktop em produção** — Usuários experimentam congelamento de UI, crashes, e comportamento errático ao usar Hermes em Desktop contra backend local ou remoto
2. **Grupos WhatsApp** — Bots funcionam em DMs mas falham completamente em grupos, limitando casos de uso colaborativos
3. **Execução de longo prazo** — Cron jobs que excedem 60s são mortos incorretamente, impedindo automações robustas
4. **Ambientes Windows** — A experiência é significativamente degradada comparada a Linux/macOS

### Satisfação Observada

- **Autenticação Spotify** — Proposta de `--manual-paste` para VPS indica demanda por headless workflows
- **Internacionalização** — PRs ativos para Bahasa Indonesia (#92192, #93632, #103860) demonstram investimento emLocalized onboarding
- **Customização de UI** — Feature `display.vivid` (#103911) responde a demanda por output mais rico no terminal

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta/Progresso Estagnado

| # | Título | Criado | Atualizado | Comentários | Notas |
|---|--------|--------|------------|-------------|-------|
| [#26744](https://github.com/NousResearch/hermes-agent/issues/26744) | Kanban dashboard silently fails | 2026-05-16 | 2026-09-05 | 4 | Bug desde maio, sem resolução |
| [#42852](https://github.com/NousResearch/hermes-agent/issues/42852) | Richer terminal output styling | 2026-06-09 | 202

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-09-06

## 1. Panorama do dia

O projeto PicoClaw apresenta **atividade moderada** em 06/09/2026, com 5 PRs atualizadas e 2 issues movimentadas nas últimas 24h. Não houve lançamentos de novas versões, mas o repositório demonstra manutenção contínua com merge de múltiplos PRs de correções acumulados desde março. A comunidade mantém engajamento tanto em issues quanto em documentação, com destaque para uma nova PR de documentação sobre Parallel Search MCP.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.** O projeto não publicou novas versões neste período. É recomendável monitorar o repositório para futuras atualizações de版本.

---

## 3. Progresso do projeto

### PRs mergeadas/fechadas hoje (4 total)

| # | Título | Resumo |
|---|--------|--------|
| [#1559](https://github.com/sipeed/picoclaw/pull/1559) | fix: merge PR #1327 #1319 #1318 #1313 | Consolida correções de múltiplos PRs abertos |
| [#1545](https://github.com/sipeed/picoclaw/pull/1545) | fix: merge PR #1500 #1490 #1488 #1487 #1485 | Consolida correções de múltiplos PRs |
| [#1555](https://github.com/sipeed/picoclaw/pull/1555) | fix: merge PR #1390 #1389 #1383 #1381 | Consolida correções de bugs e melhorias |
| [#1541](https://github.com/sipeed/picoclaw/pull/1541) | fix: merge PR #1536 #1535 #1531 | Inclui: media tempdir centralizado, hardening contra DoS em channels, DeepWiki badge |

**Análise:** O alto volume de merges indica uma estratégia de consolidação de PRs menores em blocos coesos, possivelmente para facilitar releases futuras mais organizadas.

### PR aberta (1)

| # | Título | Status |
|---|--------|--------|
| [#3368](https://github.com/sipeed/picoclaw/pull/3368) | docs: add Parallel Search MCP setup example | **Aberta** — Adiciona exemplo copy-paste para integração com Parallel Search MCP, permitindo busca web sem API key |

---

## 4. Temas quentes da comunidade

### Issues com maior engajamento

| # | Título | Comentários | Status |
|---|--------|-------------|--------|
| [#3287](https://github.com/sipeed/picoclaw/issues/3287) | Better support long messages in IRC | **10 comentários** | Aberta |
| [#3342](https://github.com/sipeed/picoclaw/issues/3342) | Opt-in "after-turn" steering mode | 2 comentários | Fechada |

**Análise de #3287:** A comunidade demonstra interesse significativo em melhorar o suporte a mensagens longas via IRC. O problema técnico envolve:
- Limite de 512 bytes do protocolo IRC
- Divisão automática de mensagens longas por clientes
- Necessidade de reconstruir mensagens fragmentadas como unidade coesa

Este é um **enhancement de interoperabilidade** que impacta diretamente usuários que utilizam PicoClaw como bot IRC.

---

## 5. Bugs e estabilidade

**Nenhum bug crítico reportado nas últimas 24h.**

### Melhorias de estabilidade incluídas nos merges:

- **PR #1541:** Hardening contra DoS em channels — indica atenção da equipe à segurança e resiliência
- **PR #1541:** Centralização de media tempdir — sugere melhoria na gestão de arquivos temporários

**Observação:** A issue #3342 (fechada) foi marcada como `[stale]`, indicando possível abandono ou resolução implícita sem merge.

---

## 6. Pedidos de features e sinais de roadmap

### Nova feature request em destaque

| # | Título | Descrição |
|---|--------|-----------|
| [#3287](https://github.com/sipeed/picoclaw/issues/3287) | Better support long messages in IRC | Tratamento de mensagens >512 bytes como unidades coesas, reconstruindo fragmentos IRCv3 |

### Feature requests existentes em discussão

| # | Título | Status |
|---|--------|--------|
| [#3342](https://github.com/sipeed/picoclaw/issues/3342) | Opt-in "after-turn" steering mode | **Fechada** — Modo para enfileirar mensagens durante processamento ativo sem interromper a turn atual |

**Sinais de roadmap:**
- Foco em **interoperabilidade com protocolos legacy** (IRC)
- Melhorias em **controle de fluxo** e experiência multi-mensagem
- Expansão de **integrações** (Parallel Search MCP documentado)

---

## 7. Resumo de feedback dos usuários

### Cenários de uso identificados:

| Cenário | Necessidade |
|---------|-------------|
| **Bots IRC** | Suporte robusto a protocolo com limitações de tamanho |
| **Sessões ativas longas** | Não interromper processamento quando usuário envia mensagem adicional |
| **Busca web** | Integração simplificada com serviços de busca (Parallel Search MCP) |

### Dores relatadas:

- **Fragmentação de mensagens IRC** (#3287): Usuários experimentam perda de contexto ao enviar mensagens longas via IRC
- **Interrupção de turn** (#3342): Comportamento atual "Skips due to queued user message" é indesejado em alguns fluxos de trabalho

---

## 8. Backlog que merece atenção

| # | Título | Tempo em aberto | Prioridade |
|---|--------|-----------------|------------|
| [#3287](https://github.com/sipeed/picoclaw/issues/3287) | Better support long messages in IRC | ~46 dias (desde 2026-07-22) | **Alta** — 10 comentários indicam demanda real |
| [#3342](https://github.com/sipeed/picoclaw/issues/3342) | Opt-in "after-turn" steering mode | ~16 dias (desde 2026-08-21) | ~~Baixa~~ — **Fechada como stale** |

**Nota:** A issue #3287 está **sem resposta há 46 dias**, o que pode indicar:
1. Necessidade de triagem pela equipe de mantenedores
2. Complexidade técnica que demanda mais discussão
3. Baixa prioridade momentânea

---

## Métricas resumidas do dia

| Métrica | Valor |
|---------|-------|
| Issues abertas/ativas | 1 |
| Issues fechadas | 1 |
| PRs abertas | 1 |
| PRs mergeadas/fechadas | 4 |
| Releases | 0 |
| **Total de atividades** | **7** |

---

*Relatório gerado em 2026-09-06. Dados extraídos de github.com/sipeed/picoclaw.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-09-06

---

## 1. Panorama do Dia

O projeto IronClaw manteve alta atividade de desenvolvimento em 06/09/2026, com **5 PRs atualizados** e **3 issues processadas** nas últimas 24 horas. A atividade concentra-se na estabilização do módulo Telegram, com dois bugs críticos relacionados à experiência de primeiro contato de usuários resolvidos e mergeados. O codebase recebeu um refresh automático do knowledge graph via CI, indicando maturidade nos processos de automação. Não houve lançamentos de novas versões, sugerindo foco em consolidação da base atual antes de release.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24 horas.**

O projeto não emitiu novas versões hoje. Este é um período de desenvolvimento ativo sem corte de release, comum em projetos que seguem trunk-based development ou que estão preparando uma versão maior.

---

## 3. Progresso do Projeto

### PRs Merged/Fechadas

| # | Título | Tamanho | Escopo | Impacto |
|---|--------|---------|--------|---------|
| [#8054](https://github.com/nearai/ironclaw/pull/8054) | `fix(assistant): check pairing before command admission so first contact gets the connect notice` | M | Telegram | **Crítico** — Corrige UX de onboarding; usuários não-pareados agora recebem notice de conexão no primeiro contato |
| [#8073](https://github.com/nearai/ironclaw/pull/8073) | `fix(device-link): say "not configured by administrator" instead of blaming the user's account` | M | Telegram | **Experiência** — Redireciona corretamente a responsabilidade de configuração ao admin, não ao usuário |

### Análise

Ambas as correções resolvem issues relacionadas (#7956 e #7955, respectivamente) e compartilham o tema de **comunicação de estado correta** no Telegram. A correção #8054 é particularmente importante: antes, o bot exibia o inventário de comandos antes de verificar pairing, resultando em fricção na primeira interação.

---

## 4. Temas Quentes da Comunidade

### Issue em Destaque — #8074 (ABERTA)
**Título:** Paired user's rejected action in a not-connected shared channel gets the pairing notice copy instead of channel-not-connected copy

- **Autor:** thisisjoshford
- **Reações:** 0 👍
- **Comentários:** 1
- **Link:** https://github.com/nearai/ironclaw/issues/8074

**Análise:** Esta issue destaca um bug de lógica condicional onde usuários pareados recebem mensagens de erro genéricas de pairing quando deveriam ver mensagens específicas de "channel not connected". Isso indica que a verificação de estado da conexão do canal está sendo sobrescrita pela verificação de pairing, um problema de precedência de condições.

---

## 5. Bugs e Estabilidade

### Bugs Resolvidos Hoje (via PR merge)

| Severidade | Issue | Descrição |
|------------|-------|-----------|
| **Alta** | #7956 | Telegram `/start` mostrava inventário de comandos em vez do notice de conexão para usuários não-pareados |
| **Média** | #7955 | Linking de conta pessoal Telegram mostrava "Something went wrong" em vez de informar que admin não configurou credenciais |

### Bugs Abertos

| Severidade | Issue | Descrição |
|------------|-------|-----------|
| **Média** | #8074 | Usuário pareado em canal não-conectado recebe copy incorreta (provável bug de lógica condicional) |

**Métricas de Saúde:**
- **Taxa de resolução de bugs (24h):** 67% (2 de 3 issues de bug processadas foram fechadas)
- **Bugs críticos abertos:** 0
- **Regressões conhecidas:** Nenhuma reportada

---

## 6. Pedidos de Features e Sinais de Roadmap

### PRs Abertos com Intentos de Feature

| # | Título | Tamanho | Escopo | Sinal Estratégico |
|---|--------|---------|--------|-------------------|
| [#8075](https://github.com/nearai/ironclaw/pull/8075) | `feat: make the embedded Pi sandbox loop the startup default` | XL | sandbox, docs | **Prioridade para benchmarking** — Tornar o sandbox Pi o default sugere foco em performance e testing |
| [#8072](https://github.com/nearai/ironclaw/pull/8072) | `feat(telegram): register the Bot API command menu at activation` | L | telegram | **UX do Telegram** — Menu de comandos registrado dinamicamente melhora discoverability |

### Análise de Roadmap

Os PRs abertos indicam duas frentes:
1. **Infraestrutura de sandbox** — Preparação para benchmark e possibly melhoria de performance do agente
2. **Polish do Telegram** — Integração mais profunda com a Bot API, melhorando experiência native

O PR #8075 está stacked sobre #7908, sugerindo uma iniciativa maior de sandbox nativo que ainda está em desenvolvimento.

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas via Issues

1. **Experiência de onboarding confusa (#7956)**
   - Cenário: Usuário novo abre Telegram e vê lista de comandos antes de ser guiado ao pareamento
   - Emoção: Frustração, abandono potencial
   - Status: ✅ Resolvido

2. **Mensagens de erro enganosas (#7955, #8073)**
   - Cenário: Usuário tenta configurar conta Telegram pessoal e recebe "Something went wrong"
   - Emoção: Confusão, desconfiança no produto
   - Status: ✅ Resolvido (agora blaming correto)

3. **Comportamento inconsistente em canais compartilhados (#8074)**
   - Cenário: Usuário pareado em canal não-conectado recebe copy de pairing
   - Emoção: Confusão sobre estado do sistema
   - Status: 🔴 Aberto

### Satisfação Geral

A postura do time em resolver rapidamente issues de UX (#7956, #7955) indica atenção à experiência do usuário. A existência de #8074 mostra que ainda há edge cases de estado multi-dimensional (paired + channel-state) para tratar.

---

## 8. Backlog que Merece Atenção

### Issues sem Resposta há Tempo

| # | Título | Criação | Atualização | Status | Prioridade |
|---|--------|---------|-------------|--------|------------|
| [#7956](https://github.com/nearai/ironclaw/issues/7956) | Telegram: unpaired sender's /start gets command inventory | 2026-08-27 | 2026-09-05 | ✅ Closed | — |
| [#7955](https://github.com/nearai/ironclaw/issues/7955) | Telegram personal-account linking shows generic error | 2026-08-27 | 2026-09-05 | ✅ Closed | — |

**Nota:** As issues #7956 e #7955, embora antigas (criadas em 27/08), foram resolvidas ontem (05/09), demonstrando que o backlog estava sendo processado ativamente.

### Issue Aberta Antiga (Nenhuma identificada)
Todas as issues abertas são recentes (criadas em setembro de 2026), indicando healthy backlog grooming.

---

## Métricas Consolidada do Dia

| Indicador | Valor |
|-----------|-------|
| 📊 Issues processadas | 3 |
| 📊 PRs processados | 5 |
| 📊 PRs mergeados | 2 |
| 📊 Bugs críticos abertos | 0 |
| 📊 Releases | 0 |
| 🔄 Velocity | Normal (sem acúmulo de backlog) |
| 🏥 Saúde geral | ✅ Boa — correções de UX processadas rapidamente |

---

*Relatório gerado automaticamente com base em dados do GitHub de 2026-09-06. Todas as referências a issues e PRs utilizam links diretos para `github.com/nearai/ironclaw`.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do Projeto CoPaw (QwenPaw) — 2026-09-06

---

## 1. Panorama do Dia

O projeto CoPaw (QwenPaw) manteve alta atividade em 05/09/2026, com **10 issues atualizadas** e **4 pull requests** em evolução simultânea. Das issues, 7 permanecem abertas e 3 foram fechadas — sendo as fechadas relacionadas a bugs do skill img-gen e ao problema de custom provider introduzido pela migração de `max_tokens` para `max_output_length` (PR #7337). No фронтенде, a comunidade demonstra forte interesse no QwenPaw Hub multi-tenant (#7318) e no novo Advisor Mode (#7569), enquanto no backend bugs críticos como o hardcoded `32768` context_size (#7576) e o swallowing de exceptions em `_coordinator.py` (#7572) exigem atenção imediata. Nenhuma release foi publicada nas últimas 24h.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

- O projeto encontra-se em ciclo de desenvolvimento ativo com foco na versão 2.2.0, conforme indicado pela issue de planejamento do QwenPaw Hub multi-tenant (#7318).
- A ausência de releases não indica estagnação — pelo contrário, múltiplos PRs estão em estágio avançado de revisão (#7509 "Ready for Merge", #6874 "Under Review").

---

## 3. Progresso do Projeto

Três bugs foram **resolvidos e fechados** nas últimas 24h, indicando foco em estabilidade:

| Issue | Descrição | Resolução |
|-------|-----------|-----------|
| [#7474](https://github.com/agentscope-ai/QwenPaw/issues/7474) | Custom provider falhava após migração `max_tokens` → `max_output_length` (PR #7337) | ✅ Fechada |
| [#7574](https://github.com/agentscope-ai/QwenPaw/issues/7574) | img-gen: campo `model` ausente no body da requisição (HTTP 503 fallback para dall-e-2) | ✅ Fechada |
| [#7575](https://github.com/agentscope-ai/QwenPaw/issues/7575) | img-gen: `edit()` enviava `response_format` indevidamente (HTTP 400 no gpt-image-2) | ✅ Fechada |

**PRs em destaque:**

- **[#7509](https://github.com/agentscope-ai/QwenPaw/pull/7509)** — *Make Skill v2*: Workflow de aprovação para criação de Skills com validação estruturada de plano e draft privado pós-aprovação. Status: **Ready for Merge**.
- **[#7569](https://github.com/agentscope-ai/QwenPaw/pull/7569)** — *Advisor Mode*: Novos "loop modes" que emparelham um modelo advisor forte com um worker mais barato, com plano inicial de abertura. Criado em 05/09.
- **[#6874](https://github.com/agentscope-ai/QwenPaw/pull/6874)** — *MCP configurable tool call timeout*: Adiciona `tool_call_timeout` com default de 300s e honra valores superiores. Status: **Under Review**.
- **[#7486](https://github.com/agentscope-ai/QwenPaw/pull/7486)** — *Creator 1.1.2*: Notification bus async, multi-timeline A/B compare, T2V/I2V/S2V scheduling, professional media prompts, in-process locking e Docker deployment hardening.

---

## 4. Temas Quentes da Comunidade

### Issue com maior engajamento

**[#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318)** — *"QwenPaw Hub, the multi-tenant edition, is coming in 2.2.0"*  
- 📊 23 comentários | 👍 3 reações  
- 📅 Criado: 2026-08-26 | Atualizado: 2026-09-05  
- 🔗 [Issue completa](https://github.com/agentscope-ai/QwenPaw/issues/7318)

**Análise:** A issue número 7318 é o tema maisdiscussado da semana, refletindo demanda clara da comunidade por **acesso multi-usuário e gerenciamento centralizado de skills**. A transição de assistente pessoal para plataforma colaborativa é o principal vetor de crescimento percebido pela base de usuários. Os 23 comentários indicam processo ativo de priorização de features para a 2.2.0.

**Demandas relacionadas captadas:**
- Multi-user access com roles e permissões
- Admin-managed skills centralizados
- Hub de distribuição de skills para equipes

### PR em destaque comunitário

**[#7569](https://github.com/agentscope-ai/QwenPaw/pull/7569)** — *Advisor Mode*  
Criado em 05/09 com proposta de modo de conversação que usa dois modelos em tandem (advisor + worker), permitindo economia de custos mantendo qualidade. Demonstra tendência de inovação em modos de interação.

---

## 5. Bugs e Estabilidade

### 🔴 Crítico (requer atenção imediata)

| Issue | Severidade | Descrição |
|-------|-----------|-----------|
| [#7576](https://github.com/agentscope-ai/QwenPaw/issues/7576) | **Crítica** | `RetryChatModel.__init__` em `retry_chat_model.py` tem fallback hardcoded de `32768` tokens que força **todos os modelos** a usar contexto inadequado (CONTEXT_UNFIT para modelos >31130 tokens). Afeta v2.1.0 até v2.2.0. |
| [#7572](https://github.com/agentscope-ai/QwenPaw/issues/7572) | **Alta** | `_coordinator.py` `_drain()` usa `except Exception` genérico, transforma exceções em strings de uma linha e **não loga nem relança**. Impossibilita debugging em toda a chain de tool calls. Afeta v2.2.0. |

### 🟡 Moderado

| Issue | Severidade | Descrição |
|-------|-----------|-----------|
| [#7571](https://github.com/agentscope-ai/QwenPaw/issues/7571) | **Moderada** | Agent "esquece" configurações de workspace e gera TODO files em caminhos incorretos. Problema recorrente (não é regressão de versão). Usuário reportando dor real em fluxo de desenvolvimento de plugins. |

### 🟢 Resolvidos (fechadas em 05/09)

- [#7474](https://github.com/agentscope-ai/QwenPaw/issues/7474) — Custom provider loading pós-migração `max_tokens`
- [#7574](https://github.com/agentscope-ai/QwenPaw/issues/7574) — img-gen missing `model` field
- [#7575](https://github.com/agentscope-ai/QwenPaw/issues/7575) — img-gen `response_format` incorreto em edit()

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features abertas mais relevantes

| Issue | Label | Descrição | Sinais de Roadmap |
|-------|-------|-----------|-------------------|
| [#7557](https://github.com/agentscope-ai/QwenPaw/issues/7557) | enhancement | Metadata de versão e dependências para skills (skill_pool) | Padronização de skill versioning; combate a cópias não rastreadas entre workspaces |
| [#7573](https://github.com/agentscope-ai/QwenPaw/issues/7573) | enhancement | Botões "Edit last message" e "Rewind" no Web UI | Melhoria de UX para correção de prompts sem restart de sessão |
| [#7570](https://github.com/agentscope-ai/QwenPaw/issues/7570) | — | Feishu: auto-colapsar思考过程卡片 após output finalizar | Melhoria de UI para modelos com forced thinking (GLM-5.x) |
| [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) | question/discussion | QwenPaw Hub multi-tenant (2.2.0) | **Principal sinal de roadmap**: expansão de uso pessoal para teams |

### Proposta inovadora em PR

**[#7569](https://github.com/agentscope-ai/QwenPaw/pull/7569)** — Advisor Mode demonstra tendência de adicionar **modos de operação** intercambiáveis por conversa (similar a Goal/Mission), sinalizando estratégia de product-market fit para diferentes perfis de uso.

---

## 7. Resumo de Feedback dos Usuários

### Dores reais identificadas

1. **Problema de memória e persistência de configurações** (#7571)  
   Usuário reporta que o agent "esquece" restrições de paths para arquivos TODO e que desenvolvedores de plugins enfrentam confusão entre diretório de desenvolvimento (A), runtime path (B) e deployment path (C). **Impacto**: fluxo de trabalho de desenvolvimento com múltiplos ambientes fica comprometido.

2. **Impossibilidade de debugging em produção** (#7572)  
   Quando tool calls falham na chain de `_coordinator.py`, a exception é suprimida e só uma string genérica chega ao modelo. Manterers e usuários ficam cegos quanto à origem de falhas. **Impacto**: manutenção dificultada e suporte degradado.

3. **Contexto inadequado para modelos menores** (#7576)  
   O fallback hardcoded de 32768 tokens faz com que modelos com janela de ~32k tokens sempre recebam `CONTEXT_UNFIT`, mesmo quando o contexto real seria adequado. **Impacto**: degradação silenciosa de performance para todo modelo abaixo de 32768 tokens.

### Cenários de uso emergentes

- **Desenvolvimento colaborativo de plugins**: Usuários tentando usar QwenPaw como IDE assistant em cenários multi-projeto.
- **Multi-tenant para equipes**: Demanda consolidada (#7318) por版本 de Hub para empresas.
- **Agentes heterogêneos em fleet**: Issue #7557 evidencia necessidade de gerenciar 9+ agents com skills compartilhados e versionados.

---

## 8. Backlog que Merece Atenção

### Issues sem resposta ou estagnadas

| Issue | Idade | Status | Prioridade |
|-------|-------|--------|------------|
| [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) | 10 dias | Aberta com 23 comentários | 🔴 Alta — definição de roadmap 2.2.0 |
| [#7571](https://github.com/agentscope-ai/QwenPaw/issues/7571) | <1 dia | Aberta, 1 comentário | 🟡 Moderada — mas indica bug recorrente |

### PRs em revisão prolongada

| PR | Idade | Status | Nota |
|----|-------|--------|------|
| [#6874](https://github.com/agentscope-ai/QwenPaw/pull/6874) | ~26 dias | Under Review | Adiciona `tool_call_timeout` configurável — feature útil para MCP clients com operações longas |

### Recomendações de atenção

1. **#7576 e #7572 são bugs de severidade alta/crítica** que afetam estabilidade do core em produção. Considerar hotfix ou merge prioritário.
2. **#7318 define o roadmap da 2.2.0** — a discussão precisa de resposta da equipe core para não perder momentum comunitário.
3. **#7571 representa padrão recorrente** de falha de memória — pode indicar necessidade de redesign da camada de configuração de workspace.

---

*Relatório gerado em 2026-09-06. Dados de atividade do GitHub referentes ao período de 24h anterior.*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório de Projeto ZeroClaw — 2026-09-06

## 1. Panorama do Dia

ZeroClaw mantém alta atividade de desenvolvimento com 42 issues e 50 PRs atualizados nas últimas 24h. A release v0.8.5 recém-publicada (454 commits, 73 contribuidores) traz ZeroRelay, ZeroRouter e reforços massivos de segurança em plugins, sandbox e webhooks. A comunidade está profundamente engajada em RFCs arquiteturais, com 10+ proposals em discussão ativa sobre sessões, arquivos, sandbox e provedores WASM. O estado geral reflete um projeto maduro em fase de estabilização pós-release, com foco em hardening de segurança e ergonomia operacional.

---

## 2. Lançamentos

### v0.8.5
**454 commits | 73 contribuidores**

- **ZeroRelay e ZeroRouter**: novos componentes de conectividade e roteamento de mensagens.
- **Live chat expandido**: capacidades de chat ao vivo e provedores ampliado.
- **Hardening de segurança**: reforços em plugin sandbox, webhook, credenciais e limites de arquivos.
- **Sem breaking changes documentados** nas informações disponíveis.

🔗 [Release v0.8.5](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.8.5)

---

## 3. Progresso do Projeto

### PRs Merged/Closed Recentemente

| # | PR | Impacto |
|---|----|---------|
| [#10630](https://github.com/zeroclaw-labs/zeroclaw/pull/10630) | fix(config): bind degraded remediation to running executable | Corrige recomendação de migração que apontava para binário diferente do daemon em execução |
| [#10435](https://github.com/zeroclaw-labs/zeroclaw/pull/10435) | fix(providers): preserve model context when anchoring Gemini requests | Mantém contexto de modelo em requisições Gemini — bug de regressão corrigido |
| [#10064](https://github.com/zeroclaw-labs/zeroclaw/pull/10064) | fix(channels/telegram): self-destruct approval cards after operator tap | Cards de aprovação no Telegram agora se auto-destroem após toque do operador |
| [#10088](https://github.com/zeroclaw-labs/zeroclaw/pull/10088) | fix(multimodal): preserve attached images after source removal | Persistência de marcadores de imagem após remoção da fonte original |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários)

1. **[#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487)** — RFC: Runtime-owned conversation sessions (33 comentários)
   - Proposta de ownership de sessões de conversa pelo runtime e adapters de surface de transporte.
   - Status: Proposed Rev.5, aguardando novo ciclo de votação.

2. **[#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488)** — RFC: Unified file and attachment architecture (26 comentários)
   - Arquitetura unificada para arquivos e anexos em superfícies de conversa.
   - Status: Proposed Rev.10, alto risco, necessidade de decisão.

3. **[#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)** — RFC: Work Lanes, Board Automation (24 comentários)
   - Automação de work lanes e governança de labels.
   - Status: Ratified, rollout em progresso.

4. **[#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996)** — RFC: Granular sandbox policy (24 comentários)
   - Políticas granulares de filesystem para sandbox (Bubblewrap, Landlock, Seatbelt).
   - Status: In-progress, risco alto, revisão pendente.

**Análise**: A comunidade demonstra forte interesse em arquitetura de sessões, segurança de sandbox e governança de processo. RFCs de arquitetura dominam o diálogo — indicativo de projeto em maturação técnica avançada.

---

## 5. Bugs e Estabilidade

### Por Severidade

#### S1 — Workflow Bloqueado
| # | Bug | Descrição |
|---|-----|-----------|
| [#10536](https://github.com/zeroclaw-labs/zeroclaw/issues/10536) | macOS Seatbelt ignora `allowed_roots` | Shell commands falham com "Operation not permitted" mesmo com roots configurados |

#### S2 — Degraded Behavior
| # | Bug | Descrição |
|---|-----|-----------|
| [#10533](https://github.com/zeroclaw-labs/zeroclaw/issues/10533) | `model_routing_config` rejeita `custom.*` e outros slots válidos | Validação diverge do schema de configuração |
| [#10625](https://github.com/zeroclaw-labs/zeroclaw/issues/10625) | Placeholder `[media attachment]` entregue ao usuário com modelo non-vision | Media markers não tratados corretamente |
| [#10045](https://github.com/zeroclaw-labs/zeroclaw/issues/10045) | Image markers retêm paths temporários e alertam repetidamente | Caminhos de fonte temporários persistem nos marcadores |
| [#10534](https://github.com/zeroclaw-labs/zeroclaw/issues/10534) | Bounded delegates stripping `delegate` tool contradiz configuração | Policy de delegação ignorada em modo bounded |
| [#10532](https://github.com/zeroclaw-labs/zeroclaw/issues/10532) | Remediation de degraded-config pode invocar binário diferente do daemon rodando | Recomendação de migração aponta para binário errado |
| [#10282](https://github.com/zeroclaw-labs/zeroclaw/issues/10282) | Hardware probe feature não chega às implementações de tools | Feature gate não propaga para `zeroclaw-tools` |
| [#10626](https://github.com/zeroclaw-labs/zeroclaw/issues/10626) | TTS sintetiza Markdown e emoji verbatim | Sintetizador fala markup e emojis sem pré-processamento |

#### S3 — Minor
| # | Bug | Descrição |
|---|-----|-----------|
| [#10585](https://github.com/zeroclaw-labs/zeroclaw/issues/10585) | Log sink regression race em migration tests | Testes de migração competem por locks de logging |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features em Discussão

| # | Feature | Escopo | Status |
|---|---------|--------|--------|
| [#10641](https://github.com/zeroclaw-labs/zeroclaw/issues/10641) | Per-field cron schedule input (Web) | Interface de cron job com inputs por campo | Aberta |
| [#10640](https://github.com/zeroclaw-labs/zeroclaw/pull/10640) | Passive Telegram group context | Mensagens não-mentionadas como contexto silencioso | Aberta |
| [#10050](https://github.com/zeroclaw-labs/zeroclaw/issues/10050) | RFC: Verbatim channel send over gateway | Rota gateway para envio verbatim sem agent turn | Accepted |
| [#10222](https://github.com/zeroclaw-labs/zeroclaw/issues/10222) | RFC: Opt-in single-tool provider rounds | Controle de rounds por tool em agentes interativos | Accepted |
| [#10530](https://github.com/zeroclaw-labs/zeroclaw/issues/10530) | Pass Anthropic extended-thinking via OpenAI-compatible providers | Passthrough de extended thinking por gateways compatíveis | Aberta |
| [#10076](https://github.com/zeroclaw-labs/zeroclaw/issues/10076) | RFC: Composable WASM plugin runtime architecture | Arquitetura de plugins WASM com APIs tipadas e extension points | Aberta |

### Trackers de Implementação Ativos

- **[#10339](https://github.com/zeroclaw-labs/zeroclaw/issues/10339)** — Implementar shell V1 approval policy (#7155) — Prioridade P1, risco alto.
- **[#9593](https://github.com/zeroclaw-labs/zeroclaw/issues/9593)** — Refatorar `TaskRecord` como único owner de lifecycle para background delegation — In-progress.
- **[#9459](https://github.com/zeroclaw-labs/zeroclaw/issues/9459)** — Tracker de estabilização v0.8.5 (linha semanal ativa).

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

1. **Instalação em Android/Termux**: `install.sh` seleciona binário Linux genérico em vez do aarch64 específico ([#7911](https://github.com/zeroclaw-labs/zeroclaw/issues/7911) — **CLOSED**).
2. **Configuração de modelo custom**: Validação de tool rejeita referências custom válidas, quebrando workflows de roteamento ([#10533](https://github.com/zeroclaw-labs/zeroclaw/issues/10533)).
3. **Experiência de cron no Web**: Usuários reclamam de input livre para schedule sem validação ou preview legível ([#10641](https://github.com/zeroclaw-labs/zeroclaw/issues/10641)).
4. **Grupos Telegram**: Sessões compartilhadas em grupos forcadas a `Sender`, dificultando colaboração multi-usuário ([#9772](https://github.com/zeroclaw-labs/zeroclaw/pull/9772) — BLOCKED).
5. **TTS em Matrix**: Sintetizador entrega Markdown e emoji como texto falado — experiência degrade em deployments self-hosted ([#10626](https://github.com/zeroclaw-labs/zeroclaw/issues/10626)).

### Padrões de Satisfação

- Approvals cards no Telegram com self-destruct ([#10064](https://github.com/zeroclaw-labs/zeroclaw/pull/10064)) receberam feedback positivo.
- RFCs em alta discussão indicam comunidade engajada com direção técnica do projeto.
- Release v0.8.5 com 73 contribuidores demonstra crescimento saudável do ecossistema.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Bloqueadas há >1 Semana

| # | Título | Status | Tempo | Prioridade |
|---|--------|--------|-------|------------|
| [#9997](https://github.com/zeroclaw-labs/zeroclaw/pull/9997) | Telegram secure model picker | **BLOCKED** | ~22 dias | Risco Alto |
| [#10356](https://github.com/zeroclaw-labs/zeroclaw/pull/10356) | AnySearch web search provider | **BLOCKED** | ~12 dias | Risco Alto |
| [#10358](https://github.com/zeroclaw-labs/zeroclaw/pull/10358) | Mattermost approval prompts | **BLOCKED** | ~12 dias | Risco Alto |
| [#9772](https://github.com/zeroclaw-labs/zeroclaw/pull/9772) | Telegram per_user_session toggle | **BLOCKED** | ~32 dias | Risco Alto |
| [#9272](https://github.com/zeroclaw-labs/zeroclaw/pull/9272) | Anthropic refusals with fallback notices | Needs-author-action | ~45 dias | Risco Médio |
| [#9420](https://github.com/zeroclaw-labs/zeroclaw/pull/9420) | Anthropic stored OAuth profiles | Needs-author-action | ~42 dias | Risco Alto |
| [#9320](https://github.com/zeroclaw-labs/zeroclaw/pull/9320) | Cron bounded agent job timeout | Needs-author-action | ~45 dias | Risco Alto |

### Recomendação

Os PRs bloqueados (9997, 10356, 10358, 9772) representam features prometidas à comunidade. Recomenda-se review priorizado ou sinalização clara de blockers para evitar frustração de contribuidores.

---

**Fontes**: [github.com/zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | Dados de 2026-09-06.

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*